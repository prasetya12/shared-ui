import * as g from "react";
import ge, { createContext as Es, useContext as Ns, useCallback as Ct, useState as at, useRef as Nt, useEffect as Te, useLayoutEffect as Rs, forwardRef as Mn, createElement as ir } from "react";
import * as Ft from "react-dom";
import Os from "react-dom";
var pt = { exports: {} }, rt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $r;
function Ps() {
  if ($r) return rt;
  $r = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function r(n, o, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      s = {};
      for (var l in o)
        l !== "key" && (s[l] = o[l]);
    } else s = o;
    return o = s.ref, {
      $$typeof: t,
      type: n,
      key: i,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return rt.Fragment = e, rt.jsx = r, rt.jsxs = r, rt;
}
var nt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Br;
function Ls() {
  return Br || (Br = 1, process.env.NODE_ENV !== "production" && function() {
    function t(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === I ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case u:
          return "Fragment";
        case w:
          return "Profiler";
        case m:
          return "StrictMode";
        case N:
          return "Suspense";
        case R:
          return "SuspenseList";
        case T:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case v:
            return "Portal";
          case b:
            return (S.displayName || "Context") + ".Provider";
          case y:
            return (S._context.displayName || "Context") + ".Consumer";
          case j:
            var A = S.render;
            return S = S.displayName, S || (S = A.displayName || A.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case k:
            return A = S.displayName || null, A !== null ? A : t(S.type) || "Memo";
          case C:
            A = S._payload, S = S._init;
            try {
              return t(S(A));
            } catch {
            }
        }
      return null;
    }
    function e(S) {
      return "" + S;
    }
    function r(S) {
      try {
        e(S);
        var A = !1;
      } catch {
        A = !0;
      }
      if (A) {
        A = console;
        var K = A.error, H = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return K.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          H
        ), e(S);
      }
    }
    function n(S) {
      if (S === u) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === C)
        return "<...>";
      try {
        var A = t(S);
        return A ? "<" + A + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var S = M.A;
      return S === null ? null : S.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(S) {
      if (B.call(S, "key")) {
        var A = Object.getOwnPropertyDescriptor(S, "key").get;
        if (A && A.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function l(S, A) {
      function K() {
        _ || (_ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      K.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: K,
        configurable: !0
      });
    }
    function c() {
      var S = t(this.type);
      return D[S] || (D[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function d(S, A, K, H, J, ee, ie, O) {
      return K = ee.ref, S = {
        $$typeof: x,
        type: S,
        key: A,
        props: ee,
        _owner: J
      }, (K !== void 0 ? K : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(S, "ref", { enumerable: !1, value: null }), S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(S, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(S, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ie
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function f(S, A, K, H, J, ee, ie, O) {
      var W = A.children;
      if (W !== void 0)
        if (H)
          if (G(W)) {
            for (H = 0; H < W.length; H++)
              h(W[H]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(W);
      if (B.call(A, "key")) {
        W = t(S);
        var Z = Object.keys(A).filter(function(X) {
          return X !== "key";
        });
        H = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", F[W + H] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          H,
          W,
          Z,
          W
        ), F[W + H] = !0);
      }
      if (W = null, K !== void 0 && (r(K), W = "" + K), i(A) && (r(A.key), W = "" + A.key), "key" in A) {
        K = {};
        for (var Y in A)
          Y !== "key" && (K[Y] = A[Y]);
      } else K = A;
      return W && l(
        K,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), d(
        S,
        W,
        ee,
        J,
        o(),
        K,
        ie,
        O
      );
    }
    function h(S) {
      typeof S == "object" && S !== null && S.$$typeof === x && S._store && (S._store.validated = 1);
    }
    var p = ge, x = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), b = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), I = Symbol.for("react.client.reference"), M = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, G = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(S) {
        return S();
      }
    };
    var _, D = {}, V = p["react-stack-bottom-frame"].bind(
      p,
      s
    )(), E = z(n(s)), F = {};
    nt.Fragment = u, nt.jsx = function(S, A, K, H, J) {
      var ee = 1e4 > M.recentlyCreatedOwnerStacks++;
      return f(
        S,
        A,
        K,
        !1,
        H,
        J,
        ee ? Error("react-stack-top-frame") : V,
        ee ? z(n(S)) : E
      );
    }, nt.jsxs = function(S, A, K, H, J) {
      var ee = 1e4 > M.recentlyCreatedOwnerStacks++;
      return f(
        S,
        A,
        K,
        !0,
        H,
        J,
        ee ? Error("react-stack-top-frame") : V,
        ee ? z(n(S)) : E
      );
    };
  }()), nt;
}
var zr;
function As() {
  return zr || (zr = 1, process.env.NODE_ENV === "production" ? pt.exports = Ps() : pt.exports = Ls()), pt.exports;
}
var a = As();
function In(t) {
  var e, r, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (r = In(t[e])) && (n && (n += " "), n += r);
  } else for (r in t) t[r] && (n && (n += " "), n += r);
  return n;
}
function Dn() {
  for (var t, e, r = 0, n = "", o = arguments.length; r < o; r++) (t = arguments[r]) && (e = In(t)) && (n && (n += " "), n += e);
  return n;
}
const Wr = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, Vr = Dn, Ts = (t, e) => (r) => {
  var n;
  if ((e == null ? void 0 : e.variants) == null) return Vr(t, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: s } = e, i = Object.keys(o).map((d) => {
    const f = r == null ? void 0 : r[d], h = s == null ? void 0 : s[d];
    if (f === null) return null;
    const p = Wr(f) || Wr(h);
    return o[d][p];
  }), l = r && Object.entries(r).reduce((d, f) => {
    let [h, p] = f;
    return p === void 0 || (d[h] = p), d;
  }, {}), c = e == null || (n = e.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((d, f) => {
    let { class: h, className: p, ...x } = f;
    return Object.entries(x).every((v) => {
      let [u, m] = v;
      return Array.isArray(m) ? m.includes({
        ...s,
        ...l
      }[u]) : {
        ...s,
        ...l
      }[u] === m;
    }) ? [
      ...d,
      h,
      p
    ] : d;
  }, []);
  return Vr(t, i, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, Er = "-", Ms = (t) => {
  const e = Ds(t), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = t;
  return {
    getClassGroupId: (i) => {
      const l = i.split(Er);
      return l[0] === "" && l.length !== 1 && l.shift(), _n(l, e) || Is(i);
    },
    getConflictingClassGroupIds: (i, l) => {
      const c = r[i] || [];
      return l && n[i] ? [...c, ...n[i]] : c;
    }
  };
}, _n = (t, e) => {
  var i;
  if (t.length === 0)
    return e.classGroupId;
  const r = t[0], n = e.nextPart.get(r), o = n ? _n(t.slice(1), n) : void 0;
  if (o)
    return o;
  if (e.validators.length === 0)
    return;
  const s = t.join(Er);
  return (i = e.validators.find(({
    validator: l
  }) => l(s))) == null ? void 0 : i.classGroupId;
}, Hr = /^\[(.+)\]$/, Is = (t) => {
  if (Hr.test(t)) {
    const e = Hr.exec(t)[1], r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Ds = (t) => {
  const {
    theme: e,
    classGroups: r
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    ar(r[o], n, o, e);
  return n;
}, ar = (t, e, r, n) => {
  t.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? e : Ur(e, o);
      s.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (_s(o)) {
        ar(o(n), e, r, n);
        return;
      }
      e.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      ar(i, Ur(e, s), r, n);
    });
  });
}, Ur = (t, e) => {
  let r = t;
  return e.split(Er).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, _s = (t) => t.isThemeGetter, Fs = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (s, i) => {
    r.set(s, i), e++, e > t && (e = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let i = r.get(s);
      if (i !== void 0)
        return i;
      if ((i = n.get(s)) !== void 0)
        return o(s, i), i;
    },
    set(s, i) {
      r.has(s) ? r.set(s, i) : o(s, i);
    }
  };
}, lr = "!", cr = ":", $s = cr.length, Bs = (t) => {
  const {
    prefix: e,
    experimentalParseClassName: r
  } = t;
  let n = (o) => {
    const s = [];
    let i = 0, l = 0, c = 0, d;
    for (let v = 0; v < o.length; v++) {
      let u = o[v];
      if (i === 0 && l === 0) {
        if (u === cr) {
          s.push(o.slice(c, v)), c = v + $s;
          continue;
        }
        if (u === "/") {
          d = v;
          continue;
        }
      }
      u === "[" ? i++ : u === "]" ? i-- : u === "(" ? l++ : u === ")" && l--;
    }
    const f = s.length === 0 ? o : o.substring(c), h = zs(f), p = h !== f, x = d && d > c ? d - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: x
    };
  };
  if (e) {
    const o = e + cr, s = n;
    n = (i) => i.startsWith(o) ? s(i.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: i,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const o = n;
    n = (s) => r({
      className: s,
      parseClassName: o
    });
  }
  return n;
}, zs = (t) => t.endsWith(lr) ? t.substring(0, t.length - 1) : t.startsWith(lr) ? t.substring(1) : t, Ws = (t) => {
  const e = Object.fromEntries(t.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const o = [];
    let s = [];
    return n.forEach((i) => {
      i[0] === "[" || e[i] ? (o.push(...s.sort(), i), s = []) : s.push(i);
    }), o.push(...s.sort()), o;
  };
}, Vs = (t) => ({
  cache: Fs(t.cacheSize),
  parseClassName: Bs(t),
  sortModifiers: Ws(t),
  ...Ms(t)
}), Hs = /\s+/, Us = (t, e) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = e, i = [], l = t.trim().split(Hs);
  let c = "";
  for (let d = l.length - 1; d >= 0; d -= 1) {
    const f = l[d], {
      isExternal: h,
      modifiers: p,
      hasImportantModifier: x,
      baseClassName: v,
      maybePostfixModifierPosition: u
    } = r(f);
    if (h) {
      c = f + (c.length > 0 ? " " + c : c);
      continue;
    }
    let m = !!u, w = n(m ? v.substring(0, u) : v);
    if (!w) {
      if (!m) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (w = n(v), !w) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      m = !1;
    }
    const y = s(p).join(":"), b = x ? y + lr : y, j = b + w;
    if (i.includes(j))
      continue;
    i.push(j);
    const N = o(w, m);
    for (let R = 0; R < N.length; ++R) {
      const k = N[R];
      i.push(b + k);
    }
    c = f + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function Gs() {
  let t = 0, e, r, n = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (r = Fn(e)) && (n && (n += " "), n += r);
  return n;
}
const Fn = (t) => {
  if (typeof t == "string")
    return t;
  let e, r = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (e = Fn(t[n])) && (r && (r += " "), r += e);
  return r;
};
function Ks(t, ...e) {
  let r, n, o, s = i;
  function i(c) {
    const d = e.reduce((f, h) => h(f), t());
    return r = Vs(d), n = r.cache.get, o = r.cache.set, s = l, l(c);
  }
  function l(c) {
    const d = n(c);
    if (d)
      return d;
    const f = Us(c, r);
    return o(c, f), f;
  }
  return function() {
    return s(Gs.apply(null, arguments));
  };
}
const ne = (t) => {
  const e = (r) => r[t] || [];
  return e.isThemeGetter = !0, e;
}, $n = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Bn = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ys = /^\d+\/\d+$/, Xs = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, qs = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Js = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Zs = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Qs = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, $e = (t) => Ys.test(t), U = (t) => !!t && !Number.isNaN(Number(t)), Ee = (t) => !!t && Number.isInteger(Number(t)), Yt = (t) => t.endsWith("%") && U(t.slice(0, -1)), be = (t) => Xs.test(t), ei = () => !0, ti = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  qs.test(t) && !Js.test(t)
), zn = () => !1, ri = (t) => Zs.test(t), ni = (t) => Qs.test(t), oi = (t) => !P(t) && !L(t), si = (t) => Ye(t, Hn, zn), P = (t) => $n.test(t), Ae = (t) => Ye(t, Un, ti), Xt = (t) => Ye(t, di, U), Gr = (t) => Ye(t, Wn, zn), ii = (t) => Ye(t, Vn, ni), gt = (t) => Ye(t, Gn, ri), L = (t) => Bn.test(t), ot = (t) => Xe(t, Un), ai = (t) => Xe(t, ui), Kr = (t) => Xe(t, Wn), li = (t) => Xe(t, Hn), ci = (t) => Xe(t, Vn), mt = (t) => Xe(t, Gn, !0), Ye = (t, e, r) => {
  const n = $n.exec(t);
  return n ? n[1] ? e(n[1]) : r(n[2]) : !1;
}, Xe = (t, e, r = !1) => {
  const n = Bn.exec(t);
  return n ? n[1] ? e(n[1]) : r : !1;
}, Wn = (t) => t === "position" || t === "percentage", Vn = (t) => t === "image" || t === "url", Hn = (t) => t === "length" || t === "size" || t === "bg-size", Un = (t) => t === "length", di = (t) => t === "number", ui = (t) => t === "family-name", Gn = (t) => t === "shadow", fi = () => {
  const t = ne("color"), e = ne("font"), r = ne("text"), n = ne("font-weight"), o = ne("tracking"), s = ne("leading"), i = ne("breakpoint"), l = ne("container"), c = ne("spacing"), d = ne("radius"), f = ne("shadow"), h = ne("inset-shadow"), p = ne("text-shadow"), x = ne("drop-shadow"), v = ne("blur"), u = ne("perspective"), m = ne("aspect"), w = ne("ease"), y = ne("animate"), b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], j = () => [
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
  ], N = () => [...j(), L, P], R = () => ["auto", "hidden", "clip", "visible", "scroll"], k = () => ["auto", "contain", "none"], C = () => [L, P, c], T = () => [$e, "full", "auto", ...C()], I = () => [Ee, "none", "subgrid", L, P], M = () => ["auto", {
    span: ["full", Ee, L, P]
  }, Ee, L, P], B = () => [Ee, "auto", L, P], G = () => ["auto", "min", "max", "fr", L, P], z = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], _ = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], D = () => ["auto", ...C()], V = () => [$e, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...C()], E = () => [t, L, P], F = () => [...j(), Kr, Gr, {
    position: [L, P]
  }], S = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], A = () => ["auto", "cover", "contain", li, si, {
    size: [L, P]
  }], K = () => [Yt, ot, Ae], H = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    L,
    P
  ], J = () => ["", U, ot, Ae], ee = () => ["solid", "dashed", "dotted", "double"], ie = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], O = () => [U, Yt, Kr, Gr], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    L,
    P
  ], Z = () => ["none", U, L, P], Y = () => ["none", U, L, P], X = () => [U, L, P], q = () => [$e, "full", ...C()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [be],
      breakpoint: [be],
      color: [ei],
      container: [be],
      "drop-shadow": [be],
      ease: ["in", "out", "in-out"],
      font: [oi],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [be],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [be],
      shadow: [be],
      spacing: ["px", U],
      text: [be],
      "text-shadow": [be],
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
        aspect: ["auto", "square", $e, P, L, m]
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
        columns: [U, P, L, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": b()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": b()
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
        object: N()
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
        overscroll: k()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": k()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": k()
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
        z: [Ee, "auto", L, P]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [$e, "full", "auto", l, ...C()]
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
        flex: [U, $e, "auto", "initial", "none", P]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", U, L, P]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", U, L, P]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ee, "first", "last", "none", L, P]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": I()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: M()
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
        "grid-rows": I()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: M()
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
        "auto-cols": G()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": G()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: C()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": C()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": C()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...z(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [..._(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ..._()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...z()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [..._(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ..._(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": z()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [..._(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ..._()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: C()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: C()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: C()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: C()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: C()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: C()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: C()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: C()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: C()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: D()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: D()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: D()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: D()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: D()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: D()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: D()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: D()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: D()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": C()
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
        "space-y": C()
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
        size: V()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...V()]
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
          ...V()
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
            screen: [i]
          },
          ...V()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...V()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...V()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...V()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, ot, Ae]
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
        font: [n, L, Xt]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Yt, P]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ai, P, e]
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
        tracking: [o, L, P]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [U, "none", L, Xt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...C()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", L, P]
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
        list: ["disc", "decimal", "none", L, P]
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
        placeholder: E()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: E()
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
        decoration: [...ee(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [U, "from-font", "auto", L, Ae]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: E()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [U, "auto", L, P]
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
        indent: C()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", L, P]
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
        content: ["none", L, P]
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
        bg: F()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: S()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: A()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ee, L, P],
          radial: ["", L, P],
          conic: [Ee, L, P]
        }, ci, ii]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: E()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: K()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: K()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: K()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: E()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: E()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: E()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: H()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": H()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": H()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": H()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": H()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": H()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": H()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": H()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": H()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": H()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": H()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": H()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": H()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": H()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": H()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: J()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": J()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": J()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": J()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": J()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": J()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": J()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": J()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": J()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": J()
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
        "divide-y": J()
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
        border: [...ee(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ee(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: E()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": E()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": E()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": E()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": E()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": E()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": E()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": E()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": E()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: E()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ee(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [U, L, P]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", U, ot, Ae]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: E()
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
          f,
          mt,
          gt
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: E()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", h, mt, gt]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": E()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: J()
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
        ring: E()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [U, Ae]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": E()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": J()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": E()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, mt, gt]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": E()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [U, L, P]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ie(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ie()
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
        "mask-linear": [U]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": O()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": O()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": E()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": E()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": O()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": O()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": E()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": E()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": O()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": O()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": E()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": E()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": O()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": O()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": E()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": E()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": O()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": O()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": E()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": E()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": O()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": O()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": E()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": E()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": O()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": O()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": E()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": E()
      }],
      "mask-image-radial": [{
        "mask-radial": [L, P]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": O()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": O()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": E()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": E()
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
        "mask-radial-at": j()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [U]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": O()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": O()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": E()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": E()
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
        mask: F()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: S()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: A()
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
        mask: ["none", L, P]
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
          L,
          P
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
        brightness: [U, L, P]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [U, L, P]
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
          mt,
          gt
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": E()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", U, L, P]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [U, L, P]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", U, L, P]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [U, L, P]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", U, L, P]
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
          L,
          P
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
        "backdrop-brightness": [U, L, P]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [U, L, P]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", U, L, P]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [U, L, P]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", U, L, P]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [U, L, P]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [U, L, P]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", U, L, P]
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
        "border-spacing": C()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": C()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": C()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", L, P]
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
        duration: [U, "initial", L, P]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, L, P]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [U, L, P]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, L, P]
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
        perspective: [u, L, P]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": N()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Z()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Z()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Z()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Z()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Y()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Y()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Y()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Y()
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
        skew: X()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": X()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": X()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [L, P, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: N()
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
        translate: q()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": q()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": q()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": q()
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
        accent: E()
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
        caret: E()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", L, P]
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
        "scroll-m": C()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": C()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": C()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": C()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": C()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": C()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": C()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": C()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": C()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": C()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": C()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": C()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": C()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": C()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": C()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": C()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": C()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": C()
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
        "will-change": ["auto", "scroll", "contents", "transform", L, P]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...E()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [U, ot, Ae, Xt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...E()]
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
}, hi = /* @__PURE__ */ Ks(fi);
function Ce(...t) {
  return hi(Dn(t));
}
const pi = Ts(
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
), dr = g.forwardRef(
  ({ className: t, variant: e, size: r, asChild: n = !1, ...o }, s) => /* @__PURE__ */ a.jsx("button", { className: Ce(pi({ variant: e, size: r, className: t })), ref: s, ...o })
);
dr.displayName = "Button";
const Q = ({ href: t, children: e, className: r = "", target: n = "_self", rel: o = "noopener noreferrer", onClick: s }) => {
  const i = (l) => {
    n !== "_blank" && (l.preventDefault(), window.location.href = t), s && s(l);
  };
  return /* @__PURE__ */ a.jsx(
    "a",
    {
      href: t,
      className: r,
      target: n,
      rel: o,
      onClick: i,
      "aria-label": typeof e == "string" ? e : void 0,
      children: e
    }
  );
}, gi = (t, e, r, n) => {
  var s, i, l, c;
  const o = [r, {
    code: e,
    ...n || {}
  }];
  if ((i = (s = t == null ? void 0 : t.services) == null ? void 0 : s.logger) != null && i.forward)
    return t.services.logger.forward(o, "warn", "react-i18next::", !0);
  Me(o[0]) && (o[0] = `react-i18next:: ${o[0]}`), (c = (l = t == null ? void 0 : t.services) == null ? void 0 : l.logger) != null && c.warn ? t.services.logger.warn(...o) : console != null && console.warn && console.warn(...o);
}, Yr = {}, ur = (t, e, r, n) => {
  Me(r) && Yr[r] || (Me(r) && (Yr[r] = /* @__PURE__ */ new Date()), gi(t, e, r, n));
}, Kn = (t, e) => () => {
  if (t.isInitialized)
    e();
  else {
    const r = () => {
      setTimeout(() => {
        t.off("initialized", r);
      }, 0), e();
    };
    t.on("initialized", r);
  }
}, fr = (t, e, r) => {
  t.loadNamespaces(e, Kn(t, r));
}, Xr = (t, e, r, n) => {
  if (Me(r) && (r = [r]), t.options.preload && t.options.preload.indexOf(e) > -1) return fr(t, r, n);
  r.forEach((o) => {
    t.options.ns.indexOf(o) < 0 && t.options.ns.push(o);
  }), t.loadLanguages(e, Kn(t, n));
}, mi = (t, e, r = {}) => !e.languages || !e.languages.length ? (ur(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: e.languages
}), !0) : e.hasLoadedNamespace(t, {
  lng: r.lng,
  precheck: (n, o) => {
    var s;
    if (((s = r.bindI18n) == null ? void 0 : s.indexOf("languageChanging")) > -1 && n.services.backendConnector.backend && n.isLanguageChangingTo && !o(n.isLanguageChangingTo, t)) return !1;
  }
}), Me = (t) => typeof t == "string", xi = (t) => typeof t == "object" && t !== null, vi = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, yi = {
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
}, wi = (t) => yi[t], bi = (t) => t.replace(vi, wi);
let hr = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: bi
};
const Si = (t = {}) => {
  hr = {
    ...hr,
    ...t
  };
}, Ci = () => hr;
let Yn;
const ji = (t) => {
  Yn = t;
}, ki = () => Yn, Ei = {
  type: "3rdParty",
  init(t) {
    Si(t.options.react), ji(t);
  }
}, Ni = Es();
class Ri {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((r) => {
      this.usedNamespaces[r] || (this.usedNamespaces[r] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const Oi = (t, e) => {
  const r = Nt();
  return Te(() => {
    r.current = t;
  }, [t, e]), r.current;
}, Xn = (t, e, r, n) => t.getFixedT(e, r, n), Pi = (t, e, r, n) => Ct(Xn(t, e, r, n), [t, e, r, n]), Li = (t, e = {}) => {
  var j, N, R, k;
  const {
    i18n: r
  } = e, {
    i18n: n,
    defaultNS: o
  } = Ns(Ni) || {}, s = r || n || ki();
  if (s && !s.reportNamespaces && (s.reportNamespaces = new Ri()), !s) {
    ur(s, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const C = (I, M) => Me(M) ? M : xi(M) && Me(M.defaultValue) ? M.defaultValue : Array.isArray(I) ? I[I.length - 1] : I, T = [C, {}, !1];
    return T.t = C, T.i18n = {}, T.ready = !1, T;
  }
  (j = s.options.react) != null && j.wait && ur(s, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const i = {
    ...Ci(),
    ...s.options.react,
    ...e
  }, {
    useSuspense: l,
    keyPrefix: c
  } = i;
  let d = o || ((N = s.options) == null ? void 0 : N.defaultNS);
  d = Me(d) ? [d] : d || ["translation"], (k = (R = s.reportNamespaces).addUsedNamespaces) == null || k.call(R, d);
  const f = (s.isInitialized || s.initializedStoreOnce) && d.every((C) => mi(C, s, i)), h = Pi(s, e.lng || null, i.nsMode === "fallback" ? d : d[0], c), p = () => h, x = () => Xn(s, e.lng || null, i.nsMode === "fallback" ? d : d[0], c), [v, u] = at(p);
  let m = d.join();
  e.lng && (m = `${e.lng}${m}`);
  const w = Oi(m), y = Nt(!0);
  Te(() => {
    const {
      bindI18n: C,
      bindI18nStore: T
    } = i;
    y.current = !0, !f && !l && (e.lng ? Xr(s, e.lng, d, () => {
      y.current && u(x);
    }) : fr(s, d, () => {
      y.current && u(x);
    })), f && w && w !== m && y.current && u(x);
    const I = () => {
      y.current && u(x);
    };
    return C && (s == null || s.on(C, I)), T && (s == null || s.store.on(T, I)), () => {
      y.current = !1, s && (C == null || C.split(" ").forEach((M) => s.off(M, I))), T && s && T.split(" ").forEach((M) => s.store.off(M, I));
    };
  }, [s, m]), Te(() => {
    y.current && f && u(p);
  }, [s, c, f]);
  const b = [v, s, f];
  if (b.t = v, b.i18n = s, b.ready = f, f || !f && !l) return b;
  throw new Promise((C) => {
    e.lng ? Xr(s, e.lng, d, () => C()) : fr(s, d, () => C());
  });
}, $ = (t) => typeof t == "string", st = () => {
  let t, e;
  const r = new Promise((n, o) => {
    t = n, e = o;
  });
  return r.resolve = t, r.reject = e, r;
}, qr = (t) => t == null ? "" : "" + t, Ai = (t, e, r) => {
  t.forEach((n) => {
    e[n] && (r[n] = e[n]);
  });
}, Ti = /###/g, Jr = (t) => t && t.indexOf("###") > -1 ? t.replace(Ti, ".") : t, Zr = (t) => !t || $(t), lt = (t, e, r) => {
  const n = $(e) ? e.split(".") : e;
  let o = 0;
  for (; o < n.length - 1; ) {
    if (Zr(t)) return {};
    const s = Jr(n[o]);
    !t[s] && r && (t[s] = new r()), Object.prototype.hasOwnProperty.call(t, s) ? t = t[s] : t = {}, ++o;
  }
  return Zr(t) ? {} : {
    obj: t,
    k: Jr(n[o])
  };
}, Qr = (t, e, r) => {
  const {
    obj: n,
    k: o
  } = lt(t, e, Object);
  if (n !== void 0 || e.length === 1) {
    n[o] = r;
    return;
  }
  let s = e[e.length - 1], i = e.slice(0, e.length - 1), l = lt(t, i, Object);
  for (; l.obj === void 0 && i.length; )
    s = `${i[i.length - 1]}.${s}`, i = i.slice(0, i.length - 1), l = lt(t, i, Object), l != null && l.obj && typeof l.obj[`${l.k}.${s}`] < "u" && (l.obj = void 0);
  l.obj[`${l.k}.${s}`] = r;
}, Mi = (t, e, r, n) => {
  const {
    obj: o,
    k: s
  } = lt(t, e, Object);
  o[s] = o[s] || [], o[s].push(r);
}, Rt = (t, e) => {
  const {
    obj: r,
    k: n
  } = lt(t, e);
  if (r && Object.prototype.hasOwnProperty.call(r, n))
    return r[n];
}, Ii = (t, e, r) => {
  const n = Rt(t, r);
  return n !== void 0 ? n : Rt(e, r);
}, qn = (t, e, r) => {
  for (const n in e)
    n !== "__proto__" && n !== "constructor" && (n in t ? $(t[n]) || t[n] instanceof String || $(e[n]) || e[n] instanceof String ? r && (t[n] = e[n]) : qn(t[n], e[n], r) : t[n] = e[n]);
  return t;
}, Be = (t) => t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Di = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const _i = (t) => $(t) ? t.replace(/[&<>"'\/]/g, (e) => Di[e]) : t;
class Fi {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const r = this.regExpMap.get(e);
    if (r !== void 0)
      return r;
    const n = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n;
  }
}
const $i = [" ", ",", "?", "!", ";"], Bi = new Fi(20), zi = (t, e, r) => {
  e = e || "", r = r || "";
  const n = $i.filter((i) => e.indexOf(i) < 0 && r.indexOf(i) < 0);
  if (n.length === 0) return !0;
  const o = Bi.getRegExp(`(${n.map((i) => i === "?" ? "\\?" : i).join("|")})`);
  let s = !o.test(t);
  if (!s) {
    const i = t.indexOf(r);
    i > 0 && !o.test(t.substring(0, i)) && (s = !0);
  }
  return s;
}, pr = function(t, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!t) return;
  if (t[e])
    return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0;
  const n = e.split(r);
  let o = t;
  for (let s = 0; s < n.length; ) {
    if (!o || typeof o != "object")
      return;
    let i, l = "";
    for (let c = s; c < n.length; ++c)
      if (c !== s && (l += r), l += n[c], i = o[l], i !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof i) > -1 && c < n.length - 1)
          continue;
        s += c - s + 1;
        break;
      }
    o = i;
  }
  return o;
}, Ot = (t) => t == null ? void 0 : t.replace("_", "-"), Wi = {
  type: "logger",
  log(t) {
    this.output("log", t);
  },
  warn(t) {
    this.output("warn", t);
  },
  error(t) {
    this.output("error", t);
  },
  output(t, e) {
    var r, n;
    (n = (r = console == null ? void 0 : console[t]) == null ? void 0 : r.apply) == null || n.call(r, console, e);
  }
};
class Pt {
  constructor(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, r);
  }
  init(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = r.prefix || "i18next:", this.logger = e || Wi, this.options = r, this.debug = r.debug;
  }
  log() {
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
      r[n] = arguments[n];
    return this.forward(r, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
      r[n] = arguments[n];
    return this.forward(r, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
      r[n] = arguments[n];
    return this.forward(r, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
      r[n] = arguments[n];
    return this.forward(r, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, r, n, o) {
    return o && !this.debug ? null : ($(e[0]) && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[r](e));
  }
  create(e) {
    return new Pt(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Pt(this.logger, e);
  }
}
var xe = new Pt();
class $t {
  constructor() {
    this.observers = {};
  }
  on(e, r) {
    return e.split(" ").forEach((n) => {
      this.observers[n] || (this.observers[n] = /* @__PURE__ */ new Map());
      const o = this.observers[n].get(r) || 0;
      this.observers[n].set(r, o + 1);
    }), this;
  }
  off(e, r) {
    if (this.observers[e]) {
      if (!r) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(r);
    }
  }
  emit(e) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((i) => {
      let [l, c] = i;
      for (let d = 0; d < c; d++)
        l(...n);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((i) => {
      let [l, c] = i;
      for (let d = 0; d < c; d++)
        l.apply(l, [e, ...n]);
    });
  }
}
class en extends $t {
  constructor(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = e || {}, this.options = r, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const r = this.options.ns.indexOf(e);
    r > -1 && this.options.ns.splice(r, 1);
  }
  getResource(e, r, n) {
    var d, f;
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const s = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, i = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let l;
    e.indexOf(".") > -1 ? l = e.split(".") : (l = [e, r], n && (Array.isArray(n) ? l.push(...n) : $(n) && s ? l.push(...n.split(s)) : l.push(n)));
    const c = Rt(this.data, l);
    return !c && !r && !n && e.indexOf(".") > -1 && (e = l[0], r = l[1], n = l.slice(2).join(".")), c || !i || !$(n) ? c : pr((f = (d = this.data) == null ? void 0 : d[e]) == null ? void 0 : f[r], n, s);
  }
  addResource(e, r, n, o) {
    let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const i = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let l = [e, r];
    n && (l = l.concat(i ? n.split(i) : n)), e.indexOf(".") > -1 && (l = e.split("."), o = r, r = l[1]), this.addNamespaces(r), Qr(this.data, l, o), s.silent || this.emit("added", e, r, n, o);
  }
  addResources(e, r, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const s in n)
      ($(n[s]) || Array.isArray(n[s])) && this.addResource(e, r, s, n[s], {
        silent: !0
      });
    o.silent || this.emit("added", e, r, n);
  }
  addResourceBundle(e, r, n, o, s) {
    let i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, l = [e, r];
    e.indexOf(".") > -1 && (l = e.split("."), o = n, n = r, r = l[1]), this.addNamespaces(r);
    let c = Rt(this.data, l) || {};
    i.skipCopy || (n = JSON.parse(JSON.stringify(n))), o ? qn(c, n, s) : c = {
      ...c,
      ...n
    }, Qr(this.data, l, c), i.silent || this.emit("added", e, r, n);
  }
  removeResourceBundle(e, r) {
    this.hasResourceBundle(e, r) && delete this.data[e][r], this.removeNamespaces(r), this.emit("removed", e, r);
  }
  hasResourceBundle(e, r) {
    return this.getResource(e, r) !== void 0;
  }
  getResourceBundle(e, r) {
    return r || (r = this.options.defaultNS), this.getResource(e, r);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const r = this.getDataByLanguage(e);
    return !!(r && Object.keys(r) || []).find((o) => r[o] && Object.keys(r[o]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Jn = {
  processors: {},
  addPostProcessor(t) {
    this.processors[t.name] = t;
  },
  handle(t, e, r, n, o) {
    return t.forEach((s) => {
      var i;
      e = ((i = this.processors[s]) == null ? void 0 : i.process(e, r, n, o)) ?? e;
    }), e;
  }
};
const tn = {}, rn = (t) => !$(t) && typeof t != "boolean" && typeof t != "number";
class Lt extends $t {
  constructor(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Ai(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = r, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = xe.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (e == null)
      return !1;
    const n = this.resolve(e, r);
    return (n == null ? void 0 : n.res) !== void 0;
  }
  extractFromKey(e, r) {
    let n = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
    n === void 0 && (n = ":");
    const o = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let s = r.ns || this.options.defaultNS || [];
    const i = n && e.indexOf(n) > -1, l = !this.options.userDefinedKeySeparator && !r.keySeparator && !this.options.userDefinedNsSeparator && !r.nsSeparator && !zi(e, n, o);
    if (i && !l) {
      const c = e.match(this.interpolator.nestingRegexp);
      if (c && c.length > 0)
        return {
          key: e,
          namespaces: $(s) ? [s] : s
        };
      const d = e.split(n);
      (n !== o || n === o && this.options.ns.indexOf(d[0]) > -1) && (s = d.shift()), e = d.join(o);
    }
    return {
      key: e,
      namespaces: $(s) ? [s] : s
    };
  }
  translate(e, r, n) {
    if (typeof r != "object" && this.options.overloadTranslationOptionHandler && (r = this.options.overloadTranslationOptionHandler(arguments)), typeof options == "object" && (r = {
      ...r
    }), r || (r = {}), e == null) return "";
    Array.isArray(e) || (e = [String(e)]);
    const o = r.returnDetails !== void 0 ? r.returnDetails : this.options.returnDetails, s = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator, {
      key: i,
      namespaces: l
    } = this.extractFromKey(e[e.length - 1], r), c = l[l.length - 1], d = r.lng || this.language, f = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((d == null ? void 0 : d.toLowerCase()) === "cimode") {
      if (f) {
        const M = r.nsSeparator || this.options.nsSeparator;
        return o ? {
          res: `${c}${M}${i}`,
          usedKey: i,
          exactUsedKey: i,
          usedLng: d,
          usedNS: c,
          usedParams: this.getUsedParamsDetails(r)
        } : `${c}${M}${i}`;
      }
      return o ? {
        res: i,
        usedKey: i,
        exactUsedKey: i,
        usedLng: d,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(r)
      } : i;
    }
    const h = this.resolve(e, r);
    let p = h == null ? void 0 : h.res;
    const x = (h == null ? void 0 : h.usedKey) || i, v = (h == null ? void 0 : h.exactUsedKey) || i, u = ["[object Number]", "[object Function]", "[object RegExp]"], m = r.joinArrays !== void 0 ? r.joinArrays : this.options.joinArrays, w = !this.i18nFormat || this.i18nFormat.handleAsObject, y = r.count !== void 0 && !$(r.count), b = Lt.hasDefaultValue(r), j = y ? this.pluralResolver.getSuffix(d, r.count, r) : "", N = r.ordinal && y ? this.pluralResolver.getSuffix(d, r.count, {
      ordinal: !1
    }) : "", R = y && !r.ordinal && r.count === 0, k = R && r[`defaultValue${this.options.pluralSeparator}zero`] || r[`defaultValue${j}`] || r[`defaultValue${N}`] || r.defaultValue;
    let C = p;
    w && !p && b && (C = k);
    const T = rn(C), I = Object.prototype.toString.apply(C);
    if (w && C && T && u.indexOf(I) < 0 && !($(m) && Array.isArray(C))) {
      if (!r.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const M = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(x, C, {
          ...r,
          ns: l
        }) : `key '${i} (${this.language})' returned an object instead of string.`;
        return o ? (h.res = M, h.usedParams = this.getUsedParamsDetails(r), h) : M;
      }
      if (s) {
        const M = Array.isArray(C), B = M ? [] : {}, G = M ? v : x;
        for (const z in C)
          if (Object.prototype.hasOwnProperty.call(C, z)) {
            const _ = `${G}${s}${z}`;
            b && !p ? B[z] = this.translate(_, {
              ...r,
              defaultValue: rn(k) ? k[z] : void 0,
              joinArrays: !1,
              ns: l
            }) : B[z] = this.translate(_, {
              ...r,
              joinArrays: !1,
              ns: l
            }), B[z] === _ && (B[z] = C[z]);
          }
        p = B;
      }
    } else if (w && $(m) && Array.isArray(p))
      p = p.join(m), p && (p = this.extendTranslation(p, e, r, n));
    else {
      let M = !1, B = !1;
      !this.isValidLookup(p) && b && (M = !0, p = k), this.isValidLookup(p) || (B = !0, p = i);
      const z = (r.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && B ? void 0 : p, _ = b && k !== p && this.options.updateMissing;
      if (B || M || _) {
        if (this.logger.log(_ ? "updateKey" : "missingKey", d, c, i, _ ? k : p), s) {
          const F = this.resolve(i, {
            ...r,
            keySeparator: !1
          });
          F && F.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let D = [];
        const V = this.languageUtils.getFallbackCodes(this.options.fallbackLng, r.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && V && V[0])
          for (let F = 0; F < V.length; F++)
            D.push(V[F]);
        else this.options.saveMissingTo === "all" ? D = this.languageUtils.toResolveHierarchy(r.lng || this.language) : D.push(r.lng || this.language);
        const E = (F, S, A) => {
          var H;
          const K = b && A !== p ? A : z;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(F, c, S, K, _, r) : (H = this.backendConnector) != null && H.saveMissing && this.backendConnector.saveMissing(F, c, S, K, _, r), this.emit("missingKey", F, c, S, p);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && y ? D.forEach((F) => {
          const S = this.pluralResolver.getSuffixes(F, r);
          R && r[`defaultValue${this.options.pluralSeparator}zero`] && S.indexOf(`${this.options.pluralSeparator}zero`) < 0 && S.push(`${this.options.pluralSeparator}zero`), S.forEach((A) => {
            E([F], i + A, r[`defaultValue${A}`] || k);
          });
        }) : E(D, i, k));
      }
      p = this.extendTranslation(p, e, r, h, n), B && p === i && this.options.appendNamespaceToMissingKey && (p = `${c}:${i}`), (B || M) && this.options.parseMissingKeyHandler && (p = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}:${i}` : i, M ? p : void 0, r));
    }
    return o ? (h.res = p, h.usedParams = this.getUsedParamsDetails(r), h) : p;
  }
  extendTranslation(e, r, n, o, s) {
    var d, f;
    var i = this;
    if ((d = this.i18nFormat) != null && d.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...n
      }, n.lng || this.language || o.usedLng, o.usedNS, o.usedKey, {
        resolved: o
      });
    else if (!n.skipInterpolation) {
      n.interpolation && this.interpolator.init({
        ...n,
        interpolation: {
          ...this.options.interpolation,
          ...n.interpolation
        }
      });
      const h = $(e) && (((f = n == null ? void 0 : n.interpolation) == null ? void 0 : f.skipOnVariables) !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let p;
      if (h) {
        const v = e.match(this.interpolator.nestingRegexp);
        p = v && v.length;
      }
      let x = n.replace && !$(n.replace) ? n.replace : n;
      if (this.options.interpolation.defaultVariables && (x = {
        ...this.options.interpolation.defaultVariables,
        ...x
      }), e = this.interpolator.interpolate(e, x, n.lng || this.language || o.usedLng, n), h) {
        const v = e.match(this.interpolator.nestingRegexp), u = v && v.length;
        p < u && (n.nest = !1);
      }
      !n.lng && o && o.res && (n.lng = this.language || o.usedLng), n.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var v = arguments.length, u = new Array(v), m = 0; m < v; m++)
          u[m] = arguments[m];
        return (s == null ? void 0 : s[0]) === u[0] && !n.context ? (i.logger.warn(`It seems you are nesting recursively key: ${u[0]} in key: ${r[0]}`), null) : i.translate(...u, r);
      }, n)), n.interpolation && this.interpolator.reset();
    }
    const l = n.postProcess || this.options.postProcess, c = $(l) ? [l] : l;
    return e != null && (c != null && c.length) && n.applyPostProcessor !== !1 && (e = Jn.handle(c, e, r, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...o,
        usedParams: this.getUsedParamsDetails(n)
      },
      ...n
    } : n, this)), e;
  }
  resolve(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, o, s, i, l;
    return $(e) && (e = [e]), e.forEach((c) => {
      if (this.isValidLookup(n)) return;
      const d = this.extractFromKey(c, r), f = d.key;
      o = f;
      let h = d.namespaces;
      this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
      const p = r.count !== void 0 && !$(r.count), x = p && !r.ordinal && r.count === 0, v = r.context !== void 0 && ($(r.context) || typeof r.context == "number") && r.context !== "", u = r.lngs ? r.lngs : this.languageUtils.toResolveHierarchy(r.lng || this.language, r.fallbackLng);
      h.forEach((m) => {
        var w, y;
        this.isValidLookup(n) || (l = m, !tn[`${u[0]}-${m}`] && ((w = this.utils) != null && w.hasLoadedNamespace) && !((y = this.utils) != null && y.hasLoadedNamespace(l)) && (tn[`${u[0]}-${m}`] = !0, this.logger.warn(`key "${o}" for languages "${u.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), u.forEach((b) => {
          var R;
          if (this.isValidLookup(n)) return;
          i = b;
          const j = [f];
          if ((R = this.i18nFormat) != null && R.addLookupKeys)
            this.i18nFormat.addLookupKeys(j, f, b, m, r);
          else {
            let k;
            p && (k = this.pluralResolver.getSuffix(b, r.count, r));
            const C = `${this.options.pluralSeparator}zero`, T = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (p && (j.push(f + k), r.ordinal && k.indexOf(T) === 0 && j.push(f + k.replace(T, this.options.pluralSeparator)), x && j.push(f + C)), v) {
              const I = `${f}${this.options.contextSeparator}${r.context}`;
              j.push(I), p && (j.push(I + k), r.ordinal && k.indexOf(T) === 0 && j.push(I + k.replace(T, this.options.pluralSeparator)), x && j.push(I + C));
            }
          }
          let N;
          for (; N = j.pop(); )
            this.isValidLookup(n) || (s = N, n = this.getResource(b, m, N, r));
        }));
      });
    }), {
      res: n,
      usedKey: o,
      exactUsedKey: s,
      usedLng: i,
      usedNS: l
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, r, n) {
    var s;
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (s = this.i18nFormat) != null && s.getResource ? this.i18nFormat.getResource(e, r, n, o) : this.resourceStore.getResource(e, r, n, o);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const r = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], n = e.replace && !$(e.replace);
    let o = n ? e.replace : e;
    if (n && typeof e.count < "u" && (o.count = e.count), this.options.interpolation.defaultVariables && (o = {
      ...this.options.interpolation.defaultVariables,
      ...o
    }), !n) {
      o = {
        ...o
      };
      for (const s of r)
        delete o[s];
    }
    return o;
  }
  static hasDefaultValue(e) {
    const r = "defaultValue";
    for (const n in e)
      if (Object.prototype.hasOwnProperty.call(e, n) && r === n.substring(0, r.length) && e[n] !== void 0)
        return !0;
    return !1;
  }
}
class nn {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = xe.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = Ot(e), !e || e.indexOf("-") < 0) return null;
    const r = e.split("-");
    return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(r.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = Ot(e), !e || e.indexOf("-") < 0) return e;
    const r = e.split("-");
    return this.formatLanguageCode(r[0]);
  }
  formatLanguageCode(e) {
    if ($(e) && e.indexOf("-") > -1) {
      let r;
      try {
        r = Intl.getCanonicalLocales(e)[0];
      } catch {
      }
      return r && this.options.lowerCaseLng && (r = r.toLowerCase()), r || (this.options.lowerCaseLng ? e.toLowerCase() : e);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let r;
    return e.forEach((n) => {
      if (r) return;
      const o = this.formatLanguageCode(n);
      (!this.options.supportedLngs || this.isSupportedCode(o)) && (r = o);
    }), !r && this.options.supportedLngs && e.forEach((n) => {
      if (r) return;
      const o = this.getScriptPartFromCode(n);
      if (this.isSupportedCode(o)) return r = o;
      const s = this.getLanguagePartFromCode(n);
      if (this.isSupportedCode(s)) return r = s;
      r = this.options.supportedLngs.find((i) => {
        if (i === s) return i;
        if (!(i.indexOf("-") < 0 && s.indexOf("-") < 0) && (i.indexOf("-") > 0 && s.indexOf("-") < 0 && i.substring(0, i.indexOf("-")) === s || i.indexOf(s) === 0 && s.length > 1))
          return i;
      });
    }), r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]), r;
  }
  getFallbackCodes(e, r) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(r)), $(e) && (e = [e]), Array.isArray(e)) return e;
    if (!r) return e.default || [];
    let n = e[r];
    return n || (n = e[this.getScriptPartFromCode(r)]), n || (n = e[this.formatLanguageCode(r)]), n || (n = e[this.getLanguagePartFromCode(r)]), n || (n = e.default), n || [];
  }
  toResolveHierarchy(e, r) {
    const n = this.getFallbackCodes(r || this.options.fallbackLng || [], e), o = [], s = (i) => {
      i && (this.isSupportedCode(i) ? o.push(i) : this.logger.warn(`rejecting language code not found in supportedLngs: ${i}`));
    };
    return $(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(e))) : $(e) && s(this.formatLanguageCode(e)), n.forEach((i) => {
      o.indexOf(i) < 0 && s(this.formatLanguageCode(i));
    }), o;
  }
}
const on = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, sn = {
  select: (t) => t === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Vi {
  constructor(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = r, this.logger = xe.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, r) {
    this.rules[e] = r;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = Ot(e === "dev" ? "en" : e), o = r.ordinal ? "ordinal" : "cardinal", s = JSON.stringify({
      cleanedCode: n,
      type: o
    });
    if (s in this.pluralRulesCache)
      return this.pluralRulesCache[s];
    let i;
    try {
      i = new Intl.PluralRules(n, {
        type: o
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), sn;
      if (!e.match(/-|_/)) return sn;
      const c = this.languageUtils.getLanguagePartFromCode(e);
      i = this.getRule(c, r);
    }
    return this.pluralRulesCache[s] = i, i;
  }
  needsPlural(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = this.getRule(e, r);
    return n || (n = this.getRule("dev", r)), (n == null ? void 0 : n.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(e, r) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, n).map((o) => `${r}${o}`);
  }
  getSuffixes(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = this.getRule(e, r);
    return n || (n = this.getRule("dev", r)), n ? n.resolvedOptions().pluralCategories.sort((o, s) => on[o] - on[s]).map((o) => `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : [];
  }
  getSuffix(e, r) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const o = this.getRule(e, n);
    return o ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o.select(r)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", r, n));
  }
}
const an = function(t, e, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = Ii(t, e, r);
  return !s && o && $(r) && (s = pr(t, r, n), s === void 0 && (s = pr(e, r, n))), s;
}, qt = (t) => t.replace(/\$/g, "$$$$");
class Hi {
  constructor() {
    var r;
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = xe.create("interpolator"), this.options = e, this.format = ((r = e == null ? void 0 : e.interpolation) == null ? void 0 : r.format) || ((n) => n), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: r,
      escapeValue: n,
      useRawValueToEscape: o,
      prefix: s,
      prefixEscaped: i,
      suffix: l,
      suffixEscaped: c,
      formatSeparator: d,
      unescapeSuffix: f,
      unescapePrefix: h,
      nestingPrefix: p,
      nestingPrefixEscaped: x,
      nestingSuffix: v,
      nestingSuffixEscaped: u,
      nestingOptionsSeparator: m,
      maxReplaces: w,
      alwaysFormat: y
    } = e.interpolation;
    this.escape = r !== void 0 ? r : _i, this.escapeValue = n !== void 0 ? n : !0, this.useRawValueToEscape = o !== void 0 ? o : !1, this.prefix = s ? Be(s) : i || "{{", this.suffix = l ? Be(l) : c || "}}", this.formatSeparator = d || ",", this.unescapePrefix = f ? "" : h || "-", this.unescapeSuffix = this.unescapePrefix ? "" : f || "", this.nestingPrefix = p ? Be(p) : x || Be("$t("), this.nestingSuffix = v ? Be(v) : u || Be(")"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = w || 1e3, this.alwaysFormat = y !== void 0 ? y : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (r, n) => (r == null ? void 0 : r.source) === n ? (r.lastIndex = 0, r) : new RegExp(n, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, r, n, o) {
    var x;
    let s, i, l;
    const c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, d = (v) => {
      if (v.indexOf(this.formatSeparator) < 0) {
        const y = an(r, c, v, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(y, void 0, n, {
          ...o,
          ...r,
          interpolationkey: v
        }) : y;
      }
      const u = v.split(this.formatSeparator), m = u.shift().trim(), w = u.join(this.formatSeparator).trim();
      return this.format(an(r, c, m, this.options.keySeparator, this.options.ignoreJSONStructure), w, n, {
        ...o,
        ...r,
        interpolationkey: m
      });
    };
    this.resetRegExp();
    const f = (o == null ? void 0 : o.missingInterpolationHandler) || this.options.missingInterpolationHandler, h = ((x = o == null ? void 0 : o.interpolation) == null ? void 0 : x.skipOnVariables) !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (v) => qt(v)
    }, {
      regex: this.regexp,
      safeValue: (v) => this.escapeValue ? qt(this.escape(v)) : qt(v)
    }].forEach((v) => {
      for (l = 0; s = v.regex.exec(e); ) {
        const u = s[1].trim();
        if (i = d(u), i === void 0)
          if (typeof f == "function") {
            const w = f(e, s, o);
            i = $(w) ? w : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, u))
            i = "";
          else if (h) {
            i = s[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${u} for interpolating ${e}`), i = "";
        else !$(i) && !this.useRawValueToEscape && (i = qr(i));
        const m = v.safeValue(i);
        if (e = e.replace(s[0], m), h ? (v.regex.lastIndex += i.length, v.regex.lastIndex -= s[0].length) : v.regex.lastIndex = 0, l++, l >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, r) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o, s, i;
    const l = (c, d) => {
      const f = this.nestingOptionsSeparator;
      if (c.indexOf(f) < 0) return c;
      const h = c.split(new RegExp(`${f}[ ]*{`));
      let p = `{${h[1]}`;
      c = h[0], p = this.interpolate(p, i);
      const x = p.match(/'/g), v = p.match(/"/g);
      (((x == null ? void 0 : x.length) ?? 0) % 2 === 0 && !v || v.length % 2 !== 0) && (p = p.replace(/'/g, '"'));
      try {
        i = JSON.parse(p), d && (i = {
          ...d,
          ...i
        });
      } catch (u) {
        return this.logger.warn(`failed parsing options string in nesting for key ${c}`, u), `${c}${f}${p}`;
      }
      return i.defaultValue && i.defaultValue.indexOf(this.prefix) > -1 && delete i.defaultValue, c;
    };
    for (; o = this.nestingRegexp.exec(e); ) {
      let c = [];
      i = {
        ...n
      }, i = i.replace && !$(i.replace) ? i.replace : i, i.applyPostProcessor = !1, delete i.defaultValue;
      let d = !1;
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const f = o[1].split(this.formatSeparator).map((h) => h.trim());
        o[1] = f.shift(), c = f, d = !0;
      }
      if (s = r(l.call(this, o[1].trim(), i), i), s && o[0] === e && !$(s)) return s;
      $(s) || (s = qr(s)), s || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`), s = ""), d && (s = c.reduce((f, h) => this.format(f, h, n.lng, {
        ...n,
        interpolationkey: o[1].trim()
      }), s.trim())), e = e.replace(o[0], s), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const Ui = (t) => {
  let e = t.toLowerCase().trim();
  const r = {};
  if (t.indexOf("(") > -1) {
    const n = t.split("(");
    e = n[0].toLowerCase().trim();
    const o = n[1].substring(0, n[1].length - 1);
    e === "currency" && o.indexOf(":") < 0 ? r.currency || (r.currency = o.trim()) : e === "relativetime" && o.indexOf(":") < 0 ? r.range || (r.range = o.trim()) : o.split(";").forEach((i) => {
      if (i) {
        const [l, ...c] = i.split(":"), d = c.join(":").trim().replace(/^'+|'+$/g, ""), f = l.trim();
        r[f] || (r[f] = d), d === "false" && (r[f] = !1), d === "true" && (r[f] = !0), isNaN(d) || (r[f] = parseInt(d, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: r
  };
}, ze = (t) => {
  const e = {};
  return (r, n, o) => {
    let s = o;
    o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey] && (s = {
      ...s,
      [o.interpolationkey]: void 0
    });
    const i = n + JSON.stringify(s);
    let l = e[i];
    return l || (l = t(Ot(n), o), e[i] = l), l(r);
  };
};
class Gi {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = xe.create("formatter"), this.options = e, this.formats = {
      number: ze((r, n) => {
        const o = new Intl.NumberFormat(r, {
          ...n
        });
        return (s) => o.format(s);
      }),
      currency: ze((r, n) => {
        const o = new Intl.NumberFormat(r, {
          ...n,
          style: "currency"
        });
        return (s) => o.format(s);
      }),
      datetime: ze((r, n) => {
        const o = new Intl.DateTimeFormat(r, {
          ...n
        });
        return (s) => o.format(s);
      }),
      relativetime: ze((r, n) => {
        const o = new Intl.RelativeTimeFormat(r, {
          ...n
        });
        return (s) => o.format(s, n.range || "day");
      }),
      list: ze((r, n) => {
        const o = new Intl.ListFormat(r, {
          ...n
        });
        return (s) => o.format(s);
      })
    }, this.init(e);
  }
  init(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = r.interpolation.formatSeparator || ",";
  }
  add(e, r) {
    this.formats[e.toLowerCase().trim()] = r;
  }
  addCached(e, r) {
    this.formats[e.toLowerCase().trim()] = ze(r);
  }
  format(e, r, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const s = r.split(this.formatSeparator);
    if (s.length > 1 && s[0].indexOf("(") > 1 && s[0].indexOf(")") < 0 && s.find((l) => l.indexOf(")") > -1)) {
      const l = s.findIndex((c) => c.indexOf(")") > -1);
      s[0] = [s[0], ...s.splice(1, l)].join(this.formatSeparator);
    }
    return s.reduce((l, c) => {
      var h;
      const {
        formatName: d,
        formatOptions: f
      } = Ui(c);
      if (this.formats[d]) {
        let p = l;
        try {
          const x = ((h = o == null ? void 0 : o.formatParams) == null ? void 0 : h[o.interpolationkey]) || {}, v = x.locale || x.lng || o.locale || o.lng || n;
          p = this.formats[d](l, v, {
            ...f,
            ...o,
            ...x
          });
        } catch (x) {
          this.logger.warn(x);
        }
        return p;
      } else
        this.logger.warn(`there was no format function for ${d}`);
      return l;
    }, e);
  }
}
const Ki = (t, e) => {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--);
};
class Yi extends $t {
  constructor(e, r, n) {
    var s, i;
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = r, this.services = n, this.languageUtils = n.languageUtils, this.options = o, this.logger = xe.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], (i = (s = this.backend) == null ? void 0 : s.init) == null || i.call(s, n, o.backend, o);
  }
  queueLoad(e, r, n, o) {
    const s = {}, i = {}, l = {}, c = {};
    return e.forEach((d) => {
      let f = !0;
      r.forEach((h) => {
        const p = `${d}|${h}`;
        !n.reload && this.store.hasResourceBundle(d, h) ? this.state[p] = 2 : this.state[p] < 0 || (this.state[p] === 1 ? i[p] === void 0 && (i[p] = !0) : (this.state[p] = 1, f = !1, i[p] === void 0 && (i[p] = !0), s[p] === void 0 && (s[p] = !0), c[h] === void 0 && (c[h] = !0)));
      }), f || (l[d] = !0);
    }), (Object.keys(s).length || Object.keys(i).length) && this.queue.push({
      pending: i,
      pendingCount: Object.keys(i).length,
      loaded: {},
      errors: [],
      callback: o
    }), {
      toLoad: Object.keys(s),
      pending: Object.keys(i),
      toLoadLanguages: Object.keys(l),
      toLoadNamespaces: Object.keys(c)
    };
  }
  loaded(e, r, n) {
    const o = e.split("|"), s = o[0], i = o[1];
    r && this.emit("failedLoading", s, i, r), !r && n && this.store.addResourceBundle(s, i, n, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = r ? -1 : 2, r && n && (this.state[e] = 0);
    const l = {};
    this.queue.forEach((c) => {
      Mi(c.loaded, [s], i), Ki(c, e), r && c.errors.push(r), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((d) => {
        l[d] || (l[d] = {});
        const f = c.loaded[d];
        f.length && f.forEach((h) => {
          l[d][h] === void 0 && (l[d][h] = !0);
        });
      }), c.done = !0, c.errors.length ? c.callback(c.errors) : c.callback());
    }), this.emit("loaded", l), this.queue = this.queue.filter((c) => !c.done);
  }
  read(e, r, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, i = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return i(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: r,
        fcName: n,
        tried: o,
        wait: s,
        callback: i
      });
      return;
    }
    this.readingCalls++;
    const l = (d, f) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const h = this.waitingReads.shift();
        this.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback);
      }
      if (d && f && o < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, r, n, o + 1, s * 2, i);
        }, s);
        return;
      }
      i(d, f);
    }, c = this.backend[n].bind(this.backend);
    if (c.length === 2) {
      try {
        const d = c(e, r);
        d && typeof d.then == "function" ? d.then((f) => l(null, f)).catch(l) : l(null, d);
      } catch (d) {
        l(d);
      }
      return;
    }
    return c(e, r, l);
  }
  prepareLoading(e, r) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
    $(e) && (e = this.languageUtils.toResolveHierarchy(e)), $(r) && (r = [r]);
    const s = this.queueLoad(e, r, n, o);
    if (!s.toLoad.length)
      return s.pending.length || o(), null;
    s.toLoad.forEach((i) => {
      this.loadOne(i);
    });
  }
  load(e, r, n) {
    this.prepareLoading(e, r, {}, n);
  }
  reload(e, r, n) {
    this.prepareLoading(e, r, {
      reload: !0
    }, n);
  }
  loadOne(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const n = e.split("|"), o = n[0], s = n[1];
    this.read(o, s, "read", void 0, void 0, (i, l) => {
      i && this.logger.warn(`${r}loading namespace ${s} for language ${o} failed`, i), !i && l && this.logger.log(`${r}loaded namespace ${s} for language ${o}`, l), this.loaded(e, i, l);
    });
  }
  saveMissing(e, r, n, o, s) {
    var c, d, f, h, p;
    let i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, l = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if ((d = (c = this.services) == null ? void 0 : c.utils) != null && d.hasLoadedNamespace && !((h = (f = this.services) == null ? void 0 : f.utils) != null && h.hasLoadedNamespace(r))) {
      this.logger.warn(`did not save key "${n}" as the namespace "${r}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(n == null || n === "")) {
      if ((p = this.backend) != null && p.create) {
        const x = {
          ...i,
          isUpdate: s
        }, v = this.backend.create.bind(this.backend);
        if (v.length < 6)
          try {
            let u;
            v.length === 5 ? u = v(e, r, n, o, x) : u = v(e, r, n, o), u && typeof u.then == "function" ? u.then((m) => l(null, m)).catch(l) : l(null, u);
          } catch (u) {
            l(u);
          }
        else
          v(e, r, n, o, l, x);
      }
      !e || !e[0] || this.store.addResource(e[0], r, n, o);
    }
  }
}
const ln = () => ({
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
  overloadTranslationOptionHandler: (t) => {
    let e = {};
    if (typeof t[1] == "object" && (e = t[1]), $(t[1]) && (e.defaultValue = t[1]), $(t[2]) && (e.tDescription = t[2]), typeof t[2] == "object" || typeof t[3] == "object") {
      const r = t[3] || t[2];
      Object.keys(r).forEach((n) => {
        e[n] = r[n];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (t) => t,
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
}), cn = (t) => {
  var e, r;
  return $(t.ns) && (t.ns = [t.ns]), $(t.fallbackLng) && (t.fallbackLng = [t.fallbackLng]), $(t.fallbackNS) && (t.fallbackNS = [t.fallbackNS]), ((r = (e = t.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : r.call(e, "cimode")) < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), typeof t.initImmediate == "boolean" && (t.initAsync = t.initImmediate), t;
}, xt = () => {
}, Xi = (t) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach((r) => {
    typeof t[r] == "function" && (t[r] = t[r].bind(t));
  });
};
class ct extends $t {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = cn(e), this.services = {}, this.logger = xe, this.modules = {
      external: []
    }, Xi(this), r && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, r), this;
      setTimeout(() => {
        this.init(e, r);
      }, 0);
    }
  }
  init() {
    var e = this;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof r == "function" && (n = r, r = {}), r.defaultNS == null && r.ns && ($(r.ns) ? r.defaultNS = r.ns : r.ns.indexOf("translation") < 0 && (r.defaultNS = r.ns[0]));
    const o = ln();
    this.options = {
      ...o,
      ...this.options,
      ...cn(r)
    }, this.options.interpolation = {
      ...o.interpolation,
      ...this.options.interpolation
    }, r.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = r.keySeparator), r.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = r.nsSeparator);
    const s = (f) => f ? typeof f == "function" ? new f() : f : null;
    if (!this.options.isClone) {
      this.modules.logger ? xe.init(s(this.modules.logger), this.options) : xe.init(null, this.options);
      let f;
      this.modules.formatter ? f = this.modules.formatter : f = Gi;
      const h = new nn(this.options);
      this.store = new en(this.options.resources, this.options);
      const p = this.services;
      p.logger = xe, p.resourceStore = this.store, p.languageUtils = h, p.pluralResolver = new Vi(h, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), f && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (p.formatter = s(f), p.formatter.init(p, this.options), this.options.interpolation.format = p.formatter.format.bind(p.formatter)), p.interpolator = new Hi(this.options), p.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, p.backendConnector = new Yi(s(this.modules.backend), p.resourceStore, p, this.options), p.backendConnector.on("*", function(x) {
        for (var v = arguments.length, u = new Array(v > 1 ? v - 1 : 0), m = 1; m < v; m++)
          u[m - 1] = arguments[m];
        e.emit(x, ...u);
      }), this.modules.languageDetector && (p.languageDetector = s(this.modules.languageDetector), p.languageDetector.init && p.languageDetector.init(p, this.options.detection, this.options)), this.modules.i18nFormat && (p.i18nFormat = s(this.modules.i18nFormat), p.i18nFormat.init && p.i18nFormat.init(this)), this.translator = new Lt(this.services, this.options), this.translator.on("*", function(x) {
        for (var v = arguments.length, u = new Array(v > 1 ? v - 1 : 0), m = 1; m < v; m++)
          u[m - 1] = arguments[m];
        e.emit(x, ...u);
      }), this.modules.external.forEach((x) => {
        x.init && x.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = xt), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const f = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      f.length > 0 && f[0] !== "dev" && (this.options.lng = f[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((f) => {
      this[f] = function() {
        return e.store[f](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((f) => {
      this[f] = function() {
        return e.store[f](...arguments), e;
      };
    });
    const c = st(), d = () => {
      const f = (h, p) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), c.resolve(p), n(h, p);
      };
      if (this.languages && !this.isInitialized) return f(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, f);
    };
    return this.options.resources || !this.options.initAsync ? d() : setTimeout(d, 0), c;
  }
  loadResources(e) {
    var s, i;
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xt;
    const o = $(e) ? e : this.language;
    if (typeof e == "function" && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((o == null ? void 0 : o.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return n();
      const l = [], c = (d) => {
        if (!d || d === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(d).forEach((h) => {
          h !== "cimode" && l.indexOf(h) < 0 && l.push(h);
        });
      };
      o ? c(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((f) => c(f)), (i = (s = this.options.preload) == null ? void 0 : s.forEach) == null || i.call(s, (d) => c(d)), this.services.backendConnector.load(l, this.options.ns, (d) => {
        !d && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(d);
      });
    } else
      n(null);
  }
  reloadResources(e, r, n) {
    const o = st();
    return typeof e == "function" && (n = e, e = void 0), typeof r == "function" && (n = r, r = void 0), e || (e = this.languages), r || (r = this.options.ns), n || (n = xt), this.services.backendConnector.reload(e, r, (s) => {
      o.resolve(), n(s);
    }), o;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Jn.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
      for (let r = 0; r < this.languages.length; r++) {
        const n = this.languages[r];
        if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
          this.resolvedLanguage = n;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(e) < 0 && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
    }
  }
  changeLanguage(e, r) {
    var n = this;
    this.isLanguageChangingTo = e;
    const o = st();
    this.emit("languageChanging", e);
    const s = (c) => {
      this.language = c, this.languages = this.services.languageUtils.toResolveHierarchy(c), this.resolvedLanguage = void 0, this.setResolvedLanguage(c);
    }, i = (c, d) => {
      d ? this.isLanguageChangingTo === e && (s(d), this.translator.changeLanguage(d), this.isLanguageChangingTo = void 0, this.emit("languageChanged", d), this.logger.log("languageChanged", d)) : this.isLanguageChangingTo = void 0, o.resolve(function() {
        return n.t(...arguments);
      }), r && r(c, function() {
        return n.t(...arguments);
      });
    }, l = (c) => {
      var h, p;
      !e && !c && this.services.languageDetector && (c = []);
      const d = $(c) ? c : c && c[0], f = this.store.hasLanguageSomeTranslations(d) ? d : this.services.languageUtils.getBestMatchFromCodes($(c) ? [c] : c);
      f && (this.language || s(f), this.translator.language || this.translator.changeLanguage(f), (p = (h = this.services.languageDetector) == null ? void 0 : h.cacheUserLanguage) == null || p.call(h, f)), this.loadResources(f, (x) => {
        i(x, f);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? l(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(l) : this.services.languageDetector.detect(l) : l(e), o;
  }
  getFixedT(e, r, n) {
    var o = this;
    const s = function(i, l) {
      let c;
      if (typeof l != "object") {
        for (var d = arguments.length, f = new Array(d > 2 ? d - 2 : 0), h = 2; h < d; h++)
          f[h - 2] = arguments[h];
        c = o.options.overloadTranslationOptionHandler([i, l].concat(f));
      } else
        c = {
          ...l
        };
      c.lng = c.lng || s.lng, c.lngs = c.lngs || s.lngs, c.ns = c.ns || s.ns, c.keyPrefix !== "" && (c.keyPrefix = c.keyPrefix || n || s.keyPrefix);
      const p = o.options.keySeparator || ".";
      let x;
      return c.keyPrefix && Array.isArray(i) ? x = i.map((v) => `${c.keyPrefix}${p}${v}`) : x = c.keyPrefix ? `${c.keyPrefix}${p}${i}` : i, o.t(x, c);
    };
    return $(e) ? s.lng = e : s.lngs = e, s.ns = r, s.keyPrefix = n, s;
  }
  t() {
    var o;
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
      r[n] = arguments[n];
    return (o = this.translator) == null ? void 0 : o.translate(...r);
  }
  exists() {
    var o;
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
      r[n] = arguments[n];
    return (o = this.translator) == null ? void 0 : o.exists(...r);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const n = r.lng || this.resolvedLanguage || this.languages[0], o = this.options ? this.options.fallbackLng : !1, s = this.languages[this.languages.length - 1];
    if (n.toLowerCase() === "cimode") return !0;
    const i = (l, c) => {
      const d = this.services.backendConnector.state[`${l}|${c}`];
      return d === -1 || d === 0 || d === 2;
    };
    if (r.precheck) {
      const l = r.precheck(this, i);
      if (l !== void 0) return l;
    }
    return !!(this.hasResourceBundle(n, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || i(n, e) && (!o || i(s, e)));
  }
  loadNamespaces(e, r) {
    const n = st();
    return this.options.ns ? ($(e) && (e = [e]), e.forEach((o) => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources((o) => {
      n.resolve(), r && r(o);
    }), n) : (r && r(), Promise.resolve());
  }
  loadLanguages(e, r) {
    const n = st();
    $(e) && (e = [e]);
    const o = this.options.preload || [], s = e.filter((i) => o.indexOf(i) < 0 && this.services.languageUtils.isSupportedCode(i));
    return s.length ? (this.options.preload = o.concat(s), this.loadResources((i) => {
      n.resolve(), r && r(i);
    }), n) : (r && r(), Promise.resolve());
  }
  dir(e) {
    var o, s;
    if (e || (e = this.resolvedLanguage || (((o = this.languages) == null ? void 0 : o.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const r = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = ((s = this.services) == null ? void 0 : s.languageUtils) || new nn(ln());
    return r.indexOf(n.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    return new ct(e, r);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xt;
    const n = e.forkResourceStore;
    n && delete e.forkResourceStore;
    const o = {
      ...this.options,
      ...e,
      isClone: !0
    }, s = new ct(o);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (s.logger = s.logger.clone(e)), ["store", "services", "language"].forEach((l) => {
      s[l] = this[l];
    }), s.services = {
      ...this.services
    }, s.services.utils = {
      hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
    }, n) {
      const l = Object.keys(this.store.data).reduce((c, d) => (c[d] = {
        ...this.store.data[d]
      }, c[d] = Object.keys(c[d]).reduce((f, h) => (f[h] = {
        ...c[d][h]
      }, f), c[d]), c), {});
      s.store = new en(l, o), s.services.resourceStore = s.store;
    }
    return s.translator = new Lt(s.services, o), s.translator.on("*", function(l) {
      for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++)
        d[f - 1] = arguments[f];
      s.emit(l, ...d);
    }), s.init(o, r), s.translator.options = o, s.translator.backendConnector.services.utils = {
      hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
    }, s;
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
const se = ct.createInstance();
se.createInstance = ct.createInstance;
se.createInstance;
se.dir;
se.init;
se.loadResources;
se.reloadResources;
se.use;
se.changeLanguage;
se.getFixedT;
se.t;
se.exists;
se.setDefaultNamespace;
se.hasLoadedNamespace;
se.loadNamespaces;
se.loadLanguages;
var Zn = { nav: {
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
Zn.nav;
var Qn = { nav: {
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
Qn.nav;
se.use(Ei).init({
  lng: "en",
  supportedLngs: ["en", "es"],
  resources: {
    en: { translation: Zn },
    es: { translation: Qn }
  },
  fallbackLng: "en",
  react: { useSuspense: !1 }
});
const Cd = () => {
  const [t, e] = at(!1), [r, n] = at(null), o = Nt(null), s = "http://localhost:7000", { t: i, i18n: l } = Li();
  Te(() => {
    const u = window.location.pathname.split("/")[1];
    console.log(u, "a"), ["en", "es"].includes(u) && (console.log(u, "a"), l.changeLanguage(u));
  }, []);
  const [c, d] = at(!1);
  Te(() => {
    const u = () => {
      const m = window.scrollY;
      d(m > 50);
    };
    return window.addEventListener("scroll", u), u(), () => {
      window.removeEventListener("scroll", u);
    };
  }, []);
  const f = Ct((u) => {
    o.current && (clearTimeout(o.current), o.current = null), n(u);
  }, []), h = Nt([]), p = Ct(() => {
    const u = setTimeout(() => {
      n(null);
    }, 150);
    o.current = u, h.current.push(u);
  }, []);
  Te(() => () => {
    o.current && clearTimeout(o.current), h.current.forEach(clearTimeout), h.current = [];
  }, []);
  const x = Ct(
    (u) => {
      n(r === u ? null : u);
    },
    [r]
  ), v = {
    products: {
      title: i("nav.product"),
      shortTitle: "Product",
      image: "product-diagram",
      items: [
        {
          title: i("nav.product_menu.aspm_overview.title"),
          description: i("nav.product_menu.aspm_overview.description"),
          href: "/products/aspm",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                /* @__PURE__ */ a.jsx("path", { d: "M12 16v-4" }),
                /* @__PURE__ */ a.jsx("path", { d: "M12 8h.01" })
              ]
            }
          )
        },
        {
          title: "Benefits",
          description: "See how Plexicus transforms security",
          href: "/products/benefits",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("path", { d: "m9 12 2 2 4-4" }),
                /* @__PURE__ */ a.jsx("path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" }),
                /* @__PURE__ */ a.jsx("path", { d: "M22 19H2" })
              ]
            }
          )
        },
        {
          title: "Use Cases",
          description: "Real-world implementation examples",
          href: "/products/use-cases",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
                /* @__PURE__ */ a.jsx("path", { d: "M8 12h8" }),
                /* @__PURE__ */ a.jsx("path", { d: "M12 8v8" })
              ]
            }
          )
        }
      ]
    },
    solutions: {
      title: i("nav.solutions"),
      shortTitle: "Solutions",
      image: "solutions-diagram",
      items: [
        {
          title: "FinTech",
          description: "Security solutions for financial technology",
          href: "/solutions/fintech",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
                /* @__PURE__ */ a.jsx("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
              ]
            }
          )
        },
        {
          title: "HealthTech",
          description: "HIPAA compliant security solutions",
          href: "/solutions/healthtech",
          icon: /* @__PURE__ */ a.jsx(
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
              children: /* @__PURE__ */ a.jsx("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" })
            }
          )
        },
        {
          title: "HRTech",
          description: "Secure HR and employee management systems",
          href: "/solutions/hrtech",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
                /* @__PURE__ */ a.jsx("circle", { cx: "9", cy: "7", r: "4" }),
                /* @__PURE__ */ a.jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
                /* @__PURE__ */ a.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
              ]
            }
          )
        },
        {
          title: "Legal Tech",
          description: "Security for legal technology platforms",
          href: "/solutions/legaltech",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("path", { d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" }),
                /* @__PURE__ */ a.jsx("path", { d: "M12 8v4l3 3" })
              ]
            }
          )
        },
        {
          title: "Group Companies",
          description: "Solutions for corporate groups and holdings",
          href: "/solutions/group-companies",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("rect", { x: "2", y: "7", width: "20", height: "14", rx: "2", ry: "2" }),
                /* @__PURE__ */ a.jsx("path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" })
              ]
            }
          )
        },
        {
          title: "Agencies",
          description: "Security for digital and marketing agencies",
          href: "/solutions/agencies",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
                /* @__PURE__ */ a.jsx("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
              ]
            }
          )
        },
        {
          title: "Startups",
          description: "Scalable security for growing companies",
          href: "/solutions/startups",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" }),
                /* @__PURE__ */ a.jsx("path", { d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" }),
                /* @__PURE__ */ a.jsx("path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }),
                /* @__PURE__ */ a.jsx("path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" })
              ]
            }
          )
        },
        {
          title: "Enterprise",
          description: "Comprehensive security for large organizations",
          href: "/solutions/enterprise",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("path", { d: "M2 20h20" }),
                /* @__PURE__ */ a.jsx("path", { d: "M5 20V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14" }),
                /* @__PURE__ */ a.jsx("path", { d: "M12 3v4" }),
                /* @__PURE__ */ a.jsx("path", { d: "M5 8h14" }),
                /* @__PURE__ */ a.jsx("path", { d: "M7 14h2" }),
                /* @__PURE__ */ a.jsx("path", { d: "M15 14h2" }),
                /* @__PURE__ */ a.jsx("path", { d: "M7 10h2" }),
                /* @__PURE__ */ a.jsx("path", { d: "M15 10h2" })
              ]
            }
          )
        },
        {
          title: "Mobile Apps",
          description: "Security for iOS and Android applications",
          href: "/solutions/mobile-apps",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }),
                /* @__PURE__ */ a.jsx("line", { x1: "12", y1: "18", x2: "12.01", y2: "18" })
              ]
            }
          )
        },
        {
          title: "Manufacturing",
          description: "Security for industrial and IoT systems",
          href: "/solutions/manufacturing",
          icon: /* @__PURE__ */ a.jsx(
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
              children: /* @__PURE__ */ a.jsx("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" })
            }
          )
        },
        {
          title: "Governments",
          description: "Security solutions for government agencies",
          href: "/solutions/governments",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("path", { d: "M2 20h20" }),
                /* @__PURE__ */ a.jsx("path", { d: "M12 4v6" }),
                /* @__PURE__ */ a.jsx("path", { d: "M4 20V10l8-6 8 6v10" }),
                /* @__PURE__ */ a.jsx("path", { d: "M15 12v8" }),
                /* @__PURE__ */ a.jsx("path", { d: "M9 12v8" })
              ]
            }
          )
        },
        {
          title: "RetailTech",
          description: "Security for e-commerce and retail platforms",
          href: "/solutions/retailtech",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("circle", { cx: "9", cy: "21", r: "1" }),
                /* @__PURE__ */ a.jsx("circle", { cx: "20", cy: "21", r: "1" }),
                /* @__PURE__ */ a.jsx("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })
              ]
            }
          )
        }
      ]
    },
    developers: {
      title: i("nav.developers"),
      shortTitle: "Developers",
      image: "developers-diagram",
      items: [
        {
          title: "Documentation",
          description: "Technical guides and references",
          href: "https://docs.plexicus.com/",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                /* @__PURE__ */ a.jsx("polyline", { points: "14 2 14 8 20 8" }),
                /* @__PURE__ */ a.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
                /* @__PURE__ */ a.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
                /* @__PURE__ */ a.jsx("polyline", { points: "10 9 9 9 8 9" })
              ]
            }
          )
        },
        {
          title: "API Reference",
          description: "Comprehensive API documentation",
          href: "https://docs.plexicus.com/getting-started/introduction",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("path", { d: "m18 16 4-4-4-4" }),
                /* @__PURE__ */ a.jsx("path", { d: "m6 8-4 4 4 4" }),
                /* @__PURE__ */ a.jsx("path", { d: "m14.5 4-5 16" })
              ]
            }
          )
        },
        {
          title: "GitHub App",
          description: "Integrate Plexicus with your repositories",
          href: "https://github.com/apps/plexicus",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
                /* @__PURE__ */ a.jsx("path", { d: "M9 18c-4.51 2-5-2-7-2" })
              ]
            }
          )
        },
        {
          title: "GitHub Action",
          description: "Automate security in your CI/CD pipeline",
          href: "https://github.com/marketplace/actions/plexicus-runner-action",
          icon: /* @__PURE__ */ a.jsx(
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
              children: /* @__PURE__ */ a.jsx("path", { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" })
            }
          )
        }
      ]
    },
    resources: {
      title: i("nav.resources"),
      shortTitle: "Resources",
      image: "resources-diagram",
      items: [
        {
          title: "Blog",
          description: "Latest news and security insights",
          href: "/blog",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                /* @__PURE__ */ a.jsx("path", { d: "M14 3v5h5M16 13H8M16 17H8M10 9H8" })
              ]
            }
          )
        },
        {
          title: "YouTube Channel",
          description: "Video tutorials and webinars",
          href: "https://youtube.com/channel/UCzrotvBZ3dcb7mhI55ExHBQ/",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("path", { d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" }),
                /* @__PURE__ */ a.jsx("path", { d: "m10 15 5-3-5-3z" })
              ]
            }
          )
        },
        {
          title: "Branding Assets",
          description: "Logos and brand guidelines",
          href: "/resources/branding",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("path", { d: "M12 19c.5 0 1-.1 1.4-.4.8-.4 1.4-1.1 1.6-2 .3-1.4-.5-2.8-1.9-3.2-.3-.1-.6-.1-.9-.1-.5 0-1 .1-1.4.4-.8.4-1.4 1.1-1.6 2-.3 1.4.5 2.8 1.9 3.2.3.1.6.1.9.1z" }),
                /* @__PURE__ */ a.jsx("path", { d: "m14.5 12.5 2.7-2.7c1.2-1.2 1.8-2.7 1.8-4.3 0-3.1-2.5-5.5-5.5-5.5-1.6 0-3.1.6-4.3 1.8L6.5 4.5" }),
                /* @__PURE__ */ a.jsx("path", { d: "m4.5 6.5 2.7-2.7c.3-.3.6-.4 1-.4.8 0 1.5.7 1.5 0 .4-.1.7-.4 1L6.5 8.5" }),
                /* @__PURE__ */ a.jsx("path", { d: "m3.5 13.5 5-5" }),
                /* @__PURE__ */ a.jsx("path", { d: "m5 19 5-5" }),
                /* @__PURE__ */ a.jsx("path", { d: "m17.5 6.5-5 5" }),
                /* @__PURE__ */ a.jsx("path", { d: "m16 17-5-5" })
              ]
            }
          )
        },
        {
          title: "Changelogs",
          description: "Latest product updates",
          href: "https://plexicus.canny.io/changelog",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("path", { d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" }),
                /* @__PURE__ */ a.jsx("path", { d: "m9 12 2 2 4-4" })
              ]
            }
          )
        },
        {
          title: "Feature Requests",
          description: "Submit and vote on new features",
          href: "https://plexicus.canny.io/feature-requests",
          icon: /* @__PURE__ */ a.jsx(
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
              children: /* @__PURE__ */ a.jsx("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" })
            }
          )
        },
        // Find the three comparison items in the resources menu items array and update their icons
        // For "Plexicus vs. ArmorCode", replace the icon with a sword
        {
          title: "Plexicus vs. ArmorCode",
          description: "See how Plexicus compares",
          href: "/compare/armorcode",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("path", { d: "M14.5 17.5L3 6V3h3l11.5 11.5" }),
                /* @__PURE__ */ a.jsx("path", { d: "M13 19l6-6" }),
                /* @__PURE__ */ a.jsx("path", { d: "M16 16l4 4" }),
                /* @__PURE__ */ a.jsx("path", { d: "M19 21l2-2" })
              ]
            }
          )
        },
        // For "Plexicus vs. Apiiro", replace the icon with an axe
        {
          title: "Plexicus vs. Apiiro",
          description: "Feature comparison",
          href: "/compare/apiiro",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("path", { d: "M12 2v5.5m0 0v9m0-9 7-3.5c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5L12 8.5l-7-3.5C4.2 5 3.5 5.7 3.5 6.5v3c0 .8.7 1.5 1.5 1.5l7 3.5" }),
                /* @__PURE__ */ a.jsx("path", { d: "M12 8.5 5 5l-1 1 8 8.5 8-8.5-1-1-7 3.5z" }),
                /* @__PURE__ */ a.jsx("path", { d: "m9 12 3 2.5 3-2.5" }),
                /* @__PURE__ */ a.jsx("path", { d: "M12 17v5" })
              ]
            }
          )
        },
        // For "Plexicus vs. Legit Security", replace the icon with a crosshair/target
        {
          title: "Plexicus vs. Legit Security",
          description: "Side-by-side comparison",
          href: "/compare/legit-security",
          icon: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx("path", { d: "M3 8a4 4 0 0 1 8 0v8a4 4 0 0 1-8 0z" }),
                /* @__PURE__ */ a.jsx("path", { d: "M7 8v8" }),
                /* @__PURE__ */ a.jsx("path", { d: "M21 12h-7" }),
                /* @__PURE__ */ a.jsx("path", { d: "m14 15 3-3-3-3" }),
                /* @__PURE__ */ a.jsx("path", { d: "M7 12h7" })
              ]
            }
          )
        }
      ]
    }
  };
  return /* @__PURE__ */ a.jsxs(
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
        /* @__PURE__ */ a.jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl", children: [
          /* @__PURE__ */ a.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ a.jsx(Q, { href: s, className: "flex items-center gap-2 overflow-visible", "aria-label": "Plexicus Home", children: /* @__PURE__ */ a.jsx("div", { className: "relative w-auto h-14 flex items-center", children: /* @__PURE__ */ a.jsx(
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
          /* @__PURE__ */ a.jsxs("nav", { className: "hidden md:flex md:gap-4 lg:gap-6", "aria-label": "Main Navigation", children: [
            Object.entries(v).filter(([u]) => u === "products").map(([u, m]) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => f(u),
                onMouseLeave: p,
                children: /* @__PURE__ */ a.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": r === u,
                    "aria-haspopup": "true",
                    onClick: () => x(u),
                    children: [
                      /* @__PURE__ */ a.jsx("span", { className: "hidden lg:inline", children: m.title }),
                      /* @__PURE__ */ a.jsx("span", { className: "lg:hidden", children: m.shortTitle }),
                      /* @__PURE__ */ a.jsx(
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
                          className: `ml-1 transition-transform duration-200 ${r === u ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ a.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              u
            )),
            /* @__PURE__ */ a.jsx(
              Q,
              {
                href: "/pricing",
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: i("nav.pricing")
              }
            ),
            Object.entries(v).filter(([u]) => u === "solutions" || u === "developers" || u === "resources").map(([u, m]) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => f(u),
                onMouseLeave: p,
                children: /* @__PURE__ */ a.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": r === u,
                    "aria-haspopup": "true",
                    onClick: () => x(u),
                    children: [
                      /* @__PURE__ */ a.jsx("span", { className: "hidden lg:inline", children: m.title }),
                      /* @__PURE__ */ a.jsx("span", { className: "lg:hidden", children: m.shortTitle }),
                      /* @__PURE__ */ a.jsx(
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
                          className: `ml-1 transition-transform duration-200 ${r === u ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ a.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              u
            )),
            /* @__PURE__ */ a.jsx(
              Q,
              {
                href: "/contact",
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: "Contact"
              }
            )
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "hidden md:flex items-center gap-4", children: [
            /* @__PURE__ */ a.jsx(
              Q,
              {
                href: "/login",
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors whitespace-nowrap",
                children: "Login"
              }
            ),
            /* @__PURE__ */ a.jsx(dr, { className: "bg-white text-[#8220ff] font-medium px-4 lg:px-6 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap", children: "Get Started" })
          ] }),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              className: "flex md:hidden p-2 rounded-md hover:bg-white/10 transition-colors text-white",
              onClick: () => e(!t),
              "aria-label": t ? "Close menu" : "Open menu",
              "aria-expanded": t,
              children: t ? /* @__PURE__ */ a.jsxs(
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
                    /* @__PURE__ */ a.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                    /* @__PURE__ */ a.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                  ]
                }
              ) : /* @__PURE__ */ a.jsxs(
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
                    /* @__PURE__ */ a.jsx("line", { x1: "4", x2: "20", y1: "12", y2: "12" }),
                    /* @__PURE__ */ a.jsx("line", { x1: "4", x2: "20", y1: "6", y2: "6" }),
                    /* @__PURE__ */ a.jsx("line", { x1: "4", x2: "20", y1: "18", y2: "18" })
                  ]
                }
              )
            }
          )
        ] }),
        r && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "fixed inset-0 bg-black/20 z-30",
              onClick: () => n(null),
              "aria-hidden": "true",
              style: { top: "64px" }
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "absolute left-0 right-0 top-16 z-40 bg-white shadow-xl border-t border-gray-100 transition-all duration-300 transform",
              onMouseEnter: () => f(r),
              onMouseLeave: p,
              role: "menu",
              "aria-labelledby": `menu-button-${r}`,
              children: /* @__PURE__ */ a.jsx("div", { className: "container mx-auto py-8 px-4 md:px-6 max-w-7xl", children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col md:flex-row", children: [
                /* @__PURE__ */ a.jsxs("div", { className: "w-full md:w-1/3 pr-0 md:pr-8 mb-6 md:mb-0 flex flex-col", children: [
                  /* @__PURE__ */ a.jsx("div", { className: "relative h-36 md:h-40 w-full rounded-lg overflow-hidden bg-white border border-gray-100 mb-4", children: /* @__PURE__ */ a.jsxs("div", { className: "absolute inset-0 flex items-center justify-center", children: [
                    r === "products" && /* @__PURE__ */ a.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ a.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ a.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ a.jsx(
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
                          /* @__PURE__ */ a.jsx("rect", { x: "40", y: "30", width: "320", height: "40", rx: "12", fill: "#8220ff", fillOpacity: "0.9" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "65", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "90", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "115", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "40", y: "70", width: "80", height: "200", fill: "#f5f5f7" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "55", y: "90", width: "50", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.7" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "55", y: "110", width: "40", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "55", y: "130", width: "45", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "55", y: "150", width: "35", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "55", y: "170", width: "50", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "140", y: "90", width: "200", height: "70", rx: "8", fill: "#8220ff", fillOpacity: "0.1" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "155", y: "105", width: "170", height: "40", rx: "4", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "175", cy: "125", r: "15", fill: "#8220ff", fillOpacity: "0.8" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "200", y: "115", width: "110", height: "8", rx: "4", fill: "white" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "200", y: "130", width: "80", height: "6", rx: "3", fill: "white", fillOpacity: "0.7" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "140", y: "180", width: "95", height: "80", rx: "8", fill: "#f0f0f5" }),
                          /* @__PURE__ */ a.jsx(
                            "path",
                            {
                              d: "M150 240 L170 220 L190 230 L210 200",
                              stroke: "#8220ff",
                              strokeWidth: "3",
                              strokeLinecap: "round"
                            }
                          ),
                          /* @__PURE__ */ a.jsx("circle", { cx: "170", cy: "220", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "190", cy: "230", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "210", cy: "200", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "245", y: "180", width: "95", height: "80", rx: "8", fill: "#f0f0f5" }),
                          /* @__PURE__ */ a.jsx(
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
                          /* @__PURE__ */ a.jsx("circle", { cx: "293", cy: "220", r: "30", fill: "transparent", stroke: "#e0e0e5", strokeWidth: "8" }),
                          /* @__PURE__ */ a.jsx("text", { x: "283", y: "225", fontFamily: "Arial", fontSize: "12", fill: "#8220ff", fontWeight: "bold", children: "75%" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "320", cy: "50", r: "12", fill: "white", fillOpacity: "0.2" }),
                          /* @__PURE__ */ a.jsx("path", { d: "M314 50 L320 56 L326 50", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "30", cy: "30", r: "5", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "350", cy: "280", r: "7", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "370", cy: "50", r: "4", fill: "#8220ff", fillOpacity: "0.4" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "20", cy: "250", r: "6", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ a.jsx(
                            "path",
                            {
                              d: "M15 100 C30 120, 20 150, 35 160",
                              stroke: "#8220ff",
                              strokeWidth: "1.5",
                              strokeDasharray: "4 4"
                            }
                          ),
                          /* @__PURE__ */ a.jsx(
                            "path",
                            {
                              d: "M370 120 C350 140, 360 170, 380 190",
                              stroke: "#8220ff",
                              strokeWidth: "1.5",
                              strokeDasharray: "4 4"
                            }
                          ),
                          /* @__PURE__ */ a.jsxs("defs", { children: [
                            /* @__PURE__ */ a.jsxs(
                              "linearGradient",
                              {
                                id: "productGradient",
                                x1: "0",
                                y1: "0",
                                x2: "400",
                                y2: "300",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                  /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "#f5f5f7" }),
                                  /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "#e8e8f0" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ a.jsxs(
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
                                  /* @__PURE__ */ a.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                  /* @__PURE__ */ a.jsx(
                                    "feColorMatrix",
                                    {
                                      in: "SourceAlpha",
                                      type: "matrix",
                                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    }
                                  ),
                                  /* @__PURE__ */ a.jsx("feOffset", { dy: "4" }),
                                  /* @__PURE__ */ a.jsx("feGaussianBlur", { stdDeviation: "6" }),
                                  /* @__PURE__ */ a.jsx(
                                    "feColorMatrix",
                                    {
                                      type: "matrix",
                                      values: "0 0 0 0 0.51 0 0 0 0 0.125 0 0 0 0 1 0 0 0 0.15 0"
                                    }
                                  ),
                                  /* @__PURE__ */ a.jsx("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                                  /* @__PURE__ */ a.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })
                                ]
                              }
                            )
                          ] })
                        ]
                      }
                    ) }),
                    r === "solutions" && /* @__PURE__ */ a.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ a.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ a.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ a.jsx(
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
                          /* @__PURE__ */ a.jsx("circle", { cx: "100", cy: "150", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "300", cy: "150", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "200", cy: "70", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "200", cy: "230", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ a.jsx("path", { d: "M125 150 L160 150", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ a.jsx("path", { d: "M240 150 L275 150", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ a.jsx("path", { d: "M200 95 L200 130", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ a.jsx("path", { d: "M200 170 L200 205", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ a.jsx("polygon", { points: "158,145 158,155 168,150", fill: "#8220ff" }),
                          /* @__PURE__ */ a.jsx("polygon", { points: "242,145 242,155 232,150", fill: "#8220ff" }),
                          /* @__PURE__ */ a.jsx("polygon", { points: "195,128 205,128 200,138", fill: "#8220ff" }),
                          /* @__PURE__ */ a.jsx("polygon", { points: "195,172 205,172 200,162", fill: "#8220ff" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "100", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "300", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "200", cy: "70", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "200", cy: "230", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "200", cy: "150", r: "20", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "200", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.4" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "150", cy: "100", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "250", cy: "100", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "150", cy: "200", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "250", cy: "200", r: "5", fill: "#8220ff", fillOpacity: "0.2" })
                        ]
                      }
                    ) }),
                    r === "resources" && /* @__PURE__ */ a.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ a.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ a.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ a.jsxs("g", { filter: "url(#resourcesShadow)", children: [
                            /* @__PURE__ */ a.jsx("rect", { x: "140", y: "80", width: "120", height: "140", rx: "4", fill: "url(#bookGradient)" }),
                            /* @__PURE__ */ a.jsx(
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
                            /* @__PURE__ */ a.jsx("path", { d: "M160 100 L240 100", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ a.jsx("path", { d: "M160 120 L240 120", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ a.jsx("path", { d: "M160 140 L240 140", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ a.jsx("path", { d: "M160 160 L240 160", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ a.jsx("path", { d: "M160 180 L240 180", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ a.jsx("path", { d: "M230 80 L230 110 L220 100 L210 110 L210 80", fill: "#8220ff", fillOpacity: "0.3" }),
                            /* @__PURE__ */ a.jsxs("g", { transform: "translate(-10, -10) rotate(-5)", children: [
                              /* @__PURE__ */ a.jsx(
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
                              /* @__PURE__ */ a.jsx("path", { d: "M90 135 L150 135", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ a.jsx("path", { d: "M90 150 L150 150", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ a.jsx("path", { d: "M90 165 L150 165", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ a.jsx("path", { d: "M90 180 L120 180", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" })
                            ] }),
                            /* @__PURE__ */ a.jsxs("g", { transform: "translate(10, -10) rotate(5)", children: [
                              /* @__PURE__ */ a.jsx(
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
                              /* @__PURE__ */ a.jsx("polygon", { points: "270,140 290,150 270,160", fill: "#8220ff" }),
                              /* @__PURE__ */ a.jsx(
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
                          /* @__PURE__ */ a.jsx("rect", { x: "80", y: "230", width: "240", height: "50", fill: "none" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "200", cy: "50", r: "15", fill: "#8220ff", fillOpacity: "0.1" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "200", cy: "50", r: "10", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "200", cy: "50", r: "5", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "150", cy: "60", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "250", cy: "60", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "120", cy: "150", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "280", cy: "150", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ a.jsxs("defs", { children: [
                            /* @__PURE__ */ a.jsxs(
                              "linearGradient",
                              {
                                id: "resourcesGradient",
                                x1: "0",
                                y1: "0",
                                x2: "400",
                                y2: "300",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                  /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "#f5f5f7" }),
                                  /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "#e8e8f0" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ a.jsxs(
                              "linearGradient",
                              {
                                id: "bookGradient",
                                x1: "140",
                                y1: "80",
                                x2: "260",
                                y2: "220",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                  /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "#f0f0f5" }),
                                  /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "#ffffff" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ a.jsx("filter", { id: "resourcesShadow", x: "-10%", y: "-10%", width: "120%", height: "120%", children: /* @__PURE__ */ a.jsx("feDropShadow", { dx: "2", dy: "4", stdDeviation: "4", floodColor: "#8220ff", floodOpacity: "0.2" }) })
                          ] })
                        ]
                      }
                    ) }),
                    r === "developers" && /* @__PURE__ */ a.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ a.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ a.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "20", y: "20", width: "280", height: "200", rx: "8", fill: "#1E1E1E" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "20", y: "20", width: "280", height: "30", rx: "8", fill: "#333333" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "40", cy: "35", r: "6", fill: "#FF5F56" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "60", cy: "35", r: "6", fill: "#FFBD2E" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "80", cy: "35", r: "6", fill: "#27C93F" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "40", y: "70", width: "120", height: "10", rx: "2", fill: "#9CDCFE", fillOpacity: "0.7" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "40", y: "90", width: "180", height: "10", rx: "2", fill: "#CE9178", fillOpacity: "0.7" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "60", y: "110", width: "200", height: "10", rx: "2", fill: "#6A9955", fillOpacity: "0.7" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "60", y: "130", width: "160", height: "10", rx: "2", fill: "#569CD6", fillOpacity: "0.7" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "40", y: "150", width: "140", height: "10", rx: "2", fill: "#DCDCAA", fillOpacity: "0.7" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "60", y: "170", width: "180", height: "10", rx: "2", fill: "#4EC9B0", fillOpacity: "0.7" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "40", y: "190", width: "160", height: "10", rx: "2", fill: "#C586C0", fillOpacity: "0.7" }),
                          /* @__PURE__ */ a.jsx("text", { x: "30", y: "75", fontSize: "10", fill: "#858585", children: "1" }),
                          /* @__PURE__ */ a.jsx("text", { x: "30", y: "95", fontSize: "10", fill: "#858585", children: "2" }),
                          /* @__PURE__ */ a.jsx("text", { x: "30", y: "115", fontSize: "10", fill: "#858585", children: "3" }),
                          /* @__PURE__ */ a.jsx("text", { x: "30", y: "135", fontSize: "10", fill: "#858585", children: "4" }),
                          /* @__PURE__ */ a.jsx("text", { x: "30", y: "155", fontSize: "10", fill: "#858585", children: "5" }),
                          /* @__PURE__ */ a.jsx("text", { x: "30", y: "175", fontSize: "10", fill: "#858585", children: "6" }),
                          /* @__PURE__ */ a.jsx("text", { x: "30", y: "195", fontSize: "10", fill: "#858585", children: "7" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "80", y: "130", width: "310", height: "130", rx: "8", fill: "#1E1E1E", filter: "url(#shadow)" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "80", y: "130", width: "310", height: "25", rx: "8", fill: "#333333" }),
                          /* @__PURE__ */ a.jsx("text", { x: "235", y: "147", fontSize: "12", fill: "#FFFFFF", textAnchor: "middle", children: "Terminal" }),
                          /* @__PURE__ */ a.jsx("text", { x: "90", y: "170", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ git clone https://github.com/plexicus/plexicus-sdk.git" }),
                          /* @__PURE__ */ a.jsx("text", { x: "90", y: "185", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "Cloning into 'plexicus-sdk'..." }),
                          /* @__PURE__ */ a.jsx("text", { x: "90", y: "200", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "remote: Counting objects: 100% (1234/1234)" }),
                          /* @__PURE__ */ a.jsx("text", { x: "90", y: "215", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ cd plexicus-sdk && npm install" }),
                          /* @__PURE__ */ a.jsx("text", { x: "90", y: "230", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "added 1024 packages in 4.2s" }),
                          /* @__PURE__ */ a.jsx("text", { x: "90", y: "245", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ npm run dev" }),
                          /* @__PURE__ */ a.jsxs("g", { transform: "translate(320, 240) scale(0.8)", children: [
                            /* @__PURE__ */ a.jsx("circle", { cx: "0", cy: "0", r: "25", fill: "white" }),
                            /* @__PURE__ */ a.jsx(
                              "path",
                              {
                                d: "M0 -20c-11.046 0-20 8.954-20 20 0 8.837 5.732 16.338 13.678 18.98 1 .184 1.365-.434 1.365-.964 0-.476-.018-1.733-.027-3.4-5.564 1.21-6.736-2.68-6.736-2.68-.91-2.31-2.22-2.924-2.22-2.924-1.815-1.24.137-1.215.137-1.215 2.006.14 3.06 2.06 3.06 2.06 1.783 3.057 4.675 2.174 5.815 1.663.18-1.29.697-2.174 1.268-2.674-4.442-.505-9.112-2.22-9.112-9.87 0-2.18.78-3.964 2.06-5.36-.207-.505-.893-2.54.195-5.29 0 0 1.68-.538 5.5 2.05 1.595-.443 3.305-.665 5.005-.673 1.7.008 3.41.23 5.005.673 3.82-2.588 5.495-2.05 5.495-2.05 1.09 2.75.405 4.785.198 5.29 1.28 1.396 2.055 3.18 2.055 5.36 0 7.67-4.677 9.36-9.13 9.855.718.62 1.358 1.842 1.358 3.712 0 2.68-.024 4.84-.024 5.5 0 .535.36 1.16 1.375.964C14.275 16.33 20 8.83 20 0 20-11.046 11.046-20 0-20z",
                                fill: "#1B1F23",
                                transform: "translate(0, 0)"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("filter", { id: "shadow", x: "0", y: "0", width: "400", height: "300", filterUnits: "userSpaceOnUse", children: /* @__PURE__ */ a.jsx("feDropShadow", { dx: "2", dy: "4", stdDeviation: "3", floodColor: "#000000", floodOpacity: "0.3" }) }) })
                        ]
                      }
                    ) })
                  ] }) }),
                  /* @__PURE__ */ a.jsxs("div", { className: "bg-gray-50 rounded-lg p-4", children: [
                    /* @__PURE__ */ a.jsx("h3", { className: "text-xl font-bold text-[#8220ff]", children: v[r].title }),
                    /* @__PURE__ */ a.jsx("p", { className: "text-gray-700", children: r === "products" ? "Explore our product" : r === "solutions" ? "Explore our solutions" : "Explore our resources" })
                  ] })
                ] }),
                /* @__PURE__ */ a.jsx("div", { className: "w-full md:w-2/3", children: /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
                  v[r].items.filter((u) => r !== "resources" || !u.title.includes("vs.")).map((u, m) => /* @__PURE__ */ a.jsxs(
                    Q,
                    {
                      href: u.href,
                      className: "flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group",
                      onClick: () => n(null),
                      children: [
                        /* @__PURE__ */ a.jsx("div", { className: "w-12 h-12 bg-[#8220ff]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#8220ff]/20 transition-colors", children: u.icon }),
                        /* @__PURE__ */ a.jsxs("div", { children: [
                          /* @__PURE__ */ a.jsx("h4", { className: "font-semibold text-gray-900 group-hover:text-[#8220ff] transition-colors", children: u.title }),
                          /* @__PURE__ */ a.jsx("p", { className: "text-sm text-gray-600 mt-1", children: u.description })
                        ] })
                      ]
                    },
                    m
                  )),
                  r === "resources" && /* @__PURE__ */ a.jsx("div", { className: "col-span-1 sm:col-span-2 mt-4", children: /* @__PURE__ */ a.jsxs("div", { className: "bg-purple-50 p-4 rounded-lg border border-purple-100", children: [
                    /* @__PURE__ */ a.jsx("h3", { className: "text-sm font-medium text-purple-800 mb-3", children: "Compare Plexicus" }),
                    /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: v.resources.items.filter(
                      (u) => u.title === "Plexicus vs. ArmorCode" || u.title === "Plexicus vs. Apiiro" || u.title === "Plexicus vs. Legit Security"
                    ).map((u, m) => /* @__PURE__ */ a.jsxs(
                      Q,
                      {
                        href: u.href,
                        className: "flex flex-col items-center p-3 rounded-lg bg-white hover:bg-purple-100 transition-colors text-center group",
                        onClick: () => n(null),
                        children: [
                          /* @__PURE__ */ a.jsx("div", { className: "w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-purple-200 transition-colors", children: ge.cloneElement(u.icon, {
                            className: "w-5 h-5 text-purple-700"
                          }) }),
                          /* @__PURE__ */ a.jsx("h4", { className: "font-medium text-sm text-gray-900 group-hover:text-purple-800 transition-colors", children: u.title })
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
        t && /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 bg-black/20 z-40 lg:hidden", onClick: () => e(!1) }),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `md:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${t ? "translate-x-0" : "translate-x-full"}`,
            style: { top: "64px", height: "calc(100vh - 64px)", overflow: "auto" },
            children: /* @__PURE__ */ a.jsx("div", { className: "overflow-y-auto h-full p-4 pb-20", children: /* @__PURE__ */ a.jsxs("div", { className: "space-y-4", children: [
              Object.entries(v).map(([u, m]) => /* @__PURE__ */ a.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ a.jsx("h3", { className: "font-semibold", children: m.title }),
                /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-1 gap-2", children: m.items.map((w, y) => /* @__PURE__ */ a.jsxs(
                  Q,
                  {
                    href: w.href,
                    className: "flex items-center p-2 rounded-md bg-gray-50 hover:bg-gray-100",
                    onClick: () => e(!1),
                    children: [
                      /* @__PURE__ */ a.jsx("div", { className: "w-8 h-8 bg-primary/10 rounded-md mr-2 flex items-center justify-center", children: ge.cloneElement(w.icon, { width: 16, height: 16 }) }),
                      /* @__PURE__ */ a.jsx("span", { className: "text-sm", children: w.title })
                    ]
                  },
                  y
                )) })
              ] }, u)),
              /* @__PURE__ */ a.jsx(Q, { href: "/pricing", className: "block py-2 text-sm font-medium", onClick: () => e(!1), children: "Pricing" }),
              /* @__PURE__ */ a.jsx(Q, { href: "/contact", className: "block py-2 text-sm font-medium", onClick: () => e(!1), children: "Contact" }),
              /* @__PURE__ */ a.jsx("div", { className: "pt-4 border-t border-gray-100", children: /* @__PURE__ */ a.jsx(dr, { className: "w-full bg-gradient-primary", onClick: () => e(!1), children: "Get Started" }) })
            ] }) })
          }
        )
      ]
    }
  );
};
function dn(t, [e, r]) {
  return Math.min(r, Math.max(e, t));
}
function re(t, e, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (t == null || t(o), r === !1 || !o.defaultPrevented)
      return e == null ? void 0 : e(o);
  };
}
function Nr(t, e = []) {
  let r = [];
  function n(s, i) {
    const l = g.createContext(i), c = r.length;
    r = [...r, i];
    const d = (h) => {
      var w;
      const { scope: p, children: x, ...v } = h, u = ((w = p == null ? void 0 : p[t]) == null ? void 0 : w[c]) || l, m = g.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ a.jsx(u.Provider, { value: m, children: x });
    };
    d.displayName = s + "Provider";
    function f(h, p) {
      var u;
      const x = ((u = p == null ? void 0 : p[t]) == null ? void 0 : u[c]) || l, v = g.useContext(x);
      if (v) return v;
      if (i !== void 0) return i;
      throw new Error(`\`${h}\` must be used within \`${s}\``);
    }
    return [d, f];
  }
  const o = () => {
    const s = r.map((i) => g.createContext(i));
    return function(l) {
      const c = (l == null ? void 0 : l[t]) || s;
      return g.useMemo(
        () => ({ [`__scope${t}`]: { ...l, [t]: c } }),
        [l, c]
      );
    };
  };
  return o.scopeName = t, [n, qi(o, ...e)];
}
function qi(...t) {
  const e = t[0];
  if (t.length === 1) return e;
  const r = () => {
    const n = t.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = n.reduce((l, { useScope: c, scopeName: d }) => {
        const h = c(s)[`__scope${d}`];
        return { ...l, ...h };
      }, {});
      return g.useMemo(() => ({ [`__scope${e.scopeName}`]: i }), [i]);
    };
  };
  return r.scopeName = e.scopeName, r;
}
function un(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
function Ji(...t) {
  return (e) => {
    let r = !1;
    const n = t.map((o) => {
      const s = un(o, e);
      return !r && typeof s == "function" && (r = !0), s;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const s = n[o];
          typeof s == "function" ? s() : un(t[o], null);
        }
      };
  };
}
function oe(...t) {
  return g.useCallback(Ji(...t), t);
}
// @__NO_SIDE_EFFECTS__
function At(t) {
  const e = /* @__PURE__ */ Zi(t), r = g.forwardRef((n, o) => {
    const { children: s, ...i } = n, l = g.Children.toArray(s), c = l.find(ea);
    if (c) {
      const d = c.props.children, f = l.map((h) => h === c ? g.Children.count(d) > 1 ? g.Children.only(null) : g.isValidElement(d) ? d.props.children : null : h);
      return /* @__PURE__ */ a.jsx(e, { ...i, ref: o, children: g.isValidElement(d) ? g.cloneElement(d, void 0, f) : null });
    }
    return /* @__PURE__ */ a.jsx(e, { ...i, ref: o, children: s });
  });
  return r.displayName = `${t}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function Zi(t) {
  const e = g.forwardRef((r, n) => {
    const { children: o, ...s } = r, i = g.isValidElement(o) ? ra(o) : void 0, l = oe(i, n);
    if (g.isValidElement(o)) {
      const c = ta(s, o.props);
      return o.type !== g.Fragment && (c.ref = l), g.cloneElement(o, c);
    }
    return g.Children.count(o) > 1 ? g.Children.only(null) : null;
  });
  return e.displayName = `${t}.SlotClone`, e;
}
var Qi = Symbol("radix.slottable");
function ea(t) {
  return g.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === Qi;
}
function ta(t, e) {
  const r = { ...e };
  for (const n in e) {
    const o = t[n], s = e[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...l) => {
      const c = s(...l);
      return o(...l), c;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...s } : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...t, ...r };
}
function ra(t) {
  var n, o;
  let e = (n = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : n.get, r = e && "isReactWarning" in e && e.isReactWarning;
  return r ? t.ref : (e = (o = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : o.get, r = e && "isReactWarning" in e && e.isReactWarning, r ? t.props.ref : t.props.ref || t.ref);
}
function na(t) {
  const e = t + "CollectionProvider", [r, n] = Nr(e), [o, s] = r(
    e,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (u) => {
    const { scope: m, children: w } = u, y = ge.useRef(null), b = ge.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ a.jsx(o, { scope: m, itemMap: b, collectionRef: y, children: w });
  };
  i.displayName = e;
  const l = t + "CollectionSlot", c = /* @__PURE__ */ At(l), d = ge.forwardRef(
    (u, m) => {
      const { scope: w, children: y } = u, b = s(l, w), j = oe(m, b.collectionRef);
      return /* @__PURE__ */ a.jsx(c, { ref: j, children: y });
    }
  );
  d.displayName = l;
  const f = t + "CollectionItemSlot", h = "data-radix-collection-item", p = /* @__PURE__ */ At(f), x = ge.forwardRef(
    (u, m) => {
      const { scope: w, children: y, ...b } = u, j = ge.useRef(null), N = oe(m, j), R = s(f, w);
      return ge.useEffect(() => (R.itemMap.set(j, { ref: j, ...b }), () => void R.itemMap.delete(j))), /* @__PURE__ */ a.jsx(p, { [h]: "", ref: N, children: y });
    }
  );
  x.displayName = f;
  function v(u) {
    const m = s(t + "CollectionConsumer", u);
    return ge.useCallback(() => {
      const y = m.collectionRef.current;
      if (!y) return [];
      const b = Array.from(y.querySelectorAll(`[${h}]`));
      return Array.from(m.itemMap.values()).sort(
        (R, k) => b.indexOf(R.ref.current) - b.indexOf(k.ref.current)
      );
    }, [m.collectionRef, m.itemMap]);
  }
  return [
    { Provider: i, Slot: d, ItemSlot: x },
    v,
    n
  ];
}
var oa = g.createContext(void 0);
function sa(t) {
  const e = g.useContext(oa);
  return t || e || "ltr";
}
var ia = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], te = ia.reduce((t, e) => {
  const r = /* @__PURE__ */ At(`Primitive.${e}`), n = g.forwardRef((o, s) => {
    const { asChild: i, ...l } = o, c = i ? r : e;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ a.jsx(c, { ...l, ref: s });
  });
  return n.displayName = `Primitive.${e}`, { ...t, [e]: n };
}, {});
function aa(t, e) {
  t && Ft.flushSync(() => t.dispatchEvent(e));
}
function Ie(t) {
  const e = g.useRef(t);
  return g.useEffect(() => {
    e.current = t;
  }), g.useMemo(() => (...r) => {
    var n;
    return (n = e.current) == null ? void 0 : n.call(e, ...r);
  }, []);
}
function la(t, e = globalThis == null ? void 0 : globalThis.document) {
  const r = Ie(t);
  g.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return e.addEventListener("keydown", n, { capture: !0 }), () => e.removeEventListener("keydown", n, { capture: !0 });
  }, [r, e]);
}
var ca = "DismissableLayer", gr = "dismissableLayer.update", da = "dismissableLayer.pointerDownOutside", ua = "dismissableLayer.focusOutside", fn, eo = g.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), to = g.forwardRef(
  (t, e) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: l,
      ...c
    } = t, d = g.useContext(eo), [f, h] = g.useState(null), p = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, x] = g.useState({}), v = oe(e, (k) => h(k)), u = Array.from(d.layers), [m] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), w = u.indexOf(m), y = f ? u.indexOf(f) : -1, b = d.layersWithOutsidePointerEventsDisabled.size > 0, j = y >= w, N = pa((k) => {
      const C = k.target, T = [...d.branches].some((I) => I.contains(C));
      !j || T || (o == null || o(k), i == null || i(k), k.defaultPrevented || l == null || l());
    }, p), R = ga((k) => {
      const C = k.target;
      [...d.branches].some((I) => I.contains(C)) || (s == null || s(k), i == null || i(k), k.defaultPrevented || l == null || l());
    }, p);
    return la((k) => {
      y === d.layers.size - 1 && (n == null || n(k), !k.defaultPrevented && l && (k.preventDefault(), l()));
    }, p), g.useEffect(() => {
      if (f)
        return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (fn = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), hn(), () => {
          r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = fn);
        };
    }, [f, p, r, d]), g.useEffect(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), hn());
    }, [f, d]), g.useEffect(() => {
      const k = () => x({});
      return document.addEventListener(gr, k), () => document.removeEventListener(gr, k);
    }, []), /* @__PURE__ */ a.jsx(
      te.div,
      {
        ...c,
        ref: v,
        style: {
          pointerEvents: b ? j ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: re(t.onFocusCapture, R.onFocusCapture),
        onBlurCapture: re(t.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: re(
          t.onPointerDownCapture,
          N.onPointerDownCapture
        )
      }
    );
  }
);
to.displayName = ca;
var fa = "DismissableLayerBranch", ha = g.forwardRef((t, e) => {
  const r = g.useContext(eo), n = g.useRef(null), o = oe(e, n);
  return g.useEffect(() => {
    const s = n.current;
    if (s)
      return r.branches.add(s), () => {
        r.branches.delete(s);
      };
  }, [r.branches]), /* @__PURE__ */ a.jsx(te.div, { ...t, ref: o });
});
ha.displayName = fa;
function pa(t, e = globalThis == null ? void 0 : globalThis.document) {
  const r = Ie(t), n = g.useRef(!1), o = g.useRef(() => {
  });
  return g.useEffect(() => {
    const s = (l) => {
      if (l.target && !n.current) {
        let c = function() {
          ro(
            da,
            r,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: l };
        l.pointerType === "touch" ? (e.removeEventListener("click", o.current), o.current = c, e.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        e.removeEventListener("click", o.current);
      n.current = !1;
    }, i = window.setTimeout(() => {
      e.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(i), e.removeEventListener("pointerdown", s), e.removeEventListener("click", o.current);
    };
  }, [e, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function ga(t, e = globalThis == null ? void 0 : globalThis.document) {
  const r = Ie(t), n = g.useRef(!1);
  return g.useEffect(() => {
    const o = (s) => {
      s.target && !n.current && ro(ua, r, { originalEvent: s }, {
        discrete: !1
      });
    };
    return e.addEventListener("focusin", o), () => e.removeEventListener("focusin", o);
  }, [e, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function hn() {
  const t = new CustomEvent(gr);
  document.dispatchEvent(t);
}
function ro(t, e, r, { discrete: n }) {
  const o = r.originalEvent.target, s = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: r });
  e && o.addEventListener(t, e, { once: !0 }), n ? aa(o, s) : o.dispatchEvent(s);
}
var Jt = 0;
function ma() {
  g.useEffect(() => {
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", t[0] ?? pn()), document.body.insertAdjacentElement("beforeend", t[1] ?? pn()), Jt++, () => {
      Jt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), Jt--;
    };
  }, []);
}
function pn() {
  const t = document.createElement("span");
  return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t;
}
var Zt = "focusScope.autoFocusOnMount", Qt = "focusScope.autoFocusOnUnmount", gn = { bubbles: !1, cancelable: !0 }, xa = "FocusScope", no = g.forwardRef((t, e) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = t, [l, c] = g.useState(null), d = Ie(o), f = Ie(s), h = g.useRef(null), p = oe(e, (u) => c(u)), x = g.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  g.useEffect(() => {
    if (n) {
      let u = function(b) {
        if (x.paused || !l) return;
        const j = b.target;
        l.contains(j) ? h.current = j : Ne(h.current, { select: !0 });
      }, m = function(b) {
        if (x.paused || !l) return;
        const j = b.relatedTarget;
        j !== null && (l.contains(j) || Ne(h.current, { select: !0 }));
      }, w = function(b) {
        if (document.activeElement === document.body)
          for (const N of b)
            N.removedNodes.length > 0 && Ne(l);
      };
      document.addEventListener("focusin", u), document.addEventListener("focusout", m);
      const y = new MutationObserver(w);
      return l && y.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", u), document.removeEventListener("focusout", m), y.disconnect();
      };
    }
  }, [n, l, x.paused]), g.useEffect(() => {
    if (l) {
      xn.add(x);
      const u = document.activeElement;
      if (!l.contains(u)) {
        const w = new CustomEvent(Zt, gn);
        l.addEventListener(Zt, d), l.dispatchEvent(w), w.defaultPrevented || (va(Ca(oo(l)), { select: !0 }), document.activeElement === u && Ne(l));
      }
      return () => {
        l.removeEventListener(Zt, d), setTimeout(() => {
          const w = new CustomEvent(Qt, gn);
          l.addEventListener(Qt, f), l.dispatchEvent(w), w.defaultPrevented || Ne(u ?? document.body, { select: !0 }), l.removeEventListener(Qt, f), xn.remove(x);
        }, 0);
      };
    }
  }, [l, d, f, x]);
  const v = g.useCallback(
    (u) => {
      if (!r && !n || x.paused) return;
      const m = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, w = document.activeElement;
      if (m && w) {
        const y = u.currentTarget, [b, j] = ya(y);
        b && j ? !u.shiftKey && w === j ? (u.preventDefault(), r && Ne(b, { select: !0 })) : u.shiftKey && w === b && (u.preventDefault(), r && Ne(j, { select: !0 })) : w === y && u.preventDefault();
      }
    },
    [r, n, x.paused]
  );
  return /* @__PURE__ */ a.jsx(te.div, { tabIndex: -1, ...i, ref: p, onKeyDown: v });
});
no.displayName = xa;
function va(t, { select: e = !1 } = {}) {
  const r = document.activeElement;
  for (const n of t)
    if (Ne(n, { select: e }), document.activeElement !== r) return;
}
function ya(t) {
  const e = oo(t), r = mn(e, t), n = mn(e.reverse(), t);
  return [r, n];
}
function oo(t) {
  const e = [], r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) e.push(r.currentNode);
  return e;
}
function mn(t, e) {
  for (const r of t)
    if (!wa(r, { upTo: e })) return r;
}
function wa(t, { upTo: e }) {
  if (getComputedStyle(t).visibility === "hidden") return !0;
  for (; t; ) {
    if (e !== void 0 && t === e) return !1;
    if (getComputedStyle(t).display === "none") return !0;
    t = t.parentElement;
  }
  return !1;
}
function ba(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
function Ne(t, { select: e = !1 } = {}) {
  if (t && t.focus) {
    const r = document.activeElement;
    t.focus({ preventScroll: !0 }), t !== r && ba(t) && e && t.select();
  }
}
var xn = Sa();
function Sa() {
  let t = [];
  return {
    add(e) {
      const r = t[0];
      e !== r && (r == null || r.pause()), t = vn(t, e), t.unshift(e);
    },
    remove(e) {
      var r;
      t = vn(t, e), (r = t[0]) == null || r.resume();
    }
  };
}
function vn(t, e) {
  const r = [...t], n = r.indexOf(e);
  return n !== -1 && r.splice(n, 1), r;
}
function Ca(t) {
  return t.filter((e) => e.tagName !== "A");
}
var ae = globalThis != null && globalThis.document ? g.useLayoutEffect : () => {
}, ja = g[" useId ".trim().toString()] || (() => {
}), ka = 0;
function Rr(t) {
  const [e, r] = g.useState(ja());
  return ae(() => {
    r((n) => n ?? String(ka++));
  }, [t]), e ? `radix-${e}` : "";
}
const Ea = ["top", "right", "bottom", "left"], Re = Math.min, ce = Math.max, Tt = Math.round, vt = Math.floor, ve = (t) => ({
  x: t,
  y: t
}), Na = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ra = {
  start: "end",
  end: "start"
};
function mr(t, e, r) {
  return ce(t, Re(e, r));
}
function je(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function ke(t) {
  return t.split("-")[0];
}
function qe(t) {
  return t.split("-")[1];
}
function Or(t) {
  return t === "x" ? "y" : "x";
}
function Pr(t) {
  return t === "y" ? "height" : "width";
}
function Se(t) {
  return ["top", "bottom"].includes(ke(t)) ? "y" : "x";
}
function Lr(t) {
  return Or(Se(t));
}
function Oa(t, e, r) {
  r === void 0 && (r = !1);
  const n = qe(t), o = Lr(t), s = Pr(o);
  let i = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (i = Mt(i)), [i, Mt(i)];
}
function Pa(t) {
  const e = Mt(t);
  return [xr(t), e, xr(e)];
}
function xr(t) {
  return t.replace(/start|end/g, (e) => Ra[e]);
}
function La(t, e, r) {
  const n = ["left", "right"], o = ["right", "left"], s = ["top", "bottom"], i = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return r ? e ? o : n : e ? n : o;
    case "left":
    case "right":
      return e ? s : i;
    default:
      return [];
  }
}
function Aa(t, e, r, n) {
  const o = qe(t);
  let s = La(ke(t), r === "start", n);
  return o && (s = s.map((i) => i + "-" + o), e && (s = s.concat(s.map(xr)))), s;
}
function Mt(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Na[e]);
}
function Ta(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function so(t) {
  return typeof t != "number" ? Ta(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function It(t) {
  const {
    x: e,
    y: r,
    width: n,
    height: o
  } = t;
  return {
    width: n,
    height: o,
    top: r,
    left: e,
    right: e + n,
    bottom: r + o,
    x: e,
    y: r
  };
}
function yn(t, e, r) {
  let {
    reference: n,
    floating: o
  } = t;
  const s = Se(e), i = Lr(e), l = Pr(i), c = ke(e), d = s === "y", f = n.x + n.width / 2 - o.width / 2, h = n.y + n.height / 2 - o.height / 2, p = n[l] / 2 - o[l] / 2;
  let x;
  switch (c) {
    case "top":
      x = {
        x: f,
        y: n.y - o.height
      };
      break;
    case "bottom":
      x = {
        x: f,
        y: n.y + n.height
      };
      break;
    case "right":
      x = {
        x: n.x + n.width,
        y: h
      };
      break;
    case "left":
      x = {
        x: n.x - o.width,
        y: h
      };
      break;
    default:
      x = {
        x: n.x,
        y: n.y
      };
  }
  switch (qe(e)) {
    case "start":
      x[i] -= p * (r && d ? -1 : 1);
      break;
    case "end":
      x[i] += p * (r && d ? -1 : 1);
      break;
  }
  return x;
}
const Ma = async (t, e, r) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = r, l = s.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(e));
  let d = await i.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: f,
    y: h
  } = yn(d, n, c), p = n, x = {}, v = 0;
  for (let u = 0; u < l.length; u++) {
    const {
      name: m,
      fn: w
    } = l[u], {
      x: y,
      y: b,
      data: j,
      reset: N
    } = await w({
      x: f,
      y: h,
      initialPlacement: n,
      placement: p,
      strategy: o,
      middlewareData: x,
      rects: d,
      platform: i,
      elements: {
        reference: t,
        floating: e
      }
    });
    f = y ?? f, h = b ?? h, x = {
      ...x,
      [m]: {
        ...x[m],
        ...j
      }
    }, N && v <= 50 && (v++, typeof N == "object" && (N.placement && (p = N.placement), N.rects && (d = N.rects === !0 ? await i.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : N.rects), {
      x: f,
      y: h
    } = yn(d, p, c)), u = -1);
  }
  return {
    x: f,
    y: h,
    placement: p,
    strategy: o,
    middlewareData: x
  };
};
async function dt(t, e) {
  var r;
  e === void 0 && (e = {});
  const {
    x: n,
    y: o,
    platform: s,
    rects: i,
    elements: l,
    strategy: c
  } = t, {
    boundary: d = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: h = "floating",
    altBoundary: p = !1,
    padding: x = 0
  } = je(e, t), v = so(x), m = l[p ? h === "floating" ? "reference" : "floating" : h], w = It(await s.getClippingRect({
    element: (r = await (s.isElement == null ? void 0 : s.isElement(m))) == null || r ? m : m.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)),
    boundary: d,
    rootBoundary: f,
    strategy: c
  })), y = h === "floating" ? {
    x: n,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), j = await (s.isElement == null ? void 0 : s.isElement(b)) ? await (s.getScale == null ? void 0 : s.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, N = It(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: y,
    offsetParent: b,
    strategy: c
  }) : y);
  return {
    top: (w.top - N.top + v.top) / j.y,
    bottom: (N.bottom - w.bottom + v.bottom) / j.y,
    left: (w.left - N.left + v.left) / j.x,
    right: (N.right - w.right + v.right) / j.x
  };
}
const Ia = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: r,
      y: n,
      placement: o,
      rects: s,
      platform: i,
      elements: l,
      middlewareData: c
    } = e, {
      element: d,
      padding: f = 0
    } = je(t, e) || {};
    if (d == null)
      return {};
    const h = so(f), p = {
      x: r,
      y: n
    }, x = Lr(o), v = Pr(x), u = await i.getDimensions(d), m = x === "y", w = m ? "top" : "left", y = m ? "bottom" : "right", b = m ? "clientHeight" : "clientWidth", j = s.reference[v] + s.reference[x] - p[x] - s.floating[v], N = p[x] - s.reference[x], R = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(d));
    let k = R ? R[b] : 0;
    (!k || !await (i.isElement == null ? void 0 : i.isElement(R))) && (k = l.floating[b] || s.floating[v]);
    const C = j / 2 - N / 2, T = k / 2 - u[v] / 2 - 1, I = Re(h[w], T), M = Re(h[y], T), B = I, G = k - u[v] - M, z = k / 2 - u[v] / 2 + C, _ = mr(B, z, G), D = !c.arrow && qe(o) != null && z !== _ && s.reference[v] / 2 - (z < B ? I : M) - u[v] / 2 < 0, V = D ? z < B ? z - B : z - G : 0;
    return {
      [x]: p[x] + V,
      data: {
        [x]: _,
        centerOffset: z - _ - V,
        ...D && {
          alignmentOffset: V
        }
      },
      reset: D
    };
  }
}), Da = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var r, n;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: l,
        platform: c,
        elements: d
      } = e, {
        mainAxis: f = !0,
        crossAxis: h = !0,
        fallbackPlacements: p,
        fallbackStrategy: x = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: u = !0,
        ...m
      } = je(t, e);
      if ((r = s.arrow) != null && r.alignmentOffset)
        return {};
      const w = ke(o), y = Se(l), b = ke(l) === l, j = await (c.isRTL == null ? void 0 : c.isRTL(d.floating)), N = p || (b || !u ? [Mt(l)] : Pa(l)), R = v !== "none";
      !p && R && N.push(...Aa(l, u, v, j));
      const k = [l, ...N], C = await dt(e, m), T = [];
      let I = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (f && T.push(C[w]), h) {
        const _ = Oa(o, i, j);
        T.push(C[_[0]], C[_[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: T
      }], !T.every((_) => _ <= 0)) {
        var M, B;
        const _ = (((M = s.flip) == null ? void 0 : M.index) || 0) + 1, D = k[_];
        if (D) {
          var G;
          const E = h === "alignment" ? y !== Se(D) : !1, F = ((G = I[0]) == null ? void 0 : G.overflows[0]) > 0;
          if (!E || F)
            return {
              data: {
                index: _,
                overflows: I
              },
              reset: {
                placement: D
              }
            };
        }
        let V = (B = I.filter((E) => E.overflows[0] <= 0).sort((E, F) => E.overflows[1] - F.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!V)
          switch (x) {
            case "bestFit": {
              var z;
              const E = (z = I.filter((F) => {
                if (R) {
                  const S = Se(F.placement);
                  return S === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  S === "y";
                }
                return !0;
              }).map((F) => [F.placement, F.overflows.filter((S) => S > 0).reduce((S, A) => S + A, 0)]).sort((F, S) => F[1] - S[1])[0]) == null ? void 0 : z[0];
              E && (V = E);
              break;
            }
            case "initialPlacement":
              V = l;
              break;
          }
        if (o !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
};
function wn(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function bn(t) {
  return Ea.some((e) => t[e] >= 0);
}
const _a = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: r
      } = e, {
        strategy: n = "referenceHidden",
        ...o
      } = je(t, e);
      switch (n) {
        case "referenceHidden": {
          const s = await dt(e, {
            ...o,
            elementContext: "reference"
          }), i = wn(s, r.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: bn(i)
            }
          };
        }
        case "escaped": {
          const s = await dt(e, {
            ...o,
            altBoundary: !0
          }), i = wn(s, r.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: bn(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Fa(t, e) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = t, s = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), i = ke(r), l = qe(r), c = Se(r) === "y", d = ["left", "top"].includes(i) ? -1 : 1, f = s && c ? -1 : 1, h = je(e, t);
  let {
    mainAxis: p,
    crossAxis: x,
    alignmentAxis: v
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return l && typeof v == "number" && (x = l === "end" ? v * -1 : v), c ? {
    x: x * f,
    y: p * d
  } : {
    x: p * d,
    y: x * f
  };
}
const $a = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var r, n;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: l
      } = e, c = await Fa(e, t);
      return i === ((r = l.offset) == null ? void 0 : r.placement) && (n = l.arrow) != null && n.alignmentOffset ? {} : {
        x: o + c.x,
        y: s + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
}, Ba = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: r,
        y: n,
        placement: o
      } = e, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: l = {
          fn: (m) => {
            let {
              x: w,
              y
            } = m;
            return {
              x: w,
              y
            };
          }
        },
        ...c
      } = je(t, e), d = {
        x: r,
        y: n
      }, f = await dt(e, c), h = Se(ke(o)), p = Or(h);
      let x = d[p], v = d[h];
      if (s) {
        const m = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", y = x + f[m], b = x - f[w];
        x = mr(y, x, b);
      }
      if (i) {
        const m = h === "y" ? "top" : "left", w = h === "y" ? "bottom" : "right", y = v + f[m], b = v - f[w];
        v = mr(y, v, b);
      }
      const u = l.fn({
        ...e,
        [p]: x,
        [h]: v
      });
      return {
        ...u,
        data: {
          x: u.x - r,
          y: u.y - n,
          enabled: {
            [p]: s,
            [h]: i
          }
        }
      };
    }
  };
}, za = function(t) {
  return t === void 0 && (t = {}), {
    options: t,
    fn(e) {
      const {
        x: r,
        y: n,
        placement: o,
        rects: s,
        middlewareData: i
      } = e, {
        offset: l = 0,
        mainAxis: c = !0,
        crossAxis: d = !0
      } = je(t, e), f = {
        x: r,
        y: n
      }, h = Se(o), p = Or(h);
      let x = f[p], v = f[h];
      const u = je(l, e), m = typeof u == "number" ? {
        mainAxis: u,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...u
      };
      if (c) {
        const b = p === "y" ? "height" : "width", j = s.reference[p] - s.floating[b] + m.mainAxis, N = s.reference[p] + s.reference[b] - m.mainAxis;
        x < j ? x = j : x > N && (x = N);
      }
      if (d) {
        var w, y;
        const b = p === "y" ? "width" : "height", j = ["top", "left"].includes(ke(o)), N = s.reference[h] - s.floating[b] + (j && ((w = i.offset) == null ? void 0 : w[h]) || 0) + (j ? 0 : m.crossAxis), R = s.reference[h] + s.reference[b] + (j ? 0 : ((y = i.offset) == null ? void 0 : y[h]) || 0) - (j ? m.crossAxis : 0);
        v < N ? v = N : v > R && (v = R);
      }
      return {
        [p]: x,
        [h]: v
      };
    }
  };
}, Wa = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var r, n;
      const {
        placement: o,
        rects: s,
        platform: i,
        elements: l
      } = e, {
        apply: c = () => {
        },
        ...d
      } = je(t, e), f = await dt(e, d), h = ke(o), p = qe(o), x = Se(o) === "y", {
        width: v,
        height: u
      } = s.floating;
      let m, w;
      h === "top" || h === "bottom" ? (m = h, w = p === (await (i.isRTL == null ? void 0 : i.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (w = h, m = p === "end" ? "top" : "bottom");
      const y = u - f.top - f.bottom, b = v - f.left - f.right, j = Re(u - f[m], y), N = Re(v - f[w], b), R = !e.middlewareData.shift;
      let k = j, C = N;
      if ((r = e.middlewareData.shift) != null && r.enabled.x && (C = b), (n = e.middlewareData.shift) != null && n.enabled.y && (k = y), R && !p) {
        const I = ce(f.left, 0), M = ce(f.right, 0), B = ce(f.top, 0), G = ce(f.bottom, 0);
        x ? C = v - 2 * (I !== 0 || M !== 0 ? I + M : ce(f.left, f.right)) : k = u - 2 * (B !== 0 || G !== 0 ? B + G : ce(f.top, f.bottom));
      }
      await c({
        ...e,
        availableWidth: C,
        availableHeight: k
      });
      const T = await i.getDimensions(l.floating);
      return v !== T.width || u !== T.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Bt() {
  return typeof window < "u";
}
function Je(t) {
  return io(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function de(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function we(t) {
  var e;
  return (e = (io(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function io(t) {
  return Bt() ? t instanceof Node || t instanceof de(t).Node : !1;
}
function fe(t) {
  return Bt() ? t instanceof Element || t instanceof de(t).Element : !1;
}
function ye(t) {
  return Bt() ? t instanceof HTMLElement || t instanceof de(t).HTMLElement : !1;
}
function Sn(t) {
  return !Bt() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof de(t).ShadowRoot;
}
function ft(t) {
  const {
    overflow: e,
    overflowX: r,
    overflowY: n,
    display: o
  } = he(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + r) && !["inline", "contents"].includes(o);
}
function Va(t) {
  return ["table", "td", "th"].includes(Je(t));
}
function zt(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function Ar(t) {
  const e = Tr(), r = fe(t) ? he(t) : t;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !e && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !e && (r.filter ? r.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function Ha(t) {
  let e = Oe(t);
  for (; ye(e) && !Ke(e); ) {
    if (Ar(e))
      return e;
    if (zt(e))
      return null;
    e = Oe(e);
  }
  return null;
}
function Tr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ke(t) {
  return ["html", "body", "#document"].includes(Je(t));
}
function he(t) {
  return de(t).getComputedStyle(t);
}
function Wt(t) {
  return fe(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function Oe(t) {
  if (Je(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Sn(t) && t.host || // Fallback.
    we(t)
  );
  return Sn(e) ? e.host : e;
}
function ao(t) {
  const e = Oe(t);
  return Ke(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : ye(e) && ft(e) ? e : ao(e);
}
function ut(t, e, r) {
  var n;
  e === void 0 && (e = []), r === void 0 && (r = !0);
  const o = ao(t), s = o === ((n = t.ownerDocument) == null ? void 0 : n.body), i = de(o);
  if (s) {
    const l = vr(i);
    return e.concat(i, i.visualViewport || [], ft(o) ? o : [], l && r ? ut(l) : []);
  }
  return e.concat(o, ut(o, [], r));
}
function vr(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function lo(t) {
  const e = he(t);
  let r = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const o = ye(t), s = o ? t.offsetWidth : r, i = o ? t.offsetHeight : n, l = Tt(r) !== s || Tt(n) !== i;
  return l && (r = s, n = i), {
    width: r,
    height: n,
    $: l
  };
}
function Mr(t) {
  return fe(t) ? t : t.contextElement;
}
function Ue(t) {
  const e = Mr(t);
  if (!ye(e))
    return ve(1);
  const r = e.getBoundingClientRect(), {
    width: n,
    height: o,
    $: s
  } = lo(e);
  let i = (s ? Tt(r.width) : r.width) / n, l = (s ? Tt(r.height) : r.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: i,
    y: l
  };
}
const Ua = /* @__PURE__ */ ve(0);
function co(t) {
  const e = de(t);
  return !Tr() || !e.visualViewport ? Ua : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Ga(t, e, r) {
  return e === void 0 && (e = !1), !r || e && r !== de(t) ? !1 : e;
}
function De(t, e, r, n) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  const o = t.getBoundingClientRect(), s = Mr(t);
  let i = ve(1);
  e && (n ? fe(n) && (i = Ue(n)) : i = Ue(t));
  const l = Ga(s, r, n) ? co(s) : ve(0);
  let c = (o.left + l.x) / i.x, d = (o.top + l.y) / i.y, f = o.width / i.x, h = o.height / i.y;
  if (s) {
    const p = de(s), x = n && fe(n) ? de(n) : n;
    let v = p, u = vr(v);
    for (; u && n && x !== v; ) {
      const m = Ue(u), w = u.getBoundingClientRect(), y = he(u), b = w.left + (u.clientLeft + parseFloat(y.paddingLeft)) * m.x, j = w.top + (u.clientTop + parseFloat(y.paddingTop)) * m.y;
      c *= m.x, d *= m.y, f *= m.x, h *= m.y, c += b, d += j, v = de(u), u = vr(v);
    }
  }
  return It({
    width: f,
    height: h,
    x: c,
    y: d
  });
}
function Ir(t, e) {
  const r = Wt(t).scrollLeft;
  return e ? e.left + r : De(we(t)).left + r;
}
function uo(t, e, r) {
  r === void 0 && (r = !1);
  const n = t.getBoundingClientRect(), o = n.left + e.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    Ir(t, n)
  )), s = n.top + e.scrollTop;
  return {
    x: o,
    y: s
  };
}
function Ka(t) {
  let {
    elements: e,
    rect: r,
    offsetParent: n,
    strategy: o
  } = t;
  const s = o === "fixed", i = we(n), l = e ? zt(e.floating) : !1;
  if (n === i || l && s)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = ve(1);
  const f = ve(0), h = ye(n);
  if ((h || !h && !s) && ((Je(n) !== "body" || ft(i)) && (c = Wt(n)), ye(n))) {
    const x = De(n);
    d = Ue(n), f.x = x.x + n.clientLeft, f.y = x.y + n.clientTop;
  }
  const p = i && !h && !s ? uo(i, c, !0) : ve(0);
  return {
    width: r.width * d.x,
    height: r.height * d.y,
    x: r.x * d.x - c.scrollLeft * d.x + f.x + p.x,
    y: r.y * d.y - c.scrollTop * d.y + f.y + p.y
  };
}
function Ya(t) {
  return Array.from(t.getClientRects());
}
function Xa(t) {
  const e = we(t), r = Wt(t), n = t.ownerDocument.body, o = ce(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), s = ce(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + Ir(t);
  const l = -r.scrollTop;
  return he(n).direction === "rtl" && (i += ce(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: l
  };
}
function qa(t, e) {
  const r = de(t), n = we(t), o = r.visualViewport;
  let s = n.clientWidth, i = n.clientHeight, l = 0, c = 0;
  if (o) {
    s = o.width, i = o.height;
    const d = Tr();
    (!d || d && e === "fixed") && (l = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: l,
    y: c
  };
}
function Ja(t, e) {
  const r = De(t, !0, e === "fixed"), n = r.top + t.clientTop, o = r.left + t.clientLeft, s = ye(t) ? Ue(t) : ve(1), i = t.clientWidth * s.x, l = t.clientHeight * s.y, c = o * s.x, d = n * s.y;
  return {
    width: i,
    height: l,
    x: c,
    y: d
  };
}
function Cn(t, e, r) {
  let n;
  if (e === "viewport")
    n = qa(t, r);
  else if (e === "document")
    n = Xa(we(t));
  else if (fe(e))
    n = Ja(e, r);
  else {
    const o = co(t);
    n = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return It(n);
}
function fo(t, e) {
  const r = Oe(t);
  return r === e || !fe(r) || Ke(r) ? !1 : he(r).position === "fixed" || fo(r, e);
}
function Za(t, e) {
  const r = e.get(t);
  if (r)
    return r;
  let n = ut(t, [], !1).filter((l) => fe(l) && Je(l) !== "body"), o = null;
  const s = he(t).position === "fixed";
  let i = s ? Oe(t) : t;
  for (; fe(i) && !Ke(i); ) {
    const l = he(i), c = Ar(i);
    !c && l.position === "fixed" && (o = null), (s ? !c && !o : !c && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ft(i) && !c && fo(t, i)) ? n = n.filter((f) => f !== i) : o = l, i = Oe(i);
  }
  return e.set(t, n), n;
}
function Qa(t) {
  let {
    element: e,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = t;
  const i = [...r === "clippingAncestors" ? zt(e) ? [] : Za(e, this._c) : [].concat(r), n], l = i[0], c = i.reduce((d, f) => {
    const h = Cn(e, f, o);
    return d.top = ce(h.top, d.top), d.right = Re(h.right, d.right), d.bottom = Re(h.bottom, d.bottom), d.left = ce(h.left, d.left), d;
  }, Cn(e, l, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function el(t) {
  const {
    width: e,
    height: r
  } = lo(t);
  return {
    width: e,
    height: r
  };
}
function tl(t, e, r) {
  const n = ye(e), o = we(e), s = r === "fixed", i = De(t, !0, s, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ve(0);
  function d() {
    c.x = Ir(o);
  }
  if (n || !n && !s)
    if ((Je(e) !== "body" || ft(o)) && (l = Wt(e)), n) {
      const x = De(e, !0, s, e);
      c.x = x.x + e.clientLeft, c.y = x.y + e.clientTop;
    } else o && d();
  s && !n && o && d();
  const f = o && !n && !s ? uo(o, l) : ve(0), h = i.left + l.scrollLeft - c.x - f.x, p = i.top + l.scrollTop - c.y - f.y;
  return {
    x: h,
    y: p,
    width: i.width,
    height: i.height
  };
}
function er(t) {
  return he(t).position === "static";
}
function jn(t, e) {
  if (!ye(t) || he(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let r = t.offsetParent;
  return we(t) === r && (r = r.ownerDocument.body), r;
}
function ho(t, e) {
  const r = de(t);
  if (zt(t))
    return r;
  if (!ye(t)) {
    let o = Oe(t);
    for (; o && !Ke(o); ) {
      if (fe(o) && !er(o))
        return o;
      o = Oe(o);
    }
    return r;
  }
  let n = jn(t, e);
  for (; n && Va(n) && er(n); )
    n = jn(n, e);
  return n && Ke(n) && er(n) && !Ar(n) ? r : n || Ha(t) || r;
}
const rl = async function(t) {
  const e = this.getOffsetParent || ho, r = this.getDimensions, n = await r(t.floating);
  return {
    reference: tl(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function nl(t) {
  return he(t).direction === "rtl";
}
const ol = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ka,
  getDocumentElement: we,
  getClippingRect: Qa,
  getOffsetParent: ho,
  getElementRects: rl,
  getClientRects: Ya,
  getDimensions: el,
  getScale: Ue,
  isElement: fe,
  isRTL: nl
};
function po(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function sl(t, e) {
  let r = null, n;
  const o = we(t);
  function s() {
    var l;
    clearTimeout(n), (l = r) == null || l.disconnect(), r = null;
  }
  function i(l, c) {
    l === void 0 && (l = !1), c === void 0 && (c = 1), s();
    const d = t.getBoundingClientRect(), {
      left: f,
      top: h,
      width: p,
      height: x
    } = d;
    if (l || e(), !p || !x)
      return;
    const v = vt(h), u = vt(o.clientWidth - (f + p)), m = vt(o.clientHeight - (h + x)), w = vt(f), b = {
      rootMargin: -v + "px " + -u + "px " + -m + "px " + -w + "px",
      threshold: ce(0, Re(1, c)) || 1
    };
    let j = !0;
    function N(R) {
      const k = R[0].intersectionRatio;
      if (k !== c) {
        if (!j)
          return i();
        k ? i(!1, k) : n = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      k === 1 && !po(d, t.getBoundingClientRect()) && i(), j = !1;
    }
    try {
      r = new IntersectionObserver(N, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(N, b);
    }
    r.observe(t);
  }
  return i(!0), s;
}
function il(t, e, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, d = Mr(t), f = o || s ? [...d ? ut(d) : [], ...ut(e)] : [];
  f.forEach((w) => {
    o && w.addEventListener("scroll", r, {
      passive: !0
    }), s && w.addEventListener("resize", r);
  });
  const h = d && l ? sl(d, r) : null;
  let p = -1, x = null;
  i && (x = new ResizeObserver((w) => {
    let [y] = w;
    y && y.target === d && x && (x.unobserve(e), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var b;
      (b = x) == null || b.observe(e);
    })), r();
  }), d && !c && x.observe(d), x.observe(e));
  let v, u = c ? De(t) : null;
  c && m();
  function m() {
    const w = De(t);
    u && !po(u, w) && r(), u = w, v = requestAnimationFrame(m);
  }
  return r(), () => {
    var w;
    f.forEach((y) => {
      o && y.removeEventListener("scroll", r), s && y.removeEventListener("resize", r);
    }), h == null || h(), (w = x) == null || w.disconnect(), x = null, c && cancelAnimationFrame(v);
  };
}
const al = $a, ll = Ba, cl = Da, dl = Wa, ul = _a, kn = Ia, fl = za, hl = (t, e, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: ol,
    ...r
  }, s = {
    ...o.platform,
    _c: n
  };
  return Ma(t, e, {
    ...o,
    platform: s
  });
};
var jt = typeof document < "u" ? Rs : Te;
function Dt(t, e) {
  if (t === e)
    return !0;
  if (typeof t != typeof e)
    return !1;
  if (typeof t == "function" && t.toString() === e.toString())
    return !0;
  let r, n, o;
  if (t && e && typeof t == "object") {
    if (Array.isArray(t)) {
      if (r = t.length, r !== e.length) return !1;
      for (n = r; n-- !== 0; )
        if (!Dt(t[n], e[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(t), r = o.length, r !== Object.keys(e).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(e, o[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const s = o[n];
      if (!(s === "_owner" && t.$$typeof) && !Dt(t[s], e[s]))
        return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
function go(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function En(t, e) {
  const r = go(t);
  return Math.round(e * r) / r;
}
function tr(t) {
  const e = g.useRef(t);
  return jt(() => {
    e.current = t;
  }), e;
}
function pl(t) {
  t === void 0 && (t = {});
  const {
    placement: e = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: l = !0,
    whileElementsMounted: c,
    open: d
  } = t, [f, h] = g.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [p, x] = g.useState(n);
  Dt(p, n) || x(n);
  const [v, u] = g.useState(null), [m, w] = g.useState(null), y = g.useCallback((E) => {
    E !== R.current && (R.current = E, u(E));
  }, []), b = g.useCallback((E) => {
    E !== k.current && (k.current = E, w(E));
  }, []), j = s || v, N = i || m, R = g.useRef(null), k = g.useRef(null), C = g.useRef(f), T = c != null, I = tr(c), M = tr(o), B = tr(d), G = g.useCallback(() => {
    if (!R.current || !k.current)
      return;
    const E = {
      placement: e,
      strategy: r,
      middleware: p
    };
    M.current && (E.platform = M.current), hl(R.current, k.current, E).then((F) => {
      const S = {
        ...F,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: B.current !== !1
      };
      z.current && !Dt(C.current, S) && (C.current = S, Ft.flushSync(() => {
        h(S);
      }));
    });
  }, [p, e, r, M, B]);
  jt(() => {
    d === !1 && C.current.isPositioned && (C.current.isPositioned = !1, h((E) => ({
      ...E,
      isPositioned: !1
    })));
  }, [d]);
  const z = g.useRef(!1);
  jt(() => (z.current = !0, () => {
    z.current = !1;
  }), []), jt(() => {
    if (j && (R.current = j), N && (k.current = N), j && N) {
      if (I.current)
        return I.current(j, N, G);
      G();
    }
  }, [j, N, G, I, T]);
  const _ = g.useMemo(() => ({
    reference: R,
    floating: k,
    setReference: y,
    setFloating: b
  }), [y, b]), D = g.useMemo(() => ({
    reference: j,
    floating: N
  }), [j, N]), V = g.useMemo(() => {
    const E = {
      position: r,
      left: 0,
      top: 0
    };
    if (!D.floating)
      return E;
    const F = En(D.floating, f.x), S = En(D.floating, f.y);
    return l ? {
      ...E,
      transform: "translate(" + F + "px, " + S + "px)",
      ...go(D.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: F,
      top: S
    };
  }, [r, l, D.floating, f.x, f.y]);
  return g.useMemo(() => ({
    ...f,
    update: G,
    refs: _,
    elements: D,
    floatingStyles: V
  }), [f, G, _, D, V]);
}
const gl = (t) => {
  function e(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: t,
    fn(r) {
      const {
        element: n,
        padding: o
      } = typeof t == "function" ? t(r) : t;
      return n && e(n) ? n.current != null ? kn({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? kn({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, ml = (t, e) => ({
  ...al(t),
  options: [t, e]
}), xl = (t, e) => ({
  ...ll(t),
  options: [t, e]
}), vl = (t, e) => ({
  ...fl(t),
  options: [t, e]
}), yl = (t, e) => ({
  ...cl(t),
  options: [t, e]
}), wl = (t, e) => ({
  ...dl(t),
  options: [t, e]
}), bl = (t, e) => ({
  ...ul(t),
  options: [t, e]
}), Sl = (t, e) => ({
  ...gl(t),
  options: [t, e]
});
var Cl = "Arrow", mo = g.forwardRef((t, e) => {
  const { children: r, width: n = 10, height: o = 5, ...s } = t;
  return /* @__PURE__ */ a.jsx(
    te.svg,
    {
      ...s,
      ref: e,
      width: n,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? r : /* @__PURE__ */ a.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
mo.displayName = Cl;
var jl = mo;
function kl(t) {
  const [e, r] = g.useState(void 0);
  return ae(() => {
    if (t) {
      r({ width: t.offsetWidth, height: t.offsetHeight });
      const n = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let i, l;
        if ("borderBoxSize" in s) {
          const c = s.borderBoxSize, d = Array.isArray(c) ? c[0] : c;
          i = d.inlineSize, l = d.blockSize;
        } else
          i = t.offsetWidth, l = t.offsetHeight;
        r({ width: i, height: l });
      });
      return n.observe(t, { box: "border-box" }), () => n.unobserve(t);
    } else
      r(void 0);
  }, [t]), e;
}
var Dr = "Popper", [xo, vo] = Nr(Dr), [El, yo] = xo(Dr), wo = (t) => {
  const { __scopePopper: e, children: r } = t, [n, o] = g.useState(null);
  return /* @__PURE__ */ a.jsx(El, { scope: e, anchor: n, onAnchorChange: o, children: r });
};
wo.displayName = Dr;
var bo = "PopperAnchor", So = g.forwardRef(
  (t, e) => {
    const { __scopePopper: r, virtualRef: n, ...o } = t, s = yo(bo, r), i = g.useRef(null), l = oe(e, i);
    return g.useEffect(() => {
      s.onAnchorChange((n == null ? void 0 : n.current) || i.current);
    }), n ? null : /* @__PURE__ */ a.jsx(te.div, { ...o, ref: l });
  }
);
So.displayName = bo;
var _r = "PopperContent", [Nl, Rl] = xo(_r), Co = g.forwardRef(
  (t, e) => {
    var O, W, Z, Y, X, q;
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: l = 0,
      avoidCollisions: c = !0,
      collisionBoundary: d = [],
      collisionPadding: f = 0,
      sticky: h = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: x = "optimized",
      onPlaced: v,
      ...u
    } = t, m = yo(_r, r), [w, y] = g.useState(null), b = oe(e, (le) => y(le)), [j, N] = g.useState(null), R = kl(j), k = (R == null ? void 0 : R.width) ?? 0, C = (R == null ? void 0 : R.height) ?? 0, T = n + (s !== "center" ? "-" + s : ""), I = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, M = Array.isArray(d) ? d : [d], B = M.length > 0, G = {
      padding: I,
      boundary: M.filter(Pl),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: B
    }, { refs: z, floatingStyles: _, placement: D, isPositioned: V, middlewareData: E } = pl({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: (...le) => il(...le, {
        animationFrame: x === "always"
      }),
      elements: {
        reference: m.anchor
      },
      middleware: [
        ml({ mainAxis: o + C, alignmentAxis: i }),
        c && xl({
          mainAxis: !0,
          crossAxis: !1,
          limiter: h === "partial" ? vl() : void 0,
          ...G
        }),
        c && yl({ ...G }),
        wl({
          ...G,
          apply: ({ elements: le, rects: pe, availableWidth: Qe, availableHeight: et }) => {
            const { width: tt, height: ks } = pe.reference, ht = le.floating.style;
            ht.setProperty("--radix-popper-available-width", `${Qe}px`), ht.setProperty("--radix-popper-available-height", `${et}px`), ht.setProperty("--radix-popper-anchor-width", `${tt}px`), ht.setProperty("--radix-popper-anchor-height", `${ks}px`);
          }
        }),
        j && Sl({ element: j, padding: l }),
        Ll({ arrowWidth: k, arrowHeight: C }),
        p && bl({ strategy: "referenceHidden", ...G })
      ]
    }), [F, S] = Eo(D), A = Ie(v);
    ae(() => {
      V && (A == null || A());
    }, [V, A]);
    const K = (O = E.arrow) == null ? void 0 : O.x, H = (W = E.arrow) == null ? void 0 : W.y, J = ((Z = E.arrow) == null ? void 0 : Z.centerOffset) !== 0, [ee, ie] = g.useState();
    return ae(() => {
      w && ie(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ a.jsx(
      "div",
      {
        ref: z.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ..._,
          transform: V ? _.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ee,
          "--radix-popper-transform-origin": [
            (Y = E.transformOrigin) == null ? void 0 : Y.x,
            (X = E.transformOrigin) == null ? void 0 : X.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((q = E.hide) == null ? void 0 : q.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t.dir,
        children: /* @__PURE__ */ a.jsx(
          Nl,
          {
            scope: r,
            placedSide: F,
            onArrowChange: N,
            arrowX: K,
            arrowY: H,
            shouldHideArrow: J,
            children: /* @__PURE__ */ a.jsx(
              te.div,
              {
                "data-side": F,
                "data-align": S,
                ...u,
                ref: b,
                style: {
                  ...u.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: V ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Co.displayName = _r;
var jo = "PopperArrow", Ol = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ko = g.forwardRef(function(e, r) {
  const { __scopePopper: n, ...o } = e, s = Rl(jo, n), i = Ol[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ a.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ a.jsx(
          jl,
          {
            ...o,
            ref: r,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
ko.displayName = jo;
function Pl(t) {
  return t !== null;
}
var Ll = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(e) {
    var m, w, y;
    const { placement: r, rects: n, middlewareData: o } = e, i = ((m = o.arrow) == null ? void 0 : m.centerOffset) !== 0, l = i ? 0 : t.arrowWidth, c = i ? 0 : t.arrowHeight, [d, f] = Eo(r), h = { start: "0%", center: "50%", end: "100%" }[f], p = (((w = o.arrow) == null ? void 0 : w.x) ?? 0) + l / 2, x = (((y = o.arrow) == null ? void 0 : y.y) ?? 0) + c / 2;
    let v = "", u = "";
    return d === "bottom" ? (v = i ? h : `${p}px`, u = `${-c}px`) : d === "top" ? (v = i ? h : `${p}px`, u = `${n.floating.height + c}px`) : d === "right" ? (v = `${-c}px`, u = i ? h : `${x}px`) : d === "left" && (v = `${n.floating.width + c}px`, u = i ? h : `${x}px`), { data: { x: v, y: u } };
  }
});
function Eo(t) {
  const [e, r = "center"] = t.split("-");
  return [e, r];
}
var Al = wo, Tl = So, Ml = Co, Il = ko, Dl = "Portal", No = g.forwardRef((t, e) => {
  var l;
  const { container: r, ...n } = t, [o, s] = g.useState(!1);
  ae(() => s(!0), []);
  const i = r || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return i ? Os.createPortal(/* @__PURE__ */ a.jsx(te.div, { ...n, ref: e }), i) : null;
});
No.displayName = Dl;
var _l = g[" useInsertionEffect ".trim().toString()] || ae;
function Nn({
  prop: t,
  defaultProp: e,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, s, i] = Fl({
    defaultProp: e,
    onChange: r
  }), l = t !== void 0, c = l ? t : o;
  {
    const f = g.useRef(t !== void 0);
    g.useEffect(() => {
      const h = f.current;
      h !== l && console.warn(
        `${n} is changing from ${h ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = l;
    }, [l, n]);
  }
  const d = g.useCallback(
    (f) => {
      var h;
      if (l) {
        const p = $l(f) ? f(t) : f;
        p !== t && ((h = i.current) == null || h.call(i, p));
      } else
        s(f);
    },
    [l, t, s, i]
  );
  return [c, d];
}
function Fl({
  defaultProp: t,
  onChange: e
}) {
  const [r, n] = g.useState(t), o = g.useRef(r), s = g.useRef(e);
  return _l(() => {
    s.current = e;
  }, [e]), g.useEffect(() => {
    var i;
    o.current !== r && ((i = s.current) == null || i.call(s, r), o.current = r);
  }, [r, o]), [r, n, s];
}
function $l(t) {
  return typeof t == "function";
}
function Bl(t) {
  const e = g.useRef({ value: t, previous: t });
  return g.useMemo(() => (e.current.value !== t && (e.current.previous = e.current.value, e.current.value = t), e.current.previous), [t]);
}
var Ro = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), zl = "VisuallyHidden", Wl = g.forwardRef(
  (t, e) => /* @__PURE__ */ a.jsx(
    te.span,
    {
      ...t,
      ref: e,
      style: { ...Ro, ...t.style }
    }
  )
);
Wl.displayName = zl;
var Vl = function(t) {
  if (typeof document > "u")
    return null;
  var e = Array.isArray(t) ? t[0] : t;
  return e.ownerDocument.body;
}, We = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), wt = {}, rr = 0, Oo = function(t) {
  return t && (t.host || Oo(t.parentNode));
}, Hl = function(t, e) {
  return e.map(function(r) {
    if (t.contains(r))
      return r;
    var n = Oo(r);
    return n && t.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, Ul = function(t, e, r, n) {
  var o = Hl(e, Array.isArray(t) ? t : [t]);
  wt[r] || (wt[r] = /* @__PURE__ */ new WeakMap());
  var s = wt[r], i = [], l = /* @__PURE__ */ new Set(), c = new Set(o), d = function(h) {
    !h || l.has(h) || (l.add(h), d(h.parentNode));
  };
  o.forEach(d);
  var f = function(h) {
    !h || c.has(h) || Array.prototype.forEach.call(h.children, function(p) {
      if (l.has(p))
        f(p);
      else
        try {
          var x = p.getAttribute(n), v = x !== null && x !== "false", u = (We.get(p) || 0) + 1, m = (s.get(p) || 0) + 1;
          We.set(p, u), s.set(p, m), i.push(p), u === 1 && v && yt.set(p, !0), m === 1 && p.setAttribute(r, "true"), v || p.setAttribute(n, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", p, w);
        }
    });
  };
  return f(e), l.clear(), rr++, function() {
    i.forEach(function(h) {
      var p = We.get(h) - 1, x = s.get(h) - 1;
      We.set(h, p), s.set(h, x), p || (yt.has(h) || h.removeAttribute(n), yt.delete(h)), x || h.removeAttribute(r);
    }), rr--, rr || (We = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), wt = {});
  };
}, Gl = function(t, e, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(t) ? t : [t]), o = Vl(t);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), Ul(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, me = function() {
  return me = Object.assign || function(e) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, me.apply(this, arguments);
};
function Po(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++)
      e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]]);
  return r;
}
function Kl(t, e, r) {
  if (r || arguments.length === 2) for (var n = 0, o = e.length, s; n < o; n++)
    (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return t.concat(s || Array.prototype.slice.call(e));
}
var kt = "right-scroll-bar-position", Et = "width-before-scroll-bar", Yl = "with-scroll-bars-hidden", Xl = "--removed-body-scroll-bar-size";
function nr(t, e) {
  return typeof t == "function" ? t(e) : t && (t.current = e), t;
}
function ql(t, e) {
  var r = at(function() {
    return {
      // value
      value: t,
      // last callback
      callback: e,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = e, r.facade;
}
var Jl = typeof window < "u" ? g.useLayoutEffect : g.useEffect, Rn = /* @__PURE__ */ new WeakMap();
function Zl(t, e) {
  var r = ql(null, function(n) {
    return t.forEach(function(o) {
      return nr(o, n);
    });
  });
  return Jl(function() {
    var n = Rn.get(r);
    if (n) {
      var o = new Set(n), s = new Set(t), i = r.current;
      o.forEach(function(l) {
        s.has(l) || nr(l, null);
      }), s.forEach(function(l) {
        o.has(l) || nr(l, i);
      });
    }
    Rn.set(r, t);
  }, [t]), r;
}
function Ql(t) {
  return t;
}
function ec(t, e) {
  e === void 0 && (e = Ql);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : t;
    },
    useMedium: function(s) {
      var i = e(s, n);
      return r.push(i), function() {
        r = r.filter(function(l) {
          return l !== i;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (n = !0; r.length; ) {
        var i = r;
        r = [], i.forEach(s);
      }
      r = {
        push: function(l) {
          return s(l);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(s) {
      n = !0;
      var i = [];
      if (r.length) {
        var l = r;
        r = [], l.forEach(s), i = r;
      }
      var c = function() {
        var f = i;
        i = [], f.forEach(s);
      }, d = function() {
        return Promise.resolve().then(c);
      };
      d(), r = {
        push: function(f) {
          i.push(f), d();
        },
        filter: function(f) {
          return i = i.filter(f), r;
        }
      };
    }
  };
  return o;
}
function tc(t) {
  t === void 0 && (t = {});
  var e = ec(null);
  return e.options = me({ async: !0, ssr: !1 }, t), e;
}
var Lo = function(t) {
  var e = t.sideCar, r = Po(t, ["sideCar"]);
  if (!e)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = e.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return g.createElement(n, me({}, r));
};
Lo.isSideCarExport = !0;
function rc(t, e) {
  return t.useMedium(e), Lo;
}
var Ao = tc(), or = function() {
}, Vt = g.forwardRef(function(t, e) {
  var r = g.useRef(null), n = g.useState({
    onScrollCapture: or,
    onWheelCapture: or,
    onTouchMoveCapture: or
  }), o = n[0], s = n[1], i = t.forwardProps, l = t.children, c = t.className, d = t.removeScrollBar, f = t.enabled, h = t.shards, p = t.sideCar, x = t.noIsolation, v = t.inert, u = t.allowPinchZoom, m = t.as, w = m === void 0 ? "div" : m, y = t.gapMode, b = Po(t, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), j = p, N = Zl([r, e]), R = me(me({}, b), o);
  return g.createElement(
    g.Fragment,
    null,
    f && g.createElement(j, { sideCar: Ao, removeScrollBar: d, shards: h, noIsolation: x, inert: v, setCallbacks: s, allowPinchZoom: !!u, lockRef: r, gapMode: y }),
    i ? g.cloneElement(g.Children.only(l), me(me({}, R), { ref: N })) : g.createElement(w, me({}, R, { className: c, ref: N }), l)
  );
});
Vt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Vt.classNames = {
  fullWidth: Et,
  zeroRight: kt
};
var nc = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function oc() {
  if (!document)
    return null;
  var t = document.createElement("style");
  t.type = "text/css";
  var e = nc();
  return e && t.setAttribute("nonce", e), t;
}
function sc(t, e) {
  t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e));
}
function ic(t) {
  var e = document.head || document.getElementsByTagName("head")[0];
  e.appendChild(t);
}
var ac = function() {
  var t = 0, e = null;
  return {
    add: function(r) {
      t == 0 && (e = oc()) && (sc(e, r), ic(e)), t++;
    },
    remove: function() {
      t--, !t && e && (e.parentNode && e.parentNode.removeChild(e), e = null);
    }
  };
}, lc = function() {
  var t = ac();
  return function(e, r) {
    g.useEffect(function() {
      return t.add(e), function() {
        t.remove();
      };
    }, [e && r]);
  };
}, To = function() {
  var t = lc(), e = function(r) {
    var n = r.styles, o = r.dynamic;
    return t(n, o), null;
  };
  return e;
}, cc = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, sr = function(t) {
  return parseInt(t || "", 10) || 0;
}, dc = function(t) {
  var e = window.getComputedStyle(document.body), r = e[t === "padding" ? "paddingLeft" : "marginLeft"], n = e[t === "padding" ? "paddingTop" : "marginTop"], o = e[t === "padding" ? "paddingRight" : "marginRight"];
  return [sr(r), sr(n), sr(o)];
}, uc = function(t) {
  if (t === void 0 && (t = "margin"), typeof window > "u")
    return cc;
  var e = dc(t), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: e[0],
    top: e[1],
    right: e[2],
    gap: Math.max(0, n - r + e[2] - e[0])
  };
}, fc = To(), Ge = "data-scroll-locked", hc = function(t, e, r, n) {
  var o = t.left, s = t.top, i = t.right, l = t.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(Yl, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(l, "px ").concat(n, `;
  }
  body[`).concat(Ge, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    e && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(l, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(kt, ` {
    right: `).concat(l, "px ").concat(n, `;
  }
  
  .`).concat(Et, ` {
    margin-right: `).concat(l, "px ").concat(n, `;
  }
  
  .`).concat(kt, " .").concat(kt, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Et, " .").concat(Et, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Ge, `] {
    `).concat(Xl, ": ").concat(l, `px;
  }
`);
}, On = function() {
  var t = parseInt(document.body.getAttribute(Ge) || "0", 10);
  return isFinite(t) ? t : 0;
}, pc = function() {
  g.useEffect(function() {
    return document.body.setAttribute(Ge, (On() + 1).toString()), function() {
      var t = On() - 1;
      t <= 0 ? document.body.removeAttribute(Ge) : document.body.setAttribute(Ge, t.toString());
    };
  }, []);
}, gc = function(t) {
  var e = t.noRelative, r = t.noImportant, n = t.gapMode, o = n === void 0 ? "margin" : n;
  pc();
  var s = g.useMemo(function() {
    return uc(o);
  }, [o]);
  return g.createElement(fc, { styles: hc(s, !e, o, r ? "" : "!important") });
}, yr = !1;
if (typeof window < "u")
  try {
    var bt = Object.defineProperty({}, "passive", {
      get: function() {
        return yr = !0, !0;
      }
    });
    window.addEventListener("test", bt, bt), window.removeEventListener("test", bt, bt);
  } catch {
    yr = !1;
  }
var Ve = yr ? { passive: !1 } : !1, mc = function(t) {
  return t.tagName === "TEXTAREA";
}, Mo = function(t, e) {
  if (!(t instanceof Element))
    return !1;
  var r = window.getComputedStyle(t);
  return (
    // not-not-scrollable
    r[e] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !mc(t) && r[e] === "visible")
  );
}, xc = function(t) {
  return Mo(t, "overflowY");
}, vc = function(t) {
  return Mo(t, "overflowX");
}, Pn = function(t, e) {
  var r = e.ownerDocument, n = e;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = Io(t, n);
    if (o) {
      var s = Do(t, n), i = s[1], l = s[2];
      if (i > l)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, yc = function(t) {
  var e = t.scrollTop, r = t.scrollHeight, n = t.clientHeight;
  return [
    e,
    r,
    n
  ];
}, wc = function(t) {
  var e = t.scrollLeft, r = t.scrollWidth, n = t.clientWidth;
  return [
    e,
    r,
    n
  ];
}, Io = function(t, e) {
  return t === "v" ? xc(e) : vc(e);
}, Do = function(t, e) {
  return t === "v" ? yc(e) : wc(e);
}, bc = function(t, e) {
  return t === "h" && e === "rtl" ? -1 : 1;
}, Sc = function(t, e, r, n, o) {
  var s = bc(t, window.getComputedStyle(e).direction), i = s * n, l = r.target, c = e.contains(l), d = !1, f = i > 0, h = 0, p = 0;
  do {
    var x = Do(t, l), v = x[0], u = x[1], m = x[2], w = u - m - s * v;
    (v || w) && Io(t, l) && (h += w, p += v), l instanceof ShadowRoot ? l = l.host : l = l.parentNode;
  } while (
    // portaled content
    !c && l !== document.body || // self content
    c && (e.contains(l) || e === l)
  );
  return (f && Math.abs(h) < 1 || !f && Math.abs(p) < 1) && (d = !0), d;
}, St = function(t) {
  return "changedTouches" in t ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : [0, 0];
}, Ln = function(t) {
  return [t.deltaX, t.deltaY];
}, An = function(t) {
  return t && "current" in t ? t.current : t;
}, Cc = function(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}, jc = function(t) {
  return `
  .block-interactivity-`.concat(t, ` {pointer-events: none;}
  .allow-interactivity-`).concat(t, ` {pointer-events: all;}
`);
}, kc = 0, He = [];
function Ec(t) {
  var e = g.useRef([]), r = g.useRef([0, 0]), n = g.useRef(), o = g.useState(kc++)[0], s = g.useState(To)[0], i = g.useRef(t);
  g.useEffect(function() {
    i.current = t;
  }, [t]), g.useEffect(function() {
    if (t.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var u = Kl([t.lockRef.current], (t.shards || []).map(An), !0).filter(Boolean);
      return u.forEach(function(m) {
        return m.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), u.forEach(function(m) {
          return m.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [t.inert, t.lockRef.current, t.shards]);
  var l = g.useCallback(function(u, m) {
    if ("touches" in u && u.touches.length === 2 || u.type === "wheel" && u.ctrlKey)
      return !i.current.allowPinchZoom;
    var w = St(u), y = r.current, b = "deltaX" in u ? u.deltaX : y[0] - w[0], j = "deltaY" in u ? u.deltaY : y[1] - w[1], N, R = u.target, k = Math.abs(b) > Math.abs(j) ? "h" : "v";
    if ("touches" in u && k === "h" && R.type === "range")
      return !1;
    var C = Pn(k, R);
    if (!C)
      return !0;
    if (C ? N = k : (N = k === "v" ? "h" : "v", C = Pn(k, R)), !C)
      return !1;
    if (!n.current && "changedTouches" in u && (b || j) && (n.current = N), !N)
      return !0;
    var T = n.current || N;
    return Sc(T, m, u, T === "h" ? b : j);
  }, []), c = g.useCallback(function(u) {
    var m = u;
    if (!(!He.length || He[He.length - 1] !== s)) {
      var w = "deltaY" in m ? Ln(m) : St(m), y = e.current.filter(function(N) {
        return N.name === m.type && (N.target === m.target || m.target === N.shadowParent) && Cc(N.delta, w);
      })[0];
      if (y && y.should) {
        m.cancelable && m.preventDefault();
        return;
      }
      if (!y) {
        var b = (i.current.shards || []).map(An).filter(Boolean).filter(function(N) {
          return N.contains(m.target);
        }), j = b.length > 0 ? l(m, b[0]) : !i.current.noIsolation;
        j && m.cancelable && m.preventDefault();
      }
    }
  }, []), d = g.useCallback(function(u, m, w, y) {
    var b = { name: u, delta: m, target: w, should: y, shadowParent: Nc(w) };
    e.current.push(b), setTimeout(function() {
      e.current = e.current.filter(function(j) {
        return j !== b;
      });
    }, 1);
  }, []), f = g.useCallback(function(u) {
    r.current = St(u), n.current = void 0;
  }, []), h = g.useCallback(function(u) {
    d(u.type, Ln(u), u.target, l(u, t.lockRef.current));
  }, []), p = g.useCallback(function(u) {
    d(u.type, St(u), u.target, l(u, t.lockRef.current));
  }, []);
  g.useEffect(function() {
    return He.push(s), t.setCallbacks({
      onScrollCapture: h,
      onWheelCapture: h,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, Ve), document.addEventListener("touchmove", c, Ve), document.addEventListener("touchstart", f, Ve), function() {
      He = He.filter(function(u) {
        return u !== s;
      }), document.removeEventListener("wheel", c, Ve), document.removeEventListener("touchmove", c, Ve), document.removeEventListener("touchstart", f, Ve);
    };
  }, []);
  var x = t.removeScrollBar, v = t.inert;
  return g.createElement(
    g.Fragment,
    null,
    v ? g.createElement(s, { styles: jc(o) }) : null,
    x ? g.createElement(gc, { gapMode: t.gapMode }) : null
  );
}
function Nc(t) {
  for (var e = null; t !== null; )
    t instanceof ShadowRoot && (e = t.host, t = t.host), t = t.parentNode;
  return e;
}
const Rc = rc(Ao, Ec);
var _o = g.forwardRef(function(t, e) {
  return g.createElement(Vt, me({}, t, { ref: e, sideCar: Rc }));
});
_o.classNames = Vt.classNames;
var Oc = [" ", "Enter", "ArrowUp", "ArrowDown"], Pc = [" ", "Enter"], _e = "Select", [Ht, Ut, Lc] = na(_e), [Ze, jd] = Nr(_e, [
  Lc,
  vo
]), Gt = vo(), [Ac, Pe] = Ze(_e), [Tc, Mc] = Ze(_e), Fo = (t) => {
  const {
    __scopeSelect: e,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: s,
    value: i,
    defaultValue: l,
    onValueChange: c,
    dir: d,
    name: f,
    autoComplete: h,
    disabled: p,
    required: x,
    form: v
  } = t, u = Gt(e), [m, w] = g.useState(null), [y, b] = g.useState(null), [j, N] = g.useState(!1), R = sa(d), [k, C] = Nn({
    prop: n,
    defaultProp: o ?? !1,
    onChange: s,
    caller: _e
  }), [T, I] = Nn({
    prop: i,
    defaultProp: l,
    onChange: c,
    caller: _e
  }), M = g.useRef(null), B = m ? v || !!m.closest("form") : !0, [G, z] = g.useState(/* @__PURE__ */ new Set()), _ = Array.from(G).map((D) => D.props.value).join(";");
  return /* @__PURE__ */ a.jsx(Al, { ...u, children: /* @__PURE__ */ a.jsxs(
    Ac,
    {
      required: x,
      scope: e,
      trigger: m,
      onTriggerChange: w,
      valueNode: y,
      onValueNodeChange: b,
      valueNodeHasChildren: j,
      onValueNodeHasChildrenChange: N,
      contentId: Rr(),
      value: T,
      onValueChange: I,
      open: k,
      onOpenChange: C,
      dir: R,
      triggerPointerDownPosRef: M,
      disabled: p,
      children: [
        /* @__PURE__ */ a.jsx(Ht.Provider, { scope: e, children: /* @__PURE__ */ a.jsx(
          Tc,
          {
            scope: t.__scopeSelect,
            onNativeOptionAdd: g.useCallback((D) => {
              z((V) => new Set(V).add(D));
            }, []),
            onNativeOptionRemove: g.useCallback((D) => {
              z((V) => {
                const E = new Set(V);
                return E.delete(D), E;
              });
            }, []),
            children: r
          }
        ) }),
        B ? /* @__PURE__ */ a.jsxs(
          ls,
          {
            "aria-hidden": !0,
            required: x,
            tabIndex: -1,
            name: f,
            autoComplete: h,
            value: T,
            onChange: (D) => I(D.target.value),
            disabled: p,
            form: v,
            children: [
              T === void 0 ? /* @__PURE__ */ a.jsx("option", { value: "" }) : null,
              Array.from(G)
            ]
          },
          _
        ) : null
      ]
    }
  ) });
};
Fo.displayName = _e;
var $o = "SelectTrigger", Bo = g.forwardRef(
  (t, e) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = t, s = Gt(r), i = Pe($o, r), l = i.disabled || n, c = oe(e, i.onTriggerChange), d = Ut(r), f = g.useRef("touch"), [h, p, x] = ds((u) => {
      const m = d().filter((b) => !b.disabled), w = m.find((b) => b.value === i.value), y = us(m, u, w);
      y !== void 0 && i.onValueChange(y.value);
    }), v = (u) => {
      l || (i.onOpenChange(!0), x()), u && (i.triggerPointerDownPosRef.current = {
        x: Math.round(u.pageX),
        y: Math.round(u.pageY)
      });
    };
    return /* @__PURE__ */ a.jsx(Tl, { asChild: !0, ...s, children: /* @__PURE__ */ a.jsx(
      te.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: l,
        "data-disabled": l ? "" : void 0,
        "data-placeholder": cs(i.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: re(o.onClick, (u) => {
          u.currentTarget.focus(), f.current !== "mouse" && v(u);
        }),
        onPointerDown: re(o.onPointerDown, (u) => {
          f.current = u.pointerType;
          const m = u.target;
          m.hasPointerCapture(u.pointerId) && m.releasePointerCapture(u.pointerId), u.button === 0 && u.ctrlKey === !1 && u.pointerType === "mouse" && (v(u), u.preventDefault());
        }),
        onKeyDown: re(o.onKeyDown, (u) => {
          const m = h.current !== "";
          !(u.ctrlKey || u.altKey || u.metaKey) && u.key.length === 1 && p(u.key), !(m && u.key === " ") && Oc.includes(u.key) && (v(), u.preventDefault());
        })
      }
    ) });
  }
);
Bo.displayName = $o;
var zo = "SelectValue", Wo = g.forwardRef(
  (t, e) => {
    const { __scopeSelect: r, className: n, style: o, children: s, placeholder: i = "", ...l } = t, c = Pe(zo, r), { onValueNodeHasChildrenChange: d } = c, f = s !== void 0, h = oe(e, c.onValueNodeChange);
    return ae(() => {
      d(f);
    }, [d, f]), /* @__PURE__ */ a.jsx(
      te.span,
      {
        ...l,
        ref: h,
        style: { pointerEvents: "none" },
        children: cs(c.value) ? /* @__PURE__ */ a.jsx(a.Fragment, { children: i }) : s
      }
    );
  }
);
Wo.displayName = zo;
var Ic = "SelectIcon", Vo = g.forwardRef(
  (t, e) => {
    const { __scopeSelect: r, children: n, ...o } = t;
    return /* @__PURE__ */ a.jsx(te.span, { "aria-hidden": !0, ...o, ref: e, children: n || "▼" });
  }
);
Vo.displayName = Ic;
var Dc = "SelectPortal", Ho = (t) => /* @__PURE__ */ a.jsx(No, { asChild: !0, ...t });
Ho.displayName = Dc;
var Fe = "SelectContent", Uo = g.forwardRef(
  (t, e) => {
    const r = Pe(Fe, t.__scopeSelect), [n, o] = g.useState();
    if (ae(() => {
      o(new DocumentFragment());
    }, []), !r.open) {
      const s = n;
      return s ? Ft.createPortal(
        /* @__PURE__ */ a.jsx(Go, { scope: t.__scopeSelect, children: /* @__PURE__ */ a.jsx(Ht.Slot, { scope: t.__scopeSelect, children: /* @__PURE__ */ a.jsx("div", { children: t.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ a.jsx(Ko, { ...t, ref: e });
  }
);
Uo.displayName = Fe;
var ue = 10, [Go, Le] = Ze(Fe), _c = "SelectContentImpl", Fc = /* @__PURE__ */ At("SelectContent.RemoveScroll"), Ko = g.forwardRef(
  (t, e) => {
    const {
      __scopeSelect: r,
      position: n = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: l,
      sideOffset: c,
      align: d,
      alignOffset: f,
      arrowPadding: h,
      collisionBoundary: p,
      collisionPadding: x,
      sticky: v,
      hideWhenDetached: u,
      avoidCollisions: m,
      //
      ...w
    } = t, y = Pe(Fe, r), [b, j] = g.useState(null), [N, R] = g.useState(null), k = oe(e, (O) => j(O)), [C, T] = g.useState(null), [I, M] = g.useState(
      null
    ), B = Ut(r), [G, z] = g.useState(!1), _ = g.useRef(!1);
    g.useEffect(() => {
      if (b) return Gl(b);
    }, [b]), ma();
    const D = g.useCallback(
      (O) => {
        const [W, ...Z] = B().map((q) => q.ref.current), [Y] = Z.slice(-1), X = document.activeElement;
        for (const q of O)
          if (q === X || (q == null || q.scrollIntoView({ block: "nearest" }), q === W && N && (N.scrollTop = 0), q === Y && N && (N.scrollTop = N.scrollHeight), q == null || q.focus(), document.activeElement !== X)) return;
      },
      [B, N]
    ), V = g.useCallback(
      () => D([C, b]),
      [D, C, b]
    );
    g.useEffect(() => {
      G && V();
    }, [G, V]);
    const { onOpenChange: E, triggerPointerDownPosRef: F } = y;
    g.useEffect(() => {
      if (b) {
        let O = { x: 0, y: 0 };
        const W = (Y) => {
          var X, q;
          O = {
            x: Math.abs(Math.round(Y.pageX) - (((X = F.current) == null ? void 0 : X.x) ?? 0)),
            y: Math.abs(Math.round(Y.pageY) - (((q = F.current) == null ? void 0 : q.y) ?? 0))
          };
        }, Z = (Y) => {
          O.x <= 10 && O.y <= 10 ? Y.preventDefault() : b.contains(Y.target) || E(!1), document.removeEventListener("pointermove", W), F.current = null;
        };
        return F.current !== null && (document.addEventListener("pointermove", W), document.addEventListener("pointerup", Z, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", W), document.removeEventListener("pointerup", Z, { capture: !0 });
        };
      }
    }, [b, E, F]), g.useEffect(() => {
      const O = () => E(!1);
      return window.addEventListener("blur", O), window.addEventListener("resize", O), () => {
        window.removeEventListener("blur", O), window.removeEventListener("resize", O);
      };
    }, [E]);
    const [S, A] = ds((O) => {
      const W = B().filter((X) => !X.disabled), Z = W.find((X) => X.ref.current === document.activeElement), Y = us(W, O, Z);
      Y && setTimeout(() => Y.ref.current.focus());
    }), K = g.useCallback(
      (O, W, Z) => {
        const Y = !_.current && !Z;
        (y.value !== void 0 && y.value === W || Y) && (T(O), Y && (_.current = !0));
      },
      [y.value]
    ), H = g.useCallback(() => b == null ? void 0 : b.focus(), [b]), J = g.useCallback(
      (O, W, Z) => {
        const Y = !_.current && !Z;
        (y.value !== void 0 && y.value === W || Y) && M(O);
      },
      [y.value]
    ), ee = n === "popper" ? wr : Yo, ie = ee === wr ? {
      side: l,
      sideOffset: c,
      align: d,
      alignOffset: f,
      arrowPadding: h,
      collisionBoundary: p,
      collisionPadding: x,
      sticky: v,
      hideWhenDetached: u,
      avoidCollisions: m
    } : {};
    return /* @__PURE__ */ a.jsx(
      Go,
      {
        scope: r,
        content: b,
        viewport: N,
        onViewportChange: R,
        itemRefCallback: K,
        selectedItem: C,
        onItemLeave: H,
        itemTextRefCallback: J,
        focusSelectedItem: V,
        selectedItemText: I,
        position: n,
        isPositioned: G,
        searchRef: S,
        children: /* @__PURE__ */ a.jsx(_o, { as: Fc, allowPinchZoom: !0, children: /* @__PURE__ */ a.jsx(
          no,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (O) => {
              O.preventDefault();
            },
            onUnmountAutoFocus: re(o, (O) => {
              var W;
              (W = y.trigger) == null || W.focus({ preventScroll: !0 }), O.preventDefault();
            }),
            children: /* @__PURE__ */ a.jsx(
              to,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (O) => O.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ a.jsx(
                  ee,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (O) => O.preventDefault(),
                    ...w,
                    ...ie,
                    onPlaced: () => z(!0),
                    ref: k,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: re(w.onKeyDown, (O) => {
                      const W = O.ctrlKey || O.altKey || O.metaKey;
                      if (O.key === "Tab" && O.preventDefault(), !W && O.key.length === 1 && A(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
                        let Y = B().filter((X) => !X.disabled).map((X) => X.ref.current);
                        if (["ArrowUp", "End"].includes(O.key) && (Y = Y.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
                          const X = O.target, q = Y.indexOf(X);
                          Y = Y.slice(q + 1);
                        }
                        setTimeout(() => D(Y)), O.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Ko.displayName = _c;
var $c = "SelectItemAlignedPosition", Yo = g.forwardRef((t, e) => {
  const { __scopeSelect: r, onPlaced: n, ...o } = t, s = Pe(Fe, r), i = Le(Fe, r), [l, c] = g.useState(null), [d, f] = g.useState(null), h = oe(e, (k) => f(k)), p = Ut(r), x = g.useRef(!1), v = g.useRef(!0), { viewport: u, selectedItem: m, selectedItemText: w, focusSelectedItem: y } = i, b = g.useCallback(() => {
    if (s.trigger && s.valueNode && l && d && u && m && w) {
      const k = s.trigger.getBoundingClientRect(), C = d.getBoundingClientRect(), T = s.valueNode.getBoundingClientRect(), I = w.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const X = I.left - C.left, q = T.left - X, le = k.left - q, pe = k.width + le, Qe = Math.max(pe, C.width), et = window.innerWidth - ue, tt = dn(q, [
          ue,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(ue, et - Qe)
        ]);
        l.style.minWidth = pe + "px", l.style.left = tt + "px";
      } else {
        const X = C.right - I.right, q = window.innerWidth - T.right - X, le = window.innerWidth - k.right - q, pe = k.width + le, Qe = Math.max(pe, C.width), et = window.innerWidth - ue, tt = dn(q, [
          ue,
          Math.max(ue, et - Qe)
        ]);
        l.style.minWidth = pe + "px", l.style.right = tt + "px";
      }
      const M = p(), B = window.innerHeight - ue * 2, G = u.scrollHeight, z = window.getComputedStyle(d), _ = parseInt(z.borderTopWidth, 10), D = parseInt(z.paddingTop, 10), V = parseInt(z.borderBottomWidth, 10), E = parseInt(z.paddingBottom, 10), F = _ + D + G + E + V, S = Math.min(m.offsetHeight * 5, F), A = window.getComputedStyle(u), K = parseInt(A.paddingTop, 10), H = parseInt(A.paddingBottom, 10), J = k.top + k.height / 2 - ue, ee = B - J, ie = m.offsetHeight / 2, O = m.offsetTop + ie, W = _ + D + O, Z = F - W;
      if (W <= J) {
        const X = M.length > 0 && m === M[M.length - 1].ref.current;
        l.style.bottom = "0px";
        const q = d.clientHeight - u.offsetTop - u.offsetHeight, le = Math.max(
          ee,
          ie + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (X ? H : 0) + q + V
        ), pe = W + le;
        l.style.height = pe + "px";
      } else {
        const X = M.length > 0 && m === M[0].ref.current;
        l.style.top = "0px";
        const le = Math.max(
          J,
          _ + u.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (X ? K : 0) + ie
        ) + Z;
        l.style.height = le + "px", u.scrollTop = W - J + u.offsetTop;
      }
      l.style.margin = `${ue}px 0`, l.style.minHeight = S + "px", l.style.maxHeight = B + "px", n == null || n(), requestAnimationFrame(() => x.current = !0);
    }
  }, [
    p,
    s.trigger,
    s.valueNode,
    l,
    d,
    u,
    m,
    w,
    s.dir,
    n
  ]);
  ae(() => b(), [b]);
  const [j, N] = g.useState();
  ae(() => {
    d && N(window.getComputedStyle(d).zIndex);
  }, [d]);
  const R = g.useCallback(
    (k) => {
      k && v.current === !0 && (b(), y == null || y(), v.current = !1);
    },
    [b, y]
  );
  return /* @__PURE__ */ a.jsx(
    zc,
    {
      scope: r,
      contentWrapper: l,
      shouldExpandOnScrollRef: x,
      onScrollButtonChange: R,
      children: /* @__PURE__ */ a.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: j
          },
          children: /* @__PURE__ */ a.jsx(
            te.div,
            {
              ...o,
              ref: h,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
Yo.displayName = $c;
var Bc = "SelectPopperPosition", wr = g.forwardRef((t, e) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: o = ue,
    ...s
  } = t, i = Gt(r);
  return /* @__PURE__ */ a.jsx(
    Ml,
    {
      ...i,
      ...s,
      ref: e,
      align: n,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
wr.displayName = Bc;
var [zc, Fr] = Ze(Fe, {}), br = "SelectViewport", Xo = g.forwardRef(
  (t, e) => {
    const { __scopeSelect: r, nonce: n, ...o } = t, s = Le(br, r), i = Fr(br, r), l = oe(e, s.onViewportChange), c = g.useRef(0);
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: n
        }
      ),
      /* @__PURE__ */ a.jsx(Ht.Slot, { scope: r, children: /* @__PURE__ */ a.jsx(
        te.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: l,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: re(o.onScroll, (d) => {
            const f = d.currentTarget, { contentWrapper: h, shouldExpandOnScrollRef: p } = i;
            if (p != null && p.current && h) {
              const x = Math.abs(c.current - f.scrollTop);
              if (x > 0) {
                const v = window.innerHeight - ue * 2, u = parseFloat(h.style.minHeight), m = parseFloat(h.style.height), w = Math.max(u, m);
                if (w < v) {
                  const y = w + x, b = Math.min(v, y), j = y - b;
                  h.style.height = b + "px", h.style.bottom === "0px" && (f.scrollTop = j > 0 ? j : 0, h.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Xo.displayName = br;
var qo = "SelectGroup", [Wc, Vc] = Ze(qo), Hc = g.forwardRef(
  (t, e) => {
    const { __scopeSelect: r, ...n } = t, o = Rr();
    return /* @__PURE__ */ a.jsx(Wc, { scope: r, id: o, children: /* @__PURE__ */ a.jsx(te.div, { role: "group", "aria-labelledby": o, ...n, ref: e }) });
  }
);
Hc.displayName = qo;
var Jo = "SelectLabel", Zo = g.forwardRef(
  (t, e) => {
    const { __scopeSelect: r, ...n } = t, o = Vc(Jo, r);
    return /* @__PURE__ */ a.jsx(te.div, { id: o.id, ...n, ref: e });
  }
);
Zo.displayName = Jo;
var _t = "SelectItem", [Uc, Qo] = Ze(_t), es = g.forwardRef(
  (t, e) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: o = !1,
      textValue: s,
      ...i
    } = t, l = Pe(_t, r), c = Le(_t, r), d = l.value === n, [f, h] = g.useState(s ?? ""), [p, x] = g.useState(!1), v = oe(
      e,
      (y) => {
        var b;
        return (b = c.itemRefCallback) == null ? void 0 : b.call(c, y, n, o);
      }
    ), u = Rr(), m = g.useRef("touch"), w = () => {
      o || (l.onValueChange(n), l.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ a.jsx(
      Uc,
      {
        scope: r,
        value: n,
        disabled: o,
        textId: u,
        isSelected: d,
        onItemTextChange: g.useCallback((y) => {
          h((b) => b || ((y == null ? void 0 : y.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ a.jsx(
          Ht.ItemSlot,
          {
            scope: r,
            value: n,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ a.jsx(
              te.div,
              {
                role: "option",
                "aria-labelledby": u,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": d && p,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: v,
                onFocus: re(i.onFocus, () => x(!0)),
                onBlur: re(i.onBlur, () => x(!1)),
                onClick: re(i.onClick, () => {
                  m.current !== "mouse" && w();
                }),
                onPointerUp: re(i.onPointerUp, () => {
                  m.current === "mouse" && w();
                }),
                onPointerDown: re(i.onPointerDown, (y) => {
                  m.current = y.pointerType;
                }),
                onPointerMove: re(i.onPointerMove, (y) => {
                  var b;
                  m.current = y.pointerType, o ? (b = c.onItemLeave) == null || b.call(c) : m.current === "mouse" && y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: re(i.onPointerLeave, (y) => {
                  var b;
                  y.currentTarget === document.activeElement && ((b = c.onItemLeave) == null || b.call(c));
                }),
                onKeyDown: re(i.onKeyDown, (y) => {
                  var j;
                  ((j = c.searchRef) == null ? void 0 : j.current) !== "" && y.key === " " || (Pc.includes(y.key) && w(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
es.displayName = _t;
var it = "SelectItemText", ts = g.forwardRef(
  (t, e) => {
    const { __scopeSelect: r, className: n, style: o, ...s } = t, i = Pe(it, r), l = Le(it, r), c = Qo(it, r), d = Mc(it, r), [f, h] = g.useState(null), p = oe(
      e,
      (w) => h(w),
      c.onItemTextChange,
      (w) => {
        var y;
        return (y = l.itemTextRefCallback) == null ? void 0 : y.call(l, w, c.value, c.disabled);
      }
    ), x = f == null ? void 0 : f.textContent, v = g.useMemo(
      () => /* @__PURE__ */ a.jsx("option", { value: c.value, disabled: c.disabled, children: x }, c.value),
      [c.disabled, c.value, x]
    ), { onNativeOptionAdd: u, onNativeOptionRemove: m } = d;
    return ae(() => (u(v), () => m(v)), [u, m, v]), /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(te.span, { id: c.textId, ...s, ref: p }),
      c.isSelected && i.valueNode && !i.valueNodeHasChildren ? Ft.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
ts.displayName = it;
var rs = "SelectItemIndicator", ns = g.forwardRef(
  (t, e) => {
    const { __scopeSelect: r, ...n } = t;
    return Qo(rs, r).isSelected ? /* @__PURE__ */ a.jsx(te.span, { "aria-hidden": !0, ...n, ref: e }) : null;
  }
);
ns.displayName = rs;
var Sr = "SelectScrollUpButton", os = g.forwardRef((t, e) => {
  const r = Le(Sr, t.__scopeSelect), n = Fr(Sr, t.__scopeSelect), [o, s] = g.useState(!1), i = oe(e, n.onScrollButtonChange);
  return ae(() => {
    if (r.viewport && r.isPositioned) {
      let l = function() {
        const d = c.scrollTop > 0;
        s(d);
      };
      const c = r.viewport;
      return l(), c.addEventListener("scroll", l), () => c.removeEventListener("scroll", l);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ a.jsx(
    is,
    {
      ...t,
      ref: i,
      onAutoScroll: () => {
        const { viewport: l, selectedItem: c } = r;
        l && c && (l.scrollTop = l.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
os.displayName = Sr;
var Cr = "SelectScrollDownButton", ss = g.forwardRef((t, e) => {
  const r = Le(Cr, t.__scopeSelect), n = Fr(Cr, t.__scopeSelect), [o, s] = g.useState(!1), i = oe(e, n.onScrollButtonChange);
  return ae(() => {
    if (r.viewport && r.isPositioned) {
      let l = function() {
        const d = c.scrollHeight - c.clientHeight, f = Math.ceil(c.scrollTop) < d;
        s(f);
      };
      const c = r.viewport;
      return l(), c.addEventListener("scroll", l), () => c.removeEventListener("scroll", l);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ a.jsx(
    is,
    {
      ...t,
      ref: i,
      onAutoScroll: () => {
        const { viewport: l, selectedItem: c } = r;
        l && c && (l.scrollTop = l.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
ss.displayName = Cr;
var is = g.forwardRef((t, e) => {
  const { __scopeSelect: r, onAutoScroll: n, ...o } = t, s = Le("SelectScrollButton", r), i = g.useRef(null), l = Ut(r), c = g.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return g.useEffect(() => () => c(), [c]), ae(() => {
    var f;
    const d = l().find((h) => h.ref.current === document.activeElement);
    (f = d == null ? void 0 : d.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [l]), /* @__PURE__ */ a.jsx(
    te.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: e,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: re(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerMove: re(o.onPointerMove, () => {
        var d;
        (d = s.onItemLeave) == null || d.call(s), i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerLeave: re(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), Gc = "SelectSeparator", as = g.forwardRef(
  (t, e) => {
    const { __scopeSelect: r, ...n } = t;
    return /* @__PURE__ */ a.jsx(te.div, { "aria-hidden": !0, ...n, ref: e });
  }
);
as.displayName = Gc;
var jr = "SelectArrow", Kc = g.forwardRef(
  (t, e) => {
    const { __scopeSelect: r, ...n } = t, o = Gt(r), s = Pe(jr, r), i = Le(jr, r);
    return s.open && i.position === "popper" ? /* @__PURE__ */ a.jsx(Il, { ...o, ...n, ref: e }) : null;
  }
);
Kc.displayName = jr;
var Yc = "SelectBubbleInput", ls = g.forwardRef(
  ({ __scopeSelect: t, value: e, ...r }, n) => {
    const o = g.useRef(null), s = oe(n, o), i = Bl(e);
    return g.useEffect(() => {
      const l = o.current;
      if (!l) return;
      const c = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (i !== e && f) {
        const h = new Event("change", { bubbles: !0 });
        f.call(l, e), l.dispatchEvent(h);
      }
    }, [i, e]), /* @__PURE__ */ a.jsx(
      te.select,
      {
        ...r,
        style: { ...Ro, ...r.style },
        ref: s,
        defaultValue: e
      }
    );
  }
);
ls.displayName = Yc;
function cs(t) {
  return t === "" || t === void 0;
}
function ds(t) {
  const e = Ie(t), r = g.useRef(""), n = g.useRef(0), o = g.useCallback(
    (i) => {
      const l = r.current + i;
      e(l), function c(d) {
        r.current = d, window.clearTimeout(n.current), d !== "" && (n.current = window.setTimeout(() => c(""), 1e3));
      }(l);
    },
    [e]
  ), s = g.useCallback(() => {
    r.current = "", window.clearTimeout(n.current);
  }, []);
  return g.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, s];
}
function us(t, e, r) {
  const o = e.length > 1 && Array.from(e).every((d) => d === e[0]) ? e[0] : e, s = r ? t.indexOf(r) : -1;
  let i = Xc(t, Math.max(s, 0));
  o.length === 1 && (i = i.filter((d) => d !== r));
  const c = i.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function Xc(t, e) {
  return t.map((r, n) => t[(e + n) % t.length]);
}
var qc = Fo, fs = Bo, Jc = Wo, Zc = Vo, Qc = Ho, hs = Uo, ed = Xo, ps = Zo, gs = es, td = ts, rd = ns, ms = os, xs = ss, vs = as;
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nd = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), od = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), Tn = (t) => {
  const e = od(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, ys = (...t) => t.filter((e, r, n) => !!e && e.trim() !== "" && n.indexOf(e) === r).join(" ").trim(), sd = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var id = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ad = Mn(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: s,
    iconNode: i,
    ...l
  }, c) => ir(
    "svg",
    {
      ref: c,
      ...id,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: n ? Number(r) * 24 / Number(e) : r,
      className: ys("lucide", o),
      ...!s && !sd(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...i.map(([d, f]) => ir(d, f)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kt = (t, e) => {
  const r = Mn(
    ({ className: n, ...o }, s) => ir(ad, {
      ref: s,
      iconNode: e,
      className: ys(
        `lucide-${nd(Tn(t))}`,
        `lucide-${t}`,
        n
      ),
      ...o
    })
  );
  return r.displayName = Tn(t), r;
};
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ld = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], cd = Kt("check", ld);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dd = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ws = Kt("chevron-down", dd);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ud = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], fd = Kt("chevron-up", ud);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hd = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], pd = Kt("globe", hd), gd = qc, md = Jc, bs = g.forwardRef(({ className: t, children: e, ...r }, n) => /* @__PURE__ */ a.jsxs(
  fs,
  {
    ref: n,
    className: Ce(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md  border-input bg-transparent px-3 py-2 text-sm   data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      t
    ),
    ...r,
    children: [
      e,
      /* @__PURE__ */ a.jsx(Zc, { asChild: !0, children: /* @__PURE__ */ a.jsx(ws, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
bs.displayName = fs.displayName;
const Ss = g.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ a.jsx(
  ms,
  {
    ref: r,
    className: Ce(
      "flex cursor-default items-center justify-center py-1",
      t
    ),
    ...e,
    children: /* @__PURE__ */ a.jsx(fd, { className: "h-4 w-4" })
  }
));
Ss.displayName = ms.displayName;
const Cs = g.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ a.jsx(
  xs,
  {
    ref: r,
    className: Ce(
      "flex cursor-default items-center justify-center py-1",
      t
    ),
    ...e,
    children: /* @__PURE__ */ a.jsx(ws, { className: "h-4 w-4" })
  }
));
Cs.displayName = xs.displayName;
const js = g.forwardRef(({ className: t, children: e, position: r = "popper", ...n }, o) => /* @__PURE__ */ a.jsx(Qc, { children: /* @__PURE__ */ a.jsxs(
  hs,
  {
    ref: o,
    className: Ce(
      "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      t
    ),
    position: r,
    ...n,
    children: [
      /* @__PURE__ */ a.jsx(Ss, {}),
      /* @__PURE__ */ a.jsx(
        ed,
        {
          className: Ce(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: e
        }
      ),
      /* @__PURE__ */ a.jsx(Cs, {})
    ]
  }
) }));
js.displayName = hs.displayName;
const xd = g.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ a.jsx(
  ps,
  {
    ref: r,
    className: Ce("px-2 py-1.5 text-sm font-semibold", t),
    ...e
  }
));
xd.displayName = ps.displayName;
const kr = g.forwardRef(({ className: t, children: e, ...r }, n) => /* @__PURE__ */ a.jsxs(
  gs,
  {
    ref: n,
    className: Ce(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...r,
    children: [
      /* @__PURE__ */ a.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ a.jsx(rd, { children: /* @__PURE__ */ a.jsx(cd, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ a.jsx(td, { children: e })
    ]
  }
));
kr.displayName = gs.displayName;
const vd = g.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ a.jsx(
  vs,
  {
    ref: r,
    className: Ce("-mx-1 my-1 h-px bg-muted", t),
    ...e
  }
));
vd.displayName = vs.displayName;
const yd = {
  code: "en"
};
function wd() {
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsxs(gd, { defaultValue: yd.code, children: [
    /* @__PURE__ */ a.jsxs(bs, { className: "w-[150px] px-2 ", children: [
      /* @__PURE__ */ a.jsx(pd, { className: "text-gray-600 w-5" }),
      /* @__PURE__ */ a.jsx(md, { placeholder: "Theme" })
    ] }),
    /* @__PURE__ */ a.jsxs(js, { children: [
      /* @__PURE__ */ a.jsx(kr, { value: "en", children: "English" }, 0),
      /* @__PURE__ */ a.jsx(kr, { value: "id", children: "Indonesia" }, 1)
    ] })
  ] }) });
}
function kd() {
  return /* @__PURE__ */ a.jsx("footer", { className: "bg-gray-50 border-t border-gray-200", children: /* @__PURE__ */ a.jsxs("div", { className: "container mx-auto px-4 md:px-6 pt-12 pb-6", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-5", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ a.jsx(Q, { href: "/", className: "flex items-center gap-2 mb-4", children: /* @__PURE__ */ a.jsx("img", { src: "/images/plexicus-logo-color.png", alt: "Plexicus ASPM", className: "h-10 w-auto" }) }),
        /* @__PURE__ */ a.jsx("p", { className: "text-gray-600 mb-4 max-w-sm", children: "Elevate your cybersecurity strategy with Plexicus" }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ a.jsxs("a", { href: "#", className: "text-gray-400 hover:text-gray-500", children: [
            /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "Twitter" }),
            /* @__PURE__ */ a.jsx("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ a.jsx("path", { d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" }) })
          ] }),
          /* @__PURE__ */ a.jsxs("a", { href: "#", className: "text-gray-400 hover:text-gray-500", children: [
            /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "LinkedIn" }),
            /* @__PURE__ */ a.jsx("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ a.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
                clipRule: "evenodd"
              }
            ) })
          ] }),
          /* @__PURE__ */ a.jsxs("a", { href: "#", className: "text-gray-400 hover:text-gray-500", children: [
            /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "GitHub" }),
            /* @__PURE__ */ a.jsx("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ a.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                clipRule: "evenodd"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "mt-6", children: /* @__PURE__ */ a.jsx(wd, {}) })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("h3", { className: "text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4", children: "Products" }),
        /* @__PURE__ */ a.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(Q, { href: "/products/aspm-overview", className: "text-gray-600 hover:text-gray-900", children: "ASPM Overview" }) }),
          /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(Q, { href: "/products/benefits", className: "text-gray-600 hover:text-gray-900", children: "Benefits" }) }),
          /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(Q, { href: "/products/use-cases", className: "text-gray-600 hover:text-gray-900", children: "Use Cases" }) }),
          /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(Q, { href: "/pricing", className: "text-gray-600 hover:text-gray-900", children: "Pricing" }) })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("h3", { className: "text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4", children: "Resources" }),
        /* @__PURE__ */ a.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(Q, { href: "/blog", className: "text-gray-600 hover:text-gray-900", children: "Blog" }) }),
          /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(Q, { href: "/docs", className: "text-gray-600 hover:text-gray-900", children: "Documentation" }) }),
          /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(Q, { href: "/case-studies", className: "text-gray-600 hover:text-gray-900", children: "Case Studies" }) }),
          /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(Q, { href: "/security-resources", className: "text-gray-600 hover:text-gray-900", children: "Security Resources" }) })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("h3", { className: "text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4", children: "Company" }),
        /* @__PURE__ */ a.jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(Q, { href: "/about", className: "text-gray-600 hover:text-gray-900", children: "About Us" }) }),
          /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(Q, { href: "/contact", className: "text-gray-600 hover:text-gray-900", children: "Contact" }) }),
          /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(Q, { href: "/careers", className: "text-gray-600 hover:text-gray-900", children: "Careers" }) }),
          /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(Q, { href: "/privacy", className: "text-gray-600 hover:text-gray-900", children: "Privacy Policy" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "mt-8 pt-6 border-t border-gray-200", children: /* @__PURE__ */ a.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
      /* @__PURE__ */ a.jsxs("p", { className: "text-gray-500 text-sm", children: [
        "© 2025 PLEXICUS, LLC.",
        " ",
        /* @__PURE__ */ a.jsx(Q, { href: "/privacy", className: "underline hover:text-gray-700", children: "Privacy Policy" }),
        " ",
        "·",
        " ",
        /* @__PURE__ */ a.jsx(Q, { href: "/management", className: "underline hover:text-gray-700", children: "Management Policy" }),
        " ",
        "·",
        " ",
        /* @__PURE__ */ a.jsx(Q, { href: "/legal", className: "underline hover:text-gray-700", children: "Legal Notice" })
      ] }),
      /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsxs("div", { className: "inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full border border-green-200", children: [
        /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4 mr-1", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a.jsx(
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
  kd as FooterPlexicus,
  Cd as NavbarPlexicus,
  wd as SelectLanguage
};
