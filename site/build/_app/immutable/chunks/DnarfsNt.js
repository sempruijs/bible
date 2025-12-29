import { f as d, a3 as g, u as c, i as m, a4 as i, a5 as b, q as p, a6 as v, $ as h, a7 as k } from "./BdIJhRdh.js";
function x(a = false) {
  const s = d, e = s.l.u;
  if (!e) return;
  let o = () => v(s.s);
  if (a) {
    let n = 0, t = {};
    const _ = h(() => {
      let l = false;
      const r = s.s;
      for (const f in r) r[f] !== t[f] && (t[f] = r[f], l = true);
      return l && n++, n;
    });
    o = () => p(_);
  }
  e.b.length && g(() => {
    u(s, o), i(e.b);
  }), c(() => {
    const n = m(() => e.m.map(b));
    return () => {
      for (const t of n) typeof t == "function" && t();
    };
  }), e.a.length && c(() => {
    u(s, o), i(e.a);
  });
}
function u(a, s) {
  if (a.l.s) for (const e of a.l.s) p(e);
  s();
}
k();
export {
  x as i
};
