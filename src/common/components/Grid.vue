<template>
    <ag-grid-vue class="aggrid ag-theme-balham" :class="{ portrait: orientation === 'portrait' }"
        :gridOptions="gridOpt"></ag-grid-vue>
</template>

<script lang="ts" setup>
import { AgGridVue }                    from 'ag-grid-vue3';
import { extend, some, map, each }      from 'lodash';

import { useAccountStore }              from 'src/stores/account.store';
import { useDataStore }                 from 'src/stores/data.store';
import { useNavSettingsStore }          from 'src/stores/navSettings.store';

import debug                            from 'debug';
const log           = debug('app:grid');

export interface Props {
    stateName:          string,
    gridName:           string,
    gridOptions:        any,
    state:              any,
    orientation?:       string,
    type?:              string,
    limit?:             number,
}

const props = withDefaults(defineProps<Props>(), {
    type:           'client',
    limit:          100
}
);

const accountStore      = useAccountStore();
const settingsStore     = useDataStore(props.gridName, 'settings');

const { user, lang }        = storeToRefs(accountStore);
const { _data: settings }   = storeToRefs(settingsStore);

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
        filter:             'agTextColumnFilter',
        floatingFilter:     true,
        resizable:          true,
        sortable:           true,
        width:              200
    },
    components:         {},
    rowSelection:       'single',
    getRowId:           (params: any) => params.data._id,
    deltaRowDataMode:   true,
    onSelectionChanged: onRowSelect,
    onGridReady:        gridReady,
    rowData:            [],
};

// server side
if (props.type === 'server') {
    defaultGrid.deltaRowDataMode    = true;
    defaultGrid.rowModelType        = 'serverSide';
    defaultGrid.cacheBlockSize      = 100;
}

// mix grid options with props from outside
const gridOpt       = reactive( extend( {}, defaultGrid, props.gridOptions ) );

// watch for changes of language
watch(lang, (newValue, oldValue) => {
    log('language', oldValue, newValue, gridOpt );

    columnDefs(gridOpt);
});

// init store -> register updateSuccess for changes from socket
props.state.initStore({});

// set column labels for grid
function columnDefs(grid: any, colMenu: any = []) {

    if (!grid.api)
        return;

    // get language and reset labels
    const locMenu = map(colMenu, (item) => {
            return {
                ...item,
                cellRenderer: item.cellRenderer ? gridOpt.components[item.cellRenderer] : null
            };
        });

    // set column definitions
    grid.api.setGridOption('columnDefs', locMenu);

    // if user is set -> load state
    if (gridOpt.columnDefs) {
        // set column labels
        const colDefs = map(gridOpt.columnDefs, (item) => {
            return {
                ...item,
            };
        });
        grid.api.applyColumnState({ state: colDefs });
    }
}

// toggle column field
function toggleField(item: any) {
    log('toggle', item);
    gridOpt.api.setColumnVisible(item.colId, item.show);
}

/**************************************************************************/
/**** Grid Settings ****/
/**************************************************************************/

// save grid settings
async function saveSettings() {
    log('saveSettings', props.gridName, user.value);

    try {
        // get settings from grid
        const
            sett      = gridOpt.api.getColumnState(),
            item      = {
                _id:        `${props.gridName}_${user.value.krz}`,
                columns:    sett,
                admin:      some(user.value.rights, right => right === 'admin'),
                name:       props.gridName,
                user:       user.value.krz,
            };

        // check for hook
        emit('beforeSaveSettings', { param: item });

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
        emit('beforeDeleteSettings');

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
        emit('beforeSelect', { param: rec });

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
    log('onRowSelect', props.gridName, props.state, gridOpt );

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

                let sort: any;
                if (params.request.sortModel && params.request.sortModel.length > 0) {
                    // User has changed sorting - use only their sort
                    sort = {};
                    for (const item of params.request.sortModel) {
                        sort[item.colId] = item.sort === 'asc' ? 1 : -1;
                    }
                } else {
                    // No user sorting - use default
                    sort = props.gridOptions.sort || {};
                }

                // Combine default filters with user filters
                // Default filters from gridOptions are always active
                // User filters from filterModel are added/override only if they have actual values
                const filter: any = {};

                // First add default filters (if any) - these are always active
                if (props.gridOptions.filter) {
                    each(props.gridOptions.filter, (item, key) => {
                        filter[key] = item;
                    });
                }

                // Then add/override with user filters from ag-Grid
                // Only add filters that have actual values (ag-Grid sometimes sends empty filters)
                if (params.request.filterModel) {
                    each(params.request.filterModel, (item, key) => {
                        // Check if filter has a value
                        // For text filters, check if item.filter exists and is not empty after trimming
                        let hasValue = false;

                        if (item) {
                            if (typeof item.filter === 'string') {
                                hasValue = item.filter.trim() !== '';
                            } else if (item.filter !== null && item.filter !== undefined) {
                                hasValue = true;
                            }
                            // Also check for complex filters with operator
                            if (item.operator && (item.condition1 || item.condition2)) {
                                hasValue = true;
                            }
                        }

                        if (hasValue) {
                            filter[key] = item;
                        } else {
                            // Filter was cleared - remove it from filter object if it exists
                            delete filter[key];
                        }
                    });
                }

                props.state.getStore({
                    limit: props.limit,
                    skip: params.request.startRow,
                    sort,
                    filter
                })
                    .then(
                        (body: any) => {
                            log('success', props.gridName, body);
                            params.success({
                                rowData:    body.data,
                                rowCount:   body.lastRow
                            });
                        },
                        (err: any) => {
                            log('Err', props.state, err);

                            params.fail();

                            Notify.create({
                                message:    err,
                                color:      'negative',
                                icon:       'report_problem',
                                position:   'top-right',
                                timeout:    5000
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
    params.api.setGridOption('serverSideDatasource', datasource);

}

// ag-grid is ready
async function gridReady(params: any) {
    log('gridReady', params);

    // Set the API reference to gridOpt
    gridOpt.api = params.api;

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
