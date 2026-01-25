import { _ as _export_sfc, e as defineComponent, l as debug, n as ref, q as openBlock, s as createBlock, w as withCtx, f as createVNode, G as unref, E as createBaseVNode, D as QCardSection, U as QCard, A as toDisplayString, x as QSeparator, F as QInput, C as QPage } from "./index.8f8ca0f3.js";
import { Q as QSelect } from "./QSelect.72364726.js";
import { Q as QForm } from "./QForm.8c81555c.js";
import { g as globalView, N as NavBar } from "./NavBar.eb70e4d5.js";
import { G as Grid } from "./Grid.b4814aca.js";
import "./rtl.b51694b1.js";
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
  __name: "CarInfo",
  setup(__props) {
    debug("app:languages");
    const init = {
      collName: "carInfo",
      stateName: "carinfo"
    };
    const globalView$1 = globalView(init);
    const {
      store: carinfoStore,
      data: carinfo,
      doSave,
      form
    } = globalView$1;
    const carinfoGrid = ref({});
    const options = [
      "string",
      "boolean",
      "number",
      "decimal"
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "q-pa-sm" }, {
        default: withCtx(() => [
          createVNode(NavBar, {
            title: _ctx.$t("messages.LabelCarinfo"),
            icon: "extension",
            stateName: "carinfo",
            state: unref(carinfoStore)
          }, null, 8, ["title", "state"]),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QCard, null, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createVNode(Grid, {
                        gridName: "carinfoGrid",
                        gridOptions: unref(carinfoGrid),
                        stateName: "carinfo",
                        state: unref(carinfoStore),
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
                      createBaseVNode("div", _hoisted_4, toDisplayString(_ctx.$t("messages.ColCarInfo")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(QSeparator),
                  createVNode(QForm, {
                    onSubmit: unref(doSave),
                    class: "q-gutter-xs",
                    ref: "refCarinfo"
                  }, {
                    default: withCtx(() => [
                      _hoisted_5,
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_6, [
                            createBaseVNode("div", _hoisted_7, [
                              createVNode(QInput, {
                                name: "key",
                                modelValue: unref(form).key,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).key = $event),
                                "lazy-rules": "",
                                dense: "",
                                outlined: "",
                                label: _ctx.$t("messages.ColKey"),
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
                              createVNode(QSelect, {
                                name: "type",
                                modelValue: unref(form).type,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).type = $event),
                                "lazy-rules": "",
                                dense: "",
                                outlined: "",
                                options,
                                label: _ctx.$t("messages.ColType")
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
var CarInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "CarInfo.vue"]]);
export { CarInfo as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FySW5mby5hYTU4YWE2Ni5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0NhckluZm8udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8cS1wYWdlIGNsYXNzPVwicS1wYS1zbVwiPlxuXG4gICAgICAgIDxOYXZCYXIgOnRpdGxlPVwiJHQoJ21lc3NhZ2VzLkxhYmVsQ2FyaW5mbycpXCIgaWNvbj1cImV4dGVuc2lvblwiIHN0YXRlTmFtZT1cImNhcmluZm9cIiA6c3RhdGU9XCJjYXJpbmZvU3RvcmVcIiAvPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgIDxxLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGdyaWROYW1lPVwiY2FyaW5mb0dyaWRcIiA6Z3JpZE9wdGlvbnM9XCJjYXJpbmZvR3JpZFwiIHN0YXRlTmFtZT1cImNhcmluZm9cIiA6c3RhdGU9XCJjYXJpbmZvU3RvcmVcIiBvcmllbnRhdGlvbj1cInBvcnRyYWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtY2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgPHEtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj57eyAkdCgnbWVzc2FnZXMuQ29sQ2FySW5mbycpIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8cS1zZXBhcmF0b3IgLz5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxxLWZvcm0gQHN1Ym1pdD1cImRvU2F2ZVwiIGNsYXNzPVwicS1ndXR0ZXIteHNcIiByZWY9XCJyZWZDYXJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAtOTk5OXB4XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJrZXlcIiB2LW1vZGVsPVwiZm9ybS5rZXlcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbEtleScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cnVsZXM9XCJbIHZhbCA9PiAhIXZhbCB8fCAkdCgnbWVzc2FnZXMuVGV4dFJlcXVpcmVkJyldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cImRlc2NcIiB2LW1vZGVsPVwiZm9ybS5kZXNjXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xEZXNjJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1zZWxlY3QgbmFtZT1cInR5cGVcIiB2LW1vZGVsPVwiZm9ybS50eXBlXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwib3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbFR5cGUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWZvcm0+XG4gICAgICAgICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IEdsb2JhbFZpZXcgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbW1vbi9oZWxwZXJzL0dsb2JhbFZpZXcnO1xuaW1wb3J0IE5hdkJhciAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2QmFyLnZ1ZSc7IFxuaW1wb3J0IEdyaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL0dyaWQudnVlJztcblxuaW1wb3J0IF8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCBkZWJ1ZyAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdkZWJ1Zyc7XG5jb25zdCBsb2cgICAgICAgICA9IGRlYnVnKCdhcHA6bGFuZ3VhZ2VzJyk7XG5cbmNvbnN0IGluaXQgICAgICAgID0geyBcbiAgICBjb2xsTmFtZTogICAgICAgJ2NhckluZm8nLCBcbiAgICBzdGF0ZU5hbWU6ICAgICAgJ2NhcmluZm8nXG59O1xuY29uc3QgZ2xvYmFsVmlldyAgPSBHbG9iYWxWaWV3KCBpbml0ICk7XG5jb25zdCB7IFxuICAgIHN0b3JlOiAgICAgICAgICBjYXJpbmZvU3RvcmUsIFxuICAgIGRhdGE6ICAgICAgICAgICBjYXJpbmZvLCBcbiAgICBkb1NhdmUsXG4gICAgZm9ybSBcbn0gID0gZ2xvYmFsVmlldztcblxuY29uc3QgY2FyaW5mb0dyaWQgICAgICAgICAgICAgID0gcmVmKHt9KTtcblxuY29uc3QgICBvcHRpb25zICAgICAgICAgICA9IFtcbiAgICAgICAgICAgICdzdHJpbmcnLFxuICAgICAgICAgICAgJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgJ251bWJlcicsXG4gICAgICAgICAgICAnZGVjaW1hbCdcbiAgICAgICAgXTtcblxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiZ2xvYmFsVmlldyIsIkdsb2JhbFZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBLFVBQUEsZUFBQTtBQUVBLFVBQUEsT0FBQTtBQUFBLE1BQW9CLFVBQUE7QUFBQSxNQUNBLFdBQUE7QUFBQSxJQUNBO0FBRXBCLFVBQUFBLGVBQUFDLFdBQUEsSUFBQTtBQUNBLFVBQUE7QUFBQSxNQUFNLE9BQUE7QUFBQSxNQUNjLE1BQUE7QUFBQSxNQUNBO0FBQUEsTUFDaEI7QUFBQSxJQUNBLElBQUFEO0FBR0osVUFBQSxjQUFBLElBQUEsQ0FBQSxDQUFBO0FBRUEsVUFBQSxVQUFBO0FBQUEsTUFBNEI7QUFBQSxNQUNoQjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
