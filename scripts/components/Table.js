import { jsx as M, jsxs as ae } from 'react/jsx-runtime';
import * as Se from 'react';
import ce, { useState as Ye, useEffect as nt } from 'react';

const me = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof global < 'u' ? global : typeof self < 'u' ? self : {};
function it(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, 'default') ? i.default : i;
}
function ot(i) {
  if (Object.prototype.hasOwnProperty.call(i, '__esModule')) return i;
  const c = i.default;
  if (typeof c === 'function') {
    var b = function S() {
      return this instanceof S ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    b.prototype = c.prototype;
  } else b = {};
  return Object.defineProperty(b, '__esModule', { value: !0 }), Object.keys(i).forEach((S) => {
    const g = Object.getOwnPropertyDescriptor(i, S);
    Object.defineProperty(b, S, g.get ? g : {
      enumerable: !0,
      get() {
        return i[S];
      },
    });
  }), b;
}
const Pe = {}; const Ce = {}; const ve = {}; const Te = {}; let
  De;
function at() {
  return De || (De = 1, (function (i) {
    Object.defineProperty(i, '__esModule', {
      value: !0,
    }), i.default = void 0;
    const c = {
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
    i.default = c;
  }(Te))), Te;
}
let je; let
  Ne;
function lt() {
  if (Ne) return je;
  Ne = 1;
  const i = 'Expected a function';
  const c = NaN;
  const b = '[object Symbol]';
  const S = /^\s+|\s+$/g;
  const g = /^[-+]0x[0-9a-f]+$/i;
  const m = /^0b[01]+$/i;
  const L = /^0o[0-7]+$/i;
  const x = parseInt;
  const $ = typeof me === 'object' && me && me.Object === Object && me;
  const R = typeof self === 'object' && self && self.Object === Object && self;
  const z = $ || R || Function('return this')();
  const K = Object.prototype;
  const Q = K.toString;
  const J = Math.max;
  const Z = Math.min;
  const C = function () {
    return z.Date.now();
  };
  function te(a, u, d) {
    let f; let l; let r; let h; let w; let s; let v = 0; let y = !1; let _ = !1; let
      t = !0;
    if (typeof a !== 'function') throw new TypeError(i);
    u = Y(u) || 0, F(d) && (y = !!d.leading, _ = 'maxWait' in d, r = _ ? J(Y(d.maxWait) || 0, u) : r, t = 'trailing' in d ? !!d.trailing : t);
    function D(j) {
      const W = f; const
        A = l;
      return f = l = void 0, v = j, h = a.apply(A, W), h;
    }
    function o(j) {
      return v = j, w = setTimeout(p, u), y ? D(j) : h;
    }
    function e(j) {
      const W = j - s; const A = j - v; const
        I = u - W;
      return _ ? Z(I, r - A) : I;
    }
    function n(j) {
      const W = j - s; const
        A = j - v;
      return s === void 0 || W >= u || W < 0 || _ && A >= r;
    }
    function p() {
      const j = C();
      if (n(j)) return k(j);
      w = setTimeout(p, e(j));
    }
    function k(j) {
      return w = void 0, t && f ? D(j) : (f = l = void 0, h);
    }
    function O() {
      w !== void 0 && clearTimeout(w), v = 0, f = s = l = w = void 0;
    }
    function T() {
      return w === void 0 ? h : k(C());
    }
    function P() {
      const j = C(); const
        W = n(j);
      if (f = arguments, l = this, s = j, W) {
        if (w === void 0) return o(s);
        if (_) return w = setTimeout(p, u), D(s);
      }
      return w === void 0 && (w = setTimeout(p, u)), h;
    }
    return P.cancel = O, P.flush = T, P;
  }
  function F(a) {
    const u = typeof a;
    return !!a && (u == 'object' || u == 'function');
  }
  function U(a) {
    return !!a && typeof a === 'object';
  }
  function V(a) {
    return typeof a === 'symbol' || U(a) && Q.call(a) == b;
  }
  function Y(a) {
    if (typeof a === 'number') return a;
    if (V(a)) return c;
    if (F(a)) {
      const u = typeof a.valueOf === 'function' ? a.valueOf() : a;
      a = F(u) ? `${u}` : u;
    }
    if (typeof a !== 'string') return a === 0 ? a : +a;
    a = a.replace(S, '');
    const d = m.test(a);
    return d || L.test(a) ? x(a.slice(2), d ? 2 : 8) : g.test(a) ? c : +a;
  }
  return je = te, je;
}
const Ee = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
let He;
function _e() {
  return He || (He = 1, (function (i) {
    (function () {
      const c = {}.hasOwnProperty;
      function b() {
        for (var m = '', L = 0; L < arguments.length; L++) {
          const x = arguments[L];
          x && (m = g(m, S(x)));
        }
        return m;
      }
      function S(m) {
        if (typeof m === 'string' || typeof m === 'number') return m;
        if (typeof m !== 'object') return '';
        if (Array.isArray(m)) return b.apply(null, m);
        if (m.toString !== Object.prototype.toString && !m.toString.toString().includes('[native code]')) return m.toString();
        let L = '';
        for (const x in m) c.call(m, x) && m[x] && (L = g(L, x));
        return L;
      }
      function g(m, L) {
        return L ? m ? `${m} ${L}` : m + L : m;
      }
      i.exports ? (b.default = b, i.exports = b) : window.classNames = b;
    }());
  }(Ee))), Ee.exports;
}
const E = {}; const xe = {}; let
  We;
function Ve() {
  return We || (We = 1, (function (i) {
    Object.defineProperty(i, '__esModule', {
      value: !0,
    }), i.default = void 0;
    const c = b(ce);
    function b(g) {
      return g && g.__esModule ? g : { default: g };
    }
    const S = {
      accessibility: !0,
      adaptiveHeight: !1,
      afterChange: null,
      appendDots(m) {
        return /* @__PURE__ */ c.default.createElement('ul', {
          style: {
            display: 'block',
          },
        }, m);
      },
      arrows: !0,
      autoplay: !1,
      autoplaySpeed: 3e3,
      beforeChange: null,
      centerMode: !1,
      centerPadding: '50px',
      className: '',
      cssEase: 'ease',
      customPaging(m) {
        return /* @__PURE__ */ c.default.createElement('button', null, m + 1);
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
    i.default = S;
  }(xe))), xe;
}
let Ae;
function be() {
  if (Ae) return E;
  Ae = 1, Object.defineProperty(E, '__esModule', {
    value: !0,
  }), E.checkSpecKeys = E.checkNavigable = E.changeSlide = E.canUseDOM = E.canGoNext = void 0, E.clamp = R, E.extractObject = void 0, E.filterSettings = D, E.validSettings = E.swipeStart = E.swipeMove = E.swipeEnd = E.slidesOnRight = E.slidesOnLeft = E.slideHandler = E.siblingDirection = E.safePreventDefault = E.lazyStartIndex = E.lazySlidesOnRight = E.lazySlidesOnLeft = E.lazyEndIndex = E.keyHandler = E.initializedState = E.getWidth = E.getTrackLeft = E.getTrackCSS = E.getTrackAnimateCSS = E.getTotalSlides = E.getSwipeDirection = E.getSlideCount = E.getRequiredLazySlides = E.getPreClones = E.getPostClones = E.getOnDemandLazySlides = E.getNavigableIndexes = E.getHeight = void 0;
  const i = b(ce); const
    c = b(Ve());
  function b(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function S(o) {
    '@babel/helpers - typeof';

    return S = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) {
      return typeof e;
    } : function (e) {
      return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
    }, S(o);
  }
  function g(o, e) {
    const n = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
      let p = Object.getOwnPropertySymbols(o);
      e && (p = p.filter((k) => Object.getOwnPropertyDescriptor(o, k).enumerable)), n.push.apply(n, p);
    }
    return n;
  }
  function m(o) {
    for (let e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2 ? g(Object(n), !0).forEach((p) => {
        L(o, p, n[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((p) => {
        Object.defineProperty(o, p, Object.getOwnPropertyDescriptor(n, p));
      });
    }
    return o;
  }
  function L(o, e, n) {
    return (e = x(e)) in o ? Object.defineProperty(o, e, {
      value: n, enumerable: !0, configurable: !0, writable: !0,
    }) : o[e] = n, o;
  }
  function x(o) {
    const e = $(o, 'string');
    return S(e) == 'symbol' ? e : `${e}`;
  }
  function $(o, e) {
    if (S(o) != 'object' || !o) return o;
    const n = o[Symbol.toPrimitive];
    if (n !== void 0) {
      const p = n.call(o, e);
      if (S(p) != 'object') return p;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (e === 'string' ? String : Number)(o);
  }
  function R(o, e, n) {
    return Math.max(e, Math.min(o, n));
  }
  const z = E.safePreventDefault = function (e) {
    const n = ['onTouchStart', 'onTouchMove', 'onWheel'];
    n.includes(e._reactName) || e.preventDefault();
  }; const
    K = E.getOnDemandLazySlides = function (e) {
      for (var n = [], p = Q(e), k = J(e), O = p; O < k; O++) e.lazyLoadedList.indexOf(O) < 0 && n.push(O);
      return n;
    };
  E.getRequiredLazySlides = function (e) {
    for (var n = [], p = Q(e), k = J(e), O = p; O < k; O++) n.push(O);
    return n;
  };
  var Q = E.lazyStartIndex = function (e) {
    return e.currentSlide - Z(e);
  }; var J = E.lazyEndIndex = function (e) {
    return e.currentSlide + C(e);
  }; var Z = E.lazySlidesOnLeft = function (e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }; var C = E.lazySlidesOnRight = function (e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }; const te = E.getWidth = function (e) {
    return e && e.offsetWidth || 0;
  }; const F = E.getHeight = function (e) {
    return e && e.offsetHeight || 0;
  }; const U = E.getSwipeDirection = function (e) {
    const n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; let p; let k; let O; let
      T;
    return p = e.startX - e.curX, k = e.startY - e.curY, O = Math.atan2(k, p), T = Math.round(O * 180 / Math.PI), T < 0 && (T = 360 - Math.abs(T)), T <= 45 && T >= 0 || T <= 360 && T >= 315 ? 'left' : T >= 135 && T <= 225 ? 'right' : n === !0 ? T >= 35 && T <= 135 ? 'up' : 'down' : 'vertical';
  }; const
    V = E.canGoNext = function (e) {
      let n = !0;
      return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (n = !1), n;
    };
  E.extractObject = function (e, n) {
    const p = {};
    return n.forEach((k) => p[k] = e[k]), p;
  }, E.initializedState = function (e) {
    const n = i.default.Children.count(e.children); const p = e.listRef; const k = Math.ceil(te(p)); const O = e.trackRef && e.trackRef.node; const T = Math.ceil(te(O)); let
      P;
    if (e.vertical) P = k;
    else {
      let j = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding === 'string' && e.centerPadding.slice(-1) === '%' && (j *= k / 100), P = Math.ceil((k - j) / e.slidesToShow);
    }
    const W = p && F(p.querySelector('[data-index="0"]')); const A = W * e.slidesToShow; let
      I = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && (I = n - 1 - e.initialSlide);
    let X = e.lazyLoadedList || []; const
      G = K(m(m({}, e), {}, {
        currentSlide: I,
        lazyLoadedList: X,
      }));
    X = X.concat(G);
    const q = {
      slideCount: n,
      slideWidth: P,
      listWidth: k,
      trackWidth: T,
      currentSlide: I,
      slideHeight: W,
      listHeight: A,
      lazyLoadedList: X,
    };
    return e.autoplaying === null && e.autoplay && (q.autoplaying = 'playing'), q;
  }, E.slideHandler = function (e) {
    const n = e.waitForAnimate; const p = e.animating; const k = e.fade; const O = e.infinite; const T = e.index; const P = e.slideCount; const j = e.lazyLoad; const W = e.currentSlide; const A = e.centerMode; const I = e.slidesToScroll; const X = e.slidesToShow; const G = e.useCSS; let
      q = e.lazyLoadedList;
    if (n && p) return {};
    let H = T; let B; let re; let N; let ee = {}; let ne = {}; const
      ie = O ? T : R(T, 0, P - 1);
    if (k) {
      if (!O && (T < 0 || T >= P)) return {};
      T < 0 ? H = T + P : T >= P && (H = T - P), j && q.indexOf(H) < 0 && (q = q.concat(H)), ee = {
        animating: !0,
        currentSlide: H,
        lazyLoadedList: q,
        targetSlide: H,
      }, ne = {
        animating: !1,
        targetSlide: H,
      };
    } else {
      B = H, H < 0 ? (B = H + P, O ? P % I !== 0 && (B = P - P % I) : B = 0) : !V(e) && H > W ? H = B = W : A && H >= P ? (H = O ? P : P - 1, B = O ? 0 : P - 1) : H >= P && (B = H - P, O ? P % I !== 0 && (B = 0) : B = P - X), !O && H + X >= P && (B = P - X), re = r(m(m({}, e), {}, {
        slideIndex: H,
      })), N = r(m(m({}, e), {}, {
        slideIndex: B,
      })), O || (re === N && (H = B), re = N), j && (q = q.concat(K(m(m({}, e), {}, {
        currentSlide: H,
      })))), G ? (ee = {
        animating: !0,
        currentSlide: B,
        trackStyle: l(m(m({}, e), {}, {
          left: re,
        })),
        lazyLoadedList: q,
        targetSlide: ie,
      }, ne = {
        animating: !1,
        currentSlide: B,
        trackStyle: f(m(m({}, e), {}, {
          left: N,
        })),
        swipeLeft: null,
        targetSlide: ie,
      }) : ee = {
        currentSlide: B,
        trackStyle: f(m(m({}, e), {}, {
          left: N,
        })),
        lazyLoadedList: q,
        targetSlide: ie,
      };
    }
    return {
      state: ee,
      nextState: ne,
    };
  }, E.changeSlide = function (e, n) {
    let p; let k; let O; let T; let P; const j = e.slidesToScroll; const W = e.slidesToShow; const A = e.slideCount; const I = e.currentSlide; const X = e.targetSlide; const G = e.lazyLoad; const
      q = e.infinite;
    if (T = A % j !== 0, p = T ? 0 : (A - I) % j, n.message === 'previous') O = p === 0 ? j : W - p, P = I - O, G && !q && (k = I - O, P = k === -1 ? A - 1 : k), q || (P = X - j);
    else if (n.message === 'next') O = p === 0 ? j : p, P = I + O, G && !q && (P = (I + j) % A + p), q || (P = X + j);
    else if (n.message === 'dots') P = n.index * n.slidesToScroll;
    else if (n.message === 'children') {
      if (P = n.index, q) {
        const H = v(m(m({}, e), {}, {
          targetSlide: P,
        }));
        P > n.currentSlide && H === 'left' ? P -= A : P < n.currentSlide && H === 'right' && (P += A);
      }
    } else n.message === 'index' && (P = Number(n.index));
    return P;
  }, E.keyHandler = function (e, n, p) {
    return e.target.tagName.match('TEXTAREA|INPUT|SELECT') || !n ? '' : e.keyCode === 37 ? p ? 'next' : 'previous' : e.keyCode === 39 ? p ? 'previous' : 'next' : '';
  }, E.swipeStart = function (e, n, p) {
    return e.target.tagName === 'IMG' && z(e), !n || !p && e.type.indexOf('mouse') !== -1 ? '' : {
      dragging: !0,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY,
      },
    };
  }, E.swipeMove = function (e, n) {
    const p = n.scrolling; const k = n.animating; const O = n.vertical; const T = n.swipeToSlide; const P = n.verticalSwiping; const j = n.rtl; const W = n.currentSlide; const A = n.edgeFriction; const I = n.edgeDragged; const X = n.onEdge; const G = n.swiped; const q = n.swiping; const H = n.slideCount; const B = n.slidesToScroll; const re = n.infinite; const N = n.touchObject; const ee = n.swipeEvent; const ne = n.listHeight; const
      ie = n.listWidth;
    if (!p) {
      if (k) return z(e);
      O && T && P && z(e);
      let oe; let se = {}; const
        ge = r(n);
      N.curX = e.touches ? e.touches[0].pageX : e.clientX, N.curY = e.touches ? e.touches[0].pageY : e.clientY, N.swipeLength = Math.round(Math.sqrt((N.curX - N.startX) ** 2));
      const ze = Math.round(Math.sqrt((N.curY - N.startY) ** 2));
      if (!P && !q && ze > 10) {
        return {
          scrolling: !0,
        };
      }
      P && (N.swipeLength = ze);
      let de = (j ? -1 : 1) * (N.curX > N.startX ? 1 : -1);
      P && (de = N.curY > N.startY ? 1 : -1);
      const rt = Math.ceil(H / B); const le = U(n.touchObject, P); let
        pe = N.swipeLength;
      return re || (W === 0 && (le === 'right' || le === 'down') || W + 1 >= rt && (le === 'left' || le === 'up') || !V(n) && (le === 'left' || le === 'up')) && (pe = N.swipeLength * A, I === !1 && X && (X(le), se.edgeDragged = !0)), !G && ee && (ee(le), se.swiped = !0), O ? oe = ge + pe * (ne / ie) * de : j ? oe = ge - pe * de : oe = ge + pe * de, P && (oe = ge + pe * de), se = m(m({}, se), {}, {
        touchObject: N,
        swipeLeft: oe,
        trackStyle: f(m(m({}, n), {}, {
          left: oe,
        })),
      }), Math.abs(N.curX - N.startX) < Math.abs(N.curY - N.startY) * 0.8 || N.swipeLength > 10 && (se.swiping = !0, z(e)), se;
    }
  }, E.swipeEnd = function (e, n) {
    const p = n.dragging; const k = n.swipe; const O = n.touchObject; const T = n.listWidth; const P = n.touchThreshold; const j = n.verticalSwiping; const W = n.listHeight; const A = n.swipeToSlide; const I = n.scrolling; const X = n.onSwipe; const G = n.targetSlide; const q = n.currentSlide; const
      H = n.infinite;
    if (!p) return k && z(e), {};
    const B = j ? W / P : T / P; const re = U(O, j); const
      N = {
        dragging: !1,
        edgeDragged: !1,
        scrolling: !1,
        swiping: !1,
        swiped: !1,
        swipeLeft: null,
        touchObject: {},
      };
    if (I || !O.swipeLength) return N;
    if (O.swipeLength > B) {
      z(e), X && X(re);
      let ee; let ne; const
        ie = H ? q : G;
      switch (re) {
        case 'left':
        case 'up':
          ne = ie + u(n), ee = A ? a(n, ne) : ne, N.currentDirection = 0;
          break;
        case 'right':
        case 'down':
          ne = ie - u(n), ee = A ? a(n, ne) : ne, N.currentDirection = 1;
          break;
        default:
          ee = ie;
      }
      N.triggerSlideHandler = ee;
    } else {
      const oe = r(n);
      N.trackStyle = l(m(m({}, n), {}, {
        left: oe,
      }));
    }
    return N;
  };
  const Y = E.getNavigableIndexes = function (e) {
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, p = e.infinite ? e.slidesToShow * -1 : 0, k = e.infinite ? e.slidesToShow * -1 : 0, O = []; p < n;) O.push(p), p = k + e.slidesToScroll, k += Math.min(e.slidesToScroll, e.slidesToShow);
    return O;
  }; var a = E.checkNavigable = function (e, n) {
    const p = Y(e); let
      k = 0;
    if (n > p[p.length - 1]) n = p[p.length - 1];
    else {
      for (const O in p) {
        if (n < p[O]) {
          n = k;
          break;
        }
        k = p[O];
      }
    }
    return n;
  }; var u = E.getSlideCount = function (e) {
    const n = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      let p; const k = e.listRef; const
        O = k.querySelectorAll && k.querySelectorAll('.slick-slide') || [];
      if (Array.from(O).every((j) => {
        if (e.vertical) {
          if (j.offsetTop + F(j) / 2 > e.swipeLeft * -1) return p = j, !1;
        } else if (j.offsetLeft - n + te(j) / 2 > e.swipeLeft * -1) return p = j, !1;
        return !0;
      }), !p) return 0;
      const T = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide; const
        P = Math.abs(p.dataset.index - T) || 1;
      return P;
    } return e.slidesToScroll;
  }; const d = E.checkSpecKeys = function (e, n) {
    return n.reduce((p, k) => p && e.hasOwnProperty(k), !0) ? null : console.error('Keys Missing:', e);
  }; var f = E.getTrackCSS = function (e) {
    d(e, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth']);
    let n; let
      p;
    if (!e.vertical) n = s(e) * e.slideWidth;
    else {
      const k = e.unslick ? e.slideCount : e.slideCount + 2 * e.slidesToShow;
      p = k * e.slideHeight;
    }
    let O = {
      opacity: 1,
      transition: '',
      WebkitTransition: '',
    };
    if (e.useTransform) {
      const T = e.vertical ? `translate3d(0px, ${e.left}px, 0px)` : `translate3d(${e.left}px, 0px, 0px)`;
      const P = e.vertical ? `translate3d(0px, ${e.left}px, 0px)` : `translate3d(${e.left}px, 0px, 0px)`;
      const j = e.vertical ? `translateY(${e.left}px)` : `translateX(${e.left}px)`;
      O = m(m({}, O), {}, {
        WebkitTransform: T,
        transform: P,
        msTransform: j,
      });
    } else e.vertical ? O.top = e.left : O.left = e.left;
    return e.fade && (O = {
      opacity: 1,
    }), n && (O.width = n), p && (O.height = p), window && !window.addEventListener && window.attachEvent && (e.vertical ? O.marginTop = `${e.left}px` : O.marginLeft = `${e.left}px`), O;
  }; var l = E.getTrackAnimateCSS = function (e) {
    d(e, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase']);
    const n = f(e);
    return e.useTransform ? (n.WebkitTransition = `-webkit-transform ${e.speed}ms ${e.cssEase}`, n.transition = `transform ${e.speed}ms ${e.cssEase}`) : e.vertical ? n.transition = `top ${e.speed}ms ${e.cssEase}` : n.transition = `left ${e.speed}ms ${e.cssEase}`, n;
  }; var r = E.getTrackLeft = function (e) {
    if (e.unslick) return 0;
    d(e, ['slideIndex', 'trackRef', 'infinite', 'centerMode', 'slideCount', 'slidesToShow', 'slidesToScroll', 'slideWidth', 'listWidth', 'variableWidth', 'slideHeight']);
    const n = e.slideIndex; const p = e.trackRef; const k = e.infinite; const O = e.centerMode; const T = e.slideCount; const P = e.slidesToShow; const j = e.slidesToScroll; const W = e.slideWidth; const A = e.listWidth; const I = e.variableWidth; const X = e.slideHeight; const G = e.fade; const q = e.vertical; let H = 0; let B; let re; let
      N = 0;
    if (G || e.slideCount === 1) return 0;
    let ee = 0;
    if (k ? (ee = -h(e), T % j !== 0 && n + j > T && (ee = -(n > T ? P - (n - T) : T % j)), O && (ee += parseInt(P / 2))) : (T % j !== 0 && n + j > T && (ee = P - T % j), O && (ee = parseInt(P / 2))), H = ee * W, N = ee * X, q ? B = n * X * -1 + N : B = n * W * -1 + H, I === !0) {
      let ne; const
        ie = p && p.node;
      if (ne = n + h(e), re = ie && ie.childNodes[ne], B = re ? re.offsetLeft * -1 : 0, O === !0) {
        ne = k ? n + h(e) : n, re = ie && ie.children[ne], B = 0;
        for (let oe = 0; oe < ne; oe++) B -= ie && ie.children[oe] && ie.children[oe].offsetWidth;
        B -= parseInt(e.centerPadding), B += re && (A - re.offsetWidth) / 2;
      }
    }
    return B;
  }; var h = E.getPreClones = function (e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }; const w = E.getPostClones = function (e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }; var s = E.getTotalSlides = function (e) {
    return e.slideCount === 1 ? 1 : h(e) + e.slideCount + w(e);
  }; var v = E.siblingDirection = function (e) {
    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + y(e) ? 'left' : 'right' : e.targetSlide < e.currentSlide - _(e) ? 'right' : 'left';
  }; var y = E.slidesOnRight = function (e) {
    const n = e.slidesToShow; const p = e.centerMode; const k = e.rtl; const
      O = e.centerPadding;
    if (p) {
      let T = (n - 1) / 2 + 1;
      return parseInt(O) > 0 && (T += 1), k && n % 2 === 0 && (T += 1), T;
    }
    return k ? 0 : n - 1;
  }; var
    _ = E.slidesOnLeft = function (e) {
      const n = e.slidesToShow; const p = e.centerMode; const k = e.rtl; const
        O = e.centerPadding;
      if (p) {
        let T = (n - 1) / 2 + 1;
        return parseInt(O) > 0 && (T += 1), !k && n % 2 === 0 && (T += 1), T;
      }
      return k ? n - 1 : 0;
    };
  E.canUseDOM = function () {
    return !!(typeof window < 'u' && window.document && window.document.createElement);
  };
  const t = E.validSettings = Object.keys(c.default);
  function D(o) {
    return t.reduce((e, n) => (o.hasOwnProperty(n) && (e[n] = o[n]), e), {});
  }
  return E;
}
const he = {}; let
  Ie;
function st() {
  if (Ie) return he;
  Ie = 1, Object.defineProperty(he, '__esModule', {
    value: !0,
  }), he.Track = void 0;
  const i = S(ce); const c = S(_e()); const
    b = be();
  function S(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function g(l) {
    '@babel/helpers - typeof';

    return g = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (r) {
      return typeof r;
    } : function (r) {
      return r && typeof Symbol === 'function' && r.constructor === Symbol && r !== Symbol.prototype ? 'symbol' : typeof r;
    }, g(l);
  }
  function m() {
    return m = Object.assign ? Object.assign.bind() : function (l) {
      for (let r = 1; r < arguments.length; r++) {
        const h = arguments[r];
        for (const w in h) ({}).hasOwnProperty.call(h, w) && (l[w] = h[w]);
      }
      return l;
    }, m.apply(null, arguments);
  }
  function L(l, r) {
    if (!(l instanceof r)) throw new TypeError('Cannot call a class as a function');
  }
  function x(l, r) {
    for (let h = 0; h < r.length; h++) {
      const w = r[h];
      w.enumerable = w.enumerable || !1, w.configurable = !0, 'value' in w && (w.writable = !0), Object.defineProperty(l, V(w.key), w);
    }
  }
  function $(l, r, h) {
    return r && x(l.prototype, r), Object.defineProperty(l, 'prototype', { writable: !1 }), l;
  }
  function R(l, r) {
    if (typeof r !== 'function' && r !== null) throw new TypeError('Super expression must either be null or a function');
    l.prototype = Object.create(r && r.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), Object.defineProperty(l, 'prototype', { writable: !1 }), r && z(l, r);
  }
  function z(l, r) {
    return z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (h, w) {
      return h.__proto__ = w, h;
    }, z(l, r);
  }
  function K(l) {
    const r = Z();
    return function () {
      let h; const
        w = C(l);
      if (r) {
        const s = C(this).constructor;
        h = Reflect.construct(w, arguments, s);
      } else h = w.apply(this, arguments);
      return Q(this, h);
    };
  }
  function Q(l, r) {
    if (r && (g(r) == 'object' || typeof r === 'function')) return r;
    if (r !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return J(l);
  }
  function J(l) {
    if (l === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return l;
  }
  function Z() {
    try {
      var l = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
      }));
    } catch {
    }
    return (Z = function () {
      return !!l;
    })();
  }
  function C(l) {
    return C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, C(l);
  }
  function te(l, r) {
    const h = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      let w = Object.getOwnPropertySymbols(l);
      r && (w = w.filter((s) => Object.getOwnPropertyDescriptor(l, s).enumerable)), h.push.apply(h, w);
    }
    return h;
  }
  function F(l) {
    for (let r = 1; r < arguments.length; r++) {
      var h = arguments[r] != null ? arguments[r] : {};
      r % 2 ? te(Object(h), !0).forEach((w) => {
        U(l, w, h[w]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(h)) : te(Object(h)).forEach((w) => {
        Object.defineProperty(l, w, Object.getOwnPropertyDescriptor(h, w));
      });
    }
    return l;
  }
  function U(l, r, h) {
    return (r = V(r)) in l ? Object.defineProperty(l, r, {
      value: h, enumerable: !0, configurable: !0, writable: !0,
    }) : l[r] = h, l;
  }
  function V(l) {
    const r = Y(l, 'string');
    return g(r) == 'symbol' ? r : `${r}`;
  }
  function Y(l, r) {
    if (g(l) != 'object' || !l) return l;
    const h = l[Symbol.toPrimitive];
    if (h !== void 0) {
      const w = h.call(l, r);
      if (g(w) != 'object') return w;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (r === 'string' ? String : Number)(l);
  }
  const a = function (r) {
    let h; let w; let s; let v; let
      y;
    r.rtl ? y = r.slideCount - 1 - r.index : y = r.index, s = y < 0 || y >= r.slideCount, r.centerMode ? (v = Math.floor(r.slidesToShow / 2), w = (y - r.currentSlide) % r.slideCount === 0, y > r.currentSlide - v - 1 && y <= r.currentSlide + v && (h = !0)) : h = r.currentSlide <= y && y < r.currentSlide + r.slidesToShow;
    let _;
    r.targetSlide < 0 ? _ = r.targetSlide + r.slideCount : r.targetSlide >= r.slideCount ? _ = r.targetSlide - r.slideCount : _ = r.targetSlide;
    const t = y === _;
    return {
      'slick-slide': !0,
      'slick-active': h,
      'slick-center': w,
      'slick-cloned': s,
      'slick-current': t,
      // dubious in case of RTL
    };
  }; const u = function (r) {
    const h = {};
    return (r.variableWidth === void 0 || r.variableWidth === !1) && (h.width = r.slideWidth), r.fade && (h.position = 'relative', r.vertical ? h.top = -r.index * parseInt(r.slideHeight) : h.left = -r.index * parseInt(r.slideWidth), h.opacity = r.currentSlide === r.index ? 1 : 0, h.zIndex = r.currentSlide === r.index ? 999 : 998, r.useCSS && (h.transition = `opacity ${r.speed}ms ${r.cssEase}, visibility ${r.speed}ms ${r.cssEase}`)), h;
  }; const d = function (r, h) {
    return r.key || h;
  }; const
    f = function (r) {
      let h; const w = []; const s = []; const v = []; const y = i.default.Children.count(r.children); const _ = (0, b.lazyStartIndex)(r); const
        t = (0, b.lazyEndIndex)(r);
      return i.default.Children.forEach(r.children, (D, o) => {
        let e; const
          n = {
            message: 'children',
            index: o,
            slidesToScroll: r.slidesToScroll,
            currentSlide: r.currentSlide,
          };
        !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(o) >= 0 ? e = D : e = /* @__PURE__ */ i.default.createElement('div', null);
        const p = u(F(F({}, r), {}, {
          index: o,
        })); const k = e.props.className || ''; let
          O = a(F(F({}, r), {}, {
            index: o,
          }));
        if (w.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: `original${d(e, o)}`,
          'data-index': o,
          className: (0, c.default)(O, k),
          tabIndex: '-1',
          'aria-hidden': !O['slick-active'],
          style: F(F({
            outline: 'none',
          }, e.props.style || {}), p),
          onClick(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          },
        })), r.infinite && y > 1 && r.fade === !1 && !r.unslick) {
          const T = y - o;
          T <= (0, b.getPreClones)(r) && (h = -T, h >= _ && (e = D), O = a(F(F({}, r), {}, {
            index: h,
          })), s.push(/* @__PURE__ */ i.default.cloneElement(e, {
            key: `precloned${d(e, h)}`,
            'data-index': h,
            tabIndex: '-1',
            className: (0, c.default)(O, k),
            'aria-hidden': !O['slick-active'],
            style: F(F({}, e.props.style || {}), p),
            onClick(j) {
              e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
            },
          }))), o < (0, b.getPostClones)(r) && (h = y + o, h < t && (e = D), O = a(F(F({}, r), {}, {
            index: h,
          })), v.push(/* @__PURE__ */ i.default.cloneElement(e, {
            key: `postcloned${d(e, h)}`,
            'data-index': h,
            tabIndex: '-1',
            className: (0, c.default)(O, k),
            'aria-hidden': !O['slick-active'],
            style: F(F({}, e.props.style || {}), p),
            onClick(j) {
              e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
            },
          })));
        }
      }), r.rtl ? s.concat(w, v).reverse() : s.concat(w, v);
    };
  return he.Track = /* @__PURE__ */ (function (l) {
    R(h, l);
    const r = K(h);
    function h() {
      let w;
      L(this, h);
      for (var s = arguments.length, v = new Array(s), y = 0; y < s; y++) v[y] = arguments[y];
      return w = r.call.apply(r, [this].concat(v)), U(J(w), 'node', null), U(J(w), 'handleRef', (_) => {
        w.node = _;
      }), w;
    }
    return $(h, [{
      key: 'render',
      value() {
        const s = f(this.props); const v = this.props; const y = v.onMouseEnter; const _ = v.onMouseOver; const t = v.onMouseLeave; const
          D = {
            onMouseEnter: y,
            onMouseOver: _,
            onMouseLeave: t,
          };
        return /* @__PURE__ */ i.default.createElement('div', m({
          ref: this.handleRef,
          className: 'slick-track',
          style: this.props.trackStyle,
        }, D), s);
      },
    }]), h;
  }(i.default.PureComponent)), he;
}
const ye = {}; let
  qe;
function ut() {
  if (qe) return ye;
  qe = 1;
  function i(a) {
    '@babel/helpers - typeof';

    return i = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (u) {
      return typeof u;
    } : function (u) {
      return u && typeof Symbol === 'function' && u.constructor === Symbol && u !== Symbol.prototype ? 'symbol' : typeof u;
    }, i(a);
  }
  Object.defineProperty(ye, '__esModule', {
    value: !0,
  }), ye.Dots = void 0;
  const c = g(ce); const b = g(_e()); const
    S = be();
  function g(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function m(a, u) {
    const d = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      let f = Object.getOwnPropertySymbols(a);
      u && (f = f.filter((l) => Object.getOwnPropertyDescriptor(a, l).enumerable)), d.push.apply(d, f);
    }
    return d;
  }
  function L(a) {
    for (let u = 1; u < arguments.length; u++) {
      var d = arguments[u] != null ? arguments[u] : {};
      u % 2 ? m(Object(d), !0).forEach((f) => {
        x(a, f, d[f]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(d)) : m(Object(d)).forEach((f) => {
        Object.defineProperty(a, f, Object.getOwnPropertyDescriptor(d, f));
      });
    }
    return a;
  }
  function x(a, u, d) {
    return (u = K(u)) in a ? Object.defineProperty(a, u, {
      value: d, enumerable: !0, configurable: !0, writable: !0,
    }) : a[u] = d, a;
  }
  function $(a, u) {
    if (!(a instanceof u)) throw new TypeError('Cannot call a class as a function');
  }
  function R(a, u) {
    for (let d = 0; d < u.length; d++) {
      const f = u[d];
      f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(a, K(f.key), f);
    }
  }
  function z(a, u, d) {
    return u && R(a.prototype, u), Object.defineProperty(a, 'prototype', { writable: !1 }), a;
  }
  function K(a) {
    const u = Q(a, 'string');
    return i(u) == 'symbol' ? u : `${u}`;
  }
  function Q(a, u) {
    if (i(a) != 'object' || !a) return a;
    const d = a[Symbol.toPrimitive];
    if (d !== void 0) {
      const f = d.call(a, u);
      if (i(f) != 'object') return f;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(a);
  }
  function J(a, u) {
    if (typeof u !== 'function' && u !== null) throw new TypeError('Super expression must either be null or a function');
    a.prototype = Object.create(u && u.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, 'prototype', { writable: !1 }), u && Z(a, u);
  }
  function Z(a, u) {
    return Z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (d, f) {
      return d.__proto__ = f, d;
    }, Z(a, u);
  }
  function C(a) {
    const u = U();
    return function () {
      let d; const
        f = V(a);
      if (u) {
        const l = V(this).constructor;
        d = Reflect.construct(f, arguments, l);
      } else d = f.apply(this, arguments);
      return te(this, d);
    };
  }
  function te(a, u) {
    if (u && (i(u) == 'object' || typeof u === 'function')) return u;
    if (u !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return F(a);
  }
  function F(a) {
    if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a;
  }
  function U() {
    try {
      var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
      }));
    } catch {
    }
    return (U = function () {
      return !!a;
    })();
  }
  function V(a) {
    return V = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (u) {
      return u.__proto__ || Object.getPrototypeOf(u);
    }, V(a);
  }
  const Y = function (u) {
    let d;
    return u.infinite ? d = Math.ceil(u.slideCount / u.slidesToScroll) : d = Math.ceil((u.slideCount - u.slidesToShow) / u.slidesToScroll) + 1, d;
  };
  return ye.Dots = /* @__PURE__ */ (function (a) {
    J(d, a);
    const u = C(d);
    function d() {
      return $(this, d), u.apply(this, arguments);
    }
    return z(d, [{
      key: 'clickHandler',
      value(l, r) {
        r.preventDefault(), this.props.clickHandler(l);
      },
    }, {
      key: 'render',
      value() {
        for (var l = this.props, r = l.onMouseEnter, h = l.onMouseOver, w = l.onMouseLeave, s = l.infinite, v = l.slidesToScroll, y = l.slidesToShow, _ = l.slideCount, t = l.currentSlide, D = Y({
            slideCount: _,
            slidesToScroll: v,
            slidesToShow: y,
            infinite: s,
          }), o = {
            onMouseEnter: r,
            onMouseOver: h,
            onMouseLeave: w,
          }, e = [], n = 0; n < D; n++) {
          const p = (n + 1) * v - 1; const k = s ? p : (0, S.clamp)(p, 0, _ - 1); const O = k - (v - 1); const T = s ? O : (0, S.clamp)(O, 0, _ - 1); const P = (0, b.default)({
            'slick-active': s ? t >= T && t <= k : t === T,
          }); const j = {
            message: 'dots',
            index: n,
            slidesToScroll: v,
            currentSlide: t,
          }; const
            W = this.clickHandler.bind(this, j);
          e = e.concat(/* @__PURE__ */ c.default.createElement('li', {
            key: n,
            className: P,
          }, /* @__PURE__ */ c.default.cloneElement(this.props.customPaging(n), {
            onClick: W,
          })));
        }
        return /* @__PURE__ */ c.default.cloneElement(this.props.appendDots(e), L({
          className: this.props.dotsClass,
        }, o));
      },
    }]), d;
  }(c.default.PureComponent)), ye;
}
const ue = {}; let
  $e;
function ct() {
  if ($e) return ue;
  $e = 1;
  function i(a) {
    '@babel/helpers - typeof';

    return i = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (u) {
      return typeof u;
    } : function (u) {
      return u && typeof Symbol === 'function' && u.constructor === Symbol && u !== Symbol.prototype ? 'symbol' : typeof u;
    }, i(a);
  }
  Object.defineProperty(ue, '__esModule', {
    value: !0,
  }), ue.PrevArrow = ue.NextArrow = void 0;
  const c = g(ce); const b = g(_e()); const
    S = be();
  function g(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function m() {
    return m = Object.assign ? Object.assign.bind() : function (a) {
      for (let u = 1; u < arguments.length; u++) {
        const d = arguments[u];
        for (const f in d) ({}).hasOwnProperty.call(d, f) && (a[f] = d[f]);
      }
      return a;
    }, m.apply(null, arguments);
  }
  function L(a, u) {
    const d = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      let f = Object.getOwnPropertySymbols(a);
      u && (f = f.filter((l) => Object.getOwnPropertyDescriptor(a, l).enumerable)), d.push.apply(d, f);
    }
    return d;
  }
  function x(a) {
    for (let u = 1; u < arguments.length; u++) {
      var d = arguments[u] != null ? arguments[u] : {};
      u % 2 ? L(Object(d), !0).forEach((f) => {
        $(a, f, d[f]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(d)) : L(Object(d)).forEach((f) => {
        Object.defineProperty(a, f, Object.getOwnPropertyDescriptor(d, f));
      });
    }
    return a;
  }
  function $(a, u, d) {
    return (u = Q(u)) in a ? Object.defineProperty(a, u, {
      value: d, enumerable: !0, configurable: !0, writable: !0,
    }) : a[u] = d, a;
  }
  function R(a, u) {
    if (!(a instanceof u)) throw new TypeError('Cannot call a class as a function');
  }
  function z(a, u) {
    for (let d = 0; d < u.length; d++) {
      const f = u[d];
      f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(a, Q(f.key), f);
    }
  }
  function K(a, u, d) {
    return u && z(a.prototype, u), Object.defineProperty(a, 'prototype', { writable: !1 }), a;
  }
  function Q(a) {
    const u = J(a, 'string');
    return i(u) == 'symbol' ? u : `${u}`;
  }
  function J(a, u) {
    if (i(a) != 'object' || !a) return a;
    const d = a[Symbol.toPrimitive];
    if (d !== void 0) {
      const f = d.call(a, u);
      if (i(f) != 'object') return f;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(a);
  }
  function Z(a, u) {
    if (typeof u !== 'function' && u !== null) throw new TypeError('Super expression must either be null or a function');
    a.prototype = Object.create(u && u.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, 'prototype', { writable: !1 }), u && C(a, u);
  }
  function C(a, u) {
    return C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (d, f) {
      return d.__proto__ = f, d;
    }, C(a, u);
  }
  function te(a) {
    const u = V();
    return function () {
      let d; const
        f = Y(a);
      if (u) {
        const l = Y(this).constructor;
        d = Reflect.construct(f, arguments, l);
      } else d = f.apply(this, arguments);
      return F(this, d);
    };
  }
  function F(a, u) {
    if (u && (i(u) == 'object' || typeof u === 'function')) return u;
    if (u !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return U(a);
  }
  function U(a) {
    if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a;
  }
  function V() {
    try {
      var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
      }));
    } catch {
    }
    return (V = function () {
      return !!a;
    })();
  }
  function Y(a) {
    return Y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (u) {
      return u.__proto__ || Object.getPrototypeOf(u);
    }, Y(a);
  }
  return ue.PrevArrow = /* @__PURE__ */ (function (a) {
    Z(d, a);
    const u = te(d);
    function d() {
      return R(this, d), u.apply(this, arguments);
    }
    return K(d, [{
      key: 'clickHandler',
      value(l, r) {
        r && r.preventDefault(), this.props.clickHandler(l, r);
      },
    }, {
      key: 'render',
      value() {
        const l = {
          'slick-arrow': !0,
          'slick-prev': !0,
        };
        let r = this.clickHandler.bind(this, {
          message: 'previous',
        });
        !this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow) && (l['slick-disabled'] = !0, r = null);
        const h = {
          key: '0',
          'data-role': 'none',
          className: (0, b.default)(l),
          style: {
            display: 'block',
          },
          onClick: r,
        };
        const w = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount,
        };
        let s;
        return this.props.prevArrow ? s = /* @__PURE__ */ c.default.cloneElement(this.props.prevArrow, x(x({}, h), w)) : s = /* @__PURE__ */ c.default.createElement('button', m({
          key: '0',
          type: 'button',
        }, h), ' ', 'Previous'), s;
      },
    }]), d;
  }(c.default.PureComponent)), ue.NextArrow = /* @__PURE__ */ (function (a) {
    Z(d, a);
    const u = te(d);
    function d() {
      return R(this, d), u.apply(this, arguments);
    }
    return K(d, [{
      key: 'clickHandler',
      value(l, r) {
        r && r.preventDefault(), this.props.clickHandler(l, r);
      },
    }, {
      key: 'render',
      value() {
        const l = {
          'slick-arrow': !0,
          'slick-next': !0,
        };
        let r = this.clickHandler.bind(this, {
          message: 'next',
        });
        (0, S.canGoNext)(this.props) || (l['slick-disabled'] = !0, r = null);
        const h = {
          key: '1',
          'data-role': 'none',
          className: (0, b.default)(l),
          style: {
            display: 'block',
          },
          onClick: r,
        };
        const w = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount,
        };
        let s;
        return this.props.nextArrow ? s = /* @__PURE__ */ c.default.cloneElement(this.props.nextArrow, x(x({}, h), w)) : s = /* @__PURE__ */ c.default.createElement('button', m({
          key: '1',
          type: 'button',
        }, h), ' ', 'Next'), s;
      },
    }]), d;
  }(c.default.PureComponent)), ue;
}
const Ze = (function () {
  if (typeof Map < 'u') return Map;
  function i(c, b) {
    let S = -1;
    return c.some((g, m) => (g[0] === b ? (S = m, !0) : !1)), S;
  }
  return (
    /** @class */
    (function () {
      function c() {
        this.__entries__ = [];
      }
      return Object.defineProperty(c.prototype, 'size', {
        /**
         * @returns {boolean}
         */
        get() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0,
      }), c.prototype.get = function (b) {
        const S = i(this.__entries__, b); const
          g = this.__entries__[S];
        return g && g[1];
      }, c.prototype.set = function (b, S) {
        const g = i(this.__entries__, b);
        ~g ? this.__entries__[g][1] = S : this.__entries__.push([b, S]);
      }, c.prototype.delete = function (b) {
        const S = this.__entries__; const
          g = i(S, b);
        ~g && S.splice(g, 1);
      }, c.prototype.has = function (b) {
        return !!~i(this.__entries__, b);
      }, c.prototype.clear = function () {
        this.__entries__.splice(0);
      }, c.prototype.forEach = function (b, S) {
        S === void 0 && (S = null);
        for (let g = 0, m = this.__entries__; g < m.length; g++) {
          const L = m[g];
          b.call(S, L[1], L[0]);
        }
      }, c;
    })()
  );
}());
const Re = typeof window < 'u' && typeof document < 'u' && window.document === document;
const we = (function () {
  return typeof global < 'u' && global.Math === Math ? global : typeof self < 'u' && self.Math === Math ? self : typeof window < 'u' && window.Math === Math ? window : Function('return this')();
}());
const ft = (function () {
  return typeof requestAnimationFrame === 'function' ? requestAnimationFrame.bind(we) : function (i) {
    return setTimeout(() => i(Date.now()), 1e3 / 60);
  };
}());
const dt = 2;
function pt(i, c) {
  let b = !1; let S = !1; let
    g = 0;
  function m() {
    b && (b = !1, i()), S && x();
  }
  function L() {
    ft(m);
  }
  function x() {
    const $ = Date.now();
    if (b) {
      if ($ - g < dt) return;
      S = !0;
    } else b = !0, S = !1, setTimeout(L, c);
    g = $;
  }
  return x;
}
const vt = 20; const ht = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; const yt = typeof MutationObserver < 'u'; const bt = (
  /** @class */
  (function () {
    function i() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = pt(this.refresh.bind(this), vt);
    }
    return i.prototype.addObserver = function (c) {
      ~this.observers_.indexOf(c) || this.observers_.push(c), this.connected_ || this.connect_();
    }, i.prototype.removeObserver = function (c) {
      const b = this.observers_; const
        S = b.indexOf(c);
      ~S && b.splice(S, 1), !b.length && this.connected_ && this.disconnect_();
    }, i.prototype.refresh = function () {
      const c = this.updateObservers_();
      c && this.refresh();
    }, i.prototype.updateObservers_ = function () {
      const c = this.observers_.filter((b) => (b.gatherActive(), b.hasActive()));
      return c.forEach((b) => b.broadcastActive()), c.length > 0;
    }, i.prototype.connect_ = function () {
      !Re || this.connected_ || (document.addEventListener('transitionend', this.onTransitionEnd_), window.addEventListener('resize', this.refresh), yt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0,
      })) : (document.addEventListener('DOMSubtreeModified', this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, i.prototype.disconnect_ = function () {
      !Re || !this.connected_ || (document.removeEventListener('transitionend', this.onTransitionEnd_), window.removeEventListener('resize', this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener('DOMSubtreeModified', this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, i.prototype.onTransitionEnd_ = function (c) {
      const b = c.propertyName; const S = b === void 0 ? '' : b; const
        g = ht.some((m) => !!~S.indexOf(m));
      g && this.refresh();
    }, i.getInstance = function () {
      return this.instance_ || (this.instance_ = new i()), this.instance_;
    }, i.instance_ = null, i;
  })()
); const Je = (function (i, c) {
  for (let b = 0, S = Object.keys(c); b < S.length; b++) {
    const g = S[b];
    Object.defineProperty(i, g, {
      value: c[g],
      enumerable: !1,
      writable: !1,
      configurable: !0,
    });
  }
  return i;
}); const fe = (function (i) {
  const c = i && i.ownerDocument && i.ownerDocument.defaultView;
  return c || we;
}); const
  Qe = ke(0, 0, 0, 0);
function Oe(i) {
  return parseFloat(i) || 0;
}
function Fe(i) {
  for (var c = [], b = 1; b < arguments.length; b++) c[b - 1] = arguments[b];
  return c.reduce((S, g) => {
    const m = i[`border-${g}-width`];
    return S + Oe(m);
  }, 0);
}
function gt(i) {
  for (var c = ['top', 'right', 'bottom', 'left'], b = {}, S = 0, g = c; S < g.length; S++) {
    const m = g[S]; const
      L = i[`padding-${m}`];
    b[m] = Oe(L);
  }
  return b;
}
function mt(i) {
  const c = i.getBBox();
  return ke(0, 0, c.width, c.height);
}
function St(i) {
  const c = i.clientWidth; const
    b = i.clientHeight;
  if (!c && !b) return Qe;
  const S = fe(i).getComputedStyle(i); const g = gt(S); const m = g.left + g.right; const L = g.top + g.bottom; let x = Oe(S.width); let
    $ = Oe(S.height);
  if (S.boxSizing === 'border-box' && (Math.round(x + m) !== c && (x -= Fe(S, 'left', 'right') + m), Math.round($ + L) !== b && ($ -= Fe(S, 'top', 'bottom') + L)), !Ot(i)) {
    const R = Math.round(x + m) - c; const
      z = Math.round($ + L) - b;
    Math.abs(R) !== 1 && (x -= R), Math.abs(z) !== 1 && ($ -= z);
  }
  return ke(g.left, g.top, x, $);
}
const wt = /* @__PURE__ */ (function () {
  return typeof SVGGraphicsElement < 'u' ? function (i) {
    return i instanceof fe(i).SVGGraphicsElement;
  } : function (i) {
    return i instanceof fe(i).SVGElement && typeof i.getBBox === 'function';
  };
}());
function Ot(i) {
  return i === fe(i).document.documentElement;
}
function _t(i) {
  return Re ? wt(i) ? mt(i) : St(i) : Qe;
}
function kt(i) {
  const c = i.x; const b = i.y; const S = i.width; const g = i.height; const m = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object; const
    L = Object.create(m.prototype);
  return Je(L, {
    x: c,
    y: b,
    width: S,
    height: g,
    top: b,
    right: c + S,
    bottom: g + b,
    left: c,
  }), L;
}
function ke(i, c, b, S) {
  return {
    x: i, y: c, width: b, height: S,
  };
}
const Pt = (
  /** @class */
  (function () {
    function i(c) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ke(0, 0, 0, 0), this.target = c;
    }
    return i.prototype.isActive = function () {
      const c = _t(this.target);
      return this.contentRect_ = c, c.width !== this.broadcastWidth || c.height !== this.broadcastHeight;
    }, i.prototype.broadcastRect = function () {
      const c = this.contentRect_;
      return this.broadcastWidth = c.width, this.broadcastHeight = c.height, c;
    }, i;
  })()
); const Ct = (
  /** @class */
  /* @__PURE__ */ (function () {
    function i(c, b) {
      const S = kt(b);
      Je(this, { target: c, contentRect: S });
    }
    return i;
  })()
); const Tt = (
  /** @class */
  (function () {
    function i(c, b, S) {
      if (this.activeObservations_ = [], this.observations_ = new Ze(), typeof c !== 'function') throw new TypeError('The callback provided as parameter 1 is not a function.');
      this.callback_ = c, this.controller_ = b, this.callbackCtx_ = S;
    }
    return i.prototype.observe = function (c) {
      if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
      if (!(typeof Element > 'u' || !(Element instanceof Object))) {
        if (!(c instanceof fe(c).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        const b = this.observations_;
        b.has(c) || (b.set(c, new Pt(c)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, i.prototype.unobserve = function (c) {
      if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
      if (!(typeof Element > 'u' || !(Element instanceof Object))) {
        if (!(c instanceof fe(c).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        const b = this.observations_;
        b.has(c) && (b.delete(c), b.size || this.controller_.removeObserver(this));
      }
    }, i.prototype.disconnect = function () {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, i.prototype.gatherActive = function () {
      const c = this;
      this.clearActive(), this.observations_.forEach((b) => {
        b.isActive() && c.activeObservations_.push(b);
      });
    }, i.prototype.broadcastActive = function () {
      if (this.hasActive()) {
        const c = this.callbackCtx_; const
          b = this.activeObservations_.map((S) => new Ct(S.target, S.broadcastRect()));
        this.callback_.call(c, b, c), this.clearActive();
      }
    }, i.prototype.clearActive = function () {
      this.activeObservations_.splice(0);
    }, i.prototype.hasActive = function () {
      return this.activeObservations_.length > 0;
    }, i;
  })()
); const et = typeof WeakMap < 'u' ? /* @__PURE__ */ new WeakMap() : new Ze(); const
  tt = (
  /** @class */
  /* @__PURE__ */ (function () {
      function i(c) {
        if (!(this instanceof i)) throw new TypeError('Cannot call a class as a function.');
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
        const b = bt.getInstance(); const
          S = new Tt(c, b, this);
        et.set(this, S);
      }
      return i;
    })()
  );
[
  'observe',
  'unobserve',
  'disconnect',
].forEach((i) => {
  tt.prototype[i] = function () {
    let c;
    return (c = et.get(this))[i].apply(c, arguments);
  };
});
const jt = (function () {
  return typeof we.ResizeObserver < 'u' ? we.ResizeObserver : tt;
}());
const Et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jt,
}, Symbol.toStringTag, { value: 'Module' })); const
  xt = /* @__PURE__ */ ot(Et);
let Be;
function Lt() {
  if (Be) return ve;
  Be = 1, Object.defineProperty(ve, '__esModule', {
    value: !0,
  }), ve.InnerSlider = void 0;
  const i = R(ce); const c = R(at()); const b = R(lt()); const S = R(_e()); const g = be(); const m = st(); const L = ut(); const x = ct(); const
    $ = R(xt);
  function R(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function z(s) {
    '@babel/helpers - typeof';

    return z = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (v) {
      return typeof v;
    } : function (v) {
      return v && typeof Symbol === 'function' && v.constructor === Symbol && v !== Symbol.prototype ? 'symbol' : typeof v;
    }, z(s);
  }
  function K() {
    return K = Object.assign ? Object.assign.bind() : function (s) {
      for (let v = 1; v < arguments.length; v++) {
        const y = arguments[v];
        for (const _ in y) ({}).hasOwnProperty.call(y, _) && (s[_] = y[_]);
      }
      return s;
    }, K.apply(null, arguments);
  }
  function Q(s, v) {
    if (s == null) return {};
    let y; let _; const
      t = J(s, v);
    if (Object.getOwnPropertySymbols) {
      const D = Object.getOwnPropertySymbols(s);
      for (_ = 0; _ < D.length; _++) y = D[_], v.includes(y) || {}.propertyIsEnumerable.call(s, y) && (t[y] = s[y]);
    }
    return t;
  }
  function J(s, v) {
    if (s == null) return {};
    const y = {};
    for (const _ in s) {
      if ({}.hasOwnProperty.call(s, _)) {
        if (v.includes(_)) continue;
        y[_] = s[_];
      }
    }
    return y;
  }
  function Z(s, v) {
    const y = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
      let _ = Object.getOwnPropertySymbols(s);
      v && (_ = _.filter((t) => Object.getOwnPropertyDescriptor(s, t).enumerable)), y.push.apply(y, _);
    }
    return y;
  }
  function C(s) {
    for (let v = 1; v < arguments.length; v++) {
      var y = arguments[v] != null ? arguments[v] : {};
      v % 2 ? Z(Object(y), !0).forEach((_) => {
        r(s, _, y[_]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(y)) : Z(Object(y)).forEach((_) => {
        Object.defineProperty(s, _, Object.getOwnPropertyDescriptor(y, _));
      });
    }
    return s;
  }
  function te(s, v) {
    if (!(s instanceof v)) throw new TypeError('Cannot call a class as a function');
  }
  function F(s, v) {
    for (let y = 0; y < v.length; y++) {
      const _ = v[y];
      _.enumerable = _.enumerable || !1, _.configurable = !0, 'value' in _ && (_.writable = !0), Object.defineProperty(s, h(_.key), _);
    }
  }
  function U(s, v, y) {
    return v && F(s.prototype, v), Object.defineProperty(s, 'prototype', { writable: !1 }), s;
  }
  function V(s, v) {
    if (typeof v !== 'function' && v !== null) throw new TypeError('Super expression must either be null or a function');
    s.prototype = Object.create(v && v.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, 'prototype', { writable: !1 }), v && Y(s, v);
  }
  function Y(s, v) {
    return Y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (y, _) {
      return y.__proto__ = _, y;
    }, Y(s, v);
  }
  function a(s) {
    const v = f();
    return function () {
      let y; const
        _ = l(s);
      if (v) {
        const t = l(this).constructor;
        y = Reflect.construct(_, arguments, t);
      } else y = _.apply(this, arguments);
      return u(this, y);
    };
  }
  function u(s, v) {
    if (v && (z(v) == 'object' || typeof v === 'function')) return v;
    if (v !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return d(s);
  }
  function d(s) {
    if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s;
  }
  function f() {
    try {
      var s = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
      }));
    } catch {
    }
    return (f = function () {
      return !!s;
    })();
  }
  function l(s) {
    return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (v) {
      return v.__proto__ || Object.getPrototypeOf(v);
    }, l(s);
  }
  function r(s, v, y) {
    return (v = h(v)) in s ? Object.defineProperty(s, v, {
      value: y, enumerable: !0, configurable: !0, writable: !0,
    }) : s[v] = y, s;
  }
  function h(s) {
    const v = w(s, 'string');
    return z(v) == 'symbol' ? v : `${v}`;
  }
  function w(s, v) {
    if (z(s) != 'object' || !s) return s;
    const y = s[Symbol.toPrimitive];
    if (y !== void 0) {
      const _ = y.call(s, v);
      if (z(_) != 'object') return _;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (v === 'string' ? String : Number)(s);
  }
  return ve.InnerSlider = /* @__PURE__ */ (function (s) {
    V(y, s);
    const v = a(y);
    function y(_) {
      let t;
      te(this, y), t = v.call(this, _), r(d(t), 'listRefHandler', (o) => t.list = o), r(d(t), 'trackRefHandler', (o) => t.track = o), r(d(t), 'adaptHeight', () => {
        if (t.props.adaptiveHeight && t.list) {
          const o = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
          t.list.style.height = `${(0, g.getHeight)(o)}px`;
        }
      }), r(d(t), 'componentDidMount', () => {
        if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
          const o = (0, g.getOnDemandLazySlides)(C(C({}, t.props), t.state));
          o.length > 0 && (t.setState((n) => ({
            lazyLoadedList: n.lazyLoadedList.concat(o),
          })), t.props.onLazyLoad && t.props.onLazyLoad(o));
        }
        const e = C({
          listRef: t.list,
          trackRef: t.track,
        }, t.props);
        t.updateState(e, !0, () => {
          t.adaptHeight(), t.props.autoplay && t.autoPlay('update');
        }), t.props.lazyLoad === 'progressive' && (t.lazyLoadTimer = setInterval(t.progressiveLazyLoad, 1e3)), t.ro = new $.default(() => {
          t.state.animating ? (t.onWindowResized(!1), t.callbackTimers.push(setTimeout(() => t.onWindowResized(), t.props.speed))) : t.onWindowResized();
        }), t.ro.observe(t.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll('.slick-slide'), (n) => {
          n.onfocus = t.props.pauseOnFocus ? t.onSlideFocus : null, n.onblur = t.props.pauseOnFocus ? t.onSlideBlur : null;
        }), window.addEventListener ? window.addEventListener('resize', t.onWindowResized) : window.attachEvent('onresize', t.onWindowResized);
      }), r(d(t), 'componentWillUnmount', () => {
        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach((o) => clearTimeout(o)), t.callbackTimers = []), window.addEventListener ? window.removeEventListener('resize', t.onWindowResized) : window.detachEvent('onresize', t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
      }), r(d(t), 'componentDidUpdate', (o) => {
        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
          const e = (0, g.getOnDemandLazySlides)(C(C({}, t.props), t.state));
          e.length > 0 && (t.setState((k) => ({
            lazyLoadedList: k.lazyLoadedList.concat(e),
          })), t.props.onLazyLoad && t.props.onLazyLoad(e));
        }
        t.adaptHeight();
        const n = C(C({
          listRef: t.list,
          trackRef: t.track,
        }, t.props), t.state); const
          p = t.didPropsChange(o);
        p && t.updateState(n, p, () => {
          t.state.currentSlide >= i.default.Children.count(t.props.children) && t.changeSlide({
            message: 'index',
            index: i.default.Children.count(t.props.children) - t.props.slidesToShow,
            currentSlide: t.state.currentSlide,
          }), t.props.autoplay ? t.autoPlay('update') : t.pause('paused');
        });
      }), r(d(t), 'onWindowResized', (o) => {
        t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, b.default)(() => t.resizeWindow(o), 50), t.debouncedResize();
      }), r(d(t), 'resizeWindow', function () {
        const o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0; const
          e = !!(t.track && t.track.node);
        if (e) {
          const n = C(C({
            listRef: t.list,
            trackRef: t.track,
          }, t.props), t.state);
          t.updateState(n, o, () => {
            t.props.autoplay ? t.autoPlay('update') : t.pause('paused');
          }), t.setState({
            animating: !1,
          }), clearTimeout(t.animationEndCallback), delete t.animationEndCallback;
        }
      }), r(d(t), 'updateState', (o, e, n) => {
        const p = (0, g.initializedState)(o);
        o = C(C(C({}, o), p), {}, {
          slideIndex: p.currentSlide,
        });
        const k = (0, g.getTrackLeft)(o);
        o = C(C({}, o), {}, {
          left: k,
        });
        const O = (0, g.getTrackCSS)(o);
        (e || i.default.Children.count(t.props.children) !== i.default.Children.count(o.children)) && (p.trackStyle = O), t.setState(p, n);
      }), r(d(t), 'ssrInit', () => {
        if (t.props.variableWidth) {
          let o = 0; let e = 0; const n = []; const p = (0, g.getPreClones)(C(C(C({}, t.props), t.state), {}, {
            slideCount: t.props.children.length,
          })); const
            k = (0, g.getPostClones)(C(C(C({}, t.props), t.state), {}, {
              slideCount: t.props.children.length,
            }));
          t.props.children.forEach((re) => {
            n.push(re.props.style.width), o += re.props.style.width;
          });
          for (let O = 0; O < p; O++) e += n[n.length - 1 - O], o += n[n.length - 1 - O];
          for (let T = 0; T < k; T++) o += n[T];
          for (let P = 0; P < t.state.currentSlide; P++) e += n[P];
          const j = {
            width: `${o}px`,
            left: `${-e}px`,
          };
          if (t.props.centerMode) {
            const W = ''.concat(n[t.state.currentSlide], 'px');
            j.left = 'calc('.concat(j.left, ' + (100% - ').concat(W, ') / 2 ) ');
          }
          return {
            trackStyle: j,
          };
        }
        const A = i.default.Children.count(t.props.children); const I = C(C(C({}, t.props), t.state), {}, {
          slideCount: A,
        }); const X = (0, g.getPreClones)(I) + (0, g.getPostClones)(I) + A; const G = 100 / t.props.slidesToShow * X; const q = 100 / X; let
          H = -q * ((0, g.getPreClones)(I) + t.state.currentSlide) * G / 100;
        t.props.centerMode && (H += (100 - q * G / 100) / 2);
        const B = {
          width: `${G}%`,
          left: `${H}%`,
        };
        return {
          slideWidth: `${q}%`,
          trackStyle: B,
        };
      }), r(d(t), 'checkImagesLoad', () => {
        const o = t.list && t.list.querySelectorAll && t.list.querySelectorAll('.slick-slide img') || []; const e = o.length; let
          n = 0;
        Array.prototype.forEach.call(o, (p) => {
          const k = function () {
            return ++n && n >= e && t.onWindowResized();
          };
          if (!p.onclick) {
            p.onclick = function () {
              return p.parentNode.focus();
            };
          } else {
            const O = p.onclick;
            p.onclick = function (T) {
              O(T), p.parentNode.focus();
            };
          }
          p.onload || (t.props.lazyLoad ? p.onload = function () {
            t.adaptHeight(), t.callbackTimers.push(setTimeout(t.onWindowResized, t.props.speed));
          } : (p.onload = k, p.onerror = function () {
            k(), t.props.onLazyLoadError && t.props.onLazyLoadError();
          }));
        });
      }), r(d(t), 'progressiveLazyLoad', () => {
        for (var o = [], e = C(C({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, g.getPostClones)(e); n++) {
          if (t.state.lazyLoadedList.indexOf(n) < 0) {
            o.push(n);
            break;
          }
        }
        for (let p = t.state.currentSlide - 1; p >= -(0, g.getPreClones)(e); p--) {
          if (t.state.lazyLoadedList.indexOf(p) < 0) {
            o.push(p);
            break;
          }
        }
        o.length > 0 ? (t.setState((k) => ({
          lazyLoadedList: k.lazyLoadedList.concat(o),
        })), t.props.onLazyLoad && t.props.onLazyLoad(o)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
      }), r(d(t), 'slideHandler', function (o) {
        const e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; const n = t.props; const p = n.asNavFor; const k = n.beforeChange; const O = n.onLazyLoad; const T = n.speed; const P = n.afterChange; const j = t.state.currentSlide; const W = (0, g.slideHandler)(C(C(C({
          index: o,
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e,
        })); const A = W.state; const
          I = W.nextState;
        if (A) {
          k && k(j, A.currentSlide);
          const X = A.lazyLoadedList.filter((G) => t.state.lazyLoadedList.indexOf(G) < 0);
          O && X.length > 0 && O(X), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), P && P(j), delete t.animationEndCallback), t.setState(A, () => {
            p && t.asNavForIndex !== o && (t.asNavForIndex = o, p.innerSlider.slideHandler(o)), I && (t.animationEndCallback = setTimeout(() => {
              const G = I.animating; const
                q = Q(I, ['animating']);
              t.setState(q, () => {
                t.callbackTimers.push(setTimeout(() => t.setState({
                  animating: G,
                }), 10)), P && P(A.currentSlide), delete t.animationEndCallback;
              });
            }, T));
          });
        }
      }), r(d(t), 'changeSlide', function (o) {
        const e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; const n = C(C({}, t.props), t.state); const
          p = (0, g.changeSlide)(n, o);
        if (!(p !== 0 && !p) && (e === !0 ? t.slideHandler(p, e) : t.slideHandler(p), t.props.autoplay && t.autoPlay('update'), t.props.focusOnSelect)) {
          const k = t.list.querySelectorAll('.slick-current');
          k[0] && k[0].focus();
        }
      }), r(d(t), 'clickHandler', (o) => {
        t.clickable === !1 && (o.stopPropagation(), o.preventDefault()), t.clickable = !0;
      }), r(d(t), 'keyHandler', (o) => {
        const e = (0, g.keyHandler)(o, t.props.accessibility, t.props.rtl);
        e !== '' && t.changeSlide({
          message: e,
        });
      }), r(d(t), 'selectHandler', (o) => {
        t.changeSlide(o);
      }), r(d(t), 'disableBodyScroll', () => {
        const o = function (n) {
          n = n || window.event, n.preventDefault && n.preventDefault(), n.returnValue = !1;
        };
        window.ontouchmove = o;
      }), r(d(t), 'enableBodyScroll', () => {
        window.ontouchmove = null;
      }), r(d(t), 'swipeStart', (o) => {
        t.props.verticalSwiping && t.disableBodyScroll();
        const e = (0, g.swipeStart)(o, t.props.swipe, t.props.draggable);
        e !== '' && t.setState(e);
      }), r(d(t), 'swipeMove', (o) => {
        const e = (0, g.swipeMove)(o, C(C(C({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide,
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(d(t), 'swipeEnd', (o) => {
        const e = (0, g.swipeEnd)(o, C(C(C({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide,
        }));
        if (e) {
          const n = e.triggerSlideHandler;
          delete e.triggerSlideHandler, t.setState(e), n !== void 0 && (t.slideHandler(n), t.props.verticalSwiping && t.enableBodyScroll());
        }
      }), r(d(t), 'touchEnd', (o) => {
        t.swipeEnd(o), t.clickable = !0;
      }), r(d(t), 'slickPrev', () => {
        t.callbackTimers.push(setTimeout(() => t.changeSlide({
          message: 'previous',
        }), 0));
      }), r(d(t), 'slickNext', () => {
        t.callbackTimers.push(setTimeout(() => t.changeSlide({
          message: 'next',
        }), 0));
      }), r(d(t), 'slickGoTo', function (o) {
        const e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (o = Number(o), isNaN(o)) return '';
        t.callbackTimers.push(setTimeout(() => t.changeSlide({
          message: 'index',
          index: o,
          currentSlide: t.state.currentSlide,
        }, e), 0));
      }), r(d(t), 'play', () => {
        let o;
        if (t.props.rtl) o = t.state.currentSlide - t.props.slidesToScroll;
        else if ((0, g.canGoNext)(C(C({}, t.props), t.state))) o = t.state.currentSlide + t.props.slidesToScroll;
        else return !1;
        t.slideHandler(o);
      }), r(d(t), 'autoPlay', (o) => {
        t.autoplayTimer && clearInterval(t.autoplayTimer);
        const e = t.state.autoplaying;
        if (o === 'update') {
          if (e === 'hovered' || e === 'focused' || e === 'paused') return;
        } else if (o === 'leave') {
          if (e === 'paused' || e === 'focused') return;
        } else if (o === 'blur' && (e === 'paused' || e === 'hovered')) return;
        t.autoplayTimer = setInterval(t.play, t.props.autoplaySpeed + 50), t.setState({
          autoplaying: 'playing',
        });
      }), r(d(t), 'pause', (o) => {
        t.autoplayTimer && (clearInterval(t.autoplayTimer), t.autoplayTimer = null);
        const e = t.state.autoplaying;
        o === 'paused' ? t.setState({
          autoplaying: 'paused',
        }) : o === 'focused' ? (e === 'hovered' || e === 'playing') && t.setState({
          autoplaying: 'focused',
        }) : e === 'playing' && t.setState({
          autoplaying: 'hovered',
        });
      }), r(d(t), 'onDotsOver', () => t.props.autoplay && t.pause('hovered')), r(d(t), 'onDotsLeave', () => t.props.autoplay && t.state.autoplaying === 'hovered' && t.autoPlay('leave')), r(d(t), 'onTrackOver', () => t.props.autoplay && t.pause('hovered')), r(d(t), 'onTrackLeave', () => t.props.autoplay && t.state.autoplaying === 'hovered' && t.autoPlay('leave')), r(d(t), 'onSlideFocus', () => t.props.autoplay && t.pause('focused')), r(d(t), 'onSlideBlur', () => t.props.autoplay && t.state.autoplaying === 'focused' && t.autoPlay('blur')), r(d(t), 'render', () => {
        const o = (0, S.default)('slick-slider', t.props.className, {
          'slick-vertical': t.props.vertical,
          'slick-initialized': !0,
        }); const e = C(C({}, t.props), t.state); let n = (0, g.extractObject)(e, ['fade', 'cssEase', 'speed', 'infinite', 'centerMode', 'focusOnSelect', 'currentSlide', 'lazyLoad', 'lazyLoadedList', 'rtl', 'slideWidth', 'slideHeight', 'listHeight', 'vertical', 'slidesToShow', 'slidesToScroll', 'slideCount', 'trackStyle', 'variableWidth', 'unslick', 'centerPadding', 'targetSlide', 'useCSS']); const
          p = t.props.pauseOnHover;
        n = C(C({}, n), {}, {
          onMouseEnter: p ? t.onTrackOver : null,
          onMouseLeave: p ? t.onTrackLeave : null,
          onMouseOver: p ? t.onTrackOver : null,
          focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null,
        });
        let k;
        if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
          let O = (0, g.extractObject)(e, ['dotsClass', 'slideCount', 'slidesToShow', 'currentSlide', 'slidesToScroll', 'clickHandler', 'children', 'customPaging', 'infinite', 'appendDots']); const
            T = t.props.pauseOnDotsHover;
          O = C(C({}, O), {}, {
            clickHandler: t.changeSlide,
            onMouseEnter: T ? t.onDotsLeave : null,
            onMouseOver: T ? t.onDotsOver : null,
            onMouseLeave: T ? t.onDotsLeave : null,
          }), k = /* @__PURE__ */ i.default.createElement(L.Dots, O);
        }
        let P; let j; const
          W = (0, g.extractObject)(e, ['infinite', 'centerMode', 'currentSlide', 'slideCount', 'slidesToShow', 'prevArrow', 'nextArrow']);
        W.clickHandler = t.changeSlide, t.props.arrows && (P = /* @__PURE__ */ i.default.createElement(x.PrevArrow, W), j = /* @__PURE__ */ i.default.createElement(x.NextArrow, W));
        let A = null;
        t.props.vertical && (A = {
          height: t.state.listHeight,
        });
        let I = null;
        t.props.vertical === !1 ? t.props.centerMode === !0 && (I = {
          padding: `0px ${t.props.centerPadding}`,
        }) : t.props.centerMode === !0 && (I = {
          padding: `${t.props.centerPadding} 0px`,
        });
        const X = C(C({}, A), I); const G = t.props.touchMove; let q = {
          className: 'slick-list',
          style: X,
          onClick: t.clickHandler,
          onMouseDown: G ? t.swipeStart : null,
          onMouseMove: t.state.dragging && G ? t.swipeMove : null,
          onMouseUp: G ? t.swipeEnd : null,
          onMouseLeave: t.state.dragging && G ? t.swipeEnd : null,
          onTouchStart: G ? t.swipeStart : null,
          onTouchMove: t.state.dragging && G ? t.swipeMove : null,
          onTouchEnd: G ? t.touchEnd : null,
          onTouchCancel: t.state.dragging && G ? t.swipeEnd : null,
          onKeyDown: t.props.accessibility ? t.keyHandler : null,
        }; let
          H = {
            className: o,
            dir: 'ltr',
            style: t.props.style,
          };
        return t.props.unslick && (q = {
          className: 'slick-list',
        }, H = {
          className: o,
          style: t.props.style,
        }), /* @__PURE__ */ i.default.createElement('div', H, t.props.unslick ? '' : P, /* @__PURE__ */ i.default.createElement('div', K({
          ref: t.listRefHandler,
        }, q), /* @__PURE__ */ i.default.createElement(m.Track, K({
          ref: t.trackRefHandler,
        }, n), t.props.children)), t.props.unslick ? '' : j, t.props.unslick ? '' : k);
      }), t.list = null, t.track = null, t.state = C(C({}, c.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: i.default.Children.count(t.props.children),
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      const D = t.ssrInit();
      return t.state = C(C({}, t.state), D), t;
    }
    return U(y, [{
      key: 'didPropsChange',
      value(t) {
        for (var D = !1, o = 0, e = Object.keys(this.props); o < e.length; o++) {
          const n = e[o];
          if (!t.hasOwnProperty(n)) {
            D = !0;
            break;
          }
          if (!(z(t[n]) === 'object' || typeof t[n] === 'function' || isNaN(t[n])) && t[n] !== this.props[n]) {
            D = !0;
            break;
          }
        }
        return D || i.default.Children.count(this.props.children) !== i.default.Children.count(t.children);
      },
    }]), y;
  }(i.default.Component)), ve;
}
let Le; let
  Ge;
function Mt() {
  if (Ge) return Le;
  Ge = 1;
  const i = function (c) {
    return c.replace(/[A-Z]/g, (b) => `-${b.toLowerCase()}`).toLowerCase();
  };
  return Le = i, Le;
}
let Me; let
  Xe;
function Rt() {
  if (Xe) return Me;
  Xe = 1;
  const i = Mt(); const c = function (g) {
    const m = /[height|width]$/;
    return m.test(g);
  }; const b = function (g) {
    let m = '';
    const L = Object.keys(g);
    return L.forEach((x, $) => {
      let R = g[x];
      x = i(x), c(x) && typeof R === 'number' && (R += 'px'), R === !0 ? m += x : R === !1 ? m += `not ${x}` : m += `(${x}: ${R})`, $ < L.length - 1 && (m += ' and ');
    }), m;
  }; const
    S = function (g) {
      let m = '';
      return typeof g === 'string' ? g : g instanceof Array ? (g.forEach((L, x) => {
        m += b(L), x < g.length - 1 && (m += ', ');
      }), m) : b(g);
    };
  return Me = S, Me;
}
let Ke;
function zt() {
  return Ke || (Ke = 1, (function (i) {
    Object.defineProperty(i, '__esModule', {
      value: !0,
    }), i.default = void 0;
    const c = L(ce); const b = Lt(); const S = L(Rt()); const g = L(Ve()); const
      m = be();
    function L(f) {
      return f && f.__esModule ? f : { default: f };
    }
    function x(f) {
      '@babel/helpers - typeof';

      return x = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (l) {
        return typeof l;
      } : function (l) {
        return l && typeof Symbol === 'function' && l.constructor === Symbol && l !== Symbol.prototype ? 'symbol' : typeof l;
      }, x(f);
    }
    function $() {
      return $ = Object.assign ? Object.assign.bind() : function (f) {
        for (let l = 1; l < arguments.length; l++) {
          const r = arguments[l];
          for (const h in r) ({}).hasOwnProperty.call(r, h) && (f[h] = r[h]);
        }
        return f;
      }, $.apply(null, arguments);
    }
    function R(f, l) {
      const r = Object.keys(f);
      if (Object.getOwnPropertySymbols) {
        let h = Object.getOwnPropertySymbols(f);
        l && (h = h.filter((w) => Object.getOwnPropertyDescriptor(f, w).enumerable)), r.push.apply(r, h);
      }
      return r;
    }
    function z(f) {
      for (let l = 1; l < arguments.length; l++) {
        var r = arguments[l] != null ? arguments[l] : {};
        l % 2 ? R(Object(r), !0).forEach((h) => {
          a(f, h, r[h]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(r)) : R(Object(r)).forEach((h) => {
          Object.defineProperty(f, h, Object.getOwnPropertyDescriptor(r, h));
        });
      }
      return f;
    }
    function K(f, l) {
      if (!(f instanceof l)) throw new TypeError('Cannot call a class as a function');
    }
    function Q(f, l) {
      for (let r = 0; r < l.length; r++) {
        const h = l[r];
        h.enumerable = h.enumerable || !1, h.configurable = !0, 'value' in h && (h.writable = !0), Object.defineProperty(f, u(h.key), h);
      }
    }
    function J(f, l, r) {
      return l && Q(f.prototype, l), Object.defineProperty(f, 'prototype', { writable: !1 }), f;
    }
    function Z(f, l) {
      if (typeof l !== 'function' && l !== null) throw new TypeError('Super expression must either be null or a function');
      f.prototype = Object.create(l && l.prototype, { constructor: { value: f, writable: !0, configurable: !0 } }), Object.defineProperty(f, 'prototype', { writable: !1 }), l && C(f, l);
    }
    function C(f, l) {
      return C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (r, h) {
        return r.__proto__ = h, r;
      }, C(f, l);
    }
    function te(f) {
      const l = V();
      return function () {
        let r; const
          h = Y(f);
        if (l) {
          const w = Y(this).constructor;
          r = Reflect.construct(h, arguments, w);
        } else r = h.apply(this, arguments);
        return F(this, r);
      };
    }
    function F(f, l) {
      if (l && (x(l) == 'object' || typeof l === 'function')) return l;
      if (l !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
      return U(f);
    }
    function U(f) {
      if (f === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return f;
    }
    function V() {
      try {
        var f = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
        }));
      } catch {
      }
      return (V = function () {
        return !!f;
      })();
    }
    function Y(f) {
      return Y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (l) {
        return l.__proto__ || Object.getPrototypeOf(l);
      }, Y(f);
    }
    function a(f, l, r) {
      return (l = u(l)) in f ? Object.defineProperty(f, l, {
        value: r, enumerable: !0, configurable: !0, writable: !0,
      }) : f[l] = r, f;
    }
    function u(f) {
      const l = d(f, 'string');
      return x(l) == 'symbol' ? l : `${l}`;
    }
    function d(f, l) {
      if (x(f) != 'object' || !f) return f;
      const r = f[Symbol.toPrimitive];
      if (r !== void 0) {
        const h = r.call(f, l);
        if (x(h) != 'object') return h;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return (l === 'string' ? String : Number)(f);
    }
    i.default = /* @__PURE__ */ (function (f) {
      Z(r, f);
      const l = te(r);
      function r(h) {
        let w;
        return K(this, r), w = l.call(this, h), a(U(w), 'innerSliderRefHandler', (s) => w.innerSlider = s), a(U(w), 'slickPrev', () => w.innerSlider.slickPrev()), a(U(w), 'slickNext', () => w.innerSlider.slickNext()), a(U(w), 'slickGoTo', function (s) {
          const v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return w.innerSlider.slickGoTo(s, v);
        }), a(U(w), 'slickPause', () => w.innerSlider.pause('paused')), a(U(w), 'slickPlay', () => w.innerSlider.autoPlay('play')), w.state = {
          breakpoint: null,
        }, w._responsiveMediaHandlers = [], w;
      }
      return J(r, [{
        key: 'media',
        value(w, s) {
          const v = window.matchMedia(w); const
            y = function (t) {
              const D = t.matches;
              D && s();
            };
          v.addListener(y), this._responsiveMediaHandlers.push({
            mql: v,
            query: w,
            listener: y,
          });
        },
        // handles responsive breakpoints
      }, {
        key: 'componentDidMount',
        value() {
          const w = this;
          if (this.props.responsive) {
            const s = this.props.responsive.map((y) => y.breakpoint);
            s.sort((y, _) => y - _), s.forEach((y, _) => {
              let t;
              _ === 0 ? t = (0, S.default)({
                minWidth: 0,
                maxWidth: y,
              }) : t = (0, S.default)({
                minWidth: s[_ - 1] + 1,
                maxWidth: y,
              }), (0, m.canUseDOM)() && w.media(t, () => {
                w.setState({
                  breakpoint: y,
                });
              });
            });
            const v = (0, S.default)({
              minWidth: s.slice(-1)[0],
            });
            (0, m.canUseDOM)() && this.media(v, () => {
              w.setState({
                breakpoint: null,
              });
            });
          }
        },
      }, {
        key: 'componentWillUnmount',
        value() {
          this._responsiveMediaHandlers.forEach((w) => {
            w.mql.removeListener(w.listener);
          });
        },
      }, {
        key: 'render',
        value() {
          const w = this; let s; let
            v;
          this.state.breakpoint ? (v = this.props.responsive.filter((O) => O.breakpoint === w.state.breakpoint), s = v[0].settings === 'unslick' ? 'unslick' : z(z(z({}, g.default), this.props), v[0].settings)) : s = z(z({}, g.default), this.props), s.centerMode && (s.slidesToScroll > 1 && process.env.NODE_ENV !== 'production' && console.warn('slidesToScroll should be equal to 1 in centerMode, you are using '.concat(s.slidesToScroll)), s.slidesToScroll = 1), s.fade && (s.slidesToShow > 1 && process.env.NODE_ENV !== 'production' && console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(s.slidesToShow)), s.slidesToScroll > 1 && process.env.NODE_ENV !== 'production' && console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(s.slidesToScroll)), s.slidesToShow = 1, s.slidesToScroll = 1);
          let y = c.default.Children.toArray(this.props.children);
          y = y.filter((O) => (typeof O === 'string' ? !!O.trim() : !!O)), s.variableWidth && (s.rows > 1 || s.slidesPerRow > 1) && (console.warn('variableWidth is not supported in case of rows > 1 or slidesPerRow > 1'), s.variableWidth = !1);
          for (var _ = [], t = null, D = 0; D < y.length; D += s.rows * s.slidesPerRow) {
            for (var o = [], e = D; e < D + s.rows * s.slidesPerRow; e += s.slidesPerRow) {
              for (var n = [], p = e; p < e + s.slidesPerRow && (s.variableWidth && y[p].props.style && (t = y[p].props.style.width), !(p >= y.length)); p += 1) {
                n.push(/* @__PURE__ */ c.default.cloneElement(y[p], {
                  key: 100 * D + 10 * e + p,
                  tabIndex: -1,
                  style: {
                    width: ''.concat(100 / s.slidesPerRow, '%'),
                    display: 'inline-block',
                  },
                }));
              }
              o.push(/* @__PURE__ */ c.default.createElement('div', {
                key: 10 * D + e,
              }, n));
            }
            s.variableWidth ? _.push(/* @__PURE__ */ c.default.createElement('div', {
              key: D,
              style: {
                width: t,
              },
            }, o)) : _.push(/* @__PURE__ */ c.default.createElement('div', {
              key: D,
            }, o));
          }
          if (s === 'unslick') {
            const k = `regular slider ${this.props.className || ''}`;
            return /* @__PURE__ */ c.default.createElement('div', {
              className: k,
            }, y);
          } _.length <= s.slidesToShow && (s.unslick = !0);
          return /* @__PURE__ */ c.default.createElement(b.InnerSlider, $({
            style: this.props.style,
            ref: this.innerSliderRefHandler,
          }, (0, m.filterSettings)(s)), _);
        },
      }]), r;
    }(c.default.Component));
  }(Ce))), Ce;
}
let Ue;
function Dt() {
  return Ue || (Ue = 1, (function (i) {
    Object.defineProperty(i, '__esModule', {
      value: !0,
    }), i.default = void 0;
    const c = b(zt());
    function b(S) {
      return S && S.__esModule ? S : { default: S };
    }
    i.default = c.default;
  }(Pe))), Pe;
}
const Nt = Dt();
const Ht = /* @__PURE__ */ it(Nt);
function Wt({
  tab: i = {},
  // { text: string, image: string, imageAlt: string }
  isActive: c = !1,
  onClick: b = () => {
  },
  index: S = 0,
  className: g = '',
  largeImage: m = !1,
  // if true, set image size to 48x48 even to mobile
}) {
  return i ? /* @__PURE__ */ M('div', {
    className: g,
    children: /* @__PURE__ */ ae(
      'button',
      {
        onClick: b,
        className: `inline-flex justify-center items-center gap-4 xl:gap-10 rounded-full border transition-all duration-300 p-tabbed-loz--padding cursor-pointer hover:bg-grey-600 hover:text-white focus-visible:bg-grey-600 focus-visible:text-white min-w-[110px] ${c ? 'border-grey-600 bg-grey-600 text-white' : 'border-grey-600 bg-grey-100 text-grey-950'}`,
        children: [
          i.image && /* @__PURE__ */ M(
            'img',
            {
              src: i.image,
              alt: i.imageAlt || '',
              className: `rounded-full object-cover ${m ? 'w-48 h-48' : 'w-24 h-24 xl:w-48 xl:h-48'}`,
            },
          ),
          i.text && /* @__PURE__ */ M('span', { className: 'text-body-default', children: i.text }),
        ],
      },
    ),
  }, S) : null;
}
function At({
  title: i,
  titleId: c,
  ...b
}, S) {
  return /* @__PURE__ */ Se.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': 'true',
    'data-slot': 'icon',
    ref: S,
    'aria-labelledby': c,
    ...b,
  }, i ? /* @__PURE__ */ Se.createElement('title', {
    id: c,
  }, i) : null, /* @__PURE__ */ Se.createElement('path', {
    fillRule: 'evenodd',
    d: 'M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z',
    clipRule: 'evenodd',
  }));
}
const It = /* @__PURE__ */ Se.forwardRef(At);
function qt(i) {
  const [c, b] = Ye(!1);
  return nt(() => {
    const S = window.matchMedia(i);
    b(S.matches);
    const g = () => b(S.matches);
    return S.addEventListener('change', g), () => S.removeEventListener('change', g);
  }, [i]), c;
}
function $t(i, c) {
  const b = (i == null ? void 0 : i.length) || 0; const S = Math.max(b, ...(c || []).map((x) => (x || []).length), 0); const g = (x, $) => {
    const R = [...x || []];
    for (; R.length < $;) R.push('');
    return R;
  }; const m = g(i || [], S); const
    L = (c || []).map((x) => g(x, S));
  return { columns: m, data: L, columnCount: S };
}
function Gt({
  columns: i = [],
  data: c = [],
  tabImages: b = [],
  variant: S = 'normal',
  // 'normal' | 'pricing' | 'comparison'
  className: g = '',
  id: m = '',
  fullWidth: L = !0,
  attributes: x = [],
}) {
  const $ = qt('(min-width: 768px)'); const
    { columns: R, data: z, columnCount: K } = $t(i, c);
  if (!R.length || !z.length) return null;
  const Q = `overflow-x-auto ${g}`.trim(); const J = `border-collapse overflow-hidden w-full min-w-0 md:min-w-[300px] lg:min-w-[620px] ${L ? 'w-full' : ''}`; const Z = 'p-10 text-left border-r border-b border-grey-500 min-w-0 md:min-w-[180px] lg:min-w-[200px]'; const C = 'p-10 border-r border-b border-grey-500 min-w-0'; const te = K * 140; const F = 'p-10 text-left border-r border-b border-grey-500 min-w-[140px] md:min-w-[180px] lg:min-w-[200px]'; const U = 'p-10 border-r border-b border-grey-500 min-w-[140px]'; const V = () => /* @__PURE__ */ ae('div', {
    className: Q,
    id: m,
    children: [
    /* @__PURE__ */ M('style', { children: '@media (max-width:767px){.normal-table-mobile-scroll{min-width:var(--normal-table-mw);}}' }),
      /* @__PURE__ */ ae(
        'table',
        {
          className: `${J} normal-table-mobile-scroll`,
          style: { '--normal-table-mw': `${te}px` },
          children: [
          /* @__PURE__ */ M('thead', {
              children: /* @__PURE__ */ M('tr', {
                children: R.map((v, y) => /* @__PURE__ */ M(
                  'th',
                  {
                    className: `${F} ${y === K - 1 ? 'border-r-0' : ''} font-semibold text-headings-h4`,
                    children: v ?? '',
                  },
                  y,
                )),
              }),
            }),
            /* @__PURE__ */ M('tbody', {
              children: z.map((v, y) => /* @__PURE__ */ M('tr', {
                ...x[y] || {},
                children: v.map((_, t) => /* @__PURE__ */ M(
                  'td',
                  {
                    className: `${U} ${t === K - 1 ? 'border-r-0' : ''}`,
                    children: _ ?? '',
                  },
                  t,
                )),
              }, y)),
            }),
          ],
        },
      ),
    ],
  }); const Y = 'font-normal text-display-s text-center!'; const a = (v) => (v > 0 ? 'text-center!' : ''); const u = () => /* @__PURE__ */ M('div', {
    className: Q,
    id: m,
    children: /* @__PURE__ */ ae('table', {
      className: J,
      children: [
        /* @__PURE__ */ M('thead', {
          children: /* @__PURE__ */ M('tr', {
            children: R.map((v, y) => /* @__PURE__ */ M(
              'th',
              {
                className: `${Z} ${y === K - 1 ? 'border-r-0' : ''} ${y > 0 ? Y : 'font-semibold text-headings-h4'}`,
                children: v ?? '',
              },
              y,
            )),
          }),
        }),
        /* @__PURE__ */ M('tbody', {
          children: z.map((v, y) => /* @__PURE__ */ M('tr', {
            ...x[y] || {},
            children: v.map((_, t) => /* @__PURE__ */ M(
              'td',
              {
                className: `${C} ${t === K - 1 ? 'border-r-0' : ''} ${a(t)}`,
                children: _ ?? '',
              },
              t,
            )),
          }, y)),
        }),
      ],
    }),
  }); const d = () => {
    const [v, y] = Ye(0); const
      _ = R.slice(1);
    if (!_.length) return null;
    const t = v + 1; const D = [R[0], R[t]]; const
      o = z.map((e) => [e[0], e[t]]);
    return /* @__PURE__ */ ae('div', {
      className: `max-md:block md:hidden ${g}`.trim(),
      id: m,
      children: [
      /* @__PURE__ */ M('div', {
          className: 'flex flex-wrap justify-center gap-x-tabbed-lozs--spacing-x gap-y-tabbed-lozs--spacing-y my-section-spacing-y py-24',
          children: _.map((e, n) => /* @__PURE__ */ M(
            Wt,
            {
              tab: { text: e, image: b[n] },
              isActive: v === n,
              onClick: () => y(n),
              index: n,
              largeImage: !0,
            },
            n,
          )),
        }),
        /* @__PURE__ */ M('div', {
          className: Q,
          children: /* @__PURE__ */ ae('table', {
            className: J,
            children: [
              /* @__PURE__ */ M('thead', {
                children: /* @__PURE__ */ M('tr', {
                  children: D.map((e, n) => /* @__PURE__ */ M(
                    'th',
                    {
                      className: `${Z} border-r-0 ${n > 0 ? Y : 'font-semibold text-headings-h4'}`,
                      children: e ?? '',
                    },
                    n,
                  )),
                }),
              }),
              /* @__PURE__ */ M('tbody', {
                children: o.map((e, n) => /* @__PURE__ */ M('tr', {
                  ...x[n] || {},
                  children: e.map((p, k) => /* @__PURE__ */ M(
                    'td',
                    {
                      className: `${C} border-r-0 ${a(k)}`,
                      children: p ?? '',
                    },
                    k,
                  )),
                }, n)),
              }),
            ],
          }),
        }),
      ],
    });
  }; const f = 'text-center! font-semibold text-headings-h4'; const l = (v, y) => (y === 0 ? v ?? '' : v === !0 ? /* @__PURE__ */ M(It, { className: 'w-24 h-24 mx-auto text-current' }) : '-'); const r = () => /* @__PURE__ */ M('div', {
    className: Q,
    id: m,
    children: /* @__PURE__ */ ae('table', {
      className: J,
      children: [
        /* @__PURE__ */ M('thead', {
          children: /* @__PURE__ */ M('tr', {
            children: R.map((v, y) => /* @__PURE__ */ M(
              'th',
              {
                className: `${Z} ${y === K - 1 ? 'border-r-0' : ''} ${y > 0 ? f : 'font-semibold text-headings-h4'}`,
                children: v ?? '',
              },
              y,
            )),
          }),
        }),
        /* @__PURE__ */ M('tbody', {
          children: z.map((v, y) => /* @__PURE__ */ M('tr', {
            ...x[y] || {},
            children: v.map((_, t) => /* @__PURE__ */ M(
              'td',
              {
                className: `${C} ${t === K - 1 ? 'border-r-0' : ''} ${t > 0 ? 'text-center!' : ''}`,
                children: l(_, t),
              },
              t,
            )),
          }, y)),
        }),
      ],
    }),
  }); const h = {
    dots: !0,
    infinite: !1,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !1,
    arrows: !1,
  }; const
    w = () => {
      const v = R.slice(1);
      return /* @__PURE__ */ M('div', {
        className: `max-md:block md:hidden relative ${g}`.trim(),
        id: m,
        children: /* @__PURE__ */ M(Ht, {
          ...h,
          className: 'w-full table-slider',
          style: { width: '100%' },
          children: v.map((y, _) => {
            const t = _ + 1;
            return /* @__PURE__ */ M('div', {
              className: 'outline-none px-0',
              children: /* @__PURE__ */ ae('div', {
                className: 'border-collapse overflow-hidden',
                children: [
                  /* @__PURE__ */ M('div', { className: 'p-10 text-center border-b border-grey-500', children: /* @__PURE__ */ M('div', { className: f, children: y ?? '' }) }),
                  /* @__PURE__ */ M('div', {
                    className: 'flex flex-col',
                    children: z.map((D, o) => {
                      const e = D[0]; const n = D[t]; const
                        p = l(n, t);
                      return /* @__PURE__ */ ae('div', {
                        className: 'flex flex-col border-b border-grey-500',
                        children: [
                          /* @__PURE__ */ M('div', { className: 'p-10 font-normal border-b border-grey-500 text-center', children: e ?? '' }),
                          /* @__PURE__ */ M('div', { className: 'p-10 text-center', children: p }),
                        ],
                      }, o);
                    }),
                  }),
                ],
              }),
            }, _);
          }),
        }),
      });
    };
  let s;
  return S === 'normal' ? s = /* @__PURE__ */ M(V, {}) : S === 'pricing' ? s = $ ? /* @__PURE__ */ M(u, {}) : /* @__PURE__ */ M(d, {}) : S === 'comparison' ? s = $ ? /* @__PURE__ */ M(r, {}) : /* @__PURE__ */ M(w, {}) : s = /* @__PURE__ */ M(V, {}), /* @__PURE__ */ M('div', { className: 'container', children: s });
}
export {
  Gt as default,
};
