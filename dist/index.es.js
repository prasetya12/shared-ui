import * as _t from "react";
import ze, { createContext as Bt, useContext as Wt, useCallback as Ce, useState as de, useRef as Le, useEffect as se } from "react";
import { Globe as Dt } from "lucide-react";
var ve = { exports: {} }, pe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function Vt() {
  if (Je) return pe;
  Je = 1;
  var i = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(s, o, n) {
    var a = null;
    if (n !== void 0 && (a = "" + n), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      n = {};
      for (var l in o)
        l !== "key" && (n[l] = o[l]);
    } else n = o;
    return o = n.ref, {
      $$typeof: i,
      type: s,
      key: a,
      ref: o !== void 0 ? o : null,
      props: n
    };
  }
  return pe.Fragment = e, pe.jsx = t, pe.jsxs = t, pe;
}
var ge = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Ut() {
  return qe || (qe = 1, process.env.NODE_ENV !== "production" && function() {
    function i(f) {
      if (f == null) return null;
      if (typeof f == "function")
        return f.$$typeof === B ? null : f.displayName || f.name || null;
      if (typeof f == "string") return f;
      switch (f) {
        case x:
          return "Fragment";
        case M:
          return "Profiler";
        case j:
          return "StrictMode";
        case y:
          return "Suspense";
        case R:
          return "SuspenseList";
        case T:
          return "Activity";
      }
      if (typeof f == "object")
        switch (typeof f.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), f.$$typeof) {
          case g:
            return "Portal";
          case z:
            return (f.displayName || "Context") + ".Provider";
          case k:
            return (f._context.displayName || "Context") + ".Consumer";
          case $:
            var C = f.render;
            return f = f.displayName, f || (f = C.displayName || C.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
          case P:
            return C = f.displayName || null, C !== null ? C : i(f.type) || "Memo";
          case m:
            C = f._payload, f = f._init;
            try {
              return i(f(C));
            } catch {
            }
        }
      return null;
    }
    function e(f) {
      return "" + f;
    }
    function t(f) {
      try {
        e(f);
        var C = !1;
      } catch {
        C = !0;
      }
      if (C) {
        C = console;
        var A = C.error, O = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return A.call(
          C,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), e(f);
      }
    }
    function s(f) {
      if (f === x) return "<>";
      if (typeof f == "object" && f !== null && f.$$typeof === m)
        return "<...>";
      try {
        var C = i(f);
        return C ? "<" + C + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var f = E.A;
      return f === null ? null : f.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function a(f) {
      if (W.call(f, "key")) {
        var C = Object.getOwnPropertyDescriptor(f, "key").get;
        if (C && C.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }
    function l(f, C) {
      function A() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          C
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: A,
        configurable: !0
      });
    }
    function c() {
      var f = i(this.type);
      return K[f] || (K[f] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), f = this.props.ref, f !== void 0 ? f : null;
    }
    function u(f, C, A, O, F, q, oe, _) {
      return A = q.ref, f = {
        $$typeof: v,
        type: f,
        key: C,
        props: q,
        _owner: F
      }, (A !== void 0 ? A : null) !== null ? Object.defineProperty(f, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(f, "ref", { enumerable: !1, value: null }), f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(f, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(f, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.defineProperty(f, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: _
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    }
    function d(f, C, A, O, F, q, oe, _) {
      var U = C.children;
      if (U !== void 0)
        if (O)
          if (re(U)) {
            for (O = 0; O < U.length; O++)
              p(U[O]);
            Object.freeze && Object.freeze(U);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(U);
      if (W.call(C, "key")) {
        U = i(f);
        var X = Object.keys(C).filter(function(fe) {
          return fe !== "key";
        });
        O = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", V[U + O] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          U,
          X,
          U
        ), V[U + O] = !0);
      }
      if (U = null, A !== void 0 && (t(A), U = "" + A), a(C) && (t(C.key), U = "" + C.key), "key" in C) {
        A = {};
        for (var ee in C)
          ee !== "key" && (A[ee] = C[ee]);
      } else A = C;
      return U && l(
        A,
        typeof f == "function" ? f.displayName || f.name || "Unknown" : f
      ), u(
        f,
        U,
        q,
        F,
        o(),
        A,
        oe,
        _
      );
    }
    function p(f) {
      typeof f == "object" && f !== null && f.$$typeof === v && f._store && (f._store.validated = 1);
    }
    var h = ze, v = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), z = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), E = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, re = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      "react-stack-bottom-frame": function(f) {
        return f();
      }
    };
    var D, K = {}, J = h["react-stack-bottom-frame"].bind(
      h,
      n
    )(), S = H(s(n)), V = {};
    ge.Fragment = x, ge.jsx = function(f, C, A, O, F) {
      var q = 1e4 > E.recentlyCreatedOwnerStacks++;
      return d(
        f,
        C,
        A,
        !1,
        O,
        F,
        q ? Error("react-stack-top-frame") : J,
        q ? H(s(f)) : S
      );
    }, ge.jsxs = function(f, C, A, O, F) {
      var q = 1e4 > E.recentlyCreatedOwnerStacks++;
      return d(
        f,
        C,
        A,
        !0,
        O,
        F,
        q ? Error("react-stack-top-frame") : J,
        q ? H(s(f)) : S
      );
    };
  }()), ge;
}
var Xe;
function Gt() {
  return Xe || (Xe = 1, process.env.NODE_ENV === "production" ? ve.exports = Vt() : ve.exports = Ut()), ve.exports;
}
var r = Gt();
function bt(i) {
  var e, t, s = "";
  if (typeof i == "string" || typeof i == "number") s += i;
  else if (typeof i == "object") if (Array.isArray(i)) {
    var o = i.length;
    for (e = 0; e < o; e++) i[e] && (t = bt(i[e])) && (s && (s += " "), s += t);
  } else for (t in i) i[t] && (s && (s += " "), s += t);
  return s;
}
function wt() {
  for (var i, e, t = 0, s = "", o = arguments.length; t < o; t++) (i = arguments[t]) && (e = bt(i)) && (s && (s += " "), s += e);
  return s;
}
const Ze = (i) => typeof i == "boolean" ? `${i}` : i === 0 ? "0" : i, Qe = wt, Ht = (i, e) => (t) => {
  var s;
  if ((e == null ? void 0 : e.variants) == null) return Qe(i, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: o, defaultVariants: n } = e, a = Object.keys(o).map((u) => {
    const d = t == null ? void 0 : t[u], p = n == null ? void 0 : n[u];
    if (d === null) return null;
    const h = Ze(d) || Ze(p);
    return o[u][h];
  }), l = t && Object.entries(t).reduce((u, d) => {
    let [p, h] = d;
    return h === void 0 || (u[p] = h), u;
  }, {}), c = e == null || (s = e.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((u, d) => {
    let { class: p, className: h, ...v } = d;
    return Object.entries(v).every((g) => {
      let [x, j] = g;
      return Array.isArray(j) ? j.includes({
        ...n,
        ...l
      }[x]) : {
        ...n,
        ...l
      }[x] === j;
    }) ? [
      ...u,
      p,
      h
    ] : u;
  }, []);
  return Qe(i, a, c, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, Ge = "-", Kt = (i) => {
  const e = Jt(i), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: s
  } = i;
  return {
    getClassGroupId: (a) => {
      const l = a.split(Ge);
      return l[0] === "" && l.length !== 1 && l.shift(), vt(l, e) || Yt(a);
    },
    getConflictingClassGroupIds: (a, l) => {
      const c = t[a] || [];
      return l && s[a] ? [...c, ...s[a]] : c;
    }
  };
}, vt = (i, e) => {
  var a;
  if (i.length === 0)
    return e.classGroupId;
  const t = i[0], s = e.nextPart.get(t), o = s ? vt(i.slice(1), s) : void 0;
  if (o)
    return o;
  if (e.validators.length === 0)
    return;
  const n = i.join(Ge);
  return (a = e.validators.find(({
    validator: l
  }) => l(n))) == null ? void 0 : a.classGroupId;
}, et = /^\[(.+)\]$/, Yt = (i) => {
  if (et.test(i)) {
    const e = et.exec(i)[1], t = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, Jt = (i) => {
  const {
    theme: e,
    classGroups: t
  } = i, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in t)
    Ie(t[o], s, o, e);
  return s;
}, Ie = (i, e, t, s) => {
  i.forEach((o) => {
    if (typeof o == "string") {
      const n = o === "" ? e : tt(e, o);
      n.classGroupId = t;
      return;
    }
    if (typeof o == "function") {
      if (qt(o)) {
        Ie(o(s), e, t, s);
        return;
      }
      e.validators.push({
        validator: o,
        classGroupId: t
      });
      return;
    }
    Object.entries(o).forEach(([n, a]) => {
      Ie(a, tt(e, n), t, s);
    });
  });
}, tt = (i, e) => {
  let t = i;
  return e.split(Ge).forEach((s) => {
    t.nextPart.has(s) || t.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(s);
  }), t;
}, qt = (i) => i.isThemeGetter, Xt = (i) => {
  if (i < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const o = (n, a) => {
    t.set(n, a), e++, e > i && (e = 0, s = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(n) {
      let a = t.get(n);
      if (a !== void 0)
        return a;
      if ((a = s.get(n)) !== void 0)
        return o(n, a), a;
    },
    set(n, a) {
      t.has(n) ? t.set(n, a) : o(n, a);
    }
  };
}, Fe = "!", _e = ":", Zt = _e.length, Qt = (i) => {
  const {
    prefix: e,
    experimentalParseClassName: t
  } = i;
  let s = (o) => {
    const n = [];
    let a = 0, l = 0, c = 0, u;
    for (let g = 0; g < o.length; g++) {
      let x = o[g];
      if (a === 0 && l === 0) {
        if (x === _e) {
          n.push(o.slice(c, g)), c = g + Zt;
          continue;
        }
        if (x === "/") {
          u = g;
          continue;
        }
      }
      x === "[" ? a++ : x === "]" ? a-- : x === "(" ? l++ : x === ")" && l--;
    }
    const d = n.length === 0 ? o : o.substring(c), p = es(d), h = p !== d, v = u && u > c ? u - c : void 0;
    return {
      modifiers: n,
      hasImportantModifier: h,
      baseClassName: p,
      maybePostfixModifierPosition: v
    };
  };
  if (e) {
    const o = e + _e, n = s;
    s = (a) => a.startsWith(o) ? n(a.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (t) {
    const o = s;
    s = (n) => t({
      className: n,
      parseClassName: o
    });
  }
  return s;
}, es = (i) => i.endsWith(Fe) ? i.substring(0, i.length - 1) : i.startsWith(Fe) ? i.substring(1) : i, ts = (i) => {
  const e = Object.fromEntries(i.orderSensitiveModifiers.map((s) => [s, !0]));
  return (s) => {
    if (s.length <= 1)
      return s;
    const o = [];
    let n = [];
    return s.forEach((a) => {
      a[0] === "[" || e[a] ? (o.push(...n.sort(), a), n = []) : n.push(a);
    }), o.push(...n.sort()), o;
  };
}, ss = (i) => ({
  cache: Xt(i.cacheSize),
  parseClassName: Qt(i),
  sortModifiers: ts(i),
  ...Kt(i)
}), rs = /\s+/, is = (i, e) => {
  const {
    parseClassName: t,
    getClassGroupId: s,
    getConflictingClassGroupIds: o,
    sortModifiers: n
  } = e, a = [], l = i.trim().split(rs);
  let c = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const d = l[u], {
      isExternal: p,
      modifiers: h,
      hasImportantModifier: v,
      baseClassName: g,
      maybePostfixModifierPosition: x
    } = t(d);
    if (p) {
      c = d + (c.length > 0 ? " " + c : c);
      continue;
    }
    let j = !!x, M = s(j ? g.substring(0, x) : g);
    if (!M) {
      if (!j) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (M = s(g), !M) {
        c = d + (c.length > 0 ? " " + c : c);
        continue;
      }
      j = !1;
    }
    const k = n(h).join(":"), z = v ? k + Fe : k, $ = z + M;
    if (a.includes($))
      continue;
    a.push($);
    const y = o(M, j);
    for (let R = 0; R < y.length; ++R) {
      const P = y[R];
      a.push(z + P);
    }
    c = d + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function ns() {
  let i = 0, e, t, s = "";
  for (; i < arguments.length; )
    (e = arguments[i++]) && (t = jt(e)) && (s && (s += " "), s += t);
  return s;
}
const jt = (i) => {
  if (typeof i == "string")
    return i;
  let e, t = "";
  for (let s = 0; s < i.length; s++)
    i[s] && (e = jt(i[s])) && (t && (t += " "), t += e);
  return t;
};
function os(i, ...e) {
  let t, s, o, n = a;
  function a(c) {
    const u = e.reduce((d, p) => p(d), i());
    return t = ss(u), s = t.cache.get, o = t.cache.set, n = l, l(c);
  }
  function l(c) {
    const u = s(c);
    if (u)
      return u;
    const d = is(c, t);
    return o(c, d), d;
  }
  return function() {
    return n(ns.apply(null, arguments));
  };
}
const G = (i) => {
  const e = (t) => t[i] || [];
  return e.isThemeGetter = !0, e;
}, kt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, St = /^\((?:(\w[\w-]*):)?(.+)\)$/i, as = /^\d+\/\d+$/, ls = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, cs = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ds = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, us = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, hs = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ae = (i) => as.test(i), N = (i) => !!i && !Number.isNaN(Number(i)), te = (i) => !!i && Number.isInteger(Number(i)), Ae = (i) => i.endsWith("%") && N(i.slice(0, -1)), Q = (i) => ls.test(i), fs = () => !0, ps = (i) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  cs.test(i) && !ds.test(i)
), Ct = () => !1, gs = (i) => us.test(i), ms = (i) => hs.test(i), xs = (i) => !b(i) && !w(i), ys = (i) => ue(i, Ot, Ct), b = (i) => kt.test(i), ie = (i) => ue(i, Rt, ps), Me = (i) => ue(i, ks, N), st = (i) => ue(i, Lt, Ct), bs = (i) => ue(i, Nt, ms), je = (i) => ue(i, Pt, gs), w = (i) => St.test(i), me = (i) => he(i, Rt), ws = (i) => he(i, Ss), rt = (i) => he(i, Lt), vs = (i) => he(i, Ot), js = (i) => he(i, Nt), ke = (i) => he(i, Pt, !0), ue = (i, e, t) => {
  const s = kt.exec(i);
  return s ? s[1] ? e(s[1]) : t(s[2]) : !1;
}, he = (i, e, t = !1) => {
  const s = St.exec(i);
  return s ? s[1] ? e(s[1]) : t : !1;
}, Lt = (i) => i === "position" || i === "percentage", Nt = (i) => i === "image" || i === "url", Ot = (i) => i === "length" || i === "size" || i === "bg-size", Rt = (i) => i === "length", ks = (i) => i === "number", Ss = (i) => i === "family-name", Pt = (i) => i === "shadow", Cs = () => {
  const i = G("color"), e = G("font"), t = G("text"), s = G("font-weight"), o = G("tracking"), n = G("leading"), a = G("breakpoint"), l = G("container"), c = G("spacing"), u = G("radius"), d = G("shadow"), p = G("inset-shadow"), h = G("text-shadow"), v = G("drop-shadow"), g = G("blur"), x = G("perspective"), j = G("aspect"), M = G("ease"), k = G("animate"), z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], $ = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], y = () => [...$(), w, b], R = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], m = () => [w, b, c], T = () => [ae, "full", "auto", ...m()], B = () => [te, "none", "subgrid", w, b], E = () => ["auto", {
    span: ["full", te, w, b]
  }, te, w, b], W = () => [te, "auto", w, b], re = () => ["auto", "min", "max", "fr", w, b], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], D = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], K = () => ["auto", ...m()], J = () => [ae, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...m()], S = () => [i, w, b], V = () => [...$(), rt, st, {
    position: [w, b]
  }], f = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], C = () => ["auto", "cover", "contain", vs, ys, {
    size: [w, b]
  }], A = () => [Ae, me, ie], O = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    w,
    b
  ], F = () => ["", N, me, ie], q = () => ["solid", "dashed", "dotted", "double"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], _ = () => [N, Ae, rt, st], U = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    g,
    w,
    b
  ], X = () => ["none", N, w, b], ee = () => ["none", N, w, b], fe = () => [N, w, b], we = () => [ae, "full", ...m()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Q],
      breakpoint: [Q],
      color: [fs],
      container: [Q],
      "drop-shadow": [Q],
      ease: ["in", "out", "in-out"],
      font: [xs],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Q],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Q],
      shadow: [Q],
      spacing: ["px", N],
      text: [Q],
      "text-shadow": [Q],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", ae, b, w, j]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [N, b, w, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": z()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": z()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: y()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: R()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": R()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": R()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: P()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": P()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: T()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": T()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": T()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: T()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: T()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: T()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: T()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: T()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: T()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [te, "auto", w, b]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ae, "full", "auto", l, ...m()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [N, ae, "auto", "initial", "none", b]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", N, w, b]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", N, w, b]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [te, "first", "last", "none", w, b]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": B()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: E()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": B()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: E()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": re()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": re()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: m()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": m()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": m()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...H(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...D(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...D()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...H()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...D(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...D(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": H()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...D(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...D()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: m()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: m()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: m()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: m()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: m()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: m()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: m()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: m()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: m()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: K()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: K()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: K()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: K()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: K()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: K()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: K()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: K()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: K()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": m()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": m()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: J()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...J()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          l,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...J()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          l,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...J()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...J()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...J()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...J()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, me, ie]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [s, w, Me]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ae, b]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ws, b, e]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, w, b]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [N, "none", w, Me]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          n,
          ...m()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", w, b]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", w, b]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: S()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: S()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [N, "from-font", "auto", w, ie]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: S()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [N, "auto", w, b]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: m()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", w, b]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", w, b]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: V()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: f()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: C()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, te, w, b],
          radial: ["", w, b],
          conic: [te, w, b]
        }, js, bs]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: S()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: A()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: A()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: A()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: S()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: S()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: S()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: O()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": O()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": O()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": O()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": O()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": O()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": O()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": O()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": O()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": O()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": O()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": O()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": O()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": O()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": O()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: F()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": F()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": F()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": F()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": F()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": F()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": F()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": F()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": F()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": F()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": F()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...q(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...q(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: S()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": S()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": S()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": S()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": S()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": S()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": S()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": S()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": S()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: S()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...q(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [N, w, b]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", N, me, ie]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: S()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          d,
          ke,
          je
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: S()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", p, ke, je]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": S()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: F()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: S()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [N, ie]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": S()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": F()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": S()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, ke, je]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": S()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [N, w, b]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...oe(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": oe()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [N]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": _()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": _()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": S()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": S()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": _()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": _()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": S()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": S()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": _()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": _()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": S()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": S()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": _()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": _()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": S()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": S()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": _()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": _()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": S()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": S()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": _()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": _()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": S()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": S()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": _()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": _()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": S()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": S()
      }],
      "mask-image-radial": [{
        "mask-radial": [w, b]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": _()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": _()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": S()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": S()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": $()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [N]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": _()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": _()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": S()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": S()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: V()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: f()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: C()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", w, b]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          w,
          b
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: U()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [N, w, b]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [N, w, b]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          v,
          ke,
          je
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": S()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", N, w, b]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [N, w, b]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", N, w, b]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [N, w, b]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", N, w, b]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          w,
          b
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": U()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [N, w, b]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [N, w, b]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", N, w, b]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [N, w, b]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", N, w, b]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [N, w, b]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [N, w, b]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", N, w, b]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": m()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": m()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": m()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", w, b]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [N, "initial", w, b]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", M, w, b]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [N, w, b]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", k, w, b]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [x, w, b]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": y()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: X()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": X()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": X()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": X()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ee()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ee()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ee()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ee()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: fe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": fe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": fe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [w, b, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: y()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: we()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": we()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": we()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": we()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: S()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: S()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", w, b]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": m()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": m()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": m()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": m()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": m()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": m()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": m()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": m()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": m()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": m()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": m()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": m()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": m()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": m()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": m()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": m()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": m()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": m()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", w, b]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...S()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [N, me, ie, Me]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...S()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Ls = /* @__PURE__ */ os(Cs);
function Ns(...i) {
  return Ls(wt(i));
}
function Ne(i, e) {
  if (i) {
    const t = i.split(":");
    if (t.length >= 3 && t[0] && t[2] !== "443")
      return i;
  }
  return e;
}
const Os = Ht(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-secondary/50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "bg-transparent border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary/50",
        link: "underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-[#8220ff] to-[#a020f0] text-white hover:shadow-xl hover:scale-105 transition-all duration-300 border border-purple-300"
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "w-10 h-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Be = _t.forwardRef(
  ({ className: i, variant: e, size: t, asChild: s = !1, ...o }, n) => /* @__PURE__ */ r.jsx("button", { className: Ns(Os({ variant: e, size: t, className: i })), ref: n, ...o })
);
Be.displayName = "Button";
const I = ({ href: i, children: e, className: t = "", target: s = "_self", rel: o = "noopener noreferrer", onClick: n }) => {
  const a = (l) => {
    s !== "_blank" && (l.preventDefault(), window.location.href = i), n && n(l);
  };
  return /* @__PURE__ */ r.jsx(
    "a",
    {
      href: i,
      className: t,
      target: s,
      rel: o,
      onClick: a,
      "aria-label": typeof e == "string" ? e : void 0,
      children: e
    }
  );
}, Rs = (i, e, t, s) => {
  var n, a, l, c;
  const o = [t, {
    code: e,
    ...s || {}
  }];
  if ((a = (n = i == null ? void 0 : i.services) == null ? void 0 : n.logger) != null && a.forward)
    return i.services.logger.forward(o, "warn", "react-i18next::", !0);
  ne(o[0]) && (o[0] = `react-i18next:: ${o[0]}`), (c = (l = i == null ? void 0 : i.services) == null ? void 0 : l.logger) != null && c.warn ? i.services.logger.warn(...o) : console != null && console.warn && console.warn(...o);
}, it = {}, We = (i, e, t, s) => {
  ne(t) && it[t] || (ne(t) && (it[t] = /* @__PURE__ */ new Date()), Rs(i, e, t, s));
}, $t = (i, e) => () => {
  if (i.isInitialized)
    e();
  else {
    const t = () => {
      setTimeout(() => {
        i.off("initialized", t);
      }, 0), e();
    };
    i.on("initialized", t);
  }
}, De = (i, e, t) => {
  i.loadNamespaces(e, $t(i, t));
}, nt = (i, e, t, s) => {
  if (ne(t) && (t = [t]), i.options.preload && i.options.preload.indexOf(e) > -1) return De(i, t, s);
  t.forEach((o) => {
    i.options.ns.indexOf(o) < 0 && i.options.ns.push(o);
  }), i.loadLanguages(e, $t(i, s));
}, Ps = (i, e, t = {}) => !e.languages || !e.languages.length ? (We(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: e.languages
}), !0) : e.hasLoadedNamespace(i, {
  lng: t.lng,
  precheck: (s, o) => {
    var n;
    if (((n = t.bindI18n) == null ? void 0 : n.indexOf("languageChanging")) > -1 && s.services.backendConnector.backend && s.isLanguageChangingTo && !o(s.isLanguageChangingTo, i)) return !1;
  }
}), ne = (i) => typeof i == "string", $s = (i) => typeof i == "object" && i !== null, Es = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, As = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, Ms = (i) => As[i], Ts = (i) => i.replace(Es, Ms);
let Ve = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Ts
};
const zs = (i = {}) => {
  Ve = {
    ...Ve,
    ...i
  };
}, Is = () => Ve;
let Et;
const Fs = (i) => {
  Et = i;
}, _s = () => Et, Bs = {
  type: "3rdParty",
  init(i) {
    zs(i.options.react), Fs(i);
  }
}, Ws = Bt();
class Ds {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((t) => {
      this.usedNamespaces[t] || (this.usedNamespaces[t] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const Vs = (i, e) => {
  const t = Le();
  return se(() => {
    t.current = i;
  }, [i, e]), t.current;
}, At = (i, e, t, s) => i.getFixedT(e, t, s), Us = (i, e, t, s) => Ce(At(i, e, t, s), [i, e, t, s]), Mt = (i, e = {}) => {
  var $, y, R, P;
  const {
    i18n: t
  } = e, {
    i18n: s,
    defaultNS: o
  } = Wt(Ws) || {}, n = t || s || _s();
  if (n && !n.reportNamespaces && (n.reportNamespaces = new Ds()), !n) {
    We(n, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const m = (B, E) => ne(E) ? E : $s(E) && ne(E.defaultValue) ? E.defaultValue : Array.isArray(B) ? B[B.length - 1] : B, T = [m, {}, !1];
    return T.t = m, T.i18n = {}, T.ready = !1, T;
  }
  ($ = n.options.react) != null && $.wait && We(n, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const a = {
    ...Is(),
    ...n.options.react,
    ...e
  }, {
    useSuspense: l,
    keyPrefix: c
  } = a;
  let u = o || ((y = n.options) == null ? void 0 : y.defaultNS);
  u = ne(u) ? [u] : u || ["translation"], (P = (R = n.reportNamespaces).addUsedNamespaces) == null || P.call(R, u);
  const d = (n.isInitialized || n.initializedStoreOnce) && u.every((m) => Ps(m, n, a)), p = Us(n, e.lng || null, a.nsMode === "fallback" ? u : u[0], c), h = () => p, v = () => At(n, e.lng || null, a.nsMode === "fallback" ? u : u[0], c), [g, x] = de(h);
  let j = u.join();
  e.lng && (j = `${e.lng}${j}`);
  const M = Vs(j), k = Le(!0);
  se(() => {
    const {
      bindI18n: m,
      bindI18nStore: T
    } = a;
    k.current = !0, !d && !l && (e.lng ? nt(n, e.lng, u, () => {
      k.current && x(v);
    }) : De(n, u, () => {
      k.current && x(v);
    })), d && M && M !== j && k.current && x(v);
    const B = () => {
      k.current && x(v);
    };
    return m && (n == null || n.on(m, B)), T && (n == null || n.store.on(T, B)), () => {
      k.current = !1, n && (m == null || m.split(" ").forEach((E) => n.off(E, B))), T && n && T.split(" ").forEach((E) => n.store.off(E, B));
    };
  }, [n, j]), se(() => {
    k.current && d && x(h);
  }, [n, c, d]);
  const z = [g, n, d];
  if (z.t = g, z.i18n = n, z.ready = d, d || !d && !l) return z;
  throw new Promise((m) => {
    e.lng ? nt(n, e.lng, u, () => m()) : De(n, u, () => m());
  });
}, L = (i) => typeof i == "string", xe = () => {
  let i, e;
  const t = new Promise((s, o) => {
    i = s, e = o;
  });
  return t.resolve = i, t.reject = e, t;
}, ot = (i) => i == null ? "" : "" + i, Gs = (i, e, t) => {
  i.forEach((s) => {
    e[s] && (t[s] = e[s]);
  });
}, Hs = /###/g, at = (i) => i && i.indexOf("###") > -1 ? i.replace(Hs, ".") : i, lt = (i) => !i || L(i), ye = (i, e, t) => {
  const s = L(e) ? e.split(".") : e;
  let o = 0;
  for (; o < s.length - 1; ) {
    if (lt(i)) return {};
    const n = at(s[o]);
    !i[n] && t && (i[n] = new t()), Object.prototype.hasOwnProperty.call(i, n) ? i = i[n] : i = {}, ++o;
  }
  return lt(i) ? {} : {
    obj: i,
    k: at(s[o])
  };
}, ct = (i, e, t) => {
  const {
    obj: s,
    k: o
  } = ye(i, e, Object);
  if (s !== void 0 || e.length === 1) {
    s[o] = t;
    return;
  }
  let n = e[e.length - 1], a = e.slice(0, e.length - 1), l = ye(i, a, Object);
  for (; l.obj === void 0 && a.length; )
    n = `${a[a.length - 1]}.${n}`, a = a.slice(0, a.length - 1), l = ye(i, a, Object), l != null && l.obj && typeof l.obj[`${l.k}.${n}`] < "u" && (l.obj = void 0);
  l.obj[`${l.k}.${n}`] = t;
}, Ks = (i, e, t, s) => {
  const {
    obj: o,
    k: n
  } = ye(i, e, Object);
  o[n] = o[n] || [], o[n].push(t);
}, Oe = (i, e) => {
  const {
    obj: t,
    k: s
  } = ye(i, e);
  if (t && Object.prototype.hasOwnProperty.call(t, s))
    return t[s];
}, Ys = (i, e, t) => {
  const s = Oe(i, t);
  return s !== void 0 ? s : Oe(e, t);
}, Tt = (i, e, t) => {
  for (const s in e)
    s !== "__proto__" && s !== "constructor" && (s in i ? L(i[s]) || i[s] instanceof String || L(e[s]) || e[s] instanceof String ? t && (i[s] = e[s]) : Tt(i[s], e[s], t) : i[s] = e[s]);
  return i;
}, le = (i) => i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Js = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const qs = (i) => L(i) ? i.replace(/[&<>"'\/]/g, (e) => Js[e]) : i;
class Xs {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const s = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, s), this.regExpQueue.push(e), s;
  }
}
const Zs = [" ", ",", "?", "!", ";"], Qs = new Xs(20), er = (i, e, t) => {
  e = e || "", t = t || "";
  const s = Zs.filter((a) => e.indexOf(a) < 0 && t.indexOf(a) < 0);
  if (s.length === 0) return !0;
  const o = Qs.getRegExp(`(${s.map((a) => a === "?" ? "\\?" : a).join("|")})`);
  let n = !o.test(i);
  if (!n) {
    const a = i.indexOf(t);
    a > 0 && !o.test(i.substring(0, a)) && (n = !0);
  }
  return n;
}, Ue = function(i, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!i) return;
  if (i[e])
    return Object.prototype.hasOwnProperty.call(i, e) ? i[e] : void 0;
  const s = e.split(t);
  let o = i;
  for (let n = 0; n < s.length; ) {
    if (!o || typeof o != "object")
      return;
    let a, l = "";
    for (let c = n; c < s.length; ++c)
      if (c !== n && (l += t), l += s[c], a = o[l], a !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof a) > -1 && c < s.length - 1)
          continue;
        n += c - n + 1;
        break;
      }
    o = a;
  }
  return o;
}, Re = (i) => i == null ? void 0 : i.replace("_", "-"), tr = {
  type: "logger",
  log(i) {
    this.output("log", i);
  },
  warn(i) {
    this.output("warn", i);
  },
  error(i) {
    this.output("error", i);
  },
  output(i, e) {
    var t, s;
    (s = (t = console == null ? void 0 : console[i]) == null ? void 0 : t.apply) == null || s.call(t, console, e);
  }
};
class Pe {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || tr, this.options = t, this.debug = t.debug;
  }
  log() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, s, o) {
    return o && !this.debug ? null : (L(e[0]) && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new Pe(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Pe(this.logger, e);
  }
}
var Z = new Pe();
class Ee {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((s) => {
      this.observers[s] || (this.observers[s] = /* @__PURE__ */ new Map());
      const o = this.observers[s].get(t) || 0;
      this.observers[s].set(t, o + 1);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e) {
    for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
      s[o - 1] = arguments[o];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((a) => {
      let [l, c] = a;
      for (let u = 0; u < c; u++)
        l(...s);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((a) => {
      let [l, c] = a;
      for (let u = 0; u < c; u++)
        l.apply(l, [e, ...s]);
    });
  }
}
class dt extends Ee {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, s) {
    var u, d;
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const n = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, a = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let l;
    e.indexOf(".") > -1 ? l = e.split(".") : (l = [e, t], s && (Array.isArray(s) ? l.push(...s) : L(s) && n ? l.push(...s.split(n)) : l.push(s)));
    const c = Oe(this.data, l);
    return !c && !t && !s && e.indexOf(".") > -1 && (e = l[0], t = l[1], s = l.slice(2).join(".")), c || !a || !L(s) ? c : Ue((d = (u = this.data) == null ? void 0 : u[e]) == null ? void 0 : d[t], s, n);
  }
  addResource(e, t, s, o) {
    let n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const a = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let l = [e, t];
    s && (l = l.concat(a ? s.split(a) : s)), e.indexOf(".") > -1 && (l = e.split("."), o = t, t = l[1]), this.addNamespaces(t), ct(this.data, l, o), n.silent || this.emit("added", e, t, s, o);
  }
  addResources(e, t, s) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const n in s)
      (L(s[n]) || Array.isArray(s[n])) && this.addResource(e, t, n, s[n], {
        silent: !0
      });
    o.silent || this.emit("added", e, t, s);
  }
  addResourceBundle(e, t, s, o, n) {
    let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, l = [e, t];
    e.indexOf(".") > -1 && (l = e.split("."), o = s, s = t, t = l[1]), this.addNamespaces(t);
    let c = Oe(this.data, l) || {};
    a.skipCopy || (s = JSON.parse(JSON.stringify(s))), o ? Tt(c, s, n) : c = {
      ...c,
      ...s
    }, ct(this.data, l, c), a.silent || this.emit("added", e, t, s);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find((o) => t[o] && Object.keys(t[o]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var zt = {
  processors: {},
  addPostProcessor(i) {
    this.processors[i.name] = i;
  },
  handle(i, e, t, s, o) {
    return i.forEach((n) => {
      var a;
      e = ((a = this.processors[n]) == null ? void 0 : a.process(e, t, s, o)) ?? e;
    }), e;
  }
};
const ut = {}, ht = (i) => !L(i) && typeof i != "boolean" && typeof i != "number";
class $e extends Ee {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Gs(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Z.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (e == null)
      return !1;
    const s = this.resolve(e, t);
    return (s == null ? void 0 : s.res) !== void 0;
  }
  extractFromKey(e, t) {
    let s = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ":");
    const o = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let n = t.ns || this.options.defaultNS || [];
    const a = s && e.indexOf(s) > -1, l = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !er(e, s, o);
    if (a && !l) {
      const c = e.match(this.interpolator.nestingRegexp);
      if (c && c.length > 0)
        return {
          key: e,
          namespaces: L(n) ? [n] : n
        };
      const u = e.split(s);
      (s !== o || s === o && this.options.ns.indexOf(u[0]) > -1) && (n = u.shift()), e = u.join(o);
    }
    return {
      key: e,
      namespaces: L(n) ? [n] : n
    };
  }
  translate(e, t, s) {
    if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof options == "object" && (t = {
      ...t
    }), t || (t = {}), e == null) return "";
    Array.isArray(e) || (e = [String(e)]);
    const o = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails, n = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, {
      key: a,
      namespaces: l
    } = this.extractFromKey(e[e.length - 1], t), c = l[l.length - 1], u = t.lng || this.language, d = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((u == null ? void 0 : u.toLowerCase()) === "cimode") {
      if (d) {
        const E = t.nsSeparator || this.options.nsSeparator;
        return o ? {
          res: `${c}${E}${a}`,
          usedKey: a,
          exactUsedKey: a,
          usedLng: u,
          usedNS: c,
          usedParams: this.getUsedParamsDetails(t)
        } : `${c}${E}${a}`;
      }
      return o ? {
        res: a,
        usedKey: a,
        exactUsedKey: a,
        usedLng: u,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(t)
      } : a;
    }
    const p = this.resolve(e, t);
    let h = p == null ? void 0 : p.res;
    const v = (p == null ? void 0 : p.usedKey) || a, g = (p == null ? void 0 : p.exactUsedKey) || a, x = ["[object Number]", "[object Function]", "[object RegExp]"], j = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, M = !this.i18nFormat || this.i18nFormat.handleAsObject, k = t.count !== void 0 && !L(t.count), z = $e.hasDefaultValue(t), $ = k ? this.pluralResolver.getSuffix(u, t.count, t) : "", y = t.ordinal && k ? this.pluralResolver.getSuffix(u, t.count, {
      ordinal: !1
    }) : "", R = k && !t.ordinal && t.count === 0, P = R && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${$}`] || t[`defaultValue${y}`] || t.defaultValue;
    let m = h;
    M && !h && z && (m = P);
    const T = ht(m), B = Object.prototype.toString.apply(m);
    if (M && m && T && x.indexOf(B) < 0 && !(L(j) && Array.isArray(m))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const E = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, m, {
          ...t,
          ns: l
        }) : `key '${a} (${this.language})' returned an object instead of string.`;
        return o ? (p.res = E, p.usedParams = this.getUsedParamsDetails(t), p) : E;
      }
      if (n) {
        const E = Array.isArray(m), W = E ? [] : {}, re = E ? g : v;
        for (const H in m)
          if (Object.prototype.hasOwnProperty.call(m, H)) {
            const D = `${re}${n}${H}`;
            z && !h ? W[H] = this.translate(D, {
              ...t,
              defaultValue: ht(P) ? P[H] : void 0,
              joinArrays: !1,
              ns: l
            }) : W[H] = this.translate(D, {
              ...t,
              joinArrays: !1,
              ns: l
            }), W[H] === D && (W[H] = m[H]);
          }
        h = W;
      }
    } else if (M && L(j) && Array.isArray(h))
      h = h.join(j), h && (h = this.extendTranslation(h, e, t, s));
    else {
      let E = !1, W = !1;
      !this.isValidLookup(h) && z && (E = !0, h = P), this.isValidLookup(h) || (W = !0, h = a);
      const H = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && W ? void 0 : h, D = z && P !== h && this.options.updateMissing;
      if (W || E || D) {
        if (this.logger.log(D ? "updateKey" : "missingKey", u, c, a, D ? P : h), n) {
          const V = this.resolve(a, {
            ...t,
            keySeparator: !1
          });
          V && V.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let K = [];
        const J = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && J && J[0])
          for (let V = 0; V < J.length; V++)
            K.push(J[V]);
        else this.options.saveMissingTo === "all" ? K = this.languageUtils.toResolveHierarchy(t.lng || this.language) : K.push(t.lng || this.language);
        const S = (V, f, C) => {
          var O;
          const A = z && C !== h ? C : H;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(V, c, f, A, D, t) : (O = this.backendConnector) != null && O.saveMissing && this.backendConnector.saveMissing(V, c, f, A, D, t), this.emit("missingKey", V, c, f, h);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && k ? K.forEach((V) => {
          const f = this.pluralResolver.getSuffixes(V, t);
          R && t[`defaultValue${this.options.pluralSeparator}zero`] && f.indexOf(`${this.options.pluralSeparator}zero`) < 0 && f.push(`${this.options.pluralSeparator}zero`), f.forEach((C) => {
            S([V], a + C, t[`defaultValue${C}`] || P);
          });
        }) : S(K, a, P));
      }
      h = this.extendTranslation(h, e, t, p, s), W && h === a && this.options.appendNamespaceToMissingKey && (h = `${c}:${a}`), (W || E) && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}:${a}` : a, E ? h : void 0, t));
    }
    return o ? (p.res = h, p.usedParams = this.getUsedParamsDetails(t), p) : h;
  }
  extendTranslation(e, t, s, o, n) {
    var u, d;
    var a = this;
    if ((u = this.i18nFormat) != null && u.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...s
      }, s.lng || this.language || o.usedLng, o.usedNS, o.usedKey, {
        resolved: o
      });
    else if (!s.skipInterpolation) {
      s.interpolation && this.interpolator.init({
        ...s,
        interpolation: {
          ...this.options.interpolation,
          ...s.interpolation
        }
      });
      const p = L(e) && (((d = s == null ? void 0 : s.interpolation) == null ? void 0 : d.skipOnVariables) !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let h;
      if (p) {
        const g = e.match(this.interpolator.nestingRegexp);
        h = g && g.length;
      }
      let v = s.replace && !L(s.replace) ? s.replace : s;
      if (this.options.interpolation.defaultVariables && (v = {
        ...this.options.interpolation.defaultVariables,
        ...v
      }), e = this.interpolator.interpolate(e, v, s.lng || this.language || o.usedLng, s), p) {
        const g = e.match(this.interpolator.nestingRegexp), x = g && g.length;
        h < x && (s.nest = !1);
      }
      !s.lng && o && o.res && (s.lng = this.language || o.usedLng), s.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var g = arguments.length, x = new Array(g), j = 0; j < g; j++)
          x[j] = arguments[j];
        return (n == null ? void 0 : n[0]) === x[0] && !s.context ? (a.logger.warn(`It seems you are nesting recursively key: ${x[0]} in key: ${t[0]}`), null) : a.translate(...x, t);
      }, s)), s.interpolation && this.interpolator.reset();
    }
    const l = s.postProcess || this.options.postProcess, c = L(l) ? [l] : l;
    return e != null && (c != null && c.length) && s.applyPostProcessor !== !1 && (e = zt.handle(c, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...o,
        usedParams: this.getUsedParamsDetails(s)
      },
      ...s
    } : s, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s, o, n, a, l;
    return L(e) && (e = [e]), e.forEach((c) => {
      if (this.isValidLookup(s)) return;
      const u = this.extractFromKey(c, t), d = u.key;
      o = d;
      let p = u.namespaces;
      this.options.fallbackNS && (p = p.concat(this.options.fallbackNS));
      const h = t.count !== void 0 && !L(t.count), v = h && !t.ordinal && t.count === 0, g = t.context !== void 0 && (L(t.context) || typeof t.context == "number") && t.context !== "", x = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      p.forEach((j) => {
        var M, k;
        this.isValidLookup(s) || (l = j, !ut[`${x[0]}-${j}`] && ((M = this.utils) != null && M.hasLoadedNamespace) && !((k = this.utils) != null && k.hasLoadedNamespace(l)) && (ut[`${x[0]}-${j}`] = !0, this.logger.warn(`key "${o}" for languages "${x.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), x.forEach((z) => {
          var R;
          if (this.isValidLookup(s)) return;
          a = z;
          const $ = [d];
          if ((R = this.i18nFormat) != null && R.addLookupKeys)
            this.i18nFormat.addLookupKeys($, d, z, j, t);
          else {
            let P;
            h && (P = this.pluralResolver.getSuffix(z, t.count, t));
            const m = `${this.options.pluralSeparator}zero`, T = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (h && ($.push(d + P), t.ordinal && P.indexOf(T) === 0 && $.push(d + P.replace(T, this.options.pluralSeparator)), v && $.push(d + m)), g) {
              const B = `${d}${this.options.contextSeparator}${t.context}`;
              $.push(B), h && ($.push(B + P), t.ordinal && P.indexOf(T) === 0 && $.push(B + P.replace(T, this.options.pluralSeparator)), v && $.push(B + m));
            }
          }
          let y;
          for (; y = $.pop(); )
            this.isValidLookup(s) || (n = y, s = this.getResource(z, j, y, t));
        }));
      });
    }), {
      res: s,
      usedKey: o,
      exactUsedKey: n,
      usedLng: a,
      usedNS: l
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, s) {
    var n;
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (n = this.i18nFormat) != null && n.getResource ? this.i18nFormat.getResource(e, t, s, o) : this.resourceStore.getResource(e, t, s, o);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], s = e.replace && !L(e.replace);
    let o = s ? e.replace : e;
    if (s && typeof e.count < "u" && (o.count = e.count), this.options.interpolation.defaultVariables && (o = {
      ...this.options.interpolation.defaultVariables,
      ...o
    }), !s) {
      o = {
        ...o
      };
      for (const n of t)
        delete o[n];
    }
    return o;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const s in e)
      if (Object.prototype.hasOwnProperty.call(e, s) && t === s.substring(0, t.length) && e[s] !== void 0)
        return !0;
    return !1;
  }
}
class ft {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Z.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = Re(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = Re(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (L(e) && e.indexOf("-") > -1) {
      let t;
      try {
        t = Intl.getCanonicalLocales(e)[0];
      } catch {
      }
      return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return e.forEach((s) => {
      if (t) return;
      const o = this.formatLanguageCode(s);
      (!this.options.supportedLngs || this.isSupportedCode(o)) && (t = o);
    }), !t && this.options.supportedLngs && e.forEach((s) => {
      if (t) return;
      const o = this.getScriptPartFromCode(s);
      if (this.isSupportedCode(o)) return t = o;
      const n = this.getLanguagePartFromCode(s);
      if (this.isSupportedCode(n)) return t = n;
      t = this.options.supportedLngs.find((a) => {
        if (a === n) return a;
        if (!(a.indexOf("-") < 0 && n.indexOf("-") < 0) && (a.indexOf("-") > 0 && n.indexOf("-") < 0 && a.substring(0, a.indexOf("-")) === n || a.indexOf(n) === 0 && n.length > 1))
          return a;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), L(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let s = e[t];
    return s || (s = e[this.getScriptPartFromCode(t)]), s || (s = e[this.formatLanguageCode(t)]), s || (s = e[this.getLanguagePartFromCode(t)]), s || (s = e.default), s || [];
  }
  toResolveHierarchy(e, t) {
    const s = this.getFallbackCodes(t || this.options.fallbackLng || [], e), o = [], n = (a) => {
      a && (this.isSupportedCode(a) ? o.push(a) : this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`));
    };
    return L(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && n(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && n(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && n(this.getLanguagePartFromCode(e))) : L(e) && n(this.formatLanguageCode(e)), s.forEach((a) => {
      o.indexOf(a) < 0 && n(this.formatLanguageCode(a));
    }), o;
  }
}
const pt = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, gt = {
  select: (i) => i === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class sr {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = Z.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = Re(e === "dev" ? "en" : e), o = t.ordinal ? "ordinal" : "cardinal", n = JSON.stringify({
      cleanedCode: s,
      type: o
    });
    if (n in this.pluralRulesCache)
      return this.pluralRulesCache[n];
    let a;
    try {
      a = new Intl.PluralRules(s, {
        type: o
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), gt;
      if (!e.match(/-|_/)) return gt;
      const c = this.languageUtils.getLanguagePartFromCode(e);
      a = this.getRule(c, t);
    }
    return this.pluralRulesCache[n] = a, a;
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = this.getRule(e, t);
    return s || (s = this.getRule("dev", t)), (s == null ? void 0 : s.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, s).map((o) => `${t}${o}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = this.getRule(e, t);
    return s || (s = this.getRule("dev", t)), s ? s.resolvedOptions().pluralCategories.sort((o, n) => pt[o] - pt[n]).map((o) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : [];
  }
  getSuffix(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const o = this.getRule(e, s);
    return o ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${o.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, s));
  }
}
const mt = function(i, e, t) {
  let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, n = Ys(i, e, t);
  return !n && o && L(t) && (n = Ue(i, t, s), n === void 0 && (n = Ue(e, t, s))), n;
}, Te = (i) => i.replace(/\$/g, "$$$$");
class rr {
  constructor() {
    var t;
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Z.create("interpolator"), this.options = e, this.format = ((t = e == null ? void 0 : e.interpolation) == null ? void 0 : t.format) || ((s) => s), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: s,
      useRawValueToEscape: o,
      prefix: n,
      prefixEscaped: a,
      suffix: l,
      suffixEscaped: c,
      formatSeparator: u,
      unescapeSuffix: d,
      unescapePrefix: p,
      nestingPrefix: h,
      nestingPrefixEscaped: v,
      nestingSuffix: g,
      nestingSuffixEscaped: x,
      nestingOptionsSeparator: j,
      maxReplaces: M,
      alwaysFormat: k
    } = e.interpolation;
    this.escape = t !== void 0 ? t : qs, this.escapeValue = s !== void 0 ? s : !0, this.useRawValueToEscape = o !== void 0 ? o : !1, this.prefix = n ? le(n) : a || "{{", this.suffix = l ? le(l) : c || "}}", this.formatSeparator = u || ",", this.unescapePrefix = d ? "" : p || "-", this.unescapeSuffix = this.unescapePrefix ? "" : d || "", this.nestingPrefix = h ? le(h) : v || le("$t("), this.nestingSuffix = g ? le(g) : x || le(")"), this.nestingOptionsSeparator = j || ",", this.maxReplaces = M || 1e3, this.alwaysFormat = k !== void 0 ? k : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, s) => (t == null ? void 0 : t.source) === s ? (t.lastIndex = 0, t) : new RegExp(s, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, s, o) {
    var v;
    let n, a, l;
    const c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (g) => {
      if (g.indexOf(this.formatSeparator) < 0) {
        const k = mt(t, c, g, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(k, void 0, s, {
          ...o,
          ...t,
          interpolationkey: g
        }) : k;
      }
      const x = g.split(this.formatSeparator), j = x.shift().trim(), M = x.join(this.formatSeparator).trim();
      return this.format(mt(t, c, j, this.options.keySeparator, this.options.ignoreJSONStructure), M, s, {
        ...o,
        ...t,
        interpolationkey: j
      });
    };
    this.resetRegExp();
    const d = (o == null ? void 0 : o.missingInterpolationHandler) || this.options.missingInterpolationHandler, p = ((v = o == null ? void 0 : o.interpolation) == null ? void 0 : v.skipOnVariables) !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (g) => Te(g)
    }, {
      regex: this.regexp,
      safeValue: (g) => this.escapeValue ? Te(this.escape(g)) : Te(g)
    }].forEach((g) => {
      for (l = 0; n = g.regex.exec(e); ) {
        const x = n[1].trim();
        if (a = u(x), a === void 0)
          if (typeof d == "function") {
            const M = d(e, n, o);
            a = L(M) ? M : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, x))
            a = "";
          else if (p) {
            a = n[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${x} for interpolating ${e}`), a = "";
        else !L(a) && !this.useRawValueToEscape && (a = ot(a));
        const j = g.safeValue(a);
        if (e = e.replace(n[0], j), p ? (g.regex.lastIndex += a.length, g.regex.lastIndex -= n[0].length) : g.regex.lastIndex = 0, l++, l >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o, n, a;
    const l = (c, u) => {
      const d = this.nestingOptionsSeparator;
      if (c.indexOf(d) < 0) return c;
      const p = c.split(new RegExp(`${d}[ ]*{`));
      let h = `{${p[1]}`;
      c = p[0], h = this.interpolate(h, a);
      const v = h.match(/'/g), g = h.match(/"/g);
      (((v == null ? void 0 : v.length) ?? 0) % 2 === 0 && !g || g.length % 2 !== 0) && (h = h.replace(/'/g, '"'));
      try {
        a = JSON.parse(h), u && (a = {
          ...u,
          ...a
        });
      } catch (x) {
        return this.logger.warn(`failed parsing options string in nesting for key ${c}`, x), `${c}${d}${h}`;
      }
      return a.defaultValue && a.defaultValue.indexOf(this.prefix) > -1 && delete a.defaultValue, c;
    };
    for (; o = this.nestingRegexp.exec(e); ) {
      let c = [];
      a = {
        ...s
      }, a = a.replace && !L(a.replace) ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
      let u = !1;
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const d = o[1].split(this.formatSeparator).map((p) => p.trim());
        o[1] = d.shift(), c = d, u = !0;
      }
      if (n = t(l.call(this, o[1].trim(), a), a), n && o[0] === e && !L(n)) return n;
      L(n) || (n = ot(n)), n || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`), n = ""), u && (n = c.reduce((d, p) => this.format(d, p, s.lng, {
        ...s,
        interpolationkey: o[1].trim()
      }), n.trim())), e = e.replace(o[0], n), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const ir = (i) => {
  let e = i.toLowerCase().trim();
  const t = {};
  if (i.indexOf("(") > -1) {
    const s = i.split("(");
    e = s[0].toLowerCase().trim();
    const o = s[1].substring(0, s[1].length - 1);
    e === "currency" && o.indexOf(":") < 0 ? t.currency || (t.currency = o.trim()) : e === "relativetime" && o.indexOf(":") < 0 ? t.range || (t.range = o.trim()) : o.split(";").forEach((a) => {
      if (a) {
        const [l, ...c] = a.split(":"), u = c.join(":").trim().replace(/^'+|'+$/g, ""), d = l.trim();
        t[d] || (t[d] = u), u === "false" && (t[d] = !1), u === "true" && (t[d] = !0), isNaN(u) || (t[d] = parseInt(u, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, ce = (i) => {
  const e = {};
  return (t, s, o) => {
    let n = o;
    o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey] && (n = {
      ...n,
      [o.interpolationkey]: void 0
    });
    const a = s + JSON.stringify(n);
    let l = e[a];
    return l || (l = i(Re(s), o), e[a] = l), l(t);
  };
};
class nr {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Z.create("formatter"), this.options = e, this.formats = {
      number: ce((t, s) => {
        const o = new Intl.NumberFormat(t, {
          ...s
        });
        return (n) => o.format(n);
      }),
      currency: ce((t, s) => {
        const o = new Intl.NumberFormat(t, {
          ...s,
          style: "currency"
        });
        return (n) => o.format(n);
      }),
      datetime: ce((t, s) => {
        const o = new Intl.DateTimeFormat(t, {
          ...s
        });
        return (n) => o.format(n);
      }),
      relativetime: ce((t, s) => {
        const o = new Intl.RelativeTimeFormat(t, {
          ...s
        });
        return (n) => o.format(n, s.range || "day");
      }),
      list: ce((t, s) => {
        const o = new Intl.ListFormat(t, {
          ...s
        });
        return (n) => o.format(n);
      })
    }, this.init(e);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = t.interpolation.formatSeparator || ",";
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = ce(t);
  }
  format(e, t, s) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const n = t.split(this.formatSeparator);
    if (n.length > 1 && n[0].indexOf("(") > 1 && n[0].indexOf(")") < 0 && n.find((l) => l.indexOf(")") > -1)) {
      const l = n.findIndex((c) => c.indexOf(")") > -1);
      n[0] = [n[0], ...n.splice(1, l)].join(this.formatSeparator);
    }
    return n.reduce((l, c) => {
      var p;
      const {
        formatName: u,
        formatOptions: d
      } = ir(c);
      if (this.formats[u]) {
        let h = l;
        try {
          const v = ((p = o == null ? void 0 : o.formatParams) == null ? void 0 : p[o.interpolationkey]) || {}, g = v.locale || v.lng || o.locale || o.lng || s;
          h = this.formats[u](l, g, {
            ...d,
            ...o,
            ...v
          });
        } catch (v) {
          this.logger.warn(v);
        }
        return h;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return l;
    }, e);
  }
}
const or = (i, e) => {
  i.pending[e] !== void 0 && (delete i.pending[e], i.pendingCount--);
};
class ar extends Ee {
  constructor(e, t, s) {
    var n, a;
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = s, this.languageUtils = s.languageUtils, this.options = o, this.logger = Z.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], (a = (n = this.backend) == null ? void 0 : n.init) == null || a.call(n, s, o.backend, o);
  }
  queueLoad(e, t, s, o) {
    const n = {}, a = {}, l = {}, c = {};
    return e.forEach((u) => {
      let d = !0;
      t.forEach((p) => {
        const h = `${u}|${p}`;
        !s.reload && this.store.hasResourceBundle(u, p) ? this.state[h] = 2 : this.state[h] < 0 || (this.state[h] === 1 ? a[h] === void 0 && (a[h] = !0) : (this.state[h] = 1, d = !1, a[h] === void 0 && (a[h] = !0), n[h] === void 0 && (n[h] = !0), c[p] === void 0 && (c[p] = !0)));
      }), d || (l[u] = !0);
    }), (Object.keys(n).length || Object.keys(a).length) && this.queue.push({
      pending: a,
      pendingCount: Object.keys(a).length,
      loaded: {},
      errors: [],
      callback: o
    }), {
      toLoad: Object.keys(n),
      pending: Object.keys(a),
      toLoadLanguages: Object.keys(l),
      toLoadNamespaces: Object.keys(c)
    };
  }
  loaded(e, t, s) {
    const o = e.split("|"), n = o[0], a = o[1];
    t && this.emit("failedLoading", n, a, t), !t && s && this.store.addResourceBundle(n, a, s, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && s && (this.state[e] = 0);
    const l = {};
    this.queue.forEach((c) => {
      Ks(c.loaded, [n], a), or(c, e), t && c.errors.push(t), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((u) => {
        l[u] || (l[u] = {});
        const d = c.loaded[u];
        d.length && d.forEach((p) => {
          l[u][p] === void 0 && (l[u][p] = !0);
        });
      }), c.done = !0, c.errors.length ? c.callback(c.errors) : c.callback());
    }), this.emit("loaded", l), this.queue = this.queue.filter((c) => !c.done);
  }
  read(e, t, s) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, a = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return a(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: s,
        tried: o,
        wait: n,
        callback: a
      });
      return;
    }
    this.readingCalls++;
    const l = (u, d) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const p = this.waitingReads.shift();
        this.read(p.lng, p.ns, p.fcName, p.tried, p.wait, p.callback);
      }
      if (u && d && o < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, s, o + 1, n * 2, a);
        }, n);
        return;
      }
      a(u, d);
    }, c = this.backend[s].bind(this.backend);
    if (c.length === 2) {
      try {
        const u = c(e, t);
        u && typeof u.then == "function" ? u.then((d) => l(null, d)).catch(l) : l(null, u);
      } catch (u) {
        l(u);
      }
      return;
    }
    return c(e, t, l);
  }
  prepareLoading(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
    L(e) && (e = this.languageUtils.toResolveHierarchy(e)), L(t) && (t = [t]);
    const n = this.queueLoad(e, t, s, o);
    if (!n.toLoad.length)
      return n.pending.length || o(), null;
    n.toLoad.forEach((a) => {
      this.loadOne(a);
    });
  }
  load(e, t, s) {
    this.prepareLoading(e, t, {}, s);
  }
  reload(e, t, s) {
    this.prepareLoading(e, t, {
      reload: !0
    }, s);
  }
  loadOne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const s = e.split("|"), o = s[0], n = s[1];
    this.read(o, n, "read", void 0, void 0, (a, l) => {
      a && this.logger.warn(`${t}loading namespace ${n} for language ${o} failed`, a), !a && l && this.logger.log(`${t}loaded namespace ${n} for language ${o}`, l), this.loaded(e, a, l);
    });
  }
  saveMissing(e, t, s, o, n) {
    var c, u, d, p, h;
    let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, l = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if ((u = (c = this.services) == null ? void 0 : c.utils) != null && u.hasLoadedNamespace && !((p = (d = this.services) == null ? void 0 : d.utils) != null && p.hasLoadedNamespace(t))) {
      this.logger.warn(`did not save key "${s}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(s == null || s === "")) {
      if ((h = this.backend) != null && h.create) {
        const v = {
          ...a,
          isUpdate: n
        }, g = this.backend.create.bind(this.backend);
        if (g.length < 6)
          try {
            let x;
            g.length === 5 ? x = g(e, t, s, o, v) : x = g(e, t, s, o), x && typeof x.then == "function" ? x.then((j) => l(null, j)).catch(l) : l(null, x);
          } catch (x) {
            l(x);
          }
        else
          g(e, t, s, o, l, v);
      }
      !e || !e[0] || this.store.addResource(e[0], t, s, o);
    }
  }
}
const xt = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (i) => {
    let e = {};
    if (typeof i[1] == "object" && (e = i[1]), L(i[1]) && (e.defaultValue = i[1]), L(i[2]) && (e.tDescription = i[2]), typeof i[2] == "object" || typeof i[3] == "object") {
      const t = i[3] || i[2];
      Object.keys(t).forEach((s) => {
        e[s] = t[s];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (i) => i,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  }
}), yt = (i) => {
  var e, t;
  return L(i.ns) && (i.ns = [i.ns]), L(i.fallbackLng) && (i.fallbackLng = [i.fallbackLng]), L(i.fallbackNS) && (i.fallbackNS = [i.fallbackNS]), ((t = (e = i.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : t.call(e, "cimode")) < 0 && (i.supportedLngs = i.supportedLngs.concat(["cimode"])), typeof i.initImmediate == "boolean" && (i.initAsync = i.initImmediate), i;
}, Se = () => {
}, lr = (i) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach((t) => {
    typeof i[t] == "function" && (i[t] = i[t].bind(i));
  });
};
class be extends Ee {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = yt(e), this.services = {}, this.logger = Z, this.modules = {
      external: []
    }, lr(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof t == "function" && (s = t, t = {}), t.defaultNS == null && t.ns && (L(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const o = xt();
    this.options = {
      ...o,
      ...this.options,
      ...yt(t)
    }, this.options.interpolation = {
      ...o.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const n = (d) => d ? typeof d == "function" ? new d() : d : null;
    if (!this.options.isClone) {
      this.modules.logger ? Z.init(n(this.modules.logger), this.options) : Z.init(null, this.options);
      let d;
      this.modules.formatter ? d = this.modules.formatter : d = nr;
      const p = new ft(this.options);
      this.store = new dt(this.options.resources, this.options);
      const h = this.services;
      h.logger = Z, h.resourceStore = this.store, h.languageUtils = p, h.pluralResolver = new sr(p, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), d && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (h.formatter = n(d), h.formatter.init(h, this.options), this.options.interpolation.format = h.formatter.format.bind(h.formatter)), h.interpolator = new rr(this.options), h.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, h.backendConnector = new ar(n(this.modules.backend), h.resourceStore, h, this.options), h.backendConnector.on("*", function(v) {
        for (var g = arguments.length, x = new Array(g > 1 ? g - 1 : 0), j = 1; j < g; j++)
          x[j - 1] = arguments[j];
        e.emit(v, ...x);
      }), this.modules.languageDetector && (h.languageDetector = n(this.modules.languageDetector), h.languageDetector.init && h.languageDetector.init(h, this.options.detection, this.options)), this.modules.i18nFormat && (h.i18nFormat = n(this.modules.i18nFormat), h.i18nFormat.init && h.i18nFormat.init(this)), this.translator = new $e(this.services, this.options), this.translator.on("*", function(v) {
        for (var g = arguments.length, x = new Array(g > 1 ? g - 1 : 0), j = 1; j < g; j++)
          x[j - 1] = arguments[j];
        e.emit(v, ...x);
      }), this.modules.external.forEach((v) => {
        v.init && v.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, s || (s = Se), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const d = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      d.length > 0 && d[0] !== "dev" && (this.options.lng = d[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((d) => {
      this[d] = function() {
        return e.store[d](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((d) => {
      this[d] = function() {
        return e.store[d](...arguments), e;
      };
    });
    const c = xe(), u = () => {
      const d = (p, h) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), c.resolve(h), s(p, h);
      };
      if (this.languages && !this.isInitialized) return d(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, d);
    };
    return this.options.resources || !this.options.initAsync ? u() : setTimeout(u, 0), c;
  }
  loadResources(e) {
    var n, a;
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se;
    const o = L(e) ? e : this.language;
    if (typeof e == "function" && (s = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((o == null ? void 0 : o.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return s();
      const l = [], c = (u) => {
        if (!u || u === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(u).forEach((p) => {
          p !== "cimode" && l.indexOf(p) < 0 && l.push(p);
        });
      };
      o ? c(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((d) => c(d)), (a = (n = this.options.preload) == null ? void 0 : n.forEach) == null || a.call(n, (u) => c(u)), this.services.backendConnector.load(l, this.options.ns, (u) => {
        !u && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(u);
      });
    } else
      s(null);
  }
  reloadResources(e, t, s) {
    const o = xe();
    return typeof e == "function" && (s = e, e = void 0), typeof t == "function" && (s = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), s || (s = Se), this.services.backendConnector.reload(e, t, (n) => {
      o.resolve(), s(n);
    }), o;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && zt.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
      for (let t = 0; t < this.languages.length; t++) {
        const s = this.languages[t];
        if (!(["cimode", "dev"].indexOf(s) > -1) && this.store.hasLanguageSomeTranslations(s)) {
          this.resolvedLanguage = s;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(e) < 0 && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
    }
  }
  changeLanguage(e, t) {
    var s = this;
    this.isLanguageChangingTo = e;
    const o = xe();
    this.emit("languageChanging", e);
    const n = (c) => {
      this.language = c, this.languages = this.services.languageUtils.toResolveHierarchy(c), this.resolvedLanguage = void 0, this.setResolvedLanguage(c);
    }, a = (c, u) => {
      u ? this.isLanguageChangingTo === e && (n(u), this.translator.changeLanguage(u), this.isLanguageChangingTo = void 0, this.emit("languageChanged", u), this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0, o.resolve(function() {
        return s.t(...arguments);
      }), t && t(c, function() {
        return s.t(...arguments);
      });
    }, l = (c) => {
      var p, h;
      !e && !c && this.services.languageDetector && (c = []);
      const u = L(c) ? c : c && c[0], d = this.store.hasLanguageSomeTranslations(u) ? u : this.services.languageUtils.getBestMatchFromCodes(L(c) ? [c] : c);
      d && (this.language || n(d), this.translator.language || this.translator.changeLanguage(d), (h = (p = this.services.languageDetector) == null ? void 0 : p.cacheUserLanguage) == null || h.call(p, d)), this.loadResources(d, (v) => {
        a(v, d);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? l(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(l) : this.services.languageDetector.detect(l) : l(e), o;
  }
  getFixedT(e, t, s) {
    var o = this;
    const n = function(a, l) {
      let c;
      if (typeof l != "object") {
        for (var u = arguments.length, d = new Array(u > 2 ? u - 2 : 0), p = 2; p < u; p++)
          d[p - 2] = arguments[p];
        c = o.options.overloadTranslationOptionHandler([a, l].concat(d));
      } else
        c = {
          ...l
        };
      c.lng = c.lng || n.lng, c.lngs = c.lngs || n.lngs, c.ns = c.ns || n.ns, c.keyPrefix !== "" && (c.keyPrefix = c.keyPrefix || s || n.keyPrefix);
      const h = o.options.keySeparator || ".";
      let v;
      return c.keyPrefix && Array.isArray(a) ? v = a.map((g) => `${c.keyPrefix}${h}${g}`) : v = c.keyPrefix ? `${c.keyPrefix}${h}${a}` : a, o.t(v, c);
    };
    return L(e) ? n.lng = e : n.lngs = e, n.ns = t, n.keyPrefix = s, n;
  }
  t() {
    var o;
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return (o = this.translator) == null ? void 0 : o.translate(...t);
  }
  exists() {
    var o;
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return (o = this.translator) == null ? void 0 : o.exists(...t);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const s = t.lng || this.resolvedLanguage || this.languages[0], o = this.options ? this.options.fallbackLng : !1, n = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === "cimode") return !0;
    const a = (l, c) => {
      const u = this.services.backendConnector.state[`${l}|${c}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (t.precheck) {
      const l = t.precheck(this, a);
      if (l !== void 0) return l;
    }
    return !!(this.hasResourceBundle(s, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || a(s, e) && (!o || a(n, e)));
  }
  loadNamespaces(e, t) {
    const s = xe();
    return this.options.ns ? (L(e) && (e = [e]), e.forEach((o) => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources((o) => {
      s.resolve(), t && t(o);
    }), s) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const s = xe();
    L(e) && (e = [e]);
    const o = this.options.preload || [], n = e.filter((a) => o.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a));
    return n.length ? (this.options.preload = o.concat(n), this.loadResources((a) => {
      s.resolve(), t && t(a);
    }), s) : (t && t(), Promise.resolve());
  }
  dir(e) {
    var o, n;
    if (e || (e = this.resolvedLanguage || (((o = this.languages) == null ? void 0 : o.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], s = ((n = this.services) == null ? void 0 : n.languageUtils) || new ft(xt());
    return t.indexOf(s.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new be(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se;
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const o = {
      ...this.options,
      ...e,
      isClone: !0
    }, n = new be(o);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (n.logger = n.logger.clone(e)), ["store", "services", "language"].forEach((l) => {
      n[l] = this[l];
    }), n.services = {
      ...this.services
    }, n.services.utils = {
      hasLoadedNamespace: n.hasLoadedNamespace.bind(n)
    }, s) {
      const l = Object.keys(this.store.data).reduce((c, u) => (c[u] = {
        ...this.store.data[u]
      }, c[u] = Object.keys(c[u]).reduce((d, p) => (d[p] = {
        ...c[u][p]
      }, d), c[u]), c), {});
      n.store = new dt(l, o), n.services.resourceStore = n.store;
    }
    return n.translator = new $e(n.services, o), n.translator.on("*", function(l) {
      for (var c = arguments.length, u = new Array(c > 1 ? c - 1 : 0), d = 1; d < c; d++)
        u[d - 1] = arguments[d];
      n.emit(l, ...u);
    }), n.init(o, t), n.translator.options = o, n.translator.backendConnector.services.utils = {
      hasLoadedNamespace: n.hasLoadedNamespace.bind(n)
    }, n;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const Y = be.createInstance();
Y.createInstance = be.createInstance;
Y.createInstance;
Y.dir;
Y.init;
Y.loadResources;
Y.reloadResources;
Y.use;
Y.changeLanguage;
Y.getFixedT;
Y.t;
Y.exists;
Y.setDefaultNamespace;
Y.hasLoadedNamespace;
Y.loadNamespaces;
Y.loadLanguages;
var He = {
  nav: {
    pricing: "Pricing",
    contact: "Contact",
    languages: "Languages",
    login: "Login",
    get_started: "Get Started",
    product: {
      title: "Product",
      aspm_overview: "ASPM Overview",
      use_cases: "Use Cases",
      benefits: "Benefits"
    },
    solutions: {
      title: "Solutions",
      fintech: "Fintech",
      healthtech: "HealthTech",
      legaltech: "LegalTech",
      hrtech: "HRTech",
      group_companies: "Group Companies",
      startups: "Startups",
      enterprise: "Enterprise",
      agencies: "Agencies",
      mobile_apps: "Mobile Apps",
      manufacturing: "Manufacturing",
      government: "Government",
      retailtech: "RetailTech"
    },
    developers: {
      title: "Developers",
      documentations: "Documentations",
      github_actions: "Github Actions",
      github_apps: "Github Apps",
      plexalyzer_action: "Plexalyzer Action",
      api_references: "API References"
    },
    resources: {
      title: "Resources",
      blog: "Blog",
      youtube_channel: "Youtube Channel",
      branding_assets: "Branding Assets",
      feature_request: "Feature Request",
      changelogs: "Changelogs"
    }
  },
  footer: {
    tagline: "Elevate your cybersecurity strategy with Plexicus",
    social_media: {
      twitter: "Twitter",
      linkedin: "LinkedIn",
      github: "GitHub"
    },
    sections: {
      products: {
        title: "Products",
        links: {
          aspm_overview: "ASPM Overview",
          benefits: "Benefits",
          use_cases: "Use Cases",
          pricing: "Pricing"
        }
      },
      resources: {
        title: "Resources",
        links: {
          blog: "Blog",
          documentation: "Documentation",
          case_studies: "Case Studies",
          security_resources: "Security Resources"
        }
      },
      company: {
        title: "Company",
        links: {
          about_us: "About Us",
          contact: "Contact",
          careers: "Careers",
          privacy_policy: "Privacy Policy"
        }
      }
    },
    policies: {
      privacy_policy: "Privacy Policy",
      management_policy: "Management Policy",
      legal_notice: "Legal Notice"
    },
    readiness: "SOC2 Type II Readiness"
  }
};
He.nav;
He.footer;
var Ke = {
  nav: {
    pricing: "Precios",
    contact: "Contacto",
    languages: "Idiomas",
    login: "Iniciar sesión",
    get_started: "Comenzar",
    product: {
      title: "Producto",
      aspm_overview: "Descripción general de ASPM",
      use_cases: "Casos de uso",
      benefits: "Beneficios"
    },
    solutions: {
      title: "Soluciones",
      fintech: "Fintech",
      healthtech: "HealthTech",
      legaltech: "LegalTech",
      hrtech: "HRTech",
      group_companies: "Compañías del grupo",
      startups: "Startups",
      enterprise: "Empresa",
      agencies: "Agencias",
      mobile_apps: "Aplicaciones móviles",
      manufacturing: "Manufactura",
      government: "Gobierno",
      retailtech: "RetailTech"
    },
    developers: {
      title: "Desarrolladores",
      documentations: "Documentaciones",
      github_actions: "Acciones de Github",
      plexalyzer_action: "Acciones de Plexalyzer",
      github_apps: "Aplicaciones de Github",
      api_references: "Referencias de API"
    },
    resources: {
      title: "Recursos",
      blog: "Blog",
      youtube_channel: "Canal de Youtube",
      branding_assets: "Recursos de marca",
      feature_request: "Solicitud de características",
      changelogs: "Registros de cambios"
    }
  },
  footer: {
    tagline: "Eleva tu estrategia de ciberseguridad con Plexicus.",
    social_media: {
      twitter: "Twitter",
      linkedin: "LinkedIn",
      github: "GitHub"
    },
    sections: {
      products: {
        title: "Productos",
        links: {
          aspm_overview: "Resumen de ASPM",
          benefits: "Beneficios",
          use_cases: "Casos de Uso",
          pricing: "Precios"
        }
      },
      resources: {
        title: "Recursos",
        links: {
          blog: "Blog",
          documentation: "Documentación",
          case_studies: "Estudios de Caso",
          security_resources: "Recursos de Seguridad"
        }
      },
      company: {
        title: "Empresa",
        links: {
          about_us: "Sobre Nosotros",
          contact: "Contacto",
          careers: "Carreras",
          privacy_policy: "Política de Privacidad"
        }
      }
    },
    policies: {
      privacy_policy: "Política de Privacidad",
      management_policy: "Política de Gestión",
      legal_notice: "Aviso Legal"
    },
    readiness: "SOC2 Tipo II Preparación"
  }
};
Ke.nav;
Ke.footer;
var Ye = {
  nav: {
    pricing: "Prezzi",
    contact: "Contatto",
    languages: "Lingue",
    login: "Accedi",
    get_started: "Inizia",
    product: {
      title: "Prodotto",
      aspm_overview: "Panoramica ASPM",
      use_cases: "Casi d'uso",
      benefits: "Benefici"
    },
    solutions: {
      title: "Soluzioni",
      fintech: "Fintech",
      healthtech: "HealthTech",
      legaltech: "LegalTech",
      hrtech: "HRTech",
      group_companies: "Gruppo di aziende",
      startups: "Startups",
      enterprise: "Azienda",
      agencies: "Agenzie",
      mobile_apps: "App mobili",
      manufacturing: "Produzione",
      government: "Governo",
      retailtech: "RetailTech"
    },
    developers: {
      title: "Sviluppatori",
      documentations: "Documentazioni",
      github_actions: "Azioni Github",
      plexalyzer_action: "Azioni Plexalyzer",
      github_apps: "App Github",
      api_references: "Riferimenti API"
    },
    resources: {
      title: "Risorse",
      blog: "Blog",
      youtube_channel: "Canale Youtube",
      branding_assets: "Asset di branding",
      feature_request: "Richiesta di funzionalità",
      changelogs: "Changelog"
    }
  },
  footer: {
    tagline: "Eleva la tua strategia di cybersecurity con Plexicus.",
    social_media: {
      twitter: "Twitter",
      linkedin: "LinkedIn",
      github: "GitHub"
    },
    sections: {
      products: {
        title: "Prodotti",
        links: {
          aspm_overview: "Panoramica ASPM",
          benefits: "Benefici",
          use_cases: "Casi d'uso",
          pricing: "Prezzi"
        }
      },
      resources: {
        title: "Risorse",
        links: {
          blog: "Blog",
          documentation: "Documentazione",
          case_studies: "Casi di studio",
          security_resources: "Risorse di sicurezza"
        }
      },
      company: {
        title: "Azienda",
        links: {
          about_us: "Chi Siamo",
          contact: "Contatti",
          careers: "Carriere",
          privacy_policy: "Informativa sulla privacy"
        }
      }
    },
    policies: {
      privacy_policy: "Informativa sulla privacy",
      management_policy: "Politica di gestione",
      legal_notice: "Note legali"
    },
    readiness: "Pronto SOC2 Tipo II"
  }
};
Ye.nav;
Ye.footer;
const cr = ["en", "es", "it"];
Y.use(Bs).init({
  lng: "en",
  supportedLngs: cr,
  resources: {
    en: { translation: He },
    es: { translation: Ke },
    it: { translation: Ye }
  },
  fallbackLng: "en",
  react: { useSuspense: !1 }
});
const It = "https://www.plexicus.ai", Ft = "http://blog.plexicus.ai", fr = ({ lang: i, fullSiteUrl: e = "http://localhost:8000", fullBlogUrl: t = "http://localhost:9000" }) => {
  const [s, o] = de("/"), [n, a] = de(!1), [l, c] = de(null), u = Le(null), { t: d, i18n: p } = Mt();
  se(() => {
    p.changeLanguage(i), o(i !== "en" ? `/${i}/` : "/");
  }, []);
  const [h, v] = de(!1);
  se(() => {
    const y = () => {
      const R = window.scrollY;
      v(R > 50);
    };
    return window.addEventListener("scroll", y), y(), () => {
      window.removeEventListener("scroll", y);
    };
  }, []);
  const g = Ce((y) => {
    u.current && (clearTimeout(u.current), u.current = null), c(y);
  }, []), x = Le([]), j = Ce(() => {
    const y = setTimeout(() => {
      c(null);
    }, 150);
    u.current = y, x.current.push(y);
  }, []);
  se(() => () => {
    u.current && clearTimeout(u.current), x.current.forEach(clearTimeout), x.current = [];
  }, []);
  const M = Ce(
    (y) => {
      c(l === y ? null : y);
    },
    [l]
  ), k = Ne(e, It), z = Ne(t, Ft), $ = {
    products: {
      title: d("nav.product.title"),
      shortTitle: "Product",
      image: "product-diagram",
      items: [
        {
          title: d("nav.product.aspm_overview"),
          description: "Complete application security protection",
          href: `${k}${s}aspm-overview`,
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                /* @__PURE__ */ r.jsx("path", { d: "M12 16v-4" }),
                /* @__PURE__ */ r.jsx("path", { d: "M12 8h.01" })
              ]
            }
          )
        },
        {
          title: d("nav.product.benefits"),
          description: "See how Plexicus transforms security",
          href: `${k}${s}benefits`,
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("path", { d: "m9 12 2 2 4-4" }),
                /* @__PURE__ */ r.jsx("path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" }),
                /* @__PURE__ */ r.jsx("path", { d: "M22 19H2" })
              ]
            }
          )
        },
        {
          title: d("nav.product.use_cases"),
          description: "Real-world implementation examples",
          href: `${k}${s}use-cases`,
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
                /* @__PURE__ */ r.jsx("path", { d: "M8 12h8" }),
                /* @__PURE__ */ r.jsx("path", { d: "M12 8v8" })
              ]
            }
          )
        }
      ]
    },
    solutions: {
      title: d("nav.solutions.title"),
      link: "/solutions",
      shortTitle: "Solutions",
      image: "solutions-diagram",
      items: [
        {
          title: d("nav.solutions.fintech"),
          description: "Security solutions for financial technology",
          href: `${k}${s}solutions/fintech-solutions`,
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
                /* @__PURE__ */ r.jsx("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
              ]
            }
          )
        },
        {
          title: d("nav.solutions.healthtech"),
          description: "HIPAA compliant security solutions",
          href: `${k}${s}solutions/healthcare-solutions`,
          icon: /* @__PURE__ */ r.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ r.jsx("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" })
            }
          )
        },
        {
          title: d("nav.solutions.hrtech"),
          description: "Security for legal technology platforms",
          href: `${k}${s}solutions/hrtech-solutions`,
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("path", { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" }),
                /* @__PURE__ */ r.jsx("path", { d: "M12 8v4l3 3" })
              ]
            }
          )
        },
        {
          title: d("nav.solutions.group_companies"),
          description: "Solutions for corporate groups and holdings",
          href: `${k}${s}solutions/group-companies-solutions`,
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("rect", { x: "2", y: "7", width: "20", height: "14", rx: "2", ry: "2" }),
                /* @__PURE__ */ r.jsx("path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" })
              ]
            }
          )
        },
        {
          title: d("nav.solutions.agencies"),
          description: "Security for digital and marketing agencies",
          href: `${k}${s}solutions/agencies-solutions`,
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
                /* @__PURE__ */ r.jsx("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
              ]
            }
          )
        },
        {
          title: d("nav.solutions.startups"),
          description: "Scalable security for growing companies",
          href: `${k}${s}solutions/startup-solutions`,
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" }),
                /* @__PURE__ */ r.jsx("path", { d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" }),
                /* @__PURE__ */ r.jsx("path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }),
                /* @__PURE__ */ r.jsx("path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" })
              ]
            }
          )
        },
        {
          title: d("nav.solutions.enterprise"),
          description: "Comprehensive security for large organizations",
          href: `${k}${s}solutions/enterprise-solutions`,
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("path", { d: "M2 20h20" }),
                /* @__PURE__ */ r.jsx("path", { d: "M5 20V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14" }),
                /* @__PURE__ */ r.jsx("path", { d: "M12 3v4" }),
                /* @__PURE__ */ r.jsx("path", { d: "M5 8h14" }),
                /* @__PURE__ */ r.jsx("path", { d: "M7 14h2" }),
                /* @__PURE__ */ r.jsx("path", { d: "M15 14h2" }),
                /* @__PURE__ */ r.jsx("path", { d: "M7 10h2" }),
                /* @__PURE__ */ r.jsx("path", { d: "M15 10h2" })
              ]
            }
          )
        },
        {
          title: d("nav.solutions.mobile_apps"),
          description: "Security for iOS and Android applications",
          href: `${k}${s}solutions/mobile-app-solutions`,
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }),
                /* @__PURE__ */ r.jsx("line", { x1: "12", y1: "18", x2: "12.01", y2: "18" })
              ]
            }
          )
        },
        {
          title: d("nav.solutions.manufacturing"),
          description: "Security for industrial and IoT systems",
          href: `${k}${s}solutions/manufacturing-solutions`,
          icon: /* @__PURE__ */ r.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ r.jsx("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" })
            }
          )
        },
        {
          title: d("nav.solutions.government"),
          description: "Security solutions for government agencies",
          href: `${k}${s}solutions/government-solutions`,
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("path", { d: "M2 20h20" }),
                /* @__PURE__ */ r.jsx("path", { d: "M12 4v6" }),
                /* @__PURE__ */ r.jsx("path", { d: "M4 20V10l8-6 8 6v10" }),
                /* @__PURE__ */ r.jsx("path", { d: "M15 12v8" }),
                /* @__PURE__ */ r.jsx("path", { d: "M9 12v8" })
              ]
            }
          )
        },
        {
          title: d("nav.solutions.retailtech"),
          description: "Security for e-commerce and retail platforms",
          href: `${k}${s}solutions/retailtech-solutions`,
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("circle", { cx: "9", cy: "21", r: "1" }),
                /* @__PURE__ */ r.jsx("circle", { cx: "20", cy: "21", r: "1" }),
                /* @__PURE__ */ r.jsx("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })
              ]
            }
          )
        }
      ]
    },
    developers: {
      title: d("nav.developers.title"),
      shortTitle: "Developers",
      image: "developers-diagram",
      items: [
        {
          title: d("nav.developers.documentations"),
          description: "Technical guides and references",
          href: "https://docs.plexicus.com/",
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                /* @__PURE__ */ r.jsx("polyline", { points: "14 2 14 8 20 8" }),
                /* @__PURE__ */ r.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
                /* @__PURE__ */ r.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
                /* @__PURE__ */ r.jsx("polyline", { points: "10 9 9 9 8 9" })
              ]
            }
          )
        },
        {
          title: d("nav.developers.api_references"),
          description: "Comprehensive API documentation",
          href: "https://docs.plexicus.com/getting-started/introduction",
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("path", { d: "m18 16 4-4-4-4" }),
                /* @__PURE__ */ r.jsx("path", { d: "m6 8-4 4 4 4" }),
                /* @__PURE__ */ r.jsx("path", { d: "m14.5 4-5 16" })
              ]
            }
          )
        },
        {
          title: d("nav.developers.github_apps"),
          description: "Integrate Plexicus with your repositories",
          href: "https://github.com/apps/plexicus",
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
                /* @__PURE__ */ r.jsx("path", { d: "M9 18c-4.51 2-5-2-7-2" })
              ]
            }
          )
        },
        {
          title: d("nav.developers.plexalyzer_action"),
          description: "Automate security in your CI/CD pipeline",
          href: "https://github.com/marketplace/actions/plexicus-runner-action",
          icon: /* @__PURE__ */ r.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ r.jsx("path", { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" })
            }
          )
        }
      ]
    },
    resources: {
      title: d("nav.resources.title"),
      shortTitle: "Resources",
      image: "resources-diagram",
      items: [
        {
          title: d("nav.resources.blog"),
          description: "Latest news and security insights",
          href: z,
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                /* @__PURE__ */ r.jsx("path", { d: "M14 3v5h5M16 13H8M16 17H8M10 9H8" })
              ]
            }
          )
        },
        {
          title: d("nav.resources.youtube_channel"),
          description: "Video tutorials and webinars",
          href: "https://youtube.com/channel/UCzrotvBZ3dcb7mhI55ExHBQ/",
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("path", { d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" }),
                /* @__PURE__ */ r.jsx("path", { d: "m10 15 5-3-5-3z" })
              ]
            }
          )
        },
        {
          title: d("nav.resources.branding_assets"),
          description: "Logos and brand guidelines",
          href: `${k}${s}resources/branding`,
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("path", { d: "M12 19c.5 0 1-.1 1.4-.4.8-.4 1.4-1.1 1.6-2 .3-1.4-.5-2.8-1.9-3.2-.3-.1-.6-.1-.9-.1-.5 0-1 .1-1.4.4-.8.4-1.4 1.1-1.6 2-.3 1.4.5 2.8 1.9 3.2.3.1.6.1.9.1z" }),
                /* @__PURE__ */ r.jsx("path", { d: "m14.5 12.5 2.7-2.7c1.2-1.2 1.8-2.7 1.8-4.3 0-3.1-2.5-5.5-5.5-5.5-1.6 0-3.1.6-4.3 1.8L6.5 4.5" }),
                /* @__PURE__ */ r.jsx("path", { d: "m4.5 6.5 2.7-2.7c.3-.3.6-.4 1-.4.8 0 1.5.7 1.5 0 .4-.1.7-.4 1 0L6.5 8.5" }),
                /* @__PURE__ */ r.jsx("path", { d: "m3.5 13.5 5-5" }),
                /* @__PURE__ */ r.jsx("path", { d: "m5 19 5-5" }),
                /* @__PURE__ */ r.jsx("path", { d: "m17.5 6.5-5 5" }),
                /* @__PURE__ */ r.jsx("path", { d: "m16 17-5-5" })
              ]
            }
          )
        },
        {
          title: d("nav.resources.changelogs"),
          description: "Latest product updates",
          href: "https://plexicus.canny.io/changelog",
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("path", { d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" }),
                /* @__PURE__ */ r.jsx("path", { d: "m9 12 2 2 4-4" })
              ]
            }
          )
        },
        {
          title: d("nav.resources.feature_request"),
          description: "Submit and vote on new features",
          href: "https://plexicus.canny.io/feature-requests",
          icon: /* @__PURE__ */ r.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ r.jsx("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" })
            }
          )
        },
        // Find the three comparison items in the resources menu items array and update their icons
        // For "Plexicus vs. ArmorCode", replace the icon with a sword
        {
          title: "Plexicus vs. ArmorCode",
          description: "See how Plexicus compares",
          href: `${k}${s}compare/armorcode`,
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("path", { d: "M14.5 17.5L3 6V3h3l11.5 11.5" }),
                /* @__PURE__ */ r.jsx("path", { d: "M13 19l6-6" }),
                /* @__PURE__ */ r.jsx("path", { d: "M16 16l4 4" }),
                /* @__PURE__ */ r.jsx("path", { d: "M19 21l2-2" })
              ]
            }
          )
        },
        // For "Plexicus vs. Apiiro", replace the icon with an axe
        {
          title: "Plexicus vs. Apiiro",
          description: "Feature comparison",
          href: `${k}${s}compare/apiiro`,
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("path", { d: "M12 2v5.5m0 0v9m0-9 7-3.5c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5L12 8.5l-7-3.5C4.2 5 3.5 5.7 3.5 6.5v3c0 .8.7 1.5 1.5 1.5l7 3.5" }),
                /* @__PURE__ */ r.jsx("path", { d: "M12 8.5 5 5l-1 1 8 8.5 8-8.5-1-1-7 3.5z" }),
                /* @__PURE__ */ r.jsx("path", { d: "m9 12 3 2.5 3-2.5" }),
                /* @__PURE__ */ r.jsx("path", { d: "M12 17v5" })
              ]
            }
          )
        },
        // For "Plexicus vs. Legit Security", replace the icon with a crosshair/target
        {
          title: "Plexicus vs. Legit Security",
          description: "Side-by-side comparison",
          href: `${k}${s}compare/legit-security`,
          icon: /* @__PURE__ */ r.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ r.jsx("path", { d: "M3 8a4 4 0 0 1 8 0v8a4 4 0 0 1-8 0z" }),
                /* @__PURE__ */ r.jsx("path", { d: "M7 8v8" }),
                /* @__PURE__ */ r.jsx("path", { d: "M21 12h-7" }),
                /* @__PURE__ */ r.jsx("path", { d: "m14 15 3-3-3-3" }),
                /* @__PURE__ */ r.jsx("path", { d: "M7 12h7" })
              ]
            }
          )
        }
      ]
    }
  };
  return /* @__PURE__ */ r.jsxs(
    "header",
    {
      className: "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
      style: {
        background: h ? "#8220ff" : "transparent",
        boxShadow: h ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.3s ease-in-out",
        minHeight: "64px"
      },
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl", children: [
          /* @__PURE__ */ r.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ r.jsx(I, { href: `${k}${s}`, className: "flex items-center gap-2 overflow-visible", "aria-label": "Plexicus Home", children: /* @__PURE__ */ r.jsx("div", { className: "relative w-auto h-14 flex items-center", children: /* @__PURE__ */ r.jsx(
            "img",
            {
              src: "/images/plexicus-logo-white.png",
              alt: "Plexicus Logo",
              className: "object-contain max-h-full max-w-none",
              style: {
                maxWidth: h ? "180px" : "220px",
                transition: "max-width 0.3s ease-in-out"
              }
            }
          ) }) }) }),
          /* @__PURE__ */ r.jsxs("nav", { className: "hidden md:flex md:gap-4 lg:gap-6", "aria-label": "Main Navigation", children: [
            Object.entries($).filter(([y]) => y === "products").map(([y, R]) => /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => g(y),
                onMouseLeave: j,
                children: /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": l === y,
                    "aria-haspopup": "true",
                    onClick: () => M(y),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "hidden lg:inline", children: R.title }),
                      /* @__PURE__ */ r.jsx("span", { className: "lg:hidden", children: R.shortTitle }),
                      /* @__PURE__ */ r.jsx(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          className: `ml-1 transition-transform duration-200 ${l === y ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ r.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              y
            )),
            /* @__PURE__ */ r.jsx(
              I,
              {
                href: `${k}${s}pricing`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: d("nav.pricing")
              }
            ),
            Object.entries($).filter(([y]) => y === "solutions" || y === "developers" || y === "resources").map(([y, R]) => /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => g(y),
                onMouseLeave: j,
                children: /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": l === y,
                    "aria-haspopup": "true",
                    onClick: () => M(y),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "hidden lg:inline", children: R.title }),
                      /* @__PURE__ */ r.jsx("span", { className: "lg:hidden", children: R.shortTitle }),
                      /* @__PURE__ */ r.jsx(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          className: `ml-1 transition-transform duration-200 ${l === y ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ r.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              y
            )),
            /* @__PURE__ */ r.jsx(
              I,
              {
                href: `${k}${s}contact`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: d("nav.contact")
              }
            )
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "hidden md:flex items-center gap-4", children: [
            /* @__PURE__ */ r.jsx(
              I,
              {
                href: `${k}/login`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors whitespace-nowrap",
                children: d("nav.login")
              }
            ),
            /* @__PURE__ */ r.jsx(Be, { className: "bg-white text-[#8220ff] font-medium px-4 lg:px-6 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap", children: d("nav.get_started") })
          ] }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              className: "flex md:hidden p-2 rounded-md hover:bg-white/10 transition-colors text-white",
              onClick: () => a(!n),
              "aria-label": n ? "Close menu" : "Open menu",
              "aria-expanded": n,
              children: n ? /* @__PURE__ */ r.jsxs(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "h-6 w-6",
                  "aria-hidden": "true",
                  children: [
                    /* @__PURE__ */ r.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                    /* @__PURE__ */ r.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                  ]
                }
              ) : /* @__PURE__ */ r.jsxs(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "h-6 w-6",
                  "aria-hidden": "true",
                  children: [
                    /* @__PURE__ */ r.jsx("line", { x1: "4", x2: "20", y1: "12", y2: "12" }),
                    /* @__PURE__ */ r.jsx("line", { x1: "4", x2: "20", y1: "6", y2: "6" }),
                    /* @__PURE__ */ r.jsx("line", { x1: "4", x2: "20", y1: "18", y2: "18" })
                  ]
                }
              )
            }
          )
        ] }),
        l && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "fixed inset-0 bg-black/20 z-30",
              onClick: () => c(null),
              "aria-hidden": "true",
              style: { top: "64px" }
            }
          ),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "absolute left-0 right-0 top-16 z-40 bg-white shadow-xl border-t border-gray-100 transition-all duration-300 transform",
              onMouseEnter: () => g(l),
              onMouseLeave: j,
              role: "menu",
              "aria-labelledby": `menu-button-${l}`,
              children: /* @__PURE__ */ r.jsx("div", { className: "container mx-auto py-8 px-4 md:px-6 max-w-7xl", children: /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col md:flex-row", children: [
                /* @__PURE__ */ r.jsxs("div", { className: "w-full md:w-1/3 pr-0 md:pr-8 mb-6 md:mb-0 flex flex-col", children: [
                  /* @__PURE__ */ r.jsx("div", { className: "relative h-36 md:h-40 w-full rounded-lg overflow-hidden bg-white border border-gray-100 mb-4", children: /* @__PURE__ */ r.jsxs("div", { className: "absolute inset-0 flex items-center justify-center", children: [
                    l === "products" && /* @__PURE__ */ r.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ r.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ r.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ r.jsx(
                            "rect",
                            {
                              x: "40",
                              y: "30",
                              width: "320",
                              height: "240",
                              rx: "12",
                              fill: "white",
                              filter: "url(#shadowEffect)"
                            }
                          ),
                          /* @__PURE__ */ r.jsx("rect", { x: "40", y: "30", width: "320", height: "40", rx: "12", fill: "#8220ff", fillOpacity: "0.9" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "65", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "90", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "115", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "40", y: "70", width: "80", height: "200", fill: "#f5f5f7" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "55", y: "90", width: "50", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.7" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "55", y: "110", width: "40", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "55", y: "130", width: "45", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "55", y: "150", width: "35", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "55", y: "170", width: "50", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "140", y: "90", width: "200", height: "70", rx: "8", fill: "#8220ff", fillOpacity: "0.1" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "155", y: "105", width: "170", height: "40", rx: "4", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "175", cy: "125", r: "15", fill: "#8220ff", fillOpacity: "0.8" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "200", y: "115", width: "110", height: "8", rx: "4", fill: "white" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "200", y: "130", width: "80", height: "6", rx: "3", fill: "white", fillOpacity: "0.7" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "140", y: "180", width: "95", height: "80", rx: "8", fill: "#f0f0f5" }),
                          /* @__PURE__ */ r.jsx(
                            "path",
                            {
                              d: "M150 240 L170 220 L190 230 L210 200",
                              stroke: "#8220ff",
                              strokeWidth: "3",
                              strokeLinecap: "round"
                            }
                          ),
                          /* @__PURE__ */ r.jsx("circle", { cx: "170", cy: "220", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "190", cy: "230", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "210", cy: "200", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "245", y: "180", width: "95", height: "80", rx: "8", fill: "#f0f0f5" }),
                          /* @__PURE__ */ r.jsx(
                            "circle",
                            {
                              cx: "293",
                              cy: "220",
                              r: "30",
                              fill: "transparent",
                              stroke: "#8220ff",
                              strokeWidth: "8",
                              strokeDasharray: "120 180"
                            }
                          ),
                          /* @__PURE__ */ r.jsx("circle", { cx: "293", cy: "220", r: "30", fill: "transparent", stroke: "#e0e0e5", strokeWidth: "8" }),
                          /* @__PURE__ */ r.jsx("text", { x: "283", y: "225", fontFamily: "Arial", fontSize: "12", fill: "#8220ff", fontWeight: "bold", children: "75%" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "320", cy: "50", r: "12", fill: "white", fillOpacity: "0.2" }),
                          /* @__PURE__ */ r.jsx("path", { d: "M314 50 L320 56 L326 50", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "30", cy: "30", r: "5", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "350", cy: "280", r: "7", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "370", cy: "50", r: "4", fill: "#8220ff", fillOpacity: "0.4" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "20", cy: "250", r: "6", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ r.jsx(
                            "path",
                            {
                              d: "M15 100 C30 120, 20 150, 35 160",
                              stroke: "#8220ff",
                              strokeWidth: "1.5",
                              strokeDasharray: "4 4"
                            }
                          ),
                          /* @__PURE__ */ r.jsx(
                            "path",
                            {
                              d: "M370 120 C350 140, 360 170, 380 190",
                              stroke: "#8220ff",
                              strokeWidth: "1.5",
                              strokeDasharray: "4 4"
                            }
                          ),
                          /* @__PURE__ */ r.jsxs("defs", { children: [
                            /* @__PURE__ */ r.jsxs(
                              "linearGradient",
                              {
                                id: "productGradient",
                                x1: "0",
                                y1: "0",
                                x2: "400",
                                y2: "300",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#f5f5f7" }),
                                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#e8e8f0" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ r.jsxs(
                              "filter",
                              {
                                id: "shadowEffect",
                                x: "0",
                                y: "0",
                                width: "400",
                                height: "300",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: [
                                  /* @__PURE__ */ r.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                  /* @__PURE__ */ r.jsx(
                                    "feColorMatrix",
                                    {
                                      in: "SourceAlpha",
                                      type: "matrix",
                                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    }
                                  ),
                                  /* @__PURE__ */ r.jsx("feOffset", { dy: "4" }),
                                  /* @__PURE__ */ r.jsx("feGaussianBlur", { stdDeviation: "6" }),
                                  /* @__PURE__ */ r.jsx(
                                    "feColorMatrix",
                                    {
                                      type: "matrix",
                                      values: "0 0 0 0 0.51 0 0 0 0 0.125 0 0 0 0 1 0 0 0 0.15 0"
                                    }
                                  ),
                                  /* @__PURE__ */ r.jsx("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                                  /* @__PURE__ */ r.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })
                                ]
                              }
                            )
                          ] })
                        ]
                      }
                    ) }),
                    l === "solutions" && /* @__PURE__ */ r.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ r.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ r.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ r.jsx(
                            "circle",
                            {
                              cx: "200",
                              cy: "150",
                              r: "40",
                              fill: "#8220ff",
                              fillOpacity: "0.1",
                              stroke: "#8220ff",
                              strokeWidth: "2"
                            }
                          ),
                          /* @__PURE__ */ r.jsx("circle", { cx: "100", cy: "150", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "300", cy: "150", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "200", cy: "70", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "200", cy: "230", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ r.jsx("path", { d: "M125 150 L160 150", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ r.jsx("path", { d: "M240 150 L275 150", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ r.jsx("path", { d: "M200 95 L200 130", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ r.jsx("path", { d: "M200 170 L200 205", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ r.jsx("polygon", { points: "158,145 158,155 168,150", fill: "#8220ff" }),
                          /* @__PURE__ */ r.jsx("polygon", { points: "242,145 242,155 232,150", fill: "#8220ff" }),
                          /* @__PURE__ */ r.jsx("polygon", { points: "195,128 205,128 200,138", fill: "#8220ff" }),
                          /* @__PURE__ */ r.jsx("polygon", { points: "195,172 205,172 200,162", fill: "#8220ff" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "100", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "300", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "200", cy: "70", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "200", cy: "230", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "200", cy: "150", r: "20", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "200", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.4" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "150", cy: "100", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "250", cy: "100", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "150", cy: "200", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "250", cy: "200", r: "5", fill: "#8220ff", fillOpacity: "0.2" })
                        ]
                      }
                    ) }),
                    l === "resources" && /* @__PURE__ */ r.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ r.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ r.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ r.jsxs("g", { filter: "url(#resourcesShadow)", children: [
                            /* @__PURE__ */ r.jsx("rect", { x: "140", y: "80", width: "120", height: "140", rx: "4", fill: "url(#bookGradient)" }),
                            /* @__PURE__ */ r.jsx(
                              "rect",
                              {
                                x: "140",
                                y: "80",
                                width: "120",
                                height: "140",
                                rx: "4",
                                stroke: "#8220ff",
                                strokeWidth: "2",
                                fill: "none"
                              }
                            ),
                            /* @__PURE__ */ r.jsx("path", { d: "M160 100 L240 100", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ r.jsx("path", { d: "M160 120 L240 120", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ r.jsx("path", { d: "M160 140 L240 140", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ r.jsx("path", { d: "M160 160 L240 160", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ r.jsx("path", { d: "M160 180 L240 180", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ r.jsx("path", { d: "M230 80 L230 110 L220 100 L210 110 L210 80", fill: "#8220ff", fillOpacity: "0.3" }),
                            /* @__PURE__ */ r.jsxs("g", { transform: "translate(-10, -10) rotate(-5)", children: [
                              /* @__PURE__ */ r.jsx(
                                "rect",
                                {
                                  x: "80",
                                  y: "120",
                                  width: "80",
                                  height: "100",
                                  rx: "4",
                                  fill: "white",
                                  stroke: "#8220ff",
                                  strokeWidth: "1.5"
                                }
                              ),
                              /* @__PURE__ */ r.jsx("path", { d: "M90 135 L150 135", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ r.jsx("path", { d: "M90 150 L150 150", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ r.jsx("path", { d: "M90 165 L150 165", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ r.jsx("path", { d: "M90 180 L120 180", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" })
                            ] }),
                            /* @__PURE__ */ r.jsxs("g", { transform: "translate(10, -10) rotate(5)", children: [
                              /* @__PURE__ */ r.jsx(
                                "rect",
                                {
                                  x: "240",
                                  y: "120",
                                  width: "80",
                                  height: "60",
                                  rx: "4",
                                  fill: "#f0f0f5",
                                  stroke: "#8220ff",
                                  strokeWidth: "1.5"
                                }
                              ),
                              /* @__PURE__ */ r.jsx("polygon", { points: "270,140 290,150 270,160", fill: "#8220ff" }),
                              /* @__PURE__ */ r.jsx(
                                "rect",
                                {
                                  x: "245",
                                  y: "125",
                                  width: "70",
                                  height: "50",
                                  rx: "2",
                                  stroke: "#8220ff",
                                  strokeWidth: "1",
                                  fill: "none"
                                }
                              )
                            ] })
                          ] }),
                          /* @__PURE__ */ r.jsx("rect", { x: "80", y: "230", width: "240", height: "50", fill: "none" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "200", cy: "50", r: "15", fill: "#8220ff", fillOpacity: "0.1" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "200", cy: "50", r: "10", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "200", cy: "50", r: "5", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "150", cy: "60", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "250", cy: "60", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "120", cy: "150", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "280", cy: "150", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ r.jsxs("defs", { children: [
                            /* @__PURE__ */ r.jsxs(
                              "linearGradient",
                              {
                                id: "resourcesGradient",
                                x1: "0",
                                y1: "0",
                                x2: "400",
                                y2: "300",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#f5f5f7" }),
                                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#e8e8f0" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ r.jsxs(
                              "linearGradient",
                              {
                                id: "bookGradient",
                                x1: "140",
                                y1: "80",
                                x2: "260",
                                y2: "220",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#f0f0f5" }),
                                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#ffffff" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ r.jsx("filter", { id: "resourcesShadow", x: "-10%", y: "-10%", width: "120%", height: "120%", children: /* @__PURE__ */ r.jsx("feDropShadow", { dx: "2", dy: "4", stdDeviation: "4", floodColor: "#8220ff", floodOpacity: "0.2" }) })
                          ] })
                        ]
                      }
                    ) }),
                    l === "developers" && /* @__PURE__ */ r.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ r.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ r.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "20", y: "20", width: "280", height: "200", rx: "8", fill: "#1E1E1E" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "20", y: "20", width: "280", height: "30", rx: "8", fill: "#333333" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "40", cy: "35", r: "6", fill: "#FF5F56" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "60", cy: "35", r: "6", fill: "#FFBD2E" }),
                          /* @__PURE__ */ r.jsx("circle", { cx: "80", cy: "35", r: "6", fill: "#27C93F" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "40", y: "70", width: "120", height: "10", rx: "2", fill: "#9CDCFE", fillOpacity: "0.7" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "40", y: "90", width: "180", height: "10", rx: "2", fill: "#CE9178", fillOpacity: "0.7" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "60", y: "110", width: "200", height: "10", rx: "2", fill: "#6A9955", fillOpacity: "0.7" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "60", y: "130", width: "160", height: "10", rx: "2", fill: "#569CD6", fillOpacity: "0.7" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "40", y: "150", width: "140", height: "10", rx: "2", fill: "#DCDCAA", fillOpacity: "0.7" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "60", y: "170", width: "180", height: "10", rx: "2", fill: "#4EC9B0", fillOpacity: "0.7" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "40", y: "190", width: "160", height: "10", rx: "2", fill: "#C586C0", fillOpacity: "0.7" }),
                          /* @__PURE__ */ r.jsx("text", { x: "30", y: "75", fontSize: "10", fill: "#858585", children: "1" }),
                          /* @__PURE__ */ r.jsx("text", { x: "30", y: "95", fontSize: "10", fill: "#858585", children: "2" }),
                          /* @__PURE__ */ r.jsx("text", { x: "30", y: "115", fontSize: "10", fill: "#858585", children: "3" }),
                          /* @__PURE__ */ r.jsx("text", { x: "30", y: "135", fontSize: "10", fill: "#858585", children: "4" }),
                          /* @__PURE__ */ r.jsx("text", { x: "30", y: "155", fontSize: "10", fill: "#858585", children: "5" }),
                          /* @__PURE__ */ r.jsx("text", { x: "30", y: "175", fontSize: "10", fill: "#858585", children: "6" }),
                          /* @__PURE__ */ r.jsx("text", { x: "30", y: "195", fontSize: "10", fill: "#858585", children: "7" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "80", y: "130", width: "310", height: "130", rx: "8", fill: "#1E1E1E", filter: "url(#shadow)" }),
                          /* @__PURE__ */ r.jsx("rect", { x: "80", y: "130", width: "310", height: "25", rx: "8", fill: "#333333" }),
                          /* @__PURE__ */ r.jsx("text", { x: "235", y: "147", fontSize: "12", fill: "#FFFFFF", textAnchor: "middle", children: "Terminal" }),
                          /* @__PURE__ */ r.jsx("text", { x: "90", y: "170", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ git clone https://github.com/plexicus/plexicus-sdk.git" }),
                          /* @__PURE__ */ r.jsx("text", { x: "90", y: "185", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "Cloning into 'plexicus-sdk'..." }),
                          /* @__PURE__ */ r.jsx("text", { x: "90", y: "200", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "remote: Counting objects: 100% (1234/1234)" }),
                          /* @__PURE__ */ r.jsx("text", { x: "90", y: "215", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ cd plexicus-sdk && npm install" }),
                          /* @__PURE__ */ r.jsx("text", { x: "90", y: "230", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "added 1024 packages in 4.2s" }),
                          /* @__PURE__ */ r.jsx("text", { x: "90", y: "245", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ npm run dev" }),
                          /* @__PURE__ */ r.jsxs("g", { transform: "translate(320, 240) scale(0.8)", children: [
                            /* @__PURE__ */ r.jsx("circle", { cx: "0", cy: "0", r: "25", fill: "white" }),
                            /* @__PURE__ */ r.jsx(
                              "path",
                              {
                                d: "M0 -20c-11.046 0-20 8.954-20 20 0 8.837 5.732 16.338 13.678 18.98 1 .184 1.365-.434 1.365-.964 0-.476-.018-1.733-.027-3.4-5.564 1.21-6.736-2.68-6.736-2.68-.91-2.31-2.22-2.924-2.22-2.924-1.815-1.24.137-1.215.137-1.215 2.006.14 3.06 2.06 3.06 2.06 1.783 3.057 4.675 2.174 5.815 1.663.18-1.29.697-2.174 1.268-2.674-4.442-.505-9.112-2.22-9.112-9.87 0-2.18.78-3.964 2.06-5.36-.207-.505-.893-2.54.195-5.29 0 0 1.68-.538 5.5 2.05 1.595-.443 3.305-.665 5.005-.673 1.7.008 3.41.23 5.005.673 3.82-2.588 5.495-2.05 5.495-2.05 1.09 2.75.405 4.785.198 5.29 1.28 1.396 2.055 3.18 2.055 5.36 0 7.67-4.677 9.36-9.13 9.855.718.62 1.358 1.842 1.358 3.712 0 2.68-.024 4.84-.024 5.5 0 .535.36 1.16 1.375.964C14.275 16.33 20 8.83 20 0 20-11.046 11.046-20 0-20z",
                                fill: "#1B1F23",
                                transform: "translate(0, 0)"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsx("filter", { id: "shadow", x: "0", y: "0", width: "400", height: "300", filterUnits: "userSpaceOnUse", children: /* @__PURE__ */ r.jsx("feDropShadow", { dx: "2", dy: "4", stdDeviation: "3", floodColor: "#000000", floodOpacity: "0.3" }) }) })
                        ]
                      }
                    ) })
                  ] }) }),
                  /* @__PURE__ */ r.jsxs("div", { className: "bg-gray-50 rounded-lg p-4", children: [
                    /* @__PURE__ */ r.jsx("h3", { className: "text-xl font-bold text-[#8220ff]", children: $[l].title }),
                    /* @__PURE__ */ r.jsx("p", { className: "text-gray-700", children: l === "products" ? "Explore our product" : l === "solutions" ? "Explore our solutions" : "Explore our resources" })
                  ] })
                ] }),
                /* @__PURE__ */ r.jsx("div", { className: "w-full md:w-2/3", children: /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
                  $[l].items.filter((y) => l !== "resources" || !y.title.includes("vs.")).map((y, R) => /* @__PURE__ */ r.jsxs(
                    I,
                    {
                      href: y.href,
                      className: "flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group",
                      onClick: () => c(null),
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "w-12 h-12 bg-[#8220ff]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#8220ff]/20 transition-colors", children: y.icon }),
                        /* @__PURE__ */ r.jsxs("div", { children: [
                          /* @__PURE__ */ r.jsx("h4", { className: "font-semibold text-gray-900 group-hover:text-[#8220ff] transition-colors", children: y.title }),
                          /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: y.description })
                        ] })
                      ]
                    },
                    R
                  )),
                  l === "resources" && /* @__PURE__ */ r.jsx("div", { className: "col-span-1 sm:col-span-2 mt-4", children: /* @__PURE__ */ r.jsxs("div", { className: "bg-purple-50 p-4 rounded-lg border border-purple-100", children: [
                    /* @__PURE__ */ r.jsx("h3", { className: "text-sm font-medium text-purple-800 mb-3", children: "Compare Plexicus" }),
                    /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: $.resources.items.filter(
                      (y) => y.title === "Plexicus vs. ArmorCode" || y.title === "Plexicus vs. Apiiro" || y.title === "Plexicus vs. Legit Security"
                    ).map((y, R) => /* @__PURE__ */ r.jsxs(
                      I,
                      {
                        href: y.href,
                        className: "flex flex-col items-center p-3 rounded-lg bg-white hover:bg-purple-100 transition-colors text-center group",
                        onClick: () => c(null),
                        children: [
                          /* @__PURE__ */ r.jsx("div", { className: "w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-purple-200 transition-colors", children: ze.cloneElement(y.icon, {
                            className: "w-5 h-5 text-purple-700"
                          }) }),
                          /* @__PURE__ */ r.jsx("h4", { className: "font-medium text-sm text-gray-900 group-hover:text-purple-800 transition-colors", children: y.title })
                        ]
                      },
                      `compare-${R}`
                    )) })
                  ] }) })
                ] }) })
              ] }) })
            }
          )
        ] }),
        n && /* @__PURE__ */ r.jsx("div", { className: "fixed inset-0 bg-black/20 z-40 lg:hidden", onClick: () => a(!1) }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: `md:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${n ? "translate-x-0" : "translate-x-full"}`,
            style: { top: "64px", height: "calc(100vh - 64px)", overflow: "auto" },
            children: /* @__PURE__ */ r.jsx("div", { className: "overflow-y-auto h-full p-4 pb-20", children: /* @__PURE__ */ r.jsxs("div", { className: "space-y-4", children: [
              Object.entries($).map(([y, R]) => /* @__PURE__ */ r.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "font-semibold", children: R.title }),
                /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-1 gap-2", children: R.items.map((P, m) => /* @__PURE__ */ r.jsxs(
                  I,
                  {
                    href: P.href,
                    className: "flex items-center p-2 rounded-md bg-gray-50 hover:bg-gray-100",
                    onClick: () => a(!1),
                    children: [
                      /* @__PURE__ */ r.jsx("div", { className: "w-8 h-8 bg-primary/10 rounded-md mr-2 flex items-center justify-center", children: ze.cloneElement(P.icon, { width: 16, height: 16 }) }),
                      /* @__PURE__ */ r.jsx("span", { className: "text-sm", children: P.title })
                    ]
                  },
                  m
                )) })
              ] }, y)),
              /* @__PURE__ */ r.jsx(I, { href: `${k}${s}pricing`, className: "block py-2 text-sm font-medium", onClick: () => a(!1), children: d("nav.pricing") }),
              /* @__PURE__ */ r.jsx(I, { href: `${k}${s}contact`, className: "block py-2 text-sm font-medium", onClick: () => a(!1), children: d("nav.contact") }),
              /* @__PURE__ */ r.jsx("div", { className: "pt-4 border-t border-gray-100", children: /* @__PURE__ */ r.jsx(Be, { className: "w-full bg-gradient-primary", onClick: () => a(!1), children: "Get Started" }) })
            ] }) })
          }
        )
      ]
    }
  );
};
function dr() {
  var t;
  const i = (s) => {
    localStorage.setItem("scrollPosition", String(window == null ? void 0 : window.scrollY));
    const o = window.location.pathname;
    let a = o.match(/^\/([a-z]{2})\//) ? o.replace(/^\/[a-z]{2}\//, `/${s}/`) : `/${s}${o}`;
    a = a.startsWith("/en/") ? a.replace(/^\/en/, "") : a, console.log({ newPath: a }), window.location.href = a;
  };
  se(() => {
    const s = localStorage.getItem("scrollPosition");
    s && (window.scrollTo(0, parseInt(s)), localStorage.removeItem("scrollPosition"));
  }, []);
  const e = ((t = window.location.pathname.match(/^\/([a-z]{2})\//)) == null ? void 0 : t[1]) || "en";
  return /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsxs("div", { className: "relative inline-flex items-center w-[150px]", children: [
    /* @__PURE__ */ r.jsx(Dt, { className: "absolute  text-muted-foreground pointer-events-none", style: { left: 1, paddingLeft: 6, width: 22 } }),
    /* @__PURE__ */ r.jsxs(
      "select",
      {
        defaultValue: e,
        className: "appearance-none w-full  pr-6 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring dark:bg-gray-900 dark:text-white dark:border-gray-700",
        style: { paddingLeft: 30 },
        onChange: (s) => i(s.target.value),
        children: [
          /* @__PURE__ */ r.jsx("option", { value: "en", children: "English" }),
          /* @__PURE__ */ r.jsx("option", { value: "es", children: "Spanish" }),
          /* @__PURE__ */ r.jsx("option", { value: "it", children: "Italian" })
        ]
      }
    ),
    /* @__PURE__ */ r.jsx(
      "svg",
      {
        className: "pointer-events-none absolute  top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        style: { right: 3, marginRight: 4 },
        children: /* @__PURE__ */ r.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" })
      }
    )
  ] }) });
}
function pr({ lang: i, fullSiteUrl: e = "http://localhost:8000", fullBlogUrl: t = "http://localhost:9000" }) {
  const [s, o] = de("/"), { t: n, i18n: a } = Mt();
  se(() => {
    a.changeLanguage(i), o(i !== "en" ? `/${i}/` : "/");
  }, []);
  const l = Ne(e, It), c = Ne(t, Ft);
  return /* @__PURE__ */ r.jsx("footer", { className: "bg-gray-50 border-t border-gray-200", children: /* @__PURE__ */ r.jsxs("div", { className: "container mx-auto px-4 md:px-6 pt-12 pb-6", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-5", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ r.jsx(I, { href: `${l}${s}`, className: "flex items-center gap-2 mb-4", children: /* @__PURE__ */ r.jsx("img", { src: "/images/plexicus-logo-color.png", alt: "Plexicus ASPM", className: "h-10 w-auto" }) }),
        /* @__PURE__ */ r.jsx("p", { className: "text-gray-600 mb-4 max-w-sm", children: n("footer.tagline") }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ r.jsxs("a", { href: "#", className: "text-gray-400 hover:text-gray-500", children: [
            /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: n("footer.social_media.twitter") }),
            /* @__PURE__ */ r.jsx("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("path", { d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" }) })
          ] }),
          /* @__PURE__ */ r.jsxs("a", { href: "#", className: "text-gray-400 hover:text-gray-500", children: [
            /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: n("footer.social_media.linkedin") }),
            /* @__PURE__ */ r.jsx("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
                clipRule: "evenodd"
              }
            ) })
          ] }),
          /* @__PURE__ */ r.jsxs("a", { href: "https://github.com/apps/plexicus", className: "text-gray-400 hover:text-gray-500", children: [
            /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: n("footer.social_media.github") }),
            /* @__PURE__ */ r.jsx("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                clipRule: "evenodd"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "mt-6", children: /* @__PURE__ */ r.jsx(dr, {}) })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("h3", { className: "text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4", children: n("footer.sections.products.title") }),
        /* @__PURE__ */ r.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(I, { href: `${l}${s}aspm-overview`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.products.links.aspm_overview") }) }),
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(I, { href: `${l}${s}benefits`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.products.links.benefits") }) }),
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(I, { href: `${l}${s}use-cases`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.products.links.use_cases") }) }),
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(I, { href: `${l}${s}pricing`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.products.links.pricing") }) })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("h3", { className: "text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4", children: n("footer.sections.resources.title") }),
        /* @__PURE__ */ r.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(I, { href: `${c}`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.resources.links.blog") }) }),
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(I, { href: "https://docs.plexicus.com/", className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.resources.links.documentation") }) }),
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(I, { href: `${l}${s}case-studies`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.resources.links.case_studies") }) }),
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(I, { href: `${l}${s}security-resources`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.resources.links.security_resources") }) })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("h3", { className: "text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4", children: n("footer.sections.company.title") }),
        /* @__PURE__ */ r.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(I, { href: `${l}${s}about`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.company.links.about_us") }) }),
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(I, { href: `${l}${s}contact`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.company.links.contact") }) }),
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(I, { href: `${l}${s}careers`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.company.links.careers") }) }),
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(I, { href: `${l}${s}privacy`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.company.links.privacy_policy") }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "mt-8 pt-6 border-t border-gray-200", children: /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
      /* @__PURE__ */ r.jsxs("p", { className: "text-gray-500 text-sm", children: [
        "© 2025 PLEXICUS, LLC.",
        " ",
        /* @__PURE__ */ r.jsx(I, { href: `${l}${s}privacy`, className: "underline hover:text-gray-700", children: n("footer.policies.privacy_policy") }),
        " ",
        "·",
        " ",
        /* @__PURE__ */ r.jsx(I, { href: `${l}${s}management`, className: "underline hover:text-gray-700", children: n("footer.policies.management_policy") }),
        " ",
        "·",
        " ",
        /* @__PURE__ */ r.jsx(I, { href: `${l}${s}legal`, className: "underline hover:text-gray-700", children: n("footer.policies.legal_notice") })
      ] }),
      /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsxs("div", { className: "inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full border border-green-200", children: [
        /* @__PURE__ */ r.jsx("svg", { className: "w-4 h-4 mr-1", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ r.jsx(
          "path",
          {
            d: "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ) }),
        n("footer.readiness")
      ] }) })
    ] }) })
  ] }) });
}
export {
  pr as FooterPlexicus,
  fr as NavbarPlexicus,
  dr as SelectLanguage
};
