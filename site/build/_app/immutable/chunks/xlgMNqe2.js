import { h as R, o as y, j as L, a1 as m, v as B, H as D, w as N, k as Y, x as T, a2 as x, a3 as M, q as b, a4 as U, a5 as w, a6 as q, a7 as C, t as F, a as H, a8 as $, a9 as j, aa as z, ab as G, ac as Z, U as J, b as K, ad as Q, ae as V, af as W } from "./1U9xaPEF.js";
import { B as X } from "./BLVtgz1l.js";
function ae(e, r, f = false) {
  R && y();
  var t = new X(e), _ = f ? m : 0;
  function u(i, n) {
    if (R) {
      const S = B(e) === D;
      if (i === S) {
        var s = N();
        Y(s), t.anchor = s, T(false), t.ensure(i, n), T(true);
        return;
      }
    }
    t.ensure(i, n);
  }
  L(() => {
    var i = false;
    r((n, s = true) => {
      i = true, u(s, n);
    }), i || u(false, null);
  }, _);
}
let g = false;
function k(e) {
  var r = g;
  try {
    return g = false, [e(), g];
  } finally {
    g = r;
  }
}
function re(e, r, f, t) {
  var _a;
  var _ = !H || (f & $) !== 0, u = (f & j) !== 0, i = (f & W) !== 0, n = t, s = true, S = () => (s && (s = false, n = i ? K(t) : t), n), v;
  if (u) {
    var A = G in e || Z in e;
    v = ((_a = x(e, r)) == null ? void 0 : _a.set) ?? (A && r in e ? (a) => e[r] = a : void 0);
  }
  var l, h = false;
  u ? [l, h] = k(() => e[r]) : l = e[r], l === void 0 && t !== void 0 && (l = S(), v && (_ && Q(), v(l)));
  var d;
  if (_ ? d = () => {
    var a = e[r];
    return a === void 0 ? S() : (s = true, a);
  } : d = () => {
    var a = e[r];
    return a !== void 0 && (n = void 0), a === void 0 ? n : a;
  }, _ && (f & M) === 0) return d;
  if (v) {
    var I = e.$$legacy;
    return (function(a, o) {
      return arguments.length > 0 ? ((!_ || !o || I || h) && v(o ? d() : a), a) : d();
    });
  }
  var P = false, c = ((f & V) !== 0 ? J : F)(() => (P = false, d()));
  u && b(c);
  var O = q;
  return (function(a, o) {
    if (arguments.length > 0) {
      const E = o ? b(c) : _ && u ? U(a) : a;
      return w(c, E), P = true, n !== void 0 && (n = E), a;
    }
    return z && P || (O.f & C) !== 0 ? c.v : b(c);
  });
}
export {
  ae as i,
  re as p
};
