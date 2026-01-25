import Vue                  from 'vue';
import Vuex                 from 'vuex';

import { account }          from '../common/store/account.module';
import { socket }           from '../common/store/socket.module';
import { Data }             from '../common/store/data.module';

import { documents }        from './documents.module';

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
    
    const Store = new Vuex.Store({
            modules:    {
                account,
                documents,
                socket,

                // namespace in store   -> state name,      collection name
                autosellers:    new Data( 'autosellers',    'autoseller' ),
                campaign:       new Data( 'campaign',       'campaign' ),
                carinfos:       new Data( 'carinfos',       'carInfo' ),
                categories:     new Data( 'categories',     'categories' ),
                config:         new Data( 'config',         'config' ),
                companies:      new Data( 'companies',      'companies' ),
                contact:        new Data( 'contact',        'customer' ),
                branch:         new Data( 'branch',         'branch' ),
                languages:      new Data( 'languages',      'languages' ),
                leads:          new Data( 'leads',          'lead' ),
                leadInbound:    new Data( 'leadInbound',    'lead' ),
                mailtemplates:  new Data( 'mailtemplates',  'mailtemplates' ),
                messages:       new Data( 'messages',       'messages' ),
                models:         new Data( 'models',         'models' ),
                portals:        new Data( 'portals',        'portal' ),
                process:        new Data( 'process',        'processes' ),
                processsteps:   new Data( 'processsteps',   'processsteps' ),
                setting:        new Data( 'setting',        'setting' ),
                settings:       new Data( 'settings',       'settings' ),
                tags:           new Data( 'tags',           'tags' ),
                teams:          new Data( 'teams',          'teams' ),
                times:          new Data( 'times',          'times' ),
                trans:          new Data( 'trans',          'translations' ),
                types:          new Data( 'types',          'types' ),
                userrights:     new Data( 'userrights',     'userrights' ),
                user:           new Data( 'user',           'user' ),
            }
        });

    return Store;
}
