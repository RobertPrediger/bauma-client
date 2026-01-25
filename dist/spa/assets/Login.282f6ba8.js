import { _ as _export_sfc, e as defineComponent, l as debug, N as useAccountStore, n as ref, bc as reactive, q as openBlock, a2 as createElementBlock, f as createVNode, w as withCtx, D as QCardSection, x as QSeparator, bA as withModifiers, F as QInput, G as unref, y as QBtn, U as QCard, J as pushScopeId, K as popScopeId, E as createBaseVNode, bC as _imports_0, bh as Notify } from "./index.8f8ca0f3.js";
import { Q as QForm } from "./QForm.8c81555c.js";
var Login_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-6a70ba0a"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "q-pa-md login items-center" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "row" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "text-h4 col" }, "leadlive / Login"),
  /* @__PURE__ */ createBaseVNode("div", { class: "col text-right" }, [
    /* @__PURE__ */ createBaseVNode("img", {
      alt: "web4biz logo",
      src: _imports_0,
      class: "logo"
    })
  ])
], -1));
const _sfc_main = defineComponent({
  __name: "Login",
  setup(__props) {
    const log = debug("app:login");
    log("start");
    const accountStore = useAccountStore();
    const loading = ref(false), form = reactive({
      username: "",
      password: ""
    });
    async function doLogin(evt) {
      evt.preventDefault();
      loading.value = true;
      const { username, password } = form;
      if (username && password) {
        try {
          await accountStore.login({ username, password });
        } catch (err) {
          log("Login Error", err);
          Notify.create({
            color: "negative",
            message: "Login fehlgeschlagen!"
          });
          loading.value = false;
        }
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                _hoisted_2
              ]),
              _: 1
            }),
            createVNode(QSeparator),
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createVNode(QForm, {
                  onSubmit: withModifiers(doLogin, ["prevent", "stop"]),
                  class: "q-gutter-xs"
                }, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      name: "username",
                      modelValue: unref(form).username,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).username = $event),
                      "lazy-rules": "",
                      outlined: "",
                      label: "Benutzername",
                      rules: [(val) => !!val || "Benutzername muss angegeben werden!"]
                    }, null, 8, ["modelValue", "rules"]),
                    createVNode(QInput, {
                      name: "password",
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).password = $event),
                      "lazy-rules": "",
                      type: "password",
                      outlined: "",
                      label: "Passwort",
                      rules: [(val) => !!val || "Passwort muss angegeben werden!"]
                    }, null, 8, ["modelValue", "rules"]),
                    createVNode(QBtn, {
                      color: "primary",
                      label: "Login",
                      type: "submit",
                      disabled: unref(loading)
                    }, null, 8, ["disabled"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
var Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6a70ba0a"], ["__file", "Login.vue"]]);
export { Login as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4uMjgyZjZiYTguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Mb2dpbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJxLXBhLW1kIGxvZ2luIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8cS1jYXJkPlxuICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDQgY29sXCI+bGVhZGxpdmUgLyBMb2dpbjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwid2ViNGJpeiBsb2dvXCIgc3JjPVwifmFzc2V0cy93ZWI0Yml6LnBuZ1wiIGNsYXNzPVwibG9nb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHEtc2VwYXJhdG9yIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1mb3JtIEBzdWJtaXQucHJldmVudC5zdG9wPVwiZG9Mb2dpblwiIGNsYXNzPVwicS1ndXR0ZXIteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cInVzZXJuYW1lXCIgdi1tb2RlbD1cImZvcm0udXNlcm5hbWVcIiBsYXp5LXJ1bGVzIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJlbnV0emVybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6cnVsZXM9XCJbIHZhbCA9PiAhIXZhbCB8fCAnQmVudXR6ZXJuYW1lIG11c3MgYW5nZWdlYmVuIHdlcmRlbiEnIF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRcIiBsYXp5LXJ1bGVzIHR5cGU9XCJwYXNzd29yZFwiIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3J0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpydWxlcz1cIlsgdmFsID0+ICEhdmFsIHx8ICdQYXNzd29ydCBtdXNzIGFuZ2VnZWJlbiB3ZXJkZW4hJyBdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxxLWJ0biBjb2xvcj1cInByaW1hcnlcIiBsYWJlbD1cIkxvZ2luXCIgdHlwZT1cInN1Ym1pdFwiIDpkaXNhYmxlZD1cImxvYWRpbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvcS1mb3JtPlxuICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPC9xLWNhcmQ+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHsgdXNlQWNjb3VudFN0b3JlIH0gICAgICAgICAgICAgIGZyb20gJ3NyYy9zdG9yZXMvYWNjb3VudC5zdG9yZSc7XG5cbmltcG9ydCBkZWJ1ZyAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdkZWJ1Zyc7XG5jb25zdCBsb2cgICAgICAgICA9IGRlYnVnKCdhcHA6bG9naW4nKTtcblxubG9nKCAnc3RhcnQnICk7XG5cbmNvbnN0IGFjY291bnRTdG9yZSAgICAgICAgICA9IHVzZUFjY291bnRTdG9yZSgpO1xuXG5jb25zdCBsb2FkaW5nICAgICAgICAgICA9IHJlZihmYWxzZSksXG4gICAgICAgIGZvcm0gICAgICAgICAgICA9IHJlYWN0aXZlKHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiAgICAgICAgICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICAgICAgICAgJydcbiAgICAgICAgfSk7XG4gICAgICAgIFxuYXN5bmMgZnVuY3Rpb24gZG9Mb2dpbiggZXZ0ICkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxvYWRpbmcudmFsdWUgICAgPSB0cnVlO1xuICAgIFxuICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gICAgICAgID0gZm9ybTtcbiAgICBpZiAoIHVzZXJuYW1lICYmIHBhc3N3b3JkICkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgYWNjb3VudFN0b3JlLmxvZ2luKCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ICk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICBsb2coICdMb2dpbiBFcnJvcicsIGVyciApO1xuICAgICAgICAgICAgTm90aWZ5LmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgY29sb3I6ICAgICAgJ25lZ2F0aXZlJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAgICAnTG9naW4gZmVobGdlc2NobGFnZW4hJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsb2FkaW5nLnZhbHVlICAgID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuLmxvZ2luIHtcbiAgICBoZWlnaHQ6IDM3MnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogY2FsYyggKDEwMHZoIC0gMzQ3cHgpIC8gMiApO1xuICAgIGxlZnQ6IGNhbGMoICgxMDB2dyAtIDYwMHB4KSAvIDIgKTtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjMzVhMmZmIDAlLCAjMDE0YTg4IDEwMCUpO1xufVxuXG4ubG9nbyB7XG4gICAgd2lkdGg6IDEyMHB4O1xufVxuXG5sYWJlbCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbmZvcm0ge1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4udGV4dC1kYW5nZXIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQSxVQUFBLE1BQUEsTUFBQSxXQUFBO0FBRUEsUUFBQSxPQUFBO0FBRUEsVUFBQSxlQUFBO0FBRUEsVUFBQSxVQUFBLElBQUEsS0FBQSxHQUFBLE9BQUEsU0FBQTtBQUFBLE1BQ21DLFVBQUE7QUFBQSxNQUNMLFVBQUE7QUFBQSxJQUNBLENBQUE7QUFHOUIsbUJBQUEsUUFBQSxLQUFBO0FBQ0ksVUFBQSxlQUFBO0FBQ0EsY0FBQSxRQUFBO0FBRUEsWUFBQSxFQUFBLFVBQUEsU0FBQSxJQUFBO0FBQ0EsVUFBQSxZQUFBLFVBQUE7QUFDSSxZQUFBO0FBQ0ksZ0JBQUEsYUFBQSxNQUFBLEVBQUEsVUFBQSxTQUFBLENBQUE7QUFBQSxRQUFpRCxTQUFBLEtBQUE7QUFHakQsY0FBQSxlQUFBLEdBQUE7QUFDQSxpQkFBQSxPQUFBO0FBQUEsWUFBYyxPQUFBO0FBQUEsWUFDRSxTQUFBO0FBQUEsVUFDQSxDQUFBO0FBRWhCLGtCQUFBLFFBQUE7QUFBQSxRQUFtQjtBQUFBLE1BQ3ZCO0FBQUEsSUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
