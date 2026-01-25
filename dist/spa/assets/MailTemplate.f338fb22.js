import { _ as _export_sfc, e as defineComponent, l as debug, N as useAccountStore, O as useDataStore, L as useI18n, n as ref, M as _, R as storeToRefs, ah as computed, aq as onBeforeMount, a as axios, T as resolveDirective, q as openBlock, s as createBlock, w as withCtx, f as createVNode, G as unref, E as createBaseVNode, D as QCardSection, U as QCard, V as withDirectives, x as QSeparator, F as QInput, bw as QRadio, bx as vShow, a0 as QItem, by as mergeProps, bz as toHandlers, a1 as QItemSection, a6 as QItemLabel, A as toDisplayString, C as QPage, J as pushScopeId, K as popScopeId } from "./index.8f8ca0f3.js";
import { Q as QSelect } from "./QSelect.72364726.js";
import { Q as QForm } from "./QForm.8c81555c.js";
import { g as globalView, N as NavBar } from "./NavBar.eb70e4d5.js";
import { G as Grid } from "./Grid.b4814aca.js";
import "./rtl.b51694b1.js";
import "./AgGridVue.c15bd737.js";
var MailTemplate_vue_vue_type_style_index_0_scoped_true_lang = "";
var MailTemplate_vue_vue_type_style_index_1_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-970ff4fc"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "row q-col-gutter-md" };
const _hoisted_2 = { class: "col-6" };
const _hoisted_3 = { class: "col-6" };
const _hoisted_4 = { class: "text-h6" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("input", {
  type: "submit",
  style: { "position": "absolute", "left": "-9999px" }
}, null, -1));
const _hoisted_6 = { class: "row q-col-gutter-md" };
const _hoisted_7 = { class: "col" };
const _hoisted_8 = { class: "row q-col-gutter-md" };
const _hoisted_9 = { class: "col" };
const _sfc_main = defineComponent({
  __name: "MailTemplate",
  setup(__props) {
    const log = debug("app:mailtemplates");
    const accountStore = useAccountStore();
    const configStore = useDataStore("config", "config");
    const leadStore = useDataStore("lead", "lead");
    const init = {
      collName: "mailtemplates",
      stateName: "mailtemplates"
    };
    const globalView$1 = globalView(init);
    const {
      store: mailtemplatesStore,
      data: mailtemplates,
      doSave,
      form
    } = globalView$1;
    const { t } = useI18n();
    const templateGrid = ref({
      columnTypes: {
        typeColumn: {
          valueGetter(params) {
            return params.data.type ? t(`messages.Col${params.data.type}`) : "";
          }
        },
        sourceColumn: {
          valueGetter(params) {
            return params.data.source && _.get(params, `context.sourceList.${params.data.source}.label`, "") || "";
          }
        }
      }
    });
    const mailButtons = [
      {
        label: "EditText",
        link: "editTemplate",
        icon: "fas fa-edit"
      },
      {
        label: "TestTemplate",
        link: "testTemplate",
        icon: "fas fa-envelope-open-text"
      }
    ];
    ref(false);
    ref("");
    ref({});
    const sources = ref([]);
    storeToRefs(accountStore);
    const { data: config } = storeToRefs(configStore);
    const { data: leadData } = storeToRefs(leadStore);
    computed(() => config.value[0]);
    computed(() => _.map(leadData.value, (item) => {
      return {
        value: item._id,
        label: `${item.gfz}, ${item.fahrzeug && item.fahrzeug.model}, ${item.lead && item.lead.name}`
      };
    }));
    function subGridReady({ gridOpt }) {
      gridOpt.context = {
        sourceList: _.keyBy(sources.value, "value")
      };
      log("CONTEXT", gridOpt.context);
    }
    onBeforeMount(async () => {
      log("onMounted");
      const result = await axios.post("/custom/getProcessBlocks", { type: "sources" });
      sources.value = result.data.options.sources;
    });
    return (_ctx, _cache) => {
      const _directive_t = resolveDirective("t");
      return openBlock(), createBlock(QPage, { class: "q-pa-sm" }, {
        default: withCtx(() => [
          createVNode(NavBar, {
            title: _ctx.$t("messages.LabelMailtemplate"),
            icon: "dashboard",
            stateName: "mailtemplates",
            state: unref(mailtemplatesStore),
            locButtons: mailButtons
          }, null, 8, ["title", "state"]),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QCard, null, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createVNode(Grid, {
                        gridName: "templateGrid",
                        gridOptions: unref(templateGrid),
                        stateName: "mailtemplates",
                        state: unref(mailtemplatesStore),
                        orientation: "portrait",
                        onSubGridReady: subGridReady
                      }, null, 8, ["gridOptions", "state"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_3, [
              createVNode(QCard, null, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      withDirectives(createBaseVNode("div", _hoisted_4, null, 512), [
                        [_directive_t, "messages.ColMailtemplate"]
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(QSeparator),
                  createVNode(QForm, {
                    enctype: "multipart/form-data",
                    onSubmit: unref(doSave),
                    class: "q-gutter-xs"
                  }, {
                    default: withCtx(() => [
                      _hoisted_5,
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_6, [
                            createBaseVNode("div", _hoisted_7, [
                              createVNode(QInput, {
                                name: "desc",
                                modelValue: unref(form).desc,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).desc = $event),
                                "lazy-rules": "",
                                dense: "",
                                outlined: "",
                                ref: "refMailtemplates",
                                label: _ctx.$t("messages.ColDesc"),
                                hint: ""
                              }, null, 8, ["modelValue", "label"]),
                              createVNode(QInput, {
                                name: "name",
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).name = $event),
                                "lazy-rules": "",
                                dense: "",
                                outlined: "",
                                label: _ctx.$t("messages.ColName"),
                                rules: [(val) => !!val || _ctx.$t("messages.TextRequired")],
                                hint: _ctx.$t("messages.HintTemplateName")
                              }, null, 8, ["modelValue", "label", "rules", "hint"]),
                              createBaseVNode("div", _hoisted_8, [
                                createBaseVNode("div", _hoisted_9, [
                                  createVNode(QRadio, {
                                    name: "type",
                                    modelValue: unref(form).type,
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).type = $event),
                                    val: "Mail",
                                    label: _ctx.$t("messages.ColMail")
                                  }, null, 8, ["modelValue", "label"]),
                                  createVNode(QRadio, {
                                    name: "type",
                                    modelValue: unref(form).type,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).type = $event),
                                    val: "Letter",
                                    label: _ctx.$t("messages.ColLetter")
                                  }, null, 8, ["modelValue", "label"]),
                                  createVNode(QRadio, {
                                    name: "type",
                                    modelValue: unref(form).type,
                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(form).type = $event),
                                    val: "PDF",
                                    label: _ctx.$t("messages.ColPDF")
                                  }, null, 8, ["modelValue", "label"])
                                ])
                              ]),
                              withDirectives(createVNode(QInput, {
                                name: "desc",
                                modelValue: unref(form).subject,
                                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(form).subject = $event),
                                "lazy-rules": "",
                                dense: "",
                                outlined: "",
                                label: _ctx.$t("messages.LabelSubject"),
                                hint: _ctx.$t("messages.HintTemplateSubject")
                              }, null, 8, ["modelValue", "label", "hint"]), [
                                [vShow, unref(form).type === "Mail"]
                              ]),
                              withDirectives(createVNode(QInput, {
                                name: "fileName",
                                modelValue: unref(form).fileName,
                                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(form).fileName = $event),
                                "lazy-rules": "",
                                dense: "",
                                outlined: "",
                                label: _ctx.$t("messages.ColFileName")
                              }, null, 8, ["modelValue", "label"]), [
                                [vShow, unref(form).type === "PDF"]
                              ]),
                              createVNode(QSelect, {
                                modelValue: unref(form).source,
                                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(form).source = $event),
                                "lazy-rules": "",
                                dense: "",
                                outlined: "",
                                label: _ctx.$t("messages.LabelSrc"),
                                options: unref(sources),
                                "emit-value": "",
                                "map-options": "",
                                rules: [(val) => !!val || "Quelle muss angegeben werden!"]
                              }, {
                                option: withCtx((scope) => [
                                  createVNode(QItem, mergeProps(scope.itemProps, toHandlers(scope.itemEvents)), {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemLabel, {
                                            textContent: toDisplayString(scope.opt.label)
                                          }, null, 8, ["textContent"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1040)
                                ]),
                                _: 1
                              }, 8, ["modelValue", "label", "options", "rules"])
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
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
var MailTemplate = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-970ff4fc"], ["__file", "MailTemplate.vue"]]);
export { MailTemplate as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbFRlbXBsYXRlLmYzMzhmYjIyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvTWFpbFRlbXBsYXRlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHEtcGFnZSBjbGFzcz1cInEtcGEtc21cIj5cblxuICAgICAgICA8TmF2QmFyIDp0aXRsZT1cIiR0KCdtZXNzYWdlcy5MYWJlbE1haWx0ZW1wbGF0ZScpXCIgaWNvbj1cImRhc2hib2FyZFwiIHN0YXRlTmFtZT1cIm1haWx0ZW1wbGF0ZXNcIiA6c3RhdGU9XCJtYWlsdGVtcGxhdGVzU3RvcmVcIiA6bG9jQnV0dG9ucz1cIm1haWxCdXR0b25zXCIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHEtY29sLWd1dHRlci1tZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgPHEtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgZ3JpZE5hbWU9XCJ0ZW1wbGF0ZUdyaWRcIiA6Z3JpZE9wdGlvbnM9XCJ0ZW1wbGF0ZUdyaWRcIiBzdGF0ZU5hbWU9XCJtYWlsdGVtcGxhdGVzXCIgOnN0YXRlPVwibWFpbHRlbXBsYXRlc1N0b3JlXCIgb3JpZW50YXRpb249XCJwb3J0cmFpdFwiIEBzdWJHcmlkUmVhZHk9XCJzdWJHcmlkUmVhZHlcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICA8cS1jYXJkPlxuICAgICAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiIHYtdD1cIidtZXNzYWdlcy5Db2xNYWlsdGVtcGxhdGUnXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8cS1zZXBhcmF0b3IgLz5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxxLWZvcm0gZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBAc3VibWl0PVwiZG9TYXZlXCIgY2xhc3M9XCJxLWd1dHRlci14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogLTk5OTlweFwiLz5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJkZXNjXCIgdi1tb2RlbD1cImZvcm0uZGVzY1wiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWQgcmVmPVwicmVmTWFpbHRlbXBsYXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbERlc2MnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cIm5hbWVcIiB2LW1vZGVsPVwiZm9ybS5uYW1lXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xOYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpydWxlcz1cIlsgdmFsID0+ICEhdmFsIHx8ICR0KCdtZXNzYWdlcy5UZXh0UmVxdWlyZWQnKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoaW50PVwiJHQoJ21lc3NhZ2VzLkhpbnRUZW1wbGF0ZU5hbWUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXJhZGlvIG5hbWU9XCJ0eXBlXCIgdi1tb2RlbD1cImZvcm0udHlwZVwiIHZhbD1cIk1haWxcIiA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sTWFpbCcpXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtcmFkaW8gbmFtZT1cInR5cGVcIiB2LW1vZGVsPVwiZm9ybS50eXBlXCIgdmFsPVwiTGV0dGVyXCIgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbExldHRlcicpXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtcmFkaW8gbmFtZT1cInR5cGVcIiB2LW1vZGVsPVwiZm9ybS50eXBlXCIgdmFsPVwiUERGXCIgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbFBERicpXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cImRlc2NcIiB2LW1vZGVsPVwiZm9ybS5zdWJqZWN0XCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZCB2LXNob3c9XCJmb3JtLnR5cGUgPT09ICdNYWlsJ1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbFN1YmplY3QnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhpbnQ9XCIkdCgnbWVzc2FnZXMuSGludFRlbXBsYXRlU3ViamVjdCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiZmlsZU5hbWVcIiB2LW1vZGVsPVwiZm9ybS5maWxlTmFtZVwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWQgdi1zaG93PVwiZm9ybS50eXBlID09PSAnUERGJ1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xGaWxlTmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1zZWxlY3Qgdi1tb2RlbD1cImZvcm0uc291cmNlXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbFNyYycpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInNvdXJjZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtaXQtdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAtb3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpydWxlcz1cIlsgdmFsID0+ICEhdmFsIHx8ICdRdWVsbGUgbXVzcyBhbmdlZ2ViZW4gd2VyZGVuIScgXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6b3B0aW9uPVwic2NvcGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbSB2LWJpbmQ9XCJzY29wZS5pdGVtUHJvcHNcIiB2LW9uPVwic2NvcGUuaXRlbUV2ZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgdi10ZXh0PVwic2NvcGUub3B0LmxhYmVsXCI+PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLXNlbGVjdD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1mb3JtPlxuICAgICAgICAgICAgICAgIDwvcS1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAgICAgICAgXG5cbiAgICAgICAgPCEtLSA8cS1kaWFsb2cgdi1tb2RlbD1cInByb21wdE1haWxcIj5cbiAgICAgICAgICAgIDxxLWNhcmQgc3R5bGU9XCJtaW4td2lkdGg6IDQwMHB4XCI+XG4gICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiIHYtdD1cIidtZXNzYWdlcy5UZXh0TWFpbEFkZHJlc3MnXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IHR5cGU9XCJlbWFpbFwiIDpoaW50PVwiJHQoJ21lc3NhZ2VzLlRleHRJbnB1dFRlc3RNYWlsJylcIiA6ZGVuc2U9XCJ0cnVlXCIgdi1tb2RlbD1cImFkZHJlc3NcIiBhdXRvZm9jdXMgQGtleXVwLmVudGVyPVwic2VuZE1haWxcIiAvPlxuICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1zZWxlY3QgbmFtZT1cImxlYWRcIiB2LW1vZGVsPVwibGVhZFwiIGxhenktcnVsZXMgOmRlbnNlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxMZWFkJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJsZWFkc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWl0LXZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAtb3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L3Etc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHEtY2FyZC1hY3Rpb25zIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHEtYnRuIGZsYXQgdi10PVwiJ21lc3NhZ2VzLkxhYmVsQ2FuY2VsJ1wiIHYtY2xvc2UtcG9wdXAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHEtYnRuIGZsYXQgdi10PVwiJ21lc3NhZ2VzLlRleHRTZW5kTWFpbCdcIiB2LWNsb3NlLXBvcHVwIGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cInNlbmRNYWlsXCIgLz5cbiAgICAgICAgICAgICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgIDwvcS1kaWFsb2c+IC0tPlxuICAgIFxuICAgIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCBHbG9iYWxWaWV3ICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21tb24vaGVscGVycy9HbG9iYWxWaWV3JztcbmltcG9ydCBOYXZCYXIgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhci52dWUnOyBcbmltcG9ydCBHcmlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9HcmlkLnZ1ZSc7XG5cbmltcG9ydCB7IHVzZUFjY291bnRTdG9yZSB9ICAgICAgICAgICAgICBmcm9tICdzcmMvc3RvcmVzL2FjY291bnQuc3RvcmUnO1xuaW1wb3J0IHsgdXNlRGF0YVN0b3JlIH0gICAgICAgICAgICAgICAgIGZyb20gJ3NyYy9zdG9yZXMvZGF0YS5zdG9yZSc7XG5cbmltcG9ydCBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgZGVidWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnZGVidWcnO1xuY29uc3QgbG9nICAgICAgICAgPSBkZWJ1ZygnYXBwOm1haWx0ZW1wbGF0ZXMnKTtcblxuY29uc3QgYWNjb3VudFN0b3JlICAgICAgICAgICAgICAgICAgICAgID0gdXNlQWNjb3VudFN0b3JlKCk7XG5jb25zdCBjb25maWdTdG9yZSAgICAgICAgICAgICAgICAgICAgICAgPSB1c2VEYXRhU3RvcmUoICdjb25maWcnLCAnY29uZmlnJyApO1xuY29uc3QgbGVhZFN0b3JlICAgICAgICAgICAgICAgICAgICAgICAgID0gdXNlRGF0YVN0b3JlKCAnbGVhZCcsICdsZWFkJyApO1xuXG5jb25zdCBpbml0ICAgICAgICA9IHsgXG4gICAgY29sbE5hbWU6ICAgICAgICdtYWlsdGVtcGxhdGVzJywgXG4gICAgc3RhdGVOYW1lOiAgICAgICdtYWlsdGVtcGxhdGVzJ1xufTtcbmNvbnN0IGdsb2JhbFZpZXcgID0gR2xvYmFsVmlldyggaW5pdCApO1xuY29uc3QgeyBcbiAgICBzdG9yZTogICAgICAgICAgbWFpbHRlbXBsYXRlc1N0b3JlLCBcbiAgICBkYXRhOiAgICAgICAgICAgbWFpbHRlbXBsYXRlcywgXG4gICAgZG9TYXZlLFxuICAgIGZvcm0gXG59ICA9IGdsb2JhbFZpZXc7XG5cbmNvbnN0IHsgdCB9ICAgICAgICAgICAgICAgICAgICAgPSB1c2VJMThuKCk7XG5cbmNvbnN0ICAgdGVtcGxhdGVHcmlkICAgICAgICAgICAgICA9IHJlZih7XG4gICAgICAgICAgICBjb2x1bW5UeXBlczogICAge1xuICAgICAgICAgICAgICAgIHR5cGVDb2x1bW46ICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlR2V0dGVyKCBwYXJhbXM6IGFueSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbXMuZGF0YS50eXBlID8gdCggYG1lc3NhZ2VzLkNvbCR7cGFyYW1zLmRhdGEudHlwZX1gICkgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc291cmNlQ29sdW1uOiAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZUdldHRlciggcGFyYW1zOiBhbnkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHBhcmFtcy5kYXRhLnNvdXJjZSAmJiBfLmdldCggcGFyYW1zLCBgY29udGV4dC5zb3VyY2VMaXN0LiR7cGFyYW1zLmRhdGEuc291cmNlfS5sYWJlbGAsICcnICkpIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbmNvbnN0ICAgbWFpbEJ1dHRvbnMgICAgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICAgICAgJ0VkaXRUZXh0JywgXG4gICAgICAgICAgICAgICAgbGluazogICAgICAgJ2VkaXRUZW1wbGF0ZScsIFxuICAgICAgICAgICAgICAgIGljb246ICAgICAgICdmYXMgZmEtZWRpdCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICAgICAgJ1Rlc3RUZW1wbGF0ZScsIFxuICAgICAgICAgICAgICAgIGxpbms6ICAgICAgICd0ZXN0VGVtcGxhdGUnLCBcbiAgICAgICAgICAgICAgICBpY29uOiAgICAgICAnZmFzIGZhLWVudmVsb3BlLW9wZW4tdGV4dCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcHJvbXB0TWFpbCAgICA9IHJlZihmYWxzZSksXG4gICAgICAgIGFkZHJlc3MgICAgICAgPSByZWYoJycpLFxuICAgICAgICBsZWFkICAgICAgICAgID0gcmVmKHt9KSxcbiAgICAgICAgc291cmNlcyAgICAgICA9IHJlZihbXSk7XG5cbmNvbnN0IHsgdXNlciB9ICAgICAgICAgICAgICA9IHN0b3JlVG9SZWZzKCBhY2NvdW50U3RvcmUgKTtcbmNvbnN0IHsgZGF0YTogY29uZmlnIH0gICAgICA9IHN0b3JlVG9SZWZzKCBjb25maWdTdG9yZSApO1xuY29uc3QgeyBkYXRhOiBsZWFkRGF0YSB9ICAgID0gc3RvcmVUb1JlZnMoIGxlYWRTdG9yZSApO1xuICAgICAgICAgICAgXG5jb25zdCAgIHNldHRpbmcgICAgICAgPSBjb21wdXRlZCggKCkgPT4gY29uZmlnLnZhbHVlWzBdICksXG4gICAgICAgIGxlYWRzICAgICAgICAgPSBjb21wdXRlZCggKCkgPT4gXy5tYXAoIGxlYWREYXRhLnZhbHVlLCAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogICAgICBpdGVtLl9pZCxcbiAgICAgICAgICAgICAgICBsYWJlbDogICAgICBgJHtpdGVtLmdmen0sICR7aXRlbS5mYWhyemV1ZyAmJiBpdGVtLmZhaHJ6ZXVnLm1vZGVsfSwgJHtpdGVtLmxlYWQgJiYgaXRlbS5sZWFkLm5hbWV9YFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkpO1xuXG5hc3luYyBmdW5jdGlvbiBjbGlja0J1dHRvbiggbGluazogc3RyaW5nICkge1xuICAgIC8vIGxvZyggJ2NsaWNrQnV0dG9uJywgbGluayApO1xuICAgIC8vIHN3aXRjaChsaW5rKSB7XG4gICAgLy8gICAgIGNhc2UgJ2VkaXRUZW1wbGF0ZSc6XG4gICAgLy8gICAgICAgICBhd2FpdCB0aGlzLmVkaXRUZW1wbGF0ZSgpO1xuICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgIGNhc2UgJ3Rlc3RUZW1wbGF0ZSc6XG4gICAgLy8gICAgICAgICBhd2FpdCB0aGlzLnRlc3RUZW1wbGF0ZSgpO1xuICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgLy8gfVxufVxuXG5hc3luYyBmdW5jdGlvbiBzZW5kTWFpbCgpIHtcbiAgICBsb2coICdzZW5kTWFpbCcsIGFkZHJlc3MudmFsdWUgKTtcbiAgICAvLyB0aGlzLnByb21wdE1haWwgICAgID0gZmFsc2U7ICAgICAgICAvLyBpbiBjYXNlIG9mIGVudGVyXG4gICAgXG4gICAgLy8gYXdhaXQgdGhpcy4kaHR0cC5wb3N0KCAnL2N1c3RvbS90ZXN0bWFpbCcsIHsgLi4udGhpcy5mb3JtLCBhZGRyZXNzOiB0aGlzLmFkZHJlc3MsIGxlYWQ6IHRoaXMubGVhZCB9ICk7XG4gICAgLy8gdGhpcy4kcS5ub3RpZnkoe1xuICAgIC8vICAgICBtZXNzYWdlOiAgICAgICAgdGhpcy4kdCgnbWVzc2FnZXMuVGV4dE1haWxTZW50JyksIFxuICAgIC8vICAgICBjb2xvcjogICAgICAgICAgJ2dyZWVuLTknLFxuICAgIC8vICAgICBpY29uOiAgICAgICAgICAgJ2RvbmUnLFxuICAgIC8vICAgICBwb3NpdGlvbjogICAgICAgJ3RvcC1yaWdodCcsXG4gICAgLy8gICAgIHRpbWVvdXQ6ICAgICAgICAxMDAwXG4gICAgLy8gfSk7XG59XG5cbi8vIGdyaWQgLT4gcmVhZHlcbmZ1bmN0aW9uIHN1YkdyaWRSZWFkeSggeyBncmlkT3B0IH06IHsgZ3JpZE9wdDogYW55IH0gKSB7XG4gICAgZ3JpZE9wdC5jb250ZXh0ICAgID0ge1xuICAgICAgICBzb3VyY2VMaXN0OiAgICAgICAgIF8ua2V5QnkoIHNvdXJjZXMudmFsdWUsICd2YWx1ZScgKSxcbiAgICB9O1xuICAgIGxvZyggJ0NPTlRFWFQnLCBncmlkT3B0LmNvbnRleHQgKTtcbn1cblxub25CZWZvcmVNb3VudCggYXN5bmMgKCkgPT4ge1xuICAgIGxvZyggJ29uTW91bnRlZCcgKTtcbiAgICBjb25zdCByZXN1bHQgICAgICAgICAgICAgID0gYXdhaXQgYXhpb3MucG9zdCggJy9jdXN0b20vZ2V0UHJvY2Vzc0Jsb2NrcycsIHsgdHlwZTogJ3NvdXJjZXMnIH0gKTtcbiAgICBzb3VyY2VzLnZhbHVlICAgICAgID0gcmVzdWx0LmRhdGEub3B0aW9ucy5zb3VyY2VzO1xufSk7XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG4uZWRpdERpYWxvZyB7XG4gICAgbWluLXdpZHRoOiAgICAgY2FsYyggMTAwdncgLSA1MHB4ICk7XG4gICAgbWluLWhlaWdodDogICAgY2FsYyggMTAwdmggLSA1MHB4ICk7XG59XG5cbi5hY3RpdmVMaXN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREREREO1xufVxuPC9zdHlsZT5cblxuPHN0eWxlPlxuQGltcG9ydCBcIi4uL192YXJpYWJsZXMuc2Nzc1wiO1xuXG4uYWNlV2luZG93IHtcbiAgICB3aWR0aDogICAgIGNhbGMoIDEwMHZ3IC0gMTMwcHggKTtcbiAgICBtYXgtd2lkdGg6ICAgICBjYWxjKCAxMDB2dyAtIDEzMHB4ICkgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6ICAgIGNhbGMoIDEwMHZoIC0gMTAwcHggKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuPC9zdHlsZT4iXSwibmFtZXMiOlsiZ2xvYmFsVmlldyIsIkdsb2JhbFZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3SEEsVUFBQSxNQUFBLE1BQUEsbUJBQUE7QUFFQSxVQUFBLGVBQUE7QUFDQSxVQUFBLGNBQUEsYUFBQSxVQUFBLFFBQUE7QUFDQSxVQUFBLFlBQUEsYUFBQSxRQUFBLE1BQUE7QUFFQSxVQUFBLE9BQUE7QUFBQSxNQUFvQixVQUFBO0FBQUEsTUFDQSxXQUFBO0FBQUEsSUFDQTtBQUVwQixVQUFBQSxlQUFBQyxXQUFBLElBQUE7QUFDQSxVQUFBO0FBQUEsTUFBTSxPQUFBO0FBQUEsTUFDYyxNQUFBO0FBQUEsTUFDQTtBQUFBLE1BQ2hCO0FBQUEsSUFDQSxJQUFBRDtBQUdKLFVBQUEsRUFBQSxNQUFBO0FBRUEsVUFBQSxlQUFBLElBQUE7QUFBQSxNQUF3QyxhQUFBO0FBQUEsUUFDWixZQUFBO0FBQUEsVUFDSSxZQUFBLFFBQUE7QUFFUixtQkFBQSxPQUFBLEtBQUEsT0FBQSxFQUFBLGVBQUEsT0FBQSxLQUFBLE1BQUEsSUFBQTtBQUFBLFVBQW1FO0FBQUEsUUFDdkU7QUFBQSxRQUNKLGNBQUE7QUFBQSxVQUNrQixZQUFBLFFBQUE7QUFFVixtQkFBQSxPQUFBLEtBQUEsVUFBQSxFQUFBLElBQUEsUUFBQSxzQkFBQSxPQUFBLEtBQUEsZ0JBQUEsRUFBQSxLQUFBO0FBQUEsVUFBd0c7QUFBQSxRQUM1RztBQUFBLE1BQ0o7QUFBQSxJQUNKLENBQUE7QUFHWixVQUFBLGNBQUE7QUFBQSxNQUF5QjtBQUFBLFFBQ2IsT0FBQTtBQUFBLFFBQ2dCLE1BQUE7QUFBQSxRQUNBLE1BQUE7QUFBQSxNQUNBO0FBQUEsTUFDaEI7QUFBQSxRQUNBLE9BQUE7QUFBQSxRQUNnQixNQUFBO0FBQUEsUUFDQSxNQUFBO0FBQUEsTUFDQTtBQUFBLElBQ2hCO0FBQUEsUUFBQSxLQUFBO0FBQUEsUUFBQSxFQUFBO0FBQUEsUUFBQSxDQUFBLENBQUE7QUFBQSxVQUFBLFVBQUEsSUFBQSxDQUFBLENBQUE7QUFPWixnQkFBQSxZQUFBO0FBQ0EsVUFBQSxFQUFBLE1BQUEsT0FBQSxJQUFBLFlBQUEsV0FBQTtBQUNBLFVBQUEsRUFBQSxNQUFBLFNBQUEsSUFBQSxZQUFBLFNBQUE7QUFFQSxhQUFBLE1BQUEsT0FBQSxNQUFBLEVBQUE7QUFBQSxhQUFBLE1BQUEsRUFBQSxJQUFBLFNBQUEsT0FBQSxDQUFBLFNBQUE7QUFFWSxhQUFBO0FBQUEsUUFBTyxPQUFBLEtBQUE7QUFBQSxRQUNjLE9BQUEsR0FBQSxLQUFBLFFBQUEsS0FBQSxZQUFBLEtBQUEsU0FBQSxVQUFBLEtBQUEsUUFBQSxLQUFBLEtBQUE7QUFBQSxNQUMyRTtBQUFBLElBQ2hHLENBQUEsQ0FBQTtBQThCWixhQUFBLGFBQUEsRUFBQSxXQUFBO0FBQ0ksY0FBQSxVQUFBO0FBQUEsUUFBcUIsWUFBQSxFQUFBLE1BQUEsUUFBQSxPQUFBLE9BQUE7QUFBQSxNQUNtQztBQUV4RCxVQUFBLFdBQUEsUUFBQSxPQUFBO0FBQUEsSUFBZ0M7QUFHcEMsa0JBQUEsWUFBQTtBQUNJLFVBQUEsV0FBQTtBQUNBLFlBQUEsU0FBQSxNQUFBLE1BQUEsS0FBQSw0QkFBQSxFQUFBLE1BQUEsVUFBQSxDQUFBO0FBQ0EsY0FBQSxRQUFBLE9BQUEsS0FBQSxRQUFBO0FBQUEsSUFBMEMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
