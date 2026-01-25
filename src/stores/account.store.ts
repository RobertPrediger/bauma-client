import { defineStore }              from 'pinia';

import { userService }                  from '../services/users.service';

import debug            from 'debug';
const log       = debug('app:account.store');

export interface IAccountState {
    _loggedIn:   boolean;
    _user:       any;
    _lang:       string;
}

export const useAccountStore = defineStore( 'account', {

    state:  (): IAccountState => ({
        _loggedIn:   false,
        _user:       {}, 
        _lang:       'de',
    }),

    getters: {
        user:       state => state._user,
        lang:       state => state._lang,
        loggedIn:   state => state._loggedIn,
    },

    actions: {
        async login( { username, password }: { username: string, password: string } ) {
            log( 'login' );
            
            this.loginRequest( { username } );
        
            try {
                const user    = await userService.login( username, password );
                this.loginSuccess( user );
                this.router.push('/');
            }
            catch(error) {
                this.loginFailure();
                throw error;
            }
        },
        
        async relogin() {
            log( 'relogin' );
            
            try {
                const user    = await userService.relogin();
                this.loginSuccess( user ); 
            }
            catch(error) {
                this.loginFailure();
                this.router.push('/login');
            }
        },
        
        checkAcc() {
            if (!this._user) {
                this.router.push('/login');
            }
        },
        
        async logout() {
            await userService.logout();
            this._loggedIn  = false;
            this._user      = {};
            this.router.push('/login');
        },
    
        setLang( lang: string ) {
            log( 'setLang', lang );
            this._lang      = lang;
            localStorage.removeItem( 'user' );
        },

        loginRequest( user: any ) {
            this._loggedIn  = false;
            this._user      = user;
            this._lang      = user.lang;
        },
        loginSuccess( user: any ) {
            this._loggedIn  = true;
            this._user      = user;
            this._lang      = user.lang;
            localStorage.setItem( 'user', user );
        },
        loginFailure() {
            this._loggedIn  = false;
            this._user      = {};
            this._lang      = 'de';
            localStorage.removeItem( 'user' );
        },
    },
});
