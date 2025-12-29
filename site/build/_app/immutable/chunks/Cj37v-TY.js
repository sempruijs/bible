var _a;
import { n as f, ak as v, al as E, am as p, U as u, h as i, e as o, an as h, o as T, a as d, ao as N, k as g } from "./BdIJhRdh.js";
function y(r) {
  var n = document.createElement("template");
  return n.innerHTML = r.replaceAll("<!>", "<!---->"), n.content;
}
function t(r, n) {
  var e = u;
  e.nodes === null && (e.nodes = { start: r, end: n, a: null, t: null });
}
function A(r, n) {
  var e = (n & E) !== 0, l = (n & p) !== 0, a, _ = !r.startsWith("<!>");
  return () => {
    if (i) return t(o, null), o;
    a === void 0 && (a = y(_ ? r : "<!>" + r), e || (a = f(a)));
    var s = l || v ? document.importNode(a, true) : a.cloneNode(true);
    if (e) {
      var m = f(s), c = s.lastChild;
      t(m, c);
    } else t(s, s);
    return s;
  };
}
function M(r = "") {
  if (!i) {
    var n = d(r + "");
    return t(n, n), n;
  }
  var e = o;
  return e.nodeType !== N && (e.before(e = d()), g(e)), t(e, e), e;
}
function C() {
  if (i) return t(o, null), o;
  var r = document.createDocumentFragment(), n = document.createComment(""), e = d();
  return r.append(n, e), t(n, e), r;
}
function F(r, n) {
  if (i) {
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
