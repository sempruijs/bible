import { f, a as l } from "../chunks/Cj37v-TY.js";
import { i as B } from "../chunks/DnarfsNt.js";
import { h as w, af as I, ag as D, ah as K, a8 as C, ai as R, S as z, ad as v, T as E, ab as _, ae as p, aa as F, ac as m, q as i, aj as G, a9 as J, i as Z, a6 as j } from "../chunks/BdIJhRdh.js";
import { p as U } from "../chunks/BiqzYgdy.js";
import { d as q, s as x } from "../chunks/BfY5rtVt.js";
import { e as y, i as M } from "../chunks/DjS5NvuB.js";
import { B as a } from "../chunks/Btl_48n0.js";
const Q = Symbol("is custom element"), V = Symbol("is html");
function W(e, t, s, o) {
  var r = X(e);
  w && (r[t] = e.getAttribute(t), e.nodeName === "LINK") || r[t] !== (r[t] = s) && (s == null ? e.removeAttribute(t) : typeof s != "string" && Y(e).includes(t) ? e[t] = s : e.setAttribute(t, s));
}
function X(e) {
  return e.__attributes ?? (e.__attributes = { [Q]: e.nodeName.includes("-"), [V]: e.namespaceURI === I });
}
var N = /* @__PURE__ */ new Map();
function Y(e) {
  var t = e.getAttribute("is") || e.nodeName, s = N.get(t);
  if (s) return s;
  N.set(t, s = []);
  for (var o, r = e, n = Element.prototype; n !== r; ) {
    o = K(r);
    for (var h in o) o[h].set && s.push(h);
    r = D(r);
  }
  return s;
}
const T = [a.Genesis, a.Exodus, a.Leviticus, a.Numbers, a.Deuteronomy, a.Joshua, a.Judges, a.Ruth, a.FirstSamuel, a.SecondSamuel, a.FirstKings, a.SecondKings, a.FirstChronicles, a.SecondChronicles, a.Ezra, a.Nehemiah, a.Esther, a.Job, a.Psalms, a.Proverbs, a.Ecclesiastes, a.SongOfSongs, a.Isaiah, a.Jeremiah, a.Lamentations, a.Ezekiel, a.Daniel, a.Hosea, a.Joel, a.Amos, a.Obadiah, a.Jonah, a.Micah, a.Nahum, a.Habakkuk, a.Zephaniah, a.Haggai, a.Zechariah, a.Malachi, a.Matthew, a.Mark, a.Luke, a.John, a.Acts, a.Romans, a.FirstCorinthians, a.SecondCorinthians, a.Galatians, a.Ephesians, a.Philippians, a.Colossians, a.FirstThessalonians, a.SecondThessalonians, a.FirstTimothy, a.SecondTimothy, a.Titus, a.Philemon, a.Hebrews, a.James, a.FirstPeter, a.SecondPeter, a.FirstJohn, a.SecondJohn, a.ThirdJohn, a.Jude, a.Revelation], $ = [a.Genesis, a.Exodus, a.Leviticus, a.Numbers, a.Deuteronomy, a.Joshua, a.Judges, a.FirstSamuel, a.SecondSamuel, a.FirstKings, a.SecondKings, a.Isaiah, a.Jeremiah, a.Ezekiel, a.Hosea, a.Joel, a.Amos, a.Obadiah, a.Jonah, a.Micah, a.Nahum, a.Habakkuk, a.Zephaniah, a.Haggai, a.Zechariah, a.Malachi, a.Psalms, a.Proverbs, a.Job, a.SongOfSongs, a.Ruth, a.Lamentations, a.Ecclesiastes, a.Esther, a.Daniel, a.Ezra, a.Nehemiah, a.FirstChronicles, a.SecondChronicles];
var aa = f("<a> </a>"), ea = f("<li> </li> <!>", 1), sa = f('<div class="mb-4 space-x-2"><button>Greek Order</button> <button class="px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-colors">Tenach Order</button></div> <ul></ul>', 1);
function ta(e, t) {
  C(t, true);
  let s = R(z(T)), o = G(() => i(s).map((c) => {
    var _a, _b;
    return (_b = (_a = t.translation) == null ? void 0 : _a.books) == null ? void 0 : _b.find((u) => u.name === c);
  }).filter((c) => c !== void 0));
  var r = sa(), n = v(r), h = _(n);
  h.__click = () => E(s, T, true);
  var O = p(h, 2);
  O.__click = () => E(s, $, true), m(n);
  var b = p(n, 2);
  y(b, 21, () => i(o), M, (c, u) => {
    var S = ea(), g = v(S), A = _(g, true);
    m(g);
    var H = p(g, 2);
    y(H, 17, () => i(u).chapters, M, (L, k) => {
      var d = aa(), P = _(d, true);
      m(d), J(() => {
        W(d, "href", `/${i(u).name ?? ""}/${i(k).chapter ?? ""}`), x(P, i(k).chapter);
      }), l(L, d);
    }), J(() => x(A, i(u).name)), l(c, S);
  }), m(b), l(e, r), F();
}
q(["click"]);
var ra = f("<h1>Bible Computer</h1> <!>", 1);
function ma(e, t) {
  C(t, false);
  let s = U(t, "data", 8);
  B();
  var o = ra(), r = p(v(o), 2);
  ta(r, { get translation() {
    return j(s()), Z(() => s().bibleData);
  } }), l(e, o), F();
}
export {
  ma as component
};
