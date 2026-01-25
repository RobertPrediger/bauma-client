/* global  */
import { userService }                  from '../services/users.service';

import debug            from 'debug';
const log       = debug('app:account.module');

log( 'start' );

const state     = () => {
        return {
            loggedIn:   false,
            user:       {}, 
            lang:       'de'
        };
    };

const getters   = {
        user:       state => state.user,
        lang:       state => state.lang,
        loggedIn:   state => state.loggedIn
    };

const actions   = {
    
    async login( { dispatch, commit }, { username, password } ) {
        log( 'login' );
        
        commit('loginRequest', { username } );
    
        try {
            const user    = await userService.login( username, password );
            commit('loginSuccess', user);
            this.$router.push('/');
        }
        catch(error) {
            commit('loginFailure', error);
            throw error;
        }
    },
    
    async relogin( { commit } ) {
        log( 'relogin' );
        
        try {
            const user    = await userService.relogin();
            commit('loginSuccess', user); 
        }
        catch(error) {
            commit( 'loginFailure', error );
            this.$router.push('/login');
        }
    },
    
    checkAcc({ state }) {
        if (!state.user) {
            this.$router.push('/login');
        }
    },
    
    async logout({ commit }) {
        await userService.logout();
        commit('logout');
        this.$router.push('/login');
    },

    setLang({ commit }, lang ) {
        log( 'setLang', lang );
        commit( 'lang', lang );
    },
    
    // register({ dispatch, commit }, user) {
    //     commit('registerRequest', user);
    
    //     userService.register(user)
    //         .then(
    //             user => {
    //                 commit('registerSuccess', user);
    //                 this.$router.push('/login');
    //                 setTimeout(() => {
    //                     // display success message after route change completes
    //                     dispatch('alert/success', 'Registration successful', { root: true });
    //                 });
    //             },
    //             error => {
    //                 commit('registerFailure', error);
    //                 dispatch('alert/error', error, { root: true });
    //             }
    //         );
    // }
};

const mutations = {
    loginRequest(state, user) {
        state.loggedIn  = false;
        state.user      = user;
        state.lang      = user.lang;
    },
    loginSuccess(state, user) {
        state.loggedIn  = true;
        state.user      = user;
        state.lang      = user.lang;
        localStorage.setItem( 'user', user );
    },
    loginFailure(state) {
        state.loggedIn  = false;
        state.user      = {};
        state.lang      = 'de';
        localStorage.removeItem( 'user' );
    },
    logout(state) {
        state.loggedIn  = false;
        state.user      = {};
    },
    lang( state, lang ) {
        state.lang      = lang;
        localStorage.removeItem( 'user' );
    },
    // registerRequest(state, user) {
    //     state.status    = { 
    //         ...state.status,
    //         registering: true 
    //     };
    // },
    // registerSuccess(state, user) {
    //     state.status    = {
    //         ...state.status
    //     };
    // },
    // registerFailure(state, error) {
    //     state.status    = {
    //         ...state.status,
    //         registering:    false
    //     };
    // }
};

export const account = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};