import { jsx as X, jsxs as Yn, Fragment as Hg } from 'react/jsx-runtime';
import Gi, {
  lazy as Tv, Suspense as Pv, useState as Vr, useRef as oi, useEffect as It, useCallback as $n, forwardRef as Hm, createContext as jm, useReducer as kv, useImperativeHandle as zm, useMemo as cn, useContext as $m, useLayoutEffect as Rv,
} from 'react';
import Lv from 'lottie-react';

const Ev = Object.defineProperty;
const Bg = (h) => {
  throw TypeError(h);
};
const Cv = (h, t, e) => (t in h ? Ev(h, t, {
  enumerable: !0, configurable: !0, writable: !0, value: e,
}) : h[t] = e);
const V = (h, t, e) => Cv(h, typeof t !== 'symbol' ? `${t}` : t, e); const
  Sf = (h, t, e) => t.has(h) || Bg(`Cannot ${e}`);
const s = (h, t, e) => (Sf(h, t, 'read from private field'), e ? e.call(h) : t.get(h)); const v = (h, t, e) => (t.has(h) ? Bg('Cannot add the same private member more than once') : t instanceof WeakSet ? t.add(h) : t.set(h, e)); const m = (h, t, e, i) => (Sf(h, t, 'write to private field'), i ? i.call(h, e) : t.set(h, e), e); const
  A = (h, t, e) => (Sf(h, t, 'access private method'), e);
const de = (h, t, e, i) => ({
  set _(n) {
    m(h, t, n, e);
  },
  get _() {
    return s(h, t, i);
  },
});

const Bd = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof global < 'u' ? global : typeof self < 'u' ? self : {};
function Um(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, 'default') ? h.default : h;
}
function Mv(h) {
  if (Object.prototype.hasOwnProperty.call(h, '__esModule')) return h;
  const t = h.default;
  if (typeof t === 'function') {
    var e = function i() {
      return this instanceof i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else e = {};
  return Object.defineProperty(e, '__esModule', { value: !0 }), Object.keys(h).forEach((i) => {
    const n = Object.getOwnPropertyDescriptor(h, i);
    Object.defineProperty(e, i, n.get ? n : {
      enumerable: !0,
      get() {
        return h[i];
      },
    });
  }), e;
}
const Af = {}; const _f = {}; const hh = {}; const xf = {}; let
  jg;
function Dv() {
  return jg || (jg = 1, (function (h) {
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
  zg;
function Ov() {
  if (zg) return Ef;
  zg = 1;
  const h = 'Expected a function';
  const t = NaN;
  const e = '[object Symbol]';
  const i = /^\s+|\s+$/g;
  const n = /^[-+]0x[0-9a-f]+$/i;
  const r = /^0b[01]+$/i;
  const a = /^0o[0-7]+$/i;
  const o = parseInt;
  const l = typeof Bd === 'object' && Bd && Bd.Object === Object && Bd;
  const c = typeof self === 'object' && self && self.Object === Object && self;
  const d = l || c || Function('return this')();
  const u = Object.prototype;
  const g = u.toString;
  const b = Math.max;
  const C = Math.min;
  const S = function () {
    return d.Date.now();
  };
  function L(f, y, _) {
    let T; let P; let E; let D; let N; let I; let B = 0; let j = !1; let z = !1; let
      w = !0;
    if (typeof f !== 'function') throw new TypeError(h);
    y = p(y) || 0, k(_) && (j = !!_.leading, z = 'maxWait' in _, E = z ? b(p(_.maxWait) || 0, y) : E, w = 'trailing' in _ ? !!_.trailing : w);
    function K(W) {
      const ht = T; const
        ct = P;
      return T = P = void 0, B = W, D = f.apply(ct, ht), D;
    }
    function F(W) {
      return B = W, N = setTimeout(H, y), j ? K(W) : D;
    }
    function x(W) {
      const ht = W - I; const ct = W - B; const
        dt = y - ht;
      return z ? C(dt, E - ct) : dt;
    }
    function O(W) {
      const ht = W - I; const
        ct = W - B;
      return I === void 0 || ht >= y || ht < 0 || z && ct >= E;
    }
    function H() {
      const W = S();
      if (O(W)) return U(W);
      N = setTimeout(H, x(W));
    }
    function U(W) {
      return N = void 0, w && T ? K(W) : (T = P = void 0, D);
    }
    function $() {
      N !== void 0 && clearTimeout(N), B = 0, T = I = P = N = void 0;
    }
    function q() {
      return N === void 0 ? D : U(S());
    }
    function G() {
      const W = S(); const
        ht = O(W);
      if (T = arguments, P = this, I = W, ht) {
        if (N === void 0) return F(I);
        if (z) return N = setTimeout(H, y), K(I);
      }
      return N === void 0 && (N = setTimeout(H, y)), D;
    }
    return G.cancel = $, G.flush = q, G;
  }
  function k(f) {
    const y = typeof f;
    return !!f && (y == 'object' || y == 'function');
  }
  function M(f) {
    return !!f && typeof f === 'object';
  }
  function R(f) {
    return typeof f === 'symbol' || M(f) && g.call(f) == e;
  }
  function p(f) {
    if (typeof f === 'number') return f;
    if (R(f)) return t;
    if (k(f)) {
      const y = typeof f.valueOf === 'function' ? f.valueOf() : f;
      f = k(y) ? `${y}` : y;
    }
    if (typeof f !== 'string') return f === 0 ? f : +f;
    f = f.replace(i, '');
    const _ = r.test(f);
    return _ || a.test(f) ? o(f.slice(2), _ ? 2 : 8) : n.test(f) ? t : +f;
  }
  return Ef = L, Ef;
}
const Cf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
let $g;
function lf() {
  return $g || ($g = 1, (function (h) {
    (function () {
      const t = {}.hasOwnProperty;
      function e() {
        for (var r = '', a = 0; a < arguments.length; a++) {
          const o = arguments[a];
          o && (r = n(r, i(o)));
        }
        return r;
      }
      function i(r) {
        if (typeof r === 'string' || typeof r === 'number') return r;
        if (typeof r !== 'object') return '';
        if (Array.isArray(r)) return e.apply(null, r);
        if (r.toString !== Object.prototype.toString && !r.toString.toString().includes('[native code]')) return r.toString();
        let a = '';
        for (const o in r) t.call(r, o) && r[o] && (a = n(a, o));
        return a;
      }
      function n(r, a) {
        return a ? r ? `${r} ${a}` : r + a : r;
      }
      h.exports ? (e.default = e, h.exports = e) : window.classNames = e;
    }());
  }(Cf))), Cf.exports;
}
const J = {}; const Tf = {}; let
  Ug;
function Wm() {
  return Ug || (Ug = 1, (function (h) {
    Object.defineProperty(h, '__esModule', {
      value: !0,
    }), h.default = void 0;
    const t = e(Gi);
    function e(n) {
      return n && n.__esModule ? n : { default: n };
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
let Wg;
function Td() {
  if (Wg) return J;
  Wg = 1, Object.defineProperty(J, '__esModule', {
    value: !0,
  }), J.checkSpecKeys = J.checkNavigable = J.changeSlide = J.canUseDOM = J.canGoNext = void 0, J.clamp = c, J.extractObject = void 0, J.filterSettings = K, J.validSettings = J.swipeStart = J.swipeMove = J.swipeEnd = J.slidesOnRight = J.slidesOnLeft = J.slideHandler = J.siblingDirection = J.safePreventDefault = J.lazyStartIndex = J.lazySlidesOnRight = J.lazySlidesOnLeft = J.lazyEndIndex = J.keyHandler = J.initializedState = J.getWidth = J.getTrackLeft = J.getTrackCSS = J.getTrackAnimateCSS = J.getTotalSlides = J.getSwipeDirection = J.getSlideCount = J.getRequiredLazySlides = J.getPreClones = J.getPostClones = J.getOnDemandLazySlides = J.getNavigableIndexes = J.getHeight = void 0;
  const h = e(Gi); const
    t = e(Wm());
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
  function n(F, x) {
    const O = Object.keys(F);
    if (Object.getOwnPropertySymbols) {
      let H = Object.getOwnPropertySymbols(F);
      x && (H = H.filter((U) => Object.getOwnPropertyDescriptor(F, U).enumerable)), O.push.apply(O, H);
    }
    return O;
  }
  function r(F) {
    for (let x = 1; x < arguments.length; x++) {
      var O = arguments[x] != null ? arguments[x] : {};
      x % 2 ? n(Object(O), !0).forEach((H) => {
        a(F, H, O[H]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(F, Object.getOwnPropertyDescriptors(O)) : n(Object(O)).forEach((H) => {
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
      for (var O = [], H = g(x), U = b(x), $ = H; $ < U; $++) x.lazyLoadedList.indexOf($) < 0 && O.push($);
      return O;
    };
  J.getRequiredLazySlides = function (x) {
    for (var O = [], H = g(x), U = b(x), $ = H; $ < U; $++) O.push($);
    return O;
  };
  var g = J.lazyStartIndex = function (x) {
    return x.currentSlide - C(x);
  }; var b = J.lazyEndIndex = function (x) {
    return x.currentSlide + S(x);
  }; var C = J.lazySlidesOnLeft = function (x) {
    return x.centerMode ? Math.floor(x.slidesToShow / 2) + (parseInt(x.centerPadding) > 0 ? 1 : 0) : 0;
  }; var S = J.lazySlidesOnRight = function (x) {
    return x.centerMode ? Math.floor((x.slidesToShow - 1) / 2) + 1 + (parseInt(x.centerPadding) > 0 ? 1 : 0) : x.slidesToShow;
  }; const L = J.getWidth = function (x) {
    return x && x.offsetWidth || 0;
  }; const k = J.getHeight = function (x) {
    return x && x.offsetHeight || 0;
  }; const M = J.getSwipeDirection = function (x) {
    const O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; let H; let U; let $; let
      q;
    return H = x.startX - x.curX, U = x.startY - x.curY, $ = Math.atan2(U, H), q = Math.round($ * 180 / Math.PI), q < 0 && (q = 360 - Math.abs(q)), q <= 45 && q >= 0 || q <= 360 && q >= 315 ? 'left' : q >= 135 && q <= 225 ? 'right' : O === !0 ? q >= 35 && q <= 135 ? 'up' : 'down' : 'vertical';
  }; const
    R = J.canGoNext = function (x) {
      let O = !0;
      return x.infinite || (x.centerMode && x.currentSlide >= x.slideCount - 1 || x.slideCount <= x.slidesToShow || x.currentSlide >= x.slideCount - x.slidesToShow) && (O = !1), O;
    };
  J.extractObject = function (x, O) {
    const H = {};
    return O.forEach((U) => H[U] = x[U]), H;
  }, J.initializedState = function (x) {
    const O = h.default.Children.count(x.children); const H = x.listRef; const U = Math.ceil(L(H)); const $ = x.trackRef && x.trackRef.node; const q = Math.ceil(L($)); let
      G;
    if (x.vertical) G = U;
    else {
      let W = x.centerMode && parseInt(x.centerPadding) * 2;
      typeof x.centerPadding === 'string' && x.centerPadding.slice(-1) === '%' && (W *= U / 100), G = Math.ceil((U - W) / x.slidesToShow);
    }
    const ht = H && k(H.querySelector('[data-index="0"]')); const ct = ht * x.slidesToShow; let
      dt = x.currentSlide === void 0 ? x.initialSlide : x.currentSlide;
    x.rtl && x.currentSlide === void 0 && (dt = O - 1 - x.initialSlide);
    let ut = x.lazyLoadedList || []; const
      rt = u(r(r({}, x), {}, {
        currentSlide: dt,
        lazyLoadedList: ut,
      }));
    ut = ut.concat(rt);
    const nt = {
      slideCount: O,
      slideWidth: G,
      listWidth: U,
      trackWidth: q,
      currentSlide: dt,
      slideHeight: ht,
      listHeight: ct,
      lazyLoadedList: ut,
    };
    return x.autoplaying === null && x.autoplay && (nt.autoplaying = 'playing'), nt;
  }, J.slideHandler = function (x) {
    const O = x.waitForAnimate; const H = x.animating; const U = x.fade; const $ = x.infinite; const q = x.index; const G = x.slideCount; const W = x.lazyLoad; const ht = x.currentSlide; const ct = x.centerMode; const dt = x.slidesToScroll; const ut = x.slidesToShow; const rt = x.useCSS; let
      nt = x.lazyLoadedList;
    if (O && H) return {};
    let st = q; let at; let St; let ot; let Ct = {}; let ae = {}; const
      ce = $ ? q : c(q, 0, G - 1);
    if (U) {
      if (!$ && (q < 0 || q >= G)) return {};
      q < 0 ? st = q + G : q >= G && (st = q - G), W && nt.indexOf(st) < 0 && (nt = nt.concat(st)), Ct = {
        animating: !0,
        currentSlide: st,
        lazyLoadedList: nt,
        targetSlide: st,
      }, ae = {
        animating: !1,
        targetSlide: st,
      };
    } else {
      at = st, st < 0 ? (at = st + G, $ ? G % dt !== 0 && (at = G - G % dt) : at = 0) : !R(x) && st > ht ? st = at = ht : ct && st >= G ? (st = $ ? G : G - 1, at = $ ? 0 : G - 1) : st >= G && (at = st - G, $ ? G % dt !== 0 && (at = 0) : at = G - ut), !$ && st + ut >= G && (at = G - ut), St = E(r(r({}, x), {}, {
        slideIndex: st,
      })), ot = E(r(r({}, x), {}, {
        slideIndex: at,
      })), $ || (St === ot && (st = at), St = ot), W && (nt = nt.concat(u(r(r({}, x), {}, {
        currentSlide: st,
      })))), rt ? (Ct = {
        animating: !0,
        currentSlide: at,
        trackStyle: P(r(r({}, x), {}, {
          left: St,
        })),
        lazyLoadedList: nt,
        targetSlide: ce,
      }, ae = {
        animating: !1,
        currentSlide: at,
        trackStyle: T(r(r({}, x), {}, {
          left: ot,
        })),
        swipeLeft: null,
        targetSlide: ce,
      }) : Ct = {
        currentSlide: at,
        trackStyle: T(r(r({}, x), {}, {
          left: ot,
        })),
        lazyLoadedList: nt,
        targetSlide: ce,
      };
    }
    return {
      state: Ct,
      nextState: ae,
    };
  }, J.changeSlide = function (x, O) {
    let H; let U; let $; let q; let G; const W = x.slidesToScroll; const ht = x.slidesToShow; const ct = x.slideCount; const dt = x.currentSlide; const ut = x.targetSlide; const rt = x.lazyLoad; const
      nt = x.infinite;
    if (q = ct % W !== 0, H = q ? 0 : (ct - dt) % W, O.message === 'previous') $ = H === 0 ? W : ht - H, G = dt - $, rt && !nt && (U = dt - $, G = U === -1 ? ct - 1 : U), nt || (G = ut - W);
    else if (O.message === 'next') $ = H === 0 ? W : H, G = dt + $, rt && !nt && (G = (dt + W) % ct + H), nt || (G = ut + W);
    else if (O.message === 'dots') G = O.index * O.slidesToScroll;
    else if (O.message === 'children') {
      if (G = O.index, nt) {
        const st = B(r(r({}, x), {}, {
          targetSlide: G,
        }));
        G > O.currentSlide && st === 'left' ? G -= ct : G < O.currentSlide && st === 'right' && (G += ct);
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
    const H = O.scrolling; const U = O.animating; const $ = O.vertical; const q = O.swipeToSlide; const G = O.verticalSwiping; const W = O.rtl; const ht = O.currentSlide; const ct = O.edgeFriction; const dt = O.edgeDragged; const ut = O.onEdge; const rt = O.swiped; const nt = O.swiping; const st = O.slideCount; const at = O.slidesToScroll; const St = O.infinite; const ot = O.touchObject; const Ct = O.swipeEvent; const ae = O.listHeight; const
      ce = O.listWidth;
    if (!H) {
      if (U) return d(x);
      $ && q && G && d(x);
      let xe; let Wn = {}; const
        Gn = E(O);
      ot.curX = x.touches ? x.touches[0].pageX : x.clientX, ot.curY = x.touches ? x.touches[0].pageY : x.clientY, ot.swipeLength = Math.round(Math.sqrt((ot.curX - ot.startX) ** 2));
      const Nd = Math.round(Math.sqrt((ot.curY - ot.startY) ** 2));
      if (!G && !nt && Nd > 10) {
        return {
          scrolling: !0,
        };
      }
      G && (ot.swipeLength = Nd);
      let Hr = (W ? -1 : 1) * (ot.curX > ot.startX ? 1 : -1);
      G && (Hr = ot.curY > ot.startY ? 1 : -1);
      const vf = Math.ceil(st / at); const fn = M(O.touchObject, G); let
        jr = ot.swipeLength;
      return St || (ht === 0 && (fn === 'right' || fn === 'down') || ht + 1 >= vf && (fn === 'left' || fn === 'up') || !R(O) && (fn === 'left' || fn === 'up')) && (jr = ot.swipeLength * ct, dt === !1 && ut && (ut(fn), Wn.edgeDragged = !0)), !rt && Ct && (Ct(fn), Wn.swiped = !0), $ ? xe = Gn + jr * (ae / ce) * Hr : W ? xe = Gn - jr * Hr : xe = Gn + jr * Hr, G && (xe = Gn + jr * Hr), Wn = r(r({}, Wn), {}, {
        touchObject: ot,
        swipeLeft: xe,
        trackStyle: T(r(r({}, O), {}, {
          left: xe,
        })),
      }), Math.abs(ot.curX - ot.startX) < Math.abs(ot.curY - ot.startY) * 0.8 || ot.swipeLength > 10 && (Wn.swiping = !0, d(x)), Wn;
    }
  }, J.swipeEnd = function (x, O) {
    const H = O.dragging; const U = O.swipe; const $ = O.touchObject; const q = O.listWidth; const G = O.touchThreshold; const W = O.verticalSwiping; const ht = O.listHeight; const ct = O.swipeToSlide; const dt = O.scrolling; const ut = O.onSwipe; const rt = O.targetSlide; const nt = O.currentSlide; const
      st = O.infinite;
    if (!H) return U && d(x), {};
    const at = W ? ht / G : q / G; const St = M($, W); const
      ot = {
        dragging: !1,
        edgeDragged: !1,
        scrolling: !1,
        swiping: !1,
        swiped: !1,
        swipeLeft: null,
        touchObject: {},
      };
    if (dt || !$.swipeLength) return ot;
    if ($.swipeLength > at) {
      d(x), ut && ut(St);
      let Ct; let ae; const
        ce = st ? nt : rt;
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
      const xe = E(O);
      ot.trackStyle = P(r(r({}, O), {}, {
        left: xe,
      }));
    }
    return ot;
  };
  const p = J.getNavigableIndexes = function (x) {
    for (var O = x.infinite ? x.slideCount * 2 : x.slideCount, H = x.infinite ? x.slidesToShow * -1 : 0, U = x.infinite ? x.slidesToShow * -1 : 0, $ = []; H < O;) $.push(H), H = U + x.slidesToScroll, U += Math.min(x.slidesToScroll, x.slidesToShow);
    return $;
  }; var f = J.checkNavigable = function (x, O) {
    const H = p(x); let
      U = 0;
    if (O > H[H.length - 1]) O = H[H.length - 1];
    else {
      for (const $ in H) {
        if (O < H[$]) {
          O = U;
          break;
        }
        U = H[$];
      }
    }
    return O;
  }; var y = J.getSlideCount = function (x) {
    const O = x.centerMode ? x.slideWidth * Math.floor(x.slidesToShow / 2) : 0;
    if (x.swipeToSlide) {
      let H; const U = x.listRef; const
        $ = U.querySelectorAll && U.querySelectorAll('.slick-slide') || [];
      if (Array.from($).every((W) => {
        if (x.vertical) {
          if (W.offsetTop + k(W) / 2 > x.swipeLeft * -1) return H = W, !1;
        } else if (W.offsetLeft - O + L(W) / 2 > x.swipeLeft * -1) return H = W, !1;
        return !0;
      }), !H) return 0;
      const q = x.rtl === !0 ? x.slideCount - x.currentSlide : x.currentSlide; const
        G = Math.abs(H.dataset.index - q) || 1;
      return G;
    } return x.slidesToScroll;
  }; const _ = J.checkSpecKeys = function (x, O) {
    return O.reduce((H, U) => H && x.hasOwnProperty(U), !0) ? null : console.error('Keys Missing:', x);
  }; var T = J.getTrackCSS = function (x) {
    _(x, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth']);
    let O; let
      H;
    if (!x.vertical) O = I(x) * x.slideWidth;
    else {
      const U = x.unslick ? x.slideCount : x.slideCount + 2 * x.slidesToShow;
      H = U * x.slideHeight;
    }
    let $ = {
      opacity: 1,
      transition: '',
      WebkitTransition: '',
    };
    if (x.useTransform) {
      const q = x.vertical ? `translate3d(0px, ${x.left}px, 0px)` : `translate3d(${x.left}px, 0px, 0px)`;
      const G = x.vertical ? `translate3d(0px, ${x.left}px, 0px)` : `translate3d(${x.left}px, 0px, 0px)`;
      const W = x.vertical ? `translateY(${x.left}px)` : `translateX(${x.left}px)`;
      $ = r(r({}, $), {}, {
        WebkitTransform: q,
        transform: G,
        msTransform: W,
      });
    } else x.vertical ? $.top = x.left : $.left = x.left;
    return x.fade && ($ = {
      opacity: 1,
    }), O && ($.width = O), H && ($.height = H), window && !window.addEventListener && window.attachEvent && (x.vertical ? $.marginTop = `${x.left}px` : $.marginLeft = `${x.left}px`), $;
  }; var P = J.getTrackAnimateCSS = function (x) {
    _(x, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase']);
    const O = T(x);
    return x.useTransform ? (O.WebkitTransition = `-webkit-transform ${x.speed}ms ${x.cssEase}`, O.transition = `transform ${x.speed}ms ${x.cssEase}`) : x.vertical ? O.transition = `top ${x.speed}ms ${x.cssEase}` : O.transition = `left ${x.speed}ms ${x.cssEase}`, O;
  }; var E = J.getTrackLeft = function (x) {
    if (x.unslick) return 0;
    _(x, ['slideIndex', 'trackRef', 'infinite', 'centerMode', 'slideCount', 'slidesToShow', 'slidesToScroll', 'slideWidth', 'listWidth', 'variableWidth', 'slideHeight']);
    const O = x.slideIndex; const H = x.trackRef; const U = x.infinite; const $ = x.centerMode; const q = x.slideCount; const G = x.slidesToShow; const W = x.slidesToScroll; const ht = x.slideWidth; const ct = x.listWidth; const dt = x.variableWidth; const ut = x.slideHeight; const rt = x.fade; const nt = x.vertical; let st = 0; let at; let St; let
      ot = 0;
    if (rt || x.slideCount === 1) return 0;
    let Ct = 0;
    if (U ? (Ct = -D(x), q % W !== 0 && O + W > q && (Ct = -(O > q ? G - (O - q) : q % W)), $ && (Ct += parseInt(G / 2))) : (q % W !== 0 && O + W > q && (Ct = G - q % W), $ && (Ct = parseInt(G / 2))), st = Ct * ht, ot = Ct * ut, nt ? at = O * ut * -1 + ot : at = O * ht * -1 + st, dt === !0) {
      let ae; const
        ce = H && H.node;
      if (ae = O + D(x), St = ce && ce.childNodes[ae], at = St ? St.offsetLeft * -1 : 0, $ === !0) {
        ae = U ? O + D(x) : O, St = ce && ce.children[ae], at = 0;
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
    const O = x.slidesToShow; const H = x.centerMode; const U = x.rtl; const
      $ = x.centerPadding;
    if (H) {
      let q = (O - 1) / 2 + 1;
      return parseInt($) > 0 && (q += 1), U && O % 2 === 0 && (q += 1), q;
    }
    return U ? 0 : O - 1;
  }; var
    z = J.slidesOnLeft = function (x) {
      const O = x.slidesToShow; const H = x.centerMode; const U = x.rtl; const
        $ = x.centerPadding;
      if (H) {
        let q = (O - 1) / 2 + 1;
        return parseInt($) > 0 && (q += 1), !U && O % 2 === 0 && (q += 1), q;
      }
      return U ? O - 1 : 0;
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
  Gg;
function Iv() {
  if (Gg) return ch;
  Gg = 1, Object.defineProperty(ch, '__esModule', {
    value: !0,
  }), ch.Track = void 0;
  const h = i(Gi); const t = i(lf()); const
    e = Td();
  function i(P) {
    return P && P.__esModule ? P : { default: P };
  }
  function n(P) {
    '@babel/helpers - typeof';

    return n = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (E) {
      return typeof E;
    } : function (E) {
      return E && typeof Symbol === 'function' && E.constructor === Symbol && E !== Symbol.prototype ? 'symbol' : typeof E;
    }, n(P);
  }
  function r() {
    return r = Object.assign ? Object.assign.bind() : function (P) {
      for (let E = 1; E < arguments.length; E++) {
        const D = arguments[E];
        for (const N in D) ({}).hasOwnProperty.call(D, N) && (P[N] = D[N]);
      }
      return P;
    }, r.apply(null, arguments);
  }
  function a(P, E) {
    if (!(P instanceof E)) throw new TypeError('Cannot call a class as a function');
  }
  function o(P, E) {
    for (let D = 0; D < E.length; D++) {
      const N = E[D];
      N.enumerable = N.enumerable || !1, N.configurable = !0, 'value' in N && (N.writable = !0), Object.defineProperty(P, R(N.key), N);
    }
  }
  function l(P, E, D) {
    return E && o(P.prototype, E), Object.defineProperty(P, 'prototype', { writable: !1 }), P;
  }
  function c(P, E) {
    if (typeof E !== 'function' && E !== null) throw new TypeError('Super expression must either be null or a function');
    P.prototype = Object.create(E && E.prototype, { constructor: { value: P, writable: !0, configurable: !0 } }), Object.defineProperty(P, 'prototype', { writable: !1 }), E && d(P, E);
  }
  function d(P, E) {
    return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (D, N) {
      return D.__proto__ = N, D;
    }, d(P, E);
  }
  function u(P) {
    const E = C();
    return function () {
      let D; const
        N = S(P);
      if (E) {
        const I = S(this).constructor;
        D = Reflect.construct(N, arguments, I);
      } else D = N.apply(this, arguments);
      return g(this, D);
    };
  }
  function g(P, E) {
    if (E && (n(E) == 'object' || typeof E === 'function')) return E;
    if (E !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return b(P);
  }
  function b(P) {
    if (P === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return P;
  }
  function C() {
    try {
      var P = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
      }));
    } catch {
    }
    return (C = function () {
      return !!P;
    })();
  }
  function S(P) {
    return S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (E) {
      return E.__proto__ || Object.getPrototypeOf(E);
    }, S(P);
  }
  function L(P, E) {
    const D = Object.keys(P);
    if (Object.getOwnPropertySymbols) {
      let N = Object.getOwnPropertySymbols(P);
      E && (N = N.filter((I) => Object.getOwnPropertyDescriptor(P, I).enumerable)), D.push.apply(D, N);
    }
    return D;
  }
  function k(P) {
    for (let E = 1; E < arguments.length; E++) {
      var D = arguments[E] != null ? arguments[E] : {};
      E % 2 ? L(Object(D), !0).forEach((N) => {
        M(P, N, D[N]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(D)) : L(Object(D)).forEach((N) => {
        Object.defineProperty(P, N, Object.getOwnPropertyDescriptor(D, N));
      });
    }
    return P;
  }
  function M(P, E, D) {
    return (E = R(E)) in P ? Object.defineProperty(P, E, {
      value: D, enumerable: !0, configurable: !0, writable: !0,
    }) : P[E] = D, P;
  }
  function R(P) {
    const E = p(P, 'string');
    return n(E) == 'symbol' ? E : `${E}`;
  }
  function p(P, E) {
    if (n(P) != 'object' || !P) return P;
    const D = P[Symbol.toPrimitive];
    if (D !== void 0) {
      const N = D.call(P, E);
      if (n(N) != 'object') return N;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (E === 'string' ? String : Number)(P);
  }
  const f = function (E) {
    let D; let N; let I; let B; let
      j;
    E.rtl ? j = E.slideCount - 1 - E.index : j = E.index, I = j < 0 || j >= E.slideCount, E.centerMode ? (B = Math.floor(E.slidesToShow / 2), N = (j - E.currentSlide) % E.slideCount === 0, j > E.currentSlide - B - 1 && j <= E.currentSlide + B && (D = !0)) : D = E.currentSlide <= j && j < E.currentSlide + E.slidesToShow;
    let z;
    E.targetSlide < 0 ? z = E.targetSlide + E.slideCount : E.targetSlide >= E.slideCount ? z = E.targetSlide - E.slideCount : z = E.targetSlide;
    const w = j === z;
    return {
      'slick-slide': !0,
      'slick-active': D,
      'slick-center': N,
      'slick-cloned': I,
      'slick-current': w,
      // dubious in case of RTL
    };
  }; const y = function (E) {
    const D = {};
    return (E.variableWidth === void 0 || E.variableWidth === !1) && (D.width = E.slideWidth), E.fade && (D.position = 'relative', E.vertical ? D.top = -E.index * parseInt(E.slideHeight) : D.left = -E.index * parseInt(E.slideWidth), D.opacity = E.currentSlide === E.index ? 1 : 0, D.zIndex = E.currentSlide === E.index ? 999 : 998, E.useCSS && (D.transition = `opacity ${E.speed}ms ${E.cssEase}, visibility ${E.speed}ms ${E.cssEase}`)), D;
  }; const _ = function (E, D) {
    return E.key || D;
  }; const
    T = function (E) {
      let D; const N = []; const I = []; const B = []; const j = h.default.Children.count(E.children); const z = (0, e.lazyStartIndex)(E); const
        w = (0, e.lazyEndIndex)(E);
      return h.default.Children.forEach(E.children, (K, F) => {
        let x; const
          O = {
            message: 'children',
            index: F,
            slidesToScroll: E.slidesToScroll,
            currentSlide: E.currentSlide,
          };
        !E.lazyLoad || E.lazyLoad && E.lazyLoadedList.indexOf(F) >= 0 ? x = K : x = /* @__PURE__ */ h.default.createElement('div', null);
        const H = y(k(k({}, E), {}, {
          index: F,
        })); const U = x.props.className || ''; let
          $ = f(k(k({}, E), {}, {
            index: F,
          }));
        if (N.push(/* @__PURE__ */ h.default.cloneElement(x, {
          key: `original${_(x, F)}`,
          'data-index': F,
          className: (0, t.default)($, U),
          tabIndex: '-1',
          'aria-hidden': !$['slick-active'],
          style: k(k({
            outline: 'none',
          }, x.props.style || {}), H),
          onClick(W) {
            x.props && x.props.onClick && x.props.onClick(W), E.focusOnSelect && E.focusOnSelect(O);
          },
        })), E.infinite && j > 1 && E.fade === !1 && !E.unslick) {
          const q = j - F;
          q <= (0, e.getPreClones)(E) && (D = -q, D >= z && (x = K), $ = f(k(k({}, E), {}, {
            index: D,
          })), I.push(/* @__PURE__ */ h.default.cloneElement(x, {
            key: `precloned${_(x, D)}`,
            'data-index': D,
            tabIndex: '-1',
            className: (0, t.default)($, U),
            'aria-hidden': !$['slick-active'],
            style: k(k({}, x.props.style || {}), H),
            onClick(W) {
              x.props && x.props.onClick && x.props.onClick(W), E.focusOnSelect && E.focusOnSelect(O);
            },
          }))), F < (0, e.getPostClones)(E) && (D = j + F, D < w && (x = K), $ = f(k(k({}, E), {}, {
            index: D,
          })), B.push(/* @__PURE__ */ h.default.cloneElement(x, {
            key: `postcloned${_(x, D)}`,
            'data-index': D,
            tabIndex: '-1',
            className: (0, t.default)($, U),
            'aria-hidden': !$['slick-active'],
            style: k(k({}, x.props.style || {}), H),
            onClick(W) {
              x.props && x.props.onClick && x.props.onClick(W), E.focusOnSelect && E.focusOnSelect(O);
            },
          })));
        }
      }), E.rtl ? I.concat(N, B).reverse() : I.concat(N, B);
    };
  return ch.Track = /* @__PURE__ */ (function (P) {
    c(D, P);
    const E = u(D);
    function D() {
      let N;
      a(this, D);
      for (var I = arguments.length, B = new Array(I), j = 0; j < I; j++) B[j] = arguments[j];
      return N = E.call.apply(E, [this].concat(B)), M(b(N), 'node', null), M(b(N), 'handleRef', (z) => {
        N.node = z;
      }), N;
    }
    return l(D, [{
      key: 'render',
      value() {
        const I = T(this.props); const B = this.props; const j = B.onMouseEnter; const z = B.onMouseOver; const w = B.onMouseLeave; const
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
  Vg;
function Fv() {
  if (Vg) return dh;
  Vg = 1;
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
  const t = n(Gi); const e = n(lf()); const
    i = Td();
  function n(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function r(f, y) {
    const _ = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      let T = Object.getOwnPropertySymbols(f);
      y && (T = T.filter((P) => Object.getOwnPropertyDescriptor(f, P).enumerable)), _.push.apply(_, T);
    }
    return _;
  }
  function a(f) {
    for (let y = 1; y < arguments.length; y++) {
      var _ = arguments[y] != null ? arguments[y] : {};
      y % 2 ? r(Object(_), !0).forEach((T) => {
        o(f, T, _[T]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(_)) : r(Object(_)).forEach((T) => {
        Object.defineProperty(f, T, Object.getOwnPropertyDescriptor(_, T));
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
      const T = y[_];
      T.enumerable = T.enumerable || !1, T.configurable = !0, 'value' in T && (T.writable = !0), Object.defineProperty(f, u(T.key), T);
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
      const T = _.call(f, y);
      if (h(T) != 'object') return T;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(f);
  }
  function b(f, y) {
    if (typeof y !== 'function' && y !== null) throw new TypeError('Super expression must either be null or a function');
    f.prototype = Object.create(y && y.prototype, { constructor: { value: f, writable: !0, configurable: !0 } }), Object.defineProperty(f, 'prototype', { writable: !1 }), y && C(f, y);
  }
  function C(f, y) {
    return C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_, T) {
      return _.__proto__ = T, _;
    }, C(f, y);
  }
  function S(f) {
    const y = M();
    return function () {
      let _; const
        T = R(f);
      if (y) {
        const P = R(this).constructor;
        _ = Reflect.construct(T, arguments, P);
      } else _ = T.apply(this, arguments);
      return L(this, _);
    };
  }
  function L(f, y) {
    if (y && (h(y) == 'object' || typeof y === 'function')) return y;
    if (y !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return k(f);
  }
  function k(f) {
    if (f === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return f;
  }
  function M() {
    try {
      var f = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
      }));
    } catch {
    }
    return (M = function () {
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
      value(P, E) {
        E.preventDefault(), this.props.clickHandler(P);
      },
    }, {
      key: 'render',
      value() {
        for (var P = this.props, E = P.onMouseEnter, D = P.onMouseOver, N = P.onMouseLeave, I = P.infinite, B = P.slidesToScroll, j = P.slidesToShow, z = P.slideCount, w = P.currentSlide, K = p({
            slideCount: z,
            slidesToScroll: B,
            slidesToShow: j,
            infinite: I,
          }), F = {
            onMouseEnter: E,
            onMouseOver: D,
            onMouseLeave: N,
          }, x = [], O = 0; O < K; O++) {
          const H = (O + 1) * B - 1; const U = I ? H : (0, i.clamp)(H, 0, z - 1); const $ = U - (B - 1); const q = I ? $ : (0, i.clamp)($, 0, z - 1); const G = (0, e.default)({
            'slick-active': I ? w >= q && w <= U : w === q,
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
const zr = {}; let
  qg;
function Nv() {
  if (qg) return zr;
  qg = 1;
  function h(f) {
    '@babel/helpers - typeof';

    return h = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (y) {
      return typeof y;
    } : function (y) {
      return y && typeof Symbol === 'function' && y.constructor === Symbol && y !== Symbol.prototype ? 'symbol' : typeof y;
    }, h(f);
  }
  Object.defineProperty(zr, '__esModule', {
    value: !0,
  }), zr.PrevArrow = zr.NextArrow = void 0;
  const t = n(Gi); const e = n(lf()); const
    i = Td();
  function n(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function r() {
    return r = Object.assign ? Object.assign.bind() : function (f) {
      for (let y = 1; y < arguments.length; y++) {
        const _ = arguments[y];
        for (const T in _) ({}).hasOwnProperty.call(_, T) && (f[T] = _[T]);
      }
      return f;
    }, r.apply(null, arguments);
  }
  function a(f, y) {
    const _ = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      let T = Object.getOwnPropertySymbols(f);
      y && (T = T.filter((P) => Object.getOwnPropertyDescriptor(f, P).enumerable)), _.push.apply(_, T);
    }
    return _;
  }
  function o(f) {
    for (let y = 1; y < arguments.length; y++) {
      var _ = arguments[y] != null ? arguments[y] : {};
      y % 2 ? a(Object(_), !0).forEach((T) => {
        l(f, T, _[T]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(_)) : a(Object(_)).forEach((T) => {
        Object.defineProperty(f, T, Object.getOwnPropertyDescriptor(_, T));
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
      const T = y[_];
      T.enumerable = T.enumerable || !1, T.configurable = !0, 'value' in T && (T.writable = !0), Object.defineProperty(f, g(T.key), T);
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
      const T = _.call(f, y);
      if (h(T) != 'object') return T;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(f);
  }
  function C(f, y) {
    if (typeof y !== 'function' && y !== null) throw new TypeError('Super expression must either be null or a function');
    f.prototype = Object.create(y && y.prototype, { constructor: { value: f, writable: !0, configurable: !0 } }), Object.defineProperty(f, 'prototype', { writable: !1 }), y && S(f, y);
  }
  function S(f, y) {
    return S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_, T) {
      return _.__proto__ = T, _;
    }, S(f, y);
  }
  function L(f) {
    const y = R();
    return function () {
      let _; const
        T = p(f);
      if (y) {
        const P = p(this).constructor;
        _ = Reflect.construct(T, arguments, P);
      } else _ = T.apply(this, arguments);
      return k(this, _);
    };
  }
  function k(f, y) {
    if (y && (h(y) == 'object' || typeof y === 'function')) return y;
    if (y !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return M(f);
  }
  function M(f) {
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
  return zr.PrevArrow = /* @__PURE__ */ (function (f) {
    C(_, f);
    const y = L(_);
    function _() {
      return c(this, _), y.apply(this, arguments);
    }
    return u(_, [{
      key: 'clickHandler',
      value(P, E) {
        E && E.preventDefault(), this.props.clickHandler(P, E);
      },
    }, {
      key: 'render',
      value() {
        const P = {
          'slick-arrow': !0,
          'slick-prev': !0,
        };
        let E = this.clickHandler.bind(this, {
          message: 'previous',
        });
        !this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow) && (P['slick-disabled'] = !0, E = null);
        const D = {
          key: '0',
          'data-role': 'none',
          className: (0, e.default)(P),
          style: {
            display: 'block',
          },
          onClick: E,
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
  }(t.default.PureComponent)), zr.NextArrow = /* @__PURE__ */ (function (f) {
    C(_, f);
    const y = L(_);
    function _() {
      return c(this, _), y.apply(this, arguments);
    }
    return u(_, [{
      key: 'clickHandler',
      value(P, E) {
        E && E.preventDefault(), this.props.clickHandler(P, E);
      },
    }, {
      key: 'render',
      value() {
        const P = {
          'slick-arrow': !0,
          'slick-next': !0,
        };
        let E = this.clickHandler.bind(this, {
          message: 'next',
        });
        (0, i.canGoNext)(this.props) || (P['slick-disabled'] = !0, E = null);
        const D = {
          key: '1',
          'data-role': 'none',
          className: (0, e.default)(P),
          style: {
            display: 'block',
          },
          onClick: E,
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
  }(t.default.PureComponent)), zr;
}
const Gm = (function () {
  if (typeof Map < 'u') return Map;
  function h(t, e) {
    let i = -1;
    return t.some((n, r) => (n[0] === e ? (i = r, !0) : !1)), i;
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
          n = this.__entries__[i];
        return n && n[1];
      }, t.prototype.set = function (e, i) {
        const n = h(this.__entries__, e);
        ~n ? this.__entries__[n][1] = i : this.__entries__.push([e, i]);
      }, t.prototype.delete = function (e) {
        const i = this.__entries__; const
          n = h(i, e);
        ~n && i.splice(n, 1);
      }, t.prototype.has = function (e) {
        return !!~h(this.__entries__, e);
      }, t.prototype.clear = function () {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function (e, i) {
        i === void 0 && (i = null);
        for (let n = 0, r = this.__entries__; n < r.length; n++) {
          const a = r[n];
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
const Bv = (function () {
  return typeof requestAnimationFrame === 'function' ? requestAnimationFrame.bind(Pu) : function (h) {
    return setTimeout(() => h(Date.now()), 1e3 / 60);
  };
}());
const Hv = 2;
function jv(h, t) {
  let e = !1; let i = !1; let
    n = 0;
  function r() {
    e && (e = !1, h()), i && o();
  }
  function a() {
    Bv(r);
  }
  function o() {
    const l = Date.now();
    if (e) {
      if (l - n < Hv) return;
      i = !0;
    } else e = !0, i = !1, setTimeout(a, t);
    n = l;
  }
  return o;
}
const zv = 20; const $v = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; const Uv = typeof MutationObserver < 'u'; const Wv = (
  /** @class */
  (function () {
    function h() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = jv(this.refresh.bind(this), zv);
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
      !jf || this.connected_ || (document.addEventListener('transitionend', this.onTransitionEnd_), window.addEventListener('resize', this.refresh), Uv ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0,
      })) : (document.addEventListener('DOMSubtreeModified', this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, h.prototype.disconnect_ = function () {
      !jf || !this.connected_ || (document.removeEventListener('transitionend', this.onTransitionEnd_), window.removeEventListener('resize', this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener('DOMSubtreeModified', this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, h.prototype.onTransitionEnd_ = function (t) {
      const e = t.propertyName; const i = e === void 0 ? '' : e; const
        n = $v.some((r) => !!~i.indexOf(r));
      n && this.refresh();
    }, h.getInstance = function () {
      return this.instance_ || (this.instance_ = new h()), this.instance_;
    }, h.instance_ = null, h;
  })()
); const Vm = (function (h, t) {
  for (let e = 0, i = Object.keys(t); e < i.length; e++) {
    const n = i[e];
    Object.defineProperty(h, n, {
      value: t[n],
      enumerable: !1,
      writable: !1,
      configurable: !0,
    });
  }
  return h;
}); const nh = (function (h) {
  const t = h && h.ownerDocument && h.ownerDocument.defaultView;
  return t || Pu;
}); const
  qm = hf(0, 0, 0, 0);
function ku(h) {
  return parseFloat(h) || 0;
}
function Xg(h) {
  for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
  return t.reduce((i, n) => {
    const r = h[`border-${n}-width`];
    return i + ku(r);
  }, 0);
}
function Gv(h) {
  for (var t = ['top', 'right', 'bottom', 'left'], e = {}, i = 0, n = t; i < n.length; i++) {
    const r = n[i]; const
      a = h[`padding-${r}`];
    e[r] = ku(a);
  }
  return e;
}
function Vv(h) {
  const t = h.getBBox();
  return hf(0, 0, t.width, t.height);
}
function qv(h) {
  const t = h.clientWidth; const
    e = h.clientHeight;
  if (!t && !e) return qm;
  const i = nh(h).getComputedStyle(h); const n = Gv(i); const r = n.left + n.right; const a = n.top + n.bottom; let o = ku(i.width); let
    l = ku(i.height);
  if (i.boxSizing === 'border-box' && (Math.round(o + r) !== t && (o -= Xg(i, 'left', 'right') + r), Math.round(l + a) !== e && (l -= Xg(i, 'top', 'bottom') + a)), !Yv(h)) {
    const c = Math.round(o + r) - t; const
      d = Math.round(l + a) - e;
    Math.abs(c) !== 1 && (o -= c), Math.abs(d) !== 1 && (l -= d);
  }
  return hf(n.left, n.top, o, l);
}
const Xv = /* @__PURE__ */ (function () {
  return typeof SVGGraphicsElement < 'u' ? function (h) {
    return h instanceof nh(h).SVGGraphicsElement;
  } : function (h) {
    return h instanceof nh(h).SVGElement && typeof h.getBBox === 'function';
  };
}());
function Yv(h) {
  return h === nh(h).document.documentElement;
}
function Kv(h) {
  return jf ? Xv(h) ? Vv(h) : qv(h) : qm;
}
function Jv(h) {
  const t = h.x; const e = h.y; const i = h.width; const n = h.height; const r = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object; const
    a = Object.create(r.prototype);
  return Vm(a, {
    x: t,
    y: e,
    width: i,
    height: n,
    top: e,
    right: t + i,
    bottom: n + e,
    left: t,
  }), a;
}
function hf(h, t, e, i) {
  return {
    x: h, y: t, width: e, height: i,
  };
}
const Qv = (
  /** @class */
  (function () {
    function h(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = hf(0, 0, 0, 0), this.target = t;
    }
    return h.prototype.isActive = function () {
      const t = Kv(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, h.prototype.broadcastRect = function () {
      const t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, h;
  })()
); const Zv = (
  /** @class */
  /* @__PURE__ */ (function () {
    function h(t, e) {
      const i = Jv(e);
      Vm(this, { target: t, contentRect: i });
    }
    return h;
  })()
); const tw = (
  /** @class */
  (function () {
    function h(t, e, i) {
      if (this.activeObservations_ = [], this.observations_ = new Gm(), typeof t !== 'function') throw new TypeError('The callback provided as parameter 1 is not a function.');
      this.callback_ = t, this.controller_ = e, this.callbackCtx_ = i;
    }
    return h.prototype.observe = function (t) {
      if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
      if (!(typeof Element > 'u' || !(Element instanceof Object))) {
        if (!(t instanceof nh(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        const e = this.observations_;
        e.has(t) || (e.set(t, new Qv(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, h.prototype.unobserve = function (t) {
      if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
      if (!(typeof Element > 'u' || !(Element instanceof Object))) {
        if (!(t instanceof nh(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
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
          e = this.activeObservations_.map((i) => new Zv(i.target, i.broadcastRect()));
        this.callback_.call(t, e, t), this.clearActive();
      }
    }, h.prototype.clearActive = function () {
      this.activeObservations_.splice(0);
    }, h.prototype.hasActive = function () {
      return this.activeObservations_.length > 0;
    }, h;
  })()
); const Xm = typeof WeakMap < 'u' ? /* @__PURE__ */ new WeakMap() : new Gm(); const
  Ym = (
  /** @class */
  /* @__PURE__ */ (function () {
      function h(t) {
        if (!(this instanceof h)) throw new TypeError('Cannot call a class as a function.');
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
        const e = Wv.getInstance(); const
          i = new tw(t, e, this);
        Xm.set(this, i);
      }
      return h;
    })()
  );
[
  'observe',
  'unobserve',
  'disconnect',
].forEach((h) => {
  Ym.prototype[h] = function () {
    let t;
    return (t = Xm.get(this))[h].apply(t, arguments);
  };
});
const ew = (function () {
  return typeof Pu.ResizeObserver < 'u' ? Pu.ResizeObserver : Ym;
}());
const iw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ew,
}, Symbol.toStringTag, { value: 'Module' })); const
  nw = /* @__PURE__ */ Mv(iw);
let Yg;
function sw() {
  if (Yg) return hh;
  Yg = 1, Object.defineProperty(hh, '__esModule', {
    value: !0,
  }), hh.InnerSlider = void 0;
  const h = c(Gi); const t = c(Dv()); const e = c(Ov()); const i = c(lf()); const n = Td(); const r = Iv(); const a = Fv(); const o = Nv(); const
    l = c(nw);
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
  function C(I, B) {
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
      B % 2 ? C(Object(j), !0).forEach((z) => {
        E(I, z, j[z]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(I, Object.getOwnPropertyDescriptors(j)) : C(Object(j)).forEach((z) => {
        Object.defineProperty(I, z, Object.getOwnPropertyDescriptor(j, z));
      });
    }
    return I;
  }
  function L(I, B) {
    if (!(I instanceof B)) throw new TypeError('Cannot call a class as a function');
  }
  function k(I, B) {
    for (let j = 0; j < B.length; j++) {
      const z = B[j];
      z.enumerable = z.enumerable || !1, z.configurable = !0, 'value' in z && (z.writable = !0), Object.defineProperty(I, D(z.key), z);
    }
  }
  function M(I, B, j) {
    return B && k(I.prototype, B), Object.defineProperty(I, 'prototype', { writable: !1 }), I;
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
    const B = T();
    return function () {
      let j; const
        z = P(I);
      if (B) {
        const w = P(this).constructor;
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
  function T() {
    try {
      var I = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
      }));
    } catch {
    }
    return (T = function () {
      return !!I;
    })();
  }
  function P(I) {
    return P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (B) {
      return B.__proto__ || Object.getPrototypeOf(B);
    }, P(I);
  }
  function E(I, B, j) {
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
      L(this, j), w = B.call(this, z), E(_(w), 'listRefHandler', (F) => w.list = F), E(_(w), 'trackRefHandler', (F) => w.track = F), E(_(w), 'adaptHeight', () => {
        if (w.props.adaptiveHeight && w.list) {
          const F = w.list.querySelector('[data-index="'.concat(w.state.currentSlide, '"]'));
          w.list.style.height = `${(0, n.getHeight)(F)}px`;
        }
      }), E(_(w), 'componentDidMount', () => {
        if (w.props.onInit && w.props.onInit(), w.props.lazyLoad) {
          const F = (0, n.getOnDemandLazySlides)(S(S({}, w.props), w.state));
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
      }), E(_(w), 'componentWillUnmount', () => {
        w.animationEndCallback && clearTimeout(w.animationEndCallback), w.lazyLoadTimer && clearInterval(w.lazyLoadTimer), w.callbackTimers.length && (w.callbackTimers.forEach((F) => clearTimeout(F)), w.callbackTimers = []), window.addEventListener ? window.removeEventListener('resize', w.onWindowResized) : window.detachEvent('onresize', w.onWindowResized), w.autoplayTimer && clearInterval(w.autoplayTimer), w.ro.disconnect();
      }), E(_(w), 'componentDidUpdate', (F) => {
        if (w.checkImagesLoad(), w.props.onReInit && w.props.onReInit(), w.props.lazyLoad) {
          const x = (0, n.getOnDemandLazySlides)(S(S({}, w.props), w.state));
          x.length > 0 && (w.setState((U) => ({
            lazyLoadedList: U.lazyLoadedList.concat(x),
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
      }), E(_(w), 'onWindowResized', (F) => {
        w.debouncedResize && w.debouncedResize.cancel(), w.debouncedResize = (0, e.default)(() => w.resizeWindow(F), 50), w.debouncedResize();
      }), E(_(w), 'resizeWindow', function () {
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
      }), E(_(w), 'updateState', (F, x, O) => {
        const H = (0, n.initializedState)(F);
        F = S(S(S({}, F), H), {}, {
          slideIndex: H.currentSlide,
        });
        const U = (0, n.getTrackLeft)(F);
        F = S(S({}, F), {}, {
          left: U,
        });
        const $ = (0, n.getTrackCSS)(F);
        (x || h.default.Children.count(w.props.children) !== h.default.Children.count(F.children)) && (H.trackStyle = $), w.setState(H, O);
      }), E(_(w), 'ssrInit', () => {
        if (w.props.variableWidth) {
          let F = 0; let x = 0; const O = []; const H = (0, n.getPreClones)(S(S(S({}, w.props), w.state), {}, {
            slideCount: w.props.children.length,
          })); const
            U = (0, n.getPostClones)(S(S(S({}, w.props), w.state), {}, {
              slideCount: w.props.children.length,
            }));
          w.props.children.forEach((St) => {
            O.push(St.props.style.width), F += St.props.style.width;
          });
          for (let $ = 0; $ < H; $++) x += O[O.length - 1 - $], F += O[O.length - 1 - $];
          for (let q = 0; q < U; q++) F += O[q];
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
        }); const ut = (0, n.getPreClones)(dt) + (0, n.getPostClones)(dt) + ct; const rt = 100 / w.props.slidesToShow * ut; const nt = 100 / ut; let
          st = -nt * ((0, n.getPreClones)(dt) + w.state.currentSlide) * rt / 100;
        w.props.centerMode && (st += (100 - nt * rt / 100) / 2);
        const at = {
          width: `${rt}%`,
          left: `${st}%`,
        };
        return {
          slideWidth: `${nt}%`,
          trackStyle: at,
        };
      }), E(_(w), 'checkImagesLoad', () => {
        const F = w.list && w.list.querySelectorAll && w.list.querySelectorAll('.slick-slide img') || []; const x = F.length; let
          O = 0;
        Array.prototype.forEach.call(F, (H) => {
          const U = function () {
            return ++O && O >= x && w.onWindowResized();
          };
          if (!H.onclick) {
            H.onclick = function () {
              return H.parentNode.focus();
            };
          } else {
            const $ = H.onclick;
            H.onclick = function (q) {
              $(q), H.parentNode.focus();
            };
          }
          H.onload || (w.props.lazyLoad ? H.onload = function () {
            w.adaptHeight(), w.callbackTimers.push(setTimeout(w.onWindowResized, w.props.speed));
          } : (H.onload = U, H.onerror = function () {
            U(), w.props.onLazyLoadError && w.props.onLazyLoadError();
          }));
        });
      }), E(_(w), 'progressiveLazyLoad', () => {
        for (var F = [], x = S(S({}, w.props), w.state), O = w.state.currentSlide; O < w.state.slideCount + (0, n.getPostClones)(x); O++) {
          if (w.state.lazyLoadedList.indexOf(O) < 0) {
            F.push(O);
            break;
          }
        }
        for (let H = w.state.currentSlide - 1; H >= -(0, n.getPreClones)(x); H--) {
          if (w.state.lazyLoadedList.indexOf(H) < 0) {
            F.push(H);
            break;
          }
        }
        F.length > 0 ? (w.setState((U) => ({
          lazyLoadedList: U.lazyLoadedList.concat(F),
        })), w.props.onLazyLoad && w.props.onLazyLoad(F)) : w.lazyLoadTimer && (clearInterval(w.lazyLoadTimer), delete w.lazyLoadTimer);
      }), E(_(w), 'slideHandler', function (F) {
        const x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; const O = w.props; const H = O.asNavFor; const U = O.beforeChange; const $ = O.onLazyLoad; const q = O.speed; const G = O.afterChange; const W = w.state.currentSlide; const ht = (0, n.slideHandler)(S(S(S({
          index: F,
        }, w.props), w.state), {}, {
          trackRef: w.track,
          useCSS: w.props.useCSS && !x,
        })); const ct = ht.state; const
          dt = ht.nextState;
        if (ct) {
          U && U(W, ct.currentSlide);
          const ut = ct.lazyLoadedList.filter((rt) => w.state.lazyLoadedList.indexOf(rt) < 0);
          $ && ut.length > 0 && $(ut), !w.props.waitForAnimate && w.animationEndCallback && (clearTimeout(w.animationEndCallback), G && G(W), delete w.animationEndCallback), w.setState(ct, () => {
            H && w.asNavForIndex !== F && (w.asNavForIndex = F, H.innerSlider.slideHandler(F)), dt && (w.animationEndCallback = setTimeout(() => {
              const rt = dt.animating; const
                nt = g(dt, ['animating']);
              w.setState(nt, () => {
                w.callbackTimers.push(setTimeout(() => w.setState({
                  animating: rt,
                }), 10)), G && G(ct.currentSlide), delete w.animationEndCallback;
              });
            }, q));
          });
        }
      }), E(_(w), 'changeSlide', function (F) {
        const x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; const O = S(S({}, w.props), w.state); const
          H = (0, n.changeSlide)(O, F);
        if (!(H !== 0 && !H) && (x === !0 ? w.slideHandler(H, x) : w.slideHandler(H), w.props.autoplay && w.autoPlay('update'), w.props.focusOnSelect)) {
          const U = w.list.querySelectorAll('.slick-current');
          U[0] && U[0].focus();
        }
      }), E(_(w), 'clickHandler', (F) => {
        w.clickable === !1 && (F.stopPropagation(), F.preventDefault()), w.clickable = !0;
      }), E(_(w), 'keyHandler', (F) => {
        const x = (0, n.keyHandler)(F, w.props.accessibility, w.props.rtl);
        x !== '' && w.changeSlide({
          message: x,
        });
      }), E(_(w), 'selectHandler', (F) => {
        w.changeSlide(F);
      }), E(_(w), 'disableBodyScroll', () => {
        const F = function (O) {
          O = O || window.event, O.preventDefault && O.preventDefault(), O.returnValue = !1;
        };
        window.ontouchmove = F;
      }), E(_(w), 'enableBodyScroll', () => {
        window.ontouchmove = null;
      }), E(_(w), 'swipeStart', (F) => {
        w.props.verticalSwiping && w.disableBodyScroll();
        const x = (0, n.swipeStart)(F, w.props.swipe, w.props.draggable);
        x !== '' && w.setState(x);
      }), E(_(w), 'swipeMove', (F) => {
        const x = (0, n.swipeMove)(F, S(S(S({}, w.props), w.state), {}, {
          trackRef: w.track,
          listRef: w.list,
          slideIndex: w.state.currentSlide,
        }));
        x && (x.swiping && (w.clickable = !1), w.setState(x));
      }), E(_(w), 'swipeEnd', (F) => {
        const x = (0, n.swipeEnd)(F, S(S(S({}, w.props), w.state), {}, {
          trackRef: w.track,
          listRef: w.list,
          slideIndex: w.state.currentSlide,
        }));
        if (x) {
          const O = x.triggerSlideHandler;
          delete x.triggerSlideHandler, w.setState(x), O !== void 0 && (w.slideHandler(O), w.props.verticalSwiping && w.enableBodyScroll());
        }
      }), E(_(w), 'touchEnd', (F) => {
        w.swipeEnd(F), w.clickable = !0;
      }), E(_(w), 'slickPrev', () => {
        w.callbackTimers.push(setTimeout(() => w.changeSlide({
          message: 'previous',
        }), 0));
      }), E(_(w), 'slickNext', () => {
        w.callbackTimers.push(setTimeout(() => w.changeSlide({
          message: 'next',
        }), 0));
      }), E(_(w), 'slickGoTo', function (F) {
        const x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (F = Number(F), isNaN(F)) return '';
        w.callbackTimers.push(setTimeout(() => w.changeSlide({
          message: 'index',
          index: F,
          currentSlide: w.state.currentSlide,
        }, x), 0));
      }), E(_(w), 'play', () => {
        let F;
        if (w.props.rtl) F = w.state.currentSlide - w.props.slidesToScroll;
        else if ((0, n.canGoNext)(S(S({}, w.props), w.state))) F = w.state.currentSlide + w.props.slidesToScroll;
        else return !1;
        w.slideHandler(F);
      }), E(_(w), 'autoPlay', (F) => {
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
      }), E(_(w), 'pause', (F) => {
        w.autoplayTimer && (clearInterval(w.autoplayTimer), w.autoplayTimer = null);
        const x = w.state.autoplaying;
        F === 'paused' ? w.setState({
          autoplaying: 'paused',
        }) : F === 'focused' ? (x === 'hovered' || x === 'playing') && w.setState({
          autoplaying: 'focused',
        }) : x === 'playing' && w.setState({
          autoplaying: 'hovered',
        });
      }), E(_(w), 'onDotsOver', () => w.props.autoplay && w.pause('hovered')), E(_(w), 'onDotsLeave', () => w.props.autoplay && w.state.autoplaying === 'hovered' && w.autoPlay('leave')), E(_(w), 'onTrackOver', () => w.props.autoplay && w.pause('hovered')), E(_(w), 'onTrackLeave', () => w.props.autoplay && w.state.autoplaying === 'hovered' && w.autoPlay('leave')), E(_(w), 'onSlideFocus', () => w.props.autoplay && w.pause('focused')), E(_(w), 'onSlideBlur', () => w.props.autoplay && w.state.autoplaying === 'focused' && w.autoPlay('blur')), E(_(w), 'render', () => {
        const F = (0, i.default)('slick-slider', w.props.className, {
          'slick-vertical': w.props.vertical,
          'slick-initialized': !0,
        }); const x = S(S({}, w.props), w.state); let O = (0, n.extractObject)(x, ['fade', 'cssEase', 'speed', 'infinite', 'centerMode', 'focusOnSelect', 'currentSlide', 'lazyLoad', 'lazyLoadedList', 'rtl', 'slideWidth', 'slideHeight', 'listHeight', 'vertical', 'slidesToShow', 'slidesToScroll', 'slideCount', 'trackStyle', 'variableWidth', 'unslick', 'centerPadding', 'targetSlide', 'useCSS']); const
          H = w.props.pauseOnHover;
        O = S(S({}, O), {}, {
          onMouseEnter: H ? w.onTrackOver : null,
          onMouseLeave: H ? w.onTrackLeave : null,
          onMouseOver: H ? w.onTrackOver : null,
          focusOnSelect: w.props.focusOnSelect && w.clickable ? w.selectHandler : null,
        });
        let U;
        if (w.props.dots === !0 && w.state.slideCount >= w.props.slidesToShow) {
          let $ = (0, n.extractObject)(x, ['dotsClass', 'slideCount', 'slidesToShow', 'currentSlide', 'slidesToScroll', 'clickHandler', 'children', 'customPaging', 'infinite', 'appendDots']); const
            q = w.props.pauseOnDotsHover;
          $ = S(S({}, $), {}, {
            clickHandler: w.changeSlide,
            onMouseEnter: q ? w.onDotsLeave : null,
            onMouseOver: q ? w.onDotsOver : null,
            onMouseLeave: q ? w.onDotsLeave : null,
          }), U = /* @__PURE__ */ h.default.createElement(a.Dots, $);
        }
        let G; let W; const
          ht = (0, n.extractObject)(x, ['infinite', 'centerMode', 'currentSlide', 'slideCount', 'slidesToShow', 'prevArrow', 'nextArrow']);
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
        const ut = S(S({}, ct), dt); const rt = w.props.touchMove; let nt = {
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
          st = {
            className: F,
            dir: 'ltr',
            style: w.props.style,
          };
        return w.props.unslick && (nt = {
          className: 'slick-list',
        }, st = {
          className: F,
          style: w.props.style,
        }), /* @__PURE__ */ h.default.createElement('div', st, w.props.unslick ? '' : G, /* @__PURE__ */ h.default.createElement('div', u({
          ref: w.listRefHandler,
        }, nt), /* @__PURE__ */ h.default.createElement(r.Track, u({
          ref: w.trackRefHandler,
        }, O), w.props.children)), w.props.unslick ? '' : W, w.props.unslick ? '' : U);
      }), w.list = null, w.track = null, w.state = S(S({}, t.default), {}, {
        currentSlide: w.props.initialSlide,
        targetSlide: w.props.initialSlide ? w.props.initialSlide : 0,
        slideCount: h.default.Children.count(w.props.children),
      }), w.callbackTimers = [], w.clickable = !0, w.debouncedResize = null;
      const K = w.ssrInit();
      return w.state = S(S({}, w.state), K), w;
    }
    return M(j, [{
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
  Kg;
function rw() {
  if (Kg) return Pf;
  Kg = 1;
  const h = function (t) {
    return t.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`).toLowerCase();
  };
  return Pf = h, Pf;
}
let kf; let
  Jg;
function aw() {
  if (Jg) return kf;
  Jg = 1;
  const h = rw(); const t = function (n) {
    const r = /[height|width]$/;
    return r.test(n);
  }; const e = function (n) {
    let r = '';
    const a = Object.keys(n);
    return a.forEach((o, l) => {
      let c = n[o];
      o = h(o), t(o) && typeof c === 'number' && (c += 'px'), c === !0 ? r += o : c === !1 ? r += `not ${o}` : r += `(${o}: ${c})`, l < a.length - 1 && (r += ' and ');
    }), r;
  }; const
    i = function (n) {
      let r = '';
      return typeof n === 'string' ? n : n instanceof Array ? (n.forEach((a, o) => {
        r += e(a), o < n.length - 1 && (r += ', ');
      }), r) : e(n);
    };
  return kf = i, kf;
}
let Qg;
function ow() {
  return Qg || (Qg = 1, (function (h) {
    Object.defineProperty(h, '__esModule', {
      value: !0,
    }), h.default = void 0;
    const t = a(Gi); const e = sw(); const i = a(aw()); const n = a(Wm()); const
      r = Td();
    function a(T) {
      return T && T.__esModule ? T : { default: T };
    }
    function o(T) {
      '@babel/helpers - typeof';

      return o = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (P) {
        return typeof P;
      } : function (P) {
        return P && typeof Symbol === 'function' && P.constructor === Symbol && P !== Symbol.prototype ? 'symbol' : typeof P;
      }, o(T);
    }
    function l() {
      return l = Object.assign ? Object.assign.bind() : function (T) {
        for (let P = 1; P < arguments.length; P++) {
          const E = arguments[P];
          for (const D in E) ({}).hasOwnProperty.call(E, D) && (T[D] = E[D]);
        }
        return T;
      }, l.apply(null, arguments);
    }
    function c(T, P) {
      const E = Object.keys(T);
      if (Object.getOwnPropertySymbols) {
        let D = Object.getOwnPropertySymbols(T);
        P && (D = D.filter((N) => Object.getOwnPropertyDescriptor(T, N).enumerable)), E.push.apply(E, D);
      }
      return E;
    }
    function d(T) {
      for (let P = 1; P < arguments.length; P++) {
        var E = arguments[P] != null ? arguments[P] : {};
        P % 2 ? c(Object(E), !0).forEach((D) => {
          f(T, D, E[D]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(E)) : c(Object(E)).forEach((D) => {
          Object.defineProperty(T, D, Object.getOwnPropertyDescriptor(E, D));
        });
      }
      return T;
    }
    function u(T, P) {
      if (!(T instanceof P)) throw new TypeError('Cannot call a class as a function');
    }
    function g(T, P) {
      for (let E = 0; E < P.length; E++) {
        const D = P[E];
        D.enumerable = D.enumerable || !1, D.configurable = !0, 'value' in D && (D.writable = !0), Object.defineProperty(T, y(D.key), D);
      }
    }
    function b(T, P, E) {
      return P && g(T.prototype, P), Object.defineProperty(T, 'prototype', { writable: !1 }), T;
    }
    function C(T, P) {
      if (typeof P !== 'function' && P !== null) throw new TypeError('Super expression must either be null or a function');
      T.prototype = Object.create(P && P.prototype, { constructor: { value: T, writable: !0, configurable: !0 } }), Object.defineProperty(T, 'prototype', { writable: !1 }), P && S(T, P);
    }
    function S(T, P) {
      return S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (E, D) {
        return E.__proto__ = D, E;
      }, S(T, P);
    }
    function L(T) {
      const P = R();
      return function () {
        let E; const
          D = p(T);
        if (P) {
          const N = p(this).constructor;
          E = Reflect.construct(D, arguments, N);
        } else E = D.apply(this, arguments);
        return k(this, E);
      };
    }
    function k(T, P) {
      if (P && (o(P) == 'object' || typeof P === 'function')) return P;
      if (P !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
      return M(T);
    }
    function M(T) {
      if (T === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return T;
    }
    function R() {
      try {
        var T = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
        }));
      } catch {
      }
      return (R = function () {
        return !!T;
      })();
    }
    function p(T) {
      return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (P) {
        return P.__proto__ || Object.getPrototypeOf(P);
      }, p(T);
    }
    function f(T, P, E) {
      return (P = y(P)) in T ? Object.defineProperty(T, P, {
        value: E, enumerable: !0, configurable: !0, writable: !0,
      }) : T[P] = E, T;
    }
    function y(T) {
      const P = _(T, 'string');
      return o(P) == 'symbol' ? P : `${P}`;
    }
    function _(T, P) {
      if (o(T) != 'object' || !T) return T;
      const E = T[Symbol.toPrimitive];
      if (E !== void 0) {
        const D = E.call(T, P);
        if (o(D) != 'object') return D;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return (P === 'string' ? String : Number)(T);
    }
    h.default = /* @__PURE__ */ (function (T) {
      C(E, T);
      const P = L(E);
      function E(D) {
        let N;
        return u(this, E), N = P.call(this, D), f(M(N), 'innerSliderRefHandler', (I) => N.innerSlider = I), f(M(N), 'slickPrev', () => N.innerSlider.slickPrev()), f(M(N), 'slickNext', () => N.innerSlider.slickNext()), f(M(N), 'slickGoTo', function (I) {
          const B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return N.innerSlider.slickGoTo(I, B);
        }), f(M(N), 'slickPause', () => N.innerSlider.pause('paused')), f(M(N), 'slickPlay', () => N.innerSlider.autoPlay('play')), N.state = {
          breakpoint: null,
        }, N._responsiveMediaHandlers = [], N;
      }
      return b(E, [{
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
          this.state.breakpoint ? (B = this.props.responsive.filter(($) => $.breakpoint === N.state.breakpoint), I = B[0].settings === 'unslick' ? 'unslick' : d(d(d({}, n.default), this.props), B[0].settings)) : I = d(d({}, n.default), this.props), I.centerMode && (I.slidesToScroll > 1 && process.env.NODE_ENV !== 'production' && console.warn('slidesToScroll should be equal to 1 in centerMode, you are using '.concat(I.slidesToScroll)), I.slidesToScroll = 1), I.fade && (I.slidesToShow > 1 && process.env.NODE_ENV !== 'production' && console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(I.slidesToShow)), I.slidesToScroll > 1 && process.env.NODE_ENV !== 'production' && console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(I.slidesToScroll)), I.slidesToShow = 1, I.slidesToScroll = 1);
          let j = t.default.Children.toArray(this.props.children);
          j = j.filter(($) => (typeof $ === 'string' ? !!$.trim() : !!$)), I.variableWidth && (I.rows > 1 || I.slidesPerRow > 1) && (console.warn('variableWidth is not supported in case of rows > 1 or slidesPerRow > 1'), I.variableWidth = !1);
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
            const U = `regular slider ${this.props.className || ''}`;
            return /* @__PURE__ */ t.default.createElement('div', {
              className: U,
            }, j);
          } z.length <= I.slidesToShow && (I.unslick = !0);
          return /* @__PURE__ */ t.default.createElement(e.InnerSlider, l({
            style: this.props.style,
            ref: this.innerSliderRefHandler,
          }, (0, r.filterSettings)(I)), z);
        },
      }]), E;
    }(t.default.Component));
  }(_f))), _f;
}
let Zg;
function lw() {
  return Zg || (Zg = 1, (function (h) {
    Object.defineProperty(h, '__esModule', {
      value: !0,
    }), h.default = void 0;
    const t = e(ow());
    function e(i) {
      return i && i.__esModule ? i : { default: i };
    }
    h.default = t.default;
  }(Af))), Af;
}
const hw = lw();
const cw = /* @__PURE__ */ Um(hw); const dw = ({
  text: h = 'Button',
  href: t = void 0,
  variant: e = 'light',
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline
  size: i = 'btn-md',
  // btn-sm , btn-md
  className: n = '',
  disabled: r = !1,
  onClick: a = void 0,
  attributes: o = {},
  ...l
}) => {
  const d = (b) => {
    switch (b) {
      case 'light':
        return 'btn-light';
      case 'dark':
        return 'btn-dark';
      case 'light-outlined':
        return 'btn-light-outlined';
      case 'dark-outlined':
        return 'btn-dark-outlined';
      case 'light-no-outline':
        return 'btn-light-no-outline';
      case 'dark-no-outline':
        return 'btn-dark-no-outline';
      default:
        return 'btn-light';
    }
  }; const u = (b) => {
    switch (b) {
      case 'btn-sm':
        return 'btn-sm';
      case 'btn-md':
        return 'btn-md';
      default:
        return 'btn-md';
    }
  }; const
    g = `btn ${d(e)} ${u(i)} ${n}`.trim();
  return t ? /* @__PURE__ */ X(
    'a',
    {
      href: t,
      className: g,
      onClick: a,
      ...l,
      ...o ?? {},
      children: h,
    },
  ) : /* @__PURE__ */ X(
    'button',
    {
      type: l.type || 'button',
      className: g,
      disabled: r,
      onClick: a,
      ...l,
      ...o ?? {},
      children: h,
    },
  );
}; const uw = Tv(() => Promise.resolve().then(() => Sw)); const fw = ({
  media: h = 'image',
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: t = 'default',
  // 'default' | 'rectangle' | 'square'
  objectFit: e = 'cover',
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: i,
  videoUrl: n,
  lottieUrl: r,
  lottieData: a,
  iframeUrl: o,
  flipbookUrl: l,
  title: c,
  className: d = '',
}) => {
  let y;
  const u = typeof window < 'u' && window.location.origin.indexOf('author') > -1; const g = typeof window < 'u' && window.matchMedia('(prefers-reduced-motion: reduce)').matches; const C = `relative w-full h-full ${t === 'square' ? 'aspect-square' : t === 'rectangle' ? 'aspect-[4/3]' : h === 'video' ? 'aspect-video' : ''}`.trim(); const S = t === 'default' ? `w-full h-full ${d}`.trim() : `absolute inset-0 w-full h-full ${d}`.trim(); const L = 'w-full h-full'; const k = t === 'default' ? `${S}`.trim() : S; const M = e === 'contain' ? 'object-contain' : 'object-cover'; const R = e === 'contain' ? 'xMidYMid meet' : 'xMidYMid slice'; const p = `relative w-full ${d}`.trim(); const
    f = 'w-full min-h-[280px]';
  switch (h) {
    case 'image':
      if (i) {
        return /* @__PURE__ */ X('div', {
          className: C,
          children: /* @__PURE__ */ X(
            'img',
            {
              src: i,
              alt: c || 'Media image',
              className: `${M} ${S}`.trim(),
              loading: 'lazy',
            },
          ),
        });
      }
      break;
    case 'video':
      if (n) {
        const _ = n.includes('youtube.com/watch') || n.includes('youtu.be/');
        let T = n;
        _ && (T = `https://www.youtube.com/embed/${n.includes('youtu.be/') ? n.split('youtu.be/')[1].split('?')[0] : (y = n.split('v=')[1]) == null ? void 0 : y.split('&')[0]}`);
        const P = (() => {
          if (!_) return T;
          try {
            const E = new URL(T);
            return E.searchParams.set('autoplay', '0'), E.searchParams.set('mute', '0'), E.searchParams.set('playsinline', '1'), E.searchParams.set('controls', '1'), E.searchParams.set('rel', '0'), E.toString();
          } catch {
            return T.includes('?') ? T.includes('autoplay=') ? T : `${T}&autoplay=0` : `${T}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ X('div', {
          className: C,
          children: _ ? /* @__PURE__ */ X(
            'iframe',
            {
              src: P,
              title: c || 'Video player',
              frameBorder: '0',
              allow: 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
              allowFullScreen: !0,
              className: `${S} ${M}`.trim(),
            },
          ) : /* @__PURE__ */ X(
            'video',
            {
              className: `${S} ${M}`.trim(),
              autoPlay: !1,
              controls: !0,
              playsInline: !0,
              preload: 'metadata',
              title: c || 'Video player',
              children: /* @__PURE__ */ X('source', { src: n }),
            },
          ),
        });
      }
      break;
    case 'lottie':
      if (a) {
        return u ? /* @__PURE__ */ X('div', {
          className: C,
          role: 'img',
          'aria-label': c || 'Animation',
          children: /* @__PURE__ */ X(
            'div',
            {
              className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${S}`.trim(),
              children: /* @__PURE__ */ X('div', { className: 'text-center', children: 'Lottie preview' }),
            },
          ),
        }) : /* @__PURE__ */ X(
          'div',
          {
            className: C,
            role: 'img',
            'aria-label': c || 'Animation',
            children: /* @__PURE__ */ X('div', {
              className: `${S} overflow-hidden`.trim(),
              children: /* @__PURE__ */ X(
                Lv,
                {
                  animationData: a,
                  loop: !g,
                  autoplay: !g,
                  className: L,
                  style: { width: '100%', height: '100%' },
                  rendererSettings: { preserveAspectRatio: R },
                },
              ),
            }),
          },
        );
      }
      if (r) return /* @__PURE__ */ X('div', { className: C, children: /* @__PURE__ */ X('div', { className: 'absolute inset-0 flex items-center justify-center text-body-default text-center p-40', children: 'Loading Lottie animation...' }) });
      break;
    case 'iframe':
      if (o) {
        return /* @__PURE__ */ X('div', {
          className: C,
          children: /* @__PURE__ */ X(
            'iframe',
            {
              src: o,
              title: c || 'Iframe content',
              frameBorder: '0',
              className: `${k} ${M}`.trim(),
            },
          ),
        });
      }
      break;
    case 'flipbook':
      if (l) {
        return u ? /* @__PURE__ */ X('div', {
          className: p,
          role: 'img',
          'aria-label': c || 'Flipbook',
          children: /* @__PURE__ */ X(
            'div',
            {
              className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${f}`.trim(),
              children: /* @__PURE__ */ X('div', { className: 'text-center', children: 'Flipbook preview' }),
            },
          ),
        }) : /* @__PURE__ */ X('div', { className: p, children: /* @__PURE__ */ X('div', { className: f, children: /* @__PURE__ */ X(Pv, { fallback: /* @__PURE__ */ X('div', { children: 'Loading PDF...' }), children: /* @__PURE__ */ X(uw, { pdfUrl: l, title: c, className: 'w-full' }) }) }) });
      }
      break;
  }
  return /* @__PURE__ */ X('div', { className: C, children: /* @__PURE__ */ X('div', { className: `flex items-center justify-center text-body-default text-center p-40 ${t === 'default' ? '' : 'absolute inset-0'}`.trim(), children: h ? `${h.charAt(0).toUpperCase() + h.slice(1)} placeholder` : 'Image/Video/Lottie/iframe' }) });
}; const pw = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
  white: 'text-white',
}; const gw = {
  primary: 'from-primary',
  secondary: 'from-secondary',
  tertiary: 'from-tertiary',
  white: 'from-white',
}; const mw = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  tertiary: 'bg-tertiary',
  white: 'bg-white',
}; const
  tm = {
    verticalContentFirst: {
      primary: 'bg-gradient-to-b from-primary to-transparent',
      secondary: 'bg-gradient-to-b from-secondary to-transparent',
      tertiary: 'bg-gradient-to-b from-tertiary to-transparent',
      white: 'bg-gradient-to-b from-white to-transparent',
    },
    verticalMediaFirst: {
      primary: 'bg-gradient-to-t from-primary to-transparent',
      secondary: 'bg-gradient-to-t from-secondary to-transparent',
      tertiary: 'bg-gradient-to-t from-tertiary to-transparent',
      white: 'bg-gradient-to-t from-white to-transparent',
    },
  };
function mA({
  slides: h = [],
  order: t = 'content-first',
  mediaStyle: e = 'flush',
  mobileOverlay: i = !1,
  overlayColor: n = 'secondary',
  buttonSize: r = 'btn-md',
  carouselLabel: a = 'Hero content',
  className: o = '',
  id: l = '',
  infinite: c,
  ...d
}) {
  if (!(h != null && h.length)) return null;
  const [u, g] = Vr(0); const b = oi(null); const C = typeof window < 'u' && window.location.origin.indexOf('author') > -1; const S = t === 'content-first'; const L = e === 'framed'; const k = h[u] ?? h[0]; const
    M = (k == null ? void 0 : k.title) || (k == null ? void 0 : k.description) || '';
  It(() => {
    const T = () => {
      const E = b.current;
      E && E.querySelectorAll('.slick-slide').forEach((D) => {
        D.getAttribute('aria-hidden') === 'true' ? D.setAttribute('inert', '') : D.removeAttribute('inert');
      });
    }; const
      P = window.requestAnimationFrame(T);
    return () => window.cancelAnimationFrame(P);
  }, [u, h.length]);
  const R = {
    dots: !0,
    infinite: c ?? h.length > 1,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !C,
    arrows: !1,
    pauseOnHover: !0,
    pauseOnFocus: !0,
    cssEase: 'linear',
    afterChange: g,
    customPaging: (T) => /* @__PURE__ */ X(
      'button',
      {
        type: 'button',
        'aria-label': u === T ? `Current slide, slide ${T + 1} of ${h.length}` : `Go to slide ${T + 1} of ${h.length}`,
        'aria-current': u === T ? 'true' : void 0,
      },
    ),
  };
  function p({ slide: T, slideIndex: P }) {
    const {
      titleAccent: E, titleAccentColor: D, title: N, description: I, buttons: B, logos: j, widget: z,
    } = T; const w = h.length > 1 && P > 0 ? 'h2' : 'h1'; const F = ['font-accent font-normal m-0 text-display-xl leading-display-xl', pw[D] || 'text-white'].filter(Boolean).join(' '); const
      x = i ? mw[n] || 'bg-secondary' : 'bg-grey-700';
    return /* @__PURE__ */ Yn('div', {
      className: `${x} flex flex-col justify-center gap-hero-spacing px-hero-padding-x py-hero-padding-y text-left`,
      children: [
      /* @__PURE__ */ Yn('div', {
          className: 'spacing-y-hero-text--spacing-y',
          children: [
            E && /* @__PURE__ */ X('p', { className: F, children: E }),
            N && /* @__PURE__ */ X(w, { className: 'text-white font-normal m-0 text-display-xl', children: N }),
            I && /* @__PURE__ */ X('p', { className: 'm-0 text-body-large leading-body-large text-white', children: I }),
          ],
        }),
        (B == null ? void 0 : B.length) > 0 && /* @__PURE__ */ X('div', {
          className: 'flex flex-wrap gap-10',
          children: B.map((O, H) => /* @__PURE__ */ X(dw, {
            text: O.text, href: O.href, variant: O.variant ?? 'light', size: O.size ?? r, onClick: O.onClick, className: 'flex-shrink-0 max-sm:w-full',
          }, H)),
        }),
        (j == null ? void 0 : j.length) > 0 && /* @__PURE__ */ X('div', { className: 'flex items-center flex-wrap gap-8 max-sm:w-full', children: j.map((O, H) => /* @__PURE__ */ X('div', { className: 'flex items-center justify-center max-w-[119px] h-[46px]', children: /* @__PURE__ */ X('img', { src: O.src, alt: O.alt ?? '', className: 'w-full h-full object-contain rounded-10 max-w-full' }) }, H)) }),
        z && /* @__PURE__ */ X('div', { className: 'w-full', children: /* @__PURE__ */ X('div', { className: 'w-full', dangerouslySetInnerHTML: { __html: z } }) }),
      ],
    });
  }
  function f({ slide: T }) {
    const P = T.media;
    if (P) {
      const E = gw[n] ? n : 'secondary';
      const D = S ? tm.verticalContentFirst[E] : tm.verticalMediaFirst[E];
      return /* @__PURE__ */ X('div', {
        className: `relative flex items-center justify-center w-full ${L ? 'p-hero-image--padding' : ''}`,
        children: /* @__PURE__ */ Yn('div', {
          className: `relative w-full aspect-[393/310] md:aspect-[834/500] lg:aspect-[756/598] overflow-hidden ${L ? 'rounded-[var(--spacing-hero-image--br)]' : ''}`,
          children: [
            /* @__PURE__ */ X(
              fw,
              {
                media: P.type ?? 'image',
                aspect: 'default',
                imageUrl: P.imageUrl,
                videoUrl: P.videoUrl,
                lottieUrl: P.lottieUrl,
                lottieData: P.lottieData,
                iframeUrl: P.iframeUrl,
                title: P.title ?? '',
                className: 'w-full h-full object-cover',
              },
            ),
            i && /* @__PURE__ */ X('div', { 'aria-hidden': !0, className: `absolute inset-0 pointer-events-none ${D} lg:hidden` }),
          ],
        }),
      });
    } return null;
  }
  const _ = [
    'hero-slider relative w-full overflow-hidden',
    h.length > 1 && !L && 'hero-slider--dots-absolute',
    o,
  ].filter(Boolean).join(' ');
  return /* @__PURE__ */ Yn(
    'div',
    {
      ref: b,
      className: _,
      id: l,
      role: 'region',
      'aria-roledescription': 'carousel',
      'aria-label': a,
      ...d,
      children: [
        /* @__PURE__ */ Yn('div', {
          'aria-live': 'polite',
          'aria-atomic': 'true',
          className: 'sr-only',
          children: [
            'Slide ',
            u + 1,
            ' of ',
            h.length,
            M ? `: ${M}` : '',
          ],
        }),
        /* @__PURE__ */ X(cw, {
          ...R,
          className: 'w-full hero-slider-slick',
          children: h.map((T, P) => /* @__PURE__ */ X('div', {
            className: 'outline-none',
            ...T.attributes || {},
            children: /* @__PURE__ */ X('div', {
              className: 'grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]',
              children: S ? /* @__PURE__ */ Yn(Hg, {
                children: [
                  /* @__PURE__ */ X(p, { slide: T, slideIndex: P }),
                  /* @__PURE__ */ X(f, { slide: T }),
                ],
              }) : /* @__PURE__ */ Yn(Hg, {
                children: [
                  /* @__PURE__ */ X(f, { slide: T }),
                  /* @__PURE__ */ X(p, { slide: T, slideIndex: P }),
                ],
              }),
            }),
          }, T.key ?? P)),
        }),
      ],
    },
  );
}
let zf; let Km; let $f; let
  Hd;
const yw = async () => {
  if (!Hd) {
    const h = await Promise.resolve().then(() => rA);
    Hd = h.pdfjs, Km = h.Document, $f = h.Page, Hd.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${Hd.version}/build/pdf.worker.min.mjs`;
  }
}; const bw = async () => {
  zf || (zf = (await Promise.resolve().then(() => dA)).default);
}; const vw = Hm(({ children: h }, t) => /* @__PURE__ */ X('div', { ref: t, className: 'w-full h-full overflow-hidden', children: h })); const ww = ({
  pdfUrl: h, title: t, width: e = 280, height: i = 280, className: n = '',
}) => {
  const [r, a] = Vr(0); const [o, l] = Vr(null); const [c, d] = Vr(!0); const [u, g] = Vr(i / e); const [b, C] = Vr(0); const
    S = oi(null);
  It(() => {
    Promise.all([yw(), bw()]).then(() => d(!1)).catch(() => {
      l('Failed to load flipbook');
    });
  }, []), It(() => {
    const p = S.current;
    if (!p) return;
    const f = new ResizeObserver(([y]) => {
      const _ = Math.floor(y.contentRect.width);
      _ > 0 && C(_);
    });
    return f.observe(p), () => f.disconnect();
  }, [c]);
  const L = b > 0 ? Math.floor(b / 2) : Math.floor(e / 2); const k = Math.round(L * u); const M = $n(async (p) => {
    try {
      const y = (await p.getPage(1)).getViewport({ scale: 1 });
      y != null && y.width && (y != null && y.height) && g(y.height / y.width);
    } catch {
    }
    a(p.numPages || 0);
  }, []); const
    R = $n((p) => {
      l((p == null ? void 0 : p.message) || 'Failed to load PDF');
    }, []);
  return o ? /* @__PURE__ */ X('div', { className: 'flex items-center justify-center text-body-default text-center p-40', children: 'Failed to load flipbook' }) : c ? /* @__PURE__ */ X('div', { className: 'flex items-center justify-center text-body-default text-center p-40', children: 'Loading flipbook...' }) : /* @__PURE__ */ X('div', {
    ref: S,
    className: `w-full ${n}`.trim(),
    children: /* @__PURE__ */ Yn(
      Km,
      {
        file: h,
        onLoadSuccess: M,
        onLoadError: R,
        loading: /* @__PURE__ */ X('div', { className: 'flex items-center justify-center text-body-default text-center p-40', children: 'Loading flipbook...' }),
        children: [
          r === 1 && /* @__PURE__ */ X(
            'div',
            {
              className: `w-full flex justify-center items-center ${n}`.trim(),
              style: { minHeight: `${k}px` },
              children: /* @__PURE__ */ X($f, {
                pageNumber: 1, width: e, renderTextLayer: !1, renderAnnotationLayer: !1,
              }),
            },
          ),
          r > 1 && /* @__PURE__ */ X(
            zf,
            {
              width: L,
              height: k,
              size: 'stretch',
              showCover: !0,
              mobileScrollSupport: !1,
              'aria-label': t || 'Flipbook',
              children: Array.from({ length: r }, (p, f) => /* @__PURE__ */ X(vw, {
                children: /* @__PURE__ */ X($f, {
                  pageNumber: f + 1, width: L, renderTextLayer: !1, renderAnnotationLayer: !1,
                }),
              }, f)),
            },
            `${L}-${k}`,
          ),
        ],
      },
    ),
  });
}; const Sw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ww,
}, Symbol.toStringTag, { value: 'Module' })); const Xe = typeof process === 'object' && `${process}` == '[object process]' && !process.versions.nw && !(process.versions.electron && process.type && process.type !== 'browser'); const Uf = [1e-3, 0, 0, 1e-3, 0, 0]; const Rf = 1.35; const Ci = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256,
}; const jn = {
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
}; const Jm = {
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
}; const ne = {
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
}; const go = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5,
}; const Pd = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5,
}; const sh = {
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
  Qm = {
    NEED_PASSWORD: 1,
    INCORRECT_PASSWORD: 2,
  };
let cf = Pd.WARNINGS;
function Aw(h) {
  Number.isInteger(h) && (cf = h);
}
function _w() {
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
function xw(h) {
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
      const n = h.match(/\./g);
      (n == null ? void 0 : n.length) >= 2 && (h = `http://${h}`);
    }
    if (e.tryConvertEncoding) {
      try {
        h = kw(h);
      } catch {
      }
    }
  }
  const i = t ? URL.parse(h, t) : URL.parse(h);
  return xw(i) ? i : null;
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
const co = (function () {
  function t(e, i) {
    this.message = e, this.name = i;
  }
  return t.prototype = new Error(), t.constructor = t, t;
}());
class em extends co {
  constructor(t, e) {
    super(t, 'PasswordException'), this.code = e;
  }
}
class Lf extends co {
  constructor(t, e) {
    super(t, 'UnknownErrorException'), this.details = e;
  }
}
class Ru extends co {
  constructor(t) {
    super(t, 'InvalidPDFException');
  }
}
class jh extends co {
  constructor(t, e, i) {
    super(t, 'ResponseException'), this.status = e, this.missing = i;
  }
}
class Ew extends co {
  constructor(t) {
    super(t, 'FormatError');
  }
}
class Os extends co {
  constructor(t) {
    super(t, 'AbortException');
  }
}
function Zm(h) {
  (typeof h !== 'object' || (h == null ? void 0 : h.length) === void 0) && zt('Invalid argument for bytesToString');
  const t = h.length; const
    e = 8192;
  if (t < e) return String.fromCharCode.apply(null, h);
  const i = [];
  for (let n = 0; n < t; n += e) {
    const r = Math.min(n + e, t); const
      a = h.subarray(n, r);
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
function Cw(h) {
  return String.fromCharCode(h >> 24 & 255, h >> 16 & 255, h >> 8 & 255, h & 255);
}
function Tw() {
  const h = new Uint8Array(4);
  return h[0] = 1, new Uint32Array(h.buffer, 0, 1)[0] === 1;
}
function Pw() {
  try {
    return new Function(''), !0;
  } catch {
    return !1;
  }
}
class _e {
  static get isLittleEndian() {
    return yt(this, 'isLittleEndian', Tw());
  }

  static get isEvalSupported() {
    return yt(this, 'isEvalSupported', Pw());
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
const Mf = Array.from(Array(256).keys(), (h) => h.toString(16).padStart(2, '0'));
let Ms; let Kd; let
  Wf;
class tt {
  static makeHexColor(t, e, i) {
    return `#${Mf[t]}${Mf[e]}${Mf[i]}`;
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
    const n = t[i]; const
      r = t[i + 1];
    t[i] = n * e[0] + r * e[2] + e[4], t[i + 1] = n * e[1] + r * e[3] + e[5];
  }

  static applyTransformToBezier(t, e, i = 0) {
    const n = e[0]; const r = e[1]; const a = e[2]; const o = e[3]; const l = e[4]; const
      c = e[5];
    for (let d = 0; d < 6; d += 2) {
      const u = t[i + d]; const
        g = t[i + d + 1];
      t[i + d] = u * n + g * a + l, t[i + d + 1] = u * r + g * o + c;
    }
  }

  static applyInverseTransform(t, e) {
    const i = t[0]; const n = t[1]; const
      r = e[0] * e[3] - e[1] * e[2];
    t[0] = (i * e[3] - n * e[2] + e[2] * e[5] - e[4] * e[3]) / r, t[1] = (-i * e[1] + n * e[0] + e[4] * e[1] - e[5] * e[0]) / r;
  }

  static axialAlignedBoundingBox(t, e, i) {
    const n = e[0]; const r = e[1]; const a = e[2]; const o = e[3]; const l = e[4]; const c = e[5]; const d = t[0]; const u = t[1]; const g = t[2]; const
      b = t[3];
    let C = n * d + l; let S = C; let L = n * g + l; let k = L; let M = o * u + c; let R = M; let p = o * b + c; let
      f = p;
    if (r !== 0 || a !== 0) {
      const y = r * d; const _ = r * g; const T = a * u; const
        P = a * b;
      C += T, k += T, L += P, S += P, M += y, f += y, p += _, R += _;
    }
    i[0] = Math.min(i[0], C, L, S, k), i[1] = Math.min(i[1], M, p, R, f), i[2] = Math.max(i[2], C, L, S, k), i[3] = Math.max(i[3], M, p, R, f);
  }

  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }

  static singularValueDecompose2dScale(t, e) {
    const i = t[0]; const n = t[1]; const r = t[2]; const a = t[3]; const o = i ** 2 + n ** 2; const l = i * r + n * a; const c = r ** 2 + a ** 2; const d = (o + c) / 2; const
      u = Math.sqrt(d ** 2 - (o * c - l ** 2));
    e[0] = Math.sqrt(d + u || 1), e[1] = Math.sqrt(d - u || 1);
  }

  static normalizeRect(t) {
    const e = t.slice(0);
    return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
  }

  static intersect(t, e) {
    const i = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])); const
      n = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (i > n) return null;
    const r = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])); const
      a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    return r > a ? null : [i, r, n, a];
  }

  static pointBoundingBox(t, e, i) {
    i[0] = Math.min(i[0], t), i[1] = Math.min(i[1], e), i[2] = Math.max(i[2], t), i[3] = Math.max(i[3], e);
  }

  static rectBoundingBox(t, e, i, n, r) {
    r[0] = Math.min(r[0], t, i), r[1] = Math.min(r[1], e, n), r[2] = Math.max(r[2], t, i), r[3] = Math.max(r[3], e, n);
  }

  static bezierBoundingBox(t, e, i, n, r, a, o, l, c) {
    c[0] = Math.min(c[0], t, o), c[1] = Math.min(c[1], e, l), c[2] = Math.max(c[2], t, o), c[3] = Math.max(c[3], e, l), A(this, Ms, Wf).call(this, t, i, r, o, e, n, a, l, 3 * (-t + 3 * (i - r) + o), 6 * (t - 2 * i + r), 3 * (i - t), c), A(this, Ms, Wf).call(this, t, i, r, o, e, n, a, l, 3 * (-e + 3 * (n - a) + l), 6 * (e - 2 * n + a), 3 * (n - e), c);
  }
}
Ms = new WeakSet(), Kd = function (t, e, i, n, r, a, o, l, c, d) {
  if (c <= 0 || c >= 1) return;
  const u = 1 - c; const g = c * c; const b = g * c; const C = u * (u * (u * t + 3 * c * e) + 3 * g * i) + b * n; const
    S = u * (u * (u * r + 3 * c * a) + 3 * g * o) + b * l;
  d[0] = Math.min(d[0], C), d[1] = Math.min(d[1], S), d[2] = Math.max(d[2], C), d[3] = Math.max(d[3], S);
}, Wf = function (t, e, i, n, r, a, o, l, c, d, u, g) {
  if (Math.abs(c) < 1e-12) {
    Math.abs(d) >= 1e-12 && A(this, Ms, Kd).call(this, t, e, i, n, r, a, o, l, -u / d, g);
    return;
  }
  const b = d ** 2 - 4 * u * c;
  if (b < 0) return;
  const C = Math.sqrt(b); const
    S = 2 * c;
  A(this, Ms, Kd).call(this, t, e, i, n, r, a, o, l, (-d + C) / S, g), A(this, Ms, Kd).call(this, t, e, i, n, r, a, o, l, (-d - C) / S, g);
}, v(tt, Ms);
function kw(h) {
  return decodeURIComponent(escape(h));
}
let Df = null; let
  im = null;
function ty(h) {
  return Df || (Df = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, im = /* @__PURE__ */ new Map([['ﬅ', 'ſt']])), h.replaceAll(Df, (t, e, i) => (e ? e.normalize('NFKC') : im.get(i)));
}
function bg() {
  if (typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  const h = new Uint8Array(32);
  return crypto.getRandomValues(h), Zm(h);
}
const vg = 'pdfjs_internal_id_';
function Rw(h, t, e) {
  if (!Array.isArray(e) || e.length < 2) return !1;
  const [i, n, ...r] = e;
  if (!h(i) && !Number.isInteger(i) || !t(n)) return !1;
  const a = r.length;
  let o = !0;
  switch (n.name) {
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
function ey(h) {
  return Uint8Array.prototype.toBase64 ? h.toBase64() : btoa(Zm(h));
}
function Lw(h) {
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
    function n(r) {
      let l;
      if (!r) return;
      let a = null;
      const o = r.name;
      if (o === '#text') a = r.value;
      else if (zh.shouldBuildText(o)) (l = r == null ? void 0 : r.attributes) != null && l.textContent ? a = r.attributes.textContent : r.value && (a = r.value);
      else return;
      if (a !== null && e.push({
        str: a,
      }), !!r.children) for (const c of r.children) n(c);
    }
    return n(t), i;
  }

  static shouldBuildText(t) {
    return !(t === 'textarea' || t === 'input' || t === 'option' || t === 'select');
  }
}
class wg {
  static setupStorage(t, e, i, n, r) {
    const a = n.getValue(e, {
      value: null,
    });
    switch (i.name) {
      case 'textarea':
        if (a.value !== null && (t.textContent = a.value), r === 'print') break;
        t.addEventListener('input', (o) => {
          n.setValue(e, {
            value: o.target.value,
          });
        });
        break;
      case 'input':
        if (i.attributes.type === 'radio' || i.attributes.type === 'checkbox') {
          if (a.value === i.attributes.xfaOn ? t.setAttribute('checked', !0) : a.value === i.attributes.xfaOff && t.removeAttribute('checked'), r === 'print') break;
          t.addEventListener('change', (o) => {
            n.setValue(e, {
              value: o.target.checked ? o.target.getAttribute('xfaOn') : o.target.getAttribute('xfaOff'),
            });
          });
        } else {
          if (a.value !== null && t.setAttribute('value', a.value), r === 'print') break;
          t.addEventListener('input', (o) => {
            n.setValue(e, {
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
          n.setValue(e, {
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
    intent: n,
    linkService: r,
  }) {
    const {
      attributes: a,
    } = e; const
      o = t instanceof HTMLAnchorElement;
    a.type === 'radio' && (a.name = `${a.name}-${n}`);
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
    const e = t.annotationStorage; const i = t.linkService; const n = t.xfaHtml; const r = t.intent || 'display'; const
      a = document.createElement(n.name);
    n.attributes && this.setAttributes({
      html: a,
      element: n,
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
    if (n.children.length === 0) {
      if (n.value) {
        const b = document.createTextNode(n.value);
        a.append(b), o && zh.shouldBuildText(n.name) && c.push(b);
      }
      return {
        textDivs: c,
      };
    }
    const d = [[n, -1, a]];
    for (; d.length > 0;) {
      const [b, C, S] = d.at(-1);
      if (C + 1 === b.children.length) {
        d.pop();
        continue;
      }
      const L = b.children[++d.at(-1)[1]];
      if (L === null) continue;
      const {
        name: k,
      } = L;
      if (k === '#text') {
        const R = document.createTextNode(L.value);
        c.push(R), S.append(R);
        continue;
      }
      const M = (u = L == null ? void 0 : L.attributes) != null && u.xmlns ? document.createElementNS(L.attributes.xmlns, k) : document.createElement(k);
      if (S.append(M), L.attributes && this.setAttributes({
        html: M,
        element: L,
        storage: e,
        intent: r,
        linkService: i,
      }), ((g = L.children) == null ? void 0 : g.length) > 0) d.push([L, -1, M]);
      else if (L.value) {
        const R = document.createTextNode(L.value);
        o && zh.shouldBuildText(k) && c.push(R), M.append(R);
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
const Vn = 'http://www.w3.org/2000/svg';
const qr = class qr {
};
V(qr, 'CSS', 96), V(qr, 'PDF', 72), V(qr, 'PDF_TO_CSS_UNITS', qr.CSS / qr.PDF);
const Is = qr;
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
    const n = new XMLHttpRequest();
    n.open('GET', h, !0), n.responseType = t, n.onreadystatechange = () => {
      if (n.readyState === XMLHttpRequest.DONE) {
        if (n.status === 200 || n.status === 0) {
          switch (t) {
            case 'arraybuffer':
            case 'blob':
            case 'json':
              e(n.response);
              return;
          }
          e(n.responseText);
          return;
        }
        i(new Error(n.statusText));
      }
    }, n.send(null);
  });
}
class Rd {
  constructor({
    viewBox: t,
    userUnit: e,
    scale: i,
    rotation: n,
    offsetX: r = 0,
    offsetY: a = 0,
    dontFlip: o = !1,
  }) {
    this.viewBox = t, this.userUnit = e, this.scale = i, this.rotation = n, this.offsetX = r, this.offsetY = a, i *= e;
    const l = (t[2] + t[0]) / 2; const
      c = (t[3] + t[1]) / 2;
    let d; let u; let g; let
      b;
    switch (n %= 360, n < 0 && (n += 360), n) {
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
    let C; let S; let L; let
      k;
    d === 0 ? (C = Math.abs(c - t[1]) * i + r, S = Math.abs(l - t[0]) * i + a, L = (t[3] - t[1]) * i, k = (t[2] - t[0]) * i) : (C = Math.abs(l - t[0]) * i + r, S = Math.abs(c - t[1]) * i + a, L = (t[2] - t[0]) * i, k = (t[3] - t[1]) * i), this.transform = [d * i, u * i, g * i, b * i, C - d * i * l - g * i * c, S - u * i * l - b * i * c], this.width = L, this.height = k;
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
    offsetY: n = this.offsetY,
    dontFlip: r = !1,
  } = {}) {
    return new Rd({
      viewBox: this.viewBox.slice(),
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: i,
      offsetY: n,
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
class uf extends co {
  constructor(t, e = 0) {
    super(t, 'RenderingCancelledException'), this.extraDelay = e;
  }
}
function Ld(h) {
  const t = h.length;
  let e = 0;
  for (; e < t && h[e].trim() === '';) e++;
  return h.substring(e, e + 5).toLowerCase() === 'data:';
}
function ff(h) {
  return typeof h === 'string' && /\.pdf$/i.test(h);
}
function iy(h) {
  return [h] = h.split(/[#?]/, 1), h.substring(h.lastIndexOf('/') + 1);
}
function ny(h, t = 'document.pdf') {
  if (typeof h !== 'string') return t;
  if (Ld(h)) return pt('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
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
  const n = (o) => {
    try {
      let l = decodeURIComponent(o);
      return l.includes('/') ? (l = l.split('/').at(-1), l.test(/^\.pdf$/i) ? l : o) : l;
    } catch {
      return o;
    }
  }; const r = /\.pdf$/i; const
    a = i.pathname.split('/').at(-1);
  if (r.test(a)) return n(a);
  if (i.searchParams.size > 0) {
    const o = Array.from(i.searchParams.values()).reverse();
    for (const c of o) if (r.test(c)) return n(c);
    const l = Array.from(i.searchParams.keys()).reverse();
    for (const c of l) if (r.test(c)) return n(c);
  }
  if (i.hash) {
    const l = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(i.hash);
    if (l) return n(l[0]);
  }
  return t;
}
class nm {
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
      start: n,
      end: r,
    } of this.times) {
      t.push(`${i.padEnd(e)} ${r - n}ms
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
function Mw(h) {
  console.log(`Deprecated API usage: ${h}`);
}
let qh;
class $h {
  static toDateObject(t) {
    if (t instanceof Date) return t;
    if (!t || typeof t !== 'string') return null;
    s(this, qh) || m(this, qh, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = s(this, qh).exec(t);
    if (!e) return null;
    const i = parseInt(e[1], 10);
    let n = parseInt(e[2], 10);
    n = n >= 1 && n <= 12 ? n - 1 : 0;
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
    return u = u >= 0 && u <= 59 ? u : 0, c === '-' ? (a += d, o += u) : c === '+' && (a -= d, o -= u), new Date(Date.UTC(i, n, r, a, o, l));
  }
}
qh = new WeakMap(), v($h, qh);
function sy(h, {
  scale: t = 1,
  rotation: e = 0,
}) {
  const {
    width: i,
    height: n,
  } = h.attributes.style; const
    r = [0, 0, parseInt(i), parseInt(n)];
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
function Dw(h) {
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
    d: n,
    e: r,
    f: a,
  } = h.getTransform();
  return [t, e, i, n, r, a];
}
function pn(h) {
  const {
    a: t,
    b: e,
    c: i,
    d: n,
    e: r,
    f: a,
  } = h.getTransform().invertSelf();
  return [t, e, i, n, r, a];
}
function Ir(h, t, e = !1, i = !0) {
  if (t instanceof Rd) {
    const {
      pageWidth: n,
      pageHeight: r,
    } = t.rawDims; const {
      style: a,
    } = h; const o = _e.isCSSRoundSupported; const l = `var(--total-scale-factor) * ${n}px`; const c = `var(--total-scale-factor) * ${r}px`; const d = o ? `round(down, ${l}, var(--scale-round-x))` : `calc(${l})`; const
      u = o ? `round(down, ${c}, var(--scale-round-y))` : `calc(${c})`;
    !e || t.rotation % 180 === 0 ? (a.width = d, a.height = u) : (a.width = u, a.height = d);
  }
  i && h.setAttribute('data-main-rotation', t.rotation);
}
class dn {
  constructor() {
    const {
      pixelRatio: t,
    } = dn;
    this.sx = t, this.sy = t;
  }

  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }

  get symmetric() {
    return this.sx === this.sy;
  }

  limitCanvas(t, e, i, n, r = -1) {
    let a = 1 / 0; let o = 1 / 0; let
      l = 1 / 0;
    i = dn.capPixels(i, r), i > 0 && (a = Math.sqrt(i / (t * e))), n !== -1 && (o = n / t, l = n / e);
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
const Lu = ['image/apng', 'image/avif', 'image/bmp', 'image/gif', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/webp', 'image/x-icon'];
class Ow {
  static get isDarkMode() {
    let t;
    return yt(this, 'isDarkMode', !!((t = window == null ? void 0 : window.matchMedia) != null && t.call(window, '(prefers-color-scheme: dark)').matches));
  }
}
class ry {
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
function ay(h, t, e, i) {
  i = Math.min(Math.max(i ?? 1, 0), 1);
  const n = 255 * (1 - i);
  return h = Math.round(h * i + n), t = Math.round(t * i + n), e = Math.round(e * i + n), [h, t, e];
}
function sm(h, t) {
  const e = h[0] / 255; const i = h[1] / 255; const n = h[2] / 255; const r = Math.max(e, i, n); const a = Math.min(e, i, n); const
    o = (r + a) / 2;
  if (r === a) t[0] = t[1] = 0;
  else {
    const l = r - a;
    switch (t[1] = o < 0.5 ? l / (r + a) : l / (2 - r - a), r) {
      case e:
        t[0] = ((i - n) / l + (i < n ? 6 : 0)) * 60;
        break;
      case i:
        t[0] = ((n - e) / l + 2) * 60;
        break;
      case n:
        t[0] = ((e - i) / l + 4) * 60;
        break;
    }
  }
  t[2] = o;
}
function Gf(h, t) {
  const e = h[0]; const i = h[1]; const n = h[2]; const r = (1 - Math.abs(2 * n - 1)) * i; const a = r * (1 - Math.abs(e / 60 % 2 - 1)); const
    o = n - r / 2;
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
function rm(h) {
  return h <= 0.03928 ? h / 12.92 : ((h + 0.055) / 1.055) ** 2.4;
}
function am(h, t, e) {
  Gf(h, e), e.map(rm);
  const i = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  Gf(t, e), e.map(rm);
  const n = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  return i > n ? (i + 0.05) / (n + 0.05) : (n + 0.05) / (i + 0.05);
}
const om = /* @__PURE__ */ new Map();
function oy(h, t) {
  const e = h[0] + h[1] * 256 + h[2] * 65536 + t[0] * 16777216 + t[1] * 4294967296 + t[2] * 1099511627776;
  let i = om.get(e);
  if (i) return i;
  const n = new Float32Array(9); const r = n.subarray(0, 3); const
    a = n.subarray(3, 6);
  sm(h, a);
  const o = n.subarray(6, 9);
  sm(t, o);
  const l = o[2] < 0.5; const
    c = l ? 12 : 4.5;
  if (a[2] = l ? Math.sqrt(a[2]) : 1 - Math.sqrt(1 - a[2]), am(a, o, r) < c) {
    let d; let
      u;
    l ? (d = a[2], u = 1) : (d = 0, u = a[2]);
    const g = 5e-3;
    for (; u - d > g;) {
      const b = a[2] = (d + u) / 2;
      l === am(a, o, r) < c ? d = b : u = b;
    }
    a[2] = l ? u : d;
  }
  return Gf(a, r), i = tt.makeHexColor(Math.round(r[0] * 255), Math.round(r[1] * 255), Math.round(r[2] * 255)), om.set(e, i), i;
}
function Sg({
  html: h,
  dir: t,
  className: e,
}, i) {
  const n = document.createDocumentFragment();
  if (typeof h === 'string') {
    const r = document.createElement('p');
    r.dir = t || 'auto';
    const a = h.split(/(?:\r\n?|\n)/);
    for (let o = 0, l = a.length; o < l; ++o) {
      const c = a[o];
      r.append(document.createTextNode(c)), o < l - 1 && r.append(document.createElement('br'));
    }
    n.append(r);
  } else {
    wg.render({
      xfaHtml: h,
      div: n,
      intent: 'richText',
    });
  }
  n.firstChild.classList.add('richText', e), i.append(n);
}
let zs; let $s; let Di; let Oi; let Xh; let Us; let Lo; let Mo; let Yh; let $u; let ly; let De; let hy; let cy; let mo; let
  yh;
const Kn = class Kn {
  constructor(t) {
    v(this, De);
    v(this, zs, null);
    v(this, $s, null);
    v(this, Di);
    v(this, Oi, null);
    v(this, Xh, null);
    v(this, Us, null);
    v(this, Lo, null);
    v(this, Mo, null);
    m(this, Di, t), s(Kn, Yh) || m(Kn, Yh, Object.freeze({
      freetext: 'pdfjs-editor-remove-freetext-button',
      highlight: 'pdfjs-editor-remove-highlight-button',
      ink: 'pdfjs-editor-remove-ink-button',
      stamp: 'pdfjs-editor-remove-stamp-button',
      signature: 'pdfjs-editor-remove-signature-button',
    }));
  }

  render() {
    const t = m(this, zs, document.createElement('div'));
    t.classList.add('editToolbar', 'hidden'), t.setAttribute('role', 'toolbar');
    const e = s(this, Di)._uiManager._signal;
    e instanceof AbortSignal && !e.aborted && (t.addEventListener('contextmenu', Ri, {
      signal: e,
    }), t.addEventListener('pointerdown', A(Kn, $u, ly), {
      signal: e,
    }));
    const i = m(this, Oi, document.createElement('div'));
    i.className = 'buttons', t.append(i);
    const n = s(this, Di).toolbarPosition;
    if (n) {
      const {
        style: r,
      } = t; const
        a = s(this, Di)._uiManager.direction === 'ltr' ? 1 - n[0] : n[0];
      r.insetInlineEnd = `${100 * a}%`, r.top = `calc(${100 * n[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return t;
  }

  get div() {
    return s(this, zs);
  }

  hide() {
    let t;
    s(this, zs).classList.add('hidden'), (t = s(this, $s)) == null || t.hideDropdown();
  }

  show() {
    let t; let
      e;
    s(this, zs).classList.remove('hidden'), (t = s(this, Xh)) == null || t.shown(), (e = s(this, Us)) == null || e.shown();
  }

  addDeleteButton() {
    const {
      editorType: t,
      _uiManager: e,
    } = s(this, Di); const
      i = document.createElement('button');
    i.classList.add('basic', 'deleteButton'), i.tabIndex = 0, i.setAttribute('data-l10n-id', s(Kn, Yh)[t]), A(this, De, mo).call(this, i) && i.addEventListener('click', (n) => {
      e.delete();
    }, {
      signal: e._signal,
    }), s(this, Oi).append(i);
  }

  async addAltText(t) {
    const e = await t.render();
    A(this, De, mo).call(this, e), s(this, Oi).append(e, s(this, De, yh)), m(this, Xh, t);
  }

  addComment(t, e = null) {
    if (s(this, Us)) return;
    const i = t.renderForToolbar();
    if (!i) return;
    A(this, De, mo).call(this, i);
    const n = m(this, Lo, s(this, De, yh));
    e ? (s(this, Oi).insertBefore(i, e), s(this, Oi).insertBefore(n, e)) : s(this, Oi).append(i, n), m(this, Us, t), t.toolbar = this;
  }

  addColorPicker(t) {
    if (s(this, $s)) return;
    m(this, $s, t);
    const e = t.renderButton();
    A(this, De, mo).call(this, e), s(this, Oi).append(e, s(this, De, yh));
  }

  async addEditSignatureButton(t) {
    const e = m(this, Mo, await t.renderEditButton(s(this, Di)));
    A(this, De, mo).call(this, e), s(this, Oi).append(e, s(this, De, yh));
  }

  removeButton(t) {
    let e; let
      i;
    switch (t) {
      case 'comment':
        (e = s(this, Us)) == null || e.removeToolbarCommentButton(), m(this, Us, null), (i = s(this, Lo)) == null || i.remove(), m(this, Lo, null);
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
    const n = s(this, Oi).querySelector(i);
    n && t === 'comment' && this.addComment(e, n);
  }

  updateEditSignatureButton(t) {
    s(this, Mo) && (s(this, Mo).title = t);
  }

  remove() {
    let t;
    s(this, zs).remove(), (t = s(this, $s)) == null || t.destroy(), m(this, $s, null);
  }
};
zs = new WeakMap(), $s = new WeakMap(), Di = new WeakMap(), Oi = new WeakMap(), Xh = new WeakMap(), Us = new WeakMap(), Lo = new WeakMap(), Mo = new WeakMap(), Yh = new WeakMap(), $u = new WeakSet(), ly = function (t) {
  t.stopPropagation();
}, De = new WeakSet(), hy = function (t) {
  s(this, Di)._focusEventsAllowed = !1, Kt(t);
}, cy = function (t) {
  s(this, Di)._focusEventsAllowed = !0, Kt(t);
}, mo = function (t) {
  const e = s(this, Di)._uiManager._signal;
  return !(e instanceof AbortSignal) || e.aborted ? !1 : (t.addEventListener('focusin', A(this, De, hy).bind(this), {
    capture: !0,
    signal: e,
  }), t.addEventListener('focusout', A(this, De, cy).bind(this), {
    capture: !0,
    signal: e,
  }), t.addEventListener('contextmenu', Ri, {
    signal: e,
  }), !0);
}, yh = function () {
  const t = document.createElement('div');
  return t.className = 'divider', t;
}, v(Kn, $u), v(Kn, Yh, null);
const Vf = Kn;
let Kh; let Kr; let Qn; let Fs; let dy; let uy; let
  qf;
class Iw {
  constructor(t) {
    v(this, Fs);
    v(this, Kh, null);
    v(this, Kr, null);
    v(this, Qn);
    m(this, Qn, t);
  }

  show(t, e, i) {
    const [n, r] = A(this, Fs, uy).call(this, e, i); const
      {
        style: a,
      } = s(this, Kr) || m(this, Kr, A(this, Fs, dy).call(this));
    t.append(s(this, Kr)), a.insetInlineEnd = `${100 * n}%`, a.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`;
  }

  hide() {
    s(this, Kr).remove();
  }
}
Kh = new WeakMap(), Kr = new WeakMap(), Qn = new WeakMap(), Fs = new WeakSet(), dy = function () {
  const t = m(this, Kr, document.createElement('div'));
  t.className = 'editToolbar', t.setAttribute('role', 'toolbar');
  const e = s(this, Qn)._signal;
  e instanceof AbortSignal && !e.aborted && t.addEventListener('contextmenu', Ri, {
    signal: e,
  });
  const i = m(this, Kh, document.createElement('div'));
  return i.className = 'buttons', t.append(i), s(this, Qn).hasCommentManager() && A(this, Fs, qf).call(this, 'commentButton', 'pdfjs-comment-floating-button', 'pdfjs-comment-floating-button-label', () => {
    s(this, Qn).commentSelection('floating_button');
  }), A(this, Fs, qf).call(this, 'highlightButton', 'pdfjs-highlight-floating-button1', 'pdfjs-highlight-floating-button-label', () => {
    s(this, Qn).highlightSelection('floating_button');
  }), t;
}, uy = function (t, e) {
  let i = 0; let
    n = 0;
  for (const r of t) {
    const a = r.y + r.height;
    if (a < i) continue;
    const o = r.x + (e ? r.width : 0);
    if (a > i) {
      n = o, i = a;
      continue;
    }
    e ? o > n && (n = o) : o < n && (n = o);
  }
  return [e ? 1 - n : n, i];
}, qf = function (t, e, i, n) {
  const r = document.createElement('button');
  r.classList.add('basic', t), r.tabIndex = 0, r.setAttribute('data-l10n-id', e);
  const a = document.createElement('span');
  r.append(a), a.className = 'visuallyHidden', a.setAttribute('data-l10n-id', i);
  const o = s(this, Qn)._signal;
  o instanceof AbortSignal && !o.aborted && (r.addEventListener('contextmenu', Ri, {
    signal: o,
  }), r.addEventListener('click', n, {
    signal: o,
  })), s(this, Kh).append(r);
};
function fy(h, t, e) {
  for (const i of e) t.addEventListener(i, h[i].bind(h));
}
let Uu;
class Fw {
  constructor() {
    v(this, Uu, 0);
  }

  get id() {
    return `${Hh}${de(this, Uu)._++}`;
  }
}
Uu = new WeakMap();
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
      n = new Image();
    n.src = t;
    const r = n.decode().then(() => (i.drawImage(n, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(i.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return yt(this, '_isSVGFittingCanvas', r);
  }

  async getFromFile(t) {
    const {
      lastModified: e,
      name: i,
      size: n,
      type: r,
    } = t;
    return A(this, Oo, Jd).call(this, `${e}_${i}_${n}_${r}`, t);
  }

  async getFromUrl(t) {
    return A(this, Oo, Jd).call(this, t, t);
  }

  async getFromBlob(t, e) {
    const i = await e;
    return A(this, Oo, Jd).call(this, t, i);
  }

  async getFromId(t) {
    s(this, Ie) || m(this, Ie, /* @__PURE__ */ new Map());
    const e = s(this, Ie).get(t);
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
    s(this, Ie) || m(this, Ie, /* @__PURE__ */ new Map());
    let i = s(this, Ie).get(t);
    if (i != null && i.bitmap) return i.refCounter += 1, i;
    const n = new OffscreenCanvas(e.width, e.height);
    return n.getContext('2d').drawImage(e, 0, 0), i = {
      bitmap: n.transferToImageBitmap(),
      id: `image_${s(this, Do)}_${de(this, Jh)._++}`,
      refCounter: 1,
      isSvg: !1,
    }, s(this, Ie).set(t, i), s(this, Ie).set(i.id, i), i;
  }

  getSvgUrl(t) {
    const e = s(this, Ie).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }

  deleteId(t) {
    let n;
    s(this, Ie) || m(this, Ie, /* @__PURE__ */ new Map());
    const e = s(this, Ie).get(t);
    if (!e || (e.refCounter -= 1, e.refCounter !== 0)) return;
    const {
      bitmap: i,
    } = e;
    if (!e.url && !e.file) {
      const r = new OffscreenCanvas(i.width, i.height);
      r.getContext('bitmaprenderer').transferFromImageBitmap(i), e.blobPromise = r.convertToBlob();
    }
    (n = i.close) == null || n.call(i), e.bitmap = null;
  }

  isValidId(t) {
    return t.startsWith(`image_${s(this, Do)}_`);
  }
};
Do = new WeakMap(), Jh = new WeakMap(), Ie = new WeakMap(), Oo = new WeakSet(), Jd = async function (t, e) {
  s(this, Ie) || m(this, Ie, /* @__PURE__ */ new Map());
  let i = s(this, Ie).get(t);
  if (i === null) return null;
  if (i != null && i.bitmap) return i.refCounter += 1, i;
  try {
    i || (i = {
      bitmap: null,
      id: `image_${s(this, Do)}_${de(this, Jh)._++}`,
      refCounter: 0,
      isSvg: !1,
    });
    let n;
    if (typeof e === 'string' ? (i.url = e, n = await oh(e, 'blob')) : e instanceof File ? n = i.file = e : e instanceof Blob && (n = e), n.type === 'image/svg+xml') {
      const r = Dg._isSVGFittingCanvas; const a = new FileReader(); const o = new Image(); const
        l = new Promise((c, d) => {
          o.onload = () => {
            i.bitmap = o, i.isSvg = !0, c();
          }, a.onload = async () => {
            const u = i.svgUrl = a.result;
            o.src = await r ? `${u}#svgView(preserveAspectRatio(none))` : u;
          }, o.onerror = a.onerror = d;
        });
      a.readAsDataURL(n), await l;
    } else i.bitmap = await createImageBitmap(n);
    i.refCounter = 1;
  } catch (n) {
    pt(n), i = null;
  }
  return s(this, Ie).set(t, i), i && s(this, Ie).set(i.id, i), i;
};
const Xf = Dg;
let se; let Ws; let Qh; let
  Xt;
class Nw {
  constructor(t = 128) {
    v(this, se, []);
    v(this, Ws, !1);
    v(this, Qh);
    v(this, Xt, -1);
    m(this, Qh, t);
  }

  add({
    cmd: t,
    undo: e,
    post: i,
    mustExec: n,
    type: r = NaN,
    overwriteIfSameType: a = !1,
    keepUndo: o = !1,
  }) {
    if (n && t(), s(this, Ws)) return;
    const l = {
      cmd: t,
      undo: e,
      post: i,
      type: r,
    };
    if (s(this, Xt) === -1) {
      s(this, se).length > 0 && (s(this, se).length = 0), m(this, Xt, 0), s(this, se).push(l);
      return;
    }
    if (a && s(this, se)[s(this, Xt)].type === r) {
      o && (l.undo = s(this, se)[s(this, Xt)].undo), s(this, se)[s(this, Xt)] = l;
      return;
    }
    const c = s(this, Xt) + 1;
    c === s(this, Qh) ? s(this, se).splice(0, 1) : (m(this, Xt, c), c < s(this, se).length && s(this, se).splice(c)), s(this, se).push(l);
  }

  undo() {
    if (s(this, Xt) === -1) return;
    m(this, Ws, !0);
    const {
      undo: t,
      post: e,
    } = s(this, se)[s(this, Xt)];
    t(), e == null || e(), m(this, Ws, !1), m(this, Xt, s(this, Xt) - 1);
  }

  redo() {
    if (s(this, Xt) < s(this, se).length - 1) {
      m(this, Xt, s(this, Xt) + 1), m(this, Ws, !0);
      const {
        cmd: t,
        post: e,
      } = s(this, se)[s(this, Xt)];
      t(), e == null || e(), m(this, Ws, !1);
    }
  }

  hasSomethingToUndo() {
    return s(this, Xt) !== -1;
  }

  hasSomethingToRedo() {
    return s(this, Xt) < s(this, se).length - 1;
  }

  cleanType(t) {
    if (s(this, Xt) !== -1) {
      for (let e = s(this, Xt); e >= 0; e--) {
        if (s(this, se)[e].type !== t) {
          s(this, se).splice(e + 1, s(this, Xt) - e), m(this, Xt, e);
          return;
        }
      }
      s(this, se).length = 0, m(this, Xt, -1);
    }
  }

  destroy() {
    m(this, se, null);
  }
}
se = new WeakMap(), Ws = new WeakMap(), Qh = new WeakMap(), Xt = new WeakMap();
let Wu; let
  py;
class Md {
  constructor(t) {
    v(this, Wu);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e,
    } = _e.platform;
    for (const [i, n, r = {}] of t) {
      for (const a of i) {
        const o = a.startsWith('mac+');
        e && o ? (this.callbacks.set(a.slice(4), {
          callback: n,
          options: r,
        }), this.allKeys.add(a.split('+').at(-1))) : !e && !o && (this.callbacks.set(a, {
          callback: n,
          options: r,
        }), this.allKeys.add(a.split('+').at(-1)));
      }
    }
  }

  exec(t, e) {
    if (!this.allKeys.has(e.key)) return;
    const i = this.callbacks.get(A(this, Wu, py).call(this, e));
    if (!i) return;
    const {
      callback: n,
      options: {
        bubbles: r = !1,
        args: a = [],
        checker: o = null,
      },
    } = i;
    o && !o(t, e) || (n.bind(t, ...a, e)(), r || Kt(e));
  }
}
Wu = new WeakSet(), py = function (t) {
  t.altKey && this.buffer.push('alt'), t.ctrlKey && this.buffer.push('ctrl'), t.metaKey && this.buffer.push('meta'), t.shiftKey && this.buffer.push('shift'), this.buffer.push(t.key);
  const e = this.buffer.join('+');
  return this.buffer.length = 0, e;
};
const Gu = class Gu {
  get _colors() {
    const t = /* @__PURE__ */ new Map([['CanvasText', null], ['Canvas', null]]);
    return Dw(t), yt(this, '_colors', t);
  }

  convert(t) {
    const e = lh(t);
    if (!window.matchMedia('(forced-colors: active)').matches) return e;
    for (const [i, n] of this._colors) if (n.every((r, a) => r === e[a])) return Gu._colorsMapping.get(i);
    return e;
  }

  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? tt.makeHexColor(...e) : t;
  }
};
V(Gu, '_colorsMapping', /* @__PURE__ */ new Map([['CanvasText', [0, 0, 0]], ['Canvas', [255, 255, 255]]]));
const Yf = Gu;
let Io; let hi; let Fo; let Qt; let fe; let No; let Ii; let Bo; let Fi; let Fe; let Gs; let Vs; let Ho; let qs; let yn; let Ni; let Jr; let Zh; let tc; let jo; let ec; let bn; let Xs; let zo; let Ys; let vn; let Vu; let Ks; let $o; let ic; let Js; let Qr; let Uo; let Qs; let nc; let le; let kt; let Zn; let Zs; let tr; let sc; let Wo; let rc; let er; let wn; let ts; let ac; let oc; let Bi; let Y; let Qd; let Kf; let gy; let my; let bh; let yy; let by; let vy; let Jf; let wy; let Qf; let Zf; let Sy; let Ue; let qn; let Ay; let _y; let tp; let xy; let vh; let
  ep;
const xo = class xo {
  constructor(t, e, i, n, r, a, o, l, c, d, u, g, b, C, S, L) {
    v(this, Y);
    v(this, Io, new AbortController());
    v(this, hi, null);
    v(this, Fo, null);
    v(this, Qt, /* @__PURE__ */ new Map());
    v(this, fe, /* @__PURE__ */ new Map());
    v(this, No, null);
    v(this, Ii, null);
    v(this, Bo, null);
    v(this, Fi, new Nw());
    v(this, Fe, null);
    v(this, Gs, null);
    v(this, Vs, null);
    v(this, Ho, 0);
    v(this, qs, /* @__PURE__ */ new Set());
    v(this, yn, null);
    v(this, Ni, null);
    v(this, Jr, /* @__PURE__ */ new Set());
    V(this, '_editorUndoBar', null);
    v(this, Zh, !1);
    v(this, tc, !1);
    v(this, jo, !1);
    v(this, ec, null);
    v(this, bn, null);
    v(this, Xs, null);
    v(this, zo, null);
    v(this, Ys, !1);
    v(this, vn, null);
    v(this, Vu, new Fw());
    v(this, Ks, !1);
    v(this, $o, !1);
    v(this, ic, !1);
    v(this, Js, null);
    v(this, Qr, null);
    v(this, Uo, null);
    v(this, Qs, null);
    v(this, nc, null);
    v(this, le, ft.NONE);
    v(this, kt, /* @__PURE__ */ new Set());
    v(this, Zn, null);
    v(this, Zs, null);
    v(this, tr, null);
    v(this, sc, null);
    v(this, Wo, null);
    v(this, rc, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1,
    });
    v(this, er, [0, 0]);
    v(this, wn, null);
    v(this, ts, null);
    v(this, ac, null);
    v(this, oc, null);
    v(this, Bi, null);
    const k = this._signal = s(this, Io).signal;
    m(this, ts, t), m(this, ac, e), m(this, oc, i), m(this, No, n), m(this, Fe, r), m(this, Zs, a), m(this, Wo, l), this._eventBus = o, o._on('editingaction', this.onEditingAction.bind(this), {
      signal: k,
    }), o._on('pagechanging', this.onPageChanging.bind(this), {
      signal: k,
    }), o._on('scalechanging', this.onScaleChanging.bind(this), {
      signal: k,
    }), o._on('rotationchanging', this.onRotationChanging.bind(this), {
      signal: k,
    }), o._on('setpreference', this.onSetPreference.bind(this), {
      signal: k,
    }), o._on('switchannotationeditorparams', (M) => this.updateParams(M.type, M.value), {
      signal: k,
    }), window.addEventListener('pointerdown', () => {
      m(this, $o, !0);
    }, {
      capture: !0,
      signal: k,
    }), window.addEventListener('pointerup', () => {
      m(this, $o, !1);
    }, {
      capture: !0,
      signal: k,
    }), A(this, Y, yy).call(this), A(this, Y, Sy).call(this), A(this, Y, Jf).call(this), m(this, Ii, l.annotationStorage), m(this, ec, l.filterFactory), m(this, tr, c), m(this, zo, d || null), m(this, Zh, u), m(this, tc, g), m(this, jo, b), m(this, nc, C || null), this.viewParameters = {
      realScale: Is.PDF_TO_CSS_UNITS,
      rotation: 0,
    }, this.isShiftKeyDown = !1, this._editorUndoBar = S || null, this._supportsPinchToZoom = L !== !1, r == null || r.setSidebarUiManager(this);
  }

  static get _keyboardManager() {
    const t = xo.prototype; const e = (a) => s(a, ts).contains(document.activeElement) && document.activeElement.tagName !== 'BUTTON' && a.hasSomethingToControl(); const i = (a, {
      target: o,
    }) => {
      if (o instanceof HTMLInputElement) {
        const {
          type: l,
        } = o;
        return l !== 'text' && l !== 'number';
      }
      return !0;
    }; const n = this.TRANSLATE_SMALL; const
      r = this.TRANSLATE_BIG;
    return yt(this, '_keyboardManager', new Md([[['ctrl+a', 'mac+meta+a'], t.selectAll, {
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
      }) => !(o instanceof HTMLButtonElement) && s(a, ts).contains(o) && !a.isEnterHandled,
    }], [[' ', 'mac+ '], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o,
      }) => !(o instanceof HTMLButtonElement) && s(a, ts).contains(document.activeElement),
    }], [['Escape', 'mac+Escape'], t.unselectAll], [['ArrowLeft', 'mac+ArrowLeft'], t.translateSelectedEditors, {
      args: [-n, 0],
      checker: e,
    }], [['ctrl+ArrowLeft', 'mac+shift+ArrowLeft'], t.translateSelectedEditors, {
      args: [-r, 0],
      checker: e,
    }], [['ArrowRight', 'mac+ArrowRight'], t.translateSelectedEditors, {
      args: [n, 0],
      checker: e,
    }], [['ctrl+ArrowRight', 'mac+shift+ArrowRight'], t.translateSelectedEditors, {
      args: [r, 0],
      checker: e,
    }], [['ArrowUp', 'mac+ArrowUp'], t.translateSelectedEditors, {
      args: [0, -n],
      checker: e,
    }], [['ctrl+ArrowUp', 'mac+shift+ArrowUp'], t.translateSelectedEditors, {
      args: [0, -r],
      checker: e,
    }], [['ArrowDown', 'mac+ArrowDown'], t.translateSelectedEditors, {
      args: [0, n],
      checker: e,
    }], [['ctrl+ArrowDown', 'mac+shift+ArrowDown'], t.translateSelectedEditors, {
      args: [0, r],
      checker: e,
    }]]));
  }

  destroy() {
    let t; let e; let i; let n; let r; let a; let o; let l; let
      c;
    (t = s(this, Bi)) == null || t.resolve(), m(this, Bi, null), (e = s(this, Io)) == null || e.abort(), m(this, Io, null), this._signal = null;
    for (const d of s(this, fe).values()) d.destroy();
    s(this, fe).clear(), s(this, Qt).clear(), s(this, Jr).clear(), (i = s(this, Qs)) == null || i.clear(), m(this, hi, null), s(this, kt).clear(), s(this, Fi).destroy(), (n = s(this, No)) == null || n.destroy(), (r = s(this, Fe)) == null || r.destroy(), (a = s(this, Zs)) == null || a.destroy(), (o = s(this, vn)) == null || o.hide(), m(this, vn, null), (l = s(this, Uo)) == null || l.destroy(), m(this, Uo, null), m(this, Fo, null), s(this, bn) && (clearTimeout(s(this, bn)), m(this, bn, null)), s(this, wn) && (clearTimeout(s(this, wn)), m(this, wn, null)), (c = this._editorUndoBar) == null || c.destroy(), m(this, Wo, null);
  }

  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }

  get mlManager() {
    return s(this, nc);
  }

  get useNewAltTextFlow() {
    return s(this, tc);
  }

  get useNewAltTextWhenAddingImage() {
    return s(this, jo);
  }

  get hcmFilter() {
    return yt(this, 'hcmFilter', s(this, tr) ? s(this, ec).addHCMFilter(s(this, tr).foreground, s(this, tr).background) : 'none');
  }

  get direction() {
    return yt(this, 'direction', getComputedStyle(s(this, ts)).direction);
  }

  get _highlightColors() {
    return yt(this, '_highlightColors', s(this, zo) ? new Map(s(this, zo).split(',').map((t) => (t = t.split('=').map((e) => e.trim()), t[1] = t[1].toUpperCase(), t))) : null);
  }

  get highlightColors() {
    const {
      _highlightColors: t,
    } = this;
    if (!t) return yt(this, 'highlightColors', null);
    const e = /* @__PURE__ */ new Map(); const
      i = !!s(this, tr);
    for (const [n, r] of t) {
      const a = n.endsWith('_HCM');
      if (i && a) {
        e.set(n.replace('_HCM', ''), r);
        continue;
      }
      !i && !a && e.set(n, r);
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
    t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), m(this, Vs, t);
  }

  setMainHighlightColorPicker(t) {
    m(this, Uo, t);
  }

  editAltText(t, e = !1) {
    let i;
    (i = s(this, No)) == null || i.editAltText(this, t, e);
  }

  hasCommentManager() {
    return !!s(this, Fe);
  }

  editComment(t, e, i, n) {
    let r;
    (r = s(this, Fe)) == null || r.showDialog(this, t, e, i, n);
  }

  selectComment(t, e) {
    const i = s(this, fe).get(t); const
      n = i == null ? void 0 : i.getEditorByUID(e);
    n == null || n.toggleComment(!0, !0);
  }

  updateComment(t) {
    let e;
    (e = s(this, Fe)) == null || e.updateComment(t.getData());
  }

  updatePopupColor(t) {
    let e;
    (e = s(this, Fe)) == null || e.updatePopupColor(t);
  }

  removeComment(t) {
    let e;
    (e = s(this, Fe)) == null || e.removeComments([t.uid]);
  }

  toggleComment(t, e, i = void 0) {
    let n;
    (n = s(this, Fe)) == null || n.toggleCommentPopup(t, e, i);
  }

  makeCommentColor(t, e) {
    let i;
    return t && ((i = s(this, Fe)) == null ? void 0 : i.makeCommentColor(t, e)) || null;
  }

  getCommentDialogElement() {
    let t;
    return ((t = s(this, Fe)) == null ? void 0 : t.dialogElement) || null;
  }

  async waitForEditorsRendered(t) {
    if (s(this, fe).has(t - 1)) return;
    const {
      resolve: e,
      promise: i,
    } = Promise.withResolvers(); const
      n = (r) => {
        r.pageNumber === t && (this._eventBus._off('editorsrendered', n), e());
      };
    this._eventBus.on('editorsrendered', n), await i;
  }

  getSignature(t) {
    let e;
    (e = s(this, Zs)) == null || e.getSignature({
      uiManager: this,
      editor: t,
    });
  }

  get signatureManager() {
    return s(this, Zs);
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
    s(this, ts).focus();
  }

  findParent(t, e) {
    for (const i of s(this, fe).values()) {
      const {
        x: n,
        y: r,
        width: a,
        height: o,
      } = i.div.getBoundingClientRect();
      if (t >= n && t <= n + a && e >= r && e <= r + o) return i;
    }
    return null;
  }

  disableUserSelect(t = !1) {
    s(this, ac).classList.toggle('noUserSelect', t);
  }

  addShouldRescale(t) {
    s(this, Jr).add(t);
  }

  removeShouldRescale(t) {
    s(this, Jr).delete(t);
  }

  onScaleChanging({
    scale: t,
  }) {
    let e;
    this.commitOrRemove(), this.viewParameters.realScale = t * Is.PDF_TO_CSS_UNITS;
    for (const i of s(this, Jr)) i.onScaleChanging();
    (e = s(this, Vs)) == null || e.onScaleChanging();
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
      anchorNode: n,
      anchorOffset: r,
      focusNode: a,
      focusOffset: o,
    } = i; const l = i.toString(); const d = A(this, Y, Qd).call(this, i).closest('.textLayer'); const
      u = this.getSelectionBoxes(d);
    if (!u) return;
    i.empty();
    const g = A(this, Y, Kf).call(this, d); const b = s(this, le) === ft.NONE; const
      C = () => {
        const S = g == null ? void 0 : g.createAndAddNewEditor({
          x: 0,
          y: 0,
        }, !1, {
          methodOfCreation: t,
          boxes: u,
          anchorNode: n,
          anchorOffset: r,
          focusNode: a,
          focusOffset: o,
          text: l,
        });
        b && this.showAllEditors('highlight', !0, !0), e && (S == null || S.editComment());
      };
    if (b) {
      this.switchToMode(ft.HIGHLIGHT, C);
      return;
    }
    C();
  }

  commentSelection(t = '') {
    this.highlightSelection(t, !0);
  }

  getAndRemoveDataFromAnnotationStorage(t) {
    if (!s(this, Ii)) return null;
    const e = `${Hh}${t}`; const
      i = s(this, Ii).getRawValue(e);
    return i && s(this, Ii).remove(e), i;
  }

  addToAnnotationStorage(t) {
    !t.isEmpty() && s(this, Ii) && !s(this, Ii).has(t.id) && s(this, Ii).setValue(t.id, t);
  }

  a11yAlert(t, e = null) {
    const i = s(this, oc);
    i && (i.setAttribute('data-l10n-id', t), e ? i.setAttribute('data-l10n-args', JSON.stringify(e)) : i.removeAttribute('data-l10n-args'));
  }

  blur() {
    if (this.isShiftKeyDown = !1, s(this, Ys) && (m(this, Ys, !1), A(this, Y, bh).call(this, 'main_toolbar')), !this.hasSelection) return;
    const {
      activeElement: t,
    } = document;
    for (const e of s(this, kt)) {
      if (e.div.contains(t)) {
        m(this, Qr, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
    }
  }

  focus() {
    if (!s(this, Qr)) return;
    const [t, e] = s(this, Qr);
    m(this, Qr, null), e.addEventListener('focusin', () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal,
    }), e.focus();
  }

  addEditListeners() {
    A(this, Y, Jf).call(this), A(this, Y, Qf).call(this);
  }

  removeEditListeners() {
    A(this, Y, wy).call(this), A(this, Y, Zf).call(this);
  }

  dragOver(t) {
    for (const {
      type: e,
    } of t.dataTransfer.items) {
      for (const i of s(this, Ni)) {
        if (i.isHandlingMimeForPasting(e)) {
          t.dataTransfer.dropEffect = 'copy', t.preventDefault();
          return;
        }
      }
    }
  }

  drop(t) {
    for (const e of t.dataTransfer.items) {
      for (const i of s(this, Ni)) {
        if (i.isHandlingMimeForPasting(e.type)) {
          i.paste(e, this.currentLayer), t.preventDefault();
          return;
        }
      }
    }
  }

  copy(t) {
    let i;
    if (t.preventDefault(), (i = s(this, hi)) == null || i.commitOrRemove(), !this.hasSelection) return;
    const e = [];
    for (const n of s(this, kt)) {
      const r = n.serialize(!0);
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
      for (const a of s(this, Ni)) {
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
    const n = this.currentLayer;
    try {
      const r = [];
      for (const l of i) {
        const c = await n.deserialize(l);
        if (!c) return;
        r.push(c);
      }
      const a = () => {
        for (const l of r) A(this, Y, tp).call(this, l);
        A(this, Y, ep).call(this, r);
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
    !this.isShiftKeyDown && t.key === 'Shift' && (this.isShiftKeyDown = !0), s(this, le) !== ft.NONE && !this.isEditorHandlingKeyboard && xo._keyboardManager.exec(this, t);
  }

  keyup(t) {
    this.isShiftKeyDown && t.key === 'Shift' && (this.isShiftKeyDown = !1, s(this, Ys) && (m(this, Ys, !1), A(this, Y, bh).call(this, 'main_toolbar')));
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
    t ? (A(this, Y, by).call(this), A(this, Y, Qf).call(this), A(this, Y, Ue).call(this, {
      isEditing: s(this, le) !== ft.NONE,
      isEmpty: A(this, Y, vh).call(this),
      hasSomethingToUndo: s(this, Fi).hasSomethingToUndo(),
      hasSomethingToRedo: s(this, Fi).hasSomethingToRedo(),
      hasSelectedEditor: !1,
    })) : (A(this, Y, vy).call(this), A(this, Y, Zf).call(this), A(this, Y, Ue).call(this, {
      isEditing: !1,
    }), this.disableUserSelect(!1));
  }

  registerEditorTypes(t) {
    if (!s(this, Ni)) {
      m(this, Ni, t);
      for (const e of s(this, Ni)) A(this, Y, qn).call(this, e.defaultPropertiesToUpdate);
    }
  }

  getId() {
    return s(this, Vu).id;
  }

  get currentLayer() {
    return s(this, fe).get(s(this, Ho));
  }

  getLayer(t) {
    return s(this, fe).get(t);
  }

  get currentPageIndex() {
    return s(this, Ho);
  }

  addLayer(t) {
    s(this, fe).set(t.pageIndex, t), s(this, Ks) ? t.enable() : t.disable();
  }

  removeLayer(t) {
    s(this, fe).delete(t.pageIndex);
  }

  async updateMode(t, e = null, i = !1, n = !1, r = !1) {
    let a; let o; let l; let c; let d; let
      u;
    if (s(this, le) !== t && !(s(this, Bi) && (await s(this, Bi).promise, !s(this, Bi)))) {
      if (m(this, Bi, Promise.withResolvers()), (a = s(this, Vs)) == null || a.commitOrRemove(), s(this, le) === ft.POPUP && ((o = s(this, Fe)) == null || o.hideSidebar()), (l = s(this, Fe)) == null || l.destroyPopup(), m(this, le, t), t === ft.NONE) {
        this.setEditingState(!1), A(this, Y, _y).call(this);
        for (const g of s(this, Qt).values()) g.hideStandaloneCommentButton();
        (c = this._editorUndoBar) == null || c.hide(), this.toggleComment(null), s(this, Bi).resolve();
        return;
      }
      for (const g of s(this, Qt).values()) g.addStandaloneCommentButton();
      t === ft.SIGNATURE && await ((d = s(this, Zs)) == null ? void 0 : d.loadSignatures()), this.setEditingState(!0), await A(this, Y, Ay).call(this), this.unselectAll();
      for (const g of s(this, fe).values()) g.updateMode(t);
      if (t === ft.POPUP) {
        s(this, Fo) || m(this, Fo, await s(this, Wo).getAnnotationsByType(new Set(s(this, Ni).map((C) => C._editorType))));
        const g = /* @__PURE__ */ new Set(); const
          b = [];
        for (const C of s(this, Qt).values()) {
          const {
            annotationElementId: S,
            hasComment: L,
            deleted: k,
          } = C;
          S && g.add(S), L && !k && b.push(C.getData());
        }
        for (const C of s(this, Fo)) {
          const {
            id: S,
            popupRef: L,
            contentsObj: k,
          } = C;
          L && (k != null && k.str) && !g.has(S) && !s(this, qs).has(S) && b.push(C);
        }
        (u = s(this, Fe)) == null || u.showSidebar(b);
      }
      if (!e) {
        i && this.addNewEditorFromKeyboard(), s(this, Bi).resolve();
        return;
      }
      for (const g of s(this, Qt).values()) g.uid === e ? (this.setSelected(g), r ? g.editComment() : n ? g.enterInEditMode() : g.focus()) : g.unselect();
      s(this, Bi).resolve();
    }
  }

  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }

  updateToolbar(t) {
    t.mode !== s(this, le) && this._eventBus.dispatch('switchannotationeditormode', {
      source: this,
      ...t,
    });
  }

  updateParams(t, e) {
    if (s(this, Ni)) {
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
          }), (s(this, sc) || m(this, sc, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors('highlight', e);
          break;
      }
      if (this.hasSelection) for (const i of s(this, kt)) i.updateParams(t, e);
      else for (const i of s(this, Ni)) i.updateDefaultParams(t, e);
    }
  }

  showAllEditors(t, e, i = !1) {
    let r;
    for (const a of s(this, Qt).values()) a.editorType === t && a.show(e);
    (((r = s(this, sc)) == null ? void 0 : r.get(At.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && A(this, Y, qn).call(this, [[At.HIGHLIGHT_SHOW_ALL, e]]);
  }

  enableWaiting(t = !1) {
    if (s(this, ic) !== t) {
      m(this, ic, t);
      for (const e of s(this, fe).values()) t ? e.disableClick() : e.enableClick(), e.div.classList.toggle('waiting', t);
    }
  }

  * getEditors(t) {
    for (const e of s(this, Qt).values()) e.pageIndex === t && (yield e);
  }

  getEditor(t) {
    return s(this, Qt).get(t);
  }

  addEditor(t) {
    s(this, Qt).set(t.id, t);
  }

  removeEditor(t) {
    let e; let
      i;
    t.div.contains(document.activeElement) && (s(this, bn) && clearTimeout(s(this, bn)), m(this, bn, setTimeout(() => {
      this.focusMainContainer(), m(this, bn, null);
    }, 0))), s(this, Qt).delete(t.id), t.annotationElementId && ((e = s(this, Qs)) == null || e.delete(t.annotationElementId)), this.unselect(t), (!t.annotationElementId || !s(this, qs).has(t.annotationElementId)) && ((i = s(this, Ii)) == null || i.remove(t.id));
  }

  addDeletedAnnotationElement(t) {
    s(this, qs).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }

  isDeletedAnnotationElement(t) {
    return s(this, qs).has(t);
  }

  removeDeletedAnnotationElement(t) {
    s(this, qs).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }

  setActiveEditor(t) {
    s(this, hi) !== t && (m(this, hi, t), t && A(this, Y, qn).call(this, t.propertiesToUpdate));
  }

  updateUI(t) {
    s(this, Y, xy) === t && A(this, Y, qn).call(this, t.propertiesToUpdate);
  }

  updateUIForDefaultProperties(t) {
    A(this, Y, qn).call(this, t.defaultPropertiesToUpdate);
  }

  toggleSelected(t) {
    if (s(this, kt).has(t)) {
      s(this, kt).delete(t), t.unselect(), A(this, Y, Ue).call(this, {
        hasSelectedEditor: this.hasSelection,
      });
      return;
    }
    s(this, kt).add(t), t.select(), A(this, Y, qn).call(this, t.propertiesToUpdate), A(this, Y, Ue).call(this, {
      hasSelectedEditor: !0,
    });
  }

  setSelected(t) {
    let e;
    this.updateToolbar({
      mode: t.mode,
      editId: t.id,
    }), (e = s(this, Vs)) == null || e.commitOrRemove();
    for (const i of s(this, kt)) i !== t && i.unselect();
    s(this, kt).clear(), s(this, kt).add(t), t.select(), A(this, Y, qn).call(this, t.propertiesToUpdate), A(this, Y, Ue).call(this, {
      hasSelectedEditor: !0,
    });
  }

  isSelected(t) {
    return s(this, kt).has(t);
  }

  get firstSelectedEditor() {
    return s(this, kt).values().next().value;
  }

  unselect(t) {
    t.unselect(), s(this, kt).delete(t), A(this, Y, Ue).call(this, {
      hasSelectedEditor: this.hasSelection,
    });
  }

  get hasSelection() {
    return s(this, kt).size !== 0;
  }

  get isEnterHandled() {
    return s(this, kt).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }

  undo() {
    let t;
    s(this, Fi).undo(), A(this, Y, Ue).call(this, {
      hasSomethingToUndo: s(this, Fi).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: A(this, Y, vh).call(this),
    }), (t = this._editorUndoBar) == null || t.hide();
  }

  redo() {
    s(this, Fi).redo(), A(this, Y, Ue).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: s(this, Fi).hasSomethingToRedo(),
      isEmpty: A(this, Y, vh).call(this),
    });
  }

  addCommands(t) {
    s(this, Fi).add(t), A(this, Y, Ue).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: A(this, Y, vh).call(this),
    });
  }

  cleanUndoStack(t) {
    s(this, Fi).cleanType(t);
  }

  delete() {
    let r;
    this.commitOrRemove();
    const t = (r = this.currentLayer) == null ? void 0 : r.endDrawingSession(!0);
    if (!this.hasSelection && !t) return;
    const e = t ? [t] : [...s(this, kt)]; const i = () => {
      let a;
      (a = this._editorUndoBar) == null || a.show(n, e.length === 1 ? e[0].editorType : e.length);
      for (const o of e) o.remove();
    }; const
      n = () => {
        for (const a of e) A(this, Y, tp).call(this, a);
      };
    this.addCommands({
      cmd: i,
      undo: n,
      mustExec: !0,
    });
  }

  commitOrRemove() {
    let t;
    (t = s(this, hi)) == null || t.commitOrRemove();
  }

  hasSomethingToControl() {
    return s(this, hi) || this.hasSelection;
  }

  selectAll() {
    for (const t of s(this, kt)) t.commit();
    A(this, Y, ep).call(this, s(this, Qt).values());
  }

  unselectAll() {
    let t;
    if (!(s(this, hi) && (s(this, hi).commitOrRemove(), s(this, le) !== ft.NONE)) && !((t = s(this, Vs)) != null && t.commitOrRemove()) && this.hasSelection) {
      for (const e of s(this, kt)) e.unselect();
      s(this, kt).clear(), A(this, Y, Ue).call(this, {
        hasSelectedEditor: !1,
      });
    }
  }

  translateSelectedEditors(t, e, i = !1) {
    if (i || this.commitOrRemove(), !this.hasSelection) return;
    s(this, er)[0] += t, s(this, er)[1] += e;
    const [n, r] = s(this, er); const a = [...s(this, kt)]; const
      o = 1e3;
    s(this, wn) && clearTimeout(s(this, wn)), m(this, wn, setTimeout(() => {
      m(this, wn, null), s(this, er)[0] = s(this, er)[1] = 0, this.addCommands({
        cmd: () => {
          for (const l of a) s(this, Qt).has(l.id) && (l.translateInPage(n, r), l.translationDone());
        },
        undo: () => {
          for (const l of a) s(this, Qt).has(l.id) && (l.translateInPage(-n, -r), l.translationDone());
        },
        mustExec: !1,
      });
    }, o));
    for (const l of a) l.translateInPage(t, e), l.translationDone();
  }

  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), m(this, yn, /* @__PURE__ */ new Map());
      for (const t of s(this, kt)) {
        s(this, yn).set(t, {
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
    if (!s(this, yn)) return !1;
    this.disableUserSelect(!1);
    const t = s(this, yn);
    m(this, yn, null);
    let e = !1;
    for (const [{
      x: n,
      y: r,
      pageIndex: a,
    }, o] of t) o.newX = n, o.newY = r, o.newPageIndex = a, e || (e = n !== o.savedX || r !== o.savedY || a !== o.savedPageIndex);
    if (!e) return !1;
    const i = (n, r, a, o) => {
      if (s(this, Qt).has(n.id)) {
        const l = s(this, fe).get(o);
        l ? n._setParentAndPosition(l, r, a) : (n.pageIndex = o, n.x = r, n.y = a);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [n, {
          newX: r,
          newY: a,
          newPageIndex: o,
        }] of t) i(n, r, a, o);
      },
      undo: () => {
        for (const [n, {
          savedX: r,
          savedY: a,
          savedPageIndex: o,
        }] of t) i(n, r, a, o);
      },
      mustExec: !0,
    }), !0;
  }

  dragSelectedEditors(t, e) {
    if (s(this, yn)) for (const i of s(this, yn).keys()) i.drag(t, e);
  }

  rebuild(t) {
    if (t.parent === null) {
      const e = this.getLayer(t.pageIndex);
      e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
    } else t.parent.addOrRebuild(t);
  }

  get isEditorHandlingKeyboard() {
    let t;
    return ((t = this.getActive()) == null ? void 0 : t.shouldGetKeyboardEvents()) || s(this, kt).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }

  isActive(t) {
    return s(this, hi) === t;
  }

  getActive() {
    return s(this, hi);
  }

  getMode() {
    return s(this, le);
  }

  isEditingMode() {
    return s(this, le) !== ft.NONE;
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
      y: n,
      width: r,
      height: a,
    } = t.getBoundingClientRect();
    let o;
    switch (t.getAttribute('data-main-rotation')) {
      case '90':
        o = (c, d, u, g) => ({
          x: (d - n) / a,
          y: 1 - (c + u - i) / r,
          width: g / a,
          height: u / r,
        });
        break;
      case '180':
        o = (c, d, u, g) => ({
          x: 1 - (c + u - i) / r,
          y: 1 - (d + g - n) / a,
          width: u / r,
          height: g / a,
        });
        break;
      case '270':
        o = (c, d, u, g) => ({
          x: 1 - (d + g - n) / a,
          y: (c - i) / r,
          width: g / a,
          height: u / r,
        });
        break;
      default:
        o = (c, d, u, g) => ({
          x: (c - i) / r,
          y: (d - n) / a,
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
          width: C,
          height: S,
        } of u.getClientRects()) C === 0 || S === 0 || l.push(o(g, b, C, S));
      }
    }
    return l.length === 0 ? null : l;
  }

  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e,
  }) {
    (s(this, Bo) || m(this, Bo, /* @__PURE__ */ new Map())).set(t, e);
  }

  removeChangedExistingAnnotation({
    annotationElementId: t,
  }) {
    let e;
    (e = s(this, Bo)) == null || e.delete(t);
  }

  renderAnnotationElement(t) {
    let n;
    const e = (n = s(this, Bo)) == null ? void 0 : n.get(t.data.id);
    if (!e) return;
    const i = s(this, Ii).getRawValue(e);
    i && (s(this, le) === ft.NONE && !i.hasBeenModified || i.renderAnnotationElement(t));
  }

  setMissingCanvas(t, e, i) {
    let r;
    const n = (r = s(this, Qs)) == null ? void 0 : r.get(t);
    n && (n.setCanvas(e, i), s(this, Qs).delete(t));
  }

  addMissingCanvas(t, e) {
    (s(this, Qs) || m(this, Qs, /* @__PURE__ */ new Map())).set(t, e);
  }
};
Io = new WeakMap(), hi = new WeakMap(), Fo = new WeakMap(), Qt = new WeakMap(), fe = new WeakMap(), No = new WeakMap(), Ii = new WeakMap(), Bo = new WeakMap(), Fi = new WeakMap(), Fe = new WeakMap(), Gs = new WeakMap(), Vs = new WeakMap(), Ho = new WeakMap(), qs = new WeakMap(), yn = new WeakMap(), Ni = new WeakMap(), Jr = new WeakMap(), Zh = new WeakMap(), tc = new WeakMap(), jo = new WeakMap(), ec = new WeakMap(), bn = new WeakMap(), Xs = new WeakMap(), zo = new WeakMap(), Ys = new WeakMap(), vn = new WeakMap(), Vu = new WeakMap(), Ks = new WeakMap(), $o = new WeakMap(), ic = new WeakMap(), Js = new WeakMap(), Qr = new WeakMap(), Uo = new WeakMap(), Qs = new WeakMap(), nc = new WeakMap(), le = new WeakMap(), kt = new WeakMap(), Zn = new WeakMap(), Zs = new WeakMap(), tr = new WeakMap(), sc = new WeakMap(), Wo = new WeakMap(), rc = new WeakMap(), er = new WeakMap(), wn = new WeakMap(), ts = new WeakMap(), ac = new WeakMap(), oc = new WeakMap(), Bi = new WeakMap(), Y = new WeakSet(), Qd = function ({
  anchorNode: t,
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, Kf = function (t) {
  const {
    currentLayer: e,
  } = this;
  if (e.hasTextLayer(t)) return e;
  for (const i of s(this, fe).values()) if (i.hasTextLayer(t)) return i;
  return null;
}, gy = function () {
  const t = document.getSelection();
  if (!t || t.isCollapsed) return;
  const i = A(this, Y, Qd).call(this, t).closest('.textLayer'); const
    n = this.getSelectionBoxes(i);
  n && (s(this, vn) || m(this, vn, new Iw(this)), s(this, vn).show(i, n, this.direction === 'ltr'));
}, my = function () {
  let r; let a; let
    o;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    s(this, Zn) && ((r = s(this, vn)) == null || r.hide(), m(this, Zn, null), A(this, Y, Ue).call(this, {
      hasSelectedText: !1,
    }));
    return;
  }
  const {
    anchorNode: e,
  } = t;
  if (e === s(this, Zn)) return;
  const n = A(this, Y, Qd).call(this, t).closest('.textLayer');
  if (!n) {
    s(this, Zn) && ((a = s(this, vn)) == null || a.hide(), m(this, Zn, null), A(this, Y, Ue).call(this, {
      hasSelectedText: !1,
    }));
    return;
  }
  if ((o = s(this, vn)) == null || o.hide(), m(this, Zn, e), A(this, Y, Ue).call(this, {
    hasSelectedText: !0,
  }), !(s(this, le) !== ft.HIGHLIGHT && s(this, le) !== ft.NONE) && (s(this, le) === ft.HIGHLIGHT && this.showAllEditors('highlight', !0, !0), m(this, Ys, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const l = s(this, le) === ft.HIGHLIGHT ? A(this, Y, Kf).call(this, n) : null;
    if (l == null || l.toggleDrawing(), s(this, $o)) {
      const c = new AbortController(); const d = this.combinedSignal(c); const
        u = (g) => {
          g.type === 'pointerup' && g.button !== 0 || (c.abort(), l == null || l.toggleDrawing(!0), g.type === 'pointerup' && A(this, Y, bh).call(this, 'main_toolbar'));
        };
      window.addEventListener('pointerup', u, {
        signal: d,
      }), window.addEventListener('blur', u, {
        signal: d,
      });
    } else l == null || l.toggleDrawing(!0), A(this, Y, bh).call(this, 'main_toolbar');
  }
}, bh = function (t = '') {
  s(this, le) === ft.HIGHLIGHT ? this.highlightSelection(t) : s(this, Zh) && A(this, Y, gy).call(this);
}, yy = function () {
  document.addEventListener('selectionchange', A(this, Y, my).bind(this), {
    signal: this._signal,
  });
}, by = function () {
  if (s(this, Xs)) return;
  m(this, Xs, new AbortController());
  const t = this.combinedSignal(s(this, Xs));
  window.addEventListener('focus', this.focus.bind(this), {
    signal: t,
  }), window.addEventListener('blur', this.blur.bind(this), {
    signal: t,
  });
}, vy = function () {
  let t;
  (t = s(this, Xs)) == null || t.abort(), m(this, Xs, null);
}, Jf = function () {
  if (s(this, Js)) return;
  m(this, Js, new AbortController());
  const t = this.combinedSignal(s(this, Js));
  window.addEventListener('keydown', this.keydown.bind(this), {
    signal: t,
  }), window.addEventListener('keyup', this.keyup.bind(this), {
    signal: t,
  });
}, wy = function () {
  let t;
  (t = s(this, Js)) == null || t.abort(), m(this, Js, null);
}, Qf = function () {
  if (s(this, Gs)) return;
  m(this, Gs, new AbortController());
  const t = this.combinedSignal(s(this, Gs));
  document.addEventListener('copy', this.copy.bind(this), {
    signal: t,
  }), document.addEventListener('cut', this.cut.bind(this), {
    signal: t,
  }), document.addEventListener('paste', this.paste.bind(this), {
    signal: t,
  });
}, Zf = function () {
  let t;
  (t = s(this, Gs)) == null || t.abort(), m(this, Gs, null);
}, Sy = function () {
  const t = this._signal;
  document.addEventListener('dragover', this.dragOver.bind(this), {
    signal: t,
  }), document.addEventListener('drop', this.drop.bind(this), {
    signal: t,
  });
}, Ue = function (t) {
  Object.entries(t).some(([i, n]) => s(this, rc)[i] !== n) && (this._eventBus.dispatch('annotationeditorstateschanged', {
    source: this,
    details: Object.assign(s(this, rc), t),
  }), s(this, le) === ft.HIGHLIGHT && t.hasSelectedEditor === !1 && A(this, Y, qn).call(this, [[At.HIGHLIGHT_FREE, !0]]));
}, qn = function (t) {
  this._eventBus.dispatch('annotationeditorparamschanged', {
    source: this,
    details: t,
  });
}, Ay = async function () {
  if (!s(this, Ks)) {
    m(this, Ks, !0);
    const t = [];
    for (const e of s(this, fe).values()) t.push(e.enable());
    await Promise.all(t);
    for (const e of s(this, Qt).values()) e.enable();
  }
}, _y = function () {
  if (this.unselectAll(), s(this, Ks)) {
    m(this, Ks, !1);
    for (const t of s(this, fe).values()) t.disable();
    for (const t of s(this, Qt).values()) t.disable();
  }
}, tp = function (t) {
  const e = s(this, fe).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, xy = function () {
  let t = null;
  for (t of s(this, kt)) ;
  return t;
}, vh = function () {
  if (s(this, Qt).size === 0) return !0;
  if (s(this, Qt).size === 1) for (const t of s(this, Qt).values()) return t.isEmpty();
  return !1;
}, ep = function (t) {
  for (const e of s(this, kt)) e.unselect();
  s(this, kt).clear();
  for (const e of t) e.isEmpty() || (s(this, kt).add(e), e.select());
  A(this, Y, Ue).call(this, {
    hasSelectedEditor: this.hasSelection,
  });
}, V(xo, 'TRANSLATE_SMALL', 1), V(xo, 'TRANSLATE_BIG', 10);
const Fr = xo;
let me; let Sn; let Yi; let Go; let An; let ci; let Vo; let _n; let Ze; let es; let Zr; let xn; let ir; let hn; let wh; let
  Zd;
const We = class We {
  constructor(t) {
    v(this, hn);
    v(this, me, null);
    v(this, Sn, !1);
    v(this, Yi, null);
    v(this, Go, null);
    v(this, An, null);
    v(this, ci, null);
    v(this, Vo, !1);
    v(this, _n, null);
    v(this, Ze, null);
    v(this, es, null);
    v(this, Zr, null);
    v(this, xn, !1);
    m(this, Ze, t), m(this, xn, t._uiManager.useNewAltTextFlow), s(We, ir) || m(We, ir, Object.freeze({
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
    t.append(e), s(this, xn) ? (t.classList.add('new'), t.setAttribute('data-l10n-id', s(We, ir).missing), e.setAttribute('data-l10n-id', s(We, ir)['missing-label'])) : (t.setAttribute('data-l10n-id', 'pdfjs-editor-alt-text-button'), e.setAttribute('data-l10n-id', 'pdfjs-editor-alt-text-button-label'));
    const i = s(this, Ze)._uiManager._signal;
    t.addEventListener('contextmenu', Ri, {
      signal: i,
    }), t.addEventListener('pointerdown', (r) => r.stopPropagation(), {
      signal: i,
    });
    const n = (r) => {
      r.preventDefault(), s(this, Ze)._uiManager.editAltText(s(this, Ze)), s(this, xn) && s(this, Ze)._reportTelemetry({
        action: 'pdfjs.image.alt_text.image_status_label_clicked',
        data: {
          label: s(this, hn, wh),
        },
      });
    };
    return t.addEventListener('click', n, {
      capture: !0,
      signal: i,
    }), t.addEventListener('keydown', (r) => {
      r.target === t && r.key === 'Enter' && (m(this, Vo, !0), n(r));
    }, {
      signal: i,
    }), await A(this, hn, Zd).call(this), t;
  }

  finish() {
    s(this, Yi) && (s(this, Yi).focus({
      focusVisible: s(this, Vo),
    }), m(this, Vo, !1));
  }

  isEmpty() {
    return s(this, xn) ? s(this, me) === null : !s(this, me) && !s(this, Sn);
  }

  hasData() {
    return s(this, xn) ? s(this, me) !== null || !!s(this, es) : this.isEmpty();
  }

  get guessedText() {
    return s(this, es);
  }

  async setGuessedText(t) {
    s(this, me) === null && (m(this, es, t), m(this, Zr, await We._l10n.get('pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer', {
      generatedAltText: t,
    })), A(this, hn, Zd).call(this));
  }

  toggleAltTextBadge(t = !1) {
    let e;
    if (!s(this, xn) || s(this, me)) {
      (e = s(this, _n)) == null || e.remove(), m(this, _n, null);
      return;
    }
    if (!s(this, _n)) {
      const i = m(this, _n, document.createElement('div'));
      i.className = 'noAltTextBadge', s(this, Ze).div.append(i);
    }
    s(this, _n).classList.toggle('hidden', !t);
  }

  serialize(t) {
    let e = s(this, me);
    return !t && s(this, es) === e && (e = s(this, Zr)), {
      altText: e,
      decorative: s(this, Sn),
      guessedText: s(this, es),
      textWithDisclaimer: s(this, Zr),
    };
  }

  get data() {
    return {
      altText: s(this, me),
      decorative: s(this, Sn),
    };
  }

  set data({
    altText: t,
    decorative: e,
    guessedText: i,
    textWithDisclaimer: n,
    cancel: r = !1,
  }) {
    i && (m(this, es, i), m(this, Zr, n)), !(s(this, me) === t && s(this, Sn) === e) && (r || (m(this, me, t), m(this, Sn, e)), A(this, hn, Zd).call(this));
  }

  toggle(t = !1) {
    s(this, Yi) && (!t && s(this, ci) && (clearTimeout(s(this, ci)), m(this, ci, null)), s(this, Yi).disabled = !t);
  }

  shown() {
    s(this, Ze)._reportTelemetry({
      action: 'pdfjs.image.alt_text.image_status_label_displayed',
      data: {
        label: s(this, hn, wh),
      },
    });
  }

  destroy() {
    let t; let
      e;
    (t = s(this, Yi)) == null || t.remove(), m(this, Yi, null), m(this, Go, null), m(this, An, null), (e = s(this, _n)) == null || e.remove(), m(this, _n, null);
  }
};
me = new WeakMap(), Sn = new WeakMap(), Yi = new WeakMap(), Go = new WeakMap(), An = new WeakMap(), ci = new WeakMap(), Vo = new WeakMap(), _n = new WeakMap(), Ze = new WeakMap(), es = new WeakMap(), Zr = new WeakMap(), xn = new WeakMap(), ir = new WeakMap(), hn = new WeakSet(), wh = function () {
  return s(this, me) && 'added' || s(this, me) === null && this.guessedText && 'review' || 'missing';
}, Zd = async function () {
  let n; let r; let
    a;
  const t = s(this, Yi);
  if (!t) return;
  if (s(this, xn)) {
    if (t.classList.toggle('done', !!s(this, me)), t.setAttribute('data-l10n-id', s(We, ir)[s(this, hn, wh)]), (n = s(this, Go)) == null || n.setAttribute('data-l10n-id', s(We, ir)[`${s(this, hn, wh)}-label`]), !s(this, me)) {
      (r = s(this, An)) == null || r.remove();
      return;
    }
  } else {
    if (!s(this, me) && !s(this, Sn)) {
      t.classList.remove('done'), (a = s(this, An)) == null || a.remove();
      return;
    }
    t.classList.add('done'), t.setAttribute('data-l10n-id', 'pdfjs-editor-alt-text-edit-button');
  }
  let e = s(this, An);
  if (!e) {
    m(this, An, e = document.createElement('span')), e.className = 'tooltip', e.setAttribute('role', 'tooltip'), e.id = `alt-text-tooltip-${s(this, Ze).id}`;
    const o = 100; const
      l = s(this, Ze)._uiManager._signal;
    l.addEventListener('abort', () => {
      clearTimeout(s(this, ci)), m(this, ci, null);
    }, {
      once: !0,
    }), t.addEventListener('mouseenter', () => {
      m(this, ci, setTimeout(() => {
        m(this, ci, null), s(this, An).classList.add('show'), s(this, Ze)._reportTelemetry({
          action: 'alt_text_tooltip',
        });
      }, o));
    }, {
      signal: l,
    }), t.addEventListener('mouseleave', () => {
      let c;
      s(this, ci) && (clearTimeout(s(this, ci)), m(this, ci, null)), (c = s(this, An)) == null || c.classList.remove('show');
    }, {
      signal: l,
    });
  }
  s(this, Sn) ? e.setAttribute('data-l10n-id', 'pdfjs-editor-alt-text-decorative-tooltip') : (e.removeAttribute('data-l10n-id'), e.textContent = s(this, me)), e.parentNode || t.append(e);
  const i = s(this, Ze).getElementForAltText();
  i == null || i.setAttribute('aria-describedby', e.id);
}, v(We, ir, null), V(We, '_l10n', null);
const Mu = We;
let Ce; let Hi; let ta; let $t; let lc; let ea; let Ki; let ia; let na; let sa; let hc; let
  ip;
class zd {
  constructor(t) {
    v(this, hc);
    v(this, Ce, null);
    v(this, Hi, null);
    v(this, ta, !1);
    v(this, $t, null);
    v(this, lc, null);
    v(this, ea, null);
    v(this, Ki, null);
    v(this, ia, null);
    v(this, na, !1);
    v(this, sa, null);
    m(this, $t, t);
  }

  renderForToolbar() {
    const t = m(this, Hi, document.createElement('button'));
    return t.className = 'comment', A(this, hc, ip).call(this, t, !1);
  }

  renderForStandalone() {
    const t = m(this, Ce, document.createElement('button'));
    t.className = 'annotationCommentButton';
    const e = s(this, $t).commentButtonPosition;
    if (e) {
      const {
        style: i,
      } = t;
      i.insetInlineEnd = `calc(${100 * (s(this, $t)._uiManager.direction === 'ltr' ? 1 - e[0] : e[0])}% - var(--comment-button-dim))`, i.top = `calc(${100 * e[1]}% - var(--comment-button-dim))`;
      const n = s(this, $t).commentButtonColor;
      n && (i.backgroundColor = n);
    }
    return A(this, hc, ip).call(this, t, !0);
  }

  focusButton() {
    setTimeout(() => {
      let t;
      (t = s(this, Ce) ?? s(this, Hi)) == null || t.focus();
    }, 0);
  }

  onUpdatedColor() {
    if (!s(this, Ce)) return;
    const t = s(this, $t).commentButtonColor;
    t && (s(this, Ce).style.backgroundColor = t), s(this, $t)._uiManager.updatePopupColor(s(this, $t));
  }

  get commentButtonWidth() {
    let t;
    return (((t = s(this, Ce)) == null ? void 0 : t.getBoundingClientRect().width) ?? 0) / s(this, $t).parent.boundingClientRect.width;
  }

  get commentPopupPositionInLayer() {
    if (s(this, sa)) return s(this, sa);
    if (!s(this, Ce)) return null;
    const {
      x: t,
      y: e,
      height: i,
    } = s(this, Ce).getBoundingClientRect(); const
      {
        x: n,
        y: r,
        width: a,
        height: o,
      } = s(this, $t).parent.boundingClientRect;
    return [(t - n) / a, (e + i - r) / o];
  }

  set commentPopupPositionInLayer(t) {
    m(this, sa, t);
  }

  hasDefaultPopupPosition() {
    return s(this, sa) === null;
  }

  removeStandaloneCommentButton() {
    let t;
    (t = s(this, Ce)) == null || t.remove(), m(this, Ce, null);
  }

  removeToolbarCommentButton() {
    let t;
    (t = s(this, Hi)) == null || t.remove(), m(this, Hi, null);
  }

  setCommentButtonStates({
    selected: t,
    hasPopup: e,
  }) {
    s(this, Ce) && (s(this, Ce).classList.toggle('selected', t), s(this, Ce).ariaExpanded = e);
  }

  edit(t) {
    const e = this.commentPopupPositionInLayer;
    let i; let
      n;
    if (e) [i, n] = e;
    else {
      [i, n] = s(this, $t).commentButtonPosition;
      const {
        width: d,
        height: u,
        x: g,
        y: b,
      } = s(this, $t);
      i = g + i * d, n = b + n * u;
    }
    const r = s(this, $t).parent.boundingClientRect; const
      {
        x: a,
        y: o,
        width: l,
        height: c,
      } = r;
    s(this, $t)._uiManager.editComment(s(this, $t), a + i * l, o + n * c, {
      ...t,
      parentDimensions: r,
    });
  }

  finish() {
    s(this, Hi) && (s(this, Hi).focus({
      focusVisible: s(this, ta),
    }), m(this, ta, !1));
  }

  isDeleted() {
    return s(this, na) || s(this, Ki) === '';
  }

  isEmpty() {
    return s(this, Ki) === null;
  }

  hasBeenEdited() {
    return this.isDeleted() || s(this, Ki) !== s(this, lc);
  }

  serialize() {
    return this.data;
  }

  get data() {
    return {
      text: s(this, Ki),
      richText: s(this, ea),
      date: s(this, ia),
      deleted: this.isDeleted(),
    };
  }

  set data(t) {
    if (t !== s(this, Ki) && m(this, ea, null), t === null) {
      m(this, Ki, ''), m(this, na, !0);
      return;
    }
    m(this, Ki, t), m(this, ia, /* @__PURE__ */ new Date()), m(this, na, !1);
  }

  setInitialText(t, e = null) {
    m(this, lc, t), this.data = t, m(this, ia, null), m(this, ea, e);
  }

  shown() {
  }

  destroy() {
    let t; let
      e;
    (t = s(this, Hi)) == null || t.remove(), m(this, Hi, null), (e = s(this, Ce)) == null || e.remove(), m(this, Ce, null), m(this, Ki, ''), m(this, ea, null), m(this, ia, null), m(this, $t, null), m(this, ta, !1), m(this, na, !1);
  }
}
Ce = new WeakMap(), Hi = new WeakMap(), ta = new WeakMap(), $t = new WeakMap(), lc = new WeakMap(), ea = new WeakMap(), Ki = new WeakMap(), ia = new WeakMap(), na = new WeakMap(), sa = new WeakMap(), hc = new WeakSet(), ip = function (t, e) {
  if (!s(this, $t)._uiManager.hasCommentManager()) return null;
  t.tabIndex = '0', t.ariaHasPopup = 'dialog', e ? (t.ariaControls = 'commentPopup', t.setAttribute('data-l10n-id', 'pdfjs-show-comment-button')) : (t.ariaControlsElements = [s(this, $t)._uiManager.getCommentDialogElement()], t.setAttribute('data-l10n-id', 'pdfjs-editor-edit-comment-button'));
  const i = s(this, $t)._uiManager._signal;
  if (!(i instanceof AbortSignal) || i.aborted) return t;
  t.addEventListener('contextmenu', Ri, {
    signal: i,
  }), e && (t.addEventListener('focusin', (r) => {
    s(this, $t)._focusEventsAllowed = !1, Kt(r);
  }, {
    capture: !0,
    signal: i,
  }), t.addEventListener('focusout', (r) => {
    s(this, $t)._focusEventsAllowed = !0, Kt(r);
  }, {
    capture: !0,
    signal: i,
  })), t.addEventListener('pointerdown', (r) => r.stopPropagation(), {
    signal: i,
  });
  const n = (r) => {
    r.preventDefault(), t === s(this, Hi) ? this.edit() : s(this, $t).toggleComment(!0);
  };
  return t.addEventListener('click', n, {
    capture: !0,
    signal: i,
  }), t.addEventListener('keydown', (r) => {
    r.target === t && r.key === 'Enter' && (m(this, ta, !0), n(r));
  }, {
    signal: i,
  }), t.addEventListener('pointerenter', () => {
    s(this, $t).toggleComment(!1, !0);
  }, {
    signal: i,
  }), t.addEventListener('pointerleave', () => {
    s(this, $t).toggleComment(!1, !1);
  }, {
    signal: i,
  }), t;
};
let qo; let ra; let cc; let dc; let uc; let fc; let pc; let is; let aa; let ns; let oa; let ss; let Nr; let Ey; let Cy; let
  Ty;
const Og = class Og {
  constructor({
    container: t,
    isPinchingDisabled: e = null,
    isPinchingStopped: i = null,
    onPinchStart: n = null,
    onPinching: r = null,
    onPinchEnd: a = null,
    signal: o,
  }) {
    v(this, Nr);
    v(this, qo);
    v(this, ra, !1);
    v(this, cc, null);
    v(this, dc);
    v(this, uc);
    v(this, fc);
    v(this, pc);
    v(this, is, null);
    v(this, aa);
    v(this, ns, null);
    v(this, oa);
    v(this, ss, null);
    m(this, qo, t), m(this, cc, i), m(this, dc, e), m(this, uc, n), m(this, fc, r), m(this, pc, a), m(this, oa, new AbortController()), m(this, aa, AbortSignal.any([o, s(this, oa).signal])), t.addEventListener('touchstart', A(this, Nr, Ey).bind(this), {
      passive: !1,
      signal: s(this, aa),
    });
  }

  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return 35 / dn.pixelRatio;
  }

  destroy() {
    let t; let
      e;
    (t = s(this, oa)) == null || t.abort(), m(this, oa, null), (e = s(this, is)) == null || e.abort(), m(this, is, null);
  }
};
qo = new WeakMap(), ra = new WeakMap(), cc = new WeakMap(), dc = new WeakMap(), uc = new WeakMap(), fc = new WeakMap(), pc = new WeakMap(), is = new WeakMap(), aa = new WeakMap(), ns = new WeakMap(), oa = new WeakMap(), ss = new WeakMap(), Nr = new WeakSet(), Ey = function (t) {
  let n; let r; let
    a;
  if ((n = s(this, dc)) != null && n.call(this)) return;
  if (t.touches.length === 1) {
    if (s(this, is)) return;
    const o = m(this, is, new AbortController()); const l = AbortSignal.any([s(this, aa), o.signal]); const c = s(this, qo); const d = {
      capture: !0,
      signal: l,
      passive: !1,
    }; const
      u = (g) => {
        let b;
        g.pointerType === 'touch' && ((b = s(this, is)) == null || b.abort(), m(this, is, null));
      };
    c.addEventListener('pointerdown', (g) => {
      g.pointerType === 'touch' && (Kt(g), u(g));
    }, d), c.addEventListener('pointerup', u, d), c.addEventListener('pointercancel', u, d);
    return;
  }
  if (!s(this, ss)) {
    m(this, ss, new AbortController());
    const o = AbortSignal.any([s(this, aa), s(this, ss).signal]); const l = s(this, qo); const
      c = {
        signal: o,
        capture: !1,
        passive: !1,
      };
    l.addEventListener('touchmove', A(this, Nr, Cy).bind(this), c);
    const d = A(this, Nr, Ty).bind(this);
    l.addEventListener('touchend', d, c), l.addEventListener('touchcancel', d, c), c.capture = !0, l.addEventListener('pointerdown', Kt, c), l.addEventListener('pointermove', Kt, c), l.addEventListener('pointercancel', Kt, c), l.addEventListener('pointerup', Kt, c), (r = s(this, uc)) == null || r.call(this);
  }
  if (Kt(t), t.touches.length !== 2 || (a = s(this, cc)) != null && a.call(this)) {
    m(this, ns, null);
    return;
  }
  let [e, i] = t.touches;
  e.identifier > i.identifier && ([e, i] = [i, e]), m(this, ns, {
    touch0X: e.screenX,
    touch0Y: e.screenY,
    touch1X: i.screenX,
    touch1Y: i.screenY,
  });
}, Cy = function (t) {
  let p;
  if (!s(this, ns) || t.touches.length !== 2) return;
  Kt(t);
  let [e, i] = t.touches;
  e.identifier > i.identifier && ([e, i] = [i, e]);
  const {
    screenX: n,
    screenY: r,
  } = e; const {
    screenX: a,
    screenY: o,
  } = i; const l = s(this, ns); const {
    touch0X: c,
    touch0Y: d,
    touch1X: u,
    touch1Y: g,
  } = l; const b = u - c; const C = g - d; const S = a - n; const L = o - r; const k = Math.hypot(S, L) || 1; const
    M = Math.hypot(b, C) || 1;
  if (!s(this, ra) && Math.abs(M - k) <= Og.MIN_TOUCH_DISTANCE_TO_PINCH) return;
  if (l.touch0X = n, l.touch0Y = r, l.touch1X = a, l.touch1Y = o, !s(this, ra)) {
    m(this, ra, !0);
    return;
  }
  const R = [(n + a) / 2, (r + o) / 2];
  (p = s(this, fc)) == null || p.call(this, R, M, k);
}, Ty = function (t) {
  let e;
  t.touches.length >= 2 || (s(this, ss) && (s(this, ss).abort(), m(this, ss, null), (e = s(this, pc)) == null || e.call(this)), s(this, ns) && (Kt(t), m(this, ns, null), m(this, ra, !1)));
};
const Uh = Og;
let la; let Ji; let Vt; let Nt; let rs; let Xo; let nr; let gc; let Te; let ha; let as; let En; let sr; let mc; let ca; let di; let yc; let da; let os; let Cn; let Yo; let Ko; let ji; let ua; let bc; let qu; let lt; let np; let vc; let sp; let tu; let Py; let ky; let rp; let eu; let ap; let Ry; let Ly; let My; let op; let Dy; let lp; let Oy; let Iy; let Fy; let hp; let
  Sh;
const gt = class gt {
  constructor(t) {
    v(this, lt);
    v(this, la, null);
    v(this, Ji, null);
    v(this, Vt, null);
    v(this, Nt, null);
    v(this, rs, null);
    v(this, Xo, !1);
    v(this, nr, null);
    v(this, gc, '');
    v(this, Te, null);
    v(this, ha, null);
    v(this, as, null);
    v(this, En, null);
    v(this, sr, null);
    v(this, mc, '');
    v(this, ca, !1);
    v(this, di, null);
    v(this, yc, !1);
    v(this, da, !1);
    v(this, os, !1);
    v(this, Cn, null);
    v(this, Yo, 0);
    v(this, Ko, 0);
    v(this, ji, null);
    v(this, ua, null);
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
        pageHeight: n,
        pageX: r,
        pageY: a,
      },
    } = this.parent.viewport;
    this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [i, n], this.pageTranslation = [r, a];
    const [o, l] = this.parentDimensions;
    this.x = t.x / o, this.y = t.y / l, this.isAttachedToDOM = !1, this.deleted = !1;
  }

  static get _resizerKeyboardManager() {
    const t = gt.prototype._resizeWithKeyboard; const e = Fr.TRANSLATE_SMALL; const
      i = Fr.TRANSLATE_BIG;
    return yt(this, '_resizerKeyboardManager', new Md([[['ArrowLeft', 'mac+ArrowLeft'], t, {
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
    const e = new Bw({
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
    return s(this, bc);
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
    this.div.style.zIndex = s(this, qu);
  }

  setParent(t) {
    let e;
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : (A(this, lt, Sh).call(this), (e = s(this, En)) == null || e.remove(), m(this, En, null)), this.parent = t;
  }

  focusin(t) {
    this._focusEventsAllowed && (s(this, ca) ? m(this, ca, !1) : this.parent.setSelected(this));
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

  setAt(t, e, i, n) {
    const [r, a] = this.parentDimensions;
    [i, n] = this.screenToPageTranslation(i, n), this.x = (t + i) / r, this.y = (e + n) / a, this.fixAndSetPosition();
  }

  _moveAfterPaste(t, e) {
    const [i, n] = this.parentDimensions;
    this.setAt(t * i, e * n, this.width * i, this.height * n), this._onTranslated();
  }

  translate(t, e) {
    A(this, lt, np).call(this, this.parentDimensions, t, e);
  }

  translateInPage(t, e) {
    s(this, di) || m(this, di, [this.x, this.y, this.width, this.height]), A(this, lt, np).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: 'nearest',
    });
  }

  translationDone() {
    this._onTranslated(this.x, this.y);
  }

  drag(t, e) {
    s(this, di) || m(this, di, [this.x, this.y, this.width, this.height]);
    const {
      div: i,
      parentDimensions: [n, r],
    } = this;
    if (this.x += t / n, this.y += e / r, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
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
    return !!s(this, di) && (s(this, di)[0] !== this.x || s(this, di)[1] !== this.y);
  }

  get _hasBeenResized() {
    return !!s(this, di) && (s(this, di)[2] !== this.width || s(this, di)[3] !== this.height);
  }

  getBaseTranslation() {
    const [t, e] = this.parentDimensions; const {
      _borderLineWidth: i,
    } = gt; const n = i / t; const
      r = i / e;
    switch (this.rotation) {
      case 90:
        return [-n, r];
      case 180:
        return [n, r];
      case 270:
        return [n, -r];
      default:
        return [-n, -r];
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
      pageDimensions: [i, n],
    } = this;
    let {
      x: r,
      y: a,
      width: o,
      height: l,
    } = this;
    if (o *= i, l *= n, r *= i, a *= n, this._mustFixPosition) {
      switch (t) {
        case 0:
          r = ze(r, 0, i - o), a = ze(a, 0, n - l);
          break;
        case 90:
          r = ze(r, 0, i - l), a = ze(a, o, n);
          break;
        case 180:
          r = ze(r, o, i), a = ze(a, l, n);
          break;
        case 270:
          r = ze(r, l, i), a = ze(a, 0, n - o);
          break;
      }
    }
    this.x = r /= i, this.y = a /= n;
    const [c, d] = this.getBaseTranslation();
    r += c, a += d, e.left = `${(100 * r).toFixed(2)}%`, e.top = `${(100 * a).toFixed(2)}%`, this.moveInDOM();
  }

  screenToPageTranslation(t, e) {
    let i;
    return A(i = gt, vc, sp).call(i, t, e, this.parentRotation);
  }

  pageTranslationToScreen(t, e) {
    let i;
    return A(i = gt, vc, sp).call(i, t, e, 360 - this.parentRotation);
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
    (t = s(this, Vt)) == null || t.finish();
  }

  get toolbarButtons() {
    return null;
  }

  async addEditToolbar() {
    if (this._editToolbar || s(this, da)) return this._editToolbar;
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
    (t = this._editToolbar) == null || t.remove(), this._editToolbar = null, (e = s(this, Vt)) == null || e.destroy();
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
    return s(this, Vt) || (Mu.initialize(gt._l10n), m(this, Vt, new Mu(this)), s(this, la) && (s(this, Vt).data = s(this, la), m(this, la, null))), s(this, Vt);
  }

  get altTextData() {
    let t;
    return (t = s(this, Vt)) == null ? void 0 : t.data;
  }

  set altTextData(t) {
    s(this, Vt) && (s(this, Vt).data = t);
  }

  get guessedAltText() {
    let t;
    return (t = s(this, Vt)) == null ? void 0 : t.guessedText;
  }

  async setGuessedAltText(t) {
    let e;
    await ((e = s(this, Vt)) == null ? void 0 : e.setGuessedText(t));
  }

  serializeAltText(t) {
    let e;
    return (e = s(this, Vt)) == null ? void 0 : e.serialize(t);
  }

  hasAltText() {
    return !!s(this, Vt) && !s(this, Vt).isEmpty();
  }

  hasAltTextData() {
    let t;
    return ((t = s(this, Vt)) == null ? void 0 : t.hasData()) ?? !1;
  }

  focusCommentButton() {
    let t;
    (t = s(this, Nt)) == null || t.focusButton();
  }

  addCommentButton() {
    return s(this, Nt) || m(this, Nt, new zd(this));
  }

  addStandaloneCommentButton() {
    if (s(this, rs)) {
      this._uiManager.isEditingMode() && s(this, rs).classList.remove('hidden');
      return;
    }
    this.hasComment && (m(this, rs, s(this, Nt).renderForStandalone()), this.div.append(s(this, rs)));
  }

  removeStandaloneCommentButton() {
    s(this, Nt).removeStandaloneCommentButton(), m(this, rs, null);
  }

  hideStandaloneCommentButton() {
    let t;
    (t = s(this, rs)) == null || t.classList.add('hidden');
  }

  get comment() {
    const {
      data: {
        richText: t,
        text: e,
        date: i,
        deleted: n,
      },
    } = s(this, Nt);
    return {
      text: e,
      richText: t,
      date: i,
      deleted: n,
      color: this.getNonHCMColor(),
      opacity: this.opacity ?? 1,
    };
  }

  set comment(t) {
    s(this, Nt) || m(this, Nt, new zd(this)), s(this, Nt).data = t, this.hasComment ? (this.removeCommentButtonFromToolbar(), this.addStandaloneCommentButton(), this._uiManager.updateComment(this)) : (this.addCommentButtonInToolbar(), this.removeStandaloneCommentButton(), this._uiManager.removeComment(this));
  }

  setCommentData({
    comment: t,
    popupRef: e,
    richText: i,
  }) {
    if (!e || (s(this, Nt) || m(this, Nt, new zd(this)), s(this, Nt).setInitialText(t, i), !this.annotationElementId)) return;
    const n = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
    n && this.updateFromAnnotationLayer(n);
  }

  get hasEditedComment() {
    let t;
    return (t = s(this, Nt)) == null ? void 0 : t.hasBeenEdited();
  }

  get hasDeletedComment() {
    let t;
    return (t = s(this, Nt)) == null ? void 0 : t.isDeleted();
  }

  get hasComment() {
    return !!s(this, Nt) && !s(this, Nt).isEmpty() && !s(this, Nt).isDeleted();
  }

  async editComment(t) {
    s(this, Nt) || m(this, Nt, new zd(this)), s(this, Nt).edit(t);
  }

  toggleComment(t, e = void 0) {
    this.hasComment && this._uiManager.toggleComment(this, t, e);
  }

  setSelectedCommentButton(t) {
    s(this, Nt).setSelectedButton(t);
  }

  addComment(t) {
    if (this.hasEditedComment) {
      const [, , , n] = t.rect; const [r] = this.pageDimensions; const [a] = this.pageTranslation; const o = a + r + 1; const l = n - 100; const
        c = o + 180;
      t.popup = {
        contents: this.comment.text,
        deleted: this.comment.deleted,
        rect: [o, l, c, n],
      };
    }
  }

  updateFromAnnotationLayer({
    popup: {
      contents: t,
      deleted: e,
    },
  }) {
    s(this, Nt).data = e ? null : t;
  }

  get parentBoundingClientRect() {
    return this.parent.boundingClientRect;
  }

  render() {
    let a;
    const t = this.div = document.createElement('div');
    t.setAttribute('data-editor-rotation', (360 - this.rotation) % 360), t.className = this.name, t.setAttribute('id', this.id), t.tabIndex = s(this, Xo) ? -1 : 0, t.setAttribute('role', 'application'), this.defaultL10nId && t.setAttribute('data-l10n-id', this.defaultL10nId), this._isVisible || t.classList.add('hidden'), this.setInForeground(), A(this, lt, lp).call(this);
    const [e, i] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (t.style.maxWidth = `${(100 * i / e).toFixed(2)}%`, t.style.maxHeight = `${(100 * e / i).toFixed(2)}%`);
    const [n, r] = this.getInitialTranslation();
    return this.translate(n, r), fy(this, t, ['keydown', 'pointerdown', 'dblclick']), this.isResizable && this._uiManager._supportsPinchToZoom && (s(this, ua) || m(this, ua, new Uh({
      container: t,
      isPinchingDisabled: () => !this.isSelected,
      onPinchStart: A(this, lt, Ry).bind(this),
      onPinching: A(this, lt, Ly).bind(this),
      onPinchEnd: A(this, lt, My).bind(this),
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
    if (m(this, ca, !0), this._isDraggable) {
      A(this, lt, Dy).call(this, t);
      return;
    }
    A(this, lt, op).call(this, t);
  }

  _onStartDragging() {
  }

  _onStopDragging() {
  }

  moveInDOM() {
    s(this, Cn) && clearTimeout(s(this, Cn)), m(this, Cn, setTimeout(() => {
      let t;
      m(this, Cn, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }

  _setParentAndPosition(t, e, i) {
    t.changeParent(this), this.x = e, this.y = i, this.fixAndSetPosition(), this._onTranslated();
  }

  getRect(t, e, i = this.rotation) {
    const n = this.parentScale; const [r, a] = this.pageDimensions; const [o, l] = this.pageTranslation; const c = t / n; const d = e / n; const u = this.x * r; const g = this.y * a; const b = this.width * r; const
      C = this.height * a;
    switch (i) {
      case 0:
        return [u + c + o, a - g - d - C + l, u + c + b + o, a - g - d + l];
      case 90:
        return [u + d + o, a - g + c + l, u + d + C + o, a - g + c + b + l];
      case 180:
        return [u - c - b + o, a - g + d + l, u - c + o, a - g + d + C + l];
      case 270:
        return [u - d - C + o, a - g - c - b + l, u - d + o, a - g - c + l];
      default:
        throw new Error('Invalid rotation');
    }
  }

  getRectInCurrentCoords(t, e) {
    const [i, n, r, a] = t; const o = r - i; const
      l = a - n;
    switch (this.rotation) {
      case 0:
        return [i, e - a, o, l];
      case 90:
        return [i, e - n, l, o];
      case 180:
        return [r, e - n, o, l];
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
    (t = s(this, Nt)) == null || t.onUpdatedColor();
  }

  getData() {
    const {
      comment: {
        text: t,
        color: e,
        date: i,
        opacity: n,
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
      opacity: n,
    };
  }

  onceAdded(t) {
  }

  isEmpty() {
    return !1;
  }

  enableEditMode() {
    return this.isInEditMode() ? !1 : (this.parent.setEditingState(!1), m(this, da, !0), !0);
  }

  disableEditMode() {
    return this.isInEditMode() ? (this.parent.setEditingState(!0), m(this, da, !1), !0) : !1;
  }

  isInEditMode() {
    return s(this, da);
  }

  shouldGetKeyboardEvents() {
    return s(this, os);
  }

  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }

  get isOnScreen() {
    const {
      top: t,
      left: e,
      bottom: i,
      right: n,
    } = this.getClientDimensions(); const
      {
        innerHeight: r,
        innerWidth: a,
      } = window;
    return e < a && n > 0 && t < r && i > 0;
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
    const n = new this.prototype.constructor({
      parent: e,
      id: e.getNextId(),
      uiManager: i,
      annotationElementId: t.annotationElementId,
      creationDate: t.creationDate,
      modificationDate: t.modificationDate,
    });
    n.rotation = t.rotation, m(n, la, t.accessibilityData), n._isCopy = t.isCopy || !1;
    const [r, a] = n.pageDimensions; const
      [o, l, c, d] = n.getRectInCurrentCoords(t.rect, a);
    return n.x = o / r, n.y = l / a, n.width = c / r, n.height = d / a, n;
  }

  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }

  remove() {
    let t; let
      e;
    if ((t = s(this, sr)) == null || t.abort(), m(this, sr, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), s(this, Cn) && (clearTimeout(s(this, Cn)), m(this, Cn, null)), A(this, lt, Sh).call(this), this.removeEditToolbar(), s(this, ji)) {
      for (const i of s(this, ji).values()) clearTimeout(i);
      m(this, ji, null);
    }
    this.parent = null, (e = s(this, ua)) == null || e.destroy(), m(this, ua, null);
  }

  get isResizable() {
    return !1;
  }

  makeResizable() {
    this.isResizable && (A(this, lt, Py).call(this), s(this, Te).classList.remove('hidden'));
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
      [i, n, r, a] = this.getPDFRect();
    return [gt._round(i + (r - i) * t), gt._round(n + (a - n) * (1 - e))];
  }

  get commentButtonColor() {
    return this._uiManager.makeCommentColor(this.getNonHCMColor(), this.opacity);
  }

  get commentPopupPosition() {
    return s(this, Nt).commentPopupPositionInLayer;
  }

  set commentPopupPosition(t) {
    s(this, Nt).commentPopupPositionInLayer = t;
  }

  hasDefaultPopupPosition() {
    return s(this, Nt).hasDefaultPopupPosition();
  }

  get commentButtonWidth() {
    return s(this, Nt).commentButtonWidth;
  }

  get elementBeforePopup() {
    return this.div;
  }

  setCommentButtonStates(t) {
    s(this, Nt).setCommentButtonStates(t);
  }

  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== 'Enter') return;
    this._uiManager.setSelected(this), m(this, as, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height,
    });
    const e = s(this, Te).children;
    if (!s(this, Ji)) {
      m(this, Ji, Array.from(e));
      const a = A(this, lt, Oy).bind(this); const o = A(this, lt, Iy).bind(this); const
        l = this._uiManager._signal;
      for (const c of s(this, Ji)) {
        const d = c.getAttribute('data-resizer-name');
        c.setAttribute('role', 'spinbutton'), c.addEventListener('keydown', a, {
          signal: l,
        }), c.addEventListener('blur', o, {
          signal: l,
        }), c.addEventListener('focus', A(this, lt, Fy).bind(this, d), {
          signal: l,
        }), c.setAttribute('data-l10n-id', gt._l10nResizer[d]);
      }
    }
    const i = s(this, Ji)[0];
    let n = 0;
    for (const a of e) {
      if (a === i) break;
      n++;
    }
    const r = (360 - this.rotation + this.parentRotation) % 360 / 90 * (s(this, Ji).length / 4);
    if (r !== n) {
      if (r < n) for (let o = 0; o < n - r; o++) s(this, Te).append(s(this, Te).firstChild);
      else if (r > n) for (let o = 0; o < r - n; o++) s(this, Te).firstChild.before(s(this, Te).lastChild);
      let a = 0;
      for (const o of e) {
        const c = s(this, Ji)[a++].getAttribute('data-resizer-name');
        o.setAttribute('data-l10n-id', gt._l10nResizer[c]);
      }
    }
    A(this, lt, hp).call(this, 0), m(this, os, !0), s(this, Te).firstChild.focus({
      focusVisible: !0,
    }), t.preventDefault(), t.stopImmediatePropagation();
  }

  _resizeWithKeyboard(t, e) {
    s(this, os) && A(this, lt, ap).call(this, s(this, mc), {
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
        let n; let
          r;
        (n = this.div) != null && n.classList.contains('selectedEditor') && ((r = this._editToolbar) == null || r.show());
      });
      return;
    }
    (e = this._editToolbar) == null || e.show(), (i = s(this, Vt)) == null || i.toggleAltTextBadge(!1);
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
    let t; let e; let i; let n; let
      r;
    this.isSelected && (this.isSelected = !1, (t = s(this, Te)) == null || t.classList.add('hidden'), (e = this.div) == null || e.classList.remove('selectedEditor'), (i = this.div) != null && i.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0,
    }), (n = this._editToolbar) == null || n.hide(), (r = s(this, Vt)) == null || r.toggleAltTextBadge(!0), this.hasComment && this._uiManager.toggleComment(this, !1, !1));
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
    return s(this, yc);
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
      s(this, ji) || m(this, ji, /* @__PURE__ */ new Map());
      const {
        action: i,
      } = t;
      let n = s(this, ji).get(i);
      n && clearTimeout(n), n = setTimeout(() => {
        this._reportTelemetry(t), s(this, ji).delete(i), s(this, ji).size === 0 && m(this, ji, null);
      }, gt._telemetryTimeout), s(this, ji).set(i, n);
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
    if (!s(this, En) && !this.deleted) {
      m(this, En, t.addFakeAnnotation(this));
      return;
    }
    if (this.deleted) {
      s(this, En).remove(), m(this, En, null);
      return;
    }
    (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) && s(this, En).updateEdited({
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
la = new WeakMap(), Ji = new WeakMap(), Vt = new WeakMap(), Nt = new WeakMap(), rs = new WeakMap(), Xo = new WeakMap(), nr = new WeakMap(), gc = new WeakMap(), Te = new WeakMap(), ha = new WeakMap(), as = new WeakMap(), En = new WeakMap(), sr = new WeakMap(), mc = new WeakMap(), ca = new WeakMap(), di = new WeakMap(), yc = new WeakMap(), da = new WeakMap(), os = new WeakMap(), Cn = new WeakMap(), Yo = new WeakMap(), Ko = new WeakMap(), ji = new WeakMap(), ua = new WeakMap(), bc = new WeakMap(), qu = new WeakMap(), lt = new WeakSet(), np = function ([t, e], i, n) {
  [i, n] = this.screenToPageTranslation(i, n), this.x += i / t, this.y += n / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
}, vc = new WeakSet(), sp = function (t, e, i) {
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
}, Py = function () {
  if (s(this, Te)) return;
  m(this, Te, document.createElement('div')), s(this, Te).classList.add('resizers');
  const t = this._willKeepAspectRatio ? ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'] : ['topLeft', 'topMiddle', 'topRight', 'middleRight', 'bottomRight', 'bottomMiddle', 'bottomLeft', 'middleLeft']; const
    e = this._uiManager._signal;
  for (const i of t) {
    const n = document.createElement('div');
    s(this, Te).append(n), n.classList.add('resizer', i), n.setAttribute('data-resizer-name', i), n.addEventListener('pointerdown', A(this, lt, ky).bind(this, i), {
      signal: e,
    }), n.addEventListener('contextmenu', Ri, {
      signal: e,
    }), n.tabIndex = -1;
  }
  this.div.prepend(s(this, Te));
}, ky = function (t, e) {
  let d;
  e.preventDefault();
  const {
    isMac: i,
  } = _e.platform;
  if (e.button !== 0 || e.ctrlKey && i) return;
  (d = s(this, Vt)) == null || d.toggle(!1);
  const n = this._isDraggable;
  this._isDraggable = !1, m(this, ha, [e.screenX, e.screenY]);
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
  }), m(this, as, {
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
    r.abort(), this.parent.togglePointerEvents(!0), (u = s(this, Vt)) == null || u.toggle(!0), this._isDraggable = n, this.parent.div.style.cursor = o, this.div.style.cursor = l, A(this, lt, eu).call(this);
  };
  window.addEventListener('pointerup', c, {
    signal: a,
  }), window.addEventListener('blur', c, {
    signal: a,
  });
}, rp = function (t, e, i, n) {
  this.width = i, this.height = n, this.x = t, this.y = e, this.setDims(), this.fixAndSetPosition(), this._onResized();
}, eu = function () {
  if (!s(this, as)) return;
  const {
    savedX: t,
    savedY: e,
    savedWidth: i,
    savedHeight: n,
  } = s(this, as);
  m(this, as, null);
  const r = this.x; const a = this.y; const o = this.width; const
    l = this.height;
  r === t && a === e && o === i && l === n || this.addCommands({
    cmd: A(this, lt, rp).bind(this, r, a, o, l),
    undo: A(this, lt, rp).bind(this, t, e, i, n),
    mustExec: !0,
  });
}, ap = function (t, e) {
  const [i, n] = this.parentDimensions; const r = this.x; const a = this.y; const o = this.width; const l = this.height; const c = gt.MIN_SIZE / i; const d = gt.MIN_SIZE / n; const u = A(this, lt, tu).call(this, this.rotation); const g = (z, w) => [u[0] * z + u[2] * w, u[1] * z + u[3] * w]; const b = A(this, lt, tu).call(this, 360 - this.rotation); const
    C = (z, w) => [b[0] * z + b[2] * w, b[1] * z + b[3] * w];
  let S; let L; let k = !1; let
    M = !1;
  switch (t) {
    case 'topLeft':
      k = !0, S = (z, w) => [0, 0], L = (z, w) => [z, w];
      break;
    case 'topMiddle':
      S = (z, w) => [z / 2, 0], L = (z, w) => [z / 2, w];
      break;
    case 'topRight':
      k = !0, S = (z, w) => [z, 0], L = (z, w) => [0, w];
      break;
    case 'middleRight':
      M = !0, S = (z, w) => [z, w / 2], L = (z, w) => [0, w / 2];
      break;
    case 'bottomRight':
      k = !0, S = (z, w) => [z, w], L = (z, w) => [0, 0];
      break;
    case 'bottomMiddle':
      S = (z, w) => [z / 2, w], L = (z, w) => [z / 2, 0];
      break;
    case 'bottomLeft':
      k = !0, S = (z, w) => [0, w], L = (z, w) => [z, 0];
      break;
    case 'middleLeft':
      M = !0, S = (z, w) => [0, w / 2], L = (z, w) => [z, w / 2];
      break;
  }
  const R = S(o, l); const
    p = L(o, l);
  let f = g(...p);
  const y = gt._round(r + f[0]); const
    _ = gt._round(a + f[1]);
  let T = 1; let P = 1; let E; let
    D;
  if (e.fromKeyboard) {
    ({
      deltaX: E,
      deltaY: D,
    } = e);
  } else {
    const {
      screenX: z,
      screenY: w,
    } = e; const
      [K, F] = s(this, ha);
    [E, D] = this.screenToPageTranslation(z - K, w - F), s(this, ha)[0] = z, s(this, ha)[1] = w;
  }
  if ([E, D] = C(E / i, D / n), k) {
    const z = Math.hypot(o, l);
    T = P = Math.max(Math.min(Math.hypot(p[0] - R[0] - E, p[1] - R[1] - D) / z, 1 / o, 1 / l), c / o, d / l);
  } else M ? T = ze(Math.abs(p[0] - R[0] - E), c, 1) / o : P = ze(Math.abs(p[1] - R[1] - D), d, 1) / l;
  const N = gt._round(o * T); const
    I = gt._round(l * P);
  f = g(...L(N, I));
  const B = y - f[0]; const
    j = _ - f[1];
  s(this, di) || m(this, di, [this.x, this.y, this.width, this.height]), this.width = N, this.height = I, this.x = B, this.y = j, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, Ry = function () {
  let t;
  m(this, as, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height,
  }), (t = s(this, Vt)) == null || t.toggle(!1), this.parent.togglePointerEvents(!1);
}, Ly = function (t, e, i) {
  let r = 0.7 * (i / e) + 1 - 0.7;
  if (r === 1) return;
  const a = A(this, lt, tu).call(this, this.rotation); const o = (y, _) => [a[0] * y + a[2] * _, a[1] * y + a[3] * _]; const [l, c] = this.parentDimensions; const d = this.x; const u = this.y; const g = this.width; const b = this.height; const C = gt.MIN_SIZE / l; const
    S = gt.MIN_SIZE / c;
  r = Math.max(Math.min(r, 1 / g, 1 / b), C / g, S / b);
  const L = gt._round(g * r); const
    k = gt._round(b * r);
  if (L === g && k === b) return;
  s(this, di) || m(this, di, [d, u, g, b]);
  const M = o(g / 2, b / 2); const R = gt._round(d + M[0]); const p = gt._round(u + M[1]); const
    f = o(L / 2, k / 2);
  this.x = R - f[0], this.y = p - f[1], this.width = L, this.height = k, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, My = function () {
  let t;
  (t = s(this, Vt)) == null || t.toggle(!0), this.parent.togglePointerEvents(!0), A(this, lt, eu).call(this);
}, op = function (t) {
  const {
    isMac: e,
  } = _e.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, Dy = function (t) {
  const {
    isSelected: e,
  } = this;
  this._uiManager.setUpDragSession();
  let i = !1;
  const n = new AbortController(); const r = this._uiManager.combinedSignal(n); const a = {
    capture: !0,
    passive: !1,
    signal: r,
  }; const
    o = (c) => {
      n.abort(), m(this, nr, null), m(this, ca, !1), this._uiManager.endDragSession() || A(this, lt, op).call(this, c), i && this._onStopDragging();
    };
  e && (m(this, Yo, t.clientX), m(this, Ko, t.clientY), m(this, nr, t.pointerId), m(this, gc, t.pointerType), window.addEventListener('pointermove', (c) => {
    i || (i = !0, this._uiManager.toggleComment(this, !0, !1), this._onStartDragging());
    const {
      clientX: d,
      clientY: u,
      pointerId: g,
    } = c;
    if (g !== s(this, nr)) {
      Kt(c);
      return;
    }
    const [b, C] = this.screenToPageTranslation(d - s(this, Yo), u - s(this, Ko));
    m(this, Yo, d), m(this, Ko, u), this._uiManager.dragSelectedEditors(b, C);
  }, a), window.addEventListener('touchmove', Kt, a), window.addEventListener('pointerdown', (c) => {
    c.pointerType === s(this, gc) && (s(this, ua) || c.isPrimary) && o(c), Kt(c);
  }, a));
  const l = (c) => {
    if (!s(this, nr) || s(this, nr) === c.pointerId) {
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
  if (s(this, sr) || !this.div) return;
  m(this, sr, new AbortController());
  const t = this._uiManager.combinedSignal(s(this, sr));
  this.div.addEventListener('focusin', this.focusin.bind(this), {
    signal: t,
  }), this.div.addEventListener('focusout', this.focusout.bind(this), {
    signal: t,
  });
}, Oy = function (t) {
  gt._resizerKeyboardManager.exec(this, t);
}, Iy = function (t) {
  let e;
  s(this, os) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== s(this, Te) && A(this, lt, Sh).call(this);
}, Fy = function (t) {
  m(this, mc, s(this, os) ? t : '');
}, hp = function (t) {
  if (s(this, Ji)) for (const e of s(this, Ji)) e.tabIndex = t;
}, Sh = function () {
  m(this, os, !1), A(this, lt, hp).call(this, -1), A(this, lt, eu).call(this);
}, v(gt, vc), V(gt, '_l10n', null), V(gt, '_l10nResizer', null), V(gt, '_borderLineWidth', -1), V(gt, '_colorManager', new Yf()), V(gt, '_zIndex', 1), V(gt, '_telemetryTimeout', 1e3);
const Ut = gt;
class Bw extends Ut {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }

  serialize() {
    return this.serializeDeleted();
  }
}
const lm = 3285377520; const Li = 4294901760; const
  gn = 65535;
class Ny {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : lm, this.h2 = t ? t & 4294967295 : lm;
  }

  update(t) {
    let e; let
      i;
    if (typeof t === 'string') {
      e = new Uint8Array(t.length * 2), i = 0;
      for (let S = 0, L = t.length; S < L; S++) {
        const k = t.charCodeAt(S);
        k <= 255 ? e[i++] = k : (e[i++] = k >>> 8, e[i++] = k & 255);
      }
    } else if (ArrayBuffer.isView(t)) e = t.slice(), i = e.byteLength;
    else throw new Error('Invalid data format, must be a string or TypedArray.');
    const n = i >> 2; const r = i - n * 4; const
      a = new Uint32Array(e.buffer, 0, n);
    let o = 0; let l = 0; let c = this.h1; let
      d = this.h2;
    const u = 3432918353; const g = 461845907; const b = u & gn; const
      C = g & gn;
    for (let S = 0; S < n; S++) S & 1 ? (o = a[S], o = o * u & Li | o * b & gn, o = o << 15 | o >>> 17, o = o * g & Li | o * C & gn, c ^= o, c = c << 13 | c >>> 19, c = c * 5 + 3864292196) : (l = a[S], l = l * u & Li | l * b & gn, l = l << 15 | l >>> 17, l = l * g & Li | l * C & gn, d ^= l, d = d << 13 | d >>> 19, d = d * 5 + 3864292196);
    switch (o = 0, r) {
      case 3:
        o ^= e[n * 4 + 2] << 16;
      case 2:
        o ^= e[n * 4 + 1] << 8;
      case 1:
        o ^= e[n * 4], o = o * u & Li | o * b & gn, o = o << 15 | o >>> 17, o = o * g & Li | o * C & gn, n & 1 ? c ^= o : d ^= o;
    }
    this.h1 = c, this.h2 = d;
  }

  hexdigest() {
    let t = this.h1; let
      e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & Li | t * 36045 & gn, e = e * 4283543511 & Li | ((e << 16 | t >>> 16) * 2950163797 & Li) >>> 16, t ^= e >>> 1, t = t * 444984403 & Li | t * 60499 & gn, e = e * 3301882366 & Li | ((e << 16 | t >>> 16) * 3120437893 & Li) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, '0') + (e >>> 0).toString(16).padStart(8, '0');
  }
}
const cp = Object.freeze({
  map: null,
  hash: '',
  transfer: void 0,
});
let fa; let pa; let ls; let Pe; let Xu; let
  By;
class Ag {
  constructor() {
    v(this, Xu);
    v(this, fa, !1);
    v(this, pa, null);
    v(this, ls, null);
    v(this, Pe, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }

  getValue(t, e) {
    const i = s(this, Pe).get(t);
    return i === void 0 ? e : Object.assign(e, i);
  }

  getRawValue(t) {
    return s(this, Pe).get(t);
  }

  remove(t) {
    const e = s(this, Pe).get(t);
    if (e !== void 0 && (e instanceof Ut && s(this, ls).delete(e.annotationElementId), s(this, Pe).delete(t), s(this, Pe).size === 0 && this.resetModified(), typeof this.onAnnotationEditor === 'function')) {
      for (const i of s(this, Pe).values()) if (i instanceof Ut) return;
      this.onAnnotationEditor(null);
    }
  }

  setValue(t, e) {
    const i = s(this, Pe).get(t);
    let n = !1;
    if (i !== void 0) for (const [r, a] of Object.entries(e)) i[r] !== a && (n = !0, i[r] = a);
    else n = !0, s(this, Pe).set(t, e);
    n && A(this, Xu, By).call(this), e instanceof Ut && ((s(this, ls) || m(this, ls, /* @__PURE__ */ new Map())).set(e.annotationElementId, e), typeof this.onAnnotationEditor === 'function' && this.onAnnotationEditor(e.constructor._type));
  }

  has(t) {
    return s(this, Pe).has(t);
  }

  get size() {
    return s(this, Pe).size;
  }

  resetModified() {
    s(this, fa) && (m(this, fa, !1), typeof this.onResetModified === 'function' && this.onResetModified());
  }

  get print() {
    return new Hy(this);
  }

  get serializable() {
    if (s(this, Pe).size === 0) return cp;
    const t = /* @__PURE__ */ new Map(); const e = new Ny(); const i = []; const
      n = /* @__PURE__ */ Object.create(null);
    let r = !1;
    for (const [a, o] of s(this, Pe)) {
      const l = o instanceof Ut ? o.serialize(!1, n) : o;
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
      n = 0;
    for (const r of s(this, Pe).values()) {
      if (!(r instanceof Ut)) {
        r.popup && (r.popup.deleted ? n += 1 : i += 1);
        continue;
      }
      r.isCommentDeleted ? n += 1 : r.hasEditedComment && (i += 1);
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
    if ((n > 0 || i > 0) && (t || (t = /* @__PURE__ */ Object.create(null)), t.comments = {
      deleted: n,
      edited: i,
    }), !t) return null;
    for (const [r, a] of e) t[r] = a.computeTelemetryFinalData(t[r]);
    return t;
  }

  resetModifiedIds() {
    m(this, pa, null);
  }

  updateEditor(t, e) {
    let n;
    const i = (n = s(this, ls)) == null ? void 0 : n.get(t);
    return i ? (i.updateFromAnnotationLayer(e), !0) : !1;
  }

  getEditor(t) {
    let e;
    return ((e = s(this, ls)) == null ? void 0 : e.get(t)) || null;
  }

  get modifiedIds() {
    if (s(this, pa)) return s(this, pa);
    const t = [];
    if (s(this, ls)) for (const e of s(this, ls).values()) e.serialize() && t.push(e.annotationElementId);
    return m(this, pa, {
      ids: new Set(t),
      hash: t.join(','),
    });
  }

  [Symbol.iterator]() {
    return s(this, Pe).entries();
  }
}
fa = new WeakMap(), pa = new WeakMap(), ls = new WeakMap(), Pe = new WeakMap(), Xu = new WeakSet(), By = function () {
  s(this, fa) || (m(this, fa, !0), typeof this.onSetModified === 'function' && this.onSetModified());
};
let wc;
class Hy extends Ag {
  constructor(e) {
    super();
    v(this, wc);
    const {
      map: i,
      hash: n,
      transfer: r,
    } = e.serializable; const
      a = structuredClone(i, r ? {
        transfer: r,
      } : null);
    m(this, wc, {
      map: a,
      hash: n,
      transfer: r,
    });
  }

  get print() {
    zt('Should not call PrintAnnotationStorage.print');
  }

  get serializable() {
    return s(this, wc);
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
class Hw {
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
    this.nativeFontFaces.clear(), s(this, Jo).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }

  async loadSystemFont({
    systemFontInfo: t,
    disableFontFace: e,
    _inspectFont: i,
  }) {
    if (!(!t || s(this, Jo).has(t.loadedName))) {
      if (_t(!e, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: n,
          src: r,
          style: a,
        } = t; const
          o = new FontFace(n, r, a);
        this.addNativeFontFace(o);
        try {
          await o.load(), s(this, Jo).add(n), i == null || i(t);
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
        } catch (n) {
          throw pt(`Failed to load font '${i.family}': '${n}'.`), t.disableFontFace = !0, n;
        }
      }
      return;
    }
    const e = t.createFontFaceRule();
    if (e) {
      if (this.insertRule(e), this.isSyncFontLoadingSupported) return;
      await new Promise((i) => {
        const n = this._queueLoadingCallback(i);
        this._prepareFontLoadEvent(t, n);
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
      for (_t(!n.done, 'completeRequest() cannot be called twice.'), n.done = !0; i.length > 0 && i[0].done;) {
        const r = i.shift();
        setTimeout(r.callback, 0);
      }
    }
    const {
      loadingRequests: i,
    } = this; const
      n = {
        done: !1,
        complete: e,
        callback: t,
      };
    return i.push(n), n;
  }

  get _loadTestFont() {
    const t = atob('T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==');
    return yt(this, '_loadTestFont', t);
  }

  _prepareFontLoadEvent(t, e) {
    function i(p, f) {
      return p.charCodeAt(f) << 24 | p.charCodeAt(f + 1) << 16 | p.charCodeAt(f + 2) << 8 | p.charCodeAt(f + 3) & 255;
    }
    function n(p, f, y, _) {
      const T = p.substring(0, f); const
        P = p.substring(f + y);
      return T + _ + P;
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
    g = n(g, 976, u.length, u);
    const C = 16; const
      S = 1482184792;
    let L = i(g, C);
    for (r = 0, a = u.length - 3; r < a; r += 4) L = L - S + i(u, r) | 0;
    r < u.length && (L = L - S + i(`${u}XXX`, r) | 0), g = n(g, C, 4, Cw(L));
    const k = `url(data:font/opentype;base64,${btoa(g)});`; const
      M = `@font-face {font-family:"${u}";src:${k}}`;
    this.insertRule(M);
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
let Lt;
class jw {
  constructor(t, e = null, i, n) {
    v(this, Lt);
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null), m(this, Lt, t), this._inspectFont = e, i && Object.assign(this, i), n && (this.charProcOperatorList = n);
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
    const t = `url(data:${this.mimetype};base64,${ey(this.data)});`;
    let e;
    if (!this.cssFontInfo) e = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
    else {
      let n = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (n += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${n}src:${t}}`;
    }
    return (i = this._inspectFont) == null || i.call(this, this, t), e;
  }

  getPathGenerator(t, e) {
    if (this.compiledGlyphs[e] !== void 0) return this.compiledGlyphs[e];
    const i = `${this.loadedName}_path_${e}`;
    let n;
    try {
      n = t.get(i);
    } catch (a) {
      pt(`getPathGenerator - ignoring character: "${a}".`);
    }
    const r = new Path2D(n || '');
    return this.fontExtraProperties || t.delete(i), this.compiledGlyphs[e] = r;
  }

  get black() {
    return s(this, Lt).black;
  }

  get bold() {
    return s(this, Lt).bold;
  }

  get disableFontFace() {
    return s(this, Lt).disableFontFace ?? !1;
  }

  get fontExtraProperties() {
    return s(this, Lt).fontExtraProperties ?? !1;
  }

  get isInvalidPDFjsFont() {
    return s(this, Lt).isInvalidPDFjsFont;
  }

  get isType3Font() {
    return s(this, Lt).isType3Font;
  }

  get italic() {
    return s(this, Lt).italic;
  }

  get missingFile() {
    return s(this, Lt).missingFile;
  }

  get remeasure() {
    return s(this, Lt).remeasure;
  }

  get vertical() {
    return s(this, Lt).vertical;
  }

  get ascent() {
    return s(this, Lt).ascent;
  }

  get defaultWidth() {
    return s(this, Lt).defaultWidth;
  }

  get descent() {
    return s(this, Lt).descent;
  }

  get bbox() {
    return s(this, Lt).bbox;
  }

  get fontMatrix() {
    return s(this, Lt).fontMatrix;
  }

  get fallbackName() {
    return s(this, Lt).fallbackName;
  }

  get loadedName() {
    return s(this, Lt).loadedName;
  }

  get mimetype() {
    return s(this, Lt).mimetype;
  }

  get name() {
    return s(this, Lt).name;
  }

  get data() {
    return s(this, Lt).data;
  }

  clearData() {
    s(this, Lt).clearData();
  }

  get cssFontInfo() {
    return s(this, Lt).cssFontInfo;
  }

  get systemFontInfo() {
    return s(this, Lt).systemFontInfo;
  }

  get defaultVMetrics() {
    return s(this, Lt).defaultVMetrics;
  }
}
Lt = new WeakMap();
function zw(h) {
  if (h instanceof URL) return h.href;
  if (typeof h === 'string') {
    if (Xe) return h;
    const t = URL.parse(h, window.location);
    if (t) return t.href;
  }
  throw new Error('Invalid PDF url data: either string or URL-object is expected in the url property.');
}
function $w(h) {
  if (Xe && typeof Buffer < 'u' && h instanceof Buffer) throw new Error('Please provide binary data as `Uint8Array`, rather than `Buffer`.');
  if (h instanceof Uint8Array && h.byteLength === h.buffer.byteLength) return h;
  if (typeof h === 'string') return kd(h);
  if (h instanceof ArrayBuffer || ArrayBuffer.isView(h) || typeof h === 'object' && !isNaN(h == null ? void 0 : h.length)) return new Uint8Array(h);
  throw new Error('Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.');
}
function $d(h) {
  if (typeof h !== 'string') return null;
  if (h.endsWith('/')) return h;
  throw new Error(`Invalid factory url: "${h}" must include trailing slash.`);
}
const dp = (h) => typeof h === 'object' && Number.isInteger(h == null ? void 0 : h.num) && h.num >= 0 && Number.isInteger(h == null ? void 0 : h.gen) && h.gen >= 0; const Uw = (h) => typeof h === 'object' && typeof (h == null ? void 0 : h.name) === 'string'; const
  jy = Rw.bind(null, dp, Uw);
let hs; let
  Yu;
class Ww {
  constructor() {
    v(this, hs, /* @__PURE__ */ new Map());
    v(this, Yu, Promise.resolve());
  }

  postMessage(t, e) {
    const i = {
      data: structuredClone(t, e ? {
        transfer: e,
      } : null),
    };
    s(this, Yu).then(() => {
      for (const [n] of s(this, hs)) n.call(this, i);
    });
  }

  addEventListener(t, e, i = null) {
    let n = null;
    if ((i == null ? void 0 : i.signal) instanceof AbortSignal) {
      const {
        signal: r,
      } = i;
      if (r.aborted) {
        pt('LoopbackPort - cannot use an `aborted` signal.');
        return;
      }
      const a = () => this.removeEventListener(t, e);
      n = () => r.removeEventListener('abort', a), r.addEventListener('abort', a);
    }
    s(this, hs).set(e, n);
  }

  removeEventListener(t, e) {
    const i = s(this, hs).get(e);
    i == null || i(), s(this, hs).delete(e);
  }

  terminate() {
    for (const [, t] of s(this, hs)) t == null || t();
    s(this, hs).clear();
  }
}
hs = new WeakMap(), Yu = new WeakMap();
const Ud = {
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
function hm() {
}
function Je(h) {
  if (h instanceof Os || h instanceof Ru || h instanceof em || h instanceof jh || h instanceof Lf) return h;
  switch (h instanceof Error || typeof h === 'object' && h !== null || zt('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), h.name) {
    case 'AbortException':
      return new Os(h.message);
    case 'InvalidPDFException':
      return new Ru(h.message);
    case 'PasswordException':
      return new em(h.message, h.code);
    case 'ResponseException':
      return new jh(h.message, h.status, h.missing);
    case 'UnknownErrorException':
      return new Lf(h.message, h.details);
  }
  return new Lf(h.message, h.toString());
}
let Qo; let Vi; let zy; let $y; let Uy; let
  iu;
class Ah {
  constructor(t, e, i) {
    v(this, Vi);
    v(this, Qo, new AbortController());
    this.sourceName = t, this.targetName = e, this.comObj = i, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), i.addEventListener('message', A(this, Vi, zy).bind(this), {
      signal: s(this, Qo).signal,
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
    const n = this.callbackId++; const
      r = Promise.withResolvers();
    this.callbackCapabilities[n] = r;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        callbackId: n,
        data: e,
      }, i);
    } catch (a) {
      r.reject(a);
    }
    return r.promise;
  }

  sendWithStream(t, e, i, n) {
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
        }, n), d.promise;
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
    (t = s(this, Qo)) == null || t.abort(), m(this, Qo, null);
  }
}
Qo = new WeakMap(), Vi = new WeakSet(), zy = function ({
  data: t,
}) {
  if (t.targetName !== this.sourceName) return;
  if (t.stream) {
    A(this, Vi, Uy).call(this, t);
    return;
  }
  if (t.callback) {
    const i = t.callbackId; const
      n = this.callbackCapabilities[i];
    if (!n) throw new Error(`Cannot resolve callback ${i}`);
    if (delete this.callbackCapabilities[i], t.callback === Ud.DATA) n.resolve(t.data);
    else if (t.callback === Ud.ERROR) n.reject(Je(t.reason));
    else throw new Error('Unexpected callback case');
    return;
  }
  const e = this.actionHandler[t.action];
  if (!e) throw new Error(`Unknown action from worker: ${t.action}`);
  if (t.callbackId) {
    const i = this.sourceName; const n = t.sourceName; const
      r = this.comObj;
    Promise.try(e, t.data).then((a) => {
      r.postMessage({
        sourceName: i,
        targetName: n,
        callback: Ud.DATA,
        callbackId: t.callbackId,
        data: a,
      });
    }, (a) => {
      r.postMessage({
        sourceName: i,
        targetName: n,
        callback: Ud.ERROR,
        callbackId: t.callbackId,
        reason: Je(a),
      });
    });
    return;
  }
  if (t.streamId) {
    A(this, Vi, $y).call(this, t);
    return;
  }
  e(t.data);
}, $y = function (t) {
  const e = t.streamId; const i = this.sourceName; const n = t.sourceName; const r = this.comObj; const a = this; const o = this.actionHandler[t.action]; const
    l = {
      enqueue(c, d = 1, u) {
        if (this.isCancelled) return;
        const g = this.desiredSize;
        this.desiredSize -= d, g > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), r.postMessage({
          sourceName: i,
          targetName: n,
          stream: oe.ENQUEUE,
          streamId: e,
          chunk: c,
        }, u);
      },
      close() {
        this.isCancelled || (this.isCancelled = !0, r.postMessage({
          sourceName: i,
          targetName: n,
          stream: oe.CLOSE,
          streamId: e,
        }), delete a.streamSinks[e]);
      },
      error(c) {
        _t(c instanceof Error, 'error must have a valid reason'), !this.isCancelled && (this.isCancelled = !0, r.postMessage({
          sourceName: i,
          targetName: n,
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
      targetName: n,
      stream: oe.START_COMPLETE,
      streamId: e,
      success: !0,
    });
  }, (c) => {
    r.postMessage({
      sourceName: i,
      targetName: n,
      stream: oe.START_COMPLETE,
      streamId: e,
      reason: Je(c),
    });
  });
}, Uy = function (t) {
  const e = t.streamId; const i = this.sourceName; const n = t.sourceName; const r = this.comObj; const a = this.streamControllers[e]; const
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
          targetName: n,
          stream: oe.PULL_COMPLETE,
          streamId: e,
          success: !0,
        });
        break;
      }
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, Promise.try(o.onPull || hm).then(() => {
        r.postMessage({
          sourceName: i,
          targetName: n,
          stream: oe.PULL_COMPLETE,
          streamId: e,
          success: !0,
        });
      }, (c) => {
        r.postMessage({
          sourceName: i,
          targetName: n,
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
      Promise.try(o.onCancel || hm, l).then(() => {
        r.postMessage({
          sourceName: i,
          targetName: n,
          stream: oe.CANCEL_COMPLETE,
          streamId: e,
          success: !0,
        });
      }, (c) => {
        r.postMessage({
          sourceName: i,
          targetName: n,
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
  let i; let n; let
    r;
  await Promise.allSettled([(i = t.startCall) == null ? void 0 : i.promise, (n = t.pullCall) == null ? void 0 : n.promise, (r = t.cancelCall) == null ? void 0 : r.promise]), delete this.streamControllers[e];
};
let Sc;
class Wy {
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
        willReadFrequently: !s(this, Sc),
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
class Gw extends Wy {
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
class Gy {
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
class cm extends Gy {
  async _fetch(t) {
    const e = await oh(t, this.isCompressed ? 'arraybuffer' : 'text');
    return e instanceof ArrayBuffer ? new Uint8Array(e) : kd(e);
  }
}
class Vy {
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

  addHighlightHCMFilter(t, e, i, n, r) {
    return 'none';
  }

  destroy(t = !1) {
  }
}
let ga; let Zo; let cs; let ds; let Ne; let ma; let ya; let Q; let Oe; let _h; let yo; let nu; let bo; let qy; let up; let vo; let xh; let Eh; let fp; let
  Ch;
class Vw extends Vy {
  constructor({
    docId: e,
    ownerDocument: i = globalThis.document,
  }) {
    super();
    v(this, Q);
    v(this, ga);
    v(this, Zo);
    v(this, cs);
    v(this, ds);
    v(this, Ne);
    v(this, ma);
    v(this, ya, 0);
    m(this, ds, e), m(this, Ne, i);
  }

  addFilter(e) {
    if (!e) return 'none';
    let i = s(this, Q, Oe).get(e);
    if (i) return i;
    const [n, r, a] = A(this, Q, nu).call(this, e); const
      o = e.length === 1 ? n : `${n}${r}${a}`;
    if (i = s(this, Q, Oe).get(o), i) return s(this, Q, Oe).set(e, i), i;
    const l = `g_${s(this, ds)}_transfer_map_${de(this, ya)._++}`; const
      c = A(this, Q, bo).call(this, l);
    s(this, Q, Oe).set(e, c), s(this, Q, Oe).set(o, c);
    const d = A(this, Q, vo).call(this, l);
    return A(this, Q, Eh).call(this, n, r, a, d), c;
  }

  addHCMFilter(e, i) {
    let C;
    const n = `${e}-${i}`; const
      r = 'base';
    let a = s(this, Q, _h).get(r);
    if ((a == null ? void 0 : a.key) === n || (a ? ((C = a.filter) == null || C.remove(), a.key = n, a.url = 'none', a.filter = null) : (a = {
      key: n,
      url: 'none',
      filter: null,
    }, s(this, Q, _h).set(r, a)), !e || !i)) return a.url;
    const o = A(this, Q, Ch).call(this, e);
    e = tt.makeHexColor(...o);
    const l = A(this, Q, Ch).call(this, i);
    if (i = tt.makeHexColor(...l), s(this, Q, yo).style.color = '', e === '#000000' && i === '#ffffff' || e === i) return a.url;
    const c = new Array(256);
    for (let S = 0; S <= 255; S++) {
      const L = S / 255;
      c[S] = L <= 0.03928 ? L / 12.92 : ((L + 0.055) / 1.055) ** 2.4;
    }
    const d = c.join(','); const u = `g_${s(this, ds)}_hcm_filter`; const
      g = a.filter = A(this, Q, vo).call(this, u);
    A(this, Q, Eh).call(this, d, d, d, g), A(this, Q, up).call(this, g);
    const b = (S, L) => {
      const k = o[S] / 255; const M = l[S] / 255; const
        R = new Array(L + 1);
      for (let p = 0; p <= L; p++) R[p] = k + p / L * (M - k);
      return R.join(',');
    };
    return A(this, Q, Eh).call(this, b(0, 5), b(1, 5), b(2, 5), g), a.url = A(this, Q, bo).call(this, u), a.url;
  }

  addAlphaFilter(e) {
    let i = s(this, Q, Oe).get(e);
    if (i) return i;
    const [n] = A(this, Q, nu).call(this, [e]); const
      r = `alpha_${n}`;
    if (i = s(this, Q, Oe).get(r), i) return s(this, Q, Oe).set(e, i), i;
    const a = `g_${s(this, ds)}_alpha_map_${de(this, ya)._++}`; const
      o = A(this, Q, bo).call(this, a);
    s(this, Q, Oe).set(e, o), s(this, Q, Oe).set(r, o);
    const l = A(this, Q, vo).call(this, a);
    return A(this, Q, fp).call(this, n, l), o;
  }

  addLuminosityFilter(e) {
    let i = s(this, Q, Oe).get(e || 'luminosity');
    if (i) return i;
    let n; let
      r;
    if (e ? ([n] = A(this, Q, nu).call(this, [e]), r = `luminosity_${n}`) : r = 'luminosity', i = s(this, Q, Oe).get(r), i) return s(this, Q, Oe).set(e, i), i;
    const a = `g_${s(this, ds)}_luminosity_map_${de(this, ya)._++}`; const
      o = A(this, Q, bo).call(this, a);
    s(this, Q, Oe).set(e, o), s(this, Q, Oe).set(r, o);
    const l = A(this, Q, vo).call(this, a);
    return A(this, Q, qy).call(this, l), e && A(this, Q, fp).call(this, n, l), o;
  }

  addHighlightHCMFilter(e, i, n, r, a) {
    let M;
    const o = `${i}-${n}-${r}-${a}`;
    let l = s(this, Q, _h).get(e);
    if ((l == null ? void 0 : l.key) === o || (l ? ((M = l.filter) == null || M.remove(), l.key = o, l.url = 'none', l.filter = null) : (l = {
      key: o,
      url: 'none',
      filter: null,
    }, s(this, Q, _h).set(e, l)), !i || !n)) return l.url;
    const [c, d] = [i, n].map(A(this, Q, Ch).bind(this));
    let u = Math.round(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]); let g = Math.round(0.2126 * d[0] + 0.7152 * d[1] + 0.0722 * d[2]); let
      [b, C] = [r, a].map(A(this, Q, Ch).bind(this));
    g < u && ([u, g, b, C] = [g, u, C, b]), s(this, Q, yo).style.color = '';
    const S = (R, p, f) => {
      const y = new Array(256); const _ = (g - u) / f; const T = R / 255; const
        P = (p - R) / (255 * f);
      let E = 0;
      for (let D = 0; D <= f; D++) {
        const N = Math.round(u + D * _); const
          I = T + D * P;
        for (let B = E; B <= N; B++) y[B] = I;
        E = N + 1;
      }
      for (let D = E; D < 256; D++) y[D] = y[E - 1];
      return y.join(',');
    }; const L = `g_${s(this, ds)}_hcm_${e}_filter`; const
      k = l.filter = A(this, Q, vo).call(this, L);
    return A(this, Q, up).call(this, k), A(this, Q, Eh).call(this, S(b[0], C[0], 5), S(b[1], C[1], 5), S(b[2], C[2], 5), k), l.url = A(this, Q, bo).call(this, L), l.url;
  }

  destroy(e = !1) {
    let i; let n; let r; let
      a;
    e && ((i = s(this, ma)) != null && i.size) || ((n = s(this, cs)) == null || n.parentNode.parentNode.remove(), m(this, cs, null), (r = s(this, Zo)) == null || r.clear(), m(this, Zo, null), (a = s(this, ma)) == null || a.clear(), m(this, ma, null), m(this, ya, 0));
  }
}
ga = new WeakMap(), Zo = new WeakMap(), cs = new WeakMap(), ds = new WeakMap(), Ne = new WeakMap(), ma = new WeakMap(), ya = new WeakMap(), Q = new WeakSet(), Oe = function () {
  return s(this, Zo) || m(this, Zo, /* @__PURE__ */ new Map());
}, _h = function () {
  return s(this, ma) || m(this, ma, /* @__PURE__ */ new Map());
}, yo = function () {
  if (!s(this, cs)) {
    const e = s(this, Ne).createElement('div'); const
      {
        style: i,
      } = e;
    i.visibility = 'hidden', i.contain = 'strict', i.width = i.height = 0, i.position = 'absolute', i.top = i.left = 0, i.zIndex = -1;
    const n = s(this, Ne).createElementNS(Vn, 'svg');
    n.setAttribute('width', 0), n.setAttribute('height', 0), m(this, cs, s(this, Ne).createElementNS(Vn, 'defs')), e.append(n), n.append(s(this, cs)), s(this, Ne).body.append(e);
  }
  return s(this, cs);
}, nu = function (e) {
  if (e.length === 1) {
    const c = e[0]; const
      d = new Array(256);
    for (let g = 0; g < 256; g++) d[g] = c[g] / 255;
    const u = d.join(',');
    return [u, u, u];
  }
  const [i, n, r] = e; const a = new Array(256); const o = new Array(256); const
    l = new Array(256);
  for (let c = 0; c < 256; c++) a[c] = i[c] / 255, o[c] = n[c] / 255, l[c] = r[c] / 255;
  return [a.join(','), o.join(','), l.join(',')];
}, bo = function (e) {
  if (s(this, ga) === void 0) {
    m(this, ga, '');
    const i = s(this, Ne).URL;
    i !== s(this, Ne).baseURI && (Ld(i) ? pt('#createUrl: ignore "data:"-URL for performance reasons.') : m(this, ga, yg(i, '')));
  }
  return `url(${s(this, ga)}#${e})`;
}, qy = function (e) {
  const i = s(this, Ne).createElementNS(Vn, 'feColorMatrix');
  i.setAttribute('type', 'matrix'), i.setAttribute('values', '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0'), e.append(i);
}, up = function (e) {
  const i = s(this, Ne).createElementNS(Vn, 'feColorMatrix');
  i.setAttribute('type', 'matrix'), i.setAttribute('values', '0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0'), e.append(i);
}, vo = function (e) {
  const i = s(this, Ne).createElementNS(Vn, 'filter');
  return i.setAttribute('color-interpolation-filters', 'sRGB'), i.setAttribute('id', e), s(this, Q, yo).append(i), i;
}, xh = function (e, i, n) {
  const r = s(this, Ne).createElementNS(Vn, i);
  r.setAttribute('type', 'discrete'), r.setAttribute('tableValues', n), e.append(r);
}, Eh = function (e, i, n, r) {
  const a = s(this, Ne).createElementNS(Vn, 'feComponentTransfer');
  r.append(a), A(this, Q, xh).call(this, a, 'feFuncR', e), A(this, Q, xh).call(this, a, 'feFuncG', i), A(this, Q, xh).call(this, a, 'feFuncB', n);
}, fp = function (e, i) {
  const n = s(this, Ne).createElementNS(Vn, 'feComponentTransfer');
  i.append(n), A(this, Q, xh).call(this, n, 'feFuncA', e);
}, Ch = function (e) {
  return s(this, Q, yo).style.color = e, lh(getComputedStyle(s(this, Q, yo)).getPropertyValue('color'));
};
class Xy {
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
class dm extends Xy {
  async _fetch(t) {
    const e = await oh(t, 'arraybuffer');
    return new Uint8Array(e);
  }
}
class Yy {
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
class um extends Yy {
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
class qw extends Vy {
}
class Xw extends Wy {
  _createCanvas(t, e) {
    return process.getBuiltinModule('module').createRequire(import.meta.url)('@napi-rs/canvas').createCanvas(t, e);
  }
}
class Yw extends Gy {
  async _fetch(t) {
    return _g(t);
  }
}
class Kw extends Xy {
  async _fetch(t) {
    return _g(t);
  }
}
class Jw extends Yy {
  async _fetch(t) {
    return _g(t);
  }
}
const po = '__forcedDependency';
const {
  floor: fm,
  ceil: pm,
} = Math;
function Wd(h, t, e, i, n, r) {
  h[t * 4 + 0] = Math.min(h[t * 4 + 0], e), h[t * 4 + 1] = Math.min(h[t * 4 + 1], i), h[t * 4 + 2] = Math.max(h[t * 4 + 2], n), h[t * 4 + 3] = Math.max(h[t * 4 + 3], r);
}
const pp = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0];
let tl; let
  rr;
class Qw {
  constructor(t, e) {
    v(this, tl);
    v(this, rr);
    m(this, tl, t), m(this, rr, e);
  }

  get length() {
    return s(this, tl).length;
  }

  isEmpty(t) {
    return s(this, tl)[t] === pp;
  }

  minX(t) {
    return s(this, rr)[t * 4 + 0] / 256;
  }

  minY(t) {
    return s(this, rr)[t * 4 + 1] / 256;
  }

  maxX(t) {
    return (s(this, rr)[t * 4 + 2] + 1) / 256;
  }

  maxY(t) {
    return (s(this, rr)[t * 4 + 3] + 1) / 256;
  }
}
tl = new WeakMap(), rr = new WeakMap();
const Gd = (h, t) => {
  if (!h) return;
  let e = h.get(t);
  return e || (e = {
    dependencies: /* @__PURE__ */ new Set(),
    isRenderingOperation: !1,
  }, h.set(t, e)), e;
};
let ti; let ei; let ba; let Qi; let va; let us; let Rt; let Mt; let fs; let ii; let Ac; let el; let wa; let Sa; let ps; let Be; let Tn; let _c; let
  gp;
class Zw {
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
      [po]: [],
    });
    v(this, ba, /* @__PURE__ */ new Map());
    v(this, Qi, []);
    v(this, va, []);
    v(this, us, [[1, 0, 0, 1, 0, 0]]);
    v(this, Rt, [-1 / 0, -1 / 0, 1 / 0, 1 / 0]);
    v(this, Mt, new Float64Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
    v(this, fs, -1);
    v(this, ii, /* @__PURE__ */ new Set());
    v(this, Ac, /* @__PURE__ */ new Map());
    v(this, el, /* @__PURE__ */ new Map());
    v(this, wa);
    v(this, Sa);
    v(this, ps);
    v(this, Be);
    v(this, Tn);
    m(this, wa, t.width), m(this, Sa, t.height), A(this, _c, gp).call(this, e), i && m(this, Tn, /* @__PURE__ */ new Map());
  }

  growOperationsCount(t) {
    t >= s(this, Be).length && A(this, _c, gp).call(this, t, s(this, Be));
  }

  save(t) {
    return m(this, ti, {
      __proto__: s(this, ti),
    }), m(this, ei, {
      __proto__: s(this, ei),
      transform: {
        __proto__: s(this, ei).transform,
      },
      moveText: {
        __proto__: s(this, ei).moveText,
      },
      sameLineText: {
        __proto__: s(this, ei).sameLineText,
      },
      [po]: {
        __proto__: s(this, ei)[po],
      },
    }), m(this, Rt, {
      __proto__: s(this, Rt),
    }), s(this, Qi).push(t), this;
  }

  restore(t) {
    let n;
    const e = Object.getPrototypeOf(s(this, ti));
    if (e === null) return this;
    m(this, ti, e), m(this, ei, Object.getPrototypeOf(s(this, ei))), m(this, Rt, Object.getPrototypeOf(s(this, Rt)));
    const i = s(this, Qi).pop();
    return i !== void 0 && ((n = Gd(s(this, Tn), t)) == null || n.dependencies.add(i), s(this, Be)[t] = s(this, Be)[i]), this;
  }

  recordOpenMarker(t) {
    return s(this, Qi).push(t), this;
  }

  getOpenMarker() {
    return s(this, Qi).length === 0 ? null : s(this, Qi).at(-1);
  }

  recordCloseMarker(t) {
    let i;
    const e = s(this, Qi).pop();
    return e !== void 0 && ((i = Gd(s(this, Tn), t)) == null || i.dependencies.add(e), s(this, Be)[t] = s(this, Be)[e]), this;
  }

  beginMarkedContent(t) {
    return s(this, va).push(t), this;
  }

  endMarkedContent(t) {
    let i;
    const e = s(this, va).pop();
    return e !== void 0 && ((i = Gd(s(this, Tn), t)) == null || i.dependencies.add(e), s(this, Be)[t] = s(this, Be)[e]), this;
  }

  pushBaseTransform(t) {
    return s(this, us).push(tt.multiplyByDOMMatrix(s(this, us).at(-1), t.getTransform())), this;
  }

  popBaseTransform() {
    return s(this, us).length > 1 && s(this, us).pop(), this;
  }

  recordSimpleData(t, e) {
    return s(this, ti)[t] = e, this;
  }

  recordIncrementalData(t, e) {
    return s(this, ei)[t].push(e), this;
  }

  resetIncrementalData(t, e) {
    return s(this, ei)[t].length = 0, this;
  }

  recordNamedData(t, e) {
    return s(this, ba).set(t, e), this;
  }

  recordSimpleDataFromNamed(t, e, i) {
    s(this, ti)[t] = s(this, ba).get(e) ?? i;
  }

  recordFutureForcedDependency(t, e) {
    return this.recordIncrementalData(po, e), this;
  }

  inheritSimpleDataAsFutureForcedDependencies(t) {
    for (const e of t) e in s(this, ti) && this.recordFutureForcedDependency(e, s(this, ti)[e]);
    return this;
  }

  inheritPendingDependenciesAsFutureForcedDependencies() {
    for (const t of s(this, ii)) this.recordFutureForcedDependency(po, t);
    return this;
  }

  resetBBox(t) {
    return s(this, fs) !== t && (m(this, fs, t), s(this, Mt)[0] = 1 / 0, s(this, Mt)[1] = 1 / 0, s(this, Mt)[2] = -1 / 0, s(this, Mt)[3] = -1 / 0), this;
  }

  recordClipBox(t, e, i, n, r, a) {
    const o = tt.multiplyByDOMMatrix(s(this, us).at(-1), e.getTransform()); const
      l = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    tt.axialAlignedBoundingBox([i, r, n, a], o, l);
    const c = tt.intersect(s(this, Rt), l);
    return c ? (s(this, Rt)[0] = c[0], s(this, Rt)[1] = c[1], s(this, Rt)[2] = c[2], s(this, Rt)[3] = c[3]) : (s(this, Rt)[0] = s(this, Rt)[1] = 1 / 0, s(this, Rt)[2] = s(this, Rt)[3] = -1 / 0), this;
  }

  recordBBox(t, e, i, n, r, a) {
    const o = s(this, Rt);
    if (o[0] === 1 / 0) return this;
    const l = tt.multiplyByDOMMatrix(s(this, us).at(-1), e.getTransform());
    if (o[0] === -1 / 0) return tt.axialAlignedBoundingBox([i, r, n, a], l, s(this, Mt)), this;
    const c = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    return tt.axialAlignedBoundingBox([i, r, n, a], l, c), s(this, Mt)[0] = Math.min(s(this, Mt)[0], Math.max(c[0], o[0])), s(this, Mt)[1] = Math.min(s(this, Mt)[1], Math.max(c[1], o[1])), s(this, Mt)[2] = Math.max(s(this, Mt)[2], Math.min(c[2], o[2])), s(this, Mt)[3] = Math.max(s(this, Mt)[3], Math.min(c[3], o[3])), this;
  }

  recordCharacterBBox(t, e, i, n = 1, r = 0, a = 0, o) {
    const l = i.bbox;
    let c; let
      d;
    if (l && (c = l[2] !== l[0] && l[3] !== l[1] && s(this, el).get(i), c !== !1 && (d = [0, 0, 0, 0], tt.axialAlignedBoundingBox(l, i.fontMatrix, d), (n !== 1 || r !== 0 || a !== 0) && tt.scaleMinMax([n, 0, 0, -n, r, a], d), c))) return this.recordBBox(t, e, d[0], d[2], d[1], d[3]);
    if (!o) return this.recordFullPageBBox(t);
    const u = o();
    return l && d && c === void 0 && (c = d[0] <= r - u.actualBoundingBoxLeft && d[2] >= r + u.actualBoundingBoxRight && d[1] <= a - u.actualBoundingBoxAscent && d[3] >= a + u.actualBoundingBoxDescent, s(this, el).set(i, c), c) ? this.recordBBox(t, e, d[0], d[2], d[1], d[3]) : this.recordBBox(t, e, r - u.actualBoundingBoxLeft, r + u.actualBoundingBoxRight, a - u.actualBoundingBoxAscent, a + u.actualBoundingBoxDescent);
  }

  recordFullPageBBox(t) {
    return s(this, Mt)[0] = Math.max(0, s(this, Rt)[0]), s(this, Mt)[1] = Math.max(0, s(this, Rt)[1]), s(this, Mt)[2] = Math.min(s(this, wa), s(this, Rt)[2]), s(this, Mt)[3] = Math.min(s(this, Sa), s(this, Rt)[3]), this;
  }

  getSimpleIndex(t) {
    return s(this, ti)[t];
  }

  recordDependencies(t, e) {
    const i = s(this, ii); const n = s(this, ti); const
      r = s(this, ei);
    for (const a of e) a in s(this, ti) ? i.add(n[a]) : a in r && r[a].forEach(i.add, i);
    return this;
  }

  recordNamedDependency(t, e) {
    return s(this, ba).has(e) && s(this, ii).add(s(this, ba).get(e)), this;
  }

  recordOperation(t, e = !1) {
    if (this.recordDependencies(t, [po]), s(this, Tn)) {
      const i = Gd(s(this, Tn), t); const
        {
          dependencies: n,
        } = i;
      s(this, ii).forEach(n.add, n), s(this, Qi).forEach(n.add, n), s(this, va).forEach(n.add, n), n.delete(t), i.isRenderingOperation = !0;
    }
    if (s(this, fs) === t) {
      const i = fm(s(this, Mt)[0] * 256 / s(this, wa)); const n = fm(s(this, Mt)[1] * 256 / s(this, Sa)); const r = pm(s(this, Mt)[2] * 256 / s(this, wa)); const
        a = pm(s(this, Mt)[3] * 256 / s(this, Sa));
      Wd(s(this, ps), t, i, n, r, a);
      for (const o of s(this, ii)) o !== t && Wd(s(this, ps), o, i, n, r, a);
      for (const o of s(this, Qi)) o !== t && Wd(s(this, ps), o, i, n, r, a);
      for (const o of s(this, va)) o !== t && Wd(s(this, ps), o, i, n, r, a);
      e || (s(this, ii).clear(), m(this, fs, -1));
    }
    return this;
  }

  recordShowTextOperation(t, e = !1) {
    const i = Array.from(s(this, ii));
    this.recordOperation(t, e), this.recordIncrementalData('sameLineText', t);
    for (const n of i) this.recordIncrementalData('sameLineText', n);
    return this;
  }

  bboxToClipBoxDropOperation(t, e = !1) {
    return s(this, fs) === t && (m(this, fs, -1), s(this, Rt)[0] = Math.max(s(this, Rt)[0], s(this, Mt)[0]), s(this, Rt)[1] = Math.max(s(this, Rt)[1], s(this, Mt)[1]), s(this, Rt)[2] = Math.min(s(this, Rt)[2], s(this, Mt)[2]), s(this, Rt)[3] = Math.min(s(this, Rt)[3], s(this, Mt)[3]), e || s(this, ii).clear()), this;
  }

  _takePendingDependencies() {
    const t = s(this, ii);
    return m(this, ii, /* @__PURE__ */ new Set()), t;
  }

  _extractOperation(t) {
    const e = s(this, Ac).get(t);
    return s(this, Ac).delete(t), e;
  }

  _pushPendingDependencies(t) {
    for (const e of t) s(this, ii).add(e);
  }

  take() {
    return s(this, el).clear(), new Qw(s(this, Be), s(this, ps));
  }

  takeDebugMetadata() {
    return s(this, Tn);
  }
}
ti = new WeakMap(), ei = new WeakMap(), ba = new WeakMap(), Qi = new WeakMap(), va = new WeakMap(), us = new WeakMap(), Rt = new WeakMap(), Mt = new WeakMap(), fs = new WeakMap(), ii = new WeakMap(), Ac = new WeakMap(), el = new WeakMap(), wa = new WeakMap(), Sa = new WeakMap(), ps = new WeakMap(), Be = new WeakMap(), Tn = new WeakMap(), _c = new WeakSet(), gp = function (t, e) {
  const i = new ArrayBuffer(t * 4);
  m(this, ps, new Uint8ClampedArray(i)), m(this, Be, new Uint32Array(i)), e && e.length > 0 ? (s(this, Be).set(e), s(this, Be).fill(pp, e.length)) : s(this, Be).fill(pp);
};
let Bt; let Zt; let Zi; let il; let
  nl;
const Ig = class Ig {
  constructor(t, e, i) {
    v(this, Bt);
    v(this, Zt);
    v(this, Zi);
    v(this, il, 0);
    v(this, nl, 0);
    if (t instanceof Ig && s(t, Zi) === !!i) return t;
    m(this, Bt, t), m(this, Zt, e), m(this, Zi, !!i);
  }

  growOperationsCount() {
    throw new Error('Unreachable');
  }

  save(t) {
    return de(this, nl)._++, s(this, Bt).save(s(this, Zt)), this;
  }

  restore(t) {
    return s(this, nl) > 0 && (s(this, Bt).restore(s(this, Zt)), de(this, nl)._--), this;
  }

  recordOpenMarker(t) {
    return de(this, il)._++, this;
  }

  getOpenMarker() {
    return s(this, il) > 0 ? s(this, Zt) : s(this, Bt).getOpenMarker();
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
    return s(this, Bt).pushBaseTransform(t), this;
  }

  popBaseTransform() {
    return s(this, Bt).popBaseTransform(), this;
  }

  recordSimpleData(t, e) {
    return s(this, Bt).recordSimpleData(t, s(this, Zt)), this;
  }

  recordIncrementalData(t, e) {
    return s(this, Bt).recordIncrementalData(t, s(this, Zt)), this;
  }

  resetIncrementalData(t, e) {
    return s(this, Bt).resetIncrementalData(t, s(this, Zt)), this;
  }

  recordNamedData(t, e) {
    return this;
  }

  recordSimpleDataFromNamed(t, e, i) {
    return s(this, Bt).recordSimpleDataFromNamed(t, e, s(this, Zt)), this;
  }

  recordFutureForcedDependency(t, e) {
    return s(this, Bt).recordFutureForcedDependency(t, s(this, Zt)), this;
  }

  inheritSimpleDataAsFutureForcedDependencies(t) {
    return s(this, Bt).inheritSimpleDataAsFutureForcedDependencies(t), this;
  }

  inheritPendingDependenciesAsFutureForcedDependencies() {
    return s(this, Bt).inheritPendingDependenciesAsFutureForcedDependencies(), this;
  }

  resetBBox(t) {
    return s(this, Zi) || s(this, Bt).resetBBox(s(this, Zt)), this;
  }

  recordClipBox(t, e, i, n, r, a) {
    return s(this, Zi) || s(this, Bt).recordClipBox(s(this, Zt), e, i, n, r, a), this;
  }

  recordBBox(t, e, i, n, r, a) {
    return s(this, Zi) || s(this, Bt).recordBBox(s(this, Zt), e, i, n, r, a), this;
  }

  recordCharacterBBox(t, e, i, n, r, a, o) {
    return s(this, Zi) || s(this, Bt).recordCharacterBBox(s(this, Zt), e, i, n, r, a, o), this;
  }

  recordFullPageBBox(t) {
    return s(this, Zi) || s(this, Bt).recordFullPageBBox(s(this, Zt)), this;
  }

  getSimpleIndex(t) {
    return s(this, Bt).getSimpleIndex(t);
  }

  recordDependencies(t, e) {
    return s(this, Bt).recordDependencies(s(this, Zt), e), this;
  }

  recordNamedDependency(t, e) {
    return s(this, Bt).recordNamedDependency(s(this, Zt), e), this;
  }

  recordOperation(t) {
    return s(this, Bt).recordOperation(s(this, Zt), !0), this;
  }

  recordShowTextOperation(t) {
    return s(this, Bt).recordShowTextOperation(s(this, Zt), !0), this;
  }

  bboxToClipBoxDropOperation(t) {
    return s(this, Zi) || s(this, Bt).bboxToClipBoxDropOperation(s(this, Zt), !0), this;
  }

  take() {
    throw new Error('Unreachable');
  }

  takeDebugMetadata() {
    throw new Error('Unreachable');
  }
};
Bt = new WeakMap(), Zt = new WeakMap(), Zi = new WeakMap(), il = new WeakMap(), nl = new WeakMap();
const Du = Ig;
const Mi = {
  stroke: ['path', 'transform', 'filter', 'strokeColor', 'strokeAlpha', 'lineWidth', 'lineCap', 'lineJoin', 'miterLimit', 'dash'],
  fill: ['path', 'transform', 'filter', 'fillColor', 'fillAlpha', 'globalCompositeOperation', 'SMask'],
  imageXObject: ['transform', 'SMask', 'filter', 'fillAlpha', 'strokeAlpha', 'globalCompositeOperation'],
  rawFillPath: ['filter', 'fillColor', 'fillAlpha'],
  showText: ['transform', 'leading', 'charSpacing', 'wordSpacing', 'hScale', 'textRise', 'moveText', 'textMatrix', 'font', 'fontObj', 'filter', 'fillColor', 'textRenderingMode', 'SMask', 'fillAlpha', 'strokeAlpha', 'globalCompositeOperation', 'sameLineText'],
  transform: ['transform'],
  transformAndFill: ['transform', 'fillColor'],
}; const
  Le = {
    FILL: 'Fill',
    STROKE: 'Stroke',
    SHADING: 'Shading',
  };
function mp(h, t) {
  if (!t) return;
  const e = t[2] - t[0]; const i = t[3] - t[1]; const
    n = new Path2D();
  n.rect(t[0], t[1], e, i), h.clip(n);
}
class xg {
  isModifyingCurrentTransform() {
    return !1;
  }

  getPattern() {
    zt('Abstract method `getPattern` called.');
  }
}
class t0 extends xg {
  constructor(t) {
    super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
  }

  _createGradient(t) {
    let e;
    this._type === 'axial' ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === 'radial' && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const i of this._colorStops) e.addColorStop(i[0], i[1]);
    return e;
  }

  getPattern(t, e, i, n) {
    let r;
    if (n === Le.STROKE || n === Le.FILL) {
      const a = e.current.getClippedPathBoundingBox(n, Yt(t)) || [0, 0, 0, 0]; const o = Math.ceil(a[2] - a[0]) || 1; const l = Math.ceil(a[3] - a[1]) || 1; const c = e.cachedCanvases.getCanvas('pattern', o, l); const
        d = c.context;
      d.clearRect(0, 0, d.canvas.width, d.canvas.height), d.beginPath(), d.rect(0, 0, d.canvas.width, d.canvas.height), d.translate(-a[0], -a[1]), i = tt.transform(i, [1, 0, 0, 1, a[0], a[1]]), d.transform(...e.baseTransform), this.matrix && d.transform(...this.matrix), mp(d, this._bbox), d.fillStyle = this._createGradient(d), d.fill(), r = t.createPattern(c.canvas, 'no-repeat');
      const u = new DOMMatrix(i);
      r.setTransform(u);
    } else mp(t, this._bbox), r = this._createGradient(t);
    return r;
  }
}
function Of(h, t, e, i, n, r, a, o) {
  const l = t.coords; const c = t.colors; const d = h.data; const
    u = h.width * 4;
  let g;
  l[e + 1] > l[i + 1] && (g = e, e = i, i = g, g = r, r = a, a = g), l[i + 1] > l[n + 1] && (g = i, i = n, n = g, g = a, a = o, o = g), l[e + 1] > l[i + 1] && (g = e, e = i, i = g, g = r, r = a, a = g);
  const b = (l[e] + t.offsetX) * t.scaleX; const C = (l[e + 1] + t.offsetY) * t.scaleY; const S = (l[i] + t.offsetX) * t.scaleX; const L = (l[i + 1] + t.offsetY) * t.scaleY; const k = (l[n] + t.offsetX) * t.scaleX; const
    M = (l[n + 1] + t.offsetY) * t.scaleY;
  if (C >= M) return;
  const R = c[r]; const p = c[r + 1]; const f = c[r + 2]; const y = c[a]; const _ = c[a + 1]; const T = c[a + 2]; const P = c[o]; const E = c[o + 1]; const D = c[o + 2]; const N = Math.round(C); const
    I = Math.round(M);
  let B; let j; let z; let w; let K; let F; let x; let
    O;
  for (let H = N; H <= I; H++) {
    if (H < L) {
      const W = H < C ? 0 : (C - H) / (C - L);
      B = b - (b - S) * W, j = R - (R - y) * W, z = p - (p - _) * W, w = f - (f - T) * W;
    } else {
      let W;
      H > M ? W = 1 : L === M ? W = 0 : W = (L - H) / (L - M), B = S - (S - k) * W, j = y - (y - P) * W, z = _ - (_ - E) * W, w = T - (T - D) * W;
    }
    let U;
    H < C ? U = 0 : H > M ? U = 1 : U = (C - H) / (C - M), K = b - (b - k) * U, F = R - (R - P) * U, x = p - (p - E) * U, O = f - (f - D) * U;
    const $ = Math.round(Math.min(B, K)); const
      q = Math.round(Math.max(B, K));
    let G = u * H + $ * 4;
    for (let W = $; W <= q; W++) U = (B - W) / (B - K), U < 0 ? U = 0 : U > 1 && (U = 1), d[G++] = j - (j - F) * U | 0, d[G++] = z - (z - x) * U | 0, d[G++] = w - (w - O) * U | 0, d[G++] = 255;
  }
}
function e0(h, t, e) {
  const i = t.coords; const
    n = t.colors;
  let r; let
    a;
  switch (t.type) {
    case 'lattice':
      const o = t.verticesPerRow; const l = Math.floor(i.length / o) - 1; const
        c = o - 1;
      for (r = 0; r < l; r++) {
        let d = r * o;
        for (let u = 0; u < c; u++, d++) Of(h, e, i[d], i[d + 1], i[d + o], n[d], n[d + 1], n[d + o]), Of(h, e, i[d + o + 1], i[d + 1], i[d + o], n[d + o + 1], n[d + 1], n[d + o]);
      }
      break;
    case 'triangles':
      for (r = 0, a = i.length; r < a; r += 3) Of(h, e, i[r], i[r + 1], i[r + 2], n[r], n[r + 1], n[r + 2]);
      break;
    default:
      throw new Error('illegal figure');
  }
}
class i0 extends xg {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[6], this._background = t[7], this.matrix = null;
  }

  _createMeshCanvas(t, e, i) {
    const o = Math.floor(this._bounds[0]); const l = Math.floor(this._bounds[1]); const c = Math.ceil(this._bounds[2]) - o; const d = Math.ceil(this._bounds[3]) - l; const u = Math.min(Math.ceil(Math.abs(c * t[0] * 1.1)), 3e3); const g = Math.min(Math.ceil(Math.abs(d * t[1] * 1.1)), 3e3); const b = c / u; const C = d / g; const S = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -o,
      offsetY: -l,
      scaleX: 1 / b,
      scaleY: 1 / C,
    }; const L = u + 4; const k = g + 4; const M = i.getCanvas('mesh', L, k); const R = M.context; const
      p = R.createImageData(u, g);
    if (e) {
      const y = p.data;
      for (let _ = 0, T = y.length; _ < T; _ += 4) y[_] = e[0], y[_ + 1] = e[1], y[_ + 2] = e[2], y[_ + 3] = 255;
    }
    for (const y of this._figures) e0(p, y, S);
    return R.putImageData(p, 2, 2), {
      canvas: M.canvas,
      offsetX: o - 2 * b,
      offsetY: l - 2 * C,
      scaleX: b,
      scaleY: C,
    };
  }

  isModifyingCurrentTransform() {
    return !0;
  }

  getPattern(t, e, i, n) {
    mp(t, this._bbox);
    const r = new Float32Array(2);
    if (n === Le.SHADING) tt.singularValueDecompose2dScale(Yt(t), r);
    else if (this.matrix) {
      tt.singularValueDecompose2dScale(this.matrix, r);
      const [o, l] = r;
      tt.singularValueDecompose2dScale(e.baseTransform, r), r[0] *= o, r[1] *= l;
    } else tt.singularValueDecompose2dScale(e.baseTransform, r);
    const a = this._createMeshCanvas(r, n === Le.SHADING ? null : this._background, e.cachedCanvases);
    return n !== Le.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, 'no-repeat');
  }
}
class n0 extends xg {
  getPattern() {
    return 'hotpink';
  }
}
function s0(h) {
  switch (h[0]) {
    case 'RadialAxial':
      return new t0(h);
    case 'Mesh':
      return new i0(h);
    case 'Dummy':
      return new n0();
  }
  throw new Error(`Unknown IR type: ${h[0]}`);
}
const gm = {
  COLORED: 1,
  UNCOLORED: 2,
};
const Ku = class Ku {
  constructor(t, e, i, n) {
    this.color = t[1], this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.ctx = e, this.canvasGraphicsFactory = i, this.baseTransform = n;
  }

  createPatternCanvas(t, e) {
    let F; let
      x;
    const {
      bbox: i,
      operatorList: n,
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
    const u = i[0]; const g = i[1]; const b = i[2]; const C = i[3]; const S = b - u; const L = C - g; const
      k = new Float32Array(2);
    tt.singularValueDecompose2dScale(this.matrix, k);
    const [M, R] = k;
    tt.singularValueDecompose2dScale(this.baseTransform, k);
    const p = M * k[0]; const
      f = R * k[1];
    let y = S; let _ = L; let T = !1; let
      P = !1;
    const E = Math.ceil(c * p); const D = Math.ceil(d * f); const N = Math.ceil(S * p); const
      I = Math.ceil(L * f);
    E >= N ? y = c : T = !0, D >= I ? _ = d : P = !0;
    const B = this.getSizeAndScale(y, this.ctx.canvas.width, p); const j = this.getSizeAndScale(_, this.ctx.canvas.height, f); const z = t.cachedCanvases.getCanvas('pattern', B.size, j.size); const w = z.context; const
      K = l.createCanvasGraphics(w, e);
    if (K.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(K, r, o), w.translate(-B.scale * u, -j.scale * g), K.transform(0, B.scale, 0, 0, j.scale, 0, 0), w.save(), (F = K.dependencyTracker) == null || F.save(), this.clipBbox(K, u, g, b, C), K.baseTransform = Yt(K.ctx), K.executeOperatorList(n), K.endDrawing(), (x = K.dependencyTracker) == null || x.restore(), w.restore(), T || P) {
      const O = z.canvas;
      T && (y = c), P && (_ = d);
      const H = this.getSizeAndScale(y, this.ctx.canvas.width, p); const U = this.getSizeAndScale(_, this.ctx.canvas.height, f); const $ = H.size; const q = U.size; const G = t.cachedCanvases.getCanvas('pattern-workaround', $, q); const W = G.context; const ht = T ? Math.floor(S / c) : 0; const
        ct = P ? Math.floor(L / d) : 0;
      for (let dt = 0; dt <= ht; dt++) for (let ut = 0; ut <= ct; ut++) W.drawImage(O, $ * dt, q * ut, $, q, 0, 0, $, q);
      return {
        canvas: G.canvas,
        scaleX: H.scale,
        scaleY: U.scale,
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
    const n = Math.max(Ku.MAX_PATTERN_SIZE, e);
    let r = Math.ceil(t * i);
    return r >= n ? r = n : i = r / t, {
      scale: i,
      size: r,
    };
  }

  clipBbox(t, e, i, n, r) {
    const a = n - e; const
      o = r - i;
    t.ctx.rect(e, i, a, o), tt.axialAlignedBoundingBox([e, i, n, r], Yt(t.ctx), t.current.minMax), t.clip(), t.endPath();
  }

  setFillAndStrokeStyleToContext(t, e, i) {
    const n = t.ctx; const
      r = t.current;
    switch (e) {
      case gm.COLORED:
        const {
          fillStyle: a,
          strokeStyle: o,
        } = this.ctx;
        n.fillStyle = r.fillColor = a, n.strokeStyle = r.strokeColor = o;
        break;
      case gm.UNCOLORED:
        n.fillStyle = n.strokeStyle = i, r.fillColor = r.strokeColor = i;
        break;
      default:
        throw new Ew(`Unsupported paint type: ${e}`);
    }
  }

  isModifyingCurrentTransform() {
    return !1;
  }

  getPattern(t, e, i, n, r) {
    let a = i;
    n !== Le.SHADING && (a = tt.transform(a, e.baseTransform), this.matrix && (a = tt.transform(a, this.matrix)));
    const o = this.createPatternCanvas(e, r);
    let l = new DOMMatrix(a);
    l = l.translate(o.offsetX, o.offsetY), l = l.scale(1 / o.scaleX, 1 / o.scaleY);
    const c = t.createPattern(o.canvas, 'repeat');
    return c.setTransform(l), c;
  }
};
V(Ku, 'MAX_PATTERN_SIZE', 3e3);
const yp = Ku;
function r0({
  src: h,
  srcPos: t = 0,
  dest: e,
  width: i,
  height: n,
  nonBlackColor: r = 4294967295,
  inverseDecode: a = !1,
}) {
  const o = _e.isLittleEndian ? 4278190080 : 255; const [l, c] = a ? [r, o] : [o, r]; const d = i >> 3; const u = i & 7; const
    g = h.length;
  e = new Uint32Array(e.buffer);
  let b = 0;
  for (let C = 0; C < n; C++) {
    for (const L = t + d; t < L; t++) {
      const k = t < g ? h[t] : 255;
      e[b++] = k & 128 ? c : l, e[b++] = k & 64 ? c : l, e[b++] = k & 32 ? c : l, e[b++] = k & 16 ? c : l, e[b++] = k & 8 ? c : l, e[b++] = k & 4 ? c : l, e[b++] = k & 2 ? c : l, e[b++] = k & 1 ? c : l;
    }
    if (u === 0) continue;
    const S = t < g ? h[t++] : 255;
    for (let L = 0; L < u; L++) e[b++] = S & 1 << 7 - L ? c : l;
  }
  return {
    srcPos: t,
    destPos: b,
  };
}
const mm = 16; const ym = 100; const a0 = 15; const bm = 10; const ai = 16; const If = new DOMMatrix(); const Ti = new Float32Array(2); const
  _o = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
function o0(h, t) {
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
  }, h.transform = function (e, i, n, r, a, o) {
    t.transform(e, i, n, r, a, o), this.__originalTransform(e, i, n, r, a, o);
  }, h.setTransform = function (e, i, n, r, a, o) {
    t.setTransform(e, i, n, r, a, o), this.__originalSetTransform(e, i, n, r, a, o);
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
  }, h.bezierCurveTo = function (e, i, n, r, a, o) {
    t.bezierCurveTo(e, i, n, r, a, o), this.__originalBezierCurveTo(e, i, n, r, a, o);
  }, h.rect = function (e, i, n, r) {
    t.rect(e, i, n, r), this.__originalRect(e, i, n, r);
  }, h.closePath = function () {
    t.closePath(), this.__originalClosePath();
  }, h.beginPath = function () {
    t.beginPath(), this.__originalBeginPath();
  };
}
class l0 {
  constructor(t) {
    this.canvasFactory = t, this.cache = /* @__PURE__ */ Object.create(null);
  }

  getCanvas(t, e, i) {
    let n;
    return this.cache[t] !== void 0 ? (n = this.cache[t], this.canvasFactory.reset(n, e, i)) : (n = this.canvasFactory.create(e, i), this.cache[t] = n), n;
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
function Vd(h, t, e, i, n, r, a, o, l, c) {
  const [d, u, g, b, C, S] = Yt(h);
  if (u === 0 && g === 0) {
    const M = a * d + C; const R = Math.round(M); const p = o * b + S; const f = Math.round(p); const y = (a + l) * d + C; const _ = Math.abs(Math.round(y) - R) || 1; const T = (o + c) * b + S; const
      P = Math.abs(Math.round(T) - f) || 1;
    return h.setTransform(Math.sign(d), 0, 0, Math.sign(b), R, f), h.drawImage(t, e, i, n, r, 0, 0, _, P), h.setTransform(d, u, g, b, C, S), [_, P];
  }
  if (d === 0 && b === 0) {
    const M = o * g + C; const R = Math.round(M); const p = a * u + S; const f = Math.round(p); const y = (o + c) * g + C; const _ = Math.abs(Math.round(y) - R) || 1; const T = (a + l) * u + S; const
      P = Math.abs(Math.round(T) - f) || 1;
    return h.setTransform(0, Math.sign(u), Math.sign(g), 0, R, f), h.drawImage(t, e, i, n, r, 0, 0, P, _), h.setTransform(d, u, g, b, C, S), [P, _];
  }
  h.drawImage(t, e, i, n, r, a, o, l, c);
  const L = Math.hypot(d, u); const
    k = Math.hypot(g, b);
  return [L * l, k * c];
}
class vm {
  constructor(t, e, i) {
    V(this, 'alphaIsShape', !1);
    V(this, 'fontSize', 0);
    V(this, 'fontSizeScale', 1);
    V(this, 'textMatrix', null);
    V(this, 'textMatrixScale', 1);
    V(this, 'fontMatrix', Uf);
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
    i == null || i(this), this.clipBox = new Float32Array([0, 0, t, e]), this.minMax = _o.slice();
  }

  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t.minMax = this.minMax.slice(), t;
  }

  getPathBoundingBox(t = Le.FILL, e = null) {
    const i = this.minMax.slice();
    if (t === Le.STROKE) {
      e || zt('Stroke bounding box must include transform.'), tt.singularValueDecompose2dScale(e, Ti);
      const n = Ti[0] * this.lineWidth / 2; const
        r = Ti[1] * this.lineWidth / 2;
      i[0] -= n, i[1] -= r, i[2] += n, i[3] += r;
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
    this.clipBox.set(t, 0), this.minMax.set(_o, 0);
  }

  getClippedPathBoundingBox(t = Le.FILL, e = null) {
    return tt.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function wm(h, t) {
  if (t instanceof ImageData) {
    h.putImageData(t, 0, 0);
    return;
  }
  const e = t.height; const i = t.width; const n = e % ai; const r = (e - n) / ai; const a = n === 0 ? r : r + 1; const
    o = h.createImageData(i, ai);
  let l = 0; let
    c;
  const d = t.data; const
    u = o.data;
  let g; let b; let C; let
    S;
  if (t.kind === Bh.GRAYSCALE_1BPP) {
    const L = d.byteLength; const k = new Uint32Array(u.buffer, 0, u.byteLength >> 2); const M = k.length; const R = i + 7 >> 3; const p = 4294967295; const
      f = _e.isLittleEndian ? 4278190080 : 255;
    for (g = 0; g < a; g++) {
      for (C = g < r ? ai : n, c = 0, b = 0; b < C; b++) {
        const y = L - l;
        let _ = 0;
        const T = y > R ? i : y * 8 - 7; const
          P = T & -8;
        let E = 0; let
          D = 0;
        for (; _ < P; _ += 8) D = d[l++], k[c++] = D & 128 ? p : f, k[c++] = D & 64 ? p : f, k[c++] = D & 32 ? p : f, k[c++] = D & 16 ? p : f, k[c++] = D & 8 ? p : f, k[c++] = D & 4 ? p : f, k[c++] = D & 2 ? p : f, k[c++] = D & 1 ? p : f;
        for (; _ < T; _++) E === 0 && (D = d[l++], E = 128), k[c++] = D & E ? p : f, E >>= 1;
      }
      for (; c < M;) k[c++] = 0;
      h.putImageData(o, 0, g * ai);
    }
  } else if (t.kind === Bh.RGBA_32BPP) {
    for (b = 0, S = i * ai * 4, g = 0; g < r; g++) u.set(d.subarray(l, l + S)), l += S, h.putImageData(o, 0, b), b += ai;
    g < a && (S = i * n * 4, u.set(d.subarray(l, l + S)), h.putImageData(o, 0, b));
  } else if (t.kind === Bh.RGB_24BPP) {
    for (C = ai, S = i * C, g = 0; g < a; g++) {
      for (g >= r && (C = n, S = i * C), c = 0, b = S; b--;) u[c++] = d[l++], u[c++] = d[l++], u[c++] = d[l++], u[c++] = 255;
      h.putImageData(o, 0, g * ai);
    }
  } else throw new Error(`bad image kind: ${t.kind}`);
}
function Sm(h, t) {
  if (t.bitmap) {
    h.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height; const i = t.width; const n = e % ai; const r = (e - n) / ai; const a = n === 0 ? r : r + 1; const
    o = h.createImageData(i, ai);
  let l = 0;
  const c = t.data; const
    d = o.data;
  for (let u = 0; u < a; u++) {
    const g = u < r ? ai : n;
    ({
      srcPos: l,
    } = r0({
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
function Am(h, t) {
  if (t) return !0;
  tt.singularValueDecompose2dScale(h, Ti);
  const e = Math.fround(dn.pixelRatio * Is.PDF_TO_CSS_UNITS);
  return Ti[0] <= e && Ti[1] <= e;
}
const h0 = ['butt', 'round', 'square']; const c0 = ['miter', 'round', 'bevel']; const d0 = {}; const
  _m = {};
let un; let bp; let vp; let
  wp;
const Fg = class Fg {
  constructor(t, e, i, n, r, {
    optionalContentConfig: a,
    markedContentStack: o = null,
  }, l, c, d) {
    v(this, un);
    this.ctx = t, this.current = new vm(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = i, this.canvasFactory = n, this.filterFactory = r, this.groupStack = [], this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedCanvases = new l0(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = l, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = c, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map(), this.dependencyTracker = d ?? null;
  }

  getObject(t, e, i = null) {
    let n;
    return typeof e === 'string' ? ((n = this.dependencyTracker) == null || n.recordNamedDependency(t, e), e.startsWith('g_') ? this.commonObjs.get(e) : this.objs.get(e)) : i;
  }

  beginDrawing({
    transform: t,
    viewport: e,
    transparency: i = !1,
    background: n = null,
  }) {
    const r = this.ctx.canvas.width; const a = this.ctx.canvas.height; const
      o = this.ctx.fillStyle;
    if (this.ctx.fillStyle = n || '#ffffff', this.ctx.fillRect(0, 0, r, a), this.ctx.fillStyle = o, i) {
      const l = this.cachedCanvases.getCanvas('transparent', r, a);
      this.compositeCtx = this.ctx, this.transparentCanvas = l.canvas, this.ctx = l.context, this.ctx.save(), this.ctx.transform(...Yt(this.compositeCtx));
    }
    this.ctx.save(), qd(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = Yt(this.ctx);
  }

  executeOperatorList(t, e, i, n, r) {
    let k;
    const a = t.argsArray; const
      o = t.fnArray;
    let l = e || 0;
    const c = a.length;
    if (c === l) return l;
    const d = c - l > bm && typeof i === 'function';
    const u = d ? Date.now() + a0 : 0;
    let g = 0;
    const b = this.commonObjs; const
      C = this.objs;
    let S; let
      L;
    for (; ;) {
      if (n !== void 0 && l === n.nextBreakPoint) return n.breakIt(l, i), l;
      if (!r || r(l)) {
        if (S = o[l], L = a[l] ?? null, S !== sh.dependency) L === null ? this[S](l) : this[S](l, ...L);
        else {
          for (const M of L) {
            (k = this.dependencyTracker) == null || k.recordNamedData(M, l);
            const R = M.startsWith('g_') ? b : C;
            if (!R.has(M)) return R.get(M, i), l;
          }
        }
      }
      if (l++, l === c) return l;
      if (d && ++g > bm) {
        if (Date.now() > u) return i(), l;
        g = 0;
      }
    }
  }

  endDrawing() {
    A(this, un, bp).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values()) typeof HTMLCanvasElement < 'u' && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), A(this, un, vp).call(this);
  }

  _scaleImage(t, e) {
    const i = t.width ?? t.displayWidth; const
      n = t.height ?? t.displayHeight;
    let r = Math.max(Math.hypot(e[0], e[1]), 1); let a = Math.max(Math.hypot(e[2], e[3]), 1); let o = i; let l = n; let c = 'prescale1'; let d; let
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
    let E; let
      D;
    const i = this.ctx; const {
      width: n,
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
        return (E = this.dependencyTracker) == null || E.recordDependencies(t, Mi.transformAndFill), {
          canvas: I,
          offsetX: B,
          offsetY: j,
        };
      }
      u = I;
    }
    u || (g = this.cachedCanvases.getCanvas('maskCanvas', n, r), Sm(g.context, e));
    let b = tt.transform(l, [1 / n, 0, 0, -1 / r, 0, 0]);
    b = tt.transform(b, [1, 0, 0, 1, 0, -r]);
    const C = _o.slice();
    tt.axialAlignedBoundingBox([0, 0, n, r], b, C);
    const [S, L, k, M] = C; const R = Math.round(k - S) || 1; const p = Math.round(M - L) || 1; const f = this.cachedCanvases.getCanvas('fillCanvas', R, p); const y = f.context; const _ = S; const
      T = L;
    y.translate(-_, -T), y.transform(...b), u || (u = this._scaleImage(g.canvas, pn(y)), u = u.img, c && o && c.set(d, u)), y.imageSmoothingEnabled = Am(Yt(y), e.interpolate), Vd(y, u, 0, 0, u.width, u.height, 0, 0, n, r), y.globalCompositeOperation = 'source-in';
    const P = tt.transform(pn(y), [1, 0, 0, 1, -_, -T]);
    return y.fillStyle = o ? a.getPattern(i, this, P, Le.FILL, t) : a, y.fillRect(0, 0, n, r), c && !o && (this.cachedCanvases.delete('fillCanvas'), c.set(d, f.canvas)), (D = this.dependencyTracker) == null || D.recordDependencies(t, Mi.transformAndFill), {
      canvas: f.canvas,
      offsetX: Math.round(_),
      offsetY: Math.round(T),
    };
  }

  setLineWidth(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('lineWidth', t), e !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = e, this.ctx.lineWidth = e;
  }

  setLineCap(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('lineCap', t), this.ctx.lineCap = h0[e];
  }

  setLineJoin(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('lineJoin', t), this.ctx.lineJoin = c0[e];
  }

  setMiterLimit(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('miterLimit', t), this.ctx.miterLimit = e;
  }

  setDash(t, e, i) {
    let r;
    (r = this.dependencyTracker) == null || r.recordSimpleData('dash', t);
    const n = this.ctx;
    n.setLineDash !== void 0 && (n.setLineDash(e), n.lineDashOffset = i);
  }

  setRenderingIntent(t, e) {
  }

  setFlatness(t, e) {
  }

  setGState(t, e) {
    let i; let n; let r; let a; let
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
          (n = this.dependencyTracker) == null || n.recordSimpleData('fillAlpha', t), this.ctx.globalAlpha = this.current.fillAlpha = c;
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
    const e = this.ctx.canvas.width; const i = this.ctx.canvas.height; const n = `smaskGroupAt${this.groupLevel}`; const
      r = this.cachedCanvases.getCanvas(n, e, i);
    this.suspendedCtx = this.ctx;
    const a = this.ctx = r.context;
    a.setTransform(this.suspendedCtx.getTransform()), uh(this.suspendedCtx, a), o0(a, this.suspendedCtx), this.setGState(t, [['BM', 'source-over']]);
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

  composeSMask(t, e, i, n) {
    const r = n[0]; const a = n[1]; const o = n[2] - r; const
      l = n[3] - a;
    o === 0 || l === 0 || (this.genericComposeSMask(e.context, i, o, l, e.subtype, e.backdrop, e.transferMap, r, a, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = 'source-over', t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(i.canvas, 0, 0), t.restore());
  }

  genericComposeSMask(t, e, i, n, r, a, o, l, c, d, u) {
    let g = t.canvas; let b = l - d; let
      C = c - u;
    if (a) {
      if (b < 0 || C < 0 || b + i > g.width || C + n > g.height) {
        const L = this.cachedCanvases.getCanvas('maskExtension', i, n); const
          k = L.context;
        k.drawImage(g, -b, -C), k.globalCompositeOperation = 'destination-atop', k.fillStyle = a, k.fillRect(0, 0, i, n), k.globalCompositeOperation = 'source-over', g = L.canvas, b = C = 0;
      } else {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const L = new Path2D();
        L.rect(b, C, i, n), t.clip(L), t.globalCompositeOperation = 'destination-atop', t.fillStyle = a, t.fillRect(b, C, i, n), t.restore();
      }
    }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), r === 'Alpha' && o ? e.filter = this.filterFactory.addAlphaFilter(o) : r === 'Luminosity' && (e.filter = this.filterFactory.addLuminosityFilter(o));
    const S = new Path2D();
    S.rect(l, c, i, n), e.clip(S), e.globalCompositeOperation = 'destination-in', e.drawImage(g, b, C, i, n, l, c, i, n), e.restore();
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

  transform(t, e, i, n, r, a, o) {
    let l;
    (l = this.dependencyTracker) == null || l.recordIncrementalData('transform', t), this.ctx.transform(e, i, n, r, a, o), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }

  constructPath(t, e, i, n) {
    let [r] = i;
    if (!n) {
      r || (r = i[0] = new Path2D()), this[e](t, r);
      return;
    }
    if (this.dependencyTracker !== null) {
      const a = e === sh.stroke ? this.current.lineWidth / 2 : 0;
      this.dependencyTracker.resetBBox(t).recordBBox(t, this.ctx, n[0] - a, n[2] + a, n[1] - a, n[3] + a).recordDependencies(t, ['transform']);
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
    tt.axialAlignedBoundingBox(n, Yt(this.ctx), this.current.minMax), this[e](t, r), this._pathStartIdx = t;
  }

  closePath(t) {
    this.ctx.closePath();
  }

  stroke(t, e, i = !0) {
    let a;
    const n = this.ctx; const
      r = this.current.strokeColor;
    if (n.globalAlpha = this.current.strokeAlpha, this.contentVisible) {
      if (typeof r === 'object' && (r != null && r.getPattern)) {
        const o = r.isModifyingCurrentTransform() ? n.getTransform() : null;
        if (n.save(), n.strokeStyle = r.getPattern(n, this, pn(n), Le.STROKE, t), o) {
          const l = new Path2D();
          l.addPath(e, n.getTransform().invertSelf().multiplySelf(o)), e = l;
        }
        this.rescaleAndStroke(e, !1), n.restore();
      } else this.rescaleAndStroke(e, !0);
    }
    (a = this.dependencyTracker) == null || a.recordDependencies(t, Mi.stroke), i && this.consumePath(t, e, this.current.getClippedPathBoundingBox(Le.STROKE, Yt(this.ctx))), n.globalAlpha = this.current.fillAlpha;
  }

  closeStroke(t, e) {
    this.stroke(t, e);
  }

  fill(t, e, i = !0) {
    let c; let d; let
      u;
    const n = this.ctx; const r = this.current.fillColor; const
      a = this.current.patternFill;
    let o = !1;
    if (a) {
      const g = r.isModifyingCurrentTransform() ? n.getTransform() : null;
      if ((c = this.dependencyTracker) == null || c.save(t), n.save(), n.fillStyle = r.getPattern(n, this, pn(n), Le.FILL, t), g) {
        const b = new Path2D();
        b.addPath(e, n.getTransform().invertSelf().multiplySelf(g)), e = b;
      }
      o = !0;
    }
    const l = this.current.getClippedPathBoundingBox();
    this.contentVisible && l !== null && (this.pendingEOFill ? (n.fill(e, 'evenodd'), this.pendingEOFill = !1) : n.fill(e)), (d = this.dependencyTracker) == null || d.recordDependencies(t, Mi.fill), o && (n.restore(), (u = this.dependencyTracker) == null || u.restore(t)), i && this.consumePath(t, e, l);
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
    this.ctx.fill(e), (i = this.dependencyTracker) == null || i.recordDependencies(t, Mi.rawFillPath).recordOperation(t);
  }

  clip(t) {
    let e;
    (e = this.dependencyTracker) == null || e.recordFutureForcedDependency('clipMode', t), this.pendingClip = d0;
  }

  eoClip(t) {
    let e;
    (e = this.dependencyTracker) == null || e.recordFutureForcedDependency('clipMode', t), this.pendingClip = _m;
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
        dependencyTracker: n,
      } = this;
      e !== void 0 && n.recordFutureForcedDependency('textClip', n.getOpenMarker()).recordFutureForcedDependency('textClip', t), n.recordCloseMarker(t);
    }
    if (e !== void 0) {
      const n = new Path2D(); const
        r = i.getTransform().invertSelf();
      for (const {
        transform: a,
        x: o,
        y: l,
        fontSize: c,
        path: d,
      } of e) d && n.addPath(d, new DOMMatrix(a).preMultiplySelf(r).translate(o, l).scale(c, -c));
      i.clip(n);
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
    const n = this.commonObjs.get(e); const
      r = this.current;
    if (!n) throw new Error(`Can't find font for ${e}`);
    if (r.fontMatrix = n.fontMatrix || Uf, (r.fontMatrix[0] === 0 || r.fontMatrix[3] === 0) && pt(`Invalid font matrix for font ${e}`), i < 0 ? (i = -i, r.fontDirection = -1) : r.fontDirection = 1, this.current.font = n, this.current.fontSize = i, n.isType3Font) return;
    const a = n.loadedName || 'sans-serif';
    const o = ((g = n.systemFontInfo) == null ? void 0 : g.css) || `"${a}", ${n.fallbackName}`;
    let l = 'normal';
    n.black ? l = '900' : n.bold && (l = 'bold');
    const c = n.italic ? 'italic' : 'normal';
    let d = i;
    i < mm ? d = mm : i > ym && (d = ym), this.current.fontSizeScale = i / d, this.ctx.font = `${c} ${l} ${d}px ${o}`;
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
    let n;
    (n = this.dependencyTracker) == null || n.resetIncrementalData('sameLineText').recordIncrementalData('moveText', t), this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += i;
  }

  setLeadingMoveText(t, e, i) {
    this.setLeading(t, -i), this.moveText(t, e, i);
  }

  setTextMatrix(t, e) {
    let n;
    (n = this.dependencyTracker) == null || n.recordSimpleData('textMatrix', t);
    const {
      current: i,
    } = this;
    i.textMatrix = e, i.textMatrixScale = Math.hypot(e[0], e[1]), i.x = i.lineX = 0, i.y = i.lineY = 0;
  }

  nextLine(t) {
    let e;
    this.moveText(t, 0, this.current.leading), (e = this.dependencyTracker) == null || e.recordIncrementalData('moveText', this.dependencyTracker.getSimpleIndex('leading') ?? t);
  }

  paintChar(t, e, i, n, r, a) {
    let k; let M; let R; let
      p;
    const o = this.ctx; const l = this.current; const c = l.font; const d = l.textRenderingMode; const u = l.fontSize / l.fontSizeScale; const g = d & Ee.FILL_STROKE_MASK; const b = !!(d & Ee.ADD_TO_PATH_FLAG); const C = l.patternFill && !c.missingFile; const
      S = l.patternStroke && !c.missingFile;
    let L;
    if ((c.disableFontFace || b || C || S) && !c.missingFile && (L = c.getPathGenerator(this.commonObjs, e)), L && (c.disableFontFace || C || S)) {
      o.save(), o.translate(i, n), o.scale(u, -u), (k = this.dependencyTracker) == null || k.recordCharacterBBox(t, o, c);
      let f;
      if (g === Ee.FILL || g === Ee.FILL_STROKE) {
        if (r) {
          f = o.getTransform(), o.setTransform(...r);
          const y = A(this, un, wp).call(this, L, f, r);
          o.fill(y);
        } else o.fill(L);
      }
      if (g === Ee.STROKE || g === Ee.FILL_STROKE) {
        if (a) {
          f || (f = o.getTransform()), o.setTransform(...a);
          const {
            a: y,
            b: _,
            c: T,
            d: P,
          } = f; const E = tt.inverseTransform(a); const
            D = tt.transform([y, _, T, P, 0, 0], E);
          tt.singularValueDecompose2dScale(D, Ti), o.lineWidth *= Math.max(Ti[0], Ti[1]) / u, o.stroke(A(this, un, wp).call(this, L, f, a));
        } else o.lineWidth /= u, o.stroke(L);
      }
      o.restore();
    } else (g === Ee.FILL || g === Ee.FILL_STROKE) && (o.fillText(e, i, n), (M = this.dependencyTracker) == null || M.recordCharacterBBox(t, o, c, u, i, n, () => o.measureText(e))), (g === Ee.STROKE || g === Ee.FILL_STROKE) && (this.dependencyTracker && ((R = this.dependencyTracker) == null || R.recordCharacterBBox(t, o, c, u, i, n, () => o.measureText(e)).recordDependencies(t, Mi.stroke)), o.strokeText(e, i, n));
    b && ((this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: Yt(o),
      x: i,
      y: n,
      fontSize: u,
      path: L,
    }), (p = this.dependencyTracker) == null || p.recordCharacterBBox(t, o, c, u, i, n));
  }

  get isFontSubpixelAAEnabled() {
    const {
      context: t,
    } = this.cachedCanvases.getCanvas('isFontSubpixelAAEnabled', 10, 10);
    t.scale(1.5, 1), t.fillText('I', 0, 10);
    const e = t.getImageData(0, 0, 10, 10).data;
    let i = !1;
    for (let n = 3; n < e.length; n += 4) {
      if (e[n] > 0 && e[n] < 255) {
        i = !0;
        break;
      }
    }
    return yt(this, 'isFontSubpixelAAEnabled', i);
  }

  showText(t, e) {
    let T; let P; let E; let
      D;
    this.dependencyTracker && (this.dependencyTracker.recordDependencies(t, Mi.showText).resetBBox(t), this.current.textRenderingMode & Ee.ADD_TO_PATH_FLAG && this.dependencyTracker.recordFutureForcedDependency('textClip', t).inheritPendingDependenciesAsFutureForcedDependencies());
    const i = this.current; const
      n = i.font;
    if (n.isType3Font) {
      this.showType3Text(t, e), (T = this.dependencyTracker) == null || T.recordShowTextOperation(t);
      return;
    }
    const r = i.fontSize;
    if (r === 0) {
      (P = this.dependencyTracker) == null || P.recordOperation(t);
      return;
    }
    const a = this.ctx; const o = i.fontSizeScale; const l = i.charSpacing; const c = i.wordSpacing; const d = i.fontDirection; const u = i.textHScale * d; const g = e.length; const b = n.vertical; const C = b ? 1 : -1; const S = n.defaultVMetrics; const L = r * i.fontMatrix[0]; const
      k = i.textRenderingMode === Ee.FILL && !n.disableFontFace && !i.patternFill;
    a.save(), i.textMatrix && a.transform(...i.textMatrix), a.translate(i.x, i.y + i.textRise), d > 0 ? a.scale(u, -1) : a.scale(u, 1);
    let M; let
      R;
    if (i.patternFill) {
      a.save();
      const N = i.fillColor.getPattern(a, this, pn(a), Le.FILL, t);
      M = Yt(a), a.restore(), a.fillStyle = N;
    }
    if (i.patternStroke) {
      a.save();
      const N = i.strokeColor.getPattern(a, this, pn(a), Le.STROKE, t);
      R = Yt(a), a.restore(), a.strokeStyle = N;
    }
    let p = i.lineWidth;
    const f = i.textMatrixScale;
    if (f === 0 || p === 0) {
      const N = i.textRenderingMode & Ee.FILL_STROKE_MASK;
      (N === Ee.STROKE || N === Ee.FILL_STROKE) && (p = this.getSinglePixelWidth());
    } else p /= f;
    if (o !== 1 && (a.scale(o, o), p /= o), a.lineWidth = p, n.isInvalidPDFjsFont) {
      const N = [];
      let I = 0;
      for (const j of e) N.push(j.unicode), I += j.width;
      const B = N.join('');
      if (a.fillText(B, 0, 0), this.dependencyTracker !== null) {
        const j = a.measureText(B);
        this.dependencyTracker.recordBBox(t, this.ctx, -j.actualBoundingBoxLeft, j.actualBoundingBoxRight, -j.actualBoundingBoxAscent, j.actualBoundingBoxDescent).recordShowTextOperation(t);
      }
      i.x += I * L * u, a.restore(), this.compose();
      return;
    }
    let y = 0; let
      _;
    for (_ = 0; _ < g; ++_) {
      const N = e[_];
      if (typeof N === 'number') {
        y += C * N * r / 1e3;
        continue;
      }
      let I = !1;
      const B = (N.isSpace ? c : 0) + l; const j = N.fontChar; const
        z = N.accent;
      let w; let K; let
        F = N.width;
      if (b) {
        const H = N.vmetric || S; const U = -(N.vmetric ? H[1] : F * 0.5) * L; const
          $ = H[2] * L;
        F = H ? -H[0] : F, w = U / o, K = (y + $) / o;
      } else w = y / o, K = 0;
      let x;
      if (n.remeasure && F > 0) {
        x = a.measureText(j);
        const H = x.width * 1e3 / r * o;
        if (F < H && this.isFontSubpixelAAEnabled) {
          const U = F / H;
          I = !0, a.save(), a.scale(U, 1), w /= U;
        } else F !== H && (w += (F - H) / 2e3 * r / o);
      }
      if (this.contentVisible && (N.isInFont || n.missingFile)) {
        if (k && !z) {
          a.fillText(j, w, K), (E = this.dependencyTracker) == null || E.recordCharacterBBox(t, a, x ? {
            bbox: null,
          } : n, r / o, w, K, () => x ?? a.measureText(j));
        } else if (this.paintChar(t, j, w, K, M, R), z) {
          const H = w + r * z.offset.x / o; const
            U = K - r * z.offset.y / o;
          this.paintChar(t, z.fontChar, H, U, M, R);
        }
      }
      const O = b ? F * L - B * d : F * L + B * d;
      y += O, I && a.restore();
    }
    b ? i.y -= y : i.x += y * u, a.restore(), this.compose(), (D = this.dependencyTracker) == null || D.recordShowTextOperation(t);
  }

  showType3Text(t, e) {
    const i = this.ctx; const n = this.current; const r = n.font; const a = n.fontSize; const o = n.fontDirection; const l = r.vertical ? 1 : -1; const c = n.charSpacing; const d = n.wordSpacing; const u = n.textHScale * o; const g = n.fontMatrix || Uf; const b = e.length; const
      C = n.textRenderingMode === Ee.INVISIBLE;
    let S; let L; let k; let
      M;
    if (C || a === 0) return;
    this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, i.save(), n.textMatrix && i.transform(...n.textMatrix), i.translate(n.x, n.y + n.textRise), i.scale(u, o);
    const R = this.dependencyTracker;
    for (this.dependencyTracker = R ? new Du(R, t) : null, S = 0; S < b; ++S) {
      if (L = e[S], typeof L === 'number') {
        M = l * L * a / 1e3, this.ctx.translate(M, 0), n.x += M * u;
        continue;
      }
      const p = (L.isSpace ? d : 0) + c; const
        f = r.charProcOperatorList[L.operatorListId];
      f ? this.contentVisible && (this.save(), i.scale(a, a), i.transform(...g), this.executeOperatorList(f), this.restore()) : pt(`Type3 character "${L.operatorListId}" is not available.`);
      const y = [L.width, 0];
      tt.applyTransform(y, g), k = y[0] * a + p, i.translate(k, 0), n.x += k * u;
    }
    i.restore(), R && (this.dependencyTracker = R);
  }

  setCharWidth(t, e, i) {
  }

  setCharWidthAndBounds(t, e, i, n, r, a, o) {
    let c;
    const l = new Path2D();
    l.rect(n, r, a - n, o - r), this.ctx.clip(l), (c = this.dependencyTracker) == null || c.recordBBox(t, this.ctx, n, a, r, o).recordClipBox(t, this.ctx, n, a, r, o), this.endPath(t);
  }

  getColorN_Pattern(t, e) {
    let i;
    if (e[0] === 'TilingPattern') {
      const n = this.baseTransform || Yt(this.ctx); const
        r = {
          createCanvasGraphics: (a, o) => new Fg(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
            optionalContentConfig: this.optionalContentConfig,
            markedContentStack: this.markedContentStack,
          }, void 0, void 0, this.dependencyTracker ? new Du(this.dependencyTracker, o, !0) : null),
        };
      i = new yp(e, this.ctx, r, n);
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
    let n;
    return this.cachedPatterns.has(e) ? n = this.cachedPatterns.get(e) : (n = s0(this.getObject(t, e)), this.cachedPatterns.set(e, n)), i && (n.matrix = i), n;
  }

  shadingFill(t, e) {
    let a;
    if (!this.contentVisible) return;
    const i = this.ctx;
    this.save(t);
    const n = this._getPattern(t, e);
    i.fillStyle = n.getPattern(i, this, pn(i), Le.SHADING, t);
    const r = pn(i);
    if (r) {
      const {
        width: o,
        height: l,
      } = i.canvas; const
        c = _o.slice();
      tt.axialAlignedBoundingBox([0, 0, o, l], r, c);
      const [d, u, g, b] = c;
      this.ctx.fillRect(d, u, g - d, b - u);
    } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    (a = this.dependencyTracker) == null || a.resetBBox(t).recordFullPageBBox(t).recordDependencies(t, Mi.transform).recordDependencies(t, Mi.fill)
      .recordOperation(t), this.compose(this.current.getClippedPathBoundingBox()), this.restore(t);
  }

  beginInlineImage() {
    zt('Should not call beginInlineImage');
  }

  beginImageData() {
    zt('Should not call beginImageData');
  }

  paintFormXObjectBegin(t, e, i) {
    let n;
    if (this.contentVisible && (this.save(t), this.baseTransformStack.push(this.baseTransform), e && this.transform(t, ...e), this.baseTransform = Yt(this.ctx), i)) {
      tt.axialAlignedBoundingBox(i, this.baseTransform, this.current.minMax);
      const [r, a, o, l] = i; const
        c = new Path2D();
      c.rect(r, a, o - r, l - a), this.ctx.clip(c), (n = this.dependencyTracker) == null || n.recordClipBox(t, this.ctx, r, o, a, l), this.endPath(t);
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
    const n = Yt(i);
    if (e.matrix && i.transform(...e.matrix), !e.bbox) throw new Error('Bounding box is required.');
    let r = _o.slice();
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
    b.translate(-o, -l), b.transform(...n);
    let C = new Path2D();
    const [S, L, k, M] = e.bbox;
    if (C.rect(S, L, k - S, M - L), e.matrix) {
      const p = new Path2D();
      p.addPath(C, new DOMMatrix(e.matrix)), C = p;
    }
    b.clip(C), e.smask && this.smaskStack.push({
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
      n = this.groupStack.pop();
    if (this.ctx = n, this.ctx.imageSmoothingEnabled = !1, (r = this.dependencyTracker) == null || r.popBaseTransform(), e.smask) this.tempSMask = this.smaskStack.pop(), this.restore(t), this.dependencyTracker && this.ctx.restore();
    else {
      this.ctx.restore();
      const a = Yt(this.ctx);
      this.restore(t), this.ctx.save(), this.ctx.setTransform(...a);
      const o = _o.slice();
      tt.axialAlignedBoundingBox([0, 0, i.canvas.width, i.canvas.height], a, o), this.ctx.drawImage(i.canvas, 0, 0), this.ctx.restore(), this.compose(o);
    }
  }

  beginAnnotation(t, e, i, n, r, a) {
    if (A(this, un, bp).call(this), qd(this.ctx), this.ctx.save(), this.save(t), this.baseTransform && this.ctx.setTransform(...this.baseTransform), i) {
      const o = i[2] - i[0]; const
        l = i[3] - i[1];
      if (a && this.annotationCanvasMap) {
        n = n.slice(), n[4] -= i[0], n[5] -= i[1], i = i.slice(), i[0] = i[1] = 0, i[2] = o, i[3] = l, tt.singularValueDecompose2dScale(Yt(this.ctx), Ti);
        const {
          viewportScale: c,
        } = this; const d = Math.ceil(o * this.outputScaleX * c); const
          u = Math.ceil(l * this.outputScaleY * c);
        this.annotationCanvas = this.canvasFactory.create(d, u);
        const {
          canvas: g,
          context: b,
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(e, g), this.annotationCanvas.savedCtx = this.ctx, this.ctx = b, this.ctx.save(), this.ctx.setTransform(Ti[0], 0, 0, -Ti[1], 0, l * Ti[1]), qd(this.ctx);
      } else {
        qd(this.ctx), this.endPath(t);
        const c = new Path2D();
        c.rect(i[0], i[1], o, l), this.ctx.clip(c);
      }
    }
    this.current = new vm(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(t, ...n), this.transform(t, ...r);
  }

  endAnnotation(t) {
    this.annotationCanvas && (this.ctx.restore(), A(this, un, vp).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }

  paintImageMaskXObject(t, e) {
    let o;
    if (!this.contentVisible) return;
    const i = e.count;
    e = this.getObject(t, e.data, e), e.count = i;
    const n = this.ctx; const r = this._createMaskCanvas(t, e); const
      a = r.canvas;
    n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(a, r.offsetX, r.offsetY), (o = this.dependencyTracker) == null || o.resetBBox(t).recordBBox(t, this.ctx, r.offsetX, r.offsetX + a.width, r.offsetY, r.offsetY + a.height).recordOperation(t), n.restore(), this.compose();
  }

  paintImageMaskXObjectRepeat(t, e, i, n = 0, r = 0, a, o) {
    let u; let g; let
      b;
    if (!this.contentVisible) return;
    e = this.getObject(t, e.data, e);
    const l = this.ctx;
    l.save();
    const c = Yt(l);
    l.transform(i, n, r, a, 0, 0);
    const d = this._createMaskCanvas(t, e);
    l.setTransform(1, 0, 0, 1, d.offsetX - c[4], d.offsetY - c[5]), (u = this.dependencyTracker) == null || u.resetBBox(t);
    for (let C = 0, S = o.length; C < S; C += 2) {
      const L = tt.transform(c, [i, n, r, a, o[C], o[C + 1]]);
      l.drawImage(d.canvas, L[4], L[5]), (g = this.dependencyTracker) == null || g.recordBBox(t, this.ctx, L[4], L[4] + d.canvas.width, L[5], L[5] + d.canvas.height);
    }
    l.restore(), this.compose(), (b = this.dependencyTracker) == null || b.recordOperation(t);
  }

  paintImageMaskXObjectGroup(t, e) {
    let a; let o; let
      l;
    if (!this.contentVisible) return;
    const i = this.ctx; const n = this.current.fillColor; const
      r = this.current.patternFill;
    (a = this.dependencyTracker) == null || a.resetBBox(t).recordDependencies(t, Mi.transformAndFill);
    for (const c of e) {
      const {
        data: d,
        width: u,
        height: g,
        transform: b,
      } = c; const C = this.cachedCanvases.getCanvas('maskCanvas', u, g); const
        S = C.context;
      S.save();
      const L = this.getObject(t, d, c);
      Sm(S, L), S.globalCompositeOperation = 'source-in', S.fillStyle = r ? n.getPattern(S, this, pn(i), Le.FILL, t) : n, S.fillRect(0, 0, u, g), S.restore(), i.save(), i.transform(...b), i.scale(1, -1), Vd(i, C.canvas, 0, 0, u, g, 0, -1, 1, 1), (o = this.dependencyTracker) == null || o.recordBBox(t, i, 0, u, 0, g), i.restore();
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

  paintImageXObjectRepeat(t, e, i, n, r) {
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
        transform: [i, 0, 0, n, r[d], r[d + 1]],
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
      height: n,
    } = t; const r = this.cachedCanvases.getCanvas('inlineImage', i, n); const
      a = r.context;
    return a.filter = this.current.transferMaps, a.drawImage(e, 0, 0), a.filter = 'none', r.canvas;
  }

  paintInlineImageXObject(t, e) {
    let c;
    if (!this.contentVisible) return;
    const i = e.width; const n = e.height; const
      r = this.ctx;
    this.save(t);
    const {
      filter: a,
    } = r;
    a !== 'none' && a !== '' && (r.filter = 'none'), r.scale(1 / i, -1 / n);
    let o;
    if (e.bitmap) o = this.applyTransferMapsToBitmap(e);
    else if (typeof HTMLElement === 'function' && e instanceof HTMLElement || !e.data) o = e;
    else {
      const u = this.cachedCanvases.getCanvas('inlineImage', i, n).context;
      wm(u, e), o = this.applyTransferMapsToCanvas(u);
    }
    const l = this._scaleImage(o, pn(r));
    r.imageSmoothingEnabled = Am(Yt(r), e.interpolate), (c = this.dependencyTracker) == null || c.resetBBox(t).recordBBox(t, r, 0, i, -n, 0).recordDependencies(t, Mi.imageXObject).recordOperation(t), Vd(r, l.img, 0, 0, l.paintWidth, l.paintHeight, 0, -n, i, n), this.compose(), this.restore(t);
  }

  paintInlineImageXObjectGroup(t, e, i) {
    let a; let o; let
      l;
    if (!this.contentVisible) return;
    const n = this.ctx;
    let r;
    if (e.bitmap) r = e.bitmap;
    else {
      const c = e.width; const d = e.height; const
        g = this.cachedCanvases.getCanvas('inlineImage', c, d).context;
      wm(g, e), r = this.applyTransferMapsToCanvas(g);
    }
    (a = this.dependencyTracker) == null || a.resetBBox(t);
    for (const c of i) n.save(), n.transform(...c.transform), n.scale(1, -1), Vd(n, r, c.x, c.y, c.w, c.h, 0, -1, 1, 1), (o = this.dependencyTracker) == null || o.recordBBox(t, n, 0, 1, -1, 0), n.restore();
    (l = this.dependencyTracker) == null || l.recordOperation(t), this.compose();
  }

  paintSolidColorImageMask(t) {
    let e;
    this.contentVisible && ((e = this.dependencyTracker) == null || e.resetBBox(t).recordBBox(t, this.ctx, 0, 1, 0, 1).recordDependencies(t, Mi.fill).recordOperation(t), this.ctx.fillRect(0, 0, 1, 1), this.compose());
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
    let n;
    (n = this.dependencyTracker) == null || n.beginMarkedContent(t), e === 'OC' ? this.markedContentStack.push({
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
    const n = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(i);
    const r = this.ctx;
    this.pendingClip ? (n || (this.pendingClip === _m ? r.clip(e, 'evenodd') : r.clip(e)), this.pendingClip = null, (a = this.dependencyTracker) == null || a.bboxToClipBoxDropOperation(t).recordFutureForcedDependency('clipPath', t)) : (o = this.dependencyTracker) == null || o.recordOperation(t), this.current.startNewPathAndClipBox(this.current.clipBox);
  }

  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = Yt(this.ctx);
      if (t[1] === 0 && t[2] === 0) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      else {
        const e = Math.abs(t[0] * t[3] - t[2] * t[1]); const i = Math.hypot(t[0], t[2]); const
          n = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(i, n) / e;
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
          c: n,
          d: r,
        } = this.ctx.getTransform();
      let a; let
        o;
      if (i === 0 && n === 0) {
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
        const l = Math.abs(e * r - i * n); const c = Math.hypot(e, i); const
          d = Math.hypot(n, r);
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
        lineWidth: n,
      },
    } = this; const
      [r, a] = this.getScaleForStroking();
    if (r === a) {
      i.lineWidth = (n || 1) * r, i.stroke(t);
      return;
    }
    const o = i.getLineDash();
    e && i.save(), i.scale(r, a), If.a = 1 / r, If.d = 1 / a;
    const l = new Path2D();
    if (l.addPath(t, If), o.length > 0) {
      const c = Math.max(r, a);
      i.setLineDash(o.map((d) => d / c)), i.lineDashOffset /= c;
    }
    i.lineWidth = n || 1, i.stroke(l), e && i.restore();
  }

  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--) if (!this.markedContentStack[t].visible) return !1;
    return !0;
  }
};
un = new WeakSet(), bp = function () {
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
  const n = new Path2D();
  return n.addPath(t, new DOMMatrix(i).invertSelf().multiplySelf(e)), n;
};
const Po = Fg;
for (const h in sh) Po.prototype[h] !== void 0 && (Po.prototype[sh[h]] = Po.prototype[h]);
let sl; let rl; let xc; let al; let
  su;
const Eo = class Eo {
  constructor(t) {
    v(this, al);
    v(this, sl);
    v(this, rl);
    v(this, xc);
    m(this, sl, t), m(this, rl, new DataView(s(this, sl))), m(this, xc, new TextDecoder());
  }

  static write(t) {
    const e = new TextEncoder(); const
      i = {};
    let n = 0;
    for (const c of Eo.strings) {
      const d = e.encode(t[c]);
      i[c] = d, n += 4 + d.length;
    }
    const r = new ArrayBuffer(n); const a = new Uint8Array(r); const
      o = new DataView(r);
    let l = 0;
    for (const c of Eo.strings) {
      const d = i[c]; const
        u = d.length;
      o.setUint32(l, u), a.set(d, l + 4), l += 4 + u;
    }
    return _t(l === r.byteLength, 'CssFontInfo.write: Buffer overflow'), r;
  }

  get fontFamily() {
    return A(this, al, su).call(this, 0);
  }

  get fontWeight() {
    return A(this, al, su).call(this, 1);
  }

  get italicAngle() {
    return A(this, al, su).call(this, 2);
  }
};
sl = new WeakMap(), rl = new WeakMap(), xc = new WeakMap(), al = new WeakSet(), su = function (t) {
  _t(t < Eo.strings.length, 'Invalid string index');
  let e = 0;
  for (let n = 0; n < t; n++) e += s(this, rl).getUint32(e) + 4;
  const i = s(this, rl).getUint32(e);
  return s(this, xc).decode(new Uint8Array(s(this, sl), e + 4, i));
}, V(Eo, 'strings', ['fontFamily', 'fontWeight', 'italicAngle']);
const Ou = Eo;
let ar; let Pn; let Aa; let _a; let
  Th;
const Co = class Co {
  constructor(t) {
    v(this, _a);
    v(this, ar);
    v(this, Pn);
    v(this, Aa);
    m(this, ar, t), m(this, Pn, new DataView(s(this, ar))), m(this, Aa, new TextDecoder());
  }

  static write(t) {
    const e = new TextEncoder(); const
      i = {};
    let n = 0;
    for (const g of Co.strings) {
      const b = e.encode(t[g]);
      i[g] = b, n += 4 + b.length;
    }
    n += 4;
    let r; let a; let
      o = 1 + n;
    t.style && (r = e.encode(t.style.style), a = e.encode(t.style.weight), o += 4 + r.length + 4 + a.length);
    const l = new ArrayBuffer(o); const c = new Uint8Array(l); const
      d = new DataView(l);
    let u = 0;
    d.setUint8(u++, t.guessFallback ? 1 : 0), d.setUint32(u, 0), u += 4, n = 0;
    for (const g of Co.strings) {
      const b = i[g]; const
        C = b.length;
      n += 4 + C, d.setUint32(u, C), c.set(b, u + 4), u += 4 + C;
    }
    return d.setUint32(u - n - 4, n), t.style && (d.setUint32(u, r.length), c.set(r, u + 4), u += 4 + r.length, d.setUint32(u, a.length), c.set(a, u + 4), u += 4 + a.length), _t(u <= l.byteLength, 'SubstitionInfo.write: Buffer overflow'), l.transferToFixedLength(u);
  }

  get guessFallback() {
    return s(this, Pn).getUint8(0) !== 0;
  }

  get css() {
    return A(this, _a, Th).call(this, 0);
  }

  get loadedName() {
    return A(this, _a, Th).call(this, 1);
  }

  get baseFontName() {
    return A(this, _a, Th).call(this, 2);
  }

  get src() {
    return A(this, _a, Th).call(this, 3);
  }

  get style() {
    let t = 1;
    t += 4 + s(this, Pn).getUint32(t);
    const e = s(this, Pn).getUint32(t); const
      i = s(this, Aa).decode(new Uint8Array(s(this, ar), t + 4, e));
    t += 4 + e;
    const n = s(this, Pn).getUint32(t); const
      r = s(this, Aa).decode(new Uint8Array(s(this, ar), t + 4, n));
    return {
      style: i,
      weight: r,
    };
  }
};
ar = new WeakMap(), Pn = new WeakMap(), Aa = new WeakMap(), _a = new WeakSet(), Th = function (t) {
  _t(t < Co.strings.length, 'Invalid string index');
  let e = 5;
  for (let n = 0; n < t; n++) e += s(this, Pn).getUint32(e) + 4;
  const i = s(this, Pn).getUint32(e);
  return s(this, Aa).decode(new Uint8Array(s(this, ar), e + 4, i));
}, V(Co, 'strings', ['css', 'loadedName', 'baseFontName', 'src']);
const Iu = Co;
let ol; let ll; let hl; let cl; let ui; let kn; let Ec; let Dt; let ie; let qi; let ru; let
  Ph;
const mt = class mt {
  constructor({
    data: t,
    extra: e,
  }) {
    v(this, ie);
    v(this, kn);
    v(this, Ec);
    v(this, Dt);
    m(this, kn, t), m(this, Ec, new TextDecoder()), m(this, Dt, new DataView(s(this, kn))), e && Object.assign(this, e);
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
    let t = s(mt, ll);
    if (s(this, Dt).getUint8(t) === 0) return;
    t += 1;
    const i = [];
    for (let n = 0; n < 4; n++) i.push(s(this, Dt).getInt16(t, !0)), t += 2;
    return i;
  }

  get fontMatrix() {
    let t = s(mt, hl);
    if (s(this, Dt).getUint8(t) === 0) return;
    t += 1;
    const i = [];
    for (let n = 0; n < 6; n++) i.push(s(this, Dt).getFloat64(t, !0)), t += 8;
    return i;
  }

  get defaultVMetrics() {
    let t = s(mt, cl);
    if (s(this, Dt).getUint8(t) === 0) return;
    t += 1;
    const i = [];
    for (let n = 0; n < 3; n++) i.push(s(this, Dt).getInt16(t, !0)), t += 2;
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
    let t = s(mt, ui);
    const e = s(this, Dt).getUint32(t);
    t += 4 + e;
    const i = s(this, Dt).getUint32(t);
    t += 4 + i;
    const n = s(this, Dt).getUint32(t);
    t += 4 + n;
    const r = s(this, Dt).getUint32(t);
    if (r !== 0) return new Uint8Array(s(this, kn), t + 4, r);
  }

  clearData() {
    let t = s(mt, ui);
    const e = s(this, Dt).getUint32(t);
    t += 4 + e;
    const i = s(this, Dt).getUint32(t);
    t += 4 + i;
    const n = s(this, Dt).getUint32(t);
    t += 4 + n;
    const r = s(this, Dt).getUint32(t);
    new Uint8Array(s(this, kn), t + 4, r).fill(0), s(this, Dt).setUint32(t, 0);
  }

  get cssFontInfo() {
    let t = s(mt, ui);
    const e = s(this, Dt).getUint32(t);
    t += 4 + e;
    const i = s(this, Dt).getUint32(t);
    t += 4 + i;
    const n = s(this, Dt).getUint32(t);
    if (n === 0) return null;
    const r = new Uint8Array(n);
    return r.set(new Uint8Array(s(this, kn), t + 4, n)), new Ou(r.buffer);
  }

  get systemFontInfo() {
    let t = s(mt, ui);
    const e = s(this, Dt).getUint32(t);
    t += 4 + e;
    const i = s(this, Dt).getUint32(t);
    if (i === 0) return null;
    const n = new Uint8Array(i);
    return n.set(new Uint8Array(s(this, kn), t + 4, i)), new Iu(n.buffer);
  }

  static write(t) {
    const e = t.systemFontInfo ? Iu.write(t.systemFontInfo) : null; const i = t.cssFontInfo ? Ou.write(t.cssFontInfo) : null; const n = new TextEncoder(); const
      r = {};
    let a = 0;
    for (const S of mt.strings) r[S] = n.encode(t[S]), a += 4 + r[S].length;
    const o = s(mt, ui) + 4 + a + 4 + (e ? e.byteLength : 0) + 4 + (i ? i.byteLength : 0) + 4 + (t.data ? t.data.length : 0); const l = new ArrayBuffer(o); const c = new Uint8Array(l); const
      d = new DataView(l);
    let u = 0;
    const g = mt.bools.length;
    let b = 0; let
      C = 0;
    for (let S = 0; S < g; S++) {
      const L = t[mt.bools[S]];
      b |= (L === void 0 ? 0 : L ? 2 : 1) << C, C += 2, (C === 8 || S === g - 1) && (d.setUint8(u++, b), b = 0, C = 0);
    }
    _t(u === s(mt, ol), 'FontInfo.write: Boolean properties offset mismatch');
    for (const S of mt.numbers) d.setFloat64(u, t[S]), u += 8;
    if (_t(u === s(mt, ll), 'FontInfo.write: Number properties offset mismatch'), t.bbox) {
      d.setUint8(u++, 4);
      for (const S of t.bbox) d.setInt16(u, S, !0), u += 2;
    } else d.setUint8(u++, 0), u += 8;
    if (_t(u === s(mt, hl), 'FontInfo.write: BBox properties offset mismatch'), t.fontMatrix) {
      d.setUint8(u++, 6);
      for (const S of t.fontMatrix) d.setFloat64(u, S, !0), u += 8;
    } else d.setUint8(u++, 0), u += 48;
    if (_t(u === s(mt, cl), 'FontInfo.write: FontMatrix properties offset mismatch'), t.defaultVMetrics) {
      d.setUint8(u++, 1);
      for (const S of t.defaultVMetrics) d.setInt16(u, S, !0), u += 2;
    } else d.setUint8(u++, 0), u += 6;
    _t(u === s(mt, ui), 'FontInfo.write: DefaultVMetrics properties offset mismatch'), d.setUint32(s(mt, ui), 0), u += 4;
    for (const S of mt.strings) {
      const L = r[S]; const
        k = L.length;
      d.setUint32(u, k), c.set(L, u + 4), u += 4 + k;
    }
    if (d.setUint32(s(mt, ui), u - s(mt, ui) - 4), !e) d.setUint32(u, 0), u += 4;
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
ol = new WeakMap(), ll = new WeakMap(), hl = new WeakMap(), cl = new WeakMap(), ui = new WeakMap(), kn = new WeakMap(), Ec = new WeakMap(), Dt = new WeakMap(), ie = new WeakSet(), qi = function (t) {
  _t(t < mt.bools.length, 'Invalid boolean index');
  const e = Math.floor(t / 4); const i = t * 2 % 8; const
    n = s(this, Dt).getUint8(e) >> i & 3;
  return n === 0 ? void 0 : n === 2;
}, ru = function (t) {
  return _t(t < mt.numbers.length, 'Invalid number index'), s(this, Dt).getFloat64(s(mt, ol) + t * 8);
}, Ph = function (t) {
  _t(t < mt.strings.length, 'Invalid string index');
  let e = s(mt, ui) + 4;
  for (let r = 0; r < t; r++) e += s(this, Dt).getUint32(e) + 4;
  const i = s(this, Dt).getUint32(e); const
    n = new Uint8Array(i);
  return n.set(new Uint8Array(s(this, kn), e + 4, i)), s(this, Ec).decode(n);
}, V(mt, 'bools', ['black', 'bold', 'disableFontFace', 'fontExtraProperties', 'isInvalidPDFjsFont', 'isType3Font', 'italic', 'missingFile', 'remeasure', 'vertical']), V(mt, 'numbers', ['ascent', 'defaultWidth', 'descent']), V(mt, 'strings', ['fallbackName', 'loadedName', 'mimetype', 'name']), v(mt, ol, Math.ceil(mt.bools.length * 2 / 8)), v(mt, ll, s(mt, ol) + mt.numbers.length * 8), v(mt, hl, s(mt, ll) + 1 + 8), v(mt, cl, s(mt, hl) + 1 + 48), v(mt, ui, s(mt, cl) + 1 + 6);
const Sp = mt;
let Cc; let
  Tc;
class ln {
  static get workerPort() {
    return s(this, Cc);
  }

  static set workerPort(t) {
    if (!(typeof Worker < 'u' && t instanceof Worker) && t !== null) throw new Error('Invalid `workerPort` type.');
    m(this, Cc, t);
  }

  static get workerSrc() {
    return s(this, Tc);
  }

  static set workerSrc(t) {
    if (typeof t !== 'string') throw new Error('Invalid `workerSrc` type.');
    m(this, Tc, t);
  }
}
Cc = new WeakMap(), Tc = new WeakMap(), v(ln, Cc, null), v(ln, Tc, '');
let dl; let
  Pc;
class u0 {
  constructor({
    parsedData: t,
    rawData: e,
  }) {
    v(this, dl);
    v(this, Pc);
    m(this, dl, t), m(this, Pc, e);
  }

  getRaw() {
    return s(this, Pc);
  }

  get(t) {
    return s(this, dl).get(t) ?? null;
  }

  [Symbol.iterator]() {
    return s(this, dl).entries();
  }
}
dl = new WeakMap(), Pc = new WeakMap();
const wo = Symbol('INTERNAL');
let kc; let Rc; let Lc; let
  ul;
class f0 {
  constructor(t, {
    name: e,
    intent: i,
    usage: n,
    rbGroups: r,
  }) {
    v(this, kc, !1);
    v(this, Rc, !1);
    v(this, Lc, !1);
    v(this, ul, !0);
    m(this, kc, !!(t & Ci.DISPLAY)), m(this, Rc, !!(t & Ci.PRINT)), this.name = e, this.intent = i, this.usage = n, this.rbGroups = r;
  }

  get visible() {
    if (s(this, Lc)) return s(this, ul);
    if (!s(this, ul)) return !1;
    const {
      print: t,
      view: e,
    } = this.usage;
    return s(this, kc) ? (e == null ? void 0 : e.viewState) !== 'OFF' : s(this, Rc) ? (t == null ? void 0 : t.printState) !== 'OFF' : !0;
  }

  _setVisible(t, e, i = !1) {
    t !== wo && zt('Internal method `_setVisible` called.'), m(this, Lc, i), m(this, ul, e);
  }
}
kc = new WeakMap(), Rc = new WeakMap(), Lc = new WeakMap(), ul = new WeakMap();
let or; let Ot; let fl; let pl; let Mc; let
  Ap;
class p0 {
  constructor(t, e = Ci.DISPLAY) {
    v(this, Mc);
    v(this, or, null);
    v(this, Ot, /* @__PURE__ */ new Map());
    v(this, fl, null);
    v(this, pl, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, m(this, pl, t.order);
      for (const i of t.groups) s(this, Ot).set(i.id, new f0(e, i));
      if (t.baseState === 'OFF') for (const i of s(this, Ot).values()) i._setVisible(wo, !1);
      for (const i of t.on) s(this, Ot).get(i)._setVisible(wo, !0);
      for (const i of t.off) s(this, Ot).get(i)._setVisible(wo, !1);
      m(this, fl, this.getHash());
    }
  }

  isVisible(t) {
    if (s(this, Ot).size === 0) return !0;
    if (!t) return df('Optional content group not defined.'), !0;
    if (t.type === 'OCG') return s(this, Ot).has(t.id) ? s(this, Ot).get(t.id).visible : (pt(`Optional content group not found: ${t.id}`), !0);
    if (t.type === 'OCMD') {
      if (t.expression) return A(this, Mc, Ap).call(this, t.expression);
      if (!t.policy || t.policy === 'AnyOn') {
        for (const e of t.ids) {
          if (!s(this, Ot).has(e)) return pt(`Optional content group not found: ${e}`), !0;
          if (s(this, Ot).get(e).visible) return !0;
        }
        return !1;
      } if (t.policy === 'AllOn') {
        for (const e of t.ids) {
          if (!s(this, Ot).has(e)) return pt(`Optional content group not found: ${e}`), !0;
          if (!s(this, Ot).get(e).visible) return !1;
        }
        return !0;
      } if (t.policy === 'AnyOff') {
        for (const e of t.ids) {
          if (!s(this, Ot).has(e)) return pt(`Optional content group not found: ${e}`), !0;
          if (!s(this, Ot).get(e).visible) return !0;
        }
        return !1;
      } if (t.policy === 'AllOff') {
        for (const e of t.ids) {
          if (!s(this, Ot).has(e)) return pt(`Optional content group not found: ${e}`), !0;
          if (s(this, Ot).get(e).visible) return !1;
        }
        return !0;
      }
      return pt(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return pt(`Unknown group type ${t.type}.`), !0;
  }

  setVisibility(t, e = !0, i = !0) {
    let r;
    const n = s(this, Ot).get(t);
    if (!n) {
      pt(`Optional content group not found: ${t}`);
      return;
    }
    if (i && e && n.rbGroups.length) for (const a of n.rbGroups) for (const o of a) o !== t && ((r = s(this, Ot).get(o)) == null || r._setVisible(wo, !1, !0));
    n._setVisible(wo, !!e, !0), m(this, or, null);
  }

  setOCGState({
    state: t,
    preserveRB: e,
  }) {
    let i;
    for (const n of t) {
      switch (n) {
        case 'ON':
        case 'OFF':
        case 'Toggle':
          i = n;
          continue;
      }
      const r = s(this, Ot).get(n);
      if (r) {
        switch (i) {
          case 'ON':
            this.setVisibility(n, !0, e);
            break;
          case 'OFF':
            this.setVisibility(n, !1, e);
            break;
          case 'Toggle':
            this.setVisibility(n, !r.visible, e);
            break;
        }
      }
    }
    m(this, or, null);
  }

  get hasInitialVisibility() {
    return s(this, fl) === null || this.getHash() === s(this, fl);
  }

  getOrder() {
    return s(this, Ot).size ? s(this, pl) ? s(this, pl).slice() : [...s(this, Ot).keys()] : null;
  }

  getGroup(t) {
    return s(this, Ot).get(t) || null;
  }

  getHash() {
    if (s(this, or) !== null) return s(this, or);
    const t = new Ny();
    for (const [e, i] of s(this, Ot)) t.update(`${e}:${i.visible}`);
    return m(this, or, t.hexdigest());
  }

  [Symbol.iterator]() {
    return s(this, Ot).entries();
  }
}
or = new WeakMap(), Ot = new WeakMap(), fl = new WeakMap(), pl = new WeakMap(), Mc = new WeakSet(), Ap = function (t) {
  const e = t.length;
  if (e < 2) return !0;
  const i = t[0];
  for (let n = 1; n < e; n++) {
    const r = t[n];
    let a;
    if (Array.isArray(r)) a = A(this, Mc, Ap).call(this, r);
    else if (s(this, Ot).has(r)) a = s(this, Ot).get(r).visible;
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
class g0 {
  constructor(t, {
    disableRange: e = !1,
    disableStream: i = !1,
  }) {
    _t(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: n,
      initialData: r,
      progressiveDone: a,
      contentDispositionFilename: o,
    } = t;
    if (this._queuedChunks = [], this._progressiveDone = a, this._contentDispositionFilename = o, (r == null ? void 0 : r.length) > 0) {
      const l = r instanceof Uint8Array && r.byteLength === r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
      this._queuedChunks.push(l);
    }
    this._pdfDataRangeTransport = t, this._isStreamingSupported = !i, this._isRangeSupported = !e, this._contentLength = n, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener((l, c) => {
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
      const n = this._rangeReaders.some((r) => (r._begin !== t ? !1 : (r._enqueue(i), !0)));
      _t(n, '_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.');
    }
  }

  get _progressiveDataLength() {
    let t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }

  _onProgress(t) {
    let e; let i; let n; let
      r;
    t.total === void 0 ? (i = (e = this._rangeReaders[0]) == null ? void 0 : e.onProgress) == null || i.call(e, {
      loaded: t.loaded,
    }) : (r = (n = this._fullRequestReader) == null ? void 0 : n.onProgress) == null || r.call(n, {
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
    return this._queuedChunks = null, new m0(this, t, this._progressiveDone, this._contentDispositionFilename);
  }

  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) return null;
    const i = new y0(this, t, e);
    return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(i), i;
  }

  cancelAllRequests(t) {
    let e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeReaders.slice(0)) i.cancel(t);
    this._pdfDataRangeTransport.abort();
  }
}
class m0 {
  constructor(t, e, i = !1, n = null) {
    this._stream = t, this._done = i || !1, this._filename = ff(n) ? n : null, this._queuedChunks = e || [], this._loaded = 0;
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
class y0 {
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
function b0(h) {
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
  function n(d, u) {
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
    return t && /[\x80-\xff]/.test(d) && (d = n('utf-8', d), t && (d = n('iso-8859-1', d))), d;
  }
  function a(d) {
    const u = [];
    let g;
    const b = i('filename\\*((?!0\\d)\\d+)(\\*?)', 'ig');
    for (; (g = b.exec(d)) !== null;) {
      let [, S, L, k] = g;
      if (S = parseInt(S, 10), S in u) {
        if (S === 0) break;
        continue;
      }
      u[S] = [L, k];
    }
    const C = [];
    for (let S = 0; S < u.length && S in u; ++S) {
      let [L, k] = u[S];
      k = o(k), L && (k = unescape(k), S === 0 && (k = l(k))), C.push(k);
    }
    return C.join('');
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
      C = d.slice(u + 1).replace(/^[^']*'/, '');
    return n(g, C);
  }
  function c(d) {
    return !d.startsWith('=?') || /[\x00-\x19\x80-\xff]/.test(d) ? d : d.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, (u, g, b, C) => {
      if (b === 'q' || b === 'Q') { return C = C.replaceAll('_', ' '), C = C.replaceAll(/=([0-9a-fA-F]{2})/g, (S, L) => String.fromCharCode(parseInt(L, 16))), n(g, C); }
      try {
        C = atob(C);
      } catch {
      }
      return n(g, C);
    });
  }
  return '';
}
function Ky(h, t) {
  const e = new Headers();
  if (!h || !t || typeof t !== 'object') return e;
  for (const i in t) {
    const n = t[i];
    n !== void 0 && e.append(i, n);
  }
  return e;
}
function pf(h) {
  let t;
  return ((t = URL.parse(h)) == null ? void 0 : t.origin) ?? null;
}
function Jy({
  responseHeaders: h,
  isHttp: t,
  rangeChunkSize: e,
  disableRange: i,
}) {
  const n = {
    allowRangeRequests: !1,
    suggestedLength: void 0,
  };
  const r = parseInt(h.get('Content-Length'), 10);
  return !Number.isInteger(r) || (n.suggestedLength = r, r <= 2 * e) || i || !t || h.get('Accept-Ranges') !== 'bytes' || (h.get('Content-Encoding') || 'identity') !== 'identity' || (n.allowRangeRequests = !0), n;
}
function Qy(h) {
  const t = h.get('Content-Disposition');
  if (t) {
    let e = b0(t);
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
function Zy(h) {
  return h === 200 || h === 206;
}
function tb(h, t, e) {
  return {
    method: 'GET',
    headers: h,
    signal: e.signal,
    mode: 'cors',
    credentials: t ? 'include' : 'same-origin',
    redirect: 'follow',
  };
}
function eb(h) {
  return h instanceof Uint8Array ? h.buffer : h instanceof ArrayBuffer ? h : (pt(`getArrayBuffer - unexpected data format: ${h}`), new Uint8Array(h).buffer);
}
class v0 {
  constructor(t) {
    V(this, '_responseOrigin', null);
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = Ky(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }

  get _progressiveDataLength() {
    let t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }

  getFullReader() {
    return _t(!this._fullRequestReader, 'PDFFetchStream.getFullReader can only be called once.'), this._fullRequestReader = new w0(this), this._fullRequestReader;
  }

  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) return null;
    const i = new S0(this, t, e);
    return this._rangeRequestReaders.push(i), i;
  }

  cancelAllRequests(t) {
    let e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeRequestReaders.slice(0)) i.cancel(t);
  }
}
class w0 {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
    const i = new Headers(t.headers); const
      n = e.url;
    fetch(n, tb(i, this._withCredentials, this._abortController)).then((r) => {
      if (t._responseOrigin = pf(r.url), !Zy(r.status)) throw Dd(r.status, n);
      this._reader = r.body.getReader(), this._headersCapability.resolve();
      const a = r.headers; const
        {
          allowRangeRequests: o,
          suggestedLength: l,
        } = Jy({
          responseHeaders: a,
          isHttp: t.isHttp,
          rangeChunkSize: this._rangeChunkSize,
          disableRange: this._disableRange,
        });
      this._isRangeSupported = o, this._contentLength = l || this._contentLength, this._filename = Qy(a), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Os('Streaming is disabled.'));
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
      value: eb(t),
      done: !1,
    });
  }

  cancel(t) {
    let e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class S0 {
  constructor(t, e, i) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const n = t.source;
    this._withCredentials = n.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !n.disableStream, this._abortController = new AbortController();
    const r = new Headers(t.headers);
    r.append('Range', `bytes=${e}-${i - 1}`);
    const a = n.url;
    fetch(a, tb(r, this._withCredentials, this._abortController)).then((o) => {
      const l = pf(o.url);
      if (l !== t._responseOrigin) throw new Error(`Expected range response-origin "${l}" to match "${t._responseOrigin}".`);
      if (!Zy(o.status)) throw Dd(o.status, a);
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
      value: eb(t),
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
function A0(h) {
  const t = h.response;
  return typeof t !== 'string' ? t : kd(t).buffer;
}
class _0 {
  constructor({
    url: t,
    httpHeaders: e,
    withCredentials: i,
  }) {
    V(this, '_responseOrigin', null);
    this.url = t, this.isHttp = /^https?:/i.test(t), this.headers = Ky(this.isHttp, e), this.withCredentials = i || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }

  request(t) {
    const e = new XMLHttpRequest(); const i = this.currXhrId++; const
      n = this.pendingRequests[i] = {
        xhr: e,
      };
    e.open('GET', this.url), e.withCredentials = this.withCredentials;
    for (const [r, a] of this.headers) e.setRequestHeader(r, a);
    return this.isHttp && 'begin' in t && 'end' in t ? (e.setRequestHeader('Range', `bytes=${t.begin}-${t.end - 1}`), n.expectedStatus = Nf) : n.expectedStatus = Ff, e.responseType = 'arraybuffer', _t(t.onError, 'Expected `onError` callback to be provided.'), e.onerror = () => {
      t.onError(e.status);
    }, e.onreadystatechange = this.onStateChange.bind(this, i), e.onprogress = this.onProgress.bind(this, i), n.onHeadersReceived = t.onHeadersReceived, n.onDone = t.onDone, n.onError = t.onError, n.onProgress = t.onProgress, e.send(null), i;
  }

  onProgress(t, e) {
    let n;
    const i = this.pendingRequests[t];
    i && ((n = i.onProgress) == null || n.call(i, e));
  }

  onStateChange(t, e) {
    const i = this.pendingRequests[t];
    if (!i) return;
    const n = i.xhr;
    if (n.readyState >= 2 && i.onHeadersReceived && (i.onHeadersReceived(), delete i.onHeadersReceived), n.readyState !== 4 || !(t in this.pendingRequests)) return;
    if (delete this.pendingRequests[t], n.status === 0 && this.isHttp) {
      i.onError(n.status);
      return;
    }
    const r = n.status || Ff;
    if (!(r === Ff && i.expectedStatus === Nf) && r !== i.expectedStatus) {
      i.onError(n.status);
      return;
    }
    const o = A0(n);
    if (r === Nf) {
      const l = n.getResponseHeader('Content-Range'); const
        c = /bytes (\d+)-(\d+)\/(\d+)/.exec(l);
      c ? i.onDone({
        begin: parseInt(c[1], 10),
        chunk: o,
      }) : (pt('Missing or invalid "Content-Range" header.'), i.onError(0));
    } else {
      o ? i.onDone({
        begin: 0,
        chunk: o,
      }) : i.onError(n.status);
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
class x0 {
  constructor(t) {
    this._source = t, this._manager = new _0(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }

  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }

  getFullReader() {
    return _t(!this._fullRequestReader, 'PDFNetworkStream.getFullReader can only be called once.'), this._fullRequestReader = new E0(this._manager, this._source), this._fullRequestReader;
  }

  getRangeReader(t, e) {
    const i = new C0(this._manager, t, e);
    return i.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(i), i;
  }

  cancelAllRequests(t) {
    let e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeRequestReaders.slice(0)) i.cancel(t);
  }
}
class E0 {
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
    const i = e.getAllResponseHeaders(); const n = new Headers(i ? i.trimStart().replace(/[^\S ]+$/, '').split(/[\r\n]+/).map((o) => {
      const [l, ...c] = o.split(': ');
      return [l, c.join(': ')];
    }) : []); const
      {
        allowRangeRequests: r,
        suggestedLength: a,
      } = Jy({
        responseHeaders: n,
        isHttp: this._manager.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange,
      });
    r && (this._isRangeSupported = !0), this._contentLength = a || this._contentLength, this._filename = Qy(n), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
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
class C0 {
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
const T0 = /^[a-z][a-z0-9\-+.]+:/i;
function P0(h) {
  if (T0.test(h)) return new URL(h);
  const t = process.getBuiltinModule('url');
  return new URL(t.pathToFileURL(h));
}
class k0 {
  constructor(t) {
    this.source = t, this.url = P0(t.url), _t(this.url.protocol === 'file:', 'PDFNodeStream only supports file:// URLs.'), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }

  get _progressiveDataLength() {
    let t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }

  getFullReader() {
    return _t(!this._fullRequestReader, 'PDFNodeStream.getFullReader can only be called once.'), this._fullRequestReader = new R0(this), this._fullRequestReader;
  }

  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) return null;
    const i = new L0(this, t, e);
    return this._rangeRequestReaders.push(i), i;
  }

  cancelAllRequests(t) {
    let e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeRequestReaders.slice(0)) i.cancel(t);
  }
}
class R0 {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
    const i = process.getBuiltinModule('fs');
    i.promises.lstat(this._url).then((n) => {
      this._contentLength = n.size, this._setReadableStream(i.createReadStream(this._url)), this._headersCapability.resolve();
    }, (n) => {
      n.code === 'ENOENT' && (n = Dd(0, this._url.href)), this._storedError = n, this._headersCapability.reject(n);
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
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new Os('streaming is disabled')), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class L0 {
  constructor(t, e, i) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const n = t.source;
    this._isStreamingSupported = !n.disableStream;
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
let fi; let Dc; let
  _p;
class ib {
  constructor() {
    v(this, Dc);
    v(this, fi, /* @__PURE__ */ Object.create(null));
  }

  get(t, e = null) {
    if (e) {
      const n = A(this, Dc, _p).call(this, t);
      return n.promise.then(() => e(n.data)), null;
    }
    const i = s(this, fi)[t];
    if (!i || i.data === fh) throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return i.data;
  }

  has(t) {
    const e = s(this, fi)[t];
    return !!e && e.data !== fh;
  }

  delete(t) {
    const e = s(this, fi)[t];
    return !e || e.data === fh ? !1 : (delete s(this, fi)[t], !0);
  }

  resolve(t, e = null) {
    const i = A(this, Dc, _p).call(this, t);
    i.data = e, i.resolve();
  }

  clear() {
    let t;
    for (const e in s(this, fi)) {
      const {
        data: i,
      } = s(this, fi)[e];
      (t = i == null ? void 0 : i.bitmap) == null || t.close();
    }
    m(this, fi, /* @__PURE__ */ Object.create(null));
  }

  * [Symbol.iterator]() {
    for (const t in s(this, fi)) {
      const {
        data: e,
      } = s(this, fi)[t];
      e !== fh && (yield [t, e]);
    }
  }
}
fi = new WeakMap(), Dc = new WeakSet(), _p = function (t) {
  let e;
  return (e = s(this, fi))[t] || (e[t] = {
    ...Promise.withResolvers(),
    data: fh,
  });
};
const M0 = 1e5; const
  xm = 30;
let Nm; let lr; let ni; let Oc; let Ic; let xa; let gs; let Fc; let Nc; let Ea; let gl; let ml; let hr; let yl; let Bc; let bl; let Ca; let Hc; let jc; let ee; let vl; let Ta; let zc; let cr; let wl; let Ns; let nb; let sb; let xp; let ki; let au; let Ep; let rb; let
  ab;
const Wh = (ee = class {
  constructor({
    textContentSource: t,
    container: e,
    viewport: i,
  }) {
    v(this, Ns);
    v(this, lr, Promise.withResolvers());
    v(this, ni, null);
    v(this, Oc, !1);
    v(this, Ic, !!((Nm = globalThis.FontInspector) != null && Nm.enabled));
    v(this, xa, null);
    v(this, gs, null);
    v(this, Fc, 0);
    v(this, Nc, 0);
    v(this, Ea, null);
    v(this, gl, null);
    v(this, ml, 0);
    v(this, hr, 0);
    v(this, yl, /* @__PURE__ */ Object.create(null));
    v(this, Bc, []);
    v(this, bl, null);
    v(this, Ca, []);
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
    m(this, ni, m(this, gl, e)), m(this, hr, i.scale * dn.pixelRatio), m(this, ml, i.rotation), m(this, gs, {
      div: null,
      properties: null,
      ctx: null,
    });
    const {
      pageWidth: n,
      pageHeight: r,
      pageX: a,
      pageY: o,
    } = i.rawDims;
    m(this, jc, [1, 0, 0, -1, -a, o + r]), m(this, Nc, n), m(this, Fc, r), A(l = ee, ki, rb).call(l), Ir(e, i), s(this, lr).promise.finally(() => {
      s(ee, wl).delete(this), m(this, gs, null), m(this, yl, null);
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
      s(this, Ea).read().then(({
        value: e,
        done: i,
      }) => {
        if (i) {
          s(this, lr).resolve();
          return;
        }
        s(this, xa) ?? m(this, xa, e.lang), Object.assign(s(this, yl), e.styles), A(this, Ns, nb).call(this, e.items), t();
      }, s(this, lr).reject);
    };
    return m(this, Ea, s(this, bl).getReader()), s(ee, wl).add(this), t(), s(this, lr).promise;
  }

  update({
    viewport: t,
    onBefore: e = null,
  }) {
    let r;
    const i = t.scale * dn.pixelRatio; const
      n = t.rotation;
    if (n !== s(this, ml) && (e == null || e(), m(this, ml, n), Ir(s(this, gl), {
      rotation: n,
    })), i !== s(this, hr)) {
      e == null || e(), m(this, hr, i);
      const a = {
        div: null,
        properties: null,
        ctx: A(r = ee, ki, au).call(r, s(this, xa)),
      };
      for (const o of s(this, Ca)) a.properties = s(this, Hc).get(o), a.div = o, A(this, Ns, xp).call(this, a);
    }
  }

  cancel() {
    let e;
    const t = new Os('TextLayer task cancelled.');
    (e = s(this, Ea)) == null || e.cancel(t).catch(() => {
    }), m(this, Ea, null), s(this, lr).reject(t);
  }

  get textDivs() {
    return s(this, Ca);
  }

  get textContentItemsStr() {
    return s(this, Bc);
  }

  static cleanup() {
    if (!(s(this, wl).size > 0)) {
      s(this, vl).clear();
      for (const {
        canvas: t,
      } of s(this, Ta).values()) t.remove();
      s(this, Ta).clear();
    }
  }
}, lr = new WeakMap(), ni = new WeakMap(), Oc = new WeakMap(), Ic = new WeakMap(), xa = new WeakMap(), gs = new WeakMap(), Fc = new WeakMap(), Nc = new WeakMap(), Ea = new WeakMap(), gl = new WeakMap(), ml = new WeakMap(), hr = new WeakMap(), yl = new WeakMap(), Bc = new WeakMap(), bl = new WeakMap(), Ca = new WeakMap(), Hc = new WeakMap(), jc = new WeakMap(), vl = new WeakMap(), Ta = new WeakMap(), zc = new WeakMap(), cr = new WeakMap(), wl = new WeakMap(), Ns = new WeakSet(), nb = function (t) {
  let n; let
    r;
  if (s(this, Oc)) return;
  (r = s(this, gs)).ctx ?? (r.ctx = A(n = ee, ki, au).call(n, s(this, xa)));
  const e = s(this, Ca); const
    i = s(this, Bc);
  for (const a of t) {
    if (e.length > M0) {
      pt('Ignoring additional textDivs for performance reasons.'), m(this, Oc, !0);
      return;
    }
    if (a.str === void 0) {
      if (a.type === 'beginMarkedContentProps' || a.type === 'beginMarkedContent') {
        const o = s(this, ni);
        m(this, ni, document.createElement('span')), s(this, ni).classList.add('markedContent'), a.id && s(this, ni).setAttribute('id', `${a.id}`), o.append(s(this, ni));
      } else a.type === 'endMarkedContent' && m(this, ni, s(this, ni).parentNode);
      continue;
    }
    i.push(a.str), A(this, Ns, sb).call(this, a);
  }
}, sb = function (t) {
  let S;
  const e = document.createElement('span'); const
    i = {
      angle: 0,
      canvasWidth: 0,
      hasText: t.str !== '',
      hasEOL: t.hasEOL,
      fontSize: 0,
    };
  s(this, Ca).push(e);
  const n = tt.transform(s(this, jc), t.transform);
  let r = Math.atan2(n[1], n[0]);
  const a = s(this, yl)[t.fontName];
  a.vertical && (r += Math.PI / 2);
  let o = s(this, Ic) && a.fontSubstitution || a.fontFamily;
  o = ee.fontFamilyMap.get(o) || o;
  const l = Math.hypot(n[2], n[3]); const
    c = l * A(S = ee, ki, ab).call(S, o, a, s(this, xa));
  let d; let
    u;
  r === 0 ? (d = n[4], u = n[5] - c) : (d = n[4] + c * Math.sin(r), u = n[5] - c * Math.cos(r));
  const g = 'calc(var(--total-scale-factor) *';
  const b = e.style;
  s(this, ni) === s(this, gl) ? (b.left = `${(100 * d / s(this, Nc)).toFixed(2)}%`, b.top = `${(100 * u / s(this, Fc)).toFixed(2)}%`) : (b.left = `${g}${d.toFixed(2)}px)`, b.top = `${g}${u.toFixed(2)}px)`), b.fontSize = `${g}${(s(ee, cr) * l).toFixed(2)}px)`, b.fontFamily = o, i.fontSize = l, e.setAttribute('role', 'presentation'), e.textContent = t.str, e.dir = t.dir, s(this, Ic) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), r !== 0 && (i.angle = r * (180 / Math.PI));
  let C = !1;
  if (t.str.length > 1) C = !0;
  else if (t.str !== ' ' && t.transform[0] !== t.transform[3]) {
    const L = Math.abs(t.transform[0]); const
      k = Math.abs(t.transform[3]);
    L !== k && Math.max(L, k) / Math.min(L, k) > 1.5 && (C = !0);
  }
  if (C && (i.canvasWidth = a.vertical ? t.height : t.width), s(this, Hc).set(e, i), s(this, gs).div = e, s(this, gs).properties = i, A(this, Ns, xp).call(this, s(this, gs)), i.hasText && s(this, ni).append(e), i.hasEOL) {
    const L = document.createElement('br');
    L.setAttribute('role', 'presentation'), s(this, ni).append(L);
  }
}, xp = function (t) {
  let o;
  const {
    div: e,
    properties: i,
    ctx: n,
  } = t; const
    {
      style: r,
    } = e;
  let a = '';
  if (s(ee, cr) > 1 && (a = `scale(${1 / s(ee, cr)})`), i.canvasWidth !== 0 && i.hasText) {
    const {
      fontFamily: l,
    } = r; const
      {
        canvasWidth: c,
        fontSize: d,
      } = i;
    A(o = ee, ki, Ep).call(o, n, d * s(this, hr), l);
    const {
      width: u,
    } = n.measureText(e.textContent);
    u > 0 && (a = `scaleX(${c * s(this, hr) / u}) ${a}`);
  }
  i.angle !== 0 && (a = `rotate(${i.angle}deg) ${a}`), a.length > 0 && (r.transform = a);
}, ki = new WeakSet(), au = function (t = null) {
  let e = s(this, Ta).get(t || (t = ''));
  if (!e) {
    const i = document.createElement('canvas');
    i.className = 'hiddenCanvasElement', i.lang = t, document.body.append(i), e = i.getContext('2d', {
      alpha: !1,
      willReadFrequently: !0,
    }), s(this, Ta).set(t, e), s(this, zc).set(e, {
      size: 0,
      family: '',
    });
  }
  return e;
}, Ep = function (t, e, i) {
  const n = s(this, zc).get(t);
  e === n.size && i === n.family || (t.font = `${e}px ${i}`, n.size = e, n.family = i);
}, rb = function () {
  if (s(this, cr) !== null) return;
  const t = document.createElement('div');
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = '1px', t.style.position = 'absolute', t.textContent = 'X', document.body.append(t), m(this, cr, t.getBoundingClientRect().height), t.remove();
}, ab = function (t, e, i) {
  const n = s(this, vl).get(t);
  if (n) return n;
  const r = A(this, ki, au).call(this, i);
  r.canvas.width = r.canvas.height = xm, A(this, ki, Ep).call(this, r, xm, t);
  const a = r.measureText(''); const o = a.fontBoundingBoxAscent; const
    l = Math.abs(a.fontBoundingBoxDescent);
  r.canvas.width = r.canvas.height = 0;
  let c = 0.8;
  return o ? c = o / (o + l) : (_e.platform.isFirefox && pt('Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering.'), e.ascent ? c = e.ascent : e.descent && (c = 1 + e.descent)), s(this, vl).set(t, c), c;
}, v(ee, ki), v(ee, vl, /* @__PURE__ */ new Map()), v(ee, Ta, /* @__PURE__ */ new Map()), v(ee, zc, /* @__PURE__ */ new WeakMap()), v(ee, cr, null), v(ee, wl, /* @__PURE__ */ new Set()), ee);
const D0 = 100;
function Eg(h = {}) {
  typeof h === 'string' || h instanceof URL ? h = {
    url: h,
  } : (h instanceof ArrayBuffer || ArrayBuffer.isView(h)) && (h = {
    data: h,
  });
  const t = new Cp(); const {
    docId: e,
  } = t; const i = h.url ? zw(h.url) : null; const n = h.data ? $w(h.data) : null; const r = h.httpHeaders || null; const a = h.withCredentials === !0; const o = h.password ?? null; const l = h.range instanceof Cg ? h.range : null; const
    c = Number.isInteger(h.rangeChunkSize) && h.rangeChunkSize > 0 ? h.rangeChunkSize : 2 ** 16;
  let d = h.worker instanceof rh ? h.worker : null;
  const u = h.verbosity; const g = typeof h.docBaseUrl === 'string' && !Ld(h.docBaseUrl) ? h.docBaseUrl : null; const b = $d(h.cMapUrl); const C = h.cMapPacked !== !1; const S = h.CMapReaderFactory || (Xe ? Yw : cm); const L = $d(h.iccUrl); const k = $d(h.standardFontDataUrl); const M = h.StandardFontDataFactory || (Xe ? Kw : dm); const R = $d(h.wasmUrl); const p = h.WasmFactory || (Xe ? Jw : um); const f = h.stopAtErrors !== !0; const y = Number.isInteger(h.maxImageSize) && h.maxImageSize > -1 ? h.maxImageSize : -1; const _ = h.isEvalSupported !== !1; const T = typeof h.isOffscreenCanvasSupported === 'boolean' ? h.isOffscreenCanvasSupported : !Xe; const P = typeof h.isImageDecoderSupported === 'boolean' ? h.isImageDecoderSupported : !Xe && (_e.platform.isFirefox || !globalThis.chrome); const E = Number.isInteger(h.canvasMaxAreaInBytes) ? h.canvasMaxAreaInBytes : -1; const D = typeof h.disableFontFace === 'boolean' ? h.disableFontFace : Xe; const N = h.fontExtraProperties === !0; const I = h.enableXfa === !0; const B = h.ownerDocument || globalThis.document; const j = h.disableRange === !0; const z = h.disableStream === !0; const w = h.disableAutoFetch === !0; const K = h.pdfBug === !0; const F = h.CanvasFactory || (Xe ? Xw : Gw); const x = h.FilterFactory || (Xe ? qw : Vw); const O = h.enableHWA === !0; const H = h.useWasm !== !1; const U = l ? l.length : h.length ?? NaN; const $ = typeof h.useSystemFonts === 'boolean' ? h.useSystemFonts : !Xe && !D; const q = typeof h.useWorkerFetch === 'boolean' ? h.useWorkerFetch : !!(S === cm && M === dm && p === um && b && k && R && mh(b, document.baseURI) && mh(k, document.baseURI) && mh(R, document.baseURI)); const
    G = null;
  Aw(u);
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
      isCompressed: C,
    }),
    standardFontDataFactory: q ? null : new M({
      baseUrl: k,
    }),
    wasmFactory: q ? null : new p({
      baseUrl: R,
    }),
  };
  d || (d = rh.create({
    verbosity: u,
    port: ln.workerPort,
  }), t._worker = d);
  const ht = {
    docId: e,
    apiVersion: '5.4.296',
    data: n,
    password: o,
    disableAutoFetch: w,
    rangeChunkSize: c,
    length: U,
    docBaseUrl: g,
    enableXfa: I,
    evaluatorOptions: {
      maxImageSize: y,
      disableFontFace: D,
      ignoreErrors: f,
      isEvalSupported: _,
      isOffscreenCanvasSupported: T,
      isImageDecoderSupported: P,
      canvasMaxAreaInBytes: E,
      fontExtraProperties: N,
      useSystemFonts: $,
      useWasm: H,
      useWorkerFetch: q,
      cMapUrl: b,
      iccUrl: L,
      standardFontDataUrl: k,
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
    const dt = d.messageHandler.sendWithPromise('GetDocRequest', ht, n ? [n.buffer] : null);
    let ut;
    if (l) {
      ut = new g0(l, {
        disableRange: j,
        disableStream: z,
      });
    } else if (!n) {
      if (!i) throw new Error('getDocument - no `url` parameter provided.');
      const rt = mh(i) ? v0 : Xe ? k0 : x0;
      ut = new rt({
        url: i,
        length: U,
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
      const nt = new Ah(e, rt, d.port); const
        st = new F0(nt, t, ut, ct, W, O);
      t._transport = st, nt.send('Ready', null);
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
      n;
    this.destroyed = !0;
    try {
      (t = this._worker) != null && t.port && (this._worker._pendingDestroy = !0), await ((e = this._transport) == null ? void 0 : e.destroy());
    } catch (r) {
      throw (i = this._worker) != null && i.port && delete this._worker._pendingDestroy, r;
    }
    this._transport = null, (n = this._worker) == null || n.destroy(), this._worker = null;
  }

  async getData() {
    return this._transport.getData();
  }
};
Ju = new WeakMap(), v(Qu, Ju, 0);
let Cp = Qu;
let Pa; let $c; let Uc; let Wc; let Gc; let
  Bm;
let Cg = (Bm = class {
  constructor(t, e, i = !1, n = null) {
    v(this, Pa, Promise.withResolvers());
    v(this, $c, []);
    v(this, Uc, []);
    v(this, Wc, []);
    v(this, Gc, []);
    this.length = t, this.initialData = e, this.progressiveDone = i, this.contentDispositionFilename = n;
  }

  addRangeListener(t) {
    s(this, Gc).push(t);
  }

  addProgressListener(t) {
    s(this, Wc).push(t);
  }

  addProgressiveReadListener(t) {
    s(this, Uc).push(t);
  }

  addProgressiveDoneListener(t) {
    s(this, $c).push(t);
  }

  onDataRange(t, e) {
    for (const i of s(this, Gc)) i(t, e);
  }

  onDataProgress(t, e) {
    s(this, Pa).promise.then(() => {
      for (const i of s(this, Wc)) i(t, e);
    });
  }

  onDataProgressiveRead(t) {
    s(this, Pa).promise.then(() => {
      for (const e of s(this, Uc)) e(t);
    });
  }

  onDataProgressiveDone() {
    s(this, Pa).promise.then(() => {
      for (const t of s(this, $c)) t();
    });
  }

  transportReady() {
    s(this, Pa).resolve();
  }

  requestDataRange(t, e) {
    zt('Abstract method PDFDataRangeTransport.requestDataRange');
  }

  abort() {
  }
}, Pa = new WeakMap(), $c = new WeakMap(), Uc = new WeakMap(), Wc = new WeakMap(), Gc = new WeakMap(), Bm);
class O0 {
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
let ms; let ka; let
  kh;
class I0 {
  constructor(t, e, i, n = !1) {
    v(this, ka);
    v(this, ms, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = i, this._stats = n ? new nm() : null, this._pdfBug = n, this.commonObjs = i.commonObjs, this.objs = new ib(), this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1, this.recordedBBoxes = null;
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
    offsetY: n = 0,
    dontFlip: r = !1,
  } = {}) {
    return new Rd({
      viewBox: this.view,
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: i,
      offsetY: n,
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
    intent: n = 'display',
    annotationMode: r = jn.ENABLE,
    transform: a = null,
    background: o = null,
    optionalContentConfigPromise: l = null,
    annotationCanvasMap: c = null,
    pageColors: d = null,
    printAnnotationStorage: u = null,
    isEditing: g = !1,
    recordOperations: b = !1,
    operationsFilter: C = null,
  }) {
    let P; let E; let
      D;
    (P = this._stats) == null || P.time('Overall');
    const S = this._transport.getRenderingIntent(n, r, u, g); const
      {
        renderingIntent: L,
        cacheKey: k,
      } = S;
    m(this, ms, !1), l || (l = this._transport.getOptionalContentConfig(L));
    let M = this._intentStates.get(k);
    M || (M = /* @__PURE__ */ Object.create(null), this._intentStates.set(k, M)), M.streamReaderCancelTimeout && (clearTimeout(M.streamReaderCancelTimeout), M.streamReaderCancelTimeout = null);
    const R = !!(L & Ci.PRINT);
    M.displayReadyCapability || (M.displayReadyCapability = Promise.withResolvers(), M.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null,
    }, (E = this._stats) == null || E.time('Page Request'), this._pumpOperatorList(S));
    const p = !!(this._pdfBug && ((D = globalThis.StepperManager) != null && D.enabled)); const f = !this.recordedBBoxes && (b || p); const y = (N) => {
      let I; let
        B;
      if (M.renderTasks.delete(_), f) {
        const j = (I = _.gfx) == null ? void 0 : I.dependencyTracker.take();
        j && (_.stepper && _.stepper.setOperatorBBoxes(j, _.gfx.dependencyTracker.takeDebugMetadata()), b && (this.recordedBBoxes = j));
      }
      R && m(this, ms, !0), A(this, ka, kh).call(this), N ? (_.capability.reject(N), this._abortOperatorList({
        intentState: M,
        reason: N instanceof Error ? N : new Error(N),
      })) : _.capability.resolve(), this._stats && (this._stats.timeEnd('Rendering'), this._stats.timeEnd('Overall'), (B = globalThis.Stats) != null && B.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }; const
      _ = new Tp({
        callback: y,
        params: {
          canvas: e,
          canvasContext: t,
          dependencyTracker: f ? new Zw(e, M.operatorList.length, p) : null,
          viewport: i,
          transform: a,
          background: o,
        },
        objs: this.objs,
        commonObjs: this.commonObjs,
        annotationCanvasMap: c,
        operatorList: M.operatorList,
        pageIndex: this._pageIndex,
        canvasFactory: this._transport.canvasFactory,
        filterFactory: this._transport.filterFactory,
        useRequestAnimationFrame: !R,
        pdfBug: this._pdfBug,
        pageColors: d,
        enableHWA: this._transport.enableHWA,
        operationsFilter: C,
      });
    (M.renderTasks || (M.renderTasks = /* @__PURE__ */ new Set())).add(_);
    const T = _.task;
    return Promise.all([M.displayReadyCapability.promise, l]).then(([N, I]) => {
      let B;
      if (this.destroyed) {
        y();
        return;
      }
      if ((B = this._stats) == null || B.time('Rendering'), !(I.renderingIntent & L)) throw new Error('Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.');
      _.initializeGraphics({
        transparency: N,
        optionalContentConfig: I,
      }), _.operatorListChanged();
    }).catch(y), T;
  }

  getOperatorList({
    intent: t = 'display',
    annotationMode: e = jn.ENABLE,
    printAnnotationStorage: i = null,
    isEditing: n = !1,
  } = {}) {
    let c;
    function r() {
      o.operatorList.lastChunk && (o.opListReadCapability.resolve(o.operatorList), o.renderTasks.delete(l));
    }
    const a = this._transport.getRenderingIntent(t, e, i, n, !0);
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
      size(n) {
        return n.items.length;
      },
    });
  }

  getTextContent(t = {}) {
    if (this._transport._htmlForXfa) return this.getXfa().then((i) => zh.textContent(i));
    const e = this.streamTextContent(t);
    return new Promise((i, n) => {
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
        }, n);
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
    return this.objs.clear(), m(this, ms, !1), Promise.all(t);
  }

  cleanup(t = !1) {
    m(this, ms, !0);
    const e = A(this, ka, kh).call(this);
    return t && e && this._stats && (this._stats = new nm()), e;
  }

  _startRenderPage(t, e) {
    let n; let
      r;
    const i = this._intentStates.get(e);
    i && ((n = this._stats) == null || n.timeEnd('Page Request'), (r = i.displayReadyCapability) == null || r.resolve(t));
  }

  _renderPageChunk(t, e) {
    for (let i = 0, n = t.length; i < n; i++) e.operatorList.fnArray.push(t.fnArray[i]), e.operatorList.argsArray.push(t.argsArray[i]);
    e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
    for (const i of e.renderTasks) i.operatorListChanged();
    t.lastChunk && A(this, ka, kh).call(this);
  }

  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: e,
    annotationStorageSerializable: i,
    modifiedIds: n,
  }) {
    const {
      map: r,
      transfer: a,
    } = i; const l = this._transport.messageHandler.sendWithStream('GetOperatorList', {
      pageIndex: this._pageIndex,
      intent: t,
      cacheKey: e,
      annotationStorage: r,
      modifiedIds: n,
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
            A(this, ka, kh).call(this);
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
          let n = D0;
          e.extraDelay > 0 && e.extraDelay < 1e3 && (n += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
            t.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: t,
              reason: e,
              force: !0,
            });
          }, n);
          return;
        }
      }
      if (t.streamReader.cancel(new Os(e.message)).catch(() => {
      }), t.streamReader = null, !this._transport.destroyed) {
        for (const [n, r] of this._intentStates) {
          if (r === t) {
            this._intentStates.delete(n);
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
ms = new WeakMap(), ka = new WeakSet(), kh = function () {
  if (!s(this, ms) || this.destroyed) return !1;
  for (const {
    renderTasks: t,
    operatorList: e,
  } of this._intentStates.values()) if (t.size > 0 || !e.lastChunk) return !1;
  return this._intentStates.clear(), this.objs.clear(), m(this, ms, !1), !0;
};
let dr; let tn; let ys; let Ra; let Zu; let La; let Ma; let Ye; let ou; let ob; let lb; let Rh; let Sl; let
  lu;
const Gt = class Gt {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: i = _w(),
  } = {}) {
    v(this, Ye);
    v(this, dr, Promise.withResolvers());
    v(this, tn, null);
    v(this, ys, null);
    v(this, Ra, null);
    if (this.name = t, this.destroyed = !1, this.verbosity = i, e) {
      if (s(Gt, Ma).has(e)) throw new Error('Cannot use more than one PDFWorker per port.');
      s(Gt, Ma).set(e, this), A(this, Ye, ob).call(this, e);
    } else A(this, Ye, lb).call(this);
  }

  get promise() {
    return s(this, dr).promise;
  }

  get port() {
    return s(this, ys);
  }

  get messageHandler() {
    return s(this, tn);
  }

  destroy() {
    let t; let
      e;
    this.destroyed = !0, (t = s(this, Ra)) == null || t.terminate(), m(this, Ra, null), s(Gt, Ma).delete(s(this, ys)), m(this, ys, null), (e = s(this, tn)) == null || e.destroy(), m(this, tn, null);
  }

  static create(t) {
    const e = s(this, Ma).get(t == null ? void 0 : t.port);
    if (e) {
      if (e._pendingDestroy) throw new Error('PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.');
      return e;
    }
    return new Gt(t);
  }

  static get workerSrc() {
    if (ln.workerSrc) return ln.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }

  static get _setupFakeWorkerGlobal() {
    return yt(this, '_setupFakeWorkerGlobal', (async () => (s(this, Sl, lu) ? s(this, Sl, lu) : (await import(
      /* webpackIgnore: true */
      /* @vite-ignore */
      this.workerSrc
    )).WorkerMessageHandler))());
  }
};
dr = new WeakMap(), tn = new WeakMap(), ys = new WeakMap(), Ra = new WeakMap(), Zu = new WeakMap(), La = new WeakMap(), Ma = new WeakMap(), Ye = new WeakSet(), ou = function () {
  s(this, dr).resolve(), s(this, tn).send('configure', {
    verbosity: this.verbosity,
  });
}, ob = function (t) {
  m(this, ys, t), m(this, tn, new Ah('main', 'worker', t)), s(this, tn).on('ready', () => {
  }), A(this, Ye, ou).call(this);
}, lb = function () {
  if (s(Gt, La) || s(Gt, Sl, lu)) {
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
    }); const i = new Ah('main', 'worker', e); const n = () => {
      r.abort(), i.destroy(), e.terminate(), this.destroyed ? s(this, dr).reject(new Error('Worker was destroyed')) : A(this, Ye, Rh).call(this);
    }; const
      r = new AbortController();
    e.addEventListener('error', () => {
      s(this, Ra) || n();
    }, {
      signal: r.signal,
    }), i.on('test', (o) => {
      if (r.abort(), this.destroyed || !o) {
        n();
        return;
      }
      m(this, tn, i), m(this, ys, e), m(this, Ra, e), A(this, Ye, ou).call(this);
    }), i.on('ready', (o) => {
      if (r.abort(), this.destroyed) {
        n();
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
  s(Gt, La) || (pt('Setting up fake worker.'), m(Gt, La, !0)), Gt._setupFakeWorkerGlobal.then((t) => {
    if (this.destroyed) {
      s(this, dr).reject(new Error('Worker was destroyed'));
      return;
    }
    const e = new Ww();
    m(this, ys, e);
    const i = `fake${de(Gt, Zu)._++}`; const
      n = new Ah(`${i}_worker`, i, e);
    t.setup(n, e), m(this, tn, new Ah(i, `${i}_worker`, e)), A(this, Ye, ou).call(this);
  }).catch((t) => {
    s(this, dr).reject(new Error(`Setting up fake worker failed: "${t.message}".`));
  });
}, Sl = new WeakSet(), lu = function () {
  let t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, v(Gt, Sl), v(Gt, Zu, 0), v(Gt, La, !1), v(Gt, Ma, /* @__PURE__ */ new WeakMap()), Xe && (m(Gt, La, !0), ln.workerSrc || (ln.workerSrc = './pdf.worker.mjs')), Gt._isSameOrigin = (t, e) => {
  const i = URL.parse(t);
  if (!(i != null && i.origin) || i.origin === 'null') return !1;
  const n = new URL(e, i);
  return i.origin === n.origin;
}, Gt._createCDNWrapper = (t) => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], {
    type: 'text/javascript',
  }));
}, Gt.fromPort = (t) => {
  if (Mw('`PDFWorker.fromPort` - please use `PDFWorker.create` instead.'), !(t != null && t.port)) throw new Error('PDFWorker.fromPort - invalid method signature.');
  return Gt.create(t);
};
let rh = Gt;
let bs; let Rn; let Al; let _l; let vs; let Da; let
  Lh;
class F0 {
  constructor(t, e, i, n, r, a) {
    v(this, Da);
    v(this, bs, /* @__PURE__ */ new Map());
    v(this, Rn, /* @__PURE__ */ new Map());
    v(this, Al, /* @__PURE__ */ new Map());
    v(this, _l, /* @__PURE__ */ new Map());
    v(this, vs, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new ib(), this.fontLoader = new Hw({
      ownerDocument: n.ownerDocument,
      styleElement: n.styleElement,
    }), this.loadingParams = n.loadingParams, this._params = n, this.canvasFactory = r.canvasFactory, this.filterFactory = r.filterFactory, this.cMapReaderFactory = r.cMapReaderFactory, this.standardFontDataFactory = r.standardFontDataFactory, this.wasmFactory = r.wasmFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = i, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.enableHWA = a, this.setupMessageHandler();
  }

  get annotationStorage() {
    return yt(this, 'annotationStorage', new Ag());
  }

  getRenderingIntent(t, e = jn.ENABLE, i = null, n = !1, r = !1) {
    let a = Ci.DISPLAY; let
      o = cp;
    switch (t) {
      case 'any':
        a = Ci.ANY;
        break;
      case 'display':
        break;
      case 'print':
        a = Ci.PRINT;
        break;
      default:
        pt(`getRenderingIntent - invalid intent: ${t}`);
    }
    const l = a & Ci.PRINT && i instanceof Hy ? i : this.annotationStorage;
    switch (e) {
      case jn.DISABLE:
        a += Ci.ANNOTATIONS_DISABLE;
        break;
      case jn.ENABLE:
        break;
      case jn.ENABLE_FORMS:
        a += Ci.ANNOTATIONS_FORMS;
        break;
      case jn.ENABLE_STORAGE:
        a += Ci.ANNOTATIONS_STORAGE, o = l.serializable;
        break;
      default:
        pt(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    n && (a += Ci.IS_EDITING), r && (a += Ci.OPLIST);
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
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (i = s(this, vs)) == null || i.reject(new Error('Worker was destroyed during onPassword callback'));
    const t = [];
    for (const n of s(this, Rn).values()) t.push(n._destroy());
    s(this, Rn).clear(), s(this, Al).clear(), s(this, _l).clear(), this.hasOwnProperty('annotationStorage') && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise('Terminate', null);
    return t.push(e), Promise.all(t).then(() => {
      let n; let
        r;
      this.commonObjs.clear(), this.fontLoader.clear(), s(this, bs).clear(), this.filterFactory.destroy(), Wh.cleanup(), (n = this._networkStream) == null || n.cancelAllRequests(new Os('Worker was terminated.')), (r = this.messageHandler) == null || r.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }

  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e,
    } = this;
    t.on('GetReader', (i, n) => {
      _t(this._networkStream, 'GetReader - no `IPDFStream` instance available.'), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (r) => {
        this._lastProgress = {
          loaded: r.loaded,
          total: r.total,
        };
      }, n.onPull = () => {
        this._fullReader.read().then(({
          value: r,
          done: a,
        }) => {
          if (a) {
            n.close();
            return;
          }
          _t(r instanceof ArrayBuffer, 'GetReader - expected an ArrayBuffer.'), n.enqueue(new Uint8Array(r), 1, [r]);
        }).catch((r) => {
          n.error(r);
        });
      }, n.onCancel = (r) => {
        this._fullReader.cancel(r), n.ready.catch((a) => {
          if (!this.destroyed) throw a;
        });
      };
    }), t.on('ReaderHeadersReady', async (i) => {
      let o;
      await this._fullReader.headersReady;
      const {
        isStreamingSupported: n,
        isRangeSupported: r,
        contentLength: a,
      } = this._fullReader;
      return (!n || !r) && (this._lastProgress && ((o = e.onProgress) == null || o.call(e, this._lastProgress)), this._fullReader.onProgress = (l) => {
        let c;
        (c = e.onProgress) == null || c.call(e, {
          loaded: l.loaded,
          total: l.total,
        });
      }), {
        isStreamingSupported: n,
        isRangeSupported: r,
        contentLength: a,
      };
    }), t.on('GetRangeReader', (i, n) => {
      _t(this._networkStream, 'GetRangeReader - no `IPDFStream` instance available.');
      const r = this._networkStream.getRangeReader(i.begin, i.end);
      if (!r) {
        n.close();
        return;
      }
      n.onPull = () => {
        r.read().then(({
          value: a,
          done: o,
        }) => {
          if (o) {
            n.close();
            return;
          }
          _t(a instanceof ArrayBuffer, 'GetRangeReader - expected an ArrayBuffer.'), n.enqueue(new Uint8Array(a), 1, [a]);
        }).catch((a) => {
          n.error(a);
        });
      }, n.onCancel = (a) => {
        r.cancel(a), n.ready.catch((o) => {
          if (!this.destroyed) throw o;
        });
      };
    }), t.on('GetDoc', ({
      pdfInfo: i,
    }) => {
      this._numPages = i.numPages, this._htmlForXfa = i.htmlForXfa, delete i.htmlForXfa, e._capability.resolve(new O0(i, this));
    }), t.on('DocException', (i) => {
      e._capability.reject(Je(i));
    }), t.on('PasswordRequest', (i) => {
      m(this, vs, Promise.withResolvers());
      try {
        if (!e.onPassword) throw Je(i);
        const n = (r) => {
          r instanceof Error ? s(this, vs).reject(r) : s(this, vs).resolve({
            password: r,
          });
        };
        e.onPassword(n, i.code);
      } catch (n) {
        s(this, vs).reject(n);
      }
      return s(this, vs).promise;
    }), t.on('DataLoaded', (i) => {
      let n;
      (n = e.onProgress) == null || n.call(e, {
        loaded: i.length,
        total: i.length,
      }), this.downloadInfoCapability.resolve(i);
    }), t.on('StartRenderPage', (i) => {
      if (this.destroyed) return;
      s(this, Rn).get(i.pageIndex)._startRenderPage(i.transparency, i.cacheKey);
    }), t.on('commonobj', ([i, n, r]) => {
      let a;
      if (this.destroyed || this.commonObjs.has(i)) return null;
      switch (n) {
        case 'Font':
          if ('error' in r) {
            const u = r.error;
            pt(`Error during font loading: ${u}`), this.commonObjs.resolve(i, u);
            break;
          }
          const o = new Sp(r); const l = this._params.pdfBug && ((a = globalThis.FontInspector) != null && a.enabled) ? (u, g) => globalThis.FontInspector.fontAdded(u, g) : null; const
            c = new jw(o, l, r.extra, r.charProcOperatorList);
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
          for (const u of s(this, Rn).values()) for (const [, g] of u.objs) if ((g == null ? void 0 : g.ref) === d) return g.dataLen ? (this.commonObjs.resolve(i, structuredClone(g)), g.dataLen) : null;
          break;
        case 'FontPath':
        case 'Image':
        case 'Pattern':
          this.commonObjs.resolve(i, r);
          break;
        default:
          throw new Error(`Got unknown common object type ${n}`);
      }
      return null;
    }), t.on('obj', ([i, n, r, a]) => {
      let l;
      if (this.destroyed) return;
      const o = s(this, Rn).get(n);
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
      let n;
      this.destroyed || (n = e.onProgress) == null || n.call(e, {
        loaded: i.loaded,
        total: i.total,
      });
    }), t.on('FetchBinaryData', async (i) => {
      if (this.destroyed) throw new Error('Worker was destroyed.');
      const n = this[i.type];
      if (!n) throw new Error(`${i.type} not initialized, see the \`useWorkerFetch\` parameter.`);
      return n.fetch(i);
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
      i = s(this, Al).get(e);
    if (i) return i;
    const n = this.messageHandler.sendWithPromise('GetPage', {
      pageIndex: e,
    }).then((r) => {
      if (this.destroyed) throw new Error('Transport destroyed');
      r.refStr && s(this, _l).set(r.refStr, t);
      const a = new I0(e, r, this, this._params.pdfBug);
      return s(this, Rn).set(e, a), a;
    });
    return s(this, Al).set(e, n), n;
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
    return A(this, Da, Lh).call(this, 'GetFieldObjects');
  }

  hasJSActions() {
    return A(this, Da, Lh).call(this, 'HasJSActions');
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
    return A(this, Da, Lh).call(this, 'GetDocJSActions');
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
    return A(this, Da, Lh).call(this, 'GetOptionalContentConfig').then((e) => new p0(e, t));
  }

  getPermissions() {
    return this.messageHandler.sendWithPromise('GetPermissions', null);
  }

  getMetadata() {
    const t = 'GetMetadata';
    const e = s(this, bs).get(t);
    if (e) return e;
    const i = this.messageHandler.sendWithPromise(t, null).then((n) => {
      let r; let
        a;
      return {
        info: n[0],
        metadata: n[1] ? new u0(n[1]) : null,
        contentDispositionFilename: ((r = this._fullReader) == null ? void 0 : r.filename) ?? null,
        contentLength: ((a = this._fullReader) == null ? void 0 : a.contentLength) ?? null,
      };
    });
    return s(this, bs).set(t, i), i;
  }

  getMarkInfo() {
    return this.messageHandler.sendWithPromise('GetMarkInfo', null);
  }

  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise('Cleanup', null);
      for (const e of s(this, Rn).values()) if (!e.cleanup()) throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), s(this, bs).clear(), this.filterFactory.destroy(!0), Wh.cleanup();
    }
  }

  cachedPageNumber(t) {
    if (!dp(t)) return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return s(this, _l).get(e) ?? null;
  }
}
bs = new WeakMap(), Rn = new WeakMap(), Al = new WeakMap(), _l = new WeakMap(), vs = new WeakMap(), Da = new WeakSet(), Lh = function (t, e = null) {
  const i = s(this, bs).get(t);
  if (i) return i;
  const n = this.messageHandler.sendWithPromise(t, e);
  return s(this, bs).set(t, n), n;
};
let ur;
class N0 {
  constructor(t) {
    v(this, ur, null);
    V(this, 'onContinue', null);
    V(this, 'onError', null);
    m(this, ur, t);
  }

  get promise() {
    return s(this, ur).capability.promise;
  }

  cancel(t = 0) {
    s(this, ur).cancel(null, t);
  }

  get separateAnnots() {
    const {
      separateAnnots: t,
    } = s(this, ur).operatorList;
    if (!t) return !1;
    const {
      annotationCanvasMap: e,
    } = s(this, ur);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
ur = new WeakMap();
let fr; let
  Oa;
const Xr = class Xr {
  constructor({
    callback: t,
    params: e,
    objs: i,
    commonObjs: n,
    annotationCanvasMap: r,
    operatorList: a,
    pageIndex: o,
    canvasFactory: l,
    filterFactory: c,
    useRequestAnimationFrame: d = !1,
    pdfBug: u = !1,
    pageColors: g = null,
    enableHWA: b = !1,
    operationsFilter: C = null,
  }) {
    v(this, fr, null);
    this.callback = t, this.params = e, this.objs = i, this.commonObjs = n, this.annotationCanvasMap = r, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = l, this.filterFactory = c, this._pdfBug = u, this.pageColors = g, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = d === !0 && typeof window < 'u', this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new N0(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvas, this._canvasContext = e.canvas ? null : e.canvasContext, this._enableHWA = b, this._dependencyTracker = e.dependencyTracker, this._operationsFilter = C;
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
      if (s(Xr, Oa).has(this._canvas)) throw new Error('Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.');
      s(Xr, Oa).add(this._canvas);
    }
    this._pdfBug && ((l = globalThis.StepperManager) != null && l.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      viewport: i,
      transform: n,
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
      transform: n,
      viewport: i,
      transparency: t,
      background: r,
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (c = this.graphicsReadyCallback) == null || c.call(this);
  }

  cancel(t = null, e = 0) {
    let i; let n; let
      r;
    this.running = !1, this.cancelled = !0, (i = this.gfx) == null || i.endDrawing(), s(this, fr) && (window.cancelAnimationFrame(s(this, fr)), m(this, fr, null)), s(Xr, Oa).delete(this._canvas), t || (t = new uf(`Rendering cancelled, page ${this._pageIndex + 1}`, e)), this.callback(t), (r = (n = this.task).onError) == null || r.call(n, t);
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
    this._useRequestAnimationFrame ? m(this, fr, window.requestAnimationFrame(() => {
      m(this, fr, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }

  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._operationsFilter), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), s(Xr, Oa).delete(this._canvas), this.callback())));
  }
};
fr = new WeakMap(), Oa = new WeakMap(), v(Xr, Oa, /* @__PURE__ */ new WeakSet());
let Tp = Xr;
const hb = '5.4.296';
const cb = 'f56dc8601';
let pi; let Ia; let xl; let pe; let Vc; let El; let ws; let qc; let pr; let en; let Xc; let Ft; let Pp; let kp; let Rp; let Ur; let db; let
  js;
const Qe = class Qe {
  constructor({
    editor: t = null,
    uiManager: e = null,
  }) {
    v(this, Ft);
    v(this, pi, null);
    v(this, Ia, null);
    v(this, xl);
    v(this, pe, null);
    v(this, Vc, !1);
    v(this, El, !1);
    v(this, ws, null);
    v(this, qc);
    v(this, pr, null);
    v(this, en, null);
    let i; let
      n;
    t ? (m(this, El, !1), m(this, ws, t)) : m(this, El, !0), m(this, en, (t == null ? void 0 : t._uiManager) || e), m(this, qc, s(this, en)._eventBus), m(this, xl, ((i = t == null ? void 0 : t.color) == null ? void 0 : i.toUpperCase()) || ((n = s(this, en)) == null ? void 0 : n.highlightColors.values().next().value) || '#FFFF98'), s(Qe, Xc) || m(Qe, Xc, Object.freeze({
      blue: 'pdfjs-editor-colorpicker-blue',
      green: 'pdfjs-editor-colorpicker-green',
      pink: 'pdfjs-editor-colorpicker-pink',
      red: 'pdfjs-editor-colorpicker-red',
      yellow: 'pdfjs-editor-colorpicker-yellow',
    }));
  }

  static get _keyboardManager() {
    return yt(this, '_keyboardManager', new Md([[['Escape', 'mac+Escape'], Qe.prototype._hideDropdownFromKeyboard], [[' ', 'mac+ '], Qe.prototype._colorSelectFromKeyboard], [['ArrowDown', 'ArrowRight', 'mac+ArrowDown', 'mac+ArrowRight'], Qe.prototype._moveToNext], [['ArrowUp', 'ArrowLeft', 'mac+ArrowUp', 'mac+ArrowLeft'], Qe.prototype._moveToPrevious], [['Home', 'mac+Home'], Qe.prototype._moveToBeginning], [['End', 'mac+End'], Qe.prototype._moveToEnd]]));
  }

  renderButton() {
    const t = m(this, pi, document.createElement('button'));
    t.className = 'colorPicker', t.tabIndex = '0', t.setAttribute('data-l10n-id', 'pdfjs-editor-colorpicker-button'), t.ariaHasPopup = 'true', s(this, ws) && (t.ariaControls = `${s(this, ws).id}_colorpicker_dropdown`);
    const e = s(this, en)._signal;
    t.addEventListener('click', A(this, Ft, Ur).bind(this), {
      signal: e,
    }), t.addEventListener('keydown', A(this, Ft, Rp).bind(this), {
      signal: e,
    });
    const i = m(this, Ia, document.createElement('span'));
    return i.className = 'swatch', i.ariaHidden = 'true', i.style.backgroundColor = s(this, xl), t.append(i), t;
  }

  renderMainDropdown() {
    const t = m(this, pe, A(this, Ft, Pp).call(this));
    return t.ariaOrientation = 'horizontal', t.ariaLabelledBy = 'highlightColorPickerLabel', t;
  }

  _colorSelectFromKeyboard(t) {
    if (t.target === s(this, pi)) {
      A(this, Ft, Ur).call(this, t);
      return;
    }
    const e = t.target.getAttribute('data-color');
    e && A(this, Ft, kp).call(this, e, t);
  }

  _moveToNext(t) {
    let e; let
      i;
    if (!s(this, Ft, js)) {
      A(this, Ft, Ur).call(this, t);
      return;
    }
    if (t.target === s(this, pi)) {
      (e = s(this, pe).firstChild) == null || e.focus();
      return;
    }
    (i = t.target.nextSibling) == null || i.focus();
  }

  _moveToPrevious(t) {
    let e; let
      i;
    if (t.target === ((e = s(this, pe)) == null ? void 0 : e.firstChild) || t.target === s(this, pi)) {
      s(this, Ft, js) && this._hideDropdownFromKeyboard();
      return;
    }
    s(this, Ft, js) || A(this, Ft, Ur).call(this, t), (i = t.target.previousSibling) == null || i.focus();
  }

  _moveToBeginning(t) {
    let e;
    if (!s(this, Ft, js)) {
      A(this, Ft, Ur).call(this, t);
      return;
    }
    (e = s(this, pe).firstChild) == null || e.focus();
  }

  _moveToEnd(t) {
    let e;
    if (!s(this, Ft, js)) {
      A(this, Ft, Ur).call(this, t);
      return;
    }
    (e = s(this, pe).lastChild) == null || e.focus();
  }

  hideDropdown() {
    let t; let
      e;
    (t = s(this, pe)) == null || t.classList.add('hidden'), s(this, pi).ariaExpanded = 'false', (e = s(this, pr)) == null || e.abort(), m(this, pr, null);
  }

  _hideDropdownFromKeyboard() {
    let t;
    if (!s(this, El)) {
      if (!s(this, Ft, js)) {
        (t = s(this, ws)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), s(this, pi).focus({
        preventScroll: !0,
        focusVisible: s(this, Vc),
      });
    }
  }

  updateColor(t) {
    if (s(this, Ia) && (s(this, Ia).style.backgroundColor = t), !s(this, pe)) return;
    const e = s(this, en).highlightColors.values();
    for (const i of s(this, pe).children) i.ariaSelected = e.next().value === t.toUpperCase();
  }

  destroy() {
    let t; let
      e;
    (t = s(this, pi)) == null || t.remove(), m(this, pi, null), m(this, Ia, null), (e = s(this, pe)) == null || e.remove(), m(this, pe, null);
  }
};
pi = new WeakMap(), Ia = new WeakMap(), xl = new WeakMap(), pe = new WeakMap(), Vc = new WeakMap(), El = new WeakMap(), ws = new WeakMap(), qc = new WeakMap(), pr = new WeakMap(), en = new WeakMap(), Xc = new WeakMap(), Ft = new WeakSet(), Pp = function () {
  const t = document.createElement('div'); const
    e = s(this, en)._signal;
  t.addEventListener('contextmenu', Ri, {
    signal: e,
  }), t.className = 'dropdown', t.role = 'listbox', t.ariaMultiSelectable = 'false', t.ariaOrientation = 'vertical', t.setAttribute('data-l10n-id', 'pdfjs-editor-colorpicker-dropdown'), s(this, ws) && (t.id = `${s(this, ws).id}_colorpicker_dropdown`);
  for (const [i, n] of s(this, en).highlightColors) {
    const r = document.createElement('button');
    r.tabIndex = '0', r.role = 'option', r.setAttribute('data-color', n), r.title = i, r.setAttribute('data-l10n-id', s(Qe, Xc)[i]);
    const a = document.createElement('span');
    r.append(a), a.className = 'swatch', a.style.backgroundColor = n, r.ariaSelected = n === s(this, xl), r.addEventListener('click', A(this, Ft, kp).bind(this, n), {
      signal: e,
    }), t.append(r);
  }
  return t.addEventListener('keydown', A(this, Ft, Rp).bind(this), {
    signal: e,
  }), t;
}, kp = function (t, e) {
  e.stopPropagation(), s(this, qc).dispatch('switchannotationeditorparams', {
    source: this,
    type: At.HIGHLIGHT_COLOR,
    value: t,
  }), this.updateColor(t);
}, Rp = function (t) {
  Qe._keyboardManager.exec(this, t);
}, Ur = function (t) {
  if (s(this, Ft, js)) {
    this.hideDropdown();
    return;
  }
  if (m(this, Vc, t.detail === 0), s(this, pr) || (m(this, pr, new AbortController()), window.addEventListener('pointerdown', A(this, Ft, db).bind(this), {
    signal: s(this, en).combinedSignal(s(this, pr)),
  })), s(this, pi).ariaExpanded = 'true', s(this, pe)) {
    s(this, pe).classList.remove('hidden');
    return;
  }
  const e = m(this, pe, A(this, Ft, Pp).call(this));
  s(this, pi).append(e);
}, db = function (t) {
  let e;
  (e = s(this, pe)) != null && e.contains(t.target) || this.hideDropdown();
}, js = function () {
  return s(this, pe) && !s(this, pe).classList.contains('hidden');
}, v(Qe, Xc, null);
const Gh = Qe;
let Ln; let Yc; let Cl; let
  Kc;
const Yr = class Yr {
  constructor(t) {
    v(this, Ln, null);
    v(this, Yc, null);
    v(this, Cl, null);
    m(this, Yc, t), m(this, Cl, t._uiManager), s(Yr, Kc) || m(Yr, Kc, Object.freeze({
      freetext: 'pdfjs-editor-color-picker-free-text-input',
      ink: 'pdfjs-editor-color-picker-ink-input',
    }));
  }

  renderButton() {
    if (s(this, Ln)) return s(this, Ln);
    const {
      editorType: t,
      colorType: e,
      colorValue: i,
    } = s(this, Yc); const
      n = m(this, Ln, document.createElement('input'));
    return n.type = 'color', n.value = i || '#000000', n.className = 'basicColorPicker', n.tabIndex = 0, n.setAttribute('data-l10n-id', s(Yr, Kc)[t]), n.addEventListener('input', () => {
      s(this, Cl).updateParams(e, n.value);
    }, {
      signal: s(this, Cl)._signal,
    }), n;
  }

  update(t) {
    s(this, Ln) && (s(this, Ln).value = t);
  }

  destroy() {
    let t;
    (t = s(this, Ln)) == null || t.remove(), m(this, Ln, null);
  }

  hideDropdown() {
  }
};
Ln = new WeakMap(), Yc = new WeakMap(), Cl = new WeakMap(), Kc = new WeakMap(), v(Yr, Kc, null);
const Fu = Yr;
function Em(h) {
  return Math.floor(Math.max(0, Math.min(1, h)) * 255).toString(16).padStart(2, '0');
}
function ph(h) {
  return Math.max(0, Math.min(255, 255 * h));
}
class Cm {
  static CMYK_G([t, e, i, n]) {
    return ['G', 1 - Math.min(1, 0.3 * t + 0.59 * i + 0.11 * e + n)];
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
    const e = Em(t);
    return `#${e}${e}${e}`;
  }

  static RGB_G([t, e, i]) {
    return ['G', 0.3 * t + 0.59 * e + 0.11 * i];
  }

  static RGB_rgb(t) {
    return t.map(ph);
  }

  static RGB_HTML(t) {
    return `#${t.map(Em).join('')}`;
  }

  static T_HTML() {
    return '#00000000';
  }

  static T_rgb() {
    return [null];
  }

  static CMYK_RGB([t, e, i, n]) {
    return ['RGB', 1 - Math.min(1, t + n), 1 - Math.min(1, i + n), 1 - Math.min(1, e + n)];
  }

  static CMYK_rgb([t, e, i, n]) {
    return [ph(1 - Math.min(1, t + n)), ph(1 - Math.min(1, i + n)), ph(1 - Math.min(1, e + n))];
  }

  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }

  static RGB_CMYK([t, e, i]) {
    const n = 1 - t; const r = 1 - e; const a = 1 - i; const
      o = Math.min(n, r, a);
    return ['CMYK', n, r, a, o];
  }
}
class B0 {
  create(t, e, i = !1) {
    if (t <= 0 || e <= 0) throw new Error('Invalid SVG dimensions');
    const n = this._createSVG('svg:svg');
    return n.setAttribute('version', '1.1'), i || (n.setAttribute('width', `${t}px`), n.setAttribute('height', `${e}px`)), n.setAttribute('preserveAspectRatio', 'none'), n.setAttribute('viewBox', `0 0 ${t} ${e}`), n;
  }

  createElement(t) {
    if (typeof t !== 'string') throw new Error('Invalid SVG element type');
    return this._createSVG(t);
  }

  _createSVG(t) {
    zt('Abstract method `_createSVG` called.');
  }
}
class Vh extends B0 {
  _createSVG(t) {
    return document.createElementNS(Vn, t);
  }
}
const H0 = 9; const lo = /* @__PURE__ */ new WeakSet(); const
  j0 = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3;
class Tm {
  static create(t) {
    switch (t.data.annotationType) {
      case ne.LINK:
        return new Tg(t);
      case ne.TEXT:
        return new $0(t);
      case ne.WIDGET:
        switch (t.data.fieldType) {
          case 'Tx':
            return new U0(t);
          case 'Btn':
            return t.data.radioButton ? new pb(t) : t.data.checkBox ? new G0(t) : new V0(t);
          case 'Ch':
            return new q0(t);
          case 'Sig':
            return new W0(t);
        }
        return new uo(t);
      case ne.POPUP:
        return new Mp(t);
      case ne.FREETEXT:
        return new vb(t);
      case ne.LINE:
        return new Y0(t);
      case ne.SQUARE:
        return new K0(t);
      case ne.CIRCLE:
        return new J0(t);
      case ne.POLYLINE:
        return new wb(t);
      case ne.CARET:
        return new Z0(t);
      case ne.INK:
        return new Pg(t);
      case ne.POLYGON:
        return new Q0(t);
      case ne.HIGHLIGHT:
        return new Sb(t);
      case ne.UNDERLINE:
        return new tS(t);
      case ne.SQUIGGLY:
        return new eS(t);
      case ne.STRIKEOUT:
        return new iS(t);
      case ne.STAMP:
        return new Ab(t);
      case ne.FILEATTACHMENT:
        return new nS(t);
      default:
        return new Jt(t);
    }
  }
}
let Fa; let Tl; let zi; let Jc; let
  Lp;
const Ng = class Ng {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: i = !1,
    createQuadrilaterals: n = !1,
  } = {}) {
    v(this, Jc);
    v(this, Fa, null);
    v(this, Tl, !1);
    v(this, zi, null);
    this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableComment = t.enableComment, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(i)), n && this._createQuadrilaterals();
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
      rect: n,
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
    return n ? [n[2], n[3]] : null;
  }

  _normalizePoint(t) {
    const {
      page: {
        view: e,
      },
      viewport: {
        rawDims: {
          pageWidth: i,
          pageHeight: n,
          pageX: r,
          pageY: a,
        },
      },
    } = this.parent;
    return t[1] = e[3] - t[1] + e[1], t[0] = 100 * (t[0] - r) / i, t[1] = 100 * (t[1] - a) / n, t;
  }

  get commentText() {
    let e; let i; let
      n;
    const {
      data: t,
    } = this;
    return ((i = (e = this.annotationStorage.getRawValue(`${Hh}${t.id}`)) == null ? void 0 : e.popup) == null ? void 0 : i.contents) || ((n = t.contentsObj) == null ? void 0 : n.str) || '';
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
    (e = ((t = s(this, zi)) == null ? void 0 : t.popup) || this.popup) == null || e.remove(), m(this, zi, this.popup = null);
  }

  updateEdited(t) {
    let r;
    if (!this.container) return;
    t.rect && (s(this, Fa) || m(this, Fa, {
      rect: this.data.rect.slice(0),
    }));
    const {
      rect: e,
      popup: i,
    } = t;
    e && A(this, Jc, Lp).call(this, e);
    let n = ((r = s(this, zi)) == null ? void 0 : r.popup) || this.popup;
    !n && (i != null && i.text) && (this._createPopup(i), n = s(this, zi).popup), n && (n.updateEdited(t), i != null && i.deleted && (n.remove(), m(this, zi, null), this.popup = null));
  }

  resetEdited() {
    let t;
    s(this, Fa) && (A(this, Jc, Lp).call(this, s(this, Fa).rect), (t = s(this, zi)) == null || t.popup.resetEdited(), m(this, Fa, null));
  }

  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: i,
        viewport: n,
      },
    } = this; const
      r = document.createElement('section');
    r.setAttribute('data-annotation-id', e.id), !(this instanceof uo) && !(this instanceof Tg) && (r.tabIndex = 0);
    const {
      style: a,
    } = r;
    if (a.zIndex = this.parent.zIndex, this.parent.zIndex += 2, e.alternativeText && (r.title = e.alternativeText), e.noRotate && r.classList.add('norotate'), !e.rect || this instanceof Mp) {
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
        L = e.borderStyle.verticalCornerRadius;
      if (S > 0 || L > 0) {
        const M = `calc(${S}px * var(--total-scale-factor)) / calc(${L}px * var(--total-scale-factor))`;
        a.borderRadius = M;
      } else if (this instanceof pb) {
        const M = `calc(${o}px * var(--total-scale-factor)) / calc(${l}px * var(--total-scale-factor))`;
        a.borderRadius = M;
      }
      switch (e.borderStyle.style) {
        case go.SOLID:
          a.borderStyle = 'solid';
          break;
        case go.DASHED:
          a.borderStyle = 'dashed';
          break;
        case go.BEVELED:
          pt('Unimplemented border style: beveled');
          break;
        case go.INSET:
          pt('Unimplemented border style: inset');
          break;
        case go.UNDERLINE:
          a.borderBottomStyle = 'solid';
          break;
      }
      const k = e.borderColor || null;
      k ? (m(this, Tl, !0), a.borderColor = tt.makeHexColor(k[0] | 0, k[1] | 0, k[2] | 0)) : a.borderWidth = 0;
    }
    const c = tt.normalizeRect([e.rect[0], i.view[3] - e.rect[1] + i.view[1], e.rect[2], i.view[3] - e.rect[3] + i.view[1]]); const
      {
        pageWidth: d,
        pageHeight: u,
        pageX: g,
        pageY: b,
      } = n.rawDims;
    a.left = `${100 * (c[0] - g) / d}%`, a.top = `${100 * (c[1] - b) / u}%`;
    const {
      rotation: C,
    } = e;
    return e.hasOwnCanvas || C === 0 ? (a.width = `${100 * o / d}%`, a.height = `${100 * l / u}%`) : this.setRotation(C, r), r;
  }

  setRotation(t, e = this.container) {
    if (!this.data.rect) return;
    const {
      pageWidth: i,
      pageHeight: n,
    } = this.parent.viewport.rawDims;
    let {
      width: r,
      height: a,
    } = this;
    t % 180 !== 0 && ([r, a] = [a, r]), e.style.width = `${100 * r / i}%`, e.style.height = `${100 * a / n}%`, e.setAttribute('data-main-rotation', (360 - t) % 360);
  }

  get _commonActions() {
    const t = (e, i, n) => {
      const r = n.detail[e]; const a = r[0]; const
        o = r.slice(1);
      n.target.style[i] = Cm[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [i]: Cm[`${a}_rgb`](o),
      });
    };
    return yt(this, '_commonActions', {
      display: (e) => {
        const {
          display: i,
        } = e.detail; const
          n = i % 2 === 1;
        this.container.style.visibility = n ? 'hidden' : 'visible', this.annotationStorage.setValue(this.data.id, {
          noView: n,
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
    for (const n of Object.keys(e.detail)) {
      const r = t[n] || i[n];
      r == null || r(e);
    }
  }

  _setDefaultPropertiesFromJS(t) {
    if (!this.enableScripting) return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e) return;
    const i = this._commonActions;
    for (const [n, r] of Object.entries(e)) {
      const a = i[n];
      if (a) {
        const o = {
          detail: {
            [n]: r,
          },
          target: t,
        };
        a(o), delete e[n];
      }
    }
  }

  _createQuadrilaterals() {
    if (!this.container) return;
    const {
      quadPoints: t,
    } = this.data;
    if (!t) return;
    const [e, i, n, r] = this.data.rect.map((S) => Math.fround(S));
    if (t.length === 8) {
      const [S, L, k, M] = t.subarray(2, 6);
      if (n === S && r === L && e === k && i === M) return;
    }
    const {
      style: a,
    } = this.container;
    let o;
    if (s(this, Tl)) {
      const {
        borderColor: S,
        borderWidth: L,
      } = a;
      a.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${S}" stroke-width="${L}">`], this.container.classList.add('hasBorder');
    }
    const l = n - e; const c = r - i; const {
      svgFactory: d,
    } = this; const
      u = d.createElement('svg');
    u.classList.add('quadrilateralsContainer'), u.setAttribute('width', 0), u.setAttribute('height', 0), u.role = 'none';
    const g = d.createElement('defs');
    u.append(g);
    const b = d.createElement('clipPath'); const
      C = `clippath_${this.data.id}`;
    b.setAttribute('id', C), b.setAttribute('clipPathUnits', 'objectBoundingBox'), g.append(b);
    for (let S = 2, L = t.length; S < L; S += 8) {
      const k = t[S]; const M = t[S + 1]; const R = t[S + 2]; const p = t[S + 3]; const f = d.createElement('rect'); const y = (R - e) / l; const _ = (r - M) / c; const T = (k - R) / l; const
        P = (M - p) / c;
      f.setAttribute('x', y), f.setAttribute('y', _), f.setAttribute('width', T), f.setAttribute('height', P), b.append(f), o == null || o.push(`<rect vector-effect="non-scaling-stroke" x="${y}" y="${_}" width="${T}" height="${P}"/>`);
    }
    s(this, Tl) && (o.push("</g></svg>')"), a.backgroundImage = o.join('')), this.container.append(u), this.container.style.clipPath = `url(#${C})`;
  }

  _createPopup(t = null) {
    const {
      data: e,
    } = this;
    let i; let
      n;
    t ? (i = {
      str: t.text,
    }, n = t.date) : (i = e.contentsObj, n = e.modificationDate);
    const r = m(this, zi, new Mp({
      data: {
        color: e.color,
        titleObj: e.titleObj,
        modificationDate: n,
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
    return !!(s(this, zi) || this.popup || this.data.popupRef);
  }

  get extraPopupElement() {
    return s(this, zi);
  }

  render() {
    zt('Abstract method `AnnotationElement.render` called');
  }

  _getElementsByName(t, e = null) {
    const i = [];
    if (this._fieldObjects) {
      const n = this._fieldObjects[t];
      if (n) {
        for (const {
          page: r,
          id: a,
          exportValues: o,
        } of n) {
          if (r === -1 || a === e) continue;
          const l = typeof o === 'string' ? o : null; const
            c = document.querySelector(`[data-element-id="${a}"]`);
          if (c && !lo.has(c)) {
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
    for (const n of document.getElementsByName(t)) {
      const {
        exportValue: r,
      } = n; const
        a = n.getAttribute('data-element-id');
      a !== e && lo.has(n) && i.push({
        id: a,
        exportValue: r,
        domElement: n,
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
Fa = new WeakMap(), Tl = new WeakMap(), zi = new WeakMap(), Jc = new WeakSet(), Lp = function (t) {
  const {
    container: {
      style: e,
    },
    data: {
      rect: i,
      rotation: n,
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
  i == null || i.splice(0, 4, ...t), e.left = `${100 * (t[0] - o) / r}%`, e.top = `${100 * (a - t[3] + l) / a}%`, n === 0 ? (e.width = `${100 * (t[2] - t[0]) / r}%`, e.height = `${100 * (t[3] - t[1]) / a}%`) : this.setRotation(n);
};
let Jt = Ng;
class z0 extends Jt {
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
let Pi; let Wr; let ub; let
  fb;
class Tg extends Jt {
  constructor(e, i = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(i != null && i.ignoreBorder),
      createQuadrilaterals: !0,
    });
    v(this, Pi);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }

  render() {
    const {
      data: e,
      linkService: i,
    } = this; const
      n = document.createElement('a');
    n.setAttribute('data-element-id', e.id);
    let r = !1;
    return e.url ? (i.addLinkAttributes(n, e.url, e.newWindow), r = !0) : e.action ? (this._bindNamedAction(n, e.action, e.overlaidText), r = !0) : e.attachment ? (A(this, Pi, ub).call(this, n, e.attachment, e.overlaidText, e.attachmentDest), r = !0) : e.setOCGState ? (A(this, Pi, fb).call(this, n, e.setOCGState, e.overlaidText), r = !0) : e.dest ? (this._bindLink(n, e.dest, e.overlaidText), r = !0) : (e.actions && (e.actions.Action || e.actions['Mouse Up'] || e.actions['Mouse Down']) && this.enableScripting && this.hasJSActions && (this._bindJSAction(n, e), r = !0), e.resetForm ? (this._bindResetFormAction(n, e.resetForm), r = !0) : this.isTooltipOnly && !r && (this._bindLink(n, ''), r = !0)), this.container.classList.add('linkAnnotation'), r && this.container.append(n), this.container;
  }

  _bindLink(e, i, n = '') {
    e.href = this.linkService.getDestinationHash(i), e.onclick = () => (i && this.linkService.goToDestination(i), !1), (i || i === '') && A(this, Pi, Wr).call(this), n && (e.title = n);
  }

  _bindNamedAction(e, i, n = '') {
    e.href = this.linkService.getAnchorUrl(''), e.onclick = () => (this.linkService.executeNamedAction(i), !1), n && (e.title = n), A(this, Pi, Wr).call(this);
  }

  _bindJSAction(e, i) {
    e.href = this.linkService.getAnchorUrl('');
    const n = /* @__PURE__ */ new Map([['Action', 'onclick'], ['Mouse Up', 'onmouseup'], ['Mouse Down', 'onmousedown']]);
    for (const r of Object.keys(i.actions)) {
      const a = n.get(r);
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
    i.overlaidText && (e.title = i.overlaidText), e.onclick || (e.onclick = () => !1), A(this, Pi, Wr).call(this);
  }

  _bindResetFormAction(e, i) {
    const n = e.onclick;
    if (n || (e.href = this.linkService.getAnchorUrl('')), A(this, Pi, Wr).call(this), !this._fieldObjects) {
      pt('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), n || (e.onclick = () => !1);
      return;
    }
    e.onclick = () => {
      let u;
      n == null || n();
      const {
        fields: r,
        refs: a,
        include: o,
      } = i; const
        l = [];
      if (r.length !== 0 || a.length !== 0) {
        const g = new Set(a);
        for (const b of r) {
          const C = this._fieldObjects[b] || [];
          for (const {
            id: S,
          } of C) g.add(S);
        }
        for (const b of Object.values(this._fieldObjects)) for (const C of b) g.has(C.id) === o && l.push(C);
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
        const C = document.querySelector(`[data-element-id="${b}"]`);
        if (C) {
          if (!lo.has(C)) {
            pt(`_bindResetFormAction - element not allowed: ${b}`);
            continue;
          }
        } else continue;
        C.dispatchEvent(new Event('resetform'));
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
Pi = new WeakSet(), Wr = function () {
  this.container.setAttribute('data-internal-link', '');
}, ub = function (e, i, n = '', r = null) {
  e.href = this.linkService.getAnchorUrl(''), i.description ? e.title = i.description : n && (e.title = n), e.onclick = () => {
    let a;
    return (a = this.downloadManager) == null || a.openOrDownloadData(i.content, i.filename, r), !1;
  }, A(this, Pi, Wr).call(this);
}, fb = function (e, i, n = '') {
  e.href = this.linkService.getAnchorUrl(''), e.onclick = () => (this.linkService.executeSetOCGState(i), !1), n && (e.title = n), A(this, Pi, Wr).call(this);
};
class $0 extends Jt {
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
class uo extends Jt {
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

  _setEventListener(t, e, i, n, r) {
    i.includes('mouse') ? t.addEventListener(i, (a) => {
      let o;
      (o = this.linkService.eventBus) == null || o.dispatch('dispatcheventinsandbox', {
        source: this,
        detail: {
          id: this.data.id,
          name: n,
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
          name: n,
          value: r(a),
        },
      }));
    });
  }

  _setEventListeners(t, e, i, n) {
    let r; let a; let
      o;
    for (const [l, c] of i) {
      (c === 'Action' || (r = this.data.actions) != null && r[c]) && ((c === 'Focus' || c === 'Blur') && (e || (e = {
        focused: !1,
      })), this._setEventListener(t, e, l, c, n), c === 'Focus' && !((a = this.data.actions) != null && a.Blur) ? this._setEventListener(t, e, 'blur', 'Blur', null) : c === 'Blur' && !((o = this.data.actions) != null && o.Focus) && this._setEventListener(t, e, 'focus', 'Focus', null));
    }
  }

  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? 'transparent' : tt.makeHexColor(e[0], e[1], e[2]);
  }

  _setTextStyle(t) {
    const e = ['left', 'center', 'right']; const {
      fontColor: i,
    } = this.data.defaultAppearanceData; const n = this.data.defaultAppearanceData.fontSize || H0; const
      r = t.style;
    let a;
    const o = 2; const
      l = (c) => Math.round(10 * c) / 10;
    if (this.data.multiLine) {
      const c = Math.abs(this.data.rect[3] - this.data.rect[1] - o); const d = Math.round(c / (Rf * n)) || 1; const
        u = c / d;
      a = Math.min(n, l(u / Rf));
    } else {
      const c = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      a = Math.min(n, l(c / Rf));
    }
    r.fontSize = `calc(${a}px * var(--total-scale-factor))`, r.color = tt.makeHexColor(i[0], i[1], i[2]), this.data.textAlignment !== null && (r.textAlign = e[this.data.textAlignment]);
  }

  _setRequired(t, e) {
    e ? t.setAttribute('required', !0) : t.removeAttribute('required'), t.setAttribute('aria-required', e);
  }
}
class U0 extends uo {
  constructor(t) {
    const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, {
      isRenderable: e,
    });
  }

  setPropertyOnSiblings(t, e, i, n) {
    const r = this.annotationStorage;
    for (const a of this._getElementsByName(t.name, t.id)) {
      a.domElement && (a.domElement[e] = i), r.setValue(a.id, {
        [n]: i,
      });
    }
  }

  render() {
    let n; let
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
      let c = a.formattedValue || ((n = this.data.textContent) == null ? void 0 : n.join(`
`)) || null;
      c && this.data.comb && (c = c.replaceAll(/\s+/g, ''));
      const d = {
        userValue: o,
        formattedValue: c,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1,
      };
      this.data.multiLine ? (i = document.createElement('textarea'), i.textContent = c ?? o, this.data.doNotScroll && (i.style.overflowY = 'hidden')) : (i = document.createElement('input'), i.type = this.data.password ? 'password' : 'text', i.setAttribute('value', c ?? o), this.data.doNotScroll && (i.style.overflowX = 'hidden')), this.data.hasOwnCanvas && (i.hidden = !0), lo.add(i), i.setAttribute('data-element-id', e), i.disabled = this.data.readOnly, i.name = this.data.fieldName, i.tabIndex = 0;
      const {
        datetimeFormat: u,
        datetimeType: g,
        timeStep: b,
      } = this.data; const
        C = !!g && this.enableScripting;
      u && (i.title = u), this._setRequired(i, this.data.required), l && (i.maxLength = l), i.addEventListener('input', (L) => {
        t.setValue(e, {
          value: L.target.value,
        }), this.setPropertyOnSiblings(i, 'value', L.target.value, 'value'), d.formattedValue = null;
      }), i.addEventListener('resetform', (L) => {
        const k = this.data.defaultFieldValue ?? '';
        i.value = d.userValue = k, d.formattedValue = null;
      });
      let S = (L) => {
        const {
          formattedValue: k,
        } = d;
        k != null && (L.target.value = k), L.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        i.addEventListener('focus', (k) => {
          let R;
          if (d.focused) return;
          const {
            target: M,
          } = k;
          if (C && (M.type = g, b && (M.step = b)), d.userValue) {
            const p = d.userValue;
            if (C) {
              if (g === 'time') {
                const f = new Date(p); const
                  y = [f.getHours(), f.getMinutes(), f.getSeconds()];
                M.value = y.map((_) => _.toString().padStart(2, '0')).join(':');
              } else M.value = new Date(p - j0).toISOString().split(g === 'date' ? 'T' : '.', 1)[0];
            } else M.value = p;
          }
          d.lastCommittedValue = M.value, d.commitKey = 1, (R = this.data.actions) != null && R.Focus || (d.focused = !0);
        }), i.addEventListener('updatefromsandbox', (k) => {
          this.showElementAndHideCanvas(k.target);
          const M = {
            value(R) {
              d.userValue = R.detail.value ?? '', C || t.setValue(e, {
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
              C && (f.value = p), t.setValue(e, f);
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
          this._dispatchEventFromSandbox(M, k);
        }), i.addEventListener('keydown', (k) => {
          let p;
          d.commitKey = 1;
          let M = -1;
          if (k.key === 'Escape' ? M = 0 : k.key === 'Enter' && !this.data.multiLine ? M = 2 : k.key === 'Tab' && (d.commitKey = 3), M === -1) return;
          const {
            value: R,
          } = k.target;
          d.lastCommittedValue !== R && (d.lastCommittedValue = R, d.userValue = R, (p = this.linkService.eventBus) == null || p.dispatch('dispatcheventinsandbox', {
            source: this,
            detail: {
              id: e,
              name: 'Keystroke',
              value: R,
              willCommit: !0,
              commitKey: M,
              selStart: k.target.selectionStart,
              selEnd: k.target.selectionEnd,
            },
          }));
        });
        const L = S;
        S = null, i.addEventListener('blur', (k) => {
          let p; let
            f;
          if (!d.focused || !k.relatedTarget) return;
          (p = this.data.actions) != null && p.Blur || (d.focused = !1);
          const {
            target: M,
          } = k;
          let {
            value: R,
          } = M;
          if (C) {
            if (R && g === 'time') {
              const y = R.split(':').map((_) => parseInt(_, 10));
              R = new Date(2e3, 0, 1, y[0], y[1], y[2] || 0).valueOf(), M.step = '';
            } else R.includes('T') || (R = `${R}T00:00`), R = new Date(R).valueOf();
            M.type = 'text';
          }
          d.userValue = R, d.lastCommittedValue !== R && ((f = this.linkService.eventBus) == null || f.dispatch('dispatcheventinsandbox', {
            source: this,
            detail: {
              id: e,
              name: 'Keystroke',
              value: R,
              willCommit: !0,
              commitKey: d.commitKey,
              selStart: k.target.selectionStart,
              selEnd: k.target.selectionEnd,
            },
          })), L(k);
        }), (r = this.data.actions) != null && r.Keystroke && i.addEventListener('beforeinput', (k) => {
          let P;
          d.lastCommittedValue = null;
          const {
            data: M,
            target: R,
          } = k; const
            {
              value: p,
              selectionStart: f,
              selectionEnd: y,
            } = R;
          let _ = f; let
            T = y;
          switch (k.inputType) {
            case 'deleteWordBackward': {
              const E = p.substring(0, f).match(/\w*[^\w]*$/);
              E && (_ -= E[0].length);
              break;
            }
            case 'deleteWordForward': {
              const E = p.substring(f).match(/^[^\w]*\w*/);
              E && (T += E[0].length);
              break;
            }
            case 'deleteContentBackward':
              f === y && (_ -= 1);
              break;
            case 'deleteContentForward':
              f === y && (T += 1);
              break;
          }
          k.preventDefault(), (P = this.linkService.eventBus) == null || P.dispatch('dispatcheventinsandbox', {
            source: this,
            detail: {
              id: e,
              name: 'Keystroke',
              value: p,
              change: M || '',
              willCommit: !1,
              selStart: _,
              selEnd: T,
            },
          });
        }), this._setEventListeners(i, d, [['focus', 'Focus'], ['blur', 'Blur'], ['mousedown', 'Mouse Down'], ['mouseenter', 'Mouse Enter'], ['mouseleave', 'Mouse Exit'], ['mouseup', 'Mouse Up']], (k) => k.target.value);
      }
      if (S && i.addEventListener('blur', S), this.data.comb) {
        const k = (this.data.rect[2] - this.data.rect[0]) / l;
        i.classList.add('comb'), i.style.letterSpacing = `calc(${k}px * var(--total-scale-factor) - 1ch)`;
      }
    } else i = document.createElement('div'), i.textContent = this.data.fieldValue, i.style.verticalAlign = 'middle', i.style.display = 'table-cell', this.data.hasOwnCanvas && (i.hidden = !0);
    return this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
  }
}
class W0 extends uo {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas,
    });
  }
}
class G0 extends uo {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms,
    });
  }

  render() {
    const t = this.annotationStorage; const e = this.data; const
      i = e.id;
    let n = t.getValue(i, {
      value: e.exportValue === e.fieldValue,
    }).value;
    typeof n === 'string' && (n = n !== 'Off', t.setValue(i, {
      value: n,
    })), this.container.classList.add('buttonWidgetAnnotation', 'checkBox');
    const r = document.createElement('input');
    return lo.add(r), r.setAttribute('data-element-id', i), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = 'checkbox', r.name = e.fieldName, n && r.setAttribute('checked', !0), r.setAttribute('exportValue', e.exportValue), r.tabIndex = 0, r.addEventListener('change', (a) => {
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
class pb extends uo {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms,
    });
  }

  render() {
    this.container.classList.add('buttonWidgetAnnotation', 'radioButton');
    const t = this.annotationStorage; const e = this.data; const
      i = e.id;
    let n = t.getValue(i, {
      value: e.fieldValue === e.buttonValue,
    }).value;
    if (typeof n === 'string' && (n = n !== e.buttonValue, t.setValue(i, {
      value: n,
    })), n) {
      for (const a of this._getElementsByName(e.fieldName, i)) {
        t.setValue(a.id, {
          value: !1,
        });
      }
    }
    const r = document.createElement('input');
    if (lo.add(r), r.setAttribute('data-element-id', i), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = 'radio', r.name = e.fieldName, n && r.setAttribute('checked', !0), r.tabIndex = 0, r.addEventListener('change', (a) => {
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
class V0 extends Tg {
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
class q0 extends uo {
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
      n = document.createElement('select');
    lo.add(n), n.setAttribute('data-element-id', e), n.disabled = this.data.readOnly, this._setRequired(n, this.data.required), n.name = this.data.fieldName, n.tabIndex = 0;
    let r = this.data.combo && this.data.options.length > 0;
    this.data.combo || (n.size = this.data.options.length, this.data.multiSelect && (n.multiple = !0)), n.addEventListener('resetform', (d) => {
      const u = this.data.defaultFieldValue;
      for (const g of n.options) g.selected = g.value === u;
    });
    for (const d of this.data.options) {
      const u = document.createElement('option');
      u.textContent = d.displayValue, u.value = d.exportValue, i.value.includes(d.exportValue) && (u.setAttribute('selected', !0), r = !1), n.append(u);
    }
    let a = null;
    if (r) {
      const d = document.createElement('option');
      d.value = ' ', d.setAttribute('hidden', !0), d.setAttribute('selected', !0), n.prepend(d), a = () => {
        d.remove(), n.removeEventListener('input', a), a = null;
      }, n.addEventListener('input', a);
    }
    const o = (d) => {
      const u = d ? 'value' : 'textContent';
      const {
        options: g,
        multiple: b,
      } = n;
      return b ? Array.prototype.filter.call(g, (C) => C.selected).map((C) => C[u]) : g.selectedIndex === -1 ? null : g[g.selectedIndex][u];
    };
    let l = o(!1);
    const c = (d) => {
      const u = d.target.options;
      return Array.prototype.map.call(u, (g) => ({
        displayValue: g.textContent,
        exportValue: g.value,
      }));
    };
    return this.enableScripting && this.hasJSActions ? (n.addEventListener('updatefromsandbox', (d) => {
      const u = {
        value(g) {
          a == null || a();
          const b = g.detail.value; const
            C = new Set(Array.isArray(b) ? b : [b]);
          for (const S of n.options) S.selected = C.has(S.value);
          t.setValue(e, {
            value: o(!0),
          }), l = o(!1);
        },
        multipleSelection(g) {
          n.multiple = !0;
        },
        remove(g) {
          const b = n.options; const
            C = g.detail.remove;
          b[C].selected = !1, n.remove(C), b.length > 0 && Array.prototype.findIndex.call(b, (L) => L.selected) === -1 && (b[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: c(g),
          }), l = o(!1);
        },
        clear(g) {
          for (; n.length !== 0;) n.remove(0);
          t.setValue(e, {
            value: null,
            items: [],
          }), l = o(!1);
        },
        insert(g) {
          const {
            index: b,
            displayValue: C,
            exportValue: S,
          } = g.detail.insert; const L = n.children[b]; const
            k = document.createElement('option');
          k.textContent = C, k.value = S, L ? L.before(k) : n.append(k), t.setValue(e, {
            value: o(!0),
            items: c(g),
          }), l = o(!1);
        },
        items(g) {
          const {
            items: b,
          } = g.detail;
          for (; n.length !== 0;) n.remove(0);
          for (const C of b) {
            const {
              displayValue: S,
              exportValue: L,
            } = C; const
              k = document.createElement('option');
            k.textContent = S, k.value = L, n.append(k);
          }
          n.options.length > 0 && (n.options[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: c(g),
          }), l = o(!1);
        },
        indices(g) {
          const b = new Set(g.detail.indices);
          for (const C of g.target.options) C.selected = b.has(C.index);
          t.setValue(e, {
            value: o(!0),
          }), l = o(!1);
        },
        editable(g) {
          g.target.disabled = !g.detail.editable;
        },
      };
      this._dispatchEventFromSandbox(u, d);
    }), n.addEventListener('input', (d) => {
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
    }), this._setEventListeners(n, null, [['focus', 'Focus'], ['blur', 'Blur'], ['mousedown', 'Mouse Down'], ['mouseenter', 'Mouse Enter'], ['mouseleave', 'Mouse Exit'], ['mouseup', 'Mouse Up'], ['input', 'Action'], ['input', 'Validate']], (d) => d.target.value)) : n.addEventListener('input', (d) => {
      t.setValue(e, {
        value: o(!0),
      });
    }), this.data.combo && this._setTextStyle(n), this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
  }
}
let Qc; let
  Dp;
class Mp extends Jt {
  constructor(e) {
    const {
      data: i,
      elements: n,
      parent: r,
    } = e; const
      a = !!r._commentManager;
    super(e, {
      isRenderable: !a && Jt._hasPopupData(i),
    });
    v(this, Qc);
    if (this.elements = n, a && Jt._hasPopupData(i)) {
      const o = this.popup = A(this, Qc, Dp).call(this);
      for (const l of n) l.popup = o;
    } else this.popup = null;
  }

  render() {
    const {
      container: e,
    } = this;
    e.classList.add('popupAnnotation'), e.role = 'comment';
    const i = this.popup = A(this, Qc, Dp).call(this); const
      n = [];
    for (const r of this.elements) r.popup = i, r.container.ariaHasPopup = 'dialog', n.push(r.data.id), r.addHighlightArea();
    return this.container.setAttribute('aria-controls', n.map((r) => `${vg}${r}`).join(',')), this.container;
  }
}
Qc = new WeakSet(), Dp = function () {
  return new X0({
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
let gi; let gr; let tf; let ef; let Pl; let kl; let te; let Mn; let mr; let Na; let Rl; let Ll; let Dn; let mi; let Ss; let As; let ye; let _s; let yr; let Zc; let xs; let Ml; let Ba; let br; let He; let vr; let vt; let hu; let Op; let Ip; let Fp; let cu; let Np; let gb; let mb; let yb; let bb; let du; let uu; let
  Bp;
class X0 {
  constructor({
    container: t,
    color: e,
    elements: i,
    titleObj: n,
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
    v(this, gi, null);
    v(this, gr, A(this, vt, yb).bind(this));
    v(this, tf, A(this, vt, Bp).bind(this));
    v(this, ef, A(this, vt, uu).bind(this));
    v(this, Pl, A(this, vt, du).bind(this));
    v(this, kl, null);
    v(this, te, null);
    v(this, Mn, null);
    v(this, mr, null);
    v(this, Na, null);
    v(this, Rl, null);
    v(this, Ll, null);
    v(this, Dn, !1);
    v(this, mi, null);
    v(this, Ss, null);
    v(this, As, null);
    v(this, ye, null);
    v(this, _s, null);
    v(this, yr, null);
    v(this, Zc, null);
    v(this, xs, null);
    v(this, Ml, null);
    v(this, Ba, null);
    v(this, br, !1);
    v(this, He, null);
    v(this, vr, null);
    m(this, te, t), m(this, Ml, n), m(this, Mn, a), m(this, xs, o), m(this, Rl, l), m(this, kl, e), m(this, Zc, c), m(this, Ll, d), m(this, Na, i), m(this, gi, g), m(this, He, i[0]), m(this, mr, $h.toDateObject(r)), this.trigger = i.flatMap((b) => b.getElementsToTriggerPopup()), g ? this.renderCommentButton() : (A(this, vt, hu).call(this), s(this, te).hidden = !0, u && A(this, vt, du).call(this));
  }

  renderCommentButton() {
    if (s(this, ye) || (s(this, _s) || A(this, vt, Op).call(this), !s(this, _s))) return;
    const {
      signal: t,
    } = m(this, Ss, new AbortController()); const e = !!s(this, He).extraPopupElement; const i = () => {
      s(this, gi).toggleCommentPopup(this, !0, void 0, !e);
    }; const n = () => {
      s(this, gi).toggleCommentPopup(this, !1, !0, !e);
    }; const
      r = () => {
        s(this, gi).toggleCommentPopup(this, !1, !1);
      };
    if (e) {
      m(this, ye, s(this, He).container);
      for (const a of this.trigger) {
        a.ariaHasPopup = 'dialog', a.ariaControls = 'commentPopup', a.addEventListener('keydown', s(this, gr), {
          signal: t,
        }), a.addEventListener('click', i, {
          signal: t,
        }), a.addEventListener('pointerenter', n, {
          signal: t,
        }), a.addEventListener('pointerleave', r, {
          signal: t,
        }), a.classList.add('popupTriggerArea');
      }
    } else {
      const a = m(this, ye, document.createElement('button'));
      a.className = 'annotationCommentButton';
      const o = s(this, He).container;
      a.style.zIndex = o.style.zIndex + 1, a.tabIndex = 0, a.ariaHasPopup = 'dialog', a.ariaControls = 'commentPopup', a.setAttribute('data-l10n-id', 'pdfjs-show-comment-button'), A(this, vt, Fp).call(this), A(this, vt, Ip).call(this), a.addEventListener('keydown', s(this, gr), {
        signal: t,
      }), a.addEventListener('click', i, {
        signal: t,
      }), a.addEventListener('pointerenter', n, {
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
    } = s(this, He).commentData;
    return t ? s(this, Rl)._commentManager.makeCommentColor(t, e) : null;
  }

  focusCommentButton() {
    setTimeout(() => {
      let t;
      (t = s(this, ye)) == null || t.focus();
    }, 0);
  }

  getData() {
    const {
      richText: t,
      color: e,
      opacity: i,
      creationDate: n,
      modificationDate: r,
    } = s(this, He).commentData;
    return {
      contentsObj: {
        str: this.comment,
      },
      richText: t,
      color: e,
      opacity: i,
      creationDate: n,
      modificationDate: r,
    };
  }

  get elementBeforePopup() {
    return s(this, ye);
  }

  get comment() {
    return s(this, vr) || m(this, vr, s(this, He).commentText), s(this, vr);
  }

  set comment(t) {
    t !== this.comment && (s(this, He).commentText = m(this, vr, t));
  }

  get parentBoundingClientRect() {
    return s(this, He).layer.getBoundingClientRect();
  }

  setCommentButtonStates({
    selected: t,
    hasPopup: e,
  }) {
    s(this, ye) && (s(this, ye).classList.toggle('selected', t), s(this, ye).ariaExpanded = e);
  }

  setSelectedCommentButton(t) {
    s(this, ye).classList.toggle('selected', t);
  }

  get commentPopupPosition() {
    if (s(this, yr)) return s(this, yr);
    const {
      x: t,
      y: e,
      height: i,
    } = s(this, ye).getBoundingClientRect(); const
      {
        x: n,
        y: r,
        width: a,
        height: o,
      } = s(this, He).layer.getBoundingClientRect();
    return [(t - n) / a, (e + i - r) / o];
  }

  set commentPopupPosition(t) {
    m(this, yr, t);
  }

  hasDefaultPopupPosition() {
    return s(this, yr) === null;
  }

  get commentButtonPosition() {
    return s(this, _s);
  }

  get commentButtonWidth() {
    return s(this, ye).getBoundingClientRect().width / this.parentBoundingClientRect.width;
  }

  editComment(t) {
    const [e, i] = s(this, yr) || this.commentButtonPosition.map((c) => c / 100); const n = this.parentBoundingClientRect; const
      {
        x: r,
        y: a,
        width: o,
        height: l,
      } = n;
    s(this, gi).showDialog(null, this, r + e * o, a + i * l, {
      ...t,
      parentDimensions: n,
    });
  }

  render() {
    let i; let
      n;
    if (s(this, mi)) return;
    const t = m(this, mi, document.createElement('div'));
    if (t.className = 'popup', s(this, kl)) {
      const r = t.style.outlineColor = tt.makeHexColor(...s(this, kl));
      t.style.backgroundColor = `color-mix(in srgb, ${r} 30%, white)`;
    }
    const e = document.createElement('span');
    if (e.className = 'header', (i = s(this, Ml)) != null && i.str) {
      const r = document.createElement('span');
      r.className = 'title', e.append(r), {
        dir: r.dir,
        str: r.textContent,
      } = s(this, Ml);
    }
    if (t.append(e), s(this, mr)) {
      const r = document.createElement('time');
      r.className = 'popupDate', r.setAttribute('data-l10n-id', 'pdfjs-annotation-date-time-string'), r.setAttribute('data-l10n-args', JSON.stringify({
        dateObj: s(this, mr).valueOf(),
      })), r.dateTime = s(this, mr).toISOString(), e.append(r);
    }
    Sg({
      html: s(this, vt, cu) || s(this, Mn).str,
      dir: (n = s(this, Mn)) == null ? void 0 : n.dir,
      className: 'popupContent',
    }, t), s(this, te).append(t);
  }

  updateEdited({
    rect: t,
    popup: e,
    deleted: i,
  }) {
    let n;
    if (s(this, gi)) {
      i ? (this.remove(), m(this, vr, null)) : e && (e.deleted ? this.remove() : (A(this, vt, Fp).call(this), m(this, vr, e.text))), t && (m(this, _s, null), A(this, vt, Op).call(this), A(this, vt, Ip).call(this));
      return;
    }
    if (i || e != null && e.deleted) {
      this.remove();
      return;
    }
    A(this, vt, hu).call(this), s(this, Ba) || m(this, Ba, {
      contentsObj: s(this, Mn),
      richText: s(this, xs),
    }), t && m(this, As, null), e && e.text && (m(this, xs, A(this, vt, mb).call(this, e.text)), m(this, mr, $h.toDateObject(e.date)), m(this, Mn, null)), (n = s(this, mi)) == null || n.remove(), m(this, mi, null);
  }

  resetEdited() {
    let t;
    s(this, Ba) && ({
      contentsObj: de(this, Mn)._,
      richText: de(this, xs)._,
    } = s(this, Ba), m(this, Ba, null), (t = s(this, mi)) == null || t.remove(), m(this, mi, null), m(this, As, null));
  }

  remove() {
    let t; let e; let
      i;
    if ((t = s(this, Ss)) == null || t.abort(), m(this, Ss, null), (e = s(this, mi)) == null || e.remove(), m(this, mi, null), m(this, br, !1), m(this, Dn, !1), (i = s(this, ye)) == null || i.remove(), m(this, ye, null), this.trigger) for (const n of this.trigger) n.classList.remove('popupTriggerArea');
  }

  forceHide() {
    m(this, br, this.isVisible), s(this, br) && (s(this, te).hidden = !0);
  }

  maybeShow() {
    s(this, gi) || (A(this, vt, hu).call(this), s(this, br) && (s(this, mi) || A(this, vt, uu).call(this), m(this, br, !1), s(this, te).hidden = !1));
  }

  get isVisible() {
    return s(this, gi) ? !1 : s(this, te).hidden === !1;
  }
}
gi = new WeakMap(), gr = new WeakMap(), tf = new WeakMap(), ef = new WeakMap(), Pl = new WeakMap(), kl = new WeakMap(), te = new WeakMap(), Mn = new WeakMap(), mr = new WeakMap(), Na = new WeakMap(), Rl = new WeakMap(), Ll = new WeakMap(), Dn = new WeakMap(), mi = new WeakMap(), Ss = new WeakMap(), As = new WeakMap(), ye = new WeakMap(), _s = new WeakMap(), yr = new WeakMap(), Zc = new WeakMap(), xs = new WeakMap(), Ml = new WeakMap(), Ba = new WeakMap(), br = new WeakMap(), He = new WeakMap(), vr = new WeakMap(), vt = new WeakSet(), hu = function () {
  let e;
  if (s(this, Ss)) return;
  m(this, Ss, new AbortController());
  const {
    signal: t,
  } = s(this, Ss);
  for (const i of this.trigger) {
    i.addEventListener('click', s(this, Pl), {
      signal: t,
    }), i.addEventListener('pointerenter', s(this, ef), {
      signal: t,
    }), i.addEventListener('pointerleave', s(this, tf), {
      signal: t,
    }), i.classList.add('popupTriggerArea');
  }
  for (const i of s(this, Na)) {
    (e = i.container) == null || e.addEventListener('keydown', s(this, gr), {
      signal: t,
    });
  }
}, Op = function () {
  const t = s(this, Na).find((e) => e.hasCommentButton);
  t && m(this, _s, t._normalizePoint(t.commentButtonPosition));
}, Ip = function () {
  if (s(this, He).extraPopupElement && !s(this, He).editor) return;
  this.renderCommentButton();
  const [t, e] = s(this, _s); const
    {
      style: i,
    } = s(this, ye);
  i.left = `calc(${t}%)`, i.top = `calc(${e}% - var(--comment-button-dim))`;
}, Fp = function () {
  s(this, He).extraPopupElement || (this.renderCommentButton(), s(this, ye).style.backgroundColor = this.commentButtonColor || '');
}, cu = function () {
  const t = s(this, xs); const
    e = s(this, Mn);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && s(this, xs).html || null;
}, Np = function () {
  let t; let e; let
    i;
  return ((i = (e = (t = s(this, vt, cu)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : i.fontSize) || 0;
}, gb = function () {
  let t; let e; let
    i;
  return ((i = (e = (t = s(this, vt, cu)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : i.color) || null;
}, mb = function (t) {
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
    n = {
      style: {
        color: s(this, vt, gb),
        fontSize: s(this, vt, Np) ? `calc(${s(this, vt, Np)}px * var(--total-scale-factor))` : '',
      },
    };
  for (const r of t.split(`
`)) {
    e.push({
      name: 'span',
      value: r,
      attributes: n,
    });
  }
  return i;
}, yb = function (t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === 'Enter' || t.key === 'Escape' && s(this, Dn)) && A(this, vt, du).call(this);
}, bb = function () {
  if (s(this, As) !== null) return;
  const {
    page: {
      view: t,
    },
    viewport: {
      rawDims: {
        pageWidth: e,
        pageHeight: i,
        pageX: n,
        pageY: r,
      },
    },
  } = s(this, Rl);
  let a = !!s(this, Ll); let
    o = a ? s(this, Ll) : s(this, Zc);
  for (const C of s(this, Na)) {
    if (!o || tt.intersect(C.data.rect, o) !== null) {
      o = C.data.rect, a = !0;
      break;
    }
  }
  const l = tt.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]); const d = a ? o[2] - o[0] + 5 : 0; const u = l[0] + d; const
    g = l[1];
  m(this, As, [100 * (u - n) / e, 100 * (g - r) / i]);
  const {
    style: b,
  } = s(this, te);
  b.left = `${s(this, As)[0]}%`, b.top = `${s(this, As)[1]}%`;
}, du = function () {
  if (s(this, gi)) {
    s(this, gi).toggleCommentPopup(this, !1);
    return;
  }
  m(this, Dn, !s(this, Dn)), s(this, Dn) ? (A(this, vt, uu).call(this), s(this, te).addEventListener('click', s(this, Pl)), s(this, te).addEventListener('keydown', s(this, gr))) : (A(this, vt, Bp).call(this), s(this, te).removeEventListener('click', s(this, Pl)), s(this, te).removeEventListener('keydown', s(this, gr)));
}, uu = function () {
  s(this, mi) || this.render(), this.isVisible ? s(this, Dn) && s(this, te).classList.add('focused') : (A(this, vt, bb).call(this), s(this, te).hidden = !1, s(this, te).style.zIndex = parseInt(s(this, te).style.zIndex) + 1e3);
}, Bp = function () {
  s(this, te).classList.remove('focused'), !(s(this, Dn) || !this.isVisible) && (s(this, te).hidden = !0, s(this, te).style.zIndex = parseInt(s(this, te).style.zIndex) - 1e3);
};
class vb extends Jt {
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
class Y0 extends Jt {
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
      height: n,
    } = this; const r = this.svgFactory.create(i, n, !0); const
      a = m(this, td, this.svgFactory.createElement('svg:line'));
    return a.setAttribute('x1', e.rect[2] - e.lineCoordinates[0]), a.setAttribute('y1', e.rect[3] - e.lineCoordinates[1]), a.setAttribute('x2', e.rect[2] - e.lineCoordinates[2]), a.setAttribute('y2', e.rect[3] - e.lineCoordinates[3]), a.setAttribute('stroke-width', e.borderStyle.width || 1), a.setAttribute('stroke', 'transparent'), a.setAttribute('fill', 'transparent'), r.append(a), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }

  getElementsToTriggerPopup() {
    return s(this, td);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
td = new WeakMap();
let ed;
class K0 extends Jt {
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
      height: n,
    } = this; const r = this.svgFactory.create(i, n, !0); const a = e.borderStyle.width; const
      o = m(this, ed, this.svgFactory.createElement('svg:rect'));
    return o.setAttribute('x', a / 2), o.setAttribute('y', a / 2), o.setAttribute('width', i - a), o.setAttribute('height', n - a), o.setAttribute('stroke-width', a || 1), o.setAttribute('stroke', 'transparent'), o.setAttribute('fill', 'transparent'), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }

  getElementsToTriggerPopup() {
    return s(this, ed);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
ed = new WeakMap();
let id;
class J0 extends Jt {
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
      height: n,
    } = this; const r = this.svgFactory.create(i, n, !0); const a = e.borderStyle.width; const
      o = m(this, id, this.svgFactory.createElement('svg:ellipse'));
    return o.setAttribute('cx', i / 2), o.setAttribute('cy', n / 2), o.setAttribute('rx', i / 2 - a / 2), o.setAttribute('ry', n / 2 - a / 2), o.setAttribute('stroke-width', a || 1), o.setAttribute('stroke', 'transparent'), o.setAttribute('fill', 'transparent'), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }

  getElementsToTriggerPopup() {
    return s(this, id);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
id = new WeakMap();
let nd;
class wb extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0,
    });
    v(this, nd, null);
    this.containerClassName = 'polylineAnnotation', this.svgElementName = 'svg:polyline';
  }

  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        vertices: i,
        borderStyle: n,
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
        C = e[3] - i[u + 1];
      c.push(`${b},${C}`);
    }
    c = c.join(' ');
    const d = m(this, nd, this.svgFactory.createElement(this.svgElementName));
    return d.setAttribute('points', c), d.setAttribute('stroke-width', n.width || 1), d.setAttribute('stroke', 'transparent'), d.setAttribute('fill', 'transparent'), l.append(d), this.container.append(l), !r && this.hasPopupData && this._createPopup(), this.container;
  }

  getElementsToTriggerPopup() {
    return s(this, nd);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
nd = new WeakMap();
class Q0 extends wb {
  constructor(t) {
    super(t), this.containerClassName = 'polygonAnnotation', this.svgElementName = 'svg:polygon';
  }
}
class Z0 extends Jt {
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
let sd; let Ha; let rd; let
  Hp;
class Pg extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0,
    });
    v(this, rd);
    v(this, sd, null);
    v(this, Ha, []);
    this.containerClassName = 'inkAnnotation', this.svgElementName = 'svg:polyline', this.annotationEditorType = this.data.it === 'InkHighlight' ? ft.HIGHLIGHT : ft.INK;
  }

  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        rotation: i,
        inkLists: n,
        borderStyle: r,
        popupRef: a,
      },
    } = this; const {
      transform: o,
      width: l,
      height: c,
    } = A(this, rd, Hp).call(this, i, e); const d = this.svgFactory.create(l, c, !0); const
      u = m(this, sd, this.svgFactory.createElement('svg:g'));
    d.append(u), u.setAttribute('stroke-width', r.width || 1), u.setAttribute('stroke-linecap', 'round'), u.setAttribute('stroke-linejoin', 'round'), u.setAttribute('stroke-miterlimit', 10), u.setAttribute('stroke', 'transparent'), u.setAttribute('fill', 'transparent'), u.setAttribute('transform', o);
    for (let g = 0, b = n.length; g < b; g++) {
      const C = this.svgFactory.createElement(this.svgElementName);
      s(this, Ha).push(C), C.setAttribute('points', n[g].join(',')), u.append(C);
    }
    return !a && this.hasPopupData && this._createPopup(), this.container.append(d), this._editOnDoubleClick(), this.container;
  }

  updateEdited(e) {
    super.updateEdited(e);
    const {
      thickness: i,
      points: n,
      rect: r,
    } = e; const
      a = s(this, sd);
    if (i >= 0 && a.setAttribute('stroke-width', i || 1), n) for (let o = 0, l = s(this, Ha).length; o < l; o++) s(this, Ha)[o].setAttribute('points', n[o].join(','));
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
    return s(this, Ha);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
sd = new WeakMap(), Ha = new WeakMap(), rd = new WeakSet(), Hp = function (e, i) {
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
class Sb extends Jt {
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
class tS extends Jt {
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
class eS extends Jt {
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
class iS extends Jt {
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
class Ab extends Jt {
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
class nS extends Jt {
  constructor(e) {
    let n;
    super(e, {
      isRenderable: !0,
    });
    v(this, od);
    v(this, ad, null);
    const {
      file: i,
    } = this.data;
    this.filename = i.filename, this.content = i.content, (n = this.linkService.eventBus) == null || n.dispatch('fileattachmentannotation', {
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
    let n;
    i.hasAppearance || i.fillAlpha === 0 ? n = document.createElement('div') : (n = document.createElement('img'), n.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(i.name) ? 'paperclip' : 'pushpin'}.svg`, i.fillAlpha && i.fillAlpha < 1 && (n.style = `filter: opacity(${Math.round(i.fillAlpha * 100)}%);`)), n.addEventListener('dblclick', A(this, od, jp).bind(this)), m(this, ad, n);
    const {
      isMac: r,
    } = _e.platform;
    return e.addEventListener('keydown', (a) => {
      a.key === 'Enter' && (r ? a.metaKey : a.ctrlKey) && A(this, od, jp).call(this);
    }), !i.popupRef && this.hasPopupData ? this._createPopup() : n.classList.add('popupTriggerArea'), e.append(n), e;
  }

  getElementsToTriggerPopup() {
    return s(this, ad);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
ad = new WeakMap(), od = new WeakSet(), jp = function () {
  let e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
let Dl; let ja; let Ol; let wr; let ld; let za; let Br; let zp; let $p; let
  Il;
const kg = (Il = class {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: i,
    annotationEditorUIManager: n,
    page: r,
    viewport: a,
    structTreeLayer: o,
    commentManager: l,
    linkService: c,
    annotationStorage: d,
  }) {
    v(this, Br);
    v(this, Dl, null);
    v(this, ja, null);
    v(this, Ol, null);
    v(this, wr, /* @__PURE__ */ new Map());
    v(this, ld, null);
    v(this, za, null);
    this.div = t, m(this, Dl, e), m(this, ja, i), m(this, ld, o || null), m(this, za, c || null), m(this, Ol, d || new Ag()), this.page = r, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = n, this._commentManager = l || null;
  }

  hasEditableAnnotations() {
    return s(this, wr).size > 0;
  }

  async render(t) {
    let a; let o; let
      l;
    const {
      annotations: e,
    } = t; const
      i = this.div;
    Ir(i, this.viewport);
    const n = /* @__PURE__ */ new Map(); const
      r = {
        data: null,
        layer: i,
        linkService: s(this, za),
        downloadManager: t.downloadManager,
        imageResourcesPath: t.imageResourcesPath || '',
        renderForms: t.renderForms !== !1,
        svgFactory: new Vh(),
        annotationStorage: s(this, Ol),
        enableComment: t.enableComment === !0,
        enableScripting: t.enableScripting === !0,
        hasJSActions: t.hasJSActions,
        fieldObjects: t.fieldObjects,
        parent: this,
        elements: null,
      };
    for (const c of e) {
      if (c.noHTML) continue;
      const d = c.annotationType === ne.POPUP;
      if (d) {
        const b = n.get(c.id);
        if (!b) continue;
        r.elements = b;
      } else if (c.rect[2] === c.rect[0] || c.rect[3] === c.rect[1]) continue;
      r.data = c;
      const u = Tm.create(r);
      if (!u.isRenderable) continue;
      if (!d && c.popupRef) {
        const b = n.get(c.popupRef);
        b ? b.push(u) : n.set(c.popupRef, [u]);
      }
      const g = u.render();
      c.hidden && (g.style.visibility = 'hidden'), await A(this, Br, zp).call(this, g, c.id, r.elements), (o = (a = u.extraPopupElement) == null ? void 0 : a.popup) == null || o.renderCommentButton(), u._isEditable && (s(this, wr).set(u.data.id, u), (l = this._annotationEditorUIManager) == null || l.renderAnnotationElement(u));
    }
    A(this, Br, $p).call(this);
  }

  async addLinkAnnotations(t) {
    const e = {
      data: null,
      layer: this.div,
      linkService: s(this, za),
      svgFactory: new Vh(),
      parent: this,
    };
    for (const i of t) {
      i.borderStyle || (i.borderStyle = Il._defaultBorderStyle), e.data = i;
      const n = Tm.create(e);
      if (!n.isRenderable) continue;
      const r = n.render();
      await A(this, Br, zp).call(this, r, i.id, null);
    }
  }

  update({
    viewport: t,
  }) {
    const e = this.div;
    this.viewport = t, Ir(e, {
      rotation: t.rotation,
    }), A(this, Br, $p).call(this), e.hidden = !1;
  }

  getEditableAnnotations() {
    return Array.from(s(this, wr).values());
  }

  getEditableAnnotation(t) {
    return s(this, wr).get(t);
  }

  addFakeAnnotation(t) {
    let o;
    const {
      div: e,
    } = this; const {
      id: i,
      rotation: n,
    } = t; const r = new z0({
      data: {
        id: i,
        rect: t.getPDFRect(),
        rotation: n,
      },
      editor: t,
      layer: e,
      parent: this,
      enableComment: !!this._commentManager,
      linkService: s(this, za),
      annotationStorage: s(this, Ol),
    }); const
      a = r.render();
    return e.append(a), (o = s(this, Dl)) == null || o.moveElementInDOM(e, a, a, !1), r.createOrUpdatePopup(), r;
  }

  static get _defaultBorderStyle() {
    return yt(this, '_defaultBorderStyle', Object.freeze({
      width: 1,
      rawWidth: 1,
      style: go.SOLID,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0,
    }));
  }
}, Dl = new WeakMap(), ja = new WeakMap(), Ol = new WeakMap(), wr = new WeakMap(), ld = new WeakMap(), za = new WeakMap(), Br = new WeakSet(), zp = async function (t, e, i) {
  let o; let
    l;
  const n = t.firstChild || t; const r = n.id = `${vg}${e}`; const
    a = await ((o = s(this, ld)) == null ? void 0 : o.getAriaAttributes(r));
  if (a) for (const [c, d] of a) n.setAttribute(c, d);
  i ? i.at(-1).container.after(t) : (this.div.append(t), (l = s(this, Dl)) == null || l.moveElementInDOM(this.div, t, n, !1));
}, $p = function () {
  let e;
  if (!s(this, ja)) return;
  const t = this.div;
  for (const [i, n] of s(this, ja)) {
    const r = t.querySelector(`[data-annotation-id="${i}"]`);
    if (!r) continue;
    n.className = 'annotationContent';
    const {
      firstChild: a,
    } = r;
    a ? a.nodeName === 'CANVAS' ? a.replaceWith(n) : a.classList.contains('annotationContent') ? a.after(n) : a.before(n) : r.append(n);
    const o = s(this, wr).get(i);
    o && (o._hasNoCanvas ? ((e = this._annotationEditorUIManager) == null || e.setMissingCanvas(i, r.id, n), o._hasNoCanvas = !1) : o.canvas = n);
  }
  s(this, ja).clear();
}, Il);
const Xd = /\r\n?|\n/g;
let yi; let hd; let $a; let bi; let he; let _b; let xb; let Eb; let fu; let Ds; let pu; let gu; let Cb; let Wp; let
  Tb;
const Wt = class Wt extends Ut {
  constructor(e) {
    super({
      ...e,
      name: 'freeTextEditor',
    });
    v(this, he);
    v(this, yi, '');
    v(this, hd, `${this.id}-editor`);
    v(this, $a, null);
    v(this, bi);
    V(this, '_colorPicker', null);
    this.color = e.color || Wt._defaultColor || Ut._defaultLineColor, m(this, bi, e.fontSize || Wt._defaultFontSize), this.annotationElementId || this._uiManager.a11yAlert('pdfjs-editor-freetext-added-alert');
  }

  static get _keyboardManager() {
    const e = Wt.prototype; const i = (a) => a.isEmpty(); const n = Fr.TRANSLATE_SMALL; const
      r = Fr.TRANSLATE_BIG;
    return yt(this, '_keyboardManager', new Md([[['ctrl+s', 'mac+meta+s', 'ctrl+p', 'mac+meta+p'], e.commitOrRemove, {
      bubbles: !0,
    }], [['ctrl+Enter', 'mac+meta+Enter', 'Escape', 'mac+Escape'], e.commitOrRemove], [['ArrowLeft', 'mac+ArrowLeft'], e._translateEmpty, {
      args: [-n, 0],
      checker: i,
    }], [['ctrl+ArrowLeft', 'mac+shift+ArrowLeft'], e._translateEmpty, {
      args: [-r, 0],
      checker: i,
    }], [['ArrowRight', 'mac+ArrowRight'], e._translateEmpty, {
      args: [n, 0],
      checker: i,
    }], [['ctrl+ArrowRight', 'mac+shift+ArrowRight'], e._translateEmpty, {
      args: [r, 0],
      checker: i,
    }], [['ArrowUp', 'mac+ArrowUp'], e._translateEmpty, {
      args: [0, -n],
      checker: i,
    }], [['ctrl+ArrowUp', 'mac+shift+ArrowUp'], e._translateEmpty, {
      args: [0, -r],
      checker: i,
    }], [['ArrowDown', 'mac+ArrowDown'], e._translateEmpty, {
      args: [0, n],
      checker: i,
    }], [['ctrl+ArrowDown', 'mac+shift+ArrowDown'], e._translateEmpty, {
      args: [0, r],
      checker: i,
    }]]));
  }

  static initialize(e, i) {
    Ut.initialize(e, i);
    const n = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(n.getPropertyValue('--freetext-padding'));
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
        A(this, he, _b).call(this, i);
        break;
      case At.FREETEXT_COLOR:
        A(this, he, xb).call(this, i);
        break;
    }
  }

  static get defaultPropertiesToUpdate() {
    return [[At.FREETEXT_SIZE, Wt._defaultFontSize], [At.FREETEXT_COLOR, Wt._defaultColor || Ut._defaultLineColor]];
  }

  get propertiesToUpdate() {
    return [[At.FREETEXT_SIZE, s(this, bi)], [At.FREETEXT_COLOR, this.color]];
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
    return [-Wt._internalPadding * e, -(Wt._internalPadding + s(this, bi)) * e];
  }

  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }

  enableEditMode() {
    if (!super.enableEditMode()) return !1;
    this.overlayDiv.classList.remove('enabled'), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute('aria-activedescendant'), m(this, $a, new AbortController());
    const e = this._uiManager.combinedSignal(s(this, $a));
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
    return super.disableEditMode() ? (this.overlayDiv.classList.add('enabled'), this.editorDiv.contentEditable = !1, this.div.setAttribute('aria-activedescendant', s(this, hd)), this._isDraggable = !0, (e = s(this, $a)) == null || e.abort(), m(this, $a, null), this.div.focus({
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
    const e = s(this, yi); const
      i = m(this, yi, A(this, he, Eb).call(this).trimEnd());
    if (e === i) return;
    const n = (r) => {
      if (m(this, yi, r), !r) {
        this.remove();
        return;
      }
      A(this, he, gu).call(this), this._uiManager.rebuild(this), A(this, he, fu).call(this);
    };
    this.addCommands({
      cmd: () => {
        n(i);
      },
      undo: () => {
        n(e);
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
    (this._isCopy || this.annotationElementId) && (e = this.x, i = this.y), super.render(), this.editorDiv = document.createElement('div'), this.editorDiv.className = 'internal', this.editorDiv.setAttribute('id', s(this, hd)), this.editorDiv.setAttribute('data-l10n-id', 'pdfjs-free-text2'), this.editorDiv.setAttribute('data-l10n-attrs', 'default-content'), this.enableEditing(), this.editorDiv.contentEditable = !0;
    const {
      style: n,
    } = this.editorDiv;
    if (n.fontSize = `calc(${s(this, bi)}px * var(--total-scale-factor))`, n.color = this.color, this.div.append(this.editorDiv), this.overlayDiv = document.createElement('div'), this.overlayDiv.classList.add('overlay', 'enabled'), this.div.append(this.overlayDiv), this._isCopy || this.annotationElementId) {
      const [r, a] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: o,
        } = this._initialData;
        let [l, c] = this.getInitialTranslation();
        [l, c] = this.pageTranslationToScreen(l, c);
        const [d, u] = this.pageDimensions; const
          [g, b] = this.pageTranslation;
        let C; let
          S;
        switch (this.rotation) {
          case 0:
            C = e + (o[0] - g) / d, S = i + this.height - (o[1] - b) / u;
            break;
          case 90:
            C = e + (o[0] - g) / d, S = i - (o[1] - b) / u, [l, c] = [c, -l];
            break;
          case 180:
            C = e - this.width + (o[0] - g) / d, S = i - (o[1] - b) / u, [l, c] = [-l, -c];
            break;
          case 270:
            C = e + (o[0] - g - this.height * u) / d, S = i + (o[1] - b - this.width * d) / u, [l, c] = [-c, l];
            break;
        }
        this.setAt(C * r, S * a, l, c);
      } else this._moveAfterPaste(e, i);
      A(this, he, gu).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }

  editorDivPaste(e) {
    let C; let S; let
      L;
    const i = e.clipboardData || window.clipboardData; const
      {
        types: n,
      } = i;
    if (n.length === 1 && n[0] === 'text/plain') return;
    e.preventDefault();
    const r = A(C = Wt, Ds, Wp).call(C, i.getData('text') || '').replaceAll(Xd, `
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
      const k = l.parentElement;
      if (u.push(l.nodeValue.slice(c).replaceAll(Xd, '')), k !== this.editorDiv) {
        let M = d;
        for (const R of this.editorDiv.childNodes) {
          if (R === k) {
            M = u;
            continue;
          }
          M.push(A(S = Wt, Ds, pu).call(S, R));
        }
      }
      d.push(l.nodeValue.slice(0, c).replaceAll(Xd, ''));
    } else if (l === this.editorDiv) {
      let k = d; let
        M = 0;
      for (const R of this.editorDiv.childNodes) M++ === c && (k = u), k.push(A(L = Wt, Ds, pu).call(L, R));
    }
    m(this, yi, `${d.join(`
`)}${r}${u.join(`
`)}`), A(this, he, gu).call(this);
    const g = new Range();
    let b = Math.sumPrecise(d.map((k) => k.length));
    for (const {
      firstChild: k,
    } of this.editorDiv.childNodes) {
      if (k.nodeType === Node.TEXT_NODE) {
        const M = k.nodeValue.length;
        if (b <= M) {
          g.setStart(k, b), g.setEnd(k, b);
          break;
        }
        b -= M;
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

  static async deserialize(e, i, n) {
    let o;
    let r = null;
    if (e instanceof vb) {
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
          richText: C,
          contentsObj: S,
          creationDate: L,
          modificationDate: k,
        },
        textContent: M,
        textPosition: R,
        parent: {
          page: {
            pageNumber: p,
          },
        },
      } = e;
      if (!M || M.length === 0) return null;
      r = e = {
        annotationType: ft.FREETEXT,
        color: Array.from(c),
        fontSize: l,
        value: M.join(`
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
        richText: C,
        creationDate: L,
        modificationDate: k,
      };
    }
    const a = await super.deserialize(e, i, n);
    return m(a, bi, e.fontSize), a.color = tt.makeHexColor(...e.color), m(a, yi, A(o = Wt, Ds, Wp).call(o, e.value)), a._initialData = r, e.comment && a.setCommentData(e), a;
  }

  serialize(e = !1) {
    if (this.isEmpty()) return null;
    if (this.deleted) return this.serializeDeleted();
    const i = Ut._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color); const
      n = Object.assign(super.serialize(e), {
        color: i,
        fontSize: s(this, bi),
        value: A(this, he, Cb).call(this),
      });
    return this.addComment(n), e ? (n.isCopy = !0, n) : this.annotationElementId && !A(this, he, Tb).call(this, n) ? null : (n.id = this.annotationElementId, n);
  }

  renderAnnotationElement(e) {
    const i = super.renderAnnotationElement(e);
    if (!i) return null;
    const {
      style: n,
    } = i;
    n.fontSize = `calc(${s(this, bi)}px * var(--total-scale-factor))`, n.color = this.color, i.replaceChildren();
    for (const r of s(this, yi).split(`
`)) {
      const a = document.createElement('div');
      a.append(r ? document.createTextNode(r) : document.createElement('br')), i.append(a);
    }
    return e.updateEdited({
      rect: this.getPDFRect(),
      popup: this._uiManager.hasCommentManager() || this.hasEditedComment ? this.comment : {
        text: s(this, yi),
      },
    }), i;
  }

  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
yi = new WeakMap(), hd = new WeakMap(), $a = new WeakMap(), bi = new WeakMap(), he = new WeakSet(), _b = function (e) {
  const i = (r) => {
    this.editorDiv.style.fontSize = `calc(${r}px * var(--total-scale-factor))`, this.translate(0, -(r - s(this, bi)) * this.parentScale), m(this, bi, r), A(this, he, fu).call(this);
  }; const
    n = s(this, bi);
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, n),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: At.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0,
  });
}, xb = function (e) {
  const i = (r) => {
    this.color = r, this.onUpdatedColor();
  }; const
    n = this.color;
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, n),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: At.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0,
  });
}, Eb = function () {
  let n;
  const e = [];
  this.editorDiv.normalize();
  let i = null;
  for (const r of this.editorDiv.childNodes) (i == null ? void 0 : i.nodeType) === Node.TEXT_NODE && r.nodeName === 'BR' || (e.push(A(n = Wt, Ds, pu).call(n, r)), i = r);
  return e.join(`
`);
}, fu = function () {
  const [e, i] = this.parentDimensions;
  let n;
  if (this.isAttachedToDOM) n = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: r,
      div: a,
    } = this; const o = a.style.display; const
      l = a.classList.contains('hidden');
    a.classList.remove('hidden'), a.style.display = 'hidden', r.div.append(this.div), n = a.getBoundingClientRect(), a.remove(), a.style.display = o, a.classList.toggle('hidden', l);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = n.width / e, this.height = n.height / i) : (this.width = n.height / e, this.height = n.width / i), this.fixAndSetPosition();
}, Ds = new WeakSet(), pu = function (e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(Xd, '');
}, gu = function () {
  if (this.editorDiv.replaceChildren(), !!s(this, yi)) {
    for (const e of s(this, yi).split(`
`)) {
      const i = document.createElement('div');
      i.append(e ? document.createTextNode(e) : document.createElement('br')), this.editorDiv.append(i);
    }
  }
}, Cb = function () {
  return s(this, yi).replaceAll(' ', ' ');
}, Wp = function (e) {
  return e.replaceAll(' ', ' ');
}, Tb = function (e) {
  const {
    value: i,
    fontSize: n,
    color: r,
    pageIndex: a,
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || e.value !== i || e.fontSize !== n || e.color.some((o, l) => o !== r[l]) || e.pageIndex !== a;
}, v(Wt, Ds), V(Wt, '_freeTextDefaultContent', ''), V(Wt, '_internalPadding', 0), V(Wt, '_defaultColor', null), V(Wt, '_defaultFontSize', 10), V(Wt, '_type', 'freetext'), V(Wt, '_editorType', ft.FREETEXT);
const Up = Wt;
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

  static _rescale(t, e, i, n, r, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2) a[o] = e + t[o] * n, a[o + 1] = i + t[o + 1] * r;
    return a;
  }

  static _rescaleAndSwap(t, e, i, n, r, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2) a[o] = e + t[o + 1] * n, a[o + 1] = i + t[o] * r;
    return a;
  }

  static _translate(t, e, i, n) {
    n || (n = new Float32Array(t.length));
    for (let r = 0, a = t.length; r < a; r += 2) n[r] = e + t[r], n[r + 1] = i + t[r + 1];
    return n;
  }

  static svgRound(t) {
    return Math.round(t * 1e4);
  }

  static _normalizePoint(t, e, i, n, r) {
    switch (r) {
      case 90:
        return [1 - e / i, t / n];
      case 180:
        return [1 - t / i, 1 - e / n];
      case 270:
        return [e / i, 1 - t / n];
      default:
        return [t / i, e / n];
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

  static createBezierPoints(t, e, i, n, r, a) {
    return [(t + 5 * i) / 6, (e + 5 * n) / 6, (5 * i + r) / 6, (5 * n + a) / 6, (i + r) / 2, (n + a) / 2];
  }
}
V(Z, 'PRECISION', 1e-4);
let vi; let nn; let Fl; let Nl; let On; let wt; let Ua; let Wa; let cd; let dd; let Bl; let Hl; let Sr; let ud; let nf; let sf; let ge; let Mh; let Pb; let kb; let Rb; let Lb; let Mb; let
  Db;
const Jn = class Jn {
  constructor({
    x: t,
    y: e,
  }, i, n, r, a, o = 0) {
    v(this, ge);
    v(this, vi);
    v(this, nn, []);
    v(this, Fl);
    v(this, Nl);
    v(this, On, []);
    v(this, wt, new Float32Array(18));
    v(this, Ua);
    v(this, Wa);
    v(this, cd);
    v(this, dd);
    v(this, Bl);
    v(this, Hl);
    v(this, Sr, []);
    m(this, vi, i), m(this, Hl, r * n), m(this, Nl, a), s(this, wt).set([NaN, NaN, NaN, NaN, t, e], 6), m(this, Fl, o), m(this, dd, s(Jn, ud) * n), m(this, cd, s(Jn, sf) * n), m(this, Bl, n), s(this, Sr).push(t, e);
  }

  isEmpty() {
    return isNaN(s(this, wt)[8]);
  }

  add({
    x: t,
    y: e,
  }) {
    let P;
    m(this, Ua, t), m(this, Wa, e);
    const [i, n, r, a] = s(this, vi);
    let [o, l, c, d] = s(this, wt).subarray(8, 12);
    const u = t - c; const g = e - d; const
      b = Math.hypot(u, g);
    if (b < s(this, cd)) return !1;
    const C = b - s(this, dd); const S = C / b; const L = S * u; const
      k = S * g;
    let M = o; let
      R = l;
    o = c, l = d, c += L, d += k, (P = s(this, Sr)) == null || P.push(t, e);
    const p = -k / C; const f = L / C; const y = p * s(this, Hl); const
      _ = f * s(this, Hl);
    return s(this, wt).set(s(this, wt).subarray(2, 8), 0), s(this, wt).set([c + y, d + _], 4), s(this, wt).set(s(this, wt).subarray(14, 18), 12), s(this, wt).set([c - y, d - _], 16), isNaN(s(this, wt)[6]) ? (s(this, On).length === 0 && (s(this, wt).set([o + y, l + _], 2), s(this, On).push(NaN, NaN, NaN, NaN, (o + y - i) / r, (l + _ - n) / a), s(this, wt).set([o - y, l - _], 14), s(this, nn).push(NaN, NaN, NaN, NaN, (o - y - i) / r, (l - _ - n) / a)), s(this, wt).set([M, R, o, l, c, d], 6), !this.isEmpty()) : (s(this, wt).set([M, R, o, l, c, d], 6), Math.abs(Math.atan2(R - l, M - o) - Math.atan2(k, L)) < Math.PI / 2 ? ([o, l, c, d] = s(this, wt).subarray(2, 6), s(this, On).push(NaN, NaN, NaN, NaN, ((o + c) / 2 - i) / r, ((l + d) / 2 - n) / a), [o, l, M, R] = s(this, wt).subarray(14, 18), s(this, nn).push(NaN, NaN, NaN, NaN, ((M + o) / 2 - i) / r, ((R + l) / 2 - n) / a), !0) : ([M, R, o, l, c, d] = s(this, wt).subarray(0, 6), s(this, On).push(((M + 5 * o) / 6 - i) / r, ((R + 5 * l) / 6 - n) / a, ((5 * o + c) / 6 - i) / r, ((5 * l + d) / 6 - n) / a, ((o + c) / 2 - i) / r, ((l + d) / 2 - n) / a), [c, d, o, l, M, R] = s(this, wt).subarray(12, 18), s(this, nn).push(((M + 5 * o) / 6 - i) / r, ((R + 5 * l) / 6 - n) / a, ((5 * o + c) / 6 - i) / r, ((5 * l + d) / 6 - n) / a, ((o + c) / 2 - i) / r, ((l + d) / 2 - n) / a), !0));
  }

  toSVGPath() {
    if (this.isEmpty()) return '';
    const t = s(this, On); const
      e = s(this, nn);
    if (isNaN(s(this, wt)[6]) && !this.isEmpty()) return A(this, ge, Pb).call(this);
    const i = [];
    i.push(`M${t[4]} ${t[5]}`);
    for (let n = 6; n < t.length; n += 6) isNaN(t[n]) ? i.push(`L${t[n + 4]} ${t[n + 5]}`) : i.push(`C${t[n]} ${t[n + 1]} ${t[n + 2]} ${t[n + 3]} ${t[n + 4]} ${t[n + 5]}`);
    A(this, ge, Rb).call(this, i);
    for (let n = e.length - 6; n >= 6; n -= 6) isNaN(e[n]) ? i.push(`L${e[n + 4]} ${e[n + 5]}`) : i.push(`C${e[n]} ${e[n + 1]} ${e[n + 2]} ${e[n + 3]} ${e[n + 4]} ${e[n + 5]}`);
    return A(this, ge, kb).call(this, i), i.join(' ');
  }

  newFreeDrawOutline(t, e, i, n, r, a) {
    return new Ob(t, e, i, n, r, a);
  }

  getOutlines() {
    let u;
    const t = s(this, On); const e = s(this, nn); const i = s(this, wt); const [n, r, a, o] = s(this, vi); const
      l = new Float32Array((((u = s(this, Sr)) == null ? void 0 : u.length) ?? 0) + 2);
    for (let g = 0, b = l.length - 2; g < b; g += 2) l[g] = (s(this, Sr)[g] - n) / a, l[g + 1] = (s(this, Sr)[g + 1] - r) / o;
    if (l[l.length - 2] = (s(this, Ua) - n) / a, l[l.length - 1] = (s(this, Wa) - r) / o, isNaN(i[6]) && !this.isEmpty()) return A(this, ge, Lb).call(this, l);
    const c = new Float32Array(s(this, On).length + 24 + s(this, nn).length);
    let d = t.length;
    for (let g = 0; g < d; g += 2) {
      if (isNaN(t[g])) {
        c[g] = c[g + 1] = NaN;
        continue;
      }
      c[g] = t[g], c[g + 1] = t[g + 1];
    }
    d = A(this, ge, Db).call(this, c, d);
    for (let g = e.length - 6; g >= 6; g -= 6) {
      for (let b = 0; b < 6; b += 2) {
        if (isNaN(e[g + b])) {
          c[d] = c[d + 1] = NaN, d += 2;
          continue;
        }
        c[d] = e[g + b], c[d + 1] = e[g + b + 1], d += 2;
      }
    }
    return A(this, ge, Mb).call(this, c, d), this.newFreeDrawOutline(c, l, s(this, vi), s(this, Bl), s(this, Fl), s(this, Nl));
  }
};
vi = new WeakMap(), nn = new WeakMap(), Fl = new WeakMap(), Nl = new WeakMap(), On = new WeakMap(), wt = new WeakMap(), Ua = new WeakMap(), Wa = new WeakMap(), cd = new WeakMap(), dd = new WeakMap(), Bl = new WeakMap(), Hl = new WeakMap(), Sr = new WeakMap(), ud = new WeakMap(), nf = new WeakMap(), sf = new WeakMap(), ge = new WeakSet(), Mh = function () {
  const t = s(this, wt).subarray(4, 6); const e = s(this, wt).subarray(16, 18); const
    [i, n, r, a] = s(this, vi);
  return [(s(this, Ua) + (t[0] - e[0]) / 2 - i) / r, (s(this, Wa) + (t[1] - e[1]) / 2 - n) / a, (s(this, Ua) + (e[0] - t[0]) / 2 - i) / r, (s(this, Wa) + (e[1] - t[1]) / 2 - n) / a];
}, Pb = function () {
  const [t, e, i, n] = s(this, vi); const
    [r, a, o, l] = A(this, ge, Mh).call(this);
  return `M${(s(this, wt)[2] - t) / i} ${(s(this, wt)[3] - e) / n} L${(s(this, wt)[4] - t) / i} ${(s(this, wt)[5] - e) / n} L${r} ${a} L${o} ${l} L${(s(this, wt)[16] - t) / i} ${(s(this, wt)[17] - e) / n} L${(s(this, wt)[14] - t) / i} ${(s(this, wt)[15] - e) / n} Z`;
}, kb = function (t) {
  const e = s(this, nn);
  t.push(`L${e[4]} ${e[5]} Z`);
}, Rb = function (t) {
  const [e, i, n, r] = s(this, vi); const a = s(this, wt).subarray(4, 6); const o = s(this, wt).subarray(16, 18); const
    [l, c, d, u] = A(this, ge, Mh).call(this);
  t.push(`L${(a[0] - e) / n} ${(a[1] - i) / r} L${l} ${c} L${d} ${u} L${(o[0] - e) / n} ${(o[1] - i) / r}`);
}, Lb = function (t) {
  const e = s(this, wt); const [i, n, r, a] = s(this, vi); const [o, l, c, d] = A(this, ge, Mh).call(this); const
    u = new Float32Array(36);
  return u.set([NaN, NaN, NaN, NaN, (e[2] - i) / r, (e[3] - n) / a, NaN, NaN, NaN, NaN, (e[4] - i) / r, (e[5] - n) / a, NaN, NaN, NaN, NaN, o, l, NaN, NaN, NaN, NaN, c, d, NaN, NaN, NaN, NaN, (e[16] - i) / r, (e[17] - n) / a, NaN, NaN, NaN, NaN, (e[14] - i) / r, (e[15] - n) / a], 0), this.newFreeDrawOutline(u, t, s(this, vi), s(this, Bl), s(this, Fl), s(this, Nl));
}, Mb = function (t, e) {
  const i = s(this, nn);
  return t.set([NaN, NaN, NaN, NaN, i[4], i[5]], e), e += 6;
}, Db = function (t, e) {
  const i = s(this, wt).subarray(4, 6); const n = s(this, wt).subarray(16, 18); const [r, a, o, l] = s(this, vi); const
    [c, d, u, g] = A(this, ge, Mh).call(this);
  return t.set([NaN, NaN, NaN, NaN, (i[0] - r) / o, (i[1] - a) / l, NaN, NaN, NaN, NaN, c, d, NaN, NaN, NaN, NaN, u, g, NaN, NaN, NaN, NaN, (n[0] - r) / o, (n[1] - a) / l], e), e += 24;
}, v(Jn, ud, 8), v(Jn, nf, 2), v(Jn, sf, s(Jn, ud) + s(Jn, nf));
const Nu = Jn;
let jl; let Ga; let Es; let fd; let wi; let pd; let re; let rf; let
  Ib;
class Ob extends Z {
  constructor(e, i, n, r, a, o) {
    super();
    v(this, rf);
    v(this, jl);
    v(this, Ga, new Float32Array(4));
    v(this, Es);
    v(this, fd);
    v(this, wi);
    v(this, pd);
    v(this, re);
    m(this, re, e), m(this, wi, i), m(this, jl, n), m(this, pd, r), m(this, Es, a), m(this, fd, o), this.firstPoint = [NaN, NaN], this.lastPoint = [NaN, NaN], A(this, rf, Ib).call(this, o);
    const [l, c, d, u] = s(this, Ga);
    for (let g = 0, b = e.length; g < b; g += 2) e[g] = (e[g] - l) / d, e[g + 1] = (e[g + 1] - c) / u;
    for (let g = 0, b = i.length; g < b; g += 2) i[g] = (i[g] - l) / d, i[g + 1] = (i[g + 1] - c) / u;
  }

  toSVGPath() {
    const e = [`M${s(this, re)[4]} ${s(this, re)[5]}`];
    for (let i = 6, n = s(this, re).length; i < n; i += 6) {
      if (isNaN(s(this, re)[i])) {
        e.push(`L${s(this, re)[i + 4]} ${s(this, re)[i + 5]}`);
        continue;
      }
      e.push(`C${s(this, re)[i]} ${s(this, re)[i + 1]} ${s(this, re)[i + 2]} ${s(this, re)[i + 3]} ${s(this, re)[i + 4]} ${s(this, re)[i + 5]}`);
    }
    return e.push('Z'), e.join(' ');
  }

  serialize([e, i, n, r], a) {
    const o = n - e; const
      l = r - i;
    let c; let
      d;
    switch (a) {
      case 0:
        c = Z._rescale(s(this, re), e, r, o, -l), d = Z._rescale(s(this, wi), e, r, o, -l);
        break;
      case 90:
        c = Z._rescaleAndSwap(s(this, re), e, i, o, l), d = Z._rescaleAndSwap(s(this, wi), e, i, o, l);
        break;
      case 180:
        c = Z._rescale(s(this, re), n, i, -o, l), d = Z._rescale(s(this, wi), n, i, -o, l);
        break;
      case 270:
        c = Z._rescaleAndSwap(s(this, re), n, r, -o, -l), d = Z._rescaleAndSwap(s(this, wi), n, r, -o, -l);
        break;
    }
    return {
      outline: Array.from(c),
      points: [Array.from(d)],
    };
  }

  get box() {
    return s(this, Ga);
  }

  newOutliner(e, i, n, r, a, o = 0) {
    return new Nu(e, i, n, r, a, o);
  }

  getNewOutline(e, i) {
    const [n, r, a, o] = s(this, Ga); const [l, c, d, u] = s(this, jl); const g = a * d; const b = o * u; const C = n * d + l; const S = r * u + c; const
      L = this.newOutliner({
        x: s(this, wi)[0] * g + C,
        y: s(this, wi)[1] * b + S,
      }, s(this, jl), s(this, pd), e, s(this, fd), i ?? s(this, Es));
    for (let k = 2; k < s(this, wi).length; k += 2) {
      L.add({
        x: s(this, wi)[k] * g + C,
        y: s(this, wi)[k + 1] * b + S,
      });
    }
    return L.getOutlines();
  }
}
jl = new WeakMap(), Ga = new WeakMap(), Es = new WeakMap(), fd = new WeakMap(), wi = new WeakMap(), pd = new WeakMap(), re = new WeakMap(), rf = new WeakSet(), Ib = function (e) {
  const i = s(this, re);
  let n = i[4]; let
    r = i[5];
  const a = [n, r, n, r];
  let o = n; let l = r; let c = n; let
    d = r;
  const u = e ? Math.max : Math.min; const
    g = new Float32Array(4);
  for (let C = 6, S = i.length; C < S; C += 6) {
    const L = i[C + 4]; const
      k = i[C + 5];
    isNaN(i[C]) ? (tt.pointBoundingBox(L, k, a), l > k ? (o = L, l = k) : l === k && (o = u(o, L)), d < k ? (c = L, d = k) : d === k && (c = u(c, L))) : (g[0] = g[1] = 1 / 0, g[2] = g[3] = -1 / 0, tt.bezierBoundingBox(n, r, ...i.slice(C, C + 6), g), tt.rectBoundingBox(g[0], g[1], g[2], g[3], a), l > g[1] ? (o = g[0], l = g[1]) : l === g[1] && (o = u(o, g[0])), d < g[3] ? (c = g[2], d = g[3]) : d === g[3] && (c = u(c, g[2]))), n = L, r = k;
  }
  const b = s(this, Ga);
  b[0] = a[0] - s(this, Es), b[1] = a[1] - s(this, Es), b[2] = a[2] - a[0] + 2 * s(this, Es), b[3] = a[3] - a[1] + 2 * s(this, Es), this.firstPoint = [o, l], this.lastPoint = [c, d];
};
let gd; let md; let yd; let Ar; let sn; let Ke; let Fb; let mu; let Nb; let Bb; let
  Vp;
class Gp {
  constructor(t, e = 0, i = 0, n = !0) {
    v(this, Ke);
    v(this, gd);
    v(this, md);
    v(this, yd);
    v(this, Ar, []);
    v(this, sn, []);
    const r = [1 / 0, 1 / 0, -1 / 0, -1 / 0]; const
      a = 10 ** -4;
    for (const {
      x: S,
      y: L,
      width: k,
      height: M,
    } of t) {
      const R = Math.floor((S - e) / a) * a; const p = Math.ceil((S + k + e) / a) * a; const f = Math.floor((L - e) / a) * a; const y = Math.ceil((L + M + e) / a) * a; const _ = [R, f, y, !0]; const
        T = [p, f, y, !1];
      s(this, Ar).push(_, T), tt.rectBoundingBox(R, f, p, y, r);
    }
    const o = r[2] - r[0] + 2 * i; const l = r[3] - r[1] + 2 * i; const c = r[0] - i; const
      d = r[1] - i;
    let u = n ? -1 / 0 : 1 / 0; let
      g = 1 / 0;
    const b = s(this, Ar).at(n ? -1 : -2); const
      C = [b[0], b[2]];
    for (const S of s(this, Ar)) {
      const [L, k, M, R] = S;
      !R && n ? k < g ? (g = k, u = L) : k === g && (u = Math.max(u, L)) : R && !n && (k < g ? (g = k, u = L) : k === g && (u = Math.min(u, L))), S[0] = (L - c) / o, S[1] = (k - d) / l, S[2] = (M - d) / l;
    }
    m(this, gd, new Float32Array([c, d, o, l])), m(this, md, [u, g]), m(this, yd, C);
  }

  getOutlines() {
    s(this, Ar).sort((e, i) => e[0] - i[0] || e[1] - i[1] || e[2] - i[2]);
    const t = [];
    for (const e of s(this, Ar)) e[3] ? (t.push(...A(this, Ke, Vp).call(this, e)), A(this, Ke, Nb).call(this, e)) : (A(this, Ke, Bb).call(this, e), t.push(...A(this, Ke, Vp).call(this, e)));
    return A(this, Ke, Fb).call(this, t);
  }
}
gd = new WeakMap(), md = new WeakMap(), yd = new WeakMap(), Ar = new WeakMap(), sn = new WeakMap(), Ke = new WeakSet(), Fb = function (t) {
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
  const n = [];
  let r;
  for (; i.size > 0;) {
    const a = i.values().next().value;
    let [o, l, c, d, u] = a;
    i.delete(a);
    let g = o; let
      b = l;
    for (r = [o, c], n.push(r); ;) {
      let C;
      if (i.has(d)) C = d;
      else if (i.has(u)) C = u;
      else break;
      i.delete(C), [o, l, c, d, u] = C, g !== o && (r.push(g, b, o, b === l ? l : c), g = o), b = b === l ? c : l;
    }
    r.push(g, b);
  }
  return new sS(n, s(this, gd), s(this, md), s(this, yd));
}, mu = function (t) {
  const e = s(this, sn);
  let i = 0; let
    n = e.length - 1;
  for (; i <= n;) {
    const r = i + n >> 1; const
      a = e[r][0];
    if (a === t) return r;
    a < t ? i = r + 1 : n = r - 1;
  }
  return n + 1;
}, Nb = function ([, t, e]) {
  const i = A(this, Ke, mu).call(this, t);
  s(this, sn).splice(i, 0, [t, e]);
}, Bb = function ([, t, e]) {
  const i = A(this, Ke, mu).call(this, t);
  for (let n = i; n < s(this, sn).length; n++) {
    const [r, a] = s(this, sn)[n];
    if (r !== t) break;
    if (r === t && a === e) {
      s(this, sn).splice(n, 1);
      return;
    }
  }
  for (let n = i - 1; n >= 0; n--) {
    const [r, a] = s(this, sn)[n];
    if (r !== t) break;
    if (r === t && a === e) {
      s(this, sn).splice(n, 1);
      return;
    }
  }
}, Vp = function (t) {
  const [e, i, n] = t; const r = [[e, i, n]]; const
    a = A(this, Ke, mu).call(this, n);
  for (let o = 0; o < a; o++) {
    const [l, c] = s(this, sn)[o];
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
class sS extends Z {
  constructor(e, i, n, r) {
    super();
    v(this, bd);
    v(this, zl);
    m(this, zl, e), m(this, bd, i), this.firstPoint = n, this.lastPoint = r;
  }

  toSVGPath() {
    const e = [];
    for (const i of s(this, zl)) {
      let [n, r] = i;
      e.push(`M${n} ${r}`);
      for (let a = 2; a < i.length; a += 2) {
        const o = i[a]; const
          l = i[a + 1];
        o === n ? (e.push(`V${l}`), r = l) : l === r && (e.push(`H${o}`), n = o);
      }
      e.push('Z');
    }
    return e.join(' ');
  }

  serialize([e, i, n, r], a) {
    const o = []; const l = n - e; const
      c = r - i;
    for (const d of s(this, zl)) {
      const u = new Array(d.length);
      for (let g = 0; g < d.length; g += 2) u[g] = e + d[g] * l, u[g + 1] = r - d[g + 1] * c;
      o.push(u);
    }
    return o;
  }

  get box() {
    return s(this, bd);
  }

  get classNamesForOutlining() {
    return ['highlightOutline'];
  }
}
bd = new WeakMap(), zl = new WeakMap();
class qp extends Nu {
  newFreeDrawOutline(t, e, i, n, r, a) {
    return new rS(t, e, i, n, r, a);
  }
}
class rS extends Ob {
  newOutliner(t, e, i, n, r, a = 0) {
    return new qp(t, e, i, n, r, a);
  }
}
let $l; let vd; let Cs; let Va; let wd; let si; let Sd; let Ad; let qa; let Si; let Ai; let ke; let Ul; let Wl; let je; let Gl; let $i; let _d; let bt; let Xp; let yu; let Hb; let jb; let zb; let Yp; let Gr; let Wi; let So; let $b; let bu; let vu; let Ub; let Wb; let Gb; let Vb; let
  qb;
const Tt = class Tt extends Ut {
  constructor(e) {
    super({
      ...e,
      name: 'highlightEditor',
    });
    v(this, bt);
    v(this, $l, null);
    v(this, vd, 0);
    v(this, Cs);
    v(this, Va, null);
    v(this, wd, null);
    v(this, si, null);
    v(this, Sd, null);
    v(this, Ad, 0);
    v(this, qa, null);
    v(this, Si, null);
    v(this, Ai, null);
    v(this, ke, !1);
    v(this, Ul, null);
    v(this, Wl, null);
    v(this, je, null);
    v(this, Gl, '');
    v(this, $i);
    v(this, _d, '');
    this.color = e.color || Tt._defaultColor, m(this, $i, e.thickness || Tt._defaultThickness), this.opacity = e.opacity || Tt._defaultOpacity, m(this, Cs, e.boxes || null), m(this, _d, e.methodOfCreation || ''), m(this, Gl, e.text || ''), this._isDraggable = !1, this.defaultL10nId = 'pdfjs-editor-highlight-editor', e.highlightId > -1 ? (m(this, ke, !0), A(this, bt, yu).call(this, e), A(this, bt, Gr).call(this)) : s(this, Cs) && (m(this, $l, e.anchorNode), m(this, vd, e.anchorOffset), m(this, Sd, e.focusNode), m(this, Ad, e.focusOffset), A(this, bt, Xp).call(this), A(this, bt, Gr).call(this), this.rotate(this.rotation)), this.annotationElementId || this._uiManager.a11yAlert('pdfjs-editor-highlight-added-alert');
  }

  static get _keyboardManager() {
    const e = Tt.prototype;
    return yt(this, '_keyboardManager', new Md([[['ArrowLeft', 'mac+ArrowLeft'], e._moveCaret, {
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
      type: s(this, ke) ? 'free_highlight' : 'highlight',
      color: this._uiManager.getNonHCMColorName(this.color),
      thickness: s(this, $i),
      methodOfCreation: s(this, _d),
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
    let n;
    Ut.initialize(e, i), Tt._defaultColor || (Tt._defaultColor = ((n = i.highlightColors) == null ? void 0 : n.values().next().value) || '#fff066');
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
    return s(this, Wl);
  }

  get commentButtonPosition() {
    return s(this, Ul);
  }

  updateParams(e, i) {
    switch (e) {
      case At.HIGHLIGHT_COLOR:
        A(this, bt, Hb).call(this, i);
        break;
      case At.HIGHLIGHT_THICKNESS:
        A(this, bt, jb).call(this, i);
        break;
    }
  }

  static get defaultPropertiesToUpdate() {
    return [[At.HIGHLIGHT_COLOR, Tt._defaultColor], [At.HIGHLIGHT_THICKNESS, Tt._defaultThickness]];
  }

  get propertiesToUpdate() {
    return [[At.HIGHLIGHT_COLOR, this.color || Tt._defaultColor], [At.HIGHLIGHT_THICKNESS, s(this, $i) || Tt._defaultThickness], [At.HIGHLIGHT_FREE, s(this, ke)]];
  }

  onUpdatedColor() {
    let e; let
      i;
    (e = this.parent) == null || e.drawLayer.updateProperties(s(this, Ai), {
      root: {
        fill: this.color,
        'fill-opacity': this.opacity,
      },
    }), (i = s(this, wd)) == null || i.updateColor(this.color), super.onUpdatedColor();
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
    this.parent && (super.rebuild(), this.div !== null && (A(this, bt, Gr).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }

  setParent(e) {
    let n;
    let i = !1;
    this.parent && !e ? A(this, bt, Yp).call(this) : e && (A(this, bt, Gr).call(this, e), i = !this.parent && ((n = this.div) == null ? void 0 : n.classList.contains('selectedEditor'))), super.setParent(e), this.show(this._isVisible), i && this.select();
  }

  rotate(e) {
    let r; let a; let
      o;
    const {
      drawLayer: i,
    } = this.parent;
    let n;
    s(this, ke) ? (e = (e - this.rotation + 360) % 360, n = A(r = Tt, Wi, So).call(r, s(this, Si).box, e)) : n = A(a = Tt, Wi, So).call(a, [this.x, this.y, this.width, this.height], e), i.updateProperties(s(this, Ai), {
      bbox: n,
      root: {
        'data-main-rotation': e,
      },
    }), i.updateProperties(s(this, je), {
      bbox: A(o = Tt, Wi, So).call(o, s(this, si).box, e),
      root: {
        'data-main-rotation': e,
      },
    });
  }

  render() {
    if (this.div) return this.div;
    const e = super.render();
    s(this, Gl) && (e.setAttribute('aria-label', s(this, Gl)), e.setAttribute('role', 'mark')), s(this, ke) ? e.classList.add('free') : this.div.addEventListener('keydown', A(this, bt, $b).bind(this), {
      signal: this._uiManager._signal,
    });
    const i = m(this, qa, document.createElement('div'));
    return e.append(i), i.setAttribute('aria-hidden', 'true'), i.className = 'internal', i.style.clipPath = s(this, Va), this.setDims(this.width, this.height), fy(this, s(this, qa), ['pointerover', 'pointerleave']), this.enableEditing(), e;
  }

  pointerover() {
    let e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(s(this, je), {
      rootClass: {
        hovered: !0,
      },
    });
  }

  pointerleave() {
    let e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(s(this, je), {
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
    super.select(), s(this, je) && ((e = this.parent) == null || e.drawLayer.updateProperties(s(this, je), {
      rootClass: {
        hovered: !1,
        selected: !0,
      },
    }));
  }

  unselect() {
    let e;
    super.unselect(), s(this, je) && ((e = this.parent) == null || e.drawLayer.updateProperties(s(this, je), {
      rootClass: {
        selected: !1,
      },
    }), s(this, ke) || A(this, bt, bu).call(this, !1));
  }

  get _mustFixPosition() {
    return !s(this, ke);
  }

  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.updateProperties(s(this, Ai), {
      rootClass: {
        hidden: !e,
      },
    }), this.parent.drawLayer.updateProperties(s(this, je), {
      rootClass: {
        hidden: !e,
      },
    }));
  }

  static startHighlighting(e, i, {
    target: n,
    x: r,
    y: a,
  }) {
    const {
      x: o,
      y: l,
      width: c,
      height: d,
    } = n.getBoundingClientRect(); const u = new AbortController(); const g = e.combinedSignal(u); const
      b = (C) => {
        u.abort(), A(this, Wi, Vb).call(this, e, C);
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
    }), n.addEventListener('pointermove', A(this, Wi, Gb).bind(this, e), {
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

  static async deserialize(e, i, n) {
    let S; let L; let k; let
      M;
    let r = null;
    if (e instanceof Sb) {
      const {
        data: {
          quadPoints: R,
          rect: p,
          rotation: f,
          id: y,
          color: _,
          opacity: T,
          popupRef: P,
          richText: E,
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
        opacity: T,
        quadPoints: R,
        boxes: null,
        pageIndex: B - 1,
        rect: p.slice(0),
        rotation: f,
        annotationElementId: y,
        id: y,
        deleted: !1,
        popupRef: P,
        richText: E,
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
            rawWidth: T,
          },
          popupRef: P,
          richText: E,
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
        thickness: T,
        inkLists: R,
        boxes: null,
        pageIndex: B - 1,
        rect: p.slice(0),
        rotation: f,
        annotationElementId: y,
        id: y,
        deleted: !1,
        popupRef: P,
        richText: E,
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
      d = await super.deserialize(e, i, n);
    d.color = tt.makeHexColor(...a), d.opacity = c || 1, l && m(d, $i, e.thickness), d._initialData = r, e.comment && d.setCommentData(e);
    const [u, g] = d.pageDimensions; const
      [b, C] = d.pageTranslation;
    if (o) {
      const R = m(d, Cs, []);
      for (let p = 0; p < o.length; p += 8) {
        R.push({
          x: (o[p] - b) / u,
          y: 1 - (o[p + 1] - C) / g,
          width: (o[p + 2] - o[p]) / u,
          height: (o[p + 1] - o[p + 5]) / g,
        });
      }
      A(S = d, bt, Xp).call(S), A(L = d, bt, Gr).call(L), d.rotate(d.rotation);
    } else if (l) {
      m(d, ke, !0);
      const R = l[0]; const p = {
        x: R[0] - b,
        y: g - (R[1] - C),
      }; const
        f = new qp(p, [0, 0, u, g], 1, s(d, $i) / 2, !0, 1e-3);
      for (let T = 0, P = R.length; T < P; T += 2) p.x = R[T] - b, p.y = g - (R[T + 1] - C), f.add(p);
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
      A(k = d, bt, yu).call(k, {
        highlightOutlines: f.getOutlines(),
        highlightId: y,
        clipPathId: _,
      }), A(M = d, bt, Gr).call(M), d.rotate(d.parentRotation);
    }
    return d;
  }

  serialize(e = !1) {
    if (this.isEmpty() || e) return null;
    if (this.deleted) return this.serializeDeleted();
    const i = Ut._colorManager.convert(this._uiManager.getNonHCMColor(this.color)); const
      n = super.serialize(e);
    return Object.assign(n, {
      color: i,
      opacity: this.opacity,
      thickness: s(this, $i),
      quadPoints: A(this, bt, Ub).call(this),
      outlines: A(this, bt, Wb).call(this, n.rect),
    }), this.addComment(n), this.annotationElementId && !A(this, bt, qb).call(this, n) ? null : (n.id = this.annotationElementId, n);
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
$l = new WeakMap(), vd = new WeakMap(), Cs = new WeakMap(), Va = new WeakMap(), wd = new WeakMap(), si = new WeakMap(), Sd = new WeakMap(), Ad = new WeakMap(), qa = new WeakMap(), Si = new WeakMap(), Ai = new WeakMap(), ke = new WeakMap(), Ul = new WeakMap(), Wl = new WeakMap(), je = new WeakMap(), Gl = new WeakMap(), $i = new WeakMap(), _d = new WeakMap(), bt = new WeakSet(), Xp = function () {
  const e = new Gp(s(this, Cs), 1e-3);
  m(this, Si, e.getOutlines()), [this.x, this.y, this.width, this.height] = s(this, Si).box;
  const i = new Gp(s(this, Cs), 25e-4, 1e-3, this._uiManager.direction === 'ltr');
  m(this, si, i.getOutlines());
  const {
    firstPoint: n,
  } = s(this, Si);
  m(this, Ul, [(n[0] - this.x) / this.width, (n[1] - this.y) / this.height]);
  const {
    lastPoint: r,
  } = s(this, si);
  m(this, Wl, [(r[0] - this.x) / this.width, (r[1] - this.y) / this.height]);
}, yu = function ({
  highlightOutlines: e,
  highlightId: i,
  clipPathId: n,
}) {
  let g; let
    b;
  if (m(this, Si, e), m(this, si, e.getNewOutline(s(this, $i) / 2 + 1.5, 25e-4)), i >= 0) {
    m(this, Ai, i), m(this, Va, n), this.parent.drawLayer.finalizeDraw(i, {
      bbox: e.box,
      path: {
        d: e.toSVGPath(),
      },
    }), m(this, je, this.parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: !0,
        free: !0,
      },
      bbox: s(this, si).box,
      path: {
        d: s(this, si).toSVGPath(),
      },
    }, !0));
  } else if (this.parent) {
    const C = this.parent.viewport.rotation;
    this.parent.drawLayer.updateProperties(s(this, Ai), {
      bbox: A(g = Tt, Wi, So).call(g, s(this, Si).box, (C - this.rotation + 360) % 360),
      path: {
        d: e.toSVGPath(),
      },
    }), this.parent.drawLayer.updateProperties(s(this, je), {
      bbox: A(b = Tt, Wi, So).call(b, s(this, si).box, C),
      path: {
        d: s(this, si).toSVGPath(),
      },
    });
  }
  const [a, o, l, c] = e.box;
  switch (this.rotation) {
    case 0:
      this.x = a, this.y = o, this.width = l, this.height = c;
      break;
    case 90: {
      const [C, S] = this.parentDimensions;
      this.x = o, this.y = 1 - a, this.width = l * S / C, this.height = c * C / S;
      break;
    }
    case 180:
      this.x = 1 - a, this.y = 1 - o, this.width = l, this.height = c;
      break;
    case 270: {
      const [C, S] = this.parentDimensions;
      this.x = 1 - o, this.y = a, this.width = l * S / C, this.height = c * C / S;
      break;
    }
  }
  const {
    firstPoint: d,
  } = e;
  m(this, Ul, [(d[0] - a) / l, (d[1] - o) / c]);
  const {
    lastPoint: u,
  } = s(this, si);
  m(this, Wl, [(u[0] - a) / l, (u[1] - o) / c]);
}, Hb = function (e) {
  const i = (a, o) => {
    this.color = a, this.opacity = o, this.onUpdatedColor();
  }; const n = this.color; const
    r = this.opacity;
  this.addCommands({
    cmd: i.bind(this, e, Tt._defaultOpacity),
    undo: i.bind(this, n, r),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: At.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0,
  }), this._reportTelemetry({
    action: 'color_changed',
    color: this._uiManager.getNonHCMColorName(e),
  }, !0);
}, jb = function (e) {
  const i = s(this, $i); const
    n = (r) => {
      m(this, $i, r), A(this, bt, zb).call(this, r);
    };
  this.addCommands({
    cmd: n.bind(this, e),
    undo: n.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: At.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0,
  }), this._reportTelemetry({
    action: 'thickness_changed',
    thickness: e,
  }, !0);
}, zb = function (e) {
  s(this, ke) && (A(this, bt, yu).call(this, {
    highlightOutlines: s(this, Si).getNewOutline(e / 2),
  }), this.fixAndSetPosition(), this.setDims(this.width, this.height));
}, Yp = function () {
  s(this, Ai) === null || !this.parent || (this.parent.drawLayer.remove(s(this, Ai)), m(this, Ai, null), this.parent.drawLayer.remove(s(this, je)), m(this, je, null));
}, Gr = function (e = this.parent) {
  s(this, Ai) === null && ({
    id: de(this, Ai)._,
    clipPathId: de(this, Va)._,
  } = e.drawLayer.draw({
    bbox: s(this, Si).box,
    root: {
      viewBox: '0 0 1 1',
      fill: this.color,
      'fill-opacity': this.opacity,
    },
    rootClass: {
      highlight: !0,
      free: s(this, ke),
    },
    path: {
      d: s(this, Si).toSVGPath(),
    },
  }, !1, !0), m(this, je, e.drawLayer.drawOutline({
    rootClass: {
      highlightOutline: !0,
      free: s(this, ke),
    },
    bbox: s(this, si).box,
    path: {
      d: s(this, si).toSVGPath(),
    },
  }, s(this, ke))), s(this, qa) && (s(this, qa).style.clipPath = s(this, Va)));
}, Wi = new WeakSet(), So = function ([e, i, n, r], a) {
  switch (a) {
    case 90:
      return [1 - i - r, e, r, n];
    case 180:
      return [1 - e - n, 1 - i - r, n, r];
    case 270:
      return [i, 1 - e - n, r, n];
  }
  return [e, i, n, r];
}, $b = function (e) {
  Tt._keyboardManager.exec(this, e);
}, bu = function (e) {
  if (!s(this, $l)) return;
  const i = window.getSelection();
  e ? i.setPosition(s(this, $l), s(this, vd)) : i.setPosition(s(this, Sd), s(this, Ad));
}, vu = function () {
  return s(this, ke) ? this.rotation : 0;
}, Ub = function () {
  if (s(this, ke)) return null;
  const [e, i] = this.pageDimensions; const [n, r] = this.pageTranslation; const a = s(this, Cs); const
    o = new Float32Array(a.length * 8);
  let l = 0;
  for (const {
    x: c,
    y: d,
    width: u,
    height: g,
  } of a) {
    const b = c * e + n; const
      C = (1 - d) * i + r;
    o[l] = o[l + 4] = b, o[l + 1] = o[l + 3] = C, o[l + 2] = o[l + 6] = b + u * e, o[l + 5] = o[l + 7] = C - g * i, l += 8;
  }
  return o;
}, Wb = function (e) {
  return s(this, Si).serialize(e, A(this, bt, vu).call(this));
}, Gb = function (e, i) {
  this._freeHighlight.add(i) && e.drawLayer.updateProperties(this._freeHighlightId, {
    path: {
      d: this._freeHighlight.toSVGPath(),
    },
  });
}, Vb = function (e, i) {
  this._freeHighlight.isEmpty() ? e.drawLayer.remove(this._freeHighlightId) : e.createAndAddNewEditor(i, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: 'main_toolbar',
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = '';
}, qb = function (e) {
  const {
    color: i,
  } = this._initialData;
  return this.hasEditedComment || e.color.some((n, r) => n !== i[r]);
}, v(Tt, Wi), V(Tt, '_defaultColor', null), V(Tt, '_defaultOpacity', 1), V(Tt, '_defaultThickness', 12), V(Tt, '_type', 'highlight'), V(Tt, '_editorType', ft.HIGHLIGHT), V(Tt, '_freeHighlightId', -1), V(Tt, '_freeHighlight', null), V(Tt, '_freeHighlightClipId', '');
const Bu = Tt;
let Xa;
class Xb {
  constructor() {
    v(this, Xa, /* @__PURE__ */ Object.create(null));
  }

  updateProperty(t, e) {
    this[t] = e, this.updateSVGProperty(t, e);
  }

  updateProperties(t) {
    if (t) for (const [e, i] of Object.entries(t)) e.startsWith('_') || this.updateProperty(e, i);
  }

  updateSVGProperty(t, e) {
    s(this, Xa)[t] = e;
  }

  toSVGProperties() {
    const t = s(this, Xa);
    return m(this, Xa, /* @__PURE__ */ Object.create(null)), {
      root: t,
    };
  }

  reset() {
    m(this, Xa, /* @__PURE__ */ Object.create(null));
  }

  updateAll(t = this) {
    this.updateProperties(t);
  }

  clone() {
    zt('Not implemented');
  }
}
Xa = new WeakMap();
let _i; let Vl; let be; let Ya; let Ka; let _r; let xr; let Er; let Ja; let xt; let Kp; let Jp; let Qp; let Dh; let Yb; let wu; let Oh; let
  Ao;
const et = class et extends Ut {
  constructor(e) {
    super(e);
    v(this, xt);
    v(this, _i, null);
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
    const n = new Set(Object.keys(e));
    for (const [r, a] of Object.entries(i)) n.has(r) ? Object.assign(e[r], a) : e[r] = a;
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
    const n = this.typesMap.get(e);
    n && this._defaultDrawingOptions.updateProperty(n, i), this._currentParent && (s(et, be).updateProperty(n, i), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }

  updateParams(e, i) {
    const n = this.constructor.typesMap.get(e);
    n && this._updateProperty(e, n, i);
  }

  static get defaultPropertiesToUpdate() {
    const e = []; const
      i = this._defaultDrawingOptions;
    for (const [n, r] of this.typesMap) e.push([n, i[r]]);
    return e;
  }

  get propertiesToUpdate() {
    const e = []; const
      {
        _drawingOptions: i,
      } = this;
    for (const [n, r] of this.constructor.typesMap) e.push([n, i[r]]);
    return e;
  }

  _updateProperty(e, i, n) {
    const r = this._drawingOptions; const a = r[i]; const
      o = (l) => {
        let d;
        r.updateProperty(i, l);
        const c = s(this, _i).updateProperty(i, l);
        c && A(this, xt, Oh).call(this, c), (d = this.parent) == null || d.drawLayer.updateProperties(this._drawId, r.toSVGProperties()), e === this.colorType && this.onUpdatedColor();
      };
    this.addCommands({
      cmd: o.bind(this, n),
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
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, et._mergeSVGProperties(s(this, _i).getPathResizingSVGProperties(A(this, xt, wu).call(this)), {
      bbox: A(this, xt, Ao).call(this),
    }));
  }

  _onResized() {
    let e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, et._mergeSVGProperties(s(this, _i).getPathResizedSVGProperties(A(this, xt, wu).call(this)), {
      bbox: A(this, xt, Ao).call(this),
    }));
  }

  _onTranslating(e, i) {
    let n;
    (n = this.parent) == null || n.drawLayer.updateProperties(this._drawId, {
      bbox: A(this, xt, Ao).call(this),
    });
  }

  _onTranslated() {
    let e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, et._mergeSVGProperties(s(this, _i).getPathTranslatedSVGProperties(A(this, xt, wu).call(this), this.parentDimensions), {
      bbox: A(this, xt, Ao).call(this),
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
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, s(this, Vl) && (m(this, Vl, !1), this.commit(), this.parent.setSelected(this), e && this.isOnScreen && this.div.focus());
  }

  remove() {
    A(this, xt, Qp).call(this), super.remove();
  }

  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (A(this, xt, Dh).call(this), A(this, xt, Oh).call(this, s(this, _i).box), this.isAttachedToDOM || this.parent.add(this)));
  }

  setParent(e) {
    let n;
    let i = !1;
    this.parent && !e ? (this._uiManager.removeShouldRescale(this), A(this, xt, Qp).call(this)) : e && (this._uiManager.addShouldRescale(this), A(this, xt, Dh).call(this, e), i = !this.parent && ((n = this.div) == null ? void 0 : n.classList.contains('selectedEditor'))), super.setParent(e), i && this.select();
  }

  rotate() {
    this.parent && this.parent.drawLayer.updateProperties(this._drawId, et._mergeSVGProperties({
      bbox: A(this, xt, Ao).call(this),
    }, s(this, _i).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }

  onScaleChanging() {
    this.parent && A(this, xt, Oh).call(this, s(this, _i).updateParentDimensions(this.parentDimensions, this.parent.scale));
  }

  static onScaleChangingWhenDrawing() {
  }

  render() {
    if (this.div) return this.div;
    let e; let
      i;
    this._isCopy && (e = this.x, i = this.y);
    const n = super.render();
    n.classList.add('draw');
    const r = document.createElement('div');
    return n.append(r), r.setAttribute('aria-hidden', 'true'), r.className = 'internal', this.setDims(), this._uiManager.addShouldRescale(this), this.disableEditing(), this._isCopy && this._moveAfterPaste(e, i), n;
  }

  static createDrawerInstance(e, i, n, r, a) {
    zt('Not implemented');
  }

  static startDrawing(e, i, n, r) {
    let L;
    const {
      target: a,
      offsetX: o,
      offsetY: l,
      pointerId: c,
      pointerType: d,
    } = r;
    if (s(et, xr) && s(et, xr) !== d) return;
    const {
      viewport: {
        rotation: u,
      },
    } = e; const {
      width: g,
      height: b,
    } = a.getBoundingClientRect(); const C = m(et, Ya, new AbortController()); const
      S = e.combinedSignal(C);
    if (s(et, _r) || m(et, _r, c), s(et, xr) ?? m(et, xr, d), window.addEventListener('pointerup', (k) => {
      let M;
      s(et, _r) === k.pointerId ? this._endDraw(k) : (M = s(et, Er)) == null || M.delete(k.pointerId);
    }, {
      signal: S,
    }), window.addEventListener('pointercancel', (k) => {
      let M;
      s(et, _r) === k.pointerId ? this._currentParent.endDrawingSession() : (M = s(et, Er)) == null || M.delete(k.pointerId);
    }, {
      signal: S,
    }), window.addEventListener('pointerdown', (k) => {
      s(et, xr) === k.pointerType && ((s(et, Er) || m(et, Er, /* @__PURE__ */ new Set())).add(k.pointerId), s(et, be).isCancellable() && (s(et, be).removeLastElement(), s(et, be).isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null)));
    }, {
      capture: !0,
      passive: !1,
      signal: S,
    }), window.addEventListener('contextmenu', Ri, {
      signal: S,
    }), a.addEventListener('pointermove', this._drawMove.bind(this), {
      signal: S,
    }), a.addEventListener('touchmove', (k) => {
      k.timeStamp === s(et, Ja) && Kt(k);
    }, {
      signal: S,
    }), e.toggleDrawing(), (L = i._editorUndoBar) == null || L.hide(), s(et, be)) {
      e.drawLayer.updateProperties(this._currentDrawId, s(et, be).startNew(o, l, g, b, u));
      return;
    }
    i.updateUIForDefaultProperties(this), m(et, be, this.createDrawerInstance(o, l, g, b, u)), m(et, Ka, this.getDefaultDrawingOptions()), this._currentParent = e, {
      id: this._currentDrawId,
    } = e.drawLayer.draw(this._mergeSVGProperties(s(et, Ka).toSVGProperties(), s(et, be).defaultSVGProperties), !0, !1);
  }

  static _drawMove(e) {
    let a;
    if (m(et, Ja, -1), !s(et, be)) return;
    const {
      offsetX: i,
      offsetY: n,
      pointerId: r,
    } = e;
    if (s(et, _r) === r) {
      if (((a = s(et, Er)) == null ? void 0 : a.size) >= 1) {
        this._endDraw(e);
        return;
      }
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, s(et, be).add(i, n)), m(et, Ja, e.timeStamp), Kt(e);
    }
  }

  static _cleanup(e) {
    e && (this._currentDrawId = -1, this._currentParent = null, m(et, be, null), m(et, Ka, null), m(et, xr, null), m(et, Ja, NaN)), s(et, Ya) && (s(et, Ya).abort(), m(et, Ya, null), m(et, _r, NaN), m(et, Er, null));
  }

  static _endDraw(e) {
    const i = this._currentParent;
    if (i) {
      if (i.toggleDrawing(!0), this._cleanup(!1), (e == null ? void 0 : e.target) === i.div && i.drawLayer.updateProperties(this._currentDrawId, s(et, be).end(e.offsetX, e.offsetY)), this.supportMultipleDrawings) {
        const n = s(et, be); const r = this._currentDrawId; const
          a = n.getLastElement();
        i.addCommands({
          cmd: () => {
            i.drawLayer.updateProperties(r, n.setLastElement(a));
          },
          undo: () => {
            i.drawLayer.updateProperties(r, n.removeLastElement());
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
    if (i.toggleDrawing(!0), i.cleanUndoStack(At.DRAW_STEP), !s(et, be).isEmpty()) {
      const {
        pageDimensions: [n, r],
        scale: a,
      } = i; const
        o = i.createAndAddNewEditor({
          offsetX: 0,
          offsetY: 0,
        }, !1, {
          drawId: this._currentDrawId,
          drawOutlines: s(et, be).getOutlines(n * a, r * a, a, this._INNER_MARGIN),
          drawingOptions: s(et, Ka),
          mustBeCommitted: !e,
        });
      return this._cleanup(!0), o;
    }
    return i.drawLayer.remove(this._currentDrawId), this._cleanup(!0), null;
  }

  createDrawingOptions(e) {
  }

  static deserializeDraw(e, i, n, r, a, o) {
    zt('Not implemented');
  }

  static async deserialize(e, i, n) {
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
      d = await super.deserialize(e, i, n);
    return d.createDrawingOptions(e), A(u = d, xt, Kp).call(u, {
      drawOutlines: c,
    }), A(g = d, xt, Dh).call(g), d.onScaleChanging(), d.rotate(), d;
  }

  serializeDraw(e) {
    const [i, n] = this.pageTranslation; const
      [r, a] = this.pageDimensions;
    return s(this, _i).serialize([i, n, r, a], e);
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
_i = new WeakMap(), Vl = new WeakMap(), be = new WeakMap(), Ya = new WeakMap(), Ka = new WeakMap(), _r = new WeakMap(), xr = new WeakMap(), Er = new WeakMap(), Ja = new WeakMap(), xt = new WeakSet(), Kp = function ({
  drawOutlines: e,
  drawId: i,
  drawingOptions: n,
}) {
  m(this, _i, e), this._drawingOptions || (this._drawingOptions = n), this.annotationElementId || this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`), i >= 0 ? (this._drawId = i, this.parent.drawLayer.finalizeDraw(i, e.defaultProperties)) : this._drawId = A(this, xt, Jp).call(this, e, this.parent), A(this, xt, Oh).call(this, e.box);
}, Jp = function (e, i) {
  const {
    id: n,
  } = i.drawLayer.draw(et._mergeSVGProperties(this._drawingOptions.toSVGProperties(), e.defaultSVGProperties), !1, !1);
  return n;
}, Qp = function () {
  this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
}, Dh = function (e = this.parent) {
  if (!(this._drawId !== null && this.parent === e)) {
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, e.drawLayer);
      return;
    }
    this._drawingOptions.updateAll(), this._drawId = A(this, xt, Jp).call(this, s(this, _i), e);
  }
}, Yb = function ([e, i, n, r]) {
  const {
    parentDimensions: [a, o],
    rotation: l,
  } = this;
  switch (l) {
    case 90:
      return [i, 1 - e, n * (o / a), r * (a / o)];
    case 180:
      return [1 - e, 1 - i, n, r];
    case 270:
      return [1 - i, e, n * (o / a), r * (a / o)];
    default:
      return [e, i, n, r];
  }
}, wu = function () {
  const {
    x: e,
    y: i,
    width: n,
    height: r,
    parentDimensions: [a, o],
    rotation: l,
  } = this;
  switch (l) {
    case 90:
      return [1 - i, e, n * (a / o), r * (o / a)];
    case 180:
      return [1 - e, 1 - i, n, r];
    case 270:
      return [i, 1 - e, n * (a / o), r * (o / a)];
    default:
      return [e, i, n, r];
  }
}, Oh = function (e) {
  [this.x, this.y, this.width, this.height] = A(this, xt, Yb).call(this, e), this.div && (this.fixAndSetPosition(), this.setDims()), this._onResized();
}, Ao = function () {
  const {
    x: e,
    y: i,
    width: n,
    height: r,
    rotation: a,
    parentRotation: o,
    parentDimensions: [l, c],
  } = this;
  switch ((a * 4 + o) / 90) {
    case 1:
      return [1 - i - r, e, r, n];
    case 2:
      return [1 - e - n, 1 - i - r, n, r];
    case 3:
      return [i, 1 - e - n, r, n];
    case 4:
      return [e, i - n * (l / c), r * (c / l), n * (l / c)];
    case 5:
      return [1 - i, e, n * (l / c), r * (c / l)];
    case 6:
      return [1 - e - r * (c / l), 1 - i, r * (c / l), n * (l / c)];
    case 7:
      return [i - n * (l / c), 1 - e - r * (c / l), n * (l / c), r * (c / l)];
    case 8:
      return [e - n, i - r, n, r];
    case 9:
      return [1 - i, e - n, r, n];
    case 10:
      return [1 - e, 1 - i, n, r];
    case 11:
      return [i - r, 1 - e, r, n];
    case 12:
      return [e - r * (c / l), i, r * (c / l), n * (l / c)];
    case 13:
      return [1 - i - n * (l / c), e - r * (c / l), n * (l / c), r * (c / l)];
    case 14:
      return [1 - e, 1 - i - n * (l / c), r * (c / l), n * (l / c)];
    case 15:
      return [i, 1 - e, n * (l / c), r * (c / l)];
    default:
      return [e, i, n, r];
  }
}, V(et, '_currentDrawId', -1), V(et, '_currentParent', null), v(et, be, null), v(et, Ya, null), v(et, Ka, null), v(et, _r, NaN), v(et, xr, null), v(et, Er, null), v(et, Ja, NaN), V(et, '_INNER_MARGIN', 3);
const Hu = et;
let In; let ve; let we; let Qa; let ql; let Ge; let Re; let Ui; let Za; let to; let eo; let Xl; let
  Su;
class aS {
  constructor(t, e, i, n, r, a) {
    v(this, Xl);
    v(this, In, new Float64Array(6));
    v(this, ve);
    v(this, we);
    v(this, Qa);
    v(this, ql);
    v(this, Ge);
    v(this, Re, '');
    v(this, Ui, 0);
    v(this, Za, new Od());
    v(this, to);
    v(this, eo);
    m(this, to, i), m(this, eo, n), m(this, Qa, r), m(this, ql, a), [t, e] = A(this, Xl, Su).call(this, t, e);
    const o = m(this, ve, [NaN, NaN, NaN, NaN, t, e]);
    m(this, Ge, [t, e]), m(this, we, [{
      line: o,
      points: s(this, Ge),
    }]), s(this, In).set(o, 0);
  }

  updateProperty(t, e) {
    t === 'stroke-width' && m(this, ql, e);
  }

  isEmpty() {
    return !s(this, we) || s(this, we).length === 0;
  }

  isCancellable() {
    return s(this, Ge).length <= 10;
  }

  add(t, e) {
    [t, e] = A(this, Xl, Su).call(this, t, e);
    const [i, n, r, a] = s(this, In).subarray(2, 6); const o = t - r; const
      l = e - a;
    return Math.hypot(s(this, to) * o, s(this, eo) * l) <= 2 ? null : (s(this, Ge).push(t, e), isNaN(i) ? (s(this, In).set([r, a, t, e], 2), s(this, ve).push(NaN, NaN, NaN, NaN, t, e), {
      path: {
        d: this.toSVGPath(),
      },
    }) : (isNaN(s(this, In)[0]) && s(this, ve).splice(6, 6), s(this, In).set([i, n, r, a, t, e], 0), s(this, ve).push(...Z.createBezierPoints(i, n, r, a, t, e)), {
      path: {
        d: this.toSVGPath(),
      },
    }));
  }

  end(t, e) {
    const i = this.add(t, e);
    return i || (s(this, Ge).length === 2 ? {
      path: {
        d: this.toSVGPath(),
      },
    } : null);
  }

  startNew(t, e, i, n, r) {
    m(this, to, i), m(this, eo, n), m(this, Qa, r), [t, e] = A(this, Xl, Su).call(this, t, e);
    const a = m(this, ve, [NaN, NaN, NaN, NaN, t, e]);
    m(this, Ge, [t, e]);
    const o = s(this, we).at(-1);
    return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), s(this, we).push({
      line: a,
      points: s(this, Ge),
    }), s(this, In).set(a, 0), m(this, Ui, 0), this.toSVGPath(), null;
  }

  getLastElement() {
    return s(this, we).at(-1);
  }

  setLastElement(t) {
    return s(this, we) ? (s(this, we).push(t), m(this, ve, t.line), m(this, Ge, t.points), m(this, Ui, 0), {
      path: {
        d: this.toSVGPath(),
      },
    }) : s(this, Za).setLastElement(t);
  }

  removeLastElement() {
    if (!s(this, we)) return s(this, Za).removeLastElement();
    s(this, we).pop(), m(this, Re, '');
    for (let t = 0, e = s(this, we).length; t < e; t++) {
      const {
        line: i,
        points: n,
      } = s(this, we)[t];
      m(this, ve, i), m(this, Ge, n), m(this, Ui, 0), this.toSVGPath();
    }
    return {
      path: {
        d: s(this, Re),
      },
    };
  }

  toSVGPath() {
    const t = Z.svgRound(s(this, ve)[4]); const
      e = Z.svgRound(s(this, ve)[5]);
    if (s(this, Ge).length === 2) return m(this, Re, `${s(this, Re)} M ${t} ${e} Z`), s(this, Re);
    if (s(this, Ge).length <= 6) {
      const n = s(this, Re).lastIndexOf('M');
      m(this, Re, `${s(this, Re).slice(0, n)} M ${t} ${e}`), m(this, Ui, 6);
    }
    if (s(this, Ge).length === 4) {
      const n = Z.svgRound(s(this, ve)[10]); const
        r = Z.svgRound(s(this, ve)[11]);
      return m(this, Re, `${s(this, Re)} L ${n} ${r}`), m(this, Ui, 12), s(this, Re);
    }
    const i = [];
    s(this, Ui) === 0 && (i.push(`M ${t} ${e}`), m(this, Ui, 6));
    for (let n = s(this, Ui), r = s(this, ve).length; n < r; n += 6) {
      const [a, o, l, c, d, u] = s(this, ve).slice(n, n + 6).map(Z.svgRound);
      i.push(`C${a} ${o} ${l} ${c} ${d} ${u}`);
    }
    return m(this, Re, s(this, Re) + i.join(' ')), m(this, Ui, s(this, ve).length), s(this, Re);
  }

  getOutlines(t, e, i, n) {
    const r = s(this, we).at(-1);
    return r.line = new Float32Array(r.line), r.points = new Float32Array(r.points), s(this, Za).build(s(this, we), t, e, i, s(this, Qa), s(this, ql), n), m(this, In, null), m(this, ve, null), m(this, we, null), m(this, Re, null), s(this, Za);
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
In = new WeakMap(), ve = new WeakMap(), we = new WeakMap(), Qa = new WeakMap(), ql = new WeakMap(), Ge = new WeakMap(), Re = new WeakMap(), Ui = new WeakMap(), Za = new WeakMap(), to = new WeakMap(), eo = new WeakMap(), Xl = new WeakSet(), Su = function (t, e) {
  return Z._normalizePoint(t, e, s(this, to), s(this, eo), s(this, Qa));
};
let Ve; let xd; let Ed; let xi; let Fn; let Nn; let Yl; let Kl; let io; let Me; let Xn; let Kb; let Jb; let
  Qb;
class Od extends Z {
  constructor() {
    super(...arguments);
    v(this, Me);
    v(this, Ve);
    v(this, xd, 0);
    v(this, Ed);
    v(this, xi);
    v(this, Fn);
    v(this, Nn);
    v(this, Yl);
    v(this, Kl);
    v(this, io);
  }

  build(e, i, n, r, a, o, l) {
    m(this, Fn, i), m(this, Nn, n), m(this, Yl, r), m(this, Kl, a), m(this, io, o), m(this, Ed, l ?? 0), m(this, xi, e), A(this, Me, Jb).call(this);
  }

  get thickness() {
    return s(this, io);
  }

  setLastElement(e) {
    return s(this, xi).push(e), {
      path: {
        d: this.toSVGPath(),
      },
    };
  }

  removeLastElement() {
    return s(this, xi).pop(), {
      path: {
        d: this.toSVGPath(),
      },
    };
  }

  toSVGPath() {
    const e = [];
    for (const {
      line: i,
    } of s(this, xi)) {
      if (e.push(`M${Z.svgRound(i[4])} ${Z.svgRound(i[5])}`), i.length === 6) {
        e.push('Z');
        continue;
      }
      if (i.length === 12 && isNaN(i[6])) {
        e.push(`L${Z.svgRound(i[10])} ${Z.svgRound(i[11])}`);
        continue;
      }
      for (let n = 6, r = i.length; n < r; n += 6) {
        const [a, o, l, c, d, u] = i.subarray(n, n + 6).map(Z.svgRound);
        e.push(`C${a} ${o} ${l} ${c} ${d} ${u}`);
      }
    }
    return e.join('');
  }

  serialize([e, i, n, r], a) {
    const o = []; const l = []; const
      [c, d, u, g] = A(this, Me, Kb).call(this);
    let b; let C; let S; let L; let k; let M; let R; let p; let
      f;
    switch (s(this, Kl)) {
      case 0:
        f = Z._rescale, b = e, C = i + r, S = n, L = -r, k = e + c * n, M = i + (1 - d - g) * r, R = e + (c + u) * n, p = i + (1 - d) * r;
        break;
      case 90:
        f = Z._rescaleAndSwap, b = e, C = i, S = n, L = r, k = e + d * n, M = i + c * r, R = e + (d + g) * n, p = i + (c + u) * r;
        break;
      case 180:
        f = Z._rescale, b = e + n, C = i, S = -n, L = r, k = e + (1 - c - u) * n, M = i + d * r, R = e + (1 - c) * n, p = i + (d + g) * r;
        break;
      case 270:
        f = Z._rescaleAndSwap, b = e + n, C = i + r, S = -n, L = -r, k = e + (1 - d - g) * n, M = i + (1 - c - u) * r, R = e + (1 - d) * n, p = i + (1 - c) * r;
        break;
    }
    for (const {
      line: y,
      points: _,
    } of s(this, xi)) o.push(f(y, b, C, S, L, a ? new Array(y.length) : null)), l.push(f(_, b, C, S, L, a ? new Array(_.length) : null));
    return {
      lines: o,
      points: l,
      rect: [k, M, R, p],
    };
  }

  static deserialize(e, i, n, r, a, {
    paths: {
      lines: o,
      points: l,
    },
    rotation: c,
    thickness: d,
  }) {
    const u = [];
    let g; let b; let C; let S; let
      L;
    switch (c) {
      case 0:
        L = Z._rescale, g = -e / n, b = i / r + 1, C = 1 / n, S = -1 / r;
        break;
      case 90:
        L = Z._rescaleAndSwap, g = -i / r, b = -e / n, C = 1 / r, S = 1 / n;
        break;
      case 180:
        L = Z._rescale, g = e / n + 1, b = -i / r, C = -1 / n, S = 1 / r;
        break;
      case 270:
        L = Z._rescaleAndSwap, g = i / r + 1, b = e / n + 1, C = -1 / r, S = -1 / n;
        break;
    }
    if (!o) {
      o = [];
      for (const M of l) {
        const R = M.length;
        if (R === 2) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, M[0], M[1]]));
          continue;
        }
        if (R === 4) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, M[0], M[1], NaN, NaN, NaN, NaN, M[2], M[3]]));
          continue;
        }
        const p = new Float32Array(3 * (R - 2));
        o.push(p);
        let [f, y, _, T] = M.subarray(0, 4);
        p.set([NaN, NaN, NaN, NaN, f, y], 0);
        for (let P = 4; P < R; P += 2) {
          const E = M[P]; const
            D = M[P + 1];
          p.set(Z.createBezierPoints(f, y, _, T, E, D), (P - 2) * 3), [f, y, _, T] = [_, T, E, D];
        }
      }
    }
    for (let M = 0, R = o.length; M < R; M++) {
      u.push({
        line: L(o[M].map((p) => p ?? NaN), g, b, C, S),
        points: L(l[M].map((p) => p ?? NaN), g, b, C, S),
      });
    }
    const k = new this.prototype.constructor();
    return k.build(u, n, r, 1, c, d, a), k;
  }

  get box() {
    return s(this, Ve);
  }

  updateProperty(e, i) {
    return e === 'stroke-width' ? A(this, Me, Qb).call(this, i) : null;
  }

  updateParentDimensions([e, i], n) {
    const [r, a] = A(this, Me, Xn).call(this);
    m(this, Fn, e), m(this, Nn, i), m(this, Yl, n);
    const [o, l] = A(this, Me, Xn).call(this); const c = o - r; const d = l - a; const
      u = s(this, Ve);
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
    return s(this, Ve).map(Z.svgRound).join(' ');
  }

  get defaultProperties() {
    const [e, i] = s(this, Ve);
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
    const [, , e, i] = s(this, Ve);
    let n = 0; let r = 0; let a = 0; let o = 0; let l = 0; let
      c = 0;
    switch (s(this, xd)) {
      case 90:
        r = i / e, a = -e / i, l = e;
        break;
      case 180:
        n = -1, o = -1, l = e, c = i;
        break;
      case 270:
        r = -i / e, a = e / i, c = i;
        break;
      default:
        return '';
    }
    return `matrix(${n} ${r} ${a} ${o} ${Z.svgRound(l)} ${Z.svgRound(c)})`;
  }

  getPathResizingSVGProperties([e, i, n, r]) {
    const [a, o] = A(this, Me, Xn).call(this); const
      [l, c, d, u] = s(this, Ve);
    if (Math.abs(d - a) <= Z.PRECISION || Math.abs(u - o) <= Z.PRECISION) {
      const L = e + n / 2 - (l + d / 2); const
        k = i + r / 2 - (c + u / 2);
      return {
        path: {
          'transform-origin': `${Z.svgRound(e)} ${Z.svgRound(i)}`,
          transform: `${this.rotationTransform} translate(${L} ${k})`,
        },
      };
    }
    const g = (n - 2 * a) / (d - 2 * a); const b = (r - 2 * o) / (u - 2 * o); const C = d / n; const
      S = u / r;
    return {
      path: {
        'transform-origin': `${Z.svgRound(l)} ${Z.svgRound(c)}`,
        transform: `${this.rotationTransform} scale(${C} ${S}) translate(${Z.svgRound(a)} ${Z.svgRound(o)}) scale(${g} ${b}) translate(${Z.svgRound(-a)} ${Z.svgRound(-o)})`,
      },
    };
  }

  getPathResizedSVGProperties([e, i, n, r]) {
    const [a, o] = A(this, Me, Xn).call(this); const l = s(this, Ve); const
      [c, d, u, g] = l;
    if (l[0] = e, l[1] = i, l[2] = n, l[3] = r, Math.abs(u - a) <= Z.PRECISION || Math.abs(g - o) <= Z.PRECISION) {
      const k = e + n / 2 - (c + u / 2); const
        M = i + r / 2 - (d + g / 2);
      for (const {
        line: R,
        points: p,
      } of s(this, xi)) Z._translate(R, k, M, R), Z._translate(p, k, M, p);
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
    const b = (n - 2 * a) / (u - 2 * a); const C = (r - 2 * o) / (g - 2 * o); const S = -b * (c + a) + e + a; const
      L = -C * (d + o) + i + o;
    if (b !== 1 || C !== 1 || S !== 0 || L !== 0) {
      for (const {
        line: k,
        points: M,
      } of s(this, xi)) Z._rescale(k, S, L, b, C, k), Z._rescale(M, S, L, b, C, M);
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

  getPathTranslatedSVGProperties([e, i], n) {
    const [r, a] = n; const o = s(this, Ve); const l = e - o[0]; const
      c = i - o[1];
    if (s(this, Fn) === r && s(this, Nn) === a) {
      for (const {
        line: d,
        points: u,
      } of s(this, xi)) Z._translate(d, l, c, d), Z._translate(u, l, c, u);
    } else {
      const d = s(this, Fn) / r; const
        u = s(this, Nn) / a;
      m(this, Fn, r), m(this, Nn, a);
      for (const {
        line: g,
        points: b,
      } of s(this, xi)) Z._rescale(g, l, c, d, u, g), Z._rescale(b, l, c, d, u, b);
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
    const e = s(this, Ve);
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
Ve = new WeakMap(), xd = new WeakMap(), Ed = new WeakMap(), xi = new WeakMap(), Fn = new WeakMap(), Nn = new WeakMap(), Yl = new WeakMap(), Kl = new WeakMap(), io = new WeakMap(), Me = new WeakSet(), Xn = function (e = s(this, io)) {
  const i = s(this, Ed) + e / 2 * s(this, Yl);
  return s(this, Kl) % 180 === 0 ? [i / s(this, Fn), i / s(this, Nn)] : [i / s(this, Nn), i / s(this, Fn)];
}, Kb = function () {
  const [e, i, n, r] = s(this, Ve); const
    [a, o] = A(this, Me, Xn).call(this, 0);
  return [e + a, i + o, n - 2 * a, r - 2 * o];
}, Jb = function () {
  const e = m(this, Ve, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
  for (const {
    line: r,
  } of s(this, xi)) {
    if (r.length <= 12) {
      for (let l = 4, c = r.length; l < c; l += 6) tt.pointBoundingBox(r[l], r[l + 1], e);
      continue;
    }
    let a = r[4]; let
      o = r[5];
    for (let l = 6, c = r.length; l < c; l += 6) {
      const [d, u, g, b, C, S] = r.subarray(l, l + 6);
      tt.bezierBoundingBox(a, o, d, u, g, b, C, S, e), a = C, o = S;
    }
  }
  const [i, n] = A(this, Me, Xn).call(this);
  e[0] = ze(e[0] - i, 0, 1), e[1] = ze(e[1] - n, 0, 1), e[2] = ze(e[2] + i, 0, 1), e[3] = ze(e[3] + n, 0, 1), e[2] -= e[0], e[3] -= e[1];
}, Qb = function (e) {
  const [i, n] = A(this, Me, Xn).call(this);
  m(this, io, e);
  const [r, a] = A(this, Me, Xn).call(this); const [o, l] = [r - i, a - n]; const
    c = s(this, Ve);
  return c[0] -= o, c[1] -= l, c[2] += 2 * o, c[3] += 2 * l, c;
};
class gf extends Xb {
  constructor(t) {
    super(), this._viewParameters = t, super.updateProperties({
      fill: 'none',
      stroke: Ut._defaultLineColor,
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
  Zb;
const To = class To extends Hu {
  constructor(e) {
    super({
      ...e,
      name: 'inkEditor',
    });
    v(this, af);
    this._willKeepAspectRatio = !0, this.defaultL10nId = 'pdfjs-editor-ink-editor';
  }

  static initialize(e, i) {
    Ut.initialize(e, i), this._defaultDrawingOptions = new gf(i.viewParameters);
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

  static createDrawerInstance(e, i, n, r, a) {
    return new aS(e, i, n, r, a, this._defaultDrawingOptions['stroke-width']);
  }

  static deserializeDraw(e, i, n, r, a, o) {
    return Od.deserialize(e, i, n, r, a, o);
  }

  static async deserialize(e, i, n) {
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
          popupRef: C,
          richText: S,
          contentsObj: L,
          creationDate: k,
          modificationDate: M,
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
        popupRef: C,
        richText: S,
        comment: (L == null ? void 0 : L.str) || null,
        creationDate: k,
        modificationDate: M,
      };
    }
    const a = await super.deserialize(e, i, n);
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
      parent: n,
    } = this;
    i.updateSVGProperty('stroke-width'), n.drawLayer.updateProperties(e, i.toSVGProperties());
  }

  static onScaleChangingWhenDrawing() {
    const e = this._currentParent;
    e && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty('stroke-width'), e.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }

  createDrawingOptions({
    color: e,
    thickness: i,
    opacity: n,
  }) {
    this._drawingOptions = To.getDefaultDrawingOptions({
      stroke: tt.makeHexColor(...e),
      'stroke-width': i,
      'stroke-opacity': n,
    });
  }

  serialize(e = !1) {
    if (this.isEmpty()) return null;
    if (this.deleted) return this.serializeDeleted();
    const {
      lines: i,
      points: n,
    } = this.serializeDraw(e); const {
      _drawingOptions: {
        stroke: r,
        'stroke-opacity': a,
        'stroke-width': o,
      },
    } = this; const
      l = Object.assign(super.serialize(e), {
        color: Ut._colorManager.convert(r),
        opacity: a,
        thickness: o,
        paths: {
          lines: i,
          points: n,
        },
      });
    return this.addComment(l), e ? (l.isCopy = !0, l) : this.annotationElementId && !A(this, af, Zb).call(this, l) ? null : (l.id = this.annotationElementId, l);
  }

  renderAnnotationElement(e) {
    if (this.deleted) return e.hide(), null;
    const {
      points: i,
      rect: n,
    } = this.serializeDraw(!1);
    return e.updateEdited({
      rect: n,
      thickness: this._drawingOptions['stroke-width'],
      points: i,
      popup: this.comment,
    }), null;
  }
};
af = new WeakSet(), Zb = function (e) {
  const {
    color: i,
    thickness: n,
    opacity: r,
    pageIndex: a,
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || e.color.some((o, l) => o !== i[l]) || e.thickness !== n || e.opacity !== r || e.pageIndex !== a;
}, V(To, '_type', 'ink'), V(To, '_editorType', ft.INK), V(To, '_defaultDrawingOptions', null);
const Zp = To;
class tg extends Od {
  toSVGPath() {
    let t = super.toSVGPath();
    return t.endsWith('Z') || (t += 'Z'), t;
  }
}
const Yd = 8; const
  gh = 3;
let no; let Pt; let eg; let rn; let tv; let ev; let ig; let Au; let iv; let nv; let sv; let ng; let sg; let
  rv;
class zn {
  static extractContoursFromText(t, {
    fontFamily: e,
    fontStyle: i,
    fontWeight: n,
  }, r, a, o, l) {
    let c = new OffscreenCanvas(1, 1); let
      d = c.getContext('2d', {
        alpha: !1,
      });
    const u = 200; const g = d.font = `${i} ${n} ${u}px ${e}`; const {
      actualBoundingBoxLeft: b,
      actualBoundingBoxRight: C,
      actualBoundingBoxAscent: S,
      actualBoundingBoxDescent: L,
      fontBoundingBoxAscent: k,
      fontBoundingBoxDescent: M,
      width: R,
    } = d.measureText(t); const p = 1.5; const f = Math.ceil(Math.max(Math.abs(b) + Math.abs(C) || 0, R) * p); const
      y = Math.ceil(Math.max(Math.abs(S) + Math.abs(L) || u, Math.abs(k) + Math.abs(M) || u) * p);
    c = new OffscreenCanvas(f, y), d = c.getContext('2d', {
      alpha: !0,
      willReadFrequently: !0,
    }), d.font = g, d.filter = 'grayscale(1)', d.fillStyle = 'white', d.fillRect(0, 0, f, y), d.fillStyle = 'black', d.fillText(t, f * (p - 1) / 2, y * (3 - p) / 2);
    const _ = A(this, Pt, ng).call(this, d.getImageData(0, 0, f, y).data); const T = A(this, Pt, sv).call(this, _); const P = A(this, Pt, sg).call(this, T); const
      E = A(this, Pt, ig).call(this, _, f, y, P);
    return this.processDrawnLines({
      lines: {
        curves: E,
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

  static process(t, e, i, n, r) {
    const [a, o, l] = A(this, Pt, rv).call(this, t); const [c, d] = A(this, Pt, nv).call(this, a, o, l, Math.hypot(o, l) * s(this, no).sigmaSFactor, s(this, no).sigmaR, s(this, no).kernelSize); const u = A(this, Pt, sg).call(this, d); const
      g = A(this, Pt, ig).call(this, c, o, l, u);
    return this.processDrawnLines({
      lines: {
        curves: g,
        width: o,
        height: l,
      },
      pageWidth: e,
      pageHeight: i,
      rotation: n,
      innerMargin: r,
      mustSmooth: !0,
      areContours: !0,
    });
  }

  static processDrawnLines({
    lines: t,
    pageWidth: e,
    pageHeight: i,
    rotation: n,
    innerMargin: r,
    mustSmooth: a,
    areContours: o,
  }) {
    n % 180 !== 0 && ([e, i] = [i, e]);
    const {
      curves: l,
      width: c,
      height: d,
    } = t; const u = t.thickness ?? 0; const g = []; const b = Math.min(e / c, i / d); const C = b / e; const S = b / i; const
      L = [];
    for (const {
      points: M,
    } of l) {
      const R = a ? A(this, Pt, iv).call(this, M) : M;
      if (!R) continue;
      L.push(R);
      const p = R.length; const f = new Float32Array(p); const
        y = new Float32Array(3 * (p === 2 ? 2 : p - 2));
      if (g.push({
        line: y,
        points: f,
      }), p === 2) {
        f[0] = R[0] * C, f[1] = R[1] * S, y.set([NaN, NaN, NaN, NaN, f[0], f[1]], 0);
        continue;
      }
      let [_, T, P, E] = R;
      _ *= C, T *= S, P *= C, E *= S, f.set([_, T, P, E], 0), y.set([NaN, NaN, NaN, NaN, _, T], 0);
      for (let D = 4; D < p; D += 2) {
        const N = f[D] = R[D] * C; const
          I = f[D + 1] = R[D + 1] * S;
        y.set(Z.createBezierPoints(_, T, P, E, N, I), (D - 2) * 3), [_, T, P, E] = [P, E, N, I];
      }
    }
    if (g.length === 0) return null;
    const k = o ? new tg() : new Od();
    return k.build(g, e, i, 1, n, o ? 0 : u, r), {
      outline: k,
      newCurves: L,
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
    width: n,
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
    g[b++] = u * Uint32Array.BYTES_PER_ELEMENT + (l - 2 * d) * c.BYTES_PER_ELEMENT, g[b++] = 0, g[b++] = n, g[b++] = r, g[b++] = e ? 0 : 1, g[b++] = Math.max(0, Math.floor(i ?? 0)), g[b++] = d, g[b++] = c.BYTES_PER_ELEMENT;
    for (const R of t) g[b++] = R.length - 2, g[b++] = R[0], g[b++] = R[1];
    const C = new CompressionStream('deflate-raw'); const
      S = C.writable.getWriter();
    await S.ready, S.write(g);
    const L = c.prototype.constructor;
    for (const R of t) {
      const p = new L(R.length - 2);
      for (let f = 2, y = R.length; f < y; f++) p[f - 2] = R[f] - R[f - 2];
      S.write(p);
    }
    S.close();
    const k = await new Response(C.readable).arrayBuffer(); const
      M = new Uint8Array(k);
    return ey(M);
  }

  static async decompressSignature(t) {
    try {
      const e = Lw(t); const {
        readable: i,
        writable: n,
      } = new DecompressionStream('deflate-raw'); const
        r = n.getWriter();
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
      const d = l[2]; const u = l[3]; const g = l[4] === 0; const b = l[5]; const C = l[6]; const S = l[7]; const L = []; const
        k = (Yd + gh * C) * Uint32Array.BYTES_PER_ELEMENT;
      let M;
      switch (S) {
        case Int8Array.BYTES_PER_ELEMENT:
          M = new Int8Array(a.buffer, k);
          break;
        case Int16Array.BYTES_PER_ELEMENT:
          M = new Int16Array(a.buffer, k);
          break;
        case Int32Array.BYTES_PER_ELEMENT:
          M = new Int32Array(a.buffer, k);
          break;
      }
      o = 0;
      for (let R = 0; R < C; R++) {
        const p = l[gh * R + Yd]; const
          f = new Float32Array(p + 2);
        L.push(f);
        for (let y = 0; y < gh - 1; y++) f[y] = l[gh * R + Yd + y + 1];
        for (let y = 0; y < p; y++) f[y + 2] = f[y] + M[o++];
      }
      return {
        areContours: g,
        thickness: b,
        outlines: L,
        width: d,
        height: u,
      };
    } catch (e) {
      return pt(`decompressSignature: ${e}`), null;
    }
  }
}
no = new WeakMap(), Pt = new WeakSet(), eg = function (t, e, i, n) {
  return i -= t, n -= e, i === 0 ? n > 0 ? 0 : 4 : i === 1 ? n + 6 : 2 - n;
}, rn = new WeakMap(), tv = function (t, e, i, n, r, a, o) {
  const l = A(this, Pt, eg).call(this, i, n, r, a);
  for (let c = 0; c < 8; c++) {
    const d = (-c + l - o + 16) % 8; const u = s(this, rn)[2 * d]; const
      g = s(this, rn)[2 * d + 1];
    if (t[(i + u) * e + (n + g)] !== 0) return d;
  }
  return -1;
}, ev = function (t, e, i, n, r, a, o) {
  const l = A(this, Pt, eg).call(this, i, n, r, a);
  for (let c = 0; c < 8; c++) {
    const d = (c + l + o + 16) % 8; const u = s(this, rn)[2 * d]; const
      g = s(this, rn)[2 * d + 1];
    if (t[(i + u) * e + (n + g)] !== 0) return d;
  }
  return -1;
}, ig = function (t, e, i, n) {
  const r = t.length; const
    a = new Int32Array(r);
  for (let d = 0; d < r; d++) a[d] = t[d] <= n ? 1 : 0;
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
      let C = d; let
        S = u;
      if (b === 1 && a[g - 1] === 0) o += 1, S -= 1;
      else if (b >= 1 && a[g + 1] === 0) o += 1, S += 1, b > 1 && (l = b);
      else {
        b !== 1 && (l = Math.abs(b));
        continue;
      }
      const L = [u, d]; const k = S === u + 1; const
        M = {
          isHole: k,
          points: L,
          id: o,
          parent: 0,
        };
      c.push(M);
      let R;
      for (const D of c) {
        if (D.id === l) {
          R = D;
          break;
        }
      }
      R ? R.isHole ? M.parent = k ? R.parent : l : M.parent = k ? l : R.parent : M.parent = k ? l : 0;
      const p = A(this, Pt, tv).call(this, a, e, d, u, C, S, 0);
      if (p === -1) {
        a[g] = -o, a[g] !== 1 && (l = Math.abs(a[g]));
        continue;
      }
      let f = s(this, rn)[2 * p]; let
        y = s(this, rn)[2 * p + 1];
      const _ = d + f; const
        T = u + y;
      C = _, S = T;
      let P = d; let
        E = u;
      for (; ;) {
        const D = A(this, Pt, ev).call(this, a, e, P, E, C, S, 1);
        f = s(this, rn)[2 * D], y = s(this, rn)[2 * D + 1];
        const N = P + f; const
          I = E + y;
        L.push(I, N);
        const B = P * e + E;
        if (a[B + 1] === 0 ? a[B] = -o : a[B] === 1 && (a[B] = o), N === d && I === u && P === _ && E === T) {
          a[g] !== 1 && (l = Math.abs(a[g]));
          break;
        } else C = P, S = E, P = N, E = I;
      }
    }
  }
  return c;
}, Au = function (t, e, i, n) {
  if (i - e <= 4) {
    for (let _ = e; _ < i - 2; _ += 2) n.push(t[_], t[_ + 1]);
    return;
  }
  const r = t[e]; const a = t[e + 1]; const o = t[i - 4] - r; const l = t[i - 3] - a; const c = Math.hypot(o, l); const d = o / c; const u = l / c; const g = d * a - u * r; const b = l / o; const C = 1 / c; const S = Math.atan(b); const L = Math.cos(S); const k = Math.sin(S); const M = C * (Math.abs(L) + Math.abs(k)); const R = C * (1 - M + M ** 2); const
    p = Math.max(Math.atan(Math.abs(k + L) * R), Math.atan(Math.abs(k - L) * R));
  let f = 0; let
    y = e;
  for (let _ = e + 2; _ < i - 2; _ += 2) {
    const T = Math.abs(g - d * t[_ + 1] + u * t[_]);
    T > f && (y = _, f = T);
  }
  f > (c * p) ** 2 ? (A(this, Pt, Au).call(this, t, e, y + 2, n), A(this, Pt, Au).call(this, t, y, i, n)) : n.push(r, a);
}, iv = function (t) {
  const e = []; const
    i = t.length;
  return A(this, Pt, Au).call(this, t, 0, i, e), e.push(t[i - 2], t[i - 1]), e.length <= 4 ? null : e;
}, nv = function (t, e, i, n, r, a) {
  const o = new Float32Array(a ** 2); const l = -2 * n ** 2; const
    c = a >> 1;
  for (let S = 0; S < a; S++) {
    const L = (S - c) ** 2;
    for (let k = 0; k < a; k++) o[S * a + k] = Math.exp((L + (k - c) ** 2) / l);
  }
  const d = new Float32Array(256); const
    u = -2 * r ** 2;
  for (let S = 0; S < 256; S++) d[S] = Math.exp(S ** 2 / u);
  const g = t.length; const b = new Uint8Array(g); const
    C = new Uint32Array(256);
  for (let S = 0; S < i; S++) {
    for (let L = 0; L < e; L++) {
      const k = S * e + L; const
        M = t[k];
      let R = 0; let
        p = 0;
      for (let y = 0; y < a; y++) {
        const _ = S + y - c;
        if (!(_ < 0 || _ >= i)) {
          for (let T = 0; T < a; T++) {
            const P = L + T - c;
            if (P < 0 || P >= e) continue;
            const E = t[_ * e + P]; const
              D = o[y * a + T] * d[Math.abs(E - M)];
            R += E * D, p += D;
          }
        }
      }
      const f = b[k] = Math.round(R / p);
      C[f]++;
    }
  }
  return [b, C];
}, sv = function (t) {
  const e = new Uint32Array(256);
  for (const i of t) e[i]++;
  return e;
}, ng = function (t) {
  const e = t.length; const
    i = new Uint8ClampedArray(e >> 2);
  let n = -1 / 0; let
    r = 1 / 0;
  for (let o = 0, l = i.length; o < l; o++) {
    const c = i[o] = t[o << 2];
    n = Math.max(n, c), r = Math.min(r, c);
  }
  const a = 255 / (n - r);
  for (let o = 0, l = i.length; o < l; o++) i[o] = (i[o] - r) * a;
  return i;
}, sg = function (t) {
  let e; let i = -1 / 0; let
    n = -1 / 0;
  const r = t.findIndex((l) => l !== 0);
  let a = r; let
    o = r;
  for (e = r; e < 256; e++) {
    const l = t[e];
    l > i && (e - a > n && (n = e - a, o = e - 1), i = l, a = e);
  }
  for (e = o - 1; e >= 0 && !(t[e] > t[e + 1]); e--) ;
  return e;
}, rv = function (t) {
  const e = t; const {
    width: i,
    height: n,
  } = t; const
    {
      maxDim: r,
    } = s(this, no);
  let a = i; let
    o = n;
  if (i > r || n > r) {
    let g = i; let b = n; let
      C = Math.log2(Math.max(i, n) / r);
    const S = Math.floor(C);
    C = C === S ? S - 1 : S;
    for (let k = 0; k < C; k++) {
      a = Math.ceil(g / 2), o = Math.ceil(b / 2);
      const M = new OffscreenCanvas(a, o);
      M.getContext('2d').drawImage(t, 0, 0, g, b, 0, 0, a, o), g = a, b = o, t !== e && t.close(), t = M.transferToImageBitmap();
    }
    const L = Math.min(r / a, r / o);
    a = Math.round(a * L), o = Math.round(o * L);
  }
  const c = new OffscreenCanvas(a, o).getContext('2d', {
    willReadFrequently: !0,
  });
  c.fillStyle = 'white', c.fillRect(0, 0, a, o), c.filter = 'grayscale(1)', c.drawImage(t, 0, 0, t.width, t.height, 0, 0, a, o);
  const d = c.getImageData(0, 0, a, o).data;
  return [A(this, Pt, ng).call(this, d), a, o];
}, v(zn, Pt), v(zn, no, {
  maxDim: 512,
  sigmaSFactor: 0.02,
  sigmaR: 25,
  kernelSize: 16,
}), v(zn, rn, new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]));
class Rg extends Xb {
  constructor() {
    super(), super.updateProperties({
      fill: Ut._defaultLineColor,
      'stroke-width': 0,
    });
  }

  clone() {
    const t = new Rg();
    return t.updateAll(this), t;
  }
}
class Lg extends gf {
  constructor(t) {
    super(t), super.updateProperties({
      stroke: Ut._defaultLineColor,
      'stroke-width': 1,
    });
  }

  clone() {
    const t = new Lg(this._viewParameters);
    return t.updateAll(this), t;
  }
}
let Cr; let Bn; let Tr; let
  so;
const li = class li extends Hu {
  constructor(e) {
    super({
      ...e,
      mustBeCommitted: !0,
      name: 'signatureEditor',
    });
    v(this, Cr, !1);
    v(this, Bn, null);
    v(this, Tr, null);
    v(this, so, null);
    this._willKeepAspectRatio = !0, m(this, Tr, e.signatureData || null), m(this, Bn, null), this.defaultL10nId = 'pdfjs-editor-signature-editor1';
  }

  static initialize(e, i) {
    Ut.initialize(e, i), this._defaultDrawingOptions = new Rg(), this._defaultDrawnSignatureOptions = new Lg(i.viewParameters);
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
      hasDescription: !!s(this, Bn),
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
      _isCopy: n,
    } = this;
    if (n && (this._isCopy = !1, e = this.x, i = this.y), super.render(), this._drawId === null) {
      if (s(this, Tr)) {
        const {
          lines: r,
          mustSmooth: a,
          areContours: o,
          description: l,
          uuid: c,
          heightInPage: d,
        } = s(this, Tr); const {
          rawDims: {
            pageWidth: u,
            pageHeight: g,
          },
          rotation: b,
        } = this.parent.viewport; const
          C = zn.processDrawnLines({
            lines: r,
            pageWidth: u,
            pageHeight: g,
            rotation: b,
            innerMargin: li._INNER_MARGIN,
            mustSmooth: a,
            areContours: o,
          });
        this.addSignature(C, d, l, c);
      } else {
        this.div.setAttribute('data-l10n-args', JSON.stringify({
          description: '',
        })), this.div.hidden = !0, this._uiManager.getSignature(this);
      }
    } else {
      this.div.setAttribute('data-l10n-args', JSON.stringify({
        description: s(this, Bn) || '',
      }));
    }
    return n && (this._isCopy = !0, this._moveAfterPaste(e, i)), this.div;
  }

  setUuid(e) {
    m(this, so, e), this.addEditToolbar();
  }

  getUuid() {
    return s(this, so);
  }

  get description() {
    return s(this, Bn);
  }

  set description(e) {
    m(this, Bn, e), this.div && (this.div.setAttribute('data-l10n-args', JSON.stringify({
      description: e,
    })), super.addEditToolbar().then((i) => {
      i == null || i.updateEditSignatureButton(e);
    }));
  }

  getSignaturePreview() {
    const {
      newCurves: e,
      areContours: i,
      thickness: n,
      width: r,
      height: a,
    } = s(this, Tr); const o = Math.max(r, a); const
      l = zn.processDrawnLines({
        lines: {
          curves: e.map((c) => ({
            points: c,
          })),
          thickness: n,
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

  addSignature(e, i, n, r) {
    const {
      x: a,
      y: o,
    } = this; const
      {
        outline: l,
      } = m(this, Tr, e);
    m(this, Cr, l instanceof tg), this.description = n;
    let c;
    s(this, Cr) ? c = li.getDefaultDrawingOptions() : (c = li._defaultDrawnSignatureOptions.clone(), c.updateProperties({
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
        hasDescription: !!n,
      },
    }), this.div.hidden = !1;
  }

  getFromImage(e) {
    const {
      rawDims: {
        pageWidth: i,
        pageHeight: n,
      },
      rotation: r,
    } = this.parent.viewport;
    return zn.process(e, i, n, r, li._INNER_MARGIN);
  }

  getFromText(e, i) {
    const {
      rawDims: {
        pageWidth: n,
        pageHeight: r,
      },
      rotation: a,
    } = this.parent.viewport;
    return zn.extractContoursFromText(e, i, n, r, a, li._INNER_MARGIN);
  }

  getDrawnSignature(e) {
    const {
      rawDims: {
        pageWidth: i,
        pageHeight: n,
      },
      rotation: r,
    } = this.parent.viewport;
    return zn.processDrawnLines({
      lines: e,
      pageWidth: i,
      pageHeight: n,
      rotation: r,
      innerMargin: li._INNER_MARGIN,
      mustSmooth: !1,
      areContours: !1,
    });
  }

  createDrawingOptions({
    areContours: e,
    thickness: i,
  }) {
    e ? this._drawingOptions = li.getDefaultDrawingOptions() : (this._drawingOptions = li._defaultDrawnSignatureOptions.clone(), this._drawingOptions.updateProperties({
      'stroke-width': i,
    }));
  }

  serialize(e = !1) {
    if (this.isEmpty()) return null;
    const {
      lines: i,
      points: n,
    } = this.serializeDraw(e); const {
      _drawingOptions: {
        'stroke-width': r,
      },
    } = this; const
      a = Object.assign(super.serialize(e), {
        isSignature: !0,
        areContours: s(this, Cr),
        color: [0, 0, 0],
        thickness: s(this, Cr) ? 0 : r,
      });
    return this.addComment(a), e ? (a.paths = {
      lines: i,
      points: n,
    }, a.uuid = s(this, so), a.isCopy = !0) : a.lines = i, s(this, Bn) && (a.accessibilityData = {
      type: 'Figure',
      alt: s(this, Bn),
    }), a;
  }

  static deserializeDraw(e, i, n, r, a, o) {
    return o.areContours ? tg.deserialize(e, i, n, r, a, o) : Od.deserialize(e, i, n, r, a, o);
  }

  static async deserialize(e, i, n) {
    let a;
    const r = await super.deserialize(e, i, n);
    return m(r, Cr, e.areContours), r.description = ((a = e.accessibilityData) == null ? void 0 : a.alt) || '', m(r, so, e.uuid), r;
  }
};
Cr = new WeakMap(), Bn = new WeakMap(), Tr = new WeakMap(), so = new WeakMap(), V(li, '_type', 'signature'), V(li, '_editorType', ft.SIGNATURE), V(li, '_defaultDrawingOptions', null);
const rg = li;
let qt; let Se; let Pr; let Ts; let kr; let Jl; let Ps; let ro; let Hn; let Ei; let Ql; let Et; let Ih; let Fh; let _u; let xu; let Eu; let og; let Cu; let
  av;
class ag extends Ut {
  constructor(e) {
    super({
      ...e,
      name: 'stampEditor',
    });
    v(this, Et);
    v(this, qt, null);
    v(this, Se, null);
    v(this, Pr, null);
    v(this, Ts, null);
    v(this, kr, null);
    v(this, Jl, '');
    v(this, Ps, null);
    v(this, ro, !1);
    v(this, Hn, null);
    v(this, Ei, !1);
    v(this, Ql, !1);
    m(this, Ts, e.bitmapUrl), m(this, kr, e.bitmapFile), this.defaultL10nId = 'pdfjs-editor-stamp-editor';
  }

  static initialize(e, i) {
    Ut.initialize(e, i);
  }

  static isHandlingMimeForPasting(e) {
    return Lu.includes(e);
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
      mlManager: n,
    } = this._uiManager;
    if (!n) throw new Error('No ML.');
    if (!await n.isEnabledFor('altText')) throw new Error("ML isn't enabled for alt text.");
    const {
      data: r,
      width: a,
      height: o,
    } = e || this.copyCanvas(null, null, !0).imageData; const
      l = await n.guess({
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
    s(this, Se) && (m(this, qt, null), this._uiManager.imageManager.deleteId(s(this, Se)), (e = s(this, Ps)) == null || e.remove(), m(this, Ps, null), s(this, Hn) && (clearTimeout(s(this, Hn)), m(this, Hn, null))), super.remove();
  }

  rebuild() {
    if (!this.parent) {
      s(this, Se) && A(this, Et, _u).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (s(this, Se) && s(this, Ps) === null && A(this, Et, _u).call(this), this.isAttachedToDOM || this.parent.add(this));
  }

  onceAdded(e) {
    this._isDraggable = !0, e && this.div.focus();
  }

  isEmpty() {
    return !(s(this, Pr) || s(this, qt) || s(this, Ts) || s(this, kr) || s(this, Se) || s(this, ro));
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
    return this._isCopy && (e = this.x, i = this.y), super.render(), this.div.hidden = !0, this.createAltText(), s(this, ro) || (s(this, qt) ? A(this, Et, xu).call(this) : A(this, Et, _u).call(this)), this._isCopy && this._moveAfterPaste(e, i), this._uiManager.addShouldRescale(this), this.div;
  }

  setCanvas(e, i) {
    const {
      id: n,
      bitmap: r,
    } = this._uiManager.imageManager.getFromCanvas(e, i);
    i.remove(), n && this._uiManager.imageManager.isValidId(n) && (m(this, Se, n), r && m(this, qt, r), m(this, ro, !1), A(this, Et, xu).call(this));
  }

  _onResized() {
    this.onScaleChanging();
  }

  onScaleChanging() {
    if (!this.parent) return;
    s(this, Hn) !== null && clearTimeout(s(this, Hn)), m(this, Hn, setTimeout(() => {
      m(this, Hn, null), A(this, Et, og).call(this);
    }, 200));
  }

  copyCanvas(e, i, n = !1) {
    e || (e = 224);
    const {
      width: r,
      height: a,
    } = s(this, qt); const
      o = new dn();
    let l = s(this, qt); let c = r; let d = a; let
      u = null;
    if (i) {
      if (r > i || a > i) {
        const _ = Math.min(i / r, i / a);
        c = Math.floor(r * _), d = Math.floor(a * _);
      }
      u = document.createElement('canvas');
      const b = u.width = Math.ceil(c * o.sx); const
        C = u.height = Math.ceil(d * o.sy);
      s(this, Ei) || (l = A(this, Et, Eu).call(this, b, C));
      const S = u.getContext('2d');
      S.filter = this._uiManager.hcmFilter;
      let L = 'white';
      let k = '#cfcfd8';
      this._uiManager.hcmFilter !== 'none' ? k = 'black' : Ow.isDarkMode && (L = '#8f8f9d', k = '#42414d');
      const M = 15; const R = M * o.sx; const p = M * o.sy; const f = new OffscreenCanvas(R * 2, p * 2); const
        y = f.getContext('2d');
      y.fillStyle = L, y.fillRect(0, 0, R * 2, p * 2), y.fillStyle = k, y.fillRect(0, 0, R, p), y.fillRect(R, p, R, p), S.fillStyle = S.createPattern(f, 'repeat'), S.fillRect(0, 0, b, C), S.drawImage(l, 0, 0, l.width, l.height, 0, 0, b, C);
    }
    let g = null;
    if (n) {
      let b; let
        C;
      if (o.symmetric && l.width < e && l.height < e) b = l.width, C = l.height;
      else if (l = s(this, qt), r > e || a > e) {
        const k = Math.min(e / r, e / a);
        b = Math.floor(r * k), C = Math.floor(a * k), s(this, Ei) || (l = A(this, Et, Eu).call(this, b, C));
      }
      const L = new OffscreenCanvas(b, C).getContext('2d', {
        willReadFrequently: !0,
      });
      L.drawImage(l, 0, 0, l.width, l.height, 0, 0, b, C), g = {
        width: b,
        height: C,
        data: L.getImageData(0, 0, b, C).data,
      };
    }
    return {
      canvas: u,
      width: c,
      height: d,
      imageData: g,
    };
  }

  static async deserialize(e, i, n) {
    let L;
    let r = null; let
      a = !1;
    if (e instanceof Ab) {
      const {
        data: {
          rect: k,
          rotation: M,
          id: R,
          structParent: p,
          popupRef: f,
          richText: y,
          contentsObj: _,
          creationDate: T,
          modificationDate: P,
        },
        container: E,
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
      } = n.imageManager.getFromCanvas(E.id, N), N.remove()) : (a = !0, e._hasNoCanvas = !0);
      const j = ((L = await i._structTree.getAriaAttributes(`${vg}${R}`)) == null ? void 0 : L.get('aria-label')) || '';
      r = e = {
        annotationType: ft.STAMP,
        bitmapId: I,
        bitmap: B,
        pageIndex: D - 1,
        rect: k.slice(0),
        rotation: M,
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
        creationDate: T,
        modificationDate: P,
      };
    }
    const o = await super.deserialize(e, i, n); const
      {
        rect: l,
        bitmap: c,
        bitmapUrl: d,
        bitmapId: u,
        isSvg: g,
        accessibilityData: b,
      } = e;
    a ? (n.addMissingCanvas(e.id, o), m(o, ro, !0)) : u && n.imageManager.isValidId(u) ? (m(o, Se, u), c && m(o, qt, c)) : m(o, Ts, d), m(o, Ei, g);
    const [C, S] = o.pageDimensions;
    return o.width = (l[2] - l[0]) / C, o.height = (l[3] - l[1]) / S, b && (o.altTextData = b), o._initialData = r, e.comment && o.setCommentData(e), m(o, Ql, !!r), o;
  }

  serialize(e = !1, i = null) {
    if (this.isEmpty()) return null;
    if (this.deleted) return this.serializeDeleted();
    const n = Object.assign(super.serialize(e), {
      bitmapId: s(this, Se),
      isSvg: s(this, Ei),
    });
    if (this.addComment(n), e) return n.bitmapUrl = A(this, Et, Cu).call(this, !0), n.accessibilityData = this.serializeAltText(!0), n.isCopy = !0, n;
    const {
      decorative: r,
      altText: a,
    } = this.serializeAltText(!1);
    if (!r && a && (n.accessibilityData = {
      type: 'Figure',
      alt: a,
    }), this.annotationElementId) {
      const l = A(this, Et, av).call(this, n);
      return l.isSame ? null : (l.isSameAltText ? delete n.accessibilityData : n.accessibilityData.structParent = this._initialData.structParent ?? -1, n.id = this.annotationElementId, delete n.bitmapId, n);
    }
    if (i === null) return n;
    i.stamps || (i.stamps = /* @__PURE__ */ new Map());
    const o = s(this, Ei) ? (n.rect[2] - n.rect[0]) * (n.rect[3] - n.rect[1]) : null;
    if (!i.stamps.has(s(this, Se))) {
      i.stamps.set(s(this, Se), {
        area: o,
        serialized: n,
      }), n.bitmap = A(this, Et, Cu).call(this, !1);
    } else if (s(this, Ei)) {
      const l = i.stamps.get(s(this, Se));
      o > l.area && (l.area = o, l.serialized.bitmap.close(), l.serialized.bitmap = A(this, Et, Cu).call(this, !1));
    }
    return n;
  }

  renderAnnotationElement(e) {
    return this.deleted ? (e.hide(), null) : (e.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment,
    }), null);
  }
}
qt = new WeakMap(), Se = new WeakMap(), Pr = new WeakMap(), Ts = new WeakMap(), kr = new WeakMap(), Jl = new WeakMap(), Ps = new WeakMap(), ro = new WeakMap(), Hn = new WeakMap(), Ei = new WeakMap(), Ql = new WeakMap(), Et = new WeakSet(), Ih = function (e, i = !1) {
  if (!e) {
    this.remove();
    return;
  }
  m(this, qt, e.bitmap), i || (m(this, Se, e.id), m(this, Ei, e.isSvg)), e.file && m(this, Jl, e.file.name), A(this, Et, xu).call(this);
}, Fh = function () {
  if (m(this, Pr, null), this._uiManager.enableWaiting(!1), !!s(this, Ps)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && s(this, qt)) {
      this.addEditToolbar().then(() => {
        this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
      });
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && s(this, qt)) {
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
  if (s(this, Se)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(s(this, Se)).then((n) => A(this, Et, Ih).call(this, n, !0)).finally(() => A(this, Et, Fh).call(this));
    return;
  }
  if (s(this, Ts)) {
    const n = s(this, Ts);
    m(this, Ts, null), this._uiManager.enableWaiting(!0), m(this, Pr, this._uiManager.imageManager.getFromUrl(n).then((r) => A(this, Et, Ih).call(this, r)).finally(() => A(this, Et, Fh).call(this)));
    return;
  }
  if (s(this, kr)) {
    const n = s(this, kr);
    m(this, kr, null), this._uiManager.enableWaiting(!0), m(this, Pr, this._uiManager.imageManager.getFromFile(n).then((r) => A(this, Et, Ih).call(this, r)).finally(() => A(this, Et, Fh).call(this)));
    return;
  }
  const e = document.createElement('input');
  e.type = 'file', e.accept = Lu.join(',');
  const i = this._uiManager._signal;
  m(this, Pr, new Promise((n) => {
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
      n();
    }, {
      signal: i,
    }), e.addEventListener('cancel', () => {
      this.remove(), n();
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
    height: n,
  } = s(this, qt);
  const [r, a] = this.pageDimensions; const
    o = 0.75;
  if (this.width) i = this.width * r, n = this.height * a;
  else if (i > o * r || n > o * a) {
    const d = Math.min(o * r / i, o * a / n);
    i *= d, n *= d;
  }
  this._uiManager.enableWaiting(!1);
  const l = m(this, Ps, document.createElement('canvas'));
  l.setAttribute('role', 'img'), this.addContainer(l), this.width = i / r, this.height = n / a, this.setDims(), (c = this._initialOptions) != null && c.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1), A(this, Et, og).call(this), s(this, Ql) || (this.parent.addUndoableEditor(this), m(this, Ql, !0)), this._reportTelemetry({
    action: 'inserted_image',
  }), s(this, Jl) && this.div.setAttribute('aria-description', s(this, Jl)), this.annotationElementId || this._uiManager.a11yAlert('pdfjs-editor-stamp-added-alert');
}, Eu = function (e, i) {
  const {
    width: n,
    height: r,
  } = s(this, qt);
  let a = n; let o = r; let
    l = s(this, qt);
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
    width: n,
    height: r,
  } = this; const a = new dn(); const o = Math.ceil(n * e * a.sx); const l = Math.ceil(r * i * a.sy); const
    c = s(this, Ps);
  if (!c || c.width === o && c.height === l) return;
  c.width = o, c.height = l;
  const d = s(this, Ei) ? s(this, qt) : A(this, Et, Eu).call(this, o, l); const
    u = c.getContext('2d');
  u.filter = this._uiManager.hcmFilter, u.drawImage(d, 0, 0, d.width, d.height, 0, 0, o, l);
}, Cu = function (e) {
  if (e) {
    if (s(this, Ei)) {
      const r = this._uiManager.imageManager.getSvgUrl(s(this, Se));
      if (r) return r;
    }
    const i = document.createElement('canvas');
    return {
      width: i.width,
      height: i.height,
    } = s(this, qt), i.getContext('2d').drawImage(s(this, qt), 0, 0), i.toDataURL();
  }
  if (s(this, Ei)) {
    const [i, n] = this.pageDimensions; const r = Math.round(this.width * i * Is.PDF_TO_CSS_UNITS); const a = Math.round(this.height * n * Is.PDF_TO_CSS_UNITS); const
      o = new OffscreenCanvas(r, a);
    return o.getContext('2d').drawImage(s(this, qt), 0, 0, s(this, qt).width, s(this, qt).height, 0, 0, r, a), o.transferToImageBitmap();
  }
  return structuredClone(s(this, qt));
}, av = function (e) {
  let o;
  const {
    pageIndex: i,
    accessibilityData: {
      altText: n,
    },
  } = this._initialData; const r = e.pageIndex === i; const
    a = (((o = e.accessibilityData) == null ? void 0 : o.alt) || '') === n;
  return {
    isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && r && a,
    isSameAltText: a,
  };
}, V(ag, '_type', 'stamp'), V(ag, '_editorType', ft.STAMP);
let ao; let Zl; let Rr; let Lr; let ks; let ri; let Mr; let th; let eh; let an; let Rs; let Ae; let Ls; let Dr; let ih; let it; let Or; let jt; let lg; let ov; let mn; let hg; let cg; let
  Tu;
const Xi = class Xi {
  constructor({
    uiManager: t,
    pageIndex: e,
    div: i,
    structTreeLayer: n,
    accessibilityManager: r,
    annotationLayer: a,
    drawLayer: o,
    textLayer: l,
    viewport: c,
    l10n: d,
  }) {
    v(this, jt);
    v(this, ao);
    v(this, Zl, !1);
    v(this, Rr, null);
    v(this, Lr, null);
    v(this, ks, null);
    v(this, ri, /* @__PURE__ */ new Map());
    v(this, Mr, !1);
    v(this, th, !1);
    v(this, eh, !1);
    v(this, an, null);
    v(this, Rs, null);
    v(this, Ae, null);
    v(this, Ls, null);
    v(this, Dr, null);
    v(this, ih, -1);
    v(this, it);
    const u = [...s(Xi, Or).values()];
    if (!Xi._initialized) {
      Xi._initialized = !0;
      for (const g of u) g.initialize(d, t);
    }
    t.registerEditorTypes(u), m(this, it, t), this.pageIndex = e, this.div = i, m(this, ao, r), m(this, Rr, a), this.viewport = c, m(this, Ae, l), this.drawLayer = o, this._structTree = n, s(this, it).addLayer(this);
  }

  get isEmpty() {
    return s(this, ri).size === 0;
  }

  get isInvisible() {
    return this.isEmpty && s(this, it).getMode() === ft.NONE;
  }

  updateToolbar(t) {
    s(this, it).updateToolbar(t);
  }

  updateMode(t = s(this, it).getMode()) {
    switch (A(this, jt, Tu).call(this), t) {
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
      for (const i of s(Xi, Or).values()) e.toggle(`${i._type}Editing`, t === i._editorType);
    }
    this.div.hidden = !1;
  }

  hasTextLayer(t) {
    let e;
    return t === ((e = s(this, Ae)) == null ? void 0 : e.div);
  }

  setEditingState(t) {
    s(this, it).setEditingState(t);
  }

  addCommands(t) {
    s(this, it).addCommands(t);
  }

  cleanUndoStack(t) {
    s(this, it).cleanUndoStack(t);
  }

  toggleDrawing(t = !1) {
    this.div.classList.toggle('drawing', !t);
  }

  togglePointerEvents(t = !1) {
    this.div.classList.toggle('disabled', !t);
  }

  toggleAnnotationLayerPointerEvents(t = !1) {
    let e;
    (e = s(this, Rr)) == null || e.div.classList.toggle('disabled', !t);
  }

  async enable() {
    let i;
    m(this, eh, !0), this.div.tabIndex = 0, this.togglePointerEvents(!0), this.div.classList.toggle('nonEditing', !1), (i = s(this, Dr)) == null || i.abort(), m(this, Dr, null);
    const t = /* @__PURE__ */ new Set();
    for (const n of s(this, jt, lg)) n.enableEditing(), n.show(!0), n.annotationElementId && (s(this, it).removeChangedExistingAnnotation(n), t.add(n.annotationElementId));
    const e = s(this, Rr);
    if (e) {
      for (const n of e.getEditableAnnotations()) {
        if (n.hide(), s(this, it).isDeletedAnnotationElement(n.data.id) || t.has(n.data.id)) continue;
        const r = await this.deserialize(n);
        r && (this.addOrRebuild(r), r.enableEditing());
      }
    }
    m(this, eh, !1), s(this, it)._eventBus.dispatch('editorsrendered', {
      source: this,
      pageNumber: this.pageIndex + 1,
    });
  }

  disable() {
    let i;
    if (m(this, th, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1), this.div.classList.toggle('nonEditing', !0), s(this, Ae) && !s(this, Dr)) {
      m(this, Dr, new AbortController());
      const n = s(this, it).combinedSignal(s(this, Dr));
      s(this, Ae).div.addEventListener('pointerdown', (r) => {
        const {
          clientX: o,
          clientY: l,
          timeStamp: c,
        } = r; const
          d = s(this, ih);
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
        const C = new RegExp(`^${Hh}[0-9]+$`);
        for (const L of g) {
          if (C.test(L.id)) {
            b = L.id;
            break;
          }
        }
        if (!b) return;
        const S = s(this, ri).get(b);
        (S == null ? void 0 : S.annotationElementId) === null && (r.stopPropagation(), r.preventDefault(), S.dblclick(r));
      }, {
        signal: n,
        capture: !0,
      });
    }
    const t = s(this, Rr);
    if (t) {
      const n = /* @__PURE__ */ new Map(); const
        r = /* @__PURE__ */ new Map();
      for (const o of s(this, jt, lg)) {
        if (o.disableEditing(), !o.annotationElementId) {
          o.updateFakeAnnotationElement(t);
          continue;
        }
        if (o.serialize() !== null) {
          n.set(o.annotationElementId, o);
          continue;
        } else r.set(o.annotationElementId, o);
        (i = this.getEditableAnnotation(o.annotationElementId)) == null || i.show(), o.remove();
      }
      const a = t.getEditableAnnotations();
      for (const o of a) {
        const {
          id: l,
        } = o.data;
        if (s(this, it).isDeletedAnnotationElement(l)) {
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
        c = n.get(l), c && (s(this, it).addChangedExistingAnnotation(c), c.renderAnnotationElement(o) && c.show(!1)), o.show();
      }
    }
    A(this, jt, Tu).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: e,
    } = this.div;
    for (const n of s(Xi, Or).values()) e.remove(`${n._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), m(this, th, !1);
  }

  getEditableAnnotation(t) {
    let e;
    return ((e = s(this, Rr)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }

  setActiveEditor(t) {
    s(this, it).getActive() !== t && s(this, it).setActiveEditor(t);
  }

  enableTextSelection() {
    let t;
    if (this.div.tabIndex = -1, (t = s(this, Ae)) != null && t.div && !s(this, Ls)) {
      m(this, Ls, new AbortController());
      const e = s(this, it).combinedSignal(s(this, Ls));
      s(this, Ae).div.addEventListener('pointerdown', A(this, jt, ov).bind(this), {
        signal: e,
      }), s(this, Ae).div.classList.add('highlighting');
    }
  }

  disableTextSelection() {
    let t;
    this.div.tabIndex = 0, (t = s(this, Ae)) != null && t.div && s(this, Ls) && (s(this, Ls).abort(), m(this, Ls, null), s(this, Ae).div.classList.remove('highlighting'));
  }

  enableClick() {
    if (s(this, Lr)) return;
    m(this, Lr, new AbortController());
    const t = s(this, it).combinedSignal(s(this, Lr));
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
    (t = s(this, Lr)) == null || t.abort(), m(this, Lr, null);
  }

  attach(t) {
    s(this, ri).set(t.id, t);
    const {
      annotationElementId: e,
    } = t;
    e && s(this, it).isDeletedAnnotationElement(e) && s(this, it).removeDeletedAnnotationElement(t);
  }

  detach(t) {
    let e;
    s(this, ri).delete(t.id), (e = s(this, ao)) == null || e.removePointerInTextLayer(t.contentDiv), !s(this, th) && t.annotationElementId && s(this, it).addDeletedAnnotationElement(t);
  }

  remove(t) {
    this.detach(t), s(this, it).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1;
  }

  changeParent(t) {
    let e;
    t.parent !== this && (t.parent && t.annotationElementId && (s(this, it).addDeletedAnnotationElement(t.annotationElementId), Ut.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }

  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), s(this, it).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(!s(this, eh)), s(this, it).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }

  moveEditorInDOM(t) {
    let i;
    if (!t.isAttachedToDOM) return;
    const {
      activeElement: e,
    } = document;
    t.div.contains(e) && !s(this, ks) && (t._focusEventsAllowed = !1, m(this, ks, setTimeout(() => {
      m(this, ks, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener('focusin', () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: s(this, it)._signal,
      }), e.focus());
    }, 0))), t._structTreeParentId = (i = s(this, ao)) == null ? void 0 : i.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
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
    for (const e of s(this, ri).values()) if (e.uid === t) return e;
    return null;
  }

  getNextId() {
    return s(this, it).getId();
  }

  combinedSignal(t) {
    return s(this, it).combinedSignal(t);
  }

  canCreateNewEmptyEditor() {
    let t;
    return (t = s(this, jt, mn)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }

  async pasteEditor(t, e) {
    this.updateToolbar(t), await s(this, it).updateMode(t.mode);
    const {
      offsetX: i,
      offsetY: n,
    } = A(this, jt, cg).call(this); const r = this.getNextId(); const
      a = A(this, jt, hg).call(this, {
        parent: this,
        id: r,
        x: i,
        y: n,
        uiManager: s(this, it),
        isCentered: !0,
        ...e,
      });
    a && this.add(a);
  }

  async deserialize(t) {
    let e;
    return await ((e = s(Xi, Or).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, s(this, it))) || null;
  }

  createAndAddNewEditor(t, e, i = {}) {
    const n = this.getNextId(); const
      r = A(this, jt, hg).call(this, {
        parent: this,
        id: n,
        x: t.offsetX,
        y: t.offsetY,
        uiManager: s(this, it),
        isCentered: e,
        ...i,
      });
    return r && this.add(r), r;
  }

  get boundingClientRect() {
    return this.div.getBoundingClientRect();
  }

  addNewEditor(t = {}) {
    this.createAndAddNewEditor(A(this, jt, cg).call(this), !0, t);
  }

  setSelected(t) {
    s(this, it).setSelected(t);
  }

  toggleSelected(t) {
    s(this, it).toggleSelected(t);
  }

  unselect(t) {
    s(this, it).unselect(t);
  }

  pointerup(t) {
    let n;
    const {
      isMac: e,
    } = _e.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div || !s(this, Mr) || (m(this, Mr, !1), (n = s(this, jt, mn)) != null && n.isDrawer && s(this, jt, mn).supportMultipleDrawings)) return;
    if (!s(this, Zl)) {
      m(this, Zl, !0);
      return;
    }
    const i = s(this, it).getMode();
    if (i === ft.STAMP || i === ft.SIGNATURE) {
      s(this, it).unselectAll();
      return;
    }
    this.createAndAddNewEditor(t, !1);
  }

  pointerdown(t) {
    let n;
    if (s(this, it).getMode() === ft.HIGHLIGHT && this.enableTextSelection(), s(this, Mr)) {
      m(this, Mr, !1);
      return;
    }
    const {
      isMac: e,
    } = _e.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div) return;
    if (m(this, Mr, !0), (n = s(this, jt, mn)) != null && n.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const i = s(this, it).getActive();
    m(this, Zl, !i || i.isEmpty());
  }

  startDrawingSession(t) {
    if (this.div.focus({
      preventScroll: !0,
    }), s(this, an)) {
      s(this, jt, mn).startDrawing(this, s(this, it), !1, t);
      return;
    }
    s(this, it).setCurrentDrawingSession(this), m(this, an, new AbortController());
    const e = s(this, it).combinedSignal(s(this, an));
    this.div.addEventListener('blur', ({
      relatedTarget: i,
    }) => {
      i && !this.div.contains(i) && (m(this, Rs, null), this.commitOrRemove());
    }, {
      signal: e,
    }), s(this, jt, mn).startDrawing(this, s(this, it), !1, t);
  }

  pause(t) {
    if (t) {
      const {
        activeElement: e,
      } = document;
      this.div.contains(e) && m(this, Rs, e);
      return;
    }
    s(this, Rs) && setTimeout(() => {
      let e;
      (e = s(this, Rs)) == null || e.focus(), m(this, Rs, null);
    }, 0);
  }

  endDrawingSession(t = !1) {
    return s(this, an) ? (s(this, it).setCurrentDrawingSession(null), s(this, an).abort(), m(this, an, null), m(this, Rs, null), s(this, jt, mn).endDrawing(t)) : null;
  }

  findNewParent(t, e, i) {
    const n = s(this, it).findParent(e, i);
    return n === null || n === this ? !1 : (n.changeParent(t), !0);
  }

  commitOrRemove() {
    return s(this, an) ? (this.endDrawingSession(), !0) : !1;
  }

  onScaleChanging() {
    s(this, an) && s(this, jt, mn).onScaleChangingWhenDrawing(this);
  }

  destroy() {
    let t; let
      e;
    this.commitOrRemove(), ((t = s(this, it).getActive()) == null ? void 0 : t.parent) === this && (s(this, it).commitOrRemove(), s(this, it).setActiveEditor(null)), s(this, ks) && (clearTimeout(s(this, ks)), m(this, ks, null));
    for (const i of s(this, ri).values()) (e = s(this, ao)) == null || e.removePointerInTextLayer(i.contentDiv), i.setParent(null), i.isAttachedToDOM = !1, i.div.remove();
    this.div = null, s(this, ri).clear(), s(this, it).removeLayer(this);
  }

  render({
    viewport: t,
  }) {
    this.viewport = t, Ir(this.div, t);
    for (const e of s(this, it).getEditors(this.pageIndex)) this.add(e), e.rebuild();
    this.updateMode();
  }

  update({
    viewport: t,
  }) {
    s(this, it).commitOrRemove(), A(this, jt, Tu).call(this);
    const e = this.viewport.rotation; const
      i = t.rotation;
    if (this.viewport = t, Ir(this.div, {
      rotation: i,
    }), e !== i) for (const n of s(this, ri).values()) n.rotate(i);
  }

  get pageDimensions() {
    const {
      pageWidth: t,
      pageHeight: e,
    } = this.viewport.rawDims;
    return [t, e];
  }

  get scale() {
    return s(this, it).viewParameters.realScale;
  }
};
ao = new WeakMap(), Zl = new WeakMap(), Rr = new WeakMap(), Lr = new WeakMap(), ks = new WeakMap(), ri = new WeakMap(), Mr = new WeakMap(), th = new WeakMap(), eh = new WeakMap(), an = new WeakMap(), Rs = new WeakMap(), Ae = new WeakMap(), Ls = new WeakMap(), Dr = new WeakMap(), ih = new WeakMap(), it = new WeakMap(), Or = new WeakMap(), jt = new WeakSet(), lg = function () {
  return s(this, ri).size !== 0 ? s(this, ri).values() : s(this, it).getEditors(this.pageIndex);
}, ov = function (t) {
  s(this, it).unselectAll();
  const {
    target: e,
  } = t;
  if (e === s(this, Ae).div || (e.getAttribute('role') === 'img' || e.classList.contains('endOfContent')) && s(this, Ae).div.contains(e)) {
    const {
      isMac: i,
    } = _e.platform;
    if (t.button !== 0 || t.ctrlKey && i) return;
    s(this, it).showAllEditors('highlight', !0, !0), s(this, Ae).div.classList.add('free'), this.toggleDrawing(), Bu.startHighlighting(this, s(this, it).direction === 'ltr', {
      target: s(this, Ae).div,
      x: t.x,
      y: t.y,
    }), s(this, Ae).div.addEventListener('pointerup', () => {
      s(this, Ae).div.classList.remove('free'), this.toggleDrawing(!0);
    }, {
      once: !0,
      signal: s(this, it)._signal,
    }), t.preventDefault();
  }
}, mn = function () {
  return s(Xi, Or).get(s(this, it).getMode());
}, hg = function (t) {
  const e = s(this, jt, mn);
  return e ? new e.prototype.constructor(t) : null;
}, cg = function () {
  const {
    x: t,
    y: e,
    width: i,
    height: n,
  } = this.boundingClientRect; const r = Math.max(0, t); const a = Math.max(0, e); const o = Math.min(window.innerWidth, t + i); const l = Math.min(window.innerHeight, e + n); const c = (r + o) / 2 - t; const d = (a + l) / 2 - e; const
    [u, g] = this.viewport.rotation % 180 === 0 ? [c, d] : [d, c];
  return {
    offsetX: u,
    offsetY: g,
  };
}, Tu = function () {
  for (const t of s(this, ri).values()) t.isEmpty() && t.remove();
}, V(Xi, '_initialized', !1), v(Xi, Or, new Map([Up, Zp, ag, Bu, rg].map((t) => [t._editorType, t])));
const ju = Xi;
let on; let qe; let oo; let Cd; let of; let lv; let Un; let dg; let hv; let
  ug;
const ue = class ue {
  constructor({
    pageIndex: t,
  }) {
    v(this, Un);
    v(this, on, null);
    v(this, qe, /* @__PURE__ */ new Map());
    v(this, oo, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }

  setParent(t) {
    if (!s(this, on)) {
      m(this, on, t);
      return;
    }
    if (s(this, on) !== t) {
      if (s(this, qe).size > 0) for (const e of s(this, qe).values()) e.remove(), t.append(e);
      m(this, on, t);
    }
  }

  static get _svgFactory() {
    return yt(this, '_svgFactory', new Vh());
  }

  draw(t, e = !1, i = !1) {
    const n = de(ue, Cd)._++; const r = A(this, Un, dg).call(this); const
      a = ue._svgFactory.createElement('defs');
    r.append(a);
    const o = ue._svgFactory.createElement('path');
    a.append(o);
    const l = `path_p${this.pageIndex}_${n}`;
    o.setAttribute('id', l), o.setAttribute('vector-effect', 'non-scaling-stroke'), e && s(this, oo).set(n, o);
    const c = i ? A(this, Un, hv).call(this, a, l) : null; const
      d = ue._svgFactory.createElement('use');
    return r.append(d), d.setAttribute('href', `#${l}`), this.updateProperties(r, t), s(this, qe).set(n, r), {
      id: n,
      clipPathId: `url(#${c})`,
    };
  }

  drawOutline(t, e) {
    const i = de(ue, Cd)._++; const n = A(this, Un, dg).call(this); const
      r = ue._svgFactory.createElement('defs');
    n.append(r);
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
    n.append(c), c.setAttribute('href', `#${o}`), l && c.setAttribute('mask', `url(#${l})`);
    const d = c.cloneNode();
    return n.append(d), c.classList.add('mainOutline'), d.classList.add('secondaryOutline'), this.updateProperties(n, t), s(this, qe).set(i, n), i;
  }

  finalizeDraw(t, e) {
    s(this, oo).delete(t), this.updateProperties(t, e);
  }

  updateProperties(t, e) {
    let l;
    if (!e) return;
    const {
      root: i,
      bbox: n,
      rootClass: r,
      path: a,
    } = e; const
      o = typeof t === 'number' ? s(this, qe).get(t) : t;
    if (o) {
      if (i && A(this, Un, ug).call(this, o, i), n && A(l = ue, of, lv).call(l, o, n), r) {
        const {
          classList: c,
        } = o;
        for (const [d, u] of Object.entries(r)) c.toggle(d, u);
      }
      if (a) {
        const d = o.firstChild.firstChild;
        A(this, Un, ug).call(this, d, a);
      }
    }
  }

  updateParent(t, e) {
    if (e === this) return;
    const i = s(this, qe).get(t);
    i && (s(e, on).append(i), s(this, qe).delete(t), s(e, qe).set(t, i));
  }

  remove(t) {
    s(this, oo).delete(t), s(this, on) !== null && (s(this, qe).get(t).remove(), s(this, qe).delete(t));
  }

  destroy() {
    m(this, on, null);
    for (const t of s(this, qe).values()) t.remove();
    s(this, qe).clear(), s(this, oo).clear();
  }
};
on = new WeakMap(), qe = new WeakMap(), oo = new WeakMap(), Cd = new WeakMap(), of = new WeakSet(), lv = function (t, [e, i, n, r]) {
  const {
    style: a,
  } = t;
  a.top = `${100 * i}%`, a.left = `${100 * e}%`, a.width = `${100 * n}%`, a.height = `${100 * r}%`;
}, Un = new WeakSet(), dg = function () {
  const t = ue._svgFactory.create(1, 1, !0);
  return s(this, on).append(t), t.setAttribute('aria-hidden', !0), t;
}, hv = function (t, e) {
  const i = ue._svgFactory.createElement('clipPath');
  t.append(i);
  const n = `clip_${e}`;
  i.setAttribute('id', n), i.setAttribute('clipPathUnits', 'objectBoundingBox');
  const r = ue._svgFactory.createElement('use');
  return i.append(r), r.setAttribute('href', `#${e}`), r.classList.add('clip'), n;
}, ug = function (t, e) {
  for (const [i, n] of Object.entries(e)) n === null ? t.removeAttribute(i) : t.setAttribute(i, n);
}, v(ue, of), v(ue, Cd, 0);
const zu = ue;
globalThis._pdfjsTestingUtils = {
  HighlightOutliner: Gp,
};
globalThis.pdfjsLib = {
  AbortException: Os,
  AnnotationEditorLayer: ju,
  AnnotationEditorParamsType: At,
  AnnotationEditorType: ft,
  AnnotationEditorUIManager: Fr,
  AnnotationLayer: kg,
  AnnotationMode: jn,
  AnnotationType: ne,
  applyOpacity: ay,
  build: cb,
  ColorPicker: Gh,
  createValidAbsoluteUrl: mg,
  CSSConstants: ry,
  DOMSVGFactory: Vh,
  DrawLayer: zu,
  FeatureTest: _e,
  fetchData: oh,
  findContrastColor: oy,
  getDocument: Eg,
  getFilenameFromUrl: iy,
  getPdfFilenameFromUrl: ny,
  getRGB: lh,
  getUuid: bg,
  getXfaPageViewport: sy,
  GlobalWorkerOptions: ln,
  ImageKind: Bh,
  InvalidPDFException: Ru,
  isDataScheme: Ld,
  isPdfFile: ff,
  isValidExplicitDest: jy,
  MathClamp: ze,
  noContextMenu: Ri,
  normalizeUnicode: ty,
  OPS: sh,
  OutputScale: dn,
  PasswordResponses: Qm,
  PDFDataRangeTransport: Cg,
  PDFDateString: $h,
  PDFWorker: rh,
  PermissionFlag: Jm,
  PixelsPerInch: Is,
  RenderingCancelledException: uf,
  renderRichText: Sg,
  ResponseException: jh,
  setLayerDimensions: Ir,
  shadow: yt,
  SignatureExtractor: zn,
  stopEvent: Kt,
  SupportedImageMimeTypes: Lu,
  TextLayer: Wh,
  TouchManager: Uh,
  updateUrlHash: yg,
  Util: tt,
  VerbosityLevel: Pd,
  version: hb,
  XfaLayer: wg,
};
const cv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbortException: Os,
  AnnotationEditorLayer: ju,
  AnnotationEditorParamsType: At,
  AnnotationEditorType: ft,
  AnnotationEditorUIManager: Fr,
  AnnotationLayer: kg,
  AnnotationMode: jn,
  AnnotationType: ne,
  CSSConstants: ry,
  ColorPicker: Gh,
  DOMSVGFactory: Vh,
  DrawLayer: zu,
  FeatureTest: _e,
  GlobalWorkerOptions: ln,
  ImageKind: Bh,
  InvalidPDFException: Ru,
  MathClamp: ze,
  OPS: sh,
  OutputScale: dn,
  PDFDataRangeTransport: Cg,
  PDFDateString: $h,
  PDFWorker: rh,
  PasswordResponses: Qm,
  PermissionFlag: Jm,
  PixelsPerInch: Is,
  RenderingCancelledException: uf,
  ResponseException: jh,
  SignatureExtractor: zn,
  SupportedImageMimeTypes: Lu,
  TextLayer: Wh,
  TouchManager: Uh,
  Util: tt,
  VerbosityLevel: Pd,
  XfaLayer: wg,
  applyOpacity: ay,
  build: cb,
  createValidAbsoluteUrl: mg,
  fetchData: oh,
  findContrastColor: oy,
  getDocument: Eg,
  getFilenameFromUrl: iy,
  getPdfFilenameFromUrl: ny,
  getRGB: lh,
  getUuid: bg,
  getXfaPageViewport: sy,
  isDataScheme: Ld,
  isPdfFile: ff,
  isValidExplicitDest: jy,
  noContextMenu: Ri,
  normalizeUnicode: ty,
  renderRichText: Sg,
  setLayerDimensions: Ir,
  shadow: yt,
  stopEvent: Kt,
  updateUrlHash: yg,
  version: hb,
}, Symbol.toStringTag, { value: 'Module' }));
function dv(h) {
  let t; let e; let
    i = '';
  if (typeof h === 'string' || typeof h === 'number') i += h;
  else if (typeof h === 'object') {
    if (Array.isArray(h)) {
      const n = h.length;
      for (t = 0; t < n; t++) h[t] && (e = dv(h[t])) && (i && (i += ' '), i += e);
    } else for (e in h) h[e] && (i && (i += ' '), i += e);
  }
  return i;
}
function mf() {
  for (var h, t, e = 0, i = '', n = arguments.length; e < n; e++) (h = arguments[e]) && (t = dv(h)) && (i && (i += ' '), i += t);
  return i;
}
const Pm = Object.prototype.hasOwnProperty;
function km(h, t, e) {
  for (e of h.keys()) if (ko(e, t)) return e;
}
function ko(h, t) {
  let e; let i; let
    n;
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
      for (i of h) if (n = i, n && typeof n === 'object' && (n = km(t, n), !n) || !t.has(n)) return !1;
      return !0;
    }
    if (e === Map) {
      if (h.size !== t.size) return !1;
      for (i of h) if (n = i[0], n && typeof n === 'object' && (n = km(t, n), !n) || !ko(i[1], t.get(n))) return !1;
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
      for (e in h) if (Pm.call(h, e) && ++i && !Pm.call(t, e) || !(e in t) || !ko(h[e], t[e])) return !1;
      return Object.keys(t).length === i;
    }
  }
  return h !== h && t !== t;
}
function Id(h) {
  let t = !1;
  return {
    promise: new Promise((i, n) => {
      h.then((r) => !t && i(r)).catch((r) => !t && n(r));
    }),
    cancel() {
      t = !0;
    },
  };
}
const oS = ['onCopy', 'onCut', 'onPaste']; const lS = [
  'onCompositionEnd',
  'onCompositionStart',
  'onCompositionUpdate',
]; const hS = ['onFocus', 'onBlur']; const cS = ['onInput', 'onInvalid', 'onReset', 'onSubmit']; const dS = ['onLoad', 'onError']; const uS = ['onKeyDown', 'onKeyPress', 'onKeyUp']; const fS = [
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
]; const pS = [
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
]; const gS = [
  'onDrag',
  'onDragEnd',
  'onDragEnter',
  'onDragExit',
  'onDragLeave',
  'onDragOver',
  'onDragStart',
  'onDrop',
]; const mS = ['onSelect']; const yS = ['onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart']; const bS = [
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
]; const vS = ['onScroll']; const wS = ['onWheel']; const SS = [
  'onAnimationStart',
  'onAnimationEnd',
  'onAnimationIteration',
]; const AS = ['onTransitionEnd']; const _S = ['onToggle']; const xS = ['onChange']; const
  ES = [
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
    ...bS,
    ...vS,
    ...wS,
    ...SS,
    ...AS,
    ...xS,
    ..._S,
  ];
function uv(h, t) {
  const e = {};
  for (const i of ES) {
    const n = h[i];
    n && (t ? e[i] = ((r) => n(r, t(i))) : e[i] = n);
  }
  return e;
}
const CS = process.env.NODE_ENV === 'production';
const Bf = 'Invariant failed';
function Ht(h, t) {
  if (!h) {
    if (CS) throw new Error(Bf);
    const e = typeof t === 'function' ? t() : t; const
      i = e ? ''.concat(Bf, ': ').concat(e) : Bf;
    throw new Error(i);
  }
}
let Hf; let
  Rm;
function TS() {
  if (Rm) return Hf;
  Rm = 1;
  const h = process.env.NODE_ENV !== 'production';
  let t = function () {
  };
  if (h) {
    const e = function (n, r) {
      const a = arguments.length;
      r = new Array(a > 1 ? a - 1 : 0);
      for (let o = 1; o < a; o++) r[o - 1] = arguments[o];
      let l = 0; const
        c = `Warning: ${n.replace(/%s/g, () => r[l++])}`;
      typeof console < 'u' && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
    t = function (i, n, r) {
      const a = arguments.length;
      r = new Array(a > 2 ? a - 2 : 0);
      for (let o = 2; o < a; o++) r[o - 2] = arguments[o];
      if (n === void 0) {
        throw new Error(
          '`warning(condition, format, ...args)` requires a warning message argument',
        );
      }
      i || e.apply(null, [n].concat(r));
    };
  }
  return Hf = t, Hf;
}
const PS = TS();
const $e = /* @__PURE__ */ Um(PS); const fv = jm(null); const
  kS = 'noopener noreferrer nofollow';
class RS {
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
    return Ht(this.pdfViewer, 'PDF viewer is not initialized.'), this.pdfViewer.currentPageNumber || 0;
  }

  set page(t) {
    Ht(this.pdfViewer, 'PDF viewer is not initialized.'), this.pdfViewer.currentPageNumber = t;
  }

  get rotation() {
    return 0;
  }

  set rotation(t) {
  }

  addLinkAttributes(t, e, i) {
    t.href = e, t.rel = this.externalLinkRel || kS, t.target = i ? '_blank' : this.externalLinkTarget || '';
  }

  goToDestination(t) {
    return new Promise((e) => {
      Ht(this.pdfDocument, 'PDF document not loaded.'), Ht(t, 'Destination is not specified.'), typeof t === 'string' ? this.pdfDocument.getDestination(t).then(e) : Array.isArray(t) ? e(t) : t.then(e);
    }).then((e) => {
      Ht(Array.isArray(e), `"${e}" is not a valid destination array.`);
      const i = e[0];
      new Promise((n) => {
        Ht(this.pdfDocument, 'PDF document not loaded.'), i instanceof Object ? this.pdfDocument.getPageIndex(i).then((r) => {
          n(r);
        }).catch(() => {
          Ht(!1, `"${i}" is not a valid page reference.`);
        }) : typeof i === 'number' ? n(i) : Ht(!1, `"${i}" is not a valid destination reference.`);
      }).then((n) => {
        const r = n + 1;
        Ht(this.pdfViewer, 'PDF viewer is not initialized.'), Ht(r >= 1 && r <= this.pagesCount, `"${r}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
          dest: e,
          pageIndex: n,
          pageNumber: r,
        });
      });
    });
  }

  goToPage(t) {
    const e = t - 1;
    Ht(this.pdfViewer, 'PDF viewer is not initialized.'), Ht(t >= 1 && t <= this.pagesCount, `"${t}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
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
  return X('div', { className: `react-pdf__message react-pdf__message--${t}`, children: h });
}
const fg = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2,
};
function LS(h, t) {
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
  return kv(LS, { value: void 0, error: void 0 });
}
const yf = typeof window < 'u';
const pv = yf && window.location.protocol === 'file:';
function MS(h) {
  return typeof h < 'u';
}
function $r(h) {
  return MS(h) && h !== null;
}
function DS(h) {
  return typeof h === 'string';
}
function OS(h) {
  return h instanceof ArrayBuffer;
}
function IS(h) {
  return Ht(yf, 'isBlob can only be used in a browser environment'), h instanceof Blob;
}
function pg(h) {
  return DS(h) && /^data:/.test(h);
}
function Lm(h) {
  Ht(pg(h), 'Invalid data URI.');
  const [t = '', e = ''] = h.split(',');
  return t.split(';').indexOf('base64') !== -1 ? atob(e) : unescape(e);
}
function FS() {
  return yf && window.devicePixelRatio || 1;
}
const gv = 'On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.';
function Mm() {
  $e(!pv, `Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ${gv}`);
}
function NS() {
  $e(!pv, `Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ${gv}`);
}
function ho(h) {
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
function mv(h) {
  return h.name === 'AbortException' || h.name === 'RenderingCancelledException';
}
function BS(h) {
  return new Promise((t, e) => {
    const i = new FileReader();
    i.onload = () => {
      if (!i.result) return e(new Error('Error while reading a file.'));
      t(i.result);
    }, i.onerror = (n) => {
      if (!n.target) return e(new Error('Error while reading a file.'));
      const { error: r } = n.target;
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
const { PDFDataRangeTransport: HS } = cv; const
  jS = (h, t) => {
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
function Dm(h) {
  return typeof h === 'object' && h !== null && ('data' in h || 'range' in h || 'url' in h);
}
const zS = Hm(({
  children: t, className: e, error: i = 'Failed to load PDF file.', externalLinkRel: n, externalLinkTarget: r, file: a, inputRef: o, imageResourcesPath: l, loading: c = 'Loading PDF…', noData: d = 'No PDF file specified.', onItemClick: u, onLoadError: g, onLoadProgress: b, onLoadSuccess: C, onPassword: S = jS, onSourceError: L, onSourceSuccess: k, options: M, renderMode: R, rotate: p, scale: f, ...y
}, _) => {
  const [T, P] = ah(); const { value: E, error: D } = T; const [N, I] = ah(); const { value: B, error: j } = N; const z = oi(new RS()); const w = oi([]); const K = oi(void 0); const
    F = oi(void 0);
  a && a !== K.current && Dm(a) && ($e(!ko(a, K.current), 'File prop passed to <Document /> changed, but it\'s equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.'), K.current = a), M && M !== F.current && ($e(!ko(M, F.current), 'Options prop passed to <Document /> changed, but it\'s equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.'), F.current = M);
  const x = oi({
    // Handling jumping to internal links target
    scrollPageIntoView: (nt) => {
      const { dest: st, pageNumber: at, pageIndex: St = at - 1 } = nt;
      if (u) {
        u({ dest: st, pageIndex: St, pageNumber: at });
        return;
      }
      const ot = w.current[St];
      if (ot) {
        ot.scrollIntoView();
        return;
      }
      $e(!1, `An internal link leading to page ${at} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`);
    },
  });
  zm(_, () => ({
    linkService: z,
    pages: w,
    viewer: x,
  }), []);
  function O() {
    k && k();
  }
  function H() {
    D && ($e(!1, D.toString()), L && L(D));
  }
  function U() {
    P({ type: 'RESET' });
  }
  It(U, [a, P]);
  const $ = $n(async () => {
    if (!a) return null;
    if (typeof a === 'string') return pg(a) ? { data: Lm(a) } : (Mm(), { url: a });
    if (a instanceof HS) return { range: a };
    if (OS(a)) return { data: a };
    if (yf && IS(a)) return { data: await BS(a) };
    if (Ht(typeof a === 'object', 'Invalid parameter in file, need either Uint8Array, string or a parameter object'), Ht(Dm(a), 'Invalid parameter object: need either .data, .range or .url'), 'url' in a && typeof a.url === 'string') {
      if (pg(a.url)) {
        const { url: nt, ...st } = a;
        return { data: Lm(nt), ...st };
      }
      Mm();
    }
    return a;
  }, [a]);
  It(() => {
    const nt = Id($());
    return nt.promise.then((st) => {
      P({ type: 'RESOLVE', value: st });
    }).catch((st) => {
      P({ type: 'REJECT', error: st });
    }), () => {
      ho(nt);
    };
  }, [$, P]), It(() => {
    if (!(typeof E > 'u')) {
      if (E === !1) {
        H();
        return;
      }
      O();
    }
  }, [E]);
  function q() {
    B && (C && C(B), w.current = new Array(B.numPages), z.current.setDocument(B));
  }
  function G() {
    j && ($e(!1, j.toString()), g && g(j));
  }
  It(() => {
    I({ type: 'RESET' });
  }, [I, E]), It(() => {
    if (!E) return;
    const st = M ? { ...E, ...M } : E; const
      at = Eg(st);
    b && (at.onProgress = b), S && (at.onPassword = S);
    const St = at;
    return St.promise.then((ot) => {
      St.destroyed || I({ type: 'RESOLVE', value: ot });
    }).catch((ot) => {
      St.destroyed || I({ type: 'REJECT', error: ot });
    }), () => {
      St.destroy();
    };
  }, [M, I, E]), It(() => {
    if (!(typeof B > 'u')) {
      if (B === !1) {
        G();
        return;
      }
      q();
    }
  }, [B]), It(() => {
    z.current.setViewer(x.current), z.current.setExternalLinkRel(n), z.current.setExternalLinkTarget(r);
  }, [n, r]);
  const W = $n((nt, st) => {
    w.current[nt] = st;
  }, []); const ht = $n((nt) => {
    delete w.current[nt];
  }, []); const ct = cn(() => ({
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
    dt = cn(
      () => uv(y, () => B),
      // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
      [y, B],
    );
  function ut() {
    function nt(at) {
      return !!(at != null && at.pdf);
    }
    if (!nt(ct)) throw new Error('pdf is undefined');
    const st = typeof t === 'function' ? t(ct) : t;
    return X(fv.Provider, { value: ct, children: st });
  }
  function rt() {
    return a ? B == null ? X(Ro, { type: 'loading', children: typeof c === 'function' ? c() : c }) : B === !1 ? X(Ro, { type: 'error', children: typeof i === 'function' ? i() : i }) : ut() : X(Ro, { type: 'no-data', children: typeof d === 'function' ? d() : d });
  }
  return X('div', {
    className: mf('react-pdf__Document', e),
    // Assertion is needed for React 18 compatibility
    ref: o,
    ...dt,
    children: rt(),
  });
});
function Mg() {
  return $m(fv);
}
function yv() {
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
const bv = jm(null);
function Fd() {
  return $m(bv);
}
function $S() {
  const h = Mg(); const
    t = Fd();
  Ht(t, 'Unable to find Page context.');
  const e = { ...h, ...t }; const
    {
      filterAnnotations: i, imageResourcesPath: n, linkService: r, onGetAnnotationsError: a, onGetAnnotationsSuccess: o, onRenderAnnotationLayerError: l, onRenderAnnotationLayerSuccess: c, page: d, pdf: u, renderForms: g, rotate: b, scale: C = 1,
    } = e;
  Ht(u, 'Attempted to load page annotations, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.'), Ht(d, 'Attempted to load page annotations, but no page was specified.'), Ht(r, 'Attempted to load page annotations, but no linkService was specified.');
  const [S, L] = ah(); const { value: k, error: M } = S; const
    R = oi(null);
  $e(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue('--react-pdf-annotation-layer'), 10) === 1, 'AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations');
  function p() {
    k && o && o(k);
  }
  function f() {
    M && ($e(!1, M.toString()), a && a(M));
  }
  It(() => {
    L({ type: 'RESET' });
  }, [L, d]), It(() => {
    if (!d) return;
    const E = Id(d.getAnnotations()); const
      D = E;
    return E.promise.then((N) => {
      L({ type: 'RESOLVE', value: N });
    }).catch((N) => {
      L({ type: 'REJECT', error: N });
    }), () => {
      ho(D);
    };
  }, [L, d]), It(() => {
    if (k !== void 0) {
      if (k === !1) {
        f();
        return;
      }
      p();
    }
  }, [k]);
  function y() {
    c && c();
  }
  function _(P) {
    $e(!1, `${P}`), l && l(P);
  }
  const T = cn(() => d.getViewport({ scale: C, rotation: b }), [d, b, C]);
  return It(() => {
    if (!u || !d || !r || !k) return;
    const { current: E } = R;
    if (!E) return;
    const D = T.clone({ dontFlip: !0 }); const N = {
      accessibilityManager: null,
      // TODO: Implement this
      annotationCanvasMap: null,
      // TODO: Implement this
      annotationEditorUIManager: null,
      // TODO: Implement this
      annotationStorage: u.annotationStorage,
      commentManager: null,
      // TODO: Implement this
      div: E,
      l10n: null,
      // TODO: Implement this
      linkService: r,
      page: d,
      structTreeLayer: null,
      // TODO: Implement this
      viewport: D,
    }; const
      I = {
        annotations: i ? i({ annotations: k }) : k,
        annotationStorage: u.annotationStorage,
        div: E,
        imageResourcesPath: n,
        linkService: r,
        page: d,
        renderForms: g,
        viewport: D,
      };
    E.innerHTML = '';
    try {
      new kg(N).render(I), y();
    } catch (B) {
      _(B);
    }
    return () => {
    };
  }, [
    k,
    i,
    n,
    r,
    d,
    u,
    g,
    T,
  ]), X('div', { className: mf('react-pdf__Page__annotations', 'annotationLayer'), ref: R });
}
const vv = {
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
const US = /^H(\d+)$/;
function WS(h) {
  return h in vv;
}
function bf(h) {
  return 'children' in h;
}
function wv(h) {
  return bf(h) ? h.children.length === 1 && 0 in h.children && 'id' in h.children[0] : !1;
}
function GS(h) {
  const t = {};
  if (bf(h)) {
    const { role: e } = h; const
      i = e.match(US);
    if (i) t.role = 'heading', t['aria-level'] = Number(i[1]);
    else if (WS(e)) {
      const n = vv[e];
      n && (t.role = n);
    }
  }
  return t;
}
function Sv(h) {
  const t = {};
  if (bf(h)) {
    if (h.alt !== void 0 && (t['aria-label'] = h.alt), h.lang !== void 0 && (t.lang = h.lang), wv(h)) {
      const [e] = h.children;
      if (e) {
        const i = Sv(e);
        return {
          ...t,
          ...i,
        };
      }
    }
  } else 'id' in h && (t['aria-owns'] = h.id);
  return t;
}
function VS(h) {
  return h ? {
    ...GS(h),
    ...Sv(h),
  } : null;
}
function Av({ className: h, node: t }) {
  const e = cn(() => VS(t), [t]); const
    i = cn(() => (!bf(t) || wv(t) ? null : t.children.map((n, r) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: index is stable here
      X(Av, { node: n }, r)
    ))), [t]);
  return X('span', { className: h, ...e, children: i });
}
function qS() {
  const h = Fd();
  Ht(h, 'Unable to find Page context.');
  const { onGetStructTreeError: t, onGetStructTreeSuccess: e } = h; const [i, n] = ah(); const { value: r, error: a } = i; const
    { customTextRenderer: o, page: l } = h;
  function c() {
    r && e && e(r);
  }
  function d() {
    a && ($e(!1, a.toString()), t && t(a));
  }
  return It(() => {
    n({ type: 'RESET' });
  }, [n, l]), It(() => {
    if (o || !l) return;
    const g = Id(l.getStructTree()); const
      b = g;
    return g.promise.then((C) => {
      n({ type: 'RESOLVE', value: C });
    }).catch((C) => {
      n({ type: 'REJECT', error: C });
    }), () => ho(b);
  }, [o, l, n]), It(() => {
    if (r !== void 0) {
      if (r === !1) {
        d();
        return;
      }
      c();
    }
  }, [r]), r ? X(Av, { className: 'react-pdf__Page__structTree structTree', node: r }) : null;
}
const Om = jn;
function XS(h) {
  const t = Fd();
  Ht(t, 'Unable to find Page context.');
  const e = { ...t, ...h }; const {
    _className: i, canvasBackground: n, devicePixelRatio: r = FS(), onRenderError: a, onRenderSuccess: o, page: l, renderForms: c, renderTextLayer: d, pageColors: u, rotate: g, scale: b,
  } = e; const
    { canvasRef: C } = h;
  Ht(l, 'Attempted to render page canvas, but no page was specified.');
  const S = oi(null);
  function L() {
    l && o && o(gg(l, b));
  }
  function k(f) {
    mv(f) || ($e(!1, f.toString()), a && a(f));
  }
  const M = cn(() => l.getViewport({ scale: b * r, rotation: g }), [r, l, g, b]); const
    R = cn(() => l.getViewport({ scale: b, rotation: g }), [l, g, b]);
  It(() => {
    if (!l) return;
    l.cleanup();
    const { current: y } = S;
    if (!y) return;
    y.width = M.width, y.height = M.height, y.style.width = `${Math.floor(R.width)}px`, y.style.height = `${Math.floor(R.height)}px`, y.style.visibility = 'hidden';
    const _ = {
      annotationMode: c ? Om.ENABLE_FORMS : Om.ENABLE,
      canvas: y,
      canvasContext: y.getContext('2d', { alpha: !1 }),
      pageColors: u,
      viewport: M,
    };
    n && (_.background = n);
    const T = l.render(_); const
      P = T;
    return T.promise.then(() => {
      y.style.visibility = '', L();
    }).catch(k), () => ho(P);
  }, [n, l, u, c, M, R]);
  const p = $n(() => {
    const { current: f } = S;
    f && (f.width = 0, f.height = 0);
  }, []);
  return It(() => p, [p]), X('canvas', {
    className: `${i}__canvas`,
    dir: 'ltr',
    ref: yv(C, S),
    style: {
      display: 'block',
      userSelect: 'none',
    },
    children: d ? X(qS, {}) : null,
  });
}
function YS(h) {
  return 'str' in h;
}
const KS = /* @__PURE__ */ new Set([
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
  JS = /* @__PURE__ */ new Set(['action', 'formaction', 'href', 'poster', 'src', 'xlink:href']);
function QS(h) {
  let t = '';
  for (const e of h) {
    const i = e.charCodeAt(0);
    i <= 32 || i === 127 || (t += e.toLowerCase());
  }
  return t.startsWith('javascript:') || t.startsWith('vbscript:');
}
function ZS(h) {
  return h.nodeType === Node.ELEMENT_NODE;
}
function _v(h) {
  return ZS(h) && h instanceof HTMLElement;
}
function tA(h) {
  return _v(h) && KS.has(h.tagName.toLowerCase());
}
function eA(h) {
  const t = document.createElement(h.tagName.toLowerCase());
  return Array.from(h.attributes).forEach((e) => {
    const i = e.name.toLowerCase();
    i.startsWith('on') || i === 'srcdoc' || JS.has(i) && QS(e.value) || t.setAttribute(e.name, e.value);
  }), Array.from(h.childNodes).forEach((e) => {
    t.append(xv(e));
  }), t;
}
function xv(h) {
  let t;
  return _v(h) && !tA(h) ? eA(h) : document.createTextNode((t = h.textContent) !== null && t !== void 0 ? t : '');
}
function iA(h, t) {
  const e = document.createElement('template');
  e.innerHTML = t;
  const i = document.createDocumentFragment();
  Array.from(e.content.childNodes).forEach((n) => {
    i.append(xv(n));
  }), h.replaceChildren(i);
}
function nA() {
  const h = Fd();
  Ht(h, 'Unable to find Page context.');
  const {
    customTextRenderer: t, onGetTextError: e, onGetTextSuccess: i, onRenderTextLayerError: n, onRenderTextLayerSuccess: r, page: a, pageIndex: o, pageNumber: l, rotate: c, scale: d,
  } = h;
  Ht(a, 'Attempted to load page text content, but no page was specified.');
  const [u, g] = ah(); const { value: b, error: C } = u; const
    S = oi(null);
  $e(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue('--react-pdf-text-layer'), 10) === 1, 'TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer');
  function L() {
    b && i && i(b);
  }
  function k() {
    C && ($e(!1, C.toString()), e && e(C));
  }
  It(() => {
    g({ type: 'RESET' });
  }, [a, g]), It(() => {
    if (!a) return;
    const T = Id(a.getTextContent()); const
      P = T;
    return T.promise.then((E) => {
      g({ type: 'RESOLVE', value: E });
    }).catch((E) => {
      g({ type: 'REJECT', error: E });
    }), () => ho(P);
  }, [a, g]), It(() => {
    if (b !== void 0) {
      if (b === !1) {
        k();
        return;
      }
      L();
    }
  }, [b]);
  const M = $n(() => {
    r && r();
  }, [r]); const
    R = $n((_) => {
      mv(_) || ($e(!1, _.toString()), n && n(_));
    }, [n]);
  function p() {
    const _ = S.current;
    _ && _.classList.add('selecting');
  }
  function f() {
    const _ = S.current;
    _ && _.classList.remove('selecting');
  }
  const y = cn(() => a.getViewport({ scale: d, rotation: c }), [a, c, d]);
  return Rv(() => {
    if (!a || !b) return;
    const { current: T } = S;
    if (!T) return;
    T.innerHTML = '';
    const P = a.streamTextContent({ includeMarkedContent: !0 }); const E = {
      container: T,
      textContentSource: P,
      viewport: y,
    }; const D = new Wh(E); const
      N = D;
    return D.render().then(() => {
      const I = document.createElement('div');
      I.className = 'endOfContent', T.append(I);
      const B = T.querySelectorAll('[role="presentation"]');
      if (t) {
        let j = 0;
        b.items.forEach((z, w) => {
          if (!YS(z)) return;
          const K = B[j];
          if (!K) return;
          const F = t({
            pageIndex: o,
            pageNumber: l,
            itemIndex: w,
            ...z,
          });
          iA(K, F), j += z.str && z.hasEOL ? 2 : 1;
        });
      }
      M();
    }).catch(R), () => ho(N);
  }, [
    t,
    R,
    M,
    a,
    o,
    l,
    b,
    y,
  ]), // biome-ignore lint/a11y/noStaticElementInteractions: False positive caused by non interactive wrapper listening for bubbling events
  X('div', {
    className: mf('react-pdf__Page__textContent', 'textLayer'), onMouseUp: f, onMouseDown: p, ref: S,
  });
}
const Im = 1;
function sA(h) {
  const e = { ...Mg(), ...h }; const {
    _className: i = 'react-pdf__Page', _enableRegisterUnregisterPage: n = !0, canvasBackground: r, canvasRef: a, children: o, className: l, customRenderer: c, customTextRenderer: d, devicePixelRatio: u, error: g = 'Failed to load the page.', filterAnnotations: b, height: C, inputRef: S, loading: L = 'Loading page…', noData: k = 'No page specified.', onGetAnnotationsError: M, onGetAnnotationsSuccess: R, onGetStructTreeError: p, onGetStructTreeSuccess: f, onGetTextError: y, onGetTextSuccess: _, onLoadError: T, onLoadSuccess: P, onRenderAnnotationLayerError: E, onRenderAnnotationLayerSuccess: D, onRenderError: N, onRenderSuccess: I, onRenderTextLayerError: B, onRenderTextLayerSuccess: j, pageColors: z, pageIndex: w, pageNumber: K, pdf: F, registerPage: x, renderAnnotationLayer: O = !0, renderForms: H = !1, renderMode: U = 'canvas', renderTextLayer: $ = !0, rotate: q, scale: G = Im, unregisterPage: W, width: ht, ...ct
  } = e; const [dt, ut] = ah(); const { value: rt, error: nt } = dt; const
    st = oi(null);
  Ht(F, 'Attempted to load a page, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.');
  const at = $r(K) ? K - 1 : w ?? null; const St = K ?? ($r(w) ? w + 1 : null); const ot = q ?? (rt ? rt.rotate : null); const
    Ct = cn(() => {
      if (!rt) return null;
      let Bs = 1;
      const fo = G ?? Im;
      if (ht || C) {
        const Hs = rt.getViewport({ scale: 1, rotation: ot });
        ht ? Bs = ht / Hs.width : C && (Bs = C / Hs.height);
      }
      return fo * Bs;
    }, [C, rt, ot, G, ht]);
  It(() => () => {
    $r(at) && n && W && W(at);
  }, [n, F, at, W]);
  function ae() {
    if (P) {
      if (!rt || !Ct) return;
      P(gg(rt, Ct));
    }
    if (n && x) {
      if (!$r(at) || !st.current) return;
      x(at, st.current);
    }
  }
  function ce() {
    nt && ($e(!1, nt.toString()), T && T(nt));
  }
  It(() => {
    ut({ type: 'RESET' });
  }, [ut, F, at]), It(() => {
    if (!F || !St) return;
    const fo = Id(F.getPage(St)); const
      Hs = fo;
    return fo.promise.then((wf) => {
      ut({ type: 'RESOLVE', value: wf });
    }).catch((wf) => {
      ut({ type: 'REJECT', error: wf });
    }), () => ho(Hs);
  }, [ut, F, St]), It(() => {
    if (rt !== void 0) {
      if (rt === !1) {
        ce();
        return;
      }
      ae();
    }
  }, [rt, Ct]);
  const xe = cn(() => (
    // Technically there cannot be page without pageIndex, pageNumber, rotate and scale, but TypeScript doesn't know that
    $r(at) && St && $r(ot) && $r(Ct) ? {
      _className: i,
      canvasBackground: r,
      customTextRenderer: d,
      devicePixelRatio: u,
      filterAnnotations: b,
      onGetAnnotationsError: M,
      onGetAnnotationsSuccess: R,
      onGetStructTreeError: p,
      onGetStructTreeSuccess: f,
      onGetTextError: y,
      onGetTextSuccess: _,
      onRenderAnnotationLayerError: E,
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
      renderTextLayer: $,
      rotate: ot,
      scale: Ct,
    } : null
  ), [
    i,
    r,
    d,
    u,
    b,
    M,
    R,
    p,
    f,
    y,
    _,
    E,
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
    $,
    ot,
    Ct,
  ]); const Wn = cn(
    () => uv(ct, () => rt && (Ct ? gg(rt, Ct) : void 0)),
    // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
    [ct, rt, Ct],
  ); const
    Gn = `${at}@${Ct}/${ot}`;
  function Nd() {
    switch (U) {
      case 'custom':
        return Ht(c, 'renderMode was set to "custom", but no customRenderer was passed.'), X(c, {}, `${Gn}_custom`);
      case 'none':
        return null;
      case 'canvas':
      default:
        return X(XS, { canvasRef: a }, `${Gn}_canvas`);
    }
  }
  function Hr() {
    return $ ? X(nA, {}, `${Gn}_text`) : null;
  }
  function vf() {
    return O ? X($S, {}, `${Gn}_annotations`) : null;
  }
  function fn() {
    function Bs(Hs) {
      return !!(Hs != null && Hs.page);
    }
    if (!Bs(xe)) throw new Error('page is undefined');
    const fo = typeof o === 'function' ? o(xe) : o;
    return Yn(bv.Provider, { value: xe, children: [Nd(), Hr(), vf(), fo] });
  }
  function jr() {
    return St ? F === null || rt === void 0 || rt === null ? X(Ro, { type: 'loading', children: typeof L === 'function' ? L() : L }) : F === !1 || rt === !1 ? X(Ro, { type: 'error', children: typeof g === 'function' ? g() : g }) : fn() : X(Ro, { type: 'no-data', children: typeof k === 'function' ? k() : k });
  }
  return X('div', {
    className: mf(i, l),
    'data-page-number': St,
    // Assertion is needed for React 18 compatibility
    ref: yv(S, st),
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
    ...Wn,
    children: jr(),
  });
}
NS();
ln.workerSrc = 'pdf.worker.mjs';
const rA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Document: zS,
  Page: sA,
  PasswordResponses: fg,
  pdfjs: cv,
  useDocumentContext: Mg,
  usePageContext: Fd,
}, Symbol.toStringTag, { value: 'Module' }));
const Nh = { exports: {} }; const aA = Nh.exports; let
  Fm;
function oA() {
  return Fm || (Fm = 1, (function (h, t) {
    (function (e, i) {
      i(t);
    }(aA, ((e) => {
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
      class n extends i {
        constructor(p, f, y) {
          super(p, y), this.image = null, this.isLoad = !1, this.loadingAngle = 0, this.image = new Image(), this.image.src = f;
        }

        draw(p) {
          const f = this.render.getContext(); const y = this.render.convertToGlobal(this.state.position); const _ = this.render.getRect().pageWidth; const
            T = this.render.getRect().height;
          f.save(), f.translate(y.x, y.y), f.beginPath();
          for (let P of this.state.area) P !== null && (P = this.render.convertToGlobal(P), f.lineTo(P.x - y.x, P.y - y.y));
          f.rotate(this.state.angle), f.clip(), this.isLoad ? f.drawImage(this.image, 0, 0, _, T) : this.drawLoader(f, { x: 0, y: 0 }, _, T), f.restore();
        }

        simpleDraw(p) {
          const f = this.render.getRect(); const y = this.render.getContext(); const _ = f.pageWidth; const T = f.height; const P = p === 1 ? f.left + f.pageWidth : f.left; const
            E = f.top;
          this.isLoad ? y.drawImage(this.image, P, E, _, T) : this.drawLoader(y, { x: P, y: E }, _, T);
        }

        drawLoader(p, f, y, _) {
          p.beginPath(), p.strokeStyle = 'rgb(200, 200, 200)', p.fillStyle = 'rgb(255, 255, 255)', p.lineWidth = 1, p.rect(f.x + 1, f.y + 1, y - 1, _ - 1), p.stroke(), p.fill();
          const T = { x: f.x + y / 2, y: f.y + _ / 2 };
          p.beginPath(), p.lineWidth = 10, p.arc(T.x, T.y, 20, this.loadingAngle, 3 * Math.PI / 2 + this.loadingAngle), p.stroke(), p.closePath(), this.loadingAngle += 0.07, this.loadingAngle >= 2 * Math.PI && (this.loadingAngle = 0);
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
            const f = new n(this.render, p, 'soft');
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
          const y = p[0].y - p[1].y; const _ = f[0].y - f[1].y; const T = p[1].x - p[0].x; const
            P = f[1].x - f[0].x;
          return Math.acos((y * _ + T * P) / (Math.sqrt(y * y + T * T) * Math.sqrt(_ * _ + P * P)));
        }

        static PointInRect(p, f) {
          return f === null ? null : f.x >= p.left && f.x <= p.width + p.left && f.y >= p.top && f.y <= p.top + p.height ? f : null;
        }

        static GetRotatedPoint(p, f, y) {
          return { x: p.x * Math.cos(y) + p.y * Math.sin(y) + f.x, y: p.y * Math.cos(y) - p.x * Math.sin(y) + f.y };
        }

        static LimitPointToCircle(p, f, y) {
          if (o.GetDistanceBetweenTwoPoint(p, y) <= f) return y;
          const _ = p.x; const T = p.y; const P = y.x; const
            E = y.y;
          let D = Math.sqrt(f ** 2 * (_ - P) ** 2 / ((_ - P) ** 2 + (T - E) ** 2)) + _;
          y.x < 0 && (D *= -1);
          let N = (D - _) * (T - E) / (_ - P) + T;
          return _ - P + T === 0 && (N = f), { x: D, y: N };
        }

        static GetIntersectBetweenTwoSegment(p, f, y) {
          return o.PointInRect(p, o.GetIntersectBeetwenTwoLine(f, y));
        }

        static GetIntersectBeetwenTwoLine(p, f) {
          const y = p[0].y - p[1].y; const _ = f[0].y - f[1].y; const T = p[1].x - p[0].x; const P = f[1].x - f[0].x; const E = p[0].x * p[1].y - p[1].x * p[0].y; const D = f[0].x * f[1].y - f[1].x * f[0].y; const N = y * D - _ * E; const I = T * D - P * E; const B = -(E * P - D * T) / (y * P - _ * T); const
            j = -(y * D - _ * E) / (y * P - _ * T);
          if (isFinite(B) && isFinite(j)) return { x: B, y: j };
          if (Math.abs(N - I) < 0.1) throw new Error('Segment included');
          return null;
        }

        static GetCordsFromTwoPoint(p, f) {
          const y = Math.abs(p.x - f.x); const _ = Math.abs(p.y - f.y); const T = Math.max(y, _); const
            P = [p];
          function E(D, N, I, B, j) {
            return N > D ? D + j * (I / B) : N < D ? D - j * (I / B) : D;
          }
          for (let D = 1; D <= T; D += 1) P.push({ x: E(p.x, f.x, y, T, D), y: E(p.y, f.y, _, T, D) });
          return P;
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
            T = this.render.getRect().height;
          this.element.classList.remove('--simple');
          const P = `
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${_}px;
            height: ${T}px;
        `;
          f === 'hard' ? this.drawHard(P) : this.drawSoft(y, P);
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
          for (const T of this.state.area) {
            if (T !== null) {
              let P = this.render.getDirection() === 1 ? { x: -T.x + this.state.position.x, y: T.y - this.state.position.y } : { x: T.x - this.state.position.x, y: T.y - this.state.position.y };
              P = o.GetRotatedPoint(P, { x: 0, y: 0 }, this.state.angle), y += `${P.x}px ${P.y}px, `;
            }
          }
          y = y.slice(0, -2), y += ')';
          const _ = `${f}transform-origin: 0 0; clip-path: ${y}; -webkit-clip-path: ${y};${this.render.isSafari() && this.state.angle === 0 ? `transform: translate(${p.x}px, ${p.y}px);` : `transform: translate3d(${p.x}px, ${p.y}px, 0) rotate(${this.state.angle}rad);`}`;
          this.element.style.cssText = _;
        }

        simpleDraw(p) {
          const f = this.render.getRect(); const y = f.pageWidth; const _ = f.height; const T = p === 1 ? f.left + f.pageWidth : f.left; const
            P = f.top;
          this.element.classList.add('--simple'), this.element.style.cssText = `
            position: absolute; 
            display: block; 
            height: ${_}px; 
            left: ${T}px; 
            top: ${P}px; 
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
          const T = Math.PI - _;
          if (!isFinite(_) || T >= 0 && T < 3e-3) throw new Error('The G point is too small');
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
          const T = o.LimitPointToCircle(f, this.pageWidth, _);
          _ !== T && (_ = T, this.updateAngleAndGeometry(_));
          const P = Math.sqrt(this.pageWidth ** 2 + this.pageHeight ** 2);
          let E = this.rect.bottomRight; let
            D = this.rect.topLeft;
          if (this.corner === 'bottom' && (E = this.rect.topRight, D = this.rect.bottomLeft), E.x <= 0) {
            const N = o.LimitPointToCircle(y, P, D);
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
            T = this.calc.getCorner() === 'bottom' ? f.height : 0;
          this.calc.calc({ x: f.pageWidth - y, y: _ }), this.animateFlippingTo({ x: f.pageWidth - y, y: _ }, { x: -f.pageWidth, y: T }, !0);
        }

        start(p) {
          this.reset();
          const f = this.render.convertToBook(p); const y = this.getBoundsRect(); const _ = this.getDirectionByPoint(f); const
            T = f.y >= y.height / 2 ? 'bottom' : 'top';
          if (!this.checkDirection(_)) return !1;
          try {
            if (this.flippingPage = this.app.getPageCollection().getFlippingPage(_), this.bottomPage = this.app.getPageCollection().getBottomPage(_), this.render.getOrientation() === 'landscape') {
              if (_ === 1) {
                const P = this.app.getPageCollection().nextBy(this.flippingPage);
                P !== null && this.flippingPage.getDensity() !== P.getDensity() && (this.flippingPage.setDrawingDensity('hard'), P.setDrawingDensity('hard'));
              } else {
                const P = this.app.getPageCollection().prevBy(this.flippingPage);
                P !== null && this.flippingPage.getDensity() !== P.getDensity() && (this.flippingPage.setDrawingDensity('hard'), P.setDrawingDensity('hard'));
              }
            }
            return this.render.setDirection(_), this.calc = new d(_, T, y.pageWidth.toString(10), y.height.toString(10)), !0;
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
              const _ = 50; const T = this.calc.getCorner() === 'bottom' ? f.height - 1 : 1; const
                P = this.calc.getCorner() === 'bottom' ? f.height - _ : _;
              this.animateFlippingTo({ x: y - 1, y: T }, { x: y - _, y: P }, !1, !1);
            } else this.do(this.render.convertToPage(p));
          } else this.setState('read'), this.render.finishAnimation(), this.stopMove();
        }

        animateFlippingTo(p, f, y, _ = !0) {
          const T = o.GetCordsFromTwoPoint(p, f); const
            P = [];
          for (const D of T) P.push(() => this.do(D));
          const E = this.getAnimationDuration(T.length);
          this.render.startAnimation(P, E, () => {
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
            T = this.render.convertToBook(p);
          return T.x > 0 && T.y > 0 && T.x < f.width && T.y < f.height && (T.x < _ || T.x > f.width - _) && (T.y < _ || T.y > f.height - _);
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
            T = this.setting.width / this.setting.height;
          let P = this.setting.width; let E = this.setting.height; let
            D = y - P;
          return this.setting.size === 'stretch' ? (f < 2 * this.setting.minWidth && this.app.getSettings().usePortrait && (p = 'portrait'), P = p === 'portrait' ? this.getBlockWidth() : this.getBlockWidth() / 2, P > this.setting.maxWidth && (P = this.setting.maxWidth), E = P / T, E > this.getBlockHeight() && (E = this.getBlockHeight(), P = E * T), D = p === 'portrait' ? y - P / 2 - P : y - P) : f < 2 * P && this.app.getSettings().usePortrait && (p = 'portrait', D = y - P / 2 - P), this.boundsRect = {
            left: D, top: _ - E / 2, width: 2 * P, height: E, pageWidth: P,
          }, p;
        }

        setShadowData(p, f, y, _) {
          if (!this.app.getSettings().drawShadow) return;
          const T = 100 * this.getSettings().maxShadowOpacity;
          this.shadow = {
            pos: p, angle: f, width: 3 * this.getRect().pageWidth / 4 * y / 100, opacity: (100 - y) * T / 100 / 100, direction: _, progress: 2 * y,
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
            T = this.ctx.createLinearGradient(0, 0, _, 0);
          this.shadow.direction === 0 ? (this.ctx.translate(-_, -100), T.addColorStop(1, `rgba(0, 0, 0, ${this.shadow.opacity})`), T.addColorStop(0.9, 'rgba(0, 0, 0, 0.05)'), T.addColorStop(0.7, `rgba(0, 0, 0, ${this.shadow.opacity})`), T.addColorStop(0, 'rgba(0, 0, 0, 0)')) : (this.ctx.translate(0, -100), T.addColorStop(0, `rgba(0, 0, 0, ${this.shadow.opacity})`), T.addColorStop(0.1, 'rgba(0, 0, 0, 0.05)'), T.addColorStop(0.3, `rgba(0, 0, 0, ${this.shadow.opacity})`), T.addColorStop(1, 'rgba(0, 0, 0, 0)')), this.ctx.clip(), this.ctx.fillStyle = T, this.ctx.fillRect(0, 0, _, 2 * p.height), this.ctx.restore();
        }

        clear() {
          this.ctx.fillStyle = 'white', this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
      }
      class C {
        constructor(p, f, y) {
          this.touchPoint = null, this.swipeTimeout = 250, this.onResize = () => {
            this.update();
          }, this.onMouseDown = (T) => {
            if (this.checkTarget(T.target)) {
              const P = this.getMousePos(T.clientX, T.clientY);
              this.app.startUserTouch(P), T.preventDefault();
            }
          }, this.onTouchStart = (T) => {
            if (this.checkTarget(T.target) && T.changedTouches.length > 0) {
              const P = T.changedTouches[0]; const
                E = this.getMousePos(P.clientX, P.clientY);
              this.touchPoint = { point: E, time: Date.now() }, setTimeout(() => {
                this.touchPoint !== null && this.app.startUserTouch(E);
              }, this.swipeTimeout), this.app.getSettings().mobileScrollSupport || T.preventDefault();
            }
          }, this.onMouseUp = (T) => {
            const P = this.getMousePos(T.clientX, T.clientY);
            this.app.userStop(P);
          }, this.onMouseMove = (T) => {
            const P = this.getMousePos(T.clientX, T.clientY);
            this.app.userMove(P, !1);
          }, this.onTouchMove = (T) => {
            if (T.changedTouches.length > 0) {
              const P = T.changedTouches[0]; const
                E = this.getMousePos(P.clientX, P.clientY);
              this.app.getSettings().mobileScrollSupport ? (this.touchPoint !== null && (Math.abs(this.touchPoint.point.x - E.x) > 10 || this.app.getState() !== 'read') && T.cancelable && this.app.userMove(E, !0), this.app.getState() !== 'read' && T.preventDefault()) : this.app.userMove(E, !0);
            }
          }, this.onTouchEnd = (T) => {
            if (T.changedTouches.length > 0) {
              const P = T.changedTouches[0]; const
                E = this.getMousePos(P.clientX, P.clientY);
              let D = !1;
              if (this.touchPoint !== null) {
                const N = E.x - this.touchPoint.point.x; const
                  I = Math.abs(E.y - this.touchPoint.point.y);
                Math.abs(N) > this.swipeDistance && I < 2 * this.swipeDistance && Date.now() - this.touchPoint.time < this.swipeTimeout && (N > 0 ? this.app.flipPrev(this.touchPoint.point.y < this.app.getRender().getRect().height / 2 ? 'top' : 'bottom') : this.app.flipNext(this.touchPoint.point.y < this.app.getRender().getRect().height / 2 ? 'top' : 'bottom'), D = !0), this.touchPoint = null;
              }
              this.app.userStop(E, D);
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
      class S extends C {
        constructor(p, f, y, _) {
          super(p, f, y), this.wrapper.insertAdjacentHTML('afterbegin', '<div class="stf__block"></div>'), this.distElement = p.querySelector('.stf__block'), this.items = _;
          for (const T of _) this.distElement.appendChild(T);
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
      class L extends C {
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
      class k extends g {
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
          const p = this.getRect(); const f = 3 * this.shadow.width / 4; const y = this.getDirection() === 0 ? f : 0; const _ = this.getDirection() === 0 ? 'to left' : 'to right'; const T = this.convertToGlobal(this.shadow.pos); const P = this.shadow.angle + 3 * Math.PI / 2; const
            E = [this.pageRect.topLeft, this.pageRect.topRight, this.pageRect.bottomRight, this.pageRect.bottomLeft];
          let D = 'polygon( ';
          for (const I of E) {
            let B = this.getDirection() === 1 ? { x: -I.x + this.shadow.pos.x, y: I.y - this.shadow.pos.y } : { x: I.x - this.shadow.pos.x, y: I.y - this.shadow.pos.y };
            B = o.GetRotatedPoint(B, { x: y, y: 100 }, P), D += `${B.x}px ${B.y}px, `;
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
            transform: translate3d(${T.x - y}px, ${T.y - 100}px, 0) rotate(${P}rad);
            clip-path: ${D};
            -webkit-clip-path: ${D};
        `;
          this.innerShadow.style.cssText = N;
        }

        drawOuterShadow() {
          const p = this.getRect(); const f = this.convertToGlobal({ x: this.shadow.pos.x, y: this.shadow.pos.y }); const y = this.shadow.angle + 3 * Math.PI / 2; const _ = this.getDirection() === 1 ? this.shadow.width : 0; const T = this.getDirection() === 0 ? 'to right' : 'to left'; const
            P = [{ x: 0, y: 0 }, { x: p.pageWidth, y: 0 }, { x: p.pageWidth, y: p.height }, { x: 0, y: p.height }];
          let E = 'polygon( ';
          for (const N of P) {
            if (N !== null) {
              let I = this.getDirection() === 1 ? { x: -N.x + this.shadow.pos.x, y: N.y - this.shadow.pos.y } : { x: N.x - this.shadow.pos.x, y: N.y - this.shadow.pos.y };
              I = o.GetRotatedPoint(I, { x: _, y: 100 }, y), E += `${I.x}px ${I.y}px, `;
            }
          }
          E = E.slice(0, -2), E += ')';
          const D = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2 * p.height}px;
            background: linear-gradient(${T}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${_}px 100px;
            transform: translate3d(${f.x - _}px, ${f.y - 100}px, 0) rotate(${y}rad);
            clip-path: ${E};
            -webkit-clip-path: ${E};
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
      class M {
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
          super(), this.isUserTouch = !1, this.isUserMove = !1, this.setting = null, this.pages = null, this.setting = new M().getSettings(p), this.block = R;
        }

        destroy() {
          this.ui.destroy(), this.block.remove();
        }

        update() {
          this.render.update(), this.pages.show();
        }

        loadFromImages(R) {
          this.ui = new L(this.block, this, this.setting);
          const p = this.ui.getCanvas();
          this.render = new b(this, this.setting, p), this.flipController = new u(this.render, this), this.pages = new a(this, this.render, R), this.pages.load(), this.render.start(), this.pages.show(this.setting.startPage), setTimeout(() => {
            this.ui.update(), this.trigger('init', this, { page: this.setting.startPage, mode: this.render.getOrientation() });
          }, 1);
        }

        loadFromHTML(R) {
          this.ui = new S(this.block, this, this.setting, R), this.render = new k(this, this.setting, this.ui.getDistElement()), this.flipController = new u(this.render, this), this.pages = new c(this, this.render, this.ui.getDistElement(), R), this.pages.load(), this.render.start(), this.pages.show(this.setting.startPage), setTimeout(() => {
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
const lA = oA();
const hA = Gi.forwardRef((h, t) => {
  const e = oi(null); const i = oi([]); const n = oi(); const
    [r, a] = Vr([]);
  zm(t, () => ({
    pageFlip: () => n.current,
  }));
  const o = $n(() => {
    n.current && n.current.clear();
  }, []); const
    l = $n(() => {
      const c = n.current;
      c && (c.off('flip'), c.off('changeOrientation'), c.off('changeState'), c.off('init'), c.off('update'));
    }, []);
  return It(() => {
    if (i.current = [], h.children) {
      const c = Gi.Children.map(h.children, (d) => Gi.cloneElement(d, {
        ref: (u) => {
          u && i.current.push(u);
        },
      }));
      (!h.renderOnlyPageLengthChange || r.length !== c.length) && (c.length < r.length && o(), a(c));
    }
  }, [h.children]), It(() => {
    const c = () => {
      const d = n.current;
      d && (h.onFlip && d.on('flip', (u) => h.onFlip(u)), h.onChangeOrientation && d.on('changeOrientation', (u) => h.onChangeOrientation(u)), h.onChangeState && d.on('changeState', (u) => h.onChangeState(u)), h.onInit && d.on('init', (u) => h.onInit(u)), h.onUpdate && d.on('update', (u) => h.onUpdate(u)));
    };
    r.length > 0 && i.current.length > 0 && (l(), e.current && !n.current && (n.current = new lA.PageFlip(e.current, h)), n.current.getFlipController() ? n.current.updateFromHtml(i.current) : n.current.loadFromHTML(i.current), c());
  }, [r]), Gi.createElement('div', { ref: e, className: h.className, style: h.style }, r);
}); const cA = Gi.memo(hA); const
  dA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: cA,
  }, Symbol.toStringTag, { value: 'Module' }));
export {
  mA as default,
};
