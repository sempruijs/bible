import { f as u, a as h } from "../chunks/Cj37v-TY.js";
import { i as g } from "../chunks/DnarfsNt.js";
import { a8 as d, ad as l, a9 as v, aa as _, ab as e, ac as s, ae as x } from "../chunks/BdIJhRdh.js";
import { s as o } from "../chunks/BfY5rtVt.js";
import { s as $, p } from "../chunks/pYp_LRQ4.js";
const b = { get error() {
  return p.error;
}, get status() {
  return p.status;
} };
$.updated.check;
const m = b;
var k = u("<h1> </h1> <p> </p>", 1);
function z(i, f) {
  d(f, false), g();
  var r = k(), a = l(r), c = e(a, true);
  s(a);
  var t = x(a, 2), n = e(t, true);
  s(t), v(() => {
    var _a;
    o(c, m.status), o(n, (_a = m.error) == null ? void 0 : _a.message);
  }), h(i, r), _();
}
export {
  z as component
};
