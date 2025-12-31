import { c as d, Q as g, u as l, b, R as i, S as m, q as p, T as v, U as h, V as k } from "./1U9xaPEF.js";
function x(n = false) {
  const s = d, e = s.l.u;
  if (!e) return;
  let f = () => v(s.s);
  if (n) {
    let a = 0, t = {};
    const _ = h(() => {
      let c = false;
      const r = s.s;
      for (const o in r) r[o] !== t[o] && (t[o] = r[o], c = true);
      return c && a++, a;
    });
    f = () => p(_);
  }
  e.b.length && g(() => {
    u(s, f), i(e.b);
  }), l(() => {
    const a = b(() => e.m.map(m));
    return () => {
      for (const t of a) typeof t == "function" && t();
    };
  }), e.a.length && l(() => {
    u(s, f), i(e.a);
  });
}
function u(n, s) {
  if (n.l.s) for (const e of n.l.s) p(e);
  s();
}
k();
export {
  x as i
};
