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
var _t, _s, _e, _i, _a, _f, _h;
import { d as n, r as p, e as o, p as u, f as d, g as l, h as m, i as _, m as v, s as b } from "./1U9xaPEF.js";
class w {
  constructor(e, s = true) {
    __publicField(this, "anchor");
    __privateAdd(this, _t, /* @__PURE__ */ new Map());
    __privateAdd(this, _s, /* @__PURE__ */ new Map());
    __privateAdd(this, _e, /* @__PURE__ */ new Map());
    __privateAdd(this, _i, /* @__PURE__ */ new Set());
    __privateAdd(this, _a, true);
    __privateAdd(this, _f, () => {
      var e = n;
      if (__privateGet(this, _t).has(e)) {
        var s = __privateGet(this, _t).get(e), t = __privateGet(this, _s).get(s);
        if (t) p(t), __privateGet(this, _i).delete(s);
        else {
          var a = __privateGet(this, _e).get(s);
          a && (__privateGet(this, _s).set(s, a.effect), __privateGet(this, _e).delete(s), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), t = a.effect);
        }
        for (const [i, f] of __privateGet(this, _t)) {
          if (__privateGet(this, _t).delete(i), i === e) break;
          const h = __privateGet(this, _e).get(f);
          h && (o(h.effect), __privateGet(this, _e).delete(f));
        }
        for (const [i, f] of __privateGet(this, _s)) {
          if (i === s || __privateGet(this, _i).has(i)) continue;
          const h = () => {
            if (Array.from(__privateGet(this, _t).values()).includes(i)) {
              var c = document.createDocumentFragment();
              v(f, c), c.append(d()), __privateGet(this, _e).set(i, { effect: f, fragment: c });
            } else o(f);
            __privateGet(this, _i).delete(i), __privateGet(this, _s).delete(i);
          };
          __privateGet(this, _a) || !t ? (__privateGet(this, _i).add(i), u(f, h, false)) : h();
        }
      }
    });
    __privateAdd(this, _h, (e) => {
      __privateGet(this, _t).delete(e);
      const s = Array.from(__privateGet(this, _t).values());
      for (const [t, a] of __privateGet(this, _e)) s.includes(t) || (o(a.effect), __privateGet(this, _e).delete(t));
    });
    this.anchor = e, __privateSet(this, _a, s);
  }
  ensure(e, s) {
    var t = n, a = b();
    if (s && !__privateGet(this, _s).has(e) && !__privateGet(this, _e).has(e)) if (a) {
      var i = document.createDocumentFragment(), f = d();
      i.append(f), __privateGet(this, _e).set(e, { effect: l(() => s(f)), fragment: i });
    } else __privateGet(this, _s).set(e, l(() => s(this.anchor)));
    if (__privateGet(this, _t).set(t, e), a) {
      for (const [h, r] of __privateGet(this, _s)) h === e ? t.skipped_effects.delete(r) : t.skipped_effects.add(r);
      for (const [h, r] of __privateGet(this, _e)) h === e ? t.skipped_effects.delete(r.effect) : t.skipped_effects.add(r.effect);
      t.oncommit(__privateGet(this, _f)), t.ondiscard(__privateGet(this, _h));
    } else m && (this.anchor = _), __privateGet(this, _f).call(this);
  }
}
_t = new WeakMap();
_s = new WeakMap();
_e = new WeakMap();
_i = new WeakMap();
_a = new WeakMap();
_f = new WeakMap();
_h = new WeakMap();
export {
  w as B
};
