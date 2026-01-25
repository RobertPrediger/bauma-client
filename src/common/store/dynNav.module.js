import _                        from 'lodash';
import debug                    from 'debug';

const log         = debug( 'app:dynNav.module' );

const state     = () => {
        return {
            status:     {
                add:            true,
                save:           false,
                remove:         false,
                settings:       false,
            },
            setting:    []
        };
    };

const getters   = {
    status:     state => state.status,
    setting:    state => state.setting,
};

const actions   = {
    initStatus( { state, dispatch }, payload ) {
        log( 'initStatus', payload );
        
        dispatch( 'setStatus', _.defaults( payload || {}, {
            add:            true,
            save:           false,
            remove:         false,
            settings:       true,
        }) );
    },
    setStatus( { commit }, payload ) {
        log( 'setStatus', payload );
        
        // set status fields
        _.forEach( payload, ( value, key ) => {
            commit( `status_${key}`, value );
        });
    },
    setSetting( { commit }, payload ) {
        commit( 'setSetting', payload );
    }
};

const mutations = {
    status_add( state, status ) {
        state.status.add          = status;
    },
    status_save( state, status ) {
        state.status.save         = status;
    },
    status_remove( state, status ) {
        state.status.remove       = status;
    },
    status_settings( state, status ) {
        state.status.settings     = status;
    },
    setSetting( state, setting ) {
        state.setting           = setting;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
