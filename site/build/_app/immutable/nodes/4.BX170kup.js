import { e as c } from "../chunks/CBbuBPfZ.js";
import { t as N, a as u } from "../chunks/EsKB78gf.js";
import { r as y, g as O } from "../chunks/DZp6ItbZ.js";
import { f as g, a as h } from "../chunks/BNmRZ_yl.js";
import { W as j, $ as w, X as d, Y as C, a0 as _, Z as s, _ as n, q as b } from "../chunks/1U9xaPEF.js";
import { s as f } from "../chunks/EIIizr_c.js";
import { e as I, i as P } from "../chunks/DePszQJY.js";
const S = async ({ params: r, parent: e }) => {
  const t = N(r.book);
  u(t) && c(404, "Book not found");
  const a = parseInt(r.chapter);
  (isNaN(a) || a < 1) && c(404, "Invalid chapter number");
  const { bibleData: i } = await e(), o = await y(O(i, t.value, a));
  return u(o) && c(404, "Chapter not found"), { book: t.value, chapter: o.value };
}, A = Object.freeze(Object.defineProperty({ __proto__: null, load: S }, Symbol.toStringTag, { value: "Module" }));
var q = g("<div><span> </span> <span> </span></div>"), z = g("<h2> </h2> <!>", 1);
function E(r, e) {
  j(e, true);
  var t = z(), a = w(t), i = s(a, true);
  n(a);
  var o = _(a, 2);
  I(o, 17, () => e.data.chapter.verses, P, (x, v) => {
    var p = q(), m = s(p), k = s(m, true);
    n(m);
    var l = _(m, 2), B = s(l, true);
    n(l), n(p), d(() => {
      f(k, b(v).verse), f(B, b(v).text);
    }), h(x, p);
  }), d(() => f(i, e.data.chapter.name)), h(r, t), C();
}
export {
  E as component,
  A as universal
};
