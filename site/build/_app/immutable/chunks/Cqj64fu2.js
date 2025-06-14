import { h as t, P as u, Q as i, R as h, T as m, V as g, W as y, u as A, r as S } from "./C4Jx_sal.js";
import { a as E, l as M } from "./CMTFrVuM.js";
const N = Symbol("is custom element"), k = Symbol("is html");
function w(e) {
  if (t) {
    var r = false, a = () => {
      if (!r) {
        if (r = true, e.hasAttribute("value")) {
          var l = e.value;
          v(e, "value", null), e.value = l;
        }
        if (e.hasAttribute("checked")) {
          var s = e.checked;
          v(e, "checked", null), e.checked = s;
        }
      }
    };
    e.__on_r = a, h(a), E();
  }
}
function v(e, r, a, l) {
  var s = T(e);
  t && (s[r] = e.getAttribute(r), r === "src" || r === "srcset" || r === "href" && e.nodeName === "LINK") || s[r] !== (s[r] = a) && (r === "loading" && (e[m] = a), a == null ? e.removeAttribute(r) : typeof a != "string" && L(e).includes(r) ? e[r] = a : e.setAttribute(r, a));
}
function T(e) {
  return e.__attributes ?? (e.__attributes = { [N]: e.nodeName.includes("-"), [k]: e.namespaceURI === u });
}
var c = /* @__PURE__ */ new Map();
function L(e) {
  var r = c.get(e.nodeName);
  if (r) return r;
  c.set(e.nodeName, r = []);
  for (var a, l = e, s = Element.prototype; s !== l; ) {
    a = g(l);
    for (var o in a) a[o].set && r.push(o);
    l = i(l);
  }
  return r;
}
function O(e, r, a = r) {
  var l = y();
  M(e, "input", (s) => {
    var o = s ? e.defaultValue : e.value;
    if (o = _(e) ? f(o) : o, a(o), l && o !== (o = r())) {
      var d = e.selectionStart, n = e.selectionEnd;
      e.value = o ?? "", n !== null && (e.selectionStart = d, e.selectionEnd = Math.min(n, e.value.length));
    }
  }), (t && e.defaultValue !== e.value || A(r) == null && e.value) && a(_(e) ? f(e.value) : e.value), S(() => {
    var s = r();
    _(e) && s === f(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function _(e) {
  var r = e.type;
  return r === "number" || r === "range";
}
function f(e) {
  return e === "" ? null : +e;
}
export {
  O as b,
  w as r,
  v as s
};
