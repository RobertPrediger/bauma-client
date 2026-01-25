<template>
    <q-layout view="lHh Lpr lFf">
        
        <q-header elevated class="bg-blue-10 text-white">
            <q-toolbar class="q-pa-sm q-gutter-sm">
            
                <q-btn flat dense icon="menu" round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" />
    
                <q-toolbar-title>LeadLive - Lead Management</q-toolbar-title>
    
                <q-btn dense icon="fas fa-inbox" class="q-ml-md" @click="showMessage = true">
                    <!--<q-badge :color="messages.length > 0 ? 'red' : 'green'" align="top" floating>{{ messages.length }}</q-badge>-->
                    <q-tooltip>{{ $t('messages.LabelMessages') }}</q-tooltip>
                </q-btn>
                
                <q-separator spaced vertical />
                
                <q-btn-dropdown :label="`${user.firstName} ${user.lastName}`" dense>
                    <q-list>
                        <q-item clickable v-close-popup @click="selectLang( item.name )" v-for="item of languages" :key="item.name" :class="{ 'bg-blue-2': item.name == account.lang }">
                            <q-item-section avatar>
                                <q-avatar color="blue-1" :icon="`img:${item.name}.svg`" />
                            </q-item-section>
                            <q-item-section>
                                {{ item.desc }}
                            </q-item-section>
                        </q-item>
                        
                        <q-separator />
                        
                        <q-item clickable v-close-popup @click="logout()">
                            <q-item-section avatar>
                                <q-avatar color="warning" icon="eject" />
                            </q-item-section>
                            <q-item-section>
                                {{ $t('messages.LabelLogout') }}
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-btn-dropdown>
            </q-toolbar>
        </q-header>
    
        <q-drawer v-model="leftDrawerOpen" side="left" bordered>
            <q-list>
                <q-item>
                    <q-item-section>
                        <q-item-label class="text-h6">Lead</q-item-label>
                        <q-item-label caption>Client: {{ pack.version }}, Server: {{ serverVersion }}</q-item-label>
                    </q-item-section>
                </q-item>

                <q-separator />

                <q-scroll-area class="left-menu">
                    <Menu v-for="item in menu" :key="item.link" :menu="item" start="/" />
                </q-scroll-area>
            </q-list>

            <!-- <q-card class="fixed-bottom">
                <q-card-section>
                    <v-chart :options="leadChart" />
                </q-card-section>
            </q-card> -->
        </q-drawer>
    
        <q-page-container>
            <router-view />

            <!--<q-dialog v-model="showMessage">-->
            <!--    <q-card>-->
            <!--        <q-card-section>-->
            <!--            <div class="text-h6" v-t="'messages.LabelMessages'"></div>-->
            <!--        </q-card-section>-->

            <!--        <q-card-section>-->
            <!--            <q-list bordered separator>-->
            <!--                <q-item v-for="item of messages" :key="item._id">-->
            <!--                    <q-item-section>-->
            <!--                        <q-item-label>{{ item.message }}</q-item-label>-->
            <!--                    </q-item-section>-->
            <!--                </q-item>-->
            <!--            </q-list>-->
            <!--        </q-card-section>-->
            <!--    </q-card>-->
            <!--</q-dialog>-->
        </q-page-container>
        
    </q-layout>
</template>

<script lang="ts" setup>
// import ECharts                          from 'vue-echarts';
import { useI18n }                      from 'vue-i18n';
import moment                           from 'moment';

import Menu                             from '../components/Menu.vue';
import pack                             from '../../package.json';

import { useSocketStore }               from 'src/stores/socket.module';
import { useAccountStore }              from 'src/stores/account.store';
import { useDataStore }                 from 'src/stores/data.store';

import debug                            from 'debug';
const log         = debug('app:home');

const socketStore           = useSocketStore();
const accountStore          = useAccountStore();
const languagesStore        = useDataStore( 'languages', 'languages' );
const configStore           = useDataStore( 'config', 'config' );

const { socket }            = storeToRefs( socketStore );
const { user }              = storeToRefs( accountStore );
const { _data: languages }  = storeToRefs( languagesStore );
const {
 _data: configs,
        _record: config 
}     = storeToRefs( configStore );

const i18n              = useI18n({ useScope: 'global' })

const menu              = ref([]),
        leftDrawerOpen    = ref(true),
        serverVersion     = ref(''),
        showMessage       = ref(false),
        leadChart         = reactive({
            title:        { text: 'Leads / Woche' },
            grid:         {
                bottom:       '15%',
            },
            legend:       { show: false },
            tooltip:      {},
            xAxis:        { type: 'category' },
            axisLabel:    {
                rotate:       45
            },
            yAxis:        {},
            series:       [
                { type: 'line', data: [] }
            ]
        }),
        firstDay          = moment().subtract( 12, 'weeks' );

axios
    .post( '/custom/getView/leadDate', {
        filter: {
            date: { $gte: firstDay.format('YYYY-DD-MM') }
        }
    })
    .then(
        (result) => {
            log( 'RES', result.data );
            
            const dimensions          = [ 'week', 'anz' ];

            leadChart.series[0].data       = result.data;
        },
        (err) => {
            log( 'ERR', err );
        }
    );
        
(async () => {
  const rawResponse = await fetch('/auth/relogin', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  });
  const content = await rawResponse.json();

  log(content);
})();

function selectLang( lang ) {
    log( 'select language', lang );

    i18n.locale.value    = lang;
    moment.locale( lang );
    socket.value.emit( 'setLang', { language: lang } );
    
    // set language in store
    accountStore.setLang( lang );
}

// actions.getLanguages();
// actions.getMessages();

// get nav
axios.get( '/model/sideNav.json' )
    .then( resp => {
        menu.value      = resp.data;
    });

socket.value.emit( 'getVersion', {}, (res) => {
    log( 'Version', res );
    serverVersion.value      = res;
});

languagesStore.getStore();

onMounted( async () => {
    // set default language
    if (user.value.lang) {
        log( 'set lang', user.value.lang );
        i18n.locale.value       = user.value.lang;
        moment.locale(user.value.lang);
        socket.value.emit( 'setLang', { language: user.value.lang } );
    }

    socket.value.on( 'message', async ( resp ) => {
        log( 'message:', resp );

        // if error -> return with failure
        if (resp.error)
            Notify.create({
                message:        resp.error,
                color:          'negative',
                icon:           'report_problem',
                position:       'top-right',
                timeout:        5000
            });

        else
            Notify.create({
                message:        resp.message,
                color:          'green-9',
                icon:           'done',
                position:       'top-right',
                timeout:        1000
            });
    });
});

onBeforeUnmount( () => {
    log( 'beforeDestroy' );
    
    // delete socket listener
    socket.value.off( 'message' );
});
        
</script>

<style scoped>
.name {
    padding-left: 20px;
}
.echarts {
    height: 200px;
    width: 300px;
}

.left-menu {
    /* height: calc( 100vh - 232px - 58px ); */
    height: calc( 100vh - 58px );
}
</style>