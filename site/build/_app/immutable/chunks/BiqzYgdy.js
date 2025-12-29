import { Q as b, R as L, q as g, S as D, T as Y, U as m, V as B, t as U, g as M, W as N, X as $, Y as h, Z as q, _ as x, $ as y, i as Z, a0 as w, a1 as z, a2 as C } from "./BdIJhRdh.js";
let S = false;
function G(r) {
  var a = S;
  try {
    return S = false, [r(), S];
  } finally {
    S = a;
  }
}
function V(r, a, t, d) {
  var _a;
  var f = !M || (t & N) !== 0, v = (t & $) !== 0, E = (t & C) !== 0, n = d, c = true, o = () => (c && (c = false, n = E ? Z(d) : d), n), u;
  if (v) {
    var O = q in r || x in r;
    u = ((_a = b(r, a)) == null ? void 0 : _a.set) ?? (O && a in r ? (e) => r[a] = e : void 0);
  }
  var _, I = false;
  v ? [_, I] = G(() => r[a]) : _ = r[a], _ === void 0 && d !== void 0 && (_ = o(), u && (f && w(), u(_)));
  var i;
  if (f ? i = () => {
    var e = r[a];
    return e === void 0 ? o() : (c = true, e);
  } : i = () => {
    var e = r[a];
    return e !== void 0 && (n = void 0), e === void 0 ? n : e;
  }, f && (t & L) === 0) return i;
  if (u) {
    var A = r.$$legacy;
    return (function(e, l) {
      return arguments.length > 0 ? ((!f || !l || A || I) && u(l ? i() : e), e) : i();
    });
  }
  var P = false, s = ((t & z) !== 0 ? y : U)(() => (P = false, i()));
  v && g(s);
  var T = m;
  return (function(e, l) {
    if (arguments.length > 0) {
      const R = l ? g(s) : f && v ? D(e) : e;
      return Y(s, R), P = true, n !== void 0 && (n = R), e;
    }
    return h && P || (T.f & B) !== 0 ? s.v : g(s);
  });
}
export {
  V as p
};
