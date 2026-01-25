import { _ as _export_sfc, e as defineComponent, l as debug, O as useDataStore, R as storeToRefs, n as ref, T as resolveDirective, q as openBlock, s as createBlock, w as withCtx, f as createVNode, G as unref, D as QCardSection, V as withDirectives, E as createBaseVNode, x as QSeparator, F as QInput, a2 as createElementBlock, a3 as renderList, a4 as Fragment, U as QCard, C as QPage, J as pushScopeId, K as popScopeId } from "./index.8f8ca0f3.js";
import { Q as QForm } from "./QForm.8c81555c.js";
import { g as globalView, N as NavBar } from "./NavBar.eb70e4d5.js";
import { G as Grid } from "./Grid.b4814aca.js";
import "./AgGridVue.c15bd737.js";
var Translation_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-35fbbb5c"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "text-h6" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("input", {
  type: "submit",
  style: { "position": "absolute", "left": "-9999px" }
}, null, -1));
const _hoisted_3 = { class: "row q-col-gutter-md" };
const _hoisted_4 = { class: "col-6" };
const _hoisted_5 = { class: "col-6" };
const _sfc_main = defineComponent({
  __name: "Translation",
  setup(__props) {
    debug("app:translation");
    const languagesStore = useDataStore("languages", "languages");
    const { data: languages } = storeToRefs(languagesStore);
    const init = {
      collName: "translations",
      stateName: "trans",
      defaultForm: {
        lang: {}
      }
    };
    const globalView$1 = globalView(init);
    const {
      store: transStore,
      data: trans,
      doSave,
      form
    } = globalView$1;
    const transGrid = ref({});
    function subGridReady({ colMenu }) {
      for (const lng of languages.value) {
        colMenu.push({
          field: `lang.${lng.name}`,
          headerName: lng.desc
        });
      }
    }
    return (_ctx, _cache) => {
      const _directive_t = resolveDirective("t");
      return openBlock(), createBlock(QPage, { class: "q-pa-sm" }, {
        default: withCtx(() => [
          createVNode(NavBar, {
            title: _ctx.$t("messages.LabelTags"),
            icon: "event_seat",
            stateName: "trans",
            state: unref(transStore)
          }, null, 8, ["title", "state"]),
          createVNode(QCard, null, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createVNode(Grid, {
                    gridName: "translationGrid",
                    gridOptions: unref(transGrid),
                    stateName: "trans",
                    state: unref(transStore),
                    onSubGridReady: subGridReady
                  }, null, 8, ["gridOptions", "state"])
                ]),
                _: 1
              }),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode("div", _hoisted_1, null, 512), [
                    [_directive_t, "messages.TransTitle"]
                  ])
                ]),
                _: 1
              }),
              createVNode(QSeparator),
              createVNode(QForm, {
                onSubmit: _cache[1] || (_cache[1] = ($event) => unref(doSave)()),
                class: "q-gutter-xs",
                ref: "refTrans"
              }, {
                default: withCtx(() => [
                  _hoisted_2,
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_3, [
                        createBaseVNode("div", _hoisted_4, [
                          createVNode(QInput, {
                            name: "key",
                            modelValue: unref(form).key,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).key = $event),
                            "lazy-rules": "",
                            dense: "",
                            outlined: "",
                            label: _ctx.$t("messages.Key")
                          }, null, 8, ["modelValue", "label"])
                        ]),
                        createBaseVNode("div", _hoisted_5, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(languages), (item) => {
                            return openBlock(), createBlock(QInput, {
                              key: item.name,
                              dense: "",
                              outlined: "",
                              name: item.name,
                              modelValue: unref(form).lang[item.name],
                              "onUpdate:modelValue": ($event) => unref(form).lang[item.name] = $event,
                              label: item.desc,
                              placeholder: item.name
                            }, null, 8, ["name", "modelValue", "onUpdate:modelValue", "label", "placeholder"]);
                          }), 128))
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
var Translation = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-35fbbb5c"], ["__file", "Translation.vue"]]);
export { Translation as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNsYXRpb24uZjUyNDRhMmMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9UcmFuc2xhdGlvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxxLXBhZ2UgY2xhc3M9XCJxLXBhLXNtXCI+XG5cbiAgICAgICAgPE5hdkJhciA6dGl0bGU9XCIkdCgnbWVzc2FnZXMuTGFiZWxUYWdzJylcIiBpY29uPVwiZXZlbnRfc2VhdFwiIHN0YXRlTmFtZT1cInRyYW5zXCIgOnN0YXRlPVwidHJhbnNTdG9yZVwiPjwvTmF2QmFyPlxuXG4gICAgICAgIDxxLWNhcmQ+XG4gICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPEdyaWQgZ3JpZE5hbWU9XCJ0cmFuc2xhdGlvbkdyaWRcIiA6Z3JpZE9wdGlvbnM9XCJ0cmFuc0dyaWRcIiBzdGF0ZU5hbWU9XCJ0cmFuc1wiIDpzdGF0ZT1cInRyYW5zU3RvcmVcIiBAc3ViR3JpZFJlYWR5PVwic3ViR3JpZFJlYWR5XCIgLz5cbiAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiIHYtdD1cIidtZXNzYWdlcy5UcmFuc1RpdGxlJ1wiPjwvZGl2PlxuICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHEtc2VwYXJhdG9yIC8+XG5cbiAgICAgICAgICAgIDxxLWZvcm0gQHN1Ym1pdD1cImRvU2F2ZSgpXCIgY2xhc3M9XCJxLWd1dHRlci14c1wiIHJlZj1cInJlZlRyYW5zXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogLTk5OTlweFwiLz5cblxuICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cImtleVwiIHYtbW9kZWw9XCJmb3JtLmtleVwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLktleScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCB2LWZvcj1cIml0ZW0gb2YgbGFuZ3VhZ2VzXCIgOmtleT1cIml0ZW0ubmFtZVwiIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiaXRlbS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubGFuZ1sgaXRlbS5uYW1lIF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJpdGVtLmRlc2NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJpdGVtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgIDwvcS1mb3JtPlxuICAgICAgICA8L3EtY2FyZD5cbiAgICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgR2xvYmFsVmlldyAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29tbW9uL2hlbHBlcnMvR2xvYmFsVmlldyc7XG5pbXBvcnQgTmF2QmFyICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXIudnVlJzsgXG5pbXBvcnQgR3JpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvR3JpZC52dWUnO1xuXG5pbXBvcnQgeyB1c2VEYXRhU3RvcmUgfSAgICAgICAgICAgICAgICAgZnJvbSAnc3JjL3N0b3Jlcy9kYXRhLnN0b3JlJztcblxuaW1wb3J0IF8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZGVidWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnZGVidWcnO1xuY29uc3QgbG9nICAgICAgICAgPSBkZWJ1ZygnYXBwOnRyYW5zbGF0aW9uJyk7XG5cbmNvbnN0IGxhbmd1YWdlc1N0b3JlICAgICAgICAgICAgICAgICAgICA9IHVzZURhdGFTdG9yZSggJ2xhbmd1YWdlcycsICdsYW5ndWFnZXMnICk7XG5cbmNvbnN0IHsgZGF0YTogbGFuZ3VhZ2VzIH0gICAgICAgICAgICAgICA9IHN0b3JlVG9SZWZzKCBsYW5ndWFnZXNTdG9yZSApO1xuXG5jb25zdCBpbml0ICAgICAgICA9IHtcbiAgICBjb2xsTmFtZTogICAgICAgJ3RyYW5zbGF0aW9ucycsXG4gICAgc3RhdGVOYW1lOiAgICAgICd0cmFucycsXG4gICAgZGVmYXVsdEZvcm06ICAgIHtcbiAgICAgICAgbGFuZzogICAgICAgICAgICAgICB7fVxuICAgIH1cbn07XG5jb25zdCBnbG9iYWxWaWV3ICA9IEdsb2JhbFZpZXcoIGluaXQgKTtcbmNvbnN0IHsgXG4gICAgc3RvcmU6ICAgICAgICAgIHRyYW5zU3RvcmUsIFxuICAgIGRhdGE6ICAgICAgICAgICB0cmFucywgXG4gICAgZG9TYXZlLFxuICAgIGZvcm0gXG59ICA9IGdsb2JhbFZpZXc7XG5cbmNvbnN0IHRyYW5zR3JpZCAgICAgICA9IHJlZih7fSk7XG5cbmZ1bmN0aW9uIHN1YkdyaWRSZWFkeSggeyBjb2xNZW51IH06IHsgY29sTWVudTogYW55fSApIHtcbiAgICBmb3IgKGNvbnN0IGxuZyBvZiBsYW5ndWFnZXMudmFsdWUgKSB7XG4gICAgICAgIGNvbE1lbnUucHVzaCh7XG4gICAgICAgICAgICBmaWVsZDogICAgICBgbGFuZy4ke2xuZy5uYW1lfWAsXG4gICAgICAgICAgICBoZWFkZXJOYW1lOiBsbmcuZGVzY1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG4uZ3JpZCB7XG4gICAgaGVpZ2h0OiAgICAgICAgNDAwcHg7XG4gICAgd2lkdGg6ICAgICAgICAgMTAwJTtcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiZ2xvYmFsVmlldyIsIkdsb2JhbFZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNEQSxVQUFBLGlCQUFBO0FBRUEsVUFBQSxpQkFBQSxhQUFBLGFBQUEsV0FBQTtBQUVBLFVBQUEsRUFBQSxNQUFBLFVBQUEsSUFBQSxZQUFBLGNBQUE7QUFFQSxVQUFBLE9BQUE7QUFBQSxNQUFvQixVQUFBO0FBQUEsTUFDQSxXQUFBO0FBQUEsTUFDQSxhQUFBO0FBQUEsUUFDQSxNQUFBLENBQUE7QUFBQSxNQUNTO0FBQUEsSUFDekI7QUFFSixVQUFBQSxlQUFBQyxXQUFBLElBQUE7QUFDQSxVQUFBO0FBQUEsTUFBTSxPQUFBO0FBQUEsTUFDYyxNQUFBO0FBQUEsTUFDQTtBQUFBLE1BQ2hCO0FBQUEsSUFDQSxJQUFBRDtBQUdKLFVBQUEsWUFBQSxJQUFBLENBQUEsQ0FBQTtBQUVBLGFBQUEsYUFBQSxFQUFBLFdBQUE7QUFDSSxpQkFBQSxPQUFBLFVBQUEsT0FBQTtBQUNJLGdCQUFBLEtBQUE7QUFBQSxVQUFhLE9BQUEsUUFBQSxJQUFBO0FBQUEsVUFDZSxZQUFBLElBQUE7QUFBQSxRQUNSLENBQUE7QUFBQSxNQUNuQjtBQUFBLElBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
