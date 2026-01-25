import { P as Plugin, p as pad, i as isDate, j as defaultLang, k as capitalize, e as defineComponent, l as debug, n as ref, o as resolveComponent, q as openBlock, s as createBlock, w as withCtx, f as createVNode, Q as QToolbar, u as QToolbarTitle, v as createTextVNode, x as QSeparator, y as QBtn, z as QTooltip, A as toDisplayString, B as QHeader, C as QPage, D as QCardSection, E as createBaseVNode, F as QInput, G as unref, H as QPageContainer, I as QLayout, _ as _export_sfc, J as pushScopeId, K as popScopeId, L as useI18n, M as _, N as useAccountStore, O as useDataStore, R as storeToRefs, S as watch, T as resolveDirective, U as QCard, V as withDirectives, W as QOptionGroup, X as isRef, Y as createCommentVNode, Z as QScrollArea, $ as QList, a0 as QItem, a1 as QItemSection, a2 as createElementBlock, a3 as renderList, a4 as Fragment, a5 as QDialog, a6 as QItemLabel, a7 as normalizeClass } from "./index.8f8ca0f3.js";
import { Q as QSelect } from "./QSelect.72364726.js";
import { Q as QSpace } from "./QSpace.8e4d5c99.js";
import { Q as QTabs, a as QTab, b as QTabPanels, c as QTabPanel } from "./QTabPanels.46aa2434.js";
import { s as status, Q as QTimeline, a as send, b as QTimelineEntry } from "./Send.a0070519.js";
import { Q as QForm } from "./QForm.8c81555c.js";
import { g as globalView, N as NavBar } from "./NavBar.eb70e4d5.js";
import { G as Grid } from "./Grid.b4814aca.js";
import "./rtl.b51694b1.js";
import "./AgGridVue.c15bd737.js";
const breaks = [
  -61,
  9,
  38,
  199,
  426,
  686,
  756,
  818,
  1111,
  1181,
  1210,
  1635,
  2060,
  2097,
  2192,
  2262,
  2324,
  2394,
  2456,
  3178
];
function isLeapJalaaliYear(jy) {
  return jalCalLeap(jy) === 0;
}
function jalaaliMonthLength(jy, jm) {
  if (jm <= 6)
    return 31;
  if (jm <= 11)
    return 30;
  if (isLeapJalaaliYear(jy))
    return 30;
  return 29;
}
function jalCalLeap(jy) {
  const bl = breaks.length;
  let jp = breaks[0], jm, jump, leap, n, i;
  if (jy < jp || jy >= breaks[bl - 1]) {
    throw new Error("Invalid Jalaali year " + jy);
  }
  for (i = 1; i < bl; i += 1) {
    jm = breaks[i];
    jump = jm - jp;
    if (jy < jm) {
      break;
    }
    jp = jm;
  }
  n = jy - jp;
  if (jump - n < 6) {
    n = n - jump + div(jump + 4, 33) * 33;
  }
  leap = mod(mod(n + 1, 33) - 1, 4);
  if (leap === -1) {
    leap = 4;
  }
  return leap;
}
function div(a, b) {
  return ~~(a / b);
}
function mod(a, b) {
  return a - ~~(a / b) * b;
}
const MILLISECONDS_IN_DAY = 864e5, MILLISECONDS_IN_HOUR = 36e5, MILLISECONDS_IN_MINUTE = 6e4, defaultMask = "YYYY-MM-DDTHH:mm:ss.SSSZ", token = /\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, reverseToken = /(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, regexStore = {};
function getRegexData(mask, dateLocale) {
  const days = "(" + dateLocale.days.join("|") + ")", key = mask + days;
  if (regexStore[key] !== void 0) {
    return regexStore[key];
  }
  const daysShort = "(" + dateLocale.daysShort.join("|") + ")", months = "(" + dateLocale.months.join("|") + ")", monthsShort = "(" + dateLocale.monthsShort.join("|") + ")";
  const map = {};
  let index = 0;
  const regexText = mask.replace(reverseToken, (match) => {
    index++;
    switch (match) {
      case "YY":
        map.YY = index;
        return "(-?\\d{1,2})";
      case "YYYY":
        map.YYYY = index;
        return "(-?\\d{1,4})";
      case "M":
        map.M = index;
        return "(\\d{1,2})";
      case "MM":
        map.M = index;
        return "(\\d{2})";
      case "MMM":
        map.MMM = index;
        return monthsShort;
      case "MMMM":
        map.MMMM = index;
        return months;
      case "D":
        map.D = index;
        return "(\\d{1,2})";
      case "Do":
        map.D = index++;
        return "(\\d{1,2}(st|nd|rd|th))";
      case "DD":
        map.D = index;
        return "(\\d{2})";
      case "H":
        map.H = index;
        return "(\\d{1,2})";
      case "HH":
        map.H = index;
        return "(\\d{2})";
      case "h":
        map.h = index;
        return "(\\d{1,2})";
      case "hh":
        map.h = index;
        return "(\\d{2})";
      case "m":
        map.m = index;
        return "(\\d{1,2})";
      case "mm":
        map.m = index;
        return "(\\d{2})";
      case "s":
        map.s = index;
        return "(\\d{1,2})";
      case "ss":
        map.s = index;
        return "(\\d{2})";
      case "S":
        map.S = index;
        return "(\\d{1})";
      case "SS":
        map.S = index;
        return "(\\d{2})";
      case "SSS":
        map.S = index;
        return "(\\d{3})";
      case "A":
        map.A = index;
        return "(AM|PM)";
      case "a":
        map.a = index;
        return "(am|pm)";
      case "aa":
        map.aa = index;
        return "(a\\.m\\.|p\\.m\\.)";
      case "ddd":
        return daysShort;
      case "dddd":
        return days;
      case "Q":
      case "d":
      case "E":
        return "(\\d{1})";
      case "Qo":
        return "(1st|2nd|3rd|4th)";
      case "DDD":
      case "DDDD":
        return "(\\d{1,3})";
      case "w":
        return "(\\d{1,2})";
      case "ww":
        return "(\\d{2})";
      case "Z":
        map.Z = index;
        return "(Z|[+-]\\d{2}:\\d{2})";
      case "ZZ":
        map.ZZ = index;
        return "(Z|[+-]\\d{2}\\d{2})";
      case "X":
        map.X = index;
        return "(-?\\d+)";
      case "x":
        map.x = index;
        return "(-?\\d{4,})";
      default:
        index--;
        if (match[0] === "[") {
          match = match.substring(1, match.length - 1);
        }
        return match.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  });
  const res = { map, regex: new RegExp("^" + regexText) };
  regexStore[key] = res;
  return res;
}
function getDateLocale(paramDateLocale, langProps) {
  return paramDateLocale !== void 0 ? paramDateLocale : langProps !== void 0 ? langProps.date : defaultLang.date;
}
function formatTimezone(offset, delimeter = "") {
  const sign = offset > 0 ? "-" : "+", absOffset = Math.abs(offset), hours = Math.floor(absOffset / 60), minutes = absOffset % 60;
  return sign + pad(hours) + delimeter + pad(minutes);
}
function applyYearMonthDayChange(date2, mod2, sign) {
  let year = date2.getFullYear(), month = date2.getMonth();
  const day = date2.getDate();
  if (mod2.year !== void 0) {
    year += sign * mod2.year;
    delete mod2.year;
  }
  if (mod2.month !== void 0) {
    month += sign * mod2.month;
    delete mod2.month;
  }
  date2.setDate(1);
  date2.setMonth(2);
  date2.setFullYear(year);
  date2.setMonth(month);
  date2.setDate(Math.min(day, daysInMonth(date2)));
  if (mod2.date !== void 0) {
    date2.setDate(date2.getDate() + sign * mod2.date);
    delete mod2.date;
  }
  return date2;
}
function applyYearMonthDay(date2, mod2, middle) {
  const year = mod2.year !== void 0 ? mod2.year : date2[`get${middle}FullYear`](), month = mod2.month !== void 0 ? mod2.month - 1 : date2[`get${middle}Month`](), maxDay = new Date(year, month + 1, 0).getDate(), day = Math.min(maxDay, mod2.date !== void 0 ? mod2.date : date2[`get${middle}Date`]());
  date2[`set${middle}Date`](1);
  date2[`set${middle}Month`](2);
  date2[`set${middle}FullYear`](year);
  date2[`set${middle}Month`](month);
  date2[`set${middle}Date`](day);
  delete mod2.year;
  delete mod2.month;
  delete mod2.date;
  return date2;
}
function getChange(date2, rawMod, sign) {
  const mod2 = normalizeMod(rawMod), d = new Date(date2), t = mod2.year !== void 0 || mod2.month !== void 0 || mod2.date !== void 0 ? applyYearMonthDayChange(d, mod2, sign) : d;
  for (const key in mod2) {
    const op = capitalize(key);
    t[`set${op}`](t[`get${op}`]() + sign * mod2[key]);
  }
  return t;
}
function normalizeMod(mod2) {
  const acc = { ...mod2 };
  if (mod2.years !== void 0) {
    acc.year = mod2.years;
    delete acc.years;
  }
  if (mod2.months !== void 0) {
    acc.month = mod2.months;
    delete acc.months;
  }
  if (mod2.days !== void 0) {
    acc.date = mod2.days;
    delete acc.days;
  }
  if (mod2.day !== void 0) {
    acc.date = mod2.day;
    delete acc.day;
  }
  if (mod2.hour !== void 0) {
    acc.hours = mod2.hour;
    delete acc.hour;
  }
  if (mod2.minute !== void 0) {
    acc.minutes = mod2.minute;
    delete acc.minute;
  }
  if (mod2.second !== void 0) {
    acc.seconds = mod2.second;
    delete acc.second;
  }
  if (mod2.millisecond !== void 0) {
    acc.milliseconds = mod2.millisecond;
    delete acc.millisecond;
  }
  return acc;
}
function adjustDate(date2, rawMod, utc) {
  const mod2 = normalizeMod(rawMod), middle = utc === true ? "UTC" : "", d = new Date(date2), t = mod2.year !== void 0 || mod2.month !== void 0 || mod2.date !== void 0 ? applyYearMonthDay(d, mod2, middle) : d;
  for (const key in mod2) {
    const op = key.charAt(0).toUpperCase() + key.slice(1);
    t[`set${middle}${op}`](mod2[key]);
  }
  return t;
}
function extractDate(str, mask, dateLocale) {
  const d = __splitDate(str, mask, dateLocale);
  const date2 = new Date(
    d.year,
    d.month === null ? null : d.month - 1,
    d.day === null ? 1 : d.day,
    d.hour,
    d.minute,
    d.second,
    d.millisecond
  );
  const tzOffset = date2.getTimezoneOffset();
  return d.timezoneOffset === null || d.timezoneOffset === tzOffset ? date2 : getChange(date2, { minutes: d.timezoneOffset - tzOffset }, 1);
}
function __splitDate(str, mask, dateLocale, calendar, defaultModel) {
  const date2 = {
    year: null,
    month: null,
    day: null,
    hour: null,
    minute: null,
    second: null,
    millisecond: null,
    timezoneOffset: null,
    dateHash: null,
    timeHash: null
  };
  defaultModel !== void 0 && Object.assign(date2, defaultModel);
  if (str === void 0 || str === null || str === "" || typeof str !== "string") {
    return date2;
  }
  if (mask === void 0) {
    mask = defaultMask;
  }
  const langOpts = getDateLocale(dateLocale, Plugin.props), months = langOpts.months, monthsShort = langOpts.monthsShort;
  const { regex, map } = getRegexData(mask, langOpts);
  const match = str.match(regex);
  if (match === null) {
    return date2;
  }
  let tzString = "";
  if (map.X !== void 0 || map.x !== void 0) {
    const stamp = parseInt(match[map.X !== void 0 ? map.X : map.x], 10);
    if (isNaN(stamp) === true || stamp < 0) {
      return date2;
    }
    const d = new Date(stamp * (map.X !== void 0 ? 1e3 : 1));
    date2.year = d.getFullYear();
    date2.month = d.getMonth() + 1;
    date2.day = d.getDate();
    date2.hour = d.getHours();
    date2.minute = d.getMinutes();
    date2.second = d.getSeconds();
    date2.millisecond = d.getMilliseconds();
  } else {
    if (map.YYYY !== void 0) {
      date2.year = parseInt(match[map.YYYY], 10);
    } else if (map.YY !== void 0) {
      const y = parseInt(match[map.YY], 10);
      date2.year = y < 0 ? y : 2e3 + y;
    }
    if (map.M !== void 0) {
      date2.month = parseInt(match[map.M], 10);
      if (date2.month < 1 || date2.month > 12) {
        return date2;
      }
    } else if (map.MMM !== void 0) {
      date2.month = monthsShort.indexOf(match[map.MMM]) + 1;
    } else if (map.MMMM !== void 0) {
      date2.month = months.indexOf(match[map.MMMM]) + 1;
    }
    if (map.D !== void 0) {
      date2.day = parseInt(match[map.D], 10);
      if (date2.year === null || date2.month === null || date2.day < 1) {
        return date2;
      }
      const maxDay = calendar !== "persian" ? new Date(date2.year, date2.month, 0).getDate() : jalaaliMonthLength(date2.year, date2.month);
      if (date2.day > maxDay) {
        return date2;
      }
    }
    if (map.H !== void 0) {
      date2.hour = parseInt(match[map.H], 10) % 24;
    } else if (map.h !== void 0) {
      date2.hour = parseInt(match[map.h], 10) % 12;
      if (map.A && match[map.A] === "PM" || map.a && match[map.a] === "pm" || map.aa && match[map.aa] === "p.m.") {
        date2.hour += 12;
      }
      date2.hour = date2.hour % 24;
    }
    if (map.m !== void 0) {
      date2.minute = parseInt(match[map.m], 10) % 60;
    }
    if (map.s !== void 0) {
      date2.second = parseInt(match[map.s], 10) % 60;
    }
    if (map.S !== void 0) {
      date2.millisecond = parseInt(match[map.S], 10) * 10 ** (3 - match[map.S].length);
    }
    if (map.Z !== void 0 || map.ZZ !== void 0) {
      tzString = map.Z !== void 0 ? match[map.Z].replace(":", "") : match[map.ZZ];
      date2.timezoneOffset = (tzString[0] === "+" ? -1 : 1) * (60 * tzString.slice(1, 3) + 1 * tzString.slice(3, 5));
    }
  }
  date2.dateHash = pad(date2.year, 6) + "/" + pad(date2.month) + "/" + pad(date2.day);
  date2.timeHash = pad(date2.hour) + ":" + pad(date2.minute) + ":" + pad(date2.second) + tzString;
  return date2;
}
function isValid(date2) {
  return typeof date2 === "number" ? true : isNaN(Date.parse(date2)) === false;
}
function buildDate(mod2, utc) {
  return adjustDate(new Date(), mod2, utc);
}
function getDayOfWeek(date2) {
  const dow = new Date(date2).getDay();
  return dow === 0 ? 7 : dow;
}
function getWeekOfYear(date2) {
  const thursday = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
  thursday.setDate(thursday.getDate() - (thursday.getDay() + 6) % 7 + 3);
  const firstThursday = new Date(thursday.getFullYear(), 0, 4);
  firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3);
  const ds = thursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  thursday.setHours(thursday.getHours() - ds);
  const weekDiff = (thursday - firstThursday) / (MILLISECONDS_IN_DAY * 7);
  return 1 + Math.floor(weekDiff);
}
function getDayIdentifier(date2) {
  return date2.getFullYear() * 1e4 + date2.getMonth() * 100 + date2.getDate();
}
function getDateIdentifier(date2, onlyDate) {
  const d = new Date(date2);
  return onlyDate === true ? getDayIdentifier(d) : d.getTime();
}
function isBetweenDates(date2, from, to, opts = {}) {
  const d1 = getDateIdentifier(from, opts.onlyDate), d2 = getDateIdentifier(to, opts.onlyDate), cur = getDateIdentifier(date2, opts.onlyDate);
  return (cur > d1 || opts.inclusiveFrom === true && cur === d1) && (cur < d2 || opts.inclusiveTo === true && cur === d2);
}
function addToDate(date2, mod2) {
  return getChange(date2, mod2, 1);
}
function subtractFromDate(date2, mod2) {
  return getChange(date2, mod2, -1);
}
function startOfDate(date2, unit, utc) {
  const t = new Date(date2), prefix = `set${utc === true ? "UTC" : ""}`;
  switch (unit) {
    case "year":
    case "years":
      t[`${prefix}Month`](0);
    case "month":
    case "months":
      t[`${prefix}Date`](1);
    case "day":
    case "days":
    case "date":
      t[`${prefix}Hours`](0);
    case "hour":
    case "hours":
      t[`${prefix}Minutes`](0);
    case "minute":
    case "minutes":
      t[`${prefix}Seconds`](0);
    case "second":
    case "seconds":
      t[`${prefix}Milliseconds`](0);
  }
  return t;
}
function endOfDate(date2, unit, utc) {
  const t = new Date(date2), prefix = `set${utc === true ? "UTC" : ""}`;
  switch (unit) {
    case "year":
    case "years":
      t[`${prefix}Month`](11);
    case "month":
    case "months":
      t[`${prefix}Date`](daysInMonth(t));
    case "day":
    case "days":
    case "date":
      t[`${prefix}Hours`](23);
    case "hour":
    case "hours":
      t[`${prefix}Minutes`](59);
    case "minute":
    case "minutes":
      t[`${prefix}Seconds`](59);
    case "second":
    case "seconds":
      t[`${prefix}Milliseconds`](999);
  }
  return t;
}
function getMaxDate(date2) {
  let t = new Date(date2);
  Array.prototype.slice.call(arguments, 1).forEach((d) => {
    t = Math.max(t, new Date(d));
  });
  return t;
}
function getMinDate(date2) {
  let t = new Date(date2);
  Array.prototype.slice.call(arguments, 1).forEach((d) => {
    t = Math.min(t, new Date(d));
  });
  return t;
}
function getDiff(t, sub, interval) {
  return (t.getTime() - t.getTimezoneOffset() * MILLISECONDS_IN_MINUTE - (sub.getTime() - sub.getTimezoneOffset() * MILLISECONDS_IN_MINUTE)) / interval;
}
function getDateDiff(date2, subtract, unit = "days") {
  const t = new Date(date2), sub = new Date(subtract);
  switch (unit) {
    case "years":
    case "year":
      return t.getFullYear() - sub.getFullYear();
    case "months":
    case "month":
      return (t.getFullYear() - sub.getFullYear()) * 12 + t.getMonth() - sub.getMonth();
    case "days":
    case "day":
    case "date":
      return getDiff(startOfDate(t, "day"), startOfDate(sub, "day"), MILLISECONDS_IN_DAY);
    case "hours":
    case "hour":
      return getDiff(startOfDate(t, "hour"), startOfDate(sub, "hour"), MILLISECONDS_IN_HOUR);
    case "minutes":
    case "minute":
      return getDiff(startOfDate(t, "minute"), startOfDate(sub, "minute"), MILLISECONDS_IN_MINUTE);
    case "seconds":
    case "second":
      return getDiff(startOfDate(t, "second"), startOfDate(sub, "second"), 1e3);
  }
}
function getDayOfYear(date2) {
  return getDateDiff(date2, startOfDate(date2, "year"), "days") + 1;
}
function inferDateFormat(date2) {
  return isDate(date2) === true ? "date" : typeof date2 === "number" ? "number" : "string";
}
function getDateBetween(date2, min, max) {
  const t = new Date(date2);
  if (min) {
    const low = new Date(min);
    if (t < low) {
      return low;
    }
  }
  if (max) {
    const high = new Date(max);
    if (t > high) {
      return high;
    }
  }
  return t;
}
function isSameDate(date2, date22, unit) {
  const t = new Date(date2), d = new Date(date22);
  if (unit === void 0) {
    return t.getTime() === d.getTime();
  }
  switch (unit) {
    case "second":
    case "seconds":
      if (t.getSeconds() !== d.getSeconds()) {
        return false;
      }
    case "minute":
    case "minutes":
      if (t.getMinutes() !== d.getMinutes()) {
        return false;
      }
    case "hour":
    case "hours":
      if (t.getHours() !== d.getHours()) {
        return false;
      }
    case "day":
    case "days":
    case "date":
      if (t.getDate() !== d.getDate()) {
        return false;
      }
    case "month":
    case "months":
      if (t.getMonth() !== d.getMonth()) {
        return false;
      }
    case "year":
    case "years":
      if (t.getFullYear() !== d.getFullYear()) {
        return false;
      }
      break;
    default:
      throw new Error(`date isSameDate unknown unit ${unit}`);
  }
  return true;
}
function daysInMonth(date2) {
  return new Date(date2.getFullYear(), date2.getMonth() + 1, 0).getDate();
}
function getOrdinal(n) {
  if (n >= 11 && n <= 13) {
    return `${n}th`;
  }
  switch (n % 10) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}rd`;
  }
  return `${n}th`;
}
const formatter = {
  YY(date2, dateLocale, forcedYear) {
    const y = this.YYYY(date2, dateLocale, forcedYear) % 100;
    return y >= 0 ? pad(y) : "-" + pad(Math.abs(y));
  },
  YYYY(date2, _dateLocale, forcedYear) {
    return forcedYear !== void 0 && forcedYear !== null ? forcedYear : date2.getFullYear();
  },
  M(date2) {
    return date2.getMonth() + 1;
  },
  MM(date2) {
    return pad(date2.getMonth() + 1);
  },
  MMM(date2, dateLocale) {
    return dateLocale.monthsShort[date2.getMonth()];
  },
  MMMM(date2, dateLocale) {
    return dateLocale.months[date2.getMonth()];
  },
  Q(date2) {
    return Math.ceil((date2.getMonth() + 1) / 3);
  },
  Qo(date2) {
    return getOrdinal(this.Q(date2));
  },
  D(date2) {
    return date2.getDate();
  },
  Do(date2) {
    return getOrdinal(date2.getDate());
  },
  DD(date2) {
    return pad(date2.getDate());
  },
  DDD(date2) {
    return getDayOfYear(date2);
  },
  DDDD(date2) {
    return pad(getDayOfYear(date2), 3);
  },
  d(date2) {
    return date2.getDay();
  },
  dd(date2, dateLocale) {
    return this.dddd(date2, dateLocale).slice(0, 2);
  },
  ddd(date2, dateLocale) {
    return dateLocale.daysShort[date2.getDay()];
  },
  dddd(date2, dateLocale) {
    return dateLocale.days[date2.getDay()];
  },
  E(date2) {
    return date2.getDay() || 7;
  },
  w(date2) {
    return getWeekOfYear(date2);
  },
  ww(date2) {
    return pad(getWeekOfYear(date2));
  },
  H(date2) {
    return date2.getHours();
  },
  HH(date2) {
    return pad(date2.getHours());
  },
  h(date2) {
    const hours = date2.getHours();
    return hours === 0 ? 12 : hours > 12 ? hours % 12 : hours;
  },
  hh(date2) {
    return pad(this.h(date2));
  },
  m(date2) {
    return date2.getMinutes();
  },
  mm(date2) {
    return pad(date2.getMinutes());
  },
  s(date2) {
    return date2.getSeconds();
  },
  ss(date2) {
    return pad(date2.getSeconds());
  },
  S(date2) {
    return Math.floor(date2.getMilliseconds() / 100);
  },
  SS(date2) {
    return pad(Math.floor(date2.getMilliseconds() / 10));
  },
  SSS(date2) {
    return pad(date2.getMilliseconds(), 3);
  },
  A(date2) {
    return this.H(date2) < 12 ? "AM" : "PM";
  },
  a(date2) {
    return this.H(date2) < 12 ? "am" : "pm";
  },
  aa(date2) {
    return this.H(date2) < 12 ? "a.m." : "p.m.";
  },
  Z(date2, _dateLocale, _forcedYear, forcedTimezoneOffset) {
    const tzOffset = forcedTimezoneOffset === void 0 || forcedTimezoneOffset === null ? date2.getTimezoneOffset() : forcedTimezoneOffset;
    return formatTimezone(tzOffset, ":");
  },
  ZZ(date2, _dateLocale, _forcedYear, forcedTimezoneOffset) {
    const tzOffset = forcedTimezoneOffset === void 0 || forcedTimezoneOffset === null ? date2.getTimezoneOffset() : forcedTimezoneOffset;
    return formatTimezone(tzOffset);
  },
  X(date2) {
    return Math.floor(date2.getTime() / 1e3);
  },
  x(date2) {
    return date2.getTime();
  }
};
function formatDate(val, mask, dateLocale, __forcedYear, __forcedTimezoneOffset) {
  if (val !== 0 && !val || val === Infinity || val === -Infinity) {
    return;
  }
  const date2 = new Date(val);
  if (isNaN(date2)) {
    return;
  }
  if (mask === void 0) {
    mask = defaultMask;
  }
  const locale = getDateLocale(dateLocale, Plugin.props);
  return mask.replace(
    token,
    (match, text) => match in formatter ? formatter[match](date2, locale, __forcedYear, __forcedTimezoneOffset) : text === void 0 ? match : text.split("\\]").join("]")
  );
}
function clone(date2) {
  return isDate(date2) === true ? new Date(date2.getTime()) : date2;
}
var date = {
  isValid,
  extractDate,
  buildDate,
  getDayOfWeek,
  getWeekOfYear,
  isBetweenDates,
  addToDate,
  subtractFromDate,
  adjustDate,
  startOfDate,
  endOfDate,
  getMaxDate,
  getMinDate,
  getDateDiff,
  getDayOfYear,
  inferDateFormat,
  getDateBetween,
  isSameDate,
  daysInMonth,
  formatDate,
  clone
};
var Mail_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-5425d49b"), n = n(), popScopeId(), n);
const _hoisted_1$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("input", {
  type: "submit",
  style: { "position": "absolute", "left": "-9999px" }
}, null, -1));
const _hoisted_2$1 = { class: "row q-col-gutter-md" };
const _hoisted_3$1 = { class: "col" };
const _sfc_main$1 = defineComponent({
  __name: "Mail",
  props: {
    lead: {
      type: Object,
      required: true
    },
    showMail: {
      type: Boolean,
      required: true
    }
  },
  emits: [
    "doClose"
  ],
  setup(__props, { emit: __emit }) {
    const log = debug("app:mail");
    const props = __props;
    const emit = __emit;
    const form = ref({
      email: props.lead.email,
      subject: `Anfrage zu Fahrzeug ${props.lead.fahrzeug.model} (${props.lead.gfz})`,
      text: ""
    }), config = {};
    function doSave() {
      log("doSave", form.value);
    }
    function doClose() {
      emit("doClose");
    }
    return (_ctx, _cache) => {
      const _component_editor = resolveComponent("editor");
      return openBlock(), createBlock(QLayout, {
        container: "",
        view: "lHh lpR lff",
        class: "shadow-2 rounded mail-window"
      }, {
        default: withCtx(() => [
          createVNode(QHeader, {
            elevated: "",
            class: "bg-primary text-white",
            "height-hint": "98"
          }, {
            default: withCtx(() => [
              createVNode(QToolbar, null, {
                default: withCtx(() => [
                  createVNode(QToolbarTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Mail")
                    ]),
                    _: 1
                  }),
                  createVNode(QSeparator, {
                    spaced: "",
                    vertical: ""
                  }),
                  createVNode(QBtn, {
                    "no-caps": "",
                    size: "md",
                    color: "white",
                    "text-color": "black",
                    onClick: _cache[0] || (_cache[0] = ($event) => doSave()),
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
                  }),
                  createVNode(QBtn, {
                    "no-caps": "",
                    size: "md",
                    color: "white",
                    "text-color": "black",
                    onClick: _cache[1] || (_cache[1] = ($event) => doClose()),
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
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, { class: "back-grey" }, {
                default: withCtx(() => [
                  createVNode(QForm, {
                    onSubmit: doSave,
                    class: "q-gutter-xs",
                    ref: "customer"
                  }, {
                    default: withCtx(() => [
                      _hoisted_1$1,
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_2$1, [
                            createBaseVNode("div", _hoisted_3$1, [
                              createVNode(QInput, {
                                name: "email",
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).email = $event),
                                "lazy-rules": "",
                                dense: "",
                                outlined: "",
                                label: _ctx.$t("messages.ColMail"),
                                hint: ""
                              }, null, 8, ["modelValue", "label"]),
                              createVNode(QInput, {
                                name: "subject",
                                modelValue: unref(form).subject,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).subject = $event),
                                "lazy-rules": "",
                                dense: "",
                                outlined: "",
                                label: _ctx.$t("messages.LabelSubject"),
                                hint: ""
                              }, null, 8, ["modelValue", "label"]),
                              createVNode(_component_editor, {
                                ref: "editor",
                                config,
                                header: ""
                              }, null, 512)
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 512)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
var Mail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5425d49b"], ["__file", "Mail.vue"]]);
var LeadInbound_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-2ae5d9f4"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "row" };
const _hoisted_2 = { class: "col-2" };
const _hoisted_3 = { class: "text-h6" };
const _hoisted_4 = { class: "text-subtitle2" };
const _hoisted_5 = { class: "col-10" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("input", {
  type: "submit",
  style: { "position": "absolute", "left": "-9999px" }
}, null, -1));
const _hoisted_7 = { class: "row q-col-gutter-md" };
const _hoisted_8 = { class: "col-3" };
const _hoisted_9 = { class: "row" };
const _hoisted_10 = { class: "col" };
const _hoisted_11 = { class: "text-h6" };
const _hoisted_12 = { class: "row" };
const _hoisted_13 = { class: "col" };
const _hoisted_14 = { class: "text-h6" };
const _hoisted_15 = { class: "col-6" };
const _hoisted_16 = { class: "row q-col-gutter-md" };
const _hoisted_17 = { class: "col list" };
const _hoisted_18 = { class: "row q-col-gutter-md" };
const _hoisted_19 = { class: "col-6" };
const _hoisted_20 = { class: "row q-col-gutter-md" };
const _hoisted_21 = { class: "col-6" };
const _hoisted_22 = { class: "col-6" };
const _hoisted_23 = { class: "col-3 back-grey" };
const _hoisted_24 = { class: "row q-col-gutter-md" };
const _hoisted_25 = { class: "col q-px-lg q-pb-md" };
const _hoisted_26 = { class: "text-h6" };
const _sfc_main = defineComponent({
  __name: "LeadInbound",
  setup(__props) {
    const log = debug("app:leadInbound");
    const { t } = useI18n();
    const init = {
      collName: "lead",
      stateName: "leadInbound",
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
    const leadInboundGrid = ref({
      filter: { state: "new" },
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
            return _.get(params, "data.sales.firstName", "") + " " + _.get(params, "data.sales.surName", "");
          }
        },
        categoryColumn: {
          valueGetter(params) {
            const category = _.get(params, "data.category", "0");
            return _.get(params, `context.categories.${category}.desc`, category);
          }
        }
      }
    });
    const tab = ref("contact"), carList = ref([]), portalList = ref([]), autoFilter = ref([]), showForm = ref(false), showMail = ref(false), showGrid = ref(false), filterPortal = ref(""), refGrid = ref(null), filterState = ref("new"), stateList = status(t), send$1 = send();
    ref([]);
    const accountStore = useAccountStore();
    const autosellerStore = useDataStore("autoseller", "autoseller");
    const userStore = useDataStore("user", "user");
    const carinfoStore = useDataStore("carinfo", "carInfo");
    const categoryStore = useDataStore("categories", "categories");
    const companyStore = useDataStore("companies", "companies");
    const portalStore = useDataStore("portals", "portal");
    const { user } = storeToRefs(accountStore);
    const { data: allauto } = storeToRefs(autosellerStore);
    const { data: users } = storeToRefs(userStore);
    const { data: carinfos } = storeToRefs(carinfoStore);
    const { data: categories } = storeToRefs(categoryStore);
    storeToRefs(companyStore);
    const { data: portals } = storeToRefs(portalStore);
    watch(filterState, (newState) => {
      log("state", newState);
      const filterInstance = refGrid.value.gridOpt.api.getFilterInstance("state");
      filterInstance.setModel({
        type: "equals",
        filter: newState
      });
      refGrid.value.gridOpt.api.onFilterChanged();
    });
    watch(filterPortal, (newPortal) => {
      const filterInstance = refGrid.value.gridOpt.api.getFilterInstance("mail.type");
      log("portal", newPortal);
      if (newPortal)
        filterInstance.setModel({
          type: "equals",
          filter: newPortal
        });
      else
        filterInstance.setModel(null);
      refGrid.value.gridOpt.api.onFilterChanged();
    });
    async function afterSelect(record) {
      log("afterSelect", record);
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
      const list = [];
      _.forEach(record.infos, (entry, key) => {
        let desc = key, type = "string";
        if (carinfos.value[key]) {
          desc = carinfos.value[key].desc;
          type = carinfos.value[key].type;
        }
        switch (type) {
          case "boolean":
            entry = entry === "0" ? "Ja" : "Nein";
            break;
        }
        list.push({ key, entry, desc, type });
      });
      carList.value = list;
      showForm.value = true;
      return record;
    }
    function afterSave() {
      showForm.value = false;
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
        categories: _.keyBy(categories.value, "name"),
        stateList: _.keyBy(stateList, "value")
      };
    }
    function takeOver() {
      log("take over");
      form.value.state = "open";
      form.value.sales = user.value;
      form.value.hist.push({
        type: "take",
        timestamp: new Date().toISOString(),
        title: "Angenommen",
        info: `Zugeordnet ${user.value.firstName} ${user.value.lastName}`
      });
      doSave();
      showForm.value = false;
    }
    function isSales() {
      return !!_.get(form.value, "sales._id");
    }
    Promise.all([
      userStore.getStore(),
      carinfoStore.getStore(),
      categoryStore.getStore(),
      companyStore.getStore(),
      portalStore.getStore()
    ]).then(async () => {
      await leadStore.registerAction({ action: "afterSelect", target: "Lead", func: afterSelect });
      await leadStore.registerAction({ action: "afterSave", target: "Lead", func: afterSave });
      portalList.value = [
        {
          value: "",
          label: t("messages.LabelAll")
        },
        ..._.map(portals.value, (item) => {
          return {
            value: item.name,
            label: item.name || ""
          };
        })
      ];
      autoFilter.value = allauto.value;
      carinfos.value = _.keyBy(carinfos.value, "key");
      showGrid.value = true;
    }).catch((err) => {
      log("ERROR loading", err);
    });
    return (_ctx, _cache) => {
      const _directive_t = resolveDirective("t");
      return openBlock(), createBlock(QPage, { class: "q-pa-sm" }, {
        default: withCtx(() => [
          createVNode(NavBar, {
            title: _ctx.$t("messages.LabelLead-inbound"),
            icon: "fas fa-mail-bulk",
            stateName: "leadInbound",
            xfuncs: "navbarSubmenu",
            state: unref(leadStore),
            type: "window"
          }, null, 8, ["title", "state"]),
          createVNode(QCard, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(QCard, { class: "bg-grey-2" }, {
                    default: withCtx(() => [
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          withDirectives(createBaseVNode("div", _hoisted_3, null, 512), [
                            [_directive_t, "messages.LabelFilter"]
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(QSeparator),
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          withDirectives(createBaseVNode("div", _hoisted_4, null, 512), [
                            [_directive_t, "messages.LabelSrc"]
                          ]),
                          createVNode(QOptionGroup, {
                            dense: "",
                            modelValue: unref(filterPortal),
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(filterPortal) ? filterPortal.value = $event : null),
                            options: unref(portalList)
                          }, null, 8, ["modelValue", "options"])
                        ]),
                        _: 1
                      }),
                      createVNode(QSeparator)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_5, [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      unref(showGrid) ? (openBlock(), createBlock(Grid, {
                        key: 0,
                        gridName: "leadInboundGrid",
                        gridOptions: unref(leadInboundGrid),
                        stateName: "leadInbound",
                        state: unref(leadStore),
                        onSubGridReady: subGridReady,
                        type: "server",
                        orientation: "portrait",
                        ref_key: "refGrid",
                        ref: refGrid
                      }, null, 8, ["gridOptions", "state"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode(QSeparator)
            ]),
            _: 1
          }),
          createVNode(QDialog, {
            modelValue: unref(showForm),
            "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => isRef(showForm) ? showForm.value = $event : null),
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
                              _hoisted_6,
                              createVNode(QCardSection, null, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_7, [
                                    createBaseVNode("div", _hoisted_8, [
                                      createBaseVNode("div", _hoisted_9, [
                                        createBaseVNode("div", _hoisted_10, [
                                          withDirectives(createBaseVNode("div", _hoisted_11, null, 512), [
                                            [_directive_t, "messages.LabelLead"]
                                          ]),
                                          createVNode(QInput, {
                                            modelValue: unref(form).lead.firstName,
                                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).lead.firstName = $event),
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
                                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).lead.surName = $event),
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
                                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).lead.email = $event),
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
                                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(form).lead.telefon = $event),
                                            "lazy-rules": "",
                                            dense: "",
                                            outlined: "",
                                            "bg-color": "white",
                                            label: _ctx.$t("messages.ColPhone"),
                                            hint: ""
                                          }, null, 8, ["modelValue", "label"])
                                        ])
                                      ]),
                                      createBaseVNode("div", _hoisted_12, [
                                        createBaseVNode("div", _hoisted_13, [
                                          withDirectives(createBaseVNode("div", _hoisted_14, null, 512), [
                                            [_directive_t, "messages.LabelCar"]
                                          ]),
                                          createVNode(QInput, {
                                            name: "date",
                                            modelValue: unref(form).date,
                                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(form).date = $event),
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
                                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(form).gfz = $event),
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
                                            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(form).fahrzeug.branch = $event),
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
                                            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(form).sales = $event),
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
                                            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(form).category = $event),
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
                                    createBaseVNode("div", _hoisted_15, [
                                      createVNode(QToolbar, { class: "bg-blue-grey" }, {
                                        default: withCtx(() => [
                                          createVNode(QBtn, {
                                            icon: "fas fa-envelope",
                                            color: "white",
                                            "text-color": "black",
                                            label: _ctx.$t("messages.ColMail"),
                                            onClick: _cache[10] || (_cache[10] = ($event) => showMail.value = true),
                                            dense: ""
                                          }, null, 8, ["label"]),
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
                                            label: _ctx.$t("messages.ColLetter"),
                                            onClick: unref(send$1).Date,
                                            dense: ""
                                          }, null, 8, ["label", "onClick"]),
                                          createVNode(QSpace),
                                          createVNode(QBtn, {
                                            icon: "fas fa-handshake",
                                            color: "white",
                                            "text-color": "black",
                                            label: _ctx.$t("messages.LabelTakeOver"),
                                            onClick: takeOver,
                                            dense: "",
                                            disable: isSales()
                                          }, null, 8, ["label", "disable"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(QTabs, {
                                        modelValue: unref(tab),
                                        "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => isRef(tab) ? tab.value = $event : null),
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
                                          }, null, 8, ["label"])
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue"]),
                                      createVNode(QTabPanels, {
                                        modelValue: unref(tab),
                                        "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => isRef(tab) ? tab.value = $event : null)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(QTabPanel, { name: "contact" }, {
                                            default: withCtx(() => [
                                              createBaseVNode("div", _hoisted_16, [
                                                createBaseVNode("div", _hoisted_17, [
                                                  createVNode(QInput, {
                                                    name: "leadinfo",
                                                    modelValue: unref(form).lead.info,
                                                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(form).lead.info = $event),
                                                    "lazy-rules": "",
                                                    type: "textarea",
                                                    dense: "",
                                                    outlined: "",
                                                    autogrow: "",
                                                    label: _ctx.$t("messages.LabelInfo"),
                                                    hint: ""
                                                  }, null, 8, ["modelValue", "label"])
                                                ])
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(QTabPanel, { name: "car" }, {
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
                                              createBaseVNode("div", _hoisted_20, [
                                                createBaseVNode("div", _hoisted_21, [
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
                                                createBaseVNode("div", _hoisted_22, [
                                                  createVNode(QScrollArea, { class: "list" }, {
                                                    default: withCtx(() => [
                                                      createVNode(QList, {
                                                        bordered: "",
                                                        separator: "",
                                                        dense: "",
                                                        outlined: ""
                                                      }, {
                                                        default: withCtx(() => [
                                                          (openBlock(true), createElementBlock(Fragment, null, renderList(description(), (item) => {
                                                            return openBlock(), createBlock(QItem, {
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
                                                          }), 128))
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
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue"])
                                    ]),
                                    createBaseVNode("div", _hoisted_23, [
                                      createVNode(QScrollArea, { class: "list" }, {
                                        default: withCtx(() => [
                                          createBaseVNode("div", _hoisted_24, [
                                            createBaseVNode("div", _hoisted_25, [
                                              withDirectives(createBaseVNode("div", _hoisted_26, null, 512), [
                                                [_directive_t, "messages.LabelHistory"]
                                              ]),
                                              createVNode(QTimeline, { dense: "" }, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(form).hist, (item, index) => {
                                                    return openBlock(), createBlock(QTimelineEntry, {
                                                      key: index,
                                                      title: _ctx.$t(`messages.History_${item.type}`),
                                                      subtitle: unref(date).formatDate(item.timestamp, "dddd DD.MM.YYYY HH:mm"),
                                                      icon: item.icon,
                                                      color: item.color
                                                    }, {
                                                      default: withCtx(() => [
                                                        createBaseVNode("div", null, toDisplayString(_ctx.$t(`messages.${item.info}`)), 1)
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
            modelValue: unref(showMail),
            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => isRef(showMail) ? showMail.value = $event : null)
          }, {
            default: withCtx(() => [
              createVNode(Mail, {
                lead: unref(form),
                showMail: unref(showMail),
                onDoClose: _cache[15] || (_cache[15] = ($event) => showMail.value = false)
              }, null, 8, ["lead", "showMail"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      });
    };
  }
});
var LeadInbound = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2ae5d9f4"], ["__file", "LeadInbound.vue"]]);
export { LeadInbound as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGVhZEluYm91bmQuZTVlM2NkY2MuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUvZGF0ZS1wZXJzaWFuLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvZGF0ZS5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01haWwudnVlIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL0xlYWRJbmJvdW5kLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9qYWxhYWxpL2phbGFhbGktanNcblxuLypcbiAgSmFsYWFsaSB5ZWFycyBzdGFydGluZyB0aGUgMzMteWVhciBydWxlLlxuKi9cbmNvbnN0IGJyZWFrcyA9IFtcbiAgLTYxLCA5LCAzOCwgMTk5LCA0MjYsIDY4NiwgNzU2LCA4MTgsIDExMTEsIDExODEsIDEyMTAsXG4gIDE2MzUsIDIwNjAsIDIwOTcsIDIxOTIsIDIyNjIsIDIzMjQsIDIzOTQsIDI0NTYsIDMxNzhcbl1cblxuLypcbiAgQ29udmVydHMgYSBHcmVnb3JpYW4gZGF0ZSB0byBKYWxhYWxpLlxuKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0phbGFhbGkgKGd5LCBnbSwgZ2QpIHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChneSkgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIGdkID0gZ3kuZ2V0RGF0ZSgpXG4gICAgZ20gPSBneS5nZXRNb250aCgpICsgMVxuICAgIGd5ID0gZ3kuZ2V0RnVsbFllYXIoKVxuICB9XG4gIHJldHVybiBkMmooZzJkKGd5LCBnbSwgZ2QpKVxufVxuXG4vKlxuICBDb252ZXJ0cyBhIEphbGFhbGkgZGF0ZSB0byBHcmVnb3JpYW4uXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHRvR3JlZ29yaWFuIChqeSwgam0sIGpkKSB7XG4gIHJldHVybiBkMmcoajJkKGp5LCBqbSwgamQpKVxufVxuXG4vKlxuICBJcyB0aGlzIGEgbGVhcCB5ZWFyIG9yIG5vdD9cbiovXG5mdW5jdGlvbiBpc0xlYXBKYWxhYWxpWWVhciAoankpIHtcbiAgcmV0dXJuIGphbENhbExlYXAoankpID09PSAwXG59XG5cbi8qXG4gIE51bWJlciBvZiBkYXlzIGluIGEgZ2l2ZW4gbW9udGggaW4gYSBKYWxhYWxpIHllYXIuXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGphbGFhbGlNb250aExlbmd0aCAoanksIGptKSB7XG4gIGlmIChqbSA8PSA2KSByZXR1cm4gMzFcbiAgaWYgKGptIDw9IDExKSByZXR1cm4gMzBcbiAgaWYgKGlzTGVhcEphbGFhbGlZZWFyKGp5KSkgcmV0dXJuIDMwXG4gIHJldHVybiAyOVxufVxuXG4vKlxuICAgIFRoaXMgZnVuY3Rpb24gZGV0ZXJtaW5lcyBpZiB0aGUgSmFsYWFsaSAoUGVyc2lhbikgeWVhciBpc1xuICAgIGxlYXAgKDM2Ni1kYXkgbG9uZykgb3IgaXMgdGhlIGNvbW1vbiB5ZWFyICgzNjUgZGF5cylcblxuICAgIEBwYXJhbSBqeSBKYWxhYWxpIGNhbGVuZGFyIHllYXIgKC02MSB0byAzMTc3KVxuICAgIEByZXR1cm5zIG51bWJlciBvZiB5ZWFycyBzaW5jZSB0aGUgbGFzdCBsZWFwIHllYXIgKDAgdG8gNClcbiAqL1xuZnVuY3Rpb24gamFsQ2FsTGVhcCAoankpIHtcbiAgY29uc3QgYmwgPSBicmVha3MubGVuZ3RoXG4gIGxldFxuICAgIGpwID0gYnJlYWtzWyAwIF0sXG4gICAgam0sXG4gICAganVtcCxcbiAgICBsZWFwLFxuICAgIG4sXG4gICAgaVxuXG4gIGlmIChqeSA8IGpwIHx8IGp5ID49IGJyZWFrc1sgYmwgLSAxIF0pIHsgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEphbGFhbGkgeWVhciAnICsgankpIH1cblxuICBmb3IgKGkgPSAxOyBpIDwgYmw7IGkgKz0gMSkge1xuICAgIGptID0gYnJlYWtzWyBpIF1cbiAgICBqdW1wID0gam0gLSBqcFxuICAgIGlmIChqeSA8IGptKSB7IGJyZWFrIH1cbiAgICBqcCA9IGptXG4gIH1cbiAgbiA9IGp5IC0ganBcblxuICBpZiAoanVtcCAtIG4gPCA2KSB7IG4gPSBuIC0ganVtcCArIGRpdihqdW1wICsgNCwgMzMpICogMzMgfVxuICBsZWFwID0gbW9kKG1vZChuICsgMSwgMzMpIC0gMSwgNClcbiAgaWYgKGxlYXAgPT09IC0xKSB7XG4gICAgbGVhcCA9IDRcbiAgfVxuXG4gIHJldHVybiBsZWFwXG59XG5cbi8qXG4gIFRoaXMgZnVuY3Rpb24gZGV0ZXJtaW5lcyBpZiB0aGUgSmFsYWFsaSAoUGVyc2lhbikgeWVhciBpc1xuICBsZWFwICgzNjYtZGF5IGxvbmcpIG9yIGlzIHRoZSBjb21tb24geWVhciAoMzY1IGRheXMpLCBhbmRcbiAgZmluZHMgdGhlIGRheSBpbiBNYXJjaCAoR3JlZ29yaWFuIGNhbGVuZGFyKSBvZiB0aGUgZmlyc3RcbiAgZGF5IG9mIHRoZSBKYWxhYWxpIHllYXIgKGp5KS5cblxuICBAcGFyYW0gankgSmFsYWFsaSBjYWxlbmRhciB5ZWFyICgtNjEgdG8gMzE3NylcbiAgQHBhcmFtIHdpdGhvdXRMZWFwIHdoZW4gZG9uJ3QgbmVlZCBsZWFwICh0cnVlIG9yIGZhbHNlKSBkZWZhdWx0IGlzIGZhbHNlXG4gIEByZXR1cm5cbiAgICBsZWFwOiBudW1iZXIgb2YgeWVhcnMgc2luY2UgdGhlIGxhc3QgbGVhcCB5ZWFyICgwIHRvIDQpXG4gICAgZ3k6IEdyZWdvcmlhbiB5ZWFyIG9mIHRoZSBiZWdpbm5pbmcgb2YgSmFsYWFsaSB5ZWFyXG4gICAgbWFyY2g6IHRoZSBNYXJjaCBkYXkgb2YgRmFydmFyZGluIHRoZSAxc3QgKDFzdCBkYXkgb2YgankpXG4gIEBzZWU6IGh0dHA6Ly93d3cuYXN0cm8udW5pLnRvcnVuLnBsL35rYi9QYXBlcnMvRU1QL1BlcnNpYW5DLUVNUC5odG1cbiAgQHNlZTogaHR0cDovL3d3dy5mb3VybWlsYWIuY2gvZG9jdW1lbnRzL2NhbGVuZGFyL1xuKi9cbmZ1bmN0aW9uIGphbENhbCAoanksIHdpdGhvdXRMZWFwKSB7XG4gIGNvbnN0XG4gICAgYmwgPSBicmVha3MubGVuZ3RoLFxuICAgIGd5ID0gankgKyA2MjFcbiAgbGV0XG4gICAgbGVhcEogPSAtMTQsXG4gICAganAgPSBicmVha3NbIDAgXSxcbiAgICBqbSxcbiAgICBqdW1wLFxuICAgIGxlYXAsXG4gICAgbixcbiAgICBpXG5cbiAgaWYgKGp5IDwganAgfHwgankgPj0gYnJlYWtzWyBibCAtIDEgXSkgeyB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgSmFsYWFsaSB5ZWFyICcgKyBqeSkgfVxuXG4gIC8vIEZpbmQgdGhlIGxpbWl0aW5nIHllYXJzIGZvciB0aGUgSmFsYWFsaSB5ZWFyIGp5LlxuICBmb3IgKGkgPSAxOyBpIDwgYmw7IGkgKz0gMSkge1xuICAgIGptID0gYnJlYWtzWyBpIF1cbiAgICBqdW1wID0gam0gLSBqcFxuICAgIGlmIChqeSA8IGptKSB7IGJyZWFrIH1cbiAgICBsZWFwSiA9IGxlYXBKICsgZGl2KGp1bXAsIDMzKSAqIDggKyBkaXYobW9kKGp1bXAsIDMzKSwgNClcbiAgICBqcCA9IGptXG4gIH1cbiAgbiA9IGp5IC0ganBcblxuICAvLyBGaW5kIHRoZSBudW1iZXIgb2YgbGVhcCB5ZWFycyBmcm9tIEFEIDYyMSB0byB0aGUgYmVnaW5uaW5nXG4gIC8vIG9mIHRoZSBjdXJyZW50IEphbGFhbGkgeWVhciBpbiB0aGUgUGVyc2lhbiBjYWxlbmRhci5cbiAgbGVhcEogPSBsZWFwSiArIGRpdihuLCAzMykgKiA4ICsgZGl2KG1vZChuLCAzMykgKyAzLCA0KVxuICBpZiAobW9kKGp1bXAsIDMzKSA9PT0gNCAmJiBqdW1wIC0gbiA9PT0gNCkgeyBsZWFwSiArPSAxIH1cblxuICAvLyBBbmQgdGhlIHNhbWUgaW4gdGhlIEdyZWdvcmlhbiBjYWxlbmRhciAodW50aWwgdGhlIHllYXIgZ3kpLlxuICBjb25zdCBsZWFwRyA9IGRpdihneSwgNCkgLSBkaXYoKGRpdihneSwgMTAwKSArIDEpICogMywgNCkgLSAxNTBcblxuICAvLyBEZXRlcm1pbmUgdGhlIEdyZWdvcmlhbiBkYXRlIG9mIEZhcnZhcmRpbiB0aGUgMXN0LlxuICBjb25zdCBtYXJjaCA9IDIwICsgbGVhcEogLSBsZWFwR1xuXG4gIC8vIEZpbmQgaG93IG1hbnkgeWVhcnMgaGF2ZSBwYXNzZWQgc2luY2UgdGhlIGxhc3QgbGVhcCB5ZWFyLlxuICBpZiAoIXdpdGhvdXRMZWFwKSB7XG4gICAgaWYgKGp1bXAgLSBuIDwgNikgeyBuID0gbiAtIGp1bXAgKyBkaXYoanVtcCArIDQsIDMzKSAqIDMzIH1cbiAgICBsZWFwID0gbW9kKG1vZChuICsgMSwgMzMpIC0gMSwgNClcbiAgICBpZiAobGVhcCA9PT0gLTEpIHtcbiAgICAgIGxlYXAgPSA0XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsZWFwLFxuICAgIGd5LFxuICAgIG1hcmNoXG4gIH1cbn1cblxuLypcbiAgQ29udmVydHMgYSBkYXRlIG9mIHRoZSBKYWxhYWxpIGNhbGVuZGFyIHRvIHRoZSBKdWxpYW4gRGF5IG51bWJlci5cblxuICBAcGFyYW0gankgSmFsYWFsaSB5ZWFyICgxIHRvIDMxMDApXG4gIEBwYXJhbSBqbSBKYWxhYWxpIG1vbnRoICgxIHRvIDEyKVxuICBAcGFyYW0gamQgSmFsYWFsaSBkYXkgKDEgdG8gMjkvMzEpXG4gIEByZXR1cm4gSnVsaWFuIERheSBudW1iZXJcbiovXG5mdW5jdGlvbiBqMmQgKGp5LCBqbSwgamQpIHtcbiAgY29uc3QgciA9IGphbENhbChqeSwgdHJ1ZSlcbiAgcmV0dXJuIGcyZChyLmd5LCAzLCByLm1hcmNoKSArIChqbSAtIDEpICogMzEgLSBkaXYoam0sIDcpICogKGptIC0gNykgKyBqZCAtIDFcbn1cblxuLypcbiAgQ29udmVydHMgdGhlIEp1bGlhbiBEYXkgbnVtYmVyIHRvIGEgZGF0ZSBpbiB0aGUgSmFsYWFsaSBjYWxlbmRhci5cblxuICBAcGFyYW0gamRuIEp1bGlhbiBEYXkgbnVtYmVyXG4gIEByZXR1cm5cbiAgICBqeTogSmFsYWFsaSB5ZWFyICgxIHRvIDMxMDApXG4gICAgam06IEphbGFhbGkgbW9udGggKDEgdG8gMTIpXG4gICAgamQ6IEphbGFhbGkgZGF5ICgxIHRvIDI5LzMxKVxuKi9cbmZ1bmN0aW9uIGQyaiAoamRuKSB7XG4gIGNvbnN0IGd5ID0gZDJnKGpkbikuZ3kgLy8gQ2FsY3VsYXRlIEdyZWdvcmlhbiB5ZWFyIChneSkuXG4gIGxldFxuICAgIGp5ID0gZ3kgLSA2MjEsXG4gICAgamQsXG4gICAgam0sXG4gICAga1xuICBjb25zdFxuICAgIHIgPSBqYWxDYWwoanksIGZhbHNlKSxcbiAgICBqZG4xZiA9IGcyZChneSwgMywgci5tYXJjaClcblxuICAvLyBGaW5kIG51bWJlciBvZiBkYXlzIHRoYXQgcGFzc2VkIHNpbmNlIDEgRmFydmFyZGluLlxuICBrID0gamRuIC0gamRuMWZcbiAgaWYgKGsgPj0gMCkge1xuICAgIGlmIChrIDw9IDE4NSkge1xuICAgICAgLy8gVGhlIGZpcnN0IDYgbW9udGhzLlxuICAgICAgam0gPSAxICsgZGl2KGssIDMxKVxuICAgICAgamQgPSBtb2QoaywgMzEpICsgMVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAganksXG4gICAgICAgIGptLFxuICAgICAgICBqZFxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIFRoZSByZW1haW5pbmcgbW9udGhzLlxuICAgICAgayAtPSAxODZcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gUHJldmlvdXMgSmFsYWFsaSB5ZWFyLlxuICAgIGp5IC09IDFcbiAgICBrICs9IDE3OVxuICAgIGlmIChyLmxlYXAgPT09IDEpIHsgayArPSAxIH1cbiAgfVxuICBqbSA9IDcgKyBkaXYoaywgMzApXG4gIGpkID0gbW9kKGssIDMwKSArIDFcbiAgcmV0dXJuIHtcbiAgICBqeSxcbiAgICBqbSxcbiAgICBqZFxuICB9XG59XG5cbi8qXG4gIENhbGN1bGF0ZXMgdGhlIEp1bGlhbiBEYXkgbnVtYmVyIGZyb20gR3JlZ29yaWFuIG9yIEp1bGlhblxuICBjYWxlbmRhciBkYXRlcy4gVGhpcyBpbnRlZ2VyIG51bWJlciBjb3JyZXNwb25kcyB0byB0aGUgbm9vbiBvZlxuICB0aGUgZGF0ZSAoaS5lLiAxMiBob3VycyBvZiBVbml2ZXJzYWwgVGltZSkuXG4gIFRoZSBwcm9jZWR1cmUgd2FzIHRlc3RlZCB0byBiZSBnb29kIHNpbmNlIDEgTWFyY2gsIC0xMDAxMDAgKG9mIGJvdGhcbiAgY2FsZW5kYXJzKSB1cCB0byBhIGZldyBtaWxsaW9uIHllYXJzIGludG8gdGhlIGZ1dHVyZS5cblxuICBAcGFyYW0gZ3kgQ2FsZW5kYXIgeWVhciAoeWVhcnMgQkMgbnVtYmVyZWQgMCwgLTEsIC0yLCAuLi4pXG4gIEBwYXJhbSBnbSBDYWxlbmRhciBtb250aCAoMSB0byAxMilcbiAgQHBhcmFtIGdkIENhbGVuZGFyIGRheSBvZiB0aGUgbW9udGggKDEgdG8gMjgvMjkvMzAvMzEpXG4gIEByZXR1cm4gSnVsaWFuIERheSBudW1iZXJcbiovXG5mdW5jdGlvbiBnMmQgKGd5LCBnbSwgZ2QpIHtcbiAgbGV0IGQgPSBkaXYoKGd5ICsgZGl2KGdtIC0gOCwgNikgKyAxMDAxMDApICogMTQ2MSwgNClcbiAgICAgICsgZGl2KDE1MyAqIG1vZChnbSArIDksIDEyKSArIDIsIDUpXG4gICAgICArIGdkIC0gMzQ4NDA0MDhcbiAgZCA9IGQgLSBkaXYoZGl2KGd5ICsgMTAwMTAwICsgZGl2KGdtIC0gOCwgNiksIDEwMCkgKiAzLCA0KSArIDc1MlxuICByZXR1cm4gZFxufVxuXG4vKlxuICBDYWxjdWxhdGVzIEdyZWdvcmlhbiBhbmQgSnVsaWFuIGNhbGVuZGFyIGRhdGVzIGZyb20gdGhlIEp1bGlhbiBEYXkgbnVtYmVyXG4gIChqZG4pIGZvciB0aGUgcGVyaW9kIHNpbmNlIGpkbj0tMzQ4Mzk2NTUgKGkuZS4gdGhlIHllYXIgLTEwMDEwMCBvZiBib3RoXG4gIGNhbGVuZGFycykgdG8gc29tZSBtaWxsaW9ucyB5ZWFycyBhaGVhZCBvZiB0aGUgcHJlc2VudC5cblxuICBAcGFyYW0gamRuIEp1bGlhbiBEYXkgbnVtYmVyXG4gIEByZXR1cm5cbiAgICBneTogQ2FsZW5kYXIgeWVhciAoeWVhcnMgQkMgbnVtYmVyZWQgMCwgLTEsIC0yLCAuLi4pXG4gICAgZ206IENhbGVuZGFyIG1vbnRoICgxIHRvIDEyKVxuICAgIGdkOiBDYWxlbmRhciBkYXkgb2YgdGhlIG1vbnRoIE0gKDEgdG8gMjgvMjkvMzAvMzEpXG4qL1xuZnVuY3Rpb24gZDJnIChqZG4pIHtcbiAgbGV0IGogPSA0ICogamRuICsgMTM5MzYxNjMxXG4gIGogPSBqICsgZGl2KGRpdig0ICogamRuICsgMTgzMTg3NzIwLCAxNDYwOTcpICogMywgNCkgKiA0IC0gMzkwOFxuICBjb25zdFxuICAgIGkgPSBkaXYobW9kKGosIDE0NjEpLCA0KSAqIDUgKyAzMDgsXG4gICAgZ2QgPSBkaXYobW9kKGksIDE1MyksIDUpICsgMSxcbiAgICBnbSA9IG1vZChkaXYoaSwgMTUzKSwgMTIpICsgMSxcbiAgICBneSA9IGRpdihqLCAxNDYxKSAtIDEwMDEwMCArIGRpdig4IC0gZ20sIDYpXG4gIHJldHVybiB7XG4gICAgZ3ksXG4gICAgZ20sXG4gICAgZ2RcbiAgfVxufVxuXG4vKlxuICBVdGlsaXR5IGhlbHBlciBmdW5jdGlvbnMuXG4qL1xuXG5mdW5jdGlvbiBkaXYgKGEsIGIpIHtcbiAgcmV0dXJuIH5+KGEgLyBiKVxufVxuXG5mdW5jdGlvbiBtb2QgKGEsIGIpIHtcbiAgcmV0dXJuIGEgLSB+fihhIC8gYikgKiBiXG59XG4iLCIvKiBlc2xpbnQgbm8tZmFsbHRocm91Z2g6IDAgKi9cblxuaW1wb3J0IHsgaXNEYXRlIH0gZnJvbSAnLi9pcy5qcydcbmltcG9ydCB7IHBhZCwgY2FwaXRhbGl6ZSB9IGZyb20gJy4vZm9ybWF0LmpzJ1xuaW1wb3J0IHsgamFsYWFsaU1vbnRoTGVuZ3RoIH0gZnJvbSAnLi9wcml2YXRlL2RhdGUtcGVyc2lhbi5qcydcbmltcG9ydCBsYW5nLCB7IGRlZmF1bHRMYW5nIH0gZnJvbSAnLi4vbGFuZy5qcydcblxuY29uc3RcbiAgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwLFxuICBNSUxMSVNFQ09ORFNfSU5fSE9VUiA9IDM2MDAwMDAsXG4gIE1JTExJU0VDT05EU19JTl9NSU5VVEUgPSA2MDAwMCxcbiAgZGVmYXVsdE1hc2sgPSAnWVlZWS1NTS1ERFRISDptbTpzcy5TU1NaJyxcbiAgdG9rZW4gPSAvXFxbKCg/OlteXFxdXFxcXF18XFxcXF18XFxcXCkqKVxcXXxkezEsNH18TXsxLDR9fG17MSwyfXx3ezEsMn18UW98RG98RHsxLDR9fFlZKD86WVkpP3xIezEsMn18aHsxLDJ9fHN7MSwyfXxTezEsM318WnsxLDJ9fGF7MSwyfXxbQVFFeFhdL2csXG4gIHJldmVyc2VUb2tlbiA9IC8oXFxbW15cXF1dKlxcXSl8ZHsxLDR9fE17MSw0fXxtezEsMn18d3sxLDJ9fFFvfERvfER7MSw0fXxZWSg/OllZKT98SHsxLDJ9fGh7MSwyfXxzezEsMn18U3sxLDN9fFp7MSwyfXxhezEsMn18W0FRRXhYXXwoWy4qKzo/XixcXHMke30oKXxcXFxcXSspL2csXG4gIHJlZ2V4U3RvcmUgPSB7fVxuXG5mdW5jdGlvbiBnZXRSZWdleERhdGEgKG1hc2ssIGRhdGVMb2NhbGUpIHtcbiAgY29uc3RcbiAgICBkYXlzID0gJygnICsgZGF0ZUxvY2FsZS5kYXlzLmpvaW4oJ3wnKSArICcpJyxcbiAgICBrZXkgPSBtYXNrICsgZGF5c1xuXG4gIGlmIChyZWdleFN0b3JlWyBrZXkgXSAhPT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIHJlZ2V4U3RvcmVbIGtleSBdXG4gIH1cblxuICBjb25zdFxuICAgIGRheXNTaG9ydCA9ICcoJyArIGRhdGVMb2NhbGUuZGF5c1Nob3J0LmpvaW4oJ3wnKSArICcpJyxcbiAgICBtb250aHMgPSAnKCcgKyBkYXRlTG9jYWxlLm1vbnRocy5qb2luKCd8JykgKyAnKScsXG4gICAgbW9udGhzU2hvcnQgPSAnKCcgKyBkYXRlTG9jYWxlLm1vbnRoc1Nob3J0LmpvaW4oJ3wnKSArICcpJ1xuXG4gIGNvbnN0IG1hcCA9IHt9XG4gIGxldCBpbmRleCA9IDBcblxuICBjb25zdCByZWdleFRleHQgPSBtYXNrLnJlcGxhY2UocmV2ZXJzZVRva2VuLCBtYXRjaCA9PiB7XG4gICAgaW5kZXgrK1xuICAgIHN3aXRjaCAobWF0Y2gpIHtcbiAgICAgIGNhc2UgJ1lZJzpcbiAgICAgICAgbWFwLllZID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoLT9cXFxcZHsxLDJ9KSdcbiAgICAgIGNhc2UgJ1lZWVknOlxuICAgICAgICBtYXAuWVlZWSA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKC0/XFxcXGR7MSw0fSknXG4gICAgICBjYXNlICdNJzpcbiAgICAgICAgbWFwLk0gPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDJ9KSdcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgbWFwLk0gPSBpbmRleCAvLyBidW1waW5nIHRvIE1cbiAgICAgICAgcmV0dXJuICcoXFxcXGR7Mn0pJ1xuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgbWFwLk1NTSA9IGluZGV4XG4gICAgICAgIHJldHVybiBtb250aHNTaG9ydFxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICAgIG1hcC5NTU1NID0gaW5kZXhcbiAgICAgICAgcmV0dXJuIG1vbnRoc1xuICAgICAgY2FzZSAnRCc6XG4gICAgICAgIG1hcC5EID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MSwyfSknXG4gICAgICBjYXNlICdEbyc6XG4gICAgICAgIG1hcC5EID0gaW5kZXgrKyAvLyBidW1waW5nIHRvIERcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MSwyfShzdHxuZHxyZHx0aCkpJ1xuICAgICAgY2FzZSAnREQnOlxuICAgICAgICBtYXAuRCA9IGluZGV4IC8vIGJ1bXBpbmcgdG8gRFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsyfSknXG4gICAgICBjYXNlICdIJzpcbiAgICAgICAgbWFwLkggPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDJ9KSdcbiAgICAgIGNhc2UgJ0hIJzpcbiAgICAgICAgbWFwLkggPSBpbmRleCAvLyBidW1waW5nIHRvIEhcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7Mn0pJ1xuICAgICAgY2FzZSAnaCc6XG4gICAgICAgIG1hcC5oID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MSwyfSknXG4gICAgICBjYXNlICdoaCc6XG4gICAgICAgIG1hcC5oID0gaW5kZXggLy8gYnVtcGluZyB0byBoXG4gICAgICAgIHJldHVybiAnKFxcXFxkezJ9KSdcbiAgICAgIGNhc2UgJ20nOlxuICAgICAgICBtYXAubSA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKFxcXFxkezEsMn0pJ1xuICAgICAgY2FzZSAnbW0nOlxuICAgICAgICBtYXAubSA9IGluZGV4IC8vIGJ1bXBpbmcgdG8gbVxuICAgICAgICByZXR1cm4gJyhcXFxcZHsyfSknXG4gICAgICBjYXNlICdzJzpcbiAgICAgICAgbWFwLnMgPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDJ9KSdcbiAgICAgIGNhc2UgJ3NzJzpcbiAgICAgICAgbWFwLnMgPSBpbmRleCAvLyBidW1waW5nIHRvIHNcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7Mn0pJ1xuICAgICAgY2FzZSAnUyc6XG4gICAgICAgIG1hcC5TID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MX0pJ1xuICAgICAgY2FzZSAnU1MnOlxuICAgICAgICBtYXAuUyA9IGluZGV4IC8vIGJ1bXAgdG8gU1xuICAgICAgICByZXR1cm4gJyhcXFxcZHsyfSknXG4gICAgICBjYXNlICdTU1MnOlxuICAgICAgICBtYXAuUyA9IGluZGV4IC8vIGJ1bXAgdG8gU1xuICAgICAgICByZXR1cm4gJyhcXFxcZHszfSknXG4gICAgICBjYXNlICdBJzpcbiAgICAgICAgbWFwLkEgPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhBTXxQTSknXG4gICAgICBjYXNlICdhJzpcbiAgICAgICAgbWFwLmEgPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhhbXxwbSknXG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIG1hcC5hYSA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKGFcXFxcLm1cXFxcLnxwXFxcXC5tXFxcXC4pJ1xuXG4gICAgICBjYXNlICdkZGQnOlxuICAgICAgICByZXR1cm4gZGF5c1Nob3J0XG4gICAgICBjYXNlICdkZGRkJzpcbiAgICAgICAgcmV0dXJuIGRheXNcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgY2FzZSAnZCc6XG4gICAgICBjYXNlICdFJzpcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MX0pJ1xuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gJygxc3R8Mm5kfDNyZHw0dGgpJ1xuICAgICAgY2FzZSAnREREJzpcbiAgICAgIGNhc2UgJ0REREQnOlxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDN9KSdcbiAgICAgIGNhc2UgJ3cnOlxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDJ9KSdcbiAgICAgIGNhc2UgJ3d3JzpcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7Mn0pJ1xuXG4gICAgICBjYXNlICdaJzogLy8gdG8gc3BsaXQ6ICg/OihaKSgpKCl8KFsrLV0pPyhcXFxcZHsyfSk6PyhcXFxcZHsyfSkpXG4gICAgICAgIG1hcC5aID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoWnxbKy1dXFxcXGR7Mn06XFxcXGR7Mn0pJ1xuICAgICAgY2FzZSAnWlonOlxuICAgICAgICBtYXAuWlogPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhafFsrLV1cXFxcZHsyfVxcXFxkezJ9KSdcblxuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIG1hcC5YID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoLT9cXFxcZCspJ1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIG1hcC54ID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoLT9cXFxcZHs0LH0pJ1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpbmRleC0tXG4gICAgICAgIGlmIChtYXRjaFsgMCBdID09PSAnWycpIHtcbiAgICAgICAgICBtYXRjaCA9IG1hdGNoLnN1YnN0cmluZygxLCBtYXRjaC5sZW5ndGggLSAxKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXRjaC5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlcyA9IHsgbWFwLCByZWdleDogbmV3IFJlZ0V4cCgnXicgKyByZWdleFRleHQpIH1cbiAgcmVnZXhTdG9yZVsga2V5IF0gPSByZXNcblxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGdldERhdGVMb2NhbGUgKHBhcmFtRGF0ZUxvY2FsZSwgbGFuZ1Byb3BzKSB7XG4gIHJldHVybiBwYXJhbURhdGVMb2NhbGUgIT09IHZvaWQgMFxuICAgID8gcGFyYW1EYXRlTG9jYWxlXG4gICAgOiAoXG4gICAgICAgIGxhbmdQcm9wcyAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBsYW5nUHJvcHMuZGF0ZVxuICAgICAgICAgIDogZGVmYXVsdExhbmcuZGF0ZVxuICAgICAgKVxufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZSAob2Zmc2V0LCBkZWxpbWV0ZXIgPSAnJykge1xuICBjb25zdFxuICAgIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnLFxuICAgIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCksXG4gICAgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSxcbiAgICBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjBcblxuICByZXR1cm4gc2lnbiArIHBhZChob3VycykgKyBkZWxpbWV0ZXIgKyBwYWQobWludXRlcylcbn1cblxuZnVuY3Rpb24gYXBwbHlZZWFyTW9udGhEYXlDaGFuZ2UgKGRhdGUsIG1vZCwgc2lnbikge1xuICBsZXRcbiAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpXG5cbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKClcblxuICBpZiAobW9kLnllYXIgIT09IHZvaWQgMCkge1xuICAgIHllYXIgKz0gc2lnbiAqIG1vZC55ZWFyXG4gICAgZGVsZXRlIG1vZC55ZWFyXG4gIH1cblxuICBpZiAobW9kLm1vbnRoICE9PSB2b2lkIDApIHtcbiAgICBtb250aCArPSBzaWduICogbW9kLm1vbnRoXG4gICAgZGVsZXRlIG1vZC5tb250aFxuICB9XG5cbiAgZGF0ZS5zZXREYXRlKDEpXG4gIGRhdGUuc2V0TW9udGgoMilcblxuICBkYXRlLnNldEZ1bGxZZWFyKHllYXIpXG4gIGRhdGUuc2V0TW9udGgobW9udGgpXG4gIGRhdGUuc2V0RGF0ZShNYXRoLm1pbihkYXksIGRheXNJbk1vbnRoKGRhdGUpKSlcblxuICBpZiAobW9kLmRhdGUgIT09IHZvaWQgMCkge1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIHNpZ24gKiBtb2QuZGF0ZSlcbiAgICBkZWxldGUgbW9kLmRhdGVcbiAgfVxuXG4gIHJldHVybiBkYXRlXG59XG5cbmZ1bmN0aW9uIGFwcGx5WWVhck1vbnRoRGF5IChkYXRlLCBtb2QsIG1pZGRsZSkge1xuICBjb25zdFxuICAgIHllYXIgPSBtb2QueWVhciAhPT0gdm9pZCAwID8gbW9kLnllYXIgOiBkYXRlWyBgZ2V0JHsgbWlkZGxlIH1GdWxsWWVhcmAgXSgpLFxuICAgIG1vbnRoID0gbW9kLm1vbnRoICE9PSB2b2lkIDAgPyBtb2QubW9udGggLSAxIDogZGF0ZVsgYGdldCR7IG1pZGRsZSB9TW9udGhgIF0oKSxcbiAgICBtYXhEYXkgPSAobmV3IERhdGUoeWVhciwgbW9udGggKyAxLCAwKSkuZ2V0RGF0ZSgpLFxuICAgIGRheSA9IE1hdGgubWluKG1heERheSwgbW9kLmRhdGUgIT09IHZvaWQgMCA/IG1vZC5kYXRlIDogZGF0ZVsgYGdldCR7IG1pZGRsZSB9RGF0ZWAgXSgpKVxuXG4gIGRhdGVbIGBzZXQkeyBtaWRkbGUgfURhdGVgIF0oMSlcbiAgZGF0ZVsgYHNldCR7IG1pZGRsZSB9TW9udGhgIF0oMilcblxuICBkYXRlWyBgc2V0JHsgbWlkZGxlIH1GdWxsWWVhcmAgXSh5ZWFyKVxuICBkYXRlWyBgc2V0JHsgbWlkZGxlIH1Nb250aGAgXShtb250aClcbiAgZGF0ZVsgYHNldCR7IG1pZGRsZSB9RGF0ZWAgXShkYXkpXG5cbiAgZGVsZXRlIG1vZC55ZWFyXG4gIGRlbGV0ZSBtb2QubW9udGhcbiAgZGVsZXRlIG1vZC5kYXRlXG5cbiAgcmV0dXJuIGRhdGVcbn1cblxuZnVuY3Rpb24gZ2V0Q2hhbmdlIChkYXRlLCByYXdNb2QsIHNpZ24pIHtcbiAgY29uc3RcbiAgICBtb2QgPSBub3JtYWxpemVNb2QocmF3TW9kKSxcbiAgICBkID0gbmV3IERhdGUoZGF0ZSksXG4gICAgdCA9IG1vZC55ZWFyICE9PSB2b2lkIDAgfHwgbW9kLm1vbnRoICE9PSB2b2lkIDAgfHwgbW9kLmRhdGUgIT09IHZvaWQgMFxuICAgICAgPyBhcHBseVllYXJNb250aERheUNoYW5nZShkLCBtb2QsIHNpZ24pIC8vIHJlbW92ZXMgeWVhci9tb250aC9kYXlcbiAgICAgIDogZFxuXG4gIGZvciAoY29uc3Qga2V5IGluIG1vZCkge1xuICAgIGNvbnN0IG9wID0gY2FwaXRhbGl6ZShrZXkpXG4gICAgdFsgYHNldCR7IG9wIH1gIF0odFsgYGdldCR7IG9wIH1gIF0oKSArIHNpZ24gKiBtb2RbIGtleSBdKVxuICB9XG5cbiAgcmV0dXJuIHRcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplTW9kIChtb2QpIHtcbiAgY29uc3QgYWNjID0geyAuLi5tb2QgfVxuXG4gIGlmIChtb2QueWVhcnMgIT09IHZvaWQgMCkge1xuICAgIGFjYy55ZWFyID0gbW9kLnllYXJzXG4gICAgZGVsZXRlIGFjYy55ZWFyc1xuICB9XG5cbiAgaWYgKG1vZC5tb250aHMgIT09IHZvaWQgMCkge1xuICAgIGFjYy5tb250aCA9IG1vZC5tb250aHNcbiAgICBkZWxldGUgYWNjLm1vbnRoc1xuICB9XG5cbiAgaWYgKG1vZC5kYXlzICE9PSB2b2lkIDApIHtcbiAgICBhY2MuZGF0ZSA9IG1vZC5kYXlzXG4gICAgZGVsZXRlIGFjYy5kYXlzXG4gIH1cbiAgaWYgKG1vZC5kYXkgIT09IHZvaWQgMCkge1xuICAgIGFjYy5kYXRlID0gbW9kLmRheVxuICAgIGRlbGV0ZSBhY2MuZGF5XG4gIH1cblxuICBpZiAobW9kLmhvdXIgIT09IHZvaWQgMCkge1xuICAgIGFjYy5ob3VycyA9IG1vZC5ob3VyXG4gICAgZGVsZXRlIGFjYy5ob3VyXG4gIH1cblxuICBpZiAobW9kLm1pbnV0ZSAhPT0gdm9pZCAwKSB7XG4gICAgYWNjLm1pbnV0ZXMgPSBtb2QubWludXRlXG4gICAgZGVsZXRlIGFjYy5taW51dGVcbiAgfVxuXG4gIGlmIChtb2Quc2Vjb25kICE9PSB2b2lkIDApIHtcbiAgICBhY2Muc2Vjb25kcyA9IG1vZC5zZWNvbmRcbiAgICBkZWxldGUgYWNjLnNlY29uZFxuICB9XG5cbiAgaWYgKG1vZC5taWxsaXNlY29uZCAhPT0gdm9pZCAwKSB7XG4gICAgYWNjLm1pbGxpc2Vjb25kcyA9IG1vZC5taWxsaXNlY29uZFxuICAgIGRlbGV0ZSBhY2MubWlsbGlzZWNvbmRcbiAgfVxuXG4gIHJldHVybiBhY2Ncbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkanVzdERhdGUgKGRhdGUsIHJhd01vZCwgdXRjKSB7XG4gIGNvbnN0XG4gICAgbW9kID0gbm9ybWFsaXplTW9kKHJhd01vZCksXG4gICAgbWlkZGxlID0gdXRjID09PSB0cnVlID8gJ1VUQycgOiAnJyxcbiAgICBkID0gbmV3IERhdGUoZGF0ZSksXG4gICAgdCA9IG1vZC55ZWFyICE9PSB2b2lkIDAgfHwgbW9kLm1vbnRoICE9PSB2b2lkIDAgfHwgbW9kLmRhdGUgIT09IHZvaWQgMFxuICAgICAgPyBhcHBseVllYXJNb250aERheShkLCBtb2QsIG1pZGRsZSkgLy8gcmVtb3ZlcyB5ZWFyL21vbnRoL2RheVxuICAgICAgOiBkXG5cbiAgZm9yIChjb25zdCBrZXkgaW4gbW9kKSB7XG4gICAgY29uc3Qgb3AgPSBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSlcbiAgICB0WyBgc2V0JHsgbWlkZGxlIH0keyBvcCB9YCBdKG1vZFsga2V5IF0pXG4gIH1cblxuICByZXR1cm4gdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdERhdGUgKHN0ciwgbWFzaywgZGF0ZUxvY2FsZSkge1xuICBjb25zdCBkID0gX19zcGxpdERhdGUoc3RyLCBtYXNrLCBkYXRlTG9jYWxlKVxuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShcbiAgICBkLnllYXIsXG4gICAgZC5tb250aCA9PT0gbnVsbCA/IG51bGwgOiBkLm1vbnRoIC0gMSxcbiAgICBkLmRheSA9PT0gbnVsbCA/IDEgOiBkLmRheSxcbiAgICBkLmhvdXIsXG4gICAgZC5taW51dGUsXG4gICAgZC5zZWNvbmQsXG4gICAgZC5taWxsaXNlY29uZFxuICApXG5cbiAgY29uc3QgdHpPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KClcblxuICByZXR1cm4gZC50aW1lem9uZU9mZnNldCA9PT0gbnVsbCB8fCBkLnRpbWV6b25lT2Zmc2V0ID09PSB0ek9mZnNldFxuICAgID8gZGF0ZVxuICAgIDogZ2V0Q2hhbmdlKGRhdGUsIHsgbWludXRlczogZC50aW1lem9uZU9mZnNldCAtIHR6T2Zmc2V0IH0sIDEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NwbGl0RGF0ZSAoc3RyLCBtYXNrLCBkYXRlTG9jYWxlLCBjYWxlbmRhciwgZGVmYXVsdE1vZGVsKSB7XG4gIGNvbnN0IGRhdGUgPSB7XG4gICAgeWVhcjogbnVsbCxcbiAgICBtb250aDogbnVsbCxcbiAgICBkYXk6IG51bGwsXG4gICAgaG91cjogbnVsbCxcbiAgICBtaW51dGU6IG51bGwsXG4gICAgc2Vjb25kOiBudWxsLFxuICAgIG1pbGxpc2Vjb25kOiBudWxsLFxuICAgIHRpbWV6b25lT2Zmc2V0OiBudWxsLFxuICAgIGRhdGVIYXNoOiBudWxsLFxuICAgIHRpbWVIYXNoOiBudWxsXG4gIH1cblxuICBkZWZhdWx0TW9kZWwgIT09IHZvaWQgMCAmJiBPYmplY3QuYXNzaWduKGRhdGUsIGRlZmF1bHRNb2RlbClcblxuICBpZiAoXG4gICAgc3RyID09PSB2b2lkIDBcbiAgICB8fCBzdHIgPT09IG51bGxcbiAgICB8fCBzdHIgPT09ICcnXG4gICAgfHwgdHlwZW9mIHN0ciAhPT0gJ3N0cmluZydcbiAgKSB7XG4gICAgcmV0dXJuIGRhdGVcbiAgfVxuXG4gIGlmIChtYXNrID09PSB2b2lkIDApIHtcbiAgICBtYXNrID0gZGVmYXVsdE1hc2tcbiAgfVxuXG4gIGNvbnN0XG4gICAgbGFuZ09wdHMgPSBnZXREYXRlTG9jYWxlKGRhdGVMb2NhbGUsIGxhbmcucHJvcHMpLFxuICAgIG1vbnRocyA9IGxhbmdPcHRzLm1vbnRocyxcbiAgICBtb250aHNTaG9ydCA9IGxhbmdPcHRzLm1vbnRoc1Nob3J0XG5cbiAgY29uc3QgeyByZWdleCwgbWFwIH0gPSBnZXRSZWdleERhdGEobWFzaywgbGFuZ09wdHMpXG5cbiAgY29uc3QgbWF0Y2ggPSBzdHIubWF0Y2gocmVnZXgpXG5cbiAgaWYgKG1hdGNoID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGRhdGVcbiAgfVxuXG4gIGxldCB0elN0cmluZyA9ICcnXG5cbiAgaWYgKG1hcC5YICE9PSB2b2lkIDAgfHwgbWFwLnggIT09IHZvaWQgMCkge1xuICAgIGNvbnN0IHN0YW1wID0gcGFyc2VJbnQobWF0Y2hbIG1hcC5YICE9PSB2b2lkIDAgPyBtYXAuWCA6IG1hcC54IF0sIDEwKVxuXG4gICAgaWYgKGlzTmFOKHN0YW1wKSA9PT0gdHJ1ZSB8fCBzdGFtcCA8IDApIHtcbiAgICAgIHJldHVybiBkYXRlXG4gICAgfVxuXG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKHN0YW1wICogKG1hcC5YICE9PSB2b2lkIDAgPyAxMDAwIDogMSkpXG5cbiAgICBkYXRlLnllYXIgPSBkLmdldEZ1bGxZZWFyKClcbiAgICBkYXRlLm1vbnRoID0gZC5nZXRNb250aCgpICsgMVxuICAgIGRhdGUuZGF5ID0gZC5nZXREYXRlKClcbiAgICBkYXRlLmhvdXIgPSBkLmdldEhvdXJzKClcbiAgICBkYXRlLm1pbnV0ZSA9IGQuZ2V0TWludXRlcygpXG4gICAgZGF0ZS5zZWNvbmQgPSBkLmdldFNlY29uZHMoKVxuICAgIGRhdGUubWlsbGlzZWNvbmQgPSBkLmdldE1pbGxpc2Vjb25kcygpXG4gIH1cbiAgZWxzZSB7XG4gICAgaWYgKG1hcC5ZWVlZICE9PSB2b2lkIDApIHtcbiAgICAgIGRhdGUueWVhciA9IHBhcnNlSW50KG1hdGNoWyBtYXAuWVlZWSBdLCAxMClcbiAgICB9XG4gICAgZWxzZSBpZiAobWFwLllZICE9PSB2b2lkIDApIHtcbiAgICAgIGNvbnN0IHkgPSBwYXJzZUludChtYXRjaFsgbWFwLllZIF0sIDEwKVxuICAgICAgZGF0ZS55ZWFyID0geSA8IDAgPyB5IDogMjAwMCArIHlcbiAgICB9XG5cbiAgICBpZiAobWFwLk0gIT09IHZvaWQgMCkge1xuICAgICAgZGF0ZS5tb250aCA9IHBhcnNlSW50KG1hdGNoWyBtYXAuTSBdLCAxMClcbiAgICAgIGlmIChkYXRlLm1vbnRoIDwgMSB8fCBkYXRlLm1vbnRoID4gMTIpIHtcbiAgICAgICAgcmV0dXJuIGRhdGVcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobWFwLk1NTSAhPT0gdm9pZCAwKSB7XG4gICAgICBkYXRlLm1vbnRoID0gbW9udGhzU2hvcnQuaW5kZXhPZihtYXRjaFsgbWFwLk1NTSBdKSArIDFcbiAgICB9XG4gICAgZWxzZSBpZiAobWFwLk1NTU0gIT09IHZvaWQgMCkge1xuICAgICAgZGF0ZS5tb250aCA9IG1vbnRocy5pbmRleE9mKG1hdGNoWyBtYXAuTU1NTSBdKSArIDFcbiAgICB9XG5cbiAgICBpZiAobWFwLkQgIT09IHZvaWQgMCkge1xuICAgICAgZGF0ZS5kYXkgPSBwYXJzZUludChtYXRjaFsgbWFwLkQgXSwgMTApXG5cbiAgICAgIGlmIChkYXRlLnllYXIgPT09IG51bGwgfHwgZGF0ZS5tb250aCA9PT0gbnVsbCB8fCBkYXRlLmRheSA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWF4RGF5ID0gY2FsZW5kYXIgIT09ICdwZXJzaWFuJ1xuICAgICAgICA/IChuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGgsIDApKS5nZXREYXRlKClcbiAgICAgICAgOiBqYWxhYWxpTW9udGhMZW5ndGgoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoKVxuXG4gICAgICBpZiAoZGF0ZS5kYXkgPiBtYXhEYXkpIHtcbiAgICAgICAgcmV0dXJuIGRhdGVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWFwLkggIT09IHZvaWQgMCkge1xuICAgICAgZGF0ZS5ob3VyID0gcGFyc2VJbnQobWF0Y2hbIG1hcC5IIF0sIDEwKSAlIDI0XG4gICAgfVxuICAgIGVsc2UgaWYgKG1hcC5oICE9PSB2b2lkIDApIHtcbiAgICAgIGRhdGUuaG91ciA9IHBhcnNlSW50KG1hdGNoWyBtYXAuaCBdLCAxMCkgJSAxMlxuICAgICAgaWYgKFxuICAgICAgICAobWFwLkEgJiYgbWF0Y2hbIG1hcC5BIF0gPT09ICdQTScpXG4gICAgICAgIHx8IChtYXAuYSAmJiBtYXRjaFsgbWFwLmEgXSA9PT0gJ3BtJylcbiAgICAgICAgfHwgKG1hcC5hYSAmJiBtYXRjaFsgbWFwLmFhIF0gPT09ICdwLm0uJylcbiAgICAgICkge1xuICAgICAgICBkYXRlLmhvdXIgKz0gMTJcbiAgICAgIH1cbiAgICAgIGRhdGUuaG91ciA9IGRhdGUuaG91ciAlIDI0XG4gICAgfVxuXG4gICAgaWYgKG1hcC5tICE9PSB2b2lkIDApIHtcbiAgICAgIGRhdGUubWludXRlID0gcGFyc2VJbnQobWF0Y2hbIG1hcC5tIF0sIDEwKSAlIDYwXG4gICAgfVxuXG4gICAgaWYgKG1hcC5zICE9PSB2b2lkIDApIHtcbiAgICAgIGRhdGUuc2Vjb25kID0gcGFyc2VJbnQobWF0Y2hbIG1hcC5zIF0sIDEwKSAlIDYwXG4gICAgfVxuXG4gICAgaWYgKG1hcC5TICE9PSB2b2lkIDApIHtcbiAgICAgIGRhdGUubWlsbGlzZWNvbmQgPSBwYXJzZUludChtYXRjaFsgbWFwLlMgXSwgMTApICogMTAgKiogKDMgLSBtYXRjaFsgbWFwLlMgXS5sZW5ndGgpXG4gICAgfVxuXG4gICAgaWYgKG1hcC5aICE9PSB2b2lkIDAgfHwgbWFwLlpaICE9PSB2b2lkIDApIHtcbiAgICAgIHR6U3RyaW5nID0gKG1hcC5aICE9PSB2b2lkIDAgPyBtYXRjaFsgbWFwLlogXS5yZXBsYWNlKCc6JywgJycpIDogbWF0Y2hbIG1hcC5aWiBdKVxuICAgICAgZGF0ZS50aW1lem9uZU9mZnNldCA9ICh0elN0cmluZ1sgMCBdID09PSAnKycgPyAtMSA6IDEpICogKDYwICogdHpTdHJpbmcuc2xpY2UoMSwgMykgKyAxICogdHpTdHJpbmcuc2xpY2UoMywgNSkpXG4gICAgfVxuICB9XG5cbiAgZGF0ZS5kYXRlSGFzaCA9IHBhZChkYXRlLnllYXIsIDYpICsgJy8nICsgcGFkKGRhdGUubW9udGgpICsgJy8nICsgcGFkKGRhdGUuZGF5KVxuICBkYXRlLnRpbWVIYXNoID0gcGFkKGRhdGUuaG91cikgKyAnOicgKyBwYWQoZGF0ZS5taW51dGUpICsgJzonICsgcGFkKGRhdGUuc2Vjb25kKSArIHR6U3RyaW5nXG5cbiAgcmV0dXJuIGRhdGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQgKGRhdGUpIHtcbiAgcmV0dXJuIHR5cGVvZiBkYXRlID09PSAnbnVtYmVyJ1xuICAgID8gdHJ1ZVxuICAgIDogaXNOYU4oRGF0ZS5wYXJzZShkYXRlKSkgPT09IGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZERhdGUgKG1vZCwgdXRjKSB7XG4gIHJldHVybiBhZGp1c3REYXRlKG5ldyBEYXRlKCksIG1vZCwgdXRjKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5T2ZXZWVrIChkYXRlKSB7XG4gIGNvbnN0IGRvdyA9IG5ldyBEYXRlKGRhdGUpLmdldERheSgpXG4gIHJldHVybiBkb3cgPT09IDAgPyA3IDogZG93XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrT2ZZZWFyIChkYXRlKSB7XG4gIC8vIFJlbW92ZSB0aW1lIGNvbXBvbmVudHMgb2YgZGF0ZVxuICBjb25zdCB0aHVyc2RheSA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSlcblxuICAvLyBDaGFuZ2UgZGF0ZSB0byBUaHVyc2RheSBzYW1lIHdlZWtcbiAgdGh1cnNkYXkuc2V0RGF0ZSh0aHVyc2RheS5nZXREYXRlKCkgLSAoKHRodXJzZGF5LmdldERheSgpICsgNikgJSA3KSArIDMpXG5cbiAgLy8gVGFrZSBKYW51YXJ5IDR0aCBhcyBpdCBpcyBhbHdheXMgaW4gd2VlayAxIChzZWUgSVNPIDg2MDEpXG4gIGNvbnN0IGZpcnN0VGh1cnNkYXkgPSBuZXcgRGF0ZSh0aHVyc2RheS5nZXRGdWxsWWVhcigpLCAwLCA0KVxuXG4gIC8vIENoYW5nZSBkYXRlIHRvIFRodXJzZGF5IHNhbWUgd2Vla1xuICBmaXJzdFRodXJzZGF5LnNldERhdGUoZmlyc3RUaHVyc2RheS5nZXREYXRlKCkgLSAoKGZpcnN0VGh1cnNkYXkuZ2V0RGF5KCkgKyA2KSAlIDcpICsgMylcblxuICAvLyBDaGVjayBpZiBkYXlsaWdodC1zYXZpbmctdGltZS1zd2l0Y2ggb2NjdXJyZWQgYW5kIGNvcnJlY3QgZm9yIGl0XG4gIGNvbnN0IGRzID0gdGh1cnNkYXkuZ2V0VGltZXpvbmVPZmZzZXQoKSAtIGZpcnN0VGh1cnNkYXkuZ2V0VGltZXpvbmVPZmZzZXQoKVxuICB0aHVyc2RheS5zZXRIb3Vycyh0aHVyc2RheS5nZXRIb3VycygpIC0gZHMpXG5cbiAgLy8gTnVtYmVyIG9mIHdlZWtzIGJldHdlZW4gdGFyZ2V0IFRodXJzZGF5IGFuZCBmaXJzdCBUaHVyc2RheVxuICBjb25zdCB3ZWVrRGlmZiA9ICh0aHVyc2RheSAtIGZpcnN0VGh1cnNkYXkpIC8gKE1JTExJU0VDT05EU19JTl9EQVkgKiA3KVxuICByZXR1cm4gMSArIE1hdGguZmxvb3Iod2Vla0RpZmYpXG59XG5cbmZ1bmN0aW9uIGdldERheUlkZW50aWZpZXIgKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSAqIDEwMDAwICsgZGF0ZS5nZXRNb250aCgpICogMTAwICsgZGF0ZS5nZXREYXRlKClcbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZUlkZW50aWZpZXIgKGRhdGUsIG9ubHlEYXRlIC8qID0gZmFsc2UgKi8pIHtcbiAgY29uc3QgZCA9IG5ldyBEYXRlKGRhdGUpXG4gIHJldHVybiBvbmx5RGF0ZSA9PT0gdHJ1ZSA/IGdldERheUlkZW50aWZpZXIoZCkgOiBkLmdldFRpbWUoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCZXR3ZWVuRGF0ZXMgKGRhdGUsIGZyb20sIHRvLCBvcHRzID0ge30pIHtcbiAgY29uc3RcbiAgICBkMSA9IGdldERhdGVJZGVudGlmaWVyKGZyb20sIG9wdHMub25seURhdGUpLFxuICAgIGQyID0gZ2V0RGF0ZUlkZW50aWZpZXIodG8sIG9wdHMub25seURhdGUpLFxuICAgIGN1ciA9IGdldERhdGVJZGVudGlmaWVyKGRhdGUsIG9wdHMub25seURhdGUpXG5cbiAgcmV0dXJuIChjdXIgPiBkMSB8fCAob3B0cy5pbmNsdXNpdmVGcm9tID09PSB0cnVlICYmIGN1ciA9PT0gZDEpKVxuICAgICYmIChjdXIgPCBkMiB8fCAob3B0cy5pbmNsdXNpdmVUbyA9PT0gdHJ1ZSAmJiBjdXIgPT09IGQyKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvRGF0ZSAoZGF0ZSwgbW9kKSB7XG4gIHJldHVybiBnZXRDaGFuZ2UoZGF0ZSwgbW9kLCAxKVxufVxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0RnJvbURhdGUgKGRhdGUsIG1vZCkge1xuICByZXR1cm4gZ2V0Q2hhbmdlKGRhdGUsIG1vZCwgLTEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF0ZSAoZGF0ZSwgdW5pdCwgdXRjKSB7XG4gIGNvbnN0XG4gICAgdCA9IG5ldyBEYXRlKGRhdGUpLFxuICAgIHByZWZpeCA9IGBzZXQkeyB1dGMgPT09IHRydWUgPyAnVVRDJyA6ICcnIH1gXG5cbiAgc3dpdGNoICh1bml0KSB7XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneWVhcnMnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9TW9udGhgIF0oMClcbiAgICBjYXNlICdtb250aCc6XG4gICAgY2FzZSAnbW9udGhzJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfURhdGVgIF0oMSlcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9SG91cnNgIF0oMClcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdob3Vycyc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1NaW51dGVzYCBdKDApXG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfVNlY29uZHNgIF0oMClcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9TWlsbGlzZWNvbmRzYCBdKDApXG4gIH1cbiAgcmV0dXJuIHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZE9mRGF0ZSAoZGF0ZSwgdW5pdCwgdXRjKSB7XG4gIGNvbnN0XG4gICAgdCA9IG5ldyBEYXRlKGRhdGUpLFxuICAgIHByZWZpeCA9IGBzZXQkeyB1dGMgPT09IHRydWUgPyAnVVRDJyA6ICcnIH1gXG5cbiAgc3dpdGNoICh1bml0KSB7XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneWVhcnMnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9TW9udGhgIF0oMTEpXG4gICAgY2FzZSAnbW9udGgnOlxuICAgIGNhc2UgJ21vbnRocyc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1EYXRlYCBdKGRheXNJbk1vbnRoKHQpKVxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1Ib3Vyc2AgXSgyMylcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdob3Vycyc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1NaW51dGVzYCBdKDU5KVxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1TZWNvbmRzYCBdKDU5KVxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1NaWxsaXNlY29uZHNgIF0oOTk5KVxuICB9XG4gIHJldHVybiB0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXhEYXRlIChkYXRlIC8qICwgLi4uYXJncyAqLykge1xuICBsZXQgdCA9IG5ldyBEYXRlKGRhdGUpXG4gIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkuZm9yRWFjaChkID0+IHtcbiAgICB0ID0gTWF0aC5tYXgodCwgbmV3IERhdGUoZCkpXG4gIH0pXG4gIHJldHVybiB0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNaW5EYXRlIChkYXRlIC8qLCAuLi5hcmdzICovKSB7XG4gIGxldCB0ID0gbmV3IERhdGUoZGF0ZSlcbiAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKS5mb3JFYWNoKGQgPT4ge1xuICAgIHQgPSBNYXRoLm1pbih0LCBuZXcgRGF0ZShkKSlcbiAgfSlcbiAgcmV0dXJuIHRcbn1cblxuZnVuY3Rpb24gZ2V0RGlmZiAodCwgc3ViLCBpbnRlcnZhbCkge1xuICByZXR1cm4gKFxuICAgICh0LmdldFRpbWUoKSAtIHQuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIE1JTExJU0VDT05EU19JTl9NSU5VVEUpXG4gICAgLSAoc3ViLmdldFRpbWUoKSAtIHN1Yi5nZXRUaW1lem9uZU9mZnNldCgpICogTUlMTElTRUNPTkRTX0lOX01JTlVURSlcbiAgKSAvIGludGVydmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlRGlmZiAoZGF0ZSwgc3VidHJhY3QsIHVuaXQgPSAnZGF5cycpIHtcbiAgY29uc3RcbiAgICB0ID0gbmV3IERhdGUoZGF0ZSksXG4gICAgc3ViID0gbmV3IERhdGUoc3VidHJhY3QpXG5cbiAgc3dpdGNoICh1bml0KSB7XG4gICAgY2FzZSAneWVhcnMnOlxuICAgIGNhc2UgJ3llYXInOlxuICAgICAgcmV0dXJuICh0LmdldEZ1bGxZZWFyKCkgLSBzdWIuZ2V0RnVsbFllYXIoKSlcblxuICAgIGNhc2UgJ21vbnRocyc6XG4gICAgY2FzZSAnbW9udGgnOlxuICAgICAgcmV0dXJuICh0LmdldEZ1bGxZZWFyKCkgLSBzdWIuZ2V0RnVsbFllYXIoKSkgKiAxMiArIHQuZ2V0TW9udGgoKSAtIHN1Yi5nZXRNb250aCgpXG5cbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgcmV0dXJuIGdldERpZmYoc3RhcnRPZkRhdGUodCwgJ2RheScpLCBzdGFydE9mRGF0ZShzdWIsICdkYXknKSwgTUlMTElTRUNPTkRTX0lOX0RBWSlcblxuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICAgIHJldHVybiBnZXREaWZmKHN0YXJ0T2ZEYXRlKHQsICdob3VyJyksIHN0YXJ0T2ZEYXRlKHN1YiwgJ2hvdXInKSwgTUlMTElTRUNPTkRTX0lOX0hPVVIpXG5cbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgICAgcmV0dXJuIGdldERpZmYoc3RhcnRPZkRhdGUodCwgJ21pbnV0ZScpLCBzdGFydE9mRGF0ZShzdWIsICdtaW51dGUnKSwgTUlMTElTRUNPTkRTX0lOX01JTlVURSlcblxuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICByZXR1cm4gZ2V0RGlmZihzdGFydE9mRGF0ZSh0LCAnc2Vjb25kJyksIHN0YXJ0T2ZEYXRlKHN1YiwgJ3NlY29uZCcpLCAxMDAwKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlPZlllYXIgKGRhdGUpIHtcbiAgcmV0dXJuIGdldERhdGVEaWZmKGRhdGUsIHN0YXJ0T2ZEYXRlKGRhdGUsICd5ZWFyJyksICdkYXlzJykgKyAxXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmZlckRhdGVGb3JtYXQgKGRhdGUpIHtcbiAgcmV0dXJuIGlzRGF0ZShkYXRlKSA9PT0gdHJ1ZVxuICAgID8gJ2RhdGUnXG4gICAgOiAodHlwZW9mIGRhdGUgPT09ICdudW1iZXInID8gJ251bWJlcicgOiAnc3RyaW5nJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGVCZXR3ZWVuIChkYXRlLCBtaW4sIG1heCkge1xuICBjb25zdCB0ID0gbmV3IERhdGUoZGF0ZSlcblxuICBpZiAobWluKSB7XG4gICAgY29uc3QgbG93ID0gbmV3IERhdGUobWluKVxuICAgIGlmICh0IDwgbG93KSB7XG4gICAgICByZXR1cm4gbG93XG4gICAgfVxuICB9XG5cbiAgaWYgKG1heCkge1xuICAgIGNvbnN0IGhpZ2ggPSBuZXcgRGF0ZShtYXgpXG4gICAgaWYgKHQgPiBoaWdoKSB7XG4gICAgICByZXR1cm4gaGlnaFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVEYXRlIChkYXRlLCBkYXRlMiwgdW5pdCkge1xuICBjb25zdFxuICAgIHQgPSBuZXcgRGF0ZShkYXRlKSxcbiAgICBkID0gbmV3IERhdGUoZGF0ZTIpXG5cbiAgaWYgKHVuaXQgPT09IHZvaWQgMCkge1xuICAgIHJldHVybiB0LmdldFRpbWUoKSA9PT0gZC5nZXRUaW1lKClcbiAgfVxuXG4gIHN3aXRjaCAodW5pdCkge1xuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICBpZiAodC5nZXRTZWNvbmRzKCkgIT09IGQuZ2V0U2Vjb25kcygpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIGNhc2UgJ21pbnV0ZSc6IC8vIGludGVudGlvbmFsIGZhbGwtdGhyb3VnaFxuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgICAgaWYgKHQuZ2V0TWludXRlcygpICE9PSBkLmdldE1pbnV0ZXMoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICBjYXNlICdob3VyJzogLy8gaW50ZW50aW9uYWwgZmFsbC10aHJvdWdoXG4gICAgY2FzZSAnaG91cnMnOlxuICAgICAgaWYgKHQuZ2V0SG91cnMoKSAhPT0gZC5nZXRIb3VycygpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIGNhc2UgJ2RheSc6IC8vIGludGVudGlvbmFsIGZhbGwtdGhyb3VnaFxuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgaWYgKHQuZ2V0RGF0ZSgpICE9PSBkLmdldERhdGUoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICBjYXNlICdtb250aCc6IC8vIGludGVudGlvbmFsIGZhbGwtdGhyb3VnaFxuICAgIGNhc2UgJ21vbnRocyc6XG4gICAgICBpZiAodC5nZXRNb250aCgpICE9PSBkLmdldE1vbnRoKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgY2FzZSAneWVhcic6IC8vIGludGVudGlvbmFsIGZhbGwtdGhyb3VnaFxuICAgIGNhc2UgJ3llYXJzJzpcbiAgICAgIGlmICh0LmdldEZ1bGxZZWFyKCkgIT09IGQuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihgZGF0ZSBpc1NhbWVEYXRlIHVua25vd24gdW5pdCAkeyB1bml0IH1gKVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRheXNJbk1vbnRoIChkYXRlKSB7XG4gIHJldHVybiAobmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCAwKSkuZ2V0RGF0ZSgpXG59XG5cbmZ1bmN0aW9uIGdldE9yZGluYWwgKG4pIHtcbiAgaWYgKG4gPj0gMTEgJiYgbiA8PSAxMykge1xuICAgIHJldHVybiBgJHsgbiB9dGhgXG4gIH1cbiAgc3dpdGNoIChuICUgMTApIHtcbiAgICBjYXNlIDE6IHJldHVybiBgJHsgbiB9c3RgXG4gICAgY2FzZSAyOiByZXR1cm4gYCR7IG4gfW5kYFxuICAgIGNhc2UgMzogcmV0dXJuIGAkeyBuIH1yZGBcbiAgfVxuICByZXR1cm4gYCR7IG4gfXRoYFxufVxuXG5jb25zdCBmb3JtYXR0ZXIgPSB7XG4gIC8vIFllYXI6IDAwLCAwMSwgLi4uLCA5OVxuICBZWSAoZGF0ZSwgZGF0ZUxvY2FsZSwgZm9yY2VkWWVhcikge1xuICAgIC8vIHdvcmthcm91bmQgZm9yIDwgMTkwMCB3aXRoIG5ldyBEYXRlKClcbiAgICBjb25zdCB5ID0gdGhpcy5ZWVlZKGRhdGUsIGRhdGVMb2NhbGUsIGZvcmNlZFllYXIpICUgMTAwXG4gICAgcmV0dXJuIHkgPj0gMFxuICAgICAgPyBwYWQoeSlcbiAgICAgIDogJy0nICsgcGFkKE1hdGguYWJzKHkpKVxuICB9LFxuXG4gIC8vIFllYXI6IDE5MDAsIDE5MDEsIC4uLiwgMjA5OVxuICBZWVlZIChkYXRlLCBfZGF0ZUxvY2FsZSwgZm9yY2VkWWVhcikge1xuICAgIC8vIHdvcmthcm91bmQgZm9yIDwgMTkwMCB3aXRoIG5ldyBEYXRlKClcbiAgICByZXR1cm4gZm9yY2VkWWVhciAhPT0gdm9pZCAwICYmIGZvcmNlZFllYXIgIT09IG51bGxcbiAgICAgID8gZm9yY2VkWWVhclxuICAgICAgOiBkYXRlLmdldEZ1bGxZZWFyKClcbiAgfSxcblxuICAvLyBNb250aDogMSwgMiwgLi4uLCAxMlxuICBNIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgfSxcblxuICAvLyBNb250aDogMDEsIDAyLCAuLi4sIDEyXG4gIE1NIChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlLmdldE1vbnRoKCkgKyAxKVxuICB9LFxuXG4gIC8vIE1vbnRoIFNob3J0IE5hbWU6IEphbiwgRmViLCAuLi5cbiAgTU1NIChkYXRlLCBkYXRlTG9jYWxlKSB7XG4gICAgcmV0dXJuIGRhdGVMb2NhbGUubW9udGhzU2hvcnRbIGRhdGUuZ2V0TW9udGgoKSBdXG4gIH0sXG5cbiAgLy8gTW9udGggTmFtZTogSmFudWFyeSwgRmVicnVhcnksIC4uLlxuICBNTU1NIChkYXRlLCBkYXRlTG9jYWxlKSB7XG4gICAgcmV0dXJuIGRhdGVMb2NhbGUubW9udGhzWyBkYXRlLmdldE1vbnRoKCkgXVxuICB9LFxuXG4gIC8vIFF1YXJ0ZXI6IDEsIDIsIDMsIDRcbiAgUSAoZGF0ZSkge1xuICAgIHJldHVybiBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMylcbiAgfSxcblxuICAvLyBRdWFydGVyOiAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgUW8gKGRhdGUpIHtcbiAgICByZXR1cm4gZ2V0T3JkaW5hbCh0aGlzLlEoZGF0ZSkpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIG1vbnRoOiAxLCAyLCAuLi4sIDMxXG4gIEQgKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXREYXRlKClcbiAgfSxcblxuICAvLyBEYXkgb2YgbW9udGg6IDFzdCwgMm5kLCAuLi4sIDMxc3RcbiAgRG8gKGRhdGUpIHtcbiAgICByZXR1cm4gZ2V0T3JkaW5hbChkYXRlLmdldERhdGUoKSlcbiAgfSxcblxuICAvLyBEYXkgb2YgbW9udGg6IDAxLCAwMiwgLi4uLCAzMVxuICBERCAoZGF0ZSkge1xuICAgIHJldHVybiBwYWQoZGF0ZS5nZXREYXRlKCkpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHllYXI6IDEsIDIsIC4uLiwgMzY2XG4gIERERCAoZGF0ZSkge1xuICAgIHJldHVybiBnZXREYXlPZlllYXIoZGF0ZSlcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhcjogMDAxLCAwMDIsIC4uLiwgMzY2XG4gIEREREQgKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkKGdldERheU9mWWVhcihkYXRlKSwgMylcbiAgfSxcblxuICAvLyBEYXkgb2Ygd2VlazogMCwgMSwgLi4uLCA2XG4gIGQgKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXREYXkoKVxuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrOiBTdSwgTW8sIC4uLlxuICBkZCAoZGF0ZSwgZGF0ZUxvY2FsZSkge1xuICAgIHJldHVybiB0aGlzLmRkZGQoZGF0ZSwgZGF0ZUxvY2FsZSkuc2xpY2UoMCwgMilcbiAgfSxcblxuICAvLyBEYXkgb2Ygd2VlazogU3VuLCBNb24sIC4uLlxuICBkZGQgKGRhdGUsIGRhdGVMb2NhbGUpIHtcbiAgICByZXR1cm4gZGF0ZUxvY2FsZS5kYXlzU2hvcnRbIGRhdGUuZ2V0RGF5KCkgXVxuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrOiBTdW5kYXksIE1vbmRheSwgLi4uXG4gIGRkZGQgKGRhdGUsIGRhdGVMb2NhbGUpIHtcbiAgICByZXR1cm4gZGF0ZUxvY2FsZS5kYXlzWyBkYXRlLmdldERheSgpIF1cbiAgfSxcblxuICAvLyBEYXkgb2YgSVNPIHdlZWs6IDEsIDIsIC4uLiwgN1xuICBFIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF5KCkgfHwgN1xuICB9LFxuXG4gIC8vIFdlZWsgb2YgWWVhcjogMSAyIC4uLiA1MiA1M1xuICB3IChkYXRlKSB7XG4gICAgcmV0dXJuIGdldFdlZWtPZlllYXIoZGF0ZSlcbiAgfSxcblxuICAvLyBXZWVrIG9mIFllYXI6IDAxIDAyIC4uLiA1MiA1M1xuICB3dyAoZGF0ZSkge1xuICAgIHJldHVybiBwYWQoZ2V0V2Vla09mWWVhcihkYXRlKSlcbiAgfSxcblxuICAvLyBIb3VyOiAwLCAxLCAuLi4gMjNcbiAgSCAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldEhvdXJzKClcbiAgfSxcblxuICAvLyBIb3VyOiAwMCwgMDEsIC4uLiwgMjNcbiAgSEggKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkKGRhdGUuZ2V0SG91cnMoKSlcbiAgfSxcblxuICAvLyBIb3VyOiAxLCAyLCAuLi4sIDEyXG4gIGggKGRhdGUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKVxuICAgIHJldHVybiBob3VycyA9PT0gMFxuICAgICAgPyAxMlxuICAgICAgOiAoaG91cnMgPiAxMiA/IGhvdXJzICUgMTIgOiBob3VycylcbiAgfSxcblxuICAvLyBIb3VyOiAwMSwgMDIsIC4uLiwgMTJcbiAgaGggKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkKHRoaXMuaChkYXRlKSlcbiAgfSxcblxuICAvLyBNaW51dGU6IDAsIDEsIC4uLiwgNTlcbiAgbSAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldE1pbnV0ZXMoKVxuICB9LFxuXG4gIC8vIE1pbnV0ZTogMDAsIDAxLCAuLi4sIDU5XG4gIG1tIChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlLmdldE1pbnV0ZXMoKSlcbiAgfSxcblxuICAvLyBTZWNvbmQ6IDAsIDEsIC4uLiwgNTlcbiAgcyAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldFNlY29uZHMoKVxuICB9LFxuXG4gIC8vIFNlY29uZDogMDAsIDAxLCAuLi4sIDU5XG4gIHNzIChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlLmdldFNlY29uZHMoKSlcbiAgfSxcblxuICAvLyAxLzEwIG9mIHNlY29uZDogMCwgMSwgLi4uLCA5XG4gIFMgKGRhdGUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8gMTAwKVxuICB9LFxuXG4gIC8vIDEvMTAwIG9mIHNlY29uZDogMDAsIDAxLCAuLi4sIDk5XG4gIFNTIChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZChNYXRoLmZsb29yKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMCkpXG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmQ6IDAwMCwgMDAxLCAuLi4sIDk5OVxuICBTU1MgKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIDMpXG4gIH0sXG5cbiAgLy8gTWVyaWRpZW06IEFNLCBQTVxuICBBIChkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuSChkYXRlKSA8IDEyID8gJ0FNJyA6ICdQTSdcbiAgfSxcblxuICAvLyBNZXJpZGllbTogYW0sIHBtXG4gIGEgKGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5IKGRhdGUpIDwgMTIgPyAnYW0nIDogJ3BtJ1xuICB9LFxuXG4gIC8vIE1lcmlkaWVtOiBhLm0uLCBwLm0uXG4gIGFhIChkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuSChkYXRlKSA8IDEyID8gJ2EubS4nIDogJ3AubS4nXG4gIH0sXG5cbiAgLy8gVGltZXpvbmU6IC0wMTowMCwgKzAwOjAwLCAuLi4gKzEyOjAwXG4gIFogKGRhdGUsIF9kYXRlTG9jYWxlLCBfZm9yY2VkWWVhciwgZm9yY2VkVGltZXpvbmVPZmZzZXQpIHtcbiAgICBjb25zdCB0ek9mZnNldCA9IGZvcmNlZFRpbWV6b25lT2Zmc2V0ID09PSB2b2lkIDAgfHwgZm9yY2VkVGltZXpvbmVPZmZzZXQgPT09IG51bGxcbiAgICAgID8gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgICA6IGZvcmNlZFRpbWV6b25lT2Zmc2V0XG5cbiAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodHpPZmZzZXQsICc6JylcbiAgfSxcblxuICAvLyBUaW1lem9uZTogLTAxMDAsICswMDAwLCAuLi4gKzEyMDBcbiAgWlogKGRhdGUsIF9kYXRlTG9jYWxlLCBfZm9yY2VkWWVhciwgZm9yY2VkVGltZXpvbmVPZmZzZXQpIHtcbiAgICBjb25zdCB0ek9mZnNldCA9IGZvcmNlZFRpbWV6b25lT2Zmc2V0ID09PSB2b2lkIDAgfHwgZm9yY2VkVGltZXpvbmVPZmZzZXQgPT09IG51bGxcbiAgICAgID8gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgICA6IGZvcmNlZFRpbWV6b25lT2Zmc2V0XG5cbiAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodHpPZmZzZXQpXG4gIH0sXG5cbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXA6IDUxMjk2OTUyMFxuICBYIChkYXRlKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZGF0ZS5nZXRUaW1lKCkgLyAxMDAwKVxuICB9LFxuXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXA6IDUxMjk2OTUyMDkwMFxuICB4IChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUgKHZhbCwgbWFzaywgZGF0ZUxvY2FsZSwgX19mb3JjZWRZZWFyLCBfX2ZvcmNlZFRpbWV6b25lT2Zmc2V0KSB7XG4gIGlmIChcbiAgICAodmFsICE9PSAwICYmICF2YWwpXG4gICAgfHwgdmFsID09PSBJbmZpbml0eVxuICAgIHx8IHZhbCA9PT0gLUluZmluaXR5XG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbClcblxuICBpZiAoaXNOYU4oZGF0ZSkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChtYXNrID09PSB2b2lkIDApIHtcbiAgICBtYXNrID0gZGVmYXVsdE1hc2tcbiAgfVxuXG4gIGNvbnN0IGxvY2FsZSA9IGdldERhdGVMb2NhbGUoZGF0ZUxvY2FsZSwgbGFuZy5wcm9wcylcblxuICByZXR1cm4gbWFzay5yZXBsYWNlKFxuICAgIHRva2VuLFxuICAgIChtYXRjaCwgdGV4dCkgPT4gKFxuICAgICAgbWF0Y2ggaW4gZm9ybWF0dGVyXG4gICAgICAgID8gZm9ybWF0dGVyWyBtYXRjaCBdKGRhdGUsIGxvY2FsZSwgX19mb3JjZWRZZWFyLCBfX2ZvcmNlZFRpbWV6b25lT2Zmc2V0KVxuICAgICAgICA6ICh0ZXh0ID09PSB2b2lkIDAgPyBtYXRjaCA6IHRleHQuc3BsaXQoJ1xcXFxdJykuam9pbignXScpKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUgKGRhdGUpIHtcbiAgcmV0dXJuIGlzRGF0ZShkYXRlKSA9PT0gdHJ1ZVxuICAgID8gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpXG4gICAgOiBkYXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNWYWxpZCxcbiAgZXh0cmFjdERhdGUsXG4gIGJ1aWxkRGF0ZSxcbiAgZ2V0RGF5T2ZXZWVrLFxuICBnZXRXZWVrT2ZZZWFyLFxuICBpc0JldHdlZW5EYXRlcyxcbiAgYWRkVG9EYXRlLFxuICBzdWJ0cmFjdEZyb21EYXRlLFxuICBhZGp1c3REYXRlLFxuICBzdGFydE9mRGF0ZSxcbiAgZW5kT2ZEYXRlLFxuICBnZXRNYXhEYXRlLFxuICBnZXRNaW5EYXRlLFxuICBnZXREYXRlRGlmZixcbiAgZ2V0RGF5T2ZZZWFyLFxuICBpbmZlckRhdGVGb3JtYXQsXG4gIGdldERhdGVCZXR3ZWVuLFxuICBpc1NhbWVEYXRlLFxuICBkYXlzSW5Nb250aCxcbiAgZm9ybWF0RGF0ZSxcbiAgY2xvbmVcbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8cS1sYXlvdXQgY29udGFpbmVyIHZpZXc9XCJsSGggbHBSIGxmZlwiIGNsYXNzPVwic2hhZG93LTIgcm91bmRlZCBtYWlsLXdpbmRvd1wiPlxuICAgIFxuICAgICAgICA8cS1oZWFkZXIgZWxldmF0ZWQgY2xhc3M9XCJiZy1wcmltYXJ5IHRleHQtd2hpdGVcIiBoZWlnaHQtaGludD1cIjk4XCI+XG4gICAgICAgICAgICA8cS10b29sYmFyPlxuICAgICAgICAgICAgICAgIDxxLXRvb2xiYXItdGl0bGU+TWFpbDwvcS10b29sYmFyLXRpdGxlPlxuICAgICAgICAgICAgICAgIDxxLXNlcGFyYXRvciBzcGFjZWQgdmVydGljYWwgLz5cbiAgICAgICAgICAgICAgICA8cS1idG4gbm8tY2FwcyBzaXplPVwibWRcIiBjb2xvcj1cIndoaXRlXCIgdGV4dC1jb2xvcj1cImJsYWNrXCIgQGNsaWNrPVwiZG9TYXZlKClcIiBpY29uPVwic2F2ZV9hbHRcIiBkZW5zZT5cbiAgICAgICAgICAgICAgICAgICAgPHEtdG9vbHRpcD57eyAkdCgnbWVzc2FnZXMuQnV0dG9uU2F2ZScpIH19PC9xLXRvb2x0aXA+XG4gICAgICAgICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICAgICAgICA8cS1idG4gbm8tY2FwcyBzaXplPVwibWRcIiBjb2xvcj1cIndoaXRlXCIgdGV4dC1jb2xvcj1cImJsYWNrXCIgQGNsaWNrPVwiZG9DbG9zZSgpXCIgaWNvbj1cImNsb3NlXCIgZGVuc2U+XG4gICAgICAgICAgICAgICAgICAgIDxxLXRvb2x0aXA+e3sgJHQoJ21lc3NhZ2VzLkJ1dHRvbkNsb3NlJykgfX08L3EtdG9vbHRpcD5cbiAgICAgICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgICAgPC9xLXRvb2xiYXI+XG4gICAgICAgIDwvcS1oZWFkZXI+XG4gICAgXG4gICAgICAgIDxxLXBhZ2UtY29udGFpbmVyPlxuICAgICAgICAgICAgPHEtcGFnZSBjbGFzcz1cImJhY2stZ3JleVwiPlxuICAgICAgICAgICAgICAgIDxxLWZvcm0gQHN1Ym1pdD1cImRvU2F2ZVwiIGNsYXNzPVwicS1ndXR0ZXIteHNcIiByZWY9XCJjdXN0b21lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAtOTk5OXB4XCIvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHEtY29sLWd1dHRlci1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cImVtYWlsXCIgdi1tb2RlbD1cImZvcm0uZW1haWxcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sTWFpbCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cInN1YmplY3RcIiB2LW1vZGVsPVwiZm9ybS5zdWJqZWN0XCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsU3ViamVjdCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGVkaXRvciByZWY9XCJlZGl0b3JcIiA6Y29uZmlnPVwiY29uZmlnXCIgaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWZvcm0+XG4gICAgICAgICAgICA8L3EtcGFnZT5cbiAgICAgICAgPC9xLXBhZ2UtY29udGFpbmVyPlxuICAgIDwvcS1sYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuXG5pbXBvcnQgXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IGRlYnVnICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2RlYnVnJztcbmNvbnN0IGxvZyAgICAgICAgID0gZGVidWcoJ2FwcDptYWlsJyk7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgIGxlYWQ6IHtcbiAgICAgICAgdHlwZTogICAgICAgT2JqZWN0LFxuICAgICAgICByZXF1aXJlZDogICB0cnVlXG4gICAgfSxcbiAgICBzaG93TWFpbDoge1xuICAgICAgICB0eXBlOiAgICAgICBCb29sZWFuLFxuICAgICAgICByZXF1aXJlZDogICB0cnVlXG4gICAgfSxcbn0pO1xuXG5jb25zdCBlbWl0ICAgICAgPSBkZWZpbmVFbWl0cyhbXG4gICAgJ2RvQ2xvc2UnLFxuXSk7XG5cbmNvbnN0ICAgZm9ybSAgICAgICAgICA9IHJlZih7XG4gICAgICAgICAgICBlbWFpbDogICAgICAgICAgcHJvcHMubGVhZC5lbWFpbCxcbiAgICAgICAgICAgIHN1YmplY3Q6ICAgICAgICBgQW5mcmFnZSB6dSBGYWhyemV1ZyAke3Byb3BzLmxlYWQuZmFocnpldWcubW9kZWx9ICgke3Byb3BzLmxlYWQuZ2Z6fSlgLFxuICAgICAgICAgICAgdGV4dDogICAgICAgICAgICcnXG4gICAgICAgIH0pLFxuICAgICAgICBjb25maWcgICAgICAgID0ge307XG5cbmZ1bmN0aW9uIGRvU2F2ZSgpIHtcbiAgICBsb2coICdkb1NhdmUnLCBmb3JtLnZhbHVlICk7XG59XG5cbmZ1bmN0aW9uIGRvQ2xvc2UoKSB7XG4gICAgZW1pdCggJ2RvQ2xvc2UnICk7XG59XG4gICAgICAgIFxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgXCIuLi9fdmFyaWFibGVzLnNjc3NcIjtcblxuLm1haWwtd2luZG93IHtcbiAgICB3aWR0aDogICAgIGNhbGMoIDEwMHZ3IC0gNDAwcHggKTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoIDEwMHZ3IC0gNDAwcHggKSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogICAgY2FsYyggMTAwdmggLSAyMDBweCApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8cS1wYWdlIGNsYXNzPVwicS1wYS1zbVwiPlxuXG4gICAgICAgIDxOYXZCYXIgOnRpdGxlPVwiJHQoJ21lc3NhZ2VzLkxhYmVsTGVhZC1pbmJvdW5kJylcIiBpY29uPVwiZmFzIGZhLW1haWwtYnVsa1wiIHN0YXRlTmFtZT1cImxlYWRJbmJvdW5kXCIgeGZ1bmNzPVwibmF2YmFyU3VibWVudVwiIDpzdGF0ZT1cImxlYWRTdG9yZVwiIHR5cGU9XCJ3aW5kb3dcIiAvPlxuICAgICAgICBcbiAgICAgICAgPHEtY2FyZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHEtY2FyZCBjbGFzcz1cImJnLWdyZXktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCIgdi10PVwiJ21lc3NhZ2VzLkxhYmVsRmlsdGVyJ1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLXNlcGFyYXRvciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHEtY2FyZC1zZWN0aW9uPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTJcIiB2LXQ9XCInbWVzc2FnZXMuTGFiZWxTdGF0ZSdcIj48L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gICAgPHEtb3B0aW9uLWdyb3VwLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tICAgICAgICB2LW1vZGVsPVwiZmlsdGVyU3RhdGVcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgICAgICAgOm9wdGlvbnM9XCJzdGF0ZUxpc3RcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgICAvPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvcS1jYXJkLXNlY3Rpb24+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHEtc2VwYXJhdG9yIC8+LS0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTJcIiB2LXQ9XCInbWVzc2FnZXMuTGFiZWxTcmMnXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtb3B0aW9uLWdyb3VwIGRlbnNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWx0ZXJQb3J0YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInBvcnRhbExpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08cS1jYXJkLXNlY3Rpb24+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMlwiIHYtdD1cIidtZXNzYWdlcy5MYWJlbENhdGVnb3J5J1wiPjwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgICA8cS1vcHRpb24tZ3JvdXAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgIHYtbW9kZWw9XCJmaWx0ZXJDYXRlZ29yeVwiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tICAgICAgICA6b3B0aW9ucz1cImNhdGVnb3J5TGlzdFwiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tICAgIC8+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC9xLWNhcmQtc2VjdGlvbj4tLT5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBncmlkTmFtZT1cImxlYWRJbmJvdW5kR3JpZFwiIDpncmlkT3B0aW9ucz1cImxlYWRJbmJvdW5kR3JpZFwiIHN0YXRlTmFtZT1cImxlYWRJbmJvdW5kXCIgOnN0YXRlPVwibGVhZFN0b3JlXCIgQHN1YkdyaWRSZWFkeT1cInN1YkdyaWRSZWFkeVwiIHR5cGU9XCJzZXJ2ZXJcIiBvcmllbnRhdGlvbj1cInBvcnRyYWl0XCIgdi1pZj1cInNob3dHcmlkXCIgcmVmPVwicmVmR3JpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHEtc2VwYXJhdG9yIC8+XG4gICAgICAgIDwvcS1jYXJkPlxuICAgICAgICBcbiAgICAgICAgPHEtZGlhbG9nIHYtbW9kZWw9XCJzaG93Rm9ybVwiIEBoaWRlPVwib25Gb3JtSGlkZVwiIG5vLWJhY2tkcm9wLWRpc21pc3M+XG4gICAgICAgICAgICA8cS1sYXlvdXQgY29udGFpbmVyIHZpZXc9XCJsSGggbHBSIGxmZlwiIGNsYXNzPVwic2hhZG93LTIgcm91bmRlZCBkZXRhaWxXaW5kb3dcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxxLWhlYWRlciBlbGV2YXRlZCBjbGFzcz1cImJnLXByaW1hcnkgdGV4dC13aGl0ZVwiIGhlaWdodC1oaW50PVwiOThcIj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkJhciA6dGl0bGU9XCIkdCgnbWVzc2FnZXMuTGFiZWxMZWFkJylcIiBpY29uPVwib3Blbl93aXRoXCIgc3RhdGVOYW1lPVwibGVhZHNcIiB4ZnVuY3M9XCJuYXZiYXJTdWJtZW51XCIgOnN0YXRlPVwibGVhZFN0b3JlXCIgdHlwZT1cImRpYWxvZ1wiIEBjbG9zZT1cIm9uRm9ybUhpZGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvcS1oZWFkZXI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8cS1wYWdlLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPHEtcGFnZSBjbGFzcz1cImJhY2stZ3JleVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1mb3JtIEBzdWJtaXQ9XCJkb1NhdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAtOTk5OXB4XCIgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIiB2LXQ9XCInbWVzc2FnZXMuTGFiZWxMZWFkJ1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IHYtbW9kZWw9XCJmb3JtLmxlYWQuZmlyc3ROYW1lXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZCBiZy1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sRmlyc3RuYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwic3VyTmFtZVwiIHYtbW9kZWw9XCJmb3JtLmxlYWQuc3VyTmFtZVwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWQgYmctY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbFN1cm5hbWUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWlucHV0IG5hbWU9XCJlbWFpbFwiIHYtbW9kZWw9XCJmb3JtLmxlYWQuZW1haWxcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkIGJnLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5Db2xNYWlsJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwidGVsZWZvblwiIHYtbW9kZWw9XCJmb3JtLmxlYWQudGVsZWZvblwiIGxhenktcnVsZXMgZGVuc2Ugb3V0bGluZWQgYmctY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbFBob25lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiIHYtdD1cIidtZXNzYWdlcy5MYWJlbENhcidcIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cImRhdGVcIiB2LW1vZGVsPVwiZm9ybS5kYXRlXCIgbGF6eS1ydWxlcyBkZW5zZSByZWY9XCJsZWFkc1wiIG91dGxpbmVkIGJnLWNvbG9yPVwid2hpdGVcIiBkaXNhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsT3JkZXJGcm9tJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiZ2Z6XCIgdi1tb2RlbD1cImZvcm0uZ2Z6XCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZCA6b3B0aW9ucy1kZW5zZT1cInRydWVcIiBiZy1jb2xvcj1cIndoaXRlXCIgZGlzYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbEdmek51bWJlcicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dCBuYW1lPVwiYnJhbmNoXCIgdi1tb2RlbD1cImZvcm0uZmFocnpldWcuYnJhbmNoXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZCBiZy1jb2xvcj1cIndoaXRlXCIgZGlzYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbEJyYW5jaCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtc2VsZWN0IG5hbWU9XCJzYWxlc1wiIHYtbW9kZWw9XCJmb3JtLnNhbGVzXCIgbGF6eS1ydWxlcyBkZW5zZSBvdXRsaW5lZCBvcHRpb25zLWRlbnNlIGJnLWNvbG9yPVwid2hpdGVcIiBkaXNhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsU2FsZXMnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJ1c2Vyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLXZhbHVlPVwiX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9uLWxhYmVsPVwib3B0ID0+IG9wdC5zdXJOYW1lID8gYCR7b3B0LnN1ck5hbWV9LCAke29wdC5maXJzdE5hbWV9YCA6ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAtb3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1zZWxlY3QgbmFtZT1cImNhdGVnb3J5XCIgdi1tb2RlbD1cImZvcm0uY2F0ZWdvcnlcIiBsYXp5LXJ1bGVzIGRlbnNlIG91dGxpbmVkIG9wdGlvbnMtZGVuc2UgYmctY29sb3I9XCJ3aGl0ZVwiIGRpc2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuQ29sQ2F0ZWdvcnknKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJjYXRlZ29yaWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24tdmFsdWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24tbGFiZWw9XCJkZXNjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAtb3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRvb2xiYXIgY2xhc3M9XCJiZy1ibHVlLWdyZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtYnRuIGljb249XCJmYXMgZmEtZW52ZWxvcGVcIiBjb2xvcj1cIndoaXRlXCIgdGV4dC1jb2xvcj1cImJsYWNrXCIgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbE1haWwnKVwiIEBjbGljaz1cInNob3dNYWlsID0gdHJ1ZVwiIGRlbnNlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXNlcGFyYXRvciBzcGFjZWQgdmVydGljYWwgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtYnRuIGljb249XCJmYXMgZmEtaW5ib3hcIiBjb2xvcj1cIndoaXRlXCIgdGV4dC1jb2xvcj1cImJsYWNrXCIgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbExldHRlcicpXCIgQGNsaWNrPVwic2VuZC5NYWlsXCIgZGVuc2UgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIHNwYWNlZCB2ZXJ0aWNhbCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1idG4gaWNvbj1cImZhcyBmYS1jYWxlbmRhci1hbHRcIiBjb2xvcj1cIndoaXRlXCIgdGV4dC1jb2xvcj1cImJsYWNrXCIgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkNvbExldHRlcicpXCIgQGNsaWNrPVwic2VuZC5EYXRlXCIgZGVuc2UgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtc3BhY2UgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtYnRuIGljb249XCJmYXMgZmEtaGFuZHNoYWtlXCIgY29sb3I9XCJ3aGl0ZVwiIHRleHQtY29sb3I9XCJibGFja1wiIDpsYWJlbD1cIiR0KCdtZXNzYWdlcy5MYWJlbFRha2VPdmVyJylcIiBAY2xpY2s9XCJ0YWtlT3ZlclwiIGRlbnNlIDpkaXNhYmxlPVwiaXNTYWxlcygpXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtdG9vbGJhcj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRhYnMgdi1tb2RlbD1cInRhYlwiIGNsYXNzPVwidGV4dC10ZWFsIGJnLXdoaXRlXCIgYWxpZ249XCJsZWZ0XCIgZGVuc2Ugb3V0bGluZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRhYiA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxDb250YWN0JylcIiBuYW1lPVwiY29udGFjdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRhYiA6bGFiZWw9XCIkdCgnbWVzc2FnZXMuTGFiZWxDYXInKVwiIG5hbWU9XCJjYXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS10YWIgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsQ2FyaW5mbycpXCIgbmFtZT1cInJpZXVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtdGFicz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRhYi1wYW5lbHMgdi1tb2RlbD1cInRhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRhYi1wYW5lbCBuYW1lPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBxLWNvbC1ndXR0ZXItbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaW5wdXQgbmFtZT1cImxlYWRpbmZvXCIgdi1tb2RlbD1cImZvcm0ubGVhZC5pbmZvXCIgbGF6eS1ydWxlcyB0eXBlPVwidGV4dGFyZWFcIiBkZW5zZSBvdXRsaW5lZCBhdXRvZ3Jvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ21lc3NhZ2VzLkxhYmVsSW5mbycpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtdGFiLXBhbmVsPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGFiLXBhbmVsIG5hbWU9XCJjYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLXNjcm9sbC1hcmVhIGNsYXNzPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtbGlzdCBib3JkZXJlZCBzZXBhcmF0b3IgZGVuc2Ugb3V0bGluZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KCdtZXNzYWdlcy5Db2xIZXJzdCcpIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7IGZvcm0uZmFocnpldWcuaGVyc3RlbGxlciB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KCdtZXNzYWdlcy5Db2xDYXRlZ29yeScpIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7IGZvcm0uZmFocnpldWcua2F0ZWdvcmllIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoJ21lc3NhZ2VzLkNvbE1vZGVsJykgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgZm9ybS5mYWhyemV1Zy5tb2RlbCB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KCdtZXNzYWdlcy5Db2xEZXNjJykgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgZm9ybS5mYWhyemV1Zy5kZXNjIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoJ21lc3NhZ2VzLkNvbEZ1ZWwnKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyBmb3JtLmluZm9zLmZ1ZWwgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyAkdCgnbWVzc2FnZXMuQ29sQ29sb3InKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyBmb3JtLmZhaHJ6ZXVnLmZhcmJlIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoJ21lc3NhZ2VzLkxhYmVsS00nKSB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj57eyBmb3JtLmluZm9zLmttIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgJHQoJ21lc3NhZ2VzLkNvbFByaWNlJykgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgZm9ybS5mYWhyemV1Zy5wcmVpcyB9fTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KCdtZXNzYWdlcy5Db2xQb3dlcicpIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7IGZvcm0uZmFocnpldWcubGVpc3R1bmcgfX1rVzwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPnt7ICR0KCdtZXNzYWdlcy5MYWJlbEZpcnN0UmVnaXN0JykgfX08L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+e3sgZm9ybS5mYWhyemV1Zy5lcnN0enVsYXNzdW5nIH19PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Etc2Nyb2xsLWFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLXRhYi1wYW5lbD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS10YWItcGFuZWwgbmFtZT1cInJpZXVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHEtY29sLWd1dHRlci1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1zY3JvbGwtYXJlYSBjbGFzcz1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWxpc3QgYm9yZGVyZWQgc2VwYXJhdG9yIGRlbnNlIG91dGxpbmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0gdi1mb3I9XCJpdGVtIGluIGNhckxpc3RcIiA6a2V5PVwiaXRlbS5rZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgaXRlbS5kZXNjIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gY2xhc3M9XCJjb2wtNlwiIDpjbGFzcz1cImB0eXBlLSR7aXRlbS50eXBlfWBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgdi1pZj1cIml0ZW0udHlwZSA9PT0gJ251bWJlcidcIj57eyBpdGVtLmVudHJ5IH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIHYtZWxzZS1pZj1cIml0ZW0udHlwZSA9PT0gJ2RlY2ltYWwnXCI+e3sgaXRlbS5lbnRyeSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCB2LWVsc2U+e3sgaXRlbS5lbnRyeSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1zY3JvbGwtYXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS1zY3JvbGwtYXJlYSBjbGFzcz1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWxpc3QgYm9yZGVyZWQgc2VwYXJhdG9yIGRlbnNlIG91dGxpbmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0gdi1mb3I9XCJpdGVtIGluIGRlc2NyaXB0aW9uKClcIiA6a2V5PVwiaXRlbS5rZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgaXRlbS5rZXkgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGNsYXNzPVwiY29sLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgdi1odG1sPVwiaXRlbS50ZXh0XCI+PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLXNjcm9sbC1hcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS10YWItcGFuZWw+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS10YWItcGFuZWxzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgYmFjay1ncmV5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtc2Nyb2xsLWFyZWEgY2xhc3M9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1jb2wtZ3V0dGVyLW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHEtcHgtbGcgcS1wYi1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCIgdi10PVwiJ21lc3NhZ2VzLkxhYmVsSGlzdG9yeSdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cS10aW1lbGluZSBkZW5zZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHEtdGltZWxpbmUtZW50cnkgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIG9mIGZvcm0uaGlzdFwiIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGl0bGU9XCIkdChgbWVzc2FnZXMuSGlzdG9yeV8ke2l0ZW0udHlwZX1gKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3VidGl0bGU9XCJkYXRlLmZvcm1hdERhdGUoIGl0ZW0udGltZXN0YW1wLCAnZGRkZCBERC5NTS5ZWVlZIEhIOm1tJyApXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppY29uPVwiaXRlbS5pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjb2xvcj1cIml0ZW0uY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt7ICR0KGBtZXNzYWdlcy4ke2l0ZW0uaW5mb31gKSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtdGltZWxpbmUtZW50cnk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9xLXRpbWVsaW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcS1zY3JvbGwtYXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9xLWZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1wYWdlPlxuICAgICAgICAgICAgICAgIDwvcS1wYWdlLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9xLWxheW91dD5cbiAgICAgICAgPC9xLWRpYWxvZz5cbiAgICAgICAgXG4gICAgICAgIDxxLWRpYWxvZyB2LW1vZGVsPVwic2hvd01haWxcIj5cbiAgICAgICAgICAgIDxNYWlsIDpsZWFkPVwiZm9ybVwiIDpzaG93TWFpbD1cInNob3dNYWlsXCIgQGRvQ2xvc2U9XCJzaG93TWFpbCA9IGZhbHNlXCIgLz5cbiAgICAgICAgPC9xLWRpYWxvZz5cbiAgICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgeyBkYXRlIH0gICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IHVzZUkxOG4gfSAgICAgICAgICAgICAgICAgICAgICBmcm9tICd2dWUtaTE4bic7XG5cbmltcG9ydCBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgR2xvYmFsVmlldyAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29tbW9uL2hlbHBlcnMvR2xvYmFsVmlldyc7XG5pbXBvcnQgU3RhdHVzICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29tbW9uL2hlbHBlcnMvU3RhdHVzJzsgXG5pbXBvcnQgU2VuZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29tbW9uL2hlbHBlcnMvU2VuZCc7IFxuaW1wb3J0IEdyaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnRzL0dyaWQudnVlJztcbmltcG9ydCBOYXZCYXIgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhci52dWUnOyBcbmltcG9ydCBNYWlsICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb21wb25lbnRzL01haWwudnVlJzsgXG5cbmltcG9ydCB7IHVzZUFjY291bnRTdG9yZSB9ICAgICAgICAgICAgICBmcm9tICdzcmMvc3RvcmVzL2FjY291bnQuc3RvcmUnO1xuaW1wb3J0IHsgdXNlRGF0YVN0b3JlIH0gICAgICAgICAgICAgICAgIGZyb20gJ3NyYy9zdG9yZXMvZGF0YS5zdG9yZSc7XG5cbmltcG9ydCBkZWJ1ZyAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdkZWJ1Zyc7XG5jb25zdCBsb2cgICAgICAgICA9IGRlYnVnKCdhcHA6bGVhZEluYm91bmQnKTtcblxuY29uc3QgeyB0IH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gdXNlSTE4bigpO1xuXG5jb25zdCBpbml0ICAgICAgICA9IHsgXG4gICAgY29sbE5hbWU6ICAgICAgICdsZWFkJywgXG4gICAgc3RhdGVOYW1lOiAgICAgICdsZWFkSW5ib3VuZCcsXG4gICAgZGVmYXVsdEZvcm06ICAgIHtcbiAgICAgICAgbGVhZDogICAgICAgICAgIHtcbiAgICAgICAgICAgIGFucmVkZTogICAgICAgICAnJyxcbiAgICAgICAgICAgIGZpcnN0TmFtZTogICAgICAnJyxcbiAgICAgICAgICAgIHN1ck5hbWU6ICAgICAgICAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAgICAgICAgICAnJyxcbiAgICAgICAgICAgIHRlbGVmb246ICAgICAgICAnJyxcbiAgICAgICAgICAgIHN0cmFzc2U6ICAgICAgICAnJyxcbiAgICAgICAgICAgIG9ydDogICAgICAgICAgICAnJyxcbiAgICAgICAgICAgIGluZm86ICAgICAgICAgICAnJ1xuICAgICAgICB9LFxuICAgICAgICBtYWlsOiAgICAgICAgICAge30sXG4gICAgICAgIGluZm9zOiAgICAgICAgICB7fSxcbiAgICAgICAgZmFocnpldWc6ICAgICAgIHt9LFxuICAgICAgICBzYWxlczogICAgICAgICAge1xuICAgICAgICAgICAgX2lkOiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAga3J6OiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgZmlyc3ROYW1lOiAgICAgICcnLFxuICAgICAgICAgICAgc3VyTmFtZTogICAgICAgICcnXG4gICAgICAgIH0sXG4gICAgICAgIGhpc3Q6ICAgICAgICAgICBbXSxcbiAgICB9XG59O1xuY29uc3QgZ2xvYmFsVmlldyAgPSBHbG9iYWxWaWV3KCBpbml0ICk7XG5jb25zdCB7IFxuICAgIHN0b3JlOiAgICAgICAgICBsZWFkU3RvcmUsIFxuICAgIGRhdGE6ICAgICAgICAgICBsZWFkLCBcbiAgICBkb1NhdmUsXG4gICAgZm9ybSBcbn0gID0gZ2xvYmFsVmlldztcblxuY29uc3QgICBsZWFkSW5ib3VuZEdyaWQgID0gcmVmKHtcbiAgICAgICAgICAgIGZpbHRlcjogICAgICAgICB7IHN0YXRlOiAnbmV3JyB9LFxuICAgICAgICAgICAgY29tcG9uZW50UGFyZW50OiAgICAgICAgcGFyZW50LFxuICAgICAgICAgICAgY29sdW1uVHlwZXM6ICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUNvbHVtbjogICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVHZXR0ZXIoIHBhcmFtcyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlICAgICA9IF8uZ2V0KCBwYXJhbXMsICdkYXRhLnN0YXRlJyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF8uZ2V0KCBwYXJhbXMsIGBjb250ZXh0LnN0YXRlTGlzdC4ke3N0YXRlfS5sYWJlbGAsIHN0YXRlICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNhbGVzQ29sdW1uOiAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZUdldHRlciggcGFyYW1zICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF8uZ2V0KCBwYXJhbXMsICdkYXRhLnNhbGVzLmZpcnN0TmFtZScsICcnKSArICcgJyArIF8uZ2V0KCBwYXJhbXMsICdkYXRhLnNhbGVzLnN1ck5hbWUnLCAnJyApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUNvbHVtbjogICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVHZXR0ZXIoIHBhcmFtcyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ICAgICAgICA9IF8uZ2V0KCBwYXJhbXMsICdkYXRhLmNhdGVnb3J5JywgJzAnICk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXy5nZXQoIHBhcmFtcywgYGNvbnRleHQuY2F0ZWdvcmllcy4ke2NhdGVnb3J5fS5kZXNjYCwgY2F0ZWdvcnkgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG5jb25zdCAgIHRhYiAgICAgICAgICAgPSByZWYoJ2NvbnRhY3QnKSxcbiAgICAgICAgY2FyTGlzdCAgICAgICA9IHJlZihbXSksXG4gICAgICAgIHBvcnRhbExpc3QgICAgPSByZWYoW10pLFxuICAgICAgICBhdXRvRmlsdGVyICAgID0gcmVmKFtdKSxcbiAgICAgICAgc2hvd0Zvcm0gICAgICA9IHJlZihmYWxzZSksXG4gICAgICAgIHNob3dNYWlsICAgICAgPSByZWYoZmFsc2UpLFxuICAgICAgICBzaG93R3JpZCAgICAgID0gcmVmKGZhbHNlKSxcbiAgICAgICAgZmlsdGVyUG9ydGFsICA9IHJlZignJyksXG4gICAgICAgIHJlZkdyaWQgICAgICAgPSByZWYobnVsbCksXG4gICAgICAgIGZpbHRlclN0YXRlICAgPSByZWYoJ25ldycpLFxuICAgICAgICBzdGF0ZUxpc3QgICAgID0gU3RhdHVzKCB0ICksXG4gICAgICAgIHNlbmQgICAgICAgICAgPSBTZW5kKCk7XG5cbmNvbnN0ICAgYXV0b3NlbGxlcnMgICAgID0gcmVmKFtdKTtcblxuY29uc3QgYWNjb3VudFN0b3JlICAgICAgICAgID0gdXNlQWNjb3VudFN0b3JlKCk7XG5jb25zdCBhdXRvc2VsbGVyU3RvcmUgICAgICAgPSB1c2VEYXRhU3RvcmUoICdhdXRvc2VsbGVyJywgJ2F1dG9zZWxsZXInICk7XG5jb25zdCB1c2VyU3RvcmUgICAgICAgICAgICAgPSB1c2VEYXRhU3RvcmUoICd1c2VyJywgJ3VzZXInICk7XG5jb25zdCBjYXJpbmZvU3RvcmUgICAgICAgICAgPSB1c2VEYXRhU3RvcmUoICdjYXJpbmZvJywgJ2NhckluZm8nICk7XG5jb25zdCBjYXRlZ29yeVN0b3JlICAgICAgICAgPSB1c2VEYXRhU3RvcmUoICdjYXRlZ29yaWVzJywgJ2NhdGVnb3JpZXMnICk7XG5jb25zdCBjb21wYW55U3RvcmUgICAgICAgICAgPSB1c2VEYXRhU3RvcmUoICdjb21wYW5pZXMnLCAnY29tcGFuaWVzJyApO1xuY29uc3QgcG9ydGFsU3RvcmUgICAgICAgICAgID0gdXNlRGF0YVN0b3JlKCAncG9ydGFscycsICdwb3J0YWwnICk7XG4vLyBjb25zdCBkb2N1bWVudFN0b3JlICAgICAgICAgPSB1c2VEYXRhU3RvcmUoICdkb2N1bWVudHMnLCAnZG9jdW1lbnRzJyApO1xuXG5jb25zdCB7IHVzZXIgfSAgICAgICAgICAgICAgICAgID0gc3RvcmVUb1JlZnMoIGFjY291bnRTdG9yZSApO1xuY29uc3QgeyBkYXRhOiBhbGxhdXRvIH0gICAgICAgICA9IHN0b3JlVG9SZWZzKCBhdXRvc2VsbGVyU3RvcmUgKTtcbmNvbnN0IHsgZGF0YTogdXNlcnMgfSAgICAgICAgICAgPSBzdG9yZVRvUmVmcyggdXNlclN0b3JlICk7XG5jb25zdCB7IGRhdGE6IGNhcmluZm9zIH0gICAgICAgID0gc3RvcmVUb1JlZnMoIGNhcmluZm9TdG9yZSApO1xuY29uc3QgeyBkYXRhOiBjYXRlZ29yaWVzIH0gICAgICA9IHN0b3JlVG9SZWZzKCBjYXRlZ29yeVN0b3JlICk7XG5jb25zdCB7IGRhdGE6IGNvbXBhbmllcyB9ICAgICAgID0gc3RvcmVUb1JlZnMoIGNvbXBhbnlTdG9yZSApO1xuY29uc3QgeyBkYXRhOiBwb3J0YWxzIH0gICAgICAgICA9IHN0b3JlVG9SZWZzKCBwb3J0YWxTdG9yZSApO1xuLy8gY29uc3QgeyBkYXRhOiBkb2N1bWVudHMgfSAgICAgICA9IHN0b3JlVG9SZWZzKCBkb2N1bWVudFN0b3JlICk7XG5cbndhdGNoKCBmaWx0ZXJTdGF0ZSwgKCBuZXdTdGF0ZSApID0+IHtcbiAgICBsb2coICdzdGF0ZScsIG5ld1N0YXRlICk7XG4gICAgXG4gICAgY29uc3QgZmlsdGVySW5zdGFuY2UgICAgICA9IHJlZkdyaWQudmFsdWUuZ3JpZE9wdC5hcGkuZ2V0RmlsdGVySW5zdGFuY2UoJ3N0YXRlJyk7XG4gICAgZmlsdGVySW5zdGFuY2Uuc2V0TW9kZWwoe1xuICAgICAgICB0eXBlOiAgICAgICAnZXF1YWxzJyxcbiAgICAgICAgZmlsdGVyOiAgICAgbmV3U3RhdGVcbiAgICB9KTtcbiAgICBcbiAgICByZWZHcmlkLnZhbHVlLmdyaWRPcHQuYXBpLm9uRmlsdGVyQ2hhbmdlZCgpO1xufSk7XG5cbndhdGNoKCBmaWx0ZXJQb3J0YWwsICggbmV3UG9ydGFsICkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGZpbHRlckluc3RhbmNlICAgICAgPSByZWZHcmlkLnZhbHVlLmdyaWRPcHQuYXBpLmdldEZpbHRlckluc3RhbmNlKCdtYWlsLnR5cGUnKTtcbiAgICBsb2coICdwb3J0YWwnLCBuZXdQb3J0YWwgKTtcbiAgICBcbiAgICBpZiAobmV3UG9ydGFsKVxuICAgICAgICBmaWx0ZXJJbnN0YW5jZS5zZXRNb2RlbCh7XG4gICAgICAgICAgICB0eXBlOiAgICAgICAnZXF1YWxzJyxcbiAgICAgICAgICAgIGZpbHRlcjogICAgIG5ld1BvcnRhbFxuICAgICAgICB9KTtcbiAgICBlbHNlXG4gICAgICAgIGZpbHRlckluc3RhbmNlLnNldE1vZGVsKCBudWxsICk7XG4gICAgXG4gICAgcmVmR3JpZC52YWx1ZS5ncmlkT3B0LmFwaS5vbkZpbHRlckNoYW5nZWQoKTtcbn0pO1xuXG4vLyBiZWZvcmUgc2VsZWN0IGhvb2tcbmFzeW5jIGZ1bmN0aW9uIGFmdGVyU2VsZWN0KCByZWNvcmQ6IGFueSApIHtcbiAgICBsb2coICdhZnRlclNlbGVjdCcsIHJlY29yZCApO1xuICAgIFxuICAgIGlmICggXy5pc0FycmF5KHJlY29yZC5oaXN0KSApXG4gICAgICAgIHJlY29yZC5oaXN0ICAgICA9IF8ubWFwKCByZWNvcmQuaGlzdCwgKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpdGVtLmtleSAgICAgICAgPSBpbmRleDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3dpdGNoKGl0ZW0udGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnaW4nOlxuICAgICAgICAgICAgICAgICAgICBpdGVtLmljb24gICAgICAgPSAnZmFzIGZhLXNpZ24taW4tYWx0JztcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jb2xvciAgICAgID0gJ2JsdWUtMTAnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdvdXQnOlxuICAgICAgICAgICAgICAgICAgICBpdGVtLmljb24gICAgICAgPSAnZmFzIGZhLXNpZ24tb3V0LWFsdCc7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY29sb3IgICAgICA9ICdncmVlbi04JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaW50ZXJuJzpcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pY29uICAgICAgID0gJ2ZhcyBmYS1sb2NrJztcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jb2xvciAgICAgID0gJ29yYW5nZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaWNvbiAgICAgICA9ICdmYXMgZmEtY2lyY2xlJztcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jb2xvciAgICAgID0gJ2JsdWUtMTAnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0gKTtcblxuICAgIGNvbnN0IGxpc3QgICAgICAgID0gW107XG4gICAgXy5mb3JFYWNoKCByZWNvcmQuaW5mb3MsICggZW50cnksIGtleSApID0+IHtcbiAgICAgICAgbGV0IGRlc2MgICAgPSBrZXksXG4gICAgICAgICAgICB0eXBlICAgID0gJ3N0cmluZyc7XG4gICAgICAgIFxuICAgICAgICBpZiAoIGNhcmluZm9zLnZhbHVlWyBrZXkgXSkge1xuICAgICAgICAgICAgZGVzYyAgICA9IGNhcmluZm9zLnZhbHVlWyBrZXkgXS5kZXNjO1xuICAgICAgICAgICAgdHlwZSAgICA9IGNhcmluZm9zLnZhbHVlWyBrZXkgXS50eXBlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2goIHR5cGUgKSB7XG4gICAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgICAgICBlbnRyeSAgICAgICAgPSBlbnRyeSA9PT0gJzAnID8gJ0phJyA6ICdOZWluJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGlzdC5wdXNoKCB7IGtleSwgZW50cnksIGRlc2MsIHR5cGUgfSApO1xuICAgIH0pO1xuICAgIFxuICAgIGNhckxpc3QudmFsdWUgICAgPSBsaXN0O1xuXG4gICAgc2hvd0Zvcm0udmFsdWUgICA9IHRydWU7XG4gICAgXG4gICAgcmV0dXJuIHJlY29yZDtcbn1cblxuLy8gYWZ0ZXIgc2F2ZVxuZnVuY3Rpb24gYWZ0ZXJTYXZlKCkge1xuICAgIHNob3dGb3JtLnZhbHVlICAgICAgPSBmYWxzZTtcbn1cblxuLy8gaGlkZSBkaWFsb2dcbmZ1bmN0aW9uIG9uRm9ybUhpZGUoKSB7XG4gICAgc2hvd0Zvcm0udmFsdWUgICA9IGZhbHNlO1xufVxuXG4vLyBoaWRlIGRpYWxvZ1xuZnVuY3Rpb24gb25NYWlsSGlkZSgpIHtcbiAgICBzaG93TWFpbC52YWx1ZSAgID0gZmFsc2U7XG59XG4gICAgICAgIFxuLy8gY3JlYXRlIHRhYmxlIG9mIGRldGFpbCBkZXNjcmlwdGlvbiBvZiBjYXJcbmZ1bmN0aW9uIGRlc2NyaXB0aW9uKCkge1xuICAgIGlmIChmb3JtLnZhbHVlLmRlc2NyaXB0aW9uKVxuICAgICAgICByZXR1cm4gXy5tYXAoIGZvcm0udmFsdWUuZGVzY3JpcHRpb24uc3BsaXQoJ3wnKSwgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0gICAgICAgID0gaXRlbS50cmltKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ICAgICAgID0gaXRlbS5pbmRleE9mKCcgJyksXG4gICAgICAgICAgICAgICAgICBrZXkgICAgICAgICA9IGl0ZW0uc3Vic3RyKCAwLCBpbmRleCApLFxuICAgICAgICAgICAgICAgICAgdGV4dCAgICAgICAgPSBpdGVtLnN1YnN0ciggaW5kZXggKyAxICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBbXTtcbn0gICAgICAgIFxuXG4vLyBncmlkIC0+IHJlYWR5XG5mdW5jdGlvbiBzdWJHcmlkUmVhZHkoIHsgZ3JpZE9wdCB9OiB7IGdyaWRPcHQ6IGFueSB9ICkge1xuICAgIC8vIFVzZXIgdmFsdWUgYmVjYXVzZSBvZiB2dWUgcmVmXG4gICAgZ3JpZE9wdC5jb250ZXh0ICAgID0ge1xuICAgICAgICBjYXRlZ29yaWVzOiAgICAgICAgICAgICBfLmtleUJ5KCBjYXRlZ29yaWVzLnZhbHVlLCAnbmFtZScgKSxcbiAgICAgICAgc3RhdGVMaXN0OiAgICAgICAgICAgICAgXy5rZXlCeSggc3RhdGVMaXN0LCAndmFsdWUnICksXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdGFrZUxlYWQoIGRhdGE6IGFueSApIHtcbiAgICAvLyBwdXQgdXNlciBpbnNpZGVcbiAgICBkYXRhLnNhbGVzICAgICAgPSB1c2VyLnZhbHVlO1xuICAgIFxuICAgIC8vIG5vdyBzYXZlIGl0XG4gICAgbGVhZFN0b3JlLnVwZGF0ZVJlY29yZCggZGF0YSApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmaWx0ZXJBdXRvc2VsbGVyICh2YWw6IHN0cmluZywgdXBkYXRlOiBzdHJpbmcgKSB7XG4gICAgbG9nKCAnRklMVEVSJywgdmFsICk7XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXIoKSB7XG4gICAgICAgIHVwZGF0ZSggKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBhdXRvRmlsdGVyLnZhbHVlICAgICA9IGF1dG9zZWxsZXJzLnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZWVkbGUgICAgPSB2YWwudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBhdXRvRmlsdGVyLnZhbHVlICAgICA9IF8uZmlsdGVyKCBhdXRvc2VsbGVycy52YWx1ZSwgdiA9PiB2LmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihuZWVkbGUpID4gLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nKCAnLT4nLCBhdXRvRmlsdGVyLnZhbHVlICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghYXV0b3NlbGxlcnMudmFsdWUpIHtcbiAgICAgICAgY29uc3QgcmVzcCAgICA9IGF3YWl0IGF1dG9zZWxsZXJTdG9yZS5nZXRTdG9yZSgpO1xuICAgICAgICBcbiAgICAgICAgYXV0b3NlbGxlcnMudmFsdWUgICA9IF8ubWFwKCByZXNwLmRhdGEsIGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogICAgICBpdGVtLmdmeixcbiAgICAgICAgICAgICAgICBsYWJlbDogICAgICBgJHtpdGVtLmdmen0gKCR7KGl0ZW0uZmFocnpldWcgJiYgaXRlbS5mYWhyemV1Zy5tb2RlbCkgfHwgJyd9KWBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBmaWx0ZXIoKTtcbiAgICB9IGVsc2VcbiAgICAgICAgZmlsdGVyKCk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckFib3J0KCkge1xuICAgIGxvZyggJ0FCT1JUJyApO1xufVxuXG5mdW5jdGlvbiB0YWtlT3ZlcigpIHtcbiAgICBsb2coICd0YWtlIG92ZXInICk7XG4gICAgXG4gICAgLy8gc2V0IHNhbGVzXG4gICAgZm9ybS52YWx1ZS5zdGF0ZSAgICAgICAgPSAnb3Blbic7XG4gICAgZm9ybS52YWx1ZS5zYWxlcyAgICAgICAgPSB1c2VyLnZhbHVlO1xuICAgIGZvcm0udmFsdWUuaGlzdC5wdXNoKHtcbiAgICAgICAgdHlwZTogICAgICAgJ3Rha2UnLFxuICAgICAgICB0aW1lc3RhbXA6ICAobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgdGl0bGU6ICAgICAgJ0FuZ2Vub21tZW4nLFxuICAgICAgICBpbmZvOiAgICAgICBgWnVnZW9yZG5ldCAke3VzZXIudmFsdWUuZmlyc3ROYW1lfSAke3VzZXIudmFsdWUubGFzdE5hbWV9YFxuICAgIH0pO1xuICAgIFxuICAgIC8vIHNhdmUgaXRcbiAgICBkb1NhdmUoKTtcbiAgICBcbiAgICAvLyBjbG9zZSBkaWFsb2dcbiAgICBzaG93Rm9ybS52YWx1ZSAgICAgICAgICA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc1NhbGVzKCkge1xuICAgIHJldHVybiAhIV8uZ2V0KCBmb3JtLnZhbHVlLCAnc2FsZXMuX2lkJyApO1xufVxuXG4vLyBnZXQgYWxsIGNvbGxlY3Rpb25zXG5Qcm9taXNlXG4gICAgLmFsbChbXG4gICAgICAgIHVzZXJTdG9yZS5nZXRTdG9yZSgpLFxuICAgICAgICBjYXJpbmZvU3RvcmUuZ2V0U3RvcmUoKSxcbiAgICAgICAgY2F0ZWdvcnlTdG9yZS5nZXRTdG9yZSgpLFxuICAgICAgICBjb21wYW55U3RvcmUuZ2V0U3RvcmUoKSxcbiAgICAgICAgcG9ydGFsU3RvcmUuZ2V0U3RvcmUoKSxcbiAgICBdKVxuICAgIC50aGVuKCBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgYXdhaXQgbGVhZFN0b3JlLnJlZ2lzdGVyQWN0aW9uKCB7IGFjdGlvbjogJ2FmdGVyU2VsZWN0JywgIHRhcmdldDogJ0xlYWQnLCBmdW5jOiBhZnRlclNlbGVjdCB9ICk7XG4gICAgICAgIGF3YWl0IGxlYWRTdG9yZS5yZWdpc3RlckFjdGlvbiggeyBhY3Rpb246ICdhZnRlclNhdmUnLCAgICB0YXJnZXQ6ICdMZWFkJywgZnVuYzogYWZ0ZXJTYXZlIH0gKTtcblxuICAgICAgICAvLyBjYXRlZ29yeSBsaXN0IGZvciBsZWZ0IHNpZGUgICAgICAgICAgICAgICAgXG4gICAgICAgIHBvcnRhbExpc3QudmFsdWUgICA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogICAgICAnJyxcbiAgICAgICAgICAgICAgICBsYWJlbDogICAgICB0KCdtZXNzYWdlcy5MYWJlbEFsbCcpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uXy5tYXAoIHBvcnRhbHMudmFsdWUsIGl0ZW0gPT4geyBcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogICAgICBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAgICAgIGl0ZW0ubmFtZSB8fCAnJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICBdO1xuICAgICAgICBcbiAgICAgICAgYXV0b0ZpbHRlci52YWx1ZSAgICA9IGFsbGF1dG8udmFsdWU7XG4gICAgICAgIGNhcmluZm9zLnZhbHVlICAgICAgPSBfLmtleUJ5KCBjYXJpbmZvcy52YWx1ZSwgJ2tleScgKTtcbiAgICAgICAgXG4gICAgICAgIHNob3dHcmlkLnZhbHVlICAgICAgPSB0cnVlO1xuICAgIH0pXG4gICAgLmNhdGNoKCBlcnIgPT4ge1xuICAgICAgICBsb2coICdFUlJPUiBsb2FkaW5nJywgZXJyICk7XG4gICAgfSk7XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0IFwiLi4vX3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5kZXRhaWxXaW5kb3cge1xuICAgIHdpZHRoOiAgICAgY2FsYyggMTAwdncgLSAxMzBweCApO1xuICAgIG1heC13aWR0aDogICAgIGNhbGMoIDEwMHZ3IC0gMTMwcHggKSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogICAgY2FsYyggMTAwdmggLSAxMDBweCApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uZGV0YWlsIHtcbiAgICB3aWR0aDogICAgICAgICBjYWxjKCAxMDB2dyAtIDMwMHB4ICk7XG4gICAgbWF4LXdpZHRoOiAgICAgMTkyMHB4O1xufVxuXG4uYmFjay1ncmV5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xufVxuXG4ubGlzdCB7XG4gICAgaGVpZ2h0OiBjYWxjKCAxMDB2aCAtICN7JGhlYWRlcl9oZWlnaHR9IC0gMjEwcHggKTtcbn1cblxuLnR5cGUtYm9vbGVhbiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi50eXBlLW51bWJlciB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi50eXBlLWRlY2ltYWwge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbImRhdGUiLCJtb2QiLCJsYW5nIiwiZGF0ZTIiLCJnbG9iYWxWaWV3IiwiR2xvYmFsVmlldyIsIlN0YXR1cyIsInNlbmQiLCJTZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsTUFBTSxTQUFTO0FBQUEsRUFDYjtBQUFBLEVBQUs7QUFBQSxFQUFHO0FBQUEsRUFBSTtBQUFBLEVBQUs7QUFBQSxFQUFLO0FBQUEsRUFBSztBQUFBLEVBQUs7QUFBQSxFQUFLO0FBQUEsRUFBTTtBQUFBLEVBQU07QUFBQSxFQUNqRDtBQUFBLEVBQU07QUFBQSxFQUFNO0FBQUEsRUFBTTtBQUFBLEVBQU07QUFBQSxFQUFNO0FBQUEsRUFBTTtBQUFBLEVBQU07QUFBQSxFQUFNO0FBQ2xEO0FBd0JBLFNBQVMsa0JBQW1CLElBQUk7QUFDOUIsU0FBTyxXQUFXLEVBQUUsTUFBTTtBQUM1QjtBQUtPLFNBQVMsbUJBQW9CLElBQUksSUFBSTtBQUMxQyxNQUFJLE1BQU07QUFBRyxXQUFPO0FBQ3BCLE1BQUksTUFBTTtBQUFJLFdBQU87QUFDckIsTUFBSSxrQkFBa0IsRUFBRTtBQUFHLFdBQU87QUFDbEMsU0FBTztBQUNUO0FBU0EsU0FBUyxXQUFZLElBQUk7QUFDdkIsUUFBTSxLQUFLLE9BQU87QUFDbEIsTUFDRSxLQUFLLE9BQVEsSUFDYixJQUNBLE1BQ0EsTUFDQSxHQUNBO0FBRUYsTUFBSSxLQUFLLE1BQU0sTUFBTSxPQUFRLEtBQUssSUFBSztBQUFFLFVBQU0sSUFBSSxN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LFNBQUE7QUFBQSxNQUNELFlBQUEsU0FBQTtBQUFBLElBQ0QsQ0FBQSxFQUFBLEtBQUEsWUFBQTtBQUlyQixZQUFBLFVBQUEsZUFBQSxFQUFBLFFBQUEsZUFBQSxRQUFBLFFBQUEsTUFBQSxZQUFBLENBQUE7QUFDQSxZQUFBLFVBQUEsZUFBQSxFQUFBLFFBQUEsYUFBQSxRQUFBLFFBQUEsTUFBQSxVQUFBLENBQUE7QUFHQSxpQkFBQSxRQUFBO0FBQUEsUUFBcUI7QUFBQSxVQUNqQixPQUFBO0FBQUEsVUFDZ0IsT0FBQSxFQUFBLG1CQUFBO0FBQUEsUUFDcUI7QUFBQSxRQUNyQyxHQUFBLEVBQUEsSUFBQSxRQUFBLE9BQUEsQ0FBQSxTQUFBO0FBRUksaUJBQUE7QUFBQSxZQUFPLE9BQUEsS0FBQTtBQUFBLFlBQ2MsT0FBQSxLQUFBLFFBQUE7QUFBQSxVQUNRO0FBQUEsUUFDN0IsQ0FBQTtBQUFBLE1BQ0g7QUFHTCxpQkFBQSxRQUFBLFFBQUE7QUFDQSxlQUFBLFFBQUEsRUFBQSxNQUFBLFNBQUEsT0FBQSxLQUFBO0FBRUEsZUFBQSxRQUFBO0FBQUEsSUFBc0IsQ0FBQSxFQUFBLE1BQUEsQ0FBQSxRQUFBO0FBR3RCLFVBQUEsaUJBQUEsR0FBQTtBQUFBLElBQTBCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
