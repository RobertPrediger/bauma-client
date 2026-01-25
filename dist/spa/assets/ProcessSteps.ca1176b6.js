import { _ as _export_sfc, e as defineComponent, l as debug, T as resolveDirective, q as openBlock, s as createBlock, w as withCtx, f as createVNode, G as unref, E as createBaseVNode, D as QCardSection, U as QCard, V as withDirectives, x as QSeparator, F as QInput, C as QPage } from "./index.8f8ca0f3.js";
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
  __name: "ProcessSteps",
  setup(__props) {
    const log = debug("app:processSteps");
    log("start");
    const init = {
      collName: "processsteps",
      stateName: "processsteps"
    };
    const globalView$1 = globalView(init);
    const {
      store: processStepsStore,
      data: processsteps,
      doSave,
      form
    } = globalView$1;
    return (_ctx, _cache) => {
      const _directive_t = resolveDirective("t");
      return openBlock(), createBlock(QPage, { class: "q-pa-sm" }, {
        default: withCtx(() => [
          createVNode(NavBar, {
            title: _ctx.$t("messages.LabelProcesssteps"),
            icon: "open_with",
            stateName: "processsteps",
            state: unref(processStepsStore)
          }, null, 8, ["title", "state"]),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QCard, null, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createVNode(Grid, {
                        gridName: "processStepGrid",
                        gridOptions: _ctx.processStepGrid,
                        stateName: "processsteps",
                        state: unref(processStepsStore)
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
                        [_directive_t, "messages.LabelProcesssteps"]
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(QSeparator),
                  createVNode(QForm, {
                    onSubmit: unref(doSave),
                    class: "q-gutter-xs",
                    ref_key: "processsteps",
                    ref: processsteps
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
          ])
        ]),
        _: 1
      });
    };
  }
});
var ProcessSteps = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "ProcessSteps.vue"]]);
export { ProcessSteps as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzc1N0ZXBzLmNhMTE3NmI2LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvUHJvY2Vzc1N0ZXBzLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHEtcGFnZSBjbGFzcz1cInEtcGEtc21cIj5cblxuICAgICAgICA8TmF2QmFyIDp0aXRsZT1cIiR0KCdtZXNzYWdlcy5MYWJlbFByb2Nlc3NzdGVwcycpXCIgaWNvbj1cIm9wZW5fd2l0aFwiIHN0YXRlTmFtZT1cInByb2Nlc3NzdGVwc1wiIDpzdGF0ZT1cInByb2Nlc3NTdGVwc1N0b3JlXCIgLz5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICA8cS1jYXJkPlxuICAgICAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBncmlkTmFtZT1cInByb2Nlc3NTdGVwR3JpZFwiIDpncmlkT3B0aW9ucz1cInByb2Nlc3NTdGVwR3JpZFwiIHN0YXRlTmFtZT1cInByb2Nlc3NzdGVwc1wiIDpzdGF0ZT1cInByb2Nlc3NTdGVwc1N0b3JlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtY2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgPHEtY2FyZD5cblxuICAgICAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiIHYtdD1cIidtZXNzYWdlcy5MYWJlbFByb2Nlc3NzdGVwcydcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxxLXNlcGFyYXRvciAvPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHEtZm9ybSBAc3VibWl0PVwiZG9TYXZlXCIgY2xhc3M9XCJxLWd1dHRlci14c1wiIHJlZj1cInByb2Nlc3NzdGVwc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogLTk5OTlweFwiLz5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJuYW1lXCIgdi1tb2RlbD1cImZvcm0ubmFtZVwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sTmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cImRlc2NcIiB2LW1vZGVsPVwiZm9ybS5kZXNjXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xEZXNjJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1mb3JtPlxuICAgICAgICAgICAgICAgIDwvcS1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCBHbG9iYWxWaWV3ICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21tb24vaGVscGVycy9HbG9iYWxWaWV3JztcbmltcG9ydCBOYXZCYXIgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhci52dWUnOyBcbmltcG9ydCBHcmlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9HcmlkLnZ1ZSc7XG5cbmltcG9ydCBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGRlYnVnICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2RlYnVnJztcbmNvbnN0IGxvZyAgICAgICAgID0gZGVidWcoJ2FwcDpwcm9jZXNzU3RlcHMnKTtcblxubG9nKCAnc3RhcnQnICk7XG5cbmNvbnN0IGluaXQgICAgICAgID0geyBcbiAgICBjb2xsTmFtZTogICAgICAgJ3Byb2Nlc3NzdGVwcycsIFxuICAgIHN0YXRlTmFtZTogICAgICAncHJvY2Vzc3N0ZXBzJ1xufTtcbmNvbnN0IGdsb2JhbFZpZXcgID0gR2xvYmFsVmlldyggaW5pdCApO1xuY29uc3QgeyBcbiAgICBzdG9yZTogICAgICAgICAgcHJvY2Vzc1N0ZXBzU3RvcmUsIFxuICAgIGRhdGE6ICAgICAgICAgICBwcm9jZXNzc3RlcHMsIFxuICAgIGRvU2F2ZSxcbiAgICBmb3JtIFxufSAgPSBnbG9iYWxWaWV3O1xuXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJnbG9iYWxWaWV3IiwiR2xvYmFsVmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLFVBQUEsTUFBQSxNQUFBLGtCQUFBO0FBRUEsUUFBQSxPQUFBO0FBRUEsVUFBQSxPQUFBO0FBQUEsTUFBb0IsVUFBQTtBQUFBLE1BQ0EsV0FBQTtBQUFBLElBQ0E7QUFFcEIsVUFBQUEsZUFBQUMsV0FBQSxJQUFBO0FBQ0EsVUFBQTtBQUFBLE1BQU0sT0FBQTtBQUFBLE1BQ2MsTUFBQTtBQUFBLE1BQ0E7QUFBQSxNQUNoQjtBQUFBLElBQ0EsSUFBQUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
