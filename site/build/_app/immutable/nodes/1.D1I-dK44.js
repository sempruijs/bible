import { f as u, a as h } from "../chunks/BNmRZ_yl.js";
import { i as g } from "../chunks/CtRou0-j.js";
import { W as l, $ as v, X as _, Y as d, Z as s, _ as e, a0 as x } from "../chunks/1U9xaPEF.js";
import { s as o } from "../chunks/EIIizr_c.js";
import { s as $, p } from "../chunks/COS9EhO3.js";
const k = { get error() {
  return p.error;
}, get status() {
  return p.status;
} };
$.updated.check;
const m = k;
var b = u("<h1> </h1> <p> </p>", 1);
function j(i, f) {
  l(f, false), g();
  var t = b(), r = v(t), n = s(r, true);
  e(r);
  var a = x(r, 2), c = s(a, true);
  e(a), _(() => {
    var _a;
    o(n, m.status), o(c, (_a = m.error) == null ? void 0 : _a.message);
  }), h(i, t), d();
}
export {
  j as component
};
