import { f as t, r as S, u as b, q as h, S as k } from "./C4Jx_sal.js";
function u(r, f) {
  return r === f || (r == null ? void 0 : r[k]) === f;
}
function c(r = {}, f, a, q) {
  return t(() => {
    var i, s;
    return S(() => {
      i = s, s = [], b(() => {
        r !== a(...s) && (f(r, ...s), i && u(a(...i), r) && f(null, ...i));
      });
    }), () => {
      h(() => {
        s && u(a(...s), r) && f(null, ...s);
      });
    };
  }), r;
}
export {
  c as b
};
