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
var _t, _s, _e, _i, _a, _h, _r;
import { c as n, r as p, d as o, p as u, a as d, b as l, h as m, e as _, m as v, s as b } from "./BdIJhRdh.js";
class w {
  constructor(e, s = true) {
    __publicField(this, "anchor");
    __privateAdd(this, _t, /* @__PURE__ */ new Map());
    __privateAdd(this, _s, /* @__PURE__ */ new Map());
    __privateAdd(this, _e, /* @__PURE__ */ new Map());
    __privateAdd(this, _i, /* @__PURE__ */ new Set());
    __privateAdd(this, _a, true);
    __privateAdd(this, _h, () => {
      var e = n;
      if (__privateGet(this, _t).has(e)) {
        var s = __privateGet(this, _t).get(e), t = __privateGet(this, _s).get(s);
        if (t) p(t), __privateGet(this, _i).delete(s);
        else {
          var a = __privateGet(this, _e).get(s);
          a && (__privateGet(this, _s).set(s, a.effect), __privateGet(this, _e).delete(s), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), t = a.effect);
        }
        for (const [i, h] of __privateGet(this, _t)) {
          if (__privateGet(this, _t).delete(i), i === e) break;
          const r = __privateGet(this, _e).get(h);
          r && (o(r.effect), __privateGet(this, _e).delete(h));
        }
        for (const [i, h] of __privateGet(this, _s)) {
          if (i === s || __privateGet(this, _i).has(i)) continue;
          const r = () => {
            if (Array.from(__privateGet(this, _t).values()).includes(i)) {
              var c = document.createDocumentFragment();
              v(h, c), c.append(d()), __privateGet(this, _e).set(i, { effect: h, fragment: c });
            } else o(h);
            __privateGet(this, _i).delete(i), __privateGet(this, _s).delete(i);
          };
          __privateGet(this, _a) || !t ? (__privateGet(this, _i).add(i), u(h, r, false)) : r();
        }
      }
    });
    __privateAdd(this, _r, (e) => {
      __privateGet(this, _t).delete(e);
      const s = Array.from(__privateGet(this, _t).values());
      for (const [t, a] of __privateGet(this, _e)) s.includes(t) || (o(a.effect), __privateGet(this, _e).delete(t));
    });
    this.anchor = e, __privateSet(this, _a, s);
  }
  ensure(e, s) {
    var t = n, a = b();
    if (s && !__privateGet(this, _s).has(e) && !__privateGet(this, _e).has(e)) if (a) {
      var i = document.createDocumentFragment(), h = d();
      i.append(h), __privateGet(this, _e).set(e, { effect: l(() => s(h)), fragment: i });
    } else __privateGet(this, _s).set(e, l(() => s(this.anchor)));
    if (__privateGet(this, _t).set(t, e), a) {
      for (const [r, f] of __privateGet(this, _s)) r === e ? t.skipped_effects.delete(f) : t.skipped_effects.add(f);
      for (const [r, f] of __privateGet(this, _e)) r === e ? t.skipped_effects.delete(f.effect) : t.skipped_effects.add(f.effect);
      t.oncommit(__privateGet(this, _h)), t.ondiscard(__privateGet(this, _r));
    } else m && (this.anchor = _), __privateGet(this, _h).call(this);
  }
}
_t = new WeakMap();
_s = new WeakMap();
_e = new WeakMap();
_i = new WeakMap();
_a = new WeakMap();
_h = new WeakMap();
_r = new WeakMap();
export {
  w as B
};
