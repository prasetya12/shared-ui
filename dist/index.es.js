import * as Tt from "react";
import Ie, { createContext as It, useContext as zt, useCallback as Se, useState as Ce, useRef as Ne, useEffect as ce } from "react";
import { Globe as $t } from "lucide-react";
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
function Ft() {
  if (He) return fe;
  He = 1;
  var i = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(r, n, o) {
    var a = null;
    if (o !== void 0 && (a = "" + o), n.key !== void 0 && (a = "" + n.key), "key" in n) {
      o = {};
      for (var c in n)
        c !== "key" && (o[c] = n[c]);
    } else o = n;
    return n = o.ref, {
      $$typeof: i,
      type: r,
      key: a,
      ref: n !== void 0 ? n : null,
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
var Ge;
function Bt() {
  return Ge || (Ge = 1, process.env.NODE_ENV !== "production" && function() {
    function i(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === F ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case f:
          return "Fragment";
        case L:
          return "Profiler";
        case y:
          return "StrictMode";
        case K:
          return "Suspense";
        case _:
          return "SuspenseList";
        case E:
          return "Activity";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case m:
            return "Portal";
          case T:
            return (g.displayName || "Context") + ".Provider";
          case O:
            return (g._context.displayName || "Context") + ".Consumer";
          case I:
            var k = g.render;
            return g = g.displayName, g || (g = k.displayName || k.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case A:
            return k = g.displayName || null, k !== null ? k : i(g.type) || "Memo";
          case x:
            k = g._payload, g = g._init;
            try {
              return i(g(k));
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
        var k = !1;
      } catch {
        k = !0;
      }
      if (k) {
        k = console;
        var P = k.error, N = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return P.call(
          k,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), e(g);
      }
    }
    function r(g) {
      if (g === f) return "<>";
      if (typeof g == "object" && g !== null && g.$$typeof === x)
        return "<...>";
      try {
        var k = i(g);
        return k ? "<" + k + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var g = R.A;
      return g === null ? null : g.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function a(g) {
      if (B.call(g, "key")) {
        var k = Object.getOwnPropertyDescriptor(g, "key").get;
        if (k && k.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function c(g, k) {
      function P() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          k
        ));
      }
      P.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: P,
        configurable: !0
      });
    }
    function l() {
      var g = i(this.type);
      return G[g] || (G[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function d(g, k, P, N, z, q, ne, $) {
      return P = q.ref, g = {
        $$typeof: v,
        type: g,
        key: k,
        props: q,
        _owner: z
      }, (P !== void 0 ? P : null) !== null ? Object.defineProperty(g, "ref", {
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
        value: $
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function u(g, k, P, N, z, q, ne, $) {
      var W = k.children;
      if (W !== void 0)
        if (N)
          if (re(W)) {
            for (N = 0; N < W.length; N++)
              p(W[N]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(W);
      if (B.call(k, "key")) {
        W = i(g);
        var X = Object.keys(k).filter(function(he) {
          return he !== "key";
        });
        N = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", D[W + N] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          W,
          X,
          W
        ), D[W + N] = !0);
      }
      if (W = null, P !== void 0 && (t(P), W = "" + P), a(k) && (t(k.key), W = "" + k.key), "key" in k) {
        P = {};
        for (var ee in k)
          ee !== "key" && (P[ee] = k[ee]);
      } else P = k;
      return W && c(
        P,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), d(
        g,
        W,
        q,
        z,
        n(),
        P,
        ne,
        $
      );
    }
    function p(g) {
      typeof g == "object" && g !== null && g.$$typeof === v && g._store && (g._store.validated = 1);
    }
    var h = Ie, v = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), T = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), E = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), R = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, re = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      "react-stack-bottom-frame": function(g) {
        return g();
      }
    };
    var V, G = {}, J = h["react-stack-bottom-frame"].bind(
      h,
      o
    )(), j = H(r(o)), D = {};
    pe.Fragment = f, pe.jsx = function(g, k, P, N, z) {
      var q = 1e4 > R.recentlyCreatedOwnerStacks++;
      return u(
        g,
        k,
        P,
        !1,
        N,
        z,
        q ? Error("react-stack-top-frame") : J,
        q ? H(r(g)) : j
      );
    }, pe.jsxs = function(g, k, P, N, z) {
      var q = 1e4 > R.recentlyCreatedOwnerStacks++;
      return u(
        g,
        k,
        P,
        !0,
        N,
        z,
        q ? Error("react-stack-top-frame") : J,
        q ? H(r(g)) : j
      );
    };
  }()), pe;
}
var Ke;
function Vt() {
  return Ke || (Ke = 1, process.env.NODE_ENV === "production" ? be.exports = Ft() : be.exports = Bt()), be.exports;
}
var s = Vt();
function gt(i) {
  var e, t, r = "";
  if (typeof i == "string" || typeof i == "number") r += i;
  else if (typeof i == "object") if (Array.isArray(i)) {
    var n = i.length;
    for (e = 0; e < n; e++) i[e] && (t = gt(i[e])) && (r && (r += " "), r += t);
  } else for (t in i) i[t] && (r && (r += " "), r += t);
  return r;
}
function mt() {
  for (var i, e, t = 0, r = "", n = arguments.length; t < n; t++) (i = arguments[t]) && (e = gt(i)) && (r && (r += " "), r += e);
  return r;
}
const Ye = (i) => typeof i == "boolean" ? `${i}` : i === 0 ? "0" : i, Je = mt, Dt = (i, e) => (t) => {
  var r;
  if ((e == null ? void 0 : e.variants) == null) return Je(i, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: n, defaultVariants: o } = e, a = Object.keys(n).map((d) => {
    const u = t == null ? void 0 : t[d], p = o == null ? void 0 : o[d];
    if (u === null) return null;
    const h = Ye(u) || Ye(p);
    return n[d][h];
  }), c = t && Object.entries(t).reduce((d, u) => {
    let [p, h] = u;
    return h === void 0 || (d[p] = h), d;
  }, {}), l = e == null || (r = e.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, u) => {
    let { class: p, className: h, ...v } = u;
    return Object.entries(v).every((m) => {
      let [f, y] = m;
      return Array.isArray(y) ? y.includes({
        ...o,
        ...c
      }[f]) : {
        ...o,
        ...c
      }[f] === y;
    }) ? [
      ...d,
      p,
      h
    ] : d;
  }, []);
  return Je(i, a, l, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, _e = "-", Wt = (i) => {
  const e = _t(i), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = i;
  return {
    getClassGroupId: (a) => {
      const c = a.split(_e);
      return c[0] === "" && c.length !== 1 && c.shift(), xt(c, e) || Ut(a);
    },
    getConflictingClassGroupIds: (a, c) => {
      const l = t[a] || [];
      return c && r[a] ? [...l, ...r[a]] : l;
    }
  };
}, xt = (i, e) => {
  var a;
  if (i.length === 0)
    return e.classGroupId;
  const t = i[0], r = e.nextPart.get(t), n = r ? xt(i.slice(1), r) : void 0;
  if (n)
    return n;
  if (e.validators.length === 0)
    return;
  const o = i.join(_e);
  return (a = e.validators.find(({
    validator: c
  }) => c(o))) == null ? void 0 : a.classGroupId;
}, qe = /^\[(.+)\]$/, Ut = (i) => {
  if (qe.test(i)) {
    const e = qe.exec(i)[1], t = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, _t = (i) => {
  const {
    theme: e,
    classGroups: t
  } = i, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in t)
    ze(t[n], r, n, e);
  return r;
}, ze = (i, e, t, r) => {
  i.forEach((n) => {
    if (typeof n == "string") {
      const o = n === "" ? e : Xe(e, n);
      o.classGroupId = t;
      return;
    }
    if (typeof n == "function") {
      if (Ht(n)) {
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
}, Xe = (i, e) => {
  let t = i;
  return e.split(_e).forEach((r) => {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}, Ht = (i) => i.isThemeGetter, Gt = (i) => {
  if (i < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const n = (o, a) => {
    t.set(o, a), e++, e > i && (e = 0, r = t, t = /* @__PURE__ */ new Map());
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
}, $e = "!", Fe = ":", Kt = Fe.length, Yt = (i) => {
  const {
    prefix: e,
    experimentalParseClassName: t
  } = i;
  let r = (n) => {
    const o = [];
    let a = 0, c = 0, l = 0, d;
    for (let m = 0; m < n.length; m++) {
      let f = n[m];
      if (a === 0 && c === 0) {
        if (f === Fe) {
          o.push(n.slice(l, m)), l = m + Kt;
          continue;
        }
        if (f === "/") {
          d = m;
          continue;
        }
      }
      f === "[" ? a++ : f === "]" ? a-- : f === "(" ? c++ : f === ")" && c--;
    }
    const u = o.length === 0 ? n : n.substring(l), p = Jt(u), h = p !== u, v = d && d > l ? d - l : void 0;
    return {
      modifiers: o,
      hasImportantModifier: h,
      baseClassName: p,
      maybePostfixModifierPosition: v
    };
  };
  if (e) {
    const n = e + Fe, o = r;
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
}, Jt = (i) => i.endsWith($e) ? i.substring(0, i.length - 1) : i.startsWith($e) ? i.substring(1) : i, qt = (i) => {
  const e = Object.fromEntries(i.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const n = [];
    let o = [];
    return r.forEach((a) => {
      a[0] === "[" || e[a] ? (n.push(...o.sort(), a), o = []) : o.push(a);
    }), n.push(...o.sort()), n;
  };
}, Xt = (i) => ({
  cache: Gt(i.cacheSize),
  parseClassName: Yt(i),
  sortModifiers: qt(i),
  ...Wt(i)
}), Zt = /\s+/, Qt = (i, e) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: n,
    sortModifiers: o
  } = e, a = [], c = i.trim().split(Zt);
  let l = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const u = c[d], {
      isExternal: p,
      modifiers: h,
      hasImportantModifier: v,
      baseClassName: m,
      maybePostfixModifierPosition: f
    } = t(u);
    if (p) {
      l = u + (l.length > 0 ? " " + l : l);
      continue;
    }
    let y = !!f, L = r(y ? m.substring(0, f) : m);
    if (!L) {
      if (!y) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (L = r(m), !L) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      y = !1;
    }
    const O = o(h).join(":"), T = v ? O + $e : O, I = T + L;
    if (a.includes(I))
      continue;
    a.push(I);
    const K = n(L, y);
    for (let _ = 0; _ < K.length; ++_) {
      const A = K[_];
      a.push(T + A);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function er() {
  let i = 0, e, t, r = "";
  for (; i < arguments.length; )
    (e = arguments[i++]) && (t = yt(e)) && (r && (r += " "), r += t);
  return r;
}
const yt = (i) => {
  if (typeof i == "string")
    return i;
  let e, t = "";
  for (let r = 0; r < i.length; r++)
    i[r] && (e = yt(i[r])) && (t && (t += " "), t += e);
  return t;
};
function tr(i, ...e) {
  let t, r, n, o = a;
  function a(l) {
    const d = e.reduce((u, p) => p(u), i());
    return t = Xt(d), r = t.cache.get, n = t.cache.set, o = c, c(l);
  }
  function c(l) {
    const d = r(l);
    if (d)
      return d;
    const u = Qt(l, t);
    return n(l, u), u;
  }
  return function() {
    return o(er.apply(null, arguments));
  };
}
const U = (i) => {
  const e = (t) => t[i] || [];
  return e.isThemeGetter = !0, e;
}, wt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, bt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, rr = /^\d+\/\d+$/, sr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ir = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, nr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, or = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ar = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, oe = (i) => rr.test(i), C = (i) => !!i && !Number.isNaN(Number(i)), te = (i) => !!i && Number.isInteger(Number(i)), Ae = (i) => i.endsWith("%") && C(i.slice(0, -1)), Q = (i) => sr.test(i), lr = () => !0, cr = (i) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ir.test(i) && !nr.test(i)
), vt = () => !1, dr = (i) => or.test(i), ur = (i) => ar.test(i), hr = (i) => !w(i) && !b(i), fr = (i) => de(i, St, vt), w = (i) => wt.test(i), se = (i) => de(i, Ct, cr), Me = (i) => de(i, yr, C), Ze = (i) => de(i, jt, vt), pr = (i) => de(i, kt, ur), ve = (i) => de(i, Nt, dr), b = (i) => bt.test(i), ge = (i) => ue(i, Ct), gr = (i) => ue(i, wr), Qe = (i) => ue(i, jt), mr = (i) => ue(i, St), xr = (i) => ue(i, kt), je = (i) => ue(i, Nt, !0), de = (i, e, t) => {
  const r = wt.exec(i);
  return r ? r[1] ? e(r[1]) : t(r[2]) : !1;
}, ue = (i, e, t = !1) => {
  const r = bt.exec(i);
  return r ? r[1] ? e(r[1]) : t : !1;
}, jt = (i) => i === "position" || i === "percentage", kt = (i) => i === "image" || i === "url", St = (i) => i === "length" || i === "size" || i === "bg-size", Ct = (i) => i === "length", yr = (i) => i === "number", wr = (i) => i === "family-name", Nt = (i) => i === "shadow", br = () => {
  const i = U("color"), e = U("font"), t = U("text"), r = U("font-weight"), n = U("tracking"), o = U("leading"), a = U("breakpoint"), c = U("container"), l = U("spacing"), d = U("radius"), u = U("shadow"), p = U("inset-shadow"), h = U("text-shadow"), v = U("drop-shadow"), m = U("blur"), f = U("perspective"), y = U("aspect"), L = U("ease"), O = U("animate"), T = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], I = () => [
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
  ], K = () => [...I(), b, w], _ = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], x = () => [b, w, l], E = () => [oe, "full", "auto", ...x()], F = () => [te, "none", "subgrid", b, w], R = () => ["auto", {
    span: ["full", te, b, w]
  }, te, b, w], B = () => [te, "auto", b, w], re = () => ["auto", "min", "max", "fr", b, w], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], V = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], G = () => ["auto", ...x()], J = () => [oe, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...x()], j = () => [i, b, w], D = () => [...I(), Qe, Ze, {
    position: [b, w]
  }], g = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], k = () => ["auto", "cover", "contain", mr, fr, {
    size: [b, w]
  }], P = () => [Ae, ge, se], N = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    b,
    w
  ], z = () => ["", C, ge, se], q = () => ["solid", "dashed", "dotted", "double"], ne = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], $ = () => [C, Ae, Qe, Ze], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    m,
    b,
    w
  ], X = () => ["none", C, b, w], ee = () => ["none", C, b, w], he = () => [C, b, w], we = () => [oe, "full", ...x()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Q],
      breakpoint: [Q],
      color: [lr],
      container: [Q],
      "drop-shadow": [Q],
      ease: ["in", "out", "in-out"],
      font: [hr],
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
        aspect: ["auto", "square", oe, w, b, y]
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
        columns: [C, w, b, c]
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
        overflow: _()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": _()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": _()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: A()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": A()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": A()
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
        z: [te, "auto", b, w]
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
        order: [te, "first", "last", "none", b, w]
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
        col: R()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
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
        row: R()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
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
        justify: [...H(), "normal"]
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
        content: ["normal", ...H()]
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
        "place-content": H()
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
        m: G()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: G()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: G()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: G()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: G()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: G()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: G()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: G()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: G()
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
        size: J()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [c, "screen", ...J()]
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
          ...J()
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
        font: [r, b, Me]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ae, w]
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
        tracking: [n, b, w]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [C, "none", b, Me]
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
        placeholder: j()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: j()
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
        decoration: [C, "from-font", "auto", b, se]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: j()
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
        indent: x()
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
        bg: D()
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
        bg: k()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, te, b, w],
          radial: ["", b, w],
          conic: [te, b, w]
        }, xr, pr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: j()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: P()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: P()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: P()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: j()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: j()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: j()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: N()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": N()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": N()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": N()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": N()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": N()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": N()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": N()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": N()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": N()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": N()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": N()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": N()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": N()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": N()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: z()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": z()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": z()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": z()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": z()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": z()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": z()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": z()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": z()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": z()
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
        "divide-y": z()
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
        border: j()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": j()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": j()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": j()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": j()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": j()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": j()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": j()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": j()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: j()
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
        outline: j()
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
        shadow: j()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", p, je, ve]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": j()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: z()
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
        ring: j()
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
        "ring-offset": j()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": z()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": j()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, je, ve]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": j()
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
        "mask-linear-from": $()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": $()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": j()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": j()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": $()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": $()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": j()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": j()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": $()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": $()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": j()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": j()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": $()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": $()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": j()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": j()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": $()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": $()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": j()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": j()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": $()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": $()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": j()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": j()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": $()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": $()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": j()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": j()
      }],
      "mask-image-radial": [{
        "mask-radial": [b, w]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": $()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": $()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": j()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": j()
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
        "mask-radial-at": I()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [C]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": $()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": $()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": j()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": j()
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
        mask: D()
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
        mask: k()
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
          v,
          je,
          ve
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": j()
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
        ease: ["linear", "initial", L, b, w]
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
        animate: ["none", O, b, w]
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
        "perspective-origin": K()
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
        accent: j()
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
        caret: j()
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
        fill: ["none", ...j()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [C, ge, se, Me]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...j()]
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
function jr(...i) {
  return vr(mt(i));
}
const kr = Dt(
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
), Be = Tt.forwardRef(
  ({ className: i, variant: e, size: t, asChild: r = !1, ...n }, o) => /* @__PURE__ */ s.jsx("button", { className: jr(kr({ variant: e, size: t, className: i })), ref: o, ...n })
);
Be.displayName = "Button";
const M = ({ href: i, children: e, className: t = "", target: r = "_self", rel: n = "noopener noreferrer", onClick: o }) => {
  const a = (c) => {
    r !== "_blank" && (c.preventDefault(), window.location.href = i), o && o(c);
  };
  return /* @__PURE__ */ s.jsx(
    "a",
    {
      href: i,
      className: t,
      target: r,
      rel: n,
      onClick: a,
      "aria-label": typeof e == "string" ? e : void 0,
      children: e
    }
  );
}, Sr = (i, e, t, r) => {
  var o, a, c, l;
  const n = [t, {
    code: e,
    ...r || {}
  }];
  if ((a = (o = i == null ? void 0 : i.services) == null ? void 0 : o.logger) != null && a.forward)
    return i.services.logger.forward(n, "warn", "react-i18next::", !0);
  ie(n[0]) && (n[0] = `react-i18next:: ${n[0]}`), (l = (c = i == null ? void 0 : i.services) == null ? void 0 : c.logger) != null && l.warn ? i.services.logger.warn(...n) : console != null && console.warn && console.warn(...n);
}, et = {}, Ve = (i, e, t, r) => {
  ie(t) && et[t] || (ie(t) && (et[t] = /* @__PURE__ */ new Date()), Sr(i, e, t, r));
}, Lt = (i, e) => () => {
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
  i.loadNamespaces(e, Lt(i, t));
}, tt = (i, e, t, r) => {
  if (ie(t) && (t = [t]), i.options.preload && i.options.preload.indexOf(e) > -1) return De(i, t, r);
  t.forEach((n) => {
    i.options.ns.indexOf(n) < 0 && i.options.ns.push(n);
  }), i.loadLanguages(e, Lt(i, r));
}, Cr = (i, e, t = {}) => !e.languages || !e.languages.length ? (Ve(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: e.languages
}), !0) : e.hasLoadedNamespace(i, {
  lng: t.lng,
  precheck: (r, n) => {
    var o;
    if (((o = t.bindI18n) == null ? void 0 : o.indexOf("languageChanging")) > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !n(r.isLanguageChangingTo, i)) return !1;
  }
}), ie = (i) => typeof i == "string", Nr = (i) => typeof i == "object" && i !== null, Lr = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Or = {
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
}, Rr = (i) => Or[i], Pr = (i) => i.replace(Lr, Rr);
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
const Er = (i = {}) => {
  We = {
    ...We,
    ...i
  };
}, Ar = () => We;
let Ot;
const Mr = (i) => {
  Ot = i;
}, Tr = () => Ot, Ir = {
  type: "3rdParty",
  init(i) {
    Er(i.options.react), Mr(i);
  }
}, zr = It();
class $r {
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
const Fr = (i, e) => {
  const t = Ne();
  return ce(() => {
    t.current = i;
  }, [i, e]), t.current;
}, Rt = (i, e, t, r) => i.getFixedT(e, t, r), Br = (i, e, t, r) => Se(Rt(i, e, t, r), [i, e, t, r]), Vr = (i, e = {}) => {
  var I, K, _, A;
  const {
    i18n: t
  } = e, {
    i18n: r,
    defaultNS: n
  } = zt(zr) || {}, o = t || r || Tr();
  if (o && !o.reportNamespaces && (o.reportNamespaces = new $r()), !o) {
    Ve(o, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const x = (F, R) => ie(R) ? R : Nr(R) && ie(R.defaultValue) ? R.defaultValue : Array.isArray(F) ? F[F.length - 1] : F, E = [x, {}, !1];
    return E.t = x, E.i18n = {}, E.ready = !1, E;
  }
  (I = o.options.react) != null && I.wait && Ve(o, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const a = {
    ...Ar(),
    ...o.options.react,
    ...e
  }, {
    useSuspense: c,
    keyPrefix: l
  } = a;
  let d = n || ((K = o.options) == null ? void 0 : K.defaultNS);
  d = ie(d) ? [d] : d || ["translation"], (A = (_ = o.reportNamespaces).addUsedNamespaces) == null || A.call(_, d);
  const u = (o.isInitialized || o.initializedStoreOnce) && d.every((x) => Cr(x, o, a)), p = Br(o, e.lng || null, a.nsMode === "fallback" ? d : d[0], l), h = () => p, v = () => Rt(o, e.lng || null, a.nsMode === "fallback" ? d : d[0], l), [m, f] = Ce(h);
  let y = d.join();
  e.lng && (y = `${e.lng}${y}`);
  const L = Fr(y), O = Ne(!0);
  ce(() => {
    const {
      bindI18n: x,
      bindI18nStore: E
    } = a;
    O.current = !0, !u && !c && (e.lng ? tt(o, e.lng, d, () => {
      O.current && f(v);
    }) : De(o, d, () => {
      O.current && f(v);
    })), u && L && L !== y && O.current && f(v);
    const F = () => {
      O.current && f(v);
    };
    return x && (o == null || o.on(x, F)), E && (o == null || o.store.on(E, F)), () => {
      O.current = !1, o && (x == null || x.split(" ").forEach((R) => o.off(R, F))), E && o && E.split(" ").forEach((R) => o.store.off(R, F));
    };
  }, [o, y]), ce(() => {
    O.current && u && f(h);
  }, [o, l, u]);
  const T = [m, o, u];
  if (T.t = m, T.i18n = o, T.ready = u, u || !u && !c) return T;
  throw new Promise((x) => {
    e.lng ? tt(o, e.lng, d, () => x()) : De(o, d, () => x());
  });
}, S = (i) => typeof i == "string", me = () => {
  let i, e;
  const t = new Promise((r, n) => {
    i = r, e = n;
  });
  return t.resolve = i, t.reject = e, t;
}, rt = (i) => i == null ? "" : "" + i, Dr = (i, e, t) => {
  i.forEach((r) => {
    e[r] && (t[r] = e[r]);
  });
}, Wr = /###/g, st = (i) => i && i.indexOf("###") > -1 ? i.replace(Wr, ".") : i, it = (i) => !i || S(i), xe = (i, e, t) => {
  const r = S(e) ? e.split(".") : e;
  let n = 0;
  for (; n < r.length - 1; ) {
    if (it(i)) return {};
    const o = st(r[n]);
    !i[o] && t && (i[o] = new t()), Object.prototype.hasOwnProperty.call(i, o) ? i = i[o] : i = {}, ++n;
  }
  return it(i) ? {} : {
    obj: i,
    k: st(r[n])
  };
}, nt = (i, e, t) => {
  const {
    obj: r,
    k: n
  } = xe(i, e, Object);
  if (r !== void 0 || e.length === 1) {
    r[n] = t;
    return;
  }
  let o = e[e.length - 1], a = e.slice(0, e.length - 1), c = xe(i, a, Object);
  for (; c.obj === void 0 && a.length; )
    o = `${a[a.length - 1]}.${o}`, a = a.slice(0, a.length - 1), c = xe(i, a, Object), c != null && c.obj && typeof c.obj[`${c.k}.${o}`] < "u" && (c.obj = void 0);
  c.obj[`${c.k}.${o}`] = t;
}, Ur = (i, e, t, r) => {
  const {
    obj: n,
    k: o
  } = xe(i, e, Object);
  n[o] = n[o] || [], n[o].push(t);
}, Le = (i, e) => {
  const {
    obj: t,
    k: r
  } = xe(i, e);
  if (t && Object.prototype.hasOwnProperty.call(t, r))
    return t[r];
}, _r = (i, e, t) => {
  const r = Le(i, t);
  return r !== void 0 ? r : Le(e, t);
}, Pt = (i, e, t) => {
  for (const r in e)
    r !== "__proto__" && r !== "constructor" && (r in i ? S(i[r]) || i[r] instanceof String || S(e[r]) || e[r] instanceof String ? t && (i[r] = e[r]) : Pt(i[r], e[r], t) : i[r] = e[r]);
  return i;
}, ae = (i) => i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Hr = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Gr = (i) => S(i) ? i.replace(/[&<>"'\/]/g, (e) => Hr[e]) : i;
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
const Yr = [" ", ",", "?", "!", ";"], Jr = new Kr(20), qr = (i, e, t) => {
  e = e || "", t = t || "";
  const r = Yr.filter((a) => e.indexOf(a) < 0 && t.indexOf(a) < 0);
  if (r.length === 0) return !0;
  const n = Jr.getRegExp(`(${r.map((a) => a === "?" ? "\\?" : a).join("|")})`);
  let o = !n.test(i);
  if (!o) {
    const a = i.indexOf(t);
    a > 0 && !n.test(i.substring(0, a)) && (o = !0);
  }
  return o;
}, Ue = function(i, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!i) return;
  if (i[e])
    return Object.prototype.hasOwnProperty.call(i, e) ? i[e] : void 0;
  const r = e.split(t);
  let n = i;
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
}, Oe = (i) => i == null ? void 0 : i.replace("_", "-"), Xr = {
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
    var t, r;
    (r = (t = console == null ? void 0 : console[i]) == null ? void 0 : t.apply) == null || r.call(t, console, e);
  }
};
class Re {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || Xr, this.options = t, this.debug = t.debug;
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
var Z = new Re();
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
class ot extends Ee {
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
    const l = Le(this.data, c);
    return !l && !t && !r && e.indexOf(".") > -1 && (e = c[0], t = c[1], r = c.slice(2).join(".")), l || !a || !S(r) ? l : Ue((u = (d = this.data) == null ? void 0 : d[e]) == null ? void 0 : u[t], r, o);
  }
  addResource(e, t, r, n) {
    let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const a = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let c = [e, t];
    r && (c = c.concat(a ? r.split(a) : r)), e.indexOf(".") > -1 && (c = e.split("."), n = t, t = c[1]), this.addNamespaces(t), nt(this.data, c, n), o.silent || this.emit("added", e, t, r, n);
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
    let l = Le(this.data, c) || {};
    a.skipCopy || (r = JSON.parse(JSON.stringify(r))), n ? Pt(l, r, o) : l = {
      ...l,
      ...r
    }, nt(this.data, c, l), a.silent || this.emit("added", e, t, r);
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
var Et = {
  processors: {},
  addPostProcessor(i) {
    this.processors[i.name] = i;
  },
  handle(i, e, t, r, n) {
    return i.forEach((o) => {
      var a;
      e = ((a = this.processors[o]) == null ? void 0 : a.process(e, t, r, n)) ?? e;
    }), e;
  }
};
const at = {}, lt = (i) => !S(i) && typeof i != "boolean" && typeof i != "number";
class Pe extends Ee {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Dr(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Z.create("translator");
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
    const a = r && e.indexOf(r) > -1, c = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !qr(e, r, n);
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
        const R = t.nsSeparator || this.options.nsSeparator;
        return n ? {
          res: `${l}${R}${a}`,
          usedKey: a,
          exactUsedKey: a,
          usedLng: d,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(t)
        } : `${l}${R}${a}`;
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
    let h = p == null ? void 0 : p.res;
    const v = (p == null ? void 0 : p.usedKey) || a, m = (p == null ? void 0 : p.exactUsedKey) || a, f = ["[object Number]", "[object Function]", "[object RegExp]"], y = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, L = !this.i18nFormat || this.i18nFormat.handleAsObject, O = t.count !== void 0 && !S(t.count), T = Pe.hasDefaultValue(t), I = O ? this.pluralResolver.getSuffix(d, t.count, t) : "", K = t.ordinal && O ? this.pluralResolver.getSuffix(d, t.count, {
      ordinal: !1
    }) : "", _ = O && !t.ordinal && t.count === 0, A = _ && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${I}`] || t[`defaultValue${K}`] || t.defaultValue;
    let x = h;
    L && !h && T && (x = A);
    const E = lt(x), F = Object.prototype.toString.apply(x);
    if (L && x && E && f.indexOf(F) < 0 && !(S(y) && Array.isArray(x))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const R = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, x, {
          ...t,
          ns: c
        }) : `key '${a} (${this.language})' returned an object instead of string.`;
        return n ? (p.res = R, p.usedParams = this.getUsedParamsDetails(t), p) : R;
      }
      if (o) {
        const R = Array.isArray(x), B = R ? [] : {}, re = R ? m : v;
        for (const H in x)
          if (Object.prototype.hasOwnProperty.call(x, H)) {
            const V = `${re}${o}${H}`;
            T && !h ? B[H] = this.translate(V, {
              ...t,
              defaultValue: lt(A) ? A[H] : void 0,
              joinArrays: !1,
              ns: c
            }) : B[H] = this.translate(V, {
              ...t,
              joinArrays: !1,
              ns: c
            }), B[H] === V && (B[H] = x[H]);
          }
        h = B;
      }
    } else if (L && S(y) && Array.isArray(h))
      h = h.join(y), h && (h = this.extendTranslation(h, e, t, r));
    else {
      let R = !1, B = !1;
      !this.isValidLookup(h) && T && (R = !0, h = A), this.isValidLookup(h) || (B = !0, h = a);
      const H = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && B ? void 0 : h, V = T && A !== h && this.options.updateMissing;
      if (B || R || V) {
        if (this.logger.log(V ? "updateKey" : "missingKey", d, l, a, V ? A : h), o) {
          const D = this.resolve(a, {
            ...t,
            keySeparator: !1
          });
          D && D.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let G = [];
        const J = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && J && J[0])
          for (let D = 0; D < J.length; D++)
            G.push(J[D]);
        else this.options.saveMissingTo === "all" ? G = this.languageUtils.toResolveHierarchy(t.lng || this.language) : G.push(t.lng || this.language);
        const j = (D, g, k) => {
          var N;
          const P = T && k !== h ? k : H;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(D, l, g, P, V, t) : (N = this.backendConnector) != null && N.saveMissing && this.backendConnector.saveMissing(D, l, g, P, V, t), this.emit("missingKey", D, l, g, h);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && O ? G.forEach((D) => {
          const g = this.pluralResolver.getSuffixes(D, t);
          _ && t[`defaultValue${this.options.pluralSeparator}zero`] && g.indexOf(`${this.options.pluralSeparator}zero`) < 0 && g.push(`${this.options.pluralSeparator}zero`), g.forEach((k) => {
            j([D], a + k, t[`defaultValue${k}`] || A);
          });
        }) : j(G, a, A));
      }
      h = this.extendTranslation(h, e, t, p, r), B && h === a && this.options.appendNamespaceToMissingKey && (h = `${l}:${a}`), (B || R) && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${a}` : a, R ? h : void 0, t));
    }
    return n ? (p.res = h, p.usedParams = this.getUsedParamsDetails(t), p) : h;
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
      let h;
      if (p) {
        const m = e.match(this.interpolator.nestingRegexp);
        h = m && m.length;
      }
      let v = r.replace && !S(r.replace) ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (v = {
        ...this.options.interpolation.defaultVariables,
        ...v
      }), e = this.interpolator.interpolate(e, v, r.lng || this.language || n.usedLng, r), p) {
        const m = e.match(this.interpolator.nestingRegexp), f = m && m.length;
        h < f && (r.nest = !1);
      }
      !r.lng && n && n.res && (r.lng = this.language || n.usedLng), r.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var m = arguments.length, f = new Array(m), y = 0; y < m; y++)
          f[y] = arguments[y];
        return (o == null ? void 0 : o[0]) === f[0] && !r.context ? (a.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${t[0]}`), null) : a.translate(...f, t);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const c = r.postProcess || this.options.postProcess, l = S(c) ? [c] : c;
    return e != null && (l != null && l.length) && r.applyPostProcessor !== !1 && (e = Et.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
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
      const h = t.count !== void 0 && !S(t.count), v = h && !t.ordinal && t.count === 0, m = t.context !== void 0 && (S(t.context) || typeof t.context == "number") && t.context !== "", f = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      p.forEach((y) => {
        var L, O;
        this.isValidLookup(r) || (c = y, !at[`${f[0]}-${y}`] && ((L = this.utils) != null && L.hasLoadedNamespace) && !((O = this.utils) != null && O.hasLoadedNamespace(c)) && (at[`${f[0]}-${y}`] = !0, this.logger.warn(`key "${n}" for languages "${f.join(", ")}" won't get resolved as namespace "${c}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), f.forEach((T) => {
          var _;
          if (this.isValidLookup(r)) return;
          a = T;
          const I = [u];
          if ((_ = this.i18nFormat) != null && _.addLookupKeys)
            this.i18nFormat.addLookupKeys(I, u, T, y, t);
          else {
            let A;
            h && (A = this.pluralResolver.getSuffix(T, t.count, t));
            const x = `${this.options.pluralSeparator}zero`, E = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (h && (I.push(u + A), t.ordinal && A.indexOf(E) === 0 && I.push(u + A.replace(E, this.options.pluralSeparator)), v && I.push(u + x)), m) {
              const F = `${u}${this.options.contextSeparator}${t.context}`;
              I.push(F), h && (I.push(F + A), t.ordinal && A.indexOf(E) === 0 && I.push(F + A.replace(E, this.options.pluralSeparator)), v && I.push(F + x));
            }
          }
          let K;
          for (; K = I.pop(); )
            this.isValidLookup(r) || (o = K, r = this.getResource(T, y, K, t));
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
const dt = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, ut = {
  select: (i) => i === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Zr {
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
    const r = Oe(e === "dev" ? "en" : e), n = t.ordinal ? "ordinal" : "cardinal", o = JSON.stringify({
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
        return this.logger.error("No Intl support, please use an Intl polyfill!"), ut;
      if (!e.match(/-|_/)) return ut;
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
    return r || (r = this.getRule("dev", t)), r ? r.resolvedOptions().pluralCategories.sort((n, o) => dt[n] - dt[o]).map((n) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${n}`) : [];
  }
  getSuffix(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const n = this.getRule(e, r);
    return n ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${n.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, r));
  }
}
const ht = function(i, e, t) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = _r(i, e, t);
  return !o && n && S(t) && (o = Ue(i, t, r), o === void 0 && (o = Ue(e, t, r))), o;
}, Te = (i) => i.replace(/\$/g, "$$$$");
class Qr {
  constructor() {
    var t;
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Z.create("interpolator"), this.options = e, this.format = ((t = e == null ? void 0 : e.interpolation) == null ? void 0 : t.format) || ((r) => r), this.init(e);
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
      nestingPrefix: h,
      nestingPrefixEscaped: v,
      nestingSuffix: m,
      nestingSuffixEscaped: f,
      nestingOptionsSeparator: y,
      maxReplaces: L,
      alwaysFormat: O
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Gr, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = n !== void 0 ? n : !1, this.prefix = o ? ae(o) : a || "{{", this.suffix = c ? ae(c) : l || "}}", this.formatSeparator = d || ",", this.unescapePrefix = u ? "" : p || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = h ? ae(h) : v || ae("$t("), this.nestingSuffix = m ? ae(m) : f || ae(")"), this.nestingOptionsSeparator = y || ",", this.maxReplaces = L || 1e3, this.alwaysFormat = O !== void 0 ? O : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, r) => (t == null ? void 0 : t.source) === r ? (t.lastIndex = 0, t) : new RegExp(r, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, r, n) {
    var v;
    let o, a, c;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, d = (m) => {
      if (m.indexOf(this.formatSeparator) < 0) {
        const O = ht(t, l, m, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(O, void 0, r, {
          ...n,
          ...t,
          interpolationkey: m
        }) : O;
      }
      const f = m.split(this.formatSeparator), y = f.shift().trim(), L = f.join(this.formatSeparator).trim();
      return this.format(ht(t, l, y, this.options.keySeparator, this.options.ignoreJSONStructure), L, r, {
        ...n,
        ...t,
        interpolationkey: y
      });
    };
    this.resetRegExp();
    const u = (n == null ? void 0 : n.missingInterpolationHandler) || this.options.missingInterpolationHandler, p = ((v = n == null ? void 0 : n.interpolation) == null ? void 0 : v.skipOnVariables) !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (m) => Te(m)
    }, {
      regex: this.regexp,
      safeValue: (m) => this.escapeValue ? Te(this.escape(m)) : Te(m)
    }].forEach((m) => {
      for (c = 0; o = m.regex.exec(e); ) {
        const f = o[1].trim();
        if (a = d(f), a === void 0)
          if (typeof u == "function") {
            const L = u(e, o, n);
            a = S(L) ? L : "";
          } else if (n && Object.prototype.hasOwnProperty.call(n, f))
            a = "";
          else if (p) {
            a = o[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${f} for interpolating ${e}`), a = "";
        else !S(a) && !this.useRawValueToEscape && (a = rt(a));
        const y = m.safeValue(a);
        if (e = e.replace(o[0], y), p ? (m.regex.lastIndex += a.length, m.regex.lastIndex -= o[0].length) : m.regex.lastIndex = 0, c++, c >= this.maxReplaces)
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
      let h = `{${p[1]}`;
      l = p[0], h = this.interpolate(h, a);
      const v = h.match(/'/g), m = h.match(/"/g);
      (((v == null ? void 0 : v.length) ?? 0) % 2 === 0 && !m || m.length % 2 !== 0) && (h = h.replace(/'/g, '"'));
      try {
        a = JSON.parse(h), d && (a = {
          ...d,
          ...a
        });
      } catch (f) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, f), `${l}${u}${h}`;
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
      S(o) || (o = rt(o)), o || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`), o = ""), d && (o = l.reduce((u, p) => this.format(u, p, r.lng, {
        ...r,
        interpolationkey: n[1].trim()
      }), o.trim())), e = e.replace(n[0], o), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const es = (i) => {
  let e = i.toLowerCase().trim();
  const t = {};
  if (i.indexOf("(") > -1) {
    const r = i.split("(");
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
}, le = (i) => {
  const e = {};
  return (t, r, n) => {
    let o = n;
    n && n.interpolationkey && n.formatParams && n.formatParams[n.interpolationkey] && n[n.interpolationkey] && (o = {
      ...o,
      [n.interpolationkey]: void 0
    });
    const a = r + JSON.stringify(o);
    let c = e[a];
    return c || (c = i(Oe(r), n), e[a] = c), c(t);
  };
};
class ts {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Z.create("formatter"), this.options = e, this.formats = {
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
      } = es(l);
      if (this.formats[d]) {
        let h = c;
        try {
          const v = ((p = n == null ? void 0 : n.formatParams) == null ? void 0 : p[n.interpolationkey]) || {}, m = v.locale || v.lng || n.locale || n.lng || r;
          h = this.formats[d](c, m, {
            ...u,
            ...n,
            ...v
          });
        } catch (v) {
          this.logger.warn(v);
        }
        return h;
      } else
        this.logger.warn(`there was no format function for ${d}`);
      return c;
    }, e);
  }
}
const rs = (i, e) => {
  i.pending[e] !== void 0 && (delete i.pending[e], i.pendingCount--);
};
class ss extends Ee {
  constructor(e, t, r) {
    var o, a;
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = r, this.languageUtils = r.languageUtils, this.options = n, this.logger = Z.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = n.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = n.maxRetries >= 0 ? n.maxRetries : 5, this.retryTimeout = n.retryTimeout >= 1 ? n.retryTimeout : 350, this.state = {}, this.queue = [], (a = (o = this.backend) == null ? void 0 : o.init) == null || a.call(o, r, n.backend, n);
  }
  queueLoad(e, t, r, n) {
    const o = {}, a = {}, c = {}, l = {};
    return e.forEach((d) => {
      let u = !0;
      t.forEach((p) => {
        const h = `${d}|${p}`;
        !r.reload && this.store.hasResourceBundle(d, p) ? this.state[h] = 2 : this.state[h] < 0 || (this.state[h] === 1 ? a[h] === void 0 && (a[h] = !0) : (this.state[h] = 1, u = !1, a[h] === void 0 && (a[h] = !0), o[h] === void 0 && (o[h] = !0), l[p] === void 0 && (l[p] = !0)));
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
      Ur(l.loaded, [o], a), rs(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((d) => {
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
    var l, d, u, p, h;
    let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if ((d = (l = this.services) == null ? void 0 : l.utils) != null && d.hasLoadedNamespace && !((p = (u = this.services) == null ? void 0 : u.utils) != null && p.hasLoadedNamespace(t))) {
      this.logger.warn(`did not save key "${r}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if ((h = this.backend) != null && h.create) {
        const v = {
          ...a,
          isUpdate: o
        }, m = this.backend.create.bind(this.backend);
        if (m.length < 6)
          try {
            let f;
            m.length === 5 ? f = m(e, t, r, n, v) : f = m(e, t, r, n), f && typeof f.then == "function" ? f.then((y) => c(null, y)).catch(c) : c(null, f);
          } catch (f) {
            c(f);
          }
        else
          m(e, t, r, n, c, v);
      }
      !e || !e[0] || this.store.addResource(e[0], t, r, n);
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
  overloadTranslationOptionHandler: (i) => {
    let e = {};
    if (typeof i[1] == "object" && (e = i[1]), S(i[1]) && (e.defaultValue = i[1]), S(i[2]) && (e.tDescription = i[2]), typeof i[2] == "object" || typeof i[3] == "object") {
      const t = i[3] || i[2];
      Object.keys(t).forEach((r) => {
        e[r] = t[r];
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
}), pt = (i) => {
  var e, t;
  return S(i.ns) && (i.ns = [i.ns]), S(i.fallbackLng) && (i.fallbackLng = [i.fallbackLng]), S(i.fallbackNS) && (i.fallbackNS = [i.fallbackNS]), ((t = (e = i.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : t.call(e, "cimode")) < 0 && (i.supportedLngs = i.supportedLngs.concat(["cimode"])), typeof i.initImmediate == "boolean" && (i.initAsync = i.initImmediate), i;
}, ke = () => {
}, is = (i) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach((t) => {
    typeof i[t] == "function" && (i[t] = i[t].bind(i));
  });
};
class ye extends Ee {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
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
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof t == "function" && (r = t, t = {}), t.defaultNS == null && t.ns && (S(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const n = ft();
    this.options = {
      ...n,
      ...this.options,
      ...pt(t)
    }, this.options.interpolation = {
      ...n.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const o = (u) => u ? typeof u == "function" ? new u() : u : null;
    if (!this.options.isClone) {
      this.modules.logger ? Z.init(o(this.modules.logger), this.options) : Z.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : u = ts;
      const p = new ct(this.options);
      this.store = new ot(this.options.resources, this.options);
      const h = this.services;
      h.logger = Z, h.resourceStore = this.store, h.languageUtils = p, h.pluralResolver = new Zr(p, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === n.interpolation.format) && (h.formatter = o(u), h.formatter.init(h, this.options), this.options.interpolation.format = h.formatter.format.bind(h.formatter)), h.interpolator = new Qr(this.options), h.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, h.backendConnector = new ss(o(this.modules.backend), h.resourceStore, h, this.options), h.backendConnector.on("*", function(v) {
        for (var m = arguments.length, f = new Array(m > 1 ? m - 1 : 0), y = 1; y < m; y++)
          f[y - 1] = arguments[y];
        e.emit(v, ...f);
      }), this.modules.languageDetector && (h.languageDetector = o(this.modules.languageDetector), h.languageDetector.init && h.languageDetector.init(h, this.options.detection, this.options)), this.modules.i18nFormat && (h.i18nFormat = o(this.modules.i18nFormat), h.i18nFormat.init && h.i18nFormat.init(this)), this.translator = new Pe(this.services, this.options), this.translator.on("*", function(v) {
        for (var m = arguments.length, f = new Array(m > 1 ? m - 1 : 0), y = 1; y < m; y++)
          f[y - 1] = arguments[y];
        e.emit(v, ...f);
      }), this.modules.external.forEach((v) => {
        v.init && v.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = ke), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
    const l = me(), d = () => {
      const u = (p, h) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(h), r(p, h);
      };
      if (this.languages && !this.isInitialized) return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initAsync ? d() : setTimeout(d, 0), l;
  }
  loadResources(e) {
    var o, a;
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ke;
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
    const n = me();
    return typeof e == "function" && (r = e, e = void 0), typeof t == "function" && (r = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), r || (r = ke), this.services.backendConnector.reload(e, t, (o) => {
      n.resolve(), r(o);
    }), n;
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
    var r = this;
    this.isLanguageChangingTo = e;
    const n = me();
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
      var p, h;
      !e && !l && this.services.languageDetector && (l = []);
      const d = S(l) ? l : l && l[0], u = this.store.hasLanguageSomeTranslations(d) ? d : this.services.languageUtils.getBestMatchFromCodes(S(l) ? [l] : l);
      u && (this.language || o(u), this.translator.language || this.translator.changeLanguage(u), (h = (p = this.services.languageDetector) == null ? void 0 : p.cacheUserLanguage) == null || h.call(p, u)), this.loadResources(u, (v) => {
        a(v, u);
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
      const h = n.options.keySeparator || ".";
      let v;
      return l.keyPrefix && Array.isArray(a) ? v = a.map((m) => `${l.keyPrefix}${h}${m}`) : v = l.keyPrefix ? `${l.keyPrefix}${h}${a}` : a, n.t(v, l);
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
    const r = me();
    return this.options.ns ? (S(e) && (e = [e]), e.forEach((n) => {
      this.options.ns.indexOf(n) < 0 && this.options.ns.push(n);
    }), this.loadResources((n) => {
      r.resolve(), t && t(n);
    }), r) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const r = me();
    S(e) && (e = [e]);
    const n = this.options.preload || [], o = e.filter((a) => n.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a));
    return o.length ? (this.options.preload = n.concat(o), this.loadResources((a) => {
      r.resolve(), t && t(a);
    }), r) : (t && t(), Promise.resolve());
  }
  dir(e) {
    var n, o;
    if (e || (e = this.resolvedLanguage || (((n = this.languages) == null ? void 0 : n.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = ((o = this.services) == null ? void 0 : o.languageUtils) || new ct(ft());
    return t.indexOf(r.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new ye(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ke;
    const r = e.forkResourceStore;
    r && delete e.forkResourceStore;
    const n = {
      ...this.options,
      ...e,
      isClone: !0
    }, o = new ye(n);
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
      o.store = new ot(c, n), o.services.resourceStore = o.store;
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
const Y = ye.createInstance();
Y.createInstance = ye.createInstance;
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
var At = { nav: {
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
At.nav;
var Mt = { nav: {
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
Mt.nav;
Y.use(Ir).init({
  lng: "en",
  supportedLngs: ["en", "es"],
  resources: {
    en: { translation: At },
    es: { translation: Mt }
  },
  fallbackLng: "en",
  react: { useSuspense: !1 }
});
const ls = () => {
  const [i, e] = Ce(!1), [t, r] = Ce(null), n = Ne(null), o = "http://localhost:7000", { t: a, i18n: c } = Vr();
  ce(() => {
    const f = window.location.pathname.split("/")[1];
    console.log(f, "a"), ["en", "es"].includes(f) && (console.log(f, "a"), c.changeLanguage(f));
  }, []);
  const [l, d] = Ce(!1);
  ce(() => {
    const f = () => {
      const y = window.scrollY;
      d(y > 50);
    };
    return window.addEventListener("scroll", f), f(), () => {
      window.removeEventListener("scroll", f);
    };
  }, []);
  const u = Se((f) => {
    n.current && (clearTimeout(n.current), n.current = null), r(f);
  }, []), p = Ne([]), h = Se(() => {
    const f = setTimeout(() => {
      r(null);
    }, 150);
    n.current = f, p.current.push(f);
  }, []);
  ce(() => () => {
    n.current && clearTimeout(n.current), p.current.forEach(clearTimeout), p.current = [];
  }, []);
  const v = Se(
    (f) => {
      r(t === f ? null : f);
    },
    [t]
  ), m = {
    products: {
      title: a("nav.product"),
      shortTitle: "Product",
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
          title: "Benefits",
          description: "See how Plexicus transforms security",
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
          title: "Use Cases",
          description: "Real-world implementation examples",
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
      shortTitle: "Solutions",
      image: "solutions-diagram",
      items: [
        {
          title: "FinTech",
          description: "Security solutions for financial technology",
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
          title: "HealthTech",
          description: "HIPAA compliant security solutions",
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
          title: "HRTech",
          description: "Secure HR and employee management systems",
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
          title: "Legal Tech",
          description: "Security for legal technology platforms",
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
          title: "Group Companies",
          description: "Solutions for corporate groups and holdings",
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
          title: "Agencies",
          description: "Security for digital and marketing agencies",
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
          title: "Startups",
          description: "Scalable security for growing companies",
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
        background: "#8220ff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease-in-out",
        minHeight: "64px"
      },
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl", children: [
          /* @__PURE__ */ s.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ s.jsx(M, { href: o, className: "flex items-center gap-2 overflow-visible", "aria-label": "Plexicus Home", children: /* @__PURE__ */ s.jsx("div", { className: "relative w-auto h-14 flex items-center", children: /* @__PURE__ */ s.jsx(
            "img",
            {
              src: "/images/plexicus-logo-white.png",
              alt: "Plexicus Logo",
              className: "object-contain max-h-full max-w-none",
              style: {
                maxWidth: l ? "180px" : "220px",
                transition: "max-width 0.3s ease-in-out"
              }
            }
          ) }) }) }),
          /* @__PURE__ */ s.jsxs("nav", { className: "hidden md:flex md:gap-4 lg:gap-6", "aria-label": "Main Navigation", children: [
            Object.entries(m).filter(([f]) => f === "products").map(([f, y]) => /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => u(f),
                onMouseLeave: h,
                children: /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": t === f,
                    "aria-haspopup": "true",
                    onClick: () => v(f),
                    children: [
                      /* @__PURE__ */ s.jsx("span", { className: "hidden lg:inline", children: y.title }),
                      /* @__PURE__ */ s.jsx("span", { className: "lg:hidden", children: y.shortTitle }),
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
              M,
              {
                href: "/pricing",
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: a("nav.pricing")
              }
            ),
            Object.entries(m).filter(([f]) => f === "solutions" || f === "developers" || f === "resources").map(([f, y]) => /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => u(f),
                onMouseLeave: h,
                children: /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": t === f,
                    "aria-haspopup": "true",
                    onClick: () => v(f),
                    children: [
                      /* @__PURE__ */ s.jsx("span", { className: "hidden lg:inline", children: y.title }),
                      /* @__PURE__ */ s.jsx("span", { className: "lg:hidden", children: y.shortTitle }),
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
              M,
              {
                href: "/contact",
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: "Contact"
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "hidden md:flex items-center gap-4", children: [
            /* @__PURE__ */ s.jsx(
              M,
              {
                href: "/login",
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors whitespace-nowrap",
                children: "Login"
              }
            ),
            /* @__PURE__ */ s.jsx(Be, { className: "bg-white text-[#8220ff] font-medium px-4 lg:px-6 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap", children: "Get Started" })
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              className: "flex md:hidden p-2 rounded-md hover:bg-white/10 transition-colors text-white",
              onClick: () => e(!i),
              "aria-label": i ? "Close menu" : "Open menu",
              "aria-expanded": i,
              children: i ? /* @__PURE__ */ s.jsxs(
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
              onMouseLeave: h,
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
                    /* @__PURE__ */ s.jsx("h3", { className: "text-xl font-bold text-[#8220ff]", children: m[t].title }),
                    /* @__PURE__ */ s.jsx("p", { className: "text-gray-700", children: t === "products" ? "Explore our product" : t === "solutions" ? "Explore our solutions" : "Explore our resources" })
                  ] })
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "w-full md:w-2/3", children: /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
                  m[t].items.filter((f) => t !== "resources" || !f.title.includes("vs.")).map((f, y) => /* @__PURE__ */ s.jsxs(
                    M,
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
                    y
                  )),
                  t === "resources" && /* @__PURE__ */ s.jsx("div", { className: "col-span-1 sm:col-span-2 mt-4", children: /* @__PURE__ */ s.jsxs("div", { className: "bg-purple-50 p-4 rounded-lg border border-purple-100", children: [
                    /* @__PURE__ */ s.jsx("h3", { className: "text-sm font-medium text-purple-800 mb-3", children: "Compare Plexicus" }),
                    /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: m.resources.items.filter(
                      (f) => f.title === "Plexicus vs. ArmorCode" || f.title === "Plexicus vs. Apiiro" || f.title === "Plexicus vs. Legit Security"
                    ).map((f, y) => /* @__PURE__ */ s.jsxs(
                      M,
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
                      `compare-${y}`
                    )) })
                  ] }) })
                ] }) })
              ] }) })
            }
          )
        ] }),
        i && /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 bg-black/20 z-40 lg:hidden", onClick: () => e(!1) }),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `md:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${i ? "translate-x-0" : "translate-x-full"}`,
            style: { top: "64px", height: "calc(100vh - 64px)", overflow: "auto" },
            children: /* @__PURE__ */ s.jsx("div", { className: "overflow-y-auto h-full p-4 pb-20", children: /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
              Object.entries(m).map(([f, y]) => /* @__PURE__ */ s.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ s.jsx("h3", { className: "font-semibold", children: y.title }),
                /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-1 gap-2", children: y.items.map((L, O) => /* @__PURE__ */ s.jsxs(
                  M,
                  {
                    href: L.href,
                    className: "flex items-center p-2 rounded-md bg-gray-50 hover:bg-gray-100",
                    onClick: () => e(!1),
                    children: [
                      /* @__PURE__ */ s.jsx("div", { className: "w-8 h-8 bg-primary/10 rounded-md mr-2 flex items-center justify-center", children: Ie.cloneElement(L.icon, { width: 16, height: 16 }) }),
                      /* @__PURE__ */ s.jsx("span", { className: "text-sm", children: L.title })
                    ]
                  },
                  O
                )) })
              ] }, f)),
              /* @__PURE__ */ s.jsx(M, { href: "/pricing", className: "block py-2 text-sm font-medium", onClick: () => e(!1), children: "Pricing" }),
              /* @__PURE__ */ s.jsx(M, { href: "/contact", className: "block py-2 text-sm font-medium", onClick: () => e(!1), children: "Contact" }),
              /* @__PURE__ */ s.jsx("div", { className: "pt-4 border-t border-gray-100", children: /* @__PURE__ */ s.jsx(Be, { className: "w-full bg-gradient-primary", onClick: () => e(!1), children: "Get Started" }) })
            ] }) })
          }
        )
      ]
    }
  );
};
function ns() {
  return (
    // <>
    //     <Select defaultValue={DEFAULT_LANGUAGE.code}>
    //         <SelectTrigger className="w-[150px] px-2 ">
    //             <Globe className="text-gray-600 w-5"/><SelectValue placeholder="Theme" />
    //         </SelectTrigger>
    //         <SelectContent>
    //         <SelectItem value="en" key={0}>English</SelectItem>
    //         <SelectItem value="id" key={1}>Indonesia</SelectItem>
    //             {/* {LANGUAGES.map((lang, index) => (
    //                 <SelectItem value={lang.code} key={index}>{lang.name}</SelectItem>
    //             ))} */}
    //         </SelectContent>
    //     </Select>
    // </>
    /* @__PURE__ */ s.jsx(s.Fragment, { children: /* @__PURE__ */ s.jsxs("div", { className: "relative inline-flex items-center w-[150px]", children: [
      /* @__PURE__ */ s.jsx($t, { className: "absolute left-2 h-4 w-4 text-muted-foreground pointer-events-none" }),
      /* @__PURE__ */ s.jsxs(
        "select",
        {
          defaultValue: "en",
          className: "appearance-none w-full pl-8 pr-6 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring dark:bg-gray-900 dark:text-white dark:border-gray-700",
          children: [
            /* @__PURE__ */ s.jsx("option", { value: "en", children: "English" }),
            /* @__PURE__ */ s.jsx("option", { value: "id", children: "Indonesia" })
          ]
        }
      ),
      /* @__PURE__ */ s.jsx(
        "svg",
        {
          className: "pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" })
        }
      )
    ] }) })
  );
}
function cs() {
  return /* @__PURE__ */ s.jsx("footer", { className: "bg-gray-50 border-t border-gray-200", children: /* @__PURE__ */ s.jsxs("div", { className: "container mx-auto px-4 md:px-6 pt-12 pb-6", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-5", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ s.jsx(M, { href: "/", className: "flex items-center gap-2 mb-4", children: /* @__PURE__ */ s.jsx("img", { src: "/images/plexicus-logo-color.png", alt: "Plexicus ASPM", className: "h-10 w-auto" }) }),
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
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(M, { href: "/products/aspm-overview", className: "text-gray-600 hover:text-gray-900", children: "ASPM Overview" }) }),
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(M, { href: "/products/benefits", className: "text-gray-600 hover:text-gray-900", children: "Benefits" }) }),
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(M, { href: "/products/use-cases", className: "text-gray-600 hover:text-gray-900", children: "Use Cases" }) }),
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(M, { href: "/pricing", className: "text-gray-600 hover:text-gray-900", children: "Pricing" }) })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("h3", { className: "text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4", children: "Resources" }),
        /* @__PURE__ */ s.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(M, { href: "/blog", className: "text-gray-600 hover:text-gray-900", children: "Blog" }) }),
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(M, { href: "/docs", className: "text-gray-600 hover:text-gray-900", children: "Documentation" }) }),
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(M, { href: "/case-studies", className: "text-gray-600 hover:text-gray-900", children: "Case Studies" }) }),
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(M, { href: "/security-resources", className: "text-gray-600 hover:text-gray-900", children: "Security Resources" }) })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("h3", { className: "text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4", children: "Company" }),
        /* @__PURE__ */ s.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(M, { href: "/about", className: "text-gray-600 hover:text-gray-900", children: "About Us" }) }),
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(M, { href: "/contact", className: "text-gray-600 hover:text-gray-900", children: "Contact" }) }),
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(M, { href: "/careers", className: "text-gray-600 hover:text-gray-900", children: "Careers" }) }),
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(M, { href: "/privacy", className: "text-gray-600 hover:text-gray-900", children: "Privacy Policy" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "mt-8 pt-6 border-t border-gray-200", children: /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
      /* @__PURE__ */ s.jsxs("p", { className: "text-gray-500 text-sm", children: [
        "© 2025 PLEXICUS, LLC.",
        " ",
        /* @__PURE__ */ s.jsx(M, { href: "/privacy", className: "underline hover:text-gray-700", children: "Privacy Policy" }),
        " ",
        "·",
        " ",
        /* @__PURE__ */ s.jsx(M, { href: "/management", className: "underline hover:text-gray-700", children: "Management Policy" }),
        " ",
        "·",
        " ",
        /* @__PURE__ */ s.jsx(M, { href: "/legal", className: "underline hover:text-gray-700", children: "Legal Notice" })
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
