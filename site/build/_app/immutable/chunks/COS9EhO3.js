var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, _b, _e2, _t, _n2, _a2, _r, _o, _s, _i, _c, _e3, _d, _e4, _e5;
import { aP as he, aQ as wt, aj as U, q as P, a5 as T, aO as ee, aR as De, aS as vt } from "./1U9xaPEF.js";
import { b as yt, H as Se, S as Re, R as Ee } from "./BUApaBEI.js";
import { o as Ve } from "./0cIQm7Ik.js";
const V = [];
function xe(e, t = he) {
  let n = null;
  const a = /* @__PURE__ */ new Set();
  function r(s) {
    if (wt(e, s) && (e = s, n)) {
      const c = !V.length;
      for (const l of a) l[1](), V.push(l, e);
      if (c) {
        for (let l = 0; l < V.length; l += 2) V[l][0](V[l + 1]);
        V.length = 0;
      }
    }
  }
  function i(s) {
    r(s(e));
  }
  function o(s, c = he) {
    const l = [s, c];
    return a.add(l), a.size === 1 && (n = t(r, i) || he), s(e), () => {
      a.delete(l), a.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: i, subscribe: o };
}
new URL("sveltekit-internal://");
function bt(e, t) {
  return e === "/" || t === "ignore" ? e : t === "never" ? e.endsWith("/") ? e.slice(0, -1) : e : t === "always" && !e.endsWith("/") ? e + "/" : e;
}
function kt(e) {
  return e.split("%25").map(decodeURI).join("%25");
}
function St(e) {
  for (const t in e) e[t] = decodeURIComponent(e[t]);
  return e;
}
function pe({ href: e }) {
  return e.split("#")[0];
}
function Rt(e, t, n, a = false) {
  const r = new URL(e);
  Object.defineProperty(r, "searchParams", { value: new Proxy(r.searchParams, { get(o, s) {
    if (s === "get" || s === "getAll" || s === "has") return (l) => (n(l), o[s](l));
    t();
    const c = Reflect.get(o, s);
    return typeof c == "function" ? c.bind(o) : c;
  } }), enumerable: true, configurable: true });
  const i = ["href", "pathname", "search", "toString", "toJSON"];
  a && i.push("hash");
  for (const o of i) Object.defineProperty(r, o, { get() {
    return t(), e[o];
  }, enumerable: true, configurable: true });
  return r;
}
function Et(...e) {
  let t = 5381;
  for (const n of e) if (typeof n == "string") {
    let a = n.length;
    for (; a; ) t = t * 33 ^ n.charCodeAt(--a);
  } else if (ArrayBuffer.isView(n)) {
    const a = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
    let r = a.length;
    for (; r; ) t = t * 33 ^ a[--r];
  } else throw new TypeError("value must be a string or TypedArray");
  return (t >>> 0).toString(36);
}
const xt = window.fetch;
window.fetch = (e, t) => ((e instanceof Request ? e.method : (t == null ? void 0 : t.method) || "GET") !== "GET" && H.delete(Le(e)), xt(e, t));
const H = /* @__PURE__ */ new Map();
function Lt(e, t) {
  const n = Le(e, t), a = document.querySelector(n);
  if (a == null ? void 0 : a.textContent) {
    a.remove();
    let { body: r, ...i } = JSON.parse(a.textContent);
    const o = a.getAttribute("data-ttl");
    return o && H.set(n, { body: r, init: i, ttl: 1e3 * Number(o) }), a.getAttribute("data-b64") !== null && (r = yt(r)), Promise.resolve(new Response(r, i));
  }
  return window.fetch(e, t);
}
function At(e, t, n) {
  if (H.size > 0) {
    const a = Le(e, n), r = H.get(a);
    if (r) {
      if (performance.now() < r.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(n == null ? void 0 : n.cache)) return new Response(r.body, r.init);
      H.delete(a);
    }
  }
  return window.fetch(t, n);
}
function Le(e, t) {
  let a = `script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request ? e.url : e)}]`;
  if ((t == null ? void 0 : t.headers) || (t == null ? void 0 : t.body)) {
    const r = [];
    t.headers && r.push([...new Headers(t.headers)].join(",")), t.body && (typeof t.body == "string" || ArrayBuffer.isView(t.body)) && r.push(t.body), a += `[data-hash="${Et(...r)}"]`;
  }
  return a;
}
const Ut = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function Pt(e) {
  const t = [];
  return { pattern: e === "/" ? /^\/$/ : new RegExp(`^${It(e).map((a) => {
    const r = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);
    if (r) return t.push({ name: r[1], matcher: r[2], optional: false, rest: true, chained: true }), "(?:/([^]*))?";
    const i = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);
    if (i) return t.push({ name: i[1], matcher: i[2], optional: true, rest: false, chained: true }), "(?:/([^/]+))?";
    if (!a) return;
    const o = a.split(/\[(.+?)\](?!\])/);
    return "/" + o.map((c, l) => {
      if (l % 2) {
        if (c.startsWith("x+")) return ge(String.fromCharCode(parseInt(c.slice(2), 16)));
        if (c.startsWith("u+")) return ge(String.fromCharCode(...c.slice(2).split("-").map((w) => parseInt(w, 16))));
        const d = Ut.exec(c), [, h, f, u, p] = d;
        return t.push({ name: u, matcher: p, optional: !!h, rest: !!f, chained: f ? l === 1 && o[0] === "" : false }), f ? "([^]*?)" : h ? "([^/]*)?" : "([^/]+?)";
      }
      return ge(c);
    }).join("");
  }).join("")}/?$`), params: t };
}
function Tt(e) {
  return e !== "" && !/^\([^)]+\)$/.test(e);
}
function It(e) {
  return e.slice(1).split("/").filter(Tt);
}
function Ot(e, t, n) {
  const a = {}, r = e.slice(1), i = r.filter((s) => s !== void 0);
  let o = 0;
  for (let s = 0; s < t.length; s += 1) {
    const c = t[s];
    let l = r[s - o];
    if (c.chained && c.rest && o && (l = r.slice(s - o, s + 1).filter((d) => d).join("/"), o = 0), l === void 0) {
      c.rest && (a[c.name] = "");
      continue;
    }
    if (!c.matcher || n[c.matcher](l)) {
      a[c.name] = l;
      const d = t[s + 1], h = r[s + 1];
      d && !d.rest && d.optional && h && c.chained && (o = 0), !d && !h && Object.keys(a).length === i.length && (o = 0);
      continue;
    }
    if (c.optional && c.chained) {
      o++;
      continue;
    }
    return;
  }
  if (!o) return a;
}
function ge(e) {
  return e.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&");
}
function $t({ nodes: e, server_loads: t, dictionary: n, matchers: a }) {
  const r = new Set(t);
  return Object.entries(n).map(([s, [c, l, d]]) => {
    const { pattern: h, params: f } = Pt(s), u = { id: s, exec: (p) => {
      const w = h.exec(p);
      if (w) return Ot(w, f, a);
    }, errors: [1, ...d || []].map((p) => e[p]), layouts: [0, ...l || []].map(o), leaf: i(c) };
    return u.errors.length = u.layouts.length = Math.max(u.errors.length, u.layouts.length), u;
  });
  function i(s) {
    const c = s < 0;
    return c && (s = ~s), [c, e[s]];
  }
  function o(s) {
    return s === void 0 ? s : [r.has(s), e[s]];
  }
}
function Ye(e, t = JSON.parse) {
  try {
    return t(sessionStorage[e]);
  } catch {
  }
}
function Be(e, t, n = JSON.stringify) {
  const a = n(t);
  try {
    sessionStorage[e] = a;
  } catch {
  }
}
const L = ((_a = globalThis.__sveltekit_u40msy) == null ? void 0 : _a.base) ?? "", Ct = ((_b = globalThis.__sveltekit_u40msy) == null ? void 0 : _b.assets) ?? L ?? "", jt = "1767192069511", Je = "sveltekit:snapshot", Xe = "sveltekit:scroll", Qe = "sveltekit:states", Nt = "sveltekit:pageurl", K = "sveltekit:history", z = "sveltekit:navigation", j = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1, false: -1 }, Ae = location.origin;
function Ze(e) {
  if (e instanceof URL) return e;
  let t = document.baseURI;
  if (!t) {
    const n = document.getElementsByTagName("base");
    t = n.length ? n[0].href : document.URL;
  }
  return new URL(e, t);
}
function le() {
  return { x: pageXOffset, y: pageYOffset };
}
function B(e, t) {
  return e.getAttribute(`data-sveltekit-${t}`);
}
const Ke = { ...j, "": j.hover };
function et(e) {
  let t = e.assignedSlot ?? e.parentNode;
  return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host), t;
}
function tt(e, t) {
  for (; e && e !== t; ) {
    if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href")) return e;
    e = et(e);
  }
}
function we(e, t, n) {
  let a;
  try {
    if (a = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href, document.baseURI), n && a.hash.match(/^#[^/]/)) {
      const s = location.hash.split("#")[1] || "/";
      a.hash = `#${s}${a.hash}`;
    }
  } catch {
  }
  const r = e instanceof SVGAElement ? e.target.baseVal : e.target, i = !a || !!r || ue(a, t, n) || (e.getAttribute("rel") || "").split(/\s+/).includes("external"), o = (a == null ? void 0 : a.origin) === Ae && e.hasAttribute("download");
  return { url: a, external: i, target: r, download: o };
}
function te(e) {
  let t = null, n = null, a = null, r = null, i = null, o = null, s = e;
  for (; s && s !== document.documentElement; ) a === null && (a = B(s, "preload-code")), r === null && (r = B(s, "preload-data")), t === null && (t = B(s, "keepfocus")), n === null && (n = B(s, "noscroll")), i === null && (i = B(s, "reload")), o === null && (o = B(s, "replacestate")), s = et(s);
  function c(l) {
    switch (l) {
      case "":
      case "true":
        return true;
      case "off":
      case "false":
        return false;
      default:
        return;
    }
  }
  return { preload_code: Ke[a ?? "off"], preload_data: Ke[r ?? "off"], keepfocus: c(t), noscroll: c(n), reload: c(i), replace_state: c(o) };
}
function Fe(e) {
  const t = xe(e);
  let n = true;
  function a() {
    n = true, t.update((o) => o);
  }
  function r(o) {
    n = false, t.set(o);
  }
  function i(o) {
    let s;
    return t.subscribe((c) => {
      (s === void 0 || n && c !== s) && o(s = c);
    });
  }
  return { notify: a, set: r, subscribe: i };
}
const nt = { v: () => {
} };
function qt() {
  const { set: e, subscribe: t } = xe(false);
  let n;
  async function a() {
    clearTimeout(n);
    try {
      const r = await fetch(`${Ct}/_app/version.json`, { headers: { pragma: "no-cache", "cache-control": "no-cache" } });
      if (!r.ok) return false;
      const o = (await r.json()).version !== jt;
      return o && (e(true), nt.v(), clearTimeout(n)), o;
    } catch {
      return false;
    }
  }
  return { subscribe: t, check: a };
}
function ue(e, t, n) {
  return e.origin !== Ae || !e.pathname.startsWith(t) ? true : n ? e.pathname !== location.pathname : false;
}
function hn(e) {
}
const at = /* @__PURE__ */ new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...at];
const Dt = /* @__PURE__ */ new Set([...at]);
[...Dt];
function Vt(e) {
  return e.filter((t) => t != null);
}
function Ue(e) {
  return e instanceof Se || e instanceof Re ? e.status : 500;
}
function Bt(e) {
  return e instanceof Re ? e.text : "Internal Error";
}
let k, W, me;
const Kt = Ve.toString().includes("$$") || /function \w+\(\) \{\}/.test(Ve.toString());
Kt ? (k = { data: {}, form: null, error: null, params: {}, route: { id: null }, state: {}, status: -1, url: new URL("https://example.com") }, W = { current: null }, me = { current: false }) : (k = new (_c = class {
  constructor() {
    __privateAdd(this, _e2, U({}));
    __privateAdd(this, _t, U(null));
    __privateAdd(this, _n2, U(null));
    __privateAdd(this, _a2, U({}));
    __privateAdd(this, _r, U({ id: null }));
    __privateAdd(this, _o, U({}));
    __privateAdd(this, _s, U(-1));
    __privateAdd(this, _i, U(new URL("https://example.com")));
  }
  get data() {
    return P(__privateGet(this, _e2));
  }
  set data(t) {
    T(__privateGet(this, _e2), t);
  }
  get form() {
    return P(__privateGet(this, _t));
  }
  set form(t) {
    T(__privateGet(this, _t), t);
  }
  get error() {
    return P(__privateGet(this, _n2));
  }
  set error(t) {
    T(__privateGet(this, _n2), t);
  }
  get params() {
    return P(__privateGet(this, _a2));
  }
  set params(t) {
    T(__privateGet(this, _a2), t);
  }
  get route() {
    return P(__privateGet(this, _r));
  }
  set route(t) {
    T(__privateGet(this, _r), t);
  }
  get state() {
    return P(__privateGet(this, _o));
  }
  set state(t) {
    T(__privateGet(this, _o), t);
  }
  get status() {
    return P(__privateGet(this, _s));
  }
  set status(t) {
    T(__privateGet(this, _s), t);
  }
  get url() {
    return P(__privateGet(this, _i));
  }
  set url(t) {
    T(__privateGet(this, _i), t);
  }
}, _e2 = new WeakMap(), _t = new WeakMap(), _n2 = new WeakMap(), _a2 = new WeakMap(), _r = new WeakMap(), _o = new WeakMap(), _s = new WeakMap(), _i = new WeakMap(), _c)(), W = new (_d = class {
  constructor() {
    __privateAdd(this, _e3, U(null));
  }
  get current() {
    return P(__privateGet(this, _e3));
  }
  set current(t) {
    T(__privateGet(this, _e3), t);
  }
}, _e3 = new WeakMap(), _d)(), me = new (_e5 = class {
  constructor() {
    __privateAdd(this, _e4, U(false));
  }
  get current() {
    return P(__privateGet(this, _e4));
  }
  set current(t) {
    T(__privateGet(this, _e4), t);
  }
}, _e4 = new WeakMap(), _e5)(), nt.v = () => me.current = true);
function rt(e) {
  Object.assign(k, e);
}
const Ge = { spanContext() {
  return Ft;
}, setAttribute() {
  return this;
}, setAttributes() {
  return this;
}, addEvent() {
  return this;
}, setStatus() {
  return this;
}, updateName() {
  return this;
}, end() {
  return this;
}, isRecording() {
  return false;
}, recordException() {
  return this;
}, addLink() {
  return this;
}, addLinks() {
  return this;
} }, Ft = { traceId: "", spanId: "", traceFlags: 0 }, Gt = /* @__PURE__ */ new Set(["icon", "shortcut icon", "apple-touch-icon"]), q = Ye(Xe) ?? {}, Y = Ye(Je) ?? {}, C = { url: Fe({}), page: Fe({}), navigating: xe(null), updated: qt() };
function Pe(e) {
  q[e] = le();
}
function Ht(e, t) {
  let n = e + 1;
  for (; q[n]; ) delete q[n], n += 1;
  for (n = t + 1; Y[n]; ) delete Y[n], n += 1;
}
function J(e, t = false) {
  return t ? location.replace(e.href) : location.href = e.href, new Promise(() => {
  });
}
async function ot() {
  if ("serviceWorker" in navigator) {
    const e = await navigator.serviceWorker.getRegistration(L || "/");
    e && await e.update();
  }
}
function He() {
}
let Te, ve, ne, I, ye, v;
const ae = [], re = [];
let E = null;
function be() {
  var _a3;
  (_a3 = E == null ? void 0 : E.fork) == null ? void 0 : _a3.then((e) => e == null ? void 0 : e.discard()), E = null;
}
const Z = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Set(), Mt = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
let _ = { branch: [], error: null, url: null }, it = false, oe = false, Me = true, X = false, G = false, ct = false, Ie = false, Oe, y, x, N;
const se = /* @__PURE__ */ new Set(), ze = /* @__PURE__ */ new Map();
async function _n(e, t, n) {
  var _a3, _b2, _c2, _d2, _e6;
  ((_a3 = globalThis.__sveltekit_u40msy) == null ? void 0 : _a3.data) && globalThis.__sveltekit_u40msy.data, document.URL !== location.href && (location.href = location.href), v = e, await ((_c2 = (_b2 = e.hooks).init) == null ? void 0 : _c2.call(_b2)), Te = $t(e), I = document.documentElement, ye = t, ve = e.nodes[0], ne = e.nodes[1], ve(), ne(), y = (_d2 = history.state) == null ? void 0 : _d2[K], x = (_e6 = history.state) == null ? void 0 : _e6[z], y || (y = x = Date.now(), history.replaceState({ ...history.state, [K]: y, [z]: x }, ""));
  const a = q[y];
  function r() {
    a && (history.scrollRestoration = "manual", scrollTo(a.x, a.y));
  }
  n ? (r(), await on(ye, n)) : (await F({ type: "enter", url: Ze(v.hash ? ln(new URL(location.href)) : location.href), replace_state: true }), r()), rn();
}
function zt() {
  ae.length = 0, Ie = false;
}
function lt(e) {
  re.some((t) => t == null ? void 0 : t.snapshot) && (Y[e] = re.map((t) => {
    var _a3;
    return (_a3 = t == null ? void 0 : t.snapshot) == null ? void 0 : _a3.capture();
  }));
}
function ut(e) {
  var _a3;
  (_a3 = Y[e]) == null ? void 0 : _a3.forEach((t, n) => {
    var _a4, _b2;
    (_b2 = (_a4 = re[n]) == null ? void 0 : _a4.snapshot) == null ? void 0 : _b2.restore(t);
  });
}
function We() {
  Pe(y), Be(Xe, q), lt(x), Be(Je, Y);
}
async function Wt(e, t, n, a) {
  let r;
  t.invalidateAll && be(), await F({ type: "goto", url: Ze(e), keepfocus: t.keepFocus, noscroll: t.noScroll, replace_state: t.replaceState, state: t.state, redirect_count: n, nav_token: a, accept: () => {
    t.invalidateAll && (Ie = true, r = [...ze.keys()]), t.invalidate && t.invalidate.forEach(an);
  } }), t.invalidateAll && ee().then(ee).then(() => {
    ze.forEach(({ resource: i }, o) => {
      var _a3;
      (r == null ? void 0 : r.includes(o)) && ((_a3 = i.refresh) == null ? void 0 : _a3.call(i));
    });
  });
}
async function Yt(e) {
  if (e.id !== (E == null ? void 0 : E.id)) {
    be();
    const t = {};
    if (se.add(t), E = { id: e.id, token: t, promise: ht({ ...e, preload: t }).then((n) => (se.delete(t), n.type === "loaded" && n.state.error && be(), n)), fork: null }, De) {
      const n = E;
      n.fork = n.promise.then((a) => {
        if (n === E && a.type === "loaded") try {
          return De(() => {
            Oe.$set(a.props), rt(a.props.page);
          });
        } catch {
        }
        return null;
      });
    }
  }
  return E.promise;
}
async function _e(e) {
  var _a3;
  const t = (_a3 = await fe(e, false)) == null ? void 0 : _a3.route;
  t && await Promise.all([...t.layouts, t.leaf].map((n) => n == null ? void 0 : n[1]()));
}
async function ft(e, t, n) {
  var _a3;
  _ = e.state;
  const a = document.querySelector("style[data-sveltekit]");
  if (a && a.remove(), Object.assign(k, e.props.page), Oe = new v.root({ target: t, props: { ...e.props, stores: C, components: re }, hydrate: n, sync: false }), await Promise.resolve(), ut(x), n) {
    const r = { from: null, to: { params: _.params, route: { id: ((_a3 = _.route) == null ? void 0 : _a3.id) ?? null }, url: new URL(location.href) }, willUnload: false, type: "enter", complete: Promise.resolve() };
    M.forEach((i) => i(r));
  }
  oe = true;
}
function ie({ url: e, params: t, branch: n, status: a, error: r, route: i, form: o }) {
  let s = "never";
  if (L && (e.pathname === L || e.pathname === L + "/")) s = "always";
  else for (const u of n) (u == null ? void 0 : u.slash) !== void 0 && (s = u.slash);
  e.pathname = bt(e.pathname, s), e.search = e.search;
  const c = { type: "loaded", state: { url: e, params: t, branch: n, error: r, route: i }, props: { constructors: Vt(n).map((u) => u.node.component), page: qe(k) } };
  o !== void 0 && (c.props.form = o);
  let l = {}, d = !k, h = 0;
  for (let u = 0; u < Math.max(n.length, _.branch.length); u += 1) {
    const p = n[u], w = _.branch[u];
    (p == null ? void 0 : p.data) !== (w == null ? void 0 : w.data) && (d = true), p && (l = { ...l, ...p.data }, d && (c.props[`data_${h}`] = l), h += 1);
  }
  return (!_.url || e.href !== _.url.href || _.error !== r || o !== void 0 && o !== k.form || d) && (c.props.page = { error: r, params: t, route: { id: (i == null ? void 0 : i.id) ?? null }, state: {}, status: a, url: new URL(e), form: o ?? null, data: d ? l : k.data }), c;
}
async function $e({ loader: e, parent: t, url: n, params: a, route: r, server_data_node: i }) {
  var _a3, _b2, _c2;
  let o = null, s = true;
  const c = { dependencies: /* @__PURE__ */ new Set(), params: /* @__PURE__ */ new Set(), parent: false, route: false, url: false, search_params: /* @__PURE__ */ new Set() }, l = await e();
  if ((_a3 = l.universal) == null ? void 0 : _a3.load) {
    let d = function(...f) {
      for (const u of f) {
        const { href: p } = new URL(u, n);
        c.dependencies.add(p);
      }
    };
    const h = { tracing: { enabled: false, root: Ge, current: Ge }, route: new Proxy(r, { get: (f, u) => (s && (c.route = true), f[u]) }), params: new Proxy(a, { get: (f, u) => (s && c.params.add(u), f[u]) }), data: (i == null ? void 0 : i.data) ?? null, url: Rt(n, () => {
      s && (c.url = true);
    }, (f) => {
      s && c.search_params.add(f);
    }, v.hash), async fetch(f, u) {
      f instanceof Request && (u = { body: f.method === "GET" || f.method === "HEAD" ? void 0 : await f.blob(), cache: f.cache, credentials: f.credentials, headers: [...f.headers].length > 0 ? f == null ? void 0 : f.headers : void 0, integrity: f.integrity, keepalive: f.keepalive, method: f.method, mode: f.mode, redirect: f.redirect, referrer: f.referrer, referrerPolicy: f.referrerPolicy, signal: f.signal, ...u });
      const { resolved: p, promise: w } = dt(f, u, n);
      return s && d(p.href), w;
    }, setHeaders: () => {
    }, depends: d, parent() {
      return s && (c.parent = true), t();
    }, untrack(f) {
      s = false;
      try {
        return f();
      } finally {
        s = true;
      }
    } };
    o = await l.universal.load.call(null, h) ?? null;
  }
  return { node: l, loader: e, server: i, universal: ((_b2 = l.universal) == null ? void 0 : _b2.load) ? { type: "data", data: o, uses: c } : null, data: o ?? (i == null ? void 0 : i.data) ?? null, slash: ((_c2 = l.universal) == null ? void 0 : _c2.trailingSlash) ?? (i == null ? void 0 : i.slash) };
}
function dt(e, t, n) {
  let a = e instanceof Request ? e.url : e;
  const r = new URL(a, n);
  r.origin === n.origin && (a = r.href.slice(n.origin.length));
  const i = oe ? At(a, r.href, t) : Lt(a, t);
  return { resolved: r, promise: i };
}
function Jt(e, t, n, a, r, i) {
  if (Ie) return true;
  if (!r) return false;
  if (r.parent && e || r.route && t || r.url && n) return true;
  for (const o of r.search_params) if (a.has(o)) return true;
  for (const o of r.params) if (i[o] !== _.params[o]) return true;
  for (const o of r.dependencies) if (ae.some((s) => s(new URL(o)))) return true;
  return false;
}
function Ce(e, t) {
  return (e == null ? void 0 : e.type) === "data" ? e : (e == null ? void 0 : e.type) === "skip" ? t ?? null : null;
}
function Xt(e, t) {
  if (!e) return new Set(t.searchParams.keys());
  const n = /* @__PURE__ */ new Set([...e.searchParams.keys(), ...t.searchParams.keys()]);
  for (const a of n) {
    const r = e.searchParams.getAll(a), i = t.searchParams.getAll(a);
    r.every((o) => i.includes(o)) && i.every((o) => r.includes(o)) && n.delete(a);
  }
  return n;
}
function Qt({ error: e, url: t, route: n, params: a }) {
  return { type: "loaded", state: { error: e, url: t, route: n, params: a, branch: [] }, props: { page: qe(k), constructors: [] } };
}
async function ht({ id: e, invalidating: t, url: n, params: a, route: r, preload: i }) {
  if ((E == null ? void 0 : E.id) === e) return se.delete(E.token), E.promise;
  const { errors: o, layouts: s, leaf: c } = r, l = [...s, c];
  o.forEach((m) => m == null ? void 0 : m().catch(() => {
  })), l.forEach((m) => m == null ? void 0 : m[1]().catch(() => {
  }));
  const d = _.url ? e !== ce(_.url) : false, h = _.route ? r.id !== _.route.id : false, f = Xt(_.url, n);
  let u = false;
  const p = l.map(async (m, g) => {
    var _a3;
    if (!m) return;
    const S = _.branch[g];
    return m[1] === (S == null ? void 0 : S.loader) && !Jt(u, h, d, f, (_a3 = S.universal) == null ? void 0 : _a3.uses, a) ? S : (u = true, $e({ loader: m[1], url: n, params: a, route: r, parent: async () => {
      var _a4;
      const O = {};
      for (let A = 0; A < g; A += 1) Object.assign(O, (_a4 = await p[A]) == null ? void 0 : _a4.data);
      return O;
    }, server_data_node: Ce(m[0] ? { type: "skip" } : null, m[0] ? S == null ? void 0 : S.server : void 0) }));
  });
  for (const m of p) m.catch(() => {
  });
  const w = [];
  for (let m = 0; m < l.length; m += 1) if (l[m]) try {
    w.push(await p[m]);
  } catch (g) {
    if (g instanceof Ee) return { type: "redirect", location: g.location };
    if (se.has(i)) return Qt({ error: await Q(g, { params: a, url: n, route: { id: r.id } }), url: n, params: a, route: r });
    let S = Ue(g), R;
    if (g instanceof Se) R = g.body;
    else {
      if (await C.updated.check()) return await ot(), await J(n);
      R = await Q(g, { params: a, url: n, route: { id: r.id } });
    }
    const O = await Zt(m, w, o);
    return O ? ie({ url: n, params: a, branch: w.slice(0, O.idx).concat(O.node), status: S, error: R, route: r }) : await gt(n, { id: r.id }, R, S);
  }
  else w.push(void 0);
  return ie({ url: n, params: a, branch: w, status: 200, error: null, route: r, form: t ? void 0 : null });
}
async function Zt(e, t, n) {
  for (; e--; ) if (n[e]) {
    let a = e;
    for (; !t[a]; ) a -= 1;
    try {
      return { idx: a + 1, node: { node: await n[e](), loader: n[e], data: {}, server: null, universal: null } };
    } catch {
      continue;
    }
  }
}
async function je({ status: e, error: t, url: n, route: a }) {
  const r = {};
  let i = null;
  try {
    const o = await $e({ loader: ve, url: n, params: r, route: a, parent: () => Promise.resolve({}), server_data_node: Ce(i) }), s = { node: await ne(), loader: ne, universal: null, server: null, data: null };
    return ie({ url: n, params: r, branch: [o, s], status: e, error: t, route: null });
  } catch (o) {
    if (o instanceof Ee) return Wt(new URL(o.location, location.href), {}, 0);
    throw o;
  }
}
async function en(e) {
  const t = e.href;
  if (Z.has(t)) return Z.get(t);
  let n;
  try {
    const a = (async () => {
      let r = await v.hooks.reroute({ url: new URL(e), fetch: async (i, o) => dt(i, o, e).promise }) ?? e;
      if (typeof r == "string") {
        const i = new URL(e);
        v.hash ? i.hash = r : i.pathname = r, r = i;
      }
      return r;
    })();
    Z.set(t, a), n = await a;
  } catch {
    Z.delete(t);
    return;
  }
  return n;
}
async function fe(e, t) {
  if (e && !ue(e, L, v.hash)) {
    const n = await en(e);
    if (!n) return;
    const a = tn(n);
    for (const r of Te) {
      const i = r.exec(a);
      if (i) return { id: ce(e), invalidating: t, route: r, params: St(i), url: e };
    }
  }
}
function tn(e) {
  return kt(v.hash ? e.hash.replace(/^#/, "").replace(/[?#].+/, "") : e.pathname.slice(L.length)) || "/";
}
function ce(e) {
  return (v.hash ? e.hash.replace(/^#/, "") : e.pathname) + e.search;
}
function pt({ url: e, type: t, intent: n, delta: a, event: r }) {
  let i = false;
  const o = Ne(_, n, e, t);
  a !== void 0 && (o.navigation.delta = a), r !== void 0 && (o.navigation.event = r);
  const s = { ...o.navigation, cancel: () => {
    i = true, o.reject(new Error("navigation cancelled"));
  } };
  return X || st.forEach((c) => c(s)), i ? null : o;
}
async function F({ type: e, url: t, popped: n, keepfocus: a, noscroll: r, replace_state: i, state: o = {}, redirect_count: s = 0, nav_token: c = {}, accept: l = He, block: d = He, event: h }) {
  var _a3;
  const f = N;
  N = c;
  const u = await fe(t, false), p = e === "enter" ? Ne(_, u, t, e) : pt({ url: t, type: e, delta: n == null ? void 0 : n.delta, intent: u, event: h });
  if (!p) {
    d(), N === c && (N = f);
    return;
  }
  const w = y, m = x;
  l(), X = true, oe && p.navigation.type !== "enter" && C.navigating.set(W.current = p.navigation);
  let g = u && await ht(u);
  if (!g) {
    if (ue(t, L, v.hash)) return await J(t, i);
    g = await gt(t, { id: null }, await Q(new Re(404, "Not Found", `Not found: ${t.pathname}`), { url: t, params: {}, route: { id: null } }), 404, i);
  }
  if (t = (u == null ? void 0 : u.url) || t, N !== c) return p.reject(new Error("navigation aborted")), false;
  if (g.type === "redirect") {
    if (s < 20) {
      await F({ type: e, url: new URL(g.location, t), popped: n, keepfocus: a, noscroll: r, replace_state: i, state: o, redirect_count: s + 1, nav_token: c }), p.fulfil(void 0);
      return;
    }
    g = await je({ status: 500, error: await Q(new Error("Redirect loop"), { url: t, params: {}, route: { id: null } }), url: t, route: { id: null } });
  } else g.props.page.status >= 400 && await C.updated.check() && (await ot(), await J(t, i));
  if (zt(), Pe(w), lt(m), g.props.page.url.pathname !== t.pathname && (t.pathname = g.props.page.url.pathname), o = n ? n.state : o, !n) {
    const b = i ? 0 : 1, D = { [K]: y += b, [z]: x += b, [Qe]: o };
    (i ? history.replaceState : history.pushState).call(history, D, "", t), i || Ht(y, x);
  }
  const S = u && (E == null ? void 0 : E.id) === u.id ? E.fork : null;
  E = null, g.props.page.state = o;
  let R;
  if (oe) {
    const b = (await Promise.all(Array.from(Mt, ($) => $(p.navigation)))).filter(($) => typeof $ == "function");
    if (b.length > 0) {
      let $ = function() {
        b.forEach((de) => {
          M.delete(de);
        });
      };
      b.push($), b.forEach((de) => {
        M.add(de);
      });
    }
    _ = g.state, g.props.page && (g.props.page.url = t);
    const D = S && await S;
    D ? R = D.commit() : (Oe.$set(g.props), rt(g.props.page), R = (_a3 = vt) == null ? void 0 : _a3()), ct = true;
  } else await ft(g, ye, false);
  const { activeElement: O } = document;
  await R, await ee(), await ee();
  let A = n ? n.scroll : r ? le() : null;
  if (Me) {
    const b = t.hash && document.getElementById(mt(t));
    if (A) scrollTo(A.x, A.y);
    else if (b) {
      b.scrollIntoView();
      const { top: D, left: $ } = b.getBoundingClientRect();
      A = { x: pageXOffset + $, y: pageYOffset + D };
    } else scrollTo(0, 0);
  }
  const _t2 = document.activeElement !== O && document.activeElement !== document.body;
  !a && !_t2 && cn(t, A), Me = true, g.props.page && Object.assign(k, g.props.page), X = false, e === "popstate" && ut(x), p.fulfil(void 0), M.forEach((b) => b(p.navigation)), C.navigating.set(W.current = null);
}
async function gt(e, t, n, a, r) {
  return e.origin === Ae && e.pathname === location.pathname && !it ? await je({ status: a, error: n, url: e, route: t }) : await J(e, r);
}
function nn() {
  let e, t, n;
  I.addEventListener("mousemove", (s) => {
    const c = s.target;
    clearTimeout(e), e = setTimeout(() => {
      i(c, j.hover);
    }, 20);
  });
  function a(s) {
    s.defaultPrevented || i(s.composedPath()[0], j.tap);
  }
  I.addEventListener("mousedown", a), I.addEventListener("touchstart", a, { passive: true });
  const r = new IntersectionObserver((s) => {
    for (const c of s) c.isIntersecting && (_e(new URL(c.target.href)), r.unobserve(c.target));
  }, { threshold: 0 });
  async function i(s, c) {
    const l = tt(s, I), d = l === t && c >= n;
    if (!l || d) return;
    const { url: h, external: f, download: u } = we(l, L, v.hash);
    if (f || u) return;
    const p = te(l), w = h && ce(_.url) === ce(h);
    if (!(p.reload || w)) if (c <= p.preload_data) {
      t = l, n = j.tap;
      const m = await fe(h, false);
      if (!m) return;
      Yt(m);
    } else c <= p.preload_code && (t = l, n = c, _e(h));
  }
  function o() {
    r.disconnect();
    for (const s of I.querySelectorAll("a")) {
      const { url: c, external: l, download: d } = we(s, L, v.hash);
      if (l || d) continue;
      const h = te(s);
      h.reload || (h.preload_code === j.viewport && r.observe(s), h.preload_code === j.eager && _e(c));
    }
  }
  M.add(o), o();
}
function Q(e, t) {
  if (e instanceof Se) return e.body;
  const n = Ue(e), a = Bt(e);
  return v.hooks.handleError({ error: e, event: t, status: n, message: a }) ?? { message: a };
}
function an(e) {
  if (typeof e == "function") ae.push(e);
  else {
    const { href: t } = new URL(e, location.href);
    ae.push((n) => n.href === t);
  }
}
function rn() {
  var _a3;
  history.scrollRestoration = "manual", addEventListener("beforeunload", (t) => {
    let n = false;
    if (We(), !X) {
      const a = Ne(_, void 0, null, "leave"), r = { ...a.navigation, cancel: () => {
        n = true, a.reject(new Error("navigation cancelled"));
      } };
      st.forEach((i) => i(r));
    }
    n ? (t.preventDefault(), t.returnValue = "") : history.scrollRestoration = "auto";
  }), addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && We();
  }), ((_a3 = navigator.connection) == null ? void 0 : _a3.saveData) || nn(), I.addEventListener("click", async (t) => {
    if (t.button || t.which !== 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.defaultPrevented) return;
    const n = tt(t.composedPath()[0], I);
    if (!n) return;
    const { url: a, external: r, target: i, download: o } = we(n, L, v.hash);
    if (!a) return;
    if (i === "_parent" || i === "_top") {
      if (window.parent !== window) return;
    } else if (i && i !== "_self") return;
    const s = te(n);
    if (!(n instanceof SVGAElement) && a.protocol !== location.protocol && !(a.protocol === "https:" || a.protocol === "http:") || o) return;
    const [l, d] = (v.hash ? a.hash.replace(/^#/, "") : a.href).split("#"), h = l === pe(location);
    if (r || s.reload && (!h || !d)) {
      pt({ url: a, type: "link", event: t }) ? X = true : t.preventDefault();
      return;
    }
    if (d !== void 0 && h) {
      const [, f] = _.url.href.split("#");
      if (f === d) {
        if (t.preventDefault(), d === "" || d === "top" && n.ownerDocument.getElementById("top") === null) scrollTo({ top: 0 });
        else {
          const u = n.ownerDocument.getElementById(decodeURIComponent(d));
          u && (u.scrollIntoView(), u.focus());
        }
        return;
      }
      if (G = true, Pe(y), e(a), !s.replace_state) return;
      G = false;
    }
    t.preventDefault(), await new Promise((f) => {
      requestAnimationFrame(() => {
        setTimeout(f, 0);
      }), setTimeout(f, 100);
    }), await F({ type: "link", url: a, keepfocus: s.keepfocus, noscroll: s.noscroll, replace_state: s.replace_state ?? a.href === location.href, event: t });
  }), I.addEventListener("submit", (t) => {
    if (t.defaultPrevented) return;
    const n = HTMLFormElement.prototype.cloneNode.call(t.target), a = t.submitter;
    if (((a == null ? void 0 : a.formTarget) || n.target) === "_blank" || ((a == null ? void 0 : a.formMethod) || n.method) !== "get") return;
    const o = new URL((a == null ? void 0 : a.hasAttribute("formaction")) && (a == null ? void 0 : a.formAction) || n.action);
    if (ue(o, L, false)) return;
    const s = t.target, c = te(s);
    if (c.reload) return;
    t.preventDefault(), t.stopPropagation();
    const l = new FormData(s, a);
    o.search = new URLSearchParams(l).toString(), F({ type: "form", url: o, keepfocus: c.keepfocus, noscroll: c.noscroll, replace_state: c.replace_state ?? o.href === location.href, event: t });
  }), addEventListener("popstate", async (t) => {
    var _a4;
    if (!ke) {
      if ((_a4 = t.state) == null ? void 0 : _a4[K]) {
        const n = t.state[K];
        if (N = {}, n === y) return;
        const a = q[n], r = t.state[Qe] ?? {}, i = new URL(t.state[Nt] ?? location.href), o = t.state[z], s = _.url ? pe(location) === pe(_.url) : false;
        if (o === x && (ct || s)) {
          r !== k.state && (k.state = r), e(i), q[y] = le(), a && scrollTo(a.x, a.y), y = n;
          return;
        }
        const l = n - y;
        await F({ type: "popstate", url: i, popped: { state: r, scroll: a, delta: l }, accept: () => {
          y = n, x = o;
        }, block: () => {
          history.go(-l);
        }, nav_token: N, event: t });
      } else if (!G) {
        const n = new URL(location.href);
        e(n), v.hash && location.reload();
      }
    }
  }), addEventListener("hashchange", () => {
    G && (G = false, history.replaceState({ ...history.state, [K]: ++y, [z]: x }, "", location.href));
  });
  for (const t of document.querySelectorAll("link")) Gt.has(t.rel) && (t.href = t.href);
  addEventListener("pageshow", (t) => {
    t.persisted && C.navigating.set(W.current = null);
  });
  function e(t) {
    _.url = k.url = t, C.page.set(qe(k)), C.page.notify();
  }
}
async function on(e, { status: t = 200, error: n, node_ids: a, params: r, route: i, server_route: o, data: s, form: c }) {
  it = true;
  const l = new URL(location.href);
  let d;
  ({ params: r = {}, route: i = { id: null } } = await fe(l, false) || {}), d = Te.find(({ id: u }) => u === i.id);
  let h, f = true;
  try {
    const u = a.map(async (w, m) => {
      const g = s[m];
      return (g == null ? void 0 : g.uses) && (g.uses = sn(g.uses)), $e({ loader: v.nodes[w], url: l, params: r, route: i, parent: async () => {
        const S = {};
        for (let R = 0; R < m; R += 1) Object.assign(S, (await u[R]).data);
        return S;
      }, server_data_node: Ce(g) });
    }), p = await Promise.all(u);
    if (d) {
      const w = d.layouts;
      for (let m = 0; m < w.length; m++) w[m] || p.splice(m, 0, void 0);
    }
    h = ie({ url: l, params: r, branch: p, status: t, error: n, form: c, route: d ?? null });
  } catch (u) {
    if (u instanceof Ee) {
      await J(new URL(u.location, location.href));
      return;
    }
    h = await je({ status: Ue(u), error: await Q(u, { url: l, params: r, route: i }), url: l, route: i }), e.textContent = "", f = false;
  }
  h.props.page && (h.props.page.state = {}), await ft(h, e, f);
}
function sn(e) {
  return { dependencies: new Set((e == null ? void 0 : e.dependencies) ?? []), params: new Set((e == null ? void 0 : e.params) ?? []), parent: !!(e == null ? void 0 : e.parent), route: !!(e == null ? void 0 : e.route), url: !!(e == null ? void 0 : e.url), search_params: new Set((e == null ? void 0 : e.search_params) ?? []) };
}
let ke = false;
function cn(e, t = null) {
  const n = document.querySelector("[autofocus]");
  if (n) n.focus();
  else {
    const a = mt(e);
    if (a && document.getElementById(a)) {
      const { x: i, y: o } = t ?? le();
      setTimeout(() => {
        const s = history.state;
        ke = true, location.replace(`#${a}`), v.hash && location.replace(e.hash), history.replaceState(s, "", e.hash), scrollTo(i, o), ke = false;
      });
    } else {
      const i = document.body, o = i.getAttribute("tabindex");
      i.tabIndex = -1, i.focus({ preventScroll: true, focusVisible: false }), o !== null ? i.setAttribute("tabindex", o) : i.removeAttribute("tabindex");
    }
    const r = getSelection();
    if (r && r.type !== "None") {
      const i = [];
      for (let o = 0; o < r.rangeCount; o += 1) i.push(r.getRangeAt(o));
      setTimeout(() => {
        if (r.rangeCount === i.length) {
          for (let o = 0; o < r.rangeCount; o += 1) {
            const s = i[o], c = r.getRangeAt(o);
            if (s.commonAncestorContainer !== c.commonAncestorContainer || s.startContainer !== c.startContainer || s.endContainer !== c.endContainer || s.startOffset !== c.startOffset || s.endOffset !== c.endOffset) return;
          }
          r.removeAllRanges();
        }
      });
    }
  }
}
function Ne(e, t, n, a) {
  var _a3, _b2;
  let r, i;
  const o = new Promise((c, l) => {
    r = c, i = l;
  });
  return o.catch(() => {
  }), { navigation: { from: { params: e.params, route: { id: ((_a3 = e.route) == null ? void 0 : _a3.id) ?? null }, url: e.url }, to: n && { params: (t == null ? void 0 : t.params) ?? null, route: { id: ((_b2 = t == null ? void 0 : t.route) == null ? void 0 : _b2.id) ?? null }, url: n }, willUnload: !t, type: a, complete: o }, fulfil: r, reject: i };
}
function qe(e) {
  return { data: e.data, error: e.error, form: e.form, params: e.params, route: e.route, state: e.state, status: e.status, url: e.url };
}
function ln(e) {
  const t = new URL(e);
  return t.hash = decodeURIComponent(e.hash), t;
}
function mt(e) {
  let t;
  if (v.hash) {
    const [, , n] = e.hash.split("#", 3);
    t = n ?? "";
  } else t = e.hash.slice(1);
  return decodeURIComponent(t);
}
export {
  _n as a,
  hn as l,
  k as p,
  C as s
};
