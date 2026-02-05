import debug                            from 'debug';
const log         = debug('app:data.service');

export const dataService = {
    getAll,
    getById,
    add,
    update,
    delete: _delete
};

async function getAll( coll: any, body: any ) {
    log( 'getAll', coll, body );

    const resp    = await axios.post( `/data/${coll}`, body );

    return resp.data;
}

function add( { coll, body, action, socket }: { coll: string, body: any, action?: any, socket: any } ) {
    log( 'add start', coll, body, socket?.connected );

    return new Promise( ( resolve, reject ) => {

        if (!socket?.connected) {
            return reject( new Error( 'Socket nicht verbunden' ) );
        }

        socket.emit( 'data:add', {
            body,
            coll,
        }, (res: any) => {
            log( 'response', res );
            if (res.error) {
                return reject( res.error );
            }
            resolve( res );
        } );
    });
}

function update( { coll, body, action, socket }: { coll: string, body: any, action?: any, socket: any } ) {
    log( 'update start', coll, body, socket?.connected );

    return new Promise( ( resolve, reject ) => {

        if (!socket?.connected) {
            return reject( new Error( 'Socket nicht verbunden' ) );
        }

        socket.emit( 'data:update', {
            body,
            action,
            coll
        }, (res: any) => {
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

async function getById( coll: string, id: string ) {

    const resp    = await axios.post( `/data/${coll}/${id}` );
    log( 'getById', coll, id, resp.data );

    return resp.data;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete( { coll, body, socket }: { coll: string, body: any, socket: any } ) {
    log( 'delete start', coll, body._id, socket?.connected );

    return new Promise( ( resolve, reject ) => {

        if (!socket?.connected) {
            return reject( new Error( 'Socket nicht verbunden' ) );
        }

        socket.emit( 'data:delete', { coll, body }, (res: any) => {
            log( 'response', res );
            if (res.error) {
                return reject( res.error );
            }
            resolve( body._id );
        } );
    });
}
