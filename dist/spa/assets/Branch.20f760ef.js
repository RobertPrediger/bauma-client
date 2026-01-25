import { _ as _export_sfc, e as defineComponent, l as debug, n as ref, T as resolveDirective, q as openBlock, s as createBlock, w as withCtx, f as createVNode, G as unref, E as createBaseVNode, D as QCardSection, U as QCard, V as withDirectives, x as QSeparator, F as QInput, C as QPage } from "./index.8f8ca0f3.js";
import { Q as QForm } from "./QForm.8c81555c.js";
import { g as globalView, N as NavBar } from "./NavBar.eb70e4d5.js";
import { G as Grid } from "./Grid.b4814aca.js";
import "./AgGridVue.c15bd737.js";
const _hoisted_1 = { class: "row q-col-gutter-md" };
const _hoisted_2 = { class: "col-6" };
const _hoisted_3 = { class: "col-6" };
const _hoisted_4 = { class: "text-h6" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("input", {
  type: "submit",
  style: { "position": "absolute", "left": "-9999px" }
}, null, -1);
const _hoisted_6 = { class: "row q-col-gutter-md" };
const _hoisted_7 = { class: "col" };
const _sfc_main = defineComponent({
  __name: "Branch",
  setup(__props) {
    debug("app:branch");
    const init = {
      collName: "branch",
      stateName: "branch"
    };
    const globalView$1 = globalView(init);
    const {
      store: branchStore,
      data: branch,
      doSave,
      form
    } = globalView$1;
    const branchGrid = ref({});
    return (_ctx, _cache) => {
      const _directive_t = resolveDirective("t");
      return openBlock(), createBlock(QPage, { class: "q-pa-sm" }, {
        default: withCtx(() => [
          createVNode(NavBar, {
            title: _ctx.$t("messages.ColBranch"),
            icon: "fas fa-users",
            stateName: "branch",
            state: unref(branchStore)
          }, null, 8, ["title", "state"]),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QCard, null, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createVNode(Grid, {
                        gridName: "branchGrid",
                        gridOptions: unref(branchGrid),
                        stateName: "branch",
                        state: unref(branchStore)
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
                        [_directive_t, "messages.LabelBranch"]
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(QSeparator),
                  createVNode(QForm, {
                    onSubmit: unref(doSave),
                    ref: "branchForm"
                  }, {
                    default: withCtx(() => [
                      _hoisted_5,
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_6, [
                            createBaseVNode("div", _hoisted_7, [
                              createVNode(QInput, {
                                name: "branch",
                                modelValue: unref(form).branch,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).branch = $event),
                                "lazy-rules": "",
                                dense: "",
                                outlined: "",
                                ref: "refBranch",
                                label: _ctx.$t("messages.LabelBranch"),
                                rules: [(val) => !!val || _ctx.$t("messages.TextRequired")]
                              }, null, 8, ["modelValue", "label", "rules"]),
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
var Branch = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "Branch.vue"]]);
export { Branch as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJhbmNoLjIwZjc2MGVmLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQnJhbmNoLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHEtcGFnZSBjbGFzcz1cInEtcGEtc21cIj5cblxuICAgICAgICA8TmF2QmFyIDp0aXRsZT1cIiR0KCdtZXNzYWdlcy5Db2xCcmFuY2gnKVwiIGljb249XCJmYXMgZmEtdXNlcnNcIiBzdGF0ZU5hbWU9XCJicmFuY2hcIiA6c3RhdGU9XCJicmFuY2hTdG9yZVwiIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgIDxxLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGdyaWROYW1lPVwiYnJhbmNoR3JpZFwiIDpncmlkT3B0aW9ucz1cImJyYW5jaEdyaWRcIiBzdGF0ZU5hbWU9XCJicmFuY2hcIiA6c3RhdGU9XCJicmFuY2hTdG9yZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgIDxxLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCIgdi10PVwiJ21lc3NhZ2VzLkxhYmVsQnJhbmNoJ1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIC8+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8cS1mb3JtIEBzdWJtaXQ9XCJkb1NhdmVcIiByZWY9XCJicmFuY2hGb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAtOTk5OXB4XCIvPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHEtY29sLWd1dHRlci1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cImJyYW5jaFwiIHYtbW9kZWw9XCJmb3JtLmJyYW5jaFwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWQgcmVmPVwicmVmQnJhbmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxCcmFuY2gnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwiWyB2YWwgPT4gISF2YWwgfHwgJHQoJ21lc3NhZ2VzLlRleHRSZXF1aXJlZCcpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJkZXNjXCIgdi1tb2RlbD1cImZvcm0uZGVzY1wiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbERlc2MnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtZm9ybT5cbiAgICAgICAgICAgICAgICA8L3EtY2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgR2xvYmFsVmlldyAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29tbW9uL2hlbHBlcnMvR2xvYmFsVmlldyc7XG5pbXBvcnQgTmF2QmFyICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXIudnVlJzsgXG5pbXBvcnQgR3JpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvR3JpZC52dWUnO1xuXG5pbXBvcnQgXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IGRlYnVnICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2RlYnVnJztcbmNvbnN0IGxvZyAgICAgICAgID0gZGVidWcoJ2FwcDpicmFuY2gnKTtcblxuY29uc3QgaW5pdCAgICAgICAgPSB7IFxuICAgIGNvbGxOYW1lOiAgICAgICAnYnJhbmNoJywgXG4gICAgc3RhdGVOYW1lOiAgICAgICdicmFuY2gnXG59O1xuY29uc3QgZ2xvYmFsVmlldyAgPSBHbG9iYWxWaWV3KCBpbml0ICk7XG5jb25zdCB7IFxuICAgIHN0b3JlOiAgICAgICAgICBicmFuY2hTdG9yZSwgXG4gICAgZGF0YTogICAgICAgICAgIGJyYW5jaCwgXG4gICAgZG9TYXZlLFxuICAgIGZvcm0gXG59ICA9IGdsb2JhbFZpZXc7XG5cbmNvbnN0IGJyYW5jaEdyaWQgICAgICAgICAgICA9IHJlZih7fSk7XG5cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbImdsb2JhbFZpZXciLCJHbG9iYWxWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxREEsVUFBQSxZQUFBO0FBRUEsVUFBQSxPQUFBO0FBQUEsTUFBb0IsVUFBQTtBQUFBLE1BQ0EsV0FBQTtBQUFBLElBQ0E7QUFFcEIsVUFBQUEsZUFBQUMsV0FBQSxJQUFBO0FBQ0EsVUFBQTtBQUFBLE1BQU0sT0FBQTtBQUFBLE1BQ2MsTUFBQTtBQUFBLE1BQ0E7QUFBQSxNQUNoQjtBQUFBLElBQ0EsSUFBQUQ7QUFHSixVQUFBLGFBQUEsSUFBQSxDQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
