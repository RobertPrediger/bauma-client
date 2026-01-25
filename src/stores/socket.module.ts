/* global  */
import { defineStore }          from 'pinia';
import { io, Socket }           from 'socket.io-client'

import debug                from 'debug';
const log       = debug('app:socket.module');

export const useSocketStore     = defineStore( 'socket', {

    state: () => ({
        _socket:        {} as Socket | null,
    }),

    getters: {
        socket:         (state) => state._socket,
        connected:      (state) => state._socket?.connected,
    },

    actions: {
        async init() {
            log( 'init' );
    
            try {
                const socket        = io( '/lead', {
                        transports:         [ 'polling', 'websocket' ]
                    } );
                this._socket        = socket;
    
                socket.on( 'connect', () => {
                    log( 'CONNECT' );
                });
                socket.on( 'disconnect', () => {
                    log( 'DISCONNECT' );
                });
    
                log( 'after init', socket );
            }
            catch(error) {
                log( 'error init error', error );
            }
        }
    }
})
