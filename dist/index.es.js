import * as Ft from "react";
import Te, { createContext as Bt, useContext as Wt, useCallback as Se, useState as ce, useRef as Le, useEffect as re } from "react";
import { Globe as Dt } from "lucide-react";
var ve = { exports: {} }, fe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function Vt() {
  if (Ye) return fe;
  Ye = 1;
  var o = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(s, i, n) {
    var a = null;
    if (n !== void 0 && (a = "" + n), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      n = {};
      for (var l in i)
        l !== "key" && (n[l] = i[l]);
    } else n = i;
    return i = n.ref, {
      $$typeof: o,
      type: s,
      key: a,
      ref: i !== void 0 ? i : null,
      props: n
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
var Je;
function Ut() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    function o(f) {
      if (f == null) return null;
      if (typeof f == "function")
        return f.$$typeof === M ? null : f.displayName || f.name || null;
      if (typeof f == "string") return f;
      switch (f) {
        case v:
          return "Fragment";
        case A:
          return "Profiler";
        case L:
          return "StrictMode";
        case x:
          return "Suspense";
        case E:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof f == "object")
        switch (typeof f.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), f.$$typeof) {
          case p:
            return "Portal";
          case z:
            return (f.displayName || "Context") + ".Provider";
          case C:
            return (f._context.displayName || "Context") + ".Consumer";
          case $:
            var k = f.render;
            return f = f.displayName, f || (f = k.displayName || k.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
          case I:
            return k = f.displayName || null, k !== null ? k : o(f.type) || "Memo";
          case y:
            k = f._payload, f = f._init;
            try {
              return o(f(k));
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
        var k = !1;
      } catch {
        k = !0;
      }
      if (k) {
        k = console;
        var P = k.error, O = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return P.call(
          k,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), e(f);
      }
    }
    function s(f) {
      if (f === v) return "<>";
      if (typeof f == "object" && f !== null && f.$$typeof === y)
        return "<...>";
      try {
        var k = o(f);
        return k ? "<" + k + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var f = G.A;
      return f === null ? null : f.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function a(f) {
      if (Q.call(f, "key")) {
        var k = Object.getOwnPropertyDescriptor(f, "key").get;
        if (k && k.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }
    function l(f, k) {
      function P() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          k
        ));
      }
      P.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: P,
        configurable: !0
      });
    }
    function c() {
      var f = o(this.type);
      return F[f] || (F[f] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), f = this.props.ref, f !== void 0 ? f : null;
    }
    function d(f, k, P, O, T, H, ne, B) {
      return P = H.ref, f = {
        $$typeof: m,
        type: f,
        key: k,
        props: H,
        _owner: T
      }, (P !== void 0 ? P : null) !== null ? Object.defineProperty(f, "ref", {
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
        value: ne
      }), Object.defineProperty(f, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    }
    function u(f, k, P, O, T, H, ne, B) {
      var V = k.children;
      if (V !== void 0)
        if (O)
          if (Y(V)) {
            for (O = 0; O < V.length; O++)
              h(V[O]);
            Object.freeze && Object.freeze(V);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(V);
      if (Q.call(k, "key")) {
        V = o(f);
        var q = Object.keys(k).filter(function(he) {
          return he !== "key";
        });
        O = 0 < q.length ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}", X[V + O] || (q = 0 < q.length ? "{" + q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          V,
          q,
          V
        ), X[V + O] = !0);
      }
      if (V = null, P !== void 0 && (t(P), V = "" + P), a(k) && (t(k.key), V = "" + k.key), "key" in k) {
        P = {};
        for (var te in k)
          te !== "key" && (P[te] = k[te]);
      } else P = k;
      return V && l(
        P,
        typeof f == "function" ? f.displayName || f.name || "Unknown" : f
      ), d(
        f,
        V,
        H,
        T,
        i(),
        P,
        ne,
        B
      );
    }
    function h(f) {
      typeof f == "object" && f !== null && f.$$typeof === m && f._store && (f._store.validated = 1);
    }
    var g = Te, m = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), z = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), M = Symbol.for("react.client.reference"), G = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, Y = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(f) {
        return f();
      }
    };
    var J, F = {}, W = g["react-stack-bottom-frame"].bind(
      g,
      n
    )(), j = D(s(n)), X = {};
    pe.Fragment = v, pe.jsx = function(f, k, P, O, T) {
      var H = 1e4 > G.recentlyCreatedOwnerStacks++;
      return u(
        f,
        k,
        P,
        !1,
        O,
        T,
        H ? Error("react-stack-top-frame") : W,
        H ? D(s(f)) : j
      );
    }, pe.jsxs = function(f, k, P, O, T) {
      var H = 1e4 > G.recentlyCreatedOwnerStacks++;
      return u(
        f,
        k,
        P,
        !0,
        O,
        T,
        H ? Error("react-stack-top-frame") : W,
        H ? D(s(f)) : j
      );
    };
  }()), pe;
}
var qe;
function Gt() {
  return qe || (qe = 1, process.env.NODE_ENV === "production" ? ve.exports = Vt() : ve.exports = Ut()), ve.exports;
}
var r = Gt();
function bt(o) {
  var e, t, s = "";
  if (typeof o == "string" || typeof o == "number") s += o;
  else if (typeof o == "object") if (Array.isArray(o)) {
    var i = o.length;
    for (e = 0; e < i; e++) o[e] && (t = bt(o[e])) && (s && (s += " "), s += t);
  } else for (t in o) o[t] && (s && (s += " "), s += t);
  return s;
}
function wt() {
  for (var o, e, t = 0, s = "", i = arguments.length; t < i; t++) (o = arguments[t]) && (e = bt(o)) && (s && (s += " "), s += e);
  return s;
}
const Xe = (o) => typeof o == "boolean" ? `${o}` : o === 0 ? "0" : o, Ze = wt, Ht = (o, e) => (t) => {
  var s;
  if ((e == null ? void 0 : e.variants) == null) return Ze(o, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: i, defaultVariants: n } = e, a = Object.keys(i).map((d) => {
    const u = t == null ? void 0 : t[d], h = n == null ? void 0 : n[d];
    if (u === null) return null;
    const g = Xe(u) || Xe(h);
    return i[d][g];
  }), l = t && Object.entries(t).reduce((d, u) => {
    let [h, g] = u;
    return g === void 0 || (d[h] = g), d;
  }, {}), c = e == null || (s = e.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((d, u) => {
    let { class: h, className: g, ...m } = u;
    return Object.entries(m).every((p) => {
      let [v, L] = p;
      return Array.isArray(L) ? L.includes({
        ...n,
        ...l
      }[v]) : {
        ...n,
        ...l
      }[v] === L;
    }) ? [
      ...d,
      h,
      g
    ] : d;
  }, []);
  return Ze(o, a, c, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, Ue = "-", Kt = (o) => {
  const e = Jt(o), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: s
  } = o;
  return {
    getClassGroupId: (a) => {
      const l = a.split(Ue);
      return l[0] === "" && l.length !== 1 && l.shift(), vt(l, e) || Yt(a);
    },
    getConflictingClassGroupIds: (a, l) => {
      const c = t[a] || [];
      return l && s[a] ? [...c, ...s[a]] : c;
    }
  };
}, vt = (o, e) => {
  var a;
  if (o.length === 0)
    return e.classGroupId;
  const t = o[0], s = e.nextPart.get(t), i = s ? vt(o.slice(1), s) : void 0;
  if (i)
    return i;
  if (e.validators.length === 0)
    return;
  const n = o.join(Ue);
  return (a = e.validators.find(({
    validator: l
  }) => l(n))) == null ? void 0 : a.classGroupId;
}, Qe = /^\[(.+)\]$/, Yt = (o) => {
  if (Qe.test(o)) {
    const e = Qe.exec(o)[1], t = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, Jt = (o) => {
  const {
    theme: e,
    classGroups: t
  } = o, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const i in t)
    _e(t[i], s, i, e);
  return s;
}, _e = (o, e, t, s) => {
  o.forEach((i) => {
    if (typeof i == "string") {
      const n = i === "" ? e : et(e, i);
      n.classGroupId = t;
      return;
    }
    if (typeof i == "function") {
      if (qt(i)) {
        _e(i(s), e, t, s);
        return;
      }
      e.validators.push({
        validator: i,
        classGroupId: t
      });
      return;
    }
    Object.entries(i).forEach(([n, a]) => {
      _e(a, et(e, n), t, s);
    });
  });
}, et = (o, e) => {
  let t = o;
  return e.split(Ue).forEach((s) => {
    t.nextPart.has(s) || t.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(s);
  }), t;
}, qt = (o) => o.isThemeGetter, Xt = (o) => {
  if (o < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const i = (n, a) => {
    t.set(n, a), e++, e > o && (e = 0, s = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(n) {
      let a = t.get(n);
      if (a !== void 0)
        return a;
      if ((a = s.get(n)) !== void 0)
        return i(n, a), a;
    },
    set(n, a) {
      t.has(n) ? t.set(n, a) : i(n, a);
    }
  };
}, ze = "!", Ie = ":", Zt = Ie.length, Qt = (o) => {
  const {
    prefix: e,
    experimentalParseClassName: t
  } = o;
  let s = (i) => {
    const n = [];
    let a = 0, l = 0, c = 0, d;
    for (let p = 0; p < i.length; p++) {
      let v = i[p];
      if (a === 0 && l === 0) {
        if (v === Ie) {
          n.push(i.slice(c, p)), c = p + Zt;
          continue;
        }
        if (v === "/") {
          d = p;
          continue;
        }
      }
      v === "[" ? a++ : v === "]" ? a-- : v === "(" ? l++ : v === ")" && l--;
    }
    const u = n.length === 0 ? i : i.substring(c), h = es(u), g = h !== u, m = d && d > c ? d - c : void 0;
    return {
      modifiers: n,
      hasImportantModifier: g,
      baseClassName: h,
      maybePostfixModifierPosition: m
    };
  };
  if (e) {
    const i = e + Ie, n = s;
    s = (a) => a.startsWith(i) ? n(a.substring(i.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (t) {
    const i = s;
    s = (n) => t({
      className: n,
      parseClassName: i
    });
  }
  return s;
}, es = (o) => o.endsWith(ze) ? o.substring(0, o.length - 1) : o.startsWith(ze) ? o.substring(1) : o, ts = (o) => {
  const e = Object.fromEntries(o.orderSensitiveModifiers.map((s) => [s, !0]));
  return (s) => {
    if (s.length <= 1)
      return s;
    const i = [];
    let n = [];
    return s.forEach((a) => {
      a[0] === "[" || e[a] ? (i.push(...n.sort(), a), n = []) : n.push(a);
    }), i.push(...n.sort()), i;
  };
}, ss = (o) => ({
  cache: Xt(o.cacheSize),
  parseClassName: Qt(o),
  sortModifiers: ts(o),
  ...Kt(o)
}), rs = /\s+/, is = (o, e) => {
  const {
    parseClassName: t,
    getClassGroupId: s,
    getConflictingClassGroupIds: i,
    sortModifiers: n
  } = e, a = [], l = o.trim().split(rs);
  let c = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const u = l[d], {
      isExternal: h,
      modifiers: g,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: v
    } = t(u);
    if (h) {
      c = u + (c.length > 0 ? " " + c : c);
      continue;
    }
    let L = !!v, A = s(L ? p.substring(0, v) : p);
    if (!A) {
      if (!L) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (A = s(p), !A) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      L = !1;
    }
    const C = n(g).join(":"), z = m ? C + ze : C, $ = z + A;
    if (a.includes($))
      continue;
    a.push($);
    const x = i(A, L);
    for (let E = 0; E < x.length; ++E) {
      const I = x[E];
      a.push(z + I);
    }
    c = u + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function os() {
  let o = 0, e, t, s = "";
  for (; o < arguments.length; )
    (e = arguments[o++]) && (t = jt(e)) && (s && (s += " "), s += t);
  return s;
}
const jt = (o) => {
  if (typeof o == "string")
    return o;
  let e, t = "";
  for (let s = 0; s < o.length; s++)
    o[s] && (e = jt(o[s])) && (t && (t += " "), t += e);
  return t;
};
function ns(o, ...e) {
  let t, s, i, n = a;
  function a(c) {
    const d = e.reduce((u, h) => h(u), o());
    return t = ss(d), s = t.cache.get, i = t.cache.set, n = l, l(c);
  }
  function l(c) {
    const d = s(c);
    if (d)
      return d;
    const u = is(c, t);
    return i(c, u), u;
  }
  return function() {
    return n(os.apply(null, arguments));
  };
}
const U = (o) => {
  const e = (t) => t[o] || [];
  return e.isThemeGetter = !0, e;
}, kt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ct = /^\((?:(\w[\w-]*):)?(.+)\)$/i, as = /^\d+\/\d+$/, ls = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, cs = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ds = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, us = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, hs = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ae = (o) => as.test(o), N = (o) => !!o && !Number.isNaN(Number(o)), se = (o) => !!o && Number.isInteger(Number(o)), Ee = (o) => o.endsWith("%") && N(o.slice(0, -1)), ee = (o) => ls.test(o), fs = () => !0, ps = (o) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  cs.test(o) && !ds.test(o)
), St = () => !1, gs = (o) => us.test(o), ms = (o) => hs.test(o), xs = (o) => !b(o) && !w(o), ys = (o) => de(o, Ot, St), b = (o) => kt.test(o), ie = (o) => de(o, Rt, ps), Me = (o) => de(o, ks, N), tt = (o) => de(o, Lt, St), bs = (o) => de(o, Nt, ms), je = (o) => de(o, Pt, gs), w = (o) => Ct.test(o), ge = (o) => ue(o, Rt), ws = (o) => ue(o, Cs), st = (o) => ue(o, Lt), vs = (o) => ue(o, Ot), js = (o) => ue(o, Nt), ke = (o) => ue(o, Pt, !0), de = (o, e, t) => {
  const s = kt.exec(o);
  return s ? s[1] ? e(s[1]) : t(s[2]) : !1;
}, ue = (o, e, t = !1) => {
  const s = Ct.exec(o);
  return s ? s[1] ? e(s[1]) : t : !1;
}, Lt = (o) => o === "position" || o === "percentage", Nt = (o) => o === "image" || o === "url", Ot = (o) => o === "length" || o === "size" || o === "bg-size", Rt = (o) => o === "length", ks = (o) => o === "number", Cs = (o) => o === "family-name", Pt = (o) => o === "shadow", Ss = () => {
  const o = U("color"), e = U("font"), t = U("text"), s = U("font-weight"), i = U("tracking"), n = U("leading"), a = U("breakpoint"), l = U("container"), c = U("spacing"), d = U("radius"), u = U("shadow"), h = U("inset-shadow"), g = U("text-shadow"), m = U("drop-shadow"), p = U("blur"), v = U("perspective"), L = U("aspect"), A = U("ease"), C = U("animate"), z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], $ = () => [
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
  ], x = () => [...$(), w, b], E = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", "contain", "none"], y = () => [w, b, c], R = () => [ae, "full", "auto", ...y()], M = () => [se, "none", "subgrid", w, b], G = () => ["auto", {
    span: ["full", se, w, b]
  }, se, w, b], Q = () => [se, "auto", w, b], Y = () => ["auto", "min", "max", "fr", w, b], D = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], J = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], F = () => ["auto", ...y()], W = () => [ae, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...y()], j = () => [o, w, b], X = () => [...$(), st, tt, {
    position: [w, b]
  }], f = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], k = () => ["auto", "cover", "contain", vs, ys, {
    size: [w, b]
  }], P = () => [Ee, ge, ie], O = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    w,
    b
  ], T = () => ["", N, ge, ie], H = () => ["solid", "dashed", "dotted", "double"], ne = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], B = () => [N, Ee, st, tt], V = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    p,
    w,
    b
  ], q = () => ["none", N, w, b], te = () => ["none", N, w, b], he = () => [N, w, b], we = () => [ae, "full", ...y()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ee],
      breakpoint: [ee],
      color: [fs],
      container: [ee],
      "drop-shadow": [ee],
      ease: ["in", "out", "in-out"],
      font: [xs],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ee],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ee],
      shadow: [ee],
      spacing: ["px", N],
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
        aspect: ["auto", "square", ae, b, w, L]
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
        object: x()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: E()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": E()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": E()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: I()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": I()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": I()
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
        inset: R()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": R()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": R()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: R()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: R()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: R()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: R()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: R()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: R()
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
        z: [se, "auto", w, b]
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
        order: [se, "first", "last", "none", w, b]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": M()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: G()
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
        "grid-rows": M()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: G()
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
        justify: [...D(), "normal"]
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
        content: ["normal", ...D()]
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
        "place-content": D()
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
        m: F()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: F()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: F()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: F()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: F()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: F()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: F()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: F()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: F()
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
        size: W()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...W()]
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
          ...W()
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
          ...W()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...W()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...W()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...W()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, ge, ie]
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
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ee, b]
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
        tracking: [i, w, b]
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
          ...y()
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
        decoration: [...H(), "wavy"]
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
        decoration: j()
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
        indent: y()
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
        bg: X()
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
          }, se, w, b],
          radial: ["", w, b],
          conic: [se, w, b]
        }, js, bs]
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
        border: [...H(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...H(), "hidden", "none"]
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
        outline: [...H(), "none", "hidden"]
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
        outline: ["", N, ge, ie]
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
          ke,
          je
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
        "inset-shadow": ["none", h, ke, je]
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
        ring: j()
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
        "ring-offset": j()
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
        "inset-ring": j()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", g, ke, je]
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
        opacity: [N, w, b]
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
        "mask-linear": [N]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": B()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": B()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": j()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": j()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": B()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": B()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": j()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": j()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": B()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": B()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": j()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": j()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": B()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": B()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": j()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": j()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": B()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": B()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": j()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": j()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": B()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": B()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": j()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": j()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": B()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": B()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": j()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": j()
      }],
      "mask-image-radial": [{
        "mask-radial": [w, b]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": B()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": B()
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
        "mask-radial-at": $()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [N]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": B()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": B()
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
        mask: X()
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
        blur: V()
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
          m,
          ke,
          je
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
        "backdrop-blur": V()
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
        ease: ["linear", "initial", A, w, b]
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
        animate: ["none", C, w, b]
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
        perspective: [v, w, b]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": x()
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
        transform: [w, b, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: x()
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
        fill: ["none", ...j()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [N, ge, ie, Me]
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
}, Ls = /* @__PURE__ */ ns(Ss);
function Ns(...o) {
  return Ls(wt(o));
}
function Ne(o, e) {
  if (o) {
    const t = o.split(":");
    if (t.length >= 3 && t[0] && t[2] !== "443")
      return o;
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
), Fe = Ft.forwardRef(
  ({ className: o, variant: e, size: t, asChild: s = !1, ...i }, n) => /* @__PURE__ */ r.jsx("button", { className: Ns(Os({ variant: e, size: t, className: o })), ref: n, ...i })
);
Fe.displayName = "Button";
const _ = ({ href: o, children: e, className: t = "", target: s = "_self", rel: i = "noopener noreferrer", onClick: n }) => {
  const a = (l) => {
    s !== "_blank" && (l.preventDefault(), window.location.href = o), n && n(l);
  };
  return /* @__PURE__ */ r.jsx(
    "a",
    {
      href: o,
      className: t,
      target: s,
      rel: i,
      onClick: a,
      "aria-label": typeof e == "string" ? e : void 0,
      children: e
    }
  );
}, Rs = (o, e, t, s) => {
  var n, a, l, c;
  const i = [t, {
    code: e,
    ...s || {}
  }];
  if ((a = (n = o == null ? void 0 : o.services) == null ? void 0 : n.logger) != null && a.forward)
    return o.services.logger.forward(i, "warn", "react-i18next::", !0);
  oe(i[0]) && (i[0] = `react-i18next:: ${i[0]}`), (c = (l = o == null ? void 0 : o.services) == null ? void 0 : l.logger) != null && c.warn ? o.services.logger.warn(...i) : console != null && console.warn && console.warn(...i);
}, rt = {}, Be = (o, e, t, s) => {
  oe(t) && rt[t] || (oe(t) && (rt[t] = /* @__PURE__ */ new Date()), Rs(o, e, t, s));
}, $t = (o, e) => () => {
  if (o.isInitialized)
    e();
  else {
    const t = () => {
      setTimeout(() => {
        o.off("initialized", t);
      }, 0), e();
    };
    o.on("initialized", t);
  }
}, We = (o, e, t) => {
  o.loadNamespaces(e, $t(o, t));
}, it = (o, e, t, s) => {
  if (oe(t) && (t = [t]), o.options.preload && o.options.preload.indexOf(e) > -1) return We(o, t, s);
  t.forEach((i) => {
    o.options.ns.indexOf(i) < 0 && o.options.ns.push(i);
  }), o.loadLanguages(e, $t(o, s));
}, Ps = (o, e, t = {}) => !e.languages || !e.languages.length ? (Be(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: e.languages
}), !0) : e.hasLoadedNamespace(o, {
  lng: t.lng,
  precheck: (s, i) => {
    var n;
    if (((n = t.bindI18n) == null ? void 0 : n.indexOf("languageChanging")) > -1 && s.services.backendConnector.backend && s.isLanguageChangingTo && !i(s.isLanguageChangingTo, o)) return !1;
  }
}), oe = (o) => typeof o == "string", $s = (o) => typeof o == "object" && o !== null, Es = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Ms = {
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
}, As = (o) => Ms[o], Ts = (o) => o.replace(Es, As);
let De = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Ts
};
const _s = (o = {}) => {
  De = {
    ...De,
    ...o
  };
}, zs = () => De;
let Et;
const Is = (o) => {
  Et = o;
}, Fs = () => Et, Bs = {
  type: "3rdParty",
  init(o) {
    _s(o.options.react), Is(o);
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
const Vs = (o, e) => {
  const t = Le();
  return re(() => {
    t.current = o;
  }, [o, e]), t.current;
}, Mt = (o, e, t, s) => o.getFixedT(e, t, s), Us = (o, e, t, s) => Se(Mt(o, e, t, s), [o, e, t, s]), At = (o, e = {}) => {
  var $, x, E, I;
  const {
    i18n: t
  } = e, {
    i18n: s,
    defaultNS: i
  } = Wt(Ws) || {}, n = t || s || Fs();
  if (n && !n.reportNamespaces && (n.reportNamespaces = new Ds()), !n) {
    Be(n, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const y = (M, G) => oe(G) ? G : $s(G) && oe(G.defaultValue) ? G.defaultValue : Array.isArray(M) ? M[M.length - 1] : M, R = [y, {}, !1];
    return R.t = y, R.i18n = {}, R.ready = !1, R;
  }
  ($ = n.options.react) != null && $.wait && Be(n, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const a = {
    ...zs(),
    ...n.options.react,
    ...e
  }, {
    useSuspense: l,
    keyPrefix: c
  } = a;
  let d = i || ((x = n.options) == null ? void 0 : x.defaultNS);
  d = oe(d) ? [d] : d || ["translation"], (I = (E = n.reportNamespaces).addUsedNamespaces) == null || I.call(E, d);
  const u = (n.isInitialized || n.initializedStoreOnce) && d.every((y) => Ps(y, n, a)), h = Us(n, e.lng || null, a.nsMode === "fallback" ? d : d[0], c), g = () => h, m = () => Mt(n, e.lng || null, a.nsMode === "fallback" ? d : d[0], c), [p, v] = ce(g);
  let L = d.join();
  e.lng && (L = `${e.lng}${L}`);
  const A = Vs(L), C = Le(!0);
  re(() => {
    const {
      bindI18n: y,
      bindI18nStore: R
    } = a;
    C.current = !0, !u && !l && (e.lng ? it(n, e.lng, d, () => {
      C.current && v(m);
    }) : We(n, d, () => {
      C.current && v(m);
    })), u && A && A !== L && C.current && v(m);
    const M = () => {
      C.current && v(m);
    };
    return y && (n == null || n.on(y, M)), R && (n == null || n.store.on(R, M)), () => {
      C.current = !1, n && (y == null || y.split(" ").forEach((G) => n.off(G, M))), R && n && R.split(" ").forEach((G) => n.store.off(G, M));
    };
  }, [n, L]), re(() => {
    C.current && u && v(g);
  }, [n, c, u]);
  const z = [p, n, u];
  if (z.t = p, z.i18n = n, z.ready = u, u || !u && !l) return z;
  throw new Promise((y) => {
    e.lng ? it(n, e.lng, d, () => y()) : We(n, d, () => y());
  });
}, S = (o) => typeof o == "string", me = () => {
  let o, e;
  const t = new Promise((s, i) => {
    o = s, e = i;
  });
  return t.resolve = o, t.reject = e, t;
}, ot = (o) => o == null ? "" : "" + o, Gs = (o, e, t) => {
  o.forEach((s) => {
    e[s] && (t[s] = e[s]);
  });
}, Hs = /###/g, nt = (o) => o && o.indexOf("###") > -1 ? o.replace(Hs, ".") : o, at = (o) => !o || S(o), xe = (o, e, t) => {
  const s = S(e) ? e.split(".") : e;
  let i = 0;
  for (; i < s.length - 1; ) {
    if (at(o)) return {};
    const n = nt(s[i]);
    !o[n] && t && (o[n] = new t()), Object.prototype.hasOwnProperty.call(o, n) ? o = o[n] : o = {}, ++i;
  }
  return at(o) ? {} : {
    obj: o,
    k: nt(s[i])
  };
}, lt = (o, e, t) => {
  const {
    obj: s,
    k: i
  } = xe(o, e, Object);
  if (s !== void 0 || e.length === 1) {
    s[i] = t;
    return;
  }
  let n = e[e.length - 1], a = e.slice(0, e.length - 1), l = xe(o, a, Object);
  for (; l.obj === void 0 && a.length; )
    n = `${a[a.length - 1]}.${n}`, a = a.slice(0, a.length - 1), l = xe(o, a, Object), l != null && l.obj && typeof l.obj[`${l.k}.${n}`] < "u" && (l.obj = void 0);
  l.obj[`${l.k}.${n}`] = t;
}, Ks = (o, e, t, s) => {
  const {
    obj: i,
    k: n
  } = xe(o, e, Object);
  i[n] = i[n] || [], i[n].push(t);
}, Oe = (o, e) => {
  const {
    obj: t,
    k: s
  } = xe(o, e);
  if (t && Object.prototype.hasOwnProperty.call(t, s))
    return t[s];
}, Ys = (o, e, t) => {
  const s = Oe(o, t);
  return s !== void 0 ? s : Oe(e, t);
}, Tt = (o, e, t) => {
  for (const s in e)
    s !== "__proto__" && s !== "constructor" && (s in o ? S(o[s]) || o[s] instanceof String || S(e[s]) || e[s] instanceof String ? t && (o[s] = e[s]) : Tt(o[s], e[s], t) : o[s] = e[s]);
  return o;
}, le = (o) => o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Js = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const qs = (o) => S(o) ? o.replace(/[&<>"'\/]/g, (e) => Js[e]) : o;
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
const Zs = [" ", ",", "?", "!", ";"], Qs = new Xs(20), er = (o, e, t) => {
  e = e || "", t = t || "";
  const s = Zs.filter((a) => e.indexOf(a) < 0 && t.indexOf(a) < 0);
  if (s.length === 0) return !0;
  const i = Qs.getRegExp(`(${s.map((a) => a === "?" ? "\\?" : a).join("|")})`);
  let n = !i.test(o);
  if (!n) {
    const a = o.indexOf(t);
    a > 0 && !i.test(o.substring(0, a)) && (n = !0);
  }
  return n;
}, Ve = (o, e, t = ".") => {
  if (!o) return;
  if (o[e])
    return Object.prototype.hasOwnProperty.call(o, e) ? o[e] : void 0;
  const s = e.split(t);
  let i = o;
  for (let n = 0; n < s.length; ) {
    if (!i || typeof i != "object")
      return;
    let a, l = "";
    for (let c = n; c < s.length; ++c)
      if (c !== n && (l += t), l += s[c], a = i[l], a !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof a) > -1 && c < s.length - 1)
          continue;
        n += c - n + 1;
        break;
      }
    i = a;
  }
  return i;
}, ye = (o) => o == null ? void 0 : o.replace("_", "-"), tr = {
  type: "logger",
  log(o) {
    this.output("log", o);
  },
  warn(o) {
    this.output("warn", o);
  },
  error(o) {
    this.output("error", o);
  },
  output(o, e) {
    var t, s;
    (s = (t = console == null ? void 0 : console[o]) == null ? void 0 : t.apply) == null || s.call(t, console, e);
  }
};
class Re {
  constructor(e, t = {}) {
    this.init(e, t);
  }
  init(e, t = {}) {
    this.prefix = t.prefix || "i18next:", this.logger = e || tr, this.options = t, this.debug = t.debug;
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
  forward(e, t, s, i) {
    return i && !this.debug ? null : (S(e[0]) && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[t](e));
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
class $e {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((s) => {
      this.observers[s] || (this.observers[s] = /* @__PURE__ */ new Map());
      const i = this.observers[s].get(t) || 0;
      this.observers[s].set(t, i + 1);
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
    this.observers[e] && Array.from(this.observers[e].entries()).forEach(([i, n]) => {
      for (let a = 0; a < n; a++)
        i(...t);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([i, n]) => {
      for (let a = 0; a < n; a++)
        i.apply(i, [e, ...t]);
    });
  }
}
class ct extends $e {
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
  getResource(e, t, s, i = {}) {
    var d, u;
    const n = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, a = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let l;
    e.indexOf(".") > -1 ? l = e.split(".") : (l = [e, t], s && (Array.isArray(s) ? l.push(...s) : S(s) && n ? l.push(...s.split(n)) : l.push(s)));
    const c = Oe(this.data, l);
    return !c && !t && !s && e.indexOf(".") > -1 && (e = l[0], t = l[1], s = l.slice(2).join(".")), c || !a || !S(s) ? c : Ve((u = (d = this.data) == null ? void 0 : d[e]) == null ? void 0 : u[t], s, n);
  }
  addResource(e, t, s, i, n = {
    silent: !1
  }) {
    const a = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let l = [e, t];
    s && (l = l.concat(a ? s.split(a) : s)), e.indexOf(".") > -1 && (l = e.split("."), i = t, t = l[1]), this.addNamespaces(t), lt(this.data, l, i), n.silent || this.emit("added", e, t, s, i);
  }
  addResources(e, t, s, i = {
    silent: !1
  }) {
    for (const n in s)
      (S(s[n]) || Array.isArray(s[n])) && this.addResource(e, t, n, s[n], {
        silent: !0
      });
    i.silent || this.emit("added", e, t, s);
  }
  addResourceBundle(e, t, s, i, n, a = {
    silent: !1,
    skipCopy: !1
  }) {
    let l = [e, t];
    e.indexOf(".") > -1 && (l = e.split("."), i = s, s = t, t = l[1]), this.addNamespaces(t);
    let c = Oe(this.data, l) || {};
    a.skipCopy || (s = JSON.parse(JSON.stringify(s))), i ? Tt(c, s, n) : c = {
      ...c,
      ...s
    }, lt(this.data, l, c), a.silent || this.emit("added", e, t, s);
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
var _t = {
  processors: {},
  addPostProcessor(o) {
    this.processors[o.name] = o;
  },
  handle(o, e, t, s, i) {
    return o.forEach((n) => {
      var a;
      e = ((a = this.processors[n]) == null ? void 0 : a.process(e, t, s, i)) ?? e;
    }), e;
  }
};
const dt = {}, ut = (o) => !S(o) && typeof o != "boolean" && typeof o != "number";
class Pe extends $e {
  constructor(e, t = {}) {
    super(), Gs(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Z.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, t = {
    interpolation: {}
  }) {
    const s = {
      ...t
    };
    if (e == null) return !1;
    const i = this.resolve(e, s);
    return (i == null ? void 0 : i.res) !== void 0;
  }
  extractFromKey(e, t) {
    let s = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ":");
    const i = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let n = t.ns || this.options.defaultNS || [];
    const a = s && e.indexOf(s) > -1, l = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !er(e, s, i);
    if (a && !l) {
      const c = e.match(this.interpolator.nestingRegexp);
      if (c && c.length > 0)
        return {
          key: e,
          namespaces: S(n) ? [n] : n
        };
      const d = e.split(s);
      (s !== i || s === i && this.options.ns.indexOf(d[0]) > -1) && (n = d.shift()), e = d.join(i);
    }
    return {
      key: e,
      namespaces: S(n) ? [n] : n
    };
  }
  translate(e, t, s) {
    let i = typeof t == "object" ? {
      ...t
    } : t;
    if (typeof i != "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), typeof options == "object" && (i = {
      ...i
    }), i || (i = {}), e == null) return "";
    Array.isArray(e) || (e = [String(e)]);
    const n = i.returnDetails !== void 0 ? i.returnDetails : this.options.returnDetails, a = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, {
      key: l,
      namespaces: c
    } = this.extractFromKey(e[e.length - 1], i), d = c[c.length - 1];
    let u = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
    u === void 0 && (u = ":");
    const h = i.lng || this.language, g = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((h == null ? void 0 : h.toLowerCase()) === "cimode")
      return g ? n ? {
        res: `${d}${u}${l}`,
        usedKey: l,
        exactUsedKey: l,
        usedLng: h,
        usedNS: d,
        usedParams: this.getUsedParamsDetails(i)
      } : `${d}${u}${l}` : n ? {
        res: l,
        usedKey: l,
        exactUsedKey: l,
        usedLng: h,
        usedNS: d,
        usedParams: this.getUsedParamsDetails(i)
      } : l;
    const m = this.resolve(e, i);
    let p = m == null ? void 0 : m.res;
    const v = (m == null ? void 0 : m.usedKey) || l, L = (m == null ? void 0 : m.exactUsedKey) || l, A = ["[object Number]", "[object Function]", "[object RegExp]"], C = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays, z = !this.i18nFormat || this.i18nFormat.handleAsObject, $ = i.count !== void 0 && !S(i.count), x = Pe.hasDefaultValue(i), E = $ ? this.pluralResolver.getSuffix(h, i.count, i) : "", I = i.ordinal && $ ? this.pluralResolver.getSuffix(h, i.count, {
      ordinal: !1
    }) : "", y = $ && !i.ordinal && i.count === 0, R = y && i[`defaultValue${this.options.pluralSeparator}zero`] || i[`defaultValue${E}`] || i[`defaultValue${I}`] || i.defaultValue;
    let M = p;
    z && !p && x && (M = R);
    const G = ut(M), Q = Object.prototype.toString.apply(M);
    if (z && M && G && A.indexOf(Q) < 0 && !(S(C) && Array.isArray(M))) {
      if (!i.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const Y = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, M, {
          ...i,
          ns: c
        }) : `key '${l} (${this.language})' returned an object instead of string.`;
        return n ? (m.res = Y, m.usedParams = this.getUsedParamsDetails(i), m) : Y;
      }
      if (a) {
        const Y = Array.isArray(M), D = Y ? [] : {}, J = Y ? L : v;
        for (const F in M)
          if (Object.prototype.hasOwnProperty.call(M, F)) {
            const W = `${J}${a}${F}`;
            x && !p ? D[F] = this.translate(W, {
              ...i,
              defaultValue: ut(R) ? R[F] : void 0,
              joinArrays: !1,
              ns: c
            }) : D[F] = this.translate(W, {
              ...i,
              joinArrays: !1,
              ns: c
            }), D[F] === W && (D[F] = M[F]);
          }
        p = D;
      }
    } else if (z && S(C) && Array.isArray(p))
      p = p.join(C), p && (p = this.extendTranslation(p, e, i, s));
    else {
      let Y = !1, D = !1;
      !this.isValidLookup(p) && x && (Y = !0, p = R), this.isValidLookup(p) || (D = !0, p = l);
      const F = (i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && D ? void 0 : p, W = x && R !== p && this.options.updateMissing;
      if (D || Y || W) {
        if (this.logger.log(W ? "updateKey" : "missingKey", h, d, l, W ? R : p), a) {
          const k = this.resolve(l, {
            ...i,
            keySeparator: !1
          });
          k && k.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let j = [];
        const X = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && X && X[0])
          for (let k = 0; k < X.length; k++)
            j.push(X[k]);
        else this.options.saveMissingTo === "all" ? j = this.languageUtils.toResolveHierarchy(i.lng || this.language) : j.push(i.lng || this.language);
        const f = (k, P, O) => {
          var H;
          const T = x && O !== p ? O : F;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(k, d, P, T, W, i) : (H = this.backendConnector) != null && H.saveMissing && this.backendConnector.saveMissing(k, d, P, T, W, i), this.emit("missingKey", k, d, P, p);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && $ ? j.forEach((k) => {
          const P = this.pluralResolver.getSuffixes(k, i);
          y && i[`defaultValue${this.options.pluralSeparator}zero`] && P.indexOf(`${this.options.pluralSeparator}zero`) < 0 && P.push(`${this.options.pluralSeparator}zero`), P.forEach((O) => {
            f([k], l + O, i[`defaultValue${O}`] || R);
          });
        }) : f(j, l, R));
      }
      p = this.extendTranslation(p, e, i, m, s), D && p === l && this.options.appendNamespaceToMissingKey && (p = `${d}${u}${l}`), (D || Y) && this.options.parseMissingKeyHandler && (p = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${d}${u}${l}` : l, Y ? p : void 0, i));
    }
    return n ? (m.res = p, m.usedParams = this.getUsedParamsDetails(i), m) : p;
  }
  extendTranslation(e, t, s, i, n) {
    var c, d;
    if ((c = this.i18nFormat) != null && c.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...s
      }, s.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
        resolved: i
      });
    else if (!s.skipInterpolation) {
      s.interpolation && this.interpolator.init({
        ...s,
        interpolation: {
          ...this.options.interpolation,
          ...s.interpolation
        }
      });
      const u = S(e) && (((d = s == null ? void 0 : s.interpolation) == null ? void 0 : d.skipOnVariables) !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let h;
      if (u) {
        const m = e.match(this.interpolator.nestingRegexp);
        h = m && m.length;
      }
      let g = s.replace && !S(s.replace) ? s.replace : s;
      if (this.options.interpolation.defaultVariables && (g = {
        ...this.options.interpolation.defaultVariables,
        ...g
      }), e = this.interpolator.interpolate(e, g, s.lng || this.language || i.usedLng, s), u) {
        const m = e.match(this.interpolator.nestingRegexp), p = m && m.length;
        h < p && (s.nest = !1);
      }
      !s.lng && i && i.res && (s.lng = this.language || i.usedLng), s.nest !== !1 && (e = this.interpolator.nest(e, (...m) => (n == null ? void 0 : n[0]) === m[0] && !s.context ? (this.logger.warn(`It seems you are nesting recursively key: ${m[0]} in key: ${t[0]}`), null) : this.translate(...m, t), s)), s.interpolation && this.interpolator.reset();
    }
    const a = s.postProcess || this.options.postProcess, l = S(a) ? [a] : a;
    return e != null && (l != null && l.length) && s.applyPostProcessor !== !1 && (e = _t.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...i,
        usedParams: this.getUsedParamsDetails(s)
      },
      ...s
    } : s, this)), e;
  }
  resolve(e, t = {}) {
    let s, i, n, a, l;
    return S(e) && (e = [e]), e.forEach((c) => {
      if (this.isValidLookup(s)) return;
      const d = this.extractFromKey(c, t), u = d.key;
      i = u;
      let h = d.namespaces;
      this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
      const g = t.count !== void 0 && !S(t.count), m = g && !t.ordinal && t.count === 0, p = t.context !== void 0 && (S(t.context) || typeof t.context == "number") && t.context !== "", v = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      h.forEach((L) => {
        var A, C;
        this.isValidLookup(s) || (l = L, !dt[`${v[0]}-${L}`] && ((A = this.utils) != null && A.hasLoadedNamespace) && !((C = this.utils) != null && C.hasLoadedNamespace(l)) && (dt[`${v[0]}-${L}`] = !0, this.logger.warn(`key "${i}" for languages "${v.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), v.forEach((z) => {
          var E;
          if (this.isValidLookup(s)) return;
          a = z;
          const $ = [u];
          if ((E = this.i18nFormat) != null && E.addLookupKeys)
            this.i18nFormat.addLookupKeys($, u, z, L, t);
          else {
            let I;
            g && (I = this.pluralResolver.getSuffix(z, t.count, t));
            const y = `${this.options.pluralSeparator}zero`, R = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (g && ($.push(u + I), t.ordinal && I.indexOf(R) === 0 && $.push(u + I.replace(R, this.options.pluralSeparator)), m && $.push(u + y)), p) {
              const M = `${u}${this.options.contextSeparator}${t.context}`;
              $.push(M), g && ($.push(M + I), t.ordinal && I.indexOf(R) === 0 && $.push(M + I.replace(R, this.options.pluralSeparator)), m && $.push(M + y));
            }
          }
          let x;
          for (; x = $.pop(); )
            this.isValidLookup(s) || (n = x, s = this.getResource(z, L, x, t));
        }));
      });
    }), {
      res: s,
      usedKey: i,
      exactUsedKey: n,
      usedLng: a,
      usedNS: l
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, s, i = {}) {
    var n;
    return (n = this.i18nFormat) != null && n.getResource ? this.i18nFormat.getResource(e, t, s, i) : this.resourceStore.getResource(e, t, s, i);
  }
  getUsedParamsDetails(e = {}) {
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], s = e.replace && !S(e.replace);
    let i = s ? e.replace : e;
    if (s && typeof e.count < "u" && (i.count = e.count), this.options.interpolation.defaultVariables && (i = {
      ...this.options.interpolation.defaultVariables,
      ...i
    }), !s) {
      i = {
        ...i
      };
      for (const n of t)
        delete i[n];
    }
    return i;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const s in e)
      if (Object.prototype.hasOwnProperty.call(e, s) && t === s.substring(0, t.length) && e[s] !== void 0)
        return !0;
    return !1;
  }
}
class ht {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Z.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = ye(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = ye(e), !e || e.indexOf("-") < 0) return e;
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
    return e.forEach((s) => {
      if (t) return;
      const i = this.formatLanguageCode(s);
      (!this.options.supportedLngs || this.isSupportedCode(i)) && (t = i);
    }), !t && this.options.supportedLngs && e.forEach((s) => {
      if (t) return;
      const i = this.getScriptPartFromCode(s);
      if (this.isSupportedCode(i)) return t = i;
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
    if (typeof e == "function" && (e = e(t)), S(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let s = e[t];
    return s || (s = e[this.getScriptPartFromCode(t)]), s || (s = e[this.formatLanguageCode(t)]), s || (s = e[this.getLanguagePartFromCode(t)]), s || (s = e.default), s || [];
  }
  toResolveHierarchy(e, t) {
    const s = this.getFallbackCodes((t === !1 ? [] : t) || this.options.fallbackLng || [], e), i = [], n = (a) => {
      a && (this.isSupportedCode(a) ? i.push(a) : this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`));
    };
    return S(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && n(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && n(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && n(this.getLanguagePartFromCode(e))) : S(e) && n(this.formatLanguageCode(e)), s.forEach((a) => {
      i.indexOf(a) < 0 && n(this.formatLanguageCode(a));
    }), i;
  }
}
const ft = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, pt = {
  select: (o) => o === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class sr {
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
    const s = ye(e === "dev" ? "en" : e), i = t.ordinal ? "ordinal" : "cardinal", n = JSON.stringify({
      cleanedCode: s,
      type: i
    });
    if (n in this.pluralRulesCache)
      return this.pluralRulesCache[n];
    let a;
    try {
      a = new Intl.PluralRules(s, {
        type: i
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), pt;
      if (!e.match(/-|_/)) return pt;
      const c = this.languageUtils.getLanguagePartFromCode(e);
      a = this.getRule(c, t);
    }
    return this.pluralRulesCache[n] = a, a;
  }
  needsPlural(e, t = {}) {
    let s = this.getRule(e, t);
    return s || (s = this.getRule("dev", t)), (s == null ? void 0 : s.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(e, t, s = {}) {
    return this.getSuffixes(e, s).map((i) => `${t}${i}`);
  }
  getSuffixes(e, t = {}) {
    let s = this.getRule(e, t);
    return s || (s = this.getRule("dev", t)), s ? s.resolvedOptions().pluralCategories.sort((i, n) => ft[i] - ft[n]).map((i) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : [];
  }
  getSuffix(e, t, s = {}) {
    const i = this.getRule(e, s);
    return i ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, s));
  }
}
const gt = (o, e, t, s = ".", i = !0) => {
  let n = Ys(o, e, t);
  return !n && i && S(t) && (n = Ve(o, t, s), n === void 0 && (n = Ve(e, t, s))), n;
}, Ae = (o) => o.replace(/\$/g, "$$$$");
class rr {
  constructor(e = {}) {
    var t;
    this.logger = Z.create("interpolator"), this.options = e, this.format = ((t = e == null ? void 0 : e.interpolation) == null ? void 0 : t.format) || ((s) => s), this.init(e);
  }
  init(e = {}) {
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: s,
      useRawValueToEscape: i,
      prefix: n,
      prefixEscaped: a,
      suffix: l,
      suffixEscaped: c,
      formatSeparator: d,
      unescapeSuffix: u,
      unescapePrefix: h,
      nestingPrefix: g,
      nestingPrefixEscaped: m,
      nestingSuffix: p,
      nestingSuffixEscaped: v,
      nestingOptionsSeparator: L,
      maxReplaces: A,
      alwaysFormat: C
    } = e.interpolation;
    this.escape = t !== void 0 ? t : qs, this.escapeValue = s !== void 0 ? s : !0, this.useRawValueToEscape = i !== void 0 ? i : !1, this.prefix = n ? le(n) : a || "{{", this.suffix = l ? le(l) : c || "}}", this.formatSeparator = d || ",", this.unescapePrefix = u ? "" : h || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = g ? le(g) : m || le("$t("), this.nestingSuffix = p ? le(p) : v || le(")"), this.nestingOptionsSeparator = L || ",", this.maxReplaces = A || 1e3, this.alwaysFormat = C !== void 0 ? C : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, s) => (t == null ? void 0 : t.source) === s ? (t.lastIndex = 0, t) : new RegExp(s, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, s, i) {
    var m;
    let n, a, l;
    const c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, d = (p) => {
      if (p.indexOf(this.formatSeparator) < 0) {
        const C = gt(t, c, p, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(C, void 0, s, {
          ...i,
          ...t,
          interpolationkey: p
        }) : C;
      }
      const v = p.split(this.formatSeparator), L = v.shift().trim(), A = v.join(this.formatSeparator).trim();
      return this.format(gt(t, c, L, this.options.keySeparator, this.options.ignoreJSONStructure), A, s, {
        ...i,
        ...t,
        interpolationkey: L
      });
    };
    this.resetRegExp();
    const u = (i == null ? void 0 : i.missingInterpolationHandler) || this.options.missingInterpolationHandler, h = ((m = i == null ? void 0 : i.interpolation) == null ? void 0 : m.skipOnVariables) !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (p) => Ae(p)
    }, {
      regex: this.regexp,
      safeValue: (p) => this.escapeValue ? Ae(this.escape(p)) : Ae(p)
    }].forEach((p) => {
      for (l = 0; n = p.regex.exec(e); ) {
        const v = n[1].trim();
        if (a = d(v), a === void 0)
          if (typeof u == "function") {
            const A = u(e, n, i);
            a = S(A) ? A : "";
          } else if (i && Object.prototype.hasOwnProperty.call(i, v))
            a = "";
          else if (h) {
            a = n[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${v} for interpolating ${e}`), a = "";
        else !S(a) && !this.useRawValueToEscape && (a = ot(a));
        const L = p.safeValue(a);
        if (e = e.replace(n[0], L), h ? (p.regex.lastIndex += a.length, p.regex.lastIndex -= n[0].length) : p.regex.lastIndex = 0, l++, l >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t, s = {}) {
    let i, n, a;
    const l = (c, d) => {
      const u = this.nestingOptionsSeparator;
      if (c.indexOf(u) < 0) return c;
      const h = c.split(new RegExp(`${u}[ ]*{`));
      let g = `{${h[1]}`;
      c = h[0], g = this.interpolate(g, a);
      const m = g.match(/'/g), p = g.match(/"/g);
      (((m == null ? void 0 : m.length) ?? 0) % 2 === 0 && !p || p.length % 2 !== 0) && (g = g.replace(/'/g, '"'));
      try {
        a = JSON.parse(g), d && (a = {
          ...d,
          ...a
        });
      } catch (v) {
        return this.logger.warn(`failed parsing options string in nesting for key ${c}`, v), `${c}${u}${g}`;
      }
      return a.defaultValue && a.defaultValue.indexOf(this.prefix) > -1 && delete a.defaultValue, c;
    };
    for (; i = this.nestingRegexp.exec(e); ) {
      let c = [];
      a = {
        ...s
      }, a = a.replace && !S(a.replace) ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
      let d = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const u = i[1].split(this.formatSeparator).map((h) => h.trim());
        i[1] = u.shift(), c = u, d = !0;
      }
      if (n = t(l.call(this, i[1].trim(), a), a), n && i[0] === e && !S(n)) return n;
      S(n) || (n = ot(n)), n || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`), n = ""), d && (n = c.reduce((u, h) => this.format(u, h, s.lng, {
        ...s,
        interpolationkey: i[1].trim()
      }), n.trim())), e = e.replace(i[0], n), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const ir = (o) => {
  let e = o.toLowerCase().trim();
  const t = {};
  if (o.indexOf("(") > -1) {
    const s = o.split("(");
    e = s[0].toLowerCase().trim();
    const i = s[1].substring(0, s[1].length - 1);
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
}, mt = (o) => {
  const e = {};
  return (t, s, i) => {
    let n = i;
    i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (n = {
      ...n,
      [i.interpolationkey]: void 0
    });
    const a = s + JSON.stringify(n);
    let l = e[a];
    return l || (l = o(ye(s), i), e[a] = l), l(t);
  };
}, or = (o) => (e, t, s) => o(ye(t), s)(e);
class nr {
  constructor(e = {}) {
    this.logger = Z.create("formatter"), this.options = e, this.init(e);
  }
  init(e, t = {
    interpolation: {}
  }) {
    this.formatSeparator = t.interpolation.formatSeparator || ",";
    const s = t.cacheInBuiltFormats ? mt : or;
    this.formats = {
      number: s((i, n) => {
        const a = new Intl.NumberFormat(i, {
          ...n
        });
        return (l) => a.format(l);
      }),
      currency: s((i, n) => {
        const a = new Intl.NumberFormat(i, {
          ...n,
          style: "currency"
        });
        return (l) => a.format(l);
      }),
      datetime: s((i, n) => {
        const a = new Intl.DateTimeFormat(i, {
          ...n
        });
        return (l) => a.format(l);
      }),
      relativetime: s((i, n) => {
        const a = new Intl.RelativeTimeFormat(i, {
          ...n
        });
        return (l) => a.format(l, n.range || "day");
      }),
      list: s((i, n) => {
        const a = new Intl.ListFormat(i, {
          ...n
        });
        return (l) => a.format(l);
      })
    };
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = mt(t);
  }
  format(e, t, s, i = {}) {
    const n = t.split(this.formatSeparator);
    if (n.length > 1 && n[0].indexOf("(") > 1 && n[0].indexOf(")") < 0 && n.find((l) => l.indexOf(")") > -1)) {
      const l = n.findIndex((c) => c.indexOf(")") > -1);
      n[0] = [n[0], ...n.splice(1, l)].join(this.formatSeparator);
    }
    return n.reduce((l, c) => {
      var h;
      const {
        formatName: d,
        formatOptions: u
      } = ir(c);
      if (this.formats[d]) {
        let g = l;
        try {
          const m = ((h = i == null ? void 0 : i.formatParams) == null ? void 0 : h[i.interpolationkey]) || {}, p = m.locale || m.lng || i.locale || i.lng || s;
          g = this.formats[d](l, p, {
            ...u,
            ...i,
            ...m
          });
        } catch (m) {
          this.logger.warn(m);
        }
        return g;
      } else
        this.logger.warn(`there was no format function for ${d}`);
      return l;
    }, e);
  }
}
const ar = (o, e) => {
  o.pending[e] !== void 0 && (delete o.pending[e], o.pendingCount--);
};
class lr extends $e {
  constructor(e, t, s, i = {}) {
    var n, a;
    super(), this.backend = e, this.store = t, this.services = s, this.languageUtils = s.languageUtils, this.options = i, this.logger = Z.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], (a = (n = this.backend) == null ? void 0 : n.init) == null || a.call(n, s, i.backend, i);
  }
  queueLoad(e, t, s, i) {
    const n = {}, a = {}, l = {}, c = {};
    return e.forEach((d) => {
      let u = !0;
      t.forEach((h) => {
        const g = `${d}|${h}`;
        !s.reload && this.store.hasResourceBundle(d, h) ? this.state[g] = 2 : this.state[g] < 0 || (this.state[g] === 1 ? a[g] === void 0 && (a[g] = !0) : (this.state[g] = 1, u = !1, a[g] === void 0 && (a[g] = !0), n[g] === void 0 && (n[g] = !0), c[h] === void 0 && (c[h] = !0)));
      }), u || (l[d] = !0);
    }), (Object.keys(n).length || Object.keys(a).length) && this.queue.push({
      pending: a,
      pendingCount: Object.keys(a).length,
      loaded: {},
      errors: [],
      callback: i
    }), {
      toLoad: Object.keys(n),
      pending: Object.keys(a),
      toLoadLanguages: Object.keys(l),
      toLoadNamespaces: Object.keys(c)
    };
  }
  loaded(e, t, s) {
    const i = e.split("|"), n = i[0], a = i[1];
    t && this.emit("failedLoading", n, a, t), !t && s && this.store.addResourceBundle(n, a, s, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && s && (this.state[e] = 0);
    const l = {};
    this.queue.forEach((c) => {
      Ks(c.loaded, [n], a), ar(c, e), t && c.errors.push(t), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((d) => {
        l[d] || (l[d] = {});
        const u = c.loaded[d];
        u.length && u.forEach((h) => {
          l[d][h] === void 0 && (l[d][h] = !0);
        });
      }), c.done = !0, c.errors.length ? c.callback(c.errors) : c.callback());
    }), this.emit("loaded", l), this.queue = this.queue.filter((c) => !c.done);
  }
  read(e, t, s, i = 0, n = this.retryTimeout, a) {
    if (!e.length) return a(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: s,
        tried: i,
        wait: n,
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
          this.read.call(this, e, t, s, i + 1, n * 2, a);
        }, n);
        return;
      }
      a(d, u);
    }, c = this.backend[s].bind(this.backend);
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
  prepareLoading(e, t, s = {}, i) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
    S(e) && (e = this.languageUtils.toResolveHierarchy(e)), S(t) && (t = [t]);
    const n = this.queueLoad(e, t, s, i);
    if (!n.toLoad.length)
      return n.pending.length || i(), null;
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
  loadOne(e, t = "") {
    const s = e.split("|"), i = s[0], n = s[1];
    this.read(i, n, "read", void 0, void 0, (a, l) => {
      a && this.logger.warn(`${t}loading namespace ${n} for language ${i} failed`, a), !a && l && this.logger.log(`${t}loaded namespace ${n} for language ${i}`, l), this.loaded(e, a, l);
    });
  }
  saveMissing(e, t, s, i, n, a = {}, l = () => {
  }) {
    var c, d, u, h, g;
    if ((d = (c = this.services) == null ? void 0 : c.utils) != null && d.hasLoadedNamespace && !((h = (u = this.services) == null ? void 0 : u.utils) != null && h.hasLoadedNamespace(t))) {
      this.logger.warn(`did not save key "${s}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(s == null || s === "")) {
      if ((g = this.backend) != null && g.create) {
        const m = {
          ...a,
          isUpdate: n
        }, p = this.backend.create.bind(this.backend);
        if (p.length < 6)
          try {
            let v;
            p.length === 5 ? v = p(e, t, s, i, m) : v = p(e, t, s, i), v && typeof v.then == "function" ? v.then((L) => l(null, L)).catch(l) : l(null, v);
          } catch (v) {
            l(v);
          }
        else
          p(e, t, s, i, l, m);
      }
      !e || !e[0] || this.store.addResource(e[0], t, s, i);
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
  overloadTranslationOptionHandler: (o) => {
    let e = {};
    if (typeof o[1] == "object" && (e = o[1]), S(o[1]) && (e.defaultValue = o[1]), S(o[2]) && (e.tDescription = o[2]), typeof o[2] == "object" || typeof o[3] == "object") {
      const t = o[3] || o[2];
      Object.keys(t).forEach((s) => {
        e[s] = t[s];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (o) => o,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  },
  cacheInBuiltFormats: !0
}), yt = (o) => {
  var e, t;
  return S(o.ns) && (o.ns = [o.ns]), S(o.fallbackLng) && (o.fallbackLng = [o.fallbackLng]), S(o.fallbackNS) && (o.fallbackNS = [o.fallbackNS]), ((t = (e = o.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : t.call(e, "cimode")) < 0 && (o.supportedLngs = o.supportedLngs.concat(["cimode"])), typeof o.initImmediate == "boolean" && (o.initAsync = o.initImmediate), o;
}, Ce = () => {
}, cr = (o) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(o)).forEach((t) => {
    typeof o[t] == "function" && (o[t] = o[t].bind(o));
  });
};
class be extends $e {
  constructor(e = {}, t) {
    if (super(), this.options = yt(e), this.services = {}, this.logger = Z, this.modules = {
      external: []
    }, cr(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init(e = {}, t) {
    this.isInitializing = !0, typeof e == "function" && (t = e, e = {}), e.defaultNS == null && e.ns && (S(e.ns) ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
    const s = xt();
    this.options = {
      ...s,
      ...this.options,
      ...yt(e)
    }, this.options.interpolation = {
      ...s.interpolation,
      ...this.options.interpolation
    }, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator);
    const i = (d) => d ? typeof d == "function" ? new d() : d : null;
    if (!this.options.isClone) {
      this.modules.logger ? Z.init(i(this.modules.logger), this.options) : Z.init(null, this.options);
      let d;
      this.modules.formatter ? d = this.modules.formatter : d = nr;
      const u = new ht(this.options);
      this.store = new ct(this.options.resources, this.options);
      const h = this.services;
      h.logger = Z, h.resourceStore = this.store, h.languageUtils = u, h.pluralResolver = new sr(u, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), d && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (h.formatter = i(d), h.formatter.init(h, this.options), this.options.interpolation.format = h.formatter.format.bind(h.formatter)), h.interpolator = new rr(this.options), h.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, h.backendConnector = new lr(i(this.modules.backend), h.resourceStore, h, this.options), h.backendConnector.on("*", (g, ...m) => {
        this.emit(g, ...m);
      }), this.modules.languageDetector && (h.languageDetector = i(this.modules.languageDetector), h.languageDetector.init && h.languageDetector.init(h, this.options.detection, this.options)), this.modules.i18nFormat && (h.i18nFormat = i(this.modules.i18nFormat), h.i18nFormat.init && h.i18nFormat.init(this)), this.translator = new Pe(this.services, this.options), this.translator.on("*", (g, ...m) => {
        this.emit(g, ...m);
      }), this.modules.external.forEach((g) => {
        g.init && g.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, t || (t = Ce), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
  loadResources(e, t = Ce) {
    var n, a;
    let s = t;
    const i = S(e) ? e : this.language;
    if (typeof e == "function" && (s = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((i == null ? void 0 : i.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return s();
      const l = [], c = (d) => {
        if (!d || d === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(d).forEach((h) => {
          h !== "cimode" && l.indexOf(h) < 0 && l.push(h);
        });
      };
      i ? c(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((u) => c(u)), (a = (n = this.options.preload) == null ? void 0 : n.forEach) == null || a.call(n, (d) => c(d)), this.services.backendConnector.load(l, this.options.ns, (d) => {
        !d && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(d);
      });
    } else
      s(null);
  }
  reloadResources(e, t, s) {
    const i = me();
    return typeof e == "function" && (s = e, e = void 0), typeof t == "function" && (s = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), s || (s = Ce), this.services.backendConnector.reload(e, t, (n) => {
      i.resolve(), s(n);
    }), i;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && _t.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
    this.isLanguageChangingTo = e;
    const s = me();
    this.emit("languageChanging", e);
    const i = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, n = (l, c) => {
      c ? this.isLanguageChangingTo === e && (i(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, s.resolve((...d) => this.t(...d)), t && t(l, (...d) => this.t(...d));
    }, a = (l) => {
      var u, h;
      !e && !l && this.services.languageDetector && (l = []);
      const c = S(l) ? l : l && l[0], d = this.store.hasLanguageSomeTranslations(c) ? c : this.services.languageUtils.getBestMatchFromCodes(S(l) ? [l] : l);
      d && (this.language || i(d), this.translator.language || this.translator.changeLanguage(d), (h = (u = this.services.languageDetector) == null ? void 0 : u.cacheUserLanguage) == null || h.call(u, d)), this.loadResources(d, (g) => {
        n(g, d);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e), s;
  }
  getFixedT(e, t, s) {
    const i = (n, a, ...l) => {
      let c;
      typeof a != "object" ? c = this.options.overloadTranslationOptionHandler([n, a].concat(l)) : c = {
        ...a
      }, c.lng = c.lng || i.lng, c.lngs = c.lngs || i.lngs, c.ns = c.ns || i.ns, c.keyPrefix !== "" && (c.keyPrefix = c.keyPrefix || s || i.keyPrefix);
      const d = this.options.keySeparator || ".";
      let u;
      return c.keyPrefix && Array.isArray(n) ? u = n.map((h) => `${c.keyPrefix}${d}${h}`) : u = c.keyPrefix ? `${c.keyPrefix}${d}${n}` : n, this.t(u, c);
    };
    return S(e) ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = s, i;
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
    const s = t.lng || this.resolvedLanguage || this.languages[0], i = this.options ? this.options.fallbackLng : !1, n = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === "cimode") return !0;
    const a = (l, c) => {
      const d = this.services.backendConnector.state[`${l}|${c}`];
      return d === -1 || d === 0 || d === 2;
    };
    if (t.precheck) {
      const l = t.precheck(this, a);
      if (l !== void 0) return l;
    }
    return !!(this.hasResourceBundle(s, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || a(s, e) && (!i || a(n, e)));
  }
  loadNamespaces(e, t) {
    const s = me();
    return this.options.ns ? (S(e) && (e = [e]), e.forEach((i) => {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }), this.loadResources((i) => {
      s.resolve(), t && t(i);
    }), s) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const s = me();
    S(e) && (e = [e]);
    const i = this.options.preload || [], n = e.filter((a) => i.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a));
    return n.length ? (this.options.preload = i.concat(n), this.loadResources((a) => {
      s.resolve(), t && t(a);
    }), s) : (t && t(), Promise.resolve());
  }
  dir(e) {
    var i, n;
    if (e || (e = this.resolvedLanguage || (((i = this.languages) == null ? void 0 : i.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], s = ((n = this.services) == null ? void 0 : n.languageUtils) || new ht(xt());
    return t.indexOf(s.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(e = {}, t) {
    return new be(e, t);
  }
  cloneInstance(e = {}, t = Ce) {
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const i = {
      ...this.options,
      ...e,
      isClone: !0
    }, n = new be(i);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (n.logger = n.logger.clone(e)), ["store", "services", "language"].forEach((l) => {
      n[l] = this[l];
    }), n.services = {
      ...this.services
    }, n.services.utils = {
      hasLoadedNamespace: n.hasLoadedNamespace.bind(n)
    }, s) {
      const l = Object.keys(this.store.data).reduce((c, d) => (c[d] = {
        ...this.store.data[d]
      }, c[d] = Object.keys(c[d]).reduce((u, h) => (u[h] = {
        ...c[d][h]
      }, u), c[d]), c), {});
      n.store = new ct(l, i), n.services.resourceStore = n.store;
    }
    return n.translator = new Pe(n.services, i), n.translator.on("*", (l, ...c) => {
      n.emit(l, ...c);
    }), n.init(i, t), n.translator.options = i, n.translator.backendConnector.services.utils = {
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
const K = be.createInstance();
K.createInstance = be.createInstance;
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
var Ge = {
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
Ge.nav;
Ge.footer;
var He = {
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
He.nav;
He.footer;
var Ke = {
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
Ke.nav;
Ke.footer;
const dr = ["en", "es", "it"];
K.use(Bs).init({
  lng: "en",
  supportedLngs: dr,
  resources: {
    en: { translation: Ge },
    es: { translation: He },
    it: { translation: Ke }
  },
  fallbackLng: "en",
  react: { useSuspense: !1 }
});
const zt = "https://www.plexicus.ai", It = "http://blog.plexicus.ai", pr = ({ lang: o, fullSiteUrl: e = "http://localhost:8000", fullBlogUrl: t = "http://localhost:9000" }) => {
  const [s, i] = ce("/"), [n, a] = ce(!1), [l, c] = ce(null), d = Le(null), { t: u, i18n: h } = At();
  re(() => {
    h.changeLanguage(o), i(o !== "en" ? `/${o}/` : "/");
  }, []);
  const [g, m] = ce(!1);
  re(() => {
    const x = () => {
      const E = window.scrollY;
      m(E > 50);
    };
    return window.addEventListener("scroll", x), x(), () => {
      window.removeEventListener("scroll", x);
    };
  }, []);
  const p = Se((x) => {
    d.current && (clearTimeout(d.current), d.current = null), c(x);
  }, []), v = Le([]), L = Se(() => {
    const x = setTimeout(() => {
      c(null);
    }, 150);
    d.current = x, v.current.push(x);
  }, []);
  re(() => () => {
    d.current && clearTimeout(d.current), v.current.forEach(clearTimeout), v.current = [];
  }, []);
  const A = Se(
    (x) => {
      c(l === x ? null : x);
    },
    [l]
  ), C = Ne(e, zt), z = Ne(t, It), $ = {
    products: {
      title: u("nav.product.title"),
      shortTitle: "Product",
      image: "product-diagram",
      items: [
        {
          title: u("nav.product.aspm_overview"),
          description: "Complete application security protection",
          href: `${C}${s}aspm-overview`,
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
          title: u("nav.product.benefits"),
          description: "See how Plexicus transforms security",
          href: `${C}${s}benefits`,
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
          title: u("nav.product.use_cases"),
          description: "Real-world implementation examples",
          href: `${C}${s}use-cases`,
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
      title: u("nav.solutions.title"),
      link: "/solutions",
      shortTitle: "Solutions",
      image: "solutions-diagram",
      items: [
        {
          title: u("nav.solutions.fintech"),
          description: "Security solutions for financial technology",
          href: `${C}${s}solutions/fintech-solutions`,
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
          title: u("nav.solutions.healthtech"),
          description: "HIPAA compliant security solutions",
          href: `${C}${s}solutions/healthcare-solutions`,
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
          title: u("nav.solutions.hrtech"),
          description: "Security for legal technology platforms",
          href: `${C}${s}solutions/hrtech-solutions`,
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
          title: u("nav.solutions.group_companies"),
          description: "Solutions for corporate groups and holdings",
          href: `${C}${s}solutions/group-companies-solutions`,
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
          title: u("nav.solutions.agencies"),
          description: "Security for digital and marketing agencies",
          href: `${C}${s}solutions/agencies-solutions`,
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
          title: u("nav.solutions.startups"),
          description: "Scalable security for growing companies",
          href: `${C}${s}solutions/startup-solutions`,
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
          title: u("nav.solutions.enterprise"),
          description: "Comprehensive security for large organizations",
          href: `${C}${s}solutions/enterprise-solutions`,
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
          title: u("nav.solutions.mobile_apps"),
          description: "Security for iOS and Android applications",
          href: `${C}${s}solutions/mobile-app-solutions`,
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
          title: u("nav.solutions.manufacturing"),
          description: "Security for industrial and IoT systems",
          href: `${C}${s}solutions/manufacturing-solutions`,
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
          title: u("nav.solutions.government"),
          description: "Security solutions for government agencies",
          href: `${C}${s}solutions/government-solutions`,
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
          title: u("nav.solutions.retailtech"),
          description: "Security for e-commerce and retail platforms",
          href: `${C}${s}solutions/retailtech-solutions`,
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
      title: u("nav.developers.title"),
      shortTitle: "Developers",
      image: "developers-diagram",
      items: [
        {
          title: u("nav.developers.documentations"),
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
          title: u("nav.developers.api_references"),
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
          title: u("nav.developers.github_apps"),
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
          title: u("nav.developers.plexalyzer_action"),
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
      title: u("nav.resources.title"),
      shortTitle: "Resources",
      image: "resources-diagram",
      items: [
        {
          title: u("nav.resources.blog"),
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
          title: u("nav.resources.youtube_channel"),
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
          title: u("nav.resources.branding_assets"),
          description: "Logos and brand guidelines",
          href: `${C}${s}resources/branding`,
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
          title: u("nav.resources.changelogs"),
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
          title: u("nav.resources.feature_request"),
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
          href: `${C}${s}compare/armorcode`,
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
          href: `${C}${s}compare/apiiro`,
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
          href: `${C}${s}compare/legit-security`,
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
        background: g ? "#8220ff" : "transparent",
        boxShadow: g ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.3s ease-in-out",
        minHeight: "64px"
      },
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl", children: [
          /* @__PURE__ */ r.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ r.jsx(_, { href: `${C}${s}`, className: "flex items-center gap-2 overflow-visible", "aria-label": "Plexicus Home", children: /* @__PURE__ */ r.jsx("div", { className: "relative w-auto h-14 flex items-center", children: /* @__PURE__ */ r.jsx(
            "img",
            {
              src: "/images/plexicus-logo-white.png",
              alt: "Plexicus Logo",
              className: "object-contain max-h-full max-w-none",
              style: {
                maxWidth: g ? "180px" : "220px",
                transition: "max-width 0.3s ease-in-out"
              }
            }
          ) }) }) }),
          /* @__PURE__ */ r.jsxs("nav", { className: "hidden md:flex md:gap-4 lg:gap-6", "aria-label": "Main Navigation", children: [
            Object.entries($).filter(([x]) => x === "products").map(([x, E]) => /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => p(x),
                onMouseLeave: L,
                children: /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": l === x,
                    "aria-haspopup": "true",
                    onClick: () => A(x),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "hidden lg:inline", children: E.title }),
                      /* @__PURE__ */ r.jsx("span", { className: "lg:hidden", children: E.shortTitle }),
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
                          className: `ml-1 transition-transform duration-200 ${l === x ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ r.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              x
            )),
            /* @__PURE__ */ r.jsx(
              _,
              {
                href: `${C}${s}pricing`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: u("nav.pricing")
              }
            ),
            Object.entries($).filter(([x]) => x === "solutions" || x === "developers" || x === "resources").map(([x, E]) => /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => p(x),
                onMouseLeave: L,
                children: /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": l === x,
                    "aria-haspopup": "true",
                    onClick: () => A(x),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "hidden lg:inline", children: E.title }),
                      /* @__PURE__ */ r.jsx("span", { className: "lg:hidden", children: E.shortTitle }),
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
                          className: `ml-1 transition-transform duration-200 ${l === x ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ r.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              x
            )),
            /* @__PURE__ */ r.jsx(
              _,
              {
                href: `${C}${s}contact`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: u("nav.contact")
              }
            )
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "hidden md:flex items-center gap-4", children: [
            /* @__PURE__ */ r.jsx(
              _,
              {
                href: `${C}/login`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors whitespace-nowrap",
                children: u("nav.login")
              }
            ),
            /* @__PURE__ */ r.jsx(Fe, { className: "bg-white text-[#8220ff] font-medium px-4 lg:px-6 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap", children: u("nav.get_started") })
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
              onMouseEnter: () => p(l),
              onMouseLeave: L,
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
                  $[l].items.filter((x) => l !== "resources" || !x.title.includes("vs.")).map((x, E) => /* @__PURE__ */ r.jsxs(
                    _,
                    {
                      href: x.href,
                      className: "flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group",
                      onClick: () => c(null),
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "w-12 h-12 bg-[#8220ff]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#8220ff]/20 transition-colors", children: x.icon }),
                        /* @__PURE__ */ r.jsxs("div", { children: [
                          /* @__PURE__ */ r.jsx("h4", { className: "font-semibold text-gray-900 group-hover:text-[#8220ff] transition-colors", children: x.title }),
                          /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: x.description })
                        ] })
                      ]
                    },
                    E
                  )),
                  l === "resources" && /* @__PURE__ */ r.jsx("div", { className: "col-span-1 sm:col-span-2 mt-4", children: /* @__PURE__ */ r.jsxs("div", { className: "bg-purple-50 p-4 rounded-lg border border-purple-100", children: [
                    /* @__PURE__ */ r.jsx("h3", { className: "text-sm font-medium text-purple-800 mb-3", children: "Compare Plexicus" }),
                    /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: $.resources.items.filter(
                      (x) => x.title === "Plexicus vs. ArmorCode" || x.title === "Plexicus vs. Apiiro" || x.title === "Plexicus vs. Legit Security"
                    ).map((x, E) => /* @__PURE__ */ r.jsxs(
                      _,
                      {
                        href: x.href,
                        className: "flex flex-col items-center p-3 rounded-lg bg-white hover:bg-purple-100 transition-colors text-center group",
                        onClick: () => c(null),
                        children: [
                          /* @__PURE__ */ r.jsx("div", { className: "w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-purple-200 transition-colors", children: Te.cloneElement(x.icon, {
                            className: "w-5 h-5 text-purple-700"
                          }) }),
                          /* @__PURE__ */ r.jsx("h4", { className: "font-medium text-sm text-gray-900 group-hover:text-purple-800 transition-colors", children: x.title })
                        ]
                      },
                      `compare-${E}`
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
              Object.entries($).map(([x, E]) => /* @__PURE__ */ r.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "font-semibold", children: E.title }),
                /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-1 gap-2", children: E.items.map((I, y) => /* @__PURE__ */ r.jsxs(
                  _,
                  {
                    href: I.href,
                    className: "flex items-center p-2 rounded-md bg-gray-50 hover:bg-gray-100",
                    onClick: () => a(!1),
                    children: [
                      /* @__PURE__ */ r.jsx("div", { className: "w-8 h-8 bg-primary/10 rounded-md mr-2 flex items-center justify-center", children: Te.cloneElement(I.icon, { width: 16, height: 16 }) }),
                      /* @__PURE__ */ r.jsx("span", { className: "text-sm", children: I.title })
                    ]
                  },
                  y
                )) })
              ] }, x)),
              /* @__PURE__ */ r.jsx(_, { href: `${C}${s}pricing`, className: "block py-2 text-sm font-medium", onClick: () => a(!1), children: u("nav.pricing") }),
              /* @__PURE__ */ r.jsx(_, { href: `${C}${s}contact`, className: "block py-2 text-sm font-medium", onClick: () => a(!1), children: u("nav.contact") }),
              /* @__PURE__ */ r.jsx("div", { className: "pt-4 border-t border-gray-100", children: /* @__PURE__ */ r.jsx(Fe, { className: "w-full bg-gradient-primary", onClick: () => a(!1), children: "Get Started" }) })
            ] }) })
          }
        )
      ]
    }
  );
};
function ur() {
  var t;
  const o = (s) => {
    localStorage.setItem("scrollPosition", String(window == null ? void 0 : window.scrollY));
    const i = window.location.pathname;
    let a = i.match(/^\/([a-z]{2})\//) ? i.replace(/^\/[a-z]{2}\//, `/${s}/`) : `/${s}${i}`;
    a = a.startsWith("/en/") ? a.replace(/^\/en/, "") : a, console.log({ newPath: a }), window.location.href = a;
  };
  re(() => {
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
        onChange: (s) => o(s.target.value),
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
function gr({ lang: o, fullSiteUrl: e = "http://localhost:8000", fullBlogUrl: t = "http://localhost:9000" }) {
  const [s, i] = ce("/"), { t: n, i18n: a } = At();
  re(() => {
    a.changeLanguage(o), i(o !== "en" ? `/${o}/` : "/");
  }, []);
  const l = Ne(e, zt), c = Ne(t, It);
  return /* @__PURE__ */ r.jsx("footer", { className: "bg-gray-50 border-t border-gray-200", children: /* @__PURE__ */ r.jsxs("div", { className: "container mx-auto px-4 md:px-6 pt-12 pb-6", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-5", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ r.jsx(_, { href: `${l}${s}`, className: "flex items-center gap-2 mb-4", children: /* @__PURE__ */ r.jsx("img", { src: "/images/plexicus-logo-color.png", alt: "Plexicus ASPM", className: "h-10 w-auto" }) }),
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
        /* @__PURE__ */ r.jsx("div", { className: "mt-6", children: /* @__PURE__ */ r.jsx(ur, {}) })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("h3", { className: "text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4", children: n("footer.sections.products.title") }),
        /* @__PURE__ */ r.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(_, { href: `${l}${s}aspm-overview`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.products.links.aspm_overview") }) }),
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(_, { href: `${l}${s}benefits`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.products.links.benefits") }) }),
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(_, { href: `${l}${s}use-cases`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.products.links.use_cases") }) }),
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(_, { href: `${l}${s}pricing`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.products.links.pricing") }) })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("h3", { className: "text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4", children: n("footer.sections.resources.title") }),
        /* @__PURE__ */ r.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(_, { href: `${c}`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.resources.links.blog") }) }),
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(_, { href: "https://docs.plexicus.com/", className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.resources.links.documentation") }) }),
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(_, { href: `${l}${s}case-studies`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.resources.links.case_studies") }) }),
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(_, { href: `${l}${s}security-resources`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.resources.links.security_resources") }) })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx("h3", { className: "text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4", children: n("footer.sections.company.title") }),
        /* @__PURE__ */ r.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(_, { href: `${l}${s}about`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.company.links.about_us") }) }),
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(_, { href: `${l}${s}contact`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.company.links.contact") }) }),
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(_, { href: `${l}${s}careers`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.company.links.careers") }) }),
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(_, { href: `${l}${s}privacy`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.company.links.privacy_policy") }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "mt-8 pt-6 border-t border-gray-200", children: /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
      /* @__PURE__ */ r.jsxs("p", { className: "text-gray-500 text-sm", children: [
        "© 2025 PLEXICUS, LLC.",
        " ",
        /* @__PURE__ */ r.jsx(_, { href: `${l}${s}privacy`, className: "underline hover:text-gray-700", children: n("footer.policies.privacy_policy") }),
        " ",
        "·",
        " ",
        /* @__PURE__ */ r.jsx(_, { href: `${l}${s}management`, className: "underline hover:text-gray-700", children: n("footer.policies.management_policy") }),
        " ",
        "·",
        " ",
        /* @__PURE__ */ r.jsx(_, { href: `${l}${s}legal`, className: "underline hover:text-gray-700", children: n("footer.policies.legal_notice") })
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
  gr as FooterPlexicus,
  pr as NavbarPlexicus,
  ur as SelectLanguage
};
