import { s as f, g as c } from "./D70lfaQ3.js";
import { t as l, e as b, n as a, m as _, g as p, s as d } from "./C4Jx_sal.js";
let u = false, t = Symbol();
function v(e, r, n) {
  const s = n[r] ?? (n[r] = { store: null, source: _(void 0), unsubscribe: a });
  if (s.store !== e && !(t in n)) if (s.unsubscribe(), s.store = e ?? null, e == null) s.source.v = void 0, s.unsubscribe = a;
  else {
    var i = true;
    s.unsubscribe = f(e, (o) => {
      i ? s.source.v = o : d(s.source, o);
    }), i = false;
  }
  return e && t in n ? c(e) : p(s.source);
}
function y() {
  const e = {};
  function r() {
    l(() => {
      for (var n in e) e[n].unsubscribe();
      b(e, t, { enumerable: false, value: true });
    });
  }
  return [e, r];
}
function N(e) {
  var r = u;
  try {
    return u = false, [e(), u];
  } finally {
    u = r;
  }
}
export {
  v as a,
  N as c,
  y as s
};
