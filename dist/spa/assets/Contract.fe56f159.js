import { _ as _export_sfc, e as defineComponent, l as debug, n as ref, aL as onMounted, q as openBlock, s as createBlock, w as withCtx, f as createVNode, G as unref, D as QCardSection, x as QSeparator, U as QCard, I as QLayout, B as QHeader, H as QPageContainer, C as QPage, E as createBaseVNode, F as QInput, X as isRef, Z as QScrollArea, $ as QList, a2 as createElementBlock, a3 as renderList, a4 as Fragment, a0 as QItem, a1 as QItemSection, v as createTextVNode, A as toDisplayString, a5 as QDialog, a as axios, M as _, a7 as normalizeClass, a6 as QItemLabel, J as pushScopeId, K as popScopeId } from "./index.8f8ca0f3.js";
import { Q as QTabs, a as QTab, b as QTabPanels, c as QTabPanel } from "./QTabPanels.46aa2434.js";
import { Q as QForm } from "./QForm.8c81555c.js";
import { g as globalView, N as NavBar } from "./NavBar.eb70e4d5.js";
import { G as Grid } from "./Grid.b4814aca.js";
import "./rtl.b51694b1.js";
import "./AgGridVue.c15bd737.js";
var Contract_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-339b9852"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("input", {
  type: "submit",
  style: { "position": "absolute", "left": "-9999px" }
}, null, -1));
const _hoisted_2 = { class: "row q-col-gutter-md" };
const _hoisted_3 = { class: "col-4" };
const _hoisted_4 = { class: "row q-col-gutter-md" };
const _hoisted_5 = { class: "col-6" };
const _hoisted_6 = { class: "col-6" };
const _hoisted_7 = { class: "row q-col-gutter-sm" };
const _hoisted_8 = { class: "col-3" };
const _hoisted_9 = { class: "col-9" };
const _hoisted_10 = { class: "col-8" };
const _hoisted_11 = { class: "row q-col-gutter-sm" };
const _hoisted_12 = { class: "col-6" };
const _hoisted_13 = { class: "col-6" };
const _sfc_main = defineComponent({
  __name: "Contract",
  setup(__props) {
    const log = debug("app:contract");
    const init = {
      collName: "contract",
      stateName: "contract"
    };
    const globalView$1 = globalView(init);
    const {
      store: contractStore,
      data: contract,
      doSave,
      form
    } = globalView$1;
    const contractGrid = ref({});
    const tab = ref("general"), leads = ref([]), lead = ref({
      fahrzeug: {
        desc: ""
      }
    }), showContract = ref(false);
    async function afterSelect(selectedRows) {
      const rows = await axios.post("/custom/getLeadOfCust", selectedRows);
      log("selectRow", rows);
      lead.value = rows.data[0] || { fahrzeug: { desc: "" } };
      leads.value = rows.data;
      showContract.value = true;
    }
    function selectLead(item) {
      lead.value = item;
    }
    function replDesc(desc) {
      if (_.isString(desc))
        return desc.replace(/\+/g, ", ");
      return "";
    }
    function onContractHide() {
      showContract.value = false;
    }
    onMounted(async () => {
      contractStore.registerAction({ action: "afterSelect", target: "Autoseller", func: afterSelect });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "q-pa-sm" }, {
        default: withCtx(() => [
          createVNode(NavBar, {
            title: _ctx.$t("messages.LabelContract"),
            icon: "dashboard",
            stateName: "contract",
            state: unref(contractStore),
            type: "window"
          }, null, 8, ["title", "state"]),
          createVNode(QCard, null, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createVNode(Grid, {
                    gridName: "contractGrid",
                    gridOptions: unref(contractGrid),
                    stateName: "contract",
                    state: unref(contractStore),
                    type: "server",
                    orientation: "portrait"
                  }, null, 8, ["gridOptions", "state"])
                ]),
                _: 1
              }),
              createVNode(QSeparator)
            ]),
            _: 1
          }),
          createVNode(QDialog, {
            modelValue: unref(showContract),
            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => isRef(showContract) ? showContract.value = $event : null),
            onHide: onContractHide,
            "no-backdrop-dismiss": ""
          }, {
            default: withCtx(() => [
              createVNode(QLayout, {
                container: "",
                view: "lHh lpR lff",
                class: "shadow-2 rounded detailWindow"
              }, {
                default: withCtx(() => [
                  createVNode(QHeader, {
                    elevated: "",
                    class: "bg-primary text-white",
                    "height-hint": "98"
                  }, {
                    default: withCtx(() => [
                      createVNode(NavBar, {
                        title: _ctx.$t("messages.ColContract"),
                        icon: "dashboard",
                        stateName: "contract",
                        state: unref(contractStore),
                        type: "dialog",
                        onClose: _cache[0] || (_cache[0] = ($event) => onContractHide())
                      }, null, 8, ["title", "state"])
                    ]),
                    _: 1
                  }),
                  createVNode(QPageContainer, null, {
                    default: withCtx(() => [
                      createVNode(QPage, null, {
                        default: withCtx(() => [
                          createVNode(QForm, {
                            onSubmit: unref(doSave),
                            class: "q-gutter-xs",
                            ref: "refCustomer"
                          }, {
                            default: withCtx(() => [
                              _hoisted_1,
                              createVNode(QCardSection, null, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_2, [
                                    createBaseVNode("div", _hoisted_3, [
                                      createBaseVNode("div", _hoisted_4, [
                                        createBaseVNode("div", _hoisted_5, [
                                          createVNode(QInput, {
                                            name: "salutation",
                                            modelValue: unref(form).salutation,
                                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).salutation = $event),
                                            "lazy-rules": "",
                                            dense: "",
                                            outlined: "",
                                            label: _ctx.$t("messages.LabelSalutation"),
                                            hint: ""
                                          }, null, 8, ["modelValue", "label"])
                                        ]),
                                        createBaseVNode("div", _hoisted_6, [
                                          createVNode(QInput, {
                                            name: "title",
                                            modelValue: unref(form).title,
                                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).title = $event),
                                            "lazy-rules": "",
                                            dense: "",
                                            outlined: "",
                                            label: _ctx.$t("messages.LabelTitle"),
                                            hint: ""
                                          }, null, 8, ["modelValue", "label"])
                                        ])
                                      ]),
                                      createVNode(QInput, {
                                        name: "firstName",
                                        modelValue: unref(form).firstName,
                                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).firstName = $event),
                                        "lazy-rules": "",
                                        dense: "",
                                        outlined: "",
                                        label: _ctx.$t("messages.ColFirstname"),
                                        hint: ""
                                      }, null, 8, ["modelValue", "label"]),
                                      createVNode(QInput, {
                                        name: "surName",
                                        modelValue: unref(form).surName,
                                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(form).surName = $event),
                                        "lazy-rules": "",
                                        dense: "",
                                        outlined: "",
                                        label: _ctx.$t("messages.ColSurname"),
                                        hint: ""
                                      }, null, 8, ["modelValue", "label"]),
                                      createVNode(QInput, {
                                        name: "email",
                                        modelValue: unref(form).email,
                                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(form).email = $event),
                                        "lazy-rules": "",
                                        dense: "",
                                        outlined: "",
                                        label: _ctx.$t("messages.ColMail"),
                                        hint: ""
                                      }, null, 8, ["modelValue", "label"]),
                                      createVNode(QInput, {
                                        name: "telefon",
                                        modelValue: unref(form).telefon,
                                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(form).telefon = $event),
                                        "lazy-rules": "",
                                        dense: "",
                                        outlined: "",
                                        label: _ctx.$t("messages.ColPhone"),
                                        hint: ""
                                      }, null, 8, ["modelValue", "label"]),
                                      createVNode(QInput, {
                                        name: "street",
                                        modelValue: unref(form).street,
                                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(form).street = $event),
                                        "lazy-rules": "",
                                        dense: "",
                                        outlined: "",
                                        label: _ctx.$t("messages.ColStreet"),
                                        hint: ""
                                      }, null, 8, ["modelValue", "label"]),
                                      createBaseVNode("div", _hoisted_7, [
                                        createBaseVNode("div", _hoisted_8, [
                                          createVNode(QInput, {
                                            name: "zip",
                                            modelValue: unref(form).zip,
                                            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(form).zip = $event),
                                            "lazy-rules": "",
                                            dense: "",
                                            outlined: "",
                                            label: _ctx.$t("messages.ColZip"),
                                            hint: ""
                                          }, null, 8, ["modelValue", "label"])
                                        ]),
                                        createBaseVNode("div", _hoisted_9, [
                                          createVNode(QInput, {
                                            name: "city",
                                            modelValue: unref(form).city,
                                            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(form).city = $event),
                                            "lazy-rules": "",
                                            dense: "",
                                            outlined: "",
                                            label: _ctx.$t("messages.ColCity"),
                                            hint: ""
                                          }, null, 8, ["modelValue", "label"])
                                        ])
                                      ])
                                    ]),
                                    createBaseVNode("div", _hoisted_10, [
                                      createVNode(QTabs, {
                                        modelValue: unref(tab),
                                        "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => isRef(tab) ? tab.value = $event : null),
                                        class: "text-teal",
                                        align: "left",
                                        dense: "",
                                        outlined: ""
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
                                        modelValue: unref(tab),
                                        "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => isRef(tab) ? tab.value = $event : null)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(QTabPanel, { name: "general" }, {
                                            default: withCtx(() => [
                                              createVNode(QInput, {
                                                name: "city",
                                                value: unref(form).dateFirst,
                                                "lazy-rules": "",
                                                dense: "",
                                                outlined: "",
                                                label: _ctx.$t("messages.LabelDateFirst"),
                                                disable: ""
                                              }, null, 8, ["value", "label"]),
                                              createVNode(QInput, {
                                                name: "city",
                                                value: unref(form).dateLast,
                                                "lazy-rules": "",
                                                dense: "",
                                                outlined: "",
                                                label: _ctx.$t("messages.LabelDateLast"),
                                                disable: ""
                                              }, null, 8, ["value", "label"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(QTabPanel, { name: "lead" }, {
                                            default: withCtx(() => [
                                              createBaseVNode("div", _hoisted_11, [
                                                createBaseVNode("div", _hoisted_12, [
                                                  createVNode(QScrollArea, { class: "lead-list" }, {
                                                    default: withCtx(() => [
                                                      createVNode(QList, {
                                                        bordered: "",
                                                        separator: "",
                                                        dense: "",
                                                        outlined: ""
                                                      }, {
                                                        default: withCtx(() => [
                                                          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(leads), (item) => {
                                                            return openBlock(), createBlock(QItem, {
                                                              clickable: "",
                                                              ripple: "",
                                                              key: item._id,
                                                              onClick: ($event) => selectLead(item),
                                                              class: normalizeClass(unref(lead)._id == item._id ? "bg-blue-1" : "")
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
                                                            }, 1032, ["onClick", "class"]);
                                                          }), 128))
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                createBaseVNode("div", _hoisted_13, [
                                                  createVNode(QList, {
                                                    bordered: "",
                                                    separator: "",
                                                    dense: "",
                                                    outlined: ""
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
                                                              createTextVNode(toDisplayString(replDesc(unref(lead).description)), 1)
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
var Contract = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-339b9852"], ["__file", "Contract.vue"]]);
export { Contract as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJhY3QuZmU1NmYxNTkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Db250cmFjdC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxxLXBhZ2UgY2xhc3M9XCJxLXBhLXNtXCI+XG5cbiAgICAgICAgPE5hdkJhciA6dGl0bGU9XCIkdCgnbWVzc2FnZXMuTGFiZWxDb250cmFjdCcpXCIgaWNvbj1cImRhc2hib2FyZFwiIHN0YXRlTmFtZT1cImNvbnRyYWN0XCIgOnN0YXRlPVwiY29udHJhY3RTdG9yZVwiIHR5cGU9XCJ3aW5kb3dcIiAvPlxuICAgICAgICBcbiAgICAgICAgPHEtY2FyZD5cbiAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8R3JpZCBncmlkTmFtZT1cImNvbnRyYWN0R3JpZFwiIDpncmlkT3B0aW9ucz1cImNvbnRyYWN0R3JpZFwiIHN0YXRlTmFtZT1cImNvbnRyYWN0XCIgOnN0YXRlPVwiY29udHJhY3RTdG9yZVwiIHR5cGU9XCJzZXJ2ZXJcIiBvcmllbnRhdGlvbj1cInBvcnRyYWl0XCIgLz5cbiAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgICAgICAgIDxxLXNlcGFyYXRvciAvPlxuICAgICAgICA8L3EtY2FyZD5cbiAgICAgICAgXG4gICAgICAgIDxxLWRpYWxvZyB2LW1vZGVsPVwic2hvd0NvbnRyYWN0XCIgQGhpZGU9XCJvbkNvbnRyYWN0SGlkZVwiIG5vLWJhY2tkcm9wLWRpc21pc3M+XG4gICAgICAgICAgICA8cS1sYXlvdXQgY29udGFpbmVyIHZpZXc9XCJsSGggbHBSIGxmZlwiIGNsYXNzPVwic2hhZG93LTIgcm91bmRlZCBkZXRhaWxXaW5kb3dcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxxLWhlYWRlciBlbGV2YXRlZCBjbGFzcz1cImJnLXByaW1hcnkgdGV4dC13aGl0ZVwiIGhlaWdodC1oaW50PVwiOThcIj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkJhciA6dGl0bGU9XCIkdCgnbWVzc2FnZXMuQ29sQ29udHJhY3QnKVwiIGljb249XCJkYXNoYm9hcmRcIiBzdGF0ZU5hbWU9XCJjb250cmFjdFwiIDpzdGF0ZT1cImNvbnRyYWN0U3RvcmVcIiB0eXBlPVwiZGlhbG9nXCIgQGNsb3NlPVwib25Db250cmFjdEhpZGUoKVwiIC8+XG4gICAgICAgICAgICAgICAgPC9xLWhlYWRlcj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxxLXBhZ2UtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8cS1wYWdlPlxuICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1mb3JtIEBzdWJtaXQ9XCJkb1NhdmVcIiBjbGFzcz1cInEtZ3V0dGVyLXhzXCIgcmVmPVwicmVmQ3VzdG9tZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAtOTk5OXB4XCIvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHEtY29sLWd1dHRlci1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJzYWx1dGF0aW9uXCIgdi1tb2RlbD1cImZvcm0uc2FsdXRhdGlvblwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxTYWx1dGF0aW9uJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJ0aXRsZVwiIHYtbW9kZWw9XCJmb3JtLnRpdGxlXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbFRpdGxlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJmaXJzdE5hbWVcIiB2LW1vZGVsPVwiZm9ybS5maXJzdE5hbWVcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xGaXJzdG5hbWUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJzdXJOYW1lXCIgdi1tb2RlbD1cImZvcm0uc3VyTmFtZVwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbFN1cm5hbWUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJlbWFpbFwiIHYtbW9kZWw9XCJmb3JtLmVtYWlsXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sTWFpbCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cInRlbGVmb25cIiB2LW1vZGVsPVwiZm9ybS50ZWxlZm9uXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sUGhvbmUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJzdHJlZXRcIiB2LW1vZGVsPVwiZm9ybS5zdHJlZXRcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xTdHJlZXQnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHEtY29sLWd1dHRlci1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJ6aXBcIiB2LW1vZGVsPVwiZm9ybS56aXBcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbFppcCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiY2l0eVwiIHYtbW9kZWw9XCJmb3JtLmNpdHlcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbENpdHknKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS10YWJzIHYtbW9kZWw9XCJ0YWJcIiBjbGFzcz1cInRleHQtdGVhbFwiIGFsaWduPVwibGVmdFwiIGRlbnNlIG91dGxpbmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS10YWIgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsR2VuZXJhbCcpXCIgbmFtZT1cImdlbmVyYWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS10YWIgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsTGVhZCcpXCIgbmFtZT1cImxlYWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS10YWJzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFiLXBhbmVscyB2LW1vZGVsPVwidGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFiLXBhbmVsIG5hbWU9XCJnZW5lcmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiY2l0eVwiIDp2YWx1ZT1cImZvcm0uZGF0ZUZpcnN0XCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbERhdGVGaXJzdCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiY2l0eVwiIDp2YWx1ZT1cImZvcm0uZGF0ZUxhc3RcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsRGF0ZUxhc3QnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtdGFiLXBhbmVsPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFiLXBhbmVsIG5hbWU9XCJsZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtc2Nyb2xsLWFyZWEgY2xhc3M9XCJsZWFkLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWxpc3QgYm9yZGVyZWQgc2VwYXJhdG9yIGRlbnNlIG91dGxpbmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHJpcHBsZSB2LWZvcj1cIml0ZW0gaW4gbGVhZHNcIiA6a2V5PVwiaXRlbS5faWRcIiBAY2xpY2s9XCJzZWxlY3RMZWFkKGl0ZW0pXCIgOmNsYXNzPVwibGVhZC5faWQgPT0gaXRlbS5faWQgPyAnYmctYmx1ZS0xJyA6ICcnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgaXRlbS5mYWhyemV1Zy5tb2RlbCB9fSAoe3sgaXRlbS5nZnogfX0pPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3sgaXRlbS5kYXRlIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLXNjcm9sbC1hcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtbGlzdCBib3JkZXJlZCBzZXBhcmF0b3IgZGVuc2Ugb3V0bGluZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyAkdCgnbWVzc2FnZXMuQ29sSGVyc3QnKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7IGxlYWQuZmFocnpldWcuaGVyc3RlbGxlciB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KCdtZXNzYWdlcy5Db2xDYXRlZ29yeScpIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgbGVhZC5mYWhyemV1Zy5rYXRlZ29yaWUgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyAkdCgnbWVzc2FnZXMuQ29sTW9kZWwnKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7IGxlYWQuZmFocnpldWcubW9kZWwgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyAkdCgnbWVzc2FnZXMuQ29sQ29sb3InKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7IGxlYWQuZmFocnpldWcuZmFyYmUgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyAkdCgnbWVzc2FnZXMuQ29sUHJpY2UnKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7IGxlYWQuZmFocnpldWcucHJlaXMgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyAkdCgnbWVzc2FnZXMuQ29sUG93ZXInKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7IGxlYWQuZmFocnpldWcubGVpc3R1bmcgfX1rVzwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KCdtZXNzYWdlcy5MYWJlbEZpcnN0UmVnaXN0JykgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyBsZWFkLmZhaHJ6ZXVnLmVyc3R6dWxhc3N1bmcgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyAkdCgnbWVzc2FnZXMuQ29sRGVzYycpIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgcmVwbERlc2MoIGxlYWQuZGVzY3JpcHRpb24gKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLXRhYi1wYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtdGFiLXBhbmVscz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3EtZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9xLXBhZ2U+XG4gICAgICAgICAgICAgICAgPC9xLXBhZ2UtY29udGFpbmVyPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L3EtbGF5b3V0PlxuICAgICAgICA8L3EtZGlhbG9nPlxuICAgIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCBHbG9iYWxWaWV3ICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21tb24vaGVscGVycy9HbG9iYWxWaWV3JztcbmltcG9ydCBOYXZCYXIgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhci52dWUnOyBcbmltcG9ydCBHcmlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9HcmlkLnZ1ZSc7XG5cbmltcG9ydCBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgZGVidWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnZGVidWcnO1xuY29uc3QgbG9nICAgICAgICAgPSBkZWJ1ZygnYXBwOmNvbnRyYWN0Jyk7XG5cbmNvbnN0IGluaXQgICAgICAgID0geyBcbiAgICBjb2xsTmFtZTogICAgICAgJ2NvbnRyYWN0JywgXG4gICAgc3RhdGVOYW1lOiAgICAgICdjb250cmFjdCdcbn07XG5jb25zdCBnbG9iYWxWaWV3ICA9IEdsb2JhbFZpZXcoIGluaXQgKTtcbmNvbnN0IHsgXG4gICAgc3RvcmU6ICAgICAgICAgIGNvbnRyYWN0U3RvcmUsIFxuICAgIGRhdGE6ICAgICAgICAgICBjb250cmFjdCwgXG4gICAgZG9TYXZlLFxuICAgIGZvcm0gXG59ICA9IGdsb2JhbFZpZXc7XG5cbmNvbnN0IGNvbnRyYWN0R3JpZCAgICAgICAgICAgICAgPSByZWYoe30pO1xuXG5jb25zdCAgIHRhYiAgICAgICAgICAgPSByZWYoICdnZW5lcmFsJyApLFxuICAgICAgICBsZWFkcyAgICAgICAgID0gcmVmKFtdKSxcbiAgICAgICAgbGVhZCAgICAgICAgICA9IHJlZih7XG4gICAgICAgIGZhaHJ6ZXVnOiAgICAge1xuICAgICAgICAgICAgICAgIGRlc2M6ICAgICAgICAgJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHNob3dDb250cmFjdCAgID0gcmVmKGZhbHNlKTtcbiAgICAgICAgXG4vLyBzZWxlY3Qgcm93XG5hc3luYyBmdW5jdGlvbiBhZnRlclNlbGVjdCggc2VsZWN0ZWRSb3dzOiBhbnkgKSB7XG4gICAgY29uc3Qgcm93cyAgICAgICAgPSBhd2FpdCBheGlvcy5wb3N0KCAnL2N1c3RvbS9nZXRMZWFkT2ZDdXN0Jywgc2VsZWN0ZWRSb3dzICk7XG4gICAgXG4gICAgbG9nKCAnc2VsZWN0Um93Jywgcm93cyApO1xuICAgIFxuICAgIGxlYWQudmFsdWUgICAgICAgPSByb3dzLmRhdGFbMF0gfHwgeyBmYWhyemV1ZzogeyBkZXNjOiAnJyB9IH07XG4gICAgbGVhZHMudmFsdWUgICAgICA9IHJvd3MuZGF0YTtcbiAgICBcbiAgICBzaG93Q29udHJhY3QudmFsdWUgICA9IHRydWU7XG59XG5cbi8vIHNlbGVjdCBsZWFkXG5mdW5jdGlvbiBzZWxlY3RMZWFkKCBpdGVtOiBhbnkgKSB7XG4gICAgbGVhZC52YWx1ZSAgICAgICA9IGl0ZW07XG59XG5cbmZ1bmN0aW9uIHJlcGxEZXNjKCBkZXNjOiBzdHJpbmcgKSB7XG4gICAgaWYgKCBfLmlzU3RyaW5nKGRlc2MpIClcbiAgICAgICAgcmV0dXJuIGRlc2MucmVwbGFjZSggL1xcKy9nLCAnLCAnICk7XG4gICAgcmV0dXJuICcnO1xufVxuXG4vLyBoaWRlIGRpYWxvZ1xuZnVuY3Rpb24gb25Db250cmFjdEhpZGUoKSB7XG4gICAgc2hvd0NvbnRyYWN0LnZhbHVlICAgPSBmYWxzZTtcbn1cblxub25Nb3VudGVkKCBhc3luYygpID0+IHtcbiAgICBjb250cmFjdFN0b3JlLnJlZ2lzdGVyQWN0aW9uKCB7IGFjdGlvbjogJ2FmdGVyU2VsZWN0JywgdGFyZ2V0OiAnQXV0b3NlbGxlcicsIGZ1bmM6IGFmdGVyU2VsZWN0IH0gKTtcbn0pO1xuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCBcIi4uL192YXJpYWJsZXMuc2Nzc1wiO1xuXG4uZGV0YWlsV2luZG93IHtcbiAgICB3aWR0aDogICAgIGNhbGMoIDEwMHZ3IC0gMTMwcHggKTtcbiAgICBtYXgtd2lkdGg6ICAgICBjYWxjKCAxMDB2dyAtIDEzMHB4ICkgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6ICAgIGNhbGMoIDEwMHZoIC0gMTAwcHggKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmxlYWQtbGlzdCB7XG4gICAgaGVpZ2h0OiAgICBjYWxjKCAxMDB2aCAtIDEwMHB4IC0gNTBweCAtIDUwcHggLSA1MHB4ICk7XG59XG5cbjwvc3R5bGU+Il0sIm5hbWVzIjpbImdsb2JhbFZpZXciLCJHbG9iYWxWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0tBLFVBQUEsTUFBQSxNQUFBLGNBQUE7QUFFQSxVQUFBLE9BQUE7QUFBQSxNQUFvQixVQUFBO0FBQUEsTUFDQSxXQUFBO0FBQUEsSUFDQTtBQUVwQixVQUFBQSxlQUFBQyxXQUFBLElBQUE7QUFDQSxVQUFBO0FBQUEsTUFBTSxPQUFBO0FBQUEsTUFDYyxNQUFBO0FBQUEsTUFDQTtBQUFBLE1BQ2hCO0FBQUEsSUFDQSxJQUFBRDtBQUdKLFVBQUEsZUFBQSxJQUFBLENBQUEsQ0FBQTtBQUVBLFVBQUEsTUFBQSxJQUFBLFNBQUEsR0FBQSxRQUFBLElBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxJQUFBO0FBQUEsTUFFNEIsVUFBQTtBQUFBLFFBQ04sTUFBQTtBQUFBLE1BQ1E7QUFBQSxJQUNsQixDQUFBLEdBQUEsZUFBQSxJQUFBLEtBQUE7QUFLWixtQkFBQSxZQUFBLGNBQUE7QUFDSSxZQUFBLE9BQUEsTUFBQSxNQUFBLEtBQUEseUJBQUEsWUFBQTtBQUVBLFVBQUEsYUFBQSxJQUFBO0FBRUEsV0FBQSxRQUFBLEtBQUEsS0FBQSxNQUFBLEVBQUEsVUFBQSxFQUFBLE1BQUEsR0FBQTtBQUNBLFlBQUEsUUFBQSxLQUFBO0FBRUEsbUJBQUEsUUFBQTtBQUFBLElBQXVCO0FBSTNCLGFBQUEsV0FBQSxNQUFBO0FBQ0ksV0FBQSxRQUFBO0FBQUEsSUFBbUI7QUFHdkIsYUFBQSxTQUFBLE1BQUE7QUFDSSxVQUFBLEVBQUEsU0FBQSxJQUFBO0FBQ0ksZUFBQSxLQUFBLFFBQUEsT0FBQSxJQUFBO0FBQ0osYUFBQTtBQUFBLElBQU87QUFJWCxhQUFBLGlCQUFBO0FBQ0ksbUJBQUEsUUFBQTtBQUFBLElBQXVCO0FBRzNCLGNBQUEsWUFBQTtBQUNJLG9CQUFBLGVBQUEsRUFBQSxRQUFBLGVBQUEsUUFBQSxjQUFBLE1BQUEsWUFBQSxDQUFBO0FBQUEsSUFBaUcsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
