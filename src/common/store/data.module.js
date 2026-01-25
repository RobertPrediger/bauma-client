import { dataService }          from '../services/data.service';

import _                        from 'lodash';
import debug                    from 'debug';

export const Data = function ( stateName, collName ) {
    const log         = debug( `app:${stateName}.module` );

    const state     = () => {
            return {
                data:       [],
                pos:        0,
                total:      0,
                lastRow:    0,
                loaded:     false,
                loading:    false,
                init:       false,
                filter:     null,
                
                record:     {},
                deleting:   false,
                error:      false,
                param:      {}
            };
        };
    
    const getters   = {
        data:   state => {
            return state.data;
        },
        record:   state => {
            return state.record;
        },
        count:  state => {
            return state.data.length;
        }
    };
    
    const actions   = {
        initStore( { state, commit, rootState }, { callEvent } ) {
            log( 'initStore', state.init );
            
            // Only connect socket, when not initialized
            if (!state.init) { 
                log( 'register socket' );

                rootState.socket.socket.on( 'data:' + collName, async ( resp ) => {
                    log( 'data:' + collName, resp );
        
                    // if error -> return with failure
                    if (resp.error)
                        return commit( resp.type + 'Failure', resp );
    
                    // commit success
                    commit( resp.type + 'Success', resp );
    
                    // if caller did register for callback
                    if ( _.isFunction(callEvent) )
                        await callEvent( resp );
                });
            }
        },

        async getStore( { commit, state }, param ) {
            log( 'getStore', param );
            
            function waitForResult() {
                return new Promise( (resolve, reject) => {

                    // start interval                
                    let interval    = setInterval( () => {

                        // get condition
                        if (!state.loading) {
                            clearInterval( interval );
                            resolve();
                        }
                    }, 300 );
                }); 
            }

            if ( state.loaded && state.param === param )
                return { 
                    data:       state.data,
                    total:      state.total
                };

            if ( !state.loading ) {
                try {
                    commit( 'loading' );

                    // filter -> master is param, filter could already be set and now we just get 2nd page -> use same filter
                    const filter        = _.defaults( param && param.filter, state.filter );

                    // if param.filter -> save it in state
                    // if (param && param.filter)
                    //     commit( 'setFilter', param.filter );

                    let body        = await dataService.getAll( collName, _.defaults( { filter }, param ) );
    
                    commit( 'getSuccess', { data: body.data, param } );

                    return body;
                }
                catch( error ) {
                    commit( 'getFailure', error );
                    error.status === 502    && this.$router.push('/login');
                }
            } else {
                await waitForResult();
                log( 'getStore', 'LOADING!', stateName );
                return { 
                    data:       state.data,
                    total:      state.total
                };
            }
        },
        
        // just set filter for default search
        setFilter( { commit }, filter ) {
            commit( 'setFilter', filter );
        }
    };
    
    const mutations = {
        init( state ) {
            state.init          = true;
        },
        loading( state ) {
            state.loading       = true;
        },
        getSuccess( state, body ) {
            state.loading       = false;
            state.loaded        = true;
            
            // mix data inside
            state.data          = _.unionBy( state.data, body.data || [], '_id' );
            state.total         = state.data.length;
            state.param         = body.param;
        },
        getFailure( state, error ) {
            state.loading       = false;
            state.data          = [];
            state.error         = error;
        },

        // success for add, update and delete
        addSuccess( state, elm ) {
            log( 'addSuccess', elm );
            state.loading       = false;
        },
        updateSuccess( state, resp ) {
            let found       = false,
                id          = resp.body._id;
            
            // change existing state data
            state.data          = state.data.map( data => {
                if (data._id === id ) {
                    found       = true;
                    return resp.body;
                }
                return data;
            });
            
            // if not found -> add it
            if (!found)
                state.data.push( resp.body );

            state.loading       = false;
        },
        deleteSuccess(state, resp ) {
            log( 'deleteSuccess', resp.data );
            
            // remove deleted user from state
            state.data          = state.data.filter( elm => resp.data.value._id !== elm._id );
            state.loading       = false;
        },
        setFilter( state, filter ) {
            state.filter    = filter;
        }
    };

    return {
        namespaced: true,
        state,
        getters,
        actions,
        mutations
    };
};
