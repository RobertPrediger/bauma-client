/* global */
import Vue                  from 'vue';

import debug                            from 'debug';
const log         = debug('app:documents.service');

export const docService = {
    getDocuments
};

async function getDocuments( { filter } ) {
    log( 'getDocuments:', filter );
    
    try {
        let docs        = await Vue.http.post( '/custom/getDocuments', { filter } );
        log( 'getDocuments ->', docs );

        return docs.body;
    }
    catch(err) {
        log( 'Error getDocuments', err );
        throw err;
    }
}
