import { b8 as getAugmentedNamespace, b9 as commonjsGlobal, l as debug, n as ref, N as useAccountStore, O as useDataStore, M as _, aL as onMounted, at as onBeforeUnmount, ba as defineStore, bb as lodash, e as defineComponent, R as storeToRefs, bc as reactive, ah as computed, a as axios, T as resolveDirective, q as openBlock, s as createBlock, w as withCtx, ak as QIcon, Y as createCommentVNode, V as withDirectives, u as QToolbarTitle, a2 as createElementBlock, a4 as Fragment, a3 as renderList, x as QSeparator, G as unref, bd as QBtnDropdown, f as createVNode, $ as QList, y as QBtn, v as createTextVNode, A as toDisplayString, z as QTooltip, X as isRef, a6 as QItemLabel, a0 as QItem, a1 as QItemSection, E as createBaseVNode, a7 as normalizeClass, Q as QToolbar, _ as _export_sfc, be as ClosePopup, bf as QToggle } from "./index.8f8ca0f3.js";
var shams = function hasSymbols() {
  if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
    return false;
  }
  if (typeof Symbol.iterator === "symbol") {
    return true;
  }
  var obj = {};
  var sym = Symbol("test");
  var symObj = Object(sym);
  if (typeof sym === "string") {
    return false;
  }
  if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
    return false;
  }
  if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
    return false;
  }
  var symVal = 42;
  obj[sym] = symVal;
  for (sym in obj) {
    return false;
  }
  if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
    return false;
  }
  if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
    return false;
  }
  var syms = Object.getOwnPropertySymbols(obj);
  if (syms.length !== 1 || syms[0] !== sym) {
    return false;
  }
  if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
    return false;
  }
  if (typeof Object.getOwnPropertyDescriptor === "function") {
    var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
    if (descriptor.value !== symVal || descriptor.enumerable !== true) {
      return false;
    }
  }
  return true;
};
var origSymbol = typeof Symbol !== "undefined" && Symbol;
var hasSymbolSham = shams;
var hasSymbols$1 = function hasNativeSymbols() {
  if (typeof origSymbol !== "function") {
    return false;
  }
  if (typeof Symbol !== "function") {
    return false;
  }
  if (typeof origSymbol("foo") !== "symbol") {
    return false;
  }
  if (typeof Symbol("bar") !== "symbol") {
    return false;
  }
  return hasSymbolSham();
};
var test = {
  foo: {}
};
var $Object = Object;
var hasProto$1 = function hasProto() {
  return { __proto__: test }.foo === test.foo && !({ __proto__: null } instanceof $Object);
};
var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var toStr$1 = Object.prototype.toString;
var max = Math.max;
var funcType = "[object Function]";
var concatty = function concatty2(a, b) {
  var arr = [];
  for (var i = 0; i < a.length; i += 1) {
    arr[i] = a[i];
  }
  for (var j = 0; j < b.length; j += 1) {
    arr[j + a.length] = b[j];
  }
  return arr;
};
var slicy = function slicy2(arrLike, offset) {
  var arr = [];
  for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
    arr[j] = arrLike[i];
  }
  return arr;
};
var joiny = function(arr, joiner) {
  var str = "";
  for (var i = 0; i < arr.length; i += 1) {
    str += arr[i];
    if (i + 1 < arr.length) {
      str += joiner;
    }
  }
  return str;
};
var implementation$1 = function bind(that) {
  var target = this;
  if (typeof target !== "function" || toStr$1.apply(target) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + target);
  }
  var args = slicy(arguments, 1);
  var bound;
  var binder = function() {
    if (this instanceof bound) {
      var result = target.apply(
        this,
        concatty(args, arguments)
      );
      if (Object(result) === result) {
        return result;
      }
      return this;
    }
    return target.apply(
      that,
      concatty(args, arguments)
    );
  };
  var boundLength = max(0, target.length - args.length);
  var boundArgs = [];
  for (var i = 0; i < boundLength; i++) {
    boundArgs[i] = "$" + i;
  }
  bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
  if (target.prototype) {
    var Empty = function Empty2() {
    };
    Empty.prototype = target.prototype;
    bound.prototype = new Empty();
    Empty.prototype = null;
  }
  return bound;
};
var implementation = implementation$1;
var functionBind = Function.prototype.bind || implementation;
var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind$1 = functionBind;
var hasown = bind$1.call(call, $hasOwn);
var undefined$1;
var $SyntaxError$1 = SyntaxError;
var $Function = Function;
var $TypeError$3 = TypeError;
var getEvalledConstructor = function(expressionSyntax) {
  try {
    return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
  } catch (e) {
  }
};
var $gOPD$1 = Object.getOwnPropertyDescriptor;
if ($gOPD$1) {
  try {
    $gOPD$1({}, "");
  } catch (e) {
    $gOPD$1 = null;
  }
}
var throwTypeError = function() {
  throw new $TypeError$3();
};
var ThrowTypeError = $gOPD$1 ? function() {
  try {
    arguments.callee;
    return throwTypeError;
  } catch (calleeThrows) {
    try {
      return $gOPD$1(arguments, "callee").get;
    } catch (gOPDthrows) {
      return throwTypeError;
    }
  }
}() : throwTypeError;
var hasSymbols2 = hasSymbols$1();
var hasProto2 = hasProto$1();
var getProto = Object.getPrototypeOf || (hasProto2 ? function(x) {
  return x.__proto__;
} : null);
var needsEval = {};
var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined$1 : getProto(Uint8Array);
var INTRINSICS = {
  "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
  "%ArrayIteratorPrototype%": hasSymbols2 && getProto ? getProto([][Symbol.iterator]()) : undefined$1,
  "%AsyncFromSyncIteratorPrototype%": undefined$1,
  "%AsyncFunction%": needsEval,
  "%AsyncGenerator%": needsEval,
  "%AsyncGeneratorFunction%": needsEval,
  "%AsyncIteratorPrototype%": needsEval,
  "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
  "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
  "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined$1 : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined$1 : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
  "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
  "%Function%": $Function,
  "%GeneratorFunction%": needsEval,
  "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
  "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
  "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": hasSymbols2 && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
  "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
  "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
  "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols2 || !getProto ? undefined$1 : getProto((/* @__PURE__ */ (new Map()))[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
  "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
  "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols2 || !getProto ? undefined$1 : getProto((/* @__PURE__ */ (new Set()))[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": hasSymbols2 && getProto ? getProto(""[Symbol.iterator]()) : undefined$1,
  "%Symbol%": hasSymbols2 ? Symbol : undefined$1,
  "%SyntaxError%": $SyntaxError$1,
  "%ThrowTypeError%": ThrowTypeError,
  "%TypedArray%": TypedArray,
  "%TypeError%": $TypeError$3,
  "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
  "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
  "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
  "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet
};
if (getProto) {
  try {
    null.error;
  } catch (e) {
    var errorProto = getProto(getProto(e));
    INTRINSICS["%Error.prototype%"] = errorProto;
  }
}
var doEval = function doEval2(name) {
  var value;
  if (name === "%AsyncFunction%") {
    value = getEvalledConstructor("async function () {}");
  } else if (name === "%GeneratorFunction%") {
    value = getEvalledConstructor("function* () {}");
  } else if (name === "%AsyncGeneratorFunction%") {
    value = getEvalledConstructor("async function* () {}");
  } else if (name === "%AsyncGenerator%") {
    var fn = doEval2("%AsyncGeneratorFunction%");
    if (fn) {
      value = fn.prototype;
    }
  } else if (name === "%AsyncIteratorPrototype%") {
    var gen = doEval2("%AsyncGenerator%");
    if (gen && getProto) {
      value = getProto(gen.prototype);
    }
  }
  INTRINSICS[name] = value;
  return value;
};
var LEGACY_ALIASES = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
};
var bind2 = functionBind;
var hasOwn$1 = hasown;
var $concat$1 = bind2.call(Function.call, Array.prototype.concat);
var $spliceApply = bind2.call(Function.apply, Array.prototype.splice);
var $replace$1 = bind2.call(Function.call, String.prototype.replace);
var $strSlice = bind2.call(Function.call, String.prototype.slice);
var $exec = bind2.call(Function.call, RegExp.prototype.exec);
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = function stringToPath2(string) {
  var first = $strSlice(string, 0, 1);
  var last = $strSlice(string, -1);
  if (first === "%" && last !== "%") {
    throw new $SyntaxError$1("invalid intrinsic syntax, expected closing `%`");
  } else if (last === "%" && first !== "%") {
    throw new $SyntaxError$1("invalid intrinsic syntax, expected opening `%`");
  }
  var result = [];
  $replace$1(string, rePropName, function(match, number, quote2, subString) {
    result[result.length] = quote2 ? $replace$1(subString, reEscapeChar, "$1") : number || match;
  });
  return result;
};
var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
  var intrinsicName = name;
  var alias;
  if (hasOwn$1(LEGACY_ALIASES, intrinsicName)) {
    alias = LEGACY_ALIASES[intrinsicName];
    intrinsicName = "%" + alias[0] + "%";
  }
  if (hasOwn$1(INTRINSICS, intrinsicName)) {
    var value = INTRINSICS[intrinsicName];
    if (value === needsEval) {
      value = doEval(intrinsicName);
    }
    if (typeof value === "undefined" && !allowMissing) {
      throw new $TypeError$3("intrinsic " + name + " exists, but is not available. Please file an issue!");
    }
    return {
      alias,
      name: intrinsicName,
      value
    };
  }
  throw new $SyntaxError$1("intrinsic " + name + " does not exist!");
};
var getIntrinsic = function GetIntrinsic(name, allowMissing) {
  if (typeof name !== "string" || name.length === 0) {
    throw new $TypeError$3("intrinsic name must be a non-empty string");
  }
  if (arguments.length > 1 && typeof allowMissing !== "boolean") {
    throw new $TypeError$3('"allowMissing" argument must be a boolean');
  }
  if ($exec(/^%?[^%]*%?$/, name) === null) {
    throw new $SyntaxError$1("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  }
  var parts = stringToPath(name);
  var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
  var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
  var intrinsicRealName = intrinsic.name;
  var value = intrinsic.value;
  var skipFurtherCaching = false;
  var alias = intrinsic.alias;
  if (alias) {
    intrinsicBaseName = alias[0];
    $spliceApply(parts, $concat$1([0, 1], alias));
  }
  for (var i = 1, isOwn = true; i < parts.length; i += 1) {
    var part = parts[i];
    var first = $strSlice(part, 0, 1);
    var last = $strSlice(part, -1);
    if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
      throw new $SyntaxError$1("property names with quotes must have matching quotes");
    }
    if (part === "constructor" || !isOwn) {
      skipFurtherCaching = true;
    }
    intrinsicBaseName += "." + part;
    intrinsicRealName = "%" + intrinsicBaseName + "%";
    if (hasOwn$1(INTRINSICS, intrinsicRealName)) {
      value = INTRINSICS[intrinsicRealName];
    } else if (value != null) {
      if (!(part in value)) {
        if (!allowMissing) {
          throw new $TypeError$3("base intrinsic for " + name + " exists, but the property is not available.");
        }
        return void 0;
      }
      if ($gOPD$1 && i + 1 >= parts.length) {
        var desc = $gOPD$1(value, part);
        isOwn = !!desc;
        if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
          value = desc.get;
        } else {
          value = value[part];
        }
      } else {
        isOwn = hasOwn$1(value, part);
        value = value[part];
      }
      if (isOwn && !skipFurtherCaching) {
        INTRINSICS[intrinsicRealName] = value;
      }
    }
  }
  return value;
};
var callBind$1 = { exports: {} };
var GetIntrinsic$5 = getIntrinsic;
var $defineProperty$1 = GetIntrinsic$5("%Object.defineProperty%", true);
var hasPropertyDescriptors$1 = function hasPropertyDescriptors() {
  if ($defineProperty$1) {
    try {
      $defineProperty$1({}, "a", { value: 1 });
      return true;
    } catch (e) {
      return false;
    }
  }
  return false;
};
hasPropertyDescriptors$1.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  if (!hasPropertyDescriptors$1()) {
    return null;
  }
  try {
    return $defineProperty$1([], "length", { value: 1 }).length !== 1;
  } catch (e) {
    return true;
  }
};
var hasPropertyDescriptors_1 = hasPropertyDescriptors$1;
var GetIntrinsic$4 = getIntrinsic;
var $gOPD = GetIntrinsic$4("%Object.getOwnPropertyDescriptor%", true);
if ($gOPD) {
  try {
    $gOPD([], "length");
  } catch (e) {
    $gOPD = null;
  }
}
var gopd$1 = $gOPD;
var hasPropertyDescriptors2 = hasPropertyDescriptors_1();
var GetIntrinsic$3 = getIntrinsic;
var $defineProperty = hasPropertyDescriptors2 && GetIntrinsic$3("%Object.defineProperty%", true);
if ($defineProperty) {
  try {
    $defineProperty({}, "a", { value: 1 });
  } catch (e) {
    $defineProperty = false;
  }
}
var $SyntaxError = GetIntrinsic$3("%SyntaxError%");
var $TypeError$2 = GetIntrinsic$3("%TypeError%");
var gopd = gopd$1;
var defineDataProperty = function defineDataProperty2(obj, property, value) {
  if (!obj || typeof obj !== "object" && typeof obj !== "function") {
    throw new $TypeError$2("`obj` must be an object or a function`");
  }
  if (typeof property !== "string" && typeof property !== "symbol") {
    throw new $TypeError$2("`property` must be a string or a symbol`");
  }
  if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
    throw new $TypeError$2("`nonEnumerable`, if provided, must be a boolean or null");
  }
  if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
    throw new $TypeError$2("`nonWritable`, if provided, must be a boolean or null");
  }
  if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
    throw new $TypeError$2("`nonConfigurable`, if provided, must be a boolean or null");
  }
  if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
    throw new $TypeError$2("`loose`, if provided, must be a boolean");
  }
  var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
  var nonWritable = arguments.length > 4 ? arguments[4] : null;
  var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
  var loose = arguments.length > 6 ? arguments[6] : false;
  var desc = !!gopd && gopd(obj, property);
  if ($defineProperty) {
    $defineProperty(obj, property, {
      configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
      enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
      value,
      writable: nonWritable === null && desc ? desc.writable : !nonWritable
    });
  } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
    obj[property] = value;
  } else {
    throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }
};
var GetIntrinsic$2 = getIntrinsic;
var define = defineDataProperty;
var hasDescriptors = hasPropertyDescriptors_1();
var gOPD = gopd$1;
var $TypeError$1 = GetIntrinsic$2("%TypeError%");
var $floor$1 = GetIntrinsic$2("%Math.floor%");
var setFunctionLength = function setFunctionLength2(fn, length) {
  if (typeof fn !== "function") {
    throw new $TypeError$1("`fn` is not a function");
  }
  if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor$1(length) !== length) {
    throw new $TypeError$1("`length` must be a positive 32-bit integer");
  }
  var loose = arguments.length > 2 && !!arguments[2];
  var functionLengthIsConfigurable = true;
  var functionLengthIsWritable = true;
  if ("length" in fn && gOPD) {
    var desc = gOPD(fn, "length");
    if (desc && !desc.configurable) {
      functionLengthIsConfigurable = false;
    }
    if (desc && !desc.writable) {
      functionLengthIsWritable = false;
    }
  }
  if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
    if (hasDescriptors) {
      define(fn, "length", length, true, true);
    } else {
      define(fn, "length", length);
    }
  }
  return fn;
};
(function(module) {
  var bind3 = functionBind;
  var GetIntrinsic3 = getIntrinsic;
  var setFunctionLength$1 = setFunctionLength;
  var $TypeError2 = GetIntrinsic3("%TypeError%");
  var $apply = GetIntrinsic3("%Function.prototype.apply%");
  var $call = GetIntrinsic3("%Function.prototype.call%");
  var $reflectApply = GetIntrinsic3("%Reflect.apply%", true) || bind3.call($call, $apply);
  var $defineProperty2 = GetIntrinsic3("%Object.defineProperty%", true);
  var $max = GetIntrinsic3("%Math.max%");
  if ($defineProperty2) {
    try {
      $defineProperty2({}, "a", { value: 1 });
    } catch (e) {
      $defineProperty2 = null;
    }
  }
  module.exports = function callBind2(originalFunction) {
    if (typeof originalFunction !== "function") {
      throw new $TypeError2("a function is required");
    }
    var func = $reflectApply(bind3, $call, arguments);
    return setFunctionLength$1(
      func,
      1 + $max(0, originalFunction.length - (arguments.length - 1)),
      true
    );
  };
  var applyBind = function applyBind2() {
    return $reflectApply(bind3, $apply, arguments);
  };
  if ($defineProperty2) {
    $defineProperty2(module.exports, "apply", { value: applyBind });
  } else {
    module.exports.apply = applyBind;
  }
})(callBind$1);
var GetIntrinsic$1 = getIntrinsic;
var callBind = callBind$1.exports;
var $indexOf = callBind(GetIntrinsic$1("String.prototype.indexOf"));
var callBound$1 = function callBoundIntrinsic(name, allowMissing) {
  var intrinsic = GetIntrinsic$1(name, !!allowMissing);
  if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
    return callBind(intrinsic);
  }
  return intrinsic;
};
var __viteBrowserExternal = {};
var __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
var require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var hasMap = typeof Map === "function" && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === "function" && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
  return O.__proto__;
} : null);
function addNumericSeparator(num, str) {
  if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
    return str;
  }
  var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof num === "number") {
    var int = num < 0 ? -$floor(-num) : $floor(num);
    if (int !== num) {
      var intStr = String(int);
      var dec = $slice.call(str, intStr.length + 1);
      return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return $replace.call(str, sepRegex, "$&_");
}
var utilInspect = require$$0;
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
var objectInspect = function inspect_(obj, options, depth, seen) {
  var opts = options || {};
  if (has$3(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  }
  if (has$3(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  }
  var customInspect = has$3(opts, "customInspect") ? opts.customInspect : true;
  if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  }
  if (has$3(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  }
  if (has$3(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  }
  var numericSeparator = opts.numericSeparator;
  if (typeof obj === "undefined") {
    return "undefined";
  }
  if (obj === null) {
    return "null";
  }
  if (typeof obj === "boolean") {
    return obj ? "true" : "false";
  }
  if (typeof obj === "string") {
    return inspectString(obj, opts);
  }
  if (typeof obj === "number") {
    if (obj === 0) {
      return Infinity / obj > 0 ? "0" : "-0";
    }
    var str = String(obj);
    return numericSeparator ? addNumericSeparator(obj, str) : str;
  }
  if (typeof obj === "bigint") {
    var bigIntStr = String(obj) + "n";
    return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
  }
  var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
  if (typeof depth === "undefined") {
    depth = 0;
  }
  if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
    return isArray$3(obj) ? "[Array]" : "[Object]";
  }
  var indent = getIndent(opts, depth);
  if (typeof seen === "undefined") {
    seen = [];
  } else if (indexOf(seen, obj) >= 0) {
    return "[Circular]";
  }
  function inspect2(value, from, noIndent) {
    if (from) {
      seen = $arrSlice.call(seen);
      seen.push(from);
    }
    if (noIndent) {
      var newOpts = {
        depth: opts.depth
      };
      if (has$3(opts, "quoteStyle")) {
        newOpts.quoteStyle = opts.quoteStyle;
      }
      return inspect_(value, newOpts, depth + 1, seen);
    }
    return inspect_(value, opts, depth + 1, seen);
  }
  if (typeof obj === "function" && !isRegExp$1(obj)) {
    var name = nameOf(obj);
    var keys = arrObjKeys(obj, inspect2);
    return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
  }
  if (isSymbol(obj)) {
    var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
    return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
  }
  if (isElement(obj)) {
    var s = "<" + $toLowerCase.call(String(obj.nodeName));
    var attrs = obj.attributes || [];
    for (var i = 0; i < attrs.length; i++) {
      s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
    }
    s += ">";
    if (obj.childNodes && obj.childNodes.length) {
      s += "...";
    }
    s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
    return s;
  }
  if (isArray$3(obj)) {
    if (obj.length === 0) {
      return "[]";
    }
    var xs = arrObjKeys(obj, inspect2);
    if (indent && !singleLineValues(xs)) {
      return "[" + indentedJoin(xs, indent) + "]";
    }
    return "[ " + $join.call(xs, ", ") + " ]";
  }
  if (isError(obj)) {
    var parts = arrObjKeys(obj, inspect2);
    if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
      return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect2(obj.cause), parts), ", ") + " }";
    }
    if (parts.length === 0) {
      return "[" + String(obj) + "]";
    }
    return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
  }
  if (typeof obj === "object" && customInspect) {
    if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
      return utilInspect(obj, { depth: maxDepth - depth });
    } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
      return obj.inspect();
    }
  }
  if (isMap(obj)) {
    var mapParts = [];
    if (mapForEach) {
      mapForEach.call(obj, function(value, key) {
        mapParts.push(inspect2(key, obj, true) + " => " + inspect2(value, obj));
      });
    }
    return collectionOf("Map", mapSize.call(obj), mapParts, indent);
  }
  if (isSet(obj)) {
    var setParts = [];
    if (setForEach) {
      setForEach.call(obj, function(value) {
        setParts.push(inspect2(value, obj));
      });
    }
    return collectionOf("Set", setSize.call(obj), setParts, indent);
  }
  if (isWeakMap(obj)) {
    return weakCollectionOf("WeakMap");
  }
  if (isWeakSet(obj)) {
    return weakCollectionOf("WeakSet");
  }
  if (isWeakRef(obj)) {
    return weakCollectionOf("WeakRef");
  }
  if (isNumber(obj)) {
    return markBoxed(inspect2(Number(obj)));
  }
  if (isBigInt(obj)) {
    return markBoxed(inspect2(bigIntValueOf.call(obj)));
  }
  if (isBoolean(obj)) {
    return markBoxed(booleanValueOf.call(obj));
  }
  if (isString(obj)) {
    return markBoxed(inspect2(String(obj)));
  }
  if (typeof window !== "undefined" && obj === window) {
    return "{ [object Window] }";
  }
  if (obj === commonjsGlobal) {
    return "{ [object globalThis] }";
  }
  if (!isDate(obj) && !isRegExp$1(obj)) {
    var ys = arrObjKeys(obj, inspect2);
    var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
    var protoTag = obj instanceof Object ? "" : "null prototype";
    var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
    var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
    var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
    if (ys.length === 0) {
      return tag + "{}";
    }
    if (indent) {
      return tag + "{" + indentedJoin(ys, indent) + "}";
    }
    return tag + "{ " + $join.call(ys, ", ") + " }";
  }
  return String(obj);
};
function wrapQuotes(s, defaultStyle, opts) {
  var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
  return quoteChar + s + quoteChar;
}
function quote(s) {
  return $replace.call(String(s), /"/g, "&quot;");
}
function isArray$3(obj) {
  return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isDate(obj) {
  return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isRegExp$1(obj) {
  return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isError(obj) {
  return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isString(obj) {
  return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isNumber(obj) {
  return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isBoolean(obj) {
  return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isSymbol(obj) {
  if (hasShammedSymbols) {
    return obj && typeof obj === "object" && obj instanceof Symbol;
  }
  if (typeof obj === "symbol") {
    return true;
  }
  if (!obj || typeof obj !== "object" || !symToString) {
    return false;
  }
  try {
    symToString.call(obj);
    return true;
  } catch (e) {
  }
  return false;
}
function isBigInt(obj) {
  if (!obj || typeof obj !== "object" || !bigIntValueOf) {
    return false;
  }
  try {
    bigIntValueOf.call(obj);
    return true;
  } catch (e) {
  }
  return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function(key) {
  return key in this;
};
function has$3(obj, key) {
  return hasOwn.call(obj, key);
}
function toStr(obj) {
  return objectToString.call(obj);
}
function nameOf(f) {
  if (f.name) {
    return f.name;
  }
  var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
  if (m) {
    return m[1];
  }
  return null;
}
function indexOf(xs, x) {
  if (xs.indexOf) {
    return xs.indexOf(x);
  }
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) {
      return i;
    }
  }
  return -1;
}
function isMap(x) {
  if (!mapSize || !x || typeof x !== "object") {
    return false;
  }
  try {
    mapSize.call(x);
    try {
      setSize.call(x);
    } catch (s) {
      return true;
    }
    return x instanceof Map;
  } catch (e) {
  }
  return false;
}
function isWeakMap(x) {
  if (!weakMapHas || !x || typeof x !== "object") {
    return false;
  }
  try {
    weakMapHas.call(x, weakMapHas);
    try {
      weakSetHas.call(x, weakSetHas);
    } catch (s) {
      return true;
    }
    return x instanceof WeakMap;
  } catch (e) {
  }
  return false;
}
function isWeakRef(x) {
  if (!weakRefDeref || !x || typeof x !== "object") {
    return false;
  }
  try {
    weakRefDeref.call(x);
    return true;
  } catch (e) {
  }
  return false;
}
function isSet(x) {
  if (!setSize || !x || typeof x !== "object") {
    return false;
  }
  try {
    setSize.call(x);
    try {
      mapSize.call(x);
    } catch (m) {
      return true;
    }
    return x instanceof Set;
  } catch (e) {
  }
  return false;
}
function isWeakSet(x) {
  if (!weakSetHas || !x || typeof x !== "object") {
    return false;
  }
  try {
    weakSetHas.call(x, weakSetHas);
    try {
      weakMapHas.call(x, weakMapHas);
    } catch (s) {
      return true;
    }
    return x instanceof WeakSet;
  } catch (e) {
  }
  return false;
}
function isElement(x) {
  if (!x || typeof x !== "object") {
    return false;
  }
  if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
    return true;
  }
  return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
}
function inspectString(str, opts) {
  if (str.length > opts.maxStringLength) {
    var remaining = str.length - opts.maxStringLength;
    var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
    return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
  }
  var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
  return wrapQuotes(s, "single", opts);
}
function lowbyte(c) {
  var n = c.charCodeAt(0);
  var x = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[n];
  if (x) {
    return "\\" + x;
  }
  return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
}
function markBoxed(str) {
  return "Object(" + str + ")";
}
function weakCollectionOf(type) {
  return type + " { ? }";
}
function collectionOf(type, size, entries, indent) {
  var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
  return type + " (" + size + ") {" + joinedEntries + "}";
}
function singleLineValues(xs) {
  for (var i = 0; i < xs.length; i++) {
    if (indexOf(xs[i], "\n") >= 0) {
      return false;
    }
  }
  return true;
}
function getIndent(opts, depth) {
  var baseIndent;
  if (opts.indent === "	") {
    baseIndent = "	";
  } else if (typeof opts.indent === "number" && opts.indent > 0) {
    baseIndent = $join.call(Array(opts.indent + 1), " ");
  } else {
    return null;
  }
  return {
    base: baseIndent,
    prev: $join.call(Array(depth + 1), baseIndent)
  };
}
function indentedJoin(xs, indent) {
  if (xs.length === 0) {
    return "";
  }
  var lineJoiner = "\n" + indent.prev + indent.base;
  return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
}
function arrObjKeys(obj, inspect2) {
  var isArr = isArray$3(obj);
  var xs = [];
  if (isArr) {
    xs.length = obj.length;
    for (var i = 0; i < obj.length; i++) {
      xs[i] = has$3(obj, i) ? inspect2(obj[i], obj) : "";
    }
  }
  var syms = typeof gOPS === "function" ? gOPS(obj) : [];
  var symMap;
  if (hasShammedSymbols) {
    symMap = {};
    for (var k = 0; k < syms.length; k++) {
      symMap["$" + syms[k]] = syms[k];
    }
  }
  for (var key in obj) {
    if (!has$3(obj, key)) {
      continue;
    }
    if (isArr && String(Number(key)) === key && key < obj.length) {
      continue;
    }
    if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
      continue;
    } else if ($test.call(/[^\w$]/, key)) {
      xs.push(inspect2(key, obj) + ": " + inspect2(obj[key], obj));
    } else {
      xs.push(key + ": " + inspect2(obj[key], obj));
    }
  }
  if (typeof gOPS === "function") {
    for (var j = 0; j < syms.length; j++) {
      if (isEnumerable.call(obj, syms[j])) {
        xs.push("[" + inspect2(syms[j]) + "]: " + inspect2(obj[syms[j]], obj));
      }
    }
  }
  return xs;
}
var GetIntrinsic2 = getIntrinsic;
var callBound = callBound$1;
var inspect = objectInspect;
var $TypeError = GetIntrinsic2("%TypeError%");
var $WeakMap = GetIntrinsic2("%WeakMap%", true);
var $Map = GetIntrinsic2("%Map%", true);
var $weakMapGet = callBound("WeakMap.prototype.get", true);
var $weakMapSet = callBound("WeakMap.prototype.set", true);
var $weakMapHas = callBound("WeakMap.prototype.has", true);
var $mapGet = callBound("Map.prototype.get", true);
var $mapSet = callBound("Map.prototype.set", true);
var $mapHas = callBound("Map.prototype.has", true);
var listGetNode = function(list, key) {
  for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
    if (curr.key === key) {
      prev.next = curr.next;
      curr.next = list.next;
      list.next = curr;
      return curr;
    }
  }
};
var listGet = function(objects, key) {
  var node = listGetNode(objects, key);
  return node && node.value;
};
var listSet = function(objects, key, value) {
  var node = listGetNode(objects, key);
  if (node) {
    node.value = value;
  } else {
    objects.next = {
      key,
      next: objects.next,
      value
    };
  }
};
var listHas = function(objects, key) {
  return !!listGetNode(objects, key);
};
var sideChannel = function getSideChannel() {
  var $wm;
  var $m;
  var $o;
  var channel = {
    assert: function(key) {
      if (!channel.has(key)) {
        throw new $TypeError("Side channel does not contain " + inspect(key));
      }
    },
    get: function(key) {
      if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
        if ($wm) {
          return $weakMapGet($wm, key);
        }
      } else if ($Map) {
        if ($m) {
          return $mapGet($m, key);
        }
      } else {
        if ($o) {
          return listGet($o, key);
        }
      }
    },
    has: function(key) {
      if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
        if ($wm) {
          return $weakMapHas($wm, key);
        }
      } else if ($Map) {
        if ($m) {
          return $mapHas($m, key);
        }
      } else {
        if ($o) {
          return listHas($o, key);
        }
      }
      return false;
    },
    set: function(key, value) {
      if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
        if (!$wm) {
          $wm = new $WeakMap();
        }
        $weakMapSet($wm, key, value);
      } else if ($Map) {
        if (!$m) {
          $m = new $Map();
        }
        $mapSet($m, key, value);
      } else {
        if (!$o) {
          $o = { key: {}, next: null };
        }
        listSet($o, key, value);
      }
    }
  };
  return channel;
};
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
};
var formats$3 = {
  "default": Format.RFC3986,
  formatters: {
    RFC1738: function(value) {
      return replace.call(value, percentTwenties, "+");
    },
    RFC3986: function(value) {
      return String(value);
    }
  },
  RFC1738: Format.RFC1738,
  RFC3986: Format.RFC3986
};
var formats$2 = formats$3;
var has$2 = Object.prototype.hasOwnProperty;
var isArray$2 = Array.isArray;
var hexTable = function() {
  var array = [];
  for (var i = 0; i < 256; ++i) {
    array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
  }
  return array;
}();
var compactQueue = function compactQueue2(queue) {
  while (queue.length > 1) {
    var item = queue.pop();
    var obj = item.obj[item.prop];
    if (isArray$2(obj)) {
      var compacted = [];
      for (var j = 0; j < obj.length; ++j) {
        if (typeof obj[j] !== "undefined") {
          compacted.push(obj[j]);
        }
      }
      item.obj[item.prop] = compacted;
    }
  }
};
var arrayToObject = function arrayToObject2(source, options) {
  var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var i = 0; i < source.length; ++i) {
    if (typeof source[i] !== "undefined") {
      obj[i] = source[i];
    }
  }
  return obj;
};
var merge = function merge2(target, source, options) {
  if (!source) {
    return target;
  }
  if (typeof source !== "object") {
    if (isArray$2(target)) {
      target.push(source);
    } else if (target && typeof target === "object") {
      if (options && (options.plainObjects || options.allowPrototypes) || !has$2.call(Object.prototype, source)) {
        target[source] = true;
      }
    } else {
      return [target, source];
    }
    return target;
  }
  if (!target || typeof target !== "object") {
    return [target].concat(source);
  }
  var mergeTarget = target;
  if (isArray$2(target) && !isArray$2(source)) {
    mergeTarget = arrayToObject(target, options);
  }
  if (isArray$2(target) && isArray$2(source)) {
    source.forEach(function(item, i) {
      if (has$2.call(target, i)) {
        var targetItem = target[i];
        if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
          target[i] = merge2(targetItem, item, options);
        } else {
          target.push(item);
        }
      } else {
        target[i] = item;
      }
    });
    return target;
  }
  return Object.keys(source).reduce(function(acc, key) {
    var value = source[key];
    if (has$2.call(acc, key)) {
      acc[key] = merge2(acc[key], value, options);
    } else {
      acc[key] = value;
    }
    return acc;
  }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
  return Object.keys(source).reduce(function(acc, key) {
    acc[key] = source[key];
    return acc;
  }, target);
};
var decode = function(str, decoder, charset) {
  var strWithoutPlus = str.replace(/\+/g, " ");
  if (charset === "iso-8859-1") {
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
  }
  try {
    return decodeURIComponent(strWithoutPlus);
  } catch (e) {
    return strWithoutPlus;
  }
};
var encode = function encode2(str, defaultEncoder, charset, kind, format) {
  if (str.length === 0) {
    return str;
  }
  var string = str;
  if (typeof str === "symbol") {
    string = Symbol.prototype.toString.call(str);
  } else if (typeof str !== "string") {
    string = String(str);
  }
  if (charset === "iso-8859-1") {
    return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
      return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
    });
  }
  var out = "";
  for (var i = 0; i < string.length; ++i) {
    var c = string.charCodeAt(i);
    if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats$2.RFC1738 && (c === 40 || c === 41)) {
      out += string.charAt(i);
      continue;
    }
    if (c < 128) {
      out = out + hexTable[c];
      continue;
    }
    if (c < 2048) {
      out = out + (hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
      continue;
    }
    if (c < 55296 || c >= 57344) {
      out = out + (hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
      continue;
    }
    i += 1;
    c = 65536 + ((c & 1023) << 10 | string.charCodeAt(i) & 1023);
    out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
  }
  return out;
};
var compact = function compact2(value) {
  var queue = [{ obj: { o: value }, prop: "o" }];
  var refs = [];
  for (var i = 0; i < queue.length; ++i) {
    var item = queue[i];
    var obj = item.obj[item.prop];
    var keys = Object.keys(obj);
    for (var j = 0; j < keys.length; ++j) {
      var key = keys[j];
      var val = obj[key];
      if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
        queue.push({ obj, prop: key });
        refs.push(val);
      }
    }
  }
  compactQueue(queue);
  return value;
};
var isRegExp = function isRegExp2(obj) {
  return Object.prototype.toString.call(obj) === "[object RegExp]";
};
var isBuffer = function isBuffer2(obj) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine2(a, b) {
  return [].concat(a, b);
};
var maybeMap = function maybeMap2(val, fn) {
  if (isArray$2(val)) {
    var mapped = [];
    for (var i = 0; i < val.length; i += 1) {
      mapped.push(fn(val[i]));
    }
    return mapped;
  }
  return fn(val);
};
var utils$2 = {
  arrayToObject,
  assign,
  combine,
  compact,
  decode,
  encode,
  isBuffer,
  isRegExp,
  maybeMap,
  merge
};
var getSideChannel2 = sideChannel;
var utils$1 = utils$2;
var formats$1 = formats$3;
var has$1 = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
  brackets: function brackets(prefix) {
    return prefix + "[]";
  },
  comma: "comma",
  indices: function indices(prefix, key) {
    return prefix + "[" + key + "]";
  },
  repeat: function repeat(prefix) {
    return prefix;
  }
};
var isArray$1 = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
  push.apply(arr, isArray$1(valueOrArray) ? valueOrArray : [valueOrArray]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats$1["default"];
var defaults$1 = {
  addQueryPrefix: false,
  allowDots: false,
  charset: "utf-8",
  charsetSentinel: false,
  delimiter: "&",
  encode: true,
  encoder: utils$1.encode,
  encodeValuesOnly: false,
  format: defaultFormat,
  formatter: formats$1.formatters[defaultFormat],
  indices: false,
  serializeDate: function serializeDate(date) {
    return toISO.call(date);
  },
  skipNulls: false,
  strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
  return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
};
var sentinel = {};
var stringify$1 = function stringify(object, prefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate2, format, formatter, encodeValuesOnly, charset, sideChannel2) {
  var obj = object;
  var tmpSc = sideChannel2;
  var step = 0;
  var findFlag = false;
  while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
    var pos = tmpSc.get(object);
    step += 1;
    if (typeof pos !== "undefined") {
      if (pos === step) {
        throw new RangeError("Cyclic object value");
      } else {
        findFlag = true;
      }
    }
    if (typeof tmpSc.get(sentinel) === "undefined") {
      step = 0;
    }
  }
  if (typeof filter === "function") {
    obj = filter(prefix, obj);
  } else if (obj instanceof Date) {
    obj = serializeDate2(obj);
  } else if (generateArrayPrefix === "comma" && isArray$1(obj)) {
    obj = utils$1.maybeMap(obj, function(value2) {
      if (value2 instanceof Date) {
        return serializeDate2(value2);
      }
      return value2;
    });
  }
  if (obj === null) {
    if (strictNullHandling) {
      return encoder && !encodeValuesOnly ? encoder(prefix, defaults$1.encoder, charset, "key", format) : prefix;
    }
    obj = "";
  }
  if (isNonNullishPrimitive(obj) || utils$1.isBuffer(obj)) {
    if (encoder) {
      var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults$1.encoder, charset, "key", format);
      if (generateArrayPrefix === "comma" && encodeValuesOnly) {
        var valuesArray = split.call(String(obj), ",");
        var valuesJoined = "";
        for (var i = 0; i < valuesArray.length; ++i) {
          valuesJoined += (i === 0 ? "" : ",") + formatter(encoder(valuesArray[i], defaults$1.encoder, charset, "value", format));
        }
        return [formatter(keyValue) + (commaRoundTrip && isArray$1(obj) && valuesArray.length === 1 ? "[]" : "") + "=" + valuesJoined];
      }
      return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults$1.encoder, charset, "value", format))];
    }
    return [formatter(prefix) + "=" + formatter(String(obj))];
  }
  var values = [];
  if (typeof obj === "undefined") {
    return values;
  }
  var objKeys;
  if (generateArrayPrefix === "comma" && isArray$1(obj)) {
    objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
  } else if (isArray$1(filter)) {
    objKeys = filter;
  } else {
    var keys = Object.keys(obj);
    objKeys = sort ? keys.sort(sort) : keys;
  }
  var adjustedPrefix = commaRoundTrip && isArray$1(obj) && obj.length === 1 ? prefix + "[]" : prefix;
  for (var j = 0; j < objKeys.length; ++j) {
    var key = objKeys[j];
    var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
    if (skipNulls && value === null) {
      continue;
    }
    var keyPrefix = isArray$1(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + key : "[" + key + "]");
    sideChannel2.set(object, step);
    var valueSideChannel = getSideChannel2();
    valueSideChannel.set(sentinel, sideChannel2);
    pushToArray(values, stringify(
      value,
      keyPrefix,
      generateArrayPrefix,
      commaRoundTrip,
      strictNullHandling,
      skipNulls,
      encoder,
      filter,
      sort,
      allowDots,
      serializeDate2,
      format,
      formatter,
      encodeValuesOnly,
      charset,
      valueSideChannel
    ));
  }
  return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
  if (!opts) {
    return defaults$1;
  }
  if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
    throw new TypeError("Encoder has to be a function.");
  }
  var charset = opts.charset || defaults$1.charset;
  if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  }
  var format = formats$1["default"];
  if (typeof opts.format !== "undefined") {
    if (!has$1.call(formats$1.formatters, opts.format)) {
      throw new TypeError("Unknown format option provided.");
    }
    format = opts.format;
  }
  var formatter = formats$1.formatters[format];
  var filter = defaults$1.filter;
  if (typeof opts.filter === "function" || isArray$1(opts.filter)) {
    filter = opts.filter;
  }
  return {
    addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults$1.addQueryPrefix,
    allowDots: typeof opts.allowDots === "undefined" ? defaults$1.allowDots : !!opts.allowDots,
    charset,
    charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults$1.charsetSentinel,
    delimiter: typeof opts.delimiter === "undefined" ? defaults$1.delimiter : opts.delimiter,
    encode: typeof opts.encode === "boolean" ? opts.encode : defaults$1.encode,
    encoder: typeof opts.encoder === "function" ? opts.encoder : defaults$1.encoder,
    encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults$1.encodeValuesOnly,
    filter,
    format,
    formatter,
    serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults$1.serializeDate,
    skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults$1.skipNulls,
    sort: typeof opts.sort === "function" ? opts.sort : null,
    strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults$1.strictNullHandling
  };
};
var stringify_1 = function(object, opts) {
  var obj = object;
  var options = normalizeStringifyOptions(opts);
  var objKeys;
  var filter;
  if (typeof options.filter === "function") {
    filter = options.filter;
    obj = filter("", obj);
  } else if (isArray$1(options.filter)) {
    filter = options.filter;
    objKeys = filter;
  }
  var keys = [];
  if (typeof obj !== "object" || obj === null) {
    return "";
  }
  var arrayFormat;
  if (opts && opts.arrayFormat in arrayPrefixGenerators) {
    arrayFormat = opts.arrayFormat;
  } else if (opts && "indices" in opts) {
    arrayFormat = opts.indices ? "indices" : "repeat";
  } else {
    arrayFormat = "indices";
  }
  var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
  if (opts && "commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  }
  var commaRoundTrip = generateArrayPrefix === "comma" && opts && opts.commaRoundTrip;
  if (!objKeys) {
    objKeys = Object.keys(obj);
  }
  if (options.sort) {
    objKeys.sort(options.sort);
  }
  var sideChannel2 = getSideChannel2();
  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];
    if (options.skipNulls && obj[key] === null) {
      continue;
    }
    pushToArray(keys, stringify$1(
      obj[key],
      key,
      generateArrayPrefix,
      commaRoundTrip,
      options.strictNullHandling,
      options.skipNulls,
      options.encode ? options.encoder : null,
      options.filter,
      options.sort,
      options.allowDots,
      options.serializeDate,
      options.format,
      options.formatter,
      options.encodeValuesOnly,
      options.charset,
      sideChannel2
    ));
  }
  var joined = keys.join(options.delimiter);
  var prefix = options.addQueryPrefix === true ? "?" : "";
  if (options.charsetSentinel) {
    if (options.charset === "iso-8859-1") {
      prefix += "utf8=%26%2310003%3B&";
    } else {
      prefix += "utf8=%E2%9C%93&";
    }
  }
  return joined.length > 0 ? prefix + joined : "";
};
var utils = utils$2;
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults = {
  allowDots: false,
  allowPrototypes: false,
  allowSparse: false,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: false,
  comma: false,
  decoder: utils.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: false,
  interpretNumericEntities: false,
  parameterLimit: 1e3,
  parseArrays: true,
  plainObjects: false,
  strictNullHandling: false
};
var interpretNumericEntities = function(str) {
  return str.replace(/&#(\d+);/g, function($0, numberStr) {
    return String.fromCharCode(parseInt(numberStr, 10));
  });
};
var parseArrayValue = function(val, options) {
  if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
    return val.split(",");
  }
  return val;
};
var isoSentinel = "utf8=%26%2310003%3B";
var charsetSentinel = "utf8=%E2%9C%93";
var parseValues = function parseQueryStringValues(str, options) {
  var obj = {};
  var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
  var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
  var parts = cleanStr.split(options.delimiter, limit);
  var skipIndex = -1;
  var i;
  var charset = options.charset;
  if (options.charsetSentinel) {
    for (i = 0; i < parts.length; ++i) {
      if (parts[i].indexOf("utf8=") === 0) {
        if (parts[i] === charsetSentinel) {
          charset = "utf-8";
        } else if (parts[i] === isoSentinel) {
          charset = "iso-8859-1";
        }
        skipIndex = i;
        i = parts.length;
      }
    }
  }
  for (i = 0; i < parts.length; ++i) {
    if (i === skipIndex) {
      continue;
    }
    var part = parts[i];
    var bracketEqualsPos = part.indexOf("]=");
    var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
    var key, val;
    if (pos === -1) {
      key = options.decoder(part, defaults.decoder, charset, "key");
      val = options.strictNullHandling ? null : "";
    } else {
      key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
      val = utils.maybeMap(
        parseArrayValue(part.slice(pos + 1), options),
        function(encodedVal) {
          return options.decoder(encodedVal, defaults.decoder, charset, "value");
        }
      );
    }
    if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
      val = interpretNumericEntities(val);
    }
    if (part.indexOf("[]=") > -1) {
      val = isArray(val) ? [val] : val;
    }
    if (has.call(obj, key)) {
      obj[key] = utils.combine(obj[key], val);
    } else {
      obj[key] = val;
    }
  }
  return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
  var leaf = valuesParsed ? val : parseArrayValue(val, options);
  for (var i = chain.length - 1; i >= 0; --i) {
    var obj;
    var root = chain[i];
    if (root === "[]" && options.parseArrays) {
      obj = [].concat(leaf);
    } else {
      obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
      var index = parseInt(cleanRoot, 10);
      if (!options.parseArrays && cleanRoot === "") {
        obj = { 0: leaf };
      } else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && (options.parseArrays && index <= options.arrayLimit)) {
        obj = [];
        obj[index] = leaf;
      } else if (cleanRoot !== "__proto__") {
        obj[cleanRoot] = leaf;
      }
    }
    leaf = obj;
  }
  return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
  if (!givenKey) {
    return;
  }
  var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
  var brackets2 = /(\[[^[\]]*])/;
  var child = /(\[[^[\]]*])/g;
  var segment = options.depth > 0 && brackets2.exec(key);
  var parent = segment ? key.slice(0, segment.index) : key;
  var keys = [];
  if (parent) {
    if (!options.plainObjects && has.call(Object.prototype, parent)) {
      if (!options.allowPrototypes) {
        return;
      }
    }
    keys.push(parent);
  }
  var i = 0;
  while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
    i += 1;
    if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
      if (!options.allowPrototypes) {
        return;
      }
    }
    keys.push(segment[1]);
  }
  if (segment) {
    keys.push("[" + key.slice(segment.index) + "]");
  }
  return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions2(opts) {
  if (!opts) {
    return defaults;
  }
  if (opts.decoder !== null && opts.decoder !== void 0 && typeof opts.decoder !== "function") {
    throw new TypeError("Decoder has to be a function.");
  }
  if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  }
  var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
  return {
    allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
    allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
    allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
    arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
    charset,
    charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
    comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
    decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
    delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
    depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
    ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
    interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
    parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
    parseArrays: opts.parseArrays !== false,
    plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
    strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
  };
};
var parse$1 = function(str, opts) {
  var options = normalizeParseOptions(opts);
  if (str === "" || str === null || typeof str === "undefined") {
    return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  }
  var tempObj = typeof str === "string" ? parseValues(str, options) : str;
  var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  var keys = Object.keys(tempObj);
  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i];
    var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
    obj = utils.merge(obj, newObj, options);
  }
  if (options.allowSparse === true) {
    return obj;
  }
  return utils.compact(obj);
};
var stringify2 = stringify_1;
var parse = parse$1;
var formats = formats$3;
var lib = {
  formats,
  parse,
  stringify: stringify2
};
const log = debug("app:globalView");
function globalView({ collName, stateName, defaultForm = {} }) {
  log("new instance normal", stateName, collName);
  const form = ref(defaultForm);
  const { user } = useAccountStore();
  const store = useDataStore(_.uniqueId(stateName), collName);
  const { _data: data } = store;
  store.initStore();
  async function setRecord(record) {
    log("setRecord", stateName, record);
    await store.dispatchAction({ action: "beforeSelect", param: record });
    form.value = record;
    await store.dispatchAction({ action: "afterSelect", param: form.value });
  }
  async function doAdd() {
    log("doAdd", stateName);
    try {
      form.value = { ...defaultForm };
      await store.dispatchAction({ action: "beforeAdd", param: form.value });
      const result = await store.addRecord({ record: form.value });
      form.value = result;
      await store.dispatchAction({ action: "afterAdd", param: form.value });
    } catch (error) {
      form.value = { ...defaultForm };
    }
  }
  async function doSave() {
    log("doSave", stateName);
    try {
      await store.dispatchAction({ action: "beforeSave", param: form.value });
      form.value = await store.updateRecord({ record: form.value });
      await store.dispatchAction({ action: "afterSave", param: form.value });
    } catch (error) {
      form.value = { ...defaultForm };
    }
  }
  async function doDelete() {
    log("doDelete", stateName);
    try {
      await store.dispatchAction({ action: "beforeDelete", param: form.value });
      await store.deleteRecord({ record: form.value });
      form.value = { ...defaultForm };
      await store.dispatchAction({ action: "afterDelete", param: form.value });
    } catch (error) {
      form.value = { ...defaultForm };
    }
  }
  onMounted(() => {
    log("mounted", stateName);
    store.registerAction({ action: "setRecord", target: "GlobalView", func: setRecord });
    store.registerAction({ action: "add", target: "GlobalView", func: doAdd });
    store.registerAction({ action: "save", target: "GlobalView", func: doSave });
    store.registerAction({ action: "delete", target: "GlobalView", func: doDelete });
  });
  onBeforeUnmount(() => {
    log("unmounted", stateName);
    store.$dispose();
  });
  log("created", stateName);
  return {
    store,
    data,
    form,
    user,
    doAdd,
    doSave,
    doDelete
  };
}
function useNavSettingsStore(stateName) {
  const log2 = debug(`app:${stateName}:Navsettings.store`);
  return defineStore(`navSettings:${stateName}`, {
    state: () => ({
      _status: {
        add: true,
        save: false,
        remove: false,
        settings: false
      },
      _setting: []
    }),
    getters: {
      status: (state) => state._status,
      setting: (state) => state._setting
    },
    actions: {
      initStatus(payload) {
        log2("initStatus");
        this.setStatus(lodash.exports.defaults(payload, {
          add: true,
          save: false,
          remove: false,
          settings: true
        }));
      },
      setStatus(payload) {
        log2("setStatus", payload);
        for (const item in payload) {
          this._status[item] = payload[item];
        }
      },
      setSetting(payload) {
        log2("setSetting", payload);
        this._setting = payload;
      }
    }
  })();
}
var NavBar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { key: 2 };
const _hoisted_2 = { class: "text-grey-8 q-gutter-xs" };
const _sfc_main = defineComponent({
  __name: "NavBar",
  props: {
    title: {},
    state: {},
    stateName: {},
    globalView: {},
    funcs: {},
    type: {},
    icon: {},
    navshow: { default: {
      add: true,
      save: true,
      remove: true
    } },
    navclass: {},
    locButtons: {}
  },
  emits: [
    "close",
    "clickButton"
  ],
  setup(__props, { emit: __emit }) {
    const log2 = debug("app:navbar");
    const props = __props;
    const emit = __emit;
    const navStore = useNavSettingsStore(_.uniqueId(props.stateName));
    const { status, setting } = storeToRefs(navStore);
    log2("start", props.stateName, navStore);
    const showGridMenu = ref(false), show = reactive({
      add: true,
      save: true,
      remove: true,
      close: false,
      settings: true
    });
    if (!props.stateName) {
      show.add = false;
      show.save = false;
      show.remove = false;
    } else
      switch (props.type) {
        case "window":
          navStore.initStatus({
            save: false
          });
          show.save = false;
          break;
        case "dialog":
          navStore.initStatus({
            save: true,
            remove: true
          });
          show.add = false;
          show.settings = false;
          show.close = true;
          break;
        default:
          navStore.initStatus();
          break;
      }
    const print = _.filter(props.funcs, (item) => item.group === "print"), func = _.filter(props.funcs, (item) => item.group === "functions");
    _.filter(props.funcs, (item) => item.group === "buttons");
    _.find(props.funcs, (item) => item.group === "close");
    let actState = "";
    async function callFunc(item) {
      log2("callFunc", "callFunc:" + props.stateName, item.link);
      switch (item.group) {
        case "print":
          log2("print", item);
          const filter = {};
          log2("filter", filter);
          if (item.click) {
            log2("Function emit (print):", item.click);
            emit(item.click);
          } else
            window.open(`/print/${item.link}?` + lib.stringify({ filter }), "blank", "width=800,height=600,resizable=yes,scrollbars=auto,status=yes");
          break;
        case "functions":
          log2("functions", item);
          if (item.link) {
            log2("Function emit (functions):", item.link);
            emit(item.link);
          }
          break;
        default:
          log2("No valid function", item);
          break;
      }
    }
    async function doAdd() {
      var _a;
      log2("add", props.stateName);
      navStore.setStatus({ add: false, save: true });
      actState = "ADD";
      if ((_a = props.globalView) == null ? void 0 : _a.doAdd) {
        await props.globalView.doAdd();
      } else {
        await props.state.dispatchAction({ action: "add" });
      }
    }
    async function doSave() {
      var _a;
      log2("save", props.stateName);
      navStore.setStatus({ add: true });
      if ((_a = props.globalView) == null ? void 0 : _a.doSave) {
        await props.globalView.doSave();
      } else {
        await props.state.dispatchAction({ action: "save" });
      }
    }
    async function doDelete() {
      var _a;
      log2("delete");
      navStore.setStatus({ remove: false });
      actState = "DELETE";
      if ((_a = props.globalView) == null ? void 0 : _a.doDelete) {
        await props.globalView.doDelete();
      } else {
        await props.state.dispatchAction({ action: "delete" });
      }
    }
    function doSelect(record) {
      log2("setButton", props.stateName);
      if (record._id) {
        navStore.setStatus({
          add: actState !== "ADD",
          save: true,
          remove: true
        });
        actState = "SELECT";
        if (_.isArray(props.locButtons)) {
          for (const item of props.locButtons) {
            if (item.select)
              item.enabled = true;
          }
        }
      } else {
        navStore.setStatus({
          add: true,
          save: false,
          remove: false
        });
      }
    }
    function doClose() {
      emit("close");
    }
    function setSetting(setting2) {
      const columns = _.keyBy(setting2.columns, "colId"), colMenu = _.filter(setting2.colMenu, (item) => {
        return !item.hideCol;
      });
      log2("setSetting", columns, colMenu);
      navStore.setSetting(_.map(colMenu, (item) => {
        item.show = columns[item.field] ? !columns[item.field].hide : !item.hide;
        return item;
      }));
    }
    async function saveSett() {
      log2("save settings", props.stateName);
      await props.state.dispatchAction({ action: "saveSettings" });
      showGridMenu.value = false;
    }
    async function deleteSett() {
      log2("delete settings", props.stateName);
      await props.state.dispatchAction({ action: "deleteSettings" });
      showGridMenu.value = false;
    }
    function clickButton(link) {
      log2("clickButton", link);
      emit("clickButton", link);
    }
    computed(async () => {
      const rights = await axios.get(`/model/rights/${props.stateName}.json`);
      const navbarSubmenu = rights.data && rights.data.submenu;
      return navbarSubmenu;
    });
    onMounted(() => {
      log2("mounted", props.state);
      props.state.registerAction({ action: "setRecord", target: "NavBar", func: doSelect });
      props.state.registerAction({ action: "setSetting", target: "NavBar", func: setSetting });
    });
    onBeforeUnmount(async () => {
      log2("destroy", props.stateName);
      navStore.$dispose();
    });
    return (_ctx, _cache) => {
      const _directive_t = resolveDirective("t");
      return openBlock(), createBlock(QToolbar, {
        class: normalizeClass(["bg-blue-8 text-white shadow gutter-sm", _ctx.navclass]),
        inset: unref(show).inset
      }, {
        default: withCtx(() => {
          var _a, _b, _c;
          return [
            _ctx.icon ? (openBlock(), createBlock(QIcon, {
              key: 0,
              name: _ctx.icon,
              style: { "font-size": "1.6em" }
            }, null, 8, ["name"])) : createCommentVNode("", true),
            _ctx.title ? withDirectives((openBlock(), createBlock(QToolbarTitle, { key: 1 }, null, 512)), [
              [_directive_t, _ctx.title]
            ]) : createCommentVNode("", true),
            _ctx.locButtons ? (openBlock(), createElementBlock("div", _hoisted_1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.locButtons, (item) => {
                return openBlock(), createBlock(QBtn, {
                  key: item.link,
                  label: _ctx.$t(`messages.${item.label}`),
                  icon: item.icon || "apps",
                  color: "white",
                  "text-color": "black",
                  onClick: ($event) => clickButton(item.link),
                  dense: "",
                  disabled: !unref(status).save
                }, null, 8, ["label", "icon", "onClick", "disabled"]);
              }), 128))
            ])) : createCommentVNode("", true),
            _ctx.locButtons && _ctx.locButtons.length > 0 ? (openBlock(), createBlock(QSeparator, {
              key: 3,
              spaced: "",
              vertical: ""
            })) : createCommentVNode("", true),
            unref(func).length > 0 ? (openBlock(), createBlock(QBtnDropdown, {
              key: 4,
              label: _ctx.$t("messages.LabelFuncs"),
              icon: "apps",
              color: "white",
              "text-color": "black",
              dense: ""
            }, {
              default: withCtx(() => [
                createVNode(QList, null, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(func), (item, index) => {
                      return withDirectives((openBlock(), createBlock(QItem, {
                        onClick: ($event) => callFunc(item),
                        clickable: "",
                        key: index
                      }, {
                        default: withCtx(() => [
                          item.icon ? (openBlock(), createBlock(QItemSection, {
                            key: 0,
                            side: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(QIcon, {
                                name: item.icon
                              }, null, 8, ["name"])
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createVNode(QItemLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t(`messages.${item.name}`)), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])), [
                        [ClosePopup]
                      ]);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true),
            unref(func).length > 0 ? (openBlock(), createBlock(QSeparator, {
              key: 5,
              spaced: "",
              vertical: ""
            })) : createCommentVNode("", true),
            unref(print).length > 0 ? (openBlock(), createBlock(QBtnDropdown, {
              key: 6,
              label: _ctx.$t("messages.LabelPrint"),
              icon: "print",
              color: "white",
              "text-color": "black",
              dense: ""
            }, {
              default: withCtx(() => [
                createVNode(QList, null, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(print), (item, index) => {
                      return withDirectives((openBlock(), createBlock(QItem, {
                        clickable: "",
                        onClick: ($event) => callFunc(item),
                        key: index
                      }, {
                        default: withCtx(() => [
                          item.icon ? (openBlock(), createBlock(QItemSection, {
                            key: 0,
                            side: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(QIcon, {
                                name: item.icon
                              }, null, 8, ["name"])
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createVNode(QItemLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t(`messages.${item.name}`)), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])), [
                        [ClosePopup]
                      ]);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true),
            unref(print).length > 0 ? (openBlock(), createBlock(QSeparator, {
              key: 7,
              spaced: "",
              vertical: ""
            })) : createCommentVNode("", true),
            unref(show).add && ((_a = _ctx.navshow) == null ? void 0 : _a.add) !== false ? (openBlock(), createBlock(QBtn, {
              key: 8,
              "no-caps": "",
              size: "md",
              color: "white",
              "text-color": "black",
              disabled: !unref(status).add,
              onClick: _cache[0] || (_cache[0] = ($event) => doAdd()),
              icon: "add_box",
              dense: ""
            }, {
              default: withCtx(() => [
                createVNode(QTooltip, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("messages.ButtonAdd")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["disabled"])) : createCommentVNode("", true),
            unref(show).save && ((_b = _ctx.navshow) == null ? void 0 : _b.save) !== false ? (openBlock(), createBlock(QBtn, {
              key: 9,
              "no-caps": "",
              size: "md",
              color: "white",
              "text-color": "black",
              disabled: !unref(status).save,
              onClick: _cache[1] || (_cache[1] = ($event) => doSave()),
              icon: "save_alt",
              dense: ""
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
            }, 8, ["disabled"])) : createCommentVNode("", true),
            unref(show).remove && ((_c = _ctx.navshow) == null ? void 0 : _c.remove) !== false ? (openBlock(), createBlock(QBtn, {
              key: 10,
              "no-caps": "",
              size: "md",
              color: "white",
              "text-color": "black",
              disabled: !unref(status).remove,
              onClick: _cache[2] || (_cache[2] = ($event) => doDelete()),
              icon: "delete",
              dense: ""
            }, {
              default: withCtx(() => [
                createVNode(QTooltip, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("messages.ButtonDelete")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["disabled"])) : createCommentVNode("", true),
            createVNode(QSeparator, {
              spaced: "",
              vertical: ""
            }),
            unref(show).settings ? (openBlock(), createBlock(QBtnDropdown, {
              key: 11,
              modelValue: unref(showGridMenu),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(showGridMenu) ? showGridMenu.value = $event : null),
              color: "white",
              "text-color": "black",
              disabled: !unref(status).settings,
              icon: "settings",
              dense: ""
            }, {
              default: withCtx(() => [
                createVNode(QList, null, {
                  default: withCtx(() => [
                    createVNode(QItemLabel, { header: "" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("messages.GridSetting")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QItem, { dense: "" }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_2, [
                              createVNode(QBtn, {
                                clickable: "",
                                onClick: _cache[3] || (_cache[3] = ($event) => saveSett()),
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
                              }),
                              createVNode(QBtn, {
                                clickable: "",
                                onClick: _cache[4] || (_cache[4] = ($event) => deleteSett()),
                                icon: "delete_forever"
                              }, {
                                default: withCtx(() => [
                                  createVNode(QTooltip, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t("messages.ButtonReset")), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QSeparator),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(status).setting, (sett) => {
                      return openBlock(), createBlock(QItem, {
                        clickable: "",
                        key: sett.field,
                        dense: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createVNode(QToggle, {
                                label: _ctx.$t(`messages.${sett.headerName}`),
                                color: "green",
                                modelValue: sett.show,
                                "onUpdate:modelValue": ($event) => sett.show = $event,
                                onInput: ($event) => _ctx.toggleField(sett.field, sett.show)
                              }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "onInput"])
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
            }, 8, ["modelValue", "disabled"])) : createCommentVNode("", true),
            unref(show).close ? (openBlock(), createBlock(QBtn, {
              key: 12,
              "no-caps": "",
              size: "md",
              color: "white",
              "text-color": "black",
              onClick: _cache[6] || (_cache[6] = ($event) => doClose()),
              icon: "close",
              dense: ""
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
            })) : createCommentVNode("", true)
          ];
        }),
        _: 1
      }, 8, ["class", "inset"]);
    };
  }
});
var NavBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-690de7f9"], ["__file", "NavBar.vue"]]);
export { NavBar as N, globalView as g };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2QmFyLmViNzBlNGQ1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFzLXN5bWJvbHMvc2hhbXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFzLXN5bWJvbHMvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFzLXByb3RvL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Z1bmN0aW9uLWJpbmQvaW1wbGVtZW50YXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZnVuY3Rpb24tYmluZC9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYXNvd24vaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZ2V0LWludHJpbnNpYy9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYXMtcHJvcGVydHktZGVzY3JpcHRvcnMvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZ29wZC9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kZWZpbmUtZGF0YS1wcm9wZXJ0eS9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zZXQtZnVuY3Rpb24tbGVuZ3RoL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhbGwtYmluZC9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWxsLWJpbmQvY2FsbEJvdW5kLmpzIiwiLi4vLi4vLi4vX192aXRlLWJyb3dzZXItZXh0ZXJuYWwiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvb2JqZWN0LWluc3BlY3QvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2lkZS1jaGFubmVsL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3FzL2xpYi9mb3JtYXRzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3FzL2xpYi91dGlscy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xcy9saWIvc3RyaW5naWZ5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3FzL2xpYi9wYXJzZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xcy9saWIvaW5kZXguanMiLCIuLi8uLi8uLi9zcmMvY29tbW9uL2hlbHBlcnMvR2xvYmFsVmlldy50cyIsIi4uLy4uLy4uL3NyYy9zdG9yZXMvbmF2U2V0dGluZ3Muc3RvcmUudHMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9OYXZCYXIudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLyogZXNsaW50IGNvbXBsZXhpdHk6IFsyLCAxOF0sIG1heC1zdGF0ZW1lbnRzOiBbMiwgMzNdICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhhc1N5bWJvbHMoKSB7XG5cdGlmICh0eXBlb2YgU3ltYm9sICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gJ3N5bWJvbCcpIHsgcmV0dXJuIHRydWU7IH1cblxuXHR2YXIgb2JqID0ge307XG5cdHZhciBzeW0gPSBTeW1ib2woJ3Rlc3QnKTtcblx0dmFyIHN5bU9iaiA9IE9iamVjdChzeW0pO1xuXHRpZiAodHlwZW9mIHN5bSA9PT0gJ3N0cmluZycpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzeW0pICE9PSAnW29iamVjdCBTeW1ib2xdJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzeW1PYmopICE9PSAnW29iamVjdCBTeW1ib2xdJykgeyByZXR1cm4gZmFsc2U7IH1cblxuXHQvLyB0ZW1wIGRpc2FibGVkIHBlciBodHRwczovL2dpdGh1Yi5jb20vbGpoYXJiL29iamVjdC5hc3NpZ24vaXNzdWVzLzE3XG5cdC8vIGlmIChzeW0gaW5zdGFuY2VvZiBTeW1ib2wpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdC8vIHRlbXAgZGlzYWJsZWQgcGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9XZWJSZWZsZWN0aW9uL2dldC1vd24tcHJvcGVydHktc3ltYm9scy9pc3N1ZXMvNFxuXHQvLyBpZiAoIShzeW1PYmogaW5zdGFuY2VvZiBTeW1ib2wpKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdC8vIGlmICh0eXBlb2YgU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZyAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0Ly8gaWYgKFN0cmluZyhzeW0pICE9PSBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHR2YXIgc3ltVmFsID0gNDI7XG5cdG9ialtzeW1dID0gc3ltVmFsO1xuXHRmb3IgKHN5bSBpbiBvYmopIHsgcmV0dXJuIGZhbHNlOyB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXgsIG5vLXVucmVhY2hhYmxlLWxvb3Bcblx0aWYgKHR5cGVvZiBPYmplY3Qua2V5cyA9PT0gJ2Z1bmN0aW9uJyAmJiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCAhPT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzID09PSAnZnVuY3Rpb24nICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikubGVuZ3RoICE9PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdHZhciBzeW1zID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmopO1xuXHRpZiAoc3ltcy5sZW5ndGggIT09IDEgfHwgc3ltc1swXSAhPT0gc3ltKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iaiwgc3ltKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBzeW0pO1xuXHRcdGlmIChkZXNjcmlwdG9yLnZhbHVlICE9PSBzeW1WYWwgfHwgZGVzY3JpcHRvci5lbnVtZXJhYmxlICE9PSB0cnVlKSB7IHJldHVybiBmYWxzZTsgfVxuXHR9XG5cblx0cmV0dXJuIHRydWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb3JpZ1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbDtcbnZhciBoYXNTeW1ib2xTaGFtID0gcmVxdWlyZSgnLi9zaGFtcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhhc05hdGl2ZVN5bWJvbHMoKSB7XG5cdGlmICh0eXBlb2Ygb3JpZ1N5bWJvbCAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2Ygb3JpZ1N5bWJvbCgnZm9vJykgIT09ICdzeW1ib2wnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIFN5bWJvbCgnYmFyJykgIT09ICdzeW1ib2wnKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdHJldHVybiBoYXNTeW1ib2xTaGFtKCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdGVzdCA9IHtcblx0Zm9vOiB7fVxufTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzUHJvdG8oKSB7XG5cdHJldHVybiB7IF9fcHJvdG9fXzogdGVzdCB9LmZvbyA9PT0gdGVzdC5mb28gJiYgISh7IF9fcHJvdG9fXzogbnVsbCB9IGluc3RhbmNlb2YgJE9iamVjdCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQgbm8taW52YWxpZC10aGlzOiAxICovXG5cbnZhciBFUlJPUl9NRVNTQUdFID0gJ0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgJztcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgZnVuY1R5cGUgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXG52YXIgY29uY2F0dHkgPSBmdW5jdGlvbiBjb25jYXR0eShhLCBiKSB7XG4gICAgdmFyIGFyciA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFycltpXSA9IGFbaV07XG4gICAgfVxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgYi5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBhcnJbaiArIGEubGVuZ3RoXSA9IGJbal07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbn07XG5cbnZhciBzbGljeSA9IGZ1bmN0aW9uIHNsaWN5KGFyckxpa2UsIG9mZnNldCkge1xuICAgIHZhciBhcnIgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gb2Zmc2V0IHx8IDAsIGogPSAwOyBpIDwgYXJyTGlrZS5sZW5ndGg7IGkgKz0gMSwgaiArPSAxKSB7XG4gICAgICAgIGFycltqXSA9IGFyckxpa2VbaV07XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG59O1xuXG52YXIgam9pbnkgPSBmdW5jdGlvbiAoYXJyLCBqb2luZXIpIHtcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc3RyICs9IGFycltpXTtcbiAgICAgICAgaWYgKGkgKyAxIDwgYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgc3RyICs9IGpvaW5lcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKHRoYXQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJyB8fCB0b1N0ci5hcHBseSh0YXJnZXQpICE9PSBmdW5jVHlwZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEVSUk9SX01FU1NBR0UgKyB0YXJnZXQpO1xuICAgIH1cbiAgICB2YXIgYXJncyA9IHNsaWN5KGFyZ3VtZW50cywgMSk7XG5cbiAgICB2YXIgYm91bmQ7XG4gICAgdmFyIGJpbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBib3VuZCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGNvbmNhdHR5KGFyZ3MsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0KHJlc3VsdCkgPT09IHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgdGhhdCxcbiAgICAgICAgICAgIGNvbmNhdHR5KGFyZ3MsIGFyZ3VtZW50cylcbiAgICAgICAgKTtcblxuICAgIH07XG5cbiAgICB2YXIgYm91bmRMZW5ndGggPSBtYXgoMCwgdGFyZ2V0Lmxlbmd0aCAtIGFyZ3MubGVuZ3RoKTtcbiAgICB2YXIgYm91bmRBcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib3VuZExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvdW5kQXJnc1tpXSA9ICckJyArIGk7XG4gICAgfVxuXG4gICAgYm91bmQgPSBGdW5jdGlvbignYmluZGVyJywgJ3JldHVybiBmdW5jdGlvbiAoJyArIGpvaW55KGJvdW5kQXJncywgJywnKSArICcpeyByZXR1cm4gYmluZGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKTsgfScpKGJpbmRlcik7XG5cbiAgICBpZiAodGFyZ2V0LnByb3RvdHlwZSkge1xuICAgICAgICB2YXIgRW1wdHkgPSBmdW5jdGlvbiBFbXB0eSgpIHt9O1xuICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xuICAgICAgICBib3VuZC5wcm90b3R5cGUgPSBuZXcgRW1wdHkoKTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYm91bmQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgfHwgaW1wbGVtZW50YXRpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7XG52YXIgJGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcblxuLyoqIEB0eXBlIHsobzoge30sIHA6IFByb3BlcnR5S2V5KSA9PiBwIGlzIGtleW9mIG99ICovXG5tb2R1bGUuZXhwb3J0cyA9IGJpbmQuY2FsbChjYWxsLCAkaGFzT3duKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHVuZGVmaW5lZDtcblxudmFyICRTeW50YXhFcnJvciA9IFN5bnRheEVycm9yO1xudmFyICRGdW5jdGlvbiA9IEZ1bmN0aW9uO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxudmFyIGdldEV2YWxsZWRDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIChleHByZXNzaW9uU3ludGF4KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuICRGdW5jdGlvbignXCJ1c2Ugc3RyaWN0XCI7IHJldHVybiAoJyArIGV4cHJlc3Npb25TeW50YXggKyAnKS5jb25zdHJ1Y3RvcjsnKSgpO1xuXHR9IGNhdGNoIChlKSB7fVxufTtcblxudmFyICRnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbmlmICgkZ09QRCkge1xuXHR0cnkge1xuXHRcdCRnT1BEKHt9LCAnJyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQkZ09QRCA9IG51bGw7IC8vIHRoaXMgaXMgSUUgOCwgd2hpY2ggaGFzIGEgYnJva2VuIGdPUERcblx0fVxufVxuXG52YXIgdGhyb3dUeXBlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdHRocm93IG5ldyAkVHlwZUVycm9yKCk7XG59O1xudmFyIFRocm93VHlwZUVycm9yID0gJGdPUERcblx0PyAoZnVuY3Rpb24gKCkge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zLCBuby1jYWxsZXIsIG5vLXJlc3RyaWN0ZWQtcHJvcGVydGllc1xuXHRcdFx0YXJndW1lbnRzLmNhbGxlZTsgLy8gSUUgOCBkb2VzIG5vdCB0aHJvdyBoZXJlXG5cdFx0XHRyZXR1cm4gdGhyb3dUeXBlRXJyb3I7XG5cdFx0fSBjYXRjaCAoY2FsbGVlVGhyb3dzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBJRSA4IHRocm93cyBvbiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGFyZ3VtZW50cywgJycpXG5cdFx0XHRcdHJldHVybiAkZ09QRChhcmd1bWVudHMsICdjYWxsZWUnKS5nZXQ7XG5cdFx0XHR9IGNhdGNoIChnT1BEdGhyb3dzKSB7XG5cdFx0XHRcdHJldHVybiB0aHJvd1R5cGVFcnJvcjtcblx0XHRcdH1cblx0XHR9XG5cdH0oKSlcblx0OiB0aHJvd1R5cGVFcnJvcjtcblxudmFyIGhhc1N5bWJvbHMgPSByZXF1aXJlKCdoYXMtc3ltYm9scycpKCk7XG52YXIgaGFzUHJvdG8gPSByZXF1aXJlKCdoYXMtcHJvdG8nKSgpO1xuXG52YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgKFxuXHRoYXNQcm90b1xuXHRcdD8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguX19wcm90b19fOyB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG9cblx0XHQ6IG51bGxcbik7XG5cbnZhciBuZWVkc0V2YWwgPSB7fTtcblxudmFyIFR5cGVkQXJyYXkgPSB0eXBlb2YgVWludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgfHwgIWdldFByb3RvID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8oVWludDhBcnJheSk7XG5cbnZhciBJTlRSSU5TSUNTID0ge1xuXHQnJUFnZ3JlZ2F0ZUVycm9yJSc6IHR5cGVvZiBBZ2dyZWdhdGVFcnJvciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBZ2dyZWdhdGVFcnJvcixcblx0JyVBcnJheSUnOiBBcnJheSxcblx0JyVBcnJheUJ1ZmZlciUnOiB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXJyYXlCdWZmZXIsXG5cdCclQXJyYXlJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzICYmIGdldFByb3RvID8gZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSA6IHVuZGVmaW5lZCxcblx0JyVBc3luY0Zyb21TeW5jSXRlcmF0b3JQcm90b3R5cGUlJzogdW5kZWZpbmVkLFxuXHQnJUFzeW5jRnVuY3Rpb24lJzogbmVlZHNFdmFsLFxuXHQnJUFzeW5jR2VuZXJhdG9yJSc6IG5lZWRzRXZhbCxcblx0JyVBc3luY0dlbmVyYXRvckZ1bmN0aW9uJSc6IG5lZWRzRXZhbCxcblx0JyVBc3luY0l0ZXJhdG9yUHJvdG90eXBlJSc6IG5lZWRzRXZhbCxcblx0JyVBdG9taWNzJSc6IHR5cGVvZiBBdG9taWNzID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEF0b21pY3MsXG5cdCclQmlnSW50JSc6IHR5cGVvZiBCaWdJbnQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQmlnSW50LFxuXHQnJUJpZ0ludDY0QXJyYXklJzogdHlwZW9mIEJpZ0ludDY0QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQmlnSW50NjRBcnJheSxcblx0JyVCaWdVaW50NjRBcnJheSUnOiB0eXBlb2YgQmlnVWludDY0QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQmlnVWludDY0QXJyYXksXG5cdCclQm9vbGVhbiUnOiBCb29sZWFuLFxuXHQnJURhdGFWaWV3JSc6IHR5cGVvZiBEYXRhVmlldyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBEYXRhVmlldyxcblx0JyVEYXRlJSc6IERhdGUsXG5cdCclZGVjb2RlVVJJJSc6IGRlY29kZVVSSSxcblx0JyVkZWNvZGVVUklDb21wb25lbnQlJzogZGVjb2RlVVJJQ29tcG9uZW50LFxuXHQnJWVuY29kZVVSSSUnOiBlbmNvZGVVUkksXG5cdCclZW5jb2RlVVJJQ29tcG9uZW50JSc6IGVuY29kZVVSSUNvbXBvbmVudCxcblx0JyVFcnJvciUnOiBFcnJvcixcblx0JyVldmFsJSc6IGV2YWwsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuXHQnJUV2YWxFcnJvciUnOiBFdmFsRXJyb3IsXG5cdCclRmxvYXQzMkFycmF5JSc6IHR5cGVvZiBGbG9hdDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmxvYXQzMkFycmF5LFxuXHQnJUZsb2F0NjRBcnJheSUnOiB0eXBlb2YgRmxvYXQ2NEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0NjRBcnJheSxcblx0JyVGaW5hbGl6YXRpb25SZWdpc3RyeSUnOiB0eXBlb2YgRmluYWxpemF0aW9uUmVnaXN0cnkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmluYWxpemF0aW9uUmVnaXN0cnksXG5cdCclRnVuY3Rpb24lJzogJEZ1bmN0aW9uLFxuXHQnJUdlbmVyYXRvckZ1bmN0aW9uJSc6IG5lZWRzRXZhbCxcblx0JyVJbnQ4QXJyYXklJzogdHlwZW9mIEludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXksXG5cdCclSW50MTZBcnJheSUnOiB0eXBlb2YgSW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQxNkFycmF5LFxuXHQnJUludDMyQXJyYXklJzogdHlwZW9mIEludDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50MzJBcnJheSxcblx0JyVpc0Zpbml0ZSUnOiBpc0Zpbml0ZSxcblx0JyVpc05hTiUnOiBpc05hTixcblx0JyVJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzICYmIGdldFByb3RvID8gZ2V0UHJvdG8oZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSkgOiB1bmRlZmluZWQsXG5cdCclSlNPTiUnOiB0eXBlb2YgSlNPTiA9PT0gJ29iamVjdCcgPyBKU09OIDogdW5kZWZpbmVkLFxuXHQnJU1hcCUnOiB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE1hcCxcblx0JyVNYXBJdGVyYXRvclByb3RvdHlwZSUnOiB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyB8fCAhaGFzU3ltYm9scyB8fCAhZ2V0UHJvdG8gPyB1bmRlZmluZWQgOiBnZXRQcm90byhuZXcgTWFwKClbU3ltYm9sLml0ZXJhdG9yXSgpKSxcblx0JyVNYXRoJSc6IE1hdGgsXG5cdCclTnVtYmVyJSc6IE51bWJlcixcblx0JyVPYmplY3QlJzogT2JqZWN0LFxuXHQnJXBhcnNlRmxvYXQlJzogcGFyc2VGbG9hdCxcblx0JyVwYXJzZUludCUnOiBwYXJzZUludCxcblx0JyVQcm9taXNlJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UsXG5cdCclUHJveHklJzogdHlwZW9mIFByb3h5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb3h5LFxuXHQnJVJhbmdlRXJyb3IlJzogUmFuZ2VFcnJvcixcblx0JyVSZWZlcmVuY2VFcnJvciUnOiBSZWZlcmVuY2VFcnJvcixcblx0JyVSZWZsZWN0JSc6IHR5cGVvZiBSZWZsZWN0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFJlZmxlY3QsXG5cdCclUmVnRXhwJSc6IFJlZ0V4cCxcblx0JyVTZXQlJzogdHlwZW9mIFNldCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBTZXQsXG5cdCclU2V0SXRlcmF0b3JQcm90b3R5cGUlJzogdHlwZW9mIFNldCA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc1N5bWJvbHMgfHwgIWdldFByb3RvID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8obmV3IFNldCgpW1N5bWJvbC5pdGVyYXRvcl0oKSksXG5cdCclU2hhcmVkQXJyYXlCdWZmZXIlJzogdHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNoYXJlZEFycmF5QnVmZmVyLFxuXHQnJVN0cmluZyUnOiBTdHJpbmcsXG5cdCclU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlJzogaGFzU3ltYm9scyAmJiBnZXRQcm90byA/IGdldFByb3RvKCcnW1N5bWJvbC5pdGVyYXRvcl0oKSkgOiB1bmRlZmluZWQsXG5cdCclU3ltYm9sJSc6IGhhc1N5bWJvbHMgPyBTeW1ib2wgOiB1bmRlZmluZWQsXG5cdCclU3ludGF4RXJyb3IlJzogJFN5bnRheEVycm9yLFxuXHQnJVRocm93VHlwZUVycm9yJSc6IFRocm93VHlwZUVycm9yLFxuXHQnJVR5cGVkQXJyYXklJzogVHlwZWRBcnJheSxcblx0JyVUeXBlRXJyb3IlJzogJFR5cGVFcnJvcixcblx0JyVVaW50OEFycmF5JSc6IHR5cGVvZiBVaW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQ4QXJyYXksXG5cdCclVWludDhDbGFtcGVkQXJyYXklJzogdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQ4Q2xhbXBlZEFycmF5LFxuXHQnJVVpbnQxNkFycmF5JSc6IHR5cGVvZiBVaW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MTZBcnJheSxcblx0JyVVaW50MzJBcnJheSUnOiB0eXBlb2YgVWludDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDMyQXJyYXksXG5cdCclVVJJRXJyb3IlJzogVVJJRXJyb3IsXG5cdCclV2Vha01hcCUnOiB0eXBlb2YgV2Vha01hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBXZWFrTWFwLFxuXHQnJVdlYWtSZWYlJzogdHlwZW9mIFdlYWtSZWYgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha1JlZixcblx0JyVXZWFrU2V0JSc6IHR5cGVvZiBXZWFrU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtTZXRcbn07XG5cbmlmIChnZXRQcm90bykge1xuXHR0cnkge1xuXHRcdG51bGwuZXJyb3I7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zaGFkb3dyZWFsbS9wdWxsLzM4NCNpc3N1ZWNvbW1lbnQtMTM2NDI2NDIyOVxuXHRcdHZhciBlcnJvclByb3RvID0gZ2V0UHJvdG8oZ2V0UHJvdG8oZSkpO1xuXHRcdElOVFJJTlNJQ1NbJyVFcnJvci5wcm90b3R5cGUlJ10gPSBlcnJvclByb3RvO1xuXHR9XG59XG5cbnZhciBkb0V2YWwgPSBmdW5jdGlvbiBkb0V2YWwobmFtZSkge1xuXHR2YXIgdmFsdWU7XG5cdGlmIChuYW1lID09PSAnJUFzeW5jRnVuY3Rpb24lJykge1xuXHRcdHZhbHVlID0gZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdhc3luYyBmdW5jdGlvbiAoKSB7fScpO1xuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICclR2VuZXJhdG9yRnVuY3Rpb24lJykge1xuXHRcdHZhbHVlID0gZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdmdW5jdGlvbiogKCkge30nKTtcblx0fSBlbHNlIGlmIChuYW1lID09PSAnJUFzeW5jR2VuZXJhdG9yRnVuY3Rpb24lJykge1xuXHRcdHZhbHVlID0gZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdhc3luYyBmdW5jdGlvbiogKCkge30nKTtcblx0fSBlbHNlIGlmIChuYW1lID09PSAnJUFzeW5jR2VuZXJhdG9yJScpIHtcblx0XHR2YXIgZm4gPSBkb0V2YWwoJyVBc3luY0dlbmVyYXRvckZ1bmN0aW9uJScpO1xuXHRcdGlmIChmbikge1xuXHRcdFx0dmFsdWUgPSBmbi5wcm90b3R5cGU7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICclQXN5bmNJdGVyYXRvclByb3RvdHlwZSUnKSB7XG5cdFx0dmFyIGdlbiA9IGRvRXZhbCgnJUFzeW5jR2VuZXJhdG9yJScpO1xuXHRcdGlmIChnZW4gJiYgZ2V0UHJvdG8pIHtcblx0XHRcdHZhbHVlID0gZ2V0UHJvdG8oZ2VuLnByb3RvdHlwZSk7XG5cdFx0fVxuXHR9XG5cblx0SU5UUklOU0lDU1tuYW1lXSA9IHZhbHVlO1xuXG5cdHJldHVybiB2YWx1ZTtcbn07XG5cbnZhciBMRUdBQ1lfQUxJQVNFUyA9IHtcblx0JyVBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiBbJ0FycmF5QnVmZmVyJywgJ3Byb3RvdHlwZSddLFxuXHQnJUFycmF5UHJvdG90eXBlJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclQXJyYXlQcm90b19lbnRyaWVzJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJywgJ2VudHJpZXMnXSxcblx0JyVBcnJheVByb3RvX2ZvckVhY2glJzogWydBcnJheScsICdwcm90b3R5cGUnLCAnZm9yRWFjaCddLFxuXHQnJUFycmF5UHJvdG9fa2V5cyUnOiBbJ0FycmF5JywgJ3Byb3RvdHlwZScsICdrZXlzJ10sXG5cdCclQXJyYXlQcm90b192YWx1ZXMlJzogWydBcnJheScsICdwcm90b3R5cGUnLCAndmFsdWVzJ10sXG5cdCclQXN5bmNGdW5jdGlvblByb3RvdHlwZSUnOiBbJ0FzeW5jRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclQXN5bmNHZW5lcmF0b3IlJzogWydBc3luY0dlbmVyYXRvckZ1bmN0aW9uJywgJ3Byb3RvdHlwZSddLFxuXHQnJUFzeW5jR2VuZXJhdG9yUHJvdG90eXBlJSc6IFsnQXN5bmNHZW5lcmF0b3JGdW5jdGlvbicsICdwcm90b3R5cGUnLCAncHJvdG90eXBlJ10sXG5cdCclQm9vbGVhblByb3RvdHlwZSUnOiBbJ0Jvb2xlYW4nLCAncHJvdG90eXBlJ10sXG5cdCclRGF0YVZpZXdQcm90b3R5cGUlJzogWydEYXRhVmlldycsICdwcm90b3R5cGUnXSxcblx0JyVEYXRlUHJvdG90eXBlJSc6IFsnRGF0ZScsICdwcm90b3R5cGUnXSxcblx0JyVFcnJvclByb3RvdHlwZSUnOiBbJ0Vycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJUV2YWxFcnJvclByb3RvdHlwZSUnOiBbJ0V2YWxFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVGbG9hdDMyQXJyYXlQcm90b3R5cGUlJzogWydGbG9hdDMyQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclRmxvYXQ2NEFycmF5UHJvdG90eXBlJSc6IFsnRmxvYXQ2NEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJUZ1bmN0aW9uUHJvdG90eXBlJSc6IFsnRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclR2VuZXJhdG9yJSc6IFsnR2VuZXJhdG9yRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclR2VuZXJhdG9yUHJvdG90eXBlJSc6IFsnR2VuZXJhdG9yRnVuY3Rpb24nLCAncHJvdG90eXBlJywgJ3Byb3RvdHlwZSddLFxuXHQnJUludDhBcnJheVByb3RvdHlwZSUnOiBbJ0ludDhBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVJbnQxNkFycmF5UHJvdG90eXBlJSc6IFsnSW50MTZBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVJbnQzMkFycmF5UHJvdG90eXBlJSc6IFsnSW50MzJBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVKU09OUGFyc2UlJzogWydKU09OJywgJ3BhcnNlJ10sXG5cdCclSlNPTlN0cmluZ2lmeSUnOiBbJ0pTT04nLCAnc3RyaW5naWZ5J10sXG5cdCclTWFwUHJvdG90eXBlJSc6IFsnTWFwJywgJ3Byb3RvdHlwZSddLFxuXHQnJU51bWJlclByb3RvdHlwZSUnOiBbJ051bWJlcicsICdwcm90b3R5cGUnXSxcblx0JyVPYmplY3RQcm90b3R5cGUlJzogWydPYmplY3QnLCAncHJvdG90eXBlJ10sXG5cdCclT2JqUHJvdG9fdG9TdHJpbmclJzogWydPYmplY3QnLCAncHJvdG90eXBlJywgJ3RvU3RyaW5nJ10sXG5cdCclT2JqUHJvdG9fdmFsdWVPZiUnOiBbJ09iamVjdCcsICdwcm90b3R5cGUnLCAndmFsdWVPZiddLFxuXHQnJVByb21pc2VQcm90b3R5cGUlJzogWydQcm9taXNlJywgJ3Byb3RvdHlwZSddLFxuXHQnJVByb21pc2VQcm90b190aGVuJSc6IFsnUHJvbWlzZScsICdwcm90b3R5cGUnLCAndGhlbiddLFxuXHQnJVByb21pc2VfYWxsJSc6IFsnUHJvbWlzZScsICdhbGwnXSxcblx0JyVQcm9taXNlX3JlamVjdCUnOiBbJ1Byb21pc2UnLCAncmVqZWN0J10sXG5cdCclUHJvbWlzZV9yZXNvbHZlJSc6IFsnUHJvbWlzZScsICdyZXNvbHZlJ10sXG5cdCclUmFuZ2VFcnJvclByb3RvdHlwZSUnOiBbJ1JhbmdlRXJyb3InLCAncHJvdG90eXBlJ10sXG5cdCclUmVmZXJlbmNlRXJyb3JQcm90b3R5cGUlJzogWydSZWZlcmVuY2VFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVSZWdFeHBQcm90b3R5cGUlJzogWydSZWdFeHAnLCAncHJvdG90eXBlJ10sXG5cdCclU2V0UHJvdG90eXBlJSc6IFsnU2V0JywgJ3Byb3RvdHlwZSddLFxuXHQnJVNoYXJlZEFycmF5QnVmZmVyUHJvdG90eXBlJSc6IFsnU2hhcmVkQXJyYXlCdWZmZXInLCAncHJvdG90eXBlJ10sXG5cdCclU3RyaW5nUHJvdG90eXBlJSc6IFsnU3RyaW5nJywgJ3Byb3RvdHlwZSddLFxuXHQnJVN5bWJvbFByb3RvdHlwZSUnOiBbJ1N5bWJvbCcsICdwcm90b3R5cGUnXSxcblx0JyVTeW50YXhFcnJvclByb3RvdHlwZSUnOiBbJ1N5bnRheEVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVR5cGVkQXJyYXlQcm90b3R5cGUlJzogWydUeXBlZEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVR5cGVFcnJvclByb3RvdHlwZSUnOiBbJ1R5cGVFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVVaW50OEFycmF5UHJvdG90eXBlJSc6IFsnVWludDhBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVVaW50OENsYW1wZWRBcnJheVByb3RvdHlwZSUnOiBbJ1VpbnQ4Q2xhbXBlZEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVVpbnQxNkFycmF5UHJvdG90eXBlJSc6IFsnVWludDE2QXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclVWludDMyQXJyYXlQcm90b3R5cGUlJzogWydVaW50MzJBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVVUklFcnJvclByb3RvdHlwZSUnOiBbJ1VSSUVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVdlYWtNYXBQcm90b3R5cGUlJzogWydXZWFrTWFwJywgJ3Byb3RvdHlwZSddLFxuXHQnJVdlYWtTZXRQcm90b3R5cGUlJzogWydXZWFrU2V0JywgJ3Byb3RvdHlwZSddXG59O1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCdoYXNvd24nKTtcbnZhciAkY29uY2F0ID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIEFycmF5LnByb3RvdHlwZS5jb25jYXQpO1xudmFyICRzcGxpY2VBcHBseSA9IGJpbmQuY2FsbChGdW5jdGlvbi5hcHBseSwgQXJyYXkucHJvdG90eXBlLnNwbGljZSk7XG52YXIgJHJlcGxhY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcbnZhciAkc3RyU2xpY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgU3RyaW5nLnByb3RvdHlwZS5zbGljZSk7XG52YXIgJGV4ZWMgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgUmVnRXhwLnByb3RvdHlwZS5leGVjKTtcblxuLyogYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvNC4xNy4xNS9kaXN0L2xvZGFzaC5qcyNMNjczNS1MNjc0NCAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14lLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCUkKSkvZztcbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZzsgLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgc3RyaW5nVG9QYXRoID0gZnVuY3Rpb24gc3RyaW5nVG9QYXRoKHN0cmluZykge1xuXHR2YXIgZmlyc3QgPSAkc3RyU2xpY2Uoc3RyaW5nLCAwLCAxKTtcblx0dmFyIGxhc3QgPSAkc3RyU2xpY2Uoc3RyaW5nLCAtMSk7XG5cdGlmIChmaXJzdCA9PT0gJyUnICYmIGxhc3QgIT09ICclJykge1xuXHRcdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ2ludmFsaWQgaW50cmluc2ljIHN5bnRheCwgZXhwZWN0ZWQgY2xvc2luZyBgJWAnKTtcblx0fSBlbHNlIGlmIChsYXN0ID09PSAnJScgJiYgZmlyc3QgIT09ICclJykge1xuXHRcdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ2ludmFsaWQgaW50cmluc2ljIHN5bnRheCwgZXhwZWN0ZWQgb3BlbmluZyBgJWAnKTtcblx0fVxuXHR2YXIgcmVzdWx0ID0gW107XG5cdCRyZXBsYWNlKHN0cmluZywgcmVQcm9wTmFtZSwgZnVuY3Rpb24gKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdWJTdHJpbmcpIHtcblx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBxdW90ZSA/ICRyZXBsYWNlKHN1YlN0cmluZywgcmVFc2NhcGVDaGFyLCAnJDEnKSA6IG51bWJlciB8fCBtYXRjaDtcblx0fSk7XG5cdHJldHVybiByZXN1bHQ7XG59O1xuLyogZW5kIGFkYXB0YXRpb24gKi9cblxudmFyIGdldEJhc2VJbnRyaW5zaWMgPSBmdW5jdGlvbiBnZXRCYXNlSW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHR2YXIgaW50cmluc2ljTmFtZSA9IG5hbWU7XG5cdHZhciBhbGlhcztcblx0aWYgKGhhc093bihMRUdBQ1lfQUxJQVNFUywgaW50cmluc2ljTmFtZSkpIHtcblx0XHRhbGlhcyA9IExFR0FDWV9BTElBU0VTW2ludHJpbnNpY05hbWVdO1xuXHRcdGludHJpbnNpY05hbWUgPSAnJScgKyBhbGlhc1swXSArICclJztcblx0fVxuXG5cdGlmIChoYXNPd24oSU5UUklOU0lDUywgaW50cmluc2ljTmFtZSkpIHtcblx0XHR2YXIgdmFsdWUgPSBJTlRSSU5TSUNTW2ludHJpbnNpY05hbWVdO1xuXHRcdGlmICh2YWx1ZSA9PT0gbmVlZHNFdmFsKSB7XG5cdFx0XHR2YWx1ZSA9IGRvRXZhbChpbnRyaW5zaWNOYW1lKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgJiYgIWFsbG93TWlzc2luZykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2ludHJpbnNpYyAnICsgbmFtZSArICcgZXhpc3RzLCBidXQgaXMgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGZpbGUgYW4gaXNzdWUhJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGFsaWFzOiBhbGlhcyxcblx0XHRcdG5hbWU6IGludHJpbnNpY05hbWUsXG5cdFx0XHR2YWx1ZTogdmFsdWVcblx0XHR9O1xuXHR9XG5cblx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignaW50cmluc2ljICcgKyBuYW1lICsgJyBkb2VzIG5vdCBleGlzdCEnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gR2V0SW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHRpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnIHx8IG5hbWUubGVuZ3RoID09PSAwKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2ludHJpbnNpYyBuYW1lIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nJyk7XG5cdH1cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhbGxvd01pc3NpbmcgIT09ICdib29sZWFuJykge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdcImFsbG93TWlzc2luZ1wiIGFyZ3VtZW50IG11c3QgYmUgYSBib29sZWFuJyk7XG5cdH1cblxuXHRpZiAoJGV4ZWMoL14lP1teJV0qJT8kLywgbmFtZSkgPT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdgJWAgbWF5IG5vdCBiZSBwcmVzZW50IGFueXdoZXJlIGJ1dCBhdCB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgdGhlIGludHJpbnNpYyBuYW1lJyk7XG5cdH1cblx0dmFyIHBhcnRzID0gc3RyaW5nVG9QYXRoKG5hbWUpO1xuXHR2YXIgaW50cmluc2ljQmFzZU5hbWUgPSBwYXJ0cy5sZW5ndGggPiAwID8gcGFydHNbMF0gOiAnJztcblxuXHR2YXIgaW50cmluc2ljID0gZ2V0QmFzZUludHJpbnNpYygnJScgKyBpbnRyaW5zaWNCYXNlTmFtZSArICclJywgYWxsb3dNaXNzaW5nKTtcblx0dmFyIGludHJpbnNpY1JlYWxOYW1lID0gaW50cmluc2ljLm5hbWU7XG5cdHZhciB2YWx1ZSA9IGludHJpbnNpYy52YWx1ZTtcblx0dmFyIHNraXBGdXJ0aGVyQ2FjaGluZyA9IGZhbHNlO1xuXG5cdHZhciBhbGlhcyA9IGludHJpbnNpYy5hbGlhcztcblx0aWYgKGFsaWFzKSB7XG5cdFx0aW50cmluc2ljQmFzZU5hbWUgPSBhbGlhc1swXTtcblx0XHQkc3BsaWNlQXBwbHkocGFydHMsICRjb25jYXQoWzAsIDFdLCBhbGlhcykpO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDEsIGlzT3duID0gdHJ1ZTsgaSA8IHBhcnRzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIHBhcnQgPSBwYXJ0c1tpXTtcblx0XHR2YXIgZmlyc3QgPSAkc3RyU2xpY2UocGFydCwgMCwgMSk7XG5cdFx0dmFyIGxhc3QgPSAkc3RyU2xpY2UocGFydCwgLTEpO1xuXHRcdGlmIChcblx0XHRcdChcblx0XHRcdFx0KGZpcnN0ID09PSAnXCInIHx8IGZpcnN0ID09PSBcIidcIiB8fCBmaXJzdCA9PT0gJ2AnKVxuXHRcdFx0XHR8fCAobGFzdCA9PT0gJ1wiJyB8fCBsYXN0ID09PSBcIidcIiB8fCBsYXN0ID09PSAnYCcpXG5cdFx0XHQpXG5cdFx0XHQmJiBmaXJzdCAhPT0gbGFzdFxuXHRcdCkge1xuXHRcdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcigncHJvcGVydHkgbmFtZXMgd2l0aCBxdW90ZXMgbXVzdCBoYXZlIG1hdGNoaW5nIHF1b3RlcycpO1xuXHRcdH1cblx0XHRpZiAocGFydCA9PT0gJ2NvbnN0cnVjdG9yJyB8fCAhaXNPd24pIHtcblx0XHRcdHNraXBGdXJ0aGVyQ2FjaGluZyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aW50cmluc2ljQmFzZU5hbWUgKz0gJy4nICsgcGFydDtcblx0XHRpbnRyaW5zaWNSZWFsTmFtZSA9ICclJyArIGludHJpbnNpY0Jhc2VOYW1lICsgJyUnO1xuXG5cdFx0aWYgKGhhc093bihJTlRSSU5TSUNTLCBpbnRyaW5zaWNSZWFsTmFtZSkpIHtcblx0XHRcdHZhbHVlID0gSU5UUklOU0lDU1tpbnRyaW5zaWNSZWFsTmFtZV07XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRpZiAoIShwYXJ0IGluIHZhbHVlKSkge1xuXHRcdFx0XHRpZiAoIWFsbG93TWlzc2luZykge1xuXHRcdFx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdiYXNlIGludHJpbnNpYyBmb3IgJyArIG5hbWUgKyAnIGV4aXN0cywgYnV0IHRoZSBwcm9wZXJ0eSBpcyBub3QgYXZhaWxhYmxlLicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2b2lkIHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHRcdGlmICgkZ09QRCAmJiAoaSArIDEpID49IHBhcnRzLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgZGVzYyA9ICRnT1BEKHZhbHVlLCBwYXJ0KTtcblx0XHRcdFx0aXNPd24gPSAhIWRlc2M7XG5cblx0XHRcdFx0Ly8gQnkgY29udmVudGlvbiwgd2hlbiBhIGRhdGEgcHJvcGVydHkgaXMgY29udmVydGVkIHRvIGFuIGFjY2Vzc29yXG5cdFx0XHRcdC8vIHByb3BlcnR5IHRvIGVtdWxhdGUgYSBkYXRhIHByb3BlcnR5IHRoYXQgZG9lcyBub3Qgc3VmZmVyIGZyb21cblx0XHRcdFx0Ly8gdGhlIG92ZXJyaWRlIG1pc3Rha2UsIHRoYXQgYWNjZXNzb3IncyBnZXR0ZXIgaXMgbWFya2VkIHdpdGhcblx0XHRcdFx0Ly8gYW4gYG9yaWdpbmFsVmFsdWVgIHByb3BlcnR5LiBIZXJlLCB3aGVuIHdlIGRldGVjdCB0aGlzLCB3ZVxuXHRcdFx0XHQvLyB1cGhvbGQgdGhlIGlsbHVzaW9uIGJ5IHByZXRlbmRpbmcgdG8gc2VlIHRoYXQgb3JpZ2luYWwgZGF0YVxuXHRcdFx0XHQvLyBwcm9wZXJ0eSwgaS5lLiwgcmV0dXJuaW5nIHRoZSB2YWx1ZSByYXRoZXIgdGhhbiB0aGUgZ2V0dGVyXG5cdFx0XHRcdC8vIGl0c2VsZi5cblx0XHRcdFx0aWYgKGlzT3duICYmICdnZXQnIGluIGRlc2MgJiYgISgnb3JpZ2luYWxWYWx1ZScgaW4gZGVzYy5nZXQpKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBkZXNjLmdldDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlW3BhcnRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpc093biA9IGhhc093bih2YWx1ZSwgcGFydCk7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWVbcGFydF07XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc093biAmJiAhc2tpcEZ1cnRoZXJDYWNoaW5nKSB7XG5cdFx0XHRcdElOVFJJTlNJQ1NbaW50cmluc2ljUmVhbE5hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QuZGVmaW5lUHJvcGVydHklJywgdHJ1ZSk7XG5cbnZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3JzID0gZnVuY3Rpb24gaGFzUHJvcGVydHlEZXNjcmlwdG9ycygpIHtcblx0aWYgKCRkZWZpbmVQcm9wZXJ0eSkge1xuXHRcdHRyeSB7XG5cdFx0XHQkZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyB2YWx1ZTogMSB9KTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIElFIDggaGFzIGEgYnJva2VuIGRlZmluZVByb3BlcnR5XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmhhc1Byb3BlcnR5RGVzY3JpcHRvcnMuaGFzQXJyYXlMZW5ndGhEZWZpbmVCdWcgPSBmdW5jdGlvbiBoYXNBcnJheUxlbmd0aERlZmluZUJ1ZygpIHtcblx0Ly8gbm9kZSB2MC42IGhhcyBhIGJ1ZyB3aGVyZSBhcnJheSBsZW5ndGhzIGNhbiBiZSBTZXQgYnV0IG5vdCBEZWZpbmVkXG5cdGlmICghaGFzUHJvcGVydHlEZXNjcmlwdG9ycygpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0dHJ5IHtcblx0XHRyZXR1cm4gJGRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB2YWx1ZTogMSB9KS5sZW5ndGggIT09IDE7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBJbiBGaXJlZm94IDQtMjIsIGRlZmluaW5nIGxlbmd0aCBvbiBhbiBhcnJheSB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvcnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG5cbnZhciAkZ09QRCA9IEdldEludHJpbnNpYygnJU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IlJywgdHJ1ZSk7XG5cbmlmICgkZ09QRCkge1xuXHR0cnkge1xuXHRcdCRnT1BEKFtdLCAnbGVuZ3RoJyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBJRSA4IGhhcyBhIGJyb2tlbiBnT1BEXG5cdFx0JGdPUEQgPSBudWxsO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gJGdPUEQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3JzID0gcmVxdWlyZSgnaGFzLXByb3BlcnR5LWRlc2NyaXB0b3JzJykoKTtcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJ2dldC1pbnRyaW5zaWMnKTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvcnMgJiYgR2V0SW50cmluc2ljKCclT2JqZWN0LmRlZmluZVByb3BlcnR5JScsIHRydWUpO1xuaWYgKCRkZWZpbmVQcm9wZXJ0eSkge1xuXHR0cnkge1xuXHRcdCRkZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IHZhbHVlOiAxIH0pO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Ly8gSUUgOCBoYXMgYSBicm9rZW4gZGVmaW5lUHJvcGVydHlcblx0XHQkZGVmaW5lUHJvcGVydHkgPSBmYWxzZTtcblx0fVxufVxuXG52YXIgJFN5bnRheEVycm9yID0gR2V0SW50cmluc2ljKCclU3ludGF4RXJyb3IlJyk7XG52YXIgJFR5cGVFcnJvciA9IEdldEludHJpbnNpYygnJVR5cGVFcnJvciUnKTtcblxudmFyIGdvcGQgPSByZXF1aXJlKCdnb3BkJyk7XG5cbi8qKiBAdHlwZSB7KG9iajogUmVjb3JkPFByb3BlcnR5S2V5LCB1bmtub3duPiwgcHJvcGVydHk6IFByb3BlcnR5S2V5LCB2YWx1ZTogdW5rbm93biwgbm9uRW51bWVyYWJsZT86IGJvb2xlYW4gfCBudWxsLCBub25Xcml0YWJsZT86IGJvb2xlYW4gfCBudWxsLCBub25Db25maWd1cmFibGU/OiBib29sZWFuIHwgbnVsbCwgbG9vc2U/OiBib29sZWFuKSA9PiB2b2lkfSAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVEYXRhUHJvcGVydHkoXG5cdG9iaixcblx0cHJvcGVydHksXG5cdHZhbHVlXG4pIHtcblx0aWYgKCFvYmogfHwgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmogIT09ICdmdW5jdGlvbicpKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2BvYmpgIG11c3QgYmUgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb25gJyk7XG5cdH1cblx0aWYgKHR5cGVvZiBwcm9wZXJ0eSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BlcnR5ICE9PSAnc3ltYm9sJykge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdgcHJvcGVydHlgIG11c3QgYmUgYSBzdHJpbmcgb3IgYSBzeW1ib2xgJyk7XG5cdH1cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIHR5cGVvZiBhcmd1bWVudHNbM10gIT09ICdib29sZWFuJyAmJiBhcmd1bWVudHNbM10gIT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYG5vbkVudW1lcmFibGVgLCBpZiBwcm92aWRlZCwgbXVzdCBiZSBhIGJvb2xlYW4gb3IgbnVsbCcpO1xuXHR9XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gNCAmJiB0eXBlb2YgYXJndW1lbnRzWzRdICE9PSAnYm9vbGVhbicgJiYgYXJndW1lbnRzWzRdICE9PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2Bub25Xcml0YWJsZWAsIGlmIHByb3ZpZGVkLCBtdXN0IGJlIGEgYm9vbGVhbiBvciBudWxsJyk7XG5cdH1cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIHR5cGVvZiBhcmd1bWVudHNbNV0gIT09ICdib29sZWFuJyAmJiBhcmd1bWVudHNbNV0gIT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYG5vbkNvbmZpZ3VyYWJsZWAsIGlmIHByb3ZpZGVkLCBtdXN0IGJlIGEgYm9vbGVhbiBvciBudWxsJyk7XG5cdH1cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiA2ICYmIHR5cGVvZiBhcmd1bWVudHNbNl0gIT09ICdib29sZWFuJykge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdgbG9vc2VgLCBpZiBwcm92aWRlZCwgbXVzdCBiZSBhIGJvb2xlYW4nKTtcblx0fVxuXG5cdHZhciBub25FbnVtZXJhYmxlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgPyBhcmd1bWVudHNbM10gOiBudWxsO1xuXHR2YXIgbm9uV3JpdGFibGUgPSBhcmd1bWVudHMubGVuZ3RoID4gNCA/IGFyZ3VtZW50c1s0XSA6IG51bGw7XG5cdHZhciBub25Db25maWd1cmFibGUgPSBhcmd1bWVudHMubGVuZ3RoID4gNSA/IGFyZ3VtZW50c1s1XSA6IG51bGw7XG5cdHZhciBsb29zZSA9IGFyZ3VtZW50cy5sZW5ndGggPiA2ID8gYXJndW1lbnRzWzZdIDogZmFsc2U7XG5cblx0LyogQHR5cGUge2ZhbHNlIHwgVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8dW5rbm93bj59ICovXG5cdHZhciBkZXNjID0gISFnb3BkICYmIGdvcGQob2JqLCBwcm9wZXJ0eSk7XG5cblx0aWYgKCRkZWZpbmVQcm9wZXJ0eSkge1xuXHRcdCRkZWZpbmVQcm9wZXJ0eShvYmosIHByb3BlcnR5LCB7XG5cdFx0XHRjb25maWd1cmFibGU6IG5vbkNvbmZpZ3VyYWJsZSA9PT0gbnVsbCAmJiBkZXNjID8gZGVzYy5jb25maWd1cmFibGUgOiAhbm9uQ29uZmlndXJhYmxlLFxuXHRcdFx0ZW51bWVyYWJsZTogbm9uRW51bWVyYWJsZSA9PT0gbnVsbCAmJiBkZXNjID8gZGVzYy5lbnVtZXJhYmxlIDogIW5vbkVudW1lcmFibGUsXG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHR3cml0YWJsZTogbm9uV3JpdGFibGUgPT09IG51bGwgJiYgZGVzYyA/IGRlc2Mud3JpdGFibGUgOiAhbm9uV3JpdGFibGVcblx0XHR9KTtcblx0fSBlbHNlIGlmIChsb29zZSB8fCAoIW5vbkVudW1lcmFibGUgJiYgIW5vbldyaXRhYmxlICYmICFub25Db25maWd1cmFibGUpKSB7XG5cdFx0Ly8gbXVzdCBmYWxsIGJhY2sgdG8gW1tTZXRdXSwgYW5kIHdhcyBub3QgZXhwbGljaXRseSBhc2tlZCB0byBtYWtlIG5vbi1lbnVtZXJhYmxlLCBub24td3JpdGFibGUsIG9yIG5vbi1jb25maWd1cmFibGVcblx0XHRvYmpbcHJvcGVydHldID0gdmFsdWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdUaGlzIGVudmlyb25tZW50IGRvZXMgbm90IHN1cHBvcnQgZGVmaW5pbmcgYSBwcm9wZXJ0eSBhcyBub24tY29uZmlndXJhYmxlLCBub24td3JpdGFibGUsIG9yIG5vbi1lbnVtZXJhYmxlLicpO1xuXHR9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnZ2V0LWludHJpbnNpYycpO1xudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1kYXRhLXByb3BlcnR5Jyk7XG52YXIgaGFzRGVzY3JpcHRvcnMgPSByZXF1aXJlKCdoYXMtcHJvcGVydHktZGVzY3JpcHRvcnMnKSgpO1xudmFyIGdPUEQgPSByZXF1aXJlKCdnb3BkJyk7XG5cbnZhciAkVHlwZUVycm9yID0gR2V0SW50cmluc2ljKCclVHlwZUVycm9yJScpO1xudmFyICRmbG9vciA9IEdldEludHJpbnNpYygnJU1hdGguZmxvb3IlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0RnVuY3Rpb25MZW5ndGgoZm4sIGxlbmd0aCkge1xuXHRpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2BmbmAgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0fVxuXHRpZiAodHlwZW9mIGxlbmd0aCAhPT0gJ251bWJlcicgfHwgbGVuZ3RoIDwgMCB8fCBsZW5ndGggPiAweEZGRkZGRkZGIHx8ICRmbG9vcihsZW5ndGgpICE9PSBsZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYGxlbmd0aGAgbXVzdCBiZSBhIHBvc2l0aXZlIDMyLWJpdCBpbnRlZ2VyJyk7XG5cdH1cblxuXHR2YXIgbG9vc2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiAhIWFyZ3VtZW50c1syXTtcblxuXHR2YXIgZnVuY3Rpb25MZW5ndGhJc0NvbmZpZ3VyYWJsZSA9IHRydWU7XG5cdHZhciBmdW5jdGlvbkxlbmd0aElzV3JpdGFibGUgPSB0cnVlO1xuXHRpZiAoJ2xlbmd0aCcgaW4gZm4gJiYgZ09QRCkge1xuXHRcdHZhciBkZXNjID0gZ09QRChmbiwgJ2xlbmd0aCcpO1xuXHRcdGlmIChkZXNjICYmICFkZXNjLmNvbmZpZ3VyYWJsZSkge1xuXHRcdFx0ZnVuY3Rpb25MZW5ndGhJc0NvbmZpZ3VyYWJsZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoZGVzYyAmJiAhZGVzYy53cml0YWJsZSkge1xuXHRcdFx0ZnVuY3Rpb25MZW5ndGhJc1dyaXRhYmxlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0aWYgKGZ1bmN0aW9uTGVuZ3RoSXNDb25maWd1cmFibGUgfHwgZnVuY3Rpb25MZW5ndGhJc1dyaXRhYmxlIHx8ICFsb29zZSkge1xuXHRcdGlmIChoYXNEZXNjcmlwdG9ycykge1xuXHRcdFx0ZGVmaW5lKGZuLCAnbGVuZ3RoJywgbGVuZ3RoLCB0cnVlLCB0cnVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGVmaW5lKGZuLCAnbGVuZ3RoJywgbGVuZ3RoKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZuO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnZ2V0LWludHJpbnNpYycpO1xudmFyIHNldEZ1bmN0aW9uTGVuZ3RoID0gcmVxdWlyZSgnc2V0LWZ1bmN0aW9uLWxlbmd0aCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IEdldEludHJpbnNpYygnJVR5cGVFcnJvciUnKTtcbnZhciAkYXBwbHkgPSBHZXRJbnRyaW5zaWMoJyVGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHklJyk7XG52YXIgJGNhbGwgPSBHZXRJbnRyaW5zaWMoJyVGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCUnKTtcbnZhciAkcmVmbGVjdEFwcGx5ID0gR2V0SW50cmluc2ljKCclUmVmbGVjdC5hcHBseSUnLCB0cnVlKSB8fCBiaW5kLmNhbGwoJGNhbGwsICRhcHBseSk7XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QuZGVmaW5lUHJvcGVydHklJywgdHJ1ZSk7XG52YXIgJG1heCA9IEdldEludHJpbnNpYygnJU1hdGgubWF4JScpO1xuXG5pZiAoJGRlZmluZVByb3BlcnR5KSB7XG5cdHRyeSB7XG5cdFx0JGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgdmFsdWU6IDEgfSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBJRSA4IGhhcyBhIGJyb2tlbiBkZWZpbmVQcm9wZXJ0eVxuXHRcdCRkZWZpbmVQcm9wZXJ0eSA9IG51bGw7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjYWxsQmluZChvcmlnaW5hbEZ1bmN0aW9uKSB7XG5cdGlmICh0eXBlb2Ygb3JpZ2luYWxGdW5jdGlvbiAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdhIGZ1bmN0aW9uIGlzIHJlcXVpcmVkJyk7XG5cdH1cblx0dmFyIGZ1bmMgPSAkcmVmbGVjdEFwcGx5KGJpbmQsICRjYWxsLCBhcmd1bWVudHMpO1xuXHRyZXR1cm4gc2V0RnVuY3Rpb25MZW5ndGgoXG5cdFx0ZnVuYyxcblx0XHQxICsgJG1heCgwLCBvcmlnaW5hbEZ1bmN0aW9uLmxlbmd0aCAtIChhcmd1bWVudHMubGVuZ3RoIC0gMSkpLFxuXHRcdHRydWVcblx0KTtcbn07XG5cbnZhciBhcHBseUJpbmQgPSBmdW5jdGlvbiBhcHBseUJpbmQoKSB7XG5cdHJldHVybiAkcmVmbGVjdEFwcGx5KGJpbmQsICRhcHBseSwgYXJndW1lbnRzKTtcbn07XG5cbmlmICgkZGVmaW5lUHJvcGVydHkpIHtcblx0JGRlZmluZVByb3BlcnR5KG1vZHVsZS5leHBvcnRzLCAnYXBwbHknLCB7IHZhbHVlOiBhcHBseUJpbmQgfSk7XG59IGVsc2Uge1xuXHRtb2R1bGUuZXhwb3J0cy5hcHBseSA9IGFwcGx5QmluZDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJ2dldC1pbnRyaW5zaWMnKTtcblxudmFyIGNhbGxCaW5kID0gcmVxdWlyZSgnLi8nKTtcblxudmFyICRpbmRleE9mID0gY2FsbEJpbmQoR2V0SW50cmluc2ljKCdTdHJpbmcucHJvdG90eXBlLmluZGV4T2YnKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2FsbEJvdW5kSW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHR2YXIgaW50cmluc2ljID0gR2V0SW50cmluc2ljKG5hbWUsICEhYWxsb3dNaXNzaW5nKTtcblx0aWYgKHR5cGVvZiBpbnRyaW5zaWMgPT09ICdmdW5jdGlvbicgJiYgJGluZGV4T2YobmFtZSwgJy5wcm90b3R5cGUuJykgPiAtMSkge1xuXHRcdHJldHVybiBjYWxsQmluZChpbnRyaW5zaWMpO1xuXHR9XG5cdHJldHVybiBpbnRyaW5zaWM7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge30iLCJ2YXIgaGFzTWFwID0gdHlwZW9mIE1hcCA9PT0gJ2Z1bmN0aW9uJyAmJiBNYXAucHJvdG90eXBlO1xudmFyIG1hcFNpemVEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiBoYXNNYXAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE1hcC5wcm90b3R5cGUsICdzaXplJykgOiBudWxsO1xudmFyIG1hcFNpemUgPSBoYXNNYXAgJiYgbWFwU2l6ZURlc2NyaXB0b3IgJiYgdHlwZW9mIG1hcFNpemVEZXNjcmlwdG9yLmdldCA9PT0gJ2Z1bmN0aW9uJyA/IG1hcFNpemVEZXNjcmlwdG9yLmdldCA6IG51bGw7XG52YXIgbWFwRm9yRWFjaCA9IGhhc01hcCAmJiBNYXAucHJvdG90eXBlLmZvckVhY2g7XG52YXIgaGFzU2V0ID0gdHlwZW9mIFNldCA9PT0gJ2Z1bmN0aW9uJyAmJiBTZXQucHJvdG90eXBlO1xudmFyIHNldFNpemVEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiBoYXNTZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFNldC5wcm90b3R5cGUsICdzaXplJykgOiBudWxsO1xudmFyIHNldFNpemUgPSBoYXNTZXQgJiYgc2V0U2l6ZURlc2NyaXB0b3IgJiYgdHlwZW9mIHNldFNpemVEZXNjcmlwdG9yLmdldCA9PT0gJ2Z1bmN0aW9uJyA/IHNldFNpemVEZXNjcmlwdG9yLmdldCA6IG51bGw7XG52YXIgc2V0Rm9yRWFjaCA9IGhhc1NldCAmJiBTZXQucHJvdG90eXBlLmZvckVhY2g7XG52YXIgaGFzV2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nICYmIFdlYWtNYXAucHJvdG90eXBlO1xudmFyIHdlYWtNYXBIYXMgPSBoYXNXZWFrTWFwID8gV2Vha01hcC5wcm90b3R5cGUuaGFzIDogbnVsbDtcbnZhciBoYXNXZWFrU2V0ID0gdHlwZW9mIFdlYWtTZXQgPT09ICdmdW5jdGlvbicgJiYgV2Vha1NldC5wcm90b3R5cGU7XG52YXIgd2Vha1NldEhhcyA9IGhhc1dlYWtTZXQgPyBXZWFrU2V0LnByb3RvdHlwZS5oYXMgOiBudWxsO1xudmFyIGhhc1dlYWtSZWYgPSB0eXBlb2YgV2Vha1JlZiA9PT0gJ2Z1bmN0aW9uJyAmJiBXZWFrUmVmLnByb3RvdHlwZTtcbnZhciB3ZWFrUmVmRGVyZWYgPSBoYXNXZWFrUmVmID8gV2Vha1JlZi5wcm90b3R5cGUuZGVyZWYgOiBudWxsO1xudmFyIGJvb2xlYW5WYWx1ZU9mID0gQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZjtcbnZhciBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcbnZhciAkbWF0Y2ggPSBTdHJpbmcucHJvdG90eXBlLm1hdGNoO1xudmFyICRzbGljZSA9IFN0cmluZy5wcm90b3R5cGUuc2xpY2U7XG52YXIgJHJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG52YXIgJHRvVXBwZXJDYXNlID0gU3RyaW5nLnByb3RvdHlwZS50b1VwcGVyQ2FzZTtcbnZhciAkdG9Mb3dlckNhc2UgPSBTdHJpbmcucHJvdG90eXBlLnRvTG93ZXJDYXNlO1xudmFyICR0ZXN0ID0gUmVnRXhwLnByb3RvdHlwZS50ZXN0O1xudmFyICRjb25jYXQgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0O1xudmFyICRqb2luID0gQXJyYXkucHJvdG90eXBlLmpvaW47XG52YXIgJGFyclNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyICRmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgYmlnSW50VmFsdWVPZiA9IHR5cGVvZiBCaWdJbnQgPT09ICdmdW5jdGlvbicgPyBCaWdJbnQucHJvdG90eXBlLnZhbHVlT2YgOiBudWxsO1xudmFyIGdPUFMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIHN5bVRvU3RyaW5nID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAnc3ltYm9sJyA/IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcgOiBudWxsO1xudmFyIGhhc1NoYW1tZWRTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAnb2JqZWN0Jztcbi8vIGllLCBgaGFzLXRvc3RyaW5ndGFnL3NoYW1zXG52YXIgdG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZyAmJiAodHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gaGFzU2hhbW1lZFN5bWJvbHMgPyAnb2JqZWN0JyA6ICdzeW1ib2wnKVxuICAgID8gU3ltYm9sLnRvU3RyaW5nVGFnXG4gICAgOiBudWxsO1xudmFyIGlzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbnZhciBnUE8gPSAodHlwZW9mIFJlZmxlY3QgPT09ICdmdW5jdGlvbicgPyBSZWZsZWN0LmdldFByb3RvdHlwZU9mIDogT2JqZWN0LmdldFByb3RvdHlwZU9mKSB8fCAoXG4gICAgW10uX19wcm90b19fID09PSBBcnJheS5wcm90b3R5cGUgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b1xuICAgICAgICA/IGZ1bmN0aW9uIChPKSB7XG4gICAgICAgICAgICByZXR1cm4gTy5fX3Byb3RvX187IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG9cbiAgICAgICAgfVxuICAgICAgICA6IG51bGxcbik7XG5cbmZ1bmN0aW9uIGFkZE51bWVyaWNTZXBhcmF0b3IobnVtLCBzdHIpIHtcbiAgICBpZiAoXG4gICAgICAgIG51bSA9PT0gSW5maW5pdHlcbiAgICAgICAgfHwgbnVtID09PSAtSW5maW5pdHlcbiAgICAgICAgfHwgbnVtICE9PSBudW1cbiAgICAgICAgfHwgKG51bSAmJiBudW0gPiAtMTAwMCAmJiBudW0gPCAxMDAwKVxuICAgICAgICB8fCAkdGVzdC5jYWxsKC9lLywgc3RyKVxuICAgICkge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICB2YXIgc2VwUmVnZXggPSAvWzAtOV0oPz0oPzpbMC05XXszfSkrKD8hWzAtOV0pKS9nO1xuICAgIGlmICh0eXBlb2YgbnVtID09PSAnbnVtYmVyJykge1xuICAgICAgICB2YXIgaW50ID0gbnVtIDwgMCA/IC0kZmxvb3IoLW51bSkgOiAkZmxvb3IobnVtKTsgLy8gdHJ1bmMobnVtKVxuICAgICAgICBpZiAoaW50ICE9PSBudW0pIHtcbiAgICAgICAgICAgIHZhciBpbnRTdHIgPSBTdHJpbmcoaW50KTtcbiAgICAgICAgICAgIHZhciBkZWMgPSAkc2xpY2UuY2FsbChzdHIsIGludFN0ci5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIHJldHVybiAkcmVwbGFjZS5jYWxsKGludFN0ciwgc2VwUmVnZXgsICckJl8nKSArICcuJyArICRyZXBsYWNlLmNhbGwoJHJlcGxhY2UuY2FsbChkZWMsIC8oWzAtOV17M30pL2csICckJl8nKSwgL18kLywgJycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAkcmVwbGFjZS5jYWxsKHN0ciwgc2VwUmVnZXgsICckJl8nKTtcbn1cblxudmFyIHV0aWxJbnNwZWN0ID0gcmVxdWlyZSgnLi91dGlsLmluc3BlY3QnKTtcbnZhciBpbnNwZWN0Q3VzdG9tID0gdXRpbEluc3BlY3QuY3VzdG9tO1xudmFyIGluc3BlY3RTeW1ib2wgPSBpc1N5bWJvbChpbnNwZWN0Q3VzdG9tKSA/IGluc3BlY3RDdXN0b20gOiBudWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluc3BlY3RfKG9iaiwgb3B0aW9ucywgZGVwdGgsIHNlZW4pIHtcbiAgICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwge307XG5cbiAgICBpZiAoaGFzKG9wdHMsICdxdW90ZVN0eWxlJykgJiYgKG9wdHMucXVvdGVTdHlsZSAhPT0gJ3NpbmdsZScgJiYgb3B0cy5xdW90ZVN0eWxlICE9PSAnZG91YmxlJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIFwicXVvdGVTdHlsZVwiIG11c3QgYmUgXCJzaW5nbGVcIiBvciBcImRvdWJsZVwiJyk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgICAgaGFzKG9wdHMsICdtYXhTdHJpbmdMZW5ndGgnKSAmJiAodHlwZW9mIG9wdHMubWF4U3RyaW5nTGVuZ3RoID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgPyBvcHRzLm1heFN0cmluZ0xlbmd0aCA8IDAgJiYgb3B0cy5tYXhTdHJpbmdMZW5ndGggIT09IEluZmluaXR5XG4gICAgICAgICAgICA6IG9wdHMubWF4U3RyaW5nTGVuZ3RoICE9PSBudWxsXG4gICAgICAgIClcbiAgICApIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIFwibWF4U3RyaW5nTGVuZ3RoXCIsIGlmIHByb3ZpZGVkLCBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlciwgSW5maW5pdHksIG9yIGBudWxsYCcpO1xuICAgIH1cbiAgICB2YXIgY3VzdG9tSW5zcGVjdCA9IGhhcyhvcHRzLCAnY3VzdG9tSW5zcGVjdCcpID8gb3B0cy5jdXN0b21JbnNwZWN0IDogdHJ1ZTtcbiAgICBpZiAodHlwZW9mIGN1c3RvbUluc3BlY3QgIT09ICdib29sZWFuJyAmJiBjdXN0b21JbnNwZWN0ICE9PSAnc3ltYm9sJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gXCJjdXN0b21JbnNwZWN0XCIsIGlmIHByb3ZpZGVkLCBtdXN0IGJlIGB0cnVlYCwgYGZhbHNlYCwgb3IgYFxcJ3N5bWJvbFxcJ2AnKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAgIGhhcyhvcHRzLCAnaW5kZW50JylcbiAgICAgICAgJiYgb3B0cy5pbmRlbnQgIT09IG51bGxcbiAgICAgICAgJiYgb3B0cy5pbmRlbnQgIT09ICdcXHQnXG4gICAgICAgICYmICEocGFyc2VJbnQob3B0cy5pbmRlbnQsIDEwKSA9PT0gb3B0cy5pbmRlbnQgJiYgb3B0cy5pbmRlbnQgPiAwKVxuICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gXCJpbmRlbnRcIiBtdXN0IGJlIFwiXFxcXHRcIiwgYW4gaW50ZWdlciA+IDAsIG9yIGBudWxsYCcpO1xuICAgIH1cbiAgICBpZiAoaGFzKG9wdHMsICdudW1lcmljU2VwYXJhdG9yJykgJiYgdHlwZW9mIG9wdHMubnVtZXJpY1NlcGFyYXRvciAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBcIm51bWVyaWNTZXBhcmF0b3JcIiwgaWYgcHJvdmlkZWQsIG11c3QgYmUgYHRydWVgIG9yIGBmYWxzZWAnKTtcbiAgICB9XG4gICAgdmFyIG51bWVyaWNTZXBhcmF0b3IgPSBvcHRzLm51bWVyaWNTZXBhcmF0b3I7XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICAgIH1cbiAgICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuIG9iaiA/ICd0cnVlJyA6ICdmYWxzZSc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBpbnNwZWN0U3RyaW5nKG9iaiwgb3B0cyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAob2JqID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gSW5maW5pdHkgLyBvYmogPiAwID8gJzAnIDogJy0wJztcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RyID0gU3RyaW5nKG9iaik7XG4gICAgICAgIHJldHVybiBudW1lcmljU2VwYXJhdG9yID8gYWRkTnVtZXJpY1NlcGFyYXRvcihvYmosIHN0cikgOiBzdHI7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnYmlnaW50Jykge1xuICAgICAgICB2YXIgYmlnSW50U3RyID0gU3RyaW5nKG9iaikgKyAnbic7XG4gICAgICAgIHJldHVybiBudW1lcmljU2VwYXJhdG9yID8gYWRkTnVtZXJpY1NlcGFyYXRvcihvYmosIGJpZ0ludFN0cikgOiBiaWdJbnRTdHI7XG4gICAgfVxuXG4gICAgdmFyIG1heERlcHRoID0gdHlwZW9mIG9wdHMuZGVwdGggPT09ICd1bmRlZmluZWQnID8gNSA6IG9wdHMuZGVwdGg7XG4gICAgaWYgKHR5cGVvZiBkZXB0aCA9PT0gJ3VuZGVmaW5lZCcpIHsgZGVwdGggPSAwOyB9XG4gICAgaWYgKGRlcHRoID49IG1heERlcHRoICYmIG1heERlcHRoID4gMCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gaXNBcnJheShvYmopID8gJ1tBcnJheV0nIDogJ1tPYmplY3RdJztcbiAgICB9XG5cbiAgICB2YXIgaW5kZW50ID0gZ2V0SW5kZW50KG9wdHMsIGRlcHRoKTtcblxuICAgIGlmICh0eXBlb2Ygc2VlbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2VlbiA9IFtdO1xuICAgIH0gZWxzZSBpZiAoaW5kZXhPZihzZWVuLCBvYmopID49IDApIHtcbiAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnNwZWN0KHZhbHVlLCBmcm9tLCBub0luZGVudCkge1xuICAgICAgICBpZiAoZnJvbSkge1xuICAgICAgICAgICAgc2VlbiA9ICRhcnJTbGljZS5jYWxsKHNlZW4pO1xuICAgICAgICAgICAgc2Vlbi5wdXNoKGZyb20pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub0luZGVudCkge1xuICAgICAgICAgICAgdmFyIG5ld09wdHMgPSB7XG4gICAgICAgICAgICAgICAgZGVwdGg6IG9wdHMuZGVwdGhcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoaGFzKG9wdHMsICdxdW90ZVN0eWxlJykpIHtcbiAgICAgICAgICAgICAgICBuZXdPcHRzLnF1b3RlU3R5bGUgPSBvcHRzLnF1b3RlU3R5bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5zcGVjdF8odmFsdWUsIG5ld09wdHMsIGRlcHRoICsgMSwgc2Vlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluc3BlY3RfKHZhbHVlLCBvcHRzLCBkZXB0aCArIDEsIHNlZW4pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nICYmICFpc1JlZ0V4cChvYmopKSB7IC8vIGluIG9sZGVyIGVuZ2luZXMsIHJlZ2V4ZXMgYXJlIGNhbGxhYmxlXG4gICAgICAgIHZhciBuYW1lID0gbmFtZU9mKG9iaik7XG4gICAgICAgIHZhciBrZXlzID0gYXJyT2JqS2V5cyhvYmosIGluc3BlY3QpO1xuICAgICAgICByZXR1cm4gJ1tGdW5jdGlvbicgKyAobmFtZSA/ICc6ICcgKyBuYW1lIDogJyAoYW5vbnltb3VzKScpICsgJ10nICsgKGtleXMubGVuZ3RoID4gMCA/ICcgeyAnICsgJGpvaW4uY2FsbChrZXlzLCAnLCAnKSArICcgfScgOiAnJyk7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChvYmopKSB7XG4gICAgICAgIHZhciBzeW1TdHJpbmcgPSBoYXNTaGFtbWVkU3ltYm9scyA/ICRyZXBsYWNlLmNhbGwoU3RyaW5nKG9iaiksIC9eKFN5bWJvbFxcKC4qXFwpKV9bXildKiQvLCAnJDEnKSA6IHN5bVRvU3RyaW5nLmNhbGwob2JqKTtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmICFoYXNTaGFtbWVkU3ltYm9scyA/IG1hcmtCb3hlZChzeW1TdHJpbmcpIDogc3ltU3RyaW5nO1xuICAgIH1cbiAgICBpZiAoaXNFbGVtZW50KG9iaikpIHtcbiAgICAgICAgdmFyIHMgPSAnPCcgKyAkdG9Mb3dlckNhc2UuY2FsbChTdHJpbmcob2JqLm5vZGVOYW1lKSk7XG4gICAgICAgIHZhciBhdHRycyA9IG9iai5hdHRyaWJ1dGVzIHx8IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzICs9ICcgJyArIGF0dHJzW2ldLm5hbWUgKyAnPScgKyB3cmFwUXVvdGVzKHF1b3RlKGF0dHJzW2ldLnZhbHVlKSwgJ2RvdWJsZScsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIHMgKz0gJz4nO1xuICAgICAgICBpZiAob2JqLmNoaWxkTm9kZXMgJiYgb2JqLmNoaWxkTm9kZXMubGVuZ3RoKSB7IHMgKz0gJy4uLic7IH1cbiAgICAgICAgcyArPSAnPC8nICsgJHRvTG93ZXJDYXNlLmNhbGwoU3RyaW5nKG9iai5ub2RlTmFtZSkpICsgJz4nO1xuICAgICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICBpZiAob2JqLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gJ1tdJzsgfVxuICAgICAgICB2YXIgeHMgPSBhcnJPYmpLZXlzKG9iaiwgaW5zcGVjdCk7XG4gICAgICAgIGlmIChpbmRlbnQgJiYgIXNpbmdsZUxpbmVWYWx1ZXMoeHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1snICsgaW5kZW50ZWRKb2luKHhzLCBpbmRlbnQpICsgJ10nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnWyAnICsgJGpvaW4uY2FsbCh4cywgJywgJykgKyAnIF0nO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcihvYmopKSB7XG4gICAgICAgIHZhciBwYXJ0cyA9IGFyck9iaktleXMob2JqLCBpbnNwZWN0KTtcbiAgICAgICAgaWYgKCEoJ2NhdXNlJyBpbiBFcnJvci5wcm90b3R5cGUpICYmICdjYXVzZScgaW4gb2JqICYmICFpc0VudW1lcmFibGUuY2FsbChvYmosICdjYXVzZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3sgWycgKyBTdHJpbmcob2JqKSArICddICcgKyAkam9pbi5jYWxsKCRjb25jYXQuY2FsbCgnW2NhdXNlXTogJyArIGluc3BlY3Qob2JqLmNhdXNlKSwgcGFydHMpLCAnLCAnKSArICcgfSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gJ1snICsgU3RyaW5nKG9iaikgKyAnXSc7IH1cbiAgICAgICAgcmV0dXJuICd7IFsnICsgU3RyaW5nKG9iaikgKyAnXSAnICsgJGpvaW4uY2FsbChwYXJ0cywgJywgJykgKyAnIH0nO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgY3VzdG9tSW5zcGVjdCkge1xuICAgICAgICBpZiAoaW5zcGVjdFN5bWJvbCAmJiB0eXBlb2Ygb2JqW2luc3BlY3RTeW1ib2xdID09PSAnZnVuY3Rpb24nICYmIHV0aWxJbnNwZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbEluc3BlY3Qob2JqLCB7IGRlcHRoOiBtYXhEZXB0aCAtIGRlcHRoIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGN1c3RvbUluc3BlY3QgIT09ICdzeW1ib2wnICYmIHR5cGVvZiBvYmouaW5zcGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIG9iai5pbnNwZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzTWFwKG9iaikpIHtcbiAgICAgICAgdmFyIG1hcFBhcnRzID0gW107XG4gICAgICAgIGlmIChtYXBGb3JFYWNoKSB7XG4gICAgICAgICAgICBtYXBGb3JFYWNoLmNhbGwob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgIG1hcFBhcnRzLnB1c2goaW5zcGVjdChrZXksIG9iaiwgdHJ1ZSkgKyAnID0+ICcgKyBpbnNwZWN0KHZhbHVlLCBvYmopKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uT2YoJ01hcCcsIG1hcFNpemUuY2FsbChvYmopLCBtYXBQYXJ0cywgaW5kZW50KTtcbiAgICB9XG4gICAgaWYgKGlzU2V0KG9iaikpIHtcbiAgICAgICAgdmFyIHNldFBhcnRzID0gW107XG4gICAgICAgIGlmIChzZXRGb3JFYWNoKSB7XG4gICAgICAgICAgICBzZXRGb3JFYWNoLmNhbGwob2JqLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzZXRQYXJ0cy5wdXNoKGluc3BlY3QodmFsdWUsIG9iaikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb25PZignU2V0Jywgc2V0U2l6ZS5jYWxsKG9iaiksIHNldFBhcnRzLCBpbmRlbnQpO1xuICAgIH1cbiAgICBpZiAoaXNXZWFrTWFwKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIHdlYWtDb2xsZWN0aW9uT2YoJ1dlYWtNYXAnKTtcbiAgICB9XG4gICAgaWYgKGlzV2Vha1NldChvYmopKSB7XG4gICAgICAgIHJldHVybiB3ZWFrQ29sbGVjdGlvbk9mKCdXZWFrU2V0Jyk7XG4gICAgfVxuICAgIGlmIChpc1dlYWtSZWYob2JqKSkge1xuICAgICAgICByZXR1cm4gd2Vha0NvbGxlY3Rpb25PZignV2Vha1JlZicpO1xuICAgIH1cbiAgICBpZiAoaXNOdW1iZXIob2JqKSkge1xuICAgICAgICByZXR1cm4gbWFya0JveGVkKGluc3BlY3QoTnVtYmVyKG9iaikpKTtcbiAgICB9XG4gICAgaWYgKGlzQmlnSW50KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG1hcmtCb3hlZChpbnNwZWN0KGJpZ0ludFZhbHVlT2YuY2FsbChvYmopKSk7XG4gICAgfVxuICAgIGlmIChpc0Jvb2xlYW4ob2JqKSkge1xuICAgICAgICByZXR1cm4gbWFya0JveGVkKGJvb2xlYW5WYWx1ZU9mLmNhbGwob2JqKSk7XG4gICAgfVxuICAgIGlmIChpc1N0cmluZyhvYmopKSB7XG4gICAgICAgIHJldHVybiBtYXJrQm94ZWQoaW5zcGVjdChTdHJpbmcob2JqKSkpO1xuICAgIH1cbiAgICAvLyBub3RlOiBpbiBJRSA4LCBzb21ldGltZXMgYGdsb2JhbCAhPT0gd2luZG93YCBidXQgYm90aCBhcmUgdGhlIHByb3RvdHlwZXMgb2YgZWFjaCBvdGhlclxuICAgIC8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBvYmogPT09IHdpbmRvdykge1xuICAgICAgICByZXR1cm4gJ3sgW29iamVjdCBXaW5kb3ddIH0nO1xuICAgIH1cbiAgICBpZiAob2JqID09PSBnbG9iYWwpIHtcbiAgICAgICAgcmV0dXJuICd7IFtvYmplY3QgZ2xvYmFsVGhpc10gfSc7XG4gICAgfVxuICAgIGlmICghaXNEYXRlKG9iaikgJiYgIWlzUmVnRXhwKG9iaikpIHtcbiAgICAgICAgdmFyIHlzID0gYXJyT2JqS2V5cyhvYmosIGluc3BlY3QpO1xuICAgICAgICB2YXIgaXNQbGFpbk9iamVjdCA9IGdQTyA/IGdQTyhvYmopID09PSBPYmplY3QucHJvdG90eXBlIDogb2JqIGluc3RhbmNlb2YgT2JqZWN0IHx8IG9iai5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xuICAgICAgICB2YXIgcHJvdG9UYWcgPSBvYmogaW5zdGFuY2VvZiBPYmplY3QgPyAnJyA6ICdudWxsIHByb3RvdHlwZSc7XG4gICAgICAgIHZhciBzdHJpbmdUYWcgPSAhaXNQbGFpbk9iamVjdCAmJiB0b1N0cmluZ1RhZyAmJiBPYmplY3Qob2JqKSA9PT0gb2JqICYmIHRvU3RyaW5nVGFnIGluIG9iaiA/ICRzbGljZS5jYWxsKHRvU3RyKG9iaiksIDgsIC0xKSA6IHByb3RvVGFnID8gJ09iamVjdCcgOiAnJztcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yVGFnID0gaXNQbGFpbk9iamVjdCB8fCB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yICE9PSAnZnVuY3Rpb24nID8gJycgOiBvYmouY29uc3RydWN0b3IubmFtZSA/IG9iai5jb25zdHJ1Y3Rvci5uYW1lICsgJyAnIDogJyc7XG4gICAgICAgIHZhciB0YWcgPSBjb25zdHJ1Y3RvclRhZyArIChzdHJpbmdUYWcgfHwgcHJvdG9UYWcgPyAnWycgKyAkam9pbi5jYWxsKCRjb25jYXQuY2FsbChbXSwgc3RyaW5nVGFnIHx8IFtdLCBwcm90b1RhZyB8fCBbXSksICc6ICcpICsgJ10gJyA6ICcnKTtcbiAgICAgICAgaWYgKHlzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gdGFnICsgJ3t9JzsgfVxuICAgICAgICBpZiAoaW5kZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGFnICsgJ3snICsgaW5kZW50ZWRKb2luKHlzLCBpbmRlbnQpICsgJ30nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YWcgKyAneyAnICsgJGpvaW4uY2FsbCh5cywgJywgJykgKyAnIH0nO1xuICAgIH1cbiAgICByZXR1cm4gU3RyaW5nKG9iaik7XG59O1xuXG5mdW5jdGlvbiB3cmFwUXVvdGVzKHMsIGRlZmF1bHRTdHlsZSwgb3B0cykge1xuICAgIHZhciBxdW90ZUNoYXIgPSAob3B0cy5xdW90ZVN0eWxlIHx8IGRlZmF1bHRTdHlsZSkgPT09ICdkb3VibGUnID8gJ1wiJyA6IFwiJ1wiO1xuICAgIHJldHVybiBxdW90ZUNoYXIgKyBzICsgcXVvdGVDaGFyO1xufVxuXG5mdW5jdGlvbiBxdW90ZShzKSB7XG4gICAgcmV0dXJuICRyZXBsYWNlLmNhbGwoU3RyaW5nKHMpLCAvXCIvZywgJyZxdW90OycpO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5KG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJyAmJiAoIXRvU3RyaW5nVGFnIHx8ICEodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdG9TdHJpbmdUYWcgaW4gb2JqKSk7IH1cbmZ1bmN0aW9uIGlzRGF0ZShvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IERhdGVdJyAmJiAoIXRvU3RyaW5nVGFnIHx8ICEodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdG9TdHJpbmdUYWcgaW4gb2JqKSk7IH1cbmZ1bmN0aW9uIGlzUmVnRXhwKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXScgJiYgKCF0b1N0cmluZ1RhZyB8fCAhKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIHRvU3RyaW5nVGFnIGluIG9iaikpOyB9XG5mdW5jdGlvbiBpc0Vycm9yKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyAmJiAoIXRvU3RyaW5nVGFnIHx8ICEodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdG9TdHJpbmdUYWcgaW4gb2JqKSk7IH1cbmZ1bmN0aW9uIGlzU3RyaW5nKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScgJiYgKCF0b1N0cmluZ1RhZyB8fCAhKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIHRvU3RyaW5nVGFnIGluIG9iaikpOyB9XG5mdW5jdGlvbiBpc051bWJlcihvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IE51bWJlcl0nICYmICghdG9TdHJpbmdUYWcgfHwgISh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiB0b1N0cmluZ1RhZyBpbiBvYmopKTsgfVxuZnVuY3Rpb24gaXNCb29sZWFuKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nICYmICghdG9TdHJpbmdUYWcgfHwgISh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiB0b1N0cmluZ1RhZyBpbiBvYmopKTsgfVxuXG4vLyBTeW1ib2wgYW5kIEJpZ0ludCBkbyBoYXZlIFN5bWJvbC50b1N0cmluZ1RhZyBieSBzcGVjLCBzbyB0aGF0IGNhbid0IGJlIHVzZWQgdG8gZWxpbWluYXRlIGZhbHNlIHBvc2l0aXZlc1xuZnVuY3Rpb24gaXNTeW1ib2wob2JqKSB7XG4gICAgaWYgKGhhc1NoYW1tZWRTeW1ib2xzKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqIGluc3RhbmNlb2YgU3ltYm9sO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8ICFzeW1Ub1N0cmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHN5bVRvU3RyaW5nLmNhbGwob2JqKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzQmlnSW50KG9iaikge1xuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8ICFiaWdJbnRWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYmlnSW50VmFsdWVPZi5jYWxsKG9iaik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSB8fCBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgaW4gdGhpczsgfTtcbmZ1bmN0aW9uIGhhcyhvYmosIGtleSkge1xuICAgIHJldHVybiBoYXNPd24uY2FsbChvYmosIGtleSk7XG59XG5cbmZ1bmN0aW9uIHRvU3RyKG9iaikge1xuICAgIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKG9iaik7XG59XG5cbmZ1bmN0aW9uIG5hbWVPZihmKSB7XG4gICAgaWYgKGYubmFtZSkgeyByZXR1cm4gZi5uYW1lOyB9XG4gICAgdmFyIG0gPSAkbWF0Y2guY2FsbChmdW5jdGlvblRvU3RyaW5nLmNhbGwoZiksIC9eZnVuY3Rpb25cXHMqKFtcXHckXSspLyk7XG4gICAgaWYgKG0pIHsgcmV0dXJuIG1bMV07IH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gaW5kZXhPZih4cywgeCkge1xuICAgIGlmICh4cy5pbmRleE9mKSB7IHJldHVybiB4cy5pbmRleE9mKHgpOyB9XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB4cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKHhzW2ldID09PSB4KSB7IHJldHVybiBpOyB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gaXNNYXAoeCkge1xuICAgIGlmICghbWFwU2l6ZSB8fCAheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBtYXBTaXplLmNhbGwoeCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXRTaXplLmNhbGwoeCk7XG4gICAgICAgIH0gY2F0Y2ggKHMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4IGluc3RhbmNlb2YgTWFwOyAvLyBjb3JlLWpzIHdvcmthcm91bmQsIHByZS12Mi41LjBcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNXZWFrTWFwKHgpIHtcbiAgICBpZiAoIXdlYWtNYXBIYXMgfHwgIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgd2Vha01hcEhhcy5jYWxsKHgsIHdlYWtNYXBIYXMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd2Vha1NldEhhcy5jYWxsKHgsIHdlYWtTZXRIYXMpO1xuICAgICAgICB9IGNhdGNoIChzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geCBpbnN0YW5jZW9mIFdlYWtNYXA7IC8vIGNvcmUtanMgd29ya2Fyb3VuZCwgcHJlLXYyLjUuMFxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc1dlYWtSZWYoeCkge1xuICAgIGlmICghd2Vha1JlZkRlcmVmIHx8ICF4IHx8IHR5cGVvZiB4ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHdlYWtSZWZEZXJlZi5jYWxsKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNTZXQoeCkge1xuICAgIGlmICghc2V0U2l6ZSB8fCAheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBzZXRTaXplLmNhbGwoeCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtYXBTaXplLmNhbGwoeCk7XG4gICAgICAgIH0gY2F0Y2ggKG0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4IGluc3RhbmNlb2YgU2V0OyAvLyBjb3JlLWpzIHdvcmthcm91bmQsIHByZS12Mi41LjBcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNXZWFrU2V0KHgpIHtcbiAgICBpZiAoIXdlYWtTZXRIYXMgfHwgIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgd2Vha1NldEhhcy5jYWxsKHgsIHdlYWtTZXRIYXMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd2Vha01hcEhhcy5jYWxsKHgsIHdlYWtNYXBIYXMpO1xuICAgICAgICB9IGNhdGNoIChzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geCBpbnN0YW5jZW9mIFdlYWtTZXQ7IC8vIGNvcmUtanMgd29ya2Fyb3VuZCwgcHJlLXYyLjUuMFxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc0VsZW1lbnQoeCkge1xuICAgIGlmICgheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgaWYgKHR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgeCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIHgubm9kZU5hbWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB4LmdldEF0dHJpYnV0ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaW5zcGVjdFN0cmluZyhzdHIsIG9wdHMpIHtcbiAgICBpZiAoc3RyLmxlbmd0aCA+IG9wdHMubWF4U3RyaW5nTGVuZ3RoKSB7XG4gICAgICAgIHZhciByZW1haW5pbmcgPSBzdHIubGVuZ3RoIC0gb3B0cy5tYXhTdHJpbmdMZW5ndGg7XG4gICAgICAgIHZhciB0cmFpbGVyID0gJy4uLiAnICsgcmVtYWluaW5nICsgJyBtb3JlIGNoYXJhY3RlcicgKyAocmVtYWluaW5nID4gMSA/ICdzJyA6ICcnKTtcbiAgICAgICAgcmV0dXJuIGluc3BlY3RTdHJpbmcoJHNsaWNlLmNhbGwoc3RyLCAwLCBvcHRzLm1heFN0cmluZ0xlbmd0aCksIG9wdHMpICsgdHJhaWxlcjtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbiAgICB2YXIgcyA9ICRyZXBsYWNlLmNhbGwoJHJlcGxhY2UuY2FsbChzdHIsIC8oWydcXFxcXSkvZywgJ1xcXFwkMScpLCAvW1xceDAwLVxceDFmXS9nLCBsb3dieXRlKTtcbiAgICByZXR1cm4gd3JhcFF1b3RlcyhzLCAnc2luZ2xlJywgb3B0cyk7XG59XG5cbmZ1bmN0aW9uIGxvd2J5dGUoYykge1xuICAgIHZhciBuID0gYy5jaGFyQ29kZUF0KDApO1xuICAgIHZhciB4ID0ge1xuICAgICAgICA4OiAnYicsXG4gICAgICAgIDk6ICd0JyxcbiAgICAgICAgMTA6ICduJyxcbiAgICAgICAgMTI6ICdmJyxcbiAgICAgICAgMTM6ICdyJ1xuICAgIH1bbl07XG4gICAgaWYgKHgpIHsgcmV0dXJuICdcXFxcJyArIHg7IH1cbiAgICByZXR1cm4gJ1xcXFx4JyArIChuIDwgMHgxMCA/ICcwJyA6ICcnKSArICR0b1VwcGVyQ2FzZS5jYWxsKG4udG9TdHJpbmcoMTYpKTtcbn1cblxuZnVuY3Rpb24gbWFya0JveGVkKHN0cikge1xuICAgIHJldHVybiAnT2JqZWN0KCcgKyBzdHIgKyAnKSc7XG59XG5cbmZ1bmN0aW9uIHdlYWtDb2xsZWN0aW9uT2YodHlwZSkge1xuICAgIHJldHVybiB0eXBlICsgJyB7ID8gfSc7XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3Rpb25PZih0eXBlLCBzaXplLCBlbnRyaWVzLCBpbmRlbnQpIHtcbiAgICB2YXIgam9pbmVkRW50cmllcyA9IGluZGVudCA/IGluZGVudGVkSm9pbihlbnRyaWVzLCBpbmRlbnQpIDogJGpvaW4uY2FsbChlbnRyaWVzLCAnLCAnKTtcbiAgICByZXR1cm4gdHlwZSArICcgKCcgKyBzaXplICsgJykgeycgKyBqb2luZWRFbnRyaWVzICsgJ30nO1xufVxuXG5mdW5jdGlvbiBzaW5nbGVMaW5lVmFsdWVzKHhzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaW5kZXhPZih4c1tpXSwgJ1xcbicpID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5kZW50KG9wdHMsIGRlcHRoKSB7XG4gICAgdmFyIGJhc2VJbmRlbnQ7XG4gICAgaWYgKG9wdHMuaW5kZW50ID09PSAnXFx0Jykge1xuICAgICAgICBiYXNlSW5kZW50ID0gJ1xcdCc7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cy5pbmRlbnQgPT09ICdudW1iZXInICYmIG9wdHMuaW5kZW50ID4gMCkge1xuICAgICAgICBiYXNlSW5kZW50ID0gJGpvaW4uY2FsbChBcnJheShvcHRzLmluZGVudCArIDEpLCAnICcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBiYXNlOiBiYXNlSW5kZW50LFxuICAgICAgICBwcmV2OiAkam9pbi5jYWxsKEFycmF5KGRlcHRoICsgMSksIGJhc2VJbmRlbnQpXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaW5kZW50ZWRKb2luKHhzLCBpbmRlbnQpIHtcbiAgICBpZiAoeHMubGVuZ3RoID09PSAwKSB7IHJldHVybiAnJzsgfVxuICAgIHZhciBsaW5lSm9pbmVyID0gJ1xcbicgKyBpbmRlbnQucHJldiArIGluZGVudC5iYXNlO1xuICAgIHJldHVybiBsaW5lSm9pbmVyICsgJGpvaW4uY2FsbCh4cywgJywnICsgbGluZUpvaW5lcikgKyAnXFxuJyArIGluZGVudC5wcmV2O1xufVxuXG5mdW5jdGlvbiBhcnJPYmpLZXlzKG9iaiwgaW5zcGVjdCkge1xuICAgIHZhciBpc0FyciA9IGlzQXJyYXkob2JqKTtcbiAgICB2YXIgeHMgPSBbXTtcbiAgICBpZiAoaXNBcnIpIHtcbiAgICAgICAgeHMubGVuZ3RoID0gb2JqLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHhzW2ldID0gaGFzKG9iaiwgaSkgPyBpbnNwZWN0KG9ialtpXSwgb2JqKSA6ICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBzeW1zID0gdHlwZW9mIGdPUFMgPT09ICdmdW5jdGlvbicgPyBnT1BTKG9iaikgOiBbXTtcbiAgICB2YXIgc3ltTWFwO1xuICAgIGlmIChoYXNTaGFtbWVkU3ltYm9scykge1xuICAgICAgICBzeW1NYXAgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBzeW1zLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBzeW1NYXBbJyQnICsgc3ltc1trXV0gPSBzeW1zW2tdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICAgIGlmICghaGFzKG9iaiwga2V5KSkgeyBjb250aW51ZTsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBuby1jb250aW51ZVxuICAgICAgICBpZiAoaXNBcnIgJiYgU3RyaW5nKE51bWJlcihrZXkpKSA9PT0ga2V5ICYmIGtleSA8IG9iai5sZW5ndGgpIHsgY29udGludWU7IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheCwgbm8tY29udGludWVcbiAgICAgICAgaWYgKGhhc1NoYW1tZWRTeW1ib2xzICYmIHN5bU1hcFsnJCcgKyBrZXldIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICAgICAgICAvLyB0aGlzIGlzIHRvIHByZXZlbnQgc2hhbW1lZCBTeW1ib2xzLCB3aGljaCBhcmUgc3RvcmVkIGFzIHN0cmluZ3MsIGZyb20gYmVpbmcgaW5jbHVkZWQgaW4gdGhlIHN0cmluZyBrZXkgc2VjdGlvblxuICAgICAgICAgICAgY29udGludWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXgsIG5vLWNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoJHRlc3QuY2FsbCgvW15cXHckXS8sIGtleSkpIHtcbiAgICAgICAgICAgIHhzLnB1c2goaW5zcGVjdChrZXksIG9iaikgKyAnOiAnICsgaW5zcGVjdChvYmpba2V5XSwgb2JqKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4cy5wdXNoKGtleSArICc6ICcgKyBpbnNwZWN0KG9ialtrZXldLCBvYmopKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGdPUFMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzeW1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoaXNFbnVtZXJhYmxlLmNhbGwob2JqLCBzeW1zW2pdKSkge1xuICAgICAgICAgICAgICAgIHhzLnB1c2goJ1snICsgaW5zcGVjdChzeW1zW2pdKSArICddOiAnICsgaW5zcGVjdChvYmpbc3ltc1tqXV0sIG9iaikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB4cztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJ2dldC1pbnRyaW5zaWMnKTtcbnZhciBjYWxsQm91bmQgPSByZXF1aXJlKCdjYWxsLWJpbmQvY2FsbEJvdW5kJyk7XG52YXIgaW5zcGVjdCA9IHJlcXVpcmUoJ29iamVjdC1pbnNwZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gR2V0SW50cmluc2ljKCclVHlwZUVycm9yJScpO1xudmFyICRXZWFrTWFwID0gR2V0SW50cmluc2ljKCclV2Vha01hcCUnLCB0cnVlKTtcbnZhciAkTWFwID0gR2V0SW50cmluc2ljKCclTWFwJScsIHRydWUpO1xuXG52YXIgJHdlYWtNYXBHZXQgPSBjYWxsQm91bmQoJ1dlYWtNYXAucHJvdG90eXBlLmdldCcsIHRydWUpO1xudmFyICR3ZWFrTWFwU2V0ID0gY2FsbEJvdW5kKCdXZWFrTWFwLnByb3RvdHlwZS5zZXQnLCB0cnVlKTtcbnZhciAkd2Vha01hcEhhcyA9IGNhbGxCb3VuZCgnV2Vha01hcC5wcm90b3R5cGUuaGFzJywgdHJ1ZSk7XG52YXIgJG1hcEdldCA9IGNhbGxCb3VuZCgnTWFwLnByb3RvdHlwZS5nZXQnLCB0cnVlKTtcbnZhciAkbWFwU2V0ID0gY2FsbEJvdW5kKCdNYXAucHJvdG90eXBlLnNldCcsIHRydWUpO1xudmFyICRtYXBIYXMgPSBjYWxsQm91bmQoJ01hcC5wcm90b3R5cGUuaGFzJywgdHJ1ZSk7XG5cbi8qXG4gKiBUaGlzIGZ1bmN0aW9uIHRyYXZlcnNlcyB0aGUgbGlzdCByZXR1cm5pbmcgdGhlIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGVcbiAqIGdpdmVuIGtleS5cbiAqXG4gKiBUaGF0IG5vZGUgaXMgYWxzbyBtb3ZlZCB0byB0aGUgaGVhZCBvZiB0aGUgbGlzdCwgc28gdGhhdCBpZiBpdCdzIGFjY2Vzc2VkXG4gKiBhZ2FpbiB3ZSBkb24ndCBuZWVkIHRvIHRyYXZlcnNlIHRoZSB3aG9sZSBsaXN0LiBCeSBkb2luZyBzbywgYWxsIHRoZSByZWNlbnRseVxuICogdXNlZCBub2RlcyBjYW4gYmUgYWNjZXNzZWQgcmVsYXRpdmVseSBxdWlja2x5LlxuICovXG52YXIgbGlzdEdldE5vZGUgPSBmdW5jdGlvbiAobGlzdCwga2V5KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY29uc2lzdGVudC1yZXR1cm5cblx0Zm9yICh2YXIgcHJldiA9IGxpc3QsIGN1cnI7IChjdXJyID0gcHJldi5uZXh0KSAhPT0gbnVsbDsgcHJldiA9IGN1cnIpIHtcblx0XHRpZiAoY3Vyci5rZXkgPT09IGtleSkge1xuXHRcdFx0cHJldi5uZXh0ID0gY3Vyci5uZXh0O1xuXHRcdFx0Y3Vyci5uZXh0ID0gbGlzdC5uZXh0O1xuXHRcdFx0bGlzdC5uZXh0ID0gY3VycjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXHRcdFx0cmV0dXJuIGN1cnI7XG5cdFx0fVxuXHR9XG59O1xuXG52YXIgbGlzdEdldCA9IGZ1bmN0aW9uIChvYmplY3RzLCBrZXkpIHtcblx0dmFyIG5vZGUgPSBsaXN0R2V0Tm9kZShvYmplY3RzLCBrZXkpO1xuXHRyZXR1cm4gbm9kZSAmJiBub2RlLnZhbHVlO1xufTtcbnZhciBsaXN0U2V0ID0gZnVuY3Rpb24gKG9iamVjdHMsIGtleSwgdmFsdWUpIHtcblx0dmFyIG5vZGUgPSBsaXN0R2V0Tm9kZShvYmplY3RzLCBrZXkpO1xuXHRpZiAobm9kZSkge1xuXHRcdG5vZGUudmFsdWUgPSB2YWx1ZTtcblx0fSBlbHNlIHtcblx0XHQvLyBQcmVwZW5kIHRoZSBuZXcgbm9kZSB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0XG5cdFx0b2JqZWN0cy5uZXh0ID0geyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cdFx0XHRrZXk6IGtleSxcblx0XHRcdG5leHQ6IG9iamVjdHMubmV4dCxcblx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdH07XG5cdH1cbn07XG52YXIgbGlzdEhhcyA9IGZ1bmN0aW9uIChvYmplY3RzLCBrZXkpIHtcblx0cmV0dXJuICEhbGlzdEdldE5vZGUob2JqZWN0cywga2V5KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0U2lkZUNoYW5uZWwoKSB7XG5cdHZhciAkd207XG5cdHZhciAkbTtcblx0dmFyICRvO1xuXHR2YXIgY2hhbm5lbCA9IHtcblx0XHRhc3NlcnQ6IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdGlmICghY2hhbm5lbC5oYXMoa2V5KSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignU2lkZSBjaGFubmVsIGRvZXMgbm90IGNvbnRhaW4gJyArIGluc3BlY3Qoa2V5KSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRnZXQ6IGZ1bmN0aW9uIChrZXkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjb25zaXN0ZW50LXJldHVyblxuXHRcdFx0aWYgKCRXZWFrTWFwICYmIGtleSAmJiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIGtleSA9PT0gJ2Z1bmN0aW9uJykpIHtcblx0XHRcdFx0aWYgKCR3bSkge1xuXHRcdFx0XHRcdHJldHVybiAkd2Vha01hcEdldCgkd20sIGtleSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoJE1hcCkge1xuXHRcdFx0XHRpZiAoJG0pIHtcblx0XHRcdFx0XHRyZXR1cm4gJG1hcEdldCgkbSwga2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCRvKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbG9uZWx5LWlmXG5cdFx0XHRcdFx0cmV0dXJuIGxpc3RHZXQoJG8sIGtleSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGhhczogZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0aWYgKCRXZWFrTWFwICYmIGtleSAmJiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIGtleSA9PT0gJ2Z1bmN0aW9uJykpIHtcblx0XHRcdFx0aWYgKCR3bSkge1xuXHRcdFx0XHRcdHJldHVybiAkd2Vha01hcEhhcygkd20sIGtleSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoJE1hcCkge1xuXHRcdFx0XHRpZiAoJG0pIHtcblx0XHRcdFx0XHRyZXR1cm4gJG1hcEhhcygkbSwga2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCRvKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbG9uZWx5LWlmXG5cdFx0XHRcdFx0cmV0dXJuIGxpc3RIYXMoJG8sIGtleSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0XHRcdGlmICgkV2Vha01hcCAmJiBrZXkgJiYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBrZXkgPT09ICdmdW5jdGlvbicpKSB7XG5cdFx0XHRcdGlmICghJHdtKSB7XG5cdFx0XHRcdFx0JHdtID0gbmV3ICRXZWFrTWFwKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JHdlYWtNYXBTZXQoJHdtLCBrZXksIHZhbHVlKTtcblx0XHRcdH0gZWxzZSBpZiAoJE1hcCkge1xuXHRcdFx0XHRpZiAoISRtKSB7XG5cdFx0XHRcdFx0JG0gPSBuZXcgJE1hcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCRtYXBTZXQoJG0sIGtleSwgdmFsdWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCEkbykge1xuXHRcdFx0XHRcdC8qXG5cdFx0XHRcdFx0ICogSW5pdGlhbGl6ZSB0aGUgbGlua2VkIGxpc3QgYXMgYW4gZW1wdHkgbm9kZSwgc28gdGhhdCB3ZSBkb24ndCBoYXZlXG5cdFx0XHRcdFx0ICogdG8gc3BlY2lhbC1jYXNlIGhhbmRsaW5nIG9mIHRoZSBmaXJzdCBub2RlOiB3ZSBjYW4gYWx3YXlzIHJlZmVyIHRvXG5cdFx0XHRcdFx0ICogaXQgYXMgKHByZXZpb3VzIG5vZGUpLm5leHQsIGluc3RlYWQgb2Ygc29tZXRoaW5nIGxpa2UgKGxpc3QpLmhlYWRcblx0XHRcdFx0XHQgKi9cblx0XHRcdFx0XHQkbyA9IHsga2V5OiB7fSwgbmV4dDogbnVsbCB9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3RTZXQoJG8sIGtleSwgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGNoYW5uZWw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcbnZhciBwZXJjZW50VHdlbnRpZXMgPSAvJTIwL2c7XG5cbnZhciBGb3JtYXQgPSB7XG4gICAgUkZDMTczODogJ1JGQzE3MzgnLFxuICAgIFJGQzM5ODY6ICdSRkMzOTg2J1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgJ2RlZmF1bHQnOiBGb3JtYXQuUkZDMzk4NixcbiAgICBmb3JtYXR0ZXJzOiB7XG4gICAgICAgIFJGQzE3Mzg6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2UuY2FsbCh2YWx1ZSwgcGVyY2VudFR3ZW50aWVzLCAnKycpO1xuICAgICAgICB9LFxuICAgICAgICBSRkMzOTg2OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBSRkMxNzM4OiBGb3JtYXQuUkZDMTczOCxcbiAgICBSRkMzOTg2OiBGb3JtYXQuUkZDMzk4NlxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGZvcm1hdHMgPSByZXF1aXJlKCcuL2Zvcm1hdHMnKTtcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbnZhciBoZXhUYWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgICAgICBhcnJheS5wdXNoKCclJyArICgoaSA8IDE2ID8gJzAnIDogJycpICsgaS50b1N0cmluZygxNikpLnRvVXBwZXJDYXNlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheTtcbn0oKSk7XG5cbnZhciBjb21wYWN0UXVldWUgPSBmdW5jdGlvbiBjb21wYWN0UXVldWUocXVldWUpIHtcbiAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMSkge1xuICAgICAgICB2YXIgaXRlbSA9IHF1ZXVlLnBvcCgpO1xuICAgICAgICB2YXIgb2JqID0gaXRlbS5vYmpbaXRlbS5wcm9wXTtcblxuICAgICAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICB2YXIgY29tcGFjdGVkID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgb2JqLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbal0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBhY3RlZC5wdXNoKG9ialtqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtLm9ialtpdGVtLnByb3BdID0gY29tcGFjdGVkO1xuICAgICAgICB9XG4gICAgfVxufTtcblxudmFyIGFycmF5VG9PYmplY3QgPSBmdW5jdGlvbiBhcnJheVRvT2JqZWN0KHNvdXJjZSwgb3B0aW9ucykge1xuICAgIHZhciBvYmogPSBvcHRpb25zICYmIG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb2JqW2ldID0gc291cmNlW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBtZXJnZSA9IGZ1bmN0aW9uIG1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG4gICAgLyogZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOiAwICovXG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGFyZ2V0LnB1c2goc291cmNlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgJiYgdHlwZW9mIHRhcmdldCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmICgob3B0aW9ucyAmJiAob3B0aW9ucy5wbGFpbk9iamVjdHMgfHwgb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMpKSB8fCAhaGFzLmNhbGwoT2JqZWN0LnByb3RvdHlwZSwgc291cmNlKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtzb3VyY2VdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbdGFyZ2V0LCBzb3VyY2VdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldCB8fCB0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gW3RhcmdldF0uY29uY2F0KHNvdXJjZSk7XG4gICAgfVxuXG4gICAgdmFyIG1lcmdlVGFyZ2V0ID0gdGFyZ2V0O1xuICAgIGlmIChpc0FycmF5KHRhcmdldCkgJiYgIWlzQXJyYXkoc291cmNlKSkge1xuICAgICAgICBtZXJnZVRhcmdldCA9IGFycmF5VG9PYmplY3QodGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh0YXJnZXQpICYmIGlzQXJyYXkoc291cmNlKSkge1xuICAgICAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgaWYgKGhhcy5jYWxsKHRhcmdldCwgaSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0SXRlbSA9IHRhcmdldFtpXTtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0SXRlbSAmJiB0eXBlb2YgdGFyZ2V0SXRlbSA9PT0gJ29iamVjdCcgJiYgaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gbWVyZ2UodGFyZ2V0SXRlbSwgaXRlbSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbaV0gPSBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc291cmNlKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHNvdXJjZVtrZXldO1xuXG4gICAgICAgIGlmIChoYXMuY2FsbChhY2MsIGtleSkpIHtcbiAgICAgICAgICAgIGFjY1trZXldID0gbWVyZ2UoYWNjW2tleV0sIHZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjY1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBtZXJnZVRhcmdldCk7XG59O1xuXG52YXIgYXNzaWduID0gZnVuY3Rpb24gYXNzaWduU2luZ2xlU291cmNlKHRhcmdldCwgc291cmNlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNvdXJjZSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICBhY2Nba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHRhcmdldCk7XG59O1xuXG52YXIgZGVjb2RlID0gZnVuY3Rpb24gKHN0ciwgZGVjb2RlciwgY2hhcnNldCkge1xuICAgIHZhciBzdHJXaXRob3V0UGx1cyA9IHN0ci5yZXBsYWNlKC9cXCsvZywgJyAnKTtcbiAgICBpZiAoY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIC8vIHVuZXNjYXBlIG5ldmVyIHRocm93cywgbm8gdHJ5Li4uY2F0Y2ggbmVlZGVkOlxuICAgICAgICByZXR1cm4gc3RyV2l0aG91dFBsdXMucmVwbGFjZSgvJVswLTlhLWZdezJ9L2dpLCB1bmVzY2FwZSk7XG4gICAgfVxuICAgIC8vIHV0Zi04XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHJXaXRob3V0UGx1cyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gc3RyV2l0aG91dFBsdXM7XG4gICAgfVxufTtcblxudmFyIGVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShzdHIsIGRlZmF1bHRFbmNvZGVyLCBjaGFyc2V0LCBraW5kLCBmb3JtYXQpIHtcbiAgICAvLyBUaGlzIGNvZGUgd2FzIG9yaWdpbmFsbHkgd3JpdHRlbiBieSBCcmlhbiBXaGl0ZSAobXNjZGV4KSBmb3IgdGhlIGlvLmpzIGNvcmUgcXVlcnlzdHJpbmcgbGlicmFyeS5cbiAgICAvLyBJdCBoYXMgYmVlbiBhZGFwdGVkIGhlcmUgZm9yIHN0cmljdGVyIGFkaGVyZW5jZSB0byBSRkMgMzk4NlxuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgdmFyIHN0cmluZyA9IHN0cjtcbiAgICBpZiAodHlwZW9mIHN0ciA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgc3RyaW5nID0gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN0cik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgICBzdHJpbmcgPSBTdHJpbmcoc3RyKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIHJldHVybiBlc2NhcGUoc3RyaW5nKS5yZXBsYWNlKC8ldVswLTlhLWZdezR9L2dpLCBmdW5jdGlvbiAoJDApIHtcbiAgICAgICAgICAgIHJldHVybiAnJTI2JTIzJyArIHBhcnNlSW50KCQwLnNsaWNlKDIpLCAxNikgKyAnJTNCJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIG91dCA9ICcnO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBjID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgYyA9PT0gMHgyRCAvLyAtXG4gICAgICAgICAgICB8fCBjID09PSAweDJFIC8vIC5cbiAgICAgICAgICAgIHx8IGMgPT09IDB4NUYgLy8gX1xuICAgICAgICAgICAgfHwgYyA9PT0gMHg3RSAvLyB+XG4gICAgICAgICAgICB8fCAoYyA+PSAweDMwICYmIGMgPD0gMHgzOSkgLy8gMC05XG4gICAgICAgICAgICB8fCAoYyA+PSAweDQxICYmIGMgPD0gMHg1QSkgLy8gYS16XG4gICAgICAgICAgICB8fCAoYyA+PSAweDYxICYmIGMgPD0gMHg3QSkgLy8gQS1aXG4gICAgICAgICAgICB8fCAoZm9ybWF0ID09PSBmb3JtYXRzLlJGQzE3MzggJiYgKGMgPT09IDB4MjggfHwgYyA9PT0gMHgyOSkpIC8vICggKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIG91dCArPSBzdHJpbmcuY2hhckF0KGkpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyA8IDB4ODApIHtcbiAgICAgICAgICAgIG91dCA9IG91dCArIGhleFRhYmxlW2NdO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyA8IDB4ODAwKSB7XG4gICAgICAgICAgICBvdXQgPSBvdXQgKyAoaGV4VGFibGVbMHhDMCB8IChjID4+IDYpXSArIGhleFRhYmxlWzB4ODAgfCAoYyAmIDB4M0YpXSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHhEODAwIHx8IGMgPj0gMHhFMDAwKSB7XG4gICAgICAgICAgICBvdXQgPSBvdXQgKyAoaGV4VGFibGVbMHhFMCB8IChjID4+IDEyKV0gKyBoZXhUYWJsZVsweDgwIHwgKChjID4+IDYpICYgMHgzRildICsgaGV4VGFibGVbMHg4MCB8IChjICYgMHgzRildKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaSArPSAxO1xuICAgICAgICBjID0gMHgxMDAwMCArICgoKGMgJiAweDNGRikgPDwgMTApIHwgKHN0cmluZy5jaGFyQ29kZUF0KGkpICYgMHgzRkYpKTtcbiAgICAgICAgLyogZXNsaW50IG9wZXJhdG9yLWxpbmVicmVhazogWzIsIFwiYmVmb3JlXCJdICovXG4gICAgICAgIG91dCArPSBoZXhUYWJsZVsweEYwIHwgKGMgPj4gMTgpXVxuICAgICAgICAgICAgKyBoZXhUYWJsZVsweDgwIHwgKChjID4+IDEyKSAmIDB4M0YpXVxuICAgICAgICAgICAgKyBoZXhUYWJsZVsweDgwIHwgKChjID4+IDYpICYgMHgzRildXG4gICAgICAgICAgICArIGhleFRhYmxlWzB4ODAgfCAoYyAmIDB4M0YpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufTtcblxudmFyIGNvbXBhY3QgPSBmdW5jdGlvbiBjb21wYWN0KHZhbHVlKSB7XG4gICAgdmFyIHF1ZXVlID0gW3sgb2JqOiB7IG86IHZhbHVlIH0sIHByb3A6ICdvJyB9XTtcbiAgICB2YXIgcmVmcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgaXRlbSA9IHF1ZXVlW2ldO1xuICAgICAgICB2YXIgb2JqID0gaXRlbS5vYmpbaXRlbS5wcm9wXTtcblxuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwga2V5cy5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbal07XG4gICAgICAgICAgICB2YXIgdmFsID0gb2JqW2tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsICE9PSBudWxsICYmIHJlZnMuaW5kZXhPZih2YWwpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goeyBvYmo6IG9iaiwgcHJvcDoga2V5IH0pO1xuICAgICAgICAgICAgICAgIHJlZnMucHVzaCh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGFjdFF1ZXVlKHF1ZXVlKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbn07XG5cbnZhciBpc1JlZ0V4cCA9IGZ1bmN0aW9uIGlzUmVnRXhwKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59O1xuXG52YXIgaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlcihvYmopIHtcbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhKG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iaikpO1xufTtcblxudmFyIGNvbWJpbmUgPSBmdW5jdGlvbiBjb21iaW5lKGEsIGIpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KGEsIGIpO1xufTtcblxudmFyIG1heWJlTWFwID0gZnVuY3Rpb24gbWF5YmVNYXAodmFsLCBmbikge1xuICAgIGlmIChpc0FycmF5KHZhbCkpIHtcbiAgICAgICAgdmFyIG1hcHBlZCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgbWFwcGVkLnB1c2goZm4odmFsW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hcHBlZDtcbiAgICB9XG4gICAgcmV0dXJuIGZuKHZhbCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBhcnJheVRvT2JqZWN0OiBhcnJheVRvT2JqZWN0LFxuICAgIGFzc2lnbjogYXNzaWduLFxuICAgIGNvbWJpbmU6IGNvbWJpbmUsXG4gICAgY29tcGFjdDogY29tcGFjdCxcbiAgICBkZWNvZGU6IGRlY29kZSxcbiAgICBlbmNvZGU6IGVuY29kZSxcbiAgICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gICAgaXNSZWdFeHA6IGlzUmVnRXhwLFxuICAgIG1heWJlTWFwOiBtYXliZU1hcCxcbiAgICBtZXJnZTogbWVyZ2Vcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZXRTaWRlQ2hhbm5lbCA9IHJlcXVpcmUoJ3NpZGUtY2hhbm5lbCcpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGZvcm1hdHMgPSByZXF1aXJlKCcuL2Zvcm1hdHMnKTtcbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgYXJyYXlQcmVmaXhHZW5lcmF0b3JzID0ge1xuICAgIGJyYWNrZXRzOiBmdW5jdGlvbiBicmFja2V0cyhwcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeCArICdbXSc7XG4gICAgfSxcbiAgICBjb21tYTogJ2NvbW1hJyxcbiAgICBpbmRpY2VzOiBmdW5jdGlvbiBpbmRpY2VzKHByZWZpeCwga2V5KSB7XG4gICAgICAgIHJldHVybiBwcmVmaXggKyAnWycgKyBrZXkgKyAnXSc7XG4gICAgfSxcbiAgICByZXBlYXQ6IGZ1bmN0aW9uIHJlcGVhdChwcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICB9XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIgc3BsaXQgPSBTdHJpbmcucHJvdG90eXBlLnNwbGl0O1xudmFyIHB1c2ggPSBBcnJheS5wcm90b3R5cGUucHVzaDtcbnZhciBwdXNoVG9BcnJheSA9IGZ1bmN0aW9uIChhcnIsIHZhbHVlT3JBcnJheSkge1xuICAgIHB1c2guYXBwbHkoYXJyLCBpc0FycmF5KHZhbHVlT3JBcnJheSkgPyB2YWx1ZU9yQXJyYXkgOiBbdmFsdWVPckFycmF5XSk7XG59O1xuXG52YXIgdG9JU08gPSBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZztcblxudmFyIGRlZmF1bHRGb3JtYXQgPSBmb3JtYXRzWydkZWZhdWx0J107XG52YXIgZGVmYXVsdHMgPSB7XG4gICAgYWRkUXVlcnlQcmVmaXg6IGZhbHNlLFxuICAgIGFsbG93RG90czogZmFsc2UsXG4gICAgY2hhcnNldDogJ3V0Zi04JyxcbiAgICBjaGFyc2V0U2VudGluZWw6IGZhbHNlLFxuICAgIGRlbGltaXRlcjogJyYnLFxuICAgIGVuY29kZTogdHJ1ZSxcbiAgICBlbmNvZGVyOiB1dGlscy5lbmNvZGUsXG4gICAgZW5jb2RlVmFsdWVzT25seTogZmFsc2UsXG4gICAgZm9ybWF0OiBkZWZhdWx0Rm9ybWF0LFxuICAgIGZvcm1hdHRlcjogZm9ybWF0cy5mb3JtYXR0ZXJzW2RlZmF1bHRGb3JtYXRdLFxuICAgIC8vIGRlcHJlY2F0ZWRcbiAgICBpbmRpY2VzOiBmYWxzZSxcbiAgICBzZXJpYWxpemVEYXRlOiBmdW5jdGlvbiBzZXJpYWxpemVEYXRlKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRvSVNPLmNhbGwoZGF0ZSk7XG4gICAgfSxcbiAgICBza2lwTnVsbHM6IGZhbHNlLFxuICAgIHN0cmljdE51bGxIYW5kbGluZzogZmFsc2Vcbn07XG5cbnZhciBpc05vbk51bGxpc2hQcmltaXRpdmUgPSBmdW5jdGlvbiBpc05vbk51bGxpc2hQcmltaXRpdmUodikge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ3N0cmluZydcbiAgICAgICAgfHwgdHlwZW9mIHYgPT09ICdudW1iZXInXG4gICAgICAgIHx8IHR5cGVvZiB2ID09PSAnYm9vbGVhbidcbiAgICAgICAgfHwgdHlwZW9mIHYgPT09ICdzeW1ib2wnXG4gICAgICAgIHx8IHR5cGVvZiB2ID09PSAnYmlnaW50Jztcbn07XG5cbnZhciBzZW50aW5lbCA9IHt9O1xuXG52YXIgc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5KFxuICAgIG9iamVjdCxcbiAgICBwcmVmaXgsXG4gICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICBjb21tYVJvdW5kVHJpcCxcbiAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgc2tpcE51bGxzLFxuICAgIGVuY29kZXIsXG4gICAgZmlsdGVyLFxuICAgIHNvcnQsXG4gICAgYWxsb3dEb3RzLFxuICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgZm9ybWF0LFxuICAgIGZvcm1hdHRlcixcbiAgICBlbmNvZGVWYWx1ZXNPbmx5LFxuICAgIGNoYXJzZXQsXG4gICAgc2lkZUNoYW5uZWxcbikge1xuICAgIHZhciBvYmogPSBvYmplY3Q7XG5cbiAgICB2YXIgdG1wU2MgPSBzaWRlQ2hhbm5lbDtcbiAgICB2YXIgc3RlcCA9IDA7XG4gICAgdmFyIGZpbmRGbGFnID0gZmFsc2U7XG4gICAgd2hpbGUgKCh0bXBTYyA9IHRtcFNjLmdldChzZW50aW5lbCkpICE9PSB2b2lkIHVuZGVmaW5lZCAmJiAhZmluZEZsYWcpIHtcbiAgICAgICAgLy8gV2hlcmUgb2JqZWN0IGxhc3QgYXBwZWFyZWQgaW4gdGhlIHJlZiB0cmVlXG4gICAgICAgIHZhciBwb3MgPSB0bXBTYy5nZXQob2JqZWN0KTtcbiAgICAgICAgc3RlcCArPSAxO1xuICAgICAgICBpZiAodHlwZW9mIHBvcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmIChwb3MgPT09IHN0ZXApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQ3ljbGljIG9iamVjdCB2YWx1ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaW5kRmxhZyA9IHRydWU7IC8vIEJyZWFrIHdoaWxlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0bXBTYy5nZXQoc2VudGluZWwpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgc3RlcCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvYmogPSBmaWx0ZXIocHJlZml4LCBvYmopO1xuICAgIH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBvYmogPSBzZXJpYWxpemVEYXRlKG9iaik7XG4gICAgfSBlbHNlIGlmIChnZW5lcmF0ZUFycmF5UHJlZml4ID09PSAnY29tbWEnICYmIGlzQXJyYXkob2JqKSkge1xuICAgICAgICBvYmogPSB1dGlscy5tYXliZU1hcChvYmosIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVEYXRlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgICAgICBpZiAoc3RyaWN0TnVsbEhhbmRsaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZW5jb2RlciAmJiAhZW5jb2RlVmFsdWVzT25seSA/IGVuY29kZXIocHJlZml4LCBkZWZhdWx0cy5lbmNvZGVyLCBjaGFyc2V0LCAna2V5JywgZm9ybWF0KSA6IHByZWZpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9iaiA9ICcnO1xuICAgIH1cblxuICAgIGlmIChpc05vbk51bGxpc2hQcmltaXRpdmUob2JqKSB8fCB1dGlscy5pc0J1ZmZlcihvYmopKSB7XG4gICAgICAgIGlmIChlbmNvZGVyKSB7XG4gICAgICAgICAgICB2YXIga2V5VmFsdWUgPSBlbmNvZGVWYWx1ZXNPbmx5ID8gcHJlZml4IDogZW5jb2RlcihwcmVmaXgsIGRlZmF1bHRzLmVuY29kZXIsIGNoYXJzZXQsICdrZXknLCBmb3JtYXQpO1xuICAgICAgICAgICAgaWYgKGdlbmVyYXRlQXJyYXlQcmVmaXggPT09ICdjb21tYScgJiYgZW5jb2RlVmFsdWVzT25seSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZXNBcnJheSA9IHNwbGl0LmNhbGwoU3RyaW5nKG9iaiksICcsJyk7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlc0pvaW5lZCA9ICcnO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWVzQXJyYXkubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzSm9pbmVkICs9IChpID09PSAwID8gJycgOiAnLCcpICsgZm9ybWF0dGVyKGVuY29kZXIodmFsdWVzQXJyYXlbaV0sIGRlZmF1bHRzLmVuY29kZXIsIGNoYXJzZXQsICd2YWx1ZScsIGZvcm1hdCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gW2Zvcm1hdHRlcihrZXlWYWx1ZSkgKyAoY29tbWFSb3VuZFRyaXAgJiYgaXNBcnJheShvYmopICYmIHZhbHVlc0FycmF5Lmxlbmd0aCA9PT0gMSA/ICdbXScgOiAnJykgKyAnPScgKyB2YWx1ZXNKb2luZWRdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtmb3JtYXR0ZXIoa2V5VmFsdWUpICsgJz0nICsgZm9ybWF0dGVyKGVuY29kZXIob2JqLCBkZWZhdWx0cy5lbmNvZGVyLCBjaGFyc2V0LCAndmFsdWUnLCBmb3JtYXQpKV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtmb3JtYXR0ZXIocHJlZml4KSArICc9JyArIGZvcm1hdHRlcihTdHJpbmcob2JqKSldO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cblxuICAgIHZhciBvYmpLZXlzO1xuICAgIGlmIChnZW5lcmF0ZUFycmF5UHJlZml4ID09PSAnY29tbWEnICYmIGlzQXJyYXkob2JqKSkge1xuICAgICAgICAvLyB3ZSBuZWVkIHRvIGpvaW4gZWxlbWVudHMgaW5cbiAgICAgICAgb2JqS2V5cyA9IFt7IHZhbHVlOiBvYmoubGVuZ3RoID4gMCA/IG9iai5qb2luKCcsJykgfHwgbnVsbCA6IHZvaWQgdW5kZWZpbmVkIH1dO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShmaWx0ZXIpKSB7XG4gICAgICAgIG9iaktleXMgPSBmaWx0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICBvYmpLZXlzID0gc29ydCA/IGtleXMuc29ydChzb3J0KSA6IGtleXM7XG4gICAgfVxuXG4gICAgdmFyIGFkanVzdGVkUHJlZml4ID0gY29tbWFSb3VuZFRyaXAgJiYgaXNBcnJheShvYmopICYmIG9iai5sZW5ndGggPT09IDEgPyBwcmVmaXggKyAnW10nIDogcHJlZml4O1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBvYmpLZXlzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgIHZhciBrZXkgPSBvYmpLZXlzW2pdO1xuICAgICAgICB2YXIgdmFsdWUgPSB0eXBlb2Yga2V5ID09PSAnb2JqZWN0JyAmJiB0eXBlb2Yga2V5LnZhbHVlICE9PSAndW5kZWZpbmVkJyA/IGtleS52YWx1ZSA6IG9ialtrZXldO1xuXG4gICAgICAgIGlmIChza2lwTnVsbHMgJiYgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGtleVByZWZpeCA9IGlzQXJyYXkob2JqKVxuICAgICAgICAgICAgPyB0eXBlb2YgZ2VuZXJhdGVBcnJheVByZWZpeCA9PT0gJ2Z1bmN0aW9uJyA/IGdlbmVyYXRlQXJyYXlQcmVmaXgoYWRqdXN0ZWRQcmVmaXgsIGtleSkgOiBhZGp1c3RlZFByZWZpeFxuICAgICAgICAgICAgOiBhZGp1c3RlZFByZWZpeCArIChhbGxvd0RvdHMgPyAnLicgKyBrZXkgOiAnWycgKyBrZXkgKyAnXScpO1xuXG4gICAgICAgIHNpZGVDaGFubmVsLnNldChvYmplY3QsIHN0ZXApO1xuICAgICAgICB2YXIgdmFsdWVTaWRlQ2hhbm5lbCA9IGdldFNpZGVDaGFubmVsKCk7XG4gICAgICAgIHZhbHVlU2lkZUNoYW5uZWwuc2V0KHNlbnRpbmVsLCBzaWRlQ2hhbm5lbCk7XG4gICAgICAgIHB1c2hUb0FycmF5KHZhbHVlcywgc3RyaW5naWZ5KFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBrZXlQcmVmaXgsXG4gICAgICAgICAgICBnZW5lcmF0ZUFycmF5UHJlZml4LFxuICAgICAgICAgICAgY29tbWFSb3VuZFRyaXAsXG4gICAgICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgICAgICAgICBza2lwTnVsbHMsXG4gICAgICAgICAgICBlbmNvZGVyLFxuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgc29ydCxcbiAgICAgICAgICAgIGFsbG93RG90cyxcbiAgICAgICAgICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICBmb3JtYXQsXG4gICAgICAgICAgICBmb3JtYXR0ZXIsXG4gICAgICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5LFxuICAgICAgICAgICAgY2hhcnNldCxcbiAgICAgICAgICAgIHZhbHVlU2lkZUNoYW5uZWxcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbn07XG5cbnZhciBub3JtYWxpemVTdHJpbmdpZnlPcHRpb25zID0gZnVuY3Rpb24gbm9ybWFsaXplU3RyaW5naWZ5T3B0aW9ucyhvcHRzKSB7XG4gICAgaWYgKCFvcHRzKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICBpZiAob3B0cy5lbmNvZGVyICE9PSBudWxsICYmIHR5cGVvZiBvcHRzLmVuY29kZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBvcHRzLmVuY29kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRW5jb2RlciBoYXMgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICB2YXIgY2hhcnNldCA9IG9wdHMuY2hhcnNldCB8fCBkZWZhdWx0cy5jaGFyc2V0O1xuICAgIGlmICh0eXBlb2Ygb3B0cy5jaGFyc2V0ICE9PSAndW5kZWZpbmVkJyAmJiBvcHRzLmNoYXJzZXQgIT09ICd1dGYtOCcgJiYgb3B0cy5jaGFyc2V0ICE9PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGNoYXJzZXQgb3B0aW9uIG11c3QgYmUgZWl0aGVyIHV0Zi04LCBpc28tODg1OS0xLCBvciB1bmRlZmluZWQnKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0ID0gZm9ybWF0c1snZGVmYXVsdCddO1xuICAgIGlmICh0eXBlb2Ygb3B0cy5mb3JtYXQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmICghaGFzLmNhbGwoZm9ybWF0cy5mb3JtYXR0ZXJzLCBvcHRzLmZvcm1hdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZm9ybWF0IG9wdGlvbiBwcm92aWRlZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtYXQgPSBvcHRzLmZvcm1hdDtcbiAgICB9XG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHMuZm9ybWF0dGVyc1tmb3JtYXRdO1xuXG4gICAgdmFyIGZpbHRlciA9IGRlZmF1bHRzLmZpbHRlcjtcbiAgICBpZiAodHlwZW9mIG9wdHMuZmlsdGVyID09PSAnZnVuY3Rpb24nIHx8IGlzQXJyYXkob3B0cy5maWx0ZXIpKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdHMuZmlsdGVyO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFF1ZXJ5UHJlZml4OiB0eXBlb2Ygb3B0cy5hZGRRdWVyeVByZWZpeCA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5hZGRRdWVyeVByZWZpeCA6IGRlZmF1bHRzLmFkZFF1ZXJ5UHJlZml4LFxuICAgICAgICBhbGxvd0RvdHM6IHR5cGVvZiBvcHRzLmFsbG93RG90cyA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5hbGxvd0RvdHMgOiAhIW9wdHMuYWxsb3dEb3RzLFxuICAgICAgICBjaGFyc2V0OiBjaGFyc2V0LFxuICAgICAgICBjaGFyc2V0U2VudGluZWw6IHR5cGVvZiBvcHRzLmNoYXJzZXRTZW50aW5lbCA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5jaGFyc2V0U2VudGluZWwgOiBkZWZhdWx0cy5jaGFyc2V0U2VudGluZWwsXG4gICAgICAgIGRlbGltaXRlcjogdHlwZW9mIG9wdHMuZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRzLmRlbGltaXRlciA6IG9wdHMuZGVsaW1pdGVyLFxuICAgICAgICBlbmNvZGU6IHR5cGVvZiBvcHRzLmVuY29kZSA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5lbmNvZGUgOiBkZWZhdWx0cy5lbmNvZGUsXG4gICAgICAgIGVuY29kZXI6IHR5cGVvZiBvcHRzLmVuY29kZXIgPT09ICdmdW5jdGlvbicgPyBvcHRzLmVuY29kZXIgOiBkZWZhdWx0cy5lbmNvZGVyLFxuICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5OiB0eXBlb2Ygb3B0cy5lbmNvZGVWYWx1ZXNPbmx5ID09PSAnYm9vbGVhbicgPyBvcHRzLmVuY29kZVZhbHVlc09ubHkgOiBkZWZhdWx0cy5lbmNvZGVWYWx1ZXNPbmx5LFxuICAgICAgICBmaWx0ZXI6IGZpbHRlcixcbiAgICAgICAgZm9ybWF0OiBmb3JtYXQsXG4gICAgICAgIGZvcm1hdHRlcjogZm9ybWF0dGVyLFxuICAgICAgICBzZXJpYWxpemVEYXRlOiB0eXBlb2Ygb3B0cy5zZXJpYWxpemVEYXRlID09PSAnZnVuY3Rpb24nID8gb3B0cy5zZXJpYWxpemVEYXRlIDogZGVmYXVsdHMuc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgc2tpcE51bGxzOiB0eXBlb2Ygb3B0cy5za2lwTnVsbHMgPT09ICdib29sZWFuJyA/IG9wdHMuc2tpcE51bGxzIDogZGVmYXVsdHMuc2tpcE51bGxzLFxuICAgICAgICBzb3J0OiB0eXBlb2Ygb3B0cy5zb3J0ID09PSAnZnVuY3Rpb24nID8gb3B0cy5zb3J0IDogbnVsbCxcbiAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nOiB0eXBlb2Ygb3B0cy5zdHJpY3ROdWxsSGFuZGxpbmcgPT09ICdib29sZWFuJyA/IG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nIDogZGVmYXVsdHMuc3RyaWN0TnVsbEhhbmRsaW5nXG4gICAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgb3B0cykge1xuICAgIHZhciBvYmogPSBvYmplY3Q7XG4gICAgdmFyIG9wdGlvbnMgPSBub3JtYWxpemVTdHJpbmdpZnlPcHRpb25zKG9wdHMpO1xuXG4gICAgdmFyIG9iaktleXM7XG4gICAgdmFyIGZpbHRlcjtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5maWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7XG4gICAgICAgIG9iaiA9IGZpbHRlcignJywgb2JqKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob3B0aW9ucy5maWx0ZXIpKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICB2YXIgYXJyYXlGb3JtYXQ7XG4gICAgaWYgKG9wdHMgJiYgb3B0cy5hcnJheUZvcm1hdCBpbiBhcnJheVByZWZpeEdlbmVyYXRvcnMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRzLmFycmF5Rm9ybWF0O1xuICAgIH0gZWxzZSBpZiAob3B0cyAmJiAnaW5kaWNlcycgaW4gb3B0cykge1xuICAgICAgICBhcnJheUZvcm1hdCA9IG9wdHMuaW5kaWNlcyA/ICdpbmRpY2VzJyA6ICdyZXBlYXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gJ2luZGljZXMnO1xuICAgIH1cblxuICAgIHZhciBnZW5lcmF0ZUFycmF5UHJlZml4ID0gYXJyYXlQcmVmaXhHZW5lcmF0b3JzW2FycmF5Rm9ybWF0XTtcbiAgICBpZiAob3B0cyAmJiAnY29tbWFSb3VuZFRyaXAnIGluIG9wdHMgJiYgdHlwZW9mIG9wdHMuY29tbWFSb3VuZFRyaXAgIT09ICdib29sZWFuJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdgY29tbWFSb3VuZFRyaXBgIG11c3QgYmUgYSBib29sZWFuLCBvciBhYnNlbnQnKTtcbiAgICB9XG4gICAgdmFyIGNvbW1hUm91bmRUcmlwID0gZ2VuZXJhdGVBcnJheVByZWZpeCA9PT0gJ2NvbW1hJyAmJiBvcHRzICYmIG9wdHMuY29tbWFSb3VuZFRyaXA7XG5cbiAgICBpZiAoIW9iaktleXMpIHtcbiAgICAgICAgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc29ydCkge1xuICAgICAgICBvYmpLZXlzLnNvcnQob3B0aW9ucy5zb3J0KTtcbiAgICB9XG5cbiAgICB2YXIgc2lkZUNoYW5uZWwgPSBnZXRTaWRlQ2hhbm5lbCgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqS2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgICAgICBpZiAob3B0aW9ucy5za2lwTnVsbHMgJiYgb2JqW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHB1c2hUb0FycmF5KGtleXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgIG9ialtrZXldLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgIGNvbW1hUm91bmRUcmlwLFxuICAgICAgICAgICAgb3B0aW9ucy5zdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgICAgICAgICBvcHRpb25zLnNraXBOdWxscyxcbiAgICAgICAgICAgIG9wdGlvbnMuZW5jb2RlID8gb3B0aW9ucy5lbmNvZGVyIDogbnVsbCxcbiAgICAgICAgICAgIG9wdGlvbnMuZmlsdGVyLFxuICAgICAgICAgICAgb3B0aW9ucy5zb3J0LFxuICAgICAgICAgICAgb3B0aW9ucy5hbGxvd0RvdHMsXG4gICAgICAgICAgICBvcHRpb25zLnNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICBvcHRpb25zLmZvcm1hdCxcbiAgICAgICAgICAgIG9wdGlvbnMuZm9ybWF0dGVyLFxuICAgICAgICAgICAgb3B0aW9ucy5lbmNvZGVWYWx1ZXNPbmx5LFxuICAgICAgICAgICAgb3B0aW9ucy5jaGFyc2V0LFxuICAgICAgICAgICAgc2lkZUNoYW5uZWxcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgdmFyIGpvaW5lZCA9IGtleXMuam9pbihvcHRpb25zLmRlbGltaXRlcik7XG4gICAgdmFyIHByZWZpeCA9IG9wdGlvbnMuYWRkUXVlcnlQcmVmaXggPT09IHRydWUgPyAnPycgOiAnJztcblxuICAgIGlmIChvcHRpb25zLmNoYXJzZXRTZW50aW5lbCkge1xuICAgICAgICBpZiAob3B0aW9ucy5jaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgICAgIC8vIGVuY29kZVVSSUNvbXBvbmVudCgnJiMxMDAwMzsnKSwgdGhlIFwibnVtZXJpYyBlbnRpdHlcIiByZXByZXNlbnRhdGlvbiBvZiBhIGNoZWNrbWFya1xuICAgICAgICAgICAgcHJlZml4ICs9ICd1dGY4PSUyNiUyMzEwMDAzJTNCJic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBlbmNvZGVVUklDb21wb25lbnQoJ+KckycpXG4gICAgICAgICAgICBwcmVmaXggKz0gJ3V0Zjg9JUUyJTlDJTkzJic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gam9pbmVkLmxlbmd0aCA+IDAgPyBwcmVmaXggKyBqb2luZWQgOiAnJztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgICBhbGxvd0RvdHM6IGZhbHNlLFxuICAgIGFsbG93UHJvdG90eXBlczogZmFsc2UsXG4gICAgYWxsb3dTcGFyc2U6IGZhbHNlLFxuICAgIGFycmF5TGltaXQ6IDIwLFxuICAgIGNoYXJzZXQ6ICd1dGYtOCcsXG4gICAgY2hhcnNldFNlbnRpbmVsOiBmYWxzZSxcbiAgICBjb21tYTogZmFsc2UsXG4gICAgZGVjb2RlcjogdXRpbHMuZGVjb2RlLFxuICAgIGRlbGltaXRlcjogJyYnLFxuICAgIGRlcHRoOiA1LFxuICAgIGlnbm9yZVF1ZXJ5UHJlZml4OiBmYWxzZSxcbiAgICBpbnRlcnByZXROdW1lcmljRW50aXRpZXM6IGZhbHNlLFxuICAgIHBhcmFtZXRlckxpbWl0OiAxMDAwLFxuICAgIHBhcnNlQXJyYXlzOiB0cnVlLFxuICAgIHBsYWluT2JqZWN0czogZmFsc2UsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nOiBmYWxzZVxufTtcblxudmFyIGludGVycHJldE51bWVyaWNFbnRpdGllcyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYjKFxcZCspOy9nLCBmdW5jdGlvbiAoJDAsIG51bWJlclN0cikge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChudW1iZXJTdHIsIDEwKSk7XG4gICAgfSk7XG59O1xuXG52YXIgcGFyc2VBcnJheVZhbHVlID0gZnVuY3Rpb24gKHZhbCwgb3B0aW9ucykge1xuICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5jb21tYSAmJiB2YWwuaW5kZXhPZignLCcpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHZhbC5zcGxpdCgnLCcpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWw7XG59O1xuXG4vLyBUaGlzIGlzIHdoYXQgYnJvd3NlcnMgd2lsbCBzdWJtaXQgd2hlbiB0aGUg4pyTIGNoYXJhY3RlciBvY2N1cnMgaW4gYW5cbi8vIGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCBib2R5IGFuZCB0aGUgZW5jb2Rpbmcgb2YgdGhlIHBhZ2UgY29udGFpbmluZ1xuLy8gdGhlIGZvcm0gaXMgaXNvLTg4NTktMSwgb3Igd2hlbiB0aGUgc3VibWl0dGVkIGZvcm0gaGFzIGFuIGFjY2VwdC1jaGFyc2V0XG4vLyBhdHRyaWJ1dGUgb2YgaXNvLTg4NTktMS4gUHJlc3VtYWJseSBhbHNvIHdpdGggb3RoZXIgY2hhcnNldHMgdGhhdCBkbyBub3QgY29udGFpblxuLy8gdGhlIOKckyBjaGFyYWN0ZXIsIHN1Y2ggYXMgdXMtYXNjaWkuXG52YXIgaXNvU2VudGluZWwgPSAndXRmOD0lMjYlMjMxMDAwMyUzQic7IC8vIGVuY29kZVVSSUNvbXBvbmVudCgnJiMxMDAwMzsnKVxuXG4vLyBUaGVzZSBhcmUgdGhlIHBlcmNlbnQtZW5jb2RlZCB1dGYtOCBvY3RldHMgcmVwcmVzZW50aW5nIGEgY2hlY2ttYXJrLCBpbmRpY2F0aW5nIHRoYXQgdGhlIHJlcXVlc3QgYWN0dWFsbHkgaXMgdXRmLTggZW5jb2RlZC5cbnZhciBjaGFyc2V0U2VudGluZWwgPSAndXRmOD0lRTIlOUMlOTMnOyAvLyBlbmNvZGVVUklDb21wb25lbnQoJ+KckycpXG5cbnZhciBwYXJzZVZhbHVlcyA9IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmdWYWx1ZXMoc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIHZhciBjbGVhblN0ciA9IG9wdGlvbnMuaWdub3JlUXVlcnlQcmVmaXggPyBzdHIucmVwbGFjZSgvXlxcPy8sICcnKSA6IHN0cjtcbiAgICB2YXIgbGltaXQgPSBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID09PSBJbmZpbml0eSA/IHVuZGVmaW5lZCA6IG9wdGlvbnMucGFyYW1ldGVyTGltaXQ7XG4gICAgdmFyIHBhcnRzID0gY2xlYW5TdHIuc3BsaXQob3B0aW9ucy5kZWxpbWl0ZXIsIGxpbWl0KTtcbiAgICB2YXIgc2tpcEluZGV4ID0gLTE7IC8vIEtlZXAgdHJhY2sgb2Ygd2hlcmUgdGhlIHV0Zjggc2VudGluZWwgd2FzIGZvdW5kXG4gICAgdmFyIGk7XG5cbiAgICB2YXIgY2hhcnNldCA9IG9wdGlvbnMuY2hhcnNldDtcbiAgICBpZiAob3B0aW9ucy5jaGFyc2V0U2VudGluZWwpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAocGFydHNbaV0uaW5kZXhPZigndXRmOD0nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0c1tpXSA9PT0gY2hhcnNldFNlbnRpbmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJzZXQgPSAndXRmLTgnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydHNbaV0gPT09IGlzb1NlbnRpbmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJzZXQgPSAnaXNvLTg4NTktMSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNraXBJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgaSA9IHBhcnRzLmxlbmd0aDsgLy8gVGhlIGVzbGludCBzZXR0aW5ncyBkbyBub3QgYWxsb3cgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKGkgPT09IHNraXBJbmRleCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcblxuICAgICAgICB2YXIgYnJhY2tldEVxdWFsc1BvcyA9IHBhcnQuaW5kZXhPZignXT0nKTtcbiAgICAgICAgdmFyIHBvcyA9IGJyYWNrZXRFcXVhbHNQb3MgPT09IC0xID8gcGFydC5pbmRleE9mKCc9JykgOiBicmFja2V0RXF1YWxzUG9zICsgMTtcblxuICAgICAgICB2YXIga2V5LCB2YWw7XG4gICAgICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICAgICAgICBrZXkgPSBvcHRpb25zLmRlY29kZXIocGFydCwgZGVmYXVsdHMuZGVjb2RlciwgY2hhcnNldCwgJ2tleScpO1xuICAgICAgICAgICAgdmFsID0gb3B0aW9ucy5zdHJpY3ROdWxsSGFuZGxpbmcgPyBudWxsIDogJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBrZXkgPSBvcHRpb25zLmRlY29kZXIocGFydC5zbGljZSgwLCBwb3MpLCBkZWZhdWx0cy5kZWNvZGVyLCBjaGFyc2V0LCAna2V5Jyk7XG4gICAgICAgICAgICB2YWwgPSB1dGlscy5tYXliZU1hcChcbiAgICAgICAgICAgICAgICBwYXJzZUFycmF5VmFsdWUocGFydC5zbGljZShwb3MgKyAxKSwgb3B0aW9ucyksXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVuY29kZWRWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZGVjb2RlcihlbmNvZGVkVmFsLCBkZWZhdWx0cy5kZWNvZGVyLCBjaGFyc2V0LCAndmFsdWUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbCAmJiBvcHRpb25zLmludGVycHJldE51bWVyaWNFbnRpdGllcyAmJiBjaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgICAgIHZhbCA9IGludGVycHJldE51bWVyaWNFbnRpdGllcyh2YWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnQuaW5kZXhPZignW109JykgPiAtMSkge1xuICAgICAgICAgICAgdmFsID0gaXNBcnJheSh2YWwpID8gW3ZhbF0gOiB2YWw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzLmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IHV0aWxzLmNvbWJpbmUob2JqW2tleV0sIHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG52YXIgcGFyc2VPYmplY3QgPSBmdW5jdGlvbiAoY2hhaW4sIHZhbCwgb3B0aW9ucywgdmFsdWVzUGFyc2VkKSB7XG4gICAgdmFyIGxlYWYgPSB2YWx1ZXNQYXJzZWQgPyB2YWwgOiBwYXJzZUFycmF5VmFsdWUodmFsLCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIGkgPSBjaGFpbi5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgb2JqO1xuICAgICAgICB2YXIgcm9vdCA9IGNoYWluW2ldO1xuXG4gICAgICAgIGlmIChyb290ID09PSAnW10nICYmIG9wdGlvbnMucGFyc2VBcnJheXMpIHtcbiAgICAgICAgICAgIG9iaiA9IFtdLmNvbmNhdChsZWFmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9iaiA9IG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuICAgICAgICAgICAgdmFyIGNsZWFuUm9vdCA9IHJvb3QuY2hhckF0KDApID09PSAnWycgJiYgcm9vdC5jaGFyQXQocm9vdC5sZW5ndGggLSAxKSA9PT0gJ10nID8gcm9vdC5zbGljZSgxLCAtMSkgOiByb290O1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoY2xlYW5Sb290LCAxMCk7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMucGFyc2VBcnJheXMgJiYgY2xlYW5Sb290ID09PSAnJykge1xuICAgICAgICAgICAgICAgIG9iaiA9IHsgMDogbGVhZiB9O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAhaXNOYU4oaW5kZXgpXG4gICAgICAgICAgICAgICAgJiYgcm9vdCAhPT0gY2xlYW5Sb290XG4gICAgICAgICAgICAgICAgJiYgU3RyaW5nKGluZGV4KSA9PT0gY2xlYW5Sb290XG4gICAgICAgICAgICAgICAgJiYgaW5kZXggPj0gMFxuICAgICAgICAgICAgICAgICYmIChvcHRpb25zLnBhcnNlQXJyYXlzICYmIGluZGV4IDw9IG9wdGlvbnMuYXJyYXlMaW1pdClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIG9iaiA9IFtdO1xuICAgICAgICAgICAgICAgIG9ialtpbmRleF0gPSBsZWFmO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjbGVhblJvb3QgIT09ICdfX3Byb3RvX18nKSB7XG4gICAgICAgICAgICAgICAgb2JqW2NsZWFuUm9vdF0gPSBsZWFmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGVhZiA9IG9iajtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVhZjtcbn07XG5cbnZhciBwYXJzZUtleXMgPSBmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nS2V5cyhnaXZlbktleSwgdmFsLCBvcHRpb25zLCB2YWx1ZXNQYXJzZWQpIHtcbiAgICBpZiAoIWdpdmVuS2V5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUcmFuc2Zvcm0gZG90IG5vdGF0aW9uIHRvIGJyYWNrZXQgbm90YXRpb25cbiAgICB2YXIga2V5ID0gb3B0aW9ucy5hbGxvd0RvdHMgPyBnaXZlbktleS5yZXBsYWNlKC9cXC4oW14uW10rKS9nLCAnWyQxXScpIDogZ2l2ZW5LZXk7XG5cbiAgICAvLyBUaGUgcmVnZXggY2h1bmtzXG5cbiAgICB2YXIgYnJhY2tldHMgPSAvKFxcW1teW1xcXV0qXSkvO1xuICAgIHZhciBjaGlsZCA9IC8oXFxbW15bXFxdXSpdKS9nO1xuXG4gICAgLy8gR2V0IHRoZSBwYXJlbnRcblxuICAgIHZhciBzZWdtZW50ID0gb3B0aW9ucy5kZXB0aCA+IDAgJiYgYnJhY2tldHMuZXhlYyhrZXkpO1xuICAgIHZhciBwYXJlbnQgPSBzZWdtZW50ID8ga2V5LnNsaWNlKDAsIHNlZ21lbnQuaW5kZXgpIDoga2V5O1xuXG4gICAgLy8gU3Rhc2ggdGhlIHBhcmVudCBpZiBpdCBleGlzdHNcblxuICAgIHZhciBrZXlzID0gW107XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgICAvLyBJZiB3ZSBhcmVuJ3QgdXNpbmcgcGxhaW4gb2JqZWN0cywgb3B0aW9uYWxseSBwcmVmaXgga2V5cyB0aGF0IHdvdWxkIG92ZXJ3cml0ZSBvYmplY3QgcHJvdG90eXBlIHByb3BlcnRpZXNcbiAgICAgICAgaWYgKCFvcHRpb25zLnBsYWluT2JqZWN0cyAmJiBoYXMuY2FsbChPYmplY3QucHJvdG90eXBlLCBwYXJlbnQpKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAga2V5cy5wdXNoKHBhcmVudCk7XG4gICAgfVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGNoaWxkcmVuIGFwcGVuZGluZyB0byB0aGUgYXJyYXkgdW50aWwgd2UgaGl0IGRlcHRoXG5cbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKG9wdGlvbnMuZGVwdGggPiAwICYmIChzZWdtZW50ID0gY2hpbGQuZXhlYyhrZXkpKSAhPT0gbnVsbCAmJiBpIDwgb3B0aW9ucy5kZXB0aCkge1xuICAgICAgICBpICs9IDE7XG4gICAgICAgIGlmICghb3B0aW9ucy5wbGFpbk9iamVjdHMgJiYgaGFzLmNhbGwoT2JqZWN0LnByb3RvdHlwZSwgc2VnbWVudFsxXS5zbGljZSgxLCAtMSkpKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGtleXMucHVzaChzZWdtZW50WzFdKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSdzIGEgcmVtYWluZGVyLCBqdXN0IGFkZCB3aGF0ZXZlciBpcyBsZWZ0XG5cbiAgICBpZiAoc2VnbWVudCkge1xuICAgICAgICBrZXlzLnB1c2goJ1snICsga2V5LnNsaWNlKHNlZ21lbnQuaW5kZXgpICsgJ10nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VPYmplY3Qoa2V5cywgdmFsLCBvcHRpb25zLCB2YWx1ZXNQYXJzZWQpO1xufTtcblxudmFyIG5vcm1hbGl6ZVBhcnNlT3B0aW9ucyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVBhcnNlT3B0aW9ucyhvcHRzKSB7XG4gICAgaWYgKCFvcHRzKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICBpZiAob3B0cy5kZWNvZGVyICE9PSBudWxsICYmIG9wdHMuZGVjb2RlciAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvcHRzLmRlY29kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRGVjb2RlciBoYXMgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdHMuY2hhcnNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0cy5jaGFyc2V0ICE9PSAndXRmLTgnICYmIG9wdHMuY2hhcnNldCAhPT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjaGFyc2V0IG9wdGlvbiBtdXN0IGJlIGVpdGhlciB1dGYtOCwgaXNvLTg4NTktMSwgb3IgdW5kZWZpbmVkJyk7XG4gICAgfVxuICAgIHZhciBjaGFyc2V0ID0gdHlwZW9mIG9wdHMuY2hhcnNldCA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5jaGFyc2V0IDogb3B0cy5jaGFyc2V0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWxsb3dEb3RzOiB0eXBlb2Ygb3B0cy5hbGxvd0RvdHMgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuYWxsb3dEb3RzIDogISFvcHRzLmFsbG93RG90cyxcbiAgICAgICAgYWxsb3dQcm90b3R5cGVzOiB0eXBlb2Ygb3B0cy5hbGxvd1Byb3RvdHlwZXMgPT09ICdib29sZWFuJyA/IG9wdHMuYWxsb3dQcm90b3R5cGVzIDogZGVmYXVsdHMuYWxsb3dQcm90b3R5cGVzLFxuICAgICAgICBhbGxvd1NwYXJzZTogdHlwZW9mIG9wdHMuYWxsb3dTcGFyc2UgPT09ICdib29sZWFuJyA/IG9wdHMuYWxsb3dTcGFyc2UgOiBkZWZhdWx0cy5hbGxvd1NwYXJzZSxcbiAgICAgICAgYXJyYXlMaW1pdDogdHlwZW9mIG9wdHMuYXJyYXlMaW1pdCA9PT0gJ251bWJlcicgPyBvcHRzLmFycmF5TGltaXQgOiBkZWZhdWx0cy5hcnJheUxpbWl0LFxuICAgICAgICBjaGFyc2V0OiBjaGFyc2V0LFxuICAgICAgICBjaGFyc2V0U2VudGluZWw6IHR5cGVvZiBvcHRzLmNoYXJzZXRTZW50aW5lbCA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5jaGFyc2V0U2VudGluZWwgOiBkZWZhdWx0cy5jaGFyc2V0U2VudGluZWwsXG4gICAgICAgIGNvbW1hOiB0eXBlb2Ygb3B0cy5jb21tYSA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5jb21tYSA6IGRlZmF1bHRzLmNvbW1hLFxuICAgICAgICBkZWNvZGVyOiB0eXBlb2Ygb3B0cy5kZWNvZGVyID09PSAnZnVuY3Rpb24nID8gb3B0cy5kZWNvZGVyIDogZGVmYXVsdHMuZGVjb2RlcixcbiAgICAgICAgZGVsaW1pdGVyOiB0eXBlb2Ygb3B0cy5kZWxpbWl0ZXIgPT09ICdzdHJpbmcnIHx8IHV0aWxzLmlzUmVnRXhwKG9wdHMuZGVsaW1pdGVyKSA/IG9wdHMuZGVsaW1pdGVyIDogZGVmYXVsdHMuZGVsaW1pdGVyLFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8taW1wbGljaXQtY29lcmNpb24sIG5vLWV4dHJhLXBhcmVuc1xuICAgICAgICBkZXB0aDogKHR5cGVvZiBvcHRzLmRlcHRoID09PSAnbnVtYmVyJyB8fCBvcHRzLmRlcHRoID09PSBmYWxzZSkgPyArb3B0cy5kZXB0aCA6IGRlZmF1bHRzLmRlcHRoLFxuICAgICAgICBpZ25vcmVRdWVyeVByZWZpeDogb3B0cy5pZ25vcmVRdWVyeVByZWZpeCA9PT0gdHJ1ZSxcbiAgICAgICAgaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzOiB0eXBlb2Ygb3B0cy5pbnRlcnByZXROdW1lcmljRW50aXRpZXMgPT09ICdib29sZWFuJyA/IG9wdHMuaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzIDogZGVmYXVsdHMuaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzLFxuICAgICAgICBwYXJhbWV0ZXJMaW1pdDogdHlwZW9mIG9wdHMucGFyYW1ldGVyTGltaXQgPT09ICdudW1iZXInID8gb3B0cy5wYXJhbWV0ZXJMaW1pdCA6IGRlZmF1bHRzLnBhcmFtZXRlckxpbWl0LFxuICAgICAgICBwYXJzZUFycmF5czogb3B0cy5wYXJzZUFycmF5cyAhPT0gZmFsc2UsXG4gICAgICAgIHBsYWluT2JqZWN0czogdHlwZW9mIG9wdHMucGxhaW5PYmplY3RzID09PSAnYm9vbGVhbicgPyBvcHRzLnBsYWluT2JqZWN0cyA6IGRlZmF1bHRzLnBsYWluT2JqZWN0cyxcbiAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nOiB0eXBlb2Ygb3B0cy5zdHJpY3ROdWxsSGFuZGxpbmcgPT09ICdib29sZWFuJyA/IG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nIDogZGVmYXVsdHMuc3RyaWN0TnVsbEhhbmRsaW5nXG4gICAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0ciwgb3B0cykge1xuICAgIHZhciBvcHRpb25zID0gbm9ybWFsaXplUGFyc2VPcHRpb25zKG9wdHMpO1xuXG4gICAgaWYgKHN0ciA9PT0gJycgfHwgc3RyID09PSBudWxsIHx8IHR5cGVvZiBzdHIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcbiAgICB9XG5cbiAgICB2YXIgdGVtcE9iaiA9IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gcGFyc2VWYWx1ZXMoc3RyLCBvcHRpb25zKSA6IHN0cjtcbiAgICB2YXIgb2JqID0gb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIGtleXMgYW5kIHNldHVwIHRoZSBuZXcgb2JqZWN0XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRlbXBPYmopO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFyIG5ld09iaiA9IHBhcnNlS2V5cyhrZXksIHRlbXBPYmpba2V5XSwgb3B0aW9ucywgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpO1xuICAgICAgICBvYmogPSB1dGlscy5tZXJnZShvYmosIG5ld09iaiwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuYWxsb3dTcGFyc2UgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICByZXR1cm4gdXRpbHMuY29tcGFjdChvYmopO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vc3RyaW5naWZ5Jyk7XG52YXIgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJyk7XG52YXIgZm9ybWF0cyA9IHJlcXVpcmUoJy4vZm9ybWF0cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmb3JtYXRzOiBmb3JtYXRzLFxuICAgIHBhcnNlOiBwYXJzZSxcbiAgICBzdHJpbmdpZnk6IHN0cmluZ2lmeVxufTtcbiIsImltcG9ydCBxcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdxcyc7XG5cbmltcG9ydCB7IHVzZUFjY291bnRTdG9yZSB9ICAgICAgICAgICAgICBmcm9tICdzcmMvc3RvcmVzL2FjY291bnQuc3RvcmUnO1xuaW1wb3J0IHsgdXNlRGF0YVN0b3JlIH0gICAgICAgICAgICAgICAgIGZyb20gJ3NyYy9zdG9yZXMvZGF0YS5zdG9yZSc7XG5cbmltcG9ydCBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgZGVidWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnZGVidWcnO1xuY29uc3QgbG9nICAgICAgICAgPSBkZWJ1ZygnYXBwOmdsb2JhbFZpZXcnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2xvYmFsVmlldyggeyBjb2xsTmFtZSwgc3RhdGVOYW1lLCBkZWZhdWx0Rm9ybSA9IHt9IH06IHsgY29sbE5hbWU6IHN0cmluZywgc3RhdGVOYW1lOiBzdHJpbmcsIGRlZmF1bHRmb3JtPzogYW55IH0gKSB7XG5cbiAgICBsb2coICduZXcgaW5zdGFuY2Ugbm9ybWFsJywgc3RhdGVOYW1lLCBjb2xsTmFtZSApO1xuXG4gICAgLy8gZGVmYXVsdCBmb3JtXG4gICAgY29uc3QgZm9ybSAgICAgICAgID0gcmVmKCBkZWZhdWx0Rm9ybSApO1xuXG4gICAgLy8gZ2V0IHVzZXJcbiAgICBjb25zdCB7IHVzZXIgfSAgICAgPSB1c2VBY2NvdW50U3RvcmUoKTtcbiAgICBcbiAgICAvLyBnZXQgc3RvcmVcbiAgICBjb25zdCBzdG9yZSAgICAgICAgID0gdXNlRGF0YVN0b3JlKCBfLnVuaXF1ZUlkKCBzdGF0ZU5hbWUgKSwgY29sbE5hbWUgKTtcblxuICAgIC8vIGdldCBkYXRhIGZyb20gc3RvcmVcbiAgICBjb25zdCB7IF9kYXRhOiBkYXRhIH0gICAgICAgPSBzdG9yZTtcblxuICAgIC8vIGRlZmF1bHQgaW5pdCBvZiBzdG9yZVxuICAgIHN0b3JlLmluaXRTdG9yZSgpO1xuXG4gICAgLy8gc2V0IHJlY29yZFxuICAgIGFzeW5jIGZ1bmN0aW9uIHNldFJlY29yZCggcmVjb3JkOiBhbnkgKSB7XG4gICAgICAgIGxvZyggJ3NldFJlY29yZCcsIHN0YXRlTmFtZSwgcmVjb3JkICk7XG4gICAgICAgIGF3YWl0IHN0b3JlLmRpc3BhdGNoQWN0aW9uKCB7IGFjdGlvbjogJ2JlZm9yZVNlbGVjdCcsIHBhcmFtOiByZWNvcmQgfSApO1xuXG4gICAgICAgIGZvcm0udmFsdWUgICAgICAgICA9IHJlY29yZDtcblxuICAgICAgICBhd2FpdCBzdG9yZS5kaXNwYXRjaEFjdGlvbiggeyBhY3Rpb246ICdhZnRlclNlbGVjdCcsIHBhcmFtOiBmb3JtLnZhbHVlIH0gKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgcmVjb3JkXG4gICAgYXN5bmMgZnVuY3Rpb24gZG9BZGQoKSB7XG4gICAgICAgIGxvZyggJ2RvQWRkJywgc3RhdGVOYW1lICk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3JtLnZhbHVlICAgICA9IHsgLi4uZGVmYXVsdEZvcm0gfTtcblxuICAgICAgICAgICAgYXdhaXQgc3RvcmUuZGlzcGF0Y2hBY3Rpb24oIHsgYWN0aW9uOiAnYmVmb3JlQWRkJywgcGFyYW06IGZvcm0udmFsdWUgfSApO1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgICAgPSBhd2FpdCBzdG9yZS5hZGRSZWNvcmQoIHsgcmVjb3JkOiBmb3JtLnZhbHVlIH0gKTtcbiAgICAgICAgICAgIGZvcm0udmFsdWUgICAgICA9IHJlc3VsdDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYXdhaXQgc3RvcmUuZGlzcGF0Y2hBY3Rpb24oIHsgYWN0aW9uOiAnYWZ0ZXJBZGQnLCBwYXJhbTogZm9ybS52YWx1ZSB9ICk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goIGVycm9yICkge1xuICAgICAgICAgICAgZm9ybS52YWx1ZSAgICAgPSB7IC4uLmRlZmF1bHRGb3JtIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzYXZlIHJlY29yZFxuICAgIGFzeW5jIGZ1bmN0aW9uIGRvU2F2ZSgpIHtcbiAgICAgICAgbG9nKCAnZG9TYXZlJywgc3RhdGVOYW1lICk7XG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGF3YWl0IHN0b3JlLmRpc3BhdGNoQWN0aW9uKCB7IGFjdGlvbjogJ2JlZm9yZVNhdmUnLCBwYXJhbTogZm9ybS52YWx1ZSB9ICk7XG5cbiAgICAgICAgICAgIGZvcm0udmFsdWUgICAgICA9IGF3YWl0IHN0b3JlLnVwZGF0ZVJlY29yZCggeyByZWNvcmQ6IGZvcm0udmFsdWUgfSApO1xuXG4gICAgICAgICAgICBhd2FpdCBzdG9yZS5kaXNwYXRjaEFjdGlvbiggeyBhY3Rpb246ICdhZnRlclNhdmUnLCBwYXJhbTogZm9ybS52YWx1ZSB9ICk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goIGVycm9yICkge1xuICAgICAgICAgICAgZm9ybS52YWx1ZSAgICAgPSB7IC4uLmRlZmF1bHRGb3JtIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkZWxldGUgcmVjb3JkXG4gICAgYXN5bmMgZnVuY3Rpb24gZG9EZWxldGUoKSB7XG4gICAgICAgIGxvZyggJ2RvRGVsZXRlJywgc3RhdGVOYW1lICk7XG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGF3YWl0IHN0b3JlLmRpc3BhdGNoQWN0aW9uKCB7IGFjdGlvbjogJ2JlZm9yZURlbGV0ZScsIHBhcmFtOiBmb3JtLnZhbHVlIH0gKTtcblxuICAgICAgICAgICAgYXdhaXQgc3RvcmUuZGVsZXRlUmVjb3JkKCB7IHJlY29yZDogZm9ybS52YWx1ZSB9ICk7XG4gICAgICAgICAgICBmb3JtLnZhbHVlICAgICA9IHsgLi4uZGVmYXVsdEZvcm0gfTtcblxuICAgICAgICAgICAgYXdhaXQgc3RvcmUuZGlzcGF0Y2hBY3Rpb24oIHsgYWN0aW9uOiAnYWZ0ZXJEZWxldGUnLCBwYXJhbTogZm9ybS52YWx1ZSB9ICk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goIGVycm9yICkge1xuICAgICAgICAgICAgZm9ybS52YWx1ZSAgICAgPSB7IC4uLmRlZmF1bHRGb3JtIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjYWxsIGZ1bmN0aW9uXG4gICAgYXN5bmMgZnVuY3Rpb24gY2FsbEZ1bmMoIGl0ZW06IGFueSApIHtcbiAgICAgICAgbG9nKCAnY2FsbEZ1bmMnLCBpdGVtICk7XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2goIGl0ZW0uZ3JvdXAgKSB7XG4gICAgICAgICAgICBjYXNlICdwcmludCc6XG4gICAgICAgICAgICAgICAgbG9nKCAncHJpbnQnLCBpdGVtICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gbGV0IGZpbHRlciAgICAgID0gdGhpc1sgZGVmLmdyaWROYW1lIF0uYXBpLmdldEZpbHRlck1vZGVsKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyICAgICAgPSB7fTtcbiAgICAgICAgICAgICAgICBsb2coICdmaWx0ZXInLCBmaWx0ZXIgKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jbGljaylcbiAgICAgICAgICAgICAgICAgICAgWyBpdGVtLmNsaWNrIF0oKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKCBgL3ByaW50LyR7aXRlbS5saW5rfT9gICsgcXMuc3RyaW5naWZ5KCB7IGZpbHRlciB9ICksICdibGFuaycsICd3aWR0aD04MDAsaGVpZ2h0PTYwMCxyZXNpemFibGU9eWVzLHNjcm9sbGJhcnM9YXV0byxzdGF0dXM9eWVzJyk7ICBcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb25zJzpcbiAgICAgICAgICAgICAgICBsb2coICdmdW5jdGlvbnMnLCBpdGVtICk7XG4gICAgICAgICAgICAgICAgYXdhaXQgWyBpdGVtLmxpbmsgXSggaXRlbSApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb3VudGVkKCAoKSA9PiB7XG4gICAgICAgIGxvZyggJ21vdW50ZWQnLCBzdGF0ZU5hbWUgKTtcblxuICAgICAgICAvLyBhZGQgbGlzdGVuZXJzXG4gICAgICAgIHN0b3JlLnJlZ2lzdGVyQWN0aW9uKCB7IGFjdGlvbjogJ3NldFJlY29yZCcsICAgIHRhcmdldDogJ0dsb2JhbFZpZXcnLCAgIGZ1bmM6IHNldFJlY29yZCB9ICk7XG4gICAgICAgIHN0b3JlLnJlZ2lzdGVyQWN0aW9uKCB7IGFjdGlvbjogJ2FkZCcsICAgICAgICAgIHRhcmdldDogJ0dsb2JhbFZpZXcnLCAgIGZ1bmM6IGRvQWRkIH0gKTtcbiAgICAgICAgc3RvcmUucmVnaXN0ZXJBY3Rpb24oIHsgYWN0aW9uOiAnc2F2ZScsICAgICAgICAgdGFyZ2V0OiAnR2xvYmFsVmlldycsICAgZnVuYzogZG9TYXZlIH0gKTtcbiAgICAgICAgc3RvcmUucmVnaXN0ZXJBY3Rpb24oIHsgYWN0aW9uOiAnZGVsZXRlJywgICAgICAgdGFyZ2V0OiAnR2xvYmFsVmlldycsICAgZnVuYzogZG9EZWxldGUgfSApO1xuICAgIH0pO1xuXG4gICAgb25CZWZvcmVVbm1vdW50KCAoKSA9PiB7XG4gICAgICAgIGxvZyggJ3VubW91bnRlZCcsIHN0YXRlTmFtZSApO1xuXG4gICAgICAgIHN0b3JlLiRkaXNwb3NlKCk7XG4gICAgfSk7XG5cbiAgICBsb2coICdjcmVhdGVkJywgc3RhdGVOYW1lICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzdG9yZSxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZm9ybSxcbiAgICAgICAgdXNlcixcbiAgICAgICAgZG9BZGQsXG4gICAgICAgIGRvU2F2ZSxcbiAgICAgICAgZG9EZWxldGUsXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IGRlZmF1bHRzIH0gICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IGRlYnVnICAgICAgICAgICAgZnJvbSAnZGVidWcnO1xuXG50eXBlIElTdGF0dXMgPSB7XG4gICAgYWRkPzogICAgICAgIGJvb2xlYW47XG4gICAgc2F2ZT86ICAgICAgIGJvb2xlYW47XG4gICAgcmVtb3ZlPzogICAgIGJvb2xlYW47XG4gICAgc2V0dGluZ3M/OiAgIGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VOYXZTZXR0aW5nc1N0b3JlKCBzdGF0ZU5hbWU6IHN0cmluZyApOiBhbnkge1xuICAgIGNvbnN0IGxvZyAgICAgICA9IGRlYnVnKGBhcHA6JHtzdGF0ZU5hbWV9Ok5hdnNldHRpbmdzLnN0b3JlYCk7XG5cbiAgICByZXR1cm4gZGVmaW5lU3RvcmUoIGBuYXZTZXR0aW5nczoke3N0YXRlTmFtZX1gLCB7XG4gICAgICAgIFxuICAgICAgICBzdGF0ZTogICAgICAoKSA9PiAoe1xuICAgICAgICAgICAgX3N0YXR1czogICAgICB7XG4gICAgICAgICAgICAgICAgYWRkOiAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICBzYXZlOiAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICByZW1vdmU6ICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczogICBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfc2V0dGluZzogICAgIFtdLFxuICAgICAgICB9KSxcblxuICAgICAgICBnZXR0ZXJzOiAgICB7XG4gICAgICAgICAgICBzdGF0dXM6ICAgICAgICAgc3RhdGUgPT4gc3RhdGUuX3N0YXR1cyxcbiAgICAgICAgICAgIHNldHRpbmc6ICAgICAgICBzdGF0ZSA9PiBzdGF0ZS5fc2V0dGluZyxcbiAgICAgICAgfSxcblxuICAgICAgICBhY3Rpb25zOiAgICB7XG4gICAgICAgICAgICBpbml0U3RhdHVzKCBwYXlsb2FkOiBJU3RhdHVzICkge1xuICAgICAgICAgICAgICAgIGxvZyggJ2luaXRTdGF0dXMnICk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1cyggZGVmYXVsdHMoIHBheWxvYWQsIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkOiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNhdmU6ICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogICAgICAgdHJ1ZSwgICAgXG4gICAgICAgICAgICAgICAgfSkgYXMgSVN0YXR1cyApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFN0YXR1czxUIGV4dGVuZHMgSVN0YXR1cz4oIHBheWxvYWQ6IFQgKSB7XG4gICAgICAgICAgICAgICAgbG9nKCAnc2V0U3RhdHVzJywgcGF5bG9hZCApO1xuXG4gICAgICAgICAgICAgICAgZm9yKCBjb25zdCBpdGVtIGluIHBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhdHVzW2l0ZW1dICAgID0gcGF5bG9hZFtpdGVtXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0U2V0dGluZyggcGF5bG9hZDogSVN0YXR1c1tdICkge1xuICAgICAgICAgICAgICAgIGxvZyggJ3NldFNldHRpbmcnLCBwYXlsb2FkICk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0dGluZyAgICAgICAgICAgPSBwYXlsb2FkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkoKTtcbn0iLCI8dGVtcGxhdGU+XG4gICAgPHEtdG9vbGJhciBjbGFzcz1cImJnLWJsdWUtOCB0ZXh0LXdoaXRlIHNoYWRvdyBndXR0ZXItc21cIiA6Y2xhc3M9XCJuYXZjbGFzc1wiIDppbnNldD1cInNob3cuaW5zZXRcIj5cblxuICAgICAgICA8cS1pY29uIHYtaWY9XCJpY29uXCIgOm5hbWU9XCJpY29uXCIgc3R5bGU9XCJmb250LXNpemU6IDEuNmVtO1wiPjwvcS1pY29uPlxuICAgICAgICBcbiAgICAgICAgPHEtdG9vbGJhci10aXRsZSB2LWlmPVwidGl0bGVcIiB2LXQ9XCJ0aXRsZVwiPjwvcS10b29sYmFyLXRpdGxlPlxuXG4gICAgICAgIDxkaXYgdi1pZj1cImxvY0J1dHRvbnNcIj5cbiAgICAgICAgICAgIDxxLWJ0biB2LWZvcj1cIml0ZW0gb2YgbG9jQnV0dG9uc1wiIDprZXk9XCJpdGVtLmxpbmtcIiA6bGFiZWw9XCIkdChgbWVzc2FnZXMuJHtpdGVtLmxhYmVsfWApXCIgOmljb249XCJpdGVtLmljb24gfHwgJ2FwcHMnXCIgY29sb3I9XCJ3aGl0ZVwiIHRleHQtY29sb3I9XCJibGFja1wiIEBjbGljaz1cImNsaWNrQnV0dG9uKGl0ZW0ubGluaylcIiBkZW5zZSA6ZGlzYWJsZWQ9XCIhc3RhdHVzLnNhdmVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxxLXNlcGFyYXRvciB2LWlmPVwibG9jQnV0dG9ucyAmJiBsb2NCdXR0b25zLmxlbmd0aCA+IDBcIiBzcGFjZWQgdmVydGljYWwgLz5cblxuICAgICAgICA8cS1idG4tZHJvcGRvd24gdi1pZj1cImZ1bmMubGVuZ3RoID4gMFwiIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbEZ1bmNzJylcIiBpY29uPVwiYXBwc1wiIGNvbG9yPVwid2hpdGVcIiB0ZXh0LWNvbG9yPVwiYmxhY2tcIiBkZW5zZT5cbiAgICAgICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgICAgICAgPHEtaXRlbSBAY2xpY2s9XCJjYWxsRnVuYyggaXRlbSApXCIgY2xpY2thYmxlIHYtY2xvc2UtcG9wdXAgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIG9mIGZ1bmNcIiA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGUgdi1pZj1cIml0ZW0uaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtaWNvbiA6bmFtZT1cIml0ZW0uaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgJHQoYG1lc3NhZ2VzLiR7aXRlbS5uYW1lfWApIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgPC9xLWJ0bi1kcm9wZG93bj5cblxuICAgICAgICA8cS1zZXBhcmF0b3Igdi1pZj1cImZ1bmMubGVuZ3RoID4gMFwiIHNwYWNlZCB2ZXJ0aWNhbCAvPlxuXG4gICAgICAgIDxxLWJ0bi1kcm9wZG93biB2LWlmPVwicHJpbnQubGVuZ3RoID4gMFwiIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbFByaW50JylcIiBpY29uPVwicHJpbnRcIiBjb2xvcj1cIndoaXRlXCIgdGV4dC1jb2xvcj1cImJsYWNrXCIgZGVuc2U+XG4gICAgICAgICAgICA8cS1saXN0PlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtY2xvc2UtcG9wdXAgQGNsaWNrPVwiY2FsbEZ1bmMoIGl0ZW0gKVwiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBvZiBwcmludFwiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZSB2LWlmPVwiaXRlbS5pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1pY29uIDpuYW1lPVwiaXRlbS5pY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyAkdChgbWVzc2FnZXMuJHtpdGVtLm5hbWV9YCkgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICA8L3EtYnRuLWRyb3Bkb3duPlxuXG4gICAgICAgIDxxLXNlcGFyYXRvciBzcGFjZWQgdmVydGljYWwgdi1pZj1cInByaW50Lmxlbmd0aCA+IDBcIi8+XG5cbiAgICAgICAgPHEtYnRuIG5vLWNhcHMgc2l6ZT1cIm1kXCIgY29sb3I9XCJ3aGl0ZVwiIHRleHQtY29sb3I9XCJibGFja1wiIDpkaXNhYmxlZD1cIiFzdGF0dXMuYWRkXCIgICAgICBAY2xpY2s9XCJkb0FkZCgpXCIgICAgaWNvbj1cImFkZF9ib3hcIiAgICB2LWlmPVwic2hvdy5hZGQgJiYgbmF2c2hvdz8uYWRkICE9PSBmYWxzZVwiIGRlbnNlPlxuICAgICAgICAgICAgPHEtdG9vbHRpcD57eyAkdCgnbWVzc2FnZXMuQnV0dG9uQWRkJykgfX08L3EtdG9vbHRpcD5cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgPHEtYnRuIG5vLWNhcHMgc2l6ZT1cIm1kXCIgY29sb3I9XCJ3aGl0ZVwiIHRleHQtY29sb3I9XCJibGFja1wiIDpkaXNhYmxlZD1cIiFzdGF0dXMuc2F2ZVwiICAgICBAY2xpY2s9XCJkb1NhdmUoKVwiICAgaWNvbj1cInNhdmVfYWx0XCIgICB2LWlmPVwic2hvdy5zYXZlICYmIG5hdnNob3c/LnNhdmUgIT09IGZhbHNlXCIgZGVuc2U+XG4gICAgICAgICAgICA8cS10b29sdGlwPnt7ICR0KCdtZXNzYWdlcy5CdXR0b25TYXZlJykgfX08L3EtdG9vbHRpcD5cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgPHEtYnRuIG5vLWNhcHMgc2l6ZT1cIm1kXCIgY29sb3I9XCJ3aGl0ZVwiIHRleHQtY29sb3I9XCJibGFja1wiIDpkaXNhYmxlZD1cIiFzdGF0dXMucmVtb3ZlXCIgICBAY2xpY2s9XCJkb0RlbGV0ZSgpXCIgaWNvbj1cImRlbGV0ZVwiICAgICB2LWlmPVwic2hvdy5yZW1vdmUgJiYgbmF2c2hvdz8ucmVtb3ZlICE9PSBmYWxzZVwiIGRlbnNlPlxuICAgICAgICAgICAgPHEtdG9vbHRpcD57eyAkdCgnbWVzc2FnZXMuQnV0dG9uRGVsZXRlJykgfX08L3EtdG9vbHRpcD5cbiAgICAgICAgPC9xLWJ0bj5cblxuICAgICAgICA8cS1zZXBhcmF0b3Igc3BhY2VkIHZlcnRpY2FsIC8+XG4gICAgICAgIFxuICAgICAgICA8cS1idG4tZHJvcGRvd24gdi1tb2RlbD1cInNob3dHcmlkTWVudVwiIGNvbG9yPVwid2hpdGVcIiB0ZXh0LWNvbG9yPVwiYmxhY2tcIiA6ZGlzYWJsZWQ9XCIhc3RhdHVzLnNldHRpbmdzXCIgaWNvbj1cInNldHRpbmdzXCIgIHYtaWY9XCJzaG93LnNldHRpbmdzXCIgZGVuc2U+XG4gICAgICAgICAgICA8cS1saXN0PlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgaGVhZGVyPnt7ICR0KCdtZXNzYWdlcy5HcmlkU2V0dGluZycpIH19PC9xLWl0ZW0tbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGRlbnNlPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyZXktOCBxLWd1dHRlci14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWJ0biBjbGlja2FibGUgQGNsaWNrPVwic2F2ZVNldHQoKVwiIGljb249XCJzYXZlX2FsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS10b29sdGlwPnt7ICR0KCdtZXNzYWdlcy5CdXR0b25TYXZlJykgfX08L3EtdG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtYnRuPiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1idG4gY2xpY2thYmxlIEBjbGljaz1cImRlbGV0ZVNldHQoKVwiIGljb249XCJkZWxldGVfZm9yZXZlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS10b29sdGlwPnt7ICR0KCdtZXNzYWdlcy5CdXR0b25SZXNldCcpIH19PC9xLXRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWJ0bj4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgICAgICAgIDxxLXNlcGFyYXRvciAvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtZm9yPVwic2V0dCBpbiBzdGF0dXMuc2V0dGluZ1wiIDprZXk9XCJzZXR0LmZpZWxkXCIgZGVuc2U+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRvZ2dsZSA6bGFiZWw9XCIkdChgbWVzc2FnZXMuJHtzZXR0LmhlYWRlck5hbWV9YClcIiBjb2xvcj1cImdyZWVuXCIgdi1tb2RlbD1cInNldHQuc2hvd1wiIEBpbnB1dD1cInRvZ2dsZUZpZWxkKCBzZXR0LmZpZWxkLCBzZXR0LnNob3cgKVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgPC9xLWJ0bi1kcm9wZG93bj5cblxuICAgICAgICA8cS1idG4gbm8tY2FwcyBzaXplPVwibWRcIiBjb2xvcj1cIndoaXRlXCIgdGV4dC1jb2xvcj1cImJsYWNrXCIgQGNsaWNrPVwiZG9DbG9zZSgpXCIgaWNvbj1cImNsb3NlXCIgdi1pZj1cInNob3cuY2xvc2VcIiBkZW5zZT5cbiAgICAgICAgICAgIDxxLXRvb2x0aXA+e3sgJHQoJ21lc3NhZ2VzLkJ1dHRvbkNsb3NlJykgfX08L3EtdG9vbHRpcD5cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgXG4gICAgPC9xLXRvb2xiYXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHFzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3FzJztcblxuaW1wb3J0IF8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IHVzZU5hdlNldHRpbmdzU3RvcmUgfSAgICAgICAgICBmcm9tICcuLi9zdG9yZXMvbmF2U2V0dGluZ3Muc3RvcmUnO1xuXG5pbXBvcnQgZGVidWcgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnZGVidWcnO1xuY29uc3QgbG9nICAgICAgICAgPSBkZWJ1ZygnYXBwOm5hdmJhcicpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgICB0aXRsZTogICAgICAgICAgc3RyaW5nLFxuICAgIHN0YXRlOiAgICAgICAgICBhbnksXG4gICAgc3RhdGVOYW1lOiAgICAgIHN0cmluZyxcbiAgICBnbG9iYWxWaWV3PzogICAgYW55LFxuICAgIGZ1bmNzPzogICAgICAgICBhbnksXG4gICAgdHlwZT86ICAgICAgICAgIHN0cmluZyxcbiAgICBpY29uPzogICAgICAgICAgc3RyaW5nLFxuICAgIG5hdnNob3c/OiAgICAgICBhbnksXG4gICAgbmF2Y2xhc3M/OiAgICAgIGFueSxcbiAgICBsb2NCdXR0b25zPzogICAgYW55LFxufVxuXG5jb25zdCBwcm9wcyAgICAgICAgID0gd2l0aERlZmF1bHRzKCBkZWZpbmVQcm9wczxQcm9wcz4oKSwge1xuICAgICAgICBuYXZzaG93OiAgICAgICAge1xuICAgICAgICAgICAgYWRkOiAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIHNhdmU6ICAgICAgIHRydWUsXG4gICAgICAgICAgICByZW1vdmU6ICAgICB0cnVlXG4gICAgICAgIH0sXG4gICAgfVxuKTtcblxuY29uc3QgZW1pdCAgICAgICAgICAgID0gZGVmaW5lRW1pdHMoIFsgXG4gICAgJ2Nsb3NlJywgXG4gICAgJ2NsaWNrQnV0dG9uJyxcbl0gKTtcblxuY29uc3QgbmF2U3RvcmUgICAgICAgICAgICAgID0gdXNlTmF2U2V0dGluZ3NTdG9yZSggXy51bmlxdWVJZCggcHJvcHMuc3RhdGVOYW1lICkgKTtcbmNvbnN0IHsgc3RhdHVzLCBzZXR0aW5nIH0gICA9IHN0b3JlVG9SZWZzKCBuYXZTdG9yZSApO1xuXG5sb2coICdzdGFydCcsIHByb3BzLnN0YXRlTmFtZSwgbmF2U3RvcmUgKTtcblxuY29uc3QgICBzaG93R3JpZE1lbnUgID0gcmVmKGZhbHNlKSxcbiAgICAgICAgc2hvdyAgICAgICAgICA9IHJlYWN0aXZlKHtcbiAgICAgICAgICAgIGFkZDogICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIHNhdmU6ICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIHJlbW92ZTogICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlOiAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBzZXR0aW5nczogICAgIHRydWVcbiAgICAgICAgfSk7XG5cbmlmICghcHJvcHMuc3RhdGVOYW1lKSB7XG4gICAgc2hvdy5hZGQgICAgICAgID0gZmFsc2U7XG4gICAgc2hvdy5zYXZlICAgICAgID0gZmFsc2U7XG4gICAgc2hvdy5yZW1vdmUgICAgID0gZmFsc2U7XG59IGVsc2VcbiAgICBzd2l0Y2goIHByb3BzLnR5cGUgKSB7XG5cbiAgICAgICAgY2FzZSAnd2luZG93JzpcbiAgICAgICAgICAgIG5hdlN0b3JlLmluaXRTdGF0dXMoe1xuICAgICAgICAgICAgICAgIHNhdmU6ICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2hvdy5zYXZlICAgICAgID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICAgIGNhc2UgJ2RpYWxvZyc6XG4gICAgICAgICAgICBuYXZTdG9yZS5pbml0U3RhdHVzKHtcbiAgICAgICAgICAgICAgICBzYXZlOiAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW1vdmU6ICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzaG93LmFkZCAgICAgICAgPSBmYWxzZTtcbiAgICAgICAgICAgIHNob3cuc2V0dGluZ3MgICA9IGZhbHNlO1xuICAgICAgICAgICAgc2hvdy5jbG9zZSAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBuYXZTdG9yZS5pbml0U3RhdHVzKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbi8vIGZ1bmN0aW9ucyBmb3IgZGlmZmVyZW50IGJ1dHRvbnNcbmNvbnN0IHByaW50ICAgICAgID0gXy5maWx0ZXIoIHByb3BzLmZ1bmNzLCBpdGVtID0+IGl0ZW0uZ3JvdXAgPT09ICdwcmludCcgKSxcbiAgICAgICAgZnVuYyAgICAgID0gXy5maWx0ZXIoIHByb3BzLmZ1bmNzLCBpdGVtID0+IGl0ZW0uZ3JvdXAgPT09ICdmdW5jdGlvbnMnICksXG4gICAgICAgIGJ1dHRvbnMgICA9IF8uZmlsdGVyKCBwcm9wcy5mdW5jcywgaXRlbSA9PiBpdGVtLmdyb3VwID09PSAnYnV0dG9ucycgKSxcbiAgICAgICAgY2xvc2UgICAgID0gXy5maW5kKCBwcm9wcy5mdW5jcywgaXRlbSA9PiBpdGVtLmdyb3VwID09PSAnY2xvc2UnICk7XG5cbi8vIHJlbWVtYmVyIGFjdFN0YXRlIHRvIGtub3cgd2hhdCBoYXMgYmVlbiB0aGUgbGFzdCBhY3Rpb25cbmxldCBhY3RTdGF0ZSAgICA9ICcnO1xuXG4vLyBjYWxsIGZ1bmN0aW9uIGZyb20gYnV0dG9uc1xuYXN5bmMgZnVuY3Rpb24gY2FsbEZ1bmMoIGl0ZW06IGFueSApIHtcbiAgICBsb2coICdjYWxsRnVuYycsICdjYWxsRnVuYzonICsgcHJvcHMuc3RhdGVOYW1lLCBpdGVtLmxpbmsgKTtcblxuICAgIHN3aXRjaCggaXRlbS5ncm91cCApIHtcbiAgICAgICAgY2FzZSAncHJpbnQnOlxuICAgICAgICAgICAgbG9nKCAncHJpbnQnLCBpdGVtICk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGxldCBmaWx0ZXIgICAgICA9IHRoaXNbIGRlZi5ncmlkTmFtZSBdLmFwaS5nZXRGaWx0ZXJNb2RlbCgpO1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyICAgICAgPSB7fTtcbiAgICAgICAgICAgIGxvZyggJ2ZpbHRlcicsIGZpbHRlciApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoaXRlbS5jbGljaykge1xuICAgICAgICAgICAgICAgIGxvZyggJ0Z1bmN0aW9uIGVtaXQgKHByaW50KTonLCBpdGVtLmNsaWNrICk7XG4gICAgICAgICAgICAgICAgZW1pdCggaXRlbS5jbGljayApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKCBgL3ByaW50LyR7aXRlbS5saW5rfT9gICsgcXMuc3RyaW5naWZ5KCB7IGZpbHRlciB9ICksICdibGFuaycsICd3aWR0aD04MDAsaGVpZ2h0PTYwMCxyZXNpemFibGU9eWVzLHNjcm9sbGJhcnM9YXV0byxzdGF0dXM9eWVzJyk7ICBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgIGNhc2UgJ2Z1bmN0aW9ucyc6XG4gICAgICAgICAgICBsb2coICdmdW5jdGlvbnMnLCBpdGVtICk7XG4gICAgICAgICAgICBpZiAoIGl0ZW0ubGluayApIHtcbiAgICAgICAgICAgICAgICBsb2coICdGdW5jdGlvbiBlbWl0IChmdW5jdGlvbnMpOicsIGl0ZW0ubGluayApO1xuICAgICAgICAgICAgICAgIGVtaXQoIGl0ZW0ubGluayApO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsb2coICdObyB2YWxpZCBmdW5jdGlvbicsIGl0ZW0gKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuLy8gYWRkIHByZXNzZWRcbmFzeW5jIGZ1bmN0aW9uIGRvQWRkKCkge1xuICAgIGxvZyggJ2FkZCcsIHByb3BzLnN0YXRlTmFtZSApO1xuICAgIFxuICAgIG5hdlN0b3JlLnNldFN0YXR1cyggeyBhZGQ6IGZhbHNlLCBzYXZlOiB0cnVlIH0gKTtcbiAgICBhY3RTdGF0ZSAgICAgICAgICAgICAgICA9ICdBREQnO1xuXG4gICAgaWYgKHByb3BzLmdsb2JhbFZpZXc/LmRvQWRkKSB7XG4gICAgICAgIGF3YWl0IHByb3BzLmdsb2JhbFZpZXcuZG9BZGQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCBwcm9wcy5zdGF0ZS5kaXNwYXRjaEFjdGlvbiggeyBhY3Rpb246ICdhZGQnIH0gKTtcbiAgICB9XG59XG5cbi8vIHNhdmUgcHJlc3NlZFxuYXN5bmMgZnVuY3Rpb24gZG9TYXZlKCkge1xuICAgIGxvZyggJ3NhdmUnLCBwcm9wcy5zdGF0ZU5hbWUgKTtcblxuICAgIG5hdlN0b3JlLnNldFN0YXR1cyggeyBhZGQ6IHRydWUgfSApO1xuXG4gICAgaWYgKHByb3BzLmdsb2JhbFZpZXc/LmRvU2F2ZSkge1xuICAgICAgICBhd2FpdCBwcm9wcy5nbG9iYWxWaWV3LmRvU2F2ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IHByb3BzLnN0YXRlLmRpc3BhdGNoQWN0aW9uKCB7IGFjdGlvbjogJ3NhdmUnIH0gKTtcbiAgICB9XG59XG5cbi8vIGRlbGV0ZSBwcmVzc2VkXG5hc3luYyBmdW5jdGlvbiBkb0RlbGV0ZSgpIHtcbiAgICBsb2coICdkZWxldGUnICk7XG5cbiAgICBuYXZTdG9yZS5zZXRTdGF0dXMoIHsgcmVtb3ZlOiBmYWxzZSB9ICk7XG4gICAgYWN0U3RhdGUgICAgICAgID0gJ0RFTEVURSc7XG5cbiAgICBpZiAocHJvcHMuZ2xvYmFsVmlldz8uZG9EZWxldGUpIHtcbiAgICAgICAgYXdhaXQgcHJvcHMuZ2xvYmFsVmlldy5kb0RlbGV0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IHByb3BzLnN0YXRlLmRpc3BhdGNoQWN0aW9uKCB7IGFjdGlvbjogJ2RlbGV0ZScgfSApO1xuICAgIH1cbn1cblxuLy8gc2VsZWN0IGV2ZW50IGZyb20gZXh0ZXJuIC0+IGdyaWQgb3IgbWFudWFsXG5mdW5jdGlvbiBkb1NlbGVjdCggcmVjb3JkOiBhbnkgKSB7XG4gICAgbG9nKCAnc2V0QnV0dG9uJywgcHJvcHMuc3RhdGVOYW1lICk7XG5cbiAgICAvLyBpZiByZWNvcmQgaGFzIF9pZCAtPiBzZWxlY3RcbiAgICBpZiAoIHJlY29yZC5faWQgKSB7XG4gICAgICAgIG5hdlN0b3JlLnNldFN0YXR1cygge1xuICAgICAgICAgICAgYWRkOiAgICAgIGFjdFN0YXRlICE9PSAnQUREJyxcbiAgICAgICAgICAgIHNhdmU6ICAgICB0cnVlLFxuICAgICAgICAgICAgcmVtb3ZlOiAgIHRydWVcbiAgICAgICAgfSApO1xuICAgICAgICBhY3RTdGF0ZSAgICAgICAgID0gJ1NFTEVDVCc7XG4gICAgICAgIFxuICAgICAgICBpZiAoXy5pc0FycmF5KCBwcm9wcy5sb2NCdXR0b25zICkpIHtcbiAgICAgICAgICAgIGZvciggY29uc3QgaXRlbSBvZiBwcm9wcy5sb2NCdXR0b25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uc2VsZWN0KVxuICAgICAgICAgICAgICAgICAgICBpdGVtLmVuYWJsZWQgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIC8vIC4uLiBvdGhlcndpc2UgLT4gZGVsZXRlXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmF2U3RvcmUuc2V0U3RhdHVzKCB7XG4gICAgICAgICAgICBhZGQ6ICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIHNhdmU6ICAgICBmYWxzZSxcbiAgICAgICAgICAgIHJlbW92ZTogICBmYWxzZVxuICAgICAgICB9ICk7XG4gICAgfVxufVxuXG4vLyBjbG9zZVxuZnVuY3Rpb24gZG9DbG9zZSgpIHtcbiAgICBlbWl0KCAnY2xvc2UnICk7XG59XG5cbi8vIHNldHRpbmdzIGZvciBncmlkXG5mdW5jdGlvbiBzZXRTZXR0aW5nKCBzZXR0aW5nOiBhbnkgKSB7XG4gICAgXG4gICAgY29uc3QgY29sdW1ucyAgICAgICAgID0gXy5rZXlCeSggc2V0dGluZy5jb2x1bW5zLCAnY29sSWQnICksXG4gICAgICAgICAgY29sTWVudSAgICAgICAgID0gXy5maWx0ZXIoIHNldHRpbmcuY29sTWVudSwgKGl0ZW0pID0+IHsgcmV0dXJuICFpdGVtLmhpZGVDb2w7IH0gKTtcbiAgICBcbiAgICBsb2coICdzZXRTZXR0aW5nJywgY29sdW1ucywgY29sTWVudSApO1xuXG4gICAgbmF2U3RvcmUuc2V0U2V0dGluZyggXy5tYXAoIGNvbE1lbnUsICggaXRlbSApID0+IHtcbiAgICAgICAgaXRlbS5zaG93ICAgICAgID0gY29sdW1uc1sgaXRlbS5maWVsZCBdID8gIWNvbHVtbnNbIGl0ZW0uZmllbGQgXS5oaWRlIDogIWl0ZW0uaGlkZTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSkgKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHNhdmVTZXR0KCkge1xuICAgIGxvZyggJ3NhdmUgc2V0dGluZ3MnLCBwcm9wcy5zdGF0ZU5hbWUgKTtcblxuICAgIGF3YWl0IHByb3BzLnN0YXRlLmRpc3BhdGNoQWN0aW9uKCB7IGFjdGlvbjogJ3NhdmVTZXR0aW5ncycgfSApO1xuXG4gICAgc2hvd0dyaWRNZW51LnZhbHVlICAgICAgID0gZmFsc2U7XG59XG5hc3luYyBmdW5jdGlvbiBkZWxldGVTZXR0KCkge1xuICAgIGxvZyggJ2RlbGV0ZSBzZXR0aW5ncycsIHByb3BzLnN0YXRlTmFtZSApO1xuXG4gICAgYXdhaXQgcHJvcHMuc3RhdGUuZGlzcGF0Y2hBY3Rpb24oIHsgYWN0aW9uOiAnZGVsZXRlU2V0dGluZ3MnIH0gKTtcblxuICAgIHNob3dHcmlkTWVudS52YWx1ZSAgICAgICA9IGZhbHNlO1xufVxuXG4vLyAvLyB0b2dnbGUgZmllbGRcbi8vIGZ1bmN0aW9uIHRvZ2dsZUZpZWxkKCBjb2xJZCwgc2hvdyApIHtcbi8vICAgICBsb2coICd0b2dnbGVGaWVsZCcsIGNvbElkLCBzaG93ICk7XG4vLyAgICAgRXZlbnRCdXMuJGVtaXQoICd0b2dnbGVGaWVsZDonICsgZHluTmF2LCB7IGNvbElkLCBzaG93IH0gKTtcbi8vIH1cblxuLy8gY2xpY2sgZnVuY3Rpb24gYnV0dG9uIFxuZnVuY3Rpb24gY2xpY2tCdXR0b24oIGxpbms6IHN0cmluZyApIHtcbiAgICBsb2coICdjbGlja0J1dHRvbicsIGxpbmsgKTtcbiAgICBlbWl0KCAnY2xpY2tCdXR0b24nLCBsaW5rICk7XG59XG5cbi8vIGdldCBcbmNvbnN0IG5hdkJhclN1Yk1lbnUgICAgID0gY29tcHV0ZWQoIGFzeW5jICgpID0+IHtcbiAgICAvLyBnZXQgdXNlciByaWdodHNcbiAgICBjb25zdCByaWdodHMgICAgICAgICAgPSBhd2FpdCBheGlvcy5nZXQoIGAvbW9kZWwvcmlnaHRzLyR7cHJvcHMuc3RhdGVOYW1lfS5qc29uYCApO1xuICAgICAgICBcbiAgICBjb25zdCBuYXZiYXJTdWJtZW51ICAgPSByaWdodHMuZGF0YSAmJiByaWdodHMuZGF0YS5zdWJtZW51O1xuXG4gICAgcmV0dXJuIG5hdmJhclN1Ym1lbnU7XG59KTtcbiAgICBcbi8vIG1vdW50ZWRcbm9uTW91bnRlZCggKCkgPT4ge1xuICAgIGxvZyggJ21vdW50ZWQnLCBwcm9wcy5zdGF0ZSApO1xuXG4gICAgLy8gYWRkIGV2ZW50c1xuICAgIHByb3BzLnN0YXRlLnJlZ2lzdGVyQWN0aW9uKCB7IGFjdGlvbjogJ3NldFJlY29yZCcsICAgIHRhcmdldDogJ05hdkJhcicsICAgZnVuYzogZG9TZWxlY3QgfSApO1xuICAgIHByb3BzLnN0YXRlLnJlZ2lzdGVyQWN0aW9uKCB7IGFjdGlvbjogJ3NldFNldHRpbmcnLCAgIHRhcmdldDogJ05hdkJhcicsICAgZnVuYzogc2V0U2V0dGluZyB9ICk7XG59KTtcblxuLy8gYmVmb3JlIHVubW91bnRcbm9uQmVmb3JlVW5tb3VudCggYXN5bmMgKCkgPT4ge1xuICAgIGxvZyggJ2Rlc3Ryb3knLCBwcm9wcy5zdGF0ZU5hbWUgKTtcbiAgICBcbiAgICAvLyB1bnJlZ2lzdGVyIGR5bk5hdlxuICAgIG5hdlN0b3JlLiRkaXNwb3NlKCk7XG59KTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLmJ0bi1tYXJnaW4ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgfVxuICAgIFxuICAgIC5ndXR0ZXItc20gYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6WyJyZXF1aXJlJCQwIiwiaGFzU3ltYm9scyIsImhhc1Byb3RvIiwidG9TdHIiLCJjb25jYXR0eSIsInNsaWN5IiwiaW1wbGVtZW50YXRpb24iLCJFbXB0eSIsImJpbmQiLCJ1bmRlZmluZWQiLCIkU3ludGF4RXJyb3IiLCIkVHlwZUVycm9yIiwiJGdPUEQiLCJyZXF1aXJlJCQxIiwiZG9FdmFsIiwicmVxdWlyZSQkMiIsImhhc093biIsInJlcXVpcmUkJDMiLCIkY29uY2F0IiwiJHJlcGxhY2UiLCJzdHJpbmdUb1BhdGgiLCJxdW90ZSIsImdldEJhc2VJbnRyaW5zaWMiLCJHZXRJbnRyaW5zaWMiLCIkZGVmaW5lUHJvcGVydHkiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3JzIiwiZ29wZCIsImRlZmluZURhdGFQcm9wZXJ0eSIsIiRmbG9vciIsInNldEZ1bmN0aW9uTGVuZ3RoIiwiY2FsbEJpbmQiLCJhcHBseUJpbmQiLCJjYWxsQm91bmQiLCJoYXMiLCJpc0FycmF5IiwiaW5zcGVjdCIsImlzUmVnRXhwIiwiZ2xvYmFsIiwiZm9ybWF0cyIsImNvbXBhY3RRdWV1ZSIsImFycmF5VG9PYmplY3QiLCJtZXJnZSIsImVuY29kZSIsImNvbXBhY3QiLCJpc0J1ZmZlciIsImNvbWJpbmUiLCJtYXliZU1hcCIsInV0aWxzIiwiZ2V0U2lkZUNoYW5uZWwiLCJkZWZhdWx0cyIsImlzTm9uTnVsbGlzaFByaW1pdGl2ZSIsInN0cmluZ2lmeSIsInNlcmlhbGl6ZURhdGUiLCJzaWRlQ2hhbm5lbCIsInZhbHVlIiwibm9ybWFsaXplU3RyaW5naWZ5T3B0aW9ucyIsImJyYWNrZXRzIiwibm9ybWFsaXplUGFyc2VPcHRpb25zIiwicGFyc2UiLCJsb2ciLCJxcyJdLCJtYXBwaW5ncyI6IjtJQUdBLFFBQWlCLFNBQVMsYUFBYTtBQUN0QyxNQUFJLE9B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
