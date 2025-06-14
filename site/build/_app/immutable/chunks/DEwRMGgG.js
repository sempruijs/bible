var _a;
import { Z as f, _ as v, $ as i, a0 as p, a1 as h, a2 as u, h as d, c as o, y as E, B as T } from "./C4Jx_sal.js";
function y(n) {
  var t = document.createElement("template");
  return t.innerHTML = n, t.content;
}
function r(n, t) {
  var e = u;
  e.nodes_start === null && (e.nodes_start = n, e.nodes_end = t);
}
function x(n, t) {
  var e = (t & p) !== 0, _ = (t & h) !== 0, a, c = !n.startsWith("<!>");
  return () => {
    if (d) return r(o, null), o;
    a === void 0 && (a = y(c ? n : "<!>" + n), e || (a = f(a)));
    var s = _ || v ? document.importNode(a, true) : a.cloneNode(true);
    if (e) {
      var m = f(s), l = s.lastChild;
      r(m, l);
    } else r(s, s);
    return s;
  };
}
function M(n = "") {
  if (!d) {
    var t = i(n + "");
    return r(t, t), t;
  }
  var e = o;
  return e.nodeType !== 3 && (e.before(e = i()), T(e)), r(e, e), e;
}
function N() {
  if (d) return r(o, null), o;
  var n = document.createDocumentFragment(), t = document.createComment(""), e = i();
  return n.append(t, e), r(t, e), n;
}
function L(n, t) {
  if (d) {
    u.nodes_end = o, E();
    return;
  }
  n !== null && n.before(t);
}
const g = "5";
typeof window < "u" && ((_a = window.__svelte ?? (window.__svelte = {})).v ?? (_a.v = /* @__PURE__ */ new Set())).add(g);
export {
  L as a,
  r as b,
  N as c,
  M as d,
  x as t
};
