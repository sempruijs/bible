var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { B as e } from "../chunks/Btl_48n0.js";
import { g as l, f as S, s as h, a as E, t as c, b as i, r as I } from "../chunks/BuvrTTaO.js";
import { f as u, a as d } from "../chunks/Cj37v-TY.js";
import { j as g, aB as m, ab as A, ac as N } from "../chunks/BdIJhRdh.js";
import { B as O } from "../chunks/C1VSmUil.js";
function p(a, s, ...t) {
  var r = new O(a);
  g(() => {
    const n = s() ?? null;
    r.ensure(n, n && ((o) => n(o, ...t)));
  }, m);
}
const b = { GENESIS: e.Genesis, EXODUS: e.Exodus, LEVITICUS: e.Leviticus, NUMBERS: e.Numbers, DEUTERONOMY: e.Deuteronomy, JOSHUA: e.Joshua, JUDGES: e.Judges, RUTH: e.Ruth, "I SAMUEL": e.FirstSamuel, "II SAMUEL": e.SecondSamuel, "I KINGS": e.FirstKings, "II KINGS": e.SecondKings, "I CHRONICLES": e.FirstChronicles, "II CHRONICLES": e.SecondChronicles, EZRA: e.Ezra, NEHEMIAH: e.Nehemiah, ESTHER: e.Esther, JOB: e.Job, PSALMS: e.Psalms, PROVERBS: e.Proverbs, ECCLESIASTES: e.Ecclesiastes, "SONG OF SOLOMON": e.SongOfSongs, ISAIAH: e.Isaiah, JEREMIAH: e.Jeremiah, LAMENTATIONS: e.Lamentations, EZEKIEL: e.Ezekiel, DANIEL: e.Daniel, HOSEA: e.Hosea, JOEL: e.Joel, AMOS: e.Amos, OBADIAH: e.Obadiah, JONAH: e.Jonah, MICAH: e.Micah, NAHUM: e.Nahum, HABAKKUK: e.Habakkuk, ZEPHANIAH: e.Zephaniah, HAGGAI: e.Haggai, ZECHARIAH: e.Zechariah, MALACHI: e.Malachi, MATTHEW: e.Matthew, MARK: e.Mark, LUKE: e.Luke, JOHN: e.John, ACTS: e.Acts, ROMANS: e.Romans, "I CORINTHIANS": e.FirstCorinthians, "II CORINTHIANS": e.SecondCorinthians, GALATIANS: e.Galatians, EPHESIANS: e.Ephesians, PHILIPPIANS: e.Philippians, COLOSSIANS: e.Colossians, "I THESSALONIANS": e.FirstThessalonians, "II THESSALONIANS": e.SecondThessalonians, "I TIMOTHY": e.FirstTimothy, "II TIMOTHY": e.SecondTimothy, TITUS: e.Titus, PHILEMON: e.Philemon, HEBREWS: e.Hebrews, JAMES: e.James, "I PETER": e.FirstPeter, "II PETER": e.SecondPeter, "I JOHN": e.FirstJohn, "II JOHN": e.SecondJohn, "III JOHN": e.ThirdJohn, JUDE: e.Jude, "REVELATION OF JOHN": e.Revelation };
class f {
  constructor(s) {
    __publicField(this, "_tag", "BookNameParseError");
    this.bookName = s;
  }
}
const H = (a) => {
  const s = a.toUpperCase(), t = b[s];
  return t ? h(t) : E(new f(a));
}, T = (a) => l(function* () {
  return { books: yield* S(a.books, (t) => l(function* () {
    return { name: yield* H(t.name), chapters: t.chapters.map((n) => ({ chapter: n.chapter, name: n.name, verses: n.verses.map((o) => ({ verse: o.verse, chapter: o.chapter, name: o.name, text: o.text })) })) };
  })) };
});
class J {
  constructor(s) {
    __publicField(this, "_tag", "FetchError");
    this.message = s;
  }
}
class y {
  constructor(s) {
    __publicField(this, "_tag", "ParseError");
    this.message = s;
  }
}
const M = () => l(function* () {
  console.log("Step 1: Checking cache...");
  const a = yield* c({ try: () => {
    if (typeof localStorage > "u") return console.log("localStorage not available (SSR)"), null;
    const o = localStorage.getItem("bibleData");
    return o ? JSON.parse(o) : null;
  }, catch: (o) => (console.log("Cache check failed:", o), null) });
  if (a) return console.log("Using cached data"), a;
  console.log("Step 2: Fetching from remote...");
  const s = yield* i({ try: () => (console.log("Making fetch request..."), fetch("https://raw.githubusercontent.com/biblecomputer/translations/refs/heads/main/v0/english/kjv.json")), catch: (o) => (console.error("Fetch failed:", o), new J(`Failed to fetch: ${o}`)) });
  console.log("Step 3: Parsing JSON...");
  const t = yield* i({ try: () => (console.log("Parsing response as JSON..."), s.json()), catch: (o) => (console.error("JSON parsing failed:", o), new y(`Failed to parse JSON: ${o}`)) });
  console.log("Step 4: Converting to translation...");
  const n = yield* T(t);
  return console.log("Step 5: Caching result..."), yield* c({ try: () => {
    if (typeof localStorage < "u") try {
      localStorage.setItem("bibleData", JSON.stringify(n)), console.log("Data cached successfully");
    } catch (o) {
      console.log("LocalStorage quota exceeded, skipping cache:", o.message), localStorage.clear();
    }
  }, catch: (o) => {
    console.log("Caching failed:", o);
  } }), console.log("Bible data loading completed successfully"), n;
}), C = false, L = false;
async function P() {
  var _a;
  try {
    console.log("Starting to load bible data...");
    const a = await I(M());
    return console.log("Bible data loaded successfully:", (_a = a.books) == null ? void 0 : _a.length, "books"), { bibleData: a };
  } catch (a) {
    return console.error("Failed to load bible data:", a), console.error("Error details:", JSON.stringify(a, null, 2)), { bibleData: { books: [] } };
  }
}
const U = Object.freeze(Object.defineProperty({ __proto__: null, load: P, prerender: C, ssr: L }, Symbol.toStringTag, { value: "Module" }));
var B = u('<div class="min-h-screen bg-[#0a2540] text-white"><!></div>');
function _(a, s) {
  var t = B(), r = A(t);
  p(r, () => s.children), N(t), d(a, t);
}
export {
  _ as component,
  U as universal
};
