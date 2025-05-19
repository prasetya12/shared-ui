import * as At from "react";
import Ie, { createContext as It, useContext as $t, useCallback as Se, useState as Ce, useRef as Le, useEffect as ie } from "react";
import { Globe as zt } from "lucide-react";
var be = { exports: {} }, fe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function _t() {
  if (Ge) return fe;
  Ge = 1;
  var n = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(r, i, o) {
    var a = null;
    if (o !== void 0 && (a = "" + o), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      o = {};
      for (var l in i)
        l !== "key" && (o[l] = i[l]);
    } else o = i;
    return i = o.ref, {
      $$typeof: n,
      type: r,
      key: a,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return fe.Fragment = e, fe.jsx = t, fe.jsxs = t, fe;
}
var pe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Ft() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && function() {
    function n(p) {
      if (p == null) return null;
      if (typeof p == "function")
        return p.$$typeof === R ? null : p.displayName || p.name || null;
      if (typeof p == "string") return p;
      switch (p) {
        case f:
          return "Fragment";
        case E:
          return "Profiler";
        case k:
          return "StrictMode";
        case _:
          return "Suspense";
        case H:
          return "SuspenseList";
        case N:
          return "Activity";
      }
      if (typeof p == "object")
        switch (typeof p.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), p.$$typeof) {
          case g:
            return "Portal";
          case $:
            return (p.displayName || "Context") + ".Provider";
          case P:
            return (p._context.displayName || "Context") + ".Consumer";
          case M:
            var j = p.render;
            return p = p.displayName, p || (p = j.displayName || j.name || "", p = p !== "" ? "ForwardRef(" + p + ")" : "ForwardRef"), p;
          case F:
            return j = p.displayName || null, j !== null ? j : n(p.type) || "Memo";
          case y:
            j = p._payload, p = p._init;
            try {
              return n(p(j));
            } catch {
            }
        }
      return null;
    }
    function e(p) {
      return "" + p;
    }
    function t(p) {
      try {
        e(p);
        var j = !1;
      } catch {
        j = !0;
      }
      if (j) {
        j = console;
        var O = j.error, L = typeof Symbol == "function" && Symbol.toStringTag && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return O.call(
          j,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          L
        ), e(p);
      }
    }
    function r(p) {
      if (p === f) return "<>";
      if (typeof p == "object" && p !== null && p.$$typeof === y)
        return "<...>";
      try {
        var j = n(p);
        return j ? "<" + j + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var p = U.A;
      return p === null ? null : p.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function a(p) {
      if (Q.call(p, "key")) {
        var j = Object.getOwnPropertyDescriptor(p, "key").get;
        if (j && j.isReactWarning) return !1;
      }
      return p.key !== void 0;
    }
    function l(p, j) {
      function O() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          j
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(p, "key", {
        get: O,
        configurable: !0
      });
    }
    function c() {
      var p = n(this.type);
      return I[p] || (I[p] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), p = this.props.ref, p !== void 0 ? p : null;
    }
    function d(p, j, O, L, T, G, oe, z) {
      return O = G.ref, p = {
        $$typeof: x,
        type: p,
        key: j,
        props: G,
        _owner: T
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(p, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(p, "ref", { enumerable: !1, value: null }), p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(p, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(p, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.defineProperty(p, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    }
    function u(p, j, O, L, T, G, oe, z) {
      var W = j.children;
      if (W !== void 0)
        if (L)
          if (Y(W)) {
            for (L = 0; L < W.length; L++)
              h(W[L]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(W);
      if (Q.call(j, "key")) {
        W = n(p);
        var q = Object.keys(j).filter(function(he) {
          return he !== "key";
        });
        L = 0 < q.length ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}", X[W + L] || (q = 0 < q.length ? "{" + q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          L,
          W,
          q,
          W
        ), X[W + L] = !0);
      }
      if (W = null, O !== void 0 && (t(O), W = "" + O), a(j) && (t(j.key), W = "" + j.key), "key" in j) {
        O = {};
        for (var te in j)
          te !== "key" && (O[te] = j[te]);
      } else O = j;
      return W && l(
        O,
        typeof p == "function" ? p.displayName || p.name || "Unknown" : p
      ), d(
        p,
        W,
        G,
        T,
        i(),
        O,
        oe,
        z
      );
    }
    function h(p) {
      typeof p == "object" && p !== null && p.$$typeof === x && p._store && (p._store.validated = 1);
    }
    var m = Ie, x = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), $ = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), N = Symbol.for("react.activity"), R = Symbol.for("react.client.reference"), U = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, Y = Array.isArray, V = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      "react-stack-bottom-frame": function(p) {
        return p();
      }
    };
    var J, I = {}, B = m["react-stack-bottom-frame"].bind(
      m,
      o
    )(), v = V(r(o)), X = {};
    pe.Fragment = f, pe.jsx = function(p, j, O, L, T) {
      var G = 1e4 > U.recentlyCreatedOwnerStacks++;
      return u(
        p,
        j,
        O,
        !1,
        L,
        T,
        G ? Error("react-stack-top-frame") : B,
        G ? V(r(p)) : v
      );
    }, pe.jsxs = function(p, j, O, L, T) {
      var G = 1e4 > U.recentlyCreatedOwnerStacks++;
      return u(
        p,
        j,
        O,
        !0,
        L,
        T,
        G ? Error("react-stack-top-frame") : B,
        G ? V(r(p)) : v
      );
    };
  }()), pe;
}
var Ke;
function Bt() {
  return Ke || (Ke = 1, process.env.NODE_ENV === "production" ? be.exports = _t() : be.exports = Ft()), be.exports;
}
var s = Bt();
function gt(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number") r += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var i = n.length;
    for (e = 0; e < i; e++) n[e] && (t = gt(n[e])) && (r && (r += " "), r += t);
  } else for (t in n) n[t] && (r && (r += " "), r += t);
  return r;
}
function mt() {
  for (var n, e, t = 0, r = "", i = arguments.length; t < i; t++) (n = arguments[t]) && (e = gt(n)) && (r && (r += " "), r += e);
  return r;
}
const Ye = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, Je = mt, Vt = (n, e) => (t) => {
  var r;
  if ((e == null ? void 0 : e.variants) == null) return Je(n, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: i, defaultVariants: o } = e, a = Object.keys(i).map((d) => {
    const u = t == null ? void 0 : t[d], h = o == null ? void 0 : o[d];
    if (u === null) return null;
    const m = Ye(u) || Ye(h);
    return i[d][m];
  }), l = t && Object.entries(t).reduce((d, u) => {
    let [h, m] = u;
    return m === void 0 || (d[h] = m), d;
  }, {}), c = e == null || (r = e.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, u) => {
    let { class: h, className: m, ...x } = u;
    return Object.entries(x).every((g) => {
      let [f, k] = g;
      return Array.isArray(k) ? k.includes({
        ...o,
        ...l
      }[f]) : {
        ...o,
        ...l
      }[f] === k;
    }) ? [
      ...d,
      h,
      m
    ] : d;
  }, []);
  return Je(n, a, c, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, Ue = "-", Wt = (n) => {
  const e = Ut(n), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = n;
  return {
    getClassGroupId: (a) => {
      const l = a.split(Ue);
      return l[0] === "" && l.length !== 1 && l.shift(), xt(l, e) || Dt(a);
    },
    getConflictingClassGroupIds: (a, l) => {
      const c = t[a] || [];
      return l && r[a] ? [...c, ...r[a]] : c;
    }
  };
}, xt = (n, e) => {
  var a;
  if (n.length === 0)
    return e.classGroupId;
  const t = n[0], r = e.nextPart.get(t), i = r ? xt(n.slice(1), r) : void 0;
  if (i)
    return i;
  if (e.validators.length === 0)
    return;
  const o = n.join(Ue);
  return (a = e.validators.find(({
    validator: l
  }) => l(o))) == null ? void 0 : a.classGroupId;
}, qe = /^\[(.+)\]$/, Dt = (n) => {
  if (qe.test(n)) {
    const e = qe.exec(n)[1], t = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, Ut = (n) => {
  const {
    theme: e,
    classGroups: t
  } = n, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const i in t)
    $e(t[i], r, i, e);
  return r;
}, $e = (n, e, t, r) => {
  n.forEach((i) => {
    if (typeof i == "string") {
      const o = i === "" ? e : Xe(e, i);
      o.classGroupId = t;
      return;
    }
    if (typeof i == "function") {
      if (Gt(i)) {
        $e(i(r), e, t, r);
        return;
      }
      e.validators.push({
        validator: i,
        classGroupId: t
      });
      return;
    }
    Object.entries(i).forEach(([o, a]) => {
      $e(a, Xe(e, o), t, r);
    });
  });
}, Xe = (n, e) => {
  let t = n;
  return e.split(Ue).forEach((r) => {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}, Gt = (n) => n.isThemeGetter, Ht = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const i = (o, a) => {
    t.set(o, a), e++, e > n && (e = 0, r = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let a = t.get(o);
      if (a !== void 0)
        return a;
      if ((a = r.get(o)) !== void 0)
        return i(o, a), a;
    },
    set(o, a) {
      t.has(o) ? t.set(o, a) : i(o, a);
    }
  };
}, ze = "!", _e = ":", Kt = _e.length, Yt = (n) => {
  const {
    prefix: e,
    experimentalParseClassName: t
  } = n;
  let r = (i) => {
    const o = [];
    let a = 0, l = 0, c = 0, d;
    for (let g = 0; g < i.length; g++) {
      let f = i[g];
      if (a === 0 && l === 0) {
        if (f === _e) {
          o.push(i.slice(c, g)), c = g + Kt;
          continue;
        }
        if (f === "/") {
          d = g;
          continue;
        }
      }
      f === "[" ? a++ : f === "]" ? a-- : f === "(" ? l++ : f === ")" && l--;
    }
    const u = o.length === 0 ? i : i.substring(c), h = Jt(u), m = h !== u, x = d && d > c ? d - c : void 0;
    return {
      modifiers: o,
      hasImportantModifier: m,
      baseClassName: h,
      maybePostfixModifierPosition: x
    };
  };
  if (e) {
    const i = e + _e, o = r;
    r = (a) => a.startsWith(i) ? o(a.substring(i.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (t) {
    const i = r;
    r = (o) => t({
      className: o,
      parseClassName: i
    });
  }
  return r;
}, Jt = (n) => n.endsWith(ze) ? n.substring(0, n.length - 1) : n.startsWith(ze) ? n.substring(1) : n, qt = (n) => {
  const e = Object.fromEntries(n.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const i = [];
    let o = [];
    return r.forEach((a) => {
      a[0] === "[" || e[a] ? (i.push(...o.sort(), a), o = []) : o.push(a);
    }), i.push(...o.sort()), i;
  };
}, Xt = (n) => ({
  cache: Ht(n.cacheSize),
  parseClassName: Yt(n),
  sortModifiers: qt(n),
  ...Wt(n)
}), Zt = /\s+/, Qt = (n, e) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: i,
    sortModifiers: o
  } = e, a = [], l = n.trim().split(Zt);
  let c = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const u = l[d], {
      isExternal: h,
      modifiers: m,
      hasImportantModifier: x,
      baseClassName: g,
      maybePostfixModifierPosition: f
    } = t(u);
    if (h) {
      c = u + (c.length > 0 ? " " + c : c);
      continue;
    }
    let k = !!f, E = r(k ? g.substring(0, f) : g);
    if (!E) {
      if (!k) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (E = r(g), !E) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      k = !1;
    }
    const P = o(m).join(":"), $ = x ? P + ze : P, M = $ + E;
    if (a.includes(M))
      continue;
    a.push(M);
    const _ = i(E, k);
    for (let H = 0; H < _.length; ++H) {
      const F = _[H];
      a.push($ + F);
    }
    c = u + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function er() {
  let n = 0, e, t, r = "";
  for (; n < arguments.length; )
    (e = arguments[n++]) && (t = yt(e)) && (r && (r += " "), r += t);
  return r;
}
const yt = (n) => {
  if (typeof n == "string")
    return n;
  let e, t = "";
  for (let r = 0; r < n.length; r++)
    n[r] && (e = yt(n[r])) && (t && (t += " "), t += e);
  return t;
};
function tr(n, ...e) {
  let t, r, i, o = a;
  function a(c) {
    const d = e.reduce((u, h) => h(u), n());
    return t = Xt(d), r = t.cache.get, i = t.cache.set, o = l, l(c);
  }
  function l(c) {
    const d = r(c);
    if (d)
      return d;
    const u = Qt(c, t);
    return i(c, u), u;
  }
  return function() {
    return o(er.apply(null, arguments));
  };
}
const D = (n) => {
  const e = (t) => t[n] || [];
  return e.isThemeGetter = !0, e;
}, wt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, bt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, rr = /^\d+\/\d+$/, sr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ir = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, nr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, or = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ar = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ae = (n) => rr.test(n), C = (n) => !!n && !Number.isNaN(Number(n)), re = (n) => !!n && Number.isInteger(Number(n)), Me = (n) => n.endsWith("%") && C(n.slice(0, -1)), ee = (n) => sr.test(n), lr = () => !0, cr = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ir.test(n) && !nr.test(n)
), vt = () => !1, dr = (n) => or.test(n), ur = (n) => ar.test(n), hr = (n) => !w(n) && !b(n), fr = (n) => de(n, St, vt), w = (n) => wt.test(n), se = (n) => de(n, Ct, cr), Te = (n) => de(n, yr, C), Ze = (n) => de(n, jt, vt), pr = (n) => de(n, kt, ur), ve = (n) => de(n, Lt, dr), b = (n) => bt.test(n), ge = (n) => ue(n, Ct), gr = (n) => ue(n, wr), Qe = (n) => ue(n, jt), mr = (n) => ue(n, St), xr = (n) => ue(n, kt), je = (n) => ue(n, Lt, !0), de = (n, e, t) => {
  const r = wt.exec(n);
  return r ? r[1] ? e(r[1]) : t(r[2]) : !1;
}, ue = (n, e, t = !1) => {
  const r = bt.exec(n);
  return r ? r[1] ? e(r[1]) : t : !1;
}, jt = (n) => n === "position" || n === "percentage", kt = (n) => n === "image" || n === "url", St = (n) => n === "length" || n === "size" || n === "bg-size", Ct = (n) => n === "length", yr = (n) => n === "number", wr = (n) => n === "family-name", Lt = (n) => n === "shadow", br = () => {
  const n = D("color"), e = D("font"), t = D("text"), r = D("font-weight"), i = D("tracking"), o = D("leading"), a = D("breakpoint"), l = D("container"), c = D("spacing"), d = D("radius"), u = D("shadow"), h = D("inset-shadow"), m = D("text-shadow"), x = D("drop-shadow"), g = D("blur"), f = D("perspective"), k = D("aspect"), E = D("ease"), P = D("animate"), $ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], M = () => [
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
  ], _ = () => [...M(), b, w], H = () => ["auto", "hidden", "clip", "visible", "scroll"], F = () => ["auto", "contain", "none"], y = () => [b, w, c], N = () => [ae, "full", "auto", ...y()], R = () => [re, "none", "subgrid", b, w], U = () => ["auto", {
    span: ["full", re, b, w]
  }, re, b, w], Q = () => [re, "auto", b, w], Y = () => ["auto", "min", "max", "fr", b, w], V = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], J = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], I = () => ["auto", ...y()], B = () => [ae, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...y()], v = () => [n, b, w], X = () => [...M(), Qe, Ze, {
    position: [b, w]
  }], p = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], j = () => ["auto", "cover", "contain", mr, fr, {
    size: [b, w]
  }], O = () => [Me, ge, se], L = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    b,
    w
  ], T = () => ["", C, ge, se], G = () => ["solid", "dashed", "dotted", "double"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], z = () => [C, Me, Qe, Ze], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    g,
    b,
    w
  ], q = () => ["none", C, b, w], te = () => ["none", C, b, w], he = () => [C, b, w], we = () => [ae, "full", ...y()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ee],
      breakpoint: [ee],
      color: [lr],
      container: [ee],
      "drop-shadow": [ee],
      ease: ["in", "out", "in-out"],
      font: [hr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ee],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ee],
      shadow: [ee],
      spacing: ["px", C],
      text: [ee],
      "text-shadow": [ee],
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
        aspect: ["auto", "square", ae, w, b, k]
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
        columns: [C, w, b, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": $()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": $()
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
        object: _()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: H()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": H()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": H()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: F()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": F()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": F()
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
        inset: N()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": N()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": N()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: N()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: N()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: N()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: N()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: N()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: N()
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
        z: [re, "auto", b, w]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ae, "full", "auto", l, ...y()]
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
        flex: [C, ae, "auto", "initial", "none", w]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", C, b, w]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", C, b, w]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [re, "first", "last", "none", b, w]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": R()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: U()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Q()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Q()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": R()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: U()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Q()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Q()
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
        "auto-cols": Y()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Y()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: y()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": y()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": y()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...V(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...J(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...J()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...V()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...J(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...J(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": V()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...J(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...J()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: y()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: y()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: y()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: y()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: y()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: y()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: y()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: y()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: y()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: I()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: I()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: I()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: I()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: I()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: I()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: I()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: I()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: I()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": y()
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
        "space-y": y()
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
        size: B()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...B()]
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
          ...B()
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
          ...B()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...B()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...B()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...B()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, ge, se]
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
        font: [r, b, Te]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Me, w]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [gr, w, e]
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
        tracking: [i, b, w]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [C, "none", b, Te]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...y()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", b, w]
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
        list: ["disc", "decimal", "none", b, w]
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
        placeholder: v()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: v()
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
        decoration: [...G(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [C, "from-font", "auto", b, se]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: v()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [C, "auto", b, w]
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
        indent: y()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", b, w]
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
        content: ["none", b, w]
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
        bg: X()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: p()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: j()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, re, b, w],
          radial: ["", b, w],
          conic: [re, b, w]
        }, xr, pr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: v()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: O()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: O()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: O()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: v()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: v()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: v()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: L()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": L()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": L()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": L()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": L()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": L()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": L()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": L()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": L()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": L()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": L()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": L()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": L()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": L()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": L()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: T()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": T()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": T()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": T()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": T()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": T()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": T()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": T()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": T()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": T()
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
        "divide-y": T()
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
        border: [...G(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...G(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: v()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": v()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": v()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": v()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": v()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": v()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": v()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": v()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": v()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: v()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...G(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [C, b, w]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", C, ge, se]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: v()
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
          u,
          je,
          ve
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: v()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", h, je, ve]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": v()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: T()
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
        ring: v()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [C, se]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": v()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": T()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": v()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, je, ve]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": v()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [C, b, w]
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
        "mask-linear": [C]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": z()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": z()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": v()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": v()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": z()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": z()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": v()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": v()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": z()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": z()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": v()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": v()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": z()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": z()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": v()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": v()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": z()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": z()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": v()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": v()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": z()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": z()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": v()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": v()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": z()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": z()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": v()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": v()
      }],
      "mask-image-radial": [{
        "mask-radial": [b, w]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": z()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": z()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": v()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": v()
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
        "mask-radial-at": M()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [C]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": z()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": z()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": v()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": v()
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
        mask: X()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: p()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: j()
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
        mask: ["none", b, w]
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
          b,
          w
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: W()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [C, b, w]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [C, b, w]
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
          x,
          je,
          ve
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": v()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", C, b, w]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [C, b, w]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", C, b, w]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [C, b, w]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", C, b, w]
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
          b,
          w
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": W()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [C, b, w]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [C, b, w]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", C, b, w]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [C, b, w]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", C, b, w]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [C, b, w]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [C, b, w]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", C, b, w]
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
        "border-spacing": y()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": y()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": y()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", b, w]
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
        duration: [C, "initial", b, w]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", E, b, w]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [C, b, w]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", P, b, w]
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
        perspective: [f, b, w]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": _()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: q()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": q()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": q()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": q()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: te()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": te()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": te()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": te()
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
        skew: he()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": he()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": he()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [b, w, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: _()
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
        accent: v()
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
        caret: v()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", b, w]
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
        "scroll-m": y()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": y()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": y()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": y()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": y()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": y()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": y()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": y()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": y()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": y()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": y()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": y()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": y()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": y()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": y()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": y()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": y()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": y()
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
        "will-change": ["auto", "scroll", "contents", "transform", b, w]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...v()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [C, ge, se, Te]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...v()]
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
}, vr = /* @__PURE__ */ tr(br);
function jr(...n) {
  return vr(mt(n));
}
const kr = Vt(
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
), Fe = At.forwardRef(
  ({ className: n, variant: e, size: t, asChild: r = !1, ...i }, o) => /* @__PURE__ */ s.jsx("button", { className: jr(kr({ variant: e, size: t, className: n })), ref: o, ...i })
);
Fe.displayName = "Button";
const A = ({ href: n, children: e, className: t = "", target: r = "_self", rel: i = "noopener noreferrer", onClick: o }) => {
  const a = (l) => {
    r !== "_blank" && (l.preventDefault(), window.location.href = n), o && o(l);
  };
  return /* @__PURE__ */ s.jsx(
    "a",
    {
      href: n,
      className: t,
      target: r,
      rel: i,
      onClick: a,
      "aria-label": typeof e == "string" ? e : void 0,
      children: e
    }
  );
}, Sr = (n, e, t, r) => {
  var o, a, l, c;
  const i = [t, {
    code: e,
    ...r || {}
  }];
  if ((a = (o = n == null ? void 0 : n.services) == null ? void 0 : o.logger) != null && a.forward)
    return n.services.logger.forward(i, "warn", "react-i18next::", !0);
  ne(i[0]) && (i[0] = `react-i18next:: ${i[0]}`), (c = (l = n == null ? void 0 : n.services) == null ? void 0 : l.logger) != null && c.warn ? n.services.logger.warn(...i) : console != null && console.warn && console.warn(...i);
}, et = {}, Be = (n, e, t, r) => {
  ne(t) && et[t] || (ne(t) && (et[t] = /* @__PURE__ */ new Date()), Sr(n, e, t, r));
}, Nt = (n, e) => () => {
  if (n.isInitialized)
    e();
  else {
    const t = () => {
      setTimeout(() => {
        n.off("initialized", t);
      }, 0), e();
    };
    n.on("initialized", t);
  }
}, Ve = (n, e, t) => {
  n.loadNamespaces(e, Nt(n, t));
}, tt = (n, e, t, r) => {
  if (ne(t) && (t = [t]), n.options.preload && n.options.preload.indexOf(e) > -1) return Ve(n, t, r);
  t.forEach((i) => {
    n.options.ns.indexOf(i) < 0 && n.options.ns.push(i);
  }), n.loadLanguages(e, Nt(n, r));
}, Cr = (n, e, t = {}) => !e.languages || !e.languages.length ? (Be(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: e.languages
}), !0) : e.hasLoadedNamespace(n, {
  lng: t.lng,
  precheck: (r, i) => {
    var o;
    if (((o = t.bindI18n) == null ? void 0 : o.indexOf("languageChanging")) > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !i(r.isLanguageChangingTo, n)) return !1;
  }
}), ne = (n) => typeof n == "string", Lr = (n) => typeof n == "object" && n !== null, Nr = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Or = {
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
}, Rr = (n) => Or[n], Pr = (n) => n.replace(Nr, Rr);
let We = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Pr
};
const Er = (n = {}) => {
  We = {
    ...We,
    ...n
  };
}, Mr = () => We;
let Ot;
const Tr = (n) => {
  Ot = n;
}, Ar = () => Ot, Ir = {
  type: "3rdParty",
  init(n) {
    Er(n.options.react), Tr(n);
  }
}, $r = It();
class zr {
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
const _r = (n, e) => {
  const t = Le();
  return ie(() => {
    t.current = n;
  }, [n, e]), t.current;
}, Rt = (n, e, t, r) => n.getFixedT(e, t, r), Fr = (n, e, t, r) => Se(Rt(n, e, t, r), [n, e, t, r]), Br = (n, e = {}) => {
  var M, _, H, F;
  const {
    i18n: t
  } = e, {
    i18n: r,
    defaultNS: i
  } = $t($r) || {}, o = t || r || Ar();
  if (o && !o.reportNamespaces && (o.reportNamespaces = new zr()), !o) {
    Be(o, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const y = (R, U) => ne(U) ? U : Lr(U) && ne(U.defaultValue) ? U.defaultValue : Array.isArray(R) ? R[R.length - 1] : R, N = [y, {}, !1];
    return N.t = y, N.i18n = {}, N.ready = !1, N;
  }
  (M = o.options.react) != null && M.wait && Be(o, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const a = {
    ...Mr(),
    ...o.options.react,
    ...e
  }, {
    useSuspense: l,
    keyPrefix: c
  } = a;
  let d = i || ((_ = o.options) == null ? void 0 : _.defaultNS);
  d = ne(d) ? [d] : d || ["translation"], (F = (H = o.reportNamespaces).addUsedNamespaces) == null || F.call(H, d);
  const u = (o.isInitialized || o.initializedStoreOnce) && d.every((y) => Cr(y, o, a)), h = Fr(o, e.lng || null, a.nsMode === "fallback" ? d : d[0], c), m = () => h, x = () => Rt(o, e.lng || null, a.nsMode === "fallback" ? d : d[0], c), [g, f] = Ce(m);
  let k = d.join();
  e.lng && (k = `${e.lng}${k}`);
  const E = _r(k), P = Le(!0);
  ie(() => {
    const {
      bindI18n: y,
      bindI18nStore: N
    } = a;
    P.current = !0, !u && !l && (e.lng ? tt(o, e.lng, d, () => {
      P.current && f(x);
    }) : Ve(o, d, () => {
      P.current && f(x);
    })), u && E && E !== k && P.current && f(x);
    const R = () => {
      P.current && f(x);
    };
    return y && (o == null || o.on(y, R)), N && (o == null || o.store.on(N, R)), () => {
      P.current = !1, o && (y == null || y.split(" ").forEach((U) => o.off(U, R))), N && o && N.split(" ").forEach((U) => o.store.off(U, R));
    };
  }, [o, k]), ie(() => {
    P.current && u && f(m);
  }, [o, c, u]);
  const $ = [g, o, u];
  if ($.t = g, $.i18n = o, $.ready = u, u || !u && !l) return $;
  throw new Promise((y) => {
    e.lng ? tt(o, e.lng, d, () => y()) : Ve(o, d, () => y());
  });
}, S = (n) => typeof n == "string", me = () => {
  let n, e;
  const t = new Promise((r, i) => {
    n = r, e = i;
  });
  return t.resolve = n, t.reject = e, t;
}, rt = (n) => n == null ? "" : "" + n, Vr = (n, e, t) => {
  n.forEach((r) => {
    e[r] && (t[r] = e[r]);
  });
}, Wr = /###/g, st = (n) => n && n.indexOf("###") > -1 ? n.replace(Wr, ".") : n, it = (n) => !n || S(n), xe = (n, e, t) => {
  const r = S(e) ? e.split(".") : e;
  let i = 0;
  for (; i < r.length - 1; ) {
    if (it(n)) return {};
    const o = st(r[i]);
    !n[o] && t && (n[o] = new t()), Object.prototype.hasOwnProperty.call(n, o) ? n = n[o] : n = {}, ++i;
  }
  return it(n) ? {} : {
    obj: n,
    k: st(r[i])
  };
}, nt = (n, e, t) => {
  const {
    obj: r,
    k: i
  } = xe(n, e, Object);
  if (r !== void 0 || e.length === 1) {
    r[i] = t;
    return;
  }
  let o = e[e.length - 1], a = e.slice(0, e.length - 1), l = xe(n, a, Object);
  for (; l.obj === void 0 && a.length; )
    o = `${a[a.length - 1]}.${o}`, a = a.slice(0, a.length - 1), l = xe(n, a, Object), l != null && l.obj && typeof l.obj[`${l.k}.${o}`] < "u" && (l.obj = void 0);
  l.obj[`${l.k}.${o}`] = t;
}, Dr = (n, e, t, r) => {
  const {
    obj: i,
    k: o
  } = xe(n, e, Object);
  i[o] = i[o] || [], i[o].push(t);
}, Ne = (n, e) => {
  const {
    obj: t,
    k: r
  } = xe(n, e);
  if (t && Object.prototype.hasOwnProperty.call(t, r))
    return t[r];
}, Ur = (n, e, t) => {
  const r = Ne(n, t);
  return r !== void 0 ? r : Ne(e, t);
}, Pt = (n, e, t) => {
  for (const r in e)
    r !== "__proto__" && r !== "constructor" && (r in n ? S(n[r]) || n[r] instanceof String || S(e[r]) || e[r] instanceof String ? t && (n[r] = e[r]) : Pt(n[r], e[r], t) : n[r] = e[r]);
  return n;
}, le = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Gr = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Hr = (n) => S(n) ? n.replace(/[&<>"'\/]/g, (e) => Gr[e]) : n;
class Kr {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const r = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, r), this.regExpQueue.push(e), r;
  }
}
const Yr = [" ", ",", "?", "!", ";"], Jr = new Kr(20), qr = (n, e, t) => {
  e = e || "", t = t || "";
  const r = Yr.filter((a) => e.indexOf(a) < 0 && t.indexOf(a) < 0);
  if (r.length === 0) return !0;
  const i = Jr.getRegExp(`(${r.map((a) => a === "?" ? "\\?" : a).join("|")})`);
  let o = !i.test(n);
  if (!o) {
    const a = n.indexOf(t);
    a > 0 && !i.test(n.substring(0, a)) && (o = !0);
  }
  return o;
}, De = (n, e, t = ".") => {
  if (!n) return;
  if (n[e])
    return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : void 0;
  const r = e.split(t);
  let i = n;
  for (let o = 0; o < r.length; ) {
    if (!i || typeof i != "object")
      return;
    let a, l = "";
    for (let c = o; c < r.length; ++c)
      if (c !== o && (l += t), l += r[c], a = i[l], a !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof a) > -1 && c < r.length - 1)
          continue;
        o += c - o + 1;
        break;
      }
    i = a;
  }
  return i;
}, Oe = (n) => n == null ? void 0 : n.replace("_", "-"), Xr = {
  type: "logger",
  log(n) {
    this.output("log", n);
  },
  warn(n) {
    this.output("warn", n);
  },
  error(n) {
    this.output("error", n);
  },
  output(n, e) {
    var t, r;
    (r = (t = console == null ? void 0 : console[n]) == null ? void 0 : t.apply) == null || r.call(t, console, e);
  }
};
class Re {
  constructor(e, t = {}) {
    this.init(e, t);
  }
  init(e, t = {}) {
    this.prefix = t.prefix || "i18next:", this.logger = e || Xr, this.options = t, this.debug = t.debug;
  }
  log(...e) {
    return this.forward(e, "log", "", !0);
  }
  warn(...e) {
    return this.forward(e, "warn", "", !0);
  }
  error(...e) {
    return this.forward(e, "error", "");
  }
  deprecate(...e) {
    return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, r, i) {
    return i && !this.debug ? null : (S(e[0]) && (e[0] = `${r}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new Re(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Re(this.logger, e);
  }
}
var Z = new Re();
class Ee {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const i = this.observers[r].get(t) || 0;
      this.observers[r].set(t, i + 1);
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
  emit(e, ...t) {
    this.observers[e] && Array.from(this.observers[e].entries()).forEach(([i, o]) => {
      for (let a = 0; a < o; a++)
        i(...t);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([i, o]) => {
      for (let a = 0; a < o; a++)
        i.apply(i, [e, ...t]);
    });
  }
}
class ot extends Ee {
  constructor(e, t = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, r, i = {}) {
    var d, u;
    const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, a = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let l;
    e.indexOf(".") > -1 ? l = e.split(".") : (l = [e, t], r && (Array.isArray(r) ? l.push(...r) : S(r) && o ? l.push(...r.split(o)) : l.push(r)));
    const c = Ne(this.data, l);
    return !c && !t && !r && e.indexOf(".") > -1 && (e = l[0], t = l[1], r = l.slice(2).join(".")), c || !a || !S(r) ? c : De((u = (d = this.data) == null ? void 0 : d[e]) == null ? void 0 : u[t], r, o);
  }
  addResource(e, t, r, i, o = {
    silent: !1
  }) {
    const a = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let l = [e, t];
    r && (l = l.concat(a ? r.split(a) : r)), e.indexOf(".") > -1 && (l = e.split("."), i = t, t = l[1]), this.addNamespaces(t), nt(this.data, l, i), o.silent || this.emit("added", e, t, r, i);
  }
  addResources(e, t, r, i = {
    silent: !1
  }) {
    for (const o in r)
      (S(r[o]) || Array.isArray(r[o])) && this.addResource(e, t, o, r[o], {
        silent: !0
      });
    i.silent || this.emit("added", e, t, r);
  }
  addResourceBundle(e, t, r, i, o, a = {
    silent: !1,
    skipCopy: !1
  }) {
    let l = [e, t];
    e.indexOf(".") > -1 && (l = e.split("."), i = r, r = t, t = l[1]), this.addNamespaces(t);
    let c = Ne(this.data, l) || {};
    a.skipCopy || (r = JSON.parse(JSON.stringify(r))), i ? Pt(c, r, o) : c = {
      ...c,
      ...r
    }, nt(this.data, l, c), a.silent || this.emit("added", e, t, r);
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
    return !!(t && Object.keys(t) || []).find((i) => t[i] && Object.keys(t[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Et = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, e, t, r, i) {
    return n.forEach((o) => {
      var a;
      e = ((a = this.processors[o]) == null ? void 0 : a.process(e, t, r, i)) ?? e;
    }), e;
  }
};
const at = {}, lt = (n) => !S(n) && typeof n != "boolean" && typeof n != "number";
class Pe extends Ee {
  constructor(e, t = {}) {
    super(), Vr(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Z.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, t = {
    interpolation: {}
  }) {
    const r = {
      ...t
    };
    if (e == null) return !1;
    const i = this.resolve(e, r);
    return (i == null ? void 0 : i.res) !== void 0;
  }
  extractFromKey(e, t) {
    let r = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const i = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let o = t.ns || this.options.defaultNS || [];
    const a = r && e.indexOf(r) > -1, l = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !qr(e, r, i);
    if (a && !l) {
      const c = e.match(this.interpolator.nestingRegexp);
      if (c && c.length > 0)
        return {
          key: e,
          namespaces: S(o) ? [o] : o
        };
      const d = e.split(r);
      (r !== i || r === i && this.options.ns.indexOf(d[0]) > -1) && (o = d.shift()), e = d.join(i);
    }
    return {
      key: e,
      namespaces: S(o) ? [o] : o
    };
  }
  translate(e, t, r) {
    let i = typeof t == "object" ? {
      ...t
    } : t;
    if (typeof i != "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), typeof options == "object" && (i = {
      ...i
    }), i || (i = {}), e == null) return "";
    Array.isArray(e) || (e = [String(e)]);
    const o = i.returnDetails !== void 0 ? i.returnDetails : this.options.returnDetails, a = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, {
      key: l,
      namespaces: c
    } = this.extractFromKey(e[e.length - 1], i), d = c[c.length - 1];
    let u = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
    u === void 0 && (u = ":");
    const h = i.lng || this.language, m = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((h == null ? void 0 : h.toLowerCase()) === "cimode")
      return m ? o ? {
        res: `${d}${u}${l}`,
        usedKey: l,
        exactUsedKey: l,
        usedLng: h,
        usedNS: d,
        usedParams: this.getUsedParamsDetails(i)
      } : `${d}${u}${l}` : o ? {
        res: l,
        usedKey: l,
        exactUsedKey: l,
        usedLng: h,
        usedNS: d,
        usedParams: this.getUsedParamsDetails(i)
      } : l;
    const x = this.resolve(e, i);
    let g = x == null ? void 0 : x.res;
    const f = (x == null ? void 0 : x.usedKey) || l, k = (x == null ? void 0 : x.exactUsedKey) || l, E = ["[object Number]", "[object Function]", "[object RegExp]"], P = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays, $ = !this.i18nFormat || this.i18nFormat.handleAsObject, M = i.count !== void 0 && !S(i.count), _ = Pe.hasDefaultValue(i), H = M ? this.pluralResolver.getSuffix(h, i.count, i) : "", F = i.ordinal && M ? this.pluralResolver.getSuffix(h, i.count, {
      ordinal: !1
    }) : "", y = M && !i.ordinal && i.count === 0, N = y && i[`defaultValue${this.options.pluralSeparator}zero`] || i[`defaultValue${H}`] || i[`defaultValue${F}`] || i.defaultValue;
    let R = g;
    $ && !g && _ && (R = N);
    const U = lt(R), Q = Object.prototype.toString.apply(R);
    if ($ && R && U && E.indexOf(Q) < 0 && !(S(P) && Array.isArray(R))) {
      if (!i.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const Y = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(f, R, {
          ...i,
          ns: c
        }) : `key '${l} (${this.language})' returned an object instead of string.`;
        return o ? (x.res = Y, x.usedParams = this.getUsedParamsDetails(i), x) : Y;
      }
      if (a) {
        const Y = Array.isArray(R), V = Y ? [] : {}, J = Y ? k : f;
        for (const I in R)
          if (Object.prototype.hasOwnProperty.call(R, I)) {
            const B = `${J}${a}${I}`;
            _ && !g ? V[I] = this.translate(B, {
              ...i,
              defaultValue: lt(N) ? N[I] : void 0,
              joinArrays: !1,
              ns: c
            }) : V[I] = this.translate(B, {
              ...i,
              joinArrays: !1,
              ns: c
            }), V[I] === B && (V[I] = R[I]);
          }
        g = V;
      }
    } else if ($ && S(P) && Array.isArray(g))
      g = g.join(P), g && (g = this.extendTranslation(g, e, i, r));
    else {
      let Y = !1, V = !1;
      !this.isValidLookup(g) && _ && (Y = !0, g = N), this.isValidLookup(g) || (V = !0, g = l);
      const I = (i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && V ? void 0 : g, B = _ && N !== g && this.options.updateMissing;
      if (V || Y || B) {
        if (this.logger.log(B ? "updateKey" : "missingKey", h, d, l, B ? N : g), a) {
          const j = this.resolve(l, {
            ...i,
            keySeparator: !1
          });
          j && j.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let v = [];
        const X = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && X && X[0])
          for (let j = 0; j < X.length; j++)
            v.push(X[j]);
        else this.options.saveMissingTo === "all" ? v = this.languageUtils.toResolveHierarchy(i.lng || this.language) : v.push(i.lng || this.language);
        const p = (j, O, L) => {
          var G;
          const T = _ && L !== g ? L : I;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(j, d, O, T, B, i) : (G = this.backendConnector) != null && G.saveMissing && this.backendConnector.saveMissing(j, d, O, T, B, i), this.emit("missingKey", j, d, O, g);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && M ? v.forEach((j) => {
          const O = this.pluralResolver.getSuffixes(j, i);
          y && i[`defaultValue${this.options.pluralSeparator}zero`] && O.indexOf(`${this.options.pluralSeparator}zero`) < 0 && O.push(`${this.options.pluralSeparator}zero`), O.forEach((L) => {
            p([j], l + L, i[`defaultValue${L}`] || N);
          });
        }) : p(v, l, N));
      }
      g = this.extendTranslation(g, e, i, x, r), V && g === l && this.options.appendNamespaceToMissingKey && (g = `${d}${u}${l}`), (V || Y) && this.options.parseMissingKeyHandler && (g = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${d}${u}${l}` : l, Y ? g : void 0, i));
    }
    return o ? (x.res = g, x.usedParams = this.getUsedParamsDetails(i), x) : g;
  }
  extendTranslation(e, t, r, i, o) {
    var c, d;
    if ((c = this.i18nFormat) != null && c.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
        resolved: i
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const u = S(e) && (((d = r == null ? void 0 : r.interpolation) == null ? void 0 : d.skipOnVariables) !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let h;
      if (u) {
        const x = e.match(this.interpolator.nestingRegexp);
        h = x && x.length;
      }
      let m = r.replace && !S(r.replace) ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (m = {
        ...this.options.interpolation.defaultVariables,
        ...m
      }), e = this.interpolator.interpolate(e, m, r.lng || this.language || i.usedLng, r), u) {
        const x = e.match(this.interpolator.nestingRegexp), g = x && x.length;
        h < g && (r.nest = !1);
      }
      !r.lng && i && i.res && (r.lng = this.language || i.usedLng), r.nest !== !1 && (e = this.interpolator.nest(e, (...x) => (o == null ? void 0 : o[0]) === x[0] && !r.context ? (this.logger.warn(`It seems you are nesting recursively key: ${x[0]} in key: ${t[0]}`), null) : this.translate(...x, t), r)), r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess, l = S(a) ? [a] : a;
    return e != null && (l != null && l.length) && r.applyPostProcessor !== !1 && (e = Et.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...i,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), e;
  }
  resolve(e, t = {}) {
    let r, i, o, a, l;
    return S(e) && (e = [e]), e.forEach((c) => {
      if (this.isValidLookup(r)) return;
      const d = this.extractFromKey(c, t), u = d.key;
      i = u;
      let h = d.namespaces;
      this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
      const m = t.count !== void 0 && !S(t.count), x = m && !t.ordinal && t.count === 0, g = t.context !== void 0 && (S(t.context) || typeof t.context == "number") && t.context !== "", f = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      h.forEach((k) => {
        var E, P;
        this.isValidLookup(r) || (l = k, !at[`${f[0]}-${k}`] && ((E = this.utils) != null && E.hasLoadedNamespace) && !((P = this.utils) != null && P.hasLoadedNamespace(l)) && (at[`${f[0]}-${k}`] = !0, this.logger.warn(`key "${i}" for languages "${f.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), f.forEach(($) => {
          var H;
          if (this.isValidLookup(r)) return;
          a = $;
          const M = [u];
          if ((H = this.i18nFormat) != null && H.addLookupKeys)
            this.i18nFormat.addLookupKeys(M, u, $, k, t);
          else {
            let F;
            m && (F = this.pluralResolver.getSuffix($, t.count, t));
            const y = `${this.options.pluralSeparator}zero`, N = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (m && (M.push(u + F), t.ordinal && F.indexOf(N) === 0 && M.push(u + F.replace(N, this.options.pluralSeparator)), x && M.push(u + y)), g) {
              const R = `${u}${this.options.contextSeparator}${t.context}`;
              M.push(R), m && (M.push(R + F), t.ordinal && F.indexOf(N) === 0 && M.push(R + F.replace(N, this.options.pluralSeparator)), x && M.push(R + y));
            }
          }
          let _;
          for (; _ = M.pop(); )
            this.isValidLookup(r) || (o = _, r = this.getResource($, k, _, t));
        }));
      });
    }), {
      res: r,
      usedKey: i,
      exactUsedKey: o,
      usedLng: a,
      usedNS: l
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, r, i = {}) {
    var o;
    return (o = this.i18nFormat) != null && o.getResource ? this.i18nFormat.getResource(e, t, r, i) : this.resourceStore.getResource(e, t, r, i);
  }
  getUsedParamsDetails(e = {}) {
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = e.replace && !S(e.replace);
    let i = r ? e.replace : e;
    if (r && typeof e.count < "u" && (i.count = e.count), this.options.interpolation.defaultVariables && (i = {
      ...this.options.interpolation.defaultVariables,
      ...i
    }), !r) {
      i = {
        ...i
      };
      for (const o of t)
        delete i[o];
    }
    return i;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const r in e)
      if (Object.prototype.hasOwnProperty.call(e, r) && t === r.substring(0, t.length) && e[r] !== void 0)
        return !0;
    return !1;
  }
}
class ct {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Z.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = Oe(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = Oe(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (S(e) && e.indexOf("-") > -1) {
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
    return e.forEach((r) => {
      if (t) return;
      const i = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(i)) && (t = i);
    }), !t && this.options.supportedLngs && e.forEach((r) => {
      if (t) return;
      const i = this.getScriptPartFromCode(r);
      if (this.isSupportedCode(i)) return t = i;
      const o = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(o)) return t = o;
      t = this.options.supportedLngs.find((a) => {
        if (a === o) return a;
        if (!(a.indexOf("-") < 0 && o.indexOf("-") < 0) && (a.indexOf("-") > 0 && o.indexOf("-") < 0 && a.substring(0, a.indexOf("-")) === o || a.indexOf(o) === 0 && o.length > 1))
          return a;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), S(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let r = e[t];
    return r || (r = e[this.getScriptPartFromCode(t)]), r || (r = e[this.formatLanguageCode(t)]), r || (r = e[this.getLanguagePartFromCode(t)]), r || (r = e.default), r || [];
  }
  toResolveHierarchy(e, t) {
    const r = this.getFallbackCodes(t || this.options.fallbackLng || [], e), i = [], o = (a) => {
      a && (this.isSupportedCode(a) ? i.push(a) : this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`));
    };
    return S(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(e))) : S(e) && o(this.formatLanguageCode(e)), r.forEach((a) => {
      i.indexOf(a) < 0 && o(this.formatLanguageCode(a));
    }), i;
  }
}
const dt = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, ut = {
  select: (n) => n === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Zr {
  constructor(e, t = {}) {
    this.languageUtils = e, this.options = t, this.logger = Z.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, t = {}) {
    const r = Oe(e === "dev" ? "en" : e), i = t.ordinal ? "ordinal" : "cardinal", o = JSON.stringify({
      cleanedCode: r,
      type: i
    });
    if (o in this.pluralRulesCache)
      return this.pluralRulesCache[o];
    let a;
    try {
      a = new Intl.PluralRules(r, {
        type: i
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), ut;
      if (!e.match(/-|_/)) return ut;
      const c = this.languageUtils.getLanguagePartFromCode(e);
      a = this.getRule(c, t);
    }
    return this.pluralRulesCache[o] = a, a;
  }
  needsPlural(e, t = {}) {
    let r = this.getRule(e, t);
    return r || (r = this.getRule("dev", t)), (r == null ? void 0 : r.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(e, t, r = {}) {
    return this.getSuffixes(e, r).map((i) => `${t}${i}`);
  }
  getSuffixes(e, t = {}) {
    let r = this.getRule(e, t);
    return r || (r = this.getRule("dev", t)), r ? r.resolvedOptions().pluralCategories.sort((i, o) => dt[i] - dt[o]).map((i) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : [];
  }
  getSuffix(e, t, r = {}) {
    const i = this.getRule(e, r);
    return i ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, r));
  }
}
const ht = (n, e, t, r = ".", i = !0) => {
  let o = Ur(n, e, t);
  return !o && i && S(t) && (o = De(n, t, r), o === void 0 && (o = De(e, t, r))), o;
}, Ae = (n) => n.replace(/\$/g, "$$$$");
class Qr {
  constructor(e = {}) {
    var t;
    this.logger = Z.create("interpolator"), this.options = e, this.format = ((t = e == null ? void 0 : e.interpolation) == null ? void 0 : t.format) || ((r) => r), this.init(e);
  }
  init(e = {}) {
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: r,
      useRawValueToEscape: i,
      prefix: o,
      prefixEscaped: a,
      suffix: l,
      suffixEscaped: c,
      formatSeparator: d,
      unescapeSuffix: u,
      unescapePrefix: h,
      nestingPrefix: m,
      nestingPrefixEscaped: x,
      nestingSuffix: g,
      nestingSuffixEscaped: f,
      nestingOptionsSeparator: k,
      maxReplaces: E,
      alwaysFormat: P
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Hr, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = i !== void 0 ? i : !1, this.prefix = o ? le(o) : a || "{{", this.suffix = l ? le(l) : c || "}}", this.formatSeparator = d || ",", this.unescapePrefix = u ? "" : h || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = m ? le(m) : x || le("$t("), this.nestingSuffix = g ? le(g) : f || le(")"), this.nestingOptionsSeparator = k || ",", this.maxReplaces = E || 1e3, this.alwaysFormat = P !== void 0 ? P : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, r) => (t == null ? void 0 : t.source) === r ? (t.lastIndex = 0, t) : new RegExp(r, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, r, i) {
    var x;
    let o, a, l;
    const c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, d = (g) => {
      if (g.indexOf(this.formatSeparator) < 0) {
        const P = ht(t, c, g, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(P, void 0, r, {
          ...i,
          ...t,
          interpolationkey: g
        }) : P;
      }
      const f = g.split(this.formatSeparator), k = f.shift().trim(), E = f.join(this.formatSeparator).trim();
      return this.format(ht(t, c, k, this.options.keySeparator, this.options.ignoreJSONStructure), E, r, {
        ...i,
        ...t,
        interpolationkey: k
      });
    };
    this.resetRegExp();
    const u = (i == null ? void 0 : i.missingInterpolationHandler) || this.options.missingInterpolationHandler, h = ((x = i == null ? void 0 : i.interpolation) == null ? void 0 : x.skipOnVariables) !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (g) => Ae(g)
    }, {
      regex: this.regexp,
      safeValue: (g) => this.escapeValue ? Ae(this.escape(g)) : Ae(g)
    }].forEach((g) => {
      for (l = 0; o = g.regex.exec(e); ) {
        const f = o[1].trim();
        if (a = d(f), a === void 0)
          if (typeof u == "function") {
            const E = u(e, o, i);
            a = S(E) ? E : "";
          } else if (i && Object.prototype.hasOwnProperty.call(i, f))
            a = "";
          else if (h) {
            a = o[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${f} for interpolating ${e}`), a = "";
        else !S(a) && !this.useRawValueToEscape && (a = rt(a));
        const k = g.safeValue(a);
        if (e = e.replace(o[0], k), h ? (g.regex.lastIndex += a.length, g.regex.lastIndex -= o[0].length) : g.regex.lastIndex = 0, l++, l >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t, r = {}) {
    let i, o, a;
    const l = (c, d) => {
      const u = this.nestingOptionsSeparator;
      if (c.indexOf(u) < 0) return c;
      const h = c.split(new RegExp(`${u}[ ]*{`));
      let m = `{${h[1]}`;
      c = h[0], m = this.interpolate(m, a);
      const x = m.match(/'/g), g = m.match(/"/g);
      (((x == null ? void 0 : x.length) ?? 0) % 2 === 0 && !g || g.length % 2 !== 0) && (m = m.replace(/'/g, '"'));
      try {
        a = JSON.parse(m), d && (a = {
          ...d,
          ...a
        });
      } catch (f) {
        return this.logger.warn(`failed parsing options string in nesting for key ${c}`, f), `${c}${u}${m}`;
      }
      return a.defaultValue && a.defaultValue.indexOf(this.prefix) > -1 && delete a.defaultValue, c;
    };
    for (; i = this.nestingRegexp.exec(e); ) {
      let c = [];
      a = {
        ...r
      }, a = a.replace && !S(a.replace) ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
      let d = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const u = i[1].split(this.formatSeparator).map((h) => h.trim());
        i[1] = u.shift(), c = u, d = !0;
      }
      if (o = t(l.call(this, i[1].trim(), a), a), o && i[0] === e && !S(o)) return o;
      S(o) || (o = rt(o)), o || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`), o = ""), d && (o = c.reduce((u, h) => this.format(u, h, r.lng, {
        ...r,
        interpolationkey: i[1].trim()
      }), o.trim())), e = e.replace(i[0], o), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const es = (n) => {
  let e = n.toLowerCase().trim();
  const t = {};
  if (n.indexOf("(") > -1) {
    const r = n.split("(");
    e = r[0].toLowerCase().trim();
    const i = r[1].substring(0, r[1].length - 1);
    e === "currency" && i.indexOf(":") < 0 ? t.currency || (t.currency = i.trim()) : e === "relativetime" && i.indexOf(":") < 0 ? t.range || (t.range = i.trim()) : i.split(";").forEach((a) => {
      if (a) {
        const [l, ...c] = a.split(":"), d = c.join(":").trim().replace(/^'+|'+$/g, ""), u = l.trim();
        t[u] || (t[u] = d), d === "false" && (t[u] = !1), d === "true" && (t[u] = !0), isNaN(d) || (t[u] = parseInt(d, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, ce = (n) => {
  const e = {};
  return (t, r, i) => {
    let o = i;
    i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (o = {
      ...o,
      [i.interpolationkey]: void 0
    });
    const a = r + JSON.stringify(o);
    let l = e[a];
    return l || (l = n(Oe(r), i), e[a] = l), l(t);
  };
};
class ts {
  constructor(e = {}) {
    this.logger = Z.create("formatter"), this.options = e, this.formats = {
      number: ce((t, r) => {
        const i = new Intl.NumberFormat(t, {
          ...r
        });
        return (o) => i.format(o);
      }),
      currency: ce((t, r) => {
        const i = new Intl.NumberFormat(t, {
          ...r,
          style: "currency"
        });
        return (o) => i.format(o);
      }),
      datetime: ce((t, r) => {
        const i = new Intl.DateTimeFormat(t, {
          ...r
        });
        return (o) => i.format(o);
      }),
      relativetime: ce((t, r) => {
        const i = new Intl.RelativeTimeFormat(t, {
          ...r
        });
        return (o) => i.format(o, r.range || "day");
      }),
      list: ce((t, r) => {
        const i = new Intl.ListFormat(t, {
          ...r
        });
        return (o) => i.format(o);
      })
    }, this.init(e);
  }
  init(e, t = {
    interpolation: {}
  }) {
    this.formatSeparator = t.interpolation.formatSeparator || ",";
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = ce(t);
  }
  format(e, t, r, i = {}) {
    const o = t.split(this.formatSeparator);
    if (o.length > 1 && o[0].indexOf("(") > 1 && o[0].indexOf(")") < 0 && o.find((l) => l.indexOf(")") > -1)) {
      const l = o.findIndex((c) => c.indexOf(")") > -1);
      o[0] = [o[0], ...o.splice(1, l)].join(this.formatSeparator);
    }
    return o.reduce((l, c) => {
      var h;
      const {
        formatName: d,
        formatOptions: u
      } = es(c);
      if (this.formats[d]) {
        let m = l;
        try {
          const x = ((h = i == null ? void 0 : i.formatParams) == null ? void 0 : h[i.interpolationkey]) || {}, g = x.locale || x.lng || i.locale || i.lng || r;
          m = this.formats[d](l, g, {
            ...u,
            ...i,
            ...x
          });
        } catch (x) {
          this.logger.warn(x);
        }
        return m;
      } else
        this.logger.warn(`there was no format function for ${d}`);
      return l;
    }, e);
  }
}
const rs = (n, e) => {
  n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
};
class ss extends Ee {
  constructor(e, t, r, i = {}) {
    var o, a;
    super(), this.backend = e, this.store = t, this.services = r, this.languageUtils = r.languageUtils, this.options = i, this.logger = Z.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], (a = (o = this.backend) == null ? void 0 : o.init) == null || a.call(o, r, i.backend, i);
  }
  queueLoad(e, t, r, i) {
    const o = {}, a = {}, l = {}, c = {};
    return e.forEach((d) => {
      let u = !0;
      t.forEach((h) => {
        const m = `${d}|${h}`;
        !r.reload && this.store.hasResourceBundle(d, h) ? this.state[m] = 2 : this.state[m] < 0 || (this.state[m] === 1 ? a[m] === void 0 && (a[m] = !0) : (this.state[m] = 1, u = !1, a[m] === void 0 && (a[m] = !0), o[m] === void 0 && (o[m] = !0), c[h] === void 0 && (c[h] = !0)));
      }), u || (l[d] = !0);
    }), (Object.keys(o).length || Object.keys(a).length) && this.queue.push({
      pending: a,
      pendingCount: Object.keys(a).length,
      loaded: {},
      errors: [],
      callback: i
    }), {
      toLoad: Object.keys(o),
      pending: Object.keys(a),
      toLoadLanguages: Object.keys(l),
      toLoadNamespaces: Object.keys(c)
    };
  }
  loaded(e, t, r) {
    const i = e.split("|"), o = i[0], a = i[1];
    t && this.emit("failedLoading", o, a, t), !t && r && this.store.addResourceBundle(o, a, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && r && (this.state[e] = 0);
    const l = {};
    this.queue.forEach((c) => {
      Dr(c.loaded, [o], a), rs(c, e), t && c.errors.push(t), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((d) => {
        l[d] || (l[d] = {});
        const u = c.loaded[d];
        u.length && u.forEach((h) => {
          l[d][h] === void 0 && (l[d][h] = !0);
        });
      }), c.done = !0, c.errors.length ? c.callback(c.errors) : c.callback());
    }), this.emit("loaded", l), this.queue = this.queue.filter((c) => !c.done);
  }
  read(e, t, r, i = 0, o = this.retryTimeout, a) {
    if (!e.length) return a(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: r,
        tried: i,
        wait: o,
        callback: a
      });
      return;
    }
    this.readingCalls++;
    const l = (d, u) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const h = this.waitingReads.shift();
        this.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback);
      }
      if (d && u && i < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, r, i + 1, o * 2, a);
        }, o);
        return;
      }
      a(d, u);
    }, c = this.backend[r].bind(this.backend);
    if (c.length === 2) {
      try {
        const d = c(e, t);
        d && typeof d.then == "function" ? d.then((u) => l(null, u)).catch(l) : l(null, d);
      } catch (d) {
        l(d);
      }
      return;
    }
    return c(e, t, l);
  }
  prepareLoading(e, t, r = {}, i) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
    S(e) && (e = this.languageUtils.toResolveHierarchy(e)), S(t) && (t = [t]);
    const o = this.queueLoad(e, t, r, i);
    if (!o.toLoad.length)
      return o.pending.length || i(), null;
    o.toLoad.forEach((a) => {
      this.loadOne(a);
    });
  }
  load(e, t, r) {
    this.prepareLoading(e, t, {}, r);
  }
  reload(e, t, r) {
    this.prepareLoading(e, t, {
      reload: !0
    }, r);
  }
  loadOne(e, t = "") {
    const r = e.split("|"), i = r[0], o = r[1];
    this.read(i, o, "read", void 0, void 0, (a, l) => {
      a && this.logger.warn(`${t}loading namespace ${o} for language ${i} failed`, a), !a && l && this.logger.log(`${t}loaded namespace ${o} for language ${i}`, l), this.loaded(e, a, l);
    });
  }
  saveMissing(e, t, r, i, o, a = {}, l = () => {
  }) {
    var c, d, u, h, m;
    if ((d = (c = this.services) == null ? void 0 : c.utils) != null && d.hasLoadedNamespace && !((h = (u = this.services) == null ? void 0 : u.utils) != null && h.hasLoadedNamespace(t))) {
      this.logger.warn(`did not save key "${r}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if ((m = this.backend) != null && m.create) {
        const x = {
          ...a,
          isUpdate: o
        }, g = this.backend.create.bind(this.backend);
        if (g.length < 6)
          try {
            let f;
            g.length === 5 ? f = g(e, t, r, i, x) : f = g(e, t, r, i), f && typeof f.then == "function" ? f.then((k) => l(null, k)).catch(l) : l(null, f);
          } catch (f) {
            l(f);
          }
        else
          g(e, t, r, i, l, x);
      }
      !e || !e[0] || this.store.addResource(e[0], t, r, i);
    }
  }
}
const ft = () => ({
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
  overloadTranslationOptionHandler: (n) => {
    let e = {};
    if (typeof n[1] == "object" && (e = n[1]), S(n[1]) && (e.defaultValue = n[1]), S(n[2]) && (e.tDescription = n[2]), typeof n[2] == "object" || typeof n[3] == "object") {
      const t = n[3] || n[2];
      Object.keys(t).forEach((r) => {
        e[r] = t[r];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (n) => n,
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
}), pt = (n) => {
  var e, t;
  return S(n.ns) && (n.ns = [n.ns]), S(n.fallbackLng) && (n.fallbackLng = [n.fallbackLng]), S(n.fallbackNS) && (n.fallbackNS = [n.fallbackNS]), ((t = (e = n.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : t.call(e, "cimode")) < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), typeof n.initImmediate == "boolean" && (n.initAsync = n.initImmediate), n;
}, ke = () => {
}, is = (n) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((t) => {
    typeof n[t] == "function" && (n[t] = n[t].bind(n));
  });
};
class ye extends Ee {
  constructor(e = {}, t) {
    if (super(), this.options = pt(e), this.services = {}, this.logger = Z, this.modules = {
      external: []
    }, is(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init(e = {}, t) {
    this.isInitializing = !0, typeof e == "function" && (t = e, e = {}), e.defaultNS == null && e.ns && (S(e.ns) ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
    const r = ft();
    this.options = {
      ...r,
      ...this.options,
      ...pt(e)
    }, this.options.interpolation = {
      ...r.interpolation,
      ...this.options.interpolation
    }, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator);
    const i = (d) => d ? typeof d == "function" ? new d() : d : null;
    if (!this.options.isClone) {
      this.modules.logger ? Z.init(i(this.modules.logger), this.options) : Z.init(null, this.options);
      let d;
      this.modules.formatter ? d = this.modules.formatter : d = ts;
      const u = new ct(this.options);
      this.store = new ot(this.options.resources, this.options);
      const h = this.services;
      h.logger = Z, h.resourceStore = this.store, h.languageUtils = u, h.pluralResolver = new Zr(u, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), d && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (h.formatter = i(d), h.formatter.init(h, this.options), this.options.interpolation.format = h.formatter.format.bind(h.formatter)), h.interpolator = new Qr(this.options), h.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, h.backendConnector = new ss(i(this.modules.backend), h.resourceStore, h, this.options), h.backendConnector.on("*", (m, ...x) => {
        this.emit(m, ...x);
      }), this.modules.languageDetector && (h.languageDetector = i(this.modules.languageDetector), h.languageDetector.init && h.languageDetector.init(h, this.options.detection, this.options)), this.modules.i18nFormat && (h.i18nFormat = i(this.modules.i18nFormat), h.i18nFormat.init && h.i18nFormat.init(this)), this.translator = new Pe(this.services, this.options), this.translator.on("*", (m, ...x) => {
        this.emit(m, ...x);
      }), this.modules.external.forEach((m) => {
        m.init && m.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, t || (t = ke), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const d = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      d.length > 0 && d[0] !== "dev" && (this.options.lng = d[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((d) => {
      this[d] = (...u) => this.store[d](...u);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((d) => {
      this[d] = (...u) => (this.store[d](...u), this);
    });
    const l = me(), c = () => {
      const d = (u, h) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(h), t(u, h);
      };
      if (this.languages && !this.isInitialized) return d(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, d);
    };
    return this.options.resources || !this.options.initAsync ? c() : setTimeout(c, 0), l;
  }
  loadResources(e, t = ke) {
    var o, a;
    let r = t;
    const i = S(e) ? e : this.language;
    if (typeof e == "function" && (r = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((i == null ? void 0 : i.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
      const l = [], c = (d) => {
        if (!d || d === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(d).forEach((h) => {
          h !== "cimode" && l.indexOf(h) < 0 && l.push(h);
        });
      };
      i ? c(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((u) => c(u)), (a = (o = this.options.preload) == null ? void 0 : o.forEach) == null || a.call(o, (d) => c(d)), this.services.backendConnector.load(l, this.options.ns, (d) => {
        !d && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(d);
      });
    } else
      r(null);
  }
  reloadResources(e, t, r) {
    const i = me();
    return typeof e == "function" && (r = e, e = void 0), typeof t == "function" && (r = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), r || (r = ke), this.services.backendConnector.reload(e, t, (o) => {
      i.resolve(), r(o);
    }), i;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Et.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
      for (let t = 0; t < this.languages.length; t++) {
        const r = this.languages[t];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(e) < 0 && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
    }
  }
  changeLanguage(e, t) {
    this.isLanguageChangingTo = e;
    const r = me();
    this.emit("languageChanging", e);
    const i = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, o = (l, c) => {
      c ? this.isLanguageChangingTo === e && (i(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, r.resolve((...d) => this.t(...d)), t && t(l, (...d) => this.t(...d));
    }, a = (l) => {
      var u, h;
      !e && !l && this.services.languageDetector && (l = []);
      const c = S(l) ? l : l && l[0], d = this.store.hasLanguageSomeTranslations(c) ? c : this.services.languageUtils.getBestMatchFromCodes(S(l) ? [l] : l);
      d && (this.language || i(d), this.translator.language || this.translator.changeLanguage(d), (h = (u = this.services.languageDetector) == null ? void 0 : u.cacheUserLanguage) == null || h.call(u, d)), this.loadResources(d, (m) => {
        o(m, d);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e), r;
  }
  getFixedT(e, t, r) {
    const i = (o, a, ...l) => {
      let c;
      typeof a != "object" ? c = this.options.overloadTranslationOptionHandler([o, a].concat(l)) : c = {
        ...a
      }, c.lng = c.lng || i.lng, c.lngs = c.lngs || i.lngs, c.ns = c.ns || i.ns, c.keyPrefix !== "" && (c.keyPrefix = c.keyPrefix || r || i.keyPrefix);
      const d = this.options.keySeparator || ".";
      let u;
      return c.keyPrefix && Array.isArray(o) ? u = o.map((h) => `${c.keyPrefix}${d}${h}`) : u = c.keyPrefix ? `${c.keyPrefix}${d}${o}` : o, this.t(u, c);
    };
    return S(e) ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = r, i;
  }
  t(...e) {
    var t;
    return (t = this.translator) == null ? void 0 : t.translate(...e);
  }
  exists(...e) {
    var t;
    return (t = this.translator) == null ? void 0 : t.exists(...e);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e, t = {}) {
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const r = t.lng || this.resolvedLanguage || this.languages[0], i = this.options ? this.options.fallbackLng : !1, o = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const a = (l, c) => {
      const d = this.services.backendConnector.state[`${l}|${c}`];
      return d === -1 || d === 0 || d === 2;
    };
    if (t.precheck) {
      const l = t.precheck(this, a);
      if (l !== void 0) return l;
    }
    return !!(this.hasResourceBundle(r, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || a(r, e) && (!i || a(o, e)));
  }
  loadNamespaces(e, t) {
    const r = me();
    return this.options.ns ? (S(e) && (e = [e]), e.forEach((i) => {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }), this.loadResources((i) => {
      r.resolve(), t && t(i);
    }), r) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const r = me();
    S(e) && (e = [e]);
    const i = this.options.preload || [], o = e.filter((a) => i.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a));
    return o.length ? (this.options.preload = i.concat(o), this.loadResources((a) => {
      r.resolve(), t && t(a);
    }), r) : (t && t(), Promise.resolve());
  }
  dir(e) {
    var i, o;
    if (e || (e = this.resolvedLanguage || (((i = this.languages) == null ? void 0 : i.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = ((o = this.services) == null ? void 0 : o.languageUtils) || new ct(ft());
    return t.indexOf(r.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(e = {}, t) {
    return new ye(e, t);
  }
  cloneInstance(e = {}, t = ke) {
    const r = e.forkResourceStore;
    r && delete e.forkResourceStore;
    const i = {
      ...this.options,
      ...e,
      isClone: !0
    }, o = new ye(i);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (o.logger = o.logger.clone(e)), ["store", "services", "language"].forEach((l) => {
      o[l] = this[l];
    }), o.services = {
      ...this.services
    }, o.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, r) {
      const l = Object.keys(this.store.data).reduce((c, d) => (c[d] = {
        ...this.store.data[d]
      }, c[d] = Object.keys(c[d]).reduce((u, h) => (u[h] = {
        ...c[d][h]
      }, u), c[d]), c), {});
      o.store = new ot(l, i), o.services.resourceStore = o.store;
    }
    return o.translator = new Pe(o.services, i), o.translator.on("*", (l, ...c) => {
      o.emit(l, ...c);
    }), o.init(i, t), o.translator.options = i, o.translator.backendConnector.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, o;
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
const K = ye.createInstance();
K.createInstance = ye.createInstance;
K.createInstance;
K.dir;
K.init;
K.loadResources;
K.reloadResources;
K.use;
K.changeLanguage;
K.getFixedT;
K.t;
K.exists;
K.setDefaultNamespace;
K.hasLoadedNamespace;
K.loadNamespaces;
K.loadLanguages;
var Mt = { nav: {
  product: "Product",
  pricing: "Pricing",
  solutions: "Solutions",
  developers: "Developers",
  resources: "Resources",
  contact: "Contact",
  languages: "Languages",
  login: "Login",
  get_started: "Get Started",
  product_menu: {
    aspm_overview: {
      title: "ASPM Overview",
      description: "Complete application security protection"
    },
    use_cases: {
      title: "Use Cases",
      description: "Real-world implementation examples"
    },
    benefits: {
      title: "Benefits",
      description: "See how Plexicus transforms security'"
    }
  },
  solution_menu: {
    fintech: {
      title: "Fintech",
      description: "Security solutions for financial technology"
    },
    healthtech: {
      title: "HealthTech",
      description: "HIPAA compliant security solutions"
    },
    legaltech: {
      title: "HRTech",
      description: "Secure HR and employee management systems"
    },
    hrtech: {
      title: "Legal Tech",
      description: "Security for legal technology platforms"
    },
    group_companies: {
      title: "Group Companies",
      description: "Solutions for corporate groups and holdings"
    },
    startups: {
      title: "Startups",
      description: "Scalable security for growing companies"
    },
    enterprise: {
      title: "Enterprise",
      description: "Comprehensive security for large organizations"
    },
    agencies: {
      title: "Agencies",
      description: "Security for digital and marketing agencies"
    },
    mobile_apps: {
      title: "Mobile Apps",
      description: "Security for iOS and Android applications"
    },
    manufacturing: {
      title: "Manufacturing",
      description: "Security for industrial and IoT systems"
    },
    government: {
      title: "Governments",
      description: "Security solutions for government agencies"
    },
    retailtech: {
      title: "RetailTech",
      description: "Security for e-commerce and retail platforms"
    }
  },
  developers_menu: {
    documentations: {
      title: "Documentation",
      description: "Technical guides and references"
    },
    github_actions: {
      title: "GitHub Action",
      description: "Automate security in your CI/CD pipeline"
    },
    github_apps: {
      title: "GitHub App",
      description: "Integrate Plexicus with your repositories"
    },
    api_references: {
      title: "API Reference",
      description: "Comprehensive API documentation"
    }
  },
  resources_menu: {
    blog: {
      title: "Blog",
      description: "Latest news and security insights"
    },
    youtube_channel: {
      title: "YouTube Channel",
      description: "Video tutorials and webinars"
    },
    branding_assets: {
      title: "Branding Assets",
      description: "Logos and brand guidelines"
    },
    feature_request: {
      title: "Feature Requests",
      description: "Submit and vote on new features"
    },
    changelogs: {
      title: "Changelogs",
      description: "Latest product updates"
    }
  }
} };
Mt.nav;
var Tt = { nav: {
  product: "Producto",
  pricing: "Precios",
  solutions: "Soluciones",
  developers: "Desarrolladores",
  resources: "Recursos",
  contact: "Contacto",
  languages: "Idiomas",
  login: "Iniciar sesión",
  get_started: "Empezar",
  product_menu: {
    aspm_overview: {
      title: "Visión general de ASPM",
      description: "Protección completa de seguridad de aplicaciones"
    },
    use_cases: {
      title: "Casos de uso",
      description: "Ejemplos de implementación en el mundo real"
    },
    benefits: {
      title: "Beneficios",
      description: "Mira cómo Plexicus transforma la seguridad"
    }
  },
  solution_menu: {
    fintech: {
      title: "Fintech",
      description: "Soluciones de seguridad para tecnología financiera"
    },
    healthtech: {
      title: "HealthTech",
      description: "Soluciones de seguridad compatibles con HIPAA"
    },
    legaltech: {
      title: "HRTech",
      description: "Sistemas seguros de gestión de recursos humanos y empleados"
    },
    hrtech: {
      title: "Legal Tech",
      description: "Seguridad para plataformas de tecnología legal"
    },
    group_companies: {
      title: "Empresas del grupo",
      description: "Soluciones para grupos corporativos y holdings"
    },
    startups: {
      title: "Startups",
      description: "Seguridad escalable para empresas en crecimiento"
    },
    enterprise: {
      title: "Empresas",
      description: "Seguridad integral para grandes organizaciones"
    },
    agencies: {
      title: "Agencias",
      description: "Seguridad para agencias digitales y de marketing"
    },
    mobile_apps: {
      title: "Aplicaciones móviles",
      description: "Seguridad para aplicaciones iOS y Android"
    },
    manufacturing: {
      title: "Manufactura",
      description: "Seguridad para sistemas industriales e IoT"
    },
    government: {
      title: "Gobiernos",
      description: "Soluciones de seguridad para agencias gubernamentales"
    },
    retailtech: {
      title: "RetailTech",
      description: "Seguridad para plataformas de comercio electrónico y minoristas"
    }
  },
  developers_menu: {
    documentations: {
      title: "Documentación",
      description: "Guías técnicas y referencias"
    },
    github_actions: {
      title: "Acciones de GitHub",
      description: "Automatiza la seguridad en tu pipeline CI/CD"
    },
    github_apps: {
      title: "Aplicación de GitHub",
      description: "Integra Plexicus con tus repositorios"
    },
    api_references: {
      title: "Referencia API",
      description: "Documentación API completa"
    }
  },
  resources_menu: {
    blog: {
      title: "Blog",
      description: "Últimas noticias y conocimientos sobre seguridad"
    },
    youtube_channel: {
      title: "Canal de YouTube",
      description: "Tutoriales en video y seminarios web"
    },
    branding_assets: {
      title: "Recursos de marca",
      description: "Logos y pautas de marca"
    },
    feature_request: {
      title: "Solicitudes de características",
      description: "Envía y vota por nuevas funciones"
    },
    changelogs: {
      title: "Registros de cambios",
      description: "Últimas actualizaciones del producto"
    }
  }
} };
Tt.nav;
K.use(Ir).init({
  lng: "en",
  supportedLngs: ["en", "es"],
  resources: {
    en: { translation: Mt },
    es: { translation: Tt }
  },
  fallbackLng: "en",
  react: { useSuspense: !1 }
});
const ls = () => {
  const [n, e] = Ce(!1), [t, r] = Ce(null), i = Le(null), o = "http://localhost:7000", { t: a, i18n: l } = Br();
  ie(() => {
    const f = window.location.pathname.split("/")[1];
    console.log(f, "a"), ["en", "es"].includes(f) && (console.log(f, "a"), l.changeLanguage(f));
  }, []);
  const [c, d] = Ce(!1);
  ie(() => {
    const f = () => {
      const k = window.scrollY;
      d(k > 50);
    };
    return window.addEventListener("scroll", f), f(), () => {
      window.removeEventListener("scroll", f);
    };
  }, []);
  const u = Se((f) => {
    i.current && (clearTimeout(i.current), i.current = null), r(f);
  }, []), h = Le([]), m = Se(() => {
    const f = setTimeout(() => {
      r(null);
    }, 150);
    i.current = f, h.current.push(f);
  }, []);
  ie(() => () => {
    i.current && clearTimeout(i.current), h.current.forEach(clearTimeout), h.current = [];
  }, []);
  const x = Se(
    (f) => {
      r(t === f ? null : f);
    },
    [t]
  ), g = {
    products: {
      title: a("nav.product"),
      shortTitle: a("nav.product"),
      image: "product-diagram",
      items: [
        {
          title: a("nav.product_menu.aspm_overview.title"),
          description: a("nav.product_menu.aspm_overview.description"),
          href: "/products/aspm",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                /* @__PURE__ */ s.jsx("path", { d: "M12 16v-4" }),
                /* @__PURE__ */ s.jsx("path", { d: "M12 8h.01" })
              ]
            }
          )
        },
        {
          title: a("nav.product_menu.benefits.title"),
          description: a("nav.product_menu.benefits.description"),
          href: "/products/benefits",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("path", { d: "m9 12 2 2 4-4" }),
                /* @__PURE__ */ s.jsx("path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" }),
                /* @__PURE__ */ s.jsx("path", { d: "M22 19H2" })
              ]
            }
          )
        },
        {
          title: a("nav.product_menu.use_cases.title"),
          description: a("nav.product_menu.use_cases.description"),
          href: "/products/use-cases",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
                /* @__PURE__ */ s.jsx("path", { d: "M8 12h8" }),
                /* @__PURE__ */ s.jsx("path", { d: "M12 8v8" })
              ]
            }
          )
        }
      ]
    },
    solutions: {
      title: a("nav.solutions"),
      shortTitle: a("nav.solutions"),
      image: "solutions-diagram",
      items: [
        {
          title: a("nav.solution_menu.fintech.title"),
          description: a("nav.solution_menu.fintech.description"),
          href: "/solutions/fintech",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
                /* @__PURE__ */ s.jsx("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
              ]
            }
          )
        },
        {
          title: a("nav.solution_menu.healthtech.title"),
          description: a("nav.solution_menu.healthtech.description"),
          href: "/solutions/healthtech",
          icon: /* @__PURE__ */ s.jsx(
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
              children: /* @__PURE__ */ s.jsx("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" })
            }
          )
        },
        {
          title: a("nav.solution_menu.hrtech.title"),
          description: a("nav.solution_menu.hrtech.description"),
          href: "/solutions/hrtech",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
                /* @__PURE__ */ s.jsx("circle", { cx: "9", cy: "7", r: "4" }),
                /* @__PURE__ */ s.jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
                /* @__PURE__ */ s.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
              ]
            }
          )
        },
        {
          title: a("nav.solution_menu.legaltech.title"),
          description: a("nav.solution_menu.legaltech.description"),
          href: "/solutions/legaltech",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("path", { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" }),
                /* @__PURE__ */ s.jsx("path", { d: "M12 8v4l3 3" })
              ]
            }
          )
        },
        {
          title: a("nav.solution_menu.group_companies.title"),
          description: a("nav.solution_menu.group_companies.description"),
          href: "/solutions/group-companies",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("rect", { x: "2", y: "7", width: "20", height: "14", rx: "2", ry: "2" }),
                /* @__PURE__ */ s.jsx("path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" })
              ]
            }
          )
        },
        {
          title: a("nav.solution_menu.agencies.title"),
          description: a("nav.solution_menu.agencies.description"),
          href: "/solutions/agencies",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
                /* @__PURE__ */ s.jsx("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
              ]
            }
          )
        },
        {
          title: a("nav.solution_menu.startups.title"),
          description: a("nav.solution_menu.startups.description"),
          href: "/solutions/startups",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" }),
                /* @__PURE__ */ s.jsx("path", { d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" }),
                /* @__PURE__ */ s.jsx("path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }),
                /* @__PURE__ */ s.jsx("path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" })
              ]
            }
          )
        },
        {
          title: "Enterprise",
          description: "Comprehensive security for large organizations",
          href: "/solutions/enterprise",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("path", { d: "M2 20h20" }),
                /* @__PURE__ */ s.jsx("path", { d: "M5 20V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14" }),
                /* @__PURE__ */ s.jsx("path", { d: "M12 3v4" }),
                /* @__PURE__ */ s.jsx("path", { d: "M5 8h14" }),
                /* @__PURE__ */ s.jsx("path", { d: "M7 14h2" }),
                /* @__PURE__ */ s.jsx("path", { d: "M15 14h2" }),
                /* @__PURE__ */ s.jsx("path", { d: "M7 10h2" }),
                /* @__PURE__ */ s.jsx("path", { d: "M15 10h2" })
              ]
            }
          )
        },
        {
          title: "Mobile Apps",
          description: "Security for iOS and Android applications",
          href: "/solutions/mobile-apps",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }),
                /* @__PURE__ */ s.jsx("line", { x1: "12", y1: "18", x2: "12.01", y2: "18" })
              ]
            }
          )
        },
        {
          title: "Manufacturing",
          description: "Security for industrial and IoT systems",
          href: "/solutions/manufacturing",
          icon: /* @__PURE__ */ s.jsx(
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
              children: /* @__PURE__ */ s.jsx("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" })
            }
          )
        },
        {
          title: "Governments",
          description: "Security solutions for government agencies",
          href: "/solutions/governments",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("path", { d: "M2 20h20" }),
                /* @__PURE__ */ s.jsx("path", { d: "M12 4v6" }),
                /* @__PURE__ */ s.jsx("path", { d: "M4 20V10l8-6 8 6v10" }),
                /* @__PURE__ */ s.jsx("path", { d: "M15 12v8" }),
                /* @__PURE__ */ s.jsx("path", { d: "M9 12v8" })
              ]
            }
          )
        },
        {
          title: "RetailTech",
          description: "Security for e-commerce and retail platforms",
          href: "/solutions/retailtech",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("circle", { cx: "9", cy: "21", r: "1" }),
                /* @__PURE__ */ s.jsx("circle", { cx: "20", cy: "21", r: "1" }),
                /* @__PURE__ */ s.jsx("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })
              ]
            }
          )
        }
      ]
    },
    developers: {
      title: a("nav.developers"),
      shortTitle: "Developers",
      image: "developers-diagram",
      items: [
        {
          title: "Documentation",
          description: "Technical guides and references",
          href: "https://docs.plexicus.com/",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                /* @__PURE__ */ s.jsx("polyline", { points: "14 2 14 8 20 8" }),
                /* @__PURE__ */ s.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
                /* @__PURE__ */ s.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
                /* @__PURE__ */ s.jsx("polyline", { points: "10 9 9 9 8 9" })
              ]
            }
          )
        },
        {
          title: "API Reference",
          description: "Comprehensive API documentation",
          href: "https://docs.plexicus.com/getting-started/introduction",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("path", { d: "m18 16 4-4-4-4" }),
                /* @__PURE__ */ s.jsx("path", { d: "m6 8-4 4 4 4" }),
                /* @__PURE__ */ s.jsx("path", { d: "m14.5 4-5 16" })
              ]
            }
          )
        },
        {
          title: "GitHub App",
          description: "Integrate Plexicus with your repositories",
          href: "https://github.com/apps/plexicus",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
                /* @__PURE__ */ s.jsx("path", { d: "M9 18c-4.51 2-5-2-7-2" })
              ]
            }
          )
        },
        {
          title: "GitHub Action",
          description: "Automate security in your CI/CD pipeline",
          href: "https://github.com/marketplace/actions/plexicus-runner-action",
          icon: /* @__PURE__ */ s.jsx(
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
              children: /* @__PURE__ */ s.jsx("path", { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" })
            }
          )
        }
      ]
    },
    resources: {
      title: a("nav.resources"),
      shortTitle: "Resources",
      image: "resources-diagram",
      items: [
        {
          title: "Blog",
          description: "Latest news and security insights",
          href: "/blog",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                /* @__PURE__ */ s.jsx("path", { d: "M14 3v5h5M16 13H8M16 17H8M10 9H8" })
              ]
            }
          )
        },
        {
          title: "YouTube Channel",
          description: "Video tutorials and webinars",
          href: "https://youtube.com/channel/UCzrotvBZ3dcb7mhI55ExHBQ/",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("path", { d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" }),
                /* @__PURE__ */ s.jsx("path", { d: "m10 15 5-3-5-3z" })
              ]
            }
          )
        },
        {
          title: "Branding Assets",
          description: "Logos and brand guidelines",
          href: "/resources/branding",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("path", { d: "M12 19c.5 0 1-.1 1.4-.4.8-.4 1.4-1.1 1.6-2 .3-1.4-.5-2.8-1.9-3.2-.3-.1-.6-.1-.9-.1-.5 0-1 .1-1.4.4-.8.4-1.4 1.1-1.6 2-.3 1.4.5 2.8 1.9 3.2.3.1.6.1.9.1z" }),
                /* @__PURE__ */ s.jsx("path", { d: "m14.5 12.5 2.7-2.7c1.2-1.2 1.8-2.7 1.8-4.3 0-3.1-2.5-5.5-5.5-5.5-1.6 0-3.1.6-4.3 1.8L6.5 4.5" }),
                /* @__PURE__ */ s.jsx("path", { d: "m4.5 6.5 2.7-2.7c.3-.3.6-.4 1-.4.8 0 1.5.7 1.5 0 .4-.1.7-.4 1L6.5 8.5" }),
                /* @__PURE__ */ s.jsx("path", { d: "m3.5 13.5 5-5" }),
                /* @__PURE__ */ s.jsx("path", { d: "m5 19 5-5" }),
                /* @__PURE__ */ s.jsx("path", { d: "m17.5 6.5-5 5" }),
                /* @__PURE__ */ s.jsx("path", { d: "m16 17-5-5" })
              ]
            }
          )
        },
        {
          title: "Changelogs",
          description: "Latest product updates",
          href: "https://plexicus.canny.io/changelog",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("path", { d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" }),
                /* @__PURE__ */ s.jsx("path", { d: "m9 12 2 2 4-4" })
              ]
            }
          )
        },
        {
          title: "Feature Requests",
          description: "Submit and vote on new features",
          href: "https://plexicus.canny.io/feature-requests",
          icon: /* @__PURE__ */ s.jsx(
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
              children: /* @__PURE__ */ s.jsx("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" })
            }
          )
        },
        // Find the three comparison items in the resources menu items array and update their icons
        // For "Plexicus vs. ArmorCode", replace the icon with a sword
        {
          title: "Plexicus vs. ArmorCode",
          description: "See how Plexicus compares",
          href: "/compare/armorcode",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("path", { d: "M14.5 17.5L3 6V3h3l11.5 11.5" }),
                /* @__PURE__ */ s.jsx("path", { d: "M13 19l6-6" }),
                /* @__PURE__ */ s.jsx("path", { d: "M16 16l4 4" }),
                /* @__PURE__ */ s.jsx("path", { d: "M19 21l2-2" })
              ]
            }
          )
        },
        // For "Plexicus vs. Apiiro", replace the icon with an axe
        {
          title: "Plexicus vs. Apiiro",
          description: "Feature comparison",
          href: "/compare/apiiro",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("path", { d: "M12 2v5.5m0 0v9m0-9 7-3.5c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5L12 8.5l-7-3.5C4.2 5 3.5 5.7 3.5 6.5v3c0 .8.7 1.5 1.5 1.5l7 3.5" }),
                /* @__PURE__ */ s.jsx("path", { d: "M12 8.5 5 5l-1 1 8 8.5 8-8.5-1-1-7 3.5z" }),
                /* @__PURE__ */ s.jsx("path", { d: "m9 12 3 2.5 3-2.5" }),
                /* @__PURE__ */ s.jsx("path", { d: "M12 17v5" })
              ]
            }
          )
        },
        // For "Plexicus vs. Legit Security", replace the icon with a crosshair/target
        {
          title: "Plexicus vs. Legit Security",
          description: "Side-by-side comparison",
          href: "/compare/legit-security",
          icon: /* @__PURE__ */ s.jsxs(
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
                /* @__PURE__ */ s.jsx("path", { d: "M3 8a4 4 0 0 1 8 0v8a4 4 0 0 1-8 0z" }),
                /* @__PURE__ */ s.jsx("path", { d: "M7 8v8" }),
                /* @__PURE__ */ s.jsx("path", { d: "M21 12h-7" }),
                /* @__PURE__ */ s.jsx("path", { d: "m14 15 3-3-3-3" }),
                /* @__PURE__ */ s.jsx("path", { d: "M7 12h7" })
              ]
            }
          )
        }
      ]
    }
  };
  return /* @__PURE__ */ s.jsxs(
    "header",
    {
      className: "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
      style: {
        background: c ? "#8220ff" : "transparent",
        boxShadow: c ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.3s ease-in-out",
        minHeight: "64px"
      },
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl", children: [
          /* @__PURE__ */ s.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ s.jsx(A, { href: o, className: "flex items-center gap-2 overflow-visible", "aria-label": "Plexicus Home", children: /* @__PURE__ */ s.jsx("div", { className: "relative w-auto h-14 flex items-center", children: /* @__PURE__ */ s.jsx(
            "img",
            {
              src: "/images/plexicus-logo-white.png",
              alt: "Plexicus Logo",
              className: "object-contain max-h-full max-w-none",
              style: {
                maxWidth: c ? "180px" : "220px",
                transition: "max-width 0.3s ease-in-out"
              }
            }
          ) }) }) }),
          /* @__PURE__ */ s.jsxs("nav", { className: "hidden md:flex md:gap-4 lg:gap-6", "aria-label": "Main Navigation", children: [
            Object.entries(g).filter(([f]) => f === "products").map(([f, k]) => /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => u(f),
                onMouseLeave: m,
                children: /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": t === f,
                    "aria-haspopup": "true",
                    onClick: () => x(f),
                    children: [
                      /* @__PURE__ */ s.jsx("span", { className: "hidden lg:inline", children: k.title }),
                      /* @__PURE__ */ s.jsx("span", { className: "lg:hidden", children: k.shortTitle }),
                      /* @__PURE__ */ s.jsx(
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
                          className: `ml-1 transition-transform duration-200 ${t === f ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ s.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              f
            )),
            /* @__PURE__ */ s.jsx(
              A,
              {
                href: "/pricing",
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: a("nav.pricing")
              }
            ),
            Object.entries(g).filter(([f]) => f === "solutions" || f === "developers" || f === "resources").map(([f, k]) => /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => u(f),
                onMouseLeave: m,
                children: /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": t === f,
                    "aria-haspopup": "true",
                    onClick: () => x(f),
                    children: [
                      /* @__PURE__ */ s.jsx("span", { className: "hidden lg:inline", children: k.title }),
                      /* @__PURE__ */ s.jsx("span", { className: "lg:hidden", children: k.shortTitle }),
                      /* @__PURE__ */ s.jsx(
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
                          className: `ml-1 transition-transform duration-200 ${t === f ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ s.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              f
            )),
            /* @__PURE__ */ s.jsx(
              A,
              {
                href: "/contact",
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: "Contact"
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "hidden md:flex items-center gap-4", children: [
            /* @__PURE__ */ s.jsx(
              A,
              {
                href: "/login",
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors whitespace-nowrap",
                children: "Login"
              }
            ),
            /* @__PURE__ */ s.jsx(Fe, { className: "bg-white text-[#8220ff] font-medium px-4 lg:px-6 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap", children: "Get Started" })
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              className: "flex md:hidden p-2 rounded-md hover:bg-white/10 transition-colors text-white",
              onClick: () => e(!n),
              "aria-label": n ? "Close menu" : "Open menu",
              "aria-expanded": n,
              children: n ? /* @__PURE__ */ s.jsxs(
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
                    /* @__PURE__ */ s.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                    /* @__PURE__ */ s.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                  ]
                }
              ) : /* @__PURE__ */ s.jsxs(
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
                    /* @__PURE__ */ s.jsx("line", { x1: "4", x2: "20", y1: "12", y2: "12" }),
                    /* @__PURE__ */ s.jsx("line", { x1: "4", x2: "20", y1: "6", y2: "6" }),
                    /* @__PURE__ */ s.jsx("line", { x1: "4", x2: "20", y1: "18", y2: "18" })
                  ]
                }
              )
            }
          )
        ] }),
        t && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "fixed inset-0 bg-black/20 z-30",
              onClick: () => r(null),
              "aria-hidden": "true",
              style: { top: "64px" }
            }
          ),
          /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "absolute left-0 right-0 top-16 z-40 bg-white shadow-xl border-t border-gray-100 transition-all duration-300 transform",
              onMouseEnter: () => u(t),
              onMouseLeave: m,
              role: "menu",
              "aria-labelledby": `menu-button-${t}`,
              children: /* @__PURE__ */ s.jsx("div", { className: "container mx-auto py-8 px-4 md:px-6 max-w-7xl", children: /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col md:flex-row", children: [
                /* @__PURE__ */ s.jsxs("div", { className: "w-full md:w-1/3 pr-0 md:pr-8 mb-6 md:mb-0 flex flex-col", children: [
                  /* @__PURE__ */ s.jsx("div", { className: "relative h-36 md:h-40 w-full rounded-lg overflow-hidden bg-white border border-gray-100 mb-4", children: /* @__PURE__ */ s.jsxs("div", { className: "absolute inset-0 flex items-center justify-center", children: [
                    t === "products" && /* @__PURE__ */ s.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ s.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ s.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ s.jsx(
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
                          /* @__PURE__ */ s.jsx("rect", { x: "40", y: "30", width: "320", height: "40", rx: "12", fill: "#8220ff", fillOpacity: "0.9" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "65", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "90", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "115", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "40", y: "70", width: "80", height: "200", fill: "#f5f5f7" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "55", y: "90", width: "50", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.7" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "55", y: "110", width: "40", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "55", y: "130", width: "45", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "55", y: "150", width: "35", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "55", y: "170", width: "50", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "140", y: "90", width: "200", height: "70", rx: "8", fill: "#8220ff", fillOpacity: "0.1" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "155", y: "105", width: "170", height: "40", rx: "4", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "175", cy: "125", r: "15", fill: "#8220ff", fillOpacity: "0.8" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "200", y: "115", width: "110", height: "8", rx: "4", fill: "white" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "200", y: "130", width: "80", height: "6", rx: "3", fill: "white", fillOpacity: "0.7" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "140", y: "180", width: "95", height: "80", rx: "8", fill: "#f0f0f5" }),
                          /* @__PURE__ */ s.jsx(
                            "path",
                            {
                              d: "M150 240 L170 220 L190 230 L210 200",
                              stroke: "#8220ff",
                              strokeWidth: "3",
                              strokeLinecap: "round"
                            }
                          ),
                          /* @__PURE__ */ s.jsx("circle", { cx: "170", cy: "220", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "190", cy: "230", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "210", cy: "200", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "245", y: "180", width: "95", height: "80", rx: "8", fill: "#f0f0f5" }),
                          /* @__PURE__ */ s.jsx(
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
                          /* @__PURE__ */ s.jsx("circle", { cx: "293", cy: "220", r: "30", fill: "transparent", stroke: "#e0e0e5", strokeWidth: "8" }),
                          /* @__PURE__ */ s.jsx("text", { x: "283", y: "225", fontFamily: "Arial", fontSize: "12", fill: "#8220ff", fontWeight: "bold", children: "75%" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "320", cy: "50", r: "12", fill: "white", fillOpacity: "0.2" }),
                          /* @__PURE__ */ s.jsx("path", { d: "M314 50 L320 56 L326 50", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "30", cy: "30", r: "5", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "350", cy: "280", r: "7", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "370", cy: "50", r: "4", fill: "#8220ff", fillOpacity: "0.4" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "20", cy: "250", r: "6", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ s.jsx(
                            "path",
                            {
                              d: "M15 100 C30 120, 20 150, 35 160",
                              stroke: "#8220ff",
                              strokeWidth: "1.5",
                              strokeDasharray: "4 4"
                            }
                          ),
                          /* @__PURE__ */ s.jsx(
                            "path",
                            {
                              d: "M370 120 C350 140, 360 170, 380 190",
                              stroke: "#8220ff",
                              strokeWidth: "1.5",
                              strokeDasharray: "4 4"
                            }
                          ),
                          /* @__PURE__ */ s.jsxs("defs", { children: [
                            /* @__PURE__ */ s.jsxs(
                              "linearGradient",
                              {
                                id: "productGradient",
                                x1: "0",
                                y1: "0",
                                x2: "400",
                                y2: "300",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                  /* @__PURE__ */ s.jsx("stop", { offset: "0%", stopColor: "#f5f5f7" }),
                                  /* @__PURE__ */ s.jsx("stop", { offset: "100%", stopColor: "#e8e8f0" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ s.jsxs(
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
                                  /* @__PURE__ */ s.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                  /* @__PURE__ */ s.jsx(
                                    "feColorMatrix",
                                    {
                                      in: "SourceAlpha",
                                      type: "matrix",
                                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    }
                                  ),
                                  /* @__PURE__ */ s.jsx("feOffset", { dy: "4" }),
                                  /* @__PURE__ */ s.jsx("feGaussianBlur", { stdDeviation: "6" }),
                                  /* @__PURE__ */ s.jsx(
                                    "feColorMatrix",
                                    {
                                      type: "matrix",
                                      values: "0 0 0 0 0.51 0 0 0 0 0.125 0 0 0 0 1 0 0 0 0.15 0"
                                    }
                                  ),
                                  /* @__PURE__ */ s.jsx("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                                  /* @__PURE__ */ s.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })
                                ]
                              }
                            )
                          ] })
                        ]
                      }
                    ) }),
                    t === "solutions" && /* @__PURE__ */ s.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ s.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ s.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ s.jsx(
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
                          /* @__PURE__ */ s.jsx("circle", { cx: "100", cy: "150", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "300", cy: "150", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "200", cy: "70", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "200", cy: "230", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ s.jsx("path", { d: "M125 150 L160 150", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ s.jsx("path", { d: "M240 150 L275 150", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ s.jsx("path", { d: "M200 95 L200 130", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ s.jsx("path", { d: "M200 170 L200 205", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ s.jsx("polygon", { points: "158,145 158,155 168,150", fill: "#8220ff" }),
                          /* @__PURE__ */ s.jsx("polygon", { points: "242,145 242,155 232,150", fill: "#8220ff" }),
                          /* @__PURE__ */ s.jsx("polygon", { points: "195,128 205,128 200,138", fill: "#8220ff" }),
                          /* @__PURE__ */ s.jsx("polygon", { points: "195,172 205,172 200,162", fill: "#8220ff" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "100", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "300", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "200", cy: "70", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "200", cy: "230", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "200", cy: "150", r: "20", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "200", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.4" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "150", cy: "100", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "250", cy: "100", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "150", cy: "200", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "250", cy: "200", r: "5", fill: "#8220ff", fillOpacity: "0.2" })
                        ]
                      }
                    ) }),
                    t === "resources" && /* @__PURE__ */ s.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ s.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ s.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ s.jsxs("g", { filter: "url(#resourcesShadow)", children: [
                            /* @__PURE__ */ s.jsx("rect", { x: "140", y: "80", width: "120", height: "140", rx: "4", fill: "url(#bookGradient)" }),
                            /* @__PURE__ */ s.jsx(
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
                            /* @__PURE__ */ s.jsx("path", { d: "M160 100 L240 100", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ s.jsx("path", { d: "M160 120 L240 120", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ s.jsx("path", { d: "M160 140 L240 140", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ s.jsx("path", { d: "M160 160 L240 160", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ s.jsx("path", { d: "M160 180 L240 180", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ s.jsx("path", { d: "M230 80 L230 110 L220 100 L210 110 L210 80", fill: "#8220ff", fillOpacity: "0.3" }),
                            /* @__PURE__ */ s.jsxs("g", { transform: "translate(-10, -10) rotate(-5)", children: [
                              /* @__PURE__ */ s.jsx(
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
                              /* @__PURE__ */ s.jsx("path", { d: "M90 135 L150 135", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ s.jsx("path", { d: "M90 150 L150 150", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ s.jsx("path", { d: "M90 165 L150 165", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ s.jsx("path", { d: "M90 180 L120 180", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" })
                            ] }),
                            /* @__PURE__ */ s.jsxs("g", { transform: "translate(10, -10) rotate(5)", children: [
                              /* @__PURE__ */ s.jsx(
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
                              /* @__PURE__ */ s.jsx("polygon", { points: "270,140 290,150 270,160", fill: "#8220ff" }),
                              /* @__PURE__ */ s.jsx(
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
                          /* @__PURE__ */ s.jsx("rect", { x: "80", y: "230", width: "240", height: "50", fill: "none" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "200", cy: "50", r: "15", fill: "#8220ff", fillOpacity: "0.1" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "200", cy: "50", r: "10", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "200", cy: "50", r: "5", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "150", cy: "60", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "250", cy: "60", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "120", cy: "150", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "280", cy: "150", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ s.jsxs("defs", { children: [
                            /* @__PURE__ */ s.jsxs(
                              "linearGradient",
                              {
                                id: "resourcesGradient",
                                x1: "0",
                                y1: "0",
                                x2: "400",
                                y2: "300",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                  /* @__PURE__ */ s.jsx("stop", { offset: "0%", stopColor: "#f5f5f7" }),
                                  /* @__PURE__ */ s.jsx("stop", { offset: "100%", stopColor: "#e8e8f0" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ s.jsxs(
                              "linearGradient",
                              {
                                id: "bookGradient",
                                x1: "140",
                                y1: "80",
                                x2: "260",
                                y2: "220",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                  /* @__PURE__ */ s.jsx("stop", { offset: "0%", stopColor: "#f0f0f5" }),
                                  /* @__PURE__ */ s.jsx("stop", { offset: "100%", stopColor: "#ffffff" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ s.jsx("filter", { id: "resourcesShadow", x: "-10%", y: "-10%", width: "120%", height: "120%", children: /* @__PURE__ */ s.jsx("feDropShadow", { dx: "2", dy: "4", stdDeviation: "4", floodColor: "#8220ff", floodOpacity: "0.2" }) })
                          ] })
                        ]
                      }
                    ) }),
                    t === "developers" && /* @__PURE__ */ s.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ s.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ s.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "20", y: "20", width: "280", height: "200", rx: "8", fill: "#1E1E1E" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "20", y: "20", width: "280", height: "30", rx: "8", fill: "#333333" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "40", cy: "35", r: "6", fill: "#FF5F56" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "60", cy: "35", r: "6", fill: "#FFBD2E" }),
                          /* @__PURE__ */ s.jsx("circle", { cx: "80", cy: "35", r: "6", fill: "#27C93F" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "40", y: "70", width: "120", height: "10", rx: "2", fill: "#9CDCFE", fillOpacity: "0.7" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "40", y: "90", width: "180", height: "10", rx: "2", fill: "#CE9178", fillOpacity: "0.7" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "60", y: "110", width: "200", height: "10", rx: "2", fill: "#6A9955", fillOpacity: "0.7" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "60", y: "130", width: "160", height: "10", rx: "2", fill: "#569CD6", fillOpacity: "0.7" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "40", y: "150", width: "140", height: "10", rx: "2", fill: "#DCDCAA", fillOpacity: "0.7" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "60", y: "170", width: "180", height: "10", rx: "2", fill: "#4EC9B0", fillOpacity: "0.7" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "40", y: "190", width: "160", height: "10", rx: "2", fill: "#C586C0", fillOpacity: "0.7" }),
                          /* @__PURE__ */ s.jsx("text", { x: "30", y: "75", fontSize: "10", fill: "#858585", children: "1" }),
                          /* @__PURE__ */ s.jsx("text", { x: "30", y: "95", fontSize: "10", fill: "#858585", children: "2" }),
                          /* @__PURE__ */ s.jsx("text", { x: "30", y: "115", fontSize: "10", fill: "#858585", children: "3" }),
                          /* @__PURE__ */ s.jsx("text", { x: "30", y: "135", fontSize: "10", fill: "#858585", children: "4" }),
                          /* @__PURE__ */ s.jsx("text", { x: "30", y: "155", fontSize: "10", fill: "#858585", children: "5" }),
                          /* @__PURE__ */ s.jsx("text", { x: "30", y: "175", fontSize: "10", fill: "#858585", children: "6" }),
                          /* @__PURE__ */ s.jsx("text", { x: "30", y: "195", fontSize: "10", fill: "#858585", children: "7" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "80", y: "130", width: "310", height: "130", rx: "8", fill: "#1E1E1E", filter: "url(#shadow)" }),
                          /* @__PURE__ */ s.jsx("rect", { x: "80", y: "130", width: "310", height: "25", rx: "8", fill: "#333333" }),
                          /* @__PURE__ */ s.jsx("text", { x: "235", y: "147", fontSize: "12", fill: "#FFFFFF", textAnchor: "middle", children: "Terminal" }),
                          /* @__PURE__ */ s.jsx("text", { x: "90", y: "170", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ git clone https://github.com/plexicus/plexicus-sdk.git" }),
                          /* @__PURE__ */ s.jsx("text", { x: "90", y: "185", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "Cloning into 'plexicus-sdk'..." }),
                          /* @__PURE__ */ s.jsx("text", { x: "90", y: "200", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "remote: Counting objects: 100% (1234/1234)" }),
                          /* @__PURE__ */ s.jsx("text", { x: "90", y: "215", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ cd plexicus-sdk && npm install" }),
                          /* @__PURE__ */ s.jsx("text", { x: "90", y: "230", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "added 1024 packages in 4.2s" }),
                          /* @__PURE__ */ s.jsx("text", { x: "90", y: "245", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ npm run dev" }),
                          /* @__PURE__ */ s.jsxs("g", { transform: "translate(320, 240) scale(0.8)", children: [
                            /* @__PURE__ */ s.jsx("circle", { cx: "0", cy: "0", r: "25", fill: "white" }),
                            /* @__PURE__ */ s.jsx(
                              "path",
                              {
                                d: "M0 -20c-11.046 0-20 8.954-20 20 0 8.837 5.732 16.338 13.678 18.98 1 .184 1.365-.434 1.365-.964 0-.476-.018-1.733-.027-3.4-5.564 1.21-6.736-2.68-6.736-2.68-.91-2.31-2.22-2.924-2.22-2.924-1.815-1.24.137-1.215.137-1.215 2.006.14 3.06 2.06 3.06 2.06 1.783 3.057 4.675 2.174 5.815 1.663.18-1.29.697-2.174 1.268-2.674-4.442-.505-9.112-2.22-9.112-9.87 0-2.18.78-3.964 2.06-5.36-.207-.505-.893-2.54.195-5.29 0 0 1.68-.538 5.5 2.05 1.595-.443 3.305-.665 5.005-.673 1.7.008 3.41.23 5.005.673 3.82-2.588 5.495-2.05 5.495-2.05 1.09 2.75.405 4.785.198 5.29 1.28 1.396 2.055 3.18 2.055 5.36 0 7.67-4.677 9.36-9.13 9.855.718.62 1.358 1.842 1.358 3.712 0 2.68-.024 4.84-.024 5.5 0 .535.36 1.16 1.375.964C14.275 16.33 20 8.83 20 0 20-11.046 11.046-20 0-20z",
                                fill: "#1B1F23",
                                transform: "translate(0, 0)"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ s.jsx("defs", { children: /* @__PURE__ */ s.jsx("filter", { id: "shadow", x: "0", y: "0", width: "400", height: "300", filterUnits: "userSpaceOnUse", children: /* @__PURE__ */ s.jsx("feDropShadow", { dx: "2", dy: "4", stdDeviation: "3", floodColor: "#000000", floodOpacity: "0.3" }) }) })
                        ]
                      }
                    ) })
                  ] }) }),
                  /* @__PURE__ */ s.jsxs("div", { className: "bg-gray-50 rounded-lg p-4", children: [
                    /* @__PURE__ */ s.jsx("h3", { className: "text-xl font-bold text-[#8220ff]", children: g[t].title }),
                    /* @__PURE__ */ s.jsx("p", { className: "text-gray-700", children: t === "products" ? "Explore our product" : t === "solutions" ? "Explore our solutions" : "Explore our resources" })
                  ] })
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "w-full md:w-2/3", children: /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
                  g[t].items.filter((f) => t !== "resources" || !f.title.includes("vs.")).map((f, k) => /* @__PURE__ */ s.jsxs(
                    A,
                    {
                      href: f.href,
                      className: "flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group",
                      onClick: () => r(null),
                      children: [
                        /* @__PURE__ */ s.jsx("div", { className: "w-12 h-12 bg-[#8220ff]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#8220ff]/20 transition-colors", children: f.icon }),
                        /* @__PURE__ */ s.jsxs("div", { children: [
                          /* @__PURE__ */ s.jsx("h4", { className: "font-semibold text-gray-900 group-hover:text-[#8220ff] transition-colors", children: f.title }),
                          /* @__PURE__ */ s.jsx("p", { className: "text-sm text-gray-600 mt-1", children: f.description })
                        ] })
                      ]
                    },
                    k
                  )),
                  t === "resources" && /* @__PURE__ */ s.jsx("div", { className: "col-span-1 sm:col-span-2 mt-4", children: /* @__PURE__ */ s.jsxs("div", { className: "bg-purple-50 p-4 rounded-lg border border-purple-100", children: [
                    /* @__PURE__ */ s.jsx("h3", { className: "text-sm font-medium text-purple-800 mb-3", children: "Compare Plexicus" }),
                    /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: g.resources.items.filter(
                      (f) => f.title === "Plexicus vs. ArmorCode" || f.title === "Plexicus vs. Apiiro" || f.title === "Plexicus vs. Legit Security"
                    ).map((f, k) => /* @__PURE__ */ s.jsxs(
                      A,
                      {
                        href: f.href,
                        className: "flex flex-col items-center p-3 rounded-lg bg-white hover:bg-purple-100 transition-colors text-center group",
                        onClick: () => r(null),
                        children: [
                          /* @__PURE__ */ s.jsx("div", { className: "w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-purple-200 transition-colors", children: Ie.cloneElement(f.icon, {
                            className: "w-5 h-5 text-purple-700"
                          }) }),
                          /* @__PURE__ */ s.jsx("h4", { className: "font-medium text-sm text-gray-900 group-hover:text-purple-800 transition-colors", children: f.title })
                        ]
                      },
                      `compare-${k}`
                    )) })
                  ] }) })
                ] }) })
              ] }) })
            }
          )
        ] }),
        n && /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 bg-black/20 z-40 lg:hidden", onClick: () => e(!1) }),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `md:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${n ? "translate-x-0" : "translate-x-full"}`,
            style: { top: "64px", height: "calc(100vh - 64px)", overflow: "auto" },
            children: /* @__PURE__ */ s.jsx("div", { className: "overflow-y-auto h-full p-4 pb-20", children: /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
              Object.entries(g).map(([f, k]) => /* @__PURE__ */ s.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ s.jsx("h3", { className: "font-semibold", children: k.title }),
                /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-1 gap-2", children: k.items.map((E, P) => /* @__PURE__ */ s.jsxs(
                  A,
                  {
                    href: E.href,
                    className: "flex items-center p-2 rounded-md bg-gray-50 hover:bg-gray-100",
                    onClick: () => e(!1),
                    children: [
                      /* @__PURE__ */ s.jsx("div", { className: "w-8 h-8 bg-primary/10 rounded-md mr-2 flex items-center justify-center", children: Ie.cloneElement(E.icon, { width: 16, height: 16 }) }),
                      /* @__PURE__ */ s.jsx("span", { className: "text-sm", children: E.title })
                    ]
                  },
                  P
                )) })
              ] }, f)),
              /* @__PURE__ */ s.jsx(A, { href: "/pricing", className: "block py-2 text-sm font-medium", onClick: () => e(!1), children: "Pricing" }),
              /* @__PURE__ */ s.jsx(A, { href: "/contact", className: "block py-2 text-sm font-medium", onClick: () => e(!1), children: "Contact" }),
              /* @__PURE__ */ s.jsx("div", { className: "pt-4 border-t border-gray-100", children: /* @__PURE__ */ s.jsx(Fe, { className: "w-full bg-gradient-primary", onClick: () => e(!1), children: "Get Started" }) })
            ] }) })
          }
        )
      ]
    }
  );
};
function ns() {
  var t;
  const n = (r) => {
    localStorage.setItem("scrollPosition", String(window == null ? void 0 : window.scrollY));
    const i = window.location.pathname;
    let a = i.match(/^\/([a-z]{2})\//) ? i.replace(/^\/[a-z]{2}\//, `/${r}/`) : `/${r}${i}`;
    a = a.startsWith("/en/") ? a.replace(/^\/en/, "") : a, console.log({ newPath: a }), window.location.href = a;
  };
  ie(() => {
    const r = localStorage.getItem("scrollPosition");
    r && (window.scrollTo(0, parseInt(r)), localStorage.removeItem("scrollPosition"));
  }, []);
  const e = ((t = window.location.pathname.match(/^\/([a-z]{2})\//)) == null ? void 0 : t[1]) || "en";
  return /* @__PURE__ */ s.jsx(s.Fragment, { children: /* @__PURE__ */ s.jsxs("div", { className: "relative inline-flex items-center w-[150px]", children: [
    /* @__PURE__ */ s.jsx(zt, { className: "absolute  text-muted-foreground pointer-events-none", style: { left: 1, paddingLeft: 6, width: 22 } }),
    /* @__PURE__ */ s.jsxs(
      "select",
      {
        defaultValue: e,
        className: "appearance-none w-full  pr-6 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring dark:bg-gray-900 dark:text-white dark:border-gray-700",
        style: { paddingLeft: 30 },
        onChange: (r) => n(r.target.value),
        children: [
          /* @__PURE__ */ s.jsx("option", { value: "en", children: "English" }),
          /* @__PURE__ */ s.jsx("option", { value: "es", children: "Spanish" }),
          /* @__PURE__ */ s.jsx("option", { value: "id", children: "Indonesia" })
        ]
      }
    ),
    /* @__PURE__ */ s.jsx(
      "svg",
      {
        className: "pointer-events-none absolute  top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        style: { right: 3, marginRight: 4 },
        children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" })
      }
    )
  ] }) });
}
function cs() {
  return /* @__PURE__ */ s.jsx("footer", { className: "bg-gray-50 border-t border-gray-200", children: /* @__PURE__ */ s.jsxs("div", { className: "container mx-auto px-4 md:px-6 pt-12 pb-6", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-5", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ s.jsx(A, { href: "/", className: "flex items-center gap-2 mb-4", children: /* @__PURE__ */ s.jsx("img", { src: "/images/plexicus-logo-color.png", alt: "Plexicus ASPM", className: "h-10 w-auto" }) }),
        /* @__PURE__ */ s.jsx("p", { className: "text-gray-600 mb-4 max-w-sm", children: "Elevate your cybersecurity strategy with Plexicus" }),
        /* @__PURE__ */ s.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ s.jsxs("a", { href: "#", className: "text-gray-400 hover:text-gray-500", children: [
            /* @__PURE__ */ s.jsx("span", { className: "sr-only", children: "Twitter" }),
            /* @__PURE__ */ s.jsx("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ s.jsx("path", { d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" }) })
          ] }),
          /* @__PURE__ */ s.jsxs("a", { href: "#", className: "text-gray-400 hover:text-gray-500", children: [
            /* @__PURE__ */ s.jsx("span", { className: "sr-only", children: "LinkedIn" }),
            /* @__PURE__ */ s.jsx("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ s.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
                clipRule: "evenodd"
              }
            ) })
          ] }),
          /* @__PURE__ */ s.jsxs("a", { href: "#", className: "text-gray-400 hover:text-gray-500", children: [
            /* @__PURE__ */ s.jsx("span", { className: "sr-only", children: "GitHub" }),
            /* @__PURE__ */ s.jsx("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ s.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                clipRule: "evenodd"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "mt-6", children: /* @__PURE__ */ s.jsx(ns, {}) })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("h3", { className: "text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4", children: "Products" }),
        /* @__PURE__ */ s.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(A, { href: "/products/aspm-overview", className: "text-gray-600 hover:text-gray-900", children: "ASPM Overview" }) }),
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(A, { href: "/products/benefits", className: "text-gray-600 hover:text-gray-900", children: "Benefits" }) }),
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(A, { href: "/products/use-cases", className: "text-gray-600 hover:text-gray-900", children: "Use Cases" }) }),
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(A, { href: "/pricing", className: "text-gray-600 hover:text-gray-900", children: "Pricing" }) })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("h3", { className: "text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4", children: "Resources" }),
        /* @__PURE__ */ s.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(A, { href: "/blog", className: "text-gray-600 hover:text-gray-900", children: "Blog" }) }),
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(A, { href: "/docs", className: "text-gray-600 hover:text-gray-900", children: "Documentation" }) }),
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(A, { href: "/case-studies", className: "text-gray-600 hover:text-gray-900", children: "Case Studies" }) }),
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(A, { href: "/security-resources", className: "text-gray-600 hover:text-gray-900", children: "Security Resources" }) })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("h3", { className: "text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4", children: "Company" }),
        /* @__PURE__ */ s.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(A, { href: "/about", className: "text-gray-600 hover:text-gray-900", children: "About Us" }) }),
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(A, { href: "/contact", className: "text-gray-600 hover:text-gray-900", children: "Contact" }) }),
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(A, { href: "/careers", className: "text-gray-600 hover:text-gray-900", children: "Careers" }) }),
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(A, { href: "/privacy", className: "text-gray-600 hover:text-gray-900", children: "Privacy Policy" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "mt-8 pt-6 border-t border-gray-200", children: /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
      /* @__PURE__ */ s.jsxs("p", { className: "text-gray-500 text-sm", children: [
        "© 2025 PLEXICUS, LLC.",
        " ",
        /* @__PURE__ */ s.jsx(A, { href: "/privacy", className: "underline hover:text-gray-700", children: "Privacy Policy" }),
        " ",
        "·",
        " ",
        /* @__PURE__ */ s.jsx(A, { href: "/management", className: "underline hover:text-gray-700", children: "Management Policy" }),
        " ",
        "·",
        " ",
        /* @__PURE__ */ s.jsx(A, { href: "/legal", className: "underline hover:text-gray-700", children: "Legal Notice" })
      ] }),
      /* @__PURE__ */ s.jsx("div", { children: /* @__PURE__ */ s.jsxs("div", { className: "inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full border border-green-200", children: [
        /* @__PURE__ */ s.jsx("svg", { className: "w-4 h-4 mr-1", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ s.jsx(
          "path",
          {
            d: "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ) }),
        "SOC2 Type II Readiness"
      ] }) })
    ] }) })
  ] }) });
}
export {
  cs as FooterPlexicus,
  ls as NavbarPlexicus,
  ns as SelectLanguage
};
