/* global */
import axios                            from 'axios';

import debug                            from 'debug';
const log         = debug('app:user.service');

export const userService = {
    login,
    relogin,
    logout,
    getAll,
    getById,
    update,
    delete: _delete
};

async function login( username: string, password: string ) {

    try {
        const user    = await axios.post( '/auth/login', { username, password } );
        log( 'login', username, user.data );

        return user.data;
    }
    catch(err) {
        log( 'Error login', err );
        throw err;
    }
}

async function relogin() {
    log( 'relogin' );
    
    try {
        const user    = await axios.post( '/auth/relogin', {} );
        log( 'relogin ->', user.data );

        return user.data;
    }
    catch(err) {
        log( 'Error relogin', err );
        throw err;
    }
}

async function logout() {
    try {
        await axios.get( '/auth/logout' );
        log( 'logout' );
    }
    catch(err) {
        log( 'Error logout', err );
        throw err;
    }
}

async function getAll( filter: any ) {
    log( 'getAll', filter );
    
    try {
        const data    = await axios.post( '/data/user', { } );

        return data.data;
    }
    catch(err) {
        log( 'getAll Err', err );
        throw err;
    }
}

async function getById( _id: string ) {
    log( 'getById', _id );
    
    try {
        const data    = await axios.post( '/data/user/findOne', { filter: { _id } } );

        return data.data;
    }
    catch(err) {
        log( 'getById Err', err );
        throw err;
    }
}

async function update( body: any ) {
    log( 'update', body );
    
    try {
        const data    = await axios.put( '/data/user', body );

        return data.data;
    }
    catch(err) {
        log( 'update Err', err );
        throw err;
    }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete( id: string ) {
    log( 'delete', id );
}
