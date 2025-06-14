var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _a, _b, _e2, _t2, _n, _r, _a2, _o, _s, _i, _c, _e3, _d, _e4, _e5;
import { i as T, g as x, s as P, at as pt } from "./C4Jx_sal.js";
import { w as Ae, o as Ne } from "./D70lfaQ3.js";
import "./DCU4qwos.js";
new URL("sveltekit-internal://");
function gt(e, t) {
  return e === "/" || t === "ignore" ? e : t === "never" ? e.endsWith("/") ? e.slice(0, -1) : e : t === "always" && !e.endsWith("/") ? e + "/" : e;
}
function mt(e) {
  return e.split("%25").map(decodeURI).join("%25");
}
function _t(e) {
  for (const t in e) e[t] = decodeURIComponent(e[t]);
  return e;
}
function ge({ href: e }) {
  return e.split("#")[0];
}
function wt(e, t, n, r = false) {
  const a = new URL(e);
  Object.defineProperty(a, "searchParams", { value: new Proxy(a.searchParams, { get(i, o) {
    if (o === "get" || o === "getAll" || o === "has") return (f) => (n(f), i[o](f));
    t();
    const c = Reflect.get(i, o);
    return typeof c == "function" ? c.bind(i) : c;
  } }), enumerable: true, configurable: true });
  const s = ["href", "pathname", "search", "toString", "toJSON"];
  r && s.push("hash");
  for (const i of s) Object.defineProperty(a, i, { get() {
    return t(), e[i];
  }, enumerable: true, configurable: true });
  return a;
}
function yt(...e) {
  let t = 5381;
  for (const n of e) if (typeof n == "string") {
    let r = n.length;
    for (; r; ) t = t * 33 ^ n.charCodeAt(--r);
  } else if (ArrayBuffer.isView(n)) {
    const r = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
    let a = r.length;
    for (; a; ) t = t * 33 ^ r[--a];
  } else throw new TypeError("value must be a string or TypedArray");
  return (t >>> 0).toString(36);
}
function vt(e) {
  const t = atob(e), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n.buffer;
}
const bt = window.fetch;
window.fetch = (e, t) => ((e instanceof Request ? e.method : (t == null ? void 0 : t.method) || "GET") !== "GET" && G.delete(ke(e)), bt(e, t));
const G = /* @__PURE__ */ new Map();
function At(e, t) {
  const n = ke(e, t), r = document.querySelector(n);
  if (r == null ? void 0 : r.textContent) {
    let { body: a, ...s } = JSON.parse(r.textContent);
    const i = r.getAttribute("data-ttl");
    return i && G.set(n, { body: a, init: s, ttl: 1e3 * Number(i) }), r.getAttribute("data-b64") !== null && (a = vt(a)), Promise.resolve(new Response(a, s));
  }
  return window.fetch(e, t);
}
function kt(e, t, n) {
  if (G.size > 0) {
    const r = ke(e, n), a = G.get(r);
    if (a) {
      if (performance.now() < a.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(n == null ? void 0 : n.cache)) return new Response(a.body, a.init);
      G.delete(r);
    }
  }
  return window.fetch(t, n);
}
function ke(e, t) {
  let r = `script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request ? e.url : e)}]`;
  if ((t == null ? void 0 : t.headers) || (t == null ? void 0 : t.body)) {
    const a = [];
    t.headers && a.push([...new Headers(t.headers)].join(",")), t.body && (typeof t.body == "string" || ArrayBuffer.isView(t.body)) && a.push(t.body), r += `[data-hash="${yt(...a)}"]`;
  }
  return r;
}
const St = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function Et(e) {
  const t = [];
  return { pattern: e === "/" ? /^\/$/ : new RegExp(`^${It(e).map((r) => {
    const a = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);
    if (a) return t.push({ name: a[1], matcher: a[2], optional: false, rest: true, chained: true }), "(?:/(.*))?";
    const s = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);
    if (s) return t.push({ name: s[1], matcher: s[2], optional: true, rest: false, chained: true }), "(?:/([^/]+))?";
    if (!r) return;
    const i = r.split(/\[(.+?)\](?!\])/);
    return "/" + i.map((c, f) => {
      if (f % 2) {
        if (c.startsWith("x+")) return me(String.fromCharCode(parseInt(c.slice(2), 16)));
        if (c.startsWith("u+")) return me(String.fromCharCode(...c.slice(2).split("-").map((_) => parseInt(_, 16))));
        const u = St.exec(c), [, h, d, l, p] = u;
        return t.push({ name: l, matcher: p, optional: !!h, rest: !!d, chained: d ? f === 1 && i[0] === "" : false }), d ? "(.*?)" : h ? "([^/]*)?" : "([^/]+?)";
      }
      return me(c);
    }).join("");
  }).join("")}/?$`), params: t };
}
function Rt(e) {
  return !/^\([^)]+\)$/.test(e);
}
function It(e) {
  return e.slice(1).split("/").filter(Rt);
}
function Ut(e, t, n) {
  const r = {}, a = e.slice(1), s = a.filter((o) => o !== void 0);
  let i = 0;
  for (let o = 0; o < t.length; o += 1) {
    const c = t[o];
    let f = a[o - i];
    if (c.chained && c.rest && i && (f = a.slice(o - i, o + 1).filter((u) => u).join("/"), i = 0), f === void 0) {
      c.rest && (r[c.name] = "");
      continue;
    }
    if (!c.matcher || n[c.matcher](f)) {
      r[c.name] = f;
      const u = t[o + 1], h = a[o + 1];
      u && !u.rest && u.optional && h && c.chained && (i = 0), !u && !h && Object.keys(r).length === s.length && (i = 0);
      continue;
    }
    if (c.optional && c.chained) {
      i++;
      continue;
    }
    return;
  }
  if (!i) return r;
}
function me(e) {
  return e.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&");
}
function Lt({ nodes: e, server_loads: t, dictionary: n, matchers: r }) {
  const a = new Set(t);
  return Object.entries(n).map(([o, [c, f, u]]) => {
    const { pattern: h, params: d } = Et(o), l = { id: o, exec: (p) => {
      const _ = h.exec(p);
      if (_) return Ut(_, d, r);
    }, errors: [1, ...u || []].map((p) => e[p]), layouts: [0, ...f || []].map(i), leaf: s(c) };
    return l.errors.length = l.layouts.length = Math.max(l.errors.length, l.layouts.length), l;
  });
  function s(o) {
    const c = o < 0;
    return c && (o = ~o), [c, e[o]];
  }
  function i(o) {
    return o === void 0 ? o : [a.has(o), e[o]];
  }
}
function He(e, t = JSON.parse) {
  try {
    return t(sessionStorage[e]);
  } catch {
  }
}
function je(e, t, n = JSON.stringify) {
  const r = n(t);
  try {
    sessionStorage[e] = r;
  } catch {
  }
}
const U = ((_a = globalThis.__sveltekit_1cso5x9) == null ? void 0 : _a.base) ?? "", Tt = ((_b = globalThis.__sveltekit_1cso5x9) == null ? void 0 : _b.assets) ?? U, xt = "1749919680048", Ke = "sveltekit:snapshot", We = "sveltekit:scroll", Ye = "sveltekit:states", Pt = "sveltekit:pageurl", V = "sveltekit:history", W = "sveltekit:navigation", j = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1, false: -1 }, X = location.origin;
function Je(e) {
  if (e instanceof URL) return e;
  let t = document.baseURI;
  if (!t) {
    const n = document.getElementsByTagName("base");
    t = n.length ? n[0].href : document.URL;
  }
  return new URL(e, t);
}
function Se() {
  return { x: pageXOffset, y: pageYOffset };
}
function F(e, t) {
  return e.getAttribute(`data-sveltekit-${t}`);
}
const $e = { ...j, "": j.hover };
function ze(e) {
  let t = e.assignedSlot ?? e.parentNode;
  return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host), t;
}
function Xe(e, t) {
  for (; e && e !== t; ) {
    if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href")) return e;
    e = ze(e);
  }
}
function ye(e, t, n) {
  let r;
  try {
    if (r = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href, document.baseURI), n && r.hash.match(/^#[^/]/)) {
      const o = location.hash.split("#")[1] || "/";
      r.hash = `#${o}${r.hash}`;
    }
  } catch {
  }
  const a = e instanceof SVGAElement ? e.target.baseVal : e.target, s = !r || !!a || le(r, t, n) || (e.getAttribute("rel") || "").split(/\s+/).includes("external"), i = (r == null ? void 0 : r.origin) === X && e.hasAttribute("download");
  return { url: r, external: s, target: a, download: i };
}
function te(e) {
  let t = null, n = null, r = null, a = null, s = null, i = null, o = e;
  for (; o && o !== document.documentElement; ) r === null && (r = F(o, "preload-code")), a === null && (a = F(o, "preload-data")), t === null && (t = F(o, "keepfocus")), n === null && (n = F(o, "noscroll")), s === null && (s = F(o, "reload")), i === null && (i = F(o, "replacestate")), o = ze(o);
  function c(f) {
    switch (f) {
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
  return { preload_code: $e[r ?? "off"], preload_data: $e[a ?? "off"], keepfocus: c(t), noscroll: c(n), reload: c(s), replace_state: c(i) };
}
function De(e) {
  const t = Ae(e);
  let n = true;
  function r() {
    n = true, t.update((i) => i);
  }
  function a(i) {
    n = false, t.set(i);
  }
  function s(i) {
    let o;
    return t.subscribe((c) => {
      (o === void 0 || n && c !== o) && i(o = c);
    });
  }
  return { notify: r, set: a, subscribe: s };
}
const Ze = { v: () => {
} };
function Ct() {
  const { set: e, subscribe: t } = Ae(false);
  let n;
  async function r() {
    clearTimeout(n);
    try {
      const a = await fetch(`${Tt}/_app/version.json`, { headers: { pragma: "no-cache", "cache-control": "no-cache" } });
      if (!a.ok) return false;
      const i = (await a.json()).version !== xt;
      return i && (e(true), Ze.v(), clearTimeout(n)), i;
    } catch {
      return false;
    }
  }
  return { subscribe: t, check: r };
}
function le(e, t, n) {
  return e.origin !== X || !e.pathname.startsWith(t) ? true : n ? !(e.pathname === t + "/" || e.pathname === t + "/index.html" || e.protocol === "file:" && e.pathname.replace(/\/[^/]+\.html?$/, "") === t) : false;
}
function yn(e) {
}
function Fe(e) {
  const t = Nt(e), n = new ArrayBuffer(t.length), r = new DataView(n);
  for (let a = 0; a < n.byteLength; a++) r.setUint8(a, t.charCodeAt(a));
  return n;
}
const Ot = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function Nt(e) {
  e.length % 4 === 0 && (e = e.replace(/==?$/, ""));
  let t = "", n = 0, r = 0;
  for (let a = 0; a < e.length; a++) n <<= 6, n |= Ot.indexOf(e[a]), r += 6, r === 24 && (t += String.fromCharCode((n & 16711680) >> 16), t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255), n = r = 0);
  return r === 12 ? (n >>= 4, t += String.fromCharCode(n)) : r === 18 && (n >>= 2, t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255)), t;
}
const jt = -1, $t = -2, Dt = -3, Ft = -4, Vt = -5, Bt = -6;
function Mt(e, t) {
  if (typeof e == "number") return a(e, true);
  if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
  const n = e, r = Array(n.length);
  function a(s, i = false) {
    if (s === jt) return;
    if (s === Dt) return NaN;
    if (s === Ft) return 1 / 0;
    if (s === Vt) return -1 / 0;
    if (s === Bt) return -0;
    if (i) throw new Error("Invalid input");
    if (s in r) return r[s];
    const o = n[s];
    if (!o || typeof o != "object") r[s] = o;
    else if (Array.isArray(o)) if (typeof o[0] == "string") {
      const c = o[0], f = t == null ? void 0 : t[c];
      if (f) return r[s] = f(a(o[1]));
      switch (c) {
        case "Date":
          r[s] = new Date(o[1]);
          break;
        case "Set":
          const u = /* @__PURE__ */ new Set();
          r[s] = u;
          for (let l = 1; l < o.length; l += 1) u.add(a(o[l]));
          break;
        case "Map":
          const h = /* @__PURE__ */ new Map();
          r[s] = h;
          for (let l = 1; l < o.length; l += 2) h.set(a(o[l]), a(o[l + 1]));
          break;
        case "RegExp":
          r[s] = new RegExp(o[1], o[2]);
          break;
        case "Object":
          r[s] = Object(o[1]);
          break;
        case "BigInt":
          r[s] = BigInt(o[1]);
          break;
        case "null":
          const d = /* @__PURE__ */ Object.create(null);
          r[s] = d;
          for (let l = 1; l < o.length; l += 2) d[o[l]] = a(o[l + 1]);
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array": {
          const l = globalThis[c], p = o[1], _ = Fe(p), m = new l(_);
          r[s] = m;
          break;
        }
        case "ArrayBuffer": {
          const l = o[1], p = Fe(l);
          r[s] = p;
          break;
        }
        default:
          throw new Error(`Unknown type ${c}`);
      }
    } else {
      const c = new Array(o.length);
      r[s] = c;
      for (let f = 0; f < o.length; f += 1) {
        const u = o[f];
        u !== $t && (c[f] = a(u));
      }
    }
    else {
      const c = {};
      r[s] = c;
      for (const f in o) {
        const u = o[f];
        c[f] = a(u);
      }
    }
    return r[s];
  }
  return a(0);
}
const Qe = /* @__PURE__ */ new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...Qe];
const qt = /* @__PURE__ */ new Set([...Qe]);
[...qt];
function Gt(e) {
  return e.filter((t) => t != null);
}
class fe {
  constructor(t, n) {
    this.status = t, typeof n == "string" ? this.body = { message: n } : n ? this.body = n : this.body = { message: `Error: ${t}` };
  }
  toString() {
    return JSON.stringify(this.body);
  }
}
class Ee {
  constructor(t, n) {
    this.status = t, this.location = n;
  }
}
class Re extends Error {
  constructor(t, n, r) {
    super(r), this.status = t, this.text = n;
  }
}
const Ht = "x-sveltekit-invalidated", Kt = "x-sveltekit-trailing-slash";
function ne(e) {
  return e instanceof fe || e instanceof Re ? e.status : 500;
}
function Wt(e) {
  return e instanceof Re ? e.text : "Internal Error";
}
let S, Y, _e;
const Yt = Ne.toString().includes("$$") || /function \w+\(\) \{\}/.test(Ne.toString());
Yt ? (S = { data: {}, form: null, error: null, params: {}, route: { id: null }, state: {}, status: -1, url: new URL("https://example.com") }, Y = { current: null }, _e = { current: false }) : (S = new (_c = class {
  constructor() {
    __privateAdd(this, _e2, T({}));
    __privateAdd(this, _t2, T(null));
    __privateAdd(this, _n, T(null));
    __privateAdd(this, _r, T({}));
    __privateAdd(this, _a2, T({ id: null }));
    __privateAdd(this, _o, T({}));
    __privateAdd(this, _s, T(-1));
    __privateAdd(this, _i, T(new URL("https://example.com")));
  }
  get data() {
    return x(__privateGet(this, _e2));
  }
  set data(t) {
    P(__privateGet(this, _e2), t);
  }
  get form() {
    return x(__privateGet(this, _t2));
  }
  set form(t) {
    P(__privateGet(this, _t2), t);
  }
  get error() {
    return x(__privateGet(this, _n));
  }
  set error(t) {
    P(__privateGet(this, _n), t);
  }
  get params() {
    return x(__privateGet(this, _r));
  }
  set params(t) {
    P(__privateGet(this, _r), t);
  }
  get route() {
    return x(__privateGet(this, _a2));
  }
  set route(t) {
    P(__privateGet(this, _a2), t);
  }
  get state() {
    return x(__privateGet(this, _o));
  }
  set state(t) {
    P(__privateGet(this, _o), t);
  }
  get status() {
    return x(__privateGet(this, _s));
  }
  set status(t) {
    P(__privateGet(this, _s), t);
  }
  get url() {
    return x(__privateGet(this, _i));
  }
  set url(t) {
    P(__privateGet(this, _i), t);
  }
}, _e2 = new WeakMap(), _t2 = new WeakMap(), _n = new WeakMap(), _r = new WeakMap(), _a2 = new WeakMap(), _o = new WeakMap(), _s = new WeakMap(), _i = new WeakMap(), _c)(), Y = new (_d = class {
  constructor() {
    __privateAdd(this, _e3, T(null));
  }
  get current() {
    return x(__privateGet(this, _e3));
  }
  set current(t) {
    P(__privateGet(this, _e3), t);
  }
}, _e3 = new WeakMap(), _d)(), _e = new (_e5 = class {
  constructor() {
    __privateAdd(this, _e4, T(false));
  }
  get current() {
    return x(__privateGet(this, _e4));
  }
  set current(t) {
    P(__privateGet(this, _e4), t);
  }
}, _e4 = new WeakMap(), _e5)(), Ze.v = () => _e.current = true);
function Jt(e) {
  Object.assign(S, e);
}
const zt = "/__data.json", Xt = ".html__data.json";
function Zt(e) {
  return e.endsWith(".html") ? e.replace(/\.html$/, Xt) : e.replace(/\/$/, "") + zt;
}
const Qt = /* @__PURE__ */ new Set(["icon", "shortcut icon", "apple-touch-icon"]), D = He(We) ?? {}, J = He(Ke) ?? {}, N = { url: De({}), page: De({}), navigating: Ae(null), updated: Ct() };
function Ie(e) {
  D[e] = Se();
}
function en(e, t) {
  let n = e + 1;
  for (; D[n]; ) delete D[n], n += 1;
  for (n = t + 1; J[n]; ) delete J[n], n += 1;
}
function M(e) {
  return location.href = e.href, new Promise(() => {
  });
}
async function et() {
  if ("serviceWorker" in navigator) {
    const e = await navigator.serviceWorker.getRegistration(U || "/");
    e && await e.update();
  }
}
function Ve() {
}
let Ue, ve, re, C, be, v;
const ae = [], oe = [];
let O = null;
const Q = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Set(), tn = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Set();
let y = { branch: [], error: null, url: null }, Le = false, se = false, Be = true, z = false, q = false, nt = false, Te = false, rt, A, I, $;
const K = /* @__PURE__ */ new Set();
async function kn(e, t, n) {
  var _a3, _b2, _c2, _d2;
  document.URL !== location.href && (location.href = location.href), v = e, await ((_b2 = (_a3 = e.hooks).init) == null ? void 0 : _b2.call(_a3)), Ue = Lt(e), C = document.documentElement, be = t, ve = e.nodes[0], re = e.nodes[1], ve(), re(), A = (_c2 = history.state) == null ? void 0 : _c2[V], I = (_d2 = history.state) == null ? void 0 : _d2[W], A || (A = I = Date.now(), history.replaceState({ ...history.state, [V]: A, [W]: I }, ""));
  const r = D[A];
  r && (history.scrollRestoration = "manual", scrollTo(r.x, r.y)), n ? await hn(be, n) : await fn(v.hash ? gn(new URL(location.href)) : location.href, { replaceState: true }), dn();
}
function nn() {
  ae.length = 0, Te = false;
}
function at(e) {
  oe.some((t) => t == null ? void 0 : t.snapshot) && (J[e] = oe.map((t) => {
    var _a3;
    return (_a3 = t == null ? void 0 : t.snapshot) == null ? void 0 : _a3.capture();
  }));
}
function ot(e) {
  var _a3;
  (_a3 = J[e]) == null ? void 0 : _a3.forEach((t, n) => {
    var _a4, _b2;
    (_b2 = (_a4 = oe[n]) == null ? void 0 : _a4.snapshot) == null ? void 0 : _b2.restore(t);
  });
}
function Me() {
  Ie(A), je(We, D), at(I), je(Ke, J);
}
async function xe(e, t, n, r) {
  return ee({ type: "goto", url: Je(e), keepfocus: t.keepFocus, noscroll: t.noScroll, replace_state: t.replaceState, state: t.state, redirect_count: n, nav_token: r, accept: () => {
    t.invalidateAll && (Te = true), t.invalidate && t.invalidate.forEach(un);
  } });
}
async function rn(e) {
  if (e.id !== (O == null ? void 0 : O.id)) {
    const t = {};
    K.add(t), O = { id: e.id, token: t, promise: ct({ ...e, preload: t }).then((n) => (K.delete(t), n.type === "loaded" && n.state.error && (O = null), n)) };
  }
  return O.promise;
}
async function we(e) {
  var _a3;
  const t = (_a3 = await de(e, false)) == null ? void 0 : _a3.route;
  t && await Promise.all([...t.layouts, t.leaf].map((n) => n == null ? void 0 : n[1]()));
}
function st(e, t, n) {
  var _a3;
  y = e.state;
  const r = document.querySelector("style[data-sveltekit]");
  r && r.remove(), Object.assign(S, e.props.page), rt = new v.root({ target: t, props: { ...e.props, stores: N, components: oe }, hydrate: n, sync: false }), ot(I);
  const a = { from: null, to: { params: y.params, route: { id: ((_a3 = y.route) == null ? void 0 : _a3.id) ?? null }, url: new URL(location.href) }, willUnload: false, type: "enter", complete: Promise.resolve() };
  H.forEach((s) => s(a)), se = true;
}
function ie({ url: e, params: t, branch: n, status: r, error: a, route: s, form: i }) {
  let o = "never";
  if (U && (e.pathname === U || e.pathname === U + "/")) o = "always";
  else for (const l of n) (l == null ? void 0 : l.slash) !== void 0 && (o = l.slash);
  e.pathname = gt(e.pathname, o), e.search = e.search;
  const c = { type: "loaded", state: { url: e, params: t, branch: n, error: a, route: s }, props: { constructors: Gt(n).map((l) => l.node.component), page: Oe(S) } };
  i !== void 0 && (c.props.form = i);
  let f = {}, u = !S, h = 0;
  for (let l = 0; l < Math.max(n.length, y.branch.length); l += 1) {
    const p = n[l], _ = y.branch[l];
    (p == null ? void 0 : p.data) !== (_ == null ? void 0 : _.data) && (u = true), p && (f = { ...f, ...p.data }, u && (c.props[`data_${h}`] = f), h += 1);
  }
  return (!y.url || e.href !== y.url.href || y.error !== a || i !== void 0 && i !== S.form || u) && (c.props.page = { error: a, params: t, route: { id: (s == null ? void 0 : s.id) ?? null }, state: {}, status: r, url: new URL(e), form: i ?? null, data: u ? f : S.data }), c;
}
async function Pe({ loader: e, parent: t, url: n, params: r, route: a, server_data_node: s }) {
  var _a3, _b2, _c2;
  let i = null, o = true;
  const c = { dependencies: /* @__PURE__ */ new Set(), params: /* @__PURE__ */ new Set(), parent: false, route: false, url: false, search_params: /* @__PURE__ */ new Set() }, f = await e();
  if ((_a3 = f.universal) == null ? void 0 : _a3.load) {
    let u = function(...d) {
      for (const l of d) {
        const { href: p } = new URL(l, n);
        c.dependencies.add(p);
      }
    };
    const h = { route: new Proxy(a, { get: (d, l) => (o && (c.route = true), d[l]) }), params: new Proxy(r, { get: (d, l) => (o && c.params.add(l), d[l]) }), data: (s == null ? void 0 : s.data) ?? null, url: wt(n, () => {
      o && (c.url = true);
    }, (d) => {
      o && c.search_params.add(d);
    }, v.hash), async fetch(d, l) {
      d instanceof Request && (l = { body: d.method === "GET" || d.method === "HEAD" ? void 0 : await d.blob(), cache: d.cache, credentials: d.credentials, headers: [...d.headers].length ? d.headers : void 0, integrity: d.integrity, keepalive: d.keepalive, method: d.method, mode: d.mode, redirect: d.redirect, referrer: d.referrer, referrerPolicy: d.referrerPolicy, signal: d.signal, ...l });
      const { resolved: p, promise: _ } = it(d, l, n);
      return o && u(p.href), _;
    }, setHeaders: () => {
    }, depends: u, parent() {
      return o && (c.parent = true), t();
    }, untrack(d) {
      o = false;
      try {
        return d();
      } finally {
        o = true;
      }
    } };
    i = await f.universal.load.call(null, h) ?? null;
  }
  return { node: f, loader: e, server: s, universal: ((_b2 = f.universal) == null ? void 0 : _b2.load) ? { type: "data", data: i, uses: c } : null, data: i ?? (s == null ? void 0 : s.data) ?? null, slash: ((_c2 = f.universal) == null ? void 0 : _c2.trailingSlash) ?? (s == null ? void 0 : s.slash) };
}
function it(e, t, n) {
  let r = e instanceof Request ? e.url : e;
  const a = new URL(r, n);
  a.origin === n.origin && (r = a.href.slice(n.origin.length));
  const s = se ? kt(r, a.href, t) : At(r, t);
  return { resolved: a, promise: s };
}
function qe(e, t, n, r, a, s) {
  if (Te) return true;
  if (!a) return false;
  if (a.parent && e || a.route && t || a.url && n) return true;
  for (const i of a.search_params) if (r.has(i)) return true;
  for (const i of a.params) if (s[i] !== y.params[i]) return true;
  for (const i of a.dependencies) if (ae.some((o) => o(new URL(i)))) return true;
  return false;
}
function Ce(e, t) {
  return (e == null ? void 0 : e.type) === "data" ? e : (e == null ? void 0 : e.type) === "skip" ? t ?? null : null;
}
function an(e, t) {
  if (!e) return new Set(t.searchParams.keys());
  const n = /* @__PURE__ */ new Set([...e.searchParams.keys(), ...t.searchParams.keys()]);
  for (const r of n) {
    const a = e.searchParams.getAll(r), s = t.searchParams.getAll(r);
    a.every((i) => s.includes(i)) && s.every((i) => a.includes(i)) && n.delete(r);
  }
  return n;
}
function Ge({ error: e, url: t, route: n, params: r }) {
  return { type: "loaded", state: { error: e, url: t, route: n, params: r, branch: [] }, props: { page: Oe(S), constructors: [] } };
}
async function ct({ id: e, invalidating: t, url: n, params: r, route: a, preload: s }) {
  if ((O == null ? void 0 : O.id) === e) return K.delete(O.token), O.promise;
  const { errors: i, layouts: o, leaf: c } = a, f = [...o, c];
  i.forEach((g) => g == null ? void 0 : g().catch(() => {
  })), f.forEach((g) => g == null ? void 0 : g[1]().catch(() => {
  }));
  let u = null;
  const h = y.url ? e !== ce(y.url) : false, d = y.route ? a.id !== y.route.id : false, l = an(y.url, n);
  let p = false;
  const _ = f.map((g, w) => {
    var _a3;
    const b = y.branch[w], k = !!(g == null ? void 0 : g[0]) && ((b == null ? void 0 : b.loader) !== g[1] || qe(p, d, h, l, (_a3 = b.server) == null ? void 0 : _a3.uses, r));
    return k && (p = true), k;
  });
  if (_.some(Boolean)) {
    try {
      u = await ut(n, _);
    } catch (g) {
      const w = await B(g, { url: n, params: r, route: { id: e } });
      return K.has(s) ? Ge({ error: w, url: n, params: r, route: a }) : ue({ status: ne(g), error: w, url: n, route: a });
    }
    if (u.type === "redirect") return u;
  }
  const m = u == null ? void 0 : u.nodes;
  let R = false;
  const E = f.map(async (g, w) => {
    var _a3;
    if (!g) return;
    const b = y.branch[w], k = m == null ? void 0 : m[w];
    if ((!k || k.type === "skip") && g[1] === (b == null ? void 0 : b.loader) && !qe(R, d, h, l, (_a3 = b.universal) == null ? void 0 : _a3.uses, r)) return b;
    if (R = true, (k == null ? void 0 : k.type) === "error") throw k;
    return Pe({ loader: g[1], url: n, params: r, route: a, parent: async () => {
      var _a4;
      const he = {};
      for (let pe = 0; pe < w; pe += 1) Object.assign(he, (_a4 = await E[pe]) == null ? void 0 : _a4.data);
      return he;
    }, server_data_node: Ce(k === void 0 && g[0] ? { type: "skip" } : k ?? null, g[0] ? b == null ? void 0 : b.server : void 0) });
  });
  for (const g of E) g.catch(() => {
  });
  const L = [];
  for (let g = 0; g < f.length; g += 1) if (f[g]) try {
    L.push(await E[g]);
  } catch (w) {
    if (w instanceof Ee) return { type: "redirect", location: w.location };
    if (K.has(s)) return Ge({ error: await B(w, { params: r, url: n, route: { id: a.id } }), url: n, params: r, route: a });
    let b = ne(w), k;
    if (m == null ? void 0 : m.includes(w)) b = w.status ?? b, k = w.error;
    else if (w instanceof fe) k = w.body;
    else {
      if (await N.updated.check()) return await et(), await M(n);
      k = await B(w, { params: r, url: n, route: { id: a.id } });
    }
    const Z = await on(g, L, i);
    return Z ? ie({ url: n, params: r, branch: L.slice(0, Z.idx).concat(Z.node), status: b, error: k, route: a }) : await ft(n, { id: a.id }, k, b);
  }
  else L.push(void 0);
  return ie({ url: n, params: r, branch: L, status: 200, error: null, route: a, form: t ? void 0 : null });
}
async function on(e, t, n) {
  for (; e--; ) if (n[e]) {
    let r = e;
    for (; !t[r]; ) r -= 1;
    try {
      return { idx: r + 1, node: { node: await n[e](), loader: n[e], data: {}, server: null, universal: null } };
    } catch {
      continue;
    }
  }
}
async function ue({ status: e, error: t, url: n, route: r }) {
  const a = {};
  let s = null;
  if (v.server_loads[0] === 0) try {
    const o = await ut(n, [true]);
    if (o.type !== "data" || o.nodes[0] && o.nodes[0].type !== "data") throw 0;
    s = o.nodes[0] ?? null;
  } catch {
    (n.origin !== X || n.pathname !== location.pathname || Le) && await M(n);
  }
  try {
    const o = await Pe({ loader: ve, url: n, params: a, route: r, parent: () => Promise.resolve({}), server_data_node: Ce(s) }), c = { node: await re(), loader: re, universal: null, server: null, data: null };
    return ie({ url: n, params: a, branch: [o, c], status: e, error: t, route: null });
  } catch (o) {
    if (o instanceof Ee) return xe(new URL(o.location, location.href), {}, 0);
    throw o;
  }
}
async function sn(e) {
  const t = e.href;
  if (Q.has(t)) return Q.get(t);
  let n;
  try {
    const r = (async () => {
      let a = await v.hooks.reroute({ url: new URL(e), fetch: async (s, i) => it(s, i, e).promise }) ?? e;
      if (typeof a == "string") {
        const s = new URL(e);
        v.hash ? s.hash = a : s.pathname = a, a = s;
      }
      return a;
    })();
    Q.set(t, r), n = await r;
  } catch {
    Q.delete(t);
    return;
  }
  return n;
}
async function de(e, t) {
  if (e && !le(e, U, v.hash)) {
    const n = await sn(e);
    if (!n) return;
    const r = cn(n);
    for (const a of Ue) {
      const s = a.exec(r);
      if (s) return { id: ce(e), invalidating: t, route: a, params: _t(s), url: e };
    }
  }
}
function cn(e) {
  return mt(v.hash ? e.hash.replace(/^#/, "").replace(/[?#].+/, "") : e.pathname.slice(U.length)) || "/";
}
function ce(e) {
  return (v.hash ? e.hash.replace(/^#/, "") : e.pathname) + e.search;
}
function lt({ url: e, type: t, intent: n, delta: r }) {
  let a = false;
  const s = ht(y, n, e, t);
  r !== void 0 && (s.navigation.delta = r);
  const i = { ...s.navigation, cancel: () => {
    a = true, s.reject(new Error("navigation cancelled"));
  } };
  return z || tt.forEach((o) => o(i)), a ? null : s;
}
async function ee({ type: e, url: t, popped: n, keepfocus: r, noscroll: a, replace_state: s, state: i = {}, redirect_count: o = 0, nav_token: c = {}, accept: f = Ve, block: u = Ve }) {
  const h = $;
  $ = c;
  const d = await de(t, false), l = lt({ url: t, type: e, delta: n == null ? void 0 : n.delta, intent: d });
  if (!l) {
    u(), $ === c && ($ = h);
    return;
  }
  const p = A, _ = I;
  f(), z = true, se && N.navigating.set(Y.current = l.navigation);
  let m = d && await ct(d);
  if (!m) {
    if (le(t, U, v.hash)) return await M(t);
    m = await ft(t, { id: null }, await B(new Re(404, "Not Found", `Not found: ${t.pathname}`), { url: t, params: {}, route: { id: null } }), 404);
  }
  if (t = (d == null ? void 0 : d.url) || t, $ !== c) return l.reject(new Error("navigation aborted")), false;
  if (m.type === "redirect") if (o >= 20) m = await ue({ status: 500, error: await B(new Error("Redirect loop"), { url: t, params: {}, route: { id: null } }), url: t, route: { id: null } });
  else return await xe(new URL(m.location, t).href, {}, o + 1, c), false;
  else m.props.page.status >= 400 && await N.updated.check() && (await et(), await M(t));
  if (nn(), Ie(p), at(_), m.props.page.url.pathname !== t.pathname && (t.pathname = m.props.page.url.pathname), i = n ? n.state : i, !n) {
    const g = s ? 0 : 1, w = { [V]: A += g, [W]: I += g, [Ye]: i };
    (s ? history.replaceState : history.pushState).call(history, w, "", t), s || en(A, I);
  }
  if (O = null, m.props.page.state = i, se) {
    y = m.state, m.props.page && (m.props.page.url = t);
    const g = (await Promise.all(Array.from(tn, (w) => w(l.navigation)))).filter((w) => typeof w == "function");
    if (g.length > 0) {
      let w = function() {
        g.forEach((b) => {
          H.delete(b);
        });
      };
      g.push(w), g.forEach((b) => {
        H.add(b);
      });
    }
    rt.$set(m.props), Jt(m.props.page), nt = true;
  } else st(m, be, false);
  const { activeElement: R } = document;
  await pt();
  const E = n ? n.scroll : a ? Se() : null;
  if (Be) {
    const g = t.hash && document.getElementById(decodeURIComponent(v.hash ? t.hash.split("#")[2] ?? "" : t.hash.slice(1)));
    E ? scrollTo(E.x, E.y) : g ? g.scrollIntoView() : scrollTo(0, 0);
  }
  const L = document.activeElement !== R && document.activeElement !== document.body;
  !r && !L && pn(), Be = true, m.props.page && Object.assign(S, m.props.page), z = false, e === "popstate" && ot(I), l.fulfil(void 0), H.forEach((g) => g(l.navigation)), N.navigating.set(Y.current = null);
}
async function ft(e, t, n, r) {
  return e.origin === X && e.pathname === location.pathname && !Le ? await ue({ status: r, error: n, url: e, route: t }) : await M(e);
}
function ln() {
  let e, t, n;
  C.addEventListener("mousemove", (o) => {
    const c = o.target;
    clearTimeout(e), e = setTimeout(() => {
      s(c, j.hover);
    }, 20);
  });
  function r(o) {
    o.defaultPrevented || s(o.composedPath()[0], j.tap);
  }
  C.addEventListener("mousedown", r), C.addEventListener("touchstart", r, { passive: true });
  const a = new IntersectionObserver((o) => {
    for (const c of o) c.isIntersecting && (we(new URL(c.target.href)), a.unobserve(c.target));
  }, { threshold: 0 });
  async function s(o, c) {
    const f = Xe(o, C), u = f === t && c >= n;
    if (!f || u) return;
    const { url: h, external: d, download: l } = ye(f, U, v.hash);
    if (d || l) return;
    const p = te(f), _ = h && ce(y.url) === ce(h);
    if (!(p.reload || _)) if (c <= p.preload_data) {
      t = f, n = j.tap;
      const m = await de(h, false);
      if (!m) return;
      rn(m);
    } else c <= p.preload_code && (t = f, n = c, we(h));
  }
  function i() {
    a.disconnect();
    for (const o of C.querySelectorAll("a")) {
      const { url: c, external: f, download: u } = ye(o, U, v.hash);
      if (f || u) continue;
      const h = te(o);
      h.reload || (h.preload_code === j.viewport && a.observe(o), h.preload_code === j.eager && we(c));
    }
  }
  H.add(i), i();
}
function B(e, t) {
  if (e instanceof fe) return e.body;
  const n = ne(e), r = Wt(e);
  return v.hooks.handleError({ error: e, event: t, status: n, message: r }) ?? { message: r };
}
function fn(e, t = {}) {
  return e = new URL(Je(e)), e.origin !== X ? Promise.reject(new Error("goto: invalid URL")) : xe(e, t, 0);
}
function un(e) {
  if (typeof e == "function") ae.push(e);
  else {
    const { href: t } = new URL(e, location.href);
    ae.push((n) => n.href === t);
  }
}
function dn() {
  var _a3;
  history.scrollRestoration = "manual", addEventListener("beforeunload", (t) => {
    let n = false;
    if (Me(), !z) {
      const r = ht(y, void 0, null, "leave"), a = { ...r.navigation, cancel: () => {
        n = true, r.reject(new Error("navigation cancelled"));
      } };
      tt.forEach((s) => s(a));
    }
    n ? (t.preventDefault(), t.returnValue = "") : history.scrollRestoration = "auto";
  }), addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && Me();
  }), ((_a3 = navigator.connection) == null ? void 0 : _a3.saveData) || ln(), C.addEventListener("click", async (t) => {
    if (t.button || t.which !== 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.defaultPrevented) return;
    const n = Xe(t.composedPath()[0], C);
    if (!n) return;
    const { url: r, external: a, target: s, download: i } = ye(n, U, v.hash);
    if (!r) return;
    if (s === "_parent" || s === "_top") {
      if (window.parent !== window) return;
    } else if (s && s !== "_self") return;
    const o = te(n);
    if (!(n instanceof SVGAElement) && r.protocol !== location.protocol && !(r.protocol === "https:" || r.protocol === "http:") || i) return;
    const [f, u] = (v.hash ? r.hash.replace(/^#/, "") : r.href).split("#"), h = f === ge(location);
    if (a || o.reload && (!h || !u)) {
      lt({ url: r, type: "link" }) ? z = true : t.preventDefault();
      return;
    }
    if (u !== void 0 && h) {
      const [, d] = y.url.href.split("#");
      if (d === u) {
        if (t.preventDefault(), u === "" || u === "top" && n.ownerDocument.getElementById("top") === null) window.scrollTo({ top: 0 });
        else {
          const l = n.ownerDocument.getElementById(decodeURIComponent(u));
          l && (l.scrollIntoView(), l.focus());
        }
        return;
      }
      if (q = true, Ie(A), e(r), !o.replace_state) return;
      q = false;
    }
    t.preventDefault(), await new Promise((d) => {
      requestAnimationFrame(() => {
        setTimeout(d, 0);
      }), setTimeout(d, 100);
    }), await ee({ type: "link", url: r, keepfocus: o.keepfocus, noscroll: o.noscroll, replace_state: o.replace_state ?? r.href === location.href });
  }), C.addEventListener("submit", (t) => {
    if (t.defaultPrevented) return;
    const n = HTMLFormElement.prototype.cloneNode.call(t.target), r = t.submitter;
    if (((r == null ? void 0 : r.formTarget) || n.target) === "_blank" || ((r == null ? void 0 : r.formMethod) || n.method) !== "get") return;
    const i = new URL((r == null ? void 0 : r.hasAttribute("formaction")) && (r == null ? void 0 : r.formAction) || n.action);
    if (le(i, U, false)) return;
    const o = t.target, c = te(o);
    if (c.reload) return;
    t.preventDefault(), t.stopPropagation();
    const f = new FormData(o), u = r == null ? void 0 : r.getAttribute("name");
    u && f.append(u, (r == null ? void 0 : r.getAttribute("value")) ?? ""), i.search = new URLSearchParams(f).toString(), ee({ type: "form", url: i, keepfocus: c.keepfocus, noscroll: c.noscroll, replace_state: c.replace_state ?? i.href === location.href });
  }), addEventListener("popstate", async (t) => {
    var _a4;
    if ((_a4 = t.state) == null ? void 0 : _a4[V]) {
      const n = t.state[V];
      if ($ = {}, n === A) return;
      const r = D[n], a = t.state[Ye] ?? {}, s = new URL(t.state[Pt] ?? location.href), i = t.state[W], o = y.url ? ge(location) === ge(y.url) : false;
      if (i === I && (nt || o)) {
        a !== S.state && (S.state = a), e(s), D[A] = Se(), r && scrollTo(r.x, r.y), A = n;
        return;
      }
      const f = n - A;
      await ee({ type: "popstate", url: s, popped: { state: a, scroll: r, delta: f }, accept: () => {
        A = n, I = i;
      }, block: () => {
        history.go(-f);
      }, nav_token: $ });
    } else if (!q) {
      const n = new URL(location.href);
      e(n), v.hash && location.reload();
    }
  }), addEventListener("hashchange", () => {
    q && (q = false, history.replaceState({ ...history.state, [V]: ++A, [W]: I }, "", location.href));
  });
  for (const t of document.querySelectorAll("link")) Qt.has(t.rel) && (t.href = t.href);
  addEventListener("pageshow", (t) => {
    t.persisted && N.navigating.set(Y.current = null);
  });
  function e(t) {
    y.url = S.url = t, N.page.set(Oe(S)), N.page.notify();
  }
}
async function hn(e, { status: t = 200, error: n, node_ids: r, params: a, route: s, server_route: i, data: o, form: c }) {
  Le = true;
  const f = new URL(location.href);
  let u;
  ({ params: a = {}, route: s = { id: null } } = await de(f, false) || {}), u = Ue.find(({ id: l }) => l === s.id);
  let h, d = true;
  try {
    const l = r.map(async (_, m) => {
      const R = o[m];
      return (R == null ? void 0 : R.uses) && (R.uses = dt(R.uses)), Pe({ loader: v.nodes[_], url: f, params: a, route: s, parent: async () => {
        const E = {};
        for (let L = 0; L < m; L += 1) Object.assign(E, (await l[L]).data);
        return E;
      }, server_data_node: Ce(R) });
    }), p = await Promise.all(l);
    if (u) {
      const _ = u.layouts;
      for (let m = 0; m < _.length; m++) _[m] || p.splice(m, 0, void 0);
    }
    h = ie({ url: f, params: a, branch: p, status: t, error: n, form: c, route: u ?? null });
  } catch (l) {
    if (l instanceof Ee) {
      await M(new URL(l.location, location.href));
      return;
    }
    h = await ue({ status: ne(l), error: await B(l, { url: f, params: a, route: s }), url: f, route: s }), e.textContent = "", d = false;
  }
  h.props.page && (h.props.page.state = {}), st(h, e, d);
}
async function ut(e, t) {
  var _a3;
  const n = new URL(e);
  n.pathname = Zt(e.pathname), e.pathname.endsWith("/") && n.searchParams.append(Kt, "1"), n.searchParams.append(Ht, t.map((s) => s ? "1" : "0").join(""));
  const r = window.fetch, a = await r(n.href, {});
  if (!a.ok) {
    let s;
    throw ((_a3 = a.headers.get("content-type")) == null ? void 0 : _a3.includes("application/json")) ? s = await a.json() : a.status === 404 ? s = "Not Found" : a.status === 500 && (s = "Internal Error"), new fe(a.status, s);
  }
  return new Promise(async (s) => {
    var _a4;
    const i = /* @__PURE__ */ new Map(), o = a.body.getReader(), c = new TextDecoder();
    function f(h) {
      return Mt(h, { ...v.decoders, Promise: (d) => new Promise((l, p) => {
        i.set(d, { fulfil: l, reject: p });
      }) });
    }
    let u = "";
    for (; ; ) {
      const { done: h, value: d } = await o.read();
      if (h && !u) break;
      for (u += !d && u ? `
` : c.decode(d, { stream: true }); ; ) {
        const l = u.indexOf(`
`);
        if (l === -1) break;
        const p = JSON.parse(u.slice(0, l));
        if (u = u.slice(l + 1), p.type === "redirect") return s(p);
        if (p.type === "data") (_a4 = p.nodes) == null ? void 0 : _a4.forEach((_) => {
          (_ == null ? void 0 : _.type) === "data" && (_.uses = dt(_.uses), _.data = f(_.data));
        }), s(p);
        else if (p.type === "chunk") {
          const { id: _, data: m, error: R } = p, E = i.get(_);
          i.delete(_), R ? E.reject(f(R)) : E.fulfil(f(m));
        }
      }
    }
  });
}
function dt(e) {
  return { dependencies: new Set((e == null ? void 0 : e.dependencies) ?? []), params: new Set((e == null ? void 0 : e.params) ?? []), parent: !!(e == null ? void 0 : e.parent), route: !!(e == null ? void 0 : e.route), url: !!(e == null ? void 0 : e.url), search_params: new Set((e == null ? void 0 : e.search_params) ?? []) };
}
function pn() {
  const e = document.querySelector("[autofocus]");
  if (e) e.focus();
  else {
    const t = document.body, n = t.getAttribute("tabindex");
    t.tabIndex = -1, t.focus({ preventScroll: true, focusVisible: false }), n !== null ? t.setAttribute("tabindex", n) : t.removeAttribute("tabindex");
    const r = getSelection();
    if (r && r.type !== "None") {
      const a = [];
      for (let s = 0; s < r.rangeCount; s += 1) a.push(r.getRangeAt(s));
      setTimeout(() => {
        if (r.rangeCount === a.length) {
          for (let s = 0; s < r.rangeCount; s += 1) {
            const i = a[s], o = r.getRangeAt(s);
            if (i.commonAncestorContainer !== o.commonAncestorContainer || i.startContainer !== o.startContainer || i.endContainer !== o.endContainer || i.startOffset !== o.startOffset || i.endOffset !== o.endOffset) return;
          }
          r.removeAllRanges();
        }
      });
    }
  }
}
function ht(e, t, n, r) {
  var _a3, _b2;
  let a, s;
  const i = new Promise((c, f) => {
    a = c, s = f;
  });
  return i.catch(() => {
  }), { navigation: { from: { params: e.params, route: { id: ((_a3 = e.route) == null ? void 0 : _a3.id) ?? null }, url: e.url }, to: n && { params: (t == null ? void 0 : t.params) ?? null, route: { id: ((_b2 = t == null ? void 0 : t.route) == null ? void 0 : _b2.id) ?? null }, url: n }, willUnload: !t, type: r, complete: i }, fulfil: a, reject: s };
}
function Oe(e) {
  return { data: e.data, error: e.error, form: e.form, params: e.params, route: e.route, state: e.state, status: e.status, url: e.url };
}
function gn(e) {
  const t = new URL(e);
  return t.hash = decodeURIComponent(e.hash), t;
}
export {
  fe as H,
  kn as a,
  fn as g,
  yn as l,
  S as p,
  N as s
};
