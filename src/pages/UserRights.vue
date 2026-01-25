<template>
    <q-page class="q-pa-sm">
        <div class="row">
            <q-toolbar class="bg-blue-8 text-white shadow">
                <q-btn flat round dense icon="vpn_key"></q-btn>
                <q-toolbar-title v-t="'messages.ColRoles'"></q-toolbar-title>
            </q-toolbar>

            <NavBar stateName="userrights" :state="userrightsStore" :navclass="{ 'col-4': 1, 'col-lg-3': 1 }" :navshow="{ settings: false }" />
            
            <q-toolbar class="col-8 col-lg-9 bg-blue-8 text-white shadow">
                <q-tabs v-model="tab" active-bg-color="white" active-color="black">
                    <q-tab name="nav" :label="$t('messages.LabelRoles')" />
                    <!--<q-tab name="db" :label="$t('messages.LabelDatabase')" />-->
                </q-tabs>

                <q-space />

                <q-btn no-caps size="md" color="white" text-color="black" icon="save_alt" @click="doRoleSave()">
                    <q-tooltip>{{ $t('messages.ButtonSave') }}</q-tooltip>
                </q-btn>
            </q-toolbar>
        </div>

        <div class="row q-col-gutter-md">
            <div class="col-4 col-lg-3">
                <q-card>
                    <q-card-section>
                        <Grid gridName="userrightGrid" :gridOptions="userrightGrid" stateName="userrights" :state="userrightsStore" />
                    </q-card-section>

                    <q-card-section>
                        <div class="text-h6" v-t="'messages.ColRoles'"></div>
                    </q-card-section>

                    <q-separator />
        
                    <q-form @submit="doSave" class="q-gutter-xs" ref="userrights">
                        <input type="submit" style="position: absolute; left: -9999px"/>
        
                        <q-card-section>
                            <div class="row q-col-gutter-md">
                                <div class="col">

                                    <q-input name="right" v-model="form.right" lazy-rules
                                        :label="$t('messages.ColName')"
                                        />
                                    <q-input name="desc" v-model="form.desc" lazy-rules 
                                        :label="$t('messages.ColDesc')"
                                        />
                                </div>
                            </div>
                        </q-card-section>
                    </q-form>
                </q-card>
            </div>

            <div class="col-8 col-lg-9">
                <q-tab-panels v-model="tab">
                    <q-tab-panel name="nav">
                        <q-card>
                            <q-card-section>
                                <ag-grid-vue class="roles ag-theme-balham" :gridOptions="userrolesGrid" :rowData="userroles" xframeworkComponents="frameworkComponents"></ag-grid-vue>
                            </q-card-section>
                        </q-card>
                    </q-tab-panel>
                    <!--<q-tab-panel name="db">-->
                    <!--    <q-card>-->
                    <!--        <q-card-section>-->
                    <!--            <ag-grid-vue class="roles ag-theme-balham" :gridOptions="userdbGrid" :rowData="userdb" :frameworkComponents="frameworkComponents"></ag-grid-vue>-->
                    <!--        </q-card-section>-->
                    <!--    </q-card>-->
                    <!--</q-tab-panel>-->
                </q-tab-panels>
            </div>
        </div>

        <q-dialog v-model="showDetail" persistent>
            <q-card class="detail">
                <q-toolbar class="bg-blue-8 text-white shadow">
                    <q-toolbar-title v-t="'messages.LabelDetail'"></q-toolbar-title>

                    <q-separator spaced vertical />

                    <q-btn no-caps size="md" color="white" text-color="black" icon="save_alt" v-close-popup>
                        <q-tooltip>{{ $t('messages.ButtonSave') }}</q-tooltip>
                    </q-btn>
                </q-toolbar>

                <q-card-section>
                    <ag-grid-vue class="grid ag-theme-balham" :gridOptions="userrolesDetailGrid" :rowData="userdetails" xframeworkComponents="frameworkComponents"></ag-grid-vue>
                </q-card-section>
            </q-card>
        </q-dialog>
    </q-page>
</template>

<script lang="ts" setup>
import GlobalView                       from '../common/helpers/GlobalView';
import NavBar                           from '../components/NavBar.vue'; 
import Grid                             from '../common/components/Grid.vue';
import GridButton                       from '../components/GridButton'; 
import GridCheckbox                     from '../components/GridCheckbox';

import _                                from 'lodash';
import { useI18n }                      from 'vue-i18n';

import { useAccountStore }              from 'src/stores/account.store';

import debug                            from 'debug';
const log         = debug('app:userrights');

const { t }                             = useI18n();

const init        = { 
    collName:       'userrights', 
    stateName:      'userrights'
};
const globalView  = GlobalView( init );
const { 
    store:          userrightsStore, 
    data:           userrights, 
    doSave,
    form 
}  = globalView;

const accountStore                 = useAccountStore();

const { user }  = storeToRefs( accountStore );

// eslint-disable-next-line @typescript-eslint/no-this-alias
const root      = this;

const userrightGrid              = ref({});

const showDetail    = ref(false),
        errors        = ref(null),
        tab           = ref('nav'),
        userroles     = ref([]),
        userdetails   = ref([]),
        userdb        = ref([]);

const userrolesGrid  = {
        treeData:           true,
        groupDefaultExpanded: -1,
        getDataPath( data: any ) {
            return data.path;
        },
        getRowNodeId( data ) {
            return data.link;
        },
        columnDefs:         [
            { field: 'details', width: 100, cellClass: 'cellCenter', cellRenderer: 'buttonRenderer', pinned: 'left' }
        ],
        autoGroupColumnDef: {
            headerName:         '',
            width:              300,
            pinned:             'left',
            cellRendererParams: {
                suppressCount:      true
            }
        },
        singleClickEdit:    true,
        rowData:            null,
        context:            {
            type:                   'rechte',
            componentParent:        root,
            setValue
        }
    };

const userrolesDetailGrid    = {
        columnDefs:         [],
        singleClickEdit:    true,
        rowData:            null,
        context:            {
            type:                   'details',
            componentParent:        root,
            setValue
        }
    };

const userdbGrid  = {
        treeData:           true,
        groupDefaultExpanded: -1,
        getDataPath( data: any ) {
            return data.path;
        },
        getRowNodeId( data ) {
            return data.link;
        },
        columnDefs:         [
            { field: 'details', width: 100, cellClass: 'cellCenter', cellRenderer: 'buttonRenderer', pinned: 'left' }
        ],
        autoGroupColumnDef: {
            headerName:         '',
            width:              300,
            pinned:             'left',
            cellRendererParams: {
                suppressCount:      true
            }
        },
        singleClickEdit:    true,
        onGridReady:        userdbGridReady,
        rowData:            null,
        context:            {
            type:                   'rechte',
            componentParent:        root,
            setValue
        }
    };

function changeRole( right, link ) {
    log( 'click', right, link );
}

// initiate user grids
async function getUserroles( data: any ) {
    const rowData: any[]     = [];
    
    log( 'getuserroles', data );

    function nav( elm, path ) {
        const newPath = [ ...path, elm.name ];
        elm.path    = newPath;

        if (!elm.rechte)
            elm.rechte      = {};

        for (const role of data ) {
            elm.rechte[ role.right ]   = ( role.rechte && role.rechte[ elm.link ] ) || false;
        }

        rowData.push( elm );
        
        if (elm.collapsed) {
            _.forEach( elm.collapsed, (rec) => {
                nav( rec, newPath );
            });
        }
    }

    // get nav
    const resp        = await axios.get( '/custom/sideNav/all' ),
        columnDefs          = [
            { field: 'gruppe', headerName: '', width: 100, pinned: 'left' },
            { field: 'desc', headerName: '', width: 200, pinned: 'left' }
        ];

    for( const role of _.sortBy( data, 'desc' ) ) {
        
        if (!role.rechte)
            role.rechte     = {};
            
        userrolesGrid.columnDefs.push({
            field:              `rechte.${role.right}`,
            name:               role.right,
            headerName:         role.desc,
            width:              100,
            cellClass:          'cellCenter',
            cellRenderer:       'checkboxRenderer'
        });

        columnDefs.push({
            field:          `details.${role.right}`,
            name:           role.right,
            headerName:     role.desc,
            width:          100,
            cellClass:      'cellCenter',
            cellRenderer:   'checkboxRenderer'
        });
        
        userdbGrid.columnDefs.push({
            field:              `rechte.${role.right}`,
            name:               role.right,
            headerName:         role.desc,
            width:              100,
            cellClass:          'cellCenter',
            cellRenderer:       'checkboxRenderer'
        });
    }
    
    _.forEach( resp.data, ( row ) => {
        nav( row, [] );
    });
    
    log( 'rowdata', userrolesGrid, rowData, resp.data );
    userrolesGrid.api.setColumnDefs( userrolesGrid.columnDefs );
    
    // set columndefs for detail grid
    userrolesDetailGrid.columnDefs     = columnDefs;

    userroles.value      = rowData;
}

function userdbGridReady() {
    // set columndefs for db grid
    userdbGrid.api.setColumnDefs( userdbGrid.columnDefs );
}

async function showEdit( params ) {
    log( 'showEdit', params ); 

    // get nav
    const resp        = await axios.get( `/model/rights/${params.link}.json` );
    
    userdetails.value         = (resp.data && resp.data.submenu);

    // no details -> nothing to show
    if (!userdetails.value)
        return;

    // set link in context
    userrolesDetailGrid.context.link       = params.link;

    showDetail.value         = true;

    for (const detail of userdetails.values) {
        detail.desc     = t( `messages.${detail.name}` );
        detail.gruppe   = t( `messages.Group${detail.group || ''}` );
        
        detail.details      = {};

        for (const role of userrights.value) {
            if (role.details && role.details[ params.link ])                    
                detail.details[ role.right ]    = role.details[ params.link ][ detail.link ] || false;
            else
                detail.details[ role.right ]    = false;
        }
    }
}

// set switch in userright
function setValue( type: string, prog: string, role: string, link: string, value: any ) {
    log( 'setvalue', type, role, link, value );
    
    // get role
    const userrole    = _.find( userrights.value, (elm) => elm.right === role);

    // check subpart of role
    if (!userrole[ type ])
        userrole[ type ]     = {};

    // set value in subpart
    if (type === 'rechte')
        userrole[ type ][ link ]     = value;
    else {
        if (!userrole[ type ][ prog ])
            userrole[ type ][ prog ]     = {};
        userrole[ type ][ prog ][ link ]     = value;
    }
}

// save userrights
async function doRoleSave() {
    
    try {
        // save all roles
        for ( const role of userrights.value ) {
            log( 'save', role );
            await userrightsStore.update( { body: role, noMsg: true } );
        }
        
        Notify.create({
            message:        t('messages.TextRecSaved'),
            color:          'green-9',
            icon:           'done',
            position:       'top-right',
            timeout:        1000
        });
        
    }
    catch( error ) {
        log( 'Error', error );
    }
}

onMounted( () => {
    // check for userrights value
    // getUserroles( store.value.state[ dataId ] );
});
</script>

<style scoped lang="scss">
@import "../_variables.scss";

.grid {
    height:        400px;
    width:         100%;
}

.roles {
    height:         calc( 100vh - #{$header_height} - 170px );
    width:         100%;
}

.detail {
    width:         calc( 100vh - 250px );
    max-width:     1920px;
}
</style>
