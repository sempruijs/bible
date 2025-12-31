const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.CtpsKOEA.js","../chunks/EsKB78gf.js","../chunks/DZp6ItbZ.js","../chunks/BNmRZ_yl.js","../chunks/1U9xaPEF.js","../chunks/BLVtgz1l.js","../assets/0.X0G0TjDg.css","../nodes/1.D1I-dK44.js","../chunks/CtRou0-j.js","../chunks/EIIizr_c.js","../chunks/COS9EhO3.js","../chunks/BUApaBEI.js","../chunks/0cIQm7Ik.js","../nodes/2.DuALGoPQ.js","../chunks/xlgMNqe2.js","../chunks/DePszQJY.js","../nodes/3.C6XCdbRY.js","../chunks/CBbuBPfZ.js","../nodes/4.BX170kup.js"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
import { h as U, o as W, j as G, a1 as Q, aM as X, ar as Z, b as z, M as H, ab as J, a5 as w, ac as K, q as m, aN as $, aF as tt, D as et, W as rt, Q as st, u as at, aj as p, aO as nt, $ as O, a0 as ot, Y as it, Z as ct, _ as ut, ak as S, X as lt } from "../chunks/1U9xaPEF.js";
import { h as ft, m as dt, u as mt, s as ht } from "../chunks/EIIizr_c.js";
import { f as N, a as y, c as x, t as _t } from "../chunks/BNmRZ_yl.js";
import { o as vt } from "../chunks/0cIQm7Ik.js";
import { p as A, i as L } from "../chunks/xlgMNqe2.js";
import { B as gt } from "../chunks/BLVtgz1l.js";
let qt, wt, Nt, It, Vt, I, Ct, Bt, Mt, Dt;
let __tla = (async () => {
  var _e, _t2;
  function T(s, t, a) {
    U && W();
    var c = new gt(s);
    G(() => {
      var n = t() ?? null;
      c.ensure(n, n && ((e) => a(e, n)));
    }, Q);
  }
  function B(s, t) {
    return s === t || (s == null ? void 0 : s[J]) === t;
  }
  function j(s = {}, t, a, c) {
    return X(() => {
      var n, e;
      return Z(() => {
        n = e, e = [], z(() => {
          s !== a(...e) && (t(s, ...e), n && B(a(...n), s) && t(null, ...n));
        });
      }), () => {
        H(() => {
          e && B(a(...e), s) && t(null, ...e);
        });
      };
    }), s;
  }
  function yt(s) {
    return class extends bt {
      constructor(t) {
        super({
          component: s,
          ...t
        });
      }
    };
  }
  class bt {
    constructor(t) {
      __privateAdd(this, _e);
      __privateAdd(this, _t2);
      var _a;
      var a = /* @__PURE__ */ new Map(), c = (e, r) => {
        var o = et(r, false, false);
        return a.set(e, o), o;
      };
      const n = new Proxy({
        ...t.props || {},
        $$events: {}
      }, {
        get(e, r) {
          return m(a.get(r) ?? c(r, Reflect.get(e, r)));
        },
        has(e, r) {
          return r === K ? true : (m(a.get(r) ?? c(r, Reflect.get(e, r))), Reflect.has(e, r));
        },
        set(e, r, o) {
          return w(a.get(r) ?? c(r, o), o), Reflect.set(e, r, o);
        }
      });
      __privateSet(this, _t2, (t.hydrate ? ft : dt)(t.component, {
        target: t.target,
        anchor: t.anchor,
        props: n,
        context: t.context,
        intro: t.intro ?? false,
        recover: t.recover
      })), (!((_a = t == null ? void 0 : t.props) == null ? void 0 : _a.$$host) || t.sync === false) && $(), __privateSet(this, _e, n.$$events);
      for (const e of Object.keys(__privateGet(this, _t2))) e === "$set" || e === "$destroy" || e === "$on" || tt(this, e, {
        get() {
          return __privateGet(this, _t2)[e];
        },
        set(r) {
          __privateGet(this, _t2)[e] = r;
        },
        enumerable: true
      });
      __privateGet(this, _t2).$set = (e) => {
        Object.assign(n, e);
      }, __privateGet(this, _t2).$destroy = () => {
        mt(__privateGet(this, _t2));
      };
    }
    $set(t) {
      __privateGet(this, _t2).$set(t);
    }
    $on(t, a) {
      __privateGet(this, _e)[t] = __privateGet(this, _e)[t] || [];
      const c = (...n) => a.call(this, ...n);
      return __privateGet(this, _e)[t].push(c), () => {
        __privateGet(this, _e)[t] = __privateGet(this, _e)[t].filter((n) => n !== c);
      };
    }
    $destroy() {
      __privateGet(this, _t2).$destroy();
    }
  }
  _e = new WeakMap();
  _t2 = new WeakMap();
  let Et, Pt, D, R;
  Et = "modulepreload";
  Pt = function(s, t) {
    return new URL(s, t).href;
  };
  D = {};
  R = function(t, a, c) {
    let n = Promise.resolve();
    if (a && a.length > 0) {
      let r = function(u) {
        return Promise.all(u.map((d) => Promise.resolve(d).then((h) => ({
          status: "fulfilled",
          value: h
        }), (h) => ({
          status: "rejected",
          reason: h
        }))));
      };
      const o = document.getElementsByTagName("link"), k = document.querySelector("meta[property=csp-nonce]"), b = (k == null ? void 0 : k.nonce) || (k == null ? void 0 : k.getAttribute("nonce"));
      n = r(a.map((u) => {
        if (u = Pt(u, c), u in D) return;
        D[u] = true;
        const d = u.endsWith(".css"), h = d ? '[rel="stylesheet"]' : "";
        if (!!c) for (let i = o.length - 1; i >= 0; i--) {
          const l = o[i];
          if (l.href === u && (!d || l.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${u}"]${h}`)) return;
        const f = document.createElement("link");
        if (f.rel = d ? "stylesheet" : Et, d || (f.as = "script"), f.crossOrigin = "", f.href = u, b && f.setAttribute("nonce", b), document.head.appendChild(f), d) return new Promise((i, l) => {
          f.addEventListener("load", i), f.addEventListener("error", () => l(new Error(`Unable to preload CSS for ${u}`)));
        });
      }));
    }
    function e(r) {
      const o = new Event("vite:preloadError", {
        cancelable: true
      });
      if (o.payload = r, window.dispatchEvent(o), !o.defaultPrevented) throw r;
    }
    return n.then((r) => {
      for (const o of r || []) o.status === "rejected" && e(o.reason);
      return t().catch(e);
    });
  };
  Ct = {};
  var Rt = N('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'), kt = N("<!> <!>", 1);
  function Ot(s, t) {
    rt(t, true);
    let a = A(t, "components", 23, () => []), c = A(t, "data_0", 3, null), n = A(t, "data_1", 3, null);
    st(() => t.stores.page.set(t.page)), at(() => {
      t.stores, t.page, t.constructors, a(), t.form, c(), n(), t.stores.page.notify();
    });
    let e = p(false), r = p(false), o = p(null);
    vt(() => {
      const i = t.stores.page.subscribe(() => {
        m(e) && (w(r, true), nt().then(() => {
          w(o, document.title || "untitled page", true);
        }));
      });
      return w(e, true), i;
    });
    const k = S(() => t.constructors[1]);
    var b = kt(), u = O(b);
    {
      var d = (i) => {
        const l = S(() => t.constructors[0]);
        var _ = x(), E = O(_);
        T(E, () => m(l), (v, g) => {
          j(g(v, {
            get data() {
              return c();
            },
            get form() {
              return t.form;
            },
            get params() {
              return t.page.params;
            },
            children: (P, pt) => {
              var M = x(), V = O(M);
              T(V, () => m(k), (q, F) => {
                j(F(q, {
                  get data() {
                    return n();
                  },
                  get form() {
                    return t.form;
                  },
                  get params() {
                    return t.page.params;
                  }
                }), (Y) => a()[1] = Y, () => {
                  var _a;
                  return (_a = a()) == null ? void 0 : _a[1];
                });
              }), y(P, M);
            },
            $$slots: {
              default: true
            }
          }), (P) => a()[0] = P, () => {
            var _a;
            return (_a = a()) == null ? void 0 : _a[0];
          });
        }), y(i, _);
      }, h = (i) => {
        const l = S(() => t.constructors[0]);
        var _ = x(), E = O(_);
        T(E, () => m(l), (v, g) => {
          j(g(v, {
            get data() {
              return c();
            },
            get form() {
              return t.form;
            },
            get params() {
              return t.page.params;
            }
          }), (P) => a()[0] = P, () => {
            var _a;
            return (_a = a()) == null ? void 0 : _a[0];
          });
        }), y(i, _);
      };
      L(u, (i) => {
        t.constructors[1] ? i(d) : i(h, false);
      });
    }
    var C = ot(u, 2);
    {
      var f = (i) => {
        var l = Rt(), _ = ct(l);
        {
          var E = (v) => {
            var g = _t();
            lt(() => ht(g, m(o))), y(v, g);
          };
          L(_, (v) => {
            m(r) && v(E);
          });
        }
        ut(l), y(i, l);
      };
      L(C, (i) => {
        m(e) && i(f);
      });
    }
    y(s, b), it();
  }
  Mt = yt(Ot);
  Bt = [
    () => R(() => import("../nodes/0.CtpsKOEA.js"), __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url),
    () => R(() => import("../nodes/1.D1I-dK44.js"), __vite__mapDeps([7,3,4,8,9,10,11,12]), import.meta.url),
    () => R(() => import("../nodes/2.DuALGoPQ.js"), __vite__mapDeps([13,3,4,8,14,5,9,15,1]), import.meta.url),
    () => R(() => import("../nodes/3.C6XCdbRY.js"), __vite__mapDeps([16,17,11,1,3,4,9]), import.meta.url),
    () => R(() => import("../nodes/4.BX170kup.js"), __vite__mapDeps([18,17,11,1,2,3,4,9,15]), import.meta.url)
  ];
  Dt = [];
  Nt = {
    "/": [
      2
    ],
    "/[book]": [
      3
    ],
    "/[book]/[chapter]": [
      4
    ]
  };
  I = {
    handleError: (({ error: s }) => {
      console.error(s);
    }),
    reroute: (() => {
    }),
    transport: {}
  };
  wt = Object.fromEntries(Object.entries(I.transport).map(([s, t]) => [
    s,
    t.decode
  ]));
  It = Object.fromEntries(Object.entries(I.transport).map(([s, t]) => [
    s,
    t.encode
  ]));
  Vt = false;
  qt = (s, t) => wt[s](t);
})();
export {
  __tla,
  qt as decode,
  wt as decoders,
  Nt as dictionary,
  It as encoders,
  Vt as hash,
  I as hooks,
  Ct as matchers,
  Bt as nodes,
  Mt as root,
  Dt as server_loads
};
