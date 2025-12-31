import { f as R, j as W, E as K, k as b, h as D, n as Z, o as $, q as B, t as y, v as j, H as ee, w as V, x as k, i as O, C as re, y as ne, z as Y, d as fe, A as m, g as F, s as ae, B as G, D as ie, F as q, G as le, I as se, J as ue, K as oe, r as P, p as U, L as z, M as te, N as ve, O as de, P as ce, e as pe } from "./1U9xaPEF.js";
function me(r, i) {
  return i;
}
function he(r, i, l) {
  for (var d = [], g = i.length, u, s = i.length, p = 0; p < g; p++) {
    let _ = i[p];
    U(_, () => {
      if (u) {
        if (u.pending.delete(_), u.done.add(_), u.pending.size === 0) {
          var o = r.outrogroups;
          L(q(u.done)), o.delete(u), o.size === 0 && (r.outrogroups = null);
        }
      } else s -= 1;
    }, false);
  }
  if (s === 0) {
    var f = d.length === 0 && l !== null;
    if (f) {
      var t = l, n = t.parentNode;
      ce(n), n.append(t), r.items.clear();
    }
    L(i, !f);
  } else u = { pending: new Set(i), done: /* @__PURE__ */ new Set() }, (r.outrogroups ?? (r.outrogroups = /* @__PURE__ */ new Set())).add(u);
}
function L(r, i = true) {
  for (var l = 0; l < r.length; l++) pe(r[l], i);
}
var J;
function Te(r, i, l, d, g, u = null) {
  var s = r, p = /* @__PURE__ */ new Map(), f = (i & K) !== 0;
  if (f) {
    var t = r;
    s = D ? b(Z(t)) : t.appendChild(R());
  }
  D && $();
  var n = null, _ = y(() => {
    var a = l();
    return le(a) ? a : a == null ? [] : q(a);
  }), o, c = true;
  function A() {
    e.fallback = n, ge(e, o, s, i, d), n !== null && (o.length === 0 ? (n.f & m) === 0 ? P(n) : (n.f ^= m, H(n, null, s)) : U(n, () => {
      n = null;
    }));
  }
  var w = W(() => {
    o = B(_);
    var a = o.length;
    let N = false;
    if (D) {
      var S = j(s) === ee;
      S !== (a === 0) && (s = V(), b(s), k(false), N = true);
    }
    for (var E = /* @__PURE__ */ new Set(), C = fe, x = ae(), h = 0; h < a; h += 1) {
      D && O.nodeType === re && O.data === ne && (s = O, N = true, k(false));
      var I = o[h], M = d(I, h), v = c ? null : p.get(M);
      v ? (v.v && Y(v.v, I), v.i && Y(v.i, h), x && C.skipped_effects.delete(v.e)) : (v = _e(p, c ? s : J ?? (J = R()), I, M, h, g, i, l), c || (v.e.f |= m), p.set(M, v)), E.add(M);
    }
    if (a === 0 && u && !n && (c ? n = F(() => u(s)) : (n = F(() => u(J ?? (J = R()))), n.f |= m)), D && a > 0 && b(V()), !c) if (x) {
      for (const [X, Q] of p) E.has(X) || C.skipped_effects.add(Q.e);
      C.oncommit(A), C.ondiscard(() => {
      });
    } else A();
    N && k(true), B(_);
  }), e = { effect: w, items: p, outrogroups: null, fallback: n };
  c = false, D && (s = O);
}
function ge(r, i, l, d, g) {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i;
  var u = (d & de) !== 0, s = i.length, p = r.items, f = r.effect.first, t, n = null, _, o = [], c = [], A, w, e, a;
  if (u) for (a = 0; a < s; a += 1) A = i[a], w = g(A, a), e = p.get(w).e, (e.f & m) === 0 && ((_b = (_a = e.nodes) == null ? void 0 : _a.a) == null ? void 0 : _b.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(e));
  for (a = 0; a < s; a += 1) {
    if (A = i[a], w = g(A, a), e = p.get(w).e, r.outrogroups !== null) for (const v of r.outrogroups) v.pending.delete(e), v.done.delete(e);
    if ((e.f & m) !== 0) if (e.f ^= m, e === f) H(e, null, l);
    else {
      var N = n ? n.next : f;
      e === r.effect.last && (r.effect.last = e.prev), e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), T(r, n, e), T(r, e, N), H(e, N, l), n = e, o = [], c = [], f = n.next;
      continue;
    }
    if ((e.f & z) !== 0 && (P(e), u && ((_d = (_c = e.nodes) == null ? void 0 : _c.a) == null ? void 0 : _d.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(e))), e !== f) {
      if (t !== void 0 && t.has(e)) {
        if (o.length < c.length) {
          var S = c[0], E;
          n = S.prev;
          var C = o[0], x = o[o.length - 1];
          for (E = 0; E < o.length; E += 1) H(o[E], S, l);
          for (E = 0; E < c.length; E += 1) t.delete(c[E]);
          T(r, C.prev, x.next), T(r, n, C), T(r, x, S), f = S, n = x, a -= 1, o = [], c = [];
        } else t.delete(e), H(e, f, l), T(r, e.prev, e.next), T(r, e, n === null ? r.effect.first : n.next), T(r, n, e), n = e;
        continue;
      }
      for (o = [], c = []; f !== null && f !== e; ) (t ?? (t = /* @__PURE__ */ new Set())).add(f), c.push(f), f = f.next;
      if (f === null) continue;
    }
    (e.f & m) === 0 && o.push(e), n = e, f = e.next;
  }
  if (r.outrogroups !== null) {
    for (const v of r.outrogroups) v.pending.size === 0 && (L(q(v.done)), (_e2 = r.outrogroups) == null ? void 0 : _e2.delete(v));
    r.outrogroups.size === 0 && (r.outrogroups = null);
  }
  if (f !== null || t !== void 0) {
    var h = [];
    if (t !== void 0) for (e of t) (e.f & z) === 0 && h.push(e);
    for (; f !== null; ) (f.f & z) === 0 && f !== r.fallback && h.push(f), f = f.next;
    var I = h.length;
    if (I > 0) {
      var M = (d & K) !== 0 && s === 0 ? l : null;
      if (u) {
        for (a = 0; a < I; a += 1) (_g = (_f = h[a].nodes) == null ? void 0 : _f.a) == null ? void 0 : _g.measure();
        for (a = 0; a < I; a += 1) (_i = (_h = h[a].nodes) == null ? void 0 : _h.a) == null ? void 0 : _i.fix();
      }
      he(r, h, M);
    }
  }
  u && te(() => {
    var _a2, _b2;
    if (_ !== void 0) for (e of _) (_b2 = (_a2 = e.nodes) == null ? void 0 : _a2.a) == null ? void 0 : _b2.apply();
  });
}
function _e(r, i, l, d, g, u, s, p) {
  var f = (s & se) !== 0 ? (s & ue) === 0 ? ie(l, false, false) : G(l) : null, t = (s & oe) !== 0 ? G(g) : null;
  return { v: f, i: t, e: F(() => (u(i, f ?? l, t ?? g, p), () => {
    r.delete(d);
  })) };
}
function H(r, i, l) {
  if (r.nodes) for (var d = r.nodes.start, g = r.nodes.end, u = i && (i.f & m) === 0 ? i.nodes.start : l; d !== null; ) {
    var s = ve(d);
    if (u.before(d), d === g) return;
    d = s;
  }
}
function T(r, i, l) {
  i === null ? r.effect.first = l : i.next = l, l === null ? r.effect.last = i : l.prev = i;
}
export {
  Te as e,
  me as i
};
