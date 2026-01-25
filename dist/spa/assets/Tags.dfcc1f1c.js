import { _ as _export_sfc, e as defineComponent, l as debug, L as useI18n, n as ref, M as _, T as resolveDirective, q as openBlock, s as createBlock, w as withCtx, f as createVNode, G as unref, D as QCardSection, V as withDirectives, E as createBaseVNode, x as QSeparator, F as QInput, U as QCard, C as QPage, J as pushScopeId, K as popScopeId } from "./index.8f8ca0f3.js";
import { Q as QSelect } from "./QSelect.72364726.js";
import { Q as QForm } from "./QForm.8c81555c.js";
import { g as globalView, N as NavBar } from "./NavBar.eb70e4d5.js";
import { G as Grid } from "./Grid.b4814aca.js";
import "./rtl.b51694b1.js";
import "./AgGridVue.c15bd737.js";
var Tags_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-cb6af476"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "text-h6" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("input", {
  type: "submit",
  style: { "position": "absolute", "left": "-9999px" }
}, null, -1));
const _hoisted_3 = { class: "row q-col-gutter-md" };
const _hoisted_4 = { class: "col-6" };
const _hoisted_5 = { class: "col-6" };
const _sfc_main = defineComponent({
  __name: "Tags",
  setup(__props) {
    debug("app:tags");
    const { t } = useI18n();
    const branch = [
      {
        value: "",
        label: ""
      },
      {
        value: "fahrzeug",
        label: t("messages.LabelCar")
      },
      {
        value: "lead",
        label: t("messages.LabelLead")
      },
      {
        value: "mail",
        label: t("messages.ColMail")
      },
      {
        value: "infos",
        label: t("messages.LabelCarinfo")
      },
      {
        value: "sales",
        label: t("messages.LabelSales")
      }
    ];
    const init = {
      collName: "tags",
      stateName: "tags",
      defaultForm: {
        branch: "",
        label: "",
        value: "",
        order: 0
      }
    };
    const globalView$1 = globalView(init);
    const {
      store: tagStore,
      data: tags,
      doSave,
      form
    } = globalView$1;
    const tagGrid = ref({
      columnTypes: {
        branchColumn: {
          valueGetter(params) {
            const branch2 = params.context.branchList[params.data.group];
            return (branch2 == null ? void 0 : branch2.label) || params.data.group;
          }
        }
      },
      context: {
        branchList: _.keyBy(branch, "value")
      }
    });
    return (_ctx, _cache) => {
      const _directive_t = resolveDirective("t");
      return openBlock(), createBlock(QPage, { class: "q-pa-sm" }, {
        default: withCtx(() => [
          createVNode(NavBar, {
            title: _ctx.$t("messages.LabelTags"),
            icon: "people",
            stateName: "tags",
            state: unref(tagStore),
            globalView: unref(globalView$1)
          }, null, 8, ["title", "state", "globalView"]),
          createVNode(QCard, null, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createVNode(Grid, {
                    gridName: "tagGrid",
                    gridOptions: unref(tagGrid),
                    stateName: "tags",
                    state: unref(tagStore)
                  }, null, 8, ["gridOptions", "state"])
                ]),
                _: 1
              }),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode("div", _hoisted_1, null, 512), [
                    [_directive_t, "messages.LabelTags"]
                  ])
                ]),
                _: 1
              }),
              createVNode(QSeparator),
              createVNode(QForm, { onSubmit: unref(doSave) }, {
                default: withCtx(() => [
                  _hoisted_2,
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_3, [
                        createBaseVNode("div", _hoisted_4, [
                          createVNode(QSelect, {
                            name: "group",
                            modelValue: unref(form).group,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).group = $event),
                            "lazy-rules": "",
                            dense: "",
                            outlined: "",
                            ref_key: "tags",
                            ref: tags,
                            label: _ctx.$t("messages.LabelBranch"),
                            options: branch,
                            "emit-value": "",
                            "map-options": "",
                            "option-value": "value",
                            "option-label": "label",
                            rules: [(val) => !!val || _ctx.$t("messages.TextRequired")]
                          }, null, 8, ["modelValue", "label", "rules"]),
                          createVNode(QInput, {
                            type: "number",
                            name: "order",
                            modelValue: unref(form).order,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).order = $event),
                            "lazy-rules": "",
                            dense: "",
                            outlined: "",
                            label: _ctx.$t("messages.ColOrder"),
                            rules: [(val) => !!val || _ctx.$t("messages.TextRequired")]
                          }, null, 8, ["modelValue", "label", "rules"])
                        ]),
                        createBaseVNode("div", _hoisted_5, [
                          createVNode(QInput, {
                            name: "label",
                            modelValue: unref(form).label,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).label = $event),
                            "lazy-rules": "",
                            dense: "",
                            outlined: "",
                            label: _ctx.$t("messages.ColText")
                          }, null, 8, ["modelValue", "label"]),
                          createVNode(QInput, {
                            name: "value",
                            modelValue: unref(form).value,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).value = $event),
                            "lazy-rules": "",
                            dense: "",
                            outlined: "",
                            label: _ctx.$t("messages.ColValue")
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
        ]),
        _: 1
      });
    };
  }
});
var Tags = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cb6af476"], ["__file", "Tags.vue"]]);
export { Tags as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFncy5kZmNjMWYxYy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL1RhZ3MudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8cS1wYWdlIGNsYXNzPVwicS1wYS1zbVwiPlxuXG4gICAgICAgIDxOYXZCYXIgOnRpdGxlPVwiJHQoJ21lc3NhZ2VzLkxhYmVsVGFncycpXCIgaWNvbj1cInBlb3BsZVwiIHN0YXRlTmFtZT1cInRhZ3NcIiA6c3RhdGU9XCJ0YWdTdG9yZVwiIDpnbG9iYWxWaWV3PVwiZ2xvYmFsVmlld1wiIC8+XG5cbiAgICAgICAgPHEtY2FyZD5cbiAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8R3JpZCBncmlkTmFtZT1cInRhZ0dyaWRcIiA6Z3JpZE9wdGlvbnM9XCJ0YWdHcmlkXCIgc3RhdGVOYW1lPVwidGFnc1wiIDpzdGF0ZT1cInRhZ1N0b3JlXCIgLz5cbiAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiIHYtdD1cIidtZXNzYWdlcy5MYWJlbFRhZ3MnXCI+PC9kaXY+XG4gICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8cS1zZXBhcmF0b3IgLz5cblxuICAgICAgICAgICAgPHEtZm9ybSBAc3VibWl0PVwiZG9TYXZlXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogLTk5OTlweFwiLz5cblxuICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtc2VsZWN0IG5hbWU9XCJncm91cFwiIHYtbW9kZWw9XCJmb3JtLmdyb3VwXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZCByZWY9XCJ0YWdzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsQnJhbmNoJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImJyYW5jaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtaXQtdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLW9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLXZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24tbGFiZWw9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpydWxlcz1cIlsgdmFsID0+ICEhdmFsIHx8ICR0KCdtZXNzYWdlcy5UZXh0UmVxdWlyZWQnKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJvcmRlclwiIHYtbW9kZWw9XCJmb3JtLm9yZGVyXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sT3JkZXInKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpydWxlcz1cIlsgdmFsID0+ICEhdmFsIHx8ICR0KCdtZXNzYWdlcy5UZXh0UmVxdWlyZWQnKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwibGFiZWxcIiB2LW1vZGVsPVwiZm9ybS5sYWJlbFwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbFRleHQnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwidmFsdWVcIiB2LW1vZGVsPVwiZm9ybS52YWx1ZVwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbFZhbHVlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICA8L3EtZm9ybT5cbiAgICAgICAgPC9xLWNhcmQ+XG4gICAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgdXNlSTE4biB9ICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3Z1ZS1pMThuJztcbmltcG9ydCBHbG9iYWxWaWV3ICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21tb24vaGVscGVycy9HbG9iYWxWaWV3JztcbmltcG9ydCBOYXZCYXIgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhci52dWUnOyBcbmltcG9ydCBHcmlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9HcmlkLnZ1ZSc7XG5cbmltcG9ydCBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGRlYnVnICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2RlYnVnJztcbmNvbnN0IGxvZyAgICAgICAgID0gZGVidWcoJ2FwcDp0YWdzJyk7XG5cbmNvbnN0IHsgdCB9ICAgICAgICAgPSB1c2VJMThuKCk7XG5cbmNvbnN0IGJyYW5jaCAgICAgPSBbXG4gICAge1xuICAgICAgICB2YWx1ZTogICAgICAgICAgJycsXG4gICAgICAgIGxhYmVsOiAgICAgICAgICAnJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB2YWx1ZTogICAgICAgICAgJ2ZhaHJ6ZXVnJyxcbiAgICAgICAgbGFiZWw6ICAgICAgICAgIHQoJ21lc3NhZ2VzLkxhYmVsQ2FyJylcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdmFsdWU6ICAgICAgICAgICdsZWFkJyxcbiAgICAgICAgbGFiZWw6ICAgICAgICAgIHQoJ21lc3NhZ2VzLkxhYmVsTGVhZCcpXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHZhbHVlOiAgICAgICAgICAnbWFpbCcsXG4gICAgICAgIGxhYmVsOiAgICAgICAgICB0KCdtZXNzYWdlcy5Db2xNYWlsJylcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdmFsdWU6ICAgICAgICAgICdpbmZvcycsXG4gICAgICAgIGxhYmVsOiAgICAgICAgICB0KCdtZXNzYWdlcy5MYWJlbENhcmluZm8nKVxuICAgIH0sXG4gICAge1xuICAgICAgICB2YWx1ZTogICAgICAgICAgJ3NhbGVzJyxcbiAgICAgICAgbGFiZWw6ICAgICAgICAgIHQoJ21lc3NhZ2VzLkxhYmVsU2FsZXMnKVxuICAgIH1cbl07XG5cbmNvbnN0IGluaXQgICAgICAgID0geyBcbiAgICBjb2xsTmFtZTogICAgICAgJ3RhZ3MnLCBcbiAgICBzdGF0ZU5hbWU6ICAgICAgJ3RhZ3MnLFxuICAgIGRlZmF1bHRGb3JtOiAgICB7XG4gICAgICAgIGJyYW5jaDogICAgICAgICAnJyxcbiAgICAgICAgbGFiZWw6ICAgICAgICAgICcnLFxuICAgICAgICB2YWx1ZTogICAgICAgICAgJycsXG4gICAgICAgIG9yZGVyOiAgICAgICAgICAwXG4gICAgfVxufTtcbmNvbnN0IGdsb2JhbFZpZXcgID0gR2xvYmFsVmlldyggaW5pdCApO1xuY29uc3QgeyBcbiAgICBzdG9yZTogICAgICAgICAgdGFnU3RvcmUsIFxuICAgIGRhdGE6ICAgICAgICAgICB0YWdzLCBcbiAgICBkb1NhdmUsXG4gICAgZm9ybSBcbn0gID0gZ2xvYmFsVmlldztcblxuY29uc3QgdGFnR3JpZCAgICAgICA9IHJlZih7XG4gICAgICAgIGNvbHVtblR5cGVzOiAgICB7XG4gICAgICAgICAgICBicmFuY2hDb2x1bW46ICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWVHZXR0ZXIoIHBhcmFtcyApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnJhbmNoICAgICAgICA9IHBhcmFtcy5jb250ZXh0LmJyYW5jaExpc3RbIHBhcmFtcy5kYXRhLmdyb3VwIF07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBicmFuY2g/LmxhYmVsIHx8IHBhcmFtcy5kYXRhLmdyb3VwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29udGV4dDogICAgICAgIHtcbiAgICAgICAgICAgIGJyYW5jaExpc3Q6ICAgICAgICAgXy5rZXlCeSggYnJhbmNoLCAndmFsdWUnICksXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG4uZ3JpZCB7XG4gICAgaGVpZ2h0OiAgICAgICAgNDAwcHg7XG4gICAgd2lkdGg6ICAgICAgICAgMTAwJTtcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiZ2xvYmFsVmlldyIsIkdsb2JhbFZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOERBLFVBQUEsVUFBQTtBQUVBLFVBQUEsRUFBQSxNQUFBO0FBRUEsVUFBQSxTQUFBO0FBQUEsTUFBbUI7QUFBQSxRQUNmLE9BQUE7QUFBQSxRQUNvQixPQUFBO0FBQUEsTUFDQTtBQUFBLE1BQ3BCO0FBQUEsUUFDQSxPQUFBO0FBQUEsUUFDb0IsT0FBQSxFQUFBLG1CQUFBO0FBQUEsTUFDcUI7QUFBQSxNQUN6QztBQUFBLFFBQ0EsT0FBQTtBQUFBLFFBQ29CLE9BQUEsRUFBQSxvQkFBQTtBQUFBLE1BQ3NCO0FBQUEsTUFDMUM7QUFBQSxRQUNBLE9BQUE7QUFBQSxRQUNvQixPQUFBLEVBQUEsa0JBQUE7QUFBQSxNQUNvQjtBQUFBLE1BQ3hDO0FBQUEsUUFDQSxPQUFBO0FBQUEsUUFDb0IsT0FBQSxFQUFBLHVCQUFBO0FBQUEsTUFDeUI7QUFBQSxNQUM3QztBQUFBLFFBQ0EsT0FBQTtBQUFBLFFBQ29CLE9BQUEsRUFBQSxxQkFBQTtBQUFBLE1BQ3VCO0FBQUEsSUFDM0M7QUFHSixVQUFBLE9BQUE7QUFBQSxNQUFvQixVQUFBO0FBQUEsTUFDQSxXQUFBO0FBQUEsTUFDQSxhQUFBO0FBQUEsUUFDQSxRQUFBO0FBQUEsUUFDSSxPQUFBO0FBQUEsUUFDQSxPQUFBO0FBQUEsUUFDQSxPQUFBO0FBQUEsTUFDQTtBQUFBLElBQ3BCO0FBRUosVUFBQUEsZUFBQUMsV0FBQSxJQUFBO0FBQ0EsVUFBQTtBQUFBLE1BQU0sT0FBQTtBQUFBLE1BQ2MsTUFBQTtBQUFBLE1BQ0E7QUFBQSxNQUNoQjtBQUFBLElBQ0EsSUFBQUQ7QUFHSixVQUFBLFVBQUEsSUFBQTtBQUFBLE1BQTBCLGFBQUE7QUFBQSxRQUNGLGNBQUE7QUFBQSxVQUNNLFlBQUEsUUFBQTtBQUVWLGtCQUFBLFVBQUEsT0FBQSxRQUFBLFdBQUEsT0FBQSxLQUFBO0FBQ0Esb0JBQUEsbUNBQUEsVUFBQSxPQUFBLEtBQUE7QUFBQSxVQUFvQztBQUFBLFFBQ3hDO0FBQUEsTUFDSjtBQUFBLE1BQ0osU0FBQTtBQUFBLFFBQ2dCLFlBQUEsRUFBQSxNQUFBLFFBQUEsT0FBQTtBQUFBLE1BQ2lDO0FBQUEsSUFDakQsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
