/* global  */
import { docService }                  from '../services/documents.service';

import debug            from 'debug';
const log       = debug('app:documents.module');

log( 'start' );

const state     = { 
        documents:      null
    };

const getters   = {
        documents:       state => state.documents
    };

const actions   = {
    
    async getDocuments( { dispatch, commit }, { filter } ) {
        log( 'getDocuments', filter );
        
        try {
            let docs        = await docService.getDocuments( { filter } );
            commit( 'docSuccess', docs );
        }
        catch(error) {
            log( 'getDocuments error', error );
            commit('docFailure', error);
        }
    },
    
};

const mutations = {
    docSuccess( state, docs ) {
        state.documents     = docs;
    },
    docFailure( state ) {
        state.documents     = [];
    },
};

export const documents = {
    getters,
    namespaced: true,
    state,
    actions,
    mutations
};