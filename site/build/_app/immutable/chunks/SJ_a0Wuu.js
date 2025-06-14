import { b as p, h as u, y as g, E as h, H as D, z as S, A as F, B as H, C as I, D as b, a as A, F as v, U as k, c as C } from "./C4Jx_sal.js";
function O(E, m, [t, s] = [0, 0]) {
  u && t === 0 && g();
  var a = E, f = null, e = null, c = k, N = t > 0 ? h : 0, i = false;
  const R = (n, l = true) => {
    i = true, o(l, n);
  }, o = (n, l) => {
    if (c === (c = n)) return;
    let T = false;
    if (u && s !== -1) {
      if (t === 0) {
        const r = a.data;
        r === D ? s = 0 : r === S ? s = 1 / 0 : (s = parseInt(r.substring(1)), s !== s && (s = c ? 1 / 0 : -1));
      }
      const _ = s > t;
      !!c === _ && (a = F(), H(a), I(false), T = true, s = -1);
    }
    c ? (f ? b(f) : l && (f = A(() => l(a))), e && v(e, () => {
      e = null;
    })) : (e ? b(e) : l && (e = A(() => l(a, [t + 1, s]))), f && v(f, () => {
      f = null;
    })), T && I(true);
  };
  p(() => {
    i = false, m(R), i || o(null, null);
  }, N), u && (a = C);
}
export {
  O as i
};
