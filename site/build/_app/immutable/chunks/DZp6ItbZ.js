var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a2, _b2, _c2, _d2, _e, _f2, _g2, _h2, _i2, _j, _k, _l2, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t2, _u2, _v, _w, _x, _y2, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P;
import { d as u, E as Ks, e as z, f as $, h as E, j as _, k as w, l as T, m as v, o as W, N as A, p as j, q as rc, s as O, n as k, i as ve, r as S, u as U, v as ol, w as yr, x as M, y as Yi, z as cl, A as gn, C as rs, D as al, F as ul, G as ll, H as sc, a as Re, I as f, J as se, S as Hs, K as fl, L as ct, M as hl, O as dl, P as Qi, Q as ss, R as pl, T as gl, U as He, V as Js, W as Gs, X as ml, Y as br, Z as tn, $ as Qn, a0 as ue, a1 as le, a2 as zs, a3 as Ws, a4 as Ys, a5 as ic, a6 as _l, a7 as oc, a8 as Zn, a9 as nn, aa as Un, ab as mn, ac as yl, ad as Xn, ae as G, af as _t, ag as cc, ah as bl, ai as Sl, aj as kl, ak as vl, al as wl, am as Il, an as yt, ao as Qs, ap as El, aq as Ol, ar as Jr, as as $l, at as ac, au as Tl, av as Ml, _ as Sr } from "./EsKB78gf.js";
const Zs = (t) => (e, n) => e === n || t(e, n), Fl = u(2, (t, e) => Zs((n, r) => t(e(n), e(r)))), Cl = (t) => Zs((e, n) => {
  if (e.length !== n.length) return false;
  for (let r = 0; r < e.length; r++) if (!t(e[r], n[r])) return false;
  return true;
}), uc = Symbol.for("effect/Either"), lc = { ...Ks, [uc]: { _R: (t) => t }, [A]() {
  return this.toJSON();
}, toString() {
  return W(this.toJSON());
} }, Rl = Object.assign(Object.create(lc), { _tag: "Right", _op: "Right", [w](t) {
  return fc(t) && dc(t) && v(this.right, t.right);
}, [$]() {
  return E(_(this._tag))(_(this.right));
}, toJSON() {
  return { _id: "Either", _tag: this._tag, right: z(this.right) };
} }), Nl = Object.assign(Object.create(lc), { _tag: "Left", _op: "Left", [w](t) {
  return fc(t) && hc(t) && v(this.left, t.left);
}, [$]() {
  return E(_(this._tag))(_(this.left));
}, toJSON() {
  return { _id: "Either", _tag: this._tag, left: z(this.left) };
} }), fc = (t) => T(t, uc), hc = (t) => t._tag === "Left", dc = (t) => t._tag === "Right", Al = (t) => {
  const e = Object.create(Nl);
  return e.left = t, e;
}, Pl = (t) => {
  const e = Object.create(Rl);
  return e.right = t, e;
}, Fe = Pl, bt = Al, en = hc, Pn = dc, xl = u(2, (t, { onLeft: e, onRight: n }) => en(t) ? e(t.left) : n(t.right)), Ll = xl({ onLeft: j, onRight: j }), pc = (t) => t.length > 0, gc = (t) => (e, n) => e === n ? 0 : t(e, n), jl = gc((t, e) => t < e ? -1 : 1), ql = u(2, (t, e) => gc((n, r) => t(e(n), e(r)))), Dl = (t) => u(2, (e, n) => t(e, n) === 1), Bl = (...t) => t, Xs = (t) => new Array(t), Ul = u(2, (t, e) => {
  const n = Math.max(1, Math.floor(t)), r = new Array(n);
  for (let s = 0; s < n; s++) r[s] = e(s);
  return r;
}), q = (t) => Array.isArray(t) ? t : Array.from(t), Vl = (t) => Array.isArray(t) ? t : [t], er = u(2, (t, e) => [e, ...t]), Kl = u(2, (t, e) => [...t, e]), mc = u(2, (t, e) => q(t).concat(q(e))), Hl = (t) => t.length === 0, Jl = Hl, Gl = pc, te = pc, _c = (t, e) => t < 0 || t >= e.length, zl = (t, e) => Math.floor(Math.min(Math.max(0, t), e.length)), Wl = u(2, (t, e) => {
  const n = Math.floor(e);
  return _c(n, t) ? k() : O(t[n]);
}), yc = u(2, (t, e) => {
  const n = Math.floor(e);
  if (_c(n, t)) throw new Error(`Index ${n} out of bounds`);
  return t[n];
}), rn = Wl(0), Q = yc(0), Yl = (t) => te(t) ? O(bc(t)) : k(), bc = (t) => t[t.length - 1], St = (t) => t.slice(1), Ql = (t, e) => {
  let n = 0;
  for (const r of t) {
    if (!e(r, n)) break;
    n++;
  }
  return n;
}, Zl = u(2, (t, e) => nf(t, Ql(t, e))), Xl = u(2, (t, e) => {
  const n = q(t);
  return n.slice(zl(e, n), n.length);
}), Zi = (t) => Array.from(t).reverse(), tr = u(2, (t, e) => {
  const n = Array.from(t);
  return n.sort(e), n;
}), Xi = u(2, (t, e) => ef(t, e, Bl)), ef = u(3, (t, e, n) => {
  const r = q(t), s = q(e);
  if (te(r) && te(s)) {
    const i = [n(Q(r), Q(s))], o = Math.min(r.length, s.length);
    for (let c = 1; c < o; c++) i[c] = n(r[c], s[c]);
    return i;
  }
  return [];
}), tf = rc(), nf = u(2, (t, e) => {
  const n = Array.from(t), r = Math.floor(e);
  return te(n) ? r >= 1 ? rf(n, r) : [[], n] : [n, []];
}), rf = u(2, (t, e) => {
  const n = Math.max(1, Math.floor(e));
  return n >= t.length ? [sf(t), []] : [er(t.slice(1, n), Q(t)), t.slice(n)];
}), sf = (t) => t.slice(), of = u(3, (t, e, n) => {
  const r = q(t), s = q(e);
  return te(r) ? te(s) ? kc(n)(mc(r, s)) : r : s;
}), Vn = u(2, (t, e) => of(t, e, tf)), kt = () => [], fe = (t) => [t], ht = u(2, (t, e) => t.map(e)), cf = u(2, (t, e) => {
  if (Jl(t)) return [];
  const n = [];
  for (let r = 0; r < t.length; r++) {
    const s = e(t[r], r);
    for (let i = 0; i < s.length; i++) n.push(s[i]);
  }
  return n;
}), af = cf(j), Sc = u(3, (t, e, n) => q(t).reduce((r, s, i) => n(r, s, i), e)), eo = (t, e) => {
  const n = [];
  let r = t, s;
  for (; ve(s = e(r)); ) {
    const [i, o] = s.value;
    n.push(i), r = o;
  }
  return n;
}, ei = Cl, kc = u(2, (t, e) => {
  const n = q(t);
  if (te(n)) {
    const r = [Q(n)], s = St(n);
    for (const i of s) r.every((o) => !e(i, o)) && r.push(i);
    return r;
  }
  return [];
}), uf = (t) => kc(t, rc()), jt = u(2, (t, e) => q(t).join(e)), cn = jl, lf = (t) => t.replace(/[/\\^$*+?.()|[\]{}]/g, "\\$&"), ff = Symbol.for("effect/Context/Tag"), nr = Symbol.for("effect/Context/Reference"), hf = "effect/STM", df = Symbol.for(hf), vc = { ...Ks, _op: "Tag", [df]: yr, [ff]: { _Service: (t) => t, _Identifier: (t) => t }, toString() {
  return W(this.toJSON());
}, toJSON() {
  return { _id: "Tag", key: this.key, stack: this.stack };
}, [A]() {
  return this.toJSON();
}, of(t) {
  return t;
}, context(t) {
  return Ic(this, t);
} }, pf = { ...vc, [nr]: nr }, gf = (t) => {
  const e = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  const n = new Error();
  Error.stackTraceLimit = e;
  const r = Object.create(vc);
  return Object.defineProperty(r, "stack", { get() {
    return n.stack;
  } }), r.key = t, r;
}, mf = () => (t, e) => {
  const n = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  const r = new Error();
  Error.stackTraceLimit = n;
  function s() {
  }
  return Object.setPrototypeOf(s, pf), s.key = t, s.defaultValue = e.defaultValue, Object.defineProperty(s, "stack", { get() {
    return r.stack;
  } }), s;
}, wc = Symbol.for("effect/Context"), _f = { [wc]: { _Services: (t) => t }, [w](t) {
  if (bf(t) && this.unsafeMap.size === t.unsafeMap.size) {
    for (const e of this.unsafeMap.keys()) if (!t.unsafeMap.has(e) || !v(this.unsafeMap.get(e), t.unsafeMap.get(e))) return false;
    return true;
  }
  return false;
}, [$]() {
  return U(this, ol(this.unsafeMap.size));
}, pipe() {
  return S(this, arguments);
}, toString() {
  return W(this.toJSON());
}, toJSON() {
  return { _id: "Context", services: Array.from(this.unsafeMap).map(z) };
}, [A]() {
  return this.toJSON();
} }, vt = (t) => {
  const e = Object.create(_f);
  return e.unsafeMap = t, e;
}, yf = (t) => {
  const e = new Error(`Service not found${t.key ? `: ${String(t.key)}` : ""}`);
  if (t.stack) {
    const n = t.stack.split(`
`);
    if (n.length > 2) {
      const r = n[2].match(/at (.*)/);
      r && (e.message = e.message + ` (defined at ${r[1]})`);
    }
  }
  if (e.stack) {
    const n = e.stack.split(`
`);
    n.splice(1, 3), e.stack = n.join(`
`);
  }
  return e;
}, bf = (t) => T(t, wc), Sf = (t) => T(t, nr), kf = vt(/* @__PURE__ */ new Map()), vf = () => kf, Ic = (t, e) => vt(/* @__PURE__ */ new Map([[t.key, e]])), wf = u(3, (t, e, n) => {
  const r = new Map(t.unsafeMap);
  return r.set(e.key, n), vt(r);
}), Gr = M("effect/Context/defaultValueCache", () => /* @__PURE__ */ new Map()), ti = (t) => {
  if (Gr.has(t.key)) return Gr.get(t.key);
  const e = t.defaultValue();
  return Gr.set(t.key, e), e;
}, If = (t, e) => t.unsafeMap.has(e.key) ? t.unsafeMap.get(e.key) : ti(e), Ec = u(2, (t, e) => {
  if (!t.unsafeMap.has(e.key)) {
    if (nr in e) return ti(e);
    throw yf(e);
  }
  return t.unsafeMap.get(e.key);
}), Ef = Ec, Of = u(2, (t, e) => t.unsafeMap.has(e.key) ? Yi(t.unsafeMap.get(e.key)) : Sf(e) ? Yi(ti(e)) : cl), $f = u(2, (t, e) => {
  const n = new Map(t.unsafeMap);
  for (const [r, s] of e.unsafeMap) n.set(r, s);
  return vt(n);
}), at = gf, ni = vf, Tf = Ic, Wt = wf, Oc = Ef, $c = Ec, _n = Of, Tc = $f, Mc = mf, Fc = Symbol.for("effect/Chunk");
function Mf(t, e, n, r, s) {
  for (let i = e; i < Math.min(t.length, e + s); i++) n[r + i - e] = t[i];
  return n;
}
const Cc = [], Ff = (t) => Zs((e, n) => e.length === n.length && Qe(e).every((r, s) => t(r, dt(n, s)))), Cf = Ff(v), Rf = { [Fc]: { _A: (t) => t }, toString() {
  return W(this.toJSON());
}, toJSON() {
  return { _id: "Chunk", values: Qe(this).map(z) };
}, [A]() {
  return this.toJSON();
}, [w](t) {
  return Rc(t) && Cf(this, t);
}, [$]() {
  return U(this, gn(Qe(this)));
}, [Symbol.iterator]() {
  switch (this.backing._tag) {
    case "IArray":
      return this.backing.array[Symbol.iterator]();
    case "IEmpty":
      return Cc[Symbol.iterator]();
    default:
      return Qe(this)[Symbol.iterator]();
  }
}, pipe() {
  return S(this, arguments);
} }, D = (t) => {
  const e = Object.create(Rf);
  switch (e.backing = t, t._tag) {
    case "IEmpty": {
      e.length = 0, e.depth = 0, e.left = e, e.right = e;
      break;
    }
    case "IConcat": {
      e.length = t.left.length + t.right.length, e.depth = 1 + Math.max(t.left.depth, t.right.depth), e.left = t.left, e.right = t.right;
      break;
    }
    case "IArray": {
      e.length = t.array.length, e.depth = 0, e.left = ke, e.right = ke;
      break;
    }
    case "ISingleton": {
      e.length = 1, e.depth = 0, e.left = ke, e.right = ke;
      break;
    }
    case "ISlice": {
      e.length = t.length, e.depth = t.chunk.depth + 1, e.left = ke, e.right = ke;
      break;
    }
  }
  return e;
}, Rc = (t) => T(t, Fc), ke = D({ _tag: "IEmpty" }), Pe = () => ke, zr = (...t) => Pf(t), ne = (t) => D({ _tag: "ISingleton", a: t }), Nc = (t) => Rc(t) ? t : kr(q(t)), is = (t, e, n) => {
  switch (t.backing._tag) {
    case "IArray": {
      Mf(t.backing.array, 0, e, n, t.length);
      break;
    }
    case "IConcat": {
      is(t.left, e, n), is(t.right, e, n + t.left.length);
      break;
    }
    case "ISingleton": {
      e[n] = t.backing.a;
      break;
    }
    case "ISlice": {
      let r = 0, s = n;
      for (; r < t.length; ) e[s] = dt(t, r), r += 1, s += 1;
      break;
    }
  }
}, Nf = (t) => {
  switch (t.backing._tag) {
    case "IEmpty":
      return Cc;
    case "IArray":
      return t.backing.array;
    default: {
      const e = new Array(t.length);
      return is(t, e, 0), t.backing = { _tag: "IArray", array: e }, t.left = ke, t.right = ke, t.depth = 0, e;
    }
  }
}, Qe = Nf, Af = (t) => {
  switch (t.backing._tag) {
    case "IEmpty":
    case "ISingleton":
      return t;
    case "IArray":
      return D({ _tag: "IArray", array: Zi(t.backing.array) });
    case "IConcat":
      return D({ _tag: "IConcat", left: wt(t.backing.right), right: wt(t.backing.left) });
    case "ISlice":
      return kr(Zi(Qe(t)));
  }
}, wt = Af, kr = (t) => t.length === 0 ? Pe() : t.length === 1 ? ne(t[0]) : D({ _tag: "IArray", array: t }), Pf = (t) => kr(t), dt = u(2, (t, e) => {
  switch (t.backing._tag) {
    case "IEmpty":
      throw new Error("Index out of bounds");
    case "ISingleton": {
      if (e !== 0) throw new Error("Index out of bounds");
      return t.backing.a;
    }
    case "IArray": {
      if (e >= t.length || e < 0) throw new Error("Index out of bounds");
      return t.backing.array[e];
    }
    case "IConcat":
      return e < t.left.length ? dt(t.left, e) : dt(t.right, e - t.left.length);
    case "ISlice":
      return dt(t.backing.chunk, e + t.backing.offset);
  }
}), xf = u(2, (t, e) => he(t, ne(e))), ge = u(2, (t, e) => he(ne(e), t)), os = u(2, (t, e) => {
  if (e <= 0) return t;
  if (e >= t.length) return ke;
  switch (t.backing._tag) {
    case "ISlice":
      return D({ _tag: "ISlice", chunk: t.backing.chunk, offset: t.backing.offset + e, length: t.backing.length - e });
    case "IConcat":
      return e > t.left.length ? os(t.right, e - t.left.length) : D({ _tag: "IConcat", left: os(t.left, e), right: t.right });
    default:
      return D({ _tag: "ISlice", chunk: t, offset: e, length: t.length - e });
  }
}), he = u(2, (t, e) => {
  if (t.backing._tag === "IEmpty") return e;
  if (e.backing._tag === "IEmpty") return t;
  const n = e.depth - t.depth;
  if (Math.abs(n) <= 1) return D({ _tag: "IConcat", left: t, right: e });
  if (n < -1) if (t.left.depth >= t.right.depth) {
    const r = he(t.right, e);
    return D({ _tag: "IConcat", left: t.left, right: r });
  } else {
    const r = he(t.right.right, e);
    if (r.depth === t.depth - 3) {
      const s = D({ _tag: "IConcat", left: t.right.left, right: r });
      return D({ _tag: "IConcat", left: t.left, right: s });
    } else {
      const s = D({ _tag: "IConcat", left: t.left, right: t.right.left });
      return D({ _tag: "IConcat", left: s, right: r });
    }
  }
  else if (e.right.depth >= e.left.depth) {
    const r = he(t, e.left);
    return D({ _tag: "IConcat", left: r, right: e.right });
  } else {
    const r = he(t, e.left.left);
    if (r.depth === e.depth - 3) {
      const s = D({ _tag: "IConcat", left: r, right: e.left.right });
      return D({ _tag: "IConcat", left: s, right: e.right });
    } else {
      const s = D({ _tag: "IConcat", left: e.left.right, right: e.right });
      return D({ _tag: "IConcat", left: r, right: s });
    }
  }
}), Lf = (t) => t.length === 0, It = (t) => t.length > 0, Ac = (t) => dt(t, 0), Et = Ac, Ge = (t) => os(t, 1), cs = Symbol.for("effect/Duration"), Pc = BigInt(0), to = BigInt(24), xn = BigInt(60), as = BigInt(1e3), no = BigInt(1e6), ro = BigInt(1e9), jf = /^(-?\d+(?:\.\d+)?)\s+(nanos?|micros?|millis?|seconds?|minutes?|hours?|days?|weeks?)$/, xe = (t) => {
  if (xc(t)) return t;
  if (rs(t)) return us(t);
  if (al(t)) return Wr(t);
  if (Array.isArray(t) && t.length === 2 && t.every(rs)) return t[0] === -1 / 0 || t[1] === -1 / 0 || Number.isNaN(t[0]) || Number.isNaN(t[1]) ? Lc : t[0] === 1 / 0 || t[1] === 1 / 0 ? Uf : Wr(BigInt(Math.round(t[0] * 1e9)) + BigInt(Math.round(t[1])));
  if (ul(t)) {
    const e = jf.exec(t);
    if (e) {
      const [n, r, s] = e, i = Number(r);
      switch (s) {
        case "nano":
        case "nanos":
          return Wr(BigInt(r));
        case "micro":
        case "micros":
          return Vf(BigInt(r));
        case "milli":
        case "millis":
          return us(i);
        case "second":
        case "seconds":
          return Kf(i);
        case "minute":
        case "minutes":
          return Hf(i);
        case "hour":
        case "hours":
          return Jf(i);
        case "day":
        case "days":
          return Gf(i);
        case "week":
        case "weeks":
          return zf(i);
      }
    }
  }
  throw new Error("Invalid DurationInput");
}, so = { _tag: "Millis", millis: 0 }, qf = { _tag: "Infinity" }, Df = { [cs]: cs, [$]() {
  return U(this, ll(this.value));
}, [w](t) {
  return xc(t) && th(this, t);
}, toString() {
  return `Duration(${rh(this)})`;
}, toJSON() {
  switch (this.value._tag) {
    case "Millis":
      return { _id: "Duration", _tag: "Millis", millis: this.value.millis };
    case "Nanos":
      return { _id: "Duration", _tag: "Nanos", hrtime: Yf(this) };
    case "Infinity":
      return { _id: "Duration", _tag: "Infinity" };
  }
}, [A]() {
  return this.toJSON();
}, pipe() {
  return S(this, arguments);
} }, Ie = (t) => {
  const e = Object.create(Df);
  return rs(t) ? isNaN(t) || t <= 0 ? e.value = so : Number.isFinite(t) ? Number.isInteger(t) ? e.value = { _tag: "Millis", millis: t } : e.value = { _tag: "Nanos", nanos: BigInt(Math.round(t * 1e6)) } : e.value = qf : t <= Pc ? e.value = so : e.value = { _tag: "Nanos", nanos: t }, e;
}, xc = (t) => T(t, cs), Bf = (t) => {
  switch (t.value._tag) {
    case "Millis":
      return t.value.millis === 0;
    case "Nanos":
      return t.value.nanos === Pc;
    case "Infinity":
      return false;
  }
}, Lc = Ie(0), Uf = Ie(1 / 0), Wr = (t) => Ie(t), Vf = (t) => Ie(t * as), us = (t) => Ie(t), Kf = (t) => Ie(t * 1e3), Hf = (t) => Ie(t * 6e4), Jf = (t) => Ie(t * 36e5), Gf = (t) => Ie(t * 864e5), zf = (t) => Ie(t * 6048e5), ls = (t) => Qf(t, { onMillis: (e) => e, onNanos: (e) => Number(e) / 1e6 }), Wf = (t) => {
  const e = xe(t);
  switch (e.value._tag) {
    case "Infinity":
      throw new Error("Cannot convert infinite duration to nanos");
    case "Nanos":
      return e.value.nanos;
    case "Millis":
      return BigInt(Math.round(e.value.millis * 1e6));
  }
}, Yf = (t) => {
  const e = xe(t);
  switch (e.value._tag) {
    case "Infinity":
      return [1 / 0, 0];
    case "Nanos":
      return [Number(e.value.nanos / ro), Number(e.value.nanos % ro)];
    case "Millis":
      return [Math.floor(e.value.millis / 1e3), Math.round(e.value.millis % 1e3 * 1e6)];
  }
}, Qf = u(2, (t, e) => {
  const n = xe(t);
  switch (n.value._tag) {
    case "Nanos":
      return e.onNanos(n.value.nanos);
    case "Infinity":
      return e.onMillis(1 / 0);
    case "Millis":
      return e.onMillis(n.value.millis);
  }
}), ri = u(3, (t, e, n) => {
  const r = xe(t), s = xe(e);
  if (r.value._tag === "Infinity" || s.value._tag === "Infinity") return n.onMillis(ls(r), ls(s));
  if (r.value._tag === "Nanos" || s.value._tag === "Nanos") {
    const i = r.value._tag === "Nanos" ? r.value.nanos : BigInt(Math.round(r.value.millis * 1e6)), o = s.value._tag === "Nanos" ? s.value.nanos : BigInt(Math.round(s.value.millis * 1e6));
    return n.onNanos(i, o);
  }
  return n.onMillis(r.value.millis, s.value.millis);
}), Zf = (t, e) => ri(t, e, { onMillis: (n, r) => n === r, onNanos: (n, r) => n === r }), Xf = u(2, (t, e) => ri(t, e, { onMillis: (n, r) => n <= r, onNanos: (n, r) => n <= r })), eh = u(2, (t, e) => ri(t, e, { onMillis: (n, r) => n >= r, onNanos: (n, r) => n >= r })), th = u(2, (t, e) => Zf(xe(t), xe(e))), nh = (t) => {
  const e = xe(t);
  if (e.value._tag === "Infinity") return { days: 1 / 0, hours: 1 / 0, minutes: 1 / 0, seconds: 1 / 0, millis: 1 / 0, nanos: 1 / 0 };
  const n = Wf(e), r = n / no, s = r / as, i = s / xn, o = i / xn, c = o / to;
  return { days: Number(c), hours: Number(o % to), minutes: Number(i % xn), seconds: Number(s % xn), millis: Number(r % as), nanos: Number(n % no) };
}, rh = (t) => {
  const e = xe(t);
  if (e.value._tag === "Infinity") return "Infinity";
  if (Bf(e)) return "0";
  const n = nh(e), r = [];
  return n.days !== 0 && r.push(`${n.days}d`), n.hours !== 0 && r.push(`${n.hours}h`), n.minutes !== 0 && r.push(`${n.minutes}m`), n.seconds !== 0 && r.push(`${n.seconds}s`), n.millis !== 0 && r.push(`${n.millis}ms`), n.nanos !== 0 && r.push(`${n.nanos}ns`), r.join(" ");
}, et = 5, si = Math.pow(2, et), sh = si - 1, ih = si / 2, oh = si / 4;
function ch(t) {
  return t -= t >> 1 & 1431655765, t = (t & 858993459) + (t >> 2 & 858993459), t = t + (t >> 4) & 252645135, t += t >> 8, t += t >> 16, t & 127;
}
function Ot(t, e) {
  return e >>> t & sh;
}
function ft(t) {
  return 1 << t;
}
function jc(t, e) {
  return ch(t & e - 1);
}
const ah = (t, e) => ({ value: t, previous: e });
function pt(t, e, n, r) {
  let s = r;
  if (!t) {
    const i = r.length;
    s = new Array(i);
    for (let o = 0; o < i; ++o) s[o] = r[o];
  }
  return s[e] = n, s;
}
function qc(t, e, n) {
  const r = n.length - 1;
  let s = 0, i = 0, o = n;
  if (t) s = i = e;
  else for (o = new Array(r); s < e; ) o[i++] = n[s++];
  for (++s; s <= r; ) o[i++] = n[s++];
  return t && (o.length = r), o;
}
function uh(t, e, n, r) {
  const s = r.length;
  if (t) {
    let a = s;
    for (; a >= e; ) r[a--] = r[a];
    return r[e] = n, r;
  }
  let i = 0, o = 0;
  const c = new Array(s + 1);
  for (; i < e; ) c[o++] = r[i++];
  for (c[e] = n; i < s; ) c[++o] = r[i++];
  return c;
}
class Be {
  constructor() {
    __publicField(this, "_tag", "EmptyNode");
  }
  modify(e, n, r, s, i, o) {
    const c = r(k());
    return Re(c) ? new Be() : (++o.value, new Ze(e, s, i, c));
  }
}
function de(t) {
  return sc(t, "EmptyNode");
}
function lh(t) {
  return de(t) || t._tag === "LeafNode" || t._tag === "CollisionNode";
}
function vr(t, e) {
  return de(t) ? false : e === t.edit;
}
class Ze {
  constructor(e, n, r, s) {
    __publicField(this, "edit");
    __publicField(this, "hash");
    __publicField(this, "key");
    __publicField(this, "value");
    __publicField(this, "_tag", "LeafNode");
    this.edit = e, this.hash = n, this.key = r, this.value = s;
  }
  modify(e, n, r, s, i, o) {
    if (v(i, this.key)) {
      const a = r(this.value);
      return a === this.value ? this : Re(a) ? (--o.value, new Be()) : vr(this, e) ? (this.value = a, this) : new Ze(e, s, i, a);
    }
    const c = r(k());
    return Re(c) ? this : (++o.value, Dc(e, n, this.hash, this, s, new Ze(e, s, i, c)));
  }
}
class ii {
  constructor(e, n, r) {
    __publicField(this, "edit");
    __publicField(this, "hash");
    __publicField(this, "children");
    __publicField(this, "_tag", "CollisionNode");
    this.edit = e, this.hash = n, this.children = r;
  }
  modify(e, n, r, s, i, o) {
    if (s === this.hash) {
      const a = vr(this, e), l = this.updateCollisionList(a, e, this.hash, this.children, r, i, o);
      return l === this.children ? this : l.length > 1 ? new ii(e, this.hash, l) : l[0];
    }
    const c = r(k());
    return Re(c) ? this : (++o.value, Dc(e, n, this.hash, this, s, new Ze(e, s, i, c)));
  }
  updateCollisionList(e, n, r, s, i, o, c) {
    const a = s.length;
    for (let d = 0; d < a; ++d) {
      const h = s[d];
      if ("key" in h && v(o, h.key)) {
        const p = h.value, g = i(p);
        return g === p ? s : Re(g) ? (--c.value, qc(e, d, s)) : pt(e, d, new Ze(n, r, o, g), s);
      }
    }
    const l = i(k());
    return Re(l) ? s : (++c.value, pt(e, a, new Ze(n, r, o, l), s));
  }
}
class $t {
  constructor(e, n, r) {
    __publicField(this, "edit");
    __publicField(this, "mask");
    __publicField(this, "children");
    __publicField(this, "_tag", "IndexedNode");
    this.edit = e, this.mask = n, this.children = r;
  }
  modify(e, n, r, s, i, o) {
    const c = this.mask, a = this.children, l = Ot(n, s), d = ft(l), h = jc(c, d), p = c & d, g = vr(this, e);
    if (!p) {
      const H = new Be().modify(e, n + et, r, s, i, o);
      return H ? a.length >= ih ? hh(e, l, H, c, a) : new $t(e, c | d, uh(g, h, H, a)) : this;
    }
    const m = a[h], I = m.modify(e, n + et, r, s, i, o);
    if (m === I) return this;
    let R = c, K;
    if (de(I)) {
      if (R &= ~d, !R) return new Be();
      if (a.length <= 2 && lh(a[h ^ 1])) return a[h ^ 1];
      K = qc(g, h, a);
    } else K = pt(g, h, I, a);
    return g ? (this.mask = R, this.children = K, this) : new $t(e, R, K);
  }
}
class oi {
  constructor(e, n, r) {
    __publicField(this, "edit");
    __publicField(this, "size");
    __publicField(this, "children");
    __publicField(this, "_tag", "ArrayNode");
    this.edit = e, this.size = n, this.children = r;
  }
  modify(e, n, r, s, i, o) {
    let c = this.size;
    const a = this.children, l = Ot(n, s), d = a[l], h = (d || new Be()).modify(e, n + et, r, s, i, o);
    if (d === h) return this;
    const p = vr(this, e);
    let g;
    if (de(d) && !de(h)) ++c, g = pt(p, l, h, a);
    else if (!de(d) && de(h)) {
      if (--c, c <= oh) return fh(e, c, l, a);
      g = pt(p, l, new Be(), a);
    } else g = pt(p, l, h, a);
    return p ? (this.size = c, this.children = g, this) : new oi(e, c, g);
  }
}
function fh(t, e, n, r) {
  const s = new Array(e - 1);
  let i = 0, o = 0;
  for (let c = 0, a = r.length; c < a; ++c) if (c !== n) {
    const l = r[c];
    l && !de(l) && (s[i++] = l, o |= 1 << c);
  }
  return new $t(t, o, s);
}
function hh(t, e, n, r, s) {
  const i = [];
  let o = r, c = 0;
  for (let a = 0; o; ++a) o & 1 && (i[a] = s[c++]), o >>>= 1;
  return i[e] = n, new oi(t, c + 1, i);
}
function dh(t, e, n, r, s, i) {
  if (n === s) return new ii(t, n, [i, r]);
  const o = Ot(e, n), c = Ot(e, s);
  if (o === c) return (a) => new $t(t, ft(o) | ft(c), [a]);
  {
    const a = o < c ? [r, i] : [i, r];
    return new $t(t, ft(o) | ft(c), a);
  }
}
function Dc(t, e, n, r, s, i) {
  let o, c = e;
  for (; ; ) {
    const a = dh(t, c, n, r, s, i);
    if (typeof a == "function") o = ah(a, o), c = c + et;
    else {
      let l = a;
      for (; o != null; ) l = o.value(l), o = o.previous;
      return l;
    }
  }
}
const Bc = "effect/HashMap", fs = Symbol.for(Bc), ph = { [fs]: fs, [Symbol.iterator]() {
  return new wr(this, (t, e) => [t, e]);
}, [$]() {
  let t = _(Bc);
  for (const e of this) t ^= f(_(e[0]), E(_(e[1])));
  return U(this, t);
}, [w](t) {
  if (_h(t)) {
    if (t._size !== this._size) return false;
    for (const e of this) {
      const n = f(t, ai(e[0], _(e[0])));
      if (Re(n)) return false;
      if (!v(e[1], n.value)) return false;
    }
    return true;
  }
  return false;
}, toString() {
  return W(this.toJSON());
}, toJSON() {
  return { _id: "HashMap", values: Array.from(this).map(z) };
}, [A]() {
  return this.toJSON();
}, pipe() {
  return S(this, arguments);
} }, ci = (t, e, n, r) => {
  const s = Object.create(ph);
  return s._editable = t, s._edit = e, s._root = n, s._size = r, s;
};
class wr {
  constructor(e, n) {
    __publicField(this, "map");
    __publicField(this, "f");
    __publicField(this, "v");
    this.map = e, this.f = n, this.v = Uc(this.map._root, this.f, void 0);
  }
  next() {
    if (Re(this.v)) return { done: true, value: void 0 };
    const e = this.v.value;
    return this.v = rr(e.cont), { done: false, value: e.value };
  }
  [Symbol.iterator]() {
    return new wr(this.map, this.f);
  }
}
const rr = (t) => t ? Vc(t[0], t[1], t[2], t[3], t[4]) : k(), Uc = (t, e, n = void 0) => {
  switch (t._tag) {
    case "LeafNode":
      return ve(t.value) ? O({ value: e(t.key, t.value.value), cont: n }) : rr(n);
    case "CollisionNode":
    case "ArrayNode":
    case "IndexedNode": {
      const r = t.children;
      return Vc(r.length, r, 0, e, n);
    }
    default:
      return rr(n);
  }
}, Vc = (t, e, n, r, s) => {
  for (; n < t; ) {
    const i = e[n++];
    if (i && !de(i)) return Uc(i, r, [t, e, n, r, s]);
  }
  return rr(s);
}, gh = ci(false, 0, new Be(), 0), Ir = () => gh, mh = (t) => {
  const e = Hc(Ir());
  for (const n of t) an(e, n[0], n[1]);
  return vh(e);
}, _h = (t) => T(t, fs), yh = (t) => t && de(t._root), bh = u(2, (t, e) => ai(t, e, _(e))), ai = u(3, (t, e, n) => {
  let r = t._root, s = 0;
  for (; ; ) switch (r._tag) {
    case "LeafNode":
      return v(e, r.key) ? r.value : k();
    case "CollisionNode": {
      if (n === r.hash) {
        const i = r.children;
        for (let o = 0, c = i.length; o < c; ++o) {
          const a = i[o];
          if ("key" in a && v(e, a.key)) return a.value;
        }
      }
      return k();
    }
    case "IndexedNode": {
      const i = Ot(s, n), o = ft(i);
      if (r.mask & o) {
        r = r.children[jc(r.mask, o)], s += et;
        break;
      }
      return k();
    }
    case "ArrayNode": {
      if (r = r.children[Ot(s, n)], r) {
        s += et;
        break;
      }
      return k();
    }
    default:
      return k();
  }
}), Sh = u(2, (t, e) => ve(ai(t, e, _(e)))), an = u(3, (t, e, n) => ui(t, e, () => O(n))), kh = u(3, (t, e, n) => t._editable ? (t._root = e, t._size = n, t) : e === t._root ? t : ci(t._editable, t._edit, e, n)), Kc = (t) => new wr(t, (e) => e), hs = (t) => t._size, Hc = (t) => ci(true, t._edit + 1, t._root, t._size), vh = (t) => (t._editable = false, t), ui = u(3, (t, e, n) => wh(t, e, _(e), n)), wh = u(4, (t, e, n, r) => {
  const s = { value: t._size }, i = t._root.modify(t._editable ? t._edit : NaN, 0, r, n, e, s);
  return f(t, kh(i, s.value));
}), io = u(2, (t, e) => ui(t, e, k)), Ih = u(2, (t, e) => Er(t, Ir(), (n, r, s) => an(n, s, e(r, s)))), Eh = u(2, (t, e) => Er(t, void 0, (n, r, s) => e(r, s))), Er = u(3, (t, e, n) => {
  const r = t._root;
  if (r._tag === "LeafNode") return ve(r.value) ? n(e, r.value.value, r.key) : e;
  if (r._tag === "EmptyNode") return e;
  const s = [r.children];
  let i;
  for (; i = s.pop(); ) for (let o = 0, c = i.length; o < c; ) {
    const a = i[o++];
    a && !de(a) && (a._tag === "LeafNode" ? ve(a.value) && (e = n(e, a.value.value, a.key)) : s.push(a.children));
  }
  return e;
}), Jc = "effect/HashSet", ds = Symbol.for(Jc), Oh = { [ds]: ds, [Symbol.iterator]() {
  return Kc(this._keyMap);
}, [$]() {
  return U(this, E(_(this._keyMap))(_(Jc)));
}, [w](t) {
  return $h(t) ? hs(this._keyMap) === hs(t._keyMap) && v(this._keyMap, t._keyMap) : false;
}, toString() {
  return W(this.toJSON());
}, toJSON() {
  return { _id: "HashSet", values: Array.from(this).map(z) };
}, [A]() {
  return this.toJSON();
}, pipe() {
  return S(this, arguments);
} }, Or = (t) => {
  const e = Object.create(Oh);
  return e._keyMap = t, e;
}, $h = (t) => T(t, ds), Th = Or(Ir()), $r = () => Th, Mh = (t) => {
  const e = li($r());
  for (const n of t) un(e, n);
  return fi(e);
}, Fh = (...t) => {
  const e = li($r());
  for (const n of t) un(e, n);
  return fi(e);
}, Ch = u(2, (t, e) => Sh(t._keyMap, e)), Rh = (t) => hs(t._keyMap), li = (t) => Or(Hc(t._keyMap)), fi = (t) => (t._keyMap._editable = false, t), Gc = u(2, (t, e) => {
  const n = li(t);
  return e(n), fi(n);
}), un = u(2, (t, e) => t._keyMap._editable ? (an(e, true)(t._keyMap), t) : Or(an(e, true)(t._keyMap))), zc = u(2, (t, e) => t._keyMap._editable ? (io(e)(t._keyMap), t) : Or(io(e)(t._keyMap))), Nh = u(2, (t, e) => Gc(t, (n) => {
  for (const r of e) zc(n, r);
})), Ah = u(2, (t, e) => Gc($r(), (n) => {
  Ph(t, (r) => un(n, r));
  for (const r of e) un(n, r);
})), Ph = u(2, (t, e) => Eh(t._keyMap, (n, r) => e(r))), xh = u(3, (t, e, n) => Er(t._keyMap, e, (r, s, i) => n(r, i))), tt = $r, Lh = Mh, hi = Fh, jh = Ch, Wc = Rh, sn = un, Yc = zc, oo = Nh, ln = Ah, sr = xh, co = Symbol.for("effect/MutableRef"), qh = { [co]: co, toString() {
  return W(this.toJSON());
}, toJSON() {
  return { _id: "MutableRef", current: z(this.current) };
}, [A]() {
  return this.toJSON();
}, pipe() {
  return S(this, arguments);
} }, Qc = (t) => {
  const e = Object.create(qh);
  return e.current = t, e;
}, Tr = (t) => t.current, Zc = u(2, (t, e) => (t.current = e, t)), di = "effect/FiberId", fn = Symbol.for(di), ir = "None", ps = "Runtime", Dh = "Composite", Bh = se(`${di}-${ir}`);
let Uh = class {
  constructor() {
    __publicField(this, _a2, fn);
    __publicField(this, "_tag", ir);
    __publicField(this, "id", -1);
    __publicField(this, "startTimeMillis", -1);
  }
  [(_a2 = fn, $)]() {
    return Bh;
  }
  [w](e) {
    return Xc(e) && e._tag === ir;
  }
  toString() {
    return W(this.toJSON());
  }
  toJSON() {
    return { _id: "FiberId", _tag: this._tag };
  }
  [A]() {
    return this.toJSON();
  }
};
class Vh {
  constructor(e, n) {
    __publicField(this, "id");
    __publicField(this, "startTimeMillis");
    __publicField(this, _b2, fn);
    __publicField(this, "_tag", ps);
    this.id = e, this.startTimeMillis = n;
  }
  [(_b2 = fn, $)]() {
    return U(this, se(`${di}-${this._tag}-${this.id}-${this.startTimeMillis}`));
  }
  [w](e) {
    return Xc(e) && e._tag === ps && this.id === e.id && this.startTimeMillis === e.startTimeMillis;
  }
  toString() {
    return W(this.toJSON());
  }
  toJSON() {
    return { _id: "FiberId", _tag: this._tag, id: this.id, startTimeMillis: this.startTimeMillis };
  }
  [A]() {
    return this.toJSON();
  }
}
const Kh = new Uh(), Xc = (t) => T(t, fn), gs = (t) => {
  switch (t._tag) {
    case ir:
      return tt();
    case ps:
      return hi(t.id);
    case Dh:
      return f(gs(t.left), ln(gs(t.right)));
  }
}, ao = M(Symbol.for("effect/Fiber/Id/_fiberCounter"), () => Qc(0)), ea = (t) => Array.from(gs(t)).map((n) => `#${n}`).join(","), Hh = () => {
  const t = Tr(ao);
  return f(ao, Zc(t + 1)), new Vh(t, Date.now());
}, Tt = Kh, Jh = ea, ta = Hh, pi = Ir, Gh = mh, zh = yh, na = bh, ra = an, sa = Kc, Wh = ui, Yh = Ih, ia = Er, hn = Symbol.for("effect/List"), ms = (t) => q(t), Qh = (t) => Fl(ei(t), ms), Zh = Qh(v), Xh = { [hn]: hn, _tag: "Cons", toString() {
  return W(this.toJSON());
}, toJSON() {
  return { _id: "List", _tag: "Cons", values: ms(this).map(z) };
}, [A]() {
  return this.toJSON();
}, [w](t) {
  return ca(t) && this._tag === t._tag && Zh(this, t);
}, [$]() {
  return U(this, gn(ms(this)));
}, [Symbol.iterator]() {
  let t = false, e = this;
  return { next() {
    if (t) return this.return();
    if (e._tag === "Nil") return t = true, this.return();
    const n = e.head;
    return e = e.tail, { done: t, value: n };
  }, return(n) {
    return t || (t = true), { done: true, value: n };
  } };
}, pipe() {
  return S(this, arguments);
} }, or = (t, e) => {
  const n = Object.create(Xh);
  return n.head = t, n.tail = e, n;
}, ed = se("Nil"), td = { [hn]: hn, _tag: "Nil", toString() {
  return W(this.toJSON());
}, toJSON() {
  return { _id: "List", _tag: "Nil" };
}, [A]() {
  return this.toJSON();
}, [$]() {
  return ed;
}, [w](t) {
  return ca(t) && this._tag === t._tag;
}, [Symbol.iterator]() {
  return { next() {
    return { done: true, value: void 0 };
  } };
}, pipe() {
  return S(this, arguments);
} }, oa = Object.create(td), ca = (t) => T(t, hn), Ne = (t) => t._tag === "Nil", nd = (t) => t._tag === "Cons", rd = () => oa, nt = (t, e) => or(t, e), Mt = rd, gi = (t) => or(t, oa), sd = u(2, (t, e) => od(e, t)), id = u(2, (t, e) => nt(e, t)), od = u(2, (t, e) => {
  if (Ne(t)) return e;
  if (Ne(e)) return t;
  {
    const n = or(e.head, t);
    let r = n, s = e.tail;
    for (; !Ne(s); ) {
      const i = or(s.head, t);
      r.tail = i, r = i, s = s.tail;
    }
    return n;
  }
}), cd = u(3, (t, e, n) => {
  let r = e, s = t;
  for (; !Ne(s); ) r = n(r, s.head), s = s.tail;
  return r;
}), ad = (t) => {
  let e = Mt(), n = t;
  for (; !Ne(n); ) e = id(e, n.head), n = n.tail;
  return e;
}, ud = Symbol.for("effect/DifferContextPatch");
function uo(t) {
  return t;
}
const yn = { ...Hs.prototype, [ud]: { _Value: uo, _Patch: uo } }, ld = Object.assign(Object.create(yn), { _tag: "Empty" }), fd = Object.create(ld), aa = () => fd, hd = Object.assign(Object.create(yn), { _tag: "AndThen" }), dd = (t, e) => {
  const n = Object.create(hd);
  return n.first = t, n.second = e, n;
}, pd = Object.assign(Object.create(yn), { _tag: "AddService" }), gd = (t, e) => {
  const n = Object.create(pd);
  return n.key = t, n.service = e, n;
}, md = Object.assign(Object.create(yn), { _tag: "RemoveService" }), _d = (t) => {
  const e = Object.create(md);
  return e.key = t, e;
}, yd = Object.assign(Object.create(yn), { _tag: "UpdateService" }), bd = (t, e) => {
  const n = Object.create(yd);
  return n.key = t, n.update = e, n;
}, Sd = (t, e) => {
  const n = new Map(t.unsafeMap);
  let r = aa();
  for (const [s, i] of e.unsafeMap.entries()) if (n.has(s)) {
    const o = n.get(s);
    n.delete(s), v(o, i) || (r = Kn(bd(s, () => i))(r));
  } else n.delete(s), r = Kn(gd(s, i))(r);
  for (const [s] of n.entries()) r = Kn(_d(s))(r);
  return r;
}, Kn = u(2, (t, e) => dd(t, e)), kd = u(2, (t, e) => {
  if (t._tag === "Empty") return e;
  let n = false, r = ne(t);
  const s = new Map(e.unsafeMap);
  for (; It(r); ) {
    const o = Et(r), c = Ge(r);
    switch (o._tag) {
      case "Empty": {
        r = c;
        break;
      }
      case "AddService": {
        s.set(o.key, o.service), r = c;
        break;
      }
      case "AndThen": {
        r = ge(ge(c, o.second), o.first);
        break;
      }
      case "RemoveService": {
        s.delete(o.key), r = c;
        break;
      }
      case "UpdateService": {
        s.set(o.key, o.update(s.get(o.key))), n = true, r = c;
        break;
      }
    }
  }
  if (!n) return vt(s);
  const i = /* @__PURE__ */ new Map();
  for (const [o] of e.unsafeMap) s.has(o) && (i.set(o, s.get(o)), s.delete(o));
  for (const [o, c] of s) i.set(o, c);
  return vt(i);
}), vd = Symbol.for("effect/DifferHashSetPatch");
function Yr(t) {
  return t;
}
const Mr = { ...Hs.prototype, [vd]: { _Value: Yr, _Key: Yr, _Patch: Yr } }, wd = Object.assign(Object.create(Mr), { _tag: "Empty" }), Id = Object.create(wd), ua = () => Id, Ed = Object.assign(Object.create(Mr), { _tag: "AndThen" }), Od = (t, e) => {
  const n = Object.create(Ed);
  return n.first = t, n.second = e, n;
}, $d = Object.assign(Object.create(Mr), { _tag: "Add" }), Td = (t) => {
  const e = Object.create($d);
  return e.value = t, e;
}, Md = Object.assign(Object.create(Mr), { _tag: "Remove" }), Fd = (t) => {
  const e = Object.create(Md);
  return e.value = t, e;
}, Cd = (t, e) => {
  const [n, r] = sr([t, ua()], ([s, i], o) => jh(o)(s) ? [Yc(o)(s), i] : [s, _s(Td(o))(i)])(e);
  return sr(r, (s, i) => _s(Fd(i))(s))(n);
}, _s = u(2, (t, e) => Od(t, e)), Rd = u(2, (t, e) => {
  if (t._tag === "Empty") return e;
  let n = e, r = ne(t);
  for (; It(r); ) {
    const s = Et(r), i = Ge(r);
    switch (s._tag) {
      case "Empty": {
        r = i;
        break;
      }
      case "AndThen": {
        r = ge(s.first)(ge(s.second)(i));
        break;
      }
      case "Add": {
        n = sn(s.value)(n), r = i;
        break;
      }
      case "Remove":
        n = Yc(s.value)(n), r = i;
    }
  }
  return n;
}), Nd = Symbol.for("effect/DifferReadonlyArrayPatch");
function lo(t) {
  return t;
}
const bn = { ...Hs.prototype, [Nd]: { _Value: lo, _Patch: lo } }, Ad = Object.assign(Object.create(bn), { _tag: "Empty" }), Pd = Object.create(Ad), la = () => Pd, xd = Object.assign(Object.create(bn), { _tag: "AndThen" }), Ld = (t, e) => {
  const n = Object.create(xd);
  return n.first = t, n.second = e, n;
}, jd = Object.assign(Object.create(bn), { _tag: "Append" }), qd = (t) => {
  const e = Object.create(jd);
  return e.values = t, e;
}, Dd = Object.assign(Object.create(bn), { _tag: "Slice" }), Bd = (t, e) => {
  const n = Object.create(Dd);
  return n.from = t, n.until = e, n;
}, Ud = Object.assign(Object.create(bn), { _tag: "Update" }), Vd = (t, e) => {
  const n = Object.create(Ud);
  return n.index = t, n.patch = e, n;
}, Kd = (t) => {
  let e = 0, n = la();
  for (; e < t.oldValue.length && e < t.newValue.length; ) {
    const r = t.oldValue[e], s = t.newValue[e], i = t.differ.diff(r, s);
    v(i, t.differ.empty) || (n = Hn(n, Vd(e, i))), e = e + 1;
  }
  return e < t.oldValue.length && (n = Hn(n, Bd(0, e))), e < t.newValue.length && (n = Hn(n, qd(Xl(e)(t.newValue)))), n;
}, Hn = u(2, (t, e) => Ld(t, e)), Hd = u(3, (t, e, n) => {
  if (t._tag === "Empty") return e;
  let r = e.slice(), s = fe(t);
  for (; Gl(s); ) {
    const i = Q(s), o = St(s);
    switch (i._tag) {
      case "Empty": {
        s = o;
        break;
      }
      case "AndThen": {
        o.unshift(i.first, i.second), s = o;
        break;
      }
      case "Append": {
        for (const c of i.values) r.push(c);
        s = o;
        break;
      }
      case "Slice": {
        r = r.slice(i.from, i.until), s = o;
        break;
      }
      case "Update": {
        r[i.index] = n.patch(i.patch, r[i.index]), s = o;
        break;
      }
    }
  }
  return r;
}), Jd = Symbol.for("effect/Differ"), Gd = { [Jd]: { _P: j, _V: j }, pipe() {
  return S(this, arguments);
} }, qt = (t) => {
  const e = Object.create(Gd);
  return e.empty = t.empty, e.diff = t.diff, e.combine = t.combine, e.patch = t.patch, e;
}, zd = () => qt({ empty: aa(), combine: (t, e) => Kn(e)(t), diff: (t, e) => Sd(t, e), patch: (t, e) => kd(e)(t) }), Wd = () => qt({ empty: ua(), combine: (t, e) => _s(e)(t), diff: (t, e) => Cd(t, e), patch: (t, e) => Rd(e)(t) }), Yd = (t) => qt({ empty: la(), combine: (e, n) => Hn(e, n), diff: (e, n) => Kd({ oldValue: e, newValue: n, differ: t }), patch: (e, n) => Hd(e, n, t) }), fa = () => Qd((t, e) => e), Qd = (t) => qt({ empty: j, combine: (e, n) => e === j ? n : n === j ? e : (r) => n(e(r)), diff: (e, n) => v(e, n) ? j : fl(n), patch: (e, n) => t(n, e(n)) }), dn = 255, ha = 8, ys = (t) => t & dn, bs = (t) => t >> ha & dn, Sn = (t, e) => (t & dn) + ((e & t & dn) << ha), Zd = Sn(0, 0), Xd = (t) => Sn(t, t), ep = (t) => Sn(t, 0), tp = u(2, (t, e) => Sn(ys(t) & ~e, bs(t))), np = u(2, (t, e) => t | e), rp = (t) => ~t >>> 0 & dn, sp = 0, Dt = 1, ip = 2, da = 4, Ss = 16, pa = 32, op = (t) => Fr(t, pa), cp = u(2, (t, e) => t | e), je = (t) => ga(t) && !up(t), ga = (t) => Fr(t, Dt), Fr = u(2, (t, e) => (t & e) !== 0), ma = (...t) => t.reduce((e, n) => e | n, 0), ap = ma(sp), fo = (t) => Fr(t, da), up = (t) => Fr(t, Ss), Jn = u(2, (t, e) => Sn(t ^ e, e)), Gn = u(2, (t, e) => t & (rp(ys(e)) | bs(e)) | ys(e) & bs(e)), ho = qt({ empty: Zd, diff: (t, e) => Jn(t, e), combine: (t, e) => np(e)(t), patch: (t, e) => Gn(e, t) }), lp = Xd, _a = ep, po = tp, ya = (t, e) => ({ _tag: "Par", left: t, right: e }), Ln = (t, e) => ({ _tag: "Seq", left: t, right: e }), fp = (t) => {
  let e = gi(t), n = Mt();
  for (; ; ) {
    const [r, s] = cd(e, [ba(), Mt()], ([i, o], c) => {
      const [a, l] = hp(c);
      return [_p(i, a), sd(o, l)];
    });
    if (n = dp(n, r), Ne(s)) return ad(n);
    e = s;
  }
  throw new Error("BUG: BlockedRequests.flatten - please report an issue at https://github.com/Effect-TS/effect/issues");
}, hp = (t) => {
  let e = t, n = ba(), r = Mt(), s = Mt();
  for (; ; ) switch (e._tag) {
    case "Empty": {
      if (Ne(r)) return [n, s];
      e = r.head, r = r.tail;
      break;
    }
    case "Par": {
      r = nt(e.right, r), e = e.left;
      break;
    }
    case "Seq": {
      const i = e.left, o = e.right;
      switch (i._tag) {
        case "Empty": {
          e = o;
          break;
        }
        case "Par": {
          const c = i.left, a = i.right;
          e = ya(Ln(c, o), Ln(a, o));
          break;
        }
        case "Seq": {
          const c = i.left, a = i.right;
          e = Ln(c, Ln(a, o));
          break;
        }
        case "Single": {
          e = i, s = nt(o, s);
          break;
        }
      }
      break;
    }
    case "Single": {
      if (n = mp(n, e), Ne(r)) return [n, s];
      e = r.head, r = r.tail;
      break;
    }
  }
  throw new Error("BUG: BlockedRequests.step - please report an issue at https://github.com/Effect-TS/effect/issues");
}, dp = (t, e) => {
  if (Ne(t)) return gi(Qr(e));
  if (yp(e)) return t;
  const n = Ip(t.head), r = bp(e);
  return n.length === 1 && r.length === 1 && v(n[0], r[0]) ? nt(wp(t.head, Qr(e)), t.tail) : nt(Qr(e), t);
}, pp = Symbol.for("effect/RequestBlock/RequestBlockParallel"), gp = { _R: (t) => t };
_c2 = pp;
class mi {
  constructor(e) {
    __publicField(this, "map");
    __publicField(this, _c2, gp);
    this.map = e;
  }
}
const ba = () => new mi(pi()), mp = (t, e) => new mi(Wh(t.map, e.dataSource, (n) => hl(dl(n, xf(e.blockedRequest)), () => ne(e.blockedRequest)))), _p = (t, e) => new mi(ia(t.map, e.map, (n, r, s) => ra(n, s, ct(na(n, s), { onNone: () => r, onSome: (i) => he(r, i) })))), yp = (t) => zh(t.map), bp = (t) => Array.from(sa(t.map)), Qr = (t) => vp(Yh(t.map, (e) => ne(e))), Sp = Symbol.for("effect/RequestBlock/RequestBlockSequential"), kp = { _R: (t) => t };
_d2 = Sp;
class Sa {
  constructor(e) {
    __publicField(this, "map");
    __publicField(this, _d2, kp);
    this.map = e;
  }
}
const vp = (t) => new Sa(t), wp = (t, e) => new Sa(ia(e.map, t.map, (n, r, s) => ra(n, s, ct(na(n, s), { onNone: () => Pe(), onSome: (i) => he(i, r) })))), Ip = (t) => Array.from(sa(t.map)), Ep = (t) => Array.from(t.map), kn = "Die", rt = "Empty", Bt = "Fail", Ut = "Interrupt", Ft = "Parallel", Ct = "Sequential", ka = "effect/Cause", va = Symbol.for(ka), Op = { _E: (t) => t }, Vt = { [va]: Op, [$]() {
  return f(_(ka), E(_(qp(this))), U(this));
}, [w](t) {
  return $p(t) && jp(this, t);
}, pipe() {
  return S(this, arguments);
}, toJSON() {
  switch (this._tag) {
    case "Empty":
      return { _id: "Cause", _tag: this._tag };
    case "Die":
      return { _id: "Cause", _tag: this._tag, defect: z(this.defect) };
    case "Interrupt":
      return { _id: "Cause", _tag: this._tag, fiberId: this.fiberId.toJSON() };
    case "Fail":
      return { _id: "Cause", _tag: this._tag, failure: z(this.error) };
    case "Sequential":
    case "Parallel":
      return { _id: "Cause", _tag: this._tag, left: z(this.left), right: z(this.right) };
  }
}, toString() {
  return vn(this);
}, [A]() {
  return this.toJSON();
} }, Rt = (() => {
  const t = Object.create(Vt);
  return t._tag = rt, t;
})(), cr = (t) => {
  const e = Object.create(Vt);
  return e._tag = Bt, e.error = t, e;
}, Ae = (t) => {
  const e = Object.create(Vt);
  return e._tag = kn, e.defect = t, e;
}, qe = (t) => {
  const e = Object.create(Vt);
  return e._tag = Ut, e.fiberId = t, e;
}, Cr = (t, e) => {
  const n = Object.create(Vt);
  return n._tag = Ft, n.left = t, n.right = e, n;
}, ae = (t, e) => {
  const n = Object.create(Vt);
  return n._tag = Ct, n.left = t, n.right = e, n;
}, $p = (t) => T(t, va), Tp = (t) => t._tag === rt, Mp = (t) => t._tag === rt ? true : Nt(t, true, (e, n) => {
  switch (n._tag) {
    case rt:
      return O(e);
    case kn:
    case Bt:
    case Ut:
      return O(false);
    default:
      return k();
  }
}), Fp = (t) => ve(xp(t)), _i = (t) => yi(void 0, Bp)(t), Cp = (t) => wt(Nt(t, Pe(), (e, n) => n._tag === Bt ? O(f(e, ge(n.error))) : k())), Rp = (t) => wt(Nt(t, Pe(), (e, n) => n._tag === kn ? O(f(e, ge(n.defect))) : k())), Np = (t) => Nt(t, tt(), (e, n) => n._tag === Ut ? O(f(e, sn(n.fiberId))) : k()), Ap = (t) => wa(t, (e) => e._tag === Bt ? O(e.error) : k()), Pp = (t) => {
  const e = Ap(t);
  switch (e._tag) {
    case "None":
      return Fe(t);
    case "Some":
      return bt(e.value);
  }
}, xp = (t) => wa(t, (e) => e._tag === Ut ? O(e.fiberId) : k()), go = (t) => Ia(t, { onEmpty: Rt, onFail: () => Rt, onDie: Ae, onInterrupt: qe, onSequential: ae, onParallel: Cr }), Lp = (t) => Ia(t, { onEmpty: Rt, onFail: Ae, onDie: Ae, onInterrupt: qe, onSequential: ae, onParallel: Cr }), jp = (t, e) => {
  let n = ne(t), r = ne(e);
  for (; It(n) && It(r); ) {
    const [s, i] = f(Et(n), Nt([tt(), Pe()], ([a, l], d) => {
      const [h, p] = ks(d);
      return O([f(a, ln(h)), f(l, he(p))]);
    })), [o, c] = f(Et(r), Nt([tt(), Pe()], ([a, l], d) => {
      const [h, p] = ks(d);
      return O([f(a, ln(h)), f(l, he(p))]);
    }));
    if (!v(s, o)) return false;
    n = i, r = c;
  }
  return true;
}, qp = (t) => Dp(ne(t), Pe()), Dp = (t, e) => {
  for (; ; ) {
    const [n, r] = f(t, Sc([tt(), Pe()], ([i, o], c) => {
      const [a, l] = ks(c);
      return [f(i, ln(a)), f(o, he(l))];
    })), s = Wc(n) > 0 ? f(e, ge(n)) : e;
    if (Lf(r)) return wt(s);
    t = r, e = s;
  }
  throw new Error(Js("Cause.flattenCauseLoop"));
}, wa = u(2, (t, e) => {
  const n = [t];
  for (; n.length > 0; ) {
    const r = n.pop(), s = e(r);
    switch (s._tag) {
      case "None": {
        switch (r._tag) {
          case Ct:
          case Ft: {
            n.push(r.right), n.push(r.left);
            break;
          }
        }
        break;
      }
      case "Some":
        return s;
    }
  }
  return k();
}), ks = (t) => {
  let e = t;
  const n = [];
  let r = tt(), s = Pe();
  for (; e !== void 0; ) switch (e._tag) {
    case rt: {
      if (n.length === 0) return [r, s];
      e = n.pop();
      break;
    }
    case Bt: {
      if (r = sn(r, zr(e._tag, e.error)), n.length === 0) return [r, s];
      e = n.pop();
      break;
    }
    case kn: {
      if (r = sn(r, zr(e._tag, e.defect)), n.length === 0) return [r, s];
      e = n.pop();
      break;
    }
    case Ut: {
      if (r = sn(r, zr(e._tag, e.fiberId)), n.length === 0) return [r, s];
      e = n.pop();
      break;
    }
    case Ct: {
      switch (e.left._tag) {
        case rt: {
          e = e.right;
          break;
        }
        case Ct: {
          e = ae(e.left.left, ae(e.left.right, e.right));
          break;
        }
        case Ft: {
          e = Cr(ae(e.left.left, e.right), ae(e.left.right, e.right));
          break;
        }
        default: {
          s = ge(s, e.right), e = e.left;
          break;
        }
      }
      break;
    }
    case Ft: {
      n.push(e.right), e = e.left;
      break;
    }
  }
  throw new Error(Js("Cause.evaluateCauseLoop"));
}, Bp = { emptyCase: Qi, failCase: ss, dieCase: ss, interruptCase: Qi, sequentialCase: (t, e, n) => e && n, parallelCase: (t, e, n) => e && n }, mo = "SequentialCase", _o = "ParallelCase", Ia = u(2, (t, { onDie: e, onEmpty: n, onFail: r, onInterrupt: s, onParallel: i, onSequential: o }) => yi(t, void 0, { emptyCase: () => n, failCase: (c, a) => r(a), dieCase: (c, a) => e(a), interruptCase: (c, a) => s(a), sequentialCase: (c, a, l) => o(a, l), parallelCase: (c, a, l) => i(a, l) })), Nt = u(3, (t, e, n) => {
  let r = e, s = t;
  const i = [];
  for (; s !== void 0; ) {
    const o = n(r, s);
    switch (r = ve(o) ? o.value : r, s._tag) {
      case Ct: {
        i.push(s.right), s = s.left;
        break;
      }
      case Ft: {
        i.push(s.right), s = s.left;
        break;
      }
      default: {
        s = void 0;
        break;
      }
    }
    s === void 0 && i.length > 0 && (s = i.pop());
  }
  return r;
}), yi = u(3, (t, e, n) => {
  const r = [t], s = [];
  for (; r.length > 0; ) {
    const o = r.pop();
    switch (o._tag) {
      case rt: {
        s.push(Fe(n.emptyCase(e)));
        break;
      }
      case Bt: {
        s.push(Fe(n.failCase(e, o.error)));
        break;
      }
      case kn: {
        s.push(Fe(n.dieCase(e, o.defect)));
        break;
      }
      case Ut: {
        s.push(Fe(n.interruptCase(e, o.fiberId)));
        break;
      }
      case Ct: {
        r.push(o.right), r.push(o.left), s.push(bt({ _tag: mo }));
        break;
      }
      case Ft: {
        r.push(o.right), r.push(o.left), s.push(bt({ _tag: _o }));
        break;
      }
    }
  }
  const i = [];
  for (; s.length > 0; ) {
    const o = s.pop();
    switch (o._tag) {
      case "Left": {
        switch (o.left._tag) {
          case mo: {
            const c = i.pop(), a = i.pop(), l = n.sequentialCase(e, c, a);
            i.push(l);
            break;
          }
          case _o: {
            const c = i.pop(), a = i.pop(), l = n.parallelCase(e, c, a);
            i.push(l);
            break;
          }
        }
        break;
      }
      case "Right": {
        i.push(o.right);
        break;
      }
    }
  }
  if (i.length === 0) throw new Error("BUG: Cause.reduceWithContext - please report an issue at https://github.com/Effect-TS/effect/issues");
  return i.pop();
}), vn = (t, e) => _i(t) ? "All fibers interrupted without errors." : Oa(t).map(function(n) {
  return (e == null ? void 0 : e.renderErrorCause) !== true || n.cause === void 0 ? n.stack : `${n.stack} {
${Ea(n.cause, "  ")}
}`;
}).join(`
`), Ea = (t, e) => {
  const n = t.stack.split(`
`);
  let r = `${e}[cause]: ${n[0]}`;
  for (let s = 1, i = n.length; s < i; s++) r += `
${e}${n[s]}`;
  return t.cause && (r += ` {
${Ea(t.cause, `${e}  `)}
${e}}`), r;
};
class ar extends globalThis.Error {
  constructor(e) {
    const n = typeof e == "object" && e !== null, r = Error.stackTraceLimit;
    Error.stackTraceLimit = 1;
    super(Up(e), n && "cause" in e && typeof e.cause < "u" ? { cause: new ar(e.cause) } : void 0);
    __publicField(this, "span");
    this.message === "" && (this.message = "An error has occurred"), Error.stackTraceLimit = r, this.name = e instanceof Error ? e.name : "Error", n && (At in e && (this.span = e[At]), Object.keys(e).forEach((s) => {
      s in this || (this[s] = e[s]);
    })), this.stack = Hp(`${this.name}: ${this.message}`, e instanceof Error && e.stack ? e.stack : "", this.span);
  }
}
const Up = (t) => {
  if (typeof t == "string") return t;
  if (typeof t == "object" && t !== null && t instanceof Error) return t.message;
  try {
    if (T(t, "toString") && pl(t.toString) && t.toString !== Object.prototype.toString && t.toString !== globalThis.Array.prototype.toString) return t.toString();
  } catch {
  }
  return gl(t);
}, Vp = /\((.*)\)/g, Kp = M("effect/Tracer/spanToTrace", () => /* @__PURE__ */ new WeakMap()), Hp = (t, e, n) => {
  const r = [t], s = e.startsWith(t) ? e.slice(t.length).split(`
`) : e.split(`
`);
  for (let i = 1; i < s.length; i++) {
    if (s[i].includes(" at new BaseEffectError") || s[i].includes(" at new YieldableError")) {
      i++;
      continue;
    }
    if (s[i].includes("Generator.next") || s[i].includes("effect_internal_function")) break;
    r.push(s[i].replace(/at .*effect_instruction_i.*\((.*)\)/, "at $1").replace(/EffectPrimitive\.\w+/, "<anonymous>"));
  }
  if (n) {
    let i = n, o = 0;
    for (; i && i._tag === "Span" && o < 10; ) {
      const c = Kp.get(i);
      if (typeof c == "function") {
        const a = c();
        if (typeof a == "string") {
          const l = a.matchAll(Vp);
          let d = false;
          for (const [, h] of l) d = true, r.push(`    at ${i.name} (${h})`);
          d || r.push(`    at ${i.name} (${a.replace(/^at /, "")})`);
        } else r.push(`    at ${i.name}`);
      } else r.push(`    at ${i.name}`);
      i = He(i.parent), o++;
    }
  }
  return r.join(`
`);
}, At = Symbol.for("effect/SpanAnnotation"), Oa = (t) => yi(t, void 0, { emptyCase: () => [], dieCase: (e, n) => [new ar(n)], failCase: (e, n) => [new ar(n)], interruptCase: () => [], parallelCase: (e, n, r) => [...n, ...r], sequentialCase: (e, n, r) => [...n, ...r] }), Rr = "Pending", $a = "Done", Jp = "effect/Deferred", Gp = Symbol.for(Jp), zp = { _E: (t) => t, _A: (t) => t }, Wp = (t) => ({ _tag: Rr, joiners: t }), Yp = (t) => ({ _tag: $a, effect: t });
class wn {
  constructor(e) {
    __publicField(this, "self");
    __publicField(this, "called", false);
    this.self = e;
  }
  next(e) {
    return this.called ? { value: e, done: true } : (this.called = true, { value: this.self, done: false });
  }
  return(e) {
    return { value: e, done: true };
  }
  throw(e) {
    throw e;
  }
  [Symbol.iterator]() {
    return new wn(this.self);
  }
}
const Ta = (t, e) => {
  const n = new V("Blocked");
  return n.effect_instruction_i0 = t, n.effect_instruction_i1 = e, n;
}, Qp = (t) => {
  const e = new V("RunBlocked");
  return e.effect_instruction_i0 = t, e;
}, Pt = Symbol.for("effect/Effect");
class Zp {
  constructor(e, n) {
    __publicField(this, "patch");
    __publicField(this, "op");
    __publicField(this, "_op", Ys);
    this.patch = e, this.op = n;
  }
}
class V {
  constructor(e) {
    __publicField(this, "_op");
    __publicField(this, "effect_instruction_i0");
    __publicField(this, "effect_instruction_i1");
    __publicField(this, "effect_instruction_i2");
    __publicField(this, "trace");
    __publicField(this, _e, yr);
    this._op = e;
  }
  [(_e = Pt, w)](e) {
    return this === e;
  }
  [$]() {
    return U(this, ml(this));
  }
  pipe() {
    return S(this, arguments);
  }
  toJSON() {
    return { _id: "Effect", _op: this._op, effect_instruction_i0: z(this.effect_instruction_i0), effect_instruction_i1: z(this.effect_instruction_i1), effect_instruction_i2: z(this.effect_instruction_i2) };
  }
  toString() {
    return W(this.toJSON());
  }
  [A]() {
    return this.toJSON();
  }
  [Symbol.iterator]() {
    return new wn(new br(this));
  }
}
class Ma {
  constructor(e) {
    __publicField(this, "_op");
    __publicField(this, "effect_instruction_i0");
    __publicField(this, "effect_instruction_i1");
    __publicField(this, "effect_instruction_i2");
    __publicField(this, "trace");
    __publicField(this, _f2, yr);
    this._op = e, this._tag = e;
  }
  [(_f2 = Pt, w)](e) {
    return jr(e) && e._op === "Failure" && v(this.effect_instruction_i0, e.effect_instruction_i0);
  }
  [$]() {
    return f(se(this._tag), E(_(this.effect_instruction_i0)), U(this));
  }
  get cause() {
    return this.effect_instruction_i0;
  }
  pipe() {
    return S(this, arguments);
  }
  toJSON() {
    return { _id: "Exit", _tag: this._op, cause: this.cause.toJSON() };
  }
  toString() {
    return W(this.toJSON());
  }
  [A]() {
    return this.toJSON();
  }
  [Symbol.iterator]() {
    return new wn(new br(this));
  }
}
class Fa {
  constructor(e) {
    __publicField(this, "_op");
    __publicField(this, "effect_instruction_i0");
    __publicField(this, "effect_instruction_i1");
    __publicField(this, "effect_instruction_i2");
    __publicField(this, "trace");
    __publicField(this, _g2, yr);
    this._op = e, this._tag = e;
  }
  [(_g2 = Pt, w)](e) {
    return jr(e) && e._op === "Success" && v(this.effect_instruction_i0, e.effect_instruction_i0);
  }
  [$]() {
    return f(se(this._tag), E(_(this.effect_instruction_i0)), U(this));
  }
  get value() {
    return this.effect_instruction_i0;
  }
  pipe() {
    return S(this, arguments);
  }
  toJSON() {
    return { _id: "Exit", _tag: this._op, value: z(this.value) };
  }
  toString() {
    return W(this.toJSON());
  }
  [A]() {
    return this.toJSON();
  }
  [Symbol.iterator]() {
    return new wn(new br(this));
  }
}
const bi = (t) => T(t, Pt), re = (t) => {
  const e = new V(ic);
  return e.effect_instruction_i0 = t, e;
}, Xp = u(3, (t, e, n) => Ar((r) => b(t, (s) => b(Na(x(() => r(e(s)))), (i) => x(() => n(s, i)).pipe(xt({ onFailure: (o) => {
  switch (i._tag) {
    case ue:
      return me(ae(i.effect_instruction_i0, o));
    case le:
      return me(o);
  }
}, onSuccess: () => i })))))), In = u(2, (t, e) => b(t, () => F(e))), En = (t) => In(t, void 0), Ca = function() {
  const t = new V(Gs);
  switch (arguments.length) {
    case 2: {
      t.effect_instruction_i0 = arguments[0], t.commit = arguments[1];
      break;
    }
    case 3: {
      t.effect_instruction_i0 = arguments[0], t.effect_instruction_i1 = arguments[1], t.commit = arguments[2];
      break;
    }
    case 4: {
      t.effect_instruction_i0 = arguments[0], t.effect_instruction_i1 = arguments[1], t.effect_instruction_i2 = arguments[2], t.commit = arguments[3];
      break;
    }
    default:
      throw new Error(Js("you're not supposed to end up here"));
  }
  return t;
}, ur = (t, e = Tt) => {
  const n = new V(nn);
  let r;
  return n.effect_instruction_i0 = (s) => {
    r = t(s);
  }, n.effect_instruction_i1 = e, ja(n, (s) => bi(r) ? r : we);
}, eg = (t, e = Tt) => x(() => ur(t, e)), st = (t, e = Tt) => Ca(t, function() {
  let n, r;
  function s(a) {
    n ? n(a) : r === void 0 && (r = a);
  }
  const i = new V(nn);
  i.effect_instruction_i0 = (a) => {
    n = a, r && a(r);
  }, i.effect_instruction_i1 = e;
  let o, c;
  return this.effect_instruction_i0.length !== 1 ? (c = new AbortController(), o = G(() => this.effect_instruction_i0(s, c.signal))) : o = G(() => this.effect_instruction_i0(s)), o || c ? ja(i, (a) => (c && c.abort(), o ?? we)) : i;
}), yo = u(2, (t, e) => ki(t, { onFailure: e, onSuccess: F })), bo = Symbol.for("effect/OriginalAnnotation"), Ra = (t, e) => ve(e) ? new Proxy(t, { has(n, r) {
  return r === At || r === bo || r in n;
}, get(n, r) {
  return r === At ? e.value : r === bo ? t : n[r];
} }) : t, So = (t) => Ws(t) && !(At in t) ? re((e) => me(Ae(Ra(t, Xa(e))))) : me(Ae(t)), tg = (t) => ng(() => Ae(new Pg(t))), vs = (t) => ki(t, { onFailure: (e) => F(bt(e)), onSuccess: (e) => F(Fe(e)) }), Na = (t) => ig(t, { onFailure: C, onSuccess: L }), J = (t) => Ws(t) && !(At in t) ? re((e) => me(cr(Ra(t, Xa(e))))) : me(cr(t)), Si = (t) => b(y(t), J), me = (t) => {
  const e = new Ma(ue);
  return e.effect_instruction_i0 = t, e;
}, ng = (t) => b(y(t), me), rg = re((t) => F(t.id())), Aa = (t) => re((e) => t(e.id())), b = u(2, (t, e) => {
  const n = new V(Qn);
  return n.effect_instruction_i0 = t, n.effect_instruction_i1 = e, n;
}), sg = (t) => {
  const e = new V("OnStep");
  return e.effect_instruction_i0 = t, e;
}, Pa = (t) => b(t, j), ig = u(2, (t, e) => xt(t, { onFailure: (n) => F(e.onFailure(n)), onSuccess: (n) => F(e.onSuccess(n)) })), xt = u(2, (t, e) => {
  const n = new V(Xn);
  return n.effect_instruction_i0 = t, n.effect_instruction_i1 = e.onFailure, n.effect_instruction_i2 = e.onSuccess, n;
}), ki = u(2, (t, e) => xt(t, { onFailure: (n) => {
  if (Rp(n).length > 0) return me(Lp(n));
  const s = Cp(n);
  return s.length > 0 ? e.onFailure(Ac(s)) : me(n);
}, onSuccess: e.onSuccess })), De = u(2, (t, e) => x(() => {
  const n = q(t), r = Xs(n.length);
  let s = 0;
  return In(Ii({ while: () => s < n.length, body: () => e(n[s], s), step: (i) => {
    r[s++] = i;
  } }), r);
})), Nr = u(2, (t, e) => x(() => {
  const n = q(t);
  let r = 0;
  return Ii({ while: () => r < n.length, body: () => e(n[r], r), step: () => {
    r++;
  } });
})), xa = (t) => {
  const e = new V(mn);
  return e.effect_instruction_i0 = lp(Dt), e.effect_instruction_i1 = () => t, e;
}, ee = u(2, (t, e) => b(t, (n) => y(() => e(n)))), La = u(2, (t, e) => ki(t, { onFailure: (n) => Si(() => e.onFailure(n)), onSuccess: (n) => y(() => e.onSuccess(n)) })), vi = u(2, (t, e) => xt(t, { onFailure: (n) => {
  const r = Pp(n);
  switch (r._tag) {
    case "Left":
      return Si(() => e(r.left));
    case "Right":
      return me(r.right);
  }
}, onSuccess: F })), wi = u(2, (t, e) => Ar((n) => xt(n(t), { onFailure: (r) => {
  const s = C(r);
  return xt(e(s), { onFailure: (i) => C(ae(r, i)), onSuccess: () => s });
}, onSuccess: (r) => {
  const s = L(r);
  return Pr(e(s), s);
} }))), ja = u(2, (t, e) => wi(t, Ya({ onFailure: (n) => _i(n) ? En(e(Np(n))) : we, onSuccess: () => we }))), F = (t) => {
  const e = new Fa(le);
  return e.effect_instruction_i0 = t, e;
}, x = (t) => {
  const e = new V(Gs);
  return e.commit = t, e;
}, y = (t) => {
  const e = new V(oc);
  return e.effect_instruction_i0 = t, e;
}, og = u((t) => t.length === 3 || t.length === 2 && !(Ws(t[1]) && "onlyEffect" in t[1]), (t, e) => b(t, (n) => {
  const r = typeof e == "function" ? e(n) : e;
  return bi(r) ? In(r, n) : yl(r) ? ur((s) => {
    r.then((i) => s(F(n)), (i) => s(J(new Mi(i, "An unknown error occurred in Effect.tap"))));
  }) : F(n);
})), cg = (t) => re((e) => {
  const n = e.getFiberRef(Is), r = f(n, _t(() => e.scope()));
  return t(xr(Is, O(r)));
}), qa = (t) => {
  const e = new V(mn);
  return e.effect_instruction_i0 = _a(Dt), e.effect_instruction_i1 = () => t, e;
}, Ar = (t) => Ca(t, function() {
  const e = new V(mn);
  return e.effect_instruction_i0 = _a(Dt), e.effect_instruction_i1 = (n) => ga(n) ? G(() => this.effect_instruction_i0(xa)) : G(() => this.effect_instruction_i0(qa)), e;
}), we = F(void 0), ag = (t) => {
  const e = new V(mn);
  return e.effect_instruction_i0 = t, e.effect_instruction_i1 = void 0, e;
}, Ii = (t) => {
  const e = new V(Zn);
  return e.effect_instruction_i0 = t.while, e.effect_instruction_i1 = t.body, e.effect_instruction_i2 = t.step, e;
}, ug = (t) => x(() => {
  const e = new V(tn);
  return e.effect_instruction_i0 = t(), e;
}), lg = function() {
  const t = arguments.length === 1 ? arguments[0] : arguments[1].bind(arguments[0]);
  return ug(() => t(f));
}, Ei = (t) => {
  const e = new V(Un);
  return typeof (t == null ? void 0 : t.priority) < "u" ? Tg(e, t.priority) : e;
}, Da = u(2, (t, e) => b(t, (n) => ee(e, (r) => [n, r]))), Ba = u(2, (t, e) => b(t, (n) => In(e, n))), Pr = u(2, (t, e) => b(t, () => e)), fg = (t) => b(rg, (e) => f(t, Ua(e))), Ua = u(2, (t, e) => b(t.interruptAsFork(e), () => t.await)), hg = { _tag: "All", syslog: 0, label: "ALL", ordinal: Number.MIN_SAFE_INTEGER, pipe() {
  return S(this, arguments);
} }, dg = { _tag: "Fatal", syslog: 2, label: "FATAL", ordinal: 5e4, pipe() {
  return S(this, arguments);
} }, pg = { _tag: "Error", syslog: 3, label: "ERROR", ordinal: 4e4, pipe() {
  return S(this, arguments);
} }, Va = { _tag: "Warning", syslog: 4, label: "WARN", ordinal: 3e4, pipe() {
  return S(this, arguments);
} }, Ka = { _tag: "Info", syslog: 6, label: "INFO", ordinal: 2e4, pipe() {
  return S(this, arguments);
} }, Ha = { _tag: "Debug", syslog: 7, label: "DEBUG", ordinal: 1e4, pipe() {
  return S(this, arguments);
} }, gg = { _tag: "Trace", syslog: 7, label: "TRACE", ordinal: 0, pipe() {
  return S(this, arguments);
} }, mg = { _tag: "None", syslog: 7, label: "OFF", ordinal: Number.MAX_SAFE_INTEGER, pipe() {
  return S(this, arguments);
} }, _g = "effect/FiberRef", yg = Symbol.for(_g), bg = { _A: (t) => t }, Oi = (t) => re((e) => L(e.getFiberRef(t))), $i = u(2, (t, e) => b(Oi(t), e)), ko = u(2, (t, e) => Sg(t, () => [void 0, e])), Sg = u(2, (t, e) => re((n) => {
  const [r, s] = e(n.getFiberRef(t));
  return n.setFiberRef(t, s), F(r);
})), xr = u(3, (t, e, n) => Xp(Ba(Oi(e), ko(e, n)), () => t, (r) => ko(e, r))), Z = (t, e) => Kt(t, { differ: fa(), fork: (e == null ? void 0 : e.fork) ?? j, join: e == null ? void 0 : e.join }), kg = (t) => {
  const e = Wd();
  return Kt(t, { differ: e, fork: e.empty });
}, vg = (t) => {
  const e = Yd(fa());
  return Kt(t, { differ: e, fork: e.empty });
}, Ja = (t) => {
  const e = zd();
  return Kt(t, { differ: e, fork: e.empty });
}, Kt = (t, e) => ({ ...zs, [yg]: bg, initial: t, commit() {
  return Oi(this);
}, diff: (r, s) => e.differ.diff(r, s), combine: (r, s) => e.differ.combine(r, s), patch: (r) => (s) => e.differ.patch(r, s), fork: e.fork, join: e.join ?? ((r, s) => s) }), wg = (t) => Kt(t, { differ: ho, fork: ho.empty }), On = M(Symbol.for("effect/FiberRef/currentContext"), () => Ja(ni())), Ti = M(Symbol.for("effect/FiberRef/currentSchedulingPriority"), () => Z(0)), Ig = M(Symbol.for("effect/FiberRef/currentMaxOpsBeforeYield"), () => Z(2048)), Eg = M(Symbol.for("effect/FiberRef/currentLogAnnotation"), () => Z(pi())), Og = M(Symbol.for("effect/FiberRef/currentLogLevel"), () => Z(Ka)), $g = M(Symbol.for("effect/FiberRef/currentLogSpan"), () => Z(Mt())), Tg = u(2, (t, e) => xr(t, Ti, e)), Mg = M(Symbol.for("effect/FiberRef/currentConcurrency"), () => Z("unbounded")), Fg = M(Symbol.for("effect/FiberRef/currentRequestBatching"), () => Z(true)), Cg = M(Symbol.for("effect/FiberRef/currentUnhandledErrorLogLevel"), () => Z(O(Ha))), Rg = M(Symbol.for("effect/FiberRef/versionMismatchErrorLogLevel"), () => Z(O(Va))), ws = M(Symbol.for("effect/FiberRef/currentMetricLabels"), () => vg(kt())), Is = M(Symbol.for("effect/FiberRef/currentForkScopeOverride"), () => Z(k(), { fork: () => k(), join: (t, e) => t })), jn = M(Symbol.for("effect/FiberRef/currentInterruptedCause"), () => Z(Rt, { fork: () => Rt, join: (t, e) => t })), Ng = (t, e) => t.addFinalizer(() => En(e)), Ag = (t, e) => t.close(e), Lr = (t, e) => t.fork(e), Ga = (function() {
  class t extends globalThis.Error {
    commit() {
      return J(this);
    }
    toJSON() {
      const n = { ...this };
      return this.message && (n.message = this.message), this.cause && (n.cause = this.cause), n;
    }
    [A]() {
      return this.toString !== globalThis.Error.prototype.toString ? this.stack ? `${this.toString()}
${this.stack.split(`
`).slice(1).join(`
`)}` : this.toString() : "Bun" in globalThis ? vn(cr(this), { renderErrorCause: true }) : this;
    }
  }
  return Object.assign(t.prototype, _l), t;
})(), za = (t, e) => {
  class n extends Ga {
    constructor() {
      super(...arguments);
      __publicField(this, "_tag", e);
    }
  }
  return Object.assign(n.prototype, t), n.prototype.name = e, n;
}, vo = Symbol.for("effect/Cause/errors/RuntimeException"), Pg = za({ [vo]: vo }, "RuntimeException"), xg = Symbol.for("effect/Cause/errors/InterruptedException"), Lg = (t) => T(t, xg), wo = Symbol.for("effect/Cause/errors/NoSuchElement"), Wa = za({ [wo]: wo }, "NoSuchElementException"), Io = Symbol.for("effect/Cause/errors/UnknownException"), Mi = (function() {
  class t extends Ga {
    constructor(n, r) {
      super(r ?? "An unknown error occurred", { cause: n });
      __publicField(this, "_tag", "UnknownException");
      __publicField(this, "error");
      this.error = n;
    }
  }
  return Object.assign(t.prototype, { [Io]: Io, name: "UnknownException" }), t;
})(), jr = (t) => bi(t) && "_tag" in t && (t._tag === "Success" || t._tag === "Failure"), Eo = (t, e) => Dg(t, (e == null ? void 0 : e.parallel) ? Cr : ae), Oo = (t) => C(cr(t)), C = (t) => {
  const e = new Ma(ue);
  return e.effect_instruction_i0 = t, e;
}, jg = (t) => C(qe(t)), Zr = u(2, (t, e) => {
  switch (t._tag) {
    case ue:
      return C(t.effect_instruction_i0);
    case le:
      return L(e(t.effect_instruction_i0));
  }
}), Ya = u(2, (t, { onFailure: e, onSuccess: n }) => {
  switch (t._tag) {
    case ue:
      return e(t.effect_instruction_i0);
    case le:
      return n(t.effect_instruction_i0);
  }
}), L = (t) => {
  const e = new Fa(le);
  return e.effect_instruction_i0 = t, e;
}, ze = L(void 0), qg = u(3, (t, e, { onFailure: n, onSuccess: r }) => {
  switch (t._tag) {
    case ue:
      switch (e._tag) {
        case le:
          return C(t.effect_instruction_i0);
        case ue:
          return C(n(t.effect_instruction_i0, e.effect_instruction_i0));
      }
    case le:
      switch (e._tag) {
        case le:
          return L(r(t.effect_instruction_i0, e.effect_instruction_i0));
        case ue:
          return C(e.effect_instruction_i0);
      }
  }
}), Dg = (t, e) => {
  const n = Nc(t);
  return It(n) ? f(Ge(n), Sc(f(Et(n), Zr(ne)), (r, s) => f(r, qg(s, { onSuccess: (i, o) => f(i, ge(o)), onFailure: e }))), Zr(wt), Zr((r) => Qe(r)), O) : k();
}, Bg = (t) => ({ ...zs, [Gp]: zp, state: Qc(Wp([])), commit() {
  return Qa(this);
}, blockingOn: t }), Qa = (t) => eg((e) => {
  const n = Tr(t.state);
  switch (n._tag) {
    case $a:
      return e(n.effect);
    case Rr:
      return n.joiners.push(e), Ug(t, e);
  }
}, t.blockingOn), Za = (t, e) => {
  const n = Tr(t.state);
  if (n._tag === Rr) {
    Zc(t.state, Yp(e));
    for (let r = 0, s = n.joiners.length; r < s; r++) n.joiners[r](e);
  }
}, Ug = (t, e) => y(() => {
  const n = Tr(t.state);
  if (n._tag === Rr) {
    const r = n.joiners.indexOf(e);
    r >= 0 && n.joiners.splice(r, 1);
  }
}), Vg = re((t) => L(t.currentContext)), Kg = () => Vg, $n = (t) => b(Kg(), t), Hg = u(2, (t, e) => xr(On, e)(t)), Jg = u(2, (t, e) => $n((n) => Hg(t, e(n)))), Xa = (t) => {
  const e = t.currentSpan;
  return e !== void 0 && e._tag === "Span" ? O(e) : k();
}, $o = Symbol.for("effect/MutableHashMap"), Gg = { [$o]: $o, [Symbol.iterator]() {
  return new Fi(this);
}, toString() {
  return W(this.toJSON());
}, toJSON() {
  return { _id: "MutableHashMap", values: Array.from(this).map(z) };
}, [A]() {
  return this.toJSON();
}, pipe() {
  return S(this, arguments);
} };
class Fi {
  constructor(e) {
    __publicField(this, "self");
    __publicField(this, "referentialIterator");
    __publicField(this, "bucketIterator");
    this.self = e, this.referentialIterator = e.referential[Symbol.iterator]();
  }
  next() {
    if (this.bucketIterator !== void 0) return this.bucketIterator.next();
    const e = this.referentialIterator.next();
    return e.done ? (this.bucketIterator = new zg(this.self.buckets.values()), this.next()) : e;
  }
  [Symbol.iterator]() {
    return new Fi(this.self);
  }
}
class zg {
  constructor(e) {
    __publicField(this, "backing");
    __publicField(this, "currentBucket");
    this.backing = e;
  }
  next() {
    if (this.currentBucket === void 0) {
      const n = this.backing.next();
      if (n.done) return n;
      this.currentBucket = n.value[Symbol.iterator]();
    }
    const e = this.currentBucket.next();
    return e.done ? (this.currentBucket = void 0, this.next()) : e;
  }
}
const Wg = () => {
  const t = Object.create(Gg);
  return t.referential = /* @__PURE__ */ new Map(), t.buckets = /* @__PURE__ */ new Map(), t.bucketsSize = 0, t;
}, Je = u(2, (t, e) => {
  if (cc(e) === false) return t.referential.has(e) ? O(t.referential.get(e)) : k();
  const n = e[$](), r = t.buckets.get(n);
  return r === void 0 ? k() : Yg(t, r, e);
}), Yg = (t, e, n, r = false) => {
  for (let s = 0, i = e.length; s < i; s++) if (n[w](e[s][0])) {
    const o = e[s][1];
    return r && (e.splice(s, 1), t.bucketsSize--), O(o);
  }
  return k();
}, Yt = u(2, (t, e) => ve(Je(t, e))), Qt = u(3, (t, e, n) => {
  if (cc(e) === false) return t.referential.set(e, n), t;
  const r = e[$](), s = t.buckets.get(r);
  return s === void 0 ? (t.buckets.set(r, [[e, n]]), t.bucketsSize++, t) : (Qg(t, s, e), s.push([e, n]), t.bucketsSize++, t);
}), Qg = (t, e, n) => {
  for (let r = 0, s = e.length; r < s; r++) if (n[w](e[r][0])) {
    e.splice(r, 1), t.bucketsSize--;
    return;
  }
};
function Zg(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var eu = { exports: {} }, P = eu.exports = {}, be, Se;
function Es() {
  throw new Error("setTimeout has not been defined");
}
function Os() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? be = setTimeout : be = Es;
  } catch {
    be = Es;
  }
  try {
    typeof clearTimeout == "function" ? Se = clearTimeout : Se = Os;
  } catch {
    Se = Os;
  }
})();
function tu(t) {
  if (be === setTimeout) return setTimeout(t, 0);
  if ((be === Es || !be) && setTimeout) return be = setTimeout, setTimeout(t, 0);
  try {
    return be(t, 0);
  } catch {
    try {
      return be.call(null, t, 0);
    } catch {
      return be.call(this, t, 0);
    }
  }
}
function Xg(t) {
  if (Se === clearTimeout) return clearTimeout(t);
  if ((Se === Os || !Se) && clearTimeout) return Se = clearTimeout, clearTimeout(t);
  try {
    return Se(t);
  } catch {
    try {
      return Se.call(null, t);
    } catch {
      return Se.call(this, t);
    }
  }
}
var Ce = [], gt = false, We, zn = -1;
function em() {
  !gt || !We || (gt = false, We.length ? Ce = We.concat(Ce) : zn = -1, Ce.length && nu());
}
function nu() {
  if (!gt) {
    var t = tu(em);
    gt = true;
    for (var e = Ce.length; e; ) {
      for (We = Ce, Ce = []; ++zn < e; ) We && We[zn].run();
      zn = -1, e = Ce.length;
    }
    We = null, gt = false, Xg(t);
  }
}
P.nextTick = function(t) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
  Ce.push(new ru(t, e)), Ce.length === 1 && !gt && tu(nu);
};
function ru(t, e) {
  this.fun = t, this.array = e;
}
ru.prototype.run = function() {
  this.fun.apply(null, this.array);
};
P.title = "browser";
P.browser = true;
P.env = {};
P.argv = [];
P.version = "";
P.versions = {};
function Le() {
}
P.on = Le;
P.addListener = Le;
P.once = Le;
P.off = Le;
P.removeListener = Le;
P.removeAllListeners = Le;
P.emit = Le;
P.prependListener = Le;
P.prependOnceListener = Le;
P.listeners = function(t) {
  return [];
};
P.binding = function(t) {
  throw new Error("process.binding is not supported");
};
P.cwd = function() {
  return "/";
};
P.chdir = function(t) {
  throw new Error("process.chdir is not supported");
};
P.umask = function() {
  return 0;
};
var tm = eu.exports;
const pe = Zg(tm), nm = "effect/Clock", To = Symbol.for(nm), Ci = at("effect/Clock"), rm = 2 ** 31 - 1, Mo = { unsafeSchedule(t, e) {
  const n = ls(e);
  if (n > rm) return ss;
  let r = false;
  const s = setTimeout(() => {
    r = true, t();
  }, n);
  return () => (clearTimeout(s), !r);
} }, Fo = (function() {
  const t = BigInt(1e6);
  if (typeof performance > "u" || typeof performance.now != "function") return () => BigInt(Date.now()) * t;
  let e;
  return () => (e === void 0 && (e = BigInt(Date.now()) * t - BigInt(Math.round(performance.now() * 1e6))), e + BigInt(Math.round(performance.now() * 1e6)));
})(), sm = (function() {
  const t = typeof pe == "object" && "hrtime" in pe && typeof pe.hrtime.bigint == "function" ? pe.hrtime : void 0;
  if (!t) return Fo;
  const e = Fo() - t.bigint();
  return () => e + t.bigint();
})();
_h2 = To;
class im {
  constructor() {
    __publicField(this, _h2, To);
    __publicField(this, "currentTimeMillis", y(() => this.unsafeCurrentTimeMillis()));
    __publicField(this, "currentTimeNanos", y(() => this.unsafeCurrentTimeNanos()));
  }
  unsafeCurrentTimeMillis() {
    return Date.now();
  }
  unsafeCurrentTimeNanos() {
    return sm();
  }
  scheduler() {
    return F(Mo);
  }
  sleep(e) {
    return st((n) => {
      const r = Mo.unsafeSchedule(() => n(we), e);
      return En(y(r));
    });
  }
}
const om = () => new im(), su = "And", iu = "Or", ou = "InvalidData", cu = "MissingData", au = "SourceUnavailable", uu = "Unsupported", cm = "effect/ConfigError", Co = Symbol.for(cm), Ht = { _tag: "ConfigError", [Co]: Co }, lu = (t, e) => {
  const n = Object.create(Ht);
  return n._op = su, n.left = t, n.right = e, Object.defineProperty(n, "toString", { enumerable: false, value() {
    return `${this.left} and ${this.right}`;
  } }), Object.defineProperty(n, "message", { enumerable: false, get() {
    return this.toString();
  } }), n;
}, fu = (t, e) => {
  const n = Object.create(Ht);
  return n._op = iu, n.left = t, n.right = e, Object.defineProperty(n, "toString", { enumerable: false, value() {
    return `${this.left} or ${this.right}`;
  } }), Object.defineProperty(n, "message", { enumerable: false, get() {
    return this.toString();
  } }), n;
}, am = (t, e, n = { pathDelim: "." }) => {
  const r = Object.create(Ht);
  return r._op = ou, r.path = t, r.message = e, Object.defineProperty(r, "toString", { enumerable: false, value() {
    return `(Invalid data at ${f(this.path, jt(n.pathDelim))}: "${this.message}")`;
  } }), r;
}, it = (t, e, n = { pathDelim: "." }) => {
  const r = Object.create(Ht);
  return r._op = cu, r.path = t, r.message = e, Object.defineProperty(r, "toString", { enumerable: false, value() {
    return `(Missing data at ${f(this.path, jt(n.pathDelim))}: "${this.message}")`;
  } }), r;
}, um = (t, e, n, r = { pathDelim: "." }) => {
  const s = Object.create(Ht);
  return s._op = au, s.path = t, s.message = e, s.cause = n, Object.defineProperty(s, "toString", { enumerable: false, value() {
    return `(Source unavailable at ${f(this.path, jt(r.pathDelim))}: "${this.message}")`;
  } }), s;
}, lm = (t, e, n = { pathDelim: "." }) => {
  const r = Object.create(Ht);
  return r._op = uu, r.path = t, r.message = e, Object.defineProperty(r, "toString", { enumerable: false, value() {
    return `(Unsupported operation at ${f(this.path, jt(n.pathDelim))}: "${this.message}")`;
  } }), r;
}, Ye = u(2, (t, e) => {
  switch (t._op) {
    case su:
      return lu(Ye(t.left, e), Ye(t.right, e));
    case iu:
      return fu(Ye(t.left, e), Ye(t.right, e));
    case ou:
      return am([...e, ...t.path], t.message);
    case cu:
      return it([...e, ...t.path], t.message);
    case au:
      return um([...e, ...t.path], t.message, t.cause);
    case uu:
      return lm([...e, ...t.path], t.message);
  }
}), fm = { _tag: "Empty" }, Xr = u(2, (t, e) => {
  let n = gi(e), r = t;
  for (; nd(n); ) {
    const s = n.head;
    switch (s._tag) {
      case "Empty": {
        n = n.tail;
        break;
      }
      case "AndThen": {
        n = nt(s.first, nt(s.second, n.tail));
        break;
      }
      case "MapName": {
        r = ht(r, s.f), n = n.tail;
        break;
      }
      case "Nested": {
        r = er(r, s.name), n = n.tail;
        break;
      }
      case "Unnested": {
        if (f(rn(r), bl(s.name))) r = St(r), n = n.tail;
        else return bt(it(r, `Expected ${s.name} to be in path in ConfigProvider#unnested`));
        break;
      }
    }
  }
  return Fe(r);
}), hm = "Constant", dm = "Fail", pm = "Fallback", gm = "Described", mm = "Lazy", _m = "MapOrFail", ym = "Nested", bm = "Primitive", Sm = "Sequence", km = "HashMap", vm = "ZipWith";
var Ro = {};
const lr = (t, e) => [...t, ...e], wm = "effect/ConfigProvider", No = Symbol.for(wm), Im = at("effect/ConfigProvider"), Em = "effect/ConfigProviderFlat", Ao = Symbol.for(Em), Om = (t) => ({ [No]: No, pipe() {
  return S(this, arguments);
}, ...t }), $m = (t) => ({ [Ao]: Ao, patch: t.patch, load: (e, n, r = true) => t.load(e, n, r), enumerateChildren: t.enumerateChildren }), Tm = (t) => Om({ load: (e) => b(ce(t, kt(), e, false), (n) => ct(rn(n), { onNone: () => J(it(kt(), `Expected a single value having structure: ${e}`)), onSome: F })), flattened: t }), Mm = (t) => {
  const { pathDelim: e, seqDelim: n } = Object.assign({}, { pathDelim: "_", seqDelim: "," }, t), r = (a) => f(a, jt(e)), s = (a) => a.split(e), i = () => typeof pe < "u" && "env" in pe && typeof Ro == "object" ? Ro : {};
  return Tm($m({ load: (a, l, d = true) => {
    const h = r(a), p = i(), g = h in p ? O(p[h]) : k();
    return f(g, vi(() => it(a, `Expected ${h} to exist in the process context`)), b((m) => Am(m, a, l, n, d)));
  }, enumerateChildren: (a) => y(() => {
    const l = i(), p = Object.keys(l).map((g) => s(g.toUpperCase())).filter((g) => {
      for (let m = 0; m < a.length; m++) {
        const I = f(a, yc(m)), R = g[m];
        if (R === void 0 || I !== R) return false;
      }
      return true;
    }).flatMap((g) => g.slice(a.length, a.length + 1));
    return Lh(p);
  }), patch: fm }));
}, Fm = (t, e, n, r) => {
  const s = eo(n.length, (a) => a >= r.length ? k() : O([t(a), a + 1])), i = eo(r.length, (a) => a >= n.length ? k() : O([e(a), a + 1])), o = lr(n, s), c = lr(r, i);
  return [o, c];
}, Cm = (t, e) => {
  let n = e;
  if (n._tag === "Nested") {
    const r = t.slice();
    for (; n._tag === "Nested"; ) r.push(n.name), n = n.config;
    return r;
  }
  return t;
}, ce = (t, e, n, r) => {
  const s = n;
  switch (s._tag) {
    case hm:
      return F(fe(s.value));
    case gm:
      return x(() => ce(t, e, s.config, r));
    case dm:
      return J(it(e, s.message));
    case pm:
      return f(x(() => ce(t, e, s.first, r)), yo((i) => s.condition(i) ? f(ce(t, e, s.second, r), yo((o) => J(fu(i, o)))) : J(i)));
    case mm:
      return x(() => ce(t, e, s.config(), r));
    case _m:
      return x(() => f(ce(t, e, s.original, r), b(De((i) => f(s.mapOrFail(i), vi(Ye(Cm(e, s.original))))))));
    case ym:
      return x(() => ce(t, lr(e, fe(s.name)), s.config, r));
    case bm:
      return f(Xr(e, t.patch), b((i) => f(t.load(i, s, r), b((o) => {
        if (o.length === 0) {
          const c = f(Yl(i), _t(() => "<n/a>"));
          return J(it([], `Expected ${s.description} with name ${c}`));
        }
        return F(o);
      }))));
    case Sm:
      return f(Xr(e, t.patch), b((i) => f(t.enumerateChildren(i), b(xm), b((o) => o.length === 0 ? x(() => ee(ce(t, e, s.config, true), fe)) : f(De(o, (c) => ce(t, Kl(e, `[${c}]`), s.config, true)), ee((c) => {
        const a = af(c);
        return a.length === 0 ? fe(kt()) : fe(a);
      }))))));
    case km:
      return x(() => f(Xr(e, t.patch), b((i) => f(t.enumerateChildren(i), b((o) => f(o, De((c) => ce(t, lr(i, fe(c)), s.valueConfig, r)), ee((c) => c.length === 0 ? fe(pi()) : f(Pm(c), ht((a) => Gh(Xi(q(o), a)))))))))));
    case vm:
      return x(() => f(ce(t, e, s.left, r), vs, b((i) => f(ce(t, e, s.right, r), vs, b((o) => {
        if (en(i) && en(o)) return J(lu(i.left, o.left));
        if (en(i) && Pn(o)) return J(i.left);
        if (Pn(i) && en(o)) return J(o.left);
        if (Pn(i) && Pn(o)) {
          const c = f(e, jt(".")), a = Rm(e, c), [l, d] = Fm(a, a, f(i.right, ht(Fe)), f(o.right, ht(Fe)));
          return f(l, Xi(d), De(([h, p]) => f(Da(h, p), ee(([g, m]) => s.zip(g, m)))));
        }
        throw new Error("BUG: ConfigProvider.fromFlatLoop - please report an issue at https://github.com/Effect-TS/effect/issues");
      })))));
  }
}, Rm = (t, e) => (n) => bt(it(t, `The element at index ${n} in a sequence at path "${e}" was missing`)), Nm = (t, e) => t.split(new RegExp(`\\s*${lf(e)}\\s*`)), Am = (t, e, n, r, s) => s ? f(Nm(t, r), De((i) => n.parse(i.trim())), vi(Ye(e))) : f(n.parse(t), La({ onFailure: Ye(e), onSuccess: fe })), Pm = (t) => Object.keys(t[0]).map((e) => t.map((n) => n[e])), xm = (t) => f(De(t, jm), La({ onFailure: () => kt(), onSuccess: tr(cn) }), vs, ee(Ll)), Lm = /^(\[(\d+)\])$/, jm = (t) => {
  const e = t.match(Lm);
  if (e !== null) {
    const n = e[2];
    return f(n !== void 0 && n.length > 0 ? O(n) : k(), Sl(qm));
  }
  return k();
}, qm = (t) => {
  const e = Number.parseInt(t);
  return Number.isNaN(e) ? k() : O(e);
}, Po = Symbol.for("effect/Console"), hu = at("effect/Console"), Dm = { [Po]: Po, assert(t, ...e) {
  return y(() => {
    console.assert(t, ...e);
  });
}, clear: y(() => {
  console.clear();
}), count(t) {
  return y(() => {
    console.count(t);
  });
}, countReset(t) {
  return y(() => {
    console.countReset(t);
  });
}, debug(...t) {
  return y(() => {
    console.debug(...t);
  });
}, dir(t, e) {
  return y(() => {
    console.dir(t, e);
  });
}, dirxml(...t) {
  return y(() => {
    console.dirxml(...t);
  });
}, error(...t) {
  return y(() => {
    console.error(...t);
  });
}, group(t) {
  return (t == null ? void 0 : t.collapsed) ? y(() => console.groupCollapsed(t == null ? void 0 : t.label)) : y(() => console.group(t == null ? void 0 : t.label));
}, groupEnd: y(() => {
  console.groupEnd();
}), info(...t) {
  return y(() => {
    console.info(...t);
  });
}, log(...t) {
  return y(() => {
    console.log(...t);
  });
}, table(t, e) {
  return y(() => {
    console.table(t, e);
  });
}, time(t) {
  return y(() => console.time(t));
}, timeEnd(t) {
  return y(() => console.timeEnd(t));
}, timeLog(t, ...e) {
  return y(() => {
    console.timeLog(t, ...e);
  });
}, trace(...t) {
  return y(() => {
    console.trace(...t);
  });
}, warn(...t) {
  return y(() => {
    console.warn(...t);
  });
}, unsafe: console }, Bm = "effect/Random", xo = Symbol.for(Bm), Um = at("effect/Random");
_i2 = xo;
class Vm {
  constructor(e) {
    __publicField(this, "seed");
    __publicField(this, _i2, xo);
    __publicField(this, "PRNG");
    this.seed = e, this.PRNG = new kl(e);
  }
  get next() {
    return y(() => this.PRNG.number());
  }
  get nextBoolean() {
    return ee(this.next, (e) => e > 0.5);
  }
  get nextInt() {
    return y(() => this.PRNG.integer(Number.MAX_SAFE_INTEGER));
  }
  nextRange(e, n) {
    return ee(this.next, (r) => (n - e) * r + e);
  }
  nextIntBetween(e, n) {
    return y(() => this.PRNG.integer(n - e) + e);
  }
  shuffle(e) {
    return Km(e, (n) => this.nextIntBetween(0, n));
  }
}
const Km = (t, e) => x(() => f(y(() => Array.from(t)), b((n) => {
  const r = [];
  for (let s = n.length; s >= 2; s = s - 1) r.push(s);
  return f(r, Nr((s) => f(e(s), ee((i) => Hm(n, s - 1, i)))), In(Nc(n)));
}))), Hm = (t, e, n) => {
  const r = t[e];
  return t[e] = t[n], t[n] = r, t;
}, Jm = (t) => new Vm(_(t)), Lo = Symbol.for("effect/Tracer"), Gm = (t) => ({ [Lo]: Lo, ...t }), du = at("effect/Tracer"), pu = at("effect/ParentSpan"), jo = (function() {
  const t = "abcdef0123456789", e = t.length;
  return function(n) {
    let r = "";
    for (let s = 0; s < n; s++) r += t.charAt(Math.floor(Math.random() * e));
    return r;
  };
})();
class zm {
  constructor(e, n, r, s, i, o) {
    __publicField(this, "name");
    __publicField(this, "parent");
    __publicField(this, "context");
    __publicField(this, "startTime");
    __publicField(this, "kind");
    __publicField(this, "_tag", "Span");
    __publicField(this, "spanId");
    __publicField(this, "traceId", "native");
    __publicField(this, "sampled", true);
    __publicField(this, "status");
    __publicField(this, "attributes");
    __publicField(this, "events", []);
    __publicField(this, "links");
    this.name = e, this.parent = n, this.context = r, this.startTime = i, this.kind = o, this.status = { _tag: "Started", startTime: i }, this.attributes = /* @__PURE__ */ new Map(), this.traceId = n._tag === "Some" ? n.value.traceId : jo(32), this.spanId = jo(16), this.links = Array.from(s);
  }
  end(e, n) {
    this.status = { _tag: "Ended", endTime: e, exit: n, startTime: this.status.startTime };
  }
  attribute(e, n) {
    this.attributes.set(e, n);
  }
  event(e, n, r) {
    this.events.push([e, n, r ?? {}]);
  }
  addLinks(e) {
    this.links.push(...e);
  }
}
const Wm = Gm({ span: (t, e, n, r, s, i) => new zm(t, e, n, r, s, i), context: (t) => t() }), Ym = f(ni(), Wt(Ci, om()), Wt(hu, Dm), Wt(Um, Jm(Math.random())), Wt(Im, Mm()), Wt(du, Wm)), fr = M(Symbol.for("effect/DefaultServices/currentServices"), () => Ja(Ym));
function Qm(t) {
  return new Ue(t);
}
function Zm() {
  return Qm(/* @__PURE__ */ new Map());
}
const qo = Symbol.for("effect/FiberRefs");
_j = qo;
class Ue {
  constructor(e) {
    __publicField(this, "locals");
    __publicField(this, _j, qo);
    this.locals = e;
  }
  pipe() {
    return S(this, arguments);
  }
}
const Xm = (t, e, n, r = false) => {
  const s = t;
  let i = e, o = n, c = r, a;
  for (; a === void 0; ) if (te(i) && te(o)) {
    const l = Q(i)[0], d = St(i), h = Q(o)[0], p = Q(o)[1], g = St(o);
    l.startTimeMillis < h.startTimeMillis ? (o = g, c = true) : l.startTimeMillis > h.startTimeMillis ? i = d : l.id < h.id ? (o = g, c = true) : l.id > h.id ? i = d : a = [p, c];
  } else a = [s.initial, true];
  return a;
}, e_ = u(3, (t, e, n) => {
  const r = new Map(t.locals);
  return n.locals.forEach((s, i) => {
    const o = s[0][1];
    if (!s[0][0][w](e)) {
      if (!r.has(i)) {
        if (v(o, i.initial)) return;
        r.set(i, [[e, i.join(i.initial, o)]]);
        return;
      }
      const c = r.get(i), [a, l] = Xm(i, c, s);
      if (l) {
        const d = i.diff(a, o), h = c[0][1], p = i.join(h, i.patch(d)(h));
        if (!v(h, p)) {
          let g;
          const m = c[0][0];
          m[w](e) ? g = [[m, p], ...c.slice(1)] : g = [[e, p], ...c], r.set(i, g);
        }
      }
    }
  }), new Ue(r);
}), t_ = u(2, (t, e) => {
  const n = /* @__PURE__ */ new Map();
  return gu(t, n, e), new Ue(n);
}), gu = (t, e, n) => {
  t.locals.forEach((r, s) => {
    const i = r[0][1], o = s.patch(s.fork)(i);
    v(i, o) ? e.set(s, r) : e.set(s, [[n, o], ...r]);
  });
}, mu = u(2, (t, e) => {
  const n = new Map(t.locals);
  return n.delete(e), new Ue(n);
}), n_ = u(2, (t, e) => t.locals.has(e) ? O(Q(t.locals.get(e))[1]) : k()), pn = u(2, (t, e) => f(n_(t, e), _t(() => e.initial))), $s = u(2, (t, { fiberId: e, fiberRef: n, value: r }) => {
  if (t.locals.size === 0) return new Ue(/* @__PURE__ */ new Map([[n, [[e, r]]]]));
  const s = new Map(t.locals);
  return Ts(s, e, n, r), new Ue(s);
}), Ts = (t, e, n, r) => {
  const s = t.get(n) ?? [];
  let i;
  if (te(s)) {
    const [o, c] = Q(s);
    if (o[w](e)) {
      if (v(c, r)) return;
      i = [[e, r], ...s.slice(1)];
    } else i = [[e, r], ...s];
  } else i = [[e, r]];
  t.set(n, i);
}, r_ = u(2, (t, { entries: e, forkAs: n }) => {
  if (t.locals.size === 0) return new Ue(new Map(e));
  const r = new Map(t.locals);
  return n !== void 0 && gu(t, r, n), e.forEach(([s, i]) => {
    i.length === 1 ? Ts(r, i[0][0], s, i[0][1]) : i.forEach(([o, c]) => {
      Ts(r, o, s, c);
    });
  }), new Ue(r);
}), s_ = pn, i_ = r_, o_ = Zm, c_ = hg, a_ = dg, u_ = pg, l_ = Va, f_ = Ka, h_ = Ha, d_ = gg, p_ = mg, g_ = f(cn, ql((t) => t.ordinal)), m_ = Dl(g_), __ = (t) => {
  switch (t) {
    case "All":
      return c_;
    case "Debug":
      return h_;
    case "Error":
      return u_;
    case "Fatal":
      return a_;
    case "Info":
      return f_;
    case "Trace":
      return d_;
    case "None":
      return p_;
    case "Warning":
      return l_;
  }
}, _u = (t) => t.replace(/[\s="]/g, "_"), y_ = (t) => (e) => `${_u(e.label)}=${t - e.startTime}ms`, b_ = Ks, S_ = vl;
class k_ extends S_ {
}
const yu = "Empty", bu = "Add", Su = "Remove", ku = "Update", vu = "AndThen", v_ = { _tag: yu }, w_ = (t, e) => {
  const n = new Map(t.locals);
  let r = v_;
  for (const [s, i] of e.locals.entries()) {
    const o = Q(i)[1], c = n.get(s);
    if (c !== void 0) {
      const a = Q(c)[1];
      v(a, o) || (r = es({ _tag: ku, fiberRef: s, patch: s.diff(a, o) })(r));
    } else r = es({ _tag: bu, fiberRef: s, value: o })(r);
    n.delete(s);
  }
  for (const [s] of n.entries()) r = es({ _tag: Su, fiberRef: s })(r);
  return r;
}, es = u(2, (t, e) => ({ _tag: vu, first: t, second: e })), I_ = u(3, (t, e, n) => {
  let r = n, s = fe(t);
  for (; te(s); ) {
    const i = Q(s), o = St(s);
    switch (i._tag) {
      case yu: {
        s = o;
        break;
      }
      case bu: {
        r = $s(r, { fiberId: e, fiberRef: i.fiberRef, value: i.value }), s = o;
        break;
      }
      case Su: {
        r = mu(r, i.fiberRef), s = o;
        break;
      }
      case ku: {
        const c = pn(r, i.fiberRef);
        r = $s(r, { fiberId: e, fiberRef: i.fiberRef, value: i.fiberRef.patch(i.patch)(c) }), s = o;
        break;
      }
      case vu: {
        s = er(i.first)(er(i.second)(o));
        break;
      }
    }
  }
  return r;
}), wu = "effect/MetricLabel", Ms = Symbol.for(wu);
class E_ {
  constructor(e, n) {
    __publicField(this, "key");
    __publicField(this, "value");
    __publicField(this, _k, Ms);
    __publicField(this, "_hash");
    this.key = e, this.value = n, this._hash = se(wu + this.key + this.value);
  }
  [(_k = Ms, $)]() {
    return this._hash;
  }
  [w](e) {
    return $_(e) && this.key === e.key && this.value === e.value;
  }
  pipe() {
    return S(this, arguments);
  }
}
const O_ = (t, e) => new E_(t, e), $_ = (t) => T(t, Ms), T_ = (t) => {
  let e, n;
  return typeof t == "function" ? e = t : (e = t.try, n = t.catch), x(() => {
    try {
      return F(G(e));
    } catch (r) {
      return J(n ? G(() => n(r)) : new Mi(r, "An unknown error occurred in Effect.try"));
    }
  });
}, M_ = (t) => {
  let e, n;
  typeof t == "function" ? e = t : (e = t.try, n = t.catch);
  const r = (s) => n ? Si(() => n(s)) : J(new Mi(s, "An unknown error occurred in Effect.tryPromise"));
  return e.length >= 1 ? st((s, i) => {
    try {
      e(i).then((o) => s(F(o)), (o) => s(r(o)));
    } catch (o) {
      s(r(o));
    }
  }) : st((s) => {
    try {
      e().then((i) => s(F(i)), (i) => s(r(i)));
    } catch (i) {
      s(r(i));
    }
  });
}, F_ = "Sequential", C_ = "Parallel", R_ = "ParallelN", Iu = { _tag: F_ }, N_ = { _tag: C_ }, A_ = (t) => ({ _tag: R_, parallelism: t }), Fs = Iu, Cs = N_, Rs = A_, P_ = w_, x_ = I_, qr = "effect/FiberStatus", ot = Symbol.for(qr), hr = "Done", Do = "Running", Bo = "Suspended", L_ = se(`${qr}-${hr}`);
class j_ {
  constructor() {
    __publicField(this, _l2, ot);
    __publicField(this, "_tag", hr);
  }
  [(_l2 = ot, $)]() {
    return L_;
  }
  [w](e) {
    return Ri(e) && e._tag === hr;
  }
}
class q_ {
  constructor(e) {
    __publicField(this, "runtimeFlags");
    __publicField(this, _m2, ot);
    __publicField(this, "_tag", Do);
    this.runtimeFlags = e;
  }
  [(_m2 = ot, $)]() {
    return f(_(qr), E(_(this._tag)), E(_(this.runtimeFlags)), U(this));
  }
  [w](e) {
    return Ri(e) && e._tag === Do && this.runtimeFlags === e.runtimeFlags;
  }
}
class D_ {
  constructor(e, n) {
    __publicField(this, "runtimeFlags");
    __publicField(this, "blockingOn");
    __publicField(this, _n2, ot);
    __publicField(this, "_tag", Bo);
    this.runtimeFlags = e, this.blockingOn = n;
  }
  [(_n2 = ot, $)]() {
    return f(_(qr), E(_(this._tag)), E(_(this.runtimeFlags)), E(_(this.blockingOn)), U(this));
  }
  [w](e) {
    return Ri(e) && e._tag === Bo && this.runtimeFlags === e.runtimeFlags && v(this.blockingOn, e.blockingOn);
  }
}
const B_ = new j_(), U_ = (t) => new q_(t), V_ = (t, e) => new D_(t, e), Ri = (t) => T(t, ot), K_ = (t) => t._tag === hr, H_ = B_, Eu = U_, J_ = V_, G_ = K_, z_ = Symbol.for("effect/Micro"), dr = Symbol.for("effect/Micro/MicroExit"), Uo = Symbol.for("effect/Micro/MicroCause"), W_ = { _E: j };
class Ou extends globalThis.Error {
  constructor(e, n, r) {
    const s = `MicroCause.${e}`;
    let i, o, c;
    if (n instanceof globalThis.Error) {
      i = `(${s}) ${n.name}`, o = n.message;
      const a = o.split(`
`).length;
      c = n.stack ? `(${s}) ${n.stack.split(`
`).slice(0, a + 3).join(`
`)}` : `${i}: ${o}`;
    } else i = s, o = yt(n, 0), c = `${i}: ${o}`;
    r.length > 0 && (c += `
    ${r.join(`
    `)}`);
    super(o);
    __publicField(this, "_tag");
    __publicField(this, "traces");
    __publicField(this, _o2);
    this._tag = e, this.traces = r, this[Uo] = W_, this.name = i, this.stack = c;
  }
  pipe() {
    return S(this, arguments);
  }
  toString() {
    return this.stack;
  }
  [(_o2 = Uo, A)]() {
    return this.stack;
  }
}
class Y_ extends Ou {
  constructor(e, n = []) {
    super("Die", e, n);
    __publicField(this, "defect");
    this.defect = e;
  }
}
const Q_ = (t, e = []) => new Y_(t, e);
class Z_ extends Ou {
  constructor(e = []) {
    super("Interrupt", "interrupted", e);
  }
}
const X_ = (t = []) => new Z_(t), ey = (t) => t._tag === "Interrupt", Vo = Symbol.for("effect/Micro/MicroFiber"), ty = { _A: j, _E: j };
_p2 = Vo;
class ny {
  constructor(e, n = true) {
    __publicField(this, "context");
    __publicField(this, "interruptible");
    __publicField(this, _p2);
    __publicField(this, "_stack", []);
    __publicField(this, "_observers", []);
    __publicField(this, "_exit");
    __publicField(this, "_children");
    __publicField(this, "currentOpCount", 0);
    __publicField(this, "_interrupted", false);
    __publicField(this, "_yielded");
    this.context = e, this.interruptible = n, this[Vo] = ty;
  }
  getRef(e) {
    return If(this.context, e);
  }
  addObserver(e) {
    return this._exit ? (e(this._exit), wl) : (this._observers.push(e), () => {
      const n = this._observers.indexOf(e);
      n >= 0 && this._observers.splice(n, 1);
    });
  }
  unsafeInterrupt() {
    this._exit || (this._interrupted = true, this.interruptible && this.evaluate(Li));
  }
  unsafePoll() {
    return this._exit;
  }
  evaluate(e) {
    if (this._exit) return;
    if (this._yielded !== void 0) {
      const s = this._yielded;
      this._yielded = void 0, s();
    }
    const n = this.runLoop(e);
    if (n === qn) return;
    const r = Ko.interruptChildren && Ko.interruptChildren(this);
    if (r !== void 0) return this.evaluate(gr(r, () => n));
    this._exit = n;
    for (let s = 0; s < this._observers.length; s++) this._observers[s](n);
    this._observers.length = 0;
  }
  runLoop(e) {
    let n = false, r = e;
    this.currentOpCount = 0;
    try {
      for (; ; ) {
        if (this.currentOpCount++, !n && this.getRef(ji).shouldYield(this)) {
          n = true;
          const s = r;
          r = gr(cy, () => s);
        }
        if (r = r[Ns](this), r === qn) {
          const s = this._yielded;
          return dr in s ? (this._yielded = void 0, s) : qn;
        }
      }
    } catch (s) {
      return T(r, Ns) ? As(s) : As(`MicroFiber.runLoop: Not a valid effect: ${String(r)}`);
    }
  }
  getCont(e) {
    for (; ; ) {
      const n = this._stack.pop();
      if (!n) return;
      const r = n[pr] && n[pr](this);
      if (r) return { [e]: r };
      if (n[e]) return n;
    }
  }
  yieldWith(e) {
    return this._yielded = e, qn;
  }
  children() {
    return this._children ?? (this._children = /* @__PURE__ */ new Set());
  }
}
const Ko = M("effect/Micro/fiberMiddleware", () => ({ interruptChildren: void 0 })), $u = Symbol.for("effect/Micro/identifier"), B = Symbol.for("effect/Micro/args"), Ns = Symbol.for("effect/Micro/evaluate"), Lt = Symbol.for("effect/Micro/successCont"), mt = Symbol.for("effect/Micro/failureCont"), pr = Symbol.for("effect/Micro/ensureCont"), qn = Symbol.for("effect/Micro/Yield"), ry = { _A: j, _E: j, _R: j }, sy = { ...b_, _op: "Micro", [z_]: ry, pipe() {
  return S(this, arguments);
}, [Symbol.iterator]() {
  return new Il(new br(this));
}, toJSON() {
  return { _id: "Micro", op: this[$u], ...B in this ? { args: this[B] } : void 0 };
}, toString() {
  return W(this);
}, [A]() {
  return W(this);
} };
function iy(t) {
  return As("Micro.evaluate: Not implemented");
}
const Dr = (t) => ({ ...sy, [$u]: t.op, [Ns]: t.eval ?? iy, [Lt]: t.contA, [mt]: t.contE, [pr]: t.ensure }), Ni = (t) => {
  const e = Dr(t);
  return function() {
    const n = Object.create(e);
    return n[B] = t.single === false ? arguments : arguments[0], n;
  };
}, Tu = (t) => {
  const e = { ...Dr(t), [dr]: dr, _tag: t.op, get [t.prop]() {
    return this[B];
  }, toJSON() {
    return { _id: "MicroExit", _tag: t.op, [t.prop]: this[B] };
  }, [w](n) {
    return ly(n) && n._tag === t.op && v(this[B], n[B]);
  }, [$]() {
    return U(this, E(se(t.op))(_(this[B])));
  } };
  return function(n) {
    const r = Object.create(e);
    return r[B] = n, r[Lt] = void 0, r[mt] = void 0, r[pr] = void 0, r;
  };
}, Ai = Tu({ op: "Success", prop: "value", eval(t) {
  const e = t.getCont(Lt);
  return e ? e[Lt](this[B], t) : t.yieldWith(this);
} }), Mu = Tu({ op: "Failure", prop: "cause", eval(t) {
  let e = t.getCont(mt);
  for (; ey(this[B]) && e && t.interruptible; ) e = t.getCont(mt);
  return e ? e[mt](this[B], t) : t.yieldWith(this);
} }), oy = Ni({ op: "Yield", eval(t) {
  let e = false;
  return t.getRef(ji).scheduleTask(() => {
    e || t.evaluate(fy);
  }, this[B] ?? 0), t.yieldWith(() => {
    e = true;
  });
} }), cy = oy(0), ay = Ai(void 0), Pi = Ni({ op: "WithMicroFiber", eval(t) {
  return this[B](t);
} }), gr = u(2, (t, e) => {
  const n = Object.create(uy);
  return n[B] = t, n[Lt] = e, n;
}), uy = Dr({ op: "OnSuccess", eval(t) {
  return t._stack.push(this), this[B];
} }), ly = (t) => T(t, dr), Fu = Ai, xi = Mu, Li = xi(X_()), As = (t) => xi(Q_(t)), fy = Fu(void 0), hy = "setImmediate" in globalThis ? globalThis.setImmediate : (t) => setTimeout(t, 0);
class Cu {
  constructor() {
    __publicField(this, "tasks", []);
    __publicField(this, "running", false);
    __publicField(this, "afterScheduled", () => {
      this.running = false, this.runTasks();
    });
  }
  scheduleTask(e, n) {
    this.tasks.push(e), this.running || (this.running = true, hy(this.afterScheduled));
  }
  runTasks() {
    const e = this.tasks;
    this.tasks = [];
    for (let n = 0, r = e.length; n < r; n++) e[n]();
  }
  shouldYield(e) {
    return e.currentOpCount >= e.getRef(gy);
  }
  flush() {
    for (; this.tasks.length > 0; ) this.runTasks();
  }
}
const dy = u(2, (t, e) => Pi((n) => {
  const r = n.context;
  return n.context = e(r), yy(t, () => (n.context = r, ay));
})), py = u(2, (t, e) => dy(t, Tc(e)));
class gy extends Mc()("effect/Micro/currentMaxOpsBeforeYield", { defaultValue: () => 2048 }) {
}
class ji extends Mc()("effect/Micro/currentScheduler", { defaultValue: () => new Cu() }) {
}
const my = u(2, (t, e) => {
  const n = Object.create(_y);
  return n[B] = t, n[Lt] = e.onSuccess, n[mt] = e.onFailure, n;
}), _y = Dr({ op: "OnSuccessAndFailure", eval(t) {
  return t._stack.push(this), this[B];
} }), yy = u(2, (t, e) => Sy((n) => my(n(t), { onFailure: (r) => gr(e(xi(r)), () => Mu(r)), onSuccess: (r) => gr(e(Fu(r)), () => Ai(r)) }))), Ru = Ni({ op: "SetInterruptible", ensure(t) {
  if (t.interruptible = this[B], t._interrupted && t.interruptible) return () => Li;
} }), by = (t) => Pi((e) => e.interruptible ? t : (e.interruptible = true, e._stack.push(Ru(false)), e._interrupted ? Li : t)), Sy = (t) => Pi((e) => e.interruptible ? (e.interruptible = false, e._stack.push(Ru(true)), t(by)) : t(j)), ky = (t, e) => {
  const n = new ny(ji.context(new Cu()));
  return n.evaluate(t), n;
};
class vy {
  constructor() {
    __publicField(this, "buckets", []);
  }
  scheduleTask(e, n) {
    const r = this.buckets.length;
    let s, i = 0;
    for (; i < r && this.buckets[i][0] <= n; i++) s = this.buckets[i];
    s && s[0] === n ? s[1].push(e) : i === r ? this.buckets.push([n, [e]]) : this.buckets.splice(i, 0, [n, [e]]);
  }
}
class wy {
  constructor(e) {
    __publicField(this, "maxNextTickBeforeTimer");
    __publicField(this, "running", false);
    __publicField(this, "tasks", new vy());
    this.maxNextTickBeforeTimer = e;
  }
  starveInternal(e) {
    const n = this.tasks.buckets;
    this.tasks.buckets = [];
    for (const [r, s] of n) for (let i = 0; i < s.length; i++) s[i]();
    this.tasks.buckets.length === 0 ? this.running = false : this.starve(e);
  }
  starve(e = 0) {
    e >= this.maxNextTickBeforeTimer ? setTimeout(() => this.starveInternal(0), 0) : Promise.resolve(void 0).then(() => this.starveInternal(e + 1));
  }
  shouldYield(e) {
    return e.currentOpCount > e.getFiberRef(Ig) ? e.getFiberRef(Ti) : false;
  }
  scheduleTask(e, n) {
    this.tasks.scheduleTask(e, n), this.running || (this.running = true, this.starve());
  }
}
const Iy = M(Symbol.for("effect/Scheduler/defaultScheduler"), () => new wy(2048)), Nu = M(Symbol.for("effect/FiberRef/currentScheduler"), () => Z(Iy)), Au = M(Symbol.for("effect/FiberRef/currentRequestMap"), () => Z(/* @__PURE__ */ new Map())), Ho = (t, e, n, r) => {
  switch (t) {
    case void 0:
      return e();
    case "unbounded":
      return n();
    case "inherit":
      return $i(Mg, (s) => s === "unbounded" ? n() : s > 1 ? r(s) : e());
    default:
      return t > 1 ? r(t) : e();
  }
}, qi = "InterruptSignal", Di = "Stateful", Bi = "Resume", Ui = "YieldNow", ts = (t) => ({ _tag: qi, cause: t }), Wn = (t) => ({ _tag: Di, onFiber: t }), ut = (t) => ({ _tag: Bi, effect: t }), Ey = () => ({ _tag: Ui }), Oy = "effect/FiberScope", mr = Symbol.for(Oy);
_q = mr;
class $y {
  constructor() {
    __publicField(this, _q, mr);
    __publicField(this, "fiberId", Tt);
    __publicField(this, "roots", /* @__PURE__ */ new Set());
  }
  add(e, n) {
    this.roots.add(n), n.addObserver(() => {
      this.roots.delete(n);
    });
  }
}
_r2 = mr;
class Ty {
  constructor(e, n) {
    __publicField(this, "fiberId");
    __publicField(this, "parent");
    __publicField(this, _r2, mr);
    this.fiberId = e, this.parent = n;
  }
  add(e, n) {
    this.parent.tell(Wn((r) => {
      r.addChild(n), n.addObserver(() => {
        r.removeChild(n);
      });
    }));
  }
}
const My = (t) => new Ty(t.id(), t), Vi = M(Symbol.for("effect/FiberScope/Global"), () => new $y()), Fy = "effect/Fiber", Cy = Symbol.for(Fy), Ry = { _E: (t) => t, _A: (t) => t }, Ny = "effect/Fiber", Ay = Symbol.for(Ny), Pu = (t) => Ba(Pa(t.await), t.inheritAll);
({ ...zs });
const Ke = "effect/FiberCurrent", Py = "effect/Logger", xy = Symbol.for(Py), Ly = { _Message: (t) => t, _Output: (t) => t }, Ki = (t) => ({ [xy]: Ly, log: t, pipe() {
  return S(this, arguments);
} }), jy = /^[^\s"=]*$/, qy = (t, e) => ({ annotations: n, cause: r, date: s, fiberId: i, logLevel: o, message: c, spans: a }) => {
  const l = (m) => m.match(jy) ? m : t(m), d = (m, I) => `${_u(m)}=${l(I)}`, h = (m, I) => " " + d(m, I);
  let p = d("timestamp", s.toISOString());
  p += h("level", o.label), p += h("fiber", ea(i));
  const g = Vl(c);
  for (let m = 0; m < g.length; m++) p += h("message", yt(g[m], e));
  Tp(r) || (p += h("cause", vn(r, { renderErrorCause: true })));
  for (const m of a) p += " " + y_(s.getTime())(m);
  for (const [m, I] of n) p += h(m, yt(I, e));
  return p;
}, Dy = (t) => `"${t.replace(/\\([\s\S])|(")/g, "\\$1$2")}"`, By = Ki(qy(Dy)), Uy = typeof pe == "object" && pe !== null && typeof pe.stdout == "object" && pe.stdout !== null;
Uy && pe.stdout.isTTY;
const xu = "effect/MetricBoundaries", Ps = Symbol.for(xu);
class Vy {
  constructor(e) {
    __publicField(this, "values");
    __publicField(this, _s2, Ps);
    __publicField(this, "_hash");
    this.values = e, this._hash = f(se(xu), E(gn(this.values)));
  }
  [(_s2 = Ps, $)]() {
    return this._hash;
  }
  [w](e) {
    return Ky(e) && v(this.values, e.values);
  }
  pipe() {
    return S(this, arguments);
  }
}
const Ky = (t) => T(t, Ps), Hy = (t) => {
  const e = f(t, mc(ne(Number.POSITIVE_INFINITY)), uf);
  return new Vy(e);
}, Jy = (t) => f(Ul(t.count - 1, (e) => t.start * Math.pow(t.factor, e)), kr, Hy), Gy = "effect/MetricKeyType", Lu = Symbol.for(Gy), ju = "effect/MetricKeyType/Counter", xs = Symbol.for(ju), zy = "effect/MetricKeyType/Frequency", Wy = Symbol.for(zy), Yy = "effect/MetricKeyType/Gauge", Qy = Symbol.for(Yy), qu = "effect/MetricKeyType/Histogram", Ls = Symbol.for(qu), Zy = "effect/MetricKeyType/Summary", Xy = Symbol.for(Zy), Du = { _In: (t) => t, _Out: (t) => t };
class eb {
  constructor(e, n) {
    __publicField(this, "incremental");
    __publicField(this, "bigint");
    __publicField(this, _u2, Du);
    __publicField(this, _t2, xs);
    __publicField(this, "_hash");
    this.incremental = e, this.bigint = n, this._hash = se(ju);
  }
  [(_u2 = Lu, _t2 = xs, $)]() {
    return this._hash;
  }
  [w](e) {
    return Bu(e);
  }
  pipe() {
    return S(this, arguments);
  }
}
class tb {
  constructor(e) {
    __publicField(this, "boundaries");
    __publicField(this, _w, Du);
    __publicField(this, _v, Ls);
    __publicField(this, "_hash");
    this.boundaries = e, this._hash = f(se(qu), E(_(this.boundaries)));
  }
  [(_w = Lu, _v = Ls, $)]() {
    return this._hash;
  }
  [w](e) {
    return Uu(e) && v(this.boundaries, e.boundaries);
  }
  pipe() {
    return S(this, arguments);
  }
}
const nb = (t) => new eb((t == null ? void 0 : t.incremental) ?? false, (t == null ? void 0 : t.bigint) ?? false), rb = (t) => new tb(t), Bu = (t) => T(t, xs), sb = (t) => T(t, Wy), ib = (t) => T(t, Qy), Uu = (t) => T(t, Ls), ob = (t) => T(t, Xy), cb = "effect/MetricKey", Vu = Symbol.for(cb), ab = { _Type: (t) => t }, ub = ei(v);
class Hi {
  constructor(e, n, r, s = []) {
    __publicField(this, "name");
    __publicField(this, "keyType");
    __publicField(this, "description");
    __publicField(this, "tags");
    __publicField(this, _x, ab);
    __publicField(this, "_hash");
    this.name = e, this.keyType = n, this.description = r, this.tags = s, this._hash = f(se(this.name + this.description), E(_(this.keyType)), E(gn(this.tags)));
  }
  [(_x = Vu, $)]() {
    return this._hash;
  }
  [w](e) {
    return lb(e) && this.name === e.name && v(this.keyType, e.keyType) && v(this.description, e.description) && ub(this.tags, e.tags);
  }
  pipe() {
    return S(this, arguments);
  }
}
const lb = (t) => T(t, Vu), fb = (t, e) => new Hi(t, nb(e), Qs(e == null ? void 0 : e.description)), hb = (t, e, n) => new Hi(t, rb(e), Qs(n)), db = u(2, (t, e) => e.length === 0 ? t : new Hi(t.name, t.keyType, t.description, Vn(t.tags, e))), pb = "effect/MetricState", Tn = Symbol.for(pb), Ku = "effect/MetricState/Counter", js = Symbol.for(Ku), Hu = "effect/MetricState/Frequency", qs = Symbol.for(Hu), Ju = "effect/MetricState/Gauge", Ds = Symbol.for(Ju), Gu = "effect/MetricState/Histogram", Bs = Symbol.for(Gu), zu = "effect/MetricState/Summary", Us = Symbol.for(zu), Mn = { _A: (t) => t };
class gb {
  constructor(e) {
    __publicField(this, "count");
    __publicField(this, _z, Mn);
    __publicField(this, _y2, js);
    this.count = e;
  }
  [(_z = Tn, _y2 = js, $)]() {
    return f(_(Ku), E(_(this.count)), U(this));
  }
  [w](e) {
    return Ob(e) && this.count === e.count;
  }
  pipe() {
    return S(this, arguments);
  }
}
const mb = ei(v);
class _b {
  constructor(e) {
    __publicField(this, "occurrences");
    __publicField(this, _B, Mn);
    __publicField(this, _A, qs);
    __publicField(this, "_hash");
    this.occurrences = e;
  }
  [(_B = Tn, _A = qs, $)]() {
    return f(se(Hu), E(gn(q(this.occurrences.entries()))), U(this));
  }
  [w](e) {
    return $b(e) && mb(q(this.occurrences.entries()), q(e.occurrences.entries()));
  }
  pipe() {
    return S(this, arguments);
  }
}
class yb {
  constructor(e) {
    __publicField(this, "value");
    __publicField(this, _D, Mn);
    __publicField(this, _C, Ds);
    this.value = e;
  }
  [(_D = Tn, _C = Ds, $)]() {
    return f(_(Ju), E(_(this.value)), U(this));
  }
  [w](e) {
    return Tb(e) && this.value === e.value;
  }
  pipe() {
    return S(this, arguments);
  }
}
class bb {
  constructor(e, n, r, s, i) {
    __publicField(this, "buckets");
    __publicField(this, "count");
    __publicField(this, "min");
    __publicField(this, "max");
    __publicField(this, "sum");
    __publicField(this, _F, Mn);
    __publicField(this, _E, Bs);
    this.buckets = e, this.count = n, this.min = r, this.max = s, this.sum = i;
  }
  [(_F = Tn, _E = Bs, $)]() {
    return f(_(Gu), E(_(this.buckets)), E(_(this.count)), E(_(this.min)), E(_(this.max)), E(_(this.sum)), U(this));
  }
  [w](e) {
    return Mb(e) && v(this.buckets, e.buckets) && this.count === e.count && this.min === e.min && this.max === e.max && this.sum === e.sum;
  }
  pipe() {
    return S(this, arguments);
  }
}
class Sb {
  constructor(e, n, r, s, i, o) {
    __publicField(this, "error");
    __publicField(this, "quantiles");
    __publicField(this, "count");
    __publicField(this, "min");
    __publicField(this, "max");
    __publicField(this, "sum");
    __publicField(this, _H, Mn);
    __publicField(this, _G, Us);
    this.error = e, this.quantiles = n, this.count = r, this.min = s, this.max = i, this.sum = o;
  }
  [(_H = Tn, _G = Us, $)]() {
    return f(_(zu), E(_(this.error)), E(_(this.quantiles)), E(_(this.count)), E(_(this.min)), E(_(this.max)), E(_(this.sum)), U(this));
  }
  [w](e) {
    return Fb(e) && this.error === e.error && v(this.quantiles, e.quantiles) && this.count === e.count && this.min === e.min && this.max === e.max && this.sum === e.sum;
  }
  pipe() {
    return S(this, arguments);
  }
}
const kb = (t) => new gb(t), vb = (t) => new _b(t), wb = (t) => new yb(t), Ib = (t) => new bb(t.buckets, t.count, t.min, t.max, t.sum), Eb = (t) => new Sb(t.error, t.quantiles, t.count, t.min, t.max, t.sum), Ob = (t) => T(t, js), $b = (t) => T(t, qs), Tb = (t) => T(t, Ds), Mb = (t) => T(t, Bs), Fb = (t) => T(t, Us), Cb = "effect/MetricHook", Rb = Symbol.for(Cb), Nb = { _In: (t) => t, _Out: (t) => t }, Fn = (t) => ({ [Rb]: Nb, pipe() {
  return S(this, arguments);
}, ...t }), Jo = BigInt(0), Ab = (t) => {
  let e = t.keyType.bigint ? Jo : 0;
  const n = t.keyType.incremental ? t.keyType.bigint ? (s) => s >= Jo : (s) => s >= 0 : (s) => true, r = (s) => {
    n(s) && (e = e + s);
  };
  return Fn({ get: () => kb(e), update: r, modify: r });
}, Pb = (t) => {
  const e = /* @__PURE__ */ new Map();
  for (const r of t.keyType.preregisteredWords) e.set(r, 0);
  const n = (r) => {
    const s = e.get(r) ?? 0;
    e.set(r, s + 1);
  };
  return Fn({ get: () => vb(e), update: n, modify: n });
}, xb = (t, e) => {
  let n = e;
  return Fn({ get: () => wb(n), update: (r) => {
    n = r;
  }, modify: (r) => {
    n = n + r;
  } });
}, Lb = (t) => {
  const e = t.keyType.boundaries.values, n = e.length, r = new Uint32Array(n + 1), s = new Float64Array(n);
  let i = 0, o = 0, c = Number.MAX_VALUE, a = Number.MIN_VALUE;
  f(e, tr(cn), ht((h, p) => {
    s[p] = h;
  }));
  const l = (h) => {
    let p = 0, g = n;
    for (; p !== g; ) {
      const m = Math.floor(p + (g - p) / 2), I = s[m];
      h <= I ? g = m : p = m, g === p + 1 && (h <= s[p] ? g = p : p = g);
    }
    r[p] = r[p] + 1, i = i + 1, o = o + h, h < c && (c = h), h > a && (a = h);
  }, d = () => {
    const h = Xs(n);
    let p = 0;
    for (let g = 0; g < n; g++) {
      const m = s[g], I = r[g];
      p = p + I, h[g] = [m, p];
    }
    return h;
  };
  return Fn({ get: () => Ib({ buckets: d(), count: i, min: c, max: a, sum: o }), update: l, modify: l });
}, jb = (t) => {
  const { error: e, maxAge: n, maxSize: r, quantiles: s } = t.keyType, i = f(s, tr(cn)), o = Xs(r);
  let c = 0, a = 0, l = 0, d = 0, h = 0;
  const p = (m) => {
    const I = [];
    let R = 0;
    for (; R !== r - 1; ) {
      const K = o[R];
      if (K != null) {
        const [H, Ee] = K, ie = us(m - H);
        eh(ie, Lc) && Xf(ie, n) && I.push(Ee);
      }
      R = R + 1;
    }
    return qb(e, i, tr(I, cn));
  }, g = (m, I) => {
    if (r > 0) {
      c = c + 1;
      const R = c % r;
      o[R] = [I, m];
    }
    d = a === 0 ? m : Math.min(d, m), h = a === 0 ? m : Math.max(h, m), a = a + 1, l = l + m;
  };
  return Fn({ get: () => Eb({ error: e, quantiles: p(Date.now()), count: a, min: d, max: h, sum: l }), update: ([m, I]) => g(m, I), modify: ([m, I]) => g(m, I) });
}, qb = (t, e, n) => {
  const r = n.length;
  if (!te(e)) return kt();
  const s = e[0], i = e.slice(1), o = Go(t, r, k(), 0, s, n), c = fe(o);
  return i.forEach((a) => {
    c.push(Go(t, r, o.value, o.consumed, a, o.rest));
  }), ht(c, (a) => [a.quantile, a.value]);
}, Go = (t, e, n, r, s, i) => {
  let o = t, c = e, a = n, l = r, d = s, h = i, p = t, g = e, m = n, I = r, R = s, K = i;
  for (; ; ) {
    if (!te(h)) return { quantile: d, value: k(), consumed: l, rest: [] };
    if (d === 1) return { quantile: d, value: O(bc(h)), consumed: l + h.length, rest: [] };
    const H = Q(h), Ee = Zl(h, (N) => N === H), ie = d * c, Jt = o / 2 * ie, Oe = l + Ee[0].length, Rn = Math.abs(Oe - ie);
    if (Oe < ie - Jt) {
      p = o, g = c, m = rn(h), I = Oe, R = d, K = Ee[1], o = p, c = g, a = m, l = I, d = R, h = K;
      continue;
    }
    if (Oe > ie + Jt) {
      const N = Re(a) ? O(H) : a;
      return { quantile: d, value: N, consumed: l, rest: h };
    }
    switch (a._tag) {
      case "None": {
        p = o, g = c, m = rn(h), I = Oe, R = d, K = Ee[1], o = p, c = g, a = m, l = I, d = R, h = K;
        continue;
      }
      case "Some": {
        const N = Math.abs(ie - a.value);
        if (Rn < N) {
          p = o, g = c, m = rn(h), I = Oe, R = d, K = Ee[1], o = p, c = g, a = m, l = I, d = R, h = K;
          continue;
        }
        return { quantile: d, value: O(a.value), consumed: l, rest: h };
      }
    }
  }
  throw new Error("BUG: MetricHook.resolveQuantiles - please report an issue at https://github.com/Effect-TS/effect/issues");
}, Db = "effect/MetricPair", Bb = Symbol.for(Db), Ub = { _Type: (t) => t }, Vb = (t, e) => ({ [Bb]: Ub, metricKey: t, metricState: e, pipe() {
  return S(this, arguments);
} }), Kb = "effect/MetricRegistry", zo = Symbol.for(Kb);
_I = zo;
class Hb {
  constructor() {
    __publicField(this, _I, zo);
    __publicField(this, "map", Wg());
  }
  snapshot() {
    const e = [];
    for (const [n, r] of this.map) e.push(Vb(n, r.get()));
    return e;
  }
  get(e) {
    const n = f(this.map, Je(e), He);
    if (n == null) {
      if (Bu(e.keyType)) return this.getCounter(e);
      if (ib(e.keyType)) return this.getGauge(e);
      if (sb(e.keyType)) return this.getFrequency(e);
      if (Uu(e.keyType)) return this.getHistogram(e);
      if (ob(e.keyType)) return this.getSummary(e);
      throw new Error("BUG: MetricRegistry.get - unknown MetricKeyType - please report an issue at https://github.com/Effect-TS/effect/issues");
    } else return n;
  }
  getCounter(e) {
    let n = f(this.map, Je(e), He);
    if (n == null) {
      const r = Ab(e);
      f(this.map, Yt(e)) || f(this.map, Qt(e, r)), n = r;
    }
    return n;
  }
  getFrequency(e) {
    let n = f(this.map, Je(e), He);
    if (n == null) {
      const r = Pb(e);
      f(this.map, Yt(e)) || f(this.map, Qt(e, r)), n = r;
    }
    return n;
  }
  getGauge(e) {
    let n = f(this.map, Je(e), He);
    if (n == null) {
      const r = xb(e, e.keyType.bigint ? BigInt(0) : 0);
      f(this.map, Yt(e)) || f(this.map, Qt(e, r)), n = r;
    }
    return n;
  }
  getHistogram(e) {
    let n = f(this.map, Je(e), He);
    if (n == null) {
      const r = Lb(e);
      f(this.map, Yt(e)) || f(this.map, Qt(e, r)), n = r;
    }
    return n;
  }
  getSummary(e) {
    let n = f(this.map, Je(e), He);
    if (n == null) {
      const r = jb(e);
      f(this.map, Yt(e)) || f(this.map, Qt(e, r)), n = r;
    }
    return n;
  }
}
const Jb = () => new Hb(), Gb = "effect/Metric", zb = Symbol.for(Gb), Wb = { _Type: (t) => t, _In: (t) => t, _Out: (t) => t }, Wo = M(Symbol.for("effect/Metric/globalMetricRegistry"), () => Jb()), Wu = function(t, e, n, r) {
  const s = Object.assign((i) => og(i, (o) => Xb(s, o)), { [zb]: Wb, keyType: t, unsafeUpdate: e, unsafeValue: n, unsafeModify: r, register() {
    return this.unsafeValue([]), this;
  }, pipe() {
    return S(this, arguments);
  } });
  return s;
}, Br = (t, e) => Yu(fb(t, e)), Yu = (t) => {
  let e;
  const n = /* @__PURE__ */ new WeakMap(), r = (s) => {
    if (s.length === 0) return e !== void 0 || (e = Wo.get(t)), e;
    let i = n.get(s);
    return i !== void 0 || (i = Wo.get(db(t, s)), n.set(s, i)), i;
  };
  return Wu(t.keyType, (s, i) => r(i).update(s), (s) => r(s).get(), (s, i) => r(i).modify(s));
}, Yb = (t, e, n) => Yu(hb(t, e, n)), Qb = u(3, (t, e, n) => Zb(t, [O_(e, n)])), Zb = u(2, (t, e) => Wu(t.keyType, (n, r) => t.unsafeUpdate(n, Vn(e, r)), (n) => t.unsafeValue(Vn(e, n)), (n, r) => t.unsafeModify(n, Vn(e, r)))), Xb = u(2, (t, e) => $i(ws, (n) => y(() => t.unsafeUpdate(e, n))));
({ ...El });
const eS = u(2, (t, e) => $i(Au, (n) => y(() => {
  if (n.has(t)) {
    const r = n.get(t);
    r.state.completed || (r.state.completed = true, Za(r.result, e));
  }
}))), tS = "effect/Supervisor", Ur = Symbol.for(tS), Ji = { _T: (t) => t };
_J = Ur;
const _Vr = class _Vr {
  constructor(e, n) {
    __publicField(this, "underlying");
    __publicField(this, "value0");
    __publicField(this, _J, Ji);
    this.underlying = e, this.value0 = n;
  }
  get value() {
    return this.value0;
  }
  onStart(e, n, r, s) {
    this.underlying.onStart(e, n, r, s);
  }
  onEnd(e, n) {
    this.underlying.onEnd(e, n);
  }
  onEffect(e, n) {
    this.underlying.onEffect(e, n);
  }
  onSuspend(e) {
    this.underlying.onSuspend(e);
  }
  onResume(e) {
    this.underlying.onResume(e);
  }
  map(e) {
    return new _Vr(this, f(this.value, ee(e)));
  }
  zip(e) {
    return new Kr(this, e);
  }
};
let Vr = _Vr;
_K = Ur;
const _Kr = class _Kr {
  constructor(e, n) {
    __publicField(this, "left");
    __publicField(this, "right");
    __publicField(this, "_tag", "Zip");
    __publicField(this, _K, Ji);
    this.left = e, this.right = n;
  }
  get value() {
    return Da(this.left.value, this.right.value);
  }
  onStart(e, n, r, s) {
    this.left.onStart(e, n, r, s), this.right.onStart(e, n, r, s);
  }
  onEnd(e, n) {
    this.left.onEnd(e, n), this.right.onEnd(e, n);
  }
  onEffect(e, n) {
    this.left.onEffect(e, n), this.right.onEffect(e, n);
  }
  onSuspend(e) {
    this.left.onSuspend(e), this.right.onSuspend(e);
  }
  onResume(e) {
    this.left.onResume(e), this.right.onResume(e);
  }
  map(e) {
    return new Vr(this, f(this.value, ee(e)));
  }
  zip(e) {
    return new _Kr(this, e);
  }
};
let Kr = _Kr;
const Qu = (t) => T(t, Ur) && sc(t, "Zip");
_L = Ur;
class nS {
  constructor(e) {
    __publicField(this, "effect");
    __publicField(this, _L, Ji);
    this.effect = e;
  }
  get value() {
    return this.effect;
  }
  onStart(e, n, r, s) {
  }
  onEnd(e, n) {
  }
  onEffect(e, n) {
  }
  onSuspend(e) {
  }
  onResume(e) {
  }
  map(e) {
    return new Vr(this, f(this.value, ee(e)));
  }
  zip(e) {
    return new Kr(this, e);
  }
  onRun(e, n) {
    return e();
  }
}
const rS = (t) => new nS(t), Hr = M("effect/Supervisor/none", () => rS(we)), sS = qt, Zu = "Empty", Xu = "AddSupervisor", el = "RemoveSupervisor", tl = "AndThen", on = { _tag: Zu }, Yn = (t, e) => ({ _tag: tl, first: t, second: e }), iS = (t, e) => oS(e, ne(t)), oS = (t, e) => {
  let n = t, r = e;
  for (; It(r); ) {
    const s = Et(r);
    switch (s._tag) {
      case Zu: {
        r = Ge(r);
        break;
      }
      case Xu: {
        n = n.zip(s.supervisor), r = Ge(r);
        break;
      }
      case el: {
        n = Vs(n, s.supervisor), r = Ge(r);
        break;
      }
      case tl: {
        r = ge(s.first)(ge(s.second)(Ge(r)));
        break;
      }
    }
  }
  return n;
}, Vs = (t, e) => v(t, e) ? Hr : Qu(t) ? Vs(t.left, e).zip(Vs(t.right, e)) : t, _r = (t) => v(t, Hr) ? tt() : Qu(t) ? f(_r(t.left), ln(_r(t.right))) : hi(t), cS = (t, e) => {
  if (v(t, e)) return on;
  const n = _r(t), r = _r(e), s = f(r, oo(n), sr(on, (o, c) => Yn(o, { _tag: Xu, supervisor: c }))), i = f(n, oo(r), sr(on, (o, c) => Yn(o, { _tag: el, supervisor: c })));
  return Yn(s, i);
}, aS = sS({ empty: on, patch: iS, combine: Yn, diff: cS }), uS = Br("effect_fiber_started", { incremental: true }), Yo = Br("effect_fiber_active"), lS = Br("effect_fiber_successes", { incremental: true }), fS = Br("effect_fiber_failures", { incremental: true }), hS = Qb(Yb("effect_fiber_lifetimes", Jy({ start: 0.5, factor: 2, count: 35 })), "time_unit", "milliseconds"), Zt = "Continue", dS = "Done", Qo = "Yield", pS = { _E: (t) => t, _A: (t) => t }, Dn = (t) => {
  throw new Error(`BUG: FiberRuntime - ${yt(t)} - please report an issue at https://github.com/Effect-TS/effect/issues`);
}, Te = Symbol.for("effect/internal/fiberRuntime/YieldedOp"), Me = M("effect/internal/fiberRuntime/yieldedOpChannel", () => ({ currentOp: null })), Xt = { [Qn]: (t, e, n) => G(() => e.effect_instruction_i1(n)), OnStep: (t, e, n) => L(L(n)), [Xn]: (t, e, n) => G(() => e.effect_instruction_i2(n)), [Ys]: (t, e, n) => (t.patchRuntimeFlags(t.currentRuntimeFlags, e.patch), je(t.currentRuntimeFlags) && t.isInterrupted() ? C(t.getInterruptedCause()) : L(n)), [Zn]: (t, e, n) => (G(() => e.effect_instruction_i2(n)), G(() => e.effect_instruction_i0()) ? (t.pushStack(e), G(() => e.effect_instruction_i1())) : we), [tn]: (t, e, n) => {
  for (; ; ) {
    const r = G(() => e.effect_instruction_i0.next(n));
    if (r.done) return L(r.value);
    const s = Tl(r.value);
    if (jr(s)) {
      if (s._tag === "Failure") return s;
    } else return t.pushStack(e), s;
    n = s.value;
  }
} }, gS = { [qi]: (t, e, n, r) => (t.processNewInterruptSignal(r.cause), je(e) ? C(r.cause) : n), [Bi]: (t, e, n, r) => {
  throw new Error("It is illegal to have multiple concurrent run loops in a single fiber");
}, [Di]: (t, e, n, r) => (r.onFiber(t, Eu(e)), n), [Ui]: (t, e, n, r) => b(Ei(), () => n) }, mS = (t) => Nr(fp(t), (e) => Xe(Ep(e), ([n, r]) => {
  const s = /* @__PURE__ */ new Map(), i = [];
  for (const c of r) {
    i.push(Qe(c));
    for (const a of c) s.set(a.request, a);
  }
  const o = i.flat();
  return xr(FS(n.runAll(i), o, () => o.forEach((c) => {
    c.listeners.interrupted = true;
  })), Au, s);
}, false, false)), _S = ac();
class nl extends k_ {
  constructor(e, n, r) {
    super();
    __publicField(this, _N, Ry);
    __publicField(this, _M, pS);
    __publicField(this, "_fiberRefs");
    __publicField(this, "_fiberId");
    __publicField(this, "_queue", new Array());
    __publicField(this, "_children", null);
    __publicField(this, "_observers", new Array());
    __publicField(this, "_running", false);
    __publicField(this, "_stack", []);
    __publicField(this, "_asyncInterruptor", null);
    __publicField(this, "_asyncBlockingOn", null);
    __publicField(this, "_exitValue", null);
    __publicField(this, "_steps", []);
    __publicField(this, "_isYielding", false);
    __publicField(this, "currentRuntimeFlags");
    __publicField(this, "currentOpCount", 0);
    __publicField(this, "currentSupervisor");
    __publicField(this, "currentScheduler");
    __publicField(this, "currentTracer");
    __publicField(this, "currentSpan");
    __publicField(this, "currentContext");
    __publicField(this, "currentDefaultServices");
    __publicField(this, "run", () => {
      this.drainQueueOnCurrentThread();
    });
    if (this.currentRuntimeFlags = r, this._fiberId = e, this._fiberRefs = n, fo(r)) {
      const s = this.getFiberRef(ws);
      uS.unsafeUpdate(1, s), Yo.unsafeUpdate(1, s);
    }
    this.refreshRefCache();
  }
  commit() {
    return Pu(this);
  }
  id() {
    return this._fiberId;
  }
  resume(e) {
    this.tell(ut(e));
  }
  get status() {
    return this.ask((e, n) => n);
  }
  get runtimeFlags() {
    return this.ask((e, n) => G_(n) ? e.currentRuntimeFlags : n.runtimeFlags);
  }
  scope() {
    return My(this);
  }
  get children() {
    return this.ask((e) => Array.from(e.getChildren()));
  }
  getChildren() {
    return this._children === null && (this._children = /* @__PURE__ */ new Set()), this._children;
  }
  getInterruptedCause() {
    return this.getFiberRef(jn);
  }
  fiberRefs() {
    return this.ask((e) => e.getFiberRefs());
  }
  ask(e) {
    return x(() => {
      const n = Bg(this._fiberId);
      return this.tell(Wn((r, s) => {
        Za(n, y(() => e(r, s)));
      })), Qa(n);
    });
  }
  tell(e) {
    this._queue.push(e), this._running || (this._running = true, this.drainQueueLaterOnExecutor());
  }
  get await() {
    return st((e) => {
      const n = (r) => e(F(r));
      return this.tell(Wn((r, s) => {
        r._exitValue !== null ? n(this._exitValue) : r.addObserver(n);
      })), y(() => this.tell(Wn((r, s) => {
        r.removeObserver(n);
      })));
    }, this.id());
  }
  get inheritAll() {
    return re((e, n) => {
      const r = e.id(), s = e.getFiberRefs(), i = n.runtimeFlags, o = this.getFiberRefs(), c = e_(s, r, o);
      e.setFiberRefs(c);
      const a = e.getFiberRef(nc), l = f(Jn(i, a), po(Dt), po(Ss));
      return ag(l);
    });
  }
  get poll() {
    return y(() => Qs(this._exitValue));
  }
  unsafePoll() {
    return this._exitValue;
  }
  interruptAsFork(e) {
    return y(() => this.tell(ts(qe(e))));
  }
  unsafeInterruptAsFork(e) {
    this.tell(ts(qe(e)));
  }
  addObserver(e) {
    this._exitValue !== null ? e(this._exitValue) : this._observers.push(e);
  }
  removeObserver(e) {
    this._observers = this._observers.filter((n) => n !== e);
  }
  getFiberRefs() {
    return this.setFiberRef(nc, this.currentRuntimeFlags), this._fiberRefs;
  }
  unsafeDeleteFiberRef(e) {
    this._fiberRefs = mu(this._fiberRefs, e);
  }
  getFiberRef(e) {
    return this._fiberRefs.locals.has(e) ? this._fiberRefs.locals.get(e)[0][1] : e.initial;
  }
  setFiberRef(e, n) {
    this._fiberRefs = $s(this._fiberRefs, { fiberId: this._fiberId, fiberRef: e, value: n }), this.refreshRefCache();
  }
  refreshRefCache() {
    this.currentDefaultServices = this.getFiberRef(fr), this.currentTracer = this.currentDefaultServices.unsafeMap.get(du.key), this.currentSupervisor = this.getFiberRef(MS), this.currentScheduler = this.getFiberRef(Nu), this.currentContext = this.getFiberRef(On), this.currentSpan = this.currentContext.unsafeMap.get(pu.key);
  }
  setFiberRefs(e) {
    this._fiberRefs = e, this.refreshRefCache();
  }
  addChild(e) {
    this.getChildren().add(e);
  }
  removeChild(e) {
    this.getChildren().delete(e);
  }
  transferChildren(e) {
    const n = this._children;
    if (this._children = null, n !== null && n.size > 0) for (const r of n) r._exitValue === null && e.add(this.currentRuntimeFlags, r);
  }
  drainQueueOnCurrentThread() {
    let e = true;
    for (; e; ) {
      let n = Zt;
      const r = globalThis[Ke];
      globalThis[Ke] = this;
      try {
        for (; n === Zt; ) n = this._queue.length === 0 ? dS : this.evaluateMessageWhileSuspended(this._queue.splice(0, 1)[0]);
      } finally {
        this._running = false, globalThis[Ke] = r;
      }
      this._queue.length > 0 && !this._running ? (this._running = true, n === Qo ? (this.drainQueueLaterOnExecutor(), e = false) : e = true) : e = false;
    }
  }
  drainQueueLaterOnExecutor() {
    this.currentScheduler.scheduleTask(this.run, this.getFiberRef(Ti));
  }
  drainQueueWhileRunning(e, n) {
    let r = n;
    for (; this._queue.length > 0; ) {
      const s = this._queue.splice(0, 1)[0];
      r = gS[s._tag](this, e, r, s);
    }
    return r;
  }
  isInterrupted() {
    return !Mp(this.getFiberRef(jn));
  }
  addInterruptedCause(e) {
    const n = this.getFiberRef(jn);
    this.setFiberRef(jn, ae(n, e));
  }
  processNewInterruptSignal(e) {
    this.addInterruptedCause(e), this.sendInterruptSignalToAllChildren();
  }
  sendInterruptSignalToAllChildren() {
    if (this._children === null || this._children.size === 0) return false;
    let e = false;
    for (const n of this._children) n.tell(ts(qe(this.id()))), e = true;
    return e;
  }
  interruptAllChildren() {
    if (this.sendInterruptSignalToAllChildren()) {
      const e = this._children.values();
      this._children = null;
      let n = false;
      return Ii({ while: () => !n, body: () => {
        const s = e.next();
        return s.done ? y(() => {
          n = true;
        }) : En(s.value.await);
      }, step: () => {
      } });
    }
    return null;
  }
  reportExitValue(e) {
    if (fo(this.currentRuntimeFlags)) {
      const n = this.getFiberRef(ws), r = this.id().startTimeMillis, s = Date.now();
      switch (hS.unsafeUpdate(s - r, n), Yo.unsafeUpdate(-1, n), e._tag) {
        case le: {
          lS.unsafeUpdate(1, n);
          break;
        }
        case ue: {
          fS.unsafeUpdate(1, n);
          break;
        }
      }
    }
    if (e._tag === "Failure") {
      const n = this.getFiberRef(Cg);
      !_i(e.cause) && n._tag === "Some" && this.log("Fiber terminated with an unhandled error", e.cause, n);
    }
  }
  setExitValue(e) {
    this._exitValue = e, this.reportExitValue(e);
    for (let n = this._observers.length - 1; n >= 0; n--) this._observers[n](e);
    this._observers = [];
  }
  getLoggers() {
    return this.getFiberRef(vS);
  }
  log(e, n, r) {
    const s = ve(r) ? r.value : this.getFiberRef(Og), i = this.getFiberRef(yS);
    if (m_(i, s)) return;
    const o = this.getFiberRef($g), c = this.getFiberRef(Eg), a = this.getLoggers(), l = this.getFiberRefs();
    if (Wc(a) > 0) {
      const d = Oc(this.getFiberRef(fr), Ci), h = new Date(d.unsafeCurrentTimeMillis());
      Ol(l, () => {
        for (const p of a) p.log({ fiberId: this.id(), logLevel: s, message: e, cause: n, context: l, spans: o, annotations: c, date: h });
      });
    }
  }
  evaluateMessageWhileSuspended(e) {
    switch (e._tag) {
      case Ui:
        return Qo;
      case qi:
        return this.processNewInterruptSignal(e.cause), this._asyncInterruptor !== null && (this._asyncInterruptor(C(e.cause)), this._asyncInterruptor = null), Zt;
      case Bi:
        return this._asyncInterruptor = null, this._asyncBlockingOn = null, this.evaluateEffect(e.effect), Zt;
      case Di:
        return e.onFiber(this, this._exitValue !== null ? H_ : J_(this.currentRuntimeFlags, this._asyncBlockingOn)), Zt;
      default:
        return Dn(e);
    }
  }
  evaluateEffect(e) {
    this.currentSupervisor.onResume(this);
    try {
      let n = je(this.currentRuntimeFlags) && this.isInterrupted() ? C(this.getInterruptedCause()) : e;
      for (; n !== null; ) {
        const r = n, s = this.runLoop(r);
        if (s === Te) {
          const i = Me.currentOp;
          Me.currentOp = null, i._op === Un ? op(this.currentRuntimeFlags) ? (this.tell(Ey()), this.tell(ut(ze)), n = null) : n = ze : i._op === nn && (n = null);
        } else {
          this.currentRuntimeFlags = f(this.currentRuntimeFlags, cp(Ss));
          const i = this.interruptAllChildren();
          i !== null ? n = b(i, () => s) : (this._queue.length === 0 ? this.setExitValue(s) : this.tell(ut(s)), n = null);
        }
      }
    } finally {
      this.currentSupervisor.onSuspend(this);
    }
  }
  start(e) {
    if (this._running) this.tell(ut(e));
    else {
      this._running = true;
      const n = globalThis[Ke];
      globalThis[Ke] = this;
      try {
        this.evaluateEffect(e);
      } finally {
        this._running = false, globalThis[Ke] = n, this._queue.length > 0 && this.drainQueueLaterOnExecutor();
      }
    }
  }
  startFork(e) {
    this.tell(ut(e));
  }
  patchRuntimeFlags(e, n) {
    const r = Gn(e, n);
    return globalThis[Ke] = this, this.currentRuntimeFlags = r, r;
  }
  initiateAsync(e, n) {
    let r = false;
    const s = (i) => {
      r || (r = true, this.tell(ut(i)));
    };
    je(e) && (this._asyncInterruptor = s);
    try {
      n(s);
    } catch (i) {
      s(me(Ae(i)));
    }
  }
  pushStack(e) {
    this._stack.push(e), e._op === "OnStep" && this._steps.push({ refs: this.getFiberRefs(), flags: this.currentRuntimeFlags });
  }
  popStack() {
    const e = this._stack.pop();
    if (e) return e._op === "OnStep" && this._steps.pop(), e;
  }
  getNextSuccessCont() {
    let e = this.popStack();
    for (; e; ) {
      if (e._op !== Jr) return e;
      e = this.popStack();
    }
  }
  getNextFailCont() {
    let e = this.popStack();
    for (; e; ) {
      if (e._op !== Qn && e._op !== Zn && e._op !== tn) return e;
      e = this.popStack();
    }
  }
  [(_N = Cy, _M = Ay, $l)](e) {
    return y(() => $c(this.currentContext, e));
  }
  Left(e) {
    return J(e.left);
  }
  None(e) {
    return J(new Wa());
  }
  Right(e) {
    return L(e.right);
  }
  Some(e) {
    return L(e.value);
  }
  Micro(e) {
    return ur((n) => {
      let r = n;
      const s = ky(py(e, this.currentContext));
      return s.addObserver((i) => {
        if (i._tag === "Success") return r(L(i.value));
        switch (i.cause._tag) {
          case "Interrupt":
            return r(C(qe(Tt)));
          case "Fail":
            return r(J(i.cause.error));
          case "Die":
            return r(So(i.cause.defect));
        }
      }), ur((i) => {
        r = (o) => {
          i(we);
        }, s.unsafeInterrupt();
      });
    });
  }
  [oc](e) {
    const n = G(() => e.effect_instruction_i0()), r = this.getNextSuccessCont();
    return r !== void 0 ? (r._op in Xt || Dn(r), Xt[r._op](this, r, n)) : (Me.currentOp = L(n), Te);
  }
  [le](e) {
    const n = e, r = this.getNextSuccessCont();
    return r !== void 0 ? (r._op in Xt || Dn(r), Xt[r._op](this, r, n.effect_instruction_i0)) : (Me.currentOp = n, Te);
  }
  [ue](e) {
    const n = e.effect_instruction_i0, r = this.getNextFailCont();
    if (r !== void 0) switch (r._op) {
      case Jr:
      case Xn:
        return je(this.currentRuntimeFlags) && this.isInterrupted() ? C(go(n)) : G(() => r.effect_instruction_i1(n));
      case "OnStep":
        return je(this.currentRuntimeFlags) && this.isInterrupted() ? C(go(n)) : L(C(n));
      case Ys:
        return this.patchRuntimeFlags(this.currentRuntimeFlags, r.patch), je(this.currentRuntimeFlags) && this.isInterrupted() ? C(ae(n, this.getInterruptedCause())) : C(n);
      default:
        Dn(r);
    }
    else return Me.currentOp = C(n), Te;
  }
  [ic](e) {
    return G(() => e.effect_instruction_i0(this, Eu(this.currentRuntimeFlags)));
  }
  Blocked(e) {
    const n = this.getFiberRefs(), r = this.currentRuntimeFlags;
    if (this._steps.length > 0) {
      const s = [], i = this._steps[this._steps.length - 1];
      let o = this.popStack();
      for (; o && o._op !== "OnStep"; ) s.push(o), o = this.popStack();
      this.setFiberRefs(i.refs), this.currentRuntimeFlags = i.flags;
      const c = P_(i.refs, n), a = Jn(i.flags, r);
      return L(Ta(e.effect_instruction_i0, re((l) => {
        for (; s.length > 0; ) l.pushStack(s.pop());
        return l.setFiberRefs(x_(l.id(), l.getFiberRefs())(c)), l.currentRuntimeFlags = Gn(a)(l.currentRuntimeFlags), e.effect_instruction_i1;
      })));
    }
    return Ar((s) => b(rl(Qp(e.effect_instruction_i0)), () => s(e.effect_instruction_i1)));
  }
  RunBlocked(e) {
    return mS(e.effect_instruction_i0);
  }
  [mn](e) {
    const n = e.effect_instruction_i0, r = this.currentRuntimeFlags, s = Gn(r, n);
    if (je(s) && this.isInterrupted()) return C(this.getInterruptedCause());
    if (this.patchRuntimeFlags(this.currentRuntimeFlags, n), e.effect_instruction_i1) {
      const i = Jn(s, r);
      return this.pushStack(new Zp(i, e)), G(() => e.effect_instruction_i1(r));
    } else return ze;
  }
  [Qn](e) {
    return this.pushStack(e), e.effect_instruction_i0;
  }
  OnStep(e) {
    return this.pushStack(e), e.effect_instruction_i0;
  }
  [Jr](e) {
    return this.pushStack(e), e.effect_instruction_i0;
  }
  [Xn](e) {
    return this.pushStack(e), e.effect_instruction_i0;
  }
  [nn](e) {
    return this._asyncBlockingOn = e.effect_instruction_i1, this.initiateAsync(this.currentRuntimeFlags, e.effect_instruction_i0), Me.currentOp = e, Te;
  }
  [Un](e) {
    return this._isYielding = false, Me.currentOp = e, Te;
  }
  [Zn](e) {
    const n = e.effect_instruction_i0, r = e.effect_instruction_i1;
    return n() ? (this.pushStack(e), r()) : ze;
  }
  [tn](e) {
    return Xt[tn](this, e, void 0);
  }
  [Gs](e) {
    return G(() => e.commit());
  }
  runLoop(e) {
    let n = e;
    for (this.currentOpCount = 0; ; ) {
      if ((this.currentRuntimeFlags & ip) !== 0 && this.currentSupervisor.onEffect(this, n), this._queue.length > 0 && (n = this.drainQueueWhileRunning(this.currentRuntimeFlags, n)), !this._isYielding) {
        this.currentOpCount += 1;
        const r = this.currentScheduler.shouldYield(this);
        if (r !== false) {
          this._isYielding = true, this.currentOpCount = 0;
          const s = n;
          n = b(Ei({ priority: r }), () => s);
        }
      }
      try {
        if (n = this.currentTracer.context(() => {
          if (_S !== n[Pt]._V) {
            const r = this.getFiberRef(Rg);
            if (r._tag === "Some") {
              const s = n[Pt]._V;
              this.log(`Executing an Effect versioned ${s} with a Runtime of version ${ac()}, you may want to dedupe the effect dependencies, you can use the language service plugin to detect this at compile time: https://github.com/Effect-TS/language-service`, Rt, r);
            }
          }
          return this[n._op](n);
        }, this), n === Te) {
          const r = Me.currentOp;
          return r._op === Un || r._op === nn ? Te : (Me.currentOp = null, r._op === le || r._op === ue ? r : C(Ae(r)));
        }
      } catch (r) {
        n !== Te && !T(n, "_op") || !(n._op in this) ? n = tg(`Not a valid effect: ${yt(n)}`) : Lg(r) ? n = C(ae(Ae(r), qe(Tt))) : n = So(r);
      }
    }
  }
}
const yS = M("effect/FiberRef/currentMinimumLogLevel", () => Z(__("Info"))), bS = (t) => Ki((e) => {
  const n = s_(e.context, fr);
  Oc(n, hu).unsafe.log(t.log(e));
}), SS = M(Symbol.for("effect/Logger/defaultLogger"), () => bS(By)), kS = M(Symbol.for("effect/Logger/tracerLogger"), () => Ki(({ annotations: t, cause: e, context: n, fiberId: r, logLevel: s, message: i }) => {
  const o = _n(pn(n, On), pu);
  if (o._tag === "None" || o.value._tag === "ExternalSpan") return;
  const c = $c(pn(n, fr), Ci), a = {};
  for (const [l, d] of t) a[l] = d;
  a["effect.fiberId"] = Jh(r), a["effect.logLevel"] = s.label, e !== null && e._tag !== "Empty" && (a["effect.cause"] = vn(e, { renderErrorCause: true })), o.value.event(yt(Array.isArray(i) && i.length === 1 ? i[0] : i), c.unsafeCurrentTimeNanos(), a);
})), vS = M(Symbol.for("effect/FiberRef/currentLoggers"), () => kg(hi(SS, kS))), wS = u((t) => Ml(t[0]), (t, e, n) => re((r) => {
  const s = (n == null ? void 0 : n.batching) === true || (n == null ? void 0 : n.batching) === "inherit" && r.getFiberRef(Fg);
  return (n == null ? void 0 : n.discard) ? Ho(n.concurrency, () => lt(Fs, n == null ? void 0 : n.concurrentFinalizers)((i) => s ? Xe(t, (o, c) => i(e(o, c)), true, false, 1) : Nr(t, (o, c) => i(e(o, c)))), () => lt(Cs, n == null ? void 0 : n.concurrentFinalizers)((i) => Xe(t, (o, c) => i(e(o, c)), s, false)), (i) => lt(Rs(i), n == null ? void 0 : n.concurrentFinalizers)((o) => Xe(t, (c, a) => o(e(c, a)), s, false, i))) : Ho(n == null ? void 0 : n.concurrency, () => lt(Fs, n == null ? void 0 : n.concurrentFinalizers)((i) => s ? Zo(t, 1, (o, c) => i(e(o, c)), true) : De(t, (o, c) => i(e(o, c)))), () => lt(Cs, n == null ? void 0 : n.concurrentFinalizers)((i) => IS(t, (o, c) => i(e(o, c)), s)), (i) => lt(Rs(i), n == null ? void 0 : n.concurrentFinalizers)((o) => Zo(t, i, (c, a) => o(e(c, a)), s)));
})), IS = (t, e, n) => x(() => {
  const r = q(t), s = new Array(r.length);
  return Pr(Xe(r, (o, c) => b(e(o, c), (a) => y(() => s[c] = a)), n, false), F(s));
}), Xe = (t, e, n, r, s) => Ar((i) => cg((o) => re((c) => {
  let a = Array.from(t).reverse(), l = a.length;
  if (l === 0) return we;
  let d = 0, h = false;
  const p = s ? Math.min(a.length, s) : a.length, g = /* @__PURE__ */ new Set(), m = new Array(), I = () => g.forEach((N) => {
    N.currentScheduler.scheduleTask(() => {
      N.unsafeInterruptAsFork(c.id());
    }, 0);
  }), R = new Array(), K = new Array(), H = new Array(), Ee = () => {
    const N = m.filter(({ exit: X }) => X._tag === "Failure").sort((X, _e2) => X.index < _e2.index ? -1 : X.index === _e2.index ? 0 : 1).map(({ exit: X }) => X);
    return N.length === 0 && N.push(ze), N;
  }, ie = (N, X = false) => {
    const _e2 = qa(o(N)), Y = OS(_e2, c, c.currentRuntimeFlags, Vi);
    return c.currentScheduler.scheduleTask(() => {
      X && Y.unsafeInterruptAsFork(c.id()), Y.resume(_e2);
    }, 0), Y;
  }, Jt = () => {
    r || (l -= a.length, a = []), h = true, I();
  }, Oe = n ? sg : Na, Rn = ie(st((N) => {
    const X = (Y, $e) => {
      Y._op === "Blocked" ? H.push(Y) : (m.push({ index: $e, exit: Y }), Y._op === "Failure" && !h && Jt());
    }, _e2 = () => {
      if (a.length > 0) {
        const Y = a.pop();
        let $e = d++;
        const Nn = () => {
          const oe = a.pop();
          return $e = d++, b(Ei(), () => b(Oe(i(e(oe, $e))), Ve));
        }, Ve = (oe) => a.length > 0 && (X(oe, $e), a.length > 0) ? Nn() : F(oe), An = b(Oe(i(e(Y, $e))), Ve), ye = ie(An);
        R.push(ye), g.add(ye), h && ye.currentScheduler.scheduleTask(() => {
          ye.unsafeInterruptAsFork(c.id());
        }, 0), ye.addObserver((oe) => {
          let Gt;
          if (oe._op === "Failure" ? Gt = oe : Gt = oe.effect_instruction_i0, K.push(ye), g.delete(ye), X(Gt, $e), m.length === l) N(F(_t(Eo(Ee(), { parallel: true }), () => ze)));
          else if (H.length + m.length === l) {
            const Wi = Ee(), il = H.map((zt) => zt.effect_instruction_i0).reduce(ya);
            N(F(Ta(il, Xe([_t(Eo(Wi, { parallel: true }), () => ze), ...H.map((zt) => zt.effect_instruction_i1)], (zt) => zt, n, true, s))));
          } else _e2();
        });
      }
    };
    for (let Y = 0; Y < p; Y++) _e2();
  }));
  return En(wi(Pa(i(Pu(Rn))), Ya({ onFailure: (N) => {
    Jt();
    const X = H.length + 1, _e2 = Math.min(typeof s == "number" ? s : H.length, H.length), Y = Array.from(H);
    return st(($e) => {
      let Nn = 0, Ve = 0;
      const An = (oe, Gt) => (Wi) => {
        Nn++, Nn === X && $e(L(C(N))), Y.length > 0 && Gt && ye();
      }, ye = () => {
        ie(Y.pop(), true).addObserver(An(Ve, true)), Ve++;
      };
      Rn.addObserver(An(Ve, false)), Ve++;
      for (let oe = 0; oe < _e2; oe++) ye();
    });
  }, onSuccess: () => De(K, (N) => N.inheritAll) })));
}))), Zo = (t, e, n, r) => x(() => {
  const s = q(t), i = new Array(s.length);
  return Pr(Xe(s, (c, a) => ee(n(c, a), (l) => i[a] = l), r, false, e), F(i));
}), rl = (t) => $S(t, Vi), ES = (t, e, n, r = null) => {
  const s = sl(t, e, n, r);
  return s.resume(t), s;
}, OS = (t, e, n, r = null) => sl(t, e, n, r), sl = (t, e, n, r = null) => {
  const s = ta(), i = e.getFiberRefs(), o = t_(i, s), c = new nl(s, o, n), a = pn(o, On), l = c.currentSupervisor;
  return l.onStart(a, t, O(e), c), c.addObserver((h) => l.onEnd(h, c)), (r !== null ? r : f(e.getFiberRef(Is), _t(() => e.scope()))).add(n, c), c;
}, $S = (t, e) => re((n, r) => F(ES(t, n, r.runtimeFlags, e))), Xo = (t) => $n((e) => ct(_n(e, Cn), { onNone: () => t, onSome: (n) => {
  switch (n.strategy._tag) {
    case "Parallel":
      return t;
    case "Sequential":
    case "ParallelN":
      return b(Lr(n, Cs), (r) => Gi(t, r));
  }
} })), ec = (t) => (e) => $n((n) => ct(_n(n, Cn), { onNone: () => e, onSome: (r) => r.strategy._tag === "ParallelN" && r.strategy.parallelism === t ? e : b(Lr(r, Rs(t)), (s) => Gi(e, s)) })), lt = (t, e) => (n) => $n((r) => ct(_n(r, Cn), { onNone: () => n(j), onSome: (s) => {
  if (e === true) {
    const i = t._tag === "Parallel" ? Xo : t._tag === "Sequential" ? tc : ec(t.parallelism);
    switch (s.strategy._tag) {
      case "Parallel":
        return i(n(Xo));
      case "Sequential":
        return i(n(tc));
      case "ParallelN":
        return i(n(ec(s.strategy.parallelism)));
    }
  } else return n(j);
} })), tc = (t) => $n((e) => ct(_n(e, Cn), { onNone: () => t, onSome: (n) => {
  switch (n.strategy._tag) {
    case "Sequential":
      return t;
    case "Parallel":
    case "ParallelN":
      return b(Lr(n, Fs), (r) => Gi(t, r));
  }
} })), Cn = at("effect/Scope"), Gi = u(2, (t, e) => Jg(t, Tc(Tf(Cn, e)))), TS = (t) => Kt(t, { differ: aS, fork: on }), nc = wg(ap), MS = TS(Hr), FS = (t, e, n) => Aa((r) => b(b(rl(xa(t)), (s) => st((i) => {
  const o = e.map((l) => l.listeners.count), c = () => {
    o.every((l) => l === 0) && e.every((l) => l.result.state.current._tag === "Pending" ? true : !!(l.result.state.current._tag === "Done" && jr(l.result.state.current.effect) && l.result.state.current.effect._tag === "Failure" && Fp(l.result.state.current.effect.cause))) && (a.forEach((l) => l()), n == null ? void 0 : n(), i(fg(s)));
  };
  s.addObserver((l) => {
    a.forEach((d) => d()), i(l);
  });
  const a = e.map((l, d) => {
    const h = (p) => {
      o[d] = p, c();
    };
    return l.listeners.addObserver(h), () => l.listeners.removeObserver(h);
  });
  return c(), y(() => {
    a.forEach((l) => l());
  });
})), () => x(() => {
  const s = e.flatMap((i) => i.state.completed ? [] : [i]);
  return Nr(s, (i) => eS(i.request, jg(r)));
}))), CS = Ag, RS = Lr, zi = (t) => function() {
  if (arguments.length === 1) {
    const e = arguments[0];
    return (n, ...r) => t(e, n, ...r);
  }
  return t.apply(this, arguments);
}, NS = zi((t, e, n) => {
  const r = ta(), s = [[On, [[r, t.context]]]];
  (n == null ? void 0 : n.scheduler) && s.push([Nu, [[r, n.scheduler]]]);
  let i = i_(t.fiberRefs, { entries: s, forkAs: r });
  (n == null ? void 0 : n.updateRefs) && (i = n.updateRefs(i, r));
  const o = new nl(r, i, t.runtimeFlags);
  let c = e;
  (n == null ? void 0 : n.scope) && (c = b(RS(n.scope, Iu), (l) => Pr(Ng(l, Aa((d) => v(d, o.id()) ? we : Ua(o, d))), wi(e, (d) => CS(l, d)))));
  const a = o.currentSupervisor;
  return a !== Hr && (a.onStart(t.context, c, k(), o), o.addObserver((l) => a.onEnd(l, o))), Vi.add(t.runtimeFlags, o), (n == null ? void 0 : n.immediate) === false ? o.resume(c) : o.start(c), o;
}), ns = Symbol.for("effect/Runtime/FiberFailure"), Bn = Symbol.for("effect/Runtime/FiberFailure/Cause");
class AS extends Error {
  constructor(e) {
    const n = Oa(e)[0];
    super((n == null ? void 0 : n.message) || "An error has occurred");
    __publicField(this, _P);
    __publicField(this, _O);
    this[ns] = ns, this[Bn] = e, this.name = n ? `(FiberFailure) ${n.name}` : "FiberFailure", (n == null ? void 0 : n.stack) && (this.stack = n.stack);
  }
  toJSON() {
    return { _id: "FiberFailure", cause: this[Bn].toJSON() };
  }
  toString() {
    return "(FiberFailure) " + vn(this[Bn], { renderErrorCause: true });
  }
  [(_P = ns, _O = Bn, A)]() {
    return this.toString();
  }
}
const PS = (t) => {
  const e = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  const n = new AS(t);
  return Error.stackTraceLimit = e, n;
}, xS = (t) => {
  const e = t;
  switch (e._op) {
    case "Failure":
    case "Success":
      return e;
    case "Left":
      return Oo(e.left);
    case "Right":
      return L(e.right);
    case "Some":
      return L(e.value);
    case "None":
      return Oo(new Wa());
  }
}, LS = zi((t, e, n) => jS(t, e, n).then((r) => {
  switch (r._tag) {
    case le:
      return r.effect_instruction_i0;
    case ue:
      throw PS(r.effect_instruction_i0);
  }
})), jS = zi((t, e, n) => new Promise((r) => {
  const s = xS(e);
  s && r(s);
  const i = NS(t)(e);
  i.addObserver((o) => {
    r(o);
  }), (n == null ? void 0 : n.signal) !== void 0 && (n.signal.aborted ? i.unsafeInterruptAsFork(i.id()) : n.signal.addEventListener("abort", () => {
    i.unsafeInterruptAsFork(i.id());
  }, { once: true }));
}));
class qS {
  constructor(e, n, r) {
    __publicField(this, "context");
    __publicField(this, "runtimeFlags");
    __publicField(this, "fiberRefs");
    this.context = e, this.runtimeFlags = n, this.fiberRefs = r;
  }
  pipe() {
    return S(this, arguments);
  }
}
const DS = (t) => new qS(t.context, t.runtimeFlags, t.fiberRefs), BS = ma(Dt, pa, da), US = DS({ context: ni(), runtimeFlags: BS, fiberRefs: o_() }), VS = LS(US), GS = wS, zS = J, KS = lg, WS = F, YS = T_, QS = M_, ZS = VS, XS = Sr(), ek = Sr(), tk = Sr(), nk = Sr(), rk = (t, e, n) => KS(function* () {
  const r = t.books.find((i) => i.name._tag === e._tag);
  if (!r) return k();
  const s = r.chapters.find((i) => i.chapter === n);
  return s ? O(s) : k();
});
export {
  ek as B,
  tk as C,
  XS as T,
  nk as V,
  KS as a,
  zS as b,
  QS as c,
  GS as f,
  rk as g,
  ZS as r,
  WS as s,
  YS as t
};
