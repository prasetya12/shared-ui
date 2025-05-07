import * as Mt from "react";
import $e, { createContext as Tt, useContext as At, useCallback as Se, useState as Ce, useRef as Le, useEffect as xe } from "react";
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
var He;
function $t() {
  if (He) return fe;
  He = 1;
  var s = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(r, n, o) {
    var a = null;
    if (o !== void 0 && (a = "" + o), n.key !== void 0 && (a = "" + n.key), "key" in n) {
      o = {};
      for (var c in n)
        c !== "key" && (o[c] = n[c]);
    } else o = n;
    return n = o.ref, {
      $$typeof: s,
      type: r,
      key: a,
      ref: n !== void 0 ? n : null,
      props: o
    };
  }
  return fe.Fragment = e, fe.jsx = t, fe.jsxs = t, fe;
}
var he = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function zt() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && function() {
    function s(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === F ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case m:
          return "Fragment";
        case R:
          return "Profiler";
        case v:
          return "StrictMode";
        case K:
          return "Suspense";
        case U:
          return "SuspenseList";
        case E:
          return "Activity";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case h:
            return "Portal";
          case T:
            return (g.displayName || "Context") + ".Provider";
          case P:
            return (g._context.displayName || "Context") + ".Consumer";
          case A:
            var j = g.render;
            return g = g.displayName, g || (g = j.displayName || j.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case M:
            return j = g.displayName || null, j !== null ? j : s(g.type) || "Memo";
          case x:
            j = g._payload, g = g._init;
            try {
              return s(g(j));
            } catch {
            }
        }
      return null;
    }
    function e(g) {
      return "" + g;
    }
    function t(g) {
      try {
        e(g);
        var j = !1;
      } catch {
        j = !0;
      }
      if (j) {
        j = console;
        var N = j.error, L = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return N.call(
          j,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          L
        ), e(g);
      }
    }
    function r(g) {
      if (g === m) return "<>";
      if (typeof g == "object" && g !== null && g.$$typeof === x)
        return "<...>";
      try {
        var j = s(g);
        return j ? "<" + j + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var g = O.A;
      return g === null ? null : g.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function a(g) {
      if (I.call(g, "key")) {
        var j = Object.getOwnPropertyDescriptor(g, "key").get;
        if (j && j.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function c(g, j) {
      function N() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          j
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: N,
        configurable: !0
      });
    }
    function l() {
      var g = s(this.type);
      return H[g] || (H[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function d(g, j, N, L, $, J, ne, z) {
      return N = J.ref, g = {
        $$typeof: b,
        type: g,
        key: j,
        props: J,
        _owner: $
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(g, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(g, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.defineProperty(g, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function u(g, j, N, L, $, J, ne, z) {
      var D = j.children;
      if (D !== void 0)
        if (L)
          if (re(D)) {
            for (L = 0; L < D.length; L++)
              p(D[L]);
            Object.freeze && Object.freeze(D);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(D);
      if (I.call(j, "key")) {
        D = s(g);
        var q = Object.keys(j).filter(function(ue) {
          return ue !== "key";
        });
        L = 0 < q.length ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}", W[D + L] || (q = 0 < q.length ? "{" + q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          L,
          D,
          q,
          D
        ), W[D + L] = !0);
      }
      if (D = null, N !== void 0 && (t(N), D = "" + N), a(j) && (t(j.key), D = "" + j.key), "key" in j) {
        N = {};
        for (var ee in j)
          ee !== "key" && (N[ee] = j[ee]);
      } else N = j;
      return D && c(
        N,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), d(
        g,
        D,
        J,
        $,
        n(),
        N,
        ne,
        z
      );
    }
    function p(g) {
      typeof g == "object" && g !== null && g.$$typeof === b && g._store && (g._store.validated = 1);
    }
    var f = $e, b = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), T = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), E = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), O = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, re = Array.isArray, G = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      "react-stack-bottom-frame": function(g) {
        return g();
      }
    };
    var V, H = {}, Y = f["react-stack-bottom-frame"].bind(
      f,
      o
    )(), k = G(r(o)), W = {};
    he.Fragment = m, he.jsx = function(g, j, N, L, $) {
      var J = 1e4 > O.recentlyCreatedOwnerStacks++;
      return u(
        g,
        j,
        N,
        !1,
        L,
        $,
        J ? Error("react-stack-top-frame") : Y,
        J ? G(r(g)) : k
      );
    }, he.jsxs = function(g, j, N, L, $) {
      var J = 1e4 > O.recentlyCreatedOwnerStacks++;
      return u(
        g,
        j,
        N,
        !0,
        L,
        $,
        J ? Error("react-stack-top-frame") : Y,
        J ? G(r(g)) : k
      );
    };
  }()), he;
}
var _e;
function Ft() {
  return _e || (_e = 1, process.env.NODE_ENV === "production" ? be.exports = $t() : be.exports = zt()), be.exports;
}
var i = Ft();
function gt(s) {
  var e, t, r = "";
  if (typeof s == "string" || typeof s == "number") r += s;
  else if (typeof s == "object") if (Array.isArray(s)) {
    var n = s.length;
    for (e = 0; e < n; e++) s[e] && (t = gt(s[e])) && (r && (r += " "), r += t);
  } else for (t in s) s[t] && (r && (r += " "), r += t);
  return r;
}
function mt() {
  for (var s, e, t = 0, r = "", n = arguments.length; t < n; t++) (s = arguments[t]) && (e = gt(s)) && (r && (r += " "), r += e);
  return r;
}
const Ye = (s) => typeof s == "boolean" ? `${s}` : s === 0 ? "0" : s, Je = mt, It = (s, e) => (t) => {
  var r;
  if ((e == null ? void 0 : e.variants) == null) return Je(s, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: n, defaultVariants: o } = e, a = Object.keys(n).map((d) => {
    const u = t == null ? void 0 : t[d], p = o == null ? void 0 : o[d];
    if (u === null) return null;
    const f = Ye(u) || Ye(p);
    return n[d][f];
  }), c = t && Object.entries(t).reduce((d, u) => {
    let [p, f] = u;
    return f === void 0 || (d[p] = f), d;
  }, {}), l = e == null || (r = e.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, u) => {
    let { class: p, className: f, ...b } = u;
    return Object.entries(b).every((h) => {
      let [m, v] = h;
      return Array.isArray(v) ? v.includes({
        ...o,
        ...c
      }[m]) : {
        ...o,
        ...c
      }[m] === v;
    }) ? [
      ...d,
      p,
      f
    ] : d;
  }, []);
  return Je(s, a, l, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, Ge = "-", Vt = (s) => {
  const e = Dt(s), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = s;
  return {
    getClassGroupId: (a) => {
      const c = a.split(Ge);
      return c[0] === "" && c.length !== 1 && c.shift(), xt(c, e) || Wt(a);
    },
    getConflictingClassGroupIds: (a, c) => {
      const l = t[a] || [];
      return c && r[a] ? [...l, ...r[a]] : l;
    }
  };
}, xt = (s, e) => {
  var a;
  if (s.length === 0)
    return e.classGroupId;
  const t = s[0], r = e.nextPart.get(t), n = r ? xt(s.slice(1), r) : void 0;
  if (n)
    return n;
  if (e.validators.length === 0)
    return;
  const o = s.join(Ge);
  return (a = e.validators.find(({
    validator: c
  }) => c(o))) == null ? void 0 : a.classGroupId;
}, qe = /^\[(.+)\]$/, Wt = (s) => {
  if (qe.test(s)) {
    const e = qe.exec(s)[1], t = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, Dt = (s) => {
  const {
    theme: e,
    classGroups: t
  } = s, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in t)
    ze(t[n], r, n, e);
  return r;
}, ze = (s, e, t, r) => {
  s.forEach((n) => {
    if (typeof n == "string") {
      const o = n === "" ? e : Xe(e, n);
      o.classGroupId = t;
      return;
    }
    if (typeof n == "function") {
      if (Bt(n)) {
        ze(n(r), e, t, r);
        return;
      }
      e.validators.push({
        validator: n,
        classGroupId: t
      });
      return;
    }
    Object.entries(n).forEach(([o, a]) => {
      ze(a, Xe(e, o), t, r);
    });
  });
}, Xe = (s, e) => {
  let t = s;
  return e.split(Ge).forEach((r) => {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}, Bt = (s) => s.isThemeGetter, Ut = (s) => {
  if (s < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const n = (o, a) => {
    t.set(o, a), e++, e > s && (e = 0, r = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let a = t.get(o);
      if (a !== void 0)
        return a;
      if ((a = r.get(o)) !== void 0)
        return n(o, a), a;
    },
    set(o, a) {
      t.has(o) ? t.set(o, a) : n(o, a);
    }
  };
}, Fe = "!", Ie = ":", Gt = Ie.length, Ht = (s) => {
  const {
    prefix: e,
    experimentalParseClassName: t
  } = s;
  let r = (n) => {
    const o = [];
    let a = 0, c = 0, l = 0, d;
    for (let h = 0; h < n.length; h++) {
      let m = n[h];
      if (a === 0 && c === 0) {
        if (m === Ie) {
          o.push(n.slice(l, h)), l = h + Gt;
          continue;
        }
        if (m === "/") {
          d = h;
          continue;
        }
      }
      m === "[" ? a++ : m === "]" ? a-- : m === "(" ? c++ : m === ")" && c--;
    }
    const u = o.length === 0 ? n : n.substring(l), p = Kt(u), f = p !== u, b = d && d > l ? d - l : void 0;
    return {
      modifiers: o,
      hasImportantModifier: f,
      baseClassName: p,
      maybePostfixModifierPosition: b
    };
  };
  if (e) {
    const n = e + Ie, o = r;
    r = (a) => a.startsWith(n) ? o(a.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (t) {
    const n = r;
    r = (o) => t({
      className: o,
      parseClassName: n
    });
  }
  return r;
}, Kt = (s) => s.endsWith(Fe) ? s.substring(0, s.length - 1) : s.startsWith(Fe) ? s.substring(1) : s, _t = (s) => {
  const e = Object.fromEntries(s.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const n = [];
    let o = [];
    return r.forEach((a) => {
      a[0] === "[" || e[a] ? (n.push(...o.sort(), a), o = []) : o.push(a);
    }), n.push(...o.sort()), n;
  };
}, Yt = (s) => ({
  cache: Ut(s.cacheSize),
  parseClassName: Ht(s),
  sortModifiers: _t(s),
  ...Vt(s)
}), Jt = /\s+/, qt = (s, e) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: n,
    sortModifiers: o
  } = e, a = [], c = s.trim().split(Jt);
  let l = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const u = c[d], {
      isExternal: p,
      modifiers: f,
      hasImportantModifier: b,
      baseClassName: h,
      maybePostfixModifierPosition: m
    } = t(u);
    if (p) {
      l = u + (l.length > 0 ? " " + l : l);
      continue;
    }
    let v = !!m, R = r(v ? h.substring(0, m) : h);
    if (!R) {
      if (!v) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (R = r(h), !R) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      v = !1;
    }
    const P = o(f).join(":"), T = b ? P + Fe : P, A = T + R;
    if (a.includes(A))
      continue;
    a.push(A);
    const K = n(R, v);
    for (let U = 0; U < K.length; ++U) {
      const M = K[U];
      a.push(T + M);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Xt() {
  let s = 0, e, t, r = "";
  for (; s < arguments.length; )
    (e = arguments[s++]) && (t = wt(e)) && (r && (r += " "), r += t);
  return r;
}
const wt = (s) => {
  if (typeof s == "string")
    return s;
  let e, t = "";
  for (let r = 0; r < s.length; r++)
    s[r] && (e = wt(s[r])) && (t && (t += " "), t += e);
  return t;
};
function Qt(s, ...e) {
  let t, r, n, o = a;
  function a(l) {
    const d = e.reduce((u, p) => p(u), s());
    return t = Yt(d), r = t.cache.get, n = t.cache.set, o = c, c(l);
  }
  function c(l) {
    const d = r(l);
    if (d)
      return d;
    const u = qt(l, t);
    return n(l, u), u;
  }
  return function() {
    return o(Xt.apply(null, arguments));
  };
}
const B = (s) => {
  const e = (t) => t[s] || [];
  return e.isThemeGetter = !0, e;
}, yt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, bt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Zt = /^\d+\/\d+$/, er = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, tr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, rr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, sr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ir = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, oe = (s) => Zt.test(s), C = (s) => !!s && !Number.isNaN(Number(s)), te = (s) => !!s && Number.isInteger(Number(s)), Me = (s) => s.endsWith("%") && C(s.slice(0, -1)), Q = (s) => er.test(s), nr = () => !0, or = (s) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  tr.test(s) && !rr.test(s)
), vt = () => !1, ar = (s) => sr.test(s), lr = (s) => ir.test(s), cr = (s) => !w(s) && !y(s), dr = (s) => ce(s, St, vt), w = (s) => yt.test(s), se = (s) => ce(s, Ct, or), Te = (s) => ce(s, gr, C), Qe = (s) => ce(s, kt, vt), ur = (s) => ce(s, jt, lr), ve = (s) => ce(s, Lt, ar), y = (s) => bt.test(s), pe = (s) => de(s, Ct), fr = (s) => de(s, mr), Ze = (s) => de(s, kt), hr = (s) => de(s, St), pr = (s) => de(s, jt), ke = (s) => de(s, Lt, !0), ce = (s, e, t) => {
  const r = yt.exec(s);
  return r ? r[1] ? e(r[1]) : t(r[2]) : !1;
}, de = (s, e, t = !1) => {
  const r = bt.exec(s);
  return r ? r[1] ? e(r[1]) : t : !1;
}, kt = (s) => s === "position" || s === "percentage", jt = (s) => s === "image" || s === "url", St = (s) => s === "length" || s === "size" || s === "bg-size", Ct = (s) => s === "length", gr = (s) => s === "number", mr = (s) => s === "family-name", Lt = (s) => s === "shadow", xr = () => {
  const s = B("color"), e = B("font"), t = B("text"), r = B("font-weight"), n = B("tracking"), o = B("leading"), a = B("breakpoint"), c = B("container"), l = B("spacing"), d = B("radius"), u = B("shadow"), p = B("inset-shadow"), f = B("text-shadow"), b = B("drop-shadow"), h = B("blur"), m = B("perspective"), v = B("aspect"), R = B("ease"), P = B("animate"), T = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], A = () => [
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
  ], K = () => [...A(), y, w], U = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], x = () => [y, w, l], E = () => [oe, "full", "auto", ...x()], F = () => [te, "none", "subgrid", y, w], O = () => ["auto", {
    span: ["full", te, y, w]
  }, te, y, w], I = () => [te, "auto", y, w], re = () => ["auto", "min", "max", "fr", y, w], G = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], V = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], H = () => ["auto", ...x()], Y = () => [oe, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...x()], k = () => [s, y, w], W = () => [...A(), Ze, Qe, {
    position: [y, w]
  }], g = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], j = () => ["auto", "cover", "contain", hr, dr, {
    size: [y, w]
  }], N = () => [Me, pe, se], L = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    y,
    w
  ], $ = () => ["", C, pe, se], J = () => ["solid", "dashed", "dotted", "double"], ne = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], z = () => [C, Me, Ze, Qe], D = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    h,
    y,
    w
  ], q = () => ["none", C, y, w], ee = () => ["none", C, y, w], ue = () => [C, y, w], ye = () => [oe, "full", ...x()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Q],
      breakpoint: [Q],
      color: [nr],
      container: [Q],
      "drop-shadow": [Q],
      ease: ["in", "out", "in-out"],
      font: [cr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Q],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Q],
      shadow: [Q],
      spacing: ["px", C],
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
        aspect: ["auto", "square", oe, w, y, v]
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
        columns: [C, w, y, c]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": T()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": T()
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
        object: K()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: U()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": U()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": U()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: M()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": M()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": M()
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
        inset: E()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": E()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": E()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: E()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: E()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: E()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: E()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: E()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: E()
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
        z: [te, "auto", y, w]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [oe, "full", "auto", c, ...x()]
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
        flex: [C, oe, "auto", "initial", "none", w]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", C, y, w]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", C, y, w]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [te, "first", "last", "none", y, w]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": F()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: O()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": F()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: O()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
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
        gap: x()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": x()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": x()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...G(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...V(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...V()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...G()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...V(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...V(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": G()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...V(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...V()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: x()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: x()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: x()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: x()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: x()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: x()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: x()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: x()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: x()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: H()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: H()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: H()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: H()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: H()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: H()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: H()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: H()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: H()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": x()
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
        "space-y": x()
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
        size: Y()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [c, "screen", ...Y()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          c,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...Y()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          c,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...Y()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...Y()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...Y()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...Y()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, pe, se]
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
        font: [r, y, Te]
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
        font: [fr, w, e]
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
        tracking: [n, y, w]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [C, "none", y, Te]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...x()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", y, w]
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
        list: ["disc", "decimal", "none", y, w]
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
        placeholder: k()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: k()
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
        decoration: [...J(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [C, "from-font", "auto", y, se]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: k()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [C, "auto", y, w]
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
        indent: x()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", y, w]
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
        content: ["none", y, w]
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
        bg: W()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: g()
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
          }, te, y, w],
          radial: ["", y, w],
          conic: [te, y, w]
        }, pr, ur]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: k()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: N()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: N()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: N()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: k()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: k()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: k()
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
        border: $()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": $()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": $()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": $()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": $()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": $()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": $()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": $()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": $()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": $()
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
        "divide-y": $()
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
        border: [...J(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...J(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: k()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": k()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": k()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": k()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": k()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": k()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": k()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": k()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": k()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: k()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...J(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [C, y, w]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", C, pe, se]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: k()
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
          ke,
          ve
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: k()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", p, ke, ve]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": k()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: $()
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
        ring: k()
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
        "ring-offset": k()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": $()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": k()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", f, ke, ve]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": k()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [C, y, w]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ne(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ne()
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
        "mask-linear-from": k()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": k()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": z()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": z()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": k()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": k()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": z()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": z()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": k()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": k()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": z()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": z()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": k()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": k()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": z()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": z()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": k()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": k()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": z()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": z()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": k()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": k()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": z()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": z()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": k()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": k()
      }],
      "mask-image-radial": [{
        "mask-radial": [y, w]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": z()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": z()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": k()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": k()
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
        "mask-radial-at": A()
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
        "mask-conic-from": k()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": k()
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
        mask: W()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: g()
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
        mask: ["none", y, w]
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
          y,
          w
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: D()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [C, y, w]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [C, y, w]
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
          b,
          ke,
          ve
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": k()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", C, y, w]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [C, y, w]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", C, y, w]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [C, y, w]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", C, y, w]
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
          y,
          w
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": D()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [C, y, w]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [C, y, w]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", C, y, w]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [C, y, w]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", C, y, w]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [C, y, w]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [C, y, w]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", C, y, w]
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
        "border-spacing": x()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": x()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": x()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", y, w]
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
        duration: [C, "initial", y, w]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", R, y, w]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [C, y, w]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", P, y, w]
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
        perspective: [m, y, w]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": K()
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
        skew: ue()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ue()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ue()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [y, w, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: K()
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
        translate: ye()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ye()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ye()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ye()
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
        accent: k()
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
        caret: k()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", y, w]
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
        "scroll-m": x()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": x()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": x()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": x()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": x()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": x()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": x()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": x()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": x()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": x()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": x()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": x()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": x()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": x()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": x()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": x()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": x()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": x()
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
        "will-change": ["auto", "scroll", "contents", "transform", y, w]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...k()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [C, pe, se, Te]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...k()]
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
}, wr = /* @__PURE__ */ Qt(xr);
function yr(...s) {
  return wr(mt(s));
}
const br = It(
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
), Ve = Mt.forwardRef(
  ({ className: s, variant: e, size: t, asChild: r = !1, ...n }, o) => /* @__PURE__ */ i.jsx("button", { className: yr(br({ variant: e, size: t, className: s })), ref: o, ...n })
);
Ve.displayName = "Button";
const Z = ({ href: s, children: e, className: t = "", target: r = "_self", rel: n = "noopener noreferrer", onClick: o }) => {
  const a = (c) => {
    r !== "_blank" && (c.preventDefault(), window.location.href = s), o && o(c);
  };
  return /* @__PURE__ */ i.jsx(
    "a",
    {
      href: s,
      className: t,
      target: r,
      rel: n,
      onClick: a,
      "aria-label": typeof e == "string" ? e : void 0,
      children: e
    }
  );
}, S = (s) => typeof s == "string", ge = () => {
  let s, e;
  const t = new Promise((r, n) => {
    s = r, e = n;
  });
  return t.resolve = s, t.reject = e, t;
}, et = (s) => s == null ? "" : "" + s, vr = (s, e, t) => {
  s.forEach((r) => {
    e[r] && (t[r] = e[r]);
  });
}, kr = /###/g, tt = (s) => s && s.indexOf("###") > -1 ? s.replace(kr, ".") : s, rt = (s) => !s || S(s), me = (s, e, t) => {
  const r = S(e) ? e.split(".") : e;
  let n = 0;
  for (; n < r.length - 1; ) {
    if (rt(s)) return {};
    const o = tt(r[n]);
    !s[o] && t && (s[o] = new t()), Object.prototype.hasOwnProperty.call(s, o) ? s = s[o] : s = {}, ++n;
  }
  return rt(s) ? {} : {
    obj: s,
    k: tt(r[n])
  };
}, st = (s, e, t) => {
  const {
    obj: r,
    k: n
  } = me(s, e, Object);
  if (r !== void 0 || e.length === 1) {
    r[n] = t;
    return;
  }
  let o = e[e.length - 1], a = e.slice(0, e.length - 1), c = me(s, a, Object);
  for (; c.obj === void 0 && a.length; )
    o = `${a[a.length - 1]}.${o}`, a = a.slice(0, a.length - 1), c = me(s, a, Object), c != null && c.obj && typeof c.obj[`${c.k}.${o}`] < "u" && (c.obj = void 0);
  c.obj[`${c.k}.${o}`] = t;
}, jr = (s, e, t, r) => {
  const {
    obj: n,
    k: o
  } = me(s, e, Object);
  n[o] = n[o] || [], n[o].push(t);
}, Oe = (s, e) => {
  const {
    obj: t,
    k: r
  } = me(s, e);
  if (t && Object.prototype.hasOwnProperty.call(t, r))
    return t[r];
}, Sr = (s, e, t) => {
  const r = Oe(s, t);
  return r !== void 0 ? r : Oe(e, t);
}, Ot = (s, e, t) => {
  for (const r in e)
    r !== "__proto__" && r !== "constructor" && (r in s ? S(s[r]) || s[r] instanceof String || S(e[r]) || e[r] instanceof String ? t && (s[r] = e[r]) : Ot(s[r], e[r], t) : s[r] = e[r]);
  return s;
}, ae = (s) => s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Cr = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Lr = (s) => S(s) ? s.replace(/[&<>"'\/]/g, (e) => Cr[e]) : s;
class Or {
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
const Nr = [" ", ",", "?", "!", ";"], Rr = new Or(20), Pr = (s, e, t) => {
  e = e || "", t = t || "";
  const r = Nr.filter((a) => e.indexOf(a) < 0 && t.indexOf(a) < 0);
  if (r.length === 0) return !0;
  const n = Rr.getRegExp(`(${r.map((a) => a === "?" ? "\\?" : a).join("|")})`);
  let o = !n.test(s);
  if (!o) {
    const a = s.indexOf(t);
    a > 0 && !n.test(s.substring(0, a)) && (o = !0);
  }
  return o;
}, We = function(s, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!s) return;
  if (s[e])
    return Object.prototype.hasOwnProperty.call(s, e) ? s[e] : void 0;
  const r = e.split(t);
  let n = s;
  for (let o = 0; o < r.length; ) {
    if (!n || typeof n != "object")
      return;
    let a, c = "";
    for (let l = o; l < r.length; ++l)
      if (l !== o && (c += t), c += r[l], a = n[c], a !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof a) > -1 && l < r.length - 1)
          continue;
        o += l - o + 1;
        break;
      }
    n = a;
  }
  return n;
}, Ne = (s) => s == null ? void 0 : s.replace("_", "-"), Er = {
  type: "logger",
  log(s) {
    this.output("log", s);
  },
  warn(s) {
    this.output("warn", s);
  },
  error(s) {
    this.output("error", s);
  },
  output(s, e) {
    var t, r;
    (r = (t = console == null ? void 0 : console[s]) == null ? void 0 : t.apply) == null || r.call(t, console, e);
  }
};
class Re {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || Er, this.options = t, this.debug = t.debug;
  }
  log() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return this.forward(t, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return this.forward(t, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return this.forward(t, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, r, n) {
    return n && !this.debug ? null : (S(e[0]) && (e[0] = `${r}${this.prefix} ${e[0]}`), this.logger[t](e));
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
var X = new Re();
class Ee {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const n = this.observers[r].get(t) || 0;
      this.observers[r].set(t, n + 1);
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
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
      r[n - 1] = arguments[n];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((a) => {
      let [c, l] = a;
      for (let d = 0; d < l; d++)
        c(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((a) => {
      let [c, l] = a;
      for (let d = 0; d < l; d++)
        c.apply(c, [e, ...r]);
    });
  }
}
class it extends Ee {
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
  getResource(e, t, r) {
    var d, u;
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, a = n.ignoreJSONStructure !== void 0 ? n.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let c;
    e.indexOf(".") > -1 ? c = e.split(".") : (c = [e, t], r && (Array.isArray(r) ? c.push(...r) : S(r) && o ? c.push(...r.split(o)) : c.push(r)));
    const l = Oe(this.data, c);
    return !l && !t && !r && e.indexOf(".") > -1 && (e = c[0], t = c[1], r = c.slice(2).join(".")), l || !a || !S(r) ? l : We((u = (d = this.data) == null ? void 0 : d[e]) == null ? void 0 : u[t], r, o);
  }
  addResource(e, t, r, n) {
    let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const a = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let c = [e, t];
    r && (c = c.concat(a ? r.split(a) : r)), e.indexOf(".") > -1 && (c = e.split("."), n = t, t = c[1]), this.addNamespaces(t), st(this.data, c, n), o.silent || this.emit("added", e, t, r, n);
  }
  addResources(e, t, r) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const o in r)
      (S(r[o]) || Array.isArray(r[o])) && this.addResource(e, t, o, r[o], {
        silent: !0
      });
    n.silent || this.emit("added", e, t, r);
  }
  addResourceBundle(e, t, r, n, o) {
    let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, c = [e, t];
    e.indexOf(".") > -1 && (c = e.split("."), n = r, r = t, t = c[1]), this.addNamespaces(t);
    let l = Oe(this.data, c) || {};
    a.skipCopy || (r = JSON.parse(JSON.stringify(r))), n ? Ot(l, r, o) : l = {
      ...l,
      ...r
    }, st(this.data, c, l), a.silent || this.emit("added", e, t, r);
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
    return !!(t && Object.keys(t) || []).find((n) => t[n] && Object.keys(t[n]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Nt = {
  processors: {},
  addPostProcessor(s) {
    this.processors[s.name] = s;
  },
  handle(s, e, t, r, n) {
    return s.forEach((o) => {
      var a;
      e = ((a = this.processors[o]) == null ? void 0 : a.process(e, t, r, n)) ?? e;
    }), e;
  }
};
const nt = {}, ot = (s) => !S(s) && typeof s != "boolean" && typeof s != "number";
class Pe extends Ee {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), vr(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = X.create("translator");
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
    const r = this.resolve(e, t);
    return (r == null ? void 0 : r.res) !== void 0;
  }
  extractFromKey(e, t) {
    let r = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const n = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let o = t.ns || this.options.defaultNS || [];
    const a = r && e.indexOf(r) > -1, c = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !Pr(e, r, n);
    if (a && !c) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: S(o) ? [o] : o
        };
      const d = e.split(r);
      (r !== n || r === n && this.options.ns.indexOf(d[0]) > -1) && (o = d.shift()), e = d.join(n);
    }
    return {
      key: e,
      namespaces: S(o) ? [o] : o
    };
  }
  translate(e, t, r) {
    if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof options == "object" && (t = {
      ...t
    }), t || (t = {}), e == null) return "";
    Array.isArray(e) || (e = [String(e)]);
    const n = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails, o = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, {
      key: a,
      namespaces: c
    } = this.extractFromKey(e[e.length - 1], t), l = c[c.length - 1], d = t.lng || this.language, u = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((d == null ? void 0 : d.toLowerCase()) === "cimode") {
      if (u) {
        const O = t.nsSeparator || this.options.nsSeparator;
        return n ? {
          res: `${l}${O}${a}`,
          usedKey: a,
          exactUsedKey: a,
          usedLng: d,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(t)
        } : `${l}${O}${a}`;
      }
      return n ? {
        res: a,
        usedKey: a,
        exactUsedKey: a,
        usedLng: d,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(t)
      } : a;
    }
    const p = this.resolve(e, t);
    let f = p == null ? void 0 : p.res;
    const b = (p == null ? void 0 : p.usedKey) || a, h = (p == null ? void 0 : p.exactUsedKey) || a, m = ["[object Number]", "[object Function]", "[object RegExp]"], v = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, R = !this.i18nFormat || this.i18nFormat.handleAsObject, P = t.count !== void 0 && !S(t.count), T = Pe.hasDefaultValue(t), A = P ? this.pluralResolver.getSuffix(d, t.count, t) : "", K = t.ordinal && P ? this.pluralResolver.getSuffix(d, t.count, {
      ordinal: !1
    }) : "", U = P && !t.ordinal && t.count === 0, M = U && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${A}`] || t[`defaultValue${K}`] || t.defaultValue;
    let x = f;
    R && !f && T && (x = M);
    const E = ot(x), F = Object.prototype.toString.apply(x);
    if (R && x && E && m.indexOf(F) < 0 && !(S(v) && Array.isArray(x))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const O = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(b, x, {
          ...t,
          ns: c
        }) : `key '${a} (${this.language})' returned an object instead of string.`;
        return n ? (p.res = O, p.usedParams = this.getUsedParamsDetails(t), p) : O;
      }
      if (o) {
        const O = Array.isArray(x), I = O ? [] : {}, re = O ? h : b;
        for (const G in x)
          if (Object.prototype.hasOwnProperty.call(x, G)) {
            const V = `${re}${o}${G}`;
            T && !f ? I[G] = this.translate(V, {
              ...t,
              defaultValue: ot(M) ? M[G] : void 0,
              joinArrays: !1,
              ns: c
            }) : I[G] = this.translate(V, {
              ...t,
              joinArrays: !1,
              ns: c
            }), I[G] === V && (I[G] = x[G]);
          }
        f = I;
      }
    } else if (R && S(v) && Array.isArray(f))
      f = f.join(v), f && (f = this.extendTranslation(f, e, t, r));
    else {
      let O = !1, I = !1;
      !this.isValidLookup(f) && T && (O = !0, f = M), this.isValidLookup(f) || (I = !0, f = a);
      const G = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && I ? void 0 : f, V = T && M !== f && this.options.updateMissing;
      if (I || O || V) {
        if (this.logger.log(V ? "updateKey" : "missingKey", d, l, a, V ? M : f), o) {
          const W = this.resolve(a, {
            ...t,
            keySeparator: !1
          });
          W && W.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let H = [];
        const Y = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && Y && Y[0])
          for (let W = 0; W < Y.length; W++)
            H.push(Y[W]);
        else this.options.saveMissingTo === "all" ? H = this.languageUtils.toResolveHierarchy(t.lng || this.language) : H.push(t.lng || this.language);
        const k = (W, g, j) => {
          var L;
          const N = T && j !== f ? j : G;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(W, l, g, N, V, t) : (L = this.backendConnector) != null && L.saveMissing && this.backendConnector.saveMissing(W, l, g, N, V, t), this.emit("missingKey", W, l, g, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && P ? H.forEach((W) => {
          const g = this.pluralResolver.getSuffixes(W, t);
          U && t[`defaultValue${this.options.pluralSeparator}zero`] && g.indexOf(`${this.options.pluralSeparator}zero`) < 0 && g.push(`${this.options.pluralSeparator}zero`), g.forEach((j) => {
            k([W], a + j, t[`defaultValue${j}`] || M);
          });
        }) : k(H, a, M));
      }
      f = this.extendTranslation(f, e, t, p, r), I && f === a && this.options.appendNamespaceToMissingKey && (f = `${l}:${a}`), (I || O) && this.options.parseMissingKeyHandler && (f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${a}` : a, O ? f : void 0, t));
    }
    return n ? (p.res = f, p.usedParams = this.getUsedParamsDetails(t), p) : f;
  }
  extendTranslation(e, t, r, n, o) {
    var d, u;
    var a = this;
    if ((d = this.i18nFormat) != null && d.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || n.usedLng, n.usedNS, n.usedKey, {
        resolved: n
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const p = S(e) && (((u = r == null ? void 0 : r.interpolation) == null ? void 0 : u.skipOnVariables) !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let f;
      if (p) {
        const h = e.match(this.interpolator.nestingRegexp);
        f = h && h.length;
      }
      let b = r.replace && !S(r.replace) ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (b = {
        ...this.options.interpolation.defaultVariables,
        ...b
      }), e = this.interpolator.interpolate(e, b, r.lng || this.language || n.usedLng, r), p) {
        const h = e.match(this.interpolator.nestingRegexp), m = h && h.length;
        f < m && (r.nest = !1);
      }
      !r.lng && n && n.res && (r.lng = this.language || n.usedLng), r.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var h = arguments.length, m = new Array(h), v = 0; v < h; v++)
          m[v] = arguments[v];
        return (o == null ? void 0 : o[0]) === m[0] && !r.context ? (a.logger.warn(`It seems you are nesting recursively key: ${m[0]} in key: ${t[0]}`), null) : a.translate(...m, t);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const c = r.postProcess || this.options.postProcess, l = S(c) ? [c] : c;
    return e != null && (l != null && l.length) && r.applyPostProcessor !== !1 && (e = Nt.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...n,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, n, o, a, c;
    return S(e) && (e = [e]), e.forEach((l) => {
      if (this.isValidLookup(r)) return;
      const d = this.extractFromKey(l, t), u = d.key;
      n = u;
      let p = d.namespaces;
      this.options.fallbackNS && (p = p.concat(this.options.fallbackNS));
      const f = t.count !== void 0 && !S(t.count), b = f && !t.ordinal && t.count === 0, h = t.context !== void 0 && (S(t.context) || typeof t.context == "number") && t.context !== "", m = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      p.forEach((v) => {
        var R, P;
        this.isValidLookup(r) || (c = v, !nt[`${m[0]}-${v}`] && ((R = this.utils) != null && R.hasLoadedNamespace) && !((P = this.utils) != null && P.hasLoadedNamespace(c)) && (nt[`${m[0]}-${v}`] = !0, this.logger.warn(`key "${n}" for languages "${m.join(", ")}" won't get resolved as namespace "${c}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((T) => {
          var U;
          if (this.isValidLookup(r)) return;
          a = T;
          const A = [u];
          if ((U = this.i18nFormat) != null && U.addLookupKeys)
            this.i18nFormat.addLookupKeys(A, u, T, v, t);
          else {
            let M;
            f && (M = this.pluralResolver.getSuffix(T, t.count, t));
            const x = `${this.options.pluralSeparator}zero`, E = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (A.push(u + M), t.ordinal && M.indexOf(E) === 0 && A.push(u + M.replace(E, this.options.pluralSeparator)), b && A.push(u + x)), h) {
              const F = `${u}${this.options.contextSeparator}${t.context}`;
              A.push(F), f && (A.push(F + M), t.ordinal && M.indexOf(E) === 0 && A.push(F + M.replace(E, this.options.pluralSeparator)), b && A.push(F + x));
            }
          }
          let K;
          for (; K = A.pop(); )
            this.isValidLookup(r) || (o = K, r = this.getResource(T, v, K, t));
        }));
      });
    }), {
      res: r,
      usedKey: n,
      exactUsedKey: o,
      usedLng: a,
      usedNS: c
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, r) {
    var o;
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (o = this.i18nFormat) != null && o.getResource ? this.i18nFormat.getResource(e, t, r, n) : this.resourceStore.getResource(e, t, r, n);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = e.replace && !S(e.replace);
    let n = r ? e.replace : e;
    if (r && typeof e.count < "u" && (n.count = e.count), this.options.interpolation.defaultVariables && (n = {
      ...this.options.interpolation.defaultVariables,
      ...n
    }), !r) {
      n = {
        ...n
      };
      for (const o of t)
        delete n[o];
    }
    return n;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const r in e)
      if (Object.prototype.hasOwnProperty.call(e, r) && t === r.substring(0, t.length) && e[r] !== void 0)
        return !0;
    return !1;
  }
}
class at {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = X.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = Ne(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = Ne(e), !e || e.indexOf("-") < 0) return e;
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
      const n = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(n)) && (t = n);
    }), !t && this.options.supportedLngs && e.forEach((r) => {
      if (t) return;
      const n = this.getScriptPartFromCode(r);
      if (this.isSupportedCode(n)) return t = n;
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
    const r = this.getFallbackCodes(t || this.options.fallbackLng || [], e), n = [], o = (a) => {
      a && (this.isSupportedCode(a) ? n.push(a) : this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`));
    };
    return S(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(e))) : S(e) && o(this.formatLanguageCode(e)), r.forEach((a) => {
      n.indexOf(a) < 0 && o(this.formatLanguageCode(a));
    }), n;
  }
}
const lt = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, ct = {
  select: (s) => s === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Mr {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = X.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = Ne(e === "dev" ? "en" : e), n = t.ordinal ? "ordinal" : "cardinal", o = JSON.stringify({
      cleanedCode: r,
      type: n
    });
    if (o in this.pluralRulesCache)
      return this.pluralRulesCache[o];
    let a;
    try {
      a = new Intl.PluralRules(r, {
        type: n
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), ct;
      if (!e.match(/-|_/)) return ct;
      const l = this.languageUtils.getLanguagePartFromCode(e);
      a = this.getRule(l, t);
    }
    return this.pluralRulesCache[o] = a, a;
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = this.getRule(e, t);
    return r || (r = this.getRule("dev", t)), (r == null ? void 0 : r.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, r).map((n) => `${t}${n}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = this.getRule(e, t);
    return r || (r = this.getRule("dev", t)), r ? r.resolvedOptions().pluralCategories.sort((n, o) => lt[n] - lt[o]).map((n) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${n}`) : [];
  }
  getSuffix(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const n = this.getRule(e, r);
    return n ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${n.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, r));
  }
}
const dt = function(s, e, t) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = Sr(s, e, t);
  return !o && n && S(t) && (o = We(s, t, r), o === void 0 && (o = We(e, t, r))), o;
}, Ae = (s) => s.replace(/\$/g, "$$$$");
class Tr {
  constructor() {
    var t;
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = X.create("interpolator"), this.options = e, this.format = ((t = e == null ? void 0 : e.interpolation) == null ? void 0 : t.format) || ((r) => r), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: r,
      useRawValueToEscape: n,
      prefix: o,
      prefixEscaped: a,
      suffix: c,
      suffixEscaped: l,
      formatSeparator: d,
      unescapeSuffix: u,
      unescapePrefix: p,
      nestingPrefix: f,
      nestingPrefixEscaped: b,
      nestingSuffix: h,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: v,
      maxReplaces: R,
      alwaysFormat: P
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Lr, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = n !== void 0 ? n : !1, this.prefix = o ? ae(o) : a || "{{", this.suffix = c ? ae(c) : l || "}}", this.formatSeparator = d || ",", this.unescapePrefix = u ? "" : p || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = f ? ae(f) : b || ae("$t("), this.nestingSuffix = h ? ae(h) : m || ae(")"), this.nestingOptionsSeparator = v || ",", this.maxReplaces = R || 1e3, this.alwaysFormat = P !== void 0 ? P : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, r) => (t == null ? void 0 : t.source) === r ? (t.lastIndex = 0, t) : new RegExp(r, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, r, n) {
    var b;
    let o, a, c;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, d = (h) => {
      if (h.indexOf(this.formatSeparator) < 0) {
        const P = dt(t, l, h, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(P, void 0, r, {
          ...n,
          ...t,
          interpolationkey: h
        }) : P;
      }
      const m = h.split(this.formatSeparator), v = m.shift().trim(), R = m.join(this.formatSeparator).trim();
      return this.format(dt(t, l, v, this.options.keySeparator, this.options.ignoreJSONStructure), R, r, {
        ...n,
        ...t,
        interpolationkey: v
      });
    };
    this.resetRegExp();
    const u = (n == null ? void 0 : n.missingInterpolationHandler) || this.options.missingInterpolationHandler, p = ((b = n == null ? void 0 : n.interpolation) == null ? void 0 : b.skipOnVariables) !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (h) => Ae(h)
    }, {
      regex: this.regexp,
      safeValue: (h) => this.escapeValue ? Ae(this.escape(h)) : Ae(h)
    }].forEach((h) => {
      for (c = 0; o = h.regex.exec(e); ) {
        const m = o[1].trim();
        if (a = d(m), a === void 0)
          if (typeof u == "function") {
            const R = u(e, o, n);
            a = S(R) ? R : "";
          } else if (n && Object.prototype.hasOwnProperty.call(n, m))
            a = "";
          else if (p) {
            a = o[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${m} for interpolating ${e}`), a = "";
        else !S(a) && !this.useRawValueToEscape && (a = et(a));
        const v = h.safeValue(a);
        if (e = e.replace(o[0], v), p ? (h.regex.lastIndex += a.length, h.regex.lastIndex -= o[0].length) : h.regex.lastIndex = 0, c++, c >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, o, a;
    const c = (l, d) => {
      const u = this.nestingOptionsSeparator;
      if (l.indexOf(u) < 0) return l;
      const p = l.split(new RegExp(`${u}[ ]*{`));
      let f = `{${p[1]}`;
      l = p[0], f = this.interpolate(f, a);
      const b = f.match(/'/g), h = f.match(/"/g);
      (((b == null ? void 0 : b.length) ?? 0) % 2 === 0 && !h || h.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        a = JSON.parse(f), d && (a = {
          ...d,
          ...a
        });
      } catch (m) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, m), `${l}${u}${f}`;
      }
      return a.defaultValue && a.defaultValue.indexOf(this.prefix) > -1 && delete a.defaultValue, l;
    };
    for (; n = this.nestingRegexp.exec(e); ) {
      let l = [];
      a = {
        ...r
      }, a = a.replace && !S(a.replace) ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
      let d = !1;
      if (n[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(n[1])) {
        const u = n[1].split(this.formatSeparator).map((p) => p.trim());
        n[1] = u.shift(), l = u, d = !0;
      }
      if (o = t(c.call(this, n[1].trim(), a), a), o && n[0] === e && !S(o)) return o;
      S(o) || (o = et(o)), o || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`), o = ""), d && (o = l.reduce((u, p) => this.format(u, p, r.lng, {
        ...r,
        interpolationkey: n[1].trim()
      }), o.trim())), e = e.replace(n[0], o), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const Ar = (s) => {
  let e = s.toLowerCase().trim();
  const t = {};
  if (s.indexOf("(") > -1) {
    const r = s.split("(");
    e = r[0].toLowerCase().trim();
    const n = r[1].substring(0, r[1].length - 1);
    e === "currency" && n.indexOf(":") < 0 ? t.currency || (t.currency = n.trim()) : e === "relativetime" && n.indexOf(":") < 0 ? t.range || (t.range = n.trim()) : n.split(";").forEach((a) => {
      if (a) {
        const [c, ...l] = a.split(":"), d = l.join(":").trim().replace(/^'+|'+$/g, ""), u = c.trim();
        t[u] || (t[u] = d), d === "false" && (t[u] = !1), d === "true" && (t[u] = !0), isNaN(d) || (t[u] = parseInt(d, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, le = (s) => {
  const e = {};
  return (t, r, n) => {
    let o = n;
    n && n.interpolationkey && n.formatParams && n.formatParams[n.interpolationkey] && n[n.interpolationkey] && (o = {
      ...o,
      [n.interpolationkey]: void 0
    });
    const a = r + JSON.stringify(o);
    let c = e[a];
    return c || (c = s(Ne(r), n), e[a] = c), c(t);
  };
};
class $r {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = X.create("formatter"), this.options = e, this.formats = {
      number: le((t, r) => {
        const n = new Intl.NumberFormat(t, {
          ...r
        });
        return (o) => n.format(o);
      }),
      currency: le((t, r) => {
        const n = new Intl.NumberFormat(t, {
          ...r,
          style: "currency"
        });
        return (o) => n.format(o);
      }),
      datetime: le((t, r) => {
        const n = new Intl.DateTimeFormat(t, {
          ...r
        });
        return (o) => n.format(o);
      }),
      relativetime: le((t, r) => {
        const n = new Intl.RelativeTimeFormat(t, {
          ...r
        });
        return (o) => n.format(o, r.range || "day");
      }),
      list: le((t, r) => {
        const n = new Intl.ListFormat(t, {
          ...r
        });
        return (o) => n.format(o);
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
    this.formats[e.toLowerCase().trim()] = le(t);
  }
  format(e, t, r) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = t.split(this.formatSeparator);
    if (o.length > 1 && o[0].indexOf("(") > 1 && o[0].indexOf(")") < 0 && o.find((c) => c.indexOf(")") > -1)) {
      const c = o.findIndex((l) => l.indexOf(")") > -1);
      o[0] = [o[0], ...o.splice(1, c)].join(this.formatSeparator);
    }
    return o.reduce((c, l) => {
      var p;
      const {
        formatName: d,
        formatOptions: u
      } = Ar(l);
      if (this.formats[d]) {
        let f = c;
        try {
          const b = ((p = n == null ? void 0 : n.formatParams) == null ? void 0 : p[n.interpolationkey]) || {}, h = b.locale || b.lng || n.locale || n.lng || r;
          f = this.formats[d](c, h, {
            ...u,
            ...n,
            ...b
          });
        } catch (b) {
          this.logger.warn(b);
        }
        return f;
      } else
        this.logger.warn(`there was no format function for ${d}`);
      return c;
    }, e);
  }
}
const zr = (s, e) => {
  s.pending[e] !== void 0 && (delete s.pending[e], s.pendingCount--);
};
class Fr extends Ee {
  constructor(e, t, r) {
    var o, a;
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = r, this.languageUtils = r.languageUtils, this.options = n, this.logger = X.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = n.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = n.maxRetries >= 0 ? n.maxRetries : 5, this.retryTimeout = n.retryTimeout >= 1 ? n.retryTimeout : 350, this.state = {}, this.queue = [], (a = (o = this.backend) == null ? void 0 : o.init) == null || a.call(o, r, n.backend, n);
  }
  queueLoad(e, t, r, n) {
    const o = {}, a = {}, c = {}, l = {};
    return e.forEach((d) => {
      let u = !0;
      t.forEach((p) => {
        const f = `${d}|${p}`;
        !r.reload && this.store.hasResourceBundle(d, p) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? a[f] === void 0 && (a[f] = !0) : (this.state[f] = 1, u = !1, a[f] === void 0 && (a[f] = !0), o[f] === void 0 && (o[f] = !0), l[p] === void 0 && (l[p] = !0)));
      }), u || (c[d] = !0);
    }), (Object.keys(o).length || Object.keys(a).length) && this.queue.push({
      pending: a,
      pendingCount: Object.keys(a).length,
      loaded: {},
      errors: [],
      callback: n
    }), {
      toLoad: Object.keys(o),
      pending: Object.keys(a),
      toLoadLanguages: Object.keys(c),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(e, t, r) {
    const n = e.split("|"), o = n[0], a = n[1];
    t && this.emit("failedLoading", o, a, t), !t && r && this.store.addResourceBundle(o, a, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && r && (this.state[e] = 0);
    const c = {};
    this.queue.forEach((l) => {
      jr(l.loaded, [o], a), zr(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((d) => {
        c[d] || (c[d] = {});
        const u = l.loaded[d];
        u.length && u.forEach((p) => {
          c[d][p] === void 0 && (c[d][p] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", c), this.queue = this.queue.filter((l) => !l.done);
  }
  read(e, t, r) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, a = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return a(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: r,
        tried: n,
        wait: o,
        callback: a
      });
      return;
    }
    this.readingCalls++;
    const c = (d, u) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const p = this.waitingReads.shift();
        this.read(p.lng, p.ns, p.fcName, p.tried, p.wait, p.callback);
      }
      if (d && u && n < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, r, n + 1, o * 2, a);
        }, o);
        return;
      }
      a(d, u);
    }, l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const d = l(e, t);
        d && typeof d.then == "function" ? d.then((u) => c(null, u)).catch(c) : c(null, d);
      } catch (d) {
        c(d);
      }
      return;
    }
    return l(e, t, c);
  }
  prepareLoading(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), n && n();
    S(e) && (e = this.languageUtils.toResolveHierarchy(e)), S(t) && (t = [t]);
    const o = this.queueLoad(e, t, r, n);
    if (!o.toLoad.length)
      return o.pending.length || n(), null;
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
  loadOne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = e.split("|"), n = r[0], o = r[1];
    this.read(n, o, "read", void 0, void 0, (a, c) => {
      a && this.logger.warn(`${t}loading namespace ${o} for language ${n} failed`, a), !a && c && this.logger.log(`${t}loaded namespace ${o} for language ${n}`, c), this.loaded(e, a, c);
    });
  }
  saveMissing(e, t, r, n, o) {
    var l, d, u, p, f;
    let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if ((d = (l = this.services) == null ? void 0 : l.utils) != null && d.hasLoadedNamespace && !((p = (u = this.services) == null ? void 0 : u.utils) != null && p.hasLoadedNamespace(t))) {
      this.logger.warn(`did not save key "${r}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if ((f = this.backend) != null && f.create) {
        const b = {
          ...a,
          isUpdate: o
        }, h = this.backend.create.bind(this.backend);
        if (h.length < 6)
          try {
            let m;
            h.length === 5 ? m = h(e, t, r, n, b) : m = h(e, t, r, n), m && typeof m.then == "function" ? m.then((v) => c(null, v)).catch(c) : c(null, m);
          } catch (m) {
            c(m);
          }
        else
          h(e, t, r, n, c, b);
      }
      !e || !e[0] || this.store.addResource(e[0], t, r, n);
    }
  }
}
const ut = () => ({
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
  overloadTranslationOptionHandler: (s) => {
    let e = {};
    if (typeof s[1] == "object" && (e = s[1]), S(s[1]) && (e.defaultValue = s[1]), S(s[2]) && (e.tDescription = s[2]), typeof s[2] == "object" || typeof s[3] == "object") {
      const t = s[3] || s[2];
      Object.keys(t).forEach((r) => {
        e[r] = t[r];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (s) => s,
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
}), ft = (s) => {
  var e, t;
  return S(s.ns) && (s.ns = [s.ns]), S(s.fallbackLng) && (s.fallbackLng = [s.fallbackLng]), S(s.fallbackNS) && (s.fallbackNS = [s.fallbackNS]), ((t = (e = s.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : t.call(e, "cimode")) < 0 && (s.supportedLngs = s.supportedLngs.concat(["cimode"])), typeof s.initImmediate == "boolean" && (s.initAsync = s.initImmediate), s;
}, je = () => {
}, Ir = (s) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach((t) => {
    typeof s[t] == "function" && (s[t] = s[t].bind(s));
  });
};
class we extends Ee {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = ft(e), this.services = {}, this.logger = X, this.modules = {
      external: []
    }, Ir(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof t == "function" && (r = t, t = {}), t.defaultNS == null && t.ns && (S(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const n = ut();
    this.options = {
      ...n,
      ...this.options,
      ...ft(t)
    }, this.options.interpolation = {
      ...n.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const o = (u) => u ? typeof u == "function" ? new u() : u : null;
    if (!this.options.isClone) {
      this.modules.logger ? X.init(o(this.modules.logger), this.options) : X.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : u = $r;
      const p = new at(this.options);
      this.store = new it(this.options.resources, this.options);
      const f = this.services;
      f.logger = X, f.resourceStore = this.store, f.languageUtils = p, f.pluralResolver = new Mr(p, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === n.interpolation.format) && (f.formatter = o(u), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new Tr(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new Fr(o(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(b) {
        for (var h = arguments.length, m = new Array(h > 1 ? h - 1 : 0), v = 1; v < h; v++)
          m[v - 1] = arguments[v];
        e.emit(b, ...m);
      }), this.modules.languageDetector && (f.languageDetector = o(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = o(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new Pe(this.services, this.options), this.translator.on("*", function(b) {
        for (var h = arguments.length, m = new Array(h > 1 ? h - 1 : 0), v = 1; v < h; v++)
          m[v - 1] = arguments[v];
        e.emit(b, ...m);
      }), this.modules.external.forEach((b) => {
        b.init && b.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = je), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((u) => {
      this[u] = function() {
        return e.store[u](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((u) => {
      this[u] = function() {
        return e.store[u](...arguments), e;
      };
    });
    const l = ge(), d = () => {
      const u = (p, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(f), r(p, f);
      };
      if (this.languages && !this.isInitialized) return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initAsync ? d() : setTimeout(d, 0), l;
  }
  loadResources(e) {
    var o, a;
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : je;
    const n = S(e) ? e : this.language;
    if (typeof e == "function" && (r = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((n == null ? void 0 : n.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
      const c = [], l = (d) => {
        if (!d || d === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(d).forEach((p) => {
          p !== "cimode" && c.indexOf(p) < 0 && c.push(p);
        });
      };
      n ? l(n) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((u) => l(u)), (a = (o = this.options.preload) == null ? void 0 : o.forEach) == null || a.call(o, (d) => l(d)), this.services.backendConnector.load(c, this.options.ns, (d) => {
        !d && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(d);
      });
    } else
      r(null);
  }
  reloadResources(e, t, r) {
    const n = ge();
    return typeof e == "function" && (r = e, e = void 0), typeof t == "function" && (r = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), r || (r = je), this.services.backendConnector.reload(e, t, (o) => {
      n.resolve(), r(o);
    }), n;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Nt.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
    var r = this;
    this.isLanguageChangingTo = e;
    const n = ge();
    this.emit("languageChanging", e);
    const o = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, a = (l, d) => {
      d ? this.isLanguageChangingTo === e && (o(d), this.translator.changeLanguage(d), this.isLanguageChangingTo = void 0, this.emit("languageChanged", d), this.logger.log("languageChanged", d)) : this.isLanguageChangingTo = void 0, n.resolve(function() {
        return r.t(...arguments);
      }), t && t(l, function() {
        return r.t(...arguments);
      });
    }, c = (l) => {
      var p, f;
      !e && !l && this.services.languageDetector && (l = []);
      const d = S(l) ? l : l && l[0], u = this.store.hasLanguageSomeTranslations(d) ? d : this.services.languageUtils.getBestMatchFromCodes(S(l) ? [l] : l);
      u && (this.language || o(u), this.translator.language || this.translator.changeLanguage(u), (f = (p = this.services.languageDetector) == null ? void 0 : p.cacheUserLanguage) == null || f.call(p, u)), this.loadResources(u, (b) => {
        a(b, u);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? c(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(c) : this.services.languageDetector.detect(c) : c(e), n;
  }
  getFixedT(e, t, r) {
    var n = this;
    const o = function(a, c) {
      let l;
      if (typeof c != "object") {
        for (var d = arguments.length, u = new Array(d > 2 ? d - 2 : 0), p = 2; p < d; p++)
          u[p - 2] = arguments[p];
        l = n.options.overloadTranslationOptionHandler([a, c].concat(u));
      } else
        l = {
          ...c
        };
      l.lng = l.lng || o.lng, l.lngs = l.lngs || o.lngs, l.ns = l.ns || o.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || r || o.keyPrefix);
      const f = n.options.keySeparator || ".";
      let b;
      return l.keyPrefix && Array.isArray(a) ? b = a.map((h) => `${l.keyPrefix}${f}${h}`) : b = l.keyPrefix ? `${l.keyPrefix}${f}${a}` : a, n.t(b, l);
    };
    return S(e) ? o.lng = e : o.lngs = e, o.ns = t, o.keyPrefix = r, o;
  }
  t() {
    var n;
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return (n = this.translator) == null ? void 0 : n.translate(...t);
  }
  exists() {
    var n;
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return (n = this.translator) == null ? void 0 : n.exists(...t);
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
    const r = t.lng || this.resolvedLanguage || this.languages[0], n = this.options ? this.options.fallbackLng : !1, o = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const a = (c, l) => {
      const d = this.services.backendConnector.state[`${c}|${l}`];
      return d === -1 || d === 0 || d === 2;
    };
    if (t.precheck) {
      const c = t.precheck(this, a);
      if (c !== void 0) return c;
    }
    return !!(this.hasResourceBundle(r, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || a(r, e) && (!n || a(o, e)));
  }
  loadNamespaces(e, t) {
    const r = ge();
    return this.options.ns ? (S(e) && (e = [e]), e.forEach((n) => {
      this.options.ns.indexOf(n) < 0 && this.options.ns.push(n);
    }), this.loadResources((n) => {
      r.resolve(), t && t(n);
    }), r) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const r = ge();
    S(e) && (e = [e]);
    const n = this.options.preload || [], o = e.filter((a) => n.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a));
    return o.length ? (this.options.preload = n.concat(o), this.loadResources((a) => {
      r.resolve(), t && t(a);
    }), r) : (t && t(), Promise.resolve());
  }
  dir(e) {
    var n, o;
    if (e || (e = this.resolvedLanguage || (((n = this.languages) == null ? void 0 : n.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = ((o = this.services) == null ? void 0 : o.languageUtils) || new at(ut());
    return t.indexOf(r.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new we(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : je;
    const r = e.forkResourceStore;
    r && delete e.forkResourceStore;
    const n = {
      ...this.options,
      ...e,
      isClone: !0
    }, o = new we(n);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (o.logger = o.logger.clone(e)), ["store", "services", "language"].forEach((c) => {
      o[c] = this[c];
    }), o.services = {
      ...this.services
    }, o.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, r) {
      const c = Object.keys(this.store.data).reduce((l, d) => (l[d] = {
        ...this.store.data[d]
      }, l[d] = Object.keys(l[d]).reduce((u, p) => (u[p] = {
        ...l[d][p]
      }, u), l[d]), l), {});
      o.store = new it(c, n), o.services.resourceStore = o.store;
    }
    return o.translator = new Pe(o.services, n), o.translator.on("*", function(c) {
      for (var l = arguments.length, d = new Array(l > 1 ? l - 1 : 0), u = 1; u < l; u++)
        d[u - 1] = arguments[u];
      o.emit(c, ...d);
    }), o.init(n, t), o.translator.options = n, o.translator.backendConnector.services.utils = {
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
const _ = we.createInstance();
_.createInstance = we.createInstance;
_.createInstance;
_.dir;
_.init;
_.loadResources;
_.reloadResources;
_.use;
_.changeLanguage;
_.getFixedT;
_.t;
_.exists;
_.setDefaultNamespace;
_.hasLoadedNamespace;
_.loadNamespaces;
_.loadLanguages;
const Vr = (s, e, t, r) => {
  var o, a, c, l;
  const n = [t, {
    code: e,
    ...r || {}
  }];
  if ((a = (o = s == null ? void 0 : s.services) == null ? void 0 : o.logger) != null && a.forward)
    return s.services.logger.forward(n, "warn", "react-i18next::", !0);
  ie(n[0]) && (n[0] = `react-i18next:: ${n[0]}`), (l = (c = s == null ? void 0 : s.services) == null ? void 0 : c.logger) != null && l.warn ? s.services.logger.warn(...n) : console != null && console.warn && console.warn(...n);
}, ht = {}, De = (s, e, t, r) => {
  ie(t) && ht[t] || (ie(t) && (ht[t] = /* @__PURE__ */ new Date()), Vr(s, e, t, r));
}, Rt = (s, e) => () => {
  if (s.isInitialized)
    e();
  else {
    const t = () => {
      setTimeout(() => {
        s.off("initialized", t);
      }, 0), e();
    };
    s.on("initialized", t);
  }
}, Be = (s, e, t) => {
  s.loadNamespaces(e, Rt(s, t));
}, pt = (s, e, t, r) => {
  if (ie(t) && (t = [t]), s.options.preload && s.options.preload.indexOf(e) > -1) return Be(s, t, r);
  t.forEach((n) => {
    s.options.ns.indexOf(n) < 0 && s.options.ns.push(n);
  }), s.loadLanguages(e, Rt(s, r));
}, Wr = (s, e, t = {}) => !e.languages || !e.languages.length ? (De(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: e.languages
}), !0) : e.hasLoadedNamespace(s, {
  lng: t.lng,
  precheck: (r, n) => {
    var o;
    if (((o = t.bindI18n) == null ? void 0 : o.indexOf("languageChanging")) > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !n(r.isLanguageChangingTo, s)) return !1;
  }
}), ie = (s) => typeof s == "string", Dr = (s) => typeof s == "object" && s !== null, Br = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Ur = {
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
}, Gr = (s) => Ur[s], Hr = (s) => s.replace(Br, Gr);
let Ue = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Hr
};
const Kr = (s = {}) => {
  Ue = {
    ...Ue,
    ...s
  };
}, _r = () => Ue;
let Pt;
const Yr = (s) => {
  Pt = s;
}, Jr = () => Pt, qr = {
  type: "3rdParty",
  init(s) {
    Kr(s.options.react), Yr(s);
  }
}, Xr = Tt();
class Qr {
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
const Zr = (s, e) => {
  const t = Le();
  return xe(() => {
    t.current = s;
  }, [s, e]), t.current;
}, Et = (s, e, t, r) => s.getFixedT(e, t, r), es = (s, e, t, r) => Se(Et(s, e, t, r), [s, e, t, r]), ts = (s, e = {}) => {
  var A, K, U, M;
  const {
    i18n: t
  } = e, {
    i18n: r,
    defaultNS: n
  } = At(Xr) || {}, o = t || r || Jr();
  if (o && !o.reportNamespaces && (o.reportNamespaces = new Qr()), !o) {
    De(o, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const x = (F, O) => ie(O) ? O : Dr(O) && ie(O.defaultValue) ? O.defaultValue : Array.isArray(F) ? F[F.length - 1] : F, E = [x, {}, !1];
    return E.t = x, E.i18n = {}, E.ready = !1, E;
  }
  (A = o.options.react) != null && A.wait && De(o, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const a = {
    ..._r(),
    ...o.options.react,
    ...e
  }, {
    useSuspense: c,
    keyPrefix: l
  } = a;
  let d = n || ((K = o.options) == null ? void 0 : K.defaultNS);
  d = ie(d) ? [d] : d || ["translation"], (M = (U = o.reportNamespaces).addUsedNamespaces) == null || M.call(U, d);
  const u = (o.isInitialized || o.initializedStoreOnce) && d.every((x) => Wr(x, o, a)), p = es(o, e.lng || null, a.nsMode === "fallback" ? d : d[0], l), f = () => p, b = () => Et(o, e.lng || null, a.nsMode === "fallback" ? d : d[0], l), [h, m] = Ce(f);
  let v = d.join();
  e.lng && (v = `${e.lng}${v}`);
  const R = Zr(v), P = Le(!0);
  xe(() => {
    const {
      bindI18n: x,
      bindI18nStore: E
    } = a;
    P.current = !0, !u && !c && (e.lng ? pt(o, e.lng, d, () => {
      P.current && m(b);
    }) : Be(o, d, () => {
      P.current && m(b);
    })), u && R && R !== v && P.current && m(b);
    const F = () => {
      P.current && m(b);
    };
    return x && (o == null || o.on(x, F)), E && (o == null || o.store.on(E, F)), () => {
      P.current = !1, o && (x == null || x.split(" ").forEach((O) => o.off(O, F))), E && o && E.split(" ").forEach((O) => o.store.off(O, F));
    };
  }, [o, v]), xe(() => {
    P.current && u && m(f);
  }, [o, l, u]);
  const T = [h, o, u];
  if (T.t = h, T.i18n = o, T.ready = u, u || !u && !c) return T;
  throw new Promise((x) => {
    e.lng ? pt(o, e.lng, d, () => x()) : Be(o, d, () => x());
  });
}, rs = { product: "Product", pricing: "Pricing", solutions: "Solutions", developers: "Developers", resources: "Resources", dropdown: { aspmOverview: "ASPM Overview", useCases: "Use Cases" } }, ss = { title: "Product", description: "Explore our product" }, is = { title: "ASPM Overview", description: "Complete application security protection" }, ns = { title: "Use Cases", description: "Real-world implementation examples" }, os = {
  navbar: rs,
  product: ss,
  aspmOverview: is,
  useCases: ns
};
_.use(qr).init({
  lng: "en",
  supportedLngs: ["en"],
  resources: {
    en: { translation: os }
  },
  fallbackLng: "en",
  react: { useSuspense: !1 }
});
const ls = () => {
  const [s, e] = Ce(!1), [t, r] = Ce(null), n = Le(null), o = "http://localhost:7000", { t: a } = ts(), [c, l] = Ce(!1);
  xe(() => {
    const h = () => {
      const m = window.scrollY;
      l(m > 50);
    };
    return window.addEventListener("scroll", h), h(), () => {
      window.removeEventListener("scroll", h);
    };
  }, []);
  const d = Se((h) => {
    n.current && (clearTimeout(n.current), n.current = null), r(h);
  }, []), u = Le([]), p = Se(() => {
    const h = setTimeout(() => {
      r(null);
    }, 150);
    n.current = h, u.current.push(h);
  }, []);
  xe(() => () => {
    n.current && clearTimeout(n.current), u.current.forEach(clearTimeout), u.current = [];
  }, []);
  const f = Se(
    (h) => {
      r(t === h ? null : h);
    },
    [t]
  ), b = {
    products: {
      title: a("navbar.product"),
      shortTitle: "Product",
      image: "product-diagram",
      items: [
        {
          title: "ASPM Overview",
          description: "Complete application security protection",
          href: "/products/aspm",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                /* @__PURE__ */ i.jsx("path", { d: "M12 16v-4" }),
                /* @__PURE__ */ i.jsx("path", { d: "M12 8h.01" })
              ]
            }
          )
        },
        {
          title: "Benefits",
          description: "See how Plexicus transforms security",
          href: "/products/benefits",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("path", { d: "m9 12 2 2 4-4" }),
                /* @__PURE__ */ i.jsx("path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" }),
                /* @__PURE__ */ i.jsx("path", { d: "M22 19H2" })
              ]
            }
          )
        },
        {
          title: "Use Cases",
          description: "Real-world implementation examples",
          href: "/products/use-cases",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
                /* @__PURE__ */ i.jsx("path", { d: "M8 12h8" }),
                /* @__PURE__ */ i.jsx("path", { d: "M12 8v8" })
              ]
            }
          )
        }
      ]
    },
    solutions: {
      title: "Solutions",
      shortTitle: "Solutions",
      image: "solutions-diagram",
      items: [
        {
          title: "FinTech",
          description: "Security solutions for financial technology",
          href: "/solutions/fintech",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
                /* @__PURE__ */ i.jsx("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
              ]
            }
          )
        },
        {
          title: "HealthTech",
          description: "HIPAA compliant security solutions",
          href: "/solutions/healthtech",
          icon: /* @__PURE__ */ i.jsx(
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
              children: /* @__PURE__ */ i.jsx("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" })
            }
          )
        },
        {
          title: "HRTech",
          description: "Secure HR and employee management systems",
          href: "/solutions/hrtech",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
                /* @__PURE__ */ i.jsx("circle", { cx: "9", cy: "7", r: "4" }),
                /* @__PURE__ */ i.jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
                /* @__PURE__ */ i.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
              ]
            }
          )
        },
        {
          title: "Legal Tech",
          description: "Security for legal technology platforms",
          href: "/solutions/legaltech",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("path", { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" }),
                /* @__PURE__ */ i.jsx("path", { d: "M12 8v4l3 3" })
              ]
            }
          )
        },
        {
          title: "Group Companies",
          description: "Solutions for corporate groups and holdings",
          href: "/solutions/group-companies",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("rect", { x: "2", y: "7", width: "20", height: "14", rx: "2", ry: "2" }),
                /* @__PURE__ */ i.jsx("path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" })
              ]
            }
          )
        },
        {
          title: "Agencies",
          description: "Security for digital and marketing agencies",
          href: "/solutions/agencies",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
                /* @__PURE__ */ i.jsx("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
              ]
            }
          )
        },
        {
          title: "Startups",
          description: "Scalable security for growing companies",
          href: "/solutions/startups",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" }),
                /* @__PURE__ */ i.jsx("path", { d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" }),
                /* @__PURE__ */ i.jsx("path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }),
                /* @__PURE__ */ i.jsx("path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" })
              ]
            }
          )
        },
        {
          title: "Enterprise",
          description: "Comprehensive security for large organizations",
          href: "/solutions/enterprise",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("path", { d: "M2 20h20" }),
                /* @__PURE__ */ i.jsx("path", { d: "M5 20V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14" }),
                /* @__PURE__ */ i.jsx("path", { d: "M12 3v4" }),
                /* @__PURE__ */ i.jsx("path", { d: "M5 8h14" }),
                /* @__PURE__ */ i.jsx("path", { d: "M7 14h2" }),
                /* @__PURE__ */ i.jsx("path", { d: "M15 14h2" }),
                /* @__PURE__ */ i.jsx("path", { d: "M7 10h2" }),
                /* @__PURE__ */ i.jsx("path", { d: "M15 10h2" })
              ]
            }
          )
        },
        {
          title: "Mobile Apps",
          description: "Security for iOS and Android applications",
          href: "/solutions/mobile-apps",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }),
                /* @__PURE__ */ i.jsx("line", { x1: "12", y1: "18", x2: "12.01", y2: "18" })
              ]
            }
          )
        },
        {
          title: "Manufacturing",
          description: "Security for industrial and IoT systems",
          href: "/solutions/manufacturing",
          icon: /* @__PURE__ */ i.jsx(
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
              children: /* @__PURE__ */ i.jsx("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" })
            }
          )
        },
        {
          title: "Governments",
          description: "Security solutions for government agencies",
          href: "/solutions/governments",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("path", { d: "M2 20h20" }),
                /* @__PURE__ */ i.jsx("path", { d: "M12 4v6" }),
                /* @__PURE__ */ i.jsx("path", { d: "M4 20V10l8-6 8 6v10" }),
                /* @__PURE__ */ i.jsx("path", { d: "M15 12v8" }),
                /* @__PURE__ */ i.jsx("path", { d: "M9 12v8" })
              ]
            }
          )
        },
        {
          title: "RetailTech",
          description: "Security for e-commerce and retail platforms",
          href: "/solutions/retailtech",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("circle", { cx: "9", cy: "21", r: "1" }),
                /* @__PURE__ */ i.jsx("circle", { cx: "20", cy: "21", r: "1" }),
                /* @__PURE__ */ i.jsx("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })
              ]
            }
          )
        }
      ]
    },
    developers: {
      title: "Developers",
      shortTitle: "Developers",
      image: "developers-diagram",
      items: [
        {
          title: "Documentation",
          description: "Technical guides and references",
          href: "https://docs.plexicus.com/",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                /* @__PURE__ */ i.jsx("polyline", { points: "14 2 14 8 20 8" }),
                /* @__PURE__ */ i.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
                /* @__PURE__ */ i.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
                /* @__PURE__ */ i.jsx("polyline", { points: "10 9 9 9 8 9" })
              ]
            }
          )
        },
        {
          title: "API Reference",
          description: "Comprehensive API documentation",
          href: "https://docs.plexicus.com/getting-started/introduction",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("path", { d: "m18 16 4-4-4-4" }),
                /* @__PURE__ */ i.jsx("path", { d: "m6 8-4 4 4 4" }),
                /* @__PURE__ */ i.jsx("path", { d: "m14.5 4-5 16" })
              ]
            }
          )
        },
        {
          title: "GitHub App",
          description: "Integrate Plexicus with your repositories",
          href: "https://github.com/apps/plexicus",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
                /* @__PURE__ */ i.jsx("path", { d: "M9 18c-4.51 2-5-2-7-2" })
              ]
            }
          )
        },
        {
          title: "GitHub Action",
          description: "Automate security in your CI/CD pipeline",
          href: "https://github.com/marketplace/actions/plexicus-runner-action",
          icon: /* @__PURE__ */ i.jsx(
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
              children: /* @__PURE__ */ i.jsx("path", { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" })
            }
          )
        }
      ]
    },
    resources: {
      title: "Resources",
      shortTitle: "Resources",
      image: "resources-diagram",
      items: [
        {
          title: "Blog",
          description: "Latest news and security insights",
          href: "/blog",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                /* @__PURE__ */ i.jsx("path", { d: "M14 3v5h5M16 13H8M16 17H8M10 9H8" })
              ]
            }
          )
        },
        {
          title: "YouTube Channel",
          description: "Video tutorials and webinars",
          href: "https://youtube.com/channel/UCzrotvBZ3dcb7mhI55ExHBQ/",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("path", { d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" }),
                /* @__PURE__ */ i.jsx("path", { d: "m10 15 5-3-5-3z" })
              ]
            }
          )
        },
        {
          title: "Branding Assets",
          description: "Logos and brand guidelines",
          href: "/resources/branding",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("path", { d: "M12 19c.5 0 1-.1 1.4-.4.8-.4 1.4-1.1 1.6-2 .3-1.4-.5-2.8-1.9-3.2-.3-.1-.6-.1-.9-.1-.5 0-1 .1-1.4.4-.8.4-1.4 1.1-1.6 2-.3 1.4.5 2.8 1.9 3.2.3.1.6.1.9.1z" }),
                /* @__PURE__ */ i.jsx("path", { d: "m14.5 12.5 2.7-2.7c1.2-1.2 1.8-2.7 1.8-4.3 0-3.1-2.5-5.5-5.5-5.5-1.6 0-3.1.6-4.3 1.8L6.5 4.5" }),
                /* @__PURE__ */ i.jsx("path", { d: "m4.5 6.5 2.7-2.7c.3-.3.6-.4 1-.4.8 0 1.5.7 1.5 0 .4-.1.7-.4 1L6.5 8.5" }),
                /* @__PURE__ */ i.jsx("path", { d: "m3.5 13.5 5-5" }),
                /* @__PURE__ */ i.jsx("path", { d: "m5 19 5-5" }),
                /* @__PURE__ */ i.jsx("path", { d: "m17.5 6.5-5 5" }),
                /* @__PURE__ */ i.jsx("path", { d: "m16 17-5-5" })
              ]
            }
          )
        },
        {
          title: "Changelogs",
          description: "Latest product updates",
          href: "https://plexicus.canny.io/changelog",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("path", { d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" }),
                /* @__PURE__ */ i.jsx("path", { d: "m9 12 2 2 4-4" })
              ]
            }
          )
        },
        {
          title: "Feature Requests",
          description: "Submit and vote on new features",
          href: "https://plexicus.canny.io/feature-requests",
          icon: /* @__PURE__ */ i.jsx(
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
              children: /* @__PURE__ */ i.jsx("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" })
            }
          )
        },
        // Find the three comparison items in the resources menu items array and update their icons
        // For "Plexicus vs. ArmorCode", replace the icon with a sword
        {
          title: "Plexicus vs. ArmorCode",
          description: "See how Plexicus compares",
          href: "/compare/armorcode",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("path", { d: "M14.5 17.5L3 6V3h3l11.5 11.5" }),
                /* @__PURE__ */ i.jsx("path", { d: "M13 19l6-6" }),
                /* @__PURE__ */ i.jsx("path", { d: "M16 16l4 4" }),
                /* @__PURE__ */ i.jsx("path", { d: "M19 21l2-2" })
              ]
            }
          )
        },
        // For "Plexicus vs. Apiiro", replace the icon with an axe
        {
          title: "Plexicus vs. Apiiro",
          description: "Feature comparison",
          href: "/compare/apiiro",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("path", { d: "M12 2v5.5m0 0v9m0-9 7-3.5c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5L12 8.5l-7-3.5C4.2 5 3.5 5.7 3.5 6.5v3c0 .8.7 1.5 1.5 1.5l7 3.5" }),
                /* @__PURE__ */ i.jsx("path", { d: "M12 8.5 5 5l-1 1 8 8.5 8-8.5-1-1-7 3.5z" }),
                /* @__PURE__ */ i.jsx("path", { d: "m9 12 3 2.5 3-2.5" }),
                /* @__PURE__ */ i.jsx("path", { d: "M12 17v5" })
              ]
            }
          )
        },
        // For "Plexicus vs. Legit Security", replace the icon with a crosshair/target
        {
          title: "Plexicus vs. Legit Security",
          description: "Side-by-side comparison",
          href: "/compare/legit-security",
          icon: /* @__PURE__ */ i.jsxs(
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
                /* @__PURE__ */ i.jsx("path", { d: "M3 8a4 4 0 0 1 8 0v8a4 4 0 0 1-8 0z" }),
                /* @__PURE__ */ i.jsx("path", { d: "M7 8v8" }),
                /* @__PURE__ */ i.jsx("path", { d: "M21 12h-7" }),
                /* @__PURE__ */ i.jsx("path", { d: "m14 15 3-3-3-3" }),
                /* @__PURE__ */ i.jsx("path", { d: "M7 12h7" })
              ]
            }
          )
        }
      ]
    }
  };
  return /* @__PURE__ */ i.jsxs(
    "header",
    {
      className: "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
      style: {
        background: "#8220ff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease-in-out",
        minHeight: "64px"
      },
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl", children: [
          /* @__PURE__ */ i.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ i.jsx(Z, { href: o, className: "flex items-center gap-2 overflow-visible", "aria-label": "Plexicus Home", children: /* @__PURE__ */ i.jsx("div", { className: "relative w-auto h-14 flex items-center", children: /* @__PURE__ */ i.jsx(
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
          /* @__PURE__ */ i.jsxs("nav", { className: "hidden md:flex md:gap-4 lg:gap-6", "aria-label": "Main Navigation", children: [
            Object.entries(b).filter(([h]) => h === "products").map(([h, m]) => /* @__PURE__ */ i.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => d(h),
                onMouseLeave: p,
                children: /* @__PURE__ */ i.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": t === h,
                    "aria-haspopup": "true",
                    onClick: () => f(h),
                    children: [
                      /* @__PURE__ */ i.jsx("span", { className: "hidden lg:inline", children: m.title }),
                      /* @__PURE__ */ i.jsx("span", { className: "lg:hidden", children: m.shortTitle }),
                      /* @__PURE__ */ i.jsx(
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
                          className: `ml-1 transition-transform duration-200 ${t === h ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ i.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              h
            )),
            /* @__PURE__ */ i.jsx(
              Z,
              {
                href: "/pricing",
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: "Pricing"
              }
            ),
            Object.entries(b).filter(([h]) => h === "solutions" || h === "developers" || h === "resources").map(([h, m]) => /* @__PURE__ */ i.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => d(h),
                onMouseLeave: p,
                children: /* @__PURE__ */ i.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": t === h,
                    "aria-haspopup": "true",
                    onClick: () => f(h),
                    children: [
                      /* @__PURE__ */ i.jsx("span", { className: "hidden lg:inline", children: m.title }),
                      /* @__PURE__ */ i.jsx("span", { className: "lg:hidden", children: m.shortTitle }),
                      /* @__PURE__ */ i.jsx(
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
                          className: `ml-1 transition-transform duration-200 ${t === h ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ i.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              h
            )),
            /* @__PURE__ */ i.jsx(
              Z,
              {
                href: "/contact",
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: "Contact"
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "hidden md:flex items-center gap-4", children: [
            /* @__PURE__ */ i.jsx(
              Z,
              {
                href: "/login",
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors whitespace-nowrap",
                children: "Login"
              }
            ),
            /* @__PURE__ */ i.jsx(Ve, { className: "bg-white text-[#8220ff] font-medium px-4 lg:px-6 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap", children: "Get Started" })
          ] }),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "flex md:hidden p-2 rounded-md hover:bg-white/10 transition-colors text-white",
              onClick: () => e(!s),
              "aria-label": s ? "Close menu" : "Open menu",
              "aria-expanded": s,
              children: s ? /* @__PURE__ */ i.jsxs(
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
                    /* @__PURE__ */ i.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                    /* @__PURE__ */ i.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                  ]
                }
              ) : /* @__PURE__ */ i.jsxs(
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
                    /* @__PURE__ */ i.jsx("line", { x1: "4", x2: "20", y1: "12", y2: "12" }),
                    /* @__PURE__ */ i.jsx("line", { x1: "4", x2: "20", y1: "6", y2: "6" }),
                    /* @__PURE__ */ i.jsx("line", { x1: "4", x2: "20", y1: "18", y2: "18" })
                  ]
                }
              )
            }
          )
        ] }),
        t && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "fixed inset-0 bg-black/20 z-30",
              onClick: () => r(null),
              "aria-hidden": "true",
              style: { top: "64px" }
            }
          ),
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "absolute left-0 right-0 top-16 z-40 bg-white shadow-xl border-t border-gray-100 transition-all duration-300 transform",
              onMouseEnter: () => d(t),
              onMouseLeave: p,
              role: "menu",
              "aria-labelledby": `menu-button-${t}`,
              children: /* @__PURE__ */ i.jsx("div", { className: "container mx-auto py-8 px-4 md:px-6 max-w-7xl", children: /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col md:flex-row", children: [
                /* @__PURE__ */ i.jsxs("div", { className: "w-full md:w-1/3 pr-0 md:pr-8 mb-6 md:mb-0 flex flex-col", children: [
                  /* @__PURE__ */ i.jsx("div", { className: "relative h-36 md:h-40 w-full rounded-lg overflow-hidden bg-white border border-gray-100 mb-4", children: /* @__PURE__ */ i.jsxs("div", { className: "absolute inset-0 flex items-center justify-center", children: [
                    t === "products" && /* @__PURE__ */ i.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ i.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ i.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ i.jsx(
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
                          /* @__PURE__ */ i.jsx("rect", { x: "40", y: "30", width: "320", height: "40", rx: "12", fill: "#8220ff", fillOpacity: "0.9" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "65", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "90", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "115", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "40", y: "70", width: "80", height: "200", fill: "#f5f5f7" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "55", y: "90", width: "50", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.7" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "55", y: "110", width: "40", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "55", y: "130", width: "45", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "55", y: "150", width: "35", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "55", y: "170", width: "50", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "140", y: "90", width: "200", height: "70", rx: "8", fill: "#8220ff", fillOpacity: "0.1" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "155", y: "105", width: "170", height: "40", rx: "4", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "175", cy: "125", r: "15", fill: "#8220ff", fillOpacity: "0.8" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "200", y: "115", width: "110", height: "8", rx: "4", fill: "white" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "200", y: "130", width: "80", height: "6", rx: "3", fill: "white", fillOpacity: "0.7" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "140", y: "180", width: "95", height: "80", rx: "8", fill: "#f0f0f5" }),
                          /* @__PURE__ */ i.jsx(
                            "path",
                            {
                              d: "M150 240 L170 220 L190 230 L210 200",
                              stroke: "#8220ff",
                              strokeWidth: "3",
                              strokeLinecap: "round"
                            }
                          ),
                          /* @__PURE__ */ i.jsx("circle", { cx: "170", cy: "220", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "190", cy: "230", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "210", cy: "200", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "245", y: "180", width: "95", height: "80", rx: "8", fill: "#f0f0f5" }),
                          /* @__PURE__ */ i.jsx(
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
                          /* @__PURE__ */ i.jsx("circle", { cx: "293", cy: "220", r: "30", fill: "transparent", stroke: "#e0e0e5", strokeWidth: "8" }),
                          /* @__PURE__ */ i.jsx("text", { x: "283", y: "225", fontFamily: "Arial", fontSize: "12", fill: "#8220ff", fontWeight: "bold", children: "75%" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "320", cy: "50", r: "12", fill: "white", fillOpacity: "0.2" }),
                          /* @__PURE__ */ i.jsx("path", { d: "M314 50 L320 56 L326 50", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "30", cy: "30", r: "5", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "350", cy: "280", r: "7", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "370", cy: "50", r: "4", fill: "#8220ff", fillOpacity: "0.4" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "20", cy: "250", r: "6", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ i.jsx(
                            "path",
                            {
                              d: "M15 100 C30 120, 20 150, 35 160",
                              stroke: "#8220ff",
                              strokeWidth: "1.5",
                              strokeDasharray: "4 4"
                            }
                          ),
                          /* @__PURE__ */ i.jsx(
                            "path",
                            {
                              d: "M370 120 C350 140, 360 170, 380 190",
                              stroke: "#8220ff",
                              strokeWidth: "1.5",
                              strokeDasharray: "4 4"
                            }
                          ),
                          /* @__PURE__ */ i.jsxs("defs", { children: [
                            /* @__PURE__ */ i.jsxs(
                              "linearGradient",
                              {
                                id: "productGradient",
                                x1: "0",
                                y1: "0",
                                x2: "400",
                                y2: "300",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                  /* @__PURE__ */ i.jsx("stop", { offset: "0%", stopColor: "#f5f5f7" }),
                                  /* @__PURE__ */ i.jsx("stop", { offset: "100%", stopColor: "#e8e8f0" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ i.jsxs(
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
                                  /* @__PURE__ */ i.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                  /* @__PURE__ */ i.jsx(
                                    "feColorMatrix",
                                    {
                                      in: "SourceAlpha",
                                      type: "matrix",
                                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    }
                                  ),
                                  /* @__PURE__ */ i.jsx("feOffset", { dy: "4" }),
                                  /* @__PURE__ */ i.jsx("feGaussianBlur", { stdDeviation: "6" }),
                                  /* @__PURE__ */ i.jsx(
                                    "feColorMatrix",
                                    {
                                      type: "matrix",
                                      values: "0 0 0 0 0.51 0 0 0 0 0.125 0 0 0 0 1 0 0 0 0.15 0"
                                    }
                                  ),
                                  /* @__PURE__ */ i.jsx("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                                  /* @__PURE__ */ i.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })
                                ]
                              }
                            )
                          ] })
                        ]
                      }
                    ) }),
                    t === "solutions" && /* @__PURE__ */ i.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ i.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ i.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ i.jsx(
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
                          /* @__PURE__ */ i.jsx("circle", { cx: "100", cy: "150", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "300", cy: "150", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "200", cy: "70", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "200", cy: "230", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ i.jsx("path", { d: "M125 150 L160 150", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ i.jsx("path", { d: "M240 150 L275 150", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ i.jsx("path", { d: "M200 95 L200 130", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ i.jsx("path", { d: "M200 170 L200 205", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ i.jsx("polygon", { points: "158,145 158,155 168,150", fill: "#8220ff" }),
                          /* @__PURE__ */ i.jsx("polygon", { points: "242,145 242,155 232,150", fill: "#8220ff" }),
                          /* @__PURE__ */ i.jsx("polygon", { points: "195,128 205,128 200,138", fill: "#8220ff" }),
                          /* @__PURE__ */ i.jsx("polygon", { points: "195,172 205,172 200,162", fill: "#8220ff" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "100", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "300", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "200", cy: "70", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "200", cy: "230", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "200", cy: "150", r: "20", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "200", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.4" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "150", cy: "100", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "250", cy: "100", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "150", cy: "200", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "250", cy: "200", r: "5", fill: "#8220ff", fillOpacity: "0.2" })
                        ]
                      }
                    ) }),
                    t === "resources" && /* @__PURE__ */ i.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ i.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ i.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ i.jsxs("g", { filter: "url(#resourcesShadow)", children: [
                            /* @__PURE__ */ i.jsx("rect", { x: "140", y: "80", width: "120", height: "140", rx: "4", fill: "url(#bookGradient)" }),
                            /* @__PURE__ */ i.jsx(
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
                            /* @__PURE__ */ i.jsx("path", { d: "M160 100 L240 100", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ i.jsx("path", { d: "M160 120 L240 120", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ i.jsx("path", { d: "M160 140 L240 140", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ i.jsx("path", { d: "M160 160 L240 160", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ i.jsx("path", { d: "M160 180 L240 180", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ i.jsx("path", { d: "M230 80 L230 110 L220 100 L210 110 L210 80", fill: "#8220ff", fillOpacity: "0.3" }),
                            /* @__PURE__ */ i.jsxs("g", { transform: "translate(-10, -10) rotate(-5)", children: [
                              /* @__PURE__ */ i.jsx(
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
                              /* @__PURE__ */ i.jsx("path", { d: "M90 135 L150 135", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ i.jsx("path", { d: "M90 150 L150 150", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ i.jsx("path", { d: "M90 165 L150 165", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ i.jsx("path", { d: "M90 180 L120 180", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" })
                            ] }),
                            /* @__PURE__ */ i.jsxs("g", { transform: "translate(10, -10) rotate(5)", children: [
                              /* @__PURE__ */ i.jsx(
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
                              /* @__PURE__ */ i.jsx("polygon", { points: "270,140 290,150 270,160", fill: "#8220ff" }),
                              /* @__PURE__ */ i.jsx(
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
                          /* @__PURE__ */ i.jsx("rect", { x: "80", y: "230", width: "240", height: "50", fill: "none" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "200", cy: "50", r: "15", fill: "#8220ff", fillOpacity: "0.1" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "200", cy: "50", r: "10", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "200", cy: "50", r: "5", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "150", cy: "60", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "250", cy: "60", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "120", cy: "150", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "280", cy: "150", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ i.jsxs("defs", { children: [
                            /* @__PURE__ */ i.jsxs(
                              "linearGradient",
                              {
                                id: "resourcesGradient",
                                x1: "0",
                                y1: "0",
                                x2: "400",
                                y2: "300",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                  /* @__PURE__ */ i.jsx("stop", { offset: "0%", stopColor: "#f5f5f7" }),
                                  /* @__PURE__ */ i.jsx("stop", { offset: "100%", stopColor: "#e8e8f0" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ i.jsxs(
                              "linearGradient",
                              {
                                id: "bookGradient",
                                x1: "140",
                                y1: "80",
                                x2: "260",
                                y2: "220",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                  /* @__PURE__ */ i.jsx("stop", { offset: "0%", stopColor: "#f0f0f5" }),
                                  /* @__PURE__ */ i.jsx("stop", { offset: "100%", stopColor: "#ffffff" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ i.jsx("filter", { id: "resourcesShadow", x: "-10%", y: "-10%", width: "120%", height: "120%", children: /* @__PURE__ */ i.jsx("feDropShadow", { dx: "2", dy: "4", stdDeviation: "4", floodColor: "#8220ff", floodOpacity: "0.2" }) })
                          ] })
                        ]
                      }
                    ) }),
                    t === "developers" && /* @__PURE__ */ i.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ i.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ i.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "20", y: "20", width: "280", height: "200", rx: "8", fill: "#1E1E1E" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "20", y: "20", width: "280", height: "30", rx: "8", fill: "#333333" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "40", cy: "35", r: "6", fill: "#FF5F56" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "60", cy: "35", r: "6", fill: "#FFBD2E" }),
                          /* @__PURE__ */ i.jsx("circle", { cx: "80", cy: "35", r: "6", fill: "#27C93F" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "40", y: "70", width: "120", height: "10", rx: "2", fill: "#9CDCFE", fillOpacity: "0.7" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "40", y: "90", width: "180", height: "10", rx: "2", fill: "#CE9178", fillOpacity: "0.7" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "60", y: "110", width: "200", height: "10", rx: "2", fill: "#6A9955", fillOpacity: "0.7" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "60", y: "130", width: "160", height: "10", rx: "2", fill: "#569CD6", fillOpacity: "0.7" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "40", y: "150", width: "140", height: "10", rx: "2", fill: "#DCDCAA", fillOpacity: "0.7" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "60", y: "170", width: "180", height: "10", rx: "2", fill: "#4EC9B0", fillOpacity: "0.7" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "40", y: "190", width: "160", height: "10", rx: "2", fill: "#C586C0", fillOpacity: "0.7" }),
                          /* @__PURE__ */ i.jsx("text", { x: "30", y: "75", fontSize: "10", fill: "#858585", children: "1" }),
                          /* @__PURE__ */ i.jsx("text", { x: "30", y: "95", fontSize: "10", fill: "#858585", children: "2" }),
                          /* @__PURE__ */ i.jsx("text", { x: "30", y: "115", fontSize: "10", fill: "#858585", children: "3" }),
                          /* @__PURE__ */ i.jsx("text", { x: "30", y: "135", fontSize: "10", fill: "#858585", children: "4" }),
                          /* @__PURE__ */ i.jsx("text", { x: "30", y: "155", fontSize: "10", fill: "#858585", children: "5" }),
                          /* @__PURE__ */ i.jsx("text", { x: "30", y: "175", fontSize: "10", fill: "#858585", children: "6" }),
                          /* @__PURE__ */ i.jsx("text", { x: "30", y: "195", fontSize: "10", fill: "#858585", children: "7" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "80", y: "130", width: "310", height: "130", rx: "8", fill: "#1E1E1E", filter: "url(#shadow)" }),
                          /* @__PURE__ */ i.jsx("rect", { x: "80", y: "130", width: "310", height: "25", rx: "8", fill: "#333333" }),
                          /* @__PURE__ */ i.jsx("text", { x: "235", y: "147", fontSize: "12", fill: "#FFFFFF", textAnchor: "middle", children: "Terminal" }),
                          /* @__PURE__ */ i.jsx("text", { x: "90", y: "170", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ git clone https://github.com/plexicus/plexicus-sdk.git" }),
                          /* @__PURE__ */ i.jsx("text", { x: "90", y: "185", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "Cloning into 'plexicus-sdk'..." }),
                          /* @__PURE__ */ i.jsx("text", { x: "90", y: "200", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "remote: Counting objects: 100% (1234/1234)" }),
                          /* @__PURE__ */ i.jsx("text", { x: "90", y: "215", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ cd plexicus-sdk && npm install" }),
                          /* @__PURE__ */ i.jsx("text", { x: "90", y: "230", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "added 1024 packages in 4.2s" }),
                          /* @__PURE__ */ i.jsx("text", { x: "90", y: "245", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ npm run dev" }),
                          /* @__PURE__ */ i.jsxs("g", { transform: "translate(320, 240) scale(0.8)", children: [
                            /* @__PURE__ */ i.jsx("circle", { cx: "0", cy: "0", r: "25", fill: "white" }),
                            /* @__PURE__ */ i.jsx(
                              "path",
                              {
                                d: "M0 -20c-11.046 0-20 8.954-20 20 0 8.837 5.732 16.338 13.678 18.98 1 .184 1.365-.434 1.365-.964 0-.476-.018-1.733-.027-3.4-5.564 1.21-6.736-2.68-6.736-2.68-.91-2.31-2.22-2.924-2.22-2.924-1.815-1.24.137-1.215.137-1.215 2.006.14 3.06 2.06 3.06 2.06 1.783 3.057 4.675 2.174 5.815 1.663.18-1.29.697-2.174 1.268-2.674-4.442-.505-9.112-2.22-9.112-9.87 0-2.18.78-3.964 2.06-5.36-.207-.505-.893-2.54.195-5.29 0 0 1.68-.538 5.5 2.05 1.595-.443 3.305-.665 5.005-.673 1.7.008 3.41.23 5.005.673 3.82-2.588 5.495-2.05 5.495-2.05 1.09 2.75.405 4.785.198 5.29 1.28 1.396 2.055 3.18 2.055 5.36 0 7.67-4.677 9.36-9.13 9.855.718.62 1.358 1.842 1.358 3.712 0 2.68-.024 4.84-.024 5.5 0 .535.36 1.16 1.375.964C14.275 16.33 20 8.83 20 0 20-11.046 11.046-20 0-20z",
                                fill: "#1B1F23",
                                transform: "translate(0, 0)"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsx("filter", { id: "shadow", x: "0", y: "0", width: "400", height: "300", filterUnits: "userSpaceOnUse", children: /* @__PURE__ */ i.jsx("feDropShadow", { dx: "2", dy: "4", stdDeviation: "3", floodColor: "#000000", floodOpacity: "0.3" }) }) })
                        ]
                      }
                    ) })
                  ] }) }),
                  /* @__PURE__ */ i.jsxs("div", { className: "bg-gray-50 rounded-lg p-4", children: [
                    /* @__PURE__ */ i.jsx("h3", { className: "text-xl font-bold text-[#8220ff]", children: b[t].title }),
                    /* @__PURE__ */ i.jsx("p", { className: "text-gray-700", children: t === "products" ? "Explore our product" : t === "solutions" ? "Explore our solutions" : "Explore our resources" })
                  ] })
                ] }),
                /* @__PURE__ */ i.jsx("div", { className: "w-full md:w-2/3", children: /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
                  b[t].items.filter((h) => t !== "resources" || !h.title.includes("vs.")).map((h, m) => /* @__PURE__ */ i.jsxs(
                    Z,
                    {
                      href: h.href,
                      className: "flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group",
                      onClick: () => r(null),
                      children: [
                        /* @__PURE__ */ i.jsx("div", { className: "w-12 h-12 bg-[#8220ff]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#8220ff]/20 transition-colors", children: h.icon }),
                        /* @__PURE__ */ i.jsxs("div", { children: [
                          /* @__PURE__ */ i.jsx("h4", { className: "font-semibold text-gray-900 group-hover:text-[#8220ff] transition-colors", children: h.title }),
                          /* @__PURE__ */ i.jsx("p", { className: "text-sm text-gray-600 mt-1", children: h.description })
                        ] })
                      ]
                    },
                    m
                  )),
                  t === "resources" && /* @__PURE__ */ i.jsx("div", { className: "col-span-1 sm:col-span-2 mt-4", children: /* @__PURE__ */ i.jsxs("div", { className: "bg-purple-50 p-4 rounded-lg border border-purple-100", children: [
                    /* @__PURE__ */ i.jsx("h3", { className: "text-sm font-medium text-purple-800 mb-3", children: "Compare Plexicus" }),
                    /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: b.resources.items.filter(
                      (h) => h.title === "Plexicus vs. ArmorCode" || h.title === "Plexicus vs. Apiiro" || h.title === "Plexicus vs. Legit Security"
                    ).map((h, m) => /* @__PURE__ */ i.jsxs(
                      Z,
                      {
                        href: h.href,
                        className: "flex flex-col items-center p-3 rounded-lg bg-white hover:bg-purple-100 transition-colors text-center group",
                        onClick: () => r(null),
                        children: [
                          /* @__PURE__ */ i.jsx("div", { className: "w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-purple-200 transition-colors", children: $e.cloneElement(h.icon, {
                            className: "w-5 h-5 text-purple-700"
                          }) }),
                          /* @__PURE__ */ i.jsx("h4", { className: "font-medium text-sm text-gray-900 group-hover:text-purple-800 transition-colors", children: h.title })
                        ]
                      },
                      `compare-${m}`
                    )) })
                  ] }) })
                ] }) })
              ] }) })
            }
          )
        ] }),
        s && /* @__PURE__ */ i.jsx("div", { className: "fixed inset-0 bg-black/20 z-40 lg:hidden", onClick: () => e(!1) }),
        /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `md:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${s ? "translate-x-0" : "translate-x-full"}`,
            style: { top: "64px", height: "calc(100vh - 64px)", overflow: "auto" },
            children: /* @__PURE__ */ i.jsx("div", { className: "overflow-y-auto h-full p-4 pb-20", children: /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
              Object.entries(b).map(([h, m]) => /* @__PURE__ */ i.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ i.jsx("h3", { className: "font-semibold", children: m.title }),
                /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-1 gap-2", children: m.items.map((v, R) => /* @__PURE__ */ i.jsxs(
                  Z,
                  {
                    href: v.href,
                    className: "flex items-center p-2 rounded-md bg-gray-50 hover:bg-gray-100",
                    onClick: () => e(!1),
                    children: [
                      /* @__PURE__ */ i.jsx("div", { className: "w-8 h-8 bg-primary/10 rounded-md mr-2 flex items-center justify-center", children: $e.cloneElement(v.icon, { width: 16, height: 16 }) }),
                      /* @__PURE__ */ i.jsx("span", { className: "text-sm", children: v.title })
                    ]
                  },
                  R
                )) })
              ] }, h)),
              /* @__PURE__ */ i.jsx(Z, { href: "/pricing", className: "block py-2 text-sm font-medium", onClick: () => e(!1), children: "Pricing" }),
              /* @__PURE__ */ i.jsx(Z, { href: "/contact", className: "block py-2 text-sm font-medium", onClick: () => e(!1), children: "Contact" }),
              /* @__PURE__ */ i.jsx("div", { className: "pt-4 border-t border-gray-100", children: /* @__PURE__ */ i.jsx(Ve, { className: "w-full bg-gradient-primary", onClick: () => e(!1), children: "Get Started" }) })
            ] }) })
          }
        )
      ]
    }
  );
};
export {
  ls as NavbarPlexicus
};
