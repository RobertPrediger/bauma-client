//import Vue                      from 'vue';
//import { Notify }               from 'quasar';
import { dataService }          from '../services/data.service';

import _                        from 'lodash';

import debug                    from 'debug';
const log         = debug( 'app:dynamic.module' );

const state     = () => {
        return {
            collName:   '',
            dataId:     '',
            record:     {},
            action:     {}
        };
    };

const getters   = {
    record:   state => state.record,
};

const actions   = {
    initStore( { commit }, { dataId, collName } ) {
        log( 'setDataId', dataId, collName );
        
        commit( 'init', { dataId, collName } );
    },
    
    async setRecord( { commit, dispatch, state }, record ) {
        log( 'setRecord', state.dataId, { body: record } );

        commit( 'setRecord', record );

        await dispatch( 'dispatchAction', { action: 'setRecord', param: record } );
    },
    
    async addRecord( { commit, state, dispatch }, { record, action } ) {
        log( 'addRecord', record );

        record      = await dataService.add( state.collName, { 
                coll:       state.collName,
                body:       record,
                action
            } );

        commit( 'setRecord', record );

        await dispatch( 'dispatchAction', { action: 'saveSuccess',  param: { type: 'update', body: record } } );
        await dispatch( 'dispatchAction', { action: 'setRecord',    param: record } );
        await dispatch( 'dispatchAction', { action: 'select',       param: record } );
        await dispatch( 'dispatchAction', { action: 'setButton',    param: 'SELECT' } );

        return record;
    },

    async updateRecord( { commit, state, dispatch }, { record, action } ) {
        log( 'updateRecord', record, state.collName );

        await dataService.update( { 
            coll:       state.collName,
            body:       record,
            action
        } );
        
        commit( 'setRecord', record );
        
        await dispatch( 'dispatchAction', { action: 'setRecord', param: record } );
        
        return record;
    },

    async deleteRecord( { commit, state, dispatch }, { record, action } ) {
        log( 'deleteRecord', record );

        await dataService.delete( state.collName, { 
            coll:       state.collName,
            body:       record,
            action
        } );

        commit( 'setRecord', {} );
        await dispatch( 'dispatchAction', { action: 'setRecord', param: {} } );

        return {};
    },
    
    async registerAction( { commit, state }, { action, target, func } ) {
        log( 'register', state.dataId, target, action );

        // register function
        commit( 'registerAction', { action, func, target } );
    },
    
    async dispatchAction( { state }, { action, param } ) {
        log( 'dispatch', action );
        
        // check if action exists
        if (state.action[ action ]) {
            
            // run function
            for( let item of state.action[ action ] ) {
                log( 'action', action, item.target, param );
                await item.func( param );
            }
        }
    }
};

const mutations = {
    init( state, { dataId, collName } ) {
        state.dataId        = dataId;
        state.collName      = collName;
    },
    setRecord( state, record ) {
        state.record        = record;
    },
    registerAction( state, { action, func, target } ) {

        // check if name already exists
        if (!state.action[ action ])
            state.action[ action ]        = [];

        // push function in array
        state.action[ action ].push( { target, func } );
    }
};

export default {
    namespaced:  true,
    state,
    getters,
    actions,
    mutations
};
