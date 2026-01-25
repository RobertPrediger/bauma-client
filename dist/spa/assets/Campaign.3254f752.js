import { _ as _export_sfc, e as defineComponent, l as debug, n as ref, aL as onMounted, q as openBlock, s as createBlock, w as withCtx, f as createVNode, G as unref, D as QCardSection, x as QSeparator, E as createBaseVNode, A as toDisplayString, F as QInput, $ as QList, a2 as createElementBlock, a3 as renderList, a4 as Fragment, a0 as QItem, a1 as QItemSection, v as createTextVNode, U as QCard, C as QPage, a as axios, a6 as QItemLabel } from "./index.8f8ca0f3.js";
import { Q as QTabs, a as QTab, b as QTabPanels, c as QTabPanel } from "./QTabPanels.46aa2434.js";
import { Q as QForm } from "./QForm.8c81555c.js";
import { g as globalView, N as NavBar } from "./NavBar.eb70e4d5.js";
import { G as Grid } from "./Grid.b4814aca.js";
import "./rtl.b51694b1.js";
import "./AgGridVue.c15bd737.js";
var Campaign_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("input", {
  type: "submit",
  style: { "position": "absolute", "left": "-9999px" }
}, null, -1);
const _hoisted_2 = { class: "text-h6" };
const _hoisted_3 = { class: "row q-col-gutter-md" };
const _hoisted_4 = { class: "col-4" };
const _hoisted_5 = { class: "row q-col-gutter-md" };
const _hoisted_6 = { class: "col-6" };
const _hoisted_7 = { class: "col-6" };
const _hoisted_8 = { class: "row q-col-gutter-md" };
const _hoisted_9 = { class: "col-3" };
const _hoisted_10 = { class: "col-9" };
const _hoisted_11 = { class: "col-8" };
const _hoisted_12 = { class: "row q-col-gutter-md" };
const _hoisted_13 = { class: "col-6" };
const _hoisted_14 = { class: "col-6" };
const _sfc_main = defineComponent({
  __name: "Campaign",
  setup(__props) {
    const log = debug("app:customer");
    const init = {
      collName: "customer",
      stateName: "customer"
    };
    const globalView$1 = globalView(init);
    const {
      store: customerStore,
      data: customer,
      doSave,
      form
    } = globalView$1;
    const customerGrid = ref({});
    const leads = ref([]);
    const lead = ref({});
    async function afterSelect(selectedRows) {
      const rows = await axios.post("/custom/getLeadOfCust", selectedRows);
      log("selectRow", rows);
      leads.value = rows.data;
      lead.value = { fahrzeug: {} };
    }
    function selectLead(item) {
      lead.value = item;
    }
    onMounted(() => {
      customerStore.registerAction({ action: "afterSelect", target: "Contact", func: afterSelect });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "q-pa-sm" }, {
        default: withCtx(() => [
          createVNode(NavBar, {
            title: _ctx.$t("messages.LabelCustomer"),
            icon: "dashboard",
            stateName: "customer",
            funcs: _ctx.navbarSubmenu,
            state: unref(customerStore)
          }, null, 8, ["title", "funcs", "state"]),
          createVNode(QCard, null, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createVNode(Grid, {
                    gridName: "customerGrid",
                    gridOptions: unref(customerGrid),
                    stateName: "customer",
                    state: unref(customerStore)
                  }, null, 8, ["gridOptions", "state"])
                ]),
                _: 1
              }),
              createVNode(QSeparator),
              createVNode(QForm, {
                onSubmit: unref(doSave),
                class: "q-gutter-xs",
                ref: "refCustomer"
              }, {
                default: withCtx(() => [
                  _hoisted_1,
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("messages.LabelCustomer")), 1),
                      createBaseVNode("div", _hoisted_3, [
                        createBaseVNode("div", _hoisted_4, [
                          createBaseVNode("div", _hoisted_5, [
                            createBaseVNode("div", _hoisted_6, [
                              createVNode(QInput, {
                                name: "salutation",
                                modelValue: unref(form).salutation,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).salutation = $event),
                                "lazy-rules": "",
                                dense: true,
                                label: _ctx.$t("messages.LabelSalutation")
                              }, null, 8, ["modelValue", "label"])
                            ]),
                            createBaseVNode("div", _hoisted_7, [
                              createVNode(QInput, {
                                name: "title",
                                modelValue: unref(form).title,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).title = $event),
                                "lazy-rules": "",
                                dense: true,
                                label: _ctx.$t("messages.LabelTitle")
                              }, null, 8, ["modelValue", "label"])
                            ])
                          ]),
                          createVNode(QInput, {
                            name: "firstName",
                            modelValue: unref(form).firstName,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).firstName = $event),
                            "lazy-rules": "",
                            dense: true,
                            label: _ctx.$t("messages.ColFirstname")
                          }, null, 8, ["modelValue", "label"]),
                          createVNode(QInput, {
                            name: "surName",
                            modelValue: unref(form).surName,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).surName = $event),
                            "lazy-rules": "",
                            dense: true,
                            label: _ctx.$t("messages.ColSurname")
                          }, null, 8, ["modelValue", "label"]),
                          createVNode(QInput, {
                            name: "email",
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(form).email = $event),
                            "lazy-rules": "",
                            dense: true,
                            label: _ctx.$t("messages.ColMail")
                          }, null, 8, ["modelValue", "label"]),
                          createVNode(QInput, {
                            name: "telefon",
                            modelValue: unref(form).telefon,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(form).telefon = $event),
                            "lazy-rules": "",
                            dense: true,
                            label: _ctx.$t("messages.ColPhone")
                          }, null, 8, ["modelValue", "label"]),
                          createVNode(QInput, {
                            name: "street",
                            modelValue: unref(form).street,
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(form).street = $event),
                            "lazy-rules": "",
                            dense: true,
                            label: _ctx.$t("messages.ColStreet")
                          }, null, 8, ["modelValue", "label"]),
                          createBaseVNode("div", _hoisted_8, [
                            createBaseVNode("div", _hoisted_9, [
                              createVNode(QInput, {
                                name: "zip",
                                modelValue: unref(form).zip,
                                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(form).zip = $event),
                                "lazy-rules": "",
                                dense: true,
                                label: _ctx.$t("messages.ColZip")
                              }, null, 8, ["modelValue", "label"])
                            ]),
                            createBaseVNode("div", _hoisted_10, [
                              createVNode(QInput, {
                                name: "city",
                                modelValue: unref(form).city,
                                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(form).city = $event),
                                "lazy-rules": "",
                                dense: true,
                                label: _ctx.$t("messages.ColCity")
                              }, null, 8, ["modelValue", "label"])
                            ])
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_11, [
                          createVNode(QTabs, {
                            modelValue: _ctx.tab,
                            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.tab = $event),
                            class: "text-teal",
                            align: "left",
                            dense: true
                          }, {
                            default: withCtx(() => [
                              createVNode(QTab, {
                                label: _ctx.$t("messages.LabelGeneral"),
                                name: "general"
                              }, null, 8, ["label"]),
                              createVNode(QTab, {
                                label: _ctx.$t("messages.LabelLead"),
                                name: "lead"
                              }, null, 8, ["label"])
                            ]),
                            _: 1
                          }, 8, ["modelValue"]),
                          createVNode(QTabPanels, {
                            modelValue: _ctx.tab,
                            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => _ctx.tab = $event)
                          }, {
                            default: withCtx(() => [
                              createVNode(QTabPanel, { name: "general" }, {
                                default: withCtx(() => [
                                  createVNode(QInput, {
                                    name: "city",
                                    modelValue: unref(form).dateFirst,
                                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(form).dateFirst = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.LabelDateFirst"),
                                    disable: ""
                                  }, null, 8, ["modelValue", "label"]),
                                  createVNode(QInput, {
                                    name: "city",
                                    modelValue: unref(form).dateLast,
                                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(form).dateLast = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.LabelDateLast"),
                                    disable: ""
                                  }, null, 8, ["modelValue", "label"])
                                ]),
                                _: 1
                              }),
                              createVNode(QTabPanel, { name: "lead" }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_12, [
                                    createBaseVNode("div", _hoisted_13, [
                                      createVNode(QList, {
                                        bordered: "",
                                        separator: "",
                                        dense: true
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(leads), (item) => {
                                            return openBlock(), createBlock(QItem, {
                                              clickable: "",
                                              ripple: "",
                                              key: item._id,
                                              click: selectLead(item)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(QItemSection, null, {
                                                  default: withCtx(() => [
                                                    createVNode(QItemLabel, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.fahrzeug.model) + " (" + toDisplayString(item.gfz) + ")", 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(QItemLabel, { caption: "" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.date), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["click"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createBaseVNode("div", _hoisted_14, [
                                      createVNode(QList, {
                                        bordered: "",
                                        separator: "",
                                        dense: true
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(QItem, null, {
                                            default: withCtx(() => [
                                              createVNode(QItemSection, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("messages.ColHerst")), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(QItemSection, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(lead).fahrzeug.hersteller), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(QItem, null, {
                                            default: withCtx(() => [
                                              createVNode(QItemSection, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("messages.ColCategory")), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(QItemSection, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(lead).fahrzeug.kategorie), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(QItem, null, {
                                            default: withCtx(() => [
                                              createVNode(QItemSection, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("messages.ColModel")), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(QItemSection, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(lead).fahrzeug.model), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(QItem, null, {
                                            default: withCtx(() => [
                                              createVNode(QItemSection, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("messages.ColDesc")), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(QItemSection, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(lead).fahrzeug.desc), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(QItem, null, {
                                            default: withCtx(() => [
                                              createVNode(QItemSection, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("messages.ColColor")), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(QItemSection, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(lead).fahrzeug.farbe), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(QItem, null, {
                                            default: withCtx(() => [
                                              createVNode(QItemSection, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("messages.ColPrice")), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(QItemSection, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(lead).fahrzeug.preis), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(QItem, null, {
                                            default: withCtx(() => [
                                              createVNode(QItemSection, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("messages.ColPower")), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(QItemSection, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(lead).fahrzeug.leistung) + "kW", 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(QItem, null, {
                                            default: withCtx(() => [
                                              createVNode(QItemSection, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.$t("messages.LabelFirstRegist")), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(QItemSection, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(unref(lead).fahrzeug.erstzulassung), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue"])
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
        _: 1
      });
    };
  }
});
var Campaign = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "Campaign.vue"]]);
export { Campaign as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FtcGFpZ24uMzI1NGY3NTIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9DYW1wYWlnbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxxLXBhZ2UgY2xhc3M9XCJxLXBhLXNtXCI+XG5cbiAgICAgICAgPE5hdkJhciA6dGl0bGU9XCIkdCgnbWVzc2FnZXMuTGFiZWxDdXN0b21lcicpXCIgaWNvbj1cImRhc2hib2FyZFwiIHN0YXRlTmFtZT1cImN1c3RvbWVyXCIgOmZ1bmNzPVwibmF2YmFyU3VibWVudVwiIDpzdGF0ZT1cImN1c3RvbWVyU3RvcmVcIiAvPlxuICAgICAgICBcbiAgICAgICAgPHEtY2FyZD5cbiAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8R3JpZCBncmlkTmFtZT1cImN1c3RvbWVyR3JpZFwiIDpncmlkT3B0aW9ucz1cImN1c3RvbWVyR3JpZFwiIHN0YXRlTmFtZT1cImN1c3RvbWVyXCIgOnN0YXRlPVwiY3VzdG9tZXJTdG9yZVwiIC8+XG4gICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICAgICAgICA8cS1zZXBhcmF0b3IgLz5cblxuICAgICAgICAgICAgPHEtZm9ybSBAc3VibWl0PVwiZG9TYXZlXCIgY2xhc3M9XCJxLWd1dHRlci14c1wiIHJlZj1cInJlZkN1c3RvbWVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogLTk5OTlweFwiLz5cblxuICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj57eyAkdCgnbWVzc2FnZXMuTGFiZWxDdXN0b21lcicpIH19PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cInNhbHV0YXRpb25cIiB2LW1vZGVsPVwiZm9ybS5zYWx1dGF0aW9uXCIgbGF6eS1ydWxlcyA6ZGVuc2U9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxTYWx1dGF0aW9uJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJ0aXRsZVwiIHYtbW9kZWw9XCJmb3JtLnRpdGxlXCIgbGF6eS1ydWxlcyA6ZGVuc2U9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxUaXRsZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiZmlyc3ROYW1lXCIgdi1tb2RlbD1cImZvcm0uZmlyc3ROYW1lXCIgbGF6eS1ydWxlcyA6ZGVuc2U9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbEZpcnN0bmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwic3VyTmFtZVwiIHYtbW9kZWw9XCJmb3JtLnN1ck5hbWVcIiBsYXp5LXJ1bGVzIDpkZW5zZT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sU3VybmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiZW1haWxcIiB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiIGxhenktcnVsZXMgOmRlbnNlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xNYWlsJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJ0ZWxlZm9uXCIgdi1tb2RlbD1cImZvcm0udGVsZWZvblwiIGxhenktcnVsZXMgOmRlbnNlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xQaG9uZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwic3RyZWV0XCIgdi1tb2RlbD1cImZvcm0uc3RyZWV0XCIgbGF6eS1ydWxlcyA6ZGVuc2U9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbFN0cmVldCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiemlwXCIgdi1tb2RlbD1cImZvcm0uemlwXCIgbGF6eS1ydWxlcyA6ZGVuc2U9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sWmlwJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJjaXR5XCIgdi1tb2RlbD1cImZvcm0uY2l0eVwiIGxhenktcnVsZXMgOmRlbnNlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbENpdHknKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS10YWJzIHYtbW9kZWw9XCJ0YWJcIiBjbGFzcz1cInRleHQtdGVhbFwiIGFsaWduPVwibGVmdFwiIDpkZW5zZT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFiIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbEdlbmVyYWwnKVwiIG5hbWU9XCJnZW5lcmFsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFiIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbExlYWQnKVwiIG5hbWU9XCJsZWFkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtdGFicz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRhYi1wYW5lbHMgdi1tb2RlbD1cInRhYlwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRhYi1wYW5lbCBuYW1lPVwiZ2VuZXJhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cImNpdHlcIiB2LW1vZGVsPVwiZm9ybS5kYXRlRmlyc3RcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsRGF0ZUZpcnN0JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGUgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJjaXR5XCIgdi1tb2RlbD1cImZvcm0uZGF0ZUxhc3RcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsRGF0ZUxhc3QnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtdGFiLXBhbmVsPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFiLXBhbmVsIG5hbWU9XCJsZWFkXCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtbGlzdCBib3JkZXJlZCBzZXBhcmF0b3IgOmRlbnNlPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgcmlwcGxlIHYtZm9yPVwiaXRlbSBpbiBsZWFkc1wiIDprZXk9XCJpdGVtLl9pZFwiIDpjbGljaz1cInNlbGVjdExlYWQoaXRlbSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgaXRlbS5mYWhyemV1Zy5tb2RlbCB9fSAoe3sgaXRlbS5nZnogfX0pPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj57eyBpdGVtLmRhdGUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtbGlzdCBib3JkZXJlZCBzZXBhcmF0b3IgOmRlbnNlPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoJ21lc3NhZ2VzLkNvbEhlcnN0JykgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyBsZWFkLmZhaHJ6ZXVnLmhlcnN0ZWxsZXIgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyAkdCgnbWVzc2FnZXMuQ29sQ2F0ZWdvcnknKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7IGxlYWQuZmFocnpldWcua2F0ZWdvcmllIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoJ21lc3NhZ2VzLkNvbE1vZGVsJykgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyBsZWFkLmZhaHJ6ZXVnLm1vZGVsIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoJ21lc3NhZ2VzLkNvbERlc2MnKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7IGxlYWQuZmFocnpldWcuZGVzYyB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KCdtZXNzYWdlcy5Db2xDb2xvcicpIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgbGVhZC5mYWhyemV1Zy5mYXJiZSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KCdtZXNzYWdlcy5Db2xQcmljZScpIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgbGVhZC5mYWhyemV1Zy5wcmVpcyB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KCdtZXNzYWdlcy5Db2xQb3dlcicpIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgbGVhZC5mYWhyemV1Zy5sZWlzdHVuZyB9fWtXPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoJ21lc3NhZ2VzLkxhYmVsRmlyc3RSZWdpc3QnKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7IGxlYWQuZmFocnpldWcuZXJzdHp1bGFzc3VuZyB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLXRhYi1wYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtdGFiLXBhbmVscz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICA8L3EtZm9ybT5cbiAgICAgICAgPC9xLWNhcmQ+XG4gICAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IEdsb2JhbFZpZXcgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbW1vbi9oZWxwZXJzL0dsb2JhbFZpZXcnO1xuaW1wb3J0IE5hdkJhciAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2QmFyLnZ1ZSc7IFxuaW1wb3J0IEdyaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL0dyaWQudnVlJztcblxuaW1wb3J0IF8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCBkZWJ1ZyAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdkZWJ1Zyc7XG5jb25zdCBsb2cgICAgICAgICA9IGRlYnVnKCdhcHA6Y3VzdG9tZXInKTtcblxuY29uc3QgaW5pdCAgICAgICAgPSB7IFxuICAgIGNvbGxOYW1lOiAgICAgICAnY3VzdG9tZXInLCBcbiAgICBzdGF0ZU5hbWU6ICAgICAgJ2N1c3RvbWVyJ1xufTtcbmNvbnN0IGdsb2JhbFZpZXcgID0gR2xvYmFsVmlldyggaW5pdCApO1xuY29uc3QgeyBcbiAgICBzdG9yZTogICAgICAgICAgY3VzdG9tZXJTdG9yZSwgXG4gICAgZGF0YTogICAgICAgICAgIGN1c3RvbWVyLCBcbiAgICBkb1NhdmUsXG4gICAgZm9ybSBcbn0gID0gZ2xvYmFsVmlldztcblxuY29uc3QgY3VzdG9tZXJHcmlkICAgICAgICAgICAgICA9IHJlZih7fSk7XG5cbmNvbnN0IGxlYWRzICAgICAgICAgICAgICAgICAgICAgPSByZWYoW10pO1xuY29uc3QgbGVhZCAgICAgICAgICAgICAgICAgICAgICA9IHJlZih7fSk7XG5cbi8vIHNlbGVjdCByb3dcbmFzeW5jIGZ1bmN0aW9uIGFmdGVyU2VsZWN0KCBzZWxlY3RlZFJvd3M6IGFueSApIHtcbiAgICBjb25zdCByb3dzICAgICAgICA9IGF3YWl0IGF4aW9zLnBvc3QoICcvY3VzdG9tL2dldExlYWRPZkN1c3QnLCBzZWxlY3RlZFJvd3MgKTtcbiAgICBcbiAgICBsb2coICdzZWxlY3RSb3cnLCByb3dzICk7XG4gICAgXG4gICAgbGVhZHMudmFsdWUgICAgICA9IHJvd3MuZGF0YTtcbiAgICBsZWFkLnZhbHVlICAgICAgID0geyBmYWhyemV1Zzoge30gfTtcbn1cblxuLy8gc2VsZWN0IGxlYWRcbmZ1bmN0aW9uIHNlbGVjdExlYWQoIGl0ZW06IGFueSApIHtcbiAgICBsZWFkLnZhbHVlICAgICAgID0gaXRlbTtcbn1cblxub25Nb3VudGVkKCAoKSA9PiB7XG4gICAgY3VzdG9tZXJTdG9yZS5yZWdpc3RlckFjdGlvbiggeyBhY3Rpb246ICdhZnRlclNlbGVjdCcsIHRhcmdldDogJ0NvbnRhY3QnLCBmdW5jOiBhZnRlclNlbGVjdCB9ICk7XG59KTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbkBpbXBvcnQgXCIuLi9fdmFyaWFibGVzLnNjc3NcIjtcblxuI3RvcG9sIHtcbiAgICBtaW4td2lkdGg6ICAgICBjYWxjKCAxMDB2dyAtIDgwcHggKTtcbiAgICBtaW4taGVpZ2h0OiAgICBjYWxjKCAxMDB2aCAtIDE0MHB4ICk7XG59XG5cbiN0b3BvbCA+IGlmcmFtZSB7XG4gICAgaGVpZ2h0OiAgICAgY2FsYyggMTAwdmggLSAxNDBweCApO1xufVxuPC9zdHlsZT4iXSwibmFtZXMiOlsiZ2xvYmFsVmlldyIsIkdsb2JhbFZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzSkEsVUFBQSxNQUFBLE1BQUEsY0FBQTtBQUVBLFVBQUEsT0FBQTtBQUFBLE1BQW9CLFVBQUE7QUFBQSxNQUNBLFdBQUE7QUFBQSxJQUNBO0FBRXBCLFVBQUFBLGVBQUFDLFdBQUEsSUFBQTtBQUNBLFVBQUE7QUFBQSxNQUFNLE9BQUE7QUFBQSxNQUNjLE1BQUE7QUFBQSxNQUNBO0FBQUEsTUFDaEI7QUFBQSxJQUNBLElBQUFEO0FBR0osVUFBQSxlQUFBLElBQUEsQ0FBQSxDQUFBO0FBRUEsVUFBQSxRQUFBLElBQUEsQ0FBQSxDQUFBO0FBQ0EsVUFBQSxPQUFBLElBQUEsQ0FBQSxDQUFBO0FBR0EsbUJBQUEsWUFBQSxjQUFBO0FBQ0ksWUFBQSxPQUFBLE1BQUEsTUFBQSxLQUFBLHlCQUFBLFlBQUE7QUFFQSxVQUFBLGFBQUEsSUFBQTtBQUVBLFlBQUEsUUFBQSxLQUFBO0FBQ0EsV0FBQSxRQUFBLEVBQUEsVUFBQSxDQUFBLEVBQUE7QUFBQSxJQUFrQztBQUl0QyxhQUFBLFdBQUEsTUFBQTtBQUNJLFdBQUEsUUFBQTtBQUFBLElBQW1CO0FBR3ZCLGNBQUEsTUFBQTtBQUNJLG9CQUFBLGVBQUEsRUFBQSxRQUFBLGVBQUEsUUFBQSxXQUFBLE1BQUEsWUFBQSxDQUFBO0FBQUEsSUFBOEYsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
