import { an as AgGridVue } from "./AgGridVue.c15bd737.js";
import { e as defineComponent, l as debug, L as useI18n, N as useAccountStore, O as useDataStore, R as storeToRefs, bc as reactive, bb as lodash, S as watch, aL as onMounted, q as openBlock, s as createBlock, a7 as normalizeClass, G as unref, _ as _export_sfc, a as axios, bg as Plugin$2, bh as Notify } from "./index.8f8ca0f3.js";
var Grid_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  __name: "Grid",
  props: {
    stateName: {},
    gridName: {},
    gridOptions: {},
    state: {},
    orientation: {},
    type: { default: "client" },
    limit: { default: 100 }
  },
  emits: [
    "subGridReady",
    "beforeSelect",
    "select",
    "beforeDeleteSettings",
    "beforeSaveSettings",
    "afterSave",
    "beforeGetStore"
  ],
  setup(__props, { emit: __emit }) {
    const log = debug("app:grid");
    const i18n = useI18n({ useScope: "global" });
    const props = __props;
    const accountStore = useAccountStore();
    const settingsStore = useDataStore(props.gridName, "settings");
    const { user, lang } = storeToRefs(accountStore);
    storeToRefs(settingsStore);
    const emit = __emit;
    settingsStore.getStore({ filter: { name: props.gridName } });
    const defaultGrid = {
      defaultColDef: {
        filter: "agTextColumnFilter",
        floatingFilter: true,
        resizable: true,
        sortable: true,
        width: 200
      },
      components: {},
      rowSelection: "single",
      getRowId: (params) => params.data._id,
      deltaRowDataMode: true,
      onSelectionChanged: onRowSelect,
      onGridReady: gridReady,
      rowData: []
    };
    if (props.type === "server") {
      defaultGrid.deltaRowDataMode = true;
      defaultGrid.rowModelType = "serverSide";
      defaultGrid.cacheBlockSize = 100;
    }
    const gridOpt = reactive(lodash.exports.extend({}, defaultGrid, props.gridOptions));
    watch(lang, (newValue, oldValue) => {
      log("language", oldValue, newValue, gridOpt);
      this.columnDefs(gridOpt);
    });
    props.state.initStore({});
    function columnDefs(grid, colMenu = []) {
      if (!grid.api)
        return;
      const lang2 = i18n.messages.value.de, locMenu = lodash.exports.map(colMenu, (item) => {
        return {
          ...item,
          headerName: lang2.messages[item.headerName] || item.headerName,
          cellRenderer: item.cellRenderer ? gridOpt.components[item.cellRenderer] : null
        };
      });
      grid.api.setColumnDefs(locMenu);
      if (gridOpt.columnDefs) {
        const colDefs = lodash.exports.map(gridOpt.columnDefs, (item) => {
          return {
            ...item,
            headerName: lang2.messages[item.headerName] || item.headerName
          };
        });
        grid.columnApi.applyColumnState(colDefs);
      }
    }
    function toggleField(item) {
      log("toggle", item);
      gridOpt.columnApi.setColumnVisible(item.colId, item.show);
    }
    async function saveSettings() {
      log("saveSettings", props.gridName, user.value);
      try {
        const sett = gridOpt.columnApi.getColumnState(), item = {
          _id: `${props.gridName}_${user.value.krz}`,
          columns: sett,
          admin: lodash.exports.some(user.value.rights, (right) => right === "admin"),
          name: props.gridName,
          user: user.value.krz
        };
        await emit("beforeSaveSettings", { param: item });
        await settingsStore.updateRecord({ record: item });
      } catch (err) {
        log("saveSettings Error:", err);
      }
    }
    async function deleteSettings() {
      log("deleteSettings", props.gridName, user.value);
      try {
        await emit("beforeDeleteSettings");
        await settingsStore.deleteRecord({ record: { _id: `${props.gridName}_${user.value.krz}` } });
        lodash.exports.extend(gridOpt, defaultGrid, props.gridOptions);
        columnDefs(gridOpt);
      } catch (err) {
        log("removeSettings Error:", err);
      }
    }
    async function listenSelect(rec) {
      log("select", props.gridName, rec._id, gridOpt.api);
      try {
        await emit("beforeSelect", { param: rec });
        gridOpt.api.forEachNode((node) => {
          if (node.data && rec._id === node.data._id) {
            log(" ->", node.data);
            node.setSelected(true);
          }
        });
      } catch (err) {
        log("listenSelect Error", err);
      }
    }
    async function updateSuccess(resp) {
      log("updatesuccess", resp);
      const row = gridOpt.api.getRowNode(resp.body._id);
      log("rowId", props.state.data, row);
      if (props.type === "server") {
        if (row)
          row.setData(resp.body);
      } else {
        if (row) {
          log("row update");
          row.updateData(resp.body);
        } else {
          gridOpt.api.setRowData(props.state.data);
          const row2 = gridOpt.api.getRowNode(resp.body._id);
          row2.setSelected(true, true);
          log("new row", resp.body._id, row2);
        }
      }
    }
    async function deleteSuccess(resp) {
      log("deleteSuccess", resp, props.state.data);
      if (props.type === "server") {
        gridOpt.api.purgeServerSideCache();
      } else {
        gridOpt.api.setRowData(props.state.data);
      }
    }
    async function onRowSelect() {
      log("onRowSelect", props.gridName, props.state);
      const selectedRows = gridOpt.api.getSelectedRows();
      let type;
      if (selectedRows.length > 0) {
        props.state.setRecord(selectedRows[0] || {});
        type = "SELECT";
      } else {
        props.state.setRecord({});
        type = "DELETE";
      }
      await props.state.dispatchAction({ action: "afterSelect", param: selectedRows });
      await emit("select", { param: type });
    }
    async function subGridReady(params) {
      function ServerSideDatasource() {
        return {
          getRows(params2) {
            log("getRows", props.gridName, params2);
            const sort = props.gridOptions.sort || {};
            for (const item of params2.request.sortModel) {
              sort[item.colId] = item.sort === "asc" ? 1 : -1;
            }
            const filter = {};
            lodash.exports.each(props.gridOptions.filter, (item, key) => {
              filter[key] = item;
            });
            lodash.exports.each(params2.request.filterModel, (item, key) => {
              filter[key] = item;
            });
            props.state.getStore({
              limit: props.limit,
              skip: params2.request.startRow,
              sort,
              filter
            }).then(
              (body) => {
                log("success", props.gridName, body);
                params2.successCallback(body.data, body.lastRow);
              },
              (err) => {
                log("Err", props.state, err);
                params2.failCallback();
                Notify.create({
                  message: err,
                  color: "negative",
                  icon: "report_problem",
                  position: "top-right",
                  timeout: 5e3
                });
              }
            );
          }
        };
      }
      await emit("beforeGetStore");
      const datasource = new ServerSideDatasource();
      params.api.setServerSideDatasource(datasource);
    }
    async function gridReady(params) {
      var _a;
      log("gridReady", params);
      const resp = await axios.get(`/model/settings/${props.gridName}.json`);
      const colMenu = resp.data.colMenu;
      if (resp.data.user)
        gridOpt.columnDefs = resp.data.columns;
      emit("subGridReady", { params, gridOpt, colMenu });
      columnDefs(params, colMenu);
      if (props.type === "server") {
        await subGridReady(params);
      } else {
        Plugin$2.show();
        const data = await props.state.getStore({ filter: (_a = props.gridOptions) == null ? void 0 : _a.filter });
        params.api.setRowData(data.data);
        Plugin$2.hide();
      }
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
      log("mounted", props.gridName);
      props.state.registerAction({ action: "select", target: "Grid", func: listenSelect });
      props.state.registerAction({ action: "saveSettings", target: "Grid", func: saveSettings });
      props.state.registerAction({ action: "deleteSettings", target: "Grid", func: deleteSettings });
      props.state.registerAction({ action: "toggleField", target: "Grid", func: toggleField });
      props.state.registerAction({ action: "updateSuccess", target: "Grid", func: updateSuccess });
      props.state.registerAction({ action: "deleteSuccess", target: "Grid", func: deleteSuccess });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(AgGridVue), {
        class: normalizeClass(["aggrid ag-theme-balham", { portrait: _ctx.orientation === "portrait" }]),
        gridOptions: unref(gridOpt)
      }, null, 8, ["class", "gridOptions"]);
    };
  }
});
var Grid = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-02bf22fa"], ["__file", "Grid.vue"]]);
export { Grid as G };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JpZC5iNDgxNGFjYS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi9jb21wb25lbnRzL0dyaWQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8YWctZ3JpZC12dWUgY2xhc3M9XCJhZ2dyaWQgYWctdGhlbWUtYmFsaGFtXCIgOmNsYXNzPVwieyBwb3J0cmFpdDogb3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgfVwiIDpncmlkT3B0aW9ucz1cImdyaWRPcHRcIj48L2FnLWdyaWQtdnVlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7IEFnR3JpZFZ1ZSB9ICAgICAgICAgICAgICAgICAgICBmcm9tICdhZy1ncmlkLXZ1ZTMnO1xuaW1wb3J0IHsgdXNlSTE4biB9ICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3Z1ZS1pMThuJztcbmltcG9ydCB7IGV4dGVuZCwgc29tZSwgbWFwLCBlYWNoIH0gICAgICBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyB1c2VBY2NvdW50U3RvcmUgfSAgICAgICAgICAgICAgZnJvbSAnc3JjL3N0b3Jlcy9hY2NvdW50LnN0b3JlJztcbmltcG9ydCB7IHVzZURhdGFTdG9yZSB9ICAgICAgICAgICAgICAgICBmcm9tICdzcmMvc3RvcmVzL2RhdGEuc3RvcmUnO1xuaW1wb3J0IHsgdXNlTmF2U2V0dGluZ3NTdG9yZSB9ICAgICAgICAgIGZyb20gJ3NyYy9zdG9yZXMvbmF2U2V0dGluZ3Muc3RvcmUnO1xuXG5pbXBvcnQgZGVidWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnZGVidWcnO1xuY29uc3QgbG9nICAgICAgICAgPSBkZWJ1ZygnYXBwOmdyaWQnKTtcblxuY29uc3QgaTE4biAgICAgICAgICAgICAgPSB1c2VJMThuKHsgdXNlU2NvcGU6ICdnbG9iYWwnIH0pXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICAgIHN0YXRlTmFtZTogICAgICAgICAgc3RyaW5nLFxuICAgIGdyaWROYW1lOiAgICAgICAgICAgc3RyaW5nLFxuICAgIGdyaWRPcHRpb25zOiAgICAgICAgYW55LFxuICAgIHN0YXRlOiAgICAgICAgICAgICAgYW55LFxuICAgIG9yaWVudGF0aW9uPzogICAgICAgc3RyaW5nLFxuICAgIHR5cGU/OiAgICAgICAgICAgICAgc3RyaW5nLFxuICAgIGxpbWl0PzogICAgICAgICAgICAgbnVtYmVyXG59XG5cbmNvbnN0IHByb3BzICAgICAgICAgPSB3aXRoRGVmYXVsdHMoIGRlZmluZVByb3BzPFByb3BzPigpLCB7XG4gICAgICAgIHR5cGU6ICAgICAgICAgICAgICAgJ2NsaWVudCcsXG4gICAgICAgIGxpbWl0OiAgICAgICAgICAgICAgMTAwXG4gICAgfVxuKTtcblxuY29uc3QgYWNjb3VudFN0b3JlICAgICAgICAgID0gdXNlQWNjb3VudFN0b3JlKCk7XG5jb25zdCBzZXR0aW5nc1N0b3JlICAgICAgICAgPSB1c2VEYXRhU3RvcmUoIHByb3BzLmdyaWROYW1lLCAnc2V0dGluZ3MnICk7XG5cbmNvbnN0IHsgdXNlciwgbGFuZyB9ICAgICAgICA9IHN0b3JlVG9SZWZzKCBhY2NvdW50U3RvcmUgKTtcbmNvbnN0IHsgX2RhdGE6IHNldHRpbmdzIH0gICA9IHN0b3JlVG9SZWZzKCBzZXR0aW5nc1N0b3JlICk7XG5cbmNvbnN0IGVtaXQgID0gZGVmaW5lRW1pdHMoW1xuICAgICdzdWJHcmlkUmVhZHknLFxuICAgICdiZWZvcmVTZWxlY3QnLFxuICAgICdzZWxlY3QnLFxuICAgICdiZWZvcmVEZWxldGVTZXR0aW5ncycsXG4gICAgJ2JlZm9yZVNhdmVTZXR0aW5ncycsXG4gICAgJ2FmdGVyU2F2ZScsXG4gICAgJ2JlZm9yZUdldFN0b3JlJyxcbl0pO1xuXG5zZXR0aW5nc1N0b3JlLmdldFN0b3JlKCB7IGZpbHRlcjogeyBuYW1lOiBwcm9wcy5ncmlkTmFtZSB9fSApO1xuXG4vLyBkZWZhdWx0IGdyaWRcbmNvbnN0IGRlZmF1bHRHcmlkOiBhbnkgICAgICAgPSB7XG4gICAgICAgIGRlZmF1bHRDb2xEZWY6ICB7XG4gICAgICAgICAgICBmaWx0ZXI6ICAgICAgICAgICAgICdhZ1RleHRDb2x1bW5GaWx0ZXInLFxuICAgICAgICAgICAgZmxvYXRpbmdGaWx0ZXI6ICAgICB0cnVlLFxuICAgICAgICAgICAgcmVzaXphYmxlOiAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgc29ydGFibGU6ICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgd2lkdGg6ICAgICAgICAgICAgICAyMDBcbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czogICAgICAgICB7fSxcbiAgICAgICAgcm93U2VsZWN0aW9uOiAgICAgICAnc2luZ2xlJyxcbiAgICAgICAgZ2V0Um93SWQ6ICAgICAgICAgICAoIHBhcmFtczogYW55ICkgPT4gcGFyYW1zLmRhdGEuX2lkLFxuICAgICAgICBkZWx0YVJvd0RhdGFNb2RlOiAgIHRydWUsXG4gICAgICAgIG9uU2VsZWN0aW9uQ2hhbmdlZDogb25Sb3dTZWxlY3QsXG4gICAgICAgIG9uR3JpZFJlYWR5OiAgICAgICAgZ3JpZFJlYWR5LFxuICAgICAgICByb3dEYXRhOiAgICAgICAgICAgIFtdXG4gICAgfTtcblxuLy8gc2VydmVyIHNpZGVcbmlmIChwcm9wcy50eXBlID09PSAnc2VydmVyJykge1xuICAgIGRlZmF1bHRHcmlkLmRlbHRhUm93RGF0YU1vZGUgICAgICAgID0gdHJ1ZTtcbiAgICBkZWZhdWx0R3JpZC5yb3dNb2RlbFR5cGUgICAgICAgICAgICA9ICdzZXJ2ZXJTaWRlJztcbiAgICBkZWZhdWx0R3JpZC5jYWNoZUJsb2NrU2l6ZSAgICAgICAgICA9IDEwMDtcbn1cblxuLy8gbWl4IGdyaWQgb3B0aW9ucyB3aXRoIHByb3BzIGZyb20gb3V0c2lkZVxuY29uc3QgZ3JpZE9wdCAgICAgICA9IHJlYWN0aXZlKCBleHRlbmQoIHt9LCBkZWZhdWx0R3JpZCwgcHJvcHMuZ3JpZE9wdGlvbnMgKSApO1xuICAgICAgICBcbi8vIHdhdGNoIGZvciBjaGFuZ2VzIG9mIGxhbmd1YWdlXG53YXRjaCggbGFuZywgKCBuZXdWYWx1ZSwgb2xkVmFsdWUgKSA9PiB7XG4gICAgbG9nKCAnbGFuZ3VhZ2UnLCBvbGRWYWx1ZSwgbmV3VmFsdWUsIGdyaWRPcHQgKTtcbiAgICBcbiAgICB0aGlzLmNvbHVtbkRlZnMoIGdyaWRPcHQgKTtcbn0pO1xuXG4vLyBpbml0IHN0b3JlIC0+IHJlZ2lzdGVyIHVwZGF0ZVN1Y2Nlc3MgZm9yIGNoYW5nZXMgZnJvbSBzb2NrZXRcbnByb3BzLnN0YXRlLmluaXRTdG9yZSgge30gKTtcblxuLy8gc2V0IGNvbHVtbiBsYWJlbHMgZm9yIGdyaWQgICAgICAgICAgICBcbmZ1bmN0aW9uIGNvbHVtbkRlZnMoIGdyaWQ6IGFueSwgY29sTWVudTogYW55ID0gW10gKSB7XG4gICAgXG4gICAgaWYgKCFncmlkLmFwaSlcbiAgICAgICAgcmV0dXJuO1xuICAgIFxuICAgIC8vIGdldCBsYW5ndWFnZSBhbmQgcmVzZXQgbGFiZWxzXG4gICAgY29uc3QgbGFuZyAgICAgICAgICAgID0gaTE4bi5tZXNzYWdlcy52YWx1ZS5kZSxcbiAgICAgICAgICBsb2NNZW51ICAgICAgICAgPSBtYXAoIGNvbE1lbnUsIChpdGVtKSA9PiB7IFxuICAgICAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlck5hbWU6ICAgICBsYW5nLm1lc3NhZ2VzWyBpdGVtLmhlYWRlck5hbWUgXSB8fCBpdGVtLmhlYWRlck5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNlbGxSZW5kZXJlcjogICBpdGVtLmNlbGxSZW5kZXJlciA/IGdyaWRPcHQuY29tcG9uZW50c1sgaXRlbS5jZWxsUmVuZGVyZXIgXSA6IG51bGxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgIC8vIHNldCBjb2x1bW4gZGVmaW5pdGlvbnNcbiAgICBncmlkLmFwaS5zZXRDb2x1bW5EZWZzKCBsb2NNZW51ICk7XG5cbiAgICAvLyBpZiB1c2VyIGlzIHNldCAtPiBsb2FkIHN0YXRlICAgICAgICAgICAgICAgIFxuICAgIGlmICggZ3JpZE9wdC5jb2x1bW5EZWZzICkge1xuICAgICAgICAvLyBzZXQgY29sdW1uIGxhYmVsc1xuICAgICAgICBjb25zdCBjb2xEZWZzICAgICAgICAgPSBtYXAoIGdyaWRPcHQuY29sdW1uRGVmcywgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlck5hbWU6ICAgICBsYW5nLm1lc3NhZ2VzWyBpdGVtLmhlYWRlck5hbWUgXSB8fCBpdGVtLmhlYWRlck5hbWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBncmlkLmNvbHVtbkFwaS5hcHBseUNvbHVtblN0YXRlKCBjb2xEZWZzICk7XG4gICAgfVxufVxuICAgIFxuLy8gdG9nZ2xlIGNvbHVtbiBmaWVsZFxuZnVuY3Rpb24gdG9nZ2xlRmllbGQoIGl0ZW06IGFueSApIHtcbiAgICBsb2coICd0b2dnbGUnLCBpdGVtICk7XG4gICAgZ3JpZE9wdC5jb2x1bW5BcGkuc2V0Q29sdW1uVmlzaWJsZSggaXRlbS5jb2xJZCwgaXRlbS5zaG93ICk7XG59XG4gICAgICAgIFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKiogR3JpZCBTZXR0aW5ncyAqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBzYXZlIGdyaWQgc2V0dGluZ3NcbmFzeW5jIGZ1bmN0aW9uIHNhdmVTZXR0aW5ncygpIHtcbiAgICBsb2coICdzYXZlU2V0dGluZ3MnLCBwcm9wcy5ncmlkTmFtZSwgdXNlci52YWx1ZSApO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gZ2V0IHNldHRpbmdzIGZyb20gZ3JpZFxuICAgICAgICBjb25zdCBzZXR0ICAgICAgICA9IGdyaWRPcHQuY29sdW1uQXBpLmdldENvbHVtblN0YXRlKCksXG4gICAgICAgICAgICBpdGVtICAgICAgICA9IHtcbiAgICAgICAgICAgICAgICBfaWQ6ICAgICAgICBgJHtwcm9wcy5ncmlkTmFtZX1fJHt1c2VyLnZhbHVlLmtyen1gLFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6ICAgIHNldHQsXG4gICAgICAgICAgICAgICAgYWRtaW46ICAgICAgc29tZSggdXNlci52YWx1ZS5yaWdodHMsIHJpZ2h0ID0+IHJpZ2h0ID09PSAnYWRtaW4nICksXG4gICAgICAgICAgICAgICAgbmFtZTogICAgICAgcHJvcHMuZ3JpZE5hbWUsXG4gICAgICAgICAgICAgICAgdXNlcjogICAgICAgdXNlci52YWx1ZS5rcnpcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgLy8gY2hlY2sgZm9yIGhvb2tcbiAgICAgICAgYXdhaXQgZW1pdCggJ2JlZm9yZVNhdmVTZXR0aW5ncycsIHsgcGFyYW06IGl0ZW0gfSApO1xuXG4gICAgICAgIC8vIHNhdmUgc2V0dGluZ3NcbiAgICAgICAgYXdhaXQgc2V0dGluZ3NTdG9yZS51cGRhdGVSZWNvcmQoIHsgcmVjb3JkOiBpdGVtIH0gKTtcbiAgICB9XG4gICAgY2F0Y2goIGVyciApIHtcbiAgICAgICAgbG9nKCAnc2F2ZVNldHRpbmdzIEVycm9yOicsIGVyciApO1xuICAgIH1cbn1cblxuLy8gZGVsZXRlIGdyaWQgc2V0dGluZ3NcbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNldHRpbmdzKCkge1xuICAgIGxvZyggJ2RlbGV0ZVNldHRpbmdzJywgcHJvcHMuZ3JpZE5hbWUsIHVzZXIudmFsdWUgKTtcblxuICAgIHRyeSB7XG4gICAgICAgIC8vIGNoZWNrIGZvciBob29rXG4gICAgICAgIGF3YWl0IGVtaXQoICdiZWZvcmVEZWxldGVTZXR0aW5ncycgKTtcblxuICAgICAgICAvLyBkZWxldGUgc2V0dGluZ1xuICAgICAgICBhd2FpdCBzZXR0aW5nc1N0b3JlLmRlbGV0ZVJlY29yZCggeyByZWNvcmQ6IHsgX2lkOiBgJHtwcm9wcy5ncmlkTmFtZX1fJHt1c2VyLnZhbHVlLmtyen1gIH0gfSApO1xuXG4gICAgICAgIC8vIHJlc2V0IGNvbHVtbnNcbiAgICAgICAgZXh0ZW5kKCBncmlkT3B0LCBkZWZhdWx0R3JpZCwgcHJvcHMuZ3JpZE9wdGlvbnMgKTtcbiAgICAgICAgY29sdW1uRGVmcyggZ3JpZE9wdCApO1xuICAgIH1cbiAgICBjYXRjaCggZXJyICkge1xuICAgICAgICBsb2coICdyZW1vdmVTZXR0aW5ncyBFcnJvcjonLCBlcnIgKTtcbiAgICB9XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqIExpc3RlbmVycyAqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBzZWxlY3RlZCByZWNvcmQgaW4gZ3JpZFxuYXN5bmMgZnVuY3Rpb24gbGlzdGVuU2VsZWN0KCByZWM6IGFueSApIHtcbiAgICBsb2coICdzZWxlY3QnLCBwcm9wcy5ncmlkTmFtZSwgcmVjLl9pZCwgZ3JpZE9wdC5hcGkgKTtcbiAgICBcbiAgICB0cnkge1xuICAgICAgICAvLyBob29rcyBiZWZvcmVTZWxlY3RcbiAgICAgICAgYXdhaXQgZW1pdCggJ2JlZm9yZVNlbGVjdCcsIHsgcGFyYW06IHJlYyB9ICk7XG5cbiAgICAgICAgLy8gZ2V0IGdyaWQgYW5kIHNlYXJjaCBmb3Igbm9kZSB3aXRoIF9pZCAtPiBpZiBmb3VuZCwgc2VsZWN0IGl0ICAgICAgICBcbiAgICAgICAgZ3JpZE9wdC5hcGkuZm9yRWFjaE5vZGUoICggbm9kZTogYW55ICkgPT4ge1xuICAgICAgICAgICAgaWYgKCBub2RlLmRhdGEgJiYgcmVjLl9pZCA9PT0gbm9kZS5kYXRhLl9pZCApIHtcbiAgICAgICAgICAgICAgICBsb2coICcgLT4nLCBub2RlLmRhdGEgKTtcbiAgICAgICAgICAgICAgICBub2RlLnNldFNlbGVjdGVkKCB0cnVlICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG4gICAgY2F0Y2goIGVyciApIHtcbiAgICAgICAgbG9nKCAnbGlzdGVuU2VsZWN0IEVycm9yJywgZXJyICk7XG4gICAgfVxufVxuXG4vLyB1cGRhdGUgc3VjY2Vzc1xuYXN5bmMgZnVuY3Rpb24gdXBkYXRlU3VjY2VzcyggcmVzcDogYW55ICkge1xuICAgIGxvZyggJ3VwZGF0ZXN1Y2Nlc3MnLCByZXNwICk7XG5cbiAgICAvLyBjaGVjayBpZiByb3cgZXhpc3RzIChhZGQgb3IgdXBkYXRlKVxuICAgIGNvbnN0IHJvdyAgICAgICA9IGdyaWRPcHQuYXBpLmdldFJvd05vZGUoIHJlc3AuYm9keS5faWQgKTtcbiAgICBsb2coICdyb3dJZCcsIHByb3BzLnN0YXRlLmRhdGEsIHJvdyApO1xuXG4gICAgLy8gc2VydmVyIHNpZGUgICAgICAgICAgICAgICAgICAgIFxuICAgIGlmICggcHJvcHMudHlwZSA9PT0gJ3NlcnZlcicgKSB7XG4gICAgICAgIGlmIChyb3cpXG4gICAgICAgICAgICByb3cuc2V0RGF0YSggcmVzcC5ib2R5ICk7XG4gICAgICAgIC8vIGVsc2UgaWYgKGRlZi5wdXNoID09PSAnYWxsJykge1xuICAgICAgICAvLyAgICAgZ3JpZC5hcGkucHVyZ2VTZXJ2ZXJTaWRlQ2FjaGUoKTtcbiAgICAgICAgLy8gfVxuICAgIC8vIGNsaWVudCBzaWRlXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJvdykge1xuICAgICAgICAgICAgbG9nKCAncm93IHVwZGF0ZScgKTtcbiAgICAgICAgICAgIHJvdy51cGRhdGVEYXRhKCByZXNwLmJvZHkgKTtcbiAgICAgICAgfSBlbHNlIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIGdyaWRPcHQuYXBpLnNldFJvd0RhdGEoIHByb3BzLnN0YXRlLmRhdGEgKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdyAgICAgICA9IGdyaWRPcHQuYXBpLmdldFJvd05vZGUoIHJlc3AuYm9keS5faWQgKTtcbiAgICAgICAgICAgIHJvdy5zZXRTZWxlY3RlZCggdHJ1ZSwgdHJ1ZSApO1xuICAgICAgICAgICAgbG9nKCAnbmV3IHJvdycsIHJlc3AuYm9keS5faWQsIHJvdyApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBkZWxldGUgc3VjY2Vzc1xuYXN5bmMgZnVuY3Rpb24gZGVsZXRlU3VjY2VzcyggcmVzcDogYW55ICkge1xuICAgIGxvZyggJ2RlbGV0ZVN1Y2Nlc3MnLCByZXNwLCBwcm9wcy5zdGF0ZS5kYXRhICk7XG5cbiAgICAvLyBzZXJ2ZXIgc2lkZSAgICAgICAgICAgICAgICAgICAgXG4gICAgaWYgKCBwcm9wcy50eXBlID09PSAnc2VydmVyJyApIHtcbiAgICAgICAgZ3JpZE9wdC5hcGkucHVyZ2VTZXJ2ZXJTaWRlQ2FjaGUoKTtcbiAgICAvLyBjbGllbnQgc2lkZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGdyaWRPcHQuYXBpLnNldFJvd0RhdGEoIHByb3BzLnN0YXRlLmRhdGEgKTtcbiAgICB9XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqIEdyaWQgRXZlbnRzICoqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIHJvdyBzZWxlY3QgZXZlbnQgaW4gZ3JpZFxuYXN5bmMgZnVuY3Rpb24gb25Sb3dTZWxlY3QoKSB7XG4gICAgbG9nKCAnb25Sb3dTZWxlY3QnLCBwcm9wcy5ncmlkTmFtZSwgcHJvcHMuc3RhdGUgKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkUm93cyAgICAgICAgPSBncmlkT3B0LmFwaS5nZXRTZWxlY3RlZFJvd3MoKTtcbiAgICBsZXQgdHlwZTtcbiAgICAgICAgXG4gICAgaWYgKHNlbGVjdGVkUm93cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHByb3BzLnN0YXRlLnNldFJlY29yZCggc2VsZWN0ZWRSb3dzWzBdIHx8IHt9ICk7XG4gICAgICAgIHR5cGUgICAgICAgICAgICA9ICdTRUxFQ1QnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzLnN0YXRlLnNldFJlY29yZCgge30gKTtcbiAgICAgICAgdHlwZSAgICAgICAgICAgID0gJ0RFTEVURSc7XG4gICAgfVxuICAgIFxuICAgIC8vIGxvZyggJ2FmdGVyU2VsZWN0JywgZ3JpZE5hbWUsIGRhdGFJZCwgdHlwZSwgc2VsZWN0ZWRSb3dzICk7XG4gICAgYXdhaXQgcHJvcHMuc3RhdGUuZGlzcGF0Y2hBY3Rpb24oIHsgYWN0aW9uOiAnYWZ0ZXJTZWxlY3QnLCBwYXJhbTogc2VsZWN0ZWRSb3dzIH0gKTtcblxuICAgIGF3YWl0IGVtaXQoICdzZWxlY3QnLCB7IHBhcmFtOiB0eXBlIH0gKTtcbn1cblxuLy8gYWctZ3JpZCBpcyByZWFkeSAtPiBvbmx5IGFjdGl2YXRlIHdoZW4gc2VydmVyIHR5cGVcbmFzeW5jIGZ1bmN0aW9uIHN1YkdyaWRSZWFkeSggcGFyYW1zOiBhbnkgKSB7XG5cbiAgICBmdW5jdGlvbiBTZXJ2ZXJTaWRlRGF0YXNvdXJjZSgpOiBhbnkge1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldFJvd3MoIHBhcmFtczogYW55ICkge1xuICAgICAgICAgICAgICAgIGxvZyggJ2dldFJvd3MnLCBwcm9wcy5ncmlkTmFtZSwgcGFyYW1zICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3Qgc29ydDogYW55ICAgICAgICA9IHByb3BzLmdyaWRPcHRpb25zLnNvcnQgfHwge307XG4gICAgICAgICAgICAgICAgZm9yKCBjb25zdCBpdGVtIG9mIHBhcmFtcy5yZXF1ZXN0LnNvcnRNb2RlbCApIHtcbiAgICAgICAgICAgICAgICAgICAgc29ydFsgaXRlbS5jb2xJZCBdICAgICAgPSBpdGVtLnNvcnQgPT09ICdhc2MnID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXI6IGFueSAgICAgID0ge307XG4gICAgICAgICAgICAgICAgZWFjaCggcHJvcHMuZ3JpZE9wdGlvbnMuZmlsdGVyLCAoaXRlbSwga2V5ICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJbIGtleSBdICAgICAgID0gaXRlbTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlYWNoKCBwYXJhbXMucmVxdWVzdC5maWx0ZXJNb2RlbCwgKGl0ZW0sIGtleSApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyWyBrZXkgXSAgICAgICA9IGl0ZW07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBwcm9wcy5zdGF0ZS5nZXRTdG9yZSgge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6ICAgICAgcHJvcHMubGltaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBza2lwOiAgICAgICBwYXJhbXMucmVxdWVzdC5zdGFydFJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgfSApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgKCBib2R5OiBhbnkgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nKCAnc3VjY2VzcycsIHByb3BzLmdyaWROYW1lLCBib2R5ICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnN1Y2Nlc3NDYWxsYmFjayggYm9keS5kYXRhLCBib2R5Lmxhc3RSb3cgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAoIGVycjogYW55ICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZyggJ0VycicsIHByb3BzLnN0YXRlLCBlcnIgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMuZmFpbENhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aWZ5LmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAgICAgICAgICAnbmVnYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAgICAgICAgICAgJ3JlcG9ydF9wcm9ibGVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICAgICAgICd0b3AtcmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAgICAgICAgNTAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICAvLyBjaGVjayBmb3IgaG9va1xuICAgIGF3YWl0IGVtaXQoICdiZWZvcmVHZXRTdG9yZScgKTtcblxuICAgIC8vIGdldCBkYXRhc291cmNlXG4gICAgY29uc3QgZGF0YXNvdXJjZSAgICAgID0gbmV3IFNlcnZlclNpZGVEYXRhc291cmNlKCk7XG4gICAgcGFyYW1zLmFwaS5zZXRTZXJ2ZXJTaWRlRGF0YXNvdXJjZSggZGF0YXNvdXJjZSApO1xuXG59XG5cbi8vIGFnLWdyaWQgaXMgcmVhZHlcbmFzeW5jIGZ1bmN0aW9uIGdyaWRSZWFkeSggcGFyYW1zOiBhbnkgKSB7XG4gICAgbG9nKCAnZ3JpZFJlYWR5JywgcGFyYW1zICk7XG5cbiAgICAvLyBnZXQgZ3JpZCBzZXR0aW5ncyBhbmQgbG9hZCB0aGVtXG4gICAgY29uc3QgcmVzcCAgICAgICAgPSBhd2FpdCBheGlvcy5nZXQoIGAvbW9kZWwvc2V0dGluZ3MvJHtwcm9wcy5ncmlkTmFtZX0uanNvbmAgKTtcblxuICAgIGNvbnN0IGNvbE1lbnUgICAgPSByZXNwLmRhdGEuY29sTWVudTtcblxuICAgIC8vIGlmIHVzZXIgaXMgc2V0IC0+IGxvYWQgc3RhdGVcbiAgICBpZiAocmVzcC5kYXRhLnVzZXIpXG4gICAgICAgIGdyaWRPcHQuY29sdW1uRGVmcyAgICAgPSByZXNwLmRhdGEuY29sdW1ucztcblxuICAgIC8vIGNoZWNrIGZvciB1c2VyIGRlZmluZWQgZnVuY3Rpb25cbiAgICBlbWl0KCAnc3ViR3JpZFJlYWR5JywgeyBwYXJhbXMsIGdyaWRPcHQsIGNvbE1lbnUgfSApO1xuXG4gICAgLy8gc2V0IGNvbHVtbnNcbiAgICBjb2x1bW5EZWZzKCBwYXJhbXMsIGNvbE1lbnUgKTtcblxuICAgIC8vIGluaXRpYWxpemUgc2VydmVyIHNpZGUgZ3JpZFxuICAgIGlmIChwcm9wcy50eXBlID09PSAnc2VydmVyJykge1xuICAgICAgICBhd2FpdCBzdWJHcmlkUmVhZHkoIHBhcmFtcyApO1xuXG4gICAgLy8gY2hlY2sgZm9yIHR5cGUgLT4gZGF0YXNvdXJjZToganVzdCBnZXQgZGF0YSAtPiBvbmx5IHdoZW4gbm90IGluIHNlcnZlciBtb2RlXG4gICAgfSBlbHNlIHtcbiAgICAgICAgTG9hZGluZy5zaG93KCk7XG4gICAgICAgIGNvbnN0IGRhdGEgICAgICAgID0gYXdhaXQgcHJvcHMuc3RhdGUuZ2V0U3RvcmUoIHsgZmlsdGVyOiBwcm9wcy5ncmlkT3B0aW9ucz8uZmlsdGVyIH0gKTtcbiAgICAgICAgXG4gICAgICAgIC8vZ3JpZE9wdC5yb3dEYXRhICAgICA9IGRhdGEuZGF0YTtcbiAgICAgICAgcGFyYW1zLmFwaS5zZXRSb3dEYXRhKCBkYXRhLmRhdGEgKTtcblxuICAgICAgICBMb2FkaW5nLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvLyBub3cgc2VuZCBzZXR0aW5nIGZvciBmaWVsZHMgaW4gbmF2YmFyXG4gICAgYXdhaXQgc2V0dGluZ3NTdG9yZS51cGRhdGVSZWNvcmQoIHsgXG4gICAgICAgIHJlY29yZDogeyBcbiAgICAgICAgICAgIHBhcmFtOiB7IFxuICAgICAgICAgICAgICAgIGNvbE1lbnU6ICAgICAgICByZXNwLmRhdGEuY29sTWVudSxcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiAgICAgICAgcmVzcC5kYXRhLmNvbHVtbnNcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0gXG4gICAgfSApO1xufVxuXG5vbk1vdW50ZWQoICgpID0+IHtcbiAgICBsb2coICdtb3VudGVkJywgcHJvcHMuZ3JpZE5hbWUgKTtcblxuICAgIC8vIGFkZCBsaXN0ZW5lcnNcbiAgICBwcm9wcy5zdGF0ZS5yZWdpc3RlckFjdGlvbiggeyBhY3Rpb246ICdzZWxlY3QnLCAgICAgICAgICAgdGFyZ2V0OiAnR3JpZCcsICAgZnVuYzogbGlzdGVuU2VsZWN0IH0gKTtcbiAgICBwcm9wcy5zdGF0ZS5yZWdpc3RlckFjdGlvbiggeyBhY3Rpb246ICdzYXZlU2V0dGluZ3MnLCAgICAgdGFyZ2V0OiAnR3JpZCcsICAgZnVuYzogc2F2ZVNldHRpbmdzIH0gKTtcbiAgICBwcm9wcy5zdGF0ZS5yZWdpc3RlckFjdGlvbiggeyBhY3Rpb246ICdkZWxldGVTZXR0aW5ncycsICAgdGFyZ2V0OiAnR3JpZCcsICAgZnVuYzogZGVsZXRlU2V0dGluZ3MgfSApO1xuICAgIHByb3BzLnN0YXRlLnJlZ2lzdGVyQWN0aW9uKCB7IGFjdGlvbjogJ3RvZ2dsZUZpZWxkJywgICAgICB0YXJnZXQ6ICdHcmlkJywgICBmdW5jOiB0b2dnbGVGaWVsZCB9ICk7XG5cbiAgICBwcm9wcy5zdGF0ZS5yZWdpc3RlckFjdGlvbiggeyBhY3Rpb246ICd1cGRhdGVTdWNjZXNzJywgICAgdGFyZ2V0OiAnR3JpZCcsICAgZnVuYzogdXBkYXRlU3VjY2VzcyB9ICk7XG4gICAgcHJvcHMuc3RhdGUucmVnaXN0ZXJBY3Rpb24oIHsgYWN0aW9uOiAnZGVsZXRlU3VjY2VzcycsICAgIHRhcmdldDogJ0dyaWQnLCAgIGZ1bmM6IGRlbGV0ZVN1Y2Nlc3MgfSApO1xuICAgIFxufSk7XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG4uYWdncmlkIHtcbiAgICBoZWlnaHQ6ICAgICAgICA0MDBweDtcbiAgICB3aWR0aDogICAgICAgICAxMDAlO1xufVxuXG4ucG9ydHJhaXQge1xuICAgIGhlaWdodDogICAgY2FsYyggMTAwdmggLSA5NXB4IC0gNzBweCApO1xuICAgIHdpZHRoOiAgICAgICAgIDEwMCU7XG59XG5cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiZXh0ZW5kIiwibWFwIiwic29tZSIsImVhY2giLCJMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSxVQUFBLE1BQUEsTUFBQSxVQUFBO0FBRUEsVUFBQSxPQUFBLFFBQUEsRUFBQSxVQUFBLFNBQUEsQ0FBQTtBQVlBLFVBQUEsUUFBQTtBQU1BLFVBQUEsZUFBQTtBQUNBLFVBQUEsZ0JBQUEsYUFBQSxNQUFBLFVBQUEsVUFBQTtBQUVBLFVBQUEsRUFBQSxNQUFBLEtBQUEsSUFBQSxZQUFBLFlBQUE7QUFDQSxnQkFBQSxhQUFBO0FBRUEsVUFBQSxPQUFBO0FBVUEsa0JBQUEsU0FBQSxFQUFBLFFBQUEsRUFBQSxNQUFBLE1BQUEsU0FBQSxFQUFBLENBQUE7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
