import * as Ft from "react";
import Ae, { createContext as Bt, useContext as Wt, useCallback as Ce, useState as de, useRef as _e, useEffect as re } from "react";
import { Globe as Vt } from "lucide-react";
var be = { exports: {} }, pe = {};
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
function Dt() {
  if (Je) return pe;
  Je = 1;
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
    function o(f) {
      if (f == null) return null;
      if (typeof f == "function")
        return f.$$typeof === $ ? null : f.displayName || f.name || null;
      if (typeof f == "string") return f;
      switch (f) {
        case b:
          return "Fragment";
        case E:
          return "Profiler";
        case _:
          return "StrictMode";
        case w:
          return "Suspense";
        case z:
          return "SuspenseList";
        case O:
          return "Activity";
      }
      if (typeof f == "object")
        switch (typeof f.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), f.$$typeof) {
          case p:
            return "Portal";
          case A:
            return (f.displayName || "Context") + ".Provider";
          case j:
            return (f._context.displayName || "Context") + ".Consumer";
          case R:
            var S = f.render;
            return f = f.displayName, f || (f = S.displayName || S.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
          case T:
            return S = f.displayName || null, S !== null ? S : o(f.type) || "Memo";
          case x:
            S = f._payload, f = f._init;
            try {
              return o(f(S));
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
        var S = !1;
      } catch {
        S = !0;
      }
      if (S) {
        S = console;
        var P = S.error, N = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return P.call(
          S,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), e(f);
      }
    }
    function s(f) {
      if (f === b) return "<>";
      if (typeof f == "object" && f !== null && f.$$typeof === x)
        return "<...>";
      try {
        var S = o(f);
        return S ? "<" + S + ">" : "<...>";
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
        var S = Object.getOwnPropertyDescriptor(f, "key").get;
        if (S && S.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }
    function l(f, S) {
      function P() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          S
        ));
      }
      P.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: P,
        configurable: !0
      });
    }
    function d() {
      var f = o(this.type);
      return F[f] || (F[f] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), f = this.props.ref, f !== void 0 ? f : null;
    }
    function u(f, S, P, N, M, H, ne, B) {
      return P = H.ref, f = {
        $$typeof: m,
        type: f,
        key: S,
        props: H,
        _owner: M
      }, (P !== void 0 ? P : null) !== null ? Object.defineProperty(f, "ref", {
        enumerable: !1,
        get: d
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
    function c(f, S, P, N, M, H, ne, B) {
      var D = S.children;
      if (D !== void 0)
        if (N)
          if (Y(D)) {
            for (N = 0; N < D.length; N++)
              h(D[N]);
            Object.freeze && Object.freeze(D);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(D);
      if (Q.call(S, "key")) {
        D = o(f);
        var q = Object.keys(S).filter(function(fe) {
          return fe !== "key";
        });
        N = 0 < q.length ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}", X[D + N] || (q = 0 < q.length ? "{" + q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          D,
          q,
          D
        ), X[D + N] = !0);
      }
      if (D = null, P !== void 0 && (t(P), D = "" + P), a(S) && (t(S.key), D = "" + S.key), "key" in S) {
        P = {};
        for (var te in S)
          te !== "key" && (P[te] = S[te]);
      } else P = S;
      return D && l(
        P,
        typeof f == "function" ? f.displayName || f.name || "Unknown" : f
      ), u(
        f,
        D,
        H,
        M,
        i(),
        P,
        ne,
        B
      );
    }
    function h(f) {
      typeof f == "object" && f !== null && f.$$typeof === m && f._store && (f._store.validated = 1);
    }
    var g = Ae, m = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), A = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), G = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, Y = Array.isArray, V = console.createTask ? console.createTask : function() {
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
    )(), k = V(s(n)), X = {};
    ge.Fragment = b, ge.jsx = function(f, S, P, N, M) {
      var H = 1e4 > G.recentlyCreatedOwnerStacks++;
      return c(
        f,
        S,
        P,
        !1,
        N,
        M,
        H ? Error("react-stack-top-frame") : W,
        H ? V(s(f)) : k
      );
    }, ge.jsxs = function(f, S, P, N, M) {
      var H = 1e4 > G.recentlyCreatedOwnerStacks++;
      return c(
        f,
        S,
        P,
        !0,
        N,
        M,
        H ? Error("react-stack-top-frame") : W,
        H ? V(s(f)) : k
      );
    };
  }()), ge;
}
var Xe;
function Gt() {
  return Xe || (Xe = 1, process.env.NODE_ENV === "production" ? be.exports = Dt() : be.exports = Ut()), be.exports;
}
var r = Gt();
function vt(o) {
  var e, t, s = "";
  if (typeof o == "string" || typeof o == "number") s += o;
  else if (typeof o == "object") if (Array.isArray(o)) {
    var i = o.length;
    for (e = 0; e < i; e++) o[e] && (t = vt(o[e])) && (s && (s += " "), s += t);
  } else for (t in o) o[t] && (s && (s += " "), s += t);
  return s;
}
function wt() {
  for (var o, e, t = 0, s = "", i = arguments.length; t < i; t++) (o = arguments[t]) && (e = vt(o)) && (s && (s += " "), s += e);
  return s;
}
const Ze = (o) => typeof o == "boolean" ? `${o}` : o === 0 ? "0" : o, Qe = wt, Ht = (o, e) => (t) => {
  var s;
  if ((e == null ? void 0 : e.variants) == null) return Qe(o, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: i, defaultVariants: n } = e, a = Object.keys(i).map((u) => {
    const c = t == null ? void 0 : t[u], h = n == null ? void 0 : n[u];
    if (c === null) return null;
    const g = Ze(c) || Ze(h);
    return i[u][g];
  }), l = t && Object.entries(t).reduce((u, c) => {
    let [h, g] = c;
    return g === void 0 || (u[h] = g), u;
  }, {}), d = e == null || (s = e.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((u, c) => {
    let { class: h, className: g, ...m } = c;
    return Object.entries(m).every((p) => {
      let [b, _] = p;
      return Array.isArray(_) ? _.includes({
        ...n,
        ...l
      }[b]) : {
        ...n,
        ...l
      }[b] === _;
    }) ? [
      ...u,
      h,
      g
    ] : u;
  }, []);
  return Qe(o, a, d, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, Ge = "-", Kt = (o) => {
  const e = Jt(o), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: s
  } = o;
  return {
    getClassGroupId: (a) => {
      const l = a.split(Ge);
      return l[0] === "" && l.length !== 1 && l.shift(), bt(l, e) || Yt(a);
    },
    getConflictingClassGroupIds: (a, l) => {
      const d = t[a] || [];
      return l && s[a] ? [...d, ...s[a]] : d;
    }
  };
}, bt = (o, e) => {
  var a;
  if (o.length === 0)
    return e.classGroupId;
  const t = o[0], s = e.nextPart.get(t), i = s ? bt(o.slice(1), s) : void 0;
  if (i)
    return i;
  if (e.validators.length === 0)
    return;
  const n = o.join(Ge);
  return (a = e.validators.find(({
    validator: l
  }) => l(n))) == null ? void 0 : a.classGroupId;
}, et = /^\[(.+)\]$/, Yt = (o) => {
  if (et.test(o)) {
    const e = et.exec(o)[1], t = e == null ? void 0 : e.substring(0, e.indexOf(":"));
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
    Te(t[i], s, i, e);
  return s;
}, Te = (o, e, t, s) => {
  o.forEach((i) => {
    if (typeof i == "string") {
      const n = i === "" ? e : tt(e, i);
      n.classGroupId = t;
      return;
    }
    if (typeof i == "function") {
      if (qt(i)) {
        Te(i(s), e, t, s);
        return;
      }
      e.validators.push({
        validator: i,
        classGroupId: t
      });
      return;
    }
    Object.entries(i).forEach(([n, a]) => {
      Te(a, tt(e, n), t, s);
    });
  });
}, tt = (o, e) => {
  let t = o;
  return e.split(Ge).forEach((s) => {
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
}, Ie = "!", Fe = ":", Zt = Fe.length, Qt = (o) => {
  const {
    prefix: e,
    experimentalParseClassName: t
  } = o;
  let s = (i) => {
    const n = [];
    let a = 0, l = 0, d = 0, u;
    for (let p = 0; p < i.length; p++) {
      let b = i[p];
      if (a === 0 && l === 0) {
        if (b === Fe) {
          n.push(i.slice(d, p)), d = p + Zt;
          continue;
        }
        if (b === "/") {
          u = p;
          continue;
        }
      }
      b === "[" ? a++ : b === "]" ? a-- : b === "(" ? l++ : b === ")" && l--;
    }
    const c = n.length === 0 ? i : i.substring(d), h = es(c), g = h !== c, m = u && u > d ? u - d : void 0;
    return {
      modifiers: n,
      hasImportantModifier: g,
      baseClassName: h,
      maybePostfixModifierPosition: m
    };
  };
  if (e) {
    const i = e + Fe, n = s;
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
}, es = (o) => o.endsWith(Ie) ? o.substring(0, o.length - 1) : o.startsWith(Ie) ? o.substring(1) : o, ts = (o) => {
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
  let d = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const c = l[u], {
      isExternal: h,
      modifiers: g,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: b
    } = t(c);
    if (h) {
      d = c + (d.length > 0 ? " " + d : d);
      continue;
    }
    let _ = !!b, E = s(_ ? p.substring(0, b) : p);
    if (!E) {
      if (!_) {
        d = c + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (E = s(p), !E) {
        d = c + (d.length > 0 ? " " + d : d);
        continue;
      }
      _ = !1;
    }
    const j = n(g).join(":"), A = m ? j + Ie : j, R = A + E;
    if (a.includes(R))
      continue;
    a.push(R);
    const w = i(E, _);
    for (let z = 0; z < w.length; ++z) {
      const T = w[z];
      a.push(A + T);
    }
    d = c + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function os() {
  let o = 0, e, t, s = "";
  for (; o < arguments.length; )
    (e = arguments[o++]) && (t = kt(e)) && (s && (s += " "), s += t);
  return s;
}
const kt = (o) => {
  if (typeof o == "string")
    return o;
  let e, t = "";
  for (let s = 0; s < o.length; s++)
    o[s] && (e = kt(o[s])) && (t && (t += " "), t += e);
  return t;
};
function ns(o, ...e) {
  let t, s, i, n = a;
  function a(d) {
    const u = e.reduce((c, h) => h(c), o());
    return t = ss(u), s = t.cache.get, i = t.cache.set, n = l, l(d);
  }
  function l(d) {
    const u = s(d);
    if (u)
      return u;
    const c = is(d, t);
    return i(d, c), c;
  }
  return function() {
    return n(os.apply(null, arguments));
  };
}
const U = (o) => {
  const e = (t) => t[o] || [];
  return e.isThemeGetter = !0, e;
}, jt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, St = /^\((?:(\w[\w-]*):)?(.+)\)$/i, as = /^\d+\/\d+$/, ls = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, cs = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ds = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, us = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, hs = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ae = (o) => as.test(o), L = (o) => !!o && !Number.isNaN(Number(o)), se = (o) => !!o && Number.isInteger(Number(o)), $e = (o) => o.endsWith("%") && L(o.slice(0, -1)), ee = (o) => ls.test(o), fs = () => !0, ps = (o) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  cs.test(o) && !ds.test(o)
), Ct = () => !1, gs = (o) => us.test(o), ms = (o) => hs.test(o), xs = (o) => !y(o) && !v(o), ys = (o) => ue(o, Nt, Ct), y = (o) => jt.test(o), ie = (o) => ue(o, Ot, ps), Ee = (o) => ue(o, js, L), st = (o) => ue(o, _t, Ct), vs = (o) => ue(o, Lt, ms), ke = (o) => ue(o, Pt, gs), v = (o) => St.test(o), me = (o) => he(o, Ot), ws = (o) => he(o, Ss), rt = (o) => he(o, _t), bs = (o) => he(o, Nt), ks = (o) => he(o, Lt), je = (o) => he(o, Pt, !0), ue = (o, e, t) => {
  const s = jt.exec(o);
  return s ? s[1] ? e(s[1]) : t(s[2]) : !1;
}, he = (o, e, t = !1) => {
  const s = St.exec(o);
  return s ? s[1] ? e(s[1]) : t : !1;
}, _t = (o) => o === "position" || o === "percentage", Lt = (o) => o === "image" || o === "url", Nt = (o) => o === "length" || o === "size" || o === "bg-size", Ot = (o) => o === "length", js = (o) => o === "number", Ss = (o) => o === "family-name", Pt = (o) => o === "shadow", Cs = () => {
  const o = U("color"), e = U("font"), t = U("text"), s = U("font-weight"), i = U("tracking"), n = U("leading"), a = U("breakpoint"), l = U("container"), d = U("spacing"), u = U("radius"), c = U("shadow"), h = U("inset-shadow"), g = U("text-shadow"), m = U("drop-shadow"), p = U("blur"), b = U("perspective"), _ = U("aspect"), E = U("ease"), j = U("animate"), A = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], R = () => [
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
  ], w = () => [...R(), v, y], z = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", "contain", "none"], x = () => [v, y, d], O = () => [ae, "full", "auto", ...x()], $ = () => [se, "none", "subgrid", v, y], G = () => ["auto", {
    span: ["full", se, v, y]
  }, se, v, y], Q = () => [se, "auto", v, y], Y = () => ["auto", "min", "max", "fr", v, y], V = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], J = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], F = () => ["auto", ...x()], W = () => [ae, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...x()], k = () => [o, v, y], X = () => [...R(), rt, st, {
    position: [v, y]
  }], f = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], S = () => ["auto", "cover", "contain", bs, ys, {
    size: [v, y]
  }], P = () => [$e, me, ie], N = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    v,
    y
  ], M = () => ["", L, me, ie], H = () => ["solid", "dashed", "dotted", "double"], ne = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], B = () => [L, $e, rt, st], D = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    p,
    v,
    y
  ], q = () => ["none", L, v, y], te = () => ["none", L, v, y], fe = () => [L, v, y], we = () => [ae, "full", ...x()];
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
      spacing: ["px", L],
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
        aspect: ["auto", "square", ae, y, v, _]
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
        columns: [L, y, v, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": A()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": A()
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
        object: w()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": z()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: T()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": T()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": T()
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
        inset: O()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": O()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": O()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: O()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: O()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: O()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: O()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: O()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: O()
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
        z: [se, "auto", v, y]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ae, "full", "auto", l, ...x()]
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
        flex: [L, ae, "auto", "initial", "none", y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", L, v, y]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", L, v, y]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [se, "first", "last", "none", v, y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": $()
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
        "grid-rows": $()
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
        font: [s, v, Ee]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", $e, y]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ws, y, e]
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
        tracking: [i, v, y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [L, "none", v, Ee]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          n,
          ...x()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", v, y]
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
        list: ["disc", "decimal", "none", v, y]
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
        decoration: [...H(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [L, "from-font", "auto", v, ie]
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
        "underline-offset": [L, "auto", v, y]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", v, y]
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
        content: ["none", v, y]
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
        bg: S()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, se, v, y],
          radial: ["", v, y],
          conic: [se, v, y]
        }, ks, vs]
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
        border: M()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": M()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": M()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": M()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": M()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": M()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": M()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": M()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": M()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": M()
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
        "divide-y": M()
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
        outline: [...H(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [L, v, y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", L, me, ie]
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
          c,
          je,
          ke
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
        "inset-shadow": ["none", h, je, ke]
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
        ring: M()
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
        "ring-offset": [L, ie]
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
        "inset-ring": M()
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
        "text-shadow": ["none", g, je, ke]
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
        opacity: [L, v, y]
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
        "mask-linear": [L]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": B()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": B()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": k()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": k()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": B()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": B()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": k()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": k()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": B()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": B()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": k()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": k()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": B()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": B()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": k()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": k()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": B()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": B()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": k()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": k()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": B()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": B()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": k()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": k()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": B()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": B()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": k()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": k()
      }],
      "mask-image-radial": [{
        "mask-radial": [v, y]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": B()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": B()
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
        "mask-radial-at": R()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [L]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": B()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": B()
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
        mask: S()
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
        mask: ["none", v, y]
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
          v,
          y
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
        brightness: [L, v, y]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [L, v, y]
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
          je,
          ke
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
        grayscale: ["", L, v, y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [L, v, y]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", L, v, y]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [L, v, y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", L, v, y]
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
          v,
          y
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
        "backdrop-brightness": [L, v, y]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [L, v, y]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", L, v, y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [L, v, y]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", L, v, y]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [L, v, y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [L, v, y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", L, v, y]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", v, y]
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
        duration: [L, "initial", v, y]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", E, v, y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [L, v, y]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", j, v, y]
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
        perspective: [b, v, y]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": w()
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
        transform: [v, y, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: w()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", v, y]
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
        "will-change": ["auto", "scroll", "contents", "transform", v, y]
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
        stroke: [L, me, ie, Ee]
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
}, _s = /* @__PURE__ */ ns(Cs);
function Ls(...o) {
  return _s(wt(o));
}
function Le(o, e) {
  if (o) {
    const t = o.split(":");
    if (t.length >= 3 && t[0] && t[2] !== "443")
      return o;
  }
  return e;
}
const Ns = Ht(
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
), Be = Ft.forwardRef(
  ({ className: o, variant: e, size: t, ...s }, i) => /* @__PURE__ */ r.jsx("button", { className: Ls(Ns({ variant: e, size: t, className: o })), ref: i, ...s })
);
Be.displayName = "Button";
const I = ({ href: o, children: e, className: t = "", target: s = "_self", rel: i = "noopener noreferrer", onClick: n }) => {
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
}, Os = (o, e, t, s) => {
  var n, a, l, d;
  const i = [t, {
    code: e,
    ...s || {}
  }];
  if ((a = (n = o == null ? void 0 : o.services) == null ? void 0 : n.logger) != null && a.forward)
    return o.services.logger.forward(i, "warn", "react-i18next::", !0);
  oe(i[0]) && (i[0] = `react-i18next:: ${i[0]}`), (d = (l = o == null ? void 0 : o.services) == null ? void 0 : l.logger) != null && d.warn ? o.services.logger.warn(...i) : console != null && console.warn && console.warn(...i);
}, it = {}, We = (o, e, t, s) => {
  oe(t) && it[t] || (oe(t) && (it[t] = /* @__PURE__ */ new Date()), Os(o, e, t, s));
}, Rt = (o, e) => () => {
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
}, Ve = (o, e, t) => {
  o.loadNamespaces(e, Rt(o, t));
}, ot = (o, e, t, s) => {
  if (oe(t) && (t = [t]), o.options.preload && o.options.preload.indexOf(e) > -1) return Ve(o, t, s);
  t.forEach((i) => {
    o.options.ns.indexOf(i) < 0 && o.options.ns.push(i);
  }), o.loadLanguages(e, Rt(o, s));
}, Ps = (o, e, t = {}) => !e.languages || !e.languages.length ? (We(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: e.languages
}), !0) : e.hasLoadedNamespace(o, {
  lng: t.lng,
  precheck: (s, i) => {
    var n;
    if (((n = t.bindI18n) == null ? void 0 : n.indexOf("languageChanging")) > -1 && s.services.backendConnector.backend && s.isLanguageChangingTo && !i(s.isLanguageChangingTo, o)) return !1;
  }
}), oe = (o) => typeof o == "string", Rs = (o) => typeof o == "object" && o !== null, zs = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, $s = {
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
}, Es = (o) => $s[o], Ms = (o) => o.replace(zs, Es);
let De = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Ms
};
const As = (o = {}) => {
  De = {
    ...De,
    ...o
  };
}, Ts = () => De;
let zt;
const Is = (o) => {
  zt = o;
}, Fs = () => zt, Bs = {
  type: "3rdParty",
  init(o) {
    As(o.options.react), Is(o);
  }
}, Ws = Bt();
class Vs {
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
const Ds = (o, e) => {
  const t = _e();
  return re(() => {
    t.current = o;
  }, [o, e]), t.current;
}, $t = (o, e, t, s) => o.getFixedT(e, t, s), Us = (o, e, t, s) => Ce($t(o, e, t, s), [o, e, t, s]), Et = (o, e = {}) => {
  var R, w, z, T;
  const {
    i18n: t
  } = e, {
    i18n: s,
    defaultNS: i
  } = Wt(Ws) || {}, n = t || s || Fs();
  if (n && !n.reportNamespaces && (n.reportNamespaces = new Vs()), !n) {
    We(n, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const x = ($, G) => oe(G) ? G : Rs(G) && oe(G.defaultValue) ? G.defaultValue : Array.isArray($) ? $[$.length - 1] : $, O = [x, {}, !1];
    return O.t = x, O.i18n = {}, O.ready = !1, O;
  }
  (R = n.options.react) != null && R.wait && We(n, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const a = {
    ...Ts(),
    ...n.options.react,
    ...e
  }, {
    useSuspense: l,
    keyPrefix: d
  } = a;
  let u = i || ((w = n.options) == null ? void 0 : w.defaultNS);
  u = oe(u) ? [u] : u || ["translation"], (T = (z = n.reportNamespaces).addUsedNamespaces) == null || T.call(z, u);
  const c = (n.isInitialized || n.initializedStoreOnce) && u.every((x) => Ps(x, n, a)), h = Us(n, e.lng || null, a.nsMode === "fallback" ? u : u[0], d), g = () => h, m = () => $t(n, e.lng || null, a.nsMode === "fallback" ? u : u[0], d), [p, b] = de(g);
  let _ = u.join();
  e.lng && (_ = `${e.lng}${_}`);
  const E = Ds(_), j = _e(!0);
  re(() => {
    const {
      bindI18n: x,
      bindI18nStore: O
    } = a;
    j.current = !0, !c && !l && (e.lng ? ot(n, e.lng, u, () => {
      j.current && b(m);
    }) : Ve(n, u, () => {
      j.current && b(m);
    })), c && E && E !== _ && j.current && b(m);
    const $ = () => {
      j.current && b(m);
    };
    return x && (n == null || n.on(x, $)), O && (n == null || n.store.on(O, $)), () => {
      j.current = !1, n && (x == null || x.split(" ").forEach((G) => n.off(G, $))), O && n && O.split(" ").forEach((G) => n.store.off(G, $));
    };
  }, [n, _]), re(() => {
    j.current && c && b(g);
  }, [n, d, c]);
  const A = [p, n, c];
  if (A.t = p, A.i18n = n, A.ready = c, c || !c && !l) return A;
  throw new Promise((x) => {
    e.lng ? ot(n, e.lng, u, () => x()) : Ve(n, u, () => x());
  });
}, C = (o) => typeof o == "string", xe = () => {
  let o, e;
  const t = new Promise((s, i) => {
    o = s, e = i;
  });
  return t.resolve = o, t.reject = e, t;
}, nt = (o) => o == null ? "" : "" + o, Gs = (o, e, t) => {
  o.forEach((s) => {
    e[s] && (t[s] = e[s]);
  });
}, Hs = /###/g, at = (o) => o && o.indexOf("###") > -1 ? o.replace(Hs, ".") : o, lt = (o) => !o || C(o), ye = (o, e, t) => {
  const s = C(e) ? e.split(".") : e;
  let i = 0;
  for (; i < s.length - 1; ) {
    if (lt(o)) return {};
    const n = at(s[i]);
    !o[n] && t && (o[n] = new t()), Object.prototype.hasOwnProperty.call(o, n) ? o = o[n] : o = {}, ++i;
  }
  return lt(o) ? {} : {
    obj: o,
    k: at(s[i])
  };
}, ct = (o, e, t) => {
  const {
    obj: s,
    k: i
  } = ye(o, e, Object);
  if (s !== void 0 || e.length === 1) {
    s[i] = t;
    return;
  }
  let n = e[e.length - 1], a = e.slice(0, e.length - 1), l = ye(o, a, Object);
  for (; l.obj === void 0 && a.length; )
    n = `${a[a.length - 1]}.${n}`, a = a.slice(0, a.length - 1), l = ye(o, a, Object), l != null && l.obj && typeof l.obj[`${l.k}.${n}`] < "u" && (l.obj = void 0);
  l.obj[`${l.k}.${n}`] = t;
}, Ks = (o, e, t, s) => {
  const {
    obj: i,
    k: n
  } = ye(o, e, Object);
  i[n] = i[n] || [], i[n].push(t);
}, Ne = (o, e) => {
  const {
    obj: t,
    k: s
  } = ye(o, e);
  if (t && Object.prototype.hasOwnProperty.call(t, s))
    return t[s];
}, Ys = (o, e, t) => {
  const s = Ne(o, t);
  return s !== void 0 ? s : Ne(e, t);
}, Mt = (o, e, t) => {
  for (const s in e)
    s !== "__proto__" && s !== "constructor" && (s in o ? C(o[s]) || o[s] instanceof String || C(e[s]) || e[s] instanceof String ? t && (o[s] = e[s]) : Mt(o[s], e[s], t) : o[s] = e[s]);
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
const qs = (o) => C(o) ? o.replace(/[&<>"'\/]/g, (e) => Js[e]) : o;
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
}, Ue = (o, e, t = ".") => {
  if (!o) return;
  if (o[e])
    return Object.prototype.hasOwnProperty.call(o, e) ? o[e] : void 0;
  const s = e.split(t);
  let i = o;
  for (let n = 0; n < s.length; ) {
    if (!i || typeof i != "object")
      return;
    let a, l = "";
    for (let d = n; d < s.length; ++d)
      if (d !== n && (l += t), l += s[d], a = i[l], a !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof a) > -1 && d < s.length - 1)
          continue;
        n += d - n + 1;
        break;
      }
    i = a;
  }
  return i;
}, Oe = (o) => o == null ? void 0 : o.replace("_", "-"), tr = {
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
class Pe {
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
    return i && !this.debug ? null : (C(e[0]) && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[t](e));
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
class ze {
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
class dt extends ze {
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
    var u, c;
    const n = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, a = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let l;
    e.indexOf(".") > -1 ? l = e.split(".") : (l = [e, t], s && (Array.isArray(s) ? l.push(...s) : C(s) && n ? l.push(...s.split(n)) : l.push(s)));
    const d = Ne(this.data, l);
    return !d && !t && !s && e.indexOf(".") > -1 && (e = l[0], t = l[1], s = l.slice(2).join(".")), d || !a || !C(s) ? d : Ue((c = (u = this.data) == null ? void 0 : u[e]) == null ? void 0 : c[t], s, n);
  }
  addResource(e, t, s, i, n = {
    silent: !1
  }) {
    const a = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let l = [e, t];
    s && (l = l.concat(a ? s.split(a) : s)), e.indexOf(".") > -1 && (l = e.split("."), i = t, t = l[1]), this.addNamespaces(t), ct(this.data, l, i), n.silent || this.emit("added", e, t, s, i);
  }
  addResources(e, t, s, i = {
    silent: !1
  }) {
    for (const n in s)
      (C(s[n]) || Array.isArray(s[n])) && this.addResource(e, t, n, s[n], {
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
    let d = Ne(this.data, l) || {};
    a.skipCopy || (s = JSON.parse(JSON.stringify(s))), i ? Mt(d, s, n) : d = {
      ...d,
      ...s
    }, ct(this.data, l, d), a.silent || this.emit("added", e, t, s);
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
var At = {
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
const ut = {}, ht = (o) => !C(o) && typeof o != "boolean" && typeof o != "number";
class Re extends ze {
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
      const d = e.match(this.interpolator.nestingRegexp);
      if (d && d.length > 0)
        return {
          key: e,
          namespaces: C(n) ? [n] : n
        };
      const u = e.split(s);
      (s !== i || s === i && this.options.ns.indexOf(u[0]) > -1) && (n = u.shift()), e = u.join(i);
    }
    return {
      key: e,
      namespaces: C(n) ? [n] : n
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
      namespaces: d
    } = this.extractFromKey(e[e.length - 1], i), u = d[d.length - 1];
    let c = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
    c === void 0 && (c = ":");
    const h = i.lng || this.language, g = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((h == null ? void 0 : h.toLowerCase()) === "cimode")
      return g ? n ? {
        res: `${u}${c}${l}`,
        usedKey: l,
        exactUsedKey: l,
        usedLng: h,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(i)
      } : `${u}${c}${l}` : n ? {
        res: l,
        usedKey: l,
        exactUsedKey: l,
        usedLng: h,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(i)
      } : l;
    const m = this.resolve(e, i);
    let p = m == null ? void 0 : m.res;
    const b = (m == null ? void 0 : m.usedKey) || l, _ = (m == null ? void 0 : m.exactUsedKey) || l, E = ["[object Number]", "[object Function]", "[object RegExp]"], j = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays, A = !this.i18nFormat || this.i18nFormat.handleAsObject, R = i.count !== void 0 && !C(i.count), w = Re.hasDefaultValue(i), z = R ? this.pluralResolver.getSuffix(h, i.count, i) : "", T = i.ordinal && R ? this.pluralResolver.getSuffix(h, i.count, {
      ordinal: !1
    }) : "", x = R && !i.ordinal && i.count === 0, O = x && i[`defaultValue${this.options.pluralSeparator}zero`] || i[`defaultValue${z}`] || i[`defaultValue${T}`] || i.defaultValue;
    let $ = p;
    A && !p && w && ($ = O);
    const G = ht($), Q = Object.prototype.toString.apply($);
    if (A && $ && G && E.indexOf(Q) < 0 && !(C(j) && Array.isArray($))) {
      if (!i.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const Y = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(b, $, {
          ...i,
          ns: d
        }) : `key '${l} (${this.language})' returned an object instead of string.`;
        return n ? (m.res = Y, m.usedParams = this.getUsedParamsDetails(i), m) : Y;
      }
      if (a) {
        const Y = Array.isArray($), V = Y ? [] : {}, J = Y ? _ : b;
        for (const F in $)
          if (Object.prototype.hasOwnProperty.call($, F)) {
            const W = `${J}${a}${F}`;
            w && !p ? V[F] = this.translate(W, {
              ...i,
              defaultValue: ht(O) ? O[F] : void 0,
              joinArrays: !1,
              ns: d
            }) : V[F] = this.translate(W, {
              ...i,
              joinArrays: !1,
              ns: d
            }), V[F] === W && (V[F] = $[F]);
          }
        p = V;
      }
    } else if (A && C(j) && Array.isArray(p))
      p = p.join(j), p && (p = this.extendTranslation(p, e, i, s));
    else {
      let Y = !1, V = !1;
      !this.isValidLookup(p) && w && (Y = !0, p = O), this.isValidLookup(p) || (V = !0, p = l);
      const F = (i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && V ? void 0 : p, W = w && O !== p && this.options.updateMissing;
      if (V || Y || W) {
        if (this.logger.log(W ? "updateKey" : "missingKey", h, u, l, W ? O : p), a) {
          const S = this.resolve(l, {
            ...i,
            keySeparator: !1
          });
          S && S.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let k = [];
        const X = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && X && X[0])
          for (let S = 0; S < X.length; S++)
            k.push(X[S]);
        else this.options.saveMissingTo === "all" ? k = this.languageUtils.toResolveHierarchy(i.lng || this.language) : k.push(i.lng || this.language);
        const f = (S, P, N) => {
          var H;
          const M = w && N !== p ? N : F;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(S, u, P, M, W, i) : (H = this.backendConnector) != null && H.saveMissing && this.backendConnector.saveMissing(S, u, P, M, W, i), this.emit("missingKey", S, u, P, p);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && R ? k.forEach((S) => {
          const P = this.pluralResolver.getSuffixes(S, i);
          x && i[`defaultValue${this.options.pluralSeparator}zero`] && P.indexOf(`${this.options.pluralSeparator}zero`) < 0 && P.push(`${this.options.pluralSeparator}zero`), P.forEach((N) => {
            f([S], l + N, i[`defaultValue${N}`] || O);
          });
        }) : f(k, l, O));
      }
      p = this.extendTranslation(p, e, i, m, s), V && p === l && this.options.appendNamespaceToMissingKey && (p = `${u}${c}${l}`), (V || Y) && this.options.parseMissingKeyHandler && (p = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}${c}${l}` : l, Y ? p : void 0, i));
    }
    return n ? (m.res = p, m.usedParams = this.getUsedParamsDetails(i), m) : p;
  }
  extendTranslation(e, t, s, i, n) {
    var d, u;
    if ((d = this.i18nFormat) != null && d.parse)
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
      const c = C(e) && (((u = s == null ? void 0 : s.interpolation) == null ? void 0 : u.skipOnVariables) !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let h;
      if (c) {
        const m = e.match(this.interpolator.nestingRegexp);
        h = m && m.length;
      }
      let g = s.replace && !C(s.replace) ? s.replace : s;
      if (this.options.interpolation.defaultVariables && (g = {
        ...this.options.interpolation.defaultVariables,
        ...g
      }), e = this.interpolator.interpolate(e, g, s.lng || this.language || i.usedLng, s), c) {
        const m = e.match(this.interpolator.nestingRegexp), p = m && m.length;
        h < p && (s.nest = !1);
      }
      !s.lng && i && i.res && (s.lng = this.language || i.usedLng), s.nest !== !1 && (e = this.interpolator.nest(e, (...m) => (n == null ? void 0 : n[0]) === m[0] && !s.context ? (this.logger.warn(`It seems you are nesting recursively key: ${m[0]} in key: ${t[0]}`), null) : this.translate(...m, t), s)), s.interpolation && this.interpolator.reset();
    }
    const a = s.postProcess || this.options.postProcess, l = C(a) ? [a] : a;
    return e != null && (l != null && l.length) && s.applyPostProcessor !== !1 && (e = At.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...i,
        usedParams: this.getUsedParamsDetails(s)
      },
      ...s
    } : s, this)), e;
  }
  resolve(e, t = {}) {
    let s, i, n, a, l;
    return C(e) && (e = [e]), e.forEach((d) => {
      if (this.isValidLookup(s)) return;
      const u = this.extractFromKey(d, t), c = u.key;
      i = c;
      let h = u.namespaces;
      this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
      const g = t.count !== void 0 && !C(t.count), m = g && !t.ordinal && t.count === 0, p = t.context !== void 0 && (C(t.context) || typeof t.context == "number") && t.context !== "", b = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      h.forEach((_) => {
        var E, j;
        this.isValidLookup(s) || (l = _, !ut[`${b[0]}-${_}`] && ((E = this.utils) != null && E.hasLoadedNamespace) && !((j = this.utils) != null && j.hasLoadedNamespace(l)) && (ut[`${b[0]}-${_}`] = !0, this.logger.warn(`key "${i}" for languages "${b.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), b.forEach((A) => {
          var z;
          if (this.isValidLookup(s)) return;
          a = A;
          const R = [c];
          if ((z = this.i18nFormat) != null && z.addLookupKeys)
            this.i18nFormat.addLookupKeys(R, c, A, _, t);
          else {
            let T;
            g && (T = this.pluralResolver.getSuffix(A, t.count, t));
            const x = `${this.options.pluralSeparator}zero`, O = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (g && (R.push(c + T), t.ordinal && T.indexOf(O) === 0 && R.push(c + T.replace(O, this.options.pluralSeparator)), m && R.push(c + x)), p) {
              const $ = `${c}${this.options.contextSeparator}${t.context}`;
              R.push($), g && (R.push($ + T), t.ordinal && T.indexOf(O) === 0 && R.push($ + T.replace(O, this.options.pluralSeparator)), m && R.push($ + x));
            }
          }
          let w;
          for (; w = R.pop(); )
            this.isValidLookup(s) || (n = w, s = this.getResource(A, _, w, t));
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
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], s = e.replace && !C(e.replace);
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
class ft {
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
    if (C(e) && e.indexOf("-") > -1) {
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
    if (typeof e == "function" && (e = e(t)), C(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let s = e[t];
    return s || (s = e[this.getScriptPartFromCode(t)]), s || (s = e[this.formatLanguageCode(t)]), s || (s = e[this.getLanguagePartFromCode(t)]), s || (s = e.default), s || [];
  }
  toResolveHierarchy(e, t) {
    const s = this.getFallbackCodes(t || this.options.fallbackLng || [], e), i = [], n = (a) => {
      a && (this.isSupportedCode(a) ? i.push(a) : this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`));
    };
    return C(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && n(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && n(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && n(this.getLanguagePartFromCode(e))) : C(e) && n(this.formatLanguageCode(e)), s.forEach((a) => {
      i.indexOf(a) < 0 && n(this.formatLanguageCode(a));
    }), i;
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
    const s = Oe(e === "dev" ? "en" : e), i = t.ordinal ? "ordinal" : "cardinal", n = JSON.stringify({
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
        return this.logger.error("No Intl support, please use an Intl polyfill!"), gt;
      if (!e.match(/-|_/)) return gt;
      const d = this.languageUtils.getLanguagePartFromCode(e);
      a = this.getRule(d, t);
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
    return s || (s = this.getRule("dev", t)), s ? s.resolvedOptions().pluralCategories.sort((i, n) => pt[i] - pt[n]).map((i) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : [];
  }
  getSuffix(e, t, s = {}) {
    const i = this.getRule(e, s);
    return i ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, s));
  }
}
const mt = (o, e, t, s = ".", i = !0) => {
  let n = Ys(o, e, t);
  return !n && i && C(t) && (n = Ue(o, t, s), n === void 0 && (n = Ue(e, t, s))), n;
}, Me = (o) => o.replace(/\$/g, "$$$$");
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
      suffixEscaped: d,
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: h,
      nestingPrefix: g,
      nestingPrefixEscaped: m,
      nestingSuffix: p,
      nestingSuffixEscaped: b,
      nestingOptionsSeparator: _,
      maxReplaces: E,
      alwaysFormat: j
    } = e.interpolation;
    this.escape = t !== void 0 ? t : qs, this.escapeValue = s !== void 0 ? s : !0, this.useRawValueToEscape = i !== void 0 ? i : !1, this.prefix = n ? le(n) : a || "{{", this.suffix = l ? le(l) : d || "}}", this.formatSeparator = u || ",", this.unescapePrefix = c ? "" : h || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = g ? le(g) : m || le("$t("), this.nestingSuffix = p ? le(p) : b || le(")"), this.nestingOptionsSeparator = _ || ",", this.maxReplaces = E || 1e3, this.alwaysFormat = j !== void 0 ? j : !1, this.resetRegExp();
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
    const d = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (p) => {
      if (p.indexOf(this.formatSeparator) < 0) {
        const j = mt(t, d, p, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(j, void 0, s, {
          ...i,
          ...t,
          interpolationkey: p
        }) : j;
      }
      const b = p.split(this.formatSeparator), _ = b.shift().trim(), E = b.join(this.formatSeparator).trim();
      return this.format(mt(t, d, _, this.options.keySeparator, this.options.ignoreJSONStructure), E, s, {
        ...i,
        ...t,
        interpolationkey: _
      });
    };
    this.resetRegExp();
    const c = (i == null ? void 0 : i.missingInterpolationHandler) || this.options.missingInterpolationHandler, h = ((m = i == null ? void 0 : i.interpolation) == null ? void 0 : m.skipOnVariables) !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (p) => Me(p)
    }, {
      regex: this.regexp,
      safeValue: (p) => this.escapeValue ? Me(this.escape(p)) : Me(p)
    }].forEach((p) => {
      for (l = 0; n = p.regex.exec(e); ) {
        const b = n[1].trim();
        if (a = u(b), a === void 0)
          if (typeof c == "function") {
            const E = c(e, n, i);
            a = C(E) ? E : "";
          } else if (i && Object.prototype.hasOwnProperty.call(i, b))
            a = "";
          else if (h) {
            a = n[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${b} for interpolating ${e}`), a = "";
        else !C(a) && !this.useRawValueToEscape && (a = nt(a));
        const _ = p.safeValue(a);
        if (e = e.replace(n[0], _), h ? (p.regex.lastIndex += a.length, p.regex.lastIndex -= n[0].length) : p.regex.lastIndex = 0, l++, l >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t, s = {}) {
    let i, n, a;
    const l = (d, u) => {
      const c = this.nestingOptionsSeparator;
      if (d.indexOf(c) < 0) return d;
      const h = d.split(new RegExp(`${c}[ ]*{`));
      let g = `{${h[1]}`;
      d = h[0], g = this.interpolate(g, a);
      const m = g.match(/'/g), p = g.match(/"/g);
      (((m == null ? void 0 : m.length) ?? 0) % 2 === 0 && !p || p.length % 2 !== 0) && (g = g.replace(/'/g, '"'));
      try {
        a = JSON.parse(g), u && (a = {
          ...u,
          ...a
        });
      } catch (b) {
        return this.logger.warn(`failed parsing options string in nesting for key ${d}`, b), `${d}${c}${g}`;
      }
      return a.defaultValue && a.defaultValue.indexOf(this.prefix) > -1 && delete a.defaultValue, d;
    };
    for (; i = this.nestingRegexp.exec(e); ) {
      let d = [];
      a = {
        ...s
      }, a = a.replace && !C(a.replace) ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
      let u = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const c = i[1].split(this.formatSeparator).map((h) => h.trim());
        i[1] = c.shift(), d = c, u = !0;
      }
      if (n = t(l.call(this, i[1].trim(), a), a), n && i[0] === e && !C(n)) return n;
      C(n) || (n = nt(n)), n || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`), n = ""), u && (n = d.reduce((c, h) => this.format(c, h, s.lng, {
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
        const [l, ...d] = a.split(":"), u = d.join(":").trim().replace(/^'+|'+$/g, ""), c = l.trim();
        t[c] || (t[c] = u), u === "false" && (t[c] = !1), u === "true" && (t[c] = !0), isNaN(u) || (t[c] = parseInt(u, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, ce = (o) => {
  const e = {};
  return (t, s, i) => {
    let n = i;
    i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (n = {
      ...n,
      [i.interpolationkey]: void 0
    });
    const a = s + JSON.stringify(n);
    let l = e[a];
    return l || (l = o(Oe(s), i), e[a] = l), l(t);
  };
};
class or {
  constructor(e = {}) {
    this.logger = Z.create("formatter"), this.options = e, this.formats = {
      number: ce((t, s) => {
        const i = new Intl.NumberFormat(t, {
          ...s
        });
        return (n) => i.format(n);
      }),
      currency: ce((t, s) => {
        const i = new Intl.NumberFormat(t, {
          ...s,
          style: "currency"
        });
        return (n) => i.format(n);
      }),
      datetime: ce((t, s) => {
        const i = new Intl.DateTimeFormat(t, {
          ...s
        });
        return (n) => i.format(n);
      }),
      relativetime: ce((t, s) => {
        const i = new Intl.RelativeTimeFormat(t, {
          ...s
        });
        return (n) => i.format(n, s.range || "day");
      }),
      list: ce((t, s) => {
        const i = new Intl.ListFormat(t, {
          ...s
        });
        return (n) => i.format(n);
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
  format(e, t, s, i = {}) {
    const n = t.split(this.formatSeparator);
    if (n.length > 1 && n[0].indexOf("(") > 1 && n[0].indexOf(")") < 0 && n.find((l) => l.indexOf(")") > -1)) {
      const l = n.findIndex((d) => d.indexOf(")") > -1);
      n[0] = [n[0], ...n.splice(1, l)].join(this.formatSeparator);
    }
    return n.reduce((l, d) => {
      var h;
      const {
        formatName: u,
        formatOptions: c
      } = ir(d);
      if (this.formats[u]) {
        let g = l;
        try {
          const m = ((h = i == null ? void 0 : i.formatParams) == null ? void 0 : h[i.interpolationkey]) || {}, p = m.locale || m.lng || i.locale || i.lng || s;
          g = this.formats[u](l, p, {
            ...c,
            ...i,
            ...m
          });
        } catch (m) {
          this.logger.warn(m);
        }
        return g;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return l;
    }, e);
  }
}
const nr = (o, e) => {
  o.pending[e] !== void 0 && (delete o.pending[e], o.pendingCount--);
};
class ar extends ze {
  constructor(e, t, s, i = {}) {
    var n, a;
    super(), this.backend = e, this.store = t, this.services = s, this.languageUtils = s.languageUtils, this.options = i, this.logger = Z.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], (a = (n = this.backend) == null ? void 0 : n.init) == null || a.call(n, s, i.backend, i);
  }
  queueLoad(e, t, s, i) {
    const n = {}, a = {}, l = {}, d = {};
    return e.forEach((u) => {
      let c = !0;
      t.forEach((h) => {
        const g = `${u}|${h}`;
        !s.reload && this.store.hasResourceBundle(u, h) ? this.state[g] = 2 : this.state[g] < 0 || (this.state[g] === 1 ? a[g] === void 0 && (a[g] = !0) : (this.state[g] = 1, c = !1, a[g] === void 0 && (a[g] = !0), n[g] === void 0 && (n[g] = !0), d[h] === void 0 && (d[h] = !0)));
      }), c || (l[u] = !0);
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
      toLoadNamespaces: Object.keys(d)
    };
  }
  loaded(e, t, s) {
    const i = e.split("|"), n = i[0], a = i[1];
    t && this.emit("failedLoading", n, a, t), !t && s && this.store.addResourceBundle(n, a, s, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && s && (this.state[e] = 0);
    const l = {};
    this.queue.forEach((d) => {
      Ks(d.loaded, [n], a), nr(d, e), t && d.errors.push(t), d.pendingCount === 0 && !d.done && (Object.keys(d.loaded).forEach((u) => {
        l[u] || (l[u] = {});
        const c = d.loaded[u];
        c.length && c.forEach((h) => {
          l[u][h] === void 0 && (l[u][h] = !0);
        });
      }), d.done = !0, d.errors.length ? d.callback(d.errors) : d.callback());
    }), this.emit("loaded", l), this.queue = this.queue.filter((d) => !d.done);
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
    const l = (u, c) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const h = this.waitingReads.shift();
        this.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback);
      }
      if (u && c && i < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, s, i + 1, n * 2, a);
        }, n);
        return;
      }
      a(u, c);
    }, d = this.backend[s].bind(this.backend);
    if (d.length === 2) {
      try {
        const u = d(e, t);
        u && typeof u.then == "function" ? u.then((c) => l(null, c)).catch(l) : l(null, u);
      } catch (u) {
        l(u);
      }
      return;
    }
    return d(e, t, l);
  }
  prepareLoading(e, t, s = {}, i) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
    C(e) && (e = this.languageUtils.toResolveHierarchy(e)), C(t) && (t = [t]);
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
    var d, u, c, h, g;
    if ((u = (d = this.services) == null ? void 0 : d.utils) != null && u.hasLoadedNamespace && !((h = (c = this.services) == null ? void 0 : c.utils) != null && h.hasLoadedNamespace(t))) {
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
            let b;
            p.length === 5 ? b = p(e, t, s, i, m) : b = p(e, t, s, i), b && typeof b.then == "function" ? b.then((_) => l(null, _)).catch(l) : l(null, b);
          } catch (b) {
            l(b);
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
    if (typeof o[1] == "object" && (e = o[1]), C(o[1]) && (e.defaultValue = o[1]), C(o[2]) && (e.tDescription = o[2]), typeof o[2] == "object" || typeof o[3] == "object") {
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
  }
}), yt = (o) => {
  var e, t;
  return C(o.ns) && (o.ns = [o.ns]), C(o.fallbackLng) && (o.fallbackLng = [o.fallbackLng]), C(o.fallbackNS) && (o.fallbackNS = [o.fallbackNS]), ((t = (e = o.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : t.call(e, "cimode")) < 0 && (o.supportedLngs = o.supportedLngs.concat(["cimode"])), typeof o.initImmediate == "boolean" && (o.initAsync = o.initImmediate), o;
}, Se = () => {
}, lr = (o) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(o)).forEach((t) => {
    typeof o[t] == "function" && (o[t] = o[t].bind(o));
  });
};
class ve extends ze {
  constructor(e = {}, t) {
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
  init(e = {}, t) {
    this.isInitializing = !0, typeof e == "function" && (t = e, e = {}), e.defaultNS == null && e.ns && (C(e.ns) ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
    const s = xt();
    this.options = {
      ...s,
      ...this.options,
      ...yt(e)
    }, this.options.interpolation = {
      ...s.interpolation,
      ...this.options.interpolation
    }, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator);
    const i = (u) => u ? typeof u == "function" ? new u() : u : null;
    if (!this.options.isClone) {
      this.modules.logger ? Z.init(i(this.modules.logger), this.options) : Z.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : u = or;
      const c = new ft(this.options);
      this.store = new dt(this.options.resources, this.options);
      const h = this.services;
      h.logger = Z, h.resourceStore = this.store, h.languageUtils = c, h.pluralResolver = new sr(c, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (h.formatter = i(u), h.formatter.init(h, this.options), this.options.interpolation.format = h.formatter.format.bind(h.formatter)), h.interpolator = new rr(this.options), h.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, h.backendConnector = new ar(i(this.modules.backend), h.resourceStore, h, this.options), h.backendConnector.on("*", (g, ...m) => {
        this.emit(g, ...m);
      }), this.modules.languageDetector && (h.languageDetector = i(this.modules.languageDetector), h.languageDetector.init && h.languageDetector.init(h, this.options.detection, this.options)), this.modules.i18nFormat && (h.i18nFormat = i(this.modules.i18nFormat), h.i18nFormat.init && h.i18nFormat.init(this)), this.translator = new Re(this.services, this.options), this.translator.on("*", (g, ...m) => {
        this.emit(g, ...m);
      }), this.modules.external.forEach((g) => {
        g.init && g.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, t || (t = Se), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((u) => {
      this[u] = (...c) => this.store[u](...c);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((u) => {
      this[u] = (...c) => (this.store[u](...c), this);
    });
    const l = xe(), d = () => {
      const u = (c, h) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(h), t(c, h);
      };
      if (this.languages && !this.isInitialized) return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initAsync ? d() : setTimeout(d, 0), l;
  }
  loadResources(e, t = Se) {
    var n, a;
    let s = t;
    const i = C(e) ? e : this.language;
    if (typeof e == "function" && (s = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((i == null ? void 0 : i.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return s();
      const l = [], d = (u) => {
        if (!u || u === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(u).forEach((h) => {
          h !== "cimode" && l.indexOf(h) < 0 && l.push(h);
        });
      };
      i ? d(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((c) => d(c)), (a = (n = this.options.preload) == null ? void 0 : n.forEach) == null || a.call(n, (u) => d(u)), this.services.backendConnector.load(l, this.options.ns, (u) => {
        !u && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(u);
      });
    } else
      s(null);
  }
  reloadResources(e, t, s) {
    const i = xe();
    return typeof e == "function" && (s = e, e = void 0), typeof t == "function" && (s = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), s || (s = Se), this.services.backendConnector.reload(e, t, (n) => {
      i.resolve(), s(n);
    }), i;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && At.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
    const s = xe();
    this.emit("languageChanging", e);
    const i = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, n = (l, d) => {
      d ? this.isLanguageChangingTo === e && (i(d), this.translator.changeLanguage(d), this.isLanguageChangingTo = void 0, this.emit("languageChanged", d), this.logger.log("languageChanged", d)) : this.isLanguageChangingTo = void 0, s.resolve((...u) => this.t(...u)), t && t(l, (...u) => this.t(...u));
    }, a = (l) => {
      var c, h;
      !e && !l && this.services.languageDetector && (l = []);
      const d = C(l) ? l : l && l[0], u = this.store.hasLanguageSomeTranslations(d) ? d : this.services.languageUtils.getBestMatchFromCodes(C(l) ? [l] : l);
      u && (this.language || i(u), this.translator.language || this.translator.changeLanguage(u), (h = (c = this.services.languageDetector) == null ? void 0 : c.cacheUserLanguage) == null || h.call(c, u)), this.loadResources(u, (g) => {
        n(g, u);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e), s;
  }
  getFixedT(e, t, s) {
    const i = (n, a, ...l) => {
      let d;
      typeof a != "object" ? d = this.options.overloadTranslationOptionHandler([n, a].concat(l)) : d = {
        ...a
      }, d.lng = d.lng || i.lng, d.lngs = d.lngs || i.lngs, d.ns = d.ns || i.ns, d.keyPrefix !== "" && (d.keyPrefix = d.keyPrefix || s || i.keyPrefix);
      const u = this.options.keySeparator || ".";
      let c;
      return d.keyPrefix && Array.isArray(n) ? c = n.map((h) => `${d.keyPrefix}${u}${h}`) : c = d.keyPrefix ? `${d.keyPrefix}${u}${n}` : n, this.t(c, d);
    };
    return C(e) ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = s, i;
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
    const a = (l, d) => {
      const u = this.services.backendConnector.state[`${l}|${d}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (t.precheck) {
      const l = t.precheck(this, a);
      if (l !== void 0) return l;
    }
    return !!(this.hasResourceBundle(s, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || a(s, e) && (!i || a(n, e)));
  }
  loadNamespaces(e, t) {
    const s = xe();
    return this.options.ns ? (C(e) && (e = [e]), e.forEach((i) => {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }), this.loadResources((i) => {
      s.resolve(), t && t(i);
    }), s) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const s = xe();
    C(e) && (e = [e]);
    const i = this.options.preload || [], n = e.filter((a) => i.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a));
    return n.length ? (this.options.preload = i.concat(n), this.loadResources((a) => {
      s.resolve(), t && t(a);
    }), s) : (t && t(), Promise.resolve());
  }
  dir(e) {
    var i, n;
    if (e || (e = this.resolvedLanguage || (((i = this.languages) == null ? void 0 : i.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], s = ((n = this.services) == null ? void 0 : n.languageUtils) || new ft(xt());
    return t.indexOf(s.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(e = {}, t) {
    return new ve(e, t);
  }
  cloneInstance(e = {}, t = Se) {
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const i = {
      ...this.options,
      ...e,
      isClone: !0
    }, n = new ve(i);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (n.logger = n.logger.clone(e)), ["store", "services", "language"].forEach((l) => {
      n[l] = this[l];
    }), n.services = {
      ...this.services
    }, n.services.utils = {
      hasLoadedNamespace: n.hasLoadedNamespace.bind(n)
    }, s) {
      const l = Object.keys(this.store.data).reduce((d, u) => (d[u] = {
        ...this.store.data[u]
      }, d[u] = Object.keys(d[u]).reduce((c, h) => (c[h] = {
        ...d[u][h]
      }, c), d[u]), d), {});
      n.store = new dt(l, i), n.services.resourceStore = n.store;
    }
    return n.translator = new Re(n.services, i), n.translator.on("*", (l, ...d) => {
      n.emit(l, ...d);
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
const K = ve.createInstance();
K.createInstance = ve.createInstance;
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
var He = {
  nav: {
    pricing: "Pricing",
    contact: "Contact",
    languages: "Languages",
    login: "Login",
    get_started: "Get Started",
    product: {
      title: "Product",
      explore: "Explore our product",
      platform_overview: "Platform Overview",
      platform_overview_desc: "Unified CNAPP platform",
      benefits: "Benefits",
      benefits_desc: "See how Plexicus transforms security",
      use_cases: "Use Cases",
      use_cases_desc: "Real-world implementation examples",
      aspm: "ASPM",
      aspm_desc: "Application Security Posture Management",
      cspm: "CSPM",
      cspm_desc: "Cloud Security Posture Management",
      container_security: "Container Security",
      container_security_desc: "Container and Kubernetes security",
      cwpp: "CWPP",
      cwpp_desc: "Cloud Workload Protection Platform"
    },
    solutions: {
      title: "Solutions",
      explore: "Explore our solutions",
      fintech: "FinTech",
      fintech_desc: "Security solutions for financial technology",
      healthtech: "HealthTech",
      healthtech_desc: "HIPAA compliant security solutions",
      hrtech: "HRTech",
      hrtech_desc: "Security for human resources technology",
      group_companies: "Group Companies",
      group_companies_desc: "Solutions for corporate groups and holdings",
      agencies: "Agencies",
      agencies_desc: "Security for digital and marketing agencies",
      startups: "Startups",
      startups_desc: "Scalable security for growing companies",
      enterprise: "Enterprise",
      enterprise_desc: "Comprehensive security for large organizations",
      mobile_apps: "Mobile Apps",
      mobile_apps_desc: "Security for iOS and Android applications",
      manufacturing: "Manufacturing",
      manufacturing_desc: "Security for industrial and IoT systems",
      government: "Government",
      government_desc: "Security solutions for government agencies",
      retailtech: "RetailTech",
      retailtech_desc: "Security for e-commerce and retail platforms"
    },
    developers: {
      title: "Developers",
      documentation: "Documentation",
      documentation_desc: "Technical guides and references",
      api_references: "API References",
      api_references_desc: "Comprehensive API documentation",
      github_apps: "GitHub Apps",
      github_apps_desc: "Integrate Plexicus with your repositories",
      plexalyzer_action: "Plexalyzer Action",
      plexalyzer_action_desc: "Automate security in your CI/CD pipeline"
    },
    resources: {
      title: "Resources",
      explore: "Explore our resources",
      blog: "Blog",
      blog_desc: "Latest news and security insights",
      youtube_channel: "YouTube Channel",
      youtube_channel_desc: "Video tutorials and webinars",
      branding_assets: "Branding Assets",
      branding_assets_desc: "Logos and brand guidelines",
      changelogs: "Changelogs",
      changelogs_desc: "Latest product updates",
      feature_requests: "Feature Requests",
      feature_requests_desc: "Submit and vote on new features",
      integrations: "Integrations",
      integrations_desc: "Connect your tools and platforms",
      comparison_overview: "Comparison Overview",
      comparison_overview_desc: "See how Plexicus compares to other security tools"
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
    login: "Iniciar Sesión",
    get_started: "Comenzar",
    product: {
      title: "Producto",
      explore: "Explora nuestro producto",
      platform_overview: "Resumen de la Plataforma",
      platform_overview_desc: "Plataforma CNAPP unificada",
      benefits: "Beneficios",
      benefits_desc: "Descubra cómo Plexicus transforma la seguridad",
      use_cases: "Casos de Uso",
      use_cases_desc: "Ejemplos de implementación en el mundo real",
      aspm: "ASPM",
      aspm_desc: "Gestión de la Postura de Seguridad de las Aplicaciones",
      cspm: "CSPM",
      cspm_desc: "Gestión de la Postura de Seguridad en la Nube",
      container_security: "Seguridad de Contenedores",
      container_security_desc: "Seguridad para contenedores y Kubernetes",
      cwpp: "CWPP",
      cwpp_desc: "Plataforma de Protección de Cargas de Trabajo en la Nube"
    },
    solutions: {
      title: "Soluciones",
      explore: "Explora nuestras soluciones",
      fintech: "FinTech",
      fintech_desc: "Soluciones de seguridad para tecnología financiera",
      healthtech: "HealthTech",
      healthtech_desc: "Soluciones de seguridad compatibles con HIPAA",
      hrtech: "HRTech",
      hrtech_desc: "Seguridad para la tecnología de recursos humanos",
      group_companies: "Grupos de Empresas",
      group_companies_desc: "Soluciones para grupos corporativos y holdings",
      agencies: "Agencias",
      agencies_desc: "Seguridad para agencias digitales y de marketing",
      startups: "Startups",
      startups_desc: "Seguridad escalable para empresas en crecimiento",
      enterprise: "Empresas",
      enterprise_desc: "Seguridad integral para grandes organizaciones",
      mobile_apps: "Aplicaciones Móviles",
      mobile_apps_desc: "Seguridad para aplicaciones de iOS y Android",
      manufacturing: "Industria",
      manufacturing_desc: "Seguridad para sistemas industriales e IoT",
      government: "Gobierno",
      government_desc: "Soluciones de seguridad para agencias gubernamentales",
      retailtech: "RetailTech",
      retailtech_desc: "Seguridad para plataformas de comercio electrónico y minoristas"
    },
    developers: {
      title: "Desarrolladores",
      documentation: "Documentación",
      documentation_desc: "Guías técnicas y referencias",
      api_references: "Referencias de API",
      api_references_desc: "Documentación completa de la API",
      github_apps: "Aplicaciones de GitHub",
      github_apps_desc: "Integre Plexicus con sus repositorios",
      plexalyzer_action: "Acción Plexalyzer",
      plexalyzer_action_desc: "Automatice la seguridad en su pipeline de CI/CD"
    },
    resources: {
      title: "Recursos",
      explore: "Explora nuestros recursos",
      blog: "Blog",
      blog_desc: "Últimas noticias y perspectivas de seguridad",
      youtube_channel: "Canal de YouTube",
      youtube_channel_desc: "Tutoriales en video y seminarios web",
      branding_assets: "Activos de Marca",
      branding_assets_desc: "Logotipos y pautas de la marca",
      changelogs: "Registros de Cambios",
      changelogs_desc: "Últimas actualizaciones del producto",
      feature_requests: "Solicitudes de Características",
      feature_requests_desc: "Envíe y vote por nuevas características",
      integrations: "Integraciones",
      integrations_desc: "Conecte sus herramientas y plataformas",
      comparison_overview: "Resumen Comparativo",
      comparison_overview_desc: "Vea cómo se compara Plexicus con otras herramientas de seguridad"
    }
  },
  footer: {
    tagline: "Eleve su estrategia de ciberseguridad con Plexicus",
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
          case_studies: "Casos de Estudio",
          security_resources: "Recursos de Seguridad"
        }
      },
      company: {
        title: "Compañía",
        links: {
          about_us: "Sobre Nosotros",
          contact: "Contacto",
          careers: "Empleo",
          privacy_policy: "Política de Privacidad"
        }
      }
    },
    policies: {
      privacy_policy: "Política de Privacidad",
      management_policy: "Política de Gestión",
      legal_notice: "Aviso Legal"
    },
    readiness: "Preparación para SOC2 Tipo II"
  }
};
Ke.nav;
Ke.footer;
var Ye = {
  nav: {
    pricing: "Prezzi",
    contact: "Contatti",
    languages: "Lingue",
    login: "Accedi",
    get_started: "Inizia",
    product: {
      title: "Prodotto",
      explore: "Esplora il nostro prodotto",
      platform_overview: "Panoramica della Piattaforma",
      platform_overview_desc: "Piattaforma CNAPP unificata",
      benefits: "Vantaggi",
      benefits_desc: "Scopri come Plexicus trasforma la sicurezza",
      use_cases: "Casi d'Uso",
      use_cases_desc: "Esempi di implementazione reali",
      aspm: "ASPM",
      aspm_desc: "Gestione della Postura di Sicurezza delle Applicazioni",
      cspm: "CSPM",
      cspm_desc: "Gestione della Postura di Sicurezza del Cloud",
      container_security: "Sicurezza dei Container",
      container_security_desc: "Sicurezza per container e Kubernetes",
      cwpp: "CWPP",
      cwpp_desc: "Piattaforma di Protezione dei Carichi di Lavoro in Cloud"
    },
    solutions: {
      title: "Soluzioni",
      explore: "Esplora le nostre soluzioni",
      fintech: "FinTech",
      fintech_desc: "Soluzioni di sicurezza per la tecnologia finanziaria",
      healthtech: "HealthTech",
      healthtech_desc: "Soluzioni di sicurezza conformi a HIPAA",
      hrtech: "HRTech",
      hrtech_desc: "Sicurezza per la tecnologia delle risorse umane",
      group_companies: "Gruppi Aziendali",
      group_companies_desc: "Soluzioni per gruppi aziendali e holding",
      agencies: "Agenzie",
      agencies_desc: "Sicurezza per agenzie digitali e di marketing",
      startups: "Startup",
      startups_desc: "Sicurezza scalabile per aziende in crescita",
      enterprise: "Aziende",
      enterprise_desc: "Sicurezza completa per grandi organizzazioni",
      mobile_apps: "App Mobili",
      mobile_apps_desc: "Sicurezza per applicazioni iOS e Android",
      manufacturing: "Manifatturiero",
      manufacturing_desc: "Sicurezza per sistemi industriali e IoT",
      government: "Governo",
      government_desc: "Soluzioni di sicurezza per enti governativi",
      retailtech: "RetailTech",
      retailtech_desc: "Sicurezza per piattaforme di e-commerce e vendita al dettaglio"
    },
    developers: {
      title: "Sviluppatori",
      documentation: "Documentazione",
      documentation_desc: "Guide tecniche e riferimenti",
      api_references: "Riferimenti API",
      api_references_desc: "Documentazione API completa",
      github_apps: "App di GitHub",
      github_apps_desc: "Integra Plexicus con i tuoi repository",
      plexalyzer_action: "Azione Plexalyzer",
      plexalyzer_action_desc: "Automatizza la sicurezza nella tua pipeline CI/CD"
    },
    resources: {
      title: "Risorse",
      explore: "Esplora le nostre risorse",
      blog: "Blog",
      blog_desc: "Ultime notizie e approfondimenti sulla sicurezza",
      youtube_channel: "Canale YouTube",
      youtube_channel_desc: "Tutorial video e webinar",
      branding_assets: "Asset del Marchio",
      branding_assets_desc: "Loghi e linee guida del marchio",
      changelogs: "Changelog",
      changelogs_desc: "Ultimi aggiornamenti del prodotto",
      feature_requests: "Richieste di Funzionalità",
      feature_requests_desc: "Invia e vota per nuove funzionalità",
      integrations: "Integrazioni",
      integrations_desc: "Collega i tuoi strumenti e le tue piattaforme",
      comparison_overview: "Panoramica Comparativa",
      comparison_overview_desc: "Scopri come Plexicus si confronta con altri strumenti di sicurezza"
    }
  },
  footer: {
    tagline: "Eleva la tua strategia di cybersecurity con Plexicus",
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
          benefits: "Vantaggi",
          use_cases: "Casi d'Uso",
          pricing: "Prezzi"
        }
      },
      resources: {
        title: "Risorse",
        links: {
          blog: "Blog",
          documentation: "Documentazione",
          case_studies: "Casi di Studio",
          security_resources: "Risorse di Sicurezza"
        }
      },
      company: {
        title: "Azienda",
        links: {
          about_us: "Chi Siamo",
          contact: "Contatti",
          careers: "Lavora con noi",
          privacy_policy: "Informativa sulla Privacy"
        }
      }
    },
    policies: {
      privacy_policy: "Informativa sulla Privacy",
      management_policy: "Politica di Gestione",
      legal_notice: "Note Legali"
    },
    readiness: "Conformità SOC2 Tipo II"
  }
};
Ye.nav;
Ye.footer;
const cr = ["en", "es", "it"];
K.use(Bs).init({
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
const Tt = "https://www.plexicus.ai", It = "http://blog.plexicus.ai", fr = ({
  lang: o,
  fullSiteUrl: e = "http://localhost:8000",
  fullBlogUrl: t = "http://localhost:9000"
}) => {
  const [s, i] = de("/"), [n, a] = de(!1), [l, d] = de(null), u = _e(null), { t: c, i18n: h } = Et();
  re(() => {
    h.changeLanguage(o), i(o !== "en" ? `/${o}/` : "/");
  }, []);
  const [g, m] = de(!1);
  re(() => {
    const w = () => {
      const z = window.scrollY;
      m(z > 50);
    };
    return window.addEventListener("scroll", w), w(), () => {
      window.removeEventListener("scroll", w);
    };
  }, []);
  const p = Ce((w) => {
    u.current && (clearTimeout(u.current), u.current = null), d(w);
  }, []), b = _e([]), _ = Ce(() => {
    const w = setTimeout(() => {
      d(null);
    }, 150);
    u.current = w, b.current.push(w);
  }, []);
  re(() => () => {
    u.current && clearTimeout(u.current), b.current.forEach(clearTimeout), b.current = [];
  }, []);
  const E = Ce(
    (w) => {
      d(l === w ? null : w);
    },
    [l]
  ), j = Le(e, Tt), A = Le(t, It), R = {
    products: {
      title: c("nav.product.title"),
      shortTitle: c("footer.sections.products.title"),
      image: "product-diagram",
      items: [
        {
          title: c("nav.product.platform_overview"),
          description: c("nav.product.platform_overview_desc"),
          href: `${j}${s}products/platform`,
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
          title: c("nav.product.benefits"),
          description: c("nav.product.benefits_desc"),
          href: `${j}${s}products/benefits`,
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
          title: c("nav.product.use_cases"),
          description: c("nav.product.use_cases_desc"),
          href: `${j}${s}products/use-cases`,
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
        },
        {
          title: c("nav.product.aspm"),
          description: c("nav.product.aspm_desc"),
          href: `${j}${s}products/aspm`,
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
              children: /* @__PURE__ */ r.jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })
            }
          )
        },
        {
          title: c("nav.product.cspm"),
          description: c("nav.product.cspm_desc"),
          href: `${j}${s}products/cspm`,
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
              children: /* @__PURE__ */ r.jsx("path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" })
            }
          )
        },
        {
          title: c("nav.product.container_security"),
          description: c("nav.product.container_security_desc"),
          href: `${j}${s}products/container`,
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
                /* @__PURE__ */ r.jsx("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
                /* @__PURE__ */ r.jsx("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
                /* @__PURE__ */ r.jsx("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" })
              ]
            }
          )
        },
        {
          title: c("nav.product.cwpp"),
          description: c("nav.product.cwpp_desc"),
          href: `${j}${s}products/cwpp`,
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
                /* @__PURE__ */ r.jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
                /* @__PURE__ */ r.jsx("circle", { cx: "12", cy: "16", r: "1" }),
                /* @__PURE__ */ r.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
              ]
            }
          )
        }
      ]
    },
    solutions: {
      title: c("nav.solutions.title"),
      link: "/solutions",
      shortTitle: "Solutions",
      image: "solutions-diagram",
      items: [
        {
          title: c("nav.solutions.fintech"),
          description: c("nav.solutions.fintech_desc"),
          href: `${j}${s}solutions/fintech`,
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
          title: c("nav.solutions.healthtech"),
          description: c("nav.solutions.healthtech_desc"),
          href: `${j}${s}solutions/healthtech`,
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
          title: c("nav.solutions.hrtech"),
          description: c("nav.solutions.hrtech_desc"),
          href: `${j}${s}solutions/hrtech`,
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
                /* @__PURE__ */ r.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
                /* @__PURE__ */ r.jsx("circle", { cx: "9", cy: "7", r: "4" }),
                /* @__PURE__ */ r.jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
                /* @__PURE__ */ r.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
              ]
            }
          )
        },
        {
          title: c("nav.solutions.group_companies"),
          description: c("nav.solutions.group_companies_desc"),
          href: `${j}${s}solutions/group-companies`,
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
          title: c("nav.solutions.agencies"),
          description: c("nav.solutions.agencies_desc"),
          href: `${j}${s}solutions/agencies`,
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
          title: c("nav.solutions.startups"),
          description: c("nav.solutions.startups_desc"),
          href: `${j}${s}solutions/startups`,
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
          title: c("nav.solutions.enterprise"),
          description: c("nav.solutions.enterprise_desc"),
          href: `${j}${s}solutions/enterprise`,
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
          title: c("nav.solutions.mobile_apps"),
          description: c("nav.solutions.mobile_apps_desc"),
          href: `${j}${s}solutions/mobile-apps`,
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
          title: c("nav.solutions.manufacturing"),
          description: c("nav.solutions.manufacturing_desc"),
          href: `${j}${s}solutions/manufacturing`,
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
          title: c("nav.solutions.government"),
          description: c("nav.solutions.government_desc"),
          href: `${j}${s}solutions/government`,
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
          title: c("nav.solutions.retailtech"),
          description: c("nav.solutions.retailtech_desc"),
          href: `${j}${s}solutions/retailtech`,
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
      title: c("nav.developers.title"),
      shortTitle: "Developers",
      image: "developers-diagram",
      items: [
        {
          title: c("nav.developers.documentation"),
          description: c("nav.developers.documentation_desc"),
          href: "https://docs.plexicus.com",
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
          title: c("nav.developers.api_references"),
          description: c("nav.developers.api_references_desc"),
          href: "https://docs.plexicus.com/api",
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
          title: c("nav.developers.github_apps"),
          description: c("nav.developers.github_apps_desc"),
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
          title: c("nav.developers.plexalyzer_action"),
          description: c("nav.developers.plexalyzer_action_desc"),
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
      title: c("nav.resources.title"),
      shortTitle: c("nav.resources.title"),
      image: "resources-diagram",
      items: [
        {
          title: c("nav.resources.blog"),
          description: c("nav.resources.blog_desc"),
          href: A,
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
          title: c("nav.resources.youtube_channel"),
          description: c("nav.resources.youtube_channel_desc"),
          href: "https://youtube.com/@plexicus",
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
          title: c("nav.resources.branding_assets"),
          description: c("nav.resources.branding_assets_desc"),
          href: `${j}${s}resources/branding`,
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
          title: c("nav.resources.changelogs"),
          description: c("nav.resources.changelogs_desc"),
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
          title: c("nav.resources.feature_requests"),
          description: c("nav.resources.feature_requests_desc"),
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
        {
          title: c("nav.resources.integrations"),
          description: c("nav.resources.integrations_desc"),
          href: `${j}${s}integrations`,
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
                /* @__PURE__ */ r.jsx("path", { d: "M9 12l2 2 4-4" }),
                /* @__PURE__ */ r.jsx("path", { d: "M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" }),
                /* @__PURE__ */ r.jsx("path", { d: "M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" }),
                /* @__PURE__ */ r.jsx("path", { d: "M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" }),
                /* @__PURE__ */ r.jsx("path", { d: "M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" })
              ]
            }
          )
        },
        {
          title: c("nav.resources.comparison_overview"),
          description: c("nav.resources.comparison_overview_desc"),
          href: `${j}${s}comparison/overview`,
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
                /* @__PURE__ */ r.jsx("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }),
                /* @__PURE__ */ r.jsx("circle", { cx: "12", cy: "12", r: "3" })
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
          /* @__PURE__ */ r.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ r.jsx(
            I,
            {
              href: `${j}${s}`,
              className: "flex items-center gap-2 overflow-visible",
              "aria-label": "Plexicus Home",
              children: /* @__PURE__ */ r.jsx("div", { className: "relative w-auto h-14 flex items-center", children: /* @__PURE__ */ r.jsx(
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
              ) })
            }
          ) }),
          /* @__PURE__ */ r.jsxs("nav", { className: "hidden md:flex md:gap-4 lg:gap-6", "aria-label": "Main Navigation", children: [
            Object.entries(R).filter(([w]) => w === "products").map(([w, z]) => /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => p(w),
                onMouseLeave: _,
                children: /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": l === w,
                    "aria-haspopup": "true",
                    onClick: () => E(w),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "hidden lg:inline", children: z.title }),
                      /* @__PURE__ */ r.jsx("span", { className: "lg:hidden", children: z.shortTitle }),
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
                          className: `ml-1 transition-transform duration-200 ${l === w ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ r.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              w
            )),
            /* @__PURE__ */ r.jsx(
              I,
              {
                href: `${j}${s}pricing`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: c("nav.pricing")
              }
            ),
            Object.entries(R).filter(([w]) => w === "solutions" || w === "developers" || w === "resources").map(([w, z]) => /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => p(w),
                onMouseLeave: _,
                children: /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": l === w,
                    "aria-haspopup": "true",
                    onClick: () => E(w),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "hidden lg:inline", children: z.title }),
                      /* @__PURE__ */ r.jsx("span", { className: "lg:hidden", children: z.shortTitle }),
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
                          className: `ml-1 transition-transform duration-200 ${l === w ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ r.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              w
            )),
            /* @__PURE__ */ r.jsx(
              I,
              {
                href: `${j}${s}contact`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: c("nav.contact")
              }
            )
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "hidden md:flex items-center gap-4", children: [
            /* @__PURE__ */ r.jsx(
              I,
              {
                href: `${j}/login`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors whitespace-nowrap",
                children: c("nav.login")
              }
            ),
            /* @__PURE__ */ r.jsx(Be, { className: "bg-white text-[#8220ff] font-medium px-4 lg:px-6 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap", children: c("nav.get_started") })
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
              onClick: () => d(null),
              "aria-hidden": "true",
              style: { top: "64px" }
            }
          ),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "absolute left-0 right-0 top-16 z-40 bg-white shadow-xl border-t border-gray-100 transition-all duration-300 transform",
              onMouseEnter: () => p(l),
              onMouseLeave: _,
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
                          /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
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
                          ) })
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
                    /* @__PURE__ */ r.jsx("h3", { className: "text-xl font-bold text-[#8220ff]", children: R[l].title }),
                    /* @__PURE__ */ r.jsx("p", { className: "text-gray-700", children: c(l === "products" ? "nav.product.explore" : l === "solutions" ? "nav.solutions.explore" : "nav.resources.explore") })
                  ] })
                ] }),
                /* @__PURE__ */ r.jsx("div", { className: "w-full md:w-2/3", children: /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: R[l].items.filter((w) => l !== "resources" || !w.title.startsWith("vs ")).map((w, z) => /* @__PURE__ */ r.jsxs(
                  I,
                  {
                    href: w.href,
                    className: "flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group",
                    onClick: () => d(null),
                    children: [
                      /* @__PURE__ */ r.jsx("div", { className: "w-12 h-12 bg-[#8220ff]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#8220ff]/20 transition-colors", children: Ae.cloneElement(w.icon, { width: 16, height: 16 }) }),
                      /* @__PURE__ */ r.jsxs("div", { children: [
                        /* @__PURE__ */ r.jsx("h4", { className: "font-semibold text-gray-900 group-hover:text-[#8220ff] transition-colors", children: w.title }),
                        /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-1", children: w.description })
                      ] })
                    ]
                  },
                  z
                )) }) })
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
              Object.entries(R).map(([w, z]) => /* @__PURE__ */ r.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "font-semibold", children: z.title }),
                /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-1 gap-2", children: z.items.map((T, x) => /* @__PURE__ */ r.jsxs(
                  I,
                  {
                    href: T.href,
                    className: "flex items-center p-2 rounded-md bg-gray-50 hover:bg-gray-100",
                    onClick: () => a(!1),
                    children: [
                      /* @__PURE__ */ r.jsx("div", { className: "w-8 h-8 bg-primary/10 rounded-md mr-2 flex items-center justify-center", children: Ae.cloneElement(T.icon, { width: 16, height: 16 }) }),
                      /* @__PURE__ */ r.jsx("span", { className: "text-sm", children: T.title })
                    ]
                  },
                  x
                )) })
              ] }, w)),
              /* @__PURE__ */ r.jsx(
                I,
                {
                  href: `${j}${s}pricing`,
                  className: "block py-2 text-sm font-medium",
                  onClick: () => a(!1),
                  children: c("nav.pricing")
                }
              ),
              /* @__PURE__ */ r.jsx(
                I,
                {
                  href: `${j}${s}contact`,
                  className: "block py-2 text-sm font-medium",
                  onClick: () => a(!1),
                  children: c("nav.contact")
                }
              ),
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
    /* @__PURE__ */ r.jsx(Vt, { className: "absolute  text-muted-foreground pointer-events-none", style: { left: 1, paddingLeft: 6, width: 22 } }),
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
function pr({ lang: o, fullSiteUrl: e = "http://localhost:8000", fullBlogUrl: t = "http://localhost:9000" }) {
  const [s, i] = de("/"), { t: n, i18n: a } = Et();
  re(() => {
    a.changeLanguage(o), i(o !== "en" ? `/${o}/` : "/");
  }, []);
  const l = Le(e, Tt), d = Le(t, It);
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
          /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx(I, { href: `${d}`, className: "text-gray-600 hover:text-gray-900", children: n("footer.sections.resources.links.blog") }) }),
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
