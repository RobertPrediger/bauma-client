import { _ as _export_sfc, e as defineComponent, l as debug, N as useAccountStore, O as useDataStore, L as useI18n, n as ref, R as storeToRefs, T as resolveDirective, q as openBlock, s as createBlock, w as withCtx, f as createVNode, G as unref, E as createBaseVNode, D as QCardSection, U as QCard, V as withDirectives, x as QSeparator, F as QInput, I as QLayout, B as QHeader, Q as QToolbar, y as QBtn, u as QToolbarTitle, z as QTooltip, v as createTextVNode, A as toDisplayString, H as QPageContainer, C as QPage, X as isRef, a5 as QDialog, bh as Notify, a as axios, be as ClosePopup, J as pushScopeId, K as popScopeId, M as _ } from "./index.8f8ca0f3.js";
import { Q as QForm } from "./QForm.8c81555c.js";
import { g as globalView, N as NavBar } from "./NavBar.eb70e4d5.js";
import { G as Grid } from "./Grid.b4814aca.js";
import "./AgGridVue.c15bd737.js";
var Processes_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-7b5f04ad"), n = n(), popScopeId(), n);
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
const _sfc_main = defineComponent({
  __name: "Processes",
  setup(__props) {
    const log = debug("app:process");
    const accountStore = useAccountStore();
    const userStore = useDataStore("user", "user");
    const mailtemplatesStore = useDataStore("mailtemplates", "mailtemplates");
    const { t } = useI18n();
    const init = {
      collName: "processes",
      stateName: "process"
    };
    const globalView$1 = globalView(init);
    const {
      store: processStore,
      data: processes,
      doSave,
      form
    } = globalView$1;
    const processGrid = ref({});
    const showProcess = ref(false), drawerLeft = ref(true), drawerRight = ref(true), processButtons = [
      {
        label: "LabelEdit",
        link: "editProcess",
        icon: "fas fa-edit"
      }
    ];
    ref([]);
    const actBlock = ref(null);
    ref({});
    const scene = ref({});
    ref({});
    const container = ref(null);
    storeToRefs(accountStore);
    storeToRefs(userStore);
    storeToRefs(mailtemplatesStore);
    userStore.getStore();
    mailtemplatesStore.getStore();
    async function clickButton(link) {
      log("clickButton", link);
      switch (link) {
        case "editProcess":
          if (!form.value._id) {
            Notify.create({
              message: t("messages.TextNoRecord"),
              color: "negative",
              icon: "report_problem",
              position: "top-right",
              timeout: 3e3
            });
            return;
          }
          const { data } = await axios.get("/red/flows");
          const flow = data.find((item) => item.type === "tab" && item.label === form.value.name);
          if (!flow) {
            const newFlow = {
              type: "flow",
              label: form.value.name,
              nodes: [],
              configs: []
            };
            const flowId = await axios.post("/red/flow", newFlow);
            log("new flow", flowId);
          }
          showProcess.value = true;
          break;
      }
    }
    function blockDeselect() {
      if (!actBlock.value)
        return;
      actBlock.value.title = `${actBlock.value.orgTitle} (${_.has(actBlock.value, "values.body.name") && actBlock.value.values.body.name.value || ""})`;
      scene.value.blocks = [
        ..._.filter(scene.value.blocks, (item) => item.id !== actBlock.value.id),
        actBlock.value
      ];
      log("blockDeselect", actBlock.value.title, actBlock.value.values.body);
      actBlock.value = null;
    }
    async function saveLink() {
      log("saveLink");
      if (actBlock.value)
        blockDeselect();
      form.value.scene = scene.value;
      try {
        await axios.put("/data/processes", {
          query: {
            _id: form.value._id
          },
          body: {
            _id: form.value._id,
            scene: scene.value
          }
        });
        Notify.create({
          message: t("messages.TextLinkSaved"),
          color: "green-9",
          icon: "done",
          position: "top-right",
          timeout: 1e3
        });
      } catch (e) {
        Notify.create({
          message: e,
          color: "negative",
          icon: "report_problem",
          position: "top-right",
          timeout: 5e3
        });
      }
    }
    function onLoad() {
      log("onLoad");
    }
    return (_ctx, _cache) => {
      const _directive_t = resolveDirective("t");
      return openBlock(), createBlock(QPage, { class: "q-pa-sm" }, {
        default: withCtx(() => [
          createVNode(NavBar, {
            title: _ctx.$t("messages.ColProcesses"),
            icon: "fas fa-microchip",
            stateName: "process",
            state: unref(processStore),
            locButtons: processButtons,
            onClickButton: clickButton
          }, null, 8, ["title", "state"]),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QCard, null, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createVNode(Grid, {
                        gridName: "processGrid",
                        gridOptions: unref(processGrid),
                        stateName: "process",
                        state: unref(processStore)
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
                        [_directive_t, "messages.LabelProcess"]
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(QSeparator),
                  createVNode(QForm, {
                    onSubmit: unref(doSave),
                    class: "q-gutter-xs",
                    ref: "process"
                  }, {
                    default: withCtx(() => [
                      _hoisted_5,
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_6, [
                            createBaseVNode("div", _hoisted_7, [
                              createVNode(QInput, {
                                name: "name",
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).name = $event),
                                "lazy-rules": "",
                                dense: "",
                                outlined: "",
                                label: _ctx.$t("messages.ColName"),
                                hint: ""
                              }, null, 8, ["modelValue", "label"]),
                              createVNode(QInput, {
                                name: "desc",
                                modelValue: unref(form).desc,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).desc = $event),
                                "lazy-rules": "",
                                dense: "",
                                outlined: "",
                                label: _ctx.$t("messages.ColDesc"),
                                hint: ""
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
            ])
          ]),
          createVNode(QDialog, {
            modelValue: unref(showProcess),
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(showProcess) ? showProcess.value = $event : null)
          }, {
            default: withCtx(() => [
              createVNode(QLayout, {
                container: "",
                view: "hHh LpR lFf",
                class: "detail process-container bg-white rounded-borders"
              }, {
                default: withCtx(() => [
                  createVNode(QHeader, { class: "bg-blue-8" }, {
                    default: withCtx(() => [
                      createVNode(QToolbar, { class: "text-white shadow" }, {
                        default: withCtx(() => [
                          createVNode(QBtn, {
                            flat: "",
                            onClick: _cache[2] || (_cache[2] = ($event) => drawerLeft.value = !unref(drawerLeft)),
                            round: "",
                            dense: "",
                            icon: "menu"
                          }),
                          withDirectives(createVNode(QToolbarTitle, null, null, 512), [
                            [_directive_t, "messages.LabelProcess"]
                          ]),
                          withDirectives((openBlock(), createBlock(QBtn, {
                            clickable: "",
                            onClick: saveLink,
                            "no-caps": "",
                            size: "md",
                            color: "white",
                            "text-color": "black",
                            icon: "save_alt",
                            dense: ""
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
                          ]),
                          createVNode(QSeparator, {
                            spaced: "",
                            vertical: ""
                          }),
                          withDirectives((openBlock(), createBlock(QBtn, {
                            icon: "close",
                            color: "white",
                            "text-color": "black",
                            dense: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(QTooltip, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t("messages.ButtonClose")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })), [
                            [ClosePopup]
                          ]),
                          createVNode(QSeparator, {
                            spaced: "",
                            vertical: ""
                          }),
                          createVNode(QBtn, {
                            flat: "",
                            onClick: _cache[3] || (_cache[3] = ($event) => drawerRight.value = !unref(drawerRight)),
                            round: "",
                            dense: "",
                            icon: "menu"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QPageContainer, null, {
                    default: withCtx(() => [
                      createVNode(QPage, { class: "q-pa-md edit-page" }, {
                        default: withCtx(() => [
                          createBaseVNode("iframe", {
                            ref_key: "container",
                            ref: container,
                            src: "/red",
                            allow: "autoplay *",
                            "frame-id": "node-red",
                            width: "100%",
                            height: "100%",
                            onLoad
                          }, null, 544)
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
var Processes = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7b5f04ad"], ["__file", "Processes.vue"]]);
export { Processes as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzc2VzLjQ1MzNkOWU3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvUHJvY2Vzc2VzLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHEtcGFnZSBjbGFzcz1cInEtcGEtc21cIj5cbiAgICAgICAgXG4gICAgICAgIDxOYXZCYXIgOnRpdGxlPVwiJHQoJ21lc3NhZ2VzLkNvbFByb2Nlc3NlcycpXCIgaWNvbj1cImZhcyBmYS1taWNyb2NoaXBcIiBzdGF0ZU5hbWU9XCJwcm9jZXNzXCIgOnN0YXRlPVwicHJvY2Vzc1N0b3JlXCIgOmxvY0J1dHRvbnM9XCJwcm9jZXNzQnV0dG9uc1wiIEBjbGlja0J1dHRvbj1cImNsaWNrQnV0dG9uXCIgLz5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICA8cS1jYXJkPlxuICAgICAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBncmlkTmFtZT1cInByb2Nlc3NHcmlkXCIgOmdyaWRPcHRpb25zPVwicHJvY2Vzc0dyaWRcIiBzdGF0ZU5hbWU9XCJwcm9jZXNzXCIgOnN0YXRlPVwicHJvY2Vzc1N0b3JlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtY2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgPHEtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIiB2LXQ9XCInbWVzc2FnZXMuTGFiZWxQcm9jZXNzJ1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIC8+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8cS1mb3JtIEBzdWJtaXQ9XCJkb1NhdmVcIiBjbGFzcz1cInEtZ3V0dGVyLXhzXCIgcmVmPVwicHJvY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogLTk5OTlweFwiLz5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJuYW1lXCIgdi1tb2RlbD1cImZvcm0ubmFtZVwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sTmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cImRlc2NcIiB2LW1vZGVsPVwiZm9ybS5kZXNjXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xEZXNjJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1mb3JtPlxuICAgICAgICAgICAgICAgIDwvcS1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPHEtZGlhbG9nIHYtbW9kZWw9XCJzaG93UHJvY2Vzc1wiPlxuICAgICAgICAgICAgPHEtbGF5b3V0IGNvbnRhaW5lciB2aWV3PVwiaEhoIExwUiBsRmZcIiBjbGFzcz1cImRldGFpbCBwcm9jZXNzLWNvbnRhaW5lciBiZy13aGl0ZSByb3VuZGVkLWJvcmRlcnNcIj5cbiAgICAgICAgICAgICAgICA8cS1oZWFkZXIgY2xhc3M9XCJiZy1ibHVlLThcIj5cbiAgICAgICAgICAgICAgICAgICAgPHEtdG9vbGJhciBjbGFzcz1cInRleHQtd2hpdGUgc2hhZG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1idG4gZmxhdCBAY2xpY2s9XCJkcmF3ZXJMZWZ0ID0gIWRyYXdlckxlZnRcIiByb3VuZCBkZW5zZSBpY29uPVwibWVudVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS10b29sYmFyLXRpdGxlIHYtdD1cIidtZXNzYWdlcy5MYWJlbFByb2Nlc3MnXCI+PC9xLXRvb2xiYXItdGl0bGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWJ0biBjbGlja2FibGUgQGNsaWNrPVwic2F2ZUxpbmtcIiBuby1jYXBzIHNpemU9XCJtZFwiIGNvbG9yPVwid2hpdGVcIiB0ZXh0LWNvbG9yPVwiYmxhY2tcIiBpY29uPVwic2F2ZV9hbHRcIiB2LWNsb3NlLXBvcHVwIGRlbnNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRvb2x0aXA+e3sgJHQoJ21lc3NhZ2VzLkJ1dHRvblNhdmUnKSB9fTwvcS10b29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLXNlcGFyYXRvciBzcGFjZWQgdmVydGljYWwgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWJ0biBpY29uPVwiY2xvc2VcIiBjb2xvcj1cIndoaXRlXCIgdGV4dC1jb2xvcj1cImJsYWNrXCIgdi1jbG9zZS1wb3B1cCBkZW5zZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS10b29sdGlwPnt7ICR0KCdtZXNzYWdlcy5CdXR0b25DbG9zZScpIH19PC9xLXRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIHNwYWNlZCB2ZXJ0aWNhbCAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1idG4gZmxhdCBAY2xpY2s9XCJkcmF3ZXJSaWdodCA9ICFkcmF3ZXJSaWdodFwiIHJvdW5kIGRlbnNlIGljb249XCJtZW51XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9xLXRvb2xiYXI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvcS1oZWFkZXI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHEtcGFnZS1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxxLXBhZ2UgY2xhc3M9XCJxLXBhLW1kIGVkaXQtcGFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3JlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3c9XCJhdXRvcGxheSAqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZS1pZD1cIm5vZGUtcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBsb2FkPVwib25Mb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1wYWdlPlxuICAgICAgICAgICAgICAgIDwvcS1wYWdlLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvcS1sYXlvdXQ+XG4gICAgICAgIDwvcS1kaWFsb2c+XG4gICAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IEdsb2JhbFZpZXcgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbW1vbi9oZWxwZXJzL0dsb2JhbFZpZXcnO1xuaW1wb3J0IE5hdkJhciAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2QmFyLnZ1ZSc7IFxuaW1wb3J0IEdyaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL0dyaWQudnVlJztcblxuaW1wb3J0IHsgdXNlSTE4biB9ICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3Z1ZS1pMThuJztcbmltcG9ydCBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyB1c2VBY2NvdW50U3RvcmUgfSAgICAgICAgICAgICAgZnJvbSAnc3JjL3N0b3Jlcy9hY2NvdW50LnN0b3JlJztcbmltcG9ydCB7IHVzZURhdGFTdG9yZSB9ICAgICAgICAgICAgICAgICBmcm9tICdzcmMvc3RvcmVzL2RhdGEuc3RvcmUnO1xuXG5pbXBvcnQgZGVidWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnZGVidWcnO1xuY29uc3QgbG9nICAgICAgICAgPSBkZWJ1ZygnYXBwOnByb2Nlc3MnKTtcblxuY29uc3QgYWNjb3VudFN0b3JlICAgICAgICAgICAgICAgICAgICAgID0gdXNlQWNjb3VudFN0b3JlKCk7XG5jb25zdCB1c2VyU3RvcmUgICAgICAgICAgICAgICAgICAgICAgICAgPSB1c2VEYXRhU3RvcmUoICd1c2VyJywgJ3VzZXInICk7XG5jb25zdCBtYWlsdGVtcGxhdGVzU3RvcmUgICAgICAgICAgICAgICAgPSB1c2VEYXRhU3RvcmUoICdtYWlsdGVtcGxhdGVzJywgJ21haWx0ZW1wbGF0ZXMnICk7XG5cbmNvbnN0IHsgdCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHVzZUkxOG4oKTtcblxuY29uc3QgaW5pdCAgICAgICAgPSB7IFxuICAgIGNvbGxOYW1lOiAgICAgICAncHJvY2Vzc2VzJywgXG4gICAgc3RhdGVOYW1lOiAgICAgICdwcm9jZXNzJ1xufTtcbmNvbnN0IGdsb2JhbFZpZXcgID0gR2xvYmFsVmlldyggaW5pdCApO1xuY29uc3QgeyBcbiAgICBzdG9yZTogICAgICAgICAgcHJvY2Vzc1N0b3JlLCBcbiAgICBkYXRhOiAgICAgICAgICAgcHJvY2Vzc2VzLCBcbiAgICBkb1NhdmUsXG4gICAgZm9ybSBcbn0gID0gZ2xvYmFsVmlldztcblxuY29uc3QgcHJvY2Vzc0dyaWQgICAgICAgICAgICAgID0gcmVmKHt9KTtcblxuY29uc3Qgc2hvd1Byb2Nlc3MgICAgICAgPSByZWYoZmFsc2UpLFxuICAgICAgICBkcmF3ZXJMZWZ0ICAgICAgICA9IHJlZih0cnVlKSxcbiAgICAgICAgZHJhd2VyUmlnaHQgICAgICAgPSByZWYodHJ1ZSksXG4gICAgICAgIHByb2Nlc3NCdXR0b25zICAgID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogICAgICAnTGFiZWxFZGl0JyxcbiAgICAgICAgICAgIGxpbms6ICAgICAgICdlZGl0UHJvY2VzcycsXG4gICAgICAgICAgICBpY29uOiAgICAgICAnZmFzIGZhLWVkaXQnXG4gICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgYmxvY2tzICAgICAgICAgICAgPSByZWYoW10pLFxuICAgICAgICBhY3RCbG9jayAgICAgICAgICA9IHJlZihudWxsKSxcbiAgICAgICAgZWRpdEJsb2NrICAgICAgICAgPSByZWYoe30pLFxuICAgICAgICBzY2VuZSAgICAgICAgICAgICA9IHJlZih7fSksXG4gICAgICAgIG9wdGlvbnMgICAgICAgICAgID0gcmVmKHt9KSxcbiAgICAgICAgY29udGFpbmVyICAgICAgICAgPSByZWYobnVsbCk7XG5cbmNvbnN0IHsgdXNlciB9ICAgICAgICAgICAgICA9IHN0b3JlVG9SZWZzKCBhY2NvdW50U3RvcmUgKTtcbmNvbnN0IHsgZGF0YTogdXNlcnMgfSAgICAgICA9IHN0b3JlVG9SZWZzKCB1c2VyU3RvcmUgKTtcbmNvbnN0IHsgZGF0YTogdGVtcGxhdGVzIH0gICA9IHN0b3JlVG9SZWZzKCBtYWlsdGVtcGxhdGVzU3RvcmUgKTtcblxuLy8gbWFpbHRlbXBsYXRlczogIHN0YXRlID0+IF8ubWFwKCBzdGF0ZS5tYWlsdGVtcGxhdGVzLmRhdGEsIChpdGVtKSA9PiB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgdmFsdWU6ICAgICAgICAgIGl0ZW0uX2lkLFxuLy8gICAgICAgICBsYWJlbDogICAgICAgICAgaXRlbS5kZXNjXG4vLyAgICAgfTtcbi8vIH0pXG5cbnVzZXJTdG9yZS5nZXRTdG9yZSgpO1xubWFpbHRlbXBsYXRlc1N0b3JlLmdldFN0b3JlKCk7XG5cbi8vIGNsaWNrIGluIE5hdmJhclxuYXN5bmMgZnVuY3Rpb24gY2xpY2tCdXR0b24oIGxpbmsgKSB7XG4gICAgbG9nKCAnY2xpY2tCdXR0b24nLCBsaW5rICk7XG4gICAgXG4gICAgc3dpdGNoKGxpbmspIHtcbiAgICAgICAgY2FzZSAnZWRpdFByb2Nlc3MnOlxuICAgICAgICAgICAgaWYgKCFmb3JtLnZhbHVlLl9pZCkge1xuICAgICAgICAgICAgICAgIE5vdGlmeS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAgICAgICAgdCgnbWVzc2FnZXMuVGV4dE5vUmVjb3JkJyksXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAgICAgICAgICAnbmVnYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAgICAgICAgICAgJ3JlcG9ydF9wcm9ibGVtJyxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICAgICAgICd0b3AtcmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAgICAgICAgMzAwMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZ2V0IGZsb3dzXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSAgICAgICAgICA9IGF3YWl0IGF4aW9zLmdldCggJy9yZWQvZmxvd3MnICk7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBmbG93IHdpdGggYWN0dWFsIG5hbWVcbiAgICAgICAgICAgIGNvbnN0IGZsb3cgICAgICAgICAgICAgID0gZGF0YS5maW5kKCAoaXRlbTogYW55KSA9PiBpdGVtLnR5cGUgPT09ICd0YWInICYmIGl0ZW0ubGFiZWwgPT09IGZvcm0udmFsdWUubmFtZSApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBpZiBub3QgZm91bmQgLT4gY3JlYXRlIG5ldyBmbG93XG4gICAgICAgICAgICBpZiAoIWZsb3cpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdGbG93ICAgICAgID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAgICAgICAgICAgJ2Zsb3cnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogICAgICAgICAgIGZvcm0udmFsdWUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbm9kZXM6ICAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgICAgICBjb25maWdzOiAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBmbG93SWQgICAgPSBhd2FpdCBheGlvcy5wb3N0KCAnL3JlZC9mbG93JywgbmV3RmxvdyApO1xuICAgICAgICAgICAgICAgIGxvZyggJ25ldyBmbG93JywgZmxvd0lkICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNob3dQcm9jZXNzLnZhbHVlICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuLy8gYWRkIHByb2Nlc3MgYmxvY2sgaW4gZGlhbG9nXG5mdW5jdGlvbiBhZGRCbG9jayggbmFtZTogc3RyaW5nICkge1xuICAgIGxvZyggJ2FkZEJsb2NrJywgbmFtZSApO1xuICAgIFxuICAgIC8vIGdldCBibG9ja1xuICAgIGNvbnN0IGJsb2NrOiBhbnkgICAgICAgPSBibG9ja3MudmFsdWUuZmluZCggKGl0ZW06IGFueSkgPT4gaXRlbS5uYW1lID09PSBuYW1lICk7XG4gICAgXG4gICAgLy8gY2hlY2sgZm9yIG1heFxuICAgIGlmIChibG9jay5tYXgpIHtcbiAgICAgICAgY29uc3QgY291bnQgICAgICAgPSBfLmNvdW50QnkoIHNjZW5lLnZhbHVlLmJsb2NrcywgaXRlbSA9PiBpdGVtLm5hbWUgPT09IG5hbWUgKTtcbiAgICAgICAgaWYgKGNvdW50LnRydWUgPj0gYmxvY2subWF4KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAgICAgXG4gICAgY29udGFpbmVyLnZhbHVlLmFkZE5ld0Jsb2NrKCBuYW1lLCBzY2VuZS52YWx1ZS5jb250YWluZXIuY2VudGVyWCAvIDIsIHNjZW5lLnZhbHVlLmNvbnRhaW5lci5jZW50ZXJZIC8gMiApO1xufVxuXG4vLyBzZWxlY3QgYmxvY2sgaW4gZGlhbG9nXG5mdW5jdGlvbiBibG9ja1NlbGVjdCggYmxvY2s6IGFueSApIHtcbiAgICBsb2coICdibG9ja1NlbGVjdCcsIGJsb2NrICk7XG5cbiAgICBpZiAoYWN0QmxvY2sudmFsdWUpXG4gICAgICAgIGJsb2NrRGVzZWxlY3QoKTtcblxuICAgIC8vIGdldCBmaWVsZHMgZnJvbSBvcmlnaW5hbCBibG9ja1xuICAgIGNvbnN0IHRpbGU6IGFueSAgICAgICAgPSBibG9ja3MudmFsdWUuZmluZCggKGl0ZW06IGFueSkgPT4gaXRlbS5uYW1lID09PSBibG9jay5uYW1lICk7XG5cbiAgICAvLyBzZXQgYmxvY2sgdG8gYWN0YmxvY2tcbiAgICBhY3RCbG9jay52YWx1ZSAgICAgICAgICAgICAgPSBibG9jaztcbiAgICBhY3RCbG9jay52YWx1ZS5vcmdUaXRsZSAgICAgPSB0aWxlLnRpdGxlO1xufVxuXG4vLyB1bnNlbGVjdCBibG9jayBpbiBkaWFsb2dcbmZ1bmN0aW9uIGJsb2NrRGVzZWxlY3QoKSB7XG4gICAgaWYgKCFhY3RCbG9jay52YWx1ZSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICBhY3RCbG9jay52YWx1ZS50aXRsZSAgICAgPSBgJHthY3RCbG9jay52YWx1ZS5vcmdUaXRsZX0gKCR7KF8uaGFzKCBhY3RCbG9jay52YWx1ZSwgJ3ZhbHVlcy5ib2R5Lm5hbWUnICkgJiYgYWN0QmxvY2sudmFsdWUudmFsdWVzLmJvZHkubmFtZS52YWx1ZSkgfHwgJyd9KWA7XG5cbiAgICAvLyByZW12ZSBvbGQgYmxvY2sgYW5kIHB1dCBhY3RibG9jayBiYWNrIGluIHNjZW5lXG4gICAgc2NlbmUudmFsdWUuYmxvY2tzICAgICAgID0gWyBcbiAgICAgICAgLi4uXy5maWx0ZXIoIHNjZW5lLnZhbHVlLmJsb2NrcywgaXRlbSA9PiBpdGVtLmlkICE9PSBhY3RCbG9jay52YWx1ZS5pZCApLCBcbiAgICAgICAgYWN0QmxvY2sudmFsdWUgXG4gICAgXTtcblxuICAgIGxvZyggJ2Jsb2NrRGVzZWxlY3QnLCBhY3RCbG9jay52YWx1ZS50aXRsZSwgYWN0QmxvY2sudmFsdWUudmFsdWVzLmJvZHkgKTtcblxuICAgIGFjdEJsb2NrLnZhbHVlICAgICAgID0gbnVsbDtcbn1cblxuLy8gc2F2ZSBkaWFsb2dcbmFzeW5jIGZ1bmN0aW9uIHNhdmVMaW5rKCkge1xuICAgIGxvZyggJ3NhdmVMaW5rJyk7XG4gICAgXG4gICAgaWYgKGFjdEJsb2NrLnZhbHVlKVxuICAgICAgICBibG9ja0Rlc2VsZWN0KCk7XG4gICAgXG4gICAgZm9ybS52YWx1ZS5zY2VuZSAgICAgICAgID0gc2NlbmUudmFsdWU7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXhpb3MucHV0KCAnL2RhdGEvcHJvY2Vzc2VzJywgeyBcbiAgICAgICAgICAgIHF1ZXJ5OiAgeyBcbiAgICAgICAgICAgICAgICBfaWQ6ICAgICAgICBmb3JtLnZhbHVlLl9pZCBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiAgIHtcbiAgICAgICAgICAgICAgICBfaWQ6ICAgICAgICBmb3JtLnZhbHVlLl9pZCxcbiAgICAgICAgICAgICAgICBzY2VuZTogICAgICBzY2VuZS52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBOb3RpZnkuY3JlYXRlKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICAgICAgICB0KCdtZXNzYWdlcy5UZXh0TGlua1NhdmVkJyksXG4gICAgICAgICAgICBjb2xvcjogICAgICAgICAgJ2dyZWVuLTknLFxuICAgICAgICAgICAgaWNvbjogICAgICAgICAgICdkb25lJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAgICAgICAndG9wLXJpZ2h0JyxcbiAgICAgICAgICAgIHRpbWVvdXQ6ICAgICAgICAxMDAwXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaChlOiBhbnkpIHtcbiAgICAgICAgTm90aWZ5LmNyZWF0ZSh7XG4gICAgICAgICAgICBtZXNzYWdlOiAgICAgICAgZSxcbiAgICAgICAgICAgIGNvbG9yOiAgICAgICAgICAnbmVnYXRpdmUnLFxuICAgICAgICAgICAgaWNvbjogICAgICAgICAgICdyZXBvcnRfcHJvYmxlbScsXG4gICAgICAgICAgICBwb3NpdGlvbjogICAgICAgJ3RvcC1yaWdodCcsXG4gICAgICAgICAgICB0aW1lb3V0OiAgICAgICAgNTAwMFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICBsb2coICdvbkxvYWQnICk7XG59XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0IFwiLi4vX3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5kZXRhaWwge1xuICAgIHdpZHRoOiAgICAgICAgIGNhbGMoIDEwMHZ3IC0gMjAwcHggKTtcbiAgICBtYXgtd2lkdGg6ICAgICAxOTIwcHg7XG59XG5cbi5lZGl0LXBhZ2Uge1xuICAgIGhlaWdodDogICAgY2FsYyggMTAwdmggLSA5NXB4IC0gNzBweCApO1xufVxuXG4ucHJvY2Vzcy1jb250YWluZXIge1xuICAgIGhlaWdodDogICAgICAgICBjYWxjKCAxMDB2aCAtIDUwcHggKTtcbiAgICB3aWR0aDogICAgICAgICAxMDAlO1xufVxuXG4ucHJvY2VzcyB7XG4gICAgaGVpZ2h0OiAgICAgICAgIGNhbGMoIDEwMHZoIC0gODBweCAtIDUwcHggKTtcbiAgICB3aWR0aDogICAgICAgICAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTA7XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbImdsb2JhbFZpZXciLCJHbG9iYWxWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdHQSxVQUFBLE1BQUEsTUFBQSxhQUFBO0FBRUEsVUFBQSxlQUFBO0FBQ0EsVUFBQSxZQUFBLGFBQUEs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UUFDdEIsQ0FBQTtBQUdKLGVBQUEsT0FBQTtBQUFBLFVBQWMsU0FBQSxFQUFBLHdCQUFBO0FBQUEsVUFDZ0MsT0FBQTtBQUFBLFVBQzFCLE1BQUE7QUFBQSxVQUNBLFVBQUE7QUFBQSxVQUNBLFNBQUE7QUFBQSxRQUNBLENBQUE7QUFBQSxNQUNuQixTQUFBLEdBQUE7QUFHRCxlQUFBLE9BQUE7QUFBQSxVQUFjLFNBQUE7QUFBQSxVQUNNLE9BQUE7QUFBQSxVQUNBLE1BQUE7QUFBQSxVQUNBLFVBQUE7QUFBQSxVQUNBLFNBQUE7QUFBQSxRQUNBLENBQUE7QUFBQSxNQUNuQjtBQUFBLElBQ0w7QUFHSixhQUFBLFNBQUE7QUFDSSxVQUFBLFFBQUE7QUFBQSxJQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
