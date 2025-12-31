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
var _s, _e, _g, _i, _u, _n, _r, _t2, _a, _h, _o, _c, _l, _d, _f, _m, _Rt_instances, b_fn, E_fn, v_fn, __fn, p_fn, y_fn;
import { aq as G, q as Y, B as q, ar as J, b as K, as as I, M as V, i as d, h as _, a6 as b, j as U, o as Q, C as H, H as X, g as c, at as w, p as A, f as W, au as R, av as y, aw as L, ax as Z, ay as F, c as j, m as tt, z as et, e as D, k as S, az as st, w as rt, aA as M, aB as it, a1 as nt, aC as at, aD as ht, aE as ot, aF as lt, aG as O, n as ft, aH as ut, N as ct, aI as x, x as T, aJ as dt, P as _t, F as pt, aK as gt, W as vt, y as yt, aL as mt, Y as bt } from "./1U9xaPEF.js";
import { b as Et } from "./BNmRZ_yl.js";
function wt(e) {
  let t = 0, r = q(0), i;
  return () => {
    G() && (Y(r), J(() => (t === 0 && (i = K(() => e(() => I(r)))), t += 1, () => {
      V(() => {
        t -= 1, t === 0 && (i == null ? void 0 : i(), i = void 0, I(r));
      });
    })));
  };
}
var Tt = nt | at | ht;
function Nt(e, t, r) {
  new Rt(e, t, r);
}
class Rt {
  constructor(t, r, i) {
    __privateAdd(this, _Rt_instances);
    __publicField(this, "parent");
    __privateAdd(this, _s, false);
    __privateAdd(this, _e);
    __privateAdd(this, _g, _ ? d : null);
    __privateAdd(this, _i);
    __privateAdd(this, _u);
    __privateAdd(this, _n);
    __privateAdd(this, _r, null);
    __privateAdd(this, _t2, null);
    __privateAdd(this, _a, null);
    __privateAdd(this, _h, null);
    __privateAdd(this, _o, null);
    __privateAdd(this, _c, 0);
    __privateAdd(this, _l, 0);
    __privateAdd(this, _d, false);
    __privateAdd(this, _f, null);
    __privateAdd(this, _m, wt(() => (__privateSet(this, _f, q(__privateGet(this, _c))), () => {
      __privateSet(this, _f, null);
    })));
    __privateSet(this, _e, t), __privateSet(this, _i, r), __privateSet(this, _u, i), this.parent = b.b, __privateSet(this, _s, !!__privateGet(this, _i).pending), __privateSet(this, _n, U(() => {
      if (b.b = this, _) {
        const s = __privateGet(this, _g);
        Q(), s.nodeType === H && s.data === X ? __privateMethod(this, _Rt_instances, E_fn).call(this) : __privateMethod(this, _Rt_instances, b_fn).call(this);
      } else {
        var a = __privateMethod(this, _Rt_instances, v_fn).call(this);
        try {
          __privateSet(this, _r, c(() => i(a)));
        } catch (s) {
          this.error(s);
        }
        __privateGet(this, _l) > 0 ? __privateMethod(this, _Rt_instances, p_fn).call(this) : __privateSet(this, _s, false);
      }
      return () => {
        var _a2;
        (_a2 = __privateGet(this, _o)) == null ? void 0 : _a2.remove();
      };
    }, Tt)), _ && __privateSet(this, _e, d);
  }
  is_pending() {
    return __privateGet(this, _s) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!__privateGet(this, _i).pending;
  }
  update_pending_count(t) {
    __privateMethod(this, _Rt_instances, y_fn).call(this, t), __privateSet(this, _c, __privateGet(this, _c) + t), __privateGet(this, _f) && et(__privateGet(this, _f), __privateGet(this, _c));
  }
  get_effect_pending() {
    return __privateGet(this, _m).call(this), Y(__privateGet(this, _f));
  }
  error(t) {
    var r = __privateGet(this, _i).onerror;
    let i = __privateGet(this, _i).failed;
    if (__privateGet(this, _d) || !r && !i) throw t;
    __privateGet(this, _r) && (D(__privateGet(this, _r)), __privateSet(this, _r, null)), __privateGet(this, _t2) && (D(__privateGet(this, _t2)), __privateSet(this, _t2, null)), __privateGet(this, _a) && (D(__privateGet(this, _a)), __privateSet(this, _a, null)), _ && (S(__privateGet(this, _g)), st(), S(rt()));
    var a = false, s = false;
    const o = () => {
      if (a) {
        ot();
        return;
      }
      a = true, s && it(), w.ensure(), __privateSet(this, _c, 0), __privateGet(this, _a) !== null && A(__privateGet(this, _a), () => {
        __privateSet(this, _a, null);
      }), __privateSet(this, _s, this.has_pending_snippet()), __privateSet(this, _r, __privateMethod(this, _Rt_instances, __fn).call(this, () => (__privateSet(this, _d, false), c(() => __privateGet(this, _u).call(this, __privateGet(this, _e)))))), __privateGet(this, _l) > 0 ? __privateMethod(this, _Rt_instances, p_fn).call(this) : __privateSet(this, _s, false);
    };
    var f = F;
    try {
      y(null), s = true, r == null ? void 0 : r(t, o), s = false;
    } catch (l) {
      M(l, __privateGet(this, _n) && __privateGet(this, _n).parent);
    } finally {
      y(f);
    }
    i && V(() => {
      __privateSet(this, _a, __privateMethod(this, _Rt_instances, __fn).call(this, () => {
        w.ensure(), __privateSet(this, _d, true);
        try {
          return c(() => {
            i(__privateGet(this, _e), () => t, () => o);
          });
        } catch (l) {
          return M(l, __privateGet(this, _n).parent), null;
        } finally {
          __privateSet(this, _d, false);
        }
      }));
    });
  }
}
_s = new WeakMap();
_e = new WeakMap();
_g = new WeakMap();
_i = new WeakMap();
_u = new WeakMap();
_n = new WeakMap();
_r = new WeakMap();
_t2 = new WeakMap();
_a = new WeakMap();
_h = new WeakMap();
_o = new WeakMap();
_c = new WeakMap();
_l = new WeakMap();
_d = new WeakMap();
_f = new WeakMap();
_m = new WeakMap();
_Rt_instances = new WeakSet();
b_fn = function() {
  try {
    __privateSet(this, _r, c(() => __privateGet(this, _u).call(this, __privateGet(this, _e))));
  } catch (t) {
    this.error(t);
  }
  __privateSet(this, _s, false);
};
E_fn = function() {
  const t = __privateGet(this, _i).pending;
  t && (__privateSet(this, _t2, c(() => t(__privateGet(this, _e)))), w.enqueue(() => {
    var r = __privateMethod(this, _Rt_instances, v_fn).call(this);
    __privateSet(this, _r, __privateMethod(this, _Rt_instances, __fn).call(this, () => (w.ensure(), c(() => __privateGet(this, _u).call(this, r))))), __privateGet(this, _l) > 0 ? __privateMethod(this, _Rt_instances, p_fn).call(this) : (A(__privateGet(this, _t2), () => {
      __privateSet(this, _t2, null);
    }), __privateSet(this, _s, false));
  }));
};
v_fn = function() {
  var t = __privateGet(this, _e);
  return __privateGet(this, _s) && (__privateSet(this, _o, W()), __privateGet(this, _e).before(__privateGet(this, _o)), t = __privateGet(this, _o)), t;
};
__fn = function(t) {
  var r = b, i = F, a = j;
  R(__privateGet(this, _n)), y(__privateGet(this, _n)), L(__privateGet(this, _n).ctx);
  try {
    return t();
  } catch (s) {
    return Z(s), null;
  } finally {
    R(r), y(i), L(a);
  }
};
p_fn = function() {
  const t = __privateGet(this, _i).pending;
  __privateGet(this, _r) !== null && (__privateSet(this, _h, document.createDocumentFragment()), __privateGet(this, _h).append(__privateGet(this, _o)), tt(__privateGet(this, _r), __privateGet(this, _h))), __privateGet(this, _t2) === null && __privateSet(this, _t2, c(() => t(__privateGet(this, _e))));
};
y_fn = function(t) {
  var _a2;
  if (!this.has_pending_snippet()) {
    this.parent && __privateMethod(_a2 = this.parent, _Rt_instances, y_fn).call(_a2, t);
    return;
  }
  __privateSet(this, _l, __privateGet(this, _l) + t), __privateGet(this, _l) === 0 && (__privateSet(this, _s, false), __privateGet(this, _t2) && A(__privateGet(this, _t2), () => {
    __privateSet(this, _t2, null);
  }), __privateGet(this, _h) && (__privateGet(this, _e).before(__privateGet(this, _h)), __privateSet(this, _h, null)));
};
const St = ["touchstart", "touchmove"];
function kt(e) {
  return St.includes(e);
}
const z = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set();
function Ot(e) {
  for (var t = 0; t < e.length; t++) z.add(e[t]);
  for (var r of C) r(e);
}
let P = null;
function N(e) {
  var _a2;
  var t = this, r = t.ownerDocument, i = e.type, a = ((_a2 = e.composedPath) == null ? void 0 : _a2.call(e)) || [], s = a[0] || e.target;
  P = e;
  var o = 0, f = P === e && e.__root;
  if (f) {
    var l = a.indexOf(f);
    if (l !== -1 && (t === document || t === window)) {
      e.__root = t;
      return;
    }
    var p = a.indexOf(t);
    if (p === -1) return;
    l <= p && (o = l);
  }
  if (s = a[o] || e.target, s !== t) {
    lt(e, "currentTarget", { configurable: true, get() {
      return s || r;
    } });
    var k = F, u = b;
    y(null), R(null);
    try {
      for (var n, h = []; s !== null; ) {
        var g = s.assignedSlot || s.parentNode || s.host || null;
        try {
          var m = s["__" + i];
          m != null && (!s.disabled || e.target === s) && m.call(s, e);
        } catch (E) {
          n ? h.push(E) : n = E;
        }
        if (e.cancelBubble || g === t || g === null) break;
        s = g;
      }
      if (n) {
        for (let E of h) queueMicrotask(() => {
          throw E;
        });
        throw n;
      }
    } finally {
      e.__root = t, delete e.currentTarget, y(k), R(u);
    }
  }
}
function xt(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function At(e, t) {
  return $(e, t);
}
function Ct(e, t) {
  O(), t.intro = t.intro ?? false;
  const r = t.target, i = _, a = d;
  try {
    for (var s = ft(r); s && (s.nodeType !== H || s.data !== ut); ) s = ct(s);
    if (!s) throw x;
    T(true), S(s);
    const o = $(e, { ...t, anchor: s });
    return T(false), o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((f) => f.startsWith("https://svelte.dev/e/"))) throw o;
    return o !== x && console.warn("Failed to hydrate: ", o), t.recover === false && dt(), O(), _t(r), T(false), At(e, t);
  } finally {
    T(i), S(a);
  }
}
const v = /* @__PURE__ */ new Map();
function $(e, { target: t, anchor: r, props: i = {}, events: a, context: s, intro: o = true }) {
  O();
  var f = /* @__PURE__ */ new Set(), l = (u) => {
    for (var n = 0; n < u.length; n++) {
      var h = u[n];
      if (!f.has(h)) {
        f.add(h);
        var g = kt(h);
        t.addEventListener(h, N, { passive: g });
        var m = v.get(h);
        m === void 0 ? (document.addEventListener(h, N, { passive: g }), v.set(h, 1)) : v.set(h, m + 1);
      }
    }
  };
  l(pt(z)), C.add(l);
  var p = void 0, k = gt(() => {
    var u = r ?? t.appendChild(W());
    return Nt(u, { pending: () => {
    } }, (n) => {
      if (s) {
        vt({});
        var h = j;
        h.c = s;
      }
      if (a && (i.$$events = a), _ && Et(n, null), p = e(n, i) || {}, _ && (b.nodes.end = d, d === null || d.nodeType !== H || d.data !== yt)) throw mt(), x;
      s && bt();
    }), () => {
      var _a2;
      for (var n of f) {
        t.removeEventListener(n, N);
        var h = v.get(n);
        --h === 0 ? (document.removeEventListener(n, N), v.delete(n)) : v.set(n, h);
      }
      C.delete(l), u !== r && ((_a2 = u.parentNode) == null ? void 0 : _a2.removeChild(u));
    };
  });
  return B.set(p, k), p;
}
let B = /* @__PURE__ */ new WeakMap();
function Bt(e, t) {
  const r = B.get(e);
  return r ? (B.delete(e), r(t)) : Promise.resolve();
}
export {
  Ot as d,
  Ct as h,
  At as m,
  xt as s,
  Bt as u
};
