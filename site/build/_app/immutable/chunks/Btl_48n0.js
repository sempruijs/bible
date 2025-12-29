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
var _t2, _a;
const et = (t) => typeof t == "function", m = function(t, e) {
  if (typeof t == "function") return function() {
    return t(arguments) ? e.apply(this, arguments) : (n) => e(n, ...arguments);
  };
  switch (t) {
    case 0:
    case 1:
      throw new RangeError(`Invalid arity ${t}`);
    case 2:
      return function(n, s) {
        return arguments.length >= 2 ? e(n, s) : function(r) {
          return e(r, n);
        };
      };
    case 3:
      return function(n, s, r) {
        return arguments.length >= 3 ? e(n, s, r) : function(a) {
          return e(a, n, s);
        };
      };
    case 4:
      return function(n, s, r, a) {
        return arguments.length >= 4 ? e(n, s, r, a) : function(c) {
          return e(c, n, s, r);
        };
      };
    case 5:
      return function(n, s, r, a, c) {
        return arguments.length >= 5 ? e(n, s, r, a, c) : function(u) {
          return e(u, n, s, r, a);
        };
      };
    default:
      return function() {
        if (arguments.length >= t) return e.apply(this, arguments);
        const n = arguments;
        return function(s) {
          return e(s, ...n);
        };
      };
  }
}, $t = (t) => t, A = (t) => () => t, zt = A(true), Ht = A(false), W = A(void 0), Yt = W;
function V(t, e, n, s, r, a, c, u, o) {
  switch (arguments.length) {
    case 1:
      return t;
    case 2:
      return e(t);
    case 3:
      return n(e(t));
    case 4:
      return s(n(e(t)));
    case 5:
      return r(s(n(e(t))));
    case 6:
      return a(r(s(n(e(t)))));
    case 7:
      return c(a(r(s(n(e(t))))));
    case 8:
      return u(c(a(r(s(n(e(t)))))));
    case 9:
      return o(u(c(a(r(s(n(e(t))))))));
    default: {
      let I = arguments[0];
      for (let R = 1; R < arguments.length; R++) I = arguments[R](I);
      return I;
    }
  }
}
const U = "effect/GlobalValue";
let g;
const C = (t, e) => (g || (globalThis[U] ?? (globalThis[U] = /* @__PURE__ */ new Map()), g = globalThis[U]), g.has(t) || g.set(t, e()), g.get(t)), qt = (t) => typeof t == "string", Kt = (t) => typeof t == "number", Lt = (t) => typeof t == "bigint", w = et, nt = (t) => typeof t == "object" && t !== null, st = (t) => nt(t) || w(t), p = m(2, (t, e) => st(t) && e in t), Xt = m(2, (t, e) => p(t, "_tag") && t._tag === e), S = (t) => t == null, Zt = (t) => typeof t == "string" || p(t, Symbol.iterator), Qt = (t) => p(t, "then") && w(t.then), rt = (t) => `BUG: ${t} - please report an issue at https://github.com/Effect-TS/effect/issues`;
class v {
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
    return new v(this.self);
  }
}
const at = 335903614, ct = 4150755663, ut = 1481765933, it = 1284865837, ot = 9007199254740992, ft = 134217728;
class kt {
  constructor(e, n, s, r) {
    __publicField(this, "_state");
    return S(n) && S(e) ? (n = Math.random() * 4294967295 >>> 0, e = 0) : S(n) && (n = e, e = 0), S(r) && S(s) ? (r = this._state ? this._state[3] : ct, s = this._state ? this._state[2] : at) : S(r) && (r = s, s = 0), this._state = new Int32Array([0, 0, s >>> 0, ((r || 0) | 1) >>> 0]), this._next(), G(this._state, this._state[0], this._state[1], e >>> 0, n >>> 0), this._next(), this;
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
    return (e * ft + n) / ot;
  }
  _next() {
    const e = this._state[0] >>> 0, n = this._state[1] >>> 0;
    ht(this._state, e, n, ut, it), G(this._state, this._state[0], this._state[1], this._state[2], this._state[3]);
    let s = e >>> 18, r = (n >>> 18 | e << 14) >>> 0;
    s = (s ^ e) >>> 0, r = (r ^ n) >>> 0;
    const a = (r >>> 27 | s << 5) >>> 0, c = e >>> 27, u = (-c >>> 0 & 31) >>> 0;
    return (a >>> c | a << u) >>> 0;
  }
}
function ht(t, e, n, s, r) {
  let a = (n >>> 16) * (r & 65535) >>> 0, c = (n & 65535) * (r >>> 16) >>> 0, u = (n & 65535) * (r & 65535) >>> 0, o = (n >>> 16) * (r >>> 16) + ((c >>> 16) + (a >>> 16)) >>> 0;
  c = c << 16 >>> 0, u = u + c >>> 0, u >>> 0 < c >>> 0 && (o = o + 1 >>> 0), a = a << 16 >>> 0, u = u + a >>> 0, u >>> 0 < a >>> 0 && (o = o + 1 >>> 0), o = o + Math.imul(n, s) >>> 0, o = o + Math.imul(e, r) >>> 0, t[0] = o, t[1] = u;
}
function G(t, e, n, s, r) {
  let a = e + s >>> 0;
  const c = n + r >>> 0;
  c >>> 0 < n >>> 0 && (a = a + 1 | 0), t[0] = a, t[1] = c;
}
const P = Symbol.for("effect/Utils/YieldWrap");
class lt {
  constructor(e) {
    __privateAdd(this, _t2);
    __privateSet(this, _t2, e);
  }
  [P]() {
    return __privateGet(this, _t2);
  }
}
_t2 = new WeakMap();
function Bt(t) {
  if (typeof t == "object" && t !== null && P in t) return t[P]();
  throw new Error(rt("yieldWrapGet"));
}
const i = C("effect/Utils/isStructuralRegion", () => ({ enabled: false, tester: void 0 })), $ = { effect_internal_function: (t) => t() }, mt = { effect_internal_function: (t) => {
  try {
    return t();
  } finally {
  }
} }, _t = ((_a = $.effect_internal_function(() => new Error().stack)) == null ? void 0 : _a.includes("effect_internal_function")) === true, te = _t ? $.effect_internal_function : mt.effect_internal_function, T = C(Symbol.for("effect/Hash/randomHashCache"), () => /* @__PURE__ */ new WeakMap()), l = Symbol.for("effect/Hash"), f = (t) => {
  if (i.enabled === true) return 0;
  switch (typeof t) {
    case "number":
      return H(t);
    case "bigint":
      return h(t.toString(10));
    case "boolean":
      return h(String(t));
    case "symbol":
      return h(String(t));
    case "string":
      return h(t);
    case "undefined":
      return h("undefined");
    case "function":
    case "object":
      return t === null ? h("null") : t instanceof Date ? Number.isNaN(t.getTime()) ? h("Invalid Date") : f(t.toISOString()) : t instanceof URL ? f(t.href) : pt(t) ? t[l]() : z(t);
    default:
      throw new Error(`BUG: unhandled typeof ${typeof t} - please report an issue at https://github.com/Effect-TS/effect/issues`);
  }
}, z = (t) => (T.has(t) || T.set(t, H(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER))), T.get(t)), x = (t) => (e) => e * 53 ^ t, N = (t) => t & 3221225471 | t >>> 1 & 1073741824, pt = (t) => p(t, l), H = (t) => {
  if (t !== t || t === 1 / 0) return 0;
  let e = t | 0;
  for (e !== t && (e ^= t * 4294967295); t > 4294967295; ) e ^= t /= 4294967295;
  return N(e);
}, h = (t) => {
  let e = 5381, n = t.length;
  for (; n; ) e = e * 33 ^ t.charCodeAt(--n);
  return N(e);
}, St = (t, e) => {
  let n = 12289;
  for (let s = 0; s < e.length; s++) n ^= V(h(e[s]), x(f(t[e[s]])));
  return N(n);
}, dt = (t) => St(t, Object.keys(t)), ee = (t) => {
  let e = 6151;
  for (let n = 0; n < t.length; n++) e = V(e, x(f(t[n])));
  return N(e);
}, F = function() {
  if (arguments.length === 1) {
    const n = arguments[0];
    return function(s) {
      return Object.defineProperty(n, l, { value() {
        return s;
      }, enumerable: false }), s;
    };
  }
  const t = arguments[0], e = arguments[1];
  return Object.defineProperty(t, l, { value() {
    return e;
  }, enumerable: false }), e;
}, d = Symbol.for("effect/Equal");
function J() {
  return arguments.length === 1 ? (t) => O(t, arguments[0]) : O(arguments[0], arguments[1]);
}
function O(t, e) {
  if (t === e) return true;
  const n = typeof t;
  if (n !== typeof e) return false;
  if (n === "object" || n === "function") {
    if (t !== null && e !== null) {
      if (b(t) && b(e)) return f(t) === f(e) && t[d](e) ? true : i.enabled && i.tester ? i.tester(t, e) : false;
      if (t instanceof Date && e instanceof Date) {
        const s = t.getTime(), r = e.getTime();
        return s === r || Number.isNaN(s) && Number.isNaN(r);
      } else if (t instanceof URL && e instanceof URL) return t.href === e.href;
    }
    if (i.enabled) {
      if (Array.isArray(t) && Array.isArray(e)) return t.length === e.length && t.every((s, r) => O(s, e[r]));
      if (Object.getPrototypeOf(t) === Object.prototype && Object.getPrototypeOf(t) === Object.prototype) {
        const s = Object.keys(t), r = Object.keys(e);
        if (s.length === r.length) {
          for (const a of s) if (!(a in e && O(t[a], e[a]))) return i.tester ? i.tester(t, e) : false;
          return true;
        }
      }
      return i.tester ? i.tester(t, e) : false;
    }
  }
  return i.enabled && i.tester ? i.tester(t, e) : false;
}
const b = (t) => p(t, d), yt = () => J, gt = Symbol.for("nodejs.util.inspect.custom"), Y = (t) => {
  try {
    if (p(t, "toJSON") && w(t.toJSON) && t.toJSON.length === 0) return t.toJSON();
    if (Array.isArray(t)) return t.map(Y);
  } catch {
    return {};
  }
  return Et(t);
}, Ot = (t) => JSON.stringify(t, null, 2), ne = (t, e = 2) => {
  if (typeof t == "string") return t;
  try {
    return typeof t == "object" ? Nt(t, e) : String(t);
  } catch {
    return String(t);
  }
}, Nt = (t, e) => {
  let n = [];
  const s = JSON.stringify(t, (r, a) => typeof a == "object" && a !== null ? n.includes(a) ? void 0 : n.push(a) && (_.fiberRefs !== void 0 && q(a) ? a[M](_.fiberRefs) : a) : a, e);
  return n = void 0, s;
}, M = Symbol.for("effect/Inspectable/Redactable"), q = (t) => typeof t == "object" && t !== null && M in t, _ = C("effect/Inspectable/redactableState", () => ({ fiberRefs: void 0 })), se = (t, e) => {
  const n = _.fiberRefs;
  _.fiberRefs = t;
  try {
    return e();
  } finally {
    _.fiberRefs = n;
  }
}, Et = (t) => q(t) && _.fiberRefs !== void 0 ? t[M](_.fiberRefs) : t, jt = (t, e) => {
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
      for (let s = 0, r = e.length; s < r; s++) n = e[s](n);
      return n;
    }
  }
}, re = "Async", It = "Commit", ae = "Failure", ce = "OnFailure", ue = "OnSuccess", ie = "OnSuccessAndFailure", oe = "Success", fe = "Sync", he = "Tag", le = "UpdateRuntimeFlags", me = "While", _e = "Iterator", pe = "WithRuntime", Se = "Yield", de = "RevertFlags";
let Rt = "3.19.13";
const Tt = () => Rt, Pt = Symbol.for("effect/Effect"), At = Symbol.for("effect/Stream"), Ct = Symbol.for("effect/Sink"), wt = Symbol.for("effect/Channel"), D = { _R: (t) => t, _E: (t) => t, _A: (t) => t, _V: Tt() }, vt = { _A: (t) => t, _In: (t) => t, _L: (t) => t, _E: (t) => t, _R: (t) => t }, xt = { _Env: (t) => t, _InErr: (t) => t, _InElem: (t) => t, _InDone: (t) => t, _OutErr: (t) => t, _OutElem: (t) => t, _OutDone: (t) => t }, K = { [Pt]: D, [At]: D, [Ct]: vt, [wt]: xt, [d](t) {
  return this === t;
}, [l]() {
  return F(this, z(this));
}, [Symbol.iterator]() {
  return new v(new lt(this));
}, pipe() {
  return jt(this, arguments);
} }, Ft = { [l]() {
  return F(this, dt(this));
}, [d](t) {
  const e = Object.keys(this), n = Object.keys(t);
  if (e.length !== n.length) return false;
  for (const s of e) if (!(s in t && J(this[s], t[s]))) return false;
  return true;
} }, L = { ...K, _op: It }, ye = { ...L, ...Ft }, ge = (function() {
  function t() {
  }
  return t.prototype = L, t;
})(), X = Symbol.for("effect/Option"), Z = { ...K, [X]: { _A: (t) => t }, [gt]() {
  return this.toJSON();
}, toString() {
  return Ot(this.toJSON());
} }, Jt = Object.assign(Object.create(Z), { _tag: "Some", _op: "Some", [d](t) {
  return Q(t) && B(t) && J(this.value, t.value);
}, [l]() {
  return F(this, x(f(this._tag))(f(this.value)));
}, toJSON() {
  return { _id: "Option", _tag: this._tag, value: Y(this.value) };
} }), Mt = f("None"), Ut = Object.assign(Object.create(Z), { _tag: "None", _op: "None", [d](t) {
  return Q(t) && k(t);
}, [l]() {
  return Mt;
}, toJSON() {
  return { _id: "Option", _tag: this._tag };
} }), Q = (t) => p(t, X), k = (t) => t._tag === "None", B = (t) => t._tag === "Some", Gt = Object.create(Ut), bt = (t) => {
  const e = Object.create(Jt);
  return e.value = t, e;
}, E = () => Gt, j = bt, y = k, Oe = B, Ne = m(2, (t, { onNone: e, onSome: n }) => y(t) ? e() : n(t.value)), Dt = m(2, (t, e) => y(t) ? e() : t.value), Ee = m(2, (t, e) => y(t) ? j(e()) : t), je = (t) => t == null ? E() : j(t), Ie = Dt(W), Re = m(2, (t, e) => y(t) ? E() : j(e(t.value))), Te = m(2, (t, e) => y(t) ? E() : e(t.value)), Wt = (t) => m(2, (e, n) => y(e) ? false : t(e.value, n)), Vt = yt(), Pe = Wt(Vt);
var tt = ((t) => (t.Genesis = "gen", t.Exodus = "exo", t.Leviticus = "lev", t.Numbers = "num", t.Deuteronomy = "deu", t.Joshua = "jos", t.Judges = "jdg", t.Ruth = "rut", t.FirstSamuel = "1sa", t.SecondSamuel = "2sa", t.FirstKings = "1ki", t.SecondKings = "2ki", t.FirstChronicles = "1ch", t.SecondChronicles = "2ch", t.Ezra = "ezr", t.Nehemiah = "neh", t.Esther = "est", t.Job = "job", t.Psalms = "psa", t.Proverbs = "pro", t.Ecclesiastes = "ecc", t.SongOfSongs = "sng", t.Isaiah = "isa", t.Jeremiah = "jer", t.Lamentations = "lam", t.Ezekiel = "ezk", t.Daniel = "dan", t.Hosea = "hos", t.Joel = "jol", t.Amos = "amo", t.Obadiah = "oba", t.Jonah = "jon", t.Micah = "mic", t.Nahum = "nah", t.Habakkuk = "hab", t.Zephaniah = "zep", t.Haggai = "hag", t.Zechariah = "zec", t.Malachi = "mal", t.Matthew = "mat", t.Mark = "mrk", t.Luke = "luk", t.John = "jhn", t.Acts = "act", t.Romans = "rom", t.FirstCorinthians = "1co", t.SecondCorinthians = "2co", t.Galatians = "gal", t.Ephesians = "eph", t.Philippians = "php", t.Colossians = "col", t.FirstThessalonians = "1th", t.SecondThessalonians = "2th", t.FirstTimothy = "1ti", t.SecondTimothy = "2ti", t.Titus = "tit", t.Philemon = "phm", t.Hebrews = "heb", t.James = "jas", t.FirstPeter = "1pe", t.SecondPeter = "2pe", t.FirstJohn = "1jn", t.SecondJohn = "2jn", t.ThirdJohn = "3jn", t.Jude = "jud", t.Revelation = "rev", t))(tt || {});
const Ae = (t) => Object.values(tt).includes(t) ? j(t) : E();
export {
  st as $,
  qt as A,
  tt as B,
  dt as C,
  Xt as D,
  K as E,
  V as F,
  h as G,
  A as H,
  Ne as I,
  Ee as J,
  Re as K,
  zt as L,
  Ht as M,
  gt as N,
  w as O,
  Nt as P,
  Ie as Q,
  rt as R,
  Ft as S,
  It as T,
  z as U,
  _e as V,
  ue as W,
  ae as X,
  lt as Y,
  oe as Z,
  L as _,
  y as a,
  de as a0,
  pe as a1,
  ye as a2,
  fe as a3,
  me as a4,
  re as a5,
  Se as a6,
  le as a7,
  Qt as a8,
  ie as a9,
  te as aa,
  Dt as ab,
  b as ac,
  Pe as ad,
  Te as ae,
  kt as af,
  ge as ag,
  Yt as ah,
  v as ai,
  ne as aj,
  je as ak,
  se as al,
  ce as am,
  he as an,
  Tt as ao,
  Bt as ap,
  Zt as aq,
  Y as b,
  l as c,
  m as d,
  x as e,
  d as f,
  p as g,
  f as h,
  Oe as i,
  J as j,
  Ot as k,
  $t as l,
  yt as m,
  E as n,
  F as o,
  jt as p,
  H as q,
  D as r,
  j as s,
  Ae as t,
  C as u,
  bt as v,
  Gt as w,
  ee as x,
  Kt as y,
  Lt as z
};
