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
var _t2;
import { $ as Dt, b as Bt, B as J, h as T, Z as Vt, y as Gt, g as it, ak as Ht, z as Jt, A as ut, C as W, c as U, aa as Wt, D as St, a as yt, F as $t, au as $, ae as vt, a2 as ct, av as ft, m as Yt, aw as lt, ax as z, ay as qt, ad as zt, az as Kt, d as Xt, aA as K, aB as Lt, a8 as Zt, a6 as Qt, aC as Ot, q as te, aD as ee } from "./C4Jx_sal.js";
function $e(t, e) {
  return e;
}
function ne(t, e, n, r) {
  for (var s = [], a = e.length, o = 0; o < a; o++) qt(e[o].e, s, true);
  var u = a > 0 && s.length === 0 && n !== null;
  if (u) {
    var h = n.parentNode;
    zt(h), h.append(n), r.clear(), E(t, e[0].prev, e[a - 1].next);
  }
  Kt(s, () => {
    for (var m = 0; m < a; m++) {
      var _ = e[m];
      u || (r.delete(_.k), E(t, _.prev, _.next)), Xt(_.e, !u);
    }
  });
}
function Ye(t, e, n, r, s, a = null) {
  var o = t, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, h = (e & Ot) !== 0;
  if (h) {
    var m = t;
    o = T ? J(Vt(m)) : m.appendChild(Dt());
  }
  T && Gt();
  var _ = null, w = false, f = Ht(() => {
    var d = n();
    return Qt(d) ? d : d == null ? [] : vt(d);
  });
  Bt(() => {
    var d = it(f), i = d.length;
    if (w && i === 0) return;
    w = i === 0;
    let g = false;
    if (T) {
      var S = o.data === Jt;
      S !== (i === 0) && (o = ut(), J(o), W(false), g = true);
    }
    if (T) {
      for (var v = null, O, p = 0; p < i; p++) {
        if (U.nodeType === 8 && U.data === Wt) {
          o = U, g = true, W(false);
          break;
        }
        var c = d[p], l = r(c, p);
        O = gt(U, u, v, null, c, l, p, s, e, n), u.items.set(l, O), v = O;
      }
      i > 0 && J(ut());
    }
    T || re(d, u, o, s, e, r, n), a !== null && (i === 0 ? _ ? St(_) : _ = yt(() => a(o)) : _ !== null && $t(_, () => {
      _ = null;
    })), g && W(true), it(f);
  }), T && (o = U);
}
function re(t, e, n, r, s, a, o) {
  var _a, _b, _c, _d;
  var u = (s & ee) !== 0, h = (s & (K | z)) !== 0, m = t.length, _ = e.items, w = e.first, f = w, d, i = null, g, S = [], v = [], O, p, c, l;
  if (u) for (l = 0; l < m; l += 1) O = t[l], p = a(O, l), c = _.get(p), c !== void 0 && ((_a = c.a) == null ? void 0 : _a.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(c));
  for (l = 0; l < m; l += 1) {
    if (O = t[l], p = a(O, l), c = _.get(p), c === void 0) {
      var Ut = f ? f.e.nodes_start : n;
      i = gt(Ut, e, i, i === null ? e.first : i.next, O, p, l, r, s, o), _.set(p, i), S = [], v = [], f = i.next;
      continue;
    }
    if (h && se(c, O, l, s), (c.e.f & $) !== 0 && (St(c.e), u && ((_b = c.a) == null ? void 0 : _b.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(c))), c !== f) {
      if (d !== void 0 && d.has(c)) {
        if (S.length < v.length) {
          var D = v[0], b;
          i = D.prev;
          var ot = S[0], G = S[S.length - 1];
          for (b = 0; b < S.length; b += 1) ht(S[b], D, n);
          for (b = 0; b < v.length; b += 1) d.delete(v[b]);
          E(e, ot.prev, G.next), E(e, i, ot), E(e, G, D), f = D, i = G, l -= 1, S = [], v = [];
        } else d.delete(c), ht(c, f, n), E(e, c.prev, c.next), E(e, c, i === null ? e.first : i.next), E(e, i, c), i = c;
        continue;
      }
      for (S = [], v = []; f !== null && f.k !== p; ) (f.e.f & $) === 0 && (d ?? (d = /* @__PURE__ */ new Set())).add(f), v.push(f), f = f.next;
      if (f === null) continue;
      c = f;
    }
    S.push(c), i = c, f = c.next;
  }
  if (f !== null || d !== void 0) {
    for (var j = d === void 0 ? [] : vt(d); f !== null; ) (f.e.f & $) === 0 && j.push(f), f = f.next;
    var H = j.length;
    if (H > 0) {
      var Ft = (s & Ot) !== 0 && m === 0 ? n : null;
      if (u) {
        for (l = 0; l < H; l += 1) (_c = j[l].a) == null ? void 0 : _c.measure();
        for (l = 0; l < H; l += 1) (_d = j[l].a) == null ? void 0 : _d.fix();
      }
      ne(e, j, Ft, _);
    }
  }
  u && te(() => {
    var _a2;
    if (g !== void 0) for (c of g) (_a2 = c.a) == null ? void 0 : _a2.apply();
  }), ct.first = e.first && e.first.e, ct.last = i && i.e;
}
function se(t, e, n, r) {
  (r & K) !== 0 && ft(t.v, e), (r & z) !== 0 ? ft(t.i, n) : t.i = n;
}
function gt(t, e, n, r, s, a, o, u, h, m) {
  var _ = (h & K) !== 0, w = (h & Lt) === 0, f = _ ? w ? Yt(s) : lt(s) : s, d = (h & z) === 0 ? o : lt(o), i = { i: d, v: f, k: a, a: null, e: null, prev: n, next: r };
  try {
    return i.e = yt(() => u(t, f, d, m), T), i.e.prev = n && n.e, i.e.next = r && r.e, n === null ? e.first = i : (n.next = i, n.e.next = i.e), r !== null && (r.prev = i, r.e.prev = i.e), i;
  } finally {
  }
}
function ht(t, e, n) {
  for (var r = t.next ? t.next.e.nodes_start : n, s = e ? e.e.nodes_start : n, a = t.e.nodes_start; a !== r; ) {
    var o = Zt(a);
    s.before(a), a = o;
  }
}
function E(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
const ae = (t) => typeof t == "function", N = function(t, e) {
  if (typeof t == "function") return function() {
    return t(arguments) ? e.apply(this, arguments) : (n) => e(n, ...arguments);
  };
  switch (t) {
    case 0:
    case 1:
      throw new RangeError(`Invalid arity ${t}`);
    case 2:
      return function(n, r) {
        return arguments.length >= 2 ? e(n, r) : function(s) {
          return e(s, n);
        };
      };
    case 3:
      return function(n, r, s) {
        return arguments.length >= 3 ? e(n, r, s) : function(a) {
          return e(a, n, r);
        };
      };
    case 4:
      return function(n, r, s, a) {
        return arguments.length >= 4 ? e(n, r, s, a) : function(o) {
          return e(o, n, r, s);
        };
      };
    case 5:
      return function(n, r, s, a, o) {
        return arguments.length >= 5 ? e(n, r, s, a, o) : function(u) {
          return e(u, n, r, s, a);
        };
      };
    default:
      return function() {
        if (arguments.length >= t) return e.apply(this, arguments);
        const n = arguments;
        return function(r) {
          return e(r, ...n);
        };
      };
  }
}, qe = (t) => t, X = (t) => () => t, ze = X(true), Ke = X(false), bt = X(void 0), Xe = bt;
function Et(t, e, n, r, s, a, o, u, h) {
  switch (arguments.length) {
    case 1:
      return t;
    case 2:
      return e(t);
    case 3:
      return n(e(t));
    case 4:
      return r(n(e(t)));
    case 5:
      return s(r(n(e(t))));
    case 6:
      return a(s(r(n(e(t)))));
    case 7:
      return o(a(s(r(n(e(t))))));
    case 8:
      return u(o(a(s(r(n(e(t)))))));
    case 9:
      return h(u(o(a(s(r(n(e(t))))))));
    default: {
      let m = arguments[0];
      for (let _ = 1; _ < arguments.length; _++) m = arguments[_](m);
      return m;
    }
  }
}
let oe = "3.14.1";
const It = () => oe, _t = `effect/GlobalValue/globalStoreId/${It()}`;
let F;
const L = (t, e) => (F || (globalThis[_t] ?? (globalThis[_t] = /* @__PURE__ */ new Map()), F = globalThis[_t]), F.has(t) || F.set(t, e()), F.get(t)), Le = (t) => typeof t == "string", Ze = (t) => typeof t == "number", Qe = (t) => typeof t == "bigint", Z = ae, ie = (t) => typeof t == "object" && t !== null, ue = (t) => ie(t) || Z(t), P = N(2, (t, e) => ue(t) && e in t), tn = N(2, (t, e) => P(t, "_tag") && t._tag === e), x = (t) => t == null, en = (t) => P(t, "then") && Z(t.then), ce = (t) => `BUG: ${t} - please report an issue at https://github.com/Effect-TS/effect/issues`;
class Q {
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
    return new Q(this.self);
  }
}
const fe = 335903614, le = 4150755663, he = 1481765933, _e = 1284865837, de = 9007199254740992, me = 134217728;
class nn {
  constructor(e, n, r, s) {
    __publicField(this, "_state");
    return x(n) && x(e) ? (n = Math.random() * 4294967295 >>> 0, e = 0) : x(n) && (n = e, e = 0), x(s) && x(r) ? (s = this._state ? this._state[3] : le, r = this._state ? this._state[2] : fe) : x(s) && (s = r, r = 0), this._state = new Int32Array([0, 0, r >>> 0, ((s || 0) | 1) >>> 0]), this._next(), dt(this._state, this._state[0], this._state[1], e >>> 0, n >>> 0), this._next(), this;
  }
  getState() {
    return [this._state[0], this._state[1], this._state[2], this._state[3]];
  }
  setState(e) {
    this._state[0] = e[0], this._state[1] = e[1], this._state[2] = e[2], this._state[3] = e[3] | 1;
  }
  integer(e) {
    return Math.round(this.number() * Number.MAX_SAFE_INTEGER) % e;
  }
  number() {
    const e = (this._next() & 67108863) * 1, n = (this._next() & 134217727) * 1;
    return (e * me + n) / de;
  }
  _next() {
    const e = this._state[0] >>> 0, n = this._state[1] >>> 0;
    pe(this._state, e, n, he, _e), dt(this._state, this._state[0], this._state[1], this._state[2], this._state[3]);
    let r = e >>> 18, s = (n >>> 18 | e << 14) >>> 0;
    r = (r ^ e) >>> 0, s = (s ^ n) >>> 0;
    const a = (s >>> 27 | r << 5) >>> 0, o = e >>> 27, u = (-o >>> 0 & 31) >>> 0;
    return (a >>> o | a << u) >>> 0;
  }
}
function pe(t, e, n, r, s) {
  let a = (n >>> 16) * (s & 65535) >>> 0, o = (n & 65535) * (s >>> 16) >>> 0, u = (n & 65535) * (s & 65535) >>> 0, h = (n >>> 16) * (s >>> 16) + ((o >>> 16) + (a >>> 16)) >>> 0;
  o = o << 16 >>> 0, u = u + o >>> 0, u >>> 0 < o >>> 0 && (h = h + 1 >>> 0), a = a << 16 >>> 0, u = u + a >>> 0, u >>> 0 < a >>> 0 && (h = h + 1 >>> 0), h = h + Math.imul(n, r) >>> 0, h = h + Math.imul(e, s) >>> 0, t[0] = h, t[1] = u;
}
function dt(t, e, n, r, s) {
  let a = e + r >>> 0;
  const o = n + s >>> 0;
  o >>> 0 < n >>> 0 && (a = a + 1 | 0), t[0] = a, t[1] = o;
}
const q = Symbol.for("effect/Utils/YieldWrap");
class Se {
  constructor(e) {
    __privateAdd(this, _t2);
    __privateSet(this, _t2, e);
  }
  [q]() {
    return __privateGet(this, _t2);
  }
}
_t2 = new WeakMap();
function rn(t) {
  if (typeof t == "object" && t !== null && q in t) return t[q]();
  throw new Error(ce("yieldWrapGet"));
}
const y = L("effect/Utils/isStructuralRegion", () => ({ enabled: false, tester: void 0 })), ye = (t) => {
  const e = { [t](n) {
    return n();
  } };
  return function(n) {
    return e[t](n);
  };
}, sn = ye("effect_internal_function"), Y = L(Symbol.for("effect/Hash/randomHashCache"), () => /* @__PURE__ */ new WeakMap()), I = Symbol.for("effect/Hash"), A = (t) => {
  if (y.enabled === true) return 0;
  switch (typeof t) {
    case "number":
      return Nt(t);
    case "bigint":
      return R(t.toString(10));
    case "boolean":
      return R(String(t));
    case "symbol":
      return R(String(t));
    case "string":
      return R(t);
    case "undefined":
      return R("undefined");
    case "function":
    case "object":
      return t === null ? R("null") : t instanceof Date ? A(t.toISOString()) : ve(t) ? t[I]() : At(t);
    default:
      throw new Error(`BUG: unhandled typeof ${typeof t} - please report an issue at https://github.com/Effect-TS/effect/issues`);
  }
}, At = (t) => (Y.has(t) || Y.set(t, Nt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER))), Y.get(t)), tt = (t) => (e) => e * 53 ^ t, V = (t) => t & 3221225471 | t >>> 1 & 1073741824, ve = (t) => P(t, I), Nt = (t) => {
  if (t !== t || t === 1 / 0) return 0;
  let e = t | 0;
  for (e !== t && (e ^= t * 4294967295); t > 4294967295; ) e ^= t /= 4294967295;
  return V(e);
}, R = (t) => {
  let e = 5381, n = t.length;
  for (; n; ) e = e * 33 ^ t.charCodeAt(--n);
  return V(e);
}, Oe = (t, e) => {
  let n = 12289;
  for (let r = 0; r < e.length; r++) n ^= Et(R(e[r]), tt(A(t[e[r]])));
  return V(n);
}, ge = (t) => Oe(t, Object.keys(t)), an = (t) => {
  let e = 6151;
  for (let n = 0; n < t.length; n++) e = Et(e, tt(A(t[n])));
  return V(e);
}, et = function() {
  if (arguments.length === 1) {
    const n = arguments[0];
    return function(r) {
      return Object.defineProperty(n, I, { value() {
        return r;
      }, enumerable: false }), r;
    };
  }
  const t = arguments[0], e = arguments[1];
  return Object.defineProperty(t, I, { value() {
    return e;
  }, enumerable: false }), e;
}, M = Symbol.for("effect/Equal");
function nt() {
  return arguments.length === 1 ? (t) => B(t, arguments[0]) : B(arguments[0], arguments[1]);
}
function B(t, e) {
  if (t === e) return true;
  const n = typeof t;
  if (n !== typeof e) return false;
  if (n === "object" || n === "function") {
    if (t !== null && e !== null) {
      if (mt(t) && mt(e)) return A(t) === A(e) && t[M](e) ? true : y.enabled && y.tester ? y.tester(t, e) : false;
      if (t instanceof Date && e instanceof Date) return t.toISOString() === e.toISOString();
    }
    if (y.enabled) {
      if (Array.isArray(t) && Array.isArray(e)) return t.length === e.length && t.every((r, s) => B(r, e[s]));
      if (Object.getPrototypeOf(t) === Object.prototype && Object.getPrototypeOf(t) === Object.prototype) {
        const r = Object.keys(t), s = Object.keys(e);
        if (r.length === s.length) {
          for (const a of r) if (!(a in e && B(t[a], e[a]))) return y.tester ? y.tester(t, e) : false;
          return true;
        }
      }
      return y.tester ? y.tester(t, e) : false;
    }
  }
  return y.enabled && y.tester ? y.tester(t, e) : false;
}
const mt = (t) => P(t, M), be = () => nt, Ee = Symbol.for("nodejs.util.inspect.custom"), Tt = (t) => {
  try {
    if (P(t, "toJSON") && Z(t.toJSON) && t.toJSON.length === 0) return t.toJSON();
    if (Array.isArray(t)) return t.map(Tt);
  } catch {
    return {};
  }
  return Ne(t);
}, Ie = (t) => JSON.stringify(t, null, 2), on = (t, e = 2) => {
  if (typeof t == "string") return t;
  try {
    return typeof t == "object" ? Ae(t, e) : String(t);
  } catch {
    return String(t);
  }
}, Ae = (t, e) => {
  let n = [];
  const r = JSON.stringify(t, (s, a) => typeof a == "object" && a !== null ? n.includes(a) ? void 0 : n.push(a) && (C.fiberRefs !== void 0 && Rt(a) ? a[rt](C.fiberRefs) : a) : a, e);
  return n = void 0, r;
}, rt = Symbol.for("effect/Inspectable/Redactable"), Rt = (t) => typeof t == "object" && t !== null && rt in t, C = L("effect/Inspectable/redactableState", () => ({ fiberRefs: void 0 })), un = (t, e) => {
  const n = C.fiberRefs;
  C.fiberRefs = t;
  try {
    return e();
  } finally {
    C.fiberRefs = n;
  }
}, Ne = (t) => Rt(t) && C.fiberRefs !== void 0 ? t[rt](C.fiberRefs) : t, Te = (t, e) => {
  switch (e.length) {
    case 0:
      return t;
    case 1:
      return e[0](t);
    case 2:
      return e[1](e[0](t));
    case 3:
      return e[2](e[1](e[0](t)));
    case 4:
      return e[3](e[2](e[1](e[0](t))));
    case 5:
      return e[4](e[3](e[2](e[1](e[0](t)))));
    case 6:
      return e[5](e[4](e[3](e[2](e[1](e[0](t))))));
    case 7:
      return e[6](e[5](e[4](e[3](e[2](e[1](e[0](t)))))));
    case 8:
      return e[7](e[6](e[5](e[4](e[3](e[2](e[1](e[0](t))))))));
    case 9:
      return e[8](e[7](e[6](e[5](e[4](e[3](e[2](e[1](e[0](t)))))))));
    default: {
      let n = t;
      for (let r = 0, s = e.length; r < s; r++) n = e[r](n);
      return n;
    }
  }
}, cn = "Async", Re = "Commit", fn = "Failure", ln = "OnFailure", hn = "OnSuccess", _n = "OnSuccessAndFailure", dn = "Success", mn = "Sync", pn = "Tag", Sn = "UpdateRuntimeFlags", yn = "While", vn = "Iterator", On = "WithRuntime", gn = "Yield", bn = "RevertFlags", Ce = Symbol.for("effect/Effect"), we = Symbol.for("effect/Stream"), xe = Symbol.for("effect/Sink"), Pe = Symbol.for("effect/Channel"), pt = { _R: (t) => t, _E: (t) => t, _A: (t) => t, _V: It() }, Me = { _A: (t) => t, _In: (t) => t, _L: (t) => t, _E: (t) => t, _R: (t) => t }, ke = { _Env: (t) => t, _InErr: (t) => t, _InElem: (t) => t, _InDone: (t) => t, _OutErr: (t) => t, _OutElem: (t) => t, _OutDone: (t) => t }, Ct = { [Ce]: pt, [we]: pt, [xe]: Me, [Pe]: ke, [M](t) {
  return this === t;
}, [I]() {
  return et(this, At(this));
}, [Symbol.iterator]() {
  return new Q(new Se(this));
}, pipe() {
  return Te(this, arguments);
} }, je = { [I]() {
  return et(this, ge(this));
}, [M](t) {
  const e = Object.keys(this), n = Object.keys(t);
  if (e.length !== n.length) return false;
  for (const r of e) if (!(r in t && nt(this[r], t[r]))) return false;
  return true;
} }, wt = { ...Ct, _op: Re }, En = { ...wt, ...je }, In = function() {
  function t() {
  }
  return t.prototype = wt, t;
}(), xt = Symbol.for("effect/Option"), Pt = { ...Ct, [xt]: { _A: (t) => t }, [Ee]() {
  return this.toJSON();
}, toString() {
  return Ie(this.toJSON());
} }, Ue = Object.assign(Object.create(Pt), { _tag: "Some", _op: "Some", [M](t) {
  return Mt(t) && jt(t) && nt(this.value, t.value);
}, [I]() {
  return et(this, tt(A(this._tag))(A(this.value)));
}, toJSON() {
  return { _id: "Option", _tag: this._tag, value: Tt(this.value) };
} }), Fe = A("None"), De = Object.assign(Object.create(Pt), { _tag: "None", _op: "None", [M](t) {
  return Mt(t) && kt(t);
}, [I]() {
  return Fe;
}, toJSON() {
  return { _id: "Option", _tag: this._tag };
} }), Mt = (t) => P(t, xt), kt = (t) => t._tag === "None", jt = (t) => t._tag === "Some", Be = Object.create(De), Ve = (t) => {
  const e = Object.create(Ue);
  return e.value = t, e;
}, st = () => Be, at = Ve, k = kt, An = jt, Nn = N(2, (t, { onNone: e, onSome: n }) => k(t) ? e() : n(t.value)), Ge = N(2, (t, e) => k(t) ? e() : t.value), Tn = N(2, (t, e) => k(t) ? at(e()) : t), Rn = (t) => t == null ? st() : at(t), Cn = Ge(bt), wn = N(2, (t, e) => k(t) ? st() : at(e(t.value))), xn = N(2, (t, e) => k(t) ? st() : e(t.value)), He = (t) => N(2, (e, n) => k(e) ? false : t(e.value, n)), Je = be(), Pn = He(Je);
export {
  fn as $,
  Le as A,
  ge as B,
  tn as C,
  k as D,
  Ct as E,
  Et as F,
  R as G,
  X as H,
  Nn as I,
  Tn as J,
  wn as K,
  ze as L,
  Ke as M,
  Ee as N,
  ce as O,
  Z as P,
  Ae as Q,
  Cn as R,
  je as S,
  hn as T,
  At as U,
  Re as V,
  On as W,
  sn as X,
  Se as Y,
  vn as Z,
  dn as _,
  An as a,
  cn as a0,
  Sn as a1,
  ue as a2,
  mn as a3,
  _n as a4,
  wt as a5,
  En as a6,
  bn as a7,
  yn as a8,
  gn as a9,
  en as aa,
  Ge as ab,
  mt as ac,
  Pn as ad,
  xn as ae,
  nn as af,
  In as ag,
  Xe as ah,
  Q as ai,
  on as aj,
  Rn as ak,
  un as al,
  ln as am,
  pn as an,
  It as ao,
  rn as ap,
  I as b,
  tt as c,
  N as d,
  Ye as e,
  M as f,
  P as g,
  A as h,
  $e as i,
  nt as j,
  Ie as k,
  qe as l,
  be as m,
  st as n,
  pt as o,
  Te as p,
  et as q,
  Nt as r,
  at as s,
  Tt as t,
  L as u,
  Ve as v,
  Be as w,
  an as x,
  Ze as y,
  Qe as z
};
