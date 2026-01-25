/* global  */
import io           from 'socket.io-client';

import debug            from 'debug';
const log       = debug('app:socket.module');

log( 'start' );

const state     = () => {
        return {
            socket:     null
        };
    };

const getters   = {
        socket:     state => state.socket
    };

const actions   = {

    async init( { commit } ) {
        log( 'init' );

        try {
            // const socket        = io();
            const socket        = io( '', {
                    namespace:          'aplus',
                    // jsonp:              false,
                    transports:         [ 'polling', 'websocket' ]
                } );
            commit( 'setSocket', socket );

            socket.on( 'connect', () => {
                log( 'CONNECT' );
            });
            socket.on( 'disconnect', () => {
                log( 'DISCONNECT' );
            });

            log( 'after init', socket );
        }
        catch(error) {
            log( 'error init', error );
            commit( 'setSocket', null );
        }
    }
};

const mutations = {
    setSocket( state, socket ) {
        state.socket      = socket;
    },
};

export const socket = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};