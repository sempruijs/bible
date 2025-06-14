import { a3 as E, a4 as b, a5 as D, a2 as O, e as x, a6 as B, t as C, q as M, a7 as L, Z as W, H as Y, a8 as $, a9 as T, C as w, B as k, y as j, c as p, aa as G, ab as Z, ac as z, ad as F, ae as J, af as K, $ as Q, a as U, p as X, G as ee, h as S, k as te } from "./C4Jx_sal.js";
import { b as re } from "./DEwRMGgG.js";
const ae = ["touchstart", "touchmove"];
function ne(e) {
  return ae.includes(e);
}
let A = false;
function se() {
  A || (A = true, document.addEventListener("reset", (e) => {
    Promise.resolve().then(() => {
      var _a;
      if (!e.defaultPrevented) for (const t of e.target.elements) (_a = t.__on_r) == null ? void 0 : _a.call(t);
    });
  }, { capture: true }));
}
function P(e) {
  var t = D, a = O;
  E(null), b(null);
  try {
    return e();
  } finally {
    E(t), b(a);
  }
}
function le(e, t, a, i = a) {
  e.addEventListener(t, () => P(a));
  const n = e.__on_r;
  n ? e.__on_r = () => {
    n(), i(true);
  } : e.__on_r = () => i(true), se();
}
const H = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set();
function ie(e, t, a, i = {}) {
  function n(r) {
    if (i.capture || y.call(t, r), !r.cancelBubble) return P(() => a == null ? void 0 : a.call(this, r));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? M(() => {
    t.addEventListener(e, n, i);
  }) : t.addEventListener(e, n, i), n;
}
function ce(e, t, a, i, n) {
  var r = { capture: i, passive: n }, u = ie(e, t, a, r);
  (t === document.body || t === window || t === document) && C(() => {
    t.removeEventListener(e, u, r);
  });
}
function de(e) {
  for (var t = 0; t < e.length; t++) H.add(e[t]);
  for (var a of N) a(e);
}
function y(e) {
  var _a;
  var t = this, a = t.ownerDocument, i = e.type, n = ((_a = e.composedPath) == null ? void 0 : _a.call(e)) || [], r = n[0] || e.target, u = 0, d = e.__root;
  if (d) {
    var l = n.indexOf(d);
    if (l !== -1 && (t === document || t === window)) {
      e.__root = t;
      return;
    }
    var _ = n.indexOf(t);
    if (_ === -1) return;
    l <= _ && (u = l);
  }
  if (r = n[u] || e.target, r !== t) {
    x(e, "currentTarget", { configurable: true, get() {
      return r || a;
    } });
    var m = D, f = O;
    E(null), b(null);
    try {
      for (var s, o = []; r !== null; ) {
        var h = r.assignedSlot || r.parentNode || r.host || null;
        try {
          var c = r["__" + i];
          if (c != null && (!r.disabled || e.target === r)) if (B(c)) {
            var [V, ...q] = c;
            V.apply(r, [e, ...q]);
          } else c.call(r, e);
        } catch (g) {
          s ? o.push(g) : s = g;
        }
        if (e.cancelBubble || h === t || h === null) break;
        r = h;
      }
      if (s) {
        for (let g of o) queueMicrotask(() => {
          throw g;
        });
        throw s;
      }
    } finally {
      e.__root = t, delete e.currentTarget, E(m), b(f);
    }
  }
}
function _e(e, t) {
  var a = t == null ? "" : typeof t == "object" ? t + "" : t;
  a !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = a, e.nodeValue = a + "");
}
function oe(e, t) {
  return I(e, t);
}
function he(e, t) {
  L(), t.intro = t.intro ?? false;
  const a = t.target, i = S, n = p;
  try {
    for (var r = W(a); r && (r.nodeType !== 8 || r.data !== Y); ) r = $(r);
    if (!r) throw T;
    w(true), k(r), j();
    const u = I(e, { ...t, anchor: r });
    if (p === null || p.nodeType !== 8 || p.data !== G) throw Z(), T;
    return w(false), u;
  } catch (u) {
    if (u === T) return t.recover === false && z(), L(), F(a), w(false), oe(e, t);
    throw u;
  } finally {
    w(i), k(n);
  }
}
const v = /* @__PURE__ */ new Map();
function I(e, { target: t, anchor: a, props: i = {}, events: n, context: r, intro: u = true }) {
  L();
  var d = /* @__PURE__ */ new Set(), l = (f) => {
    for (var s = 0; s < f.length; s++) {
      var o = f[s];
      if (!d.has(o)) {
        d.add(o);
        var h = ne(o);
        t.addEventListener(o, y, { passive: h });
        var c = v.get(o);
        c === void 0 ? (document.addEventListener(o, y, { passive: h }), v.set(o, 1)) : v.set(o, c + 1);
      }
    }
  };
  l(J(H)), N.add(l);
  var _ = void 0, m = K(() => {
    var f = a ?? t.appendChild(Q());
    return U(() => {
      if (r) {
        X({});
        var s = ee;
        s.c = r;
      }
      n && (i.$$events = n), S && re(f, null), _ = e(f, i) || {}, S && (O.nodes_end = p), r && te();
    }), () => {
      var _a;
      for (var s of d) {
        t.removeEventListener(s, y);
        var o = v.get(s);
        --o === 0 ? (document.removeEventListener(s, y), v.delete(s)) : v.set(s, o);
      }
      N.delete(l), f !== a && ((_a = f.parentNode) == null ? void 0 : _a.removeChild(f));
    };
  });
  return R.set(_, m), _;
}
let R = /* @__PURE__ */ new WeakMap();
function ve(e, t) {
  const a = R.get(e);
  return a ? (R.delete(e), a(t)) : Promise.resolve();
}
export {
  se as a,
  de as d,
  ce as e,
  he as h,
  le as l,
  oe as m,
  _e as s,
  ve as u
};
