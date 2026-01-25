import { _ as _export_sfc, e as defineComponent, l as debug, O as useDataStore, R as storeToRefs, bc as reactive, M as _, n as ref, T as resolveDirective, q as openBlock, s as createBlock, w as withCtx, f as createVNode, G as unref, E as createBaseVNode, D as QCardSection, Y as createCommentVNode, U as QCard, V as withDirectives, x as QSeparator, F as QInput, C as QPage } from "./index.8f8ca0f3.js";
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
  __name: "Teams",
  setup(__props) {
    const log = debug("app:teams");
    log("start");
    const init = {
      collName: "teams",
      stateName: "teams"
    };
    const globalView$1 = globalView(init);
    const {
      store: teamStore,
      data: teams,
      doSave,
      form
    } = globalView$1;
    const companiesStore = useDataStore("companies", "companies");
    const branchStore = useDataStore("branch", "branch");
    const categoriesStore = useDataStore("categories", "categories");
    const userStore = useDataStore("user", "user");
    const { data: branchList } = storeToRefs(branchStore);
    const { data: companyList } = storeToRefs(companiesStore);
    const { data: categories } = storeToRefs(categoriesStore);
    const { data: users } = storeToRefs(userStore);
    const teamGrid = reactive({
      columnTypes: {
        userColumn: {
          valueGetter(params) {
            const users2 = _.map(params.data.users, (elm) => {
              return params.context.users[elm] && params.context.users[elm].label || params.data.users;
            });
            return users2;
          }
        },
        contactColumn: {
          valueGetter(params) {
            const contact = params.data && params.data.contact || "";
            return contact && params.context.users[contact] && params.context.users[contact].label || contact;
          }
        },
        categoryColumn: {
          valueGetter(params) {
            const category = params.data && params.data.category || "0";
            return params.context.categories[category] && params.context.categories[category].desc;
          }
        },
        companyColumn: {
          valueGetter(params) {
            const company = params.data && params.data.company || "";
            return params.context.companies && params.context.companies[company] && params.context.companies[company].name || company;
          }
        }
      },
      context: {
        users: {}
      }
    }), showGrid = ref(false), userList = ref([]);
    function subGridReady({ gridOpt }) {
      gridOpt.context = {
        users: _.keyBy(userList.value, "value"),
        companies: _.keyBy(companyList.value, "_id"),
        categories: _.keyBy(categories.value, "name"),
        branch: _.keyBy(branchList.value, "branch")
      };
    }
    Promise.all([
      companiesStore.getStore(),
      userStore.getStore(),
      categoriesStore.getStore(),
      branchStore.getStore()
    ]).then(() => {
      userList.value = _.map(users.value, (item) => {
        return {
          value: item._id,
          label: `${item.firstName} ${item.surName}`
        };
      });
      showGrid.value = true;
    });
    return (_ctx, _cache) => {
      const _directive_t = resolveDirective("t");
      return openBlock(), createBlock(QPage, { class: "q-pa-sm" }, {
        default: withCtx(() => [
          createVNode(NavBar, {
            title: _ctx.$t("messages.LabelTeams"),
            icon: "fas fa-users",
            stateName: "teams",
            state: unref(teamStore)
          }, null, 8, ["title", "state"]),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QCard, null, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      unref(showGrid) ? (openBlock(), createBlock(Grid, {
                        key: 0,
                        gridName: "teamGrid",
                        gridOptions: unref(teamGrid),
                        stateName: "teams",
                        state: unref(teamStore),
                        onSubGridReady: subGridReady
                      }, null, 8, ["gridOptions", "state"])) : createCommentVNode("", true)
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
                        [_directive_t, "messages.LabelTeam"]
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(QSeparator),
                  createVNode(QForm, {
                    onSubmit: unref(doSave),
                    ref: "teamForm"
                  }, {
                    default: withCtx(() => [
                      _hoisted_5,
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_6, [
                            createBaseVNode("div", _hoisted_7, [
                              createVNode(QSelect, {
                                name: "branch",
                                modelValue: unref(form).branch,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).branch = $event),
                                "lazy-rules": "",
                                dense: "",
                                "options-dense": "",
                                rules: [(val) => !!val || "Field is required"],
                                outlined: "",
                                label: _ctx.$t("messages.LabelBranch"),
                                options: unref(branchList),
                                "option-value": "branch",
                                "option-label": "desc",
                                "emit-value": "",
                                "map-options": "",
                                hint: ""
                              }, null, 8, ["modelValue", "rules", "label", "options"]),
                              createVNode(QSelect, {
                                name: "company",
                                modelValue: unref(form).company,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).company = $event),
                                "lazy-rules": "",
                                dense: "",
                                "options-dense": "",
                                rules: [(val) => !!val || "Field is required"],
                                outlined: "",
                                label: _ctx.$t("messages.LabelCompany"),
                                options: unref(companyList),
                                "option-value": "_id",
                                "option-label": "name",
                                "emit-value": "",
                                "map-options": "",
                                hint: ""
                              }, null, 8, ["modelValue", "rules", "label", "options"]),
                              createVNode(QSelect, {
                                name: "category",
                                modelValue: unref(form).category,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).category = $event),
                                "lazy-rules": "",
                                dense: "",
                                "options-dense": "",
                                outlined: "",
                                label: _ctx.$t("messages.ColCategory"),
                                options: unref(categories),
                                "option-value": "name",
                                "option-label": "desc",
                                "emit-value": "",
                                "map-options": "",
                                hint: ""
                              }, null, 8, ["modelValue", "label", "options"]),
                              createVNode(QSelect, {
                                name: "user",
                                modelValue: unref(form).contact,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).contact = $event),
                                "lazy-rules": "",
                                dense: "",
                                "options-dense": "",
                                rules: [(val) => !!val || "Field is required"],
                                outlined: "",
                                label: _ctx.$t("messages.LabelContact"),
                                options: unref(userList),
                                "emit-value": "",
                                "map-options": "",
                                hint: ""
                              }, null, 8, ["modelValue", "rules", "label", "options"]),
                              createVNode(QSelect, {
                                name: "user",
                                modelValue: unref(form).users,
                                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(form).users = $event),
                                "lazy-rules": "",
                                dense: "",
                                "options-dense": "",
                                outlined: "",
                                label: _ctx.$t("messages.LabelUser"),
                                options: unref(userList),
                                "emit-value": "",
                                "map-options": "",
                                "use-chips": "",
                                multiple: "",
                                hint: ""
                              }, null, 8, ["modelValue", "label", "options"]),
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
var Teams = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "Teams.vue"]]);
export { Teams as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVhbXMuZjFlMzM5ZGMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9UZWFtcy52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxxLXBhZ2UgY2xhc3M9XCJxLXBhLXNtXCI+XG5cbiAgICAgICAgPE5hdkJhciA6dGl0bGU9XCIkdCgnbWVzc2FnZXMuTGFiZWxUZWFtcycpXCIgaWNvbj1cImZhcyBmYS11c2Vyc1wiIHN0YXRlTmFtZT1cInRlYW1zXCIgOnN0YXRlPVwidGVhbVN0b3JlXCIgLz5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICA8cS1jYXJkPlxuICAgICAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBncmlkTmFtZT1cInRlYW1HcmlkXCIgOmdyaWRPcHRpb25zPVwidGVhbUdyaWRcIiBzdGF0ZU5hbWU9XCJ0ZWFtc1wiIDpzdGF0ZT1cInRlYW1TdG9yZVwiIEBzdWJHcmlkUmVhZHk9XCJzdWJHcmlkUmVhZHlcIiB2LWlmPVwic2hvd0dyaWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICA8cS1jYXJkPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIiB2LXQ9XCInbWVzc2FnZXMuTGFiZWxUZWFtJ1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIC8+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8cS1mb3JtIEBzdWJtaXQ9XCJkb1NhdmVcIiByZWY9XCJ0ZWFtRm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogLTk5OTlweFwiLz5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXNlbGVjdCBuYW1lPVwiYnJhbmNoXCIgdi1tb2RlbD1cImZvcm0uYnJhbmNoXCIgbGF6eS1ydWxlcyBkZW5zZSBvcHRpb25zLWRlbnNlIDpydWxlcz1cIlt2YWwgPT4gISF2YWwgfHwgJ0ZpZWxkIGlzIHJlcXVpcmVkJ11cIiBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbEJyYW5jaCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImJyYW5jaExpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi12YWx1ZT1cImJyYW5jaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLWxhYmVsPVwiZGVzY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1pdC12YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcC1vcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLXNlbGVjdD5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1zZWxlY3QgbmFtZT1cImNvbXBhbnlcIiB2LW1vZGVsPVwiZm9ybS5jb21wYW55XCIgbGF6eS1ydWxlcyBkZW5zZSBvcHRpb25zLWRlbnNlIDpydWxlcz1cIlt2YWwgPT4gISF2YWwgfHwgJ0ZpZWxkIGlzIHJlcXVpcmVkJ11cIiBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbENvbXBhbnknKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJjb21wYW55TGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLXZhbHVlPVwiX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24tbGFiZWw9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWl0LXZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLW9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Etc2VsZWN0PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXNlbGVjdCBuYW1lPVwiY2F0ZWdvcnlcIiB2LW1vZGVsPVwiZm9ybS5jYXRlZ29yeVwiIGxhenktcnVsZXMgZGVuc2Ugb3B0aW9ucy1kZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xDYXRlZ29yeScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImNhdGVnb3JpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi12YWx1ZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi1sYWJlbD1cImRlc2NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtaXQtdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAtb3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1zZWxlY3Q+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtc2VsZWN0IG5hbWU9XCJ1c2VyXCIgdi1tb2RlbD1cImZvcm0uY29udGFjdFwiIGxhenktcnVsZXMgZGVuc2Ugb3B0aW9ucy1kZW5zZSA6cnVsZXM9XCJbdmFsID0+ICEhdmFsIHx8ICdGaWVsZCBpcyByZXF1aXJlZCddXCIgb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxDb250YWN0JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwidXNlckxpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtaXQtdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAtb3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1zZWxlY3Q+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtc2VsZWN0IG5hbWU9XCJ1c2VyXCIgdi1tb2RlbD1cImZvcm0udXNlcnNcIiBsYXp5LXJ1bGVzIGRlbnNlIG9wdGlvbnMtZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxVc2VyJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwidXNlckxpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtaXQtdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAtb3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZS1jaGlwc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLXNlbGVjdD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cInBob25lXCIgdi1tb2RlbD1cImZvcm0ucGhvbmVcIiB0eXBlPVwicGhvbmVcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbFBob25lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWZvcm0+XG4gICAgICAgICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IEdsb2JhbFZpZXcgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbW1vbi9oZWxwZXJzL0dsb2JhbFZpZXcnO1xuaW1wb3J0IE5hdkJhciAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2QmFyLnZ1ZSc7IFxuaW1wb3J0IEdyaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL0dyaWQudnVlJztcblxuaW1wb3J0IHsgdXNlRGF0YVN0b3JlIH0gICAgICAgICAgICAgICAgIGZyb20gJ3NyYy9zdG9yZXMvZGF0YS5zdG9yZSc7XG5cbmltcG9ydCBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGRlYnVnICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2RlYnVnJztcbmNvbnN0IGxvZyAgICAgICAgID0gZGVidWcoJ2FwcDp0ZWFtcycpO1xuXG5sb2coICdzdGFydCcgKTtcblxuY29uc3QgaW5pdCAgICAgICAgPSB7IFxuICAgIGNvbGxOYW1lOiAgICAgICAndGVhbXMnLCBcbiAgICBzdGF0ZU5hbWU6ICAgICAgJ3RlYW1zJ1xufTtcbmNvbnN0IGdsb2JhbFZpZXcgID0gR2xvYmFsVmlldyggaW5pdCApO1xuY29uc3QgeyBcbiAgICBzdG9yZTogICAgICAgICAgdGVhbVN0b3JlLCBcbiAgICBkYXRhOiAgICAgICAgICAgdGVhbXMsIFxuICAgIGRvU2F2ZSxcbiAgICBmb3JtIFxufSAgPSBnbG9iYWxWaWV3O1xuXG5jb25zdCBjb21wYW5pZXNTdG9yZSAgICAgICAgICAgICAgICAgICAgPSB1c2VEYXRhU3RvcmUoICdjb21wYW5pZXMnLCAnY29tcGFuaWVzJyApO1xuY29uc3QgYnJhbmNoU3RvcmUgICAgICAgICAgICAgICAgICAgICAgID0gdXNlRGF0YVN0b3JlKCAnYnJhbmNoJywgJ2JyYW5jaCcgKTtcbmNvbnN0IGNhdGVnb3JpZXNTdG9yZSAgICAgICAgICAgICAgICAgICA9IHVzZURhdGFTdG9yZSggJ2NhdGVnb3JpZXMnLCAnY2F0ZWdvcmllcycgKTtcbmNvbnN0IHVzZXJTdG9yZSAgICAgICAgICAgICAgICAgICAgICAgICA9IHVzZURhdGFTdG9yZSggJ3VzZXInLCAndXNlcicgKTtcblxuY29uc3QgeyBkYXRhOiBicmFuY2hMaXN0IH0gICAgICAgICAgICAgID0gc3RvcmVUb1JlZnMoIGJyYW5jaFN0b3JlICk7XG5jb25zdCB7IGRhdGE6IGNvbXBhbnlMaXN0IH0gICAgICAgICAgICAgPSBzdG9yZVRvUmVmcyggY29tcGFuaWVzU3RvcmUgKTtcbmNvbnN0IHsgZGF0YTogY2F0ZWdvcmllcyB9ICAgICAgICAgICAgICA9IHN0b3JlVG9SZWZzKCBjYXRlZ29yaWVzU3RvcmUgKTtcbmNvbnN0IHsgZGF0YTogdXNlcnMgfSAgICAgICAgICAgICAgICAgICA9IHN0b3JlVG9SZWZzKCB1c2VyU3RvcmUgKTtcblxuY29uc3QgdGVhbUdyaWQgICAgICA9IHJlYWN0aXZlKHtcbiAgICAgICAgY29sdW1uVHlwZXM6ICAgIHtcbiAgICAgICAgICAgIHVzZXJDb2x1bW46ICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWVHZXR0ZXIoIHBhcmFtcyApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlcnMgICAgICAgPSBfLm1hcCggcGFyYW1zLmRhdGEudXNlcnMsIChlbG0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCBwYXJhbXMuY29udGV4dC51c2Vyc1sgZWxtIF0gJiYgcGFyYW1zLmNvbnRleHQudXNlcnNbIGVsbSBdLmxhYmVsICkgfHwgcGFyYW1zLmRhdGEudXNlcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250YWN0Q29sdW1uOiAge1xuICAgICAgICAgICAgICAgIHZhbHVlR2V0dGVyKCBwYXJhbXMgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhY3QgICAgID0gKHBhcmFtcy5kYXRhICYmIHBhcmFtcy5kYXRhLmNvbnRhY3QpIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCBjb250YWN0ICYmIHBhcmFtcy5jb250ZXh0LnVzZXJzWyBjb250YWN0IF0gJiYgcGFyYW1zLmNvbnRleHQudXNlcnNbIGNvbnRhY3QgXS5sYWJlbCApIHx8IGNvbnRhY3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhdGVnb3J5Q29sdW1uOiAgICAge1xuICAgICAgICAgICAgICAgIHZhbHVlR2V0dGVyKCBwYXJhbXMgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ICAgICAgICA9ICggcGFyYW1zLmRhdGEgJiYgcGFyYW1zLmRhdGEuY2F0ZWdvcnkgKSB8fCAnMCc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoIChwYXJhbXMuY29udGV4dC5jYXRlZ29yaWVzWyBjYXRlZ29yeSBdICYmIHBhcmFtcy5jb250ZXh0LmNhdGVnb3JpZXNbIGNhdGVnb3J5IF0uZGVzYyApICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBhbnlDb2x1bW46ICB7XG4gICAgICAgICAgICAgICAgdmFsdWVHZXR0ZXIoIHBhcmFtcyApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcGFueSAgICAgPSAoIHBhcmFtcy5kYXRhICYmIHBhcmFtcy5kYXRhLmNvbXBhbnkgKSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICggKHBhcmFtcy5jb250ZXh0LmNvbXBhbmllcyAmJiBwYXJhbXMuY29udGV4dC5jb21wYW5pZXNbIGNvbXBhbnkgXSAmJiBwYXJhbXMuY29udGV4dC5jb21wYW5pZXNbIGNvbXBhbnkgXS5uYW1lICkgfHwgY29tcGFueSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29udGV4dDogICAgICAgIHtcbiAgICAgICAgICAgIHVzZXJzOiAgICAgICAgICB7fVxuICAgICAgICB9XG4gICAgfSksXG4gICAgc2hvd0dyaWQgICAgICAgID0gcmVmKGZhbHNlKSxcbiAgICB1c2VyTGlzdCAgICAgICAgPSByZWYoW10pO1xuXG5mdW5jdGlvbiBzdWJHcmlkUmVhZHkoIHsgZ3JpZE9wdCB9ICkge1xuXG4gICAgLy8gVXNlciB2YWx1ZSBiZWNhdXNlIG9mIHZ1ZSByZWZcbiAgICBncmlkT3B0LmNvbnRleHQgICAgPSB7XG4gICAgICAgIHVzZXJzOiAgICAgICAgICAgICAgXy5rZXlCeSggdXNlckxpc3QudmFsdWUsICd2YWx1ZScgKSxcbiAgICAgICAgY29tcGFuaWVzOiAgICAgICAgICBfLmtleUJ5KCBjb21wYW55TGlzdC52YWx1ZSwgJ19pZCcgKSxcbiAgICAgICAgY2F0ZWdvcmllczogICAgICAgICBfLmtleUJ5KCBjYXRlZ29yaWVzLnZhbHVlLCAnbmFtZScgKSxcbiAgICAgICAgYnJhbmNoOiAgICAgICAgICAgICBfLmtleUJ5KCBicmFuY2hMaXN0LnZhbHVlLCAnYnJhbmNoJyApXG4gICAgfTtcbn1cbiAgICAgICAgXG5Qcm9taXNlXG4gICAgLmFsbChbXG4gICAgICAgIGNvbXBhbmllc1N0b3JlLmdldFN0b3JlKCksXG4gICAgICAgIHVzZXJTdG9yZS5nZXRTdG9yZSgpLFxuICAgICAgICBjYXRlZ29yaWVzU3RvcmUuZ2V0U3RvcmUoKSxcbiAgICAgICAgYnJhbmNoU3RvcmUuZ2V0U3RvcmUoKSxcbiAgICBdKVxuICAgIC50aGVuKCAoKSA9PiB7XG4gICAgICAgIHVzZXJMaXN0LnZhbHVlICAgICAgID0gXy5tYXAoIHVzZXJzLnZhbHVlLCAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogICAgICBpdGVtLl9pZCxcbiAgICAgICAgICAgICAgICBsYWJlbDogICAgICBgJHtpdGVtLmZpcnN0TmFtZX0gJHtpdGVtLnN1ck5hbWV9YFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2hvd0dyaWQudmFsdWUgICAgICAgPSB0cnVlO1xuICAgIH0pO1xuXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJnbG9iYWxWaWV3IiwiR2xvYmFsVmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5R0EsVUFBQSxNQUFBLE1BQUEsV0FBQTtBQUVBLFFBQUEsT0FBQTtBQUVBLFVBQUEsT0FBQTtBQUFBLE1BQW9CLFVBQUE7QUFBQSxNQUNBLFdBQUE7QUFBQSxJQUNBO0FBRXBCLFVBQUFBLGVBQUFDLFdBQUEsSUFBQTtBQUNBLFVBQUE7QUFBQSxNQUFNLE9BQUE7QUFBQSxNQUNjLE1BQUE7QUFBQSxNQUNBO0FBQUEsTUFDaEI7QUFBQSxJQUNBLElBQUFEO0FBR0osVUFBQSxpQkFBQSxhQUFBLGFBQUEsV0FBQTtBQUNBLFVBQUEsY0FBQSxhQUFBLFVBQUEsUUFBQTtBQUNBLFVBQUEsa0JBQUEsYUFBQSxjQUFBLFlBQUE7QUFDQSxVQUFBLFlBQUEsYUFBQSxRQUFBLE1BQUE7QUFFQSxVQUFBLEVBQUEsTUFBQSxXQUFBLElBQUEsWUFBQSxXQUFBO0FBQ0EsVUFBQSxFQUFBLE1BQUEsWUFBQSxJQUFBLFlBQUEsY0FBQTtBQUNBLFVBQUEsRUFBQSxNQUFBLFdBQUEsSUFBQSxZQUFBLGVBQUE7QUFDQSxVQUFBLEVBQUEsTUFBQSxNQUFBLElBQUEsWUFBQSxTQUFBO0FBRUEsVUFBQSxXQUFBLFNBQUE7QUFBQSxNQUErQixhQUFBO0FBQUEsUUFDUCxZQUFBO0FBQUEsVUFDSSxZQUFBLFFBQUE7QUFFUixrQkFBQSxTQUFBLEVBQUEsSUFBQSxPQUFBLEtBQUEsT0FBQSxDQUFBLFFBQUE7QUFDUSxxQkFBQSxPQUFBLFFBQUEsTUFBQSxRQUFBLE9BQUEsUUFBQSxNQUFBLEtBQUEsU0FBQSxPQUFBLEtBQUE7QUFBQSxZQUEyRixDQUFBO0FBRW5HLG1CQUFBO0FBQUEsVUFBTztBQUFBLFFBQ1g7QUFBQSxRQUNKLGVBQUE7QUFBQSxVQUNnQixZQUFBLFFBQUE7QUFFUixrQkFBQSxVQUFBLE9BQUEsUUFBQSxPQUFBLEtBQUEsV0FBQTtBQUNBLG1CQUFBLFdBQUEsT0FBQSxRQUFBLE1BQUEsWUFBQSxPQUFBLFFBQUEsTUFBQSxTQUFBLFNBQUE7QUFBQSxVQUFrRztBQUFBLFFBQ3RHO0FBQUEsUUFDSixnQkFBQTtBQUFBLFVBQ29CLFlBQUEsUUFBQTtBQUVaLGtCQUFBLFdBQUEsT0FBQSxRQUFBLE9BQUEsS0FBQSxZQUFBO0FBQ0EsbUJBQUEsT0FBQSxRQUFBLFdBQUEsYUFBQSxPQUFBLFFBQUEsV0FBQSxVQUFBO0FBQUEsVUFBeUY7QUFBQSxRQUM3RjtBQUFBLFFBQ0osZUFBQTtBQUFBLFVBQ2dCLFlBQUEsUUFBQTtBQUVSLGtCQUFBLFVBQUEsT0FBQSxRQUFBLE9BQUEsS0FBQSxXQUFBO0FBQ0EsbUJBQUEsT0FBQSxRQUFBLGFBQUEsT0FBQSxRQUFBLFVBQUEsWUFBQSxPQUFBLFFBQUEsVUFBQSxTQUFBLFFBQUE7QUFBQSxVQUEySDtBQUFBLFFBQy9IO0FBQUEsTUFDSjtBQUFBLE1BQ0osU0FBQTtBQUFBLFFBQ2dCLE9BQUEsQ0FBQTtBQUFBLE1BQ0s7QUFBQSxJQUNyQixDQUFBLEdBQUEsV0FBQSxJQUFBLEtBQUEsR0FBQSxXQUFBLElBQUEsQ0FBQSxDQUFBO0FBS1IsYUFBQSxhQUFBLEVBQUEsV0FBQTtBQUdJLGNBQUEsVUFBQTtBQUFBLFFBQXFCLE9BQUEsRUFBQSxNQUFBLFNBQUEsT0FBQSxPQUFBO0FBQUEsUUFDb0MsV0FBQSxFQUFBLE1BQUEsWUFBQSxPQUFBLEtBQUE7QUFBQSxRQUNDLFlBQUEsRUFBQSxNQUFBLFdBQUEsT0FBQSxNQUFBO0FBQUEsUUFDQSxRQUFBLEVBQUEsTUFBQSxXQUFBLE9BQUEsUUFBQTtBQUFBLE1BQ0U7QUFBQSxJQUM1RDtBQUdKLFlBQUEsSUFBQTtBQUFBLE1BQ1MsZUFBQSxTQUFBO0FBQUEsTUFDdUIsVUFBQSxTQUFBO0FBQUEsTUFDTCxnQkFBQSxTQUFBO0FBQUEsTUFDTSxZQUFBLFNBQUE7QUFBQSxJQUNKLENBQUEsRUFBQSxLQUFBLE1BQUE7QUFHckIsZUFBQSxRQUFBLEVBQUEsSUFBQSxNQUFBLE9BQUEsQ0FBQSxTQUFBO0FBQ0ksZUFBQTtBQUFBLFVBQU8sT0FBQSxLQUFBO0FBQUEsVUFDYyxPQUFBLEdBQUEsS0FBQSxhQUFBLEtBQUE7QUFBQSxRQUNxQjtBQUFBLE1BQzFDLENBQUE7QUFHSixlQUFBLFFBQUE7QUFBQSxJQUF1QixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
