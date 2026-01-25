import { _ as _export_sfc, e as defineComponent, l as debug, n as ref, T as resolveDirective, q as openBlock, s as createBlock, w as withCtx, f as createVNode, G as unref, D as QCardSection, V as withDirectives, E as createBaseVNode, x as QSeparator, F as QInput, U as QCard, C as QPage, J as pushScopeId, K as popScopeId } from "./index.8f8ca0f3.js";
import { Q as QForm } from "./QForm.8c81555c.js";
import { g as globalView, N as NavBar } from "./NavBar.eb70e4d5.js";
import { G as Grid } from "./Grid.b4814aca.js";
import "./AgGridVue.c15bd737.js";
var Languages_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-9504102e"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "text-h6" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("input", {
  type: "submit",
  style: { "position": "absolute", "left": "-9999px" }
}, null, -1));
const _hoisted_3 = { class: "row" };
const _hoisted_4 = { class: "col-6" };
const _sfc_main = defineComponent({
  __name: "Languages",
  setup(__props) {
    debug("app:languages");
    const init = {
      collName: "languages",
      stateName: "languages"
    };
    const globalView$1 = globalView(init);
    const {
      store: languagesStore,
      data: languages,
      doSave,
      form
    } = globalView$1;
    const langGrid = ref({});
    return (_ctx, _cache) => {
      const _directive_t = resolveDirective("t");
      return openBlock(), createBlock(QPage, { class: "q-pa-sm" }, {
        default: withCtx(() => [
          createVNode(NavBar, {
            title: _ctx.$t("messages.TitleLanguages"),
            icon: "event_seat",
            stateName: "languages",
            state: unref(languagesStore),
            globalView: unref(globalView$1)
          }, null, 8, ["title", "state", "globalView"]),
          createVNode(QCard, null, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createVNode(Grid, {
                    stateName: "languages",
                    gridName: "langGrid",
                    gridOptions: unref(langGrid),
                    state: unref(languagesStore)
                  }, null, 8, ["gridOptions", "state"])
                ]),
                _: 1
              }),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode("div", _hoisted_1, null, 512), [
                    [_directive_t, "messages.TitleLanguages"]
                  ])
                ]),
                _: 1
              }),
              createVNode(QSeparator),
              createVNode(QForm, {
                onSubmit: _cache[2] || (_cache[2] = ($event) => unref(doSave)()),
                class: "q-gutter-xs",
                ref: "refLang"
              }, {
                default: withCtx(() => [
                  _hoisted_2,
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_3, [
                        createBaseVNode("div", _hoisted_4, [
                          createVNode(QInput, {
                            name: "name",
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).name = $event),
                            "lazy-rules": "",
                            dense: "",
                            outlined: "",
                            label: _ctx.$t("messages.ColLanguage")
                          }, null, 8, ["modelValue", "label"]),
                          createVNode(QInput, {
                            name: "desc",
                            modelValue: unref(form).desc,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).desc = $event),
                            "lazy-rules": "",
                            dense: "",
                            outlined: "",
                            label: _ctx.$t("messages.ColDesc")
                          }, null, 8, ["modelValue", "label"])
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
        ]),
        _: 1
      });
    };
  }
});
var Languages = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9504102e"], ["__file", "Languages.vue"]]);
export { Languages as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFuZ3VhZ2VzLjliNGZlNWViLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvTGFuZ3VhZ2VzLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHEtcGFnZSBjbGFzcz1cInEtcGEtc21cIj5cblxuICAgICAgICA8TmF2QmFyIDp0aXRsZT1cIiR0KCdtZXNzYWdlcy5UaXRsZUxhbmd1YWdlcycpXCIgaWNvbj1cImV2ZW50X3NlYXRcIiBzdGF0ZU5hbWU9XCJsYW5ndWFnZXNcIiA6c3RhdGU9XCJsYW5ndWFnZXNTdG9yZVwiIDpnbG9iYWxWaWV3PVwiZ2xvYmFsVmlld1wiLz5cblxuICAgICAgICA8cS1jYXJkPlxuICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxHcmlkIHN0YXRlTmFtZT1cImxhbmd1YWdlc1wiIGdyaWROYW1lPVwibGFuZ0dyaWRcIiA6Z3JpZE9wdGlvbnM9XCJsYW5nR3JpZFwiIDpzdGF0ZT1cImxhbmd1YWdlc1N0b3JlXCIgLz5cbiAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiIHYtdD1cIidtZXNzYWdlcy5UaXRsZUxhbmd1YWdlcydcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxxLXNlcGFyYXRvciAvPlxuXG4gICAgICAgICAgICA8cS1mb3JtIEBzdWJtaXQ9XCJkb1NhdmUoKVwiIGNsYXNzPVwicS1ndXR0ZXIteHNcIiByZWY9XCJyZWZMYW5nXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogLTk5OTlweFwiLz5cblxuICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwibmFtZVwiIHYtbW9kZWw9XCJmb3JtLm5hbWVcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xMYW5ndWFnZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiZGVzY1wiIHYtbW9kZWw9XCJmb3JtLmRlc2NcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xEZXNjJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgIDwvcS1mb3JtPlxuICAgICAgICA8L3EtY2FyZD5cbiAgICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgR2xvYmFsVmlldyAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29tbW9uL2hlbHBlcnMvR2xvYmFsVmlldyc7XG5pbXBvcnQgTmF2QmFyICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXIudnVlJzsgXG5pbXBvcnQgR3JpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvR3JpZC52dWUnO1xuXG5pbXBvcnQgXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IGRlYnVnICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2RlYnVnJztcbmNvbnN0IGxvZyAgICAgICAgID0gZGVidWcoJ2FwcDpsYW5ndWFnZXMnKTtcblxuY29uc3QgaW5pdCAgICAgICAgPSB7IFxuICAgIGNvbGxOYW1lOiAgICAgICAnbGFuZ3VhZ2VzJywgXG4gICAgc3RhdGVOYW1lOiAgICAgICdsYW5ndWFnZXMnXG59O1xuY29uc3QgZ2xvYmFsVmlldyAgPSBHbG9iYWxWaWV3KCBpbml0ICk7XG5jb25zdCB7IFxuICAgIHN0b3JlOiAgICAgICAgICBsYW5ndWFnZXNTdG9yZSwgXG4gICAgZGF0YTogICAgICAgICAgIGxhbmd1YWdlcywgXG4gICAgZG9TYXZlLFxuICAgIGZvcm0gXG59ICA9IGdsb2JhbFZpZXc7XG5cbmNvbnN0IGxhbmdHcmlkICAgICAgICAgICAgICA9IHJlZih7fSk7XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG4uZ3JpZCB7XG4gICAgaGVpZ2h0OiAgICAgICAgNDAwcHg7XG4gICAgd2lkdGg6ICAgICAgICAgMTAwJTtcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiZ2xvYmFsVmlldyIsIkdsb2JhbFZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOENBLFVBQUEsZUFBQTtBQUVBLFVBQUEsT0FBQTtBQUFBLE1BQW9CLFVBQUE7QUFBQSxNQUNBLFdBQUE7QUFBQSxJQUNBO0FBRXBCLFVBQUFBLGVBQUFDLFdBQUEsSUFBQTtBQUNBLFVBQUE7QUFBQSxNQUFNLE9BQUE7QUFBQSxNQUNjLE1BQUE7QUFBQSxNQUNBO0FBQUEsTUFDaEI7QUFBQSxJQUNBLElBQUFEO0FBR0osVUFBQSxXQUFBLElBQUEsQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
