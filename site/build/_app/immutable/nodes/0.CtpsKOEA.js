var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { B as e, c as S } from "../chunks/EsKB78gf.js";
import { a as l, f as h, B as E, C as I, V as d, T as u, s as g, b as m, t as c, c as i, r as A } from "../chunks/DZp6ItbZ.js";
import { f as N, a as O } from "../chunks/BNmRZ_yl.js";
import { j as p, a1 as f, Z as H, _ as b } from "../chunks/1U9xaPEF.js";
import { B as T } from "../chunks/BLVtgz1l.js";
function J(a, s, ...t) {
  var r = new T(a);
  p(() => {
    const n = s() ?? null;
    r.ensure(n, n && ((o) => n(o, ...t)));
  }, f);
}
const y = { GENESIS: e.Genesis, EXODUS: e.Exodus, LEVITICUS: e.Leviticus, NUMBERS: e.Numbers, DEUTERONOMY: e.Deuteronomy, JOSHUA: e.Joshua, JUDGES: e.Judges, RUTH: e.Ruth, "I SAMUEL": e.FirstSamuel, "II SAMUEL": e.SecondSamuel, "I KINGS": e.FirstKings, "II KINGS": e.SecondKings, "I CHRONICLES": e.FirstChronicles, "II CHRONICLES": e.SecondChronicles, EZRA: e.Ezra, NEHEMIAH: e.Nehemiah, ESTHER: e.Esther, JOB: e.Job, PSALMS: e.Psalms, PROVERBS: e.Proverbs, ECCLESIASTES: e.Ecclesiastes, "SONG OF SOLOMON": e.SongOfSongs, ISAIAH: e.Isaiah, JEREMIAH: e.Jeremiah, LAMENTATIONS: e.Lamentations, EZEKIEL: e.Ezekiel, DANIEL: e.Daniel, HOSEA: e.Hosea, JOEL: e.Joel, AMOS: e.Amos, OBADIAH: e.Obadiah, JONAH: e.Jonah, MICAH: e.Micah, NAHUM: e.Nahum, HABAKKUK: e.Habakkuk, ZEPHANIAH: e.Zephaniah, HAGGAI: e.Haggai, ZECHARIAH: e.Zechariah, MALACHI: e.Malachi, MATTHEW: e.Matthew, MARK: e.Mark, LUKE: e.Luke, JOHN: e.John, ACTS: e.Acts, ROMANS: e.Romans, "I CORINTHIANS": e.FirstCorinthians, "II CORINTHIANS": e.SecondCorinthians, GALATIANS: e.Galatians, EPHESIANS: e.Ephesians, PHILIPPIANS: e.Philippians, COLOSSIANS: e.Colossians, "I THESSALONIANS": e.FirstThessalonians, "II THESSALONIANS": e.SecondThessalonians, "I TIMOTHY": e.FirstTimothy, "II TIMOTHY": e.SecondTimothy, TITUS: e.Titus, PHILEMON: e.Philemon, HEBREWS: e.Hebrews, JAMES: e.James, "I PETER": e.FirstPeter, "II PETER": e.SecondPeter, "I JOHN": e.FirstJohn, "II JOHN": e.SecondJohn, "III JOHN": e.ThirdJohn, JUDE: e.Jude, "REVELATION OF JOHN": e.Revelation }, C = S("BookNameParseError"), M = (a) => {
  const s = a.toUpperCase(), t = y[s];
  return t ? g(t) : m(C({ bookName: a }));
}, L = (a) => l(function* () {
  const s = yield* h(a.books, (t) => l(function* () {
    const r = yield* M(t.name);
    return E({ name: r, chapters: t.chapters.map((n) => I({ chapter: n.chapter, name: n.name, verses: n.verses.map((o) => d({ verse: o.verse, chapter: o.chapter, name: o.name, text: o.text })) })) });
  }));
  return u({ books: s });
});
class P {
  constructor(s) {
    __publicField(this, "_tag", "FetchError");
    this.message = s;
  }
}
class B {
  constructor(s) {
    __publicField(this, "_tag", "ParseError");
    this.message = s;
  }
}
const R = () => l(function* () {
  console.log("Step 1: Checking cache...");
  const a = yield* c({ try: () => {
    if (typeof localStorage > "u") return console.log("localStorage not available (SSR)"), null;
    const o = localStorage.getItem("bibleData");
    return o ? JSON.parse(o) : null;
  }, catch: (o) => (console.log("Cache check failed:", o), null) });
  if (a) return console.log("Using cached data"), a;
  console.log("Step 2: Fetching from remote...");
  const s = yield* i({ try: () => (console.log("Making fetch request..."), fetch("https://raw.githubusercontent.com/biblecomputer/translations/refs/heads/main/v0/english/kjv.json")), catch: (o) => (console.error("Fetch failed:", o), new P(`Failed to fetch: ${o}`)) });
  console.log("Step 3: Parsing JSON...");
  const t = yield* i({ try: () => (console.log("Parsing response as JSON..."), s.json()), catch: (o) => (console.error("JSON parsing failed:", o), new B(`Failed to parse JSON: ${o}`)) });
  console.log("Step 4: Converting to translation...");
  const n = yield* L(t);
  return console.log("Step 5: Caching result..."), yield* c({ try: () => {
    if (typeof localStorage < "u") try {
      localStorage.setItem("bibleData", JSON.stringify(n)), console.log("Data cached successfully");
    } catch (o) {
      console.log("LocalStorage quota exceeded, skipping cache:", o.message), localStorage.clear();
    }
  }, catch: (o) => {
    console.log("Caching failed:", o);
  } }), console.log("Bible data loading completed successfully"), n;
}), k = false, F = false;
async function v() {
  var _a;
  try {
    console.log("Starting to load bible data...");
    const a = await A(R());
    return console.log("Bible data loaded successfully:", (_a = a.books) == null ? void 0 : _a.length, "books"), { bibleData: a };
  } catch (a) {
    return console.error("Failed to load bible data:", a), console.error("Error details:", JSON.stringify(a, null, 2)), { bibleData: { books: [] } };
  }
}
const j = Object.freeze(Object.defineProperty({ __proto__: null, load: v, prerender: k, ssr: F }, Symbol.toStringTag, { value: "Module" }));
var D = N('<div class="min-h-screen bg-[#0a2540] text-white"><!></div>');
function Z(a, s) {
  var t = D(), r = H(t);
  J(r, () => s.children), b(t), O(a, t);
}
export {
  Z as component,
  j as universal
};
