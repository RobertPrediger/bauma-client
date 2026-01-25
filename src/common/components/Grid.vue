<template>
    <ag-grid-vue class="aggrid ag-theme-balham" :class="{ portrait: orientation === 'portrait' }"
        :gridOptions="gridOpt"></ag-grid-vue>
</template>

<script lang="ts" setup>
import { AgGridVue } from 'ag-grid-vue3';
import { useI18n } from 'vue-i18n';
import { extend, some, map, each } from 'lodash';

import { useAccountStore } from 'src/stores/account.store';
import { useDataStore } from 'src/stores/data.store';
import { useNavSettingsStore } from 'src/stores/navSettings.store';

import debug from 'debug';
const log = debug('app:grid');

const i18n = useI18n({ useScope: 'global' })

export interface Props {
    stateName: string,
    gridName: string,
    gridOptions: any,
    state: any,
    orientation?: string,
    type?: string,
    limit?: number
}

const props = withDefaults(defineProps<Props>(), {
    type: 'client',
    limit: 100
}
);

const accountStore = useAccountStore();
const settingsStore = useDataStore(props.gridName, 'settings');

const { user, lang } = storeToRefs(accountStore);
const { _data: settings } = storeToRefs(settingsStore);

const emit = defineEmits([
    'subGridReady',
    'beforeSelect',
    'select',
    'beforeDeleteSettings',
    'beforeSaveSettings',
    'afterSave',
    'beforeGetStore',
]);

settingsStore.getStore({ filter: { name: props.gridName } });

// default grid
const defaultGrid: any = {
    defaultColDef: {
        filter: 'agTextColumnFilter',
        floatingFilter: true,
        resizable: true,
        sortable: true,
        width: 200
    },
    components: {},
    rowSelection: 'single',
    getRowId: (params: any) => params.data._id,
    deltaRowDataMode: true,
    onSelectionChanged: onRowSelect,
    onGridReady: gridReady,
    rowData: []
};

// server side
if (props.type === 'server') {
    defaultGrid.deltaRowDataMode = true;
    defaultGrid.rowModelType = 'serverSide';
    defaultGrid.cacheBlockSize = 100;
}

// mix grid options with props from outside
const gridOpt = reactive(extend({}, defaultGrid, props.gridOptions));

// watch for changes of language
watch(lang, (newValue, oldValue) => {
    log('language', oldValue, newValue, gridOpt);

    this.columnDefs(gridOpt);
});

// init store -> register updateSuccess for changes from socket
props.state.initStore({});

// set column labels for grid            
function columnDefs(grid: any, colMenu: any = []) {

    if (!grid.api)
        return;

    // get language and reset labels
    const lang = i18n.messages.value.de,
        locMenu = map(colMenu, (item) => {
            return {
                ...item,
                headerName: lang.messages[item.headerName] || item.headerName,
                cellRenderer: item.cellRenderer ? gridOpt.components[item.cellRenderer] : null
            };
        });

    // set column definitions
    grid.api.setColumnDefs(locMenu);

    // if user is set -> load state                
    if (gridOpt.columnDefs) {
        // set column labels
        const colDefs = map(gridOpt.columnDefs, (item) => {
            return {
                ...item,
                headerName: lang.messages[item.headerName] || item.headerName
            };
        });
        grid.columnApi.applyColumnState(colDefs);
    }
}

// toggle column field
function toggleField(item: any) {
    log('toggle', item);
    gridOpt.columnApi.setColumnVisible(item.colId, item.show);
}

/**************************************************************************/
/**** Grid Settings ****/
/**************************************************************************/

// save grid settings
async function saveSettings() {
    log('saveSettings', props.gridName, user.value);

    try {
        // get settings from grid
        const sett = gridOpt.columnApi.getColumnState(),
            item = {
                _id: `${props.gridName}_${user.value.krz}`,
                columns: sett,
                admin: some(user.value.rights, right => right === 'admin'),
                name: props.gridName,
                user: user.value.krz
            };

        // check for hook
        await emit('beforeSaveSettings', { param: item });

        // save settings
        await settingsStore.updateRecord({ record: item });
    }
    catch (err) {
        log('saveSettings Error:', err);
    }
}

// delete grid settings
async function deleteSettings() {
    log('deleteSettings', props.gridName, user.value);

    try {
        // check for hook
        await emit('beforeDeleteSettings');

        // delete setting
        await settingsStore.deleteRecord({ record: { _id: `${props.gridName}_${user.value.krz}` } });

        // reset columns
        extend(gridOpt, defaultGrid, props.gridOptions);
        columnDefs(gridOpt);
    }
    catch (err) {
        log('removeSettings Error:', err);
    }
}

/**************************************************************************/
/**** Listeners ****/
/**************************************************************************/

// selected record in grid
async function listenSelect(rec: any) {
    log('select', props.gridName, rec._id, gridOpt.api);

    try {
        // hooks beforeSelect
        await emit('beforeSelect', { param: rec });

        // get grid and search for node with _id -> if found, select it        
        gridOpt.api.forEachNode((node: any) => {
            if (node.data && rec._id === node.data._id) {
                log(' ->', node.data);
                node.setSelected(true);
            }
        });

    }
    catch (err) {
        log('listenSelect Error', err);
    }
}

// update success
async function updateSuccess(resp: any) {
    log('updatesuccess', resp);

    // check if row exists (add or update)
    const row = gridOpt.api.getRowNode(resp.body._id);
    log('rowId', props.state.data, row);

    // server side                    
    if (props.type === 'server') {
        if (row)
            row.setData(resp.body);
        // else if (def.push === 'all') {
        //     grid.api.purgeServerSideCache();
        // }
        // client side
    } else {
        if (row) {
            log('row update');
            row.updateData(resp.body);
        } else {
            gridOpt.api.setRowData(props.state.data);
            const row = gridOpt.api.getRowNode(resp.body._id);
            row.setSelected(true, true);
            log('new row', resp.body._id, row);
        }
    }
}

// delete success
async function deleteSuccess(resp: any) {
    log('deleteSuccess', resp, props.state.data);

    // server side                    
    if (props.type === 'server') {
        gridOpt.api.purgeServerSideCache();
        // client side
    } else {
        gridOpt.api.setRowData(props.state.data);
    }
}

/**************************************************************************/
/**** Grid Events ****/
/**************************************************************************/

// row select event in grid
async function onRowSelect() {
    log('onRowSelect', props.gridName, props.state);

    const selectedRows = gridOpt.api.getSelectedRows();
    let type;

    if (selectedRows.length > 0) {
        props.state.setRecord(selectedRows[0] || {});
        type = 'SELECT';
    } else {
        props.state.setRecord({});
        type = 'DELETE';
    }

    // log( 'afterSelect', gridName, dataId, type, selectedRows );
    await props.state.dispatchAction({ action: 'afterSelect', param: selectedRows });

    await emit('select', { param: type });
}

// ag-grid is ready -> only activate when server type
async function subGridReady(params: any) {

    function ServerSideDatasource(): any {

        return {
            async getRows(params: any) {
                log('getRows', props.gridName, params);

                const sort: any = props.gridOptions.sort || {};
                for (const item of params.request.sortModel) {
                    sort[item.colId] = item.sort === 'asc' ? 1 : -1;
                }

                const filter: any = {};
                each(props.gridOptions.filter, (item, key) => {
                    filter[key] = item;
                });
                each(params.request.filterModel, (item, key) => {
                    filter[key] = item;
                });

                props.state.getStore({
                    limit: props.limit,
                    skip: params.request.startRow,
                    sort,
                    filter
                })
                    .then(
                        (body: any) => {
                            log('success', props.gridName, body);
                            params.successCallback(body.data, body.lastRow);
                        },
                        (err: any) => {
                            log('Err', props.state, err);

                            params.failCallback();

                            Notify.create({
                                message: err,
                                color: 'negative',
                                icon: 'report_problem',
                                position: 'top-right',
                                timeout: 5000
                            });
                        }
                    );
            }
        };
    }

    // check for hook
    await emit('beforeGetStore');

    // get datasource
    const datasource = ServerSideDatasource();
    params.api.setServerSideDatasource(datasource);

}

// ag-grid is ready
async function gridReady(params: any) {
    log('gridReady', params);

    // get grid settings and load them
    const resp = await axios.get(`/model/settings/${props.gridName}.json`);

    const colMenu = resp.data.colMenu;

    // if user is set -> load state
    if (resp.data.user)
        gridOpt.columnDefs = resp.data.columns;

    // check for user defined function
    emit('subGridReady', { params, gridOpt, colMenu });

    // set columns
    columnDefs(params, colMenu);

    // initialize server side grid
    if (props.type === 'server') {
        await subGridReady(params);

        // check for type -> datasource: just get data -> only when not in server mode
    } else {
        Loading.show();
        const data = await props.state.getStore({ filter: props.gridOptions?.filter });

        //gridOpt.rowData     = data.data;
        params.api.setRowData(data.data);

        Loading.hide();
    }

    // now send setting for fields in navbar
    await settingsStore.updateRecord({
        record: {
            param: {
                colMenu: resp.data.colMenu,
                columns: resp.data.columns
            }
        }
    });
}

onMounted(() => {
    log('mounted', props.gridName);

    // add listeners
    props.state.registerAction({ action: 'select', target: 'Grid', func: listenSelect });
    props.state.registerAction({ action: 'saveSettings', target: 'Grid', func: saveSettings });
    props.state.registerAction({ action: 'deleteSettings', target: 'Grid', func: deleteSettings });
    props.state.registerAction({ action: 'toggleField', target: 'Grid', func: toggleField });

    props.state.registerAction({ action: 'updateSuccess', target: 'Grid', func: updateSuccess });
    props.state.registerAction({ action: 'deleteSuccess', target: 'Grid', func: deleteSuccess });

});

</script>

<style scoped>
.aggrid {
    height: 400px;
    width: 100%;
}

.portrait {
    height: calc(100vh - 95px - 70px);
    width: 100%;
}
</style>
