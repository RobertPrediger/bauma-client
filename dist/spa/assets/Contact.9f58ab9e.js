import { _ as _export_sfc, e as defineComponent, l as debug, n as ref, aL as onMounted, q as openBlock, s as createBlock, w as withCtx, f as createVNode, G as unref, D as QCardSection, x as QSeparator, U as QCard, I as QLayout, B as QHeader, H as QPageContainer, C as QPage, E as createBaseVNode, F as QInput, X as isRef, bp as hooks, Z as QScrollArea, $ as QList, a2 as createElementBlock, a3 as renderList, a4 as Fragment, a0 as QItem, a1 as QItemSection, v as createTextVNode, A as toDisplayString, a5 as QDialog, a as axios, M as _, a7 as normalizeClass, a6 as QItemLabel, J as pushScopeId, K as popScopeId } from "./index.8f8ca0f3.js";
import { Q as QTabs, a as QTab, b as QTabPanels, c as QTabPanel } from "./QTabPanels.46aa2434.js";
import { Q as QForm } from "./QForm.8c81555c.js";
import { g as globalView, N as NavBar } from "./NavBar.eb70e4d5.js";
import { G as Grid } from "./Grid.b4814aca.js";
import "./rtl.b51694b1.js";
import "./AgGridVue.c15bd737.js";
var Contact_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-204bd38a"), n = n(), popScopeId(), n);
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
  __name: "Contact",
  setup(__props) {
    const log = debug("app:contact");
    const init = {
      collName: "customer",
      stateName: "contact"
    };
    const globalView$1 = globalView(init);
    const {
      store: contactStore,
      data: contact,
      doSave,
      form
    } = globalView$1;
    const contactGrid = ref({});
    const tab = ref("general"), leads = ref([]), lead = ref({
      fahrzeug: {
        desc: ""
      }
    }), showContact = ref(false);
    async function afterSelect(selectedRows) {
      const rows = await axios.post("/custom/getLeadOfCust", selectedRows);
      log("selectRow", rows.data);
      lead.value = rows.data[0] || { fahrzeug: { desc: "" } };
      leads.value = rows.data;
      showContact.value = true;
    }
    function selectLead(item) {
      lead.value = item;
    }
    function replDesc(desc) {
      if (_.isString(desc))
        return desc.replace(/\+/g, ", ");
      return "";
    }
    function onContactHide() {
      showContact.value = false;
    }
    onMounted(async () => {
      contactStore.registerAction({ action: "afterSelect", target: "Contact", func: afterSelect });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "q-pa-sm" }, {
        default: withCtx(() => [
          createVNode(NavBar, {
            title: _ctx.$t("messages.LabelContact"),
            icon: "dashboard",
            stateName: "contact",
            state: unref(contactStore),
            type: "window"
          }, null, 8, ["title", "state"]),
          createVNode(QCard, null, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createVNode(Grid, {
                    gridName: "contactGrid",
                    gridOptions: unref(contactGrid),
                    stateName: "contact",
                    state: unref(contactStore),
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
            modelValue: unref(showContact),
            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => isRef(showContact) ? showContact.value = $event : null),
            onHide: onContactHide,
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
                        title: _ctx.$t("messages.ColContact"),
                        icon: "dashboard",
                        stateName: "contact",
                        state: unref(contactStore),
                        type: "dialog",
                        onClose: _cache[0] || (_cache[0] = ($event) => onContactHide())
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
                                                value: unref(hooks)(unref(form).dateFirst).format("dd.mm.yyyy"),
                                                "lazy-rules": "",
                                                dense: "",
                                                outlined: "",
                                                label: _ctx.$t("messages.LabelDateFirst"),
                                                disable: ""
                                              }, null, 8, ["value", "label"]),
                                              createVNode(QInput, {
                                                name: "city",
                                                value: unref(hooks)(unref(form).dateLast).format("dd.mm.yyyy"),
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
                                                              createTextVNode(toDisplayString(new Intl.NumberFormat("de", { style: "currency", currency: "EUR" }).format(unref(lead).fahrzeug.preis)), 1)
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
var Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-204bd38a"], ["__file", "Contact.vue"]]);
export { Contact as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdC45ZjU4YWI5ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0NvbnRhY3QudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8cS1wYWdlIGNsYXNzPVwicS1wYS1zbVwiPlxuXG4gICAgICAgIDxOYXZCYXIgOnRpdGxlPVwiJHQoJ21lc3NhZ2VzLkxhYmVsQ29udGFjdCcpXCIgaWNvbj1cImRhc2hib2FyZFwiIHN0YXRlTmFtZT1cImNvbnRhY3RcIiA6c3RhdGU9XCJjb250YWN0U3RvcmVcIiB0eXBlPVwid2luZG93XCI+PC9OYXZCYXI+XG4gICAgICAgIFxuICAgICAgICA8cS1jYXJkPlxuICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxHcmlkIGdyaWROYW1lPVwiY29udGFjdEdyaWRcIiA6Z3JpZE9wdGlvbnM9XCJjb250YWN0R3JpZFwiIHN0YXRlTmFtZT1cImNvbnRhY3RcIiA6c3RhdGU9XCJjb250YWN0U3RvcmVcIiB0eXBlPVwic2VydmVyXCIgb3JpZW50YXRpb249XCJwb3J0cmFpdFwiIC8+XG4gICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICAgICAgICA8cS1zZXBhcmF0b3IgLz5cbiAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgIFxuICAgICAgICA8cS1kaWFsb2cgdi1tb2RlbD1cInNob3dDb250YWN0XCIgQGhpZGU9XCJvbkNvbnRhY3RIaWRlXCIgIG5vLWJhY2tkcm9wLWRpc21pc3M+XG4gICAgICAgICAgICA8cS1sYXlvdXQgY29udGFpbmVyIHZpZXc9XCJsSGggbHBSIGxmZlwiIGNsYXNzPVwic2hhZG93LTIgcm91bmRlZCBkZXRhaWxXaW5kb3dcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxxLWhlYWRlciBlbGV2YXRlZCBjbGFzcz1cImJnLXByaW1hcnkgdGV4dC13aGl0ZVwiIGhlaWdodC1oaW50PVwiOThcIj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkJhciA6dGl0bGU9XCIkdCgnbWVzc2FnZXMuQ29sQ29udGFjdCcpXCIgaWNvbj1cImRhc2hib2FyZFwiIHN0YXRlTmFtZT1cImNvbnRhY3RcIiA6c3RhdGU9XCJjb250YWN0U3RvcmVcIiB0eXBlPVwiZGlhbG9nXCIgQGNsb3NlPVwib25Db250YWN0SGlkZSgpXCI+PC9OYXZCYXI+XG4gICAgICAgICAgICAgICAgPC9xLWhlYWRlcj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxxLXBhZ2UtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8cS1wYWdlPlxuICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1mb3JtIEBzdWJtaXQ9XCJkb1NhdmVcIiBjbGFzcz1cInEtZ3V0dGVyLXhzXCIgcmVmPVwicmVmQ3VzdG9tZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAtOTk5OXB4XCIvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHEtY29sLWd1dHRlci1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJzYWx1dGF0aW9uXCIgdi1tb2RlbD1cImZvcm0uc2FsdXRhdGlvblwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxTYWx1dGF0aW9uJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJ0aXRsZVwiIHYtbW9kZWw9XCJmb3JtLnRpdGxlXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbFRpdGxlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJmaXJzdE5hbWVcIiB2LW1vZGVsPVwiZm9ybS5maXJzdE5hbWVcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xGaXJzdG5hbWUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJzdXJOYW1lXCIgdi1tb2RlbD1cImZvcm0uc3VyTmFtZVwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbFN1cm5hbWUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJlbWFpbFwiIHYtbW9kZWw9XCJmb3JtLmVtYWlsXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sTWFpbCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cInRlbGVmb25cIiB2LW1vZGVsPVwiZm9ybS50ZWxlZm9uXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sUGhvbmUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJzdHJlZXRcIiB2LW1vZGVsPVwiZm9ybS5zdHJlZXRcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xTdHJlZXQnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHEtY29sLWd1dHRlci1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJ6aXBcIiB2LW1vZGVsPVwiZm9ybS56aXBcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbFppcCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiY2l0eVwiIHYtbW9kZWw9XCJmb3JtLmNpdHlcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbENpdHknKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS10YWJzIHYtbW9kZWw9XCJ0YWJcIiBjbGFzcz1cInRleHQtdGVhbFwiIGFsaWduPVwibGVmdFwiIGRlbnNlIG91dGxpbmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS10YWIgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsR2VuZXJhbCcpXCIgbmFtZT1cImdlbmVyYWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS10YWIgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsTGVhZCcpXCIgbmFtZT1cImxlYWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS10YWJzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFiLXBhbmVscyB2LW1vZGVsPVwidGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFiLXBhbmVsIG5hbWU9XCJnZW5lcmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiY2l0eVwiIDp2YWx1ZT1cIm1vbWVudChmb3JtLmRhdGVGaXJzdCkuZm9ybWF0KCdkZC5tbS55eXl5JylcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsRGF0ZUZpcnN0JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGUgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJjaXR5XCIgOnZhbHVlPVwibW9tZW50KGZvcm0uZGF0ZUxhc3QpLmZvcm1hdCgnZGQubW0ueXl5eScpXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbERhdGVMYXN0JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGUgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLXRhYi1wYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRhYi1wYW5lbCBuYW1lPVwibGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXNjcm9sbC1hcmVhIGNsYXNzPVwibGVhZC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1saXN0IGJvcmRlcmVkIHNlcGFyYXRvciBkZW5zZSBvdXRsaW5lZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSByaXBwbGUgdi1mb3I9XCJpdGVtIGluIGxlYWRzXCIgOmtleT1cIml0ZW0uX2lkXCIgQGNsaWNrPVwic2VsZWN0TGVhZChpdGVtKVwiIDpjbGFzcz1cImxlYWQuX2lkID09IGl0ZW0uX2lkID8gJ2JnLWJsdWUtMScgOiAnJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7IGl0ZW0uZmFocnpldWcubW9kZWwgfX0gKHt7IGl0ZW0uZ2Z6IH19KTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPnt7IGl0ZW0uZGF0ZSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1zY3JvbGwtYXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWxpc3QgYm9yZGVyZWQgc2VwYXJhdG9yIGRlbnNlIG91dGxpbmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoJ21lc3NhZ2VzLkNvbEhlcnN0JykgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyBsZWFkLmZhaHJ6ZXVnLmhlcnN0ZWxsZXIgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyAkdCgnbWVzc2FnZXMuQ29sQ2F0ZWdvcnknKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7IGxlYWQuZmFocnpldWcua2F0ZWdvcmllIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoJ21lc3NhZ2VzLkNvbE1vZGVsJykgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyBsZWFkLmZhaHJ6ZXVnLm1vZGVsIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoJ21lc3NhZ2VzLkNvbENvbG9yJykgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyBsZWFkLmZhaHJ6ZXVnLmZhcmJlIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoJ21lc3NhZ2VzLkNvbFByaWNlJykgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyBuZXcgSW50bC5OdW1iZXJGb3JtYXQoICdkZScsIHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnRVVSJyB9KS5mb3JtYXQoIGxlYWQuZmFocnpldWcucHJlaXMgKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KCdtZXNzYWdlcy5Db2xQb3dlcicpIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgbGVhZC5mYWhyemV1Zy5sZWlzdHVuZyB9fWtXPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoJ21lc3NhZ2VzLkxhYmVsRmlyc3RSZWdpc3QnKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7IGxlYWQuZmFocnpldWcuZXJzdHp1bGFzc3VuZyB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KCdtZXNzYWdlcy5Db2xEZXNjJykgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyByZXBsRGVzYyggbGVhZC5kZXNjcmlwdGlvbiApIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtdGFiLXBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS10YWItcGFuZWxzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L3EtcGFnZT5cbiAgICAgICAgICAgICAgICA8L3EtcGFnZS1jb250YWluZXI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvcS1sYXlvdXQ+XG4gICAgICAgIDwvcS1kaWFsb2c+XG4gICAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IEdsb2JhbFZpZXcgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbW1vbi9oZWxwZXJzL0dsb2JhbFZpZXcnO1xuaW1wb3J0IE5hdkJhciAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2QmFyLnZ1ZSc7IFxuaW1wb3J0IEdyaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL0dyaWQudnVlJztcblxuaW1wb3J0IF8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbW9tZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IGRlYnVnICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2RlYnVnJztcbmNvbnN0IGxvZyAgICAgICAgID0gZGVidWcoJ2FwcDpjb250YWN0Jyk7XG5cbmNvbnN0IGluaXQgICAgICAgID0geyBcbiAgICBjb2xsTmFtZTogICAgICAgJ2N1c3RvbWVyJyxcbiAgICBzdGF0ZU5hbWU6ICAgICAgJ2NvbnRhY3QnXG59O1xuY29uc3QgZ2xvYmFsVmlldyAgPSBHbG9iYWxWaWV3KCBpbml0ICk7XG5jb25zdCB7IFxuICAgIHN0b3JlOiAgICAgICAgICBjb250YWN0U3RvcmUsIFxuICAgIGRhdGE6ICAgICAgICAgICBjb250YWN0LCBcbiAgICBkb1NhdmUsXG4gICAgZm9ybSBcbn0gID0gZ2xvYmFsVmlldztcblxuY29uc3QgY29udGFjdEdyaWQgICAgICAgICAgICAgID0gcmVmKHt9KTtcblxuY29uc3QgXG4gICAgdGFiICAgICAgICAgICA9IHJlZiggJ2dlbmVyYWwnICksXG4gICAgbGVhZHMgICAgICAgICA9IHJlZihbXSksXG4gICAgbGVhZCAgICAgICAgICA9IHJlZih7XG4gICAgICAgIGZhaHJ6ZXVnOiAgICAge1xuICAgICAgICAgICAgZGVzYzogICAgICAgICAnJ1xuICAgICAgICB9XG4gICAgfSksXG4gICAgc2hvd0NvbnRhY3QgICA9IHJlZihmYWxzZSk7XG5cbi8vIHNlbGVjdCByb3dcbmFzeW5jIGZ1bmN0aW9uIGFmdGVyU2VsZWN0KCBzZWxlY3RlZFJvd3M6IGFueSApIHtcbiAgICBjb25zdCByb3dzICAgICAgICA9IGF3YWl0IGF4aW9zLnBvc3QoICcvY3VzdG9tL2dldExlYWRPZkN1c3QnLCBzZWxlY3RlZFJvd3MgKTtcbiAgICBcbiAgICBsb2coICdzZWxlY3RSb3cnLCByb3dzLmRhdGEgKTtcbiAgICBcbiAgICBsZWFkLnZhbHVlICAgICAgID0gcm93cy5kYXRhWzBdIHx8IHsgZmFocnpldWc6IHsgZGVzYzogJycgfSB9O1xuICAgIGxlYWRzLnZhbHVlICAgICAgPSByb3dzLmRhdGE7XG4gICAgXG4gICAgc2hvd0NvbnRhY3QudmFsdWUgICA9IHRydWU7XG59XG5cbi8vIHNlbGVjdCBsZWFkXG5mdW5jdGlvbiBzZWxlY3RMZWFkKCBpdGVtOiBhbnkgKSB7XG4gICAgbGVhZC52YWx1ZSAgICAgICA9IGl0ZW07XG59XG5cbmZ1bmN0aW9uIHJlcGxEZXNjKCBkZXNjOiBzdHJpbmcgKSB7XG4gICAgaWYgKCBfLmlzU3RyaW5nKGRlc2MpIClcbiAgICAgICAgcmV0dXJuIGRlc2MucmVwbGFjZSggL1xcKy9nLCAnLCAnICk7XG4gICAgcmV0dXJuICcnO1xufVxuXG4vLyBoaWRlIGRpYWxvZ1xuZnVuY3Rpb24gb25Db250YWN0SGlkZSgpIHtcbiAgICBzaG93Q29udGFjdC52YWx1ZSAgID0gZmFsc2U7XG59XG5cbm9uTW91bnRlZCggYXN5bmMoKSA9PiB7XG4gICAgY29udGFjdFN0b3JlLnJlZ2lzdGVyQWN0aW9uKCB7IGFjdGlvbjogJ2FmdGVyU2VsZWN0JywgdGFyZ2V0OiAnQ29udGFjdCcsIGZ1bmM6IGFmdGVyU2VsZWN0IH0gKTtcbn0pO1xuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCBcIi4uL192YXJpYWJsZXMuc2Nzc1wiO1xuXG4uZGV0YWlsV2luZG93IHtcbiAgICB3aWR0aDogICAgIGNhbGMoIDEwMHZ3IC0gMTMwcHggKTtcbiAgICBtYXgtd2lkdGg6ICAgICBjYWxjKCAxMDB2dyAtIDEzMHB4ICkgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6ICAgIGNhbGMoIDEwMHZoIC0gMTAwcHggKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmxlYWQtbGlzdCB7XG4gICAgaGVpZ2h0OiAgICBjYWxjKCAxMDB2aCAtIDEwMHB4IC0gNTBweCAtIDUwcHggLSA1MHB4ICk7XG59XG5cbjwvc3R5bGU+Il0sIm5hbWVzIjpbImdsb2JhbFZpZXciLCJHbG9iYWxWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0xBLFVBQUEsTUFBQSxNQUFBLGFBQUE7QUFFQSxVQUFBLE9BQUE7QUFBQSxNQUFvQixVQUFBO0FBQUEsTUFDQSxXQUFBO0FBQUEsSUFDQTtBQUVwQixVQUFBQSxlQUFBQyxXQUFBLElBQUE7QUFDQSxVQUFBO0FBQUEsTUFBTSxPQUFBO0FBQUEsTUFDYyxNQUFBO0FBQUEsTUFDQTtBQUFBLE1BQ2hCO0FBQUEsSUFDQSxJQUFBRDtBQUdKLFVBQUEsY0FBQSxJQUFBLENBQUEsQ0FBQTtBQUVBLFVBQUEsTUFBQSxJQUFBLFNBQUEsR0FBQSxRQUFBLElBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxJQUFBO0FBQUEsTUFHd0IsVUFBQTtBQUFBLFFBQ0YsTUFBQTtBQUFBLE1BQ0k7QUFBQSxJQUNsQixDQUFBLEdBQUEsY0FBQSxJQUFBLEtBQUE7QUFLUixtQkFBQSxZQUFBLGNBQUE7QUFDSSxZQUFBLE9BQUEsTUFBQSxNQUFBLEtBQUEseUJBQUEsWUFBQTtBQUVBLFVBQUEsYUFBQSxLQUFBLElBQUE7QUFFQSxXQUFBLFFBQUEsS0FBQSxLQUFBLE1BQUEsRUFBQSxVQUFBLEVBQUEsTUFBQSxHQUFBO0FBQ0EsWUFBQSxRQUFBLEtBQUE7QUFFQSxrQkFBQSxRQUFBO0FBQUEsSUFBc0I7QUFJMUIsYUFBQSxXQUFBLE1BQUE7QUFDSSxXQUFBLFFBQUE7QUFBQSxJQUFtQjtBQUd2QixhQUFBLFNBQUEsTUFBQTtBQUNJLFVBQUEsRUFBQSxTQUFBLElBQUE7QUFDSSxlQUFBLEtBQUEsUUFBQSxPQUFBLElBQUE7QUFDSixhQUFBO0FBQUEsSUFBTztBQUlYLGFBQUEsZ0JBQUE7QUFDSSxrQkFBQSxRQUFBO0FBQUEsSUFBc0I7QUFHMUIsY0FBQSxZQUFBO0FBQ0ksbUJBQUEsZUFBQSxFQUFBLFFBQUEsZUFBQSxRQUFBLFdBQUEsTUFBQSxZQUFBLENBQUE7QUFBQSxJQUE2RixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
