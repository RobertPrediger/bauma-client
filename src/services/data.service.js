import { useSocketStore }           from '../stores/socket.module';

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

    const resp    = await axios.post( `/data/${coll}`, body );

    return resp.data;
}

function add( { coll, body, action, socket } ) {
    log( 'add start', coll, body );

    return new Promise( ( resolve, reject ) => {
        
        socket.emit( 'data:add', { 
            body,
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

function update( { coll, body, action, socket } ) {
    log( 'update start', coll, body, socket.connected );

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

    const resp    = await axios.post( `/data/${coll}/${id}` );
    log( 'getById', coll, id, resp.data );

    return resp.data;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete( { coll, body, socket } ) {
    log( 'delete start', coll, body._id );

    return new Promise( ( resolve, reject ) => {
        
        socket.emit( 'data:delete', { coll, body }, (res) => {
            log( 'response', res );
            if (res.error) {
                return reject( res.error );
            }
            resolve( body._id );
        } );
    });
}
