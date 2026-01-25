/* global */
import Vue                  from 'vue';

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

async function login( username, password ) {

    try {
        let user    = await Vue.http.post( '/auth/login', { username, password } );
        log( 'login', username, user.body );

        return user.body;
    }
    catch(err) {
        log( 'Error login', err );
        throw err;
    }
}

async function relogin() {
    log( 'relogin' );
    
    try {
        let user    = await Vue.http.post( '/auth/relogin', {} );
        log( 'relogin ->', user.body );

        return user.body;
    }
    catch(err) {
        log( 'Error relogin', err );
        throw err;
    }
}

async function logout() {
    try {
        await Vue.http.get( '/auth/logout' );
        log( 'logout' );
    }
    catch(err) {
        log( 'Error logout', err );
        throw err;
    }
}

async function getAll( filter ) {
    log( 'getAll', filter );
    
    try {
        let data    = await Vue.http.post( '/data/user', { } );

        return data.body;
    }
    catch(err) {
        log( 'getAll Err', err );
        throw err;
    }
}

async function getById( _id ) {
    log( 'getById', _id );
    
    try {
        let data    = await Vue.http.post( '/data/user/findOne', { filter: { _id } } );

        return data.body;
    }
    catch(err) {
        log( 'getById Err', err );
        throw err;
    }
}

async function update( body ) {
    log( 'update', body );
    
    try {
        let data    = await Vue.http.put( '/data/user', body );

        return data.data;
    }
    catch(err) {
        log( 'update Err', err );
        throw err;
    }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
}
