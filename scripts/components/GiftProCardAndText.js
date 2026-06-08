import { jsx as Y, jsxs as To } from 'react/jsx-runtime';
import Gi, {
  lazy as Ev, Suspense as Cv, useState as fo, useRef as Pi, useEffect as jt, useCallback as zs, forwardRef as Nm, createContext as Bm, useReducer as Tv, useImperativeHandle as Hm, useMemo as hs, useContext as jm, useLayoutEffect as Pv,
} from 'react';
import kv from 'lottie-react';

const _v = Object.defineProperty;
const Bg = (h) => {
  throw TypeError(h);
};
const xv = (h, t, e) => (t in h ? _v(h, t, {
  enumerable: !0, configurable: !0, writable: !0, value: e,
}) : h[t] = e);
const V = (h, t, e) => xv(h, typeof t !== 'symbol' ? `${t}` : t, e); const
  Sf = (h, t, e) => t.has(h) || Bg(`Cannot ${e}`);
const n = (h, t, e) => (Sf(h, t, 'read from private field'), e ? e.call(h) : t.get(h)); const v = (h, t, e) => (t.has(h) ? Bg('Cannot add the same private member more than once') : t instanceof WeakSet ? t.add(h) : t.set(h, e)); const m = (h, t, e, i) => (Sf(h, t, 'write to private field'), i ? i.call(h, e) : t.set(h, e), e); const
  A = (h, t, e) => (Sf(h, t, 'access private method'), e);
const de = (h, t, e, i) => ({
  set _(s) {
    m(h, t, s, e);
  },
  get _() {
    return n(h, t, i);
  },
});

const Bd = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof global < 'u' ? global : typeof self < 'u' ? self : {};
function zm(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, 'default') ? h.default : h;
}
function Rv(h) {
  if (Object.prototype.hasOwnProperty.call(h, '__esModule')) return h;
  const t = h.default;
  if (typeof t === 'function') {
    var e = function i() {
      return this instanceof i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else e = {};
  return Object.defineProperty(e, '__esModule', { value: !0 }), Object.keys(h).forEach((i) => {
    const s = Object.getOwnPropertyDescriptor(h, i);
    Object.defineProperty(e, i, s.get ? s : {
      enumerable: !0,
      get() {
        return h[i];
      },
    });
  }), e;
}
const Af = {}; const _f = {}; const hh = {}; const xf = {}; let
  Hg;
function Mv() {
  return Hg || (Hg = 1, (function (h) {
    Object.defineProperty(h, '__esModule', {
      value: !0,
    }), h.default = void 0;
    const t = {
      animating: !1,
      autoplaying: null,
      currentDirection: 0,
      currentLeft: null,
      currentSlide: 0,
      direction: 1,
      dragging: !1,
      edgeDragged: !1,
      initialized: !1,
      lazyLoadedList: [],
      listHeight: null,
      listWidth: null,
      scrolling: !1,
      slideCount: null,
      slideHeight: null,
      slideWidth: null,
      swipeLeft: null,
      swiped: !1,
      // used by swipeEvent. differentites between touch and swipe.
      swiping: !1,
      touchObject: {
        startX: 0,
        startY: 0,
        curX: 0,
        curY: 0,
      },
      trackStyle: {},
      trackWidth: 0,
      targetSlide: 0,
    };
    h.default = t;
  }(xf))), xf;
}
let Ef; let
  jg;
function Lv() {
  if (jg) return Ef;
  jg = 1;
  const h = 'Expected a function';
  const t = NaN;
  const e = '[object Symbol]';
  const i = /^\s+|\s+$/g;
  const s = /^[-+]0x[0-9a-f]+$/i;
  const r = /^0b[01]+$/i;
  const a = /^0o[0-7]+$/i;
  const o = parseInt;
  const l = typeof Bd === 'object' && Bd && Bd.Object === Object && Bd;
  const c = typeof self === 'object' && self && self.Object === Object && self;
  const d = l || c || Function('return this')();
  const u = Object.prototype;
  const g = u.toString;
  const b = Math.max;
  const E = Math.min;
  const S = function () {
    return d.Date.now();
  };
  function M(f, y, _) {
    let P; let k; let C; let D; let N; let I; let B = 0; let j = !1; let z = !1; let
      w = !0;
    if (typeof f !== 'function') throw new TypeError(h);
    y = p(y) || 0, T(_) && (j = !!_.leading, z = 'maxWait' in _, C = z ? b(p(_.maxWait) || 0, y) : C, w = 'trailing' in _ ? !!_.trailing : w);
    function K(W) {
      const ht = P; const
        ct = k;
      return P = k = void 0, B = W, D = f.apply(ct, ht), D;
    }
    function F(W) {
      return B = W, N = setTimeout(H, y), j ? K(W) : D;
    }
    function x(W) {
      const ht = W - I; const ct = W - B; const
        dt = y - ht;
      return z ? E(dt, C - ct) : dt;
    }
    function O(W) {
      const ht = W - I; const
        ct = W - B;
      return I === void 0 || ht >= y || ht < 0 || z && ct >= C;
    }
    function H() {
      const W = S();
      if (O(W)) return $(W);
      N = setTimeout(H, x(W));
    }
    function $(W) {
      return N = void 0, w && P ? K(W) : (P = k = void 0, D);
    }
    function U() {
      N !== void 0 && clearTimeout(N), B = 0, P = I = k = N = void 0;
    }
    function q() {
      return N === void 0 ? D : $(S());
    }
    function G() {
      const W = S(); const
        ht = O(W);
      if (P = arguments, k = this, I = W, ht) {
        if (N === void 0) return F(I);
        if (z) return N = setTimeout(H, y), K(I);
      }
      return N === void 0 && (N = setTimeout(H, y)), D;
    }
    return G.cancel = U, G.flush = q, G;
  }
  function T(f) {
    const y = typeof f;
    return !!f && (y == 'object' || y == 'function');
  }
  function L(f) {
    return !!f && typeof f === 'object';
  }
  function R(f) {
    return typeof f === 'symbol' || L(f) && g.call(f) == e;
  }
  function p(f) {
    if (typeof f === 'number') return f;
    if (R(f)) return t;
    if (T(f)) {
      const y = typeof f.valueOf === 'function' ? f.valueOf() : f;
      f = T(y) ? `${y}` : y;
    }
    if (typeof f !== 'string') return f === 0 ? f : +f;
    f = f.replace(i, '');
    const _ = r.test(f);
    return _ || a.test(f) ? o(f.slice(2), _ ? 2 : 8) : s.test(f) ? t : +f;
  }
  return Ef = M, Ef;
}
const Cf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
let zg;
function lf() {
  return zg || (zg = 1, (function (h) {
    (function () {
      const t = {}.hasOwnProperty;
      function e() {
        for (var r = '', a = 0; a < arguments.length; a++) {
          const o = arguments[a];
          o && (r = s(r, i(o)));
        }
        return r;
      }
      function i(r) {
        if (typeof r === 'string' || typeof r === 'number') return r;
        if (typeof r !== 'object') return '';
        if (Array.isArray(r)) return e.apply(null, r);
        if (r.toString !== Object.prototype.toString && !r.toString.toString().includes('[native code]')) return r.toString();
        let a = '';
        for (const o in r) t.call(r, o) && r[o] && (a = s(a, o));
        return a;
      }
      function s(r, a) {
        return a ? r ? `${r} ${a}` : r + a : r;
      }
      h.exports ? (e.default = e, h.exports = e) : window.classNames = e;
    }());
  }(Cf))), Cf.exports;
}
const J = {}; const Tf = {}; let
  Ug;
function Um() {
  return Ug || (Ug = 1, (function (h) {
    Object.defineProperty(h, '__esModule', {
      value: !0,
    }), h.default = void 0;
    const t = e(Gi);
    function e(s) {
      return s && s.__esModule ? s : { default: s };
    }
    const i = {
      accessibility: !0,
      adaptiveHeight: !1,
      afterChange: null,
      appendDots(r) {
        return /* @__PURE__ */ t.default.createElement('ul', {
          style: {
            display: 'block',
          },
        }, r);
      },
      arrows: !0,
      autoplay: !1,
      autoplaySpeed: 3e3,
      beforeChange: null,
      centerMode: !1,
      centerPadding: '50px',
      className: '',
      cssEase: 'ease',
      customPaging(r) {
        return /* @__PURE__ */ t.default.createElement('button', null, r + 1);
      },
      dots: !1,
      dotsClass: 'slick-dots',
      draggable: !0,
      easing: 'linear',
      edgeFriction: 0.35,
      fade: !1,
      focusOnSelect: !1,
      infinite: !0,
      initialSlide: 0,
      lazyLoad: null,
      nextArrow: null,
      onEdge: null,
      onInit: null,
      onLazyLoadError: null,
      onReInit: null,
      pauseOnDotsHover: !1,
      pauseOnFocus: !1,
      pauseOnHover: !0,
      prevArrow: null,
      responsive: null,
      rows: 1,
      rtl: !1,
      slide: 'div',
      slidesPerRow: 1,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500,
      swipe: !0,
      swipeEvent: null,
      swipeToSlide: !1,
      touchMove: !0,
      touchThreshold: 5,
      useCSS: !0,
      useTransform: !0,
      variableWidth: !1,
      vertical: !1,
      verticalSwiping: !1,
      waitForAnimate: !0,
      asNavFor: null,
      unslick: !1,
    };
    h.default = i;
  }(Tf))), Tf;
}
let $g;
function Td() {
  if ($g) return J;
  $g = 1, Object.defineProperty(J, '__esModule', {
    value: !0,
  }), J.checkSpecKeys = J.checkNavigable = J.changeSlide = J.canUseDOM = J.canGoNext = void 0, J.clamp = c, J.extractObject = void 0, J.filterSettings = K, J.validSettings = J.swipeStart = J.swipeMove = J.swipeEnd = J.slidesOnRight = J.slidesOnLeft = J.slideHandler = J.siblingDirection = J.safePreventDefault = J.lazyStartIndex = J.lazySlidesOnRight = J.lazySlidesOnLeft = J.lazyEndIndex = J.keyHandler = J.initializedState = J.getWidth = J.getTrackLeft = J.getTrackCSS = J.getTrackAnimateCSS = J.getTotalSlides = J.getSwipeDirection = J.getSlideCount = J.getRequiredLazySlides = J.getPreClones = J.getPostClones = J.getOnDemandLazySlides = J.getNavigableIndexes = J.getHeight = void 0;
  const h = e(Gi); const
    t = e(Um());
  function e(F) {
    return F && F.__esModule ? F : { default: F };
  }
  function i(F) {
    '@babel/helpers - typeof';

    return i = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (x) {
      return typeof x;
    } : function (x) {
      return x && typeof Symbol === 'function' && x.constructor === Symbol && x !== Symbol.prototype ? 'symbol' : typeof x;
    }, i(F);
  }
  function s(F, x) {
    const O = Object.keys(F);
    if (Object.getOwnPropertySymbols) {
      let H = Object.getOwnPropertySymbols(F);
      x && (H = H.filter(($) => Object.getOwnPropertyDescriptor(F, $).enumerable)), O.push.apply(O, H);
    }
    return O;
  }
  function r(F) {
    for (let x = 1; x < arguments.length; x++) {
      var O = arguments[x] != null ? arguments[x] : {};
      x % 2 ? s(Object(O), !0).forEach((H) => {
        a(F, H, O[H]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(F, Object.getOwnPropertyDescriptors(O)) : s(Object(O)).forEach((H) => {
        Object.defineProperty(F, H, Object.getOwnPropertyDescriptor(O, H));
      });
    }
    return F;
  }
  function a(F, x, O) {
    return (x = o(x)) in F ? Object.defineProperty(F, x, {
      value: O, enumerable: !0, configurable: !0, writable: !0,
    }) : F[x] = O, F;
  }
  function o(F) {
    const x = l(F, 'string');
    return i(x) == 'symbol' ? x : `${x}`;
  }
  function l(F, x) {
    if (i(F) != 'object' || !F) return F;
    const O = F[Symbol.toPrimitive];
    if (O !== void 0) {
      const H = O.call(F, x);
      if (i(H) != 'object') return H;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (x === 'string' ? String : Number)(F);
  }
  function c(F, x, O) {
    return Math.max(x, Math.min(F, O));
  }
  const d = J.safePreventDefault = function (x) {
    const O = ['onTouchStart', 'onTouchMove', 'onWheel'];
    O.includes(x._reactName) || x.preventDefault();
  }; const
    u = J.getOnDemandLazySlides = function (x) {
      for (var O = [], H = g(x), $ = b(x), U = H; U < $; U++) x.lazyLoadedList.indexOf(U) < 0 && O.push(U);
      return O;
    };
  J.getRequiredLazySlides = function (x) {
    for (var O = [], H = g(x), $ = b(x), U = H; U < $; U++) O.push(U);
    return O;
  };
  var g = J.lazyStartIndex = function (x) {
    return x.currentSlide - E(x);
  }; var b = J.lazyEndIndex = function (x) {
    return x.currentSlide + S(x);
  }; var E = J.lazySlidesOnLeft = function (x) {
    return x.centerMode ? Math.floor(x.slidesToShow / 2) + (parseInt(x.centerPadding) > 0 ? 1 : 0) : 0;
  }; var S = J.lazySlidesOnRight = function (x) {
    return x.centerMode ? Math.floor((x.slidesToShow - 1) / 2) + 1 + (parseInt(x.centerPadding) > 0 ? 1 : 0) : x.slidesToShow;
  }; const M = J.getWidth = function (x) {
    return x && x.offsetWidth || 0;
  }; const T = J.getHeight = function (x) {
    return x && x.offsetHeight || 0;
  }; const L = J.getSwipeDirection = function (x) {
    const O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; let H; let $; let U; let
      q;
    return H = x.startX - x.curX, $ = x.startY - x.curY, U = Math.atan2($, H), q = Math.round(U * 180 / Math.PI), q < 0 && (q = 360 - Math.abs(q)), q <= 45 && q >= 0 || q <= 360 && q >= 315 ? 'left' : q >= 135 && q <= 225 ? 'right' : O === !0 ? q >= 35 && q <= 135 ? 'up' : 'down' : 'vertical';
  }; const
    R = J.canGoNext = function (x) {
      let O = !0;
      return x.infinite || (x.centerMode && x.currentSlide >= x.slideCount - 1 || x.slideCount <= x.slidesToShow || x.currentSlide >= x.slideCount - x.slidesToShow) && (O = !1), O;
    };
  J.extractObject = function (x, O) {
    const H = {};
    return O.forEach(($) => H[$] = x[$]), H;
  }, J.initializedState = function (x) {
    const O = h.default.Children.count(x.children); const H = x.listRef; const $ = Math.ceil(M(H)); const U = x.trackRef && x.trackRef.node; const q = Math.ceil(M(U)); let
      G;
    if (x.vertical) G = $;
    else {
      let W = x.centerMode && parseInt(x.centerPadding) * 2;
      typeof x.centerPadding === 'string' && x.centerPadding.slice(-1) === '%' && (W *= $ / 100), G = Math.ceil(($ - W) / x.slidesToShow);
    }
    const ht = H && T(H.querySelector('[data-index="0"]')); const ct = ht * x.slidesToShow; let
      dt = x.currentSlide === void 0 ? x.initialSlide : x.currentSlide;
    x.rtl && x.currentSlide === void 0 && (dt = O - 1 - x.initialSlide);
    let ut = x.lazyLoadedList || []; const
      rt = u(r(r({}, x), {}, {
        currentSlide: dt,
        lazyLoadedList: ut,
      }));
    ut = ut.concat(rt);
    const st = {
      slideCount: O,
      slideWidth: G,
      listWidth: $,
      trackWidth: q,
      currentSlide: dt,
      slideHeight: ht,
      listHeight: ct,
      lazyLoadedList: ut,
    };
    return x.autoplaying === null && x.autoplay && (st.autoplaying = 'playing'), st;
  }, J.slideHandler = function (x) {
    const O = x.waitForAnimate; const H = x.animating; const $ = x.fade; const U = x.infinite; const q = x.index; const G = x.slideCount; const W = x.lazyLoad; const ht = x.currentSlide; const ct = x.centerMode; const dt = x.slidesToScroll; const ut = x.slidesToShow; const rt = x.useCSS; let
      st = x.lazyLoadedList;
    if (O && H) return {};
    let nt = q; let at; let St; let ot; let Ct = {}; let ae = {}; const
      ce = U ? q : c(q, 0, G - 1);
    if ($) {
      if (!U && (q < 0 || q >= G)) return {};
      q < 0 ? nt = q + G : q >= G && (nt = q - G), W && st.indexOf(nt) < 0 && (st = st.concat(nt)), Ct = {
        animating: !0,
        currentSlide: nt,
        lazyLoadedList: st,
        targetSlide: nt,
      }, ae = {
        animating: !1,
        targetSlide: nt,
      };
    } else {
      at = nt, nt < 0 ? (at = nt + G, U ? G % dt !== 0 && (at = G - G % dt) : at = 0) : !R(x) && nt > ht ? nt = at = ht : ct && nt >= G ? (nt = U ? G : G - 1, at = U ? 0 : G - 1) : nt >= G && (at = nt - G, U ? G % dt !== 0 && (at = 0) : at = G - ut), !U && nt + ut >= G && (at = G - ut), St = C(r(r({}, x), {}, {
        slideIndex: nt,
      })), ot = C(r(r({}, x), {}, {
        slideIndex: at,
      })), U || (St === ot && (nt = at), St = ot), W && (st = st.concat(u(r(r({}, x), {}, {
        currentSlide: nt,
      })))), rt ? (Ct = {
        animating: !0,
        currentSlide: at,
        trackStyle: k(r(r({}, x), {}, {
          left: St,
        })),
        lazyLoadedList: st,
        targetSlide: ce,
      }, ae = {
        animating: !1,
        currentSlide: at,
        trackStyle: P(r(r({}, x), {}, {
          left: ot,
        })),
        swipeLeft: null,
        targetSlide: ce,
      }) : Ct = {
        currentSlide: at,
        trackStyle: P(r(r({}, x), {}, {
          left: ot,
        })),
        lazyLoadedList: st,
        targetSlide: ce,
      };
    }
    return {
      state: Ct,
      nextState: ae,
    };
  }, J.changeSlide = function (x, O) {
    let H; let $; let U; let q; let G; const W = x.slidesToScroll; const ht = x.slidesToShow; const ct = x.slideCount; const dt = x.currentSlide; const ut = x.targetSlide; const rt = x.lazyLoad; const
      st = x.infinite;
    if (q = ct % W !== 0, H = q ? 0 : (ct - dt) % W, O.message === 'previous') U = H === 0 ? W : ht - H, G = dt - U, rt && !st && ($ = dt - U, G = $ === -1 ? ct - 1 : $), st || (G = ut - W);
    else if (O.message === 'next') U = H === 0 ? W : H, G = dt + U, rt && !st && (G = (dt + W) % ct + H), st || (G = ut + W);
    else if (O.message === 'dots') G = O.index * O.slidesToScroll;
    else if (O.message === 'children') {
      if (G = O.index, st) {
        const nt = B(r(r({}, x), {}, {
          targetSlide: G,
        }));
        G > O.currentSlide && nt === 'left' ? G -= ct : G < O.currentSlide && nt === 'right' && (G += ct);
      }
    } else O.message === 'index' && (G = Number(O.index));
    return G;
  }, J.keyHandler = function (x, O, H) {
    return x.target.tagName.match('TEXTAREA|INPUT|SELECT') || !O ? '' : x.keyCode === 37 ? H ? 'next' : 'previous' : x.keyCode === 39 ? H ? 'previous' : 'next' : '';
  }, J.swipeStart = function (x, O, H) {
    return x.target.tagName === 'IMG' && d(x), !O || !H && x.type.indexOf('mouse') !== -1 ? '' : {
      dragging: !0,
      touchObject: {
        startX: x.touches ? x.touches[0].pageX : x.clientX,
        startY: x.touches ? x.touches[0].pageY : x.clientY,
        curX: x.touches ? x.touches[0].pageX : x.clientX,
        curY: x.touches ? x.touches[0].pageY : x.clientY,
      },
    };
  }, J.swipeMove = function (x, O) {
    const H = O.scrolling; const $ = O.animating; const U = O.vertical; const q = O.swipeToSlide; const G = O.verticalSwiping; const W = O.rtl; const ht = O.currentSlide; const ct = O.edgeFriction; const dt = O.edgeDragged; const ut = O.onEdge; const rt = O.swiped; const st = O.swiping; const nt = O.slideCount; const at = O.slidesToScroll; const St = O.infinite; const ot = O.touchObject; const Ct = O.swipeEvent; const ae = O.listHeight; const
      ce = O.listWidth;
    if (!H) {
      if ($) return d(x);
      U && q && G && d(x);
      let xe; let $s = {}; const
        Ws = C(O);
      ot.curX = x.touches ? x.touches[0].pageX : x.clientX, ot.curY = x.touches ? x.touches[0].pageY : x.clientY, ot.swipeLength = Math.round(Math.sqrt((ot.curX - ot.startX) ** 2));
      const Nd = Math.round(Math.sqrt((ot.curY - ot.startY) ** 2));
      if (!G && !st && Nd > 10) {
        return {
          scrolling: !0,
        };
      }
      G && (ot.swipeLength = Nd);
      let Br = (W ? -1 : 1) * (ot.curX > ot.startX ? 1 : -1);
      G && (Br = ot.curY > ot.startY ? 1 : -1);
      const vf = Math.ceil(nt / at); const us = L(O.touchObject, G); let
        Hr = ot.swipeLength;
      return St || (ht === 0 && (us === 'right' || us === 'down') || ht + 1 >= vf && (us === 'left' || us === 'up') || !R(O) && (us === 'left' || us === 'up')) && (Hr = ot.swipeLength * ct, dt === !1 && ut && (ut(us), $s.edgeDragged = !0)), !rt && Ct && (Ct(us), $s.swiped = !0), U ? xe = Ws + Hr * (ae / ce) * Br : W ? xe = Ws - Hr * Br : xe = Ws + Hr * Br, G && (xe = Ws + Hr * Br), $s = r(r({}, $s), {}, {
        touchObject: ot,
        swipeLeft: xe,
        trackStyle: P(r(r({}, O), {}, {
          left: xe,
        })),
      }), Math.abs(ot.curX - ot.startX) < Math.abs(ot.curY - ot.startY) * 0.8 || ot.swipeLength > 10 && ($s.swiping = !0, d(x)), $s;
    }
  }, J.swipeEnd = function (x, O) {
    const H = O.dragging; const $ = O.swipe; const U = O.touchObject; const q = O.listWidth; const G = O.touchThreshold; const W = O.verticalSwiping; const ht = O.listHeight; const ct = O.swipeToSlide; const dt = O.scrolling; const ut = O.onSwipe; const rt = O.targetSlide; const st = O.currentSlide; const
      nt = O.infinite;
    if (!H) return $ && d(x), {};
    const at = W ? ht / G : q / G; const St = L(U, W); const
      ot = {
        dragging: !1,
        edgeDragged: !1,
        scrolling: !1,
        swiping: !1,
        swiped: !1,
        swipeLeft: null,
        touchObject: {},
      };
    if (dt || !U.swipeLength) return ot;
    if (U.swipeLength > at) {
      d(x), ut && ut(St);
      let Ct; let ae; const
        ce = nt ? st : rt;
      switch (St) {
        case 'left':
        case 'up':
          ae = ce + y(O), Ct = ct ? f(O, ae) : ae, ot.currentDirection = 0;
          break;
        case 'right':
        case 'down':
          ae = ce - y(O), Ct = ct ? f(O, ae) : ae, ot.currentDirection = 1;
          break;
        default:
          Ct = ce;
      }
      ot.triggerSlideHandler = Ct;
    } else {
      const xe = C(O);
      ot.trackStyle = k(r(r({}, O), {}, {
        left: xe,
      }));
    }
    return ot;
  };
  const p = J.getNavigableIndexes = function (x) {
    for (var O = x.infinite ? x.slideCount * 2 : x.slideCount, H = x.infinite ? x.slidesToShow * -1 : 0, $ = x.infinite ? x.slidesToShow * -1 : 0, U = []; H < O;) U.push(H), H = $ + x.slidesToScroll, $ += Math.min(x.slidesToScroll, x.slidesToShow);
    return U;
  }; var f = J.checkNavigable = function (x, O) {
    const H = p(x); let
      $ = 0;
    if (O > H[H.length - 1]) O = H[H.length - 1];
    else {
      for (const U in H) {
        if (O < H[U]) {
          O = $;
          break;
        }
        $ = H[U];
      }
    }
    return O;
  }; var y = J.getSlideCount = function (x) {
    const O = x.centerMode ? x.slideWidth * Math.floor(x.slidesToShow / 2) : 0;
    if (x.swipeToSlide) {
      let H; const $ = x.listRef; const
        U = $.querySelectorAll && $.querySelectorAll('.slick-slide') || [];
      if (Array.from(U).every((W) => {
        if (x.vertical) {
          if (W.offsetTop + T(W) / 2 > x.swipeLeft * -1) return H = W, !1;
        } else if (W.offsetLeft - O + M(W) / 2 > x.swipeLeft * -1) return H = W, !1;
        return !0;
      }), !H) return 0;
      const q = x.rtl === !0 ? x.slideCount - x.currentSlide : x.currentSlide; const
        G = Math.abs(H.dataset.index - q) || 1;
      return G;
    } return x.slidesToScroll;
  }; const _ = J.checkSpecKeys = function (x, O) {
    return O.reduce((H, $) => H && x.hasOwnProperty($), !0) ? null : console.error('Keys Missing:', x);
  }; var P = J.getTrackCSS = function (x) {
    _(x, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth']);
    let O; let
      H;
    if (!x.vertical) O = I(x) * x.slideWidth;
    else {
      const $ = x.unslick ? x.slideCount : x.slideCount + 2 * x.slidesToShow;
      H = $ * x.slideHeight;
    }
    let U = {
      opacity: 1,
      transition: '',
      WebkitTransition: '',
    };
    if (x.useTransform) {
      const q = x.vertical ? `translate3d(0px, ${x.left}px, 0px)` : `translate3d(${x.left}px, 0px, 0px)`;
      const G = x.vertical ? `translate3d(0px, ${x.left}px, 0px)` : `translate3d(${x.left}px, 0px, 0px)`;
      const W = x.vertical ? `translateY(${x.left}px)` : `translateX(${x.left}px)`;
      U = r(r({}, U), {}, {
        WebkitTransform: q,
        transform: G,
        msTransform: W,
      });
    } else x.vertical ? U.top = x.left : U.left = x.left;
    return x.fade && (U = {
      opacity: 1,
    }), O && (U.width = O), H && (U.height = H), window && !window.addEventListener && window.attachEvent && (x.vertical ? U.marginTop = `${x.left}px` : U.marginLeft = `${x.left}px`), U;
  }; var k = J.getTrackAnimateCSS = function (x) {
    _(x, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase']);
    const O = P(x);
    return x.useTransform ? (O.WebkitTransition = `-webkit-transform ${x.speed}ms ${x.cssEase}`, O.transition = `transform ${x.speed}ms ${x.cssEase}`) : x.vertical ? O.transition = `top ${x.speed}ms ${x.cssEase}` : O.transition = `left ${x.speed}ms ${x.cssEase}`, O;
  }; var C = J.getTrackLeft = function (x) {
    if (x.unslick) return 0;
    _(x, ['slideIndex', 'trackRef', 'infinite', 'centerMode', 'slideCount', 'slidesToShow', 'slidesToScroll', 'slideWidth', 'listWidth', 'variableWidth', 'slideHeight']);
    const O = x.slideIndex; const H = x.trackRef; const $ = x.infinite; const U = x.centerMode; const q = x.slideCount; const G = x.slidesToShow; const W = x.slidesToScroll; const ht = x.slideWidth; const ct = x.listWidth; const dt = x.variableWidth; const ut = x.slideHeight; const rt = x.fade; const st = x.vertical; let nt = 0; let at; let St; let
      ot = 0;
    if (rt || x.slideCount === 1) return 0;
    let Ct = 0;
    if ($ ? (Ct = -D(x), q % W !== 0 && O + W > q && (Ct = -(O > q ? G - (O - q) : q % W)), U && (Ct += parseInt(G / 2))) : (q % W !== 0 && O + W > q && (Ct = G - q % W), U && (Ct = parseInt(G / 2))), nt = Ct * ht, ot = Ct * ut, st ? at = O * ut * -1 + ot : at = O * ht * -1 + nt, dt === !0) {
      let ae; const
        ce = H && H.node;
      if (ae = O + D(x), St = ce && ce.childNodes[ae], at = St ? St.offsetLeft * -1 : 0, U === !0) {
        ae = $ ? O + D(x) : O, St = ce && ce.children[ae], at = 0;
        for (let xe = 0; xe < ae; xe++) at -= ce && ce.children[xe] && ce.children[xe].offsetWidth;
        at -= parseInt(x.centerPadding), at += St && (ct - St.offsetWidth) / 2;
      }
    }
    return at;
  }; var D = J.getPreClones = function (x) {
    return x.unslick || !x.infinite ? 0 : x.variableWidth ? x.slideCount : x.slidesToShow + (x.centerMode ? 1 : 0);
  }; const N = J.getPostClones = function (x) {
    return x.unslick || !x.infinite ? 0 : x.variableWidth ? x.slideCount : x.slidesToShow + (x.centerMode ? 1 : 0);
  }; var I = J.getTotalSlides = function (x) {
    return x.slideCount === 1 ? 1 : D(x) + x.slideCount + N(x);
  }; var B = J.siblingDirection = function (x) {
    return x.targetSlide > x.currentSlide ? x.targetSlide > x.currentSlide + j(x) ? 'left' : 'right' : x.targetSlide < x.currentSlide - z(x) ? 'right' : 'left';
  }; var j = J.slidesOnRight = function (x) {
    const O = x.slidesToShow; const H = x.centerMode; const $ = x.rtl; const
      U = x.centerPadding;
    if (H) {
      let q = (O - 1) / 2 + 1;
      return parseInt(U) > 0 && (q += 1), $ && O % 2 === 0 && (q += 1), q;
    }
    return $ ? 0 : O - 1;
  }; var
    z = J.slidesOnLeft = function (x) {
      const O = x.slidesToShow; const H = x.centerMode; const $ = x.rtl; const
        U = x.centerPadding;
      if (H) {
        let q = (O - 1) / 2 + 1;
        return parseInt(U) > 0 && (q += 1), !$ && O % 2 === 0 && (q += 1), q;
      }
      return $ ? O - 1 : 0;
    };
  J.canUseDOM = function () {
    return !!(typeof window < 'u' && window.document && window.document.createElement);
  };
  const w = J.validSettings = Object.keys(t.default);
  function K(F) {
    return w.reduce((x, O) => (F.hasOwnProperty(O) && (x[O] = F[O]), x), {});
  }
  return J;
}
const ch = {}; let
  Wg;
function Dv() {
  if (Wg) return ch;
  Wg = 1, Object.defineProperty(ch, '__esModule', {
    value: !0,
  }), ch.Track = void 0;
  const h = i(Gi); const t = i(lf()); const
    e = Td();
  function i(k) {
    return k && k.__esModule ? k : { default: k };
  }
  function s(k) {
    '@babel/helpers - typeof';

    return s = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (C) {
      return typeof C;
    } : function (C) {
      return C && typeof Symbol === 'function' && C.constructor === Symbol && C !== Symbol.prototype ? 'symbol' : typeof C;
    }, s(k);
  }
  function r() {
    return r = Object.assign ? Object.assign.bind() : function (k) {
      for (let C = 1; C < arguments.length; C++) {
        const D = arguments[C];
        for (const N in D) ({}).hasOwnProperty.call(D, N) && (k[N] = D[N]);
      }
      return k;
    }, r.apply(null, arguments);
  }
  function a(k, C) {
    if (!(k instanceof C)) throw new TypeError('Cannot call a class as a function');
  }
  function o(k, C) {
    for (let D = 0; D < C.length; D++) {
      const N = C[D];
      N.enumerable = N.enumerable || !1, N.configurable = !0, 'value' in N && (N.writable = !0), Object.defineProperty(k, R(N.key), N);
    }
  }
  function l(k, C, D) {
    return C && o(k.prototype, C), Object.defineProperty(k, 'prototype', { writable: !1 }), k;
  }
  function c(k, C) {
    if (typeof C !== 'function' && C !== null) throw new TypeError('Super expression must either be null or a function');
    k.prototype = Object.create(C && C.prototype, { constructor: { value: k, writable: !0, configurable: !0 } }), Object.defineProperty(k, 'prototype', { writable: !1 }), C && d(k, C);
  }
  function d(k, C) {
    return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (D, N) {
      return D.__proto__ = N, D;
    }, d(k, C);
  }
  function u(k) {
    const C = E();
    return function () {
      let D; const
        N = S(k);
      if (C) {
        const I = S(this).constructor;
        D = Reflect.construct(N, arguments, I);
      } else D = N.apply(this, arguments);
      return g(this, D);
    };
  }
  function g(k, C) {
    if (C && (s(C) == 'object' || typeof C === 'function')) return C;
    if (C !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return b(k);
  }
  function b(k) {
    if (k === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return k;
  }
  function E() {
    try {
      var k = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
      }));
    } catch {
    }
    return (E = function () {
      return !!k;
    })();
  }
  function S(k) {
    return S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (C) {
      return C.__proto__ || Object.getPrototypeOf(C);
    }, S(k);
  }
  function M(k, C) {
    const D = Object.keys(k);
    if (Object.getOwnPropertySymbols) {
      let N = Object.getOwnPropertySymbols(k);
      C && (N = N.filter((I) => Object.getOwnPropertyDescriptor(k, I).enumerable)), D.push.apply(D, N);
    }
    return D;
  }
  function T(k) {
    for (let C = 1; C < arguments.length; C++) {
      var D = arguments[C] != null ? arguments[C] : {};
      C % 2 ? M(Object(D), !0).forEach((N) => {
        L(k, N, D[N]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(D)) : M(Object(D)).forEach((N) => {
        Object.defineProperty(k, N, Object.getOwnPropertyDescriptor(D, N));
      });
    }
    return k;
  }
  function L(k, C, D) {
    return (C = R(C)) in k ? Object.defineProperty(k, C, {
      value: D, enumerable: !0, configurable: !0, writable: !0,
    }) : k[C] = D, k;
  }
  function R(k) {
    const C = p(k, 'string');
    return s(C) == 'symbol' ? C : `${C}`;
  }
  function p(k, C) {
    if (s(k) != 'object' || !k) return k;
    const D = k[Symbol.toPrimitive];
    if (D !== void 0) {
      const N = D.call(k, C);
      if (s(N) != 'object') return N;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (C === 'string' ? String : Number)(k);
  }
  const f = function (C) {
    let D; let N; let I; let B; let
      j;
    C.rtl ? j = C.slideCount - 1 - C.index : j = C.index, I = j < 0 || j >= C.slideCount, C.centerMode ? (B = Math.floor(C.slidesToShow / 2), N = (j - C.currentSlide) % C.slideCount === 0, j > C.currentSlide - B - 1 && j <= C.currentSlide + B && (D = !0)) : D = C.currentSlide <= j && j < C.currentSlide + C.slidesToShow;
    let z;
    C.targetSlide < 0 ? z = C.targetSlide + C.slideCount : C.targetSlide >= C.slideCount ? z = C.targetSlide - C.slideCount : z = C.targetSlide;
    const w = j === z;
    return {
      'slick-slide': !0,
      'slick-active': D,
      'slick-center': N,
      'slick-cloned': I,
      'slick-current': w,
      // dubious in case of RTL
    };
  }; const y = function (C) {
    const D = {};
    return (C.variableWidth === void 0 || C.variableWidth === !1) && (D.width = C.slideWidth), C.fade && (D.position = 'relative', C.vertical ? D.top = -C.index * parseInt(C.slideHeight) : D.left = -C.index * parseInt(C.slideWidth), D.opacity = C.currentSlide === C.index ? 1 : 0, D.zIndex = C.currentSlide === C.index ? 999 : 998, C.useCSS && (D.transition = `opacity ${C.speed}ms ${C.cssEase}, visibility ${C.speed}ms ${C.cssEase}`)), D;
  }; const _ = function (C, D) {
    return C.key || D;
  }; const
    P = function (C) {
      let D; const N = []; const I = []; const B = []; const j = h.default.Children.count(C.children); const z = (0, e.lazyStartIndex)(C); const
        w = (0, e.lazyEndIndex)(C);
      return h.default.Children.forEach(C.children, (K, F) => {
        let x; const
          O = {
            message: 'children',
            index: F,
            slidesToScroll: C.slidesToScroll,
            currentSlide: C.currentSlide,
          };
        !C.lazyLoad || C.lazyLoad && C.lazyLoadedList.indexOf(F) >= 0 ? x = K : x = /* @__PURE__ */ h.default.createElement('div', null);
        const H = y(T(T({}, C), {}, {
          index: F,
        })); const $ = x.props.className || ''; let
          U = f(T(T({}, C), {}, {
            index: F,
          }));
        if (N.push(/* @__PURE__ */ h.default.cloneElement(x, {
          key: `original${_(x, F)}`,
          'data-index': F,
          className: (0, t.default)(U, $),
          tabIndex: '-1',
          'aria-hidden': !U['slick-active'],
          style: T(T({
            outline: 'none',
          }, x.props.style || {}), H),
          onClick(W) {
            x.props && x.props.onClick && x.props.onClick(W), C.focusOnSelect && C.focusOnSelect(O);
          },
        })), C.infinite && j > 1 && C.fade === !1 && !C.unslick) {
          const q = j - F;
          q <= (0, e.getPreClones)(C) && (D = -q, D >= z && (x = K), U = f(T(T({}, C), {}, {
            index: D,
          })), I.push(/* @__PURE__ */ h.default.cloneElement(x, {
            key: `precloned${_(x, D)}`,
            'data-index': D,
            tabIndex: '-1',
            className: (0, t.default)(U, $),
            'aria-hidden': !U['slick-active'],
            style: T(T({}, x.props.style || {}), H),
            onClick(W) {
              x.props && x.props.onClick && x.props.onClick(W), C.focusOnSelect && C.focusOnSelect(O);
            },
          }))), F < (0, e.getPostClones)(C) && (D = j + F, D < w && (x = K), U = f(T(T({}, C), {}, {
            index: D,
          })), B.push(/* @__PURE__ */ h.default.cloneElement(x, {
            key: `postcloned${_(x, D)}`,
            'data-index': D,
            tabIndex: '-1',
            className: (0, t.default)(U, $),
            'aria-hidden': !U['slick-active'],
            style: T(T({}, x.props.style || {}), H),
            onClick(W) {
              x.props && x.props.onClick && x.props.onClick(W), C.focusOnSelect && C.focusOnSelect(O);
            },
          })));
        }
      }), C.rtl ? I.concat(N, B).reverse() : I.concat(N, B);
    };
  return ch.Track = /* @__PURE__ */ (function (k) {
    c(D, k);
    const C = u(D);
    function D() {
      let N;
      a(this, D);
      for (var I = arguments.length, B = new Array(I), j = 0; j < I; j++) B[j] = arguments[j];
      return N = C.call.apply(C, [this].concat(B)), L(b(N), 'node', null), L(b(N), 'handleRef', (z) => {
        N.node = z;
      }), N;
    }
    return l(D, [{
      key: 'render',
      value() {
        const I = P(this.props); const B = this.props; const j = B.onMouseEnter; const z = B.onMouseOver; const w = B.onMouseLeave; const
          K = {
            onMouseEnter: j,
            onMouseOver: z,
            onMouseLeave: w,
          };
        return /* @__PURE__ */ h.default.createElement('div', r({
          ref: this.handleRef,
          className: 'slick-track',
          style: this.props.trackStyle,
        }, K), I);
      },
    }]), D;
  }(h.default.PureComponent)), ch;
}
const dh = {}; let
  Gg;
function Ov() {
  if (Gg) return dh;
  Gg = 1;
  function h(f) {
    '@babel/helpers - typeof';

    return h = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (y) {
      return typeof y;
    } : function (y) {
      return y && typeof Symbol === 'function' && y.constructor === Symbol && y !== Symbol.prototype ? 'symbol' : typeof y;
    }, h(f);
  }
  Object.defineProperty(dh, '__esModule', {
    value: !0,
  }), dh.Dots = void 0;
  const t = s(Gi); const e = s(lf()); const
    i = Td();
  function s(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function r(f, y) {
    const _ = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      let P = Object.getOwnPropertySymbols(f);
      y && (P = P.filter((k) => Object.getOwnPropertyDescriptor(f, k).enumerable)), _.push.apply(_, P);
    }
    return _;
  }
  function a(f) {
    for (let y = 1; y < arguments.length; y++) {
      var _ = arguments[y] != null ? arguments[y] : {};
      y % 2 ? r(Object(_), !0).forEach((P) => {
        o(f, P, _[P]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(_)) : r(Object(_)).forEach((P) => {
        Object.defineProperty(f, P, Object.getOwnPropertyDescriptor(_, P));
      });
    }
    return f;
  }
  function o(f, y, _) {
    return (y = u(y)) in f ? Object.defineProperty(f, y, {
      value: _, enumerable: !0, configurable: !0, writable: !0,
    }) : f[y] = _, f;
  }
  function l(f, y) {
    if (!(f instanceof y)) throw new TypeError('Cannot call a class as a function');
  }
  function c(f, y) {
    for (let _ = 0; _ < y.length; _++) {
      const P = y[_];
      P.enumerable = P.enumerable || !1, P.configurable = !0, 'value' in P && (P.writable = !0), Object.defineProperty(f, u(P.key), P);
    }
  }
  function d(f, y, _) {
    return y && c(f.prototype, y), Object.defineProperty(f, 'prototype', { writable: !1 }), f;
  }
  function u(f) {
    const y = g(f, 'string');
    return h(y) == 'symbol' ? y : `${y}`;
  }
  function g(f, y) {
    if (h(f) != 'object' || !f) return f;
    const _ = f[Symbol.toPrimitive];
    if (_ !== void 0) {
      const P = _.call(f, y);
      if (h(P) != 'object') return P;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(f);
  }
  function b(f, y) {
    if (typeof y !== 'function' && y !== null) throw new TypeError('Super expression must either be null or a function');
    f.prototype = Object.create(y && y.prototype, { constructor: { value: f, writable: !0, configurable: !0 } }), Object.defineProperty(f, 'prototype', { writable: !1 }), y && E(f, y);
  }
  function E(f, y) {
    return E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_, P) {
      return _.__proto__ = P, _;
    }, E(f, y);
  }
  function S(f) {
    const y = L();
    return function () {
      let _; const
        P = R(f);
      if (y) {
        const k = R(this).constructor;
        _ = Reflect.construct(P, arguments, k);
      } else _ = P.apply(this, arguments);
      return M(this, _);
    };
  }
  function M(f, y) {
    if (y && (h(y) == 'object' || typeof y === 'function')) return y;
    if (y !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return T(f);
  }
  function T(f) {
    if (f === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return f;
  }
  function L() {
    try {
      var f = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
      }));
    } catch {
    }
    return (L = function () {
      return !!f;
    })();
  }
  function R(f) {
    return R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (y) {
      return y.__proto__ || Object.getPrototypeOf(y);
    }, R(f);
  }
  const p = function (y) {
    let _;
    return y.infinite ? _ = Math.ceil(y.slideCount / y.slidesToScroll) : _ = Math.ceil((y.slideCount - y.slidesToShow) / y.slidesToScroll) + 1, _;
  };
  return dh.Dots = /* @__PURE__ */ (function (f) {
    b(_, f);
    const y = S(_);
    function _() {
      return l(this, _), y.apply(this, arguments);
    }
    return d(_, [{
      key: 'clickHandler',
      value(k, C) {
        C.preventDefault(), this.props.clickHandler(k);
      },
    }, {
      key: 'render',
      value() {
        for (var k = this.props, C = k.onMouseEnter, D = k.onMouseOver, N = k.onMouseLeave, I = k.infinite, B = k.slidesToScroll, j = k.slidesToShow, z = k.slideCount, w = k.currentSlide, K = p({
            slideCount: z,
            slidesToScroll: B,
            slidesToShow: j,
            infinite: I,
          }), F = {
            onMouseEnter: C,
            onMouseOver: D,
            onMouseLeave: N,
          }, x = [], O = 0; O < K; O++) {
          const H = (O + 1) * B - 1; const $ = I ? H : (0, i.clamp)(H, 0, z - 1); const U = $ - (B - 1); const q = I ? U : (0, i.clamp)(U, 0, z - 1); const G = (0, e.default)({
            'slick-active': I ? w >= q && w <= $ : w === q,
          }); const W = {
            message: 'dots',
            index: O,
            slidesToScroll: B,
            currentSlide: w,
          }; const
            ht = this.clickHandler.bind(this, W);
          x = x.concat(/* @__PURE__ */ t.default.createElement('li', {
            key: O,
            className: G,
          }, /* @__PURE__ */ t.default.cloneElement(this.props.customPaging(O), {
            onClick: ht,
          })));
        }
        return /* @__PURE__ */ t.default.cloneElement(this.props.appendDots(x), a({
          className: this.props.dotsClass,
        }, F));
      },
    }]), _;
  }(t.default.PureComponent)), dh;
}
const jr = {}; let
  Vg;
function Iv() {
  if (Vg) return jr;
  Vg = 1;
  function h(f) {
    '@babel/helpers - typeof';

    return h = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (y) {
      return typeof y;
    } : function (y) {
      return y && typeof Symbol === 'function' && y.constructor === Symbol && y !== Symbol.prototype ? 'symbol' : typeof y;
    }, h(f);
  }
  Object.defineProperty(jr, '__esModule', {
    value: !0,
  }), jr.PrevArrow = jr.NextArrow = void 0;
  const t = s(Gi); const e = s(lf()); const
    i = Td();
  function s(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function r() {
    return r = Object.assign ? Object.assign.bind() : function (f) {
      for (let y = 1; y < arguments.length; y++) {
        const _ = arguments[y];
        for (const P in _) ({}).hasOwnProperty.call(_, P) && (f[P] = _[P]);
      }
      return f;
    }, r.apply(null, arguments);
  }
  function a(f, y) {
    const _ = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      let P = Object.getOwnPropertySymbols(f);
      y && (P = P.filter((k) => Object.getOwnPropertyDescriptor(f, k).enumerable)), _.push.apply(_, P);
    }
    return _;
  }
  function o(f) {
    for (let y = 1; y < arguments.length; y++) {
      var _ = arguments[y] != null ? arguments[y] : {};
      y % 2 ? a(Object(_), !0).forEach((P) => {
        l(f, P, _[P]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(_)) : a(Object(_)).forEach((P) => {
        Object.defineProperty(f, P, Object.getOwnPropertyDescriptor(_, P));
      });
    }
    return f;
  }
  function l(f, y, _) {
    return (y = g(y)) in f ? Object.defineProperty(f, y, {
      value: _, enumerable: !0, configurable: !0, writable: !0,
    }) : f[y] = _, f;
  }
  function c(f, y) {
    if (!(f instanceof y)) throw new TypeError('Cannot call a class as a function');
  }
  function d(f, y) {
    for (let _ = 0; _ < y.length; _++) {
      const P = y[_];
      P.enumerable = P.enumerable || !1, P.configurable = !0, 'value' in P && (P.writable = !0), Object.defineProperty(f, g(P.key), P);
    }
  }
  function u(f, y, _) {
    return y && d(f.prototype, y), Object.defineProperty(f, 'prototype', { writable: !1 }), f;
  }
  function g(f) {
    const y = b(f, 'string');
    return h(y) == 'symbol' ? y : `${y}`;
  }
  function b(f, y) {
    if (h(f) != 'object' || !f) return f;
    const _ = f[Symbol.toPrimitive];
    if (_ !== void 0) {
      const P = _.call(f, y);
      if (h(P) != 'object') return P;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(f);
  }
  function E(f, y) {
    if (typeof y !== 'function' && y !== null) throw new TypeError('Super expression must either be null or a function');
    f.prototype = Object.create(y && y.prototype, { constructor: { value: f, writable: !0, configurable: !0 } }), Object.defineProperty(f, 'prototype', { writable: !1 }), y && S(f, y);
  }
  function S(f, y) {
    return S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_, P) {
      return _.__proto__ = P, _;
    }, S(f, y);
  }
  function M(f) {
    const y = R();
    return function () {
      let _; const
        P = p(f);
      if (y) {
        const k = p(this).constructor;
        _ = Reflect.construct(P, arguments, k);
      } else _ = P.apply(this, arguments);
      return T(this, _);
    };
  }
  function T(f, y) {
    if (y && (h(y) == 'object' || typeof y === 'function')) return y;
    if (y !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return L(f);
  }
  function L(f) {
    if (f === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return f;
  }
  function R() {
    try {
      var f = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
      }));
    } catch {
    }
    return (R = function () {
      return !!f;
    })();
  }
  function p(f) {
    return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (y) {
      return y.__proto__ || Object.getPrototypeOf(y);
    }, p(f);
  }
  return jr.PrevArrow = /* @__PURE__ */ (function (f) {
    E(_, f);
    const y = M(_);
    function _() {
      return c(this, _), y.apply(this, arguments);
    }
    return u(_, [{
      key: 'clickHandler',
      value(k, C) {
        C && C.preventDefault(), this.props.clickHandler(k, C);
      },
    }, {
      key: 'render',
      value() {
        const k = {
          'slick-arrow': !0,
          'slick-prev': !0,
        };
        let C = this.clickHandler.bind(this, {
          message: 'previous',
        });
        !this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow) && (k['slick-disabled'] = !0, C = null);
        const D = {
          key: '0',
          'data-role': 'none',
          className: (0, e.default)(k),
          style: {
            display: 'block',
          },
          onClick: C,
        };
        const N = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount,
        };
        let I;
        return this.props.prevArrow ? I = /* @__PURE__ */ t.default.cloneElement(this.props.prevArrow, o(o({}, D), N)) : I = /* @__PURE__ */ t.default.createElement('button', r({
          key: '0',
          type: 'button',
        }, D), ' ', 'Previous'), I;
      },
    }]), _;
  }(t.default.PureComponent)), jr.NextArrow = /* @__PURE__ */ (function (f) {
    E(_, f);
    const y = M(_);
    function _() {
      return c(this, _), y.apply(this, arguments);
    }
    return u(_, [{
      key: 'clickHandler',
      value(k, C) {
        C && C.preventDefault(), this.props.clickHandler(k, C);
      },
    }, {
      key: 'render',
      value() {
        const k = {
          'slick-arrow': !0,
          'slick-next': !0,
        };
        let C = this.clickHandler.bind(this, {
          message: 'next',
        });
        (0, i.canGoNext)(this.props) || (k['slick-disabled'] = !0, C = null);
        const D = {
          key: '1',
          'data-role': 'none',
          className: (0, e.default)(k),
          style: {
            display: 'block',
          },
          onClick: C,
        };
        const N = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount,
        };
        let I;
        return this.props.nextArrow ? I = /* @__PURE__ */ t.default.cloneElement(this.props.nextArrow, o(o({}, D), N)) : I = /* @__PURE__ */ t.default.createElement('button', r({
          key: '1',
          type: 'button',
        }, D), ' ', 'Next'), I;
      },
    }]), _;
  }(t.default.PureComponent)), jr;
}
const $m = (function () {
  if (typeof Map < 'u') return Map;
  function h(t, e) {
    let i = -1;
    return t.some((s, r) => (s[0] === e ? (i = r, !0) : !1)), i;
  }
  return (
    /** @class */
    (function () {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, 'size', {
        /**
         * @returns {boolean}
         */
        get() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0,
      }), t.prototype.get = function (e) {
        const i = h(this.__entries__, e); const
          s = this.__entries__[i];
        return s && s[1];
      }, t.prototype.set = function (e, i) {
        const s = h(this.__entries__, e);
        ~s ? this.__entries__[s][1] = i : this.__entries__.push([e, i]);
      }, t.prototype.delete = function (e) {
        const i = this.__entries__; const
          s = h(i, e);
        ~s && i.splice(s, 1);
      }, t.prototype.has = function (e) {
        return !!~h(this.__entries__, e);
      }, t.prototype.clear = function () {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function (e, i) {
        i === void 0 && (i = null);
        for (let s = 0, r = this.__entries__; s < r.length; s++) {
          const a = r[s];
          e.call(i, a[1], a[0]);
        }
      }, t;
    })()
  );
}());
const jf = typeof window < 'u' && typeof document < 'u' && window.document === document;
const Pu = (function () {
  return typeof global < 'u' && global.Math === Math ? global : typeof self < 'u' && self.Math === Math ? self : typeof window < 'u' && window.Math === Math ? window : Function('return this')();
}());
const Fv = (function () {
  return typeof requestAnimationFrame === 'function' ? requestAnimationFrame.bind(Pu) : function (h) {
    return setTimeout(() => h(Date.now()), 1e3 / 60);
  };
}());
const Nv = 2;
function Bv(h, t) {
  let e = !1; let i = !1; let
    s = 0;
  function r() {
    e && (e = !1, h()), i && o();
  }
  function a() {
    Fv(r);
  }
  function o() {
    const l = Date.now();
    if (e) {
      if (l - s < Nv) return;
      i = !0;
    } else e = !0, i = !1, setTimeout(a, t);
    s = l;
  }
  return o;
}
const Hv = 20; const jv = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; const zv = typeof MutationObserver < 'u'; const Uv = (
  /** @class */
  (function () {
    function h() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Bv(this.refresh.bind(this), Hv);
    }
    return h.prototype.addObserver = function (t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, h.prototype.removeObserver = function (t) {
      const e = this.observers_; const
        i = e.indexOf(t);
      ~i && e.splice(i, 1), !e.length && this.connected_ && this.disconnect_();
    }, h.prototype.refresh = function () {
      const t = this.updateObservers_();
      t && this.refresh();
    }, h.prototype.updateObservers_ = function () {
      const t = this.observers_.filter((e) => (e.gatherActive(), e.hasActive()));
      return t.forEach((e) => e.broadcastActive()), t.length > 0;
    }, h.prototype.connect_ = function () {
      !jf || this.connected_ || (document.addEventListener('transitionend', this.onTransitionEnd_), window.addEventListener('resize', this.refresh), zv ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0,
      })) : (document.addEventListener('DOMSubtreeModified', this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, h.prototype.disconnect_ = function () {
      !jf || !this.connected_ || (document.removeEventListener('transitionend', this.onTransitionEnd_), window.removeEventListener('resize', this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener('DOMSubtreeModified', this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, h.prototype.onTransitionEnd_ = function (t) {
      const e = t.propertyName; const i = e === void 0 ? '' : e; const
        s = jv.some((r) => !!~i.indexOf(r));
      s && this.refresh();
    }, h.getInstance = function () {
      return this.instance_ || (this.instance_ = new h()), this.instance_;
    }, h.instance_ = null, h;
  })()
); const Wm = (function (h, t) {
  for (let e = 0, i = Object.keys(t); e < i.length; e++) {
    const s = i[e];
    Object.defineProperty(h, s, {
      value: t[s],
      enumerable: !1,
      writable: !1,
      configurable: !0,
    });
  }
  return h;
}); const sh = (function (h) {
  const t = h && h.ownerDocument && h.ownerDocument.defaultView;
  return t || Pu;
}); const
  Gm = hf(0, 0, 0, 0);
function ku(h) {
  return parseFloat(h) || 0;
}
function qg(h) {
  for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
  return t.reduce((i, s) => {
    const r = h[`border-${s}-width`];
    return i + ku(r);
  }, 0);
}
function $v(h) {
  for (var t = ['top', 'right', 'bottom', 'left'], e = {}, i = 0, s = t; i < s.length; i++) {
    const r = s[i]; const
      a = h[`padding-${r}`];
    e[r] = ku(a);
  }
  return e;
}
function Wv(h) {
  const t = h.getBBox();
  return hf(0, 0, t.width, t.height);
}
function Gv(h) {
  const t = h.clientWidth; const
    e = h.clientHeight;
  if (!t && !e) return Gm;
  const i = sh(h).getComputedStyle(h); const s = $v(i); const r = s.left + s.right; const a = s.top + s.bottom; let o = ku(i.width); let
    l = ku(i.height);
  if (i.boxSizing === 'border-box' && (Math.round(o + r) !== t && (o -= qg(i, 'left', 'right') + r), Math.round(l + a) !== e && (l -= qg(i, 'top', 'bottom') + a)), !qv(h)) {
    const c = Math.round(o + r) - t; const
      d = Math.round(l + a) - e;
    Math.abs(c) !== 1 && (o -= c), Math.abs(d) !== 1 && (l -= d);
  }
  return hf(s.left, s.top, o, l);
}
const Vv = /* @__PURE__ */ (function () {
  return typeof SVGGraphicsElement < 'u' ? function (h) {
    return h instanceof sh(h).SVGGraphicsElement;
  } : function (h) {
    return h instanceof sh(h).SVGElement && typeof h.getBBox === 'function';
  };
}());
function qv(h) {
  return h === sh(h).document.documentElement;
}
function Xv(h) {
  return jf ? Vv(h) ? Wv(h) : Gv(h) : Gm;
}
function Yv(h) {
  const t = h.x; const e = h.y; const i = h.width; const s = h.height; const r = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object; const
    a = Object.create(r.prototype);
  return Wm(a, {
    x: t,
    y: e,
    width: i,
    height: s,
    top: e,
    right: t + i,
    bottom: s + e,
    left: t,
  }), a;
}
function hf(h, t, e, i) {
  return {
    x: h, y: t, width: e, height: i,
  };
}
const Kv = (
  /** @class */
  (function () {
    function h(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = hf(0, 0, 0, 0), this.target = t;
    }
    return h.prototype.isActive = function () {
      const t = Xv(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, h.prototype.broadcastRect = function () {
      const t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, h;
  })()
); const Jv = (
  /** @class */
  /* @__PURE__ */ (function () {
    function h(t, e) {
      const i = Yv(e);
      Wm(this, { target: t, contentRect: i });
    }
    return h;
  })()
); const Qv = (
  /** @class */
  (function () {
    function h(t, e, i) {
      if (this.activeObservations_ = [], this.observations_ = new $m(), typeof t !== 'function') throw new TypeError('The callback provided as parameter 1 is not a function.');
      this.callback_ = t, this.controller_ = e, this.callbackCtx_ = i;
    }
    return h.prototype.observe = function (t) {
      if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
      if (!(typeof Element > 'u' || !(Element instanceof Object))) {
        if (!(t instanceof sh(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        const e = this.observations_;
        e.has(t) || (e.set(t, new Kv(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, h.prototype.unobserve = function (t) {
      if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
      if (!(typeof Element > 'u' || !(Element instanceof Object))) {
        if (!(t instanceof sh(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        const e = this.observations_;
        e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this));
      }
    }, h.prototype.disconnect = function () {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, h.prototype.gatherActive = function () {
      const t = this;
      this.clearActive(), this.observations_.forEach((e) => {
        e.isActive() && t.activeObservations_.push(e);
      });
    }, h.prototype.broadcastActive = function () {
      if (this.hasActive()) {
        const t = this.callbackCtx_; const
          e = this.activeObservations_.map((i) => new Jv(i.target, i.broadcastRect()));
        this.callback_.call(t, e, t), this.clearActive();
      }
    }, h.prototype.clearActive = function () {
      this.activeObservations_.splice(0);
    }, h.prototype.hasActive = function () {
      return this.activeObservations_.length > 0;
    }, h;
  })()
); const Vm = typeof WeakMap < 'u' ? /* @__PURE__ */ new WeakMap() : new $m(); const
  qm = (
  /** @class */
  /* @__PURE__ */ (function () {
      function h(t) {
        if (!(this instanceof h)) throw new TypeError('Cannot call a class as a function.');
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
        const e = Uv.getInstance(); const
          i = new Qv(t, e, this);
        Vm.set(this, i);
      }
      return h;
    })()
  );
[
  'observe',
  'unobserve',
  'disconnect',
].forEach((h) => {
  qm.prototype[h] = function () {
    let t;
    return (t = Vm.get(this))[h].apply(t, arguments);
  };
});
const Zv = (function () {
  return typeof Pu.ResizeObserver < 'u' ? Pu.ResizeObserver : qm;
}());
const tw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zv,
}, Symbol.toStringTag, { value: 'Module' })); const
  ew = /* @__PURE__ */ Rv(tw);
let Xg;
function iw() {
  if (Xg) return hh;
  Xg = 1, Object.defineProperty(hh, '__esModule', {
    value: !0,
  }), hh.InnerSlider = void 0;
  const h = c(Gi); const t = c(Mv()); const e = c(Lv()); const i = c(lf()); const s = Td(); const r = Dv(); const a = Ov(); const o = Iv(); const
    l = c(ew);
  function c(I) {
    return I && I.__esModule ? I : { default: I };
  }
  function d(I) {
    '@babel/helpers - typeof';

    return d = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (B) {
      return typeof B;
    } : function (B) {
      return B && typeof Symbol === 'function' && B.constructor === Symbol && B !== Symbol.prototype ? 'symbol' : typeof B;
    }, d(I);
  }
  function u() {
    return u = Object.assign ? Object.assign.bind() : function (I) {
      for (let B = 1; B < arguments.length; B++) {
        const j = arguments[B];
        for (const z in j) ({}).hasOwnProperty.call(j, z) && (I[z] = j[z]);
      }
      return I;
    }, u.apply(null, arguments);
  }
  function g(I, B) {
    if (I == null) return {};
    let j; let z; const
      w = b(I, B);
    if (Object.getOwnPropertySymbols) {
      const K = Object.getOwnPropertySymbols(I);
      for (z = 0; z < K.length; z++) j = K[z], B.includes(j) || {}.propertyIsEnumerable.call(I, j) && (w[j] = I[j]);
    }
    return w;
  }
  function b(I, B) {
    if (I == null) return {};
    const j = {};
    for (const z in I) {
      if ({}.hasOwnProperty.call(I, z)) {
        if (B.includes(z)) continue;
        j[z] = I[z];
      }
    }
    return j;
  }
  function E(I, B) {
    const j = Object.keys(I);
    if (Object.getOwnPropertySymbols) {
      let z = Object.getOwnPropertySymbols(I);
      B && (z = z.filter((w) => Object.getOwnPropertyDescriptor(I, w).enumerable)), j.push.apply(j, z);
    }
    return j;
  }
  function S(I) {
    for (let B = 1; B < arguments.length; B++) {
      var j = arguments[B] != null ? arguments[B] : {};
      B % 2 ? E(Object(j), !0).forEach((z) => {
        C(I, z, j[z]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(I, Object.getOwnPropertyDescriptors(j)) : E(Object(j)).forEach((z) => {
        Object.defineProperty(I, z, Object.getOwnPropertyDescriptor(j, z));
      });
    }
    return I;
  }
  function M(I, B) {
    if (!(I instanceof B)) throw new TypeError('Cannot call a class as a function');
  }
  function T(I, B) {
    for (let j = 0; j < B.length; j++) {
      const z = B[j];
      z.enumerable = z.enumerable || !1, z.configurable = !0, 'value' in z && (z.writable = !0), Object.defineProperty(I, D(z.key), z);
    }
  }
  function L(I, B, j) {
    return B && T(I.prototype, B), Object.defineProperty(I, 'prototype', { writable: !1 }), I;
  }
  function R(I, B) {
    if (typeof B !== 'function' && B !== null) throw new TypeError('Super expression must either be null or a function');
    I.prototype = Object.create(B && B.prototype, { constructor: { value: I, writable: !0, configurable: !0 } }), Object.defineProperty(I, 'prototype', { writable: !1 }), B && p(I, B);
  }
  function p(I, B) {
    return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (j, z) {
      return j.__proto__ = z, j;
    }, p(I, B);
  }
  function f(I) {
    const B = P();
    return function () {
      let j; const
        z = k(I);
      if (B) {
        const w = k(this).constructor;
        j = Reflect.construct(z, arguments, w);
      } else j = z.apply(this, arguments);
      return y(this, j);
    };
  }
  function y(I, B) {
    if (B && (d(B) == 'object' || typeof B === 'function')) return B;
    if (B !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return _(I);
  }
  function _(I) {
    if (I === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return I;
  }
  function P() {
    try {
      var I = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
      }));
    } catch {
    }
    return (P = function () {
      return !!I;
    })();
  }
  function k(I) {
    return k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (B) {
      return B.__proto__ || Object.getPrototypeOf(B);
    }, k(I);
  }
  function C(I, B, j) {
    return (B = D(B)) in I ? Object.defineProperty(I, B, {
      value: j, enumerable: !0, configurable: !0, writable: !0,
    }) : I[B] = j, I;
  }
  function D(I) {
    const B = N(I, 'string');
    return d(B) == 'symbol' ? B : `${B}`;
  }
  function N(I, B) {
    if (d(I) != 'object' || !I) return I;
    const j = I[Symbol.toPrimitive];
    if (j !== void 0) {
      const z = j.call(I, B);
      if (d(z) != 'object') return z;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (B === 'string' ? String : Number)(I);
  }
  return hh.InnerSlider = /* @__PURE__ */ (function (I) {
    R(j, I);
    const B = f(j);
    function j(z) {
      let w;
      M(this, j), w = B.call(this, z), C(_(w), 'listRefHandler', (F) => w.list = F), C(_(w), 'trackRefHandler', (F) => w.track = F), C(_(w), 'adaptHeight', () => {
        if (w.props.adaptiveHeight && w.list) {
          const F = w.list.querySelector('[data-index="'.concat(w.state.currentSlide, '"]'));
          w.list.style.height = `${(0, s.getHeight)(F)}px`;
        }
      }), C(_(w), 'componentDidMount', () => {
        if (w.props.onInit && w.props.onInit(), w.props.lazyLoad) {
          const F = (0, s.getOnDemandLazySlides)(S(S({}, w.props), w.state));
          F.length > 0 && (w.setState((O) => ({
            lazyLoadedList: O.lazyLoadedList.concat(F),
          })), w.props.onLazyLoad && w.props.onLazyLoad(F));
        }
        const x = S({
          listRef: w.list,
          trackRef: w.track,
        }, w.props);
        w.updateState(x, !0, () => {
          w.adaptHeight(), w.props.autoplay && w.autoPlay('update');
        }), w.props.lazyLoad === 'progressive' && (w.lazyLoadTimer = setInterval(w.progressiveLazyLoad, 1e3)), w.ro = new l.default(() => {
          w.state.animating ? (w.onWindowResized(!1), w.callbackTimers.push(setTimeout(() => w.onWindowResized(), w.props.speed))) : w.onWindowResized();
        }), w.ro.observe(w.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll('.slick-slide'), (O) => {
          O.onfocus = w.props.pauseOnFocus ? w.onSlideFocus : null, O.onblur = w.props.pauseOnFocus ? w.onSlideBlur : null;
        }), window.addEventListener ? window.addEventListener('resize', w.onWindowResized) : window.attachEvent('onresize', w.onWindowResized);
      }), C(_(w), 'componentWillUnmount', () => {
        w.animationEndCallback && clearTimeout(w.animationEndCallback), w.lazyLoadTimer && clearInterval(w.lazyLoadTimer), w.callbackTimers.length && (w.callbackTimers.forEach((F) => clearTimeout(F)), w.callbackTimers = []), window.addEventListener ? window.removeEventListener('resize', w.onWindowResized) : window.detachEvent('onresize', w.onWindowResized), w.autoplayTimer && clearInterval(w.autoplayTimer), w.ro.disconnect();
      }), C(_(w), 'componentDidUpdate', (F) => {
        if (w.checkImagesLoad(), w.props.onReInit && w.props.onReInit(), w.props.lazyLoad) {
          const x = (0, s.getOnDemandLazySlides)(S(S({}, w.props), w.state));
          x.length > 0 && (w.setState(($) => ({
            lazyLoadedList: $.lazyLoadedList.concat(x),
          })), w.props.onLazyLoad && w.props.onLazyLoad(x));
        }
        w.adaptHeight();
        const O = S(S({
          listRef: w.list,
          trackRef: w.track,
        }, w.props), w.state); const
          H = w.didPropsChange(F);
        H && w.updateState(O, H, () => {
          w.state.currentSlide >= h.default.Children.count(w.props.children) && w.changeSlide({
            message: 'index',
            index: h.default.Children.count(w.props.children) - w.props.slidesToShow,
            currentSlide: w.state.currentSlide,
          }), w.props.autoplay ? w.autoPlay('update') : w.pause('paused');
        });
      }), C(_(w), 'onWindowResized', (F) => {
        w.debouncedResize && w.debouncedResize.cancel(), w.debouncedResize = (0, e.default)(() => w.resizeWindow(F), 50), w.debouncedResize();
      }), C(_(w), 'resizeWindow', function () {
        const F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0; const
          x = !!(w.track && w.track.node);
        if (x) {
          const O = S(S({
            listRef: w.list,
            trackRef: w.track,
          }, w.props), w.state);
          w.updateState(O, F, () => {
            w.props.autoplay ? w.autoPlay('update') : w.pause('paused');
          }), w.setState({
            animating: !1,
          }), clearTimeout(w.animationEndCallback), delete w.animationEndCallback;
        }
      }), C(_(w), 'updateState', (F, x, O) => {
        const H = (0, s.initializedState)(F);
        F = S(S(S({}, F), H), {}, {
          slideIndex: H.currentSlide,
        });
        const $ = (0, s.getTrackLeft)(F);
        F = S(S({}, F), {}, {
          left: $,
        });
        const U = (0, s.getTrackCSS)(F);
        (x || h.default.Children.count(w.props.children) !== h.default.Children.count(F.children)) && (H.trackStyle = U), w.setState(H, O);
      }), C(_(w), 'ssrInit', () => {
        if (w.props.variableWidth) {
          let F = 0; let x = 0; const O = []; const H = (0, s.getPreClones)(S(S(S({}, w.props), w.state), {}, {
            slideCount: w.props.children.length,
          })); const
            $ = (0, s.getPostClones)(S(S(S({}, w.props), w.state), {}, {
              slideCount: w.props.children.length,
            }));
          w.props.children.forEach((St) => {
            O.push(St.props.style.width), F += St.props.style.width;
          });
          for (let U = 0; U < H; U++) x += O[O.length - 1 - U], F += O[O.length - 1 - U];
          for (let q = 0; q < $; q++) F += O[q];
          for (let G = 0; G < w.state.currentSlide; G++) x += O[G];
          const W = {
            width: `${F}px`,
            left: `${-x}px`,
          };
          if (w.props.centerMode) {
            const ht = ''.concat(O[w.state.currentSlide], 'px');
            W.left = 'calc('.concat(W.left, ' + (100% - ').concat(ht, ') / 2 ) ');
          }
          return {
            trackStyle: W,
          };
        }
        const ct = h.default.Children.count(w.props.children); const dt = S(S(S({}, w.props), w.state), {}, {
          slideCount: ct,
        }); const ut = (0, s.getPreClones)(dt) + (0, s.getPostClones)(dt) + ct; const rt = 100 / w.props.slidesToShow * ut; const st = 100 / ut; let
          nt = -st * ((0, s.getPreClones)(dt) + w.state.currentSlide) * rt / 100;
        w.props.centerMode && (nt += (100 - st * rt / 100) / 2);
        const at = {
          width: `${rt}%`,
          left: `${nt}%`,
        };
        return {
          slideWidth: `${st}%`,
          trackStyle: at,
        };
      }), C(_(w), 'checkImagesLoad', () => {
        const F = w.list && w.list.querySelectorAll && w.list.querySelectorAll('.slick-slide img') || []; const x = F.length; let
          O = 0;
        Array.prototype.forEach.call(F, (H) => {
          const $ = function () {
            return ++O && O >= x && w.onWindowResized();
          };
          if (!H.onclick) {
            H.onclick = function () {
              return H.parentNode.focus();
            };
          } else {
            const U = H.onclick;
            H.onclick = function (q) {
              U(q), H.parentNode.focus();
            };
          }
          H.onload || (w.props.lazyLoad ? H.onload = function () {
            w.adaptHeight(), w.callbackTimers.push(setTimeout(w.onWindowResized, w.props.speed));
          } : (H.onload = $, H.onerror = function () {
            $(), w.props.onLazyLoadError && w.props.onLazyLoadError();
          }));
        });
      }), C(_(w), 'progressiveLazyLoad', () => {
        for (var F = [], x = S(S({}, w.props), w.state), O = w.state.currentSlide; O < w.state.slideCount + (0, s.getPostClones)(x); O++) {
          if (w.state.lazyLoadedList.indexOf(O) < 0) {
            F.push(O);
            break;
          }
        }
        for (let H = w.state.currentSlide - 1; H >= -(0, s.getPreClones)(x); H--) {
          if (w.state.lazyLoadedList.indexOf(H) < 0) {
            F.push(H);
            break;
          }
        }
        F.length > 0 ? (w.setState(($) => ({
          lazyLoadedList: $.lazyLoadedList.concat(F),
        })), w.props.onLazyLoad && w.props.onLazyLoad(F)) : w.lazyLoadTimer && (clearInterval(w.lazyLoadTimer), delete w.lazyLoadTimer);
      }), C(_(w), 'slideHandler', function (F) {
        const x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; const O = w.props; const H = O.asNavFor; const $ = O.beforeChange; const U = O.onLazyLoad; const q = O.speed; const G = O.afterChange; const W = w.state.currentSlide; const ht = (0, s.slideHandler)(S(S(S({
          index: F,
        }, w.props), w.state), {}, {
          trackRef: w.track,
          useCSS: w.props.useCSS && !x,
        })); const ct = ht.state; const
          dt = ht.nextState;
        if (ct) {
          $ && $(W, ct.currentSlide);
          const ut = ct.lazyLoadedList.filter((rt) => w.state.lazyLoadedList.indexOf(rt) < 0);
          U && ut.length > 0 && U(ut), !w.props.waitForAnimate && w.animationEndCallback && (clearTimeout(w.animationEndCallback), G && G(W), delete w.animationEndCallback), w.setState(ct, () => {
            H && w.asNavForIndex !== F && (w.asNavForIndex = F, H.innerSlider.slideHandler(F)), dt && (w.animationEndCallback = setTimeout(() => {
              const rt = dt.animating; const
                st = g(dt, ['animating']);
              w.setState(st, () => {
                w.callbackTimers.push(setTimeout(() => w.setState({
                  animating: rt,
                }), 10)), G && G(ct.currentSlide), delete w.animationEndCallback;
              });
            }, q));
          });
        }
      }), C(_(w), 'changeSlide', function (F) {
        const x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; const O = S(S({}, w.props), w.state); const
          H = (0, s.changeSlide)(O, F);
        if (!(H !== 0 && !H) && (x === !0 ? w.slideHandler(H, x) : w.slideHandler(H), w.props.autoplay && w.autoPlay('update'), w.props.focusOnSelect)) {
          const $ = w.list.querySelectorAll('.slick-current');
          $[0] && $[0].focus();
        }
      }), C(_(w), 'clickHandler', (F) => {
        w.clickable === !1 && (F.stopPropagation(), F.preventDefault()), w.clickable = !0;
      }), C(_(w), 'keyHandler', (F) => {
        const x = (0, s.keyHandler)(F, w.props.accessibility, w.props.rtl);
        x !== '' && w.changeSlide({
          message: x,
        });
      }), C(_(w), 'selectHandler', (F) => {
        w.changeSlide(F);
      }), C(_(w), 'disableBodyScroll', () => {
        const F = function (O) {
          O = O || window.event, O.preventDefault && O.preventDefault(), O.returnValue = !1;
        };
        window.ontouchmove = F;
      }), C(_(w), 'enableBodyScroll', () => {
        window.ontouchmove = null;
      }), C(_(w), 'swipeStart', (F) => {
        w.props.verticalSwiping && w.disableBodyScroll();
        const x = (0, s.swipeStart)(F, w.props.swipe, w.props.draggable);
        x !== '' && w.setState(x);
      }), C(_(w), 'swipeMove', (F) => {
        const x = (0, s.swipeMove)(F, S(S(S({}, w.props), w.state), {}, {
          trackRef: w.track,
          listRef: w.list,
          slideIndex: w.state.currentSlide,
        }));
        x && (x.swiping && (w.clickable = !1), w.setState(x));
      }), C(_(w), 'swipeEnd', (F) => {
        const x = (0, s.swipeEnd)(F, S(S(S({}, w.props), w.state), {}, {
          trackRef: w.track,
          listRef: w.list,
          slideIndex: w.state.currentSlide,
        }));
        if (x) {
          const O = x.triggerSlideHandler;
          delete x.triggerSlideHandler, w.setState(x), O !== void 0 && (w.slideHandler(O), w.props.verticalSwiping && w.enableBodyScroll());
        }
      }), C(_(w), 'touchEnd', (F) => {
        w.swipeEnd(F), w.clickable = !0;
      }), C(_(w), 'slickPrev', () => {
        w.callbackTimers.push(setTimeout(() => w.changeSlide({
          message: 'previous',
        }), 0));
      }), C(_(w), 'slickNext', () => {
        w.callbackTimers.push(setTimeout(() => w.changeSlide({
          message: 'next',
        }), 0));
      }), C(_(w), 'slickGoTo', function (F) {
        const x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (F = Number(F), isNaN(F)) return '';
        w.callbackTimers.push(setTimeout(() => w.changeSlide({
          message: 'index',
          index: F,
          currentSlide: w.state.currentSlide,
        }, x), 0));
      }), C(_(w), 'play', () => {
        let F;
        if (w.props.rtl) F = w.state.currentSlide - w.props.slidesToScroll;
        else if ((0, s.canGoNext)(S(S({}, w.props), w.state))) F = w.state.currentSlide + w.props.slidesToScroll;
        else return !1;
        w.slideHandler(F);
      }), C(_(w), 'autoPlay', (F) => {
        w.autoplayTimer && clearInterval(w.autoplayTimer);
        const x = w.state.autoplaying;
        if (F === 'update') {
          if (x === 'hovered' || x === 'focused' || x === 'paused') return;
        } else if (F === 'leave') {
          if (x === 'paused' || x === 'focused') return;
        } else if (F === 'blur' && (x === 'paused' || x === 'hovered')) return;
        w.autoplayTimer = setInterval(w.play, w.props.autoplaySpeed + 50), w.setState({
          autoplaying: 'playing',
        });
      }), C(_(w), 'pause', (F) => {
        w.autoplayTimer && (clearInterval(w.autoplayTimer), w.autoplayTimer = null);
        const x = w.state.autoplaying;
        F === 'paused' ? w.setState({
          autoplaying: 'paused',
        }) : F === 'focused' ? (x === 'hovered' || x === 'playing') && w.setState({
          autoplaying: 'focused',
        }) : x === 'playing' && w.setState({
          autoplaying: 'hovered',
        });
      }), C(_(w), 'onDotsOver', () => w.props.autoplay && w.pause('hovered')), C(_(w), 'onDotsLeave', () => w.props.autoplay && w.state.autoplaying === 'hovered' && w.autoPlay('leave')), C(_(w), 'onTrackOver', () => w.props.autoplay && w.pause('hovered')), C(_(w), 'onTrackLeave', () => w.props.autoplay && w.state.autoplaying === 'hovered' && w.autoPlay('leave')), C(_(w), 'onSlideFocus', () => w.props.autoplay && w.pause('focused')), C(_(w), 'onSlideBlur', () => w.props.autoplay && w.state.autoplaying === 'focused' && w.autoPlay('blur')), C(_(w), 'render', () => {
        const F = (0, i.default)('slick-slider', w.props.className, {
          'slick-vertical': w.props.vertical,
          'slick-initialized': !0,
        }); const x = S(S({}, w.props), w.state); let O = (0, s.extractObject)(x, ['fade', 'cssEase', 'speed', 'infinite', 'centerMode', 'focusOnSelect', 'currentSlide', 'lazyLoad', 'lazyLoadedList', 'rtl', 'slideWidth', 'slideHeight', 'listHeight', 'vertical', 'slidesToShow', 'slidesToScroll', 'slideCount', 'trackStyle', 'variableWidth', 'unslick', 'centerPadding', 'targetSlide', 'useCSS']); const
          H = w.props.pauseOnHover;
        O = S(S({}, O), {}, {
          onMouseEnter: H ? w.onTrackOver : null,
          onMouseLeave: H ? w.onTrackLeave : null,
          onMouseOver: H ? w.onTrackOver : null,
          focusOnSelect: w.props.focusOnSelect && w.clickable ? w.selectHandler : null,
        });
        let $;
        if (w.props.dots === !0 && w.state.slideCount >= w.props.slidesToShow) {
          let U = (0, s.extractObject)(x, ['dotsClass', 'slideCount', 'slidesToShow', 'currentSlide', 'slidesToScroll', 'clickHandler', 'children', 'customPaging', 'infinite', 'appendDots']); const
            q = w.props.pauseOnDotsHover;
          U = S(S({}, U), {}, {
            clickHandler: w.changeSlide,
            onMouseEnter: q ? w.onDotsLeave : null,
            onMouseOver: q ? w.onDotsOver : null,
            onMouseLeave: q ? w.onDotsLeave : null,
          }), $ = /* @__PURE__ */ h.default.createElement(a.Dots, U);
        }
        let G; let W; const
          ht = (0, s.extractObject)(x, ['infinite', 'centerMode', 'currentSlide', 'slideCount', 'slidesToShow', 'prevArrow', 'nextArrow']);
        ht.clickHandler = w.changeSlide, w.props.arrows && (G = /* @__PURE__ */ h.default.createElement(o.PrevArrow, ht), W = /* @__PURE__ */ h.default.createElement(o.NextArrow, ht));
        let ct = null;
        w.props.vertical && (ct = {
          height: w.state.listHeight,
        });
        let dt = null;
        w.props.vertical === !1 ? w.props.centerMode === !0 && (dt = {
          padding: `0px ${w.props.centerPadding}`,
        }) : w.props.centerMode === !0 && (dt = {
          padding: `${w.props.centerPadding} 0px`,
        });
        const ut = S(S({}, ct), dt); const rt = w.props.touchMove; let st = {
          className: 'slick-list',
          style: ut,
          onClick: w.clickHandler,
          onMouseDown: rt ? w.swipeStart : null,
          onMouseMove: w.state.dragging && rt ? w.swipeMove : null,
          onMouseUp: rt ? w.swipeEnd : null,
          onMouseLeave: w.state.dragging && rt ? w.swipeEnd : null,
          onTouchStart: rt ? w.swipeStart : null,
          onTouchMove: w.state.dragging && rt ? w.swipeMove : null,
          onTouchEnd: rt ? w.touchEnd : null,
          onTouchCancel: w.state.dragging && rt ? w.swipeEnd : null,
          onKeyDown: w.props.accessibility ? w.keyHandler : null,
        }; let
          nt = {
            className: F,
            dir: 'ltr',
            style: w.props.style,
          };
        return w.props.unslick && (st = {
          className: 'slick-list',
        }, nt = {
          className: F,
          style: w.props.style,
        }), /* @__PURE__ */ h.default.createElement('div', nt, w.props.unslick ? '' : G, /* @__PURE__ */ h.default.createElement('div', u({
          ref: w.listRefHandler,
        }, st), /* @__PURE__ */ h.default.createElement(r.Track, u({
          ref: w.trackRefHandler,
        }, O), w.props.children)), w.props.unslick ? '' : W, w.props.unslick ? '' : $);
      }), w.list = null, w.track = null, w.state = S(S({}, t.default), {}, {
        currentSlide: w.props.initialSlide,
        targetSlide: w.props.initialSlide ? w.props.initialSlide : 0,
        slideCount: h.default.Children.count(w.props.children),
      }), w.callbackTimers = [], w.clickable = !0, w.debouncedResize = null;
      const K = w.ssrInit();
      return w.state = S(S({}, w.state), K), w;
    }
    return L(j, [{
      key: 'didPropsChange',
      value(w) {
        for (var K = !1, F = 0, x = Object.keys(this.props); F < x.length; F++) {
          const O = x[F];
          if (!w.hasOwnProperty(O)) {
            K = !0;
            break;
          }
          if (!(d(w[O]) === 'object' || typeof w[O] === 'function' || isNaN(w[O])) && w[O] !== this.props[O]) {
            K = !0;
            break;
          }
        }
        return K || h.default.Children.count(this.props.children) !== h.default.Children.count(w.children);
      },
    }]), j;
  }(h.default.Component)), hh;
}
let Pf; let
  Yg;
function sw() {
  if (Yg) return Pf;
  Yg = 1;
  const h = function (t) {
    return t.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`).toLowerCase();
  };
  return Pf = h, Pf;
}
let kf; let
  Kg;
function nw() {
  if (Kg) return kf;
  Kg = 1;
  const h = sw(); const t = function (s) {
    const r = /[height|width]$/;
    return r.test(s);
  }; const e = function (s) {
    let r = '';
    const a = Object.keys(s);
    return a.forEach((o, l) => {
      let c = s[o];
      o = h(o), t(o) && typeof c === 'number' && (c += 'px'), c === !0 ? r += o : c === !1 ? r += `not ${o}` : r += `(${o}: ${c})`, l < a.length - 1 && (r += ' and ');
    }), r;
  }; const
    i = function (s) {
      let r = '';
      return typeof s === 'string' ? s : s instanceof Array ? (s.forEach((a, o) => {
        r += e(a), o < s.length - 1 && (r += ', ');
      }), r) : e(s);
    };
  return kf = i, kf;
}
let Jg;
function rw() {
  return Jg || (Jg = 1, (function (h) {
    Object.defineProperty(h, '__esModule', {
      value: !0,
    }), h.default = void 0;
    const t = a(Gi); const e = iw(); const i = a(nw()); const s = a(Um()); const
      r = Td();
    function a(P) {
      return P && P.__esModule ? P : { default: P };
    }
    function o(P) {
      '@babel/helpers - typeof';

      return o = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (k) {
        return typeof k;
      } : function (k) {
        return k && typeof Symbol === 'function' && k.constructor === Symbol && k !== Symbol.prototype ? 'symbol' : typeof k;
      }, o(P);
    }
    function l() {
      return l = Object.assign ? Object.assign.bind() : function (P) {
        for (let k = 1; k < arguments.length; k++) {
          const C = arguments[k];
          for (const D in C) ({}).hasOwnProperty.call(C, D) && (P[D] = C[D]);
        }
        return P;
      }, l.apply(null, arguments);
    }
    function c(P, k) {
      const C = Object.keys(P);
      if (Object.getOwnPropertySymbols) {
        let D = Object.getOwnPropertySymbols(P);
        k && (D = D.filter((N) => Object.getOwnPropertyDescriptor(P, N).enumerable)), C.push.apply(C, D);
      }
      return C;
    }
    function d(P) {
      for (let k = 1; k < arguments.length; k++) {
        var C = arguments[k] != null ? arguments[k] : {};
        k % 2 ? c(Object(C), !0).forEach((D) => {
          f(P, D, C[D]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(C)) : c(Object(C)).forEach((D) => {
          Object.defineProperty(P, D, Object.getOwnPropertyDescriptor(C, D));
        });
      }
      return P;
    }
    function u(P, k) {
      if (!(P instanceof k)) throw new TypeError('Cannot call a class as a function');
    }
    function g(P, k) {
      for (let C = 0; C < k.length; C++) {
        const D = k[C];
        D.enumerable = D.enumerable || !1, D.configurable = !0, 'value' in D && (D.writable = !0), Object.defineProperty(P, y(D.key), D);
      }
    }
    function b(P, k, C) {
      return k && g(P.prototype, k), Object.defineProperty(P, 'prototype', { writable: !1 }), P;
    }
    function E(P, k) {
      if (typeof k !== 'function' && k !== null) throw new TypeError('Super expression must either be null or a function');
      P.prototype = Object.create(k && k.prototype, { constructor: { value: P, writable: !0, configurable: !0 } }), Object.defineProperty(P, 'prototype', { writable: !1 }), k && S(P, k);
    }
    function S(P, k) {
      return S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (C, D) {
        return C.__proto__ = D, C;
      }, S(P, k);
    }
    function M(P) {
      const k = R();
      return function () {
        let C; const
          D = p(P);
        if (k) {
          const N = p(this).constructor;
          C = Reflect.construct(D, arguments, N);
        } else C = D.apply(this, arguments);
        return T(this, C);
      };
    }
    function T(P, k) {
      if (k && (o(k) == 'object' || typeof k === 'function')) return k;
      if (k !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
      return L(P);
    }
    function L(P) {
      if (P === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return P;
    }
    function R() {
      try {
        var P = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
        }));
      } catch {
      }
      return (R = function () {
        return !!P;
      })();
    }
    function p(P) {
      return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (k) {
        return k.__proto__ || Object.getPrototypeOf(k);
      }, p(P);
    }
    function f(P, k, C) {
      return (k = y(k)) in P ? Object.defineProperty(P, k, {
        value: C, enumerable: !0, configurable: !0, writable: !0,
      }) : P[k] = C, P;
    }
    function y(P) {
      const k = _(P, 'string');
      return o(k) == 'symbol' ? k : `${k}`;
    }
    function _(P, k) {
      if (o(P) != 'object' || !P) return P;
      const C = P[Symbol.toPrimitive];
      if (C !== void 0) {
        const D = C.call(P, k);
        if (o(D) != 'object') return D;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return (k === 'string' ? String : Number)(P);
    }
    h.default = /* @__PURE__ */ (function (P) {
      E(C, P);
      const k = M(C);
      function C(D) {
        let N;
        return u(this, C), N = k.call(this, D), f(L(N), 'innerSliderRefHandler', (I) => N.innerSlider = I), f(L(N), 'slickPrev', () => N.innerSlider.slickPrev()), f(L(N), 'slickNext', () => N.innerSlider.slickNext()), f(L(N), 'slickGoTo', function (I) {
          const B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return N.innerSlider.slickGoTo(I, B);
        }), f(L(N), 'slickPause', () => N.innerSlider.pause('paused')), f(L(N), 'slickPlay', () => N.innerSlider.autoPlay('play')), N.state = {
          breakpoint: null,
        }, N._responsiveMediaHandlers = [], N;
      }
      return b(C, [{
        key: 'media',
        value(N, I) {
          const B = window.matchMedia(N); const
            j = function (w) {
              const K = w.matches;
              K && I();
            };
          B.addListener(j), this._responsiveMediaHandlers.push({
            mql: B,
            query: N,
            listener: j,
          });
        },
        // handles responsive breakpoints
      }, {
        key: 'componentDidMount',
        value() {
          const N = this;
          if (this.props.responsive) {
            const I = this.props.responsive.map((j) => j.breakpoint);
            I.sort((j, z) => j - z), I.forEach((j, z) => {
              let w;
              z === 0 ? w = (0, i.default)({
                minWidth: 0,
                maxWidth: j,
              }) : w = (0, i.default)({
                minWidth: I[z - 1] + 1,
                maxWidth: j,
              }), (0, r.canUseDOM)() && N.media(w, () => {
                N.setState({
                  breakpoint: j,
                });
              });
            });
            const B = (0, i.default)({
              minWidth: I.slice(-1)[0],
            });
            (0, r.canUseDOM)() && this.media(B, () => {
              N.setState({
                breakpoint: null,
              });
            });
          }
        },
      }, {
        key: 'componentWillUnmount',
        value() {
          this._responsiveMediaHandlers.forEach((N) => {
            N.mql.removeListener(N.listener);
          });
        },
      }, {
        key: 'render',
        value() {
          const N = this; let I; let
            B;
          this.state.breakpoint ? (B = this.props.responsive.filter((U) => U.breakpoint === N.state.breakpoint), I = B[0].settings === 'unslick' ? 'unslick' : d(d(d({}, s.default), this.props), B[0].settings)) : I = d(d({}, s.default), this.props), I.centerMode && (I.slidesToScroll > 1 && process.env.NODE_ENV !== 'production' && console.warn('slidesToScroll should be equal to 1 in centerMode, you are using '.concat(I.slidesToScroll)), I.slidesToScroll = 1), I.fade && (I.slidesToShow > 1 && process.env.NODE_ENV !== 'production' && console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(I.slidesToShow)), I.slidesToScroll > 1 && process.env.NODE_ENV !== 'production' && console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(I.slidesToScroll)), I.slidesToShow = 1, I.slidesToScroll = 1);
          let j = t.default.Children.toArray(this.props.children);
          j = j.filter((U) => (typeof U === 'string' ? !!U.trim() : !!U)), I.variableWidth && (I.rows > 1 || I.slidesPerRow > 1) && (console.warn('variableWidth is not supported in case of rows > 1 or slidesPerRow > 1'), I.variableWidth = !1);
          for (var z = [], w = null, K = 0; K < j.length; K += I.rows * I.slidesPerRow) {
            for (var F = [], x = K; x < K + I.rows * I.slidesPerRow; x += I.slidesPerRow) {
              for (var O = [], H = x; H < x + I.slidesPerRow && (I.variableWidth && j[H].props.style && (w = j[H].props.style.width), !(H >= j.length)); H += 1) {
                O.push(/* @__PURE__ */ t.default.cloneElement(j[H], {
                  key: 100 * K + 10 * x + H,
                  tabIndex: -1,
                  style: {
                    width: ''.concat(100 / I.slidesPerRow, '%'),
                    display: 'inline-block',
                  },
                }));
              }
              F.push(/* @__PURE__ */ t.default.createElement('div', {
                key: 10 * K + x,
              }, O));
            }
            I.variableWidth ? z.push(/* @__PURE__ */ t.default.createElement('div', {
              key: K,
              style: {
                width: w,
              },
            }, F)) : z.push(/* @__PURE__ */ t.default.createElement('div', {
              key: K,
            }, F));
          }
          if (I === 'unslick') {
            const $ = `regular slider ${this.props.className || ''}`;
            return /* @__PURE__ */ t.default.createElement('div', {
              className: $,
            }, j);
          } z.length <= I.slidesToShow && (I.unslick = !0);
          return /* @__PURE__ */ t.default.createElement(e.InnerSlider, l({
            style: this.props.style,
            ref: this.innerSliderRefHandler,
          }, (0, r.filterSettings)(I)), z);
        },
      }]), C;
    }(t.default.Component));
  }(_f))), _f;
}
let Qg;
function aw() {
  return Qg || (Qg = 1, (function (h) {
    Object.defineProperty(h, '__esModule', {
      value: !0,
    }), h.default = void 0;
    const t = e(rw());
    function e(i) {
      return i && i.__esModule ? i : { default: i };
    }
    h.default = t.default;
  }(Af))), Af;
}
const ow = aw();
const lw = /* @__PURE__ */ zm(ow);
function hw({
  cardTitle: h,
  bodyLarge: t,
  bodyDefault: e,
  bodySmall: i,
  iconUrl: s,
  className: r = '',
  ...a
}) {
  const o = `w-full  ${r}`.trim();
  return /* @__PURE__ */ Y('div', {
    className: o,
    ...a,
    ...a.attributes || {},
    children: /* @__PURE__ */ To('div', {
      className: 'flex flex-col gap-textmedia-btn-text--spacing-y text-left items-start',
      children: [
        s && /* @__PURE__ */ Y('div', {
          className: 'flex items-center justify-start',
          children: /* @__PURE__ */ Y(
            'img',
            {
              src: s,
              alt: e || 'Icon',
              className: 'h-100 w-[129px]',
            },
          ),
        }),
        /* @__PURE__ */ To('div', {
          className: 'flex flex-col gap-testimonial-spacing-y',
          children: [
            h && /* @__PURE__ */ Y('p', { className: 'text-headings-h3 font-semibold', children: h }),
            (t || e || i) && /* @__PURE__ */ To('div', {
              className: 'flex flex-col gap-testimonial-spacing-y items-start',
              children: [
                t && /* @__PURE__ */ Y('p', { className: 'text-body-large', children: t }),
                e && /* @__PURE__ */ Y('p', { className: 'text-body-default', children: e }),
                i && /* @__PURE__ */ Y('p', { className: 'text-body-small', children: i }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const cw = Ev(() => Promise.resolve().then(() => mw)); const
  dw = ({
    media: h = 'image',
    // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
    aspect: t = 'default',
    // 'default' | 'rectangle' | 'square'
    objectFit: e = 'cover',
    // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
    imageUrl: i,
    videoUrl: s,
    lottieUrl: r,
    lottieData: a,
    iframeUrl: o,
    flipbookUrl: l,
    title: c,
    className: d = '',
  }) => {
    let y;
    const u = typeof window < 'u' && window.location.origin.indexOf('author') > -1; const g = typeof window < 'u' && window.matchMedia('(prefers-reduced-motion: reduce)').matches; const E = `relative w-full h-full ${t === 'square' ? 'aspect-square' : t === 'rectangle' ? 'aspect-[4/3]' : h === 'video' ? 'aspect-video' : ''}`.trim(); const S = t === 'default' ? `w-full h-full ${d}`.trim() : `absolute inset-0 w-full h-full ${d}`.trim(); const M = 'w-full h-full'; const T = t === 'default' ? `${S}`.trim() : S; const L = e === 'contain' ? 'object-contain' : 'object-cover'; const R = e === 'contain' ? 'xMidYMid meet' : 'xMidYMid slice'; const p = `relative w-full ${d}`.trim(); const
      f = 'w-full min-h-[280px]';
    switch (h) {
      case 'image':
        if (i) {
          return /* @__PURE__ */ Y('div', {
            className: E,
            children: /* @__PURE__ */ Y(
              'img',
              {
                src: i,
                alt: c || 'Media image',
                className: `${L} ${S}`.trim(),
                loading: 'lazy',
              },
            ),
          });
        }
        break;
      case 'video':
        if (s) {
          const _ = s.includes('youtube.com/watch') || s.includes('youtu.be/');
          let P = s;
          _ && (P = `https://www.youtube.com/embed/${s.includes('youtu.be/') ? s.split('youtu.be/')[1].split('?')[0] : (y = s.split('v=')[1]) == null ? void 0 : y.split('&')[0]}`);
          const k = (() => {
            if (!_) return P;
            try {
              const C = new URL(P);
              return C.searchParams.set('autoplay', '0'), C.searchParams.set('mute', '0'), C.searchParams.set('playsinline', '1'), C.searchParams.set('controls', '1'), C.searchParams.set('rel', '0'), C.toString();
            } catch {
              return P.includes('?') ? P.includes('autoplay=') ? P : `${P}&autoplay=0` : `${P}?autoplay=0`;
            }
          })();
          return /* @__PURE__ */ Y('div', {
            className: E,
            children: _ ? /* @__PURE__ */ Y(
              'iframe',
              {
                src: k,
                title: c || 'Video player',
                frameBorder: '0',
                allow: 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
                allowFullScreen: !0,
                className: `${S} ${L}`.trim(),
              },
            ) : /* @__PURE__ */ Y(
              'video',
              {
                className: `${S} ${L}`.trim(),
                autoPlay: !1,
                controls: !0,
                playsInline: !0,
                preload: 'metadata',
                title: c || 'Video player',
                children: /* @__PURE__ */ Y('source', { src: s }),
              },
            ),
          });
        }
        break;
      case 'lottie':
        if (a) {
          return u ? /* @__PURE__ */ Y('div', {
            className: E,
            role: 'img',
            'aria-label': c || 'Animation',
            children: /* @__PURE__ */ Y(
              'div',
              {
                className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${S}`.trim(),
                children: /* @__PURE__ */ Y('div', { className: 'text-center', children: 'Lottie preview' }),
              },
            ),
          }) : /* @__PURE__ */ Y(
            'div',
            {
              className: E,
              role: 'img',
              'aria-label': c || 'Animation',
              children: /* @__PURE__ */ Y('div', {
                className: `${S} overflow-hidden`.trim(),
                children: /* @__PURE__ */ Y(
                  kv,
                  {
                    animationData: a,
                    loop: !g,
                    autoplay: !g,
                    className: M,
                    style: { width: '100%', height: '100%' },
                    rendererSettings: { preserveAspectRatio: R },
                  },
                ),
              }),
            },
          );
        }
        if (r) return /* @__PURE__ */ Y('div', { className: E, children: /* @__PURE__ */ Y('div', { className: 'absolute inset-0 flex items-center justify-center text-body-default text-center p-40', children: 'Loading Lottie animation...' }) });
        break;
      case 'iframe':
        if (o) {
          return /* @__PURE__ */ Y('div', {
            className: E,
            children: /* @__PURE__ */ Y(
              'iframe',
              {
                src: o,
                title: c || 'Iframe content',
                frameBorder: '0',
                className: `${T} ${L}`.trim(),
              },
            ),
          });
        }
        break;
      case 'flipbook':
        if (l) {
          return u ? /* @__PURE__ */ Y('div', {
            className: p,
            role: 'img',
            'aria-label': c || 'Flipbook',
            children: /* @__PURE__ */ Y(
              'div',
              {
                className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${f}`.trim(),
                children: /* @__PURE__ */ Y('div', { className: 'text-center', children: 'Flipbook preview' }),
              },
            ),
          }) : /* @__PURE__ */ Y('div', { className: p, children: /* @__PURE__ */ Y('div', { className: f, children: /* @__PURE__ */ Y(Cv, { fallback: /* @__PURE__ */ Y('div', { children: 'Loading PDF...' }), children: /* @__PURE__ */ Y(cw, { pdfUrl: l, title: c, className: 'w-full' }) }) }) });
        }
        break;
    }
    return /* @__PURE__ */ Y('div', { className: E, children: /* @__PURE__ */ Y('div', { className: `flex items-center justify-center text-body-default text-center p-40 ${t === 'default' ? '' : 'absolute inset-0'}`.trim(), children: h ? `${h.charAt(0).toUpperCase() + h.slice(1)} placeholder` : 'Image/Video/Lottie/iframe' }) });
  };
function dA({
  giftProCardAndTexts: h = [],
  media: t = null,
  align: e = 'left',
  id: i = '',
  className: s = '',
  infinite: r = !1,
}) {
  const a = (u) => ({
    cardTitle: u.cardTitle,
    bodyLarge: u.bodyLarge,
    bodyDefault: u.bodyDefault,
    bodySmall: u.bodySmall,
    imageUrl: u.imageUrl,
    iconUrl: u.iconUrl,
    align: u.align ?? e,
  }); const o = (u, g = '') => (u ? /* @__PURE__ */ Y('div', {
    className: 'relative w-full h-full min-h-0 size-full overflow-hidden',
    children: /* @__PURE__ */ Y('div', {
      className: 'absolute inset-0 w-full h-full',
      children: /* @__PURE__ */ Y(
        dw,
        {
          media: u.type || 'image',
          aspect: 'default',
          imageUrl: u.imageUrl,
          videoUrl: u.videoUrl,
          lottieUrl: u.lottieUrl,
          lottieData: u.lottieData,
          iframeUrl: u.iframeUrl,
          title: u.title || g,
          className: 'w-full h-full object-cover',
        },
      ),
    }),
  }) : null); const l = (u, g) => {
    const b = u.media || t; const E = !!b; const
      S = E ? 'flex-1 min-w-0' : 'w-full';
    return /* @__PURE__ */ To('div', {
      className: 'flex flex-col md:flex-row items-stretch text-gray-950',
      children: [
        E && /* @__PURE__ */ Y('div', { className: 'sm:p-48 md:px-0', children: /* @__PURE__ */ Y('div', { className: 'w-full md:w-[300px] h-[340px] shrink-0 overflow-hidden rounded-[var(--spacing-cards-image--br)]', children: o(b, u.bodyDefault || '') }) }),
        /* @__PURE__ */ Y('div', { className: `flex items-center justify-center pt-40 sm:p-48 ${S}`, children: /* @__PURE__ */ Y(hw, { ...a(u) }) }),
      ],
    }, g);
  }; const
    c = {
      className: 'w-full testimonial-slider',
      dots: !0,
      infinite: r,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: !1,
      arrows: !1,
    };
  if (!h || h.length === 0) return null;
  const d = h.length > 1;
  return /* @__PURE__ */ Y('div', { className: `container ${s}`, id: i, children: d ? /* @__PURE__ */ Y(lw, { ...c, children: h.map((u, g) => /* @__PURE__ */ Y('div', { children: l(u, g) }, g)) }) : l(h[0], 0) });
}
let zf; let Xm; let Uf; let
  Hd;
const uw = async () => {
  if (!Hd) {
    const h = await Promise.resolve().then(() => tA);
    Hd = h.pdfjs, Xm = h.Document, Uf = h.Page, Hd.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${Hd.version}/build/pdf.worker.min.mjs`;
  }
}; const fw = async () => {
  zf || (zf = (await Promise.resolve().then(() => aA)).default);
}; const pw = Nm(({ children: h }, t) => /* @__PURE__ */ Y('div', { ref: t, className: 'w-full h-full overflow-hidden', children: h })); const gw = ({
  pdfUrl: h, title: t, width: e = 280, height: i = 280, className: s = '',
}) => {
  const [r, a] = fo(0); const [o, l] = fo(null); const [c, d] = fo(!0); const [u, g] = fo(i / e); const [b, E] = fo(0); const
    S = Pi(null);
  jt(() => {
    Promise.all([uw(), fw()]).then(() => d(!1)).catch(() => {
      l('Failed to load flipbook');
    });
  }, []), jt(() => {
    const p = S.current;
    if (!p) return;
    const f = new ResizeObserver(([y]) => {
      const _ = Math.floor(y.contentRect.width);
      _ > 0 && E(_);
    });
    return f.observe(p), () => f.disconnect();
  }, [c]);
  const M = b > 0 ? Math.floor(b / 2) : Math.floor(e / 2); const T = Math.round(M * u); const L = zs(async (p) => {
    try {
      const y = (await p.getPage(1)).getViewport({ scale: 1 });
      y != null && y.width && (y != null && y.height) && g(y.height / y.width);
    } catch {
    }
    a(p.numPages || 0);
  }, []); const
    R = zs((p) => {
      l((p == null ? void 0 : p.message) || 'Failed to load PDF');
    }, []);
  return o ? /* @__PURE__ */ Y('div', { className: 'flex items-center justify-center text-body-default text-center p-40', children: 'Failed to load flipbook' }) : c ? /* @__PURE__ */ Y('div', { className: 'flex items-center justify-center text-body-default text-center p-40', children: 'Loading flipbook...' }) : /* @__PURE__ */ Y('div', {
    ref: S,
    className: `w-full ${s}`.trim(),
    children: /* @__PURE__ */ To(
      Xm,
      {
        file: h,
        onLoadSuccess: L,
        onLoadError: R,
        loading: /* @__PURE__ */ Y('div', { className: 'flex items-center justify-center text-body-default text-center p-40', children: 'Loading flipbook...' }),
        children: [
          r === 1 && /* @__PURE__ */ Y(
            'div',
            {
              className: `w-full flex justify-center items-center ${s}`.trim(),
              style: { minHeight: `${T}px` },
              children: /* @__PURE__ */ Y(Uf, {
                pageNumber: 1, width: e, renderTextLayer: !1, renderAnnotationLayer: !1,
              }),
            },
          ),
          r > 1 && /* @__PURE__ */ Y(
            zf,
            {
              width: M,
              height: T,
              size: 'stretch',
              showCover: !0,
              mobileScrollSupport: !1,
              'aria-label': t || 'Flipbook',
              children: Array.from({ length: r }, (p, f) => /* @__PURE__ */ Y(pw, {
                children: /* @__PURE__ */ Y(Uf, {
                  pageNumber: f + 1, width: M, renderTextLayer: !1, renderAnnotationLayer: !1,
                }),
              }, f)),
            },
            `${M}-${T}`,
          ),
        ],
      },
    ),
  });
}; const mw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gw,
}, Symbol.toStringTag, { value: 'Module' })); const Xe = typeof process === 'object' && `${process}` == '[object process]' && !process.versions.nw && !(process.versions.electron && process.type && process.type !== 'browser'); const $f = [1e-3, 0, 0, 1e-3, 0, 0]; const Rf = 1.35; const Ei = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256,
}; const Hs = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3,
}; const Hh = 'pdfjs_internal_editor_'; const ft = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15,
  POPUP: 16,
  SIGNATURE: 101,
  COMMENT: 102,
}; const At = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_THICKNESS: 32,
  HIGHLIGHT_FREE: 33,
  HIGHLIGHT_SHOW_ALL: 34,
  DRAW_STEP: 41,
}; const Ym = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048,
}; const Ee = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4,
}; const Bh = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3,
}; const se = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26,
}; const po = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5,
}; const Pd = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5,
}; const nh = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93,
  rawFillPath: 94,
}; const jd = {
  moveTo: 0,
  lineTo: 1,
  curveTo: 2,
  closePath: 3,
}; const
  Km = {
    NEED_PASSWORD: 1,
    INCORRECT_PASSWORD: 2,
  };
let cf = Pd.WARNINGS;
function yw(h) {
  Number.isInteger(h) && (cf = h);
}
function bw() {
  return cf;
}
function df(h) {
  cf >= Pd.INFOS && console.info(`Info: ${h}`);
}
function pt(h) {
  cf >= Pd.WARNINGS && console.warn(`Warning: ${h}`);
}
function zt(h) {
  throw new Error(h);
}
function _t(h, t) {
  h || zt(t);
}
function vw(h) {
  switch (h == null ? void 0 : h.protocol) {
    case 'http:':
    case 'https:':
    case 'ftp:':
    case 'mailto:':
    case 'tel:':
      return !0;
    default:
      return !1;
  }
}
function mg(h, t = null, e = null) {
  if (!h) return null;
  if (e && typeof h === 'string') {
    if (e.addDefaultProtocol && h.startsWith('www.')) {
      const s = h.match(/\./g);
      (s == null ? void 0 : s.length) >= 2 && (h = `http://${h}`);
    }
    if (e.tryConvertEncoding) {
      try {
        h = xw(h);
      } catch {
      }
    }
  }
  const i = t ? URL.parse(h, t) : URL.parse(h);
  return vw(i) ? i : null;
}
function yg(h, t, e = !1) {
  const i = URL.parse(h);
  return i ? (i.hash = t, i.href) : e && mg(h, 'http://example.com') ? `${h.split('#', 1)[0]}${t ? `#${t}` : ''}` : '';
}
function yt(h, t, e, i = !1) {
  return Object.defineProperty(h, t, {
    value: e,
    enumerable: !i,
    configurable: !0,
    writable: !1,
  }), e;
}
const lo = (function () {
  function t(e, i) {
    this.message = e, this.name = i;
  }
  return t.prototype = new Error(), t.constructor = t, t;
}());
class Zg extends lo {
  constructor(t, e) {
    super(t, 'PasswordException'), this.code = e;
  }
}
class Mf extends lo {
  constructor(t, e) {
    super(t, 'UnknownErrorException'), this.details = e;
  }
}
class Ru extends lo {
  constructor(t) {
    super(t, 'InvalidPDFException');
  }
}
class jh extends lo {
  constructor(t, e, i) {
    super(t, 'ResponseException'), this.status = e, this.missing = i;
  }
}
class ww extends lo {
  constructor(t) {
    super(t, 'FormatError');
  }
}
class Dn extends lo {
  constructor(t) {
    super(t, 'AbortException');
  }
}
function Jm(h) {
  (typeof h !== 'object' || (h == null ? void 0 : h.length) === void 0) && zt('Invalid argument for bytesToString');
  const t = h.length; const
    e = 8192;
  if (t < e) return String.fromCharCode.apply(null, h);
  const i = [];
  for (let s = 0; s < t; s += e) {
    const r = Math.min(s + e, t); const
      a = h.subarray(s, r);
    i.push(String.fromCharCode.apply(null, a));
  }
  return i.join('');
}
function kd(h) {
  typeof h !== 'string' && zt('Invalid argument for stringToBytes');
  const t = h.length; const
    e = new Uint8Array(t);
  for (let i = 0; i < t; ++i) e[i] = h.charCodeAt(i) & 255;
  return e;
}
function Sw(h) {
  return String.fromCharCode(h >> 24 & 255, h >> 16 & 255, h >> 8 & 255, h & 255);
}
function Aw() {
  const h = new Uint8Array(4);
  return h[0] = 1, new Uint32Array(h.buffer, 0, 1)[0] === 1;
}
function _w() {
  try {
    return new Function(''), !0;
  } catch {
    return !1;
  }
}
class _e {
  static get isLittleEndian() {
    return yt(this, 'isLittleEndian', Aw());
  }

  static get isEvalSupported() {
    return yt(this, 'isEvalSupported', _w());
  }

  static get isOffscreenCanvasSupported() {
    return yt(this, 'isOffscreenCanvasSupported', typeof OffscreenCanvas < 'u');
  }

  static get isImageDecoderSupported() {
    return yt(this, 'isImageDecoderSupported', typeof ImageDecoder < 'u');
  }

  static get platform() {
    const {
      platform: t,
      userAgent: e,
    } = navigator;
    return yt(this, 'platform', {
      isAndroid: e.includes('Android'),
      isLinux: t.includes('Linux'),
      isMac: t.includes('Mac'),
      isWindows: t.includes('Win'),
      isFirefox: e.includes('Firefox'),
    });
  }

  static get isCSSRoundSupported() {
    let t; let
      e;
    return yt(this, 'isCSSRoundSupported', (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, 'width: round(1.5px, 1px)'));
  }
}
const Lf = Array.from(Array(256).keys(), (h) => h.toString(16).padStart(2, '0'));
let Mn; let Kd; let
  Wf;
class tt {
  static makeHexColor(t, e, i) {
    return `#${Lf[t]}${Lf[e]}${Lf[i]}`;
  }

  static domMatrixToTransform(t) {
    return [t.a, t.b, t.c, t.d, t.e, t.f];
  }

  static scaleMinMax(t, e) {
    let i;
    t[0] ? (t[0] < 0 && (i = e[0], e[0] = e[2], e[2] = i), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (i = e[1], e[1] = e[3], e[3] = i), e[1] *= t[3], e[3] *= t[3]) : (i = e[0], e[0] = e[1], e[1] = i, i = e[2], e[2] = e[3], e[3] = i, t[1] < 0 && (i = e[1], e[1] = e[3], e[3] = i), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (i = e[0], e[0] = e[2], e[2] = i), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5];
  }

  static transform(t, e) {
    return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
  }

  static multiplyByDOMMatrix(t, e) {
    return [t[0] * e.a + t[2] * e.b, t[1] * e.a + t[3] * e.b, t[0] * e.c + t[2] * e.d, t[1] * e.c + t[3] * e.d, t[0] * e.e + t[2] * e.f + t[4], t[1] * e.e + t[3] * e.f + t[5]];
  }

  static applyTransform(t, e, i = 0) {
    const s = t[i]; const
      r = t[i + 1];
    t[i] = s * e[0] + r * e[2] + e[4], t[i + 1] = s * e[1] + r * e[3] + e[5];
  }

  static applyTransformToBezier(t, e, i = 0) {
    const s = e[0]; const r = e[1]; const a = e[2]; const o = e[3]; const l = e[4]; const
      c = e[5];
    for (let d = 0; d < 6; d += 2) {
      const u = t[i + d]; const
        g = t[i + d + 1];
      t[i + d] = u * s + g * a + l, t[i + d + 1] = u * r + g * o + c;
    }
  }

  static applyInverseTransform(t, e) {
    const i = t[0]; const s = t[1]; const
      r = e[0] * e[3] - e[1] * e[2];
    t[0] = (i * e[3] - s * e[2] + e[2] * e[5] - e[4] * e[3]) / r, t[1] = (-i * e[1] + s * e[0] + e[4] * e[1] - e[5] * e[0]) / r;
  }

  static axialAlignedBoundingBox(t, e, i) {
    const s = e[0]; const r = e[1]; const a = e[2]; const o = e[3]; const l = e[4]; const c = e[5]; const d = t[0]; const u = t[1]; const g = t[2]; const
      b = t[3];
    let E = s * d + l; let S = E; let M = s * g + l; let T = M; let L = o * u + c; let R = L; let p = o * b + c; let
      f = p;
    if (r !== 0 || a !== 0) {
      const y = r * d; const _ = r * g; const P = a * u; const
        k = a * b;
      E += P, T += P, M += k, S += k, L += y, f += y, p += _, R += _;
    }
    i[0] = Math.min(i[0], E, M, S, T), i[1] = Math.min(i[1], L, p, R, f), i[2] = Math.max(i[2], E, M, S, T), i[3] = Math.max(i[3], L, p, R, f);
  }

  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }

  static singularValueDecompose2dScale(t, e) {
    const i = t[0]; const s = t[1]; const r = t[2]; const a = t[3]; const o = i ** 2 + s ** 2; const l = i * r + s * a; const c = r ** 2 + a ** 2; const d = (o + c) / 2; const
      u = Math.sqrt(d ** 2 - (o * c - l ** 2));
    e[0] = Math.sqrt(d + u || 1), e[1] = Math.sqrt(d - u || 1);
  }

  static normalizeRect(t) {
    const e = t.slice(0);
    return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
  }

  static intersect(t, e) {
    const i = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])); const
      s = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (i > s) return null;
    const r = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])); const
      a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    return r > a ? null : [i, r, s, a];
  }

  static pointBoundingBox(t, e, i) {
    i[0] = Math.min(i[0], t), i[1] = Math.min(i[1], e), i[2] = Math.max(i[2], t), i[3] = Math.max(i[3], e);
  }

  static rectBoundingBox(t, e, i, s, r) {
    r[0] = Math.min(r[0], t, i), r[1] = Math.min(r[1], e, s), r[2] = Math.max(r[2], t, i), r[3] = Math.max(r[3], e, s);
  }

  static bezierBoundingBox(t, e, i, s, r, a, o, l, c) {
    c[0] = Math.min(c[0], t, o), c[1] = Math.min(c[1], e, l), c[2] = Math.max(c[2], t, o), c[3] = Math.max(c[3], e, l), A(this, Mn, Wf).call(this, t, i, r, o, e, s, a, l, 3 * (-t + 3 * (i - r) + o), 6 * (t - 2 * i + r), 3 * (i - t), c), A(this, Mn, Wf).call(this, t, i, r, o, e, s, a, l, 3 * (-e + 3 * (s - a) + l), 6 * (e - 2 * s + a), 3 * (s - e), c);
  }
}
Mn = new WeakSet(), Kd = function (t, e, i, s, r, a, o, l, c, d) {
  if (c <= 0 || c >= 1) return;
  const u = 1 - c; const g = c * c; const b = g * c; const E = u * (u * (u * t + 3 * c * e) + 3 * g * i) + b * s; const
    S = u * (u * (u * r + 3 * c * a) + 3 * g * o) + b * l;
  d[0] = Math.min(d[0], E), d[1] = Math.min(d[1], S), d[2] = Math.max(d[2], E), d[3] = Math.max(d[3], S);
}, Wf = function (t, e, i, s, r, a, o, l, c, d, u, g) {
  if (Math.abs(c) < 1e-12) {
    Math.abs(d) >= 1e-12 && A(this, Mn, Kd).call(this, t, e, i, s, r, a, o, l, -u / d, g);
    return;
  }
  const b = d ** 2 - 4 * u * c;
  if (b < 0) return;
  const E = Math.sqrt(b); const
    S = 2 * c;
  A(this, Mn, Kd).call(this, t, e, i, s, r, a, o, l, (-d + E) / S, g), A(this, Mn, Kd).call(this, t, e, i, s, r, a, o, l, (-d - E) / S, g);
}, v(tt, Mn);
function xw(h) {
  return decodeURIComponent(escape(h));
}
let Df = null; let
  tm = null;
function Qm(h) {
  return Df || (Df = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, tm = /* @__PURE__ */ new Map([['ﬅ', 'ſt']])), h.replaceAll(Df, (t, e, i) => (e ? e.normalize('NFKC') : tm.get(i)));
}
function bg() {
  if (typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  const h = new Uint8Array(32);
  return crypto.getRandomValues(h), Jm(h);
}
const vg = 'pdfjs_internal_id_';
function Ew(h, t, e) {
  if (!Array.isArray(e) || e.length < 2) return !1;
  const [i, s, ...r] = e;
  if (!h(i) && !Number.isInteger(i) || !t(s)) return !1;
  const a = r.length;
  let o = !0;
  switch (s.name) {
    case 'XYZ':
      if (a < 2 || a > 3) return !1;
      break;
    case 'Fit':
    case 'FitB':
      return a === 0;
    case 'FitH':
    case 'FitBH':
    case 'FitV':
    case 'FitBV':
      if (a > 1) return !1;
      break;
    case 'FitR':
      if (a !== 4) return !1;
      o = !1;
      break;
    default:
      return !1;
  }
  for (const l of r) if (!(typeof l === 'number' || o && l === null)) return !1;
  return !0;
}
function ze(h, t, e) {
  return Math.min(Math.max(h, t), e);
}
function Zm(h) {
  return Uint8Array.prototype.toBase64 ? h.toBase64() : btoa(Jm(h));
}
function Cw(h) {
  return Uint8Array.fromBase64 ? Uint8Array.fromBase64(h) : kd(atob(h));
}
typeof Promise.try !== 'function' && (Promise.try = function (h, ...t) {
  return new Promise((e) => {
    e(h(...t));
  });
});
typeof Math.sumPrecise !== 'function' && (Math.sumPrecise = function (h) {
  return h.reduce((t, e) => t + e, 0);
});
class zh {
  static textContent(t) {
    const e = []; const
      i = {
        items: e,
        styles: /* @__PURE__ */ Object.create(null),
      };
    function s(r) {
      let l;
      if (!r) return;
      let a = null;
      const o = r.name;
      if (o === '#text') a = r.value;
      else if (zh.shouldBuildText(o)) (l = r == null ? void 0 : r.attributes) != null && l.textContent ? a = r.attributes.textContent : r.value && (a = r.value);
      else return;
      if (a !== null && e.push({
        str: a,
      }), !!r.children) for (const c of r.children) s(c);
    }
    return s(t), i;
  }

  static shouldBuildText(t) {
    return !(t === 'textarea' || t === 'input' || t === 'option' || t === 'select');
  }
}
class wg {
  static setupStorage(t, e, i, s, r) {
    const a = s.getValue(e, {
      value: null,
    });
    switch (i.name) {
      case 'textarea':
        if (a.value !== null && (t.textContent = a.value), r === 'print') break;
        t.addEventListener('input', (o) => {
          s.setValue(e, {
            value: o.target.value,
          });
        });
        break;
      case 'input':
        if (i.attributes.type === 'radio' || i.attributes.type === 'checkbox') {
          if (a.value === i.attributes.xfaOn ? t.setAttribute('checked', !0) : a.value === i.attributes.xfaOff && t.removeAttribute('checked'), r === 'print') break;
          t.addEventListener('change', (o) => {
            s.setValue(e, {
              value: o.target.checked ? o.target.getAttribute('xfaOn') : o.target.getAttribute('xfaOff'),
            });
          });
        } else {
          if (a.value !== null && t.setAttribute('value', a.value), r === 'print') break;
          t.addEventListener('input', (o) => {
            s.setValue(e, {
              value: o.target.value,
            });
          });
        }
        break;
      case 'select':
        if (a.value !== null) {
          t.setAttribute('value', a.value);
          for (const o of i.children) o.attributes.value === a.value ? o.attributes.selected = !0 : o.attributes.hasOwnProperty('selected') && delete o.attributes.selected;
        }
        t.addEventListener('input', (o) => {
          const l = o.target.options; const
            c = l.selectedIndex === -1 ? '' : l[l.selectedIndex].value;
          s.setValue(e, {
            value: c,
          });
        });
        break;
    }
  }

  static setAttributes({
    html: t,
    element: e,
    storage: i = null,
    intent: s,
    linkService: r,
  }) {
    const {
      attributes: a,
    } = e; const
      o = t instanceof HTMLAnchorElement;
    a.type === 'radio' && (a.name = `${a.name}-${s}`);
    for (const [l, c] of Object.entries(a)) {
      if (c != null) {
        switch (l) {
          case 'class':
            c.length && t.setAttribute(l, c.join(' '));
            break;
          case 'dataId':
            break;
          case 'id':
            t.setAttribute('data-element-id', c);
            break;
          case 'style':
            Object.assign(t.style, c);
            break;
          case 'textContent':
            t.textContent = c;
            break;
          default:
            (!o || l !== 'href' && l !== 'newWindow') && t.setAttribute(l, c);
        }
      }
    }
    o && r.addLinkAttributes(t, a.href, a.newWindow), i && a.dataId && this.setupStorage(t, a.dataId, e, i);
  }

  static render(t) {
    let u; let
      g;
    const e = t.annotationStorage; const i = t.linkService; const s = t.xfaHtml; const r = t.intent || 'display'; const
      a = document.createElement(s.name);
    s.attributes && this.setAttributes({
      html: a,
      element: s,
      intent: r,
      linkService: i,
    });
    const o = r !== 'richText';
    const l = t.div;
    if (l.append(a), t.viewport) {
      const b = `matrix(${t.viewport.transform.join(',')})`;
      l.style.transform = b;
    }
    o && l.setAttribute('class', 'xfaLayer xfaFont');
    const c = [];
    if (s.children.length === 0) {
      if (s.value) {
        const b = document.createTextNode(s.value);
        a.append(b), o && zh.shouldBuildText(s.name) && c.push(b);
      }
      return {
        textDivs: c,
      };
    }
    const d = [[s, -1, a]];
    for (; d.length > 0;) {
      const [b, E, S] = d.at(-1);
      if (E + 1 === b.children.length) {
        d.pop();
        continue;
      }
      const M = b.children[++d.at(-1)[1]];
      if (M === null) continue;
      const {
        name: T,
      } = M;
      if (T === '#text') {
        const R = document.createTextNode(M.value);
        c.push(R), S.append(R);
        continue;
      }
      const L = (u = M == null ? void 0 : M.attributes) != null && u.xmlns ? document.createElementNS(M.attributes.xmlns, T) : document.createElement(T);
      if (S.append(L), M.attributes && this.setAttributes({
        html: L,
        element: M,
        storage: e,
        intent: r,
        linkService: i,
      }), ((g = M.children) == null ? void 0 : g.length) > 0) d.push([M, -1, L]);
      else if (M.value) {
        const R = document.createTextNode(M.value);
        o && zh.shouldBuildText(T) && c.push(R), L.append(R);
      }
    }
    for (const b of l.querySelectorAll('.xfaNonInteractive input, .xfaNonInteractive textarea')) b.setAttribute('readOnly', !0);
    return {
      textDivs: c,
    };
  }

  static update(t) {
    const e = `matrix(${t.viewport.transform.join(',')})`;
    t.div.style.transform = e, t.div.hidden = !1;
  }
}
const Gs = 'http://www.w3.org/2000/svg';
const Gr = class Gr {
};
V(Gr, 'CSS', 96), V(Gr, 'PDF', 72), V(Gr, 'PDF_TO_CSS_UNITS', Gr.CSS / Gr.PDF);
const On = Gr;
async function oh(h, t = 'text') {
  if (mh(h, document.baseURI)) {
    const e = await fetch(h);
    if (!e.ok) throw new Error(e.statusText);
    switch (t) {
      case 'arraybuffer':
        return e.arrayBuffer();
      case 'blob':
        return e.blob();
      case 'json':
        return e.json();
    }
    return e.text();
  }
  return new Promise((e, i) => {
    const s = new XMLHttpRequest();
    s.open('GET', h, !0), s.responseType = t, s.onreadystatechange = () => {
      if (s.readyState === XMLHttpRequest.DONE) {
        if (s.status === 200 || s.status === 0) {
          switch (t) {
            case 'arraybuffer':
            case 'blob':
            case 'json':
              e(s.response);
              return;
          }
          e(s.responseText);
          return;
        }
        i(new Error(s.statusText));
      }
    }, s.send(null);
  });
}
class Rd {
  constructor({
    viewBox: t,
    userUnit: e,
    scale: i,
    rotation: s,
    offsetX: r = 0,
    offsetY: a = 0,
    dontFlip: o = !1,
  }) {
    this.viewBox = t, this.userUnit = e, this.scale = i, this.rotation = s, this.offsetX = r, this.offsetY = a, i *= e;
    const l = (t[2] + t[0]) / 2; const
      c = (t[3] + t[1]) / 2;
    let d; let u; let g; let
      b;
    switch (s %= 360, s < 0 && (s += 360), s) {
      case 180:
        d = -1, u = 0, g = 0, b = 1;
        break;
      case 90:
        d = 0, u = 1, g = 1, b = 0;
        break;
      case 270:
        d = 0, u = -1, g = -1, b = 0;
        break;
      case 0:
        d = 1, u = 0, g = 0, b = -1;
        break;
      default:
        throw new Error('PageViewport: Invalid rotation, must be a multiple of 90 degrees.');
    }
    o && (g = -g, b = -b);
    let E; let S; let M; let
      T;
    d === 0 ? (E = Math.abs(c - t[1]) * i + r, S = Math.abs(l - t[0]) * i + a, M = (t[3] - t[1]) * i, T = (t[2] - t[0]) * i) : (E = Math.abs(l - t[0]) * i + r, S = Math.abs(c - t[1]) * i + a, M = (t[2] - t[0]) * i, T = (t[3] - t[1]) * i), this.transform = [d * i, u * i, g * i, b * i, E - d * i * l - g * i * c, S - u * i * l - b * i * c], this.width = M, this.height = T;
  }

  get rawDims() {
    const t = this.viewBox;
    return yt(this, 'rawDims', {
      pageWidth: t[2] - t[0],
      pageHeight: t[3] - t[1],
      pageX: t[0],
      pageY: t[1],
    });
  }

  clone({
    scale: t = this.scale,
    rotation: e = this.rotation,
    offsetX: i = this.offsetX,
    offsetY: s = this.offsetY,
    dontFlip: r = !1,
  } = {}) {
    return new Rd({
      viewBox: this.viewBox.slice(),
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: i,
      offsetY: s,
      dontFlip: r,
    });
  }

  convertToViewportPoint(t, e) {
    const i = [t, e];
    return tt.applyTransform(i, this.transform), i;
  }

  convertToViewportRectangle(t) {
    const e = [t[0], t[1]];
    tt.applyTransform(e, this.transform);
    const i = [t[2], t[3]];
    return tt.applyTransform(i, this.transform), [e[0], e[1], i[0], i[1]];
  }

  convertToPdfPoint(t, e) {
    const i = [t, e];
    return tt.applyInverseTransform(i, this.transform), i;
  }
}
class uf extends lo {
  constructor(t, e = 0) {
    super(t, 'RenderingCancelledException'), this.extraDelay = e;
  }
}
function Md(h) {
  const t = h.length;
  let e = 0;
  for (; e < t && h[e].trim() === '';) e++;
  return h.substring(e, e + 5).toLowerCase() === 'data:';
}
function ff(h) {
  return typeof h === 'string' && /\.pdf$/i.test(h);
}
function ty(h) {
  return [h] = h.split(/[#?]/, 1), h.substring(h.lastIndexOf('/') + 1);
}
function ey(h, t = 'document.pdf') {
  if (typeof h !== 'string') return t;
  if (Md(h)) return pt('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const i = ((o) => {
    try {
      return new URL(o);
    } catch {
      try {
        return new URL(decodeURIComponent(o));
      } catch {
        try {
          return new URL(o, 'https://foo.bar');
        } catch {
          try {
            return new URL(decodeURIComponent(o), 'https://foo.bar');
          } catch {
            return null;
          }
        }
      }
    }
  })(h);
  if (!i) return t;
  const s = (o) => {
    try {
      let l = decodeURIComponent(o);
      return l.includes('/') ? (l = l.split('/').at(-1), l.test(/^\.pdf$/i) ? l : o) : l;
    } catch {
      return o;
    }
  }; const r = /\.pdf$/i; const
    a = i.pathname.split('/').at(-1);
  if (r.test(a)) return s(a);
  if (i.searchParams.size > 0) {
    const o = Array.from(i.searchParams.values()).reverse();
    for (const c of o) if (r.test(c)) return s(c);
    const l = Array.from(i.searchParams.keys()).reverse();
    for (const c of l) if (r.test(c)) return s(c);
  }
  if (i.hash) {
    const l = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(i.hash);
    if (l) return s(l[0]);
  }
  return t;
}
class em {
  constructor() {
    V(this, 'started', /* @__PURE__ */ Object.create(null));
    V(this, 'times', []);
  }

  time(t) {
    t in this.started && pt(`Timer is already running for ${t}`), this.started[t] = Date.now();
  }

  timeEnd(t) {
    t in this.started || pt(`Timer has not been started for ${t}`), this.times.push({
      name: t,
      start: this.started[t],
      end: Date.now(),
    }), delete this.started[t];
  }

  toString() {
    const t = [];
    let e = 0;
    for (const {
      name: i,
    } of this.times) e = Math.max(i.length, e);
    for (const {
      name: i,
      start: s,
      end: r,
    } of this.times) {
      t.push(`${i.padEnd(e)} ${r - s}ms
`);
    }
    return t.join('');
  }
}
function mh(h, t) {
  const e = t ? URL.parse(h, t) : URL.parse(h);
  return (e == null ? void 0 : e.protocol) === 'http:' || (e == null ? void 0 : e.protocol) === 'https:';
}
function Ri(h) {
  h.preventDefault();
}
function Kt(h) {
  h.preventDefault(), h.stopPropagation();
}
function Tw(h) {
  console.log(`Deprecated API usage: ${h}`);
}
let qh;
class Uh {
  static toDateObject(t) {
    if (t instanceof Date) return t;
    if (!t || typeof t !== 'string') return null;
    n(this, qh) || m(this, qh, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = n(this, qh).exec(t);
    if (!e) return null;
    const i = parseInt(e[1], 10);
    let s = parseInt(e[2], 10);
    s = s >= 1 && s <= 12 ? s - 1 : 0;
    let r = parseInt(e[3], 10);
    r = r >= 1 && r <= 31 ? r : 1;
    let a = parseInt(e[4], 10);
    a = a >= 0 && a <= 23 ? a : 0;
    let o = parseInt(e[5], 10);
    o = o >= 0 && o <= 59 ? o : 0;
    let l = parseInt(e[6], 10);
    l = l >= 0 && l <= 59 ? l : 0;
    const c = e[7] || 'Z';
    let d = parseInt(e[8], 10);
    d = d >= 0 && d <= 23 ? d : 0;
    let u = parseInt(e[9], 10) || 0;
    return u = u >= 0 && u <= 59 ? u : 0, c === '-' ? (a += d, o += u) : c === '+' && (a -= d, o -= u), new Date(Date.UTC(i, s, r, a, o, l));
  }
}
qh = new WeakMap(), v(Uh, qh);
function iy(h, {
  scale: t = 1,
  rotation: e = 0,
}) {
  const {
    width: i,
    height: s,
  } = h.attributes.style; const
    r = [0, 0, parseInt(i), parseInt(s)];
  return new Rd({
    viewBox: r,
    userUnit: 1,
    scale: t,
    rotation: e,
  });
}
function lh(h) {
  if (h.startsWith('#')) {
    const t = parseInt(h.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return h.startsWith('rgb(') ? h.slice(4, -1).split(',').map((t) => parseInt(t)) : h.startsWith('rgba(') ? h.slice(5, -1).split(',').map((t) => parseInt(t)).slice(0, 3) : (pt(`Not a valid color format: "${h}"`), [0, 0, 0]);
}
function Pw(h) {
  const t = document.createElement('span');
  t.style.visibility = 'hidden', t.style.colorScheme = 'only light', document.body.append(t);
  for (const e of h.keys()) {
    t.style.color = e;
    const i = window.getComputedStyle(t).color;
    h.set(e, lh(i));
  }
  t.remove();
}
function Yt(h) {
  const {
    a: t,
    b: e,
    c: i,
    d: s,
    e: r,
    f: a,
  } = h.getTransform();
  return [t, e, i, s, r, a];
}
function fs(h) {
  const {
    a: t,
    b: e,
    c: i,
    d: s,
    e: r,
    f: a,
  } = h.getTransform().invertSelf();
  return [t, e, i, s, r, a];
}
function Or(h, t, e = !1, i = !0) {
  if (t instanceof Rd) {
    const {
      pageWidth: s,
      pageHeight: r,
    } = t.rawDims; const {
      style: a,
    } = h; const o = _e.isCSSRoundSupported; const l = `var(--total-scale-factor) * ${s}px`; const c = `var(--total-scale-factor) * ${r}px`; const d = o ? `round(down, ${l}, var(--scale-round-x))` : `calc(${l})`; const
      u = o ? `round(down, ${c}, var(--scale-round-y))` : `calc(${c})`;
    !e || t.rotation % 180 === 0 ? (a.width = d, a.height = u) : (a.width = u, a.height = d);
  }
  i && h.setAttribute('data-main-rotation', t.rotation);
}
class cs {
  constructor() {
    const {
      pixelRatio: t,
    } = cs;
    this.sx = t, this.sy = t;
  }

  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }

  get symmetric() {
    return this.sx === this.sy;
  }

  limitCanvas(t, e, i, s, r = -1) {
    let a = 1 / 0; let o = 1 / 0; let
      l = 1 / 0;
    i = cs.capPixels(i, r), i > 0 && (a = Math.sqrt(i / (t * e))), s !== -1 && (o = s / t, l = s / e);
    const c = Math.min(a, o, l);
    return this.sx > c || this.sy > c ? (this.sx = c, this.sy = c, !0) : !1;
  }

  static get pixelRatio() {
    return globalThis.devicePixelRatio || 1;
  }

  static capPixels(t, e) {
    if (e >= 0) {
      const i = Math.ceil(window.screen.availWidth * window.screen.availHeight * this.pixelRatio ** 2 * (1 + e / 100));
      return t > 0 ? Math.min(t, i) : i;
    }
    return t;
  }
}
const Mu = ['image/apng', 'image/avif', 'image/bmp', 'image/gif', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/webp', 'image/x-icon'];
class kw {
  static get isDarkMode() {
    let t;
    return yt(this, 'isDarkMode', !!((t = window == null ? void 0 : window.matchMedia) != null && t.call(window, '(prefers-color-scheme: dark)').matches));
  }
}
class sy {
  static get commentForegroundColor() {
    const t = document.createElement('span');
    t.classList.add('comment', 'sidebar');
    const {
      style: e,
    } = t;
    e.width = e.height = '0', e.display = 'none', e.color = 'var(--comment-fg-color)', document.body.append(t);
    const {
      color: i,
    } = window.getComputedStyle(t);
    return t.remove(), yt(this, 'commentForegroundColor', lh(i));
  }
}
function ny(h, t, e, i) {
  i = Math.min(Math.max(i ?? 1, 0), 1);
  const s = 255 * (1 - i);
  return h = Math.round(h * i + s), t = Math.round(t * i + s), e = Math.round(e * i + s), [h, t, e];
}
function im(h, t) {
  const e = h[0] / 255; const i = h[1] / 255; const s = h[2] / 255; const r = Math.max(e, i, s); const a = Math.min(e, i, s); const
    o = (r + a) / 2;
  if (r === a) t[0] = t[1] = 0;
  else {
    const l = r - a;
    switch (t[1] = o < 0.5 ? l / (r + a) : l / (2 - r - a), r) {
      case e:
        t[0] = ((i - s) / l + (i < s ? 6 : 0)) * 60;
        break;
      case i:
        t[0] = ((s - e) / l + 2) * 60;
        break;
      case s:
        t[0] = ((e - i) / l + 4) * 60;
        break;
    }
  }
  t[2] = o;
}
function Gf(h, t) {
  const e = h[0]; const i = h[1]; const s = h[2]; const r = (1 - Math.abs(2 * s - 1)) * i; const a = r * (1 - Math.abs(e / 60 % 2 - 1)); const
    o = s - r / 2;
  switch (Math.floor(e / 60)) {
    case 0:
      t[0] = r + o, t[1] = a + o, t[2] = o;
      break;
    case 1:
      t[0] = a + o, t[1] = r + o, t[2] = o;
      break;
    case 2:
      t[0] = o, t[1] = r + o, t[2] = a + o;
      break;
    case 3:
      t[0] = o, t[1] = a + o, t[2] = r + o;
      break;
    case 4:
      t[0] = a + o, t[1] = o, t[2] = r + o;
      break;
    case 5:
    case 6:
      t[0] = r + o, t[1] = o, t[2] = a + o;
      break;
  }
}
function sm(h) {
  return h <= 0.03928 ? h / 12.92 : ((h + 0.055) / 1.055) ** 2.4;
}
function nm(h, t, e) {
  Gf(h, e), e.map(sm);
  const i = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  Gf(t, e), e.map(sm);
  const s = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  return i > s ? (i + 0.05) / (s + 0.05) : (s + 0.05) / (i + 0.05);
}
const rm = /* @__PURE__ */ new Map();
function ry(h, t) {
  const e = h[0] + h[1] * 256 + h[2] * 65536 + t[0] * 16777216 + t[1] * 4294967296 + t[2] * 1099511627776;
  let i = rm.get(e);
  if (i) return i;
  const s = new Float32Array(9); const r = s.subarray(0, 3); const
    a = s.subarray(3, 6);
  im(h, a);
  const o = s.subarray(6, 9);
  im(t, o);
  const l = o[2] < 0.5; const
    c = l ? 12 : 4.5;
  if (a[2] = l ? Math.sqrt(a[2]) : 1 - Math.sqrt(1 - a[2]), nm(a, o, r) < c) {
    let d; let
      u;
    l ? (d = a[2], u = 1) : (d = 0, u = a[2]);
    const g = 5e-3;
    for (; u - d > g;) {
      const b = a[2] = (d + u) / 2;
      l === nm(a, o, r) < c ? d = b : u = b;
    }
    a[2] = l ? u : d;
  }
  return Gf(a, r), i = tt.makeHexColor(Math.round(r[0] * 255), Math.round(r[1] * 255), Math.round(r[2] * 255)), rm.set(e, i), i;
}
function Sg({
  html: h,
  dir: t,
  className: e,
}, i) {
  const s = document.createDocumentFragment();
  if (typeof h === 'string') {
    const r = document.createElement('p');
    r.dir = t || 'auto';
    const a = h.split(/(?:\r\n?|\n)/);
    for (let o = 0, l = a.length; o < l; ++o) {
      const c = a[o];
      r.append(document.createTextNode(c)), o < l - 1 && r.append(document.createElement('br'));
    }
    s.append(r);
  } else {
    wg.render({
      xfaHtml: h,
      div: s,
      intent: 'richText',
    });
  }
  s.firstChild.classList.add('richText', e), i.append(s);
}
let jn; let zn; let Di; let Oi; let Xh; let Un; let Mo; let Lo; let Yh; let Uu; let ay; let De; let oy; let ly; let go; let
  yh;
const Xs = class Xs {
  constructor(t) {
    v(this, De);
    v(this, jn, null);
    v(this, zn, null);
    v(this, Di);
    v(this, Oi, null);
    v(this, Xh, null);
    v(this, Un, null);
    v(this, Mo, null);
    v(this, Lo, null);
    m(this, Di, t), n(Xs, Yh) || m(Xs, Yh, Object.freeze({
      freetext: 'pdfjs-editor-remove-freetext-button',
      highlight: 'pdfjs-editor-remove-highlight-button',
      ink: 'pdfjs-editor-remove-ink-button',
      stamp: 'pdfjs-editor-remove-stamp-button',
      signature: 'pdfjs-editor-remove-signature-button',
    }));
  }

  render() {
    const t = m(this, jn, document.createElement('div'));
    t.classList.add('editToolbar', 'hidden'), t.setAttribute('role', 'toolbar');
    const e = n(this, Di)._uiManager._signal;
    e instanceof AbortSignal && !e.aborted && (t.addEventListener('contextmenu', Ri, {
      signal: e,
    }), t.addEventListener('pointerdown', A(Xs, Uu, ay), {
      signal: e,
    }));
    const i = m(this, Oi, document.createElement('div'));
    i.className = 'buttons', t.append(i);
    const s = n(this, Di).toolbarPosition;
    if (s) {
      const {
        style: r,
      } = t; const
        a = n(this, Di)._uiManager.direction === 'ltr' ? 1 - s[0] : s[0];
      r.insetInlineEnd = `${100 * a}%`, r.top = `calc(${100 * s[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return t;
  }

  get div() {
    return n(this, jn);
  }

  hide() {
    let t;
    n(this, jn).classList.add('hidden'), (t = n(this, zn)) == null || t.hideDropdown();
  }

  show() {
    let t; let
      e;
    n(this, jn).classList.remove('hidden'), (t = n(this, Xh)) == null || t.shown(), (e = n(this, Un)) == null || e.shown();
  }

  addDeleteButton() {
    const {
      editorType: t,
      _uiManager: e,
    } = n(this, Di); const
      i = document.createElement('button');
    i.classList.add('basic', 'deleteButton'), i.tabIndex = 0, i.setAttribute('data-l10n-id', n(Xs, Yh)[t]), A(this, De, go).call(this, i) && i.addEventListener('click', (s) => {
      e.delete();
    }, {
      signal: e._signal,
    }), n(this, Oi).append(i);
  }

  async addAltText(t) {
    const e = await t.render();
    A(this, De, go).call(this, e), n(this, Oi).append(e, n(this, De, yh)), m(this, Xh, t);
  }

  addComment(t, e = null) {
    if (n(this, Un)) return;
    const i = t.renderForToolbar();
    if (!i) return;
    A(this, De, go).call(this, i);
    const s = m(this, Mo, n(this, De, yh));
    e ? (n(this, Oi).insertBefore(i, e), n(this, Oi).insertBefore(s, e)) : n(this, Oi).append(i, s), m(this, Un, t), t.toolbar = this;
  }

  addColorPicker(t) {
    if (n(this, zn)) return;
    m(this, zn, t);
    const e = t.renderButton();
    A(this, De, go).call(this, e), n(this, Oi).append(e, n(this, De, yh));
  }

  async addEditSignatureButton(t) {
    const e = m(this, Lo, await t.renderEditButton(n(this, Di)));
    A(this, De, go).call(this, e), n(this, Oi).append(e, n(this, De, yh));
  }

  removeButton(t) {
    let e; let
      i;
    switch (t) {
      case 'comment':
        (e = n(this, Un)) == null || e.removeToolbarCommentButton(), m(this, Un, null), (i = n(this, Mo)) == null || i.remove(), m(this, Mo, null);
        break;
    }
  }

  async addButton(t, e) {
    switch (t) {
      case 'colorPicker':
        this.addColorPicker(e);
        break;
      case 'altText':
        await this.addAltText(e);
        break;
      case 'editSignature':
        await this.addEditSignatureButton(e);
        break;
      case 'delete':
        this.addDeleteButton();
        break;
      case 'comment':
        this.addComment(e);
        break;
    }
  }

  async addButtonBefore(t, e, i) {
    const s = n(this, Oi).querySelector(i);
    s && t === 'comment' && this.addComment(e, s);
  }

  updateEditSignatureButton(t) {
    n(this, Lo) && (n(this, Lo).title = t);
  }

  remove() {
    let t;
    n(this, jn).remove(), (t = n(this, zn)) == null || t.destroy(), m(this, zn, null);
  }
};
jn = new WeakMap(), zn = new WeakMap(), Di = new WeakMap(), Oi = new WeakMap(), Xh = new WeakMap(), Un = new WeakMap(), Mo = new WeakMap(), Lo = new WeakMap(), Yh = new WeakMap(), Uu = new WeakSet(), ay = function (t) {
  t.stopPropagation();
}, De = new WeakSet(), oy = function (t) {
  n(this, Di)._focusEventsAllowed = !1, Kt(t);
}, ly = function (t) {
  n(this, Di)._focusEventsAllowed = !0, Kt(t);
}, go = function (t) {
  const e = n(this, Di)._uiManager._signal;
  return !(e instanceof AbortSignal) || e.aborted ? !1 : (t.addEventListener('focusin', A(this, De, oy).bind(this), {
    capture: !0,
    signal: e,
  }), t.addEventListener('focusout', A(this, De, ly).bind(this), {
    capture: !0,
    signal: e,
  }), t.addEventListener('contextmenu', Ri, {
    signal: e,
  }), !0);
}, yh = function () {
  const t = document.createElement('div');
  return t.className = 'divider', t;
}, v(Xs, Uu), v(Xs, Yh, null);
const Vf = Xs;
let Kh; let Xr; let Ks; let In; let hy; let cy; let
  qf;
class Rw {
  constructor(t) {
    v(this, In);
    v(this, Kh, null);
    v(this, Xr, null);
    v(this, Ks);
    m(this, Ks, t);
  }

  show(t, e, i) {
    const [s, r] = A(this, In, cy).call(this, e, i); const
      {
        style: a,
      } = n(this, Xr) || m(this, Xr, A(this, In, hy).call(this));
    t.append(n(this, Xr)), a.insetInlineEnd = `${100 * s}%`, a.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`;
  }

  hide() {
    n(this, Xr).remove();
  }
}
Kh = new WeakMap(), Xr = new WeakMap(), Ks = new WeakMap(), In = new WeakSet(), hy = function () {
  const t = m(this, Xr, document.createElement('div'));
  t.className = 'editToolbar', t.setAttribute('role', 'toolbar');
  const e = n(this, Ks)._signal;
  e instanceof AbortSignal && !e.aborted && t.addEventListener('contextmenu', Ri, {
    signal: e,
  });
  const i = m(this, Kh, document.createElement('div'));
  return i.className = 'buttons', t.append(i), n(this, Ks).hasCommentManager() && A(this, In, qf).call(this, 'commentButton', 'pdfjs-comment-floating-button', 'pdfjs-comment-floating-button-label', () => {
    n(this, Ks).commentSelection('floating_button');
  }), A(this, In, qf).call(this, 'highlightButton', 'pdfjs-highlight-floating-button1', 'pdfjs-highlight-floating-button-label', () => {
    n(this, Ks).highlightSelection('floating_button');
  }), t;
}, cy = function (t, e) {
  let i = 0; let
    s = 0;
  for (const r of t) {
    const a = r.y + r.height;
    if (a < i) continue;
    const o = r.x + (e ? r.width : 0);
    if (a > i) {
      s = o, i = a;
      continue;
    }
    e ? o > s && (s = o) : o < s && (s = o);
  }
  return [e ? 1 - s : s, i];
}, qf = function (t, e, i, s) {
  const r = document.createElement('button');
  r.classList.add('basic', t), r.tabIndex = 0, r.setAttribute('data-l10n-id', e);
  const a = document.createElement('span');
  r.append(a), a.className = 'visuallyHidden', a.setAttribute('data-l10n-id', i);
  const o = n(this, Ks)._signal;
  o instanceof AbortSignal && !o.aborted && (r.addEventListener('contextmenu', Ri, {
    signal: o,
  }), r.addEventListener('click', s, {
    signal: o,
  })), n(this, Kh).append(r);
};
function dy(h, t, e) {
  for (const i of e) t.addEventListener(i, h[i].bind(h));
}
let $u;
class Mw {
  constructor() {
    v(this, $u, 0);
  }

  get id() {
    return `${Hh}${de(this, $u)._++}`;
  }
}
$u = new WeakMap();
let Do; let Jh; let Ie; let Oo; let
  Jd;
const Dg = class Dg {
  constructor() {
    v(this, Oo);
    v(this, Do, bg());
    v(this, Jh, 0);
    v(this, Ie, null);
  }

  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>'; const i = new OffscreenCanvas(1, 3).getContext('2d', {
      willReadFrequently: !0,
    }); const
      s = new Image();
    s.src = t;
    const r = s.decode().then(() => (i.drawImage(s, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(i.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return yt(this, '_isSVGFittingCanvas', r);
  }

  async getFromFile(t) {
    const {
      lastModified: e,
      name: i,
      size: s,
      type: r,
    } = t;
    return A(this, Oo, Jd).call(this, `${e}_${i}_${s}_${r}`, t);
  }

  async getFromUrl(t) {
    return A(this, Oo, Jd).call(this, t, t);
  }

  async getFromBlob(t, e) {
    const i = await e;
    return A(this, Oo, Jd).call(this, t, i);
  }

  async getFromId(t) {
    n(this, Ie) || m(this, Ie, /* @__PURE__ */ new Map());
    const e = n(this, Ie).get(t);
    if (!e) return null;
    if (e.bitmap) return e.refCounter += 1, e;
    if (e.file) return this.getFromFile(e.file);
    if (e.blobPromise) {
      const {
        blobPromise: i,
      } = e;
      return delete e.blobPromise, this.getFromBlob(e.id, i);
    }
    return this.getFromUrl(e.url);
  }

  getFromCanvas(t, e) {
    n(this, Ie) || m(this, Ie, /* @__PURE__ */ new Map());
    let i = n(this, Ie).get(t);
    if (i != null && i.bitmap) return i.refCounter += 1, i;
    const s = new OffscreenCanvas(e.width, e.height);
    return s.getContext('2d').drawImage(e, 0, 0), i = {
      bitmap: s.transferToImageBitmap(),
      id: `image_${n(this, Do)}_${de(this, Jh)._++}`,
      refCounter: 1,
      isSvg: !1,
    }, n(this, Ie).set(t, i), n(this, Ie).set(i.id, i), i;
  }

  getSvgUrl(t) {
    const e = n(this, Ie).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }

  deleteId(t) {
    let s;
    n(this, Ie) || m(this, Ie, /* @__PURE__ */ new Map());
    const e = n(this, Ie).get(t);
    if (!e || (e.refCounter -= 1, e.refCounter !== 0)) return;
    const {
      bitmap: i,
    } = e;
    if (!e.url && !e.file) {
      const r = new OffscreenCanvas(i.width, i.height);
      r.getContext('bitmaprenderer').transferFromImageBitmap(i), e.blobPromise = r.convertToBlob();
    }
    (s = i.close) == null || s.call(i), e.bitmap = null;
  }

  isValidId(t) {
    return t.startsWith(`image_${n(this, Do)}_`);
  }
};
Do = new WeakMap(), Jh = new WeakMap(), Ie = new WeakMap(), Oo = new WeakSet(), Jd = async function (t, e) {
  n(this, Ie) || m(this, Ie, /* @__PURE__ */ new Map());
  let i = n(this, Ie).get(t);
  if (i === null) return null;
  if (i != null && i.bitmap) return i.refCounter += 1, i;
  try {
    i || (i = {
      bitmap: null,
      id: `image_${n(this, Do)}_${de(this, Jh)._++}`,
      refCounter: 0,
      isSvg: !1,
    });
    let s;
    if (typeof e === 'string' ? (i.url = e, s = await oh(e, 'blob')) : e instanceof File ? s = i.file = e : e instanceof Blob && (s = e), s.type === 'image/svg+xml') {
      const r = Dg._isSVGFittingCanvas; const a = new FileReader(); const o = new Image(); const
        l = new Promise((c, d) => {
          o.onload = () => {
            i.bitmap = o, i.isSvg = !0, c();
          }, a.onload = async () => {
            const u = i.svgUrl = a.result;
            o.src = await r ? `${u}#svgView(preserveAspectRatio(none))` : u;
          }, o.onerror = a.onerror = d;
        });
      a.readAsDataURL(s), await l;
    } else i.bitmap = await createImageBitmap(s);
    i.refCounter = 1;
  } catch (s) {
    pt(s), i = null;
  }
  return n(this, Ie).set(t, i), i && n(this, Ie).set(i.id, i), i;
};
const Xf = Dg;
let ne; let $n; let Qh; let
  Xt;
class Lw {
  constructor(t = 128) {
    v(this, ne, []);
    v(this, $n, !1);
    v(this, Qh);
    v(this, Xt, -1);
    m(this, Qh, t);
  }

  add({
    cmd: t,
    undo: e,
    post: i,
    mustExec: s,
    type: r = NaN,
    overwriteIfSameType: a = !1,
    keepUndo: o = !1,
  }) {
    if (s && t(), n(this, $n)) return;
    const l = {
      cmd: t,
      undo: e,
      post: i,
      type: r,
    };
    if (n(this, Xt) === -1) {
      n(this, ne).length > 0 && (n(this, ne).length = 0), m(this, Xt, 0), n(this, ne).push(l);
      return;
    }
    if (a && n(this, ne)[n(this, Xt)].type === r) {
      o && (l.undo = n(this, ne)[n(this, Xt)].undo), n(this, ne)[n(this, Xt)] = l;
      return;
    }
    const c = n(this, Xt) + 1;
    c === n(this, Qh) ? n(this, ne).splice(0, 1) : (m(this, Xt, c), c < n(this, ne).length && n(this, ne).splice(c)), n(this, ne).push(l);
  }

  undo() {
    if (n(this, Xt) === -1) return;
    m(this, $n, !0);
    const {
      undo: t,
      post: e,
    } = n(this, ne)[n(this, Xt)];
    t(), e == null || e(), m(this, $n, !1), m(this, Xt, n(this, Xt) - 1);
  }

  redo() {
    if (n(this, Xt) < n(this, ne).length - 1) {
      m(this, Xt, n(this, Xt) + 1), m(this, $n, !0);
      const {
        cmd: t,
        post: e,
      } = n(this, ne)[n(this, Xt)];
      t(), e == null || e(), m(this, $n, !1);
    }
  }

  hasSomethingToUndo() {
    return n(this, Xt) !== -1;
  }

  hasSomethingToRedo() {
    return n(this, Xt) < n(this, ne).length - 1;
  }

  cleanType(t) {
    if (n(this, Xt) !== -1) {
      for (let e = n(this, Xt); e >= 0; e--) {
        if (n(this, ne)[e].type !== t) {
          n(this, ne).splice(e + 1, n(this, Xt) - e), m(this, Xt, e);
          return;
        }
      }
      n(this, ne).length = 0, m(this, Xt, -1);
    }
  }

  destroy() {
    m(this, ne, null);
  }
}
ne = new WeakMap(), $n = new WeakMap(), Qh = new WeakMap(), Xt = new WeakMap();
let Wu; let
  uy;
class Ld {
  constructor(t) {
    v(this, Wu);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e,
    } = _e.platform;
    for (const [i, s, r = {}] of t) {
      for (const a of i) {
        const o = a.startsWith('mac+');
        e && o ? (this.callbacks.set(a.slice(4), {
          callback: s,
          options: r,
        }), this.allKeys.add(a.split('+').at(-1))) : !e && !o && (this.callbacks.set(a, {
          callback: s,
          options: r,
        }), this.allKeys.add(a.split('+').at(-1)));
      }
    }
  }

  exec(t, e) {
    if (!this.allKeys.has(e.key)) return;
    const i = this.callbacks.get(A(this, Wu, uy).call(this, e));
    if (!i) return;
    const {
      callback: s,
      options: {
        bubbles: r = !1,
        args: a = [],
        checker: o = null,
      },
    } = i;
    o && !o(t, e) || (s.bind(t, ...a, e)(), r || Kt(e));
  }
}
Wu = new WeakSet(), uy = function (t) {
  t.altKey && this.buffer.push('alt'), t.ctrlKey && this.buffer.push('ctrl'), t.metaKey && this.buffer.push('meta'), t.shiftKey && this.buffer.push('shift'), this.buffer.push(t.key);
  const e = this.buffer.join('+');
  return this.buffer.length = 0, e;
};
const Gu = class Gu {
  get _colors() {
    const t = /* @__PURE__ */ new Map([['CanvasText', null], ['Canvas', null]]);
    return Pw(t), yt(this, '_colors', t);
  }

  convert(t) {
    const e = lh(t);
    if (!window.matchMedia('(forced-colors: active)').matches) return e;
    for (const [i, s] of this._colors) if (s.every((r, a) => r === e[a])) return Gu._colorsMapping.get(i);
    return e;
  }

  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? tt.makeHexColor(...e) : t;
  }
};
V(Gu, '_colorsMapping', /* @__PURE__ */ new Map([['CanvasText', [0, 0, 0]], ['Canvas', [255, 255, 255]]]));
const Yf = Gu;
let Io; let li; let Fo; let Qt; let fe; let No; let Ii; let Bo; let Fi; let Fe; let Wn; let Gn; let Ho; let Vn; let ms; let Ni; let Yr; let Zh; let tc; let jo; let ec; let ys; let qn; let zo; let Xn; let bs; let Vu; let Yn; let Uo; let ic; let Kn; let Kr; let $o; let Jn; let sc; let le; let kt; let Js; let Qn; let Zn; let nc; let Wo; let rc; let tr; let vs; let Qs; let ac; let oc; let Bi; let X; let Qd; let Kf; let fy; let py; let bh; let gy; let my; let yy; let Jf; let by; let Qf; let Zf; let vy; let $e; let Vs; let wy; let Sy; let tp; let Ay; let vh; let
  ep;
const _o = class _o {
  constructor(t, e, i, s, r, a, o, l, c, d, u, g, b, E, S, M) {
    v(this, X);
    v(this, Io, new AbortController());
    v(this, li, null);
    v(this, Fo, null);
    v(this, Qt, /* @__PURE__ */ new Map());
    v(this, fe, /* @__PURE__ */ new Map());
    v(this, No, null);
    v(this, Ii, null);
    v(this, Bo, null);
    v(this, Fi, new Lw());
    v(this, Fe, null);
    v(this, Wn, null);
    v(this, Gn, null);
    v(this, Ho, 0);
    v(this, Vn, /* @__PURE__ */ new Set());
    v(this, ms, null);
    v(this, Ni, null);
    v(this, Yr, /* @__PURE__ */ new Set());
    V(this, '_editorUndoBar', null);
    v(this, Zh, !1);
    v(this, tc, !1);
    v(this, jo, !1);
    v(this, ec, null);
    v(this, ys, null);
    v(this, qn, null);
    v(this, zo, null);
    v(this, Xn, !1);
    v(this, bs, null);
    v(this, Vu, new Mw());
    v(this, Yn, !1);
    v(this, Uo, !1);
    v(this, ic, !1);
    v(this, Kn, null);
    v(this, Kr, null);
    v(this, $o, null);
    v(this, Jn, null);
    v(this, sc, null);
    v(this, le, ft.NONE);
    v(this, kt, /* @__PURE__ */ new Set());
    v(this, Js, null);
    v(this, Qn, null);
    v(this, Zn, null);
    v(this, nc, null);
    v(this, Wo, null);
    v(this, rc, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1,
    });
    v(this, tr, [0, 0]);
    v(this, vs, null);
    v(this, Qs, null);
    v(this, ac, null);
    v(this, oc, null);
    v(this, Bi, null);
    const T = this._signal = n(this, Io).signal;
    m(this, Qs, t), m(this, ac, e), m(this, oc, i), m(this, No, s), m(this, Fe, r), m(this, Qn, a), m(this, Wo, l), this._eventBus = o, o._on('editingaction', this.onEditingAction.bind(this), {
      signal: T,
    }), o._on('pagechanging', this.onPageChanging.bind(this), {
      signal: T,
    }), o._on('scalechanging', this.onScaleChanging.bind(this), {
      signal: T,
    }), o._on('rotationchanging', this.onRotationChanging.bind(this), {
      signal: T,
    }), o._on('setpreference', this.onSetPreference.bind(this), {
      signal: T,
    }), o._on('switchannotationeditorparams', (L) => this.updateParams(L.type, L.value), {
      signal: T,
    }), window.addEventListener('pointerdown', () => {
      m(this, Uo, !0);
    }, {
      capture: !0,
      signal: T,
    }), window.addEventListener('pointerup', () => {
      m(this, Uo, !1);
    }, {
      capture: !0,
      signal: T,
    }), A(this, X, gy).call(this), A(this, X, vy).call(this), A(this, X, Jf).call(this), m(this, Ii, l.annotationStorage), m(this, ec, l.filterFactory), m(this, Zn, c), m(this, zo, d || null), m(this, Zh, u), m(this, tc, g), m(this, jo, b), m(this, sc, E || null), this.viewParameters = {
      realScale: On.PDF_TO_CSS_UNITS,
      rotation: 0,
    }, this.isShiftKeyDown = !1, this._editorUndoBar = S || null, this._supportsPinchToZoom = M !== !1, r == null || r.setSidebarUiManager(this);
  }

  static get _keyboardManager() {
    const t = _o.prototype; const e = (a) => n(a, Qs).contains(document.activeElement) && document.activeElement.tagName !== 'BUTTON' && a.hasSomethingToControl(); const i = (a, {
      target: o,
    }) => {
      if (o instanceof HTMLInputElement) {
        const {
          type: l,
        } = o;
        return l !== 'text' && l !== 'number';
      }
      return !0;
    }; const s = this.TRANSLATE_SMALL; const
      r = this.TRANSLATE_BIG;
    return yt(this, '_keyboardManager', new Ld([[['ctrl+a', 'mac+meta+a'], t.selectAll, {
      checker: i,
    }], [['ctrl+z', 'mac+meta+z'], t.undo, {
      checker: i,
    }], [['ctrl+y', 'ctrl+shift+z', 'mac+meta+shift+z', 'ctrl+shift+Z', 'mac+meta+shift+Z'], t.redo, {
      checker: i,
    }], [['Backspace', 'alt+Backspace', 'ctrl+Backspace', 'shift+Backspace', 'mac+Backspace', 'mac+alt+Backspace', 'mac+ctrl+Backspace', 'Delete', 'ctrl+Delete', 'shift+Delete', 'mac+Delete'], t.delete, {
      checker: i,
    }], [['Enter', 'mac+Enter'], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o,
      }) => !(o instanceof HTMLButtonElement) && n(a, Qs).contains(o) && !a.isEnterHandled,
    }], [[' ', 'mac+ '], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o,
      }) => !(o instanceof HTMLButtonElement) && n(a, Qs).contains(document.activeElement),
    }], [['Escape', 'mac+Escape'], t.unselectAll], [['ArrowLeft', 'mac+ArrowLeft'], t.translateSelectedEditors, {
      args: [-s, 0],
      checker: e,
    }], [['ctrl+ArrowLeft', 'mac+shift+ArrowLeft'], t.translateSelectedEditors, {
      args: [-r, 0],
      checker: e,
    }], [['ArrowRight', 'mac+ArrowRight'], t.translateSelectedEditors, {
      args: [s, 0],
      checker: e,
    }], [['ctrl+ArrowRight', 'mac+shift+ArrowRight'], t.translateSelectedEditors, {
      args: [r, 0],
      checker: e,
    }], [['ArrowUp', 'mac+ArrowUp'], t.translateSelectedEditors, {
      args: [0, -s],
      checker: e,
    }], [['ctrl+ArrowUp', 'mac+shift+ArrowUp'], t.translateSelectedEditors, {
      args: [0, -r],
      checker: e,
    }], [['ArrowDown', 'mac+ArrowDown'], t.translateSelectedEditors, {
      args: [0, s],
      checker: e,
    }], [['ctrl+ArrowDown', 'mac+shift+ArrowDown'], t.translateSelectedEditors, {
      args: [0, r],
      checker: e,
    }]]));
  }

  destroy() {
    let t; let e; let i; let s; let r; let a; let o; let l; let
      c;
    (t = n(this, Bi)) == null || t.resolve(), m(this, Bi, null), (e = n(this, Io)) == null || e.abort(), m(this, Io, null), this._signal = null;
    for (const d of n(this, fe).values()) d.destroy();
    n(this, fe).clear(), n(this, Qt).clear(), n(this, Yr).clear(), (i = n(this, Jn)) == null || i.clear(), m(this, li, null), n(this, kt).clear(), n(this, Fi).destroy(), (s = n(this, No)) == null || s.destroy(), (r = n(this, Fe)) == null || r.destroy(), (a = n(this, Qn)) == null || a.destroy(), (o = n(this, bs)) == null || o.hide(), m(this, bs, null), (l = n(this, $o)) == null || l.destroy(), m(this, $o, null), m(this, Fo, null), n(this, ys) && (clearTimeout(n(this, ys)), m(this, ys, null)), n(this, vs) && (clearTimeout(n(this, vs)), m(this, vs, null)), (c = this._editorUndoBar) == null || c.destroy(), m(this, Wo, null);
  }

  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }

  get mlManager() {
    return n(this, sc);
  }

  get useNewAltTextFlow() {
    return n(this, tc);
  }

  get useNewAltTextWhenAddingImage() {
    return n(this, jo);
  }

  get hcmFilter() {
    return yt(this, 'hcmFilter', n(this, Zn) ? n(this, ec).addHCMFilter(n(this, Zn).foreground, n(this, Zn).background) : 'none');
  }

  get direction() {
    return yt(this, 'direction', getComputedStyle(n(this, Qs)).direction);
  }

  get _highlightColors() {
    return yt(this, '_highlightColors', n(this, zo) ? new Map(n(this, zo).split(',').map((t) => (t = t.split('=').map((e) => e.trim()), t[1] = t[1].toUpperCase(), t))) : null);
  }

  get highlightColors() {
    const {
      _highlightColors: t,
    } = this;
    if (!t) return yt(this, 'highlightColors', null);
    const e = /* @__PURE__ */ new Map(); const
      i = !!n(this, Zn);
    for (const [s, r] of t) {
      const a = s.endsWith('_HCM');
      if (i && a) {
        e.set(s.replace('_HCM', ''), r);
        continue;
      }
      !i && !a && e.set(s, r);
    }
    return yt(this, 'highlightColors', e);
  }

  get highlightColorNames() {
    return yt(this, 'highlightColorNames', this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }

  getNonHCMColor(t) {
    if (!this._highlightColors) return t;
    const e = this.highlightColorNames.get(t);
    return this._highlightColors.get(e) || t;
  }

  getNonHCMColorName(t) {
    return this.highlightColorNames.get(t) || t;
  }

  setCurrentDrawingSession(t) {
    t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), m(this, Gn, t);
  }

  setMainHighlightColorPicker(t) {
    m(this, $o, t);
  }

  editAltText(t, e = !1) {
    let i;
    (i = n(this, No)) == null || i.editAltText(this, t, e);
  }

  hasCommentManager() {
    return !!n(this, Fe);
  }

  editComment(t, e, i, s) {
    let r;
    (r = n(this, Fe)) == null || r.showDialog(this, t, e, i, s);
  }

  selectComment(t, e) {
    const i = n(this, fe).get(t); const
      s = i == null ? void 0 : i.getEditorByUID(e);
    s == null || s.toggleComment(!0, !0);
  }

  updateComment(t) {
    let e;
    (e = n(this, Fe)) == null || e.updateComment(t.getData());
  }

  updatePopupColor(t) {
    let e;
    (e = n(this, Fe)) == null || e.updatePopupColor(t);
  }

  removeComment(t) {
    let e;
    (e = n(this, Fe)) == null || e.removeComments([t.uid]);
  }

  toggleComment(t, e, i = void 0) {
    let s;
    (s = n(this, Fe)) == null || s.toggleCommentPopup(t, e, i);
  }

  makeCommentColor(t, e) {
    let i;
    return t && ((i = n(this, Fe)) == null ? void 0 : i.makeCommentColor(t, e)) || null;
  }

  getCommentDialogElement() {
    let t;
    return ((t = n(this, Fe)) == null ? void 0 : t.dialogElement) || null;
  }

  async waitForEditorsRendered(t) {
    if (n(this, fe).has(t - 1)) return;
    const {
      resolve: e,
      promise: i,
    } = Promise.withResolvers(); const
      s = (r) => {
        r.pageNumber === t && (this._eventBus._off('editorsrendered', s), e());
      };
    this._eventBus.on('editorsrendered', s), await i;
  }

  getSignature(t) {
    let e;
    (e = n(this, Qn)) == null || e.getSignature({
      uiManager: this,
      editor: t,
    });
  }

  get signatureManager() {
    return n(this, Qn);
  }

  switchToMode(t, e) {
    this._eventBus.on('annotationeditormodechanged', e, {
      once: !0,
      signal: this._signal,
    }), this._eventBus.dispatch('showannotationeditorui', {
      source: this,
      mode: t,
    });
  }

  setPreference(t, e) {
    this._eventBus.dispatch('setpreference', {
      source: this,
      name: t,
      value: e,
    });
  }

  onSetPreference({
    name: t,
    value: e,
  }) {
    switch (t) {
      case 'enableNewAltTextWhenAddingImage':
        m(this, jo, e);
        break;
    }
  }

  onPageChanging({
    pageNumber: t,
  }) {
    m(this, Ho, t - 1);
  }

  focusMainContainer() {
    n(this, Qs).focus();
  }

  findParent(t, e) {
    for (const i of n(this, fe).values()) {
      const {
        x: s,
        y: r,
        width: a,
        height: o,
      } = i.div.getBoundingClientRect();
      if (t >= s && t <= s + a && e >= r && e <= r + o) return i;
    }
    return null;
  }

  disableUserSelect(t = !1) {
    n(this, ac).classList.toggle('noUserSelect', t);
  }

  addShouldRescale(t) {
    n(this, Yr).add(t);
  }

  removeShouldRescale(t) {
    n(this, Yr).delete(t);
  }

  onScaleChanging({
    scale: t,
  }) {
    let e;
    this.commitOrRemove(), this.viewParameters.realScale = t * On.PDF_TO_CSS_UNITS;
    for (const i of n(this, Yr)) i.onScaleChanging();
    (e = n(this, Gn)) == null || e.onScaleChanging();
  }

  onRotationChanging({
    pagesRotation: t,
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = t;
  }

  highlightSelection(t = '', e = !1) {
    const i = document.getSelection();
    if (!i || i.isCollapsed) return;
    const {
      anchorNode: s,
      anchorOffset: r,
      focusNode: a,
      focusOffset: o,
    } = i; const l = i.toString(); const d = A(this, X, Qd).call(this, i).closest('.textLayer'); const
      u = this.getSelectionBoxes(d);
    if (!u) return;
    i.empty();
    const g = A(this, X, Kf).call(this, d); const b = n(this, le) === ft.NONE; const
      E = () => {
        const S = g == null ? void 0 : g.createAndAddNewEditor({
          x: 0,
          y: 0,
        }, !1, {
          methodOfCreation: t,
          boxes: u,
          anchorNode: s,
          anchorOffset: r,
          focusNode: a,
          focusOffset: o,
          text: l,
        });
        b && this.showAllEditors('highlight', !0, !0), e && (S == null || S.editComment());
      };
    if (b) {
      this.switchToMode(ft.HIGHLIGHT, E);
      return;
    }
    E();
  }

  commentSelection(t = '') {
    this.highlightSelection(t, !0);
  }

  getAndRemoveDataFromAnnotationStorage(t) {
    if (!n(this, Ii)) return null;
    const e = `${Hh}${t}`; const
      i = n(this, Ii).getRawValue(e);
    return i && n(this, Ii).remove(e), i;
  }

  addToAnnotationStorage(t) {
    !t.isEmpty() && n(this, Ii) && !n(this, Ii).has(t.id) && n(this, Ii).setValue(t.id, t);
  }

  a11yAlert(t, e = null) {
    const i = n(this, oc);
    i && (i.setAttribute('data-l10n-id', t), e ? i.setAttribute('data-l10n-args', JSON.stringify(e)) : i.removeAttribute('data-l10n-args'));
  }

  blur() {
    if (this.isShiftKeyDown = !1, n(this, Xn) && (m(this, Xn, !1), A(this, X, bh).call(this, 'main_toolbar')), !this.hasSelection) return;
    const {
      activeElement: t,
    } = document;
    for (const e of n(this, kt)) {
      if (e.div.contains(t)) {
        m(this, Kr, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
    }
  }

  focus() {
    if (!n(this, Kr)) return;
    const [t, e] = n(this, Kr);
    m(this, Kr, null), e.addEventListener('focusin', () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal,
    }), e.focus();
  }

  addEditListeners() {
    A(this, X, Jf).call(this), A(this, X, Qf).call(this);
  }

  removeEditListeners() {
    A(this, X, by).call(this), A(this, X, Zf).call(this);
  }

  dragOver(t) {
    for (const {
      type: e,
    } of t.dataTransfer.items) {
      for (const i of n(this, Ni)) {
        if (i.isHandlingMimeForPasting(e)) {
          t.dataTransfer.dropEffect = 'copy', t.preventDefault();
          return;
        }
      }
    }
  }

  drop(t) {
    for (const e of t.dataTransfer.items) {
      for (const i of n(this, Ni)) {
        if (i.isHandlingMimeForPasting(e.type)) {
          i.paste(e, this.currentLayer), t.preventDefault();
          return;
        }
      }
    }
  }

  copy(t) {
    let i;
    if (t.preventDefault(), (i = n(this, li)) == null || i.commitOrRemove(), !this.hasSelection) return;
    const e = [];
    for (const s of n(this, kt)) {
      const r = s.serialize(!0);
      r && e.push(r);
    }
    e.length !== 0 && t.clipboardData.setData('application/pdfjs', JSON.stringify(e));
  }

  cut(t) {
    this.copy(t), this.delete();
  }

  async paste(t) {
    t.preventDefault();
    const {
      clipboardData: e,
    } = t;
    for (const r of e.items) {
      for (const a of n(this, Ni)) {
        if (a.isHandlingMimeForPasting(r.type)) {
          a.paste(r, this.currentLayer);
          return;
        }
      }
    }
    let i = e.getData('application/pdfjs');
    if (!i) return;
    try {
      i = JSON.parse(i);
    } catch (r) {
      pt(`paste: "${r.message}".`);
      return;
    }
    if (!Array.isArray(i)) return;
    this.unselectAll();
    const s = this.currentLayer;
    try {
      const r = [];
      for (const l of i) {
        const c = await s.deserialize(l);
        if (!c) return;
        r.push(c);
      }
      const a = () => {
        for (const l of r) A(this, X, tp).call(this, l);
        A(this, X, ep).call(this, r);
      }; const
        o = () => {
          for (const l of r) l.remove();
        };
      this.addCommands({
        cmd: a,
        undo: o,
        mustExec: !0,
      });
    } catch (r) {
      pt(`paste: "${r.message}".`);
    }
  }

  keydown(t) {
    !this.isShiftKeyDown && t.key === 'Shift' && (this.isShiftKeyDown = !0), n(this, le) !== ft.NONE && !this.isEditorHandlingKeyboard && _o._keyboardManager.exec(this, t);
  }

  keyup(t) {
    this.isShiftKeyDown && t.key === 'Shift' && (this.isShiftKeyDown = !1, n(this, Xn) && (m(this, Xn, !1), A(this, X, bh).call(this, 'main_toolbar')));
  }

  onEditingAction({
    name: t,
  }) {
    switch (t) {
      case 'undo':
      case 'redo':
      case 'delete':
      case 'selectAll':
        this[t]();
        break;
      case 'highlightSelection':
        this.highlightSelection('context_menu');
        break;
      case 'commentSelection':
        this.commentSelection('context_menu');
        break;
    }
  }

  setEditingState(t) {
    t ? (A(this, X, my).call(this), A(this, X, Qf).call(this), A(this, X, $e).call(this, {
      isEditing: n(this, le) !== ft.NONE,
      isEmpty: A(this, X, vh).call(this),
      hasSomethingToUndo: n(this, Fi).hasSomethingToUndo(),
      hasSomethingToRedo: n(this, Fi).hasSomethingToRedo(),
      hasSelectedEditor: !1,
    })) : (A(this, X, yy).call(this), A(this, X, Zf).call(this), A(this, X, $e).call(this, {
      isEditing: !1,
    }), this.disableUserSelect(!1));
  }

  registerEditorTypes(t) {
    if (!n(this, Ni)) {
      m(this, Ni, t);
      for (const e of n(this, Ni)) A(this, X, Vs).call(this, e.defaultPropertiesToUpdate);
    }
  }

  getId() {
    return n(this, Vu).id;
  }

  get currentLayer() {
    return n(this, fe).get(n(this, Ho));
  }

  getLayer(t) {
    return n(this, fe).get(t);
  }

  get currentPageIndex() {
    return n(this, Ho);
  }

  addLayer(t) {
    n(this, fe).set(t.pageIndex, t), n(this, Yn) ? t.enable() : t.disable();
  }

  removeLayer(t) {
    n(this, fe).delete(t.pageIndex);
  }

  async updateMode(t, e = null, i = !1, s = !1, r = !1) {
    let a; let o; let l; let c; let d; let
      u;
    if (n(this, le) !== t && !(n(this, Bi) && (await n(this, Bi).promise, !n(this, Bi)))) {
      if (m(this, Bi, Promise.withResolvers()), (a = n(this, Gn)) == null || a.commitOrRemove(), n(this, le) === ft.POPUP && ((o = n(this, Fe)) == null || o.hideSidebar()), (l = n(this, Fe)) == null || l.destroyPopup(), m(this, le, t), t === ft.NONE) {
        this.setEditingState(!1), A(this, X, Sy).call(this);
        for (const g of n(this, Qt).values()) g.hideStandaloneCommentButton();
        (c = this._editorUndoBar) == null || c.hide(), this.toggleComment(null), n(this, Bi).resolve();
        return;
      }
      for (const g of n(this, Qt).values()) g.addStandaloneCommentButton();
      t === ft.SIGNATURE && await ((d = n(this, Qn)) == null ? void 0 : d.loadSignatures()), this.setEditingState(!0), await A(this, X, wy).call(this), this.unselectAll();
      for (const g of n(this, fe).values()) g.updateMode(t);
      if (t === ft.POPUP) {
        n(this, Fo) || m(this, Fo, await n(this, Wo).getAnnotationsByType(new Set(n(this, Ni).map((E) => E._editorType))));
        const g = /* @__PURE__ */ new Set(); const
          b = [];
        for (const E of n(this, Qt).values()) {
          const {
            annotationElementId: S,
            hasComment: M,
            deleted: T,
          } = E;
          S && g.add(S), M && !T && b.push(E.getData());
        }
        for (const E of n(this, Fo)) {
          const {
            id: S,
            popupRef: M,
            contentsObj: T,
          } = E;
          M && (T != null && T.str) && !g.has(S) && !n(this, Vn).has(S) && b.push(E);
        }
        (u = n(this, Fe)) == null || u.showSidebar(b);
      }
      if (!e) {
        i && this.addNewEditorFromKeyboard(), n(this, Bi).resolve();
        return;
      }
      for (const g of n(this, Qt).values()) g.uid === e ? (this.setSelected(g), r ? g.editComment() : s ? g.enterInEditMode() : g.focus()) : g.unselect();
      n(this, Bi).resolve();
    }
  }

  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }

  updateToolbar(t) {
    t.mode !== n(this, le) && this._eventBus.dispatch('switchannotationeditormode', {
      source: this,
      ...t,
    });
  }

  updateParams(t, e) {
    if (n(this, Ni)) {
      switch (t) {
        case At.CREATE:
          this.currentLayer.addNewEditor(e);
          return;
        case At.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch('reporttelemetry', {
            source: this,
            details: {
              type: 'editing',
              data: {
                type: 'highlight',
                action: 'toggle_visibility',
              },
            },
          }), (n(this, nc) || m(this, nc, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors('highlight', e);
          break;
      }
      if (this.hasSelection) for (const i of n(this, kt)) i.updateParams(t, e);
      else for (const i of n(this, Ni)) i.updateDefaultParams(t, e);
    }
  }

  showAllEditors(t, e, i = !1) {
    let r;
    for (const a of n(this, Qt).values()) a.editorType === t && a.show(e);
    (((r = n(this, nc)) == null ? void 0 : r.get(At.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && A(this, X, Vs).call(this, [[At.HIGHLIGHT_SHOW_ALL, e]]);
  }

  enableWaiting(t = !1) {
    if (n(this, ic) !== t) {
      m(this, ic, t);
      for (const e of n(this, fe).values()) t ? e.disableClick() : e.enableClick(), e.div.classList.toggle('waiting', t);
    }
  }

  * getEditors(t) {
    for (const e of n(this, Qt).values()) e.pageIndex === t && (yield e);
  }

  getEditor(t) {
    return n(this, Qt).get(t);
  }

  addEditor(t) {
    n(this, Qt).set(t.id, t);
  }

  removeEditor(t) {
    let e; let
      i;
    t.div.contains(document.activeElement) && (n(this, ys) && clearTimeout(n(this, ys)), m(this, ys, setTimeout(() => {
      this.focusMainContainer(), m(this, ys, null);
    }, 0))), n(this, Qt).delete(t.id), t.annotationElementId && ((e = n(this, Jn)) == null || e.delete(t.annotationElementId)), this.unselect(t), (!t.annotationElementId || !n(this, Vn).has(t.annotationElementId)) && ((i = n(this, Ii)) == null || i.remove(t.id));
  }

  addDeletedAnnotationElement(t) {
    n(this, Vn).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }

  isDeletedAnnotationElement(t) {
    return n(this, Vn).has(t);
  }

  removeDeletedAnnotationElement(t) {
    n(this, Vn).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }

  setActiveEditor(t) {
    n(this, li) !== t && (m(this, li, t), t && A(this, X, Vs).call(this, t.propertiesToUpdate));
  }

  updateUI(t) {
    n(this, X, Ay) === t && A(this, X, Vs).call(this, t.propertiesToUpdate);
  }

  updateUIForDefaultProperties(t) {
    A(this, X, Vs).call(this, t.defaultPropertiesToUpdate);
  }

  toggleSelected(t) {
    if (n(this, kt).has(t)) {
      n(this, kt).delete(t), t.unselect(), A(this, X, $e).call(this, {
        hasSelectedEditor: this.hasSelection,
      });
      return;
    }
    n(this, kt).add(t), t.select(), A(this, X, Vs).call(this, t.propertiesToUpdate), A(this, X, $e).call(this, {
      hasSelectedEditor: !0,
    });
  }

  setSelected(t) {
    let e;
    this.updateToolbar({
      mode: t.mode,
      editId: t.id,
    }), (e = n(this, Gn)) == null || e.commitOrRemove();
    for (const i of n(this, kt)) i !== t && i.unselect();
    n(this, kt).clear(), n(this, kt).add(t), t.select(), A(this, X, Vs).call(this, t.propertiesToUpdate), A(this, X, $e).call(this, {
      hasSelectedEditor: !0,
    });
  }

  isSelected(t) {
    return n(this, kt).has(t);
  }

  get firstSelectedEditor() {
    return n(this, kt).values().next().value;
  }

  unselect(t) {
    t.unselect(), n(this, kt).delete(t), A(this, X, $e).call(this, {
      hasSelectedEditor: this.hasSelection,
    });
  }

  get hasSelection() {
    return n(this, kt).size !== 0;
  }

  get isEnterHandled() {
    return n(this, kt).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }

  undo() {
    let t;
    n(this, Fi).undo(), A(this, X, $e).call(this, {
      hasSomethingToUndo: n(this, Fi).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: A(this, X, vh).call(this),
    }), (t = this._editorUndoBar) == null || t.hide();
  }

  redo() {
    n(this, Fi).redo(), A(this, X, $e).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: n(this, Fi).hasSomethingToRedo(),
      isEmpty: A(this, X, vh).call(this),
    });
  }

  addCommands(t) {
    n(this, Fi).add(t), A(this, X, $e).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: A(this, X, vh).call(this),
    });
  }

  cleanUndoStack(t) {
    n(this, Fi).cleanType(t);
  }

  delete() {
    let r;
    this.commitOrRemove();
    const t = (r = this.currentLayer) == null ? void 0 : r.endDrawingSession(!0);
    if (!this.hasSelection && !t) return;
    const e = t ? [t] : [...n(this, kt)]; const i = () => {
      let a;
      (a = this._editorUndoBar) == null || a.show(s, e.length === 1 ? e[0].editorType : e.length);
      for (const o of e) o.remove();
    }; const
      s = () => {
        for (const a of e) A(this, X, tp).call(this, a);
      };
    this.addCommands({
      cmd: i,
      undo: s,
      mustExec: !0,
    });
  }

  commitOrRemove() {
    let t;
    (t = n(this, li)) == null || t.commitOrRemove();
  }

  hasSomethingToControl() {
    return n(this, li) || this.hasSelection;
  }

  selectAll() {
    for (const t of n(this, kt)) t.commit();
    A(this, X, ep).call(this, n(this, Qt).values());
  }

  unselectAll() {
    let t;
    if (!(n(this, li) && (n(this, li).commitOrRemove(), n(this, le) !== ft.NONE)) && !((t = n(this, Gn)) != null && t.commitOrRemove()) && this.hasSelection) {
      for (const e of n(this, kt)) e.unselect();
      n(this, kt).clear(), A(this, X, $e).call(this, {
        hasSelectedEditor: !1,
      });
    }
  }

  translateSelectedEditors(t, e, i = !1) {
    if (i || this.commitOrRemove(), !this.hasSelection) return;
    n(this, tr)[0] += t, n(this, tr)[1] += e;
    const [s, r] = n(this, tr); const a = [...n(this, kt)]; const
      o = 1e3;
    n(this, vs) && clearTimeout(n(this, vs)), m(this, vs, setTimeout(() => {
      m(this, vs, null), n(this, tr)[0] = n(this, tr)[1] = 0, this.addCommands({
        cmd: () => {
          for (const l of a) n(this, Qt).has(l.id) && (l.translateInPage(s, r), l.translationDone());
        },
        undo: () => {
          for (const l of a) n(this, Qt).has(l.id) && (l.translateInPage(-s, -r), l.translationDone());
        },
        mustExec: !1,
      });
    }, o));
    for (const l of a) l.translateInPage(t, e), l.translationDone();
  }

  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), m(this, ms, /* @__PURE__ */ new Map());
      for (const t of n(this, kt)) {
        n(this, ms).set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1,
        });
      }
    }
  }

  endDragSession() {
    if (!n(this, ms)) return !1;
    this.disableUserSelect(!1);
    const t = n(this, ms);
    m(this, ms, null);
    let e = !1;
    for (const [{
      x: s,
      y: r,
      pageIndex: a,
    }, o] of t) o.newX = s, o.newY = r, o.newPageIndex = a, e || (e = s !== o.savedX || r !== o.savedY || a !== o.savedPageIndex);
    if (!e) return !1;
    const i = (s, r, a, o) => {
      if (n(this, Qt).has(s.id)) {
        const l = n(this, fe).get(o);
        l ? s._setParentAndPosition(l, r, a) : (s.pageIndex = o, s.x = r, s.y = a);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [s, {
          newX: r,
          newY: a,
          newPageIndex: o,
        }] of t) i(s, r, a, o);
      },
      undo: () => {
        for (const [s, {
          savedX: r,
          savedY: a,
          savedPageIndex: o,
        }] of t) i(s, r, a, o);
      },
      mustExec: !0,
    }), !0;
  }

  dragSelectedEditors(t, e) {
    if (n(this, ms)) for (const i of n(this, ms).keys()) i.drag(t, e);
  }

  rebuild(t) {
    if (t.parent === null) {
      const e = this.getLayer(t.pageIndex);
      e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
    } else t.parent.addOrRebuild(t);
  }

  get isEditorHandlingKeyboard() {
    let t;
    return ((t = this.getActive()) == null ? void 0 : t.shouldGetKeyboardEvents()) || n(this, kt).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }

  isActive(t) {
    return n(this, li) === t;
  }

  getActive() {
    return n(this, li);
  }

  getMode() {
    return n(this, le);
  }

  isEditingMode() {
    return n(this, le) !== ft.NONE;
  }

  get imageManager() {
    return yt(this, 'imageManager', new Xf());
  }

  getSelectionBoxes(t) {
    if (!t) return null;
    const e = document.getSelection();
    for (let c = 0, d = e.rangeCount; c < d; c++) if (!t.contains(e.getRangeAt(c).commonAncestorContainer)) return null;
    const {
      x: i,
      y: s,
      width: r,
      height: a,
    } = t.getBoundingClientRect();
    let o;
    switch (t.getAttribute('data-main-rotation')) {
      case '90':
        o = (c, d, u, g) => ({
          x: (d - s) / a,
          y: 1 - (c + u - i) / r,
          width: g / a,
          height: u / r,
        });
        break;
      case '180':
        o = (c, d, u, g) => ({
          x: 1 - (c + u - i) / r,
          y: 1 - (d + g - s) / a,
          width: u / r,
          height: g / a,
        });
        break;
      case '270':
        o = (c, d, u, g) => ({
          x: 1 - (d + g - s) / a,
          y: (c - i) / r,
          width: g / a,
          height: u / r,
        });
        break;
      default:
        o = (c, d, u, g) => ({
          x: (c - i) / r,
          y: (d - s) / a,
          width: u / r,
          height: g / a,
        });
        break;
    }
    const l = [];
    for (let c = 0, d = e.rangeCount; c < d; c++) {
      const u = e.getRangeAt(c);
      if (!u.collapsed) {
        for (const {
          x: g,
          y: b,
          width: E,
          height: S,
        } of u.getClientRects()) E === 0 || S === 0 || l.push(o(g, b, E, S));
      }
    }
    return l.length === 0 ? null : l;
  }

  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e,
  }) {
    (n(this, Bo) || m(this, Bo, /* @__PURE__ */ new Map())).set(t, e);
  }

  removeChangedExistingAnnotation({
    annotationElementId: t,
  }) {
    let e;
    (e = n(this, Bo)) == null || e.delete(t);
  }

  renderAnnotationElement(t) {
    let s;
    const e = (s = n(this, Bo)) == null ? void 0 : s.get(t.data.id);
    if (!e) return;
    const i = n(this, Ii).getRawValue(e);
    i && (n(this, le) === ft.NONE && !i.hasBeenModified || i.renderAnnotationElement(t));
  }

  setMissingCanvas(t, e, i) {
    let r;
    const s = (r = n(this, Jn)) == null ? void 0 : r.get(t);
    s && (s.setCanvas(e, i), n(this, Jn).delete(t));
  }

  addMissingCanvas(t, e) {
    (n(this, Jn) || m(this, Jn, /* @__PURE__ */ new Map())).set(t, e);
  }
};
Io = new WeakMap(), li = new WeakMap(), Fo = new WeakMap(), Qt = new WeakMap(), fe = new WeakMap(), No = new WeakMap(), Ii = new WeakMap(), Bo = new WeakMap(), Fi = new WeakMap(), Fe = new WeakMap(), Wn = new WeakMap(), Gn = new WeakMap(), Ho = new WeakMap(), Vn = new WeakMap(), ms = new WeakMap(), Ni = new WeakMap(), Yr = new WeakMap(), Zh = new WeakMap(), tc = new WeakMap(), jo = new WeakMap(), ec = new WeakMap(), ys = new WeakMap(), qn = new WeakMap(), zo = new WeakMap(), Xn = new WeakMap(), bs = new WeakMap(), Vu = new WeakMap(), Yn = new WeakMap(), Uo = new WeakMap(), ic = new WeakMap(), Kn = new WeakMap(), Kr = new WeakMap(), $o = new WeakMap(), Jn = new WeakMap(), sc = new WeakMap(), le = new WeakMap(), kt = new WeakMap(), Js = new WeakMap(), Qn = new WeakMap(), Zn = new WeakMap(), nc = new WeakMap(), Wo = new WeakMap(), rc = new WeakMap(), tr = new WeakMap(), vs = new WeakMap(), Qs = new WeakMap(), ac = new WeakMap(), oc = new WeakMap(), Bi = new WeakMap(), X = new WeakSet(), Qd = function ({
  anchorNode: t,
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, Kf = function (t) {
  const {
    currentLayer: e,
  } = this;
  if (e.hasTextLayer(t)) return e;
  for (const i of n(this, fe).values()) if (i.hasTextLayer(t)) return i;
  return null;
}, fy = function () {
  const t = document.getSelection();
  if (!t || t.isCollapsed) return;
  const i = A(this, X, Qd).call(this, t).closest('.textLayer'); const
    s = this.getSelectionBoxes(i);
  s && (n(this, bs) || m(this, bs, new Rw(this)), n(this, bs).show(i, s, this.direction === 'ltr'));
}, py = function () {
  let r; let a; let
    o;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    n(this, Js) && ((r = n(this, bs)) == null || r.hide(), m(this, Js, null), A(this, X, $e).call(this, {
      hasSelectedText: !1,
    }));
    return;
  }
  const {
    anchorNode: e,
  } = t;
  if (e === n(this, Js)) return;
  const s = A(this, X, Qd).call(this, t).closest('.textLayer');
  if (!s) {
    n(this, Js) && ((a = n(this, bs)) == null || a.hide(), m(this, Js, null), A(this, X, $e).call(this, {
      hasSelectedText: !1,
    }));
    return;
  }
  if ((o = n(this, bs)) == null || o.hide(), m(this, Js, e), A(this, X, $e).call(this, {
    hasSelectedText: !0,
  }), !(n(this, le) !== ft.HIGHLIGHT && n(this, le) !== ft.NONE) && (n(this, le) === ft.HIGHLIGHT && this.showAllEditors('highlight', !0, !0), m(this, Xn, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const l = n(this, le) === ft.HIGHLIGHT ? A(this, X, Kf).call(this, s) : null;
    if (l == null || l.toggleDrawing(), n(this, Uo)) {
      const c = new AbortController(); const d = this.combinedSignal(c); const
        u = (g) => {
          g.type === 'pointerup' && g.button !== 0 || (c.abort(), l == null || l.toggleDrawing(!0), g.type === 'pointerup' && A(this, X, bh).call(this, 'main_toolbar'));
        };
      window.addEventListener('pointerup', u, {
        signal: d,
      }), window.addEventListener('blur', u, {
        signal: d,
      });
    } else l == null || l.toggleDrawing(!0), A(this, X, bh).call(this, 'main_toolbar');
  }
}, bh = function (t = '') {
  n(this, le) === ft.HIGHLIGHT ? this.highlightSelection(t) : n(this, Zh) && A(this, X, fy).call(this);
}, gy = function () {
  document.addEventListener('selectionchange', A(this, X, py).bind(this), {
    signal: this._signal,
  });
}, my = function () {
  if (n(this, qn)) return;
  m(this, qn, new AbortController());
  const t = this.combinedSignal(n(this, qn));
  window.addEventListener('focus', this.focus.bind(this), {
    signal: t,
  }), window.addEventListener('blur', this.blur.bind(this), {
    signal: t,
  });
}, yy = function () {
  let t;
  (t = n(this, qn)) == null || t.abort(), m(this, qn, null);
}, Jf = function () {
  if (n(this, Kn)) return;
  m(this, Kn, new AbortController());
  const t = this.combinedSignal(n(this, Kn));
  window.addEventListener('keydown', this.keydown.bind(this), {
    signal: t,
  }), window.addEventListener('keyup', this.keyup.bind(this), {
    signal: t,
  });
}, by = function () {
  let t;
  (t = n(this, Kn)) == null || t.abort(), m(this, Kn, null);
}, Qf = function () {
  if (n(this, Wn)) return;
  m(this, Wn, new AbortController());
  const t = this.combinedSignal(n(this, Wn));
  document.addEventListener('copy', this.copy.bind(this), {
    signal: t,
  }), document.addEventListener('cut', this.cut.bind(this), {
    signal: t,
  }), document.addEventListener('paste', this.paste.bind(this), {
    signal: t,
  });
}, Zf = function () {
  let t;
  (t = n(this, Wn)) == null || t.abort(), m(this, Wn, null);
}, vy = function () {
  const t = this._signal;
  document.addEventListener('dragover', this.dragOver.bind(this), {
    signal: t,
  }), document.addEventListener('drop', this.drop.bind(this), {
    signal: t,
  });
}, $e = function (t) {
  Object.entries(t).some(([i, s]) => n(this, rc)[i] !== s) && (this._eventBus.dispatch('annotationeditorstateschanged', {
    source: this,
    details: Object.assign(n(this, rc), t),
  }), n(this, le) === ft.HIGHLIGHT && t.hasSelectedEditor === !1 && A(this, X, Vs).call(this, [[At.HIGHLIGHT_FREE, !0]]));
}, Vs = function (t) {
  this._eventBus.dispatch('annotationeditorparamschanged', {
    source: this,
    details: t,
  });
}, wy = async function () {
  if (!n(this, Yn)) {
    m(this, Yn, !0);
    const t = [];
    for (const e of n(this, fe).values()) t.push(e.enable());
    await Promise.all(t);
    for (const e of n(this, Qt).values()) e.enable();
  }
}, Sy = function () {
  if (this.unselectAll(), n(this, Yn)) {
    m(this, Yn, !1);
    for (const t of n(this, fe).values()) t.disable();
    for (const t of n(this, Qt).values()) t.disable();
  }
}, tp = function (t) {
  const e = n(this, fe).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, Ay = function () {
  let t = null;
  for (t of n(this, kt)) ;
  return t;
}, vh = function () {
  if (n(this, Qt).size === 0) return !0;
  if (n(this, Qt).size === 1) for (const t of n(this, Qt).values()) return t.isEmpty();
  return !1;
}, ep = function (t) {
  for (const e of n(this, kt)) e.unselect();
  n(this, kt).clear();
  for (const e of t) e.isEmpty() || (n(this, kt).add(e), e.select());
  A(this, X, $e).call(this, {
    hasSelectedEditor: this.hasSelection,
  });
}, V(_o, 'TRANSLATE_SMALL', 1), V(_o, 'TRANSLATE_BIG', 10);
const Ir = _o;
let me; let ws; let Yi; let Go; let Ss; let hi; let Vo; let As; let Ze; let Zs; let Jr; let _s; let er; let ls; let wh; let
  Zd;
const We = class We {
  constructor(t) {
    v(this, ls);
    v(this, me, null);
    v(this, ws, !1);
    v(this, Yi, null);
    v(this, Go, null);
    v(this, Ss, null);
    v(this, hi, null);
    v(this, Vo, !1);
    v(this, As, null);
    v(this, Ze, null);
    v(this, Zs, null);
    v(this, Jr, null);
    v(this, _s, !1);
    m(this, Ze, t), m(this, _s, t._uiManager.useNewAltTextFlow), n(We, er) || m(We, er, Object.freeze({
      added: 'pdfjs-editor-new-alt-text-added-button',
      'added-label': 'pdfjs-editor-new-alt-text-added-button-label',
      missing: 'pdfjs-editor-new-alt-text-missing-button',
      'missing-label': 'pdfjs-editor-new-alt-text-missing-button-label',
      review: 'pdfjs-editor-new-alt-text-to-review-button',
      'review-label': 'pdfjs-editor-new-alt-text-to-review-button-label',
    }));
  }

  static initialize(t) {
    We._l10n ?? (We._l10n = t);
  }

  async render() {
    const t = m(this, Yi, document.createElement('button'));
    t.className = 'altText', t.tabIndex = '0';
    const e = m(this, Go, document.createElement('span'));
    t.append(e), n(this, _s) ? (t.classList.add('new'), t.setAttribute('data-l10n-id', n(We, er).missing), e.setAttribute('data-l10n-id', n(We, er)['missing-label'])) : (t.setAttribute('data-l10n-id', 'pdfjs-editor-alt-text-button'), e.setAttribute('data-l10n-id', 'pdfjs-editor-alt-text-button-label'));
    const i = n(this, Ze)._uiManager._signal;
    t.addEventListener('contextmenu', Ri, {
      signal: i,
    }), t.addEventListener('pointerdown', (r) => r.stopPropagation(), {
      signal: i,
    });
    const s = (r) => {
      r.preventDefault(), n(this, Ze)._uiManager.editAltText(n(this, Ze)), n(this, _s) && n(this, Ze)._reportTelemetry({
        action: 'pdfjs.image.alt_text.image_status_label_clicked',
        data: {
          label: n(this, ls, wh),
        },
      });
    };
    return t.addEventListener('click', s, {
      capture: !0,
      signal: i,
    }), t.addEventListener('keydown', (r) => {
      r.target === t && r.key === 'Enter' && (m(this, Vo, !0), s(r));
    }, {
      signal: i,
    }), await A(this, ls, Zd).call(this), t;
  }

  finish() {
    n(this, Yi) && (n(this, Yi).focus({
      focusVisible: n(this, Vo),
    }), m(this, Vo, !1));
  }

  isEmpty() {
    return n(this, _s) ? n(this, me) === null : !n(this, me) && !n(this, ws);
  }

  hasData() {
    return n(this, _s) ? n(this, me) !== null || !!n(this, Zs) : this.isEmpty();
  }

  get guessedText() {
    return n(this, Zs);
  }

  async setGuessedText(t) {
    n(this, me) === null && (m(this, Zs, t), m(this, Jr, await We._l10n.get('pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer', {
      generatedAltText: t,
    })), A(this, ls, Zd).call(this));
  }

  toggleAltTextBadge(t = !1) {
    let e;
    if (!n(this, _s) || n(this, me)) {
      (e = n(this, As)) == null || e.remove(), m(this, As, null);
      return;
    }
    if (!n(this, As)) {
      const i = m(this, As, document.createElement('div'));
      i.className = 'noAltTextBadge', n(this, Ze).div.append(i);
    }
    n(this, As).classList.toggle('hidden', !t);
  }

  serialize(t) {
    let e = n(this, me);
    return !t && n(this, Zs) === e && (e = n(this, Jr)), {
      altText: e,
      decorative: n(this, ws),
      guessedText: n(this, Zs),
      textWithDisclaimer: n(this, Jr),
    };
  }

  get data() {
    return {
      altText: n(this, me),
      decorative: n(this, ws),
    };
  }

  set data({
    altText: t,
    decorative: e,
    guessedText: i,
    textWithDisclaimer: s,
    cancel: r = !1,
  }) {
    i && (m(this, Zs, i), m(this, Jr, s)), !(n(this, me) === t && n(this, ws) === e) && (r || (m(this, me, t), m(this, ws, e)), A(this, ls, Zd).call(this));
  }

  toggle(t = !1) {
    n(this, Yi) && (!t && n(this, hi) && (clearTimeout(n(this, hi)), m(this, hi, null)), n(this, Yi).disabled = !t);
  }

  shown() {
    n(this, Ze)._reportTelemetry({
      action: 'pdfjs.image.alt_text.image_status_label_displayed',
      data: {
        label: n(this, ls, wh),
      },
    });
  }

  destroy() {
    let t; let
      e;
    (t = n(this, Yi)) == null || t.remove(), m(this, Yi, null), m(this, Go, null), m(this, Ss, null), (e = n(this, As)) == null || e.remove(), m(this, As, null);
  }
};
me = new WeakMap(), ws = new WeakMap(), Yi = new WeakMap(), Go = new WeakMap(), Ss = new WeakMap(), hi = new WeakMap(), Vo = new WeakMap(), As = new WeakMap(), Ze = new WeakMap(), Zs = new WeakMap(), Jr = new WeakMap(), _s = new WeakMap(), er = new WeakMap(), ls = new WeakSet(), wh = function () {
  return n(this, me) && 'added' || n(this, me) === null && this.guessedText && 'review' || 'missing';
}, Zd = async function () {
  let s; let r; let
    a;
  const t = n(this, Yi);
  if (!t) return;
  if (n(this, _s)) {
    if (t.classList.toggle('done', !!n(this, me)), t.setAttribute('data-l10n-id', n(We, er)[n(this, ls, wh)]), (s = n(this, Go)) == null || s.setAttribute('data-l10n-id', n(We, er)[`${n(this, ls, wh)}-label`]), !n(this, me)) {
      (r = n(this, Ss)) == null || r.remove();
      return;
    }
  } else {
    if (!n(this, me) && !n(this, ws)) {
      t.classList.remove('done'), (a = n(this, Ss)) == null || a.remove();
      return;
    }
    t.classList.add('done'), t.setAttribute('data-l10n-id', 'pdfjs-editor-alt-text-edit-button');
  }
  let e = n(this, Ss);
  if (!e) {
    m(this, Ss, e = document.createElement('span')), e.className = 'tooltip', e.setAttribute('role', 'tooltip'), e.id = `alt-text-tooltip-${n(this, Ze).id}`;
    const o = 100; const
      l = n(this, Ze)._uiManager._signal;
    l.addEventListener('abort', () => {
      clearTimeout(n(this, hi)), m(this, hi, null);
    }, {
      once: !0,
    }), t.addEventListener('mouseenter', () => {
      m(this, hi, setTimeout(() => {
        m(this, hi, null), n(this, Ss).classList.add('show'), n(this, Ze)._reportTelemetry({
          action: 'alt_text_tooltip',
        });
      }, o));
    }, {
      signal: l,
    }), t.addEventListener('mouseleave', () => {
      let c;
      n(this, hi) && (clearTimeout(n(this, hi)), m(this, hi, null)), (c = n(this, Ss)) == null || c.classList.remove('show');
    }, {
      signal: l,
    });
  }
  n(this, ws) ? e.setAttribute('data-l10n-id', 'pdfjs-editor-alt-text-decorative-tooltip') : (e.removeAttribute('data-l10n-id'), e.textContent = n(this, me)), e.parentNode || t.append(e);
  const i = n(this, Ze).getElementForAltText();
  i == null || i.setAttribute('aria-describedby', e.id);
}, v(We, er, null), V(We, '_l10n', null);
const Lu = We;
let Ce; let Hi; let Qr; let Ut; let lc; let Zr; let Ki; let ta; let ea; let ia; let hc; let
  ip;
class zd {
  constructor(t) {
    v(this, hc);
    v(this, Ce, null);
    v(this, Hi, null);
    v(this, Qr, !1);
    v(this, Ut, null);
    v(this, lc, null);
    v(this, Zr, null);
    v(this, Ki, null);
    v(this, ta, null);
    v(this, ea, !1);
    v(this, ia, null);
    m(this, Ut, t);
  }

  renderForToolbar() {
    const t = m(this, Hi, document.createElement('button'));
    return t.className = 'comment', A(this, hc, ip).call(this, t, !1);
  }

  renderForStandalone() {
    const t = m(this, Ce, document.createElement('button'));
    t.className = 'annotationCommentButton';
    const e = n(this, Ut).commentButtonPosition;
    if (e) {
      const {
        style: i,
      } = t;
      i.insetInlineEnd = `calc(${100 * (n(this, Ut)._uiManager.direction === 'ltr' ? 1 - e[0] : e[0])}% - var(--comment-button-dim))`, i.top = `calc(${100 * e[1]}% - var(--comment-button-dim))`;
      const s = n(this, Ut).commentButtonColor;
      s && (i.backgroundColor = s);
    }
    return A(this, hc, ip).call(this, t, !0);
  }

  focusButton() {
    setTimeout(() => {
      let t;
      (t = n(this, Ce) ?? n(this, Hi)) == null || t.focus();
    }, 0);
  }

  onUpdatedColor() {
    if (!n(this, Ce)) return;
    const t = n(this, Ut).commentButtonColor;
    t && (n(this, Ce).style.backgroundColor = t), n(this, Ut)._uiManager.updatePopupColor(n(this, Ut));
  }

  get commentButtonWidth() {
    let t;
    return (((t = n(this, Ce)) == null ? void 0 : t.getBoundingClientRect().width) ?? 0) / n(this, Ut).parent.boundingClientRect.width;
  }

  get commentPopupPositionInLayer() {
    if (n(this, ia)) return n(this, ia);
    if (!n(this, Ce)) return null;
    const {
      x: t,
      y: e,
      height: i,
    } = n(this, Ce).getBoundingClientRect(); const
      {
        x: s,
        y: r,
        width: a,
        height: o,
      } = n(this, Ut).parent.boundingClientRect;
    return [(t - s) / a, (e + i - r) / o];
  }

  set commentPopupPositionInLayer(t) {
    m(this, ia, t);
  }

  hasDefaultPopupPosition() {
    return n(this, ia) === null;
  }

  removeStandaloneCommentButton() {
    let t;
    (t = n(this, Ce)) == null || t.remove(), m(this, Ce, null);
  }

  removeToolbarCommentButton() {
    let t;
    (t = n(this, Hi)) == null || t.remove(), m(this, Hi, null);
  }

  setCommentButtonStates({
    selected: t,
    hasPopup: e,
  }) {
    n(this, Ce) && (n(this, Ce).classList.toggle('selected', t), n(this, Ce).ariaExpanded = e);
  }

  edit(t) {
    const e = this.commentPopupPositionInLayer;
    let i; let
      s;
    if (e) [i, s] = e;
    else {
      [i, s] = n(this, Ut).commentButtonPosition;
      const {
        width: d,
        height: u,
        x: g,
        y: b,
      } = n(this, Ut);
      i = g + i * d, s = b + s * u;
    }
    const r = n(this, Ut).parent.boundingClientRect; const
      {
        x: a,
        y: o,
        width: l,
        height: c,
      } = r;
    n(this, Ut)._uiManager.editComment(n(this, Ut), a + i * l, o + s * c, {
      ...t,
      parentDimensions: r,
    });
  }

  finish() {
    n(this, Hi) && (n(this, Hi).focus({
      focusVisible: n(this, Qr),
    }), m(this, Qr, !1));
  }

  isDeleted() {
    return n(this, ea) || n(this, Ki) === '';
  }

  isEmpty() {
    return n(this, Ki) === null;
  }

  hasBeenEdited() {
    return this.isDeleted() || n(this, Ki) !== n(this, lc);
  }

  serialize() {
    return this.data;
  }

  get data() {
    return {
      text: n(this, Ki),
      richText: n(this, Zr),
      date: n(this, ta),
      deleted: this.isDeleted(),
    };
  }

  set data(t) {
    if (t !== n(this, Ki) && m(this, Zr, null), t === null) {
      m(this, Ki, ''), m(this, ea, !0);
      return;
    }
    m(this, Ki, t), m(this, ta, /* @__PURE__ */ new Date()), m(this, ea, !1);
  }

  setInitialText(t, e = null) {
    m(this, lc, t), this.data = t, m(this, ta, null), m(this, Zr, e);
  }

  shown() {
  }

  destroy() {
    let t; let
      e;
    (t = n(this, Hi)) == null || t.remove(), m(this, Hi, null), (e = n(this, Ce)) == null || e.remove(), m(this, Ce, null), m(this, Ki, ''), m(this, Zr, null), m(this, ta, null), m(this, Ut, null), m(this, Qr, !1), m(this, ea, !1);
  }
}
Ce = new WeakMap(), Hi = new WeakMap(), Qr = new WeakMap(), Ut = new WeakMap(), lc = new WeakMap(), Zr = new WeakMap(), Ki = new WeakMap(), ta = new WeakMap(), ea = new WeakMap(), ia = new WeakMap(), hc = new WeakSet(), ip = function (t, e) {
  if (!n(this, Ut)._uiManager.hasCommentManager()) return null;
  t.tabIndex = '0', t.ariaHasPopup = 'dialog', e ? (t.ariaControls = 'commentPopup', t.setAttribute('data-l10n-id', 'pdfjs-show-comment-button')) : (t.ariaControlsElements = [n(this, Ut)._uiManager.getCommentDialogElement()], t.setAttribute('data-l10n-id', 'pdfjs-editor-edit-comment-button'));
  const i = n(this, Ut)._uiManager._signal;
  if (!(i instanceof AbortSignal) || i.aborted) return t;
  t.addEventListener('contextmenu', Ri, {
    signal: i,
  }), e && (t.addEventListener('focusin', (r) => {
    n(this, Ut)._focusEventsAllowed = !1, Kt(r);
  }, {
    capture: !0,
    signal: i,
  }), t.addEventListener('focusout', (r) => {
    n(this, Ut)._focusEventsAllowed = !0, Kt(r);
  }, {
    capture: !0,
    signal: i,
  })), t.addEventListener('pointerdown', (r) => r.stopPropagation(), {
    signal: i,
  });
  const s = (r) => {
    r.preventDefault(), t === n(this, Hi) ? this.edit() : n(this, Ut).toggleComment(!0);
  };
  return t.addEventListener('click', s, {
    capture: !0,
    signal: i,
  }), t.addEventListener('keydown', (r) => {
    r.target === t && r.key === 'Enter' && (m(this, Qr, !0), s(r));
  }, {
    signal: i,
  }), t.addEventListener('pointerenter', () => {
    n(this, Ut).toggleComment(!1, !0);
  }, {
    signal: i,
  }), t.addEventListener('pointerleave', () => {
    n(this, Ut).toggleComment(!1, !1);
  }, {
    signal: i,
  }), t;
};
let qo; let sa; let cc; let dc; let uc; let fc; let pc; let tn; let na; let en; let ra; let sn; let Fr; let _y; let xy; let
  Ey;
const Og = class Og {
  constructor({
    container: t,
    isPinchingDisabled: e = null,
    isPinchingStopped: i = null,
    onPinchStart: s = null,
    onPinching: r = null,
    onPinchEnd: a = null,
    signal: o,
  }) {
    v(this, Fr);
    v(this, qo);
    v(this, sa, !1);
    v(this, cc, null);
    v(this, dc);
    v(this, uc);
    v(this, fc);
    v(this, pc);
    v(this, tn, null);
    v(this, na);
    v(this, en, null);
    v(this, ra);
    v(this, sn, null);
    m(this, qo, t), m(this, cc, i), m(this, dc, e), m(this, uc, s), m(this, fc, r), m(this, pc, a), m(this, ra, new AbortController()), m(this, na, AbortSignal.any([o, n(this, ra).signal])), t.addEventListener('touchstart', A(this, Fr, _y).bind(this), {
      passive: !1,
      signal: n(this, na),
    });
  }

  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return 35 / cs.pixelRatio;
  }

  destroy() {
    let t; let
      e;
    (t = n(this, ra)) == null || t.abort(), m(this, ra, null), (e = n(this, tn)) == null || e.abort(), m(this, tn, null);
  }
};
qo = new WeakMap(), sa = new WeakMap(), cc = new WeakMap(), dc = new WeakMap(), uc = new WeakMap(), fc = new WeakMap(), pc = new WeakMap(), tn = new WeakMap(), na = new WeakMap(), en = new WeakMap(), ra = new WeakMap(), sn = new WeakMap(), Fr = new WeakSet(), _y = function (t) {
  let s; let r; let
    a;
  if ((s = n(this, dc)) != null && s.call(this)) return;
  if (t.touches.length === 1) {
    if (n(this, tn)) return;
    const o = m(this, tn, new AbortController()); const l = AbortSignal.any([n(this, na), o.signal]); const c = n(this, qo); const d = {
      capture: !0,
      signal: l,
      passive: !1,
    }; const
      u = (g) => {
        let b;
        g.pointerType === 'touch' && ((b = n(this, tn)) == null || b.abort(), m(this, tn, null));
      };
    c.addEventListener('pointerdown', (g) => {
      g.pointerType === 'touch' && (Kt(g), u(g));
    }, d), c.addEventListener('pointerup', u, d), c.addEventListener('pointercancel', u, d);
    return;
  }
  if (!n(this, sn)) {
    m(this, sn, new AbortController());
    const o = AbortSignal.any([n(this, na), n(this, sn).signal]); const l = n(this, qo); const
      c = {
        signal: o,
        capture: !1,
        passive: !1,
      };
    l.addEventListener('touchmove', A(this, Fr, xy).bind(this), c);
    const d = A(this, Fr, Ey).bind(this);
    l.addEventListener('touchend', d, c), l.addEventListener('touchcancel', d, c), c.capture = !0, l.addEventListener('pointerdown', Kt, c), l.addEventListener('pointermove', Kt, c), l.addEventListener('pointercancel', Kt, c), l.addEventListener('pointerup', Kt, c), (r = n(this, uc)) == null || r.call(this);
  }
  if (Kt(t), t.touches.length !== 2 || (a = n(this, cc)) != null && a.call(this)) {
    m(this, en, null);
    return;
  }
  let [e, i] = t.touches;
  e.identifier > i.identifier && ([e, i] = [i, e]), m(this, en, {
    touch0X: e.screenX,
    touch0Y: e.screenY,
    touch1X: i.screenX,
    touch1Y: i.screenY,
  });
}, xy = function (t) {
  let p;
  if (!n(this, en) || t.touches.length !== 2) return;
  Kt(t);
  let [e, i] = t.touches;
  e.identifier > i.identifier && ([e, i] = [i, e]);
  const {
    screenX: s,
    screenY: r,
  } = e; const {
    screenX: a,
    screenY: o,
  } = i; const l = n(this, en); const {
    touch0X: c,
    touch0Y: d,
    touch1X: u,
    touch1Y: g,
  } = l; const b = u - c; const E = g - d; const S = a - s; const M = o - r; const T = Math.hypot(S, M) || 1; const
    L = Math.hypot(b, E) || 1;
  if (!n(this, sa) && Math.abs(L - T) <= Og.MIN_TOUCH_DISTANCE_TO_PINCH) return;
  if (l.touch0X = s, l.touch0Y = r, l.touch1X = a, l.touch1Y = o, !n(this, sa)) {
    m(this, sa, !0);
    return;
  }
  const R = [(s + a) / 2, (r + o) / 2];
  (p = n(this, fc)) == null || p.call(this, R, L, T);
}, Ey = function (t) {
  let e;
  t.touches.length >= 2 || (n(this, sn) && (n(this, sn).abort(), m(this, sn, null), (e = n(this, pc)) == null || e.call(this)), n(this, en) && (Kt(t), m(this, en, null), m(this, sa, !1)));
};
const $h = Og;
let aa; let Ji; let Vt; let Ft; let nn; let Xo; let ir; let gc; let Te; let oa; let rn; let xs; let sr; let mc; let la; let ci; let yc; let ha; let an; let Es; let Yo; let Ko; let ji; let ca; let bc; let qu; let lt; let sp; let vc; let np; let tu; let Cy; let Ty; let rp; let eu; let ap; let Py; let ky; let Ry; let op; let My; let lp; let Ly; let Dy; let Oy; let hp; let
  Sh;
const gt = class gt {
  constructor(t) {
    v(this, lt);
    v(this, aa, null);
    v(this, Ji, null);
    v(this, Vt, null);
    v(this, Ft, null);
    v(this, nn, null);
    v(this, Xo, !1);
    v(this, ir, null);
    v(this, gc, '');
    v(this, Te, null);
    v(this, oa, null);
    v(this, rn, null);
    v(this, xs, null);
    v(this, sr, null);
    v(this, mc, '');
    v(this, la, !1);
    v(this, ci, null);
    v(this, yc, !1);
    v(this, ha, !1);
    v(this, an, !1);
    v(this, Es, null);
    v(this, Yo, 0);
    v(this, Ko, 0);
    v(this, ji, null);
    v(this, ca, null);
    V(this, 'isSelected', !1);
    V(this, '_isCopy', !1);
    V(this, '_editToolbar', null);
    V(this, '_initialOptions', /* @__PURE__ */ Object.create(null));
    V(this, '_initialData', null);
    V(this, '_isVisible', !0);
    V(this, '_uiManager', null);
    V(this, '_focusEventsAllowed', !0);
    v(this, bc, !1);
    v(this, qu, gt._zIndex++);
    this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null, this.annotationElementId = t.annotationElementId || null, this.creationDate = t.creationDate || /* @__PURE__ */ new Date(), this.modificationDate = t.modificationDate || null;
    const {
      rotation: e,
      rawDims: {
        pageWidth: i,
        pageHeight: s,
        pageX: r,
        pageY: a,
      },
    } = this.parent.viewport;
    this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [i, s], this.pageTranslation = [r, a];
    const [o, l] = this.parentDimensions;
    this.x = t.x / o, this.y = t.y / l, this.isAttachedToDOM = !1, this.deleted = !1;
  }

  static get _resizerKeyboardManager() {
    const t = gt.prototype._resizeWithKeyboard; const e = Ir.TRANSLATE_SMALL; const
      i = Ir.TRANSLATE_BIG;
    return yt(this, '_resizerKeyboardManager', new Ld([[['ArrowLeft', 'mac+ArrowLeft'], t, {
      args: [-e, 0],
    }], [['ctrl+ArrowLeft', 'mac+shift+ArrowLeft'], t, {
      args: [-i, 0],
    }], [['ArrowRight', 'mac+ArrowRight'], t, {
      args: [e, 0],
    }], [['ctrl+ArrowRight', 'mac+shift+ArrowRight'], t, {
      args: [i, 0],
    }], [['ArrowUp', 'mac+ArrowUp'], t, {
      args: [0, -e],
    }], [['ctrl+ArrowUp', 'mac+shift+ArrowUp'], t, {
      args: [0, -i],
    }], [['ArrowDown', 'mac+ArrowDown'], t, {
      args: [0, e],
    }], [['ctrl+ArrowDown', 'mac+shift+ArrowDown'], t, {
      args: [0, i],
    }], [['Escape', 'mac+Escape'], gt.prototype._stopResizingWithKeyboard]]));
  }

  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }

  get mode() {
    return Object.getPrototypeOf(this).constructor._editorType;
  }

  static get isDrawer() {
    return !1;
  }

  static get _defaultLineColor() {
    return yt(this, '_defaultLineColor', this._colorManager.getHexCode('CanvasText'));
  }

  static deleteAnnotationElement(t) {
    const e = new Dw({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager,
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }

  static initialize(t, e) {
    if (gt._l10n ?? (gt._l10n = t), gt._l10nResizer || (gt._l10nResizer = Object.freeze({
      topLeft: 'pdfjs-editor-resizer-top-left',
      topMiddle: 'pdfjs-editor-resizer-top-middle',
      topRight: 'pdfjs-editor-resizer-top-right',
      middleRight: 'pdfjs-editor-resizer-middle-right',
      bottomRight: 'pdfjs-editor-resizer-bottom-right',
      bottomMiddle: 'pdfjs-editor-resizer-bottom-middle',
      bottomLeft: 'pdfjs-editor-resizer-bottom-left',
      middleLeft: 'pdfjs-editor-resizer-middle-left',
    })), gt._borderLineWidth !== -1) return;
    const i = getComputedStyle(document.documentElement);
    gt._borderLineWidth = parseFloat(i.getPropertyValue('--outline-width')) || 0;
  }

  static updateDefaultParams(t, e) {
  }

  static get defaultPropertiesToUpdate() {
    return [];
  }

  static isHandlingMimeForPasting(t) {
    return !1;
  }

  static paste(t, e) {
    zt('Not implemented');
  }

  get propertiesToUpdate() {
    return [];
  }

  get _isDraggable() {
    return n(this, bc);
  }

  set _isDraggable(t) {
    let e;
    m(this, bc, t), (e = this.div) == null || e.classList.toggle('draggable', t);
  }

  get uid() {
    return this.annotationElementId || this.id;
  }

  get isEnterHandled() {
    return !0;
  }

  center() {
    const [t, e] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * e / (t * 2), this.y += this.width * t / (e * 2);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * e / (t * 2), this.y -= this.width * t / (e * 2);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }

  addCommands(t) {
    this._uiManager.addCommands(t);
  }

  get currentLayer() {
    return this._uiManager.currentLayer;
  }

  setInBackground() {
    this.div.style.zIndex = 0;
  }

  setInForeground() {
    this.div.style.zIndex = n(this, qu);
  }

  setParent(t) {
    let e;
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : (A(this, lt, Sh).call(this), (e = n(this, xs)) == null || e.remove(), m(this, xs, null)), this.parent = t;
  }

  focusin(t) {
    this._focusEventsAllowed && (n(this, la) ? m(this, la, !1) : this.parent.setSelected(this));
  }

  focusout(t) {
    let i;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM) return;
    const e = t.relatedTarget;
    e != null && e.closest(`#${this.id}`) || (t.preventDefault(), (i = this.parent) != null && i.isMultipleSelection || this.commitOrRemove());
  }

  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }

  commit() {
    this.isInEditMode() && this.addToAnnotationStorage();
  }

  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }

  setAt(t, e, i, s) {
    const [r, a] = this.parentDimensions;
    [i, s] = this.screenToPageTranslation(i, s), this.x = (t + i) / r, this.y = (e + s) / a, this.fixAndSetPosition();
  }

  _moveAfterPaste(t, e) {
    const [i, s] = this.parentDimensions;
    this.setAt(t * i, e * s, this.width * i, this.height * s), this._onTranslated();
  }

  translate(t, e) {
    A(this, lt, sp).call(this, this.parentDimensions, t, e);
  }

  translateInPage(t, e) {
    n(this, ci) || m(this, ci, [this.x, this.y, this.width, this.height]), A(this, lt, sp).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: 'nearest',
    });
  }

  translationDone() {
    this._onTranslated(this.x, this.y);
  }

  drag(t, e) {
    n(this, ci) || m(this, ci, [this.x, this.y, this.width, this.height]);
    const {
      div: i,
      parentDimensions: [s, r],
    } = this;
    if (this.x += t / s, this.y += e / r, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: u,
        y: g,
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, u, g) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: a,
      y: o,
    } = this;
    const [l, c] = this.getBaseTranslation();
    a += l, o += c;
    const {
      style: d,
    } = i;
    d.left = `${(100 * a).toFixed(2)}%`, d.top = `${(100 * o).toFixed(2)}%`, this._onTranslating(a, o), i.scrollIntoView({
      block: 'nearest',
    });
  }

  _onTranslating(t, e) {
  }

  _onTranslated(t, e) {
  }

  get _hasBeenMoved() {
    return !!n(this, ci) && (n(this, ci)[0] !== this.x || n(this, ci)[1] !== this.y);
  }

  get _hasBeenResized() {
    return !!n(this, ci) && (n(this, ci)[2] !== this.width || n(this, ci)[3] !== this.height);
  }

  getBaseTranslation() {
    const [t, e] = this.parentDimensions; const {
      _borderLineWidth: i,
    } = gt; const s = i / t; const
      r = i / e;
    switch (this.rotation) {
      case 90:
        return [-s, r];
      case 180:
        return [s, r];
      case 270:
        return [s, -r];
      default:
        return [-s, -r];
    }
  }

  get _mustFixPosition() {
    return !0;
  }

  fixAndSetPosition(t = this.rotation) {
    const {
      div: {
        style: e,
      },
      pageDimensions: [i, s],
    } = this;
    let {
      x: r,
      y: a,
      width: o,
      height: l,
    } = this;
    if (o *= i, l *= s, r *= i, a *= s, this._mustFixPosition) {
      switch (t) {
        case 0:
          r = ze(r, 0, i - o), a = ze(a, 0, s - l);
          break;
        case 90:
          r = ze(r, 0, i - l), a = ze(a, o, s);
          break;
        case 180:
          r = ze(r, o, i), a = ze(a, l, s);
          break;
        case 270:
          r = ze(r, l, i), a = ze(a, 0, s - o);
          break;
      }
    }
    this.x = r /= i, this.y = a /= s;
    const [c, d] = this.getBaseTranslation();
    r += c, a += d, e.left = `${(100 * r).toFixed(2)}%`, e.top = `${(100 * a).toFixed(2)}%`, this.moveInDOM();
  }

  screenToPageTranslation(t, e) {
    let i;
    return A(i = gt, vc, np).call(i, t, e, this.parentRotation);
  }

  pageTranslationToScreen(t, e) {
    let i;
    return A(i = gt, vc, np).call(i, t, e, 360 - this.parentRotation);
  }

  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }

  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }

  get parentDimensions() {
    const {
      parentScale: t,
      pageDimensions: [e, i],
    } = this;
    return [e * t, i * t];
  }

  setDims() {
    const {
      div: {
        style: t,
      },
      width: e,
      height: i,
    } = this;
    t.width = `${(100 * e).toFixed(2)}%`, t.height = `${(100 * i).toFixed(2)}%`;
  }

  getInitialTranslation() {
    return [0, 0];
  }

  _onResized() {
  }

  static _round(t) {
    return Math.round(t * 1e4) / 1e4;
  }

  _onResizing() {
  }

  altTextFinish() {
    let t;
    (t = n(this, Vt)) == null || t.finish();
  }

  get toolbarButtons() {
    return null;
  }

  async addEditToolbar() {
    if (this._editToolbar || n(this, ha)) return this._editToolbar;
    this._editToolbar = new Vf(this), this.div.append(this._editToolbar.render());
    const {
      toolbarButtons: t,
    } = this;
    if (t) for (const [e, i] of t) await this._editToolbar.addButton(e, i);
    return this.hasComment || this._editToolbar.addButton('comment', this.addCommentButton()), this._editToolbar.addButton('delete'), this._editToolbar;
  }

  addCommentButtonInToolbar() {
    let t;
    (t = this._editToolbar) == null || t.addButtonBefore('comment', this.addCommentButton(), '.deleteButton');
  }

  removeCommentButtonFromToolbar() {
    let t;
    (t = this._editToolbar) == null || t.removeButton('comment');
  }

  removeEditToolbar() {
    let t; let
      e;
    (t = this._editToolbar) == null || t.remove(), this._editToolbar = null, (e = n(this, Vt)) == null || e.destroy();
  }

  addContainer(t) {
    let i;
    const e = (i = this._editToolbar) == null ? void 0 : i.div;
    e ? e.before(t) : this.div.append(t);
  }

  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }

  createAltText() {
    return n(this, Vt) || (Lu.initialize(gt._l10n), m(this, Vt, new Lu(this)), n(this, aa) && (n(this, Vt).data = n(this, aa), m(this, aa, null))), n(this, Vt);
  }

  get altTextData() {
    let t;
    return (t = n(this, Vt)) == null ? void 0 : t.data;
  }

  set altTextData(t) {
    n(this, Vt) && (n(this, Vt).data = t);
  }

  get guessedAltText() {
    let t;
    return (t = n(this, Vt)) == null ? void 0 : t.guessedText;
  }

  async setGuessedAltText(t) {
    let e;
    await ((e = n(this, Vt)) == null ? void 0 : e.setGuessedText(t));
  }

  serializeAltText(t) {
    let e;
    return (e = n(this, Vt)) == null ? void 0 : e.serialize(t);
  }

  hasAltText() {
    return !!n(this, Vt) && !n(this, Vt).isEmpty();
  }

  hasAltTextData() {
    let t;
    return ((t = n(this, Vt)) == null ? void 0 : t.hasData()) ?? !1;
  }

  focusCommentButton() {
    let t;
    (t = n(this, Ft)) == null || t.focusButton();
  }

  addCommentButton() {
    return n(this, Ft) || m(this, Ft, new zd(this));
  }

  addStandaloneCommentButton() {
    if (n(this, nn)) {
      this._uiManager.isEditingMode() && n(this, nn).classList.remove('hidden');
      return;
    }
    this.hasComment && (m(this, nn, n(this, Ft).renderForStandalone()), this.div.append(n(this, nn)));
  }

  removeStandaloneCommentButton() {
    n(this, Ft).removeStandaloneCommentButton(), m(this, nn, null);
  }

  hideStandaloneCommentButton() {
    let t;
    (t = n(this, nn)) == null || t.classList.add('hidden');
  }

  get comment() {
    const {
      data: {
        richText: t,
        text: e,
        date: i,
        deleted: s,
      },
    } = n(this, Ft);
    return {
      text: e,
      richText: t,
      date: i,
      deleted: s,
      color: this.getNonHCMColor(),
      opacity: this.opacity ?? 1,
    };
  }

  set comment(t) {
    n(this, Ft) || m(this, Ft, new zd(this)), n(this, Ft).data = t, this.hasComment ? (this.removeCommentButtonFromToolbar(), this.addStandaloneCommentButton(), this._uiManager.updateComment(this)) : (this.addCommentButtonInToolbar(), this.removeStandaloneCommentButton(), this._uiManager.removeComment(this));
  }

  setCommentData({
    comment: t,
    popupRef: e,
    richText: i,
  }) {
    if (!e || (n(this, Ft) || m(this, Ft, new zd(this)), n(this, Ft).setInitialText(t, i), !this.annotationElementId)) return;
    const s = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
    s && this.updateFromAnnotationLayer(s);
  }

  get hasEditedComment() {
    let t;
    return (t = n(this, Ft)) == null ? void 0 : t.hasBeenEdited();
  }

  get hasDeletedComment() {
    let t;
    return (t = n(this, Ft)) == null ? void 0 : t.isDeleted();
  }

  get hasComment() {
    return !!n(this, Ft) && !n(this, Ft).isEmpty() && !n(this, Ft).isDeleted();
  }

  async editComment(t) {
    n(this, Ft) || m(this, Ft, new zd(this)), n(this, Ft).edit(t);
  }

  toggleComment(t, e = void 0) {
    this.hasComment && this._uiManager.toggleComment(this, t, e);
  }

  setSelectedCommentButton(t) {
    n(this, Ft).setSelectedButton(t);
  }

  addComment(t) {
    if (this.hasEditedComment) {
      const [, , , s] = t.rect; const [r] = this.pageDimensions; const [a] = this.pageTranslation; const o = a + r + 1; const l = s - 100; const
        c = o + 180;
      t.popup = {
        contents: this.comment.text,
        deleted: this.comment.deleted,
        rect: [o, l, c, s],
      };
    }
  }

  updateFromAnnotationLayer({
    popup: {
      contents: t,
      deleted: e,
    },
  }) {
    n(this, Ft).data = e ? null : t;
  }

  get parentBoundingClientRect() {
    return this.parent.boundingClientRect;
  }

  render() {
    let a;
    const t = this.div = document.createElement('div');
    t.setAttribute('data-editor-rotation', (360 - this.rotation) % 360), t.className = this.name, t.setAttribute('id', this.id), t.tabIndex = n(this, Xo) ? -1 : 0, t.setAttribute('role', 'application'), this.defaultL10nId && t.setAttribute('data-l10n-id', this.defaultL10nId), this._isVisible || t.classList.add('hidden'), this.setInForeground(), A(this, lt, lp).call(this);
    const [e, i] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (t.style.maxWidth = `${(100 * i / e).toFixed(2)}%`, t.style.maxHeight = `${(100 * e / i).toFixed(2)}%`);
    const [s, r] = this.getInitialTranslation();
    return this.translate(s, r), dy(this, t, ['keydown', 'pointerdown', 'dblclick']), this.isResizable && this._uiManager._supportsPinchToZoom && (n(this, ca) || m(this, ca, new $h({
      container: t,
      isPinchingDisabled: () => !this.isSelected,
      onPinchStart: A(this, lt, Py).bind(this),
      onPinching: A(this, lt, ky).bind(this),
      onPinchEnd: A(this, lt, Ry).bind(this),
      signal: this._uiManager._signal,
    }))), this.addStandaloneCommentButton(), (a = this._uiManager._editorUndoBar) == null || a.hide(), t;
  }

  pointerdown(t) {
    const {
      isMac: e,
    } = _e.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (m(this, la, !0), this._isDraggable) {
      A(this, lt, My).call(this, t);
      return;
    }
    A(this, lt, op).call(this, t);
  }

  _onStartDragging() {
  }

  _onStopDragging() {
  }

  moveInDOM() {
    n(this, Es) && clearTimeout(n(this, Es)), m(this, Es, setTimeout(() => {
      let t;
      m(this, Es, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }

  _setParentAndPosition(t, e, i) {
    t.changeParent(this), this.x = e, this.y = i, this.fixAndSetPosition(), this._onTranslated();
  }

  getRect(t, e, i = this.rotation) {
    const s = this.parentScale; const [r, a] = this.pageDimensions; const [o, l] = this.pageTranslation; const c = t / s; const d = e / s; const u = this.x * r; const g = this.y * a; const b = this.width * r; const
      E = this.height * a;
    switch (i) {
      case 0:
        return [u + c + o, a - g - d - E + l, u + c + b + o, a - g - d + l];
      case 90:
        return [u + d + o, a - g + c + l, u + d + E + o, a - g + c + b + l];
      case 180:
        return [u - c - b + o, a - g + d + l, u - c + o, a - g + d + E + l];
      case 270:
        return [u - d - E + o, a - g - c - b + l, u - d + o, a - g - c + l];
      default:
        throw new Error('Invalid rotation');
    }
  }

  getRectInCurrentCoords(t, e) {
    const [i, s, r, a] = t; const o = r - i; const
      l = a - s;
    switch (this.rotation) {
      case 0:
        return [i, e - a, o, l];
      case 90:
        return [i, e - s, l, o];
      case 180:
        return [r, e - s, o, l];
      case 270:
        return [r, e - a, l, o];
      default:
        throw new Error('Invalid rotation');
    }
  }

  getPDFRect() {
    return this.getRect(0, 0);
  }

  getNonHCMColor() {
    return this.color && gt._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
  }

  onUpdatedColor() {
    let t;
    (t = n(this, Ft)) == null || t.onUpdatedColor();
  }

  getData() {
    const {
      comment: {
        text: t,
        color: e,
        date: i,
        opacity: s,
        deleted: r,
        richText: a,
      },
      uid: o,
      pageIndex: l,
      creationDate: c,
      modificationDate: d,
    } = this;
    return {
      id: o,
      pageIndex: l,
      rect: this.getPDFRect(),
      richText: a,
      contentsObj: {
        str: t,
      },
      creationDate: c,
      modificationDate: i || d,
      popupRef: !r,
      color: e,
      opacity: s,
    };
  }

  onceAdded(t) {
  }

  isEmpty() {
    return !1;
  }

  enableEditMode() {
    return this.isInEditMode() ? !1 : (this.parent.setEditingState(!1), m(this, ha, !0), !0);
  }

  disableEditMode() {
    return this.isInEditMode() ? (this.parent.setEditingState(!0), m(this, ha, !1), !0) : !1;
  }

  isInEditMode() {
    return n(this, ha);
  }

  shouldGetKeyboardEvents() {
    return n(this, an);
  }

  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }

  get isOnScreen() {
    const {
      top: t,
      left: e,
      bottom: i,
      right: s,
    } = this.getClientDimensions(); const
      {
        innerHeight: r,
        innerWidth: a,
      } = window;
    return e < a && s > 0 && t < r && i > 0;
  }

  rebuild() {
    A(this, lt, lp).call(this);
  }

  rotate(t) {
  }

  resize() {
  }

  serializeDeleted() {
    let t;
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex,
      popupRef: ((t = this._initialData) == null ? void 0 : t.popupRef) || '',
    };
  }

  serialize(t = !1, e = null) {
    let i;
    return {
      annotationType: this.mode,
      pageIndex: this.pageIndex,
      rect: this.getPDFRect(),
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId,
      popupRef: ((i = this._initialData) == null ? void 0 : i.popupRef) || '',
    };
  }

  static async deserialize(t, e, i) {
    const s = new this.prototype.constructor({
      parent: e,
      id: e.getNextId(),
      uiManager: i,
      annotationElementId: t.annotationElementId,
      creationDate: t.creationDate,
      modificationDate: t.modificationDate,
    });
    s.rotation = t.rotation, m(s, aa, t.accessibilityData), s._isCopy = t.isCopy || !1;
    const [r, a] = s.pageDimensions; const
      [o, l, c, d] = s.getRectInCurrentCoords(t.rect, a);
    return s.x = o / r, s.y = l / a, s.width = c / r, s.height = d / a, s;
  }

  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }

  remove() {
    let t; let
      e;
    if ((t = n(this, sr)) == null || t.abort(), m(this, sr, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), n(this, Es) && (clearTimeout(n(this, Es)), m(this, Es, null)), A(this, lt, Sh).call(this), this.removeEditToolbar(), n(this, ji)) {
      for (const i of n(this, ji).values()) clearTimeout(i);
      m(this, ji, null);
    }
    this.parent = null, (e = n(this, ca)) == null || e.destroy(), m(this, ca, null);
  }

  get isResizable() {
    return !1;
  }

  makeResizable() {
    this.isResizable && (A(this, lt, Cy).call(this), n(this, Te).classList.remove('hidden'));
  }

  get toolbarPosition() {
    return null;
  }

  get commentButtonPosition() {
    return this._uiManager.direction === 'ltr' ? [1, 0] : [0, 0];
  }

  get commentButtonPositionInPage() {
    const {
      commentButtonPosition: [t, e],
    } = this; const
      [i, s, r, a] = this.getPDFRect();
    return [gt._round(i + (r - i) * t), gt._round(s + (a - s) * (1 - e))];
  }

  get commentButtonColor() {
    return this._uiManager.makeCommentColor(this.getNonHCMColor(), this.opacity);
  }

  get commentPopupPosition() {
    return n(this, Ft).commentPopupPositionInLayer;
  }

  set commentPopupPosition(t) {
    n(this, Ft).commentPopupPositionInLayer = t;
  }

  hasDefaultPopupPosition() {
    return n(this, Ft).hasDefaultPopupPosition();
  }

  get commentButtonWidth() {
    return n(this, Ft).commentButtonWidth;
  }

  get elementBeforePopup() {
    return this.div;
  }

  setCommentButtonStates(t) {
    n(this, Ft).setCommentButtonStates(t);
  }

  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== 'Enter') return;
    this._uiManager.setSelected(this), m(this, rn, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height,
    });
    const e = n(this, Te).children;
    if (!n(this, Ji)) {
      m(this, Ji, Array.from(e));
      const a = A(this, lt, Ly).bind(this); const o = A(this, lt, Dy).bind(this); const
        l = this._uiManager._signal;
      for (const c of n(this, Ji)) {
        const d = c.getAttribute('data-resizer-name');
        c.setAttribute('role', 'spinbutton'), c.addEventListener('keydown', a, {
          signal: l,
        }), c.addEventListener('blur', o, {
          signal: l,
        }), c.addEventListener('focus', A(this, lt, Oy).bind(this, d), {
          signal: l,
        }), c.setAttribute('data-l10n-id', gt._l10nResizer[d]);
      }
    }
    const i = n(this, Ji)[0];
    let s = 0;
    for (const a of e) {
      if (a === i) break;
      s++;
    }
    const r = (360 - this.rotation + this.parentRotation) % 360 / 90 * (n(this, Ji).length / 4);
    if (r !== s) {
      if (r < s) for (let o = 0; o < s - r; o++) n(this, Te).append(n(this, Te).firstChild);
      else if (r > s) for (let o = 0; o < r - s; o++) n(this, Te).firstChild.before(n(this, Te).lastChild);
      let a = 0;
      for (const o of e) {
        const c = n(this, Ji)[a++].getAttribute('data-resizer-name');
        o.setAttribute('data-l10n-id', gt._l10nResizer[c]);
      }
    }
    A(this, lt, hp).call(this, 0), m(this, an, !0), n(this, Te).firstChild.focus({
      focusVisible: !0,
    }), t.preventDefault(), t.stopImmediatePropagation();
  }

  _resizeWithKeyboard(t, e) {
    n(this, an) && A(this, lt, ap).call(this, n(this, mc), {
      deltaX: t,
      deltaY: e,
      fromKeyboard: !0,
    });
  }

  _stopResizingWithKeyboard() {
    A(this, lt, Sh).call(this), this.div.focus();
  }

  select() {
    let t; let e; let
      i;
    if (this.isSelected && this._editToolbar) {
      this._editToolbar.show();
      return;
    }
    if (this.isSelected = !0, this.makeResizable(), (t = this.div) == null || t.classList.add('selectedEditor'), !this._editToolbar) {
      this.addEditToolbar().then(() => {
        let s; let
          r;
        (s = this.div) != null && s.classList.contains('selectedEditor') && ((r = this._editToolbar) == null || r.show());
      });
      return;
    }
    (e = this._editToolbar) == null || e.show(), (i = n(this, Vt)) == null || i.toggleAltTextBadge(!1);
  }

  focus() {
    this.div && !this.div.contains(document.activeElement) && setTimeout(() => {
      let t;
      return (t = this.div) == null ? void 0 : t.focus({
        preventScroll: !0,
      });
    }, 0);
  }

  unselect() {
    let t; let e; let i; let s; let
      r;
    this.isSelected && (this.isSelected = !1, (t = n(this, Te)) == null || t.classList.add('hidden'), (e = this.div) == null || e.classList.remove('selectedEditor'), (i = this.div) != null && i.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0,
    }), (s = this._editToolbar) == null || s.hide(), (r = n(this, Vt)) == null || r.toggleAltTextBadge(!0), this.hasComment && this._uiManager.toggleComment(this, !1, !1));
  }

  updateParams(t, e) {
  }

  disableEditing() {
  }

  enableEditing() {
  }

  get canChangeContent() {
    return !1;
  }

  enterInEditMode() {
    this.canChangeContent && (this.enableEditMode(), this.div.focus());
  }

  dblclick(t) {
    t.target.nodeName !== 'BUTTON' && (this.enterInEditMode(), this.parent.updateToolbar({
      mode: this.constructor._editorType,
      editId: this.id,
    }));
  }

  getElementForAltText() {
    return this.div;
  }

  get contentDiv() {
    return this.div;
  }

  get isEditing() {
    return n(this, yc);
  }

  set isEditing(t) {
    m(this, yc, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }

  static get MIN_SIZE() {
    return 16;
  }

  static canCreateNewEmptyEditor() {
    return !0;
  }

  get telemetryInitialData() {
    return {
      action: 'added',
    };
  }

  get telemetryFinalData() {
    return null;
  }

  _reportTelemetry(t, e = !1) {
    if (e) {
      n(this, ji) || m(this, ji, /* @__PURE__ */ new Map());
      const {
        action: i,
      } = t;
      let s = n(this, ji).get(i);
      s && clearTimeout(s), s = setTimeout(() => {
        this._reportTelemetry(t), n(this, ji).delete(i), n(this, ji).size === 0 && m(this, ji, null);
      }, gt._telemetryTimeout), n(this, ji).set(i, s);
      return;
    }
    t.type || (t.type = this.editorType), this._uiManager._eventBus.dispatch('reporttelemetry', {
      source: this,
      details: {
        type: 'editing',
        data: t,
      },
    });
  }

  show(t = this._isVisible) {
    this.div.classList.toggle('hidden', !t), this._isVisible = t;
  }

  enable() {
    this.div && (this.div.tabIndex = 0), m(this, Xo, !1);
  }

  disable() {
    this.div && (this.div.tabIndex = -1), m(this, Xo, !0);
  }

  updateFakeAnnotationElement(t) {
    if (!n(this, xs) && !this.deleted) {
      m(this, xs, t.addFakeAnnotation(this));
      return;
    }
    if (this.deleted) {
      n(this, xs).remove(), m(this, xs, null);
      return;
    }
    (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) && n(this, xs).updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment,
    });
  }

  renderAnnotationElement(t) {
    if (this.deleted) return t.hide(), null;
    let e = t.container.querySelector('.annotationContent');
    if (!e) e = document.createElement('div'), e.classList.add('annotationContent', this.editorType), t.container.prepend(e);
    else if (e.nodeName === 'CANVAS') {
      const i = e;
      e = document.createElement('div'), e.classList.add('annotationContent', this.editorType), i.before(e);
    }
    return e;
  }

  resetAnnotationElement(t) {
    const {
      firstChild: e,
    } = t.container;
    (e == null ? void 0 : e.nodeName) === 'DIV' && e.classList.contains('annotationContent') && e.remove();
  }
};
aa = new WeakMap(), Ji = new WeakMap(), Vt = new WeakMap(), Ft = new WeakMap(), nn = new WeakMap(), Xo = new WeakMap(), ir = new WeakMap(), gc = new WeakMap(), Te = new WeakMap(), oa = new WeakMap(), rn = new WeakMap(), xs = new WeakMap(), sr = new WeakMap(), mc = new WeakMap(), la = new WeakMap(), ci = new WeakMap(), yc = new WeakMap(), ha = new WeakMap(), an = new WeakMap(), Es = new WeakMap(), Yo = new WeakMap(), Ko = new WeakMap(), ji = new WeakMap(), ca = new WeakMap(), bc = new WeakMap(), qu = new WeakMap(), lt = new WeakSet(), sp = function ([t, e], i, s) {
  [i, s] = this.screenToPageTranslation(i, s), this.x += i / t, this.y += s / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
}, vc = new WeakSet(), np = function (t, e, i) {
  switch (i) {
    case 90:
      return [e, -t];
    case 180:
      return [-t, -e];
    case 270:
      return [-e, t];
    default:
      return [t, e];
  }
}, tu = function (t) {
  switch (t) {
    case 90: {
      const [e, i] = this.pageDimensions;
      return [0, -e / i, i / e, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [e, i] = this.pageDimensions;
      return [0, e / i, -i / e, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, Cy = function () {
  if (n(this, Te)) return;
  m(this, Te, document.createElement('div')), n(this, Te).classList.add('resizers');
  const t = this._willKeepAspectRatio ? ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'] : ['topLeft', 'topMiddle', 'topRight', 'middleRight', 'bottomRight', 'bottomMiddle', 'bottomLeft', 'middleLeft']; const
    e = this._uiManager._signal;
  for (const i of t) {
    const s = document.createElement('div');
    n(this, Te).append(s), s.classList.add('resizer', i), s.setAttribute('data-resizer-name', i), s.addEventListener('pointerdown', A(this, lt, Ty).bind(this, i), {
      signal: e,
    }), s.addEventListener('contextmenu', Ri, {
      signal: e,
    }), s.tabIndex = -1;
  }
  this.div.prepend(n(this, Te));
}, Ty = function (t, e) {
  let d;
  e.preventDefault();
  const {
    isMac: i,
  } = _e.platform;
  if (e.button !== 0 || e.ctrlKey && i) return;
  (d = n(this, Vt)) == null || d.toggle(!1);
  const s = this._isDraggable;
  this._isDraggable = !1, m(this, oa, [e.screenX, e.screenY]);
  const r = new AbortController(); const
    a = this._uiManager.combinedSignal(r);
  this.parent.togglePointerEvents(!1), window.addEventListener('pointermove', A(this, lt, ap).bind(this, t), {
    passive: !0,
    capture: !0,
    signal: a,
  }), window.addEventListener('touchmove', Kt, {
    passive: !1,
    signal: a,
  }), window.addEventListener('contextmenu', Ri, {
    signal: a,
  }), m(this, rn, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height,
  });
  const o = this.parent.div.style.cursor; const
    l = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const c = () => {
    let u;
    r.abort(), this.parent.togglePointerEvents(!0), (u = n(this, Vt)) == null || u.toggle(!0), this._isDraggable = s, this.parent.div.style.cursor = o, this.div.style.cursor = l, A(this, lt, eu).call(this);
  };
  window.addEventListener('pointerup', c, {
    signal: a,
  }), window.addEventListener('blur', c, {
    signal: a,
  });
}, rp = function (t, e, i, s) {
  this.width = i, this.height = s, this.x = t, this.y = e, this.setDims(), this.fixAndSetPosition(), this._onResized();
}, eu = function () {
  if (!n(this, rn)) return;
  const {
    savedX: t,
    savedY: e,
    savedWidth: i,
    savedHeight: s,
  } = n(this, rn);
  m(this, rn, null);
  const r = this.x; const a = this.y; const o = this.width; const
    l = this.height;
  r === t && a === e && o === i && l === s || this.addCommands({
    cmd: A(this, lt, rp).bind(this, r, a, o, l),
    undo: A(this, lt, rp).bind(this, t, e, i, s),
    mustExec: !0,
  });
}, ap = function (t, e) {
  const [i, s] = this.parentDimensions; const r = this.x; const a = this.y; const o = this.width; const l = this.height; const c = gt.MIN_SIZE / i; const d = gt.MIN_SIZE / s; const u = A(this, lt, tu).call(this, this.rotation); const g = (z, w) => [u[0] * z + u[2] * w, u[1] * z + u[3] * w]; const b = A(this, lt, tu).call(this, 360 - this.rotation); const
    E = (z, w) => [b[0] * z + b[2] * w, b[1] * z + b[3] * w];
  let S; let M; let T = !1; let
    L = !1;
  switch (t) {
    case 'topLeft':
      T = !0, S = (z, w) => [0, 0], M = (z, w) => [z, w];
      break;
    case 'topMiddle':
      S = (z, w) => [z / 2, 0], M = (z, w) => [z / 2, w];
      break;
    case 'topRight':
      T = !0, S = (z, w) => [z, 0], M = (z, w) => [0, w];
      break;
    case 'middleRight':
      L = !0, S = (z, w) => [z, w / 2], M = (z, w) => [0, w / 2];
      break;
    case 'bottomRight':
      T = !0, S = (z, w) => [z, w], M = (z, w) => [0, 0];
      break;
    case 'bottomMiddle':
      S = (z, w) => [z / 2, w], M = (z, w) => [z / 2, 0];
      break;
    case 'bottomLeft':
      T = !0, S = (z, w) => [0, w], M = (z, w) => [z, 0];
      break;
    case 'middleLeft':
      L = !0, S = (z, w) => [0, w / 2], M = (z, w) => [z, w / 2];
      break;
  }
  const R = S(o, l); const
    p = M(o, l);
  let f = g(...p);
  const y = gt._round(r + f[0]); const
    _ = gt._round(a + f[1]);
  let P = 1; let k = 1; let C; let
    D;
  if (e.fromKeyboard) {
    ({
      deltaX: C,
      deltaY: D,
    } = e);
  } else {
    const {
      screenX: z,
      screenY: w,
    } = e; const
      [K, F] = n(this, oa);
    [C, D] = this.screenToPageTranslation(z - K, w - F), n(this, oa)[0] = z, n(this, oa)[1] = w;
  }
  if ([C, D] = E(C / i, D / s), T) {
    const z = Math.hypot(o, l);
    P = k = Math.max(Math.min(Math.hypot(p[0] - R[0] - C, p[1] - R[1] - D) / z, 1 / o, 1 / l), c / o, d / l);
  } else L ? P = ze(Math.abs(p[0] - R[0] - C), c, 1) / o : k = ze(Math.abs(p[1] - R[1] - D), d, 1) / l;
  const N = gt._round(o * P); const
    I = gt._round(l * k);
  f = g(...M(N, I));
  const B = y - f[0]; const
    j = _ - f[1];
  n(this, ci) || m(this, ci, [this.x, this.y, this.width, this.height]), this.width = N, this.height = I, this.x = B, this.y = j, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, Py = function () {
  let t;
  m(this, rn, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height,
  }), (t = n(this, Vt)) == null || t.toggle(!1), this.parent.togglePointerEvents(!1);
}, ky = function (t, e, i) {
  let r = 0.7 * (i / e) + 1 - 0.7;
  if (r === 1) return;
  const a = A(this, lt, tu).call(this, this.rotation); const o = (y, _) => [a[0] * y + a[2] * _, a[1] * y + a[3] * _]; const [l, c] = this.parentDimensions; const d = this.x; const u = this.y; const g = this.width; const b = this.height; const E = gt.MIN_SIZE / l; const
    S = gt.MIN_SIZE / c;
  r = Math.max(Math.min(r, 1 / g, 1 / b), E / g, S / b);
  const M = gt._round(g * r); const
    T = gt._round(b * r);
  if (M === g && T === b) return;
  n(this, ci) || m(this, ci, [d, u, g, b]);
  const L = o(g / 2, b / 2); const R = gt._round(d + L[0]); const p = gt._round(u + L[1]); const
    f = o(M / 2, T / 2);
  this.x = R - f[0], this.y = p - f[1], this.width = M, this.height = T, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, Ry = function () {
  let t;
  (t = n(this, Vt)) == null || t.toggle(!0), this.parent.togglePointerEvents(!0), A(this, lt, eu).call(this);
}, op = function (t) {
  const {
    isMac: e,
  } = _e.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, My = function (t) {
  const {
    isSelected: e,
  } = this;
  this._uiManager.setUpDragSession();
  let i = !1;
  const s = new AbortController(); const r = this._uiManager.combinedSignal(s); const a = {
    capture: !0,
    passive: !1,
    signal: r,
  }; const
    o = (c) => {
      s.abort(), m(this, ir, null), m(this, la, !1), this._uiManager.endDragSession() || A(this, lt, op).call(this, c), i && this._onStopDragging();
    };
  e && (m(this, Yo, t.clientX), m(this, Ko, t.clientY), m(this, ir, t.pointerId), m(this, gc, t.pointerType), window.addEventListener('pointermove', (c) => {
    i || (i = !0, this._uiManager.toggleComment(this, !0, !1), this._onStartDragging());
    const {
      clientX: d,
      clientY: u,
      pointerId: g,
    } = c;
    if (g !== n(this, ir)) {
      Kt(c);
      return;
    }
    const [b, E] = this.screenToPageTranslation(d - n(this, Yo), u - n(this, Ko));
    m(this, Yo, d), m(this, Ko, u), this._uiManager.dragSelectedEditors(b, E);
  }, a), window.addEventListener('touchmove', Kt, a), window.addEventListener('pointerdown', (c) => {
    c.pointerType === n(this, gc) && (n(this, ca) || c.isPrimary) && o(c), Kt(c);
  }, a));
  const l = (c) => {
    if (!n(this, ir) || n(this, ir) === c.pointerId) {
      o(c);
      return;
    }
    Kt(c);
  };
  window.addEventListener('pointerup', l, {
    signal: r,
  }), window.addEventListener('blur', l, {
    signal: r,
  });
}, lp = function () {
  if (n(this, sr) || !this.div) return;
  m(this, sr, new AbortController());
  const t = this._uiManager.combinedSignal(n(this, sr));
  this.div.addEventListener('focusin', this.focusin.bind(this), {
    signal: t,
  }), this.div.addEventListener('focusout', this.focusout.bind(this), {
    signal: t,
  });
}, Ly = function (t) {
  gt._resizerKeyboardManager.exec(this, t);
}, Dy = function (t) {
  let e;
  n(this, an) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== n(this, Te) && A(this, lt, Sh).call(this);
}, Oy = function (t) {
  m(this, mc, n(this, an) ? t : '');
}, hp = function (t) {
  if (n(this, Ji)) for (const e of n(this, Ji)) e.tabIndex = t;
}, Sh = function () {
  m(this, an, !1), A(this, lt, hp).call(this, -1), A(this, lt, eu).call(this);
}, v(gt, vc), V(gt, '_l10n', null), V(gt, '_l10nResizer', null), V(gt, '_borderLineWidth', -1), V(gt, '_colorManager', new Yf()), V(gt, '_zIndex', 1), V(gt, '_telemetryTimeout', 1e3);
const $t = gt;
class Dw extends $t {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }

  serialize() {
    return this.serializeDeleted();
  }
}
const am = 3285377520; const Mi = 4294901760; const
  ps = 65535;
class Iy {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : am, this.h2 = t ? t & 4294967295 : am;
  }

  update(t) {
    let e; let
      i;
    if (typeof t === 'string') {
      e = new Uint8Array(t.length * 2), i = 0;
      for (let S = 0, M = t.length; S < M; S++) {
        const T = t.charCodeAt(S);
        T <= 255 ? e[i++] = T : (e[i++] = T >>> 8, e[i++] = T & 255);
      }
    } else if (ArrayBuffer.isView(t)) e = t.slice(), i = e.byteLength;
    else throw new Error('Invalid data format, must be a string or TypedArray.');
    const s = i >> 2; const r = i - s * 4; const
      a = new Uint32Array(e.buffer, 0, s);
    let o = 0; let l = 0; let c = this.h1; let
      d = this.h2;
    const u = 3432918353; const g = 461845907; const b = u & ps; const
      E = g & ps;
    for (let S = 0; S < s; S++) S & 1 ? (o = a[S], o = o * u & Mi | o * b & ps, o = o << 15 | o >>> 17, o = o * g & Mi | o * E & ps, c ^= o, c = c << 13 | c >>> 19, c = c * 5 + 3864292196) : (l = a[S], l = l * u & Mi | l * b & ps, l = l << 15 | l >>> 17, l = l * g & Mi | l * E & ps, d ^= l, d = d << 13 | d >>> 19, d = d * 5 + 3864292196);
    switch (o = 0, r) {
      case 3:
        o ^= e[s * 4 + 2] << 16;
      case 2:
        o ^= e[s * 4 + 1] << 8;
      case 1:
        o ^= e[s * 4], o = o * u & Mi | o * b & ps, o = o << 15 | o >>> 17, o = o * g & Mi | o * E & ps, s & 1 ? c ^= o : d ^= o;
    }
    this.h1 = c, this.h2 = d;
  }

  hexdigest() {
    let t = this.h1; let
      e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & Mi | t * 36045 & ps, e = e * 4283543511 & Mi | ((e << 16 | t >>> 16) * 2950163797 & Mi) >>> 16, t ^= e >>> 1, t = t * 444984403 & Mi | t * 60499 & ps, e = e * 3301882366 & Mi | ((e << 16 | t >>> 16) * 3120437893 & Mi) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, '0') + (e >>> 0).toString(16).padStart(8, '0');
  }
}
const cp = Object.freeze({
  map: null,
  hash: '',
  transfer: void 0,
});
let da; let ua; let on; let Pe; let Xu; let
  Fy;
class Ag {
  constructor() {
    v(this, Xu);
    v(this, da, !1);
    v(this, ua, null);
    v(this, on, null);
    v(this, Pe, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }

  getValue(t, e) {
    const i = n(this, Pe).get(t);
    return i === void 0 ? e : Object.assign(e, i);
  }

  getRawValue(t) {
    return n(this, Pe).get(t);
  }

  remove(t) {
    const e = n(this, Pe).get(t);
    if (e !== void 0 && (e instanceof $t && n(this, on).delete(e.annotationElementId), n(this, Pe).delete(t), n(this, Pe).size === 0 && this.resetModified(), typeof this.onAnnotationEditor === 'function')) {
      for (const i of n(this, Pe).values()) if (i instanceof $t) return;
      this.onAnnotationEditor(null);
    }
  }

  setValue(t, e) {
    const i = n(this, Pe).get(t);
    let s = !1;
    if (i !== void 0) for (const [r, a] of Object.entries(e)) i[r] !== a && (s = !0, i[r] = a);
    else s = !0, n(this, Pe).set(t, e);
    s && A(this, Xu, Fy).call(this), e instanceof $t && ((n(this, on) || m(this, on, /* @__PURE__ */ new Map())).set(e.annotationElementId, e), typeof this.onAnnotationEditor === 'function' && this.onAnnotationEditor(e.constructor._type));
  }

  has(t) {
    return n(this, Pe).has(t);
  }

  get size() {
    return n(this, Pe).size;
  }

  resetModified() {
    n(this, da) && (m(this, da, !1), typeof this.onResetModified === 'function' && this.onResetModified());
  }

  get print() {
    return new Ny(this);
  }

  get serializable() {
    if (n(this, Pe).size === 0) return cp;
    const t = /* @__PURE__ */ new Map(); const e = new Iy(); const i = []; const
      s = /* @__PURE__ */ Object.create(null);
    let r = !1;
    for (const [a, o] of n(this, Pe)) {
      const l = o instanceof $t ? o.serialize(!1, s) : o;
      l && (t.set(a, l), e.update(`${a}:${JSON.stringify(l)}`), r || (r = !!l.bitmap));
    }
    if (r) for (const a of t.values()) a.bitmap && i.push(a.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: i,
    } : cp;
  }

  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    let i = 0; let
      s = 0;
    for (const r of n(this, Pe).values()) {
      if (!(r instanceof $t)) {
        r.popup && (r.popup.deleted ? s += 1 : i += 1);
        continue;
      }
      r.isCommentDeleted ? s += 1 : r.hasEditedComment && (i += 1);
      const a = r.telemetryFinalData;
      if (!a) continue;
      const {
        type: o,
      } = a;
      e.has(o) || e.set(o, Object.getPrototypeOf(r).constructor), t || (t = /* @__PURE__ */ Object.create(null));
      const l = t[o] || (t[o] = /* @__PURE__ */ new Map());
      for (const [c, d] of Object.entries(a)) {
        if (c === 'type') continue;
        let u = l.get(c);
        u || (u = /* @__PURE__ */ new Map(), l.set(c, u));
        const g = u.get(d) ?? 0;
        u.set(d, g + 1);
      }
    }
    if ((s > 0 || i > 0) && (t || (t = /* @__PURE__ */ Object.create(null)), t.comments = {
      deleted: s,
      edited: i,
    }), !t) return null;
    for (const [r, a] of e) t[r] = a.computeTelemetryFinalData(t[r]);
    return t;
  }

  resetModifiedIds() {
    m(this, ua, null);
  }

  updateEditor(t, e) {
    let s;
    const i = (s = n(this, on)) == null ? void 0 : s.get(t);
    return i ? (i.updateFromAnnotationLayer(e), !0) : !1;
  }

  getEditor(t) {
    let e;
    return ((e = n(this, on)) == null ? void 0 : e.get(t)) || null;
  }

  get modifiedIds() {
    if (n(this, ua)) return n(this, ua);
    const t = [];
    if (n(this, on)) for (const e of n(this, on).values()) e.serialize() && t.push(e.annotationElementId);
    return m(this, ua, {
      ids: new Set(t),
      hash: t.join(','),
    });
  }

  [Symbol.iterator]() {
    return n(this, Pe).entries();
  }
}
da = new WeakMap(), ua = new WeakMap(), on = new WeakMap(), Pe = new WeakMap(), Xu = new WeakSet(), Fy = function () {
  n(this, da) || (m(this, da, !0), typeof this.onSetModified === 'function' && this.onSetModified());
};
let wc;
class Ny extends Ag {
  constructor(e) {
    super();
    v(this, wc);
    const {
      map: i,
      hash: s,
      transfer: r,
    } = e.serializable; const
      a = structuredClone(i, r ? {
        transfer: r,
      } : null);
    m(this, wc, {
      map: a,
      hash: s,
      transfer: r,
    });
  }

  get print() {
    zt('Should not call PrintAnnotationStorage.print');
  }

  get serializable() {
    return n(this, wc);
  }

  get modifiedIds() {
    return yt(this, 'modifiedIds', {
      ids: /* @__PURE__ */ new Set(),
      hash: '',
    });
  }
}
wc = new WeakMap();
let Jo;
class Ow {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null,
  }) {
    v(this, Jo, /* @__PURE__ */ new Set());
    this._document = t, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }

  addNativeFontFace(t) {
    this.nativeFontFaces.add(t), this._document.fonts.add(t);
  }

  removeNativeFontFace(t) {
    this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
  }

  insertRule(t) {
    this.styleElement || (this.styleElement = this._document.createElement('style'), this._document.documentElement.getElementsByTagName('head')[0].append(this.styleElement));
    const e = this.styleElement.sheet;
    e.insertRule(t, e.cssRules.length);
  }

  clear() {
    for (const t of this.nativeFontFaces) this._document.fonts.delete(t);
    this.nativeFontFaces.clear(), n(this, Jo).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }

  async loadSystemFont({
    systemFontInfo: t,
    disableFontFace: e,
    _inspectFont: i,
  }) {
    if (!(!t || n(this, Jo).has(t.loadedName))) {
      if (_t(!e, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: s,
          src: r,
          style: a,
        } = t; const
          o = new FontFace(s, r, a);
        this.addNativeFontFace(o);
        try {
          await o.load(), n(this, Jo).add(s), i == null || i(t);
        } catch {
          pt(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(o);
        }
        return;
      }
      zt('Not implemented: loadSystemFont without the Font Loading API.');
    }
  }

  async bind(t) {
    if (t.attached || t.missingFile && !t.systemFontInfo) return;
    if (t.attached = !0, t.systemFontInfo) {
      await this.loadSystemFont(t);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const i = t.createNativeFontFace();
      if (i) {
        this.addNativeFontFace(i);
        try {
          await i.loaded;
        } catch (s) {
          throw pt(`Failed to load font '${i.family}': '${s}'.`), t.disableFontFace = !0, s;
        }
      }
      return;
    }
    const e = t.createFontFaceRule();
    if (e) {
      if (this.insertRule(e), this.isSyncFontLoadingSupported) return;
      await new Promise((i) => {
        const s = this._queueLoadingCallback(i);
        this._prepareFontLoadEvent(t, s);
      });
    }
  }

  get isFontLoadingAPISupported() {
    let e;
    const t = !!((e = this._document) != null && e.fonts);
    return yt(this, 'isFontLoadingAPISupported', t);
  }

  get isSyncFontLoadingSupported() {
    return yt(this, 'isSyncFontLoadingSupported', Xe || _e.platform.isFirefox);
  }

  _queueLoadingCallback(t) {
    function e() {
      for (_t(!s.done, 'completeRequest() cannot be called twice.'), s.done = !0; i.length > 0 && i[0].done;) {
        const r = i.shift();
        setTimeout(r.callback, 0);
      }
    }
    const {
      loadingRequests: i,
    } = this; const
      s = {
        done: !1,
        complete: e,
        callback: t,
      };
    return i.push(s), s;
  }

  get _loadTestFont() {
    const t = atob('T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==');
    return yt(this, '_loadTestFont', t);
  }

  _prepareFontLoadEvent(t, e) {
    function i(p, f) {
      return p.charCodeAt(f) << 24 | p.charCodeAt(f + 1) << 16 | p.charCodeAt(f + 2) << 8 | p.charCodeAt(f + 3) & 255;
    }
    function s(p, f, y, _) {
      const P = p.substring(0, f); const
        k = p.substring(f + y);
      return P + _ + k;
    }
    let r; let
      a;
    const o = this._document.createElement('canvas');
    o.width = 1, o.height = 1;
    const l = o.getContext('2d');
    let c = 0;
    function d(p, f) {
      if (++c > 30) {
        pt('Load test font never loaded.'), f();
        return;
      }
      if (l.font = `30px ${p}`, l.fillText('.', 0, 20), l.getImageData(0, 0, 1, 1).data[3] > 0) {
        f();
        return;
      }
      setTimeout(d.bind(null, p, f));
    }
    const u = `lt${Date.now()}${this.loadTestFontId++}`;
    let g = this._loadTestFont;
    g = s(g, 976, u.length, u);
    const E = 16; const
      S = 1482184792;
    let M = i(g, E);
    for (r = 0, a = u.length - 3; r < a; r += 4) M = M - S + i(u, r) | 0;
    r < u.length && (M = M - S + i(`${u}XXX`, r) | 0), g = s(g, E, 4, Sw(M));
    const T = `url(data:font/opentype;base64,${btoa(g)});`; const
      L = `@font-face {font-family:"${u}";src:${T}}`;
    this.insertRule(L);
    const R = this._document.createElement('div');
    R.style.visibility = 'hidden', R.style.width = R.style.height = '10px', R.style.position = 'absolute', R.style.top = R.style.left = '0px';
    for (const p of [t.loadedName, u]) {
      const f = this._document.createElement('span');
      f.textContent = 'Hi', f.style.fontFamily = p, R.append(f);
    }
    this._document.body.append(R), d(u, () => {
      R.remove(), e.complete();
    });
  }
}
Jo = new WeakMap();
let Mt;
class Iw {
  constructor(t, e = null, i, s) {
    v(this, Mt);
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null), m(this, Mt, t), this._inspectFont = e, i && Object.assign(this, i), s && (this.charProcOperatorList = s);
  }

  createNativeFontFace() {
    let e;
    if (!this.data || this.disableFontFace) return null;
    let t;
    if (!this.cssFontInfo) t = new FontFace(this.loadedName, this.data, {});
    else {
      const i = {
        weight: this.cssFontInfo.fontWeight,
      };
      this.cssFontInfo.italicAngle && (i.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(this.cssFontInfo.fontFamily, this.data, i);
    }
    return (e = this._inspectFont) == null || e.call(this, this), t;
  }

  createFontFaceRule() {
    let i;
    if (!this.data || this.disableFontFace) return null;
    const t = `url(data:${this.mimetype};base64,${Zm(this.data)});`;
    let e;
    if (!this.cssFontInfo) e = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
    else {
      let s = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (s += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${s}src:${t}}`;
    }
    return (i = this._inspectFont) == null || i.call(this, this, t), e;
  }

  getPathGenerator(t, e) {
    if (this.compiledGlyphs[e] !== void 0) return this.compiledGlyphs[e];
    const i = `${this.loadedName}_path_${e}`;
    let s;
    try {
      s = t.get(i);
    } catch (a) {
      pt(`getPathGenerator - ignoring character: "${a}".`);
    }
    const r = new Path2D(s || '');
    return this.fontExtraProperties || t.delete(i), this.compiledGlyphs[e] = r;
  }

  get black() {
    return n(this, Mt).black;
  }

  get bold() {
    return n(this, Mt).bold;
  }

  get disableFontFace() {
    return n(this, Mt).disableFontFace ?? !1;
  }

  get fontExtraProperties() {
    return n(this, Mt).fontExtraProperties ?? !1;
  }

  get isInvalidPDFjsFont() {
    return n(this, Mt).isInvalidPDFjsFont;
  }

  get isType3Font() {
    return n(this, Mt).isType3Font;
  }

  get italic() {
    return n(this, Mt).italic;
  }

  get missingFile() {
    return n(this, Mt).missingFile;
  }

  get remeasure() {
    return n(this, Mt).remeasure;
  }

  get vertical() {
    return n(this, Mt).vertical;
  }

  get ascent() {
    return n(this, Mt).ascent;
  }

  get defaultWidth() {
    return n(this, Mt).defaultWidth;
  }

  get descent() {
    return n(this, Mt).descent;
  }

  get bbox() {
    return n(this, Mt).bbox;
  }

  get fontMatrix() {
    return n(this, Mt).fontMatrix;
  }

  get fallbackName() {
    return n(this, Mt).fallbackName;
  }

  get loadedName() {
    return n(this, Mt).loadedName;
  }

  get mimetype() {
    return n(this, Mt).mimetype;
  }

  get name() {
    return n(this, Mt).name;
  }

  get data() {
    return n(this, Mt).data;
  }

  clearData() {
    n(this, Mt).clearData();
  }

  get cssFontInfo() {
    return n(this, Mt).cssFontInfo;
  }

  get systemFontInfo() {
    return n(this, Mt).systemFontInfo;
  }

  get defaultVMetrics() {
    return n(this, Mt).defaultVMetrics;
  }
}
Mt = new WeakMap();
function Fw(h) {
  if (h instanceof URL) return h.href;
  if (typeof h === 'string') {
    if (Xe) return h;
    const t = URL.parse(h, window.location);
    if (t) return t.href;
  }
  throw new Error('Invalid PDF url data: either string or URL-object is expected in the url property.');
}
function Nw(h) {
  if (Xe && typeof Buffer < 'u' && h instanceof Buffer) throw new Error('Please provide binary data as `Uint8Array`, rather than `Buffer`.');
  if (h instanceof Uint8Array && h.byteLength === h.buffer.byteLength) return h;
  if (typeof h === 'string') return kd(h);
  if (h instanceof ArrayBuffer || ArrayBuffer.isView(h) || typeof h === 'object' && !isNaN(h == null ? void 0 : h.length)) return new Uint8Array(h);
  throw new Error('Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.');
}
function Ud(h) {
  if (typeof h !== 'string') return null;
  if (h.endsWith('/')) return h;
  throw new Error(`Invalid factory url: "${h}" must include trailing slash.`);
}
const dp = (h) => typeof h === 'object' && Number.isInteger(h == null ? void 0 : h.num) && h.num >= 0 && Number.isInteger(h == null ? void 0 : h.gen) && h.gen >= 0; const Bw = (h) => typeof h === 'object' && typeof (h == null ? void 0 : h.name) === 'string'; const
  By = Ew.bind(null, dp, Bw);
let ln; let
  Yu;
class Hw {
  constructor() {
    v(this, ln, /* @__PURE__ */ new Map());
    v(this, Yu, Promise.resolve());
  }

  postMessage(t, e) {
    const i = {
      data: structuredClone(t, e ? {
        transfer: e,
      } : null),
    };
    n(this, Yu).then(() => {
      for (const [s] of n(this, ln)) s.call(this, i);
    });
  }

  addEventListener(t, e, i = null) {
    let s = null;
    if ((i == null ? void 0 : i.signal) instanceof AbortSignal) {
      const {
        signal: r,
      } = i;
      if (r.aborted) {
        pt('LoopbackPort - cannot use an `aborted` signal.');
        return;
      }
      const a = () => this.removeEventListener(t, e);
      s = () => r.removeEventListener('abort', a), r.addEventListener('abort', a);
    }
    n(this, ln).set(e, s);
  }

  removeEventListener(t, e) {
    const i = n(this, ln).get(e);
    i == null || i(), n(this, ln).delete(e);
  }

  terminate() {
    for (const [, t] of n(this, ln)) t == null || t();
    n(this, ln).clear();
  }
}
ln = new WeakMap(), Yu = new WeakMap();
const $d = {
  DATA: 1,
  ERROR: 2,
};
const oe = {
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8,
};
function om() {
}
function Je(h) {
  if (h instanceof Dn || h instanceof Ru || h instanceof Zg || h instanceof jh || h instanceof Mf) return h;
  switch (h instanceof Error || typeof h === 'object' && h !== null || zt('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), h.name) {
    case 'AbortException':
      return new Dn(h.message);
    case 'InvalidPDFException':
      return new Ru(h.message);
    case 'PasswordException':
      return new Zg(h.message, h.code);
    case 'ResponseException':
      return new jh(h.message, h.status, h.missing);
    case 'UnknownErrorException':
      return new Mf(h.message, h.details);
  }
  return new Mf(h.message, h.toString());
}
let Qo; let Vi; let Hy; let jy; let zy; let
  iu;
class Ah {
  constructor(t, e, i) {
    v(this, Vi);
    v(this, Qo, new AbortController());
    this.sourceName = t, this.targetName = e, this.comObj = i, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), i.addEventListener('message', A(this, Vi, Hy).bind(this), {
      signal: n(this, Qo).signal,
    });
  }

  on(t, e) {
    const i = this.actionHandler;
    if (i[t]) throw new Error(`There is already an actionName called "${t}"`);
    i[t] = e;
  }

  send(t, e, i) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: t,
      data: e,
    }, i);
  }

  sendWithPromise(t, e, i) {
    const s = this.callbackId++; const
      r = Promise.withResolvers();
    this.callbackCapabilities[s] = r;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        callbackId: s,
        data: e,
      }, i);
    } catch (a) {
      r.reject(a);
    }
    return r.promise;
  }

  sendWithStream(t, e, i, s) {
    const r = this.streamId++; const a = this.sourceName; const o = this.targetName; const
      l = this.comObj;
    return new ReadableStream({
      start: (c) => {
        const d = Promise.withResolvers();
        return this.streamControllers[r] = {
          controller: c,
          startCall: d,
          pullCall: null,
          cancelCall: null,
          isClosed: !1,
        }, l.postMessage({
          sourceName: a,
          targetName: o,
          action: t,
          streamId: r,
          data: e,
          desiredSize: c.desiredSize,
        }, s), d.promise;
      },
      pull: (c) => {
        const d = Promise.withResolvers();
        return this.streamControllers[r].pullCall = d, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: oe.PULL,
          streamId: r,
          desiredSize: c.desiredSize,
        }), d.promise;
      },
      cancel: (c) => {
        _t(c instanceof Error, 'cancel must have a valid reason');
        const d = Promise.withResolvers();
        return this.streamControllers[r].cancelCall = d, this.streamControllers[r].isClosed = !0, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: oe.CANCEL,
          streamId: r,
          reason: Je(c),
        }), d.promise;
      },
    }, i);
  }

  destroy() {
    let t;
    (t = n(this, Qo)) == null || t.abort(), m(this, Qo, null);
  }
}
Qo = new WeakMap(), Vi = new WeakSet(), Hy = function ({
  data: t,
}) {
  if (t.targetName !== this.sourceName) return;
  if (t.stream) {
    A(this, Vi, zy).call(this, t);
    return;
  }
  if (t.callback) {
    const i = t.callbackId; const
      s = this.callbackCapabilities[i];
    if (!s) throw new Error(`Cannot resolve callback ${i}`);
    if (delete this.callbackCapabilities[i], t.callback === $d.DATA) s.resolve(t.data);
    else if (t.callback === $d.ERROR) s.reject(Je(t.reason));
    else throw new Error('Unexpected callback case');
    return;
  }
  const e = this.actionHandler[t.action];
  if (!e) throw new Error(`Unknown action from worker: ${t.action}`);
  if (t.callbackId) {
    const i = this.sourceName; const s = t.sourceName; const
      r = this.comObj;
    Promise.try(e, t.data).then((a) => {
      r.postMessage({
        sourceName: i,
        targetName: s,
        callback: $d.DATA,
        callbackId: t.callbackId,
        data: a,
      });
    }, (a) => {
      r.postMessage({
        sourceName: i,
        targetName: s,
        callback: $d.ERROR,
        callbackId: t.callbackId,
        reason: Je(a),
      });
    });
    return;
  }
  if (t.streamId) {
    A(this, Vi, jy).call(this, t);
    return;
  }
  e(t.data);
}, jy = function (t) {
  const e = t.streamId; const i = this.sourceName; const s = t.sourceName; const r = this.comObj; const a = this; const o = this.actionHandler[t.action]; const
    l = {
      enqueue(c, d = 1, u) {
        if (this.isCancelled) return;
        const g = this.desiredSize;
        this.desiredSize -= d, g > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), r.postMessage({
          sourceName: i,
          targetName: s,
          stream: oe.ENQUEUE,
          streamId: e,
          chunk: c,
        }, u);
      },
      close() {
        this.isCancelled || (this.isCancelled = !0, r.postMessage({
          sourceName: i,
          targetName: s,
          stream: oe.CLOSE,
          streamId: e,
        }), delete a.streamSinks[e]);
      },
      error(c) {
        _t(c instanceof Error, 'error must have a valid reason'), !this.isCancelled && (this.isCancelled = !0, r.postMessage({
          sourceName: i,
          targetName: s,
          stream: oe.ERROR,
          streamId: e,
          reason: Je(c),
        }));
      },
      sinkCapability: Promise.withResolvers(),
      onPull: null,
      onCancel: null,
      isCancelled: !1,
      desiredSize: t.desiredSize,
      ready: null,
    };
  l.sinkCapability.resolve(), l.ready = l.sinkCapability.promise, this.streamSinks[e] = l, Promise.try(o, t.data, l).then(() => {
    r.postMessage({
      sourceName: i,
      targetName: s,
      stream: oe.START_COMPLETE,
      streamId: e,
      success: !0,
    });
  }, (c) => {
    r.postMessage({
      sourceName: i,
      targetName: s,
      stream: oe.START_COMPLETE,
      streamId: e,
      reason: Je(c),
    });
  });
}, zy = function (t) {
  const e = t.streamId; const i = this.sourceName; const s = t.sourceName; const r = this.comObj; const a = this.streamControllers[e]; const
    o = this.streamSinks[e];
  switch (t.stream) {
    case oe.START_COMPLETE:
      t.success ? a.startCall.resolve() : a.startCall.reject(Je(t.reason));
      break;
    case oe.PULL_COMPLETE:
      t.success ? a.pullCall.resolve() : a.pullCall.reject(Je(t.reason));
      break;
    case oe.PULL:
      if (!o) {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: oe.PULL_COMPLETE,
          streamId: e,
          success: !0,
        });
        break;
      }
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, Promise.try(o.onPull || om).then(() => {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: oe.PULL_COMPLETE,
          streamId: e,
          success: !0,
        });
      }, (c) => {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: oe.PULL_COMPLETE,
          streamId: e,
          reason: Je(c),
        });
      });
      break;
    case oe.ENQUEUE:
      if (_t(a, 'enqueue should have stream controller'), a.isClosed) break;
      a.controller.enqueue(t.chunk);
      break;
    case oe.CLOSE:
      if (_t(a, 'close should have stream controller'), a.isClosed) break;
      a.isClosed = !0, a.controller.close(), A(this, Vi, iu).call(this, a, e);
      break;
    case oe.ERROR:
      _t(a, 'error should have stream controller'), a.controller.error(Je(t.reason)), A(this, Vi, iu).call(this, a, e);
      break;
    case oe.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(Je(t.reason)), A(this, Vi, iu).call(this, a, e);
      break;
    case oe.CANCEL:
      if (!o) break;
      const l = Je(t.reason);
      Promise.try(o.onCancel || om, l).then(() => {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: oe.CANCEL_COMPLETE,
          streamId: e,
          success: !0,
        });
      }, (c) => {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: oe.CANCEL_COMPLETE,
          streamId: e,
          reason: Je(c),
        });
      }), o.sinkCapability.reject(l), o.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error('Unexpected stream case');
  }
}, iu = async function (t, e) {
  let i; let s; let
    r;
  await Promise.allSettled([(i = t.startCall) == null ? void 0 : i.promise, (s = t.pullCall) == null ? void 0 : s.promise, (r = t.cancelCall) == null ? void 0 : r.promise]), delete this.streamControllers[e];
};
let Sc;
class Uy {
  constructor({
    enableHWA: t = !1,
  }) {
    v(this, Sc, !1);
    m(this, Sc, t);
  }

  create(t, e) {
    if (t <= 0 || e <= 0) throw new Error('Invalid canvas size');
    const i = this._createCanvas(t, e);
    return {
      canvas: i,
      context: i.getContext('2d', {
        willReadFrequently: !n(this, Sc),
      }),
    };
  }

  reset(t, e, i) {
    if (!t.canvas) throw new Error('Canvas is not specified');
    if (e <= 0 || i <= 0) throw new Error('Invalid canvas size');
    t.canvas.width = e, t.canvas.height = i;
  }

  destroy(t) {
    if (!t.canvas) throw new Error('Canvas is not specified');
    t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null;
  }

  _createCanvas(t, e) {
    zt('Abstract method `_createCanvas` called.');
  }
}
Sc = new WeakMap();
class jw extends Uy {
  constructor({
    ownerDocument: t = globalThis.document,
    enableHWA: e = !1,
  }) {
    super({
      enableHWA: e,
    }), this._document = t;
  }

  _createCanvas(t, e) {
    const i = this._document.createElement('canvas');
    return i.width = t, i.height = e, i;
  }
}
class $y {
  constructor({
    baseUrl: t = null,
    isCompressed: e = !0,
  }) {
    this.baseUrl = t, this.isCompressed = e;
  }

  async fetch({
    name: t,
  }) {
    if (!this.baseUrl) throw new Error('Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.');
    if (!t) throw new Error('CMap name must be specified.');
    const e = this.baseUrl + t + (this.isCompressed ? '.bcmap' : '');
    return this._fetch(e).then((i) => ({
      cMapData: i,
      isCompressed: this.isCompressed,
    })).catch((i) => {
      throw new Error(`Unable to load ${this.isCompressed ? 'binary ' : ''}CMap at: ${e}`);
    });
  }

  async _fetch(t) {
    zt('Abstract method `_fetch` called.');
  }
}
class lm extends $y {
  async _fetch(t) {
    const e = await oh(t, this.isCompressed ? 'arraybuffer' : 'text');
    return e instanceof ArrayBuffer ? new Uint8Array(e) : kd(e);
  }
}
class Wy {
  addFilter(t) {
    return 'none';
  }

  addHCMFilter(t, e) {
    return 'none';
  }

  addAlphaFilter(t) {
    return 'none';
  }

  addLuminosityFilter(t) {
    return 'none';
  }

  addHighlightHCMFilter(t, e, i, s, r) {
    return 'none';
  }

  destroy(t = !1) {
  }
}
let fa; let Zo; let hn; let cn; let Ne; let pa; let ga; let Q; let Oe; let _h; let mo; let su; let yo; let Gy; let up; let bo; let xh; let Eh; let fp; let
  Ch;
class zw extends Wy {
  constructor({
    docId: e,
    ownerDocument: i = globalThis.document,
  }) {
    super();
    v(this, Q);
    v(this, fa);
    v(this, Zo);
    v(this, hn);
    v(this, cn);
    v(this, Ne);
    v(this, pa);
    v(this, ga, 0);
    m(this, cn, e), m(this, Ne, i);
  }

  addFilter(e) {
    if (!e) return 'none';
    let i = n(this, Q, Oe).get(e);
    if (i) return i;
    const [s, r, a] = A(this, Q, su).call(this, e); const
      o = e.length === 1 ? s : `${s}${r}${a}`;
    if (i = n(this, Q, Oe).get(o), i) return n(this, Q, Oe).set(e, i), i;
    const l = `g_${n(this, cn)}_transfer_map_${de(this, ga)._++}`; const
      c = A(this, Q, yo).call(this, l);
    n(this, Q, Oe).set(e, c), n(this, Q, Oe).set(o, c);
    const d = A(this, Q, bo).call(this, l);
    return A(this, Q, Eh).call(this, s, r, a, d), c;
  }

  addHCMFilter(e, i) {
    let E;
    const s = `${e}-${i}`; const
      r = 'base';
    let a = n(this, Q, _h).get(r);
    if ((a == null ? void 0 : a.key) === s || (a ? ((E = a.filter) == null || E.remove(), a.key = s, a.url = 'none', a.filter = null) : (a = {
      key: s,
      url: 'none',
      filter: null,
    }, n(this, Q, _h).set(r, a)), !e || !i)) return a.url;
    const o = A(this, Q, Ch).call(this, e);
    e = tt.makeHexColor(...o);
    const l = A(this, Q, Ch).call(this, i);
    if (i = tt.makeHexColor(...l), n(this, Q, mo).style.color = '', e === '#000000' && i === '#ffffff' || e === i) return a.url;
    const c = new Array(256);
    for (let S = 0; S <= 255; S++) {
      const M = S / 255;
      c[S] = M <= 0.03928 ? M / 12.92 : ((M + 0.055) / 1.055) ** 2.4;
    }
    const d = c.join(','); const u = `g_${n(this, cn)}_hcm_filter`; const
      g = a.filter = A(this, Q, bo).call(this, u);
    A(this, Q, Eh).call(this, d, d, d, g), A(this, Q, up).call(this, g);
    const b = (S, M) => {
      const T = o[S] / 255; const L = l[S] / 255; const
        R = new Array(M + 1);
      for (let p = 0; p <= M; p++) R[p] = T + p / M * (L - T);
      return R.join(',');
    };
    return A(this, Q, Eh).call(this, b(0, 5), b(1, 5), b(2, 5), g), a.url = A(this, Q, yo).call(this, u), a.url;
  }

  addAlphaFilter(e) {
    let i = n(this, Q, Oe).get(e);
    if (i) return i;
    const [s] = A(this, Q, su).call(this, [e]); const
      r = `alpha_${s}`;
    if (i = n(this, Q, Oe).get(r), i) return n(this, Q, Oe).set(e, i), i;
    const a = `g_${n(this, cn)}_alpha_map_${de(this, ga)._++}`; const
      o = A(this, Q, yo).call(this, a);
    n(this, Q, Oe).set(e, o), n(this, Q, Oe).set(r, o);
    const l = A(this, Q, bo).call(this, a);
    return A(this, Q, fp).call(this, s, l), o;
  }

  addLuminosityFilter(e) {
    let i = n(this, Q, Oe).get(e || 'luminosity');
    if (i) return i;
    let s; let
      r;
    if (e ? ([s] = A(this, Q, su).call(this, [e]), r = `luminosity_${s}`) : r = 'luminosity', i = n(this, Q, Oe).get(r), i) return n(this, Q, Oe).set(e, i), i;
    const a = `g_${n(this, cn)}_luminosity_map_${de(this, ga)._++}`; const
      o = A(this, Q, yo).call(this, a);
    n(this, Q, Oe).set(e, o), n(this, Q, Oe).set(r, o);
    const l = A(this, Q, bo).call(this, a);
    return A(this, Q, Gy).call(this, l), e && A(this, Q, fp).call(this, s, l), o;
  }

  addHighlightHCMFilter(e, i, s, r, a) {
    let L;
    const o = `${i}-${s}-${r}-${a}`;
    let l = n(this, Q, _h).get(e);
    if ((l == null ? void 0 : l.key) === o || (l ? ((L = l.filter) == null || L.remove(), l.key = o, l.url = 'none', l.filter = null) : (l = {
      key: o,
      url: 'none',
      filter: null,
    }, n(this, Q, _h).set(e, l)), !i || !s)) return l.url;
    const [c, d] = [i, s].map(A(this, Q, Ch).bind(this));
    let u = Math.round(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]); let g = Math.round(0.2126 * d[0] + 0.7152 * d[1] + 0.0722 * d[2]); let
      [b, E] = [r, a].map(A(this, Q, Ch).bind(this));
    g < u && ([u, g, b, E] = [g, u, E, b]), n(this, Q, mo).style.color = '';
    const S = (R, p, f) => {
      const y = new Array(256); const _ = (g - u) / f; const P = R / 255; const
        k = (p - R) / (255 * f);
      let C = 0;
      for (let D = 0; D <= f; D++) {
        const N = Math.round(u + D * _); const
          I = P + D * k;
        for (let B = C; B <= N; B++) y[B] = I;
        C = N + 1;
      }
      for (let D = C; D < 256; D++) y[D] = y[C - 1];
      return y.join(',');
    }; const M = `g_${n(this, cn)}_hcm_${e}_filter`; const
      T = l.filter = A(this, Q, bo).call(this, M);
    return A(this, Q, up).call(this, T), A(this, Q, Eh).call(this, S(b[0], E[0], 5), S(b[1], E[1], 5), S(b[2], E[2], 5), T), l.url = A(this, Q, yo).call(this, M), l.url;
  }

  destroy(e = !1) {
    let i; let s; let r; let
      a;
    e && ((i = n(this, pa)) != null && i.size) || ((s = n(this, hn)) == null || s.parentNode.parentNode.remove(), m(this, hn, null), (r = n(this, Zo)) == null || r.clear(), m(this, Zo, null), (a = n(this, pa)) == null || a.clear(), m(this, pa, null), m(this, ga, 0));
  }
}
fa = new WeakMap(), Zo = new WeakMap(), hn = new WeakMap(), cn = new WeakMap(), Ne = new WeakMap(), pa = new WeakMap(), ga = new WeakMap(), Q = new WeakSet(), Oe = function () {
  return n(this, Zo) || m(this, Zo, /* @__PURE__ */ new Map());
}, _h = function () {
  return n(this, pa) || m(this, pa, /* @__PURE__ */ new Map());
}, mo = function () {
  if (!n(this, hn)) {
    const e = n(this, Ne).createElement('div'); const
      {
        style: i,
      } = e;
    i.visibility = 'hidden', i.contain = 'strict', i.width = i.height = 0, i.position = 'absolute', i.top = i.left = 0, i.zIndex = -1;
    const s = n(this, Ne).createElementNS(Gs, 'svg');
    s.setAttribute('width', 0), s.setAttribute('height', 0), m(this, hn, n(this, Ne).createElementNS(Gs, 'defs')), e.append(s), s.append(n(this, hn)), n(this, Ne).body.append(e);
  }
  return n(this, hn);
}, su = function (e) {
  if (e.length === 1) {
    const c = e[0]; const
      d = new Array(256);
    for (let g = 0; g < 256; g++) d[g] = c[g] / 255;
    const u = d.join(',');
    return [u, u, u];
  }
  const [i, s, r] = e; const a = new Array(256); const o = new Array(256); const
    l = new Array(256);
  for (let c = 0; c < 256; c++) a[c] = i[c] / 255, o[c] = s[c] / 255, l[c] = r[c] / 255;
  return [a.join(','), o.join(','), l.join(',')];
}, yo = function (e) {
  if (n(this, fa) === void 0) {
    m(this, fa, '');
    const i = n(this, Ne).URL;
    i !== n(this, Ne).baseURI && (Md(i) ? pt('#createUrl: ignore "data:"-URL for performance reasons.') : m(this, fa, yg(i, '')));
  }
  return `url(${n(this, fa)}#${e})`;
}, Gy = function (e) {
  const i = n(this, Ne).createElementNS(Gs, 'feColorMatrix');
  i.setAttribute('type', 'matrix'), i.setAttribute('values', '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0'), e.append(i);
}, up = function (e) {
  const i = n(this, Ne).createElementNS(Gs, 'feColorMatrix');
  i.setAttribute('type', 'matrix'), i.setAttribute('values', '0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0'), e.append(i);
}, bo = function (e) {
  const i = n(this, Ne).createElementNS(Gs, 'filter');
  return i.setAttribute('color-interpolation-filters', 'sRGB'), i.setAttribute('id', e), n(this, Q, mo).append(i), i;
}, xh = function (e, i, s) {
  const r = n(this, Ne).createElementNS(Gs, i);
  r.setAttribute('type', 'discrete'), r.setAttribute('tableValues', s), e.append(r);
}, Eh = function (e, i, s, r) {
  const a = n(this, Ne).createElementNS(Gs, 'feComponentTransfer');
  r.append(a), A(this, Q, xh).call(this, a, 'feFuncR', e), A(this, Q, xh).call(this, a, 'feFuncG', i), A(this, Q, xh).call(this, a, 'feFuncB', s);
}, fp = function (e, i) {
  const s = n(this, Ne).createElementNS(Gs, 'feComponentTransfer');
  i.append(s), A(this, Q, xh).call(this, s, 'feFuncA', e);
}, Ch = function (e) {
  return n(this, Q, mo).style.color = e, lh(getComputedStyle(n(this, Q, mo)).getPropertyValue('color'));
};
class Vy {
  constructor({
    baseUrl: t = null,
  }) {
    this.baseUrl = t;
  }

  async fetch({
    filename: t,
  }) {
    if (!this.baseUrl) throw new Error('Ensure that the `standardFontDataUrl` API parameter is provided.');
    if (!t) throw new Error('Font filename must be specified.');
    const e = `${this.baseUrl}${t}`;
    return this._fetch(e).catch((i) => {
      throw new Error(`Unable to load font data at: ${e}`);
    });
  }

  async _fetch(t) {
    zt('Abstract method `_fetch` called.');
  }
}
class hm extends Vy {
  async _fetch(t) {
    const e = await oh(t, 'arraybuffer');
    return new Uint8Array(e);
  }
}
class qy {
  constructor({
    baseUrl: t = null,
  }) {
    this.baseUrl = t;
  }

  async fetch({
    filename: t,
  }) {
    if (!this.baseUrl) throw new Error('Ensure that the `wasmUrl` API parameter is provided.');
    if (!t) throw new Error('Wasm filename must be specified.');
    const e = `${this.baseUrl}${t}`;
    return this._fetch(e).catch((i) => {
      throw new Error(`Unable to load wasm data at: ${e}`);
    });
  }

  async _fetch(t) {
    zt('Abstract method `_fetch` called.');
  }
}
class cm extends qy {
  async _fetch(t) {
    const e = await oh(t, 'arraybuffer');
    return new Uint8Array(e);
  }
}
Xe && pt('Please use the `legacy` build in Node.js environments.');
async function _g(h) {
  const e = await process.getBuiltinModule('fs').promises.readFile(h);
  return new Uint8Array(e);
}
class Uw extends Wy {
}
class $w extends Uy {
  _createCanvas(t, e) {
    return process.getBuiltinModule('module').createRequire(import.meta.url)('@napi-rs/canvas').createCanvas(t, e);
  }
}
class Ww extends $y {
  async _fetch(t) {
    return _g(t);
  }
}
class Gw extends Vy {
  async _fetch(t) {
    return _g(t);
  }
}
class Vw extends qy {
  async _fetch(t) {
    return _g(t);
  }
}
const uo = '__forcedDependency';
const {
  floor: dm,
  ceil: um,
} = Math;
function Wd(h, t, e, i, s, r) {
  h[t * 4 + 0] = Math.min(h[t * 4 + 0], e), h[t * 4 + 1] = Math.min(h[t * 4 + 1], i), h[t * 4 + 2] = Math.max(h[t * 4 + 2], s), h[t * 4 + 3] = Math.max(h[t * 4 + 3], r);
}
const pp = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0];
let tl; let
  nr;
class qw {
  constructor(t, e) {
    v(this, tl);
    v(this, nr);
    m(this, tl, t), m(this, nr, e);
  }

  get length() {
    return n(this, tl).length;
  }

  isEmpty(t) {
    return n(this, tl)[t] === pp;
  }

  minX(t) {
    return n(this, nr)[t * 4 + 0] / 256;
  }

  minY(t) {
    return n(this, nr)[t * 4 + 1] / 256;
  }

  maxX(t) {
    return (n(this, nr)[t * 4 + 2] + 1) / 256;
  }

  maxY(t) {
    return (n(this, nr)[t * 4 + 3] + 1) / 256;
  }
}
tl = new WeakMap(), nr = new WeakMap();
const Gd = (h, t) => {
  if (!h) return;
  let e = h.get(t);
  return e || (e = {
    dependencies: /* @__PURE__ */ new Set(),
    isRenderingOperation: !1,
  }, h.set(t, e)), e;
};
let ti; let ei; let ma; let Qi; let ya; let dn; let Rt; let Lt; let un; let ii; let Ac; let el; let ba; let va; let fn; let Be; let Cs; let _c; let
  gp;
class Xw {
  constructor(t, e, i = !1) {
    v(this, _c);
    v(this, ti, {
      __proto__: null,
    });
    v(this, ei, {
      __proto__: null,
      transform: [],
      moveText: [],
      sameLineText: [],
      [uo]: [],
    });
    v(this, ma, /* @__PURE__ */ new Map());
    v(this, Qi, []);
    v(this, ya, []);
    v(this, dn, [[1, 0, 0, 1, 0, 0]]);
    v(this, Rt, [-1 / 0, -1 / 0, 1 / 0, 1 / 0]);
    v(this, Lt, new Float64Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
    v(this, un, -1);
    v(this, ii, /* @__PURE__ */ new Set());
    v(this, Ac, /* @__PURE__ */ new Map());
    v(this, el, /* @__PURE__ */ new Map());
    v(this, ba);
    v(this, va);
    v(this, fn);
    v(this, Be);
    v(this, Cs);
    m(this, ba, t.width), m(this, va, t.height), A(this, _c, gp).call(this, e), i && m(this, Cs, /* @__PURE__ */ new Map());
  }

  growOperationsCount(t) {
    t >= n(this, Be).length && A(this, _c, gp).call(this, t, n(this, Be));
  }

  save(t) {
    return m(this, ti, {
      __proto__: n(this, ti),
    }), m(this, ei, {
      __proto__: n(this, ei),
      transform: {
        __proto__: n(this, ei).transform,
      },
      moveText: {
        __proto__: n(this, ei).moveText,
      },
      sameLineText: {
        __proto__: n(this, ei).sameLineText,
      },
      [uo]: {
        __proto__: n(this, ei)[uo],
      },
    }), m(this, Rt, {
      __proto__: n(this, Rt),
    }), n(this, Qi).push(t), this;
  }

  restore(t) {
    let s;
    const e = Object.getPrototypeOf(n(this, ti));
    if (e === null) return this;
    m(this, ti, e), m(this, ei, Object.getPrototypeOf(n(this, ei))), m(this, Rt, Object.getPrototypeOf(n(this, Rt)));
    const i = n(this, Qi).pop();
    return i !== void 0 && ((s = Gd(n(this, Cs), t)) == null || s.dependencies.add(i), n(this, Be)[t] = n(this, Be)[i]), this;
  }

  recordOpenMarker(t) {
    return n(this, Qi).push(t), this;
  }

  getOpenMarker() {
    return n(this, Qi).length === 0 ? null : n(this, Qi).at(-1);
  }

  recordCloseMarker(t) {
    let i;
    const e = n(this, Qi).pop();
    return e !== void 0 && ((i = Gd(n(this, Cs), t)) == null || i.dependencies.add(e), n(this, Be)[t] = n(this, Be)[e]), this;
  }

  beginMarkedContent(t) {
    return n(this, ya).push(t), this;
  }

  endMarkedContent(t) {
    let i;
    const e = n(this, ya).pop();
    return e !== void 0 && ((i = Gd(n(this, Cs), t)) == null || i.dependencies.add(e), n(this, Be)[t] = n(this, Be)[e]), this;
  }

  pushBaseTransform(t) {
    return n(this, dn).push(tt.multiplyByDOMMatrix(n(this, dn).at(-1), t.getTransform())), this;
  }

  popBaseTransform() {
    return n(this, dn).length > 1 && n(this, dn).pop(), this;
  }

  recordSimpleData(t, e) {
    return n(this, ti)[t] = e, this;
  }

  recordIncrementalData(t, e) {
    return n(this, ei)[t].push(e), this;
  }

  resetIncrementalData(t, e) {
    return n(this, ei)[t].length = 0, this;
  }

  recordNamedData(t, e) {
    return n(this, ma).set(t, e), this;
  }

  recordSimpleDataFromNamed(t, e, i) {
    n(this, ti)[t] = n(this, ma).get(e) ?? i;
  }

  recordFutureForcedDependency(t, e) {
    return this.recordIncrementalData(uo, e), this;
  }

  inheritSimpleDataAsFutureForcedDependencies(t) {
    for (const e of t) e in n(this, ti) && this.recordFutureForcedDependency(e, n(this, ti)[e]);
    return this;
  }

  inheritPendingDependenciesAsFutureForcedDependencies() {
    for (const t of n(this, ii)) this.recordFutureForcedDependency(uo, t);
    return this;
  }

  resetBBox(t) {
    return n(this, un) !== t && (m(this, un, t), n(this, Lt)[0] = 1 / 0, n(this, Lt)[1] = 1 / 0, n(this, Lt)[2] = -1 / 0, n(this, Lt)[3] = -1 / 0), this;
  }

  recordClipBox(t, e, i, s, r, a) {
    const o = tt.multiplyByDOMMatrix(n(this, dn).at(-1), e.getTransform()); const
      l = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    tt.axialAlignedBoundingBox([i, r, s, a], o, l);
    const c = tt.intersect(n(this, Rt), l);
    return c ? (n(this, Rt)[0] = c[0], n(this, Rt)[1] = c[1], n(this, Rt)[2] = c[2], n(this, Rt)[3] = c[3]) : (n(this, Rt)[0] = n(this, Rt)[1] = 1 / 0, n(this, Rt)[2] = n(this, Rt)[3] = -1 / 0), this;
  }

  recordBBox(t, e, i, s, r, a) {
    const o = n(this, Rt);
    if (o[0] === 1 / 0) return this;
    const l = tt.multiplyByDOMMatrix(n(this, dn).at(-1), e.getTransform());
    if (o[0] === -1 / 0) return tt.axialAlignedBoundingBox([i, r, s, a], l, n(this, Lt)), this;
    const c = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    return tt.axialAlignedBoundingBox([i, r, s, a], l, c), n(this, Lt)[0] = Math.min(n(this, Lt)[0], Math.max(c[0], o[0])), n(this, Lt)[1] = Math.min(n(this, Lt)[1], Math.max(c[1], o[1])), n(this, Lt)[2] = Math.max(n(this, Lt)[2], Math.min(c[2], o[2])), n(this, Lt)[3] = Math.max(n(this, Lt)[3], Math.min(c[3], o[3])), this;
  }

  recordCharacterBBox(t, e, i, s = 1, r = 0, a = 0, o) {
    const l = i.bbox;
    let c; let
      d;
    if (l && (c = l[2] !== l[0] && l[3] !== l[1] && n(this, el).get(i), c !== !1 && (d = [0, 0, 0, 0], tt.axialAlignedBoundingBox(l, i.fontMatrix, d), (s !== 1 || r !== 0 || a !== 0) && tt.scaleMinMax([s, 0, 0, -s, r, a], d), c))) return this.recordBBox(t, e, d[0], d[2], d[1], d[3]);
    if (!o) return this.recordFullPageBBox(t);
    const u = o();
    return l && d && c === void 0 && (c = d[0] <= r - u.actualBoundingBoxLeft && d[2] >= r + u.actualBoundingBoxRight && d[1] <= a - u.actualBoundingBoxAscent && d[3] >= a + u.actualBoundingBoxDescent, n(this, el).set(i, c), c) ? this.recordBBox(t, e, d[0], d[2], d[1], d[3]) : this.recordBBox(t, e, r - u.actualBoundingBoxLeft, r + u.actualBoundingBoxRight, a - u.actualBoundingBoxAscent, a + u.actualBoundingBoxDescent);
  }

  recordFullPageBBox(t) {
    return n(this, Lt)[0] = Math.max(0, n(this, Rt)[0]), n(this, Lt)[1] = Math.max(0, n(this, Rt)[1]), n(this, Lt)[2] = Math.min(n(this, ba), n(this, Rt)[2]), n(this, Lt)[3] = Math.min(n(this, va), n(this, Rt)[3]), this;
  }

  getSimpleIndex(t) {
    return n(this, ti)[t];
  }

  recordDependencies(t, e) {
    const i = n(this, ii); const s = n(this, ti); const
      r = n(this, ei);
    for (const a of e) a in n(this, ti) ? i.add(s[a]) : a in r && r[a].forEach(i.add, i);
    return this;
  }

  recordNamedDependency(t, e) {
    return n(this, ma).has(e) && n(this, ii).add(n(this, ma).get(e)), this;
  }

  recordOperation(t, e = !1) {
    if (this.recordDependencies(t, [uo]), n(this, Cs)) {
      const i = Gd(n(this, Cs), t); const
        {
          dependencies: s,
        } = i;
      n(this, ii).forEach(s.add, s), n(this, Qi).forEach(s.add, s), n(this, ya).forEach(s.add, s), s.delete(t), i.isRenderingOperation = !0;
    }
    if (n(this, un) === t) {
      const i = dm(n(this, Lt)[0] * 256 / n(this, ba)); const s = dm(n(this, Lt)[1] * 256 / n(this, va)); const r = um(n(this, Lt)[2] * 256 / n(this, ba)); const
        a = um(n(this, Lt)[3] * 256 / n(this, va));
      Wd(n(this, fn), t, i, s, r, a);
      for (const o of n(this, ii)) o !== t && Wd(n(this, fn), o, i, s, r, a);
      for (const o of n(this, Qi)) o !== t && Wd(n(this, fn), o, i, s, r, a);
      for (const o of n(this, ya)) o !== t && Wd(n(this, fn), o, i, s, r, a);
      e || (n(this, ii).clear(), m(this, un, -1));
    }
    return this;
  }

  recordShowTextOperation(t, e = !1) {
    const i = Array.from(n(this, ii));
    this.recordOperation(t, e), this.recordIncrementalData('sameLineText', t);
    for (const s of i) this.recordIncrementalData('sameLineText', s);
    return this;
  }

  bboxToClipBoxDropOperation(t, e = !1) {
    return n(this, un) === t && (m(this, un, -1), n(this, Rt)[0] = Math.max(n(this, Rt)[0], n(this, Lt)[0]), n(this, Rt)[1] = Math.max(n(this, Rt)[1], n(this, Lt)[1]), n(this, Rt)[2] = Math.min(n(this, Rt)[2], n(this, Lt)[2]), n(this, Rt)[3] = Math.min(n(this, Rt)[3], n(this, Lt)[3]), e || n(this, ii).clear()), this;
  }

  _takePendingDependencies() {
    const t = n(this, ii);
    return m(this, ii, /* @__PURE__ */ new Set()), t;
  }

  _extractOperation(t) {
    const e = n(this, Ac).get(t);
    return n(this, Ac).delete(t), e;
  }

  _pushPendingDependencies(t) {
    for (const e of t) n(this, ii).add(e);
  }

  take() {
    return n(this, el).clear(), new qw(n(this, Be), n(this, fn));
  }

  takeDebugMetadata() {
    return n(this, Cs);
  }
}
ti = new WeakMap(), ei = new WeakMap(), ma = new WeakMap(), Qi = new WeakMap(), ya = new WeakMap(), dn = new WeakMap(), Rt = new WeakMap(), Lt = new WeakMap(), un = new WeakMap(), ii = new WeakMap(), Ac = new WeakMap(), el = new WeakMap(), ba = new WeakMap(), va = new WeakMap(), fn = new WeakMap(), Be = new WeakMap(), Cs = new WeakMap(), _c = new WeakSet(), gp = function (t, e) {
  const i = new ArrayBuffer(t * 4);
  m(this, fn, new Uint8ClampedArray(i)), m(this, Be, new Uint32Array(i)), e && e.length > 0 ? (n(this, Be).set(e), n(this, Be).fill(pp, e.length)) : n(this, Be).fill(pp);
};
let Nt; let Zt; let Zi; let il; let
  sl;
const Ig = class Ig {
  constructor(t, e, i) {
    v(this, Nt);
    v(this, Zt);
    v(this, Zi);
    v(this, il, 0);
    v(this, sl, 0);
    if (t instanceof Ig && n(t, Zi) === !!i) return t;
    m(this, Nt, t), m(this, Zt, e), m(this, Zi, !!i);
  }

  growOperationsCount() {
    throw new Error('Unreachable');
  }

  save(t) {
    return de(this, sl)._++, n(this, Nt).save(n(this, Zt)), this;
  }

  restore(t) {
    return n(this, sl) > 0 && (n(this, Nt).restore(n(this, Zt)), de(this, sl)._--), this;
  }

  recordOpenMarker(t) {
    return de(this, il)._++, this;
  }

  getOpenMarker() {
    return n(this, il) > 0 ? n(this, Zt) : n(this, Nt).getOpenMarker();
  }

  recordCloseMarker(t) {
    return de(this, il)._--, this;
  }

  beginMarkedContent(t) {
    return this;
  }

  endMarkedContent(t) {
    return this;
  }

  pushBaseTransform(t) {
    return n(this, Nt).pushBaseTransform(t), this;
  }

  popBaseTransform() {
    return n(this, Nt).popBaseTransform(), this;
  }

  recordSimpleData(t, e) {
    return n(this, Nt).recordSimpleData(t, n(this, Zt)), this;
  }

  recordIncrementalData(t, e) {
    return n(this, Nt).recordIncrementalData(t, n(this, Zt)), this;
  }

  resetIncrementalData(t, e) {
    return n(this, Nt).resetIncrementalData(t, n(this, Zt)), this;
  }

  recordNamedData(t, e) {
    return this;
  }

  recordSimpleDataFromNamed(t, e, i) {
    return n(this, Nt).recordSimpleDataFromNamed(t, e, n(this, Zt)), this;
  }

  recordFutureForcedDependency(t, e) {
    return n(this, Nt).recordFutureForcedDependency(t, n(this, Zt)), this;
  }

  inheritSimpleDataAsFutureForcedDependencies(t) {
    return n(this, Nt).inheritSimpleDataAsFutureForcedDependencies(t), this;
  }

  inheritPendingDependenciesAsFutureForcedDependencies() {
    return n(this, Nt).inheritPendingDependenciesAsFutureForcedDependencies(), this;
  }

  resetBBox(t) {
    return n(this, Zi) || n(this, Nt).resetBBox(n(this, Zt)), this;
  }

  recordClipBox(t, e, i, s, r, a) {
    return n(this, Zi) || n(this, Nt).recordClipBox(n(this, Zt), e, i, s, r, a), this;
  }

  recordBBox(t, e, i, s, r, a) {
    return n(this, Zi) || n(this, Nt).recordBBox(n(this, Zt), e, i, s, r, a), this;
  }

  recordCharacterBBox(t, e, i, s, r, a, o) {
    return n(this, Zi) || n(this, Nt).recordCharacterBBox(n(this, Zt), e, i, s, r, a, o), this;
  }

  recordFullPageBBox(t) {
    return n(this, Zi) || n(this, Nt).recordFullPageBBox(n(this, Zt)), this;
  }

  getSimpleIndex(t) {
    return n(this, Nt).getSimpleIndex(t);
  }

  recordDependencies(t, e) {
    return n(this, Nt).recordDependencies(n(this, Zt), e), this;
  }

  recordNamedDependency(t, e) {
    return n(this, Nt).recordNamedDependency(n(this, Zt), e), this;
  }

  recordOperation(t) {
    return n(this, Nt).recordOperation(n(this, Zt), !0), this;
  }

  recordShowTextOperation(t) {
    return n(this, Nt).recordShowTextOperation(n(this, Zt), !0), this;
  }

  bboxToClipBoxDropOperation(t) {
    return n(this, Zi) || n(this, Nt).bboxToClipBoxDropOperation(n(this, Zt), !0), this;
  }

  take() {
    throw new Error('Unreachable');
  }

  takeDebugMetadata() {
    throw new Error('Unreachable');
  }
};
Nt = new WeakMap(), Zt = new WeakMap(), Zi = new WeakMap(), il = new WeakMap(), sl = new WeakMap();
const Du = Ig;
const Li = {
  stroke: ['path', 'transform', 'filter', 'strokeColor', 'strokeAlpha', 'lineWidth', 'lineCap', 'lineJoin', 'miterLimit', 'dash'],
  fill: ['path', 'transform', 'filter', 'fillColor', 'fillAlpha', 'globalCompositeOperation', 'SMask'],
  imageXObject: ['transform', 'SMask', 'filter', 'fillAlpha', 'strokeAlpha', 'globalCompositeOperation'],
  rawFillPath: ['filter', 'fillColor', 'fillAlpha'],
  showText: ['transform', 'leading', 'charSpacing', 'wordSpacing', 'hScale', 'textRise', 'moveText', 'textMatrix', 'font', 'fontObj', 'filter', 'fillColor', 'textRenderingMode', 'SMask', 'fillAlpha', 'strokeAlpha', 'globalCompositeOperation', 'sameLineText'],
  transform: ['transform'],
  transformAndFill: ['transform', 'fillColor'],
}; const
  Me = {
    FILL: 'Fill',
    STROKE: 'Stroke',
    SHADING: 'Shading',
  };
function mp(h, t) {
  if (!t) return;
  const e = t[2] - t[0]; const i = t[3] - t[1]; const
    s = new Path2D();
  s.rect(t[0], t[1], e, i), h.clip(s);
}
class xg {
  isModifyingCurrentTransform() {
    return !1;
  }

  getPattern() {
    zt('Abstract method `getPattern` called.');
  }
}
class Yw extends xg {
  constructor(t) {
    super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
  }

  _createGradient(t) {
    let e;
    this._type === 'axial' ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === 'radial' && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const i of this._colorStops) e.addColorStop(i[0], i[1]);
    return e;
  }

  getPattern(t, e, i, s) {
    let r;
    if (s === Me.STROKE || s === Me.FILL) {
      const a = e.current.getClippedPathBoundingBox(s, Yt(t)) || [0, 0, 0, 0]; const o = Math.ceil(a[2] - a[0]) || 1; const l = Math.ceil(a[3] - a[1]) || 1; const c = e.cachedCanvases.getCanvas('pattern', o, l); const
        d = c.context;
      d.clearRect(0, 0, d.canvas.width, d.canvas.height), d.beginPath(), d.rect(0, 0, d.canvas.width, d.canvas.height), d.translate(-a[0], -a[1]), i = tt.transform(i, [1, 0, 0, 1, a[0], a[1]]), d.transform(...e.baseTransform), this.matrix && d.transform(...this.matrix), mp(d, this._bbox), d.fillStyle = this._createGradient(d), d.fill(), r = t.createPattern(c.canvas, 'no-repeat');
      const u = new DOMMatrix(i);
      r.setTransform(u);
    } else mp(t, this._bbox), r = this._createGradient(t);
    return r;
  }
}
function Of(h, t, e, i, s, r, a, o) {
  const l = t.coords; const c = t.colors; const d = h.data; const
    u = h.width * 4;
  let g;
  l[e + 1] > l[i + 1] && (g = e, e = i, i = g, g = r, r = a, a = g), l[i + 1] > l[s + 1] && (g = i, i = s, s = g, g = a, a = o, o = g), l[e + 1] > l[i + 1] && (g = e, e = i, i = g, g = r, r = a, a = g);
  const b = (l[e] + t.offsetX) * t.scaleX; const E = (l[e + 1] + t.offsetY) * t.scaleY; const S = (l[i] + t.offsetX) * t.scaleX; const M = (l[i + 1] + t.offsetY) * t.scaleY; const T = (l[s] + t.offsetX) * t.scaleX; const
    L = (l[s + 1] + t.offsetY) * t.scaleY;
  if (E >= L) return;
  const R = c[r]; const p = c[r + 1]; const f = c[r + 2]; const y = c[a]; const _ = c[a + 1]; const P = c[a + 2]; const k = c[o]; const C = c[o + 1]; const D = c[o + 2]; const N = Math.round(E); const
    I = Math.round(L);
  let B; let j; let z; let w; let K; let F; let x; let
    O;
  for (let H = N; H <= I; H++) {
    if (H < M) {
      const W = H < E ? 0 : (E - H) / (E - M);
      B = b - (b - S) * W, j = R - (R - y) * W, z = p - (p - _) * W, w = f - (f - P) * W;
    } else {
      let W;
      H > L ? W = 1 : M === L ? W = 0 : W = (M - H) / (M - L), B = S - (S - T) * W, j = y - (y - k) * W, z = _ - (_ - C) * W, w = P - (P - D) * W;
    }
    let $;
    H < E ? $ = 0 : H > L ? $ = 1 : $ = (E - H) / (E - L), K = b - (b - T) * $, F = R - (R - k) * $, x = p - (p - C) * $, O = f - (f - D) * $;
    const U = Math.round(Math.min(B, K)); const
      q = Math.round(Math.max(B, K));
    let G = u * H + U * 4;
    for (let W = U; W <= q; W++) $ = (B - W) / (B - K), $ < 0 ? $ = 0 : $ > 1 && ($ = 1), d[G++] = j - (j - F) * $ | 0, d[G++] = z - (z - x) * $ | 0, d[G++] = w - (w - O) * $ | 0, d[G++] = 255;
  }
}
function Kw(h, t, e) {
  const i = t.coords; const
    s = t.colors;
  let r; let
    a;
  switch (t.type) {
    case 'lattice':
      const o = t.verticesPerRow; const l = Math.floor(i.length / o) - 1; const
        c = o - 1;
      for (r = 0; r < l; r++) {
        let d = r * o;
        for (let u = 0; u < c; u++, d++) Of(h, e, i[d], i[d + 1], i[d + o], s[d], s[d + 1], s[d + o]), Of(h, e, i[d + o + 1], i[d + 1], i[d + o], s[d + o + 1], s[d + 1], s[d + o]);
      }
      break;
    case 'triangles':
      for (r = 0, a = i.length; r < a; r += 3) Of(h, e, i[r], i[r + 1], i[r + 2], s[r], s[r + 1], s[r + 2]);
      break;
    default:
      throw new Error('illegal figure');
  }
}
class Jw extends xg {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[6], this._background = t[7], this.matrix = null;
  }

  _createMeshCanvas(t, e, i) {
    const o = Math.floor(this._bounds[0]); const l = Math.floor(this._bounds[1]); const c = Math.ceil(this._bounds[2]) - o; const d = Math.ceil(this._bounds[3]) - l; const u = Math.min(Math.ceil(Math.abs(c * t[0] * 1.1)), 3e3); const g = Math.min(Math.ceil(Math.abs(d * t[1] * 1.1)), 3e3); const b = c / u; const E = d / g; const S = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -o,
      offsetY: -l,
      scaleX: 1 / b,
      scaleY: 1 / E,
    }; const M = u + 4; const T = g + 4; const L = i.getCanvas('mesh', M, T); const R = L.context; const
      p = R.createImageData(u, g);
    if (e) {
      const y = p.data;
      for (let _ = 0, P = y.length; _ < P; _ += 4) y[_] = e[0], y[_ + 1] = e[1], y[_ + 2] = e[2], y[_ + 3] = 255;
    }
    for (const y of this._figures) Kw(p, y, S);
    return R.putImageData(p, 2, 2), {
      canvas: L.canvas,
      offsetX: o - 2 * b,
      offsetY: l - 2 * E,
      scaleX: b,
      scaleY: E,
    };
  }

  isModifyingCurrentTransform() {
    return !0;
  }

  getPattern(t, e, i, s) {
    mp(t, this._bbox);
    const r = new Float32Array(2);
    if (s === Me.SHADING) tt.singularValueDecompose2dScale(Yt(t), r);
    else if (this.matrix) {
      tt.singularValueDecompose2dScale(this.matrix, r);
      const [o, l] = r;
      tt.singularValueDecompose2dScale(e.baseTransform, r), r[0] *= o, r[1] *= l;
    } else tt.singularValueDecompose2dScale(e.baseTransform, r);
    const a = this._createMeshCanvas(r, s === Me.SHADING ? null : this._background, e.cachedCanvases);
    return s !== Me.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, 'no-repeat');
  }
}
class Qw extends xg {
  getPattern() {
    return 'hotpink';
  }
}
function Zw(h) {
  switch (h[0]) {
    case 'RadialAxial':
      return new Yw(h);
    case 'Mesh':
      return new Jw(h);
    case 'Dummy':
      return new Qw();
  }
  throw new Error(`Unknown IR type: ${h[0]}`);
}
const fm = {
  COLORED: 1,
  UNCOLORED: 2,
};
const Ku = class Ku {
  constructor(t, e, i, s) {
    this.color = t[1], this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.ctx = e, this.canvasGraphicsFactory = i, this.baseTransform = s;
  }

  createPatternCanvas(t, e) {
    let F; let
      x;
    const {
      bbox: i,
      operatorList: s,
      paintType: r,
      tilingType: a,
      color: o,
      canvasGraphicsFactory: l,
    } = this;
    let {
      xstep: c,
      ystep: d,
    } = this;
    c = Math.abs(c), d = Math.abs(d), df(`TilingType: ${a}`);
    const u = i[0]; const g = i[1]; const b = i[2]; const E = i[3]; const S = b - u; const M = E - g; const
      T = new Float32Array(2);
    tt.singularValueDecompose2dScale(this.matrix, T);
    const [L, R] = T;
    tt.singularValueDecompose2dScale(this.baseTransform, T);
    const p = L * T[0]; const
      f = R * T[1];
    let y = S; let _ = M; let P = !1; let
      k = !1;
    const C = Math.ceil(c * p); const D = Math.ceil(d * f); const N = Math.ceil(S * p); const
      I = Math.ceil(M * f);
    C >= N ? y = c : P = !0, D >= I ? _ = d : k = !0;
    const B = this.getSizeAndScale(y, this.ctx.canvas.width, p); const j = this.getSizeAndScale(_, this.ctx.canvas.height, f); const z = t.cachedCanvases.getCanvas('pattern', B.size, j.size); const w = z.context; const
      K = l.createCanvasGraphics(w, e);
    if (K.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(K, r, o), w.translate(-B.scale * u, -j.scale * g), K.transform(0, B.scale, 0, 0, j.scale, 0, 0), w.save(), (F = K.dependencyTracker) == null || F.save(), this.clipBbox(K, u, g, b, E), K.baseTransform = Yt(K.ctx), K.executeOperatorList(s), K.endDrawing(), (x = K.dependencyTracker) == null || x.restore(), w.restore(), P || k) {
      const O = z.canvas;
      P && (y = c), k && (_ = d);
      const H = this.getSizeAndScale(y, this.ctx.canvas.width, p); const $ = this.getSizeAndScale(_, this.ctx.canvas.height, f); const U = H.size; const q = $.size; const G = t.cachedCanvases.getCanvas('pattern-workaround', U, q); const W = G.context; const ht = P ? Math.floor(S / c) : 0; const
        ct = k ? Math.floor(M / d) : 0;
      for (let dt = 0; dt <= ht; dt++) for (let ut = 0; ut <= ct; ut++) W.drawImage(O, U * dt, q * ut, U, q, 0, 0, U, q);
      return {
        canvas: G.canvas,
        scaleX: H.scale,
        scaleY: $.scale,
        offsetX: u,
        offsetY: g,
      };
    }
    return {
      canvas: z.canvas,
      scaleX: B.scale,
      scaleY: j.scale,
      offsetX: u,
      offsetY: g,
    };
  }

  getSizeAndScale(t, e, i) {
    const s = Math.max(Ku.MAX_PATTERN_SIZE, e);
    let r = Math.ceil(t * i);
    return r >= s ? r = s : i = r / t, {
      scale: i,
      size: r,
    };
  }

  clipBbox(t, e, i, s, r) {
    const a = s - e; const
      o = r - i;
    t.ctx.rect(e, i, a, o), tt.axialAlignedBoundingBox([e, i, s, r], Yt(t.ctx), t.current.minMax), t.clip(), t.endPath();
  }

  setFillAndStrokeStyleToContext(t, e, i) {
    const s = t.ctx; const
      r = t.current;
    switch (e) {
      case fm.COLORED:
        const {
          fillStyle: a,
          strokeStyle: o,
        } = this.ctx;
        s.fillStyle = r.fillColor = a, s.strokeStyle = r.strokeColor = o;
        break;
      case fm.UNCOLORED:
        s.fillStyle = s.strokeStyle = i, r.fillColor = r.strokeColor = i;
        break;
      default:
        throw new ww(`Unsupported paint type: ${e}`);
    }
  }

  isModifyingCurrentTransform() {
    return !1;
  }

  getPattern(t, e, i, s, r) {
    let a = i;
    s !== Me.SHADING && (a = tt.transform(a, e.baseTransform), this.matrix && (a = tt.transform(a, this.matrix)));
    const o = this.createPatternCanvas(e, r);
    let l = new DOMMatrix(a);
    l = l.translate(o.offsetX, o.offsetY), l = l.scale(1 / o.scaleX, 1 / o.scaleY);
    const c = t.createPattern(o.canvas, 'repeat');
    return c.setTransform(l), c;
  }
};
V(Ku, 'MAX_PATTERN_SIZE', 3e3);
const yp = Ku;
function t0({
  src: h,
  srcPos: t = 0,
  dest: e,
  width: i,
  height: s,
  nonBlackColor: r = 4294967295,
  inverseDecode: a = !1,
}) {
  const o = _e.isLittleEndian ? 4278190080 : 255; const [l, c] = a ? [r, o] : [o, r]; const d = i >> 3; const u = i & 7; const
    g = h.length;
  e = new Uint32Array(e.buffer);
  let b = 0;
  for (let E = 0; E < s; E++) {
    for (const M = t + d; t < M; t++) {
      const T = t < g ? h[t] : 255;
      e[b++] = T & 128 ? c : l, e[b++] = T & 64 ? c : l, e[b++] = T & 32 ? c : l, e[b++] = T & 16 ? c : l, e[b++] = T & 8 ? c : l, e[b++] = T & 4 ? c : l, e[b++] = T & 2 ? c : l, e[b++] = T & 1 ? c : l;
    }
    if (u === 0) continue;
    const S = t < g ? h[t++] : 255;
    for (let M = 0; M < u; M++) e[b++] = S & 1 << 7 - M ? c : l;
  }
  return {
    srcPos: t,
    destPos: b,
  };
}
const pm = 16; const gm = 100; const e0 = 15; const mm = 10; const ai = 16; const If = new DOMMatrix(); const Ci = new Float32Array(2); const
  Ao = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
function i0(h, t) {
  if (h._removeMirroring) throw new Error('Context is already forwarding operations.');
  h.__originalSave = h.save, h.__originalRestore = h.restore, h.__originalRotate = h.rotate, h.__originalScale = h.scale, h.__originalTranslate = h.translate, h.__originalTransform = h.transform, h.__originalSetTransform = h.setTransform, h.__originalResetTransform = h.resetTransform, h.__originalClip = h.clip, h.__originalMoveTo = h.moveTo, h.__originalLineTo = h.lineTo, h.__originalBezierCurveTo = h.bezierCurveTo, h.__originalRect = h.rect, h.__originalClosePath = h.closePath, h.__originalBeginPath = h.beginPath, h._removeMirroring = () => {
    h.save = h.__originalSave, h.restore = h.__originalRestore, h.rotate = h.__originalRotate, h.scale = h.__originalScale, h.translate = h.__originalTranslate, h.transform = h.__originalTransform, h.setTransform = h.__originalSetTransform, h.resetTransform = h.__originalResetTransform, h.clip = h.__originalClip, h.moveTo = h.__originalMoveTo, h.lineTo = h.__originalLineTo, h.bezierCurveTo = h.__originalBezierCurveTo, h.rect = h.__originalRect, h.closePath = h.__originalClosePath, h.beginPath = h.__originalBeginPath, delete h._removeMirroring;
  }, h.save = function () {
    t.save(), this.__originalSave();
  }, h.restore = function () {
    t.restore(), this.__originalRestore();
  }, h.translate = function (e, i) {
    t.translate(e, i), this.__originalTranslate(e, i);
  }, h.scale = function (e, i) {
    t.scale(e, i), this.__originalScale(e, i);
  }, h.transform = function (e, i, s, r, a, o) {
    t.transform(e, i, s, r, a, o), this.__originalTransform(e, i, s, r, a, o);
  }, h.setTransform = function (e, i, s, r, a, o) {
    t.setTransform(e, i, s, r, a, o), this.__originalSetTransform(e, i, s, r, a, o);
  }, h.resetTransform = function () {
    t.resetTransform(), this.__originalResetTransform();
  }, h.rotate = function (e) {
    t.rotate(e), this.__originalRotate(e);
  }, h.clip = function (e) {
    t.clip(e), this.__originalClip(e);
  }, h.moveTo = function (e, i) {
    t.moveTo(e, i), this.__originalMoveTo(e, i);
  }, h.lineTo = function (e, i) {
    t.lineTo(e, i), this.__originalLineTo(e, i);
  }, h.bezierCurveTo = function (e, i, s, r, a, o) {
    t.bezierCurveTo(e, i, s, r, a, o), this.__originalBezierCurveTo(e, i, s, r, a, o);
  }, h.rect = function (e, i, s, r) {
    t.rect(e, i, s, r), this.__originalRect(e, i, s, r);
  }, h.closePath = function () {
    t.closePath(), this.__originalClosePath();
  }, h.beginPath = function () {
    t.beginPath(), this.__originalBeginPath();
  };
}
class s0 {
  constructor(t) {
    this.canvasFactory = t, this.cache = /* @__PURE__ */ Object.create(null);
  }

  getCanvas(t, e, i) {
    let s;
    return this.cache[t] !== void 0 ? (s = this.cache[t], this.canvasFactory.reset(s, e, i)) : (s = this.canvasFactory.create(e, i), this.cache[t] = s), s;
  }

  delete(t) {
    delete this.cache[t];
  }

  clear() {
    for (const t in this.cache) {
      const e = this.cache[t];
      this.canvasFactory.destroy(e), delete this.cache[t];
    }
  }
}
function Vd(h, t, e, i, s, r, a, o, l, c) {
  const [d, u, g, b, E, S] = Yt(h);
  if (u === 0 && g === 0) {
    const L = a * d + E; const R = Math.round(L); const p = o * b + S; const f = Math.round(p); const y = (a + l) * d + E; const _ = Math.abs(Math.round(y) - R) || 1; const P = (o + c) * b + S; const
      k = Math.abs(Math.round(P) - f) || 1;
    return h.setTransform(Math.sign(d), 0, 0, Math.sign(b), R, f), h.drawImage(t, e, i, s, r, 0, 0, _, k), h.setTransform(d, u, g, b, E, S), [_, k];
  }
  if (d === 0 && b === 0) {
    const L = o * g + E; const R = Math.round(L); const p = a * u + S; const f = Math.round(p); const y = (o + c) * g + E; const _ = Math.abs(Math.round(y) - R) || 1; const P = (a + l) * u + S; const
      k = Math.abs(Math.round(P) - f) || 1;
    return h.setTransform(0, Math.sign(u), Math.sign(g), 0, R, f), h.drawImage(t, e, i, s, r, 0, 0, k, _), h.setTransform(d, u, g, b, E, S), [k, _];
  }
  h.drawImage(t, e, i, s, r, a, o, l, c);
  const M = Math.hypot(d, u); const
    T = Math.hypot(g, b);
  return [M * l, T * c];
}
class ym {
  constructor(t, e, i) {
    V(this, 'alphaIsShape', !1);
    V(this, 'fontSize', 0);
    V(this, 'fontSizeScale', 1);
    V(this, 'textMatrix', null);
    V(this, 'textMatrixScale', 1);
    V(this, 'fontMatrix', $f);
    V(this, 'leading', 0);
    V(this, 'x', 0);
    V(this, 'y', 0);
    V(this, 'lineX', 0);
    V(this, 'lineY', 0);
    V(this, 'charSpacing', 0);
    V(this, 'wordSpacing', 0);
    V(this, 'textHScale', 1);
    V(this, 'textRenderingMode', Ee.FILL);
    V(this, 'textRise', 0);
    V(this, 'fillColor', '#000000');
    V(this, 'strokeColor', '#000000');
    V(this, 'patternFill', !1);
    V(this, 'patternStroke', !1);
    V(this, 'fillAlpha', 1);
    V(this, 'strokeAlpha', 1);
    V(this, 'lineWidth', 1);
    V(this, 'activeSMask', null);
    V(this, 'transferMaps', 'none');
    i == null || i(this), this.clipBox = new Float32Array([0, 0, t, e]), this.minMax = Ao.slice();
  }

  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t.minMax = this.minMax.slice(), t;
  }

  getPathBoundingBox(t = Me.FILL, e = null) {
    const i = this.minMax.slice();
    if (t === Me.STROKE) {
      e || zt('Stroke bounding box must include transform.'), tt.singularValueDecompose2dScale(e, Ci);
      const s = Ci[0] * this.lineWidth / 2; const
        r = Ci[1] * this.lineWidth / 2;
      i[0] -= s, i[1] -= r, i[2] += s, i[3] += r;
    }
    return i;
  }

  updateClipFromPath() {
    const t = tt.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }

  isEmptyClip() {
    return this.minMax[0] === 1 / 0;
  }

  startNewPathAndClipBox(t) {
    this.clipBox.set(t, 0), this.minMax.set(Ao, 0);
  }

  getClippedPathBoundingBox(t = Me.FILL, e = null) {
    return tt.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function bm(h, t) {
  if (t instanceof ImageData) {
    h.putImageData(t, 0, 0);
    return;
  }
  const e = t.height; const i = t.width; const s = e % ai; const r = (e - s) / ai; const a = s === 0 ? r : r + 1; const
    o = h.createImageData(i, ai);
  let l = 0; let
    c;
  const d = t.data; const
    u = o.data;
  let g; let b; let E; let
    S;
  if (t.kind === Bh.GRAYSCALE_1BPP) {
    const M = d.byteLength; const T = new Uint32Array(u.buffer, 0, u.byteLength >> 2); const L = T.length; const R = i + 7 >> 3; const p = 4294967295; const
      f = _e.isLittleEndian ? 4278190080 : 255;
    for (g = 0; g < a; g++) {
      for (E = g < r ? ai : s, c = 0, b = 0; b < E; b++) {
        const y = M - l;
        let _ = 0;
        const P = y > R ? i : y * 8 - 7; const
          k = P & -8;
        let C = 0; let
          D = 0;
        for (; _ < k; _ += 8) D = d[l++], T[c++] = D & 128 ? p : f, T[c++] = D & 64 ? p : f, T[c++] = D & 32 ? p : f, T[c++] = D & 16 ? p : f, T[c++] = D & 8 ? p : f, T[c++] = D & 4 ? p : f, T[c++] = D & 2 ? p : f, T[c++] = D & 1 ? p : f;
        for (; _ < P; _++) C === 0 && (D = d[l++], C = 128), T[c++] = D & C ? p : f, C >>= 1;
      }
      for (; c < L;) T[c++] = 0;
      h.putImageData(o, 0, g * ai);
    }
  } else if (t.kind === Bh.RGBA_32BPP) {
    for (b = 0, S = i * ai * 4, g = 0; g < r; g++) u.set(d.subarray(l, l + S)), l += S, h.putImageData(o, 0, b), b += ai;
    g < a && (S = i * s * 4, u.set(d.subarray(l, l + S)), h.putImageData(o, 0, b));
  } else if (t.kind === Bh.RGB_24BPP) {
    for (E = ai, S = i * E, g = 0; g < a; g++) {
      for (g >= r && (E = s, S = i * E), c = 0, b = S; b--;) u[c++] = d[l++], u[c++] = d[l++], u[c++] = d[l++], u[c++] = 255;
      h.putImageData(o, 0, g * ai);
    }
  } else throw new Error(`bad image kind: ${t.kind}`);
}
function vm(h, t) {
  if (t.bitmap) {
    h.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height; const i = t.width; const s = e % ai; const r = (e - s) / ai; const a = s === 0 ? r : r + 1; const
    o = h.createImageData(i, ai);
  let l = 0;
  const c = t.data; const
    d = o.data;
  for (let u = 0; u < a; u++) {
    const g = u < r ? ai : s;
    ({
      srcPos: l,
    } = t0({
      src: c,
      srcPos: l,
      dest: d,
      width: i,
      height: g,
      nonBlackColor: 0,
    })), h.putImageData(o, 0, u * ai);
  }
}
function uh(h, t) {
  const e = ['strokeStyle', 'fillStyle', 'fillRule', 'globalAlpha', 'lineWidth', 'lineCap', 'lineJoin', 'miterLimit', 'globalCompositeOperation', 'font', 'filter'];
  for (const i of e) h[i] !== void 0 && (t[i] = h[i]);
  h.setLineDash !== void 0 && (t.setLineDash(h.getLineDash()), t.lineDashOffset = h.lineDashOffset);
}
function qd(h) {
  h.strokeStyle = h.fillStyle = '#000000', h.fillRule = 'nonzero', h.globalAlpha = 1, h.lineWidth = 1, h.lineCap = 'butt', h.lineJoin = 'miter', h.miterLimit = 10, h.globalCompositeOperation = 'source-over', h.font = '10px sans-serif', h.setLineDash !== void 0 && (h.setLineDash([]), h.lineDashOffset = 0);
  const {
    filter: t,
  } = h;
  t !== 'none' && t !== '' && (h.filter = 'none');
}
function wm(h, t) {
  if (t) return !0;
  tt.singularValueDecompose2dScale(h, Ci);
  const e = Math.fround(cs.pixelRatio * On.PDF_TO_CSS_UNITS);
  return Ci[0] <= e && Ci[1] <= e;
}
const n0 = ['butt', 'round', 'square']; const r0 = ['miter', 'round', 'bevel']; const a0 = {}; const
  Sm = {};
let ds; let bp; let vp; let
  wp;
const Fg = class Fg {
  constructor(t, e, i, s, r, {
    optionalContentConfig: a,
    markedContentStack: o = null,
  }, l, c, d) {
    v(this, ds);
    this.ctx = t, this.current = new ym(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = i, this.canvasFactory = s, this.filterFactory = r, this.groupStack = [], this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedCanvases = new s0(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = l, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = c, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map(), this.dependencyTracker = d ?? null;
  }

  getObject(t, e, i = null) {
    let s;
    return typeof e === 'string' ? ((s = this.dependencyTracker) == null || s.recordNamedDependency(t, e), e.startsWith('g_') ? this.commonObjs.get(e) : this.objs.get(e)) : i;
  }

  beginDrawing({
    transform: t,
    viewport: e,
    transparency: i = !1,
    background: s = null,
  }) {
    const r = this.ctx.canvas.width; const a = this.ctx.canvas.height; const
      o = this.ctx.fillStyle;
    if (this.ctx.fillStyle = s || '#ffffff', this.ctx.fillRect(0, 0, r, a), this.ctx.fillStyle = o, i) {
      const l = this.cachedCanvases.getCanvas('transparent', r, a);
      this.compositeCtx = this.ctx, this.transparentCanvas = l.canvas, this.ctx = l.context, this.ctx.save(), this.ctx.transform(...Yt(this.compositeCtx));
    }
    this.ctx.save(), qd(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = Yt(this.ctx);
  }

  executeOperatorList(t, e, i, s, r) {
    let T;
    const a = t.argsArray; const
      o = t.fnArray;
    let l = e || 0;
    const c = a.length;
    if (c === l) return l;
    const d = c - l > mm && typeof i === 'function';
    const u = d ? Date.now() + e0 : 0;
    let g = 0;
    const b = this.commonObjs; const
      E = this.objs;
    let S; let
      M;
    for (; ;) {
      if (s !== void 0 && l === s.nextBreakPoint) return s.breakIt(l, i), l;
      if (!r || r(l)) {
        if (S = o[l], M = a[l] ?? null, S !== nh.dependency) M === null ? this[S](l) : this[S](l, ...M);
        else {
          for (const L of M) {
            (T = this.dependencyTracker) == null || T.recordNamedData(L, l);
            const R = L.startsWith('g_') ? b : E;
            if (!R.has(L)) return R.get(L, i), l;
          }
        }
      }
      if (l++, l === c) return l;
      if (d && ++g > mm) {
        if (Date.now() > u) return i(), l;
        g = 0;
      }
    }
  }

  endDrawing() {
    A(this, ds, bp).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values()) typeof HTMLCanvasElement < 'u' && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), A(this, ds, vp).call(this);
  }

  _scaleImage(t, e) {
    const i = t.width ?? t.displayWidth; const
      s = t.height ?? t.displayHeight;
    let r = Math.max(Math.hypot(e[0], e[1]), 1); let a = Math.max(Math.hypot(e[2], e[3]), 1); let o = i; let l = s; let c = 'prescale1'; let d; let
      u;
    for (; r > 2 && o > 1 || a > 2 && l > 1;) {
      let g = o; let
        b = l;
      r > 2 && o > 1 && (g = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o / 2), r /= o / g), a > 2 && l > 1 && (b = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l) / 2, a /= l / b), d = this.cachedCanvases.getCanvas(c, g, b), u = d.context, u.clearRect(0, 0, g, b), u.drawImage(t, 0, 0, o, l, 0, 0, g, b), t = d.canvas, o = g, l = b, c = c === 'prescale1' ? 'prescale2' : 'prescale1';
    }
    return {
      img: t,
      paintWidth: o,
      paintHeight: l,
    };
  }

  _createMaskCanvas(t, e) {
    let C; let
      D;
    const i = this.ctx; const {
      width: s,
      height: r,
    } = e; const a = this.current.fillColor; const o = this.current.patternFill; const
      l = Yt(i);
    let c; let d; let u; let
      g;
    if ((e.bitmap || e.data) && e.count > 1) {
      const N = e.bitmap || e.data.buffer;
      d = JSON.stringify(o ? l : [l.slice(0, 4), a]), c = this._cachedBitmapsMap.get(N), c || (c = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(N, c));
      const I = c.get(d);
      if (I && !o) {
        const B = Math.round(Math.min(l[0], l[2]) + l[4]); const
          j = Math.round(Math.min(l[1], l[3]) + l[5]);
        return (C = this.dependencyTracker) == null || C.recordDependencies(t, Li.transformAndFill), {
          canvas: I,
          offsetX: B,
          offsetY: j,
        };
      }
      u = I;
    }
    u || (g = this.cachedCanvases.getCanvas('maskCanvas', s, r), vm(g.context, e));
    let b = tt.transform(l, [1 / s, 0, 0, -1 / r, 0, 0]);
    b = tt.transform(b, [1, 0, 0, 1, 0, -r]);
    const E = Ao.slice();
    tt.axialAlignedBoundingBox([0, 0, s, r], b, E);
    const [S, M, T, L] = E; const R = Math.round(T - S) || 1; const p = Math.round(L - M) || 1; const f = this.cachedCanvases.getCanvas('fillCanvas', R, p); const y = f.context; const _ = S; const
      P = M;
    y.translate(-_, -P), y.transform(...b), u || (u = this._scaleImage(g.canvas, fs(y)), u = u.img, c && o && c.set(d, u)), y.imageSmoothingEnabled = wm(Yt(y), e.interpolate), Vd(y, u, 0, 0, u.width, u.height, 0, 0, s, r), y.globalCompositeOperation = 'source-in';
    const k = tt.transform(fs(y), [1, 0, 0, 1, -_, -P]);
    return y.fillStyle = o ? a.getPattern(i, this, k, Me.FILL, t) : a, y.fillRect(0, 0, s, r), c && !o && (this.cachedCanvases.delete('fillCanvas'), c.set(d, f.canvas)), (D = this.dependencyTracker) == null || D.recordDependencies(t, Li.transformAndFill), {
      canvas: f.canvas,
      offsetX: Math.round(_),
      offsetY: Math.round(P),
    };
  }

  setLineWidth(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('lineWidth', t), e !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = e, this.ctx.lineWidth = e;
  }

  setLineCap(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('lineCap', t), this.ctx.lineCap = n0[e];
  }

  setLineJoin(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('lineJoin', t), this.ctx.lineJoin = r0[e];
  }

  setMiterLimit(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('miterLimit', t), this.ctx.miterLimit = e;
  }

  setDash(t, e, i) {
    let r;
    (r = this.dependencyTracker) == null || r.recordSimpleData('dash', t);
    const s = this.ctx;
    s.setLineDash !== void 0 && (s.setLineDash(e), s.lineDashOffset = i);
  }

  setRenderingIntent(t, e) {
  }

  setFlatness(t, e) {
  }

  setGState(t, e) {
    let i; let s; let r; let a; let
      o;
    for (const [l, c] of e) {
      switch (l) {
        case 'LW':
          this.setLineWidth(t, c);
          break;
        case 'LC':
          this.setLineCap(t, c);
          break;
        case 'LJ':
          this.setLineJoin(t, c);
          break;
        case 'ML':
          this.setMiterLimit(t, c);
          break;
        case 'D':
          this.setDash(t, c[0], c[1]);
          break;
        case 'RI':
          this.setRenderingIntent(t, c);
          break;
        case 'FL':
          this.setFlatness(t, c);
          break;
        case 'Font':
          this.setFont(t, c[0], c[1]);
          break;
        case 'CA':
          (i = this.dependencyTracker) == null || i.recordSimpleData('strokeAlpha', t), this.current.strokeAlpha = c;
          break;
        case 'ca':
          (s = this.dependencyTracker) == null || s.recordSimpleData('fillAlpha', t), this.ctx.globalAlpha = this.current.fillAlpha = c;
          break;
        case 'BM':
          (r = this.dependencyTracker) == null || r.recordSimpleData('globalCompositeOperation', t), this.ctx.globalCompositeOperation = c;
          break;
        case 'SMask':
          (a = this.dependencyTracker) == null || a.recordSimpleData('SMask', t), this.current.activeSMask = c ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case 'TR':
          (o = this.dependencyTracker) == null || o.recordSimpleData('filter', t), this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(c);
          break;
      }
    }
  }

  get inSMaskMode() {
    return !!this.suspendedCtx;
  }

  checkSMaskState() {
    const t = this.inSMaskMode;
    this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode();
  }

  beginSMaskMode(t) {
    if (this.inSMaskMode) throw new Error('beginSMaskMode called while already in smask mode');
    const e = this.ctx.canvas.width; const i = this.ctx.canvas.height; const s = `smaskGroupAt${this.groupLevel}`; const
      r = this.cachedCanvases.getCanvas(s, e, i);
    this.suspendedCtx = this.ctx;
    const a = this.ctx = r.context;
    a.setTransform(this.suspendedCtx.getTransform()), uh(this.suspendedCtx, a), i0(a, this.suspendedCtx), this.setGState(t, [['BM', 'source-over']]);
  }

  endSMaskMode() {
    if (!this.inSMaskMode) throw new Error('endSMaskMode called while not in smask mode');
    this.ctx._removeMirroring(), uh(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }

  compose(t) {
    if (!this.current.activeSMask) return;
    t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const e = this.current.activeSMask; const
      i = this.suspendedCtx;
    this.composeSMask(i, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }

  composeSMask(t, e, i, s) {
    const r = s[0]; const a = s[1]; const o = s[2] - r; const
      l = s[3] - a;
    o === 0 || l === 0 || (this.genericComposeSMask(e.context, i, o, l, e.subtype, e.backdrop, e.transferMap, r, a, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = 'source-over', t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(i.canvas, 0, 0), t.restore());
  }

  genericComposeSMask(t, e, i, s, r, a, o, l, c, d, u) {
    let g = t.canvas; let b = l - d; let
      E = c - u;
    if (a) {
      if (b < 0 || E < 0 || b + i > g.width || E + s > g.height) {
        const M = this.cachedCanvases.getCanvas('maskExtension', i, s); const
          T = M.context;
        T.drawImage(g, -b, -E), T.globalCompositeOperation = 'destination-atop', T.fillStyle = a, T.fillRect(0, 0, i, s), T.globalCompositeOperation = 'source-over', g = M.canvas, b = E = 0;
      } else {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const M = new Path2D();
        M.rect(b, E, i, s), t.clip(M), t.globalCompositeOperation = 'destination-atop', t.fillStyle = a, t.fillRect(b, E, i, s), t.restore();
      }
    }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), r === 'Alpha' && o ? e.filter = this.filterFactory.addAlphaFilter(o) : r === 'Luminosity' && (e.filter = this.filterFactory.addLuminosityFilter(o));
    const S = new Path2D();
    S.rect(l, c, i, s), e.clip(S), e.globalCompositeOperation = 'destination-in', e.drawImage(g, b, E, i, s, l, c, i, s), e.restore();
  }

  save(t) {
    let i;
    this.inSMaskMode && uh(this.ctx, this.suspendedCtx), this.ctx.save();
    const e = this.current;
    this.stateStack.push(e), this.current = e.clone(), (i = this.dependencyTracker) == null || i.save(t);
  }

  restore(t) {
    let e;
    if ((e = this.dependencyTracker) == null || e.restore(t), this.stateStack.length === 0) {
      this.inSMaskMode && this.endSMaskMode();
      return;
    }
    this.current = this.stateStack.pop(), this.ctx.restore(), this.inSMaskMode && uh(this.suspendedCtx, this.ctx), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }

  transform(t, e, i, s, r, a, o) {
    let l;
    (l = this.dependencyTracker) == null || l.recordIncrementalData('transform', t), this.ctx.transform(e, i, s, r, a, o), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }

  constructPath(t, e, i, s) {
    let [r] = i;
    if (!s) {
      r || (r = i[0] = new Path2D()), this[e](t, r);
      return;
    }
    if (this.dependencyTracker !== null) {
      const a = e === nh.stroke ? this.current.lineWidth / 2 : 0;
      this.dependencyTracker.resetBBox(t).recordBBox(t, this.ctx, s[0] - a, s[2] + a, s[1] - a, s[3] + a).recordDependencies(t, ['transform']);
    }
    if (!(r instanceof Path2D)) {
      const a = i[0] = new Path2D();
      for (let o = 0, l = r.length; o < l;) {
        switch (r[o++]) {
          case jd.moveTo:
            a.moveTo(r[o++], r[o++]);
            break;
          case jd.lineTo:
            a.lineTo(r[o++], r[o++]);
            break;
          case jd.curveTo:
            a.bezierCurveTo(r[o++], r[o++], r[o++], r[o++], r[o++], r[o++]);
            break;
          case jd.closePath:
            a.closePath();
            break;
          default:
            pt(`Unrecognized drawing path operator: ${r[o - 1]}`);
            break;
        }
      }
      r = a;
    }
    tt.axialAlignedBoundingBox(s, Yt(this.ctx), this.current.minMax), this[e](t, r), this._pathStartIdx = t;
  }

  closePath(t) {
    this.ctx.closePath();
  }

  stroke(t, e, i = !0) {
    let a;
    const s = this.ctx; const
      r = this.current.strokeColor;
    if (s.globalAlpha = this.current.strokeAlpha, this.contentVisible) {
      if (typeof r === 'object' && (r != null && r.getPattern)) {
        const o = r.isModifyingCurrentTransform() ? s.getTransform() : null;
        if (s.save(), s.strokeStyle = r.getPattern(s, this, fs(s), Me.STROKE, t), o) {
          const l = new Path2D();
          l.addPath(e, s.getTransform().invertSelf().multiplySelf(o)), e = l;
        }
        this.rescaleAndStroke(e, !1), s.restore();
      } else this.rescaleAndStroke(e, !0);
    }
    (a = this.dependencyTracker) == null || a.recordDependencies(t, Li.stroke), i && this.consumePath(t, e, this.current.getClippedPathBoundingBox(Me.STROKE, Yt(this.ctx))), s.globalAlpha = this.current.fillAlpha;
  }

  closeStroke(t, e) {
    this.stroke(t, e);
  }

  fill(t, e, i = !0) {
    let c; let d; let
      u;
    const s = this.ctx; const r = this.current.fillColor; const
      a = this.current.patternFill;
    let o = !1;
    if (a) {
      const g = r.isModifyingCurrentTransform() ? s.getTransform() : null;
      if ((c = this.dependencyTracker) == null || c.save(t), s.save(), s.fillStyle = r.getPattern(s, this, fs(s), Me.FILL, t), g) {
        const b = new Path2D();
        b.addPath(e, s.getTransform().invertSelf().multiplySelf(g)), e = b;
      }
      o = !0;
    }
    const l = this.current.getClippedPathBoundingBox();
    this.contentVisible && l !== null && (this.pendingEOFill ? (s.fill(e, 'evenodd'), this.pendingEOFill = !1) : s.fill(e)), (d = this.dependencyTracker) == null || d.recordDependencies(t, Li.fill), o && (s.restore(), (u = this.dependencyTracker) == null || u.restore(t)), i && this.consumePath(t, e, l);
  }

  eoFill(t, e) {
    this.pendingEOFill = !0, this.fill(t, e);
  }

  fillStroke(t, e) {
    this.fill(t, e, !1), this.stroke(t, e, !1), this.consumePath(t, e);
  }

  eoFillStroke(t, e) {
    this.pendingEOFill = !0, this.fillStroke(t, e);
  }

  closeFillStroke(t, e) {
    this.fillStroke(t, e);
  }

  closeEOFillStroke(t, e) {
    this.pendingEOFill = !0, this.fillStroke(t, e);
  }

  endPath(t, e) {
    this.consumePath(t, e);
  }

  rawFillPath(t, e) {
    let i;
    this.ctx.fill(e), (i = this.dependencyTracker) == null || i.recordDependencies(t, Li.rawFillPath).recordOperation(t);
  }

  clip(t) {
    let e;
    (e = this.dependencyTracker) == null || e.recordFutureForcedDependency('clipMode', t), this.pendingClip = a0;
  }

  eoClip(t) {
    let e;
    (e = this.dependencyTracker) == null || e.recordFutureForcedDependency('clipMode', t), this.pendingClip = Sm;
  }

  beginText(t) {
    let e;
    this.current.textMatrix = null, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, (e = this.dependencyTracker) == null || e.recordOpenMarker(t).resetIncrementalData('sameLineText').resetIncrementalData('moveText', t);
  }

  endText(t) {
    const e = this.pendingTextPaths; const
      i = this.ctx;
    if (this.dependencyTracker) {
      const {
        dependencyTracker: s,
      } = this;
      e !== void 0 && s.recordFutureForcedDependency('textClip', s.getOpenMarker()).recordFutureForcedDependency('textClip', t), s.recordCloseMarker(t);
    }
    if (e !== void 0) {
      const s = new Path2D(); const
        r = i.getTransform().invertSelf();
      for (const {
        transform: a,
        x: o,
        y: l,
        fontSize: c,
        path: d,
      } of e) d && s.addPath(d, new DOMMatrix(a).preMultiplySelf(r).translate(o, l).scale(c, -c));
      i.clip(s);
    }
    delete this.pendingTextPaths;
  }

  setCharSpacing(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('charSpacing', t), this.current.charSpacing = e;
  }

  setWordSpacing(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('wordSpacing', t), this.current.wordSpacing = e;
  }

  setHScale(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('hScale', t), this.current.textHScale = e / 100;
  }

  setLeading(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('leading', t), this.current.leading = -e;
  }

  setFont(t, e, i) {
    let u; let
      g;
    (u = this.dependencyTracker) == null || u.recordSimpleData('font', t).recordSimpleDataFromNamed('fontObj', e, t);
    const s = this.commonObjs.get(e); const
      r = this.current;
    if (!s) throw new Error(`Can't find font for ${e}`);
    if (r.fontMatrix = s.fontMatrix || $f, (r.fontMatrix[0] === 0 || r.fontMatrix[3] === 0) && pt(`Invalid font matrix for font ${e}`), i < 0 ? (i = -i, r.fontDirection = -1) : r.fontDirection = 1, this.current.font = s, this.current.fontSize = i, s.isType3Font) return;
    const a = s.loadedName || 'sans-serif';
    const o = ((g = s.systemFontInfo) == null ? void 0 : g.css) || `"${a}", ${s.fallbackName}`;
    let l = 'normal';
    s.black ? l = '900' : s.bold && (l = 'bold');
    const c = s.italic ? 'italic' : 'normal';
    let d = i;
    i < pm ? d = pm : i > gm && (d = gm), this.current.fontSizeScale = i / d, this.ctx.font = `${c} ${l} ${d}px ${o}`;
  }

  setTextRenderingMode(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('textRenderingMode', t), this.current.textRenderingMode = e;
  }

  setTextRise(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('textRise', t), this.current.textRise = e;
  }

  moveText(t, e, i) {
    let s;
    (s = this.dependencyTracker) == null || s.resetIncrementalData('sameLineText').recordIncrementalData('moveText', t), this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += i;
  }

  setLeadingMoveText(t, e, i) {
    this.setLeading(t, -i), this.moveText(t, e, i);
  }

  setTextMatrix(t, e) {
    let s;
    (s = this.dependencyTracker) == null || s.recordSimpleData('textMatrix', t);
    const {
      current: i,
    } = this;
    i.textMatrix = e, i.textMatrixScale = Math.hypot(e[0], e[1]), i.x = i.lineX = 0, i.y = i.lineY = 0;
  }

  nextLine(t) {
    let e;
    this.moveText(t, 0, this.current.leading), (e = this.dependencyTracker) == null || e.recordIncrementalData('moveText', this.dependencyTracker.getSimpleIndex('leading') ?? t);
  }

  paintChar(t, e, i, s, r, a) {
    let T; let L; let R; let
      p;
    const o = this.ctx; const l = this.current; const c = l.font; const d = l.textRenderingMode; const u = l.fontSize / l.fontSizeScale; const g = d & Ee.FILL_STROKE_MASK; const b = !!(d & Ee.ADD_TO_PATH_FLAG); const E = l.patternFill && !c.missingFile; const
      S = l.patternStroke && !c.missingFile;
    let M;
    if ((c.disableFontFace || b || E || S) && !c.missingFile && (M = c.getPathGenerator(this.commonObjs, e)), M && (c.disableFontFace || E || S)) {
      o.save(), o.translate(i, s), o.scale(u, -u), (T = this.dependencyTracker) == null || T.recordCharacterBBox(t, o, c);
      let f;
      if (g === Ee.FILL || g === Ee.FILL_STROKE) {
        if (r) {
          f = o.getTransform(), o.setTransform(...r);
          const y = A(this, ds, wp).call(this, M, f, r);
          o.fill(y);
        } else o.fill(M);
      }
      if (g === Ee.STROKE || g === Ee.FILL_STROKE) {
        if (a) {
          f || (f = o.getTransform()), o.setTransform(...a);
          const {
            a: y,
            b: _,
            c: P,
            d: k,
          } = f; const C = tt.inverseTransform(a); const
            D = tt.transform([y, _, P, k, 0, 0], C);
          tt.singularValueDecompose2dScale(D, Ci), o.lineWidth *= Math.max(Ci[0], Ci[1]) / u, o.stroke(A(this, ds, wp).call(this, M, f, a));
        } else o.lineWidth /= u, o.stroke(M);
      }
      o.restore();
    } else (g === Ee.FILL || g === Ee.FILL_STROKE) && (o.fillText(e, i, s), (L = this.dependencyTracker) == null || L.recordCharacterBBox(t, o, c, u, i, s, () => o.measureText(e))), (g === Ee.STROKE || g === Ee.FILL_STROKE) && (this.dependencyTracker && ((R = this.dependencyTracker) == null || R.recordCharacterBBox(t, o, c, u, i, s, () => o.measureText(e)).recordDependencies(t, Li.stroke)), o.strokeText(e, i, s));
    b && ((this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: Yt(o),
      x: i,
      y: s,
      fontSize: u,
      path: M,
    }), (p = this.dependencyTracker) == null || p.recordCharacterBBox(t, o, c, u, i, s));
  }

  get isFontSubpixelAAEnabled() {
    const {
      context: t,
    } = this.cachedCanvases.getCanvas('isFontSubpixelAAEnabled', 10, 10);
    t.scale(1.5, 1), t.fillText('I', 0, 10);
    const e = t.getImageData(0, 0, 10, 10).data;
    let i = !1;
    for (let s = 3; s < e.length; s += 4) {
      if (e[s] > 0 && e[s] < 255) {
        i = !0;
        break;
      }
    }
    return yt(this, 'isFontSubpixelAAEnabled', i);
  }

  showText(t, e) {
    let P; let k; let C; let
      D;
    this.dependencyTracker && (this.dependencyTracker.recordDependencies(t, Li.showText).resetBBox(t), this.current.textRenderingMode & Ee.ADD_TO_PATH_FLAG && this.dependencyTracker.recordFutureForcedDependency('textClip', t).inheritPendingDependenciesAsFutureForcedDependencies());
    const i = this.current; const
      s = i.font;
    if (s.isType3Font) {
      this.showType3Text(t, e), (P = this.dependencyTracker) == null || P.recordShowTextOperation(t);
      return;
    }
    const r = i.fontSize;
    if (r === 0) {
      (k = this.dependencyTracker) == null || k.recordOperation(t);
      return;
    }
    const a = this.ctx; const o = i.fontSizeScale; const l = i.charSpacing; const c = i.wordSpacing; const d = i.fontDirection; const u = i.textHScale * d; const g = e.length; const b = s.vertical; const E = b ? 1 : -1; const S = s.defaultVMetrics; const M = r * i.fontMatrix[0]; const
      T = i.textRenderingMode === Ee.FILL && !s.disableFontFace && !i.patternFill;
    a.save(), i.textMatrix && a.transform(...i.textMatrix), a.translate(i.x, i.y + i.textRise), d > 0 ? a.scale(u, -1) : a.scale(u, 1);
    let L; let
      R;
    if (i.patternFill) {
      a.save();
      const N = i.fillColor.getPattern(a, this, fs(a), Me.FILL, t);
      L = Yt(a), a.restore(), a.fillStyle = N;
    }
    if (i.patternStroke) {
      a.save();
      const N = i.strokeColor.getPattern(a, this, fs(a), Me.STROKE, t);
      R = Yt(a), a.restore(), a.strokeStyle = N;
    }
    let p = i.lineWidth;
    const f = i.textMatrixScale;
    if (f === 0 || p === 0) {
      const N = i.textRenderingMode & Ee.FILL_STROKE_MASK;
      (N === Ee.STROKE || N === Ee.FILL_STROKE) && (p = this.getSinglePixelWidth());
    } else p /= f;
    if (o !== 1 && (a.scale(o, o), p /= o), a.lineWidth = p, s.isInvalidPDFjsFont) {
      const N = [];
      let I = 0;
      for (const j of e) N.push(j.unicode), I += j.width;
      const B = N.join('');
      if (a.fillText(B, 0, 0), this.dependencyTracker !== null) {
        const j = a.measureText(B);
        this.dependencyTracker.recordBBox(t, this.ctx, -j.actualBoundingBoxLeft, j.actualBoundingBoxRight, -j.actualBoundingBoxAscent, j.actualBoundingBoxDescent).recordShowTextOperation(t);
      }
      i.x += I * M * u, a.restore(), this.compose();
      return;
    }
    let y = 0; let
      _;
    for (_ = 0; _ < g; ++_) {
      const N = e[_];
      if (typeof N === 'number') {
        y += E * N * r / 1e3;
        continue;
      }
      let I = !1;
      const B = (N.isSpace ? c : 0) + l; const j = N.fontChar; const
        z = N.accent;
      let w; let K; let
        F = N.width;
      if (b) {
        const H = N.vmetric || S; const $ = -(N.vmetric ? H[1] : F * 0.5) * M; const
          U = H[2] * M;
        F = H ? -H[0] : F, w = $ / o, K = (y + U) / o;
      } else w = y / o, K = 0;
      let x;
      if (s.remeasure && F > 0) {
        x = a.measureText(j);
        const H = x.width * 1e3 / r * o;
        if (F < H && this.isFontSubpixelAAEnabled) {
          const $ = F / H;
          I = !0, a.save(), a.scale($, 1), w /= $;
        } else F !== H && (w += (F - H) / 2e3 * r / o);
      }
      if (this.contentVisible && (N.isInFont || s.missingFile)) {
        if (T && !z) {
          a.fillText(j, w, K), (C = this.dependencyTracker) == null || C.recordCharacterBBox(t, a, x ? {
            bbox: null,
          } : s, r / o, w, K, () => x ?? a.measureText(j));
        } else if (this.paintChar(t, j, w, K, L, R), z) {
          const H = w + r * z.offset.x / o; const
            $ = K - r * z.offset.y / o;
          this.paintChar(t, z.fontChar, H, $, L, R);
        }
      }
      const O = b ? F * M - B * d : F * M + B * d;
      y += O, I && a.restore();
    }
    b ? i.y -= y : i.x += y * u, a.restore(), this.compose(), (D = this.dependencyTracker) == null || D.recordShowTextOperation(t);
  }

  showType3Text(t, e) {
    const i = this.ctx; const s = this.current; const r = s.font; const a = s.fontSize; const o = s.fontDirection; const l = r.vertical ? 1 : -1; const c = s.charSpacing; const d = s.wordSpacing; const u = s.textHScale * o; const g = s.fontMatrix || $f; const b = e.length; const
      E = s.textRenderingMode === Ee.INVISIBLE;
    let S; let M; let T; let
      L;
    if (E || a === 0) return;
    this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, i.save(), s.textMatrix && i.transform(...s.textMatrix), i.translate(s.x, s.y + s.textRise), i.scale(u, o);
    const R = this.dependencyTracker;
    for (this.dependencyTracker = R ? new Du(R, t) : null, S = 0; S < b; ++S) {
      if (M = e[S], typeof M === 'number') {
        L = l * M * a / 1e3, this.ctx.translate(L, 0), s.x += L * u;
        continue;
      }
      const p = (M.isSpace ? d : 0) + c; const
        f = r.charProcOperatorList[M.operatorListId];
      f ? this.contentVisible && (this.save(), i.scale(a, a), i.transform(...g), this.executeOperatorList(f), this.restore()) : pt(`Type3 character "${M.operatorListId}" is not available.`);
      const y = [M.width, 0];
      tt.applyTransform(y, g), T = y[0] * a + p, i.translate(T, 0), s.x += T * u;
    }
    i.restore(), R && (this.dependencyTracker = R);
  }

  setCharWidth(t, e, i) {
  }

  setCharWidthAndBounds(t, e, i, s, r, a, o) {
    let c;
    const l = new Path2D();
    l.rect(s, r, a - s, o - r), this.ctx.clip(l), (c = this.dependencyTracker) == null || c.recordBBox(t, this.ctx, s, a, r, o).recordClipBox(t, this.ctx, s, a, r, o), this.endPath(t);
  }

  getColorN_Pattern(t, e) {
    let i;
    if (e[0] === 'TilingPattern') {
      const s = this.baseTransform || Yt(this.ctx); const
        r = {
          createCanvasGraphics: (a, o) => new Fg(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
            optionalContentConfig: this.optionalContentConfig,
            markedContentStack: this.markedContentStack,
          }, void 0, void 0, this.dependencyTracker ? new Du(this.dependencyTracker, o, !0) : null),
        };
      i = new yp(e, this.ctx, r, s);
    } else i = this._getPattern(t, e[1], e[2]);
    return i;
  }

  setStrokeColorN(t, ...e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('strokeColor', t), this.current.strokeColor = this.getColorN_Pattern(t, e), this.current.patternStroke = !0;
  }

  setFillColorN(t, ...e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('fillColor', t), this.current.fillColor = this.getColorN_Pattern(t, e), this.current.patternFill = !0;
  }

  setStrokeRGBColor(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('strokeColor', t), this.ctx.strokeStyle = this.current.strokeColor = e, this.current.patternStroke = !1;
  }

  setStrokeTransparent(t) {
    let e;
    (e = this.dependencyTracker) == null || e.recordSimpleData('strokeColor', t), this.ctx.strokeStyle = this.current.strokeColor = 'transparent', this.current.patternStroke = !1;
  }

  setFillRGBColor(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('fillColor', t), this.ctx.fillStyle = this.current.fillColor = e, this.current.patternFill = !1;
  }

  setFillTransparent(t) {
    let e;
    (e = this.dependencyTracker) == null || e.recordSimpleData('fillColor', t), this.ctx.fillStyle = this.current.fillColor = 'transparent', this.current.patternFill = !1;
  }

  _getPattern(t, e, i = null) {
    let s;
    return this.cachedPatterns.has(e) ? s = this.cachedPatterns.get(e) : (s = Zw(this.getObject(t, e)), this.cachedPatterns.set(e, s)), i && (s.matrix = i), s;
  }

  shadingFill(t, e) {
    let a;
    if (!this.contentVisible) return;
    const i = this.ctx;
    this.save(t);
    const s = this._getPattern(t, e);
    i.fillStyle = s.getPattern(i, this, fs(i), Me.SHADING, t);
    const r = fs(i);
    if (r) {
      const {
        width: o,
        height: l,
      } = i.canvas; const
        c = Ao.slice();
      tt.axialAlignedBoundingBox([0, 0, o, l], r, c);
      const [d, u, g, b] = c;
      this.ctx.fillRect(d, u, g - d, b - u);
    } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    (a = this.dependencyTracker) == null || a.resetBBox(t).recordFullPageBBox(t).recordDependencies(t, Li.transform).recordDependencies(t, Li.fill)
      .recordOperation(t), this.compose(this.current.getClippedPathBoundingBox()), this.restore(t);
  }

  beginInlineImage() {
    zt('Should not call beginInlineImage');
  }

  beginImageData() {
    zt('Should not call beginImageData');
  }

  paintFormXObjectBegin(t, e, i) {
    let s;
    if (this.contentVisible && (this.save(t), this.baseTransformStack.push(this.baseTransform), e && this.transform(t, ...e), this.baseTransform = Yt(this.ctx), i)) {
      tt.axialAlignedBoundingBox(i, this.baseTransform, this.current.minMax);
      const [r, a, o, l] = i; const
        c = new Path2D();
      c.rect(r, a, o - r, l - a), this.ctx.clip(c), (s = this.dependencyTracker) == null || s.recordClipBox(t, this.ctx, r, o, a, l), this.endPath(t);
    }
  }

  paintFormXObjectEnd(t) {
    this.contentVisible && (this.restore(t), this.baseTransform = this.baseTransformStack.pop());
  }

  beginGroup(t, e) {
    let R;
    if (!this.contentVisible) return;
    this.save(t), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const i = this.ctx;
    e.isolated || df('TODO: Support non-isolated groups.'), e.knockout && pt('Knockout groups not supported.');
    const s = Yt(i);
    if (e.matrix && i.transform(...e.matrix), !e.bbox) throw new Error('Bounding box is required.');
    let r = Ao.slice();
    tt.axialAlignedBoundingBox(e.bbox, Yt(i), r);
    const a = [0, 0, i.canvas.width, i.canvas.height];
    r = tt.intersect(r, a) || [0, 0, 0, 0];
    const o = Math.floor(r[0]); const l = Math.floor(r[1]); const c = Math.max(Math.ceil(r[2]) - o, 1); const
      d = Math.max(Math.ceil(r[3]) - l, 1);
    this.current.startNewPathAndClipBox([0, 0, c, d]);
    let u = `groupAt${this.groupLevel}`;
    e.smask && (u += `_smask_${this.smaskCounter++ % 2}`);
    const g = this.cachedCanvases.getCanvas(u, c, d); const
      b = g.context;
    b.translate(-o, -l), b.transform(...s);
    let E = new Path2D();
    const [S, M, T, L] = e.bbox;
    if (E.rect(S, M, T - S, L - M), e.matrix) {
      const p = new Path2D();
      p.addPath(E, new DOMMatrix(e.matrix)), E = p;
    }
    b.clip(E), e.smask && this.smaskStack.push({
      canvas: g.canvas,
      context: b,
      offsetX: o,
      offsetY: l,
      subtype: e.smask.subtype,
      backdrop: e.smask.backdrop,
      transferMap: e.smask.transferMap || null,
      startTransformInverse: null,
    }), (!e.smask || this.dependencyTracker) && (i.setTransform(1, 0, 0, 1, 0, 0), i.translate(o, l), i.save()), uh(i, b), this.ctx = b, (R = this.dependencyTracker) == null || R.inheritSimpleDataAsFutureForcedDependencies(['fillAlpha', 'strokeAlpha', 'globalCompositeOperation']).pushBaseTransform(i), this.setGState(t, [['BM', 'source-over'], ['ca', 1], ['CA', 1]]), this.groupStack.push(i), this.groupLevel++;
  }

  endGroup(t, e) {
    let r;
    if (!this.contentVisible) return;
    this.groupLevel--;
    const i = this.ctx; const
      s = this.groupStack.pop();
    if (this.ctx = s, this.ctx.imageSmoothingEnabled = !1, (r = this.dependencyTracker) == null || r.popBaseTransform(), e.smask) this.tempSMask = this.smaskStack.pop(), this.restore(t), this.dependencyTracker && this.ctx.restore();
    else {
      this.ctx.restore();
      const a = Yt(this.ctx);
      this.restore(t), this.ctx.save(), this.ctx.setTransform(...a);
      const o = Ao.slice();
      tt.axialAlignedBoundingBox([0, 0, i.canvas.width, i.canvas.height], a, o), this.ctx.drawImage(i.canvas, 0, 0), this.ctx.restore(), this.compose(o);
    }
  }

  beginAnnotation(t, e, i, s, r, a) {
    if (A(this, ds, bp).call(this), qd(this.ctx), this.ctx.save(), this.save(t), this.baseTransform && this.ctx.setTransform(...this.baseTransform), i) {
      const o = i[2] - i[0]; const
        l = i[3] - i[1];
      if (a && this.annotationCanvasMap) {
        s = s.slice(), s[4] -= i[0], s[5] -= i[1], i = i.slice(), i[0] = i[1] = 0, i[2] = o, i[3] = l, tt.singularValueDecompose2dScale(Yt(this.ctx), Ci);
        const {
          viewportScale: c,
        } = this; const d = Math.ceil(o * this.outputScaleX * c); const
          u = Math.ceil(l * this.outputScaleY * c);
        this.annotationCanvas = this.canvasFactory.create(d, u);
        const {
          canvas: g,
          context: b,
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(e, g), this.annotationCanvas.savedCtx = this.ctx, this.ctx = b, this.ctx.save(), this.ctx.setTransform(Ci[0], 0, 0, -Ci[1], 0, l * Ci[1]), qd(this.ctx);
      } else {
        qd(this.ctx), this.endPath(t);
        const c = new Path2D();
        c.rect(i[0], i[1], o, l), this.ctx.clip(c);
      }
    }
    this.current = new ym(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(t, ...s), this.transform(t, ...r);
  }

  endAnnotation(t) {
    this.annotationCanvas && (this.ctx.restore(), A(this, ds, vp).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }

  paintImageMaskXObject(t, e) {
    let o;
    if (!this.contentVisible) return;
    const i = e.count;
    e = this.getObject(t, e.data, e), e.count = i;
    const s = this.ctx; const r = this._createMaskCanvas(t, e); const
      a = r.canvas;
    s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.drawImage(a, r.offsetX, r.offsetY), (o = this.dependencyTracker) == null || o.resetBBox(t).recordBBox(t, this.ctx, r.offsetX, r.offsetX + a.width, r.offsetY, r.offsetY + a.height).recordOperation(t), s.restore(), this.compose();
  }

  paintImageMaskXObjectRepeat(t, e, i, s = 0, r = 0, a, o) {
    let u; let g; let
      b;
    if (!this.contentVisible) return;
    e = this.getObject(t, e.data, e);
    const l = this.ctx;
    l.save();
    const c = Yt(l);
    l.transform(i, s, r, a, 0, 0);
    const d = this._createMaskCanvas(t, e);
    l.setTransform(1, 0, 0, 1, d.offsetX - c[4], d.offsetY - c[5]), (u = this.dependencyTracker) == null || u.resetBBox(t);
    for (let E = 0, S = o.length; E < S; E += 2) {
      const M = tt.transform(c, [i, s, r, a, o[E], o[E + 1]]);
      l.drawImage(d.canvas, M[4], M[5]), (g = this.dependencyTracker) == null || g.recordBBox(t, this.ctx, M[4], M[4] + d.canvas.width, M[5], M[5] + d.canvas.height);
    }
    l.restore(), this.compose(), (b = this.dependencyTracker) == null || b.recordOperation(t);
  }

  paintImageMaskXObjectGroup(t, e) {
    let a; let o; let
      l;
    if (!this.contentVisible) return;
    const i = this.ctx; const s = this.current.fillColor; const
      r = this.current.patternFill;
    (a = this.dependencyTracker) == null || a.resetBBox(t).recordDependencies(t, Li.transformAndFill);
    for (const c of e) {
      const {
        data: d,
        width: u,
        height: g,
        transform: b,
      } = c; const E = this.cachedCanvases.getCanvas('maskCanvas', u, g); const
        S = E.context;
      S.save();
      const M = this.getObject(t, d, c);
      vm(S, M), S.globalCompositeOperation = 'source-in', S.fillStyle = r ? s.getPattern(S, this, fs(i), Me.FILL, t) : s, S.fillRect(0, 0, u, g), S.restore(), i.save(), i.transform(...b), i.scale(1, -1), Vd(i, E.canvas, 0, 0, u, g, 0, -1, 1, 1), (o = this.dependencyTracker) == null || o.recordBBox(t, i, 0, u, 0, g), i.restore();
    }
    this.compose(), (l = this.dependencyTracker) == null || l.recordOperation(t);
  }

  paintImageXObject(t, e) {
    if (!this.contentVisible) return;
    const i = this.getObject(t, e);
    if (!i) {
      pt("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(t, i);
  }

  paintImageXObjectRepeat(t, e, i, s, r) {
    if (!this.contentVisible) return;
    const a = this.getObject(t, e);
    if (!a) {
      pt("Dependent image isn't ready yet");
      return;
    }
    const o = a.width; const l = a.height; const
      c = [];
    for (let d = 0, u = r.length; d < u; d += 2) {
      c.push({
        transform: [i, 0, 0, s, r[d], r[d + 1]],
        x: 0,
        y: 0,
        w: o,
        h: l,
      });
    }
    this.paintInlineImageXObjectGroup(t, a, c);
  }

  applyTransferMapsToCanvas(t) {
    return this.current.transferMaps !== 'none' && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = 'none'), t.canvas;
  }

  applyTransferMapsToBitmap(t) {
    if (this.current.transferMaps === 'none') return t.bitmap;
    const {
      bitmap: e,
      width: i,
      height: s,
    } = t; const r = this.cachedCanvases.getCanvas('inlineImage', i, s); const
      a = r.context;
    return a.filter = this.current.transferMaps, a.drawImage(e, 0, 0), a.filter = 'none', r.canvas;
  }

  paintInlineImageXObject(t, e) {
    let c;
    if (!this.contentVisible) return;
    const i = e.width; const s = e.height; const
      r = this.ctx;
    this.save(t);
    const {
      filter: a,
    } = r;
    a !== 'none' && a !== '' && (r.filter = 'none'), r.scale(1 / i, -1 / s);
    let o;
    if (e.bitmap) o = this.applyTransferMapsToBitmap(e);
    else if (typeof HTMLElement === 'function' && e instanceof HTMLElement || !e.data) o = e;
    else {
      const u = this.cachedCanvases.getCanvas('inlineImage', i, s).context;
      bm(u, e), o = this.applyTransferMapsToCanvas(u);
    }
    const l = this._scaleImage(o, fs(r));
    r.imageSmoothingEnabled = wm(Yt(r), e.interpolate), (c = this.dependencyTracker) == null || c.resetBBox(t).recordBBox(t, r, 0, i, -s, 0).recordDependencies(t, Li.imageXObject).recordOperation(t), Vd(r, l.img, 0, 0, l.paintWidth, l.paintHeight, 0, -s, i, s), this.compose(), this.restore(t);
  }

  paintInlineImageXObjectGroup(t, e, i) {
    let a; let o; let
      l;
    if (!this.contentVisible) return;
    const s = this.ctx;
    let r;
    if (e.bitmap) r = e.bitmap;
    else {
      const c = e.width; const d = e.height; const
        g = this.cachedCanvases.getCanvas('inlineImage', c, d).context;
      bm(g, e), r = this.applyTransferMapsToCanvas(g);
    }
    (a = this.dependencyTracker) == null || a.resetBBox(t);
    for (const c of i) s.save(), s.transform(...c.transform), s.scale(1, -1), Vd(s, r, c.x, c.y, c.w, c.h, 0, -1, 1, 1), (o = this.dependencyTracker) == null || o.recordBBox(t, s, 0, 1, -1, 0), s.restore();
    (l = this.dependencyTracker) == null || l.recordOperation(t), this.compose();
  }

  paintSolidColorImageMask(t) {
    let e;
    this.contentVisible && ((e = this.dependencyTracker) == null || e.resetBBox(t).recordBBox(t, this.ctx, 0, 1, 0, 1).recordDependencies(t, Li.fill).recordOperation(t), this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }

  markPoint(t, e) {
  }

  markPointProps(t, e, i) {
  }

  beginMarkedContent(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.beginMarkedContent(t), this.markedContentStack.push({
      visible: !0,
    });
  }

  beginMarkedContentProps(t, e, i) {
    let s;
    (s = this.dependencyTracker) == null || s.beginMarkedContent(t), e === 'OC' ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(i),
    }) : this.markedContentStack.push({
      visible: !0,
    }), this.contentVisible = this.isContentVisible();
  }

  endMarkedContent(t) {
    let e;
    (e = this.dependencyTracker) == null || e.endMarkedContent(t), this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }

  beginCompat(t) {
  }

  endCompat(t) {
  }

  consumePath(t, e, i) {
    let a; let
      o;
    const s = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(i);
    const r = this.ctx;
    this.pendingClip ? (s || (this.pendingClip === Sm ? r.clip(e, 'evenodd') : r.clip(e)), this.pendingClip = null, (a = this.dependencyTracker) == null || a.bboxToClipBoxDropOperation(t).recordFutureForcedDependency('clipPath', t)) : (o = this.dependencyTracker) == null || o.recordOperation(t), this.current.startNewPathAndClipBox(this.current.clipBox);
  }

  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = Yt(this.ctx);
      if (t[1] === 0 && t[2] === 0) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      else {
        const e = Math.abs(t[0] * t[3] - t[2] * t[1]); const i = Math.hypot(t[0], t[2]); const
          s = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(i, s) / e;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }

  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth: t,
      } = this.current; const
        {
          a: e,
          b: i,
          c: s,
          d: r,
        } = this.ctx.getTransform();
      let a; let
        o;
      if (i === 0 && s === 0) {
        const l = Math.abs(e); const
          c = Math.abs(r);
        if (l === c) {
          if (t === 0) a = o = 1 / l;
          else {
            const d = l * t;
            a = o = d < 1 ? 1 / d : 1;
          }
        } else if (t === 0) a = 1 / l, o = 1 / c;
        else {
          const d = l * t; const
            u = c * t;
          a = d < 1 ? 1 / d : 1, o = u < 1 ? 1 / u : 1;
        }
      } else {
        const l = Math.abs(e * r - i * s); const c = Math.hypot(e, i); const
          d = Math.hypot(s, r);
        if (t === 0) a = d / l, o = c / l;
        else {
          const u = t * l;
          a = d > u ? d / u : 1, o = c > u ? c / u : 1;
        }
      }
      this._cachedScaleForStroking[0] = a, this._cachedScaleForStroking[1] = o;
    }
    return this._cachedScaleForStroking;
  }

  rescaleAndStroke(t, e) {
    const {
      ctx: i,
      current: {
        lineWidth: s,
      },
    } = this; const
      [r, a] = this.getScaleForStroking();
    if (r === a) {
      i.lineWidth = (s || 1) * r, i.stroke(t);
      return;
    }
    const o = i.getLineDash();
    e && i.save(), i.scale(r, a), If.a = 1 / r, If.d = 1 / a;
    const l = new Path2D();
    if (l.addPath(t, If), o.length > 0) {
      const c = Math.max(r, a);
      i.setLineDash(o.map((d) => d / c)), i.lineDashOffset /= c;
    }
    i.lineWidth = s || 1, i.stroke(l), e && i.restore();
  }

  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--) if (!this.markedContentStack[t].visible) return !1;
    return !0;
  }
};
ds = new WeakSet(), bp = function () {
  for (; this.stateStack.length || this.inSMaskMode;) this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, vp = function () {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== 'none') {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
}, wp = function (t, e, i) {
  const s = new Path2D();
  return s.addPath(t, new DOMMatrix(i).invertSelf().multiplySelf(e)), s;
};
const Po = Fg;
for (const h in nh) Po.prototype[h] !== void 0 && (Po.prototype[nh[h]] = Po.prototype[h]);
let nl; let rl; let xc; let al; let
  nu;
const xo = class xo {
  constructor(t) {
    v(this, al);
    v(this, nl);
    v(this, rl);
    v(this, xc);
    m(this, nl, t), m(this, rl, new DataView(n(this, nl))), m(this, xc, new TextDecoder());
  }

  static write(t) {
    const e = new TextEncoder(); const
      i = {};
    let s = 0;
    for (const c of xo.strings) {
      const d = e.encode(t[c]);
      i[c] = d, s += 4 + d.length;
    }
    const r = new ArrayBuffer(s); const a = new Uint8Array(r); const
      o = new DataView(r);
    let l = 0;
    for (const c of xo.strings) {
      const d = i[c]; const
        u = d.length;
      o.setUint32(l, u), a.set(d, l + 4), l += 4 + u;
    }
    return _t(l === r.byteLength, 'CssFontInfo.write: Buffer overflow'), r;
  }

  get fontFamily() {
    return A(this, al, nu).call(this, 0);
  }

  get fontWeight() {
    return A(this, al, nu).call(this, 1);
  }

  get italicAngle() {
    return A(this, al, nu).call(this, 2);
  }
};
nl = new WeakMap(), rl = new WeakMap(), xc = new WeakMap(), al = new WeakSet(), nu = function (t) {
  _t(t < xo.strings.length, 'Invalid string index');
  let e = 0;
  for (let s = 0; s < t; s++) e += n(this, rl).getUint32(e) + 4;
  const i = n(this, rl).getUint32(e);
  return n(this, xc).decode(new Uint8Array(n(this, nl), e + 4, i));
}, V(xo, 'strings', ['fontFamily', 'fontWeight', 'italicAngle']);
const Ou = xo;
let rr; let Ts; let wa; let Sa; let
  Th;
const Eo = class Eo {
  constructor(t) {
    v(this, Sa);
    v(this, rr);
    v(this, Ts);
    v(this, wa);
    m(this, rr, t), m(this, Ts, new DataView(n(this, rr))), m(this, wa, new TextDecoder());
  }

  static write(t) {
    const e = new TextEncoder(); const
      i = {};
    let s = 0;
    for (const g of Eo.strings) {
      const b = e.encode(t[g]);
      i[g] = b, s += 4 + b.length;
    }
    s += 4;
    let r; let a; let
      o = 1 + s;
    t.style && (r = e.encode(t.style.style), a = e.encode(t.style.weight), o += 4 + r.length + 4 + a.length);
    const l = new ArrayBuffer(o); const c = new Uint8Array(l); const
      d = new DataView(l);
    let u = 0;
    d.setUint8(u++, t.guessFallback ? 1 : 0), d.setUint32(u, 0), u += 4, s = 0;
    for (const g of Eo.strings) {
      const b = i[g]; const
        E = b.length;
      s += 4 + E, d.setUint32(u, E), c.set(b, u + 4), u += 4 + E;
    }
    return d.setUint32(u - s - 4, s), t.style && (d.setUint32(u, r.length), c.set(r, u + 4), u += 4 + r.length, d.setUint32(u, a.length), c.set(a, u + 4), u += 4 + a.length), _t(u <= l.byteLength, 'SubstitionInfo.write: Buffer overflow'), l.transferToFixedLength(u);
  }

  get guessFallback() {
    return n(this, Ts).getUint8(0) !== 0;
  }

  get css() {
    return A(this, Sa, Th).call(this, 0);
  }

  get loadedName() {
    return A(this, Sa, Th).call(this, 1);
  }

  get baseFontName() {
    return A(this, Sa, Th).call(this, 2);
  }

  get src() {
    return A(this, Sa, Th).call(this, 3);
  }

  get style() {
    let t = 1;
    t += 4 + n(this, Ts).getUint32(t);
    const e = n(this, Ts).getUint32(t); const
      i = n(this, wa).decode(new Uint8Array(n(this, rr), t + 4, e));
    t += 4 + e;
    const s = n(this, Ts).getUint32(t); const
      r = n(this, wa).decode(new Uint8Array(n(this, rr), t + 4, s));
    return {
      style: i,
      weight: r,
    };
  }
};
rr = new WeakMap(), Ts = new WeakMap(), wa = new WeakMap(), Sa = new WeakSet(), Th = function (t) {
  _t(t < Eo.strings.length, 'Invalid string index');
  let e = 5;
  for (let s = 0; s < t; s++) e += n(this, Ts).getUint32(e) + 4;
  const i = n(this, Ts).getUint32(e);
  return n(this, wa).decode(new Uint8Array(n(this, rr), e + 4, i));
}, V(Eo, 'strings', ['css', 'loadedName', 'baseFontName', 'src']);
const Iu = Eo;
let ol; let ll; let hl; let cl; let di; let Ps; let Ec; let Dt; let ie; let qi; let ru; let
  Ph;
const mt = class mt {
  constructor({
    data: t,
    extra: e,
  }) {
    v(this, ie);
    v(this, Ps);
    v(this, Ec);
    v(this, Dt);
    m(this, Ps, t), m(this, Ec, new TextDecoder()), m(this, Dt, new DataView(n(this, Ps))), e && Object.assign(this, e);
  }

  get black() {
    return A(this, ie, qi).call(this, 0);
  }

  get bold() {
    return A(this, ie, qi).call(this, 1);
  }

  get disableFontFace() {
    return A(this, ie, qi).call(this, 2);
  }

  get fontExtraProperties() {
    return A(this, ie, qi).call(this, 3);
  }

  get isInvalidPDFjsFont() {
    return A(this, ie, qi).call(this, 4);
  }

  get isType3Font() {
    return A(this, ie, qi).call(this, 5);
  }

  get italic() {
    return A(this, ie, qi).call(this, 6);
  }

  get missingFile() {
    return A(this, ie, qi).call(this, 7);
  }

  get remeasure() {
    return A(this, ie, qi).call(this, 8);
  }

  get vertical() {
    return A(this, ie, qi).call(this, 9);
  }

  get ascent() {
    return A(this, ie, ru).call(this, 0);
  }

  get defaultWidth() {
    return A(this, ie, ru).call(this, 1);
  }

  get descent() {
    return A(this, ie, ru).call(this, 2);
  }

  get bbox() {
    let t = n(mt, ll);
    if (n(this, Dt).getUint8(t) === 0) return;
    t += 1;
    const i = [];
    for (let s = 0; s < 4; s++) i.push(n(this, Dt).getInt16(t, !0)), t += 2;
    return i;
  }

  get fontMatrix() {
    let t = n(mt, hl);
    if (n(this, Dt).getUint8(t) === 0) return;
    t += 1;
    const i = [];
    for (let s = 0; s < 6; s++) i.push(n(this, Dt).getFloat64(t, !0)), t += 8;
    return i;
  }

  get defaultVMetrics() {
    let t = n(mt, cl);
    if (n(this, Dt).getUint8(t) === 0) return;
    t += 1;
    const i = [];
    for (let s = 0; s < 3; s++) i.push(n(this, Dt).getInt16(t, !0)), t += 2;
    return i;
  }

  get fallbackName() {
    return A(this, ie, Ph).call(this, 0);
  }

  get loadedName() {
    return A(this, ie, Ph).call(this, 1);
  }

  get mimetype() {
    return A(this, ie, Ph).call(this, 2);
  }

  get name() {
    return A(this, ie, Ph).call(this, 3);
  }

  get data() {
    let t = n(mt, di);
    const e = n(this, Dt).getUint32(t);
    t += 4 + e;
    const i = n(this, Dt).getUint32(t);
    t += 4 + i;
    const s = n(this, Dt).getUint32(t);
    t += 4 + s;
    const r = n(this, Dt).getUint32(t);
    if (r !== 0) return new Uint8Array(n(this, Ps), t + 4, r);
  }

  clearData() {
    let t = n(mt, di);
    const e = n(this, Dt).getUint32(t);
    t += 4 + e;
    const i = n(this, Dt).getUint32(t);
    t += 4 + i;
    const s = n(this, Dt).getUint32(t);
    t += 4 + s;
    const r = n(this, Dt).getUint32(t);
    new Uint8Array(n(this, Ps), t + 4, r).fill(0), n(this, Dt).setUint32(t, 0);
  }

  get cssFontInfo() {
    let t = n(mt, di);
    const e = n(this, Dt).getUint32(t);
    t += 4 + e;
    const i = n(this, Dt).getUint32(t);
    t += 4 + i;
    const s = n(this, Dt).getUint32(t);
    if (s === 0) return null;
    const r = new Uint8Array(s);
    return r.set(new Uint8Array(n(this, Ps), t + 4, s)), new Ou(r.buffer);
  }

  get systemFontInfo() {
    let t = n(mt, di);
    const e = n(this, Dt).getUint32(t);
    t += 4 + e;
    const i = n(this, Dt).getUint32(t);
    if (i === 0) return null;
    const s = new Uint8Array(i);
    return s.set(new Uint8Array(n(this, Ps), t + 4, i)), new Iu(s.buffer);
  }

  static write(t) {
    const e = t.systemFontInfo ? Iu.write(t.systemFontInfo) : null; const i = t.cssFontInfo ? Ou.write(t.cssFontInfo) : null; const s = new TextEncoder(); const
      r = {};
    let a = 0;
    for (const S of mt.strings) r[S] = s.encode(t[S]), a += 4 + r[S].length;
    const o = n(mt, di) + 4 + a + 4 + (e ? e.byteLength : 0) + 4 + (i ? i.byteLength : 0) + 4 + (t.data ? t.data.length : 0); const l = new ArrayBuffer(o); const c = new Uint8Array(l); const
      d = new DataView(l);
    let u = 0;
    const g = mt.bools.length;
    let b = 0; let
      E = 0;
    for (let S = 0; S < g; S++) {
      const M = t[mt.bools[S]];
      b |= (M === void 0 ? 0 : M ? 2 : 1) << E, E += 2, (E === 8 || S === g - 1) && (d.setUint8(u++, b), b = 0, E = 0);
    }
    _t(u === n(mt, ol), 'FontInfo.write: Boolean properties offset mismatch');
    for (const S of mt.numbers) d.setFloat64(u, t[S]), u += 8;
    if (_t(u === n(mt, ll), 'FontInfo.write: Number properties offset mismatch'), t.bbox) {
      d.setUint8(u++, 4);
      for (const S of t.bbox) d.setInt16(u, S, !0), u += 2;
    } else d.setUint8(u++, 0), u += 8;
    if (_t(u === n(mt, hl), 'FontInfo.write: BBox properties offset mismatch'), t.fontMatrix) {
      d.setUint8(u++, 6);
      for (const S of t.fontMatrix) d.setFloat64(u, S, !0), u += 8;
    } else d.setUint8(u++, 0), u += 48;
    if (_t(u === n(mt, cl), 'FontInfo.write: FontMatrix properties offset mismatch'), t.defaultVMetrics) {
      d.setUint8(u++, 1);
      for (const S of t.defaultVMetrics) d.setInt16(u, S, !0), u += 2;
    } else d.setUint8(u++, 0), u += 6;
    _t(u === n(mt, di), 'FontInfo.write: DefaultVMetrics properties offset mismatch'), d.setUint32(n(mt, di), 0), u += 4;
    for (const S of mt.strings) {
      const M = r[S]; const
        T = M.length;
      d.setUint32(u, T), c.set(M, u + 4), u += 4 + T;
    }
    if (d.setUint32(n(mt, di), u - n(mt, di) - 4), !e) d.setUint32(u, 0), u += 4;
    else {
      const S = e.byteLength;
      d.setUint32(u, S), _t(u + 4 + S <= l.byteLength, 'FontInfo.write: Buffer overflow at systemFontInfo'), c.set(new Uint8Array(e), u + 4), u += 4 + S;
    }
    if (!i) d.setUint32(u, 0), u += 4;
    else {
      const S = i.byteLength;
      d.setUint32(u, S), _t(u + 4 + S <= l.byteLength, 'FontInfo.write: Buffer overflow at cssFontInfo'), c.set(new Uint8Array(i), u + 4), u += 4 + S;
    }
    return t.data === void 0 ? (d.setUint32(u, 0), u += 4) : (d.setUint32(u, t.data.length), c.set(t.data, u + 4), u += 4 + t.data.length), _t(u <= l.byteLength, 'FontInfo.write: Buffer overflow'), l.transferToFixedLength(u);
  }
};
ol = new WeakMap(), ll = new WeakMap(), hl = new WeakMap(), cl = new WeakMap(), di = new WeakMap(), Ps = new WeakMap(), Ec = new WeakMap(), Dt = new WeakMap(), ie = new WeakSet(), qi = function (t) {
  _t(t < mt.bools.length, 'Invalid boolean index');
  const e = Math.floor(t / 4); const i = t * 2 % 8; const
    s = n(this, Dt).getUint8(e) >> i & 3;
  return s === 0 ? void 0 : s === 2;
}, ru = function (t) {
  return _t(t < mt.numbers.length, 'Invalid number index'), n(this, Dt).getFloat64(n(mt, ol) + t * 8);
}, Ph = function (t) {
  _t(t < mt.strings.length, 'Invalid string index');
  let e = n(mt, di) + 4;
  for (let r = 0; r < t; r++) e += n(this, Dt).getUint32(e) + 4;
  const i = n(this, Dt).getUint32(e); const
    s = new Uint8Array(i);
  return s.set(new Uint8Array(n(this, Ps), e + 4, i)), n(this, Ec).decode(s);
}, V(mt, 'bools', ['black', 'bold', 'disableFontFace', 'fontExtraProperties', 'isInvalidPDFjsFont', 'isType3Font', 'italic', 'missingFile', 'remeasure', 'vertical']), V(mt, 'numbers', ['ascent', 'defaultWidth', 'descent']), V(mt, 'strings', ['fallbackName', 'loadedName', 'mimetype', 'name']), v(mt, ol, Math.ceil(mt.bools.length * 2 / 8)), v(mt, ll, n(mt, ol) + mt.numbers.length * 8), v(mt, hl, n(mt, ll) + 1 + 8), v(mt, cl, n(mt, hl) + 1 + 48), v(mt, di, n(mt, cl) + 1 + 6);
const Sp = mt;
let Cc; let
  Tc;
class os {
  static get workerPort() {
    return n(this, Cc);
  }

  static set workerPort(t) {
    if (!(typeof Worker < 'u' && t instanceof Worker) && t !== null) throw new Error('Invalid `workerPort` type.');
    m(this, Cc, t);
  }

  static get workerSrc() {
    return n(this, Tc);
  }

  static set workerSrc(t) {
    if (typeof t !== 'string') throw new Error('Invalid `workerSrc` type.');
    m(this, Tc, t);
  }
}
Cc = new WeakMap(), Tc = new WeakMap(), v(os, Cc, null), v(os, Tc, '');
let dl; let
  Pc;
class o0 {
  constructor({
    parsedData: t,
    rawData: e,
  }) {
    v(this, dl);
    v(this, Pc);
    m(this, dl, t), m(this, Pc, e);
  }

  getRaw() {
    return n(this, Pc);
  }

  get(t) {
    return n(this, dl).get(t) ?? null;
  }

  [Symbol.iterator]() {
    return n(this, dl).entries();
  }
}
dl = new WeakMap(), Pc = new WeakMap();
const vo = Symbol('INTERNAL');
let kc; let Rc; let Mc; let
  ul;
class l0 {
  constructor(t, {
    name: e,
    intent: i,
    usage: s,
    rbGroups: r,
  }) {
    v(this, kc, !1);
    v(this, Rc, !1);
    v(this, Mc, !1);
    v(this, ul, !0);
    m(this, kc, !!(t & Ei.DISPLAY)), m(this, Rc, !!(t & Ei.PRINT)), this.name = e, this.intent = i, this.usage = s, this.rbGroups = r;
  }

  get visible() {
    if (n(this, Mc)) return n(this, ul);
    if (!n(this, ul)) return !1;
    const {
      print: t,
      view: e,
    } = this.usage;
    return n(this, kc) ? (e == null ? void 0 : e.viewState) !== 'OFF' : n(this, Rc) ? (t == null ? void 0 : t.printState) !== 'OFF' : !0;
  }

  _setVisible(t, e, i = !1) {
    t !== vo && zt('Internal method `_setVisible` called.'), m(this, Mc, i), m(this, ul, e);
  }
}
kc = new WeakMap(), Rc = new WeakMap(), Mc = new WeakMap(), ul = new WeakMap();
let ar; let Ot; let fl; let pl; let Lc; let
  Ap;
class h0 {
  constructor(t, e = Ei.DISPLAY) {
    v(this, Lc);
    v(this, ar, null);
    v(this, Ot, /* @__PURE__ */ new Map());
    v(this, fl, null);
    v(this, pl, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, m(this, pl, t.order);
      for (const i of t.groups) n(this, Ot).set(i.id, new l0(e, i));
      if (t.baseState === 'OFF') for (const i of n(this, Ot).values()) i._setVisible(vo, !1);
      for (const i of t.on) n(this, Ot).get(i)._setVisible(vo, !0);
      for (const i of t.off) n(this, Ot).get(i)._setVisible(vo, !1);
      m(this, fl, this.getHash());
    }
  }

  isVisible(t) {
    if (n(this, Ot).size === 0) return !0;
    if (!t) return df('Optional content group not defined.'), !0;
    if (t.type === 'OCG') return n(this, Ot).has(t.id) ? n(this, Ot).get(t.id).visible : (pt(`Optional content group not found: ${t.id}`), !0);
    if (t.type === 'OCMD') {
      if (t.expression) return A(this, Lc, Ap).call(this, t.expression);
      if (!t.policy || t.policy === 'AnyOn') {
        for (const e of t.ids) {
          if (!n(this, Ot).has(e)) return pt(`Optional content group not found: ${e}`), !0;
          if (n(this, Ot).get(e).visible) return !0;
        }
        return !1;
      } if (t.policy === 'AllOn') {
        for (const e of t.ids) {
          if (!n(this, Ot).has(e)) return pt(`Optional content group not found: ${e}`), !0;
          if (!n(this, Ot).get(e).visible) return !1;
        }
        return !0;
      } if (t.policy === 'AnyOff') {
        for (const e of t.ids) {
          if (!n(this, Ot).has(e)) return pt(`Optional content group not found: ${e}`), !0;
          if (!n(this, Ot).get(e).visible) return !0;
        }
        return !1;
      } if (t.policy === 'AllOff') {
        for (const e of t.ids) {
          if (!n(this, Ot).has(e)) return pt(`Optional content group not found: ${e}`), !0;
          if (n(this, Ot).get(e).visible) return !1;
        }
        return !0;
      }
      return pt(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return pt(`Unknown group type ${t.type}.`), !0;
  }

  setVisibility(t, e = !0, i = !0) {
    let r;
    const s = n(this, Ot).get(t);
    if (!s) {
      pt(`Optional content group not found: ${t}`);
      return;
    }
    if (i && e && s.rbGroups.length) for (const a of s.rbGroups) for (const o of a) o !== t && ((r = n(this, Ot).get(o)) == null || r._setVisible(vo, !1, !0));
    s._setVisible(vo, !!e, !0), m(this, ar, null);
  }

  setOCGState({
    state: t,
    preserveRB: e,
  }) {
    let i;
    for (const s of t) {
      switch (s) {
        case 'ON':
        case 'OFF':
        case 'Toggle':
          i = s;
          continue;
      }
      const r = n(this, Ot).get(s);
      if (r) {
        switch (i) {
          case 'ON':
            this.setVisibility(s, !0, e);
            break;
          case 'OFF':
            this.setVisibility(s, !1, e);
            break;
          case 'Toggle':
            this.setVisibility(s, !r.visible, e);
            break;
        }
      }
    }
    m(this, ar, null);
  }

  get hasInitialVisibility() {
    return n(this, fl) === null || this.getHash() === n(this, fl);
  }

  getOrder() {
    return n(this, Ot).size ? n(this, pl) ? n(this, pl).slice() : [...n(this, Ot).keys()] : null;
  }

  getGroup(t) {
    return n(this, Ot).get(t) || null;
  }

  getHash() {
    if (n(this, ar) !== null) return n(this, ar);
    const t = new Iy();
    for (const [e, i] of n(this, Ot)) t.update(`${e}:${i.visible}`);
    return m(this, ar, t.hexdigest());
  }

  [Symbol.iterator]() {
    return n(this, Ot).entries();
  }
}
ar = new WeakMap(), Ot = new WeakMap(), fl = new WeakMap(), pl = new WeakMap(), Lc = new WeakSet(), Ap = function (t) {
  const e = t.length;
  if (e < 2) return !0;
  const i = t[0];
  for (let s = 1; s < e; s++) {
    const r = t[s];
    let a;
    if (Array.isArray(r)) a = A(this, Lc, Ap).call(this, r);
    else if (n(this, Ot).has(r)) a = n(this, Ot).get(r).visible;
    else return pt(`Optional content group not found: ${r}`), !0;
    switch (i) {
      case 'And':
        if (!a) return !1;
        break;
      case 'Or':
        if (a) return !0;
        break;
      case 'Not':
        return !a;
      default:
        return !0;
    }
  }
  return i === 'And';
};
class c0 {
  constructor(t, {
    disableRange: e = !1,
    disableStream: i = !1,
  }) {
    _t(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: s,
      initialData: r,
      progressiveDone: a,
      contentDispositionFilename: o,
    } = t;
    if (this._queuedChunks = [], this._progressiveDone = a, this._contentDispositionFilename = o, (r == null ? void 0 : r.length) > 0) {
      const l = r instanceof Uint8Array && r.byteLength === r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
      this._queuedChunks.push(l);
    }
    this._pdfDataRangeTransport = t, this._isStreamingSupported = !i, this._isRangeSupported = !e, this._contentLength = s, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener((l, c) => {
      this._onReceiveData({
        begin: l,
        chunk: c,
      });
    }), t.addProgressListener((l, c) => {
      this._onProgress({
        loaded: l,
        total: c,
      });
    }), t.addProgressiveReadListener((l) => {
      this._onReceiveData({
        chunk: l,
      });
    }), t.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), t.transportReady();
  }

  _onReceiveData({
    begin: t,
    chunk: e,
  }) {
    const i = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
    if (t === void 0) this._fullRequestReader ? this._fullRequestReader._enqueue(i) : this._queuedChunks.push(i);
    else {
      const s = this._rangeReaders.some((r) => (r._begin !== t ? !1 : (r._enqueue(i), !0)));
      _t(s, '_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.');
    }
  }

  get _progressiveDataLength() {
    let t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }

  _onProgress(t) {
    let e; let i; let s; let
      r;
    t.total === void 0 ? (i = (e = this._rangeReaders[0]) == null ? void 0 : e.onProgress) == null || i.call(e, {
      loaded: t.loaded,
    }) : (r = (s = this._fullRequestReader) == null ? void 0 : s.onProgress) == null || r.call(s, {
      loaded: t.loaded,
      total: t.total,
    });
  }

  _onProgressiveDone() {
    let t;
    (t = this._fullRequestReader) == null || t.progressiveDone(), this._progressiveDone = !0;
  }

  _removeRangeReader(t) {
    const e = this._rangeReaders.indexOf(t);
    e >= 0 && this._rangeReaders.splice(e, 1);
  }

  getFullReader() {
    _t(!this._fullRequestReader, 'PDFDataTransportStream.getFullReader can only be called once.');
    const t = this._queuedChunks;
    return this._queuedChunks = null, new d0(this, t, this._progressiveDone, this._contentDispositionFilename);
  }

  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) return null;
    const i = new u0(this, t, e);
    return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(i), i;
  }

  cancelAllRequests(t) {
    let e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeReaders.slice(0)) i.cancel(t);
    this._pdfDataRangeTransport.abort();
  }
}
class d0 {
  constructor(t, e, i = !1, s = null) {
    this._stream = t, this._done = i || !1, this._filename = ff(s) ? s : null, this._queuedChunks = e || [], this._loaded = 0;
    for (const r of this._queuedChunks) this._loaded += r.byteLength;
    this._requests = [], this._headersReady = Promise.resolve(), t._fullRequestReader = this, this.onProgress = null;
  }

  _enqueue(t) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t,
      done: !1,
    }) : this._queuedChunks.push(t), this._loaded += t.byteLength);
  }

  get headersReady() {
    return this._headersReady;
  }

  get filename() {
    return this._filename;
  }

  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }

  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }

  get contentLength() {
    return this._stream._contentLength;
  }

  async read() {
    if (this._queuedChunks.length > 0) {
      return {
        value: this._queuedChunks.shift(),
        done: !1,
      };
    }
    if (this._done) {
      return {
        value: void 0,
        done: !0,
      };
    }
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }

  cancel(t) {
    this._done = !0;
    for (const e of this._requests) {
      e.resolve({
        value: void 0,
        done: !0,
      });
    }
    this._requests.length = 0;
  }

  progressiveDone() {
    this._done || (this._done = !0);
  }
}
class u0 {
  constructor(t, e, i) {
    this._stream = t, this._begin = e, this._end = i, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
  }

  _enqueue(t) {
    if (!this._done) {
      if (this._requests.length === 0) this._queuedChunk = t;
      else {
        this._requests.shift().resolve({
          value: t,
          done: !1,
        });
        for (const i of this._requests) {
          i.resolve({
            value: void 0,
            done: !0,
          });
        }
        this._requests.length = 0;
      }
      this._done = !0, this._stream._removeRangeReader(this);
    }
  }

  get isStreamingSupported() {
    return !1;
  }

  async read() {
    if (this._queuedChunk) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1,
      };
    }
    if (this._done) {
      return {
        value: void 0,
        done: !0,
      };
    }
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }

  cancel(t) {
    this._done = !0;
    for (const e of this._requests) {
      e.resolve({
        value: void 0,
        done: !0,
      });
    }
    this._requests.length = 0, this._stream._removeRangeReader(this);
  }
}
function f0(h) {
  let t = !0; let
    e = i('filename\\*', 'i').exec(h);
  if (e) {
    e = e[1];
    let d = o(e);
    return d = unescape(d), d = l(d), d = c(d), r(d);
  }
  if (e = a(h), e) {
    const d = c(e);
    return r(d);
  }
  if (e = i('filename', 'i').exec(h), e) {
    e = e[1];
    let d = o(e);
    return d = c(d), r(d);
  }
  function i(d, u) {
    return new RegExp(`(?:^|;)\\s*${d}\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)`, u);
  }
  function s(d, u) {
    if (d) {
      if (!/^[\x00-\xFF]+$/.test(u)) return u;
      try {
        const g = new TextDecoder(d, {
          fatal: !0,
        }); const
          b = kd(u);
        u = g.decode(b), t = !1;
      } catch {
      }
    }
    return u;
  }
  function r(d) {
    return t && /[\x80-\xff]/.test(d) && (d = s('utf-8', d), t && (d = s('iso-8859-1', d))), d;
  }
  function a(d) {
    const u = [];
    let g;
    const b = i('filename\\*((?!0\\d)\\d+)(\\*?)', 'ig');
    for (; (g = b.exec(d)) !== null;) {
      let [, S, M, T] = g;
      if (S = parseInt(S, 10), S in u) {
        if (S === 0) break;
        continue;
      }
      u[S] = [M, T];
    }
    const E = [];
    for (let S = 0; S < u.length && S in u; ++S) {
      let [M, T] = u[S];
      T = o(T), M && (T = unescape(T), S === 0 && (T = l(T))), E.push(T);
    }
    return E.join('');
  }
  function o(d) {
    if (d.startsWith('"')) {
      const u = d.slice(1).split('\\"');
      for (let g = 0; g < u.length; ++g) {
        const b = u[g].indexOf('"');
        b !== -1 && (u[g] = u[g].slice(0, b), u.length = g + 1), u[g] = u[g].replaceAll(/\\(.)/g, '$1');
      }
      d = u.join('"');
    }
    return d;
  }
  function l(d) {
    const u = d.indexOf("'");
    if (u === -1) return d;
    const g = d.slice(0, u); const
      E = d.slice(u + 1).replace(/^[^']*'/, '');
    return s(g, E);
  }
  function c(d) {
    return !d.startsWith('=?') || /[\x00-\x19\x80-\xff]/.test(d) ? d : d.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, (u, g, b, E) => {
      if (b === 'q' || b === 'Q') { return E = E.replaceAll('_', ' '), E = E.replaceAll(/=([0-9a-fA-F]{2})/g, (S, M) => String.fromCharCode(parseInt(M, 16))), s(g, E); }
      try {
        E = atob(E);
      } catch {
      }
      return s(g, E);
    });
  }
  return '';
}
function Xy(h, t) {
  const e = new Headers();
  if (!h || !t || typeof t !== 'object') return e;
  for (const i in t) {
    const s = t[i];
    s !== void 0 && e.append(i, s);
  }
  return e;
}
function pf(h) {
  let t;
  return ((t = URL.parse(h)) == null ? void 0 : t.origin) ?? null;
}
function Yy({
  responseHeaders: h,
  isHttp: t,
  rangeChunkSize: e,
  disableRange: i,
}) {
  const s = {
    allowRangeRequests: !1,
    suggestedLength: void 0,
  };
  const r = parseInt(h.get('Content-Length'), 10);
  return !Number.isInteger(r) || (s.suggestedLength = r, r <= 2 * e) || i || !t || h.get('Accept-Ranges') !== 'bytes' || (h.get('Content-Encoding') || 'identity') !== 'identity' || (s.allowRangeRequests = !0), s;
}
function Ky(h) {
  const t = h.get('Content-Disposition');
  if (t) {
    let e = f0(t);
    if (e.includes('%')) {
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    }
    if (ff(e)) return e;
  }
  return null;
}
function Dd(h, t) {
  return new jh(`Unexpected server response (${h}) while retrieving PDF "${t}".`, h, h === 404 || h === 0 && t.startsWith('file:'));
}
function Jy(h) {
  return h === 200 || h === 206;
}
function Qy(h, t, e) {
  return {
    method: 'GET',
    headers: h,
    signal: e.signal,
    mode: 'cors',
    credentials: t ? 'include' : 'same-origin',
    redirect: 'follow',
  };
}
function Zy(h) {
  return h instanceof Uint8Array ? h.buffer : h instanceof ArrayBuffer ? h : (pt(`getArrayBuffer - unexpected data format: ${h}`), new Uint8Array(h).buffer);
}
class p0 {
  constructor(t) {
    V(this, '_responseOrigin', null);
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = Xy(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }

  get _progressiveDataLength() {
    let t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }

  getFullReader() {
    return _t(!this._fullRequestReader, 'PDFFetchStream.getFullReader can only be called once.'), this._fullRequestReader = new g0(this), this._fullRequestReader;
  }

  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) return null;
    const i = new m0(this, t, e);
    return this._rangeRequestReaders.push(i), i;
  }

  cancelAllRequests(t) {
    let e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeRequestReaders.slice(0)) i.cancel(t);
  }
}
class g0 {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
    const i = new Headers(t.headers); const
      s = e.url;
    fetch(s, Qy(i, this._withCredentials, this._abortController)).then((r) => {
      if (t._responseOrigin = pf(r.url), !Jy(r.status)) throw Dd(r.status, s);
      this._reader = r.body.getReader(), this._headersCapability.resolve();
      const a = r.headers; const
        {
          allowRangeRequests: o,
          suggestedLength: l,
        } = Yy({
          responseHeaders: a,
          isHttp: t.isHttp,
          rangeChunkSize: this._rangeChunkSize,
          disableRange: this._disableRange,
        });
      this._isRangeSupported = o, this._contentLength = l || this._contentLength, this._filename = Ky(a), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Dn('Streaming is disabled.'));
    }).catch(this._headersCapability.reject), this.onProgress = null;
  }

  get headersReady() {
    return this._headersCapability.promise;
  }

  get filename() {
    return this._filename;
  }

  get contentLength() {
    return this._contentLength;
  }

  get isRangeSupported() {
    return this._isRangeSupported;
  }

  get isStreamingSupported() {
    return this._isStreamingSupported;
  }

  async read() {
    let i;
    await this._headersCapability.promise;
    const {
      value: t,
      done: e,
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e,
    } : (this._loaded += t.byteLength, (i = this.onProgress) == null || i.call(this, {
      loaded: this._loaded,
      total: this._contentLength,
    }), {
      value: Zy(t),
      done: !1,
    });
  }

  cancel(t) {
    let e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class m0 {
  constructor(t, e, i) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const s = t.source;
    this._withCredentials = s.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !s.disableStream, this._abortController = new AbortController();
    const r = new Headers(t.headers);
    r.append('Range', `bytes=${e}-${i - 1}`);
    const a = s.url;
    fetch(a, Qy(r, this._withCredentials, this._abortController)).then((o) => {
      const l = pf(o.url);
      if (l !== t._responseOrigin) throw new Error(`Expected range response-origin "${l}" to match "${t._responseOrigin}".`);
      if (!Jy(o.status)) throw Dd(o.status, a);
      this._readCapability.resolve(), this._reader = o.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }

  get isStreamingSupported() {
    return this._isStreamingSupported;
  }

  async read() {
    let i;
    await this._readCapability.promise;
    const {
      value: t,
      done: e,
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e,
    } : (this._loaded += t.byteLength, (i = this.onProgress) == null || i.call(this, {
      loaded: this._loaded,
    }), {
      value: Zy(t),
      done: !1,
    });
  }

  cancel(t) {
    let e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
const Ff = 200; const
  Nf = 206;
function y0(h) {
  const t = h.response;
  return typeof t !== 'string' ? t : kd(t).buffer;
}
class b0 {
  constructor({
    url: t,
    httpHeaders: e,
    withCredentials: i,
  }) {
    V(this, '_responseOrigin', null);
    this.url = t, this.isHttp = /^https?:/i.test(t), this.headers = Xy(this.isHttp, e), this.withCredentials = i || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }

  request(t) {
    const e = new XMLHttpRequest(); const i = this.currXhrId++; const
      s = this.pendingRequests[i] = {
        xhr: e,
      };
    e.open('GET', this.url), e.withCredentials = this.withCredentials;
    for (const [r, a] of this.headers) e.setRequestHeader(r, a);
    return this.isHttp && 'begin' in t && 'end' in t ? (e.setRequestHeader('Range', `bytes=${t.begin}-${t.end - 1}`), s.expectedStatus = Nf) : s.expectedStatus = Ff, e.responseType = 'arraybuffer', _t(t.onError, 'Expected `onError` callback to be provided.'), e.onerror = () => {
      t.onError(e.status);
    }, e.onreadystatechange = this.onStateChange.bind(this, i), e.onprogress = this.onProgress.bind(this, i), s.onHeadersReceived = t.onHeadersReceived, s.onDone = t.onDone, s.onError = t.onError, s.onProgress = t.onProgress, e.send(null), i;
  }

  onProgress(t, e) {
    let s;
    const i = this.pendingRequests[t];
    i && ((s = i.onProgress) == null || s.call(i, e));
  }

  onStateChange(t, e) {
    const i = this.pendingRequests[t];
    if (!i) return;
    const s = i.xhr;
    if (s.readyState >= 2 && i.onHeadersReceived && (i.onHeadersReceived(), delete i.onHeadersReceived), s.readyState !== 4 || !(t in this.pendingRequests)) return;
    if (delete this.pendingRequests[t], s.status === 0 && this.isHttp) {
      i.onError(s.status);
      return;
    }
    const r = s.status || Ff;
    if (!(r === Ff && i.expectedStatus === Nf) && r !== i.expectedStatus) {
      i.onError(s.status);
      return;
    }
    const o = y0(s);
    if (r === Nf) {
      const l = s.getResponseHeader('Content-Range'); const
        c = /bytes (\d+)-(\d+)\/(\d+)/.exec(l);
      c ? i.onDone({
        begin: parseInt(c[1], 10),
        chunk: o,
      }) : (pt('Missing or invalid "Content-Range" header.'), i.onError(0));
    } else {
      o ? i.onDone({
        begin: 0,
        chunk: o,
      }) : i.onError(s.status);
    }
  }

  getRequestXhr(t) {
    return this.pendingRequests[t].xhr;
  }

  isPendingRequest(t) {
    return t in this.pendingRequests;
  }

  abortRequest(t) {
    const e = this.pendingRequests[t].xhr;
    delete this.pendingRequests[t], e.abort();
  }
}
class v0 {
  constructor(t) {
    this._source = t, this._manager = new b0(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }

  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }

  getFullReader() {
    return _t(!this._fullRequestReader, 'PDFNetworkStream.getFullReader can only be called once.'), this._fullRequestReader = new w0(this._manager, this._source), this._fullRequestReader;
  }

  getRangeReader(t, e) {
    const i = new S0(this._manager, t, e);
    return i.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(i), i;
  }

  cancelAllRequests(t) {
    let e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeRequestReaders.slice(0)) i.cancel(t);
  }
}
class w0 {
  constructor(t, e) {
    this._manager = t, this._url = e.url, this._fullRequestId = t.request({
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this),
    }), this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }

  _onHeadersReceived() {
    const t = this._fullRequestId; const
      e = this._manager.getRequestXhr(t);
    this._manager._responseOrigin = pf(e.responseURL);
    const i = e.getAllResponseHeaders(); const s = new Headers(i ? i.trimStart().replace(/[^\S ]+$/, '').split(/[\r\n]+/).map((o) => {
      const [l, ...c] = o.split(': ');
      return [l, c.join(': ')];
    }) : []); const
      {
        allowRangeRequests: r,
        suggestedLength: a,
      } = Yy({
        responseHeaders: s,
        isHttp: this._manager.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange,
      });
    r && (this._isRangeSupported = !0), this._contentLength = a || this._contentLength, this._filename = Ky(s), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
  }

  _onDone(t) {
    if (t && (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t.chunk,
      done: !1,
    }) : this._cachedChunks.push(t.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
      for (const e of this._requests) {
        e.resolve({
          value: void 0,
          done: !0,
        });
      }
      this._requests.length = 0;
    }
  }

  _onError(t) {
    this._storedError = Dd(t, this._url), this._headersCapability.reject(this._storedError);
    for (const e of this._requests) e.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }

  _onProgress(t) {
    let e;
    (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded,
      total: t.lengthComputable ? t.total : this._contentLength,
    });
  }

  get filename() {
    return this._filename;
  }

  get isRangeSupported() {
    return this._isRangeSupported;
  }

  get isStreamingSupported() {
    return this._isStreamingSupported;
  }

  get contentLength() {
    return this._contentLength;
  }

  get headersReady() {
    return this._headersCapability.promise;
  }

  async read() {
    if (await this._headersCapability.promise, this._storedError) throw this._storedError;
    if (this._cachedChunks.length > 0) {
      return {
        value: this._cachedChunks.shift(),
        done: !1,
      };
    }
    if (this._done) {
      return {
        value: void 0,
        done: !0,
      };
    }
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }

  cancel(t) {
    this._done = !0, this._headersCapability.reject(t);
    for (const e of this._requests) {
      e.resolve({
        value: void 0,
        done: !0,
      });
    }
    this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
  }
}
class S0 {
  constructor(t, e, i) {
    this._manager = t, this._url = t.url, this._requestId = t.request({
      begin: e,
      end: i,
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this),
    }), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }

  _onHeadersReceived() {
    let e;
    const t = pf((e = this._manager.getRequestXhr(this._requestId)) == null ? void 0 : e.responseURL);
    t !== this._manager._responseOrigin && (this._storedError = new Error(`Expected range response-origin "${t}" to match "${this._manager._responseOrigin}".`), this._onError(0));
  }

  _close() {
    let t;
    (t = this.onClosed) == null || t.call(this, this);
  }

  _onDone(t) {
    const e = t.chunk;
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: e,
      done: !1,
    }) : this._queuedChunk = e, this._done = !0;
    for (const i of this._requests) {
      i.resolve({
        value: void 0,
        done: !0,
      });
    }
    this._requests.length = 0, this._close();
  }

  _onError(t) {
    this._storedError ?? (this._storedError = Dd(t, this._url));
    for (const e of this._requests) e.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }

  _onProgress(t) {
    let e;
    this.isStreamingSupported || (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded,
    });
  }

  get isStreamingSupported() {
    return !1;
  }

  async read() {
    if (this._storedError) throw this._storedError;
    if (this._queuedChunk !== null) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1,
      };
    }
    if (this._done) {
      return {
        value: void 0,
        done: !0,
      };
    }
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }

  cancel(t) {
    this._done = !0;
    for (const e of this._requests) {
      e.resolve({
        value: void 0,
        done: !0,
      });
    }
    this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
  }
}
const A0 = /^[a-z][a-z0-9\-+.]+:/i;
function _0(h) {
  if (A0.test(h)) return new URL(h);
  const t = process.getBuiltinModule('url');
  return new URL(t.pathToFileURL(h));
}
class x0 {
  constructor(t) {
    this.source = t, this.url = _0(t.url), _t(this.url.protocol === 'file:', 'PDFNodeStream only supports file:// URLs.'), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }

  get _progressiveDataLength() {
    let t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }

  getFullReader() {
    return _t(!this._fullRequestReader, 'PDFNodeStream.getFullReader can only be called once.'), this._fullRequestReader = new E0(this), this._fullRequestReader;
  }

  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) return null;
    const i = new C0(this, t, e);
    return this._rangeRequestReaders.push(i), i;
  }

  cancelAllRequests(t) {
    let e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeRequestReaders.slice(0)) i.cancel(t);
  }
}
class E0 {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
    const i = process.getBuiltinModule('fs');
    i.promises.lstat(this._url).then((s) => {
      this._contentLength = s.size, this._setReadableStream(i.createReadStream(this._url)), this._headersCapability.resolve();
    }, (s) => {
      s.code === 'ENOENT' && (s = Dd(0, this._url.href)), this._storedError = s, this._headersCapability.reject(s);
    });
  }

  get headersReady() {
    return this._headersCapability.promise;
  }

  get filename() {
    return this._filename;
  }

  get contentLength() {
    return this._contentLength;
  }

  get isRangeSupported() {
    return this._isRangeSupported;
  }

  get isStreamingSupported() {
    return this._isStreamingSupported;
  }

  async read() {
    let i;
    if (await this._readCapability.promise, this._done) {
      return {
        value: void 0,
        done: !0,
      };
    }
    if (this._storedError) throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (i = this.onProgress) == null || i.call(this, {
      loaded: this._loaded,
      total: this._contentLength,
    }), {
      value: new Uint8Array(t).buffer,
      done: !1,
    });
  }

  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }

  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }

  _setReadableStream(t) {
    this._readableStream = t, t.on('readable', () => {
      this._readCapability.resolve();
    }), t.on('end', () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on('error', (e) => {
      this._error(e);
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new Dn('streaming is disabled')), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class C0 {
  constructor(t, e, i) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const s = t.source;
    this._isStreamingSupported = !s.disableStream;
    const r = process.getBuiltinModule('fs');
    this._setReadableStream(r.createReadStream(this._url, {
      start: e,
      end: i - 1,
    }));
  }

  get isStreamingSupported() {
    return this._isStreamingSupported;
  }

  async read() {
    let i;
    if (await this._readCapability.promise, this._done) {
      return {
        value: void 0,
        done: !0,
      };
    }
    if (this._storedError) throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (i = this.onProgress) == null || i.call(this, {
      loaded: this._loaded,
    }), {
      value: new Uint8Array(t).buffer,
      done: !1,
    });
  }

  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }

  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }

  _setReadableStream(t) {
    this._readableStream = t, t.on('readable', () => {
      this._readCapability.resolve();
    }), t.on('end', () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on('error', (e) => {
      this._error(e);
    }), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
const fh = Symbol('INITIAL_DATA');
let ui; let Dc; let
  _p;
class tb {
  constructor() {
    v(this, Dc);
    v(this, ui, /* @__PURE__ */ Object.create(null));
  }

  get(t, e = null) {
    if (e) {
      const s = A(this, Dc, _p).call(this, t);
      return s.promise.then(() => e(s.data)), null;
    }
    const i = n(this, ui)[t];
    if (!i || i.data === fh) throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return i.data;
  }

  has(t) {
    const e = n(this, ui)[t];
    return !!e && e.data !== fh;
  }

  delete(t) {
    const e = n(this, ui)[t];
    return !e || e.data === fh ? !1 : (delete n(this, ui)[t], !0);
  }

  resolve(t, e = null) {
    const i = A(this, Dc, _p).call(this, t);
    i.data = e, i.resolve();
  }

  clear() {
    let t;
    for (const e in n(this, ui)) {
      const {
        data: i,
      } = n(this, ui)[e];
      (t = i == null ? void 0 : i.bitmap) == null || t.close();
    }
    m(this, ui, /* @__PURE__ */ Object.create(null));
  }

  * [Symbol.iterator]() {
    for (const t in n(this, ui)) {
      const {
        data: e,
      } = n(this, ui)[t];
      e !== fh && (yield [t, e]);
    }
  }
}
ui = new WeakMap(), Dc = new WeakSet(), _p = function (t) {
  let e;
  return (e = n(this, ui))[t] || (e[t] = {
    ...Promise.withResolvers(),
    data: fh,
  });
};
const T0 = 1e5; const
  Am = 30;
let Im; let or; let si; let Oc; let Ic; let Aa; let pn; let Fc; let Nc; let _a; let gl; let ml; let lr; let yl; let Bc; let bl; let xa; let Hc; let jc; let ee; let vl; let Ea; let zc; let hr; let wl; let Fn; let eb; let ib; let xp; let ki; let au; let Ep; let sb; let
  nb;
const Wh = (ee = class {
  constructor({
    textContentSource: t,
    container: e,
    viewport: i,
  }) {
    v(this, Fn);
    v(this, or, Promise.withResolvers());
    v(this, si, null);
    v(this, Oc, !1);
    v(this, Ic, !!((Im = globalThis.FontInspector) != null && Im.enabled));
    v(this, Aa, null);
    v(this, pn, null);
    v(this, Fc, 0);
    v(this, Nc, 0);
    v(this, _a, null);
    v(this, gl, null);
    v(this, ml, 0);
    v(this, lr, 0);
    v(this, yl, /* @__PURE__ */ Object.create(null));
    v(this, Bc, []);
    v(this, bl, null);
    v(this, xa, []);
    v(this, Hc, /* @__PURE__ */ new WeakMap());
    v(this, jc, null);
    let l;
    if (t instanceof ReadableStream) m(this, bl, t);
    else if (typeof t === 'object') {
      m(this, bl, new ReadableStream({
        start(c) {
          c.enqueue(t), c.close();
        },
      }));
    } else throw new Error('No "textContentSource" parameter specified.');
    m(this, si, m(this, gl, e)), m(this, lr, i.scale * cs.pixelRatio), m(this, ml, i.rotation), m(this, pn, {
      div: null,
      properties: null,
      ctx: null,
    });
    const {
      pageWidth: s,
      pageHeight: r,
      pageX: a,
      pageY: o,
    } = i.rawDims;
    m(this, jc, [1, 0, 0, -1, -a, o + r]), m(this, Nc, s), m(this, Fc, r), A(l = ee, ki, sb).call(l), Or(e, i), n(this, or).promise.finally(() => {
      n(ee, wl).delete(this), m(this, pn, null), m(this, yl, null);
    }).catch(() => {
    });
  }

  static get fontFamilyMap() {
    const {
      isWindows: t,
      isFirefox: e,
    } = _e.platform;
    return yt(this, 'fontFamilyMap', /* @__PURE__ */ new Map([['sans-serif', `${t && e ? 'Calibri, ' : ''}sans-serif`], ['monospace', `${t && e ? 'Lucida Console, ' : ''}monospace`]]));
  }

  render() {
    const t = () => {
      n(this, _a).read().then(({
        value: e,
        done: i,
      }) => {
        if (i) {
          n(this, or).resolve();
          return;
        }
        n(this, Aa) ?? m(this, Aa, e.lang), Object.assign(n(this, yl), e.styles), A(this, Fn, eb).call(this, e.items), t();
      }, n(this, or).reject);
    };
    return m(this, _a, n(this, bl).getReader()), n(ee, wl).add(this), t(), n(this, or).promise;
  }

  update({
    viewport: t,
    onBefore: e = null,
  }) {
    let r;
    const i = t.scale * cs.pixelRatio; const
      s = t.rotation;
    if (s !== n(this, ml) && (e == null || e(), m(this, ml, s), Or(n(this, gl), {
      rotation: s,
    })), i !== n(this, lr)) {
      e == null || e(), m(this, lr, i);
      const a = {
        div: null,
        properties: null,
        ctx: A(r = ee, ki, au).call(r, n(this, Aa)),
      };
      for (const o of n(this, xa)) a.properties = n(this, Hc).get(o), a.div = o, A(this, Fn, xp).call(this, a);
    }
  }

  cancel() {
    let e;
    const t = new Dn('TextLayer task cancelled.');
    (e = n(this, _a)) == null || e.cancel(t).catch(() => {
    }), m(this, _a, null), n(this, or).reject(t);
  }

  get textDivs() {
    return n(this, xa);
  }

  get textContentItemsStr() {
    return n(this, Bc);
  }

  static cleanup() {
    if (!(n(this, wl).size > 0)) {
      n(this, vl).clear();
      for (const {
        canvas: t,
      } of n(this, Ea).values()) t.remove();
      n(this, Ea).clear();
    }
  }
}, or = new WeakMap(), si = new WeakMap(), Oc = new WeakMap(), Ic = new WeakMap(), Aa = new WeakMap(), pn = new WeakMap(), Fc = new WeakMap(), Nc = new WeakMap(), _a = new WeakMap(), gl = new WeakMap(), ml = new WeakMap(), lr = new WeakMap(), yl = new WeakMap(), Bc = new WeakMap(), bl = new WeakMap(), xa = new WeakMap(), Hc = new WeakMap(), jc = new WeakMap(), vl = new WeakMap(), Ea = new WeakMap(), zc = new WeakMap(), hr = new WeakMap(), wl = new WeakMap(), Fn = new WeakSet(), eb = function (t) {
  let s; let
    r;
  if (n(this, Oc)) return;
  (r = n(this, pn)).ctx ?? (r.ctx = A(s = ee, ki, au).call(s, n(this, Aa)));
  const e = n(this, xa); const
    i = n(this, Bc);
  for (const a of t) {
    if (e.length > T0) {
      pt('Ignoring additional textDivs for performance reasons.'), m(this, Oc, !0);
      return;
    }
    if (a.str === void 0) {
      if (a.type === 'beginMarkedContentProps' || a.type === 'beginMarkedContent') {
        const o = n(this, si);
        m(this, si, document.createElement('span')), n(this, si).classList.add('markedContent'), a.id && n(this, si).setAttribute('id', `${a.id}`), o.append(n(this, si));
      } else a.type === 'endMarkedContent' && m(this, si, n(this, si).parentNode);
      continue;
    }
    i.push(a.str), A(this, Fn, ib).call(this, a);
  }
}, ib = function (t) {
  let S;
  const e = document.createElement('span'); const
    i = {
      angle: 0,
      canvasWidth: 0,
      hasText: t.str !== '',
      hasEOL: t.hasEOL,
      fontSize: 0,
    };
  n(this, xa).push(e);
  const s = tt.transform(n(this, jc), t.transform);
  let r = Math.atan2(s[1], s[0]);
  const a = n(this, yl)[t.fontName];
  a.vertical && (r += Math.PI / 2);
  let o = n(this, Ic) && a.fontSubstitution || a.fontFamily;
  o = ee.fontFamilyMap.get(o) || o;
  const l = Math.hypot(s[2], s[3]); const
    c = l * A(S = ee, ki, nb).call(S, o, a, n(this, Aa));
  let d; let
    u;
  r === 0 ? (d = s[4], u = s[5] - c) : (d = s[4] + c * Math.sin(r), u = s[5] - c * Math.cos(r));
  const g = 'calc(var(--total-scale-factor) *';
  const b = e.style;
  n(this, si) === n(this, gl) ? (b.left = `${(100 * d / n(this, Nc)).toFixed(2)}%`, b.top = `${(100 * u / n(this, Fc)).toFixed(2)}%`) : (b.left = `${g}${d.toFixed(2)}px)`, b.top = `${g}${u.toFixed(2)}px)`), b.fontSize = `${g}${(n(ee, hr) * l).toFixed(2)}px)`, b.fontFamily = o, i.fontSize = l, e.setAttribute('role', 'presentation'), e.textContent = t.str, e.dir = t.dir, n(this, Ic) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), r !== 0 && (i.angle = r * (180 / Math.PI));
  let E = !1;
  if (t.str.length > 1) E = !0;
  else if (t.str !== ' ' && t.transform[0] !== t.transform[3]) {
    const M = Math.abs(t.transform[0]); const
      T = Math.abs(t.transform[3]);
    M !== T && Math.max(M, T) / Math.min(M, T) > 1.5 && (E = !0);
  }
  if (E && (i.canvasWidth = a.vertical ? t.height : t.width), n(this, Hc).set(e, i), n(this, pn).div = e, n(this, pn).properties = i, A(this, Fn, xp).call(this, n(this, pn)), i.hasText && n(this, si).append(e), i.hasEOL) {
    const M = document.createElement('br');
    M.setAttribute('role', 'presentation'), n(this, si).append(M);
  }
}, xp = function (t) {
  let o;
  const {
    div: e,
    properties: i,
    ctx: s,
  } = t; const
    {
      style: r,
    } = e;
  let a = '';
  if (n(ee, hr) > 1 && (a = `scale(${1 / n(ee, hr)})`), i.canvasWidth !== 0 && i.hasText) {
    const {
      fontFamily: l,
    } = r; const
      {
        canvasWidth: c,
        fontSize: d,
      } = i;
    A(o = ee, ki, Ep).call(o, s, d * n(this, lr), l);
    const {
      width: u,
    } = s.measureText(e.textContent);
    u > 0 && (a = `scaleX(${c * n(this, lr) / u}) ${a}`);
  }
  i.angle !== 0 && (a = `rotate(${i.angle}deg) ${a}`), a.length > 0 && (r.transform = a);
}, ki = new WeakSet(), au = function (t = null) {
  let e = n(this, Ea).get(t || (t = ''));
  if (!e) {
    const i = document.createElement('canvas');
    i.className = 'hiddenCanvasElement', i.lang = t, document.body.append(i), e = i.getContext('2d', {
      alpha: !1,
      willReadFrequently: !0,
    }), n(this, Ea).set(t, e), n(this, zc).set(e, {
      size: 0,
      family: '',
    });
  }
  return e;
}, Ep = function (t, e, i) {
  const s = n(this, zc).get(t);
  e === s.size && i === s.family || (t.font = `${e}px ${i}`, s.size = e, s.family = i);
}, sb = function () {
  if (n(this, hr) !== null) return;
  const t = document.createElement('div');
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = '1px', t.style.position = 'absolute', t.textContent = 'X', document.body.append(t), m(this, hr, t.getBoundingClientRect().height), t.remove();
}, nb = function (t, e, i) {
  const s = n(this, vl).get(t);
  if (s) return s;
  const r = A(this, ki, au).call(this, i);
  r.canvas.width = r.canvas.height = Am, A(this, ki, Ep).call(this, r, Am, t);
  const a = r.measureText(''); const o = a.fontBoundingBoxAscent; const
    l = Math.abs(a.fontBoundingBoxDescent);
  r.canvas.width = r.canvas.height = 0;
  let c = 0.8;
  return o ? c = o / (o + l) : (_e.platform.isFirefox && pt('Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering.'), e.ascent ? c = e.ascent : e.descent && (c = 1 + e.descent)), n(this, vl).set(t, c), c;
}, v(ee, ki), v(ee, vl, /* @__PURE__ */ new Map()), v(ee, Ea, /* @__PURE__ */ new Map()), v(ee, zc, /* @__PURE__ */ new WeakMap()), v(ee, hr, null), v(ee, wl, /* @__PURE__ */ new Set()), ee);
const P0 = 100;
function Eg(h = {}) {
  typeof h === 'string' || h instanceof URL ? h = {
    url: h,
  } : (h instanceof ArrayBuffer || ArrayBuffer.isView(h)) && (h = {
    data: h,
  });
  const t = new Cp(); const {
    docId: e,
  } = t; const i = h.url ? Fw(h.url) : null; const s = h.data ? Nw(h.data) : null; const r = h.httpHeaders || null; const a = h.withCredentials === !0; const o = h.password ?? null; const l = h.range instanceof Cg ? h.range : null; const
    c = Number.isInteger(h.rangeChunkSize) && h.rangeChunkSize > 0 ? h.rangeChunkSize : 2 ** 16;
  let d = h.worker instanceof rh ? h.worker : null;
  const u = h.verbosity; const g = typeof h.docBaseUrl === 'string' && !Md(h.docBaseUrl) ? h.docBaseUrl : null; const b = Ud(h.cMapUrl); const E = h.cMapPacked !== !1; const S = h.CMapReaderFactory || (Xe ? Ww : lm); const M = Ud(h.iccUrl); const T = Ud(h.standardFontDataUrl); const L = h.StandardFontDataFactory || (Xe ? Gw : hm); const R = Ud(h.wasmUrl); const p = h.WasmFactory || (Xe ? Vw : cm); const f = h.stopAtErrors !== !0; const y = Number.isInteger(h.maxImageSize) && h.maxImageSize > -1 ? h.maxImageSize : -1; const _ = h.isEvalSupported !== !1; const P = typeof h.isOffscreenCanvasSupported === 'boolean' ? h.isOffscreenCanvasSupported : !Xe; const k = typeof h.isImageDecoderSupported === 'boolean' ? h.isImageDecoderSupported : !Xe && (_e.platform.isFirefox || !globalThis.chrome); const C = Number.isInteger(h.canvasMaxAreaInBytes) ? h.canvasMaxAreaInBytes : -1; const D = typeof h.disableFontFace === 'boolean' ? h.disableFontFace : Xe; const N = h.fontExtraProperties === !0; const I = h.enableXfa === !0; const B = h.ownerDocument || globalThis.document; const j = h.disableRange === !0; const z = h.disableStream === !0; const w = h.disableAutoFetch === !0; const K = h.pdfBug === !0; const F = h.CanvasFactory || (Xe ? $w : jw); const x = h.FilterFactory || (Xe ? Uw : zw); const O = h.enableHWA === !0; const H = h.useWasm !== !1; const $ = l ? l.length : h.length ?? NaN; const U = typeof h.useSystemFonts === 'boolean' ? h.useSystemFonts : !Xe && !D; const q = typeof h.useWorkerFetch === 'boolean' ? h.useWorkerFetch : !!(S === lm && L === hm && p === cm && b && T && R && mh(b, document.baseURI) && mh(T, document.baseURI) && mh(R, document.baseURI)); const
    G = null;
  yw(u);
  const W = {
    canvasFactory: new F({
      ownerDocument: B,
      enableHWA: O,
    }),
    filterFactory: new x({
      docId: e,
      ownerDocument: B,
    }),
    cMapReaderFactory: q ? null : new S({
      baseUrl: b,
      isCompressed: E,
    }),
    standardFontDataFactory: q ? null : new L({
      baseUrl: T,
    }),
    wasmFactory: q ? null : new p({
      baseUrl: R,
    }),
  };
  d || (d = rh.create({
    verbosity: u,
    port: os.workerPort,
  }), t._worker = d);
  const ht = {
    docId: e,
    apiVersion: '5.4.296',
    data: s,
    password: o,
    disableAutoFetch: w,
    rangeChunkSize: c,
    length: $,
    docBaseUrl: g,
    enableXfa: I,
    evaluatorOptions: {
      maxImageSize: y,
      disableFontFace: D,
      ignoreErrors: f,
      isEvalSupported: _,
      isOffscreenCanvasSupported: P,
      isImageDecoderSupported: k,
      canvasMaxAreaInBytes: C,
      fontExtraProperties: N,
      useSystemFonts: U,
      useWasm: H,
      useWorkerFetch: q,
      cMapUrl: b,
      iccUrl: M,
      standardFontDataUrl: T,
      wasmUrl: R,
    },
  }; const
    ct = {
      ownerDocument: B,
      pdfBug: K,
      styleElement: G,
      loadingParams: {
        disableAutoFetch: w,
        enableXfa: I,
      },
    };
  return d.promise.then(() => {
    if (t.destroyed) throw new Error('Loading aborted');
    if (d.destroyed) throw new Error('Worker was destroyed');
    const dt = d.messageHandler.sendWithPromise('GetDocRequest', ht, s ? [s.buffer] : null);
    let ut;
    if (l) {
      ut = new c0(l, {
        disableRange: j,
        disableStream: z,
      });
    } else if (!s) {
      if (!i) throw new Error('getDocument - no `url` parameter provided.');
      const rt = mh(i) ? p0 : Xe ? x0 : v0;
      ut = new rt({
        url: i,
        length: $,
        httpHeaders: r,
        withCredentials: a,
        rangeChunkSize: c,
        disableRange: j,
        disableStream: z,
      });
    }
    return dt.then((rt) => {
      if (t.destroyed) throw new Error('Loading aborted');
      if (d.destroyed) throw new Error('Worker was destroyed');
      const st = new Ah(e, rt, d.port); const
        nt = new M0(st, t, ut, ct, W, O);
      t._transport = nt, st.send('Ready', null);
    });
  }).catch(t._capability.reject), t;
}
let Ju;
const Qu = class Qu {
  constructor() {
    V(this, '_capability', Promise.withResolvers());
    V(this, '_transport', null);
    V(this, '_worker', null);
    V(this, 'docId', `d${de(Qu, Ju)._++}`);
    V(this, 'destroyed', !1);
    V(this, 'onPassword', null);
    V(this, 'onProgress', null);
  }

  get promise() {
    return this._capability.promise;
  }

  async destroy() {
    let t; let e; let i; let
      s;
    this.destroyed = !0;
    try {
      (t = this._worker) != null && t.port && (this._worker._pendingDestroy = !0), await ((e = this._transport) == null ? void 0 : e.destroy());
    } catch (r) {
      throw (i = this._worker) != null && i.port && delete this._worker._pendingDestroy, r;
    }
    this._transport = null, (s = this._worker) == null || s.destroy(), this._worker = null;
  }

  async getData() {
    return this._transport.getData();
  }
};
Ju = new WeakMap(), v(Qu, Ju, 0);
let Cp = Qu;
let Ca; let Uc; let $c; let Wc; let Gc; let
  Fm;
let Cg = (Fm = class {
  constructor(t, e, i = !1, s = null) {
    v(this, Ca, Promise.withResolvers());
    v(this, Uc, []);
    v(this, $c, []);
    v(this, Wc, []);
    v(this, Gc, []);
    this.length = t, this.initialData = e, this.progressiveDone = i, this.contentDispositionFilename = s;
  }

  addRangeListener(t) {
    n(this, Gc).push(t);
  }

  addProgressListener(t) {
    n(this, Wc).push(t);
  }

  addProgressiveReadListener(t) {
    n(this, $c).push(t);
  }

  addProgressiveDoneListener(t) {
    n(this, Uc).push(t);
  }

  onDataRange(t, e) {
    for (const i of n(this, Gc)) i(t, e);
  }

  onDataProgress(t, e) {
    n(this, Ca).promise.then(() => {
      for (const i of n(this, Wc)) i(t, e);
    });
  }

  onDataProgressiveRead(t) {
    n(this, Ca).promise.then(() => {
      for (const e of n(this, $c)) e(t);
    });
  }

  onDataProgressiveDone() {
    n(this, Ca).promise.then(() => {
      for (const t of n(this, Uc)) t();
    });
  }

  transportReady() {
    n(this, Ca).resolve();
  }

  requestDataRange(t, e) {
    zt('Abstract method PDFDataRangeTransport.requestDataRange');
  }

  abort() {
  }
}, Ca = new WeakMap(), Uc = new WeakMap(), $c = new WeakMap(), Wc = new WeakMap(), Gc = new WeakMap(), Fm);
class k0 {
  constructor(t, e) {
    this._pdfInfo = t, this._transport = e;
  }

  get annotationStorage() {
    return this._transport.annotationStorage;
  }

  get canvasFactory() {
    return this._transport.canvasFactory;
  }

  get filterFactory() {
    return this._transport.filterFactory;
  }

  get numPages() {
    return this._pdfInfo.numPages;
  }

  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }

  get isPureXfa() {
    return yt(this, 'isPureXfa', !!this._transport._htmlForXfa);
  }

  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }

  getPage(t) {
    return this._transport.getPage(t);
  }

  getPageIndex(t) {
    return this._transport.getPageIndex(t);
  }

  getDestinations() {
    return this._transport.getDestinations();
  }

  getDestination(t) {
    return this._transport.getDestination(t);
  }

  getPageLabels() {
    return this._transport.getPageLabels();
  }

  getPageLayout() {
    return this._transport.getPageLayout();
  }

  getPageMode() {
    return this._transport.getPageMode();
  }

  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }

  getOpenAction() {
    return this._transport.getOpenAction();
  }

  getAttachments() {
    return this._transport.getAttachments();
  }

  getAnnotationsByType(t, e) {
    return this._transport.getAnnotationsByType(t, e);
  }

  getJSActions() {
    return this._transport.getDocJSActions();
  }

  getOutline() {
    return this._transport.getOutline();
  }

  getOptionalContentConfig({
    intent: t = 'display',
  } = {}) {
    const {
      renderingIntent: e,
    } = this._transport.getRenderingIntent(t);
    return this._transport.getOptionalContentConfig(e);
  }

  getPermissions() {
    return this._transport.getPermissions();
  }

  getMetadata() {
    return this._transport.getMetadata();
  }

  getMarkInfo() {
    return this._transport.getMarkInfo();
  }

  getData() {
    return this._transport.getData();
  }

  saveDocument() {
    return this._transport.saveDocument();
  }

  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }

  cleanup(t = !1) {
    return this._transport.startCleanup(t || this.isPureXfa);
  }

  destroy() {
    return this.loadingTask.destroy();
  }

  cachedPageNumber(t) {
    return this._transport.cachedPageNumber(t);
  }

  get loadingParams() {
    return this._transport.loadingParams;
  }

  get loadingTask() {
    return this._transport.loadingTask;
  }

  getFieldObjects() {
    return this._transport.getFieldObjects();
  }

  hasJSActions() {
    return this._transport.hasJSActions();
  }

  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
let gn; let Ta; let
  kh;
class R0 {
  constructor(t, e, i, s = !1) {
    v(this, Ta);
    v(this, gn, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = i, this._stats = s ? new em() : null, this._pdfBug = s, this.commonObjs = i.commonObjs, this.objs = new tb(), this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1, this.recordedBBoxes = null;
  }

  get pageNumber() {
    return this._pageIndex + 1;
  }

  get rotate() {
    return this._pageInfo.rotate;
  }

  get ref() {
    return this._pageInfo.ref;
  }

  get userUnit() {
    return this._pageInfo.userUnit;
  }

  get view() {
    return this._pageInfo.view;
  }

  getViewport({
    scale: t,
    rotation: e = this.rotate,
    offsetX: i = 0,
    offsetY: s = 0,
    dontFlip: r = !1,
  } = {}) {
    return new Rd({
      viewBox: this.view,
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: i,
      offsetY: s,
      dontFlip: r,
    });
  }

  getAnnotations({
    intent: t = 'display',
  } = {}) {
    const {
      renderingIntent: e,
    } = this._transport.getRenderingIntent(t);
    return this._transport.getAnnotations(this._pageIndex, e);
  }

  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }

  get filterFactory() {
    return this._transport.filterFactory;
  }

  get isPureXfa() {
    return yt(this, 'isPureXfa', !!this._transport._htmlForXfa);
  }

  async getXfa() {
    let t;
    return ((t = this._transport._htmlForXfa) == null ? void 0 : t.children[this._pageIndex]) || null;
  }

  render({
    canvasContext: t,
    canvas: e = t.canvas,
    viewport: i,
    intent: s = 'display',
    annotationMode: r = Hs.ENABLE,
    transform: a = null,
    background: o = null,
    optionalContentConfigPromise: l = null,
    annotationCanvasMap: c = null,
    pageColors: d = null,
    printAnnotationStorage: u = null,
    isEditing: g = !1,
    recordOperations: b = !1,
    operationsFilter: E = null,
  }) {
    let k; let C; let
      D;
    (k = this._stats) == null || k.time('Overall');
    const S = this._transport.getRenderingIntent(s, r, u, g); const
      {
        renderingIntent: M,
        cacheKey: T,
      } = S;
    m(this, gn, !1), l || (l = this._transport.getOptionalContentConfig(M));
    let L = this._intentStates.get(T);
    L || (L = /* @__PURE__ */ Object.create(null), this._intentStates.set(T, L)), L.streamReaderCancelTimeout && (clearTimeout(L.streamReaderCancelTimeout), L.streamReaderCancelTimeout = null);
    const R = !!(M & Ei.PRINT);
    L.displayReadyCapability || (L.displayReadyCapability = Promise.withResolvers(), L.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null,
    }, (C = this._stats) == null || C.time('Page Request'), this._pumpOperatorList(S));
    const p = !!(this._pdfBug && ((D = globalThis.StepperManager) != null && D.enabled)); const f = !this.recordedBBoxes && (b || p); const y = (N) => {
      let I; let
        B;
      if (L.renderTasks.delete(_), f) {
        const j = (I = _.gfx) == null ? void 0 : I.dependencyTracker.take();
        j && (_.stepper && _.stepper.setOperatorBBoxes(j, _.gfx.dependencyTracker.takeDebugMetadata()), b && (this.recordedBBoxes = j));
      }
      R && m(this, gn, !0), A(this, Ta, kh).call(this), N ? (_.capability.reject(N), this._abortOperatorList({
        intentState: L,
        reason: N instanceof Error ? N : new Error(N),
      })) : _.capability.resolve(), this._stats && (this._stats.timeEnd('Rendering'), this._stats.timeEnd('Overall'), (B = globalThis.Stats) != null && B.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }; const
      _ = new Tp({
        callback: y,
        params: {
          canvas: e,
          canvasContext: t,
          dependencyTracker: f ? new Xw(e, L.operatorList.length, p) : null,
          viewport: i,
          transform: a,
          background: o,
        },
        objs: this.objs,
        commonObjs: this.commonObjs,
        annotationCanvasMap: c,
        operatorList: L.operatorList,
        pageIndex: this._pageIndex,
        canvasFactory: this._transport.canvasFactory,
        filterFactory: this._transport.filterFactory,
        useRequestAnimationFrame: !R,
        pdfBug: this._pdfBug,
        pageColors: d,
        enableHWA: this._transport.enableHWA,
        operationsFilter: E,
      });
    (L.renderTasks || (L.renderTasks = /* @__PURE__ */ new Set())).add(_);
    const P = _.task;
    return Promise.all([L.displayReadyCapability.promise, l]).then(([N, I]) => {
      let B;
      if (this.destroyed) {
        y();
        return;
      }
      if ((B = this._stats) == null || B.time('Rendering'), !(I.renderingIntent & M)) throw new Error('Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.');
      _.initializeGraphics({
        transparency: N,
        optionalContentConfig: I,
      }), _.operatorListChanged();
    }).catch(y), P;
  }

  getOperatorList({
    intent: t = 'display',
    annotationMode: e = Hs.ENABLE,
    printAnnotationStorage: i = null,
    isEditing: s = !1,
  } = {}) {
    let c;
    function r() {
      o.operatorList.lastChunk && (o.opListReadCapability.resolve(o.operatorList), o.renderTasks.delete(l));
    }
    const a = this._transport.getRenderingIntent(t, e, i, s, !0);
    let o = this._intentStates.get(a.cacheKey);
    o || (o = /* @__PURE__ */ Object.create(null), this._intentStates.set(a.cacheKey, o));
    let l;
    return o.opListReadCapability || (l = /* @__PURE__ */ Object.create(null), l.operatorListChanged = r, o.opListReadCapability = Promise.withResolvers(), (o.renderTasks || (o.renderTasks = /* @__PURE__ */ new Set())).add(l), o.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null,
    }, (c = this._stats) == null || c.time('Page Request'), this._pumpOperatorList(a)), o.opListReadCapability.promise;
  }

  streamTextContent({
    includeMarkedContent: t = !1,
    disableNormalization: e = !1,
  } = {}) {
    return this._transport.messageHandler.sendWithStream('GetTextContent', {
      pageIndex: this._pageIndex,
      includeMarkedContent: t === !0,
      disableNormalization: e === !0,
    }, {
      highWaterMark: 100,
      size(s) {
        return s.items.length;
      },
    });
  }

  getTextContent(t = {}) {
    if (this._transport._htmlForXfa) return this.getXfa().then((i) => zh.textContent(i));
    const e = this.streamTextContent(t);
    return new Promise((i, s) => {
      function r() {
        a.read().then(({
          value: l,
          done: c,
        }) => {
          if (c) {
            i(o);
            return;
          }
          o.lang ?? (o.lang = l.lang), Object.assign(o.styles, l.styles), o.items.push(...l.items), r();
        }, s);
      }
      const a = e.getReader(); const
        o = {
          items: [],
          styles: /* @__PURE__ */ Object.create(null),
          lang: null,
        };
      r();
    });
  }

  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }

  _destroy() {
    this.destroyed = !0;
    const t = [];
    for (const e of this._intentStates.values()) {
      if (this._abortOperatorList({
        intentState: e,
        reason: new Error('Page was destroyed.'),
        force: !0,
      }), !e.opListReadCapability) for (const i of e.renderTasks) t.push(i.completed), i.cancel();
    }
    return this.objs.clear(), m(this, gn, !1), Promise.all(t);
  }

  cleanup(t = !1) {
    m(this, gn, !0);
    const e = A(this, Ta, kh).call(this);
    return t && e && this._stats && (this._stats = new em()), e;
  }

  _startRenderPage(t, e) {
    let s; let
      r;
    const i = this._intentStates.get(e);
    i && ((s = this._stats) == null || s.timeEnd('Page Request'), (r = i.displayReadyCapability) == null || r.resolve(t));
  }

  _renderPageChunk(t, e) {
    for (let i = 0, s = t.length; i < s; i++) e.operatorList.fnArray.push(t.fnArray[i]), e.operatorList.argsArray.push(t.argsArray[i]);
    e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
    for (const i of e.renderTasks) i.operatorListChanged();
    t.lastChunk && A(this, Ta, kh).call(this);
  }

  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: e,
    annotationStorageSerializable: i,
    modifiedIds: s,
  }) {
    const {
      map: r,
      transfer: a,
    } = i; const l = this._transport.messageHandler.sendWithStream('GetOperatorList', {
      pageIndex: this._pageIndex,
      intent: t,
      cacheKey: e,
      annotationStorage: r,
      modifiedIds: s,
    }, a).getReader(); const
      c = this._intentStates.get(e);
    c.streamReader = l;
    const d = () => {
      l.read().then(({
        value: u,
        done: g,
      }) => {
        if (g) {
          c.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(u, c), d());
      }, (u) => {
        if (c.streamReader = null, !this._transport.destroyed) {
          if (c.operatorList) {
            c.operatorList.lastChunk = !0;
            for (const g of c.renderTasks) g.operatorListChanged();
            A(this, Ta, kh).call(this);
          }
          if (c.displayReadyCapability) c.displayReadyCapability.reject(u);
          else if (c.opListReadCapability) c.opListReadCapability.reject(u);
          else throw u;
        }
      });
    };
    d();
  }

  _abortOperatorList({
    intentState: t,
    reason: e,
    force: i = !1,
  }) {
    if (t.streamReader) {
      if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !i) {
        if (t.renderTasks.size > 0) return;
        if (e instanceof uf) {
          let s = P0;
          e.extraDelay > 0 && e.extraDelay < 1e3 && (s += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
            t.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: t,
              reason: e,
              force: !0,
            });
          }, s);
          return;
        }
      }
      if (t.streamReader.cancel(new Dn(e.message)).catch(() => {
      }), t.streamReader = null, !this._transport.destroyed) {
        for (const [s, r] of this._intentStates) {
          if (r === t) {
            this._intentStates.delete(s);
            break;
          }
        }
        this.cleanup();
      }
    }
  }

  get stats() {
    return this._stats;
  }
}
gn = new WeakMap(), Ta = new WeakSet(), kh = function () {
  if (!n(this, gn) || this.destroyed) return !1;
  for (const {
    renderTasks: t,
    operatorList: e,
  } of this._intentStates.values()) if (t.size > 0 || !e.lastChunk) return !1;
  return this._intentStates.clear(), this.objs.clear(), m(this, gn, !1), !0;
};
let cr; let ts; let mn; let Pa; let Zu; let ka; let Ra; let Ye; let ou; let rb; let ab; let Rh; let Sl; let
  lu;
const Gt = class Gt {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: i = bw(),
  } = {}) {
    v(this, Ye);
    v(this, cr, Promise.withResolvers());
    v(this, ts, null);
    v(this, mn, null);
    v(this, Pa, null);
    if (this.name = t, this.destroyed = !1, this.verbosity = i, e) {
      if (n(Gt, Ra).has(e)) throw new Error('Cannot use more than one PDFWorker per port.');
      n(Gt, Ra).set(e, this), A(this, Ye, rb).call(this, e);
    } else A(this, Ye, ab).call(this);
  }

  get promise() {
    return n(this, cr).promise;
  }

  get port() {
    return n(this, mn);
  }

  get messageHandler() {
    return n(this, ts);
  }

  destroy() {
    let t; let
      e;
    this.destroyed = !0, (t = n(this, Pa)) == null || t.terminate(), m(this, Pa, null), n(Gt, Ra).delete(n(this, mn)), m(this, mn, null), (e = n(this, ts)) == null || e.destroy(), m(this, ts, null);
  }

  static create(t) {
    const e = n(this, Ra).get(t == null ? void 0 : t.port);
    if (e) {
      if (e._pendingDestroy) throw new Error('PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.');
      return e;
    }
    return new Gt(t);
  }

  static get workerSrc() {
    if (os.workerSrc) return os.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }

  static get _setupFakeWorkerGlobal() {
    return yt(this, '_setupFakeWorkerGlobal', (async () => (n(this, Sl, lu) ? n(this, Sl, lu) : (await import(
      /* webpackIgnore: true */
      /* @vite-ignore */
      this.workerSrc
    )).WorkerMessageHandler))());
  }
};
cr = new WeakMap(), ts = new WeakMap(), mn = new WeakMap(), Pa = new WeakMap(), Zu = new WeakMap(), ka = new WeakMap(), Ra = new WeakMap(), Ye = new WeakSet(), ou = function () {
  n(this, cr).resolve(), n(this, ts).send('configure', {
    verbosity: this.verbosity,
  });
}, rb = function (t) {
  m(this, mn, t), m(this, ts, new Ah('main', 'worker', t)), n(this, ts).on('ready', () => {
  }), A(this, Ye, ou).call(this);
}, ab = function () {
  if (n(Gt, ka) || n(Gt, Sl, lu)) {
    A(this, Ye, Rh).call(this);
    return;
  }
  let {
    workerSrc: t,
  } = Gt;
  try {
    Gt._isSameOrigin(window.location, t) || (t = Gt._createCDNWrapper(new URL(t, window.location).href));
    const e = new Worker(t, {
      type: 'module',
    }); const i = new Ah('main', 'worker', e); const s = () => {
      r.abort(), i.destroy(), e.terminate(), this.destroyed ? n(this, cr).reject(new Error('Worker was destroyed')) : A(this, Ye, Rh).call(this);
    }; const
      r = new AbortController();
    e.addEventListener('error', () => {
      n(this, Pa) || s();
    }, {
      signal: r.signal,
    }), i.on('test', (o) => {
      if (r.abort(), this.destroyed || !o) {
        s();
        return;
      }
      m(this, ts, i), m(this, mn, e), m(this, Pa, e), A(this, Ye, ou).call(this);
    }), i.on('ready', (o) => {
      if (r.abort(), this.destroyed) {
        s();
        return;
      }
      try {
        a();
      } catch {
        A(this, Ye, Rh).call(this);
      }
    });
    const a = () => {
      const o = new Uint8Array();
      i.send('test', o, [o.buffer]);
    };
    a();
    return;
  } catch {
    df('The worker has been disabled.');
  }
  A(this, Ye, Rh).call(this);
}, Rh = function () {
  n(Gt, ka) || (pt('Setting up fake worker.'), m(Gt, ka, !0)), Gt._setupFakeWorkerGlobal.then((t) => {
    if (this.destroyed) {
      n(this, cr).reject(new Error('Worker was destroyed'));
      return;
    }
    const e = new Hw();
    m(this, mn, e);
    const i = `fake${de(Gt, Zu)._++}`; const
      s = new Ah(`${i}_worker`, i, e);
    t.setup(s, e), m(this, ts, new Ah(i, `${i}_worker`, e)), A(this, Ye, ou).call(this);
  }).catch((t) => {
    n(this, cr).reject(new Error(`Setting up fake worker failed: "${t.message}".`));
  });
}, Sl = new WeakSet(), lu = function () {
  let t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, v(Gt, Sl), v(Gt, Zu, 0), v(Gt, ka, !1), v(Gt, Ra, /* @__PURE__ */ new WeakMap()), Xe && (m(Gt, ka, !0), os.workerSrc || (os.workerSrc = './pdf.worker.mjs')), Gt._isSameOrigin = (t, e) => {
  const i = URL.parse(t);
  if (!(i != null && i.origin) || i.origin === 'null') return !1;
  const s = new URL(e, i);
  return i.origin === s.origin;
}, Gt._createCDNWrapper = (t) => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], {
    type: 'text/javascript',
  }));
}, Gt.fromPort = (t) => {
  if (Tw('`PDFWorker.fromPort` - please use `PDFWorker.create` instead.'), !(t != null && t.port)) throw new Error('PDFWorker.fromPort - invalid method signature.');
  return Gt.create(t);
};
let rh = Gt;
let yn; let ks; let Al; let _l; let bn; let Ma; let
  Mh;
class M0 {
  constructor(t, e, i, s, r, a) {
    v(this, Ma);
    v(this, yn, /* @__PURE__ */ new Map());
    v(this, ks, /* @__PURE__ */ new Map());
    v(this, Al, /* @__PURE__ */ new Map());
    v(this, _l, /* @__PURE__ */ new Map());
    v(this, bn, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new tb(), this.fontLoader = new Ow({
      ownerDocument: s.ownerDocument,
      styleElement: s.styleElement,
    }), this.loadingParams = s.loadingParams, this._params = s, this.canvasFactory = r.canvasFactory, this.filterFactory = r.filterFactory, this.cMapReaderFactory = r.cMapReaderFactory, this.standardFontDataFactory = r.standardFontDataFactory, this.wasmFactory = r.wasmFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = i, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.enableHWA = a, this.setupMessageHandler();
  }

  get annotationStorage() {
    return yt(this, 'annotationStorage', new Ag());
  }

  getRenderingIntent(t, e = Hs.ENABLE, i = null, s = !1, r = !1) {
    let a = Ei.DISPLAY; let
      o = cp;
    switch (t) {
      case 'any':
        a = Ei.ANY;
        break;
      case 'display':
        break;
      case 'print':
        a = Ei.PRINT;
        break;
      default:
        pt(`getRenderingIntent - invalid intent: ${t}`);
    }
    const l = a & Ei.PRINT && i instanceof Ny ? i : this.annotationStorage;
    switch (e) {
      case Hs.DISABLE:
        a += Ei.ANNOTATIONS_DISABLE;
        break;
      case Hs.ENABLE:
        break;
      case Hs.ENABLE_FORMS:
        a += Ei.ANNOTATIONS_FORMS;
        break;
      case Hs.ENABLE_STORAGE:
        a += Ei.ANNOTATIONS_STORAGE, o = l.serializable;
        break;
      default:
        pt(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    s && (a += Ei.IS_EDITING), r && (a += Ei.OPLIST);
    const {
      ids: c,
      hash: d,
    } = l.modifiedIds; const
      u = [a, o.hash, d];
    return {
      renderingIntent: a,
      cacheKey: u.join('_'),
      annotationStorageSerializable: o,
      modifiedIds: c,
    };
  }

  destroy() {
    let i;
    if (this.destroyCapability) return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (i = n(this, bn)) == null || i.reject(new Error('Worker was destroyed during onPassword callback'));
    const t = [];
    for (const s of n(this, ks).values()) t.push(s._destroy());
    n(this, ks).clear(), n(this, Al).clear(), n(this, _l).clear(), this.hasOwnProperty('annotationStorage') && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise('Terminate', null);
    return t.push(e), Promise.all(t).then(() => {
      let s; let
        r;
      this.commonObjs.clear(), this.fontLoader.clear(), n(this, yn).clear(), this.filterFactory.destroy(), Wh.cleanup(), (s = this._networkStream) == null || s.cancelAllRequests(new Dn('Worker was terminated.')), (r = this.messageHandler) == null || r.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }

  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e,
    } = this;
    t.on('GetReader', (i, s) => {
      _t(this._networkStream, 'GetReader - no `IPDFStream` instance available.'), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (r) => {
        this._lastProgress = {
          loaded: r.loaded,
          total: r.total,
        };
      }, s.onPull = () => {
        this._fullReader.read().then(({
          value: r,
          done: a,
        }) => {
          if (a) {
            s.close();
            return;
          }
          _t(r instanceof ArrayBuffer, 'GetReader - expected an ArrayBuffer.'), s.enqueue(new Uint8Array(r), 1, [r]);
        }).catch((r) => {
          s.error(r);
        });
      }, s.onCancel = (r) => {
        this._fullReader.cancel(r), s.ready.catch((a) => {
          if (!this.destroyed) throw a;
        });
      };
    }), t.on('ReaderHeadersReady', async (i) => {
      let o;
      await this._fullReader.headersReady;
      const {
        isStreamingSupported: s,
        isRangeSupported: r,
        contentLength: a,
      } = this._fullReader;
      return (!s || !r) && (this._lastProgress && ((o = e.onProgress) == null || o.call(e, this._lastProgress)), this._fullReader.onProgress = (l) => {
        let c;
        (c = e.onProgress) == null || c.call(e, {
          loaded: l.loaded,
          total: l.total,
        });
      }), {
        isStreamingSupported: s,
        isRangeSupported: r,
        contentLength: a,
      };
    }), t.on('GetRangeReader', (i, s) => {
      _t(this._networkStream, 'GetRangeReader - no `IPDFStream` instance available.');
      const r = this._networkStream.getRangeReader(i.begin, i.end);
      if (!r) {
        s.close();
        return;
      }
      s.onPull = () => {
        r.read().then(({
          value: a,
          done: o,
        }) => {
          if (o) {
            s.close();
            return;
          }
          _t(a instanceof ArrayBuffer, 'GetRangeReader - expected an ArrayBuffer.'), s.enqueue(new Uint8Array(a), 1, [a]);
        }).catch((a) => {
          s.error(a);
        });
      }, s.onCancel = (a) => {
        r.cancel(a), s.ready.catch((o) => {
          if (!this.destroyed) throw o;
        });
      };
    }), t.on('GetDoc', ({
      pdfInfo: i,
    }) => {
      this._numPages = i.numPages, this._htmlForXfa = i.htmlForXfa, delete i.htmlForXfa, e._capability.resolve(new k0(i, this));
    }), t.on('DocException', (i) => {
      e._capability.reject(Je(i));
    }), t.on('PasswordRequest', (i) => {
      m(this, bn, Promise.withResolvers());
      try {
        if (!e.onPassword) throw Je(i);
        const s = (r) => {
          r instanceof Error ? n(this, bn).reject(r) : n(this, bn).resolve({
            password: r,
          });
        };
        e.onPassword(s, i.code);
      } catch (s) {
        n(this, bn).reject(s);
      }
      return n(this, bn).promise;
    }), t.on('DataLoaded', (i) => {
      let s;
      (s = e.onProgress) == null || s.call(e, {
        loaded: i.length,
        total: i.length,
      }), this.downloadInfoCapability.resolve(i);
    }), t.on('StartRenderPage', (i) => {
      if (this.destroyed) return;
      n(this, ks).get(i.pageIndex)._startRenderPage(i.transparency, i.cacheKey);
    }), t.on('commonobj', ([i, s, r]) => {
      let a;
      if (this.destroyed || this.commonObjs.has(i)) return null;
      switch (s) {
        case 'Font':
          if ('error' in r) {
            const u = r.error;
            pt(`Error during font loading: ${u}`), this.commonObjs.resolve(i, u);
            break;
          }
          const o = new Sp(r); const l = this._params.pdfBug && ((a = globalThis.FontInspector) != null && a.enabled) ? (u, g) => globalThis.FontInspector.fontAdded(u, g) : null; const
            c = new Iw(o, l, r.extra, r.charProcOperatorList);
          this.fontLoader.bind(c).catch(() => t.sendWithPromise('FontFallback', {
            id: i,
          })).finally(() => {
            !c.fontExtraProperties && c.data && c.clearData(), this.commonObjs.resolve(i, c);
          });
          break;
        case 'CopyLocalImage':
          const {
            imageRef: d,
          } = r;
          _t(d, 'The imageRef must be defined.');
          for (const u of n(this, ks).values()) for (const [, g] of u.objs) if ((g == null ? void 0 : g.ref) === d) return g.dataLen ? (this.commonObjs.resolve(i, structuredClone(g)), g.dataLen) : null;
          break;
        case 'FontPath':
        case 'Image':
        case 'Pattern':
          this.commonObjs.resolve(i, r);
          break;
        default:
          throw new Error(`Got unknown common object type ${s}`);
      }
      return null;
    }), t.on('obj', ([i, s, r, a]) => {
      let l;
      if (this.destroyed) return;
      const o = n(this, ks).get(s);
      if (!o.objs.has(i)) {
        if (o._intentStates.size === 0) {
          (l = a == null ? void 0 : a.bitmap) == null || l.close();
          return;
        }
        switch (r) {
          case 'Image':
          case 'Pattern':
            o.objs.resolve(i, a);
            break;
          default:
            throw new Error(`Got unknown object type ${r}`);
        }
      }
    }), t.on('DocProgress', (i) => {
      let s;
      this.destroyed || (s = e.onProgress) == null || s.call(e, {
        loaded: i.loaded,
        total: i.total,
      });
    }), t.on('FetchBinaryData', async (i) => {
      if (this.destroyed) throw new Error('Worker was destroyed.');
      const s = this[i.type];
      if (!s) throw new Error(`${i.type} not initialized, see the \`useWorkerFetch\` parameter.`);
      return s.fetch(i);
    });
  }

  getData() {
    return this.messageHandler.sendWithPromise('GetData', null);
  }

  saveDocument() {
    let i;
    this.annotationStorage.size <= 0 && pt('saveDocument called while `annotationStorage` is empty, please use the getData-method instead.');
    const {
      map: t,
      transfer: e,
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise('SaveDocument', {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: t,
      filename: ((i = this._fullReader) == null ? void 0 : i.filename) ?? null,
    }, e).finally(() => {
      this.annotationStorage.resetModified();
    });
  }

  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this._numPages) return Promise.reject(new Error('Invalid page request.'));
    const e = t - 1; const
      i = n(this, Al).get(e);
    if (i) return i;
    const s = this.messageHandler.sendWithPromise('GetPage', {
      pageIndex: e,
    }).then((r) => {
      if (this.destroyed) throw new Error('Transport destroyed');
      r.refStr && n(this, _l).set(r.refStr, t);
      const a = new R0(e, r, this, this._params.pdfBug);
      return n(this, ks).set(e, a), a;
    });
    return n(this, Al).set(e, s), s;
  }

  getPageIndex(t) {
    return dp(t) ? this.messageHandler.sendWithPromise('GetPageIndex', {
      num: t.num,
      gen: t.gen,
    }) : Promise.reject(new Error('Invalid pageIndex request.'));
  }

  getAnnotations(t, e) {
    return this.messageHandler.sendWithPromise('GetAnnotations', {
      pageIndex: t,
      intent: e,
    });
  }

  getFieldObjects() {
    return A(this, Ma, Mh).call(this, 'GetFieldObjects');
  }

  hasJSActions() {
    return A(this, Ma, Mh).call(this, 'HasJSActions');
  }

  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise('GetCalculationOrderIds', null);
  }

  getDestinations() {
    return this.messageHandler.sendWithPromise('GetDestinations', null);
  }

  getDestination(t) {
    return typeof t !== 'string' ? Promise.reject(new Error('Invalid destination request.')) : this.messageHandler.sendWithPromise('GetDestination', {
      id: t,
    });
  }

  getPageLabels() {
    return this.messageHandler.sendWithPromise('GetPageLabels', null);
  }

  getPageLayout() {
    return this.messageHandler.sendWithPromise('GetPageLayout', null);
  }

  getPageMode() {
    return this.messageHandler.sendWithPromise('GetPageMode', null);
  }

  getViewerPreferences() {
    return this.messageHandler.sendWithPromise('GetViewerPreferences', null);
  }

  getOpenAction() {
    return this.messageHandler.sendWithPromise('GetOpenAction', null);
  }

  getAttachments() {
    return this.messageHandler.sendWithPromise('GetAttachments', null);
  }

  getAnnotationsByType(t, e) {
    return this.messageHandler.sendWithPromise('GetAnnotationsByType', {
      types: t,
      pageIndexesToSkip: e,
    });
  }

  getDocJSActions() {
    return A(this, Ma, Mh).call(this, 'GetDocJSActions');
  }

  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise('GetPageJSActions', {
      pageIndex: t,
    });
  }

  getStructTree(t) {
    return this.messageHandler.sendWithPromise('GetStructTree', {
      pageIndex: t,
    });
  }

  getOutline() {
    return this.messageHandler.sendWithPromise('GetOutline', null);
  }

  getOptionalContentConfig(t) {
    return A(this, Ma, Mh).call(this, 'GetOptionalContentConfig').then((e) => new h0(e, t));
  }

  getPermissions() {
    return this.messageHandler.sendWithPromise('GetPermissions', null);
  }

  getMetadata() {
    const t = 'GetMetadata';
    const e = n(this, yn).get(t);
    if (e) return e;
    const i = this.messageHandler.sendWithPromise(t, null).then((s) => {
      let r; let
        a;
      return {
        info: s[0],
        metadata: s[1] ? new o0(s[1]) : null,
        contentDispositionFilename: ((r = this._fullReader) == null ? void 0 : r.filename) ?? null,
        contentLength: ((a = this._fullReader) == null ? void 0 : a.contentLength) ?? null,
      };
    });
    return n(this, yn).set(t, i), i;
  }

  getMarkInfo() {
    return this.messageHandler.sendWithPromise('GetMarkInfo', null);
  }

  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise('Cleanup', null);
      for (const e of n(this, ks).values()) if (!e.cleanup()) throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), n(this, yn).clear(), this.filterFactory.destroy(!0), Wh.cleanup();
    }
  }

  cachedPageNumber(t) {
    if (!dp(t)) return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return n(this, _l).get(e) ?? null;
  }
}
yn = new WeakMap(), ks = new WeakMap(), Al = new WeakMap(), _l = new WeakMap(), bn = new WeakMap(), Ma = new WeakSet(), Mh = function (t, e = null) {
  const i = n(this, yn).get(t);
  if (i) return i;
  const s = this.messageHandler.sendWithPromise(t, e);
  return n(this, yn).set(t, s), s;
};
let dr;
class L0 {
  constructor(t) {
    v(this, dr, null);
    V(this, 'onContinue', null);
    V(this, 'onError', null);
    m(this, dr, t);
  }

  get promise() {
    return n(this, dr).capability.promise;
  }

  cancel(t = 0) {
    n(this, dr).cancel(null, t);
  }

  get separateAnnots() {
    const {
      separateAnnots: t,
    } = n(this, dr).operatorList;
    if (!t) return !1;
    const {
      annotationCanvasMap: e,
    } = n(this, dr);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
dr = new WeakMap();
let ur; let
  La;
const Vr = class Vr {
  constructor({
    callback: t,
    params: e,
    objs: i,
    commonObjs: s,
    annotationCanvasMap: r,
    operatorList: a,
    pageIndex: o,
    canvasFactory: l,
    filterFactory: c,
    useRequestAnimationFrame: d = !1,
    pdfBug: u = !1,
    pageColors: g = null,
    enableHWA: b = !1,
    operationsFilter: E = null,
  }) {
    v(this, ur, null);
    this.callback = t, this.params = e, this.objs = i, this.commonObjs = s, this.annotationCanvasMap = r, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = l, this.filterFactory = c, this._pdfBug = u, this.pageColors = g, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = d === !0 && typeof window < 'u', this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new L0(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvas, this._canvasContext = e.canvas ? null : e.canvasContext, this._enableHWA = b, this._dependencyTracker = e.dependencyTracker, this._operationsFilter = E;
  }

  get completed() {
    return this.capability.promise.catch(() => {
    });
  }

  initializeGraphics({
    transparency: t = !1,
    optionalContentConfig: e,
  }) {
    let l; let
      c;
    if (this.cancelled) return;
    if (this._canvas) {
      if (n(Vr, La).has(this._canvas)) throw new Error('Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.');
      n(Vr, La).add(this._canvas);
    }
    this._pdfBug && ((l = globalThis.StepperManager) != null && l.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      viewport: i,
      transform: s,
      background: r,
      dependencyTracker: a,
    } = this.params; const
      o = this._canvasContext || this._canvas.getContext('2d', {
        alpha: !1,
        willReadFrequently: !this._enableHWA,
      });
    this.gfx = new Po(o, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e,
    }, this.annotationCanvasMap, this.pageColors, a), this.gfx.beginDrawing({
      transform: s,
      viewport: i,
      transparency: t,
      background: r,
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (c = this.graphicsReadyCallback) == null || c.call(this);
  }

  cancel(t = null, e = 0) {
    let i; let s; let
      r;
    this.running = !1, this.cancelled = !0, (i = this.gfx) == null || i.endDrawing(), n(this, ur) && (window.cancelAnimationFrame(n(this, ur)), m(this, ur, null)), n(Vr, La).delete(this._canvas), t || (t = new uf(`Rendering cancelled, page ${this._pageIndex + 1}`, e)), this.callback(t), (r = (s = this.task).onError) == null || r.call(s, t);
  }

  operatorListChanged() {
    let t; let
      e;
    if (!this.graphicsReady) {
      this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
      return;
    }
    (t = this.gfx.dependencyTracker) == null || t.growOperationsCount(this.operatorList.fnArray.length), (e = this.stepper) == null || e.updateOperatorList(this.operatorList), !this.running && this._continue();
  }

  _continue() {
    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }

  _scheduleNext() {
    this._useRequestAnimationFrame ? m(this, ur, window.requestAnimationFrame(() => {
      m(this, ur, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }

  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._operationsFilter), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), n(Vr, La).delete(this._canvas), this.callback())));
  }
};
ur = new WeakMap(), La = new WeakMap(), v(Vr, La, /* @__PURE__ */ new WeakSet());
let Tp = Vr;
const ob = '5.4.296';
const lb = 'f56dc8601';
let fi; let Da; let xl; let pe; let Vc; let El; let vn; let qc; let fr; let es; let Xc; let It; let Pp; let kp; let Rp; let Ur; let hb; let
  Hn;
const Qe = class Qe {
  constructor({
    editor: t = null,
    uiManager: e = null,
  }) {
    v(this, It);
    v(this, fi, null);
    v(this, Da, null);
    v(this, xl);
    v(this, pe, null);
    v(this, Vc, !1);
    v(this, El, !1);
    v(this, vn, null);
    v(this, qc);
    v(this, fr, null);
    v(this, es, null);
    let i; let
      s;
    t ? (m(this, El, !1), m(this, vn, t)) : m(this, El, !0), m(this, es, (t == null ? void 0 : t._uiManager) || e), m(this, qc, n(this, es)._eventBus), m(this, xl, ((i = t == null ? void 0 : t.color) == null ? void 0 : i.toUpperCase()) || ((s = n(this, es)) == null ? void 0 : s.highlightColors.values().next().value) || '#FFFF98'), n(Qe, Xc) || m(Qe, Xc, Object.freeze({
      blue: 'pdfjs-editor-colorpicker-blue',
      green: 'pdfjs-editor-colorpicker-green',
      pink: 'pdfjs-editor-colorpicker-pink',
      red: 'pdfjs-editor-colorpicker-red',
      yellow: 'pdfjs-editor-colorpicker-yellow',
    }));
  }

  static get _keyboardManager() {
    return yt(this, '_keyboardManager', new Ld([[['Escape', 'mac+Escape'], Qe.prototype._hideDropdownFromKeyboard], [[' ', 'mac+ '], Qe.prototype._colorSelectFromKeyboard], [['ArrowDown', 'ArrowRight', 'mac+ArrowDown', 'mac+ArrowRight'], Qe.prototype._moveToNext], [['ArrowUp', 'ArrowLeft', 'mac+ArrowUp', 'mac+ArrowLeft'], Qe.prototype._moveToPrevious], [['Home', 'mac+Home'], Qe.prototype._moveToBeginning], [['End', 'mac+End'], Qe.prototype._moveToEnd]]));
  }

  renderButton() {
    const t = m(this, fi, document.createElement('button'));
    t.className = 'colorPicker', t.tabIndex = '0', t.setAttribute('data-l10n-id', 'pdfjs-editor-colorpicker-button'), t.ariaHasPopup = 'true', n(this, vn) && (t.ariaControls = `${n(this, vn).id}_colorpicker_dropdown`);
    const e = n(this, es)._signal;
    t.addEventListener('click', A(this, It, Ur).bind(this), {
      signal: e,
    }), t.addEventListener('keydown', A(this, It, Rp).bind(this), {
      signal: e,
    });
    const i = m(this, Da, document.createElement('span'));
    return i.className = 'swatch', i.ariaHidden = 'true', i.style.backgroundColor = n(this, xl), t.append(i), t;
  }

  renderMainDropdown() {
    const t = m(this, pe, A(this, It, Pp).call(this));
    return t.ariaOrientation = 'horizontal', t.ariaLabelledBy = 'highlightColorPickerLabel', t;
  }

  _colorSelectFromKeyboard(t) {
    if (t.target === n(this, fi)) {
      A(this, It, Ur).call(this, t);
      return;
    }
    const e = t.target.getAttribute('data-color');
    e && A(this, It, kp).call(this, e, t);
  }

  _moveToNext(t) {
    let e; let
      i;
    if (!n(this, It, Hn)) {
      A(this, It, Ur).call(this, t);
      return;
    }
    if (t.target === n(this, fi)) {
      (e = n(this, pe).firstChild) == null || e.focus();
      return;
    }
    (i = t.target.nextSibling) == null || i.focus();
  }

  _moveToPrevious(t) {
    let e; let
      i;
    if (t.target === ((e = n(this, pe)) == null ? void 0 : e.firstChild) || t.target === n(this, fi)) {
      n(this, It, Hn) && this._hideDropdownFromKeyboard();
      return;
    }
    n(this, It, Hn) || A(this, It, Ur).call(this, t), (i = t.target.previousSibling) == null || i.focus();
  }

  _moveToBeginning(t) {
    let e;
    if (!n(this, It, Hn)) {
      A(this, It, Ur).call(this, t);
      return;
    }
    (e = n(this, pe).firstChild) == null || e.focus();
  }

  _moveToEnd(t) {
    let e;
    if (!n(this, It, Hn)) {
      A(this, It, Ur).call(this, t);
      return;
    }
    (e = n(this, pe).lastChild) == null || e.focus();
  }

  hideDropdown() {
    let t; let
      e;
    (t = n(this, pe)) == null || t.classList.add('hidden'), n(this, fi).ariaExpanded = 'false', (e = n(this, fr)) == null || e.abort(), m(this, fr, null);
  }

  _hideDropdownFromKeyboard() {
    let t;
    if (!n(this, El)) {
      if (!n(this, It, Hn)) {
        (t = n(this, vn)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), n(this, fi).focus({
        preventScroll: !0,
        focusVisible: n(this, Vc),
      });
    }
  }

  updateColor(t) {
    if (n(this, Da) && (n(this, Da).style.backgroundColor = t), !n(this, pe)) return;
    const e = n(this, es).highlightColors.values();
    for (const i of n(this, pe).children) i.ariaSelected = e.next().value === t.toUpperCase();
  }

  destroy() {
    let t; let
      e;
    (t = n(this, fi)) == null || t.remove(), m(this, fi, null), m(this, Da, null), (e = n(this, pe)) == null || e.remove(), m(this, pe, null);
  }
};
fi = new WeakMap(), Da = new WeakMap(), xl = new WeakMap(), pe = new WeakMap(), Vc = new WeakMap(), El = new WeakMap(), vn = new WeakMap(), qc = new WeakMap(), fr = new WeakMap(), es = new WeakMap(), Xc = new WeakMap(), It = new WeakSet(), Pp = function () {
  const t = document.createElement('div'); const
    e = n(this, es)._signal;
  t.addEventListener('contextmenu', Ri, {
    signal: e,
  }), t.className = 'dropdown', t.role = 'listbox', t.ariaMultiSelectable = 'false', t.ariaOrientation = 'vertical', t.setAttribute('data-l10n-id', 'pdfjs-editor-colorpicker-dropdown'), n(this, vn) && (t.id = `${n(this, vn).id}_colorpicker_dropdown`);
  for (const [i, s] of n(this, es).highlightColors) {
    const r = document.createElement('button');
    r.tabIndex = '0', r.role = 'option', r.setAttribute('data-color', s), r.title = i, r.setAttribute('data-l10n-id', n(Qe, Xc)[i]);
    const a = document.createElement('span');
    r.append(a), a.className = 'swatch', a.style.backgroundColor = s, r.ariaSelected = s === n(this, xl), r.addEventListener('click', A(this, It, kp).bind(this, s), {
      signal: e,
    }), t.append(r);
  }
  return t.addEventListener('keydown', A(this, It, Rp).bind(this), {
    signal: e,
  }), t;
}, kp = function (t, e) {
  e.stopPropagation(), n(this, qc).dispatch('switchannotationeditorparams', {
    source: this,
    type: At.HIGHLIGHT_COLOR,
    value: t,
  }), this.updateColor(t);
}, Rp = function (t) {
  Qe._keyboardManager.exec(this, t);
}, Ur = function (t) {
  if (n(this, It, Hn)) {
    this.hideDropdown();
    return;
  }
  if (m(this, Vc, t.detail === 0), n(this, fr) || (m(this, fr, new AbortController()), window.addEventListener('pointerdown', A(this, It, hb).bind(this), {
    signal: n(this, es).combinedSignal(n(this, fr)),
  })), n(this, fi).ariaExpanded = 'true', n(this, pe)) {
    n(this, pe).classList.remove('hidden');
    return;
  }
  const e = m(this, pe, A(this, It, Pp).call(this));
  n(this, fi).append(e);
}, hb = function (t) {
  let e;
  (e = n(this, pe)) != null && e.contains(t.target) || this.hideDropdown();
}, Hn = function () {
  return n(this, pe) && !n(this, pe).classList.contains('hidden');
}, v(Qe, Xc, null);
const Gh = Qe;
let Rs; let Yc; let Cl; let
  Kc;
const qr = class qr {
  constructor(t) {
    v(this, Rs, null);
    v(this, Yc, null);
    v(this, Cl, null);
    m(this, Yc, t), m(this, Cl, t._uiManager), n(qr, Kc) || m(qr, Kc, Object.freeze({
      freetext: 'pdfjs-editor-color-picker-free-text-input',
      ink: 'pdfjs-editor-color-picker-ink-input',
    }));
  }

  renderButton() {
    if (n(this, Rs)) return n(this, Rs);
    const {
      editorType: t,
      colorType: e,
      colorValue: i,
    } = n(this, Yc); const
      s = m(this, Rs, document.createElement('input'));
    return s.type = 'color', s.value = i || '#000000', s.className = 'basicColorPicker', s.tabIndex = 0, s.setAttribute('data-l10n-id', n(qr, Kc)[t]), s.addEventListener('input', () => {
      n(this, Cl).updateParams(e, s.value);
    }, {
      signal: n(this, Cl)._signal,
    }), s;
  }

  update(t) {
    n(this, Rs) && (n(this, Rs).value = t);
  }

  destroy() {
    let t;
    (t = n(this, Rs)) == null || t.remove(), m(this, Rs, null);
  }

  hideDropdown() {
  }
};
Rs = new WeakMap(), Yc = new WeakMap(), Cl = new WeakMap(), Kc = new WeakMap(), v(qr, Kc, null);
const Fu = qr;
function _m(h) {
  return Math.floor(Math.max(0, Math.min(1, h)) * 255).toString(16).padStart(2, '0');
}
function ph(h) {
  return Math.max(0, Math.min(255, 255 * h));
}
class xm {
  static CMYK_G([t, e, i, s]) {
    return ['G', 1 - Math.min(1, 0.3 * t + 0.59 * i + 0.11 * e + s)];
  }

  static G_CMYK([t]) {
    return ['CMYK', 0, 0, 0, 1 - t];
  }

  static G_RGB([t]) {
    return ['RGB', t, t, t];
  }

  static G_rgb([t]) {
    return t = ph(t), [t, t, t];
  }

  static G_HTML([t]) {
    const e = _m(t);
    return `#${e}${e}${e}`;
  }

  static RGB_G([t, e, i]) {
    return ['G', 0.3 * t + 0.59 * e + 0.11 * i];
  }

  static RGB_rgb(t) {
    return t.map(ph);
  }

  static RGB_HTML(t) {
    return `#${t.map(_m).join('')}`;
  }

  static T_HTML() {
    return '#00000000';
  }

  static T_rgb() {
    return [null];
  }

  static CMYK_RGB([t, e, i, s]) {
    return ['RGB', 1 - Math.min(1, t + s), 1 - Math.min(1, i + s), 1 - Math.min(1, e + s)];
  }

  static CMYK_rgb([t, e, i, s]) {
    return [ph(1 - Math.min(1, t + s)), ph(1 - Math.min(1, i + s)), ph(1 - Math.min(1, e + s))];
  }

  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }

  static RGB_CMYK([t, e, i]) {
    const s = 1 - t; const r = 1 - e; const a = 1 - i; const
      o = Math.min(s, r, a);
    return ['CMYK', s, r, a, o];
  }
}
class D0 {
  create(t, e, i = !1) {
    if (t <= 0 || e <= 0) throw new Error('Invalid SVG dimensions');
    const s = this._createSVG('svg:svg');
    return s.setAttribute('version', '1.1'), i || (s.setAttribute('width', `${t}px`), s.setAttribute('height', `${e}px`)), s.setAttribute('preserveAspectRatio', 'none'), s.setAttribute('viewBox', `0 0 ${t} ${e}`), s;
  }

  createElement(t) {
    if (typeof t !== 'string') throw new Error('Invalid SVG element type');
    return this._createSVG(t);
  }

  _createSVG(t) {
    zt('Abstract method `_createSVG` called.');
  }
}
class Vh extends D0 {
  _createSVG(t) {
    return document.createElementNS(Gs, t);
  }
}
const O0 = 9; const ao = /* @__PURE__ */ new WeakSet(); const
  I0 = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3;
class Em {
  static create(t) {
    switch (t.data.annotationType) {
      case se.LINK:
        return new Tg(t);
      case se.TEXT:
        return new N0(t);
      case se.WIDGET:
        switch (t.data.fieldType) {
          case 'Tx':
            return new B0(t);
          case 'Btn':
            return t.data.radioButton ? new ub(t) : t.data.checkBox ? new j0(t) : new z0(t);
          case 'Ch':
            return new U0(t);
          case 'Sig':
            return new H0(t);
        }
        return new ho(t);
      case se.POPUP:
        return new Lp(t);
      case se.FREETEXT:
        return new yb(t);
      case se.LINE:
        return new W0(t);
      case se.SQUARE:
        return new G0(t);
      case se.CIRCLE:
        return new V0(t);
      case se.POLYLINE:
        return new bb(t);
      case se.CARET:
        return new X0(t);
      case se.INK:
        return new Pg(t);
      case se.POLYGON:
        return new q0(t);
      case se.HIGHLIGHT:
        return new vb(t);
      case se.UNDERLINE:
        return new Y0(t);
      case se.SQUIGGLY:
        return new K0(t);
      case se.STRIKEOUT:
        return new J0(t);
      case se.STAMP:
        return new wb(t);
      case se.FILEATTACHMENT:
        return new Q0(t);
      default:
        return new Jt(t);
    }
  }
}
let Oa; let Tl; let zi; let Jc; let
  Mp;
const Ng = class Ng {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: i = !1,
    createQuadrilaterals: s = !1,
  } = {}) {
    v(this, Jc);
    v(this, Oa, null);
    v(this, Tl, !1);
    v(this, zi, null);
    this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableComment = t.enableComment, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(i)), s && this._createQuadrilaterals();
  }

  static _hasPopupData({
    contentsObj: t,
    richText: e,
  }) {
    return !!(t != null && t.str || e != null && e.str);
  }

  get _isEditable() {
    return this.data.isEditable;
  }

  get hasPopupData() {
    return Ng._hasPopupData(this.data) || this.enableComment && !!this.commentText;
  }

  get commentData() {
    let i;
    const {
      data: t,
    } = this; const
      e = (i = this.annotationStorage) == null ? void 0 : i.getEditor(t.id);
    return e ? e.getData() : t;
  }

  get hasCommentButton() {
    return this.enableComment && this.hasPopupElement;
  }

  get commentButtonPosition() {
    let o;
    const t = (o = this.annotationStorage) == null ? void 0 : o.getEditor(this.data.id);
    if (t) return t.commentButtonPositionInPage;
    const {
      quadPoints: e,
      inkLists: i,
      rect: s,
    } = this.data;
    let r = -1 / 0; let
      a = -1 / 0;
    if ((e == null ? void 0 : e.length) >= 8) {
      for (let l = 0; l < e.length; l += 8) e[l + 1] > a ? (a = e[l + 1], r = e[l + 2]) : e[l + 1] === a && (r = Math.max(r, e[l + 2]));
      return [r, a];
    }
    if ((i == null ? void 0 : i.length) >= 1) {
      for (const l of i) for (let c = 0, d = l.length; c < d; c += 2) l[c + 1] > a ? (a = l[c + 1], r = l[c]) : l[c + 1] === a && (r = Math.max(r, l[c]));
      if (r !== 1 / 0) return [r, a];
    }
    return s ? [s[2], s[3]] : null;
  }

  _normalizePoint(t) {
    const {
      page: {
        view: e,
      },
      viewport: {
        rawDims: {
          pageWidth: i,
          pageHeight: s,
          pageX: r,
          pageY: a,
        },
      },
    } = this.parent;
    return t[1] = e[3] - t[1] + e[1], t[0] = 100 * (t[0] - r) / i, t[1] = 100 * (t[1] - a) / s, t;
  }

  get commentText() {
    let e; let i; let
      s;
    const {
      data: t,
    } = this;
    return ((i = (e = this.annotationStorage.getRawValue(`${Hh}${t.id}`)) == null ? void 0 : e.popup) == null ? void 0 : i.contents) || ((s = t.contentsObj) == null ? void 0 : s.str) || '';
  }

  set commentText(t) {
    const {
      data: e,
    } = this; const
      i = {
        deleted: !t,
        contents: t || '',
      };
    this.annotationStorage.updateEditor(e.id, {
      popup: i,
    }) || this.annotationStorage.setValue(`${Hh}${e.id}`, {
      id: e.id,
      annotationType: e.annotationType,
      pageIndex: this.parent.page._pageIndex,
      popup: i,
      popupRef: e.popupRef,
      modificationDate: /* @__PURE__ */ new Date(),
    }), t || this.removePopup();
  }

  removePopup() {
    let t; let
      e;
    (e = ((t = n(this, zi)) == null ? void 0 : t.popup) || this.popup) == null || e.remove(), m(this, zi, this.popup = null);
  }

  updateEdited(t) {
    let r;
    if (!this.container) return;
    t.rect && (n(this, Oa) || m(this, Oa, {
      rect: this.data.rect.slice(0),
    }));
    const {
      rect: e,
      popup: i,
    } = t;
    e && A(this, Jc, Mp).call(this, e);
    let s = ((r = n(this, zi)) == null ? void 0 : r.popup) || this.popup;
    !s && (i != null && i.text) && (this._createPopup(i), s = n(this, zi).popup), s && (s.updateEdited(t), i != null && i.deleted && (s.remove(), m(this, zi, null), this.popup = null));
  }

  resetEdited() {
    let t;
    n(this, Oa) && (A(this, Jc, Mp).call(this, n(this, Oa).rect), (t = n(this, zi)) == null || t.popup.resetEdited(), m(this, Oa, null));
  }

  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: i,
        viewport: s,
      },
    } = this; const
      r = document.createElement('section');
    r.setAttribute('data-annotation-id', e.id), !(this instanceof ho) && !(this instanceof Tg) && (r.tabIndex = 0);
    const {
      style: a,
    } = r;
    if (a.zIndex = this.parent.zIndex, this.parent.zIndex += 2, e.alternativeText && (r.title = e.alternativeText), e.noRotate && r.classList.add('norotate'), !e.rect || this instanceof Lp) {
      const {
        rotation: S,
      } = e;
      return !e.hasOwnCanvas && S !== 0 && this.setRotation(S, r), r;
    }
    const {
      width: o,
      height: l,
    } = this;
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const S = e.borderStyle.horizontalCornerRadius; const
        M = e.borderStyle.verticalCornerRadius;
      if (S > 0 || M > 0) {
        const L = `calc(${S}px * var(--total-scale-factor)) / calc(${M}px * var(--total-scale-factor))`;
        a.borderRadius = L;
      } else if (this instanceof ub) {
        const L = `calc(${o}px * var(--total-scale-factor)) / calc(${l}px * var(--total-scale-factor))`;
        a.borderRadius = L;
      }
      switch (e.borderStyle.style) {
        case po.SOLID:
          a.borderStyle = 'solid';
          break;
        case po.DASHED:
          a.borderStyle = 'dashed';
          break;
        case po.BEVELED:
          pt('Unimplemented border style: beveled');
          break;
        case po.INSET:
          pt('Unimplemented border style: inset');
          break;
        case po.UNDERLINE:
          a.borderBottomStyle = 'solid';
          break;
      }
      const T = e.borderColor || null;
      T ? (m(this, Tl, !0), a.borderColor = tt.makeHexColor(T[0] | 0, T[1] | 0, T[2] | 0)) : a.borderWidth = 0;
    }
    const c = tt.normalizeRect([e.rect[0], i.view[3] - e.rect[1] + i.view[1], e.rect[2], i.view[3] - e.rect[3] + i.view[1]]); const
      {
        pageWidth: d,
        pageHeight: u,
        pageX: g,
        pageY: b,
      } = s.rawDims;
    a.left = `${100 * (c[0] - g) / d}%`, a.top = `${100 * (c[1] - b) / u}%`;
    const {
      rotation: E,
    } = e;
    return e.hasOwnCanvas || E === 0 ? (a.width = `${100 * o / d}%`, a.height = `${100 * l / u}%`) : this.setRotation(E, r), r;
  }

  setRotation(t, e = this.container) {
    if (!this.data.rect) return;
    const {
      pageWidth: i,
      pageHeight: s,
    } = this.parent.viewport.rawDims;
    let {
      width: r,
      height: a,
    } = this;
    t % 180 !== 0 && ([r, a] = [a, r]), e.style.width = `${100 * r / i}%`, e.style.height = `${100 * a / s}%`, e.setAttribute('data-main-rotation', (360 - t) % 360);
  }

  get _commonActions() {
    const t = (e, i, s) => {
      const r = s.detail[e]; const a = r[0]; const
        o = r.slice(1);
      s.target.style[i] = xm[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [i]: xm[`${a}_rgb`](o),
      });
    };
    return yt(this, '_commonActions', {
      display: (e) => {
        const {
          display: i,
        } = e.detail; const
          s = i % 2 === 1;
        this.container.style.visibility = s ? 'hidden' : 'visible', this.annotationStorage.setValue(this.data.id, {
          noView: s,
          noPrint: i === 1 || i === 2,
        });
      },
      print: (e) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !e.detail.print,
        });
      },
      hidden: (e) => {
        const {
          hidden: i,
        } = e.detail;
        this.container.style.visibility = i ? 'hidden' : 'visible', this.annotationStorage.setValue(this.data.id, {
          noPrint: i,
          noView: i,
        });
      },
      focus: (e) => {
        setTimeout(() => e.target.focus({
          preventScroll: !1,
        }), 0);
      },
      userName: (e) => {
        e.target.title = e.detail.userName;
      },
      readonly: (e) => {
        e.target.disabled = e.detail.readonly;
      },
      required: (e) => {
        this._setRequired(e.target, e.detail.required);
      },
      bgColor: (e) => {
        t('bgColor', 'backgroundColor', e);
      },
      fillColor: (e) => {
        t('fillColor', 'backgroundColor', e);
      },
      fgColor: (e) => {
        t('fgColor', 'color', e);
      },
      textColor: (e) => {
        t('textColor', 'color', e);
      },
      borderColor: (e) => {
        t('borderColor', 'borderColor', e);
      },
      strokeColor: (e) => {
        t('strokeColor', 'borderColor', e);
      },
      rotation: (e) => {
        const i = e.detail.rotation;
        this.setRotation(i), this.annotationStorage.setValue(this.data.id, {
          rotation: i,
        });
      },
    });
  }

  _dispatchEventFromSandbox(t, e) {
    const i = this._commonActions;
    for (const s of Object.keys(e.detail)) {
      const r = t[s] || i[s];
      r == null || r(e);
    }
  }

  _setDefaultPropertiesFromJS(t) {
    if (!this.enableScripting) return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e) return;
    const i = this._commonActions;
    for (const [s, r] of Object.entries(e)) {
      const a = i[s];
      if (a) {
        const o = {
          detail: {
            [s]: r,
          },
          target: t,
        };
        a(o), delete e[s];
      }
    }
  }

  _createQuadrilaterals() {
    if (!this.container) return;
    const {
      quadPoints: t,
    } = this.data;
    if (!t) return;
    const [e, i, s, r] = this.data.rect.map((S) => Math.fround(S));
    if (t.length === 8) {
      const [S, M, T, L] = t.subarray(2, 6);
      if (s === S && r === M && e === T && i === L) return;
    }
    const {
      style: a,
    } = this.container;
    let o;
    if (n(this, Tl)) {
      const {
        borderColor: S,
        borderWidth: M,
      } = a;
      a.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${S}" stroke-width="${M}">`], this.container.classList.add('hasBorder');
    }
    const l = s - e; const c = r - i; const {
      svgFactory: d,
    } = this; const
      u = d.createElement('svg');
    u.classList.add('quadrilateralsContainer'), u.setAttribute('width', 0), u.setAttribute('height', 0), u.role = 'none';
    const g = d.createElement('defs');
    u.append(g);
    const b = d.createElement('clipPath'); const
      E = `clippath_${this.data.id}`;
    b.setAttribute('id', E), b.setAttribute('clipPathUnits', 'objectBoundingBox'), g.append(b);
    for (let S = 2, M = t.length; S < M; S += 8) {
      const T = t[S]; const L = t[S + 1]; const R = t[S + 2]; const p = t[S + 3]; const f = d.createElement('rect'); const y = (R - e) / l; const _ = (r - L) / c; const P = (T - R) / l; const
        k = (L - p) / c;
      f.setAttribute('x', y), f.setAttribute('y', _), f.setAttribute('width', P), f.setAttribute('height', k), b.append(f), o == null || o.push(`<rect vector-effect="non-scaling-stroke" x="${y}" y="${_}" width="${P}" height="${k}"/>`);
    }
    n(this, Tl) && (o.push("</g></svg>')"), a.backgroundImage = o.join('')), this.container.append(u), this.container.style.clipPath = `url(#${E})`;
  }

  _createPopup(t = null) {
    const {
      data: e,
    } = this;
    let i; let
      s;
    t ? (i = {
      str: t.text,
    }, s = t.date) : (i = e.contentsObj, s = e.modificationDate);
    const r = m(this, zi, new Lp({
      data: {
        color: e.color,
        titleObj: e.titleObj,
        modificationDate: s,
        contentsObj: i,
        richText: e.richText,
        parentRect: e.rect,
        borderStyle: 0,
        id: `popup_${e.id}`,
        rotation: e.rotation,
        noRotate: !0,
      },
      linkService: this.linkService,
      parent: this.parent,
      elements: [this],
    }));
    this.parent._commentManager || this.parent.div.append(r.render());
  }

  get hasPopupElement() {
    return !!(n(this, zi) || this.popup || this.data.popupRef);
  }

  get extraPopupElement() {
    return n(this, zi);
  }

  render() {
    zt('Abstract method `AnnotationElement.render` called');
  }

  _getElementsByName(t, e = null) {
    const i = [];
    if (this._fieldObjects) {
      const s = this._fieldObjects[t];
      if (s) {
        for (const {
          page: r,
          id: a,
          exportValues: o,
        } of s) {
          if (r === -1 || a === e) continue;
          const l = typeof o === 'string' ? o : null; const
            c = document.querySelector(`[data-element-id="${a}"]`);
          if (c && !ao.has(c)) {
            pt(`_getElementsByName - element not allowed: ${a}`);
            continue;
          }
          i.push({
            id: a,
            exportValue: l,
            domElement: c,
          });
        }
      }
      return i;
    }
    for (const s of document.getElementsByName(t)) {
      const {
        exportValue: r,
      } = s; const
        a = s.getAttribute('data-element-id');
      a !== e && ao.has(s) && i.push({
        id: a,
        exportValue: r,
        domElement: s,
      });
    }
    return i;
  }

  show() {
    let t;
    this.container && (this.container.hidden = !1), (t = this.popup) == null || t.maybeShow();
  }

  hide() {
    let t;
    this.container && (this.container.hidden = !0), (t = this.popup) == null || t.forceHide();
  }

  getElementsToTriggerPopup() {
    return this.container;
  }

  addHighlightArea() {
    const t = this.getElementsToTriggerPopup();
    if (Array.isArray(t)) for (const e of t) e.classList.add('highlightArea');
    else t.classList.add('highlightArea');
  }

  _editOnDoubleClick() {
    if (!this._isEditable) return;
    const {
      annotationEditorType: t,
      data: {
        id: e,
      },
    } = this;
    this.container.addEventListener('dblclick', () => {
      let i;
      (i = this.linkService.eventBus) == null || i.dispatch('switchannotationeditormode', {
        source: this,
        mode: t,
        editId: e,
        mustEnterInEditMode: !0,
      });
    });
  }

  get width() {
    return this.data.rect[2] - this.data.rect[0];
  }

  get height() {
    return this.data.rect[3] - this.data.rect[1];
  }
};
Oa = new WeakMap(), Tl = new WeakMap(), zi = new WeakMap(), Jc = new WeakSet(), Mp = function (t) {
  const {
    container: {
      style: e,
    },
    data: {
      rect: i,
      rotation: s,
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth: r,
          pageHeight: a,
          pageX: o,
          pageY: l,
        },
      },
    },
  } = this;
  i == null || i.splice(0, 4, ...t), e.left = `${100 * (t[0] - o) / r}%`, e.top = `${100 * (a - t[3] + l) / a}%`, s === 0 ? (e.width = `${100 * (t[2] - t[0]) / r}%`, e.height = `${100 * (t[3] - t[1]) / a}%`) : this.setRotation(s);
};
let Jt = Ng;
class F0 extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
    }), this.editor = t.editor;
  }

  render() {
    return this.container.className = 'editorAnnotation', this.container;
  }

  createOrUpdatePopup() {
    const {
      editor: t,
    } = this;
    t.hasComment && (this._createPopup(t.comment), this.extraPopupElement.popup.renderCommentButton());
  }

  get hasCommentButton() {
    return this.enableComment && this.editor.hasComment;
  }

  get commentButtonPosition() {
    return this.editor.commentButtonPositionInPage;
  }

  get commentText() {
    return this.editor.comment.text;
  }

  set commentText(t) {
    this.editor.comment = t, t || this.removePopup();
  }

  get commentData() {
    return this.editor.getData();
  }

  remove() {
    this.container.remove(), this.container = null, this.removePopup();
  }
}
let Ti; let $r; let cb; let
  db;
class Tg extends Jt {
  constructor(e, i = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(i != null && i.ignoreBorder),
      createQuadrilaterals: !0,
    });
    v(this, Ti);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }

  render() {
    const {
      data: e,
      linkService: i,
    } = this; const
      s = document.createElement('a');
    s.setAttribute('data-element-id', e.id);
    let r = !1;
    return e.url ? (i.addLinkAttributes(s, e.url, e.newWindow), r = !0) : e.action ? (this._bindNamedAction(s, e.action, e.overlaidText), r = !0) : e.attachment ? (A(this, Ti, cb).call(this, s, e.attachment, e.overlaidText, e.attachmentDest), r = !0) : e.setOCGState ? (A(this, Ti, db).call(this, s, e.setOCGState, e.overlaidText), r = !0) : e.dest ? (this._bindLink(s, e.dest, e.overlaidText), r = !0) : (e.actions && (e.actions.Action || e.actions['Mouse Up'] || e.actions['Mouse Down']) && this.enableScripting && this.hasJSActions && (this._bindJSAction(s, e), r = !0), e.resetForm ? (this._bindResetFormAction(s, e.resetForm), r = !0) : this.isTooltipOnly && !r && (this._bindLink(s, ''), r = !0)), this.container.classList.add('linkAnnotation'), r && this.container.append(s), this.container;
  }

  _bindLink(e, i, s = '') {
    e.href = this.linkService.getDestinationHash(i), e.onclick = () => (i && this.linkService.goToDestination(i), !1), (i || i === '') && A(this, Ti, $r).call(this), s && (e.title = s);
  }

  _bindNamedAction(e, i, s = '') {
    e.href = this.linkService.getAnchorUrl(''), e.onclick = () => (this.linkService.executeNamedAction(i), !1), s && (e.title = s), A(this, Ti, $r).call(this);
  }

  _bindJSAction(e, i) {
    e.href = this.linkService.getAnchorUrl('');
    const s = /* @__PURE__ */ new Map([['Action', 'onclick'], ['Mouse Up', 'onmouseup'], ['Mouse Down', 'onmousedown']]);
    for (const r of Object.keys(i.actions)) {
      const a = s.get(r);
      a && (e[a] = () => {
        let o;
        return (o = this.linkService.eventBus) == null || o.dispatch('dispatcheventinsandbox', {
          source: this,
          detail: {
            id: i.id,
            name: r,
          },
        }), !1;
      });
    }
    i.overlaidText && (e.title = i.overlaidText), e.onclick || (e.onclick = () => !1), A(this, Ti, $r).call(this);
  }

  _bindResetFormAction(e, i) {
    const s = e.onclick;
    if (s || (e.href = this.linkService.getAnchorUrl('')), A(this, Ti, $r).call(this), !this._fieldObjects) {
      pt('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), s || (e.onclick = () => !1);
      return;
    }
    e.onclick = () => {
      let u;
      s == null || s();
      const {
        fields: r,
        refs: a,
        include: o,
      } = i; const
        l = [];
      if (r.length !== 0 || a.length !== 0) {
        const g = new Set(a);
        for (const b of r) {
          const E = this._fieldObjects[b] || [];
          for (const {
            id: S,
          } of E) g.add(S);
        }
        for (const b of Object.values(this._fieldObjects)) for (const E of b) g.has(E.id) === o && l.push(E);
      } else for (const g of Object.values(this._fieldObjects)) l.push(...g);
      const c = this.annotationStorage; const
        d = [];
      for (const g of l) {
        const {
          id: b,
        } = g;
        switch (d.push(b), g.type) {
          case 'text': {
            const S = g.defaultValue || '';
            c.setValue(b, {
              value: S,
            });
            break;
          }
          case 'checkbox':
          case 'radiobutton': {
            const S = g.defaultValue === g.exportValues;
            c.setValue(b, {
              value: S,
            });
            break;
          }
          case 'combobox':
          case 'listbox': {
            const S = g.defaultValue || '';
            c.setValue(b, {
              value: S,
            });
            break;
          }
          default:
            continue;
        }
        const E = document.querySelector(`[data-element-id="${b}"]`);
        if (E) {
          if (!ao.has(E)) {
            pt(`_bindResetFormAction - element not allowed: ${b}`);
            continue;
          }
        } else continue;
        E.dispatchEvent(new Event('resetform'));
      }
      return this.enableScripting && ((u = this.linkService.eventBus) == null || u.dispatch('dispatcheventinsandbox', {
        source: this,
        detail: {
          id: 'app',
          ids: d,
          name: 'ResetForm',
        },
      })), !1;
    };
  }
}
Ti = new WeakSet(), $r = function () {
  this.container.setAttribute('data-internal-link', '');
}, cb = function (e, i, s = '', r = null) {
  e.href = this.linkService.getAnchorUrl(''), i.description ? e.title = i.description : s && (e.title = s), e.onclick = () => {
    let a;
    return (a = this.downloadManager) == null || a.openOrDownloadData(i.content, i.filename, r), !1;
  }, A(this, Ti, $r).call(this);
}, db = function (e, i, s = '') {
  e.href = this.linkService.getAnchorUrl(''), e.onclick = () => (this.linkService.executeSetOCGState(i), !1), s && (e.title = s), A(this, Ti, $r).call(this);
};
class N0 extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
    });
  }

  render() {
    this.container.classList.add('textAnnotation');
    const t = document.createElement('img');
    return t.src = `${this.imageResourcesPath}annotation-${this.data.name.toLowerCase()}.svg`, t.setAttribute('data-l10n-id', 'pdfjs-text-annotation-type'), t.setAttribute('data-l10n-args', JSON.stringify({
      type: this.data.name,
    })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t), this.container;
  }
}
class ho extends Jt {
  render() {
    return this.container;
  }

  showElementAndHideCanvas(t) {
    let e;
    this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === 'CANVAS' && (t.previousSibling.hidden = !0), t.hidden = !1);
  }

  _getKeyModifier(t) {
    return _e.platform.isMac ? t.metaKey : t.ctrlKey;
  }

  _setEventListener(t, e, i, s, r) {
    i.includes('mouse') ? t.addEventListener(i, (a) => {
      let o;
      (o = this.linkService.eventBus) == null || o.dispatch('dispatcheventinsandbox', {
        source: this,
        detail: {
          id: this.data.id,
          name: s,
          value: r(a),
          shift: a.shiftKey,
          modifier: this._getKeyModifier(a),
        },
      });
    }) : t.addEventListener(i, (a) => {
      let o;
      if (i === 'blur') {
        if (!e.focused || !a.relatedTarget) return;
        e.focused = !1;
      } else if (i === 'focus') {
        if (e.focused) return;
        e.focused = !0;
      }
      r && ((o = this.linkService.eventBus) == null || o.dispatch('dispatcheventinsandbox', {
        source: this,
        detail: {
          id: this.data.id,
          name: s,
          value: r(a),
        },
      }));
    });
  }

  _setEventListeners(t, e, i, s) {
    let r; let a; let
      o;
    for (const [l, c] of i) {
      (c === 'Action' || (r = this.data.actions) != null && r[c]) && ((c === 'Focus' || c === 'Blur') && (e || (e = {
        focused: !1,
      })), this._setEventListener(t, e, l, c, s), c === 'Focus' && !((a = this.data.actions) != null && a.Blur) ? this._setEventListener(t, e, 'blur', 'Blur', null) : c === 'Blur' && !((o = this.data.actions) != null && o.Focus) && this._setEventListener(t, e, 'focus', 'Focus', null));
    }
  }

  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? 'transparent' : tt.makeHexColor(e[0], e[1], e[2]);
  }

  _setTextStyle(t) {
    const e = ['left', 'center', 'right']; const {
      fontColor: i,
    } = this.data.defaultAppearanceData; const s = this.data.defaultAppearanceData.fontSize || O0; const
      r = t.style;
    let a;
    const o = 2; const
      l = (c) => Math.round(10 * c) / 10;
    if (this.data.multiLine) {
      const c = Math.abs(this.data.rect[3] - this.data.rect[1] - o); const d = Math.round(c / (Rf * s)) || 1; const
        u = c / d;
      a = Math.min(s, l(u / Rf));
    } else {
      const c = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      a = Math.min(s, l(c / Rf));
    }
    r.fontSize = `calc(${a}px * var(--total-scale-factor))`, r.color = tt.makeHexColor(i[0], i[1], i[2]), this.data.textAlignment !== null && (r.textAlign = e[this.data.textAlignment]);
  }

  _setRequired(t, e) {
    e ? t.setAttribute('required', !0) : t.removeAttribute('required'), t.setAttribute('aria-required', e);
  }
}
class B0 extends ho {
  constructor(t) {
    const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, {
      isRenderable: e,
    });
  }

  setPropertyOnSiblings(t, e, i, s) {
    const r = this.annotationStorage;
    for (const a of this._getElementsByName(t.name, t.id)) {
      a.domElement && (a.domElement[e] = i), r.setValue(a.id, {
        [s]: i,
      });
    }
  }

  render() {
    let s; let
      r;
    const t = this.annotationStorage; const
      e = this.data.id;
    this.container.classList.add('textWidgetAnnotation');
    let i = null;
    if (this.renderForms) {
      const a = t.getValue(e, {
        value: this.data.fieldValue,
      });
      let o = a.value || '';
      const l = t.getValue(e, {
        charLimit: this.data.maxLen,
      }).charLimit;
      l && o.length > l && (o = o.slice(0, l));
      let c = a.formattedValue || ((s = this.data.textContent) == null ? void 0 : s.join(`
`)) || null;
      c && this.data.comb && (c = c.replaceAll(/\s+/g, ''));
      const d = {
        userValue: o,
        formattedValue: c,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1,
      };
      this.data.multiLine ? (i = document.createElement('textarea'), i.textContent = c ?? o, this.data.doNotScroll && (i.style.overflowY = 'hidden')) : (i = document.createElement('input'), i.type = this.data.password ? 'password' : 'text', i.setAttribute('value', c ?? o), this.data.doNotScroll && (i.style.overflowX = 'hidden')), this.data.hasOwnCanvas && (i.hidden = !0), ao.add(i), i.setAttribute('data-element-id', e), i.disabled = this.data.readOnly, i.name = this.data.fieldName, i.tabIndex = 0;
      const {
        datetimeFormat: u,
        datetimeType: g,
        timeStep: b,
      } = this.data; const
        E = !!g && this.enableScripting;
      u && (i.title = u), this._setRequired(i, this.data.required), l && (i.maxLength = l), i.addEventListener('input', (M) => {
        t.setValue(e, {
          value: M.target.value,
        }), this.setPropertyOnSiblings(i, 'value', M.target.value, 'value'), d.formattedValue = null;
      }), i.addEventListener('resetform', (M) => {
        const T = this.data.defaultFieldValue ?? '';
        i.value = d.userValue = T, d.formattedValue = null;
      });
      let S = (M) => {
        const {
          formattedValue: T,
        } = d;
        T != null && (M.target.value = T), M.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        i.addEventListener('focus', (T) => {
          let R;
          if (d.focused) return;
          const {
            target: L,
          } = T;
          if (E && (L.type = g, b && (L.step = b)), d.userValue) {
            const p = d.userValue;
            if (E) {
              if (g === 'time') {
                const f = new Date(p); const
                  y = [f.getHours(), f.getMinutes(), f.getSeconds()];
                L.value = y.map((_) => _.toString().padStart(2, '0')).join(':');
              } else L.value = new Date(p - I0).toISOString().split(g === 'date' ? 'T' : '.', 1)[0];
            } else L.value = p;
          }
          d.lastCommittedValue = L.value, d.commitKey = 1, (R = this.data.actions) != null && R.Focus || (d.focused = !0);
        }), i.addEventListener('updatefromsandbox', (T) => {
          this.showElementAndHideCanvas(T.target);
          const L = {
            value(R) {
              d.userValue = R.detail.value ?? '', E || t.setValue(e, {
                value: d.userValue.toString(),
              }), R.target.value = d.userValue;
            },
            formattedValue(R) {
              const {
                formattedValue: p,
              } = R.detail;
              d.formattedValue = p, p != null && R.target !== document.activeElement && (R.target.value = p);
              const f = {
                formattedValue: p,
              };
              E && (f.value = p), t.setValue(e, f);
            },
            selRange(R) {
              R.target.setSelectionRange(...R.detail.selRange);
            },
            charLimit: (R) => {
              let _;
              const {
                charLimit: p,
              } = R.detail; const
                {
                  target: f,
                } = R;
              if (p === 0) {
                f.removeAttribute('maxLength');
                return;
              }
              f.setAttribute('maxLength', p);
              let y = d.userValue;
              !y || y.length <= p || (y = y.slice(0, p), f.value = d.userValue = y, t.setValue(e, {
                value: y,
              }), (_ = this.linkService.eventBus) == null || _.dispatch('dispatcheventinsandbox', {
                source: this,
                detail: {
                  id: e,
                  name: 'Keystroke',
                  value: y,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: f.selectionStart,
                  selEnd: f.selectionEnd,
                },
              }));
            },
          };
          this._dispatchEventFromSandbox(L, T);
        }), i.addEventListener('keydown', (T) => {
          let p;
          d.commitKey = 1;
          let L = -1;
          if (T.key === 'Escape' ? L = 0 : T.key === 'Enter' && !this.data.multiLine ? L = 2 : T.key === 'Tab' && (d.commitKey = 3), L === -1) return;
          const {
            value: R,
          } = T.target;
          d.lastCommittedValue !== R && (d.lastCommittedValue = R, d.userValue = R, (p = this.linkService.eventBus) == null || p.dispatch('dispatcheventinsandbox', {
            source: this,
            detail: {
              id: e,
              name: 'Keystroke',
              value: R,
              willCommit: !0,
              commitKey: L,
              selStart: T.target.selectionStart,
              selEnd: T.target.selectionEnd,
            },
          }));
        });
        const M = S;
        S = null, i.addEventListener('blur', (T) => {
          let p; let
            f;
          if (!d.focused || !T.relatedTarget) return;
          (p = this.data.actions) != null && p.Blur || (d.focused = !1);
          const {
            target: L,
          } = T;
          let {
            value: R,
          } = L;
          if (E) {
            if (R && g === 'time') {
              const y = R.split(':').map((_) => parseInt(_, 10));
              R = new Date(2e3, 0, 1, y[0], y[1], y[2] || 0).valueOf(), L.step = '';
            } else R.includes('T') || (R = `${R}T00:00`), R = new Date(R).valueOf();
            L.type = 'text';
          }
          d.userValue = R, d.lastCommittedValue !== R && ((f = this.linkService.eventBus) == null || f.dispatch('dispatcheventinsandbox', {
            source: this,
            detail: {
              id: e,
              name: 'Keystroke',
              value: R,
              willCommit: !0,
              commitKey: d.commitKey,
              selStart: T.target.selectionStart,
              selEnd: T.target.selectionEnd,
            },
          })), M(T);
        }), (r = this.data.actions) != null && r.Keystroke && i.addEventListener('beforeinput', (T) => {
          let k;
          d.lastCommittedValue = null;
          const {
            data: L,
            target: R,
          } = T; const
            {
              value: p,
              selectionStart: f,
              selectionEnd: y,
            } = R;
          let _ = f; let
            P = y;
          switch (T.inputType) {
            case 'deleteWordBackward': {
              const C = p.substring(0, f).match(/\w*[^\w]*$/);
              C && (_ -= C[0].length);
              break;
            }
            case 'deleteWordForward': {
              const C = p.substring(f).match(/^[^\w]*\w*/);
              C && (P += C[0].length);
              break;
            }
            case 'deleteContentBackward':
              f === y && (_ -= 1);
              break;
            case 'deleteContentForward':
              f === y && (P += 1);
              break;
          }
          T.preventDefault(), (k = this.linkService.eventBus) == null || k.dispatch('dispatcheventinsandbox', {
            source: this,
            detail: {
              id: e,
              name: 'Keystroke',
              value: p,
              change: L || '',
              willCommit: !1,
              selStart: _,
              selEnd: P,
            },
          });
        }), this._setEventListeners(i, d, [['focus', 'Focus'], ['blur', 'Blur'], ['mousedown', 'Mouse Down'], ['mouseenter', 'Mouse Enter'], ['mouseleave', 'Mouse Exit'], ['mouseup', 'Mouse Up']], (T) => T.target.value);
      }
      if (S && i.addEventListener('blur', S), this.data.comb) {
        const T = (this.data.rect[2] - this.data.rect[0]) / l;
        i.classList.add('comb'), i.style.letterSpacing = `calc(${T}px * var(--total-scale-factor) - 1ch)`;
      }
    } else i = document.createElement('div'), i.textContent = this.data.fieldValue, i.style.verticalAlign = 'middle', i.style.display = 'table-cell', this.data.hasOwnCanvas && (i.hidden = !0);
    return this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
  }
}
class H0 extends ho {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas,
    });
  }
}
class j0 extends ho {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms,
    });
  }

  render() {
    const t = this.annotationStorage; const e = this.data; const
      i = e.id;
    let s = t.getValue(i, {
      value: e.exportValue === e.fieldValue,
    }).value;
    typeof s === 'string' && (s = s !== 'Off', t.setValue(i, {
      value: s,
    })), this.container.classList.add('buttonWidgetAnnotation', 'checkBox');
    const r = document.createElement('input');
    return ao.add(r), r.setAttribute('data-element-id', i), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = 'checkbox', r.name = e.fieldName, s && r.setAttribute('checked', !0), r.setAttribute('exportValue', e.exportValue), r.tabIndex = 0, r.addEventListener('change', (a) => {
      const {
        name: o,
        checked: l,
      } = a.target;
      for (const c of this._getElementsByName(o, i)) {
        const d = l && c.exportValue === e.exportValue;
        c.domElement && (c.domElement.checked = d), t.setValue(c.id, {
          value: d,
        });
      }
      t.setValue(i, {
        value: l,
      });
    }), r.addEventListener('resetform', (a) => {
      const o = e.defaultFieldValue || 'Off';
      a.target.checked = o === e.exportValue;
    }), this.enableScripting && this.hasJSActions && (r.addEventListener('updatefromsandbox', (a) => {
      const o = {
        value(l) {
          l.target.checked = l.detail.value !== 'Off', t.setValue(i, {
            value: l.target.checked,
          });
        },
      };
      this._dispatchEventFromSandbox(o, a);
    }), this._setEventListeners(r, null, [['change', 'Validate'], ['change', 'Action'], ['focus', 'Focus'], ['blur', 'Blur'], ['mousedown', 'Mouse Down'], ['mouseenter', 'Mouse Enter'], ['mouseleave', 'Mouse Exit'], ['mouseup', 'Mouse Up']], (a) => a.target.checked)), this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class ub extends ho {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms,
    });
  }

  render() {
    this.container.classList.add('buttonWidgetAnnotation', 'radioButton');
    const t = this.annotationStorage; const e = this.data; const
      i = e.id;
    let s = t.getValue(i, {
      value: e.fieldValue === e.buttonValue,
    }).value;
    if (typeof s === 'string' && (s = s !== e.buttonValue, t.setValue(i, {
      value: s,
    })), s) {
      for (const a of this._getElementsByName(e.fieldName, i)) {
        t.setValue(a.id, {
          value: !1,
        });
      }
    }
    const r = document.createElement('input');
    if (ao.add(r), r.setAttribute('data-element-id', i), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = 'radio', r.name = e.fieldName, s && r.setAttribute('checked', !0), r.tabIndex = 0, r.addEventListener('change', (a) => {
      const {
        name: o,
        checked: l,
      } = a.target;
      for (const c of this._getElementsByName(o, i)) {
        t.setValue(c.id, {
          value: !1,
        });
      }
      t.setValue(i, {
        value: l,
      });
    }), r.addEventListener('resetform', (a) => {
      const o = e.defaultFieldValue;
      a.target.checked = o != null && o === e.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const a = e.buttonValue;
      r.addEventListener('updatefromsandbox', (o) => {
        const l = {
          value: (c) => {
            const d = a === c.detail.value;
            for (const u of this._getElementsByName(c.target.name)) {
              const g = d && u.id === i;
              u.domElement && (u.domElement.checked = g), t.setValue(u.id, {
                value: g,
              });
            }
          },
        };
        this._dispatchEventFromSandbox(l, o);
      }), this._setEventListeners(r, null, [['change', 'Validate'], ['change', 'Action'], ['focus', 'Focus'], ['blur', 'Blur'], ['mousedown', 'Mouse Down'], ['mouseenter', 'Mouse Enter'], ['mouseleave', 'Mouse Exit'], ['mouseup', 'Mouse Up']], (o) => o.target.checked);
    }
    return this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class z0 extends Tg {
  constructor(t) {
    super(t, {
      ignoreBorder: t.data.hasAppearance,
    });
  }

  render() {
    const t = super.render();
    t.classList.add('buttonWidgetAnnotation', 'pushButton');
    const e = t.lastChild;
    return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener('updatefromsandbox', (i) => {
      this._dispatchEventFromSandbox({}, i);
    })), t;
  }
}
class U0 extends ho {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms,
    });
  }

  render() {
    this.container.classList.add('choiceWidgetAnnotation');
    const t = this.annotationStorage; const e = this.data.id; const i = t.getValue(e, {
      value: this.data.fieldValue,
    }); const
      s = document.createElement('select');
    ao.add(s), s.setAttribute('data-element-id', e), s.disabled = this.data.readOnly, this._setRequired(s, this.data.required), s.name = this.data.fieldName, s.tabIndex = 0;
    let r = this.data.combo && this.data.options.length > 0;
    this.data.combo || (s.size = this.data.options.length, this.data.multiSelect && (s.multiple = !0)), s.addEventListener('resetform', (d) => {
      const u = this.data.defaultFieldValue;
      for (const g of s.options) g.selected = g.value === u;
    });
    for (const d of this.data.options) {
      const u = document.createElement('option');
      u.textContent = d.displayValue, u.value = d.exportValue, i.value.includes(d.exportValue) && (u.setAttribute('selected', !0), r = !1), s.append(u);
    }
    let a = null;
    if (r) {
      const d = document.createElement('option');
      d.value = ' ', d.setAttribute('hidden', !0), d.setAttribute('selected', !0), s.prepend(d), a = () => {
        d.remove(), s.removeEventListener('input', a), a = null;
      }, s.addEventListener('input', a);
    }
    const o = (d) => {
      const u = d ? 'value' : 'textContent';
      const {
        options: g,
        multiple: b,
      } = s;
      return b ? Array.prototype.filter.call(g, (E) => E.selected).map((E) => E[u]) : g.selectedIndex === -1 ? null : g[g.selectedIndex][u];
    };
    let l = o(!1);
    const c = (d) => {
      const u = d.target.options;
      return Array.prototype.map.call(u, (g) => ({
        displayValue: g.textContent,
        exportValue: g.value,
      }));
    };
    return this.enableScripting && this.hasJSActions ? (s.addEventListener('updatefromsandbox', (d) => {
      const u = {
        value(g) {
          a == null || a();
          const b = g.detail.value; const
            E = new Set(Array.isArray(b) ? b : [b]);
          for (const S of s.options) S.selected = E.has(S.value);
          t.setValue(e, {
            value: o(!0),
          }), l = o(!1);
        },
        multipleSelection(g) {
          s.multiple = !0;
        },
        remove(g) {
          const b = s.options; const
            E = g.detail.remove;
          b[E].selected = !1, s.remove(E), b.length > 0 && Array.prototype.findIndex.call(b, (M) => M.selected) === -1 && (b[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: c(g),
          }), l = o(!1);
        },
        clear(g) {
          for (; s.length !== 0;) s.remove(0);
          t.setValue(e, {
            value: null,
            items: [],
          }), l = o(!1);
        },
        insert(g) {
          const {
            index: b,
            displayValue: E,
            exportValue: S,
          } = g.detail.insert; const M = s.children[b]; const
            T = document.createElement('option');
          T.textContent = E, T.value = S, M ? M.before(T) : s.append(T), t.setValue(e, {
            value: o(!0),
            items: c(g),
          }), l = o(!1);
        },
        items(g) {
          const {
            items: b,
          } = g.detail;
          for (; s.length !== 0;) s.remove(0);
          for (const E of b) {
            const {
              displayValue: S,
              exportValue: M,
            } = E; const
              T = document.createElement('option');
            T.textContent = S, T.value = M, s.append(T);
          }
          s.options.length > 0 && (s.options[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: c(g),
          }), l = o(!1);
        },
        indices(g) {
          const b = new Set(g.detail.indices);
          for (const E of g.target.options) E.selected = b.has(E.index);
          t.setValue(e, {
            value: o(!0),
          }), l = o(!1);
        },
        editable(g) {
          g.target.disabled = !g.detail.editable;
        },
      };
      this._dispatchEventFromSandbox(u, d);
    }), s.addEventListener('input', (d) => {
      let b;
      const u = o(!0); const
        g = o(!1);
      t.setValue(e, {
        value: u,
      }), d.preventDefault(), (b = this.linkService.eventBus) == null || b.dispatch('dispatcheventinsandbox', {
        source: this,
        detail: {
          id: e,
          name: 'Keystroke',
          value: l,
          change: g,
          changeEx: u,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1,
        },
      });
    }), this._setEventListeners(s, null, [['focus', 'Focus'], ['blur', 'Blur'], ['mousedown', 'Mouse Down'], ['mouseenter', 'Mouse Enter'], ['mouseleave', 'Mouse Exit'], ['mouseup', 'Mouse Up'], ['input', 'Action'], ['input', 'Validate']], (d) => d.target.value)) : s.addEventListener('input', (d) => {
      t.setValue(e, {
        value: o(!0),
      });
    }), this.data.combo && this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
let Qc; let
  Dp;
class Lp extends Jt {
  constructor(e) {
    const {
      data: i,
      elements: s,
      parent: r,
    } = e; const
      a = !!r._commentManager;
    super(e, {
      isRenderable: !a && Jt._hasPopupData(i),
    });
    v(this, Qc);
    if (this.elements = s, a && Jt._hasPopupData(i)) {
      const o = this.popup = A(this, Qc, Dp).call(this);
      for (const l of s) l.popup = o;
    } else this.popup = null;
  }

  render() {
    const {
      container: e,
    } = this;
    e.classList.add('popupAnnotation'), e.role = 'comment';
    const i = this.popup = A(this, Qc, Dp).call(this); const
      s = [];
    for (const r of this.elements) r.popup = i, r.container.ariaHasPopup = 'dialog', s.push(r.data.id), r.addHighlightArea();
    return this.container.setAttribute('aria-controls', s.map((r) => `${vg}${r}`).join(',')), this.container;
  }
}
Qc = new WeakSet(), Dp = function () {
  return new $0({
    container: this.container,
    color: this.data.color,
    titleObj: this.data.titleObj,
    modificationDate: this.data.modificationDate || this.data.creationDate,
    contentsObj: this.data.contentsObj,
    richText: this.data.richText,
    rect: this.data.rect,
    parentRect: this.data.parentRect || null,
    parent: this.parent,
    elements: this.elements,
    open: this.data.open,
    commentManager: this.parent._commentManager,
  });
};
let pi; let pr; let tf; let ef; let Pl; let kl; let te; let Ms; let gr; let Ia; let Rl; let Ml; let Ls; let gi; let wn; let Sn; let ye; let An; let mr; let Zc; let _n; let Ll; let Fa; let yr; let He; let br; let vt; let hu; let Op; let Ip; let Fp; let cu; let Np; let fb; let pb; let gb; let mb; let du; let uu; let
  Bp;
class $0 {
  constructor({
    container: t,
    color: e,
    elements: i,
    titleObj: s,
    modificationDate: r,
    contentsObj: a,
    richText: o,
    parent: l,
    rect: c,
    parentRect: d,
    open: u,
    commentManager: g = null,
  }) {
    v(this, vt);
    v(this, pi, null);
    v(this, pr, A(this, vt, gb).bind(this));
    v(this, tf, A(this, vt, Bp).bind(this));
    v(this, ef, A(this, vt, uu).bind(this));
    v(this, Pl, A(this, vt, du).bind(this));
    v(this, kl, null);
    v(this, te, null);
    v(this, Ms, null);
    v(this, gr, null);
    v(this, Ia, null);
    v(this, Rl, null);
    v(this, Ml, null);
    v(this, Ls, !1);
    v(this, gi, null);
    v(this, wn, null);
    v(this, Sn, null);
    v(this, ye, null);
    v(this, An, null);
    v(this, mr, null);
    v(this, Zc, null);
    v(this, _n, null);
    v(this, Ll, null);
    v(this, Fa, null);
    v(this, yr, !1);
    v(this, He, null);
    v(this, br, null);
    m(this, te, t), m(this, Ll, s), m(this, Ms, a), m(this, _n, o), m(this, Rl, l), m(this, kl, e), m(this, Zc, c), m(this, Ml, d), m(this, Ia, i), m(this, pi, g), m(this, He, i[0]), m(this, gr, Uh.toDateObject(r)), this.trigger = i.flatMap((b) => b.getElementsToTriggerPopup()), g ? this.renderCommentButton() : (A(this, vt, hu).call(this), n(this, te).hidden = !0, u && A(this, vt, du).call(this));
  }

  renderCommentButton() {
    if (n(this, ye) || (n(this, An) || A(this, vt, Op).call(this), !n(this, An))) return;
    const {
      signal: t,
    } = m(this, wn, new AbortController()); const e = !!n(this, He).extraPopupElement; const i = () => {
      n(this, pi).toggleCommentPopup(this, !0, void 0, !e);
    }; const s = () => {
      n(this, pi).toggleCommentPopup(this, !1, !0, !e);
    }; const
      r = () => {
        n(this, pi).toggleCommentPopup(this, !1, !1);
      };
    if (e) {
      m(this, ye, n(this, He).container);
      for (const a of this.trigger) {
        a.ariaHasPopup = 'dialog', a.ariaControls = 'commentPopup', a.addEventListener('keydown', n(this, pr), {
          signal: t,
        }), a.addEventListener('click', i, {
          signal: t,
        }), a.addEventListener('pointerenter', s, {
          signal: t,
        }), a.addEventListener('pointerleave', r, {
          signal: t,
        }), a.classList.add('popupTriggerArea');
      }
    } else {
      const a = m(this, ye, document.createElement('button'));
      a.className = 'annotationCommentButton';
      const o = n(this, He).container;
      a.style.zIndex = o.style.zIndex + 1, a.tabIndex = 0, a.ariaHasPopup = 'dialog', a.ariaControls = 'commentPopup', a.setAttribute('data-l10n-id', 'pdfjs-show-comment-button'), A(this, vt, Fp).call(this), A(this, vt, Ip).call(this), a.addEventListener('keydown', n(this, pr), {
        signal: t,
      }), a.addEventListener('click', i, {
        signal: t,
      }), a.addEventListener('pointerenter', s, {
        signal: t,
      }), a.addEventListener('pointerleave', r, {
        signal: t,
      }), o.after(a);
    }
  }

  get commentButtonColor() {
    const {
      color: t,
      opacity: e,
    } = n(this, He).commentData;
    return t ? n(this, Rl)._commentManager.makeCommentColor(t, e) : null;
  }

  focusCommentButton() {
    setTimeout(() => {
      let t;
      (t = n(this, ye)) == null || t.focus();
    }, 0);
  }

  getData() {
    const {
      richText: t,
      color: e,
      opacity: i,
      creationDate: s,
      modificationDate: r,
    } = n(this, He).commentData;
    return {
      contentsObj: {
        str: this.comment,
      },
      richText: t,
      color: e,
      opacity: i,
      creationDate: s,
      modificationDate: r,
    };
  }

  get elementBeforePopup() {
    return n(this, ye);
  }

  get comment() {
    return n(this, br) || m(this, br, n(this, He).commentText), n(this, br);
  }

  set comment(t) {
    t !== this.comment && (n(this, He).commentText = m(this, br, t));
  }

  get parentBoundingClientRect() {
    return n(this, He).layer.getBoundingClientRect();
  }

  setCommentButtonStates({
    selected: t,
    hasPopup: e,
  }) {
    n(this, ye) && (n(this, ye).classList.toggle('selected', t), n(this, ye).ariaExpanded = e);
  }

  setSelectedCommentButton(t) {
    n(this, ye).classList.toggle('selected', t);
  }

  get commentPopupPosition() {
    if (n(this, mr)) return n(this, mr);
    const {
      x: t,
      y: e,
      height: i,
    } = n(this, ye).getBoundingClientRect(); const
      {
        x: s,
        y: r,
        width: a,
        height: o,
      } = n(this, He).layer.getBoundingClientRect();
    return [(t - s) / a, (e + i - r) / o];
  }

  set commentPopupPosition(t) {
    m(this, mr, t);
  }

  hasDefaultPopupPosition() {
    return n(this, mr) === null;
  }

  get commentButtonPosition() {
    return n(this, An);
  }

  get commentButtonWidth() {
    return n(this, ye).getBoundingClientRect().width / this.parentBoundingClientRect.width;
  }

  editComment(t) {
    const [e, i] = n(this, mr) || this.commentButtonPosition.map((c) => c / 100); const s = this.parentBoundingClientRect; const
      {
        x: r,
        y: a,
        width: o,
        height: l,
      } = s;
    n(this, pi).showDialog(null, this, r + e * o, a + i * l, {
      ...t,
      parentDimensions: s,
    });
  }

  render() {
    let i; let
      s;
    if (n(this, gi)) return;
    const t = m(this, gi, document.createElement('div'));
    if (t.className = 'popup', n(this, kl)) {
      const r = t.style.outlineColor = tt.makeHexColor(...n(this, kl));
      t.style.backgroundColor = `color-mix(in srgb, ${r} 30%, white)`;
    }
    const e = document.createElement('span');
    if (e.className = 'header', (i = n(this, Ll)) != null && i.str) {
      const r = document.createElement('span');
      r.className = 'title', e.append(r), {
        dir: r.dir,
        str: r.textContent,
      } = n(this, Ll);
    }
    if (t.append(e), n(this, gr)) {
      const r = document.createElement('time');
      r.className = 'popupDate', r.setAttribute('data-l10n-id', 'pdfjs-annotation-date-time-string'), r.setAttribute('data-l10n-args', JSON.stringify({
        dateObj: n(this, gr).valueOf(),
      })), r.dateTime = n(this, gr).toISOString(), e.append(r);
    }
    Sg({
      html: n(this, vt, cu) || n(this, Ms).str,
      dir: (s = n(this, Ms)) == null ? void 0 : s.dir,
      className: 'popupContent',
    }, t), n(this, te).append(t);
  }

  updateEdited({
    rect: t,
    popup: e,
    deleted: i,
  }) {
    let s;
    if (n(this, pi)) {
      i ? (this.remove(), m(this, br, null)) : e && (e.deleted ? this.remove() : (A(this, vt, Fp).call(this), m(this, br, e.text))), t && (m(this, An, null), A(this, vt, Op).call(this), A(this, vt, Ip).call(this));
      return;
    }
    if (i || e != null && e.deleted) {
      this.remove();
      return;
    }
    A(this, vt, hu).call(this), n(this, Fa) || m(this, Fa, {
      contentsObj: n(this, Ms),
      richText: n(this, _n),
    }), t && m(this, Sn, null), e && e.text && (m(this, _n, A(this, vt, pb).call(this, e.text)), m(this, gr, Uh.toDateObject(e.date)), m(this, Ms, null)), (s = n(this, gi)) == null || s.remove(), m(this, gi, null);
  }

  resetEdited() {
    let t;
    n(this, Fa) && ({
      contentsObj: de(this, Ms)._,
      richText: de(this, _n)._,
    } = n(this, Fa), m(this, Fa, null), (t = n(this, gi)) == null || t.remove(), m(this, gi, null), m(this, Sn, null));
  }

  remove() {
    let t; let e; let
      i;
    if ((t = n(this, wn)) == null || t.abort(), m(this, wn, null), (e = n(this, gi)) == null || e.remove(), m(this, gi, null), m(this, yr, !1), m(this, Ls, !1), (i = n(this, ye)) == null || i.remove(), m(this, ye, null), this.trigger) for (const s of this.trigger) s.classList.remove('popupTriggerArea');
  }

  forceHide() {
    m(this, yr, this.isVisible), n(this, yr) && (n(this, te).hidden = !0);
  }

  maybeShow() {
    n(this, pi) || (A(this, vt, hu).call(this), n(this, yr) && (n(this, gi) || A(this, vt, uu).call(this), m(this, yr, !1), n(this, te).hidden = !1));
  }

  get isVisible() {
    return n(this, pi) ? !1 : n(this, te).hidden === !1;
  }
}
pi = new WeakMap(), pr = new WeakMap(), tf = new WeakMap(), ef = new WeakMap(), Pl = new WeakMap(), kl = new WeakMap(), te = new WeakMap(), Ms = new WeakMap(), gr = new WeakMap(), Ia = new WeakMap(), Rl = new WeakMap(), Ml = new WeakMap(), Ls = new WeakMap(), gi = new WeakMap(), wn = new WeakMap(), Sn = new WeakMap(), ye = new WeakMap(), An = new WeakMap(), mr = new WeakMap(), Zc = new WeakMap(), _n = new WeakMap(), Ll = new WeakMap(), Fa = new WeakMap(), yr = new WeakMap(), He = new WeakMap(), br = new WeakMap(), vt = new WeakSet(), hu = function () {
  let e;
  if (n(this, wn)) return;
  m(this, wn, new AbortController());
  const {
    signal: t,
  } = n(this, wn);
  for (const i of this.trigger) {
    i.addEventListener('click', n(this, Pl), {
      signal: t,
    }), i.addEventListener('pointerenter', n(this, ef), {
      signal: t,
    }), i.addEventListener('pointerleave', n(this, tf), {
      signal: t,
    }), i.classList.add('popupTriggerArea');
  }
  for (const i of n(this, Ia)) {
    (e = i.container) == null || e.addEventListener('keydown', n(this, pr), {
      signal: t,
    });
  }
}, Op = function () {
  const t = n(this, Ia).find((e) => e.hasCommentButton);
  t && m(this, An, t._normalizePoint(t.commentButtonPosition));
}, Ip = function () {
  if (n(this, He).extraPopupElement && !n(this, He).editor) return;
  this.renderCommentButton();
  const [t, e] = n(this, An); const
    {
      style: i,
    } = n(this, ye);
  i.left = `calc(${t}%)`, i.top = `calc(${e}% - var(--comment-button-dim))`;
}, Fp = function () {
  n(this, He).extraPopupElement || (this.renderCommentButton(), n(this, ye).style.backgroundColor = this.commentButtonColor || '');
}, cu = function () {
  const t = n(this, _n); const
    e = n(this, Ms);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && n(this, _n).html || null;
}, Np = function () {
  let t; let e; let
    i;
  return ((i = (e = (t = n(this, vt, cu)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : i.fontSize) || 0;
}, fb = function () {
  let t; let e; let
    i;
  return ((i = (e = (t = n(this, vt, cu)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : i.color) || null;
}, pb = function (t) {
  const e = []; const i = {
    str: t,
    html: {
      name: 'div',
      attributes: {
        dir: 'auto',
      },
      children: [{
        name: 'p',
        children: e,
      }],
    },
  }; const
    s = {
      style: {
        color: n(this, vt, fb),
        fontSize: n(this, vt, Np) ? `calc(${n(this, vt, Np)}px * var(--total-scale-factor))` : '',
      },
    };
  for (const r of t.split(`
`)) {
    e.push({
      name: 'span',
      value: r,
      attributes: s,
    });
  }
  return i;
}, gb = function (t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === 'Enter' || t.key === 'Escape' && n(this, Ls)) && A(this, vt, du).call(this);
}, mb = function () {
  if (n(this, Sn) !== null) return;
  const {
    page: {
      view: t,
    },
    viewport: {
      rawDims: {
        pageWidth: e,
        pageHeight: i,
        pageX: s,
        pageY: r,
      },
    },
  } = n(this, Rl);
  let a = !!n(this, Ml); let
    o = a ? n(this, Ml) : n(this, Zc);
  for (const E of n(this, Ia)) {
    if (!o || tt.intersect(E.data.rect, o) !== null) {
      o = E.data.rect, a = !0;
      break;
    }
  }
  const l = tt.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]); const d = a ? o[2] - o[0] + 5 : 0; const u = l[0] + d; const
    g = l[1];
  m(this, Sn, [100 * (u - s) / e, 100 * (g - r) / i]);
  const {
    style: b,
  } = n(this, te);
  b.left = `${n(this, Sn)[0]}%`, b.top = `${n(this, Sn)[1]}%`;
}, du = function () {
  if (n(this, pi)) {
    n(this, pi).toggleCommentPopup(this, !1);
    return;
  }
  m(this, Ls, !n(this, Ls)), n(this, Ls) ? (A(this, vt, uu).call(this), n(this, te).addEventListener('click', n(this, Pl)), n(this, te).addEventListener('keydown', n(this, pr))) : (A(this, vt, Bp).call(this), n(this, te).removeEventListener('click', n(this, Pl)), n(this, te).removeEventListener('keydown', n(this, pr)));
}, uu = function () {
  n(this, gi) || this.render(), this.isVisible ? n(this, Ls) && n(this, te).classList.add('focused') : (A(this, vt, mb).call(this), n(this, te).hidden = !1, n(this, te).style.zIndex = parseInt(n(this, te).style.zIndex) + 1e3);
}, Bp = function () {
  n(this, te).classList.remove('focused'), !(n(this, Ls) || !this.isVisible) && (n(this, te).hidden = !0, n(this, te).style.zIndex = parseInt(n(this, te).style.zIndex) - 1e3);
};
class yb extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = ft.FREETEXT;
  }

  render() {
    if (this.container.classList.add('freeTextAnnotation'), this.textContent) {
      const t = document.createElement('div');
      t.classList.add('annotationTextContent'), t.setAttribute('role', 'comment');
      for (const e of this.textContent) {
        const i = document.createElement('span');
        i.textContent = e, t.append(i);
      }
      this.container.append(t);
    }
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
let td;
class W0 extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0,
    });
    v(this, td, null);
  }

  render() {
    this.container.classList.add('lineAnnotation');
    const {
      data: e,
      width: i,
      height: s,
    } = this; const r = this.svgFactory.create(i, s, !0); const
      a = m(this, td, this.svgFactory.createElement('svg:line'));
    return a.setAttribute('x1', e.rect[2] - e.lineCoordinates[0]), a.setAttribute('y1', e.rect[3] - e.lineCoordinates[1]), a.setAttribute('x2', e.rect[2] - e.lineCoordinates[2]), a.setAttribute('y2', e.rect[3] - e.lineCoordinates[3]), a.setAttribute('stroke-width', e.borderStyle.width || 1), a.setAttribute('stroke', 'transparent'), a.setAttribute('fill', 'transparent'), r.append(a), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }

  getElementsToTriggerPopup() {
    return n(this, td);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
td = new WeakMap();
let ed;
class G0 extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0,
    });
    v(this, ed, null);
  }

  render() {
    this.container.classList.add('squareAnnotation');
    const {
      data: e,
      width: i,
      height: s,
    } = this; const r = this.svgFactory.create(i, s, !0); const a = e.borderStyle.width; const
      o = m(this, ed, this.svgFactory.createElement('svg:rect'));
    return o.setAttribute('x', a / 2), o.setAttribute('y', a / 2), o.setAttribute('width', i - a), o.setAttribute('height', s - a), o.setAttribute('stroke-width', a || 1), o.setAttribute('stroke', 'transparent'), o.setAttribute('fill', 'transparent'), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }

  getElementsToTriggerPopup() {
    return n(this, ed);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
ed = new WeakMap();
let id;
class V0 extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0,
    });
    v(this, id, null);
  }

  render() {
    this.container.classList.add('circleAnnotation');
    const {
      data: e,
      width: i,
      height: s,
    } = this; const r = this.svgFactory.create(i, s, !0); const a = e.borderStyle.width; const
      o = m(this, id, this.svgFactory.createElement('svg:ellipse'));
    return o.setAttribute('cx', i / 2), o.setAttribute('cy', s / 2), o.setAttribute('rx', i / 2 - a / 2), o.setAttribute('ry', s / 2 - a / 2), o.setAttribute('stroke-width', a || 1), o.setAttribute('stroke', 'transparent'), o.setAttribute('fill', 'transparent'), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }

  getElementsToTriggerPopup() {
    return n(this, id);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
id = new WeakMap();
let sd;
class bb extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0,
    });
    v(this, sd, null);
    this.containerClassName = 'polylineAnnotation', this.svgElementName = 'svg:polyline';
  }

  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        vertices: i,
        borderStyle: s,
        popupRef: r,
      },
      width: a,
      height: o,
    } = this;
    if (!i) return this.container;
    const l = this.svgFactory.create(a, o, !0);
    let c = [];
    for (let u = 0, g = i.length; u < g; u += 2) {
      const b = i[u] - e[0]; const
        E = e[3] - i[u + 1];
      c.push(`${b},${E}`);
    }
    c = c.join(' ');
    const d = m(this, sd, this.svgFactory.createElement(this.svgElementName));
    return d.setAttribute('points', c), d.setAttribute('stroke-width', s.width || 1), d.setAttribute('stroke', 'transparent'), d.setAttribute('fill', 'transparent'), l.append(d), this.container.append(l), !r && this.hasPopupData && this._createPopup(), this.container;
  }

  getElementsToTriggerPopup() {
    return n(this, sd);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
sd = new WeakMap();
class q0 extends bb {
  constructor(t) {
    super(t), this.containerClassName = 'polygonAnnotation', this.svgElementName = 'svg:polygon';
  }
}
class X0 extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
    });
  }

  render() {
    return this.container.classList.add('caretAnnotation'), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
let nd; let Na; let rd; let
  Hp;
class Pg extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0,
    });
    v(this, rd);
    v(this, nd, null);
    v(this, Na, []);
    this.containerClassName = 'inkAnnotation', this.svgElementName = 'svg:polyline', this.annotationEditorType = this.data.it === 'InkHighlight' ? ft.HIGHLIGHT : ft.INK;
  }

  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        rotation: i,
        inkLists: s,
        borderStyle: r,
        popupRef: a,
      },
    } = this; const {
      transform: o,
      width: l,
      height: c,
    } = A(this, rd, Hp).call(this, i, e); const d = this.svgFactory.create(l, c, !0); const
      u = m(this, nd, this.svgFactory.createElement('svg:g'));
    d.append(u), u.setAttribute('stroke-width', r.width || 1), u.setAttribute('stroke-linecap', 'round'), u.setAttribute('stroke-linejoin', 'round'), u.setAttribute('stroke-miterlimit', 10), u.setAttribute('stroke', 'transparent'), u.setAttribute('fill', 'transparent'), u.setAttribute('transform', o);
    for (let g = 0, b = s.length; g < b; g++) {
      const E = this.svgFactory.createElement(this.svgElementName);
      n(this, Na).push(E), E.setAttribute('points', s[g].join(',')), u.append(E);
    }
    return !a && this.hasPopupData && this._createPopup(), this.container.append(d), this._editOnDoubleClick(), this.container;
  }

  updateEdited(e) {
    super.updateEdited(e);
    const {
      thickness: i,
      points: s,
      rect: r,
    } = e; const
      a = n(this, nd);
    if (i >= 0 && a.setAttribute('stroke-width', i || 1), s) for (let o = 0, l = n(this, Na).length; o < l; o++) n(this, Na)[o].setAttribute('points', s[o].join(','));
    if (r) {
      const {
        transform: o,
        width: l,
        height: c,
      } = A(this, rd, Hp).call(this, this.data.rotation, r);
      a.parentElement.setAttribute('viewBox', `0 0 ${l} ${c}`), a.setAttribute('transform', o);
    }
  }

  getElementsToTriggerPopup() {
    return n(this, Na);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
nd = new WeakMap(), Na = new WeakMap(), rd = new WeakSet(), Hp = function (e, i) {
  switch (e) {
    case 90:
      return {
        transform: `rotate(90) translate(${-i[0]},${i[1]}) scale(1,-1)`,
        width: i[3] - i[1],
        height: i[2] - i[0],
      };
    case 180:
      return {
        transform: `rotate(180) translate(${-i[2]},${i[1]}) scale(1,-1)`,
        width: i[2] - i[0],
        height: i[3] - i[1],
      };
    case 270:
      return {
        transform: `rotate(270) translate(${-i[2]},${i[3]}) scale(1,-1)`,
        width: i[3] - i[1],
        height: i[2] - i[0],
      };
    default:
      return {
        transform: `translate(${-i[0]},${i[3]}) scale(1,-1)`,
        width: i[2] - i[0],
        height: i[3] - i[1],
      };
  }
};
class vb extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0,
    }), this.annotationEditorType = ft.HIGHLIGHT;
  }

  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e,
      },
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add('highlightAnnotation'), this._editOnDoubleClick(), t) {
      const i = document.createElement('mark');
      i.classList.add('overlaidText'), i.textContent = t, this.container.append(i);
    }
    return this.container;
  }
}
class Y0 extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0,
    });
  }

  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e,
      },
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add('underlineAnnotation'), t) {
      const i = document.createElement('u');
      i.classList.add('overlaidText'), i.textContent = t, this.container.append(i);
    }
    return this.container;
  }
}
class K0 extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0,
    });
  }

  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e,
      },
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add('squigglyAnnotation'), t) {
      const i = document.createElement('u');
      i.classList.add('overlaidText'), i.textContent = t, this.container.append(i);
    }
    return this.container;
  }
}
class J0 extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0,
    });
  }

  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e,
      },
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add('strikeoutAnnotation'), t) {
      const i = document.createElement('s');
      i.classList.add('overlaidText'), i.textContent = t, this.container.append(i);
    }
    return this.container;
  }
}
class wb extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
    }), this.annotationEditorType = ft.STAMP;
  }

  render() {
    return this.container.classList.add('stampAnnotation'), this.container.setAttribute('role', 'img'), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
let ad; let od; let
  jp;
class Q0 extends Jt {
  constructor(e) {
    let s;
    super(e, {
      isRenderable: !0,
    });
    v(this, od);
    v(this, ad, null);
    const {
      file: i,
    } = this.data;
    this.filename = i.filename, this.content = i.content, (s = this.linkService.eventBus) == null || s.dispatch('fileattachmentannotation', {
      source: this,
      ...i,
    });
  }

  render() {
    this.container.classList.add('fileAttachmentAnnotation');
    const {
      container: e,
      data: i,
    } = this;
    let s;
    i.hasAppearance || i.fillAlpha === 0 ? s = document.createElement('div') : (s = document.createElement('img'), s.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(i.name) ? 'paperclip' : 'pushpin'}.svg`, i.fillAlpha && i.fillAlpha < 1 && (s.style = `filter: opacity(${Math.round(i.fillAlpha * 100)}%);`)), s.addEventListener('dblclick', A(this, od, jp).bind(this)), m(this, ad, s);
    const {
      isMac: r,
    } = _e.platform;
    return e.addEventListener('keydown', (a) => {
      a.key === 'Enter' && (r ? a.metaKey : a.ctrlKey) && A(this, od, jp).call(this);
    }), !i.popupRef && this.hasPopupData ? this._createPopup() : s.classList.add('popupTriggerArea'), e.append(s), e;
  }

  getElementsToTriggerPopup() {
    return n(this, ad);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
ad = new WeakMap(), od = new WeakSet(), jp = function () {
  let e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
let Dl; let Ba; let Ol; let vr; let ld; let Ha; let Nr; let zp; let Up; let
  Il;
const kg = (Il = class {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: i,
    annotationEditorUIManager: s,
    page: r,
    viewport: a,
    structTreeLayer: o,
    commentManager: l,
    linkService: c,
    annotationStorage: d,
  }) {
    v(this, Nr);
    v(this, Dl, null);
    v(this, Ba, null);
    v(this, Ol, null);
    v(this, vr, /* @__PURE__ */ new Map());
    v(this, ld, null);
    v(this, Ha, null);
    this.div = t, m(this, Dl, e), m(this, Ba, i), m(this, ld, o || null), m(this, Ha, c || null), m(this, Ol, d || new Ag()), this.page = r, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = s, this._commentManager = l || null;
  }

  hasEditableAnnotations() {
    return n(this, vr).size > 0;
  }

  async render(t) {
    let a; let o; let
      l;
    const {
      annotations: e,
    } = t; const
      i = this.div;
    Or(i, this.viewport);
    const s = /* @__PURE__ */ new Map(); const
      r = {
        data: null,
        layer: i,
        linkService: n(this, Ha),
        downloadManager: t.downloadManager,
        imageResourcesPath: t.imageResourcesPath || '',
        renderForms: t.renderForms !== !1,
        svgFactory: new Vh(),
        annotationStorage: n(this, Ol),
        enableComment: t.enableComment === !0,
        enableScripting: t.enableScripting === !0,
        hasJSActions: t.hasJSActions,
        fieldObjects: t.fieldObjects,
        parent: this,
        elements: null,
      };
    for (const c of e) {
      if (c.noHTML) continue;
      const d = c.annotationType === se.POPUP;
      if (d) {
        const b = s.get(c.id);
        if (!b) continue;
        r.elements = b;
      } else if (c.rect[2] === c.rect[0] || c.rect[3] === c.rect[1]) continue;
      r.data = c;
      const u = Em.create(r);
      if (!u.isRenderable) continue;
      if (!d && c.popupRef) {
        const b = s.get(c.popupRef);
        b ? b.push(u) : s.set(c.popupRef, [u]);
      }
      const g = u.render();
      c.hidden && (g.style.visibility = 'hidden'), await A(this, Nr, zp).call(this, g, c.id, r.elements), (o = (a = u.extraPopupElement) == null ? void 0 : a.popup) == null || o.renderCommentButton(), u._isEditable && (n(this, vr).set(u.data.id, u), (l = this._annotationEditorUIManager) == null || l.renderAnnotationElement(u));
    }
    A(this, Nr, Up).call(this);
  }

  async addLinkAnnotations(t) {
    const e = {
      data: null,
      layer: this.div,
      linkService: n(this, Ha),
      svgFactory: new Vh(),
      parent: this,
    };
    for (const i of t) {
      i.borderStyle || (i.borderStyle = Il._defaultBorderStyle), e.data = i;
      const s = Em.create(e);
      if (!s.isRenderable) continue;
      const r = s.render();
      await A(this, Nr, zp).call(this, r, i.id, null);
    }
  }

  update({
    viewport: t,
  }) {
    const e = this.div;
    this.viewport = t, Or(e, {
      rotation: t.rotation,
    }), A(this, Nr, Up).call(this), e.hidden = !1;
  }

  getEditableAnnotations() {
    return Array.from(n(this, vr).values());
  }

  getEditableAnnotation(t) {
    return n(this, vr).get(t);
  }

  addFakeAnnotation(t) {
    let o;
    const {
      div: e,
    } = this; const {
      id: i,
      rotation: s,
    } = t; const r = new F0({
      data: {
        id: i,
        rect: t.getPDFRect(),
        rotation: s,
      },
      editor: t,
      layer: e,
      parent: this,
      enableComment: !!this._commentManager,
      linkService: n(this, Ha),
      annotationStorage: n(this, Ol),
    }); const
      a = r.render();
    return e.append(a), (o = n(this, Dl)) == null || o.moveElementInDOM(e, a, a, !1), r.createOrUpdatePopup(), r;
  }

  static get _defaultBorderStyle() {
    return yt(this, '_defaultBorderStyle', Object.freeze({
      width: 1,
      rawWidth: 1,
      style: po.SOLID,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0,
    }));
  }
}, Dl = new WeakMap(), Ba = new WeakMap(), Ol = new WeakMap(), vr = new WeakMap(), ld = new WeakMap(), Ha = new WeakMap(), Nr = new WeakSet(), zp = async function (t, e, i) {
  let o; let
    l;
  const s = t.firstChild || t; const r = s.id = `${vg}${e}`; const
    a = await ((o = n(this, ld)) == null ? void 0 : o.getAriaAttributes(r));
  if (a) for (const [c, d] of a) s.setAttribute(c, d);
  i ? i.at(-1).container.after(t) : (this.div.append(t), (l = n(this, Dl)) == null || l.moveElementInDOM(this.div, t, s, !1));
}, Up = function () {
  let e;
  if (!n(this, Ba)) return;
  const t = this.div;
  for (const [i, s] of n(this, Ba)) {
    const r = t.querySelector(`[data-annotation-id="${i}"]`);
    if (!r) continue;
    s.className = 'annotationContent';
    const {
      firstChild: a,
    } = r;
    a ? a.nodeName === 'CANVAS' ? a.replaceWith(s) : a.classList.contains('annotationContent') ? a.after(s) : a.before(s) : r.append(s);
    const o = n(this, vr).get(i);
    o && (o._hasNoCanvas ? ((e = this._annotationEditorUIManager) == null || e.setMissingCanvas(i, r.id, s), o._hasNoCanvas = !1) : o.canvas = s);
  }
  n(this, Ba).clear();
}, Il);
const Xd = /\r\n?|\n/g;
let mi; let hd; let ja; let yi; let he; let Sb; let Ab; let _b; let fu; let Ln; let pu; let gu; let xb; let Wp; let
  Eb;
const Wt = class Wt extends $t {
  constructor(e) {
    super({
      ...e,
      name: 'freeTextEditor',
    });
    v(this, he);
    v(this, mi, '');
    v(this, hd, `${this.id}-editor`);
    v(this, ja, null);
    v(this, yi);
    V(this, '_colorPicker', null);
    this.color = e.color || Wt._defaultColor || $t._defaultLineColor, m(this, yi, e.fontSize || Wt._defaultFontSize), this.annotationElementId || this._uiManager.a11yAlert('pdfjs-editor-freetext-added-alert');
  }

  static get _keyboardManager() {
    const e = Wt.prototype; const i = (a) => a.isEmpty(); const s = Ir.TRANSLATE_SMALL; const
      r = Ir.TRANSLATE_BIG;
    return yt(this, '_keyboardManager', new Ld([[['ctrl+s', 'mac+meta+s', 'ctrl+p', 'mac+meta+p'], e.commitOrRemove, {
      bubbles: !0,
    }], [['ctrl+Enter', 'mac+meta+Enter', 'Escape', 'mac+Escape'], e.commitOrRemove], [['ArrowLeft', 'mac+ArrowLeft'], e._translateEmpty, {
      args: [-s, 0],
      checker: i,
    }], [['ctrl+ArrowLeft', 'mac+shift+ArrowLeft'], e._translateEmpty, {
      args: [-r, 0],
      checker: i,
    }], [['ArrowRight', 'mac+ArrowRight'], e._translateEmpty, {
      args: [s, 0],
      checker: i,
    }], [['ctrl+ArrowRight', 'mac+shift+ArrowRight'], e._translateEmpty, {
      args: [r, 0],
      checker: i,
    }], [['ArrowUp', 'mac+ArrowUp'], e._translateEmpty, {
      args: [0, -s],
      checker: i,
    }], [['ctrl+ArrowUp', 'mac+shift+ArrowUp'], e._translateEmpty, {
      args: [0, -r],
      checker: i,
    }], [['ArrowDown', 'mac+ArrowDown'], e._translateEmpty, {
      args: [0, s],
      checker: i,
    }], [['ctrl+ArrowDown', 'mac+shift+ArrowDown'], e._translateEmpty, {
      args: [0, r],
      checker: i,
    }]]));
  }

  static initialize(e, i) {
    $t.initialize(e, i);
    const s = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(s.getPropertyValue('--freetext-padding'));
  }

  static updateDefaultParams(e, i) {
    switch (e) {
      case At.FREETEXT_SIZE:
        Wt._defaultFontSize = i;
        break;
      case At.FREETEXT_COLOR:
        Wt._defaultColor = i;
        break;
    }
  }

  updateParams(e, i) {
    switch (e) {
      case At.FREETEXT_SIZE:
        A(this, he, Sb).call(this, i);
        break;
      case At.FREETEXT_COLOR:
        A(this, he, Ab).call(this, i);
        break;
    }
  }

  static get defaultPropertiesToUpdate() {
    return [[At.FREETEXT_SIZE, Wt._defaultFontSize], [At.FREETEXT_COLOR, Wt._defaultColor || $t._defaultLineColor]];
  }

  get propertiesToUpdate() {
    return [[At.FREETEXT_SIZE, n(this, yi)], [At.FREETEXT_COLOR, this.color]];
  }

  get toolbarButtons() {
    return this._colorPicker || (this._colorPicker = new Fu(this)), [['colorPicker', this._colorPicker]];
  }

  get colorType() {
    return At.FREETEXT_COLOR;
  }

  onUpdatedColor() {
    let e;
    this.editorDiv.style.color = this.color, (e = this._colorPicker) == null || e.update(this.color), super.onUpdatedColor();
  }

  _translateEmpty(e, i) {
    this._uiManager.translateSelectedEditors(e, i, !0);
  }

  getInitialTranslation() {
    const e = this.parentScale;
    return [-Wt._internalPadding * e, -(Wt._internalPadding + n(this, yi)) * e];
  }

  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }

  enableEditMode() {
    if (!super.enableEditMode()) return !1;
    this.overlayDiv.classList.remove('enabled'), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute('aria-activedescendant'), m(this, ja, new AbortController());
    const e = this._uiManager.combinedSignal(n(this, ja));
    return this.editorDiv.addEventListener('keydown', this.editorDivKeydown.bind(this), {
      signal: e,
    }), this.editorDiv.addEventListener('focus', this.editorDivFocus.bind(this), {
      signal: e,
    }), this.editorDiv.addEventListener('blur', this.editorDivBlur.bind(this), {
      signal: e,
    }), this.editorDiv.addEventListener('input', this.editorDivInput.bind(this), {
      signal: e,
    }), this.editorDiv.addEventListener('paste', this.editorDivPaste.bind(this), {
      signal: e,
    }), !0;
  }

  disableEditMode() {
    let e;
    return super.disableEditMode() ? (this.overlayDiv.classList.add('enabled'), this.editorDiv.contentEditable = !1, this.div.setAttribute('aria-activedescendant', n(this, hd)), this._isDraggable = !0, (e = n(this, ja)) == null || e.abort(), m(this, ja, null), this.div.focus({
      preventScroll: !0,
    }), this.isEditing = !1, this.parent.div.classList.add('freetextEditing'), !0) : !1;
  }

  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), e.target !== this.editorDiv && this.editorDiv.focus());
  }

  onceAdded(e) {
    let i;
    this.width || (this.enableEditMode(), e && this.editorDiv.focus(), (i = this._initialOptions) != null && i.isCentered && this.center(), this._initialOptions = null);
  }

  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === '';
  }

  remove() {
    this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add('freetextEditing')), super.remove();
  }

  commit() {
    if (!this.isInEditMode()) return;
    super.commit(), this.disableEditMode();
    const e = n(this, mi); const
      i = m(this, mi, A(this, he, _b).call(this).trimEnd());
    if (e === i) return;
    const s = (r) => {
      if (m(this, mi, r), !r) {
        this.remove();
        return;
      }
      A(this, he, gu).call(this), this._uiManager.rebuild(this), A(this, he, fu).call(this);
    };
    this.addCommands({
      cmd: () => {
        s(i);
      },
      undo: () => {
        s(e);
      },
      mustExec: !1,
    }), A(this, he, fu).call(this);
  }

  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }

  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }

  keydown(e) {
    e.target === this.div && e.key === 'Enter' && (this.enterInEditMode(), e.preventDefault());
  }

  editorDivKeydown(e) {
    Wt._keyboardManager.exec(this, e);
  }

  editorDivFocus(e) {
    this.isEditing = !0;
  }

  editorDivBlur(e) {
    this.isEditing = !1;
  }

  editorDivInput(e) {
    this.parent.div.classList.toggle('freetextEditing', this.isEmpty());
  }

  disableEditing() {
    this.editorDiv.setAttribute('role', 'comment'), this.editorDiv.removeAttribute('aria-multiline');
  }

  enableEditing() {
    this.editorDiv.setAttribute('role', 'textbox'), this.editorDiv.setAttribute('aria-multiline', !0);
  }

  get canChangeContent() {
    return !0;
  }

  render() {
    if (this.div) return this.div;
    let e; let
      i;
    (this._isCopy || this.annotationElementId) && (e = this.x, i = this.y), super.render(), this.editorDiv = document.createElement('div'), this.editorDiv.className = 'internal', this.editorDiv.setAttribute('id', n(this, hd)), this.editorDiv.setAttribute('data-l10n-id', 'pdfjs-free-text2'), this.editorDiv.setAttribute('data-l10n-attrs', 'default-content'), this.enableEditing(), this.editorDiv.contentEditable = !0;
    const {
      style: s,
    } = this.editorDiv;
    if (s.fontSize = `calc(${n(this, yi)}px * var(--total-scale-factor))`, s.color = this.color, this.div.append(this.editorDiv), this.overlayDiv = document.createElement('div'), this.overlayDiv.classList.add('overlay', 'enabled'), this.div.append(this.overlayDiv), this._isCopy || this.annotationElementId) {
      const [r, a] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: o,
        } = this._initialData;
        let [l, c] = this.getInitialTranslation();
        [l, c] = this.pageTranslationToScreen(l, c);
        const [d, u] = this.pageDimensions; const
          [g, b] = this.pageTranslation;
        let E; let
          S;
        switch (this.rotation) {
          case 0:
            E = e + (o[0] - g) / d, S = i + this.height - (o[1] - b) / u;
            break;
          case 90:
            E = e + (o[0] - g) / d, S = i - (o[1] - b) / u, [l, c] = [c, -l];
            break;
          case 180:
            E = e - this.width + (o[0] - g) / d, S = i - (o[1] - b) / u, [l, c] = [-l, -c];
            break;
          case 270:
            E = e + (o[0] - g - this.height * u) / d, S = i + (o[1] - b - this.width * d) / u, [l, c] = [-c, l];
            break;
        }
        this.setAt(E * r, S * a, l, c);
      } else this._moveAfterPaste(e, i);
      A(this, he, gu).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }

  editorDivPaste(e) {
    let E; let S; let
      M;
    const i = e.clipboardData || window.clipboardData; const
      {
        types: s,
      } = i;
    if (s.length === 1 && s[0] === 'text/plain') return;
    e.preventDefault();
    const r = A(E = Wt, Ln, Wp).call(E, i.getData('text') || '').replaceAll(Xd, `
`);
    if (!r) return;
    const a = window.getSelection();
    if (!a.rangeCount) return;
    this.editorDiv.normalize(), a.deleteFromDocument();
    const o = a.getRangeAt(0);
    if (!r.includes(`
`)) {
      o.insertNode(document.createTextNode(r)), this.editorDiv.normalize(), a.collapseToStart();
      return;
    }
    const {
      startContainer: l,
      startOffset: c,
    } = o; const d = []; const
      u = [];
    if (l.nodeType === Node.TEXT_NODE) {
      const T = l.parentElement;
      if (u.push(l.nodeValue.slice(c).replaceAll(Xd, '')), T !== this.editorDiv) {
        let L = d;
        for (const R of this.editorDiv.childNodes) {
          if (R === T) {
            L = u;
            continue;
          }
          L.push(A(S = Wt, Ln, pu).call(S, R));
        }
      }
      d.push(l.nodeValue.slice(0, c).replaceAll(Xd, ''));
    } else if (l === this.editorDiv) {
      let T = d; let
        L = 0;
      for (const R of this.editorDiv.childNodes) L++ === c && (T = u), T.push(A(M = Wt, Ln, pu).call(M, R));
    }
    m(this, mi, `${d.join(`
`)}${r}${u.join(`
`)}`), A(this, he, gu).call(this);
    const g = new Range();
    let b = Math.sumPrecise(d.map((T) => T.length));
    for (const {
      firstChild: T,
    } of this.editorDiv.childNodes) {
      if (T.nodeType === Node.TEXT_NODE) {
        const L = T.nodeValue.length;
        if (b <= L) {
          g.setStart(T, b), g.setEnd(T, b);
          break;
        }
        b -= L;
      }
    }
    a.removeAllRanges(), a.addRange(g);
  }

  get contentDiv() {
    return this.editorDiv;
  }

  getPDFRect() {
    const e = Wt._internalPadding * this.parentScale;
    return this.getRect(e, e);
  }

  static async deserialize(e, i, s) {
    let o;
    let r = null;
    if (e instanceof yb) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: l,
            fontColor: c,
          },
          rect: d,
          rotation: u,
          id: g,
          popupRef: b,
          richText: E,
          contentsObj: S,
          creationDate: M,
          modificationDate: T,
        },
        textContent: L,
        textPosition: R,
        parent: {
          page: {
            pageNumber: p,
          },
        },
      } = e;
      if (!L || L.length === 0) return null;
      r = e = {
        annotationType: ft.FREETEXT,
        color: Array.from(c),
        fontSize: l,
        value: L.join(`
`),
        position: R,
        pageIndex: p - 1,
        rect: d.slice(0),
        rotation: u,
        annotationElementId: g,
        id: g,
        deleted: !1,
        popupRef: b,
        comment: (S == null ? void 0 : S.str) || null,
        richText: E,
        creationDate: M,
        modificationDate: T,
      };
    }
    const a = await super.deserialize(e, i, s);
    return m(a, yi, e.fontSize), a.color = tt.makeHexColor(...e.color), m(a, mi, A(o = Wt, Ln, Wp).call(o, e.value)), a._initialData = r, e.comment && a.setCommentData(e), a;
  }

  serialize(e = !1) {
    if (this.isEmpty()) return null;
    if (this.deleted) return this.serializeDeleted();
    const i = $t._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color); const
      s = Object.assign(super.serialize(e), {
        color: i,
        fontSize: n(this, yi),
        value: A(this, he, xb).call(this),
      });
    return this.addComment(s), e ? (s.isCopy = !0, s) : this.annotationElementId && !A(this, he, Eb).call(this, s) ? null : (s.id = this.annotationElementId, s);
  }

  renderAnnotationElement(e) {
    const i = super.renderAnnotationElement(e);
    if (!i) return null;
    const {
      style: s,
    } = i;
    s.fontSize = `calc(${n(this, yi)}px * var(--total-scale-factor))`, s.color = this.color, i.replaceChildren();
    for (const r of n(this, mi).split(`
`)) {
      const a = document.createElement('div');
      a.append(r ? document.createTextNode(r) : document.createElement('br')), i.append(a);
    }
    return e.updateEdited({
      rect: this.getPDFRect(),
      popup: this._uiManager.hasCommentManager() || this.hasEditedComment ? this.comment : {
        text: n(this, mi),
      },
    }), i;
  }

  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
mi = new WeakMap(), hd = new WeakMap(), ja = new WeakMap(), yi = new WeakMap(), he = new WeakSet(), Sb = function (e) {
  const i = (r) => {
    this.editorDiv.style.fontSize = `calc(${r}px * var(--total-scale-factor))`, this.translate(0, -(r - n(this, yi)) * this.parentScale), m(this, yi, r), A(this, he, fu).call(this);
  }; const
    s = n(this, yi);
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: At.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0,
  });
}, Ab = function (e) {
  const i = (r) => {
    this.color = r, this.onUpdatedColor();
  }; const
    s = this.color;
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: At.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0,
  });
}, _b = function () {
  let s;
  const e = [];
  this.editorDiv.normalize();
  let i = null;
  for (const r of this.editorDiv.childNodes) (i == null ? void 0 : i.nodeType) === Node.TEXT_NODE && r.nodeName === 'BR' || (e.push(A(s = Wt, Ln, pu).call(s, r)), i = r);
  return e.join(`
`);
}, fu = function () {
  const [e, i] = this.parentDimensions;
  let s;
  if (this.isAttachedToDOM) s = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: r,
      div: a,
    } = this; const o = a.style.display; const
      l = a.classList.contains('hidden');
    a.classList.remove('hidden'), a.style.display = 'hidden', r.div.append(this.div), s = a.getBoundingClientRect(), a.remove(), a.style.display = o, a.classList.toggle('hidden', l);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = s.width / e, this.height = s.height / i) : (this.width = s.height / e, this.height = s.width / i), this.fixAndSetPosition();
}, Ln = new WeakSet(), pu = function (e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(Xd, '');
}, gu = function () {
  if (this.editorDiv.replaceChildren(), !!n(this, mi)) {
    for (const e of n(this, mi).split(`
`)) {
      const i = document.createElement('div');
      i.append(e ? document.createTextNode(e) : document.createElement('br')), this.editorDiv.append(i);
    }
  }
}, xb = function () {
  return n(this, mi).replaceAll(' ', ' ');
}, Wp = function (e) {
  return e.replaceAll(' ', ' ');
}, Eb = function (e) {
  const {
    value: i,
    fontSize: s,
    color: r,
    pageIndex: a,
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || e.value !== i || e.fontSize !== s || e.color.some((o, l) => o !== r[l]) || e.pageIndex !== a;
}, v(Wt, Ln), V(Wt, '_freeTextDefaultContent', ''), V(Wt, '_internalPadding', 0), V(Wt, '_defaultColor', null), V(Wt, '_defaultFontSize', 10), V(Wt, '_type', 'freetext'), V(Wt, '_editorType', ft.FREETEXT);
const $p = Wt;
class Z {
  toSVGPath() {
    zt('Abstract method `toSVGPath` must be implemented.');
  }

  get box() {
    zt('Abstract getter `box` must be implemented.');
  }

  serialize(t, e) {
    zt('Abstract method `serialize` must be implemented.');
  }

  static _rescale(t, e, i, s, r, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2) a[o] = e + t[o] * s, a[o + 1] = i + t[o + 1] * r;
    return a;
  }

  static _rescaleAndSwap(t, e, i, s, r, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2) a[o] = e + t[o + 1] * s, a[o + 1] = i + t[o] * r;
    return a;
  }

  static _translate(t, e, i, s) {
    s || (s = new Float32Array(t.length));
    for (let r = 0, a = t.length; r < a; r += 2) s[r] = e + t[r], s[r + 1] = i + t[r + 1];
    return s;
  }

  static svgRound(t) {
    return Math.round(t * 1e4);
  }

  static _normalizePoint(t, e, i, s, r) {
    switch (r) {
      case 90:
        return [1 - e / i, t / s];
      case 180:
        return [1 - t / i, 1 - e / s];
      case 270:
        return [e / i, 1 - t / s];
      default:
        return [t / i, e / s];
    }
  }

  static _normalizePagePoint(t, e, i) {
    switch (i) {
      case 90:
        return [1 - e, t];
      case 180:
        return [1 - t, 1 - e];
      case 270:
        return [e, 1 - t];
      default:
        return [t, e];
    }
  }

  static createBezierPoints(t, e, i, s, r, a) {
    return [(t + 5 * i) / 6, (e + 5 * s) / 6, (5 * i + r) / 6, (5 * s + a) / 6, (i + r) / 2, (s + a) / 2];
  }
}
V(Z, 'PRECISION', 1e-4);
let bi; let is; let Fl; let Nl; let Ds; let wt; let za; let Ua; let cd; let dd; let Bl; let Hl; let wr; let ud; let sf; let nf; let ge; let Lh; let Cb; let Tb; let Pb; let kb; let Rb; let
  Mb;
const Ys = class Ys {
  constructor({
    x: t,
    y: e,
  }, i, s, r, a, o = 0) {
    v(this, ge);
    v(this, bi);
    v(this, is, []);
    v(this, Fl);
    v(this, Nl);
    v(this, Ds, []);
    v(this, wt, new Float32Array(18));
    v(this, za);
    v(this, Ua);
    v(this, cd);
    v(this, dd);
    v(this, Bl);
    v(this, Hl);
    v(this, wr, []);
    m(this, bi, i), m(this, Hl, r * s), m(this, Nl, a), n(this, wt).set([NaN, NaN, NaN, NaN, t, e], 6), m(this, Fl, o), m(this, dd, n(Ys, ud) * s), m(this, cd, n(Ys, nf) * s), m(this, Bl, s), n(this, wr).push(t, e);
  }

  isEmpty() {
    return isNaN(n(this, wt)[8]);
  }

  add({
    x: t,
    y: e,
  }) {
    let k;
    m(this, za, t), m(this, Ua, e);
    const [i, s, r, a] = n(this, bi);
    let [o, l, c, d] = n(this, wt).subarray(8, 12);
    const u = t - c; const g = e - d; const
      b = Math.hypot(u, g);
    if (b < n(this, cd)) return !1;
    const E = b - n(this, dd); const S = E / b; const M = S * u; const
      T = S * g;
    let L = o; let
      R = l;
    o = c, l = d, c += M, d += T, (k = n(this, wr)) == null || k.push(t, e);
    const p = -T / E; const f = M / E; const y = p * n(this, Hl); const
      _ = f * n(this, Hl);
    return n(this, wt).set(n(this, wt).subarray(2, 8), 0), n(this, wt).set([c + y, d + _], 4), n(this, wt).set(n(this, wt).subarray(14, 18), 12), n(this, wt).set([c - y, d - _], 16), isNaN(n(this, wt)[6]) ? (n(this, Ds).length === 0 && (n(this, wt).set([o + y, l + _], 2), n(this, Ds).push(NaN, NaN, NaN, NaN, (o + y - i) / r, (l + _ - s) / a), n(this, wt).set([o - y, l - _], 14), n(this, is).push(NaN, NaN, NaN, NaN, (o - y - i) / r, (l - _ - s) / a)), n(this, wt).set([L, R, o, l, c, d], 6), !this.isEmpty()) : (n(this, wt).set([L, R, o, l, c, d], 6), Math.abs(Math.atan2(R - l, L - o) - Math.atan2(T, M)) < Math.PI / 2 ? ([o, l, c, d] = n(this, wt).subarray(2, 6), n(this, Ds).push(NaN, NaN, NaN, NaN, ((o + c) / 2 - i) / r, ((l + d) / 2 - s) / a), [o, l, L, R] = n(this, wt).subarray(14, 18), n(this, is).push(NaN, NaN, NaN, NaN, ((L + o) / 2 - i) / r, ((R + l) / 2 - s) / a), !0) : ([L, R, o, l, c, d] = n(this, wt).subarray(0, 6), n(this, Ds).push(((L + 5 * o) / 6 - i) / r, ((R + 5 * l) / 6 - s) / a, ((5 * o + c) / 6 - i) / r, ((5 * l + d) / 6 - s) / a, ((o + c) / 2 - i) / r, ((l + d) / 2 - s) / a), [c, d, o, l, L, R] = n(this, wt).subarray(12, 18), n(this, is).push(((L + 5 * o) / 6 - i) / r, ((R + 5 * l) / 6 - s) / a, ((5 * o + c) / 6 - i) / r, ((5 * l + d) / 6 - s) / a, ((o + c) / 2 - i) / r, ((l + d) / 2 - s) / a), !0));
  }

  toSVGPath() {
    if (this.isEmpty()) return '';
    const t = n(this, Ds); const
      e = n(this, is);
    if (isNaN(n(this, wt)[6]) && !this.isEmpty()) return A(this, ge, Cb).call(this);
    const i = [];
    i.push(`M${t[4]} ${t[5]}`);
    for (let s = 6; s < t.length; s += 6) isNaN(t[s]) ? i.push(`L${t[s + 4]} ${t[s + 5]}`) : i.push(`C${t[s]} ${t[s + 1]} ${t[s + 2]} ${t[s + 3]} ${t[s + 4]} ${t[s + 5]}`);
    A(this, ge, Pb).call(this, i);
    for (let s = e.length - 6; s >= 6; s -= 6) isNaN(e[s]) ? i.push(`L${e[s + 4]} ${e[s + 5]}`) : i.push(`C${e[s]} ${e[s + 1]} ${e[s + 2]} ${e[s + 3]} ${e[s + 4]} ${e[s + 5]}`);
    return A(this, ge, Tb).call(this, i), i.join(' ');
  }

  newFreeDrawOutline(t, e, i, s, r, a) {
    return new Lb(t, e, i, s, r, a);
  }

  getOutlines() {
    let u;
    const t = n(this, Ds); const e = n(this, is); const i = n(this, wt); const [s, r, a, o] = n(this, bi); const
      l = new Float32Array((((u = n(this, wr)) == null ? void 0 : u.length) ?? 0) + 2);
    for (let g = 0, b = l.length - 2; g < b; g += 2) l[g] = (n(this, wr)[g] - s) / a, l[g + 1] = (n(this, wr)[g + 1] - r) / o;
    if (l[l.length - 2] = (n(this, za) - s) / a, l[l.length - 1] = (n(this, Ua) - r) / o, isNaN(i[6]) && !this.isEmpty()) return A(this, ge, kb).call(this, l);
    const c = new Float32Array(n(this, Ds).length + 24 + n(this, is).length);
    let d = t.length;
    for (let g = 0; g < d; g += 2) {
      if (isNaN(t[g])) {
        c[g] = c[g + 1] = NaN;
        continue;
      }
      c[g] = t[g], c[g + 1] = t[g + 1];
    }
    d = A(this, ge, Mb).call(this, c, d);
    for (let g = e.length - 6; g >= 6; g -= 6) {
      for (let b = 0; b < 6; b += 2) {
        if (isNaN(e[g + b])) {
          c[d] = c[d + 1] = NaN, d += 2;
          continue;
        }
        c[d] = e[g + b], c[d + 1] = e[g + b + 1], d += 2;
      }
    }
    return A(this, ge, Rb).call(this, c, d), this.newFreeDrawOutline(c, l, n(this, bi), n(this, Bl), n(this, Fl), n(this, Nl));
  }
};
bi = new WeakMap(), is = new WeakMap(), Fl = new WeakMap(), Nl = new WeakMap(), Ds = new WeakMap(), wt = new WeakMap(), za = new WeakMap(), Ua = new WeakMap(), cd = new WeakMap(), dd = new WeakMap(), Bl = new WeakMap(), Hl = new WeakMap(), wr = new WeakMap(), ud = new WeakMap(), sf = new WeakMap(), nf = new WeakMap(), ge = new WeakSet(), Lh = function () {
  const t = n(this, wt).subarray(4, 6); const e = n(this, wt).subarray(16, 18); const
    [i, s, r, a] = n(this, bi);
  return [(n(this, za) + (t[0] - e[0]) / 2 - i) / r, (n(this, Ua) + (t[1] - e[1]) / 2 - s) / a, (n(this, za) + (e[0] - t[0]) / 2 - i) / r, (n(this, Ua) + (e[1] - t[1]) / 2 - s) / a];
}, Cb = function () {
  const [t, e, i, s] = n(this, bi); const
    [r, a, o, l] = A(this, ge, Lh).call(this);
  return `M${(n(this, wt)[2] - t) / i} ${(n(this, wt)[3] - e) / s} L${(n(this, wt)[4] - t) / i} ${(n(this, wt)[5] - e) / s} L${r} ${a} L${o} ${l} L${(n(this, wt)[16] - t) / i} ${(n(this, wt)[17] - e) / s} L${(n(this, wt)[14] - t) / i} ${(n(this, wt)[15] - e) / s} Z`;
}, Tb = function (t) {
  const e = n(this, is);
  t.push(`L${e[4]} ${e[5]} Z`);
}, Pb = function (t) {
  const [e, i, s, r] = n(this, bi); const a = n(this, wt).subarray(4, 6); const o = n(this, wt).subarray(16, 18); const
    [l, c, d, u] = A(this, ge, Lh).call(this);
  t.push(`L${(a[0] - e) / s} ${(a[1] - i) / r} L${l} ${c} L${d} ${u} L${(o[0] - e) / s} ${(o[1] - i) / r}`);
}, kb = function (t) {
  const e = n(this, wt); const [i, s, r, a] = n(this, bi); const [o, l, c, d] = A(this, ge, Lh).call(this); const
    u = new Float32Array(36);
  return u.set([NaN, NaN, NaN, NaN, (e[2] - i) / r, (e[3] - s) / a, NaN, NaN, NaN, NaN, (e[4] - i) / r, (e[5] - s) / a, NaN, NaN, NaN, NaN, o, l, NaN, NaN, NaN, NaN, c, d, NaN, NaN, NaN, NaN, (e[16] - i) / r, (e[17] - s) / a, NaN, NaN, NaN, NaN, (e[14] - i) / r, (e[15] - s) / a], 0), this.newFreeDrawOutline(u, t, n(this, bi), n(this, Bl), n(this, Fl), n(this, Nl));
}, Rb = function (t, e) {
  const i = n(this, is);
  return t.set([NaN, NaN, NaN, NaN, i[4], i[5]], e), e += 6;
}, Mb = function (t, e) {
  const i = n(this, wt).subarray(4, 6); const s = n(this, wt).subarray(16, 18); const [r, a, o, l] = n(this, bi); const
    [c, d, u, g] = A(this, ge, Lh).call(this);
  return t.set([NaN, NaN, NaN, NaN, (i[0] - r) / o, (i[1] - a) / l, NaN, NaN, NaN, NaN, c, d, NaN, NaN, NaN, NaN, u, g, NaN, NaN, NaN, NaN, (s[0] - r) / o, (s[1] - a) / l], e), e += 24;
}, v(Ys, ud, 8), v(Ys, sf, 2), v(Ys, nf, n(Ys, ud) + n(Ys, sf));
const Nu = Ys;
let jl; let $a; let xn; let fd; let vi; let pd; let re; let rf; let
  Db;
class Lb extends Z {
  constructor(e, i, s, r, a, o) {
    super();
    v(this, rf);
    v(this, jl);
    v(this, $a, new Float32Array(4));
    v(this, xn);
    v(this, fd);
    v(this, vi);
    v(this, pd);
    v(this, re);
    m(this, re, e), m(this, vi, i), m(this, jl, s), m(this, pd, r), m(this, xn, a), m(this, fd, o), this.firstPoint = [NaN, NaN], this.lastPoint = [NaN, NaN], A(this, rf, Db).call(this, o);
    const [l, c, d, u] = n(this, $a);
    for (let g = 0, b = e.length; g < b; g += 2) e[g] = (e[g] - l) / d, e[g + 1] = (e[g + 1] - c) / u;
    for (let g = 0, b = i.length; g < b; g += 2) i[g] = (i[g] - l) / d, i[g + 1] = (i[g + 1] - c) / u;
  }

  toSVGPath() {
    const e = [`M${n(this, re)[4]} ${n(this, re)[5]}`];
    for (let i = 6, s = n(this, re).length; i < s; i += 6) {
      if (isNaN(n(this, re)[i])) {
        e.push(`L${n(this, re)[i + 4]} ${n(this, re)[i + 5]}`);
        continue;
      }
      e.push(`C${n(this, re)[i]} ${n(this, re)[i + 1]} ${n(this, re)[i + 2]} ${n(this, re)[i + 3]} ${n(this, re)[i + 4]} ${n(this, re)[i + 5]}`);
    }
    return e.push('Z'), e.join(' ');
  }

  serialize([e, i, s, r], a) {
    const o = s - e; const
      l = r - i;
    let c; let
      d;
    switch (a) {
      case 0:
        c = Z._rescale(n(this, re), e, r, o, -l), d = Z._rescale(n(this, vi), e, r, o, -l);
        break;
      case 90:
        c = Z._rescaleAndSwap(n(this, re), e, i, o, l), d = Z._rescaleAndSwap(n(this, vi), e, i, o, l);
        break;
      case 180:
        c = Z._rescale(n(this, re), s, i, -o, l), d = Z._rescale(n(this, vi), s, i, -o, l);
        break;
      case 270:
        c = Z._rescaleAndSwap(n(this, re), s, r, -o, -l), d = Z._rescaleAndSwap(n(this, vi), s, r, -o, -l);
        break;
    }
    return {
      outline: Array.from(c),
      points: [Array.from(d)],
    };
  }

  get box() {
    return n(this, $a);
  }

  newOutliner(e, i, s, r, a, o = 0) {
    return new Nu(e, i, s, r, a, o);
  }

  getNewOutline(e, i) {
    const [s, r, a, o] = n(this, $a); const [l, c, d, u] = n(this, jl); const g = a * d; const b = o * u; const E = s * d + l; const S = r * u + c; const
      M = this.newOutliner({
        x: n(this, vi)[0] * g + E,
        y: n(this, vi)[1] * b + S,
      }, n(this, jl), n(this, pd), e, n(this, fd), i ?? n(this, xn));
    for (let T = 2; T < n(this, vi).length; T += 2) {
      M.add({
        x: n(this, vi)[T] * g + E,
        y: n(this, vi)[T + 1] * b + S,
      });
    }
    return M.getOutlines();
  }
}
jl = new WeakMap(), $a = new WeakMap(), xn = new WeakMap(), fd = new WeakMap(), vi = new WeakMap(), pd = new WeakMap(), re = new WeakMap(), rf = new WeakSet(), Db = function (e) {
  const i = n(this, re);
  let s = i[4]; let
    r = i[5];
  const a = [s, r, s, r];
  let o = s; let l = r; let c = s; let
    d = r;
  const u = e ? Math.max : Math.min; const
    g = new Float32Array(4);
  for (let E = 6, S = i.length; E < S; E += 6) {
    const M = i[E + 4]; const
      T = i[E + 5];
    isNaN(i[E]) ? (tt.pointBoundingBox(M, T, a), l > T ? (o = M, l = T) : l === T && (o = u(o, M)), d < T ? (c = M, d = T) : d === T && (c = u(c, M))) : (g[0] = g[1] = 1 / 0, g[2] = g[3] = -1 / 0, tt.bezierBoundingBox(s, r, ...i.slice(E, E + 6), g), tt.rectBoundingBox(g[0], g[1], g[2], g[3], a), l > g[1] ? (o = g[0], l = g[1]) : l === g[1] && (o = u(o, g[0])), d < g[3] ? (c = g[2], d = g[3]) : d === g[3] && (c = u(c, g[2]))), s = M, r = T;
  }
  const b = n(this, $a);
  b[0] = a[0] - n(this, xn), b[1] = a[1] - n(this, xn), b[2] = a[2] - a[0] + 2 * n(this, xn), b[3] = a[3] - a[1] + 2 * n(this, xn), this.firstPoint = [o, l], this.lastPoint = [c, d];
};
let gd; let md; let yd; let Sr; let ss; let Ke; let Ob; let mu; let Ib; let Fb; let
  Vp;
class Gp {
  constructor(t, e = 0, i = 0, s = !0) {
    v(this, Ke);
    v(this, gd);
    v(this, md);
    v(this, yd);
    v(this, Sr, []);
    v(this, ss, []);
    const r = [1 / 0, 1 / 0, -1 / 0, -1 / 0]; const
      a = 10 ** -4;
    for (const {
      x: S,
      y: M,
      width: T,
      height: L,
    } of t) {
      const R = Math.floor((S - e) / a) * a; const p = Math.ceil((S + T + e) / a) * a; const f = Math.floor((M - e) / a) * a; const y = Math.ceil((M + L + e) / a) * a; const _ = [R, f, y, !0]; const
        P = [p, f, y, !1];
      n(this, Sr).push(_, P), tt.rectBoundingBox(R, f, p, y, r);
    }
    const o = r[2] - r[0] + 2 * i; const l = r[3] - r[1] + 2 * i; const c = r[0] - i; const
      d = r[1] - i;
    let u = s ? -1 / 0 : 1 / 0; let
      g = 1 / 0;
    const b = n(this, Sr).at(s ? -1 : -2); const
      E = [b[0], b[2]];
    for (const S of n(this, Sr)) {
      const [M, T, L, R] = S;
      !R && s ? T < g ? (g = T, u = M) : T === g && (u = Math.max(u, M)) : R && !s && (T < g ? (g = T, u = M) : T === g && (u = Math.min(u, M))), S[0] = (M - c) / o, S[1] = (T - d) / l, S[2] = (L - d) / l;
    }
    m(this, gd, new Float32Array([c, d, o, l])), m(this, md, [u, g]), m(this, yd, E);
  }

  getOutlines() {
    n(this, Sr).sort((e, i) => e[0] - i[0] || e[1] - i[1] || e[2] - i[2]);
    const t = [];
    for (const e of n(this, Sr)) e[3] ? (t.push(...A(this, Ke, Vp).call(this, e)), A(this, Ke, Ib).call(this, e)) : (A(this, Ke, Fb).call(this, e), t.push(...A(this, Ke, Vp).call(this, e)));
    return A(this, Ke, Ob).call(this, t);
  }
}
gd = new WeakMap(), md = new WeakMap(), yd = new WeakMap(), Sr = new WeakMap(), ss = new WeakMap(), Ke = new WeakSet(), Ob = function (t) {
  const e = []; const
    i = /* @__PURE__ */ new Set();
  for (const a of t) {
    const [o, l, c] = a;
    e.push([o, l, a], [o, c, a]);
  }
  e.sort((a, o) => a[1] - o[1] || a[0] - o[0]);
  for (let a = 0, o = e.length; a < o; a += 2) {
    const l = e[a][2]; const
      c = e[a + 1][2];
    l.push(c), c.push(l), i.add(l), i.add(c);
  }
  const s = [];
  let r;
  for (; i.size > 0;) {
    const a = i.values().next().value;
    let [o, l, c, d, u] = a;
    i.delete(a);
    let g = o; let
      b = l;
    for (r = [o, c], s.push(r); ;) {
      let E;
      if (i.has(d)) E = d;
      else if (i.has(u)) E = u;
      else break;
      i.delete(E), [o, l, c, d, u] = E, g !== o && (r.push(g, b, o, b === l ? l : c), g = o), b = b === l ? c : l;
    }
    r.push(g, b);
  }
  return new Z0(s, n(this, gd), n(this, md), n(this, yd));
}, mu = function (t) {
  const e = n(this, ss);
  let i = 0; let
    s = e.length - 1;
  for (; i <= s;) {
    const r = i + s >> 1; const
      a = e[r][0];
    if (a === t) return r;
    a < t ? i = r + 1 : s = r - 1;
  }
  return s + 1;
}, Ib = function ([, t, e]) {
  const i = A(this, Ke, mu).call(this, t);
  n(this, ss).splice(i, 0, [t, e]);
}, Fb = function ([, t, e]) {
  const i = A(this, Ke, mu).call(this, t);
  for (let s = i; s < n(this, ss).length; s++) {
    const [r, a] = n(this, ss)[s];
    if (r !== t) break;
    if (r === t && a === e) {
      n(this, ss).splice(s, 1);
      return;
    }
  }
  for (let s = i - 1; s >= 0; s--) {
    const [r, a] = n(this, ss)[s];
    if (r !== t) break;
    if (r === t && a === e) {
      n(this, ss).splice(s, 1);
      return;
    }
  }
}, Vp = function (t) {
  const [e, i, s] = t; const r = [[e, i, s]]; const
    a = A(this, Ke, mu).call(this, s);
  for (let o = 0; o < a; o++) {
    const [l, c] = n(this, ss)[o];
    for (let d = 0, u = r.length; d < u; d++) {
      const [, g, b] = r[d];
      if (!(c <= g || b <= l)) {
        if (g >= l) {
          if (b > c) r[d][1] = c;
          else {
            if (u === 1) return [];
            r.splice(d, 1), d--, u--;
          }
          continue;
        }
        r[d][2] = l, b > c && r.push([e, c, b]);
      }
    }
  }
  return r;
};
let bd; let
  zl;
class Z0 extends Z {
  constructor(e, i, s, r) {
    super();
    v(this, bd);
    v(this, zl);
    m(this, zl, e), m(this, bd, i), this.firstPoint = s, this.lastPoint = r;
  }

  toSVGPath() {
    const e = [];
    for (const i of n(this, zl)) {
      let [s, r] = i;
      e.push(`M${s} ${r}`);
      for (let a = 2; a < i.length; a += 2) {
        const o = i[a]; const
          l = i[a + 1];
        o === s ? (e.push(`V${l}`), r = l) : l === r && (e.push(`H${o}`), s = o);
      }
      e.push('Z');
    }
    return e.join(' ');
  }

  serialize([e, i, s, r], a) {
    const o = []; const l = s - e; const
      c = r - i;
    for (const d of n(this, zl)) {
      const u = new Array(d.length);
      for (let g = 0; g < d.length; g += 2) u[g] = e + d[g] * l, u[g + 1] = r - d[g + 1] * c;
      o.push(u);
    }
    return o;
  }

  get box() {
    return n(this, bd);
  }

  get classNamesForOutlining() {
    return ['highlightOutline'];
  }
}
bd = new WeakMap(), zl = new WeakMap();
class qp extends Nu {
  newFreeDrawOutline(t, e, i, s, r, a) {
    return new tS(t, e, i, s, r, a);
  }
}
class tS extends Lb {
  newOutliner(t, e, i, s, r, a = 0) {
    return new qp(t, e, i, s, r, a);
  }
}
let Ul; let vd; let En; let Wa; let wd; let ni; let Sd; let Ad; let Ga; let wi; let Si; let ke; let $l; let Wl; let je; let Gl; let Ui; let _d; let bt; let Xp; let yu; let Nb; let Bb; let Hb; let Yp; let Wr; let Wi; let wo; let jb; let bu; let vu; let zb; let Ub; let $b; let Wb; let
  Gb;
const Tt = class Tt extends $t {
  constructor(e) {
    super({
      ...e,
      name: 'highlightEditor',
    });
    v(this, bt);
    v(this, Ul, null);
    v(this, vd, 0);
    v(this, En);
    v(this, Wa, null);
    v(this, wd, null);
    v(this, ni, null);
    v(this, Sd, null);
    v(this, Ad, 0);
    v(this, Ga, null);
    v(this, wi, null);
    v(this, Si, null);
    v(this, ke, !1);
    v(this, $l, null);
    v(this, Wl, null);
    v(this, je, null);
    v(this, Gl, '');
    v(this, Ui);
    v(this, _d, '');
    this.color = e.color || Tt._defaultColor, m(this, Ui, e.thickness || Tt._defaultThickness), this.opacity = e.opacity || Tt._defaultOpacity, m(this, En, e.boxes || null), m(this, _d, e.methodOfCreation || ''), m(this, Gl, e.text || ''), this._isDraggable = !1, this.defaultL10nId = 'pdfjs-editor-highlight-editor', e.highlightId > -1 ? (m(this, ke, !0), A(this, bt, yu).call(this, e), A(this, bt, Wr).call(this)) : n(this, En) && (m(this, Ul, e.anchorNode), m(this, vd, e.anchorOffset), m(this, Sd, e.focusNode), m(this, Ad, e.focusOffset), A(this, bt, Xp).call(this), A(this, bt, Wr).call(this), this.rotate(this.rotation)), this.annotationElementId || this._uiManager.a11yAlert('pdfjs-editor-highlight-added-alert');
  }

  static get _keyboardManager() {
    const e = Tt.prototype;
    return yt(this, '_keyboardManager', new Ld([[['ArrowLeft', 'mac+ArrowLeft'], e._moveCaret, {
      args: [0],
    }], [['ArrowRight', 'mac+ArrowRight'], e._moveCaret, {
      args: [1],
    }], [['ArrowUp', 'mac+ArrowUp'], e._moveCaret, {
      args: [2],
    }], [['ArrowDown', 'mac+ArrowDown'], e._moveCaret, {
      args: [3],
    }]]));
  }

  get telemetryInitialData() {
    return {
      action: 'added',
      type: n(this, ke) ? 'free_highlight' : 'highlight',
      color: this._uiManager.getNonHCMColorName(this.color),
      thickness: n(this, Ui),
      methodOfCreation: n(this, _d),
    };
  }

  get telemetryFinalData() {
    return {
      type: 'highlight',
      color: this._uiManager.getNonHCMColorName(this.color),
    };
  }

  static computeTelemetryFinalData(e) {
    return {
      numberOfColors: e.get('color').size,
    };
  }

  static initialize(e, i) {
    let s;
    $t.initialize(e, i), Tt._defaultColor || (Tt._defaultColor = ((s = i.highlightColors) == null ? void 0 : s.values().next().value) || '#fff066');
  }

  static updateDefaultParams(e, i) {
    switch (e) {
      case At.HIGHLIGHT_COLOR:
        Tt._defaultColor = i;
        break;
      case At.HIGHLIGHT_THICKNESS:
        Tt._defaultThickness = i;
        break;
    }
  }

  translateInPage(e, i) {
  }

  get toolbarPosition() {
    return n(this, Wl);
  }

  get commentButtonPosition() {
    return n(this, $l);
  }

  updateParams(e, i) {
    switch (e) {
      case At.HIGHLIGHT_COLOR:
        A(this, bt, Nb).call(this, i);
        break;
      case At.HIGHLIGHT_THICKNESS:
        A(this, bt, Bb).call(this, i);
        break;
    }
  }

  static get defaultPropertiesToUpdate() {
    return [[At.HIGHLIGHT_COLOR, Tt._defaultColor], [At.HIGHLIGHT_THICKNESS, Tt._defaultThickness]];
  }

  get propertiesToUpdate() {
    return [[At.HIGHLIGHT_COLOR, this.color || Tt._defaultColor], [At.HIGHLIGHT_THICKNESS, n(this, Ui) || Tt._defaultThickness], [At.HIGHLIGHT_FREE, n(this, ke)]];
  }

  onUpdatedColor() {
    let e; let
      i;
    (e = this.parent) == null || e.drawLayer.updateProperties(n(this, Si), {
      root: {
        fill: this.color,
        'fill-opacity': this.opacity,
      },
    }), (i = n(this, wd)) == null || i.updateColor(this.color), super.onUpdatedColor();
  }

  get toolbarButtons() {
    return this._uiManager.highlightColors ? [['colorPicker', m(this, wd, new Gh({
      editor: this,
    }))]] : super.toolbarButtons;
  }

  disableEditing() {
    super.disableEditing(), this.div.classList.toggle('disabled', !0);
  }

  enableEditing() {
    super.enableEditing(), this.div.classList.toggle('disabled', !1);
  }

  fixAndSetPosition() {
    return super.fixAndSetPosition(A(this, bt, vu).call(this));
  }

  getBaseTranslation() {
    return [0, 0];
  }

  getRect(e, i) {
    return super.getRect(e, i, A(this, bt, vu).call(this));
  }

  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), e && this.div.focus();
  }

  remove() {
    A(this, bt, Yp).call(this), this._reportTelemetry({
      action: 'deleted',
    }), super.remove();
  }

  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (A(this, bt, Wr).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }

  setParent(e) {
    let s;
    let i = !1;
    this.parent && !e ? A(this, bt, Yp).call(this) : e && (A(this, bt, Wr).call(this, e), i = !this.parent && ((s = this.div) == null ? void 0 : s.classList.contains('selectedEditor'))), super.setParent(e), this.show(this._isVisible), i && this.select();
  }

  rotate(e) {
    let r; let a; let
      o;
    const {
      drawLayer: i,
    } = this.parent;
    let s;
    n(this, ke) ? (e = (e - this.rotation + 360) % 360, s = A(r = Tt, Wi, wo).call(r, n(this, wi).box, e)) : s = A(a = Tt, Wi, wo).call(a, [this.x, this.y, this.width, this.height], e), i.updateProperties(n(this, Si), {
      bbox: s,
      root: {
        'data-main-rotation': e,
      },
    }), i.updateProperties(n(this, je), {
      bbox: A(o = Tt, Wi, wo).call(o, n(this, ni).box, e),
      root: {
        'data-main-rotation': e,
      },
    });
  }

  render() {
    if (this.div) return this.div;
    const e = super.render();
    n(this, Gl) && (e.setAttribute('aria-label', n(this, Gl)), e.setAttribute('role', 'mark')), n(this, ke) ? e.classList.add('free') : this.div.addEventListener('keydown', A(this, bt, jb).bind(this), {
      signal: this._uiManager._signal,
    });
    const i = m(this, Ga, document.createElement('div'));
    return e.append(i), i.setAttribute('aria-hidden', 'true'), i.className = 'internal', i.style.clipPath = n(this, Wa), this.setDims(this.width, this.height), dy(this, n(this, Ga), ['pointerover', 'pointerleave']), this.enableEditing(), e;
  }

  pointerover() {
    let e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, je), {
      rootClass: {
        hovered: !0,
      },
    });
  }

  pointerleave() {
    let e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, je), {
      rootClass: {
        hovered: !1,
      },
    });
  }

  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        A(this, bt, bu).call(this, !0);
        break;
      case 1:
      case 3:
        A(this, bt, bu).call(this, !1);
        break;
    }
  }

  select() {
    let e;
    super.select(), n(this, je) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, je), {
      rootClass: {
        hovered: !1,
        selected: !0,
      },
    }));
  }

  unselect() {
    let e;
    super.unselect(), n(this, je) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, je), {
      rootClass: {
        selected: !1,
      },
    }), n(this, ke) || A(this, bt, bu).call(this, !1));
  }

  get _mustFixPosition() {
    return !n(this, ke);
  }

  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.updateProperties(n(this, Si), {
      rootClass: {
        hidden: !e,
      },
    }), this.parent.drawLayer.updateProperties(n(this, je), {
      rootClass: {
        hidden: !e,
      },
    }));
  }

  static startHighlighting(e, i, {
    target: s,
    x: r,
    y: a,
  }) {
    const {
      x: o,
      y: l,
      width: c,
      height: d,
    } = s.getBoundingClientRect(); const u = new AbortController(); const g = e.combinedSignal(u); const
      b = (E) => {
        u.abort(), A(this, Wi, Wb).call(this, e, E);
      };
    window.addEventListener('blur', b, {
      signal: g,
    }), window.addEventListener('pointerup', b, {
      signal: g,
    }), window.addEventListener('pointerdown', Kt, {
      capture: !0,
      passive: !1,
      signal: g,
    }), window.addEventListener('contextmenu', Ri, {
      signal: g,
    }), s.addEventListener('pointermove', A(this, Wi, $b).bind(this, e), {
      signal: g,
    }), this._freeHighlight = new qp({
      x: r,
      y: a,
    }, [o, l, c, d], e.scale, this._defaultThickness / 2, i, 1e-3), {
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId,
    } = e.drawLayer.draw({
      bbox: [0, 0, 1, 1],
      root: {
        viewBox: '0 0 1 1',
        fill: this._defaultColor,
        'fill-opacity': this._defaultOpacity,
      },
      rootClass: {
        highlight: !0,
        free: !0,
      },
      path: {
        d: this._freeHighlight.toSVGPath(),
      },
    }, !0, !0);
  }

  static async deserialize(e, i, s) {
    let S; let M; let T; let
      L;
    let r = null;
    if (e instanceof vb) {
      const {
        data: {
          quadPoints: R,
          rect: p,
          rotation: f,
          id: y,
          color: _,
          opacity: P,
          popupRef: k,
          richText: C,
          contentsObj: D,
          creationDate: N,
          modificationDate: I,
        },
        parent: {
          page: {
            pageNumber: B,
          },
        },
      } = e;
      r = e = {
        annotationType: ft.HIGHLIGHT,
        color: Array.from(_),
        opacity: P,
        quadPoints: R,
        boxes: null,
        pageIndex: B - 1,
        rect: p.slice(0),
        rotation: f,
        annotationElementId: y,
        id: y,
        deleted: !1,
        popupRef: k,
        richText: C,
        comment: (D == null ? void 0 : D.str) || null,
        creationDate: N,
        modificationDate: I,
      };
    } else if (e instanceof Pg) {
      const {
        data: {
          inkLists: R,
          rect: p,
          rotation: f,
          id: y,
          color: _,
          borderStyle: {
            rawWidth: P,
          },
          popupRef: k,
          richText: C,
          contentsObj: D,
          creationDate: N,
          modificationDate: I,
        },
        parent: {
          page: {
            pageNumber: B,
          },
        },
      } = e;
      r = e = {
        annotationType: ft.HIGHLIGHT,
        color: Array.from(_),
        thickness: P,
        inkLists: R,
        boxes: null,
        pageIndex: B - 1,
        rect: p.slice(0),
        rotation: f,
        annotationElementId: y,
        id: y,
        deleted: !1,
        popupRef: k,
        richText: C,
        comment: (D == null ? void 0 : D.str) || null,
        creationDate: N,
        modificationDate: I,
      };
    }
    const {
      color: a,
      quadPoints: o,
      inkLists: l,
      opacity: c,
    } = e; const
      d = await super.deserialize(e, i, s);
    d.color = tt.makeHexColor(...a), d.opacity = c || 1, l && m(d, Ui, e.thickness), d._initialData = r, e.comment && d.setCommentData(e);
    const [u, g] = d.pageDimensions; const
      [b, E] = d.pageTranslation;
    if (o) {
      const R = m(d, En, []);
      for (let p = 0; p < o.length; p += 8) {
        R.push({
          x: (o[p] - b) / u,
          y: 1 - (o[p + 1] - E) / g,
          width: (o[p + 2] - o[p]) / u,
          height: (o[p + 1] - o[p + 5]) / g,
        });
      }
      A(S = d, bt, Xp).call(S), A(M = d, bt, Wr).call(M), d.rotate(d.rotation);
    } else if (l) {
      m(d, ke, !0);
      const R = l[0]; const p = {
        x: R[0] - b,
        y: g - (R[1] - E),
      }; const
        f = new qp(p, [0, 0, u, g], 1, n(d, Ui) / 2, !0, 1e-3);
      for (let P = 0, k = R.length; P < k; P += 2) p.x = R[P] - b, p.y = g - (R[P + 1] - E), f.add(p);
      const {
        id: y,
        clipPathId: _,
      } = i.drawLayer.draw({
        bbox: [0, 0, 1, 1],
        root: {
          viewBox: '0 0 1 1',
          fill: d.color,
          'fill-opacity': d._defaultOpacity,
        },
        rootClass: {
          highlight: !0,
          free: !0,
        },
        path: {
          d: f.toSVGPath(),
        },
      }, !0, !0);
      A(T = d, bt, yu).call(T, {
        highlightOutlines: f.getOutlines(),
        highlightId: y,
        clipPathId: _,
      }), A(L = d, bt, Wr).call(L), d.rotate(d.parentRotation);
    }
    return d;
  }

  serialize(e = !1) {
    if (this.isEmpty() || e) return null;
    if (this.deleted) return this.serializeDeleted();
    const i = $t._colorManager.convert(this._uiManager.getNonHCMColor(this.color)); const
      s = super.serialize(e);
    return Object.assign(s, {
      color: i,
      opacity: this.opacity,
      thickness: n(this, Ui),
      quadPoints: A(this, bt, zb).call(this),
      outlines: A(this, bt, Ub).call(this, s.rect),
    }), this.addComment(s), this.annotationElementId && !A(this, bt, Gb).call(this, s) ? null : (s.id = this.annotationElementId, s);
  }

  renderAnnotationElement(e) {
    return this.deleted ? (e.hide(), null) : (e.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment,
    }), null);
  }

  static canCreateNewEmptyEditor() {
    return !1;
  }
};
Ul = new WeakMap(), vd = new WeakMap(), En = new WeakMap(), Wa = new WeakMap(), wd = new WeakMap(), ni = new WeakMap(), Sd = new WeakMap(), Ad = new WeakMap(), Ga = new WeakMap(), wi = new WeakMap(), Si = new WeakMap(), ke = new WeakMap(), $l = new WeakMap(), Wl = new WeakMap(), je = new WeakMap(), Gl = new WeakMap(), Ui = new WeakMap(), _d = new WeakMap(), bt = new WeakSet(), Xp = function () {
  const e = new Gp(n(this, En), 1e-3);
  m(this, wi, e.getOutlines()), [this.x, this.y, this.width, this.height] = n(this, wi).box;
  const i = new Gp(n(this, En), 25e-4, 1e-3, this._uiManager.direction === 'ltr');
  m(this, ni, i.getOutlines());
  const {
    firstPoint: s,
  } = n(this, wi);
  m(this, $l, [(s[0] - this.x) / this.width, (s[1] - this.y) / this.height]);
  const {
    lastPoint: r,
  } = n(this, ni);
  m(this, Wl, [(r[0] - this.x) / this.width, (r[1] - this.y) / this.height]);
}, yu = function ({
  highlightOutlines: e,
  highlightId: i,
  clipPathId: s,
}) {
  let g; let
    b;
  if (m(this, wi, e), m(this, ni, e.getNewOutline(n(this, Ui) / 2 + 1.5, 25e-4)), i >= 0) {
    m(this, Si, i), m(this, Wa, s), this.parent.drawLayer.finalizeDraw(i, {
      bbox: e.box,
      path: {
        d: e.toSVGPath(),
      },
    }), m(this, je, this.parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: !0,
        free: !0,
      },
      bbox: n(this, ni).box,
      path: {
        d: n(this, ni).toSVGPath(),
      },
    }, !0));
  } else if (this.parent) {
    const E = this.parent.viewport.rotation;
    this.parent.drawLayer.updateProperties(n(this, Si), {
      bbox: A(g = Tt, Wi, wo).call(g, n(this, wi).box, (E - this.rotation + 360) % 360),
      path: {
        d: e.toSVGPath(),
      },
    }), this.parent.drawLayer.updateProperties(n(this, je), {
      bbox: A(b = Tt, Wi, wo).call(b, n(this, ni).box, E),
      path: {
        d: n(this, ni).toSVGPath(),
      },
    });
  }
  const [a, o, l, c] = e.box;
  switch (this.rotation) {
    case 0:
      this.x = a, this.y = o, this.width = l, this.height = c;
      break;
    case 90: {
      const [E, S] = this.parentDimensions;
      this.x = o, this.y = 1 - a, this.width = l * S / E, this.height = c * E / S;
      break;
    }
    case 180:
      this.x = 1 - a, this.y = 1 - o, this.width = l, this.height = c;
      break;
    case 270: {
      const [E, S] = this.parentDimensions;
      this.x = 1 - o, this.y = a, this.width = l * S / E, this.height = c * E / S;
      break;
    }
  }
  const {
    firstPoint: d,
  } = e;
  m(this, $l, [(d[0] - a) / l, (d[1] - o) / c]);
  const {
    lastPoint: u,
  } = n(this, ni);
  m(this, Wl, [(u[0] - a) / l, (u[1] - o) / c]);
}, Nb = function (e) {
  const i = (a, o) => {
    this.color = a, this.opacity = o, this.onUpdatedColor();
  }; const s = this.color; const
    r = this.opacity;
  this.addCommands({
    cmd: i.bind(this, e, Tt._defaultOpacity),
    undo: i.bind(this, s, r),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: At.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0,
  }), this._reportTelemetry({
    action: 'color_changed',
    color: this._uiManager.getNonHCMColorName(e),
  }, !0);
}, Bb = function (e) {
  const i = n(this, Ui); const
    s = (r) => {
      m(this, Ui, r), A(this, bt, Hb).call(this, r);
    };
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: At.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0,
  }), this._reportTelemetry({
    action: 'thickness_changed',
    thickness: e,
  }, !0);
}, Hb = function (e) {
  n(this, ke) && (A(this, bt, yu).call(this, {
    highlightOutlines: n(this, wi).getNewOutline(e / 2),
  }), this.fixAndSetPosition(), this.setDims(this.width, this.height));
}, Yp = function () {
  n(this, Si) === null || !this.parent || (this.parent.drawLayer.remove(n(this, Si)), m(this, Si, null), this.parent.drawLayer.remove(n(this, je)), m(this, je, null));
}, Wr = function (e = this.parent) {
  n(this, Si) === null && ({
    id: de(this, Si)._,
    clipPathId: de(this, Wa)._,
  } = e.drawLayer.draw({
    bbox: n(this, wi).box,
    root: {
      viewBox: '0 0 1 1',
      fill: this.color,
      'fill-opacity': this.opacity,
    },
    rootClass: {
      highlight: !0,
      free: n(this, ke),
    },
    path: {
      d: n(this, wi).toSVGPath(),
    },
  }, !1, !0), m(this, je, e.drawLayer.drawOutline({
    rootClass: {
      highlightOutline: !0,
      free: n(this, ke),
    },
    bbox: n(this, ni).box,
    path: {
      d: n(this, ni).toSVGPath(),
    },
  }, n(this, ke))), n(this, Ga) && (n(this, Ga).style.clipPath = n(this, Wa)));
}, Wi = new WeakSet(), wo = function ([e, i, s, r], a) {
  switch (a) {
    case 90:
      return [1 - i - r, e, r, s];
    case 180:
      return [1 - e - s, 1 - i - r, s, r];
    case 270:
      return [i, 1 - e - s, r, s];
  }
  return [e, i, s, r];
}, jb = function (e) {
  Tt._keyboardManager.exec(this, e);
}, bu = function (e) {
  if (!n(this, Ul)) return;
  const i = window.getSelection();
  e ? i.setPosition(n(this, Ul), n(this, vd)) : i.setPosition(n(this, Sd), n(this, Ad));
}, vu = function () {
  return n(this, ke) ? this.rotation : 0;
}, zb = function () {
  if (n(this, ke)) return null;
  const [e, i] = this.pageDimensions; const [s, r] = this.pageTranslation; const a = n(this, En); const
    o = new Float32Array(a.length * 8);
  let l = 0;
  for (const {
    x: c,
    y: d,
    width: u,
    height: g,
  } of a) {
    const b = c * e + s; const
      E = (1 - d) * i + r;
    o[l] = o[l + 4] = b, o[l + 1] = o[l + 3] = E, o[l + 2] = o[l + 6] = b + u * e, o[l + 5] = o[l + 7] = E - g * i, l += 8;
  }
  return o;
}, Ub = function (e) {
  return n(this, wi).serialize(e, A(this, bt, vu).call(this));
}, $b = function (e, i) {
  this._freeHighlight.add(i) && e.drawLayer.updateProperties(this._freeHighlightId, {
    path: {
      d: this._freeHighlight.toSVGPath(),
    },
  });
}, Wb = function (e, i) {
  this._freeHighlight.isEmpty() ? e.drawLayer.remove(this._freeHighlightId) : e.createAndAddNewEditor(i, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: 'main_toolbar',
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = '';
}, Gb = function (e) {
  const {
    color: i,
  } = this._initialData;
  return this.hasEditedComment || e.color.some((s, r) => s !== i[r]);
}, v(Tt, Wi), V(Tt, '_defaultColor', null), V(Tt, '_defaultOpacity', 1), V(Tt, '_defaultThickness', 12), V(Tt, '_type', 'highlight'), V(Tt, '_editorType', ft.HIGHLIGHT), V(Tt, '_freeHighlightId', -1), V(Tt, '_freeHighlight', null), V(Tt, '_freeHighlightClipId', '');
const Bu = Tt;
let Va;
class Vb {
  constructor() {
    v(this, Va, /* @__PURE__ */ Object.create(null));
  }

  updateProperty(t, e) {
    this[t] = e, this.updateSVGProperty(t, e);
  }

  updateProperties(t) {
    if (t) for (const [e, i] of Object.entries(t)) e.startsWith('_') || this.updateProperty(e, i);
  }

  updateSVGProperty(t, e) {
    n(this, Va)[t] = e;
  }

  toSVGProperties() {
    const t = n(this, Va);
    return m(this, Va, /* @__PURE__ */ Object.create(null)), {
      root: t,
    };
  }

  reset() {
    m(this, Va, /* @__PURE__ */ Object.create(null));
  }

  updateAll(t = this) {
    this.updateProperties(t);
  }

  clone() {
    zt('Not implemented');
  }
}
Va = new WeakMap();
let Ai; let Vl; let be; let qa; let Xa; let Ar; let _r; let xr; let Ya; let xt; let Kp; let Jp; let Qp; let Dh; let qb; let wu; let Oh; let
  So;
const et = class et extends $t {
  constructor(e) {
    super(e);
    v(this, xt);
    v(this, Ai, null);
    v(this, Vl);
    V(this, '_colorPicker', null);
    V(this, '_drawId', null);
    m(this, Vl, e.mustBeCommitted || !1), this._addOutlines(e);
  }

  onUpdatedColor() {
    let e;
    (e = this._colorPicker) == null || e.update(this.color), super.onUpdatedColor();
  }

  _addOutlines(e) {
    e.drawOutlines && (A(this, xt, Kp).call(this, e), A(this, xt, Dh).call(this));
  }

  static _mergeSVGProperties(e, i) {
    const s = new Set(Object.keys(e));
    for (const [r, a] of Object.entries(i)) s.has(r) ? Object.assign(e[r], a) : e[r] = a;
    return e;
  }

  static getDefaultDrawingOptions(e) {
    zt('Not implemented');
  }

  static get typesMap() {
    zt('Not implemented');
  }

  static get isDrawer() {
    return !0;
  }

  static get supportMultipleDrawings() {
    return !1;
  }

  static updateDefaultParams(e, i) {
    const s = this.typesMap.get(e);
    s && this._defaultDrawingOptions.updateProperty(s, i), this._currentParent && (n(et, be).updateProperty(s, i), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }

  updateParams(e, i) {
    const s = this.constructor.typesMap.get(e);
    s && this._updateProperty(e, s, i);
  }

  static get defaultPropertiesToUpdate() {
    const e = []; const
      i = this._defaultDrawingOptions;
    for (const [s, r] of this.typesMap) e.push([s, i[r]]);
    return e;
  }

  get propertiesToUpdate() {
    const e = []; const
      {
        _drawingOptions: i,
      } = this;
    for (const [s, r] of this.constructor.typesMap) e.push([s, i[r]]);
    return e;
  }

  _updateProperty(e, i, s) {
    const r = this._drawingOptions; const a = r[i]; const
      o = (l) => {
        let d;
        r.updateProperty(i, l);
        const c = n(this, Ai).updateProperty(i, l);
        c && A(this, xt, Oh).call(this, c), (d = this.parent) == null || d.drawLayer.updateProperties(this._drawId, r.toSVGProperties()), e === this.colorType && this.onUpdatedColor();
      };
    this.addCommands({
      cmd: o.bind(this, s),
      undo: o.bind(this, a),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: e,
      overwriteIfSameType: !0,
      keepUndo: !0,
    });
  }

  _onResizing() {
    let e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, et._mergeSVGProperties(n(this, Ai).getPathResizingSVGProperties(A(this, xt, wu).call(this)), {
      bbox: A(this, xt, So).call(this),
    }));
  }

  _onResized() {
    let e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, et._mergeSVGProperties(n(this, Ai).getPathResizedSVGProperties(A(this, xt, wu).call(this)), {
      bbox: A(this, xt, So).call(this),
    }));
  }

  _onTranslating(e, i) {
    let s;
    (s = this.parent) == null || s.drawLayer.updateProperties(this._drawId, {
      bbox: A(this, xt, So).call(this),
    });
  }

  _onTranslated() {
    let e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, et._mergeSVGProperties(n(this, Ai).getPathTranslatedSVGProperties(A(this, xt, wu).call(this), this.parentDimensions), {
      bbox: A(this, xt, So).call(this),
    }));
  }

  _onStartDragging() {
    let e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !0,
      },
    });
  }

  _onStopDragging() {
    let e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !1,
      },
    });
  }

  commit() {
    super.commit(), this.disableEditMode(), this.disableEditing();
  }

  disableEditing() {
    super.disableEditing(), this.div.classList.toggle('disabled', !0);
  }

  enableEditing() {
    super.enableEditing(), this.div.classList.toggle('disabled', !1);
  }

  getBaseTranslation() {
    return [0, 0];
  }

  get isResizable() {
    return !0;
  }

  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, n(this, Vl) && (m(this, Vl, !1), this.commit(), this.parent.setSelected(this), e && this.isOnScreen && this.div.focus());
  }

  remove() {
    A(this, xt, Qp).call(this), super.remove();
  }

  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (A(this, xt, Dh).call(this), A(this, xt, Oh).call(this, n(this, Ai).box), this.isAttachedToDOM || this.parent.add(this)));
  }

  setParent(e) {
    let s;
    let i = !1;
    this.parent && !e ? (this._uiManager.removeShouldRescale(this), A(this, xt, Qp).call(this)) : e && (this._uiManager.addShouldRescale(this), A(this, xt, Dh).call(this, e), i = !this.parent && ((s = this.div) == null ? void 0 : s.classList.contains('selectedEditor'))), super.setParent(e), i && this.select();
  }

  rotate() {
    this.parent && this.parent.drawLayer.updateProperties(this._drawId, et._mergeSVGProperties({
      bbox: A(this, xt, So).call(this),
    }, n(this, Ai).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }

  onScaleChanging() {
    this.parent && A(this, xt, Oh).call(this, n(this, Ai).updateParentDimensions(this.parentDimensions, this.parent.scale));
  }

  static onScaleChangingWhenDrawing() {
  }

  render() {
    if (this.div) return this.div;
    let e; let
      i;
    this._isCopy && (e = this.x, i = this.y);
    const s = super.render();
    s.classList.add('draw');
    const r = document.createElement('div');
    return s.append(r), r.setAttribute('aria-hidden', 'true'), r.className = 'internal', this.setDims(), this._uiManager.addShouldRescale(this), this.disableEditing(), this._isCopy && this._moveAfterPaste(e, i), s;
  }

  static createDrawerInstance(e, i, s, r, a) {
    zt('Not implemented');
  }

  static startDrawing(e, i, s, r) {
    let M;
    const {
      target: a,
      offsetX: o,
      offsetY: l,
      pointerId: c,
      pointerType: d,
    } = r;
    if (n(et, _r) && n(et, _r) !== d) return;
    const {
      viewport: {
        rotation: u,
      },
    } = e; const {
      width: g,
      height: b,
    } = a.getBoundingClientRect(); const E = m(et, qa, new AbortController()); const
      S = e.combinedSignal(E);
    if (n(et, Ar) || m(et, Ar, c), n(et, _r) ?? m(et, _r, d), window.addEventListener('pointerup', (T) => {
      let L;
      n(et, Ar) === T.pointerId ? this._endDraw(T) : (L = n(et, xr)) == null || L.delete(T.pointerId);
    }, {
      signal: S,
    }), window.addEventListener('pointercancel', (T) => {
      let L;
      n(et, Ar) === T.pointerId ? this._currentParent.endDrawingSession() : (L = n(et, xr)) == null || L.delete(T.pointerId);
    }, {
      signal: S,
    }), window.addEventListener('pointerdown', (T) => {
      n(et, _r) === T.pointerType && ((n(et, xr) || m(et, xr, /* @__PURE__ */ new Set())).add(T.pointerId), n(et, be).isCancellable() && (n(et, be).removeLastElement(), n(et, be).isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null)));
    }, {
      capture: !0,
      passive: !1,
      signal: S,
    }), window.addEventListener('contextmenu', Ri, {
      signal: S,
    }), a.addEventListener('pointermove', this._drawMove.bind(this), {
      signal: S,
    }), a.addEventListener('touchmove', (T) => {
      T.timeStamp === n(et, Ya) && Kt(T);
    }, {
      signal: S,
    }), e.toggleDrawing(), (M = i._editorUndoBar) == null || M.hide(), n(et, be)) {
      e.drawLayer.updateProperties(this._currentDrawId, n(et, be).startNew(o, l, g, b, u));
      return;
    }
    i.updateUIForDefaultProperties(this), m(et, be, this.createDrawerInstance(o, l, g, b, u)), m(et, Xa, this.getDefaultDrawingOptions()), this._currentParent = e, {
      id: this._currentDrawId,
    } = e.drawLayer.draw(this._mergeSVGProperties(n(et, Xa).toSVGProperties(), n(et, be).defaultSVGProperties), !0, !1);
  }

  static _drawMove(e) {
    let a;
    if (m(et, Ya, -1), !n(et, be)) return;
    const {
      offsetX: i,
      offsetY: s,
      pointerId: r,
    } = e;
    if (n(et, Ar) === r) {
      if (((a = n(et, xr)) == null ? void 0 : a.size) >= 1) {
        this._endDraw(e);
        return;
      }
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, n(et, be).add(i, s)), m(et, Ya, e.timeStamp), Kt(e);
    }
  }

  static _cleanup(e) {
    e && (this._currentDrawId = -1, this._currentParent = null, m(et, be, null), m(et, Xa, null), m(et, _r, null), m(et, Ya, NaN)), n(et, qa) && (n(et, qa).abort(), m(et, qa, null), m(et, Ar, NaN), m(et, xr, null));
  }

  static _endDraw(e) {
    const i = this._currentParent;
    if (i) {
      if (i.toggleDrawing(!0), this._cleanup(!1), (e == null ? void 0 : e.target) === i.div && i.drawLayer.updateProperties(this._currentDrawId, n(et, be).end(e.offsetX, e.offsetY)), this.supportMultipleDrawings) {
        const s = n(et, be); const r = this._currentDrawId; const
          a = s.getLastElement();
        i.addCommands({
          cmd: () => {
            i.drawLayer.updateProperties(r, s.setLastElement(a));
          },
          undo: () => {
            i.drawLayer.updateProperties(r, s.removeLastElement());
          },
          mustExec: !1,
          type: At.DRAW_STEP,
        });
        return;
      }
      this.endDrawing(!1);
    }
  }

  static endDrawing(e) {
    const i = this._currentParent;
    if (!i) return null;
    if (i.toggleDrawing(!0), i.cleanUndoStack(At.DRAW_STEP), !n(et, be).isEmpty()) {
      const {
        pageDimensions: [s, r],
        scale: a,
      } = i; const
        o = i.createAndAddNewEditor({
          offsetX: 0,
          offsetY: 0,
        }, !1, {
          drawId: this._currentDrawId,
          drawOutlines: n(et, be).getOutlines(s * a, r * a, a, this._INNER_MARGIN),
          drawingOptions: n(et, Xa),
          mustBeCommitted: !e,
        });
      return this._cleanup(!0), o;
    }
    return i.drawLayer.remove(this._currentDrawId), this._cleanup(!0), null;
  }

  createDrawingOptions(e) {
  }

  static deserializeDraw(e, i, s, r, a, o) {
    zt('Not implemented');
  }

  static async deserialize(e, i, s) {
    let u; let
      g;
    const {
      rawDims: {
        pageWidth: r,
        pageHeight: a,
        pageX: o,
        pageY: l,
      },
    } = i.viewport; const c = this.deserializeDraw(o, l, r, a, this._INNER_MARGIN, e); const
      d = await super.deserialize(e, i, s);
    return d.createDrawingOptions(e), A(u = d, xt, Kp).call(u, {
      drawOutlines: c,
    }), A(g = d, xt, Dh).call(g), d.onScaleChanging(), d.rotate(), d;
  }

  serializeDraw(e) {
    const [i, s] = this.pageTranslation; const
      [r, a] = this.pageDimensions;
    return n(this, Ai).serialize([i, s, r, a], e);
  }

  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getPDFRect(),
    }), null;
  }

  static canCreateNewEmptyEditor() {
    return !1;
  }
};
Ai = new WeakMap(), Vl = new WeakMap(), be = new WeakMap(), qa = new WeakMap(), Xa = new WeakMap(), Ar = new WeakMap(), _r = new WeakMap(), xr = new WeakMap(), Ya = new WeakMap(), xt = new WeakSet(), Kp = function ({
  drawOutlines: e,
  drawId: i,
  drawingOptions: s,
}) {
  m(this, Ai, e), this._drawingOptions || (this._drawingOptions = s), this.annotationElementId || this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`), i >= 0 ? (this._drawId = i, this.parent.drawLayer.finalizeDraw(i, e.defaultProperties)) : this._drawId = A(this, xt, Jp).call(this, e, this.parent), A(this, xt, Oh).call(this, e.box);
}, Jp = function (e, i) {
  const {
    id: s,
  } = i.drawLayer.draw(et._mergeSVGProperties(this._drawingOptions.toSVGProperties(), e.defaultSVGProperties), !1, !1);
  return s;
}, Qp = function () {
  this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
}, Dh = function (e = this.parent) {
  if (!(this._drawId !== null && this.parent === e)) {
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, e.drawLayer);
      return;
    }
    this._drawingOptions.updateAll(), this._drawId = A(this, xt, Jp).call(this, n(this, Ai), e);
  }
}, qb = function ([e, i, s, r]) {
  const {
    parentDimensions: [a, o],
    rotation: l,
  } = this;
  switch (l) {
    case 90:
      return [i, 1 - e, s * (o / a), r * (a / o)];
    case 180:
      return [1 - e, 1 - i, s, r];
    case 270:
      return [1 - i, e, s * (o / a), r * (a / o)];
    default:
      return [e, i, s, r];
  }
}, wu = function () {
  const {
    x: e,
    y: i,
    width: s,
    height: r,
    parentDimensions: [a, o],
    rotation: l,
  } = this;
  switch (l) {
    case 90:
      return [1 - i, e, s * (a / o), r * (o / a)];
    case 180:
      return [1 - e, 1 - i, s, r];
    case 270:
      return [i, 1 - e, s * (a / o), r * (o / a)];
    default:
      return [e, i, s, r];
  }
}, Oh = function (e) {
  [this.x, this.y, this.width, this.height] = A(this, xt, qb).call(this, e), this.div && (this.fixAndSetPosition(), this.setDims()), this._onResized();
}, So = function () {
  const {
    x: e,
    y: i,
    width: s,
    height: r,
    rotation: a,
    parentRotation: o,
    parentDimensions: [l, c],
  } = this;
  switch ((a * 4 + o) / 90) {
    case 1:
      return [1 - i - r, e, r, s];
    case 2:
      return [1 - e - s, 1 - i - r, s, r];
    case 3:
      return [i, 1 - e - s, r, s];
    case 4:
      return [e, i - s * (l / c), r * (c / l), s * (l / c)];
    case 5:
      return [1 - i, e, s * (l / c), r * (c / l)];
    case 6:
      return [1 - e - r * (c / l), 1 - i, r * (c / l), s * (l / c)];
    case 7:
      return [i - s * (l / c), 1 - e - r * (c / l), s * (l / c), r * (c / l)];
    case 8:
      return [e - s, i - r, s, r];
    case 9:
      return [1 - i, e - s, r, s];
    case 10:
      return [1 - e, 1 - i, s, r];
    case 11:
      return [i - r, 1 - e, r, s];
    case 12:
      return [e - r * (c / l), i, r * (c / l), s * (l / c)];
    case 13:
      return [1 - i - s * (l / c), e - r * (c / l), s * (l / c), r * (c / l)];
    case 14:
      return [1 - e, 1 - i - s * (l / c), r * (c / l), s * (l / c)];
    case 15:
      return [i, 1 - e, s * (l / c), r * (c / l)];
    default:
      return [e, i, s, r];
  }
}, V(et, '_currentDrawId', -1), V(et, '_currentParent', null), v(et, be, null), v(et, qa, null), v(et, Xa, null), v(et, Ar, NaN), v(et, _r, null), v(et, xr, null), v(et, Ya, NaN), V(et, '_INNER_MARGIN', 3);
const Hu = et;
let Os; let ve; let we; let Ka; let ql; let Ge; let Re; let $i; let Ja; let Qa; let Za; let Xl; let
  Su;
class eS {
  constructor(t, e, i, s, r, a) {
    v(this, Xl);
    v(this, Os, new Float64Array(6));
    v(this, ve);
    v(this, we);
    v(this, Ka);
    v(this, ql);
    v(this, Ge);
    v(this, Re, '');
    v(this, $i, 0);
    v(this, Ja, new Od());
    v(this, Qa);
    v(this, Za);
    m(this, Qa, i), m(this, Za, s), m(this, Ka, r), m(this, ql, a), [t, e] = A(this, Xl, Su).call(this, t, e);
    const o = m(this, ve, [NaN, NaN, NaN, NaN, t, e]);
    m(this, Ge, [t, e]), m(this, we, [{
      line: o,
      points: n(this, Ge),
    }]), n(this, Os).set(o, 0);
  }

  updateProperty(t, e) {
    t === 'stroke-width' && m(this, ql, e);
  }

  isEmpty() {
    return !n(this, we) || n(this, we).length === 0;
  }

  isCancellable() {
    return n(this, Ge).length <= 10;
  }

  add(t, e) {
    [t, e] = A(this, Xl, Su).call(this, t, e);
    const [i, s, r, a] = n(this, Os).subarray(2, 6); const o = t - r; const
      l = e - a;
    return Math.hypot(n(this, Qa) * o, n(this, Za) * l) <= 2 ? null : (n(this, Ge).push(t, e), isNaN(i) ? (n(this, Os).set([r, a, t, e], 2), n(this, ve).push(NaN, NaN, NaN, NaN, t, e), {
      path: {
        d: this.toSVGPath(),
      },
    }) : (isNaN(n(this, Os)[0]) && n(this, ve).splice(6, 6), n(this, Os).set([i, s, r, a, t, e], 0), n(this, ve).push(...Z.createBezierPoints(i, s, r, a, t, e)), {
      path: {
        d: this.toSVGPath(),
      },
    }));
  }

  end(t, e) {
    const i = this.add(t, e);
    return i || (n(this, Ge).length === 2 ? {
      path: {
        d: this.toSVGPath(),
      },
    } : null);
  }

  startNew(t, e, i, s, r) {
    m(this, Qa, i), m(this, Za, s), m(this, Ka, r), [t, e] = A(this, Xl, Su).call(this, t, e);
    const a = m(this, ve, [NaN, NaN, NaN, NaN, t, e]);
    m(this, Ge, [t, e]);
    const o = n(this, we).at(-1);
    return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), n(this, we).push({
      line: a,
      points: n(this, Ge),
    }), n(this, Os).set(a, 0), m(this, $i, 0), this.toSVGPath(), null;
  }

  getLastElement() {
    return n(this, we).at(-1);
  }

  setLastElement(t) {
    return n(this, we) ? (n(this, we).push(t), m(this, ve, t.line), m(this, Ge, t.points), m(this, $i, 0), {
      path: {
        d: this.toSVGPath(),
      },
    }) : n(this, Ja).setLastElement(t);
  }

  removeLastElement() {
    if (!n(this, we)) return n(this, Ja).removeLastElement();
    n(this, we).pop(), m(this, Re, '');
    for (let t = 0, e = n(this, we).length; t < e; t++) {
      const {
        line: i,
        points: s,
      } = n(this, we)[t];
      m(this, ve, i), m(this, Ge, s), m(this, $i, 0), this.toSVGPath();
    }
    return {
      path: {
        d: n(this, Re),
      },
    };
  }

  toSVGPath() {
    const t = Z.svgRound(n(this, ve)[4]); const
      e = Z.svgRound(n(this, ve)[5]);
    if (n(this, Ge).length === 2) return m(this, Re, `${n(this, Re)} M ${t} ${e} Z`), n(this, Re);
    if (n(this, Ge).length <= 6) {
      const s = n(this, Re).lastIndexOf('M');
      m(this, Re, `${n(this, Re).slice(0, s)} M ${t} ${e}`), m(this, $i, 6);
    }
    if (n(this, Ge).length === 4) {
      const s = Z.svgRound(n(this, ve)[10]); const
        r = Z.svgRound(n(this, ve)[11]);
      return m(this, Re, `${n(this, Re)} L ${s} ${r}`), m(this, $i, 12), n(this, Re);
    }
    const i = [];
    n(this, $i) === 0 && (i.push(`M ${t} ${e}`), m(this, $i, 6));
    for (let s = n(this, $i), r = n(this, ve).length; s < r; s += 6) {
      const [a, o, l, c, d, u] = n(this, ve).slice(s, s + 6).map(Z.svgRound);
      i.push(`C${a} ${o} ${l} ${c} ${d} ${u}`);
    }
    return m(this, Re, n(this, Re) + i.join(' ')), m(this, $i, n(this, ve).length), n(this, Re);
  }

  getOutlines(t, e, i, s) {
    const r = n(this, we).at(-1);
    return r.line = new Float32Array(r.line), r.points = new Float32Array(r.points), n(this, Ja).build(n(this, we), t, e, i, n(this, Ka), n(this, ql), s), m(this, Os, null), m(this, ve, null), m(this, we, null), m(this, Re, null), n(this, Ja);
  }

  get defaultSVGProperties() {
    return {
      root: {
        viewBox: '0 0 10000 10000',
      },
      rootClass: {
        draw: !0,
      },
      bbox: [0, 0, 1, 1],
    };
  }
}
Os = new WeakMap(), ve = new WeakMap(), we = new WeakMap(), Ka = new WeakMap(), ql = new WeakMap(), Ge = new WeakMap(), Re = new WeakMap(), $i = new WeakMap(), Ja = new WeakMap(), Qa = new WeakMap(), Za = new WeakMap(), Xl = new WeakSet(), Su = function (t, e) {
  return Z._normalizePoint(t, e, n(this, Qa), n(this, Za), n(this, Ka));
};
let Ve; let xd; let Ed; let _i; let Is; let Fs; let Yl; let Kl; let to; let Le; let qs; let Xb; let Yb; let
  Kb;
class Od extends Z {
  constructor() {
    super(...arguments);
    v(this, Le);
    v(this, Ve);
    v(this, xd, 0);
    v(this, Ed);
    v(this, _i);
    v(this, Is);
    v(this, Fs);
    v(this, Yl);
    v(this, Kl);
    v(this, to);
  }

  build(e, i, s, r, a, o, l) {
    m(this, Is, i), m(this, Fs, s), m(this, Yl, r), m(this, Kl, a), m(this, to, o), m(this, Ed, l ?? 0), m(this, _i, e), A(this, Le, Yb).call(this);
  }

  get thickness() {
    return n(this, to);
  }

  setLastElement(e) {
    return n(this, _i).push(e), {
      path: {
        d: this.toSVGPath(),
      },
    };
  }

  removeLastElement() {
    return n(this, _i).pop(), {
      path: {
        d: this.toSVGPath(),
      },
    };
  }

  toSVGPath() {
    const e = [];
    for (const {
      line: i,
    } of n(this, _i)) {
      if (e.push(`M${Z.svgRound(i[4])} ${Z.svgRound(i[5])}`), i.length === 6) {
        e.push('Z');
        continue;
      }
      if (i.length === 12 && isNaN(i[6])) {
        e.push(`L${Z.svgRound(i[10])} ${Z.svgRound(i[11])}`);
        continue;
      }
      for (let s = 6, r = i.length; s < r; s += 6) {
        const [a, o, l, c, d, u] = i.subarray(s, s + 6).map(Z.svgRound);
        e.push(`C${a} ${o} ${l} ${c} ${d} ${u}`);
      }
    }
    return e.join('');
  }

  serialize([e, i, s, r], a) {
    const o = []; const l = []; const
      [c, d, u, g] = A(this, Le, Xb).call(this);
    let b; let E; let S; let M; let T; let L; let R; let p; let
      f;
    switch (n(this, Kl)) {
      case 0:
        f = Z._rescale, b = e, E = i + r, S = s, M = -r, T = e + c * s, L = i + (1 - d - g) * r, R = e + (c + u) * s, p = i + (1 - d) * r;
        break;
      case 90:
        f = Z._rescaleAndSwap, b = e, E = i, S = s, M = r, T = e + d * s, L = i + c * r, R = e + (d + g) * s, p = i + (c + u) * r;
        break;
      case 180:
        f = Z._rescale, b = e + s, E = i, S = -s, M = r, T = e + (1 - c - u) * s, L = i + d * r, R = e + (1 - c) * s, p = i + (d + g) * r;
        break;
      case 270:
        f = Z._rescaleAndSwap, b = e + s, E = i + r, S = -s, M = -r, T = e + (1 - d - g) * s, L = i + (1 - c - u) * r, R = e + (1 - d) * s, p = i + (1 - c) * r;
        break;
    }
    for (const {
      line: y,
      points: _,
    } of n(this, _i)) o.push(f(y, b, E, S, M, a ? new Array(y.length) : null)), l.push(f(_, b, E, S, M, a ? new Array(_.length) : null));
    return {
      lines: o,
      points: l,
      rect: [T, L, R, p],
    };
  }

  static deserialize(e, i, s, r, a, {
    paths: {
      lines: o,
      points: l,
    },
    rotation: c,
    thickness: d,
  }) {
    const u = [];
    let g; let b; let E; let S; let
      M;
    switch (c) {
      case 0:
        M = Z._rescale, g = -e / s, b = i / r + 1, E = 1 / s, S = -1 / r;
        break;
      case 90:
        M = Z._rescaleAndSwap, g = -i / r, b = -e / s, E = 1 / r, S = 1 / s;
        break;
      case 180:
        M = Z._rescale, g = e / s + 1, b = -i / r, E = -1 / s, S = 1 / r;
        break;
      case 270:
        M = Z._rescaleAndSwap, g = i / r + 1, b = e / s + 1, E = -1 / r, S = -1 / s;
        break;
    }
    if (!o) {
      o = [];
      for (const L of l) {
        const R = L.length;
        if (R === 2) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, L[0], L[1]]));
          continue;
        }
        if (R === 4) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, L[0], L[1], NaN, NaN, NaN, NaN, L[2], L[3]]));
          continue;
        }
        const p = new Float32Array(3 * (R - 2));
        o.push(p);
        let [f, y, _, P] = L.subarray(0, 4);
        p.set([NaN, NaN, NaN, NaN, f, y], 0);
        for (let k = 4; k < R; k += 2) {
          const C = L[k]; const
            D = L[k + 1];
          p.set(Z.createBezierPoints(f, y, _, P, C, D), (k - 2) * 3), [f, y, _, P] = [_, P, C, D];
        }
      }
    }
    for (let L = 0, R = o.length; L < R; L++) {
      u.push({
        line: M(o[L].map((p) => p ?? NaN), g, b, E, S),
        points: M(l[L].map((p) => p ?? NaN), g, b, E, S),
      });
    }
    const T = new this.prototype.constructor();
    return T.build(u, s, r, 1, c, d, a), T;
  }

  get box() {
    return n(this, Ve);
  }

  updateProperty(e, i) {
    return e === 'stroke-width' ? A(this, Le, Kb).call(this, i) : null;
  }

  updateParentDimensions([e, i], s) {
    const [r, a] = A(this, Le, qs).call(this);
    m(this, Is, e), m(this, Fs, i), m(this, Yl, s);
    const [o, l] = A(this, Le, qs).call(this); const c = o - r; const d = l - a; const
      u = n(this, Ve);
    return u[0] -= c, u[1] -= d, u[2] += 2 * c, u[3] += 2 * d, u;
  }

  updateRotation(e) {
    return m(this, xd, e), {
      path: {
        transform: this.rotationTransform,
      },
    };
  }

  get viewBox() {
    return n(this, Ve).map(Z.svgRound).join(' ');
  }

  get defaultProperties() {
    const [e, i] = n(this, Ve);
    return {
      root: {
        viewBox: this.viewBox,
      },
      path: {
        'transform-origin': `${Z.svgRound(e)} ${Z.svgRound(i)}`,
      },
    };
  }

  get rotationTransform() {
    const [, , e, i] = n(this, Ve);
    let s = 0; let r = 0; let a = 0; let o = 0; let l = 0; let
      c = 0;
    switch (n(this, xd)) {
      case 90:
        r = i / e, a = -e / i, l = e;
        break;
      case 180:
        s = -1, o = -1, l = e, c = i;
        break;
      case 270:
        r = -i / e, a = e / i, c = i;
        break;
      default:
        return '';
    }
    return `matrix(${s} ${r} ${a} ${o} ${Z.svgRound(l)} ${Z.svgRound(c)})`;
  }

  getPathResizingSVGProperties([e, i, s, r]) {
    const [a, o] = A(this, Le, qs).call(this); const
      [l, c, d, u] = n(this, Ve);
    if (Math.abs(d - a) <= Z.PRECISION || Math.abs(u - o) <= Z.PRECISION) {
      const M = e + s / 2 - (l + d / 2); const
        T = i + r / 2 - (c + u / 2);
      return {
        path: {
          'transform-origin': `${Z.svgRound(e)} ${Z.svgRound(i)}`,
          transform: `${this.rotationTransform} translate(${M} ${T})`,
        },
      };
    }
    const g = (s - 2 * a) / (d - 2 * a); const b = (r - 2 * o) / (u - 2 * o); const E = d / s; const
      S = u / r;
    return {
      path: {
        'transform-origin': `${Z.svgRound(l)} ${Z.svgRound(c)}`,
        transform: `${this.rotationTransform} scale(${E} ${S}) translate(${Z.svgRound(a)} ${Z.svgRound(o)}) scale(${g} ${b}) translate(${Z.svgRound(-a)} ${Z.svgRound(-o)})`,
      },
    };
  }

  getPathResizedSVGProperties([e, i, s, r]) {
    const [a, o] = A(this, Le, qs).call(this); const l = n(this, Ve); const
      [c, d, u, g] = l;
    if (l[0] = e, l[1] = i, l[2] = s, l[3] = r, Math.abs(u - a) <= Z.PRECISION || Math.abs(g - o) <= Z.PRECISION) {
      const T = e + s / 2 - (c + u / 2); const
        L = i + r / 2 - (d + g / 2);
      for (const {
        line: R,
        points: p,
      } of n(this, _i)) Z._translate(R, T, L, R), Z._translate(p, T, L, p);
      return {
        root: {
          viewBox: this.viewBox,
        },
        path: {
          'transform-origin': `${Z.svgRound(e)} ${Z.svgRound(i)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath(),
        },
      };
    }
    const b = (s - 2 * a) / (u - 2 * a); const E = (r - 2 * o) / (g - 2 * o); const S = -b * (c + a) + e + a; const
      M = -E * (d + o) + i + o;
    if (b !== 1 || E !== 1 || S !== 0 || M !== 0) {
      for (const {
        line: T,
        points: L,
      } of n(this, _i)) Z._rescale(T, S, M, b, E, T), Z._rescale(L, S, M, b, E, L);
    }
    return {
      root: {
        viewBox: this.viewBox,
      },
      path: {
        'transform-origin': `${Z.svgRound(e)} ${Z.svgRound(i)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath(),
      },
    };
  }

  getPathTranslatedSVGProperties([e, i], s) {
    const [r, a] = s; const o = n(this, Ve); const l = e - o[0]; const
      c = i - o[1];
    if (n(this, Is) === r && n(this, Fs) === a) {
      for (const {
        line: d,
        points: u,
      } of n(this, _i)) Z._translate(d, l, c, d), Z._translate(u, l, c, u);
    } else {
      const d = n(this, Is) / r; const
        u = n(this, Fs) / a;
      m(this, Is, r), m(this, Fs, a);
      for (const {
        line: g,
        points: b,
      } of n(this, _i)) Z._rescale(g, l, c, d, u, g), Z._rescale(b, l, c, d, u, b);
      o[2] *= d, o[3] *= u;
    }
    return o[0] = e, o[1] = i, {
      root: {
        viewBox: this.viewBox,
      },
      path: {
        d: this.toSVGPath(),
        'transform-origin': `${Z.svgRound(e)} ${Z.svgRound(i)}`,
      },
    };
  }

  get defaultSVGProperties() {
    const e = n(this, Ve);
    return {
      root: {
        viewBox: this.viewBox,
      },
      rootClass: {
        draw: !0,
      },
      path: {
        d: this.toSVGPath(),
        'transform-origin': `${Z.svgRound(e[0])} ${Z.svgRound(e[1])}`,
        transform: this.rotationTransform || null,
      },
      bbox: e,
    };
  }
}
Ve = new WeakMap(), xd = new WeakMap(), Ed = new WeakMap(), _i = new WeakMap(), Is = new WeakMap(), Fs = new WeakMap(), Yl = new WeakMap(), Kl = new WeakMap(), to = new WeakMap(), Le = new WeakSet(), qs = function (e = n(this, to)) {
  const i = n(this, Ed) + e / 2 * n(this, Yl);
  return n(this, Kl) % 180 === 0 ? [i / n(this, Is), i / n(this, Fs)] : [i / n(this, Fs), i / n(this, Is)];
}, Xb = function () {
  const [e, i, s, r] = n(this, Ve); const
    [a, o] = A(this, Le, qs).call(this, 0);
  return [e + a, i + o, s - 2 * a, r - 2 * o];
}, Yb = function () {
  const e = m(this, Ve, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
  for (const {
    line: r,
  } of n(this, _i)) {
    if (r.length <= 12) {
      for (let l = 4, c = r.length; l < c; l += 6) tt.pointBoundingBox(r[l], r[l + 1], e);
      continue;
    }
    let a = r[4]; let
      o = r[5];
    for (let l = 6, c = r.length; l < c; l += 6) {
      const [d, u, g, b, E, S] = r.subarray(l, l + 6);
      tt.bezierBoundingBox(a, o, d, u, g, b, E, S, e), a = E, o = S;
    }
  }
  const [i, s] = A(this, Le, qs).call(this);
  e[0] = ze(e[0] - i, 0, 1), e[1] = ze(e[1] - s, 0, 1), e[2] = ze(e[2] + i, 0, 1), e[3] = ze(e[3] + s, 0, 1), e[2] -= e[0], e[3] -= e[1];
}, Kb = function (e) {
  const [i, s] = A(this, Le, qs).call(this);
  m(this, to, e);
  const [r, a] = A(this, Le, qs).call(this); const [o, l] = [r - i, a - s]; const
    c = n(this, Ve);
  return c[0] -= o, c[1] -= l, c[2] += 2 * o, c[3] += 2 * l, c;
};
class gf extends Vb {
  constructor(t) {
    super(), this._viewParameters = t, super.updateProperties({
      fill: 'none',
      stroke: $t._defaultLineColor,
      'stroke-opacity': 1,
      'stroke-width': 1,
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-miterlimit': 10,
    });
  }

  updateSVGProperty(t, e) {
    t === 'stroke-width' && (e ?? (e = this['stroke-width']), e *= this._viewParameters.realScale), super.updateSVGProperty(t, e);
  }

  clone() {
    const t = new gf(this._viewParameters);
    return t.updateAll(this), t;
  }
}
let af; let
  Jb;
const Co = class Co extends Hu {
  constructor(e) {
    super({
      ...e,
      name: 'inkEditor',
    });
    v(this, af);
    this._willKeepAspectRatio = !0, this.defaultL10nId = 'pdfjs-editor-ink-editor';
  }

  static initialize(e, i) {
    $t.initialize(e, i), this._defaultDrawingOptions = new gf(i.viewParameters);
  }

  static getDefaultDrawingOptions(e) {
    const i = this._defaultDrawingOptions.clone();
    return i.updateProperties(e), i;
  }

  static get supportMultipleDrawings() {
    return !0;
  }

  static get typesMap() {
    return yt(this, 'typesMap', /* @__PURE__ */ new Map([[At.INK_THICKNESS, 'stroke-width'], [At.INK_COLOR, 'stroke'], [At.INK_OPACITY, 'stroke-opacity']]));
  }

  static createDrawerInstance(e, i, s, r, a) {
    return new eS(e, i, s, r, a, this._defaultDrawingOptions['stroke-width']);
  }

  static deserializeDraw(e, i, s, r, a, o) {
    return Od.deserialize(e, i, s, r, a, o);
  }

  static async deserialize(e, i, s) {
    let r = null;
    if (e instanceof Pg) {
      const {
        data: {
          inkLists: o,
          rect: l,
          rotation: c,
          id: d,
          color: u,
          opacity: g,
          borderStyle: {
            rawWidth: b,
          },
          popupRef: E,
          richText: S,
          contentsObj: M,
          creationDate: T,
          modificationDate: L,
        },
        parent: {
          page: {
            pageNumber: R,
          },
        },
      } = e;
      r = e = {
        annotationType: ft.INK,
        color: Array.from(u),
        thickness: b,
        opacity: g,
        paths: {
          points: o,
        },
        boxes: null,
        pageIndex: R - 1,
        rect: l.slice(0),
        rotation: c,
        annotationElementId: d,
        id: d,
        deleted: !1,
        popupRef: E,
        richText: S,
        comment: (M == null ? void 0 : M.str) || null,
        creationDate: T,
        modificationDate: L,
      };
    }
    const a = await super.deserialize(e, i, s);
    return a._initialData = r, e.comment && a.setCommentData(e), a;
  }

  get toolbarButtons() {
    return this._colorPicker || (this._colorPicker = new Fu(this)), [['colorPicker', this._colorPicker]];
  }

  get colorType() {
    return At.INK_COLOR;
  }

  get color() {
    return this._drawingOptions.stroke;
  }

  get opacity() {
    return this._drawingOptions['stroke-opacity'];
  }

  onScaleChanging() {
    if (!this.parent) return;
    super.onScaleChanging();
    const {
      _drawId: e,
      _drawingOptions: i,
      parent: s,
    } = this;
    i.updateSVGProperty('stroke-width'), s.drawLayer.updateProperties(e, i.toSVGProperties());
  }

  static onScaleChangingWhenDrawing() {
    const e = this._currentParent;
    e && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty('stroke-width'), e.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }

  createDrawingOptions({
    color: e,
    thickness: i,
    opacity: s,
  }) {
    this._drawingOptions = Co.getDefaultDrawingOptions({
      stroke: tt.makeHexColor(...e),
      'stroke-width': i,
      'stroke-opacity': s,
    });
  }

  serialize(e = !1) {
    if (this.isEmpty()) return null;
    if (this.deleted) return this.serializeDeleted();
    const {
      lines: i,
      points: s,
    } = this.serializeDraw(e); const {
      _drawingOptions: {
        stroke: r,
        'stroke-opacity': a,
        'stroke-width': o,
      },
    } = this; const
      l = Object.assign(super.serialize(e), {
        color: $t._colorManager.convert(r),
        opacity: a,
        thickness: o,
        paths: {
          lines: i,
          points: s,
        },
      });
    return this.addComment(l), e ? (l.isCopy = !0, l) : this.annotationElementId && !A(this, af, Jb).call(this, l) ? null : (l.id = this.annotationElementId, l);
  }

  renderAnnotationElement(e) {
    if (this.deleted) return e.hide(), null;
    const {
      points: i,
      rect: s,
    } = this.serializeDraw(!1);
    return e.updateEdited({
      rect: s,
      thickness: this._drawingOptions['stroke-width'],
      points: i,
      popup: this.comment,
    }), null;
  }
};
af = new WeakSet(), Jb = function (e) {
  const {
    color: i,
    thickness: s,
    opacity: r,
    pageIndex: a,
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || e.color.some((o, l) => o !== i[l]) || e.thickness !== s || e.opacity !== r || e.pageIndex !== a;
}, V(Co, '_type', 'ink'), V(Co, '_editorType', ft.INK), V(Co, '_defaultDrawingOptions', null);
const Zp = Co;
class tg extends Od {
  toSVGPath() {
    let t = super.toSVGPath();
    return t.endsWith('Z') || (t += 'Z'), t;
  }
}
const Yd = 8; const
  gh = 3;
let eo; let Pt; let eg; let ns; let Qb; let Zb; let ig; let Au; let tv; let ev; let iv; let sg; let ng; let
  sv;
class js {
  static extractContoursFromText(t, {
    fontFamily: e,
    fontStyle: i,
    fontWeight: s,
  }, r, a, o, l) {
    let c = new OffscreenCanvas(1, 1); let
      d = c.getContext('2d', {
        alpha: !1,
      });
    const u = 200; const g = d.font = `${i} ${s} ${u}px ${e}`; const {
      actualBoundingBoxLeft: b,
      actualBoundingBoxRight: E,
      actualBoundingBoxAscent: S,
      actualBoundingBoxDescent: M,
      fontBoundingBoxAscent: T,
      fontBoundingBoxDescent: L,
      width: R,
    } = d.measureText(t); const p = 1.5; const f = Math.ceil(Math.max(Math.abs(b) + Math.abs(E) || 0, R) * p); const
      y = Math.ceil(Math.max(Math.abs(S) + Math.abs(M) || u, Math.abs(T) + Math.abs(L) || u) * p);
    c = new OffscreenCanvas(f, y), d = c.getContext('2d', {
      alpha: !0,
      willReadFrequently: !0,
    }), d.font = g, d.filter = 'grayscale(1)', d.fillStyle = 'white', d.fillRect(0, 0, f, y), d.fillStyle = 'black', d.fillText(t, f * (p - 1) / 2, y * (3 - p) / 2);
    const _ = A(this, Pt, sg).call(this, d.getImageData(0, 0, f, y).data); const P = A(this, Pt, iv).call(this, _); const k = A(this, Pt, ng).call(this, P); const
      C = A(this, Pt, ig).call(this, _, f, y, k);
    return this.processDrawnLines({
      lines: {
        curves: C,
        width: f,
        height: y,
      },
      pageWidth: r,
      pageHeight: a,
      rotation: o,
      innerMargin: l,
      mustSmooth: !0,
      areContours: !0,
    });
  }

  static process(t, e, i, s, r) {
    const [a, o, l] = A(this, Pt, sv).call(this, t); const [c, d] = A(this, Pt, ev).call(this, a, o, l, Math.hypot(o, l) * n(this, eo).sigmaSFactor, n(this, eo).sigmaR, n(this, eo).kernelSize); const u = A(this, Pt, ng).call(this, d); const
      g = A(this, Pt, ig).call(this, c, o, l, u);
    return this.processDrawnLines({
      lines: {
        curves: g,
        width: o,
        height: l,
      },
      pageWidth: e,
      pageHeight: i,
      rotation: s,
      innerMargin: r,
      mustSmooth: !0,
      areContours: !0,
    });
  }

  static processDrawnLines({
    lines: t,
    pageWidth: e,
    pageHeight: i,
    rotation: s,
    innerMargin: r,
    mustSmooth: a,
    areContours: o,
  }) {
    s % 180 !== 0 && ([e, i] = [i, e]);
    const {
      curves: l,
      width: c,
      height: d,
    } = t; const u = t.thickness ?? 0; const g = []; const b = Math.min(e / c, i / d); const E = b / e; const S = b / i; const
      M = [];
    for (const {
      points: L,
    } of l) {
      const R = a ? A(this, Pt, tv).call(this, L) : L;
      if (!R) continue;
      M.push(R);
      const p = R.length; const f = new Float32Array(p); const
        y = new Float32Array(3 * (p === 2 ? 2 : p - 2));
      if (g.push({
        line: y,
        points: f,
      }), p === 2) {
        f[0] = R[0] * E, f[1] = R[1] * S, y.set([NaN, NaN, NaN, NaN, f[0], f[1]], 0);
        continue;
      }
      let [_, P, k, C] = R;
      _ *= E, P *= S, k *= E, C *= S, f.set([_, P, k, C], 0), y.set([NaN, NaN, NaN, NaN, _, P], 0);
      for (let D = 4; D < p; D += 2) {
        const N = f[D] = R[D] * E; const
          I = f[D + 1] = R[D + 1] * S;
        y.set(Z.createBezierPoints(_, P, k, C, N, I), (D - 2) * 3), [_, P, k, C] = [k, C, N, I];
      }
    }
    if (g.length === 0) return null;
    const T = o ? new tg() : new Od();
    return T.build(g, e, i, 1, s, o ? 0 : u, r), {
      outline: T,
      newCurves: M,
      areContours: o,
      thickness: u,
      width: c,
      height: d,
    };
  }

  static async compressSignature({
    outlines: t,
    areContours: e,
    thickness: i,
    width: s,
    height: r,
  }) {
    let a = 1 / 0; let o = -1 / 0; let
      l = 0;
    for (const R of t) {
      l += R.length;
      for (let p = 2, f = R.length; p < f; p++) {
        const y = R[p] - R[p - 2];
        a = Math.min(a, y), o = Math.max(o, y);
      }
    }
    let c;
    a >= -128 && o <= 127 ? c = Int8Array : a >= -32768 && o <= 32767 ? c = Int16Array : c = Int32Array;
    const d = t.length; const u = Yd + gh * d; const
      g = new Uint32Array(u);
    let b = 0;
    g[b++] = u * Uint32Array.BYTES_PER_ELEMENT + (l - 2 * d) * c.BYTES_PER_ELEMENT, g[b++] = 0, g[b++] = s, g[b++] = r, g[b++] = e ? 0 : 1, g[b++] = Math.max(0, Math.floor(i ?? 0)), g[b++] = d, g[b++] = c.BYTES_PER_ELEMENT;
    for (const R of t) g[b++] = R.length - 2, g[b++] = R[0], g[b++] = R[1];
    const E = new CompressionStream('deflate-raw'); const
      S = E.writable.getWriter();
    await S.ready, S.write(g);
    const M = c.prototype.constructor;
    for (const R of t) {
      const p = new M(R.length - 2);
      for (let f = 2, y = R.length; f < y; f++) p[f - 2] = R[f] - R[f - 2];
      S.write(p);
    }
    S.close();
    const T = await new Response(E.readable).arrayBuffer(); const
      L = new Uint8Array(T);
    return Zm(L);
  }

  static async decompressSignature(t) {
    try {
      const e = Cw(t); const {
        readable: i,
        writable: s,
      } = new DecompressionStream('deflate-raw'); const
        r = s.getWriter();
      await r.ready, r.write(e).then(async () => {
        await r.ready, await r.close();
      }).catch(() => {
      });
      let a = null; let
        o = 0;
      for await (const R of i) a || (a = new Uint8Array(new Uint32Array(R.buffer, 0, 4)[0])), a.set(R, o), o += R.length;
      const l = new Uint32Array(a.buffer, 0, a.length >> 2); const
        c = l[1];
      if (c !== 0) throw new Error(`Invalid version: ${c}`);
      const d = l[2]; const u = l[3]; const g = l[4] === 0; const b = l[5]; const E = l[6]; const S = l[7]; const M = []; const
        T = (Yd + gh * E) * Uint32Array.BYTES_PER_ELEMENT;
      let L;
      switch (S) {
        case Int8Array.BYTES_PER_ELEMENT:
          L = new Int8Array(a.buffer, T);
          break;
        case Int16Array.BYTES_PER_ELEMENT:
          L = new Int16Array(a.buffer, T);
          break;
        case Int32Array.BYTES_PER_ELEMENT:
          L = new Int32Array(a.buffer, T);
          break;
      }
      o = 0;
      for (let R = 0; R < E; R++) {
        const p = l[gh * R + Yd]; const
          f = new Float32Array(p + 2);
        M.push(f);
        for (let y = 0; y < gh - 1; y++) f[y] = l[gh * R + Yd + y + 1];
        for (let y = 0; y < p; y++) f[y + 2] = f[y] + L[o++];
      }
      return {
        areContours: g,
        thickness: b,
        outlines: M,
        width: d,
        height: u,
      };
    } catch (e) {
      return pt(`decompressSignature: ${e}`), null;
    }
  }
}
eo = new WeakMap(), Pt = new WeakSet(), eg = function (t, e, i, s) {
  return i -= t, s -= e, i === 0 ? s > 0 ? 0 : 4 : i === 1 ? s + 6 : 2 - s;
}, ns = new WeakMap(), Qb = function (t, e, i, s, r, a, o) {
  const l = A(this, Pt, eg).call(this, i, s, r, a);
  for (let c = 0; c < 8; c++) {
    const d = (-c + l - o + 16) % 8; const u = n(this, ns)[2 * d]; const
      g = n(this, ns)[2 * d + 1];
    if (t[(i + u) * e + (s + g)] !== 0) return d;
  }
  return -1;
}, Zb = function (t, e, i, s, r, a, o) {
  const l = A(this, Pt, eg).call(this, i, s, r, a);
  for (let c = 0; c < 8; c++) {
    const d = (c + l + o + 16) % 8; const u = n(this, ns)[2 * d]; const
      g = n(this, ns)[2 * d + 1];
    if (t[(i + u) * e + (s + g)] !== 0) return d;
  }
  return -1;
}, ig = function (t, e, i, s) {
  const r = t.length; const
    a = new Int32Array(r);
  for (let d = 0; d < r; d++) a[d] = t[d] <= s ? 1 : 0;
  for (let d = 1; d < i - 1; d++) a[d * e] = a[d * e + e - 1] = 0;
  for (let d = 0; d < e; d++) a[d] = a[e * i - 1 - d] = 0;
  let o = 1; let
    l;
  const c = [];
  for (let d = 1; d < i - 1; d++) {
    l = 1;
    for (let u = 1; u < e - 1; u++) {
      const g = d * e + u; const
        b = a[g];
      if (b === 0) continue;
      let E = d; let
        S = u;
      if (b === 1 && a[g - 1] === 0) o += 1, S -= 1;
      else if (b >= 1 && a[g + 1] === 0) o += 1, S += 1, b > 1 && (l = b);
      else {
        b !== 1 && (l = Math.abs(b));
        continue;
      }
      const M = [u, d]; const T = S === u + 1; const
        L = {
          isHole: T,
          points: M,
          id: o,
          parent: 0,
        };
      c.push(L);
      let R;
      for (const D of c) {
        if (D.id === l) {
          R = D;
          break;
        }
      }
      R ? R.isHole ? L.parent = T ? R.parent : l : L.parent = T ? l : R.parent : L.parent = T ? l : 0;
      const p = A(this, Pt, Qb).call(this, a, e, d, u, E, S, 0);
      if (p === -1) {
        a[g] = -o, a[g] !== 1 && (l = Math.abs(a[g]));
        continue;
      }
      let f = n(this, ns)[2 * p]; let
        y = n(this, ns)[2 * p + 1];
      const _ = d + f; const
        P = u + y;
      E = _, S = P;
      let k = d; let
        C = u;
      for (; ;) {
        const D = A(this, Pt, Zb).call(this, a, e, k, C, E, S, 1);
        f = n(this, ns)[2 * D], y = n(this, ns)[2 * D + 1];
        const N = k + f; const
          I = C + y;
        M.push(I, N);
        const B = k * e + C;
        if (a[B + 1] === 0 ? a[B] = -o : a[B] === 1 && (a[B] = o), N === d && I === u && k === _ && C === P) {
          a[g] !== 1 && (l = Math.abs(a[g]));
          break;
        } else E = k, S = C, k = N, C = I;
      }
    }
  }
  return c;
}, Au = function (t, e, i, s) {
  if (i - e <= 4) {
    for (let _ = e; _ < i - 2; _ += 2) s.push(t[_], t[_ + 1]);
    return;
  }
  const r = t[e]; const a = t[e + 1]; const o = t[i - 4] - r; const l = t[i - 3] - a; const c = Math.hypot(o, l); const d = o / c; const u = l / c; const g = d * a - u * r; const b = l / o; const E = 1 / c; const S = Math.atan(b); const M = Math.cos(S); const T = Math.sin(S); const L = E * (Math.abs(M) + Math.abs(T)); const R = E * (1 - L + L ** 2); const
    p = Math.max(Math.atan(Math.abs(T + M) * R), Math.atan(Math.abs(T - M) * R));
  let f = 0; let
    y = e;
  for (let _ = e + 2; _ < i - 2; _ += 2) {
    const P = Math.abs(g - d * t[_ + 1] + u * t[_]);
    P > f && (y = _, f = P);
  }
  f > (c * p) ** 2 ? (A(this, Pt, Au).call(this, t, e, y + 2, s), A(this, Pt, Au).call(this, t, y, i, s)) : s.push(r, a);
}, tv = function (t) {
  const e = []; const
    i = t.length;
  return A(this, Pt, Au).call(this, t, 0, i, e), e.push(t[i - 2], t[i - 1]), e.length <= 4 ? null : e;
}, ev = function (t, e, i, s, r, a) {
  const o = new Float32Array(a ** 2); const l = -2 * s ** 2; const
    c = a >> 1;
  for (let S = 0; S < a; S++) {
    const M = (S - c) ** 2;
    for (let T = 0; T < a; T++) o[S * a + T] = Math.exp((M + (T - c) ** 2) / l);
  }
  const d = new Float32Array(256); const
    u = -2 * r ** 2;
  for (let S = 0; S < 256; S++) d[S] = Math.exp(S ** 2 / u);
  const g = t.length; const b = new Uint8Array(g); const
    E = new Uint32Array(256);
  for (let S = 0; S < i; S++) {
    for (let M = 0; M < e; M++) {
      const T = S * e + M; const
        L = t[T];
      let R = 0; let
        p = 0;
      for (let y = 0; y < a; y++) {
        const _ = S + y - c;
        if (!(_ < 0 || _ >= i)) {
          for (let P = 0; P < a; P++) {
            const k = M + P - c;
            if (k < 0 || k >= e) continue;
            const C = t[_ * e + k]; const
              D = o[y * a + P] * d[Math.abs(C - L)];
            R += C * D, p += D;
          }
        }
      }
      const f = b[T] = Math.round(R / p);
      E[f]++;
    }
  }
  return [b, E];
}, iv = function (t) {
  const e = new Uint32Array(256);
  for (const i of t) e[i]++;
  return e;
}, sg = function (t) {
  const e = t.length; const
    i = new Uint8ClampedArray(e >> 2);
  let s = -1 / 0; let
    r = 1 / 0;
  for (let o = 0, l = i.length; o < l; o++) {
    const c = i[o] = t[o << 2];
    s = Math.max(s, c), r = Math.min(r, c);
  }
  const a = 255 / (s - r);
  for (let o = 0, l = i.length; o < l; o++) i[o] = (i[o] - r) * a;
  return i;
}, ng = function (t) {
  let e; let i = -1 / 0; let
    s = -1 / 0;
  const r = t.findIndex((l) => l !== 0);
  let a = r; let
    o = r;
  for (e = r; e < 256; e++) {
    const l = t[e];
    l > i && (e - a > s && (s = e - a, o = e - 1), i = l, a = e);
  }
  for (e = o - 1; e >= 0 && !(t[e] > t[e + 1]); e--) ;
  return e;
}, sv = function (t) {
  const e = t; const {
    width: i,
    height: s,
  } = t; const
    {
      maxDim: r,
    } = n(this, eo);
  let a = i; let
    o = s;
  if (i > r || s > r) {
    let g = i; let b = s; let
      E = Math.log2(Math.max(i, s) / r);
    const S = Math.floor(E);
    E = E === S ? S - 1 : S;
    for (let T = 0; T < E; T++) {
      a = Math.ceil(g / 2), o = Math.ceil(b / 2);
      const L = new OffscreenCanvas(a, o);
      L.getContext('2d').drawImage(t, 0, 0, g, b, 0, 0, a, o), g = a, b = o, t !== e && t.close(), t = L.transferToImageBitmap();
    }
    const M = Math.min(r / a, r / o);
    a = Math.round(a * M), o = Math.round(o * M);
  }
  const c = new OffscreenCanvas(a, o).getContext('2d', {
    willReadFrequently: !0,
  });
  c.fillStyle = 'white', c.fillRect(0, 0, a, o), c.filter = 'grayscale(1)', c.drawImage(t, 0, 0, t.width, t.height, 0, 0, a, o);
  const d = c.getImageData(0, 0, a, o).data;
  return [A(this, Pt, sg).call(this, d), a, o];
}, v(js, Pt), v(js, eo, {
  maxDim: 512,
  sigmaSFactor: 0.02,
  sigmaR: 25,
  kernelSize: 16,
}), v(js, ns, new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]));
class Rg extends Vb {
  constructor() {
    super(), super.updateProperties({
      fill: $t._defaultLineColor,
      'stroke-width': 0,
    });
  }

  clone() {
    const t = new Rg();
    return t.updateAll(this), t;
  }
}
class Mg extends gf {
  constructor(t) {
    super(t), super.updateProperties({
      stroke: $t._defaultLineColor,
      'stroke-width': 1,
    });
  }

  clone() {
    const t = new Mg(this._viewParameters);
    return t.updateAll(this), t;
  }
}
let Er; let Ns; let Cr; let
  io;
const oi = class oi extends Hu {
  constructor(e) {
    super({
      ...e,
      mustBeCommitted: !0,
      name: 'signatureEditor',
    });
    v(this, Er, !1);
    v(this, Ns, null);
    v(this, Cr, null);
    v(this, io, null);
    this._willKeepAspectRatio = !0, m(this, Cr, e.signatureData || null), m(this, Ns, null), this.defaultL10nId = 'pdfjs-editor-signature-editor1';
  }

  static initialize(e, i) {
    $t.initialize(e, i), this._defaultDrawingOptions = new Rg(), this._defaultDrawnSignatureOptions = new Mg(i.viewParameters);
  }

  static getDefaultDrawingOptions(e) {
    const i = this._defaultDrawingOptions.clone();
    return i.updateProperties(e), i;
  }

  static get supportMultipleDrawings() {
    return !1;
  }

  static get typesMap() {
    return yt(this, 'typesMap', /* @__PURE__ */ new Map());
  }

  static get isDrawer() {
    return !1;
  }

  get telemetryFinalData() {
    return {
      type: 'signature',
      hasDescription: !!n(this, Ns),
    };
  }

  static computeTelemetryFinalData(e) {
    const i = e.get('hasDescription');
    return {
      hasAltText: i.get(!0) ?? 0,
      hasNoAltText: i.get(!1) ?? 0,
    };
  }

  get isResizable() {
    return !0;
  }

  onScaleChanging() {
    this._drawId !== null && super.onScaleChanging();
  }

  render() {
    if (this.div) return this.div;
    let e; let
      i;
    const {
      _isCopy: s,
    } = this;
    if (s && (this._isCopy = !1, e = this.x, i = this.y), super.render(), this._drawId === null) {
      if (n(this, Cr)) {
        const {
          lines: r,
          mustSmooth: a,
          areContours: o,
          description: l,
          uuid: c,
          heightInPage: d,
        } = n(this, Cr); const {
          rawDims: {
            pageWidth: u,
            pageHeight: g,
          },
          rotation: b,
        } = this.parent.viewport; const
          E = js.processDrawnLines({
            lines: r,
            pageWidth: u,
            pageHeight: g,
            rotation: b,
            innerMargin: oi._INNER_MARGIN,
            mustSmooth: a,
            areContours: o,
          });
        this.addSignature(E, d, l, c);
      } else {
        this.div.setAttribute('data-l10n-args', JSON.stringify({
          description: '',
        })), this.div.hidden = !0, this._uiManager.getSignature(this);
      }
    } else {
      this.div.setAttribute('data-l10n-args', JSON.stringify({
        description: n(this, Ns) || '',
      }));
    }
    return s && (this._isCopy = !0, this._moveAfterPaste(e, i)), this.div;
  }

  setUuid(e) {
    m(this, io, e), this.addEditToolbar();
  }

  getUuid() {
    return n(this, io);
  }

  get description() {
    return n(this, Ns);
  }

  set description(e) {
    m(this, Ns, e), this.div && (this.div.setAttribute('data-l10n-args', JSON.stringify({
      description: e,
    })), super.addEditToolbar().then((i) => {
      i == null || i.updateEditSignatureButton(e);
    }));
  }

  getSignaturePreview() {
    const {
      newCurves: e,
      areContours: i,
      thickness: s,
      width: r,
      height: a,
    } = n(this, Cr); const o = Math.max(r, a); const
      l = js.processDrawnLines({
        lines: {
          curves: e.map((c) => ({
            points: c,
          })),
          thickness: s,
          width: r,
          height: a,
        },
        pageWidth: o,
        pageHeight: o,
        rotation: 0,
        innerMargin: 0,
        mustSmooth: !1,
        areContours: i,
      });
    return {
      areContours: i,
      outline: l.outline,
    };
  }

  get toolbarButtons() {
    return this._uiManager.signatureManager ? [['editSignature', this._uiManager.signatureManager]] : super.toolbarButtons;
  }

  addSignature(e, i, s, r) {
    const {
      x: a,
      y: o,
    } = this; const
      {
        outline: l,
      } = m(this, Cr, e);
    m(this, Er, l instanceof tg), this.description = s;
    let c;
    n(this, Er) ? c = oi.getDefaultDrawingOptions() : (c = oi._defaultDrawnSignatureOptions.clone(), c.updateProperties({
      'stroke-width': l.thickness,
    })), this._addOutlines({
      drawOutlines: l,
      drawingOptions: c,
    });
    const [, d] = this.pageDimensions;
    let u = i / d;
    u = u >= 1 ? 0.5 : u, this.width *= u / this.height, this.width >= 1 && (u *= 0.9 / this.width, this.width = 0.9), this.height = u, this.setDims(), this.x = a, this.y = o, this.center(), this._onResized(), this.onScaleChanging(), this.rotate(), this._uiManager.addToAnnotationStorage(this), this.setUuid(r), this._reportTelemetry({
      action: 'pdfjs.signature.inserted',
      data: {
        hasBeenSaved: !!r,
        hasDescription: !!s,
      },
    }), this.div.hidden = !1;
  }

  getFromImage(e) {
    const {
      rawDims: {
        pageWidth: i,
        pageHeight: s,
      },
      rotation: r,
    } = this.parent.viewport;
    return js.process(e, i, s, r, oi._INNER_MARGIN);
  }

  getFromText(e, i) {
    const {
      rawDims: {
        pageWidth: s,
        pageHeight: r,
      },
      rotation: a,
    } = this.parent.viewport;
    return js.extractContoursFromText(e, i, s, r, a, oi._INNER_MARGIN);
  }

  getDrawnSignature(e) {
    const {
      rawDims: {
        pageWidth: i,
        pageHeight: s,
      },
      rotation: r,
    } = this.parent.viewport;
    return js.processDrawnLines({
      lines: e,
      pageWidth: i,
      pageHeight: s,
      rotation: r,
      innerMargin: oi._INNER_MARGIN,
      mustSmooth: !1,
      areContours: !1,
    });
  }

  createDrawingOptions({
    areContours: e,
    thickness: i,
  }) {
    e ? this._drawingOptions = oi.getDefaultDrawingOptions() : (this._drawingOptions = oi._defaultDrawnSignatureOptions.clone(), this._drawingOptions.updateProperties({
      'stroke-width': i,
    }));
  }

  serialize(e = !1) {
    if (this.isEmpty()) return null;
    const {
      lines: i,
      points: s,
    } = this.serializeDraw(e); const {
      _drawingOptions: {
        'stroke-width': r,
      },
    } = this; const
      a = Object.assign(super.serialize(e), {
        isSignature: !0,
        areContours: n(this, Er),
        color: [0, 0, 0],
        thickness: n(this, Er) ? 0 : r,
      });
    return this.addComment(a), e ? (a.paths = {
      lines: i,
      points: s,
    }, a.uuid = n(this, io), a.isCopy = !0) : a.lines = i, n(this, Ns) && (a.accessibilityData = {
      type: 'Figure',
      alt: n(this, Ns),
    }), a;
  }

  static deserializeDraw(e, i, s, r, a, o) {
    return o.areContours ? tg.deserialize(e, i, s, r, a, o) : Od.deserialize(e, i, s, r, a, o);
  }

  static async deserialize(e, i, s) {
    let a;
    const r = await super.deserialize(e, i, s);
    return m(r, Er, e.areContours), r.description = ((a = e.accessibilityData) == null ? void 0 : a.alt) || '', m(r, io, e.uuid), r;
  }
};
Er = new WeakMap(), Ns = new WeakMap(), Cr = new WeakMap(), io = new WeakMap(), V(oi, '_type', 'signature'), V(oi, '_editorType', ft.SIGNATURE), V(oi, '_defaultDrawingOptions', null);
const rg = oi;
let qt; let Se; let Tr; let Cn; let Pr; let Jl; let Tn; let so; let Bs; let xi; let Ql; let Et; let Ih; let Fh; let _u; let xu; let Eu; let og; let Cu; let
  nv;
class ag extends $t {
  constructor(e) {
    super({
      ...e,
      name: 'stampEditor',
    });
    v(this, Et);
    v(this, qt, null);
    v(this, Se, null);
    v(this, Tr, null);
    v(this, Cn, null);
    v(this, Pr, null);
    v(this, Jl, '');
    v(this, Tn, null);
    v(this, so, !1);
    v(this, Bs, null);
    v(this, xi, !1);
    v(this, Ql, !1);
    m(this, Cn, e.bitmapUrl), m(this, Pr, e.bitmapFile), this.defaultL10nId = 'pdfjs-editor-stamp-editor';
  }

  static initialize(e, i) {
    $t.initialize(e, i);
  }

  static isHandlingMimeForPasting(e) {
    return Mu.includes(e);
  }

  static paste(e, i) {
    i.pasteEditor({
      mode: ft.STAMP,
    }, {
      bitmapFile: e.getAsFile(),
    });
  }

  altTextFinish() {
    this._uiManager.useNewAltTextFlow && (this.div.hidden = !1), super.altTextFinish();
  }

  get telemetryFinalData() {
    let e;
    return {
      type: 'stamp',
      hasAltText: !!((e = this.altTextData) != null && e.altText),
    };
  }

  static computeTelemetryFinalData(e) {
    const i = e.get('hasAltText');
    return {
      hasAltText: i.get(!0) ?? 0,
      hasNoAltText: i.get(!1) ?? 0,
    };
  }

  async mlGuessAltText(e = null, i = !0) {
    if (this.hasAltTextData()) return null;
    const {
      mlManager: s,
    } = this._uiManager;
    if (!s) throw new Error('No ML.');
    if (!await s.isEnabledFor('altText')) throw new Error("ML isn't enabled for alt text.");
    const {
      data: r,
      width: a,
      height: o,
    } = e || this.copyCanvas(null, null, !0).imageData; const
      l = await s.guess({
        name: 'altText',
        request: {
          data: r,
          width: a,
          height: o,
          channels: r.length / (a * o),
        },
      });
    if (!l) throw new Error('No response from the AI service.');
    if (l.error) throw new Error('Error from the AI service.');
    if (l.cancel) return null;
    if (!l.output) throw new Error('No valid response from the AI service.');
    const c = l.output;
    return await this.setGuessedAltText(c), i && !this.hasAltTextData() && (this.altTextData = {
      alt: c,
      decorative: !1,
    }), c;
  }

  remove() {
    let e;
    n(this, Se) && (m(this, qt, null), this._uiManager.imageManager.deleteId(n(this, Se)), (e = n(this, Tn)) == null || e.remove(), m(this, Tn, null), n(this, Bs) && (clearTimeout(n(this, Bs)), m(this, Bs, null))), super.remove();
  }

  rebuild() {
    if (!this.parent) {
      n(this, Se) && A(this, Et, _u).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (n(this, Se) && n(this, Tn) === null && A(this, Et, _u).call(this), this.isAttachedToDOM || this.parent.add(this));
  }

  onceAdded(e) {
    this._isDraggable = !0, e && this.div.focus();
  }

  isEmpty() {
    return !(n(this, Tr) || n(this, qt) || n(this, Cn) || n(this, Pr) || n(this, Se) || n(this, so));
  }

  get toolbarButtons() {
    return [['altText', this.createAltText()]];
  }

  get isResizable() {
    return !0;
  }

  render() {
    if (this.div) return this.div;
    let e; let
      i;
    return this._isCopy && (e = this.x, i = this.y), super.render(), this.div.hidden = !0, this.createAltText(), n(this, so) || (n(this, qt) ? A(this, Et, xu).call(this) : A(this, Et, _u).call(this)), this._isCopy && this._moveAfterPaste(e, i), this._uiManager.addShouldRescale(this), this.div;
  }

  setCanvas(e, i) {
    const {
      id: s,
      bitmap: r,
    } = this._uiManager.imageManager.getFromCanvas(e, i);
    i.remove(), s && this._uiManager.imageManager.isValidId(s) && (m(this, Se, s), r && m(this, qt, r), m(this, so, !1), A(this, Et, xu).call(this));
  }

  _onResized() {
    this.onScaleChanging();
  }

  onScaleChanging() {
    if (!this.parent) return;
    n(this, Bs) !== null && clearTimeout(n(this, Bs)), m(this, Bs, setTimeout(() => {
      m(this, Bs, null), A(this, Et, og).call(this);
    }, 200));
  }

  copyCanvas(e, i, s = !1) {
    e || (e = 224);
    const {
      width: r,
      height: a,
    } = n(this, qt); const
      o = new cs();
    let l = n(this, qt); let c = r; let d = a; let
      u = null;
    if (i) {
      if (r > i || a > i) {
        const _ = Math.min(i / r, i / a);
        c = Math.floor(r * _), d = Math.floor(a * _);
      }
      u = document.createElement('canvas');
      const b = u.width = Math.ceil(c * o.sx); const
        E = u.height = Math.ceil(d * o.sy);
      n(this, xi) || (l = A(this, Et, Eu).call(this, b, E));
      const S = u.getContext('2d');
      S.filter = this._uiManager.hcmFilter;
      let M = 'white';
      let T = '#cfcfd8';
      this._uiManager.hcmFilter !== 'none' ? T = 'black' : kw.isDarkMode && (M = '#8f8f9d', T = '#42414d');
      const L = 15; const R = L * o.sx; const p = L * o.sy; const f = new OffscreenCanvas(R * 2, p * 2); const
        y = f.getContext('2d');
      y.fillStyle = M, y.fillRect(0, 0, R * 2, p * 2), y.fillStyle = T, y.fillRect(0, 0, R, p), y.fillRect(R, p, R, p), S.fillStyle = S.createPattern(f, 'repeat'), S.fillRect(0, 0, b, E), S.drawImage(l, 0, 0, l.width, l.height, 0, 0, b, E);
    }
    let g = null;
    if (s) {
      let b; let
        E;
      if (o.symmetric && l.width < e && l.height < e) b = l.width, E = l.height;
      else if (l = n(this, qt), r > e || a > e) {
        const T = Math.min(e / r, e / a);
        b = Math.floor(r * T), E = Math.floor(a * T), n(this, xi) || (l = A(this, Et, Eu).call(this, b, E));
      }
      const M = new OffscreenCanvas(b, E).getContext('2d', {
        willReadFrequently: !0,
      });
      M.drawImage(l, 0, 0, l.width, l.height, 0, 0, b, E), g = {
        width: b,
        height: E,
        data: M.getImageData(0, 0, b, E).data,
      };
    }
    return {
      canvas: u,
      width: c,
      height: d,
      imageData: g,
    };
  }

  static async deserialize(e, i, s) {
    let M;
    let r = null; let
      a = !1;
    if (e instanceof wb) {
      const {
        data: {
          rect: T,
          rotation: L,
          id: R,
          structParent: p,
          popupRef: f,
          richText: y,
          contentsObj: _,
          creationDate: P,
          modificationDate: k,
        },
        container: C,
        parent: {
          page: {
            pageNumber: D,
          },
        },
        canvas: N,
      } = e;
      let I; let
        B;
      N ? (delete e.canvas, {
        id: I,
        bitmap: B,
      } = s.imageManager.getFromCanvas(C.id, N), N.remove()) : (a = !0, e._hasNoCanvas = !0);
      const j = ((M = await i._structTree.getAriaAttributes(`${vg}${R}`)) == null ? void 0 : M.get('aria-label')) || '';
      r = e = {
        annotationType: ft.STAMP,
        bitmapId: I,
        bitmap: B,
        pageIndex: D - 1,
        rect: T.slice(0),
        rotation: L,
        annotationElementId: R,
        id: R,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: j,
        },
        isSvg: !1,
        structParent: p,
        popupRef: f,
        richText: y,
        comment: (_ == null ? void 0 : _.str) || null,
        creationDate: P,
        modificationDate: k,
      };
    }
    const o = await super.deserialize(e, i, s); const
      {
        rect: l,
        bitmap: c,
        bitmapUrl: d,
        bitmapId: u,
        isSvg: g,
        accessibilityData: b,
      } = e;
    a ? (s.addMissingCanvas(e.id, o), m(o, so, !0)) : u && s.imageManager.isValidId(u) ? (m(o, Se, u), c && m(o, qt, c)) : m(o, Cn, d), m(o, xi, g);
    const [E, S] = o.pageDimensions;
    return o.width = (l[2] - l[0]) / E, o.height = (l[3] - l[1]) / S, b && (o.altTextData = b), o._initialData = r, e.comment && o.setCommentData(e), m(o, Ql, !!r), o;
  }

  serialize(e = !1, i = null) {
    if (this.isEmpty()) return null;
    if (this.deleted) return this.serializeDeleted();
    const s = Object.assign(super.serialize(e), {
      bitmapId: n(this, Se),
      isSvg: n(this, xi),
    });
    if (this.addComment(s), e) return s.bitmapUrl = A(this, Et, Cu).call(this, !0), s.accessibilityData = this.serializeAltText(!0), s.isCopy = !0, s;
    const {
      decorative: r,
      altText: a,
    } = this.serializeAltText(!1);
    if (!r && a && (s.accessibilityData = {
      type: 'Figure',
      alt: a,
    }), this.annotationElementId) {
      const l = A(this, Et, nv).call(this, s);
      return l.isSame ? null : (l.isSameAltText ? delete s.accessibilityData : s.accessibilityData.structParent = this._initialData.structParent ?? -1, s.id = this.annotationElementId, delete s.bitmapId, s);
    }
    if (i === null) return s;
    i.stamps || (i.stamps = /* @__PURE__ */ new Map());
    const o = n(this, xi) ? (s.rect[2] - s.rect[0]) * (s.rect[3] - s.rect[1]) : null;
    if (!i.stamps.has(n(this, Se))) {
      i.stamps.set(n(this, Se), {
        area: o,
        serialized: s,
      }), s.bitmap = A(this, Et, Cu).call(this, !1);
    } else if (n(this, xi)) {
      const l = i.stamps.get(n(this, Se));
      o > l.area && (l.area = o, l.serialized.bitmap.close(), l.serialized.bitmap = A(this, Et, Cu).call(this, !1));
    }
    return s;
  }

  renderAnnotationElement(e) {
    return this.deleted ? (e.hide(), null) : (e.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment,
    }), null);
  }
}
qt = new WeakMap(), Se = new WeakMap(), Tr = new WeakMap(), Cn = new WeakMap(), Pr = new WeakMap(), Jl = new WeakMap(), Tn = new WeakMap(), so = new WeakMap(), Bs = new WeakMap(), xi = new WeakMap(), Ql = new WeakMap(), Et = new WeakSet(), Ih = function (e, i = !1) {
  if (!e) {
    this.remove();
    return;
  }
  m(this, qt, e.bitmap), i || (m(this, Se, e.id), m(this, xi, e.isSvg)), e.file && m(this, Jl, e.file.name), A(this, Et, xu).call(this);
}, Fh = function () {
  if (m(this, Tr, null), this._uiManager.enableWaiting(!1), !!n(this, Tn)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, qt)) {
      this.addEditToolbar().then(() => {
        this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
      });
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, qt)) {
      this._reportTelemetry({
        action: 'pdfjs.image.image_added',
        data: {
          alt_text_modal: !1,
          alt_text_type: 'empty',
        },
      });
      try {
        this.mlGuessAltText();
      } catch {
      }
    }
    this.div.focus();
  }
}, _u = function () {
  if (n(this, Se)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(n(this, Se)).then((s) => A(this, Et, Ih).call(this, s, !0)).finally(() => A(this, Et, Fh).call(this));
    return;
  }
  if (n(this, Cn)) {
    const s = n(this, Cn);
    m(this, Cn, null), this._uiManager.enableWaiting(!0), m(this, Tr, this._uiManager.imageManager.getFromUrl(s).then((r) => A(this, Et, Ih).call(this, r)).finally(() => A(this, Et, Fh).call(this)));
    return;
  }
  if (n(this, Pr)) {
    const s = n(this, Pr);
    m(this, Pr, null), this._uiManager.enableWaiting(!0), m(this, Tr, this._uiManager.imageManager.getFromFile(s).then((r) => A(this, Et, Ih).call(this, r)).finally(() => A(this, Et, Fh).call(this)));
    return;
  }
  const e = document.createElement('input');
  e.type = 'file', e.accept = Mu.join(',');
  const i = this._uiManager._signal;
  m(this, Tr, new Promise((s) => {
    e.addEventListener('change', async () => {
      if (!e.files || e.files.length === 0) this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const r = await this._uiManager.imageManager.getFromFile(e.files[0]);
        this._reportTelemetry({
          action: 'pdfjs.image.image_selected',
          data: {
            alt_text_modal: this._uiManager.useNewAltTextFlow,
          },
        }), A(this, Et, Ih).call(this, r);
      }
      s();
    }, {
      signal: i,
    }), e.addEventListener('cancel', () => {
      this.remove(), s();
    }, {
      signal: i,
    });
  }).finally(() => A(this, Et, Fh).call(this))), e.click();
}, xu = function () {
  let c;
  const {
    div: e,
  } = this;
  let {
    width: i,
    height: s,
  } = n(this, qt);
  const [r, a] = this.pageDimensions; const
    o = 0.75;
  if (this.width) i = this.width * r, s = this.height * a;
  else if (i > o * r || s > o * a) {
    const d = Math.min(o * r / i, o * a / s);
    i *= d, s *= d;
  }
  this._uiManager.enableWaiting(!1);
  const l = m(this, Tn, document.createElement('canvas'));
  l.setAttribute('role', 'img'), this.addContainer(l), this.width = i / r, this.height = s / a, this.setDims(), (c = this._initialOptions) != null && c.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1), A(this, Et, og).call(this), n(this, Ql) || (this.parent.addUndoableEditor(this), m(this, Ql, !0)), this._reportTelemetry({
    action: 'inserted_image',
  }), n(this, Jl) && this.div.setAttribute('aria-description', n(this, Jl)), this.annotationElementId || this._uiManager.a11yAlert('pdfjs-editor-stamp-added-alert');
}, Eu = function (e, i) {
  const {
    width: s,
    height: r,
  } = n(this, qt);
  let a = s; let o = r; let
    l = n(this, qt);
  for (; a > 2 * e || o > 2 * i;) {
    const c = a; const
      d = o;
    a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), o > 2 * i && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
    const u = new OffscreenCanvas(a, o);
    u.getContext('2d').drawImage(l, 0, 0, c, d, 0, 0, a, o), l = u.transferToImageBitmap();
  }
  return l;
}, og = function () {
  const [e, i] = this.parentDimensions; const {
    width: s,
    height: r,
  } = this; const a = new cs(); const o = Math.ceil(s * e * a.sx); const l = Math.ceil(r * i * a.sy); const
    c = n(this, Tn);
  if (!c || c.width === o && c.height === l) return;
  c.width = o, c.height = l;
  const d = n(this, xi) ? n(this, qt) : A(this, Et, Eu).call(this, o, l); const
    u = c.getContext('2d');
  u.filter = this._uiManager.hcmFilter, u.drawImage(d, 0, 0, d.width, d.height, 0, 0, o, l);
}, Cu = function (e) {
  if (e) {
    if (n(this, xi)) {
      const r = this._uiManager.imageManager.getSvgUrl(n(this, Se));
      if (r) return r;
    }
    const i = document.createElement('canvas');
    return {
      width: i.width,
      height: i.height,
    } = n(this, qt), i.getContext('2d').drawImage(n(this, qt), 0, 0), i.toDataURL();
  }
  if (n(this, xi)) {
    const [i, s] = this.pageDimensions; const r = Math.round(this.width * i * On.PDF_TO_CSS_UNITS); const a = Math.round(this.height * s * On.PDF_TO_CSS_UNITS); const
      o = new OffscreenCanvas(r, a);
    return o.getContext('2d').drawImage(n(this, qt), 0, 0, n(this, qt).width, n(this, qt).height, 0, 0, r, a), o.transferToImageBitmap();
  }
  return structuredClone(n(this, qt));
}, nv = function (e) {
  let o;
  const {
    pageIndex: i,
    accessibilityData: {
      altText: s,
    },
  } = this._initialData; const r = e.pageIndex === i; const
    a = (((o = e.accessibilityData) == null ? void 0 : o.alt) || '') === s;
  return {
    isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && r && a,
    isSameAltText: a,
  };
}, V(ag, '_type', 'stamp'), V(ag, '_editorType', ft.STAMP);
let no; let Zl; let kr; let Rr; let Pn; let ri; let Mr; let th; let eh; let rs; let kn; let Ae; let Rn; let Lr; let ih; let it; let Dr; let Ht; let lg; let rv; let gs; let hg; let cg; let
  Tu;
const Xi = class Xi {
  constructor({
    uiManager: t,
    pageIndex: e,
    div: i,
    structTreeLayer: s,
    accessibilityManager: r,
    annotationLayer: a,
    drawLayer: o,
    textLayer: l,
    viewport: c,
    l10n: d,
  }) {
    v(this, Ht);
    v(this, no);
    v(this, Zl, !1);
    v(this, kr, null);
    v(this, Rr, null);
    v(this, Pn, null);
    v(this, ri, /* @__PURE__ */ new Map());
    v(this, Mr, !1);
    v(this, th, !1);
    v(this, eh, !1);
    v(this, rs, null);
    v(this, kn, null);
    v(this, Ae, null);
    v(this, Rn, null);
    v(this, Lr, null);
    v(this, ih, -1);
    v(this, it);
    const u = [...n(Xi, Dr).values()];
    if (!Xi._initialized) {
      Xi._initialized = !0;
      for (const g of u) g.initialize(d, t);
    }
    t.registerEditorTypes(u), m(this, it, t), this.pageIndex = e, this.div = i, m(this, no, r), m(this, kr, a), this.viewport = c, m(this, Ae, l), this.drawLayer = o, this._structTree = s, n(this, it).addLayer(this);
  }

  get isEmpty() {
    return n(this, ri).size === 0;
  }

  get isInvisible() {
    return this.isEmpty && n(this, it).getMode() === ft.NONE;
  }

  updateToolbar(t) {
    n(this, it).updateToolbar(t);
  }

  updateMode(t = n(this, it).getMode()) {
    switch (A(this, Ht, Tu).call(this), t) {
      case ft.NONE:
        this.div.classList.toggle('nonEditing', !0), this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case ft.INK:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
        break;
      case ft.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: e,
    } = this.div;
    if (e.toggle('nonEditing', !1), t === ft.POPUP) e.toggle('commentEditing', !0);
    else {
      e.toggle('commentEditing', !1);
      for (const i of n(Xi, Dr).values()) e.toggle(`${i._type}Editing`, t === i._editorType);
    }
    this.div.hidden = !1;
  }

  hasTextLayer(t) {
    let e;
    return t === ((e = n(this, Ae)) == null ? void 0 : e.div);
  }

  setEditingState(t) {
    n(this, it).setEditingState(t);
  }

  addCommands(t) {
    n(this, it).addCommands(t);
  }

  cleanUndoStack(t) {
    n(this, it).cleanUndoStack(t);
  }

  toggleDrawing(t = !1) {
    this.div.classList.toggle('drawing', !t);
  }

  togglePointerEvents(t = !1) {
    this.div.classList.toggle('disabled', !t);
  }

  toggleAnnotationLayerPointerEvents(t = !1) {
    let e;
    (e = n(this, kr)) == null || e.div.classList.toggle('disabled', !t);
  }

  async enable() {
    let i;
    m(this, eh, !0), this.div.tabIndex = 0, this.togglePointerEvents(!0), this.div.classList.toggle('nonEditing', !1), (i = n(this, Lr)) == null || i.abort(), m(this, Lr, null);
    const t = /* @__PURE__ */ new Set();
    for (const s of n(this, Ht, lg)) s.enableEditing(), s.show(!0), s.annotationElementId && (n(this, it).removeChangedExistingAnnotation(s), t.add(s.annotationElementId));
    const e = n(this, kr);
    if (e) {
      for (const s of e.getEditableAnnotations()) {
        if (s.hide(), n(this, it).isDeletedAnnotationElement(s.data.id) || t.has(s.data.id)) continue;
        const r = await this.deserialize(s);
        r && (this.addOrRebuild(r), r.enableEditing());
      }
    }
    m(this, eh, !1), n(this, it)._eventBus.dispatch('editorsrendered', {
      source: this,
      pageNumber: this.pageIndex + 1,
    });
  }

  disable() {
    let i;
    if (m(this, th, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1), this.div.classList.toggle('nonEditing', !0), n(this, Ae) && !n(this, Lr)) {
      m(this, Lr, new AbortController());
      const s = n(this, it).combinedSignal(n(this, Lr));
      n(this, Ae).div.addEventListener('pointerdown', (r) => {
        const {
          clientX: o,
          clientY: l,
          timeStamp: c,
        } = r; const
          d = n(this, ih);
        if (c - d > 500) {
          m(this, ih, c);
          return;
        }
        m(this, ih, -1);
        const {
          classList: u,
        } = this.div;
        u.toggle('getElements', !0);
        const g = document.elementsFromPoint(o, l);
        if (u.toggle('getElements', !1), !this.div.contains(g[0])) return;
        let b;
        const E = new RegExp(`^${Hh}[0-9]+$`);
        for (const M of g) {
          if (E.test(M.id)) {
            b = M.id;
            break;
          }
        }
        if (!b) return;
        const S = n(this, ri).get(b);
        (S == null ? void 0 : S.annotationElementId) === null && (r.stopPropagation(), r.preventDefault(), S.dblclick(r));
      }, {
        signal: s,
        capture: !0,
      });
    }
    const t = n(this, kr);
    if (t) {
      const s = /* @__PURE__ */ new Map(); const
        r = /* @__PURE__ */ new Map();
      for (const o of n(this, Ht, lg)) {
        if (o.disableEditing(), !o.annotationElementId) {
          o.updateFakeAnnotationElement(t);
          continue;
        }
        if (o.serialize() !== null) {
          s.set(o.annotationElementId, o);
          continue;
        } else r.set(o.annotationElementId, o);
        (i = this.getEditableAnnotation(o.annotationElementId)) == null || i.show(), o.remove();
      }
      const a = t.getEditableAnnotations();
      for (const o of a) {
        const {
          id: l,
        } = o.data;
        if (n(this, it).isDeletedAnnotationElement(l)) {
          o.updateEdited({
            deleted: !0,
          });
          continue;
        }
        let c = r.get(l);
        if (c) {
          c.resetAnnotationElement(o), c.show(!1), o.show();
          continue;
        }
        c = s.get(l), c && (n(this, it).addChangedExistingAnnotation(c), c.renderAnnotationElement(o) && c.show(!1)), o.show();
      }
    }
    A(this, Ht, Tu).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: e,
    } = this.div;
    for (const s of n(Xi, Dr).values()) e.remove(`${s._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), m(this, th, !1);
  }

  getEditableAnnotation(t) {
    let e;
    return ((e = n(this, kr)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }

  setActiveEditor(t) {
    n(this, it).getActive() !== t && n(this, it).setActiveEditor(t);
  }

  enableTextSelection() {
    let t;
    if (this.div.tabIndex = -1, (t = n(this, Ae)) != null && t.div && !n(this, Rn)) {
      m(this, Rn, new AbortController());
      const e = n(this, it).combinedSignal(n(this, Rn));
      n(this, Ae).div.addEventListener('pointerdown', A(this, Ht, rv).bind(this), {
        signal: e,
      }), n(this, Ae).div.classList.add('highlighting');
    }
  }

  disableTextSelection() {
    let t;
    this.div.tabIndex = 0, (t = n(this, Ae)) != null && t.div && n(this, Rn) && (n(this, Rn).abort(), m(this, Rn, null), n(this, Ae).div.classList.remove('highlighting'));
  }

  enableClick() {
    if (n(this, Rr)) return;
    m(this, Rr, new AbortController());
    const t = n(this, it).combinedSignal(n(this, Rr));
    this.div.addEventListener('pointerdown', this.pointerdown.bind(this), {
      signal: t,
    });
    const e = this.pointerup.bind(this);
    this.div.addEventListener('pointerup', e, {
      signal: t,
    }), this.div.addEventListener('pointercancel', e, {
      signal: t,
    });
  }

  disableClick() {
    let t;
    (t = n(this, Rr)) == null || t.abort(), m(this, Rr, null);
  }

  attach(t) {
    n(this, ri).set(t.id, t);
    const {
      annotationElementId: e,
    } = t;
    e && n(this, it).isDeletedAnnotationElement(e) && n(this, it).removeDeletedAnnotationElement(t);
  }

  detach(t) {
    let e;
    n(this, ri).delete(t.id), (e = n(this, no)) == null || e.removePointerInTextLayer(t.contentDiv), !n(this, th) && t.annotationElementId && n(this, it).addDeletedAnnotationElement(t);
  }

  remove(t) {
    this.detach(t), n(this, it).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1;
  }

  changeParent(t) {
    let e;
    t.parent !== this && (t.parent && t.annotationElementId && (n(this, it).addDeletedAnnotationElement(t.annotationElementId), $t.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }

  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), n(this, it).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(!n(this, eh)), n(this, it).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }

  moveEditorInDOM(t) {
    let i;
    if (!t.isAttachedToDOM) return;
    const {
      activeElement: e,
    } = document;
    t.div.contains(e) && !n(this, Pn) && (t._focusEventsAllowed = !1, m(this, Pn, setTimeout(() => {
      m(this, Pn, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener('focusin', () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: n(this, it)._signal,
      }), e.focus());
    }, 0))), t._structTreeParentId = (i = n(this, no)) == null ? void 0 : i.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
  }

  addOrRebuild(t) {
    t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t);
  }

  addUndoableEditor(t) {
    const e = () => t._uiManager.rebuild(t); const
      i = () => {
        t.remove();
      };
    this.addCommands({
      cmd: e,
      undo: i,
      mustExec: !1,
    });
  }

  getEditorByUID(t) {
    for (const e of n(this, ri).values()) if (e.uid === t) return e;
    return null;
  }

  getNextId() {
    return n(this, it).getId();
  }

  combinedSignal(t) {
    return n(this, it).combinedSignal(t);
  }

  canCreateNewEmptyEditor() {
    let t;
    return (t = n(this, Ht, gs)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }

  async pasteEditor(t, e) {
    this.updateToolbar(t), await n(this, it).updateMode(t.mode);
    const {
      offsetX: i,
      offsetY: s,
    } = A(this, Ht, cg).call(this); const r = this.getNextId(); const
      a = A(this, Ht, hg).call(this, {
        parent: this,
        id: r,
        x: i,
        y: s,
        uiManager: n(this, it),
        isCentered: !0,
        ...e,
      });
    a && this.add(a);
  }

  async deserialize(t) {
    let e;
    return await ((e = n(Xi, Dr).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, n(this, it))) || null;
  }

  createAndAddNewEditor(t, e, i = {}) {
    const s = this.getNextId(); const
      r = A(this, Ht, hg).call(this, {
        parent: this,
        id: s,
        x: t.offsetX,
        y: t.offsetY,
        uiManager: n(this, it),
        isCentered: e,
        ...i,
      });
    return r && this.add(r), r;
  }

  get boundingClientRect() {
    return this.div.getBoundingClientRect();
  }

  addNewEditor(t = {}) {
    this.createAndAddNewEditor(A(this, Ht, cg).call(this), !0, t);
  }

  setSelected(t) {
    n(this, it).setSelected(t);
  }

  toggleSelected(t) {
    n(this, it).toggleSelected(t);
  }

  unselect(t) {
    n(this, it).unselect(t);
  }

  pointerup(t) {
    let s;
    const {
      isMac: e,
    } = _e.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div || !n(this, Mr) || (m(this, Mr, !1), (s = n(this, Ht, gs)) != null && s.isDrawer && n(this, Ht, gs).supportMultipleDrawings)) return;
    if (!n(this, Zl)) {
      m(this, Zl, !0);
      return;
    }
    const i = n(this, it).getMode();
    if (i === ft.STAMP || i === ft.SIGNATURE) {
      n(this, it).unselectAll();
      return;
    }
    this.createAndAddNewEditor(t, !1);
  }

  pointerdown(t) {
    let s;
    if (n(this, it).getMode() === ft.HIGHLIGHT && this.enableTextSelection(), n(this, Mr)) {
      m(this, Mr, !1);
      return;
    }
    const {
      isMac: e,
    } = _e.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div) return;
    if (m(this, Mr, !0), (s = n(this, Ht, gs)) != null && s.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const i = n(this, it).getActive();
    m(this, Zl, !i || i.isEmpty());
  }

  startDrawingSession(t) {
    if (this.div.focus({
      preventScroll: !0,
    }), n(this, rs)) {
      n(this, Ht, gs).startDrawing(this, n(this, it), !1, t);
      return;
    }
    n(this, it).setCurrentDrawingSession(this), m(this, rs, new AbortController());
    const e = n(this, it).combinedSignal(n(this, rs));
    this.div.addEventListener('blur', ({
      relatedTarget: i,
    }) => {
      i && !this.div.contains(i) && (m(this, kn, null), this.commitOrRemove());
    }, {
      signal: e,
    }), n(this, Ht, gs).startDrawing(this, n(this, it), !1, t);
  }

  pause(t) {
    if (t) {
      const {
        activeElement: e,
      } = document;
      this.div.contains(e) && m(this, kn, e);
      return;
    }
    n(this, kn) && setTimeout(() => {
      let e;
      (e = n(this, kn)) == null || e.focus(), m(this, kn, null);
    }, 0);
  }

  endDrawingSession(t = !1) {
    return n(this, rs) ? (n(this, it).setCurrentDrawingSession(null), n(this, rs).abort(), m(this, rs, null), m(this, kn, null), n(this, Ht, gs).endDrawing(t)) : null;
  }

  findNewParent(t, e, i) {
    const s = n(this, it).findParent(e, i);
    return s === null || s === this ? !1 : (s.changeParent(t), !0);
  }

  commitOrRemove() {
    return n(this, rs) ? (this.endDrawingSession(), !0) : !1;
  }

  onScaleChanging() {
    n(this, rs) && n(this, Ht, gs).onScaleChangingWhenDrawing(this);
  }

  destroy() {
    let t; let
      e;
    this.commitOrRemove(), ((t = n(this, it).getActive()) == null ? void 0 : t.parent) === this && (n(this, it).commitOrRemove(), n(this, it).setActiveEditor(null)), n(this, Pn) && (clearTimeout(n(this, Pn)), m(this, Pn, null));
    for (const i of n(this, ri).values()) (e = n(this, no)) == null || e.removePointerInTextLayer(i.contentDiv), i.setParent(null), i.isAttachedToDOM = !1, i.div.remove();
    this.div = null, n(this, ri).clear(), n(this, it).removeLayer(this);
  }

  render({
    viewport: t,
  }) {
    this.viewport = t, Or(this.div, t);
    for (const e of n(this, it).getEditors(this.pageIndex)) this.add(e), e.rebuild();
    this.updateMode();
  }

  update({
    viewport: t,
  }) {
    n(this, it).commitOrRemove(), A(this, Ht, Tu).call(this);
    const e = this.viewport.rotation; const
      i = t.rotation;
    if (this.viewport = t, Or(this.div, {
      rotation: i,
    }), e !== i) for (const s of n(this, ri).values()) s.rotate(i);
  }

  get pageDimensions() {
    const {
      pageWidth: t,
      pageHeight: e,
    } = this.viewport.rawDims;
    return [t, e];
  }

  get scale() {
    return n(this, it).viewParameters.realScale;
  }
};
no = new WeakMap(), Zl = new WeakMap(), kr = new WeakMap(), Rr = new WeakMap(), Pn = new WeakMap(), ri = new WeakMap(), Mr = new WeakMap(), th = new WeakMap(), eh = new WeakMap(), rs = new WeakMap(), kn = new WeakMap(), Ae = new WeakMap(), Rn = new WeakMap(), Lr = new WeakMap(), ih = new WeakMap(), it = new WeakMap(), Dr = new WeakMap(), Ht = new WeakSet(), lg = function () {
  return n(this, ri).size !== 0 ? n(this, ri).values() : n(this, it).getEditors(this.pageIndex);
}, rv = function (t) {
  n(this, it).unselectAll();
  const {
    target: e,
  } = t;
  if (e === n(this, Ae).div || (e.getAttribute('role') === 'img' || e.classList.contains('endOfContent')) && n(this, Ae).div.contains(e)) {
    const {
      isMac: i,
    } = _e.platform;
    if (t.button !== 0 || t.ctrlKey && i) return;
    n(this, it).showAllEditors('highlight', !0, !0), n(this, Ae).div.classList.add('free'), this.toggleDrawing(), Bu.startHighlighting(this, n(this, it).direction === 'ltr', {
      target: n(this, Ae).div,
      x: t.x,
      y: t.y,
    }), n(this, Ae).div.addEventListener('pointerup', () => {
      n(this, Ae).div.classList.remove('free'), this.toggleDrawing(!0);
    }, {
      once: !0,
      signal: n(this, it)._signal,
    }), t.preventDefault();
  }
}, gs = function () {
  return n(Xi, Dr).get(n(this, it).getMode());
}, hg = function (t) {
  const e = n(this, Ht, gs);
  return e ? new e.prototype.constructor(t) : null;
}, cg = function () {
  const {
    x: t,
    y: e,
    width: i,
    height: s,
  } = this.boundingClientRect; const r = Math.max(0, t); const a = Math.max(0, e); const o = Math.min(window.innerWidth, t + i); const l = Math.min(window.innerHeight, e + s); const c = (r + o) / 2 - t; const d = (a + l) / 2 - e; const
    [u, g] = this.viewport.rotation % 180 === 0 ? [c, d] : [d, c];
  return {
    offsetX: u,
    offsetY: g,
  };
}, Tu = function () {
  for (const t of n(this, ri).values()) t.isEmpty() && t.remove();
}, V(Xi, '_initialized', !1), v(Xi, Dr, new Map([$p, Zp, ag, Bu, rg].map((t) => [t._editorType, t])));
const ju = Xi;
let as; let qe; let ro; let Cd; let of; let av; let Us; let dg; let ov; let
  ug;
const ue = class ue {
  constructor({
    pageIndex: t,
  }) {
    v(this, Us);
    v(this, as, null);
    v(this, qe, /* @__PURE__ */ new Map());
    v(this, ro, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }

  setParent(t) {
    if (!n(this, as)) {
      m(this, as, t);
      return;
    }
    if (n(this, as) !== t) {
      if (n(this, qe).size > 0) for (const e of n(this, qe).values()) e.remove(), t.append(e);
      m(this, as, t);
    }
  }

  static get _svgFactory() {
    return yt(this, '_svgFactory', new Vh());
  }

  draw(t, e = !1, i = !1) {
    const s = de(ue, Cd)._++; const r = A(this, Us, dg).call(this); const
      a = ue._svgFactory.createElement('defs');
    r.append(a);
    const o = ue._svgFactory.createElement('path');
    a.append(o);
    const l = `path_p${this.pageIndex}_${s}`;
    o.setAttribute('id', l), o.setAttribute('vector-effect', 'non-scaling-stroke'), e && n(this, ro).set(s, o);
    const c = i ? A(this, Us, ov).call(this, a, l) : null; const
      d = ue._svgFactory.createElement('use');
    return r.append(d), d.setAttribute('href', `#${l}`), this.updateProperties(r, t), n(this, qe).set(s, r), {
      id: s,
      clipPathId: `url(#${c})`,
    };
  }

  drawOutline(t, e) {
    const i = de(ue, Cd)._++; const s = A(this, Us, dg).call(this); const
      r = ue._svgFactory.createElement('defs');
    s.append(r);
    const a = ue._svgFactory.createElement('path');
    r.append(a);
    const o = `path_p${this.pageIndex}_${i}`;
    a.setAttribute('id', o), a.setAttribute('vector-effect', 'non-scaling-stroke');
    let l;
    if (e) {
      const u = ue._svgFactory.createElement('mask');
      r.append(u), l = `mask_p${this.pageIndex}_${i}`, u.setAttribute('id', l), u.setAttribute('maskUnits', 'objectBoundingBox');
      const g = ue._svgFactory.createElement('rect');
      u.append(g), g.setAttribute('width', '1'), g.setAttribute('height', '1'), g.setAttribute('fill', 'white');
      const b = ue._svgFactory.createElement('use');
      u.append(b), b.setAttribute('href', `#${o}`), b.setAttribute('stroke', 'none'), b.setAttribute('fill', 'black'), b.setAttribute('fill-rule', 'nonzero'), b.classList.add('mask');
    }
    const c = ue._svgFactory.createElement('use');
    s.append(c), c.setAttribute('href', `#${o}`), l && c.setAttribute('mask', `url(#${l})`);
    const d = c.cloneNode();
    return s.append(d), c.classList.add('mainOutline'), d.classList.add('secondaryOutline'), this.updateProperties(s, t), n(this, qe).set(i, s), i;
  }

  finalizeDraw(t, e) {
    n(this, ro).delete(t), this.updateProperties(t, e);
  }

  updateProperties(t, e) {
    let l;
    if (!e) return;
    const {
      root: i,
      bbox: s,
      rootClass: r,
      path: a,
    } = e; const
      o = typeof t === 'number' ? n(this, qe).get(t) : t;
    if (o) {
      if (i && A(this, Us, ug).call(this, o, i), s && A(l = ue, of, av).call(l, o, s), r) {
        const {
          classList: c,
        } = o;
        for (const [d, u] of Object.entries(r)) c.toggle(d, u);
      }
      if (a) {
        const d = o.firstChild.firstChild;
        A(this, Us, ug).call(this, d, a);
      }
    }
  }

  updateParent(t, e) {
    if (e === this) return;
    const i = n(this, qe).get(t);
    i && (n(e, as).append(i), n(this, qe).delete(t), n(e, qe).set(t, i));
  }

  remove(t) {
    n(this, ro).delete(t), n(this, as) !== null && (n(this, qe).get(t).remove(), n(this, qe).delete(t));
  }

  destroy() {
    m(this, as, null);
    for (const t of n(this, qe).values()) t.remove();
    n(this, qe).clear(), n(this, ro).clear();
  }
};
as = new WeakMap(), qe = new WeakMap(), ro = new WeakMap(), Cd = new WeakMap(), of = new WeakSet(), av = function (t, [e, i, s, r]) {
  const {
    style: a,
  } = t;
  a.top = `${100 * i}%`, a.left = `${100 * e}%`, a.width = `${100 * s}%`, a.height = `${100 * r}%`;
}, Us = new WeakSet(), dg = function () {
  const t = ue._svgFactory.create(1, 1, !0);
  return n(this, as).append(t), t.setAttribute('aria-hidden', !0), t;
}, ov = function (t, e) {
  const i = ue._svgFactory.createElement('clipPath');
  t.append(i);
  const s = `clip_${e}`;
  i.setAttribute('id', s), i.setAttribute('clipPathUnits', 'objectBoundingBox');
  const r = ue._svgFactory.createElement('use');
  return i.append(r), r.setAttribute('href', `#${e}`), r.classList.add('clip'), s;
}, ug = function (t, e) {
  for (const [i, s] of Object.entries(e)) s === null ? t.removeAttribute(i) : t.setAttribute(i, s);
}, v(ue, of), v(ue, Cd, 0);
const zu = ue;
globalThis._pdfjsTestingUtils = {
  HighlightOutliner: Gp,
};
globalThis.pdfjsLib = {
  AbortException: Dn,
  AnnotationEditorLayer: ju,
  AnnotationEditorParamsType: At,
  AnnotationEditorType: ft,
  AnnotationEditorUIManager: Ir,
  AnnotationLayer: kg,
  AnnotationMode: Hs,
  AnnotationType: se,
  applyOpacity: ny,
  build: lb,
  ColorPicker: Gh,
  createValidAbsoluteUrl: mg,
  CSSConstants: sy,
  DOMSVGFactory: Vh,
  DrawLayer: zu,
  FeatureTest: _e,
  fetchData: oh,
  findContrastColor: ry,
  getDocument: Eg,
  getFilenameFromUrl: ty,
  getPdfFilenameFromUrl: ey,
  getRGB: lh,
  getUuid: bg,
  getXfaPageViewport: iy,
  GlobalWorkerOptions: os,
  ImageKind: Bh,
  InvalidPDFException: Ru,
  isDataScheme: Md,
  isPdfFile: ff,
  isValidExplicitDest: By,
  MathClamp: ze,
  noContextMenu: Ri,
  normalizeUnicode: Qm,
  OPS: nh,
  OutputScale: cs,
  PasswordResponses: Km,
  PDFDataRangeTransport: Cg,
  PDFDateString: Uh,
  PDFWorker: rh,
  PermissionFlag: Ym,
  PixelsPerInch: On,
  RenderingCancelledException: uf,
  renderRichText: Sg,
  ResponseException: jh,
  setLayerDimensions: Or,
  shadow: yt,
  SignatureExtractor: js,
  stopEvent: Kt,
  SupportedImageMimeTypes: Mu,
  TextLayer: Wh,
  TouchManager: $h,
  updateUrlHash: yg,
  Util: tt,
  VerbosityLevel: Pd,
  version: ob,
  XfaLayer: wg,
};
const lv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbortException: Dn,
  AnnotationEditorLayer: ju,
  AnnotationEditorParamsType: At,
  AnnotationEditorType: ft,
  AnnotationEditorUIManager: Ir,
  AnnotationLayer: kg,
  AnnotationMode: Hs,
  AnnotationType: se,
  CSSConstants: sy,
  ColorPicker: Gh,
  DOMSVGFactory: Vh,
  DrawLayer: zu,
  FeatureTest: _e,
  GlobalWorkerOptions: os,
  ImageKind: Bh,
  InvalidPDFException: Ru,
  MathClamp: ze,
  OPS: nh,
  OutputScale: cs,
  PDFDataRangeTransport: Cg,
  PDFDateString: Uh,
  PDFWorker: rh,
  PasswordResponses: Km,
  PermissionFlag: Ym,
  PixelsPerInch: On,
  RenderingCancelledException: uf,
  ResponseException: jh,
  SignatureExtractor: js,
  SupportedImageMimeTypes: Mu,
  TextLayer: Wh,
  TouchManager: $h,
  Util: tt,
  VerbosityLevel: Pd,
  XfaLayer: wg,
  applyOpacity: ny,
  build: lb,
  createValidAbsoluteUrl: mg,
  fetchData: oh,
  findContrastColor: ry,
  getDocument: Eg,
  getFilenameFromUrl: ty,
  getPdfFilenameFromUrl: ey,
  getRGB: lh,
  getUuid: bg,
  getXfaPageViewport: iy,
  isDataScheme: Md,
  isPdfFile: ff,
  isValidExplicitDest: By,
  noContextMenu: Ri,
  normalizeUnicode: Qm,
  renderRichText: Sg,
  setLayerDimensions: Or,
  shadow: yt,
  stopEvent: Kt,
  updateUrlHash: yg,
  version: ob,
}, Symbol.toStringTag, { value: 'Module' }));
function hv(h) {
  let t; let e; let
    i = '';
  if (typeof h === 'string' || typeof h === 'number') i += h;
  else if (typeof h === 'object') {
    if (Array.isArray(h)) {
      const s = h.length;
      for (t = 0; t < s; t++) h[t] && (e = hv(h[t])) && (i && (i += ' '), i += e);
    } else for (e in h) h[e] && (i && (i += ' '), i += e);
  }
  return i;
}
function mf() {
  for (var h, t, e = 0, i = '', s = arguments.length; e < s; e++) (h = arguments[e]) && (t = hv(h)) && (i && (i += ' '), i += t);
  return i;
}
const Cm = Object.prototype.hasOwnProperty;
function Tm(h, t, e) {
  for (e of h.keys()) if (ko(e, t)) return e;
}
function ko(h, t) {
  let e; let i; let
    s;
  if (h === t) return !0;
  if (h && t && (e = h.constructor) === t.constructor) {
    if (e === Date) return h.getTime() === t.getTime();
    if (e === RegExp) return h.toString() === t.toString();
    if (e === Array) {
      if ((i = h.length) === t.length) for (; i-- && ko(h[i], t[i]);) ;
      return i === -1;
    }
    if (e === Set) {
      if (h.size !== t.size) return !1;
      for (i of h) if (s = i, s && typeof s === 'object' && (s = Tm(t, s), !s) || !t.has(s)) return !1;
      return !0;
    }
    if (e === Map) {
      if (h.size !== t.size) return !1;
      for (i of h) if (s = i[0], s && typeof s === 'object' && (s = Tm(t, s), !s) || !ko(i[1], t.get(s))) return !1;
      return !0;
    }
    if (e === ArrayBuffer) h = new Uint8Array(h), t = new Uint8Array(t);
    else if (e === DataView) {
      if ((i = h.byteLength) === t.byteLength) for (; i-- && h.getInt8(i) === t.getInt8(i);) ;
      return i === -1;
    }
    if (ArrayBuffer.isView(h)) {
      if ((i = h.byteLength) === t.byteLength) for (; i-- && h[i] === t[i];) ;
      return i === -1;
    }
    if (!e || typeof h === 'object') {
      i = 0;
      for (e in h) if (Cm.call(h, e) && ++i && !Cm.call(t, e) || !(e in t) || !ko(h[e], t[e])) return !1;
      return Object.keys(t).length === i;
    }
  }
  return h !== h && t !== t;
}
function Id(h) {
  let t = !1;
  return {
    promise: new Promise((i, s) => {
      h.then((r) => !t && i(r)).catch((r) => !t && s(r));
    }),
    cancel() {
      t = !0;
    },
  };
}
const iS = ['onCopy', 'onCut', 'onPaste']; const sS = [
  'onCompositionEnd',
  'onCompositionStart',
  'onCompositionUpdate',
]; const nS = ['onFocus', 'onBlur']; const rS = ['onInput', 'onInvalid', 'onReset', 'onSubmit']; const aS = ['onLoad', 'onError']; const oS = ['onKeyDown', 'onKeyPress', 'onKeyUp']; const lS = [
  'onAbort',
  'onCanPlay',
  'onCanPlayThrough',
  'onDurationChange',
  'onEmptied',
  'onEncrypted',
  'onEnded',
  'onError',
  'onLoadedData',
  'onLoadedMetadata',
  'onLoadStart',
  'onPause',
  'onPlay',
  'onPlaying',
  'onProgress',
  'onRateChange',
  'onSeeked',
  'onSeeking',
  'onStalled',
  'onSuspend',
  'onTimeUpdate',
  'onVolumeChange',
  'onWaiting',
]; const hS = [
  'onClick',
  'onContextMenu',
  'onDoubleClick',
  'onMouseDown',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseMove',
  'onMouseOut',
  'onMouseOver',
  'onMouseUp',
]; const cS = [
  'onDrag',
  'onDragEnd',
  'onDragEnter',
  'onDragExit',
  'onDragLeave',
  'onDragOver',
  'onDragStart',
  'onDrop',
]; const dS = ['onSelect']; const uS = ['onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart']; const fS = [
  'onPointerDown',
  'onPointerMove',
  'onPointerUp',
  'onPointerCancel',
  'onGotPointerCapture',
  'onLostPointerCapture',
  'onPointerEnter',
  'onPointerLeave',
  'onPointerOver',
  'onPointerOut',
]; const pS = ['onScroll']; const gS = ['onWheel']; const mS = [
  'onAnimationStart',
  'onAnimationEnd',
  'onAnimationIteration',
]; const yS = ['onTransitionEnd']; const bS = ['onToggle']; const vS = ['onChange']; const
  wS = [
    ...iS,
    ...sS,
    ...nS,
    ...rS,
    ...aS,
    ...oS,
    ...lS,
    ...hS,
    ...cS,
    ...dS,
    ...uS,
    ...fS,
    ...pS,
    ...gS,
    ...mS,
    ...yS,
    ...vS,
    ...bS,
  ];
function cv(h, t) {
  const e = {};
  for (const i of wS) {
    const s = h[i];
    s && (t ? e[i] = ((r) => s(r, t(i))) : e[i] = s);
  }
  return e;
}
const SS = process.env.NODE_ENV === 'production';
const Bf = 'Invariant failed';
function Bt(h, t) {
  if (!h) {
    if (SS) throw new Error(Bf);
    const e = typeof t === 'function' ? t() : t; const
      i = e ? ''.concat(Bf, ': ').concat(e) : Bf;
    throw new Error(i);
  }
}
let Hf; let
  Pm;
function AS() {
  if (Pm) return Hf;
  Pm = 1;
  const h = process.env.NODE_ENV !== 'production';
  let t = function () {
  };
  if (h) {
    const e = function (s, r) {
      const a = arguments.length;
      r = new Array(a > 1 ? a - 1 : 0);
      for (let o = 1; o < a; o++) r[o - 1] = arguments[o];
      let l = 0; const
        c = `Warning: ${s.replace(/%s/g, () => r[l++])}`;
      typeof console < 'u' && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
    t = function (i, s, r) {
      const a = arguments.length;
      r = new Array(a > 2 ? a - 2 : 0);
      for (let o = 2; o < a; o++) r[o - 2] = arguments[o];
      if (s === void 0) {
        throw new Error(
          '`warning(condition, format, ...args)` requires a warning message argument',
        );
      }
      i || e.apply(null, [s].concat(r));
    };
  }
  return Hf = t, Hf;
}
const _S = AS();
const Ue = /* @__PURE__ */ zm(_S); const dv = Bm(null); const
  xS = 'noopener noreferrer nofollow';
class ES {
  constructor() {
    this.externalLinkEnabled = !0, this.externalLinkRel = void 0, this.externalLinkTarget = void 0, this.isInPresentationMode = !1, this.pdfDocument = void 0, this.pdfViewer = void 0;
  }

  setDocument(t) {
    this.pdfDocument = t;
  }

  setViewer(t) {
    this.pdfViewer = t;
  }

  setExternalLinkRel(t) {
    this.externalLinkRel = t;
  }

  setExternalLinkTarget(t) {
    this.externalLinkTarget = t;
  }

  setHash() {
  }

  setHistory() {
  }

  get pagesCount() {
    return this.pdfDocument ? this.pdfDocument.numPages : 0;
  }

  get page() {
    return Bt(this.pdfViewer, 'PDF viewer is not initialized.'), this.pdfViewer.currentPageNumber || 0;
  }

  set page(t) {
    Bt(this.pdfViewer, 'PDF viewer is not initialized.'), this.pdfViewer.currentPageNumber = t;
  }

  get rotation() {
    return 0;
  }

  set rotation(t) {
  }

  addLinkAttributes(t, e, i) {
    t.href = e, t.rel = this.externalLinkRel || xS, t.target = i ? '_blank' : this.externalLinkTarget || '';
  }

  goToDestination(t) {
    return new Promise((e) => {
      Bt(this.pdfDocument, 'PDF document not loaded.'), Bt(t, 'Destination is not specified.'), typeof t === 'string' ? this.pdfDocument.getDestination(t).then(e) : Array.isArray(t) ? e(t) : t.then(e);
    }).then((e) => {
      Bt(Array.isArray(e), `"${e}" is not a valid destination array.`);
      const i = e[0];
      new Promise((s) => {
        Bt(this.pdfDocument, 'PDF document not loaded.'), i instanceof Object ? this.pdfDocument.getPageIndex(i).then((r) => {
          s(r);
        }).catch(() => {
          Bt(!1, `"${i}" is not a valid page reference.`);
        }) : typeof i === 'number' ? s(i) : Bt(!1, `"${i}" is not a valid destination reference.`);
      }).then((s) => {
        const r = s + 1;
        Bt(this.pdfViewer, 'PDF viewer is not initialized.'), Bt(r >= 1 && r <= this.pagesCount, `"${r}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
          dest: e,
          pageIndex: s,
          pageNumber: r,
        });
      });
    });
  }

  goToPage(t) {
    const e = t - 1;
    Bt(this.pdfViewer, 'PDF viewer is not initialized.'), Bt(t >= 1 && t <= this.pagesCount, `"${t}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
      pageIndex: e,
      pageNumber: t,
    });
  }

  goToXY() {
  }

  cachePageRef() {
  }

  getDestinationHash() {
    return '#';
  }

  getAnchorUrl() {
    return '#';
  }

  executeNamedAction() {
  }

  executeSetOCGState() {
  }

  isPageVisible() {
    return !0;
  }

  isPageCached() {
    return !0;
  }

  navigateTo(t) {
    this.goToDestination(t);
  }
}
function Ro({ children: h, type: t }) {
  return Y('div', { className: `react-pdf__message react-pdf__message--${t}`, children: h });
}
const fg = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2,
};
function CS(h, t) {
  switch (t.type) {
    case 'RESOLVE':
      return { value: t.value, error: void 0 };
    case 'REJECT':
      return { value: !1, error: t.error };
    case 'RESET':
      return { value: void 0, error: void 0 };
    default:
      return h;
  }
}
function ah() {
  return Tv(CS, { value: void 0, error: void 0 });
}
const yf = typeof window < 'u';
const uv = yf && window.location.protocol === 'file:';
function TS(h) {
  return typeof h < 'u';
}
function zr(h) {
  return TS(h) && h !== null;
}
function PS(h) {
  return typeof h === 'string';
}
function kS(h) {
  return h instanceof ArrayBuffer;
}
function RS(h) {
  return Bt(yf, 'isBlob can only be used in a browser environment'), h instanceof Blob;
}
function pg(h) {
  return PS(h) && /^data:/.test(h);
}
function km(h) {
  Bt(pg(h), 'Invalid data URI.');
  const [t = '', e = ''] = h.split(',');
  return t.split(';').indexOf('base64') !== -1 ? atob(e) : unescape(e);
}
function MS() {
  return yf && window.devicePixelRatio || 1;
}
const fv = 'On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.';
function Rm() {
  Ue(!uv, `Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ${fv}`);
}
function LS() {
  Ue(!uv, `Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ${fv}`);
}
function oo(h) {
  h != null && h.cancel && h.cancel();
}
function gg(h, t) {
  return Object.defineProperty(h, 'width', {
    get() {
      return this.getViewport({ scale: t }).width;
    },
    configurable: !0,
  }), Object.defineProperty(h, 'height', {
    get() {
      return this.getViewport({ scale: t }).height;
    },
    configurable: !0,
  }), Object.defineProperty(h, 'originalWidth', {
    get() {
      return this.getViewport({ scale: 1 }).width;
    },
    configurable: !0,
  }), Object.defineProperty(h, 'originalHeight', {
    get() {
      return this.getViewport({ scale: 1 }).height;
    },
    configurable: !0,
  }), h;
}
function pv(h) {
  return h.name === 'AbortException' || h.name === 'RenderingCancelledException';
}
function DS(h) {
  return new Promise((t, e) => {
    const i = new FileReader();
    i.onload = () => {
      if (!i.result) return e(new Error('Error while reading a file.'));
      t(i.result);
    }, i.onerror = (s) => {
      if (!s.target) return e(new Error('Error while reading a file.'));
      const { error: r } = s.target;
      if (!r) return e(new Error('Error while reading a file.'));
      switch (r.code) {
        case r.NOT_FOUND_ERR:
          return e(new Error('Error while reading a file: File not found.'));
        case r.SECURITY_ERR:
          return e(new Error('Error while reading a file: Security error.'));
        case r.ABORT_ERR:
          return e(new Error('Error while reading a file: Aborted.'));
        default:
          return e(new Error('Error while reading a file.'));
      }
    }, i.readAsArrayBuffer(h);
  });
}
const { PDFDataRangeTransport: OS } = lv; const
  IS = (h, t) => {
    switch (t) {
      case fg.NEED_PASSWORD: {
        const e = prompt('Enter the password to open this PDF file.');
        h(e);
        break;
      }
      case fg.INCORRECT_PASSWORD: {
        const e = prompt('Invalid password. Please try again.');
        h(e);
        break;
      }
    }
  };
function Mm(h) {
  return typeof h === 'object' && h !== null && ('data' in h || 'range' in h || 'url' in h);
}
const FS = Nm(({
  children: t, className: e, error: i = 'Failed to load PDF file.', externalLinkRel: s, externalLinkTarget: r, file: a, inputRef: o, imageResourcesPath: l, loading: c = 'Loading PDF…', noData: d = 'No PDF file specified.', onItemClick: u, onLoadError: g, onLoadProgress: b, onLoadSuccess: E, onPassword: S = IS, onSourceError: M, onSourceSuccess: T, options: L, renderMode: R, rotate: p, scale: f, ...y
}, _) => {
  const [P, k] = ah(); const { value: C, error: D } = P; const [N, I] = ah(); const { value: B, error: j } = N; const z = Pi(new ES()); const w = Pi([]); const K = Pi(void 0); const
    F = Pi(void 0);
  a && a !== K.current && Mm(a) && (Ue(!ko(a, K.current), 'File prop passed to <Document /> changed, but it\'s equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.'), K.current = a), L && L !== F.current && (Ue(!ko(L, F.current), 'Options prop passed to <Document /> changed, but it\'s equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.'), F.current = L);
  const x = Pi({
    // Handling jumping to internal links target
    scrollPageIntoView: (st) => {
      const { dest: nt, pageNumber: at, pageIndex: St = at - 1 } = st;
      if (u) {
        u({ dest: nt, pageIndex: St, pageNumber: at });
        return;
      }
      const ot = w.current[St];
      if (ot) {
        ot.scrollIntoView();
        return;
      }
      Ue(!1, `An internal link leading to page ${at} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`);
    },
  });
  Hm(_, () => ({
    linkService: z,
    pages: w,
    viewer: x,
  }), []);
  function O() {
    T && T();
  }
  function H() {
    D && (Ue(!1, D.toString()), M && M(D));
  }
  function $() {
    k({ type: 'RESET' });
  }
  jt($, [a, k]);
  const U = zs(async () => {
    if (!a) return null;
    if (typeof a === 'string') return pg(a) ? { data: km(a) } : (Rm(), { url: a });
    if (a instanceof OS) return { range: a };
    if (kS(a)) return { data: a };
    if (yf && RS(a)) return { data: await DS(a) };
    if (Bt(typeof a === 'object', 'Invalid parameter in file, need either Uint8Array, string or a parameter object'), Bt(Mm(a), 'Invalid parameter object: need either .data, .range or .url'), 'url' in a && typeof a.url === 'string') {
      if (pg(a.url)) {
        const { url: st, ...nt } = a;
        return { data: km(st), ...nt };
      }
      Rm();
    }
    return a;
  }, [a]);
  jt(() => {
    const st = Id(U());
    return st.promise.then((nt) => {
      k({ type: 'RESOLVE', value: nt });
    }).catch((nt) => {
      k({ type: 'REJECT', error: nt });
    }), () => {
      oo(st);
    };
  }, [U, k]), jt(() => {
    if (!(typeof C > 'u')) {
      if (C === !1) {
        H();
        return;
      }
      O();
    }
  }, [C]);
  function q() {
    B && (E && E(B), w.current = new Array(B.numPages), z.current.setDocument(B));
  }
  function G() {
    j && (Ue(!1, j.toString()), g && g(j));
  }
  jt(() => {
    I({ type: 'RESET' });
  }, [I, C]), jt(() => {
    if (!C) return;
    const nt = L ? { ...C, ...L } : C; const
      at = Eg(nt);
    b && (at.onProgress = b), S && (at.onPassword = S);
    const St = at;
    return St.promise.then((ot) => {
      St.destroyed || I({ type: 'RESOLVE', value: ot });
    }).catch((ot) => {
      St.destroyed || I({ type: 'REJECT', error: ot });
    }), () => {
      St.destroy();
    };
  }, [L, I, C]), jt(() => {
    if (!(typeof B > 'u')) {
      if (B === !1) {
        G();
        return;
      }
      q();
    }
  }, [B]), jt(() => {
    z.current.setViewer(x.current), z.current.setExternalLinkRel(s), z.current.setExternalLinkTarget(r);
  }, [s, r]);
  const W = zs((st, nt) => {
    w.current[st] = nt;
  }, []); const ht = zs((st) => {
    delete w.current[st];
  }, []); const ct = hs(() => ({
    imageResourcesPath: l,
    linkService: z.current,
    onItemClick: u,
    pdf: B,
    registerPage: W,
    renderMode: R,
    rotate: p,
    scale: f,
    unregisterPage: ht,
  }), [l, u, B, W, R, p, f, ht]); const
    dt = hs(
      () => cv(y, () => B),
      // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
      [y, B],
    );
  function ut() {
    function st(at) {
      return !!(at != null && at.pdf);
    }
    if (!st(ct)) throw new Error('pdf is undefined');
    const nt = typeof t === 'function' ? t(ct) : t;
    return Y(dv.Provider, { value: ct, children: nt });
  }
  function rt() {
    return a ? B == null ? Y(Ro, { type: 'loading', children: typeof c === 'function' ? c() : c }) : B === !1 ? Y(Ro, { type: 'error', children: typeof i === 'function' ? i() : i }) : ut() : Y(Ro, { type: 'no-data', children: typeof d === 'function' ? d() : d });
  }
  return Y('div', {
    className: mf('react-pdf__Document', e),
    // Assertion is needed for React 18 compatibility
    ref: o,
    ...dt,
    children: rt(),
  });
});
function Lg() {
  return jm(dv);
}
function gv() {
  for (var h = [], t = 0; t < arguments.length; t++) h[t] = arguments[t];
  const e = h.filter(Boolean);
  if (e.length <= 1) {
    const i = e[0];
    return i || null;
  }
  return function (r) {
    for (let a = 0, o = e; a < o.length; a++) {
      const l = o[a];
      typeof l === 'function' ? l(r) : l && (l.current = r);
    }
  };
}
const mv = Bm(null);
function Fd() {
  return jm(mv);
}
function NS() {
  const h = Lg(); const
    t = Fd();
  Bt(t, 'Unable to find Page context.');
  const e = { ...h, ...t }; const
    {
      filterAnnotations: i, imageResourcesPath: s, linkService: r, onGetAnnotationsError: a, onGetAnnotationsSuccess: o, onRenderAnnotationLayerError: l, onRenderAnnotationLayerSuccess: c, page: d, pdf: u, renderForms: g, rotate: b, scale: E = 1,
    } = e;
  Bt(u, 'Attempted to load page annotations, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.'), Bt(d, 'Attempted to load page annotations, but no page was specified.'), Bt(r, 'Attempted to load page annotations, but no linkService was specified.');
  const [S, M] = ah(); const { value: T, error: L } = S; const
    R = Pi(null);
  Ue(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue('--react-pdf-annotation-layer'), 10) === 1, 'AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations');
  function p() {
    T && o && o(T);
  }
  function f() {
    L && (Ue(!1, L.toString()), a && a(L));
  }
  jt(() => {
    M({ type: 'RESET' });
  }, [M, d]), jt(() => {
    if (!d) return;
    const C = Id(d.getAnnotations()); const
      D = C;
    return C.promise.then((N) => {
      M({ type: 'RESOLVE', value: N });
    }).catch((N) => {
      M({ type: 'REJECT', error: N });
    }), () => {
      oo(D);
    };
  }, [M, d]), jt(() => {
    if (T !== void 0) {
      if (T === !1) {
        f();
        return;
      }
      p();
    }
  }, [T]);
  function y() {
    c && c();
  }
  function _(k) {
    Ue(!1, `${k}`), l && l(k);
  }
  const P = hs(() => d.getViewport({ scale: E, rotation: b }), [d, b, E]);
  return jt(() => {
    if (!u || !d || !r || !T) return;
    const { current: C } = R;
    if (!C) return;
    const D = P.clone({ dontFlip: !0 }); const N = {
      accessibilityManager: null,
      // TODO: Implement this
      annotationCanvasMap: null,
      // TODO: Implement this
      annotationEditorUIManager: null,
      // TODO: Implement this
      annotationStorage: u.annotationStorage,
      commentManager: null,
      // TODO: Implement this
      div: C,
      l10n: null,
      // TODO: Implement this
      linkService: r,
      page: d,
      structTreeLayer: null,
      // TODO: Implement this
      viewport: D,
    }; const
      I = {
        annotations: i ? i({ annotations: T }) : T,
        annotationStorage: u.annotationStorage,
        div: C,
        imageResourcesPath: s,
        linkService: r,
        page: d,
        renderForms: g,
        viewport: D,
      };
    C.innerHTML = '';
    try {
      new kg(N).render(I), y();
    } catch (B) {
      _(B);
    }
    return () => {
    };
  }, [
    T,
    i,
    s,
    r,
    d,
    u,
    g,
    P,
  ]), Y('div', { className: mf('react-pdf__Page__annotations', 'annotationLayer'), ref: R });
}
const yv = {
  // Document level structure types
  Document: null,
  // There's a "document" role, but it doesn't make sense here.
  DocumentFragment: null,
  // Grouping level structure types
  Part: 'group',
  Sect: 'group',
  // XXX: There's a "section" role, but it's abstract.
  Div: 'group',
  Aside: 'note',
  NonStruct: 'none',
  // Block level structure types
  P: null,
  // H<n>,
  H: 'heading',
  Title: null,
  FENote: 'note',
  // Sub-block level structure type
  Sub: 'group',
  // General inline level structure types
  Lbl: null,
  Span: null,
  Em: null,
  Strong: null,
  Link: 'link',
  Annot: 'note',
  Form: 'form',
  // Ruby and Warichu structure types
  Ruby: null,
  RB: null,
  RT: null,
  RP: null,
  Warichu: null,
  WT: null,
  WP: null,
  // List standard structure types
  L: 'list',
  LI: 'listitem',
  LBody: null,
  // Table standard structure types
  Table: 'table',
  TR: 'row',
  TH: 'columnheader',
  TD: 'cell',
  THead: 'columnheader',
  TBody: null,
  TFoot: null,
  // Standard structure type Caption
  Caption: null,
  // Standard structure type Figure
  Figure: 'figure',
  // Standard structure type Formula
  Formula: null,
  // standard structure type Artifact
  Artifact: null,
};
const BS = /^H(\d+)$/;
function HS(h) {
  return h in yv;
}
function bf(h) {
  return 'children' in h;
}
function bv(h) {
  return bf(h) ? h.children.length === 1 && 0 in h.children && 'id' in h.children[0] : !1;
}
function jS(h) {
  const t = {};
  if (bf(h)) {
    const { role: e } = h; const
      i = e.match(BS);
    if (i) t.role = 'heading', t['aria-level'] = Number(i[1]);
    else if (HS(e)) {
      const s = yv[e];
      s && (t.role = s);
    }
  }
  return t;
}
function vv(h) {
  const t = {};
  if (bf(h)) {
    if (h.alt !== void 0 && (t['aria-label'] = h.alt), h.lang !== void 0 && (t.lang = h.lang), bv(h)) {
      const [e] = h.children;
      if (e) {
        const i = vv(e);
        return {
          ...t,
          ...i,
        };
      }
    }
  } else 'id' in h && (t['aria-owns'] = h.id);
  return t;
}
function zS(h) {
  return h ? {
    ...jS(h),
    ...vv(h),
  } : null;
}
function wv({ className: h, node: t }) {
  const e = hs(() => zS(t), [t]); const
    i = hs(() => (!bf(t) || bv(t) ? null : t.children.map((s, r) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: index is stable here
      Y(wv, { node: s }, r)
    ))), [t]);
  return Y('span', { className: h, ...e, children: i });
}
function US() {
  const h = Fd();
  Bt(h, 'Unable to find Page context.');
  const { onGetStructTreeError: t, onGetStructTreeSuccess: e } = h; const [i, s] = ah(); const { value: r, error: a } = i; const
    { customTextRenderer: o, page: l } = h;
  function c() {
    r && e && e(r);
  }
  function d() {
    a && (Ue(!1, a.toString()), t && t(a));
  }
  return jt(() => {
    s({ type: 'RESET' });
  }, [s, l]), jt(() => {
    if (o || !l) return;
    const g = Id(l.getStructTree()); const
      b = g;
    return g.promise.then((E) => {
      s({ type: 'RESOLVE', value: E });
    }).catch((E) => {
      s({ type: 'REJECT', error: E });
    }), () => oo(b);
  }, [o, l, s]), jt(() => {
    if (r !== void 0) {
      if (r === !1) {
        d();
        return;
      }
      c();
    }
  }, [r]), r ? Y(wv, { className: 'react-pdf__Page__structTree structTree', node: r }) : null;
}
const Lm = Hs;
function $S(h) {
  const t = Fd();
  Bt(t, 'Unable to find Page context.');
  const e = { ...t, ...h }; const {
    _className: i, canvasBackground: s, devicePixelRatio: r = MS(), onRenderError: a, onRenderSuccess: o, page: l, renderForms: c, renderTextLayer: d, pageColors: u, rotate: g, scale: b,
  } = e; const
    { canvasRef: E } = h;
  Bt(l, 'Attempted to render page canvas, but no page was specified.');
  const S = Pi(null);
  function M() {
    l && o && o(gg(l, b));
  }
  function T(f) {
    pv(f) || (Ue(!1, f.toString()), a && a(f));
  }
  const L = hs(() => l.getViewport({ scale: b * r, rotation: g }), [r, l, g, b]); const
    R = hs(() => l.getViewport({ scale: b, rotation: g }), [l, g, b]);
  jt(() => {
    if (!l) return;
    l.cleanup();
    const { current: y } = S;
    if (!y) return;
    y.width = L.width, y.height = L.height, y.style.width = `${Math.floor(R.width)}px`, y.style.height = `${Math.floor(R.height)}px`, y.style.visibility = 'hidden';
    const _ = {
      annotationMode: c ? Lm.ENABLE_FORMS : Lm.ENABLE,
      canvas: y,
      canvasContext: y.getContext('2d', { alpha: !1 }),
      pageColors: u,
      viewport: L,
    };
    s && (_.background = s);
    const P = l.render(_); const
      k = P;
    return P.promise.then(() => {
      y.style.visibility = '', M();
    }).catch(T), () => oo(k);
  }, [s, l, u, c, L, R]);
  const p = zs(() => {
    const { current: f } = S;
    f && (f.width = 0, f.height = 0);
  }, []);
  return jt(() => p, [p]), Y('canvas', {
    className: `${i}__canvas`,
    dir: 'ltr',
    ref: gv(E, S),
    style: {
      display: 'block',
      userSelect: 'none',
    },
    children: d ? Y(US, {}) : null,
  });
}
function WS(h) {
  return 'str' in h;
}
const GS = /* @__PURE__ */ new Set([
  'base',
  'embed',
  'iframe',
  'link',
  'meta',
  'object',
  'script',
  'style',
  'template',
]); const
  VS = /* @__PURE__ */ new Set(['action', 'formaction', 'href', 'poster', 'src', 'xlink:href']);
function qS(h) {
  let t = '';
  for (const e of h) {
    const i = e.charCodeAt(0);
    i <= 32 || i === 127 || (t += e.toLowerCase());
  }
  return t.startsWith('javascript:') || t.startsWith('vbscript:');
}
function XS(h) {
  return h.nodeType === Node.ELEMENT_NODE;
}
function Sv(h) {
  return XS(h) && h instanceof HTMLElement;
}
function YS(h) {
  return Sv(h) && GS.has(h.tagName.toLowerCase());
}
function KS(h) {
  const t = document.createElement(h.tagName.toLowerCase());
  return Array.from(h.attributes).forEach((e) => {
    const i = e.name.toLowerCase();
    i.startsWith('on') || i === 'srcdoc' || VS.has(i) && qS(e.value) || t.setAttribute(e.name, e.value);
  }), Array.from(h.childNodes).forEach((e) => {
    t.append(Av(e));
  }), t;
}
function Av(h) {
  let t;
  return Sv(h) && !YS(h) ? KS(h) : document.createTextNode((t = h.textContent) !== null && t !== void 0 ? t : '');
}
function JS(h, t) {
  const e = document.createElement('template');
  e.innerHTML = t;
  const i = document.createDocumentFragment();
  Array.from(e.content.childNodes).forEach((s) => {
    i.append(Av(s));
  }), h.replaceChildren(i);
}
function QS() {
  const h = Fd();
  Bt(h, 'Unable to find Page context.');
  const {
    customTextRenderer: t, onGetTextError: e, onGetTextSuccess: i, onRenderTextLayerError: s, onRenderTextLayerSuccess: r, page: a, pageIndex: o, pageNumber: l, rotate: c, scale: d,
  } = h;
  Bt(a, 'Attempted to load page text content, but no page was specified.');
  const [u, g] = ah(); const { value: b, error: E } = u; const
    S = Pi(null);
  Ue(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue('--react-pdf-text-layer'), 10) === 1, 'TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer');
  function M() {
    b && i && i(b);
  }
  function T() {
    E && (Ue(!1, E.toString()), e && e(E));
  }
  jt(() => {
    g({ type: 'RESET' });
  }, [a, g]), jt(() => {
    if (!a) return;
    const P = Id(a.getTextContent()); const
      k = P;
    return P.promise.then((C) => {
      g({ type: 'RESOLVE', value: C });
    }).catch((C) => {
      g({ type: 'REJECT', error: C });
    }), () => oo(k);
  }, [a, g]), jt(() => {
    if (b !== void 0) {
      if (b === !1) {
        T();
        return;
      }
      M();
    }
  }, [b]);
  const L = zs(() => {
    r && r();
  }, [r]); const
    R = zs((_) => {
      pv(_) || (Ue(!1, _.toString()), s && s(_));
    }, [s]);
  function p() {
    const _ = S.current;
    _ && _.classList.add('selecting');
  }
  function f() {
    const _ = S.current;
    _ && _.classList.remove('selecting');
  }
  const y = hs(() => a.getViewport({ scale: d, rotation: c }), [a, c, d]);
  return Pv(() => {
    if (!a || !b) return;
    const { current: P } = S;
    if (!P) return;
    P.innerHTML = '';
    const k = a.streamTextContent({ includeMarkedContent: !0 }); const C = {
      container: P,
      textContentSource: k,
      viewport: y,
    }; const D = new Wh(C); const
      N = D;
    return D.render().then(() => {
      const I = document.createElement('div');
      I.className = 'endOfContent', P.append(I);
      const B = P.querySelectorAll('[role="presentation"]');
      if (t) {
        let j = 0;
        b.items.forEach((z, w) => {
          if (!WS(z)) return;
          const K = B[j];
          if (!K) return;
          const F = t({
            pageIndex: o,
            pageNumber: l,
            itemIndex: w,
            ...z,
          });
          JS(K, F), j += z.str && z.hasEOL ? 2 : 1;
        });
      }
      L();
    }).catch(R), () => oo(N);
  }, [
    t,
    R,
    L,
    a,
    o,
    l,
    b,
    y,
  ]), // biome-ignore lint/a11y/noStaticElementInteractions: False positive caused by non interactive wrapper listening for bubbling events
  Y('div', {
    className: mf('react-pdf__Page__textContent', 'textLayer'), onMouseUp: f, onMouseDown: p, ref: S,
  });
}
const Dm = 1;
function ZS(h) {
  const e = { ...Lg(), ...h }; const {
    _className: i = 'react-pdf__Page', _enableRegisterUnregisterPage: s = !0, canvasBackground: r, canvasRef: a, children: o, className: l, customRenderer: c, customTextRenderer: d, devicePixelRatio: u, error: g = 'Failed to load the page.', filterAnnotations: b, height: E, inputRef: S, loading: M = 'Loading page…', noData: T = 'No page specified.', onGetAnnotationsError: L, onGetAnnotationsSuccess: R, onGetStructTreeError: p, onGetStructTreeSuccess: f, onGetTextError: y, onGetTextSuccess: _, onLoadError: P, onLoadSuccess: k, onRenderAnnotationLayerError: C, onRenderAnnotationLayerSuccess: D, onRenderError: N, onRenderSuccess: I, onRenderTextLayerError: B, onRenderTextLayerSuccess: j, pageColors: z, pageIndex: w, pageNumber: K, pdf: F, registerPage: x, renderAnnotationLayer: O = !0, renderForms: H = !1, renderMode: $ = 'canvas', renderTextLayer: U = !0, rotate: q, scale: G = Dm, unregisterPage: W, width: ht, ...ct
  } = e; const [dt, ut] = ah(); const { value: rt, error: st } = dt; const
    nt = Pi(null);
  Bt(F, 'Attempted to load a page, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.');
  const at = zr(K) ? K - 1 : w ?? null; const St = K ?? (zr(w) ? w + 1 : null); const ot = q ?? (rt ? rt.rotate : null); const
    Ct = hs(() => {
      if (!rt) return null;
      let Nn = 1;
      const co = G ?? Dm;
      if (ht || E) {
        const Bn = rt.getViewport({ scale: 1, rotation: ot });
        ht ? Nn = ht / Bn.width : E && (Nn = E / Bn.height);
      }
      return co * Nn;
    }, [E, rt, ot, G, ht]);
  jt(() => () => {
    zr(at) && s && W && W(at);
  }, [s, F, at, W]);
  function ae() {
    if (k) {
      if (!rt || !Ct) return;
      k(gg(rt, Ct));
    }
    if (s && x) {
      if (!zr(at) || !nt.current) return;
      x(at, nt.current);
    }
  }
  function ce() {
    st && (Ue(!1, st.toString()), P && P(st));
  }
  jt(() => {
    ut({ type: 'RESET' });
  }, [ut, F, at]), jt(() => {
    if (!F || !St) return;
    const co = Id(F.getPage(St)); const
      Bn = co;
    return co.promise.then((wf) => {
      ut({ type: 'RESOLVE', value: wf });
    }).catch((wf) => {
      ut({ type: 'REJECT', error: wf });
    }), () => oo(Bn);
  }, [ut, F, St]), jt(() => {
    if (rt !== void 0) {
      if (rt === !1) {
        ce();
        return;
      }
      ae();
    }
  }, [rt, Ct]);
  const xe = hs(() => (
    // Technically there cannot be page without pageIndex, pageNumber, rotate and scale, but TypeScript doesn't know that
    zr(at) && St && zr(ot) && zr(Ct) ? {
      _className: i,
      canvasBackground: r,
      customTextRenderer: d,
      devicePixelRatio: u,
      filterAnnotations: b,
      onGetAnnotationsError: L,
      onGetAnnotationsSuccess: R,
      onGetStructTreeError: p,
      onGetStructTreeSuccess: f,
      onGetTextError: y,
      onGetTextSuccess: _,
      onRenderAnnotationLayerError: C,
      onRenderAnnotationLayerSuccess: D,
      onRenderError: N,
      onRenderSuccess: I,
      onRenderTextLayerError: B,
      onRenderTextLayerSuccess: j,
      page: rt,
      pageColors: z,
      pageIndex: at,
      pageNumber: St,
      renderForms: H,
      renderTextLayer: U,
      rotate: ot,
      scale: Ct,
    } : null
  ), [
    i,
    r,
    d,
    u,
    b,
    L,
    R,
    p,
    f,
    y,
    _,
    C,
    D,
    N,
    I,
    B,
    j,
    rt,
    z,
    at,
    St,
    H,
    U,
    ot,
    Ct,
  ]); const $s = hs(
    () => cv(ct, () => rt && (Ct ? gg(rt, Ct) : void 0)),
    // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
    [ct, rt, Ct],
  ); const
    Ws = `${at}@${Ct}/${ot}`;
  function Nd() {
    switch ($) {
      case 'custom':
        return Bt(c, 'renderMode was set to "custom", but no customRenderer was passed.'), Y(c, {}, `${Ws}_custom`);
      case 'none':
        return null;
      case 'canvas':
      default:
        return Y($S, { canvasRef: a }, `${Ws}_canvas`);
    }
  }
  function Br() {
    return U ? Y(QS, {}, `${Ws}_text`) : null;
  }
  function vf() {
    return O ? Y(NS, {}, `${Ws}_annotations`) : null;
  }
  function us() {
    function Nn(Bn) {
      return !!(Bn != null && Bn.page);
    }
    if (!Nn(xe)) throw new Error('page is undefined');
    const co = typeof o === 'function' ? o(xe) : o;
    return To(mv.Provider, { value: xe, children: [Nd(), Br(), vf(), co] });
  }
  function Hr() {
    return St ? F === null || rt === void 0 || rt === null ? Y(Ro, { type: 'loading', children: typeof M === 'function' ? M() : M }) : F === !1 || rt === !1 ? Y(Ro, { type: 'error', children: typeof g === 'function' ? g() : g }) : us() : Y(Ro, { type: 'no-data', children: typeof T === 'function' ? T() : T });
  }
  return Y('div', {
    className: mf(i, l),
    'data-page-number': St,
    // Assertion is needed for React 18 compatibility
    ref: gv(S, nt),
    style: {
      '--scale-round-x': '1px',
      '--scale-round-y': '1px',
      '--scale-factor': '1',
      '--user-unit': `${Ct}`,
      '--total-scale-factor': 'calc(var(--scale-factor) * var(--user-unit))',
      backgroundColor: r || 'white',
      position: 'relative',
      minWidth: 'min-content',
      minHeight: 'min-content',
    },
    ...$s,
    children: Hr(),
  });
}
LS();
os.workerSrc = 'pdf.worker.mjs';
const tA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Document: FS,
  Page: ZS,
  PasswordResponses: fg,
  pdfjs: lv,
  useDocumentContext: Lg,
  usePageContext: Fd,
}, Symbol.toStringTag, { value: 'Module' }));
const Nh = { exports: {} }; const eA = Nh.exports; let
  Om;
function iA() {
  return Om || (Om = 1, (function (h, t) {
    (function (e, i) {
      i(t);
    }(eA, ((e) => {
      class i {
        constructor(p, f) {
          this.state = {
            angle: 0, area: [], position: { x: 0, y: 0 }, hardAngle: 0, hardDrawingAngle: 0,
          }, this.createdDensity = f, this.nowDrawingDensity = this.createdDensity, this.render = p;
        }

        setDensity(p) {
          this.createdDensity = p, this.nowDrawingDensity = p;
        }

        setDrawingDensity(p) {
          this.nowDrawingDensity = p;
        }

        setPosition(p) {
          this.state.position = p;
        }

        setAngle(p) {
          this.state.angle = p;
        }

        setArea(p) {
          this.state.area = p;
        }

        setHardDrawingAngle(p) {
          this.state.hardDrawingAngle = p;
        }

        setHardAngle(p) {
          this.state.hardAngle = p, this.state.hardDrawingAngle = p;
        }

        setOrientation(p) {
          this.orientation = p;
        }

        getDrawingDensity() {
          return this.nowDrawingDensity;
        }

        getDensity() {
          return this.createdDensity;
        }

        getHardAngle() {
          return this.state.hardAngle;
        }
      }
      class s extends i {
        constructor(p, f, y) {
          super(p, y), this.image = null, this.isLoad = !1, this.loadingAngle = 0, this.image = new Image(), this.image.src = f;
        }

        draw(p) {
          const f = this.render.getContext(); const y = this.render.convertToGlobal(this.state.position); const _ = this.render.getRect().pageWidth; const
            P = this.render.getRect().height;
          f.save(), f.translate(y.x, y.y), f.beginPath();
          for (let k of this.state.area) k !== null && (k = this.render.convertToGlobal(k), f.lineTo(k.x - y.x, k.y - y.y));
          f.rotate(this.state.angle), f.clip(), this.isLoad ? f.drawImage(this.image, 0, 0, _, P) : this.drawLoader(f, { x: 0, y: 0 }, _, P), f.restore();
        }

        simpleDraw(p) {
          const f = this.render.getRect(); const y = this.render.getContext(); const _ = f.pageWidth; const P = f.height; const k = p === 1 ? f.left + f.pageWidth : f.left; const
            C = f.top;
          this.isLoad ? y.drawImage(this.image, k, C, _, P) : this.drawLoader(y, { x: k, y: C }, _, P);
        }

        drawLoader(p, f, y, _) {
          p.beginPath(), p.strokeStyle = 'rgb(200, 200, 200)', p.fillStyle = 'rgb(255, 255, 255)', p.lineWidth = 1, p.rect(f.x + 1, f.y + 1, y - 1, _ - 1), p.stroke(), p.fill();
          const P = { x: f.x + y / 2, y: f.y + _ / 2 };
          p.beginPath(), p.lineWidth = 10, p.arc(P.x, P.y, 20, this.loadingAngle, 3 * Math.PI / 2 + this.loadingAngle), p.stroke(), p.closePath(), this.loadingAngle += 0.07, this.loadingAngle >= 2 * Math.PI && (this.loadingAngle = 0);
        }

        load() {
          this.isLoad || (this.image.onload = () => {
            this.isLoad = !0;
          });
        }

        newTemporaryCopy() {
          return this;
        }

        getTemporaryCopy() {
          return this;
        }

        hideTemporaryCopy() {
        }
      }
      class r {
        constructor(p, f) {
          this.pages = [], this.currentPageIndex = 0, this.currentSpreadIndex = 0, this.landscapeSpread = [], this.portraitSpread = [], this.render = f, this.app = p, this.currentPageIndex = 0, this.isShowCover = this.app.getSettings().showCover;
        }

        destroy() {
          this.pages = [];
        }

        createSpread() {
          this.landscapeSpread = [], this.portraitSpread = [];
          for (let f = 0; f < this.pages.length; f++) this.portraitSpread.push([f]);
          let p = 0;
          this.isShowCover && (this.pages[0].setDensity('hard'), this.landscapeSpread.push([p]), p++);
          for (let f = p; f < this.pages.length; f += 2) f < this.pages.length - 1 ? this.landscapeSpread.push([f, f + 1]) : (this.landscapeSpread.push([f]), this.pages[f].setDensity('hard'));
        }

        getSpread() {
          return this.render.getOrientation() === 'landscape' ? this.landscapeSpread : this.portraitSpread;
        }

        getSpreadIndexByPage(p) {
          const f = this.getSpread();
          for (let y = 0; y < f.length; y++) if (p === f[y][0] || p === f[y][1]) return y;
          return null;
        }

        getPageCount() {
          return this.pages.length;
        }

        getPages() {
          return this.pages;
        }

        getPage(p) {
          if (p >= 0 && p < this.pages.length) return this.pages[p];
          throw new Error('Invalid page number');
        }

        nextBy(p) {
          const f = this.pages.indexOf(p);
          return f < this.pages.length - 1 ? this.pages[f + 1] : null;
        }

        prevBy(p) {
          const f = this.pages.indexOf(p);
          return f > 0 ? this.pages[f - 1] : null;
        }

        getFlippingPage(p) {
          const f = this.currentSpreadIndex;
          if (this.render.getOrientation() === 'portrait') return p === 0 ? this.pages[f].newTemporaryCopy() : this.pages[f - 1];
          {
            const y = p === 0 ? this.getSpread()[f + 1] : this.getSpread()[f - 1];
            return y.length === 1 || p === 0 ? this.pages[y[0]] : this.pages[y[1]];
          }
        }

        getBottomPage(p) {
          const f = this.currentSpreadIndex;
          if (this.render.getOrientation() === 'portrait') return p === 0 ? this.pages[f + 1] : this.pages[f - 1];
          {
            const y = p === 0 ? this.getSpread()[f + 1] : this.getSpread()[f - 1];
            return y.length === 1 ? this.pages[y[0]] : p === 0 ? this.pages[y[1]] : this.pages[y[0]];
          }
        }

        showNext() {
          this.currentSpreadIndex < this.getSpread().length && (this.currentSpreadIndex++, this.showSpread());
        }

        showPrev() {
          this.currentSpreadIndex > 0 && (this.currentSpreadIndex--, this.showSpread());
        }

        getCurrentPageIndex() {
          return this.currentPageIndex;
        }

        show(p = null) {
          if (p === null && (p = this.currentPageIndex), p < 0 || p >= this.pages.length) return;
          const f = this.getSpreadIndexByPage(p);
          f !== null && (this.currentSpreadIndex = f, this.showSpread());
        }

        getCurrentSpreadIndex() {
          return this.currentSpreadIndex;
        }

        setCurrentSpreadIndex(p) {
          if (!(p >= 0 && p < this.getSpread().length)) throw new Error('Invalid page');
          this.currentSpreadIndex = p;
        }

        showSpread() {
          const p = this.getSpread()[this.currentSpreadIndex];
          p.length === 2 ? (this.render.setLeftPage(this.pages[p[0]]), this.render.setRightPage(this.pages[p[1]])) : this.render.getOrientation() === 'landscape' && p[0] === this.pages.length - 1 ? (this.render.setLeftPage(this.pages[p[0]]), this.render.setRightPage(null)) : (this.render.setLeftPage(null), this.render.setRightPage(this.pages[p[0]])), this.currentPageIndex = p[0], this.app.updatePageIndex(this.currentPageIndex);
        }
      }
      class a extends r {
        constructor(p, f, y) {
          super(p, f), this.imagesHref = y;
        }

        load() {
          for (const p of this.imagesHref) {
            const f = new s(this.render, p, 'soft');
            f.load(), this.pages.push(f);
          }
          this.createSpread();
        }
      }
      class o {
        static GetDistanceBetweenTwoPoint(p, f) {
          return p === null || f === null ? 1 / 0 : Math.sqrt((f.x - p.x) ** 2 + (f.y - p.y) ** 2);
        }

        static GetSegmentLength(p) {
          return o.GetDistanceBetweenTwoPoint(p[0], p[1]);
        }

        static GetAngleBetweenTwoLine(p, f) {
          const y = p[0].y - p[1].y; const _ = f[0].y - f[1].y; const P = p[1].x - p[0].x; const
            k = f[1].x - f[0].x;
          return Math.acos((y * _ + P * k) / (Math.sqrt(y * y + P * P) * Math.sqrt(_ * _ + k * k)));
        }

        static PointInRect(p, f) {
          return f === null ? null : f.x >= p.left && f.x <= p.width + p.left && f.y >= p.top && f.y <= p.top + p.height ? f : null;
        }

        static GetRotatedPoint(p, f, y) {
          return { x: p.x * Math.cos(y) + p.y * Math.sin(y) + f.x, y: p.y * Math.cos(y) - p.x * Math.sin(y) + f.y };
        }

        static LimitPointToCircle(p, f, y) {
          if (o.GetDistanceBetweenTwoPoint(p, y) <= f) return y;
          const _ = p.x; const P = p.y; const k = y.x; const
            C = y.y;
          let D = Math.sqrt(f ** 2 * (_ - k) ** 2 / ((_ - k) ** 2 + (P - C) ** 2)) + _;
          y.x < 0 && (D *= -1);
          let N = (D - _) * (P - C) / (_ - k) + P;
          return _ - k + P === 0 && (N = f), { x: D, y: N };
        }

        static GetIntersectBetweenTwoSegment(p, f, y) {
          return o.PointInRect(p, o.GetIntersectBeetwenTwoLine(f, y));
        }

        static GetIntersectBeetwenTwoLine(p, f) {
          const y = p[0].y - p[1].y; const _ = f[0].y - f[1].y; const P = p[1].x - p[0].x; const k = f[1].x - f[0].x; const C = p[0].x * p[1].y - p[1].x * p[0].y; const D = f[0].x * f[1].y - f[1].x * f[0].y; const N = y * D - _ * C; const I = P * D - k * C; const B = -(C * k - D * P) / (y * k - _ * P); const
            j = -(y * D - _ * C) / (y * k - _ * P);
          if (isFinite(B) && isFinite(j)) return { x: B, y: j };
          if (Math.abs(N - I) < 0.1) throw new Error('Segment included');
          return null;
        }

        static GetCordsFromTwoPoint(p, f) {
          const y = Math.abs(p.x - f.x); const _ = Math.abs(p.y - f.y); const P = Math.max(y, _); const
            k = [p];
          function C(D, N, I, B, j) {
            return N > D ? D + j * (I / B) : N < D ? D - j * (I / B) : D;
          }
          for (let D = 1; D <= P; D += 1) k.push({ x: C(p.x, f.x, y, P, D), y: C(p.y, f.y, _, P, D) });
          return k;
        }
      }
      class l extends i {
        constructor(p, f, y) {
          super(p, y), this.copiedElement = null, this.temporaryCopy = null, this.isLoad = !1, this.element = f, this.element.classList.add('stf__item'), this.element.classList.add(`--${y}`);
        }

        newTemporaryCopy() {
          return this.nowDrawingDensity === 'hard' ? this : (this.temporaryCopy === null && (this.copiedElement = this.element.cloneNode(!0), this.element.parentElement.appendChild(this.copiedElement), this.temporaryCopy = new l(this.render, this.copiedElement, this.nowDrawingDensity)), this.getTemporaryCopy());
        }

        getTemporaryCopy() {
          return this.temporaryCopy;
        }

        hideTemporaryCopy() {
          this.temporaryCopy !== null && (this.copiedElement.remove(), this.copiedElement = null, this.temporaryCopy = null);
        }

        draw(p) {
          const f = p || this.nowDrawingDensity; const y = this.render.convertToGlobal(this.state.position); const _ = this.render.getRect().pageWidth; const
            P = this.render.getRect().height;
          this.element.classList.remove('--simple');
          const k = `
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${_}px;
            height: ${P}px;
        `;
          f === 'hard' ? this.drawHard(k) : this.drawSoft(y, k);
        }

        drawHard(p = '') {
          const f = this.render.getRect().left + this.render.getRect().width / 2; const y = this.state.hardDrawingAngle; const
            _ = `${p}
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                clip-path: none;
                -webkit-clip-path: none;
            ${this.orientation === 0 ? `transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${y}deg);` : `transform-origin: 0 0; 
                   transform: translate3d(${f}px, 0, 0) rotateY(${y}deg);`}`;
          this.element.style.cssText = _;
        }

        drawSoft(p, f = '') {
          let y = 'polygon( ';
          for (const P of this.state.area) {
            if (P !== null) {
              let k = this.render.getDirection() === 1 ? { x: -P.x + this.state.position.x, y: P.y - this.state.position.y } : { x: P.x - this.state.position.x, y: P.y - this.state.position.y };
              k = o.GetRotatedPoint(k, { x: 0, y: 0 }, this.state.angle), y += `${k.x}px ${k.y}px, `;
            }
          }
          y = y.slice(0, -2), y += ')';
          const _ = `${f}transform-origin: 0 0; clip-path: ${y}; -webkit-clip-path: ${y};${this.render.isSafari() && this.state.angle === 0 ? `transform: translate(${p.x}px, ${p.y}px);` : `transform: translate3d(${p.x}px, ${p.y}px, 0) rotate(${this.state.angle}rad);`}`;
          this.element.style.cssText = _;
        }

        simpleDraw(p) {
          const f = this.render.getRect(); const y = f.pageWidth; const _ = f.height; const P = p === 1 ? f.left + f.pageWidth : f.left; const
            k = f.top;
          this.element.classList.add('--simple'), this.element.style.cssText = `
            position: absolute; 
            display: block; 
            height: ${_}px; 
            left: ${P}px; 
            top: ${k}px; 
            width: ${y}px; 
            z-index: ${this.render.getSettings().startZIndex + 1};`;
        }

        getElement() {
          return this.element;
        }

        load() {
          this.isLoad = !0;
        }

        setOrientation(p) {
          super.setOrientation(p), this.element.classList.remove('--left', '--right'), this.element.classList.add(p === 1 ? '--right' : '--left');
        }

        setDrawingDensity(p) {
          this.element.classList.remove('--soft', '--hard'), this.element.classList.add(`--${p}`), super.setDrawingDensity(p);
        }
      }
      class c extends r {
        constructor(p, f, y, _) {
          super(p, f), this.element = y, this.pagesElement = _;
        }

        load() {
          for (const p of this.pagesElement) {
            const f = new l(this.render, p, p.dataset.density === 'hard' ? 'hard' : 'soft');
            f.load(), this.pages.push(f);
          }
          this.createSpread();
        }
      }
      class d {
        constructor(p, f, y, _) {
          this.direction = p, this.corner = f, this.topIntersectPoint = null, this.sideIntersectPoint = null, this.bottomIntersectPoint = null, this.pageWidth = parseInt(y, 10), this.pageHeight = parseInt(_, 10);
        }

        calc(p) {
          try {
            return this.position = this.calcAngleAndPosition(p), this.calculateIntersectPoint(this.position), !0;
          } catch {
            return !1;
          }
        }

        getFlippingClipArea() {
          const p = [];
          let f = !1;
          return p.push(this.rect.topLeft), p.push(this.topIntersectPoint), this.sideIntersectPoint === null ? f = !0 : (p.push(this.sideIntersectPoint), this.bottomIntersectPoint === null && (f = !1)), p.push(this.bottomIntersectPoint), (f || this.corner === 'bottom') && p.push(this.rect.bottomLeft), p;
        }

        getBottomClipArea() {
          const p = [];
          return p.push(this.topIntersectPoint), this.corner === 'top' ? p.push({ x: this.pageWidth, y: 0 }) : (this.topIntersectPoint !== null && p.push({ x: this.pageWidth, y: 0 }), p.push({ x: this.pageWidth, y: this.pageHeight })), this.sideIntersectPoint !== null ? o.GetDistanceBetweenTwoPoint(this.sideIntersectPoint, this.topIntersectPoint) >= 10 && p.push(this.sideIntersectPoint) : this.corner === 'top' && p.push({ x: this.pageWidth, y: this.pageHeight }), p.push(this.bottomIntersectPoint), p.push(this.topIntersectPoint), p;
        }

        getAngle() {
          return this.direction === 0 ? -this.angle : this.angle;
        }

        getRect() {
          return this.rect;
        }

        getPosition() {
          return this.position;
        }

        getActiveCorner() {
          return this.direction === 0 ? this.rect.topLeft : this.rect.topRight;
        }

        getDirection() {
          return this.direction;
        }

        getFlippingProgress() {
          return Math.abs((this.position.x - this.pageWidth) / (2 * this.pageWidth) * 100);
        }

        getCorner() {
          return this.corner;
        }

        getBottomPagePosition() {
          return this.direction === 1 ? { x: this.pageWidth, y: 0 } : { x: 0, y: 0 };
        }

        getShadowStartPoint() {
          return this.corner === 'top' ? this.topIntersectPoint : this.sideIntersectPoint !== null ? this.sideIntersectPoint : this.topIntersectPoint;
        }

        getShadowAngle() {
          const p = o.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(), [{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }]);
          return this.direction === 0 ? p : Math.PI - p;
        }

        calcAngleAndPosition(p) {
          let f = p;
          if (this.updateAngleAndGeometry(f), f = this.corner === 'top' ? this.checkPositionAtCenterLine(f, { x: 0, y: 0 }, { x: 0, y: this.pageHeight }) : this.checkPositionAtCenterLine(f, { x: 0, y: this.pageHeight }, { x: 0, y: 0 }), Math.abs(f.x - this.pageWidth) < 1 && Math.abs(f.y) < 1) throw new Error('Point is too small');
          return f;
        }

        updateAngleAndGeometry(p) {
          this.angle = this.calculateAngle(p), this.rect = this.getPageRect(p);
        }

        calculateAngle(p) {
          const f = this.pageWidth - p.x + 1; const
            y = this.corner === 'bottom' ? this.pageHeight - p.y : p.y;
          let _ = 2 * Math.acos(f / Math.sqrt(y * y + f * f));
          y < 0 && (_ = -_);
          const P = Math.PI - _;
          if (!isFinite(_) || P >= 0 && P < 3e-3) throw new Error('The G point is too small');
          return this.corner === 'bottom' && (_ = -_), _;
        }

        getPageRect(p) {
          return this.corner === 'top' ? this.getRectFromBasePoint([{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }, { x: 0, y: this.pageHeight }, { x: this.pageWidth, y: this.pageHeight }], p) : this.getRectFromBasePoint([{ x: 0, y: -this.pageHeight }, { x: this.pageWidth, y: -this.pageHeight }, { x: 0, y: 0 }, { x: this.pageWidth, y: 0 }], p);
        }

        getRectFromBasePoint(p, f) {
          return {
            topLeft: this.getRotatedPoint(p[0], f), topRight: this.getRotatedPoint(p[1], f), bottomLeft: this.getRotatedPoint(p[2], f), bottomRight: this.getRotatedPoint(p[3], f),
          };
        }

        getRotatedPoint(p, f) {
          return { x: p.x * Math.cos(this.angle) + p.y * Math.sin(this.angle) + f.x, y: p.y * Math.cos(this.angle) - p.x * Math.sin(this.angle) + f.y };
        }

        calculateIntersectPoint(p) {
          const f = {
            left: -1, top: -1, width: this.pageWidth + 2, height: this.pageHeight + 2,
          };
          this.corner === 'top' ? (this.topIntersectPoint = o.GetIntersectBetweenTwoSegment(f, [p, this.rect.topRight], [{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }]), this.sideIntersectPoint = o.GetIntersectBetweenTwoSegment(f, [p, this.rect.bottomLeft], [{ x: this.pageWidth, y: 0 }, { x: this.pageWidth, y: this.pageHeight }]), this.bottomIntersectPoint = o.GetIntersectBetweenTwoSegment(f, [this.rect.bottomLeft, this.rect.bottomRight], [{ x: 0, y: this.pageHeight }, { x: this.pageWidth, y: this.pageHeight }])) : (this.topIntersectPoint = o.GetIntersectBetweenTwoSegment(f, [this.rect.topLeft, this.rect.topRight], [{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }]), this.sideIntersectPoint = o.GetIntersectBetweenTwoSegment(f, [p, this.rect.topLeft], [{ x: this.pageWidth, y: 0 }, { x: this.pageWidth, y: this.pageHeight }]), this.bottomIntersectPoint = o.GetIntersectBetweenTwoSegment(f, [this.rect.bottomLeft, this.rect.bottomRight], [{ x: 0, y: this.pageHeight }, { x: this.pageWidth, y: this.pageHeight }]));
        }

        checkPositionAtCenterLine(p, f, y) {
          let _ = p;
          const P = o.LimitPointToCircle(f, this.pageWidth, _);
          _ !== P && (_ = P, this.updateAngleAndGeometry(_));
          const k = Math.sqrt(this.pageWidth ** 2 + this.pageHeight ** 2);
          let C = this.rect.bottomRight; let
            D = this.rect.topLeft;
          if (this.corner === 'bottom' && (C = this.rect.topRight, D = this.rect.bottomLeft), C.x <= 0) {
            const N = o.LimitPointToCircle(y, k, D);
            N !== _ && (_ = N, this.updateAngleAndGeometry(_));
          }
          return _;
        }

        getSegmentToShadowLine() {
          const p = this.getShadowStartPoint();
          return [p, p !== this.sideIntersectPoint && this.sideIntersectPoint !== null ? this.sideIntersectPoint : this.bottomIntersectPoint];
        }
      }
      class u {
        constructor(p, f) {
          this.flippingPage = null, this.bottomPage = null, this.calc = null, this.state = 'read', this.render = p, this.app = f;
        }

        fold(p) {
          this.setState('user_fold'), this.calc === null && this.start(p), this.do(this.render.convertToPage(p));
        }

        flip(p) {
          if (this.app.getSettings().disableFlipByClick && !this.isPointOnCorners(p) || (this.calc !== null && this.render.finishAnimation(), !this.start(p))) return;
          const f = this.getBoundsRect();
          this.setState('flipping');
          const y = f.height / 10; const _ = this.calc.getCorner() === 'bottom' ? f.height - y : y; const
            P = this.calc.getCorner() === 'bottom' ? f.height : 0;
          this.calc.calc({ x: f.pageWidth - y, y: _ }), this.animateFlippingTo({ x: f.pageWidth - y, y: _ }, { x: -f.pageWidth, y: P }, !0);
        }

        start(p) {
          this.reset();
          const f = this.render.convertToBook(p); const y = this.getBoundsRect(); const _ = this.getDirectionByPoint(f); const
            P = f.y >= y.height / 2 ? 'bottom' : 'top';
          if (!this.checkDirection(_)) return !1;
          try {
            if (this.flippingPage = this.app.getPageCollection().getFlippingPage(_), this.bottomPage = this.app.getPageCollection().getBottomPage(_), this.render.getOrientation() === 'landscape') {
              if (_ === 1) {
                const k = this.app.getPageCollection().nextBy(this.flippingPage);
                k !== null && this.flippingPage.getDensity() !== k.getDensity() && (this.flippingPage.setDrawingDensity('hard'), k.setDrawingDensity('hard'));
              } else {
                const k = this.app.getPageCollection().prevBy(this.flippingPage);
                k !== null && this.flippingPage.getDensity() !== k.getDensity() && (this.flippingPage.setDrawingDensity('hard'), k.setDrawingDensity('hard'));
              }
            }
            return this.render.setDirection(_), this.calc = new d(_, P, y.pageWidth.toString(10), y.height.toString(10)), !0;
          } catch {
            return !1;
          }
        }

        do(p) {
          if (this.calc !== null && this.calc.calc(p)) {
            const f = this.calc.getFlippingProgress();
            this.bottomPage.setArea(this.calc.getBottomClipArea()), this.bottomPage.setPosition(this.calc.getBottomPagePosition()), this.bottomPage.setAngle(0), this.bottomPage.setHardAngle(0), this.flippingPage.setArea(this.calc.getFlippingClipArea()), this.flippingPage.setPosition(this.calc.getActiveCorner()), this.flippingPage.setAngle(this.calc.getAngle()), this.calc.getDirection() === 0 ? this.flippingPage.setHardAngle(90 * (200 - 2 * f) / 100) : this.flippingPage.setHardAngle(-90 * (200 - 2 * f) / 100), this.render.setPageRect(this.calc.getRect()), this.render.setBottomPage(this.bottomPage), this.render.setFlippingPage(this.flippingPage), this.render.setShadowData(this.calc.getShadowStartPoint(), this.calc.getShadowAngle(), f, this.calc.getDirection());
          }
        }

        flipToPage(p, f) {
          const y = this.app.getPageCollection().getCurrentSpreadIndex(); const
            _ = this.app.getPageCollection().getSpreadIndexByPage(p);
          try {
            _ > y && (this.app.getPageCollection().setCurrentSpreadIndex(_ - 1), this.flipNext(f)), _ < y && (this.app.getPageCollection().setCurrentSpreadIndex(_ + 1), this.flipPrev(f));
          } catch {
          }
        }

        flipNext(p) {
          this.flip({ x: this.render.getRect().left + 2 * this.render.getRect().pageWidth - 10, y: p === 'top' ? 1 : this.render.getRect().height - 2 });
        }

        flipPrev(p) {
          this.flip({ x: 10, y: p === 'top' ? 1 : this.render.getRect().height - 2 });
        }

        stopMove() {
          if (this.calc === null) return;
          const p = this.calc.getPosition(); const f = this.getBoundsRect(); const
            y = this.calc.getCorner() === 'bottom' ? f.height : 0;
          p.x <= 0 ? this.animateFlippingTo(p, { x: -f.pageWidth, y }, !0) : this.animateFlippingTo(p, { x: f.pageWidth, y }, !1);
        }

        showCorner(p) {
          if (!this.checkState('read', 'fold_corner')) return;
          const f = this.getBoundsRect(); const
            y = f.pageWidth;
          if (this.isPointOnCorners(p)) {
            if (this.calc === null) {
              if (!this.start(p)) return;
              this.setState('fold_corner'), this.calc.calc({ x: y - 1, y: 1 });
              const _ = 50; const P = this.calc.getCorner() === 'bottom' ? f.height - 1 : 1; const
                k = this.calc.getCorner() === 'bottom' ? f.height - _ : _;
              this.animateFlippingTo({ x: y - 1, y: P }, { x: y - _, y: k }, !1, !1);
            } else this.do(this.render.convertToPage(p));
          } else this.setState('read'), this.render.finishAnimation(), this.stopMove();
        }

        animateFlippingTo(p, f, y, _ = !0) {
          const P = o.GetCordsFromTwoPoint(p, f); const
            k = [];
          for (const D of P) k.push(() => this.do(D));
          const C = this.getAnimationDuration(P.length);
          this.render.startAnimation(k, C, () => {
            this.calc && (y && (this.calc.getDirection() === 1 ? this.app.turnToPrevPage() : this.app.turnToNextPage()), _ && (this.render.setBottomPage(null), this.render.setFlippingPage(null), this.render.clearShadow(), this.setState('read'), this.reset()));
          });
        }

        getCalculation() {
          return this.calc;
        }

        getState() {
          return this.state;
        }

        setState(p) {
          this.state !== p && (this.app.updateState(p), this.state = p);
        }

        getDirectionByPoint(p) {
          const f = this.getBoundsRect();
          if (this.render.getOrientation() === 'portrait') {
            if (p.x - f.pageWidth <= f.width / 5) return 1;
          } else if (p.x < f.width / 2) return 1;
          return 0;
        }

        getAnimationDuration(p) {
          const f = this.app.getSettings().flippingTime;
          return p >= 1e3 ? f : p / 1e3 * f;
        }

        checkDirection(p) {
          return p === 0 ? this.app.getCurrentPageIndex() < this.app.getPageCount() - 1 : this.app.getCurrentPageIndex() >= 1;
        }

        reset() {
          this.calc = null, this.flippingPage = null, this.bottomPage = null;
        }

        getBoundsRect() {
          return this.render.getRect();
        }

        checkState(...p) {
          for (const f of p) if (this.state === f) return !0;
          return !1;
        }

        isPointOnCorners(p) {
          const f = this.getBoundsRect(); const y = f.pageWidth; const _ = Math.sqrt(y ** 2 + f.height ** 2) / 5; const
            P = this.render.convertToBook(p);
          return P.x > 0 && P.y > 0 && P.x < f.width && P.y < f.height && (P.x < _ || P.x > f.width - _) && (P.y < _ || P.y > f.height - _);
        }
      }
      class g {
        constructor(p, f) {
          this.leftPage = null, this.rightPage = null, this.flippingPage = null, this.bottomPage = null, this.direction = null, this.orientation = null, this.shadow = null, this.animation = null, this.pageRect = null, this.boundsRect = null, this.timer = 0, this.safari = !1, this.setting = f, this.app = p;
          const y = new RegExp('Version\\/[\\d\\.]+.*Safari/');
          this.safari = y.exec(window.navigator.userAgent) !== null;
        }

        render(p) {
          if (this.animation !== null) {
            const f = Math.round((p - this.animation.startedAt) / this.animation.durationFrame);
            f < this.animation.frames.length ? this.animation.frames[f]() : (this.animation.onAnimateEnd(), this.animation = null);
          }
          this.timer = p, this.drawFrame();
        }

        start() {
          this.update();
          const p = (f) => {
            this.render(f), requestAnimationFrame(p);
          };
          requestAnimationFrame(p);
        }

        startAnimation(p, f, y) {
          this.finishAnimation(), this.animation = {
            frames: p, duration: f, durationFrame: f / p.length, onAnimateEnd: y, startedAt: this.timer,
          };
        }

        finishAnimation() {
          this.animation !== null && (this.animation.frames[this.animation.frames.length - 1](), this.animation.onAnimateEnd !== null && this.animation.onAnimateEnd()), this.animation = null;
        }

        update() {
          this.boundsRect = null;
          const p = this.calculateBoundsRect();
          this.orientation !== p && (this.orientation = p, this.app.updateOrientation(p));
        }

        calculateBoundsRect() {
          let p = 'landscape';
          const f = this.getBlockWidth(); const y = f / 2; const _ = this.getBlockHeight() / 2; const
            P = this.setting.width / this.setting.height;
          let k = this.setting.width; let C = this.setting.height; let
            D = y - k;
          return this.setting.size === 'stretch' ? (f < 2 * this.setting.minWidth && this.app.getSettings().usePortrait && (p = 'portrait'), k = p === 'portrait' ? this.getBlockWidth() : this.getBlockWidth() / 2, k > this.setting.maxWidth && (k = this.setting.maxWidth), C = k / P, C > this.getBlockHeight() && (C = this.getBlockHeight(), k = C * P), D = p === 'portrait' ? y - k / 2 - k : y - k) : f < 2 * k && this.app.getSettings().usePortrait && (p = 'portrait', D = y - k / 2 - k), this.boundsRect = {
            left: D, top: _ - C / 2, width: 2 * k, height: C, pageWidth: k,
          }, p;
        }

        setShadowData(p, f, y, _) {
          if (!this.app.getSettings().drawShadow) return;
          const P = 100 * this.getSettings().maxShadowOpacity;
          this.shadow = {
            pos: p, angle: f, width: 3 * this.getRect().pageWidth / 4 * y / 100, opacity: (100 - y) * P / 100 / 100, direction: _, progress: 2 * y,
          };
        }

        clearShadow() {
          this.shadow = null;
        }

        getBlockWidth() {
          return this.app.getUI().getDistElement().offsetWidth;
        }

        getBlockHeight() {
          return this.app.getUI().getDistElement().offsetHeight;
        }

        getDirection() {
          return this.direction;
        }

        getRect() {
          return this.boundsRect === null && this.calculateBoundsRect(), this.boundsRect;
        }

        getSettings() {
          return this.app.getSettings();
        }

        getOrientation() {
          return this.orientation;
        }

        setPageRect(p) {
          this.pageRect = p;
        }

        setDirection(p) {
          this.direction = p;
        }

        setRightPage(p) {
          p !== null && p.setOrientation(1), this.rightPage = p;
        }

        setLeftPage(p) {
          p !== null && p.setOrientation(0), this.leftPage = p;
        }

        setBottomPage(p) {
          p !== null && p.setOrientation(this.direction === 1 ? 0 : 1), this.bottomPage = p;
        }

        setFlippingPage(p) {
          p !== null && p.setOrientation(this.direction === 0 && this.orientation !== 'portrait' ? 0 : 1), this.flippingPage = p;
        }

        convertToBook(p) {
          const f = this.getRect();
          return { x: p.x - f.left, y: p.y - f.top };
        }

        isSafari() {
          return this.safari;
        }

        convertToPage(p, f) {
          f || (f = this.direction);
          const y = this.getRect();
          return { x: f === 0 ? p.x - y.left - y.width / 2 : y.width / 2 - p.x + y.left, y: p.y - y.top };
        }

        convertToGlobal(p, f) {
          if (f || (f = this.direction), p == null) return null;
          const y = this.getRect();
          return { x: f === 0 ? p.x + y.left + y.width / 2 : y.width / 2 - p.x + y.left, y: p.y + y.top };
        }

        convertRectToGlobal(p, f) {
          return f || (f = this.direction), {
            topLeft: this.convertToGlobal(p.topLeft, f), topRight: this.convertToGlobal(p.topRight, f), bottomLeft: this.convertToGlobal(p.bottomLeft, f), bottomRight: this.convertToGlobal(p.bottomRight, f),
          };
        }
      }
      class b extends g {
        constructor(p, f, y) {
          super(p, f), this.canvas = y, this.ctx = y.getContext('2d');
        }

        getContext() {
          return this.ctx;
        }

        reload() {
        }

        drawFrame() {
          this.clear(), this.orientation !== 'portrait' && this.leftPage != null && this.leftPage.simpleDraw(0), this.rightPage != null && this.rightPage.simpleDraw(1), this.bottomPage != null && this.bottomPage.draw(), this.drawBookShadow(), this.flippingPage != null && this.flippingPage.draw(), this.shadow != null && (this.drawOuterShadow(), this.drawInnerShadow());
          const p = this.getRect();
          this.orientation === 'portrait' && (this.ctx.beginPath(), this.ctx.rect(p.left + p.pageWidth, p.top, p.width, p.height), this.ctx.clip());
        }

        drawBookShadow() {
          const p = this.getRect();
          this.ctx.save(), this.ctx.beginPath();
          const f = p.width / 20;
          this.ctx.rect(p.left, p.top, p.width, p.height);
          const y = { x: p.left + p.width / 2 - f / 2, y: 0 };
          this.ctx.translate(y.x, y.y);
          const _ = this.ctx.createLinearGradient(0, 0, f, 0);
          _.addColorStop(0, 'rgba(0, 0, 0, 0)'), _.addColorStop(0.4, 'rgba(0, 0, 0, 0.2)'), _.addColorStop(0.49, 'rgba(0, 0, 0, 0.1)'), _.addColorStop(0.5, 'rgba(0, 0, 0, 0.5)'), _.addColorStop(0.51, 'rgba(0, 0, 0, 0.4)'), _.addColorStop(1, 'rgba(0, 0, 0, 0)'), this.ctx.clip(), this.ctx.fillStyle = _, this.ctx.fillRect(0, 0, f, 2 * p.height), this.ctx.restore();
        }

        drawOuterShadow() {
          const p = this.getRect();
          this.ctx.save(), this.ctx.beginPath(), this.ctx.rect(p.left, p.top, p.width, p.height);
          const f = this.convertToGlobal({ x: this.shadow.pos.x, y: this.shadow.pos.y });
          this.ctx.translate(f.x, f.y), this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
          const y = this.ctx.createLinearGradient(0, 0, this.shadow.width, 0);
          this.shadow.direction === 0 ? (this.ctx.translate(0, -100), y.addColorStop(0, `rgba(0, 0, 0, ${this.shadow.opacity})`), y.addColorStop(1, 'rgba(0, 0, 0, 0)')) : (this.ctx.translate(-this.shadow.width, -100), y.addColorStop(0, 'rgba(0, 0, 0, 0)'), y.addColorStop(1, `rgba(0, 0, 0, ${this.shadow.opacity})`)), this.ctx.clip(), this.ctx.fillStyle = y, this.ctx.fillRect(0, 0, this.shadow.width, 2 * p.height), this.ctx.restore();
        }

        drawInnerShadow() {
          const p = this.getRect();
          this.ctx.save(), this.ctx.beginPath();
          const f = this.convertToGlobal({ x: this.shadow.pos.x, y: this.shadow.pos.y }); const
            y = this.convertRectToGlobal(this.pageRect);
          this.ctx.moveTo(y.topLeft.x, y.topLeft.y), this.ctx.lineTo(y.topRight.x, y.topRight.y), this.ctx.lineTo(y.bottomRight.x, y.bottomRight.y), this.ctx.lineTo(y.bottomLeft.x, y.bottomLeft.y), this.ctx.translate(f.x, f.y), this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
          const _ = 3 * this.shadow.width / 4; const
            P = this.ctx.createLinearGradient(0, 0, _, 0);
          this.shadow.direction === 0 ? (this.ctx.translate(-_, -100), P.addColorStop(1, `rgba(0, 0, 0, ${this.shadow.opacity})`), P.addColorStop(0.9, 'rgba(0, 0, 0, 0.05)'), P.addColorStop(0.7, `rgba(0, 0, 0, ${this.shadow.opacity})`), P.addColorStop(0, 'rgba(0, 0, 0, 0)')) : (this.ctx.translate(0, -100), P.addColorStop(0, `rgba(0, 0, 0, ${this.shadow.opacity})`), P.addColorStop(0.1, 'rgba(0, 0, 0, 0.05)'), P.addColorStop(0.3, `rgba(0, 0, 0, ${this.shadow.opacity})`), P.addColorStop(1, 'rgba(0, 0, 0, 0)')), this.ctx.clip(), this.ctx.fillStyle = P, this.ctx.fillRect(0, 0, _, 2 * p.height), this.ctx.restore();
        }

        clear() {
          this.ctx.fillStyle = 'white', this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
      }
      class E {
        constructor(p, f, y) {
          this.touchPoint = null, this.swipeTimeout = 250, this.onResize = () => {
            this.update();
          }, this.onMouseDown = (P) => {
            if (this.checkTarget(P.target)) {
              const k = this.getMousePos(P.clientX, P.clientY);
              this.app.startUserTouch(k), P.preventDefault();
            }
          }, this.onTouchStart = (P) => {
            if (this.checkTarget(P.target) && P.changedTouches.length > 0) {
              const k = P.changedTouches[0]; const
                C = this.getMousePos(k.clientX, k.clientY);
              this.touchPoint = { point: C, time: Date.now() }, setTimeout(() => {
                this.touchPoint !== null && this.app.startUserTouch(C);
              }, this.swipeTimeout), this.app.getSettings().mobileScrollSupport || P.preventDefault();
            }
          }, this.onMouseUp = (P) => {
            const k = this.getMousePos(P.clientX, P.clientY);
            this.app.userStop(k);
          }, this.onMouseMove = (P) => {
            const k = this.getMousePos(P.clientX, P.clientY);
            this.app.userMove(k, !1);
          }, this.onTouchMove = (P) => {
            if (P.changedTouches.length > 0) {
              const k = P.changedTouches[0]; const
                C = this.getMousePos(k.clientX, k.clientY);
              this.app.getSettings().mobileScrollSupport ? (this.touchPoint !== null && (Math.abs(this.touchPoint.point.x - C.x) > 10 || this.app.getState() !== 'read') && P.cancelable && this.app.userMove(C, !0), this.app.getState() !== 'read' && P.preventDefault()) : this.app.userMove(C, !0);
            }
          }, this.onTouchEnd = (P) => {
            if (P.changedTouches.length > 0) {
              const k = P.changedTouches[0]; const
                C = this.getMousePos(k.clientX, k.clientY);
              let D = !1;
              if (this.touchPoint !== null) {
                const N = C.x - this.touchPoint.point.x; const
                  I = Math.abs(C.y - this.touchPoint.point.y);
                Math.abs(N) > this.swipeDistance && I < 2 * this.swipeDistance && Date.now() - this.touchPoint.time < this.swipeTimeout && (N > 0 ? this.app.flipPrev(this.touchPoint.point.y < this.app.getRender().getRect().height / 2 ? 'top' : 'bottom') : this.app.flipNext(this.touchPoint.point.y < this.app.getRender().getRect().height / 2 ? 'top' : 'bottom'), D = !0), this.touchPoint = null;
              }
              this.app.userStop(C, D);
            }
          }, this.parentElement = p, p.classList.add('stf__parent'), p.insertAdjacentHTML('afterbegin', '<div class="stf__wrapper"></div>'), this.wrapper = p.querySelector('.stf__wrapper'), this.app = f;
          const _ = this.app.getSettings().usePortrait ? 1 : 2;
          p.style.minWidth = `${y.minWidth * _}px`, p.style.minHeight = `${y.minHeight}px`, y.size === 'fixed' && (p.style.minWidth = `${y.width * _}px`, p.style.minHeight = `${y.height}px`), y.autoSize && (p.style.width = '100%', p.style.maxWidth = `${2 * y.maxWidth}px`), p.style.display = 'block', window.addEventListener('resize', this.onResize, !1), this.swipeDistance = y.swipeDistance;
        }

        destroy() {
          this.app.getSettings().useMouseEvents && this.removeHandlers(), this.distElement.remove(), this.wrapper.remove();
        }

        getDistElement() {
          return this.distElement;
        }

        getWrapper() {
          return this.wrapper;
        }

        setOrientationStyle(p) {
          this.wrapper.classList.remove('--portrait', '--landscape'), p === 'portrait' ? (this.app.getSettings().autoSize && (this.wrapper.style.paddingBottom = `${this.app.getSettings().height / this.app.getSettings().width * 100}%`), this.wrapper.classList.add('--portrait')) : (this.app.getSettings().autoSize && (this.wrapper.style.paddingBottom = `${this.app.getSettings().height / (2 * this.app.getSettings().width) * 100}%`), this.wrapper.classList.add('--landscape')), this.update();
        }

        removeHandlers() {
          window.removeEventListener('resize', this.onResize), this.distElement.removeEventListener('mousedown', this.onMouseDown), this.distElement.removeEventListener('touchstart', this.onTouchStart), window.removeEventListener('mousemove', this.onMouseMove), window.removeEventListener('touchmove', this.onTouchMove), window.removeEventListener('mouseup', this.onMouseUp), window.removeEventListener('touchend', this.onTouchEnd);
        }

        setHandlers() {
          window.addEventListener('resize', this.onResize, !1), this.app.getSettings().useMouseEvents && (this.distElement.addEventListener('mousedown', this.onMouseDown), this.distElement.addEventListener('touchstart', this.onTouchStart), window.addEventListener('mousemove', this.onMouseMove), window.addEventListener('touchmove', this.onTouchMove, { passive: !this.app.getSettings().mobileScrollSupport }), window.addEventListener('mouseup', this.onMouseUp), window.addEventListener('touchend', this.onTouchEnd));
        }

        getMousePos(p, f) {
          const y = this.distElement.getBoundingClientRect();
          return { x: p - y.left, y: f - y.top };
        }

        checkTarget(p) {
          return !this.app.getSettings().clickEventForward || !['a', 'button'].includes(p.tagName.toLowerCase());
        }
      }
      class S extends E {
        constructor(p, f, y, _) {
          super(p, f, y), this.wrapper.insertAdjacentHTML('afterbegin', '<div class="stf__block"></div>'), this.distElement = p.querySelector('.stf__block'), this.items = _;
          for (const P of _) this.distElement.appendChild(P);
          this.setHandlers();
        }

        clear() {
          for (const p of this.items) this.parentElement.appendChild(p);
        }

        updateItems(p) {
          this.removeHandlers(), this.distElement.innerHTML = '';
          for (const f of p) this.distElement.appendChild(f);
          this.items = p, this.setHandlers();
        }

        update() {
          this.app.getRender().update();
        }
      }
      class M extends E {
        constructor(p, f, y) {
          super(p, f, y), this.wrapper.innerHTML = '<canvas class="stf__canvas"></canvas>', this.canvas = p.querySelectorAll('canvas')[0], this.distElement = this.canvas, this.resizeCanvas(), this.setHandlers();
        }

        resizeCanvas() {
          const p = getComputedStyle(this.canvas); const f = parseInt(p.getPropertyValue('width'), 10); const
            y = parseInt(p.getPropertyValue('height'), 10);
          this.canvas.width = f, this.canvas.height = y;
        }

        getCanvas() {
          return this.canvas;
        }

        update() {
          this.resizeCanvas(), this.app.getRender().update();
        }
      }
      class T extends g {
        constructor(p, f, y) {
          super(p, f), this.outerShadow = null, this.innerShadow = null, this.hardShadow = null, this.hardInnerShadow = null, this.element = y, this.createShadows();
        }

        createShadows() {
          this.element.insertAdjacentHTML('beforeend', `<div class="stf__outerShadow"></div>
             <div class="stf__innerShadow"></div>
             <div class="stf__hardShadow"></div>
             <div class="stf__hardInnerShadow"></div>`), this.outerShadow = this.element.querySelector('.stf__outerShadow'), this.innerShadow = this.element.querySelector('.stf__innerShadow'), this.hardShadow = this.element.querySelector('.stf__hardShadow'), this.hardInnerShadow = this.element.querySelector('.stf__hardInnerShadow');
        }

        clearShadow() {
          super.clearShadow(), this.outerShadow.style.cssText = 'display: none', this.innerShadow.style.cssText = 'display: none', this.hardShadow.style.cssText = 'display: none', this.hardInnerShadow.style.cssText = 'display: none';
        }

        reload() {
          this.element.querySelector('.stf__outerShadow') || this.createShadows();
        }

        drawHardInnerShadow() {
          const p = this.getRect(); const
            f = this.shadow.progress > 100 ? 200 - this.shadow.progress : this.shadow.progress;
          let y = (100 - f) * (2.5 * p.pageWidth) / 100 + 20;
          y > p.pageWidth && (y = p.pageWidth);
          let _ = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 5).toString(10)};
            width: ${y}px;
            height: ${p.height}px;
            background: linear-gradient(to right,
                rgba(0, 0, 0, ${this.shadow.opacity * f / 100}) 5%,
                rgba(0, 0, 0, 0) 100%);
            left: ${p.left + p.width / 2}px;
            transform-origin: 0 0;
        `;
          _ += this.getDirection() === 0 && this.shadow.progress > 100 || this.getDirection() === 1 && this.shadow.progress <= 100 ? 'transform: translate3d(0, 0, 0);' : 'transform: translate3d(0, 0, 0) rotateY(180deg);', this.hardInnerShadow.style.cssText = _;
        }

        drawHardOuterShadow() {
          const p = this.getRect();
          let f = (100 - (this.shadow.progress > 100 ? 200 - this.shadow.progress : this.shadow.progress)) * (2.5 * p.pageWidth) / 100 + 20;
          f > p.pageWidth && (f = p.pageWidth);
          let y = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 4).toString(10)};
            width: ${f}px;
            height: ${p.height}px;
            background: linear-gradient(to left, rgba(0, 0, 0, ${this.shadow.opacity}) 5%, rgba(0, 0, 0, 0) 100%);
            left: ${p.left + p.width / 2}px;
            transform-origin: 0 0;
        `;
          y += this.getDirection() === 0 && this.shadow.progress > 100 || this.getDirection() === 1 && this.shadow.progress <= 100 ? 'transform: translate3d(0, 0, 0) rotateY(180deg);' : 'transform: translate3d(0, 0, 0);', this.hardShadow.style.cssText = y;
        }

        drawInnerShadow() {
          const p = this.getRect(); const f = 3 * this.shadow.width / 4; const y = this.getDirection() === 0 ? f : 0; const _ = this.getDirection() === 0 ? 'to left' : 'to right'; const P = this.convertToGlobal(this.shadow.pos); const k = this.shadow.angle + 3 * Math.PI / 2; const
            C = [this.pageRect.topLeft, this.pageRect.topRight, this.pageRect.bottomRight, this.pageRect.bottomLeft];
          let D = 'polygon( ';
          for (const I of C) {
            let B = this.getDirection() === 1 ? { x: -I.x + this.shadow.pos.x, y: I.y - this.shadow.pos.y } : { x: I.x - this.shadow.pos.x, y: I.y - this.shadow.pos.y };
            B = o.GetRotatedPoint(B, { x: y, y: 100 }, k), D += `${B.x}px ${B.y}px, `;
          }
          D = D.slice(0, -2), D += ')';
          const N = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 10).toString(10)};
            width: ${f}px;
            height: ${2 * p.height}px;
            background: linear-gradient(${_},
                rgba(0, 0, 0, ${this.shadow.opacity}) 5%,
                rgba(0, 0, 0, 0.05) 15%,
                rgba(0, 0, 0, ${this.shadow.opacity}) 35%,
                rgba(0, 0, 0, 0) 100%);
            transform-origin: ${y}px 100px;
            transform: translate3d(${P.x - y}px, ${P.y - 100}px, 0) rotate(${k}rad);
            clip-path: ${D};
            -webkit-clip-path: ${D};
        `;
          this.innerShadow.style.cssText = N;
        }

        drawOuterShadow() {
          const p = this.getRect(); const f = this.convertToGlobal({ x: this.shadow.pos.x, y: this.shadow.pos.y }); const y = this.shadow.angle + 3 * Math.PI / 2; const _ = this.getDirection() === 1 ? this.shadow.width : 0; const P = this.getDirection() === 0 ? 'to right' : 'to left'; const
            k = [{ x: 0, y: 0 }, { x: p.pageWidth, y: 0 }, { x: p.pageWidth, y: p.height }, { x: 0, y: p.height }];
          let C = 'polygon( ';
          for (const N of k) {
            if (N !== null) {
              let I = this.getDirection() === 1 ? { x: -N.x + this.shadow.pos.x, y: N.y - this.shadow.pos.y } : { x: N.x - this.shadow.pos.x, y: N.y - this.shadow.pos.y };
              I = o.GetRotatedPoint(I, { x: _, y: 100 }, y), C += `${I.x}px ${I.y}px, `;
            }
          }
          C = C.slice(0, -2), C += ')';
          const D = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2 * p.height}px;
            background: linear-gradient(${P}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${_}px 100px;
            transform: translate3d(${f.x - _}px, ${f.y - 100}px, 0) rotate(${y}rad);
            clip-path: ${C};
            -webkit-clip-path: ${C};
        `;
          this.outerShadow.style.cssText = D;
        }

        drawLeftPage() {
          this.orientation !== 'portrait' && this.leftPage !== null && (this.direction === 1 && this.flippingPage !== null && this.flippingPage.getDrawingDensity() === 'hard' ? (this.leftPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.leftPage.setHardDrawingAngle(180 + this.flippingPage.getHardAngle()), this.leftPage.draw(this.flippingPage.getDrawingDensity())) : this.leftPage.simpleDraw(0));
        }

        drawRightPage() {
          this.rightPage !== null && (this.direction === 0 && this.flippingPage !== null && this.flippingPage.getDrawingDensity() === 'hard' ? (this.rightPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.rightPage.setHardDrawingAngle(180 + this.flippingPage.getHardAngle()), this.rightPage.draw(this.flippingPage.getDrawingDensity())) : this.rightPage.simpleDraw(1));
        }

        drawBottomPage() {
          if (this.bottomPage === null) return;
          const p = this.flippingPage != null ? this.flippingPage.getDrawingDensity() : null;
          this.orientation === 'portrait' && this.direction === 1 || (this.bottomPage.getElement().style.zIndex = (this.getSettings().startZIndex + 3).toString(10), this.bottomPage.draw(p));
        }

        drawFrame() {
          this.clear(), this.drawLeftPage(), this.drawRightPage(), this.drawBottomPage(), this.flippingPage != null && (this.flippingPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.flippingPage.draw()), this.shadow != null && this.flippingPage !== null && (this.flippingPage.getDrawingDensity() === 'soft' ? (this.drawOuterShadow(), this.drawInnerShadow()) : (this.drawHardOuterShadow(), this.drawHardInnerShadow()));
        }

        clear() {
          for (const p of this.app.getPageCollection().getPages()) p !== this.leftPage && p !== this.rightPage && p !== this.flippingPage && p !== this.bottomPage && (p.getElement().style.cssText = 'display: none'), p.getTemporaryCopy() !== this.flippingPage && p.hideTemporaryCopy();
        }

        update() {
          super.update(), this.rightPage !== null && this.rightPage.setOrientation(1), this.leftPage !== null && this.leftPage.setOrientation(0);
        }
      }
      class L {
        constructor() {
          this._default = {
            startPage: 0, size: 'fixed', width: 0, height: 0, minWidth: 0, maxWidth: 0, minHeight: 0, maxHeight: 0, drawShadow: !0, flippingTime: 1e3, usePortrait: !0, startZIndex: 0, autoSize: !0, maxShadowOpacity: 1, showCover: !1, mobileScrollSupport: !0, swipeDistance: 30, clickEventForward: !0, useMouseEvents: !0, showPageCorners: !0, disableFlipByClick: !1,
          };
        }

        getSettings(p) {
          const f = this._default;
          if (Object.assign(f, p), f.size !== 'stretch' && f.size !== 'fixed') throw new Error('Invalid size type. Available only "fixed" and "stretch" value');
          if (f.width <= 0 || f.height <= 0) throw new Error('Invalid width or height');
          if (f.flippingTime <= 0) throw new Error('Invalid flipping time');
          return f.size === 'stretch' ? (f.minWidth <= 0 && (f.minWidth = 100), f.maxWidth < f.minWidth && (f.maxWidth = 2e3), f.minHeight <= 0 && (f.minHeight = 100), f.maxHeight < f.minHeight && (f.maxHeight = 2e3)) : (f.minWidth = f.width, f.maxWidth = f.width, f.minHeight = f.height, f.maxHeight = f.height), f;
        }
      }
      (function (R, p) {
        p === void 0 && (p = {});
        const f = p.insertAt;
        if (typeof document < 'u') {
          const y = document.head || document.getElementsByTagName('head')[0]; const
            _ = document.createElement('style');
          _.type = 'text/css', f === 'top' && y.firstChild ? y.insertBefore(_, y.firstChild) : y.appendChild(_), _.styleSheet ? _.styleSheet.cssText = R : _.appendChild(document.createTextNode(R));
        }
      }(`.stf__parent {
  position: relative;
  display: block;
  box-sizing: border-box;
  transform: translateZ(0);

  -ms-touch-action: pan-y;
  touch-action: pan-y;
}

.sft__wrapper {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.stf__parent canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.stf__block {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  perspective: 2000px;
}

.stf__item {
  display: none;
  position: absolute;
  transform-style: preserve-3d;
}

.stf__outerShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__innerShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__hardShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__hardInnerShadow {
  position: absolute;
  left: 0;
  top: 0;
}`)), e.PageFlip = class extends class {
        constructor() {
          this.events = /* @__PURE__ */ new Map();
        }

        on(R, p) {
          return this.events.has(R) ? this.events.get(R).push(p) : this.events.set(R, [p]), this;
        }

        off(R) {
          this.events.delete(R);
        }

        trigger(R, p, f = null) {
          if (this.events.has(R)) for (const y of this.events.get(R)) y({ data: f, object: p });
        }
      } {
        constructor(R, p) {
          super(), this.isUserTouch = !1, this.isUserMove = !1, this.setting = null, this.pages = null, this.setting = new L().getSettings(p), this.block = R;
        }

        destroy() {
          this.ui.destroy(), this.block.remove();
        }

        update() {
          this.render.update(), this.pages.show();
        }

        loadFromImages(R) {
          this.ui = new M(this.block, this, this.setting);
          const p = this.ui.getCanvas();
          this.render = new b(this, this.setting, p), this.flipController = new u(this.render, this), this.pages = new a(this, this.render, R), this.pages.load(), this.render.start(), this.pages.show(this.setting.startPage), setTimeout(() => {
            this.ui.update(), this.trigger('init', this, { page: this.setting.startPage, mode: this.render.getOrientation() });
          }, 1);
        }

        loadFromHTML(R) {
          this.ui = new S(this.block, this, this.setting, R), this.render = new T(this, this.setting, this.ui.getDistElement()), this.flipController = new u(this.render, this), this.pages = new c(this, this.render, this.ui.getDistElement(), R), this.pages.load(), this.render.start(), this.pages.show(this.setting.startPage), setTimeout(() => {
            this.ui.update(), this.trigger('init', this, { page: this.setting.startPage, mode: this.render.getOrientation() });
          }, 1);
        }

        updateFromImages(R) {
          const p = this.pages.getCurrentPageIndex();
          this.pages.destroy(), this.pages = new a(this, this.render, R), this.pages.load(), this.pages.show(p), this.trigger('update', this, { page: p, mode: this.render.getOrientation() });
        }

        updateFromHtml(R) {
          const p = this.pages.getCurrentPageIndex();
          this.pages.destroy(), this.pages = new c(this, this.render, this.ui.getDistElement(), R), this.pages.load(), this.ui.updateItems(R), this.render.reload(), this.pages.show(p), this.trigger('update', this, { page: p, mode: this.render.getOrientation() });
        }

        clear() {
          this.pages.destroy(), this.ui.clear();
        }

        turnToPrevPage() {
          this.pages.showPrev();
        }

        turnToNextPage() {
          this.pages.showNext();
        }

        turnToPage(R) {
          this.pages.show(R);
        }

        flipNext(R = 'top') {
          this.flipController.flipNext(R);
        }

        flipPrev(R = 'top') {
          this.flipController.flipPrev(R);
        }

        flip(R, p = 'top') {
          this.flipController.flipToPage(R, p);
        }

        updateState(R) {
          this.trigger('changeState', this, R);
        }

        updatePageIndex(R) {
          this.trigger('flip', this, R);
        }

        updateOrientation(R) {
          this.ui.setOrientationStyle(R), this.update(), this.trigger('changeOrientation', this, R);
        }

        getPageCount() {
          return this.pages.getPageCount();
        }

        getCurrentPageIndex() {
          return this.pages.getCurrentPageIndex();
        }

        getPage(R) {
          return this.pages.getPage(R);
        }

        getRender() {
          return this.render;
        }

        getFlipController() {
          return this.flipController;
        }

        getOrientation() {
          return this.render.getOrientation();
        }

        getBoundsRect() {
          return this.render.getRect();
        }

        getSettings() {
          return this.setting;
        }

        getUI() {
          return this.ui;
        }

        getState() {
          return this.flipController.getState();
        }

        getPageCollection() {
          return this.pages;
        }

        startUserTouch(R) {
          this.mousePosition = R, this.isUserTouch = !0, this.isUserMove = !1;
        }

        userMove(R, p) {
          this.isUserTouch || p || !this.setting.showPageCorners ? this.isUserTouch && o.GetDistanceBetweenTwoPoint(this.mousePosition, R) > 5 && (this.isUserMove = !0, this.flipController.fold(R)) : this.flipController.showCorner(R);
        }

        userStop(R, p = !1) {
          this.isUserTouch && (this.isUserTouch = !1, p || (this.isUserMove ? this.flipController.stopMove() : this.flipController.flip(R)));
        }
      }, Object.defineProperty(e, '__esModule', { value: !0 });
    })));
  }(Nh, Nh.exports))), Nh.exports;
}
const sA = iA();
const nA = Gi.forwardRef((h, t) => {
  const e = Pi(null); const i = Pi([]); const s = Pi(); const
    [r, a] = fo([]);
  Hm(t, () => ({
    pageFlip: () => s.current,
  }));
  const o = zs(() => {
    s.current && s.current.clear();
  }, []); const
    l = zs(() => {
      const c = s.current;
      c && (c.off('flip'), c.off('changeOrientation'), c.off('changeState'), c.off('init'), c.off('update'));
    }, []);
  return jt(() => {
    if (i.current = [], h.children) {
      const c = Gi.Children.map(h.children, (d) => Gi.cloneElement(d, {
        ref: (u) => {
          u && i.current.push(u);
        },
      }));
      (!h.renderOnlyPageLengthChange || r.length !== c.length) && (c.length < r.length && o(), a(c));
    }
  }, [h.children]), jt(() => {
    const c = () => {
      const d = s.current;
      d && (h.onFlip && d.on('flip', (u) => h.onFlip(u)), h.onChangeOrientation && d.on('changeOrientation', (u) => h.onChangeOrientation(u)), h.onChangeState && d.on('changeState', (u) => h.onChangeState(u)), h.onInit && d.on('init', (u) => h.onInit(u)), h.onUpdate && d.on('update', (u) => h.onUpdate(u)));
    };
    r.length > 0 && i.current.length > 0 && (l(), e.current && !s.current && (s.current = new sA.PageFlip(e.current, h)), s.current.getFlipController() ? s.current.updateFromHtml(i.current) : s.current.loadFromHTML(i.current), c());
  }, [r]), Gi.createElement('div', { ref: e, className: h.className, style: h.style }, r);
}); const rA = Gi.memo(nA); const
  aA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: rA,
  }, Symbol.toStringTag, { value: 'Module' }));
export {
  dA as default,
};
