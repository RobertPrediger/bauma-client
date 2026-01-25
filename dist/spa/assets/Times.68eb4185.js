import { _ as _export_sfc, e as defineComponent, l as debug, n as ref, T as resolveDirective, q as openBlock, s as createBlock, w as withCtx, f as createVNode, G as unref, E as createBaseVNode, D as QCardSection, U as QCard, V as withDirectives, x as QSeparator, bA as withModifiers, F as QInput, W as QOptionGroup, C as QPage } from "./index.8f8ca0f3.js";
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
const _hoisted_8 = { class: "row q-col-gutter-md" };
const _hoisted_9 = { class: "col" };
const _hoisted_10 = { class: "col" };
const _hoisted_11 = { class: "row q-col-gutter-md" };
const _sfc_main = defineComponent({
  __name: "Times",
  setup(__props) {
    debug("app:times");
    const init = {
      collName: "times",
      stateName: "times",
      defaultForm: {
        days: []
      }
    };
    const globalView$1 = globalView(init);
    const {
      store: timesStore,
      data: times,
      doSave,
      form
    } = globalView$1;
    const timesGrid = ref({});
    const types = [
      { value: "GF", label: "Gesch\xE4ftszeiten" },
      { value: "WE", label: "Wochenende" },
      { value: "NA", label: "Nachts" }
    ], days = [
      { value: 0, label: "Sonntag" },
      { value: 1, label: "Montag" },
      { value: 2, label: "Dienstag" },
      { value: 3, label: "Mittwoch" },
      { value: 4, label: "Donnerstag" },
      { value: 5, label: "Freitag" },
      { value: 6, label: "Samstag" }
    ];
    return (_ctx, _cache) => {
      const _directive_t = resolveDirective("t");
      return openBlock(), createBlock(QPage, { class: "q-pa-sm" }, {
        default: withCtx(() => [
          createVNode(NavBar, {
            title: _ctx.$t("messages.LabelTimes"),
            icon: "fas fa-clock",
            stateName: "times",
            state: unref(timesStore)
          }, null, 8, ["title", "state"]),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QCard, null, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createVNode(Grid, {
                        gridName: "timesGrid",
                        gridOptions: unref(timesGrid),
                        stateName: "times",
                        state: unref(timesStore),
                        orientation: "portrait"
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
                        [_directive_t, "messages.LabelTimes"]
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(QSeparator),
                  createVNode(QForm, {
                    onSubmit: withModifiers(unref(doSave), ["prevent", "stop"]),
                    class: "q-gutter-xs",
                    ref: "refTimes"
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
                                rules: [(val) => !!val || _ctx.$t("messages.TextRequired")],
                                hint: ""
                              }, null, 8, ["modelValue", "label", "rules"]),
                              createVNode(QInput, {
                                name: "desc",
                                modelValue: unref(form).desc,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).desc = $event),
                                "lazy-rules": "",
                                dense: "",
                                outlined: "",
                                label: _ctx.$t("messages.ColDesc"),
                                hint: ""
                              }, null, 8, ["modelValue", "label"]),
                              createBaseVNode("div", _hoisted_8, [
                                createBaseVNode("div", _hoisted_9, [
                                  createVNode(QOptionGroup, {
                                    name: "to",
                                    modelValue: unref(form).type,
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).type = $event),
                                    options: types
                                  }, null, 8, ["modelValue"])
                                ]),
                                createBaseVNode("div", _hoisted_10, [
                                  createVNode(QOptionGroup, {
                                    name: "to",
                                    modelValue: unref(form).days,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).days = $event),
                                    options: days,
                                    type: "checkbox",
                                    hint: _ctx.$t("messages.HintTimesDays")
                                  }, null, 8, ["modelValue", "hint"])
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_11, [
                                createVNode(QInput, {
                                  name: "from",
                                  modelValue: unref(form).from,
                                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(form).from = $event),
                                  "lazy-rules": "",
                                  dense: "",
                                  outlined: "",
                                  class: "col",
                                  type: "time",
                                  label: _ctx.$t("messages.ColFrom"),
                                  rules: ["time"],
                                  hint: _ctx.$t("messages.HintTimesFrom")
                                }, null, 8, ["modelValue", "label", "hint"]),
                                createVNode(QInput, {
                                  name: "to",
                                  modelValue: unref(form).to,
                                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(form).to = $event),
                                  "lazy-rules": "",
                                  dense: "",
                                  outlined: "",
                                  class: "col",
                                  type: "time",
                                  label: _ctx.$t("messages.ColTo"),
                                  rules: ["time"],
                                  hint: _ctx.$t("messages.HintTimesTo")
                                }, null, 8, ["modelValue", "label", "hint"])
                              ])
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
var Times = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "Times.vue"]]);
export { Times as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZXMuNjhlYjQxODUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9UaW1lcy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxxLXBhZ2UgY2xhc3M9XCJxLXBhLXNtXCI+XG5cbiAgICAgICAgPE5hdkJhciA6dGl0bGU9XCIkdCgnbWVzc2FnZXMuTGFiZWxUaW1lcycpXCIgaWNvbj1cImZhcyBmYS1jbG9ja1wiIHN0YXRlTmFtZT1cInRpbWVzXCIgOnN0YXRlPVwidGltZXNTdG9yZVwiIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgIDxxLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGdyaWROYW1lPVwidGltZXNHcmlkXCIgOmdyaWRPcHRpb25zPVwidGltZXNHcmlkXCIgc3RhdGVOYW1lPVwidGltZXNcIiA6c3RhdGU9XCJ0aW1lc1N0b3JlXCIgb3JpZW50YXRpb249XCJwb3J0cmFpdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgIDxxLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCIgdi10PVwiJ21lc3NhZ2VzLkxhYmVsVGltZXMnXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8cS1zZXBhcmF0b3IgLz5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxxLWZvcm0gQHN1Ym1pdC5wcmV2ZW50LnN0b3A9XCJkb1NhdmVcIiBjbGFzcz1cInEtZ3V0dGVyLXhzXCIgcmVmPVwicmVmVGltZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IC05OTk5cHhcIi8+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwibmFtZVwiIHYtbW9kZWw9XCJmb3JtLm5hbWVcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbE5hbWUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwiWyB2YWwgPT4gISF2YWwgfHwgJHQoJ21lc3NhZ2VzLlRleHRSZXF1aXJlZCcpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJkZXNjXCIgdi1tb2RlbD1cImZvcm0uZGVzY1wiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sRGVzYycpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHEtY29sLWd1dHRlci1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtb3B0aW9uLWdyb3VwIG5hbWU9XCJ0b1wiIHYtbW9kZWw9XCJmb3JtLnR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJ0eXBlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtb3B0aW9uLWdyb3VwIG5hbWU9XCJ0b1wiIHYtbW9kZWw9XCJmb3JtLmRheXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJkYXlzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGludD1cIiR0KCdtZXNzYWdlcy5IaW50VGltZXNEYXlzJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHEtY29sLWd1dHRlci1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJmcm9tXCIgdi1tb2RlbD1cImZvcm0uZnJvbVwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWQgY2xhc3M9XCJjb2xcIiB0eXBlPVwidGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xGcm9tJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cnVsZXM9XCJbJ3RpbWUnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoaW50PVwiJHQoJ21lc3NhZ2VzLkhpbnRUaW1lc0Zyb20nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cInRvXCIgdi1tb2RlbD1cImZvcm0udG9cIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkIGNsYXNzPVwiY29sXCIgdHlwZT1cInRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sVG8nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpydWxlcz1cIlsndGltZSddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhpbnQ9XCIkdCgnbWVzc2FnZXMuSGludFRpbWVzVG8nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3EtZm9ybT5cbiAgICAgICAgICAgICAgICA8L3EtY2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgR2xvYmFsVmlldyAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29tbW9uL2hlbHBlcnMvR2xvYmFsVmlldyc7XG5pbXBvcnQgTmF2QmFyICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXIudnVlJzsgXG5pbXBvcnQgR3JpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudHMvR3JpZC52dWUnO1xuXG5pbXBvcnQgXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IGRlYnVnICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2RlYnVnJztcbmNvbnN0IGxvZyAgICAgICAgID0gZGVidWcoJ2FwcDp0aW1lcycpO1xuXG5jb25zdCBpbml0ICAgICAgICA9IHsgXG4gICAgY29sbE5hbWU6ICAgICAgICd0aW1lcycsIFxuICAgIHN0YXRlTmFtZTogICAgICAndGltZXMnLFxuICAgIGRlZmF1bHRGb3JtOiAgICB7XG4gICAgICAgIGRheXM6ICAgICAgICAgICBbXVxuICAgIH1cbn07XG5jb25zdCBnbG9iYWxWaWV3ICA9IEdsb2JhbFZpZXcoIGluaXQgKTtcbmNvbnN0IHsgXG4gICAgc3RvcmU6ICAgICAgICAgIHRpbWVzU3RvcmUsIFxuICAgIGRhdGE6ICAgICAgICAgICB0aW1lcywgXG4gICAgZG9TYXZlLFxuICAgIGZvcm0gXG59ICA9IGdsb2JhbFZpZXc7XG5cbmNvbnN0IHRpbWVzR3JpZCAgICAgICAgICAgICAgPSByZWYoe30pO1xuXG5jb25zdCAgIHR5cGVzICAgICAgICAgICAgID0gW1xuICAgICAgICAgICAgeyB2YWx1ZTogJ0dGJywgbGFiZWw6ICdHZXNjaMOkZnRzemVpdGVuJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogJ1dFJywgbGFiZWw6ICdXb2NoZW5lbmRlJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogJ05BJywgbGFiZWw6ICdOYWNodHMnIH1cbiAgICAgICAgXSxcbiAgICAgICAgZGF5cyAgICAgICAgICAgICAgPSBbXG4gICAgICAgICAgICB7IHZhbHVlOiAwLCBsYWJlbDogJ1Nvbm50YWcnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiAxLCBsYWJlbDogJ01vbnRhZycgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IDIsIGxhYmVsOiAnRGllbnN0YWcnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiAzLCBsYWJlbDogJ01pdHR3b2NoJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogNCwgbGFiZWw6ICdEb25uZXJzdGFnJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogNSwgbGFiZWw6ICdGcmVpdGFnJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogNiwgbGFiZWw6ICdTYW1zdGFnJyB9XG4gICAgICAgIF07XG5cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbImdsb2JhbFZpZXciLCJHbG9iYWxWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUZBLFVBQUEsV0FBQTtBQUVBLFVBQUEsT0FBQTtBQUFBLE1BQW9CLFVBQUE7QUFBQSxNQUNBLFdBQUE7QUFBQSxNQUNBLGFBQUE7QUFBQSxRQUNBLE1BQUEsQ0FBQTtBQUFBLE1BQ0s7QUFBQSxJQUNyQjtBQUVKLFVBQUFBLGVBQUFDLFdBQUEsSUFBQTtBQUNBLFVBQUE7QUFBQSxNQUFNLE9BQUE7QUFBQSxNQUNjLE1BQUE7QUFBQSxNQUNBO0FBQUEsTUFDaEI7QUFBQSxJQUNBLElBQUFEO0FBR0osVUFBQSxZQUFBLElBQUEsQ0FBQSxDQUFBO0FBRUEsVUFBQSxRQUFBO0FBQUEsTUFBNEIsRUFBQSxPQUFBLE1BQUEsT0FBQSxxQkFBQTtBQUFBLE1BQ3dCLEVBQUEsT0FBQSxNQUFBLE9BQUEsYUFBQTtBQUFBLE1BQ0wsRUFBQSxPQUFBLE1BQUEsT0FBQSxTQUFBO0FBQUEsSUFDSixHQUFBLE9BQUE7QUFBQSxNQUVmLEVBQUEsT0FBQSxHQUFBLE9BQUEsVUFBQTtBQUFBLE1BQ2EsRUFBQSxPQUFBLEdBQUEsT0FBQSxTQUFBO0FBQUEsTUFDRCxFQUFBLE9BQUEsR0FBQSxPQUFBLFdBQUE7QUFBQSxNQUNFLEVBQUEsT0FBQSxHQUFBLE9BQUEsV0FBQTtBQUFBLE1BQ0EsRUFBQSxPQUFBLEdBQUEsT0FBQSxhQUFBO0FBQUEsTUFDRSxFQUFBLE9BQUEsR0FBQSxPQUFBLFVBQUE7QUFBQSxNQUNILEVBQUEsT0FBQSxHQUFBLE9BQUEsVUFBQTtBQUFBLElBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
