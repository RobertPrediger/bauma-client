import { _ as _export_sfc, e as defineComponent, l as debug, bc as reactive, T as resolveDirective, q as openBlock, s as createBlock, w as withCtx, f as createVNode, G as unref, E as createBaseVNode, D as QCardSection, x as QSeparator, U as QCard, V as withDirectives, bA as withModifiers, F as QInput, bB as QCheckbox, C as QPage, J as pushScopeId, K as popScopeId } from "./index.8f8ca0f3.js";
import { Q as QForm } from "./QForm.8c81555c.js";
import { g as globalView, N as NavBar } from "./NavBar.eb70e4d5.js";
import { G as Grid } from "./Grid.b4814aca.js";
import "./AgGridVue.c15bd737.js";
var Portal_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-698ce662"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "row q-col-gutter-md" };
const _hoisted_2 = { class: "col" };
const _hoisted_3 = { class: "row q-col-gutter-md" };
const _hoisted_4 = { class: "col" };
const _hoisted_5 = { class: "text-h6" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("input", {
  type: "submit",
  style: { "position": "absolute", "left": "-9999px" }
}, null, -1));
const _hoisted_7 = { class: "row q-col-gutter-md" };
const _hoisted_8 = { class: "col-6" };
const _hoisted_9 = { class: "col-6" };
const _sfc_main = defineComponent({
  __name: "Portal",
  setup(__props) {
    debug("app:portal");
    const init = {
      collName: "portal",
      stateName: "portals"
    };
    const globalView$1 = globalView(init);
    const {
      store: portalStore,
      data: portals,
      doSave,
      form
    } = globalView$1;
    const portalGrid = reactive({
      components: {
        activeColumn: function(params) {
          return params.value ? '<i class="fas fa-check-square" />' : "";
        }
      }
    });
    return (_ctx, _cache) => {
      const _directive_t = resolveDirective("t");
      return openBlock(), createBlock(QPage, { class: "q-pa-sm" }, {
        default: withCtx(() => [
          createVNode(NavBar, {
            title: _ctx.$t("messages.LabelPortal"),
            icon: "event_seat",
            stateName: "portalStore",
            state: unref(portalStore)
          }, null, 8, ["title", "state"]),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QCard, null, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createVNode(Grid, {
                        gridName: "portalGrid",
                        gridOptions: unref(portalGrid),
                        stateName: "portals",
                        state: unref(portalStore)
                      }, null, 8, ["gridOptions", "state"])
                    ]),
                    _: 1
                  }),
                  createVNode(QSeparator)
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(QCard, { class: "form" }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      withDirectives(createBaseVNode("div", _hoisted_5, null, 512), [
                        [_directive_t, "messages.LabelPortal"]
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(QSeparator),
                  createVNode(QForm, {
                    onSubmit: withModifiers(unref(doSave), ["prevent", "stop"]),
                    class: "q-gutter-xs",
                    ref: "refPortals"
                  }, {
                    default: withCtx(() => [
                      _hoisted_6,
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_7, [
                            createBaseVNode("div", _hoisted_8, [
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
                              createVNode(QCheckbox, {
                                name: "active",
                                modelValue: unref(form).active,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).active = $event),
                                label: _ctx.$t("messages.ColActive"),
                                hint: ""
                              }, null, 8, ["modelValue", "label"])
                            ]),
                            createBaseVNode("div", _hoisted_9, [
                              createVNode(QInput, {
                                type: "mail",
                                name: "email",
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).email = $event),
                                "lazy-rules": "",
                                dense: "",
                                outlined: "",
                                label: _ctx.$t("messages.ColMail"),
                                rules: [(val) => !!val || _ctx.$t("messages.TextRequired")],
                                hint: ""
                              }, null, 8, ["modelValue", "label", "rules"])
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
var Portal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-698ce662"], ["__file", "Portal.vue"]]);
export { Portal as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9ydGFsLmM1ZDYxODBlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvUG9ydGFsLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHEtcGFnZSBjbGFzcz1cInEtcGEtc21cIj5cblxuICAgICAgICA8TmF2QmFyIDp0aXRsZT1cIiR0KCdtZXNzYWdlcy5MYWJlbFBvcnRhbCcpXCIgaWNvbj1cImV2ZW50X3NlYXRcIiBzdGF0ZU5hbWU9XCJwb3J0YWxTdG9yZVwiIDpzdGF0ZT1cInBvcnRhbFN0b3JlXCIgLz5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHEtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgZ3JpZE5hbWU9XCJwb3J0YWxHcmlkXCIgOmdyaWRPcHRpb25zPVwicG9ydGFsR3JpZFwiIHN0YXRlTmFtZT1cInBvcnRhbHNcIiA6c3RhdGU9XCJwb3J0YWxTdG9yZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8cS1zZXBhcmF0b3IgLz5cbiAgICAgICAgICAgICAgICA8L3EtY2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHEtY29sLWd1dHRlci1tZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxxLWNhcmQgY2xhc3M9XCJmb3JtXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIiB2LXQ9XCInbWVzc2FnZXMuTGFiZWxQb3J0YWwnXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8cS1zZXBhcmF0b3IgLz5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxxLWZvcm0gQHN1Ym1pdC5wcmV2ZW50LnN0b3A9XCJkb1NhdmVcIiBjbGFzcz1cInEtZ3V0dGVyLXhzXCIgcmVmPVwicmVmUG9ydGFsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogLTk5OTlweFwiLz5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cIm5hbWVcIiB2LW1vZGVsPVwiZm9ybS5uYW1lXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xOYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpydWxlcz1cIlsgdmFsID0+ICEhdmFsIHx8ICR0KCdtZXNzYWdlcy5UZXh0UmVxdWlyZWQnKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiZGVzY1wiIHYtbW9kZWw9XCJmb3JtLmRlc2NcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbERlc2MnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWNoZWNrYm94IG5hbWU9XCJhY3RpdmVcIiB2LW1vZGVsPVwiZm9ybS5hY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xBY3RpdmUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCB0eXBlPVwibWFpbFwiIG5hbWU9XCJlbWFpbFwiIHYtbW9kZWw9XCJmb3JtLmVtYWlsXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xNYWlsJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpydWxlcz1cIlsgdmFsID0+ICEhdmFsIHx8ICR0KCdtZXNzYWdlcy5UZXh0UmVxdWlyZWQnKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1mb3JtPlxuICAgICAgICAgICAgICAgIDwvcS1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCBHbG9iYWxWaWV3ICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21tb24vaGVscGVycy9HbG9iYWxWaWV3JztcbmltcG9ydCBOYXZCYXIgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhci52dWUnOyBcbmltcG9ydCBHcmlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9HcmlkLnZ1ZSc7XG5cbmltcG9ydCBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgZGVidWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnZGVidWcnO1xuY29uc3QgbG9nICAgICAgICAgPSBkZWJ1ZygnYXBwOnBvcnRhbCcpO1xuXG5jb25zdCBpbml0ICAgICAgICA9IHsgXG4gICAgY29sbE5hbWU6ICAgICAgICdwb3J0YWwnLCBcbiAgICBzdGF0ZU5hbWU6ICAgICAgJ3BvcnRhbHMnXG59O1xuY29uc3QgZ2xvYmFsVmlldyAgPSBHbG9iYWxWaWV3KCBpbml0ICk7XG5jb25zdCB7IFxuICAgIHN0b3JlOiAgICAgICAgICBwb3J0YWxTdG9yZSwgXG4gICAgZGF0YTogICAgICAgICAgIHBvcnRhbHMsIFxuICAgIGRvU2F2ZSxcbiAgICBmb3JtIFxufSAgPSBnbG9iYWxWaWV3O1xuXG5jb25zdCBwb3J0YWxHcmlkICAgICA9IHJlYWN0aXZlKHtcbiAgICAgICAgY29tcG9uZW50czogICAgIHtcbiAgICAgICAgICAgIGFjdGl2ZUNvbHVtbjogICBmdW5jdGlvbiggcGFyYW1zICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbXMudmFsdWUgPyAnPGkgY2xhc3M9XCJmYXMgZmEtY2hlY2stc3F1YXJlXCIgLz4nIDogJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cblxuLnNjcm9sbCB7XG4gICAgaGVpZ2h0OiAgICBjYWxjKCAxMDB2aCAtIDQwMHB4IC0gMTAwcHggLSA5NXB4IC0gNzBweCApO1xufVxuXG48L3N0eWxlPiJdLCJuYW1lcyI6WyJnbG9iYWxWaWV3IiwiR2xvYmFsVmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJFQSxVQUFBLFlBQUE7QUFFQSxVQUFBLE9BQUE7QUFBQSxNQUFvQixVQUFBO0FBQUEsTUFDQSxXQUFBO0FBQUEsSUFDQTtBQUVwQixVQUFBQSxlQUFBQyxXQUFBLElBQUE7QUFDQSxVQUFBO0FBQUEsTUFBTSxPQUFBO0FBQUEsTUFDYyxNQUFBO0FBQUEsTUFDQTtBQUFBLE1BQ2hCO0FBQUEsSUFDQSxJQUFBRDtBQUdKLFVBQUEsYUFBQSxTQUFBO0FBQUEsTUFBZ0MsWUFBQTtBQUFBLFFBQ1IsY0FBQSxTQUFBLFFBQUE7QUFFUixpQkFBQSxPQUFBLFFBQUEsc0NBQUE7QUFBQSxRQUE0RDtBQUFBLE1BQ2hFO0FBQUEsSUFDSixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
