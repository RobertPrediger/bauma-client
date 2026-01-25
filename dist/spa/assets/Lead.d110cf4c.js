import { ae as useSizeProps, a8 as createComponent, ag as useSize, ah as computed, bi as between, h, al as hMergeSlotSafely, g as getCurrentInstance, n as ref, aC as stop, am as stopAndPrevent, aT as client, ad as useDarkProps, af as useDark, b6 as vmIsDestroyed, bj as humanStorageSize, aP as provide, bk as uploaderKey, S as watch, at as onBeforeUnmount, X as isRef, bl as injectProp, bm as injectMultipleProps, bn as QSpinner, ak as QIcon, y as QBtn, bo as isObject, l as debug, aq as onBeforeMount, _ as _export_sfc, e as defineComponent, L as useI18n, bp as hooks, N as useAccountStore, O as useDataStore, R as storeToRefs, M as _, aL as onMounted, T as resolveDirective, q as openBlock, s as createBlock, w as withCtx, f as createVNode, G as unref, D as QCardSection, Y as createCommentVNode, x as QSeparator, U as QCard, I as QLayout, B as QHeader, H as QPageContainer, C as QPage, E as createBaseVNode, V as withDirectives, F as QInput, Q as QToolbar, Z as QScrollArea, $ as QList, a0 as QItem, a1 as QItemSection, v as createTextVNode, A as toDisplayString, a2 as createElementBlock, a3 as renderList, a4 as Fragment, a5 as QDialog, u as QToolbarTitle, z as QTooltip, bh as Notify, a as axios, a6 as QItemLabel, a7 as normalizeClass, be as ClosePopup, J as pushScopeId, K as popScopeId } from "./index.8f8ca0f3.js";
import { Q as QSelect } from "./QSelect.72364726.js";
import { Q as QTabs, a as QTab, b as QTabPanels, c as QTabPanel } from "./QTabPanels.46aa2434.js";
import { Q as QImg } from "./QImg.806212bd.js";
import { s as status, Q as QTimeline, a as send, b as QTimelineEntry } from "./Send.a0070519.js";
import { Q as QForm } from "./QForm.8c81555c.js";
import { an as AgGridVue } from "./AgGridVue.c15bd737.js";
import { g as globalView, N as NavBar } from "./NavBar.eb70e4d5.js";
import { G as Grid } from "./Grid.b4814aca.js";
import "./rtl.b51694b1.js";
const useCircularCommonProps = {
  ...useSizeProps,
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  color: String,
  centerColor: String,
  trackColor: String,
  fontSize: String,
  rounded: Boolean,
  thickness: {
    type: Number,
    default: 0.2,
    validator: (v) => v >= 0 && v <= 1
  },
  angle: {
    type: Number,
    default: 0
  },
  showValue: Boolean,
  reverse: Boolean,
  instantFeedback: Boolean
};
const radius = 50, diameter = 2 * radius, circumference = diameter * Math.PI, strokeDashArray = Math.round(circumference * 1e3) / 1e3;
var QCircularProgress = createComponent({
  name: "QCircularProgress",
  props: {
    ...useCircularCommonProps,
    value: {
      type: Number,
      default: 0
    },
    animationSpeed: {
      type: [String, Number],
      default: 600
    },
    indeterminate: Boolean
  },
  setup(props2, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const sizeStyle = useSize(props2);
    const svgStyle = computed(() => {
      const angle = ($q.lang.rtl === true ? -1 : 1) * props2.angle;
      return {
        transform: props2.reverse !== ($q.lang.rtl === true) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - angle}deg)` : `rotate3d(0, 0, 1, ${angle - 90}deg)`
      };
    });
    const circleStyle = computed(() => props2.instantFeedback !== true && props2.indeterminate !== true ? { transition: `stroke-dashoffset ${props2.animationSpeed}ms ease 0s, stroke ${props2.animationSpeed}ms ease` } : "");
    const viewBox = computed(() => diameter / (1 - props2.thickness / 2));
    const viewBoxAttr = computed(
      () => `${viewBox.value / 2} ${viewBox.value / 2} ${viewBox.value} ${viewBox.value}`
    );
    const normalized = computed(() => between(props2.value, props2.min, props2.max));
    const range = computed(() => props2.max - props2.min);
    const strokeWidth = computed(() => props2.thickness / 2 * viewBox.value);
    const strokeDashOffset = computed(() => {
      const dashRatio = (props2.max - normalized.value) / range.value;
      const dashGap = props2.rounded === true && normalized.value < props2.max && dashRatio < 0.25 ? strokeWidth.value / 2 * (1 - dashRatio / 0.25) : 0;
      return circumference * dashRatio + dashGap;
    });
    function getCircle({ thickness, offset, color, cls, rounded }) {
      return h("circle", {
        class: "q-circular-progress__" + cls + (color !== void 0 ? ` text-${color}` : ""),
        style: circleStyle.value,
        fill: "transparent",
        stroke: "currentColor",
        "stroke-width": thickness,
        "stroke-dasharray": strokeDashArray,
        "stroke-dashoffset": offset,
        "stroke-linecap": rounded,
        cx: viewBox.value,
        cy: viewBox.value,
        r: radius
      });
    }
    return () => {
      const svgChild = [];
      props2.centerColor !== void 0 && props2.centerColor !== "transparent" && svgChild.push(
        h("circle", {
          class: `q-circular-progress__center text-${props2.centerColor}`,
          fill: "currentColor",
          r: radius - strokeWidth.value / 2,
          cx: viewBox.value,
          cy: viewBox.value
        })
      );
      props2.trackColor !== void 0 && props2.trackColor !== "transparent" && svgChild.push(
        getCircle({
          cls: "track",
          thickness: strokeWidth.value,
          offset: 0,
          color: props2.trackColor
        })
      );
      svgChild.push(
        getCircle({
          cls: "circle",
          thickness: strokeWidth.value,
          offset: strokeDashOffset.value,
          color: props2.color,
          rounded: props2.rounded === true ? "round" : void 0
        })
      );
      const child = [
        h("svg", {
          class: "q-circular-progress__svg",
          style: svgStyle.value,
          viewBox: viewBoxAttr.value,
          "aria-hidden": "true"
        }, svgChild)
      ];
      props2.showValue === true && child.push(
        h("div", {
          class: "q-circular-progress__text absolute-full row flex-center content-center",
          style: { fontSize: props2.fontSize }
        }, slots.default !== void 0 ? slots.default() : [h("div", normalized.value)])
      );
      return h("div", {
        class: `q-circular-progress q-circular-progress--${props2.indeterminate === true ? "in" : ""}determinate`,
        style: sizeStyle.value,
        role: "progressbar",
        "aria-valuemin": props2.min,
        "aria-valuemax": props2.max,
        "aria-valuenow": props2.indeterminate === true ? void 0 : normalized.value
      }, hMergeSlotSafely(slots.internal, child));
    };
  }
});
function filterFiles(files, rejectedFiles, failedPropValidation, filterFn) {
  const acceptedFiles = [];
  files.forEach((file) => {
    if (filterFn(file) === true) {
      acceptedFiles.push(file);
    } else {
      rejectedFiles.push({ failedPropValidation, file });
    }
  });
  return acceptedFiles;
}
function stopAndPreventDrag(e) {
  e && e.dataTransfer && (e.dataTransfer.dropEffect = "copy");
  stopAndPrevent(e);
}
const useFileProps = {
  multiple: Boolean,
  accept: String,
  capture: String,
  maxFileSize: [Number, String],
  maxTotalSize: [Number, String],
  maxFiles: [Number, String],
  filter: Function
};
const useFileEmits = ["rejected"];
function useFile({
  editable,
  dnd,
  getFileInput,
  addFilesToQueue
}) {
  const { props: props2, emit, proxy } = getCurrentInstance();
  const dndRef = ref(null);
  const extensions = computed(() => props2.accept !== void 0 ? props2.accept.split(",").map((ext) => {
    ext = ext.trim();
    if (ext === "*") {
      return "*/";
    } else if (ext.endsWith("/*")) {
      ext = ext.slice(0, ext.length - 1);
    }
    return ext.toUpperCase();
  }) : null);
  const maxFilesNumber = computed(() => parseInt(props2.maxFiles, 10));
  const maxTotalSizeNumber = computed(() => parseInt(props2.maxTotalSize, 10));
  function pickFiles(e) {
    if (editable.value) {
      if (e !== Object(e)) {
        e = { target: null };
      }
      if (e.target !== null && e.target.matches('input[type="file"]') === true) {
        e.clientX === 0 && e.clientY === 0 && stop(e);
      } else {
        const input = getFileInput();
        input && input !== e.target && input.click(e);
      }
    }
  }
  function addFiles(files) {
    if (editable.value && files) {
      addFilesToQueue(null, files);
    }
  }
  function processFiles(e, filesToProcess, currentFileList, append) {
    let files = Array.from(filesToProcess || e.target.files);
    const rejectedFiles = [];
    const done = () => {
      if (rejectedFiles.length !== 0) {
        emit("rejected", rejectedFiles);
      }
    };
    if (props2.accept !== void 0 && extensions.value.indexOf("*/") === -1) {
      files = filterFiles(files, rejectedFiles, "accept", (file) => {
        return extensions.value.some((ext) => file.type.toUpperCase().startsWith(ext) || file.name.toUpperCase().endsWith(ext));
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (props2.maxFileSize !== void 0) {
      const maxFileSize = parseInt(props2.maxFileSize, 10);
      files = filterFiles(files, rejectedFiles, "max-file-size", (file) => {
        return file.size <= maxFileSize;
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (props2.multiple !== true && files.length !== 0) {
      files = [files[0]];
    }
    files.forEach((file) => {
      file.__key = file.webkitRelativePath + file.lastModified + file.name + file.size;
    });
    if (append === true) {
      const filenameMap = currentFileList.map((entry) => entry.__key);
      files = filterFiles(files, rejectedFiles, "duplicate", (file) => {
        return filenameMap.includes(file.__key) === false;
      });
    }
    if (files.length === 0) {
      return done();
    }
    if (props2.maxTotalSize !== void 0) {
      let size = append === true ? currentFileList.reduce((total, file) => total + file.size, 0) : 0;
      files = filterFiles(files, rejectedFiles, "max-total-size", (file) => {
        size += file.size;
        return size <= maxTotalSizeNumber.value;
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (typeof props2.filter === "function") {
      const filteredFiles = props2.filter(files);
      files = filterFiles(files, rejectedFiles, "filter", (file) => {
        return filteredFiles.includes(file);
      });
    }
    if (props2.maxFiles !== void 0) {
      let filesNumber = append === true ? currentFileList.length : 0;
      files = filterFiles(files, rejectedFiles, "max-files", () => {
        filesNumber++;
        return filesNumber <= maxFilesNumber.value;
      });
      if (files.length === 0) {
        return done();
      }
    }
    done();
    if (files.length !== 0) {
      return files;
    }
  }
  function onDragover(e) {
    stopAndPreventDrag(e);
    dnd.value !== true && (dnd.value = true);
  }
  function onDragleave(e) {
    stopAndPrevent(e);
    const gone = e.relatedTarget !== null || client.is.safari !== true ? e.relatedTarget !== dndRef.value : document.elementsFromPoint(e.clientX, e.clientY).includes(dndRef.value) === false;
    gone === true && (dnd.value = false);
  }
  function onDrop(e) {
    stopAndPreventDrag(e);
    const files = e.dataTransfer.files;
    if (files.length !== 0) {
      addFilesToQueue(null, files);
    }
    dnd.value = false;
  }
  function getDndNode(type) {
    if (dnd.value === true) {
      return h("div", {
        ref: dndRef,
        class: `q-${type}__dnd absolute-full`,
        onDragenter: stopAndPreventDrag,
        onDragover: stopAndPreventDrag,
        onDragleave,
        onDrop
      });
    }
  }
  Object.assign(proxy, { pickFiles, addFiles });
  return {
    pickFiles,
    addFiles,
    onDragover,
    onDragleave,
    processFiles,
    getDndNode,
    maxFilesNumber,
    maxTotalSizeNumber
  };
}
function getProgressLabel(p) {
  return (p * 100).toFixed(2) + "%";
}
const coreProps = {
  ...useDarkProps,
  ...useFileProps,
  label: String,
  color: String,
  textColor: String,
  square: Boolean,
  flat: Boolean,
  bordered: Boolean,
  noThumbnails: Boolean,
  autoUpload: Boolean,
  hideUploadBtn: Boolean,
  disable: Boolean,
  readonly: Boolean
};
const coreEmits = [
  ...useFileEmits,
  "start",
  "finish",
  "added",
  "removed"
];
function getRenderer(getPlugin, expose) {
  const vm = getCurrentInstance();
  const { props: props2, slots, emit, proxy } = vm;
  const { $q } = proxy;
  const isDark = useDark(props2, $q);
  function updateFileStatus(file, status2, uploadedSize) {
    file.__status = status2;
    if (status2 === "idle") {
      file.__uploaded = 0;
      file.__progress = 0;
      file.__sizeLabel = humanStorageSize(file.size);
      file.__progressLabel = "0.00%";
      return;
    }
    if (status2 === "failed") {
      proxy.$forceUpdate();
      return;
    }
    file.__uploaded = status2 === "uploaded" ? file.size : uploadedSize;
    file.__progress = status2 === "uploaded" ? 1 : Math.min(0.9999, file.__uploaded / file.size);
    file.__progressLabel = getProgressLabel(file.__progress);
    proxy.$forceUpdate();
  }
  const editable = computed(() => props2.disable !== true && props2.readonly !== true);
  const dnd = ref(false);
  const rootRef = ref(null);
  const inputRef = ref(null);
  const state = {
    files: ref([]),
    queuedFiles: ref([]),
    uploadedFiles: ref([]),
    uploadedSize: ref(0),
    updateFileStatus,
    isAlive: () => vmIsDestroyed(vm) === false
  };
  const {
    pickFiles,
    addFiles,
    onDragover,
    onDragleave,
    processFiles,
    getDndNode,
    maxFilesNumber,
    maxTotalSizeNumber
  } = useFile({ editable, dnd, getFileInput, addFilesToQueue });
  Object.assign(state, getPlugin({
    props: props2,
    slots,
    emit,
    helpers: state,
    exposeApi: (obj) => {
      Object.assign(state, obj);
    }
  }));
  if (state.isBusy === void 0) {
    state.isBusy = ref(false);
  }
  const uploadSize = ref(0);
  const uploadProgress = computed(() => uploadSize.value === 0 ? 0 : state.uploadedSize.value / uploadSize.value);
  const uploadProgressLabel = computed(() => getProgressLabel(uploadProgress.value));
  const uploadSizeLabel = computed(() => humanStorageSize(uploadSize.value));
  const canAddFiles = computed(
    () => editable.value === true && state.isUploading.value !== true && (props2.multiple === true || state.queuedFiles.value.length === 0) && (props2.maxFiles === void 0 || state.files.value.length < maxFilesNumber.value) && (props2.maxTotalSize === void 0 || uploadSize.value < maxTotalSizeNumber.value)
  );
  const canUpload = computed(
    () => editable.value === true && state.isBusy.value !== true && state.isUploading.value !== true && state.queuedFiles.value.length !== 0
  );
  provide(uploaderKey, renderInput);
  const classes = computed(
    () => "q-uploader column no-wrap" + (isDark.value === true ? " q-uploader--dark q-dark" : "") + (props2.bordered === true ? " q-uploader--bordered" : "") + (props2.square === true ? " q-uploader--square no-border-radius" : "") + (props2.flat === true ? " q-uploader--flat no-shadow" : "") + (props2.disable === true ? " disabled q-uploader--disable" : "") + (dnd.value === true ? " q-uploader--dnd" : "")
  );
  const colorClass = computed(
    () => "q-uploader__header" + (props2.color !== void 0 ? ` bg-${props2.color}` : "") + (props2.textColor !== void 0 ? ` text-${props2.textColor}` : "")
  );
  watch(state.isUploading, (newVal, oldVal) => {
    if (oldVal === false && newVal === true) {
      emit("start");
    } else if (oldVal === true && newVal === false) {
      emit("finish");
    }
  });
  function reset() {
    if (props2.disable === false) {
      state.abort();
      state.uploadedSize.value = 0;
      uploadSize.value = 0;
      revokeImgURLs();
      state.files.value = [];
      state.queuedFiles.value = [];
      state.uploadedFiles.value = [];
    }
  }
  function removeUploadedFiles() {
    if (props2.disable === false) {
      batchRemoveFiles(["uploaded"], () => {
        state.uploadedFiles.value = [];
      });
    }
  }
  function removeQueuedFiles() {
    batchRemoveFiles(["idle", "failed"], ({ size }) => {
      uploadSize.value -= size;
      state.queuedFiles.value = [];
    });
  }
  function batchRemoveFiles(statusList, cb) {
    if (props2.disable === true) {
      return;
    }
    const removed = {
      files: [],
      size: 0
    };
    const localFiles = state.files.value.filter((f) => {
      if (statusList.indexOf(f.__status) === -1) {
        return true;
      }
      removed.size += f.size;
      removed.files.push(f);
      f.__img !== void 0 && window.URL.revokeObjectURL(f.__img.src);
      return false;
    });
    if (removed.files.length !== 0) {
      state.files.value = localFiles;
      cb(removed);
      emit("removed", removed.files);
    }
  }
  function removeFile(file) {
    if (props2.disable) {
      return;
    }
    if (file.__status === "uploaded") {
      state.uploadedFiles.value = state.uploadedFiles.value.filter((f) => f.__key !== file.__key);
    } else if (file.__status === "uploading") {
      file.__abort();
    } else {
      uploadSize.value -= file.size;
    }
    state.files.value = state.files.value.filter((f) => {
      if (f.__key !== file.__key) {
        return true;
      }
      f.__img !== void 0 && window.URL.revokeObjectURL(f.__img.src);
      return false;
    });
    state.queuedFiles.value = state.queuedFiles.value.filter((f) => f.__key !== file.__key);
    emit("removed", [file]);
  }
  function revokeImgURLs() {
    state.files.value.forEach((f) => {
      f.__img !== void 0 && window.URL.revokeObjectURL(f.__img.src);
    });
  }
  function getFileInput() {
    return inputRef.value || rootRef.value.getElementsByClassName("q-uploader__input")[0];
  }
  function addFilesToQueue(e, fileList) {
    const localFiles = processFiles(e, fileList, state.files.value, true);
    const fileInput = getFileInput();
    if (fileInput !== void 0 && fileInput !== null) {
      fileInput.value = "";
    }
    if (localFiles === void 0) {
      return;
    }
    localFiles.forEach((file) => {
      state.updateFileStatus(file, "idle");
      uploadSize.value += file.size;
      if (props2.noThumbnails !== true && file.type.toUpperCase().startsWith("IMAGE")) {
        const img = new Image();
        img.src = window.URL.createObjectURL(file);
        file.__img = img;
      }
    });
    state.files.value = state.files.value.concat(localFiles);
    state.queuedFiles.value = state.queuedFiles.value.concat(localFiles);
    emit("added", localFiles);
    props2.autoUpload === true && state.upload();
  }
  function upload() {
    canUpload.value === true && state.upload();
  }
  function getBtn(show, icon, fn) {
    if (show === true) {
      const data = {
        type: "a",
        key: icon,
        icon: $q.iconSet.uploader[icon],
        flat: true,
        dense: true
      };
      let child = void 0;
      if (icon === "add") {
        data.onClick = pickFiles;
        child = renderInput;
      } else {
        data.onClick = fn;
      }
      return h(QBtn, data, child);
    }
  }
  function renderInput() {
    return h("input", {
      ref: inputRef,
      class: "q-uploader__input overflow-hidden absolute-full",
      tabindex: -1,
      type: "file",
      title: "",
      accept: props2.accept,
      multiple: props2.multiple === true ? "multiple" : void 0,
      capture: props2.capture,
      onMousedown: stop,
      onClick: pickFiles,
      onChange: addFilesToQueue
    });
  }
  function getHeader() {
    if (slots.header !== void 0) {
      return slots.header(publicApi);
    }
    return [
      h("div", {
        class: "q-uploader__header-content column"
      }, [
        h("div", {
          class: "flex flex-center no-wrap q-gutter-xs"
        }, [
          getBtn(state.queuedFiles.value.length !== 0, "removeQueue", removeQueuedFiles),
          getBtn(state.uploadedFiles.value.length !== 0, "removeUploaded", removeUploadedFiles),
          state.isUploading.value === true ? h(QSpinner, { class: "q-uploader__spinner" }) : null,
          h("div", { class: "col column justify-center" }, [
            props2.label !== void 0 ? h("div", { class: "q-uploader__title" }, [props2.label]) : null,
            h("div", { class: "q-uploader__subtitle" }, [
              uploadSizeLabel.value + " / " + uploadProgressLabel.value
            ])
          ]),
          getBtn(canAddFiles.value, "add"),
          getBtn(props2.hideUploadBtn === false && canUpload.value === true, "upload", state.upload),
          getBtn(state.isUploading.value, "clear", state.abort)
        ])
      ])
    ];
  }
  function getList() {
    if (slots.list !== void 0) {
      return slots.list(publicApi);
    }
    return state.files.value.map((file) => h("div", {
      key: file.__key,
      class: "q-uploader__file relative-position" + (props2.noThumbnails !== true && file.__img !== void 0 ? " q-uploader__file--img" : "") + (file.__status === "failed" ? " q-uploader__file--failed" : file.__status === "uploaded" ? " q-uploader__file--uploaded" : ""),
      style: props2.noThumbnails !== true && file.__img !== void 0 ? { backgroundImage: 'url("' + file.__img.src + '")' } : null
    }, [
      h("div", {
        class: "q-uploader__file-header row flex-center no-wrap"
      }, [
        file.__status === "failed" ? h(QIcon, {
          class: "q-uploader__file-status",
          name: $q.iconSet.type.negative,
          color: "negative"
        }) : null,
        h("div", { class: "q-uploader__file-header-content col" }, [
          h("div", { class: "q-uploader__title" }, [file.name]),
          h("div", {
            class: "q-uploader__subtitle row items-center no-wrap"
          }, [
            file.__sizeLabel + " / " + file.__progressLabel
          ])
        ]),
        file.__status === "uploading" ? h(QCircularProgress, {
          value: file.__progress,
          min: 0,
          max: 1,
          indeterminate: file.__progress === 0
        }) : h(QBtn, {
          round: true,
          dense: true,
          flat: true,
          icon: $q.iconSet.uploader[file.__status === "uploaded" ? "done" : "clear"],
          onClick: () => {
            removeFile(file);
          }
        })
      ])
    ]));
  }
  onBeforeUnmount(() => {
    state.isUploading.value === true && state.abort();
    state.files.value.length !== 0 && revokeImgURLs();
  });
  const publicApi = {};
  for (const key in state) {
    if (isRef(state[key]) === true) {
      injectProp(publicApi, key, () => state[key].value);
    } else {
      publicApi[key] = state[key];
    }
  }
  Object.assign(publicApi, {
    upload,
    reset,
    removeUploadedFiles,
    removeQueuedFiles,
    removeFile,
    pickFiles,
    addFiles
  });
  injectMultipleProps(publicApi, {
    canAddFiles: () => canAddFiles.value,
    canUpload: () => canUpload.value,
    uploadSizeLabel: () => uploadSizeLabel.value,
    uploadProgressLabel: () => uploadProgressLabel.value
  });
  expose({
    ...state,
    upload,
    reset,
    removeUploadedFiles,
    removeQueuedFiles,
    removeFile,
    pickFiles,
    addFiles,
    canAddFiles,
    canUpload,
    uploadSizeLabel,
    uploadProgressLabel
  });
  return () => {
    const children = [
      h("div", { class: colorClass.value }, getHeader()),
      h("div", { class: "q-uploader__list scroll" }, getList()),
      getDndNode("uploader")
    ];
    state.isBusy.value === true && children.push(
      h("div", {
        class: "q-uploader__overlay absolute-full flex flex-center"
      }, [h(QSpinner)])
    );
    const data = { ref: rootRef, class: classes.value };
    if (canAddFiles.value === true) {
      Object.assign(data, { onDragover, onDragleave });
    }
    return h("div", data, children);
  };
}
const trueFn = () => true;
function getEmitsObject(emitsArray) {
  const emitsObject = {};
  emitsArray.forEach((val) => {
    emitsObject[val] = trueFn;
  });
  return emitsObject;
}
const coreEmitsObject = getEmitsObject(coreEmits);
var createUploaderComponent = ({ name, props: props2, emits: emits2, injectPlugin: injectPlugin2 }) => createComponent({
  name,
  props: {
    ...coreProps,
    ...props2
  },
  emits: isObject(emits2) === true ? { ...coreEmitsObject, ...emits2 } : [...coreEmits, ...emits2],
  setup(_2, { expose }) {
    return getRenderer(injectPlugin2, expose);
  }
});
function getFn(prop) {
  return typeof prop === "function" ? prop : () => prop;
}
const props = {
  url: [Function, String],
  method: {
    type: [Function, String],
    default: "POST"
  },
  fieldName: {
    type: [Function, String],
    default: () => {
      return (file) => file.name;
    }
  },
  headers: [Function, Array],
  formFields: [Function, Array],
  withCredentials: [Function, Boolean],
  sendRaw: [Function, Boolean],
  batch: [Function, Boolean],
  factory: Function
};
const emits = ["factoryFailed", "uploaded", "failed", "uploading"];
function injectPlugin({ props: props2, emit, helpers }) {
  const xhrs = ref([]);
  const promises = ref([]);
  const workingThreads = ref(0);
  const xhrProps = computed(() => ({
    url: getFn(props2.url),
    method: getFn(props2.method),
    headers: getFn(props2.headers),
    formFields: getFn(props2.formFields),
    fieldName: getFn(props2.fieldName),
    withCredentials: getFn(props2.withCredentials),
    sendRaw: getFn(props2.sendRaw),
    batch: getFn(props2.batch)
  }));
  const isUploading = computed(() => workingThreads.value > 0);
  const isBusy = computed(() => promises.value.length !== 0);
  let abortPromises;
  function abort() {
    xhrs.value.forEach((x) => {
      x.abort();
    });
    if (promises.value.length !== 0) {
      abortPromises = true;
    }
  }
  function upload() {
    const queue = helpers.queuedFiles.value.slice(0);
    helpers.queuedFiles.value = [];
    if (xhrProps.value.batch(queue)) {
      runFactory(queue);
    } else {
      queue.forEach((file) => {
        runFactory([file]);
      });
    }
  }
  function runFactory(files) {
    workingThreads.value++;
    if (typeof props2.factory !== "function") {
      performUpload(files, {});
      return;
    }
    const res = props2.factory(files);
    if (!res) {
      emit(
        "factoryFailed",
        new Error("QUploader: factory() does not return properly"),
        files
      );
      workingThreads.value--;
    } else if (typeof res.catch === "function" && typeof res.then === "function") {
      promises.value.push(res);
      const failed = (err) => {
        if (helpers.isAlive() === true) {
          promises.value = promises.value.filter((p) => p !== res);
          if (promises.value.length === 0) {
            abortPromises = false;
          }
          helpers.queuedFiles.value = helpers.queuedFiles.value.concat(files);
          files.forEach((f) => {
            helpers.updateFileStatus(f, "failed");
          });
          emit("factoryFailed", err, files);
          workingThreads.value--;
        }
      };
      res.then((factory) => {
        if (abortPromises === true) {
          failed(new Error("Aborted"));
        } else if (helpers.isAlive() === true) {
          promises.value = promises.value.filter((p) => p !== res);
          performUpload(files, factory);
        }
      }).catch(failed);
    } else {
      performUpload(files, res || {});
    }
  }
  function performUpload(files, factory) {
    const form = new FormData(), xhr = new XMLHttpRequest();
    const getProp = (name, arg) => {
      return factory[name] !== void 0 ? getFn(factory[name])(arg) : xhrProps.value[name](arg);
    };
    const url = getProp("url", files);
    if (!url) {
      console.error("q-uploader: invalid or no URL specified");
      workingThreads.value--;
      return;
    }
    const fields = getProp("formFields", files);
    fields !== void 0 && fields.forEach((field) => {
      form.append(field.name, field.value);
    });
    let uploadIndex = 0, uploadIndexSize = 0, localUploadedSize = 0, maxUploadSize = 0, aborted;
    xhr.upload.addEventListener("progress", (e) => {
      if (aborted === true) {
        return;
      }
      const loaded = Math.min(maxUploadSize, e.loaded);
      helpers.uploadedSize.value += loaded - localUploadedSize;
      localUploadedSize = loaded;
      let size = localUploadedSize - uploadIndexSize;
      for (let i = uploadIndex; size > 0 && i < files.length; i++) {
        const file = files[i], uploaded = size > file.size;
        if (uploaded) {
          size -= file.size;
          uploadIndex++;
          uploadIndexSize += file.size;
          helpers.updateFileStatus(file, "uploading", file.size);
        } else {
          helpers.updateFileStatus(file, "uploading", size);
          return;
        }
      }
    }, false);
    xhr.onreadystatechange = () => {
      if (xhr.readyState < 4) {
        return;
      }
      if (xhr.status && xhr.status < 400) {
        helpers.uploadedFiles.value = helpers.uploadedFiles.value.concat(files);
        files.forEach((f) => {
          helpers.updateFileStatus(f, "uploaded");
        });
        emit("uploaded", { files, xhr });
      } else {
        aborted = true;
        helpers.uploadedSize.value -= localUploadedSize;
        helpers.queuedFiles.value = helpers.queuedFiles.value.concat(files);
        files.forEach((f) => {
          helpers.updateFileStatus(f, "failed");
        });
        emit("failed", { files, xhr });
      }
      workingThreads.value--;
      xhrs.value = xhrs.value.filter((x) => x !== xhr);
    };
    xhr.open(
      getProp("method", files),
      url
    );
    if (getProp("withCredentials", files) === true) {
      xhr.withCredentials = true;
    }
    const headers = getProp("headers", files);
    headers !== void 0 && headers.forEach((head) => {
      xhr.setRequestHeader(head.name, head.value);
    });
    const sendRaw = getProp("sendRaw", files);
    files.forEach((file) => {
      helpers.updateFileStatus(file, "uploading", 0);
      if (sendRaw !== true) {
        form.append(getProp("fieldName", file), file, file.name);
      }
      file.xhr = xhr;
      file.__abort = () => {
        xhr.abort();
      };
      maxUploadSize += file.size;
    });
    emit("uploading", { files, xhr });
    xhrs.value.push(xhr);
    if (sendRaw === true) {
      xhr.send(new Blob(files));
    } else {
      xhr.send(form);
    }
  }
  return {
    isUploading,
    isBusy,
    abort,
    upload
  };
}
var xhrUploaderPlugin = {
  name: "QUploader",
  props,
  emits,
  injectPlugin
};
var QUploader = createUploaderComponent(xhrUploaderPlugin);
const log = debug("app:gridlinkbox");
var GridLinkbox = {
  name: "GridLinkbox",
  template: '<q-toggle v-model="val" dense @input="click" />',
  setup(props2, params) {
    const val = ref();
    function click() {
      log("click", this.value, params.colDef.field, params.value, params.data);
      params.data.link = val.value;
      params.context.setValue(params.colDef.field, val.value, params.data);
    }
    onBeforeMount(() => {
      this.value = params.value;
    });
    return {
      val,
      click
    };
  }
};
var Lead_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-e93e4484"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("input", {
  type: "submit",
  style: { "position": "absolute", "left": "-9999px" }
}, null, -1));
const _hoisted_2 = { class: "row q-col-gutter-md" };
const _hoisted_3 = { class: "col-3" };
const _hoisted_4 = { class: "row" };
const _hoisted_5 = { class: "col" };
const _hoisted_6 = { class: "text-h6" };
const _hoisted_7 = { class: "row" };
const _hoisted_8 = { class: "col" };
const _hoisted_9 = { class: "text-h6" };
const _hoisted_10 = { class: "col-6" };
const _hoisted_11 = { class: "row q-col-gutter-md" };
const _hoisted_12 = { class: "col-6" };
const _hoisted_13 = { class: "row q-col-gutter-md" };
const _hoisted_14 = { class: "col-6" };
const _hoisted_15 = { class: "col-6" };
const _hoisted_16 = {
  key: 0,
  class: "row q-col-gutter-xs"
};
const _hoisted_17 = ["onClick"];
const _hoisted_18 = { class: "row q-col-gutter-md" };
const _hoisted_19 = { class: "col-8" };
const _hoisted_20 = { class: "col-4" };
const _hoisted_21 = { class: "col-3 back-grey" };
const _hoisted_22 = { class: "row q-col-gutter-md" };
const _hoisted_23 = { class: "col q-px-lg q-pb-md" };
const _hoisted_24 = { class: "text-h6" };
const _sfc_main = defineComponent({
  __name: "Lead",
  setup(__props) {
    const log2 = debug("app:lead");
    const { t } = useI18n();
    hooks.locale("de");
    const init = {
      collName: "lead",
      stateName: "lead",
      defaultForm: {
        lead: {
          anrede: "",
          firstName: "",
          surName: "",
          email: "",
          telefon: "",
          strasse: "",
          ort: "",
          info: ""
        },
        mail: {},
        infos: {},
        fahrzeug: {},
        sales: {
          _id: "",
          krz: "",
          firstName: "",
          surName: ""
        },
        hist: []
      }
    };
    const globalView$1 = globalView(init);
    const {
      store: leadStore,
      data: lead,
      doSave,
      form
    } = globalView$1;
    const accountStore = useAccountStore();
    const autosellerStore = useDataStore("autoseller", "autoseller");
    const userStore = useDataStore("user", "user");
    const carinfoStore = useDataStore("carinfo", "carInfo");
    const categoryStore = useDataStore("categories", "categories");
    const companyStore = useDataStore("companies", "companies");
    const portalStore = useDataStore("portals", "portal");
    storeToRefs(accountStore);
    const { data: allauto } = storeToRefs(autosellerStore);
    const { data: users } = storeToRefs(userStore);
    const { data: carinfos } = storeToRefs(carinfoStore);
    const { data: categories } = storeToRefs(categoryStore);
    storeToRefs(companyStore);
    storeToRefs(portalStore);
    const frameworkComponents = {
      checkboxRenderer: GridLinkbox
    }, leadGrid = ref({
      componentParent: parent,
      columnTypes: {
        stateColumn: {
          valueGetter(params) {
            const state = _.get(params, "data.state");
            return _.get(params, `context.stateList.${state}.label`, state);
          }
        },
        salesColumn: {
          valueGetter(params) {
            return params.data && params.data.sales && params.data.sales.surName && `${params.data.sales.firstName} ${params.data.sales.surName}` || "";
          }
        },
        categoryColumn: {
          valueGetter(params) {
            const category = _.get(params, "data.category", "0");
            return _.get(params, `context.categories.${category}.desc`, category);
          }
        }
      },
      sort: {
        date: -1
      }
    }), linkGrid = ref({
      rowModelType: "clientSide",
      columnTypes: {
        salesColumn: {
          valueGetter(params) {
            return params.data && params.data.sales && params.data.sales.surName && `${params.data.sales.firstName} ${params.data.sales.surName}` || "";
          }
        },
        categoryColumn: {
          valueGetter(params) {
            return params.data && params.data.category && params.context.categories[params.data.category] || "";
          }
        }
      },
      columnDefs: [
        {
          field: "link",
          headerName: "Link",
          width: 100,
          cellClass: "cellCenter",
          cellRenderer: "checkboxRenderer"
        },
        {
          field: "date",
          headerName: t("messages.ColDate"),
          cellClass: "cellCenter"
        },
        {
          field: "fahrzeug.model",
          headerName: t("messages.ColModel")
        },
        {
          field: "sales",
          headerName: t("messages.LabelSales"),
          type: "salesColumn"
        },
        {
          field: "lead.firstName",
          headerName: t("messages.ColFirstName"),
          width: 100
        },
        {
          field: "lead.surName",
          headerName: t("messages.ColSurName")
        },
        {
          field: "lead.email",
          headerName: t("messages.ColMail")
        },
        {
          field: "lead.telefon",
          headerName: t("messages.ColPhone")
        }
      ],
      rowData: null,
      context: {
        type: "details",
        componentParent: parent,
        setValue
      }
    }), stateList = status(t), send$1 = send();
    const tab = ref("contact"), uploader = ref(null), carList = ref([]), links = ref([]), autoFilter = ref([]), showLink = ref(false), showImage = ref(false), image = ref({}), leadButtons = ref([
      {
        label: "LabelLink",
        link: "linkLead",
        icon: "fas fa-link"
      }
    ]), showGrid = ref(false), showForm = ref(false);
    ref([]);
    function setValue(name, value, data) {
      log2("setValue", name, value, data);
    }
    async function afterSelect(record) {
      var _a;
      log2("hook beforeSelect", record);
      if (_.isArray(record.hist))
        record.hist = _.map(record.hist, (item, index) => {
          item.key = index;
          switch (item.target) {
            case "in":
              item.icon = "fas fa-sign-in-alt";
              item.color = "blue-10";
              break;
            case "out":
              item.icon = "fas fa-sign-out-alt";
              item.color = "green-8";
              break;
            case "intern":
              item.icon = "fas fa-lock";
              item.color = "orange";
              break;
            default:
              item.icon = "fas fa-circle";
              item.color = "blue-10";
              break;
          }
          return item;
        });
      (_a = uploader.value) == null ? void 0 : _a.reset();
      showForm.value = true;
      return record;
    }
    function onFormHide() {
      showForm.value = false;
    }
    function description() {
      if (form.value.description)
        return _.map(form.value.description.split("|"), (item) => {
          item = item.trim();
          const index = item.indexOf(" "), key = item.substr(0, index), text = item.substr(index + 1);
          return {
            key,
            text
          };
        });
      else
        return [];
    }
    function subGridReady({ gridOpt }) {
      gridOpt.context = {
        stateList: _.keyBy(stateList, "value"),
        categories: _.keyBy(categories.value, "name")
      };
    }
    function clickButton(link) {
      log2("clickButton", link);
      switch (link) {
        case "linkLead":
          if (!form._id) {
            Notify.create({
              message: t("messages.TextNoRecord"),
              color: "negative",
              icon: "report_problem",
              position: "top-right",
              timeout: 3e3
            });
            return;
          }
          linkLead(form);
          break;
      }
    }
    async function linkLead(data) {
      const resp = await axios.post("/data/lead", { filter: { gfz: data.gfz } });
      links.value = resp.data.data;
      for (const item of links.value) {
        item.link = item._id === form.value._id;
      }
      showLink.value = true;
    }
    async function saveLink() {
      log2("save link", links.value);
      links.value = _.filter(links.value, (item) => item.link);
      try {
        await axios.post("/custom/linkLead", { links: links.value, main: form.value._id });
        Notify.create({
          message: parent.$t("messages.TextLinkSaved"),
          color: "green-9",
          icon: "done",
          position: "top-right",
          timeout: 1e3
        });
      } catch (err) {
        Notify.create({
          message: err,
          color: "negative",
          icon: "report_problem",
          position: "top-right",
          timeout: 5e3
        });
      }
    }
    function showImg(img) {
      showImage.value = true;
      image.value = img;
    }
    function showDoc(item) {
      Notify.create({
        message: "Dokument wird geladen ...",
        color: "green-9",
        icon: "done",
        position: "top-right",
        timeout: 1e3
      });
      window.open(`/opendoc/${item.memento.baseName}?name=${item.memento.name}`, "opendoc");
    }
    function finishFile() {
      uploader.value && uploader.value.reset();
    }
    onMounted(async () => {
      await userStore.getStore();
      await carinfoStore.getStore();
      await categoryStore.getStore();
      await companyStore.getStore();
      await leadStore.registerAction({ action: "afterSelect", target: "Lead", func: afterSelect });
      autoFilter.value = allauto.value;
      carinfos.value = _.keyBy(carinfos.value, "key");
      showGrid.value = true;
    });
    return (_ctx, _cache) => {
      const _directive_t = resolveDirective("t");
      return openBlock(), createBlock(QPage, { class: "q-pa-sm" }, {
        default: withCtx(() => [
          createVNode(NavBar, {
            title: _ctx.$t("messages.LabelLead"),
            icon: "fas fa-address-card",
            stateName: "leads",
            xfuncs: "navbarSubmenu",
            state: unref(leadStore),
            locButtons: unref(leadButtons),
            onClickButton: clickButton,
            type: "window"
          }, null, 8, ["title", "state", "locButtons"]),
          createVNode(QCard, null, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  unref(showGrid) ? (openBlock(), createBlock(Grid, {
                    key: 0,
                    gridName: "leadGrid",
                    gridOptions: unref(leadGrid),
                    stateName: "leads",
                    state: unref(leadStore),
                    onSubGridReady: subGridReady,
                    type: "server",
                    orientation: "portrait"
                  }, null, 8, ["gridOptions", "state"])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(QSeparator)
            ]),
            _: 1
          }),
          createVNode(QDialog, {
            modelValue: unref(showForm),
            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => isRef(showForm) ? showForm.value = $event : null),
            onHide: onFormHide,
            "no-backdrop-dismiss": ""
          }, {
            default: withCtx(() => [
              createVNode(QLayout, {
                container: "",
                view: "lHh lpR lff",
                class: "shadow-2 rounded detailWindow"
              }, {
                default: withCtx(() => [
                  createVNode(QHeader, {
                    elevated: "",
                    class: "bg-primary text-white",
                    "height-hint": "98"
                  }, {
                    default: withCtx(() => [
                      createVNode(NavBar, {
                        title: _ctx.$t("messages.LabelLead"),
                        icon: "open_with",
                        stateName: "leads",
                        xfuncs: "navbarSubmenu",
                        state: unref(leadStore),
                        onClickButton: clickButton,
                        type: "dialog",
                        onClose: onFormHide
                      }, null, 8, ["title", "state"])
                    ]),
                    _: 1
                  }),
                  createVNode(QPageContainer, null, {
                    default: withCtx(() => [
                      createVNode(QPage, { class: "back-grey" }, {
                        default: withCtx(() => [
                          createVNode(QForm, { onSubmit: unref(doSave) }, {
                            default: withCtx(() => [
                              _hoisted_1,
                              createVNode(QCardSection, null, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_2, [
                                    createBaseVNode("div", _hoisted_3, [
                                      createBaseVNode("div", _hoisted_4, [
                                        createBaseVNode("div", _hoisted_5, [
                                          withDirectives(createBaseVNode("div", _hoisted_6, null, 512), [
                                            [_directive_t, "messages.LabelLead"]
                                          ]),
                                          createVNode(QInput, {
                                            modelValue: unref(form).lead.firstName,
                                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).lead.firstName = $event),
                                            "lazy-rules": "",
                                            dense: "",
                                            outlined: "",
                                            "bg-color": "white",
                                            label: _ctx.$t("messages.ColFirstname"),
                                            hint: ""
                                          }, null, 8, ["modelValue", "label"]),
                                          createVNode(QInput, {
                                            name: "surName",
                                            modelValue: unref(form).lead.surName,
                                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).lead.surName = $event),
                                            "lazy-rules": "",
                                            dense: "",
                                            outlined: "",
                                            "bg-color": "white",
                                            label: _ctx.$t("messages.ColSurname"),
                                            hint: ""
                                          }, null, 8, ["modelValue", "label"]),
                                          createVNode(QInput, {
                                            name: "email",
                                            modelValue: unref(form).lead.email,
                                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).lead.email = $event),
                                            "lazy-rules": "",
                                            dense: "",
                                            outlined: "",
                                            "bg-color": "white",
                                            label: _ctx.$t("messages.ColMail"),
                                            hint: ""
                                          }, null, 8, ["modelValue", "label"]),
                                          createVNode(QInput, {
                                            name: "telefon",
                                            modelValue: unref(form).lead.telefon,
                                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).lead.telefon = $event),
                                            "lazy-rules": "",
                                            dense: "",
                                            outlined: "",
                                            "bg-color": "white",
                                            label: _ctx.$t("messages.ColPhone"),
                                            hint: ""
                                          }, null, 8, ["modelValue", "label"])
                                        ])
                                      ]),
                                      createBaseVNode("div", _hoisted_7, [
                                        createBaseVNode("div", _hoisted_8, [
                                          withDirectives(createBaseVNode("div", _hoisted_9, null, 512), [
                                            [_directive_t, "messages.LabelCar"]
                                          ]),
                                          createVNode(QInput, {
                                            name: "date",
                                            modelValue: unref(form).date,
                                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(form).date = $event),
                                            "lazy-rules": "",
                                            dense: "",
                                            ref: "leads",
                                            outlined: "",
                                            "bg-color": "white",
                                            disable: "",
                                            label: _ctx.$t("messages.LabelOrderFrom"),
                                            hint: ""
                                          }, null, 8, ["modelValue", "label"]),
                                          createVNode(QInput, {
                                            name: "gfz",
                                            modelValue: unref(form).gfz,
                                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(form).gfz = $event),
                                            "lazy-rules": "",
                                            dense: "",
                                            outlined: "",
                                            "options-dense": true,
                                            "bg-color": "white",
                                            disable: "",
                                            hint: "",
                                            label: _ctx.$t("messages.LabelGfzNumber")
                                          }, null, 8, ["modelValue", "label"]),
                                          createVNode(QInput, {
                                            name: "branch",
                                            modelValue: unref(form).fahrzeug.branch,
                                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(form).fahrzeug.branch = $event),
                                            "lazy-rules": "",
                                            dense: "",
                                            outlined: "",
                                            "bg-color": "white",
                                            disable: "",
                                            label: _ctx.$t("messages.LabelBranch"),
                                            hint: ""
                                          }, null, 8, ["modelValue", "label"]),
                                          createVNode(QSelect, {
                                            name: "sales",
                                            modelValue: unref(form).sales,
                                            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(form).sales = $event),
                                            "lazy-rules": "",
                                            dense: "",
                                            outlined: "",
                                            "options-dense": "",
                                            "bg-color": "white",
                                            disable: "",
                                            hint: "",
                                            label: _ctx.$t("messages.LabelSales"),
                                            options: unref(users),
                                            "option-value": "_id",
                                            "option-label": (opt) => opt.surName ? `${opt.surName}, ${opt.firstName}` : "",
                                            "map-options": ""
                                          }, null, 8, ["modelValue", "label", "options", "option-label"]),
                                          createVNode(QSelect, {
                                            name: "category",
                                            modelValue: unref(form).category,
                                            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(form).category = $event),
                                            "lazy-rules": "",
                                            dense: "",
                                            outlined: "",
                                            "options-dense": "",
                                            "bg-color": "white",
                                            disable: "",
                                            hint: "",
                                            label: _ctx.$t("messages.ColCategory"),
                                            options: unref(categories),
                                            "option-value": "name",
                                            "option-label": "desc",
                                            "map-options": ""
                                          }, null, 8, ["modelValue", "label", "options"])
                                        ])
                                      ])
                                    ]),
                                    createBaseVNode("div", _hoisted_10, [
                                      createVNode(QToolbar, { class: "bg-blue-grey" }, {
                                        default: withCtx(() => [
                                          createVNode(QBtn, {
                                            icon: "fas fa-envelope",
                                            color: "white",
                                            "text-color": "black",
                                            label: _ctx.$t("messages.ColMail"),
                                            onClick: unref(send$1).EMail,
                                            dense: ""
                                          }, null, 8, ["label", "onClick"]),
                                          createVNode(QSeparator, {
                                            spaced: "",
                                            vertical: ""
                                          }),
                                          createVNode(QBtn, {
                                            icon: "fas fa-inbox",
                                            color: "white",
                                            "text-color": "black",
                                            label: _ctx.$t("messages.ColLetter"),
                                            onClick: unref(send$1).Mail,
                                            dense: ""
                                          }, null, 8, ["label", "onClick"]),
                                          createVNode(QSeparator, {
                                            spaced: "",
                                            vertical: ""
                                          }),
                                          createVNode(QBtn, {
                                            icon: "fas fa-calendar-alt",
                                            color: "white",
                                            "text-color": "black",
                                            label: _ctx.$t("messages.LabelDate"),
                                            onClick: unref(send$1).Date,
                                            dense: ""
                                          }, null, 8, ["label", "onClick"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(QTabs, {
                                        modelValue: unref(tab),
                                        "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => isRef(tab) ? tab.value = $event : null),
                                        class: "text-teal bg-white",
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
                                            label: _ctx.$t("messages.LabelCar"),
                                            name: "car"
                                          }, null, 8, ["label"]),
                                          createVNode(QTab, {
                                            label: _ctx.$t("messages.LabelCarinfo"),
                                            name: "rieur"
                                          }, null, 8, ["label"]),
                                          createVNode(QTab, {
                                            label: _ctx.$t("messages.LabelImages"),
                                            name: "image"
                                          }, null, 8, ["label"]),
                                          createVNode(QTab, {
                                            label: _ctx.$t("messages.LabelDocuments"),
                                            name: "documents"
                                          }, null, 8, ["label"])
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue"]),
                                      createVNode(QTabPanels, {
                                        modelValue: unref(tab),
                                        "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => isRef(tab) ? tab.value = $event : null)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(QTabPanel, { name: "contact" }, {
                                            default: withCtx(() => [
                                              createVNode(QInput, {
                                                name: "leadinfo",
                                                modelValue: unref(form).lead.info,
                                                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(form).lead.info = $event),
                                                "lazy-rules": "",
                                                type: "textarea",
                                                dense: "",
                                                outlined: "",
                                                autogrow: "",
                                                style: { "max-height": "300px" },
                                                label: _ctx.$t("messages.LabelInfo"),
                                                hint: ""
                                              }, null, 8, ["modelValue", "label"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(QTabPanel, { name: "car" }, {
                                            default: withCtx(() => [
                                              createBaseVNode("div", _hoisted_11, [
                                                createBaseVNode("div", _hoisted_12, [
                                                  createVNode(QScrollArea, { class: "list" }, {
                                                    default: withCtx(() => [
                                                      createVNode(QList, {
                                                        bordered: "",
                                                        separator: "",
                                                        dense: "",
                                                        outlined: ""
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(QItem, null, {
                                                            default: withCtx(() => [
                                                              createVNode(QItemSection, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(_ctx.$t("messages.ColHerst")), 1)
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(QItemSection, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(unref(form).fahrzeug.hersteller), 1)
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(QItem, null, {
                                                            default: withCtx(() => [
                                                              createVNode(QItemSection, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(_ctx.$t("messages.ColCategory")), 1)
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(QItemSection, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(unref(form).fahrzeug.kategorie), 1)
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(QItem, null, {
                                                            default: withCtx(() => [
                                                              createVNode(QItemSection, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(_ctx.$t("messages.ColModel")), 1)
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(QItemSection, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(unref(form).fahrzeug.model), 1)
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(QItem, null, {
                                                            default: withCtx(() => [
                                                              createVNode(QItemSection, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(_ctx.$t("messages.ColDesc")), 1)
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(QItemSection, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(unref(form).fahrzeug.desc), 1)
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(QItem, null, {
                                                            default: withCtx(() => [
                                                              createVNode(QItemSection, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(_ctx.$t("messages.ColFuel")), 1)
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(QItemSection, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(unref(form).infos.fuel), 1)
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(QItem, null, {
                                                            default: withCtx(() => [
                                                              createVNode(QItemSection, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(_ctx.$t("messages.ColColor")), 1)
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(QItemSection, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(unref(form).fahrzeug.farbe), 1)
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(QItem, null, {
                                                            default: withCtx(() => [
                                                              createVNode(QItemSection, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(_ctx.$t("messages.LabelKM")), 1)
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(QItemSection, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(unref(form).infos.km), 1)
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(QItem, null, {
                                                            default: withCtx(() => [
                                                              createVNode(QItemSection, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(_ctx.$t("messages.ColPrice")), 1)
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(QItemSection, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(unref(form).fahrzeug.preis), 1)
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(QItem, null, {
                                                            default: withCtx(() => [
                                                              createVNode(QItemSection, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(_ctx.$t("messages.ColPower")), 1)
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(QItemSection, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(unref(form).fahrzeug.leistung) + "kW", 1)
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(QItem, null, {
                                                            default: withCtx(() => [
                                                              createVNode(QItemSection, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(_ctx.$t("messages.LabelFirstRegist")), 1)
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(QItemSection, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(unref(form).fahrzeug.erstzulassung), 1)
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          })
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
                                          }),
                                          createVNode(QTabPanel, { name: "rieur" }, {
                                            default: withCtx(() => [
                                              createBaseVNode("div", _hoisted_13, [
                                                createBaseVNode("div", _hoisted_14, [
                                                  createVNode(QScrollArea, { class: "list" }, {
                                                    default: withCtx(() => [
                                                      createVNode(QList, {
                                                        bordered: "",
                                                        separator: "",
                                                        dense: "",
                                                        outlined: ""
                                                      }, {
                                                        default: withCtx(() => [
                                                          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(carList), (item) => {
                                                            return openBlock(), createBlock(QItem, {
                                                              key: item.key
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(QItemSection, { class: "col-6" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(QItemLabel, null, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(item.desc), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(QItemSection, {
                                                                  class: normalizeClass(["col-6", `type-${item.type}`])
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    item.type === "number" ? (openBlock(), createBlock(QItemLabel, { key: 0 }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(item.entry), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)) : item.type === "decimal" ? (openBlock(), createBlock(QItemLabel, { key: 1 }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(item.entry), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)) : (openBlock(), createBlock(QItemLabel, { key: 2 }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(item.entry), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024))
                                                                  ]),
                                                                  _: 2
                                                                }, 1032, ["class"])
                                                              ]),
                                                              _: 2
                                                            }, 1024);
                                                          }), 128))
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                createBaseVNode("div", _hoisted_15, [
                                                  createVNode(QScrollArea, { class: "list" }, {
                                                    default: withCtx(() => [
                                                      createVNode(QList, {
                                                        bordered: "",
                                                        separator: "",
                                                        dense: "",
                                                        outlined: ""
                                                      }, {
                                                        default: withCtx(() => [
                                                          (openBlock(), createElementBlock(Fragment, null, renderList(description, (item) => {
                                                            return createVNode(QItem, {
                                                              key: item.key
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(QItemSection, { class: "col-3" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(QItemLabel, null, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(item.key), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(QItemSection, { class: "col-9" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(QItemLabel, {
                                                                      innerHTML: item.text
                                                                    }, null, 8, ["innerHTML"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024);
                                                          }), 64))
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
                                          }),
                                          createVNode(QTabPanel, {
                                            name: "image",
                                            disable: !unref(form).img
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(QScrollArea, { class: "list" }, {
                                                default: withCtx(() => [
                                                  unref(form).img ? (openBlock(), createElementBlock("div", _hoisted_16, [
                                                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(form).img, (image2) => {
                                                      return openBlock(), createElementBlock("div", {
                                                        class: "col-3",
                                                        key: image2.name,
                                                        onClick: ($event) => showImg(image2)
                                                      }, [
                                                        createVNode(QImg, {
                                                          src: image2.src
                                                        }, null, 8, ["src"])
                                                      ], 8, _hoisted_17);
                                                    }), 128))
                                                  ])) : createCommentVNode("", true)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["disable"]),
                                          createVNode(QTabPanel, { name: "documents" }, {
                                            default: withCtx(() => [
                                              createBaseVNode("div", _hoisted_18, [
                                                createBaseVNode("div", _hoisted_19, [
                                                  createVNode(QScrollArea, { class: "list" }, {
                                                    default: withCtx(() => [
                                                      createVNode(QList, {
                                                        bordered: "",
                                                        separator: "",
                                                        dense: "",
                                                        outlined: ""
                                                      }, {
                                                        default: withCtx(() => [
                                                          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.documents, (item) => {
                                                            return openBlock(), createBlock(QItem, {
                                                              clickable: "",
                                                              key: item.memento.id
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(QItemSection, { class: "col-6" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(QItemLabel, null, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(item.memento.baseName), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(QItemSection, { class: "col-3" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(QItemLabel, null, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(item.memento.lastmod), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(QItemSection, { class: "col-2 text-right" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(QItemLabel, null, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(item.memento.size), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(QItemSection, { class: "col-1" }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(QBtn, {
                                                                      dense: "",
                                                                      color: "primary",
                                                                      onClick: ($event) => showDoc(item),
                                                                      icon: "fas fa-download",
                                                                      label: ""
                                                                    }, null, 8, ["onClick"])
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ]),
                                                              _: 2
                                                            }, 1024);
                                                          }), 128))
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                createBaseVNode("div", _hoisted_20, [
                                                  createVNode(QUploader, {
                                                    disabled: !unref(form).gfz,
                                                    ref_key: "uploader",
                                                    ref: uploader,
                                                    url: `/custom/uploadFile?gfz=${unref(form).gfz}`,
                                                    onFinish: finishFile,
                                                    flat: "",
                                                    bordered: "",
                                                    multiple: ""
                                                  }, null, 8, ["disabled", "url"])
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue"])
                                    ]),
                                    createBaseVNode("div", _hoisted_21, [
                                      createVNode(QScrollArea, { class: "list" }, {
                                        default: withCtx(() => [
                                          createBaseVNode("div", _hoisted_22, [
                                            createBaseVNode("div", _hoisted_23, [
                                              withDirectives(createBaseVNode("div", _hoisted_24, null, 512), [
                                                [_directive_t, "messages.LabelHistory"]
                                              ]),
                                              createVNode(QTimeline, { dense: "" }, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(form).hist, (item) => {
                                                    return openBlock(), createBlock(QTimelineEntry, {
                                                      key: item.timestamp,
                                                      title: _ctx.$t(`messages.History_${item.type}`),
                                                      subtitle: unref(hooks)(item.timestamp).format("ddd DD.MM.YYYY HH:mm"),
                                                      icon: item.icon,
                                                      color: item.color
                                                    }, {
                                                      default: withCtx(() => [
                                                        createBaseVNode("div", null, toDisplayString(item.title), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["title", "subtitle", "icon", "color"]);
                                                  }), 128))
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ])
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
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(QDialog, {
            modelValue: unref(showLink),
            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => isRef(showLink) ? showLink.value = $event : null)
          }, {
            default: withCtx(() => [
              createVNode(QCard, { class: "detail" }, {
                default: withCtx(() => [
                  createVNode(QToolbar, { class: "bg-blue-8 text-white shadow" }, {
                    default: withCtx(() => [
                      withDirectives(createVNode(QToolbarTitle, null, null, 512), [
                        [_directive_t, "messages.LabelLink"]
                      ]),
                      createVNode(QSeparator, {
                        spaced: "",
                        vertical: ""
                      }),
                      withDirectives((openBlock(), createBlock(QBtn, {
                        clickable: "",
                        onClick: saveLink,
                        "no-caps": "",
                        size: "md",
                        color: "white",
                        "text-color": "black",
                        icon: "save_alt"
                      }, {
                        default: withCtx(() => [
                          createVNode(QTooltip, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("messages.ButtonSave")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [ClosePopup]
                      ]),
                      createVNode(QSeparator, {
                        spaced: "",
                        vertical: ""
                      }),
                      withDirectives((openBlock(), createBlock(QBtn, {
                        icon: "close",
                        color: "white",
                        "text-color": "black"
                      }, {
                        default: withCtx(() => [
                          createVNode(QTooltip, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("messages.ButtonClose")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })), [
                        [ClosePopup]
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createVNode(unref(AgGridVue), {
                        class: "links ag-theme-balham",
                        gridOptions: unref(linkGrid),
                        rowData: unref(links),
                        frameworkComponents
                      }, null, 8, ["gridOptions", "rowData"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(QDialog, {
            modelValue: unref(showImage),
            "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => isRef(showImage) ? showImage.value = $event : null)
          }, {
            default: withCtx(() => [
              createVNode(QCard, { class: "detail" }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createVNode(QImg, {
                        src: unref(image).src
                      }, null, 8, ["src"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      });
    };
  }
});
var Lead = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e93e4484"], ["__file", "Lead.vue"]]);
export { Lead as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGVhZC5kMTEwY2Y0Yy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9jaXJjdWxhci1wcm9ncmVzcy91c2UtY2lyY3VsYXItcHJvZ3Jlc3MuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2NpcmN1bGFyLXByb2dyZXNzL1FDaXJjdWxhclByb2dyZXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZmlsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdXBsb2FkZXIvdXBsb2FkZXItY29yZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUvZ2V0LWVtaXRzLW9iamVjdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL2NyZWF0ZS11cGxvYWRlci1jb21wb25lbnQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3VwbG9hZGVyL3hoci11cGxvYWRlci1wbHVnaW4uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3VwbG9hZGVyL1FVcGxvYWRlci5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWRMaW5rYm94LmpzIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL0xlYWQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNpemVQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXNpemUuanMnXG5cbi8vIGFsc28gdXNlZCBieSBRS25vYlxuZXhwb3J0IGNvbnN0IHVzZUNpcmN1bGFyQ29tbW9uUHJvcHMgPSB7XG4gIC4uLnVzZVNpemVQcm9wcyxcblxuICBtaW46IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMFxuICB9LFxuICBtYXg6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMTAwXG4gIH0sXG5cbiAgY29sb3I6IFN0cmluZyxcbiAgY2VudGVyQ29sb3I6IFN0cmluZyxcbiAgdHJhY2tDb2xvcjogU3RyaW5nLFxuXG4gIGZvbnRTaXplOiBTdHJpbmcsXG4gIHJvdW5kZWQ6IEJvb2xlYW4sXG5cbiAgLy8gcmF0aW9cbiAgdGhpY2tuZXNzOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDAuMixcbiAgICB2YWxpZGF0b3I6IHYgPT4gdiA+PSAwICYmIHYgPD0gMVxuICB9LFxuXG4gIGFuZ2xlOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDBcbiAgfSxcblxuICBzaG93VmFsdWU6IEJvb2xlYW4sXG4gIHJldmVyc2U6IEJvb2xlYW4sXG5cbiAgaW5zdGFudEZlZWRiYWNrOiBCb29sZWFuXG59XG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlU2l6ZSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1zaXplLmpzJ1xuaW1wb3J0IHsgdXNlQ2lyY3VsYXJDb21tb25Qcm9wcyB9IGZyb20gJy4vdXNlLWNpcmN1bGFyLXByb2dyZXNzLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3RTYWZlbHkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5cbmNvbnN0XG4gIHJhZGl1cyA9IDUwLFxuICBkaWFtZXRlciA9IDIgKiByYWRpdXMsXG4gIGNpcmN1bWZlcmVuY2UgPSBkaWFtZXRlciAqIE1hdGguUEksXG4gIHN0cm9rZURhc2hBcnJheSA9IE1hdGgucm91bmQoY2lyY3VtZmVyZW5jZSAqIDEwMDApIC8gMTAwMFxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUNpcmN1bGFyUHJvZ3Jlc3MnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlQ2lyY3VsYXJDb21tb25Qcm9wcyxcblxuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcblxuICAgIGFuaW1hdGlvblNwZWVkOiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiA2MDBcbiAgICB9LFxuXG4gICAgaW5kZXRlcm1pbmF0ZTogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHNpemVTdHlsZSA9IHVzZVNpemUocHJvcHMpXG5cbiAgICBjb25zdCBzdmdTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gKCRxLmxhbmcucnRsID09PSB0cnVlID8gLTEgOiAxKSAqIHByb3BzLmFuZ2xlXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRyYW5zZm9ybTogcHJvcHMucmV2ZXJzZSAhPT0gKCRxLmxhbmcucnRsID09PSB0cnVlKVxuICAgICAgICAgID8gYHNjYWxlM2QoLTEsIDEsIDEpIHJvdGF0ZTNkKDAsIDAsIDEsICR7IC05MCAtIGFuZ2xlIH1kZWcpYFxuICAgICAgICAgIDogYHJvdGF0ZTNkKDAsIDAsIDEsICR7IGFuZ2xlIC0gOTAgfWRlZylgXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNpcmNsZVN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuaW5zdGFudEZlZWRiYWNrICE9PSB0cnVlICYmIHByb3BzLmluZGV0ZXJtaW5hdGUgIT09IHRydWVcbiAgICAgICAgPyB7IHRyYW5zaXRpb246IGBzdHJva2UtZGFzaG9mZnNldCAkeyBwcm9wcy5hbmltYXRpb25TcGVlZCB9bXMgZWFzZSAwcywgc3Ryb2tlICR7IHByb3BzLmFuaW1hdGlvblNwZWVkIH1tcyBlYXNlYCB9XG4gICAgICAgIDogJydcbiAgICApKVxuXG4gICAgY29uc3Qgdmlld0JveCA9IGNvbXB1dGVkKCgpID0+IGRpYW1ldGVyIC8gKDEgLSBwcm9wcy50aGlja25lc3MgLyAyKSlcblxuICAgIGNvbnN0IHZpZXdCb3hBdHRyID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGAkeyB2aWV3Qm94LnZhbHVlIC8gMiB9ICR7IHZpZXdCb3gudmFsdWUgLyAyIH0gJHsgdmlld0JveC52YWx1ZSB9ICR7IHZpZXdCb3gudmFsdWUgfWBcbiAgICApXG5cbiAgICBjb25zdCBub3JtYWxpemVkID0gY29tcHV0ZWQoKCkgPT4gYmV0d2Vlbihwcm9wcy52YWx1ZSwgcHJvcHMubWluLCBwcm9wcy5tYXgpKVxuXG4gICAgY29uc3QgcmFuZ2UgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5tYXggLSBwcm9wcy5taW4pXG4gICAgY29uc3Qgc3Ryb2tlV2lkdGggPSBjb21wdXRlZCgoKSA9PiBwcm9wcy50aGlja25lc3MgLyAyICogdmlld0JveC52YWx1ZSlcbiAgICBjb25zdCBzdHJva2VEYXNoT2Zmc2V0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZGFzaFJhdGlvID0gKHByb3BzLm1heCAtIG5vcm1hbGl6ZWQudmFsdWUpIC8gcmFuZ2UudmFsdWVcbiAgICAgIGNvbnN0IGRhc2hHYXAgPSBwcm9wcy5yb3VuZGVkID09PSB0cnVlICYmIG5vcm1hbGl6ZWQudmFsdWUgPCBwcm9wcy5tYXggJiYgZGFzaFJhdGlvIDwgMC4yNVxuICAgICAgICA/IHN0cm9rZVdpZHRoLnZhbHVlIC8gMiAqICgxIC0gZGFzaFJhdGlvIC8gMC4yNSlcbiAgICAgICAgOiAwXG5cbiAgICAgIHJldHVybiBjaXJjdW1mZXJlbmNlICogZGFzaFJhdGlvICsgZGFzaEdhcFxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBnZXRDaXJjbGUgKHsgdGhpY2tuZXNzLCBvZmZzZXQsIGNvbG9yLCBjbHMsIHJvdW5kZWQgfSkge1xuICAgICAgcmV0dXJuIGgoJ2NpcmNsZScsIHtcbiAgICAgICAgY2xhc3M6ICdxLWNpcmN1bGFyLXByb2dyZXNzX18nICsgY2xzICsgKGNvbG9yICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgY29sb3IgfWAgOiAnJyksXG4gICAgICAgIHN0eWxlOiBjaXJjbGVTdHlsZS52YWx1ZSxcbiAgICAgICAgZmlsbDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgJ3N0cm9rZS13aWR0aCc6IHRoaWNrbmVzcyxcbiAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiBzdHJva2VEYXNoQXJyYXksXG4gICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IG9mZnNldCxcbiAgICAgICAgJ3N0cm9rZS1saW5lY2FwJzogcm91bmRlZCxcbiAgICAgICAgY3g6IHZpZXdCb3gudmFsdWUsXG4gICAgICAgIGN5OiB2aWV3Qm94LnZhbHVlLFxuICAgICAgICByOiByYWRpdXNcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IHN2Z0NoaWxkID0gW11cblxuICAgICAgcHJvcHMuY2VudGVyQ29sb3IgIT09IHZvaWQgMCAmJiBwcm9wcy5jZW50ZXJDb2xvciAhPT0gJ3RyYW5zcGFyZW50JyAmJiBzdmdDaGlsZC5wdXNoKFxuICAgICAgICBoKCdjaXJjbGUnLCB7XG4gICAgICAgICAgY2xhc3M6IGBxLWNpcmN1bGFyLXByb2dyZXNzX19jZW50ZXIgdGV4dC0keyBwcm9wcy5jZW50ZXJDb2xvciB9YCxcbiAgICAgICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgICByOiByYWRpdXMgLSBzdHJva2VXaWR0aC52YWx1ZSAvIDIsXG4gICAgICAgICAgY3g6IHZpZXdCb3gudmFsdWUsXG4gICAgICAgICAgY3k6IHZpZXdCb3gudmFsdWVcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgcHJvcHMudHJhY2tDb2xvciAhPT0gdm9pZCAwICYmIHByb3BzLnRyYWNrQ29sb3IgIT09ICd0cmFuc3BhcmVudCcgJiYgc3ZnQ2hpbGQucHVzaChcbiAgICAgICAgZ2V0Q2lyY2xlKHtcbiAgICAgICAgICBjbHM6ICd0cmFjaycsXG4gICAgICAgICAgdGhpY2tuZXNzOiBzdHJva2VXaWR0aC52YWx1ZSxcbiAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgY29sb3I6IHByb3BzLnRyYWNrQ29sb3JcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgc3ZnQ2hpbGQucHVzaChcbiAgICAgICAgZ2V0Q2lyY2xlKHtcbiAgICAgICAgICBjbHM6ICdjaXJjbGUnLFxuICAgICAgICAgIHRoaWNrbmVzczogc3Ryb2tlV2lkdGgudmFsdWUsXG4gICAgICAgICAgb2Zmc2V0OiBzdHJva2VEYXNoT2Zmc2V0LnZhbHVlLFxuICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICByb3VuZGVkOiBwcm9wcy5yb3VuZGVkID09PSB0cnVlID8gJ3JvdW5kJyA6IHZvaWQgMFxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjaGlsZCA9IFtcbiAgICAgICAgaCgnc3ZnJywge1xuICAgICAgICAgIGNsYXNzOiAncS1jaXJjdWxhci1wcm9ncmVzc19fc3ZnJyxcbiAgICAgICAgICBzdHlsZTogc3ZnU3R5bGUudmFsdWUsXG4gICAgICAgICAgdmlld0JveDogdmlld0JveEF0dHIudmFsdWUsXG4gICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgIH0sIHN2Z0NoaWxkKVxuICAgICAgXVxuXG4gICAgICBwcm9wcy5zaG93VmFsdWUgPT09IHRydWUgJiYgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS1jaXJjdWxhci1wcm9ncmVzc19fdGV4dCBhYnNvbHV0ZS1mdWxsIHJvdyBmbGV4LWNlbnRlciBjb250ZW50LWNlbnRlcicsXG4gICAgICAgICAgc3R5bGU6IHsgZm9udFNpemU6IHByb3BzLmZvbnRTaXplIH1cbiAgICAgICAgfSwgc2xvdHMuZGVmYXVsdCAhPT0gdm9pZCAwID8gc2xvdHMuZGVmYXVsdCgpIDogWyBoKCdkaXYnLCBub3JtYWxpemVkLnZhbHVlKSBdKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogYHEtY2lyY3VsYXItcHJvZ3Jlc3MgcS1jaXJjdWxhci1wcm9ncmVzcy0tJHsgcHJvcHMuaW5kZXRlcm1pbmF0ZSA9PT0gdHJ1ZSA/ICdpbicgOiAnJyB9ZGV0ZXJtaW5hdGVgLFxuICAgICAgICBzdHlsZTogc2l6ZVN0eWxlLnZhbHVlLFxuICAgICAgICByb2xlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAnYXJpYS12YWx1ZW1pbic6IHByb3BzLm1pbixcbiAgICAgICAgJ2FyaWEtdmFsdWVtYXgnOiBwcm9wcy5tYXgsXG4gICAgICAgICdhcmlhLXZhbHVlbm93JzogcHJvcHMuaW5kZXRlcm1pbmF0ZSA9PT0gdHJ1ZSA/IHZvaWQgMCA6IG5vcm1hbGl6ZWQudmFsdWVcbiAgICAgIH0sIGhNZXJnZVNsb3RTYWZlbHkoc2xvdHMuaW50ZXJuYWwsIGNoaWxkKSkgLy8gXCJpbnRlcm5hbFwiIGlzIHVzZWQgYnkgUUtub2JcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uLy4uL3BsdWdpbnMvUGxhdGZvcm0uanMnXG5pbXBvcnQgeyBzdG9wLCBzdG9wQW5kUHJldmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuXG5mdW5jdGlvbiBmaWx0ZXJGaWxlcyAoZmlsZXMsIHJlamVjdGVkRmlsZXMsIGZhaWxlZFByb3BWYWxpZGF0aW9uLCBmaWx0ZXJGbikge1xuICBjb25zdCBhY2NlcHRlZEZpbGVzID0gW11cblxuICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgIGlmIChmaWx0ZXJGbihmaWxlKSA9PT0gdHJ1ZSkge1xuICAgICAgYWNjZXB0ZWRGaWxlcy5wdXNoKGZpbGUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmVqZWN0ZWRGaWxlcy5wdXNoKHsgZmFpbGVkUHJvcFZhbGlkYXRpb24sIGZpbGUgfSlcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGFjY2VwdGVkRmlsZXNcbn1cblxuZnVuY3Rpb24gc3RvcEFuZFByZXZlbnREcmFnIChlKSB7XG4gIGUgJiYgZS5kYXRhVHJhbnNmZXIgJiYgKGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weScpXG4gIHN0b3BBbmRQcmV2ZW50KGUpXG59XG5cbmV4cG9ydCBjb25zdCB1c2VGaWxlUHJvcHMgPSB7XG4gIG11bHRpcGxlOiBCb29sZWFuLFxuICBhY2NlcHQ6IFN0cmluZyxcbiAgY2FwdHVyZTogU3RyaW5nLFxuICBtYXhGaWxlU2l6ZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICBtYXhUb3RhbFNpemU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgbWF4RmlsZXM6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgZmlsdGVyOiBGdW5jdGlvblxufVxuXG5leHBvcnQgY29uc3QgdXNlRmlsZUVtaXRzID0gWyAncmVqZWN0ZWQnIF1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHtcbiAgZWRpdGFibGUsXG4gIGRuZCxcbiAgZ2V0RmlsZUlucHV0LFxuICBhZGRGaWxlc1RvUXVldWVcbn0pIHtcbiAgY29uc3QgeyBwcm9wcywgZW1pdCwgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgY29uc3QgZG5kUmVmID0gcmVmKG51bGwpXG5cbiAgY29uc3QgZXh0ZW5zaW9ucyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy5hY2NlcHQgIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy5hY2NlcHQuc3BsaXQoJywnKS5tYXAoZXh0ID0+IHtcbiAgICAgICAgZXh0ID0gZXh0LnRyaW0oKVxuICAgICAgICBpZiAoZXh0ID09PSAnKicpIHsgLy8gc3VwcG9ydCBcIipcIlxuICAgICAgICAgIHJldHVybiAnKi8nXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXh0LmVuZHNXaXRoKCcvKicpKSB7IC8vIHN1cHBvcnQgXCJpbWFnZS8qXCIgb3IgXCIqLypcIlxuICAgICAgICAgIGV4dCA9IGV4dC5zbGljZSgwLCBleHQubGVuZ3RoIC0gMSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXh0LnRvVXBwZXJDYXNlKClcbiAgICAgIH0pXG4gICAgICA6IG51bGxcbiAgKSlcblxuICBjb25zdCBtYXhGaWxlc051bWJlciA9IGNvbXB1dGVkKCgpID0+IHBhcnNlSW50KHByb3BzLm1heEZpbGVzLCAxMCkpXG4gIGNvbnN0IG1heFRvdGFsU2l6ZU51bWJlciA9IGNvbXB1dGVkKCgpID0+IHBhcnNlSW50KHByb3BzLm1heFRvdGFsU2l6ZSwgMTApKVxuXG4gIGZ1bmN0aW9uIHBpY2tGaWxlcyAoZSkge1xuICAgIGlmIChlZGl0YWJsZS52YWx1ZSkge1xuICAgICAgaWYgKGUgIT09IE9iamVjdChlKSkge1xuICAgICAgICBlID0geyB0YXJnZXQ6IG51bGwgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZS50YXJnZXQgIT09IG51bGwgJiYgZS50YXJnZXQubWF0Y2hlcygnaW5wdXRbdHlwZT1cImZpbGVcIl0nKSA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyBzdG9wIHByb3BhZ2F0aW9uIGlmIGl0J3Mgbm90IGEgcmVhbCBwb2ludGVyIGV2ZW50XG4gICAgICAgIGUuY2xpZW50WCA9PT0gMCAmJiBlLmNsaWVudFkgPT09IDAgJiYgc3RvcChlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZ2V0RmlsZUlucHV0KClcbiAgICAgICAgaW5wdXQgJiYgaW5wdXQgIT09IGUudGFyZ2V0ICYmIGlucHV0LmNsaWNrKGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkRmlsZXMgKGZpbGVzKSB7XG4gICAgaWYgKGVkaXRhYmxlLnZhbHVlICYmIGZpbGVzKSB7XG4gICAgICBhZGRGaWxlc1RvUXVldWUobnVsbCwgZmlsZXMpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpbGVzIChlLCBmaWxlc1RvUHJvY2VzcywgY3VycmVudEZpbGVMaXN0LCBhcHBlbmQpIHtcbiAgICBsZXQgZmlsZXMgPSBBcnJheS5mcm9tKGZpbGVzVG9Qcm9jZXNzIHx8IGUudGFyZ2V0LmZpbGVzKVxuICAgIGNvbnN0IHJlamVjdGVkRmlsZXMgPSBbXVxuXG4gICAgY29uc3QgZG9uZSA9ICgpID0+IHtcbiAgICAgIGlmIChyZWplY3RlZEZpbGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBlbWl0KCdyZWplY3RlZCcsIHJlamVjdGVkRmlsZXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZmlsdGVyIGZpbGUgdHlwZXNcbiAgICBpZiAocHJvcHMuYWNjZXB0ICE9PSB2b2lkIDAgJiYgZXh0ZW5zaW9ucy52YWx1ZS5pbmRleE9mKCcqLycpID09PSAtMSkge1xuICAgICAgZmlsZXMgPSBmaWx0ZXJGaWxlcyhmaWxlcywgcmVqZWN0ZWRGaWxlcywgJ2FjY2VwdCcsIGZpbGUgPT4ge1xuICAgICAgICByZXR1cm4gZXh0ZW5zaW9ucy52YWx1ZS5zb21lKGV4dCA9PiAoXG4gICAgICAgICAgZmlsZS50eXBlLnRvVXBwZXJDYXNlKCkuc3RhcnRzV2l0aChleHQpXG4gICAgICAgICAgfHwgZmlsZS5uYW1lLnRvVXBwZXJDYXNlKCkuZW5kc1dpdGgoZXh0KVxuICAgICAgICApKVxuICAgICAgfSlcblxuICAgICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gZG9uZSgpIH1cbiAgICB9XG5cbiAgICAvLyBmaWx0ZXIgbWF4IGZpbGUgc2l6ZVxuICAgIGlmIChwcm9wcy5tYXhGaWxlU2l6ZSAhPT0gdm9pZCAwKSB7XG4gICAgICBjb25zdCBtYXhGaWxlU2l6ZSA9IHBhcnNlSW50KHByb3BzLm1heEZpbGVTaXplLCAxMClcbiAgICAgIGZpbGVzID0gZmlsdGVyRmlsZXMoZmlsZXMsIHJlamVjdGVkRmlsZXMsICdtYXgtZmlsZS1zaXplJywgZmlsZSA9PiB7XG4gICAgICAgIHJldHVybiBmaWxlLnNpemUgPD0gbWF4RmlsZVNpemVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChmaWxlcy5sZW5ndGggPT09IDApIHsgcmV0dXJuIGRvbmUoKSB9XG4gICAgfVxuXG4gICAgLy8gQ29yZG92YS9pT1MgYWxsb3dzIHNlbGVjdGluZyBtdWx0aXBsZSBmaWxlcyBldmVuIHdoZW4gdGhlXG4gICAgLy8gbXVsdGlwbGUgYXR0cmlidXRlIGlzIG5vdCBzcGVjaWZpZWQuIFdlIGFsc28gbm9ybWFsaXplIGRyYWcnbidkcm9wcGVkXG4gICAgLy8gZmlsZXMgaGVyZTpcbiAgICBpZiAocHJvcHMubXVsdGlwbGUgIT09IHRydWUgJiYgZmlsZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBmaWxlcyA9IFsgZmlsZXNbIDAgXSBdXG4gICAgfVxuXG4gICAgLy8gQ29tcHV0ZSBrZXkgdG8gdXNlIGZvciBlYWNoIGZpbGVcbiAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgZmlsZS5fX2tleSA9IGZpbGUud2Via2l0UmVsYXRpdmVQYXRoICsgZmlsZS5sYXN0TW9kaWZpZWQgKyBmaWxlLm5hbWUgKyBmaWxlLnNpemVcbiAgICB9KVxuXG4gICAgaWYgKGFwcGVuZCA9PT0gdHJ1ZSkge1xuICAgICAgLy8gQXZvaWQgZHVwbGljYXRlIGZpbGVzXG4gICAgICBjb25zdCBmaWxlbmFtZU1hcCA9IGN1cnJlbnRGaWxlTGlzdC5tYXAoZW50cnkgPT4gZW50cnkuX19rZXkpXG4gICAgICBmaWxlcyA9IGZpbHRlckZpbGVzKGZpbGVzLCByZWplY3RlZEZpbGVzLCAnZHVwbGljYXRlJywgZmlsZSA9PiB7XG4gICAgICAgIHJldHVybiBmaWxlbmFtZU1hcC5pbmNsdWRlcyhmaWxlLl9fa2V5KSA9PT0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gZG9uZSgpIH1cblxuICAgIGlmIChwcm9wcy5tYXhUb3RhbFNpemUgIT09IHZvaWQgMCkge1xuICAgICAgbGV0IHNpemUgPSBhcHBlbmQgPT09IHRydWVcbiAgICAgICAgPyBjdXJyZW50RmlsZUxpc3QucmVkdWNlKCh0b3RhbCwgZmlsZSkgPT4gdG90YWwgKyBmaWxlLnNpemUsIDApXG4gICAgICAgIDogMFxuXG4gICAgICBmaWxlcyA9IGZpbHRlckZpbGVzKGZpbGVzLCByZWplY3RlZEZpbGVzLCAnbWF4LXRvdGFsLXNpemUnLCBmaWxlID0+IHtcbiAgICAgICAgc2l6ZSArPSBmaWxlLnNpemVcbiAgICAgICAgcmV0dXJuIHNpemUgPD0gbWF4VG90YWxTaXplTnVtYmVyLnZhbHVlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7IHJldHVybiBkb25lKCkgfVxuICAgIH1cblxuICAgIC8vIGRvIHdlIGhhdmUgY3VzdG9tIGZpbHRlciBmdW5jdGlvbj9cbiAgICBpZiAodHlwZW9mIHByb3BzLmZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgZmlsdGVyZWRGaWxlcyA9IHByb3BzLmZpbHRlcihmaWxlcylcbiAgICAgIGZpbGVzID0gZmlsdGVyRmlsZXMoZmlsZXMsIHJlamVjdGVkRmlsZXMsICdmaWx0ZXInLCBmaWxlID0+IHtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkRmlsZXMuaW5jbHVkZXMoZmlsZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLm1heEZpbGVzICE9PSB2b2lkIDApIHtcbiAgICAgIGxldCBmaWxlc051bWJlciA9IGFwcGVuZCA9PT0gdHJ1ZVxuICAgICAgICA/IGN1cnJlbnRGaWxlTGlzdC5sZW5ndGhcbiAgICAgICAgOiAwXG5cbiAgICAgIGZpbGVzID0gZmlsdGVyRmlsZXMoZmlsZXMsIHJlamVjdGVkRmlsZXMsICdtYXgtZmlsZXMnLCAoKSA9PiB7XG4gICAgICAgIGZpbGVzTnVtYmVyKytcbiAgICAgICAgcmV0dXJuIGZpbGVzTnVtYmVyIDw9IG1heEZpbGVzTnVtYmVyLnZhbHVlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7IHJldHVybiBkb25lKCkgfVxuICAgIH1cblxuICAgIGRvbmUoKVxuXG4gICAgaWYgKGZpbGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGZpbGVzXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25EcmFnb3ZlciAoZSkge1xuICAgIHN0b3BBbmRQcmV2ZW50RHJhZyhlKVxuICAgIGRuZC52YWx1ZSAhPT0gdHJ1ZSAmJiAoZG5kLnZhbHVlID0gdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZ2xlYXZlIChlKSB7XG4gICAgc3RvcEFuZFByZXZlbnQoZSlcblxuICAgIC8vIFNhZmFyaSBidWc6IHJlbGF0ZWRUYXJnZXQgaXMgbnVsbCBmb3Igb3ZlciAxMCB5ZWFyc1xuICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD02NjU0N1xuICAgIGNvbnN0IGdvbmUgPSBlLnJlbGF0ZWRUYXJnZXQgIT09IG51bGwgfHwgY2xpZW50LmlzLnNhZmFyaSAhPT0gdHJ1ZVxuICAgICAgPyBlLnJlbGF0ZWRUYXJnZXQgIT09IGRuZFJlZi52YWx1ZVxuICAgICAgOiBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSkuaW5jbHVkZXMoZG5kUmVmLnZhbHVlKSA9PT0gZmFsc2VcblxuICAgIGdvbmUgPT09IHRydWUgJiYgKGRuZC52YWx1ZSA9IGZhbHNlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25Ecm9wIChlKSB7XG4gICAgc3RvcEFuZFByZXZlbnREcmFnKGUpXG4gICAgY29uc3QgZmlsZXMgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1xuXG4gICAgaWYgKGZpbGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgYWRkRmlsZXNUb1F1ZXVlKG51bGwsIGZpbGVzKVxuICAgIH1cblxuICAgIGRuZC52YWx1ZSA9IGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBnZXREbmROb2RlICh0eXBlKSB7XG4gICAgaWYgKGRuZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgcmVmOiBkbmRSZWYsXG4gICAgICAgIGNsYXNzOiBgcS0keyB0eXBlIH1fX2RuZCBhYnNvbHV0ZS1mdWxsYCxcbiAgICAgICAgb25EcmFnZW50ZXI6IHN0b3BBbmRQcmV2ZW50RHJhZyxcbiAgICAgICAgb25EcmFnb3Zlcjogc3RvcEFuZFByZXZlbnREcmFnLFxuICAgICAgICBvbkRyYWdsZWF2ZSxcbiAgICAgICAgb25Ecm9wXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICBPYmplY3QuYXNzaWduKHByb3h5LCB7IHBpY2tGaWxlcywgYWRkRmlsZXMgfSlcblxuICByZXR1cm4ge1xuICAgIHBpY2tGaWxlcyxcbiAgICBhZGRGaWxlcyxcbiAgICBvbkRyYWdvdmVyLFxuICAgIG9uRHJhZ2xlYXZlLFxuICAgIHByb2Nlc3NGaWxlcyxcbiAgICBnZXREbmROb2RlLFxuXG4gICAgbWF4RmlsZXNOdW1iZXIsXG4gICAgbWF4VG90YWxTaXplTnVtYmVyXG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgaXNSZWYsIGNvbXB1dGVkLCB3YXRjaCwgcHJvdmlkZSwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRQnRuIGZyb20gJy4uL2J0bi9RQnRuLmpzJ1xuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5pbXBvcnQgUVNwaW5uZXIgZnJvbSAnLi4vc3Bpbm5lci9RU3Bpbm5lci5qcydcbmltcG9ydCBRQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICcuLi9jaXJjdWxhci1wcm9ncmVzcy9RQ2lyY3VsYXJQcm9ncmVzcy5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB1c2VGaWxlLCB7IHVzZUZpbGVQcm9wcywgdXNlRmlsZUVtaXRzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZmlsZS5qcydcblxuaW1wb3J0IHsgc3RvcCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgaHVtYW5TdG9yYWdlU2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7IHVwbG9hZGVyS2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuaW1wb3J0IHsgaW5qZWN0UHJvcCwgaW5qZWN0TXVsdGlwbGVQcm9wcyB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvaW5qZWN0LW9iai1wcm9wLmpzJ1xuaW1wb3J0IHsgdm1Jc0Rlc3Ryb3llZCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvdm0uanMnXG5cbmZ1bmN0aW9uIGdldFByb2dyZXNzTGFiZWwgKHApIHtcbiAgcmV0dXJuIChwICogMTAwKS50b0ZpeGVkKDIpICsgJyUnXG59XG5cbmV4cG9ydCBjb25zdCBjb3JlUHJvcHMgPSB7XG4gIC4uLnVzZURhcmtQcm9wcyxcbiAgLi4udXNlRmlsZVByb3BzLFxuXG4gIGxhYmVsOiBTdHJpbmcsXG5cbiAgY29sb3I6IFN0cmluZyxcbiAgdGV4dENvbG9yOiBTdHJpbmcsXG5cbiAgc3F1YXJlOiBCb29sZWFuLFxuICBmbGF0OiBCb29sZWFuLFxuICBib3JkZXJlZDogQm9vbGVhbixcblxuICBub1RodW1ibmFpbHM6IEJvb2xlYW4sXG4gIGF1dG9VcGxvYWQ6IEJvb2xlYW4sXG4gIGhpZGVVcGxvYWRCdG46IEJvb2xlYW4sXG5cbiAgZGlzYWJsZTogQm9vbGVhbixcbiAgcmVhZG9ubHk6IEJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IGNvcmVFbWl0cyA9IFtcbiAgLi4udXNlRmlsZUVtaXRzLFxuICAnc3RhcnQnLCAnZmluaXNoJywgJ2FkZGVkJywgJ3JlbW92ZWQnXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZW5kZXJlciAoZ2V0UGx1Z2luLCBleHBvc2UpIHtcbiAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICBjb25zdCB7IHByb3BzLCBzbG90cywgZW1pdCwgcHJveHkgfSA9IHZtXG4gIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG5cbiAgZnVuY3Rpb24gdXBkYXRlRmlsZVN0YXR1cyAoZmlsZSwgc3RhdHVzLCB1cGxvYWRlZFNpemUpIHtcbiAgICBmaWxlLl9fc3RhdHVzID0gc3RhdHVzXG5cbiAgICBpZiAoc3RhdHVzID09PSAnaWRsZScpIHtcbiAgICAgIGZpbGUuX191cGxvYWRlZCA9IDBcbiAgICAgIGZpbGUuX19wcm9ncmVzcyA9IDBcbiAgICAgIGZpbGUuX19zaXplTGFiZWwgPSBodW1hblN0b3JhZ2VTaXplKGZpbGUuc2l6ZSlcbiAgICAgIGZpbGUuX19wcm9ncmVzc0xhYmVsID0gJzAuMDAlJ1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChzdGF0dXMgPT09ICdmYWlsZWQnKSB7XG4gICAgICBwcm94eS4kZm9yY2VVcGRhdGUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZmlsZS5fX3VwbG9hZGVkID0gc3RhdHVzID09PSAndXBsb2FkZWQnXG4gICAgICA/IGZpbGUuc2l6ZVxuICAgICAgOiB1cGxvYWRlZFNpemVcblxuICAgIGZpbGUuX19wcm9ncmVzcyA9IHN0YXR1cyA9PT0gJ3VwbG9hZGVkJ1xuICAgICAgPyAxXG4gICAgICA6IE1hdGgubWluKDAuOTk5OSwgZmlsZS5fX3VwbG9hZGVkIC8gZmlsZS5zaXplKVxuXG4gICAgZmlsZS5fX3Byb2dyZXNzTGFiZWwgPSBnZXRQcm9ncmVzc0xhYmVsKGZpbGUuX19wcm9ncmVzcylcbiAgICBwcm94eS4kZm9yY2VVcGRhdGUoKVxuICB9XG5cbiAgY29uc3QgZWRpdGFibGUgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIHByb3BzLnJlYWRvbmx5ICE9PSB0cnVlKVxuICBjb25zdCBkbmQgPSByZWYoZmFsc2UpXG5cbiAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICBjb25zdCBpbnB1dFJlZiA9IHJlZihudWxsKVxuXG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIGZpbGVzOiByZWYoW10pLFxuICAgIHF1ZXVlZEZpbGVzOiByZWYoW10pLFxuICAgIHVwbG9hZGVkRmlsZXM6IHJlZihbXSksXG4gICAgdXBsb2FkZWRTaXplOiByZWYoMCksXG5cbiAgICB1cGRhdGVGaWxlU3RhdHVzLFxuICAgIGlzQWxpdmU6ICgpID0+IHZtSXNEZXN0cm95ZWQodm0pID09PSBmYWxzZVxuICB9XG5cbiAgY29uc3Qge1xuICAgIHBpY2tGaWxlcyxcbiAgICBhZGRGaWxlcyxcbiAgICBvbkRyYWdvdmVyLFxuICAgIG9uRHJhZ2xlYXZlLFxuICAgIHByb2Nlc3NGaWxlcyxcbiAgICBnZXREbmROb2RlLFxuICAgIG1heEZpbGVzTnVtYmVyLFxuICAgIG1heFRvdGFsU2l6ZU51bWJlclxuICB9ID0gdXNlRmlsZSh7IGVkaXRhYmxlLCBkbmQsIGdldEZpbGVJbnB1dCwgYWRkRmlsZXNUb1F1ZXVlIH0pXG5cbiAgT2JqZWN0LmFzc2lnbihzdGF0ZSwgZ2V0UGx1Z2luKHtcbiAgICBwcm9wcyxcbiAgICBzbG90cyxcbiAgICBlbWl0LFxuICAgIGhlbHBlcnM6IHN0YXRlLFxuICAgIGV4cG9zZUFwaTogb2JqID0+IHsgT2JqZWN0LmFzc2lnbihzdGF0ZSwgb2JqKSB9XG4gIH0pKVxuXG4gIGlmIChzdGF0ZS5pc0J1c3kgPT09IHZvaWQgMCkge1xuICAgIHN0YXRlLmlzQnVzeSA9IHJlZihmYWxzZSlcbiAgfVxuXG4gIGNvbnN0IHVwbG9hZFNpemUgPSByZWYoMClcbiAgY29uc3QgdXBsb2FkUHJvZ3Jlc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgdXBsb2FkU2l6ZS52YWx1ZSA9PT0gMFxuICAgICAgPyAwXG4gICAgICA6IHN0YXRlLnVwbG9hZGVkU2l6ZS52YWx1ZSAvIHVwbG9hZFNpemUudmFsdWVcbiAgKSlcbiAgY29uc3QgdXBsb2FkUHJvZ3Jlc3NMYWJlbCA9IGNvbXB1dGVkKCgpID0+IGdldFByb2dyZXNzTGFiZWwodXBsb2FkUHJvZ3Jlc3MudmFsdWUpKVxuICBjb25zdCB1cGxvYWRTaXplTGFiZWwgPSBjb21wdXRlZCgoKSA9PiBodW1hblN0b3JhZ2VTaXplKHVwbG9hZFNpemUudmFsdWUpKVxuXG4gIGNvbnN0IGNhbkFkZEZpbGVzID0gY29tcHV0ZWQoKCkgPT5cbiAgICBlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICYmIHN0YXRlLmlzVXBsb2FkaW5nLnZhbHVlICE9PSB0cnVlXG4gICAgLy8gaWYgc2luZ2xlIHNlbGVjdGlvbiBhbmQgbm8gZmlsZXMgYXJlIHF1ZXVlZDpcbiAgICAmJiAocHJvcHMubXVsdGlwbGUgPT09IHRydWUgfHwgc3RhdGUucXVldWVkRmlsZXMudmFsdWUubGVuZ3RoID09PSAwKVxuICAgIC8vIGlmIG1heC1maWxlcyBpcyBzZXQgYW5kIGN1cnJlbnQgbnVtYmVyIG9mIGZpbGVzIGRvZXMgbm90IGV4Y2VlZHMgaXQ6XG4gICAgJiYgKHByb3BzLm1heEZpbGVzID09PSB2b2lkIDAgfHwgc3RhdGUuZmlsZXMudmFsdWUubGVuZ3RoIDwgbWF4RmlsZXNOdW1iZXIudmFsdWUpXG4gICAgLy8gaWYgbWF4LXRvdGFsLXNpemUgaXMgc2V0IGFuZCBjdXJyZW50IHVwbG9hZCBzaXplIGRvZXMgbm90IGV4Y2VlZHMgaXQ6XG4gICAgJiYgKHByb3BzLm1heFRvdGFsU2l6ZSA9PT0gdm9pZCAwIHx8IHVwbG9hZFNpemUudmFsdWUgPCBtYXhUb3RhbFNpemVOdW1iZXIudmFsdWUpXG4gIClcblxuICBjb25zdCBjYW5VcGxvYWQgPSBjb21wdXRlZCgoKSA9PlxuICAgIGVkaXRhYmxlLnZhbHVlID09PSB0cnVlXG4gICAgJiYgc3RhdGUuaXNCdXN5LnZhbHVlICE9PSB0cnVlXG4gICAgJiYgc3RhdGUuaXNVcGxvYWRpbmcudmFsdWUgIT09IHRydWVcbiAgICAmJiBzdGF0ZS5xdWV1ZWRGaWxlcy52YWx1ZS5sZW5ndGggIT09IDBcbiAgKVxuXG4gIHByb3ZpZGUodXBsb2FkZXJLZXksIHJlbmRlcklucHV0KVxuXG4gIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICdxLXVwbG9hZGVyIGNvbHVtbiBuby13cmFwJ1xuICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS11cGxvYWRlci0tZGFyayBxLWRhcmsnIDogJycpXG4gICAgKyAocHJvcHMuYm9yZGVyZWQgPT09IHRydWUgPyAnIHEtdXBsb2FkZXItLWJvcmRlcmVkJyA6ICcnKVxuICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS11cGxvYWRlci0tc3F1YXJlIG5vLWJvcmRlci1yYWRpdXMnIDogJycpXG4gICAgKyAocHJvcHMuZmxhdCA9PT0gdHJ1ZSA/ICcgcS11cGxvYWRlci0tZmxhdCBuby1zaGFkb3cnIDogJycpXG4gICAgKyAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQgcS11cGxvYWRlci0tZGlzYWJsZScgOiAnJylcbiAgICArIChkbmQudmFsdWUgPT09IHRydWUgPyAnIHEtdXBsb2FkZXItLWRuZCcgOiAnJylcbiAgKVxuXG4gIGNvbnN0IGNvbG9yQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICdxLXVwbG9hZGVyX19oZWFkZXInXG4gICAgKyAocHJvcHMuY29sb3IgIT09IHZvaWQgMCA/IGAgYmctJHsgcHJvcHMuY29sb3IgfWAgOiAnJylcbiAgICArIChwcm9wcy50ZXh0Q29sb3IgIT09IHZvaWQgMCA/IGAgdGV4dC0keyBwcm9wcy50ZXh0Q29sb3IgfWAgOiAnJylcbiAgKVxuXG4gIHdhdGNoKHN0YXRlLmlzVXBsb2FkaW5nLCAobmV3VmFsLCBvbGRWYWwpID0+IHtcbiAgICBpZiAob2xkVmFsID09PSBmYWxzZSAmJiBuZXdWYWwgPT09IHRydWUpIHtcbiAgICAgIGVtaXQoJ3N0YXJ0JylcbiAgICB9XG4gICAgZWxzZSBpZiAob2xkVmFsID09PSB0cnVlICYmIG5ld1ZhbCA9PT0gZmFsc2UpIHtcbiAgICAgIGVtaXQoJ2ZpbmlzaCcpXG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIHJlc2V0ICgpIHtcbiAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgIHN0YXRlLmFib3J0KClcbiAgICAgIHN0YXRlLnVwbG9hZGVkU2l6ZS52YWx1ZSA9IDBcbiAgICAgIHVwbG9hZFNpemUudmFsdWUgPSAwXG4gICAgICByZXZva2VJbWdVUkxzKClcbiAgICAgIHN0YXRlLmZpbGVzLnZhbHVlID0gW11cbiAgICAgIHN0YXRlLnF1ZXVlZEZpbGVzLnZhbHVlID0gW11cbiAgICAgIHN0YXRlLnVwbG9hZGVkRmlsZXMudmFsdWUgPSBbXVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVVwbG9hZGVkRmlsZXMgKCkge1xuICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSBmYWxzZSkge1xuICAgICAgYmF0Y2hSZW1vdmVGaWxlcyhbICd1cGxvYWRlZCcgXSwgKCkgPT4ge1xuICAgICAgICBzdGF0ZS51cGxvYWRlZEZpbGVzLnZhbHVlID0gW11cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlUXVldWVkRmlsZXMgKCkge1xuICAgIGJhdGNoUmVtb3ZlRmlsZXMoWyAnaWRsZScsICdmYWlsZWQnIF0sICh7IHNpemUgfSkgPT4ge1xuICAgICAgdXBsb2FkU2l6ZS52YWx1ZSAtPSBzaXplXG4gICAgICBzdGF0ZS5xdWV1ZWRGaWxlcy52YWx1ZSA9IFtdXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGJhdGNoUmVtb3ZlRmlsZXMgKHN0YXR1c0xpc3QsIGNiKSB7XG4gICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZWQgPSB7XG4gICAgICBmaWxlczogW10sXG4gICAgICBzaXplOiAwXG4gICAgfVxuXG4gICAgY29uc3QgbG9jYWxGaWxlcyA9IHN0YXRlLmZpbGVzLnZhbHVlLmZpbHRlcihmID0+IHtcbiAgICAgIGlmIChzdGF0dXNMaXN0LmluZGV4T2YoZi5fX3N0YXR1cykgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIHJlbW92ZWQuc2l6ZSArPSBmLnNpemVcbiAgICAgIHJlbW92ZWQuZmlsZXMucHVzaChmKVxuXG4gICAgICBmLl9faW1nICE9PSB2b2lkIDAgJiYgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwoZi5fX2ltZy5zcmMpXG5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAocmVtb3ZlZC5maWxlcy5sZW5ndGggIT09IDApIHtcbiAgICAgIHN0YXRlLmZpbGVzLnZhbHVlID0gbG9jYWxGaWxlc1xuICAgICAgY2IocmVtb3ZlZClcbiAgICAgIGVtaXQoJ3JlbW92ZWQnLCByZW1vdmVkLmZpbGVzKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUZpbGUgKGZpbGUpIHtcbiAgICBpZiAocHJvcHMuZGlzYWJsZSkgeyByZXR1cm4gfVxuXG4gICAgaWYgKGZpbGUuX19zdGF0dXMgPT09ICd1cGxvYWRlZCcpIHtcbiAgICAgIHN0YXRlLnVwbG9hZGVkRmlsZXMudmFsdWUgPSBzdGF0ZS51cGxvYWRlZEZpbGVzLnZhbHVlLmZpbHRlcihmID0+IGYuX19rZXkgIT09IGZpbGUuX19rZXkpXG4gICAgfVxuICAgIGVsc2UgaWYgKGZpbGUuX19zdGF0dXMgPT09ICd1cGxvYWRpbmcnKSB7XG4gICAgICBmaWxlLl9fYWJvcnQoKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHVwbG9hZFNpemUudmFsdWUgLT0gZmlsZS5zaXplXG4gICAgfVxuXG4gICAgc3RhdGUuZmlsZXMudmFsdWUgPSBzdGF0ZS5maWxlcy52YWx1ZS5maWx0ZXIoZiA9PiB7XG4gICAgICBpZiAoZi5fX2tleSAhPT0gZmlsZS5fX2tleSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBmLl9faW1nICE9PSB2b2lkIDAgJiYgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwoZi5fX2ltZy5zcmMpXG5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBzdGF0ZS5xdWV1ZWRGaWxlcy52YWx1ZSA9IHN0YXRlLnF1ZXVlZEZpbGVzLnZhbHVlLmZpbHRlcihmID0+IGYuX19rZXkgIT09IGZpbGUuX19rZXkpXG4gICAgZW1pdCgncmVtb3ZlZCcsIFsgZmlsZSBdKVxuICB9XG5cbiAgZnVuY3Rpb24gcmV2b2tlSW1nVVJMcyAoKSB7XG4gICAgc3RhdGUuZmlsZXMudmFsdWUuZm9yRWFjaChmID0+IHtcbiAgICAgIGYuX19pbWcgIT09IHZvaWQgMCAmJiB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTChmLl9faW1nLnNyYylcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RmlsZUlucHV0ICgpIHtcbiAgICByZXR1cm4gaW5wdXRSZWYudmFsdWVcbiAgICAgIHx8IHJvb3RSZWYudmFsdWUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncS11cGxvYWRlcl9faW5wdXQnKVsgMCBdXG4gIH1cblxuICBmdW5jdGlvbiBhZGRGaWxlc1RvUXVldWUgKGUsIGZpbGVMaXN0KSB7XG4gICAgY29uc3QgbG9jYWxGaWxlcyA9IHByb2Nlc3NGaWxlcyhlLCBmaWxlTGlzdCwgc3RhdGUuZmlsZXMudmFsdWUsIHRydWUpXG4gICAgY29uc3QgZmlsZUlucHV0ID0gZ2V0RmlsZUlucHV0KClcblxuICAgIGlmIChmaWxlSW5wdXQgIT09IHZvaWQgMCAmJiBmaWxlSW5wdXQgIT09IG51bGwpIHtcbiAgICAgIGZpbGVJbnB1dC52YWx1ZSA9ICcnXG4gICAgfVxuXG4gICAgaWYgKGxvY2FsRmlsZXMgPT09IHZvaWQgMCkgeyByZXR1cm4gfVxuXG4gICAgbG9jYWxGaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgc3RhdGUudXBkYXRlRmlsZVN0YXR1cyhmaWxlLCAnaWRsZScpXG4gICAgICB1cGxvYWRTaXplLnZhbHVlICs9IGZpbGUuc2l6ZVxuXG4gICAgICBpZiAocHJvcHMubm9UaHVtYm5haWxzICE9PSB0cnVlICYmIGZpbGUudHlwZS50b1VwcGVyQ2FzZSgpLnN0YXJ0c1dpdGgoJ0lNQUdFJykpIHtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKClcbiAgICAgICAgaW1nLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgICAgIGZpbGUuX19pbWcgPSBpbWdcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgc3RhdGUuZmlsZXMudmFsdWUgPSBzdGF0ZS5maWxlcy52YWx1ZS5jb25jYXQobG9jYWxGaWxlcylcbiAgICBzdGF0ZS5xdWV1ZWRGaWxlcy52YWx1ZSA9IHN0YXRlLnF1ZXVlZEZpbGVzLnZhbHVlLmNvbmNhdChsb2NhbEZpbGVzKVxuICAgIGVtaXQoJ2FkZGVkJywgbG9jYWxGaWxlcylcbiAgICBwcm9wcy5hdXRvVXBsb2FkID09PSB0cnVlICYmIHN0YXRlLnVwbG9hZCgpXG4gIH1cblxuICBmdW5jdGlvbiB1cGxvYWQgKCkge1xuICAgIGNhblVwbG9hZC52YWx1ZSA9PT0gdHJ1ZSAmJiBzdGF0ZS51cGxvYWQoKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QnRuIChzaG93LCBpY29uLCBmbikge1xuICAgIGlmIChzaG93ID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB0eXBlOiAnYScsXG4gICAgICAgIGtleTogaWNvbixcbiAgICAgICAgaWNvbjogJHEuaWNvblNldC51cGxvYWRlclsgaWNvbiBdLFxuICAgICAgICBmbGF0OiB0cnVlLFxuICAgICAgICBkZW5zZTogdHJ1ZVxuICAgICAgfVxuXG4gICAgICBsZXQgY2hpbGQgPSB2b2lkIDBcblxuICAgICAgaWYgKGljb24gPT09ICdhZGQnKSB7XG4gICAgICAgIGRhdGEub25DbGljayA9IHBpY2tGaWxlc1xuICAgICAgICBjaGlsZCA9IHJlbmRlcklucHV0XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGF0YS5vbkNsaWNrID0gZm5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoUUJ0biwgZGF0YSwgY2hpbGQpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVySW5wdXQgKCkge1xuICAgIHJldHVybiBoKCdpbnB1dCcsIHtcbiAgICAgIHJlZjogaW5wdXRSZWYsXG4gICAgICBjbGFzczogJ3EtdXBsb2FkZXJfX2lucHV0IG92ZXJmbG93LWhpZGRlbiBhYnNvbHV0ZS1mdWxsJyxcbiAgICAgIHRhYmluZGV4OiAtMSxcbiAgICAgIHR5cGU6ICdmaWxlJyxcbiAgICAgIHRpdGxlOiAnJywgLy8gdHJ5IHRvIHJlbW92ZSBkZWZhdWx0IHRvb2x0aXBcbiAgICAgIGFjY2VwdDogcHJvcHMuYWNjZXB0LFxuICAgICAgbXVsdGlwbGU6IHByb3BzLm11bHRpcGxlID09PSB0cnVlID8gJ211bHRpcGxlJyA6IHZvaWQgMCxcbiAgICAgIGNhcHR1cmU6IHByb3BzLmNhcHR1cmUsXG4gICAgICBvbk1vdXNlZG93bjogc3RvcCwgLy8gbmVlZCB0byBzdG9wIHJlZm9jdXMgZnJvbSBRQnRuXG4gICAgICBvbkNsaWNrOiBwaWNrRmlsZXMsXG4gICAgICBvbkNoYW5nZTogYWRkRmlsZXNUb1F1ZXVlXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEhlYWRlciAoKSB7XG4gICAgaWYgKHNsb3RzLmhlYWRlciAhPT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gc2xvdHMuaGVhZGVyKHB1YmxpY0FwaSlcbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogJ3EtdXBsb2FkZXJfX2hlYWRlci1jb250ZW50IGNvbHVtbidcbiAgICAgIH0sIFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAnZmxleCBmbGV4LWNlbnRlciBuby13cmFwIHEtZ3V0dGVyLXhzJ1xuICAgICAgICB9LCBbXG4gICAgICAgICAgZ2V0QnRuKHN0YXRlLnF1ZXVlZEZpbGVzLnZhbHVlLmxlbmd0aCAhPT0gMCwgJ3JlbW92ZVF1ZXVlJywgcmVtb3ZlUXVldWVkRmlsZXMpLFxuICAgICAgICAgIGdldEJ0bihzdGF0ZS51cGxvYWRlZEZpbGVzLnZhbHVlLmxlbmd0aCAhPT0gMCwgJ3JlbW92ZVVwbG9hZGVkJywgcmVtb3ZlVXBsb2FkZWRGaWxlcyksXG5cbiAgICAgICAgICBzdGF0ZS5pc1VwbG9hZGluZy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBoKFFTcGlubmVyLCB7IGNsYXNzOiAncS11cGxvYWRlcl9fc3Bpbm5lcicgfSlcbiAgICAgICAgICAgIDogbnVsbCxcblxuICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdjb2wgY29sdW1uIGp1c3RpZnktY2VudGVyJyB9LCBbXG4gICAgICAgICAgICBwcm9wcy5sYWJlbCAhPT0gdm9pZCAwXG4gICAgICAgICAgICAgID8gaCgnZGl2JywgeyBjbGFzczogJ3EtdXBsb2FkZXJfX3RpdGxlJyB9LCBbIHByb3BzLmxhYmVsIF0pXG4gICAgICAgICAgICAgIDogbnVsbCxcblxuICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdXBsb2FkZXJfX3N1YnRpdGxlJyB9LCBbXG4gICAgICAgICAgICAgIHVwbG9hZFNpemVMYWJlbC52YWx1ZSArICcgLyAnICsgdXBsb2FkUHJvZ3Jlc3NMYWJlbC52YWx1ZVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcblxuICAgICAgICAgIGdldEJ0bihjYW5BZGRGaWxlcy52YWx1ZSwgJ2FkZCcpLFxuICAgICAgICAgIGdldEJ0bihwcm9wcy5oaWRlVXBsb2FkQnRuID09PSBmYWxzZSAmJiBjYW5VcGxvYWQudmFsdWUgPT09IHRydWUsICd1cGxvYWQnLCBzdGF0ZS51cGxvYWQpLFxuICAgICAgICAgIGdldEJ0bihzdGF0ZS5pc1VwbG9hZGluZy52YWx1ZSwgJ2NsZWFyJywgc3RhdGUuYWJvcnQpXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExpc3QgKCkge1xuICAgIGlmIChzbG90cy5saXN0ICE9PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiBzbG90cy5saXN0KHB1YmxpY0FwaSlcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGUuZmlsZXMudmFsdWUubWFwKGZpbGUgPT4gaCgnZGl2Jywge1xuICAgICAga2V5OiBmaWxlLl9fa2V5LFxuICAgICAgY2xhc3M6ICdxLXVwbG9hZGVyX19maWxlIHJlbGF0aXZlLXBvc2l0aW9uJ1xuICAgICAgICArIChwcm9wcy5ub1RodW1ibmFpbHMgIT09IHRydWUgJiYgZmlsZS5fX2ltZyAhPT0gdm9pZCAwID8gJyBxLXVwbG9hZGVyX19maWxlLS1pbWcnIDogJycpXG4gICAgICAgICsgKFxuICAgICAgICAgIGZpbGUuX19zdGF0dXMgPT09ICdmYWlsZWQnXG4gICAgICAgICAgICA/ICcgcS11cGxvYWRlcl9fZmlsZS0tZmFpbGVkJ1xuICAgICAgICAgICAgOiAoZmlsZS5fX3N0YXR1cyA9PT0gJ3VwbG9hZGVkJyA/ICcgcS11cGxvYWRlcl9fZmlsZS0tdXBsb2FkZWQnIDogJycpXG4gICAgICAgICksXG4gICAgICBzdHlsZTogcHJvcHMubm9UaHVtYm5haWxzICE9PSB0cnVlICYmIGZpbGUuX19pbWcgIT09IHZvaWQgMFxuICAgICAgICA/IHsgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiJyArIGZpbGUuX19pbWcuc3JjICsgJ1wiKScgfVxuICAgICAgICA6IG51bGxcbiAgICB9LCBbXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiAncS11cGxvYWRlcl9fZmlsZS1oZWFkZXIgcm93IGZsZXgtY2VudGVyIG5vLXdyYXAnXG4gICAgICB9LCBbXG4gICAgICAgIGZpbGUuX19zdGF0dXMgPT09ICdmYWlsZWQnXG4gICAgICAgICAgPyBoKFFJY29uLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtdXBsb2FkZXJfX2ZpbGUtc3RhdHVzJyxcbiAgICAgICAgICAgIG5hbWU6ICRxLmljb25TZXQudHlwZS5uZWdhdGl2ZSxcbiAgICAgICAgICAgIGNvbG9yOiAnbmVnYXRpdmUnXG4gICAgICAgICAgfSlcbiAgICAgICAgICA6IG51bGwsXG5cbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdXBsb2FkZXJfX2ZpbGUtaGVhZGVyLWNvbnRlbnQgY29sJyB9LCBbXG4gICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdXBsb2FkZXJfX3RpdGxlJyB9LCBbIGZpbGUubmFtZSBdKSxcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtdXBsb2FkZXJfX3N1YnRpdGxlIHJvdyBpdGVtcy1jZW50ZXIgbm8td3JhcCdcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBmaWxlLl9fc2l6ZUxhYmVsICsgJyAvICcgKyBmaWxlLl9fcHJvZ3Jlc3NMYWJlbFxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuXG4gICAgICAgIGZpbGUuX19zdGF0dXMgPT09ICd1cGxvYWRpbmcnXG4gICAgICAgICAgPyBoKFFDaXJjdWxhclByb2dyZXNzLCB7XG4gICAgICAgICAgICB2YWx1ZTogZmlsZS5fX3Byb2dyZXNzLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAxLFxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZTogZmlsZS5fX3Byb2dyZXNzID09PSAwXG4gICAgICAgICAgfSlcbiAgICAgICAgICA6IGgoUUJ0biwge1xuICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgIGZsYXQ6IHRydWUsXG4gICAgICAgICAgICBpY29uOiAkcS5pY29uU2V0LnVwbG9hZGVyWyBmaWxlLl9fc3RhdHVzID09PSAndXBsb2FkZWQnID8gJ2RvbmUnIDogJ2NsZWFyJyBdLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4geyByZW1vdmVGaWxlKGZpbGUpIH1cbiAgICAgICAgICB9KVxuICAgICAgXSlcbiAgICBdKSlcbiAgfVxuXG4gIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgc3RhdGUuaXNVcGxvYWRpbmcudmFsdWUgPT09IHRydWUgJiYgc3RhdGUuYWJvcnQoKVxuICAgIHN0YXRlLmZpbGVzLnZhbHVlLmxlbmd0aCAhPT0gMCAmJiByZXZva2VJbWdVUkxzKClcbiAgfSlcblxuICBjb25zdCBwdWJsaWNBcGkgPSB7fVxuXG4gIGZvciAoY29uc3Qga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKGlzUmVmKHN0YXRlWyBrZXkgXSkgPT09IHRydWUpIHtcbiAgICAgIGluamVjdFByb3AocHVibGljQXBpLCBrZXksICgpID0+IHN0YXRlWyBrZXkgXS52YWx1ZSlcbiAgICB9XG4gICAgZWxzZSB7IC8vIG1ldGhvZCBvciBub24tY29tcHV0ZWQgcHJvcFxuICAgICAgcHVibGljQXBpWyBrZXkgXSA9IHN0YXRlWyBrZXkgXVxuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24ocHVibGljQXBpLCB7XG4gICAgdXBsb2FkLFxuICAgIHJlc2V0LFxuICAgIHJlbW92ZVVwbG9hZGVkRmlsZXMsXG4gICAgcmVtb3ZlUXVldWVkRmlsZXMsXG4gICAgcmVtb3ZlRmlsZSxcblxuICAgIHBpY2tGaWxlcyxcbiAgICBhZGRGaWxlc1xuICB9KVxuXG4gIGluamVjdE11bHRpcGxlUHJvcHMocHVibGljQXBpLCB7XG4gICAgY2FuQWRkRmlsZXM6ICgpID0+IGNhbkFkZEZpbGVzLnZhbHVlLFxuICAgIGNhblVwbG9hZDogKCkgPT4gY2FuVXBsb2FkLnZhbHVlLFxuICAgIHVwbG9hZFNpemVMYWJlbDogKCkgPT4gdXBsb2FkU2l6ZUxhYmVsLnZhbHVlLFxuICAgIHVwbG9hZFByb2dyZXNzTGFiZWw6ICgpID0+IHVwbG9hZFByb2dyZXNzTGFiZWwudmFsdWVcbiAgfSlcblxuICAvLyBleHBvc2UgcHVibGljIGFwaSAobWV0aG9kcyAmIGNvbXB1dGVkIHByb3BzKVxuICBleHBvc2Uoe1xuICAgIC4uLnN0YXRlLFxuXG4gICAgdXBsb2FkLFxuICAgIHJlc2V0LFxuICAgIHJlbW92ZVVwbG9hZGVkRmlsZXMsXG4gICAgcmVtb3ZlUXVldWVkRmlsZXMsXG4gICAgcmVtb3ZlRmlsZSxcblxuICAgIHBpY2tGaWxlcyxcbiAgICBhZGRGaWxlcyxcblxuICAgIGNhbkFkZEZpbGVzLFxuICAgIGNhblVwbG9hZCxcbiAgICB1cGxvYWRTaXplTGFiZWwsXG4gICAgdXBsb2FkUHJvZ3Jlc3NMYWJlbFxuICB9KVxuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXG4gICAgICBoKCdkaXYnLCB7IGNsYXNzOiBjb2xvckNsYXNzLnZhbHVlIH0sIGdldEhlYWRlcigpKSxcbiAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXVwbG9hZGVyX19saXN0IHNjcm9sbCcgfSwgZ2V0TGlzdCgpKSxcbiAgICAgIGdldERuZE5vZGUoJ3VwbG9hZGVyJylcbiAgICBdXG5cbiAgICBzdGF0ZS5pc0J1c3kudmFsdWUgPT09IHRydWUgJiYgY2hpbGRyZW4ucHVzaChcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6ICdxLXVwbG9hZGVyX19vdmVybGF5IGFic29sdXRlLWZ1bGwgZmxleCBmbGV4LWNlbnRlcidcbiAgICAgIH0sIFsgaChRU3Bpbm5lcikgXSlcbiAgICApXG5cbiAgICBjb25zdCBkYXRhID0geyByZWY6IHJvb3RSZWYsIGNsYXNzOiBjbGFzc2VzLnZhbHVlIH1cblxuICAgIGlmIChjYW5BZGRGaWxlcy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7IG9uRHJhZ292ZXIsIG9uRHJhZ2xlYXZlIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoJ2RpdicsIGRhdGEsIGNoaWxkcmVuKVxuICB9XG59XG4iLCJjb25zdCB0cnVlRm4gPSAoKSA9PiB0cnVlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlbWl0c0FycmF5KSB7XG4gIGNvbnN0IGVtaXRzT2JqZWN0ID0ge31cblxuICBlbWl0c0FycmF5LmZvckVhY2godmFsID0+IHtcbiAgICBlbWl0c09iamVjdFsgdmFsIF0gPSB0cnVlRm5cbiAgfSlcblxuICByZXR1cm4gZW1pdHNPYmplY3Rcbn1cbiIsImltcG9ydCB7IGNvcmVQcm9wcywgY29yZUVtaXRzLCBnZXRSZW5kZXJlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvdXBsb2FkZXIvdXBsb2FkZXItY29yZS5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCBnZXRFbWl0c09iamVjdCBmcm9tICcuL3ByaXZhdGUvZ2V0LWVtaXRzLW9iamVjdC5qcydcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi9pcy5qcydcblxuY29uc3QgY29yZUVtaXRzT2JqZWN0ID0gZ2V0RW1pdHNPYmplY3QoY29yZUVtaXRzKVxuXG5leHBvcnQgZGVmYXVsdCAoeyBuYW1lLCBwcm9wcywgZW1pdHMsIGluamVjdFBsdWdpbiB9KSA9PiBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lLFxuXG4gIHByb3BzOiB7XG4gICAgLi4uY29yZVByb3BzLFxuICAgIC4uLnByb3BzXG4gIH0sXG5cbiAgZW1pdHM6IGlzT2JqZWN0KGVtaXRzKSA9PT0gdHJ1ZVxuICAgID8geyAuLi5jb3JlRW1pdHNPYmplY3QsIC4uLmVtaXRzIH1cbiAgICA6IFsgLi4uY29yZUVtaXRzLCAuLi5lbWl0cyBdLFxuXG4gIHNldHVwIChfLCB7IGV4cG9zZSB9KSB7XG4gICAgcmV0dXJuIGdldFJlbmRlcmVyKGluamVjdFBsdWdpbiwgZXhwb3NlKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgcmVmLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuZnVuY3Rpb24gZ2V0Rm4gKHByb3ApIHtcbiAgcmV0dXJuIHR5cGVvZiBwcm9wID09PSAnZnVuY3Rpb24nXG4gICAgPyBwcm9wXG4gICAgOiAoKSA9PiBwcm9wXG59XG5cbmNvbnN0IHByb3BzID0ge1xuICB1cmw6IFsgRnVuY3Rpb24sIFN0cmluZyBdLFxuICBtZXRob2Q6IHtcbiAgICB0eXBlOiBbIEZ1bmN0aW9uLCBTdHJpbmcgXSxcbiAgICBkZWZhdWx0OiAnUE9TVCdcbiAgfSxcbiAgZmllbGROYW1lOiB7XG4gICAgdHlwZTogWyBGdW5jdGlvbiwgU3RyaW5nIF0sXG4gICAgZGVmYXVsdDogKCkgPT4ge1xuICAgICAgcmV0dXJuIGZpbGUgPT4gZmlsZS5uYW1lXG4gICAgfVxuICB9LFxuICBoZWFkZXJzOiBbIEZ1bmN0aW9uLCBBcnJheSBdLFxuICBmb3JtRmllbGRzOiBbIEZ1bmN0aW9uLCBBcnJheSBdLFxuICB3aXRoQ3JlZGVudGlhbHM6IFsgRnVuY3Rpb24sIEJvb2xlYW4gXSxcbiAgc2VuZFJhdzogWyBGdW5jdGlvbiwgQm9vbGVhbiBdLFxuXG4gIGJhdGNoOiBbIEZ1bmN0aW9uLCBCb29sZWFuIF0sXG4gIGZhY3Rvcnk6IEZ1bmN0aW9uXG59XG5cbmNvbnN0IGVtaXRzID0gWyAnZmFjdG9yeUZhaWxlZCcsICd1cGxvYWRlZCcsICdmYWlsZWQnLCAndXBsb2FkaW5nJyBdXG5cbmZ1bmN0aW9uIGluamVjdFBsdWdpbiAoeyBwcm9wcywgZW1pdCwgaGVscGVycyB9KSB7XG4gIGNvbnN0IHhocnMgPSByZWYoW10pXG4gIGNvbnN0IHByb21pc2VzID0gcmVmKFtdKVxuICBjb25zdCB3b3JraW5nVGhyZWFkcyA9IHJlZigwKVxuXG4gIGNvbnN0IHhoclByb3BzID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICB1cmw6IGdldEZuKHByb3BzLnVybCksXG4gICAgbWV0aG9kOiBnZXRGbihwcm9wcy5tZXRob2QpLFxuICAgIGhlYWRlcnM6IGdldEZuKHByb3BzLmhlYWRlcnMpLFxuICAgIGZvcm1GaWVsZHM6IGdldEZuKHByb3BzLmZvcm1GaWVsZHMpLFxuICAgIGZpZWxkTmFtZTogZ2V0Rm4ocHJvcHMuZmllbGROYW1lKSxcbiAgICB3aXRoQ3JlZGVudGlhbHM6IGdldEZuKHByb3BzLndpdGhDcmVkZW50aWFscyksXG4gICAgc2VuZFJhdzogZ2V0Rm4ocHJvcHMuc2VuZFJhdyksXG4gICAgYmF0Y2g6IGdldEZuKHByb3BzLmJhdGNoKVxuICB9KSlcblxuICBjb25zdCBpc1VwbG9hZGluZyA9IGNvbXB1dGVkKCgpID0+IHdvcmtpbmdUaHJlYWRzLnZhbHVlID4gMClcbiAgY29uc3QgaXNCdXN5ID0gY29tcHV0ZWQoKCkgPT4gcHJvbWlzZXMudmFsdWUubGVuZ3RoICE9PSAwKVxuXG4gIGxldCBhYm9ydFByb21pc2VzXG5cbiAgZnVuY3Rpb24gYWJvcnQgKCkge1xuICAgIHhocnMudmFsdWUuZm9yRWFjaCh4ID0+IHsgeC5hYm9ydCgpIH0pXG5cbiAgICBpZiAocHJvbWlzZXMudmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICBhYm9ydFByb21pc2VzID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwbG9hZCAoKSB7XG4gICAgY29uc3QgcXVldWUgPSBoZWxwZXJzLnF1ZXVlZEZpbGVzLnZhbHVlLnNsaWNlKDApXG4gICAgaGVscGVycy5xdWV1ZWRGaWxlcy52YWx1ZSA9IFtdXG5cbiAgICBpZiAoeGhyUHJvcHMudmFsdWUuYmF0Y2gocXVldWUpKSB7XG4gICAgICBydW5GYWN0b3J5KHF1ZXVlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHF1ZXVlLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgIHJ1bkZhY3RvcnkoWyBmaWxlIF0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJ1bkZhY3RvcnkgKGZpbGVzKSB7XG4gICAgd29ya2luZ1RocmVhZHMudmFsdWUrK1xuXG4gICAgaWYgKHR5cGVvZiBwcm9wcy5mYWN0b3J5ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwZXJmb3JtVXBsb2FkKGZpbGVzLCB7fSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlcyA9IHByb3BzLmZhY3RvcnkoZmlsZXMpXG5cbiAgICBpZiAoIXJlcykge1xuICAgICAgZW1pdChcbiAgICAgICAgJ2ZhY3RvcnlGYWlsZWQnLFxuICAgICAgICBuZXcgRXJyb3IoJ1FVcGxvYWRlcjogZmFjdG9yeSgpIGRvZXMgbm90IHJldHVybiBwcm9wZXJseScpLFxuICAgICAgICBmaWxlc1xuICAgICAgKVxuICAgICAgd29ya2luZ1RocmVhZHMudmFsdWUtLVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgcmVzLmNhdGNoID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiByZXMudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvbWlzZXMudmFsdWUucHVzaChyZXMpXG5cbiAgICAgIGNvbnN0IGZhaWxlZCA9IGVyciA9PiB7XG4gICAgICAgIGlmIChoZWxwZXJzLmlzQWxpdmUoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHByb21pc2VzLnZhbHVlID0gcHJvbWlzZXMudmFsdWUuZmlsdGVyKHAgPT4gcCAhPT0gcmVzKVxuXG4gICAgICAgICAgaWYgKHByb21pc2VzLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgYWJvcnRQcm9taXNlcyA9IGZhbHNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaGVscGVycy5xdWV1ZWRGaWxlcy52YWx1ZSA9IGhlbHBlcnMucXVldWVkRmlsZXMudmFsdWUuY29uY2F0KGZpbGVzKVxuICAgICAgICAgIGZpbGVzLmZvckVhY2goZiA9PiB7IGhlbHBlcnMudXBkYXRlRmlsZVN0YXR1cyhmLCAnZmFpbGVkJykgfSlcblxuICAgICAgICAgIGVtaXQoJ2ZhY3RvcnlGYWlsZWQnLCBlcnIsIGZpbGVzKVxuICAgICAgICAgIHdvcmtpbmdUaHJlYWRzLnZhbHVlLS1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXMudGhlbihmYWN0b3J5ID0+IHtcbiAgICAgICAgaWYgKGFib3J0UHJvbWlzZXMgPT09IHRydWUpIHtcbiAgICAgICAgICBmYWlsZWQobmV3IEVycm9yKCdBYm9ydGVkJykpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaGVscGVycy5pc0FsaXZlKCkgPT09IHRydWUpIHtcbiAgICAgICAgICBwcm9taXNlcy52YWx1ZSA9IHByb21pc2VzLnZhbHVlLmZpbHRlcihwID0+IHAgIT09IHJlcylcbiAgICAgICAgICBwZXJmb3JtVXBsb2FkKGZpbGVzLCBmYWN0b3J5KVxuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChmYWlsZWQpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcGVyZm9ybVVwbG9hZChmaWxlcywgcmVzIHx8IHt9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBlcmZvcm1VcGxvYWQgKGZpbGVzLCBmYWN0b3J5KSB7XG4gICAgY29uc3RcbiAgICAgIGZvcm0gPSBuZXcgRm9ybURhdGEoKSxcbiAgICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG5cbiAgICBjb25zdCBnZXRQcm9wID0gKG5hbWUsIGFyZykgPT4ge1xuICAgICAgcmV0dXJuIGZhY3RvcnlbIG5hbWUgXSAhPT0gdm9pZCAwXG4gICAgICAgID8gZ2V0Rm4oZmFjdG9yeVsgbmFtZSBdKShhcmcpXG4gICAgICAgIDogeGhyUHJvcHMudmFsdWVbIG5hbWUgXShhcmcpXG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gZ2V0UHJvcCgndXJsJywgZmlsZXMpXG5cbiAgICBpZiAoIXVybCkge1xuICAgICAgY29uc29sZS5lcnJvcigncS11cGxvYWRlcjogaW52YWxpZCBvciBubyBVUkwgc3BlY2lmaWVkJylcbiAgICAgIHdvcmtpbmdUaHJlYWRzLnZhbHVlLS1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkcyA9IGdldFByb3AoJ2Zvcm1GaWVsZHMnLCBmaWxlcylcbiAgICBmaWVsZHMgIT09IHZvaWQgMCAmJiBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBmb3JtLmFwcGVuZChmaWVsZC5uYW1lLCBmaWVsZC52YWx1ZSlcbiAgICB9KVxuXG4gICAgbGV0XG4gICAgICB1cGxvYWRJbmRleCA9IDAsXG4gICAgICB1cGxvYWRJbmRleFNpemUgPSAwLFxuICAgICAgbG9jYWxVcGxvYWRlZFNpemUgPSAwLFxuICAgICAgbWF4VXBsb2FkU2l6ZSA9IDAsXG4gICAgICBhYm9ydGVkXG5cbiAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgZSA9PiB7XG4gICAgICBpZiAoYWJvcnRlZCA9PT0gdHJ1ZSkgeyByZXR1cm4gfVxuXG4gICAgICBjb25zdCBsb2FkZWQgPSBNYXRoLm1pbihtYXhVcGxvYWRTaXplLCBlLmxvYWRlZClcblxuICAgICAgaGVscGVycy51cGxvYWRlZFNpemUudmFsdWUgKz0gbG9hZGVkIC0gbG9jYWxVcGxvYWRlZFNpemVcbiAgICAgIGxvY2FsVXBsb2FkZWRTaXplID0gbG9hZGVkXG5cbiAgICAgIGxldCBzaXplID0gbG9jYWxVcGxvYWRlZFNpemUgLSB1cGxvYWRJbmRleFNpemVcbiAgICAgIGZvciAobGV0IGkgPSB1cGxvYWRJbmRleDsgc2l6ZSA+IDAgJiYgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgZmlsZSA9IGZpbGVzWyBpIF0sXG4gICAgICAgICAgdXBsb2FkZWQgPSBzaXplID4gZmlsZS5zaXplXG5cbiAgICAgICAgaWYgKHVwbG9hZGVkKSB7XG4gICAgICAgICAgc2l6ZSAtPSBmaWxlLnNpemVcbiAgICAgICAgICB1cGxvYWRJbmRleCsrXG4gICAgICAgICAgdXBsb2FkSW5kZXhTaXplICs9IGZpbGUuc2l6ZVxuICAgICAgICAgIGhlbHBlcnMudXBkYXRlRmlsZVN0YXR1cyhmaWxlLCAndXBsb2FkaW5nJywgZmlsZS5zaXplKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGhlbHBlcnMudXBkYXRlRmlsZVN0YXR1cyhmaWxlLCAndXBsb2FkaW5nJywgc2l6ZSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGZhbHNlKVxuXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA8IDQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh4aHIuc3RhdHVzICYmIHhoci5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgaGVscGVycy51cGxvYWRlZEZpbGVzLnZhbHVlID0gaGVscGVycy51cGxvYWRlZEZpbGVzLnZhbHVlLmNvbmNhdChmaWxlcylcbiAgICAgICAgZmlsZXMuZm9yRWFjaChmID0+IHsgaGVscGVycy51cGRhdGVGaWxlU3RhdHVzKGYsICd1cGxvYWRlZCcpIH0pXG4gICAgICAgIGVtaXQoJ3VwbG9hZGVkJywgeyBmaWxlcywgeGhyIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYWJvcnRlZCA9IHRydWVcbiAgICAgICAgaGVscGVycy51cGxvYWRlZFNpemUudmFsdWUgLT0gbG9jYWxVcGxvYWRlZFNpemVcbiAgICAgICAgaGVscGVycy5xdWV1ZWRGaWxlcy52YWx1ZSA9IGhlbHBlcnMucXVldWVkRmlsZXMudmFsdWUuY29uY2F0KGZpbGVzKVxuICAgICAgICBmaWxlcy5mb3JFYWNoKGYgPT4geyBoZWxwZXJzLnVwZGF0ZUZpbGVTdGF0dXMoZiwgJ2ZhaWxlZCcpIH0pXG4gICAgICAgIGVtaXQoJ2ZhaWxlZCcsIHsgZmlsZXMsIHhociB9KVxuICAgICAgfVxuXG4gICAgICB3b3JraW5nVGhyZWFkcy52YWx1ZS0tXG4gICAgICB4aHJzLnZhbHVlID0geGhycy52YWx1ZS5maWx0ZXIoeCA9PiB4ICE9PSB4aHIpXG4gICAgfVxuXG4gICAgeGhyLm9wZW4oXG4gICAgICBnZXRQcm9wKCdtZXRob2QnLCBmaWxlcyksXG4gICAgICB1cmxcbiAgICApXG5cbiAgICBpZiAoZ2V0UHJvcCgnd2l0aENyZWRlbnRpYWxzJywgZmlsZXMpID09PSB0cnVlKSB7XG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlcnMgPSBnZXRQcm9wKCdoZWFkZXJzJywgZmlsZXMpXG4gICAgaGVhZGVycyAhPT0gdm9pZCAwICYmIGhlYWRlcnMuZm9yRWFjaChoZWFkID0+IHtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWQubmFtZSwgaGVhZC52YWx1ZSlcbiAgICB9KVxuXG4gICAgY29uc3Qgc2VuZFJhdyA9IGdldFByb3AoJ3NlbmRSYXcnLCBmaWxlcylcblxuICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBoZWxwZXJzLnVwZGF0ZUZpbGVTdGF0dXMoZmlsZSwgJ3VwbG9hZGluZycsIDApXG4gICAgICBpZiAoc2VuZFJhdyAhPT0gdHJ1ZSkge1xuICAgICAgICBmb3JtLmFwcGVuZChnZXRQcm9wKCdmaWVsZE5hbWUnLCBmaWxlKSwgZmlsZSwgZmlsZS5uYW1lKVxuICAgICAgfVxuICAgICAgZmlsZS54aHIgPSB4aHJcbiAgICAgIGZpbGUuX19hYm9ydCA9ICgpID0+IHsgeGhyLmFib3J0KCkgfVxuICAgICAgbWF4VXBsb2FkU2l6ZSArPSBmaWxlLnNpemVcbiAgICB9KVxuXG4gICAgZW1pdCgndXBsb2FkaW5nJywgeyBmaWxlcywgeGhyIH0pXG4gICAgeGhycy52YWx1ZS5wdXNoKHhocilcblxuICAgIGlmIChzZW5kUmF3ID09PSB0cnVlKSB7XG4gICAgICB4aHIuc2VuZChuZXcgQmxvYihmaWxlcykpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgeGhyLnNlbmQoZm9ybSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlzVXBsb2FkaW5nLFxuICAgIGlzQnVzeSxcblxuICAgIGFib3J0LFxuICAgIHVwbG9hZFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1FVcGxvYWRlcicsXG4gIHByb3BzLFxuICBlbWl0cyxcbiAgaW5qZWN0UGx1Z2luXG59XG4iLCJpbXBvcnQgY3JlYXRlVXBsb2FkZXJDb21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlLXVwbG9hZGVyLWNvbXBvbmVudC5qcydcbmltcG9ydCB4aHJVcGxvYWRlclBsdWdpbiBmcm9tICcuL3hoci11cGxvYWRlci1wbHVnaW4uanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVwbG9hZGVyQ29tcG9uZW50KHhoclVwbG9hZGVyUGx1Z2luKVxuIiwiaW1wb3J0IGRlYnVnICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2RlYnVnJztcbmNvbnN0IGxvZyAgICAgICAgID0gZGVidWcoJ2FwcDpncmlkbGlua2JveCcpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogICAgICAgJ0dyaWRMaW5rYm94JyxcbiAgICB0ZW1wbGF0ZTogICAnPHEtdG9nZ2xlIHYtbW9kZWw9XCJ2YWxcIiBkZW5zZSBAaW5wdXQ9XCJjbGlja1wiIC8+JyxcbiAgICBzZXR1cCggcHJvcHMsIHBhcmFtcyApIHtcbiAgICAgICAgY29uc3QgdmFsICAgICAgID0gcmVmKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gY2xpY2soKSB7XG4gICAgICAgICAgICBsb2coICdjbGljaycsIHRoaXMudmFsdWUsIHBhcmFtcy5jb2xEZWYuZmllbGQsIHBhcmFtcy52YWx1ZSwgcGFyYW1zLmRhdGEgKTtcbiAgICAgICAgICAgIHBhcmFtcy5kYXRhLmxpbmsgICAgICAgPSB2YWwudmFsdWU7XG4gICAgICAgICAgICBwYXJhbXMuY29udGV4dC5zZXRWYWx1ZSggcGFyYW1zLmNvbERlZi5maWVsZCwgdmFsLnZhbHVlLCBwYXJhbXMuZGF0YSApO1xuICAgICAgICB9XG5cbiAgICAgICAgb25CZWZvcmVNb3VudCggKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSAgICAgID0gcGFyYW1zLnZhbHVlO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWwsXG4gICAgICAgICAgICBjbGlja1xuICAgICAgICB9O1xuICAgIH1cbn07IiwiPHRlbXBsYXRlPlxuICAgIDxxLXBhZ2UgY2xhc3M9XCJxLXBhLXNtXCI+XG5cbiAgICAgICAgPE5hdkJhciA6dGl0bGU9XCIkdCgnbWVzc2FnZXMuTGFiZWxMZWFkJylcIiBpY29uPVwiZmFzIGZhLWFkZHJlc3MtY2FyZFwiIHN0YXRlTmFtZT1cImxlYWRzXCIgeGZ1bmNzPVwibmF2YmFyU3VibWVudVwiIDpzdGF0ZT1cImxlYWRTdG9yZVwiIDpsb2NCdXR0b25zPVwibGVhZEJ1dHRvbnNcIiB2LW9uOmNsaWNrQnV0dG9uPVwiY2xpY2tCdXR0b25cIiB0eXBlPVwid2luZG93XCIgLz5cbiAgICAgICAgXG4gICAgICAgIDxxLWNhcmQ+XG4gICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPEdyaWQgZ3JpZE5hbWU9XCJsZWFkR3JpZFwiIDpncmlkT3B0aW9ucz1cImxlYWRHcmlkXCIgc3RhdGVOYW1lPVwibGVhZHNcIiA6c3RhdGU9XCJsZWFkU3RvcmVcIiBAc3ViR3JpZFJlYWR5PVwic3ViR3JpZFJlYWR5XCIgdi1pZj1cInNob3dHcmlkXCIgdHlwZT1cInNlcnZlclwiIG9yaWVudGF0aW9uPVwicG9ydHJhaXRcIiAvPlxuICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgICAgICAgPHEtc2VwYXJhdG9yIC8+XG4gICAgICAgIDwvcS1jYXJkPlxuICAgICAgICBcbiAgICAgICAgPHEtZGlhbG9nIHYtbW9kZWw9XCJzaG93Rm9ybVwiIEBoaWRlPVwib25Gb3JtSGlkZVwiIG5vLWJhY2tkcm9wLWRpc21pc3M+XG4gICAgICAgICAgICA8cS1sYXlvdXQgY29udGFpbmVyIHZpZXc9XCJsSGggbHBSIGxmZlwiIGNsYXNzPVwic2hhZG93LTIgcm91bmRlZCBkZXRhaWxXaW5kb3dcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxxLWhlYWRlciBlbGV2YXRlZCBjbGFzcz1cImJnLXByaW1hcnkgdGV4dC13aGl0ZVwiIGhlaWdodC1oaW50PVwiOThcIj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkJhciA6dGl0bGU9XCIkdCgnbWVzc2FnZXMuTGFiZWxMZWFkJylcIiBpY29uPVwib3Blbl93aXRoXCIgc3RhdGVOYW1lPVwibGVhZHNcIiB4ZnVuY3M9XCJuYXZiYXJTdWJtZW51XCIgOnN0YXRlPVwibGVhZFN0b3JlXCIgdi1vbjpjbGlja0J1dHRvbj1cImNsaWNrQnV0dG9uXCIgdHlwZT1cImRpYWxvZ1wiIEBjbG9zZT1cIm9uRm9ybUhpZGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvcS1oZWFkZXI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8cS1wYWdlLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPHEtcGFnZSBjbGFzcz1cImJhY2stZ3JleVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1mb3JtIEBzdWJtaXQ9XCJkb1NhdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAtOTk5OXB4XCIgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIiB2LXQ9XCInbWVzc2FnZXMuTGFiZWxMZWFkJ1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IHYtbW9kZWw9XCJmb3JtLmxlYWQuZmlyc3ROYW1lXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZCBiZy1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sRmlyc3RuYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwic3VyTmFtZVwiIHYtbW9kZWw9XCJmb3JtLmxlYWQuc3VyTmFtZVwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWQgYmctY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbFN1cm5hbWUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJlbWFpbFwiIHYtbW9kZWw9XCJmb3JtLmxlYWQuZW1haWxcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkIGJnLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xNYWlsJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwidGVsZWZvblwiIHYtbW9kZWw9XCJmb3JtLmxlYWQudGVsZWZvblwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWQgYmctY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbFBob25lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiIHYtdD1cIidtZXNzYWdlcy5MYWJlbENhcidcIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cImRhdGVcIiB2LW1vZGVsPVwiZm9ybS5kYXRlXCIgbGF6eS1ydWxlcyBkZW5zZSByZWY9XCJsZWFkc1wiIG91dGxpbmVkIGJnLWNvbG9yPVwid2hpdGVcIiBkaXNhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsT3JkZXJGcm9tJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiZ2Z6XCIgdi1tb2RlbD1cImZvcm0uZ2Z6XCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZCA6b3B0aW9ucy1kZW5zZT1cInRydWVcIiBiZy1jb2xvcj1cIndoaXRlXCIgZGlzYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbEdmek51bWJlcicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiYnJhbmNoXCIgdi1tb2RlbD1cImZvcm0uZmFocnpldWcuYnJhbmNoXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZCBiZy1jb2xvcj1cIndoaXRlXCIgZGlzYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbEJyYW5jaCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtc2VsZWN0IG5hbWU9XCJzYWxlc1wiIHYtbW9kZWw9XCJmb3JtLnNhbGVzXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZCBvcHRpb25zLWRlbnNlIGJnLWNvbG9yPVwid2hpdGVcIiBkaXNhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsU2FsZXMnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJ1c2Vyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLXZhbHVlPVwiX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9uLWxhYmVsPVwib3B0ID0+IG9wdC5zdXJOYW1lID8gYCR7b3B0LnN1ck5hbWV9LCAke29wdC5maXJzdE5hbWV9YCA6ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAtb3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1zZWxlY3QgbmFtZT1cImNhdGVnb3J5XCIgdi1tb2RlbD1cImZvcm0uY2F0ZWdvcnlcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkIG9wdGlvbnMtZGVuc2UgYmctY29sb3I9XCJ3aGl0ZVwiIGRpc2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sQ2F0ZWdvcnknKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJjYXRlZ29yaWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24tdmFsdWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24tbGFiZWw9XCJkZXNjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAtb3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRvb2xiYXIgY2xhc3M9XCJiZy1ibHVlLWdyZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtYnRuIGljb249XCJmYXMgZmEtZW52ZWxvcGVcIiBjb2xvcj1cIndoaXRlXCIgdGV4dC1jb2xvcj1cImJsYWNrXCIgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbE1haWwnKVwiIEBjbGljaz1cInNlbmQuRU1haWxcIiBkZW5zZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1zZXBhcmF0b3Igc3BhY2VkIHZlcnRpY2FsIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWJ0biBpY29uPVwiZmFzIGZhLWluYm94XCIgY29sb3I9XCJ3aGl0ZVwiIHRleHQtY29sb3I9XCJibGFja1wiIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xMZXR0ZXInKVwiIEBjbGljaz1cInNlbmQuTWFpbFwiIGRlbnNlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXNlcGFyYXRvciBzcGFjZWQgdmVydGljYWwgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtYnRuIGljb249XCJmYXMgZmEtY2FsZW5kYXItYWx0XCIgY29sb3I9XCJ3aGl0ZVwiIHRleHQtY29sb3I9XCJibGFja1wiIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbERhdGUnKVwiIEBjbGljaz1cInNlbmQuRGF0ZVwiIGRlbnNlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLXRvb2xiYXI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFicyB2LW1vZGVsPVwidGFiXCIgY2xhc3M9XCJ0ZXh0LXRlYWwgYmctd2hpdGVcIiBhbGlnbj1cImxlZnRcIiBkZW5zZSBvdXRsaW5lZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFiIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbENvbnRhY3QnKVwiIG5hbWU9XCJjb250YWN0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFiIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbENhcicpXCIgbmFtZT1cImNhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRhYiA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxDYXJpbmZvJylcIiBuYW1lPVwicmlldXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS10YWIgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsSW1hZ2VzJylcIiBuYW1lPVwiaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS10YWIgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsRG9jdW1lbnRzJylcIiBuYW1lPVwiZG9jdW1lbnRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtdGFicz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRhYi1wYW5lbHMgdi1tb2RlbD1cInRhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRhYi1wYW5lbCBuYW1lPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cImxlYWRpbmZvXCIgdi1tb2RlbD1cImZvcm0ubGVhZC5pbmZvXCIgbGF6eS1ydWxlcyB0eXBlPVwidGV4dGFyZWFcIiBkZW5zZSBvdXRsaW5lZCBhdXRvZ3JvdyBzdHlsZT1cIm1heC1oZWlnaHQ6IDMwMHB4O1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsSW5mbycpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtdGFiLXBhbmVsPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFiLXBhbmVsIG5hbWU9XCJjYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXNjcm9sbC1hcmVhIGNsYXNzPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtbGlzdCBib3JkZXJlZCBzZXBhcmF0b3IgZGVuc2Ugb3V0bGluZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KCdtZXNzYWdlcy5Db2xIZXJzdCcpIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7IGZvcm0uZmFocnpldWcuaGVyc3RlbGxlciB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KCdtZXNzYWdlcy5Db2xDYXRlZ29yeScpIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7IGZvcm0uZmFocnpldWcua2F0ZWdvcmllIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoJ21lc3NhZ2VzLkNvbE1vZGVsJykgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgZm9ybS5mYWhyemV1Zy5tb2RlbCB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KCdtZXNzYWdlcy5Db2xEZXNjJykgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgZm9ybS5mYWhyemV1Zy5kZXNjIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoJ21lc3NhZ2VzLkNvbEZ1ZWwnKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyBmb3JtLmluZm9zLmZ1ZWwgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyAkdCgnbWVzc2FnZXMuQ29sQ29sb3InKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyBmb3JtLmZhaHJ6ZXVnLmZhcmJlIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoJ21lc3NhZ2VzLkxhYmVsS00nKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyBmb3JtLmluZm9zLmttIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoJ21lc3NhZ2VzLkNvbFByaWNlJykgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgZm9ybS5mYWhyemV1Zy5wcmVpcyB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KCdtZXNzYWdlcy5Db2xQb3dlcicpIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7IGZvcm0uZmFocnpldWcubGVpc3R1bmcgfX1rVzwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KCdtZXNzYWdlcy5MYWJlbEZpcnN0UmVnaXN0JykgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgZm9ybS5mYWhyemV1Zy5lcnN0enVsYXNzdW5nIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Etc2Nyb2xsLWFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLXRhYi1wYW5lbD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS10YWItcGFuZWwgbmFtZT1cInJpZXVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHEtY29sLWd1dHRlci1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1zY3JvbGwtYXJlYSBjbGFzcz1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWxpc3QgYm9yZGVyZWQgc2VwYXJhdG9yIGRlbnNlIG91dGxpbmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0gdi1mb3I9XCJpdGVtIGluIGNhckxpc3RcIiA6a2V5PVwiaXRlbS5rZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgaXRlbS5kZXNjIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gY2xhc3M9XCJjb2wtNlwiIDpjbGFzcz1cImB0eXBlLSR7aXRlbS50eXBlfWBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgdi1pZj1cIml0ZW0udHlwZSA9PT0gJ251bWJlcidcIj57eyBpdGVtLmVudHJ5IH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIHYtZWxzZS1pZj1cIml0ZW0udHlwZSA9PT0gJ2RlY2ltYWwnXCI+e3sgaXRlbS5lbnRyeSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCB2LWVsc2U+e3sgaXRlbS5lbnRyeSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1zY3JvbGwtYXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1zY3JvbGwtYXJlYSBjbGFzcz1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWxpc3QgYm9yZGVyZWQgc2VwYXJhdG9yIGRlbnNlIG91dGxpbmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0gdi1mb3I9XCJpdGVtIGluIGRlc2NyaXB0aW9uXCIgOmtleT1cIml0ZW0ua2V5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7IGl0ZW0ua2V5IH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cImNvbC05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIHYtaHRtbD1cIml0ZW0udGV4dFwiPjwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1zY3JvbGwtYXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtdGFiLXBhbmVsPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFiLXBhbmVsIG5hbWU9XCJpbWFnZVwiIDpkaXNhYmxlPVwiIWZvcm0uaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1zY3JvbGwtYXJlYSBjbGFzcz1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHEtY29sLWd1dHRlci14c1wiIHYtaWY9XCJmb3JtLmltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIiB2LWZvcj1cImltYWdlIG9mIGZvcm0uaW1nXCIgOmtleT1cImltYWdlLm5hbWVcIiBAY2xpY2s9XCJzaG93SW1nKCBpbWFnZSApXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbWcgOnNyYz1cImltYWdlLnNyY1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLXNjcm9sbC1hcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtdGFiLXBhbmVsPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFiLXBhbmVsIG5hbWU9XCJkb2N1bWVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXNjcm9sbC1hcmVhIGNsYXNzPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtbGlzdCBib3JkZXJlZCBzZXBhcmF0b3IgZGVuc2Ugb3V0bGluZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1mb3I9XCJpdGVtIGluIGRvY3VtZW50c1wiIDprZXk9XCJpdGVtLm1lbWVudG8uaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgaXRlbS5tZW1lbnRvLmJhc2VOYW1lIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7IGl0ZW0ubWVtZW50by5sYXN0bW9kIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBjbGFzcz1cImNvbC0yIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgaXRlbS5tZW1lbnRvLnNpemUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGNsYXNzPVwiY29sLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWJ0biBkZW5zZSBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJzaG93RG9jKGl0ZW0pXCIgaWNvbj1cImZhcyBmYS1kb3dubG9hZFwiIGxhYmVsPVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Etc2Nyb2xsLWFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXVwbG9hZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhZm9ybS5nZnpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwidXBsb2FkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnVybD1cImAvY3VzdG9tL3VwbG9hZEZpbGU/Z2Z6PSR7Zm9ybS5nZnp9YFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZmluaXNoPVwiZmluaXNoRmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtdGFiLXBhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS10YWItcGFuZWxzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgYmFjay1ncmV5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtc2Nyb2xsLWFyZWEgY2xhc3M9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHEtcHgtbGcgcS1wYi1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCIgdi10PVwiJ21lc3NhZ2VzLkxhYmVsSGlzdG9yeSdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS10aW1lbGluZSBkZW5zZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGltZWxpbmUtZW50cnkgdi1mb3I9XCJpdGVtIG9mIGZvcm0uaGlzdFwiIDprZXk9XCJpdGVtLnRpbWVzdGFtcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGl0bGU9XCIkdChgbWVzc2FnZXMuSGlzdG9yeV8ke2l0ZW0udHlwZX1gKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3VidGl0bGU9XCJtb21lbnQoIGl0ZW0udGltZXN0YW1wICkuZm9ybWF0KCdkZGQgREQuTU0uWVlZWSBISDptbScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppY29uPVwiaXRlbS5pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjb2xvcj1cIml0ZW0uY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt7IGl0ZW0udGl0bGUgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLXRpbWVsaW5lLWVudHJ5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS10aW1lbGluZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Etc2Nyb2xsLWFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L3EtcGFnZT5cbiAgICAgICAgICAgICAgICA8L3EtcGFnZS1jb250YWluZXI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvcS1sYXlvdXQ+XG4gICAgICAgIDwvcS1kaWFsb2c+XG5cbiAgICAgICAgPHEtZGlhbG9nIHYtbW9kZWw9XCJzaG93TGlua1wiPlxuICAgICAgICAgICAgPHEtY2FyZCBjbGFzcz1cImRldGFpbFwiPlxuICAgICAgICAgICAgICAgIDxxLXRvb2xiYXIgY2xhc3M9XCJiZy1ibHVlLTggdGV4dC13aGl0ZSBzaGFkb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHEtdG9vbGJhci10aXRsZSB2LXQ9XCInbWVzc2FnZXMuTGFiZWxMaW5rJ1wiPjwvcS10b29sYmFyLXRpdGxlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxxLXNlcGFyYXRvciBzcGFjZWQgdmVydGljYWwgLz5cblxuICAgICAgICAgICAgICAgICAgICA8cS1idG4gY2xpY2thYmxlIEBjbGljaz1cInNhdmVMaW5rXCIgbm8tY2FwcyBzaXplPVwibWRcIiBjb2xvcj1cIndoaXRlXCIgdGV4dC1jb2xvcj1cImJsYWNrXCIgaWNvbj1cInNhdmVfYWx0XCIgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRvb2x0aXA+e3sgJHQoJ21lc3NhZ2VzLkJ1dHRvblNhdmUnKSB9fTwvcS10b29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8cS1zZXBhcmF0b3Igc3BhY2VkIHZlcnRpY2FsIC8+XG4gICAgICAgICAgICAgICAgICAgIDxxLWJ0biBpY29uPVwiY2xvc2VcIiBjb2xvcj1cIndoaXRlXCIgdGV4dC1jb2xvcj1cImJsYWNrXCIgdi1jbG9zZS1wb3B1cCA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS10b29sdGlwPnt7ICR0KCdtZXNzYWdlcy5CdXR0b25DbG9zZScpIH19PC9xLXRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgICAgICAgPC9xLXRvb2xiYXI+XG5cbiAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxhZy1ncmlkLXZ1ZSBjbGFzcz1cImxpbmtzIGFnLXRoZW1lLWJhbGhhbVwiIDpncmlkT3B0aW9ucz1cImxpbmtHcmlkXCIgOnJvd0RhdGE9XCJsaW5rc1wiIDpmcmFtZXdvcmtDb21wb25lbnRzPVwiZnJhbWV3b3JrQ29tcG9uZW50c1wiPjwvYWctZ3JpZC12dWU+XG4gICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgIDwvcS1jYXJkPlxuICAgICAgICA8L3EtZGlhbG9nPlxuXG4gICAgICAgIDxxLWRpYWxvZyB2LW1vZGVsPVwic2hvd0ltYWdlXCI+XG4gICAgICAgICAgICA8cS1jYXJkIGNsYXNzPVwiZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pbWcgOnNyYz1cImltYWdlLnNyY1wiIC8+XG4gICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgIDwvcS1jYXJkPlxuICAgICAgICA8L3EtZGlhbG9nPlxuICAgIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7IEFnR3JpZFZ1ZSB9ICAgICAgICAgICAgICAgICAgICBmcm9tICdhZy1ncmlkLXZ1ZTMnO1xuaW1wb3J0IHsgdXNlSTE4biB9ICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3Z1ZS1pMThuJztcblxuaW1wb3J0IG1vbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ21vbWVudCc7XG5pbXBvcnQgXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IEdsb2JhbFZpZXcgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbW1vbi9oZWxwZXJzL0dsb2JhbFZpZXcnO1xuaW1wb3J0IFN0YXR1cyAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbW1vbi9oZWxwZXJzL1N0YXR1cyc7IFxuaW1wb3J0IFNlbmQgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbW1vbi9oZWxwZXJzL1NlbmQnOyBcbmltcG9ydCBOYXZCYXIgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhci52dWUnOyBcbmltcG9ydCBHcmlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9HcmlkLnZ1ZSc7XG5pbXBvcnQgR3JpZExpbmtib3ggICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29tcG9uZW50cy9HcmlkTGlua2JveCc7IFxuXG5pbXBvcnQgeyB1c2VBY2NvdW50U3RvcmUgfSAgICAgICAgICAgICAgZnJvbSAnc3JjL3N0b3Jlcy9hY2NvdW50LnN0b3JlJztcbmltcG9ydCB7IHVzZURhdGFTdG9yZSB9ICAgICAgICAgICAgICAgICBmcm9tICdzcmMvc3RvcmVzL2RhdGEuc3RvcmUnO1xuXG5pbXBvcnQgZGVidWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnZGVidWcnO1xuY29uc3QgbG9nICAgICAgICAgPSBkZWJ1ZygnYXBwOmxlYWQnKTtcblxuY29uc3QgeyB0IH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gdXNlSTE4bigpO1xuXG5tb21lbnQubG9jYWxlKCAnZGUnICk7XG5cbmNvbnN0IGluaXQgICAgICAgID0geyBcbiAgICBjb2xsTmFtZTogICAgICAgJ2xlYWQnLCBcbiAgICBzdGF0ZU5hbWU6ICAgICAgJ2xlYWQnLFxuICAgIGRlZmF1bHRGb3JtOiAgICB7XG4gICAgICAgIGxlYWQ6ICAgICAgICAgICB7XG4gICAgICAgICAgICBhbnJlZGU6ICAgICAgICAgJycsXG4gICAgICAgICAgICBmaXJzdE5hbWU6ICAgICAgJycsXG4gICAgICAgICAgICBzdXJOYW1lOiAgICAgICAgJycsXG4gICAgICAgICAgICBlbWFpbDogICAgICAgICAgJycsXG4gICAgICAgICAgICB0ZWxlZm9uOiAgICAgICAgJycsXG4gICAgICAgICAgICBzdHJhc3NlOiAgICAgICAgJycsXG4gICAgICAgICAgICBvcnQ6ICAgICAgICAgICAgJycsXG4gICAgICAgICAgICBpbmZvOiAgICAgICAgICAgJydcbiAgICAgICAgfSxcbiAgICAgICAgbWFpbDogICAgICAgICAgIHt9LFxuICAgICAgICBpbmZvczogICAgICAgICAge30sXG4gICAgICAgIGZhaHJ6ZXVnOiAgICAgICB7fSxcbiAgICAgICAgc2FsZXM6ICAgICAgICAgIHtcbiAgICAgICAgICAgIF9pZDogICAgICAgICAgICAnJyxcbiAgICAgICAgICAgIGtyejogICAgICAgICAgICAnJyxcbiAgICAgICAgICAgIGZpcnN0TmFtZTogICAgICAnJyxcbiAgICAgICAgICAgIHN1ck5hbWU6ICAgICAgICAnJ1xuICAgICAgICB9LFxuICAgICAgICBoaXN0OiAgICAgICAgICAgW11cbiAgICB9XG59O1xuXG5jb25zdCBnbG9iYWxWaWV3ICA9IEdsb2JhbFZpZXcoIGluaXQgKTtcbmNvbnN0IHsgXG4gICAgc3RvcmU6ICAgICAgICAgIGxlYWRTdG9yZSwgXG4gICAgZGF0YTogICAgICAgICAgIGxlYWQsIFxuICAgIGRvU2F2ZSxcbiAgICBmb3JtIFxufSAgPSBnbG9iYWxWaWV3O1xuXG5jb25zdCBhY2NvdW50U3RvcmUgICAgICAgICAgPSB1c2VBY2NvdW50U3RvcmUoKTtcbmNvbnN0IGF1dG9zZWxsZXJTdG9yZSAgICAgICA9IHVzZURhdGFTdG9yZSggJ2F1dG9zZWxsZXInLCAnYXV0b3NlbGxlcicgKTtcbmNvbnN0IHVzZXJTdG9yZSAgICAgICAgICAgICA9IHVzZURhdGFTdG9yZSggJ3VzZXInLCAndXNlcicgKTtcbmNvbnN0IGNhcmluZm9TdG9yZSAgICAgICAgICA9IHVzZURhdGFTdG9yZSggJ2NhcmluZm8nLCAnY2FySW5mbycgKTtcbmNvbnN0IGNhdGVnb3J5U3RvcmUgICAgICAgICA9IHVzZURhdGFTdG9yZSggJ2NhdGVnb3JpZXMnLCAnY2F0ZWdvcmllcycgKTtcbmNvbnN0IGNvbXBhbnlTdG9yZSAgICAgICAgICA9IHVzZURhdGFTdG9yZSggJ2NvbXBhbmllcycsICdjb21wYW5pZXMnICk7XG5jb25zdCBwb3J0YWxTdG9yZSAgICAgICAgICAgPSB1c2VEYXRhU3RvcmUoICdwb3J0YWxzJywgJ3BvcnRhbCcgKTtcbi8vIGNvbnN0IGRvY3VtZW50U3RvcmUgICAgICAgICA9IHVzZURhdGFTdG9yZSggJ2RvY3VtZW50cycsICdkb2N1bWVudHMnICk7XG5cbmNvbnN0IHsgdXNlciB9ICAgICAgICAgICAgICAgICAgPSBzdG9yZVRvUmVmcyggYWNjb3VudFN0b3JlICk7XG5jb25zdCB7IGRhdGE6IGFsbGF1dG8gfSAgICAgICAgID0gc3RvcmVUb1JlZnMoIGF1dG9zZWxsZXJTdG9yZSApO1xuY29uc3QgeyBkYXRhOiB1c2VycyB9ICAgICAgICAgICA9IHN0b3JlVG9SZWZzKCB1c2VyU3RvcmUgKTtcbmNvbnN0IHsgZGF0YTogY2FyaW5mb3MgfSAgICAgICAgPSBzdG9yZVRvUmVmcyggY2FyaW5mb1N0b3JlICk7XG5jb25zdCB7IGRhdGE6IGNhdGVnb3JpZXMgfSAgICAgID0gc3RvcmVUb1JlZnMoIGNhdGVnb3J5U3RvcmUgKTtcbmNvbnN0IHsgZGF0YTogY29tcGFuaWVzIH0gICAgICAgPSBzdG9yZVRvUmVmcyggY29tcGFueVN0b3JlICk7XG5jb25zdCB7IGRhdGE6IHBvcnRhbHMgfSAgICAgICAgID0gc3RvcmVUb1JlZnMoIHBvcnRhbFN0b3JlICk7XG4vLyBjb25zdCB7IGRhdGE6IGRvY3VtZW50cyB9ICAgICAgID0gc3RvcmVUb1JlZnMoIGRvY3VtZW50U3RvcmUgKTtcblxuY29uc3QgICBmcmFtZXdvcmtDb21wb25lbnRzICAgID0ge1xuICAgICAgICAgICAgY2hlY2tib3hSZW5kZXJlcjogICAgICAgR3JpZExpbmtib3hcbiAgICAgICAgfSxcbiAgICAgICAgbGVhZEdyaWQgID0gcmVmKHtcbiAgICAgICAgICAgIC8vIGZpbHRlcjogICAgICAgICAgICAgeyAnc2FsZXMuX2lkJzogZ2V0dGVycy51c2VyLnZhbHVlLl9pZCB9LFxuICAgICAgICAgICAgY29tcG9uZW50UGFyZW50OiAgICBwYXJlbnQsXG4gICAgICAgICAgICBjb2x1bW5UeXBlczogICAge1xuICAgICAgICAgICAgICAgIHN0YXRlQ29sdW1uOiAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZUdldHRlciggcGFyYW1zICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgICAgID0gXy5nZXQoIHBhcmFtcywgJ2RhdGEuc3RhdGUnICk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXy5nZXQoIHBhcmFtcywgYGNvbnRleHQuc3RhdGVMaXN0LiR7c3RhdGV9LmxhYmVsYCwgc3RhdGUgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2FsZXNDb2x1bW46ICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlR2V0dGVyKCBwYXJhbXMgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCAocGFyYW1zLmRhdGEgJiYgcGFyYW1zLmRhdGEuc2FsZXMgJiYgcGFyYW1zLmRhdGEuc2FsZXMuc3VyTmFtZSAmJiBgJHtwYXJhbXMuZGF0YS5zYWxlcy5maXJzdE5hbWV9ICR7cGFyYW1zLmRhdGEuc2FsZXMuc3VyTmFtZX1gKSB8fCAnJyApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUNvbHVtbjogICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVHZXR0ZXIoIHBhcmFtcyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ICAgICAgICA9IF8uZ2V0KCBwYXJhbXMsICdkYXRhLmNhdGVnb3J5JywgJzAnICk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXy5nZXQoIHBhcmFtcywgYGNvbnRleHQuY2F0ZWdvcmllcy4ke2NhdGVnb3J5fS5kZXNjYCwgY2F0ZWdvcnkgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzb3J0OiB7XG4gICAgICAgICAgICAgICBkYXRlOiAgICAtMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIGxpbmtHcmlkICA9IHJlZih7XG4gICAgICAgICAgICByb3dNb2RlbFR5cGU6ICAgICAgICdjbGllbnRTaWRlJyxcbiAgICAgICAgICAgIGNvbHVtblR5cGVzOiAgICB7XG4gICAgICAgICAgICAgICAgc2FsZXNDb2x1bW46ICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlR2V0dGVyKCBwYXJhbXMgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCAocGFyYW1zLmRhdGEgJiYgcGFyYW1zLmRhdGEuc2FsZXMgJiYgcGFyYW1zLmRhdGEuc2FsZXMuc3VyTmFtZSAmJiBgJHtwYXJhbXMuZGF0YS5zYWxlcy5maXJzdE5hbWV9ICR7cGFyYW1zLmRhdGEuc2FsZXMuc3VyTmFtZX1gKSB8fCAnJyApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUNvbHVtbjogICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVHZXR0ZXIoIHBhcmFtcyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoIChwYXJhbXMuZGF0YSAmJiBwYXJhbXMuZGF0YS5jYXRlZ29yeSAmJiBwYXJhbXMuY29udGV4dC5jYXRlZ29yaWVzWyBwYXJhbXMuZGF0YS5jYXRlZ29yeSBdKSB8fCAnJyApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbHVtbkRlZnM6ICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICAgICAgICAgICdsaW5rJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyTmFtZTogICAgICdMaW5rJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICAgICAgICAgIDEwMCxcbiAgICAgICAgICAgICAgICAgICAgY2VsbENsYXNzOiAgICAgICdjZWxsQ2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgY2VsbFJlbmRlcmVyOiAgICdjaGVja2JveFJlbmRlcmVyJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZDogICAgICAgICAgJ2RhdGUnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJOYW1lOiAgICAgdCgnbWVzc2FnZXMuQ29sRGF0ZScpLFxuICAgICAgICAgICAgICAgICAgICBjZWxsQ2xhc3M6ICAgICAgJ2NlbGxDZW50ZXInXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAgICAgICAgICAnZmFocnpldWcubW9kZWwnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJOYW1lOiAgICAgdCgnbWVzc2FnZXMuQ29sTW9kZWwnKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZDogICAgICAgICAgJ3NhbGVzJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyTmFtZTogICAgIHQoJ21lc3NhZ2VzLkxhYmVsU2FsZXMnKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogICAgICAgICAgICdzYWxlc0NvbHVtbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICAgICAgICAgICdsZWFkLmZpcnN0TmFtZScsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlck5hbWU6ICAgICB0KCdtZXNzYWdlcy5Db2xGaXJzdE5hbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICAgICAgICAgIDEwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZDogICAgICAgICAgJ2xlYWQuc3VyTmFtZScsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlck5hbWU6ICAgICB0KCdtZXNzYWdlcy5Db2xTdXJOYW1lJylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICAgICAgICAgICdsZWFkLmVtYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyTmFtZTogICAgIHQoJ21lc3NhZ2VzLkNvbE1haWwnKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZDogICAgICAgICAgJ2xlYWQudGVsZWZvbicsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlck5hbWU6ICAgICB0KCdtZXNzYWdlcy5Db2xQaG9uZScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHJvd0RhdGE6ICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIGNvbnRleHQ6ICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICAgICAgICAgICAgICAgICAgICdkZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBjb21wb25lbnRQYXJlbnQ6ICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHN0YXRlTGlzdCAgICAgPSBTdGF0dXMoIHQgKSxcbiAgICAgICAgc2VuZCAgICAgICAgICA9IFNlbmQoKTtcblxuY29uc3QgICB0YWIgICAgICAgICAgID0gcmVmKCdjb250YWN0JyksXG4gICAgICAgIHVwbG9hZGVyICAgICAgPSByZWYoIG51bGwgKSxcbiAgICAgICAgY2FyTGlzdCAgICAgICA9IHJlZihbXSksXG4gICAgICAgIGxpbmtzICAgICAgICAgPSByZWYoW10pLFxuICAgICAgICBhdXRvRmlsdGVyICAgID0gcmVmKFtdKSxcbiAgICAgICAgc2hvd0xpbmsgICAgICA9IHJlZihmYWxzZSksXG4gICAgICAgIHNob3dJbWFnZSAgICAgPSByZWYoZmFsc2UpLFxuICAgICAgICBpbWFnZSAgICAgICAgID0gcmVmKHt9KSxcbiAgICAgICAgbGVhZEJ1dHRvbnMgICA9IHJlZihbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICAgICAgJ0xhYmVsTGluaycsXG4gICAgICAgICAgICAgICAgbGluazogICAgICAgJ2xpbmtMZWFkJyxcbiAgICAgICAgICAgICAgICBpY29uOiAgICAgICAnZmFzIGZhLWxpbmsnXG4gICAgICAgICAgICB9XG4gICAgICAgIF0pLFxuICAgICAgICBzaG93R3JpZCAgICAgID0gcmVmKGZhbHNlKSxcbiAgICAgICAgc2hvd0Zvcm0gICAgICA9IHJlZihmYWxzZSk7XG5cbmNvbnN0IGF1dG9zZWxsZXJzICAgICA9IHJlZihbXSk7XG5cbmZ1bmN0aW9uIHNldFZhbHVlKCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGRhdGE6IGFueSApIHtcbiAgICBsb2coICdzZXRWYWx1ZScsIG5hbWUsIHZhbHVlLCBkYXRhICk7XG59XG5cbi8vIGJlZm9yZSBzZWxlY3QgaG9va1xuYXN5bmMgZnVuY3Rpb24gYWZ0ZXJTZWxlY3QoIHJlY29yZDogYW55ICkge1xuICAgIGxvZyggJ2hvb2sgYmVmb3JlU2VsZWN0JywgcmVjb3JkICk7XG4gICAgXG4gICAgaWYgKCBfLmlzQXJyYXkocmVjb3JkLmhpc3QpIClcbiAgICAgICAgcmVjb3JkLmhpc3QgICAgID0gXy5tYXAoIHJlY29yZC5oaXN0LCAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGl0ZW0ua2V5ICAgICAgICA9IGluZGV4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzd2l0Y2goaXRlbS50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdpbic6XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaWNvbiAgICAgICA9ICdmYXMgZmEtc2lnbi1pbi1hbHQnO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNvbG9yICAgICAgPSAnYmx1ZS0xMCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ291dCc6XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaWNvbiAgICAgICA9ICdmYXMgZmEtc2lnbi1vdXQtYWx0JztcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jb2xvciAgICAgID0gJ2dyZWVuLTgnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdpbnRlcm4nOlxuICAgICAgICAgICAgICAgICAgICBpdGVtLmljb24gICAgICAgPSAnZmFzIGZhLWxvY2snO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNvbG9yICAgICAgPSAnb3JhbmdlJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pY29uICAgICAgID0gJ2ZhcyBmYS1jaXJjbGUnO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNvbG9yICAgICAgPSAnYmx1ZS0xMCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSApO1xuXG4gICAgLy8gYXdhaXQgZG9jdW1lbnRTdG9yZS5nZXREb2N1bWVudHMoIHtcbiAgICAvLyAgICAgICAgIGZpbHRlcjogICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgZ2Z6OiAgICAgICAgICAgIHJlY29yZC5nZnpcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG5cbiAgICB1cGxvYWRlci52YWx1ZT8ucmVzZXQoKTtcblxuICAgIHNob3dGb3JtLnZhbHVlICAgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiByZWNvcmQ7XG59XG5cbi8vIHNlbGVjdCByb3dcbi8vIGFzeW5jIGZ1bmN0aW9uIGFmdGVyU2VsZWN0KCBzZWxlY3RlZFJvd3MgKSB7XG4vLyAgICAgbG9nKCAnaG9vayBhZnRlclNlbGVjdCcgKTtcbi8vICAgICBzaG93Rm9ybS52YWx1ZSAgID0gdHJ1ZTtcbi8vIH1cblxuLy8gaGlkZSBkaWFsb2dcbmZ1bmN0aW9uIG9uRm9ybUhpZGUoKSB7XG4gICAgc2hvd0Zvcm0udmFsdWUgICA9IGZhbHNlO1xufVxuXG4vLyBjcmVhdGUgdGFibGUgb2YgZGV0YWlsIGRlc2NyaXB0aW9uIG9mIGNhclxuZnVuY3Rpb24gZGVzY3JpcHRpb24oKSB7XG4gICAgaWYgKGZvcm0udmFsdWUuZGVzY3JpcHRpb24pXG4gICAgICAgIHJldHVybiBfLm1hcCggZm9ybS52YWx1ZS5kZXNjcmlwdGlvbi5zcGxpdCgnfCcpLCAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbSAgICAgICAgPSBpdGVtLnRyaW0oKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgaW5kZXggICAgICAgPSBpdGVtLmluZGV4T2YoJyAnKSxcbiAgICAgICAgICAgICAgICAgIGtleSAgICAgICAgID0gaXRlbS5zdWJzdHIoIDAsIGluZGV4ICksXG4gICAgICAgICAgICAgICAgICB0ZXh0ICAgICAgICA9IGl0ZW0uc3Vic3RyKCBpbmRleCArIDEgKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIFtdO1xufSAgICAgICAgXG5cbi8vIGdyaWQgLT4gcmVhZHlcbmZ1bmN0aW9uIHN1YkdyaWRSZWFkeSggeyBncmlkT3B0IH06IHsgZ3JpZE9wdDogYW55IH0gKSB7XG4gICAgLy8gVXNlciB2YWx1ZSBiZWNhdXNlIG9mIHZ1ZSByZWZcbiAgICBncmlkT3B0LmNvbnRleHQgICAgPSB7XG4gICAgICAgIHN0YXRlTGlzdDogICAgICAgICAgICAgIF8ua2V5QnkoIHN0YXRlTGlzdCwgJ3ZhbHVlJyApLFxuICAgICAgICBjYXRlZ29yaWVzOiAgICAgICAgICAgICBfLmtleUJ5KCBjYXRlZ29yaWVzLnZhbHVlLCAnbmFtZScgKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNsaWNrQnV0dG9uKCBsaW5rOiBzdHJpbmcgKSB7XG4gICAgbG9nKCAnY2xpY2tCdXR0b24nLCBsaW5rICk7XG4gICAgc3dpdGNoKGxpbmspIHtcbiAgICAgICAgY2FzZSAnbGlua0xlYWQnOlxuICAgICAgICAgICAgaWYgKCFmb3JtLl9pZCkge1xuICAgICAgICAgICAgICAgIE5vdGlmeS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAgICAgICAgdCgnbWVzc2FnZXMuVGV4dE5vUmVjb3JkJyksXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAgICAgICAgICAnbmVnYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAgICAgICAgICAgJ3JlcG9ydF9wcm9ibGVtJyxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICAgICAgICd0b3AtcmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAgICAgICAgMzAwMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGxpbmtMZWFkKCBmb3JtICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRha2VMZWFkKCBkYXRhOiBhbnkgKSB7XG4gICAgLy8gcHV0IHVzZXIgaW5zaWRlXG4gICAgZGF0YS5zYWxlcyAgICAgID0gdXNlci52YWx1ZTtcbiAgICBcbiAgICAvLyBub3cgc2F2ZSBpdFxuLy8gICAgICAgICAgICBsaXN0ZW5TYXZlKCBkYXRhICk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxpbmtMZWFkKCBkYXRhOiBhbnkgKSB7XG4gICAgLy8gZ2V0IG5hdlxuICAgIGNvbnN0IHJlc3AgICAgICAgICAgICA9IGF3YWl0IGF4aW9zLnBvc3QoICcvZGF0YS9sZWFkJywgeyBmaWx0ZXI6IHsgZ2Z6OiBkYXRhLmdmeiB9IH0gKTtcbiAgICBsaW5rcy52YWx1ZSAgICAgICAgID0gcmVzcC5kYXRhLmRhdGE7XG5cbiAgICBmb3IoIGNvbnN0IGl0ZW0gb2YgbGlua3MudmFsdWUgKSB7XG4gICAgICAgIGl0ZW0ubGluayAgICAgICA9IChpdGVtLl9pZCA9PT0gZm9ybS52YWx1ZS5faWQpO1xuICAgIH1cbiAgICBcbiAgICBzaG93TGluay52YWx1ZSAgICAgID0gdHJ1ZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2F2ZUxpbmsoKSB7XG4gICAgbG9nKCAnc2F2ZSBsaW5rJywgbGlua3MudmFsdWUgKTtcblxuICAgIC8vIGZpbHRlciBhbGwgbGVhZHMgd2hpY2ggc2hvdWxkIGJlIGxpbmtlZFxuICAgIGxpbmtzLnZhbHVlICAgICAgPSBfLmZpbHRlciggbGlua3MudmFsdWUsIChpdGVtKSA9PiBpdGVtLmxpbmsgKTtcbiAgICBcbiAgICAvLyBzYXZlIGxpbmtlZCBsZWFkc1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoICcvY3VzdG9tL2xpbmtMZWFkJywgeyBsaW5rczogbGlua3MudmFsdWUsIG1haW46IGZvcm0udmFsdWUuX2lkIH0gKTtcblxuICAgICAgICBOb3RpZnkuY3JlYXRlKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICAgICAgICBwYXJlbnQuJHQoJ21lc3NhZ2VzLlRleHRMaW5rU2F2ZWQnKSxcbiAgICAgICAgICAgIGNvbG9yOiAgICAgICAgICAnZ3JlZW4tOScsXG4gICAgICAgICAgICBpY29uOiAgICAgICAgICAgJ2RvbmUnLFxuICAgICAgICAgICAgcG9zaXRpb246ICAgICAgICd0b3AtcmlnaHQnLFxuICAgICAgICAgICAgdGltZW91dDogICAgICAgIDEwMDBcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoKCBlcnIgKSB7XG4gICAgICAgIE5vdGlmeS5jcmVhdGUoe1xuICAgICAgICAgICAgbWVzc2FnZTogICAgICAgIGVycixcbiAgICAgICAgICAgIGNvbG9yOiAgICAgICAgICAnbmVnYXRpdmUnLFxuICAgICAgICAgICAgaWNvbjogICAgICAgICAgICdyZXBvcnRfcHJvYmxlbScsXG4gICAgICAgICAgICBwb3NpdGlvbjogICAgICAgJ3RvcC1yaWdodCcsXG4gICAgICAgICAgICB0aW1lb3V0OiAgICAgICAgNTAwMFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZpbHRlckF1dG9zZWxsZXIgKCB2YWw6IHN0cmluZywgdXBkYXRlOiBhbnksIGFib3J0OiBhbnkgKSB7XG4gICAgbG9nKCAnRklMVEVSJywgdmFsICk7XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXIoKSB7XG4gICAgICAgIHVwZGF0ZSggKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBhdXRvRmlsdGVyLnZhbHVlICAgICA9IGF1dG9zZWxsZXJzLnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZWVkbGUgICAgPSB2YWwudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBhdXRvRmlsdGVyLnZhbHVlICAgICA9IF8uZmlsdGVyKCBhdXRvc2VsbGVycy52YWx1ZSwgKHY6IGFueSkgPT4gdi5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YobmVlZGxlKSA+IC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZyggJy0+JywgYXV0b0ZpbHRlci52YWx1ZSApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIWF1dG9zZWxsZXJzLnZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJlc3AgICAgPSBhd2FpdCBhdXRvc2VsbGVyU3RvcmUuZ2V0U3RvcmUoKTtcbiAgICAgICAgXG4gICAgICAgIGF1dG9zZWxsZXJzLnZhbHVlICAgPSBfLm1hcCggcmVzcC5kYXRhLCBpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICAgICAgaXRlbS5nZnosXG4gICAgICAgICAgICAgICAgbGFiZWw6ICAgICAgYCR7aXRlbS5nZnp9ICgkeyhpdGVtLmZhaHJ6ZXVnPy5tb2RlbCkgfHwgJyd9KWBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBmaWx0ZXIoKTtcbiAgICB9IGVsc2VcbiAgICAgICAgZmlsdGVyKCk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckFib3J0KCkge1xuICAgIGxvZyggJ0FCT1JUJyApO1xufVxuXG5mdW5jdGlvbiBzaG93SW1nKCBpbWc6IGFueSApIHtcbiAgICBzaG93SW1hZ2UudmFsdWUgICAgID0gdHJ1ZTtcbiAgICBpbWFnZS52YWx1ZSAgICAgICAgID0gaW1nO1xufVxuXG4vLyBmdW5jdGlvbiBhZnRlclNlbGVjdCgpIHtcbi8vICAgICBsZXQgbGlzdCAgICAgICAgPSBbXTtcbiAgICBcbi8vICAgICBfLmZvckVhY2goIGZvcm0uaW5mb3MsICggZW50cnksIGtleSApID0+IHtcbi8vICAgICAgICAgbGV0IGRlc2MgICAgPSBrZXksXG4vLyAgICAgICAgICAgICB0eXBlICAgID0gJ3N0cmluZyc7XG4gICAgICAgIFxuLy8gICAgICAgICBpZiAoZ2V0dGVycy5jYXJpbmZvcy52YWx1ZVsga2V5IF0pIHtcbi8vICAgICAgICAgICAgIGRlc2MgICAgPSBjYXJpbmZvcy52YWx1ZVsga2V5IF0uZGVzYztcbi8vICAgICAgICAgICAgIHR5cGUgICAgPSBjYXJpbmZvcy52YWx1ZVsga2V5IF0udHlwZTtcbi8vICAgICAgICAgfVxuICAgICAgICBcbi8vICAgICAgICAgc3dpdGNoKCB0eXBlICkge1xuLy8gICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4vLyAgICAgICAgICAgICAgICAgZW50cnkgICAgICAgID0gZW50cnkgPT09ICcwJyA/ICdKYScgOiAnTmVpbic7XG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgIH1cbiAgICAgICAgXG4vLyAgICAgICAgIGxpc3QucHVzaCggeyBrZXksIGVudHJ5LCBkZXNjLCB0eXBlIH0gKTtcbi8vICAgICB9KTtcbiAgICBcbi8vICAgICBjYXJMaXN0LnZhbHVlICAgID0gbGlzdDtcbiAgICBcbi8vICAgICBsb2coICdsaXN0JywgbGlzdCApO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBzZXRWYWx1ZSggbmFtZSwgdmFsdWUsIGRhdGEgKSB7XG4gICAgXG4vLyB9XG5cbmZ1bmN0aW9uIHNob3dEb2MoIGl0ZW06IGFueSApIHtcbiAgICBOb3RpZnkuY3JlYXRlKHtcbiAgICAgICAgbWVzc2FnZTogICAgICAgICdEb2t1bWVudCB3aXJkIGdlbGFkZW4gLi4uJyxcbiAgICAgICAgY29sb3I6ICAgICAgICAgICdncmVlbi05JyxcbiAgICAgICAgaWNvbjogICAgICAgICAgICdkb25lJyxcbiAgICAgICAgcG9zaXRpb246ICAgICAgICd0b3AtcmlnaHQnLFxuICAgICAgICB0aW1lb3V0OiAgICAgICAgMTAwMFxuICAgIH0pO1xuICAgIHdpbmRvdy5vcGVuKCBgL29wZW5kb2MvJHtpdGVtLm1lbWVudG8uYmFzZU5hbWV9P25hbWU9JHtpdGVtLm1lbWVudG8ubmFtZX1gLCAnb3BlbmRvYycgKTtcbn1cblxuZnVuY3Rpb24gZmluaXNoRmlsZSgpIHtcbiAgICB1cGxvYWRlci52YWx1ZSAmJiB1cGxvYWRlci52YWx1ZS5yZXNldCgpO1xufVxuXG5vbk1vdW50ZWQoIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCB1c2VyU3RvcmUuZ2V0U3RvcmUoKTtcbiAgICBhd2FpdCBjYXJpbmZvU3RvcmUuZ2V0U3RvcmUoKTtcbiAgICBhd2FpdCBjYXRlZ29yeVN0b3JlLmdldFN0b3JlKCk7XG4gICAgYXdhaXQgY29tcGFueVN0b3JlLmdldFN0b3JlKCk7XG5cbiAgICAvLyBhd2FpdCBhY3Rpb25zLnJlZ2lzdGVyQWN0aW9uKCB7IGFjdGlvbjogJ2JlZm9yZVNlbGVjdCcsIHRhcmdldDogJ0xlYWQnLCBmdW5jOiBiZWZvcmVTZWxlY3QgfSApO1xuICAgIGF3YWl0IGxlYWRTdG9yZS5yZWdpc3RlckFjdGlvbiggeyBhY3Rpb246ICdhZnRlclNlbGVjdCcsIHRhcmdldDogJ0xlYWQnLCBmdW5jOiBhZnRlclNlbGVjdCB9ICk7XG4gICAgXG4gICAgYXV0b0ZpbHRlci52YWx1ZSAgICA9IGFsbGF1dG8udmFsdWU7XG4gICAgY2FyaW5mb3MudmFsdWUgICAgICA9IF8ua2V5QnkoIGNhcmluZm9zLnZhbHVlLCAna2V5JyApO1xuXG4gICAgc2hvd0dyaWQudmFsdWUgICAgICAgPSB0cnVlO1xufSk7XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0IFwiLi4vX3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5kZXRhaWxXaW5kb3cge1xuICAgIHdpZHRoOiAgICAgY2FsYyggMTAwdncgLSAxMzBweCApO1xuICAgIG1heC13aWR0aDogICAgIGNhbGMoIDEwMHZ3IC0gMTMwcHggKSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogICAgY2FsYyggMTAwdmggLSAxMDBweCApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uZGV0YWlsIHtcbiAgICB3aWR0aDogICAgICAgICBjYWxjKCAxMDB2dyAtIDMwMHB4ICk7XG4gICAgbWF4LXdpZHRoOiAgICAgMTkyMHB4O1xufVxuXG4uaW1hZ2UtYXJlYSB7XG4gICAgb3ZlcmZsb3c6ICAgICAgIHNjcm9sbDtcbiAgICBcbn1cblxuLmJhY2stZ3JleSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbn1cblxuLmxpbmtzIHtcbiAgICBoZWlnaHQ6ICAgICAgICBjYWxjKCAxMDB2aCAtICN7JGhlYWRlcl9oZWlnaHR9IC0gNTAwcHggKTtcbiAgICBtaW4taGVpZ2h0OiAgICAzMDBweDtcbiAgICB3aWR0aDogICAgICAgICAxMDAlO1xufVxuXG4ubGlzdCB7XG4gICAgaGVpZ2h0OiBjYWxjKCAxMDB2aCAtICN7JGhlYWRlcl9oZWlnaHR9IC0gMjEwcHggKTtcbn1cblxuLnR5cGUtYm9vbGVhbiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi50eXBlLW51bWJlciB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi50eXBlLWRlY2ltYWwge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbInByb3BzIiwic3RhdHVzIiwiZW1pdHMiLCJpbmplY3RQbHVnaW4iLCJfIiwibG9nIiwibW9tZW50IiwiZ2xvYmFsVmlldyIsIkdsb2JhbFZpZXciLCJTdGF0dXMiLCJzZW5kIiwiU2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdPLE1BQU0seUJBQXlCO0FBQUEsRUFDcEMsR0FBRztBQUFBLEVBRUgsS0FBSztBQUFBLElBQ0gsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLEVBQ1Y7QUFBQSxFQUNELEtBQUs7QUFBQSxJQUNILE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxFQUNWO0FBQUEsRUFFRCxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixZQUFZO0FBQUEsRUFFWixVQUFVO0FBQUEsRUFDVixTQUFTO0FBQUEsRUFHVCxXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxXQUFXLE9BQUssS0FBSyxLQUFLLEtBQUs7QUFBQSxFQUNoQztBQUFBLEVBRUQsT0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLEVBQ1Y7QUFBQSxFQUVELFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUVULGlCQUFpQjtBQUNuQjtBQzdCQSxNQUNFLFNBQVMsSUFDVCxXQUFXLElBQUksUUFDZixnQkFBZ0IsV0FBVyxLQUFLLElBQ2hDLGtCQUFrQixLQUFLLE1BQU0sZ0JBQWdCLEdBQUksSUFB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
