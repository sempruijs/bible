import { e as a } from "../chunks/CBbuBPfZ.js";
import { t as s, i as m } from "../chunks/EsKB78gf.js";
import { f as i, a as p } from "../chunks/BNmRZ_yl.js";
import { W as f, X as n, Y as l, Z as u, _ } from "../chunks/1U9xaPEF.js";
import { s as b } from "../chunks/EIIizr_c.js";
const c = ({ params: t }) => {
  const o = s(t.book);
  if (m(o)) return { book: o.value };
  a(404, "Not found");
}, B = Object.freeze(Object.defineProperty({ __proto__: null, load: c }, Symbol.toStringTag, { value: "Module" }));
var d = i("<h1> </h1>");
function S(t, o) {
  f(o, true);
  var e = d(), r = u(e, true);
  _(e), n(() => b(r, o.data.book)), p(t, e), l();
}
export {
  S as component,
  B as universal
};
