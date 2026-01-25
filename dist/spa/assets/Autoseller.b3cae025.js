import { _ as _export_sfc, e as defineComponent, l as debug, L as useI18n, O as useDataStore, n as ref, R as storeToRefs, aL as onMounted, q as openBlock, s as createBlock, w as withCtx, f as createVNode, G as unref, E as createBaseVNode, D as QCardSection, x as QSeparator, U as QCard, A as toDisplayString, Z as QScrollArea, F as QInput, X as isRef, $ as QList, a2 as createElementBlock, a3 as renderList, a4 as Fragment, C as QPage, bg as Plugin$2, M as _, a0 as QItem, a1 as QItemSection, a6 as QItemLabel, v as createTextVNode, a7 as normalizeClass } from "./index.8f8ca0f3.js";
import { Q as QTabs, a as QTab, b as QTabPanels, c as QTabPanel } from "./QTabPanels.46aa2434.js";
import { Q as QImg } from "./QImg.806212bd.js";
import { Q as QForm } from "./QForm.8c81555c.js";
import { g as globalView, N as NavBar } from "./NavBar.eb70e4d5.js";
import { G as Grid } from "./Grid.b4814aca.js";
import "./rtl.b51694b1.js";
import "./AgGridVue.c15bd737.js";
var Autoseller_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "row" };
const _hoisted_2 = { class: "col" };
const _hoisted_3 = { class: "row" };
const _hoisted_4 = { class: "col" };
const _hoisted_5 = { class: "text-h6" };
const _hoisted_6 = { class: "row q-col-gutter-md" };
const _hoisted_7 = { class: "col-4" };
const _hoisted_8 = { class: "col-8" };
const _hoisted_9 = { class: "row q-col-gutter-md" };
const _hoisted_10 = { class: "col-6" };
const _hoisted_11 = { class: "col-6" };
const _hoisted_12 = { class: "row" };
const _sfc_main = defineComponent({
  __name: "Autoseller",
  setup(__props) {
    const log = debug("app:autoseller");
    useI18n();
    const carinfoStore = useDataStore("carinfo", "carInfo");
    const init = {
      collName: "autoseller",
      stateName: "autoseller",
      defaultForm: {
        fahrzeug: {}
      }
    };
    const globalView$1 = globalView(init);
    const {
      store: autosellerStore,
      data: autoseller,
      doSave,
      form
    } = globalView$1;
    const autosellerGrid = ref({});
    const carList = ref([]), description = ref([]), tab = ref("rieur");
    const { data: carinfos } = storeToRefs(carinfoStore);
    function afterSelect() {
      Plugin$2.show();
      const list = [];
      _.forEach(form.value.infos, (entry, key) => {
        let desc = key, type = "string";
        if (carinfos.value[key]) {
          desc = carinfos.value[key].desc;
          type = carinfos.value[key].type;
        }
        switch (type) {
          case "boolean":
            entry = entry === "0" ? "Ja" : "Nein";
            break;
        }
        list.push({ key, entry, desc, type });
      });
      carList.value = list;
      log("list", list);
      if (form.value.description)
        description.value = form.value.description.split("|").map((item) => {
          item = item.trim();
          const index = item.indexOf(" "), key = item.substr(0, index), text = item.substr(index + 1);
          return {
            key,
            text
          };
        });
      else
        description.value = [];
      Plugin$2.hide();
    }
    carinfoStore.getStore();
    onMounted(async () => {
      autosellerStore.registerAction({ action: "afterSelect", target: "Autoseller", func: afterSelect });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          createVNode(NavBar, {
            title: _ctx.$t("messages.LabelAutoseller"),
            icon: "fas fa-car",
            stateName: "autoseller",
            state: unref(autosellerStore),
            navshow: { add: false, save: false, remove: false }
          }, null, 8, ["title", "state"]),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QCard, null, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createVNode(Grid, {
                        gridName: "autosellerGrid",
                        gridOptions: unref(autosellerGrid),
                        stateName: "autosellers",
                        state: unref(autosellerStore),
                        type: "server"
                      }, null, 8, ["gridOptions", "state"])
                    ]),
                    _: 1
                  }),
                  createVNode(QSeparator)
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(QCard, { class: "form" }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_5, toDisplayString(_ctx.$t("messages.LabelAutoseller")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(QSeparator),
                  createVNode(QForm, {
                    class: "q-gutter-xs",
                    ref: "refAutoseller"
                  }, {
                    default: withCtx(() => [
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_6, [
                            createBaseVNode("div", _hoisted_7, [
                              createVNode(QScrollArea, {
                                class: "scroll-left",
                                visible: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(QInput, {
                                    name: "gfz",
                                    modelValue: unref(form).gfz,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).gfz = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.LabelGfzNumber"),
                                    hint: ""
                                  }, null, 8, ["modelValue", "label"]),
                                  createVNode(QInput, {
                                    name: "hersteller",
                                    modelValue: unref(form).fahrzeug.branch,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).fahrzeug.branch = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.LabelBranch"),
                                    hint: ""
                                  }, null, 8, ["modelValue", "label"]),
                                  createVNode(QInput, {
                                    name: "hersteller",
                                    modelValue: unref(form).fahrzeug.hersteller,
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).fahrzeug.hersteller = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.LabelBrand"),
                                    hint: ""
                                  }, null, 8, ["modelValue", "label"]),
                                  createVNode(QInput, {
                                    name: "kategorie",
                                    modelValue: unref(form).fahrzeug.kategorie,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).fahrzeug.kategorie = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.LabelCategory"),
                                    hint: ""
                                  }, null, 8, ["modelValue", "label"]),
                                  createVNode(QInput, {
                                    name: "model",
                                    modelValue: unref(form).fahrzeug.model,
                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(form).fahrzeug.model = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.ColModel"),
                                    hint: ""
                                  }, null, 8, ["modelValue", "label"]),
                                  createVNode(QInput, {
                                    name: "farbe",
                                    modelValue: unref(form).fahrzeug.farbe,
                                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(form).fahrzeug.farbe = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.LabelColor"),
                                    hint: ""
                                  }, null, 8, ["modelValue", "label"]),
                                  createVNode(QInput, {
                                    name: "erstzulassung",
                                    modelValue: unref(form).fahrzeug.erstzulassung,
                                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(form).fahrzeug.erstzulassung = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.LabelFirstRegist"),
                                    hint: ""
                                  }, null, 8, ["modelValue", "label"])
                                ]),
                                _: 1
                              })
                            ]),
                            createBaseVNode("div", _hoisted_8, [
                              createVNode(QCard, { bordered: "" }, {
                                default: withCtx(() => [
                                  createVNode(QTabs, {
                                    modelValue: unref(tab),
                                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => isRef(tab) ? tab.value = $event : null),
                                    class: "text-teal",
                                    align: "left",
                                    dense: "",
                                    outlined: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QTab, {
                                        label: _ctx.$t("messages.LabelCarinfo"),
                                        name: "rieur"
                                      }, null, 8, ["label"]),
                                      createVNode(QTab, {
                                        label: _ctx.$t("messages.LabelImages"),
                                        name: "image"
                                      }, null, 8, ["label"])
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue"]),
                                  createVNode(QTabPanels, {
                                    modelValue: unref(tab),
                                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => isRef(tab) ? tab.value = $event : null),
                                    class: "tab"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QTabPanel, { name: "rieur" }, {
                                        default: withCtx(() => [
                                          createBaseVNode("div", _hoisted_9, [
                                            createBaseVNode("div", _hoisted_10, [
                                              createVNode(QScrollArea, { class: "scroll-right" }, {
                                                default: withCtx(() => [
                                                  createVNode(QList, {
                                                    bordered: "",
                                                    separator: "",
                                                    dense: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(carList), (item) => {
                                                        return openBlock(), createBlock(QItem, {
                                                          key: item.key
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(QItemSection, { class: "col-6" }, {
                                                              default: withCtx(() => [
                                                                createVNode(QItemLabel, null, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(item.desc), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(QItemSection, {
                                                              class: normalizeClass(["col-6", `type-${item.type}`])
                                                            }, {
                                                              default: withCtx(() => [
                                                                item.type === "number" ? (openBlock(), createBlock(QItemLabel, { key: 0 }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(new Intl.NumberFormat().format(item.entry)), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)) : item.type === "decimal" ? (openBlock(), createBlock(QItemLabel, { key: 1 }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(new Intl.NumberFormat("de", { style: "currency", currency: "EUR" }).format(item.entry)), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)) : (openBlock(), createBlock(QItemLabel, { key: 2 }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(item.entry), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024))
                                                              ]),
                                                              _: 2
                                                            }, 1032, ["class"])
                                                          ]),
                                                          _: 2
                                                        }, 1024);
                                                      }), 128))
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            createBaseVNode("div", _hoisted_11, [
                                              createVNode(QScrollArea, { class: "scroll-right" }, {
                                                default: withCtx(() => [
                                                  createVNode(QList, {
                                                    bordered: "",
                                                    separator: "",
                                                    dense: "",
                                                    outlined: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(description), (item) => {
                                                        return openBlock(), createBlock(QItem, {
                                                          key: item.key
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(QItemSection, { class: "col-3" }, {
                                                              default: withCtx(() => [
                                                                createVNode(QItemLabel, null, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(item.key), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(QItemSection, { class: "col-9" }, {
                                                              default: withCtx(() => [
                                                                createVNode(QItemLabel, {
                                                                  innerHTML: item.text
                                                                }, null, 8, ["innerHTML"])
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024);
                                                      }), 128))
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
                                      }),
                                      createVNode(QTabPanel, { name: "image" }, {
                                        default: withCtx(() => [
                                          createVNode(QScrollArea, { class: "scroll-right" }, {
                                            default: withCtx(() => [
                                              createBaseVNode("div", _hoisted_12, [
                                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(form).img, (image) => {
                                                  return openBlock(), createElementBlock("div", {
                                                    class: "col-3",
                                                    key: image.name
                                                  }, [
                                                    createVNode(QImg, {
                                                      src: image.src
                                                    }, null, 8, ["src"])
                                                  ]);
                                                }), 128))
                                              ])
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
                              })
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 512)
                ]),
                _: 1
              })
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
var Autoseller = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b88b3788"], ["__file", "Autoseller.vue"]]);
export { Autoseller as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0b3NlbGxlci5iM2NhZTAyNS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0F1dG9zZWxsZXIudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8cS1wYWdlPlxuXG4gICAgICAgIDxOYXZCYXIgOnRpdGxlPVwiJHQoJ21lc3NhZ2VzLkxhYmVsQXV0b3NlbGxlcicpXCIgaWNvbj1cImZhcyBmYS1jYXJcIiBzdGF0ZU5hbWU9XCJhdXRvc2VsbGVyXCIgOnN0YXRlPVwiYXV0b3NlbGxlclN0b3JlXCIgOm5hdnNob3c9XCJ7IGFkZDogZmFsc2UsIHNhdmU6IGZhbHNlLCByZW1vdmU6IGZhbHNlIH1cIiAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8cS1jYXJkPlxuICAgICAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBncmlkTmFtZT1cImF1dG9zZWxsZXJHcmlkXCIgOmdyaWRPcHRpb25zPVwiYXV0b3NlbGxlckdyaWRcIiBzdGF0ZU5hbWU9XCJhdXRvc2VsbGVyc1wiIDpzdGF0ZT1cImF1dG9zZWxsZXJTdG9yZVwiIHR5cGU9XCJzZXJ2ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIC8+XG4gICAgICAgICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxxLWNhcmQgY2xhc3M9XCJmb3JtXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj57eyAkdCgnbWVzc2FnZXMuTGFiZWxBdXRvc2VsbGVyJykgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxxLXNlcGFyYXRvciAvPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHEtZm9ybSBjbGFzcz1cInEtZ3V0dGVyLXhzXCIgcmVmPVwicmVmQXV0b3NlbGxlclwiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtc2Nyb2xsLWFyZWEgY2xhc3M9XCJzY3JvbGwtbGVmdFwiIHZpc2libGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cImdmelwiIHYtbW9kZWw9XCJmb3JtLmdmelwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsR2Z6TnVtYmVyJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiaGVyc3RlbGxlclwiIHYtbW9kZWw9XCJmb3JtLmZhaHJ6ZXVnLmJyYW5jaFwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsQnJhbmNoJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiaGVyc3RlbGxlclwiIHYtbW9kZWw9XCJmb3JtLmZhaHJ6ZXVnLmhlcnN0ZWxsZXJcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbEJyYW5kJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwia2F0ZWdvcmllXCIgdi1tb2RlbD1cImZvcm0uZmFocnpldWcua2F0ZWdvcmllXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxDYXRlZ29yeScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cIm1vZGVsXCIgdi1tb2RlbD1cImZvcm0uZmFocnpldWcubW9kZWxcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xNb2RlbCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cImZhcmJlXCIgdi1tb2RlbD1cImZvcm0uZmFocnpldWcuZmFyYmVcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbENvbG9yJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiZXJzdHp1bGFzc3VuZ1wiIHYtbW9kZWw9XCJmb3JtLmZhaHJ6ZXVnLmVyc3R6dWxhc3N1bmdcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbEZpcnN0UmVnaXN0JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1zY3JvbGwtYXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWNhcmQgYm9yZGVyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFicyB2LW1vZGVsPVwidGFiXCIgY2xhc3M9XCJ0ZXh0LXRlYWxcIiBhbGlnbj1cImxlZnRcIiBkZW5zZSBvdXRsaW5lZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFiIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbENhcmluZm8nKVwiIG5hbWU9XCJyaWV1clwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRhYiA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxJbWFnZXMnKVwiIG5hbWU9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLXRhYnM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS10YWItcGFuZWxzIHYtbW9kZWw9XCJ0YWJcIiBjbGFzcz1cInRhYlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRhYi1wYW5lbCBuYW1lPVwicmlldXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1zY3JvbGwtYXJlYSBjbGFzcz1cInNjcm9sbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtbGlzdCBib3JkZXJlZCBzZXBhcmF0b3IgZGVuc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbSB2LWZvcj1cIml0ZW0gaW4gY2FyTGlzdFwiIDprZXk9XCJpdGVtLmtleVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyBpdGVtLmRlc2MgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cImNvbC02XCIgOmNsYXNzPVwiYHR5cGUtJHtpdGVtLnR5cGV9YFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCB2LWlmPVwiaXRlbS50eXBlID09PSAnbnVtYmVyJ1wiPnt7IG5ldyBJbnRsLk51bWJlckZvcm1hdCgpLmZvcm1hdCggaXRlbS5lbnRyeSApIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIHYtZWxzZS1pZj1cIml0ZW0udHlwZSA9PT0gJ2RlY2ltYWwnXCI+e3sgbmV3IEludGwuTnVtYmVyRm9ybWF0KCAnZGUnLCB7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ0VVUicgfSkuZm9ybWF0KCBpdGVtLmVudHJ5ICkgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgdi1lbHNlPnt7IGl0ZW0uZW50cnkgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Etc2Nyb2xsLWFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtc2Nyb2xsLWFyZWEgY2xhc3M9XCJzY3JvbGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWxpc3QgYm9yZGVyZWQgc2VwYXJhdG9yIGRlbnNlIG91dGxpbmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0gdi1mb3I9XCJpdGVtIGluIGRlc2NyaXB0aW9uXCIgOmtleT1cIml0ZW0ua2V5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7IGl0ZW0ua2V5IH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cImNvbC05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIHYtaHRtbD1cIml0ZW0udGV4dFwiPjwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1zY3JvbGwtYXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtdGFiLXBhbmVsPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFiLXBhbmVsIG5hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtc2Nyb2xsLWFyZWEgY2xhc3M9XCJzY3JvbGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiIHYtZm9yPVwiaW1hZ2Ugb2YgZm9ybS5pbWdcIiA6a2V5PVwiaW1hZ2UubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW1nIDpzcmM9XCJpbWFnZS5zcmNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1zY3JvbGwtYXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLXRhYi1wYW5lbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS10YWItcGFuZWxzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtZm9ybT5cbiAgICAgICAgICAgICAgICA8L3EtY2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgR2xvYmFsVmlldyAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29tbW9uL2hlbHBlcnMvR2xvYmFsVmlldyc7XG5pbXBvcnQgTmF2QmFyICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXIudnVlJzsgXG5pbXBvcnQgR3JpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvR3JpZC52dWUnO1xuXG5pbXBvcnQgXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHVzZUkxOG4gfSAgICAgICAgICAgICAgICAgICAgICBmcm9tICd2dWUtaTE4bic7XG5cbmltcG9ydCB7IHVzZURhdGFTdG9yZSB9ICAgICAgICAgICAgICAgICBmcm9tICdzcmMvc3RvcmVzL2RhdGEuc3RvcmUnO1xuXG5pbXBvcnQgZGVidWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnZGVidWcnO1xuY29uc3QgbG9nICAgICAgICAgPSBkZWJ1ZygnYXBwOmF1dG9zZWxsZXInKTtcblxuY29uc3QgeyB0IH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gdXNlSTE4bigpO1xuXG5jb25zdCBjYXJpbmZvU3RvcmUgICAgICAgICAgICAgICAgICAgICAgPSB1c2VEYXRhU3RvcmUoICdjYXJpbmZvJywgJ2NhckluZm8nICk7XG5cbmNvbnN0IGluaXQgICAgICAgID0geyBcbiAgICBjb2xsTmFtZTogICAgICAgJ2F1dG9zZWxsZXInLCBcbiAgICBzdGF0ZU5hbWU6ICAgICAgJ2F1dG9zZWxsZXInLFxuICAgIGRlZmF1bHRGb3JtOiAgICB7XG4gICAgICAgIGZhaHJ6ZXVnOiAgICAgICB7fVxuICAgIH1cbn07XG5jb25zdCBnbG9iYWxWaWV3ICA9IEdsb2JhbFZpZXcoIGluaXQgKTtcbmNvbnN0IHsgXG4gICAgc3RvcmU6ICAgICAgICAgIGF1dG9zZWxsZXJTdG9yZSwgXG4gICAgZGF0YTogICAgICAgICAgIGF1dG9zZWxsZXIsIFxuICAgIGRvU2F2ZSxcbiAgICBmb3JtIFxufSAgPSBnbG9iYWxWaWV3O1xuXG5jb25zdCBhdXRvc2VsbGVyR3JpZCAgICAgICAgICAgICAgPSByZWYoe30pO1xuXG5jb25zdCBcbiAgICBjYXJMaXN0ICAgICAgICAgICA9IHJlZihbXSksXG4gICAgZGVzY3JpcHRpb24gICAgICAgPSByZWYoW10pLFxuICAgIHRhYiAgICAgICAgICAgICAgID0gcmVmKCdyaWV1cicpO1xuXG5jb25zdCB7IGRhdGE6IGNhcmluZm9zIH0gICAgICAgID0gc3RvcmVUb1JlZnMoIGNhcmluZm9TdG9yZSApO1xuXG5mdW5jdGlvbiBhZnRlclNlbGVjdCgpIHtcbiAgICBMb2FkaW5nLnNob3coKTtcblxuICAgIGNvbnN0IGxpc3Q6IGFueSAgICAgICAgPSBbXTtcbiAgICBcbiAgICBfLmZvckVhY2goIGZvcm0udmFsdWUuaW5mb3MsICggZW50cnksIGtleSApID0+IHtcbiAgICAgICAgbGV0IGRlc2MgICAgPSBrZXksXG4gICAgICAgICAgICB0eXBlICAgID0gJ3N0cmluZyc7XG4gICAgICAgIFxuICAgICAgICBpZiAoY2FyaW5mb3MudmFsdWVbIGtleSBdKSB7XG4gICAgICAgICAgICBkZXNjICAgID0gY2FyaW5mb3MudmFsdWVbIGtleSBdLmRlc2M7XG4gICAgICAgICAgICB0eXBlICAgID0gY2FyaW5mb3MudmFsdWVbIGtleSBdLnR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCggdHlwZSApIHtcbiAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgICAgIGVudHJ5ICAgICAgICA9IGVudHJ5ID09PSAnMCcgPyAnSmEnIDogJ05laW4nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsaXN0LnB1c2goIHsga2V5LCBlbnRyeSwgZGVzYywgdHlwZSB9ICk7XG4gICAgfSk7XG4gICAgXG4gICAgY2FyTGlzdC52YWx1ZSAgICA9IGxpc3Q7XG4gICAgbG9nKCAnbGlzdCcsIGxpc3QgKTtcbiAgICBcbiAgICBpZiAoZm9ybS52YWx1ZS5kZXNjcmlwdGlvbilcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgICA9IGZvcm0udmFsdWUuZGVzY3JpcHRpb24uc3BsaXQoJ3wnKS5tYXAoIChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGl0ZW0gICAgICAgID0gaXRlbS50cmltKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IFxuICAgICAgICAgICAgICAgIGluZGV4ICAgICAgID0gaXRlbS5pbmRleE9mKCcgJyksXG4gICAgICAgICAgICAgICAga2V5ICAgICAgICAgPSBpdGVtLnN1YnN0ciggMCwgaW5kZXggKSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICAgICA9IGl0ZW0uc3Vic3RyKCBpbmRleCArIDEgKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIGVsc2VcbiAgICAgICAgZGVzY3JpcHRpb24udmFsdWUgICA9IFtdO1xuXG4gICAgTG9hZGluZy5oaWRlKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbG9hZCgpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyByZWFkIGxpc3RcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KCAnL2N1c3RvbS9hdXRvc2VsbGVyUmVsb2FkJyApO1xuICAgICAgICBcbiAgICAgICAgLy8gcmVsb2FkIGxpc3RcbiAgICAgICAgYXdhaXQgYXV0b3NlbGxlclN0b3JlLmdldFN0b3JlKCk7XG5cbiAgICAgICAgTm90aWZ5LmNyZWF0ZSh7XG4gICAgICAgICAgICBtZXNzYWdlOiAgICAgICAgdCgnbWVzc2FnZXMuVGV4dERhdGFSZWxvYWRlZCcpLFxuICAgICAgICAgICAgY29sb3I6ICAgICAgICAgICdncmVlbi05JyxcbiAgICAgICAgICAgIGljb246ICAgICAgICAgICAnZG9uZScsXG4gICAgICAgICAgICBwb3NpdGlvbjogICAgICAgJ3RvcC1yaWdodCcsXG4gICAgICAgICAgICB0aW1lb3V0OiAgICAgICAgMTAwMFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2goIGVycm9yICkge1xuICAgICAgICBsb2coICdFUlJPUiBjcmVhdGVkJywgZXJyb3IgKTtcbiAgICAgICAgTm90aWZ5LmNyZWF0ZSh7XG4gICAgICAgICAgICBtZXNzYWdlOiAgICAgICAgZXJyb3IuYm9keSB8fCBlcnJvci5zdGF0dXNUZXh0IHx8IGVycm9yLFxuICAgICAgICAgICAgY29sb3I6ICAgICAgICAgICduZWdhdGl2ZScsXG4gICAgICAgICAgICBpY29uOiAgICAgICAgICAgJ3JlcG9ydF9wcm9ibGVtJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAgICAgICAndG9wLXJpZ2h0JyxcbiAgICAgICAgICAgIHRpbWVvdXQ6ICAgICAgICA1MDAwXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2FyaW5mb1N0b3JlLmdldFN0b3JlKCk7XG5cbm9uTW91bnRlZCggYXN5bmMoKSA9PiB7XG4gICAgYXV0b3NlbGxlclN0b3JlLnJlZ2lzdGVyQWN0aW9uKCB7IGFjdGlvbjogJ2FmdGVyU2VsZWN0JywgdGFyZ2V0OiAnQXV0b3NlbGxlcicsIGZ1bmM6IGFmdGVyU2VsZWN0IH0gKTtcbn0pO1xuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuLmZvcm0ge1xuICAgIGhlaWdodDogICAgY2FsYyggMTAwdmggLSA0MDBweCAtIDk1cHggLSA3MHB4ICk7XG4gICAgd2lkdGg6ICAgICAgICAgMTAwJTtcbn1cblxuLnNjcm9sbC1sZWZ0IHtcbiAgICBoZWlnaHQ6ICAgIGNhbGMoIDEwMHZoIC0gNDAwcHggLSAxMDBweCAtIDk1cHggLSA3MHB4ICk7XG59XG5cbi50YWIge1xuICAgIGhlaWdodDogICAgY2FsYyggMTAwdmggLSA0MDBweCAtIDEzMHB4IC0gOTVweCAtIDcwcHggKTtcbn1cblxuLnNjcm9sbC1yaWdodCB7XG4gICAgaGVpZ2h0OiAgICBjYWxjKCAxMDB2aCAtIDQwMHB4IC0gMTUzcHggLSA5NXB4IC0gNzBweCApO1xufVxuXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbImdsb2JhbFZpZXciLCJHbG9iYWxWaWV3IiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0pBLFVBQUEsTUFBQSxNQUFBLGdCQUFBO0FBRUEsWUFBQTtBQUVBLFVBQUEsZUFBQSxhQUFBLFdBQUEsU0FBQTtBQUVBLFVBQUEsT0FBQTtBQUFBLE1BQW9CLFVBQUE7QUFBQSxNQUNBLFdBQUE7QUFBQSxNQUNBLGFBQUE7QUFBQSxRQUNBLFVBQUEsQ0FBQTtBQUFBLE1BQ0s7QUFBQSxJQUNyQjtBQUVKLFVBQUFBLGVBQUFDLFdBQUEsSUFBQTtBQUNBLFVBQUE7QUFBQSxNQUFNLE9BQUE7QUFBQSxNQUNjLE1BQUE7QUFBQSxNQUNBO0FBQUEsTUFDaEI7QUFBQSxJQUNBLElBQUFEO0FBR0osVUFBQSxpQkFBQSxJQUFBLENBQUEsQ0FBQTtBQUVBLFVBQUEsVUFBQSxJQUFBLENBQUEsQ0FBQSxHQUFBLGNBQUEsSUFBQSxDQUFBLENBQUEsR0FBQSxNQUFBLElBQUEsT0FBQTtBQUtBLFVBQUEsRUFBQSxNQUFBLFNBQUEsSUFBQSxZQUFBLFlBQUE7QUFFQSxhQUFBLGNBQUE7QUFDSUUsZUFBQSxLQUFBO0FBRUEsWUFBQSxPQUFBLENBQUE7QUFFQSxRQUFBLFFBQUEsS0FBQSxNQUFBLE9BQUEsQ0FBQSxPQUFBLFFBQUE7QUFDSSxZQUFBLE9BQUEsS0FBQSxPQUFBO0FBR0EsWUFBQSxTQUFBLE1BQUEsTUFBQTtBQUNJLGlCQUFBLFNBQUEsTUFBQSxLQUFBO0FBQ0EsaUJBQUEsU0FBQSxNQUFBLEtBQUE7QUFBQSxRQUFnQztBQUdwQyxnQkFBQTtBQUFBLGVBQVE7QUFFQSxvQkFBQSxVQUFBLE1BQUEsT0FBQTtBQUNBO0FBQUE7QUFHUixhQUFBLEtBQUEsRUFBQSxLQUFBLE9BQUEsTUFBQSxLQUFBLENBQUE7QUFBQSxNQUFzQyxDQUFBO0FBRzFDLGNBQUEsUUFBQTtBQUNBLFVBQUEsUUFBQSxJQUFBO0FBRUEsVUFBQSxLQUFBLE1BQUE7QUFDSSxvQkFBQSxRQUFBLEtBQUEsTUFBQSxZQUFBLE1BQUEsR0FBQSxFQUFBLElBQUEsQ0FBQSxTQUFBO0FBQ0ksaUJBQUEsS0FBQTtBQUVBLGdCQUFBLFFBQUEsS0FBQSxRQUFBLEdBQUEsR0FBQSxNQUFBLEtBQUEsT0FBQSxHQUFBLEtBQUEsR0FBQSxPQUFBLEtBQUEsT0FBQSxRQUFBLENBQUE7QUFLQSxpQkFBQTtBQUFBLFlBQU87QUFBQSxZQUNIO0FBQUEsVUFDQTtBQUFBLFFBQ0osQ0FBQTtBQUFBO0FBR0osb0JBQUEsUUFBQTtBQUVKQSxlQUFBLEtBQUE7QUFBQSxJQUFhO0FBK0JqQixpQkFBQSxTQUFBO0FBRUEsY0FBQSxZQUFBO0FBQ0ksc0JBQUEsZUFBQSxFQUFBLFFBQUEsZUFBQSxRQUFBLGNBQUEsTUFBQSxZQUFBLENBQUE7QUFBQSxJQUFtRyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
