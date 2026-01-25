<template>
    <q-page class="q-pa-sm">

        <NavBar :title="$t('messages.LabelLead-inbound')" icon="fas fa-mail-bulk" stateName="leadInbound" xfuncs="navbarSubmenu" :state="leadStore" type="window" />
        
        <q-card>
            <div class="row">
                <div class="col-2">
                    <q-card class="bg-grey-2">
                        <q-card-section>
                            <div class="text-h6" v-t="'messages.LabelFilter'"></div>
                        </q-card-section>
                        <q-separator />
                        
                        <!--<q-card-section>-->
                        <!--    <div class="text-subtitle2" v-t="'messages.LabelState'"></div>-->
                        <!--    <q-option-group-->
                        <!--        v-model="filterState"-->
                        <!--        :options="stateList"-->
                        <!--    />-->
                        <!--</q-card-section>-->
                        <!--<q-separator />-->

                        <q-card-section>
                            <div class="text-subtitle2" v-t="'messages.LabelSrc'"></div>
                            <q-option-group dense
                                v-model="filterPortal"
                                :options="portalList"
                            />
                        </q-card-section>
                        <q-separator />

                        <!--<q-card-section>-->
                        <!--    <div class="text-subtitle2" v-t="'messages.LabelCategory'"></div>-->
                        <!--    <q-option-group-->
                        <!--        v-model="filterCategory"-->
                        <!--        :options="categoryList"-->
                        <!--    />-->
                        <!--</q-card-section>-->
                    </q-card>
                </div>
                <div class="col-10">
                    <q-card-section>
                        <Grid gridName="leadInboundGrid" :gridOptions="leadInboundGrid" stateName="leadInbound" :state="leadStore" @subGridReady="subGridReady" type="server" orientation="portrait" v-if="showGrid" ref="refGrid" />
                    </q-card-section>
                </div>
            </div>

            <q-separator />
        </q-card>
        
        <q-dialog v-model="showForm" @hide="onFormHide" no-backdrop-dismiss>
            <q-layout container view="lHh lpR lff" class="shadow-2 rounded detailWindow">
            
                <q-header elevated class="bg-primary text-white" height-hint="98">
                    <NavBar :title="$t('messages.LabelLead')" icon="open_with" stateName="leads" xfuncs="navbarSubmenu" :state="leadStore" type="dialog" @close="onFormHide" />
                </q-header>
            
                <q-page-container>
                    <q-page class="back-grey">

                        <q-form @submit="doSave">
                            <input type="submit" style="position: absolute; left: -9999px" />
            
                            <q-card-section>
                                        
                                <div class="row q-col-gutter-md">
                                    <div class="col-3">
                                        <div class="row">
                                            <div class="col">
                                                <div class="text-h6" v-t="'messages.LabelLead'"></div>
                                            
                                                <q-input v-model="form.lead.firstName" lazy-rules dense outlined bg-color="white"
                                                    :label="$t('messages.ColFirstname')"
                                                    hint=""
                                                    />
                                                <q-input name="surName" v-model="form.lead.surName" lazy-rules dense outlined bg-color="white"
                                                    :label="$t('messages.ColSurname')"
                                                    hint=""
                                                    />
                                                <q-input name="email" v-model="form.lead.email" lazy-rules dense outlined bg-color="white"
                                                    :label="$t('messages.ColMail')"
                                                    hint=""
                                                    />
                                                <q-input name="telefon" v-model="form.lead.telefon" lazy-rules dense outlined bg-color="white"
                                                    :label="$t('messages.ColPhone')"
                                                    hint=""
                                                    />
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col">
                                                <div class="text-h6" v-t="'messages.LabelCar'"></div>

                                                <q-input name="date" v-model="form.date" lazy-rules dense ref="leads" outlined bg-color="white" disable
                                                    :label="$t('messages.LabelOrderFrom')"
                                                    hint=""
                                                    />
                                                <q-input name="gfz" v-model="form.gfz" lazy-rules dense outlined :options-dense="true" bg-color="white" disable
                                                    hint=""
                                                    :label="$t('messages.LabelGfzNumber')"
                                                    />

                                                <q-input name="branch" v-model="form.fahrzeug.branch" lazy-rules dense outlined bg-color="white" disable
                                                    :label="$t('messages.LabelBranch')"
                                                    hint=""
                                                    />
                                                <q-select name="sales" v-model="form.sales" lazy-rules dense outlined options-dense bg-color="white" disable
                                                    hint=""
                                                    :label="$t('messages.LabelSales')"
                                                    :options="users"
                                                    option-value="_id"
                                                    :option-label="opt => opt.surName ? `${opt.surName}, ${opt.firstName}` : ''"
                                                    map-options
                                                    >
                                                </q-select>
                                                <q-select name="category" v-model="form.category" lazy-rules dense outlined options-dense bg-color="white" disable
                                                    hint=""
                                                    :label="$t('messages.ColCategory')"
                                                    :options="categories"
                                                    option-value="name"
                                                    option-label="desc"
                                                    map-options
                                                    >
                                                </q-select>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-6">
                                        <q-toolbar class="bg-blue-grey">
                                            <q-btn icon="fas fa-envelope" color="white" text-color="black" :label="$t('messages.ColMail')" @click="showMail = true" dense />
                                            <q-separator spaced vertical />
                                            <q-btn icon="fas fa-inbox" color="white" text-color="black" :label="$t('messages.ColLetter')" @click="send.Mail" dense />
                                            <q-separator spaced vertical />
                                            <q-btn icon="fas fa-calendar-alt" color="white" text-color="black" :label="$t('messages.ColLetter')" @click="send.Date" dense />
                                            <q-space />
                                            <q-btn icon="fas fa-handshake" color="white" text-color="black" :label="$t('messages.LabelTakeOver')" @click="takeOver" dense :disable="isSales()" />
                                        </q-toolbar>                                                

                                        <q-tabs v-model="tab" class="text-teal bg-white" align="left" dense outlined>
                                            <q-tab :label="$t('messages.LabelContact')" name="contact" />
                                            <q-tab :label="$t('messages.LabelCar')" name="car" />
                                            <q-tab :label="$t('messages.LabelCarinfo')" name="rieur" />
                                        </q-tabs>
            
                                        <q-tab-panels v-model="tab">
                        
                                            <q-tab-panel name="contact">
                                                <div class="row q-col-gutter-md">
                                                    <div class="col list">
                                                        <q-input name="leadinfo" v-model="form.lead.info" lazy-rules type="textarea" dense outlined autogrow
                                                            :label="$t('messages.LabelInfo')"
                                                            hint=""
                                                            />
                                                    </div>
                                                </div>
                                            </q-tab-panel>
                    
                                            <q-tab-panel name="car">
                                                <div class="row q-col-gutter-md">
                                                    <div class="col-6">
                                                        <q-scroll-area class="list">
                                                            <q-list bordered separator dense outlined>
                                                                <q-item>
                                                                    <q-item-section>{{ $t('messages.ColHerst') }}</q-item-section>
                                                                    <q-item-section>{{ form.fahrzeug.hersteller }}</q-item-section>
                                                                </q-item>
                                                                <q-item>
                                                                    <q-item-section>{{ $t('messages.ColCategory') }}</q-item-section>
                                                                    <q-item-section>{{ form.fahrzeug.kategorie }}</q-item-section>
                                                                </q-item>
                                                                <q-item>
                                                                    <q-item-section>{{ $t('messages.ColModel') }}</q-item-section>
                                                                    <q-item-section>{{ form.fahrzeug.model }}</q-item-section>
                                                                </q-item>
                                                                <q-item>
                                                                    <q-item-section>{{ $t('messages.ColDesc') }}</q-item-section>
                                                                    <q-item-section>{{ form.fahrzeug.desc }}</q-item-section>
                                                                </q-item>
                                                                <q-item>
                                                                    <q-item-section>{{ $t('messages.ColFuel') }}</q-item-section>
                                                                    <q-item-section>{{ form.infos.fuel }}</q-item-section>
                                                                </q-item>
                                                                <q-item>
                                                                    <q-item-section>{{ $t('messages.ColColor') }}</q-item-section>
                                                                    <q-item-section>{{ form.fahrzeug.farbe }}</q-item-section>
                                                                </q-item>
                                                                <q-item>
                                                                    <q-item-section>{{ $t('messages.LabelKM') }}</q-item-section>
                                                                    <q-item-section>{{ form.infos.km }}</q-item-section>
                                                                </q-item>
                                                                <q-item>
                                                                    <q-item-section>{{ $t('messages.ColPrice') }}</q-item-section>
                                                                    <q-item-section>{{ form.fahrzeug.preis }}</q-item-section>
                                                                </q-item>
                                                                <q-item>
                                                                    <q-item-section>{{ $t('messages.ColPower') }}</q-item-section>
                                                                    <q-item-section>{{ form.fahrzeug.leistung }}kW</q-item-section>
                                                                </q-item>
                                                                <q-item>
                                                                    <q-item-section>{{ $t('messages.LabelFirstRegist') }}</q-item-section>
                                                                    <q-item-section>{{ form.fahrzeug.erstzulassung }}</q-item-section>
                                                                </q-item>
                                                            </q-list>
                                                        </q-scroll-area>
                                                    </div>
                                                </div>
                                            </q-tab-panel>
            
                                            <q-tab-panel name="rieur">
                                                <div class="row q-col-gutter-md">
                                                    <div class="col-6">
                                                        <q-scroll-area class="list">
                                                            <q-list bordered separator dense outlined>
                                                                <q-item v-for="item in carList" :key="item.key">
                                                                    <q-item-section class="col-6">
                                                                        <q-item-label>{{ item.desc }}</q-item-label>
                                                                    </q-item-section>
                                                                    
                                                                    <q-item-section class="col-6" :class="`type-${item.type}`">
                                                                        <q-item-label v-if="item.type === 'number'">{{ item.entry }}</q-item-label>
                                                                        <q-item-label v-else-if="item.type === 'decimal'">{{ item.entry }}</q-item-label>
                                                                        <q-item-label v-else>{{ item.entry }}</q-item-label>
                                                                    </q-item-section>
                                                                </q-item>
                                                            </q-list>
                                                        </q-scroll-area>
                                                    </div>
            
                                                    <div class="col-6">
                                                        <q-scroll-area class="list">
                                                            <q-list bordered separator dense outlined>
                                                                <q-item v-for="item in description()" :key="item.key">
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
                    
                                        </q-tab-panels>
                                    </div>
                                    <div class="col-3 back-grey">
                                        <q-scroll-area class="list">
                                            <div class="row q-col-gutter-md">
                                                <div class="col q-px-lg q-pb-md">
                                                    <div class="text-h6" v-t="'messages.LabelHistory'"></div>
                                                    <q-timeline dense>
                                                        <q-timeline-entry v-for="(item, index) of form.hist" :key="index"
                                                            :title="$t(`messages.History_${item.type}`)"
                                                            :subtitle="date.formatDate( item.timestamp, 'dddd DD.MM.YYYY HH:mm' )"
                                                            :icon="item.icon"
                                                            :color="item.color"
                                                        >
                                                            <div>{{ $t(`messages.${item.info}`) }}</div>
                                                        </q-timeline-entry>
                                                    </q-timeline>
                                                </div>
                                            </div>
                                        </q-scroll-area>
                                    </div>
                                </div>
                            </q-card-section>
                        </q-form>
                    </q-page>
                </q-page-container>
            
            </q-layout>
        </q-dialog>
        
        <q-dialog v-model="showMail">
            <Mail :lead="form" :showMail="showMail" @doClose="showMail = false" />
        </q-dialog>
    </q-page>
</template>

<script lang="ts" setup>
import { date }                         from 'quasar';
import { useI18n }                      from 'vue-i18n';

import _                                from 'lodash';

import GlobalView                       from '../common/helpers/GlobalView';
import Status                           from '../common/helpers/Status'; 
import Send                             from '../common/helpers/Send'; 
import Grid                             from '../common/components/Grid.vue';
import NavBar                           from '../components/NavBar.vue'; 
import Mail                             from '../components/Mail.vue'; 

import { useAccountStore }              from 'src/stores/account.store';
import { useDataStore }                 from 'src/stores/data.store';

import debug                            from 'debug';
const log         = debug('app:leadInbound');

const { t }                             = useI18n();

const init        = { 
    collName:       'lead', 
    stateName:      'leadInbound',
    defaultForm:    {
        lead:           {
            anrede:         '',
            firstName:      '',
            surName:        '',
            email:          '',
            telefon:        '',
            strasse:        '',
            ort:            '',
            info:           ''
        },
        mail:           {},
        infos:          {},
        fahrzeug:       {},
        sales:          {
            _id:            '',
            krz:            '',
            firstName:      '',
            surName:        ''
        },
        hist:           [],
    }
};
const globalView  = GlobalView( init );
const { 
    store:          leadStore, 
    data:           lead, 
    doSave,
    form 
}  = globalView;

const   leadInboundGrid  = ref({
            filter:         { state: 'new' },
            componentParent:        parent,
            columnTypes:    {
                stateColumn:     {
                    valueGetter( params ) {
                        const state     = _.get( params, 'data.state' );
                        return _.get( params, `context.stateList.${state}.label`, state );
                    }
                },
                salesColumn:     {
                    valueGetter( params ) {
                        return _.get( params, 'data.sales.firstName', '') + ' ' + _.get( params, 'data.sales.surName', '' );
                    }
                },
                categoryColumn:     {
                    valueGetter( params ) {
                        const category        = _.get( params, 'data.category', '0' );
                        return _.get( params, `context.categories.${category}.desc`, category );
                    }
                }
            },
        });

const   tab           = ref('contact'),
        carList       = ref([]),
        portalList    = ref([]),
        autoFilter    = ref([]),
        showForm      = ref(false),
        showMail      = ref(false),
        showGrid      = ref(false),
        filterPortal  = ref(''),
        refGrid       = ref(null),
        filterState   = ref('new'),
        stateList     = Status( t ),
        send          = Send();

const   autosellers     = ref([]);

const accountStore          = useAccountStore();
const autosellerStore       = useDataStore( 'autoseller', 'autoseller' );
const userStore             = useDataStore( 'user', 'user' );
const carinfoStore          = useDataStore( 'carinfo', 'carInfo' );
const categoryStore         = useDataStore( 'categories', 'categories' );
const companyStore          = useDataStore( 'companies', 'companies' );
const portalStore           = useDataStore( 'portals', 'portal' );
// const documentStore         = useDataStore( 'documents', 'documents' );

const { user }                  = storeToRefs( accountStore );
const { data: allauto }         = storeToRefs( autosellerStore );
const { data: users }           = storeToRefs( userStore );
const { data: carinfos }        = storeToRefs( carinfoStore );
const { data: categories }      = storeToRefs( categoryStore );
const { data: companies }       = storeToRefs( companyStore );
const { data: portals }         = storeToRefs( portalStore );
// const { data: documents }       = storeToRefs( documentStore );

watch( filterState, ( newState ) => {
    log( 'state', newState );
    
    const filterInstance      = refGrid.value.gridOpt.api.getFilterInstance('state');
    filterInstance.setModel({
        type:       'equals',
        filter:     newState
    });
    
    refGrid.value.gridOpt.api.onFilterChanged();
});

watch( filterPortal, ( newPortal ) => {
    
    const filterInstance      = refGrid.value.gridOpt.api.getFilterInstance('mail.type');
    log( 'portal', newPortal );
    
    if (newPortal)
        filterInstance.setModel({
            type:       'equals',
            filter:     newPortal
        });
    else
        filterInstance.setModel( null );
    
    refGrid.value.gridOpt.api.onFilterChanged();
});

// before select hook
async function afterSelect( record: any ) {
    log( 'afterSelect', record );
    
    if ( _.isArray(record.hist) )
        record.hist     = _.map( record.hist, (item, index) => {
            item.key        = index;
            
            switch(item.target) {
                case 'in':
                    item.icon       = 'fas fa-sign-in-alt';
                    item.color      = 'blue-10';
                    break;
                case 'out':
                    item.icon       = 'fas fa-sign-out-alt';
                    item.color      = 'green-8';
                    break;
                case 'intern':
                    item.icon       = 'fas fa-lock';
                    item.color      = 'orange';
                    break;
                default:
                    item.icon       = 'fas fa-circle';
                    item.color      = 'blue-10';
                    break;
            }
            
            return item;
        } );

    const list        = [];
    _.forEach( record.infos, ( entry, key ) => {
        let desc    = key,
            type    = 'string';
        
        if ( carinfos.value[ key ]) {
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

    showForm.value   = true;
    
    return record;
}

// after save
function afterSave() {
    showForm.value      = false;
}

// hide dialog
function onFormHide() {
    showForm.value   = false;
}

// hide dialog
function onMailHide() {
    showMail.value   = false;
}
        
// create table of detail description of car
function description() {
    if (form.value.description)
        return _.map( form.value.description.split('|'), (item) => {
            item        = item.trim();
            
            const index       = item.indexOf(' '),
                  key         = item.substr( 0, index ),
                  text        = item.substr( index + 1 );
                
            return {
                key,
                text
            };
        });
    else
        return [];
}        

// grid -> ready
function subGridReady( { gridOpt }: { gridOpt: any } ) {
    // User value because of vue ref
    gridOpt.context    = {
        categories:             _.keyBy( categories.value, 'name' ),
        stateList:              _.keyBy( stateList, 'value' ),
    };
}

function takeLead( data: any ) {
    // put user inside
    data.sales      = user.value;
    
    // now save it
    leadStore.updateRecord( data );
}

async function filterAutoseller (val: string, update: string ) {
    log( 'FILTER', val );

    function filter() {
        update( () => {
            if (val === '') {
                autoFilter.value     = autosellers.value;
            } else {
                const needle    = val.toLowerCase();
                autoFilter.value     = _.filter( autosellers.value, v => v.label.toLowerCase().indexOf(needle) > -1);
            }
            log( '->', autoFilter.value );
        });
    }

    if (!autosellers.value) {
        const resp    = await autosellerStore.getStore();
        
        autosellers.value   = _.map( resp.data, item => {
            return {
                value:      item.gfz,
                label:      `${item.gfz} (${(item.fahrzeug && item.fahrzeug.model) || ''})`
            };
        });
        filter();
    } else
        filter();
}

function filterAbort() {
    log( 'ABORT' );
}

function takeOver() {
    log( 'take over' );
    
    // set sales
    form.value.state        = 'open';
    form.value.sales        = user.value;
    form.value.hist.push({
        type:       'take',
        timestamp:  (new Date()).toISOString(),
        title:      'Angenommen',
        info:       `Zugeordnet ${user.value.firstName} ${user.value.lastName}`
    });
    
    // save it
    doSave();
    
    // close dialog
    showForm.value          = false;
}

function isSales() {
    return !!_.get( form.value, 'sales._id' );
}

// get all collections
Promise
    .all([
        userStore.getStore(),
        carinfoStore.getStore(),
        categoryStore.getStore(),
        companyStore.getStore(),
        portalStore.getStore(),
    ])
    .then( async () => {

        await leadStore.registerAction( { action: 'afterSelect',  target: 'Lead', func: afterSelect } );
        await leadStore.registerAction( { action: 'afterSave',    target: 'Lead', func: afterSave } );

        // category list for left side                
        portalList.value   = [
            {
                value:      '',
                label:      t('messages.LabelAll')
            },
            ..._.map( portals.value, item => { 
                return {
                    value:      item.name,
                    label:      item.name || ''
                };
            })
        ];
        
        autoFilter.value    = allauto.value;
        carinfos.value      = _.keyBy( carinfos.value, 'key' );
        
        showGrid.value      = true;
    })
    .catch( err => {
        log( 'ERROR loading', err );
    });

</script>

<style scoped lang="scss">
@import "../_variables.scss";

.detailWindow {
    width:     calc( 100vw - 130px );
    max-width:     calc( 100vw - 130px ) !important;
    height:    calc( 100vh - 100px );
    background-color: white;
}

.detail {
    width:         calc( 100vw - 300px );
    max-width:     1920px;
}

.back-grey {
    background-color: #EEEEEE;
}

.list {
    height: calc( 100vh - #{$header_height} - 210px );
}

.type-boolean {
    text-align: left;
}
.type-number {
    text-align: left;
}
.type-decimal {
    text-align: left;
}
</style>
