var _a;
import { n as f, al as v, am as p, an as E, a6 as u, h as s, i as o, ao as h, o as T, f as d, ap as N, k as g } from "./1U9xaPEF.js";
function y(r) {
  var n = document.createElement("template");
  return n.innerHTML = r.replaceAll("<!>", "<!---->"), n.content;
}
function t(r, n) {
  var e = u;
  e.nodes === null && (e.nodes = { start: r, end: n, a: null, t: null });
}
function A(r, n) {
  var e = (n & p) !== 0, l = (n & E) !== 0, a, _ = !r.startsWith("<!>");
  return () => {
    if (s) return t(o, null), o;
    a === void 0 && (a = y(_ ? r : "<!>" + r), e || (a = f(a)));
    var i = l || v ? document.importNode(a, true) : a.cloneNode(true);
    if (e) {
      var m = f(i), c = i.lastChild;
      t(m, c);
    } else t(i, i);
    return i;
  };
}
function M(r = "") {
  if (!s) {
    var n = d(r + "");
    return t(n, n), n;
  }
  var e = o;
  return e.nodeType !== N && (e.before(e = d()), g(e)), t(e, e), e;
}
function C() {
  if (s) return t(o, null), o;
  var r = document.createDocumentFragment(), n = document.createComment(""), e = d();
  return r.append(n, e), t(n, e), r;
}
function F(r, n) {
  if (s) {
    var e = u;
    ((e.f & h) === 0 || e.nodes.end === null) && (e.nodes.end = o), T();
    return;
  }
  r !== null && r.before(n);
}
const w = "5";
typeof window < "u" && ((_a = window.__svelte ?? (window.__svelte = {})).v ?? (_a.v = /* @__PURE__ */ new Set())).add(w);
export {
  F as a,
  t as b,
  C as c,
  A as f,
  M as t
};
