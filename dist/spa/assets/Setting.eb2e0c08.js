import { Q as QTabs, a as QTab, b as QTabPanels, c as QTabPanel } from "./QTabPanels.46aa2434.js";
import { _ as _export_sfc, e as defineComponent, O as useDataStore, l as debug, n as ref, ah as computed, M as _, q as openBlock, s as createBlock, w as withCtx, f as createVNode, G as unref, D as QCardSection, X as isRef, E as createBaseVNode, F as QInput, a0 as QItem, by as mergeProps, bz as toHandlers, a1 as QItemSection, a6 as QItemLabel, A as toDisplayString, v as createTextVNode, U as QCard, bB as QCheckbox, V as withDirectives, bx as vShow, C as QPage } from "./index.8f8ca0f3.js";
import { Q as QSelect } from "./QSelect.72364726.js";
import { Q as QForm } from "./QForm.8c81555c.js";
import { g as globalView, N as NavBar } from "./NavBar.eb70e4d5.js";
import "./rtl.b51694b1.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("input", {
  type: "submit",
  style: { "position": "absolute", "left": "-9999px" }
}, null, -1);
const _hoisted_2 = { class: "row q-col-gutter-md" };
const _hoisted_3 = { class: "col-8 col-md-4" };
const _hoisted_4 = { class: "col-8 col-md-4" };
const _hoisted_5 = { class: "col-4" };
const _hoisted_6 = { class: "row q-col-gutter-md" };
const _hoisted_7 = { class: "col-8 col-md-4" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "col-8 col-md-4" }, null, -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "col-4" }, null, -1);
const _hoisted_10 = { class: "row" };
const _hoisted_11 = { class: "text-h6" };
const _hoisted_12 = { class: "row" };
const _hoisted_13 = { class: "offset-1 col" };
const _hoisted_14 = { class: "row" };
const _hoisted_15 = { class: "offset-1 col" };
const _hoisted_16 = { class: "row" };
const _hoisted_17 = { class: "offset-1 col" };
const _hoisted_18 = { class: "row" };
const _hoisted_19 = { class: "offset-1 col" };
const _hoisted_20 = { class: "row" };
const _hoisted_21 = { class: "offset-1 col" };
const _hoisted_22 = { class: "row" };
const _hoisted_23 = { class: "offset-1 col" };
const _sfc_main = defineComponent({
  __name: "Setting",
  setup(__props) {
    const mailtemplatesStore = useDataStore("mailtemplates", "mailtemplates");
    const companiesStore = useDataStore("companies", "companies");
    const log = debug("app:setting");
    const init = {
      collName: "config",
      stateName: "config",
      defaultForm: {
        processAnswerMail: false,
        processAnswerExpose: false,
        processDoTeamMail: false,
        processMoveMail: false,
        processMoveMailError: false,
        processOtherMail: false
      }
    };
    const globalView$1 = globalView(init);
    const {
      store: configStore,
      data: config,
      doSave,
      form
    } = globalView$1;
    const tab = ref("global"), companies = ref([]), templates = ref([]);
    const templatesMail = computed(() => templates.value.filter((temp) => temp.type === "Mail")), templatesPDF = computed(() => templates.value.filter((temp) => temp.type === "PDF"));
    Promise.all([
      configStore.getStore(),
      companiesStore.getStore(),
      mailtemplatesStore.getStore()
    ]).then((values) => {
      form.value = _.defaults(values[0].data[0], init.defaultForm);
      configStore.setRecord(form.value);
      log("CONFIG", form.value);
      companies.value = values[1].data.map((item) => {
        return {
          value: item._id,
          label: item.name,
          caption: `${item.street}, ${item.zip} ${item.city}`
        };
      });
      templates.value = values[2].data.map((item) => {
        return {
          value: item._id,
          label: item.name,
          caption: item.desc,
          type: item.type
        };
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "q-pa-sm" }, {
        default: withCtx(() => [
          createVNode(NavBar, {
            title: _ctx.$t("messages.LabelSettings"),
            icon: "settings",
            stateName: "config",
            state: unref(configStore)
          }, null, 8, ["title", "state"]),
          createVNode(QCard, null, {
            default: withCtx(() => [
              createVNode(QForm, {
                onSubmit: unref(doSave),
                ref: "refConfig"
              }, {
                default: withCtx(() => [
                  _hoisted_1,
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createVNode(QTabs, {
                        modelValue: unref(tab),
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(tab) ? tab.value = $event : null),
                        class: "text-teal",
                        align: "left",
                        dense: "",
                        outlined: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(QTab, {
                            label: _ctx.$t("messages.LabelGlobal"),
                            name: "global"
                          }, null, 8, ["label"]),
                          createVNode(QTab, {
                            label: _ctx.$t("messages.ColMail"),
                            name: "mail"
                          }, null, 8, ["label"]),
                          createVNode(QTab, {
                            label: _ctx.$t("messages.LabelProcess"),
                            name: "process"
                          }, null, 8, ["label"])
                        ]),
                        _: 1
                      }, 8, ["modelValue"]),
                      createVNode(QTabPanels, {
                        modelValue: unref(tab),
                        "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => isRef(tab) ? tab.value = $event : null)
                      }, {
                        default: withCtx(() => [
                          createVNode(QTabPanel, { name: "global" }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_2, [
                                createBaseVNode("div", _hoisted_3, [
                                  createVNode(QInput, {
                                    name: "name",
                                    modelValue: unref(form).name,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).name = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.ColName")
                                  }, null, 8, ["modelValue", "label"]),
                                  createVNode(QSelect, {
                                    name: "company",
                                    modelValue: unref(form).company,
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).company = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.LabelCompany"),
                                    hint: _ctx.$t("messages.TextCompanyHint"),
                                    options: unref(companies),
                                    "emit-value": "",
                                    "map-options": ""
                                  }, {
                                    option: withCtx((scope) => [
                                      createVNode(QItem, mergeProps(scope.itemProps, toHandlers(scope.itemEvents)), {
                                        default: withCtx(() => [
                                          createVNode(QItemSection, null, {
                                            default: withCtx(() => [
                                              createVNode(QItemLabel, {
                                                textContent: toDisplayString(scope.opt.label)
                                              }, null, 8, ["textContent"]),
                                              createVNode(QItemLabel, { caption: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(scope.opt.caption), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "label", "hint", "options"]),
                                  createVNode(QInput, {
                                    name: "bcc",
                                    modelValue: unref(form).bcc,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).bcc = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.LabelMailBCC"),
                                    hint: _ctx.$t("messages.TextMailBCCHint")
                                  }, null, 8, ["modelValue", "label", "hint"]),
                                  createVNode(QInput, {
                                    name: "c1",
                                    modelValue: unref(form).c1,
                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(form).c1 = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: "Mail Customer1",
                                    hint: ""
                                  }, null, 8, ["modelValue"])
                                ]),
                                createBaseVNode("div", _hoisted_4, [
                                  createVNode(QInput, {
                                    name: "sales.name",
                                    modelValue: unref(form).autoseller,
                                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(form).autoseller = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.LabelAutoseller"),
                                    hint: _ctx.$t("messages.TextAutosellerHint")
                                  }, null, 8, ["modelValue", "label", "hint"])
                                ]),
                                createBaseVNode("div", _hoisted_5, [
                                  createVNode(QInput, {
                                    name: "lead.info",
                                    modelValue: unref(form).test,
                                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(form).test = $event),
                                    "lazy-rules": "",
                                    type: "textarea",
                                    outlined: "",
                                    label: _ctx.$t("messages.LabelInfo"),
                                    hint: ""
                                  }, null, 8, ["modelValue", "label"])
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(QTabPanel, { name: "mail" }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_6, [
                                createBaseVNode("div", _hoisted_7, [
                                  createVNode(QInput, {
                                    name: "inboundMoveSuccess",
                                    modelValue: unref(form).inboundMoveSuccess,
                                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(form).inboundMoveSuccess = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.LabelInboundSuccess")
                                  }, null, 8, ["modelValue", "label"]),
                                  createVNode(QInput, {
                                    name: "inboundMoveFail",
                                    modelValue: unref(form).inboundMoveFail,
                                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(form).inboundMoveFail = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.LabelInboundFail")
                                  }, null, 8, ["modelValue", "label"]),
                                  createVNode(QInput, {
                                    name: "inboundMoveOther",
                                    modelValue: unref(form).inboundMoveOther,
                                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(form).inboundMoveOther = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.LabelInboundOther")
                                  }, null, 8, ["modelValue", "label"])
                                ]),
                                _hoisted_8,
                                _hoisted_9
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(QTabPanel, { name: "process" }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_10, [
                                createVNode(QCard, { class: "col-4" }, {
                                  default: withCtx(() => [
                                    createVNode(QCardSection, null, {
                                      default: withCtx(() => [
                                        createBaseVNode("div", _hoisted_11, toDisplayString(_ctx.$t("messages.TitleInboundMail")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(QCardSection, null, {
                                      default: withCtx(() => [
                                        createVNode(QCheckbox, {
                                          modelValue: unref(form).processAnswerMail,
                                          "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(form).processAnswerMail = $event),
                                          "lazy-rules": "",
                                          outlined: "",
                                          label: _ctx.$t("messages.LabelAnswerMail")
                                        }, null, 8, ["modelValue", "label"]),
                                        withDirectives(createBaseVNode("div", _hoisted_12, [
                                          createBaseVNode("div", _hoisted_13, [
                                            createVNode(QSelect, {
                                              modelValue: unref(form).processTemplateInbound,
                                              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(form).processTemplateInbound = $event),
                                              "lazy-rules": "",
                                              dense: "",
                                              outlined: "",
                                              label: _ctx.$t("messages.ColMailtemplate"),
                                              options: unref(templatesMail),
                                              "emit-value": "",
                                              "map-options": ""
                                            }, {
                                              option: withCtx((scope) => [
                                                createVNode(QItem, mergeProps(scope.itemProps, toHandlers(scope.itemEvents)), {
                                                  default: withCtx(() => [
                                                    createVNode(QItemSection, null, {
                                                      default: withCtx(() => [
                                                        createVNode(QItemLabel, {
                                                          textContent: toDisplayString(scope.opt.label)
                                                        }, null, 8, ["textContent"]),
                                                        createVNode(QItemLabel, { caption: "" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(scope.opt.caption), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1040)
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "label", "options"]),
                                            createVNode(QCheckbox, {
                                              modelValue: unref(form).processAnswerExpose,
                                              "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(form).processAnswerExpose = $event),
                                              "lazy-rules": "",
                                              outlined: "",
                                              label: _ctx.$t("messages.LabelAnswerExpose")
                                            }, null, 8, ["modelValue", "label"]),
                                            withDirectives(createBaseVNode("div", _hoisted_14, [
                                              createBaseVNode("div", _hoisted_15, [
                                                createVNode(QSelect, {
                                                  modelValue: unref(form).processTemplateExpose,
                                                  "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => unref(form).processTemplateExpose = $event),
                                                  "lazy-rules": "",
                                                  dense: "",
                                                  outlined: "",
                                                  label: _ctx.$t("messages.ColMailtemplate"),
                                                  options: unref(templatesPDF),
                                                  "emit-value": "",
                                                  "map-options": ""
                                                }, {
                                                  option: withCtx((scope) => [
                                                    createVNode(QItem, mergeProps(scope.itemProps, toHandlers(scope.itemEvents)), {
                                                      default: withCtx(() => [
                                                        createVNode(QItemSection, null, {
                                                          default: withCtx(() => [
                                                            createVNode(QItemLabel, {
                                                              textContent: toDisplayString(scope.opt.label)
                                                            }, null, 8, ["textContent"]),
                                                            createVNode(QItemLabel, { caption: "" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(scope.opt.caption), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1040)
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "label", "options"])
                                              ])
                                            ], 512), [
                                              [vShow, unref(form).processAnswerExpose]
                                            ])
                                          ])
                                        ], 512), [
                                          [vShow, unref(form).processAnswerMail]
                                        ]),
                                        createVNode(QCheckbox, {
                                          name: "processDoTeamMail",
                                          modelValue: unref(form).processDoTeamMail,
                                          "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => unref(form).processDoTeamMail = $event),
                                          "lazy-rules": "",
                                          outlined: "",
                                          label: _ctx.$t("messages.LabelTeamMail")
                                        }, null, 8, ["modelValue", "label"]),
                                        withDirectives(createBaseVNode("div", _hoisted_16, [
                                          createBaseVNode("div", _hoisted_17, [
                                            createVNode(QInput, {
                                              name: "teamMail",
                                              modelValue: unref(form).processTeamMail,
                                              "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => unref(form).processTeamMail = $event),
                                              "lazy-rules": "",
                                              dense: "",
                                              outlined: "",
                                              label: _ctx.$t("messages.LabelTeamMail"),
                                              hint: _ctx.$t("messages.TextNoTeamFound")
                                            }, null, 8, ["modelValue", "label", "hint"])
                                          ])
                                        ], 512), [
                                          [vShow, unref(form).processDoTeamMail]
                                        ]),
                                        createVNode(QCheckbox, {
                                          name: "processMoveMail",
                                          modelValue: unref(form).processMoveMail,
                                          "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => unref(form).processMoveMail = $event),
                                          "lazy-rules": "",
                                          outlined: "",
                                          label: _ctx.$t("messages.LabelMoveMail")
                                        }, null, 8, ["modelValue", "label"]),
                                        withDirectives(createBaseVNode("div", _hoisted_18, [
                                          createBaseVNode("div", _hoisted_19, [
                                            createVNode(QInput, {
                                              name: "mailFolderDone",
                                              modelValue: unref(form).inboundMoveSuccess,
                                              "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => unref(form).inboundMoveSuccess = $event),
                                              "lazy-rules": "",
                                              dense: "",
                                              outlined: "",
                                              label: _ctx.$t("messages.LabelFolder"),
                                              hint: _ctx.$t("messages.TextMailDone")
                                            }, null, 8, ["modelValue", "label", "hint"])
                                          ])
                                        ], 512), [
                                          [vShow, unref(form).processMoveMail]
                                        ]),
                                        createVNode(QCheckbox, {
                                          name: "processMoveMailError",
                                          modelValue: unref(form).processMoveMailError,
                                          "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => unref(form).processMoveMailError = $event),
                                          "lazy-rules": "",
                                          outlined: "",
                                          label: _ctx.$t("messages.LabelMoveMailError")
                                        }, null, 8, ["modelValue", "label"]),
                                        withDirectives(createBaseVNode("div", _hoisted_20, [
                                          createBaseVNode("div", _hoisted_21, [
                                            createVNode(QInput, {
                                              name: "mailFolderError",
                                              modelValue: unref(form).inboundMoveFail,
                                              "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => unref(form).inboundMoveFail = $event),
                                              "lazy-rules": "",
                                              dense: "",
                                              outlined: "",
                                              label: _ctx.$t("messages.LabelFolder"),
                                              hint: _ctx.$t("messages.TextMailFolderError")
                                            }, null, 8, ["modelValue", "label", "hint"])
                                          ])
                                        ], 512), [
                                          [vShow, unref(form).processMoveMailError]
                                        ]),
                                        createVNode(QCheckbox, {
                                          name: "processOtherMail",
                                          modelValue: unref(form).processOtherMail,
                                          "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => unref(form).processOtherMail = $event),
                                          "lazy-rules": "",
                                          outlined: "",
                                          label: _ctx.$t("messages.LabelMoveOtherMail")
                                        }, null, 8, ["modelValue", "label"]),
                                        withDirectives(createBaseVNode("div", _hoisted_22, [
                                          createBaseVNode("div", _hoisted_23, [
                                            createVNode(QInput, {
                                              name: "inboundMoveOther",
                                              modelValue: unref(form).inboundMoveOther,
                                              "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => unref(form).inboundMoveOther = $event),
                                              "lazy-rules": "",
                                              dense: "",
                                              outlined: "",
                                              label: _ctx.$t("messages.LabelInboundOther")
                                            }, null, 8, ["modelValue", "label"])
                                          ])
                                        ], 512), [
                                          [vShow, unref(form).processOtherMail]
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
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
var Setting = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "Setting.vue"]]);
export { Setting as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZy5lYjJlMGMwOC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL1NldHRpbmcudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8cS1wYWdlIGNsYXNzPVwicS1wYS1zbVwiPlxuXG4gICAgICAgIDxOYXZCYXIgOnRpdGxlPVwiJHQoJ21lc3NhZ2VzLkxhYmVsU2V0dGluZ3MnKVwiIGljb249XCJzZXR0aW5nc1wiIHN0YXRlTmFtZT1cImNvbmZpZ1wiIDpzdGF0ZT1cImNvbmZpZ1N0b3JlXCIgLz5cbiAgICAgICAgXG4gICAgICAgIDxxLWNhcmQ+XG4gICAgICAgICAgICA8cS1mb3JtIEBzdWJtaXQ9XCJkb1NhdmVcIiByZWY9XCJyZWZDb25maWdcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAtOTk5OXB4XCIvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS10YWJzIHYtbW9kZWw9XCJ0YWJcIiBjbGFzcz1cInRleHQtdGVhbFwiIGFsaWduPVwibGVmdFwiIGRlbnNlIG91dGxpbmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFiIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbEdsb2JhbCcpXCIgbmFtZT1cImdsb2JhbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS10YWIgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbE1haWwnKVwiIG5hbWU9XCJtYWlsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRhYiA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxQcm9jZXNzJylcIiBuYW1lPVwicHJvY2Vzc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcS10YWJzPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8cS10YWItcGFuZWxzIHYtbW9kZWw9XCJ0YWJcIj5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRhYi1wYW5lbCBuYW1lPVwiZ2xvYmFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC04IGNvbC1tZC00XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJuYW1lXCIgdi1tb2RlbD1cImZvcm0ubmFtZVwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sTmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1zZWxlY3QgbmFtZT1cImNvbXBhbnlcIiB2LW1vZGVsPVwiZm9ybS5jb21wYW55XCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbENvbXBhbnknKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhpbnQ9XCIkdCgnbWVzc2FnZXMuVGV4dENvbXBhbnlIaW50JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiY29tcGFuaWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWl0LXZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLW9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpvcHRpb249XCJzY29wZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtIHYtYmluZD1cInNjb3BlLml0ZW1Qcm9wc1wiIHYtb249XCJzY29wZS5pdGVtRXZlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCB2LXRleHQ9XCJzY29wZS5vcHQubGFiZWxcIj48L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3sgc2NvcGUub3B0LmNhcHRpb24gfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Etc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiYmNjXCIgdi1tb2RlbD1cImZvcm0uYmNjXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbE1haWxCQ0MnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhpbnQ9XCIkdCgnbWVzc2FnZXMuVGV4dE1haWxCQ0NIaW50JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJjMVwiIHYtbW9kZWw9XCJmb3JtLmMxXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWFpbCBDdXN0b21lcjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPHEtaW5wdXQgbmFtZT1cImthbXBhZ25lXCIgdi1tb2RlbD1cImZvcm0ua2FtcGFnbmVcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsRG9tYWluS2FtcGFnbmUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhpbnQ9XCIkdCgnbWVzc2FnZXMuVGV4dERvbWFpbkthbXBhZ25lSGludCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTggY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJzYWxlcy5uYW1lXCIgdi1tb2RlbD1cImZvcm0uYXV0b3NlbGxlclwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxBdXRvc2VsbGVyJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoaW50PVwiJHQoJ21lc3NhZ2VzLlRleHRBdXRvc2VsbGVySGludCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJsZWFkLmluZm9cIiB2LW1vZGVsPVwiZm9ybS50ZXN0XCIgbGF6eS1ydWxlcyB0eXBlPVwidGV4dGFyZWFcIiBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbEluZm8nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3EtdGFiLXBhbmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cS10YWItcGFuZWwgbmFtZT1cIm1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHEtY29sLWd1dHRlci1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTggY29sLW1kLTRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cImluYm91bmRNb3ZlU3VjY2Vzc1wiIHYtbW9kZWw9XCJmb3JtLmluYm91bmRNb3ZlU3VjY2Vzc1wiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxJbmJvdW5kU3VjY2VzcycpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiaW5ib3VuZE1vdmVGYWlsXCIgdi1tb2RlbD1cImZvcm0uaW5ib3VuZE1vdmVGYWlsXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbEluYm91bmRGYWlsJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJpbmJvdW5kTW92ZU90aGVyXCIgdi1tb2RlbD1cImZvcm0uaW5ib3VuZE1vdmVPdGhlclwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxJbmJvdW5kT3RoZXInKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTggY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9xLXRhYi1wYW5lbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFiLXBhbmVsIG5hbWU9XCJwcm9jZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1jYXJkIGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPnt7ICR0KCdtZXNzYWdlcy5UaXRsZUluYm91bmRNYWlsJykgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1jaGVja2JveCB2LW1vZGVsPVwiZm9ybS5wcm9jZXNzQW5zd2VyTWFpbFwiIGxhenktcnVsZXMgb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsQW5zd2VyTWFpbCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiB2LXNob3c9XCJmb3JtLnByb2Nlc3NBbnN3ZXJNYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvZmZzZXQtMSBjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXNlbGVjdCB2LW1vZGVsPVwiZm9ybS5wcm9jZXNzVGVtcGxhdGVJbmJvdW5kXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xNYWlsdGVtcGxhdGUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJ0ZW1wbGF0ZXNNYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWl0LXZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLW9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpvcHRpb249XCJzY29wZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtIHYtYmluZD1cInNjb3BlLml0ZW1Qcm9wc1wiIHYtb249XCJzY29wZS5pdGVtRXZlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCB2LXRleHQ9XCJzY29wZS5vcHQubGFiZWxcIj48L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3sgc2NvcGUub3B0LmNhcHRpb24gfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Etc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1jaGVja2JveCB2LW1vZGVsPVwiZm9ybS5wcm9jZXNzQW5zd2VyRXhwb3NlXCIgbGF6eS1ydWxlcyBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbEFuc3dlckV4cG9zZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1zaG93PVwiZm9ybS5wcm9jZXNzQW5zd2VyRXhwb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9mZnNldC0xIGNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1zZWxlY3Qgdi1tb2RlbD1cImZvcm0ucHJvY2Vzc1RlbXBsYXRlRXhwb3NlXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbE1haWx0ZW1wbGF0ZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwidGVtcGxhdGVzUERGXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtaXQtdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcC1vcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90Om9wdGlvbj1cInNjb3BlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbSB2LWJpbmQ9XCJzY29wZS5pdGVtUHJvcHNcIiB2LW9uPVwic2NvcGUuaXRlbUV2ZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIHYtdGV4dD1cInNjb3BlLm9wdC5sYWJlbFwiPjwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPnt7IHNjb3BlLm9wdC5jYXB0aW9uIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Etc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtY2hlY2tib3ggbmFtZT1cInByb2Nlc3NEb1RlYW1NYWlsXCIgdi1tb2RlbD1cImZvcm0ucHJvY2Vzc0RvVGVhbU1haWxcIiBsYXp5LXJ1bGVzIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbFRlYW1NYWlsJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtc2hvdz1cImZvcm0ucHJvY2Vzc0RvVGVhbU1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9mZnNldC0xIGNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cInRlYW1NYWlsXCIgdi1tb2RlbD1cImZvcm0ucHJvY2Vzc1RlYW1NYWlsXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbFRlYW1NYWlsJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoaW50PVwiJHQoJ21lc3NhZ2VzLlRleHROb1RlYW1Gb3VuZCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWNoZWNrYm94IG5hbWU9XCJwcm9jZXNzTW92ZU1haWxcIiB2LW1vZGVsPVwiZm9ybS5wcm9jZXNzTW92ZU1haWxcIiBsYXp5LXJ1bGVzIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbE1vdmVNYWlsJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtc2hvdz1cImZvcm0ucHJvY2Vzc01vdmVNYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvZmZzZXQtMSBjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJtYWlsRm9sZGVyRG9uZVwiIHYtbW9kZWw9XCJmb3JtLmluYm91bmRNb3ZlU3VjY2Vzc1wiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxGb2xkZXInKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhpbnQ9XCIkdCgnbWVzc2FnZXMuVGV4dE1haWxEb25lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtY2hlY2tib3ggbmFtZT1cInByb2Nlc3NNb3ZlTWFpbEVycm9yXCIgdi1tb2RlbD1cImZvcm0ucHJvY2Vzc01vdmVNYWlsRXJyb3JcIiBsYXp5LXJ1bGVzIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbE1vdmVNYWlsRXJyb3InKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1zaG93PVwiZm9ybS5wcm9jZXNzTW92ZU1haWxFcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib2Zmc2V0LTEgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwibWFpbEZvbGRlckVycm9yXCIgdi1tb2RlbD1cImZvcm0uaW5ib3VuZE1vdmVGYWlsXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbEZvbGRlcicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGludD1cIiR0KCdtZXNzYWdlcy5UZXh0TWFpbEZvbGRlckVycm9yJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtY2hlY2tib3ggbmFtZT1cInByb2Nlc3NPdGhlck1haWxcIiB2LW1vZGVsPVwiZm9ybS5wcm9jZXNzT3RoZXJNYWlsXCIgbGF6eS1ydWxlcyBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxNb3ZlT3RoZXJNYWlsJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtc2hvdz1cImZvcm0ucHJvY2Vzc090aGVyTWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib2Zmc2V0LTEgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiaW5ib3VuZE1vdmVPdGhlclwiIHYtbW9kZWw9XCJmb3JtLmluYm91bmRNb3ZlT3RoZXJcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsSW5ib3VuZE90aGVyJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS10YWItcGFuZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvcS10YWItcGFuZWxzPlxuICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICA8L3EtZm9ybT5cbiAgICAgICAgPC9xLWNhcmQ+XG4gICAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IEdsb2JhbFZpZXcgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbW1vbi9oZWxwZXJzL0dsb2JhbFZpZXcnO1xuaW1wb3J0IE5hdkJhciAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2QmFyLnZ1ZSc7IFxuXG5pbXBvcnQgXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgdXNlRGF0YVN0b3JlIH0gICAgICAgICAgICAgICAgIGZyb20gJ3NyYy9zdG9yZXMvZGF0YS5zdG9yZSc7XG5cbmNvbnN0IG1haWx0ZW1wbGF0ZXNTdG9yZSAgICAgICAgICAgICAgID0gdXNlRGF0YVN0b3JlKCAnbWFpbHRlbXBsYXRlcycsICdtYWlsdGVtcGxhdGVzJyApO1xuY29uc3QgY29tcGFuaWVzU3RvcmUgICAgICAgICAgICAgICAgICAgPSB1c2VEYXRhU3RvcmUoICdjb21wYW5pZXMnLCAnY29tcGFuaWVzJyApO1xuXG5pbXBvcnQgZGVidWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnZGVidWcnO1xuY29uc3QgbG9nICAgICAgICAgPSBkZWJ1ZygnYXBwOnNldHRpbmcnKTtcblxuY29uc3QgaW5pdCAgICAgICAgPSB7IFxuICAgIGNvbGxOYW1lOiAgICAgICAnY29uZmlnJywgXG4gICAgc3RhdGVOYW1lOiAgICAgICdjb25maWcnLFxuICAgIGRlZmF1bHRGb3JtOiAgICB7XG4gICAgICAgIHByb2Nlc3NBbnN3ZXJNYWlsOiAgICAgICAgZmFsc2UsXG4gICAgICAgIHByb2Nlc3NBbnN3ZXJFeHBvc2U6ICAgICAgZmFsc2UsXG4gICAgICAgIHByb2Nlc3NEb1RlYW1NYWlsOiAgICAgICAgZmFsc2UsXG4gICAgICAgIHByb2Nlc3NNb3ZlTWFpbDogICAgICAgICAgZmFsc2UsXG4gICAgICAgIHByb2Nlc3NNb3ZlTWFpbEVycm9yOiAgICAgZmFsc2UsXG4gICAgICAgIHByb2Nlc3NPdGhlck1haWw6ICAgICAgICAgZmFsc2VcbiAgICB9XG59O1xuY29uc3QgZ2xvYmFsVmlldyAgPSBHbG9iYWxWaWV3KCBpbml0ICk7XG5jb25zdCB7IFxuICAgIHN0b3JlOiAgICAgICAgICBjb25maWdTdG9yZSwgXG4gICAgZGF0YTogICAgICAgICAgIGNvbmZpZywgXG4gICAgZG9TYXZlLFxuICAgIGZvcm0gXG59ICA9IGdsb2JhbFZpZXc7XG5cbmNvbnN0IHRhYiAgICAgICAgICAgICAgID0gcmVmKCdnbG9iYWwnKSxcbiAgICAgIGNvbXBhbmllcyAgICAgICAgID0gcmVmKFtdKSxcbiAgICAgIHRlbXBsYXRlcyAgICAgICAgID0gcmVmKFtdKTtcbiAgICAgICAgICAgIFxuY29uc3QgdGVtcGxhdGVzTWFpbCAgICAgPSBjb21wdXRlZCggKCkgPT4gdGVtcGxhdGVzLnZhbHVlLmZpbHRlciggKHRlbXA6IGFueSkgPT4gdGVtcC50eXBlID09PSAnTWFpbCcgKSApLFxuICAgICAgdGVtcGxhdGVzUERGICAgICAgPSBjb21wdXRlZCggKCkgPT4gdGVtcGxhdGVzLnZhbHVlLmZpbHRlciggKHRlbXA6IGFueSkgPT4gdGVtcC50eXBlID09PSAnUERGJyApICk7XG5cblByb21pc2VcbiAgICAuYWxsKFtcbiAgICAgICAgY29uZmlnU3RvcmUuZ2V0U3RvcmUoKSxcbiAgICAgICAgY29tcGFuaWVzU3RvcmUuZ2V0U3RvcmUoKSxcbiAgICAgICAgbWFpbHRlbXBsYXRlc1N0b3JlLmdldFN0b3JlKClcbiAgICBdKVxuICAgIC50aGVuKCB2YWx1ZXMgPT4ge1xuICAgICAgICBmb3JtLnZhbHVlICAgICAgICAgID0gXy5kZWZhdWx0cyggdmFsdWVzWzBdLmRhdGFbMF0sIGluaXQuZGVmYXVsdEZvcm0gKTtcbiAgICAgICAgY29uZmlnU3RvcmUuc2V0UmVjb3JkKCBmb3JtLnZhbHVlICk7XG4gICAgICAgIGxvZyggJ0NPTkZJRycsIGZvcm0udmFsdWUgKTtcblxuICAgICAgICBjb21wYW5pZXMudmFsdWUgICAgID0gdmFsdWVzWzFdLmRhdGEubWFwKCAoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAgICAgIGl0ZW0uX2lkLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAgICAgIGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICBjYXB0aW9uOiAgICBgJHtpdGVtLnN0cmVldH0sICR7aXRlbS56aXB9ICR7aXRlbS5jaXR5fWBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRlbXBsYXRlcy52YWx1ZSAgICAgPSB2YWx1ZXNbMl0uZGF0YS5tYXAoIChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICAgICAgaXRlbS5faWQsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICAgICAgaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIGNhcHRpb246ICAgIGl0ZW0uZGVzYyxcbiAgICAgICAgICAgICAgICB0eXBlOiAgICAgICBpdGVtLnR5cGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJnbG9iYWxWaWV3IiwiR2xvYmFsVmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrT0EsVUFBQSxxQkFBQSxhQUFBLGlCQUFBLGVBQUE7QUFDQSxVQUFBLGlCQUFBLGFBQUEsYUFBQSxXQUFBO0FBR0EsVUFBQSxNQUFBLE1BQUEsYUFBQTtBQUVBLFVBQUEsT0FBQTtBQUFBLE1BQW9CLFVBQUE7QUFBQSxNQUNBLFdBQUE7QUFBQSxNQUNBLGFBQUE7QUFBQSxRQUNBLG1CQUFBO0FBQUEsUUFDYyxxQkFBQTtBQUFBLFFBQ0EsbUJBQUE7QUFBQSxRQUNBLGlCQUFBO0FBQUEsUUFDQSxzQkFBQTtBQUFBLFFBQ0Esa0JBQUE7QUFBQSxNQUNBO0FBQUEsSUFDOUI7QUFFSixVQUFBQSxlQUFBQyxXQUFBLElBQUE7QUFDQSxVQUFBO0FBQUEsTUFBTSxPQUFBO0FBQUEsTUFDYyxNQUFBO0FBQUEsTUFDQTtBQUFBLE1BQ2hCO0FBQUEsSUFDQSxJQUFBRDtBQUdKLFVBQUEsTUFBQSxJQUFBLFFBQUEsR0FBQSxZQUFBLElBQUEsQ0FBQSxDQUFBLEdBQUEsWUFBQSxJQUFBLENBQUEsQ0FBQTtBQUlBLFVBQUEsZ0JBQUEsU0FBQSxNQUFBLFVBQUEsTUFBQSxPQUFBLENBQUEsU0FBQSxLQUFBLFNBQUEsTUFBQSxDQUFBLEdBQUEsZUFBQSxTQUFBLE1BQUEsVUFBQSxNQUFBLE9BQUEsQ0FBQSxTQUFBLEtBQUEsU0FBQSxLQUFBLENBQUE7QUFHQSxZQUFBLElBQUE7QUFBQSxNQUNTLFlBQUEsU0FBQTtBQUFBLE1BQ29CLGVBQUEsU0FBQTtBQUFBLE1BQ0csbUJBQUEsU0FBQTtBQUFBLElBQ0ksQ0FBQSxFQUFBLEtBQUEsQ0FBQSxXQUFBO0FBRzVCLFdBQUEsUUFBQSxFQUFBLFNBQUEsT0FBQSxHQUFBLEtBQUEsSUFBQSxLQUFBLFdBQUE7QUFDQSxrQkFBQSxVQUFBLEtBQUEsS0FBQTtBQUNBLFVBQUEsVUFBQSxLQUFBLEtBQUE7QUFFQSxnQkFBQSxRQUFBLE9BQUEsR0FBQSxLQUFBLElBQUEsQ0FBQSxTQUFBO0FBQ0ksZUFBQTtBQUFBLFVBQU8sT0FBQSxLQUFBO0FBQUEsVUFDYyxPQUFBLEtBQUE7QUFBQSxVQUNBLFNBQUEsR0FBQSxLQUFBLFdBQUEsS0FBQSxPQUFBLEtBQUE7QUFBQSxRQUMrQjtBQUFBLE1BQ3BELENBQUE7QUFHSixnQkFBQSxRQUFBLE9BQUEsR0FBQSxLQUFBLElBQUEsQ0FBQSxTQUFBO0FBQ0ksZUFBQTtBQUFBLFVBQU8sT0FBQSxLQUFBO0FBQUEsVUFDYyxPQUFBLEtBQUE7QUFBQSxVQUNBLFNBQUEsS0FBQTtBQUFBLFVBQ0EsTUFBQSxLQUFBO0FBQUEsUUFDQTtBQUFBLE1BQ3JCLENBQUE7QUFBQSxJQUNILENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
