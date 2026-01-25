import { _ as _export_sfc, e as defineComponent, l as debug, O as useDataStore, R as storeToRefs, n as ref, bc as reactive, M as _, T as resolveDirective, q as openBlock, s as createBlock, w as withCtx, f as createVNode, G as unref, E as createBaseVNode, D as QCardSection, x as QSeparator, U as QCard, V as withDirectives, Z as QScrollArea, F as QInput, C as QPage, J as pushScopeId, K as popScopeId } from "./index.8f8ca0f3.js";
import { Q as QSelect } from "./QSelect.72364726.js";
import { Q as QForm } from "./QForm.8c81555c.js";
import { g as globalView, N as NavBar } from "./NavBar.eb70e4d5.js";
import { G as Grid } from "./Grid.b4814aca.js";
import "./rtl.b51694b1.js";
import "./AgGridVue.c15bd737.js";
var User_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-329dcaa1"), n = n(), popScopeId(), n);
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
const _hoisted_8 = { class: "col-4" };
const _hoisted_9 = { class: "col-4" };
const _hoisted_10 = { class: "col-4" };
const _sfc_main = defineComponent({
  __name: "User",
  setup(__props) {
    const log = debug("app:user");
    log("start");
    const init = {
      collName: "user",
      stateName: "user"
    };
    const globalView$1 = globalView(init);
    const {
      store: userStore,
      data: users,
      doSave,
      form
    } = globalView$1;
    const companiesStore = useDataStore("companies", "companies");
    const languagesStore = useDataStore("languages", "languages");
    const userrightsStore = useDataStore("userrights", "userrights");
    const { data: companies } = storeToRefs(companiesStore);
    const { data: languages } = storeToRefs(languagesStore);
    const { data: roles } = storeToRefs(userrightsStore);
    const userList = ref([]);
    const userGrid = reactive({
      columnTypes: {
        companyColumn: {
          valueGetter(params) {
            const company = params.context.companies && params.context.companies[params.data.company] || "";
            return company && company.name || params.data.company;
          }
        },
        langColumn: {
          valueGetter(params) {
            const lang = params.context.languages && params.context.languages[params.data.lang] || "";
            return lang && lang.desc || params.data.lang;
          }
        },
        roleColumn: {
          valueGetter(params) {
            const roles2 = _.map(params.data.rights, (elm) => {
              return params.context.roles[elm] && params.context.roles[elm].desc || "";
            });
            return roles2;
          }
        }
      }
    });
    function subGridReady({ gridOpt }) {
      const context = {
        companies: _.keyBy(companies.value, "_id"),
        languages: _.keyBy(languages.value, "name"),
        roles: _.keyBy(roles.value, "right")
      };
      gridOpt.context = context;
    }
    Promise.all([
      companiesStore.getStore(),
      languagesStore.getStore(),
      userrightsStore.getStore()
    ]).then(() => {
      userList.value = _.map(users.value, (item) => {
        return {
          value: item._id,
          label: `${item.firstName} ${item.surName}`
        };
      });
    });
    return (_ctx, _cache) => {
      const _directive_t = resolveDirective("t");
      return openBlock(), createBlock(QPage, { class: "q-pa-sm" }, {
        default: withCtx(() => [
          createVNode(NavBar, {
            title: _ctx.$t("messages.LabelUser"),
            icon: "fas fa-user-edit",
            stateName: "user",
            state: unref(userStore)
          }, null, 8, ["title", "state"]),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QCard, null, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createVNode(Grid, {
                        gridName: "userGrid",
                        gridOptions: unref(userGrid),
                        stateName: "user",
                        state: unref(userStore),
                        onSubGridReady: subGridReady
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
                        [_directive_t, "messages.LabelUser"]
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(QSeparator),
                  createVNode(QScrollArea, {
                    class: "scroll",
                    visible: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(QForm, {
                        onSubmit: unref(doSave),
                        ref: "userForm"
                      }, {
                        default: withCtx(() => [
                          _hoisted_6,
                          createVNode(QCardSection, null, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_7, [
                                createBaseVNode("div", _hoisted_8, [
                                  createVNode(QInput, {
                                    name: "krz",
                                    modelValue: unref(form).krz,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).krz = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    ref: "refUser",
                                    label: _ctx.$t("messages.ColUsername"),
                                    rules: [(val) => !!val || _ctx.$t("messages.TextRequired")],
                                    hint: ""
                                  }, null, 8, ["modelValue", "label", "rules"]),
                                  createVNode(QInput, {
                                    name: "firstName",
                                    modelValue: unref(form).firstName,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).firstName = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.ColFirstname"),
                                    hint: ""
                                  }, null, 8, ["modelValue", "label"]),
                                  createVNode(QInput, {
                                    name: "surName",
                                    modelValue: unref(form).surName,
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).surName = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.ColSurname"),
                                    hint: ""
                                  }, null, 8, ["modelValue", "label"]),
                                  createVNode(QSelect, {
                                    name: "company",
                                    modelValue: unref(form).company,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).company = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.LabelCompany"),
                                    options: unref(companies),
                                    "option-value": "_id",
                                    "option-label": "name",
                                    "emit-value": "",
                                    "map-options": "",
                                    hint: ""
                                  }, null, 8, ["modelValue", "label", "options"])
                                ]),
                                createBaseVNode("div", _hoisted_9, [
                                  createVNode(QInput, {
                                    name: "email",
                                    modelValue: unref(form).email,
                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(form).email = $event),
                                    type: "email",
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.ColMail"),
                                    rules: [(val) => !!val || _ctx.$t("messages.TextRequired")],
                                    hint: ""
                                  }, null, 8, ["modelValue", "label", "rules"]),
                                  createVNode(QInput, {
                                    name: "phone",
                                    modelValue: unref(form).phone,
                                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(form).phone = $event),
                                    type: "phone",
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.ColPhone"),
                                    hint: ""
                                  }, null, 8, ["modelValue", "label"]),
                                  createVNode(QSelect, {
                                    name: "lang",
                                    modelValue: unref(form).lang,
                                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(form).lang = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.ColLanguage"),
                                    options: unref(languages),
                                    "option-value": "name",
                                    "option-label": "desc",
                                    "map-options": "",
                                    "emit-value": "",
                                    hint: ""
                                  }, null, 8, ["modelValue", "label", "options"])
                                ]),
                                createBaseVNode("div", _hoisted_10, [
                                  createVNode(QSelect, {
                                    name: "rights",
                                    modelValue: unref(form).rights,
                                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(form).rights = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.ColRoles"),
                                    options: unref(roles),
                                    "emit-value": "",
                                    "option-value": "right",
                                    "option-label": "desc",
                                    "map-options": "",
                                    multiple: "",
                                    "use-chips": "",
                                    hint: ""
                                  }, null, 8, ["modelValue", "label", "options"]),
                                  createVNode(QSelect, {
                                    name: "chief",
                                    modelValue: unref(form).chief,
                                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(form).chief = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.LabelChief"),
                                    options: unref(userList),
                                    "emit-value": "",
                                    "map-options": "",
                                    hint: ""
                                  }, null, 8, ["modelValue", "label", "options"])
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
              })
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
var User = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-329dcaa1"], ["__file", "User.vue"]]);
export { User as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci4yYjQ5YTYyYi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL1VzZXIudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8cS1wYWdlIGNsYXNzPVwicS1wYS1zbVwiPlxuXG4gICAgICAgIDxOYXZCYXIgOnRpdGxlPVwiJHQoJ21lc3NhZ2VzLkxhYmVsVXNlcicpXCIgaWNvbj1cImZhcyBmYS11c2VyLWVkaXRcIiBzdGF0ZU5hbWU9XCJ1c2VyXCIgOnN0YXRlPVwidXNlclN0b3JlXCIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHEtY29sLWd1dHRlci1tZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxxLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGdyaWROYW1lPVwidXNlckdyaWRcIiA6Z3JpZE9wdGlvbnM9XCJ1c2VyR3JpZFwiIHN0YXRlTmFtZT1cInVzZXJcIiA6c3RhdGU9XCJ1c2VyU3RvcmVcIiBAc3ViR3JpZFJlYWR5PVwic3ViR3JpZFJlYWR5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxxLXNlcGFyYXRvciAvPlxuICAgICAgICAgICAgICAgIDwvcS1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHEtY2FyZCBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCIgdi10PVwiJ21lc3NhZ2VzLkxhYmVsVXNlcidcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxxLXNlcGFyYXRvciAvPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHEtc2Nyb2xsLWFyZWEgY2xhc3M9XCJzY3JvbGxcIiB2aXNpYmxlPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWZvcm0gQHN1Ym1pdD1cImRvU2F2ZVwiIHJlZj1cInVzZXJGb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogLTk5OTlweFwiLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cImtyelwiIHYtbW9kZWw9XCJmb3JtLmtyelwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWQgcmVmPVwicmVmVXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xVc2VybmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwiWyB2YWwgPT4gISF2YWwgfHwgJHQoJ21lc3NhZ2VzLlRleHRSZXF1aXJlZCcpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJmaXJzdE5hbWVcIiB2LW1vZGVsPVwiZm9ybS5maXJzdE5hbWVcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sRmlyc3RuYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwic3VyTmFtZVwiIHYtbW9kZWw9XCJmb3JtLnN1ck5hbWVcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xTdXJuYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1zZWxlY3QgbmFtZT1cImNvbXBhbnlcIiB2LW1vZGVsPVwiZm9ybS5jb21wYW55XCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxDb21wYW55JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImNvbXBhbmllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi12YWx1ZT1cIl9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi1sYWJlbD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWl0LXZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcC1vcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLXNlbGVjdD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJlbWFpbFwiIHYtbW9kZWw9XCJmb3JtLmVtYWlsXCIgdHlwZT1cImVtYWlsXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sTWFpbCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwiWyB2YWwgPT4gISF2YWwgfHwgJHQoJ21lc3NhZ2VzLlRleHRSZXF1aXJlZCcpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJwaG9uZVwiIHYtbW9kZWw9XCJmb3JtLnBob25lXCIgdHlwZT1cInBob25lXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sUGhvbmUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtc2VsZWN0IG5hbWU9XCJsYW5nXCIgdi1tb2RlbD1cImZvcm0ubGFuZ1wiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbExhbmd1YWdlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImxhbmd1YWdlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi12YWx1ZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24tbGFiZWw9XCJkZXNjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLW9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1pdC12YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1zZWxlY3Q+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1zZWxlY3QgbmFtZT1cInJpZ2h0c1wiIHYtbW9kZWw9XCJmb3JtLnJpZ2h0c1wiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbFJvbGVzJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInJvbGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1pdC12YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24tdmFsdWU9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi1sYWJlbD1cImRlc2NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAtb3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2UtY2hpcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Etc2VsZWN0PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtc2VsZWN0IG5hbWU9XCJjaGllZlwiIHYtbW9kZWw9XCJmb3JtLmNoaWVmXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxDaGllZicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJ1c2VyTGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtaXQtdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLW9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Etc2VsZWN0PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L3Etc2Nyb2xsLWFyZWE+XG4gICAgICAgICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IEdsb2JhbFZpZXcgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbW1vbi9oZWxwZXJzL0dsb2JhbFZpZXcnO1xuaW1wb3J0IE5hdkJhciAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2QmFyLnZ1ZSc7IFxuaW1wb3J0IEdyaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL0dyaWQudnVlJztcblxuaW1wb3J0IHsgdXNlRGF0YVN0b3JlIH0gICAgICAgICAgICAgICAgIGZyb20gJ3NyYy9zdG9yZXMvZGF0YS5zdG9yZSc7XG5cbmltcG9ydCBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGRlYnVnICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2RlYnVnJztcbmNvbnN0IGxvZyAgICAgICAgID0gZGVidWcoJ2FwcDp1c2VyJyk7XG5cbmxvZyggJ3N0YXJ0JyApO1xuXG5jb25zdCBpbml0ICAgICAgICA9IHsgXG4gICAgY29sbE5hbWU6ICAgICAgICd1c2VyJywgXG4gICAgc3RhdGVOYW1lOiAgICAgICd1c2VyJ1xufTtcbmNvbnN0IGdsb2JhbFZpZXcgID0gR2xvYmFsVmlldyggaW5pdCApO1xuY29uc3QgeyBcbiAgICBzdG9yZTogICAgICAgICAgdXNlclN0b3JlLCBcbiAgICBkYXRhOiAgICAgICAgICAgdXNlcnMsXG4gICAgZG9TYXZlLFxuICAgIGZvcm0gXG59ICA9IGdsb2JhbFZpZXc7XG5cbmNvbnN0IGNvbXBhbmllc1N0b3JlICAgICAgICAgICAgICAgICAgICA9IHVzZURhdGFTdG9yZSggJ2NvbXBhbmllcycsICdjb21wYW5pZXMnICk7XG5jb25zdCBsYW5ndWFnZXNTdG9yZSAgICAgICAgICAgICAgICAgICAgPSB1c2VEYXRhU3RvcmUoICdsYW5ndWFnZXMnLCAnbGFuZ3VhZ2VzJyApO1xuY29uc3QgdXNlcnJpZ2h0c1N0b3JlICAgICAgICAgICAgICAgICAgID0gdXNlRGF0YVN0b3JlKCAndXNlcnJpZ2h0cycsICd1c2VycmlnaHRzJyApO1xuXG5jb25zdCB7IGRhdGE6IGNvbXBhbmllcyB9ICAgICAgICAgICAgICAgPSBzdG9yZVRvUmVmcyggY29tcGFuaWVzU3RvcmUgKTtcbmNvbnN0IHsgZGF0YTogbGFuZ3VhZ2VzIH0gICAgICAgICAgICAgICA9IHN0b3JlVG9SZWZzKCBsYW5ndWFnZXNTdG9yZSApO1xuY29uc3QgeyBkYXRhOiByb2xlcyB9ICAgICAgICAgICAgICAgICAgID0gc3RvcmVUb1JlZnMoIHVzZXJyaWdodHNTdG9yZSApO1xuXG5jb25zdCB1c2VyTGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgPSByZWYoW10pO1xuXG5jb25zdCB1c2VyR3JpZCAgICAgID0gcmVhY3RpdmUoe1xuICAgICAgICBjb2x1bW5UeXBlczogICAge1xuICAgICAgICAgICAgY29tcGFueUNvbHVtbjogICAgIHtcbiAgICAgICAgICAgICAgICB2YWx1ZUdldHRlciggcGFyYW1zICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wYW55ICAgICA9ICggcGFyYW1zLmNvbnRleHQuY29tcGFuaWVzICYmIHBhcmFtcy5jb250ZXh0LmNvbXBhbmllc1sgcGFyYW1zLmRhdGEuY29tcGFueSBdICkgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoY29tcGFueSAmJiBjb21wYW55Lm5hbWUpIHx8IHBhcmFtcy5kYXRhLmNvbXBhbnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhbmdDb2x1bW46ICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWVHZXR0ZXIoIHBhcmFtcyApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFuZyAgICAgICAgPSAoIHBhcmFtcy5jb250ZXh0Lmxhbmd1YWdlcyAmJiBwYXJhbXMuY29udGV4dC5sYW5ndWFnZXNbIHBhcmFtcy5kYXRhLmxhbmcgXSApIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGxhbmcgJiYgbGFuZy5kZXNjKSB8fCBwYXJhbXMuZGF0YS5sYW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByb2xlQ29sdW1uOiAgICAge1xuICAgICAgICAgICAgICAgIHZhbHVlR2V0dGVyKCBwYXJhbXMgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvbGVzICAgICAgID0gXy5tYXAoIHBhcmFtcy5kYXRhLnJpZ2h0cywgKGVsbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoIHBhcmFtcy5jb250ZXh0LnJvbGVzWyBlbG0gXSAmJiBwYXJhbXMuY29udGV4dC5yb2xlc1sgZWxtIF0uZGVzYyApIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb2xlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuZnVuY3Rpb24gc3ViR3JpZFJlYWR5KCB7IGdyaWRPcHQgfSApIHtcblxuICAgIGNvbnN0IGNvbnRleHQgICAgICAgPSB7XG4gICAgICAgICAgICBjb21wYW5pZXM6ICAgICAgXy5rZXlCeSggY29tcGFuaWVzLnZhbHVlLCAnX2lkJyApLFxuICAgICAgICAgICAgbGFuZ3VhZ2VzOiAgICAgIF8ua2V5QnkoIGxhbmd1YWdlcy52YWx1ZSwgJ25hbWUnICksXG4gICAgICAgICAgICByb2xlczogICAgICAgICAgXy5rZXlCeSggcm9sZXMudmFsdWUsICdyaWdodCcgKVxuICAgICAgICB9O1xuXG4gICAgLy8gVXNlciB2YWx1ZSBiZWNhdXNlIG9mIHZ1ZSByZWZcbiAgICBncmlkT3B0LmNvbnRleHQgICAgICA9IGNvbnRleHQ7XG59XG5cblByb21pc2VcbiAgICAuYWxsKFtcbiAgICAgICAgY29tcGFuaWVzU3RvcmUuZ2V0U3RvcmUoKSxcbiAgICAgICAgbGFuZ3VhZ2VzU3RvcmUuZ2V0U3RvcmUoKSxcbiAgICAgICAgdXNlcnJpZ2h0c1N0b3JlLmdldFN0b3JlKCksXG4gICAgXSlcbiAgICAudGhlbiggKCkgPT4ge1xuICAgICAgICB1c2VyTGlzdC52YWx1ZSAgICAgICA9IF8ubWFwKCB1c2Vycy52YWx1ZSwgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICAgICAgaXRlbS5faWQsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICAgICAgYCR7aXRlbS5maXJzdE5hbWV9ICR7aXRlbS5zdXJOYW1lfWBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuLmZvcm0ge1xuICAgIGhlaWdodDogICAgY2FsYyggMTAwdmggLSA0MDBweCAtIDk1cHggLSA3MHB4ICk7XG4gICAgd2lkdGg6ICAgICAgICAgMTAwJTtcbn1cblxuLnNjcm9sbCB7XG4gICAgaGVpZ2h0OiAgICBjYWxjKCAxMDB2aCAtIDQwMHB4IC0gODBweCAtIDk1cHggLSA3MHB4ICk7XG59XG5cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiZ2xvYmFsVmlldyIsIkdsb2JhbFZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpSUEsVUFBQSxNQUFBLE1BQUEsVUFBQTtBQUVBLFFBQUEsT0FBQTtBQUVBLFVBQUEsT0FBQTtBQUFBLE1BQW9CLFVBQUE7QUFBQSxNQUNBLFdBQUE7QUFBQSxJQUNBO0FBRXBCLFVBQUFBLGVBQUFDLFdBQUEsSUFBQTtBQUNBLFVBQUE7QUFBQSxNQUFNLE9BQUE7QUFBQSxNQUNjLE1BQUE7QUFBQSxNQUNBO0FBQUEsTUFDaEI7QUFBQSxJQUNBLElBQUFEO0FBR0osVUFBQSxpQkFBQSxhQUFBLGFBQUEsV0FBQTtBQUNBLFVBQUEsaUJBQUEsYUFBQSxhQUFBLFdBQUE7QUFDQSxVQUFBLGtCQUFBLGFBQUEsY0FBQSxZQUFBO0FBRUEsVUFBQSxFQUFBLE1BQUEsVUFBQSxJQUFBLFlBQUEsY0FBQTtBQUNBLFVBQUEsRUFBQSxNQUFBLFVBQUEsSUFBQSxZQUFBLGNBQUE7QUFDQSxVQUFBLEVBQUEsTUFBQSxNQUFBLElBQUEsWUFBQSxlQUFBO0FBRUEsVUFBQSxXQUFBLElBQUEsQ0FBQSxDQUFBO0FBRUEsVUFBQSxXQUFBLFNBQUE7QUFBQSxNQUErQixhQUFBO0FBQUEsUUFDUCxlQUFBO0FBQUEsVUFDTyxZQUFBLFFBQUE7QUFFWCxrQkFBQSxVQUFBLE9BQUEsUUFBQSxhQUFBLE9BQUEsUUFBQSxVQUFBLE9BQUEsS0FBQSxZQUFBO0FBQ0EsbUJBQUEsV0FBQSxRQUFBLFFBQUEsT0FBQSxLQUFBO0FBQUEsVUFBZ0Q7QUFBQSxRQUNwRDtBQUFBLFFBQ0osWUFBQTtBQUFBLFVBQ2dCLFlBQUEsUUFBQTtBQUVSLGtCQUFBLE9BQUEsT0FBQSxRQUFBLGFBQUEsT0FBQSxRQUFBLFVBQUEsT0FBQSxLQUFBLFNBQUE7QUFDQSxtQkFBQSxRQUFBLEtBQUEsUUFBQSxPQUFBLEtBQUE7QUFBQSxVQUEwQztBQUFBLFFBQzlDO0FBQUEsUUFDSixZQUFBO0FBQUEsVUFDZ0IsWUFBQSxRQUFBO0FBRVIsa0JBQUEsU0FBQSxFQUFBLElBQUEsT0FBQSxLQUFBLFFBQUEsQ0FBQSxRQUFBO0FBQ1EscUJBQUEsT0FBQSxRQUFBLE1BQUEsUUFBQSxPQUFBLFFBQUEsTUFBQSxLQUFBLFFBQUE7QUFBQSxZQUE4RSxDQUFBO0FBRXRGLG1CQUFBO0FBQUEsVUFBTztBQUFBLFFBQ1g7QUFBQSxNQUNKO0FBQUEsSUFDSixDQUFBO0FBR1IsYUFBQSxhQUFBLEVBQUEsV0FBQTtBQUVJLFlBQUEsVUFBQTtBQUFBLFFBQXNCLFdBQUEsRUFBQSxNQUFBLFVBQUEsT0FBQSxLQUFBO0FBQUEsUUFDa0MsV0FBQSxFQUFBLE1BQUEsVUFBQSxPQUFBLE1BQUE7QUFBQSxRQUNDLE9BQUEsRUFBQSxNQUFBLE1BQUEsT0FBQSxPQUFBO0FBQUEsTUFDSDtBQUl0RCxjQUFBLFVBQUE7QUFBQSxJQUF1QjtBQUczQixZQUFBLElBQUE7QUFBQSxNQUNTLGVBQUEsU0FBQTtBQUFBLE1BQ3VCLGVBQUEsU0FBQTtBQUFBLE1BQ0EsZ0JBQUEsU0FBQTtBQUFBLElBQ0MsQ0FBQSxFQUFBLEtBQUEsTUFBQTtBQUd6QixlQUFBLFFBQUEsRUFBQSxJQUFBLE1BQUEsT0FBQSxDQUFBLFNBQUE7QUFDSSxlQUFBO0FBQUEsVUFBTyxPQUFBLEtBQUE7QUFBQSxVQUNjLE9BQUEsR0FBQSxLQUFBLGFBQUEsS0FBQTtBQUFBLFFBQ3FCO0FBQUEsTUFDMUMsQ0FBQTtBQUFBLElBQ0gsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
