import { jsxs as ce, jsx as ie, Fragment as nt } from 'react/jsx-runtime';
import * as Se from 'react';
import ue, {
  useId as it, useState as De, useRef as ot, useEffect as at,
} from 'react';

const me = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof global < 'u' ? global : typeof self < 'u' ? self : {};
function lt(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, 'default') ? o.default : o;
}
function st(o) {
  if (Object.prototype.hasOwnProperty.call(o, '__esModule')) return o;
  const c = o.default;
  if (typeof c === 'function') {
    var h = function b() {
      return this instanceof b ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    h.prototype = c.prototype;
  } else h = {};
  return Object.defineProperty(h, '__esModule', { value: !0 }), Object.keys(o).forEach((b) => {
    const y = Object.getOwnPropertyDescriptor(o, b);
    Object.defineProperty(h, b, y.get ? y : {
      enumerable: !0,
      get() {
        return o[b];
      },
    });
  }), h;
}
const Pe = {}; const Te = {}; const ve = {}; const Ce = {}; let
  Ne;
function ut() {
  return Ne || (Ne = 1, (function (o) {
    Object.defineProperty(o, '__esModule', {
      value: !0,
    }), o.default = void 0;
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
    o.default = c;
  }(Ce))), Ce;
}
let je; let
  He;
function ct() {
  if (He) return je;
  He = 1;
  const o = 'Expected a function';
  const c = NaN;
  const h = '[object Symbol]';
  const b = /^\s+|\s+$/g;
  const y = /^[-+]0x[0-9a-f]+$/i;
  const g = /^0b[01]+$/i;
  const x = /^0o[0-7]+$/i;
  const L = parseInt;
  const I = typeof me === 'object' && me && me.Object === Object && me;
  const z = typeof self === 'object' && self && self.Object === Object && self;
  const M = I || z || Function('return this')();
  const Y = Object.prototype;
  const Q = Y.toString;
  const $ = Math.max;
  const V = Math.min;
  const T = function () {
    return M.Date.now();
  };
  function ee(i, s, f) {
    let d; let a; let r; let v; let S; let u; let m = 0; let O = !1; let P = !1; let
      t = !0;
    if (typeof i !== 'function') throw new TypeError(o);
    s = U(s) || 0, F(f) && (O = !!f.leading, P = 'maxWait' in f, r = P ? $(U(f.maxWait) || 0, s) : r, t = 'trailing' in f ? !!f.trailing : t);
    function W(j) {
      const N = d; const
        H = a;
      return d = a = void 0, m = j, v = i.apply(H, N), v;
    }
    function l(j) {
      return m = j, S = setTimeout(p, s), O ? W(j) : v;
    }
    function e(j) {
      const N = j - u; const H = j - m; const
        A = s - N;
      return P ? V(A, r - H) : A;
    }
    function n(j) {
      const N = j - u; const
        H = j - m;
      return u === void 0 || N >= s || N < 0 || P && H >= r;
    }
    function p() {
      const j = T();
      if (n(j)) return k(j);
      S = setTimeout(p, e(j));
    }
    function k(j) {
      return S = void 0, t && d ? W(j) : (d = a = void 0, v);
    }
    function w() {
      S !== void 0 && clearTimeout(S), m = 0, d = u = a = S = void 0;
    }
    function C() {
      return S === void 0 ? v : k(T());
    }
    function _() {
      const j = T(); const
        N = n(j);
      if (d = arguments, a = this, u = j, N) {
        if (S === void 0) return l(u);
        if (P) return S = setTimeout(p, s), W(u);
      }
      return S === void 0 && (S = setTimeout(p, s)), v;
    }
    return _.cancel = w, _.flush = C, _;
  }
  function F(i) {
    const s = typeof i;
    return !!i && (s == 'object' || s == 'function');
  }
  function K(i) {
    return !!i && typeof i === 'object';
  }
  function J(i) {
    return typeof i === 'symbol' || K(i) && Q.call(i) == h;
  }
  function U(i) {
    if (typeof i === 'number') return i;
    if (J(i)) return c;
    if (F(i)) {
      const s = typeof i.valueOf === 'function' ? i.valueOf() : i;
      i = F(s) ? `${s}` : s;
    }
    if (typeof i !== 'string') return i === 0 ? i : +i;
    i = i.replace(b, '');
    const f = g.test(i);
    return f || x.test(i) ? L(i.slice(2), f ? 2 : 8) : y.test(i) ? c : +i;
  }
  return je = ee, je;
}
const Ee = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
let Ie;
function _e() {
  return Ie || (Ie = 1, (function (o) {
    (function () {
      const c = {}.hasOwnProperty;
      function h() {
        for (var g = '', x = 0; x < arguments.length; x++) {
          const L = arguments[x];
          L && (g = y(g, b(L)));
        }
        return g;
      }
      function b(g) {
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
      o.exports ? (h.default = h, o.exports = h) : window.classNames = h;
    }());
  }(Ee))), Ee.exports;
}
const E = {}; const Le = {}; let
  Ae;
function Ve() {
  return Ae || (Ae = 1, (function (o) {
    Object.defineProperty(o, '__esModule', {
      value: !0,
    }), o.default = void 0;
    const c = h(ue);
    function h(y) {
      return y && y.__esModule ? y : { default: y };
    }
    const b = {
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
    o.default = b;
  }(Le))), Le;
}
let We;
function ge() {
  if (We) return E;
  We = 1, Object.defineProperty(E, '__esModule', {
    value: !0,
  }), E.checkSpecKeys = E.checkNavigable = E.changeSlide = E.canUseDOM = E.canGoNext = void 0, E.clamp = z, E.extractObject = void 0, E.filterSettings = W, E.validSettings = E.swipeStart = E.swipeMove = E.swipeEnd = E.slidesOnRight = E.slidesOnLeft = E.slideHandler = E.siblingDirection = E.safePreventDefault = E.lazyStartIndex = E.lazySlidesOnRight = E.lazySlidesOnLeft = E.lazyEndIndex = E.keyHandler = E.initializedState = E.getWidth = E.getTrackLeft = E.getTrackCSS = E.getTrackAnimateCSS = E.getTotalSlides = E.getSwipeDirection = E.getSlideCount = E.getRequiredLazySlides = E.getPreClones = E.getPostClones = E.getOnDemandLazySlides = E.getNavigableIndexes = E.getHeight = void 0;
  const o = h(ue); const
    c = h(Ve());
  function h(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function b(l) {
    '@babel/helpers - typeof';

    return b = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) {
      return typeof e;
    } : function (e) {
      return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
    }, b(l);
  }
  function y(l, e) {
    const n = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      let p = Object.getOwnPropertySymbols(l);
      e && (p = p.filter((k) => Object.getOwnPropertyDescriptor(l, k).enumerable)), n.push.apply(n, p);
    }
    return n;
  }
  function g(l) {
    for (let e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2 ? y(Object(n), !0).forEach((p) => {
        x(l, p, n[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((p) => {
        Object.defineProperty(l, p, Object.getOwnPropertyDescriptor(n, p));
      });
    }
    return l;
  }
  function x(l, e, n) {
    return (e = L(e)) in l ? Object.defineProperty(l, e, {
      value: n, enumerable: !0, configurable: !0, writable: !0,
    }) : l[e] = n, l;
  }
  function L(l) {
    const e = I(l, 'string');
    return b(e) == 'symbol' ? e : `${e}`;
  }
  function I(l, e) {
    if (b(l) != 'object' || !l) return l;
    const n = l[Symbol.toPrimitive];
    if (n !== void 0) {
      const p = n.call(l, e);
      if (b(p) != 'object') return p;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (e === 'string' ? String : Number)(l);
  }
  function z(l, e, n) {
    return Math.max(e, Math.min(l, n));
  }
  const M = E.safePreventDefault = function (e) {
    const n = ['onTouchStart', 'onTouchMove', 'onWheel'];
    n.includes(e._reactName) || e.preventDefault();
  }; const
    Y = E.getOnDemandLazySlides = function (e) {
      for (var n = [], p = Q(e), k = $(e), w = p; w < k; w++) e.lazyLoadedList.indexOf(w) < 0 && n.push(w);
      return n;
    };
  E.getRequiredLazySlides = function (e) {
    for (var n = [], p = Q(e), k = $(e), w = p; w < k; w++) n.push(w);
    return n;
  };
  var Q = E.lazyStartIndex = function (e) {
    return e.currentSlide - V(e);
  }; var $ = E.lazyEndIndex = function (e) {
    return e.currentSlide + T(e);
  }; var V = E.lazySlidesOnLeft = function (e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }; var T = E.lazySlidesOnRight = function (e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }; const ee = E.getWidth = function (e) {
    return e && e.offsetWidth || 0;
  }; const F = E.getHeight = function (e) {
    return e && e.offsetHeight || 0;
  }; const K = E.getSwipeDirection = function (e) {
    const n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; let p; let k; let w; let
      C;
    return p = e.startX - e.curX, k = e.startY - e.curY, w = Math.atan2(k, p), C = Math.round(w * 180 / Math.PI), C < 0 && (C = 360 - Math.abs(C)), C <= 45 && C >= 0 || C <= 360 && C >= 315 ? 'left' : C >= 135 && C <= 225 ? 'right' : n === !0 ? C >= 35 && C <= 135 ? 'up' : 'down' : 'vertical';
  }; const
    J = E.canGoNext = function (e) {
      let n = !0;
      return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (n = !1), n;
    };
  E.extractObject = function (e, n) {
    const p = {};
    return n.forEach((k) => p[k] = e[k]), p;
  }, E.initializedState = function (e) {
    const n = o.default.Children.count(e.children); const p = e.listRef; const k = Math.ceil(ee(p)); const w = e.trackRef && e.trackRef.node; const C = Math.ceil(ee(w)); let
      _;
    if (e.vertical) _ = k;
    else {
      let j = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding === 'string' && e.centerPadding.slice(-1) === '%' && (j *= k / 100), _ = Math.ceil((k - j) / e.slidesToShow);
    }
    const N = p && F(p.querySelector('[data-index="0"]')); const H = N * e.slidesToShow; let
      A = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && (A = n - 1 - e.initialSlide);
    let X = e.lazyLoadedList || []; const
      B = Y(g(g({}, e), {}, {
        currentSlide: A,
        lazyLoadedList: X,
      }));
    X = X.concat(B);
    const q = {
      slideCount: n,
      slideWidth: _,
      listWidth: k,
      trackWidth: C,
      currentSlide: A,
      slideHeight: N,
      listHeight: H,
      lazyLoadedList: X,
    };
    return e.autoplaying === null && e.autoplay && (q.autoplaying = 'playing'), q;
  }, E.slideHandler = function (e) {
    const n = e.waitForAnimate; const p = e.animating; const k = e.fade; const w = e.infinite; const C = e.index; const _ = e.slideCount; const j = e.lazyLoad; const N = e.currentSlide; const H = e.centerMode; const A = e.slidesToScroll; const X = e.slidesToShow; const B = e.useCSS; let
      q = e.lazyLoadedList;
    if (n && p) return {};
    let D = C; let G; let te; let R; let Z = {}; let re = {}; const
      ne = w ? C : z(C, 0, _ - 1);
    if (k) {
      if (!w && (C < 0 || C >= _)) return {};
      C < 0 ? D = C + _ : C >= _ && (D = C - _), j && q.indexOf(D) < 0 && (q = q.concat(D)), Z = {
        animating: !0,
        currentSlide: D,
        lazyLoadedList: q,
        targetSlide: D,
      }, re = {
        animating: !1,
        targetSlide: D,
      };
    } else {
      G = D, D < 0 ? (G = D + _, w ? _ % A !== 0 && (G = _ - _ % A) : G = 0) : !J(e) && D > N ? D = G = N : H && D >= _ ? (D = w ? _ : _ - 1, G = w ? 0 : _ - 1) : D >= _ && (G = D - _, w ? _ % A !== 0 && (G = 0) : G = _ - X), !w && D + X >= _ && (G = _ - X), te = r(g(g({}, e), {}, {
        slideIndex: D,
      })), R = r(g(g({}, e), {}, {
        slideIndex: G,
      })), w || (te === R && (D = G), te = R), j && (q = q.concat(Y(g(g({}, e), {}, {
        currentSlide: D,
      })))), B ? (Z = {
        animating: !0,
        currentSlide: G,
        trackStyle: a(g(g({}, e), {}, {
          left: te,
        })),
        lazyLoadedList: q,
        targetSlide: ne,
      }, re = {
        animating: !1,
        currentSlide: G,
        trackStyle: d(g(g({}, e), {}, {
          left: R,
        })),
        swipeLeft: null,
        targetSlide: ne,
      }) : Z = {
        currentSlide: G,
        trackStyle: d(g(g({}, e), {}, {
          left: R,
        })),
        lazyLoadedList: q,
        targetSlide: ne,
      };
    }
    return {
      state: Z,
      nextState: re,
    };
  }, E.changeSlide = function (e, n) {
    let p; let k; let w; let C; let _; const j = e.slidesToScroll; const N = e.slidesToShow; const H = e.slideCount; const A = e.currentSlide; const X = e.targetSlide; const B = e.lazyLoad; const
      q = e.infinite;
    if (C = H % j !== 0, p = C ? 0 : (H - A) % j, n.message === 'previous') w = p === 0 ? j : N - p, _ = A - w, B && !q && (k = A - w, _ = k === -1 ? H - 1 : k), q || (_ = X - j);
    else if (n.message === 'next') w = p === 0 ? j : p, _ = A + w, B && !q && (_ = (A + j) % H + p), q || (_ = X + j);
    else if (n.message === 'dots') _ = n.index * n.slidesToScroll;
    else if (n.message === 'children') {
      if (_ = n.index, q) {
        const D = m(g(g({}, e), {}, {
          targetSlide: _,
        }));
        _ > n.currentSlide && D === 'left' ? _ -= H : _ < n.currentSlide && D === 'right' && (_ += H);
      }
    } else n.message === 'index' && (_ = Number(n.index));
    return _;
  }, E.keyHandler = function (e, n, p) {
    return e.target.tagName.match('TEXTAREA|INPUT|SELECT') || !n ? '' : e.keyCode === 37 ? p ? 'next' : 'previous' : e.keyCode === 39 ? p ? 'previous' : 'next' : '';
  }, E.swipeStart = function (e, n, p) {
    return e.target.tagName === 'IMG' && M(e), !n || !p && e.type.indexOf('mouse') !== -1 ? '' : {
      dragging: !0,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY,
      },
    };
  }, E.swipeMove = function (e, n) {
    const p = n.scrolling; const k = n.animating; const w = n.vertical; const C = n.swipeToSlide; const _ = n.verticalSwiping; const j = n.rtl; const N = n.currentSlide; const H = n.edgeFriction; const A = n.edgeDragged; const X = n.onEdge; const B = n.swiped; const q = n.swiping; const D = n.slideCount; const G = n.slidesToScroll; const te = n.infinite; const R = n.touchObject; const Z = n.swipeEvent; const re = n.listHeight; const
      ne = n.listWidth;
    if (!p) {
      if (k) return M(e);
      w && C && _ && M(e);
      let oe; let le = {}; const
        be = r(n);
      R.curX = e.touches ? e.touches[0].pageX : e.clientX, R.curY = e.touches ? e.touches[0].pageY : e.clientY, R.swipeLength = Math.round(Math.sqrt((R.curX - R.startX) ** 2));
      const ze = Math.round(Math.sqrt((R.curY - R.startY) ** 2));
      if (!_ && !q && ze > 10) {
        return {
          scrolling: !0,
        };
      }
      _ && (R.swipeLength = ze);
      let de = (j ? -1 : 1) * (R.curX > R.startX ? 1 : -1);
      _ && (de = R.curY > R.startY ? 1 : -1);
      const rt = Math.ceil(D / G); const ae = K(n.touchObject, _); let
        pe = R.swipeLength;
      return te || (N === 0 && (ae === 'right' || ae === 'down') || N + 1 >= rt && (ae === 'left' || ae === 'up') || !J(n) && (ae === 'left' || ae === 'up')) && (pe = R.swipeLength * H, A === !1 && X && (X(ae), le.edgeDragged = !0)), !B && Z && (Z(ae), le.swiped = !0), w ? oe = be + pe * (re / ne) * de : j ? oe = be - pe * de : oe = be + pe * de, _ && (oe = be + pe * de), le = g(g({}, le), {}, {
        touchObject: R,
        swipeLeft: oe,
        trackStyle: d(g(g({}, n), {}, {
          left: oe,
        })),
      }), Math.abs(R.curX - R.startX) < Math.abs(R.curY - R.startY) * 0.8 || R.swipeLength > 10 && (le.swiping = !0, M(e)), le;
    }
  }, E.swipeEnd = function (e, n) {
    const p = n.dragging; const k = n.swipe; const w = n.touchObject; const C = n.listWidth; const _ = n.touchThreshold; const j = n.verticalSwiping; const N = n.listHeight; const H = n.swipeToSlide; const A = n.scrolling; const X = n.onSwipe; const B = n.targetSlide; const q = n.currentSlide; const
      D = n.infinite;
    if (!p) return k && M(e), {};
    const G = j ? N / _ : C / _; const te = K(w, j); const
      R = {
        dragging: !1,
        edgeDragged: !1,
        scrolling: !1,
        swiping: !1,
        swiped: !1,
        swipeLeft: null,
        touchObject: {},
      };
    if (A || !w.swipeLength) return R;
    if (w.swipeLength > G) {
      M(e), X && X(te);
      let Z; let re; const
        ne = D ? q : B;
      switch (te) {
        case 'left':
        case 'up':
          re = ne + s(n), Z = H ? i(n, re) : re, R.currentDirection = 0;
          break;
        case 'right':
        case 'down':
          re = ne - s(n), Z = H ? i(n, re) : re, R.currentDirection = 1;
          break;
        default:
          Z = ne;
      }
      R.triggerSlideHandler = Z;
    } else {
      const oe = r(n);
      R.trackStyle = a(g(g({}, n), {}, {
        left: oe,
      }));
    }
    return R;
  };
  const U = E.getNavigableIndexes = function (e) {
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, p = e.infinite ? e.slidesToShow * -1 : 0, k = e.infinite ? e.slidesToShow * -1 : 0, w = []; p < n;) w.push(p), p = k + e.slidesToScroll, k += Math.min(e.slidesToScroll, e.slidesToShow);
    return w;
  }; var i = E.checkNavigable = function (e, n) {
    const p = U(e); let
      k = 0;
    if (n > p[p.length - 1]) n = p[p.length - 1];
    else {
      for (const w in p) {
        if (n < p[w]) {
          n = k;
          break;
        }
        k = p[w];
      }
    }
    return n;
  }; var s = E.getSlideCount = function (e) {
    const n = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      let p; const k = e.listRef; const
        w = k.querySelectorAll && k.querySelectorAll('.slick-slide') || [];
      if (Array.from(w).every((j) => {
        if (e.vertical) {
          if (j.offsetTop + F(j) / 2 > e.swipeLeft * -1) return p = j, !1;
        } else if (j.offsetLeft - n + ee(j) / 2 > e.swipeLeft * -1) return p = j, !1;
        return !0;
      }), !p) return 0;
      const C = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide; const
        _ = Math.abs(p.dataset.index - C) || 1;
      return _;
    } return e.slidesToScroll;
  }; const f = E.checkSpecKeys = function (e, n) {
    return n.reduce((p, k) => p && e.hasOwnProperty(k), !0) ? null : console.error('Keys Missing:', e);
  }; var d = E.getTrackCSS = function (e) {
    f(e, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth']);
    let n; let
      p;
    if (!e.vertical) n = u(e) * e.slideWidth;
    else {
      const k = e.unslick ? e.slideCount : e.slideCount + 2 * e.slidesToShow;
      p = k * e.slideHeight;
    }
    let w = {
      opacity: 1,
      transition: '',
      WebkitTransition: '',
    };
    if (e.useTransform) {
      const C = e.vertical ? `translate3d(0px, ${e.left}px, 0px)` : `translate3d(${e.left}px, 0px, 0px)`;
      const _ = e.vertical ? `translate3d(0px, ${e.left}px, 0px)` : `translate3d(${e.left}px, 0px, 0px)`;
      const j = e.vertical ? `translateY(${e.left}px)` : `translateX(${e.left}px)`;
      w = g(g({}, w), {}, {
        WebkitTransform: C,
        transform: _,
        msTransform: j,
      });
    } else e.vertical ? w.top = e.left : w.left = e.left;
    return e.fade && (w = {
      opacity: 1,
    }), n && (w.width = n), p && (w.height = p), window && !window.addEventListener && window.attachEvent && (e.vertical ? w.marginTop = `${e.left}px` : w.marginLeft = `${e.left}px`), w;
  }; var a = E.getTrackAnimateCSS = function (e) {
    f(e, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase']);
    const n = d(e);
    return e.useTransform ? (n.WebkitTransition = `-webkit-transform ${e.speed}ms ${e.cssEase}`, n.transition = `transform ${e.speed}ms ${e.cssEase}`) : e.vertical ? n.transition = `top ${e.speed}ms ${e.cssEase}` : n.transition = `left ${e.speed}ms ${e.cssEase}`, n;
  }; var r = E.getTrackLeft = function (e) {
    if (e.unslick) return 0;
    f(e, ['slideIndex', 'trackRef', 'infinite', 'centerMode', 'slideCount', 'slidesToShow', 'slidesToScroll', 'slideWidth', 'listWidth', 'variableWidth', 'slideHeight']);
    const n = e.slideIndex; const p = e.trackRef; const k = e.infinite; const w = e.centerMode; const C = e.slideCount; const _ = e.slidesToShow; const j = e.slidesToScroll; const N = e.slideWidth; const H = e.listWidth; const A = e.variableWidth; const X = e.slideHeight; const B = e.fade; const q = e.vertical; let D = 0; let G; let te; let
      R = 0;
    if (B || e.slideCount === 1) return 0;
    let Z = 0;
    if (k ? (Z = -v(e), C % j !== 0 && n + j > C && (Z = -(n > C ? _ - (n - C) : C % j)), w && (Z += parseInt(_ / 2))) : (C % j !== 0 && n + j > C && (Z = _ - C % j), w && (Z = parseInt(_ / 2))), D = Z * N, R = Z * X, q ? G = n * X * -1 + R : G = n * N * -1 + D, A === !0) {
      let re; const
        ne = p && p.node;
      if (re = n + v(e), te = ne && ne.childNodes[re], G = te ? te.offsetLeft * -1 : 0, w === !0) {
        re = k ? n + v(e) : n, te = ne && ne.children[re], G = 0;
        for (let oe = 0; oe < re; oe++) G -= ne && ne.children[oe] && ne.children[oe].offsetWidth;
        G -= parseInt(e.centerPadding), G += te && (H - te.offsetWidth) / 2;
      }
    }
    return G;
  }; var v = E.getPreClones = function (e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }; const S = E.getPostClones = function (e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }; var u = E.getTotalSlides = function (e) {
    return e.slideCount === 1 ? 1 : v(e) + e.slideCount + S(e);
  }; var m = E.siblingDirection = function (e) {
    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + O(e) ? 'left' : 'right' : e.targetSlide < e.currentSlide - P(e) ? 'right' : 'left';
  }; var O = E.slidesOnRight = function (e) {
    const n = e.slidesToShow; const p = e.centerMode; const k = e.rtl; const
      w = e.centerPadding;
    if (p) {
      let C = (n - 1) / 2 + 1;
      return parseInt(w) > 0 && (C += 1), k && n % 2 === 0 && (C += 1), C;
    }
    return k ? 0 : n - 1;
  }; var
    P = E.slidesOnLeft = function (e) {
      const n = e.slidesToShow; const p = e.centerMode; const k = e.rtl; const
        w = e.centerPadding;
      if (p) {
        let C = (n - 1) / 2 + 1;
        return parseInt(w) > 0 && (C += 1), !k && n % 2 === 0 && (C += 1), C;
      }
      return k ? n - 1 : 0;
    };
  E.canUseDOM = function () {
    return !!(typeof window < 'u' && window.document && window.document.createElement);
  };
  const t = E.validSettings = Object.keys(c.default);
  function W(l) {
    return t.reduce((e, n) => (l.hasOwnProperty(n) && (e[n] = l[n]), e), {});
  }
  return E;
}
const he = {}; let
  qe;
function ft() {
  if (qe) return he;
  qe = 1, Object.defineProperty(he, '__esModule', {
    value: !0,
  }), he.Track = void 0;
  const o = b(ue); const c = b(_e()); const
    h = ge();
  function b(a) {
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
        for (const S in v) ({}).hasOwnProperty.call(v, S) && (a[S] = v[S]);
      }
      return a;
    }, g.apply(null, arguments);
  }
  function x(a, r) {
    if (!(a instanceof r)) throw new TypeError('Cannot call a class as a function');
  }
  function L(a, r) {
    for (let v = 0; v < r.length; v++) {
      const S = r[v];
      S.enumerable = S.enumerable || !1, S.configurable = !0, 'value' in S && (S.writable = !0), Object.defineProperty(a, J(S.key), S);
    }
  }
  function I(a, r, v) {
    return r && L(a.prototype, r), Object.defineProperty(a, 'prototype', { writable: !1 }), a;
  }
  function z(a, r) {
    if (typeof r !== 'function' && r !== null) throw new TypeError('Super expression must either be null or a function');
    a.prototype = Object.create(r && r.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, 'prototype', { writable: !1 }), r && M(a, r);
  }
  function M(a, r) {
    return M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (v, S) {
      return v.__proto__ = S, v;
    }, M(a, r);
  }
  function Y(a) {
    const r = V();
    return function () {
      let v; const
        S = T(a);
      if (r) {
        const u = T(this).constructor;
        v = Reflect.construct(S, arguments, u);
      } else v = S.apply(this, arguments);
      return Q(this, v);
    };
  }
  function Q(a, r) {
    if (r && (y(r) == 'object' || typeof r === 'function')) return r;
    if (r !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return $(a);
  }
  function $(a) {
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
  function T(a) {
    return T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, T(a);
  }
  function ee(a, r) {
    const v = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      let S = Object.getOwnPropertySymbols(a);
      r && (S = S.filter((u) => Object.getOwnPropertyDescriptor(a, u).enumerable)), v.push.apply(v, S);
    }
    return v;
  }
  function F(a) {
    for (let r = 1; r < arguments.length; r++) {
      var v = arguments[r] != null ? arguments[r] : {};
      r % 2 ? ee(Object(v), !0).forEach((S) => {
        K(a, S, v[S]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(v)) : ee(Object(v)).forEach((S) => {
        Object.defineProperty(a, S, Object.getOwnPropertyDescriptor(v, S));
      });
    }
    return a;
  }
  function K(a, r, v) {
    return (r = J(r)) in a ? Object.defineProperty(a, r, {
      value: v, enumerable: !0, configurable: !0, writable: !0,
    }) : a[r] = v, a;
  }
  function J(a) {
    const r = U(a, 'string');
    return y(r) == 'symbol' ? r : `${r}`;
  }
  function U(a, r) {
    if (y(a) != 'object' || !a) return a;
    const v = a[Symbol.toPrimitive];
    if (v !== void 0) {
      const S = v.call(a, r);
      if (y(S) != 'object') return S;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (r === 'string' ? String : Number)(a);
  }
  const i = function (r) {
    let v; let S; let u; let m; let
      O;
    r.rtl ? O = r.slideCount - 1 - r.index : O = r.index, u = O < 0 || O >= r.slideCount, r.centerMode ? (m = Math.floor(r.slidesToShow / 2), S = (O - r.currentSlide) % r.slideCount === 0, O > r.currentSlide - m - 1 && O <= r.currentSlide + m && (v = !0)) : v = r.currentSlide <= O && O < r.currentSlide + r.slidesToShow;
    let P;
    r.targetSlide < 0 ? P = r.targetSlide + r.slideCount : r.targetSlide >= r.slideCount ? P = r.targetSlide - r.slideCount : P = r.targetSlide;
    const t = O === P;
    return {
      'slick-slide': !0,
      'slick-active': v,
      'slick-center': S,
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
      let v; const S = []; const u = []; const m = []; const O = o.default.Children.count(r.children); const P = (0, h.lazyStartIndex)(r); const
        t = (0, h.lazyEndIndex)(r);
      return o.default.Children.forEach(r.children, (W, l) => {
        let e; const
          n = {
            message: 'children',
            index: l,
            slidesToScroll: r.slidesToScroll,
            currentSlide: r.currentSlide,
          };
        !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(l) >= 0 ? e = W : e = /* @__PURE__ */ o.default.createElement('div', null);
        const p = s(F(F({}, r), {}, {
          index: l,
        })); const k = e.props.className || ''; let
          w = i(F(F({}, r), {}, {
            index: l,
          }));
        if (S.push(/* @__PURE__ */ o.default.cloneElement(e, {
          key: `original${f(e, l)}`,
          'data-index': l,
          className: (0, c.default)(w, k),
          tabIndex: '-1',
          'aria-hidden': !w['slick-active'],
          style: F(F({
            outline: 'none',
          }, e.props.style || {}), p),
          onClick(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          },
        })), r.infinite && O > 1 && r.fade === !1 && !r.unslick) {
          const C = O - l;
          C <= (0, h.getPreClones)(r) && (v = -C, v >= P && (e = W), w = i(F(F({}, r), {}, {
            index: v,
          })), u.push(/* @__PURE__ */ o.default.cloneElement(e, {
            key: `precloned${f(e, v)}`,
            'data-index': v,
            tabIndex: '-1',
            className: (0, c.default)(w, k),
            'aria-hidden': !w['slick-active'],
            style: F(F({}, e.props.style || {}), p),
            onClick(j) {
              e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
            },
          }))), l < (0, h.getPostClones)(r) && (v = O + l, v < t && (e = W), w = i(F(F({}, r), {}, {
            index: v,
          })), m.push(/* @__PURE__ */ o.default.cloneElement(e, {
            key: `postcloned${f(e, v)}`,
            'data-index': v,
            tabIndex: '-1',
            className: (0, c.default)(w, k),
            'aria-hidden': !w['slick-active'],
            style: F(F({}, e.props.style || {}), p),
            onClick(j) {
              e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
            },
          })));
        }
      }), r.rtl ? u.concat(S, m).reverse() : u.concat(S, m);
    };
  return he.Track = /* @__PURE__ */ (function (a) {
    z(v, a);
    const r = Y(v);
    function v() {
      let S;
      x(this, v);
      for (var u = arguments.length, m = new Array(u), O = 0; O < u; O++) m[O] = arguments[O];
      return S = r.call.apply(r, [this].concat(m)), K($(S), 'node', null), K($(S), 'handleRef', (P) => {
        S.node = P;
      }), S;
    }
    return I(v, [{
      key: 'render',
      value() {
        const u = d(this.props); const m = this.props; const O = m.onMouseEnter; const P = m.onMouseOver; const t = m.onMouseLeave; const
          W = {
            onMouseEnter: O,
            onMouseOver: P,
            onMouseLeave: t,
          };
        return /* @__PURE__ */ o.default.createElement('div', g({
          ref: this.handleRef,
          className: 'slick-track',
          style: this.props.trackStyle,
        }, W), u);
      },
    }]), v;
  }(o.default.PureComponent)), he;
}
const ye = {}; let
  Fe;
function dt() {
  if (Fe) return ye;
  Fe = 1;
  function o(i) {
    '@babel/helpers - typeof';

    return o = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (s) {
      return typeof s;
    } : function (s) {
      return s && typeof Symbol === 'function' && s.constructor === Symbol && s !== Symbol.prototype ? 'symbol' : typeof s;
    }, o(i);
  }
  Object.defineProperty(ye, '__esModule', {
    value: !0,
  }), ye.Dots = void 0;
  const c = y(ue); const h = y(_e()); const
    b = ge();
  function y(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function g(i, s) {
    const f = Object.keys(i);
    if (Object.getOwnPropertySymbols) {
      let d = Object.getOwnPropertySymbols(i);
      s && (d = d.filter((a) => Object.getOwnPropertyDescriptor(i, a).enumerable)), f.push.apply(f, d);
    }
    return f;
  }
  function x(i) {
    for (let s = 1; s < arguments.length; s++) {
      var f = arguments[s] != null ? arguments[s] : {};
      s % 2 ? g(Object(f), !0).forEach((d) => {
        L(i, d, f[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(f)) : g(Object(f)).forEach((d) => {
        Object.defineProperty(i, d, Object.getOwnPropertyDescriptor(f, d));
      });
    }
    return i;
  }
  function L(i, s, f) {
    return (s = Y(s)) in i ? Object.defineProperty(i, s, {
      value: f, enumerable: !0, configurable: !0, writable: !0,
    }) : i[s] = f, i;
  }
  function I(i, s) {
    if (!(i instanceof s)) throw new TypeError('Cannot call a class as a function');
  }
  function z(i, s) {
    for (let f = 0; f < s.length; f++) {
      const d = s[f];
      d.enumerable = d.enumerable || !1, d.configurable = !0, 'value' in d && (d.writable = !0), Object.defineProperty(i, Y(d.key), d);
    }
  }
  function M(i, s, f) {
    return s && z(i.prototype, s), Object.defineProperty(i, 'prototype', { writable: !1 }), i;
  }
  function Y(i) {
    const s = Q(i, 'string');
    return o(s) == 'symbol' ? s : `${s}`;
  }
  function Q(i, s) {
    if (o(i) != 'object' || !i) return i;
    const f = i[Symbol.toPrimitive];
    if (f !== void 0) {
      const d = f.call(i, s);
      if (o(d) != 'object') return d;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(i);
  }
  function $(i, s) {
    if (typeof s !== 'function' && s !== null) throw new TypeError('Super expression must either be null or a function');
    i.prototype = Object.create(s && s.prototype, { constructor: { value: i, writable: !0, configurable: !0 } }), Object.defineProperty(i, 'prototype', { writable: !1 }), s && V(i, s);
  }
  function V(i, s) {
    return V = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (f, d) {
      return f.__proto__ = d, f;
    }, V(i, s);
  }
  function T(i) {
    const s = K();
    return function () {
      let f; const
        d = J(i);
      if (s) {
        const a = J(this).constructor;
        f = Reflect.construct(d, arguments, a);
      } else f = d.apply(this, arguments);
      return ee(this, f);
    };
  }
  function ee(i, s) {
    if (s && (o(s) == 'object' || typeof s === 'function')) return s;
    if (s !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return F(i);
  }
  function F(i) {
    if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return i;
  }
  function K() {
    try {
      var i = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
      }));
    } catch {
    }
    return (K = function () {
      return !!i;
    })();
  }
  function J(i) {
    return J = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, J(i);
  }
  const U = function (s) {
    let f;
    return s.infinite ? f = Math.ceil(s.slideCount / s.slidesToScroll) : f = Math.ceil((s.slideCount - s.slidesToShow) / s.slidesToScroll) + 1, f;
  };
  return ye.Dots = /* @__PURE__ */ (function (i) {
    $(f, i);
    const s = T(f);
    function f() {
      return I(this, f), s.apply(this, arguments);
    }
    return M(f, [{
      key: 'clickHandler',
      value(a, r) {
        r.preventDefault(), this.props.clickHandler(a);
      },
    }, {
      key: 'render',
      value() {
        for (var a = this.props, r = a.onMouseEnter, v = a.onMouseOver, S = a.onMouseLeave, u = a.infinite, m = a.slidesToScroll, O = a.slidesToShow, P = a.slideCount, t = a.currentSlide, W = U({
            slideCount: P,
            slidesToScroll: m,
            slidesToShow: O,
            infinite: u,
          }), l = {
            onMouseEnter: r,
            onMouseOver: v,
            onMouseLeave: S,
          }, e = [], n = 0; n < W; n++) {
          const p = (n + 1) * m - 1; const k = u ? p : (0, b.clamp)(p, 0, P - 1); const w = k - (m - 1); const C = u ? w : (0, b.clamp)(w, 0, P - 1); const _ = (0, h.default)({
            'slick-active': u ? t >= C && t <= k : t === C,
          }); const j = {
            message: 'dots',
            index: n,
            slidesToScroll: m,
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
        }, l));
      },
    }]), f;
  }(c.default.PureComponent)), ye;
}
const se = {}; let
  Ge;
function pt() {
  if (Ge) return se;
  Ge = 1;
  function o(i) {
    '@babel/helpers - typeof';

    return o = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (s) {
      return typeof s;
    } : function (s) {
      return s && typeof Symbol === 'function' && s.constructor === Symbol && s !== Symbol.prototype ? 'symbol' : typeof s;
    }, o(i);
  }
  Object.defineProperty(se, '__esModule', {
    value: !0,
  }), se.PrevArrow = se.NextArrow = void 0;
  const c = y(ue); const h = y(_e()); const
    b = ge();
  function y(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function (i) {
      for (let s = 1; s < arguments.length; s++) {
        const f = arguments[s];
        for (const d in f) ({}).hasOwnProperty.call(f, d) && (i[d] = f[d]);
      }
      return i;
    }, g.apply(null, arguments);
  }
  function x(i, s) {
    const f = Object.keys(i);
    if (Object.getOwnPropertySymbols) {
      let d = Object.getOwnPropertySymbols(i);
      s && (d = d.filter((a) => Object.getOwnPropertyDescriptor(i, a).enumerable)), f.push.apply(f, d);
    }
    return f;
  }
  function L(i) {
    for (let s = 1; s < arguments.length; s++) {
      var f = arguments[s] != null ? arguments[s] : {};
      s % 2 ? x(Object(f), !0).forEach((d) => {
        I(i, d, f[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(f)) : x(Object(f)).forEach((d) => {
        Object.defineProperty(i, d, Object.getOwnPropertyDescriptor(f, d));
      });
    }
    return i;
  }
  function I(i, s, f) {
    return (s = Q(s)) in i ? Object.defineProperty(i, s, {
      value: f, enumerable: !0, configurable: !0, writable: !0,
    }) : i[s] = f, i;
  }
  function z(i, s) {
    if (!(i instanceof s)) throw new TypeError('Cannot call a class as a function');
  }
  function M(i, s) {
    for (let f = 0; f < s.length; f++) {
      const d = s[f];
      d.enumerable = d.enumerable || !1, d.configurable = !0, 'value' in d && (d.writable = !0), Object.defineProperty(i, Q(d.key), d);
    }
  }
  function Y(i, s, f) {
    return s && M(i.prototype, s), Object.defineProperty(i, 'prototype', { writable: !1 }), i;
  }
  function Q(i) {
    const s = $(i, 'string');
    return o(s) == 'symbol' ? s : `${s}`;
  }
  function $(i, s) {
    if (o(i) != 'object' || !i) return i;
    const f = i[Symbol.toPrimitive];
    if (f !== void 0) {
      const d = f.call(i, s);
      if (o(d) != 'object') return d;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(i);
  }
  function V(i, s) {
    if (typeof s !== 'function' && s !== null) throw new TypeError('Super expression must either be null or a function');
    i.prototype = Object.create(s && s.prototype, { constructor: { value: i, writable: !0, configurable: !0 } }), Object.defineProperty(i, 'prototype', { writable: !1 }), s && T(i, s);
  }
  function T(i, s) {
    return T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (f, d) {
      return f.__proto__ = d, f;
    }, T(i, s);
  }
  function ee(i) {
    const s = J();
    return function () {
      let f; const
        d = U(i);
      if (s) {
        const a = U(this).constructor;
        f = Reflect.construct(d, arguments, a);
      } else f = d.apply(this, arguments);
      return F(this, f);
    };
  }
  function F(i, s) {
    if (s && (o(s) == 'object' || typeof s === 'function')) return s;
    if (s !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return K(i);
  }
  function K(i) {
    if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return i;
  }
  function J() {
    try {
      var i = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
      }));
    } catch {
    }
    return (J = function () {
      return !!i;
    })();
  }
  function U(i) {
    return U = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, U(i);
  }
  return se.PrevArrow = /* @__PURE__ */ (function (i) {
    V(f, i);
    const s = ee(f);
    function f() {
      return z(this, f), s.apply(this, arguments);
    }
    return Y(f, [{
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
        const S = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount,
        };
        let u;
        return this.props.prevArrow ? u = /* @__PURE__ */ c.default.cloneElement(this.props.prevArrow, L(L({}, v), S)) : u = /* @__PURE__ */ c.default.createElement('button', g({
          key: '0',
          type: 'button',
        }, v), ' ', 'Previous'), u;
      },
    }]), f;
  }(c.default.PureComponent)), se.NextArrow = /* @__PURE__ */ (function (i) {
    V(f, i);
    const s = ee(f);
    function f() {
      return z(this, f), s.apply(this, arguments);
    }
    return Y(f, [{
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
        (0, b.canGoNext)(this.props) || (a['slick-disabled'] = !0, r = null);
        const v = {
          key: '1',
          'data-role': 'none',
          className: (0, h.default)(a),
          style: {
            display: 'block',
          },
          onClick: r,
        };
        const S = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount,
        };
        let u;
        return this.props.nextArrow ? u = /* @__PURE__ */ c.default.cloneElement(this.props.nextArrow, L(L({}, v), S)) : u = /* @__PURE__ */ c.default.createElement('button', g({
          key: '1',
          type: 'button',
        }, v), ' ', 'Next'), u;
      },
    }]), f;
  }(c.default.PureComponent)), se;
}
const Je = (function () {
  if (typeof Map < 'u') return Map;
  function o(c, h) {
    let b = -1;
    return c.some((y, g) => (y[0] === h ? (b = g, !0) : !1)), b;
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
        const b = o(this.__entries__, h); const
          y = this.__entries__[b];
        return y && y[1];
      }, c.prototype.set = function (h, b) {
        const y = o(this.__entries__, h);
        ~y ? this.__entries__[y][1] = b : this.__entries__.push([h, b]);
      }, c.prototype.delete = function (h) {
        const b = this.__entries__; const
          y = o(b, h);
        ~y && b.splice(y, 1);
      }, c.prototype.has = function (h) {
        return !!~o(this.__entries__, h);
      }, c.prototype.clear = function () {
        this.__entries__.splice(0);
      }, c.prototype.forEach = function (h, b) {
        b === void 0 && (b = null);
        for (let y = 0, g = this.__entries__; y < g.length; y++) {
          const x = g[y];
          h.call(b, x[1], x[0]);
        }
      }, c;
    })()
  );
}());
const Re = typeof window < 'u' && typeof document < 'u' && window.document === document;
const we = (function () {
  return typeof global < 'u' && global.Math === Math ? global : typeof self < 'u' && self.Math === Math ? self : typeof window < 'u' && window.Math === Math ? window : Function('return this')();
}());
const vt = (function () {
  return typeof requestAnimationFrame === 'function' ? requestAnimationFrame.bind(we) : function (o) {
    return setTimeout(() => o(Date.now()), 1e3 / 60);
  };
}());
const ht = 2;
function yt(o, c) {
  let h = !1; let b = !1; let
    y = 0;
  function g() {
    h && (h = !1, o()), b && L();
  }
  function x() {
    vt(g);
  }
  function L() {
    const I = Date.now();
    if (h) {
      if (I - y < ht) return;
      b = !0;
    } else h = !0, b = !1, setTimeout(x, c);
    y = I;
  }
  return L;
}
const gt = 20; const bt = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; const mt = typeof MutationObserver < 'u'; const St = (
  /** @class */
  (function () {
    function o() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = yt(this.refresh.bind(this), gt);
    }
    return o.prototype.addObserver = function (c) {
      ~this.observers_.indexOf(c) || this.observers_.push(c), this.connected_ || this.connect_();
    }, o.prototype.removeObserver = function (c) {
      const h = this.observers_; const
        b = h.indexOf(c);
      ~b && h.splice(b, 1), !h.length && this.connected_ && this.disconnect_();
    }, o.prototype.refresh = function () {
      const c = this.updateObservers_();
      c && this.refresh();
    }, o.prototype.updateObservers_ = function () {
      const c = this.observers_.filter((h) => (h.gatherActive(), h.hasActive()));
      return c.forEach((h) => h.broadcastActive()), c.length > 0;
    }, o.prototype.connect_ = function () {
      !Re || this.connected_ || (document.addEventListener('transitionend', this.onTransitionEnd_), window.addEventListener('resize', this.refresh), mt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0,
      })) : (document.addEventListener('DOMSubtreeModified', this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, o.prototype.disconnect_ = function () {
      !Re || !this.connected_ || (document.removeEventListener('transitionend', this.onTransitionEnd_), window.removeEventListener('resize', this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener('DOMSubtreeModified', this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, o.prototype.onTransitionEnd_ = function (c) {
      const h = c.propertyName; const b = h === void 0 ? '' : h; const
        y = bt.some((g) => !!~b.indexOf(g));
      y && this.refresh();
    }, o.getInstance = function () {
      return this.instance_ || (this.instance_ = new o()), this.instance_;
    }, o.instance_ = null, o;
  })()
); const Qe = (function (o, c) {
  for (let h = 0, b = Object.keys(c); h < b.length; h++) {
    const y = b[h];
    Object.defineProperty(o, y, {
      value: c[y],
      enumerable: !1,
      writable: !1,
      configurable: !0,
    });
  }
  return o;
}); const fe = (function (o) {
  const c = o && o.ownerDocument && o.ownerDocument.defaultView;
  return c || we;
}); const
  Ze = ke(0, 0, 0, 0);
function Oe(o) {
  return parseFloat(o) || 0;
}
function Be(o) {
  for (var c = [], h = 1; h < arguments.length; h++) c[h - 1] = arguments[h];
  return c.reduce((b, y) => {
    const g = o[`border-${y}-width`];
    return b + Oe(g);
  }, 0);
}
function wt(o) {
  for (var c = ['top', 'right', 'bottom', 'left'], h = {}, b = 0, y = c; b < y.length; b++) {
    const g = y[b]; const
      x = o[`padding-${g}`];
    h[g] = Oe(x);
  }
  return h;
}
function Ot(o) {
  const c = o.getBBox();
  return ke(0, 0, c.width, c.height);
}
function _t(o) {
  const c = o.clientWidth; const
    h = o.clientHeight;
  if (!c && !h) return Ze;
  const b = fe(o).getComputedStyle(o); const y = wt(b); const g = y.left + y.right; const x = y.top + y.bottom; let L = Oe(b.width); let
    I = Oe(b.height);
  if (b.boxSizing === 'border-box' && (Math.round(L + g) !== c && (L -= Be(b, 'left', 'right') + g), Math.round(I + x) !== h && (I -= Be(b, 'top', 'bottom') + x)), !Pt(o)) {
    const z = Math.round(L + g) - c; const
      M = Math.round(I + x) - h;
    Math.abs(z) !== 1 && (L -= z), Math.abs(M) !== 1 && (I -= M);
  }
  return ke(y.left, y.top, L, I);
}
const kt = /* @__PURE__ */ (function () {
  return typeof SVGGraphicsElement < 'u' ? function (o) {
    return o instanceof fe(o).SVGGraphicsElement;
  } : function (o) {
    return o instanceof fe(o).SVGElement && typeof o.getBBox === 'function';
  };
}());
function Pt(o) {
  return o === fe(o).document.documentElement;
}
function Tt(o) {
  return Re ? kt(o) ? Ot(o) : _t(o) : Ze;
}
function Ct(o) {
  const c = o.x; const h = o.y; const b = o.width; const y = o.height; const g = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object; const
    x = Object.create(g.prototype);
  return Qe(x, {
    x: c,
    y: h,
    width: b,
    height: y,
    top: h,
    right: c + b,
    bottom: y + h,
    left: c,
  }), x;
}
function ke(o, c, h, b) {
  return {
    x: o, y: c, width: h, height: b,
  };
}
const jt = (
  /** @class */
  (function () {
    function o(c) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ke(0, 0, 0, 0), this.target = c;
    }
    return o.prototype.isActive = function () {
      const c = Tt(this.target);
      return this.contentRect_ = c, c.width !== this.broadcastWidth || c.height !== this.broadcastHeight;
    }, o.prototype.broadcastRect = function () {
      const c = this.contentRect_;
      return this.broadcastWidth = c.width, this.broadcastHeight = c.height, c;
    }, o;
  })()
); const Et = (
  /** @class */
  /* @__PURE__ */ (function () {
    function o(c, h) {
      const b = Ct(h);
      Qe(this, { target: c, contentRect: b });
    }
    return o;
  })()
); const Lt = (
  /** @class */
  (function () {
    function o(c, h, b) {
      if (this.activeObservations_ = [], this.observations_ = new Je(), typeof c !== 'function') throw new TypeError('The callback provided as parameter 1 is not a function.');
      this.callback_ = c, this.controller_ = h, this.callbackCtx_ = b;
    }
    return o.prototype.observe = function (c) {
      if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
      if (!(typeof Element > 'u' || !(Element instanceof Object))) {
        if (!(c instanceof fe(c).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        const h = this.observations_;
        h.has(c) || (h.set(c, new jt(c)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, o.prototype.unobserve = function (c) {
      if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
      if (!(typeof Element > 'u' || !(Element instanceof Object))) {
        if (!(c instanceof fe(c).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        const h = this.observations_;
        h.has(c) && (h.delete(c), h.size || this.controller_.removeObserver(this));
      }
    }, o.prototype.disconnect = function () {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, o.prototype.gatherActive = function () {
      const c = this;
      this.clearActive(), this.observations_.forEach((h) => {
        h.isActive() && c.activeObservations_.push(h);
      });
    }, o.prototype.broadcastActive = function () {
      if (this.hasActive()) {
        const c = this.callbackCtx_; const
          h = this.activeObservations_.map((b) => new Et(b.target, b.broadcastRect()));
        this.callback_.call(c, h, c), this.clearActive();
      }
    }, o.prototype.clearActive = function () {
      this.activeObservations_.splice(0);
    }, o.prototype.hasActive = function () {
      return this.activeObservations_.length > 0;
    }, o;
  })()
); const et = typeof WeakMap < 'u' ? /* @__PURE__ */ new WeakMap() : new Je(); const
  tt = (
  /** @class */
  /* @__PURE__ */ (function () {
      function o(c) {
        if (!(this instanceof o)) throw new TypeError('Cannot call a class as a function.');
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
        const h = St.getInstance(); const
          b = new Lt(c, h, this);
        et.set(this, b);
      }
      return o;
    })()
  );
[
  'observe',
  'unobserve',
  'disconnect',
].forEach((o) => {
  tt.prototype[o] = function () {
    let c;
    return (c = et.get(this))[o].apply(c, arguments);
  };
});
const xt = (function () {
  return typeof we.ResizeObserver < 'u' ? we.ResizeObserver : tt;
}());
const Mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xt,
}, Symbol.toStringTag, { value: 'Module' })); const
  Rt = /* @__PURE__ */ st(Mt);
let Xe;
function zt() {
  if (Xe) return ve;
  Xe = 1, Object.defineProperty(ve, '__esModule', {
    value: !0,
  }), ve.InnerSlider = void 0;
  const o = z(ue); const c = z(ut()); const h = z(ct()); const b = z(_e()); const y = ge(); const g = ft(); const x = dt(); const L = pt(); const
    I = z(Rt);
  function z(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function M(u) {
    '@babel/helpers - typeof';

    return M = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (m) {
      return typeof m;
    } : function (m) {
      return m && typeof Symbol === 'function' && m.constructor === Symbol && m !== Symbol.prototype ? 'symbol' : typeof m;
    }, M(u);
  }
  function Y() {
    return Y = Object.assign ? Object.assign.bind() : function (u) {
      for (let m = 1; m < arguments.length; m++) {
        const O = arguments[m];
        for (const P in O) ({}).hasOwnProperty.call(O, P) && (u[P] = O[P]);
      }
      return u;
    }, Y.apply(null, arguments);
  }
  function Q(u, m) {
    if (u == null) return {};
    let O; let P; const
      t = $(u, m);
    if (Object.getOwnPropertySymbols) {
      const W = Object.getOwnPropertySymbols(u);
      for (P = 0; P < W.length; P++) O = W[P], m.includes(O) || {}.propertyIsEnumerable.call(u, O) && (t[O] = u[O]);
    }
    return t;
  }
  function $(u, m) {
    if (u == null) return {};
    const O = {};
    for (const P in u) {
      if ({}.hasOwnProperty.call(u, P)) {
        if (m.includes(P)) continue;
        O[P] = u[P];
      }
    }
    return O;
  }
  function V(u, m) {
    const O = Object.keys(u);
    if (Object.getOwnPropertySymbols) {
      let P = Object.getOwnPropertySymbols(u);
      m && (P = P.filter((t) => Object.getOwnPropertyDescriptor(u, t).enumerable)), O.push.apply(O, P);
    }
    return O;
  }
  function T(u) {
    for (let m = 1; m < arguments.length; m++) {
      var O = arguments[m] != null ? arguments[m] : {};
      m % 2 ? V(Object(O), !0).forEach((P) => {
        r(u, P, O[P]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(O)) : V(Object(O)).forEach((P) => {
        Object.defineProperty(u, P, Object.getOwnPropertyDescriptor(O, P));
      });
    }
    return u;
  }
  function ee(u, m) {
    if (!(u instanceof m)) throw new TypeError('Cannot call a class as a function');
  }
  function F(u, m) {
    for (let O = 0; O < m.length; O++) {
      const P = m[O];
      P.enumerable = P.enumerable || !1, P.configurable = !0, 'value' in P && (P.writable = !0), Object.defineProperty(u, v(P.key), P);
    }
  }
  function K(u, m, O) {
    return m && F(u.prototype, m), Object.defineProperty(u, 'prototype', { writable: !1 }), u;
  }
  function J(u, m) {
    if (typeof m !== 'function' && m !== null) throw new TypeError('Super expression must either be null or a function');
    u.prototype = Object.create(m && m.prototype, { constructor: { value: u, writable: !0, configurable: !0 } }), Object.defineProperty(u, 'prototype', { writable: !1 }), m && U(u, m);
  }
  function U(u, m) {
    return U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (O, P) {
      return O.__proto__ = P, O;
    }, U(u, m);
  }
  function i(u) {
    const m = d();
    return function () {
      let O; const
        P = a(u);
      if (m) {
        const t = a(this).constructor;
        O = Reflect.construct(P, arguments, t);
      } else O = P.apply(this, arguments);
      return s(this, O);
    };
  }
  function s(u, m) {
    if (m && (M(m) == 'object' || typeof m === 'function')) return m;
    if (m !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
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
    return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (m) {
      return m.__proto__ || Object.getPrototypeOf(m);
    }, a(u);
  }
  function r(u, m, O) {
    return (m = v(m)) in u ? Object.defineProperty(u, m, {
      value: O, enumerable: !0, configurable: !0, writable: !0,
    }) : u[m] = O, u;
  }
  function v(u) {
    const m = S(u, 'string');
    return M(m) == 'symbol' ? m : `${m}`;
  }
  function S(u, m) {
    if (M(u) != 'object' || !u) return u;
    const O = u[Symbol.toPrimitive];
    if (O !== void 0) {
      const P = O.call(u, m);
      if (M(P) != 'object') return P;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (m === 'string' ? String : Number)(u);
  }
  return ve.InnerSlider = /* @__PURE__ */ (function (u) {
    J(O, u);
    const m = i(O);
    function O(P) {
      let t;
      ee(this, O), t = m.call(this, P), r(f(t), 'listRefHandler', (l) => t.list = l), r(f(t), 'trackRefHandler', (l) => t.track = l), r(f(t), 'adaptHeight', () => {
        if (t.props.adaptiveHeight && t.list) {
          const l = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
          t.list.style.height = `${(0, y.getHeight)(l)}px`;
        }
      }), r(f(t), 'componentDidMount', () => {
        if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
          const l = (0, y.getOnDemandLazySlides)(T(T({}, t.props), t.state));
          l.length > 0 && (t.setState((n) => ({
            lazyLoadedList: n.lazyLoadedList.concat(l),
          })), t.props.onLazyLoad && t.props.onLazyLoad(l));
        }
        const e = T({
          listRef: t.list,
          trackRef: t.track,
        }, t.props);
        t.updateState(e, !0, () => {
          t.adaptHeight(), t.props.autoplay && t.autoPlay('update');
        }), t.props.lazyLoad === 'progressive' && (t.lazyLoadTimer = setInterval(t.progressiveLazyLoad, 1e3)), t.ro = new I.default(() => {
          t.state.animating ? (t.onWindowResized(!1), t.callbackTimers.push(setTimeout(() => t.onWindowResized(), t.props.speed))) : t.onWindowResized();
        }), t.ro.observe(t.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll('.slick-slide'), (n) => {
          n.onfocus = t.props.pauseOnFocus ? t.onSlideFocus : null, n.onblur = t.props.pauseOnFocus ? t.onSlideBlur : null;
        }), window.addEventListener ? window.addEventListener('resize', t.onWindowResized) : window.attachEvent('onresize', t.onWindowResized);
      }), r(f(t), 'componentWillUnmount', () => {
        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach((l) => clearTimeout(l)), t.callbackTimers = []), window.addEventListener ? window.removeEventListener('resize', t.onWindowResized) : window.detachEvent('onresize', t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
      }), r(f(t), 'componentDidUpdate', (l) => {
        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
          const e = (0, y.getOnDemandLazySlides)(T(T({}, t.props), t.state));
          e.length > 0 && (t.setState((k) => ({
            lazyLoadedList: k.lazyLoadedList.concat(e),
          })), t.props.onLazyLoad && t.props.onLazyLoad(e));
        }
        t.adaptHeight();
        const n = T(T({
          listRef: t.list,
          trackRef: t.track,
        }, t.props), t.state); const
          p = t.didPropsChange(l);
        p && t.updateState(n, p, () => {
          t.state.currentSlide >= o.default.Children.count(t.props.children) && t.changeSlide({
            message: 'index',
            index: o.default.Children.count(t.props.children) - t.props.slidesToShow,
            currentSlide: t.state.currentSlide,
          }), t.props.autoplay ? t.autoPlay('update') : t.pause('paused');
        });
      }), r(f(t), 'onWindowResized', (l) => {
        t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, h.default)(() => t.resizeWindow(l), 50), t.debouncedResize();
      }), r(f(t), 'resizeWindow', function () {
        const l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0; const
          e = !!(t.track && t.track.node);
        if (e) {
          const n = T(T({
            listRef: t.list,
            trackRef: t.track,
          }, t.props), t.state);
          t.updateState(n, l, () => {
            t.props.autoplay ? t.autoPlay('update') : t.pause('paused');
          }), t.setState({
            animating: !1,
          }), clearTimeout(t.animationEndCallback), delete t.animationEndCallback;
        }
      }), r(f(t), 'updateState', (l, e, n) => {
        const p = (0, y.initializedState)(l);
        l = T(T(T({}, l), p), {}, {
          slideIndex: p.currentSlide,
        });
        const k = (0, y.getTrackLeft)(l);
        l = T(T({}, l), {}, {
          left: k,
        });
        const w = (0, y.getTrackCSS)(l);
        (e || o.default.Children.count(t.props.children) !== o.default.Children.count(l.children)) && (p.trackStyle = w), t.setState(p, n);
      }), r(f(t), 'ssrInit', () => {
        if (t.props.variableWidth) {
          let l = 0; let e = 0; const n = []; const p = (0, y.getPreClones)(T(T(T({}, t.props), t.state), {}, {
            slideCount: t.props.children.length,
          })); const
            k = (0, y.getPostClones)(T(T(T({}, t.props), t.state), {}, {
              slideCount: t.props.children.length,
            }));
          t.props.children.forEach((te) => {
            n.push(te.props.style.width), l += te.props.style.width;
          });
          for (let w = 0; w < p; w++) e += n[n.length - 1 - w], l += n[n.length - 1 - w];
          for (let C = 0; C < k; C++) l += n[C];
          for (let _ = 0; _ < t.state.currentSlide; _++) e += n[_];
          const j = {
            width: `${l}px`,
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
        const H = o.default.Children.count(t.props.children); const A = T(T(T({}, t.props), t.state), {}, {
          slideCount: H,
        }); const X = (0, y.getPreClones)(A) + (0, y.getPostClones)(A) + H; const B = 100 / t.props.slidesToShow * X; const q = 100 / X; let
          D = -q * ((0, y.getPreClones)(A) + t.state.currentSlide) * B / 100;
        t.props.centerMode && (D += (100 - q * B / 100) / 2);
        const G = {
          width: `${B}%`,
          left: `${D}%`,
        };
        return {
          slideWidth: `${q}%`,
          trackStyle: G,
        };
      }), r(f(t), 'checkImagesLoad', () => {
        const l = t.list && t.list.querySelectorAll && t.list.querySelectorAll('.slick-slide img') || []; const e = l.length; let
          n = 0;
        Array.prototype.forEach.call(l, (p) => {
          const k = function () {
            return ++n && n >= e && t.onWindowResized();
          };
          if (!p.onclick) {
            p.onclick = function () {
              return p.parentNode.focus();
            };
          } else {
            const w = p.onclick;
            p.onclick = function (C) {
              w(C), p.parentNode.focus();
            };
          }
          p.onload || (t.props.lazyLoad ? p.onload = function () {
            t.adaptHeight(), t.callbackTimers.push(setTimeout(t.onWindowResized, t.props.speed));
          } : (p.onload = k, p.onerror = function () {
            k(), t.props.onLazyLoadError && t.props.onLazyLoadError();
          }));
        });
      }), r(f(t), 'progressiveLazyLoad', () => {
        for (var l = [], e = T(T({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, y.getPostClones)(e); n++) {
          if (t.state.lazyLoadedList.indexOf(n) < 0) {
            l.push(n);
            break;
          }
        }
        for (let p = t.state.currentSlide - 1; p >= -(0, y.getPreClones)(e); p--) {
          if (t.state.lazyLoadedList.indexOf(p) < 0) {
            l.push(p);
            break;
          }
        }
        l.length > 0 ? (t.setState((k) => ({
          lazyLoadedList: k.lazyLoadedList.concat(l),
        })), t.props.onLazyLoad && t.props.onLazyLoad(l)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
      }), r(f(t), 'slideHandler', function (l) {
        const e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; const n = t.props; const p = n.asNavFor; const k = n.beforeChange; const w = n.onLazyLoad; const C = n.speed; const _ = n.afterChange; const j = t.state.currentSlide; const N = (0, y.slideHandler)(T(T(T({
          index: l,
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e,
        })); const H = N.state; const
          A = N.nextState;
        if (H) {
          k && k(j, H.currentSlide);
          const X = H.lazyLoadedList.filter((B) => t.state.lazyLoadedList.indexOf(B) < 0);
          w && X.length > 0 && w(X), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), _ && _(j), delete t.animationEndCallback), t.setState(H, () => {
            p && t.asNavForIndex !== l && (t.asNavForIndex = l, p.innerSlider.slideHandler(l)), A && (t.animationEndCallback = setTimeout(() => {
              const B = A.animating; const
                q = Q(A, ['animating']);
              t.setState(q, () => {
                t.callbackTimers.push(setTimeout(() => t.setState({
                  animating: B,
                }), 10)), _ && _(H.currentSlide), delete t.animationEndCallback;
              });
            }, C));
          });
        }
      }), r(f(t), 'changeSlide', function (l) {
        const e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; const n = T(T({}, t.props), t.state); const
          p = (0, y.changeSlide)(n, l);
        if (!(p !== 0 && !p) && (e === !0 ? t.slideHandler(p, e) : t.slideHandler(p), t.props.autoplay && t.autoPlay('update'), t.props.focusOnSelect)) {
          const k = t.list.querySelectorAll('.slick-current');
          k[0] && k[0].focus();
        }
      }), r(f(t), 'clickHandler', (l) => {
        t.clickable === !1 && (l.stopPropagation(), l.preventDefault()), t.clickable = !0;
      }), r(f(t), 'keyHandler', (l) => {
        const e = (0, y.keyHandler)(l, t.props.accessibility, t.props.rtl);
        e !== '' && t.changeSlide({
          message: e,
        });
      }), r(f(t), 'selectHandler', (l) => {
        t.changeSlide(l);
      }), r(f(t), 'disableBodyScroll', () => {
        const l = function (n) {
          n = n || window.event, n.preventDefault && n.preventDefault(), n.returnValue = !1;
        };
        window.ontouchmove = l;
      }), r(f(t), 'enableBodyScroll', () => {
        window.ontouchmove = null;
      }), r(f(t), 'swipeStart', (l) => {
        t.props.verticalSwiping && t.disableBodyScroll();
        const e = (0, y.swipeStart)(l, t.props.swipe, t.props.draggable);
        e !== '' && t.setState(e);
      }), r(f(t), 'swipeMove', (l) => {
        const e = (0, y.swipeMove)(l, T(T(T({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide,
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(f(t), 'swipeEnd', (l) => {
        const e = (0, y.swipeEnd)(l, T(T(T({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide,
        }));
        if (e) {
          const n = e.triggerSlideHandler;
          delete e.triggerSlideHandler, t.setState(e), n !== void 0 && (t.slideHandler(n), t.props.verticalSwiping && t.enableBodyScroll());
        }
      }), r(f(t), 'touchEnd', (l) => {
        t.swipeEnd(l), t.clickable = !0;
      }), r(f(t), 'slickPrev', () => {
        t.callbackTimers.push(setTimeout(() => t.changeSlide({
          message: 'previous',
        }), 0));
      }), r(f(t), 'slickNext', () => {
        t.callbackTimers.push(setTimeout(() => t.changeSlide({
          message: 'next',
        }), 0));
      }), r(f(t), 'slickGoTo', function (l) {
        const e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (l = Number(l), isNaN(l)) return '';
        t.callbackTimers.push(setTimeout(() => t.changeSlide({
          message: 'index',
          index: l,
          currentSlide: t.state.currentSlide,
        }, e), 0));
      }), r(f(t), 'play', () => {
        let l;
        if (t.props.rtl) l = t.state.currentSlide - t.props.slidesToScroll;
        else if ((0, y.canGoNext)(T(T({}, t.props), t.state))) l = t.state.currentSlide + t.props.slidesToScroll;
        else return !1;
        t.slideHandler(l);
      }), r(f(t), 'autoPlay', (l) => {
        t.autoplayTimer && clearInterval(t.autoplayTimer);
        const e = t.state.autoplaying;
        if (l === 'update') {
          if (e === 'hovered' || e === 'focused' || e === 'paused') return;
        } else if (l === 'leave') {
          if (e === 'paused' || e === 'focused') return;
        } else if (l === 'blur' && (e === 'paused' || e === 'hovered')) return;
        t.autoplayTimer = setInterval(t.play, t.props.autoplaySpeed + 50), t.setState({
          autoplaying: 'playing',
        });
      }), r(f(t), 'pause', (l) => {
        t.autoplayTimer && (clearInterval(t.autoplayTimer), t.autoplayTimer = null);
        const e = t.state.autoplaying;
        l === 'paused' ? t.setState({
          autoplaying: 'paused',
        }) : l === 'focused' ? (e === 'hovered' || e === 'playing') && t.setState({
          autoplaying: 'focused',
        }) : e === 'playing' && t.setState({
          autoplaying: 'hovered',
        });
      }), r(f(t), 'onDotsOver', () => t.props.autoplay && t.pause('hovered')), r(f(t), 'onDotsLeave', () => t.props.autoplay && t.state.autoplaying === 'hovered' && t.autoPlay('leave')), r(f(t), 'onTrackOver', () => t.props.autoplay && t.pause('hovered')), r(f(t), 'onTrackLeave', () => t.props.autoplay && t.state.autoplaying === 'hovered' && t.autoPlay('leave')), r(f(t), 'onSlideFocus', () => t.props.autoplay && t.pause('focused')), r(f(t), 'onSlideBlur', () => t.props.autoplay && t.state.autoplaying === 'focused' && t.autoPlay('blur')), r(f(t), 'render', () => {
        const l = (0, b.default)('slick-slider', t.props.className, {
          'slick-vertical': t.props.vertical,
          'slick-initialized': !0,
        }); const e = T(T({}, t.props), t.state); let n = (0, y.extractObject)(e, ['fade', 'cssEase', 'speed', 'infinite', 'centerMode', 'focusOnSelect', 'currentSlide', 'lazyLoad', 'lazyLoadedList', 'rtl', 'slideWidth', 'slideHeight', 'listHeight', 'vertical', 'slidesToShow', 'slidesToScroll', 'slideCount', 'trackStyle', 'variableWidth', 'unslick', 'centerPadding', 'targetSlide', 'useCSS']); const
          p = t.props.pauseOnHover;
        n = T(T({}, n), {}, {
          onMouseEnter: p ? t.onTrackOver : null,
          onMouseLeave: p ? t.onTrackLeave : null,
          onMouseOver: p ? t.onTrackOver : null,
          focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null,
        });
        let k;
        if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
          let w = (0, y.extractObject)(e, ['dotsClass', 'slideCount', 'slidesToShow', 'currentSlide', 'slidesToScroll', 'clickHandler', 'children', 'customPaging', 'infinite', 'appendDots']); const
            C = t.props.pauseOnDotsHover;
          w = T(T({}, w), {}, {
            clickHandler: t.changeSlide,
            onMouseEnter: C ? t.onDotsLeave : null,
            onMouseOver: C ? t.onDotsOver : null,
            onMouseLeave: C ? t.onDotsLeave : null,
          }), k = /* @__PURE__ */ o.default.createElement(x.Dots, w);
        }
        let _; let j; const
          N = (0, y.extractObject)(e, ['infinite', 'centerMode', 'currentSlide', 'slideCount', 'slidesToShow', 'prevArrow', 'nextArrow']);
        N.clickHandler = t.changeSlide, t.props.arrows && (_ = /* @__PURE__ */ o.default.createElement(L.PrevArrow, N), j = /* @__PURE__ */ o.default.createElement(L.NextArrow, N));
        let H = null;
        t.props.vertical && (H = {
          height: t.state.listHeight,
        });
        let A = null;
        t.props.vertical === !1 ? t.props.centerMode === !0 && (A = {
          padding: `0px ${t.props.centerPadding}`,
        }) : t.props.centerMode === !0 && (A = {
          padding: `${t.props.centerPadding} 0px`,
        });
        const X = T(T({}, H), A); const B = t.props.touchMove; let q = {
          className: 'slick-list',
          style: X,
          onClick: t.clickHandler,
          onMouseDown: B ? t.swipeStart : null,
          onMouseMove: t.state.dragging && B ? t.swipeMove : null,
          onMouseUp: B ? t.swipeEnd : null,
          onMouseLeave: t.state.dragging && B ? t.swipeEnd : null,
          onTouchStart: B ? t.swipeStart : null,
          onTouchMove: t.state.dragging && B ? t.swipeMove : null,
          onTouchEnd: B ? t.touchEnd : null,
          onTouchCancel: t.state.dragging && B ? t.swipeEnd : null,
          onKeyDown: t.props.accessibility ? t.keyHandler : null,
        }; let
          D = {
            className: l,
            dir: 'ltr',
            style: t.props.style,
          };
        return t.props.unslick && (q = {
          className: 'slick-list',
        }, D = {
          className: l,
          style: t.props.style,
        }), /* @__PURE__ */ o.default.createElement('div', D, t.props.unslick ? '' : _, /* @__PURE__ */ o.default.createElement('div', Y({
          ref: t.listRefHandler,
        }, q), /* @__PURE__ */ o.default.createElement(g.Track, Y({
          ref: t.trackRefHandler,
        }, n), t.props.children)), t.props.unslick ? '' : j, t.props.unslick ? '' : k);
      }), t.list = null, t.track = null, t.state = T(T({}, c.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: o.default.Children.count(t.props.children),
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      const W = t.ssrInit();
      return t.state = T(T({}, t.state), W), t;
    }
    return K(O, [{
      key: 'didPropsChange',
      value(t) {
        for (var W = !1, l = 0, e = Object.keys(this.props); l < e.length; l++) {
          const n = e[l];
          if (!t.hasOwnProperty(n)) {
            W = !0;
            break;
          }
          if (!(M(t[n]) === 'object' || typeof t[n] === 'function' || isNaN(t[n])) && t[n] !== this.props[n]) {
            W = !0;
            break;
          }
        }
        return W || o.default.Children.count(this.props.children) !== o.default.Children.count(t.children);
      },
    }]), O;
  }(o.default.Component)), ve;
}
let xe; let
  Ke;
function Dt() {
  if (Ke) return xe;
  Ke = 1;
  const o = function (c) {
    return c.replace(/[A-Z]/g, (h) => `-${h.toLowerCase()}`).toLowerCase();
  };
  return xe = o, xe;
}
let Me; let
  Ue;
function Nt() {
  if (Ue) return Me;
  Ue = 1;
  const o = Dt(); const c = function (y) {
    const g = /[height|width]$/;
    return g.test(y);
  }; const h = function (y) {
    let g = '';
    const x = Object.keys(y);
    return x.forEach((L, I) => {
      let z = y[L];
      L = o(L), c(L) && typeof z === 'number' && (z += 'px'), z === !0 ? g += L : z === !1 ? g += `not ${L}` : g += `(${L}: ${z})`, I < x.length - 1 && (g += ' and ');
    }), g;
  }; const
    b = function (y) {
      let g = '';
      return typeof y === 'string' ? y : y instanceof Array ? (y.forEach((x, L) => {
        g += h(x), L < y.length - 1 && (g += ', ');
      }), g) : h(y);
    };
  return Me = b, Me;
}
let Ye;
function Ht() {
  return Ye || (Ye = 1, (function (o) {
    Object.defineProperty(o, '__esModule', {
      value: !0,
    }), o.default = void 0;
    const c = x(ue); const h = zt(); const b = x(Nt()); const y = x(Ve()); const
      g = ge();
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
    function I() {
      return I = Object.assign ? Object.assign.bind() : function (d) {
        for (let a = 1; a < arguments.length; a++) {
          const r = arguments[a];
          for (const v in r) ({}).hasOwnProperty.call(r, v) && (d[v] = r[v]);
        }
        return d;
      }, I.apply(null, arguments);
    }
    function z(d, a) {
      const r = Object.keys(d);
      if (Object.getOwnPropertySymbols) {
        let v = Object.getOwnPropertySymbols(d);
        a && (v = v.filter((S) => Object.getOwnPropertyDescriptor(d, S).enumerable)), r.push.apply(r, v);
      }
      return r;
    }
    function M(d) {
      for (let a = 1; a < arguments.length; a++) {
        var r = arguments[a] != null ? arguments[a] : {};
        a % 2 ? z(Object(r), !0).forEach((v) => {
          i(d, v, r[v]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(r)) : z(Object(r)).forEach((v) => {
          Object.defineProperty(d, v, Object.getOwnPropertyDescriptor(r, v));
        });
      }
      return d;
    }
    function Y(d, a) {
      if (!(d instanceof a)) throw new TypeError('Cannot call a class as a function');
    }
    function Q(d, a) {
      for (let r = 0; r < a.length; r++) {
        const v = a[r];
        v.enumerable = v.enumerable || !1, v.configurable = !0, 'value' in v && (v.writable = !0), Object.defineProperty(d, s(v.key), v);
      }
    }
    function $(d, a, r) {
      return a && Q(d.prototype, a), Object.defineProperty(d, 'prototype', { writable: !1 }), d;
    }
    function V(d, a) {
      if (typeof a !== 'function' && a !== null) throw new TypeError('Super expression must either be null or a function');
      d.prototype = Object.create(a && a.prototype, { constructor: { value: d, writable: !0, configurable: !0 } }), Object.defineProperty(d, 'prototype', { writable: !1 }), a && T(d, a);
    }
    function T(d, a) {
      return T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (r, v) {
        return r.__proto__ = v, r;
      }, T(d, a);
    }
    function ee(d) {
      const a = J();
      return function () {
        let r; const
          v = U(d);
        if (a) {
          const S = U(this).constructor;
          r = Reflect.construct(v, arguments, S);
        } else r = v.apply(this, arguments);
        return F(this, r);
      };
    }
    function F(d, a) {
      if (a && (L(a) == 'object' || typeof a === 'function')) return a;
      if (a !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
      return K(d);
    }
    function K(d) {
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
    function U(d) {
      return U = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, U(d);
    }
    function i(d, a, r) {
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
    o.default = /* @__PURE__ */ (function (d) {
      V(r, d);
      const a = ee(r);
      function r(v) {
        let S;
        return Y(this, r), S = a.call(this, v), i(K(S), 'innerSliderRefHandler', (u) => S.innerSlider = u), i(K(S), 'slickPrev', () => S.innerSlider.slickPrev()), i(K(S), 'slickNext', () => S.innerSlider.slickNext()), i(K(S), 'slickGoTo', function (u) {
          const m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return S.innerSlider.slickGoTo(u, m);
        }), i(K(S), 'slickPause', () => S.innerSlider.pause('paused')), i(K(S), 'slickPlay', () => S.innerSlider.autoPlay('play')), S.state = {
          breakpoint: null,
        }, S._responsiveMediaHandlers = [], S;
      }
      return $(r, [{
        key: 'media',
        value(S, u) {
          const m = window.matchMedia(S); const
            O = function (t) {
              const W = t.matches;
              W && u();
            };
          m.addListener(O), this._responsiveMediaHandlers.push({
            mql: m,
            query: S,
            listener: O,
          });
        },
        // handles responsive breakpoints
      }, {
        key: 'componentDidMount',
        value() {
          const S = this;
          if (this.props.responsive) {
            const u = this.props.responsive.map((O) => O.breakpoint);
            u.sort((O, P) => O - P), u.forEach((O, P) => {
              let t;
              P === 0 ? t = (0, b.default)({
                minWidth: 0,
                maxWidth: O,
              }) : t = (0, b.default)({
                minWidth: u[P - 1] + 1,
                maxWidth: O,
              }), (0, g.canUseDOM)() && S.media(t, () => {
                S.setState({
                  breakpoint: O,
                });
              });
            });
            const m = (0, b.default)({
              minWidth: u.slice(-1)[0],
            });
            (0, g.canUseDOM)() && this.media(m, () => {
              S.setState({
                breakpoint: null,
              });
            });
          }
        },
      }, {
        key: 'componentWillUnmount',
        value() {
          this._responsiveMediaHandlers.forEach((S) => {
            S.mql.removeListener(S.listener);
          });
        },
      }, {
        key: 'render',
        value() {
          const S = this; let u; let
            m;
          this.state.breakpoint ? (m = this.props.responsive.filter((w) => w.breakpoint === S.state.breakpoint), u = m[0].settings === 'unslick' ? 'unslick' : M(M(M({}, y.default), this.props), m[0].settings)) : u = M(M({}, y.default), this.props), u.centerMode && (u.slidesToScroll > 1 && process.env.NODE_ENV !== 'production' && console.warn('slidesToScroll should be equal to 1 in centerMode, you are using '.concat(u.slidesToScroll)), u.slidesToScroll = 1), u.fade && (u.slidesToShow > 1 && process.env.NODE_ENV !== 'production' && console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(u.slidesToShow)), u.slidesToScroll > 1 && process.env.NODE_ENV !== 'production' && console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(u.slidesToScroll)), u.slidesToShow = 1, u.slidesToScroll = 1);
          let O = c.default.Children.toArray(this.props.children);
          O = O.filter((w) => (typeof w === 'string' ? !!w.trim() : !!w)), u.variableWidth && (u.rows > 1 || u.slidesPerRow > 1) && (console.warn('variableWidth is not supported in case of rows > 1 or slidesPerRow > 1'), u.variableWidth = !1);
          for (var P = [], t = null, W = 0; W < O.length; W += u.rows * u.slidesPerRow) {
            for (var l = [], e = W; e < W + u.rows * u.slidesPerRow; e += u.slidesPerRow) {
              for (var n = [], p = e; p < e + u.slidesPerRow && (u.variableWidth && O[p].props.style && (t = O[p].props.style.width), !(p >= O.length)); p += 1) {
                n.push(/* @__PURE__ */ c.default.cloneElement(O[p], {
                  key: 100 * W + 10 * e + p,
                  tabIndex: -1,
                  style: {
                    width: ''.concat(100 / u.slidesPerRow, '%'),
                    display: 'inline-block',
                  },
                }));
              }
              l.push(/* @__PURE__ */ c.default.createElement('div', {
                key: 10 * W + e,
              }, n));
            }
            u.variableWidth ? P.push(/* @__PURE__ */ c.default.createElement('div', {
              key: W,
              style: {
                width: t,
              },
            }, l)) : P.push(/* @__PURE__ */ c.default.createElement('div', {
              key: W,
            }, l));
          }
          if (u === 'unslick') {
            const k = `regular slider ${this.props.className || ''}`;
            return /* @__PURE__ */ c.default.createElement('div', {
              className: k,
            }, O);
          } P.length <= u.slidesToShow && (u.unslick = !0);
          return /* @__PURE__ */ c.default.createElement(h.InnerSlider, I({
            style: this.props.style,
            ref: this.innerSliderRefHandler,
          }, (0, g.filterSettings)(u)), P);
        },
      }]), r;
    }(c.default.Component));
  }(Te))), Te;
}
let $e;
function It() {
  return $e || ($e = 1, (function (o) {
    Object.defineProperty(o, '__esModule', {
      value: !0,
    }), o.default = void 0;
    const c = h(Ht());
    function h(b) {
      return b && b.__esModule ? b : { default: b };
    }
    o.default = c.default;
  }(Pe))), Pe;
}
const At = It();
const Wt = /* @__PURE__ */ lt(At);
function qt({
  title: o,
  titleId: c,
  ...h
}, b) {
  return /* @__PURE__ */ Se.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    strokeWidth: 1.5,
    stroke: 'currentColor',
    'aria-hidden': 'true',
    'data-slot': 'icon',
    ref: b,
    'aria-labelledby': c,
    ...h,
  }, o ? /* @__PURE__ */ Se.createElement('title', {
    id: c,
  }, o) : null, /* @__PURE__ */ Se.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3',
  }));
}
const Ft = /* @__PURE__ */ Se.forwardRef(qt); const Gt = ({
  text: o = 'Link',
  href: c = '#',
  variant: h = 'dark',
  // dark, light
  icon: b,
  className: y = '',
  ...g
}) => {
  const x = 'text-link';
  const L = (M) => {
    switch (M) {
      case 'light':
        return 'link-light';
      case 'dark':
        return 'link-dark';
      default:
        return 'link-dark';
    }
  };
  const I = b || Ft;
  const z = `${x} ${L(h)} ${y}`.trim();
  return /* @__PURE__ */ ce(
    'a',
    {
      href: c,
      className: z,
      ...g,
      children: [
        /* @__PURE__ */ ie('span', { children: o }),
        /* @__PURE__ */ ie(I, { className: 'text-link-icon' }),
      ],
    },
  );
}; const Bt = ({
  stacked: o = !0,
  // true = vertical stack, false = horizontal on md+
  imageUrl: c,
  imageAlt: h = 'News image',
  title: b,
  description: y,
  linkText: g = 'Read more',
  linkHref: x = '#',
  linkVariant: L = 'light',
  className: I = '',
  ...z
}) => {
  const M = it(); const Y = `
    w-full
    flex
    bg-grey-500
    rounded-[var(--spacing-cards-br)]
    overflow-hidden
    flex-col
    text-left
    ${o ? '' : 'md:flex-row'}
    ${I}
  `.trim().replace(/\s+/g, ' '); const Q = `
    w-full
    aspect-[441/269]
    bg-grey-200
    overflow-hidden
    ${o ? 'rounded-t-[var(--spacing-cards-br)]' : 'md:rounded-l-[var(--spacing-cards-br)]'}
    ${o ? '' : 'md:w-1/2'}
  `.trim().replace(/\s+/g, ' '); const
    $ = `
    w-full
    ${o ? '' : 'md:w-1/2'}
    p-resource-padding
    flex
    flex-col
    gap-resource-link--spacing-y
    flex-grow
    ${o ? 'rounded-b-[var(--spacing-cards-br)]' : 'md:rounded-r-[var(--spacing-cards-br)]'}
  `.trim().replace(/\s+/g, ' ');
  return /* @__PURE__ */ ce(
    'article',
    {
      className: Y,
      ...b ? { 'aria-labelledby': M } : { 'aria-label': 'News item' },
      ...z,
      children: [
        /* @__PURE__ */ ie('div', {
          className: Q,
          children: c && /* @__PURE__ */ ie(
            'img',
            {
              src: c,
              alt: h,
              className: 'w-full h-full object-cover',
            },
          ),
        }),
        /* @__PURE__ */ ce('div', {
          className: $,
          children: [
          /* @__PURE__ */ ce('div', {
              className: 'space-y-10',
              children: [
                b && /* @__PURE__ */ ie('h3', { id: M, className: 'text-headings-h3 font-semibold text-white', children: b }),
                y && /* @__PURE__ */ ie('p', { className: 'text-body-default text-white', children: y }),
              ],
            }),
            /* @__PURE__ */ ie('div', { className: 'mt-auto', children: /* @__PURE__ */ ie(Gt, { text: g, href: x, variant: L }) }),
          ],
        }),
      ],
    },
  );
}; const
  Ut = ({
    variant: o = 'stacked',
    // 'stacked' | 'row'
    columns: c = 3,
    // stacked: 2 | 3 | 4, row: 1 | 2
    carousel: h = !1,
    items: b = [],
    // Array of { imageUrl, imageAlt, title, description, linkText, linkHref, linkVariant }
    carouselLabel: y = 'News carousel',
    className: g = '',
    infinite: x = !0,
    ...L
  }) => {
    const [I, z] = De(0); const [M, Y] = De(1); const Q = ot(null); const $ = o === 'row'; const V = $ ? c === 2 ? 2 : 1 : [2, 3, 4].includes(c) ? c : 3; const T = () => {
      if ($) return V === 2 ? 'grid grid-cols-1 md:grid-cols-2 gap-24' : 'grid grid-cols-1 gap-24';
      switch (V) {
        case 2:
          return 'grid grid-cols-1 md:grid-cols-2 gap-24';
        case 4:
          return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24';
        case 3:
        default:
          return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24';
      }
    }; const ee = 'px-12'; const F = '-mx-12'; const
      K = V;
    at(() => {
      if (!h) return;
      const i = () => {
        const f = Q.current;
        if (!f) return;
        f.querySelectorAll('.slick-slide').forEach((a) => {
          a.getAttribute('aria-hidden') === 'true' ? a.setAttribute('inert', '') : a.removeAttribute('inert');
        });
        const d = f.querySelectorAll('.slick-slide[aria-hidden="false"]:not(.slick-cloned)');
        Y(Math.max(d.length, 1));
      }; const
        s = window.requestAnimationFrame(i);
      return () => window.cancelAnimationFrame(s);
    }, [h, I, b.length]);
    const J = {
      infinite: x,
      arrows: !1,
      dots: !0,
      slidesToShow: K,
      slidesToScroll: K,
      centerPadding: '0',
      afterChange: z,
      customPaging: (i) => /* @__PURE__ */ ie(
        'button',
        {
          type: 'button',
          'aria-label': `Go to carousel page ${i + 1}`,
        },
      ),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: Math.min(K, 2),
            slidesToScroll: 1,
            centerPadding: '0',
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '0',
          },
        },
      ],
    }; const
      U = (i, s) => /* @__PURE__ */ ie(
        Bt,
        {
          stacked: !$,
          imageUrl: i.imageUrl,
          imageAlt: i.imageAlt,
          title: i.title,
          description: i.description,
          linkText: i.linkText,
          linkHref: i.linkHref,
          ...i.attributes || {},
        },
        s,
      );
    return /* @__PURE__ */ ie(
      'div',
      {
        ref: h ? Q : null,
        className: `container ${g}`,
        ...h ? {
          role: 'region',
          'aria-roledescription': 'carousel',
          'aria-label': y,
        } : {},
        ...L,
        children: h ? /* @__PURE__ */ ce(nt, {
          children: [
            /* @__PURE__ */ ce('div', {
              'aria-live': 'polite',
              'aria-atomic': 'true',
              className: 'sr-only',
              children: [
                'Showing news items ',
                I + 1,
                ' to ',
                Math.min(I + M, b.length),
                ' of ',
                b.length,
              ],
            }),
            /* @__PURE__ */ ie(Wt, { ...J, className: `news-carousel ${F}`.trim(), children: b.map((i, s) => /* @__PURE__ */ ie('div', { className: ee, children: U(i, s) }, s)) }),
          ],
        }) : /* @__PURE__ */ ie('div', { className: T(), children: b.map((i, s) => U(i, s)) }),
      },
    );
  };
export {
  Ut as default,
};
