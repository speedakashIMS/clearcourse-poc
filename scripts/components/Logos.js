import { jsx as oe, jsxs as Re, Fragment as rt } from 'react/jsx-runtime';
import ue, { useState as ze, useRef as nt, useEffect as it } from 'react';

const be = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof global < 'u' ? global : typeof self < 'u' ? self : {};
function ot(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, 'default') ? l.default : l;
}
function at(l) {
  if (Object.prototype.hasOwnProperty.call(l, '__esModule')) return l;
  const c = l.default;
  if (typeof c === 'function') {
    var h = function O() {
      return this instanceof O ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    h.prototype = c.prototype;
  } else h = {};
  return Object.defineProperty(h, '__esModule', { value: !0 }), Object.keys(l).forEach((O) => {
    const y = Object.getOwnPropertyDescriptor(l, O);
    Object.defineProperty(h, O, y.get ? y : {
      enumerable: !0,
      get() {
        return l[O];
      },
    });
  }), h;
}
const _e = {}; const Pe = {}; const pe = {}; const ke = {}; let
  De;
function lt() {
  return De || (De = 1, (function (l) {
    Object.defineProperty(l, '__esModule', {
      value: !0,
    }), l.default = void 0;
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
    l.default = c;
  }(ke))), ke;
}
let Te; let
  Ne;
function st() {
  if (Ne) return Te;
  Ne = 1;
  const l = 'Expected a function';
  const c = NaN;
  const h = '[object Symbol]';
  const O = /^\s+|\s+$/g;
  const y = /^[-+]0x[0-9a-f]+$/i;
  const g = /^0b[01]+$/i;
  const x = /^0o[0-7]+$/i;
  const L = parseInt;
  const X = typeof be === 'object' && be && be.Object === Object && be;
  const A = typeof self === 'object' && self && self.Object === Object && self;
  const D = X || A || Function('return this')();
  const V = Object.prototype;
  const ee = V.toString;
  const te = Math.max;
  const R = Math.min;
  const k = function () {
    return D.Date.now();
  };
  function Y(o, s, f) {
    let d; let a; let r; let v; let m; let u; let b = 0; let w = !1; let T = !1; let
      t = !0;
    if (typeof o !== 'function') throw new TypeError(l);
    s = $(s) || 0, F(f) && (w = !!f.leading, T = 'maxWait' in f, r = T ? te($(f.maxWait) || 0, s) : r, t = 'trailing' in f ? !!f.trailing : t);
    function W(j) {
      const N = d; const
        H = a;
      return d = a = void 0, b = j, v = o.apply(H, N), v;
    }
    function i(j) {
      return b = j, m = setTimeout(p, s), w ? W(j) : v;
    }
    function e(j) {
      const N = j - u; const H = j - b; const
        I = s - N;
      return T ? R(I, r - H) : I;
    }
    function n(j) {
      const N = j - u; const
        H = j - b;
      return u === void 0 || N >= s || N < 0 || T && H >= r;
    }
    function p() {
      const j = k();
      if (n(j)) return P(j);
      m = setTimeout(p, e(j));
    }
    function P(j) {
      return m = void 0, t && d ? W(j) : (d = a = void 0, v);
    }
    function S() {
      m !== void 0 && clearTimeout(m), b = 0, d = u = a = m = void 0;
    }
    function C() {
      return m === void 0 ? v : P(k());
    }
    function _() {
      const j = k(); const
        N = n(j);
      if (d = arguments, a = this, u = j, N) {
        if (m === void 0) return i(u);
        if (T) return m = setTimeout(p, s), W(u);
      }
      return m === void 0 && (m = setTimeout(p, s)), v;
    }
    return _.cancel = S, _.flush = C, _;
  }
  function F(o) {
    const s = typeof o;
    return !!o && (s == 'object' || s == 'function');
  }
  function U(o) {
    return !!o && typeof o === 'object';
  }
  function J(o) {
    return typeof o === 'symbol' || U(o) && ee.call(o) == h;
  }
  function $(o) {
    if (typeof o === 'number') return o;
    if (J(o)) return c;
    if (F(o)) {
      const s = typeof o.valueOf === 'function' ? o.valueOf() : o;
      o = F(s) ? `${s}` : s;
    }
    if (typeof o !== 'string') return o === 0 ? o : +o;
    o = o.replace(O, '');
    const f = g.test(o);
    return f || x.test(o) ? L(o.slice(2), f ? 2 : 8) : y.test(o) ? c : +o;
  }
  return Te = Y, Te;
}
const Ce = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
let He;
function we() {
  return He || (He = 1, (function (l) {
    (function () {
      const c = {}.hasOwnProperty;
      function h() {
        for (var g = '', x = 0; x < arguments.length; x++) {
          const L = arguments[x];
          L && (g = y(g, O(L)));
        }
        return g;
      }
      function O(g) {
        if (typeof g === 'string' || typeof g === 'number') return g;
        if (typeof g !== 'object') return '';
        if (Array.isArray(g)) return h.apply(null, g);
        if (g.toString !== Object.prototype.toString && !g.toString.toString().includes('[native code]')) return g.toString();
        let x = '';
        for (const L in g) c.call(g, L) && g[L] && (x = y(x, L));
        return x;
      }
      function y(g, x) {
        return x ? g ? `${g} ${x}` : g + x : g;
      }
      l.exports ? (h.default = h, l.exports = h) : window.classNames = h;
    }());
  }(Ce))), Ce.exports;
}
const E = {}; const je = {}; let
  Ie;
function Ve() {
  return Ie || (Ie = 1, (function (l) {
    Object.defineProperty(l, '__esModule', {
      value: !0,
    }), l.default = void 0;
    const c = h(ue);
    function h(y) {
      return y && y.__esModule ? y : { default: y };
    }
    const O = {
      accessibility: !0,
      adaptiveHeight: !1,
      afterChange: null,
      appendDots(g) {
        return /* @__PURE__ */ c.default.createElement('ul', {
          style: {
            display: 'block',
          },
        }, g);
      },
      arrows: !0,
      autoplay: !1,
      autoplaySpeed: 3e3,
      beforeChange: null,
      centerMode: !1,
      centerPadding: '50px',
      className: '',
      cssEase: 'ease',
      customPaging(g) {
        return /* @__PURE__ */ c.default.createElement('button', null, g + 1);
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
    l.default = O;
  }(je))), je;
}
let Ae;
function ye() {
  if (Ae) return E;
  Ae = 1, Object.defineProperty(E, '__esModule', {
    value: !0,
  }), E.checkSpecKeys = E.checkNavigable = E.changeSlide = E.canUseDOM = E.canGoNext = void 0, E.clamp = A, E.extractObject = void 0, E.filterSettings = W, E.validSettings = E.swipeStart = E.swipeMove = E.swipeEnd = E.slidesOnRight = E.slidesOnLeft = E.slideHandler = E.siblingDirection = E.safePreventDefault = E.lazyStartIndex = E.lazySlidesOnRight = E.lazySlidesOnLeft = E.lazyEndIndex = E.keyHandler = E.initializedState = E.getWidth = E.getTrackLeft = E.getTrackCSS = E.getTrackAnimateCSS = E.getTotalSlides = E.getSwipeDirection = E.getSlideCount = E.getRequiredLazySlides = E.getPreClones = E.getPostClones = E.getOnDemandLazySlides = E.getNavigableIndexes = E.getHeight = void 0;
  const l = h(ue); const
    c = h(Ve());
  function h(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function O(i) {
    '@babel/helpers - typeof';

    return O = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) {
      return typeof e;
    } : function (e) {
      return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
    }, O(i);
  }
  function y(i, e) {
    const n = Object.keys(i);
    if (Object.getOwnPropertySymbols) {
      let p = Object.getOwnPropertySymbols(i);
      e && (p = p.filter((P) => Object.getOwnPropertyDescriptor(i, P).enumerable)), n.push.apply(n, p);
    }
    return n;
  }
  function g(i) {
    for (let e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2 ? y(Object(n), !0).forEach((p) => {
        x(i, p, n[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((p) => {
        Object.defineProperty(i, p, Object.getOwnPropertyDescriptor(n, p));
      });
    }
    return i;
  }
  function x(i, e, n) {
    return (e = L(e)) in i ? Object.defineProperty(i, e, {
      value: n, enumerable: !0, configurable: !0, writable: !0,
    }) : i[e] = n, i;
  }
  function L(i) {
    const e = X(i, 'string');
    return O(e) == 'symbol' ? e : `${e}`;
  }
  function X(i, e) {
    if (O(i) != 'object' || !i) return i;
    const n = i[Symbol.toPrimitive];
    if (n !== void 0) {
      const p = n.call(i, e);
      if (O(p) != 'object') return p;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (e === 'string' ? String : Number)(i);
  }
  function A(i, e, n) {
    return Math.max(e, Math.min(i, n));
  }
  const D = E.safePreventDefault = function (e) {
    const n = ['onTouchStart', 'onTouchMove', 'onWheel'];
    n.includes(e._reactName) || e.preventDefault();
  }; const
    V = E.getOnDemandLazySlides = function (e) {
      for (var n = [], p = ee(e), P = te(e), S = p; S < P; S++) e.lazyLoadedList.indexOf(S) < 0 && n.push(S);
      return n;
    };
  E.getRequiredLazySlides = function (e) {
    for (var n = [], p = ee(e), P = te(e), S = p; S < P; S++) n.push(S);
    return n;
  };
  var ee = E.lazyStartIndex = function (e) {
    return e.currentSlide - R(e);
  }; var te = E.lazyEndIndex = function (e) {
    return e.currentSlide + k(e);
  }; var R = E.lazySlidesOnLeft = function (e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }; var k = E.lazySlidesOnRight = function (e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }; const Y = E.getWidth = function (e) {
    return e && e.offsetWidth || 0;
  }; const F = E.getHeight = function (e) {
    return e && e.offsetHeight || 0;
  }; const U = E.getSwipeDirection = function (e) {
    const n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; let p; let P; let S; let
      C;
    return p = e.startX - e.curX, P = e.startY - e.curY, S = Math.atan2(P, p), C = Math.round(S * 180 / Math.PI), C < 0 && (C = 360 - Math.abs(C)), C <= 45 && C >= 0 || C <= 360 && C >= 315 ? 'left' : C >= 135 && C <= 225 ? 'right' : n === !0 ? C >= 35 && C <= 135 ? 'up' : 'down' : 'vertical';
  }; const
    J = E.canGoNext = function (e) {
      let n = !0;
      return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (n = !1), n;
    };
  E.extractObject = function (e, n) {
    const p = {};
    return n.forEach((P) => p[P] = e[P]), p;
  }, E.initializedState = function (e) {
    const n = l.default.Children.count(e.children); const p = e.listRef; const P = Math.ceil(Y(p)); const S = e.trackRef && e.trackRef.node; const C = Math.ceil(Y(S)); let
      _;
    if (e.vertical) _ = P;
    else {
      let j = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding === 'string' && e.centerPadding.slice(-1) === '%' && (j *= P / 100), _ = Math.ceil((P - j) / e.slidesToShow);
    }
    const N = p && F(p.querySelector('[data-index="0"]')); const H = N * e.slidesToShow; let
      I = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && (I = n - 1 - e.initialSlide);
    let K = e.lazyLoadedList || []; const
      G = V(g(g({}, e), {}, {
        currentSlide: I,
        lazyLoadedList: K,
      }));
    K = K.concat(G);
    const q = {
      slideCount: n,
      slideWidth: _,
      listWidth: P,
      trackWidth: C,
      currentSlide: I,
      slideHeight: N,
      listHeight: H,
      lazyLoadedList: K,
    };
    return e.autoplaying === null && e.autoplay && (q.autoplaying = 'playing'), q;
  }, E.slideHandler = function (e) {
    const n = e.waitForAnimate; const p = e.animating; const P = e.fade; const S = e.infinite; const C = e.index; const _ = e.slideCount; const j = e.lazyLoad; const N = e.currentSlide; const H = e.centerMode; const I = e.slidesToScroll; const K = e.slidesToShow; const G = e.useCSS; let
      q = e.lazyLoadedList;
    if (n && p) return {};
    let z = C; let B; let Z; let M; let Q = {}; let re = {}; const
      ne = S ? C : A(C, 0, _ - 1);
    if (P) {
      if (!S && (C < 0 || C >= _)) return {};
      C < 0 ? z = C + _ : C >= _ && (z = C - _), j && q.indexOf(z) < 0 && (q = q.concat(z)), Q = {
        animating: !0,
        currentSlide: z,
        lazyLoadedList: q,
        targetSlide: z,
      }, re = {
        animating: !1,
        targetSlide: z,
      };
    } else {
      B = z, z < 0 ? (B = z + _, S ? _ % I !== 0 && (B = _ - _ % I) : B = 0) : !J(e) && z > N ? z = B = N : H && z >= _ ? (z = S ? _ : _ - 1, B = S ? 0 : _ - 1) : z >= _ && (B = z - _, S ? _ % I !== 0 && (B = 0) : B = _ - K), !S && z + K >= _ && (B = _ - K), Z = r(g(g({}, e), {}, {
        slideIndex: z,
      })), M = r(g(g({}, e), {}, {
        slideIndex: B,
      })), S || (Z === M && (z = B), Z = M), j && (q = q.concat(V(g(g({}, e), {}, {
        currentSlide: z,
      })))), G ? (Q = {
        animating: !0,
        currentSlide: B,
        trackStyle: a(g(g({}, e), {}, {
          left: Z,
        })),
        lazyLoadedList: q,
        targetSlide: ne,
      }, re = {
        animating: !1,
        currentSlide: B,
        trackStyle: d(g(g({}, e), {}, {
          left: M,
        })),
        swipeLeft: null,
        targetSlide: ne,
      }) : Q = {
        currentSlide: B,
        trackStyle: d(g(g({}, e), {}, {
          left: M,
        })),
        lazyLoadedList: q,
        targetSlide: ne,
      };
    }
    return {
      state: Q,
      nextState: re,
    };
  }, E.changeSlide = function (e, n) {
    let p; let P; let S; let C; let _; const j = e.slidesToScroll; const N = e.slidesToShow; const H = e.slideCount; const I = e.currentSlide; const K = e.targetSlide; const G = e.lazyLoad; const
      q = e.infinite;
    if (C = H % j !== 0, p = C ? 0 : (H - I) % j, n.message === 'previous') S = p === 0 ? j : N - p, _ = I - S, G && !q && (P = I - S, _ = P === -1 ? H - 1 : P), q || (_ = K - j);
    else if (n.message === 'next') S = p === 0 ? j : p, _ = I + S, G && !q && (_ = (I + j) % H + p), q || (_ = K + j);
    else if (n.message === 'dots') _ = n.index * n.slidesToScroll;
    else if (n.message === 'children') {
      if (_ = n.index, q) {
        const z = b(g(g({}, e), {}, {
          targetSlide: _,
        }));
        _ > n.currentSlide && z === 'left' ? _ -= H : _ < n.currentSlide && z === 'right' && (_ += H);
      }
    } else n.message === 'index' && (_ = Number(n.index));
    return _;
  }, E.keyHandler = function (e, n, p) {
    return e.target.tagName.match('TEXTAREA|INPUT|SELECT') || !n ? '' : e.keyCode === 37 ? p ? 'next' : 'previous' : e.keyCode === 39 ? p ? 'previous' : 'next' : '';
  }, E.swipeStart = function (e, n, p) {
    return e.target.tagName === 'IMG' && D(e), !n || !p && e.type.indexOf('mouse') !== -1 ? '' : {
      dragging: !0,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY,
      },
    };
  }, E.swipeMove = function (e, n) {
    const p = n.scrolling; const P = n.animating; const S = n.vertical; const C = n.swipeToSlide; const _ = n.verticalSwiping; const j = n.rtl; const N = n.currentSlide; const H = n.edgeFriction; const I = n.edgeDragged; const K = n.onEdge; const G = n.swiped; const q = n.swiping; const z = n.slideCount; const B = n.slidesToScroll; const Z = n.infinite; const M = n.touchObject; const Q = n.swipeEvent; const re = n.listHeight; const
      ne = n.listWidth;
    if (!p) {
      if (P) return D(e);
      S && C && _ && D(e);
      let ie; let le = {}; const
        ge = r(n);
      M.curX = e.touches ? e.touches[0].pageX : e.clientX, M.curY = e.touches ? e.touches[0].pageY : e.clientY, M.swipeLength = Math.round(Math.sqrt((M.curX - M.startX) ** 2));
      const Me = Math.round(Math.sqrt((M.curY - M.startY) ** 2));
      if (!_ && !q && Me > 10) {
        return {
          scrolling: !0,
        };
      }
      _ && (M.swipeLength = Me);
      let fe = (j ? -1 : 1) * (M.curX > M.startX ? 1 : -1);
      _ && (fe = M.curY > M.startY ? 1 : -1);
      const tt = Math.ceil(z / B); const ae = U(n.touchObject, _); let
        de = M.swipeLength;
      return Z || (N === 0 && (ae === 'right' || ae === 'down') || N + 1 >= tt && (ae === 'left' || ae === 'up') || !J(n) && (ae === 'left' || ae === 'up')) && (de = M.swipeLength * H, I === !1 && K && (K(ae), le.edgeDragged = !0)), !G && Q && (Q(ae), le.swiped = !0), S ? ie = ge + de * (re / ne) * fe : j ? ie = ge - de * fe : ie = ge + de * fe, _ && (ie = ge + de * fe), le = g(g({}, le), {}, {
        touchObject: M,
        swipeLeft: ie,
        trackStyle: d(g(g({}, n), {}, {
          left: ie,
        })),
      }), Math.abs(M.curX - M.startX) < Math.abs(M.curY - M.startY) * 0.8 || M.swipeLength > 10 && (le.swiping = !0, D(e)), le;
    }
  }, E.swipeEnd = function (e, n) {
    const p = n.dragging; const P = n.swipe; const S = n.touchObject; const C = n.listWidth; const _ = n.touchThreshold; const j = n.verticalSwiping; const N = n.listHeight; const H = n.swipeToSlide; const I = n.scrolling; const K = n.onSwipe; const G = n.targetSlide; const q = n.currentSlide; const
      z = n.infinite;
    if (!p) return P && D(e), {};
    const B = j ? N / _ : C / _; const Z = U(S, j); const
      M = {
        dragging: !1,
        edgeDragged: !1,
        scrolling: !1,
        swiping: !1,
        swiped: !1,
        swipeLeft: null,
        touchObject: {},
      };
    if (I || !S.swipeLength) return M;
    if (S.swipeLength > B) {
      D(e), K && K(Z);
      let Q; let re; const
        ne = z ? q : G;
      switch (Z) {
        case 'left':
        case 'up':
          re = ne + s(n), Q = H ? o(n, re) : re, M.currentDirection = 0;
          break;
        case 'right':
        case 'down':
          re = ne - s(n), Q = H ? o(n, re) : re, M.currentDirection = 1;
          break;
        default:
          Q = ne;
      }
      M.triggerSlideHandler = Q;
    } else {
      const ie = r(n);
      M.trackStyle = a(g(g({}, n), {}, {
        left: ie,
      }));
    }
    return M;
  };
  const $ = E.getNavigableIndexes = function (e) {
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, p = e.infinite ? e.slidesToShow * -1 : 0, P = e.infinite ? e.slidesToShow * -1 : 0, S = []; p < n;) S.push(p), p = P + e.slidesToScroll, P += Math.min(e.slidesToScroll, e.slidesToShow);
    return S;
  }; var o = E.checkNavigable = function (e, n) {
    const p = $(e); let
      P = 0;
    if (n > p[p.length - 1]) n = p[p.length - 1];
    else {
      for (const S in p) {
        if (n < p[S]) {
          n = P;
          break;
        }
        P = p[S];
      }
    }
    return n;
  }; var s = E.getSlideCount = function (e) {
    const n = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      let p; const P = e.listRef; const
        S = P.querySelectorAll && P.querySelectorAll('.slick-slide') || [];
      if (Array.from(S).every((j) => {
        if (e.vertical) {
          if (j.offsetTop + F(j) / 2 > e.swipeLeft * -1) return p = j, !1;
        } else if (j.offsetLeft - n + Y(j) / 2 > e.swipeLeft * -1) return p = j, !1;
        return !0;
      }), !p) return 0;
      const C = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide; const
        _ = Math.abs(p.dataset.index - C) || 1;
      return _;
    } return e.slidesToScroll;
  }; const f = E.checkSpecKeys = function (e, n) {
    return n.reduce((p, P) => p && e.hasOwnProperty(P), !0) ? null : console.error('Keys Missing:', e);
  }; var d = E.getTrackCSS = function (e) {
    f(e, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth']);
    let n; let
      p;
    if (!e.vertical) n = u(e) * e.slideWidth;
    else {
      const P = e.unslick ? e.slideCount : e.slideCount + 2 * e.slidesToShow;
      p = P * e.slideHeight;
    }
    let S = {
      opacity: 1,
      transition: '',
      WebkitTransition: '',
    };
    if (e.useTransform) {
      const C = e.vertical ? `translate3d(0px, ${e.left}px, 0px)` : `translate3d(${e.left}px, 0px, 0px)`;
      const _ = e.vertical ? `translate3d(0px, ${e.left}px, 0px)` : `translate3d(${e.left}px, 0px, 0px)`;
      const j = e.vertical ? `translateY(${e.left}px)` : `translateX(${e.left}px)`;
      S = g(g({}, S), {}, {
        WebkitTransform: C,
        transform: _,
        msTransform: j,
      });
    } else e.vertical ? S.top = e.left : S.left = e.left;
    return e.fade && (S = {
      opacity: 1,
    }), n && (S.width = n), p && (S.height = p), window && !window.addEventListener && window.attachEvent && (e.vertical ? S.marginTop = `${e.left}px` : S.marginLeft = `${e.left}px`), S;
  }; var a = E.getTrackAnimateCSS = function (e) {
    f(e, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase']);
    const n = d(e);
    return e.useTransform ? (n.WebkitTransition = `-webkit-transform ${e.speed}ms ${e.cssEase}`, n.transition = `transform ${e.speed}ms ${e.cssEase}`) : e.vertical ? n.transition = `top ${e.speed}ms ${e.cssEase}` : n.transition = `left ${e.speed}ms ${e.cssEase}`, n;
  }; var r = E.getTrackLeft = function (e) {
    if (e.unslick) return 0;
    f(e, ['slideIndex', 'trackRef', 'infinite', 'centerMode', 'slideCount', 'slidesToShow', 'slidesToScroll', 'slideWidth', 'listWidth', 'variableWidth', 'slideHeight']);
    const n = e.slideIndex; const p = e.trackRef; const P = e.infinite; const S = e.centerMode; const C = e.slideCount; const _ = e.slidesToShow; const j = e.slidesToScroll; const N = e.slideWidth; const H = e.listWidth; const I = e.variableWidth; const K = e.slideHeight; const G = e.fade; const q = e.vertical; let z = 0; let B; let Z; let
      M = 0;
    if (G || e.slideCount === 1) return 0;
    let Q = 0;
    if (P ? (Q = -v(e), C % j !== 0 && n + j > C && (Q = -(n > C ? _ - (n - C) : C % j)), S && (Q += parseInt(_ / 2))) : (C % j !== 0 && n + j > C && (Q = _ - C % j), S && (Q = parseInt(_ / 2))), z = Q * N, M = Q * K, q ? B = n * K * -1 + M : B = n * N * -1 + z, I === !0) {
      let re; const
        ne = p && p.node;
      if (re = n + v(e), Z = ne && ne.childNodes[re], B = Z ? Z.offsetLeft * -1 : 0, S === !0) {
        re = P ? n + v(e) : n, Z = ne && ne.children[re], B = 0;
        for (let ie = 0; ie < re; ie++) B -= ne && ne.children[ie] && ne.children[ie].offsetWidth;
        B -= parseInt(e.centerPadding), B += Z && (H - Z.offsetWidth) / 2;
      }
    }
    return B;
  }; var v = E.getPreClones = function (e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }; const m = E.getPostClones = function (e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }; var u = E.getTotalSlides = function (e) {
    return e.slideCount === 1 ? 1 : v(e) + e.slideCount + m(e);
  }; var b = E.siblingDirection = function (e) {
    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + w(e) ? 'left' : 'right' : e.targetSlide < e.currentSlide - T(e) ? 'right' : 'left';
  }; var w = E.slidesOnRight = function (e) {
    const n = e.slidesToShow; const p = e.centerMode; const P = e.rtl; const
      S = e.centerPadding;
    if (p) {
      let C = (n - 1) / 2 + 1;
      return parseInt(S) > 0 && (C += 1), P && n % 2 === 0 && (C += 1), C;
    }
    return P ? 0 : n - 1;
  }; var
    T = E.slidesOnLeft = function (e) {
      const n = e.slidesToShow; const p = e.centerMode; const P = e.rtl; const
        S = e.centerPadding;
      if (p) {
        let C = (n - 1) / 2 + 1;
        return parseInt(S) > 0 && (C += 1), !P && n % 2 === 0 && (C += 1), C;
      }
      return P ? n - 1 : 0;
    };
  E.canUseDOM = function () {
    return !!(typeof window < 'u' && window.document && window.document.createElement);
  };
  const t = E.validSettings = Object.keys(c.default);
  function W(i) {
    return t.reduce((e, n) => (i.hasOwnProperty(n) && (e[n] = i[n]), e), {});
  }
  return E;
}
const ve = {}; let
  We;
function ut() {
  if (We) return ve;
  We = 1, Object.defineProperty(ve, '__esModule', {
    value: !0,
  }), ve.Track = void 0;
  const l = O(ue); const c = O(we()); const
    h = ye();
  function O(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function y(a) {
    '@babel/helpers - typeof';

    return y = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (r) {
      return typeof r;
    } : function (r) {
      return r && typeof Symbol === 'function' && r.constructor === Symbol && r !== Symbol.prototype ? 'symbol' : typeof r;
    }, y(a);
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function (a) {
      for (let r = 1; r < arguments.length; r++) {
        const v = arguments[r];
        for (const m in v) ({}).hasOwnProperty.call(v, m) && (a[m] = v[m]);
      }
      return a;
    }, g.apply(null, arguments);
  }
  function x(a, r) {
    if (!(a instanceof r)) throw new TypeError('Cannot call a class as a function');
  }
  function L(a, r) {
    for (let v = 0; v < r.length; v++) {
      const m = r[v];
      m.enumerable = m.enumerable || !1, m.configurable = !0, 'value' in m && (m.writable = !0), Object.defineProperty(a, J(m.key), m);
    }
  }
  function X(a, r, v) {
    return r && L(a.prototype, r), Object.defineProperty(a, 'prototype', { writable: !1 }), a;
  }
  function A(a, r) {
    if (typeof r !== 'function' && r !== null) throw new TypeError('Super expression must either be null or a function');
    a.prototype = Object.create(r && r.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, 'prototype', { writable: !1 }), r && D(a, r);
  }
  function D(a, r) {
    return D = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (v, m) {
      return v.__proto__ = m, v;
    }, D(a, r);
  }
  function V(a) {
    const r = R();
    return function () {
      let v; const
        m = k(a);
      if (r) {
        const u = k(this).constructor;
        v = Reflect.construct(m, arguments, u);
      } else v = m.apply(this, arguments);
      return ee(this, v);
    };
  }
  function ee(a, r) {
    if (r && (y(r) == 'object' || typeof r === 'function')) return r;
    if (r !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return te(a);
  }
  function te(a) {
    if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a;
  }
  function R() {
    try {
      var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
      }));
    } catch {
    }
    return (R = function () {
      return !!a;
    })();
  }
  function k(a) {
    return k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, k(a);
  }
  function Y(a, r) {
    const v = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      let m = Object.getOwnPropertySymbols(a);
      r && (m = m.filter((u) => Object.getOwnPropertyDescriptor(a, u).enumerable)), v.push.apply(v, m);
    }
    return v;
  }
  function F(a) {
    for (let r = 1; r < arguments.length; r++) {
      var v = arguments[r] != null ? arguments[r] : {};
      r % 2 ? Y(Object(v), !0).forEach((m) => {
        U(a, m, v[m]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(v)) : Y(Object(v)).forEach((m) => {
        Object.defineProperty(a, m, Object.getOwnPropertyDescriptor(v, m));
      });
    }
    return a;
  }
  function U(a, r, v) {
    return (r = J(r)) in a ? Object.defineProperty(a, r, {
      value: v, enumerable: !0, configurable: !0, writable: !0,
    }) : a[r] = v, a;
  }
  function J(a) {
    const r = $(a, 'string');
    return y(r) == 'symbol' ? r : `${r}`;
  }
  function $(a, r) {
    if (y(a) != 'object' || !a) return a;
    const v = a[Symbol.toPrimitive];
    if (v !== void 0) {
      const m = v.call(a, r);
      if (y(m) != 'object') return m;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (r === 'string' ? String : Number)(a);
  }
  const o = function (r) {
    let v; let m; let u; let b; let
      w;
    r.rtl ? w = r.slideCount - 1 - r.index : w = r.index, u = w < 0 || w >= r.slideCount, r.centerMode ? (b = Math.floor(r.slidesToShow / 2), m = (w - r.currentSlide) % r.slideCount === 0, w > r.currentSlide - b - 1 && w <= r.currentSlide + b && (v = !0)) : v = r.currentSlide <= w && w < r.currentSlide + r.slidesToShow;
    let T;
    r.targetSlide < 0 ? T = r.targetSlide + r.slideCount : r.targetSlide >= r.slideCount ? T = r.targetSlide - r.slideCount : T = r.targetSlide;
    const t = w === T;
    return {
      'slick-slide': !0,
      'slick-active': v,
      'slick-center': m,
      'slick-cloned': u,
      'slick-current': t,
      // dubious in case of RTL
    };
  }; const s = function (r) {
    const v = {};
    return (r.variableWidth === void 0 || r.variableWidth === !1) && (v.width = r.slideWidth), r.fade && (v.position = 'relative', r.vertical ? v.top = -r.index * parseInt(r.slideHeight) : v.left = -r.index * parseInt(r.slideWidth), v.opacity = r.currentSlide === r.index ? 1 : 0, v.zIndex = r.currentSlide === r.index ? 999 : 998, r.useCSS && (v.transition = `opacity ${r.speed}ms ${r.cssEase}, visibility ${r.speed}ms ${r.cssEase}`)), v;
  }; const f = function (r, v) {
    return r.key || v;
  }; const
    d = function (r) {
      let v; const m = []; const u = []; const b = []; const w = l.default.Children.count(r.children); const T = (0, h.lazyStartIndex)(r); const
        t = (0, h.lazyEndIndex)(r);
      return l.default.Children.forEach(r.children, (W, i) => {
        let e; const
          n = {
            message: 'children',
            index: i,
            slidesToScroll: r.slidesToScroll,
            currentSlide: r.currentSlide,
          };
        !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(i) >= 0 ? e = W : e = /* @__PURE__ */ l.default.createElement('div', null);
        const p = s(F(F({}, r), {}, {
          index: i,
        })); const P = e.props.className || ''; let
          S = o(F(F({}, r), {}, {
            index: i,
          }));
        if (m.push(/* @__PURE__ */ l.default.cloneElement(e, {
          key: `original${f(e, i)}`,
          'data-index': i,
          className: (0, c.default)(S, P),
          tabIndex: '-1',
          'aria-hidden': !S['slick-active'],
          style: F(F({
            outline: 'none',
          }, e.props.style || {}), p),
          onClick(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          },
        })), r.infinite && w > 1 && r.fade === !1 && !r.unslick) {
          const C = w - i;
          C <= (0, h.getPreClones)(r) && (v = -C, v >= T && (e = W), S = o(F(F({}, r), {}, {
            index: v,
          })), u.push(/* @__PURE__ */ l.default.cloneElement(e, {
            key: `precloned${f(e, v)}`,
            'data-index': v,
            tabIndex: '-1',
            className: (0, c.default)(S, P),
            'aria-hidden': !S['slick-active'],
            style: F(F({}, e.props.style || {}), p),
            onClick(j) {
              e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
            },
          }))), i < (0, h.getPostClones)(r) && (v = w + i, v < t && (e = W), S = o(F(F({}, r), {}, {
            index: v,
          })), b.push(/* @__PURE__ */ l.default.cloneElement(e, {
            key: `postcloned${f(e, v)}`,
            'data-index': v,
            tabIndex: '-1',
            className: (0, c.default)(S, P),
            'aria-hidden': !S['slick-active'],
            style: F(F({}, e.props.style || {}), p),
            onClick(j) {
              e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
            },
          })));
        }
      }), r.rtl ? u.concat(m, b).reverse() : u.concat(m, b);
    };
  return ve.Track = /* @__PURE__ */ (function (a) {
    A(v, a);
    const r = V(v);
    function v() {
      let m;
      x(this, v);
      for (var u = arguments.length, b = new Array(u), w = 0; w < u; w++) b[w] = arguments[w];
      return m = r.call.apply(r, [this].concat(b)), U(te(m), 'node', null), U(te(m), 'handleRef', (T) => {
        m.node = T;
      }), m;
    }
    return X(v, [{
      key: 'render',
      value() {
        const u = d(this.props); const b = this.props; const w = b.onMouseEnter; const T = b.onMouseOver; const t = b.onMouseLeave; const
          W = {
            onMouseEnter: w,
            onMouseOver: T,
            onMouseLeave: t,
          };
        return /* @__PURE__ */ l.default.createElement('div', g({
          ref: this.handleRef,
          className: 'slick-track',
          style: this.props.trackStyle,
        }, W), u);
      },
    }]), v;
  }(l.default.PureComponent)), ve;
}
const he = {}; let
  qe;
function ct() {
  if (qe) return he;
  qe = 1;
  function l(o) {
    '@babel/helpers - typeof';

    return l = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (s) {
      return typeof s;
    } : function (s) {
      return s && typeof Symbol === 'function' && s.constructor === Symbol && s !== Symbol.prototype ? 'symbol' : typeof s;
    }, l(o);
  }
  Object.defineProperty(he, '__esModule', {
    value: !0,
  }), he.Dots = void 0;
  const c = y(ue); const h = y(we()); const
    O = ye();
  function y(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function g(o, s) {
    const f = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
      let d = Object.getOwnPropertySymbols(o);
      s && (d = d.filter((a) => Object.getOwnPropertyDescriptor(o, a).enumerable)), f.push.apply(f, d);
    }
    return f;
  }
  function x(o) {
    for (let s = 1; s < arguments.length; s++) {
      var f = arguments[s] != null ? arguments[s] : {};
      s % 2 ? g(Object(f), !0).forEach((d) => {
        L(o, d, f[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(f)) : g(Object(f)).forEach((d) => {
        Object.defineProperty(o, d, Object.getOwnPropertyDescriptor(f, d));
      });
    }
    return o;
  }
  function L(o, s, f) {
    return (s = V(s)) in o ? Object.defineProperty(o, s, {
      value: f, enumerable: !0, configurable: !0, writable: !0,
    }) : o[s] = f, o;
  }
  function X(o, s) {
    if (!(o instanceof s)) throw new TypeError('Cannot call a class as a function');
  }
  function A(o, s) {
    for (let f = 0; f < s.length; f++) {
      const d = s[f];
      d.enumerable = d.enumerable || !1, d.configurable = !0, 'value' in d && (d.writable = !0), Object.defineProperty(o, V(d.key), d);
    }
  }
  function D(o, s, f) {
    return s && A(o.prototype, s), Object.defineProperty(o, 'prototype', { writable: !1 }), o;
  }
  function V(o) {
    const s = ee(o, 'string');
    return l(s) == 'symbol' ? s : `${s}`;
  }
  function ee(o, s) {
    if (l(o) != 'object' || !o) return o;
    const f = o[Symbol.toPrimitive];
    if (f !== void 0) {
      const d = f.call(o, s);
      if (l(d) != 'object') return d;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(o);
  }
  function te(o, s) {
    if (typeof s !== 'function' && s !== null) throw new TypeError('Super expression must either be null or a function');
    o.prototype = Object.create(s && s.prototype, { constructor: { value: o, writable: !0, configurable: !0 } }), Object.defineProperty(o, 'prototype', { writable: !1 }), s && R(o, s);
  }
  function R(o, s) {
    return R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (f, d) {
      return f.__proto__ = d, f;
    }, R(o, s);
  }
  function k(o) {
    const s = U();
    return function () {
      let f; const
        d = J(o);
      if (s) {
        const a = J(this).constructor;
        f = Reflect.construct(d, arguments, a);
      } else f = d.apply(this, arguments);
      return Y(this, f);
    };
  }
  function Y(o, s) {
    if (s && (l(s) == 'object' || typeof s === 'function')) return s;
    if (s !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return F(o);
  }
  function F(o) {
    if (o === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o;
  }
  function U() {
    try {
      var o = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
      }));
    } catch {
    }
    return (U = function () {
      return !!o;
    })();
  }
  function J(o) {
    return J = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, J(o);
  }
  const $ = function (s) {
    let f;
    return s.infinite ? f = Math.ceil(s.slideCount / s.slidesToScroll) : f = Math.ceil((s.slideCount - s.slidesToShow) / s.slidesToScroll) + 1, f;
  };
  return he.Dots = /* @__PURE__ */ (function (o) {
    te(f, o);
    const s = k(f);
    function f() {
      return X(this, f), s.apply(this, arguments);
    }
    return D(f, [{
      key: 'clickHandler',
      value(a, r) {
        r.preventDefault(), this.props.clickHandler(a);
      },
    }, {
      key: 'render',
      value() {
        for (var a = this.props, r = a.onMouseEnter, v = a.onMouseOver, m = a.onMouseLeave, u = a.infinite, b = a.slidesToScroll, w = a.slidesToShow, T = a.slideCount, t = a.currentSlide, W = $({
            slideCount: T,
            slidesToScroll: b,
            slidesToShow: w,
            infinite: u,
          }), i = {
            onMouseEnter: r,
            onMouseOver: v,
            onMouseLeave: m,
          }, e = [], n = 0; n < W; n++) {
          const p = (n + 1) * b - 1; const P = u ? p : (0, O.clamp)(p, 0, T - 1); const S = P - (b - 1); const C = u ? S : (0, O.clamp)(S, 0, T - 1); const _ = (0, h.default)({
            'slick-active': u ? t >= C && t <= P : t === C,
          }); const j = {
            message: 'dots',
            index: n,
            slidesToScroll: b,
            currentSlide: t,
          }; const
            N = this.clickHandler.bind(this, j);
          e = e.concat(/* @__PURE__ */ c.default.createElement('li', {
            key: n,
            className: _,
          }, /* @__PURE__ */ c.default.cloneElement(this.props.customPaging(n), {
            onClick: N,
          })));
        }
        return /* @__PURE__ */ c.default.cloneElement(this.props.appendDots(e), x({
          className: this.props.dotsClass,
        }, i));
      },
    }]), f;
  }(c.default.PureComponent)), he;
}
const se = {}; let
  Fe;
function ft() {
  if (Fe) return se;
  Fe = 1;
  function l(o) {
    '@babel/helpers - typeof';

    return l = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (s) {
      return typeof s;
    } : function (s) {
      return s && typeof Symbol === 'function' && s.constructor === Symbol && s !== Symbol.prototype ? 'symbol' : typeof s;
    }, l(o);
  }
  Object.defineProperty(se, '__esModule', {
    value: !0,
  }), se.PrevArrow = se.NextArrow = void 0;
  const c = y(ue); const h = y(we()); const
    O = ye();
  function y(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function (o) {
      for (let s = 1; s < arguments.length; s++) {
        const f = arguments[s];
        for (const d in f) ({}).hasOwnProperty.call(f, d) && (o[d] = f[d]);
      }
      return o;
    }, g.apply(null, arguments);
  }
  function x(o, s) {
    const f = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
      let d = Object.getOwnPropertySymbols(o);
      s && (d = d.filter((a) => Object.getOwnPropertyDescriptor(o, a).enumerable)), f.push.apply(f, d);
    }
    return f;
  }
  function L(o) {
    for (let s = 1; s < arguments.length; s++) {
      var f = arguments[s] != null ? arguments[s] : {};
      s % 2 ? x(Object(f), !0).forEach((d) => {
        X(o, d, f[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(f)) : x(Object(f)).forEach((d) => {
        Object.defineProperty(o, d, Object.getOwnPropertyDescriptor(f, d));
      });
    }
    return o;
  }
  function X(o, s, f) {
    return (s = ee(s)) in o ? Object.defineProperty(o, s, {
      value: f, enumerable: !0, configurable: !0, writable: !0,
    }) : o[s] = f, o;
  }
  function A(o, s) {
    if (!(o instanceof s)) throw new TypeError('Cannot call a class as a function');
  }
  function D(o, s) {
    for (let f = 0; f < s.length; f++) {
      const d = s[f];
      d.enumerable = d.enumerable || !1, d.configurable = !0, 'value' in d && (d.writable = !0), Object.defineProperty(o, ee(d.key), d);
    }
  }
  function V(o, s, f) {
    return s && D(o.prototype, s), Object.defineProperty(o, 'prototype', { writable: !1 }), o;
  }
  function ee(o) {
    const s = te(o, 'string');
    return l(s) == 'symbol' ? s : `${s}`;
  }
  function te(o, s) {
    if (l(o) != 'object' || !o) return o;
    const f = o[Symbol.toPrimitive];
    if (f !== void 0) {
      const d = f.call(o, s);
      if (l(d) != 'object') return d;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(o);
  }
  function R(o, s) {
    if (typeof s !== 'function' && s !== null) throw new TypeError('Super expression must either be null or a function');
    o.prototype = Object.create(s && s.prototype, { constructor: { value: o, writable: !0, configurable: !0 } }), Object.defineProperty(o, 'prototype', { writable: !1 }), s && k(o, s);
  }
  function k(o, s) {
    return k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (f, d) {
      return f.__proto__ = d, f;
    }, k(o, s);
  }
  function Y(o) {
    const s = J();
    return function () {
      let f; const
        d = $(o);
      if (s) {
        const a = $(this).constructor;
        f = Reflect.construct(d, arguments, a);
      } else f = d.apply(this, arguments);
      return F(this, f);
    };
  }
  function F(o, s) {
    if (s && (l(s) == 'object' || typeof s === 'function')) return s;
    if (s !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return U(o);
  }
  function U(o) {
    if (o === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o;
  }
  function J() {
    try {
      var o = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
      }));
    } catch {
    }
    return (J = function () {
      return !!o;
    })();
  }
  function $(o) {
    return $ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, $(o);
  }
  return se.PrevArrow = /* @__PURE__ */ (function (o) {
    R(f, o);
    const s = Y(f);
    function f() {
      return A(this, f), s.apply(this, arguments);
    }
    return V(f, [{
      key: 'clickHandler',
      value(a, r) {
        r && r.preventDefault(), this.props.clickHandler(a, r);
      },
    }, {
      key: 'render',
      value() {
        const a = {
          'slick-arrow': !0,
          'slick-prev': !0,
        };
        let r = this.clickHandler.bind(this, {
          message: 'previous',
        });
        !this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow) && (a['slick-disabled'] = !0, r = null);
        const v = {
          key: '0',
          'data-role': 'none',
          className: (0, h.default)(a),
          style: {
            display: 'block',
          },
          onClick: r,
        };
        const m = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount,
        };
        let u;
        return this.props.prevArrow ? u = /* @__PURE__ */ c.default.cloneElement(this.props.prevArrow, L(L({}, v), m)) : u = /* @__PURE__ */ c.default.createElement('button', g({
          key: '0',
          type: 'button',
        }, v), ' ', 'Previous'), u;
      },
    }]), f;
  }(c.default.PureComponent)), se.NextArrow = /* @__PURE__ */ (function (o) {
    R(f, o);
    const s = Y(f);
    function f() {
      return A(this, f), s.apply(this, arguments);
    }
    return V(f, [{
      key: 'clickHandler',
      value(a, r) {
        r && r.preventDefault(), this.props.clickHandler(a, r);
      },
    }, {
      key: 'render',
      value() {
        const a = {
          'slick-arrow': !0,
          'slick-next': !0,
        };
        let r = this.clickHandler.bind(this, {
          message: 'next',
        });
        (0, O.canGoNext)(this.props) || (a['slick-disabled'] = !0, r = null);
        const v = {
          key: '1',
          'data-role': 'none',
          className: (0, h.default)(a),
          style: {
            display: 'block',
          },
          onClick: r,
        };
        const m = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount,
        };
        let u;
        return this.props.nextArrow ? u = /* @__PURE__ */ c.default.cloneElement(this.props.nextArrow, L(L({}, v), m)) : u = /* @__PURE__ */ c.default.createElement('button', g({
          key: '1',
          type: 'button',
        }, v), ' ', 'Next'), u;
      },
    }]), f;
  }(c.default.PureComponent)), se;
}
const $e = (function () {
  if (typeof Map < 'u') return Map;
  function l(c, h) {
    let O = -1;
    return c.some((y, g) => (y[0] === h ? (O = g, !0) : !1)), O;
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
      }), c.prototype.get = function (h) {
        const O = l(this.__entries__, h); const
          y = this.__entries__[O];
        return y && y[1];
      }, c.prototype.set = function (h, O) {
        const y = l(this.__entries__, h);
        ~y ? this.__entries__[y][1] = O : this.__entries__.push([h, O]);
      }, c.prototype.delete = function (h) {
        const O = this.__entries__; const
          y = l(O, h);
        ~y && O.splice(y, 1);
      }, c.prototype.has = function (h) {
        return !!~l(this.__entries__, h);
      }, c.prototype.clear = function () {
        this.__entries__.splice(0);
      }, c.prototype.forEach = function (h, O) {
        O === void 0 && (O = null);
        for (let y = 0, g = this.__entries__; y < g.length; y++) {
          const x = g[y];
          h.call(O, x[1], x[0]);
        }
      }, c;
    })()
  );
}());
const xe = typeof window < 'u' && typeof document < 'u' && window.document === document;
const me = (function () {
  return typeof global < 'u' && global.Math === Math ? global : typeof self < 'u' && self.Math === Math ? self : typeof window < 'u' && window.Math === Math ? window : Function('return this')();
}());
const dt = (function () {
  return typeof requestAnimationFrame === 'function' ? requestAnimationFrame.bind(me) : function (l) {
    return setTimeout(() => l(Date.now()), 1e3 / 60);
  };
}());
const pt = 2;
function vt(l, c) {
  let h = !1; let O = !1; let
    y = 0;
  function g() {
    h && (h = !1, l()), O && L();
  }
  function x() {
    dt(g);
  }
  function L() {
    const X = Date.now();
    if (h) {
      if (X - y < pt) return;
      O = !0;
    } else h = !0, O = !1, setTimeout(x, c);
    y = X;
  }
  return L;
}
const ht = 20; const yt = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; const gt = typeof MutationObserver < 'u'; const bt = (
  /** @class */
  (function () {
    function l() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = vt(this.refresh.bind(this), ht);
    }
    return l.prototype.addObserver = function (c) {
      ~this.observers_.indexOf(c) || this.observers_.push(c), this.connected_ || this.connect_();
    }, l.prototype.removeObserver = function (c) {
      const h = this.observers_; const
        O = h.indexOf(c);
      ~O && h.splice(O, 1), !h.length && this.connected_ && this.disconnect_();
    }, l.prototype.refresh = function () {
      const c = this.updateObservers_();
      c && this.refresh();
    }, l.prototype.updateObservers_ = function () {
      const c = this.observers_.filter((h) => (h.gatherActive(), h.hasActive()));
      return c.forEach((h) => h.broadcastActive()), c.length > 0;
    }, l.prototype.connect_ = function () {
      !xe || this.connected_ || (document.addEventListener('transitionend', this.onTransitionEnd_), window.addEventListener('resize', this.refresh), gt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0,
      })) : (document.addEventListener('DOMSubtreeModified', this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, l.prototype.disconnect_ = function () {
      !xe || !this.connected_ || (document.removeEventListener('transitionend', this.onTransitionEnd_), window.removeEventListener('resize', this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener('DOMSubtreeModified', this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, l.prototype.onTransitionEnd_ = function (c) {
      const h = c.propertyName; const O = h === void 0 ? '' : h; const
        y = yt.some((g) => !!~O.indexOf(g));
      y && this.refresh();
    }, l.getInstance = function () {
      return this.instance_ || (this.instance_ = new l()), this.instance_;
    }, l.instance_ = null, l;
  })()
); const Je = (function (l, c) {
  for (let h = 0, O = Object.keys(c); h < O.length; h++) {
    const y = O[h];
    Object.defineProperty(l, y, {
      value: c[y],
      enumerable: !1,
      writable: !1,
      configurable: !0,
    });
  }
  return l;
}); const ce = (function (l) {
  const c = l && l.ownerDocument && l.ownerDocument.defaultView;
  return c || me;
}); const
  Qe = Oe(0, 0, 0, 0);
function Se(l) {
  return parseFloat(l) || 0;
}
function Be(l) {
  for (var c = [], h = 1; h < arguments.length; h++) c[h - 1] = arguments[h];
  return c.reduce((O, y) => {
    const g = l[`border-${y}-width`];
    return O + Se(g);
  }, 0);
}
function mt(l) {
  for (var c = ['top', 'right', 'bottom', 'left'], h = {}, O = 0, y = c; O < y.length; O++) {
    const g = y[O]; const
      x = l[`padding-${g}`];
    h[g] = Se(x);
  }
  return h;
}
function St(l) {
  const c = l.getBBox();
  return Oe(0, 0, c.width, c.height);
}
function wt(l) {
  const c = l.clientWidth; const
    h = l.clientHeight;
  if (!c && !h) return Qe;
  const O = ce(l).getComputedStyle(l); const y = mt(O); const g = y.left + y.right; const x = y.top + y.bottom; let L = Se(O.width); let
    X = Se(O.height);
  if (O.boxSizing === 'border-box' && (Math.round(L + g) !== c && (L -= Be(O, 'left', 'right') + g), Math.round(X + x) !== h && (X -= Be(O, 'top', 'bottom') + x)), !_t(l)) {
    const A = Math.round(L + g) - c; const
      D = Math.round(X + x) - h;
    Math.abs(A) !== 1 && (L -= A), Math.abs(D) !== 1 && (X -= D);
  }
  return Oe(y.left, y.top, L, X);
}
const Ot = /* @__PURE__ */ (function () {
  return typeof SVGGraphicsElement < 'u' ? function (l) {
    return l instanceof ce(l).SVGGraphicsElement;
  } : function (l) {
    return l instanceof ce(l).SVGElement && typeof l.getBBox === 'function';
  };
}());
function _t(l) {
  return l === ce(l).document.documentElement;
}
function Pt(l) {
  return xe ? Ot(l) ? St(l) : wt(l) : Qe;
}
function kt(l) {
  const c = l.x; const h = l.y; const O = l.width; const y = l.height; const g = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object; const
    x = Object.create(g.prototype);
  return Je(x, {
    x: c,
    y: h,
    width: O,
    height: y,
    top: h,
    right: c + O,
    bottom: y + h,
    left: c,
  }), x;
}
function Oe(l, c, h, O) {
  return {
    x: l, y: c, width: h, height: O,
  };
}
const Tt = (
  /** @class */
  (function () {
    function l(c) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Oe(0, 0, 0, 0), this.target = c;
    }
    return l.prototype.isActive = function () {
      const c = Pt(this.target);
      return this.contentRect_ = c, c.width !== this.broadcastWidth || c.height !== this.broadcastHeight;
    }, l.prototype.broadcastRect = function () {
      const c = this.contentRect_;
      return this.broadcastWidth = c.width, this.broadcastHeight = c.height, c;
    }, l;
  })()
); const Ct = (
  /** @class */
  /* @__PURE__ */ (function () {
    function l(c, h) {
      const O = kt(h);
      Je(this, { target: c, contentRect: O });
    }
    return l;
  })()
); const jt = (
  /** @class */
  (function () {
    function l(c, h, O) {
      if (this.activeObservations_ = [], this.observations_ = new $e(), typeof c !== 'function') throw new TypeError('The callback provided as parameter 1 is not a function.');
      this.callback_ = c, this.controller_ = h, this.callbackCtx_ = O;
    }
    return l.prototype.observe = function (c) {
      if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
      if (!(typeof Element > 'u' || !(Element instanceof Object))) {
        if (!(c instanceof ce(c).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        const h = this.observations_;
        h.has(c) || (h.set(c, new Tt(c)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, l.prototype.unobserve = function (c) {
      if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
      if (!(typeof Element > 'u' || !(Element instanceof Object))) {
        if (!(c instanceof ce(c).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        const h = this.observations_;
        h.has(c) && (h.delete(c), h.size || this.controller_.removeObserver(this));
      }
    }, l.prototype.disconnect = function () {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, l.prototype.gatherActive = function () {
      const c = this;
      this.clearActive(), this.observations_.forEach((h) => {
        h.isActive() && c.activeObservations_.push(h);
      });
    }, l.prototype.broadcastActive = function () {
      if (this.hasActive()) {
        const c = this.callbackCtx_; const
          h = this.activeObservations_.map((O) => new Ct(O.target, O.broadcastRect()));
        this.callback_.call(c, h, c), this.clearActive();
      }
    }, l.prototype.clearActive = function () {
      this.activeObservations_.splice(0);
    }, l.prototype.hasActive = function () {
      return this.activeObservations_.length > 0;
    }, l;
  })()
); const Ze = typeof WeakMap < 'u' ? /* @__PURE__ */ new WeakMap() : new $e(); const
  et = (
  /** @class */
  /* @__PURE__ */ (function () {
      function l(c) {
        if (!(this instanceof l)) throw new TypeError('Cannot call a class as a function.');
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
        const h = bt.getInstance(); const
          O = new jt(c, h, this);
        Ze.set(this, O);
      }
      return l;
    })()
  );
[
  'observe',
  'unobserve',
  'disconnect',
].forEach((l) => {
  et.prototype[l] = function () {
    let c;
    return (c = Ze.get(this))[l].apply(c, arguments);
  };
});
const Et = (function () {
  return typeof me.ResizeObserver < 'u' ? me.ResizeObserver : et;
}());
const Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Et,
}, Symbol.toStringTag, { value: 'Module' })); const
  xt = /* @__PURE__ */ at(Lt);
let Ge;
function Mt() {
  if (Ge) return pe;
  Ge = 1, Object.defineProperty(pe, '__esModule', {
    value: !0,
  }), pe.InnerSlider = void 0;
  const l = A(ue); const c = A(lt()); const h = A(st()); const O = A(we()); const y = ye(); const g = ut(); const x = ct(); const L = ft(); const
    X = A(xt);
  function A(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function D(u) {
    '@babel/helpers - typeof';

    return D = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (b) {
      return typeof b;
    } : function (b) {
      return b && typeof Symbol === 'function' && b.constructor === Symbol && b !== Symbol.prototype ? 'symbol' : typeof b;
    }, D(u);
  }
  function V() {
    return V = Object.assign ? Object.assign.bind() : function (u) {
      for (let b = 1; b < arguments.length; b++) {
        const w = arguments[b];
        for (const T in w) ({}).hasOwnProperty.call(w, T) && (u[T] = w[T]);
      }
      return u;
    }, V.apply(null, arguments);
  }
  function ee(u, b) {
    if (u == null) return {};
    let w; let T; const
      t = te(u, b);
    if (Object.getOwnPropertySymbols) {
      const W = Object.getOwnPropertySymbols(u);
      for (T = 0; T < W.length; T++) w = W[T], b.includes(w) || {}.propertyIsEnumerable.call(u, w) && (t[w] = u[w]);
    }
    return t;
  }
  function te(u, b) {
    if (u == null) return {};
    const w = {};
    for (const T in u) {
      if ({}.hasOwnProperty.call(u, T)) {
        if (b.includes(T)) continue;
        w[T] = u[T];
      }
    }
    return w;
  }
  function R(u, b) {
    const w = Object.keys(u);
    if (Object.getOwnPropertySymbols) {
      let T = Object.getOwnPropertySymbols(u);
      b && (T = T.filter((t) => Object.getOwnPropertyDescriptor(u, t).enumerable)), w.push.apply(w, T);
    }
    return w;
  }
  function k(u) {
    for (let b = 1; b < arguments.length; b++) {
      var w = arguments[b] != null ? arguments[b] : {};
      b % 2 ? R(Object(w), !0).forEach((T) => {
        r(u, T, w[T]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(w)) : R(Object(w)).forEach((T) => {
        Object.defineProperty(u, T, Object.getOwnPropertyDescriptor(w, T));
      });
    }
    return u;
  }
  function Y(u, b) {
    if (!(u instanceof b)) throw new TypeError('Cannot call a class as a function');
  }
  function F(u, b) {
    for (let w = 0; w < b.length; w++) {
      const T = b[w];
      T.enumerable = T.enumerable || !1, T.configurable = !0, 'value' in T && (T.writable = !0), Object.defineProperty(u, v(T.key), T);
    }
  }
  function U(u, b, w) {
    return b && F(u.prototype, b), Object.defineProperty(u, 'prototype', { writable: !1 }), u;
  }
  function J(u, b) {
    if (typeof b !== 'function' && b !== null) throw new TypeError('Super expression must either be null or a function');
    u.prototype = Object.create(b && b.prototype, { constructor: { value: u, writable: !0, configurable: !0 } }), Object.defineProperty(u, 'prototype', { writable: !1 }), b && $(u, b);
  }
  function $(u, b) {
    return $ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (w, T) {
      return w.__proto__ = T, w;
    }, $(u, b);
  }
  function o(u) {
    const b = d();
    return function () {
      let w; const
        T = a(u);
      if (b) {
        const t = a(this).constructor;
        w = Reflect.construct(T, arguments, t);
      } else w = T.apply(this, arguments);
      return s(this, w);
    };
  }
  function s(u, b) {
    if (b && (D(b) == 'object' || typeof b === 'function')) return b;
    if (b !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return f(u);
  }
  function f(u) {
    if (u === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return u;
  }
  function d() {
    try {
      var u = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
      }));
    } catch {
    }
    return (d = function () {
      return !!u;
    })();
  }
  function a(u) {
    return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (b) {
      return b.__proto__ || Object.getPrototypeOf(b);
    }, a(u);
  }
  function r(u, b, w) {
    return (b = v(b)) in u ? Object.defineProperty(u, b, {
      value: w, enumerable: !0, configurable: !0, writable: !0,
    }) : u[b] = w, u;
  }
  function v(u) {
    const b = m(u, 'string');
    return D(b) == 'symbol' ? b : `${b}`;
  }
  function m(u, b) {
    if (D(u) != 'object' || !u) return u;
    const w = u[Symbol.toPrimitive];
    if (w !== void 0) {
      const T = w.call(u, b);
      if (D(T) != 'object') return T;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (b === 'string' ? String : Number)(u);
  }
  return pe.InnerSlider = /* @__PURE__ */ (function (u) {
    J(w, u);
    const b = o(w);
    function w(T) {
      let t;
      Y(this, w), t = b.call(this, T), r(f(t), 'listRefHandler', (i) => t.list = i), r(f(t), 'trackRefHandler', (i) => t.track = i), r(f(t), 'adaptHeight', () => {
        if (t.props.adaptiveHeight && t.list) {
          const i = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
          t.list.style.height = `${(0, y.getHeight)(i)}px`;
        }
      }), r(f(t), 'componentDidMount', () => {
        if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
          const i = (0, y.getOnDemandLazySlides)(k(k({}, t.props), t.state));
          i.length > 0 && (t.setState((n) => ({
            lazyLoadedList: n.lazyLoadedList.concat(i),
          })), t.props.onLazyLoad && t.props.onLazyLoad(i));
        }
        const e = k({
          listRef: t.list,
          trackRef: t.track,
        }, t.props);
        t.updateState(e, !0, () => {
          t.adaptHeight(), t.props.autoplay && t.autoPlay('update');
        }), t.props.lazyLoad === 'progressive' && (t.lazyLoadTimer = setInterval(t.progressiveLazyLoad, 1e3)), t.ro = new X.default(() => {
          t.state.animating ? (t.onWindowResized(!1), t.callbackTimers.push(setTimeout(() => t.onWindowResized(), t.props.speed))) : t.onWindowResized();
        }), t.ro.observe(t.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll('.slick-slide'), (n) => {
          n.onfocus = t.props.pauseOnFocus ? t.onSlideFocus : null, n.onblur = t.props.pauseOnFocus ? t.onSlideBlur : null;
        }), window.addEventListener ? window.addEventListener('resize', t.onWindowResized) : window.attachEvent('onresize', t.onWindowResized);
      }), r(f(t), 'componentWillUnmount', () => {
        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach((i) => clearTimeout(i)), t.callbackTimers = []), window.addEventListener ? window.removeEventListener('resize', t.onWindowResized) : window.detachEvent('onresize', t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
      }), r(f(t), 'componentDidUpdate', (i) => {
        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
          const e = (0, y.getOnDemandLazySlides)(k(k({}, t.props), t.state));
          e.length > 0 && (t.setState((P) => ({
            lazyLoadedList: P.lazyLoadedList.concat(e),
          })), t.props.onLazyLoad && t.props.onLazyLoad(e));
        }
        t.adaptHeight();
        const n = k(k({
          listRef: t.list,
          trackRef: t.track,
        }, t.props), t.state); const
          p = t.didPropsChange(i);
        p && t.updateState(n, p, () => {
          t.state.currentSlide >= l.default.Children.count(t.props.children) && t.changeSlide({
            message: 'index',
            index: l.default.Children.count(t.props.children) - t.props.slidesToShow,
            currentSlide: t.state.currentSlide,
          }), t.props.autoplay ? t.autoPlay('update') : t.pause('paused');
        });
      }), r(f(t), 'onWindowResized', (i) => {
        t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, h.default)(() => t.resizeWindow(i), 50), t.debouncedResize();
      }), r(f(t), 'resizeWindow', function () {
        const i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0; const
          e = !!(t.track && t.track.node);
        if (e) {
          const n = k(k({
            listRef: t.list,
            trackRef: t.track,
          }, t.props), t.state);
          t.updateState(n, i, () => {
            t.props.autoplay ? t.autoPlay('update') : t.pause('paused');
          }), t.setState({
            animating: !1,
          }), clearTimeout(t.animationEndCallback), delete t.animationEndCallback;
        }
      }), r(f(t), 'updateState', (i, e, n) => {
        const p = (0, y.initializedState)(i);
        i = k(k(k({}, i), p), {}, {
          slideIndex: p.currentSlide,
        });
        const P = (0, y.getTrackLeft)(i);
        i = k(k({}, i), {}, {
          left: P,
        });
        const S = (0, y.getTrackCSS)(i);
        (e || l.default.Children.count(t.props.children) !== l.default.Children.count(i.children)) && (p.trackStyle = S), t.setState(p, n);
      }), r(f(t), 'ssrInit', () => {
        if (t.props.variableWidth) {
          let i = 0; let e = 0; const n = []; const p = (0, y.getPreClones)(k(k(k({}, t.props), t.state), {}, {
            slideCount: t.props.children.length,
          })); const
            P = (0, y.getPostClones)(k(k(k({}, t.props), t.state), {}, {
              slideCount: t.props.children.length,
            }));
          t.props.children.forEach((Z) => {
            n.push(Z.props.style.width), i += Z.props.style.width;
          });
          for (let S = 0; S < p; S++) e += n[n.length - 1 - S], i += n[n.length - 1 - S];
          for (let C = 0; C < P; C++) i += n[C];
          for (let _ = 0; _ < t.state.currentSlide; _++) e += n[_];
          const j = {
            width: `${i}px`,
            left: `${-e}px`,
          };
          if (t.props.centerMode) {
            const N = ''.concat(n[t.state.currentSlide], 'px');
            j.left = 'calc('.concat(j.left, ' + (100% - ').concat(N, ') / 2 ) ');
          }
          return {
            trackStyle: j,
          };
        }
        const H = l.default.Children.count(t.props.children); const I = k(k(k({}, t.props), t.state), {}, {
          slideCount: H,
        }); const K = (0, y.getPreClones)(I) + (0, y.getPostClones)(I) + H; const G = 100 / t.props.slidesToShow * K; const q = 100 / K; let
          z = -q * ((0, y.getPreClones)(I) + t.state.currentSlide) * G / 100;
        t.props.centerMode && (z += (100 - q * G / 100) / 2);
        const B = {
          width: `${G}%`,
          left: `${z}%`,
        };
        return {
          slideWidth: `${q}%`,
          trackStyle: B,
        };
      }), r(f(t), 'checkImagesLoad', () => {
        const i = t.list && t.list.querySelectorAll && t.list.querySelectorAll('.slick-slide img') || []; const e = i.length; let
          n = 0;
        Array.prototype.forEach.call(i, (p) => {
          const P = function () {
            return ++n && n >= e && t.onWindowResized();
          };
          if (!p.onclick) {
            p.onclick = function () {
              return p.parentNode.focus();
            };
          } else {
            const S = p.onclick;
            p.onclick = function (C) {
              S(C), p.parentNode.focus();
            };
          }
          p.onload || (t.props.lazyLoad ? p.onload = function () {
            t.adaptHeight(), t.callbackTimers.push(setTimeout(t.onWindowResized, t.props.speed));
          } : (p.onload = P, p.onerror = function () {
            P(), t.props.onLazyLoadError && t.props.onLazyLoadError();
          }));
        });
      }), r(f(t), 'progressiveLazyLoad', () => {
        for (var i = [], e = k(k({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, y.getPostClones)(e); n++) {
          if (t.state.lazyLoadedList.indexOf(n) < 0) {
            i.push(n);
            break;
          }
        }
        for (let p = t.state.currentSlide - 1; p >= -(0, y.getPreClones)(e); p--) {
          if (t.state.lazyLoadedList.indexOf(p) < 0) {
            i.push(p);
            break;
          }
        }
        i.length > 0 ? (t.setState((P) => ({
          lazyLoadedList: P.lazyLoadedList.concat(i),
        })), t.props.onLazyLoad && t.props.onLazyLoad(i)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
      }), r(f(t), 'slideHandler', function (i) {
        const e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; const n = t.props; const p = n.asNavFor; const P = n.beforeChange; const S = n.onLazyLoad; const C = n.speed; const _ = n.afterChange; const j = t.state.currentSlide; const N = (0, y.slideHandler)(k(k(k({
          index: i,
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e,
        })); const H = N.state; const
          I = N.nextState;
        if (H) {
          P && P(j, H.currentSlide);
          const K = H.lazyLoadedList.filter((G) => t.state.lazyLoadedList.indexOf(G) < 0);
          S && K.length > 0 && S(K), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), _ && _(j), delete t.animationEndCallback), t.setState(H, () => {
            p && t.asNavForIndex !== i && (t.asNavForIndex = i, p.innerSlider.slideHandler(i)), I && (t.animationEndCallback = setTimeout(() => {
              const G = I.animating; const
                q = ee(I, ['animating']);
              t.setState(q, () => {
                t.callbackTimers.push(setTimeout(() => t.setState({
                  animating: G,
                }), 10)), _ && _(H.currentSlide), delete t.animationEndCallback;
              });
            }, C));
          });
        }
      }), r(f(t), 'changeSlide', function (i) {
        const e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; const n = k(k({}, t.props), t.state); const
          p = (0, y.changeSlide)(n, i);
        if (!(p !== 0 && !p) && (e === !0 ? t.slideHandler(p, e) : t.slideHandler(p), t.props.autoplay && t.autoPlay('update'), t.props.focusOnSelect)) {
          const P = t.list.querySelectorAll('.slick-current');
          P[0] && P[0].focus();
        }
      }), r(f(t), 'clickHandler', (i) => {
        t.clickable === !1 && (i.stopPropagation(), i.preventDefault()), t.clickable = !0;
      }), r(f(t), 'keyHandler', (i) => {
        const e = (0, y.keyHandler)(i, t.props.accessibility, t.props.rtl);
        e !== '' && t.changeSlide({
          message: e,
        });
      }), r(f(t), 'selectHandler', (i) => {
        t.changeSlide(i);
      }), r(f(t), 'disableBodyScroll', () => {
        const i = function (n) {
          n = n || window.event, n.preventDefault && n.preventDefault(), n.returnValue = !1;
        };
        window.ontouchmove = i;
      }), r(f(t), 'enableBodyScroll', () => {
        window.ontouchmove = null;
      }), r(f(t), 'swipeStart', (i) => {
        t.props.verticalSwiping && t.disableBodyScroll();
        const e = (0, y.swipeStart)(i, t.props.swipe, t.props.draggable);
        e !== '' && t.setState(e);
      }), r(f(t), 'swipeMove', (i) => {
        const e = (0, y.swipeMove)(i, k(k(k({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide,
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(f(t), 'swipeEnd', (i) => {
        const e = (0, y.swipeEnd)(i, k(k(k({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide,
        }));
        if (e) {
          const n = e.triggerSlideHandler;
          delete e.triggerSlideHandler, t.setState(e), n !== void 0 && (t.slideHandler(n), t.props.verticalSwiping && t.enableBodyScroll());
        }
      }), r(f(t), 'touchEnd', (i) => {
        t.swipeEnd(i), t.clickable = !0;
      }), r(f(t), 'slickPrev', () => {
        t.callbackTimers.push(setTimeout(() => t.changeSlide({
          message: 'previous',
        }), 0));
      }), r(f(t), 'slickNext', () => {
        t.callbackTimers.push(setTimeout(() => t.changeSlide({
          message: 'next',
        }), 0));
      }), r(f(t), 'slickGoTo', function (i) {
        const e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (i = Number(i), isNaN(i)) return '';
        t.callbackTimers.push(setTimeout(() => t.changeSlide({
          message: 'index',
          index: i,
          currentSlide: t.state.currentSlide,
        }, e), 0));
      }), r(f(t), 'play', () => {
        let i;
        if (t.props.rtl) i = t.state.currentSlide - t.props.slidesToScroll;
        else if ((0, y.canGoNext)(k(k({}, t.props), t.state))) i = t.state.currentSlide + t.props.slidesToScroll;
        else return !1;
        t.slideHandler(i);
      }), r(f(t), 'autoPlay', (i) => {
        t.autoplayTimer && clearInterval(t.autoplayTimer);
        const e = t.state.autoplaying;
        if (i === 'update') {
          if (e === 'hovered' || e === 'focused' || e === 'paused') return;
        } else if (i === 'leave') {
          if (e === 'paused' || e === 'focused') return;
        } else if (i === 'blur' && (e === 'paused' || e === 'hovered')) return;
        t.autoplayTimer = setInterval(t.play, t.props.autoplaySpeed + 50), t.setState({
          autoplaying: 'playing',
        });
      }), r(f(t), 'pause', (i) => {
        t.autoplayTimer && (clearInterval(t.autoplayTimer), t.autoplayTimer = null);
        const e = t.state.autoplaying;
        i === 'paused' ? t.setState({
          autoplaying: 'paused',
        }) : i === 'focused' ? (e === 'hovered' || e === 'playing') && t.setState({
          autoplaying: 'focused',
        }) : e === 'playing' && t.setState({
          autoplaying: 'hovered',
        });
      }), r(f(t), 'onDotsOver', () => t.props.autoplay && t.pause('hovered')), r(f(t), 'onDotsLeave', () => t.props.autoplay && t.state.autoplaying === 'hovered' && t.autoPlay('leave')), r(f(t), 'onTrackOver', () => t.props.autoplay && t.pause('hovered')), r(f(t), 'onTrackLeave', () => t.props.autoplay && t.state.autoplaying === 'hovered' && t.autoPlay('leave')), r(f(t), 'onSlideFocus', () => t.props.autoplay && t.pause('focused')), r(f(t), 'onSlideBlur', () => t.props.autoplay && t.state.autoplaying === 'focused' && t.autoPlay('blur')), r(f(t), 'render', () => {
        const i = (0, O.default)('slick-slider', t.props.className, {
          'slick-vertical': t.props.vertical,
          'slick-initialized': !0,
        }); const e = k(k({}, t.props), t.state); let n = (0, y.extractObject)(e, ['fade', 'cssEase', 'speed', 'infinite', 'centerMode', 'focusOnSelect', 'currentSlide', 'lazyLoad', 'lazyLoadedList', 'rtl', 'slideWidth', 'slideHeight', 'listHeight', 'vertical', 'slidesToShow', 'slidesToScroll', 'slideCount', 'trackStyle', 'variableWidth', 'unslick', 'centerPadding', 'targetSlide', 'useCSS']); const
          p = t.props.pauseOnHover;
        n = k(k({}, n), {}, {
          onMouseEnter: p ? t.onTrackOver : null,
          onMouseLeave: p ? t.onTrackLeave : null,
          onMouseOver: p ? t.onTrackOver : null,
          focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null,
        });
        let P;
        if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
          let S = (0, y.extractObject)(e, ['dotsClass', 'slideCount', 'slidesToShow', 'currentSlide', 'slidesToScroll', 'clickHandler', 'children', 'customPaging', 'infinite', 'appendDots']); const
            C = t.props.pauseOnDotsHover;
          S = k(k({}, S), {}, {
            clickHandler: t.changeSlide,
            onMouseEnter: C ? t.onDotsLeave : null,
            onMouseOver: C ? t.onDotsOver : null,
            onMouseLeave: C ? t.onDotsLeave : null,
          }), P = /* @__PURE__ */ l.default.createElement(x.Dots, S);
        }
        let _; let j; const
          N = (0, y.extractObject)(e, ['infinite', 'centerMode', 'currentSlide', 'slideCount', 'slidesToShow', 'prevArrow', 'nextArrow']);
        N.clickHandler = t.changeSlide, t.props.arrows && (_ = /* @__PURE__ */ l.default.createElement(L.PrevArrow, N), j = /* @__PURE__ */ l.default.createElement(L.NextArrow, N));
        let H = null;
        t.props.vertical && (H = {
          height: t.state.listHeight,
        });
        let I = null;
        t.props.vertical === !1 ? t.props.centerMode === !0 && (I = {
          padding: `0px ${t.props.centerPadding}`,
        }) : t.props.centerMode === !0 && (I = {
          padding: `${t.props.centerPadding} 0px`,
        });
        const K = k(k({}, H), I); const G = t.props.touchMove; let q = {
          className: 'slick-list',
          style: K,
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
          z = {
            className: i,
            dir: 'ltr',
            style: t.props.style,
          };
        return t.props.unslick && (q = {
          className: 'slick-list',
        }, z = {
          className: i,
          style: t.props.style,
        }), /* @__PURE__ */ l.default.createElement('div', z, t.props.unslick ? '' : _, /* @__PURE__ */ l.default.createElement('div', V({
          ref: t.listRefHandler,
        }, q), /* @__PURE__ */ l.default.createElement(g.Track, V({
          ref: t.trackRefHandler,
        }, n), t.props.children)), t.props.unslick ? '' : j, t.props.unslick ? '' : P);
      }), t.list = null, t.track = null, t.state = k(k({}, c.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: l.default.Children.count(t.props.children),
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      const W = t.ssrInit();
      return t.state = k(k({}, t.state), W), t;
    }
    return U(w, [{
      key: 'didPropsChange',
      value(t) {
        for (var W = !1, i = 0, e = Object.keys(this.props); i < e.length; i++) {
          const n = e[i];
          if (!t.hasOwnProperty(n)) {
            W = !0;
            break;
          }
          if (!(D(t[n]) === 'object' || typeof t[n] === 'function' || isNaN(t[n])) && t[n] !== this.props[n]) {
            W = !0;
            break;
          }
        }
        return W || l.default.Children.count(this.props.children) !== l.default.Children.count(t.children);
      },
    }]), w;
  }(l.default.Component)), pe;
}
let Ee; let
  Xe;
function Rt() {
  if (Xe) return Ee;
  Xe = 1;
  const l = function (c) {
    return c.replace(/[A-Z]/g, (h) => `-${h.toLowerCase()}`).toLowerCase();
  };
  return Ee = l, Ee;
}
let Le; let
  Ke;
function zt() {
  if (Ke) return Le;
  Ke = 1;
  const l = Rt(); const c = function (y) {
    const g = /[height|width]$/;
    return g.test(y);
  }; const h = function (y) {
    let g = '';
    const x = Object.keys(y);
    return x.forEach((L, X) => {
      let A = y[L];
      L = l(L), c(L) && typeof A === 'number' && (A += 'px'), A === !0 ? g += L : A === !1 ? g += `not ${L}` : g += `(${L}: ${A})`, X < x.length - 1 && (g += ' and ');
    }), g;
  }; const
    O = function (y) {
      let g = '';
      return typeof y === 'string' ? y : y instanceof Array ? (y.forEach((x, L) => {
        g += h(x), L < y.length - 1 && (g += ', ');
      }), g) : h(y);
    };
  return Le = O, Le;
}
let Ye;
function Dt() {
  return Ye || (Ye = 1, (function (l) {
    Object.defineProperty(l, '__esModule', {
      value: !0,
    }), l.default = void 0;
    const c = x(ue); const h = Mt(); const O = x(zt()); const y = x(Ve()); const
      g = ye();
    function x(d) {
      return d && d.__esModule ? d : { default: d };
    }
    function L(d) {
      '@babel/helpers - typeof';

      return L = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (a) {
        return typeof a;
      } : function (a) {
        return a && typeof Symbol === 'function' && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
      }, L(d);
    }
    function X() {
      return X = Object.assign ? Object.assign.bind() : function (d) {
        for (let a = 1; a < arguments.length; a++) {
          const r = arguments[a];
          for (const v in r) ({}).hasOwnProperty.call(r, v) && (d[v] = r[v]);
        }
        return d;
      }, X.apply(null, arguments);
    }
    function A(d, a) {
      const r = Object.keys(d);
      if (Object.getOwnPropertySymbols) {
        let v = Object.getOwnPropertySymbols(d);
        a && (v = v.filter((m) => Object.getOwnPropertyDescriptor(d, m).enumerable)), r.push.apply(r, v);
      }
      return r;
    }
    function D(d) {
      for (let a = 1; a < arguments.length; a++) {
        var r = arguments[a] != null ? arguments[a] : {};
        a % 2 ? A(Object(r), !0).forEach((v) => {
          o(d, v, r[v]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(r)) : A(Object(r)).forEach((v) => {
          Object.defineProperty(d, v, Object.getOwnPropertyDescriptor(r, v));
        });
      }
      return d;
    }
    function V(d, a) {
      if (!(d instanceof a)) throw new TypeError('Cannot call a class as a function');
    }
    function ee(d, a) {
      for (let r = 0; r < a.length; r++) {
        const v = a[r];
        v.enumerable = v.enumerable || !1, v.configurable = !0, 'value' in v && (v.writable = !0), Object.defineProperty(d, s(v.key), v);
      }
    }
    function te(d, a, r) {
      return a && ee(d.prototype, a), Object.defineProperty(d, 'prototype', { writable: !1 }), d;
    }
    function R(d, a) {
      if (typeof a !== 'function' && a !== null) throw new TypeError('Super expression must either be null or a function');
      d.prototype = Object.create(a && a.prototype, { constructor: { value: d, writable: !0, configurable: !0 } }), Object.defineProperty(d, 'prototype', { writable: !1 }), a && k(d, a);
    }
    function k(d, a) {
      return k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (r, v) {
        return r.__proto__ = v, r;
      }, k(d, a);
    }
    function Y(d) {
      const a = J();
      return function () {
        let r; const
          v = $(d);
        if (a) {
          const m = $(this).constructor;
          r = Reflect.construct(v, arguments, m);
        } else r = v.apply(this, arguments);
        return F(this, r);
      };
    }
    function F(d, a) {
      if (a && (L(a) == 'object' || typeof a === 'function')) return a;
      if (a !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
      return U(d);
    }
    function U(d) {
      if (d === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return d;
    }
    function J() {
      try {
        var d = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
        }));
      } catch {
      }
      return (J = function () {
        return !!d;
      })();
    }
    function $(d) {
      return $ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, $(d);
    }
    function o(d, a, r) {
      return (a = s(a)) in d ? Object.defineProperty(d, a, {
        value: r, enumerable: !0, configurable: !0, writable: !0,
      }) : d[a] = r, d;
    }
    function s(d) {
      const a = f(d, 'string');
      return L(a) == 'symbol' ? a : `${a}`;
    }
    function f(d, a) {
      if (L(d) != 'object' || !d) return d;
      const r = d[Symbol.toPrimitive];
      if (r !== void 0) {
        const v = r.call(d, a);
        if (L(v) != 'object') return v;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return (a === 'string' ? String : Number)(d);
    }
    l.default = /* @__PURE__ */ (function (d) {
      R(r, d);
      const a = Y(r);
      function r(v) {
        let m;
        return V(this, r), m = a.call(this, v), o(U(m), 'innerSliderRefHandler', (u) => m.innerSlider = u), o(U(m), 'slickPrev', () => m.innerSlider.slickPrev()), o(U(m), 'slickNext', () => m.innerSlider.slickNext()), o(U(m), 'slickGoTo', function (u) {
          const b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return m.innerSlider.slickGoTo(u, b);
        }), o(U(m), 'slickPause', () => m.innerSlider.pause('paused')), o(U(m), 'slickPlay', () => m.innerSlider.autoPlay('play')), m.state = {
          breakpoint: null,
        }, m._responsiveMediaHandlers = [], m;
      }
      return te(r, [{
        key: 'media',
        value(m, u) {
          const b = window.matchMedia(m); const
            w = function (t) {
              const W = t.matches;
              W && u();
            };
          b.addListener(w), this._responsiveMediaHandlers.push({
            mql: b,
            query: m,
            listener: w,
          });
        },
        // handles responsive breakpoints
      }, {
        key: 'componentDidMount',
        value() {
          const m = this;
          if (this.props.responsive) {
            const u = this.props.responsive.map((w) => w.breakpoint);
            u.sort((w, T) => w - T), u.forEach((w, T) => {
              let t;
              T === 0 ? t = (0, O.default)({
                minWidth: 0,
                maxWidth: w,
              }) : t = (0, O.default)({
                minWidth: u[T - 1] + 1,
                maxWidth: w,
              }), (0, g.canUseDOM)() && m.media(t, () => {
                m.setState({
                  breakpoint: w,
                });
              });
            });
            const b = (0, O.default)({
              minWidth: u.slice(-1)[0],
            });
            (0, g.canUseDOM)() && this.media(b, () => {
              m.setState({
                breakpoint: null,
              });
            });
          }
        },
      }, {
        key: 'componentWillUnmount',
        value() {
          this._responsiveMediaHandlers.forEach((m) => {
            m.mql.removeListener(m.listener);
          });
        },
      }, {
        key: 'render',
        value() {
          const m = this; let u; let
            b;
          this.state.breakpoint ? (b = this.props.responsive.filter((S) => S.breakpoint === m.state.breakpoint), u = b[0].settings === 'unslick' ? 'unslick' : D(D(D({}, y.default), this.props), b[0].settings)) : u = D(D({}, y.default), this.props), u.centerMode && (u.slidesToScroll > 1 && process.env.NODE_ENV !== 'production' && console.warn('slidesToScroll should be equal to 1 in centerMode, you are using '.concat(u.slidesToScroll)), u.slidesToScroll = 1), u.fade && (u.slidesToShow > 1 && process.env.NODE_ENV !== 'production' && console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(u.slidesToShow)), u.slidesToScroll > 1 && process.env.NODE_ENV !== 'production' && console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(u.slidesToScroll)), u.slidesToShow = 1, u.slidesToScroll = 1);
          let w = c.default.Children.toArray(this.props.children);
          w = w.filter((S) => (typeof S === 'string' ? !!S.trim() : !!S)), u.variableWidth && (u.rows > 1 || u.slidesPerRow > 1) && (console.warn('variableWidth is not supported in case of rows > 1 or slidesPerRow > 1'), u.variableWidth = !1);
          for (var T = [], t = null, W = 0; W < w.length; W += u.rows * u.slidesPerRow) {
            for (var i = [], e = W; e < W + u.rows * u.slidesPerRow; e += u.slidesPerRow) {
              for (var n = [], p = e; p < e + u.slidesPerRow && (u.variableWidth && w[p].props.style && (t = w[p].props.style.width), !(p >= w.length)); p += 1) {
                n.push(/* @__PURE__ */ c.default.cloneElement(w[p], {
                  key: 100 * W + 10 * e + p,
                  tabIndex: -1,
                  style: {
                    width: ''.concat(100 / u.slidesPerRow, '%'),
                    display: 'inline-block',
                  },
                }));
              }
              i.push(/* @__PURE__ */ c.default.createElement('div', {
                key: 10 * W + e,
              }, n));
            }
            u.variableWidth ? T.push(/* @__PURE__ */ c.default.createElement('div', {
              key: W,
              style: {
                width: t,
              },
            }, i)) : T.push(/* @__PURE__ */ c.default.createElement('div', {
              key: W,
            }, i));
          }
          if (u === 'unslick') {
            const P = `regular slider ${this.props.className || ''}`;
            return /* @__PURE__ */ c.default.createElement('div', {
              className: P,
            }, w);
          } T.length <= u.slidesToShow && (u.unslick = !0);
          return /* @__PURE__ */ c.default.createElement(h.InnerSlider, X({
            style: this.props.style,
            ref: this.innerSliderRefHandler,
          }, (0, g.filterSettings)(u)), T);
        },
      }]), r;
    }(c.default.Component));
  }(Pe))), Pe;
}
let Ue;
function Nt() {
  return Ue || (Ue = 1, (function (l) {
    Object.defineProperty(l, '__esModule', {
      value: !0,
    }), l.default = void 0;
    const c = h(Dt());
    function h(O) {
      return O && O.__esModule ? O : { default: O };
    }
    l.default = c.default;
  }(_e))), _e;
}
const Ht = Nt();
const It = /* @__PURE__ */ ot(Ht); const
  qt = ({
    logos: l = [],
    // Array of { src, alt, href }
    carousel: c = !1,
    carouselLabel: h = 'Logo carousel',
    className: O = '',
    ...y
  }) => {
    const [g, x] = ze(0); const [L, X] = ze(1); const A = nt(null); const D = 'w-full flex flex-wrap justify-center gap-logos-spacing-x'; const V = 'flex items-center justify-center basis-[160px] md:basis-[210px] xl:basis-[135px]'; const
      ee = 'flex items-center justify-center px-[calc(var(--spacing-logos-spacing-x)/2)]';
    it(() => {
      if (!c) return;
      const R = () => {
        const Y = A.current;
        if (!Y) return;
        Y.querySelectorAll('.slick-slide').forEach((U) => {
          U.getAttribute('aria-hidden') === 'true' ? U.setAttribute('inert', '') : U.removeAttribute('inert');
        });
        const F = Y.querySelectorAll('.slick-slide[aria-hidden="false"]:not(.slick-cloned)');
        X(Math.max(F.length, 1));
      }; const
        k = window.requestAnimationFrame(R);
      return () => window.cancelAnimationFrame(k);
    }, [c, g, l.length]);
    const te = {
      infinite: !0,
      arrows: !1,
      dots: !0,
      slidesToShow: 6,
      slidesToScroll: 3,
      centerPadding: '0',
      afterChange: x,
      customPaging: (R) => /* @__PURE__ */ oe(
        'button',
        {
          type: 'button',
          'aria-label': `Go to carousel page ${R + 1}`,
        },
      ),
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            centerPadding: '80px',
            centerMode: !0,
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            centerPadding: '80px',
            centerMode: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return /* @__PURE__ */ oe(
      'div',
      {
        ref: c ? A : null,
        className: `py-logos-padding-y ${O}`,
        ...c ? {
          role: 'region',
          'aria-roledescription': 'carousel',
          'aria-label': h,
        } : {},
        ...y,
        children: c ? /* @__PURE__ */ Re(rt, {
          children: [
            /* @__PURE__ */ Re('div', {
              'aria-live': 'polite',
              'aria-atomic': 'true',
              className: 'sr-only',
              children: [
                'Showing logos ',
                g + 1,
                ' to ',
                Math.min(g + L, l.length),
                ' of ',
                l.length,
              ],
            }),
            /* @__PURE__ */ oe(It, {
              ...te,
              className: 'logos-carousel text-center',
              children: l.map((R, k) => {
                const Y = /* @__PURE__ */ oe(
                  'img',
                  {
                    src: R.src,
                    alt: R.alt || 'Logo',
                    className: 'w-full',
                  },
                );
                return R.href ? /* @__PURE__ */ oe(
                  'a',
                  {
                    href: R.href,
                    className: ee,
                    ...R.attributes ?? {},
                    children: Y,
                  },
                  k,
                ) : /* @__PURE__ */ oe(
                  'div',
                  {
                    className: ee,
                    ...R.attributes ?? {},
                    children: Y,
                  },
                  k,
                );
              }),
            }),
          ],
        }) : /* @__PURE__ */ oe('div', {
          className: D,
          children: l.map((R, k) => {
            const Y = /* @__PURE__ */ oe(
              'img',
              {
                src: R.src,
                alt: R.alt || 'Logo',
                className: 'w-full',
              },
            );
            return R.href ? /* @__PURE__ */ oe(
              'a',
              {
                href: R.href,
                className: V,
                ...R.attributes ?? {},
                children: Y,
              },
              k,
            ) : /* @__PURE__ */ oe(
              'div',
              {
                className: V,
                ...R.attributes ?? {},
                children: Y,
              },
              k,
            );
          }),
        }),
      },
    );
  };
export {
  qt as default,
};
