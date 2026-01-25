import { an as noop, aR as hSlot, h, aC as stop, aF as shouldIgnoreKey, aA as prevent, y as QBtn, z as QTooltip, a1 as QItemSection, ak as QIcon, a0 as QItem, bd as QBtnDropdown, n as ref, bt as vmHasRouter, S as watch, bu as History, aq as onBeforeMount, aL as onMounted, at as onBeforeUnmount, g as getCurrentInstance, a8 as createComponent, ad as useDarkProps, af as useDark, bv as useSplitAttrs, ah as computed, am as stopAndPrevent, ao as nextTick, b7 as addFocusFn, _ as _export_sfc, e as defineComponent, l as debug, T as resolveDirective, q as openBlock, s as createBlock, w as withCtx, f as createVNode, G as unref, E as createBaseVNode, D as QCardSection, x as QSeparator, U as QCard, V as withDirectives, F as QInput, X as isRef, C as QPage, J as pushScopeId, K as popScopeId } from "./index.8f8ca0f3.js";
import { Q as QTabs, a as QTab, b as QTabPanels, c as QTabPanel } from "./QTabPanels.46aa2434.js";
import { Q as QForm } from "./QForm.8c81555c.js";
import { g as globalView, N as NavBar } from "./NavBar.eb70e4d5.js";
import { G as Grid } from "./Grid.b4814aca.js";
import "./rtl.b51694b1.js";
import "./AgGridVue.c15bd737.js";
function getBlockElement(el, parent) {
  if (parent && el === parent) {
    return null;
  }
  const nodeName = el.nodeName.toLowerCase();
  if (["div", "li", "ul", "ol", "blockquote"].includes(nodeName) === true) {
    return el;
  }
  const style = window.getComputedStyle ? window.getComputedStyle(el) : el.currentStyle, display = style.display;
  if (display === "block" || display === "table") {
    return el;
  }
  return getBlockElement(el.parentNode);
}
function isChildOf(el, parent, orSame) {
  return !el || el === document.body ? false : orSame === true && el === parent || (parent === document ? document.body : parent).contains(el.parentNode);
}
function createRange(node, chars, range) {
  if (!range) {
    range = document.createRange();
    range.selectNode(node);
    range.setStart(node, 0);
  }
  if (chars.count === 0) {
    range.setEnd(node, chars.count);
  } else if (chars.count > 0) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent.length < chars.count) {
        chars.count -= node.textContent.length;
      } else {
        range.setEnd(node, chars.count);
        chars.count = 0;
      }
    } else {
      for (let lp = 0; chars.count !== 0 && lp < node.childNodes.length; lp++) {
        range = createRange(node.childNodes[lp], chars, range);
      }
    }
  }
  return range;
}
const urlRegex = /^https?:\/\//;
class Caret {
  constructor(el, eVm) {
    this.el = el;
    this.eVm = eVm;
    this._range = null;
  }
  get selection() {
    if (this.el) {
      const sel = document.getSelection();
      if (isChildOf(sel.anchorNode, this.el, true) && isChildOf(sel.focusNode, this.el, true)) {
        return sel;
      }
    }
    return null;
  }
  get hasSelection() {
    return this.selection !== null ? this.selection.toString().length !== 0 : false;
  }
  get range() {
    const sel = this.selection;
    if (sel !== null && sel.rangeCount) {
      return sel.getRangeAt(0);
    }
    return this._range;
  }
  get parent() {
    const range = this.range;
    if (range !== null) {
      const node = range.startContainer;
      return node.nodeType === document.ELEMENT_NODE ? node : node.parentNode;
    }
    return null;
  }
  get blockParent() {
    const parent = this.parent;
    if (parent !== null) {
      return getBlockElement(parent, this.el);
    }
    return null;
  }
  save(range = this.range) {
    if (range !== null) {
      this._range = range;
    }
  }
  restore(range = this._range) {
    const r = document.createRange(), sel = document.getSelection();
    if (range !== null) {
      r.setStart(range.startContainer, range.startOffset);
      r.setEnd(range.endContainer, range.endOffset);
      sel.removeAllRanges();
      sel.addRange(r);
    } else {
      sel.selectAllChildren(this.el);
      sel.collapseToEnd();
    }
  }
  savePosition() {
    let charCount = -1, node;
    const selection = document.getSelection(), parentEl = this.el.parentNode;
    if (selection.focusNode && isChildOf(selection.focusNode, parentEl)) {
      node = selection.focusNode;
      charCount = selection.focusOffset;
      while (node && node !== parentEl) {
        if (node !== this.el && node.previousSibling) {
          node = node.previousSibling;
          charCount += node.textContent.length;
        } else {
          node = node.parentNode;
        }
      }
    }
    this.savedPos = charCount;
  }
  restorePosition(length = 0) {
    if (this.savedPos > 0 && this.savedPos < length) {
      const selection = window.getSelection(), range = createRange(this.el, { count: this.savedPos });
      if (range) {
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }
  hasParent(name, spanLevel) {
    const el = spanLevel ? this.parent : this.blockParent;
    return el !== null ? el.nodeName.toLowerCase() === name.toLowerCase() : false;
  }
  hasParents(list, recursive, el = this.parent) {
    if (el === null) {
      return false;
    }
    if (list.includes(el.nodeName.toLowerCase()) === true) {
      return true;
    }
    return recursive === true ? this.hasParents(list, recursive, el.parentNode) : false;
  }
  is(cmd, param) {
    if (this.selection === null) {
      return false;
    }
    switch (cmd) {
      case "formatBlock":
        return param === "DIV" && this.parent === this.el || this.hasParent(param, param === "PRE");
      case "link":
        return this.hasParent("A", true);
      case "fontSize":
        return document.queryCommandValue(cmd) === param;
      case "fontName":
        const res = document.queryCommandValue(cmd);
        return res === `"${param}"` || res === param;
      case "fullscreen":
        return this.eVm.inFullscreen.value;
      case "viewsource":
        return this.eVm.isViewingSource.value;
      case void 0:
        return false;
      default:
        const state = document.queryCommandState(cmd);
        return param !== void 0 ? state === param : state;
    }
  }
  getParentAttribute(attrib) {
    if (this.parent !== null) {
      return this.parent.getAttribute(attrib);
    }
    return null;
  }
  can(name) {
    if (name === "outdent") {
      return this.hasParents(["blockquote", "li"], true);
    }
    if (name === "indent") {
      return this.hasParents(["li"], true);
    }
    if (name === "link") {
      return this.selection !== null || this.is("link");
    }
  }
  apply(cmd, param, done = noop) {
    if (cmd === "formatBlock") {
      if (["BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5", "H6"].includes(param) && this.is(cmd, param)) {
        cmd = "outdent";
        param = null;
      }
      if (param === "PRE" && this.is(cmd, "PRE")) {
        param = "P";
      }
    } else if (cmd === "print") {
      done();
      const win = window.open();
      win.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `);
      win.print();
      win.close();
      return;
    } else if (cmd === "link") {
      const link = this.getParentAttribute("href");
      if (link === null) {
        const selection = this.selectWord(this.selection);
        const url = selection ? selection.toString() : "";
        if (!url.length) {
          if (!this.range || !this.range.cloneContents().querySelector("img")) {
            return;
          }
        }
        this.eVm.editLinkUrl.value = urlRegex.test(url) ? url : "https://";
        document.execCommand("createLink", false, this.eVm.editLinkUrl.value);
        this.save(selection.getRangeAt(0));
      } else {
        this.eVm.editLinkUrl.value = link;
        this.range.selectNodeContents(this.parent);
        this.save();
      }
      return;
    } else if (cmd === "fullscreen") {
      this.eVm.toggleFullscreen();
      done();
      return;
    } else if (cmd === "viewsource") {
      this.eVm.isViewingSource.value = this.eVm.isViewingSource.value === false;
      this.eVm.setContent(this.eVm.props.modelValue);
      done();
      return;
    }
    document.execCommand(cmd, false, param);
    done();
  }
  selectWord(sel) {
    if (sel === null || sel.isCollapsed !== true || sel.modify === void 0) {
      return sel;
    }
    const range = document.createRange();
    range.setStart(sel.anchorNode, sel.anchorOffset);
    range.setEnd(sel.focusNode, sel.focusOffset);
    const direction = range.collapsed ? ["backward", "forward"] : ["forward", "backward"];
    range.detach();
    const endNode = sel.focusNode, endOffset = sel.focusOffset;
    sel.collapse(sel.anchorNode, sel.anchorOffset);
    sel.modify("move", direction[0], "character");
    sel.modify("move", direction[1], "word");
    sel.extend(endNode, endOffset);
    sel.modify("extend", direction[1], "character");
    sel.modify("extend", direction[0], "word");
    return sel;
  }
}
function run(e, btn, eVm) {
  if (btn.handler) {
    btn.handler(e, eVm, eVm.caret);
  } else {
    eVm.runCmd(btn.cmd, btn.param);
  }
}
function getGroup(children) {
  return h("div", { class: "q-editor__toolbar-group" }, children);
}
function getBtn(eVm, btn, clickHandler, active = false) {
  const toggled = active || (btn.type === "toggle" ? btn.toggled ? btn.toggled(eVm) : btn.cmd && eVm.caret.is(btn.cmd, btn.param) : false), child = [];
  if (btn.tip && eVm.$q.platform.is.desktop) {
    const Key = btn.key ? h("div", [
      h("small", `(CTRL + ${String.fromCharCode(btn.key)})`)
    ]) : null;
    child.push(
      h(QTooltip, { delay: 1e3 }, () => [
        h("div", { innerHTML: btn.tip }),
        Key
      ])
    );
  }
  return h(QBtn, {
    ...eVm.buttonProps.value,
    icon: btn.icon !== null ? btn.icon : void 0,
    color: toggled ? btn.toggleColor || eVm.props.toolbarToggleColor : btn.color || eVm.props.toolbarColor,
    textColor: toggled && !eVm.props.toolbarPush ? null : btn.textColor || eVm.props.toolbarTextColor,
    label: btn.label,
    disable: btn.disable ? typeof btn.disable === "function" ? btn.disable(eVm) : true : false,
    size: "sm",
    onClick(e) {
      clickHandler && clickHandler();
      run(e, btn, eVm);
    }
  }, () => child);
}
function getDropdown(eVm, btn) {
  const onlyIcons = btn.list === "only-icons";
  let label = btn.label, icon = btn.icon !== null ? btn.icon : void 0, contentClass, Items;
  function closeDropdown() {
    Dropdown.component.proxy.hide();
  }
  if (onlyIcons) {
    Items = btn.options.map((btn2) => {
      const active = btn2.type === void 0 ? eVm.caret.is(btn2.cmd, btn2.param) : false;
      if (active) {
        label = btn2.tip;
        icon = btn2.icon !== null ? btn2.icon : void 0;
      }
      return getBtn(eVm, btn2, closeDropdown, active);
    });
    contentClass = eVm.toolbarBackgroundClass.value;
    Items = [
      getGroup(Items)
    ];
  } else {
    const activeClass = eVm.props.toolbarToggleColor !== void 0 ? `text-${eVm.props.toolbarToggleColor}` : null;
    const inactiveClass = eVm.props.toolbarTextColor !== void 0 ? `text-${eVm.props.toolbarTextColor}` : null;
    const noIcons = btn.list === "no-icons";
    Items = btn.options.map((btn2) => {
      const disable = btn2.disable ? btn2.disable(eVm) : false;
      const active = btn2.type === void 0 ? eVm.caret.is(btn2.cmd, btn2.param) : false;
      if (active) {
        label = btn2.tip;
        icon = btn2.icon !== null ? btn2.icon : void 0;
      }
      const htmlTip = btn2.htmlTip;
      return h(QItem, {
        active,
        activeClass,
        clickable: true,
        disable,
        dense: true,
        onClick(e) {
          closeDropdown();
          eVm.contentRef.value !== null && eVm.contentRef.value.focus();
          eVm.caret.restore();
          run(e, btn2, eVm);
        }
      }, () => [
        noIcons === true ? null : h(
          QItemSection,
          {
            class: active ? activeClass : inactiveClass,
            side: true
          },
          () => h(QIcon, { name: btn2.icon !== null ? btn2.icon : void 0 })
        ),
        h(
          QItemSection,
          htmlTip ? () => h("div", { class: "text-no-wrap", innerHTML: btn2.htmlTip }) : btn2.tip ? () => h("div", { class: "text-no-wrap" }, btn2.tip) : void 0
        )
      ]);
    });
    contentClass = [eVm.toolbarBackgroundClass.value, inactiveClass];
  }
  const highlight = btn.highlight && label !== btn.label;
  const Dropdown = h(QBtnDropdown, {
    ...eVm.buttonProps.value,
    noCaps: true,
    noWrap: true,
    color: highlight ? eVm.props.toolbarToggleColor : eVm.props.toolbarColor,
    textColor: highlight && !eVm.props.toolbarPush ? null : eVm.props.toolbarTextColor,
    label: btn.fixedLabel ? btn.label : label,
    icon: btn.fixedIcon ? btn.icon !== null ? btn.icon : void 0 : icon,
    contentClass,
    onShow: (evt) => eVm.emit("dropdownShow", evt),
    onHide: (evt) => eVm.emit("dropdownHide", evt),
    onBeforeShow: (evt) => eVm.emit("dropdownBeforeShow", evt),
    onBeforeHide: (evt) => eVm.emit("dropdownBeforeHide", evt)
  }, () => Items);
  return Dropdown;
}
function getToolbar(eVm) {
  if (eVm.caret) {
    return eVm.buttons.value.filter((f) => {
      return !eVm.isViewingSource.value || f.find((fb) => fb.cmd === "viewsource");
    }).map((group) => getGroup(
      group.map((btn) => {
        if (eVm.isViewingSource.value && btn.cmd !== "viewsource") {
          return false;
        }
        if (btn.type === "slot") {
          return hSlot(eVm.slots[btn.slot]);
        }
        if (btn.type === "dropdown") {
          return getDropdown(eVm, btn);
        }
        return getBtn(eVm, btn);
      })
    ));
  }
}
function getFonts(defaultFont, defaultFontLabel, defaultFontIcon, fonts = {}) {
  const aliases = Object.keys(fonts);
  if (aliases.length === 0) {
    return {};
  }
  const def = {
    default_font: {
      cmd: "fontName",
      param: defaultFont,
      icon: defaultFontIcon,
      tip: defaultFontLabel
    }
  };
  aliases.forEach((alias) => {
    const name = fonts[alias];
    def[alias] = {
      cmd: "fontName",
      param: name,
      icon: defaultFontIcon,
      tip: name,
      htmlTip: `<font face="${name}">${name}</font>`
    };
  });
  return def;
}
function getLinkEditor(eVm) {
  if (eVm.caret) {
    const color = eVm.props.toolbarColor || eVm.props.toolbarTextColor;
    let link = eVm.editLinkUrl.value;
    const updateLink = () => {
      eVm.caret.restore();
      if (link !== eVm.editLinkUrl.value) {
        document.execCommand("createLink", false, link === "" ? " " : link);
      }
      eVm.editLinkUrl.value = null;
    };
    return [
      h("div", { class: `q-mx-xs text-${color}` }, `${eVm.$q.lang.editor.url}: `),
      h("input", {
        key: "qedt_btm_input",
        class: "col q-editor__link-input",
        value: link,
        onInput: (evt) => {
          stop(evt);
          link = evt.target.value;
        },
        onKeydown: (evt) => {
          if (shouldIgnoreKey(evt) === true) {
            return;
          }
          switch (evt.keyCode) {
            case 13:
              prevent(evt);
              return updateLink();
            case 27:
              prevent(evt);
              eVm.caret.restore();
              if (!eVm.editLinkUrl.value || eVm.editLinkUrl.value === "https://") {
                document.execCommand("unlink");
              }
              eVm.editLinkUrl.value = null;
              break;
          }
        }
      }),
      getGroup([
        h(QBtn, {
          key: "qedt_btm_rem",
          tabindex: -1,
          ...eVm.buttonProps.value,
          label: eVm.$q.lang.label.remove,
          noCaps: true,
          onClick: () => {
            eVm.caret.restore();
            document.execCommand("unlink");
            eVm.editLinkUrl.value = null;
          }
        }),
        h(QBtn, {
          key: "qedt_btm_upd",
          ...eVm.buttonProps.value,
          label: eVm.$q.lang.label.update,
          noCaps: true,
          onClick: updateLink
        })
      ])
    ];
  }
}
let counter = 0;
const useFullscreenProps = {
  fullscreen: Boolean,
  noRouteFullscreenExit: Boolean
};
const useFullscreenEmits = ["update:fullscreen", "fullscreen"];
function useFullscreen() {
  const vm = getCurrentInstance();
  const { props, emit, proxy } = vm;
  let historyEntry, fullscreenFillerNode, container;
  const inFullscreen = ref(false);
  vmHasRouter(vm) === true && watch(() => proxy.$route.fullPath, () => {
    props.noRouteFullscreenExit !== true && exitFullscreen();
  });
  watch(() => props.fullscreen, (v) => {
    if (inFullscreen.value !== v) {
      toggleFullscreen();
    }
  });
  watch(inFullscreen, (v) => {
    emit("update:fullscreen", v);
    emit("fullscreen", v);
  });
  function toggleFullscreen() {
    if (inFullscreen.value === true) {
      exitFullscreen();
    } else {
      setFullscreen();
    }
  }
  function setFullscreen() {
    if (inFullscreen.value === true) {
      return;
    }
    inFullscreen.value = true;
    container = proxy.$el.parentNode;
    container.replaceChild(fullscreenFillerNode, proxy.$el);
    document.body.appendChild(proxy.$el);
    counter++;
    if (counter === 1) {
      document.body.classList.add("q-body--fullscreen-mixin");
    }
    historyEntry = {
      handler: exitFullscreen
    };
    History.add(historyEntry);
  }
  function exitFullscreen() {
    if (inFullscreen.value !== true) {
      return;
    }
    if (historyEntry !== void 0) {
      History.remove(historyEntry);
      historyEntry = void 0;
    }
    container.replaceChild(proxy.$el, fullscreenFillerNode);
    inFullscreen.value = false;
    counter = Math.max(0, counter - 1);
    if (counter === 0) {
      document.body.classList.remove("q-body--fullscreen-mixin");
      if (proxy.$el.scrollIntoView !== void 0) {
        setTimeout(() => {
          proxy.$el.scrollIntoView();
        });
      }
    }
  }
  onBeforeMount(() => {
    fullscreenFillerNode = document.createElement("span");
  });
  onMounted(() => {
    props.fullscreen === true && setFullscreen();
  });
  onBeforeUnmount(exitFullscreen);
  Object.assign(proxy, {
    toggleFullscreen,
    setFullscreen,
    exitFullscreen
  });
  return {
    inFullscreen,
    toggleFullscreen
  };
}
const toString = Object.prototype.toString, hasOwn = Object.prototype.hasOwnProperty, notPlainObject = new Set(
  ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map((name) => "[object " + name + "]")
);
function isPlainObject(obj) {
  if (obj !== Object(obj) || notPlainObject.has(toString.call(obj)) === true) {
    return false;
  }
  if (obj.constructor && hasOwn.call(obj, "constructor") === false && hasOwn.call(obj.constructor.prototype, "isPrototypeOf") === false) {
    return false;
  }
  let key;
  for (key in obj) {
  }
  return key === void 0 || hasOwn.call(obj, key);
}
function extend() {
  let options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, deep = false;
  const length = arguments.length;
  if (typeof target === "boolean") {
    deep = target;
    target = arguments[1] || {};
    i = 2;
  }
  if (Object(target) !== target && typeof target !== "function") {
    target = {};
  }
  if (length === i) {
    target = this;
    i--;
  }
  for (; i < length; i++) {
    if ((options = arguments[i]) !== null) {
      for (name in options) {
        src = target[name];
        copy = options[name];
        if (target === copy) {
          continue;
        }
        if (deep === true && copy && ((copyIsArray = Array.isArray(copy)) || isPlainObject(copy) === true)) {
          if (copyIsArray === true) {
            clone = Array.isArray(src) === true ? src : [];
          } else {
            clone = isPlainObject(src) === true ? src : {};
          }
          target[name] = extend(deep, clone, copy);
        } else if (copy !== void 0) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}
var QEditor = createComponent({
  name: "QEditor",
  props: {
    ...useDarkProps,
    ...useFullscreenProps,
    modelValue: {
      type: String,
      required: true
    },
    readonly: Boolean,
    disable: Boolean,
    minHeight: {
      type: String,
      default: "10rem"
    },
    maxHeight: String,
    height: String,
    definitions: Object,
    fonts: Object,
    placeholder: String,
    toolbar: {
      type: Array,
      validator: (v) => v.length === 0 || v.every((group) => group.length),
      default() {
        return [
          ["left", "center", "right", "justify"],
          ["bold", "italic", "underline", "strike"],
          ["undo", "redo"]
        ];
      }
    },
    toolbarColor: String,
    toolbarBg: String,
    toolbarTextColor: String,
    toolbarToggleColor: {
      type: String,
      default: "primary"
    },
    toolbarOutline: Boolean,
    toolbarPush: Boolean,
    toolbarRounded: Boolean,
    paragraphTag: {
      type: String,
      validator: (v) => ["div", "p"].includes(v),
      default: "div"
    },
    contentStyle: Object,
    contentClass: [Object, Array, String],
    square: Boolean,
    flat: Boolean,
    dense: Boolean
  },
  emits: [
    ...useFullscreenEmits,
    "update:modelValue",
    "keydown",
    "click",
    "mouseup",
    "keyup",
    "touchend",
    "focus",
    "blur",
    "dropdownShow",
    "dropdownHide",
    "dropdownBeforeShow",
    "dropdownBeforeHide",
    "linkShow",
    "linkHide"
  ],
  setup(props, { slots, emit, attrs }) {
    const { proxy, vnode } = getCurrentInstance();
    const { $q } = proxy;
    const isDark = useDark(props, $q);
    const { inFullscreen, toggleFullscreen } = useFullscreen();
    const splitAttrs = useSplitAttrs(attrs, vnode);
    const rootRef = ref(null);
    const contentRef = ref(null);
    const editLinkUrl = ref(null);
    const isViewingSource = ref(false);
    const editable = computed(() => !props.readonly && !props.disable);
    let defaultFont, offsetBottom;
    let lastEmit = props.modelValue;
    {
      document.execCommand("defaultParagraphSeparator", false, props.paragraphTag);
      defaultFont = window.getComputedStyle(document.body).fontFamily;
    }
    const toolbarBackgroundClass = computed(() => props.toolbarBg ? ` bg-${props.toolbarBg}` : "");
    const buttonProps = computed(() => {
      const flat = props.toolbarOutline !== true && props.toolbarPush !== true;
      return {
        type: "a",
        flat,
        noWrap: true,
        outline: props.toolbarOutline,
        push: props.toolbarPush,
        rounded: props.toolbarRounded,
        dense: true,
        color: props.toolbarColor,
        disable: !editable.value,
        size: "sm"
      };
    });
    const buttonDef = computed(() => {
      const e = $q.lang.editor, i = $q.iconSet.editor;
      return {
        bold: { cmd: "bold", icon: i.bold, tip: e.bold, key: 66 },
        italic: { cmd: "italic", icon: i.italic, tip: e.italic, key: 73 },
        strike: { cmd: "strikeThrough", icon: i.strikethrough, tip: e.strikethrough, key: 83 },
        underline: { cmd: "underline", icon: i.underline, tip: e.underline, key: 85 },
        unordered: { cmd: "insertUnorderedList", icon: i.unorderedList, tip: e.unorderedList },
        ordered: { cmd: "insertOrderedList", icon: i.orderedList, tip: e.orderedList },
        subscript: { cmd: "subscript", icon: i.subscript, tip: e.subscript, htmlTip: "x<subscript>2</subscript>" },
        superscript: { cmd: "superscript", icon: i.superscript, tip: e.superscript, htmlTip: "x<superscript>2</superscript>" },
        link: { cmd: "link", disable: (eVm2) => eVm2.caret && !eVm2.caret.can("link"), icon: i.hyperlink, tip: e.hyperlink, key: 76 },
        fullscreen: { cmd: "fullscreen", icon: i.toggleFullscreen, tip: e.toggleFullscreen, key: 70 },
        viewsource: { cmd: "viewsource", icon: i.viewSource, tip: e.viewSource },
        quote: { cmd: "formatBlock", param: "BLOCKQUOTE", icon: i.quote, tip: e.quote, key: 81 },
        left: { cmd: "justifyLeft", icon: i.left, tip: e.left },
        center: { cmd: "justifyCenter", icon: i.center, tip: e.center },
        right: { cmd: "justifyRight", icon: i.right, tip: e.right },
        justify: { cmd: "justifyFull", icon: i.justify, tip: e.justify },
        print: { type: "no-state", cmd: "print", icon: i.print, tip: e.print, key: 80 },
        outdent: { type: "no-state", disable: (eVm2) => eVm2.caret && !eVm2.caret.can("outdent"), cmd: "outdent", icon: i.outdent, tip: e.outdent },
        indent: { type: "no-state", disable: (eVm2) => eVm2.caret && !eVm2.caret.can("indent"), cmd: "indent", icon: i.indent, tip: e.indent },
        removeFormat: { type: "no-state", cmd: "removeFormat", icon: i.removeFormat, tip: e.removeFormat },
        hr: { type: "no-state", cmd: "insertHorizontalRule", icon: i.hr, tip: e.hr },
        undo: { type: "no-state", cmd: "undo", icon: i.undo, tip: e.undo, key: 90 },
        redo: { type: "no-state", cmd: "redo", icon: i.redo, tip: e.redo, key: 89 },
        h1: { cmd: "formatBlock", param: "H1", icon: i.heading1 || i.heading, tip: e.heading1, htmlTip: `<h1 class="q-ma-none">${e.heading1}</h1>` },
        h2: { cmd: "formatBlock", param: "H2", icon: i.heading2 || i.heading, tip: e.heading2, htmlTip: `<h2 class="q-ma-none">${e.heading2}</h2>` },
        h3: { cmd: "formatBlock", param: "H3", icon: i.heading3 || i.heading, tip: e.heading3, htmlTip: `<h3 class="q-ma-none">${e.heading3}</h3>` },
        h4: { cmd: "formatBlock", param: "H4", icon: i.heading4 || i.heading, tip: e.heading4, htmlTip: `<h4 class="q-ma-none">${e.heading4}</h4>` },
        h5: { cmd: "formatBlock", param: "H5", icon: i.heading5 || i.heading, tip: e.heading5, htmlTip: `<h5 class="q-ma-none">${e.heading5}</h5>` },
        h6: { cmd: "formatBlock", param: "H6", icon: i.heading6 || i.heading, tip: e.heading6, htmlTip: `<h6 class="q-ma-none">${e.heading6}</h6>` },
        p: { cmd: "formatBlock", param: props.paragraphTag, icon: i.heading, tip: e.paragraph },
        code: { cmd: "formatBlock", param: "PRE", icon: i.code, htmlTip: `<code>${e.code}</code>` },
        "size-1": { cmd: "fontSize", param: "1", icon: i.size1 || i.size, tip: e.size1, htmlTip: `<font size="1">${e.size1}</font>` },
        "size-2": { cmd: "fontSize", param: "2", icon: i.size2 || i.size, tip: e.size2, htmlTip: `<font size="2">${e.size2}</font>` },
        "size-3": { cmd: "fontSize", param: "3", icon: i.size3 || i.size, tip: e.size3, htmlTip: `<font size="3">${e.size3}</font>` },
        "size-4": { cmd: "fontSize", param: "4", icon: i.size4 || i.size, tip: e.size4, htmlTip: `<font size="4">${e.size4}</font>` },
        "size-5": { cmd: "fontSize", param: "5", icon: i.size5 || i.size, tip: e.size5, htmlTip: `<font size="5">${e.size5}</font>` },
        "size-6": { cmd: "fontSize", param: "6", icon: i.size6 || i.size, tip: e.size6, htmlTip: `<font size="6">${e.size6}</font>` },
        "size-7": { cmd: "fontSize", param: "7", icon: i.size7 || i.size, tip: e.size7, htmlTip: `<font size="7">${e.size7}</font>` }
      };
    });
    const buttons = computed(() => {
      const userDef = props.definitions || {};
      const def = props.definitions || props.fonts ? extend(
        true,
        {},
        buttonDef.value,
        userDef,
        getFonts(
          defaultFont,
          $q.lang.editor.defaultFont,
          $q.iconSet.editor.font,
          props.fonts
        )
      ) : buttonDef.value;
      return props.toolbar.map(
        (group) => group.map((token) => {
          if (token.options) {
            return {
              type: "dropdown",
              icon: token.icon,
              label: token.label,
              size: "sm",
              dense: true,
              fixedLabel: token.fixedLabel,
              fixedIcon: token.fixedIcon,
              highlight: token.highlight,
              list: token.list,
              options: token.options.map((item) => def[item])
            };
          }
          const obj = def[token];
          if (obj) {
            return obj.type === "no-state" || userDef[token] && (obj.cmd === void 0 || buttonDef.value[obj.cmd] && buttonDef.value[obj.cmd].type === "no-state") ? obj : Object.assign({ type: "toggle" }, obj);
          } else {
            return {
              type: "slot",
              slot: token
            };
          }
        })
      );
    });
    const eVm = {
      $q,
      props,
      slots,
      emit,
      inFullscreen,
      toggleFullscreen,
      runCmd,
      isViewingSource,
      editLinkUrl,
      toolbarBackgroundClass,
      buttonProps,
      contentRef,
      buttons,
      setContent
    };
    watch(() => props.modelValue, (v) => {
      if (lastEmit !== v) {
        lastEmit = v;
        setContent(v, true);
      }
    });
    watch(editLinkUrl, (v) => {
      emit(`link${v ? "Show" : "Hide"}`);
    });
    const hasToolbar = computed(() => props.toolbar && props.toolbar.length !== 0);
    const keys = computed(() => {
      const k = {}, add = (btn) => {
        if (btn.key) {
          k[btn.key] = {
            cmd: btn.cmd,
            param: btn.param
          };
        }
      };
      buttons.value.forEach((group) => {
        group.forEach((token) => {
          if (token.options) {
            token.options.forEach(add);
          } else {
            add(token);
          }
        });
      });
      return k;
    });
    const innerStyle = computed(() => inFullscreen.value ? props.contentStyle : [
      {
        minHeight: props.minHeight,
        height: props.height,
        maxHeight: props.maxHeight
      },
      props.contentStyle
    ]);
    const classes = computed(
      () => `q-editor q-editor--${isViewingSource.value === true ? "source" : "default"}` + (props.disable === true ? " disabled" : "") + (inFullscreen.value === true ? " fullscreen column" : "") + (props.square === true ? " q-editor--square no-border-radius" : "") + (props.flat === true ? " q-editor--flat" : "") + (props.dense === true ? " q-editor--dense" : "") + (isDark.value === true ? " q-editor--dark q-dark" : "")
    );
    const innerClass = computed(() => [
      props.contentClass,
      "q-editor__content",
      { col: inFullscreen.value, "overflow-auto": inFullscreen.value || props.maxHeight }
    ]);
    const attributes = computed(() => props.disable === true ? { "aria-disabled": "true" } : {});
    function onInput() {
      if (contentRef.value !== null) {
        const prop = `inner${isViewingSource.value === true ? "Text" : "HTML"}`;
        const val = contentRef.value[prop];
        if (val !== props.modelValue) {
          lastEmit = val;
          emit("update:modelValue", val);
        }
      }
    }
    function onKeydown(e) {
      emit("keydown", e);
      if (e.ctrlKey !== true || shouldIgnoreKey(e) === true) {
        refreshToolbar();
        return;
      }
      const key = e.keyCode;
      const target = keys.value[key];
      if (target !== void 0) {
        const { cmd, param } = target;
        stopAndPrevent(e);
        runCmd(cmd, param, false);
      }
    }
    function onClick(e) {
      refreshToolbar();
      emit("click", e);
    }
    function onBlur(e) {
      if (contentRef.value !== null) {
        const { scrollTop, scrollHeight } = contentRef.value;
        offsetBottom = scrollHeight - scrollTop;
      }
      eVm.caret.save();
      emit("blur", e);
    }
    function onFocus(e) {
      nextTick(() => {
        if (contentRef.value !== null && offsetBottom !== void 0) {
          contentRef.value.scrollTop = contentRef.value.scrollHeight - offsetBottom;
        }
      });
      emit("focus", e);
    }
    function onFocusin(e) {
      const root = rootRef.value;
      if (root !== null && root.contains(e.target) === true && (e.relatedTarget === null || root.contains(e.relatedTarget) !== true)) {
        const prop = `inner${isViewingSource.value === true ? "Text" : "HTML"}`;
        eVm.caret.restorePosition(contentRef.value[prop].length);
        refreshToolbar();
      }
    }
    function onFocusout(e) {
      const root = rootRef.value;
      if (root !== null && root.contains(e.target) === true && (e.relatedTarget === null || root.contains(e.relatedTarget) !== true)) {
        eVm.caret.savePosition();
        refreshToolbar();
      }
    }
    function onPointerStart() {
      offsetBottom = void 0;
    }
    function onSelectionchange(e) {
      eVm.caret.save();
    }
    function setContent(v, restorePosition) {
      if (contentRef.value !== null) {
        if (restorePosition === true) {
          eVm.caret.savePosition();
        }
        const prop = `inner${isViewingSource.value === true ? "Text" : "HTML"}`;
        contentRef.value[prop] = v;
        if (restorePosition === true) {
          eVm.caret.restorePosition(contentRef.value[prop].length);
          refreshToolbar();
        }
      }
    }
    function runCmd(cmd, param, update = true) {
      focus();
      eVm.caret.restore();
      eVm.caret.apply(cmd, param, () => {
        focus();
        eVm.caret.save();
        if (update) {
          refreshToolbar();
        }
      });
    }
    function refreshToolbar() {
      setTimeout(() => {
        editLinkUrl.value = null;
        proxy.$forceUpdate();
      }, 1);
    }
    function focus() {
      addFocusFn(() => {
        contentRef.value !== null && contentRef.value.focus({ preventScroll: true });
      });
    }
    function getContentEl() {
      return contentRef.value;
    }
    onMounted(() => {
      eVm.caret = proxy.caret = new Caret(contentRef.value, eVm);
      setContent(props.modelValue);
      refreshToolbar();
      document.addEventListener("selectionchange", onSelectionchange);
    });
    onBeforeUnmount(() => {
      document.removeEventListener("selectionchange", onSelectionchange);
    });
    Object.assign(proxy, {
      runCmd,
      refreshToolbar,
      focus,
      getContentEl
    });
    return () => {
      let toolbars;
      if (hasToolbar.value) {
        const bars = [
          h("div", {
            key: "qedt_top",
            class: "q-editor__toolbar row no-wrap scroll-x" + toolbarBackgroundClass.value
          }, getToolbar(eVm))
        ];
        editLinkUrl.value !== null && bars.push(
          h("div", {
            key: "qedt_btm",
            class: "q-editor__toolbar row no-wrap items-center scroll-x" + toolbarBackgroundClass.value
          }, getLinkEditor(eVm))
        );
        toolbars = h("div", {
          key: "toolbar_ctainer",
          class: "q-editor__toolbars-container"
        }, bars);
      }
      return h("div", {
        ref: rootRef,
        class: classes.value,
        style: { height: inFullscreen.value === true ? "100%" : null },
        ...attributes.value,
        onFocusin,
        onFocusout
      }, [
        toolbars,
        h("div", {
          ref: contentRef,
          style: innerStyle.value,
          class: innerClass.value,
          contenteditable: editable.value,
          placeholder: props.placeholder,
          ...{},
          ...splitAttrs.listeners.value,
          onInput,
          onKeydown,
          onClick,
          onBlur,
          onFocus,
          onMousedown: onPointerStart,
          onTouchstartPassive: onPointerStart
        })
      ]);
    };
  }
});
var Companies_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-7fdd053e"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "row q-col-gutter-md" };
const _hoisted_2 = { class: "col" };
const _hoisted_3 = { class: "row q-col-gutter-md" };
const _hoisted_4 = { class: "col" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("input", {
  type: "submit",
  style: { "position": "absolute", "left": "-9999px" }
}, null, -1));
const _hoisted_6 = { class: "text-h6" };
const _hoisted_7 = { class: "row q-col-gutter-md" };
const _hoisted_8 = { class: "col-4" };
const _hoisted_9 = { class: "row q-col-gutter-md" };
const _hoisted_10 = { class: "col-3" };
const _hoisted_11 = { class: "col-9" };
const _hoisted_12 = { class: "col-8" };
const _hoisted_13 = { class: "row q-col-gutter-md" };
const _hoisted_14 = { class: "col-6" };
const _hoisted_15 = { class: "col-6" };
const _sfc_main = defineComponent({
  __name: "Companies",
  setup(__props) {
    debug("app:companies");
    const init = {
      collName: "companies",
      stateName: "company",
      defaultForm: {
        open: ""
      }
    };
    const globalView$1 = globalView(init);
    const {
      store: companyStore,
      data: companies,
      doSave,
      form
    } = globalView$1;
    const companyGrid = ref({});
    const tab = ref("contact");
    return (_ctx, _cache) => {
      const _directive_t = resolveDirective("t");
      return openBlock(), createBlock(QPage, { class: "q-pa-sm" }, {
        default: withCtx(() => [
          createVNode(NavBar, {
            title: _ctx.$t("messages.LabelCompanies"),
            icon: "location_city",
            stateName: "companies",
            state: unref(companyStore)
          }, null, 8, ["title", "state"]),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QCard, null, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createVNode(Grid, {
                        gridName: "companyGrid",
                        gridOptions: unref(companyGrid),
                        stateName: "companies",
                        state: unref(companyStore),
                        class: "grid"
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
                  createVNode(QForm, { onSubmit: unref(doSave) }, {
                    default: withCtx(() => [
                      _hoisted_5,
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          withDirectives(createBaseVNode("div", _hoisted_6, null, 512), [
                            [_directive_t, "messages.LabelCompany"]
                          ]),
                          createBaseVNode("div", _hoisted_7, [
                            createBaseVNode("div", _hoisted_8, [
                              createVNode(QInput, {
                                name: "name",
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).name = $event),
                                "lazy-rules": "",
                                dense: "",
                                outlined: "",
                                ref: "refCompanies",
                                label: _ctx.$t("messages.ColName"),
                                hint: _ctx.$t("messages.TextNameHint"),
                                rules: [(val) => !!val || _ctx.$t("messages.TextRequired")]
                              }, null, 8, ["modelValue", "label", "hint", "rules"]),
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
                              createVNode(QInput, {
                                name: "desc2",
                                modelValue: unref(form).desc2,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).desc2 = $event),
                                "lazy-rules": "",
                                dense: "",
                                outlined: "",
                                label: _ctx.$t("messages.ColDesc") + " 2",
                                hint: ""
                              }, null, 8, ["modelValue", "label"]),
                              createVNode(QInput, {
                                name: "street",
                                modelValue: unref(form).street,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).street = $event),
                                "lazy-rules": "",
                                dense: "",
                                outlined: "",
                                label: _ctx.$t("messages.ColStreet"),
                                hint: ""
                              }, null, 8, ["modelValue", "label"]),
                              createBaseVNode("div", _hoisted_9, [
                                createBaseVNode("div", _hoisted_10, [
                                  createVNode(QInput, {
                                    name: "zip",
                                    modelValue: unref(form).zip,
                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(form).zip = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.ColZip"),
                                    hint: ""
                                  }, null, 8, ["modelValue", "label"])
                                ]),
                                createBaseVNode("div", _hoisted_11, [
                                  createVNode(QInput, {
                                    name: "city",
                                    modelValue: unref(form).city,
                                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(form).city = $event),
                                    "lazy-rules": "",
                                    dense: "",
                                    outlined: "",
                                    label: _ctx.$t("messages.ColCity"),
                                    hint: ""
                                  }, null, 8, ["modelValue", "label"])
                                ])
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_12, [
                              createVNode(QCard, { bordered: "" }, {
                                default: withCtx(() => [
                                  createVNode(QTabs, {
                                    modelValue: unref(tab),
                                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => isRef(tab) ? tab.value = $event : null),
                                    class: "text-teal",
                                    align: "left",
                                    dense: "",
                                    outlined: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QTab, {
                                        label: _ctx.$t("messages.LabelContact"),
                                        name: "contact"
                                      }, null, 8, ["label"]),
                                      createVNode(QTab, {
                                        label: _ctx.$t("messages.LabelOpen"),
                                        name: "open"
                                      }, null, 8, ["label"])
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue"]),
                                  createVNode(QTabPanels, {
                                    modelValue: unref(tab),
                                    "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => isRef(tab) ? tab.value = $event : null)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QTabPanel, { name: "contact" }, {
                                        default: withCtx(() => [
                                          createBaseVNode("div", _hoisted_13, [
                                            createBaseVNode("div", _hoisted_14, [
                                              createVNode(QInput, {
                                                type: "phone",
                                                name: "phone",
                                                modelValue: unref(form).phone,
                                                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(form).phone = $event),
                                                "lazy-rules": "",
                                                dense: "",
                                                outlined: "",
                                                label: _ctx.$t("messages.ColPhone"),
                                                hint: ""
                                              }, null, 8, ["modelValue", "label"]),
                                              createVNode(QInput, {
                                                type: "phone",
                                                name: "fax",
                                                modelValue: unref(form).fax,
                                                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(form).fax = $event),
                                                "lazy-rules": "",
                                                dense: "",
                                                outlined: "",
                                                label: _ctx.$t("messages.ColFax"),
                                                hint: ""
                                              }, null, 8, ["modelValue", "label"]),
                                              createVNode(QInput, {
                                                type: "mail",
                                                name: "mail",
                                                modelValue: unref(form).mail,
                                                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(form).mail = $event),
                                                "lazy-rules": "",
                                                dense: "",
                                                outlined: "",
                                                label: _ctx.$t("messages.ColMail"),
                                                hint: ""
                                              }, null, 8, ["modelValue", "label"]),
                                              createVNode(QInput, {
                                                type: "number",
                                                name: "filiale",
                                                modelValue: unref(form).filiale,
                                                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(form).filiale = $event),
                                                "lazy-rules": "",
                                                dense: "",
                                                outlined: "",
                                                label: `${_ctx.$t("messages.LabelFil")} - ${_ctx.$t("messages.LabelAutoseller")}`,
                                                hint: ""
                                              }, null, 8, ["modelValue", "label"])
                                            ]),
                                            createBaseVNode("div", _hoisted_15, [
                                              createVNode(QInput, {
                                                name: "register",
                                                modelValue: unref(form).register,
                                                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(form).register = $event),
                                                "lazy-rules": "",
                                                dense: "",
                                                outlined: "",
                                                label: _ctx.$t("messages.ColRegister"),
                                                hint: ""
                                              }, null, 8, ["modelValue", "label"]),
                                              createVNode(QInput, {
                                                name: "registnr",
                                                modelValue: unref(form).registnr,
                                                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(form).registnr = $event),
                                                "lazy-rules": "",
                                                dense: "",
                                                outlined: "",
                                                label: _ctx.$t("messages.ColRegistnr"),
                                                hint: ""
                                              }, null, 8, ["modelValue", "label"]),
                                              createVNode(QInput, {
                                                name: "state",
                                                modelValue: unref(form).state,
                                                "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => unref(form).state = $event),
                                                "lazy-rules": "",
                                                dense: "",
                                                outlined: "",
                                                label: _ctx.$t("messages.LabelState"),
                                                hint: ""
                                              }, null, 8, ["modelValue", "label"])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(QTabPanel, { name: "open" }, {
                                        default: withCtx(() => [
                                          createVNode(QEditor, {
                                            modelValue: unref(form).open,
                                            "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => unref(form).open = $event),
                                            "min-height": "5rem"
                                          }, null, 8, ["modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
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
var Companies = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7fdd053e"], ["__file", "Companies.vue"]]);
export { Companies as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcGFuaWVzLmY1ZTNjYmViLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2VkaXRvci9lZGl0b3ItY2FyZXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2VkaXRvci9lZGl0b3ItdXRpbHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1mdWxsc2NyZWVuLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvZXh0ZW5kLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9lZGl0b3IvUUVkaXRvci5qcyIsIi4uLy4uLy4uL3NyYy9wYWdlcy9Db21wYW5pZXMudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcblxuZnVuY3Rpb24gZ2V0QmxvY2tFbGVtZW50IChlbCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQgJiYgZWwgPT09IHBhcmVudCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBub2RlTmFtZSA9IGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICBpZiAoWyAnZGl2JywgJ2xpJywgJ3VsJywgJ29sJywgJ2Jsb2NrcXVvdGUnIF0uaW5jbHVkZXMobm9kZU5hbWUpID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGVsXG4gIH1cblxuICBjb25zdFxuICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGVcbiAgICAgID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpXG4gICAgICA6IGVsLmN1cnJlbnRTdHlsZSxcbiAgICBkaXNwbGF5ID0gc3R5bGUuZGlzcGxheVxuXG4gIGlmIChkaXNwbGF5ID09PSAnYmxvY2snIHx8IGRpc3BsYXkgPT09ICd0YWJsZScpIHtcbiAgICByZXR1cm4gZWxcbiAgfVxuXG4gIHJldHVybiBnZXRCbG9ja0VsZW1lbnQoZWwucGFyZW50Tm9kZSlcbn1cblxuZnVuY3Rpb24gaXNDaGlsZE9mIChlbCwgcGFyZW50LCBvclNhbWUpIHtcbiAgcmV0dXJuICFlbCB8fCBlbCA9PT0gZG9jdW1lbnQuYm9keVxuICAgID8gZmFsc2VcbiAgICA6IChvclNhbWUgPT09IHRydWUgJiYgZWwgPT09IHBhcmVudCkgfHwgKHBhcmVudCA9PT0gZG9jdW1lbnQgPyBkb2N1bWVudC5ib2R5IDogcGFyZW50KS5jb250YWlucyhlbC5wYXJlbnROb2RlKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSYW5nZSAobm9kZSwgY2hhcnMsIHJhbmdlKSB7XG4gIGlmICghcmFuZ2UpIHtcbiAgICByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcbiAgICByYW5nZS5zZWxlY3ROb2RlKG5vZGUpXG4gICAgcmFuZ2Uuc2V0U3RhcnQobm9kZSwgMClcbiAgfVxuXG4gIGlmIChjaGFycy5jb3VudCA9PT0gMCkge1xuICAgIHJhbmdlLnNldEVuZChub2RlLCBjaGFycy5jb3VudClcbiAgfVxuICBlbHNlIGlmIChjaGFycy5jb3VudCA+IDApIHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgIGlmIChub2RlLnRleHRDb250ZW50Lmxlbmd0aCA8IGNoYXJzLmNvdW50KSB7XG4gICAgICAgIGNoYXJzLmNvdW50IC09IG5vZGUudGV4dENvbnRlbnQubGVuZ3RoXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmFuZ2Uuc2V0RW5kKG5vZGUsIGNoYXJzLmNvdW50KVxuICAgICAgICBjaGFycy5jb3VudCA9IDBcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmb3IgKGxldCBscCA9IDA7IGNoYXJzLmNvdW50ICE9PSAwICYmIGxwIDwgbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgbHArKykge1xuICAgICAgICByYW5nZSA9IGNyZWF0ZVJhbmdlKG5vZGUuY2hpbGROb2Rlc1sgbHAgXSwgY2hhcnMsIHJhbmdlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByYW5nZVxufVxuXG5jb25zdCB1cmxSZWdleCA9IC9eaHR0cHM/OlxcL1xcLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZXQge1xuICBjb25zdHJ1Y3RvciAoZWwsIGVWbSkge1xuICAgIHRoaXMuZWwgPSBlbFxuICAgIHRoaXMuZVZtID0gZVZtXG4gICAgdGhpcy5fcmFuZ2UgPSBudWxsXG4gIH1cblxuICBnZXQgc2VsZWN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbCkge1xuICAgICAgY29uc3Qgc2VsID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKClcblxuICAgICAgLy8gb25seSB3aGVuIHRoZSBzZWxlY3Rpb24gaW4gZWxlbWVudFxuICAgICAgaWYgKGlzQ2hpbGRPZihzZWwuYW5jaG9yTm9kZSwgdGhpcy5lbCwgdHJ1ZSkgJiYgaXNDaGlsZE9mKHNlbC5mb2N1c05vZGUsIHRoaXMuZWwsIHRydWUpKSB7XG4gICAgICAgIHJldHVybiBzZWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgZ2V0IGhhc1NlbGVjdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uICE9PSBudWxsXG4gICAgICA/IHRoaXMuc2VsZWN0aW9uLnRvU3RyaW5nKCkubGVuZ3RoICE9PSAwXG4gICAgICA6IGZhbHNlXG4gIH1cblxuICBnZXQgcmFuZ2UgKCkge1xuICAgIGNvbnN0IHNlbCA9IHRoaXMuc2VsZWN0aW9uXG5cbiAgICBpZiAoc2VsICE9PSBudWxsICYmIHNlbC5yYW5nZUNvdW50KSB7XG4gICAgICByZXR1cm4gc2VsLmdldFJhbmdlQXQoMClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcmFuZ2VcbiAgfVxuXG4gIGdldCBwYXJlbnQgKCkge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZVxuXG4gICAgaWYgKHJhbmdlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gcmFuZ2Uuc3RhcnRDb250YWluZXJcblxuICAgICAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IGRvY3VtZW50LkVMRU1FTlRfTk9ERVxuICAgICAgICA/IG5vZGVcbiAgICAgICAgOiBub2RlLnBhcmVudE5vZGVcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgZ2V0IGJsb2NrUGFyZW50ICgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudFxuXG4gICAgaWYgKHBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGdldEJsb2NrRWxlbWVudChwYXJlbnQsIHRoaXMuZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHNhdmUgKHJhbmdlID0gdGhpcy5yYW5nZSkge1xuICAgIGlmIChyYW5nZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcmFuZ2UgPSByYW5nZVxuICAgIH1cbiAgfVxuXG4gIHJlc3RvcmUgKHJhbmdlID0gdGhpcy5fcmFuZ2UpIHtcbiAgICBjb25zdFxuICAgICAgciA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXG4gICAgICBzZWwgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKVxuXG4gICAgaWYgKHJhbmdlICE9PSBudWxsKSB7XG4gICAgICByLnNldFN0YXJ0KHJhbmdlLnN0YXJ0Q29udGFpbmVyLCByYW5nZS5zdGFydE9mZnNldClcbiAgICAgIHIuc2V0RW5kKHJhbmdlLmVuZENvbnRhaW5lciwgcmFuZ2UuZW5kT2Zmc2V0KVxuICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgICBzZWwuYWRkUmFuZ2UocilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZWwuc2VsZWN0QWxsQ2hpbGRyZW4odGhpcy5lbClcbiAgICAgIHNlbC5jb2xsYXBzZVRvRW5kKClcbiAgICB9XG4gIH1cblxuICBzYXZlUG9zaXRpb24gKCkge1xuICAgIGxldCBjaGFyQ291bnQgPSAtMSwgbm9kZVxuICAgIGNvbnN0XG4gICAgICBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKSxcbiAgICAgIHBhcmVudEVsID0gdGhpcy5lbC5wYXJlbnROb2RlXG5cbiAgICBpZiAoc2VsZWN0aW9uLmZvY3VzTm9kZSAmJiBpc0NoaWxkT2Yoc2VsZWN0aW9uLmZvY3VzTm9kZSwgcGFyZW50RWwpKSB7XG4gICAgICBub2RlID0gc2VsZWN0aW9uLmZvY3VzTm9kZVxuICAgICAgY2hhckNvdW50ID0gc2VsZWN0aW9uLmZvY3VzT2Zmc2V0XG5cbiAgICAgIHdoaWxlIChub2RlICYmIG5vZGUgIT09IHBhcmVudEVsKSB7XG4gICAgICAgIGlmIChub2RlICE9PSB0aGlzLmVsICYmIG5vZGUucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgICAgbm9kZSA9IG5vZGUucHJldmlvdXNTaWJsaW5nXG4gICAgICAgICAgY2hhckNvdW50ICs9IG5vZGUudGV4dENvbnRlbnQubGVuZ3RoXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zYXZlZFBvcyA9IGNoYXJDb3VudFxuICB9XG5cbiAgcmVzdG9yZVBvc2l0aW9uIChsZW5ndGggPSAwKSB7XG4gICAgaWYgKHRoaXMuc2F2ZWRQb3MgPiAwICYmIHRoaXMuc2F2ZWRQb3MgPCBsZW5ndGgpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKSxcbiAgICAgICAgcmFuZ2UgPSBjcmVhdGVSYW5nZSh0aGlzLmVsLCB7IGNvdW50OiB0aGlzLnNhdmVkUG9zIH0pXG5cbiAgICAgIGlmIChyYW5nZSkge1xuICAgICAgICByYW5nZS5jb2xsYXBzZShmYWxzZSlcbiAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYXNQYXJlbnQgKG5hbWUsIHNwYW5MZXZlbCkge1xuICAgIGNvbnN0IGVsID0gc3BhbkxldmVsXG4gICAgICA/IHRoaXMucGFyZW50XG4gICAgICA6IHRoaXMuYmxvY2tQYXJlbnRcblxuICAgIHJldHVybiBlbCAhPT0gbnVsbFxuICAgICAgPyBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgIDogZmFsc2VcbiAgfVxuXG4gIGhhc1BhcmVudHMgKGxpc3QsIHJlY3Vyc2l2ZSwgZWwgPSB0aGlzLnBhcmVudCkge1xuICAgIGlmIChlbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKGxpc3QuaW5jbHVkZXMoZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY3Vyc2l2ZSA9PT0gdHJ1ZVxuICAgICAgPyB0aGlzLmhhc1BhcmVudHMobGlzdCwgcmVjdXJzaXZlLCBlbC5wYXJlbnROb2RlKVxuICAgICAgOiBmYWxzZVxuICB9XG5cbiAgaXMgKGNtZCwgcGFyYW0pIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHN3aXRjaCAoY21kKSB7XG4gICAgICBjYXNlICdmb3JtYXRCbG9jayc6XG4gICAgICAgIHJldHVybiAocGFyYW0gPT09ICdESVYnICYmIHRoaXMucGFyZW50ID09PSB0aGlzLmVsKVxuICAgICAgICAgIHx8IHRoaXMuaGFzUGFyZW50KHBhcmFtLCBwYXJhbSA9PT0gJ1BSRScpXG4gICAgICBjYXNlICdsaW5rJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzUGFyZW50KCdBJywgdHJ1ZSlcbiAgICAgIGNhc2UgJ2ZvbnRTaXplJzpcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFZhbHVlKGNtZCkgPT09IHBhcmFtXG4gICAgICBjYXNlICdmb250TmFtZSc6XG4gICAgICAgIGNvbnN0IHJlcyA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFZhbHVlKGNtZClcbiAgICAgICAgcmV0dXJuIHJlcyA9PT0gYFwiJHsgcGFyYW0gfVwiYCB8fCByZXMgPT09IHBhcmFtXG4gICAgICBjYXNlICdmdWxsc2NyZWVuJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZVZtLmluRnVsbHNjcmVlbi52YWx1ZVxuICAgICAgY2FzZSAndmlld3NvdXJjZSc6XG4gICAgICAgIHJldHVybiB0aGlzLmVWbS5pc1ZpZXdpbmdTb3VyY2UudmFsdWVcbiAgICAgIGNhc2Ugdm9pZCAwOlxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnN0IHN0YXRlID0gZG9jdW1lbnQucXVlcnlDb21tYW5kU3RhdGUoY21kKVxuICAgICAgICByZXR1cm4gcGFyYW0gIT09IHZvaWQgMCA/IHN0YXRlID09PSBwYXJhbSA6IHN0YXRlXG4gICAgfVxuICB9XG5cbiAgZ2V0UGFyZW50QXR0cmlidXRlIChhdHRyaWIpIHtcbiAgICBpZiAodGhpcy5wYXJlbnQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXRBdHRyaWJ1dGUoYXR0cmliKVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjYW4gKG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PT0gJ291dGRlbnQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYXNQYXJlbnRzKFsgJ2Jsb2NrcXVvdGUnLCAnbGknIF0sIHRydWUpXG4gICAgfVxuXG4gICAgaWYgKG5hbWUgPT09ICdpbmRlbnQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYXNQYXJlbnRzKFsgJ2xpJyBdLCB0cnVlKVxuICAgIH1cblxuICAgIGlmIChuYW1lID09PSAnbGluaycpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbiAhPT0gbnVsbCB8fCB0aGlzLmlzKCdsaW5rJylcbiAgICB9XG4gIH1cblxuICBhcHBseSAoY21kLCBwYXJhbSwgZG9uZSA9IG5vb3ApIHtcbiAgICBpZiAoY21kID09PSAnZm9ybWF0QmxvY2snKSB7XG4gICAgICBpZiAoWyAnQkxPQ0tRVU9URScsICdIMScsICdIMicsICdIMycsICdINCcsICdINScsICdINicgXS5pbmNsdWRlcyhwYXJhbSkgJiYgdGhpcy5pcyhjbWQsIHBhcmFtKSkge1xuICAgICAgICBjbWQgPSAnb3V0ZGVudCdcbiAgICAgICAgcGFyYW0gPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbSA9PT0gJ1BSRScgJiYgdGhpcy5pcyhjbWQsICdQUkUnKSkge1xuICAgICAgICBwYXJhbSA9ICdQJ1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChjbWQgPT09ICdwcmludCcpIHtcbiAgICAgIGRvbmUoKVxuXG4gICAgICBjb25zdCB3aW4gPSB3aW5kb3cub3BlbigpXG5cbiAgICAgIHdpbi5kb2N1bWVudC53cml0ZShgXG4gICAgICAgIDwhZG9jdHlwZSBodG1sPlxuICAgICAgICA8aHRtbD5cbiAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5QcmludCAtICR7IGRvY3VtZW50LnRpdGxlIH08L3RpdGxlPlxuICAgICAgICAgIDwvaGVhZD5cbiAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgIDxkaXY+JHsgdGhpcy5lbC5pbm5lckhUTUwgfTwvZGl2PlxuICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgPC9odG1sPlxuICAgICAgYClcbiAgICAgIHdpbi5wcmludCgpXG4gICAgICB3aW4uY2xvc2UoKVxuXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZWxzZSBpZiAoY21kID09PSAnbGluaycpIHtcbiAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmdldFBhcmVudEF0dHJpYnV0ZSgnaHJlZicpXG5cbiAgICAgIGlmIChsaW5rID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0V29yZCh0aGlzLnNlbGVjdGlvbilcbiAgICAgICAgY29uc3QgdXJsID0gc2VsZWN0aW9uID8gc2VsZWN0aW9uLnRvU3RyaW5nKCkgOiAnJ1xuXG4gICAgICAgIGlmICghdXJsLmxlbmd0aCkge1xuICAgICAgICAgIGlmICghdGhpcy5yYW5nZSB8fCAhdGhpcy5yYW5nZS5jbG9uZUNvbnRlbnRzKCkucXVlcnlTZWxlY3RvcignaW1nJykpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZVZtLmVkaXRMaW5rVXJsLnZhbHVlID0gdXJsUmVnZXgudGVzdCh1cmwpID8gdXJsIDogJ2h0dHBzOi8vJ1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY3JlYXRlTGluaycsIGZhbHNlLCB0aGlzLmVWbS5lZGl0TGlua1VybC52YWx1ZSlcblxuICAgICAgICB0aGlzLnNhdmUoc2VsZWN0aW9uLmdldFJhbmdlQXQoMCkpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5lVm0uZWRpdExpbmtVcmwudmFsdWUgPSBsaW5rXG5cbiAgICAgICAgdGhpcy5yYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcy5wYXJlbnQpXG4gICAgICAgIHRoaXMuc2F2ZSgpXG4gICAgICB9XG5cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBlbHNlIGlmIChjbWQgPT09ICdmdWxsc2NyZWVuJykge1xuICAgICAgdGhpcy5lVm0udG9nZ2xlRnVsbHNjcmVlbigpXG4gICAgICBkb25lKClcblxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGVsc2UgaWYgKGNtZCA9PT0gJ3ZpZXdzb3VyY2UnKSB7XG4gICAgICB0aGlzLmVWbS5pc1ZpZXdpbmdTb3VyY2UudmFsdWUgPSB0aGlzLmVWbS5pc1ZpZXdpbmdTb3VyY2UudmFsdWUgPT09IGZhbHNlXG4gICAgICB0aGlzLmVWbS5zZXRDb250ZW50KHRoaXMuZVZtLnByb3BzLm1vZGVsVmFsdWUpXG4gICAgICBkb25lKClcblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoY21kLCBmYWxzZSwgcGFyYW0pXG5cbiAgICBkb25lKClcbiAgfVxuXG4gIHNlbGVjdFdvcmQgKHNlbCkge1xuICAgIGlmIChzZWwgPT09IG51bGwgfHwgc2VsLmlzQ29sbGFwc2VkICE9PSB0cnVlIHx8IC8qIElFIDExICovIHNlbC5tb2RpZnkgPT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHNlbFxuICAgIH1cblxuICAgIC8vIERldGVjdCBpZiBzZWxlY3Rpb24gaXMgYmFja3dhcmRzXG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXG4gICAgcmFuZ2Uuc2V0U3RhcnQoc2VsLmFuY2hvck5vZGUsIHNlbC5hbmNob3JPZmZzZXQpXG4gICAgcmFuZ2Uuc2V0RW5kKHNlbC5mb2N1c05vZGUsIHNlbC5mb2N1c09mZnNldClcbiAgICBjb25zdCBkaXJlY3Rpb24gPSByYW5nZS5jb2xsYXBzZWQgPyBbICdiYWNrd2FyZCcsICdmb3J3YXJkJyBdIDogWyAnZm9yd2FyZCcsICdiYWNrd2FyZCcgXVxuICAgIHJhbmdlLmRldGFjaCgpXG5cbiAgICAvLyBtb2RpZnkoKSB3b3JrcyBvbiB0aGUgZm9jdXMgb2YgdGhlIHNlbGVjdGlvblxuICAgIGNvbnN0XG4gICAgICBlbmROb2RlID0gc2VsLmZvY3VzTm9kZSxcbiAgICAgIGVuZE9mZnNldCA9IHNlbC5mb2N1c09mZnNldFxuICAgIHNlbC5jb2xsYXBzZShzZWwuYW5jaG9yTm9kZSwgc2VsLmFuY2hvck9mZnNldClcbiAgICBzZWwubW9kaWZ5KCdtb3ZlJywgZGlyZWN0aW9uWyAwIF0sICdjaGFyYWN0ZXInKVxuICAgIHNlbC5tb2RpZnkoJ21vdmUnLCBkaXJlY3Rpb25bIDEgXSwgJ3dvcmQnKVxuICAgIHNlbC5leHRlbmQoZW5kTm9kZSwgZW5kT2Zmc2V0KVxuICAgIHNlbC5tb2RpZnkoJ2V4dGVuZCcsIGRpcmVjdGlvblsgMSBdLCAnY2hhcmFjdGVyJylcbiAgICBzZWwubW9kaWZ5KCdleHRlbmQnLCBkaXJlY3Rpb25bIDAgXSwgJ3dvcmQnKVxuXG4gICAgcmV0dXJuIHNlbFxuICB9XG59XG4iLCJpbXBvcnQgeyBoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUJ0biBmcm9tICcuLi9idG4vUUJ0bi5qcydcbmltcG9ydCBRQnRuRHJvcGRvd24gZnJvbSAnLi4vYnRuLWRyb3Bkb3duL1FCdG5Ecm9wZG93bi5qcydcbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuaW1wb3J0IFFUb29sdGlwIGZyb20gJy4uL3Rvb2x0aXAvUVRvb2x0aXAuanMnXG5pbXBvcnQgUUl0ZW0gZnJvbSAnLi4vaXRlbS9RSXRlbS5qcydcbmltcG9ydCBRSXRlbVNlY3Rpb24gZnJvbSAnLi4vaXRlbS9RSXRlbVNlY3Rpb24uanMnXG5cbmltcG9ydCB7IHByZXZlbnQsIHN0b3AgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBzaG91bGRJZ25vcmVLZXkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2tleS1jb21wb3NpdGlvbi5qcydcblxuZnVuY3Rpb24gcnVuIChlLCBidG4sIGVWbSkge1xuICBpZiAoYnRuLmhhbmRsZXIpIHtcbiAgICBidG4uaGFuZGxlcihlLCBlVm0sIGVWbS5jYXJldClcbiAgfVxuICBlbHNlIHtcbiAgICBlVm0ucnVuQ21kKGJ0bi5jbWQsIGJ0bi5wYXJhbSlcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRHcm91cCAoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6ICdxLWVkaXRvcl9fdG9vbGJhci1ncm91cCcgfSwgY2hpbGRyZW4pXG59XG5cbmZ1bmN0aW9uIGdldEJ0biAoZVZtLCBidG4sIGNsaWNrSGFuZGxlciwgYWN0aXZlID0gZmFsc2UpIHtcbiAgY29uc3RcbiAgICB0b2dnbGVkID0gYWN0aXZlIHx8IChidG4udHlwZSA9PT0gJ3RvZ2dsZSdcbiAgICAgID8gKGJ0bi50b2dnbGVkID8gYnRuLnRvZ2dsZWQoZVZtKSA6IGJ0bi5jbWQgJiYgZVZtLmNhcmV0LmlzKGJ0bi5jbWQsIGJ0bi5wYXJhbSkpXG4gICAgICA6IGZhbHNlKSxcbiAgICBjaGlsZCA9IFtdXG5cbiAgaWYgKGJ0bi50aXAgJiYgZVZtLiRxLnBsYXRmb3JtLmlzLmRlc2t0b3ApIHtcbiAgICBjb25zdCBLZXkgPSBidG4ua2V5XG4gICAgICA/IGgoJ2RpdicsIFtcbiAgICAgICAgaCgnc21hbGwnLCBgKENUUkwgKyAkeyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ0bi5rZXkpIH0pYClcbiAgICAgIF0pXG4gICAgICA6IG51bGxcbiAgICBjaGlsZC5wdXNoKFxuICAgICAgaChRVG9vbHRpcCwgeyBkZWxheTogMTAwMCB9LCAoKSA9PiBbXG4gICAgICAgIGgoJ2RpdicsIHsgaW5uZXJIVE1MOiBidG4udGlwIH0pLFxuICAgICAgICBLZXlcbiAgICAgIF0pXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGgoUUJ0biwge1xuICAgIC4uLmVWbS5idXR0b25Qcm9wcy52YWx1ZSxcbiAgICBpY29uOiBidG4uaWNvbiAhPT0gbnVsbCA/IGJ0bi5pY29uIDogdm9pZCAwLFxuICAgIGNvbG9yOiB0b2dnbGVkID8gYnRuLnRvZ2dsZUNvbG9yIHx8IGVWbS5wcm9wcy50b29sYmFyVG9nZ2xlQ29sb3IgOiBidG4uY29sb3IgfHwgZVZtLnByb3BzLnRvb2xiYXJDb2xvcixcbiAgICB0ZXh0Q29sb3I6IHRvZ2dsZWQgJiYgIWVWbS5wcm9wcy50b29sYmFyUHVzaCA/IG51bGwgOiBidG4udGV4dENvbG9yIHx8IGVWbS5wcm9wcy50b29sYmFyVGV4dENvbG9yLFxuICAgIGxhYmVsOiBidG4ubGFiZWwsXG4gICAgZGlzYWJsZTogYnRuLmRpc2FibGUgPyAodHlwZW9mIGJ0bi5kaXNhYmxlID09PSAnZnVuY3Rpb24nID8gYnRuLmRpc2FibGUoZVZtKSA6IHRydWUpIDogZmFsc2UsXG4gICAgc2l6ZTogJ3NtJyxcbiAgICBvbkNsaWNrIChlKSB7XG4gICAgICBjbGlja0hhbmRsZXIgJiYgY2xpY2tIYW5kbGVyKClcbiAgICAgIHJ1bihlLCBidG4sIGVWbSlcbiAgICB9XG4gIH0sICgpID0+IGNoaWxkKVxufVxuXG5mdW5jdGlvbiBnZXREcm9wZG93biAoZVZtLCBidG4pIHtcbiAgY29uc3Qgb25seUljb25zID0gYnRuLmxpc3QgPT09ICdvbmx5LWljb25zJ1xuICBsZXRcbiAgICBsYWJlbCA9IGJ0bi5sYWJlbCxcbiAgICBpY29uID0gYnRuLmljb24gIT09IG51bGwgPyBidG4uaWNvbiA6IHZvaWQgMCxcbiAgICBjb250ZW50Q2xhc3MsXG4gICAgSXRlbXNcblxuICBmdW5jdGlvbiBjbG9zZURyb3Bkb3duICgpIHtcbiAgICBEcm9wZG93bi5jb21wb25lbnQucHJveHkuaGlkZSgpXG4gIH1cblxuICBpZiAob25seUljb25zKSB7XG4gICAgSXRlbXMgPSBidG4ub3B0aW9ucy5tYXAoYnRuID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZSA9IGJ0bi50eXBlID09PSB2b2lkIDBcbiAgICAgICAgPyBlVm0uY2FyZXQuaXMoYnRuLmNtZCwgYnRuLnBhcmFtKVxuICAgICAgICA6IGZhbHNlXG5cbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgbGFiZWwgPSBidG4udGlwXG4gICAgICAgIGljb24gPSBidG4uaWNvbiAhPT0gbnVsbCA/IGJ0bi5pY29uIDogdm9pZCAwXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0QnRuKGVWbSwgYnRuLCBjbG9zZURyb3Bkb3duLCBhY3RpdmUpXG4gICAgfSlcbiAgICBjb250ZW50Q2xhc3MgPSBlVm0udG9vbGJhckJhY2tncm91bmRDbGFzcy52YWx1ZVxuICAgIEl0ZW1zID0gW1xuICAgICAgZ2V0R3JvdXAoSXRlbXMpXG4gICAgXVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gZVZtLnByb3BzLnRvb2xiYXJUb2dnbGVDb2xvciAhPT0gdm9pZCAwXG4gICAgICA/IGB0ZXh0LSR7IGVWbS5wcm9wcy50b29sYmFyVG9nZ2xlQ29sb3IgfWBcbiAgICAgIDogbnVsbFxuICAgIGNvbnN0IGluYWN0aXZlQ2xhc3MgPSBlVm0ucHJvcHMudG9vbGJhclRleHRDb2xvciAhPT0gdm9pZCAwXG4gICAgICA/IGB0ZXh0LSR7IGVWbS5wcm9wcy50b29sYmFyVGV4dENvbG9yIH1gXG4gICAgICA6IG51bGxcblxuICAgIGNvbnN0IG5vSWNvbnMgPSBidG4ubGlzdCA9PT0gJ25vLWljb25zJ1xuXG4gICAgSXRlbXMgPSBidG4ub3B0aW9ucy5tYXAoYnRuID0+IHtcbiAgICAgIGNvbnN0IGRpc2FibGUgPSBidG4uZGlzYWJsZSA/IGJ0bi5kaXNhYmxlKGVWbSkgOiBmYWxzZVxuICAgICAgY29uc3QgYWN0aXZlID0gYnRuLnR5cGUgPT09IHZvaWQgMFxuICAgICAgICA/IGVWbS5jYXJldC5pcyhidG4uY21kLCBidG4ucGFyYW0pXG4gICAgICAgIDogZmFsc2VcblxuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICBsYWJlbCA9IGJ0bi50aXBcbiAgICAgICAgaWNvbiA9IGJ0bi5pY29uICE9PSBudWxsID8gYnRuLmljb24gOiB2b2lkIDBcbiAgICAgIH1cblxuICAgICAgY29uc3QgaHRtbFRpcCA9IGJ0bi5odG1sVGlwXG5cbiAgICAgIHJldHVybiBoKFFJdGVtLCB7XG4gICAgICAgIGFjdGl2ZSxcbiAgICAgICAgYWN0aXZlQ2xhc3MsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgZGlzYWJsZSxcbiAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgIG9uQ2xpY2sgKGUpIHtcbiAgICAgICAgICBjbG9zZURyb3Bkb3duKClcbiAgICAgICAgICBlVm0uY29udGVudFJlZi52YWx1ZSAhPT0gbnVsbCAmJiBlVm0uY29udGVudFJlZi52YWx1ZS5mb2N1cygpXG4gICAgICAgICAgZVZtLmNhcmV0LnJlc3RvcmUoKVxuICAgICAgICAgIHJ1bihlLCBidG4sIGVWbSlcbiAgICAgICAgfVxuICAgICAgfSwgKCkgPT4gW1xuICAgICAgICBub0ljb25zID09PSB0cnVlXG4gICAgICAgICAgPyBudWxsXG4gICAgICAgICAgOiBoKFxuICAgICAgICAgICAgUUl0ZW1TZWN0aW9uLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzczogYWN0aXZlID8gYWN0aXZlQ2xhc3MgOiBpbmFjdGl2ZUNsYXNzLFxuICAgICAgICAgICAgICBzaWRlOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4gaChRSWNvbiwgeyBuYW1lOiBidG4uaWNvbiAhPT0gbnVsbCA/IGJ0bi5pY29uIDogdm9pZCAwIH0pXG4gICAgICAgICAgKSxcblxuICAgICAgICBoKFxuICAgICAgICAgIFFJdGVtU2VjdGlvbixcbiAgICAgICAgICBodG1sVGlwXG4gICAgICAgICAgICA/ICgpID0+IGgoJ2RpdicsIHsgY2xhc3M6ICd0ZXh0LW5vLXdyYXAnLCBpbm5lckhUTUw6IGJ0bi5odG1sVGlwIH0pXG4gICAgICAgICAgICA6IChidG4udGlwID8gKCkgPT4gaCgnZGl2JywgeyBjbGFzczogJ3RleHQtbm8td3JhcCcgfSwgYnRuLnRpcCkgOiB2b2lkIDApXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgfSlcbiAgICBjb250ZW50Q2xhc3MgPSBbIGVWbS50b29sYmFyQmFja2dyb3VuZENsYXNzLnZhbHVlLCBpbmFjdGl2ZUNsYXNzIF1cbiAgfVxuXG4gIGNvbnN0IGhpZ2hsaWdodCA9IGJ0bi5oaWdobGlnaHQgJiYgbGFiZWwgIT09IGJ0bi5sYWJlbFxuICBjb25zdCBEcm9wZG93biA9IGgoUUJ0bkRyb3Bkb3duLCB7XG4gICAgLi4uZVZtLmJ1dHRvblByb3BzLnZhbHVlLFxuICAgIG5vQ2FwczogdHJ1ZSxcbiAgICBub1dyYXA6IHRydWUsXG4gICAgY29sb3I6IGhpZ2hsaWdodCA/IGVWbS5wcm9wcy50b29sYmFyVG9nZ2xlQ29sb3IgOiBlVm0ucHJvcHMudG9vbGJhckNvbG9yLFxuICAgIHRleHRDb2xvcjogaGlnaGxpZ2h0ICYmICFlVm0ucHJvcHMudG9vbGJhclB1c2ggPyBudWxsIDogZVZtLnByb3BzLnRvb2xiYXJUZXh0Q29sb3IsXG4gICAgbGFiZWw6IGJ0bi5maXhlZExhYmVsID8gYnRuLmxhYmVsIDogbGFiZWwsXG4gICAgaWNvbjogYnRuLmZpeGVkSWNvbiA/IChidG4uaWNvbiAhPT0gbnVsbCA/IGJ0bi5pY29uIDogdm9pZCAwKSA6IGljb24sXG4gICAgY29udGVudENsYXNzLFxuICAgIG9uU2hvdzogZXZ0ID0+IGVWbS5lbWl0KCdkcm9wZG93blNob3cnLCBldnQpLFxuICAgIG9uSGlkZTogZXZ0ID0+IGVWbS5lbWl0KCdkcm9wZG93bkhpZGUnLCBldnQpLFxuICAgIG9uQmVmb3JlU2hvdzogZXZ0ID0+IGVWbS5lbWl0KCdkcm9wZG93bkJlZm9yZVNob3cnLCBldnQpLFxuICAgIG9uQmVmb3JlSGlkZTogZXZ0ID0+IGVWbS5lbWl0KCdkcm9wZG93bkJlZm9yZUhpZGUnLCBldnQpXG4gIH0sICgpID0+IEl0ZW1zKVxuXG4gIHJldHVybiBEcm9wZG93blxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9vbGJhciAoZVZtKSB7XG4gIGlmIChlVm0uY2FyZXQpIHtcbiAgICByZXR1cm4gZVZtLmJ1dHRvbnMudmFsdWVcbiAgICAgIC5maWx0ZXIoZiA9PiB7XG4gICAgICAgIHJldHVybiAhZVZtLmlzVmlld2luZ1NvdXJjZS52YWx1ZSB8fCBmLmZpbmQoZmIgPT4gZmIuY21kID09PSAndmlld3NvdXJjZScpXG4gICAgICB9KVxuICAgICAgLm1hcChncm91cCA9PiBnZXRHcm91cChcbiAgICAgICAgZ3JvdXAubWFwKGJ0biA9PiB7XG4gICAgICAgICAgaWYgKGVWbS5pc1ZpZXdpbmdTb3VyY2UudmFsdWUgJiYgYnRuLmNtZCAhPT0gJ3ZpZXdzb3VyY2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYnRuLnR5cGUgPT09ICdzbG90Jykge1xuICAgICAgICAgICAgcmV0dXJuIGhTbG90KGVWbS5zbG90c1sgYnRuLnNsb3QgXSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYnRuLnR5cGUgPT09ICdkcm9wZG93bicpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXREcm9wZG93bihlVm0sIGJ0bilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZ2V0QnRuKGVWbSwgYnRuKVxuICAgICAgICB9KVxuICAgICAgKSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9udHMgKGRlZmF1bHRGb250LCBkZWZhdWx0Rm9udExhYmVsLCBkZWZhdWx0Rm9udEljb24sIGZvbnRzID0ge30pIHtcbiAgY29uc3QgYWxpYXNlcyA9IE9iamVjdC5rZXlzKGZvbnRzKVxuICBpZiAoYWxpYXNlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGNvbnN0IGRlZiA9IHtcbiAgICBkZWZhdWx0X2ZvbnQ6IHtcbiAgICAgIGNtZDogJ2ZvbnROYW1lJyxcbiAgICAgIHBhcmFtOiBkZWZhdWx0Rm9udCxcbiAgICAgIGljb246IGRlZmF1bHRGb250SWNvbixcbiAgICAgIHRpcDogZGVmYXVsdEZvbnRMYWJlbFxuICAgIH1cbiAgfVxuXG4gIGFsaWFzZXMuZm9yRWFjaChhbGlhcyA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGZvbnRzWyBhbGlhcyBdXG4gICAgZGVmWyBhbGlhcyBdID0ge1xuICAgICAgY21kOiAnZm9udE5hbWUnLFxuICAgICAgcGFyYW06IG5hbWUsXG4gICAgICBpY29uOiBkZWZhdWx0Rm9udEljb24sXG4gICAgICB0aXA6IG5hbWUsXG4gICAgICBodG1sVGlwOiBgPGZvbnQgZmFjZT1cIiR7IG5hbWUgfVwiPiR7IG5hbWUgfTwvZm9udD5gXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBkZWZcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExpbmtFZGl0b3IgKGVWbSkge1xuICBpZiAoZVZtLmNhcmV0KSB7XG4gICAgY29uc3QgY29sb3IgPSBlVm0ucHJvcHMudG9vbGJhckNvbG9yIHx8IGVWbS5wcm9wcy50b29sYmFyVGV4dENvbG9yXG4gICAgbGV0IGxpbmsgPSBlVm0uZWRpdExpbmtVcmwudmFsdWVcbiAgICBjb25zdCB1cGRhdGVMaW5rID0gKCkgPT4ge1xuICAgICAgZVZtLmNhcmV0LnJlc3RvcmUoKVxuXG4gICAgICBpZiAobGluayAhPT0gZVZtLmVkaXRMaW5rVXJsLnZhbHVlKSB7XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjcmVhdGVMaW5rJywgZmFsc2UsIGxpbmsgPT09ICcnID8gJyAnIDogbGluaylcbiAgICAgIH1cblxuICAgICAgZVZtLmVkaXRMaW5rVXJsLnZhbHVlID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICBoKCdkaXYnLCB7IGNsYXNzOiBgcS1teC14cyB0ZXh0LSR7IGNvbG9yIH1gIH0sIGAkeyBlVm0uJHEubGFuZy5lZGl0b3IudXJsIH06IGApLFxuICAgICAgaCgnaW5wdXQnLCB7XG4gICAgICAgIGtleTogJ3FlZHRfYnRtX2lucHV0JyxcbiAgICAgICAgY2xhc3M6ICdjb2wgcS1lZGl0b3JfX2xpbmstaW5wdXQnLFxuICAgICAgICB2YWx1ZTogbGluayxcbiAgICAgICAgb25JbnB1dDogZXZ0ID0+IHtcbiAgICAgICAgICBzdG9wKGV2dClcbiAgICAgICAgICBsaW5rID0gZXZ0LnRhcmdldC52YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBvbktleWRvd246IGV2dCA9PiB7XG4gICAgICAgICAgaWYgKHNob3VsZElnbm9yZUtleShldnQpID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzd2l0Y2ggKGV2dC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDEzOiAvLyBFTlRFUiBrZXlcbiAgICAgICAgICAgICAgcHJldmVudChldnQpXG4gICAgICAgICAgICAgIHJldHVybiB1cGRhdGVMaW5rKClcbiAgICAgICAgICAgIGNhc2UgMjc6IC8vIEVTQ0FQRSBrZXlcbiAgICAgICAgICAgICAgcHJldmVudChldnQpXG4gICAgICAgICAgICAgIGVWbS5jYXJldC5yZXN0b3JlKClcbiAgICAgICAgICAgICAgaWYgKCFlVm0uZWRpdExpbmtVcmwudmFsdWUgfHwgZVZtLmVkaXRMaW5rVXJsLnZhbHVlID09PSAnaHR0cHM6Ly8nKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3VubGluaycpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZVZtLmVkaXRMaW5rVXJsLnZhbHVlID0gbnVsbFxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBnZXRHcm91cChbXG4gICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgIGtleTogJ3FlZHRfYnRtX3JlbScsXG4gICAgICAgICAgdGFiaW5kZXg6IC0xLFxuICAgICAgICAgIC4uLmVWbS5idXR0b25Qcm9wcy52YWx1ZSxcbiAgICAgICAgICBsYWJlbDogZVZtLiRxLmxhbmcubGFiZWwucmVtb3ZlLFxuICAgICAgICAgIG5vQ2FwczogdHJ1ZSxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICBlVm0uY2FyZXQucmVzdG9yZSgpXG4gICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgndW5saW5rJylcbiAgICAgICAgICAgIGVWbS5lZGl0TGlua1VybC52YWx1ZSA9IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICBrZXk6ICdxZWR0X2J0bV91cGQnLFxuICAgICAgICAgIC4uLmVWbS5idXR0b25Qcm9wcy52YWx1ZSxcbiAgICAgICAgICBsYWJlbDogZVZtLiRxLmxhbmcubGFiZWwudXBkYXRlLFxuICAgICAgICAgIG5vQ2FwczogdHJ1ZSxcbiAgICAgICAgICBvbkNsaWNrOiB1cGRhdGVMaW5rXG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIF1cbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVmLCB3YXRjaCwgb25CZWZvcmVNb3VudCwgb25Nb3VudGVkLCBvbkJlZm9yZVVubW91bnQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IEhpc3RvcnkgZnJvbSAnLi4vLi4vaGlzdG9yeS5qcydcbmltcG9ydCB7IHZtSGFzUm91dGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS92bS5qcydcblxubGV0IGNvdW50ZXIgPSAwXG5cbmV4cG9ydCBjb25zdCB1c2VGdWxsc2NyZWVuUHJvcHMgPSB7XG4gIGZ1bGxzY3JlZW46IEJvb2xlYW4sXG4gIG5vUm91dGVGdWxsc2NyZWVuRXhpdDogQm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgdXNlRnVsbHNjcmVlbkVtaXRzID0gWyAndXBkYXRlOmZ1bGxzY3JlZW4nLCAnZnVsbHNjcmVlbicgXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgY29uc3QgeyBwcm9wcywgZW1pdCwgcHJveHkgfSA9IHZtXG5cbiAgbGV0IGhpc3RvcnlFbnRyeSwgZnVsbHNjcmVlbkZpbGxlck5vZGUsIGNvbnRhaW5lclxuICBjb25zdCBpbkZ1bGxzY3JlZW4gPSByZWYoZmFsc2UpXG5cbiAgdm1IYXNSb3V0ZXIodm0pID09PSB0cnVlICYmIHdhdGNoKCgpID0+IHByb3h5LiRyb3V0ZS5mdWxsUGF0aCwgKCkgPT4ge1xuICAgIHByb3BzLm5vUm91dGVGdWxsc2NyZWVuRXhpdCAhPT0gdHJ1ZSAmJiBleGl0RnVsbHNjcmVlbigpXG4gIH0pXG5cbiAgd2F0Y2goKCkgPT4gcHJvcHMuZnVsbHNjcmVlbiwgdiA9PiB7XG4gICAgaWYgKGluRnVsbHNjcmVlbi52YWx1ZSAhPT0gdikge1xuICAgICAgdG9nZ2xlRnVsbHNjcmVlbigpXG4gICAgfVxuICB9KVxuXG4gIHdhdGNoKGluRnVsbHNjcmVlbiwgdiA9PiB7XG4gICAgZW1pdCgndXBkYXRlOmZ1bGxzY3JlZW4nLCB2KVxuICAgIGVtaXQoJ2Z1bGxzY3JlZW4nLCB2KVxuICB9KVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUZ1bGxzY3JlZW4gKCkge1xuICAgIGlmIChpbkZ1bGxzY3JlZW4udmFsdWUgPT09IHRydWUpIHtcbiAgICAgIGV4aXRGdWxsc2NyZWVuKClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXRGdWxsc2NyZWVuKClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRGdWxsc2NyZWVuICgpIHtcbiAgICBpZiAoaW5GdWxsc2NyZWVuLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpbkZ1bGxzY3JlZW4udmFsdWUgPSB0cnVlXG4gICAgY29udGFpbmVyID0gcHJveHkuJGVsLnBhcmVudE5vZGVcbiAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKGZ1bGxzY3JlZW5GaWxsZXJOb2RlLCBwcm94eS4kZWwpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm94eS4kZWwpXG5cbiAgICBjb3VudGVyKytcbiAgICBpZiAoY291bnRlciA9PT0gMSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdxLWJvZHktLWZ1bGxzY3JlZW4tbWl4aW4nKVxuICAgIH1cblxuICAgIGhpc3RvcnlFbnRyeSA9IHtcbiAgICAgIGhhbmRsZXI6IGV4aXRGdWxsc2NyZWVuXG4gICAgfVxuICAgIEhpc3RvcnkuYWRkKGhpc3RvcnlFbnRyeSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4aXRGdWxsc2NyZWVuICgpIHtcbiAgICBpZiAoaW5GdWxsc2NyZWVuLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaGlzdG9yeUVudHJ5ICE9PSB2b2lkIDApIHtcbiAgICAgIEhpc3RvcnkucmVtb3ZlKGhpc3RvcnlFbnRyeSlcbiAgICAgIGhpc3RvcnlFbnRyeSA9IHZvaWQgMFxuICAgIH1cblxuICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQocHJveHkuJGVsLCBmdWxsc2NyZWVuRmlsbGVyTm9kZSlcbiAgICBpbkZ1bGxzY3JlZW4udmFsdWUgPSBmYWxzZVxuXG4gICAgY291bnRlciA9IE1hdGgubWF4KDAsIGNvdW50ZXIgLSAxKVxuXG4gICAgaWYgKGNvdW50ZXIgPT09IDApIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgncS1ib2R5LS1mdWxsc2NyZWVuLW1peGluJylcblxuICAgICAgaWYgKHByb3h5LiRlbC5zY3JvbGxJbnRvVmlldyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBwcm94eS4kZWwuc2Nyb2xsSW50b1ZpZXcoKSB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQmVmb3JlTW91bnQoKCkgPT4ge1xuICAgIGZ1bGxzY3JlZW5GaWxsZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gIH0pXG5cbiAgb25Nb3VudGVkKCgpID0+IHtcbiAgICBwcm9wcy5mdWxsc2NyZWVuID09PSB0cnVlICYmIHNldEZ1bGxzY3JlZW4oKVxuICB9KVxuXG4gIG9uQmVmb3JlVW5tb3VudChleGl0RnVsbHNjcmVlbilcblxuICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgIHRvZ2dsZUZ1bGxzY3JlZW4sXG4gICAgc2V0RnVsbHNjcmVlbixcbiAgICBleGl0RnVsbHNjcmVlblxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgaW5GdWxsc2NyZWVuLFxuICAgIHRvZ2dsZUZ1bGxzY3JlZW5cbiAgfVxufVxuIiwiY29uc3RcbiAgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuICBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuICBub3RQbGFpbk9iamVjdCA9IG5ldyBTZXQoXG4gICAgWyAnQm9vbGVhbicsICdOdW1iZXInLCAnU3RyaW5nJywgJ0Z1bmN0aW9uJywgJ0FycmF5JywgJ0RhdGUnLCAnUmVnRXhwJyBdXG4gICAgICAubWFwKG5hbWUgPT4gJ1tvYmplY3QgJyArIG5hbWUgKyAnXScpXG4gIClcblxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gIGlmIChvYmogIT09IE9iamVjdChvYmopIHx8IG5vdFBsYWluT2JqZWN0Lmhhcyh0b1N0cmluZy5jYWxsKG9iaikpID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAoXG4gICAgb2JqLmNvbnN0cnVjdG9yXG4gICAgJiYgaGFzT3duLmNhbGwob2JqLCAnY29uc3RydWN0b3InKSA9PT0gZmFsc2VcbiAgICAmJiBoYXNPd24uY2FsbChvYmouY29uc3RydWN0b3IucHJvdG90eXBlLCAnaXNQcm90b3R5cGVPZicpID09PSBmYWxzZVxuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGxldCBrZXlcbiAgZm9yIChrZXkgaW4gb2JqKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgcmV0dXJuIGtleSA9PT0gdm9pZCAwIHx8IGhhc093bi5jYWxsKG9iaiwga2V5KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHRlbmQgKCkge1xuICBsZXRcbiAgICBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSxcbiAgICB0YXJnZXQgPSBhcmd1bWVudHNbIDAgXSB8fCB7fSxcbiAgICBpID0gMSxcbiAgICBkZWVwID0gZmFsc2VcbiAgY29uc3QgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxuXG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnYm9vbGVhbicpIHtcbiAgICBkZWVwID0gdGFyZ2V0XG4gICAgdGFyZ2V0ID0gYXJndW1lbnRzWyAxIF0gfHwge31cbiAgICBpID0gMlxuICB9XG5cbiAgaWYgKE9iamVjdCh0YXJnZXQpICE9PSB0YXJnZXQgJiYgdHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRhcmdldCA9IHt9XG4gIH1cblxuICBpZiAobGVuZ3RoID09PSBpKSB7XG4gICAgdGFyZ2V0ID0gdGhpc1xuICAgIGktLVxuICB9XG5cbiAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICgob3B0aW9ucyA9IGFyZ3VtZW50c1sgaSBdKSAhPT0gbnVsbCkge1xuICAgICAgZm9yIChuYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgICAgc3JjID0gdGFyZ2V0WyBuYW1lIF1cbiAgICAgICAgY29weSA9IG9wdGlvbnNbIG5hbWUgXVxuXG4gICAgICAgIGlmICh0YXJnZXQgPT09IGNvcHkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGRlZXAgPT09IHRydWVcbiAgICAgICAgICAmJiBjb3B5XG4gICAgICAgICAgJiYgKChjb3B5SXNBcnJheSA9IEFycmF5LmlzQXJyYXkoY29weSkpIHx8IGlzUGxhaW5PYmplY3QoY29weSkgPT09IHRydWUpXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChjb3B5SXNBcnJheSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2xvbmUgPSBBcnJheS5pc0FycmF5KHNyYykgPT09IHRydWUgPyBzcmMgOiBbXVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsb25lID0gaXNQbGFpbk9iamVjdChzcmMpID09PSB0cnVlID8gc3JjIDoge31cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0YXJnZXRbIG5hbWUgXSA9IGV4dGVuZChkZWVwLCBjbG9uZSwgY29weSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb3B5ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICB0YXJnZXRbIG5hbWUgXSA9IGNvcHlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgbmV4dFRpY2ssIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IENhcmV0IGZyb20gJy4vZWRpdG9yLWNhcmV0LmpzJ1xuaW1wb3J0IHsgZ2V0VG9vbGJhciwgZ2V0Rm9udHMsIGdldExpbmtFZGl0b3IgfSBmcm9tICcuL2VkaXRvci11dGlscy5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB1c2VGdWxsc2NyZWVuLCB7IHVzZUZ1bGxzY3JlZW5Qcm9wcywgdXNlRnVsbHNjcmVlbkVtaXRzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZnVsbHNjcmVlbi5qcydcbmltcG9ydCB1c2VTcGxpdEF0dHJzIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXNwbGl0LWF0dHJzLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgZXh0ZW5kIGZyb20gJy4uLy4uL3V0aWxzL2V4dGVuZC5qcydcbmltcG9ydCB7IHNob3VsZElnbm9yZUtleSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUva2V5LWNvbXBvc2l0aW9uLmpzJ1xuaW1wb3J0IHsgYWRkRm9jdXNGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvZm9jdXMtbWFuYWdlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FFZGl0b3InLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuICAgIC4uLnVzZUZ1bGxzY3JlZW5Qcm9wcyxcblxuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICByZWFkb25seTogQm9vbGVhbixcbiAgICBkaXNhYmxlOiBCb29sZWFuLFxuICAgIG1pbkhlaWdodDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJzEwcmVtJ1xuICAgIH0sXG4gICAgbWF4SGVpZ2h0OiBTdHJpbmcsXG4gICAgaGVpZ2h0OiBTdHJpbmcsXG4gICAgZGVmaW5pdGlvbnM6IE9iamVjdCxcbiAgICBmb250czogT2JqZWN0LFxuICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG5cbiAgICB0b29sYmFyOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiB2Lmxlbmd0aCA9PT0gMCB8fCB2LmV2ZXJ5KGdyb3VwID0+IGdyb3VwLmxlbmd0aCksXG4gICAgICBkZWZhdWx0ICgpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBbICdsZWZ0JywgJ2NlbnRlcicsICdyaWdodCcsICdqdXN0aWZ5JyBdLFxuICAgICAgICAgIFsgJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnIF0sXG4gICAgICAgICAgWyAndW5kbycsICdyZWRvJyBdXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRvb2xiYXJDb2xvcjogU3RyaW5nLFxuICAgIHRvb2xiYXJCZzogU3RyaW5nLFxuICAgIHRvb2xiYXJUZXh0Q29sb3I6IFN0cmluZyxcbiAgICB0b29sYmFyVG9nZ2xlQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdwcmltYXJ5J1xuICAgIH0sXG4gICAgdG9vbGJhck91dGxpbmU6IEJvb2xlYW4sXG4gICAgdG9vbGJhclB1c2g6IEJvb2xlYW4sXG4gICAgdG9vbGJhclJvdW5kZWQ6IEJvb2xlYW4sXG5cbiAgICBwYXJhZ3JhcGhUYWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBbICdkaXYnLCAncCcgXS5pbmNsdWRlcyh2KSxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnXG4gICAgfSxcblxuICAgIGNvbnRlbnRTdHlsZTogT2JqZWN0LFxuICAgIGNvbnRlbnRDbGFzczogWyBPYmplY3QsIEFycmF5LCBTdHJpbmcgXSxcblxuICAgIHNxdWFyZTogQm9vbGVhbixcbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIGRlbnNlOiBCb29sZWFuXG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAuLi51c2VGdWxsc2NyZWVuRW1pdHMsXG4gICAgJ3VwZGF0ZTptb2RlbFZhbHVlJyxcbiAgICAna2V5ZG93bicsICdjbGljaycsICdtb3VzZXVwJywgJ2tleXVwJywgJ3RvdWNoZW5kJyxcbiAgICAnZm9jdXMnLCAnYmx1cicsXG4gICAgJ2Ryb3Bkb3duU2hvdycsXG4gICAgJ2Ryb3Bkb3duSGlkZScsXG4gICAgJ2Ryb3Bkb3duQmVmb3JlU2hvdycsXG4gICAgJ2Ryb3Bkb3duQmVmb3JlSGlkZScsXG4gICAgJ2xpbmtTaG93JyxcbiAgICAnbGlua0hpZGUnXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0LCBhdHRycyB9KSB7XG4gICAgY29uc3QgeyBwcm94eSwgdm5vZGUgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyAkcSB9ID0gcHJveHlcblxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuICAgIGNvbnN0IHsgaW5GdWxsc2NyZWVuLCB0b2dnbGVGdWxsc2NyZWVuIH0gPSB1c2VGdWxsc2NyZWVuKClcbiAgICBjb25zdCBzcGxpdEF0dHJzID0gdXNlU3BsaXRBdHRycyhhdHRycywgdm5vZGUpXG5cbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgY29udGVudFJlZiA9IHJlZihudWxsKVxuXG4gICAgY29uc3QgZWRpdExpbmtVcmwgPSByZWYobnVsbClcbiAgICBjb25zdCBpc1ZpZXdpbmdTb3VyY2UgPSByZWYoZmFsc2UpXG5cbiAgICBjb25zdCBlZGl0YWJsZSA9IGNvbXB1dGVkKCgpID0+ICFwcm9wcy5yZWFkb25seSAmJiAhcHJvcHMuZGlzYWJsZSlcblxuICAgIGxldCBkZWZhdWx0Rm9udCwgb2Zmc2V0Qm90dG9tXG4gICAgbGV0IGxhc3RFbWl0ID0gcHJvcHMubW9kZWxWYWx1ZVxuXG4gICAgaWYgKF9fUVVBU0FSX1NTUl9TRVJWRVJfXyAhPT0gdHJ1ZSkge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2RlZmF1bHRQYXJhZ3JhcGhTZXBhcmF0b3InLCBmYWxzZSwgcHJvcHMucGFyYWdyYXBoVGFnKVxuICAgICAgZGVmYXVsdEZvbnQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5mb250RmFtaWx5XG4gICAgfVxuXG4gICAgY29uc3QgdG9vbGJhckJhY2tncm91bmRDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnRvb2xiYXJCZyA/IGAgYmctJHsgcHJvcHMudG9vbGJhckJnIH1gIDogJydcbiAgICApKVxuXG4gICAgY29uc3QgYnV0dG9uUHJvcHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBmbGF0ID0gcHJvcHMudG9vbGJhck91dGxpbmUgIT09IHRydWVcbiAgICAgICAgJiYgcHJvcHMudG9vbGJhclB1c2ggIT09IHRydWVcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ2EnLFxuICAgICAgICBmbGF0LFxuICAgICAgICBub1dyYXA6IHRydWUsXG4gICAgICAgIG91dGxpbmU6IHByb3BzLnRvb2xiYXJPdXRsaW5lLFxuICAgICAgICBwdXNoOiBwcm9wcy50b29sYmFyUHVzaCxcbiAgICAgICAgcm91bmRlZDogcHJvcHMudG9vbGJhclJvdW5kZWQsXG4gICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICBjb2xvcjogcHJvcHMudG9vbGJhckNvbG9yLFxuICAgICAgICBkaXNhYmxlOiAhZWRpdGFibGUudmFsdWUsXG4gICAgICAgIHNpemU6ICdzbSdcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgYnV0dG9uRGVmID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3RcbiAgICAgICAgZSA9ICRxLmxhbmcuZWRpdG9yLFxuICAgICAgICBpID0gJHEuaWNvblNldC5lZGl0b3JcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYm9sZDogeyBjbWQ6ICdib2xkJywgaWNvbjogaS5ib2xkLCB0aXA6IGUuYm9sZCwga2V5OiA2NiB9LFxuICAgICAgICBpdGFsaWM6IHsgY21kOiAnaXRhbGljJywgaWNvbjogaS5pdGFsaWMsIHRpcDogZS5pdGFsaWMsIGtleTogNzMgfSxcbiAgICAgICAgc3RyaWtlOiB7IGNtZDogJ3N0cmlrZVRocm91Z2gnLCBpY29uOiBpLnN0cmlrZXRocm91Z2gsIHRpcDogZS5zdHJpa2V0aHJvdWdoLCBrZXk6IDgzIH0sXG4gICAgICAgIHVuZGVybGluZTogeyBjbWQ6ICd1bmRlcmxpbmUnLCBpY29uOiBpLnVuZGVybGluZSwgdGlwOiBlLnVuZGVybGluZSwga2V5OiA4NSB9LFxuICAgICAgICB1bm9yZGVyZWQ6IHsgY21kOiAnaW5zZXJ0VW5vcmRlcmVkTGlzdCcsIGljb246IGkudW5vcmRlcmVkTGlzdCwgdGlwOiBlLnVub3JkZXJlZExpc3QgfSxcbiAgICAgICAgb3JkZXJlZDogeyBjbWQ6ICdpbnNlcnRPcmRlcmVkTGlzdCcsIGljb246IGkub3JkZXJlZExpc3QsIHRpcDogZS5vcmRlcmVkTGlzdCB9LFxuICAgICAgICBzdWJzY3JpcHQ6IHsgY21kOiAnc3Vic2NyaXB0JywgaWNvbjogaS5zdWJzY3JpcHQsIHRpcDogZS5zdWJzY3JpcHQsIGh0bWxUaXA6ICd4PHN1YnNjcmlwdD4yPC9zdWJzY3JpcHQ+JyB9LFxuICAgICAgICBzdXBlcnNjcmlwdDogeyBjbWQ6ICdzdXBlcnNjcmlwdCcsIGljb246IGkuc3VwZXJzY3JpcHQsIHRpcDogZS5zdXBlcnNjcmlwdCwgaHRtbFRpcDogJ3g8c3VwZXJzY3JpcHQ+Mjwvc3VwZXJzY3JpcHQ+JyB9LFxuICAgICAgICBsaW5rOiB7IGNtZDogJ2xpbmsnLCBkaXNhYmxlOiBlVm0gPT4gZVZtLmNhcmV0ICYmICFlVm0uY2FyZXQuY2FuKCdsaW5rJyksIGljb246IGkuaHlwZXJsaW5rLCB0aXA6IGUuaHlwZXJsaW5rLCBrZXk6IDc2IH0sXG4gICAgICAgIGZ1bGxzY3JlZW46IHsgY21kOiAnZnVsbHNjcmVlbicsIGljb246IGkudG9nZ2xlRnVsbHNjcmVlbiwgdGlwOiBlLnRvZ2dsZUZ1bGxzY3JlZW4sIGtleTogNzAgfSxcbiAgICAgICAgdmlld3NvdXJjZTogeyBjbWQ6ICd2aWV3c291cmNlJywgaWNvbjogaS52aWV3U291cmNlLCB0aXA6IGUudmlld1NvdXJjZSB9LFxuXG4gICAgICAgIHF1b3RlOiB7IGNtZDogJ2Zvcm1hdEJsb2NrJywgcGFyYW06ICdCTE9DS1FVT1RFJywgaWNvbjogaS5xdW90ZSwgdGlwOiBlLnF1b3RlLCBrZXk6IDgxIH0sXG4gICAgICAgIGxlZnQ6IHsgY21kOiAnanVzdGlmeUxlZnQnLCBpY29uOiBpLmxlZnQsIHRpcDogZS5sZWZ0IH0sXG4gICAgICAgIGNlbnRlcjogeyBjbWQ6ICdqdXN0aWZ5Q2VudGVyJywgaWNvbjogaS5jZW50ZXIsIHRpcDogZS5jZW50ZXIgfSxcbiAgICAgICAgcmlnaHQ6IHsgY21kOiAnanVzdGlmeVJpZ2h0JywgaWNvbjogaS5yaWdodCwgdGlwOiBlLnJpZ2h0IH0sXG4gICAgICAgIGp1c3RpZnk6IHsgY21kOiAnanVzdGlmeUZ1bGwnLCBpY29uOiBpLmp1c3RpZnksIHRpcDogZS5qdXN0aWZ5IH0sXG5cbiAgICAgICAgcHJpbnQ6IHsgdHlwZTogJ25vLXN0YXRlJywgY21kOiAncHJpbnQnLCBpY29uOiBpLnByaW50LCB0aXA6IGUucHJpbnQsIGtleTogODAgfSxcbiAgICAgICAgb3V0ZGVudDogeyB0eXBlOiAnbm8tc3RhdGUnLCBkaXNhYmxlOiBlVm0gPT4gZVZtLmNhcmV0ICYmICFlVm0uY2FyZXQuY2FuKCdvdXRkZW50JyksIGNtZDogJ291dGRlbnQnLCBpY29uOiBpLm91dGRlbnQsIHRpcDogZS5vdXRkZW50IH0sXG4gICAgICAgIGluZGVudDogeyB0eXBlOiAnbm8tc3RhdGUnLCBkaXNhYmxlOiBlVm0gPT4gZVZtLmNhcmV0ICYmICFlVm0uY2FyZXQuY2FuKCdpbmRlbnQnKSwgY21kOiAnaW5kZW50JywgaWNvbjogaS5pbmRlbnQsIHRpcDogZS5pbmRlbnQgfSxcbiAgICAgICAgcmVtb3ZlRm9ybWF0OiB7IHR5cGU6ICduby1zdGF0ZScsIGNtZDogJ3JlbW92ZUZvcm1hdCcsIGljb246IGkucmVtb3ZlRm9ybWF0LCB0aXA6IGUucmVtb3ZlRm9ybWF0IH0sXG4gICAgICAgIGhyOiB7IHR5cGU6ICduby1zdGF0ZScsIGNtZDogJ2luc2VydEhvcml6b250YWxSdWxlJywgaWNvbjogaS5ociwgdGlwOiBlLmhyIH0sXG4gICAgICAgIHVuZG86IHsgdHlwZTogJ25vLXN0YXRlJywgY21kOiAndW5kbycsIGljb246IGkudW5kbywgdGlwOiBlLnVuZG8sIGtleTogOTAgfSxcbiAgICAgICAgcmVkbzogeyB0eXBlOiAnbm8tc3RhdGUnLCBjbWQ6ICdyZWRvJywgaWNvbjogaS5yZWRvLCB0aXA6IGUucmVkbywga2V5OiA4OSB9LFxuXG4gICAgICAgIGgxOiB7IGNtZDogJ2Zvcm1hdEJsb2NrJywgcGFyYW06ICdIMScsIGljb246IGkuaGVhZGluZzEgfHwgaS5oZWFkaW5nLCB0aXA6IGUuaGVhZGluZzEsIGh0bWxUaXA6IGA8aDEgY2xhc3M9XCJxLW1hLW5vbmVcIj4keyBlLmhlYWRpbmcxIH08L2gxPmAgfSxcbiAgICAgICAgaDI6IHsgY21kOiAnZm9ybWF0QmxvY2snLCBwYXJhbTogJ0gyJywgaWNvbjogaS5oZWFkaW5nMiB8fCBpLmhlYWRpbmcsIHRpcDogZS5oZWFkaW5nMiwgaHRtbFRpcDogYDxoMiBjbGFzcz1cInEtbWEtbm9uZVwiPiR7IGUuaGVhZGluZzIgfTwvaDI+YCB9LFxuICAgICAgICBoMzogeyBjbWQ6ICdmb3JtYXRCbG9jaycsIHBhcmFtOiAnSDMnLCBpY29uOiBpLmhlYWRpbmczIHx8IGkuaGVhZGluZywgdGlwOiBlLmhlYWRpbmczLCBodG1sVGlwOiBgPGgzIGNsYXNzPVwicS1tYS1ub25lXCI+JHsgZS5oZWFkaW5nMyB9PC9oMz5gIH0sXG4gICAgICAgIGg0OiB7IGNtZDogJ2Zvcm1hdEJsb2NrJywgcGFyYW06ICdINCcsIGljb246IGkuaGVhZGluZzQgfHwgaS5oZWFkaW5nLCB0aXA6IGUuaGVhZGluZzQsIGh0bWxUaXA6IGA8aDQgY2xhc3M9XCJxLW1hLW5vbmVcIj4keyBlLmhlYWRpbmc0IH08L2g0PmAgfSxcbiAgICAgICAgaDU6IHsgY21kOiAnZm9ybWF0QmxvY2snLCBwYXJhbTogJ0g1JywgaWNvbjogaS5oZWFkaW5nNSB8fCBpLmhlYWRpbmcsIHRpcDogZS5oZWFkaW5nNSwgaHRtbFRpcDogYDxoNSBjbGFzcz1cInEtbWEtbm9uZVwiPiR7IGUuaGVhZGluZzUgfTwvaDU+YCB9LFxuICAgICAgICBoNjogeyBjbWQ6ICdmb3JtYXRCbG9jaycsIHBhcmFtOiAnSDYnLCBpY29uOiBpLmhlYWRpbmc2IHx8IGkuaGVhZGluZywgdGlwOiBlLmhlYWRpbmc2LCBodG1sVGlwOiBgPGg2IGNsYXNzPVwicS1tYS1ub25lXCI+JHsgZS5oZWFkaW5nNiB9PC9oNj5gIH0sXG4gICAgICAgIHA6IHsgY21kOiAnZm9ybWF0QmxvY2snLCBwYXJhbTogcHJvcHMucGFyYWdyYXBoVGFnLCBpY29uOiBpLmhlYWRpbmcsIHRpcDogZS5wYXJhZ3JhcGggfSxcbiAgICAgICAgY29kZTogeyBjbWQ6ICdmb3JtYXRCbG9jaycsIHBhcmFtOiAnUFJFJywgaWNvbjogaS5jb2RlLCBodG1sVGlwOiBgPGNvZGU+JHsgZS5jb2RlIH08L2NvZGU+YCB9LFxuXG4gICAgICAgICdzaXplLTEnOiB7IGNtZDogJ2ZvbnRTaXplJywgcGFyYW06ICcxJywgaWNvbjogaS5zaXplMSB8fCBpLnNpemUsIHRpcDogZS5zaXplMSwgaHRtbFRpcDogYDxmb250IHNpemU9XCIxXCI+JHsgZS5zaXplMSB9PC9mb250PmAgfSxcbiAgICAgICAgJ3NpemUtMic6IHsgY21kOiAnZm9udFNpemUnLCBwYXJhbTogJzInLCBpY29uOiBpLnNpemUyIHx8IGkuc2l6ZSwgdGlwOiBlLnNpemUyLCBodG1sVGlwOiBgPGZvbnQgc2l6ZT1cIjJcIj4keyBlLnNpemUyIH08L2ZvbnQ+YCB9LFxuICAgICAgICAnc2l6ZS0zJzogeyBjbWQ6ICdmb250U2l6ZScsIHBhcmFtOiAnMycsIGljb246IGkuc2l6ZTMgfHwgaS5zaXplLCB0aXA6IGUuc2l6ZTMsIGh0bWxUaXA6IGA8Zm9udCBzaXplPVwiM1wiPiR7IGUuc2l6ZTMgfTwvZm9udD5gIH0sXG4gICAgICAgICdzaXplLTQnOiB7IGNtZDogJ2ZvbnRTaXplJywgcGFyYW06ICc0JywgaWNvbjogaS5zaXplNCB8fCBpLnNpemUsIHRpcDogZS5zaXplNCwgaHRtbFRpcDogYDxmb250IHNpemU9XCI0XCI+JHsgZS5zaXplNCB9PC9mb250PmAgfSxcbiAgICAgICAgJ3NpemUtNSc6IHsgY21kOiAnZm9udFNpemUnLCBwYXJhbTogJzUnLCBpY29uOiBpLnNpemU1IHx8IGkuc2l6ZSwgdGlwOiBlLnNpemU1LCBodG1sVGlwOiBgPGZvbnQgc2l6ZT1cIjVcIj4keyBlLnNpemU1IH08L2ZvbnQ+YCB9LFxuICAgICAgICAnc2l6ZS02JzogeyBjbWQ6ICdmb250U2l6ZScsIHBhcmFtOiAnNicsIGljb246IGkuc2l6ZTYgfHwgaS5zaXplLCB0aXA6IGUuc2l6ZTYsIGh0bWxUaXA6IGA8Zm9udCBzaXplPVwiNlwiPiR7IGUuc2l6ZTYgfTwvZm9udD5gIH0sXG4gICAgICAgICdzaXplLTcnOiB7IGNtZDogJ2ZvbnRTaXplJywgcGFyYW06ICc3JywgaWNvbjogaS5zaXplNyB8fCBpLnNpemUsIHRpcDogZS5zaXplNywgaHRtbFRpcDogYDxmb250IHNpemU9XCI3XCI+JHsgZS5zaXplNyB9PC9mb250PmAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBidXR0b25zID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgdXNlckRlZiA9IHByb3BzLmRlZmluaXRpb25zIHx8IHt9XG4gICAgICBjb25zdCBkZWYgPSBwcm9wcy5kZWZpbml0aW9ucyB8fCBwcm9wcy5mb250c1xuICAgICAgICA/IGV4dGVuZChcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIGJ1dHRvbkRlZi52YWx1ZSxcbiAgICAgICAgICB1c2VyRGVmLFxuICAgICAgICAgIGdldEZvbnRzKFxuICAgICAgICAgICAgZGVmYXVsdEZvbnQsXG4gICAgICAgICAgICAkcS5sYW5nLmVkaXRvci5kZWZhdWx0Rm9udCxcbiAgICAgICAgICAgICRxLmljb25TZXQuZWRpdG9yLmZvbnQsXG4gICAgICAgICAgICBwcm9wcy5mb250c1xuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICA6IGJ1dHRvbkRlZi52YWx1ZVxuXG4gICAgICByZXR1cm4gcHJvcHMudG9vbGJhci5tYXAoXG4gICAgICAgIGdyb3VwID0+IGdyb3VwLm1hcCh0b2tlbiA9PiB7XG4gICAgICAgICAgaWYgKHRva2VuLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdkcm9wZG93bicsXG4gICAgICAgICAgICAgIGljb246IHRva2VuLmljb24sXG4gICAgICAgICAgICAgIGxhYmVsOiB0b2tlbi5sYWJlbCxcbiAgICAgICAgICAgICAgc2l6ZTogJ3NtJyxcbiAgICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICAgIGZpeGVkTGFiZWw6IHRva2VuLmZpeGVkTGFiZWwsXG4gICAgICAgICAgICAgIGZpeGVkSWNvbjogdG9rZW4uZml4ZWRJY29uLFxuICAgICAgICAgICAgICBoaWdobGlnaHQ6IHRva2VuLmhpZ2hsaWdodCxcbiAgICAgICAgICAgICAgbGlzdDogdG9rZW4ubGlzdCxcbiAgICAgICAgICAgICAgb3B0aW9uczogdG9rZW4ub3B0aW9ucy5tYXAoaXRlbSA9PiBkZWZbIGl0ZW0gXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBvYmogPSBkZWZbIHRva2VuIF1cblxuICAgICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBvYmoudHlwZSA9PT0gJ25vLXN0YXRlJyB8fCAodXNlckRlZlsgdG9rZW4gXSAmJiAoXG4gICAgICAgICAgICAgIG9iai5jbWQgPT09IHZvaWQgMCB8fCAoYnV0dG9uRGVmLnZhbHVlWyBvYmouY21kIF0gJiYgYnV0dG9uRGVmLnZhbHVlWyBvYmouY21kIF0udHlwZSA9PT0gJ25vLXN0YXRlJylcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgID8gb2JqXG4gICAgICAgICAgICAgIDogT2JqZWN0LmFzc2lnbih7IHR5cGU6ICd0b2dnbGUnIH0sIG9iailcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB0eXBlOiAnc2xvdCcsXG4gICAgICAgICAgICAgIHNsb3Q6IHRva2VuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgIH0pXG5cbiAgICBjb25zdCBlVm0gPSB7XG4gICAgICAkcSxcbiAgICAgIHByb3BzLFxuICAgICAgc2xvdHMsXG4gICAgICBlbWl0LFxuICAgICAgLy8gY2FyZXQgKHdpbGwgZ2V0IGluamVjdGVkIGFmdGVyIG1vdW50KVxuICAgICAgaW5GdWxsc2NyZWVuLFxuICAgICAgdG9nZ2xlRnVsbHNjcmVlbixcbiAgICAgIHJ1bkNtZCxcbiAgICAgIGlzVmlld2luZ1NvdXJjZSxcbiAgICAgIGVkaXRMaW5rVXJsLFxuICAgICAgdG9vbGJhckJhY2tncm91bmRDbGFzcyxcbiAgICAgIGJ1dHRvblByb3BzLFxuICAgICAgY29udGVudFJlZixcbiAgICAgIGJ1dHRvbnMsXG4gICAgICBzZXRDb250ZW50XG4gICAgfVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSwgdiA9PiB7XG4gICAgICBpZiAobGFzdEVtaXQgIT09IHYpIHtcbiAgICAgICAgbGFzdEVtaXQgPSB2XG4gICAgICAgIHNldENvbnRlbnQodiwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2F0Y2goZWRpdExpbmtVcmwsIHYgPT4ge1xuICAgICAgZW1pdChgbGluayR7IHYgPyAnU2hvdycgOiAnSGlkZScgfWApXG4gICAgfSlcblxuICAgIGNvbnN0IGhhc1Rvb2xiYXIgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy50b29sYmFyICYmIHByb3BzLnRvb2xiYXIubGVuZ3RoICE9PSAwKVxuXG4gICAgY29uc3Qga2V5cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGsgPSB7fSxcbiAgICAgICAgYWRkID0gYnRuID0+IHtcbiAgICAgICAgICBpZiAoYnRuLmtleSkge1xuICAgICAgICAgICAga1sgYnRuLmtleSBdID0ge1xuICAgICAgICAgICAgICBjbWQ6IGJ0bi5jbWQsXG4gICAgICAgICAgICAgIHBhcmFtOiBidG4ucGFyYW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgYnV0dG9ucy52YWx1ZS5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgZ3JvdXAuZm9yRWFjaCh0b2tlbiA9PiB7XG4gICAgICAgICAgaWYgKHRva2VuLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRva2VuLm9wdGlvbnMuZm9yRWFjaChhZGQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWRkKHRva2VuKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICByZXR1cm4ga1xuICAgIH0pXG5cbiAgICBjb25zdCBpbm5lclN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgaW5GdWxsc2NyZWVuLnZhbHVlXG4gICAgICAgID8gcHJvcHMuY29udGVudFN0eWxlXG4gICAgICAgIDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtaW5IZWlnaHQ6IHByb3BzLm1pbkhlaWdodCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgICAgICAgICAgIG1heEhlaWdodDogcHJvcHMubWF4SGVpZ2h0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvcHMuY29udGVudFN0eWxlXG4gICAgICAgICAgXVxuICAgICkpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLWVkaXRvciBxLWVkaXRvci0tJHsgaXNWaWV3aW5nU291cmNlLnZhbHVlID09PSB0cnVlID8gJ3NvdXJjZScgOiAnZGVmYXVsdCcgfWBcbiAgICAgICsgKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6ICcnKVxuICAgICAgKyAoaW5GdWxsc2NyZWVuLnZhbHVlID09PSB0cnVlID8gJyBmdWxsc2NyZWVuIGNvbHVtbicgOiAnJylcbiAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS1lZGl0b3ItLXNxdWFyZSBuby1ib3JkZXItcmFkaXVzJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZmxhdCA9PT0gdHJ1ZSA/ICcgcS1lZGl0b3ItLWZsYXQnIDogJycpXG4gICAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/ICcgcS1lZGl0b3ItLWRlbnNlJyA6ICcnKVxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLWVkaXRvci0tZGFyayBxLWRhcmsnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgaW5uZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChbXG4gICAgICBwcm9wcy5jb250ZW50Q2xhc3MsXG4gICAgICAncS1lZGl0b3JfX2NvbnRlbnQnLFxuICAgICAgeyBjb2w6IGluRnVsbHNjcmVlbi52YWx1ZSwgJ292ZXJmbG93LWF1dG8nOiBpbkZ1bGxzY3JlZW4udmFsdWUgfHwgcHJvcHMubWF4SGVpZ2h0IH1cbiAgICBdKSlcblxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5kaXNhYmxlID09PSB0cnVlXG4gICAgICAgID8geyAnYXJpYS1kaXNhYmxlZCc6ICd0cnVlJyB9XG4gICAgICAgIDoge31cbiAgICApKVxuXG4gICAgZnVuY3Rpb24gb25JbnB1dCAoKSB7XG4gICAgICBpZiAoY29udGVudFJlZi52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwcm9wID0gYGlubmVyJHsgaXNWaWV3aW5nU291cmNlLnZhbHVlID09PSB0cnVlID8gJ1RleHQnIDogJ0hUTUwnIH1gXG4gICAgICAgIGNvbnN0IHZhbCA9IGNvbnRlbnRSZWYudmFsdWVbIHByb3AgXVxuXG4gICAgICAgIGlmICh2YWwgIT09IHByb3BzLm1vZGVsVmFsdWUpIHtcbiAgICAgICAgICBsYXN0RW1pdCA9IHZhbFxuICAgICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdmFsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LZXlkb3duIChlKSB7XG4gICAgICBlbWl0KCdrZXlkb3duJywgZSlcblxuICAgICAgaWYgKGUuY3RybEtleSAhPT0gdHJ1ZSB8fCBzaG91bGRJZ25vcmVLZXkoZSkgPT09IHRydWUpIHtcbiAgICAgICAgcmVmcmVzaFRvb2xiYXIoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3Qga2V5ID0gZS5rZXlDb2RlXG4gICAgICBjb25zdCB0YXJnZXQgPSBrZXlzLnZhbHVlWyBrZXkgXVxuICAgICAgaWYgKHRhcmdldCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnN0IHsgY21kLCBwYXJhbSB9ID0gdGFyZ2V0XG4gICAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgICAgIHJ1bkNtZChjbWQsIHBhcmFtLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNsaWNrIChlKSB7XG4gICAgICByZWZyZXNoVG9vbGJhcigpXG4gICAgICBlbWl0KCdjbGljaycsIGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25CbHVyIChlKSB7XG4gICAgICBpZiAoY29udGVudFJlZi52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB7IHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0IH0gPSBjb250ZW50UmVmLnZhbHVlXG4gICAgICAgIG9mZnNldEJvdHRvbSA9IHNjcm9sbEhlaWdodCAtIHNjcm9sbFRvcFxuICAgICAgfVxuICAgICAgZVZtLmNhcmV0LnNhdmUoKVxuICAgICAgZW1pdCgnYmx1cicsIGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Gb2N1cyAoZSkge1xuICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBpZiAoY29udGVudFJlZi52YWx1ZSAhPT0gbnVsbCAmJiBvZmZzZXRCb3R0b20gIT09IHZvaWQgMCkge1xuICAgICAgICAgIGNvbnRlbnRSZWYudmFsdWUuc2Nyb2xsVG9wID0gY29udGVudFJlZi52YWx1ZS5zY3JvbGxIZWlnaHQgLSBvZmZzZXRCb3R0b21cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGVtaXQoJ2ZvY3VzJywgZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZvY3VzaW4gKGUpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSByb290UmVmLnZhbHVlXG5cbiAgICAgIGlmIChcbiAgICAgICAgcm9vdCAhPT0gbnVsbFxuICAgICAgICAmJiByb290LmNvbnRhaW5zKGUudGFyZ2V0KSA9PT0gdHJ1ZVxuICAgICAgICAmJiAoXG4gICAgICAgICAgZS5yZWxhdGVkVGFyZ2V0ID09PSBudWxsXG4gICAgICAgICAgfHwgcm9vdC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpICE9PSB0cnVlXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBjb25zdCBwcm9wID0gYGlubmVyJHsgaXNWaWV3aW5nU291cmNlLnZhbHVlID09PSB0cnVlID8gJ1RleHQnIDogJ0hUTUwnIH1gXG4gICAgICAgIGVWbS5jYXJldC5yZXN0b3JlUG9zaXRpb24oY29udGVudFJlZi52YWx1ZVsgcHJvcCBdLmxlbmd0aClcbiAgICAgICAgcmVmcmVzaFRvb2xiYXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXNvdXQgKGUpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSByb290UmVmLnZhbHVlXG5cbiAgICAgIGlmIChcbiAgICAgICAgcm9vdCAhPT0gbnVsbFxuICAgICAgICAmJiByb290LmNvbnRhaW5zKGUudGFyZ2V0KSA9PT0gdHJ1ZVxuICAgICAgICAmJiAoXG4gICAgICAgICAgZS5yZWxhdGVkVGFyZ2V0ID09PSBudWxsXG4gICAgICAgICAgfHwgcm9vdC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpICE9PSB0cnVlXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBlVm0uY2FyZXQuc2F2ZVBvc2l0aW9uKClcbiAgICAgICAgcmVmcmVzaFRvb2xiYXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUG9pbnRlclN0YXJ0ICgpIHtcbiAgICAgIG9mZnNldEJvdHRvbSA9IHZvaWQgMFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU2VsZWN0aW9uY2hhbmdlIChlKSB7XG4gICAgICBlVm0uY2FyZXQuc2F2ZSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Q29udGVudCAodiwgcmVzdG9yZVBvc2l0aW9uKSB7XG4gICAgICBpZiAoY29udGVudFJlZi52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAocmVzdG9yZVBvc2l0aW9uID09PSB0cnVlKSB7XG4gICAgICAgICAgZVZtLmNhcmV0LnNhdmVQb3NpdGlvbigpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9wID0gYGlubmVyJHsgaXNWaWV3aW5nU291cmNlLnZhbHVlID09PSB0cnVlID8gJ1RleHQnIDogJ0hUTUwnIH1gXG4gICAgICAgIGNvbnRlbnRSZWYudmFsdWVbIHByb3AgXSA9IHZcblxuICAgICAgICBpZiAocmVzdG9yZVBvc2l0aW9uID09PSB0cnVlKSB7XG4gICAgICAgICAgZVZtLmNhcmV0LnJlc3RvcmVQb3NpdGlvbihjb250ZW50UmVmLnZhbHVlWyBwcm9wIF0ubGVuZ3RoKVxuICAgICAgICAgIHJlZnJlc2hUb29sYmFyKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bkNtZCAoY21kLCBwYXJhbSwgdXBkYXRlID0gdHJ1ZSkge1xuICAgICAgZm9jdXMoKVxuICAgICAgZVZtLmNhcmV0LnJlc3RvcmUoKVxuICAgICAgZVZtLmNhcmV0LmFwcGx5KGNtZCwgcGFyYW0sICgpID0+IHtcbiAgICAgICAgZm9jdXMoKVxuICAgICAgICBlVm0uY2FyZXQuc2F2ZSgpXG4gICAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgICByZWZyZXNoVG9vbGJhcigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaFRvb2xiYXIgKCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVkaXRMaW5rVXJsLnZhbHVlID0gbnVsbFxuICAgICAgICBwcm94eS4kZm9yY2VVcGRhdGUoKVxuICAgICAgfSwgMSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb2N1cyAoKSB7XG4gICAgICBhZGRGb2N1c0ZuKCgpID0+IHtcbiAgICAgICAgY29udGVudFJlZi52YWx1ZSAhPT0gbnVsbCAmJiBjb250ZW50UmVmLnZhbHVlLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb250ZW50RWwgKCkge1xuICAgICAgcmV0dXJuIGNvbnRlbnRSZWYudmFsdWVcbiAgICB9XG5cbiAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgZVZtLmNhcmV0ID0gcHJveHkuY2FyZXQgPSBuZXcgQ2FyZXQoY29udGVudFJlZi52YWx1ZSwgZVZtKVxuICAgICAgc2V0Q29udGVudChwcm9wcy5tb2RlbFZhbHVlKVxuICAgICAgcmVmcmVzaFRvb2xiYXIoKVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3Rpb25jaGFuZ2UnLCBvblNlbGVjdGlvbmNoYW5nZSlcbiAgICB9KVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIG9uU2VsZWN0aW9uY2hhbmdlKVxuICAgIH0pXG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgICBydW5DbWQsIHJlZnJlc2hUb29sYmFyLCBmb2N1cywgZ2V0Q29udGVudEVsXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBsZXQgdG9vbGJhcnNcblxuICAgICAgaWYgKGhhc1Rvb2xiYXIudmFsdWUpIHtcbiAgICAgICAgY29uc3QgYmFycyA9IFtcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBrZXk6ICdxZWR0X3RvcCcsXG4gICAgICAgICAgICBjbGFzczogJ3EtZWRpdG9yX190b29sYmFyIHJvdyBuby13cmFwIHNjcm9sbC14J1xuICAgICAgICAgICAgICArIHRvb2xiYXJCYWNrZ3JvdW5kQ2xhc3MudmFsdWVcbiAgICAgICAgICB9LCBnZXRUb29sYmFyKGVWbSkpXG4gICAgICAgIF1cblxuICAgICAgICBlZGl0TGlua1VybC52YWx1ZSAhPT0gbnVsbCAmJiBiYXJzLnB1c2goXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAga2V5OiAncWVkdF9idG0nLFxuICAgICAgICAgICAgY2xhc3M6ICdxLWVkaXRvcl9fdG9vbGJhciByb3cgbm8td3JhcCBpdGVtcy1jZW50ZXIgc2Nyb2xsLXgnXG4gICAgICAgICAgICAgICsgdG9vbGJhckJhY2tncm91bmRDbGFzcy52YWx1ZVxuICAgICAgICAgIH0sIGdldExpbmtFZGl0b3IoZVZtKSlcbiAgICAgICAgKVxuXG4gICAgICAgIHRvb2xiYXJzID0gaCgnZGl2Jywge1xuICAgICAgICAgIGtleTogJ3Rvb2xiYXJfY3RhaW5lcicsXG4gICAgICAgICAgY2xhc3M6ICdxLWVkaXRvcl9fdG9vbGJhcnMtY29udGFpbmVyJ1xuICAgICAgICB9LCBiYXJzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICByZWY6IHJvb3RSZWYsXG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogeyBoZWlnaHQ6IGluRnVsbHNjcmVlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcxMDAlJyA6IG51bGwgfSxcbiAgICAgICAgLi4uYXR0cmlidXRlcy52YWx1ZSxcbiAgICAgICAgb25Gb2N1c2luLFxuICAgICAgICBvbkZvY3Vzb3V0XG4gICAgICB9LCBbXG4gICAgICAgIHRvb2xiYXJzLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICByZWY6IGNvbnRlbnRSZWYsXG4gICAgICAgICAgc3R5bGU6IGlubmVyU3R5bGUudmFsdWUsXG4gICAgICAgICAgY2xhc3M6IGlubmVyQ2xhc3MudmFsdWUsXG4gICAgICAgICAgY29udGVudGVkaXRhYmxlOiBlZGl0YWJsZS52YWx1ZSxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsXG4gICAgICAgICAgLi4uKF9fUVVBU0FSX1NTUl9TRVJWRVJfX1xuICAgICAgICAgICAgPyB7IGlubmVySFRNTDogcHJvcHMubW9kZWxWYWx1ZSB9XG4gICAgICAgICAgICA6IHt9KSxcbiAgICAgICAgICAuLi5zcGxpdEF0dHJzLmxpc3RlbmVycy52YWx1ZSxcbiAgICAgICAgICBvbklucHV0LFxuICAgICAgICAgIG9uS2V5ZG93bixcbiAgICAgICAgICBvbkNsaWNrLFxuICAgICAgICAgIG9uQmx1cixcbiAgICAgICAgICBvbkZvY3VzLFxuXG4gICAgICAgICAgLy8gY2xlYW4gc2F2ZWQgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgICAgb25Nb3VzZWRvd246IG9uUG9pbnRlclN0YXJ0LFxuICAgICAgICAgIG9uVG91Y2hzdGFydFBhc3NpdmU6IG9uUG9pbnRlclN0YXJ0XG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIH1cbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgICA8cS1wYWdlIGNsYXNzPVwicS1wYS1zbVwiPlxuXG4gICAgICAgIDxOYXZCYXIgOnRpdGxlPVwiJHQoJ21lc3NhZ2VzLkxhYmVsQ29tcGFuaWVzJylcIiBpY29uPVwibG9jYXRpb25fY2l0eVwiIHN0YXRlTmFtZT1cImNvbXBhbmllc1wiIDpzdGF0ZT1cImNvbXBhbnlTdG9yZVwiIC8+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHEtY29sLWd1dHRlci1tZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxxLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGdyaWROYW1lPVwiY29tcGFueUdyaWRcIiA6Z3JpZE9wdGlvbnM9XCJjb21wYW55R3JpZFwiIHN0YXRlTmFtZT1cImNvbXBhbmllc1wiIDpzdGF0ZT1cImNvbXBhbnlTdG9yZVwiIGNsYXNzPVwiZ3JpZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxxLXNlcGFyYXRvciAvPlxuICAgICAgICAgICAgICAgIDwvcS1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHEtY2FyZCBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHEtZm9ybSBAc3VibWl0PVwiZG9TYXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAtOTk5OXB4XCIgLz5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIiB2LXQ9XCInbWVzc2FnZXMuTGFiZWxDb21wYW55J1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cIm5hbWVcIiB2LW1vZGVsPVwiZm9ybS5uYW1lXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZCByZWY9XCJyZWZDb21wYW5pZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xOYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoaW50PVwiJHQoJ21lc3NhZ2VzLlRleHROYW1lSGludCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cnVsZXM9XCJbIHZhbCA9PiAhIXZhbCB8fCAkdCgnbWVzc2FnZXMuVGV4dFJlcXVpcmVkJyldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cImRlc2NcIiB2LW1vZGVsPVwiZm9ybS5kZXNjXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xEZXNjJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiZGVzYzJcIiB2LW1vZGVsPVwiZm9ybS5kZXNjMlwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sRGVzYycpICsgJyAyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJzdHJlZXRcIiB2LW1vZGVsPVwiZm9ybS5zdHJlZXRcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbFN0cmVldCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cInppcFwiIHYtbW9kZWw9XCJmb3JtLnppcFwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xaaXAnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJjaXR5XCIgdi1tb2RlbD1cImZvcm0uY2l0eVwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xDaXR5JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWNhcmQgYm9yZGVyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFicyB2LW1vZGVsPVwidGFiXCIgY2xhc3M9XCJ0ZXh0LXRlYWxcIiBhbGlnbj1cImxlZnRcIiBkZW5zZSBvdXRsaW5lZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFiIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbENvbnRhY3QnKVwiIG5hbWU9XCJjb250YWN0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFiIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbE9wZW4nKVwiIG5hbWU9XCJvcGVuXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtdGFicz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRhYi1wYW5lbHMgdi1tb2RlbD1cInRhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRhYi1wYW5lbCBuYW1lPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgdHlwZT1cInBob25lXCIgbmFtZT1cInBob25lXCIgdi1tb2RlbD1cImZvcm0ucGhvbmVcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sUGhvbmUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IHR5cGU9XCJwaG9uZVwiIG5hbWU9XCJmYXhcIiB2LW1vZGVsPVwiZm9ybS5mYXhcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sRmF4JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCB0eXBlPVwibWFpbFwiIG5hbWU9XCJtYWlsXCIgdi1tb2RlbD1cImZvcm0ubWFpbFwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xNYWlsJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImZpbGlhbGVcIiB2LW1vZGVsPVwiZm9ybS5maWxpYWxlXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiYCR7JHQoJ21lc3NhZ2VzLkxhYmVsRmlsJyl9IC0gJHskdCgnbWVzc2FnZXMuTGFiZWxBdXRvc2VsbGVyJyl9YFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJyZWdpc3RlclwiIHYtbW9kZWw9XCJmb3JtLnJlZ2lzdGVyXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbFJlZ2lzdGVyJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwicmVnaXN0bnJcIiB2LW1vZGVsPVwiZm9ybS5yZWdpc3RuclwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xSZWdpc3RucicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cInN0YXRlXCIgdi1tb2RlbD1cImZvcm0uc3RhdGVcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxTdGF0ZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtdGFiLXBhbmVsPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRhYi1wYW5lbCBuYW1lPVwib3BlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtZWRpdG9yIHYtbW9kZWw9XCJmb3JtLm9wZW5cIiBtaW4taGVpZ2h0PVwiNXJlbVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHEtaW5wdXQgbmFtZT1cImxlYWRvcGVuXCIgdi1tb2RlbD1cImZvcm0ub3BlblwiIGxhenktcnVsZXMgdHlwZT1cInRleHRhcmVhXCIgZGVuc2Ugb3V0bGluZWQgYXV0b2dyb3cgc3R5bGU9XCJtYXgtaGVpZ2h0OiAzMDBweDtcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxPcGVuJylcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgICAvPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtdGFiLXBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtdGFiLXBhbmVscz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1jYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1mb3JtPlxuICAgICAgICAgICAgICAgIDwvcS1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCBHbG9iYWxWaWV3ICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21tb24vaGVscGVycy9HbG9iYWxWaWV3JztcbmltcG9ydCBOYXZCYXIgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhci52dWUnOyBcbmltcG9ydCBHcmlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9HcmlkLnZ1ZSc7XG5cbmltcG9ydCBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgZGVidWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnZGVidWcnO1xuY29uc3QgbG9nICAgICAgICAgPSBkZWJ1ZygnYXBwOmNvbXBhbmllcycpO1xuXG5jb25zdCBpbml0ICAgICAgICA9IHsgXG4gICAgY29sbE5hbWU6ICAgICAgICdjb21wYW5pZXMnLCBcbiAgICBzdGF0ZU5hbWU6ICAgICAgJ2NvbXBhbnknLFxuICAgIGRlZmF1bHRGb3JtOiAgICB7XG4gICAgICAgIG9wZW46ICAgICAgICAgICAnJ1xuICAgIH1cbn07XG5jb25zdCBnbG9iYWxWaWV3ICA9IEdsb2JhbFZpZXcoIGluaXQgKTtcbmNvbnN0IHsgXG4gICAgc3RvcmU6ICAgICAgICAgIGNvbXBhbnlTdG9yZSwgXG4gICAgZGF0YTogICAgICAgICAgIGNvbXBhbmllcywgXG4gICAgZG9TYXZlLFxuICAgIGZvcm0gXG59ICA9IGdsb2JhbFZpZXc7XG5cbmNvbnN0IGNvbXBhbnlHcmlkICAgICAgICAgPSByZWYoe30pO1xuXG5jb25zdCAgIHRhYiAgICAgICAgICAgICAgID0gcmVmKCdjb250YWN0Jyk7XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG4uZ3JpZCB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLmZvcm0ge1xuICAgIGhlaWdodDogICAgY2FsYyggMTAwdmggLSAzMDBweCAtIDk1cHggLSA3MHB4ICk7XG4gICAgd2lkdGg6ICAgICAgICAgMTAwJTtcbn1cblxuPC9zdHlsZT4iXSwibmFtZXMiOlsiYnRuIiwiZVZtIiwiZ2xvYmFsVmlldyIsIkdsb2JhbFZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxTQUFTLGdCQUFpQixJQUFJLFFBQVE7QUFDcEMsTUFBSSxVQUFVLE9BQU8sUUFBUTtBQUMzQixXQUFPO0FBQUEsRUFDUjtBQUVELFFBQU0sV0FBVyxHQUFHLFNBQVMsWUFBYTtBQUUxQyxNQUFJLENBQUUsT0FBTyxNQUFNLE1BQU0sTUFBTSxZQUFZLEVBQUcsU0FBUyxRQUFRLE1BQU0sTUFBTTtBQUN6RSxXQUFPO0FBQUEsRUFDUjtBQUVELFFBQ0UsUUFBUSxPQUFPLG1CQUNYLE9BQU8saUJBQWlCLEVBQUUsSUFDMUIsR0FBRyxjQUNQLFVBQVUsTUFBTTtBQUVsQixNQUFJLFlBQVksV0FBVyxZQUFZLFNBQVM7QUFDOUMsV0FBTztBQUFBLEVBQ1I7QUFFRCxTQUFPLGdCQUFnQixHQUFHLFVBQVU7QUFDdEM7QUFFQSxTQUFTLFVBQVcsSUFBSSxRQUFRLFFBQVE7QUFDdEMsU0FBTyxDQUFDLE1BQU0sT0FBTyxTQUFTLE9BQzFCLFFBQ0MsV0FBVyxRQUFRLE9BQU8sV0FBWSxXQUFXLFdBQVcsU0FBUyxPQUFPLFFBQVEsU0FBUyxHQUFHLFVBQVU7QUFDakg7QUFFQSxTQUFTLFlBQWEsTUFBTSxPQUFPLE9BQU87QUFDeEMsTUFBSSxDQUFDLE9BQU87QUFDVixZQUFRLFNBQVMsWUFBYTtBQUM5QixVQUFNLFdBQVcsSUFBSTtBQUNyQixVQUFNLFNBQVMsTUFBTSxDQUFDO0FBQUEsRUFDdkI7QUFFRCxNQUFJLE1BQU0sVUFBVSxHQUFHO0FBQ3JCLFVBQU0sT0FBTyxNQUFNLE1BQU0sS0FBSztBQUFBLEVBQy9CLFdBQ1EsTUFBTSxRQUFRLEdBQUc7QUFDeEIsUUFBSSxLQUFLLGFBQWEsS0FBSyxXQUFXO0FBQ3BDLFVBQUksS0FBSyxZQUFZ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VUFBVSxRQUFRLEtBQUs7QUFBQSxVQUNqQyxFQUFFLE9BQU87QUFBQSxZQUNQLEtBQUs7QUFBQSxZQUNMLE9BQU8sd0RBQ0gsdUJBQXVCO0FBQUEsVUFDdkMsR0FBYSxjQUFjLEdBQUcsQ0FBQztBQUFBLFFBQ3RCO0FBRUQsbUJBQVcsRUFBRSxPQUFPO0FBQUEsVUFDbEIsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFFBQ1IsR0FBRSxJQUFJO0FBQUEsTUFDUjtBQUVELGFBQU8sRUFBRSxPQUFPO0FBQUEsUUFDZCxLQUFLO0FBQUEsUUFDTCxPQUFPLFFBQVE7QUFBQSxRQUNmLE9BQU8sRUFBRSxRQUFRLGFBQWEsVUFBVSxPQUFPLFNBQVMsS0FBTTtBQUFBLFFBQzlELEdBQUcsV0FBVztBQUFBLFFBQ2Q7QUFBQSxRQUNBO0FBQUEsTUFDUixHQUFTO0FBQUEsUUFDRDtBQUFBLFFBRUEsRUFBRSxPQUFPO0FBQUEsVUFDUCxLQUFLO0FBQUEsVUFDTCxPQUFPLFdBQVc7QUFBQSxVQUNsQixPQUFPLFdBQVc7QUFBQSxVQUNsQixpQkFBaUIsU0FBUztBQUFBLFVBQzFCLGFBQWEsTUFBTTtBQUFBLFVBQ25CLEdBRUk7VUFDSixHQUFHLFdBQVcsVUFBVTtBQUFBLFVBQ3hCO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBR0EsYUFBYTtBQUFBLFVBQ2IscUJBQXFCO0FBQUEsUUFDL0IsQ0FBUztBQUFBLE1BQ1QsQ0FBTztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFpELFVBQUEsZUFBQTtBQUVBLFVBQUEsT0FBQTtBQUFBLE1BQW9CLFVBQUE7QUFBQSxNQUNBLFdBQUE7QUFBQSxNQUNBLGFBQUE7QUFBQSxRQUNBLE1BQUE7QUFBQSxNQUNJO0FBQUEsSUFDcEI7QUFFSixVQUFBQyxlQUFBQyxXQUFBLElBQUE7QUFDQSxVQUFBO0FBQUEsTUFBTSxPQUFBO0FBQUEsTUFDYyxNQUFBO0FBQUEsTUFDQTtBQUFBLE1BQ2hCO0FBQUEsSUFDQSxJQUFBRDtBQUdKLFVBQUEsY0FBQSxJQUFBLENBQUEsQ0FBQTtBQUVBLFVBQUEsTUFBQSxJQUFBLFNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
