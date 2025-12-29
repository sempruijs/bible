const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.DeC1uHOi.js","../chunks/Btl_48n0.js","../chunks/BuvrTTaO.js","../chunks/Cj37v-TY.js","../chunks/BdIJhRdh.js","../chunks/C1VSmUil.js","../assets/0.X0G0TjDg.css","../nodes/1.DwatLVn1.js","../chunks/DnarfsNt.js","../chunks/BfY5rtVt.js","../chunks/pYp_LRQ4.js","../chunks/BUApaBEI.js","../chunks/DeNk9GmC.js","../nodes/2.BlpZAjOr.js","../chunks/BiqzYgdy.js","../chunks/DjS5NvuB.js","../nodes/3.BoIkj2qv.js","../chunks/CBbuBPfZ.js","../nodes/4.JhoxRpMf.js"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
import { h as C, o as q, j as V, aB as F, v as J, H as K, w as Q, k as X, x as M, aM as $, aq as ee, i as te, M as re, Z as se, T as O, _ as ae, q as h, aN as ne, aF as oe, D as ie, a8 as ce, a3 as ue, u as le, ai as T, aO as fe, ad as w, ae as de, aa as me, ab as he, ac as _e, aj as p, a9 as ve } from "../chunks/BdIJhRdh.js";
import { h as ge, m as ye, u as be, s as Ee } from "../chunks/BfY5rtVt.js";
import { f as Y, a as E, c as S, t as Pe } from "../chunks/Cj37v-TY.js";
import { o as Re } from "../chunks/DeNk9GmC.js";
import { B as H } from "../chunks/C1VSmUil.js";
import { p as A } from "../chunks/BiqzYgdy.js";
let Ge, xe, Ye, He, Ue, U, Ie, Ve, qe, Fe;
let __tla = (async () => {
  var _t, _e2;
  function x(s, e, a = false) {
    C && q();
    var i = new H(s), n = a ? F : 0;
    function t(r, o) {
      if (C) {
        const _ = J(s) === K;
        if (r === _) {
          var d = Q();
          X(d), i.anchor = d, M(false), i.ensure(r, o), M(true);
          return;
        }
      }
      i.ensure(r, o);
    }
    V(() => {
      var r = false;
      e((o, d = true) => {
        r = true, t(d, o);
      }), r || t(false, null);
    }, n);
  }
  function L(s, e, a) {
    C && q();
    var i = new H(s);
    V(() => {
      var n = e() ?? null;
      i.ensure(n, n && ((t) => a(t, n)));
    }, F);
  }
  function N(s, e) {
    return s === e || (s == null ? void 0 : s[se]) === e;
  }
  function j(s = {}, e, a, i) {
    return $(() => {
      var n, t;
      return ee(() => {
        n = t, t = [], te(() => {
          s !== a(...t) && (e(s, ...t), n && N(a(...n), s) && e(null, ...n));
        });
      }), () => {
        re(() => {
          t && N(a(...t), s) && e(null, ...t);
        });
      };
    }), s;
  }
  function ke(s) {
    return class extends we {
      constructor(e) {
        super({
          component: s,
          ...e
        });
      }
    };
  }
  class we {
    constructor(e) {
      __privateAdd(this, _t);
      __privateAdd(this, _e2);
      var _a;
      var a = /* @__PURE__ */ new Map(), i = (t, r) => {
        var o = ie(r, false, false);
        return a.set(t, o), o;
      };
      const n = new Proxy({
        ...e.props || {},
        $$events: {}
      }, {
        get(t, r) {
          return h(a.get(r) ?? i(r, Reflect.get(t, r)));
        },
        has(t, r) {
          return r === ae ? true : (h(a.get(r) ?? i(r, Reflect.get(t, r))), Reflect.has(t, r));
        },
        set(t, r, o) {
          return O(a.get(r) ?? i(r, o), o), Reflect.set(t, r, o);
        }
      });
      __privateSet(this, _e2, (e.hydrate ? ge : ye)(e.component, {
        target: e.target,
        anchor: e.anchor,
        props: n,
        context: e.context,
        intro: e.intro ?? false,
        recover: e.recover
      })), (!((_a = e == null ? void 0 : e.props) == null ? void 0 : _a.$$host) || e.sync === false) && ne(), __privateSet(this, _t, n.$$events);
      for (const t of Object.keys(__privateGet(this, _e2))) t === "$set" || t === "$destroy" || t === "$on" || oe(this, t, {
        get() {
          return __privateGet(this, _e2)[t];
        },
        set(r) {
          __privateGet(this, _e2)[t] = r;
        },
        enumerable: true
      });
      __privateGet(this, _e2).$set = (t) => {
        Object.assign(n, t);
      }, __privateGet(this, _e2).$destroy = () => {
        be(__privateGet(this, _e2));
      };
    }
    $set(e) {
      __privateGet(this, _e2).$set(e);
    }
    $on(e, a) {
      __privateGet(this, _t)[e] = __privateGet(this, _t)[e] || [];
      const i = (...n) => a.call(this, ...n);
      return __privateGet(this, _t)[e].push(i), () => {
        __privateGet(this, _t)[e] = __privateGet(this, _t)[e].filter((n) => n !== i);
      };
    }
    $destroy() {
      __privateGet(this, _e2).$destroy();
    }
  }
  _t = new WeakMap();
  _e2 = new WeakMap();
  let Oe, Te, I, k;
  Oe = "modulepreload";
  Te = function(s, e) {
    return new URL(s, e).href;
  };
  I = {};
  k = function(e, a, i) {
    let n = Promise.resolve();
    if (a && a.length > 0) {
      let r = function(u) {
        return Promise.all(u.map((m) => Promise.resolve(m).then((v) => ({
          status: "fulfilled",
          value: v
        }), (v) => ({
          status: "rejected",
          reason: v
        }))));
      };
      const o = document.getElementsByTagName("link"), d = document.querySelector("meta[property=csp-nonce]"), _ = (d == null ? void 0 : d.nonce) || (d == null ? void 0 : d.getAttribute("nonce"));
      n = r(a.map((u) => {
        if (u = Te(u, i), u in I) return;
        I[u] = true;
        const m = u.endsWith(".css"), v = m ? '[rel="stylesheet"]' : "";
        if (!!i) for (let c = o.length - 1; c >= 0; c--) {
          const l = o[c];
          if (l.href === u && (!m || l.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${u}"]${v}`)) return;
        const f = document.createElement("link");
        if (f.rel = m ? "stylesheet" : Oe, m || (f.as = "script"), f.crossOrigin = "", f.href = u, _ && f.setAttribute("nonce", _), document.head.appendChild(f), m) return new Promise((c, l) => {
          f.addEventListener("load", c), f.addEventListener("error", () => l(new Error(`Unable to preload CSS for ${u}`)));
        });
      }));
    }
    function t(r) {
      const o = new Event("vite:preloadError", {
        cancelable: true
      });
      if (o.payload = r, window.dispatchEvent(o), !o.defaultPrevented) throw r;
    }
    return n.then((r) => {
      for (const o of r || []) o.status === "rejected" && t(o.reason);
      return e().catch(t);
    });
  };
  Ie = {};
  var pe = Y('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'), Se = Y("<!> <!>", 1);
  function Ae(s, e) {
    ce(e, true);
    let a = A(e, "components", 23, () => []), i = A(e, "data_0", 3, null), n = A(e, "data_1", 3, null);
    ue(() => e.stores.page.set(e.page)), le(() => {
      e.stores, e.page, e.constructors, a(), e.form, i(), n(), e.stores.page.notify();
    });
    let t = T(false), r = T(false), o = T(null);
    Re(() => {
      const c = e.stores.page.subscribe(() => {
        h(t) && (O(r, true), fe().then(() => {
          O(o, document.title || "untitled page", true);
        }));
      });
      return O(t, true), c;
    });
    const d = p(() => e.constructors[1]);
    var _ = Se(), u = w(_);
    {
      var m = (c) => {
        const l = p(() => e.constructors[0]);
        var g = S(), P = w(g);
        L(P, () => h(l), (y, b) => {
          j(b(y, {
            get data() {
              return i();
            },
            get form() {
              return e.form;
            },
            get params() {
              return e.page.params;
            },
            children: (R, Le) => {
              var D = S(), G = w(D);
              L(G, () => h(d), (W, Z) => {
                j(Z(W, {
                  get data() {
                    return n();
                  },
                  get form() {
                    return e.form;
                  },
                  get params() {
                    return e.page.params;
                  }
                }), (z) => a()[1] = z, () => {
                  var _a;
                  return (_a = a()) == null ? void 0 : _a[1];
                });
              }), E(R, D);
            },
            $$slots: {
              default: true
            }
          }), (R) => a()[0] = R, () => {
            var _a;
            return (_a = a()) == null ? void 0 : _a[0];
          });
        }), E(c, g);
      }, v = (c) => {
        const l = p(() => e.constructors[0]);
        var g = S(), P = w(g);
        L(P, () => h(l), (y, b) => {
          j(b(y, {
            get data() {
              return i();
            },
            get form() {
              return e.form;
            },
            get params() {
              return e.page.params;
            }
          }), (R) => a()[0] = R, () => {
            var _a;
            return (_a = a()) == null ? void 0 : _a[0];
          });
        }), E(c, g);
      };
      x(u, (c) => {
        e.constructors[1] ? c(m) : c(v, false);
      });
    }
    var B = de(u, 2);
    {
      var f = (c) => {
        var l = pe(), g = he(l);
        {
          var P = (y) => {
            var b = Pe();
            ve(() => Ee(b, h(o))), E(y, b);
          };
          x(g, (y) => {
            h(r) && y(P);
          });
        }
        _e(l), E(c, l);
      };
      x(B, (c) => {
        h(t) && c(f);
      });
    }
    E(s, _), me();
  }
  qe = ke(Ae);
  Ve = [
    () => k(() => import("../nodes/0.DeC1uHOi.js"), __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url),
    () => k(() => import("../nodes/1.DwatLVn1.js"), __vite__mapDeps([7,3,4,8,9,10,11,12]), import.meta.url),
    () => k(() => import("../nodes/2.BlpZAjOr.js"), __vite__mapDeps([13,3,4,8,14,9,15,1]), import.meta.url),
    () => k(() => import("../nodes/3.BoIkj2qv.js"), __vite__mapDeps([16,17,11,1,3,4,9]), import.meta.url),
    () => k(() => import("../nodes/4.JhoxRpMf.js"), __vite__mapDeps([18,17,11,1,2,3,4,9,15]), import.meta.url)
  ];
  Fe = [];
  Ye = {
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
  U = {
    handleError: (({ error: s }) => {
      console.error(s);
    }),
    reroute: (() => {
    }),
    transport: {}
  };
  xe = Object.fromEntries(Object.entries(U.transport).map(([s, e]) => [
    s,
    e.decode
  ]));
  He = Object.fromEntries(Object.entries(U.transport).map(([s, e]) => [
    s,
    e.encode
  ]));
  Ue = false;
  Ge = (s, e) => xe[s](e);
})();
export {
  __tla,
  Ge as decode,
  xe as decoders,
  Ye as dictionary,
  He as encoders,
  Ue as hash,
  U as hooks,
  Ie as matchers,
  Ve as nodes,
  qe as root,
  Fe as server_loads
};
