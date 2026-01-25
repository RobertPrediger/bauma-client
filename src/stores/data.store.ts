import { defineStore, storeToRefs } from 'pinia'

import { dataService }              from '../services/data.service';
import { useSocketStore }           from './socket.module';

import _                            from 'lodash';
import debug                        from 'debug';
const log       = debug('app:data.store');

interface IDataState {
    _collName:   string,
    _data:       any[];
    _pos:        number;
    _total:      number;
    _lastRow:    number;
    _loaded:     boolean;
    _loading:    boolean;
    _init:       boolean;
    _filter:     unknown;
    
    _action:     unknown | any;
    _record:     unknown;
    _deleting:   boolean;
    _error:      boolean;
    _param:      unknown;
}

log( 'create' );

export function useDataStore( stateName: string, collName: string ): any {
    const log         = debug( `app:data:${stateName}.store` );

    log( 'create', stateName, collName );

    const socketStore                   = useSocketStore();
    const { socket }                    = storeToRefs( socketStore );                
                    
    return defineStore( stateName, {
        state:      () => ({
            _collName:   collName,
            _data:      [],
            _pos:        0,
            _total:      0,
            _lastRow:    0,
            _loaded:     false,
            _loading:    false,
            _init:       false,
            _filter:     null,
            
            _record:     {},
            _action:     {},
            _deleting:   false,
            _error:      false,
            _param:      {}
        }),

        getters:    {
            data:       state => state._data,
            record:     state => state._record,
            count:      state => state._data.length
        },

        actions:    {
            initStore( { init, callEvent }: { init?: boolean, callEvent?: any } = {}) {
                
                if (init !== undefined)
                    this._init      = init;

                log( 'initStore', this._init );

                // Only connect socket, when not initialized
                if (!this._init) {
                    log( 'register socket' );

                    socket.value.on( 'data:' + collName, async ( resp: any ) => {
                        log( 'socket data', resp );
            
                        // if error -> return with failure
                        if (resp.error) {
                            return this[ `${resp.type}Failure`]( resp );
                        }
        
                        // commit success
                        this[ `${resp.type}Success` ]( resp );        
                    });

                    this._init      = true;
                }
            },
    
            async getStore( param: any ) {
                log( 'getStore', param );
                
                if ( this._loaded && this._param === param ) {
                    return { 
                        data:       this._data,
                        total:      this._total
                    };
                }
    
                try {
                    this.loading();

                    // filter -> master is param, filter could already be set and now we just get 2nd page -> use same filter
                    const filter        = _.defaults( param && param.filter, this._filter );

                    // if param.filter -> save it in state
                    if (param && param.filter)
                        this._filter    = param.filter;

                    const body        = await dataService.getAll( collName, _.defaults( { filter }, param ) );
    
                    this.getSuccess( { data: body.data, param } );

                    return body;
                }
                catch( error: any ) {
                    this.getFailure( error );
                    error.status === 502    && this.$router.push('/login');
                }
            },

            // register a function for an action
            registerAction( { action, target, func }: { action: string, target: any, func: any } ) {
                log( 'register', stateName, target, action );
        
                // register function
                if (!this._action[ action ])
                    this._action[ action ]        = [];
                this._action[ action ].push( { target, func } );
            },
            
            // check if we have registered functions for a specific action
            async dispatchAction( { action, param = {} }: { action: string, param?: any } ) {
                log( 'dispatch', action );
                
                // check if action exists
                if (this._action[ action ]) {
                    
                    // run function
                    for( const item of this._action[ action ] ) {
                        log( 'action', action, item.target, param );
                        await item.func( param );
                    }
                }
            },
            
            // just set filter for default search
            setFilter( filter: any ) {
                this._filter    = filter;
            },

            init() {
                this._init          = true;
            },
            loading() {
                this._loading       = true;
            },

            getSuccess( body: any ) {
                this._loading       = false;
                this._loaded        = true;
                
                // mix data inside
                this._data          = _.unionBy( this._data, body.data || [], '_id' );
                this._total         = this._data.length;
                this._param         = body.param;
            },
            getFailure( error: any ) {
                this._loading       = false;
                this._data          = [];
                this._error         = error;
            },
    
            // success for add, update and delete
            addSuccess( elm: any ) {
                log( 'addSuccess', elm );
                this._loading       = false;
            },
            updateSuccess( resp: any ) {
                log( 'updateSuccess', resp.body )
                const id          = resp.body._id;
                
                // change existing state data
                const index     = this._data.findIndex( data => data._id === id );
                if (index > -1) {
                    this._data.splice( index, 1, resp.body );
                } else {
                    this._data.push( resp.body );
                }
    
                this._loading       = false;
            },
            deleteSuccess( resp: any ) {
                log( 'deleteSuccess', resp.data );
                
                // remove deleted user from state
                this._data          = this._data.filter( elm => resp.data.value._id !== elm._id );
                this._loading       = false;
            },

            async setRecord( record: any ) {
                log( 'setRecord', stateName, record._id );

                const body        = await dataService.getById( collName, record._id );
                
                this._record    = body;
        
                await this.dispatchAction( { action: 'setRecord', param: body } );
            },
            
            async addRecord( action: string, { record }: { record: any } ) {
                log( 'addRecord', record );
        
                const resp          = await dataService.add( { 
                        coll:       this._collName,
                        body:       record,
                        action,
                        socket:     socket.value
                    } );
        
                this._record    = resp.data;
    
                await this.dispatchAction( { action: 'updateSuccess',   param: { type: 'add', body: this._record } } );
                await this.dispatchAction( { action: 'setRecord',       param: this._record } );
                await this.dispatchAction( { action: 'select',          param: this._record } );
                await this.dispatchAction( { action: 'setButton',       param: 'SELECT' } );
        
                return record;
            },
        
            async updateRecord( { record, action }: { record: any, action: string } ) {
                log( 'updateRecord', record, this._collName );
        
                const body: any      = await dataService.update( { 
                    coll:       this._collName,
                    body:       record,
                    action,
                    socket:     socket.value
                } );
                
                this._record    = body;

                const index    = this._data.findIndex( ( elm: any ) => elm._id === body._id );
                if (index > -1) {
                    this._data.splice( index, 1, body );
                } else {
                    this._data.push( body );
                }
    
                await this.dispatchAction( { action: 'updateSuccess',   param: { type: 'update', body } } );
                await this.dispatchAction( { action: 'setRecord',       param: body } );
                // await this.dispatchAction( { action: 'select',          param: body } );
                
                return record;
            },
        
            async deleteRecord( { record }: { record: any } ) {
                log( 'deleteRecord', record );
        
                try {
                    await dataService.delete( { 
                        coll:       this._collName,
                        body:       record,
                        socket:     socket.value
                    } );
            
                    this._record    = {};

                    const index         = this._data.findIndex( ( elm: any ) => elm._id === record._id );
                    this._data.splice( index, 1 );

                    await this.dispatchAction( { action: 'deleteSuccess',   param: { type: 'delete', body: record } } );
                    await this.dispatchAction( { action: 'setRecord',       param: { record: {} } } );
            
                    return {};
                }
                catch( error ) {
                    log( 'deleteRecord error', record._id, error );
                    throw error;
                }
            },
            
        }
    })();
}
