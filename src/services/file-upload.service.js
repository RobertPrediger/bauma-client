// file-upload.service.js
import Vue                  from 'vue';

import debug                            from 'debug';
const log         = debug('app:file-upload' );

async function upload(formData) {
    const url   = '/custom/upload';
    
    try {
        log( 'start upload' );
        let resp    = await Vue.http.post( url, formData );
        log( 'upload', formData, resp.body );
        Object.assign( {}, resp.body, { url: `/images/${resp.body.id}` } );
    }
    catch(err) {
        log( 'upload', err );
        throw err;
    }
}

async function download( collName, formData ) {
    const url   = `/custom/download/${formData.filename}`;
    
    try {
        log( 'start download' );
        formData.collName       = collName;
        let resp    = await Vue.http.post( url, formData );
        log( 'download', formData, resp.body );
        return resp.body;
    }
    catch(err) {
        log( 'download', err );
        throw err;
    }
}

export { upload, download };