<template>
    <q-page>

        <NavBar :title="$t('messages.LabelAutoseller')" icon="fas fa-car" stateName="autoseller" :state="autosellerStore" :navshow="{ add: false, save: false, remove: false }" />

        <div class="row">
            <div class="col">
                <q-card>
                    <q-card-section>
                        <Grid gridName="autosellerGrid" :gridOptions="autosellerGrid" stateName="autosellers" :state="autosellerStore" type="server" />
                    </q-card-section>
        
                    <q-separator />
                </q-card>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <q-card class="form">

                    <q-card-section>
                        <div class="text-h6">{{ $t('messages.LabelAutoseller') }}</div>
                    </q-card-section>
                    
                    <q-separator />
        
                    <q-form class="q-gutter-xs" ref="refAutoseller">
        
                        <q-card-section>
                                
                            <div class="row q-col-gutter-md">
                                <div class="col-4">
        
                                    <q-scroll-area class="scroll-left" visible>
                                        <q-input name="gfz" v-model="form.gfz" lazy-rules dense outlined
                                            :label="$t('messages.LabelGfzNumber')"
                                            hint=""
                                            />
                                        <q-input name="hersteller" v-model="form.fahrzeug.branch" lazy-rules dense outlined
                                            :label="$t('messages.LabelBranch')"
                                            hint=""
                                            />
                                        <q-input name="hersteller" v-model="form.fahrzeug.hersteller" lazy-rules dense outlined
                                            :label="$t('messages.LabelBrand')"
                                            hint=""
                                            />
                                        <q-input name="kategorie" v-model="form.fahrzeug.kategorie" lazy-rules dense outlined
                                            :label="$t('messages.LabelCategory')"
                                            hint=""
                                            />
                                        <q-input name="model" v-model="form.fahrzeug.model" lazy-rules dense outlined
                                            :label="$t('messages.ColModel')"
                                            hint=""
                                            />
                                        <q-input name="farbe" v-model="form.fahrzeug.farbe" lazy-rules dense outlined
                                            :label="$t('messages.LabelColor')"
                                            hint=""
                                            />
                                        <q-input name="erstzulassung" v-model="form.fahrzeug.erstzulassung" lazy-rules dense outlined
                                            :label="$t('messages.LabelFirstRegist')"
                                            hint=""
                                            />
                                    </q-scroll-area>
                                </div>
        
                                <div class="col-8">
                                    <q-card bordered>
                                        
                                        <q-tabs v-model="tab" class="text-teal" align="left" dense outlined>
                                            <q-tab :label="$t('messages.LabelCarinfo')" name="rieur" />
                                            <q-tab :label="$t('messages.LabelImages')" name="image" />
                                        </q-tabs>

                                        <q-tab-panels v-model="tab" class="tab">

                                            <q-tab-panel name="rieur">
                                                <div class="row q-col-gutter-md">
                                                    <div class="col-6">
                                                        
                                                        <q-scroll-area class="scroll-right">
                                                            <q-list bordered separator dense>
                                                                <q-item v-for="item in carList" :key="item.key">
                                                                    <q-item-section class="col-6">
                                                                        <q-item-label>{{ item.desc }}</q-item-label>
                                                                    </q-item-section>
                                                                    
                                                                    <q-item-section class="col-6" :class="`type-${item.type}`">
                                                                        <q-item-label v-if="item.type === 'number'">{{ new Intl.NumberFormat().format( item.entry ) }}</q-item-label>
                                                                        <q-item-label v-else-if="item.type === 'decimal'">{{ new Intl.NumberFormat( 'de', { style: 'currency', currency: 'EUR' }).format( item.entry ) }}</q-item-label>
                                                                        <q-item-label v-else>{{ item.entry }}</q-item-label>
                                                                    </q-item-section>
                                                                </q-item>
                                                            </q-list>
                                                        </q-scroll-area>
                                                    </div>
            
                                                    <div class="col-6">
                                                        <q-scroll-area class="scroll-right">
                                                            <q-list bordered separator dense outlined>
                                                                <q-item v-for="item in description" :key="item.key">
                                                                    <q-item-section class="col-3">
                                                                        <q-item-label>{{ item.key }}</q-item-label>
                                                                    </q-item-section>
                                                                    <q-item-section class="col-9">
                                                                        <q-item-label v-html="item.text"></q-item-label>
                                                                    </q-item-section>
                                                                </q-item>
                                                            </q-list>
                                                        </q-scroll-area>
                                                    </div>
                                                </div>
                                            </q-tab-panel>
                    
                                            <q-tab-panel name="image">
                                                <q-scroll-area class="scroll-right">
                                                    <div class="row">
                                                        <div class="col-3" v-for="image of form.img" :key="image.name">
                                                            <q-img :src="image.src" />
                                                        </div>
                                                    </div>
                                                </q-scroll-area>
                                            </q-tab-panel>

                                        </q-tab-panels>

                                    </q-card>
                                </div>
                            </div>
                        </q-card-section>
                    </q-form>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script lang="ts" setup>
import GlobalView                       from '../common/helpers/GlobalView';
import NavBar                           from '../components/NavBar.vue'; 
import Grid                             from '../common/components/Grid.vue';

import _                                from 'lodash';
import { useI18n }                      from 'vue-i18n';

import { useDataStore }                 from 'src/stores/data.store';

import debug                            from 'debug';
const log         = debug('app:autoseller');

const { t }                             = useI18n();

const carinfoStore                      = useDataStore( 'carinfo', 'carInfo' );

const init        = { 
    collName:       'autoseller', 
    stateName:      'autoseller',
    defaultForm:    {
        fahrzeug:       {}
    }
};
const globalView  = GlobalView( init );
const { 
    store:          autosellerStore, 
    data:           autoseller, 
    doSave,
    form 
}  = globalView;

const autosellerGrid              = ref({});

const 
    carList           = ref([]),
    description       = ref([]),
    tab               = ref('rieur');

const { data: carinfos }        = storeToRefs( carinfoStore );

function afterSelect() {
    Loading.show();

    const list: any        = [];
    
    _.forEach( form.value.infos, ( entry, key ) => {
        let desc    = key,
            type    = 'string';
        
        if (carinfos.value[ key ]) {
            desc    = carinfos.value[ key ].desc;
            type    = carinfos.value[ key ].type;
        }
        
        switch( type ) {
            case 'boolean':
                entry        = entry === '0' ? 'Ja' : 'Nein';
                break;
        }
        
        list.push( { key, entry, desc, type } );
    });
    
    carList.value    = list;
    log( 'list', list );
    
    if (form.value.description)
        description.value   = form.value.description.split('|').map( (item: any) => {
            item        = item.trim();
            
            const 
                index       = item.indexOf(' '),
                key         = item.substr( 0, index ),
                text        = item.substr( index + 1 );
                
            return {
                key,
                text
            };
        });
    else
        description.value   = [];

    Loading.hide();
}

async function reload() {
    try {
        // read list
        await axios.get( '/custom/autosellerReload' );
        
        // reload list
        await autosellerStore.getStore();

        Notify.create({
            message:        t('messages.TextDataReloaded'),
            color:          'green-9',
            icon:           'done',
            position:       'top-right',
            timeout:        1000
        });
    }
    catch( error ) {
        log( 'ERROR created', error );
        Notify.create({
            message:        error.body || error.statusText || error,
            color:          'negative',
            icon:           'report_problem',
            position:       'top-right',
            timeout:        5000
        });
    }
}

carinfoStore.getStore();

onMounted( async() => {
    autosellerStore.registerAction( { action: 'afterSelect', target: 'Autoseller', func: afterSelect } );
});

</script>

<style scoped>

.form {
    height:    calc( 100vh - 400px - 95px - 70px );
    width:         100%;
}

.scroll-left {
    height:    calc( 100vh - 400px - 100px - 95px - 70px );
}

.tab {
    height:    calc( 100vh - 400px - 130px - 95px - 70px );
}

.scroll-right {
    height:    calc( 100vh - 400px - 153px - 95px - 70px );
}

</style>
