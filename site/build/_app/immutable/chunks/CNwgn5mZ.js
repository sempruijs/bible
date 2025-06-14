import { t as c, a as s, c as F } from "./DEwRMGgG.js";
import { p as G, i as H, j as I, k as J, l as h, o as n, v as r, g as a, w as y, x as K, s as M } from "./C4Jx_sal.js";
import { d as N, s as k } from "./CMTFrVuM.js";
import { i as w } from "./SJ_a0Wuu.js";
import { e as B, n as O, i as S, a as P, s as Q } from "./B-P6ZHem.js";
import { g as R } from "./BmgkC57G.js";
var T = (m, e, t) => e(a(t).name), U = (m, e, t) => R(`/${a(e).name.toLowerCase()}/${a(t).chapter}`), V = c('<button class="bg-white hover:bg-gray-300 rounded px-2 py-1 transition"> </button>'), W = c('<div class="pl-4 mt-2 grid grid-cols-5 gap-2 text-sm text-gray-600"></div>'), X = c('<li><button class="w-full text-left block px-2 py-1 rounded hover:bg-gray-200 transition text-gray-700 font-medium"> </button> <!></li>'), Y = c('<aside class="w-64 bg-gray-100 border-r border-gray-300 p-4 overflow-y-auto h-screen"><h2 class="text-xl font-bold mb-4 text-gray-800">Bijbel</h2> <ul class="space-y-2"></ul></aside>');
function oa(m, e) {
  G(e, true);
  let t = H(I(O()));
  function j(d) {
    M(t, Q(d), true);
  }
  var v = Y(), _ = h(n(v), 2);
  B(_, 21, () => e.bible.books, S, (d, o) => {
    var p = X(), i = n(p);
    i.__click = [T, j, o];
    var C = n(i, true);
    r(i);
    var L = h(i, 2);
    {
      var q = (g) => {
        var b = F(), z = K(b);
        {
          var A = (u) => {
            var f = W();
            B(f, 21, () => a(o).chapters, S, (D, x) => {
              var l = V();
              l.__click = [U, o, x];
              var E = n(l, true);
              r(l), y(() => k(E, a(x).chapter)), s(D, l);
            }), r(f), s(u, f);
          };
          w(z, (u) => {
            a(t).value === a(o).name && u(A);
          });
        }
        s(g, b);
      };
      w(L, (g) => {
        P(a(t)) && g(q);
      });
    }
    r(p), y(() => k(C, a(o).name)), s(d, p);
  }), r(_), r(v), s(m, v), J();
}
N(["click"]);
export {
  oa as S
};
