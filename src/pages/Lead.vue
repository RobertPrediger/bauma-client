<template>
    <q-page class="q-pa-sm">

        <NavBar :title="$t('messages.LabelLead')" icon="fas fa-address-card" stateName="leads" xfuncs="navbarSubmenu" :state="leadStore" :locButtons="leadButtons" v-on:clickButton="clickButton" type="window" />
        
        <q-card>
            <q-card-section>
                <Grid gridName="leadGrid" :gridOptions="leadGrid" stateName="leads" :state="leadStore" @subGridReady="subGridReady" v-if="showGrid" type="server" orientation="portrait" />
            </q-card-section>

            <q-separator />
        </q-card>
        
        <q-dialog v-model="showForm" @hide="onFormHide" no-backdrop-dismiss>
            <q-layout container view="lHh lpR lff" class="shadow-2 rounded detailWindow">
            
                <q-header elevated class="bg-primary text-white" height-hint="98">
                    <NavBar :title="$t('messages.LabelLead')" icon="open_with" stateName="leads" xfuncs="navbarSubmenu" :state="leadStore" v-on:clickButton="clickButton" type="dialog" @close="onFormHide" />
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
                                            <q-btn icon="fas fa-envelope" color="white" text-color="black" :label="$t('messages.ColMail')" @click="send.EMail" dense />
                                            <q-separator spaced vertical />
                                            <q-btn icon="fas fa-inbox" color="white" text-color="black" :label="$t('messages.ColLetter')" @click="send.Mail" dense />
                                            <q-separator spaced vertical />
                                            <q-btn icon="fas fa-calendar-alt" color="white" text-color="black" :label="$t('messages.LabelDate')" @click="send.Date" dense />
                                        </q-toolbar>                                                
                                        
                                        <q-tabs v-model="tab" class="text-teal bg-white" align="left" dense outlined>
                                            <q-tab :label="$t('messages.LabelContact')" name="contact" />
                                            <q-tab :label="$t('messages.LabelCar')" name="car" />
                                            <q-tab :label="$t('messages.LabelCarinfo')" name="rieur" />
                                            <q-tab :label="$t('messages.LabelImages')" name="image" />
                                            <q-tab :label="$t('messages.LabelDocuments')" name="documents" />
                                        </q-tabs>
            
                                        <q-tab-panels v-model="tab">
                        
                                            <q-tab-panel name="contact">
                                                <q-input name="leadinfo" v-model="form.lead.info" lazy-rules type="textarea" dense outlined autogrow style="max-height: 300px;"
                                                    :label="$t('messages.LabelInfo')"
                                                    hint=""
                                                    />
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
                    
                                            <q-tab-panel name="image" :disable="!form.img">
                                                <q-scroll-area class="list">
                                                    <div class="row q-col-gutter-xs" v-if="form.img">
                                                        <div class="col-3" v-for="image of form.img" :key="image.name" @click="showImg( image )">
                                                            <q-img :src="image.src" />
                                                        </div>
                                                    </div>
                                                </q-scroll-area>
                                            </q-tab-panel>
                    
                                            <q-tab-panel name="documents">
                                                <div class="row q-col-gutter-md">
                                                    <div class="col-8">
                                                        <q-scroll-area class="list">
                                                            <q-list bordered separator dense outlined>
                                                                <q-item clickable v-for="item in documents" :key="item.memento.id">
                                                                    <q-item-section class="col-6">
                                                                        <q-item-label>{{ item.memento.baseName }}</q-item-label>
                                                                    </q-item-section>
                                                                    <q-item-section class="col-3">
                                                                        <q-item-label>{{ item.memento.lastmod }}</q-item-label>
                                                                    </q-item-section>
                                                                    <q-item-section class="col-2 text-right">
                                                                        <q-item-label>{{ item.memento.size }}</q-item-label>
                                                                    </q-item-section>
                                                                    <q-item-section class="col-1">
                                                                        <q-btn dense color="primary" @click="showDoc(item)" icon="fas fa-download" label="" />
                                                                    </q-item-section>
                                                                </q-item>
                                                            </q-list>
                                                        </q-scroll-area>
                                                    </div>
                                                    <div class="col-4">
                                                        <q-uploader
                                                            :disabled="!form.gfz"
                                                            ref="uploader"
                                                            :url="`/custom/uploadFile?gfz=${form.gfz}`"
                                                            @finish="finishFile"
                                                            flat
                                                            bordered
                                                            multiple
                                                        />
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
                                                        <q-timeline-entry v-for="item of form.hist" :key="item.timestamp"
                                                            :title="$t(`messages.History_${item.type}`)"
                                                            :subtitle="moment( item.timestamp ).format('ddd DD.MM.YYYY HH:mm')"
                                                            :icon="item.icon"
                                                            :color="item.color"
                                                        >
                                                            <div>{{ item.title }}</div>
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

        <q-dialog v-model="showLink">
            <q-card class="detail">
                <q-toolbar class="bg-blue-8 text-white shadow">
                    <q-toolbar-title v-t="'messages.LabelLink'"></q-toolbar-title>

                    <q-separator spaced vertical />

                    <q-btn clickable @click="saveLink" no-caps size="md" color="white" text-color="black" icon="save_alt" v-close-popup>
                        <q-tooltip>{{ $t('messages.ButtonSave') }}</q-tooltip>
                    </q-btn>
                    <q-separator spaced vertical />
                    <q-btn icon="close" color="white" text-color="black" v-close-popup >
                        <q-tooltip>{{ $t('messages.ButtonClose') }}</q-tooltip>
                    </q-btn>
                </q-toolbar>

                <q-card-section>
                    <ag-grid-vue class="links ag-theme-balham" :gridOptions="linkGrid" :rowData="links" :frameworkComponents="frameworkComponents"></ag-grid-vue>
                </q-card-section>
            </q-card>
        </q-dialog>

        <q-dialog v-model="showImage">
            <q-card class="detail">
                <q-card-section>
                    <q-img :src="image.src" />
                </q-card-section>
            </q-card>
        </q-dialog>
    </q-page>
</template>

<script lang="ts" setup>
import { AgGridVue }                    from 'ag-grid-vue3';
import { useI18n }                      from 'vue-i18n';

import moment                           from 'moment';
import _                                from 'lodash';

import GlobalView                       from '../common/helpers/GlobalView';
import Status                           from '../common/helpers/Status'; 
import Send                             from '../common/helpers/Send'; 
import NavBar                           from '../components/NavBar.vue'; 
import Grid                             from '../common/components/Grid.vue';
import GridLinkbox                      from '../components/GridLinkbox'; 

import { useAccountStore }              from 'src/stores/account.store';
import { useDataStore }                 from 'src/stores/data.store';

import debug                            from 'debug';
const log         = debug('app:lead');

const { t }                             = useI18n();

moment.locale( 'de' );

const init        = { 
    collName:       'lead', 
    stateName:      'lead',
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
        hist:           []
    }
};

const globalView  = GlobalView( init );
const { 
    store:          leadStore, 
    data:           lead, 
    doSave,
    form 
}  = globalView;

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

const   frameworkComponents    = {
            checkboxRenderer:       GridLinkbox
        },
        leadGrid  = ref({
            // filter:             { 'sales._id': getters.user.value._id },
            componentParent:    parent,
            columnTypes:    {
                stateColumn:     {
                    valueGetter( params ) {
                        const state     = _.get( params, 'data.state' );
                        return _.get( params, `context.stateList.${state}.label`, state );
                    }
                },
                salesColumn:     {
                    valueGetter( params ) {
                        return ( (params.data && params.data.sales && params.data.sales.surName && `${params.data.sales.firstName} ${params.data.sales.surName}`) || '' );
                    }
                },
                categoryColumn:     {
                    valueGetter( params ) {
                        const category        = _.get( params, 'data.category', '0' );
                        return _.get( params, `context.categories.${category}.desc`, category );
                    }
                }
            },
            sort: {
               date:    -1
            },
        }),
        linkGrid  = ref({
            rowModelType:       'clientSide',
            columnTypes:    {
                salesColumn:     {
                    valueGetter( params ) {
                        return ( (params.data && params.data.sales && params.data.sales.surName && `${params.data.sales.firstName} ${params.data.sales.surName}`) || '' );
                    }
                },
                categoryColumn:     {
                    valueGetter( params ) {
                        return ( (params.data && params.data.category && params.context.categories[ params.data.category ]) || '' );
                    }
                }
            },
            columnDefs:         [
                {
                    field:          'link',
                    headerName:     'Link',
                    width:          100,
                    cellClass:      'cellCenter',
                    cellRenderer:   'checkboxRenderer'
                },
                {
                    field:          'date',
                    headerName:     t('messages.ColDate'),
                    cellClass:      'cellCenter'
                },
                {
                    field:          'fahrzeug.model',
                    headerName:     t('messages.ColModel')
                },
                {
                    field:          'sales',
                    headerName:     t('messages.LabelSales'),
                    type:           'salesColumn'
                },
                {
                    field:          'lead.firstName',
                    headerName:     t('messages.ColFirstName'),
                    width:          100
                },
                {
                    field:          'lead.surName',
                    headerName:     t('messages.ColSurName')
                },
                {
                    field:          'lead.email',
                    headerName:     t('messages.ColMail')
                },
                {
                    field:          'lead.telefon',
                    headerName:     t('messages.ColPhone')
                }
            ],
            rowData:            null,
            context:            {
                type:                   'details',
                componentParent:        parent,
                setValue
            }
        }),
        stateList     = Status( t ),
        send          = Send();

const   tab           = ref('contact'),
        uploader      = ref( null ),
        carList       = ref([]),
        links         = ref([]),
        autoFilter    = ref([]),
        showLink      = ref(false),
        showImage     = ref(false),
        image         = ref({}),
        leadButtons   = ref([
            {
                label:      'LabelLink',
                link:       'linkLead',
                icon:       'fas fa-link'
            }
        ]),
        showGrid      = ref(false),
        showForm      = ref(false);

const autosellers     = ref([]);

function setValue( name: string, value: string, data: any ) {
    log( 'setValue', name, value, data );
}

// before select hook
async function afterSelect( record: any ) {
    log( 'hook beforeSelect', record );
    
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

    // await documentStore.getDocuments( {
    //         filter:         {
    //             gfz:            record.gfz
    //         }
    //     });

    uploader.value?.reset();

    showForm.value   = true;
    
    return record;
}

// select row
// async function afterSelect( selectedRows ) {
//     log( 'hook afterSelect' );
//     showForm.value   = true;
// }

// hide dialog
function onFormHide() {
    showForm.value   = false;
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
        stateList:              _.keyBy( stateList, 'value' ),
        categories:             _.keyBy( categories.value, 'name' )
    };
}

function clickButton( link: string ) {
    log( 'clickButton', link );
    switch(link) {
        case 'linkLead':
            if (!form._id) {
                Notify.create({
                    message:        t('messages.TextNoRecord'),
                    color:          'negative',
                    icon:           'report_problem',
                    position:       'top-right',
                    timeout:        3000
                });
                return;
            }
                
            linkLead( form );
            break;
    }
}

function takeLead( data: any ) {
    // put user inside
    data.sales      = user.value;
    
    // now save it
//            listenSave( data );
}

async function linkLead( data: any ) {
    // get nav
    const resp            = await axios.post( '/data/lead', { filter: { gfz: data.gfz } } );
    links.value         = resp.data.data;

    for( const item of links.value ) {
        item.link       = (item._id === form.value._id);
    }
    
    showLink.value      = true;
}

async function saveLink() {
    log( 'save link', links.value );

    // filter all leads which should be linked
    links.value      = _.filter( links.value, (item) => item.link );
    
    // save linked leads
    try {
        await axios.post( '/custom/linkLead', { links: links.value, main: form.value._id } );

        Notify.create({
            message:        parent.$t('messages.TextLinkSaved'),
            color:          'green-9',
            icon:           'done',
            position:       'top-right',
            timeout:        1000
        });
    }
    catch( err ) {
        Notify.create({
            message:        err,
            color:          'negative',
            icon:           'report_problem',
            position:       'top-right',
            timeout:        5000
        });
    }
}

async function filterAutoseller ( val: string, update: any, abort: any ) {
    log( 'FILTER', val );

    function filter() {
        update( () => {
            if (val === '') {
                autoFilter.value     = autosellers.value;
            } else {
                const needle    = val.toLowerCase();
                autoFilter.value     = _.filter( autosellers.value, (v: any) => v.label.toLowerCase().indexOf(needle) > -1);
            }
            log( '->', autoFilter.value );
        });
    }

    if (!autosellers.value) {
        const resp    = await autosellerStore.getStore();
        
        autosellers.value   = _.map( resp.data, item => {
            return {
                value:      item.gfz,
                label:      `${item.gfz} (${(item.fahrzeug?.model) || ''})`
            };
        });
        filter();
    } else
        filter();
}

function filterAbort() {
    log( 'ABORT' );
}

function showImg( img: any ) {
    showImage.value     = true;
    image.value         = img;
}

// function afterSelect() {
//     let list        = [];
    
//     _.forEach( form.infos, ( entry, key ) => {
//         let desc    = key,
//             type    = 'string';
        
//         if (getters.carinfos.value[ key ]) {
//             desc    = carinfos.value[ key ].desc;
//             type    = carinfos.value[ key ].type;
//         }
        
//         switch( type ) {
//             case 'boolean':
//                 entry        = entry === '0' ? 'Ja' : 'Nein';
//                 break;
//         }
        
//         list.push( { key, entry, desc, type } );
//     });
    
//     carList.value    = list;
    
//     log( 'list', list );
// }

// function setValue( name, value, data ) {
    
// }

function showDoc( item: any ) {
    Notify.create({
        message:        'Dokument wird geladen ...',
        color:          'green-9',
        icon:           'done',
        position:       'top-right',
        timeout:        1000
    });
    window.open( `/opendoc/${item.memento.baseName}?name=${item.memento.name}`, 'opendoc' );
}

function finishFile() {
    uploader.value && uploader.value.reset();
}

onMounted( async () => {
    await userStore.getStore();
    await carinfoStore.getStore();
    await categoryStore.getStore();
    await companyStore.getStore();

    // await actions.registerAction( { action: 'beforeSelect', target: 'Lead', func: beforeSelect } );
    await leadStore.registerAction( { action: 'afterSelect', target: 'Lead', func: afterSelect } );
    
    autoFilter.value    = allauto.value;
    carinfos.value      = _.keyBy( carinfos.value, 'key' );

    showGrid.value       = true;
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

.image-area {
    overflow:       scroll;
    
}

.back-grey {
    background-color: #EEEEEE;
}

.links {
    height:        calc( 100vh - #{$header_height} - 500px );
    min-height:    300px;
    width:         100%;
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
