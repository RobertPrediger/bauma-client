import { defaults }                from 'lodash';

import debug            from 'debug';

type IStatus = {
    add?:        boolean;
    save?:       boolean;
    remove?:     boolean;
    settings?:   boolean;
}

export function useNavSettingsStore( stateName: string ): any {
    const log       = debug(`app:${stateName}:Navsettings.store`);

    return defineStore( `navSettings:${stateName}`, {
        
        state:      () => ({
            _status:      {
                add:        true,
                save:       false,
                remove:     false,
                settings:   false,
            },
            _setting:     [],
        }),

        getters:    {
            status:         state => state._status,
            setting:        state => state._setting,
        },

        actions:    {
            initStatus( payload: IStatus ) {
                log( 'initStatus' );

                this.setStatus( defaults( payload, {
                    add:            true,
                    save:           false,
                    remove:         false,
                    settings:       true,    
                }) as IStatus );
            },
            setStatus<T extends IStatus>( payload: T ) {
                log( 'setStatus', payload );

                for( const item in payload) {
                    this._status[item]    = payload[item];
                }
            },
            setSetting( payload: IStatus[] ) {
                log( 'setSetting', payload );
                this._setting           = payload;
            }
        }
    })();
}