import { e as f } from "../chunks/CBbuBPfZ.js";
import { n as h, s as y, t as O, a as d } from "../chunks/Btl_48n0.js";
import { g as j, r as w } from "../chunks/BuvrTTaO.js";
import { f as k, a as l } from "../chunks/Cj37v-TY.js";
import { a8 as C, ad as I, a9 as b, aa as P, ae as _, ab as s, ac as i, q as g } from "../chunks/BdIJhRdh.js";
import { s as m } from "../chunks/BfY5rtVt.js";
import { e as S, i as q } from "../chunks/DjS5NvuB.js";
const z = (o, r, t) => j(function* () {
  const a = o.books.find((e) => e.name === r);
  if (!a) return h();
  const n = a.chapters.find((e) => e.chapter === t);
  return n ? y(n) : h();
}), D = async ({ params: o, parent: r }) => {
  const t = O(o.book);
  d(t) && f(404, "Book not found");
  const a = parseInt(o.chapter);
  (isNaN(a) || a < 1) && f(404, "Invalid chapter number");
  const { bibleData: n } = await r(), e = await w(z(n, t.value, a));
  return d(e) && f(404, "Chapter not found"), { book: t.value, chapter: e.value };
}, L = Object.freeze(Object.defineProperty({ __proto__: null, load: D }, Symbol.toStringTag, { value: "Module" }));
var M = k("<div><span> </span> <span> </span></div>"), T = k("<h2> </h2> <!>", 1);
function Q(o, r) {
  C(r, true);
  var t = T(), a = I(t), n = s(a, true);
  i(a);
  var e = _(a, 2);
  S(e, 17, () => r.data.chapter.verses, q, (x, u) => {
    var p = M(), c = s(p), B = s(c, true);
    i(c);
    var v = _(c, 2), N = s(v, true);
    i(v), i(p), b(() => {
      m(B, g(u).verse), m(N, g(u).text);
    }), l(x, p);
  }), b(() => m(n, r.data.chapter.name)), l(o, t), P();
}
export {
  Q as component,
  L as universal
};
