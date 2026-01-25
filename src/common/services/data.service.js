import Vue                  from 'vue';
import { useGetters }           from '@u3u/vue-hooks';

import debug                            from 'debug';
const log         = debug('app:data.service');

export const dataService = {
    getAll,
    getById,
    add,
    update,
    delete: _delete
};

async function getAll( coll, body ) {
    log( 'getAll', coll, body );

    let data    = await Vue.http.post( `/data/${coll}`, body );

    return data.body;
}

function add( coll, rec ) {
    log( 'add start', coll, rec );

    const socket    = getSocket();

    return new Promise( ( resolve, reject ) => {
        
        socket.emit( 'data:add', { 
            body:       rec.body,
            coll
        }, (res) => {
            log( 'response', res );
            if (res.error) {
                return reject( res.error );
            }
            resolve( res );
        } );
    });
}

function update( { coll, body, action } ) {
    log( 'update start', coll, body );

    const socket    = getSocket();

    return new Promise( ( resolve, reject ) => {
        
        socket.emit( 'data:update', { 
            body,
            action,
            coll
        }, (res) => {
            log( 'response', res );
            if (res.error) {
                return reject( res.error );
            } else if (res.data && !res.data.ok) {
                return reject( res.data.lastErrorObject );
            }
            resolve( res.data.value );
        } );
    });
}

async function getById( coll, id ) {

    let data    = await Vue.http.post( `/data/${coll}/${id}` );
    log( 'getById', data.body );

    return data.body;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete( coll, param ) {
    log( 'delete start', coll, param.body._id );

    const socket    = getSocket();

    return new Promise( ( resolve, reject ) => {
        
        socket.emit( 'data:delete', param, (res) => {
            log( 'response', res );
            if (res.error) {
                return reject( res.error );
            } else if (res.data && res.data.ok !== 1) {
                return reject( res.data.lastErrorObject );
            }
            resolve( param.body._id );
        } );
    });
}

function getSocket() {
    const getters    = {
        ...useGetters( 'socket', { socket:  'socket' } )
    }
    return getters.socket.value;
}