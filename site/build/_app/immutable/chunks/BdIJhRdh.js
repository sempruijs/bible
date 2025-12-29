var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _r2, _s, _e2, _t2, _a, _f, _i, _B_instances, l_fn, n_fn, u_fn, o_fn, c_fn;
var Ft = Array.isArray, Mt = Array.prototype.indexOf, An = Array.from, Rn = Object.defineProperty, le = Object.getOwnPropertyDescriptor, jt = Object.getOwnPropertyDescriptors, Lt = Object.prototype, qt = Array.prototype, nt = Object.getPrototypeOf, Je = Object.isExtensible;
const Sn = () => {
};
function xn(e) {
  return e();
}
function Yt(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function rt() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
const w = 2, qe = 4, Re = 8, Ht = 1 << 24, j = 16, L = 32, te = 64, Ye = 128, D = 512, m = 1024, A = 2048, I = 4096, C = 8192, Y = 16384, He = 32768, pe = 65536, Ne = 1 << 17, st = 1 << 18, ve = 1 << 19, ft = 1 << 20, kn = 1 << 25, J = 32768, Ce = 1 << 21, Ue = 1 << 22, H = 1 << 23, ue = Symbol("$state"), On = Symbol("legacy props"), ne = new class extends Error {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "StaleReactionError");
    __publicField(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Be = 3, it = 8;
function Ut(e) {
  throw new Error("https://svelte.dev/e/experimental_async_required");
}
function Nn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Bt() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Vt(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Gt() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Kt(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function zt() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function $t() {
  throw new Error("https://svelte.dev/e/fork_discarded");
}
function Xt() {
  throw new Error("https://svelte.dev/e/fork_timing");
}
function Cn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function In(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Zt() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Jt() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Qt() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Pn() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Fn = 1, Mn = 2, jn = 4, Ln = 8, qn = 16, Yn = 1, Hn = 2, Un = 4, Bn = 8, Vn = 16, Gn = 1, Kn = 2, Wt = "[", en = "[!", tn = "]", Ve = {}, E = Symbol(), zn = "http://www.w3.org/1999/xhtml";
function Ge(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function $n() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Q = false;
function Xn(e) {
  Q = e;
}
let S;
function re(e) {
  if (e === null) throw Ge(), Ve;
  return S = e;
}
function Zn() {
  return re(G(S));
}
function Jn(e) {
  if (Q) {
    if (G(S) !== null) throw Ge(), Ve;
    S = e;
  }
}
function Qn(e = 1) {
  if (Q) {
    for (var t = e, n = S; t--; ) n = G(n);
    S = n;
  }
}
function Wn(e = true) {
  for (var t = 0, n = S; ; ) {
    if (n.nodeType === it) {
      var r = n.data;
      if (r === tn) {
        if (t === 0) return n;
        t -= 1;
      } else (r === Wt || r === en) && (t += 1);
    }
    var s = G(n);
    e && n.remove(), n = s;
  }
}
function er(e) {
  if (!e || e.nodeType !== it) throw Ge(), Ve;
  return e.data;
}
function at(e) {
  return e === this.v;
}
function nn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function lt(e) {
  return !nn(e, this.v);
}
let Se = false;
function tr() {
  Se = true;
}
let b = null;
function we(e) {
  b = e;
}
function nr(e, t = false, n) {
  b = { p: b, i: false, c: null, e: null, s: e, x: null, l: Se && !t ? { s: null, u: null, $: [] } : null };
}
function rr(e) {
  var t = b, n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) bt(r);
  }
  return t.i = true, b = t.p, {};
}
function de() {
  return !Se || b !== null && b.l === null;
}
let z = [];
function ut() {
  var e = z;
  z = [], Yt(e);
}
function rn(e) {
  if (z.length === 0 && !oe) {
    var t = z;
    queueMicrotask(() => {
      t === z && ut();
    });
  }
  z.push(e);
}
function sn() {
  for (; z.length > 0; ) ut();
}
function fn(e) {
  var t = h;
  if (t === null) return _.f |= H, e;
  if ((t.f & He) === 0) {
    if ((t.f & Ye) === 0) throw e;
    t.b.error(e);
  } else ye(e, t);
}
function ye(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ye) !== 0) try {
      t.b.error(e);
      return;
    } catch (n) {
      e = n;
    }
    t = t.parent;
  }
  throw e;
}
const $ = /* @__PURE__ */ new Set();
let p = null, T = null, k = [], xe = null, Ie = false, oe = false;
const _B = class _B {
  constructor() {
    __privateAdd(this, _B_instances);
    __publicField(this, "committed", false);
    __publicField(this, "current", /* @__PURE__ */ new Map());
    __publicField(this, "previous", /* @__PURE__ */ new Map());
    __privateAdd(this, _r2, /* @__PURE__ */ new Set());
    __privateAdd(this, _s, /* @__PURE__ */ new Set());
    __privateAdd(this, _e2, 0);
    __privateAdd(this, _t2, 0);
    __privateAdd(this, _a, null);
    __privateAdd(this, _f, /* @__PURE__ */ new Set());
    __privateAdd(this, _i, /* @__PURE__ */ new Set());
    __publicField(this, "skipped_effects", /* @__PURE__ */ new Set());
    __publicField(this, "is_fork", false);
  }
  is_deferred() {
    return this.is_fork || __privateGet(this, _t2) > 0;
  }
  process(t) {
    var _a2;
    k = [], this.apply();
    var n = { parent: null, effect: null, effects: [], render_effects: [] };
    for (const r of t) __privateMethod(this, _B_instances, l_fn).call(this, r, n);
    this.is_fork || __privateMethod(this, _B_instances, o_fn).call(this), this.is_deferred() ? (__privateMethod(this, _B_instances, n_fn).call(this, n.effects), __privateMethod(this, _B_instances, n_fn).call(this, n.render_effects)) : (p = null, Qe(n.render_effects), Qe(n.effects), (_a2 = __privateGet(this, _a)) == null ? void 0 : _a2.resolve()), T = null;
  }
  capture(t, n) {
    this.previous.has(t) || this.previous.set(t, n), (t.f & H) === 0 && (this.current.set(t, t.v), T == null ? void 0 : T.set(t, t.v));
  }
  activate() {
    p = this, this.apply();
  }
  deactivate() {
    p === this && (p = null, T = null);
  }
  flush() {
    if (this.activate(), k.length > 0) {
      if (Fe(), p !== null && p !== this) return;
    } else __privateGet(this, _e2) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of __privateGet(this, _s)) t(this);
    __privateGet(this, _s).clear();
  }
  increment(t) {
    __privateSet(this, _e2, __privateGet(this, _e2) + 1), t && __privateSet(this, _t2, __privateGet(this, _t2) + 1);
  }
  decrement(t) {
    __privateSet(this, _e2, __privateGet(this, _e2) - 1), t && __privateSet(this, _t2, __privateGet(this, _t2) - 1), this.revive();
  }
  revive() {
    for (const t of __privateGet(this, _f)) __privateGet(this, _i).delete(t), y(t, A), W(t);
    for (const t of __privateGet(this, _i)) y(t, I), W(t);
    this.flush();
  }
  oncommit(t) {
    __privateGet(this, _r2).add(t);
  }
  ondiscard(t) {
    __privateGet(this, _s).add(t);
  }
  settled() {
    return (__privateGet(this, _a) ?? __privateSet(this, _a, rt())).promise;
  }
  static ensure() {
    if (p === null) {
      const t = p = new _B();
      $.add(p), oe || _B.enqueue(() => {
        p === t && t.flush();
      });
    }
    return p;
  }
  static enqueue(t) {
    rn(t);
  }
  apply() {
  }
};
_r2 = new WeakMap();
_s = new WeakMap();
_e2 = new WeakMap();
_t2 = new WeakMap();
_a = new WeakMap();
_f = new WeakMap();
_i = new WeakMap();
_B_instances = new WeakSet();
l_fn = function(t, n) {
  var _a2;
  t.f ^= m;
  for (var r = t.first; r !== null; ) {
    var s = r.f, f = (s & (L | te)) !== 0, u = f && (s & m) !== 0, l = u || (s & C) !== 0 || this.skipped_effects.has(r);
    if ((r.f & Ye) !== 0 && ((_a2 = r.b) == null ? void 0 : _a2.is_pending()) && (n = { parent: n, effect: r, effects: [], render_effects: [] }), !l && r.fn !== null) {
      f ? r.f ^= m : (s & qe) !== 0 ? n.effects.push(r) : he(r) && ((r.f & j) !== 0 && __privateGet(this, _f).add(r), _e(r));
      var i = r.first;
      if (i !== null) {
        r = i;
        continue;
      }
    }
    var a = r.parent;
    for (r = r.next; r === null && a !== null; ) a === n.effect && (__privateMethod(this, _B_instances, n_fn).call(this, n.effects), __privateMethod(this, _B_instances, n_fn).call(this, n.render_effects), n = n.parent), r = a.next, a = a.parent;
  }
};
n_fn = function(t) {
  for (const n of t) (n.f & A) !== 0 ? __privateGet(this, _f).add(n) : (n.f & I) !== 0 && __privateGet(this, _i).add(n), __privateMethod(this, _B_instances, u_fn).call(this, n.deps), y(n, m);
};
u_fn = function(t) {
  if (t !== null) for (const n of t) (n.f & w) === 0 || (n.f & J) === 0 || (n.f ^= J, __privateMethod(this, _B_instances, u_fn).call(this, n.deps));
};
o_fn = function() {
  if (__privateGet(this, _t2) === 0) {
    for (const t of __privateGet(this, _r2)) t();
    __privateGet(this, _r2).clear();
  }
  __privateGet(this, _e2) === 0 && __privateMethod(this, _B_instances, c_fn).call(this);
};
c_fn = function() {
  var _a2;
  if ($.size > 1) {
    this.previous.clear();
    var t = T, n = true, r = { parent: null, effect: null, effects: [], render_effects: [] };
    for (const f of $) {
      if (f === this) {
        n = false;
        continue;
      }
      const u = [];
      for (const [i, a] of this.current) {
        if (f.current.has(i)) if (n && a !== f.current.get(i)) f.current.set(i, a);
        else continue;
        u.push(i);
      }
      if (u.length === 0) continue;
      const l = [...f.current.keys()].filter((i) => !this.current.has(i));
      if (l.length > 0) {
        var s = k;
        k = [];
        const i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
        for (const o of u) ot(o, l, i, a);
        if (k.length > 0) {
          p = f, f.apply();
          for (const o of k) __privateMethod(_a2 = f, _B_instances, l_fn).call(_a2, o, r);
          f.deactivate();
        }
        k = s;
      }
    }
    p = null, T = t;
  }
  this.committed = true, $.delete(this);
};
let B = _B;
function Pe(e) {
  var t = oe;
  oe = true;
  try {
    var n;
    for (e && (p !== null && Fe(), n = e()); ; ) {
      if (sn(), k.length === 0 && (p == null ? void 0 : p.flush(), k.length === 0)) return xe = null, n;
      Fe();
    }
  } finally {
    oe = t;
  }
}
function Fe() {
  var e = X;
  Ie = true;
  var t = null;
  try {
    var n = 0;
    for (Te(true); k.length > 0; ) {
      var r = B.ensure();
      if (n++ > 1e3) {
        var s, f;
        an();
      }
      r.process(k), U.clear();
    }
  } finally {
    Ie = false, Te(e), xe = null;
  }
}
function an() {
  try {
    zt();
  } catch (e) {
    ye(e, xe);
  }
}
let F = null;
function Qe(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Y | C)) === 0 && he(r) && (F = /* @__PURE__ */ new Set(), _e(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? Rt(r) : r.fn = null), (F == null ? void 0 : F.size) > 0)) {
        U.clear();
        for (const s of F) {
          if ((s.f & (Y | C)) !== 0) continue;
          const f = [s];
          let u = s.parent;
          for (; u !== null; ) F.has(u) && (F.delete(u), f.push(u)), u = u.parent;
          for (let l = f.length - 1; l >= 0; l--) {
            const i = f[l];
            (i.f & (Y | C)) === 0 && _e(i);
          }
        }
        F.clear();
      }
    }
    F = null;
  }
}
function ot(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null)) for (const s of e.reactions) {
    const f = s.f;
    (f & w) !== 0 ? ot(s, t, n, r) : (f & (Ue | j)) !== 0 && (f & A) === 0 && _t(s, t, r) && (y(s, A), W(s));
  }
}
function ct(e, t) {
  if (e.reactions !== null) for (const n of e.reactions) {
    const r = n.f;
    (r & w) !== 0 ? ct(n, t) : (r & Ne) !== 0 && (y(n, A), t.add(n));
  }
}
function _t(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null) for (const s of e.deps) {
    if (t.includes(s)) return true;
    if ((s.f & w) !== 0 && _t(s, t, n)) return n.set(s, true), true;
  }
  return n.set(e, false), false;
}
function W(e) {
  for (var t = xe = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Ie && t === h && (n & j) !== 0 && (n & st) === 0) return;
    if ((n & (te | L)) !== 0) {
      if ((n & m) === 0) return;
      t.f ^= m;
    }
  }
  k.push(t);
}
function sr(e) {
  Ut(), p !== null && Xt();
  var t = B.ensure();
  t.is_fork = true, T = /* @__PURE__ */ new Map();
  var n = false, r = t.settled();
  Pe(e), T = null;
  for (var [s, f] of t.previous) s.v = f;
  return { commit: async () => {
    if (n) {
      await r;
      return;
    }
    $.has(t) || $t(), n = true, t.is_fork = false;
    for (var [u, l] of t.current) u.v = l;
    Pe(() => {
      var i = /* @__PURE__ */ new Set();
      for (var a of t.current.keys()) ct(a, i);
      vn(i), pt();
    }), t.revive(), await r;
  }, discard: () => {
    !n && $.has(t) && ($.delete(t), t.discard());
  } };
}
function ln(e, t, n, r) {
  const s = de() ? Ke : cn;
  if (n.length === 0 && e.length === 0) {
    r(t.map(s));
    return;
  }
  var f = p, u = h, l = un();
  function i() {
    Promise.all(n.map((a) => on(a))).then((a) => {
      l();
      try {
        r([...t.map(s), ...a]);
      } catch (o) {
        (u.f & Y) === 0 && ye(o, u);
      }
      f == null ? void 0 : f.deactivate(), Ee();
    }).catch((a) => {
      ye(a, u);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    l();
    try {
      return i();
    } finally {
      f == null ? void 0 : f.deactivate(), Ee();
    }
  }) : i();
}
function un() {
  var e = h, t = _, n = b, r = p;
  return function(f = true) {
    se(e), V(t), we(n), f && (r == null ? void 0 : r.activate());
  };
}
function Ee() {
  se(null), V(null), we(null);
}
function Ke(e) {
  var t = w | A, n = _ !== null && (_.f & w) !== 0 ? _ : null;
  return h !== null && (h.f |= ve), { ctx: b, deps: null, effects: null, equals: at, f: t, fn: e, reactions: null, rv: 0, v: E, wv: 0, parent: n ?? h, ac: null };
}
function on(e, t) {
  let n = h;
  n === null && Bt();
  var r = n.b, s = void 0, f = $e(E), u = !_, l = /* @__PURE__ */ new Map();
  return wn(() => {
    var _a2;
    var i = rt();
    s = i.promise;
    try {
      Promise.resolve(e()).then(i.resolve, i.reject).then(() => {
        a === p && a.committed && a.deactivate(), Ee();
      });
    } catch (c) {
      i.reject(c), Ee();
    }
    var a = p;
    if (u) {
      var o = !r.is_pending();
      r.update_pending_count(1), a.increment(o), (_a2 = l.get(a)) == null ? void 0 : _a2.reject(ne), l.delete(a), l.set(a, i);
    }
    const v = (c, d = void 0) => {
      if (a.activate(), d) d !== ne && (f.f |= H, Me(f, d));
      else {
        (f.f & H) !== 0 && (f.f ^= H), Me(f, c);
        for (const [O, ke] of l) {
          if (l.delete(O), O === a) break;
          ke.reject(ne);
        }
      }
      u && (r.update_pending_count(-1), a.decrement(o));
    };
    i.promise.then(v, (c) => v(null, c || "unknown"));
  }), pn(() => {
    for (const i of l.values()) i.reject(ne);
  }), new Promise((i) => {
    function a(o) {
      function v() {
        o === s ? i(f) : a(s);
      }
      o.then(v, v);
    }
    a(s);
  });
}
function fr(e) {
  const t = Ke(e);
  return kt(t), t;
}
function cn(e) {
  const t = Ke(e);
  return t.equals = lt, t;
}
function vt(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) ee(t[n]);
  }
}
function _n(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & w) === 0) return (t.f & Y) === 0 ? t : null;
    t = t.parent;
  }
  return null;
}
function ze(e) {
  var t, n = h;
  se(_n(e));
  try {
    e.f &= ~J, vt(e), t = Ct(e);
  } finally {
    se(n);
  }
  return t;
}
function dt(e) {
  var t = ze(e);
  if (e.equals(t) || ((p == null ? void 0 : p.is_fork) || (e.v = t), e.wv = Dt()), !fe) if (T !== null) (be() || (p == null ? void 0 : p.is_fork)) && T.set(e, t);
  else {
    var n = (e.f & D) === 0 ? I : m;
    y(e, n);
  }
}
let me = /* @__PURE__ */ new Set();
const U = /* @__PURE__ */ new Map();
function vn(e) {
  me = e;
}
let ht = false;
function $e(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: at, rv: 0, wv: 0 };
  return n;
}
function q(e, t) {
  const n = $e(e);
  return kt(n), n;
}
function ir(e, t = false, n = true) {
  var _a2;
  const r = $e(e);
  return t || (r.equals = lt), Se && n && b !== null && b.l !== null && ((_a2 = b.l).s ?? (_a2.s = [])).push(r), r;
}
function K(e, t, n = false) {
  _ !== null && (!N || (_.f & Ne) !== 0) && de() && (_.f & (w | j | Ue | Ne)) !== 0 && !(M == null ? void 0 : M.includes(e)) && Qt();
  let r = n ? ie(t) : t;
  return Me(e, r);
}
function Me(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    fe ? U.set(e, t) : U.set(e, n), e.v = t;
    var r = B.ensure();
    r.capture(e, n), (e.f & w) !== 0 && ((e.f & A) !== 0 && ze(e), y(e, (e.f & D) !== 0 ? m : I)), e.wv = Dt(), wt(e, A), de() && h !== null && (h.f & m) !== 0 && (h.f & (L | te)) === 0 && (x === null ? gn([e]) : x.push(e)), !r.is_fork && me.size > 0 && !ht && pt();
  }
  return t;
}
function pt() {
  ht = false;
  var e = X;
  Te(true);
  const t = Array.from(me);
  try {
    for (const n of t) (n.f & m) !== 0 && y(n, I), he(n) && _e(n);
  } finally {
    Te(e);
  }
  me.clear();
}
function De(e) {
  K(e, e.v + 1);
}
function wt(e, t) {
  var n = e.reactions;
  if (n !== null) for (var r = de(), s = n.length, f = 0; f < s; f++) {
    var u = n[f], l = u.f;
    if (!(!r && u === h)) {
      var i = (l & A) === 0;
      if (i && y(u, t), (l & w) !== 0) {
        var a = u;
        T == null ? void 0 : T.delete(a), (l & J) === 0 && (l & D && (u.f |= J), wt(a, I));
      } else i && ((l & j) !== 0 && F !== null && F.add(u), W(u));
    }
  }
}
function ie(e) {
  if (typeof e != "object" || e === null || ue in e) return e;
  const t = nt(e);
  if (t !== Lt && t !== qt) return e;
  var n = /* @__PURE__ */ new Map(), r = Ft(e), s = q(0), f = Z, u = (l) => {
    if (Z === f) return l();
    var i = _, a = Z;
    V(null), tt(f);
    var o = l();
    return V(i), tt(a), o;
  };
  return r && n.set("length", q(e.length)), new Proxy(e, { defineProperty(l, i, a) {
    (!("value" in a) || a.configurable === false || a.enumerable === false || a.writable === false) && Zt();
    var o = n.get(i);
    return o === void 0 ? o = u(() => {
      var v = q(a.value);
      return n.set(i, v), v;
    }) : K(o, a.value, true), true;
  }, deleteProperty(l, i) {
    var a = n.get(i);
    if (a === void 0) {
      if (i in l) {
        const o = u(() => q(E));
        n.set(i, o), De(s);
      }
    } else K(a, E), De(s);
    return true;
  }, get(l, i, a) {
    var _a2;
    if (i === ue) return e;
    var o = n.get(i), v = i in l;
    if (o === void 0 && (!v || ((_a2 = le(l, i)) == null ? void 0 : _a2.writable)) && (o = u(() => {
      var d = ie(v ? l[i] : E), O = q(d);
      return O;
    }), n.set(i, o)), o !== void 0) {
      var c = ae(o);
      return c === E ? void 0 : c;
    }
    return Reflect.get(l, i, a);
  }, getOwnPropertyDescriptor(l, i) {
    var a = Reflect.getOwnPropertyDescriptor(l, i);
    if (a && "value" in a) {
      var o = n.get(i);
      o && (a.value = ae(o));
    } else if (a === void 0) {
      var v = n.get(i), c = v == null ? void 0 : v.v;
      if (v !== void 0 && c !== E) return { enumerable: true, configurable: true, value: c, writable: true };
    }
    return a;
  }, has(l, i) {
    var _a2;
    if (i === ue) return true;
    var a = n.get(i), o = a !== void 0 && a.v !== E || Reflect.has(l, i);
    if (a !== void 0 || h !== null && (!o || ((_a2 = le(l, i)) == null ? void 0 : _a2.writable))) {
      a === void 0 && (a = u(() => {
        var c = o ? ie(l[i]) : E, d = q(c);
        return d;
      }), n.set(i, a));
      var v = ae(a);
      if (v === E) return false;
    }
    return o;
  }, set(l, i, a, o) {
    var _a2;
    var v = n.get(i), c = i in l;
    if (r && i === "length") for (var d = a; d < v.v; d += 1) {
      var O = n.get(d + "");
      O !== void 0 ? K(O, E) : d in l && (O = u(() => q(E)), n.set(d + "", O));
    }
    if (v === void 0) (!c || ((_a2 = le(l, i)) == null ? void 0 : _a2.writable)) && (v = u(() => q(void 0)), K(v, ie(a)), n.set(i, v));
    else {
      c = v.v !== E;
      var ke = u(() => ie(a));
      K(v, ke);
    }
    var Xe = Reflect.getOwnPropertyDescriptor(l, i);
    if ((Xe == null ? void 0 : Xe.set) && Xe.set.call(o, a), !c) {
      if (r && typeof i == "string") {
        var Ze = n.get("length"), Oe = Number(i);
        Number.isInteger(Oe) && Oe >= Ze.v && K(Ze, Oe + 1);
      }
      De(s);
    }
    return true;
  }, ownKeys(l) {
    ae(s);
    var i = Reflect.ownKeys(l).filter((v) => {
      var c = n.get(v);
      return c === void 0 || c.v !== E;
    });
    for (var [a, o] of n) o.v !== E && !(a in l) && i.push(a);
    return i;
  }, setPrototypeOf() {
    Jt();
  } });
}
var We, dn, yt, Et;
function ar() {
  if (We === void 0) {
    We = window, dn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    yt = le(t, "firstChild").get, Et = le(t, "nextSibling").get, Je(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Je(n) && (n.__t = void 0);
  }
}
function ge(e = "") {
  return document.createTextNode(e);
}
function je(e) {
  return yt.call(e);
}
function G(e) {
  return Et.call(e);
}
function lr(e, t) {
  if (!Q) return je(e);
  var n = je(S);
  if (n === null) n = S.appendChild(ge());
  else if (t && n.nodeType !== Be) {
    var r = ge();
    return n == null ? void 0 : n.before(r), re(r), r;
  }
  return re(n), n;
}
function ur(e, t = false) {
  if (!Q) {
    var n = je(e);
    return n instanceof Comment && n.data === "" ? G(n) : n;
  }
  if (t && (S == null ? void 0 : S.nodeType) !== Be) {
    var r = ge();
    return S == null ? void 0 : S.before(r), re(r), r;
  }
  return S;
}
function or(e, t = 1, n = false) {
  let r = Q ? S : e;
  for (var s; t--; ) s = r, r = G(r);
  if (!Q) return r;
  if (n && (r == null ? void 0 : r.nodeType) !== Be) {
    var f = ge();
    return r === null ? s == null ? void 0 : s.after(f) : r.before(f), re(f), f;
  }
  return re(r), r;
}
function cr(e) {
  e.textContent = "";
}
function _r() {
  return false;
}
function mt(e) {
  var t = _, n = h;
  V(null), se(null);
  try {
    return e();
  } finally {
    V(t), se(n);
  }
}
function gt(e) {
  h === null && (_ === null && Kt(), Gt()), fe && Vt();
}
function hn(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function P(e, t, n) {
  var r = h;
  r !== null && (r.f & C) !== 0 && (e |= C);
  var s = { ctx: b, deps: null, nodes: null, f: e | A | D, first: null, fn: t, last: null, next: null, parent: r, b: r && r.b, prev: null, teardown: null, wv: 0, ac: null };
  if (n) try {
    _e(s), s.f |= He;
  } catch (l) {
    throw ee(s), l;
  }
  else t !== null && W(s);
  var f = s;
  if (n && f.deps === null && f.teardown === null && f.nodes === null && f.first === f.last && (f.f & ve) === 0 && (f = f.first, (e & j) !== 0 && (e & pe) !== 0 && f !== null && (f.f |= pe)), f !== null && (f.parent = r, r !== null && hn(f, r), _ !== null && (_.f & w) !== 0 && (e & te) === 0)) {
    var u = _;
    (u.effects ?? (u.effects = [])).push(f);
  }
  return s;
}
function be() {
  return _ !== null && !N;
}
function pn(e) {
  const t = P(Re, null, false);
  return y(t, m), t.teardown = e, t;
}
function vr(e) {
  gt();
  var t = h.f, n = !_ && (t & L) !== 0 && (t & He) === 0;
  if (n) {
    var r = b;
    (r.e ?? (r.e = [])).push(e);
  } else return bt(e);
}
function bt(e) {
  return P(qe | ft, e, false);
}
function dr(e) {
  return gt(), P(Re | ft, e, true);
}
function hr(e) {
  B.ensure();
  const t = P(te | ve, e, true);
  return (n = {}) => new Promise((r) => {
    n.outro ? mn(t, () => {
      ee(t), r(void 0);
    }) : (ee(t), r(void 0));
  });
}
function pr(e) {
  return P(qe, e, false);
}
function wn(e) {
  return P(Ue | ve, e, true);
}
function wr(e, t = 0) {
  return P(Re | t, e, true);
}
function yr(e, t = [], n = [], r = []) {
  ln(r, t, n, (s) => {
    P(Re, () => e(...s.map(ae)), true);
  });
}
function Er(e, t = 0) {
  var n = P(j | t, e, true);
  return n;
}
function mr(e) {
  return P(L | ve, e, true);
}
function Tt(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = fe, r = _;
    et(true), V(null);
    try {
      t.call(null);
    } finally {
      et(n), V(r);
    }
  }
}
function At(e, t = false) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && mt(() => {
      s.abort(ne);
    });
    var r = n.next;
    (n.f & te) !== 0 ? n.parent = null : ee(n, t), n = r;
  }
}
function yn(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & L) === 0 && ee(t), t = n;
  }
}
function ee(e, t = true) {
  var n = false;
  (t || (e.f & st) !== 0) && e.nodes !== null && e.nodes.end !== null && (En(e.nodes.start, e.nodes.end), n = true), At(e, t && !n), Ae(e, 0), y(e, Y);
  var r = e.nodes && e.nodes.t;
  if (r !== null) for (const f of r) f.stop();
  Tt(e);
  var s = e.parent;
  s !== null && s.first !== null && Rt(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function En(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : G(e);
    e.remove(), e = n;
  }
}
function Rt(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function mn(e, t, n = true) {
  var r = [];
  St(e, r, true);
  var s = () => {
    n && ee(e), t && t();
  }, f = r.length;
  if (f > 0) {
    var u = () => --f || s();
    for (var l of r) l.out(u);
  } else s();
}
function St(e, t, n) {
  if ((e.f & C) === 0) {
    e.f ^= C;
    var r = e.nodes && e.nodes.t;
    if (r !== null) for (const l of r) (l.is_global || n) && t.push(l);
    for (var s = e.first; s !== null; ) {
      var f = s.next, u = (s.f & pe) !== 0 || (s.f & L) !== 0 && (e.f & j) !== 0;
      St(s, t, u ? n : false), s = f;
    }
  }
}
function gr(e) {
  xt(e, true);
}
function xt(e, t) {
  if ((e.f & C) !== 0) {
    e.f ^= C, (e.f & m) === 0 && (y(e, A), W(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & pe) !== 0 || (n.f & L) !== 0;
      xt(n, s ? t : false), n = r;
    }
    var f = e.nodes && e.nodes.t;
    if (f !== null) for (const u of f) (u.is_global || t) && u.in();
  }
}
function br(e, t) {
  if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
    var s = n === r ? null : G(n);
    t.append(n), n = s;
  }
}
let X = false;
function Te(e) {
  X = e;
}
let fe = false;
function et(e) {
  fe = e;
}
let _ = null, N = false;
function V(e) {
  _ = e;
}
let h = null;
function se(e) {
  h = e;
}
let M = null;
function kt(e) {
  _ !== null && (M === null ? M = [e] : M.push(e));
}
let g = null, R = 0, x = null;
function gn(e) {
  x = e;
}
let Ot = 1, ce = 0, Z = ce;
function tt(e) {
  Z = e;
}
function Dt() {
  return ++Ot;
}
function he(e) {
  var t = e.f;
  if ((t & A) !== 0) return true;
  if (t & w && (e.f &= ~J), (t & I) !== 0) {
    var n = e.deps;
    if (n !== null) for (var r = n.length, s = 0; s < r; s++) {
      var f = n[s];
      if (he(f) && dt(f), f.wv > e.wv) return true;
    }
    (t & D) !== 0 && T === null && y(e, m);
  }
  return false;
}
function Nt(e, t, n = true) {
  var r = e.reactions;
  if (r !== null && !(M == null ? void 0 : M.includes(e))) for (var s = 0; s < r.length; s++) {
    var f = r[s];
    (f.f & w) !== 0 ? Nt(f, t, false) : t === f && (n ? y(f, A) : (f.f & m) !== 0 && y(f, I), W(f));
  }
}
function Ct(e) {
  var _a2;
  var t = g, n = R, r = x, s = _, f = M, u = b, l = N, i = Z, a = e.f;
  g = null, R = 0, x = null, _ = (a & (L | te)) === 0 ? e : null, M = null, we(e.ctx), N = false, Z = ++ce, e.ac !== null && (mt(() => {
    e.ac.abort(ne);
  }), e.ac = null);
  try {
    e.f |= Ce;
    var o = e.fn, v = o(), c = e.deps;
    if (g !== null) {
      var d;
      if (Ae(e, R), c !== null && R > 0) for (c.length = R + g.length, d = 0; d < g.length; d++) c[R + d] = g[d];
      else e.deps = c = g;
      if (be() && (e.f & D) !== 0) for (d = R; d < c.length; d++) ((_a2 = c[d]).reactions ?? (_a2.reactions = [])).push(e);
    } else c !== null && R < c.length && (Ae(e, R), c.length = R);
    if (de() && x !== null && !N && c !== null && (e.f & (w | I | A)) === 0) for (d = 0; d < x.length; d++) Nt(x[d], e);
    return s !== null && s !== e && (ce++, x !== null && (r === null ? r = x : r.push(...x))), (e.f & H) !== 0 && (e.f ^= H), v;
  } catch (O) {
    return fn(O);
  } finally {
    e.f ^= Ce, g = t, R = n, x = r, _ = s, M = f, we(u), N = l, Z = i;
  }
}
function bn(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Mt.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  n === null && (t.f & w) !== 0 && (g === null || !g.includes(t)) && (y(t, I), (t.f & D) !== 0 && (t.f ^= D, t.f &= ~J), vt(t), Ae(t, 0));
}
function Ae(e, t) {
  var n = e.deps;
  if (n !== null) for (var r = t; r < n.length; r++) bn(e, n[r]);
}
function _e(e) {
  var t = e.f;
  if ((t & Y) === 0) {
    y(e, m);
    var n = h, r = X;
    h = e, X = true;
    try {
      (t & (j | Ht)) !== 0 ? yn(e) : At(e), Tt(e);
      var s = Ct(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Ot;
      var f;
    } finally {
      X = r, h = n;
    }
  }
}
async function Tr() {
  await Promise.resolve(), Pe();
}
function Ar() {
  return B.ensure().settled();
}
function ae(e) {
  var t = e.f, n = (t & w) !== 0;
  if (_ !== null && !N) {
    var r = h !== null && (h.f & Y) !== 0;
    if (!r && !(M == null ? void 0 : M.includes(e))) {
      var s = _.deps;
      if ((_.f & Ce) !== 0) e.rv < ce && (e.rv = ce, g === null && s !== null && s[R] === e ? R++ : g === null ? g = [e] : g.includes(e) || g.push(e));
      else {
        (_.deps ?? (_.deps = [])).push(e);
        var f = e.reactions;
        f === null ? e.reactions = [_] : f.includes(_) || f.push(_);
      }
    }
  }
  if (fe) {
    if (U.has(e)) return U.get(e);
    if (n) {
      var u = e, l = u.v;
      return ((u.f & m) === 0 && u.reactions !== null || Pt(u)) && (l = ze(u)), U.set(u, l), l;
    }
  } else n && (!(T == null ? void 0 : T.has(e)) || (p == null ? void 0 : p.is_fork) && !be()) && (u = e, he(u) && dt(u), X && be() && (u.f & D) === 0 && It(u));
  if (T == null ? void 0 : T.has(e)) return T.get(e);
  if ((e.f & H) !== 0) throw e.v;
  return e.v;
}
function It(e) {
  if (e.deps !== null) {
    e.f ^= D;
    for (const t of e.deps) (t.reactions ?? (t.reactions = [])).push(e), (t.f & w) !== 0 && (t.f & D) === 0 && It(t);
  }
}
function Pt(e) {
  if (e.v === E) return true;
  if (e.deps === null) return false;
  for (const t of e.deps) if (U.has(t) || (t.f & w) !== 0 && Pt(t)) return true;
  return false;
}
function Rr(e) {
  var t = N;
  try {
    return N = true, e();
  } finally {
    N = t;
  }
}
const Tn = -7169;
function y(e, t) {
  e.f = e.f & Tn | t;
}
function Sr(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (ue in e) Le(e);
    else if (!Array.isArray(e)) for (let t in e) {
      const n = e[t];
      typeof n == "object" && n && ue in n && Le(n);
    }
  }
}
function Le(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e) try {
      Le(e[r], t);
    } catch {
    }
    const n = nt(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = jt(n);
      for (let s in r) {
        const f = r[s].get;
        if (f) try {
          f.call(e);
        } catch {
        }
      }
    }
  }
}
export {
  Ke as $,
  kn as A,
  $e as B,
  it as C,
  ir as D,
  jn as E,
  An as F,
  Ft as G,
  en as H,
  Fn as I,
  qn as J,
  Mn as K,
  C as L,
  rn as M,
  G as N,
  Ln as O,
  cr as P,
  le as Q,
  Un as R,
  ie as S,
  K as T,
  h as U,
  Y as V,
  Hn as W,
  Bn as X,
  fe as Y,
  ue as Z,
  On as _,
  ge as a,
  In as a0,
  Yn as a1,
  Vn as a2,
  dr as a3,
  Yt as a4,
  xn as a5,
  Sr as a6,
  tr as a7,
  nr as a8,
  yr as a9,
  Pn as aA,
  pe as aB,
  ve as aC,
  Ye as aD,
  $n as aE,
  Rn as aF,
  ar as aG,
  Wt as aH,
  Ve as aI,
  Cn as aJ,
  hr as aK,
  Ge as aL,
  pr as aM,
  Pe as aN,
  Tr as aO,
  Sn as aP,
  nn as aQ,
  sr as aR,
  Ar as aS,
  rr as aa,
  lr as ab,
  Jn as ac,
  ur as ad,
  or as ae,
  zn as af,
  nt as ag,
  jt as ah,
  q as ai,
  fr as aj,
  dn as ak,
  Gn as al,
  Kn as am,
  He as an,
  Be as ao,
  be as ap,
  wr as aq,
  De as ar,
  B as as,
  se as at,
  V as au,
  we as av,
  fn as aw,
  _ as ax,
  Qn as ay,
  ye as az,
  mr as b,
  p as c,
  ee as d,
  S as e,
  b as f,
  Se as g,
  Q as h,
  Rr as i,
  Er as j,
  re as k,
  Nn as l,
  br as m,
  je as n,
  Zn as o,
  mn as p,
  ae as q,
  gr as r,
  _r as s,
  cn as t,
  vr as u,
  er as v,
  Wn as w,
  Xn as x,
  tn as y,
  Me as z
};
