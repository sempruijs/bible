const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0._N56aHJ2.js","../chunks/DEwRMGgG.js","../chunks/C4Jx_sal.js","../chunks/CwRHpxXb.js","../assets/0.eMH47Sso.css","../nodes/1.Ds50AIjV.js","../chunks/EgxGf6lo.js","../chunks/CMTFrVuM.js","../chunks/BmgkC57G.js","../chunks/D70lfaQ3.js","../chunks/DCU4qwos.js","../nodes/2.CLwQgFg9.js","../chunks/CNwgn5mZ.js","../chunks/SJ_a0Wuu.js","../chunks/B-P6ZHem.js","../nodes/3.uRBKz8y-.js","../chunks/ztTZyzPV.js","../chunks/Cqj64fu2.js","../nodes/4.Bjyrmf7d.js","../chunks/DixKlQZ1.js"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
import { h as J, y as oe, b as ie, E as ce, a as ue, F as le, c as fe, ah as de, ai as _e, aj as me, N as W, ak as ve, al as he, g as f, am as ge, j as Pe, s as q, m as Q, u as Z, an as Ee, S as ye, ao as X, Y as be, ap as Re, aq as Se, ar as Oe, as as Ae, e as Ie, p as Le, I as we, J as xe, i as G, at as Te, ag as D, x as I, l as ke, k as De, o as Ce, v as Ne, w as je } from "../chunks/C4Jx_sal.js";
import { h as qe, m as Be, u as Me, s as Ve } from "../chunks/CMTFrVuM.js";
import { t as p, a as R, c as x, d as Ue } from "../chunks/DEwRMGgG.js";
import { i as B } from "../chunks/SJ_a0Wuu.js";
import { b as C } from "../chunks/DixKlQZ1.js";
import { c as Ye } from "../chunks/ztTZyzPV.js";
import { o as Fe } from "../chunks/D70lfaQ3.js";
let dt, Xe, lt, ft, Qe, ot, ct, it, ut;
let __tla = (async () => {
  var _t, _e2;
  function N(n, e, a) {
    J && oe();
    var i = n, o, r;
    ie(() => {
      o !== (o = e()) && (r && (le(r), r = null), o && (r = ue(() => a(i, o))));
    }, ce), J && (i = fe);
  }
  function H(n) {
    var _a;
    return ((_a = n.ctx) == null ? void 0 : _a.d) ?? false;
  }
  function M(n, e, a, i) {
    var _a;
    var o = (a & Se) !== 0, r = !be || (a & Re) !== 0, t = (a & Ee) !== 0, c = (a & Oe) !== 0, S = false, l;
    t ? [l, S] = Ye(() => n[e]) : l = n[e];
    var g = ye in n || X in n, P = t && (((_a = de(n, e)) == null ? void 0 : _a.set) ?? (g && e in n && ((s) => n[e] = s))) || void 0, E = i, _ = true, v = false, y = () => (v = true, _ && (_ = false, c ? E = Z(i) : E = i), E);
    l === void 0 && i !== void 0 && (P && r && _e(), l = y(), P && P(l));
    var u;
    if (r) u = () => {
      var s = n[e];
      return s === void 0 ? y() : (_ = true, v = false, s);
    };
    else {
      var m = (o ? W : ve)(() => n[e]);
      m.f |= me, u = () => {
        var s = f(m);
        return s !== void 0 && (E = void 0), s === void 0 ? E : s;
      };
    }
    if ((a & he) === 0) return u;
    if (P) {
      var O = n.$$legacy;
      return function(s, A) {
        return arguments.length > 0 ? ((!r || !A || O || S) && P(A ? u() : s), s) : u();
      };
    }
    var b = false, h = Q(l), d = W(() => {
      var s = u(), A = f(h);
      return b ? (b = false, A) : h.v = s;
    });
    return t && f(d), o || (d.equals = ge), function(s, A) {
      if (arguments.length > 0) {
        const L = A ? f(d) : r && t ? Pe(s) : s;
        if (!d.equals(L)) {
          if (b = true, q(h, L), v && E !== void 0 && (E = L), H(d)) return s;
          Z(() => f(d));
        }
        return s;
      }
      return H(d) ? d.v : f(d);
    };
  }
  function Ge(n) {
    return class extends ze {
      constructor(e) {
        super({
          component: n,
          ...e
        });
      }
    };
  }
  class ze {
    constructor(e) {
      __privateAdd(this, _t);
      __privateAdd(this, _e2);
      var _a;
      var a = /* @__PURE__ */ new Map(), i = (r, t) => {
        var c = Q(t);
        return a.set(r, c), c;
      };
      const o = new Proxy({
        ...e.props || {},
        $$events: {}
      }, {
        get(r, t) {
          return f(a.get(t) ?? i(t, Reflect.get(r, t)));
        },
        has(r, t) {
          return t === X ? true : (f(a.get(t) ?? i(t, Reflect.get(r, t))), Reflect.has(r, t));
        },
        set(r, t, c) {
          return q(a.get(t) ?? i(t, c), c), Reflect.set(r, t, c);
        }
      });
      __privateSet(this, _e2, (e.hydrate ? qe : Be)(e.component, {
        target: e.target,
        anchor: e.anchor,
        props: o,
        context: e.context,
        intro: e.intro ?? false,
        recover: e.recover
      })), (!((_a = e == null ? void 0 : e.props) == null ? void 0 : _a.$$host) || e.sync === false) && Ae(), __privateSet(this, _t, o.$$events);
      for (const r of Object.keys(__privateGet(this, _e2))) r === "$set" || r === "$destroy" || r === "$on" || Ie(this, r, {
        get() {
          return __privateGet(this, _e2)[r];
        },
        set(t) {
          __privateGet(this, _e2)[r] = t;
        },
        enumerable: true
      });
      __privateGet(this, _e2).$set = (r) => {
        Object.assign(o, r);
      }, __privateGet(this, _e2).$destroy = () => {
        Me(__privateGet(this, _e2));
      };
    }
    $set(e) {
      __privateGet(this, _e2).$set(e);
    }
    $on(e, a) {
      __privateGet(this, _t)[e] = __privateGet(this, _t)[e] || [];
      const i = (...o) => a.call(this, ...o);
      return __privateGet(this, _t)[e].push(i), () => {
        __privateGet(this, _t)[e] = __privateGet(this, _t)[e].filter((o) => o !== i);
      };
    }
    $destroy() {
      __privateGet(this, _e2).$destroy();
    }
  }
  _t = new WeakMap();
  _e2 = new WeakMap();
  let Je, We, K, j;
  Je = "modulepreload";
  We = function(n, e) {
    return new URL(n, e).href;
  };
  K = {};
  j = function(e, a, i) {
    let o = Promise.resolve();
    if (a && a.length > 0) {
      const t = document.getElementsByTagName("link"), c = document.querySelector("meta[property=csp-nonce]"), S = (c == null ? void 0 : c.nonce) || (c == null ? void 0 : c.getAttribute("nonce"));
      o = Promise.allSettled(a.map((l) => {
        if (l = We(l, i), l in K) return;
        K[l] = true;
        const g = l.endsWith(".css"), P = g ? '[rel="stylesheet"]' : "";
        if (!!i) for (let v = t.length - 1; v >= 0; v--) {
          const y = t[v];
          if (y.href === l && (!g || y.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${l}"]${P}`)) return;
        const _ = document.createElement("link");
        if (_.rel = g ? "stylesheet" : Je, g || (_.as = "script"), _.crossOrigin = "", _.href = l, S && _.setAttribute("nonce", S), document.head.appendChild(_), g) return new Promise((v, y) => {
          _.addEventListener("load", v), _.addEventListener("error", () => y(new Error(`Unable to preload CSS for ${l}`)));
        });
      }));
    }
    function r(t) {
      const c = new Event("vite:preloadError", {
        cancelable: true
      });
      if (c.payload = t, window.dispatchEvent(c), !c.defaultPrevented) throw t;
    }
    return o.then((t) => {
      for (const c of t || []) c.status === "rejected" && r(c.reason);
      return e().catch(r);
    });
  };
  ot = {};
  var Ze = p('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'), He = p("<!> <!>", 1);
  function Ke(n, e) {
    Le(e, true);
    let a = M(e, "components", 23, () => []), i = M(e, "data_0", 3, null), o = M(e, "data_1", 3, null), r = M(e, "data_2", 3, null);
    we(() => e.stores.page.set(e.page)), xe(() => {
      e.stores, e.page, e.constructors, a(), e.form, i(), o(), r(), e.stores.page.notify();
    });
    let t = G(false), c = G(false), S = G(null);
    Fe(() => {
      const u = e.stores.page.subscribe(() => {
        f(t) && (q(c, true), Te().then(() => {
          q(S, document.title || "untitled page", true);
        }));
      });
      return q(t, true), u;
    });
    const l = D(() => e.constructors[2]);
    var g = He(), P = I(g);
    {
      var E = (u) => {
        var m = x();
        const O = D(() => e.constructors[0]);
        var b = I(m);
        N(b, () => f(O), (h, d) => {
          C(d(h, {
            get data() {
              return i();
            },
            get form() {
              return e.form;
            },
            children: (s, A) => {
              var L = x(), $ = I(L);
              {
                var ee = (w) => {
                  var T = x();
                  const V = D(() => e.constructors[1]);
                  var U = I(T);
                  N(U, () => f(V), (Y, F) => {
                    C(F(Y, {
                      get data() {
                        return o();
                      },
                      get form() {
                        return e.form;
                      },
                      children: (k, pe) => {
                        var z = x(), re = I(z);
                        N(re, () => f(l), (ae, ne) => {
                          C(ne(ae, {
                            get data() {
                              return r();
                            },
                            get form() {
                              return e.form;
                            }
                          }), (se) => a()[2] = se, () => {
                            var _a;
                            return (_a = a()) == null ? void 0 : _a[2];
                          });
                        }), R(k, z);
                      },
                      $$slots: {
                        default: true
                      }
                    }), (k) => a()[1] = k, () => {
                      var _a;
                      return (_a = a()) == null ? void 0 : _a[1];
                    });
                  }), R(w, T);
                }, te = (w) => {
                  var T = x();
                  const V = D(() => e.constructors[1]);
                  var U = I(T);
                  N(U, () => f(V), (Y, F) => {
                    C(F(Y, {
                      get data() {
                        return o();
                      },
                      get form() {
                        return e.form;
                      }
                    }), (k) => a()[1] = k, () => {
                      var _a;
                      return (_a = a()) == null ? void 0 : _a[1];
                    });
                  }), R(w, T);
                };
                B($, (w) => {
                  e.constructors[2] ? w(ee) : w(te, false);
                });
              }
              R(s, L);
            },
            $$slots: {
              default: true
            }
          }), (s) => a()[0] = s, () => {
            var _a;
            return (_a = a()) == null ? void 0 : _a[0];
          });
        }), R(u, m);
      }, _ = (u) => {
        var m = x();
        const O = D(() => e.constructors[0]);
        var b = I(m);
        N(b, () => f(O), (h, d) => {
          C(d(h, {
            get data() {
              return i();
            },
            get form() {
              return e.form;
            }
          }), (s) => a()[0] = s, () => {
            var _a;
            return (_a = a()) == null ? void 0 : _a[0];
          });
        }), R(u, m);
      };
      B(P, (u) => {
        e.constructors[1] ? u(E) : u(_, false);
      });
    }
    var v = ke(P, 2);
    {
      var y = (u) => {
        var m = Ze(), O = Ce(m);
        {
          var b = (h) => {
            var d = Ue();
            je(() => Ve(d, f(S))), R(h, d);
          };
          B(O, (h) => {
            f(c) && h(b);
          });
        }
        Ne(m), R(u, m);
      };
      B(v, (u) => {
        f(t) && u(y);
      });
    }
    R(n, g), De();
  }
  it = Ge(Ke);
  ct = [
    () => j(() => import("../nodes/0._N56aHJ2.js"), __vite__mapDeps([0,1,2,3,4]), import.meta.url),
    () => j(() => import("../nodes/1.Ds50AIjV.js"), __vite__mapDeps([5,1,2,6,7,8,9,10]), import.meta.url),
    () => j(() => import("../nodes/2.CLwQgFg9.js"), __vite__mapDeps([11,1,2,3,12,7,13,14,8,9,10]), import.meta.url),
    () => j(() => import("../nodes/3.uRBKz8y-.js"), __vite__mapDeps([15,1,2,13,16,9,6,14,7,17,10]), import.meta.url),
    () => j(() => import("../nodes/4.Bjyrmf7d.js"), __vite__mapDeps([18,8,2,9,10,1,13,12,7,14,17,19]), import.meta.url)
  ];
  ut = [];
  lt = {
    "/": [
      3
    ],
    "/[book]/[chapter]": [
      4,
      [
        2
      ]
    ]
  };
  Qe = {
    handleError: ({ error: n }) => {
      console.error(n);
    },
    reroute: () => {
    },
    transport: {}
  };
  Xe = Object.fromEntries(Object.entries(Qe.transport).map(([n, e]) => [
    n,
    e.decode
  ]));
  ft = false;
  dt = (n, e) => Xe[n](e);
})();
export {
  __tla,
  dt as decode,
  Xe as decoders,
  lt as dictionary,
  ft as hash,
  Qe as hooks,
  ot as matchers,
  ct as nodes,
  it as root,
  ut as server_loads
};
