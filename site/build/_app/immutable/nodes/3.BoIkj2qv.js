import { e as r } from "../chunks/CBbuBPfZ.js";
import { t as s, i as m } from "../chunks/Btl_48n0.js";
import { f as i, a as p } from "../chunks/Cj37v-TY.js";
import { a8 as f, a9 as n, aa as l, ab as u, ac as b } from "../chunks/BdIJhRdh.js";
import { s as c } from "../chunks/BfY5rtVt.js";
const _ = ({ params: t }) => {
  const o = s(t.book);
  if (m(o)) return { book: o.value };
  r(404, "Not found");
}, B = Object.freeze(Object.defineProperty({ __proto__: null, load: _ }, Symbol.toStringTag, { value: "Module" }));
var d = i("<h1> </h1>");
function S(t, o) {
  f(o, true);
  var a = d(), e = u(a, true);
  b(a), n(() => c(e, o.data.book)), p(t, a), l();
}
export {
  S as component,
  B as universal
};
