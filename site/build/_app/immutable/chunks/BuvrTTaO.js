var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a2, _b2, _c2, _d2, _e, _f2, _g2, _h2, _i2, _j, _k, _l2, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t2, _u2, _v, _w, _x, _y2, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P;
import { d as u, E as Vs, b as z, c as O, e as E, h as _, f as w, g as $, j as v, k as W, N as A, l as j, m as nc, s as M, n as k, i as ve, p as S, o as B, q as ol, r as yr, u as T, v as Wi, w as cl, x as gn, y as ns, z as al, A as ul, C as ll, D as rc, a as Re, F as f, G as se, S as sc, H as fl, I as ct, J as hl, K as dl, L as Yi, M as rs, O as pl, P as gl, Q as He, R as Ks, T as Hs, U as ml, Y as br, V as tn, W as Qn, X as ue, Z as le, _ as Js, $ as Gs, a0 as zs, a1 as ic, a2 as _l, a3 as oc, a4 as Zn, a5 as nn, a6 as Bn, a7 as mn, a8 as yl, a9 as Xn, aa as G, ab as _t, ac as cc, ad as bl, ae as Sl, af as kl, ag as vl, ah as wl, ai as Il, aj as yt, ak as Ws, al as El, am as Hr, an as Ol, ao as ac, ap as $l, aq as Ml } from "./Btl_48n0.js";
const Ys = (t) => (e, n) => e === n || t(e, n), Tl = u(2, (t, e) => Ys((n, r) => t(e(n), e(r)))), Fl = (t) => Ys((e, n) => {
  if (e.length !== n.length) return false;
  for (let r = 0; r < e.length; r++) if (!t(e[r], n[r])) return false;
  return true;
}), uc = Symbol.for("effect/Either"), lc = { ...Vs, [uc]: { _R: (t) => t }, [A]() {
  return this.toJSON();
}, toString() {
  return W(this.toJSON());
} }, Cl = Object.assign(Object.create(lc), { _tag: "Right", _op: "Right", [w](t) {
  return fc(t) && dc(t) && v(this.right, t.right);
}, [O]() {
  return E(_(this._tag))(_(this.right));
}, toJSON() {
  return { _id: "Either", _tag: this._tag, right: z(this.right) };
} }), Rl = Object.assign(Object.create(lc), { _tag: "Left", _op: "Left", [w](t) {
  return fc(t) && hc(t) && v(this.left, t.left);
}, [O]() {
  return E(_(this._tag))(_(this.left));
}, toJSON() {
  return { _id: "Either", _tag: this._tag, left: z(this.left) };
} }), fc = (t) => $(t, uc), hc = (t) => t._tag === "Left", dc = (t) => t._tag === "Right", Nl = (t) => {
  const e = Object.create(Rl);
  return e.left = t, e;
}, Al = (t) => {
  const e = Object.create(Cl);
  return e.right = t, e;
}, Fe = Al, bt = Nl, en = hc, Pn = dc, Pl = u(2, (t, { onLeft: e, onRight: n }) => en(t) ? e(t.left) : n(t.right)), xl = Pl({ onLeft: j, onRight: j }), pc = (t) => t.length > 0, gc = (t) => (e, n) => e === n ? 0 : t(e, n), Ll = gc((t, e) => t < e ? -1 : 1), jl = u(2, (t, e) => gc((n, r) => t(e(n), e(r)))), ql = (t) => u(2, (e, n) => t(e, n) === 1), Dl = (...t) => t, Qs = (t) => new Array(t), Ul = u(2, (t, e) => {
  const n = Math.max(1, Math.floor(t)), r = new Array(n);
  for (let s = 0; s < n; s++) r[s] = e(s);
  return r;
}), q = (t) => Array.isArray(t) ? t : Array.from(t), Bl = (t) => Array.isArray(t) ? t : [t], er = u(2, (t, e) => [e, ...t]), Vl = u(2, (t, e) => [...t, e]), mc = u(2, (t, e) => q(t).concat(q(e))), Kl = (t) => t.length === 0, Hl = Kl, Jl = pc, te = pc, _c = (t, e) => t < 0 || t >= e.length, Gl = (t, e) => Math.floor(Math.min(Math.max(0, t), e.length)), zl = u(2, (t, e) => {
  const n = Math.floor(e);
  return _c(n, t) ? k() : M(t[n]);
}), yc = u(2, (t, e) => {
  const n = Math.floor(e);
  if (_c(n, t)) throw new Error(`Index ${n} out of bounds`);
  return t[n];
}), rn = zl(0), Q = yc(0), Wl = (t) => te(t) ? M(bc(t)) : k(), bc = (t) => t[t.length - 1], St = (t) => t.slice(1), Yl = (t, e) => {
  let n = 0;
  for (const r of t) {
    if (!e(r, n)) break;
    n++;
  }
  return n;
}, Ql = u(2, (t, e) => tf(t, Yl(t, e))), Zl = u(2, (t, e) => {
  const n = q(t);
  return n.slice(Gl(e, n), n.length);
}), Qi = (t) => Array.from(t).reverse(), tr = u(2, (t, e) => {
  const n = Array.from(t);
  return n.sort(e), n;
}), Zi = u(2, (t, e) => Xl(t, e, Dl)), Xl = u(3, (t, e, n) => {
  const r = q(t), s = q(e);
  if (te(r) && te(s)) {
    const i = [n(Q(r), Q(s))], o = Math.min(r.length, s.length);
    for (let c = 1; c < o; c++) i[c] = n(r[c], s[c]);
    return i;
  }
  return [];
}), ef = nc(), tf = u(2, (t, e) => {
  const n = Array.from(t), r = Math.floor(e);
  return te(n) ? r >= 1 ? nf(n, r) : [[], n] : [n, []];
}), nf = u(2, (t, e) => {
  const n = Math.max(1, Math.floor(e));
  return n >= t.length ? [rf(t), []] : [er(t.slice(1, n), Q(t)), t.slice(n)];
}), rf = (t) => t.slice(), sf = u(3, (t, e, n) => {
  const r = q(t), s = q(e);
  return te(r) ? te(s) ? kc(n)(mc(r, s)) : r : s;
}), Vn = u(2, (t, e) => sf(t, e, ef)), kt = () => [], fe = (t) => [t], ht = u(2, (t, e) => t.map(e)), of = u(2, (t, e) => {
  if (Hl(t)) return [];
  const n = [];
  for (let r = 0; r < t.length; r++) {
    const s = e(t[r], r);
    for (let i = 0; i < s.length; i++) n.push(s[i]);
  }
  return n;
}), cf = of(j), Sc = u(3, (t, e, n) => q(t).reduce((r, s, i) => n(r, s, i), e)), Xi = (t, e) => {
  const n = [];
  let r = t, s;
  for (; ve(s = e(r)); ) {
    const [i, o] = s.value;
    n.push(i), r = o;
  }
  return n;
}, Zs = Fl, kc = u(2, (t, e) => {
  const n = q(t);
  if (te(n)) {
    const r = [Q(n)], s = St(n);
    for (const i of s) r.every((o) => !e(i, o)) && r.push(i);
    return r;
  }
  return [];
}), af = (t) => kc(t, nc()), jt = u(2, (t, e) => q(t).join(e)), cn = Ll, uf = (t) => t.replace(/[/\\^$*+?.()|[\]{}]/g, "\\$&"), lf = Symbol.for("effect/Context/Tag"), nr = Symbol.for("effect/Context/Reference"), ff = "effect/STM", hf = Symbol.for(ff), vc = { ...Vs, _op: "Tag", [hf]: yr, [lf]: { _Service: (t) => t, _Identifier: (t) => t }, toString() {
  return W(this.toJSON());
}, toJSON() {
  return { _id: "Tag", key: this.key, stack: this.stack };
}, [A]() {
  return this.toJSON();
}, of(t) {
  return t;
}, context(t) {
  return Ic(this, t);
} }, df = { ...vc, [nr]: nr }, pf = (t) => {
  const e = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  const n = new Error();
  Error.stackTraceLimit = e;
  const r = Object.create(vc);
  return Object.defineProperty(r, "stack", { get() {
    return n.stack;
  } }), r.key = t, r;
}, gf = () => (t, e) => {
  const n = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  const r = new Error();
  Error.stackTraceLimit = n;
  function s() {
  }
  return Object.setPrototypeOf(s, df), s.key = t, s.defaultValue = e.defaultValue, Object.defineProperty(s, "stack", { get() {
    return r.stack;
  } }), s;
}, wc = Symbol.for("effect/Context"), mf = { [wc]: { _Services: (t) => t }, [w](t) {
  if (yf(t) && this.unsafeMap.size === t.unsafeMap.size) {
    for (const e of this.unsafeMap.keys()) if (!t.unsafeMap.has(e) || !v(this.unsafeMap.get(e), t.unsafeMap.get(e))) return false;
    return true;
  }
  return false;
}, [O]() {
  return B(this, ol(this.unsafeMap.size));
}, pipe() {
  return S(this, arguments);
}, toString() {
  return W(this.toJSON());
}, toJSON() {
  return { _id: "Context", services: Array.from(this.unsafeMap).map(z) };
}, [A]() {
  return this.toJSON();
} }, vt = (t) => {
  const e = Object.create(mf);
  return e.unsafeMap = t, e;
}, _f = (t) => {
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
}, yf = (t) => $(t, wc), bf = (t) => $(t, nr), Sf = vt(/* @__PURE__ */ new Map()), kf = () => Sf, Ic = (t, e) => vt(/* @__PURE__ */ new Map([[t.key, e]])), vf = u(3, (t, e, n) => {
  const r = new Map(t.unsafeMap);
  return r.set(e.key, n), vt(r);
}), Jr = T("effect/Context/defaultValueCache", () => /* @__PURE__ */ new Map()), Xs = (t) => {
  if (Jr.has(t.key)) return Jr.get(t.key);
  const e = t.defaultValue();
  return Jr.set(t.key, e), e;
}, wf = (t, e) => t.unsafeMap.has(e.key) ? t.unsafeMap.get(e.key) : Xs(e), Ec = u(2, (t, e) => {
  if (!t.unsafeMap.has(e.key)) {
    if (nr in e) return Xs(e);
    throw _f(e);
  }
  return t.unsafeMap.get(e.key);
}), If = Ec, Ef = u(2, (t, e) => t.unsafeMap.has(e.key) ? Wi(t.unsafeMap.get(e.key)) : bf(e) ? Wi(Xs(e)) : cl), Of = u(2, (t, e) => {
  const n = new Map(t.unsafeMap);
  for (const [r, s] of e.unsafeMap) n.set(r, s);
  return vt(n);
}), at = pf, ei = kf, $f = Ic, Wt = vf, Oc = If, $c = Ec, _n = Ef, Mc = Of, Tc = gf, Fc = Symbol.for("effect/Chunk");
function Mf(t, e, n, r, s) {
  for (let i = e; i < Math.min(t.length, e + s); i++) n[r + i - e] = t[i];
  return n;
}
const Cc = [], Tf = (t) => Ys((e, n) => e.length === n.length && Qe(e).every((r, s) => t(r, dt(n, s)))), Ff = Tf(v), Cf = { [Fc]: { _A: (t) => t }, toString() {
  return W(this.toJSON());
}, toJSON() {
  return { _id: "Chunk", values: Qe(this).map(z) };
}, [A]() {
  return this.toJSON();
}, [w](t) {
  return Rc(t) && Ff(this, t);
}, [O]() {
  return B(this, gn(Qe(this)));
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
  const e = Object.create(Cf);
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
}, Rc = (t) => $(t, Fc), ke = D({ _tag: "IEmpty" }), Pe = () => ke, Gr = (...t) => Af(t), ne = (t) => D({ _tag: "ISingleton", a: t }), Nc = (t) => Rc(t) ? t : Sr(q(t)), ss = (t, e, n) => {
  switch (t.backing._tag) {
    case "IArray": {
      Mf(t.backing.array, 0, e, n, t.length);
      break;
    }
    case "IConcat": {
      ss(t.left, e, n), ss(t.right, e, n + t.left.length);
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
}, Rf = (t) => {
  switch (t.backing._tag) {
    case "IEmpty":
      return Cc;
    case "IArray":
      return t.backing.array;
    default: {
      const e = new Array(t.length);
      return ss(t, e, 0), t.backing = { _tag: "IArray", array: e }, t.left = ke, t.right = ke, t.depth = 0, e;
    }
  }
}, Qe = Rf, Nf = (t) => {
  switch (t.backing._tag) {
    case "IEmpty":
    case "ISingleton":
      return t;
    case "IArray":
      return D({ _tag: "IArray", array: Qi(t.backing.array) });
    case "IConcat":
      return D({ _tag: "IConcat", left: wt(t.backing.right), right: wt(t.backing.left) });
    case "ISlice":
      return Sr(Qi(Qe(t)));
  }
}, wt = Nf, Sr = (t) => t.length === 0 ? Pe() : t.length === 1 ? ne(t[0]) : D({ _tag: "IArray", array: t }), Af = (t) => Sr(t), dt = u(2, (t, e) => {
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
}), Pf = u(2, (t, e) => he(t, ne(e))), ge = u(2, (t, e) => he(ne(e), t)), is = u(2, (t, e) => {
  if (e <= 0) return t;
  if (e >= t.length) return ke;
  switch (t.backing._tag) {
    case "ISlice":
      return D({ _tag: "ISlice", chunk: t.backing.chunk, offset: t.backing.offset + e, length: t.backing.length - e });
    case "IConcat":
      return e > t.left.length ? is(t.right, e - t.left.length) : D({ _tag: "IConcat", left: is(t.left, e), right: t.right });
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
}), xf = (t) => t.length === 0, It = (t) => t.length > 0, Ac = (t) => dt(t, 0), Et = Ac, Ge = (t) => is(t, 1), os = Symbol.for("effect/Duration"), Pc = BigInt(0), eo = BigInt(24), xn = BigInt(60), cs = BigInt(1e3), to = BigInt(1e6), no = BigInt(1e9), Lf = /^(-?\d+(?:\.\d+)?)\s+(nanos?|micros?|millis?|seconds?|minutes?|hours?|days?|weeks?)$/, xe = (t) => {
  if (xc(t)) return t;
  if (ns(t)) return as(t);
  if (al(t)) return zr(t);
  if (Array.isArray(t) && t.length === 2 && t.every(ns)) return t[0] === -1 / 0 || t[1] === -1 / 0 || Number.isNaN(t[0]) || Number.isNaN(t[1]) ? Lc : t[0] === 1 / 0 || t[1] === 1 / 0 ? Uf : zr(BigInt(Math.round(t[0] * 1e9)) + BigInt(Math.round(t[1])));
  if (ul(t)) {
    const e = Lf.exec(t);
    if (e) {
      const [n, r, s] = e, i = Number(r);
      switch (s) {
        case "nano":
        case "nanos":
          return zr(BigInt(r));
        case "micro":
        case "micros":
          return Bf(BigInt(r));
        case "milli":
        case "millis":
          return as(i);
        case "second":
        case "seconds":
          return Vf(i);
        case "minute":
        case "minutes":
          return Kf(i);
        case "hour":
        case "hours":
          return Hf(i);
        case "day":
        case "days":
          return Jf(i);
        case "week":
        case "weeks":
          return Gf(i);
      }
    }
  }
  throw new Error("Invalid DurationInput");
}, ro = { _tag: "Millis", millis: 0 }, jf = { _tag: "Infinity" }, qf = { [os]: os, [O]() {
  return B(this, ll(this.value));
}, [w](t) {
  return xc(t) && eh(this, t);
}, toString() {
  return `Duration(${nh(this)})`;
}, toJSON() {
  switch (this.value._tag) {
    case "Millis":
      return { _id: "Duration", _tag: "Millis", millis: this.value.millis };
    case "Nanos":
      return { _id: "Duration", _tag: "Nanos", hrtime: Wf(this) };
    case "Infinity":
      return { _id: "Duration", _tag: "Infinity" };
  }
}, [A]() {
  return this.toJSON();
}, pipe() {
  return S(this, arguments);
} }, Ie = (t) => {
  const e = Object.create(qf);
  return ns(t) ? isNaN(t) || t <= 0 ? e.value = ro : Number.isFinite(t) ? Number.isInteger(t) ? e.value = { _tag: "Millis", millis: t } : e.value = { _tag: "Nanos", nanos: BigInt(Math.round(t * 1e6)) } : e.value = jf : t <= Pc ? e.value = ro : e.value = { _tag: "Nanos", nanos: t }, e;
}, xc = (t) => $(t, os), Df = (t) => {
  switch (t.value._tag) {
    case "Millis":
      return t.value.millis === 0;
    case "Nanos":
      return t.value.nanos === Pc;
    case "Infinity":
      return false;
  }
}, Lc = Ie(0), Uf = Ie(1 / 0), zr = (t) => Ie(t), Bf = (t) => Ie(t * cs), as = (t) => Ie(t), Vf = (t) => Ie(t * 1e3), Kf = (t) => Ie(t * 6e4), Hf = (t) => Ie(t * 36e5), Jf = (t) => Ie(t * 864e5), Gf = (t) => Ie(t * 6048e5), us = (t) => Yf(t, { onMillis: (e) => e, onNanos: (e) => Number(e) / 1e6 }), zf = (t) => {
  const e = xe(t);
  switch (e.value._tag) {
    case "Infinity":
      throw new Error("Cannot convert infinite duration to nanos");
    case "Nanos":
      return e.value.nanos;
    case "Millis":
      return BigInt(Math.round(e.value.millis * 1e6));
  }
}, Wf = (t) => {
  const e = xe(t);
  switch (e.value._tag) {
    case "Infinity":
      return [1 / 0, 0];
    case "Nanos":
      return [Number(e.value.nanos / no), Number(e.value.nanos % no)];
    case "Millis":
      return [Math.floor(e.value.millis / 1e3), Math.round(e.value.millis % 1e3 * 1e6)];
  }
}, Yf = u(2, (t, e) => {
  const n = xe(t);
  switch (n.value._tag) {
    case "Nanos":
      return e.onNanos(n.value.nanos);
    case "Infinity":
      return e.onMillis(1 / 0);
    case "Millis":
      return e.onMillis(n.value.millis);
  }
}), ti = u(3, (t, e, n) => {
  const r = xe(t), s = xe(e);
  if (r.value._tag === "Infinity" || s.value._tag === "Infinity") return n.onMillis(us(r), us(s));
  if (r.value._tag === "Nanos" || s.value._tag === "Nanos") {
    const i = r.value._tag === "Nanos" ? r.value.nanos : BigInt(Math.round(r.value.millis * 1e6)), o = s.value._tag === "Nanos" ? s.value.nanos : BigInt(Math.round(s.value.millis * 1e6));
    return n.onNanos(i, o);
  }
  return n.onMillis(r.value.millis, s.value.millis);
}), Qf = (t, e) => ti(t, e, { onMillis: (n, r) => n === r, onNanos: (n, r) => n === r }), Zf = u(2, (t, e) => ti(t, e, { onMillis: (n, r) => n <= r, onNanos: (n, r) => n <= r })), Xf = u(2, (t, e) => ti(t, e, { onMillis: (n, r) => n >= r, onNanos: (n, r) => n >= r })), eh = u(2, (t, e) => Qf(xe(t), xe(e))), th = (t) => {
  const e = xe(t);
  if (e.value._tag === "Infinity") return { days: 1 / 0, hours: 1 / 0, minutes: 1 / 0, seconds: 1 / 0, millis: 1 / 0, nanos: 1 / 0 };
  const n = zf(e), r = n / to, s = r / cs, i = s / xn, o = i / xn, c = o / eo;
  return { days: Number(c), hours: Number(o % eo), minutes: Number(i % xn), seconds: Number(s % xn), millis: Number(r % cs), nanos: Number(n % to) };
}, nh = (t) => {
  const e = xe(t);
  if (e.value._tag === "Infinity") return "Infinity";
  if (Df(e)) return "0";
  const n = th(e), r = [];
  return n.days !== 0 && r.push(`${n.days}d`), n.hours !== 0 && r.push(`${n.hours}h`), n.minutes !== 0 && r.push(`${n.minutes}m`), n.seconds !== 0 && r.push(`${n.seconds}s`), n.millis !== 0 && r.push(`${n.millis}ms`), n.nanos !== 0 && r.push(`${n.nanos}ns`), r.join(" ");
}, et = 5, ni = Math.pow(2, et), rh = ni - 1, sh = ni / 2, ih = ni / 4;
function oh(t) {
  return t -= t >> 1 & 1431655765, t = (t & 858993459) + (t >> 2 & 858993459), t = t + (t >> 4) & 252645135, t += t >> 8, t += t >> 16, t & 127;
}
function Ot(t, e) {
  return e >>> t & rh;
}
function ft(t) {
  return 1 << t;
}
function jc(t, e) {
  return oh(t & e - 1);
}
const ch = (t, e) => ({ value: t, previous: e });
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
function ah(t, e, n, r) {
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
class Ue {
  constructor() {
    __publicField(this, "_tag", "EmptyNode");
  }
  modify(e, n, r, s, i, o) {
    const c = r(k());
    return Re(c) ? new Ue() : (++o.value, new Ze(e, s, i, c));
  }
}
function de(t) {
  return rc(t, "EmptyNode");
}
function uh(t) {
  return de(t) || t._tag === "LeafNode" || t._tag === "CollisionNode";
}
function kr(t, e) {
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
      return a === this.value ? this : Re(a) ? (--o.value, new Ue()) : kr(this, e) ? (this.value = a, this) : new Ze(e, s, i, a);
    }
    const c = r(k());
    return Re(c) ? this : (++o.value, Dc(e, n, this.hash, this, s, new Ze(e, s, i, c)));
  }
}
class ri {
  constructor(e, n, r) {
    __publicField(this, "edit");
    __publicField(this, "hash");
    __publicField(this, "children");
    __publicField(this, "_tag", "CollisionNode");
    this.edit = e, this.hash = n, this.children = r;
  }
  modify(e, n, r, s, i, o) {
    if (s === this.hash) {
      const a = kr(this, e), l = this.updateCollisionList(a, e, this.hash, this.children, r, i, o);
      return l === this.children ? this : l.length > 1 ? new ri(e, this.hash, l) : l[0];
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
    const c = this.mask, a = this.children, l = Ot(n, s), d = ft(l), h = jc(c, d), p = c & d, g = kr(this, e);
    if (!p) {
      const H = new Ue().modify(e, n + et, r, s, i, o);
      return H ? a.length >= sh ? fh(e, l, H, c, a) : new $t(e, c | d, ah(g, h, H, a)) : this;
    }
    const m = a[h], I = m.modify(e, n + et, r, s, i, o);
    if (m === I) return this;
    let R = c, K;
    if (de(I)) {
      if (R &= ~d, !R) return new Ue();
      if (a.length <= 2 && uh(a[h ^ 1])) return a[h ^ 1];
      K = qc(g, h, a);
    } else K = pt(g, h, I, a);
    return g ? (this.mask = R, this.children = K, this) : new $t(e, R, K);
  }
}
class si {
  constructor(e, n, r) {
    __publicField(this, "edit");
    __publicField(this, "size");
    __publicField(this, "children");
    __publicField(this, "_tag", "ArrayNode");
    this.edit = e, this.size = n, this.children = r;
  }
  modify(e, n, r, s, i, o) {
    let c = this.size;
    const a = this.children, l = Ot(n, s), d = a[l], h = (d || new Ue()).modify(e, n + et, r, s, i, o);
    if (d === h) return this;
    const p = kr(this, e);
    let g;
    if (de(d) && !de(h)) ++c, g = pt(p, l, h, a);
    else if (!de(d) && de(h)) {
      if (--c, c <= ih) return lh(e, c, l, a);
      g = pt(p, l, new Ue(), a);
    } else g = pt(p, l, h, a);
    return p ? (this.size = c, this.children = g, this) : new si(e, c, g);
  }
}
function lh(t, e, n, r) {
  const s = new Array(e - 1);
  let i = 0, o = 0;
  for (let c = 0, a = r.length; c < a; ++c) if (c !== n) {
    const l = r[c];
    l && !de(l) && (s[i++] = l, o |= 1 << c);
  }
  return new $t(t, o, s);
}
function fh(t, e, n, r, s) {
  const i = [];
  let o = r, c = 0;
  for (let a = 0; o; ++a) o & 1 && (i[a] = s[c++]), o >>>= 1;
  return i[e] = n, new si(t, c + 1, i);
}
function hh(t, e, n, r, s, i) {
  if (n === s) return new ri(t, n, [i, r]);
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
    const a = hh(t, c, n, r, s, i);
    if (typeof a == "function") o = ch(a, o), c = c + et;
    else {
      let l = a;
      for (; o != null; ) l = o.value(l), o = o.previous;
      return l;
    }
  }
}
const Uc = "effect/HashMap", ls = Symbol.for(Uc), dh = { [ls]: ls, [Symbol.iterator]() {
  return new vr(this, (t, e) => [t, e]);
}, [O]() {
  let t = _(Uc);
  for (const e of this) t ^= f(_(e[0]), E(_(e[1])));
  return B(this, t);
}, [w](t) {
  if (mh(t)) {
    if (t._size !== this._size) return false;
    for (const e of this) {
      const n = f(t, oi(e[0], _(e[0])));
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
} }, ii = (t, e, n, r) => {
  const s = Object.create(dh);
  return s._editable = t, s._edit = e, s._root = n, s._size = r, s;
};
class vr {
  constructor(e, n) {
    __publicField(this, "map");
    __publicField(this, "f");
    __publicField(this, "v");
    this.map = e, this.f = n, this.v = Bc(this.map._root, this.f, void 0);
  }
  next() {
    if (Re(this.v)) return { done: true, value: void 0 };
    const e = this.v.value;
    return this.v = rr(e.cont), { done: false, value: e.value };
  }
  [Symbol.iterator]() {
    return new vr(this.map, this.f);
  }
}
const rr = (t) => t ? Vc(t[0], t[1], t[2], t[3], t[4]) : k(), Bc = (t, e, n = void 0) => {
  switch (t._tag) {
    case "LeafNode":
      return ve(t.value) ? M({ value: e(t.key, t.value.value), cont: n }) : rr(n);
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
    if (i && !de(i)) return Bc(i, r, [t, e, n, r, s]);
  }
  return rr(s);
}, ph = ii(false, 0, new Ue(), 0), wr = () => ph, gh = (t) => {
  const e = Hc(wr());
  for (const n of t) an(e, n[0], n[1]);
  return kh(e);
}, mh = (t) => $(t, ls), _h = (t) => t && de(t._root), yh = u(2, (t, e) => oi(t, e, _(e))), oi = u(3, (t, e, n) => {
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
}), bh = u(2, (t, e) => ve(oi(t, e, _(e)))), an = u(3, (t, e, n) => ci(t, e, () => M(n))), Sh = u(3, (t, e, n) => t._editable ? (t._root = e, t._size = n, t) : e === t._root ? t : ii(t._editable, t._edit, e, n)), Kc = (t) => new vr(t, (e) => e), fs = (t) => t._size, Hc = (t) => ii(true, t._edit + 1, t._root, t._size), kh = (t) => (t._editable = false, t), ci = u(3, (t, e, n) => vh(t, e, _(e), n)), vh = u(4, (t, e, n, r) => {
  const s = { value: t._size }, i = t._root.modify(t._editable ? t._edit : NaN, 0, r, n, e, s);
  return f(t, Sh(i, s.value));
}), so = u(2, (t, e) => ci(t, e, k)), wh = u(2, (t, e) => Ir(t, wr(), (n, r, s) => an(n, s, e(r, s)))), Ih = u(2, (t, e) => Ir(t, void 0, (n, r, s) => e(r, s))), Ir = u(3, (t, e, n) => {
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
}), Jc = "effect/HashSet", hs = Symbol.for(Jc), Eh = { [hs]: hs, [Symbol.iterator]() {
  return Kc(this._keyMap);
}, [O]() {
  return B(this, E(_(this._keyMap))(_(Jc)));
}, [w](t) {
  return Oh(t) ? fs(this._keyMap) === fs(t._keyMap) && v(this._keyMap, t._keyMap) : false;
}, toString() {
  return W(this.toJSON());
}, toJSON() {
  return { _id: "HashSet", values: Array.from(this).map(z) };
}, [A]() {
  return this.toJSON();
}, pipe() {
  return S(this, arguments);
} }, Er = (t) => {
  const e = Object.create(Eh);
  return e._keyMap = t, e;
}, Oh = (t) => $(t, hs), $h = Er(wr()), Or = () => $h, Mh = (t) => {
  const e = ai(Or());
  for (const n of t) un(e, n);
  return ui(e);
}, Th = (...t) => {
  const e = ai(Or());
  for (const n of t) un(e, n);
  return ui(e);
}, Fh = u(2, (t, e) => bh(t._keyMap, e)), Ch = (t) => fs(t._keyMap), ai = (t) => Er(Hc(t._keyMap)), ui = (t) => (t._keyMap._editable = false, t), Gc = u(2, (t, e) => {
  const n = ai(t);
  return e(n), ui(n);
}), un = u(2, (t, e) => t._keyMap._editable ? (an(e, true)(t._keyMap), t) : Er(an(e, true)(t._keyMap))), zc = u(2, (t, e) => t._keyMap._editable ? (so(e)(t._keyMap), t) : Er(so(e)(t._keyMap))), Rh = u(2, (t, e) => Gc(t, (n) => {
  for (const r of e) zc(n, r);
})), Nh = u(2, (t, e) => Gc(Or(), (n) => {
  Ah(t, (r) => un(n, r));
  for (const r of e) un(n, r);
})), Ah = u(2, (t, e) => Ih(t._keyMap, (n, r) => e(r))), Ph = u(3, (t, e, n) => Ir(t._keyMap, e, (r, s, i) => n(r, i))), tt = Or, xh = Mh, li = Th, Lh = Fh, Wc = Ch, sn = un, Yc = zc, io = Rh, ln = Nh, sr = Ph, oo = Symbol.for("effect/MutableRef"), jh = { [oo]: oo, toString() {
  return W(this.toJSON());
}, toJSON() {
  return { _id: "MutableRef", current: z(this.current) };
}, [A]() {
  return this.toJSON();
}, pipe() {
  return S(this, arguments);
} }, Qc = (t) => {
  const e = Object.create(jh);
  return e.current = t, e;
}, $r = (t) => t.current, Zc = u(2, (t, e) => (t.current = e, t)), fi = "effect/FiberId", fn = Symbol.for(fi), ir = "None", ds = "Runtime", qh = "Composite", Dh = se(`${fi}-${ir}`);
let Uh = class {
  constructor() {
    __publicField(this, _a2, fn);
    __publicField(this, "_tag", ir);
    __publicField(this, "id", -1);
    __publicField(this, "startTimeMillis", -1);
  }
  [(_a2 = fn, O)]() {
    return Dh;
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
class Bh {
  constructor(e, n) {
    __publicField(this, "id");
    __publicField(this, "startTimeMillis");
    __publicField(this, _b2, fn);
    __publicField(this, "_tag", ds);
    this.id = e, this.startTimeMillis = n;
  }
  [(_b2 = fn, O)]() {
    return B(this, se(`${fi}-${this._tag}-${this.id}-${this.startTimeMillis}`));
  }
  [w](e) {
    return Xc(e) && e._tag === ds && this.id === e.id && this.startTimeMillis === e.startTimeMillis;
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
const Vh = new Uh(), Xc = (t) => $(t, fn), ps = (t) => {
  switch (t._tag) {
    case ir:
      return tt();
    case ds:
      return li(t.id);
    case qh:
      return f(ps(t.left), ln(ps(t.right)));
  }
}, co = T(Symbol.for("effect/Fiber/Id/_fiberCounter"), () => Qc(0)), ea = (t) => Array.from(ps(t)).map((n) => `#${n}`).join(","), Kh = () => {
  const t = $r(co);
  return f(co, Zc(t + 1)), new Bh(t, Date.now());
}, Mt = Vh, Hh = ea, ta = Kh, hi = wr, Jh = gh, Gh = _h, na = yh, ra = an, sa = Kc, zh = ci, Wh = wh, ia = Ir, hn = Symbol.for("effect/List"), gs = (t) => q(t), Yh = (t) => Tl(Zs(t), gs), Qh = Yh(v), Zh = { [hn]: hn, _tag: "Cons", toString() {
  return W(this.toJSON());
}, toJSON() {
  return { _id: "List", _tag: "Cons", values: gs(this).map(z) };
}, [A]() {
  return this.toJSON();
}, [w](t) {
  return ca(t) && this._tag === t._tag && Qh(this, t);
}, [O]() {
  return B(this, gn(gs(this)));
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
  const n = Object.create(Zh);
  return n.head = t, n.tail = e, n;
}, Xh = se("Nil"), ed = { [hn]: hn, _tag: "Nil", toString() {
  return W(this.toJSON());
}, toJSON() {
  return { _id: "List", _tag: "Nil" };
}, [A]() {
  return this.toJSON();
}, [O]() {
  return Xh;
}, [w](t) {
  return ca(t) && this._tag === t._tag;
}, [Symbol.iterator]() {
  return { next() {
    return { done: true, value: void 0 };
  } };
}, pipe() {
  return S(this, arguments);
} }, oa = Object.create(ed), ca = (t) => $(t, hn), Ne = (t) => t._tag === "Nil", td = (t) => t._tag === "Cons", nd = () => oa, nt = (t, e) => or(t, e), Tt = nd, di = (t) => or(t, oa), rd = u(2, (t, e) => id(e, t)), sd = u(2, (t, e) => nt(e, t)), id = u(2, (t, e) => {
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
}), od = u(3, (t, e, n) => {
  let r = e, s = t;
  for (; !Ne(s); ) r = n(r, s.head), s = s.tail;
  return r;
}), cd = (t) => {
  let e = Tt(), n = t;
  for (; !Ne(n); ) e = sd(e, n.head), n = n.tail;
  return e;
}, pi = (function() {
  function t(e) {
    e && Object.assign(this, e);
  }
  return t.prototype = sc, t;
})(), ad = Symbol.for("effect/DifferContextPatch");
function ao(t) {
  return t;
}
const yn = { ...pi.prototype, [ad]: { _Value: ao, _Patch: ao } }, ud = Object.assign(Object.create(yn), { _tag: "Empty" }), ld = Object.create(ud), aa = () => ld, fd = Object.assign(Object.create(yn), { _tag: "AndThen" }), hd = (t, e) => {
  const n = Object.create(fd);
  return n.first = t, n.second = e, n;
}, dd = Object.assign(Object.create(yn), { _tag: "AddService" }), pd = (t, e) => {
  const n = Object.create(dd);
  return n.key = t, n.service = e, n;
}, gd = Object.assign(Object.create(yn), { _tag: "RemoveService" }), md = (t) => {
  const e = Object.create(gd);
  return e.key = t, e;
}, _d = Object.assign(Object.create(yn), { _tag: "UpdateService" }), yd = (t, e) => {
  const n = Object.create(_d);
  return n.key = t, n.update = e, n;
}, bd = (t, e) => {
  const n = new Map(t.unsafeMap);
  let r = aa();
  for (const [s, i] of e.unsafeMap.entries()) if (n.has(s)) {
    const o = n.get(s);
    n.delete(s), v(o, i) || (r = Kn(yd(s, () => i))(r));
  } else n.delete(s), r = Kn(pd(s, i))(r);
  for (const [s] of n.entries()) r = Kn(md(s))(r);
  return r;
}, Kn = u(2, (t, e) => hd(t, e)), Sd = u(2, (t, e) => {
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
}), kd = Symbol.for("effect/DifferHashSetPatch");
function Wr(t) {
  return t;
}
const Mr = { ...pi.prototype, [kd]: { _Value: Wr, _Key: Wr, _Patch: Wr } }, vd = Object.assign(Object.create(Mr), { _tag: "Empty" }), wd = Object.create(vd), ua = () => wd, Id = Object.assign(Object.create(Mr), { _tag: "AndThen" }), Ed = (t, e) => {
  const n = Object.create(Id);
  return n.first = t, n.second = e, n;
}, Od = Object.assign(Object.create(Mr), { _tag: "Add" }), $d = (t) => {
  const e = Object.create(Od);
  return e.value = t, e;
}, Md = Object.assign(Object.create(Mr), { _tag: "Remove" }), Td = (t) => {
  const e = Object.create(Md);
  return e.value = t, e;
}, Fd = (t, e) => {
  const [n, r] = sr([t, ua()], ([s, i], o) => Lh(o)(s) ? [Yc(o)(s), i] : [s, ms($d(o))(i)])(e);
  return sr(r, (s, i) => ms(Td(i))(s))(n);
}, ms = u(2, (t, e) => Ed(t, e)), Cd = u(2, (t, e) => {
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
}), Rd = Symbol.for("effect/DifferReadonlyArrayPatch");
function uo(t) {
  return t;
}
const bn = { ...pi.prototype, [Rd]: { _Value: uo, _Patch: uo } }, Nd = Object.assign(Object.create(bn), { _tag: "Empty" }), Ad = Object.create(Nd), la = () => Ad, Pd = Object.assign(Object.create(bn), { _tag: "AndThen" }), xd = (t, e) => {
  const n = Object.create(Pd);
  return n.first = t, n.second = e, n;
}, Ld = Object.assign(Object.create(bn), { _tag: "Append" }), jd = (t) => {
  const e = Object.create(Ld);
  return e.values = t, e;
}, qd = Object.assign(Object.create(bn), { _tag: "Slice" }), Dd = (t, e) => {
  const n = Object.create(qd);
  return n.from = t, n.until = e, n;
}, Ud = Object.assign(Object.create(bn), { _tag: "Update" }), Bd = (t, e) => {
  const n = Object.create(Ud);
  return n.index = t, n.patch = e, n;
}, Vd = (t) => {
  let e = 0, n = la();
  for (; e < t.oldValue.length && e < t.newValue.length; ) {
    const r = t.oldValue[e], s = t.newValue[e], i = t.differ.diff(r, s);
    v(i, t.differ.empty) || (n = Hn(n, Bd(e, i))), e = e + 1;
  }
  return e < t.oldValue.length && (n = Hn(n, Dd(0, e))), e < t.newValue.length && (n = Hn(n, jd(Zl(e)(t.newValue)))), n;
}, Hn = u(2, (t, e) => xd(t, e)), Kd = u(3, (t, e, n) => {
  if (t._tag === "Empty") return e;
  let r = e.slice(), s = fe(t);
  for (; Jl(s); ) {
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
}), Hd = Symbol.for("effect/Differ"), Jd = { [Hd]: { _P: j, _V: j }, pipe() {
  return S(this, arguments);
} }, qt = (t) => {
  const e = Object.create(Jd);
  return e.empty = t.empty, e.diff = t.diff, e.combine = t.combine, e.patch = t.patch, e;
}, Gd = () => qt({ empty: aa(), combine: (t, e) => Kn(e)(t), diff: (t, e) => bd(t, e), patch: (t, e) => Sd(e)(t) }), zd = () => qt({ empty: ua(), combine: (t, e) => ms(e)(t), diff: (t, e) => Fd(t, e), patch: (t, e) => Cd(e)(t) }), Wd = (t) => qt({ empty: la(), combine: (e, n) => Hn(e, n), diff: (e, n) => Vd({ oldValue: e, newValue: n, differ: t }), patch: (e, n) => Kd(e, n, t) }), fa = () => Yd((t, e) => e), Yd = (t) => qt({ empty: j, combine: (e, n) => e === j ? n : n === j ? e : (r) => n(e(r)), diff: (e, n) => v(e, n) ? j : fl(n), patch: (e, n) => t(n, e(n)) }), dn = 255, ha = 8, _s = (t) => t & dn, ys = (t) => t >> ha & dn, Sn = (t, e) => (t & dn) + ((e & t & dn) << ha), Qd = Sn(0, 0), Zd = (t) => Sn(t, t), Xd = (t) => Sn(t, 0), ep = u(2, (t, e) => Sn(_s(t) & ~e, ys(t))), tp = u(2, (t, e) => t | e), np = (t) => ~t >>> 0 & dn, rp = 0, Dt = 1, sp = 2, da = 4, bs = 16, pa = 32, ip = (t) => Tr(t, pa), op = u(2, (t, e) => t | e), je = (t) => ga(t) && !ap(t), ga = (t) => Tr(t, Dt), Tr = u(2, (t, e) => (t & e) !== 0), ma = (...t) => t.reduce((e, n) => e | n, 0), cp = ma(rp), lo = (t) => Tr(t, da), ap = (t) => Tr(t, bs), Jn = u(2, (t, e) => Sn(t ^ e, e)), Gn = u(2, (t, e) => t & (np(_s(e)) | ys(e)) | _s(e) & ys(e)), fo = qt({ empty: Qd, diff: (t, e) => Jn(t, e), combine: (t, e) => tp(e)(t), patch: (t, e) => Gn(e, t) }), up = Zd, _a = Xd, ho = ep, ya = (t, e) => ({ _tag: "Par", left: t, right: e }), Ln = (t, e) => ({ _tag: "Seq", left: t, right: e }), lp = (t) => {
  let e = di(t), n = Tt();
  for (; ; ) {
    const [r, s] = od(e, [ba(), Tt()], ([i, o], c) => {
      const [a, l] = fp(c);
      return [mp(i, a), rd(o, l)];
    });
    if (n = hp(n, r), Ne(s)) return cd(n);
    e = s;
  }
  throw new Error("BUG: BlockedRequests.flatten - please report an issue at https://github.com/Effect-TS/effect/issues");
}, fp = (t) => {
  let e = t, n = ba(), r = Tt(), s = Tt();
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
      if (n = gp(n, e), Ne(r)) return [n, s];
      e = r.head, r = r.tail;
      break;
    }
  }
  throw new Error("BUG: BlockedRequests.step - please report an issue at https://github.com/Effect-TS/effect/issues");
}, hp = (t, e) => {
  if (Ne(t)) return di(Yr(e));
  if (_p(e)) return t;
  const n = wp(t.head), r = yp(e);
  return n.length === 1 && r.length === 1 && v(n[0], r[0]) ? nt(vp(t.head, Yr(e)), t.tail) : nt(Yr(e), t);
}, dp = Symbol.for("effect/RequestBlock/RequestBlockParallel"), pp = { _R: (t) => t };
_c2 = dp;
class gi {
  constructor(e) {
    __publicField(this, "map");
    __publicField(this, _c2, pp);
    this.map = e;
  }
}
const ba = () => new gi(hi()), gp = (t, e) => new gi(zh(t.map, e.dataSource, (n) => hl(dl(n, Pf(e.blockedRequest)), () => ne(e.blockedRequest)))), mp = (t, e) => new gi(ia(t.map, e.map, (n, r, s) => ra(n, s, ct(na(n, s), { onNone: () => r, onSome: (i) => he(r, i) })))), _p = (t) => Gh(t.map), yp = (t) => Array.from(sa(t.map)), Yr = (t) => kp(Wh(t.map, (e) => ne(e))), bp = Symbol.for("effect/RequestBlock/RequestBlockSequential"), Sp = { _R: (t) => t };
_d2 = bp;
class Sa {
  constructor(e) {
    __publicField(this, "map");
    __publicField(this, _d2, Sp);
    this.map = e;
  }
}
const kp = (t) => new Sa(t), vp = (t, e) => new Sa(ia(e.map, t.map, (n, r, s) => ra(n, s, ct(na(n, s), { onNone: () => Pe(), onSome: (i) => he(i, r) })))), wp = (t) => Array.from(sa(t.map)), Ip = (t) => Array.from(t.map), kn = "Die", rt = "Empty", Ut = "Fail", Bt = "Interrupt", Ft = "Parallel", Ct = "Sequential", ka = "effect/Cause", va = Symbol.for(ka), Ep = { _E: (t) => t }, Vt = { [va]: Ep, [O]() {
  return f(_(ka), E(_(jp(this))), B(this));
}, [w](t) {
  return Op(t) && Lp(this, t);
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
  return e._tag = Ut, e.error = t, e;
}, Ae = (t) => {
  const e = Object.create(Vt);
  return e._tag = kn, e.defect = t, e;
}, qe = (t) => {
  const e = Object.create(Vt);
  return e._tag = Bt, e.fiberId = t, e;
}, Fr = (t, e) => {
  const n = Object.create(Vt);
  return n._tag = Ft, n.left = t, n.right = e, n;
}, ae = (t, e) => {
  const n = Object.create(Vt);
  return n._tag = Ct, n.left = t, n.right = e, n;
}, Op = (t) => $(t, va), $p = (t) => t._tag === rt, Mp = (t) => t._tag === rt ? true : Nt(t, true, (e, n) => {
  switch (n._tag) {
    case rt:
      return M(e);
    case kn:
    case Ut:
    case Bt:
      return M(false);
    default:
      return k();
  }
}), Tp = (t) => ve(Pp(t)), mi = (t) => _i(void 0, Dp)(t), Fp = (t) => wt(Nt(t, Pe(), (e, n) => n._tag === Ut ? M(f(e, ge(n.error))) : k())), Cp = (t) => wt(Nt(t, Pe(), (e, n) => n._tag === kn ? M(f(e, ge(n.defect))) : k())), Rp = (t) => Nt(t, tt(), (e, n) => n._tag === Bt ? M(f(e, sn(n.fiberId))) : k()), Np = (t) => wa(t, (e) => e._tag === Ut ? M(e.error) : k()), Ap = (t) => {
  const e = Np(t);
  switch (e._tag) {
    case "None":
      return Fe(t);
    case "Some":
      return bt(e.value);
  }
}, Pp = (t) => wa(t, (e) => e._tag === Bt ? M(e.fiberId) : k()), po = (t) => Ia(t, { onEmpty: Rt, onFail: () => Rt, onDie: Ae, onInterrupt: qe, onSequential: ae, onParallel: Fr }), xp = (t) => Ia(t, { onEmpty: Rt, onFail: Ae, onDie: Ae, onInterrupt: qe, onSequential: ae, onParallel: Fr }), Lp = (t, e) => {
  let n = ne(t), r = ne(e);
  for (; It(n) && It(r); ) {
    const [s, i] = f(Et(n), Nt([tt(), Pe()], ([a, l], d) => {
      const [h, p] = Ss(d);
      return M([f(a, ln(h)), f(l, he(p))]);
    })), [o, c] = f(Et(r), Nt([tt(), Pe()], ([a, l], d) => {
      const [h, p] = Ss(d);
      return M([f(a, ln(h)), f(l, he(p))]);
    }));
    if (!v(s, o)) return false;
    n = i, r = c;
  }
  return true;
}, jp = (t) => qp(ne(t), Pe()), qp = (t, e) => {
  for (; ; ) {
    const [n, r] = f(t, Sc([tt(), Pe()], ([i, o], c) => {
      const [a, l] = Ss(c);
      return [f(i, ln(a)), f(o, he(l))];
    })), s = Wc(n) > 0 ? f(e, ge(n)) : e;
    if (xf(r)) return wt(s);
    t = r, e = s;
  }
  throw new Error(Ks("Cause.flattenCauseLoop"));
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
}), Ss = (t) => {
  let e = t;
  const n = [];
  let r = tt(), s = Pe();
  for (; e !== void 0; ) switch (e._tag) {
    case rt: {
      if (n.length === 0) return [r, s];
      e = n.pop();
      break;
    }
    case Ut: {
      if (r = sn(r, Gr(e._tag, e.error)), n.length === 0) return [r, s];
      e = n.pop();
      break;
    }
    case kn: {
      if (r = sn(r, Gr(e._tag, e.defect)), n.length === 0) return [r, s];
      e = n.pop();
      break;
    }
    case Bt: {
      if (r = sn(r, Gr(e._tag, e.fiberId)), n.length === 0) return [r, s];
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
          e = Fr(ae(e.left.left, e.right), ae(e.left.right, e.right));
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
  throw new Error(Ks("Cause.evaluateCauseLoop"));
}, Dp = { emptyCase: Yi, failCase: rs, dieCase: rs, interruptCase: Yi, sequentialCase: (t, e, n) => e && n, parallelCase: (t, e, n) => e && n }, go = "SequentialCase", mo = "ParallelCase", Ia = u(2, (t, { onDie: e, onEmpty: n, onFail: r, onInterrupt: s, onParallel: i, onSequential: o }) => _i(t, void 0, { emptyCase: () => n, failCase: (c, a) => r(a), dieCase: (c, a) => e(a), interruptCase: (c, a) => s(a), sequentialCase: (c, a, l) => o(a, l), parallelCase: (c, a, l) => i(a, l) })), Nt = u(3, (t, e, n) => {
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
}), _i = u(3, (t, e, n) => {
  const r = [t], s = [];
  for (; r.length > 0; ) {
    const o = r.pop();
    switch (o._tag) {
      case rt: {
        s.push(Fe(n.emptyCase(e)));
        break;
      }
      case Ut: {
        s.push(Fe(n.failCase(e, o.error)));
        break;
      }
      case kn: {
        s.push(Fe(n.dieCase(e, o.defect)));
        break;
      }
      case Bt: {
        s.push(Fe(n.interruptCase(e, o.fiberId)));
        break;
      }
      case Ct: {
        r.push(o.right), r.push(o.left), s.push(bt({ _tag: go }));
        break;
      }
      case Ft: {
        r.push(o.right), r.push(o.left), s.push(bt({ _tag: mo }));
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
          case go: {
            const c = i.pop(), a = i.pop(), l = n.sequentialCase(e, c, a);
            i.push(l);
            break;
          }
          case mo: {
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
}), vn = (t, e) => mi(t) ? "All fibers interrupted without errors." : Oa(t).map(function(n) {
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
    })), this.stack = Kp(`${this.name}: ${this.message}`, e instanceof Error && e.stack ? e.stack : "", this.span);
  }
}
const Up = (t) => {
  if (typeof t == "string") return t;
  if (typeof t == "object" && t !== null && t instanceof Error) return t.message;
  try {
    if ($(t, "toString") && pl(t.toString) && t.toString !== Object.prototype.toString && t.toString !== globalThis.Array.prototype.toString) return t.toString();
  } catch {
  }
  return gl(t);
}, Bp = /\((.*)\)/g, Vp = T("effect/Tracer/spanToTrace", () => /* @__PURE__ */ new WeakMap()), Kp = (t, e, n) => {
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
      const c = Vp.get(i);
      if (typeof c == "function") {
        const a = c();
        if (typeof a == "string") {
          const l = a.matchAll(Bp);
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
}, At = Symbol.for("effect/SpanAnnotation"), Oa = (t) => _i(t, void 0, { emptyCase: () => [], dieCase: (e, n) => [new ar(n)], failCase: (e, n) => [new ar(n)], interruptCase: () => [], parallelCase: (e, n, r) => [...n, ...r], sequentialCase: (e, n, r) => [...n, ...r] }), Cr = "Pending", $a = "Done", Hp = "effect/Deferred", Jp = Symbol.for(Hp), Gp = { _E: (t) => t, _A: (t) => t }, zp = (t) => ({ _tag: Cr, joiners: t }), Wp = (t) => ({ _tag: $a, effect: t });
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
const Ma = (t, e) => {
  const n = new V("Blocked");
  return n.effect_instruction_i0 = t, n.effect_instruction_i1 = e, n;
}, Yp = (t) => {
  const e = new V("RunBlocked");
  return e.effect_instruction_i0 = t, e;
}, Pt = Symbol.for("effect/Effect");
class Qp {
  constructor(e, n) {
    __publicField(this, "patch");
    __publicField(this, "op");
    __publicField(this, "_op", zs);
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
  [O]() {
    return B(this, ml(this));
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
class Ta {
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
    return Lr(e) && e._op === "Failure" && v(this.effect_instruction_i0, e.effect_instruction_i0);
  }
  [O]() {
    return f(se(this._tag), E(_(this.effect_instruction_i0)), B(this));
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
    return Lr(e) && e._op === "Success" && v(this.effect_instruction_i0, e.effect_instruction_i0);
  }
  [O]() {
    return f(se(this._tag), E(_(this.effect_instruction_i0)), B(this));
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
const yi = (t) => $(t, Pt), re = (t) => {
  const e = new V(ic);
  return e.effect_instruction_i0 = t, e;
}, Zp = u(3, (t, e, n) => Nr((r) => b(t, (s) => b(Na(x(() => r(e(s)))), (i) => x(() => n(s, i)).pipe(xt({ onFailure: (o) => {
  switch (i._tag) {
    case ue:
      return me(ae(i.effect_instruction_i0, o));
    case le:
      return me(o);
  }
}, onSuccess: () => i })))))), In = u(2, (t, e) => b(t, () => F(e))), En = (t) => In(t, void 0), Ca = function() {
  const t = new V(Hs);
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
      throw new Error(Ks("you're not supposed to end up here"));
  }
  return t;
}, ur = (t, e = Mt) => {
  const n = new V(nn);
  let r;
  return n.effect_instruction_i0 = (s) => {
    r = t(s);
  }, n.effect_instruction_i1 = e, ja(n, (s) => yi(r) ? r : we);
}, Xp = (t, e = Mt) => x(() => ur(t, e)), st = (t, e = Mt) => Ca(t, function() {
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
}), _o = u(2, (t, e) => Si(t, { onFailure: e, onSuccess: F })), yo = Symbol.for("effect/OriginalAnnotation"), Ra = (t, e) => ve(e) ? new Proxy(t, { has(n, r) {
  return r === At || r === yo || r in n;
}, get(n, r) {
  return r === At ? e.value : r === yo ? t : n[r];
} }) : t, bo = (t) => Gs(t) && !(At in t) ? re((e) => me(Ae(Ra(t, Xa(e))))) : me(Ae(t)), eg = (t) => tg(() => Ae(new Ag(t))), ks = (t) => Si(t, { onFailure: (e) => F(bt(e)), onSuccess: (e) => F(Fe(e)) }), Na = (t) => sg(t, { onFailure: C, onSuccess: L }), J = (t) => Gs(t) && !(At in t) ? re((e) => me(cr(Ra(t, Xa(e))))) : me(cr(t)), bi = (t) => b(y(t), J), me = (t) => {
  const e = new Ta(ue);
  return e.effect_instruction_i0 = t, e;
}, tg = (t) => b(y(t), me), ng = re((t) => F(t.id())), Aa = (t) => re((e) => t(e.id())), b = u(2, (t, e) => {
  const n = new V(Qn);
  return n.effect_instruction_i0 = t, n.effect_instruction_i1 = e, n;
}), rg = (t) => {
  const e = new V("OnStep");
  return e.effect_instruction_i0 = t, e;
}, Pa = (t) => b(t, j), sg = u(2, (t, e) => xt(t, { onFailure: (n) => F(e.onFailure(n)), onSuccess: (n) => F(e.onSuccess(n)) })), xt = u(2, (t, e) => {
  const n = new V(Xn);
  return n.effect_instruction_i0 = t, n.effect_instruction_i1 = e.onFailure, n.effect_instruction_i2 = e.onSuccess, n;
}), Si = u(2, (t, e) => xt(t, { onFailure: (n) => {
  if (Cp(n).length > 0) return me(xp(n));
  const s = Fp(n);
  return s.length > 0 ? e.onFailure(Ac(s)) : me(n);
}, onSuccess: e.onSuccess })), De = u(2, (t, e) => x(() => {
  const n = q(t), r = Qs(n.length);
  let s = 0;
  return In(wi({ while: () => s < n.length, body: () => e(n[s], s), step: (i) => {
    r[s++] = i;
  } }), r);
})), Rr = u(2, (t, e) => x(() => {
  const n = q(t);
  let r = 0;
  return wi({ while: () => r < n.length, body: () => e(n[r], r), step: () => {
    r++;
  } });
})), xa = (t) => {
  const e = new V(mn);
  return e.effect_instruction_i0 = up(Dt), e.effect_instruction_i1 = () => t, e;
}, ee = u(2, (t, e) => b(t, (n) => y(() => e(n)))), La = u(2, (t, e) => Si(t, { onFailure: (n) => bi(() => e.onFailure(n)), onSuccess: (n) => y(() => e.onSuccess(n)) })), ki = u(2, (t, e) => xt(t, { onFailure: (n) => {
  const r = Ap(n);
  switch (r._tag) {
    case "Left":
      return bi(() => e(r.left));
    case "Right":
      return me(r.right);
  }
}, onSuccess: F })), vi = u(2, (t, e) => Nr((n) => xt(n(t), { onFailure: (r) => {
  const s = C(r);
  return xt(e(s), { onFailure: (i) => C(ae(r, i)), onSuccess: () => s });
}, onSuccess: (r) => {
  const s = L(r);
  return Ar(e(s), s);
} }))), ja = u(2, (t, e) => vi(t, Ya({ onFailure: (n) => mi(n) ? En(e(Rp(n))) : we, onSuccess: () => we }))), F = (t) => {
  const e = new Fa(le);
  return e.effect_instruction_i0 = t, e;
}, x = (t) => {
  const e = new V(Hs);
  return e.commit = t, e;
}, y = (t) => {
  const e = new V(oc);
  return e.effect_instruction_i0 = t, e;
}, ig = u((t) => t.length === 3 || t.length === 2 && !(Gs(t[1]) && "onlyEffect" in t[1]), (t, e) => b(t, (n) => {
  const r = typeof e == "function" ? e(n) : e;
  return yi(r) ? In(r, n) : yl(r) ? ur((s) => {
    r.then((i) => s(F(n)), (i) => s(J(new Mi(i, "An unknown error occurred in Effect.tap"))));
  }) : F(n);
})), og = (t) => re((e) => {
  const n = e.getFiberRef(ws), r = f(n, _t(() => e.scope()));
  return t(Pr(ws, M(r)));
}), qa = (t) => {
  const e = new V(mn);
  return e.effect_instruction_i0 = _a(Dt), e.effect_instruction_i1 = () => t, e;
}, Nr = (t) => Ca(t, function() {
  const e = new V(mn);
  return e.effect_instruction_i0 = _a(Dt), e.effect_instruction_i1 = (n) => ga(n) ? G(() => this.effect_instruction_i0(xa)) : G(() => this.effect_instruction_i0(qa)), e;
}), we = F(void 0), cg = (t) => {
  const e = new V(mn);
  return e.effect_instruction_i0 = t, e.effect_instruction_i1 = void 0, e;
}, wi = (t) => {
  const e = new V(Zn);
  return e.effect_instruction_i0 = t.while, e.effect_instruction_i1 = t.body, e.effect_instruction_i2 = t.step, e;
}, ag = (t) => x(() => {
  const e = new V(tn);
  return e.effect_instruction_i0 = t(), e;
}), ug = function() {
  const t = arguments.length === 1 ? arguments[0] : arguments[1].bind(arguments[0]);
  return ag(() => t(f));
}, Ii = (t) => {
  const e = new V(Bn);
  return typeof (t == null ? void 0 : t.priority) < "u" ? $g(e, t.priority) : e;
}, Da = u(2, (t, e) => b(t, (n) => ee(e, (r) => [n, r]))), Ua = u(2, (t, e) => b(t, (n) => In(e, n))), Ar = u(2, (t, e) => b(t, () => e)), lg = (t) => b(ng, (e) => f(t, Ba(e))), Ba = u(2, (t, e) => b(t.interruptAsFork(e), () => t.await)), fg = { _tag: "All", syslog: 0, label: "ALL", ordinal: Number.MIN_SAFE_INTEGER, pipe() {
  return S(this, arguments);
} }, hg = { _tag: "Fatal", syslog: 2, label: "FATAL", ordinal: 5e4, pipe() {
  return S(this, arguments);
} }, dg = { _tag: "Error", syslog: 3, label: "ERROR", ordinal: 4e4, pipe() {
  return S(this, arguments);
} }, Va = { _tag: "Warning", syslog: 4, label: "WARN", ordinal: 3e4, pipe() {
  return S(this, arguments);
} }, Ka = { _tag: "Info", syslog: 6, label: "INFO", ordinal: 2e4, pipe() {
  return S(this, arguments);
} }, Ha = { _tag: "Debug", syslog: 7, label: "DEBUG", ordinal: 1e4, pipe() {
  return S(this, arguments);
} }, pg = { _tag: "Trace", syslog: 7, label: "TRACE", ordinal: 0, pipe() {
  return S(this, arguments);
} }, gg = { _tag: "None", syslog: 7, label: "OFF", ordinal: Number.MAX_SAFE_INTEGER, pipe() {
  return S(this, arguments);
} }, mg = "effect/FiberRef", _g = Symbol.for(mg), yg = { _A: (t) => t }, Ei = (t) => re((e) => L(e.getFiberRef(t))), Oi = u(2, (t, e) => b(Ei(t), e)), So = u(2, (t, e) => bg(t, () => [void 0, e])), bg = u(2, (t, e) => re((n) => {
  const [r, s] = e(n.getFiberRef(t));
  return n.setFiberRef(t, s), F(r);
})), Pr = u(3, (t, e, n) => Zp(Ua(Ei(e), So(e, n)), () => t, (r) => So(e, r))), Z = (t, e) => Kt(t, { differ: fa(), fork: (e == null ? void 0 : e.fork) ?? j, join: e == null ? void 0 : e.join }), Sg = (t) => {
  const e = zd();
  return Kt(t, { differ: e, fork: e.empty });
}, kg = (t) => {
  const e = Wd(fa());
  return Kt(t, { differ: e, fork: e.empty });
}, Ja = (t) => {
  const e = Gd();
  return Kt(t, { differ: e, fork: e.empty });
}, Kt = (t, e) => ({ ...Js, [_g]: yg, initial: t, commit() {
  return Ei(this);
}, diff: (r, s) => e.differ.diff(r, s), combine: (r, s) => e.differ.combine(r, s), patch: (r) => (s) => e.differ.patch(r, s), fork: e.fork, join: e.join ?? ((r, s) => s) }), vg = (t) => Kt(t, { differ: fo, fork: fo.empty }), On = T(Symbol.for("effect/FiberRef/currentContext"), () => Ja(ei())), $i = T(Symbol.for("effect/FiberRef/currentSchedulingPriority"), () => Z(0)), wg = T(Symbol.for("effect/FiberRef/currentMaxOpsBeforeYield"), () => Z(2048)), Ig = T(Symbol.for("effect/FiberRef/currentLogAnnotation"), () => Z(hi())), Eg = T(Symbol.for("effect/FiberRef/currentLogLevel"), () => Z(Ka)), Og = T(Symbol.for("effect/FiberRef/currentLogSpan"), () => Z(Tt())), $g = u(2, (t, e) => Pr(t, $i, e)), Mg = T(Symbol.for("effect/FiberRef/currentConcurrency"), () => Z("unbounded")), Tg = T(Symbol.for("effect/FiberRef/currentRequestBatching"), () => Z(true)), Fg = T(Symbol.for("effect/FiberRef/currentUnhandledErrorLogLevel"), () => Z(M(Ha))), Cg = T(Symbol.for("effect/FiberRef/versionMismatchErrorLogLevel"), () => Z(M(Va))), vs = T(Symbol.for("effect/FiberRef/currentMetricLabels"), () => kg(kt())), ws = T(Symbol.for("effect/FiberRef/currentForkScopeOverride"), () => Z(k(), { fork: () => k(), join: (t, e) => t })), jn = T(Symbol.for("effect/FiberRef/currentInterruptedCause"), () => Z(Rt, { fork: () => Rt, join: (t, e) => t })), Rg = (t, e) => t.addFinalizer(() => En(e)), Ng = (t, e) => t.close(e), xr = (t, e) => t.fork(e), Ga = (function() {
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
}, ko = Symbol.for("effect/Cause/errors/RuntimeException"), Ag = za({ [ko]: ko }, "RuntimeException"), Pg = Symbol.for("effect/Cause/errors/InterruptedException"), xg = (t) => $(t, Pg), vo = Symbol.for("effect/Cause/errors/NoSuchElement"), Wa = za({ [vo]: vo }, "NoSuchElementException"), wo = Symbol.for("effect/Cause/errors/UnknownException"), Mi = (function() {
  class t extends Ga {
    constructor(n, r) {
      super(r ?? "An unknown error occurred", { cause: n });
      __publicField(this, "_tag", "UnknownException");
      __publicField(this, "error");
      this.error = n;
    }
  }
  return Object.assign(t.prototype, { [wo]: wo, name: "UnknownException" }), t;
})(), Lr = (t) => yi(t) && "_tag" in t && (t._tag === "Success" || t._tag === "Failure"), Io = (t, e) => qg(t, (e == null ? void 0 : e.parallel) ? Fr : ae), Eo = (t) => C(cr(t)), C = (t) => {
  const e = new Ta(ue);
  return e.effect_instruction_i0 = t, e;
}, Lg = (t) => C(qe(t)), Qr = u(2, (t, e) => {
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
}, ze = L(void 0), jg = u(3, (t, e, { onFailure: n, onSuccess: r }) => {
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
}), qg = (t, e) => {
  const n = Nc(t);
  return It(n) ? f(Ge(n), Sc(f(Et(n), Qr(ne)), (r, s) => f(r, jg(s, { onSuccess: (i, o) => f(i, ge(o)), onFailure: e }))), Qr(wt), Qr((r) => Qe(r)), M) : k();
}, Dg = (t) => ({ ...Js, [Jp]: Gp, state: Qc(zp([])), commit() {
  return Qa(this);
}, blockingOn: t }), Qa = (t) => Xp((e) => {
  const n = $r(t.state);
  switch (n._tag) {
    case $a:
      return e(n.effect);
    case Cr:
      return n.joiners.push(e), Ug(t, e);
  }
}, t.blockingOn), Za = (t, e) => {
  const n = $r(t.state);
  if (n._tag === Cr) {
    Zc(t.state, Wp(e));
    for (let r = 0, s = n.joiners.length; r < s; r++) n.joiners[r](e);
  }
}, Ug = (t, e) => y(() => {
  const n = $r(t.state);
  if (n._tag === Cr) {
    const r = n.joiners.indexOf(e);
    r >= 0 && n.joiners.splice(r, 1);
  }
}), Bg = re((t) => L(t.currentContext)), Vg = () => Bg, $n = (t) => b(Vg(), t), Kg = u(2, (t, e) => Pr(On, e)(t)), Hg = u(2, (t, e) => $n((n) => Kg(t, e(n)))), Xa = (t) => {
  const e = t.currentSpan;
  return e !== void 0 && e._tag === "Span" ? M(e) : k();
}, Oo = Symbol.for("effect/MutableHashMap"), Jg = { [Oo]: Oo, [Symbol.iterator]() {
  return new Ti(this);
}, toString() {
  return W(this.toJSON());
}, toJSON() {
  return { _id: "MutableHashMap", values: Array.from(this).map(z) };
}, [A]() {
  return this.toJSON();
}, pipe() {
  return S(this, arguments);
} };
class Ti {
  constructor(e) {
    __publicField(this, "self");
    __publicField(this, "referentialIterator");
    __publicField(this, "bucketIterator");
    this.self = e, this.referentialIterator = e.referential[Symbol.iterator]();
  }
  next() {
    if (this.bucketIterator !== void 0) return this.bucketIterator.next();
    const e = this.referentialIterator.next();
    return e.done ? (this.bucketIterator = new Gg(this.self.buckets.values()), this.next()) : e;
  }
  [Symbol.iterator]() {
    return new Ti(this.self);
  }
}
class Gg {
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
const zg = () => {
  const t = Object.create(Jg);
  return t.referential = /* @__PURE__ */ new Map(), t.buckets = /* @__PURE__ */ new Map(), t.bucketsSize = 0, t;
}, Je = u(2, (t, e) => {
  if (cc(e) === false) return t.referential.has(e) ? M(t.referential.get(e)) : k();
  const n = e[O](), r = t.buckets.get(n);
  return r === void 0 ? k() : Wg(t, r, e);
}), Wg = (t, e, n, r = false) => {
  for (let s = 0, i = e.length; s < i; s++) if (n[w](e[s][0])) {
    const o = e[s][1];
    return r && (e.splice(s, 1), t.bucketsSize--), M(o);
  }
  return k();
}, Yt = u(2, (t, e) => ve(Je(t, e))), Qt = u(3, (t, e, n) => {
  if (cc(e) === false) return t.referential.set(e, n), t;
  const r = e[O](), s = t.buckets.get(r);
  return s === void 0 ? (t.buckets.set(r, [[e, n]]), t.bucketsSize++, t) : (Yg(t, s, e), s.push([e, n]), t.bucketsSize++, t);
}), Yg = (t, e, n) => {
  for (let r = 0, s = e.length; r < s; r++) if (n[w](e[r][0])) {
    e.splice(r, 1), t.bucketsSize--;
    return;
  }
};
function Qg(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var eu = { exports: {} }, P = eu.exports = {}, be, Se;
function Is() {
  throw new Error("setTimeout has not been defined");
}
function Es() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? be = setTimeout : be = Is;
  } catch {
    be = Is;
  }
  try {
    typeof clearTimeout == "function" ? Se = clearTimeout : Se = Es;
  } catch {
    Se = Es;
  }
})();
function tu(t) {
  if (be === setTimeout) return setTimeout(t, 0);
  if ((be === Is || !be) && setTimeout) return be = setTimeout, setTimeout(t, 0);
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
function Zg(t) {
  if (Se === clearTimeout) return clearTimeout(t);
  if ((Se === Es || !Se) && clearTimeout) return Se = clearTimeout, clearTimeout(t);
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
function Xg() {
  !gt || !We || (gt = false, We.length ? Ce = We.concat(Ce) : zn = -1, Ce.length && nu());
}
function nu() {
  if (!gt) {
    var t = tu(Xg);
    gt = true;
    for (var e = Ce.length; e; ) {
      for (We = Ce, Ce = []; ++zn < e; ) We && We[zn].run();
      zn = -1, e = Ce.length;
    }
    We = null, gt = false, Zg(t);
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
var em = eu.exports;
const pe = Qg(em), tm = "effect/Clock", $o = Symbol.for(tm), Fi = at("effect/Clock"), nm = 2 ** 31 - 1, Mo = { unsafeSchedule(t, e) {
  const n = us(e);
  if (n > nm) return rs;
  let r = false;
  const s = setTimeout(() => {
    r = true, t();
  }, n);
  return () => (clearTimeout(s), !r);
} }, To = (function() {
  const t = BigInt(1e6);
  if (typeof performance > "u" || typeof performance.now != "function") return () => BigInt(Date.now()) * t;
  let e;
  return () => (e === void 0 && (e = BigInt(Date.now()) * t - BigInt(Math.round(performance.now() * 1e6))), e + BigInt(Math.round(performance.now() * 1e6)));
})(), rm = (function() {
  const t = typeof pe == "object" && "hrtime" in pe && typeof pe.hrtime.bigint == "function" ? pe.hrtime : void 0;
  if (!t) return To;
  const e = To() - t.bigint();
  return () => e + t.bigint();
})();
_h2 = $o;
class sm {
  constructor() {
    __publicField(this, _h2, $o);
    __publicField(this, "currentTimeMillis", y(() => this.unsafeCurrentTimeMillis()));
    __publicField(this, "currentTimeNanos", y(() => this.unsafeCurrentTimeNanos()));
  }
  unsafeCurrentTimeMillis() {
    return Date.now();
  }
  unsafeCurrentTimeNanos() {
    return rm();
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
const im = () => new sm(), su = "And", iu = "Or", ou = "InvalidData", cu = "MissingData", au = "SourceUnavailable", uu = "Unsupported", om = "effect/ConfigError", Fo = Symbol.for(om), Ht = { _tag: "ConfigError", [Fo]: Fo }, lu = (t, e) => {
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
}, cm = (t, e, n = { pathDelim: "." }) => {
  const r = Object.create(Ht);
  return r._op = ou, r.path = t, r.message = e, Object.defineProperty(r, "toString", { enumerable: false, value() {
    return `(Invalid data at ${f(this.path, jt(n.pathDelim))}: "${this.message}")`;
  } }), r;
}, it = (t, e, n = { pathDelim: "." }) => {
  const r = Object.create(Ht);
  return r._op = cu, r.path = t, r.message = e, Object.defineProperty(r, "toString", { enumerable: false, value() {
    return `(Missing data at ${f(this.path, jt(n.pathDelim))}: "${this.message}")`;
  } }), r;
}, am = (t, e, n, r = { pathDelim: "." }) => {
  const s = Object.create(Ht);
  return s._op = au, s.path = t, s.message = e, s.cause = n, Object.defineProperty(s, "toString", { enumerable: false, value() {
    return `(Source unavailable at ${f(this.path, jt(r.pathDelim))}: "${this.message}")`;
  } }), s;
}, um = (t, e, n = { pathDelim: "." }) => {
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
      return cm([...e, ...t.path], t.message);
    case cu:
      return it([...e, ...t.path], t.message);
    case au:
      return am([...e, ...t.path], t.message, t.cause);
    case uu:
      return um([...e, ...t.path], t.message);
  }
}), lm = { _tag: "Empty" }, Zr = u(2, (t, e) => {
  let n = di(e), r = t;
  for (; td(n); ) {
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
}), fm = "Constant", hm = "Fail", dm = "Fallback", pm = "Described", gm = "Lazy", mm = "MapOrFail", _m = "Nested", ym = "Primitive", bm = "Sequence", Sm = "HashMap", km = "ZipWith";
var Co = {};
const lr = (t, e) => [...t, ...e], vm = "effect/ConfigProvider", Ro = Symbol.for(vm), wm = at("effect/ConfigProvider"), Im = "effect/ConfigProviderFlat", No = Symbol.for(Im), Em = (t) => ({ [Ro]: Ro, pipe() {
  return S(this, arguments);
}, ...t }), Om = (t) => ({ [No]: No, patch: t.patch, load: (e, n, r = true) => t.load(e, n, r), enumerateChildren: t.enumerateChildren }), $m = (t) => Em({ load: (e) => b(ce(t, kt(), e, false), (n) => ct(rn(n), { onNone: () => J(it(kt(), `Expected a single value having structure: ${e}`)), onSome: F })), flattened: t }), Mm = (t) => {
  const { pathDelim: e, seqDelim: n } = Object.assign({}, { pathDelim: "_", seqDelim: "," }, t), r = (a) => f(a, jt(e)), s = (a) => a.split(e), i = () => typeof pe < "u" && "env" in pe && typeof Co == "object" ? Co : {};
  return $m(Om({ load: (a, l, d = true) => {
    const h = r(a), p = i(), g = h in p ? M(p[h]) : k();
    return f(g, ki(() => it(a, `Expected ${h} to exist in the process context`)), b((m) => Nm(m, a, l, n, d)));
  }, enumerateChildren: (a) => y(() => {
    const l = i(), p = Object.keys(l).map((g) => s(g.toUpperCase())).filter((g) => {
      for (let m = 0; m < a.length; m++) {
        const I = f(a, yc(m)), R = g[m];
        if (R === void 0 || I !== R) return false;
      }
      return true;
    }).flatMap((g) => g.slice(a.length, a.length + 1));
    return xh(p);
  }), patch: lm }));
}, Tm = (t, e, n, r) => {
  const s = Xi(n.length, (a) => a >= r.length ? k() : M([t(a), a + 1])), i = Xi(r.length, (a) => a >= n.length ? k() : M([e(a), a + 1])), o = lr(n, s), c = lr(r, i);
  return [o, c];
}, Fm = (t, e) => {
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
    case fm:
      return F(fe(s.value));
    case pm:
      return x(() => ce(t, e, s.config, r));
    case hm:
      return J(it(e, s.message));
    case dm:
      return f(x(() => ce(t, e, s.first, r)), _o((i) => s.condition(i) ? f(ce(t, e, s.second, r), _o((o) => J(fu(i, o)))) : J(i)));
    case gm:
      return x(() => ce(t, e, s.config(), r));
    case mm:
      return x(() => f(ce(t, e, s.original, r), b(De((i) => f(s.mapOrFail(i), ki(Ye(Fm(e, s.original))))))));
    case _m:
      return x(() => ce(t, lr(e, fe(s.name)), s.config, r));
    case ym:
      return f(Zr(e, t.patch), b((i) => f(t.load(i, s, r), b((o) => {
        if (o.length === 0) {
          const c = f(Wl(i), _t(() => "<n/a>"));
          return J(it([], `Expected ${s.description} with name ${c}`));
        }
        return F(o);
      }))));
    case bm:
      return f(Zr(e, t.patch), b((i) => f(t.enumerateChildren(i), b(Pm), b((o) => o.length === 0 ? x(() => ee(ce(t, e, s.config, true), fe)) : f(De(o, (c) => ce(t, Vl(e, `[${c}]`), s.config, true)), ee((c) => {
        const a = cf(c);
        return a.length === 0 ? fe(kt()) : fe(a);
      }))))));
    case Sm:
      return x(() => f(Zr(e, t.patch), b((i) => f(t.enumerateChildren(i), b((o) => f(o, De((c) => ce(t, lr(i, fe(c)), s.valueConfig, r)), ee((c) => c.length === 0 ? fe(hi()) : f(Am(c), ht((a) => Jh(Zi(q(o), a)))))))))));
    case km:
      return x(() => f(ce(t, e, s.left, r), ks, b((i) => f(ce(t, e, s.right, r), ks, b((o) => {
        if (en(i) && en(o)) return J(lu(i.left, o.left));
        if (en(i) && Pn(o)) return J(i.left);
        if (Pn(i) && en(o)) return J(o.left);
        if (Pn(i) && Pn(o)) {
          const c = f(e, jt(".")), a = Cm(e, c), [l, d] = Tm(a, a, f(i.right, ht(Fe)), f(o.right, ht(Fe)));
          return f(l, Zi(d), De(([h, p]) => f(Da(h, p), ee(([g, m]) => s.zip(g, m)))));
        }
        throw new Error("BUG: ConfigProvider.fromFlatLoop - please report an issue at https://github.com/Effect-TS/effect/issues");
      })))));
  }
}, Cm = (t, e) => (n) => bt(it(t, `The element at index ${n} in a sequence at path "${e}" was missing`)), Rm = (t, e) => t.split(new RegExp(`\\s*${uf(e)}\\s*`)), Nm = (t, e, n, r, s) => s ? f(Rm(t, r), De((i) => n.parse(i.trim())), ki(Ye(e))) : f(n.parse(t), La({ onFailure: Ye(e), onSuccess: fe })), Am = (t) => Object.keys(t[0]).map((e) => t.map((n) => n[e])), Pm = (t) => f(De(t, Lm), La({ onFailure: () => kt(), onSuccess: tr(cn) }), ks, ee(xl)), xm = /^(\[(\d+)\])$/, Lm = (t) => {
  const e = t.match(xm);
  if (e !== null) {
    const n = e[2];
    return f(n !== void 0 && n.length > 0 ? M(n) : k(), Sl(jm));
  }
  return k();
}, jm = (t) => {
  const e = Number.parseInt(t);
  return Number.isNaN(e) ? k() : M(e);
}, Ao = Symbol.for("effect/Console"), hu = at("effect/Console"), qm = { [Ao]: Ao, assert(t, ...e) {
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
}, unsafe: console }, Dm = "effect/Random", Po = Symbol.for(Dm), Um = at("effect/Random");
_i2 = Po;
class Bm {
  constructor(e) {
    __publicField(this, "seed");
    __publicField(this, _i2, Po);
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
    return Vm(e, (n) => this.nextIntBetween(0, n));
  }
}
const Vm = (t, e) => x(() => f(y(() => Array.from(t)), b((n) => {
  const r = [];
  for (let s = n.length; s >= 2; s = s - 1) r.push(s);
  return f(r, Rr((s) => f(e(s), ee((i) => Km(n, s - 1, i)))), In(Nc(n)));
}))), Km = (t, e, n) => {
  const r = t[e];
  return t[e] = t[n], t[n] = r, t;
}, Hm = (t) => new Bm(_(t)), xo = Symbol.for("effect/Tracer"), Jm = (t) => ({ [xo]: xo, ...t }), du = at("effect/Tracer"), pu = at("effect/ParentSpan"), Lo = (function() {
  const t = "abcdef0123456789", e = t.length;
  return function(n) {
    let r = "";
    for (let s = 0; s < n; s++) r += t.charAt(Math.floor(Math.random() * e));
    return r;
  };
})();
class Gm {
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
    this.name = e, this.parent = n, this.context = r, this.startTime = i, this.kind = o, this.status = { _tag: "Started", startTime: i }, this.attributes = /* @__PURE__ */ new Map(), this.traceId = n._tag === "Some" ? n.value.traceId : Lo(32), this.spanId = Lo(16), this.links = Array.from(s);
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
const zm = Jm({ span: (t, e, n, r, s, i) => new Gm(t, e, n, r, s, i), context: (t) => t() }), Wm = f(ei(), Wt(Fi, im()), Wt(hu, qm), Wt(Um, Hm(Math.random())), Wt(wm, Mm()), Wt(du, zm)), fr = T(Symbol.for("effect/DefaultServices/currentServices"), () => Ja(Wm));
function Ym(t) {
  return new Be(t);
}
function Qm() {
  return Ym(/* @__PURE__ */ new Map());
}
const jo = Symbol.for("effect/FiberRefs");
_j = jo;
class Be {
  constructor(e) {
    __publicField(this, "locals");
    __publicField(this, _j, jo);
    this.locals = e;
  }
  pipe() {
    return S(this, arguments);
  }
}
const Zm = (t, e, n, r = false) => {
  const s = t;
  let i = e, o = n, c = r, a;
  for (; a === void 0; ) if (te(i) && te(o)) {
    const l = Q(i)[0], d = St(i), h = Q(o)[0], p = Q(o)[1], g = St(o);
    l.startTimeMillis < h.startTimeMillis ? (o = g, c = true) : l.startTimeMillis > h.startTimeMillis ? i = d : l.id < h.id ? (o = g, c = true) : l.id > h.id ? i = d : a = [p, c];
  } else a = [s.initial, true];
  return a;
}, Xm = u(3, (t, e, n) => {
  const r = new Map(t.locals);
  return n.locals.forEach((s, i) => {
    const o = s[0][1];
    if (!s[0][0][w](e)) {
      if (!r.has(i)) {
        if (v(o, i.initial)) return;
        r.set(i, [[e, i.join(i.initial, o)]]);
        return;
      }
      const c = r.get(i), [a, l] = Zm(i, c, s);
      if (l) {
        const d = i.diff(a, o), h = c[0][1], p = i.join(h, i.patch(d)(h));
        if (!v(h, p)) {
          let g;
          const m = c[0][0];
          m[w](e) ? g = [[m, p], ...c.slice(1)] : g = [[e, p], ...c], r.set(i, g);
        }
      }
    }
  }), new Be(r);
}), e_ = u(2, (t, e) => {
  const n = /* @__PURE__ */ new Map();
  return gu(t, n, e), new Be(n);
}), gu = (t, e, n) => {
  t.locals.forEach((r, s) => {
    const i = r[0][1], o = s.patch(s.fork)(i);
    v(i, o) ? e.set(s, r) : e.set(s, [[n, o], ...r]);
  });
}, mu = u(2, (t, e) => {
  const n = new Map(t.locals);
  return n.delete(e), new Be(n);
}), t_ = u(2, (t, e) => t.locals.has(e) ? M(Q(t.locals.get(e))[1]) : k()), pn = u(2, (t, e) => f(t_(t, e), _t(() => e.initial))), Os = u(2, (t, { fiberId: e, fiberRef: n, value: r }) => {
  if (t.locals.size === 0) return new Be(/* @__PURE__ */ new Map([[n, [[e, r]]]]));
  const s = new Map(t.locals);
  return $s(s, e, n, r), new Be(s);
}), $s = (t, e, n, r) => {
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
}, n_ = u(2, (t, { entries: e, forkAs: n }) => {
  if (t.locals.size === 0) return new Be(new Map(e));
  const r = new Map(t.locals);
  return n !== void 0 && gu(t, r, n), e.forEach(([s, i]) => {
    i.length === 1 ? $s(r, i[0][0], s, i[0][1]) : i.forEach(([o, c]) => {
      $s(r, o, s, c);
    });
  }), new Be(r);
}), r_ = pn, s_ = n_, i_ = Qm, o_ = fg, c_ = hg, a_ = dg, u_ = Va, l_ = Ka, f_ = Ha, h_ = pg, d_ = gg, p_ = f(cn, jl((t) => t.ordinal)), g_ = ql(p_), m_ = (t) => {
  switch (t) {
    case "All":
      return o_;
    case "Debug":
      return f_;
    case "Error":
      return a_;
    case "Fatal":
      return c_;
    case "Info":
      return l_;
    case "Trace":
      return h_;
    case "None":
      return d_;
    case "Warning":
      return u_;
  }
}, _u = (t) => t.replace(/[\s="]/g, "_"), __ = (t) => (e) => `${_u(e.label)}=${t - e.startTime}ms`, y_ = Vs, b_ = vl;
class S_ extends b_ {
}
const yu = "Empty", bu = "Add", Su = "Remove", ku = "Update", vu = "AndThen", k_ = { _tag: yu }, v_ = (t, e) => {
  const n = new Map(t.locals);
  let r = k_;
  for (const [s, i] of e.locals.entries()) {
    const o = Q(i)[1], c = n.get(s);
    if (c !== void 0) {
      const a = Q(c)[1];
      v(a, o) || (r = Xr({ _tag: ku, fiberRef: s, patch: s.diff(a, o) })(r));
    } else r = Xr({ _tag: bu, fiberRef: s, value: o })(r);
    n.delete(s);
  }
  for (const [s] of n.entries()) r = Xr({ _tag: Su, fiberRef: s })(r);
  return r;
}, Xr = u(2, (t, e) => ({ _tag: vu, first: t, second: e })), w_ = u(3, (t, e, n) => {
  let r = n, s = fe(t);
  for (; te(s); ) {
    const i = Q(s), o = St(s);
    switch (i._tag) {
      case yu: {
        s = o;
        break;
      }
      case bu: {
        r = Os(r, { fiberId: e, fiberRef: i.fiberRef, value: i.value }), s = o;
        break;
      }
      case Su: {
        r = mu(r, i.fiberRef), s = o;
        break;
      }
      case ku: {
        const c = pn(r, i.fiberRef);
        r = Os(r, { fiberId: e, fiberRef: i.fiberRef, value: i.fiberRef.patch(i.patch)(c) }), s = o;
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
class I_ {
  constructor(e, n) {
    __publicField(this, "key");
    __publicField(this, "value");
    __publicField(this, _k, Ms);
    __publicField(this, "_hash");
    this.key = e, this.value = n, this._hash = se(wu + this.key + this.value);
  }
  [(_k = Ms, O)]() {
    return this._hash;
  }
  [w](e) {
    return O_(e) && this.key === e.key && this.value === e.value;
  }
  pipe() {
    return S(this, arguments);
  }
}
const E_ = (t, e) => new I_(t, e), O_ = (t) => $(t, Ms), $_ = (t) => {
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
  const r = (s) => n ? bi(() => n(s)) : J(new Mi(s, "An unknown error occurred in Effect.tryPromise"));
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
}, T_ = "Sequential", F_ = "Parallel", C_ = "ParallelN", Iu = { _tag: T_ }, R_ = { _tag: F_ }, N_ = (t) => ({ _tag: C_, parallelism: t }), Ts = Iu, Fs = R_, Cs = N_, A_ = v_, P_ = w_, jr = "effect/FiberStatus", ot = Symbol.for(jr), hr = "Done", qo = "Running", Do = "Suspended", x_ = se(`${jr}-${hr}`);
class L_ {
  constructor() {
    __publicField(this, _l2, ot);
    __publicField(this, "_tag", hr);
  }
  [(_l2 = ot, O)]() {
    return x_;
  }
  [w](e) {
    return Ci(e) && e._tag === hr;
  }
}
class j_ {
  constructor(e) {
    __publicField(this, "runtimeFlags");
    __publicField(this, _m2, ot);
    __publicField(this, "_tag", qo);
    this.runtimeFlags = e;
  }
  [(_m2 = ot, O)]() {
    return f(_(jr), E(_(this._tag)), E(_(this.runtimeFlags)), B(this));
  }
  [w](e) {
    return Ci(e) && e._tag === qo && this.runtimeFlags === e.runtimeFlags;
  }
}
class q_ {
  constructor(e, n) {
    __publicField(this, "runtimeFlags");
    __publicField(this, "blockingOn");
    __publicField(this, _n2, ot);
    __publicField(this, "_tag", Do);
    this.runtimeFlags = e, this.blockingOn = n;
  }
  [(_n2 = ot, O)]() {
    return f(_(jr), E(_(this._tag)), E(_(this.runtimeFlags)), E(_(this.blockingOn)), B(this));
  }
  [w](e) {
    return Ci(e) && e._tag === Do && this.runtimeFlags === e.runtimeFlags && v(this.blockingOn, e.blockingOn);
  }
}
const D_ = new L_(), U_ = (t) => new j_(t), B_ = (t, e) => new q_(t, e), Ci = (t) => $(t, ot), V_ = (t) => t._tag === hr, K_ = D_, Eu = U_, H_ = B_, J_ = V_, G_ = Symbol.for("effect/Micro"), dr = Symbol.for("effect/Micro/MicroExit"), Uo = Symbol.for("effect/Micro/MicroCause"), z_ = { _E: j };
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
    this._tag = e, this.traces = r, this[Uo] = z_, this.name = i, this.stack = c;
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
class W_ extends Ou {
  constructor(e, n = []) {
    super("Die", e, n);
    __publicField(this, "defect");
    this.defect = e;
  }
}
const Y_ = (t, e = []) => new W_(t, e);
class Q_ extends Ou {
  constructor(e = []) {
    super("Interrupt", "interrupted", e);
  }
}
const Z_ = (t = []) => new Q_(t), X_ = (t) => t._tag === "Interrupt", Bo = Symbol.for("effect/Micro/MicroFiber"), ey = { _A: j, _E: j };
_p2 = Bo;
class ty {
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
    this.context = e, this.interruptible = n, this[Bo] = ey;
  }
  getRef(e) {
    return wf(this.context, e);
  }
  addObserver(e) {
    return this._exit ? (e(this._exit), wl) : (this._observers.push(e), () => {
      const n = this._observers.indexOf(e);
      n >= 0 && this._observers.splice(n, 1);
    });
  }
  unsafeInterrupt() {
    this._exit || (this._interrupted = true, this.interruptible && this.evaluate(xi));
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
    const r = Vo.interruptChildren && Vo.interruptChildren(this);
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
        if (this.currentOpCount++, !n && this.getRef(Li).shouldYield(this)) {
          n = true;
          const s = r;
          r = gr(oy, () => s);
        }
        if (r = r[Rs](this), r === qn) {
          const s = this._yielded;
          return dr in s ? (this._yielded = void 0, s) : qn;
        }
      }
    } catch (s) {
      return $(r, Rs) ? Ns(s) : Ns(`MicroFiber.runLoop: Not a valid effect: ${String(r)}`);
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
const Vo = T("effect/Micro/fiberMiddleware", () => ({ interruptChildren: void 0 })), $u = Symbol.for("effect/Micro/identifier"), U = Symbol.for("effect/Micro/args"), Rs = Symbol.for("effect/Micro/evaluate"), Lt = Symbol.for("effect/Micro/successCont"), mt = Symbol.for("effect/Micro/failureCont"), pr = Symbol.for("effect/Micro/ensureCont"), qn = Symbol.for("effect/Micro/Yield"), ny = { _A: j, _E: j, _R: j }, ry = { ...y_, _op: "Micro", [G_]: ny, pipe() {
  return S(this, arguments);
}, [Symbol.iterator]() {
  return new Il(new br(this));
}, toJSON() {
  return { _id: "Micro", op: this[$u], ...U in this ? { args: this[U] } : void 0 };
}, toString() {
  return W(this);
}, [A]() {
  return W(this);
} };
function sy(t) {
  return Ns("Micro.evaluate: Not implemented");
}
const qr = (t) => ({ ...ry, [$u]: t.op, [Rs]: t.eval ?? sy, [Lt]: t.contA, [mt]: t.contE, [pr]: t.ensure }), Ri = (t) => {
  const e = qr(t);
  return function() {
    const n = Object.create(e);
    return n[U] = t.single === false ? arguments : arguments[0], n;
  };
}, Mu = (t) => {
  const e = { ...qr(t), [dr]: dr, _tag: t.op, get [t.prop]() {
    return this[U];
  }, toJSON() {
    return { _id: "MicroExit", _tag: t.op, [t.prop]: this[U] };
  }, [w](n) {
    return uy(n) && n._tag === t.op && v(this[U], n[U]);
  }, [O]() {
    return B(this, E(se(t.op))(_(this[U])));
  } };
  return function(n) {
    const r = Object.create(e);
    return r[U] = n, r[Lt] = void 0, r[mt] = void 0, r[pr] = void 0, r;
  };
}, Ni = Mu({ op: "Success", prop: "value", eval(t) {
  const e = t.getCont(Lt);
  return e ? e[Lt](this[U], t) : t.yieldWith(this);
} }), Tu = Mu({ op: "Failure", prop: "cause", eval(t) {
  let e = t.getCont(mt);
  for (; X_(this[U]) && e && t.interruptible; ) e = t.getCont(mt);
  return e ? e[mt](this[U], t) : t.yieldWith(this);
} }), iy = Ri({ op: "Yield", eval(t) {
  let e = false;
  return t.getRef(Li).scheduleTask(() => {
    e || t.evaluate(ly);
  }, this[U] ?? 0), t.yieldWith(() => {
    e = true;
  });
} }), oy = iy(0), cy = Ni(void 0), Ai = Ri({ op: "WithMicroFiber", eval(t) {
  return this[U](t);
} }), gr = u(2, (t, e) => {
  const n = Object.create(ay);
  return n[U] = t, n[Lt] = e, n;
}), ay = qr({ op: "OnSuccess", eval(t) {
  return t._stack.push(this), this[U];
} }), uy = (t) => $(t, dr), Fu = Ni, Pi = Tu, xi = Pi(Z_()), Ns = (t) => Pi(Y_(t)), ly = Fu(void 0), fy = "setImmediate" in globalThis ? globalThis.setImmediate : (t) => setTimeout(t, 0);
class Cu {
  constructor() {
    __publicField(this, "tasks", []);
    __publicField(this, "running", false);
    __publicField(this, "afterScheduled", () => {
      this.running = false, this.runTasks();
    });
  }
  scheduleTask(e, n) {
    this.tasks.push(e), this.running || (this.running = true, fy(this.afterScheduled));
  }
  runTasks() {
    const e = this.tasks;
    this.tasks = [];
    for (let n = 0, r = e.length; n < r; n++) e[n]();
  }
  shouldYield(e) {
    return e.currentOpCount >= e.getRef(py);
  }
  flush() {
    for (; this.tasks.length > 0; ) this.runTasks();
  }
}
const hy = u(2, (t, e) => Ai((n) => {
  const r = n.context;
  return n.context = e(r), _y(t, () => (n.context = r, cy));
})), dy = u(2, (t, e) => hy(t, Mc(e)));
class py extends Tc()("effect/Micro/currentMaxOpsBeforeYield", { defaultValue: () => 2048 }) {
}
class Li extends Tc()("effect/Micro/currentScheduler", { defaultValue: () => new Cu() }) {
}
const gy = u(2, (t, e) => {
  const n = Object.create(my);
  return n[U] = t, n[Lt] = e.onSuccess, n[mt] = e.onFailure, n;
}), my = qr({ op: "OnSuccessAndFailure", eval(t) {
  return t._stack.push(this), this[U];
} }), _y = u(2, (t, e) => by((n) => gy(n(t), { onFailure: (r) => gr(e(Pi(r)), () => Tu(r)), onSuccess: (r) => gr(e(Fu(r)), () => Ni(r)) }))), Ru = Ri({ op: "SetInterruptible", ensure(t) {
  if (t.interruptible = this[U], t._interrupted && t.interruptible) return () => xi;
} }), yy = (t) => Ai((e) => e.interruptible ? t : (e.interruptible = true, e._stack.push(Ru(false)), e._interrupted ? xi : t)), by = (t) => Ai((e) => e.interruptible ? (e.interruptible = false, e._stack.push(Ru(true)), t(yy)) : t(j)), Sy = (t, e) => {
  const n = new ty(Li.context(new Cu()));
  return n.evaluate(t), n;
};
class ky {
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
class vy {
  constructor(e) {
    __publicField(this, "maxNextTickBeforeTimer");
    __publicField(this, "running", false);
    __publicField(this, "tasks", new ky());
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
    return e.currentOpCount > e.getFiberRef(wg) ? e.getFiberRef($i) : false;
  }
  scheduleTask(e, n) {
    this.tasks.scheduleTask(e, n), this.running || (this.running = true, this.starve());
  }
}
const wy = T(Symbol.for("effect/Scheduler/defaultScheduler"), () => new vy(2048)), Nu = T(Symbol.for("effect/FiberRef/currentScheduler"), () => Z(wy)), Au = T(Symbol.for("effect/FiberRef/currentRequestMap"), () => Z(/* @__PURE__ */ new Map())), Ko = (t, e, n, r) => {
  switch (t) {
    case void 0:
      return e();
    case "unbounded":
      return n();
    case "inherit":
      return Oi(Mg, (s) => s === "unbounded" ? n() : s > 1 ? r(s) : e());
    default:
      return t > 1 ? r(t) : e();
  }
}, ji = "InterruptSignal", qi = "Stateful", Di = "Resume", Ui = "YieldNow", es = (t) => ({ _tag: ji, cause: t }), Wn = (t) => ({ _tag: qi, onFiber: t }), ut = (t) => ({ _tag: Di, effect: t }), Iy = () => ({ _tag: Ui }), Ey = "effect/FiberScope", mr = Symbol.for(Ey);
_q = mr;
class Oy {
  constructor() {
    __publicField(this, _q, mr);
    __publicField(this, "fiberId", Mt);
    __publicField(this, "roots", /* @__PURE__ */ new Set());
  }
  add(e, n) {
    this.roots.add(n), n.addObserver(() => {
      this.roots.delete(n);
    });
  }
}
_r2 = mr;
class $y {
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
const My = (t) => new $y(t.id(), t), Bi = T(Symbol.for("effect/FiberScope/Global"), () => new Oy()), Ty = "effect/Fiber", Fy = Symbol.for(Ty), Cy = { _E: (t) => t, _A: (t) => t }, Ry = "effect/Fiber", Ny = Symbol.for(Ry), Pu = (t) => Ua(Pa(t.await), t.inheritAll);
({ ...Js });
const Ke = "effect/FiberCurrent", Ay = "effect/Logger", Py = Symbol.for(Ay), xy = { _Message: (t) => t, _Output: (t) => t }, Vi = (t) => ({ [Py]: xy, log: t, pipe() {
  return S(this, arguments);
} }), Ly = /^[^\s"=]*$/, jy = (t, e) => ({ annotations: n, cause: r, date: s, fiberId: i, logLevel: o, message: c, spans: a }) => {
  const l = (m) => m.match(Ly) ? m : t(m), d = (m, I) => `${_u(m)}=${l(I)}`, h = (m, I) => " " + d(m, I);
  let p = d("timestamp", s.toISOString());
  p += h("level", o.label), p += h("fiber", ea(i));
  const g = Bl(c);
  for (let m = 0; m < g.length; m++) p += h("message", yt(g[m], e));
  $p(r) || (p += h("cause", vn(r, { renderErrorCause: true })));
  for (const m of a) p += " " + __(s.getTime())(m);
  for (const [m, I] of n) p += h(m, yt(I, e));
  return p;
}, qy = (t) => `"${t.replace(/\\([\s\S])|(")/g, "\\$1$2")}"`, Dy = Vi(jy(qy)), Uy = typeof pe == "object" && pe !== null && typeof pe.stdout == "object" && pe.stdout !== null;
Uy && pe.stdout.isTTY;
const xu = "effect/MetricBoundaries", As = Symbol.for(xu);
class By {
  constructor(e) {
    __publicField(this, "values");
    __publicField(this, _s2, As);
    __publicField(this, "_hash");
    this.values = e, this._hash = f(se(xu), E(gn(this.values)));
  }
  [(_s2 = As, O)]() {
    return this._hash;
  }
  [w](e) {
    return Vy(e) && v(this.values, e.values);
  }
  pipe() {
    return S(this, arguments);
  }
}
const Vy = (t) => $(t, As), Ky = (t) => {
  const e = f(t, mc(ne(Number.POSITIVE_INFINITY)), af);
  return new By(e);
}, Hy = (t) => f(Ul(t.count - 1, (e) => t.start * Math.pow(t.factor, e)), Sr, Ky), Jy = "effect/MetricKeyType", Lu = Symbol.for(Jy), ju = "effect/MetricKeyType/Counter", Ps = Symbol.for(ju), Gy = "effect/MetricKeyType/Frequency", zy = Symbol.for(Gy), Wy = "effect/MetricKeyType/Gauge", Yy = Symbol.for(Wy), qu = "effect/MetricKeyType/Histogram", xs = Symbol.for(qu), Qy = "effect/MetricKeyType/Summary", Zy = Symbol.for(Qy), Du = { _In: (t) => t, _Out: (t) => t };
class Xy {
  constructor(e, n) {
    __publicField(this, "incremental");
    __publicField(this, "bigint");
    __publicField(this, _u2, Du);
    __publicField(this, _t2, Ps);
    __publicField(this, "_hash");
    this.incremental = e, this.bigint = n, this._hash = se(ju);
  }
  [(_u2 = Lu, _t2 = Ps, O)]() {
    return this._hash;
  }
  [w](e) {
    return Uu(e);
  }
  pipe() {
    return S(this, arguments);
  }
}
class eb {
  constructor(e) {
    __publicField(this, "boundaries");
    __publicField(this, _w, Du);
    __publicField(this, _v, xs);
    __publicField(this, "_hash");
    this.boundaries = e, this._hash = f(se(qu), E(_(this.boundaries)));
  }
  [(_w = Lu, _v = xs, O)]() {
    return this._hash;
  }
  [w](e) {
    return Bu(e) && v(this.boundaries, e.boundaries);
  }
  pipe() {
    return S(this, arguments);
  }
}
const tb = (t) => new Xy((t == null ? void 0 : t.incremental) ?? false, (t == null ? void 0 : t.bigint) ?? false), nb = (t) => new eb(t), Uu = (t) => $(t, Ps), rb = (t) => $(t, zy), sb = (t) => $(t, Yy), Bu = (t) => $(t, xs), ib = (t) => $(t, Zy), ob = "effect/MetricKey", Vu = Symbol.for(ob), cb = { _Type: (t) => t }, ab = Zs(v);
class Ki {
  constructor(e, n, r, s = []) {
    __publicField(this, "name");
    __publicField(this, "keyType");
    __publicField(this, "description");
    __publicField(this, "tags");
    __publicField(this, _x, cb);
    __publicField(this, "_hash");
    this.name = e, this.keyType = n, this.description = r, this.tags = s, this._hash = f(se(this.name + this.description), E(_(this.keyType)), E(gn(this.tags)));
  }
  [(_x = Vu, O)]() {
    return this._hash;
  }
  [w](e) {
    return ub(e) && this.name === e.name && v(this.keyType, e.keyType) && v(this.description, e.description) && ab(this.tags, e.tags);
  }
  pipe() {
    return S(this, arguments);
  }
}
const ub = (t) => $(t, Vu), lb = (t, e) => new Ki(t, tb(e), Ws(e == null ? void 0 : e.description)), fb = (t, e, n) => new Ki(t, nb(e), Ws(n)), hb = u(2, (t, e) => e.length === 0 ? t : new Ki(t.name, t.keyType, t.description, Vn(t.tags, e))), db = "effect/MetricState", Mn = Symbol.for(db), Ku = "effect/MetricState/Counter", Ls = Symbol.for(Ku), Hu = "effect/MetricState/Frequency", js = Symbol.for(Hu), Ju = "effect/MetricState/Gauge", qs = Symbol.for(Ju), Gu = "effect/MetricState/Histogram", Ds = Symbol.for(Gu), zu = "effect/MetricState/Summary", Us = Symbol.for(zu), Tn = { _A: (t) => t };
class pb {
  constructor(e) {
    __publicField(this, "count");
    __publicField(this, _z, Tn);
    __publicField(this, _y2, Ls);
    this.count = e;
  }
  [(_z = Mn, _y2 = Ls, O)]() {
    return f(_(Ku), E(_(this.count)), B(this));
  }
  [w](e) {
    return Eb(e) && this.count === e.count;
  }
  pipe() {
    return S(this, arguments);
  }
}
const gb = Zs(v);
class mb {
  constructor(e) {
    __publicField(this, "occurrences");
    __publicField(this, _B, Tn);
    __publicField(this, _A, js);
    __publicField(this, "_hash");
    this.occurrences = e;
  }
  [(_B = Mn, _A = js, O)]() {
    return f(se(Hu), E(gn(q(this.occurrences.entries()))), B(this));
  }
  [w](e) {
    return Ob(e) && gb(q(this.occurrences.entries()), q(e.occurrences.entries()));
  }
  pipe() {
    return S(this, arguments);
  }
}
class _b {
  constructor(e) {
    __publicField(this, "value");
    __publicField(this, _D, Tn);
    __publicField(this, _C, qs);
    this.value = e;
  }
  [(_D = Mn, _C = qs, O)]() {
    return f(_(Ju), E(_(this.value)), B(this));
  }
  [w](e) {
    return $b(e) && this.value === e.value;
  }
  pipe() {
    return S(this, arguments);
  }
}
class yb {
  constructor(e, n, r, s, i) {
    __publicField(this, "buckets");
    __publicField(this, "count");
    __publicField(this, "min");
    __publicField(this, "max");
    __publicField(this, "sum");
    __publicField(this, _F, Tn);
    __publicField(this, _E, Ds);
    this.buckets = e, this.count = n, this.min = r, this.max = s, this.sum = i;
  }
  [(_F = Mn, _E = Ds, O)]() {
    return f(_(Gu), E(_(this.buckets)), E(_(this.count)), E(_(this.min)), E(_(this.max)), E(_(this.sum)), B(this));
  }
  [w](e) {
    return Mb(e) && v(this.buckets, e.buckets) && this.count === e.count && this.min === e.min && this.max === e.max && this.sum === e.sum;
  }
  pipe() {
    return S(this, arguments);
  }
}
class bb {
  constructor(e, n, r, s, i, o) {
    __publicField(this, "error");
    __publicField(this, "quantiles");
    __publicField(this, "count");
    __publicField(this, "min");
    __publicField(this, "max");
    __publicField(this, "sum");
    __publicField(this, _H, Tn);
    __publicField(this, _G, Us);
    this.error = e, this.quantiles = n, this.count = r, this.min = s, this.max = i, this.sum = o;
  }
  [(_H = Mn, _G = Us, O)]() {
    return f(_(zu), E(_(this.error)), E(_(this.quantiles)), E(_(this.count)), E(_(this.min)), E(_(this.max)), E(_(this.sum)), B(this));
  }
  [w](e) {
    return Tb(e) && this.error === e.error && v(this.quantiles, e.quantiles) && this.count === e.count && this.min === e.min && this.max === e.max && this.sum === e.sum;
  }
  pipe() {
    return S(this, arguments);
  }
}
const Sb = (t) => new pb(t), kb = (t) => new mb(t), vb = (t) => new _b(t), wb = (t) => new yb(t.buckets, t.count, t.min, t.max, t.sum), Ib = (t) => new bb(t.error, t.quantiles, t.count, t.min, t.max, t.sum), Eb = (t) => $(t, Ls), Ob = (t) => $(t, js), $b = (t) => $(t, qs), Mb = (t) => $(t, Ds), Tb = (t) => $(t, Us), Fb = "effect/MetricHook", Cb = Symbol.for(Fb), Rb = { _In: (t) => t, _Out: (t) => t }, Fn = (t) => ({ [Cb]: Rb, pipe() {
  return S(this, arguments);
}, ...t }), Ho = BigInt(0), Nb = (t) => {
  let e = t.keyType.bigint ? Ho : 0;
  const n = t.keyType.incremental ? t.keyType.bigint ? (s) => s >= Ho : (s) => s >= 0 : (s) => true, r = (s) => {
    n(s) && (e = e + s);
  };
  return Fn({ get: () => Sb(e), update: r, modify: r });
}, Ab = (t) => {
  const e = /* @__PURE__ */ new Map();
  for (const r of t.keyType.preregisteredWords) e.set(r, 0);
  const n = (r) => {
    const s = e.get(r) ?? 0;
    e.set(r, s + 1);
  };
  return Fn({ get: () => kb(e), update: n, modify: n });
}, Pb = (t, e) => {
  let n = e;
  return Fn({ get: () => vb(n), update: (r) => {
    n = r;
  }, modify: (r) => {
    n = n + r;
  } });
}, xb = (t) => {
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
    const h = Qs(n);
    let p = 0;
    for (let g = 0; g < n; g++) {
      const m = s[g], I = r[g];
      p = p + I, h[g] = [m, p];
    }
    return h;
  };
  return Fn({ get: () => wb({ buckets: d(), count: i, min: c, max: a, sum: o }), update: l, modify: l });
}, Lb = (t) => {
  const { error: e, maxAge: n, maxSize: r, quantiles: s } = t.keyType, i = f(s, tr(cn)), o = Qs(r);
  let c = 0, a = 0, l = 0, d = 0, h = 0;
  const p = (m) => {
    const I = [];
    let R = 0;
    for (; R !== r - 1; ) {
      const K = o[R];
      if (K != null) {
        const [H, Ee] = K, ie = as(m - H);
        Xf(ie, Lc) && Zf(ie, n) && I.push(Ee);
      }
      R = R + 1;
    }
    return jb(e, i, tr(I, cn));
  }, g = (m, I) => {
    if (r > 0) {
      c = c + 1;
      const R = c % r;
      o[R] = [I, m];
    }
    d = a === 0 ? m : Math.min(d, m), h = a === 0 ? m : Math.max(h, m), a = a + 1, l = l + m;
  };
  return Fn({ get: () => Ib({ error: e, quantiles: p(Date.now()), count: a, min: d, max: h, sum: l }), update: ([m, I]) => g(m, I), modify: ([m, I]) => g(m, I) });
}, jb = (t, e, n) => {
  const r = n.length;
  if (!te(e)) return kt();
  const s = e[0], i = e.slice(1), o = Jo(t, r, k(), 0, s, n), c = fe(o);
  return i.forEach((a) => {
    c.push(Jo(t, r, o.value, o.consumed, a, o.rest));
  }), ht(c, (a) => [a.quantile, a.value]);
}, Jo = (t, e, n, r, s, i) => {
  let o = t, c = e, a = n, l = r, d = s, h = i, p = t, g = e, m = n, I = r, R = s, K = i;
  for (; ; ) {
    if (!te(h)) return { quantile: d, value: k(), consumed: l, rest: [] };
    if (d === 1) return { quantile: d, value: M(bc(h)), consumed: l + h.length, rest: [] };
    const H = Q(h), Ee = Ql(h, (N) => N === H), ie = d * c, Jt = o / 2 * ie, Oe = l + Ee[0].length, Rn = Math.abs(Oe - ie);
    if (Oe < ie - Jt) {
      p = o, g = c, m = rn(h), I = Oe, R = d, K = Ee[1], o = p, c = g, a = m, l = I, d = R, h = K;
      continue;
    }
    if (Oe > ie + Jt) {
      const N = Re(a) ? M(H) : a;
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
        return { quantile: d, value: M(a.value), consumed: l, rest: h };
      }
    }
  }
  throw new Error("BUG: MetricHook.resolveQuantiles - please report an issue at https://github.com/Effect-TS/effect/issues");
}, qb = "effect/MetricPair", Db = Symbol.for(qb), Ub = { _Type: (t) => t }, Bb = (t, e) => ({ [Db]: Ub, metricKey: t, metricState: e, pipe() {
  return S(this, arguments);
} }), Vb = "effect/MetricRegistry", Go = Symbol.for(Vb);
_I = Go;
class Kb {
  constructor() {
    __publicField(this, _I, Go);
    __publicField(this, "map", zg());
  }
  snapshot() {
    const e = [];
    for (const [n, r] of this.map) e.push(Bb(n, r.get()));
    return e;
  }
  get(e) {
    const n = f(this.map, Je(e), He);
    if (n == null) {
      if (Uu(e.keyType)) return this.getCounter(e);
      if (sb(e.keyType)) return this.getGauge(e);
      if (rb(e.keyType)) return this.getFrequency(e);
      if (Bu(e.keyType)) return this.getHistogram(e);
      if (ib(e.keyType)) return this.getSummary(e);
      throw new Error("BUG: MetricRegistry.get - unknown MetricKeyType - please report an issue at https://github.com/Effect-TS/effect/issues");
    } else return n;
  }
  getCounter(e) {
    let n = f(this.map, Je(e), He);
    if (n == null) {
      const r = Nb(e);
      f(this.map, Yt(e)) || f(this.map, Qt(e, r)), n = r;
    }
    return n;
  }
  getFrequency(e) {
    let n = f(this.map, Je(e), He);
    if (n == null) {
      const r = Ab(e);
      f(this.map, Yt(e)) || f(this.map, Qt(e, r)), n = r;
    }
    return n;
  }
  getGauge(e) {
    let n = f(this.map, Je(e), He);
    if (n == null) {
      const r = Pb(e, e.keyType.bigint ? BigInt(0) : 0);
      f(this.map, Yt(e)) || f(this.map, Qt(e, r)), n = r;
    }
    return n;
  }
  getHistogram(e) {
    let n = f(this.map, Je(e), He);
    if (n == null) {
      const r = xb(e);
      f(this.map, Yt(e)) || f(this.map, Qt(e, r)), n = r;
    }
    return n;
  }
  getSummary(e) {
    let n = f(this.map, Je(e), He);
    if (n == null) {
      const r = Lb(e);
      f(this.map, Yt(e)) || f(this.map, Qt(e, r)), n = r;
    }
    return n;
  }
}
const Hb = () => new Kb(), Jb = "effect/Metric", Gb = Symbol.for(Jb), zb = { _Type: (t) => t, _In: (t) => t, _Out: (t) => t }, zo = T(Symbol.for("effect/Metric/globalMetricRegistry"), () => Hb()), Wu = function(t, e, n, r) {
  const s = Object.assign((i) => ig(i, (o) => Zb(s, o)), { [Gb]: zb, keyType: t, unsafeUpdate: e, unsafeValue: n, unsafeModify: r, register() {
    return this.unsafeValue([]), this;
  }, pipe() {
    return S(this, arguments);
  } });
  return s;
}, Dr = (t, e) => Yu(lb(t, e)), Yu = (t) => {
  let e;
  const n = /* @__PURE__ */ new WeakMap(), r = (s) => {
    if (s.length === 0) return e !== void 0 || (e = zo.get(t)), e;
    let i = n.get(s);
    return i !== void 0 || (i = zo.get(hb(t, s)), n.set(s, i)), i;
  };
  return Wu(t.keyType, (s, i) => r(i).update(s), (s) => r(s).get(), (s, i) => r(i).modify(s));
}, Wb = (t, e, n) => Yu(fb(t, e, n)), Yb = u(3, (t, e, n) => Qb(t, [E_(e, n)])), Qb = u(2, (t, e) => Wu(t.keyType, (n, r) => t.unsafeUpdate(n, Vn(e, r)), (n) => t.unsafeValue(Vn(e, n)), (n, r) => t.unsafeModify(n, Vn(e, r)))), Zb = u(2, (t, e) => Oi(vs, (n) => y(() => t.unsafeUpdate(e, n))));
({ ...sc });
const Xb = u(2, (t, e) => Oi(Au, (n) => y(() => {
  if (n.has(t)) {
    const r = n.get(t);
    r.state.completed || (r.state.completed = true, Za(r.result, e));
  }
}))), eS = "effect/Supervisor", Ur = Symbol.for(eS), Hi = { _T: (t) => t };
_J = Ur;
const _Br = class _Br {
  constructor(e, n) {
    __publicField(this, "underlying");
    __publicField(this, "value0");
    __publicField(this, _J, Hi);
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
    return new _Br(this, f(this.value, ee(e)));
  }
  zip(e) {
    return new Vr(this, e);
  }
};
let Br = _Br;
_K = Ur;
const _Vr = class _Vr {
  constructor(e, n) {
    __publicField(this, "left");
    __publicField(this, "right");
    __publicField(this, "_tag", "Zip");
    __publicField(this, _K, Hi);
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
    return new Br(this, f(this.value, ee(e)));
  }
  zip(e) {
    return new _Vr(this, e);
  }
};
let Vr = _Vr;
const Qu = (t) => $(t, Ur) && rc(t, "Zip");
_L = Ur;
class tS {
  constructor(e) {
    __publicField(this, "effect");
    __publicField(this, _L, Hi);
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
    return new Br(this, f(this.value, ee(e)));
  }
  zip(e) {
    return new Vr(this, e);
  }
  onRun(e, n) {
    return e();
  }
}
const nS = (t) => new tS(t), Kr = T("effect/Supervisor/none", () => nS(we)), rS = qt, Zu = "Empty", Xu = "AddSupervisor", el = "RemoveSupervisor", tl = "AndThen", on = { _tag: Zu }, Yn = (t, e) => ({ _tag: tl, first: t, second: e }), sS = (t, e) => iS(e, ne(t)), iS = (t, e) => {
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
        n = Bs(n, s.supervisor), r = Ge(r);
        break;
      }
      case tl: {
        r = ge(s.first)(ge(s.second)(Ge(r)));
        break;
      }
    }
  }
  return n;
}, Bs = (t, e) => v(t, e) ? Kr : Qu(t) ? Bs(t.left, e).zip(Bs(t.right, e)) : t, _r = (t) => v(t, Kr) ? tt() : Qu(t) ? f(_r(t.left), ln(_r(t.right))) : li(t), oS = (t, e) => {
  if (v(t, e)) return on;
  const n = _r(t), r = _r(e), s = f(r, io(n), sr(on, (o, c) => Yn(o, { _tag: Xu, supervisor: c }))), i = f(n, io(r), sr(on, (o, c) => Yn(o, { _tag: el, supervisor: c })));
  return Yn(s, i);
}, cS = rS({ empty: on, patch: sS, combine: Yn, diff: oS }), aS = Dr("effect_fiber_started", { incremental: true }), Wo = Dr("effect_fiber_active"), uS = Dr("effect_fiber_successes", { incremental: true }), lS = Dr("effect_fiber_failures", { incremental: true }), fS = Yb(Wb("effect_fiber_lifetimes", Hy({ start: 0.5, factor: 2, count: 35 })), "time_unit", "milliseconds"), Zt = "Continue", hS = "Done", Yo = "Yield", dS = { _E: (t) => t, _A: (t) => t }, Dn = (t) => {
  throw new Error(`BUG: FiberRuntime - ${yt(t)} - please report an issue at https://github.com/Effect-TS/effect/issues`);
}, Me = Symbol.for("effect/internal/fiberRuntime/YieldedOp"), Te = T("effect/internal/fiberRuntime/yieldedOpChannel", () => ({ currentOp: null })), Xt = { [Qn]: (t, e, n) => G(() => e.effect_instruction_i1(n)), OnStep: (t, e, n) => L(L(n)), [Xn]: (t, e, n) => G(() => e.effect_instruction_i2(n)), [zs]: (t, e, n) => (t.patchRuntimeFlags(t.currentRuntimeFlags, e.patch), je(t.currentRuntimeFlags) && t.isInterrupted() ? C(t.getInterruptedCause()) : L(n)), [Zn]: (t, e, n) => (G(() => e.effect_instruction_i2(n)), G(() => e.effect_instruction_i0()) ? (t.pushStack(e), G(() => e.effect_instruction_i1())) : we), [tn]: (t, e, n) => {
  for (; ; ) {
    const r = G(() => e.effect_instruction_i0.next(n));
    if (r.done) return L(r.value);
    const s = $l(r.value);
    if (Lr(s)) {
      if (s._tag === "Failure") return s;
    } else return t.pushStack(e), s;
    n = s.value;
  }
} }, pS = { [ji]: (t, e, n, r) => (t.processNewInterruptSignal(r.cause), je(e) ? C(r.cause) : n), [Di]: (t, e, n, r) => {
  throw new Error("It is illegal to have multiple concurrent run loops in a single fiber");
}, [qi]: (t, e, n, r) => (r.onFiber(t, Eu(e)), n), [Ui]: (t, e, n, r) => b(Ii(), () => n) }, gS = (t) => Rr(lp(t), (e) => Xe(Ip(e), ([n, r]) => {
  const s = /* @__PURE__ */ new Map(), i = [];
  for (const c of r) {
    i.push(Qe(c));
    for (const a of c) s.set(a.request, a);
  }
  const o = i.flat();
  return Pr(TS(n.runAll(i), o, () => o.forEach((c) => {
    c.listeners.interrupted = true;
  })), Au, s);
}, false, false)), mS = ac();
class nl extends S_ {
  constructor(e, n, r) {
    super();
    __publicField(this, _N, Cy);
    __publicField(this, _M, dS);
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
    if (this.currentRuntimeFlags = r, this._fiberId = e, this._fiberRefs = n, lo(r)) {
      const s = this.getFiberRef(vs);
      aS.unsafeUpdate(1, s), Wo.unsafeUpdate(1, s);
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
    return this.ask((e, n) => J_(n) ? e.currentRuntimeFlags : n.runtimeFlags);
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
      const n = Dg(this._fiberId);
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
      const r = e.id(), s = e.getFiberRefs(), i = n.runtimeFlags, o = this.getFiberRefs(), c = Xm(s, r, o);
      e.setFiberRefs(c);
      const a = e.getFiberRef(tc), l = f(Jn(i, a), ho(Dt), ho(bs));
      return cg(l);
    });
  }
  get poll() {
    return y(() => Ws(this._exitValue));
  }
  unsafePoll() {
    return this._exitValue;
  }
  interruptAsFork(e) {
    return y(() => this.tell(es(qe(e))));
  }
  unsafeInterruptAsFork(e) {
    this.tell(es(qe(e)));
  }
  addObserver(e) {
    this._exitValue !== null ? e(this._exitValue) : this._observers.push(e);
  }
  removeObserver(e) {
    this._observers = this._observers.filter((n) => n !== e);
  }
  getFiberRefs() {
    return this.setFiberRef(tc, this.currentRuntimeFlags), this._fiberRefs;
  }
  unsafeDeleteFiberRef(e) {
    this._fiberRefs = mu(this._fiberRefs, e);
  }
  getFiberRef(e) {
    return this._fiberRefs.locals.has(e) ? this._fiberRefs.locals.get(e)[0][1] : e.initial;
  }
  setFiberRef(e, n) {
    this._fiberRefs = Os(this._fiberRefs, { fiberId: this._fiberId, fiberRef: e, value: n }), this.refreshRefCache();
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
        for (; n === Zt; ) n = this._queue.length === 0 ? hS : this.evaluateMessageWhileSuspended(this._queue.splice(0, 1)[0]);
      } finally {
        this._running = false, globalThis[Ke] = r;
      }
      this._queue.length > 0 && !this._running ? (this._running = true, n === Yo ? (this.drainQueueLaterOnExecutor(), e = false) : e = true) : e = false;
    }
  }
  drainQueueLaterOnExecutor() {
    this.currentScheduler.scheduleTask(this.run, this.getFiberRef($i));
  }
  drainQueueWhileRunning(e, n) {
    let r = n;
    for (; this._queue.length > 0; ) {
      const s = this._queue.splice(0, 1)[0];
      r = pS[s._tag](this, e, r, s);
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
    for (const n of this._children) n.tell(es(qe(this.id()))), e = true;
    return e;
  }
  interruptAllChildren() {
    if (this.sendInterruptSignalToAllChildren()) {
      const e = this._children.values();
      this._children = null;
      let n = false;
      return wi({ while: () => !n, body: () => {
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
    if (lo(this.currentRuntimeFlags)) {
      const n = this.getFiberRef(vs), r = this.id().startTimeMillis, s = Date.now();
      switch (fS.unsafeUpdate(s - r, n), Wo.unsafeUpdate(-1, n), e._tag) {
        case le: {
          uS.unsafeUpdate(1, n);
          break;
        }
        case ue: {
          lS.unsafeUpdate(1, n);
          break;
        }
      }
    }
    if (e._tag === "Failure") {
      const n = this.getFiberRef(Fg);
      !mi(e.cause) && n._tag === "Some" && this.log("Fiber terminated with an unhandled error", e.cause, n);
    }
  }
  setExitValue(e) {
    this._exitValue = e, this.reportExitValue(e);
    for (let n = this._observers.length - 1; n >= 0; n--) this._observers[n](e);
    this._observers = [];
  }
  getLoggers() {
    return this.getFiberRef(kS);
  }
  log(e, n, r) {
    const s = ve(r) ? r.value : this.getFiberRef(Eg), i = this.getFiberRef(_S);
    if (g_(i, s)) return;
    const o = this.getFiberRef(Og), c = this.getFiberRef(Ig), a = this.getLoggers(), l = this.getFiberRefs();
    if (Wc(a) > 0) {
      const d = Oc(this.getFiberRef(fr), Fi), h = new Date(d.unsafeCurrentTimeMillis());
      El(l, () => {
        for (const p of a) p.log({ fiberId: this.id(), logLevel: s, message: e, cause: n, context: l, spans: o, annotations: c, date: h });
      });
    }
  }
  evaluateMessageWhileSuspended(e) {
    switch (e._tag) {
      case Ui:
        return Yo;
      case ji:
        return this.processNewInterruptSignal(e.cause), this._asyncInterruptor !== null && (this._asyncInterruptor(C(e.cause)), this._asyncInterruptor = null), Zt;
      case Di:
        return this._asyncInterruptor = null, this._asyncBlockingOn = null, this.evaluateEffect(e.effect), Zt;
      case qi:
        return e.onFiber(this, this._exitValue !== null ? K_ : H_(this.currentRuntimeFlags, this._asyncBlockingOn)), Zt;
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
        if (s === Me) {
          const i = Te.currentOp;
          Te.currentOp = null, i._op === Bn ? ip(this.currentRuntimeFlags) ? (this.tell(Iy()), this.tell(ut(ze)), n = null) : n = ze : i._op === nn && (n = null);
        } else {
          this.currentRuntimeFlags = f(this.currentRuntimeFlags, op(bs));
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
      if (e._op !== Hr) return e;
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
  [(_N = Fy, _M = Ny, Ol)](e) {
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
      const s = Sy(dy(e, this.currentContext));
      return s.addObserver((i) => {
        if (i._tag === "Success") return r(L(i.value));
        switch (i.cause._tag) {
          case "Interrupt":
            return r(C(qe(Mt)));
          case "Fail":
            return r(J(i.cause.error));
          case "Die":
            return r(bo(i.cause.defect));
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
    return r !== void 0 ? (r._op in Xt || Dn(r), Xt[r._op](this, r, n)) : (Te.currentOp = L(n), Me);
  }
  [le](e) {
    const n = e, r = this.getNextSuccessCont();
    return r !== void 0 ? (r._op in Xt || Dn(r), Xt[r._op](this, r, n.effect_instruction_i0)) : (Te.currentOp = n, Me);
  }
  [ue](e) {
    const n = e.effect_instruction_i0, r = this.getNextFailCont();
    if (r !== void 0) switch (r._op) {
      case Hr:
      case Xn:
        return je(this.currentRuntimeFlags) && this.isInterrupted() ? C(po(n)) : G(() => r.effect_instruction_i1(n));
      case "OnStep":
        return je(this.currentRuntimeFlags) && this.isInterrupted() ? C(po(n)) : L(C(n));
      case zs:
        return this.patchRuntimeFlags(this.currentRuntimeFlags, r.patch), je(this.currentRuntimeFlags) && this.isInterrupted() ? C(ae(n, this.getInterruptedCause())) : C(n);
      default:
        Dn(r);
    }
    else return Te.currentOp = C(n), Me;
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
      const c = A_(i.refs, n), a = Jn(i.flags, r);
      return L(Ma(e.effect_instruction_i0, re((l) => {
        for (; s.length > 0; ) l.pushStack(s.pop());
        return l.setFiberRefs(P_(l.id(), l.getFiberRefs())(c)), l.currentRuntimeFlags = Gn(a)(l.currentRuntimeFlags), e.effect_instruction_i1;
      })));
    }
    return Nr((s) => b(rl(Yp(e.effect_instruction_i0)), () => s(e.effect_instruction_i1)));
  }
  RunBlocked(e) {
    return gS(e.effect_instruction_i0);
  }
  [mn](e) {
    const n = e.effect_instruction_i0, r = this.currentRuntimeFlags, s = Gn(r, n);
    if (je(s) && this.isInterrupted()) return C(this.getInterruptedCause());
    if (this.patchRuntimeFlags(this.currentRuntimeFlags, n), e.effect_instruction_i1) {
      const i = Jn(s, r);
      return this.pushStack(new Qp(i, e)), G(() => e.effect_instruction_i1(r));
    } else return ze;
  }
  [Qn](e) {
    return this.pushStack(e), e.effect_instruction_i0;
  }
  OnStep(e) {
    return this.pushStack(e), e.effect_instruction_i0;
  }
  [Hr](e) {
    return this.pushStack(e), e.effect_instruction_i0;
  }
  [Xn](e) {
    return this.pushStack(e), e.effect_instruction_i0;
  }
  [nn](e) {
    return this._asyncBlockingOn = e.effect_instruction_i1, this.initiateAsync(this.currentRuntimeFlags, e.effect_instruction_i0), Te.currentOp = e, Me;
  }
  [Bn](e) {
    return this._isYielding = false, Te.currentOp = e, Me;
  }
  [Zn](e) {
    const n = e.effect_instruction_i0, r = e.effect_instruction_i1;
    return n() ? (this.pushStack(e), r()) : ze;
  }
  [tn](e) {
    return Xt[tn](this, e, void 0);
  }
  [Hs](e) {
    return G(() => e.commit());
  }
  runLoop(e) {
    let n = e;
    for (this.currentOpCount = 0; ; ) {
      if ((this.currentRuntimeFlags & sp) !== 0 && this.currentSupervisor.onEffect(this, n), this._queue.length > 0 && (n = this.drainQueueWhileRunning(this.currentRuntimeFlags, n)), !this._isYielding) {
        this.currentOpCount += 1;
        const r = this.currentScheduler.shouldYield(this);
        if (r !== false) {
          this._isYielding = true, this.currentOpCount = 0;
          const s = n;
          n = b(Ii({ priority: r }), () => s);
        }
      }
      try {
        if (n = this.currentTracer.context(() => {
          if (mS !== n[Pt]._V) {
            const r = this.getFiberRef(Cg);
            if (r._tag === "Some") {
              const s = n[Pt]._V;
              this.log(`Executing an Effect versioned ${s} with a Runtime of version ${ac()}, you may want to dedupe the effect dependencies, you can use the language service plugin to detect this at compile time: https://github.com/Effect-TS/language-service`, Rt, r);
            }
          }
          return this[n._op](n);
        }, this), n === Me) {
          const r = Te.currentOp;
          return r._op === Bn || r._op === nn ? Me : (Te.currentOp = null, r._op === le || r._op === ue ? r : C(Ae(r)));
        }
      } catch (r) {
        n !== Me && !$(n, "_op") || !(n._op in this) ? n = eg(`Not a valid effect: ${yt(n)}`) : xg(r) ? n = C(ae(Ae(r), qe(Mt))) : n = bo(r);
      }
    }
  }
}
const _S = T("effect/FiberRef/currentMinimumLogLevel", () => Z(m_("Info"))), yS = (t) => Vi((e) => {
  const n = r_(e.context, fr);
  Oc(n, hu).unsafe.log(t.log(e));
}), bS = T(Symbol.for("effect/Logger/defaultLogger"), () => yS(Dy)), SS = T(Symbol.for("effect/Logger/tracerLogger"), () => Vi(({ annotations: t, cause: e, context: n, fiberId: r, logLevel: s, message: i }) => {
  const o = _n(pn(n, On), pu);
  if (o._tag === "None" || o.value._tag === "ExternalSpan") return;
  const c = $c(pn(n, fr), Fi), a = {};
  for (const [l, d] of t) a[l] = d;
  a["effect.fiberId"] = Hh(r), a["effect.logLevel"] = s.label, e !== null && e._tag !== "Empty" && (a["effect.cause"] = vn(e, { renderErrorCause: true })), o.value.event(yt(Array.isArray(i) && i.length === 1 ? i[0] : i), c.unsafeCurrentTimeNanos(), a);
})), kS = T(Symbol.for("effect/FiberRef/currentLoggers"), () => Sg(li(bS, SS))), vS = u((t) => Ml(t[0]), (t, e, n) => re((r) => {
  const s = (n == null ? void 0 : n.batching) === true || (n == null ? void 0 : n.batching) === "inherit" && r.getFiberRef(Tg);
  return (n == null ? void 0 : n.discard) ? Ko(n.concurrency, () => lt(Ts, n == null ? void 0 : n.concurrentFinalizers)((i) => s ? Xe(t, (o, c) => i(e(o, c)), true, false, 1) : Rr(t, (o, c) => i(e(o, c)))), () => lt(Fs, n == null ? void 0 : n.concurrentFinalizers)((i) => Xe(t, (o, c) => i(e(o, c)), s, false)), (i) => lt(Cs(i), n == null ? void 0 : n.concurrentFinalizers)((o) => Xe(t, (c, a) => o(e(c, a)), s, false, i))) : Ko(n == null ? void 0 : n.concurrency, () => lt(Ts, n == null ? void 0 : n.concurrentFinalizers)((i) => s ? Qo(t, 1, (o, c) => i(e(o, c)), true) : De(t, (o, c) => i(e(o, c)))), () => lt(Fs, n == null ? void 0 : n.concurrentFinalizers)((i) => wS(t, (o, c) => i(e(o, c)), s)), (i) => lt(Cs(i), n == null ? void 0 : n.concurrentFinalizers)((o) => Qo(t, i, (c, a) => o(e(c, a)), s)));
})), wS = (t, e, n) => x(() => {
  const r = q(t), s = new Array(r.length);
  return Ar(Xe(r, (o, c) => b(e(o, c), (a) => y(() => s[c] = a)), n, false), F(s));
}), Xe = (t, e, n, r, s) => Nr((i) => og((o) => re((c) => {
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
    const _e2 = qa(o(N)), Y = ES(_e2, c, c.currentRuntimeFlags, Bi);
    return c.currentScheduler.scheduleTask(() => {
      X && Y.unsafeInterruptAsFork(c.id()), Y.resume(_e2);
    }, 0), Y;
  }, Jt = () => {
    r || (l -= a.length, a = []), h = true, I();
  }, Oe = n ? rg : Na, Rn = ie(st((N) => {
    const X = (Y, $e) => {
      Y._op === "Blocked" ? H.push(Y) : (m.push({ index: $e, exit: Y }), Y._op === "Failure" && !h && Jt());
    }, _e2 = () => {
      if (a.length > 0) {
        const Y = a.pop();
        let $e = d++;
        const Nn = () => {
          const oe = a.pop();
          return $e = d++, b(Ii(), () => b(Oe(i(e(oe, $e))), Ve));
        }, Ve = (oe) => a.length > 0 && (X(oe, $e), a.length > 0) ? Nn() : F(oe), An = b(Oe(i(e(Y, $e))), Ve), ye = ie(An);
        R.push(ye), g.add(ye), h && ye.currentScheduler.scheduleTask(() => {
          ye.unsafeInterruptAsFork(c.id());
        }, 0), ye.addObserver((oe) => {
          let Gt;
          if (oe._op === "Failure" ? Gt = oe : Gt = oe.effect_instruction_i0, K.push(ye), g.delete(ye), X(Gt, $e), m.length === l) N(F(_t(Io(Ee(), { parallel: true }), () => ze)));
          else if (H.length + m.length === l) {
            const zi = Ee(), il = H.map((zt) => zt.effect_instruction_i0).reduce(ya);
            N(F(Ma(il, Xe([_t(Io(zi, { parallel: true }), () => ze), ...H.map((zt) => zt.effect_instruction_i1)], (zt) => zt, n, true, s))));
          } else _e2();
        });
      }
    };
    for (let Y = 0; Y < p; Y++) _e2();
  }));
  return En(vi(Pa(i(Pu(Rn))), Ya({ onFailure: (N) => {
    Jt();
    const X = H.length + 1, _e2 = Math.min(typeof s == "number" ? s : H.length, H.length), Y = Array.from(H);
    return st(($e) => {
      let Nn = 0, Ve = 0;
      const An = (oe, Gt) => (zi) => {
        Nn++, Nn === X && $e(L(C(N))), Y.length > 0 && Gt && ye();
      }, ye = () => {
        ie(Y.pop(), true).addObserver(An(Ve, true)), Ve++;
      };
      Rn.addObserver(An(Ve, false)), Ve++;
      for (let oe = 0; oe < _e2; oe++) ye();
    });
  }, onSuccess: () => De(K, (N) => N.inheritAll) })));
}))), Qo = (t, e, n, r) => x(() => {
  const s = q(t), i = new Array(s.length);
  return Ar(Xe(s, (c, a) => ee(n(c, a), (l) => i[a] = l), r, false, e), F(i));
}), rl = (t) => OS(t, Bi), IS = (t, e, n, r = null) => {
  const s = sl(t, e, n, r);
  return s.resume(t), s;
}, ES = (t, e, n, r = null) => sl(t, e, n, r), sl = (t, e, n, r = null) => {
  const s = ta(), i = e.getFiberRefs(), o = e_(i, s), c = new nl(s, o, n), a = pn(o, On), l = c.currentSupervisor;
  return l.onStart(a, t, M(e), c), c.addObserver((h) => l.onEnd(h, c)), (r !== null ? r : f(e.getFiberRef(ws), _t(() => e.scope()))).add(n, c), c;
}, OS = (t, e) => re((n, r) => F(IS(t, n, r.runtimeFlags, e))), Zo = (t) => $n((e) => ct(_n(e, Cn), { onNone: () => t, onSome: (n) => {
  switch (n.strategy._tag) {
    case "Parallel":
      return t;
    case "Sequential":
    case "ParallelN":
      return b(xr(n, Fs), (r) => Ji(t, r));
  }
} })), Xo = (t) => (e) => $n((n) => ct(_n(n, Cn), { onNone: () => e, onSome: (r) => r.strategy._tag === "ParallelN" && r.strategy.parallelism === t ? e : b(xr(r, Cs(t)), (s) => Ji(e, s)) })), lt = (t, e) => (n) => $n((r) => ct(_n(r, Cn), { onNone: () => n(j), onSome: (s) => {
  if (e === true) {
    const i = t._tag === "Parallel" ? Zo : t._tag === "Sequential" ? ec : Xo(t.parallelism);
    switch (s.strategy._tag) {
      case "Parallel":
        return i(n(Zo));
      case "Sequential":
        return i(n(ec));
      case "ParallelN":
        return i(n(Xo(s.strategy.parallelism)));
    }
  } else return n(j);
} })), ec = (t) => $n((e) => ct(_n(e, Cn), { onNone: () => t, onSome: (n) => {
  switch (n.strategy._tag) {
    case "Sequential":
      return t;
    case "Parallel":
    case "ParallelN":
      return b(xr(n, Ts), (r) => Ji(t, r));
  }
} })), Cn = at("effect/Scope"), Ji = u(2, (t, e) => Hg(t, Mc($f(Cn, e)))), $S = (t) => Kt(t, { differ: cS, fork: on }), tc = vg(cp), MS = $S(Kr), TS = (t, e, n) => Aa((r) => b(b(rl(xa(t)), (s) => st((i) => {
  const o = e.map((l) => l.listeners.count), c = () => {
    o.every((l) => l === 0) && e.every((l) => l.result.state.current._tag === "Pending" ? true : !!(l.result.state.current._tag === "Done" && Lr(l.result.state.current.effect) && l.result.state.current.effect._tag === "Failure" && Tp(l.result.state.current.effect.cause))) && (a.forEach((l) => l()), n == null ? void 0 : n(), i(lg(s)));
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
  return Rr(s, (i) => Xb(i.request, Lg(r)));
}))), FS = Ng, CS = xr, Gi = (t) => function() {
  if (arguments.length === 1) {
    const e = arguments[0];
    return (n, ...r) => t(e, n, ...r);
  }
  return t.apply(this, arguments);
}, RS = Gi((t, e, n) => {
  const r = ta(), s = [[On, [[r, t.context]]]];
  (n == null ? void 0 : n.scheduler) && s.push([Nu, [[r, n.scheduler]]]);
  let i = s_(t.fiberRefs, { entries: s, forkAs: r });
  (n == null ? void 0 : n.updateRefs) && (i = n.updateRefs(i, r));
  const o = new nl(r, i, t.runtimeFlags);
  let c = e;
  (n == null ? void 0 : n.scope) && (c = b(CS(n.scope, Iu), (l) => Ar(Rg(l, Aa((d) => v(d, o.id()) ? we : Ba(o, d))), vi(e, (d) => FS(l, d)))));
  const a = o.currentSupervisor;
  return a !== Kr && (a.onStart(t.context, c, k(), o), o.addObserver((l) => a.onEnd(l, o))), Bi.add(t.runtimeFlags, o), (n == null ? void 0 : n.immediate) === false ? o.resume(c) : o.start(c), o;
}), ts = Symbol.for("effect/Runtime/FiberFailure"), Un = Symbol.for("effect/Runtime/FiberFailure/Cause");
class NS extends Error {
  constructor(e) {
    const n = Oa(e)[0];
    super((n == null ? void 0 : n.message) || "An error has occurred");
    __publicField(this, _P);
    __publicField(this, _O);
    this[ts] = ts, this[Un] = e, this.name = n ? `(FiberFailure) ${n.name}` : "FiberFailure", (n == null ? void 0 : n.stack) && (this.stack = n.stack);
  }
  toJSON() {
    return { _id: "FiberFailure", cause: this[Un].toJSON() };
  }
  toString() {
    return "(FiberFailure) " + vn(this[Un], { renderErrorCause: true });
  }
  [(_P = ts, _O = Un, A)]() {
    return this.toString();
  }
}
const AS = (t) => {
  const e = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  const n = new NS(t);
  return Error.stackTraceLimit = e, n;
}, PS = (t) => {
  const e = t;
  switch (e._op) {
    case "Failure":
    case "Success":
      return e;
    case "Left":
      return Eo(e.left);
    case "Right":
      return L(e.right);
    case "Some":
      return L(e.value);
    case "None":
      return Eo(new Wa());
  }
}, xS = Gi((t, e, n) => LS(t, e, n).then((r) => {
  switch (r._tag) {
    case le:
      return r.effect_instruction_i0;
    case ue:
      throw AS(r.effect_instruction_i0);
  }
})), LS = Gi((t, e, n) => new Promise((r) => {
  const s = PS(e);
  s && r(s);
  const i = RS(t)(e);
  i.addObserver((o) => {
    r(o);
  }), (n == null ? void 0 : n.signal) !== void 0 && (n.signal.aborted ? i.unsafeInterruptAsFork(i.id()) : n.signal.addEventListener("abort", () => {
    i.unsafeInterruptAsFork(i.id());
  }, { once: true }));
}));
class jS {
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
const qS = (t) => new jS(t.context, t.runtimeFlags, t.fiberRefs), DS = ma(Dt, pa, da), US = qS({ context: ei(), runtimeFlags: DS, fiberRefs: i_() }), BS = xS(US), HS = vS, JS = J, GS = ug, zS = F, WS = $_, YS = M_, QS = BS;
export {
  JS as a,
  YS as b,
  HS as f,
  GS as g,
  QS as r,
  zS as s,
  WS as t
};
