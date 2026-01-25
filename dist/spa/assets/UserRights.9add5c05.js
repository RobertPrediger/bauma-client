import { _ as _export_sfc, e as defineComponent, l as debug, L as useI18n, N as useAccountStore, R as storeToRefs, n as ref, aL as onMounted, o as resolveComponent, T as resolveDirective, q as openBlock, s as createBlock, w as withCtx, E as createBaseVNode, f as createVNode, y as QBtn, V as withDirectives, u as QToolbarTitle, Q as QToolbar, G as unref, X as isRef, z as QTooltip, v as createTextVNode, A as toDisplayString, D as QCardSection, x as QSeparator, F as QInput, U as QCard, a5 as QDialog, C as QPage, M as _, bh as Notify, be as ClosePopup, J as pushScopeId, K as popScopeId } from "./index.8f8ca0f3.js";
import { Q as QTabs, a as QTab, c as QTabPanel, b as QTabPanels } from "./QTabPanels.46aa2434.js";
import { Q as QSpace } from "./QSpace.8e4d5c99.js";
import { Q as QForm } from "./QForm.8c81555c.js";
import { g as globalView, N as NavBar } from "./NavBar.eb70e4d5.js";
import { G as Grid } from "./Grid.b4814aca.js";
import "./rtl.b51694b1.js";
import "./AgGridVue.c15bd737.js";
var UserRights_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-12eaca2f"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "row" };
const _hoisted_2 = { class: "row q-col-gutter-md" };
const _hoisted_3 = { class: "col-4 col-lg-3" };
const _hoisted_4 = { class: "text-h6" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("input", {
  type: "submit",
  style: { "position": "absolute", "left": "-9999px" }
}, null, -1));
const _hoisted_6 = { class: "row q-col-gutter-md" };
const _hoisted_7 = { class: "col" };
const _hoisted_8 = { class: "col-8 col-lg-9" };
const _sfc_main = defineComponent({
  __name: "UserRights",
  setup(__props) {
    const log = debug("app:userrights");
    const { t } = useI18n();
    const init = {
      collName: "userrights",
      stateName: "userrights"
    };
    const globalView$1 = globalView(init);
    const {
      store: userrightsStore,
      data: userrights,
      doSave,
      form
    } = globalView$1;
    const accountStore = useAccountStore();
    storeToRefs(accountStore);
    const root = this;
    const userrightGrid = ref({});
    const showDetail = ref(false);
    ref(null);
    const tab = ref("nav"), userroles = ref([]), userdetails = ref([]);
    ref([]);
    const userrolesGrid = {
      treeData: true,
      groupDefaultExpanded: -1,
      getDataPath(data) {
        return data.path;
      },
      getRowNodeId(data) {
        return data.link;
      },
      columnDefs: [
        { field: "details", width: 100, cellClass: "cellCenter", cellRenderer: "buttonRenderer", pinned: "left" }
      ],
      autoGroupColumnDef: {
        headerName: "",
        width: 300,
        pinned: "left",
        cellRendererParams: {
          suppressCount: true
        }
      },
      singleClickEdit: true,
      rowData: null,
      context: {
        type: "rechte",
        componentParent: root,
        setValue
      }
    };
    const userrolesDetailGrid = {
      columnDefs: [],
      singleClickEdit: true,
      rowData: null,
      context: {
        type: "details",
        componentParent: root,
        setValue
      }
    };
    function setValue(type, prog, role, link, value) {
      log("setvalue", type, role, link, value);
      const userrole = _.find(userrights.value, (elm) => elm.right === role);
      if (!userrole[type])
        userrole[type] = {};
      if (type === "rechte")
        userrole[type][link] = value;
      else {
        if (!userrole[type][prog])
          userrole[type][prog] = {};
        userrole[type][prog][link] = value;
      }
    }
    async function doRoleSave() {
      try {
        for (const role of userrights.value) {
          log("save", role);
          await userrightsStore.update({ body: role, noMsg: true });
        }
        Notify.create({
          message: t("messages.TextRecSaved"),
          color: "green-9",
          icon: "done",
          position: "top-right",
          timeout: 1e3
        });
      } catch (error) {
        log("Error", error);
      }
    }
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      const _component_ag_grid_vue = resolveComponent("ag-grid-vue");
      const _directive_t = resolveDirective("t");
      return openBlock(), createBlock(QPage, { class: "q-pa-sm" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(QToolbar, { class: "bg-blue-8 text-white shadow" }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  flat: "",
                  round: "",
                  dense: "",
                  icon: "vpn_key"
                }),
                withDirectives(createVNode(QToolbarTitle, null, null, 512), [
                  [_directive_t, "messages.ColRoles"]
                ])
              ]),
              _: 1
            }),
            createVNode(NavBar, {
              stateName: "userrights",
              state: unref(userrightsStore),
              navclass: { "col-4": 1, "col-lg-3": 1 },
              navshow: { settings: false }
            }, null, 8, ["state"]),
            createVNode(QToolbar, { class: "col-8 col-lg-9 bg-blue-8 text-white shadow" }, {
              default: withCtx(() => [
                createVNode(QTabs, {
                  modelValue: unref(tab),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(tab) ? tab.value = $event : null),
                  "active-bg-color": "white",
                  "active-color": "black"
                }, {
                  default: withCtx(() => [
                    createVNode(QTab, {
                      name: "nav",
                      label: _ctx.$t("messages.LabelRoles")
                    }, null, 8, ["label"])
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                createVNode(QSpace),
                createVNode(QBtn, {
                  "no-caps": "",
                  size: "md",
                  color: "white",
                  "text-color": "black",
                  icon: "save_alt",
                  onClick: _cache[1] || (_cache[1] = ($event) => doRoleSave())
                }, {
                  default: withCtx(() => [
                    createVNode(QTooltip, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("messages.ButtonSave")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createVNode(QCard, null, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createVNode(Grid, {
                        gridName: "userrightGrid",
                        gridOptions: unref(userrightGrid),
                        stateName: "userrights",
                        state: unref(userrightsStore)
                      }, null, 8, ["gridOptions", "state"])
                    ]),
                    _: 1
                  }),
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      withDirectives(createBaseVNode("div", _hoisted_4, null, 512), [
                        [_directive_t, "messages.ColRoles"]
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(QSeparator),
                  createVNode(QForm, {
                    onSubmit: unref(doSave),
                    class: "q-gutter-xs",
                    ref_key: "userrights",
                    ref: userrights
                  }, {
                    default: withCtx(() => [
                      _hoisted_5,
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_6, [
                            createBaseVNode("div", _hoisted_7, [
                              createVNode(QInput, {
                                name: "right",
                                modelValue: unref(form).right,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).right = $event),
                                "lazy-rules": "",
                                label: _ctx.$t("messages.ColName")
                              }, null, 8, ["modelValue", "label"]),
                              createVNode(QInput, {
                                name: "desc",
                                modelValue: unref(form).desc,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).desc = $event),
                                "lazy-rules": "",
                                label: _ctx.$t("messages.ColDesc")
                              }, null, 8, ["modelValue", "label"])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onSubmit"])
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_8, [
              createVNode(QTabPanels, {
                modelValue: unref(tab),
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(tab) ? tab.value = $event : null)
              }, {
                default: withCtx(() => [
                  createVNode(QTabPanel, { name: "nav" }, {
                    default: withCtx(() => [
                      createVNode(QCard, null, {
                        default: withCtx(() => [
                          createVNode(QCardSection, null, {
                            default: withCtx(() => [
                              createVNode(_component_ag_grid_vue, {
                                class: "roles ag-theme-balham",
                                gridOptions: userrolesGrid,
                                rowData: unref(userroles),
                                xframeworkComponents: "frameworkComponents"
                              }, null, 8, ["rowData"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ]),
          createVNode(QDialog, {
            modelValue: unref(showDetail),
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(showDetail) ? showDetail.value = $event : null),
            persistent: ""
          }, {
            default: withCtx(() => [
              createVNode(QCard, { class: "detail" }, {
                default: withCtx(() => [
                  createVNode(QToolbar, { class: "bg-blue-8 text-white shadow" }, {
                    default: withCtx(() => [
                      withDirectives(createVNode(QToolbarTitle, null, null, 512), [
                        [_directive_t, "messages.LabelDetail"]
                      ]),
                      createVNode(QSeparator, {
                        spaced: "",
                        vertical: ""
                      }),
                      withDirectives((openBlock(), createBlock(QBtn, {
                        "no-caps": "",
                        size: "md",
                        color: "white",
                        "text-color": "black",
                        icon: "save_alt"
                      }, {
                        default: withCtx(() => [
                          createVNode(QTooltip, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("messages.ButtonSave")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [ClosePopup]
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createVNode(_component_ag_grid_vue, {
                        class: "grid ag-theme-balham",
                        gridOptions: userrolesDetailGrid,
                        rowData: unref(userdetails),
                        xframeworkComponents: "frameworkComponents"
                      }, null, 8, ["rowData"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      });
    };
  }
});
var UserRights = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-12eaca2f"], ["__file", "UserRights.vue"]]);
export { UserRights as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclJpZ2h0cy45YWRkNWMwNS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL1VzZXJSaWdodHMudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8cS1wYWdlIGNsYXNzPVwicS1wYS1zbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8cS10b29sYmFyIGNsYXNzPVwiYmctYmx1ZS04IHRleHQtd2hpdGUgc2hhZG93XCI+XG4gICAgICAgICAgICAgICAgPHEtYnRuIGZsYXQgcm91bmQgZGVuc2UgaWNvbj1cInZwbl9rZXlcIj48L3EtYnRuPlxuICAgICAgICAgICAgICAgIDxxLXRvb2xiYXItdGl0bGUgdi10PVwiJ21lc3NhZ2VzLkNvbFJvbGVzJ1wiPjwvcS10b29sYmFyLXRpdGxlPlxuICAgICAgICAgICAgPC9xLXRvb2xiYXI+XG5cbiAgICAgICAgICAgIDxOYXZCYXIgc3RhdGVOYW1lPVwidXNlcnJpZ2h0c1wiIDpzdGF0ZT1cInVzZXJyaWdodHNTdG9yZVwiIDpuYXZjbGFzcz1cInsgJ2NvbC00JzogMSwgJ2NvbC1sZy0zJzogMSB9XCIgOm5hdnNob3c9XCJ7IHNldHRpbmdzOiBmYWxzZSB9XCIgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHEtdG9vbGJhciBjbGFzcz1cImNvbC04IGNvbC1sZy05IGJnLWJsdWUtOCB0ZXh0LXdoaXRlIHNoYWRvd1wiPlxuICAgICAgICAgICAgICAgIDxxLXRhYnMgdi1tb2RlbD1cInRhYlwiIGFjdGl2ZS1iZy1jb2xvcj1cIndoaXRlXCIgYWN0aXZlLWNvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPHEtdGFiIG5hbWU9XCJuYXZcIiA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxSb2xlcycpXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxxLXRhYiBuYW1lPVwiZGJcIiA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxEYXRhYmFzZScpXCIgLz4tLT5cbiAgICAgICAgICAgICAgICA8L3EtdGFicz5cblxuICAgICAgICAgICAgICAgIDxxLXNwYWNlIC8+XG5cbiAgICAgICAgICAgICAgICA8cS1idG4gbm8tY2FwcyBzaXplPVwibWRcIiBjb2xvcj1cIndoaXRlXCIgdGV4dC1jb2xvcj1cImJsYWNrXCIgaWNvbj1cInNhdmVfYWx0XCIgQGNsaWNrPVwiZG9Sb2xlU2F2ZSgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxxLXRvb2x0aXA+e3sgJHQoJ21lc3NhZ2VzLkJ1dHRvblNhdmUnKSB9fTwvcS10b29sdGlwPlxuICAgICAgICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgICA8L3EtdG9vbGJhcj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNCBjb2wtbGctM1wiPlxuICAgICAgICAgICAgICAgIDxxLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGdyaWROYW1lPVwidXNlcnJpZ2h0R3JpZFwiIDpncmlkT3B0aW9ucz1cInVzZXJyaWdodEdyaWRcIiBzdGF0ZU5hbWU9XCJ1c2VycmlnaHRzXCIgOnN0YXRlPVwidXNlcnJpZ2h0c1N0b3JlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiIHYtdD1cIidtZXNzYWdlcy5Db2xSb2xlcydcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgICAgICA8cS1zZXBhcmF0b3IgLz5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxxLWZvcm0gQHN1Ym1pdD1cImRvU2F2ZVwiIGNsYXNzPVwicS1ndXR0ZXIteHNcIiByZWY9XCJ1c2VycmlnaHRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAtOTk5OXB4XCIvPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHEtY29sLWd1dHRlci1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJyaWdodFwiIHYtbW9kZWw9XCJmb3JtLnJpZ2h0XCIgbGF6eS1ydWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xOYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiZGVzY1wiIHYtbW9kZWw9XCJmb3JtLmRlc2NcIiBsYXp5LXJ1bGVzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xEZXNjJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWZvcm0+XG4gICAgICAgICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC04IGNvbC1sZy05XCI+XG4gICAgICAgICAgICAgICAgPHEtdGFiLXBhbmVscyB2LW1vZGVsPVwidGFiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxxLXRhYi1wYW5lbCBuYW1lPVwibmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1jYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFnLWdyaWQtdnVlIGNsYXNzPVwicm9sZXMgYWctdGhlbWUtYmFsaGFtXCIgOmdyaWRPcHRpb25zPVwidXNlcnJvbGVzR3JpZFwiIDpyb3dEYXRhPVwidXNlcnJvbGVzXCIgeGZyYW1ld29ya0NvbXBvbmVudHM9XCJmcmFtZXdvcmtDb21wb25lbnRzXCI+PC9hZy1ncmlkLXZ1ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDwvcS10YWItcGFuZWw+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08cS10YWItcGFuZWwgbmFtZT1cImRiXCI+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gICAgPHEtY2FyZD4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSAgICAgICAgPHEtY2FyZC1zZWN0aW9uPi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgPGFnLWdyaWQtdnVlIGNsYXNzPVwicm9sZXMgYWctdGhlbWUtYmFsaGFtXCIgOmdyaWRPcHRpb25zPVwidXNlcmRiR3JpZFwiIDpyb3dEYXRhPVwidXNlcmRiXCIgOmZyYW1ld29ya0NvbXBvbmVudHM9XCJmcmFtZXdvcmtDb21wb25lbnRzXCI+PC9hZy1ncmlkLXZ1ZT4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSAgICA8L3EtY2FyZD4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTwvcS10YWItcGFuZWw+LS0+XG4gICAgICAgICAgICAgICAgPC9xLXRhYi1wYW5lbHM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHEtZGlhbG9nIHYtbW9kZWw9XCJzaG93RGV0YWlsXCIgcGVyc2lzdGVudD5cbiAgICAgICAgICAgIDxxLWNhcmQgY2xhc3M9XCJkZXRhaWxcIj5cbiAgICAgICAgICAgICAgICA8cS10b29sYmFyIGNsYXNzPVwiYmctYmx1ZS04IHRleHQtd2hpdGUgc2hhZG93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxxLXRvb2xiYXItdGl0bGUgdi10PVwiJ21lc3NhZ2VzLkxhYmVsRGV0YWlsJ1wiPjwvcS10b29sYmFyLXRpdGxlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxxLXNlcGFyYXRvciBzcGFjZWQgdmVydGljYWwgLz5cblxuICAgICAgICAgICAgICAgICAgICA8cS1idG4gbm8tY2FwcyBzaXplPVwibWRcIiBjb2xvcj1cIndoaXRlXCIgdGV4dC1jb2xvcj1cImJsYWNrXCIgaWNvbj1cInNhdmVfYWx0XCIgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRvb2x0aXA+e3sgJHQoJ21lc3NhZ2VzLkJ1dHRvblNhdmUnKSB9fTwvcS10b29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgICAgICAgIDwvcS10b29sYmFyPlxuXG4gICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8YWctZ3JpZC12dWUgY2xhc3M9XCJncmlkIGFnLXRoZW1lLWJhbGhhbVwiIDpncmlkT3B0aW9ucz1cInVzZXJyb2xlc0RldGFpbEdyaWRcIiA6cm93RGF0YT1cInVzZXJkZXRhaWxzXCIgeGZyYW1ld29ya0NvbXBvbmVudHM9XCJmcmFtZXdvcmtDb21wb25lbnRzXCI+PC9hZy1ncmlkLXZ1ZT5cbiAgICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgIDwvcS1kaWFsb2c+XG4gICAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IEdsb2JhbFZpZXcgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbW1vbi9oZWxwZXJzL0dsb2JhbFZpZXcnO1xuaW1wb3J0IE5hdkJhciAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2QmFyLnZ1ZSc7IFxuaW1wb3J0IEdyaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL0dyaWQudnVlJztcbmltcG9ydCBHcmlkQnV0dG9uICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21wb25lbnRzL0dyaWRCdXR0b24nOyBcbmltcG9ydCBHcmlkQ2hlY2tib3ggICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21wb25lbnRzL0dyaWRDaGVja2JveCc7XG5cbmltcG9ydCBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgdXNlSTE4biB9ICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3Z1ZS1pMThuJztcblxuaW1wb3J0IHsgdXNlQWNjb3VudFN0b3JlIH0gICAgICAgICAgICAgIGZyb20gJ3NyYy9zdG9yZXMvYWNjb3VudC5zdG9yZSc7XG5cbmltcG9ydCBkZWJ1ZyAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdkZWJ1Zyc7XG5jb25zdCBsb2cgICAgICAgICA9IGRlYnVnKCdhcHA6dXNlcnJpZ2h0cycpO1xuXG5jb25zdCB7IHQgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB1c2VJMThuKCk7XG5cbmNvbnN0IGluaXQgICAgICAgID0geyBcbiAgICBjb2xsTmFtZTogICAgICAgJ3VzZXJyaWdodHMnLCBcbiAgICBzdGF0ZU5hbWU6ICAgICAgJ3VzZXJyaWdodHMnXG59O1xuY29uc3QgZ2xvYmFsVmlldyAgPSBHbG9iYWxWaWV3KCBpbml0ICk7XG5jb25zdCB7IFxuICAgIHN0b3JlOiAgICAgICAgICB1c2VycmlnaHRzU3RvcmUsIFxuICAgIGRhdGE6ICAgICAgICAgICB1c2VycmlnaHRzLCBcbiAgICBkb1NhdmUsXG4gICAgZm9ybSBcbn0gID0gZ2xvYmFsVmlldztcblxuY29uc3QgYWNjb3VudFN0b3JlICAgICAgICAgICAgICAgICA9IHVzZUFjY291bnRTdG9yZSgpO1xuXG5jb25zdCB7IHVzZXIgfSAgPSBzdG9yZVRvUmVmcyggYWNjb3VudFN0b3JlICk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuY29uc3Qgcm9vdCAgICAgID0gdGhpcztcblxuY29uc3QgdXNlcnJpZ2h0R3JpZCAgICAgICAgICAgICAgPSByZWYoe30pO1xuXG5jb25zdCBzaG93RGV0YWlsICAgID0gcmVmKGZhbHNlKSxcbiAgICAgICAgZXJyb3JzICAgICAgICA9IHJlZihudWxsKSxcbiAgICAgICAgdGFiICAgICAgICAgICA9IHJlZignbmF2JyksXG4gICAgICAgIHVzZXJyb2xlcyAgICAgPSByZWYoW10pLFxuICAgICAgICB1c2VyZGV0YWlscyAgID0gcmVmKFtdKSxcbiAgICAgICAgdXNlcmRiICAgICAgICA9IHJlZihbXSk7XG5cbmNvbnN0IHVzZXJyb2xlc0dyaWQgID0ge1xuICAgICAgICB0cmVlRGF0YTogICAgICAgICAgIHRydWUsXG4gICAgICAgIGdyb3VwRGVmYXVsdEV4cGFuZGVkOiAtMSxcbiAgICAgICAgZ2V0RGF0YVBhdGgoIGRhdGE6IGFueSApIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLnBhdGg7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFJvd05vZGVJZCggZGF0YSApIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmxpbms7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbHVtbkRlZnM6ICAgICAgICAgW1xuICAgICAgICAgICAgeyBmaWVsZDogJ2RldGFpbHMnLCB3aWR0aDogMTAwLCBjZWxsQ2xhc3M6ICdjZWxsQ2VudGVyJywgY2VsbFJlbmRlcmVyOiAnYnV0dG9uUmVuZGVyZXInLCBwaW5uZWQ6ICdsZWZ0JyB9XG4gICAgICAgIF0sXG4gICAgICAgIGF1dG9Hcm91cENvbHVtbkRlZjoge1xuICAgICAgICAgICAgaGVhZGVyTmFtZTogICAgICAgICAnJyxcbiAgICAgICAgICAgIHdpZHRoOiAgICAgICAgICAgICAgMzAwLFxuICAgICAgICAgICAgcGlubmVkOiAgICAgICAgICAgICAnbGVmdCcsXG4gICAgICAgICAgICBjZWxsUmVuZGVyZXJQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBzdXBwcmVzc0NvdW50OiAgICAgIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2luZ2xlQ2xpY2tFZGl0OiAgICB0cnVlLFxuICAgICAgICByb3dEYXRhOiAgICAgICAgICAgIG51bGwsXG4gICAgICAgIGNvbnRleHQ6ICAgICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogICAgICAgICAgICAgICAgICAgJ3JlY2h0ZScsXG4gICAgICAgICAgICBjb21wb25lbnRQYXJlbnQ6ICAgICAgICByb290LFxuICAgICAgICAgICAgc2V0VmFsdWVcbiAgICAgICAgfVxuICAgIH07XG5cbmNvbnN0IHVzZXJyb2xlc0RldGFpbEdyaWQgICAgPSB7XG4gICAgICAgIGNvbHVtbkRlZnM6ICAgICAgICAgW10sXG4gICAgICAgIHNpbmdsZUNsaWNrRWRpdDogICAgdHJ1ZSxcbiAgICAgICAgcm93RGF0YTogICAgICAgICAgICBudWxsLFxuICAgICAgICBjb250ZXh0OiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICAgICAgICAgICAgICAgICAgICdkZXRhaWxzJyxcbiAgICAgICAgICAgIGNvbXBvbmVudFBhcmVudDogICAgICAgIHJvb3QsXG4gICAgICAgICAgICBzZXRWYWx1ZVxuICAgICAgICB9XG4gICAgfTtcblxuY29uc3QgdXNlcmRiR3JpZCAgPSB7XG4gICAgICAgIHRyZWVEYXRhOiAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgZ3JvdXBEZWZhdWx0RXhwYW5kZWQ6IC0xLFxuICAgICAgICBnZXREYXRhUGF0aCggZGF0YTogYW55ICkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEucGF0aDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Um93Tm9kZUlkKCBkYXRhICkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEubGluaztcbiAgICAgICAgfSxcbiAgICAgICAgY29sdW1uRGVmczogICAgICAgICBbXG4gICAgICAgICAgICB7IGZpZWxkOiAnZGV0YWlscycsIHdpZHRoOiAxMDAsIGNlbGxDbGFzczogJ2NlbGxDZW50ZXInLCBjZWxsUmVuZGVyZXI6ICdidXR0b25SZW5kZXJlcicsIHBpbm5lZDogJ2xlZnQnIH1cbiAgICAgICAgXSxcbiAgICAgICAgYXV0b0dyb3VwQ29sdW1uRGVmOiB7XG4gICAgICAgICAgICBoZWFkZXJOYW1lOiAgICAgICAgICcnLFxuICAgICAgICAgICAgd2lkdGg6ICAgICAgICAgICAgICAzMDAsXG4gICAgICAgICAgICBwaW5uZWQ6ICAgICAgICAgICAgICdsZWZ0JyxcbiAgICAgICAgICAgIGNlbGxSZW5kZXJlclBhcmFtczoge1xuICAgICAgICAgICAgICAgIHN1cHByZXNzQ291bnQ6ICAgICAgdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzaW5nbGVDbGlja0VkaXQ6ICAgIHRydWUsXG4gICAgICAgIG9uR3JpZFJlYWR5OiAgICAgICAgdXNlcmRiR3JpZFJlYWR5LFxuICAgICAgICByb3dEYXRhOiAgICAgICAgICAgIG51bGwsXG4gICAgICAgIGNvbnRleHQ6ICAgICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogICAgICAgICAgICAgICAgICAgJ3JlY2h0ZScsXG4gICAgICAgICAgICBjb21wb25lbnRQYXJlbnQ6ICAgICAgICByb290LFxuICAgICAgICAgICAgc2V0VmFsdWVcbiAgICAgICAgfVxuICAgIH07XG5cbmZ1bmN0aW9uIGNoYW5nZVJvbGUoIHJpZ2h0LCBsaW5rICkge1xuICAgIGxvZyggJ2NsaWNrJywgcmlnaHQsIGxpbmsgKTtcbn1cblxuLy8gaW5pdGlhdGUgdXNlciBncmlkc1xuYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcnJvbGVzKCBkYXRhOiBhbnkgKSB7XG4gICAgY29uc3Qgcm93RGF0YTogYW55W10gICAgID0gW107XG4gICAgXG4gICAgbG9nKCAnZ2V0dXNlcnJvbGVzJywgZGF0YSApO1xuXG4gICAgZnVuY3Rpb24gbmF2KCBlbG0sIHBhdGggKSB7XG4gICAgICAgIGNvbnN0IG5ld1BhdGggPSBbIC4uLnBhdGgsIGVsbS5uYW1lIF07XG4gICAgICAgIGVsbS5wYXRoICAgID0gbmV3UGF0aDtcblxuICAgICAgICBpZiAoIWVsbS5yZWNodGUpXG4gICAgICAgICAgICBlbG0ucmVjaHRlICAgICAgPSB7fTtcblxuICAgICAgICBmb3IgKGNvbnN0IHJvbGUgb2YgZGF0YSApIHtcbiAgICAgICAgICAgIGVsbS5yZWNodGVbIHJvbGUucmlnaHQgXSAgID0gKCByb2xlLnJlY2h0ZSAmJiByb2xlLnJlY2h0ZVsgZWxtLmxpbmsgXSApIHx8IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcm93RGF0YS5wdXNoKCBlbG0gKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChlbG0uY29sbGFwc2VkKSB7XG4gICAgICAgICAgICBfLmZvckVhY2goIGVsbS5jb2xsYXBzZWQsIChyZWMpID0+IHtcbiAgICAgICAgICAgICAgICBuYXYoIHJlYywgbmV3UGF0aCApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnZXQgbmF2XG4gICAgY29uc3QgcmVzcCAgICAgICAgPSBhd2FpdCBheGlvcy5nZXQoICcvY3VzdG9tL3NpZGVOYXYvYWxsJyApLFxuICAgICAgICBjb2x1bW5EZWZzICAgICAgICAgID0gW1xuICAgICAgICAgICAgeyBmaWVsZDogJ2dydXBwZScsIGhlYWRlck5hbWU6ICcnLCB3aWR0aDogMTAwLCBwaW5uZWQ6ICdsZWZ0JyB9LFxuICAgICAgICAgICAgeyBmaWVsZDogJ2Rlc2MnLCBoZWFkZXJOYW1lOiAnJywgd2lkdGg6IDIwMCwgcGlubmVkOiAnbGVmdCcgfVxuICAgICAgICBdO1xuXG4gICAgZm9yKCBjb25zdCByb2xlIG9mIF8uc29ydEJ5KCBkYXRhLCAnZGVzYycgKSApIHtcbiAgICAgICAgXG4gICAgICAgIGlmICghcm9sZS5yZWNodGUpXG4gICAgICAgICAgICByb2xlLnJlY2h0ZSAgICAgPSB7fTtcbiAgICAgICAgICAgIFxuICAgICAgICB1c2Vycm9sZXNHcmlkLmNvbHVtbkRlZnMucHVzaCh7XG4gICAgICAgICAgICBmaWVsZDogICAgICAgICAgICAgIGByZWNodGUuJHtyb2xlLnJpZ2h0fWAsXG4gICAgICAgICAgICBuYW1lOiAgICAgICAgICAgICAgIHJvbGUucmlnaHQsXG4gICAgICAgICAgICBoZWFkZXJOYW1lOiAgICAgICAgIHJvbGUuZGVzYyxcbiAgICAgICAgICAgIHdpZHRoOiAgICAgICAgICAgICAgMTAwLFxuICAgICAgICAgICAgY2VsbENsYXNzOiAgICAgICAgICAnY2VsbENlbnRlcicsXG4gICAgICAgICAgICBjZWxsUmVuZGVyZXI6ICAgICAgICdjaGVja2JveFJlbmRlcmVyJ1xuICAgICAgICB9KTtcblxuICAgICAgICBjb2x1bW5EZWZzLnB1c2goe1xuICAgICAgICAgICAgZmllbGQ6ICAgICAgICAgIGBkZXRhaWxzLiR7cm9sZS5yaWdodH1gLFxuICAgICAgICAgICAgbmFtZTogICAgICAgICAgIHJvbGUucmlnaHQsXG4gICAgICAgICAgICBoZWFkZXJOYW1lOiAgICAgcm9sZS5kZXNjLFxuICAgICAgICAgICAgd2lkdGg6ICAgICAgICAgIDEwMCxcbiAgICAgICAgICAgIGNlbGxDbGFzczogICAgICAnY2VsbENlbnRlcicsXG4gICAgICAgICAgICBjZWxsUmVuZGVyZXI6ICAgJ2NoZWNrYm94UmVuZGVyZXInXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdXNlcmRiR3JpZC5jb2x1bW5EZWZzLnB1c2goe1xuICAgICAgICAgICAgZmllbGQ6ICAgICAgICAgICAgICBgcmVjaHRlLiR7cm9sZS5yaWdodH1gLFxuICAgICAgICAgICAgbmFtZTogICAgICAgICAgICAgICByb2xlLnJpZ2h0LFxuICAgICAgICAgICAgaGVhZGVyTmFtZTogICAgICAgICByb2xlLmRlc2MsXG4gICAgICAgICAgICB3aWR0aDogICAgICAgICAgICAgIDEwMCxcbiAgICAgICAgICAgIGNlbGxDbGFzczogICAgICAgICAgJ2NlbGxDZW50ZXInLFxuICAgICAgICAgICAgY2VsbFJlbmRlcmVyOiAgICAgICAnY2hlY2tib3hSZW5kZXJlcidcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIF8uZm9yRWFjaCggcmVzcC5kYXRhLCAoIHJvdyApID0+IHtcbiAgICAgICAgbmF2KCByb3csIFtdICk7XG4gICAgfSk7XG4gICAgXG4gICAgbG9nKCAncm93ZGF0YScsIHVzZXJyb2xlc0dyaWQsIHJvd0RhdGEsIHJlc3AuZGF0YSApO1xuICAgIHVzZXJyb2xlc0dyaWQuYXBpLnNldENvbHVtbkRlZnMoIHVzZXJyb2xlc0dyaWQuY29sdW1uRGVmcyApO1xuICAgIFxuICAgIC8vIHNldCBjb2x1bW5kZWZzIGZvciBkZXRhaWwgZ3JpZFxuICAgIHVzZXJyb2xlc0RldGFpbEdyaWQuY29sdW1uRGVmcyAgICAgPSBjb2x1bW5EZWZzO1xuXG4gICAgdXNlcnJvbGVzLnZhbHVlICAgICAgPSByb3dEYXRhO1xufVxuXG5mdW5jdGlvbiB1c2VyZGJHcmlkUmVhZHkoKSB7XG4gICAgLy8gc2V0IGNvbHVtbmRlZnMgZm9yIGRiIGdyaWRcbiAgICB1c2VyZGJHcmlkLmFwaS5zZXRDb2x1bW5EZWZzKCB1c2VyZGJHcmlkLmNvbHVtbkRlZnMgKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2hvd0VkaXQoIHBhcmFtcyApIHtcbiAgICBsb2coICdzaG93RWRpdCcsIHBhcmFtcyApOyBcblxuICAgIC8vIGdldCBuYXZcbiAgICBjb25zdCByZXNwICAgICAgICA9IGF3YWl0IGF4aW9zLmdldCggYC9tb2RlbC9yaWdodHMvJHtwYXJhbXMubGlua30uanNvbmAgKTtcbiAgICBcbiAgICB1c2VyZGV0YWlscy52YWx1ZSAgICAgICAgID0gKHJlc3AuZGF0YSAmJiByZXNwLmRhdGEuc3VibWVudSk7XG5cbiAgICAvLyBubyBkZXRhaWxzIC0+IG5vdGhpbmcgdG8gc2hvd1xuICAgIGlmICghdXNlcmRldGFpbHMudmFsdWUpXG4gICAgICAgIHJldHVybjtcblxuICAgIC8vIHNldCBsaW5rIGluIGNvbnRleHRcbiAgICB1c2Vycm9sZXNEZXRhaWxHcmlkLmNvbnRleHQubGluayAgICAgICA9IHBhcmFtcy5saW5rO1xuXG4gICAgc2hvd0RldGFpbC52YWx1ZSAgICAgICAgID0gdHJ1ZTtcblxuICAgIGZvciAoY29uc3QgZGV0YWlsIG9mIHVzZXJkZXRhaWxzLnZhbHVlcykge1xuICAgICAgICBkZXRhaWwuZGVzYyAgICAgPSB0KCBgbWVzc2FnZXMuJHtkZXRhaWwubmFtZX1gICk7XG4gICAgICAgIGRldGFpbC5ncnVwcGUgICA9IHQoIGBtZXNzYWdlcy5Hcm91cCR7ZGV0YWlsLmdyb3VwIHx8ICcnfWAgKTtcbiAgICAgICAgXG4gICAgICAgIGRldGFpbC5kZXRhaWxzICAgICAgPSB7fTtcblxuICAgICAgICBmb3IgKGNvbnN0IHJvbGUgb2YgdXNlcnJpZ2h0cy52YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHJvbGUuZGV0YWlscyAmJiByb2xlLmRldGFpbHNbIHBhcmFtcy5saW5rIF0pICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkZXRhaWwuZGV0YWlsc1sgcm9sZS5yaWdodCBdICAgID0gcm9sZS5kZXRhaWxzWyBwYXJhbXMubGluayBdWyBkZXRhaWwubGluayBdIHx8IGZhbHNlO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGRldGFpbC5kZXRhaWxzWyByb2xlLnJpZ2h0IF0gICAgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gc2V0IHN3aXRjaCBpbiB1c2VycmlnaHRcbmZ1bmN0aW9uIHNldFZhbHVlKCB0eXBlOiBzdHJpbmcsIHByb2c6IHN0cmluZywgcm9sZTogc3RyaW5nLCBsaW5rOiBzdHJpbmcsIHZhbHVlOiBhbnkgKSB7XG4gICAgbG9nKCAnc2V0dmFsdWUnLCB0eXBlLCByb2xlLCBsaW5rLCB2YWx1ZSApO1xuICAgIFxuICAgIC8vIGdldCByb2xlXG4gICAgY29uc3QgdXNlcnJvbGUgICAgPSBfLmZpbmQoIHVzZXJyaWdodHMudmFsdWUsIChlbG0pID0+IGVsbS5yaWdodCA9PT0gcm9sZSk7XG5cbiAgICAvLyBjaGVjayBzdWJwYXJ0IG9mIHJvbGVcbiAgICBpZiAoIXVzZXJyb2xlWyB0eXBlIF0pXG4gICAgICAgIHVzZXJyb2xlWyB0eXBlIF0gICAgID0ge307XG5cbiAgICAvLyBzZXQgdmFsdWUgaW4gc3VicGFydFxuICAgIGlmICh0eXBlID09PSAncmVjaHRlJylcbiAgICAgICAgdXNlcnJvbGVbIHR5cGUgXVsgbGluayBdICAgICA9IHZhbHVlO1xuICAgIGVsc2Uge1xuICAgICAgICBpZiAoIXVzZXJyb2xlWyB0eXBlIF1bIHByb2cgXSlcbiAgICAgICAgICAgIHVzZXJyb2xlWyB0eXBlIF1bIHByb2cgXSAgICAgPSB7fTtcbiAgICAgICAgdXNlcnJvbGVbIHR5cGUgXVsgcHJvZyBdWyBsaW5rIF0gICAgID0gdmFsdWU7XG4gICAgfVxufVxuXG4vLyBzYXZlIHVzZXJyaWdodHNcbmFzeW5jIGZ1bmN0aW9uIGRvUm9sZVNhdmUoKSB7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gc2F2ZSBhbGwgcm9sZXNcbiAgICAgICAgZm9yICggY29uc3Qgcm9sZSBvZiB1c2VycmlnaHRzLnZhbHVlICkge1xuICAgICAgICAgICAgbG9nKCAnc2F2ZScsIHJvbGUgKTtcbiAgICAgICAgICAgIGF3YWl0IHVzZXJyaWdodHNTdG9yZS51cGRhdGUoIHsgYm9keTogcm9sZSwgbm9Nc2c6IHRydWUgfSApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBOb3RpZnkuY3JlYXRlKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICAgICAgICB0KCdtZXNzYWdlcy5UZXh0UmVjU2F2ZWQnKSxcbiAgICAgICAgICAgIGNvbG9yOiAgICAgICAgICAnZ3JlZW4tOScsXG4gICAgICAgICAgICBpY29uOiAgICAgICAgICAgJ2RvbmUnLFxuICAgICAgICAgICAgcG9zaXRpb246ICAgICAgICd0b3AtcmlnaHQnLFxuICAgICAgICAgICAgdGltZW91dDogICAgICAgIDEwMDBcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBjYXRjaCggZXJyb3IgKSB7XG4gICAgICAgIGxvZyggJ0Vycm9yJywgZXJyb3IgKTtcbiAgICB9XG59XG5cbm9uTW91bnRlZCggKCkgPT4ge1xuICAgIC8vIGNoZWNrIGZvciB1c2VycmlnaHRzIHZhbHVlXG4gICAgLy8gZ2V0VXNlcnJvbGVzKCBzdG9yZS52YWx1ZS5zdGF0ZVsgZGF0YUlkIF0gKTtcbn0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgXCIuLi9fdmFyaWFibGVzLnNjc3NcIjtcblxuLmdyaWQge1xuICAgIGhlaWdodDogICAgICAgIDQwMHB4O1xuICAgIHdpZHRoOiAgICAgICAgIDEwMCU7XG59XG5cbi5yb2xlcyB7XG4gICAgaGVpZ2h0OiAgICAgICAgIGNhbGMoIDEwMHZoIC0gI3skaGVhZGVyX2hlaWdodH0gLSAxNzBweCApO1xuICAgIHdpZHRoOiAgICAgICAgIDEwMCU7XG59XG5cbi5kZXRhaWwge1xuICAgIHdpZHRoOiAgICAgICAgIGNhbGMoIDEwMHZoIC0gMjUwcHggKTtcbiAgICBtYXgtd2lkdGg6ICAgICAxOTIwcHg7XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbImdsb2JhbFZpZXciLCJHbG9iYWxWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4R0EsVUFBQSxNQUFBLE1BQUEsZ0JBQUE7QUFFQSxVQUFBLEVBQUEsTUFBQTtBQUVBLFVBQUEsT0FBQTtBQUFBLE1BQW9CLFVBQUE7QUFBQSxNQUNBLFdBQUE7QUFBQSxJQUNBO0FBRXBCLFVBQUFBLGVBQUFDLFdBQUEsSUFBQTtBQUNBLFVBQUE7QUFBQSxNQUFNLE9BQUE7QUFBQSxNQUNjLE1BQUE7QUFBQSxNQUNBO0FBQUEsTUFDaEI7QUFBQSxJQUNBLElBQUFEO0FBR0osVUFBQSxlQUFBO0FBRUEsZ0JBQUEsWUFBQTtBQUdBLFVBQUEsT0FBQTtBQUVBLFVBQUEsZ0JBQUEsSUFBQSxDQUFBLENBQUE7QUFFQSxVQUFBLGFBQUEsSUFBQSxLQUFBO0FBQUEsUUFBQSxJQUFBO0FBQUEsVUFBQSxNQUFBLElBQUEsS0FBQSxHQUFBLFlBQUEsSUFBQSxDQUFBLENBQUEsR0FBQSxjQUFBLElBQUEsRUFBQTtBQUFBLFFBQUEsRUFBQTtBQU9BLFVBQUEsZ0JBQUE7QUFBQSxNQUF1QixVQUFBO0FBQUEsTUFDSyxzQkFBQTtBQUFBLE1BQ0UsWUFBQSxNQUFBO0FBRWxCLGVBQUEsS0FBQTtBQUFBLE1BQVk7QUFBQSxNQUNoQixhQUFBLE1BQUE7QUFFSSxlQUFBLEtBQUE7QUFBQSxNQUFZO0FBQUEsTUFDaEIsWUFBQTtBQUFBLFFBQ29CLEVBQUEsT0FBQSxXQUFBLE9BQUEsS0FBQSxXQUFBLGNBQUEsY0FBQSxrQkFBQSxRQUFBLE9BQUE7QUFBQSxNQUN3RjtBQUFBLE1BQzVHLG9CQUFBO0FBQUEsUUFDb0IsWUFBQTtBQUFBLFFBQ0ksT0FBQTtBQUFBLFFBQ0EsUUFBQTtBQUFBLFFBQ0Esb0JBQUE7QUFBQSxVQUNBLGVBQUE7QUFBQSxRQUNJO0FBQUEsTUFDeEI7QUFBQSxNQUNKLGlCQUFBO0FBQUEsTUFDb0IsU0FBQTtBQUFBLE1BQ0EsU0FBQTtBQUFBLFFBQ0EsTUFBQTtBQUFBLFFBQ1EsaUJBQUE7QUFBQSxRQUNBO0FBQUEsTUFDeEI7QUFBQSxJQUNKO0FBR1IsVUFBQSxzQkFBQTtBQUFBLE1BQStCLFlBQUEsQ0FBQTtBQUFBLE1BQ0YsaUJBQUE7QUFBQSxNQUNELFNBQUE7QUFBQSxNQUNBLFNBQUE7QUFBQSxRQUNBLE1BQUE7QUFBQSxRQUNRLGlCQUFBO0FBQUEsUUFDQTtBQUFBLE1BQ3hCO0FBQUEsSUFDSjtBQTBKUixhQUFBLFNBQUEsTUFBQSxNQUFBLE1BQUEsTUFBQSxPQUFBO0FBQ0ksVUFBQSxZQUFBLE1BQUEsTUFBQSxNQUFBLEtBQUE7QUFHQSxZQUFBLFdBQUEsRUFBQSxLQUFBLFdBQUEsT0FBQSxDQUFBLFFBQUEsSUFBQSxVQUFBLElBQUE7QUFHQSxVQUFBLENBQUEsU0FBQTtBQUNJLGlCQUFBLFFBQUE7QUFHSixVQUFBLFNBQUE7QUFDSSxpQkFBQSxNQUFBLFFBQUE7QUFBQSxXQUErQjtBQUUvQixZQUFBLENBQUEsU0FBQSxNQUFBO0FBQ0ksbUJBQUEsTUFBQSxRQUFBLENBQUE7QUFDSixpQkFBQSxNQUFBLE1BQUEsUUFBQTtBQUFBLE1BQXVDO0FBQUEsSUFDM0M7QUFJSixtQkFBQSxhQUFBO0FBRUksVUFBQTtBQUVJLG1CQUFBLFFBQUEsV0FBQSxPQUFBO0FBQ0ksY0FBQSxRQUFBLElBQUE7QUFDQSxnQkFBQSxnQkFBQSxPQUFBLEVBQUEsTUFBQSxNQUFBLE9BQUEsS0FBQSxDQUFBO0FBQUEsUUFBMEQ7QUFHOUQsZUFBQSxPQUFBO0FBQUEsVUFBYyxTQUFBLEVBQUEsdUJBQUE7QUFBQSxVQUMrQixPQUFBO0FBQUEsVUFDekIsTUFBQTtBQUFBLFVBQ0EsVUFBQTtBQUFBLFVBQ0EsU0FBQTtBQUFBLFFBQ0EsQ0FBQTtBQUFBLE1BQ25CLFNBQUEsT0FBQTtBQUlELFlBQUEsU0FBQSxLQUFBO0FBQUEsTUFBb0I7QUFBQSxJQUN4QjtBQUdKLGNBQUEsTUFBQTtBQUFBLElBQWlCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
