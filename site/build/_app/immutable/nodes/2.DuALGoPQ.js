import { f as _, a as u, c as q } from "../chunks/BNmRZ_yl.js";
import { i as W } from "../chunks/CtRou0-j.js";
import { h as X, ag as Y, ah as Q, ai as V, W as w, aj as B, a4 as C, $ as v, Y as D, a0 as y, _ as m, q as r, ak as $, a5 as F, Z as f, X as E, b as ee, T as ae } from "../chunks/1U9xaPEF.js";
import { i as se, p as te } from "../chunks/xlgMNqe2.js";
import { d as re, s as J } from "../chunks/EIIizr_c.js";
import { e as N, i as x } from "../chunks/DePszQJY.js";
import { _ as oe, B as e, n as A, i as H, g as ie, b as ne, s as ce } from "../chunks/EsKB78gf.js";
const he = Symbol("is custom element"), me = Symbol("is html");
function ue(a, s, t, o) {
  var i = le(a);
  X && (i[s] = a.getAttribute(s), a.nodeName === "LINK") || i[s] !== (i[s] = t) && (t == null ? a.removeAttribute(s) : typeof t != "string" && de(a).includes(s) ? a[s] = t : a.setAttribute(s, t));
}
function le(a) {
  return a.__attributes ?? (a.__attributes = { [he]: a.nodeName.includes("-"), [me]: a.namespaceURI === Y });
}
var L = /* @__PURE__ */ new Map();
function de(a) {
  var s = a.getAttribute("is") || a.nodeName, t = L.get(s);
  if (t) return t;
  L.set(s, t = []);
  for (var o, i = a, b = Element.prototype; b !== i; ) {
    o = V(i);
    for (var l in o) o[l].set && t.push(l);
    i = Q(i);
  }
  return t;
}
const I = oe(), pe = [e.Genesis, e.Exodus, e.Leviticus, e.Numbers, e.Deuteronomy, e.Joshua, e.Judges, e.Ruth, e.FirstSamuel, e.SecondSamuel, e.FirstKings, e.SecondKings, e.FirstChronicles, e.SecondChronicles, e.Ezra, e.Nehemiah, e.Esther, e.Job, e.Psalms, e.Proverbs, e.Ecclesiastes, e.SongOfSongs, e.Isaiah, e.Jeremiah, e.Lamentations, e.Ezekiel, e.Daniel, e.Hosea, e.Joel, e.Amos, e.Obadiah, e.Jonah, e.Micah, e.Nahum, e.Habakkuk, e.Zephaniah, e.Haggai, e.Zechariah, e.Malachi, e.Matthew, e.Mark, e.Luke, e.John, e.Acts, e.Romans, e.FirstCorinthians, e.SecondCorinthians, e.Galatians, e.Ephesians, e.Philippians, e.Colossians, e.FirstThessalonians, e.SecondThessalonians, e.FirstTimothy, e.SecondTimothy, e.Titus, e.Philemon, e.Hebrews, e.James, e.FirstPeter, e.SecondPeter, e.FirstJohn, e.SecondJohn, e.ThirdJohn, e.Jude, e.Revelation], _e = [e.Genesis, e.Exodus, e.Leviticus, e.Numbers, e.Deuteronomy, e.Joshua, e.Judges, e.FirstSamuel, e.SecondSamuel, e.FirstKings, e.SecondKings, e.Isaiah, e.Jeremiah, e.Ezekiel, e.Hosea, e.Joel, e.Amos, e.Obadiah, e.Jonah, e.Micah, e.Nahum, e.Habakkuk, e.Zephaniah, e.Haggai, e.Zechariah, e.Malachi, e.Psalms, e.Proverbs, e.Job, e.SongOfSongs, e.Ruth, e.Lamentations, e.Ecclesiastes, e.Esther, e.Daniel, e.Ezra, e.Nehemiah, e.FirstChronicles, e.SecondChronicles], ge = I({ name: "Greek Order", books: pe }), fe = I({ name: "Tenach Order", books: _e }), P = [ge, fe];
var ve = _('<button class="px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-colors"> </button>'), be = _("<a> </a>"), Se = _("<li><button> </button></li> <!>", 1), ke = _('<div class="mb-4 space-x-2"></div> <ul></ul>', 1);
function Ee(a, s) {
  w(s, true);
  let t = B(C(P[0])), o = B(C(A()));
  function i(c) {
    const n = H(r(o)) && r(o).value._tag === c._tag ? A() : ce(c);
    F(o, n, true);
  }
  let b = $(() => r(t).books.map((c) => {
    var _a, _b;
    return (_b = (_a = s.translation) == null ? void 0 : _a.books) == null ? void 0 : _b.find((n) => n.name._tag === c._tag);
  }).filter((c) => c !== void 0));
  var l = ke(), S = v(l);
  N(S, 21, () => P, x, (c, n) => {
    var h = ve();
    h.__click = () => F(t, r(n), true);
    var d = f(h, true);
    m(h), E(() => J(d, r(n).name)), u(c, h);
  }), m(S);
  var M = y(S, 2);
  N(M, 21, () => r(b), x, (c, n) => {
    var h = Se(), d = v(h), k = f(d);
    k.__click = () => i(r(n).name);
    var K = f(k, true);
    m(k), m(d);
    var R = y(d, 2);
    {
      var Z = (p) => {
        var O = q(), z = v(O);
        N(z, 17, () => r(n).chapters, x, (G, T) => {
          var g = be(), j = f(g, true);
          m(g), E((U) => {
            ue(g, "href", `/${U ?? ""}/${r(T).chapter ?? ""}`), J(j, r(T).chapter);
          }, [() => ne(r(n).name)]), u(G, g);
        }), u(p, O);
      };
      se(R, (p) => {
        H(r(o)) && r(o).value._tag === r(n).name._tag && p(Z);
      });
    }
    E((p) => J(K, p), [() => ie(r(n).name)]), u(c, h);
  }), m(M), u(a, l), D();
}
re(["click"]);
var Je = _("<h1>Bible Computer</h1> <!>", 1);
function Ce(a, s) {
  w(s, false);
  let t = te(s, "data", 8);
  W();
  var o = Je(), i = y(v(o), 2);
  Ee(i, { get translation() {
    return ae(t()), ee(() => t().bibleData);
  } }), u(a, o), D();
}
export {
  Ce as component
};
