import { jsx as _, jsxs as ae, Fragment as He } from 'react/jsx-runtime';
import * as se from 'react';
import fe, {
  useMemo as We, Children as ct, isValidElement as qe, cloneElement as Ue,
} from 'react';
import ft from 'lottie-react';

const Oe = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof global < 'u' ? global : typeof self < 'u' ? self : {};
function dt(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, 'default') ? i.default : i;
}
function pt(i) {
  if (Object.prototype.hasOwnProperty.call(i, '__esModule')) return i;
  const a = i.default;
  if (typeof a === 'function') {
    var g = function b() {
      return this instanceof b ? Reflect.construct(a, arguments, this.constructor) : a.apply(this, arguments);
    };
    g.prototype = a.prototype;
  } else g = {};
  return Object.defineProperty(g, '__esModule', { value: !0 }), Object.keys(i).forEach((b) => {
    const m = Object.getOwnPropertyDescriptor(i, b);
    Object.defineProperty(g, b, m.get ? m : {
      enumerable: !0,
      get() {
        return i[b];
      },
    });
  }), g;
}
const Ce = {}; const je = {}; const ve = {}; const Ee = {}; let
  $e;
function ht() {
  return $e || ($e = 1, (function (i) {
    Object.defineProperty(i, '__esModule', {
      value: !0,
    }), i.default = void 0;
    const a = {
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
    i.default = a;
  }(Ee))), Ee;
}
let Le; let
  Fe;
function vt() {
  if (Fe) return Le;
  Fe = 1;
  const i = 'Expected a function';
  const a = NaN;
  const g = '[object Symbol]';
  const b = /^\s+|\s+$/g;
  const m = /^[-+]0x[0-9a-f]+$/i;
  const S = /^0b[01]+$/i;
  const M = /^0o[0-7]+$/i;
  const L = parseInt;
  const D = typeof Oe === 'object' && Oe && Oe.Object === Object && Oe;
  const z = typeof self === 'object' && self && self.Object === Object && self;
  const R = D || z || Function('return this')();
  const H = Object.prototype;
  const N = H.toString;
  const Q = Math.max;
  const I = Math.min;
  const x = function () {
    return R.Date.now();
  };
  function ee(s, c, d) {
    let p; let l; let r; let h; let v; let o; let f = 0; let w = !1; let k = !1; let
      t = !0;
    if (typeof s !== 'function') throw new TypeError(i);
    c = X(c) || 0, U(d) && (w = !!d.leading, k = 'maxWait' in d, r = k ? Q(X(d.maxWait) || 0, c) : r, t = 'trailing' in d ? !!d.trailing : t);
    function W(j) {
      const $ = p; const
        F = l;
      return p = l = void 0, f = j, h = s.apply(F, $), h;
    }
    function u(j) {
      return f = j, v = setTimeout(y, c), w ? W(j) : h;
    }
    function e(j) {
      const $ = j - o; const F = j - f; const
        B = c - $;
      return k ? I(B, r - F) : B;
    }
    function n(j) {
      const $ = j - o; const
        F = j - f;
      return o === void 0 || $ >= c || $ < 0 || k && F >= r;
    }
    function y() {
      const j = x();
      if (n(j)) return T(j);
      v = setTimeout(y, e(j));
    }
    function T(j) {
      return v = void 0, t && p ? W(j) : (p = l = void 0, h);
    }
    function O() {
      v !== void 0 && clearTimeout(v), f = 0, p = o = l = v = void 0;
    }
    function C() {
      return v === void 0 ? h : T(x());
    }
    function P() {
      const j = x(); const
        $ = n(j);
      if (p = arguments, l = this, o = j, $) {
        if (v === void 0) return u(o);
        if (k) return v = setTimeout(y, c), W(o);
      }
      return v === void 0 && (v = setTimeout(y, c)), h;
    }
    return P.cancel = O, P.flush = C, P;
  }
  function U(s) {
    const c = typeof s;
    return !!s && (c == 'object' || c == 'function');
  }
  function Y(s) {
    return !!s && typeof s === 'object';
  }
  function J(s) {
    return typeof s === 'symbol' || Y(s) && N.call(s) == g;
  }
  function X(s) {
    if (typeof s === 'number') return s;
    if (J(s)) return a;
    if (U(s)) {
      const c = typeof s.valueOf === 'function' ? s.valueOf() : s;
      s = U(c) ? `${c}` : c;
    }
    if (typeof s !== 'string') return s === 0 ? s : +s;
    s = s.replace(b, '');
    const d = S.test(s);
    return d || M.test(s) ? L(s.slice(2), d ? 2 : 8) : m.test(s) ? a : +s;
  }
  return Le = ee, Le;
}
const Me = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
let Be;
function Pe() {
  return Be || (Be = 1, (function (i) {
    (function () {
      const a = {}.hasOwnProperty;
      function g() {
        for (var S = '', M = 0; M < arguments.length; M++) {
          const L = arguments[M];
          L && (S = m(S, b(L)));
        }
        return S;
      }
      function b(S) {
        if (typeof S === 'string' || typeof S === 'number') return S;
        if (typeof S !== 'object') return '';
        if (Array.isArray(S)) return g.apply(null, S);
        if (S.toString !== Object.prototype.toString && !S.toString.toString().includes('[native code]')) return S.toString();
        let M = '';
        for (const L in S) a.call(S, L) && S[L] && (M = m(M, L));
        return M;
      }
      function m(S, M) {
        return M ? S ? `${S} ${M}` : S + M : S;
      }
      i.exports ? (g.default = g, i.exports = g) : window.classNames = g;
    }());
  }(Me))), Me.exports;
}
const E = {}; const Re = {}; let
  Ge;
function nt() {
  return Ge || (Ge = 1, (function (i) {
    Object.defineProperty(i, '__esModule', {
      value: !0,
    }), i.default = void 0;
    const a = g(fe);
    function g(m) {
      return m && m.__esModule ? m : { default: m };
    }
    const b = {
      accessibility: !0,
      adaptiveHeight: !1,
      afterChange: null,
      appendDots(S) {
        return /* @__PURE__ */ a.default.createElement('ul', {
          style: {
            display: 'block',
          },
        }, S);
      },
      arrows: !0,
      autoplay: !1,
      autoplaySpeed: 3e3,
      beforeChange: null,
      centerMode: !1,
      centerPadding: '50px',
      className: '',
      cssEase: 'ease',
      customPaging(S) {
        return /* @__PURE__ */ a.default.createElement('button', null, S + 1);
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
    i.default = b;
  }(Re))), Re;
}
let Xe;
function Se() {
  if (Xe) return E;
  Xe = 1, Object.defineProperty(E, '__esModule', {
    value: !0,
  }), E.checkSpecKeys = E.checkNavigable = E.changeSlide = E.canUseDOM = E.canGoNext = void 0, E.clamp = z, E.extractObject = void 0, E.filterSettings = W, E.validSettings = E.swipeStart = E.swipeMove = E.swipeEnd = E.slidesOnRight = E.slidesOnLeft = E.slideHandler = E.siblingDirection = E.safePreventDefault = E.lazyStartIndex = E.lazySlidesOnRight = E.lazySlidesOnLeft = E.lazyEndIndex = E.keyHandler = E.initializedState = E.getWidth = E.getTrackLeft = E.getTrackCSS = E.getTrackAnimateCSS = E.getTotalSlides = E.getSwipeDirection = E.getSlideCount = E.getRequiredLazySlides = E.getPreClones = E.getPostClones = E.getOnDemandLazySlides = E.getNavigableIndexes = E.getHeight = void 0;
  const i = g(fe); const
    a = g(nt());
  function g(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function b(u) {
    '@babel/helpers - typeof';

    return b = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) {
      return typeof e;
    } : function (e) {
      return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
    }, b(u);
  }
  function m(u, e) {
    const n = Object.keys(u);
    if (Object.getOwnPropertySymbols) {
      let y = Object.getOwnPropertySymbols(u);
      e && (y = y.filter((T) => Object.getOwnPropertyDescriptor(u, T).enumerable)), n.push.apply(n, y);
    }
    return n;
  }
  function S(u) {
    for (let e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2 ? m(Object(n), !0).forEach((y) => {
        M(u, y, n[y]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((y) => {
        Object.defineProperty(u, y, Object.getOwnPropertyDescriptor(n, y));
      });
    }
    return u;
  }
  function M(u, e, n) {
    return (e = L(e)) in u ? Object.defineProperty(u, e, {
      value: n, enumerable: !0, configurable: !0, writable: !0,
    }) : u[e] = n, u;
  }
  function L(u) {
    const e = D(u, 'string');
    return b(e) == 'symbol' ? e : `${e}`;
  }
  function D(u, e) {
    if (b(u) != 'object' || !u) return u;
    const n = u[Symbol.toPrimitive];
    if (n !== void 0) {
      const y = n.call(u, e);
      if (b(y) != 'object') return y;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (e === 'string' ? String : Number)(u);
  }
  function z(u, e, n) {
    return Math.max(e, Math.min(u, n));
  }
  const R = E.safePreventDefault = function (e) {
    const n = ['onTouchStart', 'onTouchMove', 'onWheel'];
    n.includes(e._reactName) || e.preventDefault();
  }; const
    H = E.getOnDemandLazySlides = function (e) {
      for (var n = [], y = N(e), T = Q(e), O = y; O < T; O++) e.lazyLoadedList.indexOf(O) < 0 && n.push(O);
      return n;
    };
  E.getRequiredLazySlides = function (e) {
    for (var n = [], y = N(e), T = Q(e), O = y; O < T; O++) n.push(O);
    return n;
  };
  var N = E.lazyStartIndex = function (e) {
    return e.currentSlide - I(e);
  }; var Q = E.lazyEndIndex = function (e) {
    return e.currentSlide + x(e);
  }; var I = E.lazySlidesOnLeft = function (e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }; var x = E.lazySlidesOnRight = function (e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }; const ee = E.getWidth = function (e) {
    return e && e.offsetWidth || 0;
  }; const U = E.getHeight = function (e) {
    return e && e.offsetHeight || 0;
  }; const Y = E.getSwipeDirection = function (e) {
    const n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; let y; let T; let O; let
      C;
    return y = e.startX - e.curX, T = e.startY - e.curY, O = Math.atan2(T, y), C = Math.round(O * 180 / Math.PI), C < 0 && (C = 360 - Math.abs(C)), C <= 45 && C >= 0 || C <= 360 && C >= 315 ? 'left' : C >= 135 && C <= 225 ? 'right' : n === !0 ? C >= 35 && C <= 135 ? 'up' : 'down' : 'vertical';
  }; const
    J = E.canGoNext = function (e) {
      let n = !0;
      return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (n = !1), n;
    };
  E.extractObject = function (e, n) {
    const y = {};
    return n.forEach((T) => y[T] = e[T]), y;
  }, E.initializedState = function (e) {
    const n = i.default.Children.count(e.children); const y = e.listRef; const T = Math.ceil(ee(y)); const O = e.trackRef && e.trackRef.node; const C = Math.ceil(ee(O)); let
      P;
    if (e.vertical) P = T;
    else {
      let j = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding === 'string' && e.centerPadding.slice(-1) === '%' && (j *= T / 100), P = Math.ceil((T - j) / e.slidesToShow);
    }
    const $ = y && U(y.querySelector('[data-index="0"]')); const F = $ * e.slidesToShow; let
      B = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && (B = n - 1 - e.initialSlide);
    let Z = e.lazyLoadedList || []; const
      V = H(S(S({}, e), {}, {
        currentSlide: B,
        lazyLoadedList: Z,
      }));
    Z = Z.concat(V);
    const G = {
      slideCount: n,
      slideWidth: P,
      listWidth: T,
      trackWidth: C,
      currentSlide: B,
      slideHeight: $,
      listHeight: F,
      lazyLoadedList: Z,
    };
    return e.autoplaying === null && e.autoplay && (G.autoplaying = 'playing'), G;
  }, E.slideHandler = function (e) {
    const n = e.waitForAnimate; const y = e.animating; const T = e.fade; const O = e.infinite; const C = e.index; const P = e.slideCount; const j = e.lazyLoad; const $ = e.currentSlide; const F = e.centerMode; const B = e.slidesToScroll; const Z = e.slidesToShow; const V = e.useCSS; let
      G = e.lazyLoadedList;
    if (n && y) return {};
    let q = C; let K; let re; let A; let te = {}; let ne = {}; const
      ie = O ? C : z(C, 0, P - 1);
    if (T) {
      if (!O && (C < 0 || C >= P)) return {};
      C < 0 ? q = C + P : C >= P && (q = C - P), j && G.indexOf(q) < 0 && (G = G.concat(q)), te = {
        animating: !0,
        currentSlide: q,
        lazyLoadedList: G,
        targetSlide: q,
      }, ne = {
        animating: !1,
        targetSlide: q,
      };
    } else {
      K = q, q < 0 ? (K = q + P, O ? P % B !== 0 && (K = P - P % B) : K = 0) : !J(e) && q > $ ? q = K = $ : F && q >= P ? (q = O ? P : P - 1, K = O ? 0 : P - 1) : q >= P && (K = q - P, O ? P % B !== 0 && (K = 0) : K = P - Z), !O && q + Z >= P && (K = P - Z), re = r(S(S({}, e), {}, {
        slideIndex: q,
      })), A = r(S(S({}, e), {}, {
        slideIndex: K,
      })), O || (re === A && (q = K), re = A), j && (G = G.concat(H(S(S({}, e), {}, {
        currentSlide: q,
      })))), V ? (te = {
        animating: !0,
        currentSlide: K,
        trackStyle: l(S(S({}, e), {}, {
          left: re,
        })),
        lazyLoadedList: G,
        targetSlide: ie,
      }, ne = {
        animating: !1,
        currentSlide: K,
        trackStyle: p(S(S({}, e), {}, {
          left: A,
        })),
        swipeLeft: null,
        targetSlide: ie,
      }) : te = {
        currentSlide: K,
        trackStyle: p(S(S({}, e), {}, {
          left: A,
        })),
        lazyLoadedList: G,
        targetSlide: ie,
      };
    }
    return {
      state: te,
      nextState: ne,
    };
  }, E.changeSlide = function (e, n) {
    let y; let T; let O; let C; let P; const j = e.slidesToScroll; const $ = e.slidesToShow; const F = e.slideCount; const B = e.currentSlide; const Z = e.targetSlide; const V = e.lazyLoad; const
      G = e.infinite;
    if (C = F % j !== 0, y = C ? 0 : (F - B) % j, n.message === 'previous') O = y === 0 ? j : $ - y, P = B - O, V && !G && (T = B - O, P = T === -1 ? F - 1 : T), G || (P = Z - j);
    else if (n.message === 'next') O = y === 0 ? j : y, P = B + O, V && !G && (P = (B + j) % F + y), G || (P = Z + j);
    else if (n.message === 'dots') P = n.index * n.slidesToScroll;
    else if (n.message === 'children') {
      if (P = n.index, G) {
        const q = f(S(S({}, e), {}, {
          targetSlide: P,
        }));
        P > n.currentSlide && q === 'left' ? P -= F : P < n.currentSlide && q === 'right' && (P += F);
      }
    } else n.message === 'index' && (P = Number(n.index));
    return P;
  }, E.keyHandler = function (e, n, y) {
    return e.target.tagName.match('TEXTAREA|INPUT|SELECT') || !n ? '' : e.keyCode === 37 ? y ? 'next' : 'previous' : e.keyCode === 39 ? y ? 'previous' : 'next' : '';
  }, E.swipeStart = function (e, n, y) {
    return e.target.tagName === 'IMG' && R(e), !n || !y && e.type.indexOf('mouse') !== -1 ? '' : {
      dragging: !0,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY,
      },
    };
  }, E.swipeMove = function (e, n) {
    const y = n.scrolling; const T = n.animating; const O = n.vertical; const C = n.swipeToSlide; const P = n.verticalSwiping; const j = n.rtl; const $ = n.currentSlide; const F = n.edgeFriction; const B = n.edgeDragged; const Z = n.onEdge; const V = n.swiped; const G = n.swiping; const q = n.slideCount; const K = n.slidesToScroll; const re = n.infinite; const A = n.touchObject; const te = n.swipeEvent; const ne = n.listHeight; const
      ie = n.listWidth;
    if (!y) {
      if (T) return R(e);
      O && C && P && R(e);
      let oe; let ue = {}; const
        we = r(n);
      A.curX = e.touches ? e.touches[0].pageX : e.clientX, A.curY = e.touches ? e.touches[0].pageY : e.clientY, A.swipeLength = Math.round(Math.sqrt((A.curX - A.startX) ** 2));
      const Ae = Math.round(Math.sqrt((A.curY - A.startY) ** 2));
      if (!P && !G && Ae > 10) {
        return {
          scrolling: !0,
        };
      }
      P && (A.swipeLength = Ae);
      let pe = (j ? -1 : 1) * (A.curX > A.startX ? 1 : -1);
      P && (pe = A.curY > A.startY ? 1 : -1);
      const ut = Math.ceil(q / K); const le = Y(n.touchObject, P); let
        he = A.swipeLength;
      return re || ($ === 0 && (le === 'right' || le === 'down') || $ + 1 >= ut && (le === 'left' || le === 'up') || !J(n) && (le === 'left' || le === 'up')) && (he = A.swipeLength * F, B === !1 && Z && (Z(le), ue.edgeDragged = !0)), !V && te && (te(le), ue.swiped = !0), O ? oe = we + he * (ne / ie) * pe : j ? oe = we - he * pe : oe = we + he * pe, P && (oe = we + he * pe), ue = S(S({}, ue), {}, {
        touchObject: A,
        swipeLeft: oe,
        trackStyle: p(S(S({}, n), {}, {
          left: oe,
        })),
      }), Math.abs(A.curX - A.startX) < Math.abs(A.curY - A.startY) * 0.8 || A.swipeLength > 10 && (ue.swiping = !0, R(e)), ue;
    }
  }, E.swipeEnd = function (e, n) {
    const y = n.dragging; const T = n.swipe; const O = n.touchObject; const C = n.listWidth; const P = n.touchThreshold; const j = n.verticalSwiping; const $ = n.listHeight; const F = n.swipeToSlide; const B = n.scrolling; const Z = n.onSwipe; const V = n.targetSlide; const G = n.currentSlide; const
      q = n.infinite;
    if (!y) return T && R(e), {};
    const K = j ? $ / P : C / P; const re = Y(O, j); const
      A = {
        dragging: !1,
        edgeDragged: !1,
        scrolling: !1,
        swiping: !1,
        swiped: !1,
        swipeLeft: null,
        touchObject: {},
      };
    if (B || !O.swipeLength) return A;
    if (O.swipeLength > K) {
      R(e), Z && Z(re);
      let te; let ne; const
        ie = q ? G : V;
      switch (re) {
        case 'left':
        case 'up':
          ne = ie + c(n), te = F ? s(n, ne) : ne, A.currentDirection = 0;
          break;
        case 'right':
        case 'down':
          ne = ie - c(n), te = F ? s(n, ne) : ne, A.currentDirection = 1;
          break;
        default:
          te = ie;
      }
      A.triggerSlideHandler = te;
    } else {
      const oe = r(n);
      A.trackStyle = l(S(S({}, n), {}, {
        left: oe,
      }));
    }
    return A;
  };
  const X = E.getNavigableIndexes = function (e) {
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, y = e.infinite ? e.slidesToShow * -1 : 0, T = e.infinite ? e.slidesToShow * -1 : 0, O = []; y < n;) O.push(y), y = T + e.slidesToScroll, T += Math.min(e.slidesToScroll, e.slidesToShow);
    return O;
  }; var s = E.checkNavigable = function (e, n) {
    const y = X(e); let
      T = 0;
    if (n > y[y.length - 1]) n = y[y.length - 1];
    else {
      for (const O in y) {
        if (n < y[O]) {
          n = T;
          break;
        }
        T = y[O];
      }
    }
    return n;
  }; var c = E.getSlideCount = function (e) {
    const n = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      let y; const T = e.listRef; const
        O = T.querySelectorAll && T.querySelectorAll('.slick-slide') || [];
      if (Array.from(O).every((j) => {
        if (e.vertical) {
          if (j.offsetTop + U(j) / 2 > e.swipeLeft * -1) return y = j, !1;
        } else if (j.offsetLeft - n + ee(j) / 2 > e.swipeLeft * -1) return y = j, !1;
        return !0;
      }), !y) return 0;
      const C = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide; const
        P = Math.abs(y.dataset.index - C) || 1;
      return P;
    } return e.slidesToScroll;
  }; const d = E.checkSpecKeys = function (e, n) {
    return n.reduce((y, T) => y && e.hasOwnProperty(T), !0) ? null : console.error('Keys Missing:', e);
  }; var p = E.getTrackCSS = function (e) {
    d(e, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth']);
    let n; let
      y;
    if (!e.vertical) n = o(e) * e.slideWidth;
    else {
      const T = e.unslick ? e.slideCount : e.slideCount + 2 * e.slidesToShow;
      y = T * e.slideHeight;
    }
    let O = {
      opacity: 1,
      transition: '',
      WebkitTransition: '',
    };
    if (e.useTransform) {
      const C = e.vertical ? `translate3d(0px, ${e.left}px, 0px)` : `translate3d(${e.left}px, 0px, 0px)`;
      const P = e.vertical ? `translate3d(0px, ${e.left}px, 0px)` : `translate3d(${e.left}px, 0px, 0px)`;
      const j = e.vertical ? `translateY(${e.left}px)` : `translateX(${e.left}px)`;
      O = S(S({}, O), {}, {
        WebkitTransform: C,
        transform: P,
        msTransform: j,
      });
    } else e.vertical ? O.top = e.left : O.left = e.left;
    return e.fade && (O = {
      opacity: 1,
    }), n && (O.width = n), y && (O.height = y), window && !window.addEventListener && window.attachEvent && (e.vertical ? O.marginTop = `${e.left}px` : O.marginLeft = `${e.left}px`), O;
  }; var l = E.getTrackAnimateCSS = function (e) {
    d(e, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase']);
    const n = p(e);
    return e.useTransform ? (n.WebkitTransition = `-webkit-transform ${e.speed}ms ${e.cssEase}`, n.transition = `transform ${e.speed}ms ${e.cssEase}`) : e.vertical ? n.transition = `top ${e.speed}ms ${e.cssEase}` : n.transition = `left ${e.speed}ms ${e.cssEase}`, n;
  }; var r = E.getTrackLeft = function (e) {
    if (e.unslick) return 0;
    d(e, ['slideIndex', 'trackRef', 'infinite', 'centerMode', 'slideCount', 'slidesToShow', 'slidesToScroll', 'slideWidth', 'listWidth', 'variableWidth', 'slideHeight']);
    const n = e.slideIndex; const y = e.trackRef; const T = e.infinite; const O = e.centerMode; const C = e.slideCount; const P = e.slidesToShow; const j = e.slidesToScroll; const $ = e.slideWidth; const F = e.listWidth; const B = e.variableWidth; const Z = e.slideHeight; const V = e.fade; const G = e.vertical; let q = 0; let K; let re; let
      A = 0;
    if (V || e.slideCount === 1) return 0;
    let te = 0;
    if (T ? (te = -h(e), C % j !== 0 && n + j > C && (te = -(n > C ? P - (n - C) : C % j)), O && (te += parseInt(P / 2))) : (C % j !== 0 && n + j > C && (te = P - C % j), O && (te = parseInt(P / 2))), q = te * $, A = te * Z, G ? K = n * Z * -1 + A : K = n * $ * -1 + q, B === !0) {
      let ne; const
        ie = y && y.node;
      if (ne = n + h(e), re = ie && ie.childNodes[ne], K = re ? re.offsetLeft * -1 : 0, O === !0) {
        ne = T ? n + h(e) : n, re = ie && ie.children[ne], K = 0;
        for (let oe = 0; oe < ne; oe++) K -= ie && ie.children[oe] && ie.children[oe].offsetWidth;
        K -= parseInt(e.centerPadding), K += re && (F - re.offsetWidth) / 2;
      }
    }
    return K;
  }; var h = E.getPreClones = function (e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }; const v = E.getPostClones = function (e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }; var o = E.getTotalSlides = function (e) {
    return e.slideCount === 1 ? 1 : h(e) + e.slideCount + v(e);
  }; var f = E.siblingDirection = function (e) {
    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + w(e) ? 'left' : 'right' : e.targetSlide < e.currentSlide - k(e) ? 'right' : 'left';
  }; var w = E.slidesOnRight = function (e) {
    const n = e.slidesToShow; const y = e.centerMode; const T = e.rtl; const
      O = e.centerPadding;
    if (y) {
      let C = (n - 1) / 2 + 1;
      return parseInt(O) > 0 && (C += 1), T && n % 2 === 0 && (C += 1), C;
    }
    return T ? 0 : n - 1;
  }; var
    k = E.slidesOnLeft = function (e) {
      const n = e.slidesToShow; const y = e.centerMode; const T = e.rtl; const
        O = e.centerPadding;
      if (y) {
        let C = (n - 1) / 2 + 1;
        return parseInt(O) > 0 && (C += 1), !T && n % 2 === 0 && (C += 1), C;
      }
      return T ? n - 1 : 0;
    };
  E.canUseDOM = function () {
    return !!(typeof window < 'u' && window.document && window.document.createElement);
  };
  const t = E.validSettings = Object.keys(a.default);
  function W(u) {
    return t.reduce((e, n) => (u.hasOwnProperty(n) && (e[n] = u[n]), e), {});
  }
  return E;
}
const ge = {}; let
  Ye;
function gt() {
  if (Ye) return ge;
  Ye = 1, Object.defineProperty(ge, '__esModule', {
    value: !0,
  }), ge.Track = void 0;
  const i = b(fe); const a = b(Pe()); const
    g = Se();
  function b(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function m(l) {
    '@babel/helpers - typeof';

    return m = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (r) {
      return typeof r;
    } : function (r) {
      return r && typeof Symbol === 'function' && r.constructor === Symbol && r !== Symbol.prototype ? 'symbol' : typeof r;
    }, m(l);
  }
  function S() {
    return S = Object.assign ? Object.assign.bind() : function (l) {
      for (let r = 1; r < arguments.length; r++) {
        const h = arguments[r];
        for (const v in h) ({}).hasOwnProperty.call(h, v) && (l[v] = h[v]);
      }
      return l;
    }, S.apply(null, arguments);
  }
  function M(l, r) {
    if (!(l instanceof r)) throw new TypeError('Cannot call a class as a function');
  }
  function L(l, r) {
    for (let h = 0; h < r.length; h++) {
      const v = r[h];
      v.enumerable = v.enumerable || !1, v.configurable = !0, 'value' in v && (v.writable = !0), Object.defineProperty(l, J(v.key), v);
    }
  }
  function D(l, r, h) {
    return r && L(l.prototype, r), Object.defineProperty(l, 'prototype', { writable: !1 }), l;
  }
  function z(l, r) {
    if (typeof r !== 'function' && r !== null) throw new TypeError('Super expression must either be null or a function');
    l.prototype = Object.create(r && r.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), Object.defineProperty(l, 'prototype', { writable: !1 }), r && R(l, r);
  }
  function R(l, r) {
    return R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (h, v) {
      return h.__proto__ = v, h;
    }, R(l, r);
  }
  function H(l) {
    const r = I();
    return function () {
      let h; const
        v = x(l);
      if (r) {
        const o = x(this).constructor;
        h = Reflect.construct(v, arguments, o);
      } else h = v.apply(this, arguments);
      return N(this, h);
    };
  }
  function N(l, r) {
    if (r && (m(r) == 'object' || typeof r === 'function')) return r;
    if (r !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return Q(l);
  }
  function Q(l) {
    if (l === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return l;
  }
  function I() {
    try {
      var l = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
      }));
    } catch {
    }
    return (I = function () {
      return !!l;
    })();
  }
  function x(l) {
    return x = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, x(l);
  }
  function ee(l, r) {
    const h = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      let v = Object.getOwnPropertySymbols(l);
      r && (v = v.filter((o) => Object.getOwnPropertyDescriptor(l, o).enumerable)), h.push.apply(h, v);
    }
    return h;
  }
  function U(l) {
    for (let r = 1; r < arguments.length; r++) {
      var h = arguments[r] != null ? arguments[r] : {};
      r % 2 ? ee(Object(h), !0).forEach((v) => {
        Y(l, v, h[v]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(h)) : ee(Object(h)).forEach((v) => {
        Object.defineProperty(l, v, Object.getOwnPropertyDescriptor(h, v));
      });
    }
    return l;
  }
  function Y(l, r, h) {
    return (r = J(r)) in l ? Object.defineProperty(l, r, {
      value: h, enumerable: !0, configurable: !0, writable: !0,
    }) : l[r] = h, l;
  }
  function J(l) {
    const r = X(l, 'string');
    return m(r) == 'symbol' ? r : `${r}`;
  }
  function X(l, r) {
    if (m(l) != 'object' || !l) return l;
    const h = l[Symbol.toPrimitive];
    if (h !== void 0) {
      const v = h.call(l, r);
      if (m(v) != 'object') return v;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (r === 'string' ? String : Number)(l);
  }
  const s = function (r) {
    let h; let v; let o; let f; let
      w;
    r.rtl ? w = r.slideCount - 1 - r.index : w = r.index, o = w < 0 || w >= r.slideCount, r.centerMode ? (f = Math.floor(r.slidesToShow / 2), v = (w - r.currentSlide) % r.slideCount === 0, w > r.currentSlide - f - 1 && w <= r.currentSlide + f && (h = !0)) : h = r.currentSlide <= w && w < r.currentSlide + r.slidesToShow;
    let k;
    r.targetSlide < 0 ? k = r.targetSlide + r.slideCount : r.targetSlide >= r.slideCount ? k = r.targetSlide - r.slideCount : k = r.targetSlide;
    const t = w === k;
    return {
      'slick-slide': !0,
      'slick-active': h,
      'slick-center': v,
      'slick-cloned': o,
      'slick-current': t,
      // dubious in case of RTL
    };
  }; const c = function (r) {
    const h = {};
    return (r.variableWidth === void 0 || r.variableWidth === !1) && (h.width = r.slideWidth), r.fade && (h.position = 'relative', r.vertical ? h.top = -r.index * parseInt(r.slideHeight) : h.left = -r.index * parseInt(r.slideWidth), h.opacity = r.currentSlide === r.index ? 1 : 0, h.zIndex = r.currentSlide === r.index ? 999 : 998, r.useCSS && (h.transition = `opacity ${r.speed}ms ${r.cssEase}, visibility ${r.speed}ms ${r.cssEase}`)), h;
  }; const d = function (r, h) {
    return r.key || h;
  }; const
    p = function (r) {
      let h; const v = []; const o = []; const f = []; const w = i.default.Children.count(r.children); const k = (0, g.lazyStartIndex)(r); const
        t = (0, g.lazyEndIndex)(r);
      return i.default.Children.forEach(r.children, (W, u) => {
        let e; const
          n = {
            message: 'children',
            index: u,
            slidesToScroll: r.slidesToScroll,
            currentSlide: r.currentSlide,
          };
        !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(u) >= 0 ? e = W : e = /* @__PURE__ */ i.default.createElement('div', null);
        const y = c(U(U({}, r), {}, {
          index: u,
        })); const T = e.props.className || ''; let
          O = s(U(U({}, r), {}, {
            index: u,
          }));
        if (v.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: `original${d(e, u)}`,
          'data-index': u,
          className: (0, a.default)(O, T),
          tabIndex: '-1',
          'aria-hidden': !O['slick-active'],
          style: U(U({
            outline: 'none',
          }, e.props.style || {}), y),
          onClick(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          },
        })), r.infinite && w > 1 && r.fade === !1 && !r.unslick) {
          const C = w - u;
          C <= (0, g.getPreClones)(r) && (h = -C, h >= k && (e = W), O = s(U(U({}, r), {}, {
            index: h,
          })), o.push(/* @__PURE__ */ i.default.cloneElement(e, {
            key: `precloned${d(e, h)}`,
            'data-index': h,
            tabIndex: '-1',
            className: (0, a.default)(O, T),
            'aria-hidden': !O['slick-active'],
            style: U(U({}, e.props.style || {}), y),
            onClick(j) {
              e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
            },
          }))), u < (0, g.getPostClones)(r) && (h = w + u, h < t && (e = W), O = s(U(U({}, r), {}, {
            index: h,
          })), f.push(/* @__PURE__ */ i.default.cloneElement(e, {
            key: `postcloned${d(e, h)}`,
            'data-index': h,
            tabIndex: '-1',
            className: (0, a.default)(O, T),
            'aria-hidden': !O['slick-active'],
            style: U(U({}, e.props.style || {}), y),
            onClick(j) {
              e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
            },
          })));
        }
      }), r.rtl ? o.concat(v, f).reverse() : o.concat(v, f);
    };
  return ge.Track = /* @__PURE__ */ (function (l) {
    z(h, l);
    const r = H(h);
    function h() {
      let v;
      M(this, h);
      for (var o = arguments.length, f = new Array(o), w = 0; w < o; w++) f[w] = arguments[w];
      return v = r.call.apply(r, [this].concat(f)), Y(Q(v), 'node', null), Y(Q(v), 'handleRef', (k) => {
        v.node = k;
      }), v;
    }
    return D(h, [{
      key: 'render',
      value() {
        const o = p(this.props); const f = this.props; const w = f.onMouseEnter; const k = f.onMouseOver; const t = f.onMouseLeave; const
          W = {
            onMouseEnter: w,
            onMouseOver: k,
            onMouseLeave: t,
          };
        return /* @__PURE__ */ i.default.createElement('div', S({
          ref: this.handleRef,
          className: 'slick-track',
          style: this.props.trackStyle,
        }, W), o);
      },
    }]), h;
  }(i.default.PureComponent)), ge;
}
const ye = {}; let
  Ke;
function yt() {
  if (Ke) return ye;
  Ke = 1;
  function i(s) {
    '@babel/helpers - typeof';

    return i = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (c) {
      return typeof c;
    } : function (c) {
      return c && typeof Symbol === 'function' && c.constructor === Symbol && c !== Symbol.prototype ? 'symbol' : typeof c;
    }, i(s);
  }
  Object.defineProperty(ye, '__esModule', {
    value: !0,
  }), ye.Dots = void 0;
  const a = m(fe); const g = m(Pe()); const
    b = Se();
  function m(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function S(s, c) {
    const d = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
      let p = Object.getOwnPropertySymbols(s);
      c && (p = p.filter((l) => Object.getOwnPropertyDescriptor(s, l).enumerable)), d.push.apply(d, p);
    }
    return d;
  }
  function M(s) {
    for (let c = 1; c < arguments.length; c++) {
      var d = arguments[c] != null ? arguments[c] : {};
      c % 2 ? S(Object(d), !0).forEach((p) => {
        L(s, p, d[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(d)) : S(Object(d)).forEach((p) => {
        Object.defineProperty(s, p, Object.getOwnPropertyDescriptor(d, p));
      });
    }
    return s;
  }
  function L(s, c, d) {
    return (c = H(c)) in s ? Object.defineProperty(s, c, {
      value: d, enumerable: !0, configurable: !0, writable: !0,
    }) : s[c] = d, s;
  }
  function D(s, c) {
    if (!(s instanceof c)) throw new TypeError('Cannot call a class as a function');
  }
  function z(s, c) {
    for (let d = 0; d < c.length; d++) {
      const p = c[d];
      p.enumerable = p.enumerable || !1, p.configurable = !0, 'value' in p && (p.writable = !0), Object.defineProperty(s, H(p.key), p);
    }
  }
  function R(s, c, d) {
    return c && z(s.prototype, c), Object.defineProperty(s, 'prototype', { writable: !1 }), s;
  }
  function H(s) {
    const c = N(s, 'string');
    return i(c) == 'symbol' ? c : `${c}`;
  }
  function N(s, c) {
    if (i(s) != 'object' || !s) return s;
    const d = s[Symbol.toPrimitive];
    if (d !== void 0) {
      const p = d.call(s, c);
      if (i(p) != 'object') return p;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(s);
  }
  function Q(s, c) {
    if (typeof c !== 'function' && c !== null) throw new TypeError('Super expression must either be null or a function');
    s.prototype = Object.create(c && c.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, 'prototype', { writable: !1 }), c && I(s, c);
  }
  function I(s, c) {
    return I = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (d, p) {
      return d.__proto__ = p, d;
    }, I(s, c);
  }
  function x(s) {
    const c = Y();
    return function () {
      let d; const
        p = J(s);
      if (c) {
        const l = J(this).constructor;
        d = Reflect.construct(p, arguments, l);
      } else d = p.apply(this, arguments);
      return ee(this, d);
    };
  }
  function ee(s, c) {
    if (c && (i(c) == 'object' || typeof c === 'function')) return c;
    if (c !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return U(s);
  }
  function U(s) {
    if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s;
  }
  function Y() {
    try {
      var s = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
      }));
    } catch {
    }
    return (Y = function () {
      return !!s;
    })();
  }
  function J(s) {
    return J = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (c) {
      return c.__proto__ || Object.getPrototypeOf(c);
    }, J(s);
  }
  const X = function (c) {
    let d;
    return c.infinite ? d = Math.ceil(c.slideCount / c.slidesToScroll) : d = Math.ceil((c.slideCount - c.slidesToShow) / c.slidesToScroll) + 1, d;
  };
  return ye.Dots = /* @__PURE__ */ (function (s) {
    Q(d, s);
    const c = x(d);
    function d() {
      return D(this, d), c.apply(this, arguments);
    }
    return R(d, [{
      key: 'clickHandler',
      value(l, r) {
        r.preventDefault(), this.props.clickHandler(l);
      },
    }, {
      key: 'render',
      value() {
        for (var l = this.props, r = l.onMouseEnter, h = l.onMouseOver, v = l.onMouseLeave, o = l.infinite, f = l.slidesToScroll, w = l.slidesToShow, k = l.slideCount, t = l.currentSlide, W = X({
            slideCount: k,
            slidesToScroll: f,
            slidesToShow: w,
            infinite: o,
          }), u = {
            onMouseEnter: r,
            onMouseOver: h,
            onMouseLeave: v,
          }, e = [], n = 0; n < W; n++) {
          const y = (n + 1) * f - 1; const T = o ? y : (0, b.clamp)(y, 0, k - 1); const O = T - (f - 1); const C = o ? O : (0, b.clamp)(O, 0, k - 1); const P = (0, g.default)({
            'slick-active': o ? t >= C && t <= T : t === C,
          }); const j = {
            message: 'dots',
            index: n,
            slidesToScroll: f,
            currentSlide: t,
          }; const
            $ = this.clickHandler.bind(this, j);
          e = e.concat(/* @__PURE__ */ a.default.createElement('li', {
            key: n,
            className: P,
          }, /* @__PURE__ */ a.default.cloneElement(this.props.customPaging(n), {
            onClick: $,
          })));
        }
        return /* @__PURE__ */ a.default.cloneElement(this.props.appendDots(e), M({
          className: this.props.dotsClass,
        }, u));
      },
    }]), d;
  }(a.default.PureComponent)), ye;
}
const ce = {}; let
  Ve;
function mt() {
  if (Ve) return ce;
  Ve = 1;
  function i(s) {
    '@babel/helpers - typeof';

    return i = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (c) {
      return typeof c;
    } : function (c) {
      return c && typeof Symbol === 'function' && c.constructor === Symbol && c !== Symbol.prototype ? 'symbol' : typeof c;
    }, i(s);
  }
  Object.defineProperty(ce, '__esModule', {
    value: !0,
  }), ce.PrevArrow = ce.NextArrow = void 0;
  const a = m(fe); const g = m(Pe()); const
    b = Se();
  function m(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function S() {
    return S = Object.assign ? Object.assign.bind() : function (s) {
      for (let c = 1; c < arguments.length; c++) {
        const d = arguments[c];
        for (const p in d) ({}).hasOwnProperty.call(d, p) && (s[p] = d[p]);
      }
      return s;
    }, S.apply(null, arguments);
  }
  function M(s, c) {
    const d = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
      let p = Object.getOwnPropertySymbols(s);
      c && (p = p.filter((l) => Object.getOwnPropertyDescriptor(s, l).enumerable)), d.push.apply(d, p);
    }
    return d;
  }
  function L(s) {
    for (let c = 1; c < arguments.length; c++) {
      var d = arguments[c] != null ? arguments[c] : {};
      c % 2 ? M(Object(d), !0).forEach((p) => {
        D(s, p, d[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(d)) : M(Object(d)).forEach((p) => {
        Object.defineProperty(s, p, Object.getOwnPropertyDescriptor(d, p));
      });
    }
    return s;
  }
  function D(s, c, d) {
    return (c = N(c)) in s ? Object.defineProperty(s, c, {
      value: d, enumerable: !0, configurable: !0, writable: !0,
    }) : s[c] = d, s;
  }
  function z(s, c) {
    if (!(s instanceof c)) throw new TypeError('Cannot call a class as a function');
  }
  function R(s, c) {
    for (let d = 0; d < c.length; d++) {
      const p = c[d];
      p.enumerable = p.enumerable || !1, p.configurable = !0, 'value' in p && (p.writable = !0), Object.defineProperty(s, N(p.key), p);
    }
  }
  function H(s, c, d) {
    return c && R(s.prototype, c), Object.defineProperty(s, 'prototype', { writable: !1 }), s;
  }
  function N(s) {
    const c = Q(s, 'string');
    return i(c) == 'symbol' ? c : `${c}`;
  }
  function Q(s, c) {
    if (i(s) != 'object' || !s) return s;
    const d = s[Symbol.toPrimitive];
    if (d !== void 0) {
      const p = d.call(s, c);
      if (i(p) != 'object') return p;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return String(s);
  }
  function I(s, c) {
    if (typeof c !== 'function' && c !== null) throw new TypeError('Super expression must either be null or a function');
    s.prototype = Object.create(c && c.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, 'prototype', { writable: !1 }), c && x(s, c);
  }
  function x(s, c) {
    return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (d, p) {
      return d.__proto__ = p, d;
    }, x(s, c);
  }
  function ee(s) {
    const c = J();
    return function () {
      let d; const
        p = X(s);
      if (c) {
        const l = X(this).constructor;
        d = Reflect.construct(p, arguments, l);
      } else d = p.apply(this, arguments);
      return U(this, d);
    };
  }
  function U(s, c) {
    if (c && (i(c) == 'object' || typeof c === 'function')) return c;
    if (c !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return Y(s);
  }
  function Y(s) {
    if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s;
  }
  function J() {
    try {
      var s = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
      }));
    } catch {
    }
    return (J = function () {
      return !!s;
    })();
  }
  function X(s) {
    return X = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (c) {
      return c.__proto__ || Object.getPrototypeOf(c);
    }, X(s);
  }
  return ce.PrevArrow = /* @__PURE__ */ (function (s) {
    I(d, s);
    const c = ee(d);
    function d() {
      return z(this, d), c.apply(this, arguments);
    }
    return H(d, [{
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
          className: (0, g.default)(l),
          style: {
            display: 'block',
          },
          onClick: r,
        };
        const v = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount,
        };
        let o;
        return this.props.prevArrow ? o = /* @__PURE__ */ a.default.cloneElement(this.props.prevArrow, L(L({}, h), v)) : o = /* @__PURE__ */ a.default.createElement('button', S({
          key: '0',
          type: 'button',
        }, h), ' ', 'Previous'), o;
      },
    }]), d;
  }(a.default.PureComponent)), ce.NextArrow = /* @__PURE__ */ (function (s) {
    I(d, s);
    const c = ee(d);
    function d() {
      return z(this, d), c.apply(this, arguments);
    }
    return H(d, [{
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
        (0, b.canGoNext)(this.props) || (l['slick-disabled'] = !0, r = null);
        const h = {
          key: '1',
          'data-role': 'none',
          className: (0, g.default)(l),
          style: {
            display: 'block',
          },
          onClick: r,
        };
        const v = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount,
        };
        let o;
        return this.props.nextArrow ? o = /* @__PURE__ */ a.default.cloneElement(this.props.nextArrow, L(L({}, h), v)) : o = /* @__PURE__ */ a.default.createElement('button', S({
          key: '1',
          type: 'button',
        }, h), ' ', 'Next'), o;
      },
    }]), d;
  }(a.default.PureComponent)), ce;
}
const it = (function () {
  if (typeof Map < 'u') return Map;
  function i(a, g) {
    let b = -1;
    return a.some((m, S) => (m[0] === g ? (b = S, !0) : !1)), b;
  }
  return (
    /** @class */
    (function () {
      function a() {
        this.__entries__ = [];
      }
      return Object.defineProperty(a.prototype, 'size', {
        /**
         * @returns {boolean}
         */
        get() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0,
      }), a.prototype.get = function (g) {
        const b = i(this.__entries__, g); const
          m = this.__entries__[b];
        return m && m[1];
      }, a.prototype.set = function (g, b) {
        const m = i(this.__entries__, g);
        ~m ? this.__entries__[m][1] = b : this.__entries__.push([g, b]);
      }, a.prototype.delete = function (g) {
        const b = this.__entries__; const
          m = i(b, g);
        ~m && b.splice(m, 1);
      }, a.prototype.has = function (g) {
        return !!~i(this.__entries__, g);
      }, a.prototype.clear = function () {
        this.__entries__.splice(0);
      }, a.prototype.forEach = function (g, b) {
        b === void 0 && (b = null);
        for (let m = 0, S = this.__entries__; m < S.length; m++) {
          const M = S[m];
          g.call(b, M[1], M[0]);
        }
      }, a;
    })()
  );
}());
const Ie = typeof window < 'u' && typeof document < 'u' && window.document === document;
const xe = (function () {
  return typeof global < 'u' && global.Math === Math ? global : typeof self < 'u' && self.Math === Math ? self : typeof window < 'u' && window.Math === Math ? window : Function('return this')();
}());
const bt = (function () {
  return typeof requestAnimationFrame === 'function' ? requestAnimationFrame.bind(xe) : function (i) {
    return setTimeout(() => i(Date.now()), 1e3 / 60);
  };
}());
const St = 2;
function wt(i, a) {
  let g = !1; let b = !1; let
    m = 0;
  function S() {
    g && (g = !1, i()), b && L();
  }
  function M() {
    bt(S);
  }
  function L() {
    const D = Date.now();
    if (g) {
      if (D - m < St) return;
      b = !0;
    } else g = !0, b = !1, setTimeout(M, a);
    m = D;
  }
  return L;
}
const Ot = 20; const _t = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; const xt = typeof MutationObserver < 'u'; const kt = (
  /** @class */
  (function () {
    function i() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = wt(this.refresh.bind(this), Ot);
    }
    return i.prototype.addObserver = function (a) {
      ~this.observers_.indexOf(a) || this.observers_.push(a), this.connected_ || this.connect_();
    }, i.prototype.removeObserver = function (a) {
      const g = this.observers_; const
        b = g.indexOf(a);
      ~b && g.splice(b, 1), !g.length && this.connected_ && this.disconnect_();
    }, i.prototype.refresh = function () {
      const a = this.updateObservers_();
      a && this.refresh();
    }, i.prototype.updateObservers_ = function () {
      const a = this.observers_.filter((g) => (g.gatherActive(), g.hasActive()));
      return a.forEach((g) => g.broadcastActive()), a.length > 0;
    }, i.prototype.connect_ = function () {
      !Ie || this.connected_ || (document.addEventListener('transitionend', this.onTransitionEnd_), window.addEventListener('resize', this.refresh), xt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0,
      })) : (document.addEventListener('DOMSubtreeModified', this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, i.prototype.disconnect_ = function () {
      !Ie || !this.connected_ || (document.removeEventListener('transitionend', this.onTransitionEnd_), window.removeEventListener('resize', this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener('DOMSubtreeModified', this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, i.prototype.onTransitionEnd_ = function (a) {
      const g = a.propertyName; const b = g === void 0 ? '' : g; const
        m = _t.some((S) => !!~b.indexOf(S));
      m && this.refresh();
    }, i.getInstance = function () {
      return this.instance_ || (this.instance_ = new i()), this.instance_;
    }, i.instance_ = null, i;
  })()
); const ot = (function (i, a) {
  for (let g = 0, b = Object.keys(a); g < b.length; g++) {
    const m = b[g];
    Object.defineProperty(i, m, {
      value: a[m],
      enumerable: !1,
      writable: !1,
      configurable: !0,
    });
  }
  return i;
}); const de = (function (i) {
  const a = i && i.ownerDocument && i.ownerDocument.defaultView;
  return a || xe;
}); const
  at = Te(0, 0, 0, 0);
function ke(i) {
  return parseFloat(i) || 0;
}
function Ze(i) {
  for (var a = [], g = 1; g < arguments.length; g++) a[g - 1] = arguments[g];
  return a.reduce((b, m) => {
    const S = i[`border-${m}-width`];
    return b + ke(S);
  }, 0);
}
function Pt(i) {
  for (var a = ['top', 'right', 'bottom', 'left'], g = {}, b = 0, m = a; b < m.length; b++) {
    const S = m[b]; const
      M = i[`padding-${S}`];
    g[S] = ke(M);
  }
  return g;
}
function Tt(i) {
  const a = i.getBBox();
  return Te(0, 0, a.width, a.height);
}
function Ct(i) {
  const a = i.clientWidth; const
    g = i.clientHeight;
  if (!a && !g) return at;
  const b = de(i).getComputedStyle(i); const m = Pt(b); const S = m.left + m.right; const M = m.top + m.bottom; let L = ke(b.width); let
    D = ke(b.height);
  if (b.boxSizing === 'border-box' && (Math.round(L + S) !== a && (L -= Ze(b, 'left', 'right') + S), Math.round(D + M) !== g && (D -= Ze(b, 'top', 'bottom') + M)), !Et(i)) {
    const z = Math.round(L + S) - a; const
      R = Math.round(D + M) - g;
    Math.abs(z) !== 1 && (L -= z), Math.abs(R) !== 1 && (D -= R);
  }
  return Te(m.left, m.top, L, D);
}
const jt = /* @__PURE__ */ (function () {
  return typeof SVGGraphicsElement < 'u' ? function (i) {
    return i instanceof de(i).SVGGraphicsElement;
  } : function (i) {
    return i instanceof de(i).SVGElement && typeof i.getBBox === 'function';
  };
}());
function Et(i) {
  return i === de(i).document.documentElement;
}
function Lt(i) {
  return Ie ? jt(i) ? Tt(i) : Ct(i) : at;
}
function Mt(i) {
  const a = i.x; const g = i.y; const b = i.width; const m = i.height; const S = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object; const
    M = Object.create(S.prototype);
  return ot(M, {
    x: a,
    y: g,
    width: b,
    height: m,
    top: g,
    right: a + b,
    bottom: m + g,
    left: a,
  }), M;
}
function Te(i, a, g, b) {
  return {
    x: i, y: a, width: g, height: b,
  };
}
const Rt = (
  /** @class */
  (function () {
    function i(a) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Te(0, 0, 0, 0), this.target = a;
    }
    return i.prototype.isActive = function () {
      const a = Lt(this.target);
      return this.contentRect_ = a, a.width !== this.broadcastWidth || a.height !== this.broadcastHeight;
    }, i.prototype.broadcastRect = function () {
      const a = this.contentRect_;
      return this.broadcastWidth = a.width, this.broadcastHeight = a.height, a;
    }, i;
  })()
); const Nt = (
  /** @class */
  /* @__PURE__ */ (function () {
    function i(a, g) {
      const b = Mt(g);
      ot(this, { target: a, contentRect: b });
    }
    return i;
  })()
); const zt = (
  /** @class */
  (function () {
    function i(a, g, b) {
      if (this.activeObservations_ = [], this.observations_ = new it(), typeof a !== 'function') throw new TypeError('The callback provided as parameter 1 is not a function.');
      this.callback_ = a, this.controller_ = g, this.callbackCtx_ = b;
    }
    return i.prototype.observe = function (a) {
      if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
      if (!(typeof Element > 'u' || !(Element instanceof Object))) {
        if (!(a instanceof de(a).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        const g = this.observations_;
        g.has(a) || (g.set(a, new Rt(a)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, i.prototype.unobserve = function (a) {
      if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
      if (!(typeof Element > 'u' || !(Element instanceof Object))) {
        if (!(a instanceof de(a).Element)) throw new TypeError('parameter 1 is not of type "Element".');
        const g = this.observations_;
        g.has(a) && (g.delete(a), g.size || this.controller_.removeObserver(this));
      }
    }, i.prototype.disconnect = function () {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, i.prototype.gatherActive = function () {
      const a = this;
      this.clearActive(), this.observations_.forEach((g) => {
        g.isActive() && a.activeObservations_.push(g);
      });
    }, i.prototype.broadcastActive = function () {
      if (this.hasActive()) {
        const a = this.callbackCtx_; const
          g = this.activeObservations_.map((b) => new Nt(b.target, b.broadcastRect()));
        this.callback_.call(a, g, a), this.clearActive();
      }
    }, i.prototype.clearActive = function () {
      this.activeObservations_.splice(0);
    }, i.prototype.hasActive = function () {
      return this.activeObservations_.length > 0;
    }, i;
  })()
); const lt = typeof WeakMap < 'u' ? /* @__PURE__ */ new WeakMap() : new it(); const
  st = (
  /** @class */
  /* @__PURE__ */ (function () {
      function i(a) {
        if (!(this instanceof i)) throw new TypeError('Cannot call a class as a function.');
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
        const g = kt.getInstance(); const
          b = new zt(a, g, this);
        lt.set(this, b);
      }
      return i;
    })()
  );
[
  'observe',
  'unobserve',
  'disconnect',
].forEach((i) => {
  st.prototype[i] = function () {
    let a;
    return (a = lt.get(this))[i].apply(a, arguments);
  };
});
const Dt = (function () {
  return typeof xe.ResizeObserver < 'u' ? xe.ResizeObserver : st;
}());
const It = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dt,
}, Symbol.toStringTag, { value: 'Module' })); const
  At = /* @__PURE__ */ pt(It);
let Je;
function Ht() {
  if (Je) return ve;
  Je = 1, Object.defineProperty(ve, '__esModule', {
    value: !0,
  }), ve.InnerSlider = void 0;
  const i = z(fe); const a = z(ht()); const g = z(vt()); const b = z(Pe()); const m = Se(); const S = gt(); const M = yt(); const L = mt(); const
    D = z(At);
  function z(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function R(o) {
    '@babel/helpers - typeof';

    return R = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (f) {
      return typeof f;
    } : function (f) {
      return f && typeof Symbol === 'function' && f.constructor === Symbol && f !== Symbol.prototype ? 'symbol' : typeof f;
    }, R(o);
  }
  function H() {
    return H = Object.assign ? Object.assign.bind() : function (o) {
      for (let f = 1; f < arguments.length; f++) {
        const w = arguments[f];
        for (const k in w) ({}).hasOwnProperty.call(w, k) && (o[k] = w[k]);
      }
      return o;
    }, H.apply(null, arguments);
  }
  function N(o, f) {
    if (o == null) return {};
    let w; let k; const
      t = Q(o, f);
    if (Object.getOwnPropertySymbols) {
      const W = Object.getOwnPropertySymbols(o);
      for (k = 0; k < W.length; k++) w = W[k], f.includes(w) || {}.propertyIsEnumerable.call(o, w) && (t[w] = o[w]);
    }
    return t;
  }
  function Q(o, f) {
    if (o == null) return {};
    const w = {};
    for (const k in o) {
      if ({}.hasOwnProperty.call(o, k)) {
        if (f.includes(k)) continue;
        w[k] = o[k];
      }
    }
    return w;
  }
  function I(o, f) {
    const w = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
      let k = Object.getOwnPropertySymbols(o);
      f && (k = k.filter((t) => Object.getOwnPropertyDescriptor(o, t).enumerable)), w.push.apply(w, k);
    }
    return w;
  }
  function x(o) {
    for (let f = 1; f < arguments.length; f++) {
      var w = arguments[f] != null ? arguments[f] : {};
      f % 2 ? I(Object(w), !0).forEach((k) => {
        r(o, k, w[k]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(w)) : I(Object(w)).forEach((k) => {
        Object.defineProperty(o, k, Object.getOwnPropertyDescriptor(w, k));
      });
    }
    return o;
  }
  function ee(o, f) {
    if (!(o instanceof f)) throw new TypeError('Cannot call a class as a function');
  }
  function U(o, f) {
    for (let w = 0; w < f.length; w++) {
      const k = f[w];
      k.enumerable = k.enumerable || !1, k.configurable = !0, 'value' in k && (k.writable = !0), Object.defineProperty(o, h(k.key), k);
    }
  }
  function Y(o, f, w) {
    return f && U(o.prototype, f), Object.defineProperty(o, 'prototype', { writable: !1 }), o;
  }
  function J(o, f) {
    if (typeof f !== 'function' && f !== null) throw new TypeError('Super expression must either be null or a function');
    o.prototype = Object.create(f && f.prototype, { constructor: { value: o, writable: !0, configurable: !0 } }), Object.defineProperty(o, 'prototype', { writable: !1 }), f && X(o, f);
  }
  function X(o, f) {
    return X = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (w, k) {
      return w.__proto__ = k, w;
    }, X(o, f);
  }
  function s(o) {
    const f = p();
    return function () {
      let w; const
        k = l(o);
      if (f) {
        const t = l(this).constructor;
        w = Reflect.construct(k, arguments, t);
      } else w = k.apply(this, arguments);
      return c(this, w);
    };
  }
  function c(o, f) {
    if (f && (R(f) == 'object' || typeof f === 'function')) return f;
    if (f !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
    return d(o);
  }
  function d(o) {
    if (o === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o;
  }
  function p() {
    try {
      var o = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
      }));
    } catch {
    }
    return (p = function () {
      return !!o;
    })();
  }
  function l(o) {
    return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (f) {
      return f.__proto__ || Object.getPrototypeOf(f);
    }, l(o);
  }
  function r(o, f, w) {
    return (f = h(f)) in o ? Object.defineProperty(o, f, {
      value: w, enumerable: !0, configurable: !0, writable: !0,
    }) : o[f] = w, o;
  }
  function h(o) {
    const f = v(o, 'string');
    return R(f) == 'symbol' ? f : `${f}`;
  }
  function v(o, f) {
    if (R(o) != 'object' || !o) return o;
    const w = o[Symbol.toPrimitive];
    if (w !== void 0) {
      const k = w.call(o, f);
      if (R(k) != 'object') return k;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (f === 'string' ? String : Number)(o);
  }
  return ve.InnerSlider = /* @__PURE__ */ (function (o) {
    J(w, o);
    const f = s(w);
    function w(k) {
      let t;
      ee(this, w), t = f.call(this, k), r(d(t), 'listRefHandler', (u) => t.list = u), r(d(t), 'trackRefHandler', (u) => t.track = u), r(d(t), 'adaptHeight', () => {
        if (t.props.adaptiveHeight && t.list) {
          const u = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
          t.list.style.height = `${(0, m.getHeight)(u)}px`;
        }
      }), r(d(t), 'componentDidMount', () => {
        if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
          const u = (0, m.getOnDemandLazySlides)(x(x({}, t.props), t.state));
          u.length > 0 && (t.setState((n) => ({
            lazyLoadedList: n.lazyLoadedList.concat(u),
          })), t.props.onLazyLoad && t.props.onLazyLoad(u));
        }
        const e = x({
          listRef: t.list,
          trackRef: t.track,
        }, t.props);
        t.updateState(e, !0, () => {
          t.adaptHeight(), t.props.autoplay && t.autoPlay('update');
        }), t.props.lazyLoad === 'progressive' && (t.lazyLoadTimer = setInterval(t.progressiveLazyLoad, 1e3)), t.ro = new D.default(() => {
          t.state.animating ? (t.onWindowResized(!1), t.callbackTimers.push(setTimeout(() => t.onWindowResized(), t.props.speed))) : t.onWindowResized();
        }), t.ro.observe(t.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll('.slick-slide'), (n) => {
          n.onfocus = t.props.pauseOnFocus ? t.onSlideFocus : null, n.onblur = t.props.pauseOnFocus ? t.onSlideBlur : null;
        }), window.addEventListener ? window.addEventListener('resize', t.onWindowResized) : window.attachEvent('onresize', t.onWindowResized);
      }), r(d(t), 'componentWillUnmount', () => {
        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach((u) => clearTimeout(u)), t.callbackTimers = []), window.addEventListener ? window.removeEventListener('resize', t.onWindowResized) : window.detachEvent('onresize', t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
      }), r(d(t), 'componentDidUpdate', (u) => {
        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
          const e = (0, m.getOnDemandLazySlides)(x(x({}, t.props), t.state));
          e.length > 0 && (t.setState((T) => ({
            lazyLoadedList: T.lazyLoadedList.concat(e),
          })), t.props.onLazyLoad && t.props.onLazyLoad(e));
        }
        t.adaptHeight();
        const n = x(x({
          listRef: t.list,
          trackRef: t.track,
        }, t.props), t.state); const
          y = t.didPropsChange(u);
        y && t.updateState(n, y, () => {
          t.state.currentSlide >= i.default.Children.count(t.props.children) && t.changeSlide({
            message: 'index',
            index: i.default.Children.count(t.props.children) - t.props.slidesToShow,
            currentSlide: t.state.currentSlide,
          }), t.props.autoplay ? t.autoPlay('update') : t.pause('paused');
        });
      }), r(d(t), 'onWindowResized', (u) => {
        t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, g.default)(() => t.resizeWindow(u), 50), t.debouncedResize();
      }), r(d(t), 'resizeWindow', function () {
        const u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0; const
          e = !!(t.track && t.track.node);
        if (e) {
          const n = x(x({
            listRef: t.list,
            trackRef: t.track,
          }, t.props), t.state);
          t.updateState(n, u, () => {
            t.props.autoplay ? t.autoPlay('update') : t.pause('paused');
          }), t.setState({
            animating: !1,
          }), clearTimeout(t.animationEndCallback), delete t.animationEndCallback;
        }
      }), r(d(t), 'updateState', (u, e, n) => {
        const y = (0, m.initializedState)(u);
        u = x(x(x({}, u), y), {}, {
          slideIndex: y.currentSlide,
        });
        const T = (0, m.getTrackLeft)(u);
        u = x(x({}, u), {}, {
          left: T,
        });
        const O = (0, m.getTrackCSS)(u);
        (e || i.default.Children.count(t.props.children) !== i.default.Children.count(u.children)) && (y.trackStyle = O), t.setState(y, n);
      }), r(d(t), 'ssrInit', () => {
        if (t.props.variableWidth) {
          let u = 0; let e = 0; const n = []; const y = (0, m.getPreClones)(x(x(x({}, t.props), t.state), {}, {
            slideCount: t.props.children.length,
          })); const
            T = (0, m.getPostClones)(x(x(x({}, t.props), t.state), {}, {
              slideCount: t.props.children.length,
            }));
          t.props.children.forEach((re) => {
            n.push(re.props.style.width), u += re.props.style.width;
          });
          for (let O = 0; O < y; O++) e += n[n.length - 1 - O], u += n[n.length - 1 - O];
          for (let C = 0; C < T; C++) u += n[C];
          for (let P = 0; P < t.state.currentSlide; P++) e += n[P];
          const j = {
            width: `${u}px`,
            left: `${-e}px`,
          };
          if (t.props.centerMode) {
            const $ = ''.concat(n[t.state.currentSlide], 'px');
            j.left = 'calc('.concat(j.left, ' + (100% - ').concat($, ') / 2 ) ');
          }
          return {
            trackStyle: j,
          };
        }
        const F = i.default.Children.count(t.props.children); const B = x(x(x({}, t.props), t.state), {}, {
          slideCount: F,
        }); const Z = (0, m.getPreClones)(B) + (0, m.getPostClones)(B) + F; const V = 100 / t.props.slidesToShow * Z; const G = 100 / Z; let
          q = -G * ((0, m.getPreClones)(B) + t.state.currentSlide) * V / 100;
        t.props.centerMode && (q += (100 - G * V / 100) / 2);
        const K = {
          width: `${V}%`,
          left: `${q}%`,
        };
        return {
          slideWidth: `${G}%`,
          trackStyle: K,
        };
      }), r(d(t), 'checkImagesLoad', () => {
        const u = t.list && t.list.querySelectorAll && t.list.querySelectorAll('.slick-slide img') || []; const e = u.length; let
          n = 0;
        Array.prototype.forEach.call(u, (y) => {
          const T = function () {
            return ++n && n >= e && t.onWindowResized();
          };
          if (!y.onclick) {
            y.onclick = function () {
              return y.parentNode.focus();
            };
          } else {
            const O = y.onclick;
            y.onclick = function (C) {
              O(C), y.parentNode.focus();
            };
          }
          y.onload || (t.props.lazyLoad ? y.onload = function () {
            t.adaptHeight(), t.callbackTimers.push(setTimeout(t.onWindowResized, t.props.speed));
          } : (y.onload = T, y.onerror = function () {
            T(), t.props.onLazyLoadError && t.props.onLazyLoadError();
          }));
        });
      }), r(d(t), 'progressiveLazyLoad', () => {
        for (var u = [], e = x(x({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, m.getPostClones)(e); n++) {
          if (t.state.lazyLoadedList.indexOf(n) < 0) {
            u.push(n);
            break;
          }
        }
        for (let y = t.state.currentSlide - 1; y >= -(0, m.getPreClones)(e); y--) {
          if (t.state.lazyLoadedList.indexOf(y) < 0) {
            u.push(y);
            break;
          }
        }
        u.length > 0 ? (t.setState((T) => ({
          lazyLoadedList: T.lazyLoadedList.concat(u),
        })), t.props.onLazyLoad && t.props.onLazyLoad(u)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
      }), r(d(t), 'slideHandler', function (u) {
        const e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; const n = t.props; const y = n.asNavFor; const T = n.beforeChange; const O = n.onLazyLoad; const C = n.speed; const P = n.afterChange; const j = t.state.currentSlide; const $ = (0, m.slideHandler)(x(x(x({
          index: u,
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e,
        })); const F = $.state; const
          B = $.nextState;
        if (F) {
          T && T(j, F.currentSlide);
          const Z = F.lazyLoadedList.filter((V) => t.state.lazyLoadedList.indexOf(V) < 0);
          O && Z.length > 0 && O(Z), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), P && P(j), delete t.animationEndCallback), t.setState(F, () => {
            y && t.asNavForIndex !== u && (t.asNavForIndex = u, y.innerSlider.slideHandler(u)), B && (t.animationEndCallback = setTimeout(() => {
              const V = B.animating; const
                G = N(B, ['animating']);
              t.setState(G, () => {
                t.callbackTimers.push(setTimeout(() => t.setState({
                  animating: V,
                }), 10)), P && P(F.currentSlide), delete t.animationEndCallback;
              });
            }, C));
          });
        }
      }), r(d(t), 'changeSlide', function (u) {
        const e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1; const n = x(x({}, t.props), t.state); const
          y = (0, m.changeSlide)(n, u);
        if (!(y !== 0 && !y) && (e === !0 ? t.slideHandler(y, e) : t.slideHandler(y), t.props.autoplay && t.autoPlay('update'), t.props.focusOnSelect)) {
          const T = t.list.querySelectorAll('.slick-current');
          T[0] && T[0].focus();
        }
      }), r(d(t), 'clickHandler', (u) => {
        t.clickable === !1 && (u.stopPropagation(), u.preventDefault()), t.clickable = !0;
      }), r(d(t), 'keyHandler', (u) => {
        const e = (0, m.keyHandler)(u, t.props.accessibility, t.props.rtl);
        e !== '' && t.changeSlide({
          message: e,
        });
      }), r(d(t), 'selectHandler', (u) => {
        t.changeSlide(u);
      }), r(d(t), 'disableBodyScroll', () => {
        const u = function (n) {
          n = n || window.event, n.preventDefault && n.preventDefault(), n.returnValue = !1;
        };
        window.ontouchmove = u;
      }), r(d(t), 'enableBodyScroll', () => {
        window.ontouchmove = null;
      }), r(d(t), 'swipeStart', (u) => {
        t.props.verticalSwiping && t.disableBodyScroll();
        const e = (0, m.swipeStart)(u, t.props.swipe, t.props.draggable);
        e !== '' && t.setState(e);
      }), r(d(t), 'swipeMove', (u) => {
        const e = (0, m.swipeMove)(u, x(x(x({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide,
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(d(t), 'swipeEnd', (u) => {
        const e = (0, m.swipeEnd)(u, x(x(x({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide,
        }));
        if (e) {
          const n = e.triggerSlideHandler;
          delete e.triggerSlideHandler, t.setState(e), n !== void 0 && (t.slideHandler(n), t.props.verticalSwiping && t.enableBodyScroll());
        }
      }), r(d(t), 'touchEnd', (u) => {
        t.swipeEnd(u), t.clickable = !0;
      }), r(d(t), 'slickPrev', () => {
        t.callbackTimers.push(setTimeout(() => t.changeSlide({
          message: 'previous',
        }), 0));
      }), r(d(t), 'slickNext', () => {
        t.callbackTimers.push(setTimeout(() => t.changeSlide({
          message: 'next',
        }), 0));
      }), r(d(t), 'slickGoTo', function (u) {
        const e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (u = Number(u), isNaN(u)) return '';
        t.callbackTimers.push(setTimeout(() => t.changeSlide({
          message: 'index',
          index: u,
          currentSlide: t.state.currentSlide,
        }, e), 0));
      }), r(d(t), 'play', () => {
        let u;
        if (t.props.rtl) u = t.state.currentSlide - t.props.slidesToScroll;
        else if ((0, m.canGoNext)(x(x({}, t.props), t.state))) u = t.state.currentSlide + t.props.slidesToScroll;
        else return !1;
        t.slideHandler(u);
      }), r(d(t), 'autoPlay', (u) => {
        t.autoplayTimer && clearInterval(t.autoplayTimer);
        const e = t.state.autoplaying;
        if (u === 'update') {
          if (e === 'hovered' || e === 'focused' || e === 'paused') return;
        } else if (u === 'leave') {
          if (e === 'paused' || e === 'focused') return;
        } else if (u === 'blur' && (e === 'paused' || e === 'hovered')) return;
        t.autoplayTimer = setInterval(t.play, t.props.autoplaySpeed + 50), t.setState({
          autoplaying: 'playing',
        });
      }), r(d(t), 'pause', (u) => {
        t.autoplayTimer && (clearInterval(t.autoplayTimer), t.autoplayTimer = null);
        const e = t.state.autoplaying;
        u === 'paused' ? t.setState({
          autoplaying: 'paused',
        }) : u === 'focused' ? (e === 'hovered' || e === 'playing') && t.setState({
          autoplaying: 'focused',
        }) : e === 'playing' && t.setState({
          autoplaying: 'hovered',
        });
      }), r(d(t), 'onDotsOver', () => t.props.autoplay && t.pause('hovered')), r(d(t), 'onDotsLeave', () => t.props.autoplay && t.state.autoplaying === 'hovered' && t.autoPlay('leave')), r(d(t), 'onTrackOver', () => t.props.autoplay && t.pause('hovered')), r(d(t), 'onTrackLeave', () => t.props.autoplay && t.state.autoplaying === 'hovered' && t.autoPlay('leave')), r(d(t), 'onSlideFocus', () => t.props.autoplay && t.pause('focused')), r(d(t), 'onSlideBlur', () => t.props.autoplay && t.state.autoplaying === 'focused' && t.autoPlay('blur')), r(d(t), 'render', () => {
        const u = (0, b.default)('slick-slider', t.props.className, {
          'slick-vertical': t.props.vertical,
          'slick-initialized': !0,
        }); const e = x(x({}, t.props), t.state); let n = (0, m.extractObject)(e, ['fade', 'cssEase', 'speed', 'infinite', 'centerMode', 'focusOnSelect', 'currentSlide', 'lazyLoad', 'lazyLoadedList', 'rtl', 'slideWidth', 'slideHeight', 'listHeight', 'vertical', 'slidesToShow', 'slidesToScroll', 'slideCount', 'trackStyle', 'variableWidth', 'unslick', 'centerPadding', 'targetSlide', 'useCSS']); const
          y = t.props.pauseOnHover;
        n = x(x({}, n), {}, {
          onMouseEnter: y ? t.onTrackOver : null,
          onMouseLeave: y ? t.onTrackLeave : null,
          onMouseOver: y ? t.onTrackOver : null,
          focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null,
        });
        let T;
        if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
          let O = (0, m.extractObject)(e, ['dotsClass', 'slideCount', 'slidesToShow', 'currentSlide', 'slidesToScroll', 'clickHandler', 'children', 'customPaging', 'infinite', 'appendDots']); const
            C = t.props.pauseOnDotsHover;
          O = x(x({}, O), {}, {
            clickHandler: t.changeSlide,
            onMouseEnter: C ? t.onDotsLeave : null,
            onMouseOver: C ? t.onDotsOver : null,
            onMouseLeave: C ? t.onDotsLeave : null,
          }), T = /* @__PURE__ */ i.default.createElement(M.Dots, O);
        }
        let P; let j; const
          $ = (0, m.extractObject)(e, ['infinite', 'centerMode', 'currentSlide', 'slideCount', 'slidesToShow', 'prevArrow', 'nextArrow']);
        $.clickHandler = t.changeSlide, t.props.arrows && (P = /* @__PURE__ */ i.default.createElement(L.PrevArrow, $), j = /* @__PURE__ */ i.default.createElement(L.NextArrow, $));
        let F = null;
        t.props.vertical && (F = {
          height: t.state.listHeight,
        });
        let B = null;
        t.props.vertical === !1 ? t.props.centerMode === !0 && (B = {
          padding: `0px ${t.props.centerPadding}`,
        }) : t.props.centerMode === !0 && (B = {
          padding: `${t.props.centerPadding} 0px`,
        });
        const Z = x(x({}, F), B); const V = t.props.touchMove; let G = {
          className: 'slick-list',
          style: Z,
          onClick: t.clickHandler,
          onMouseDown: V ? t.swipeStart : null,
          onMouseMove: t.state.dragging && V ? t.swipeMove : null,
          onMouseUp: V ? t.swipeEnd : null,
          onMouseLeave: t.state.dragging && V ? t.swipeEnd : null,
          onTouchStart: V ? t.swipeStart : null,
          onTouchMove: t.state.dragging && V ? t.swipeMove : null,
          onTouchEnd: V ? t.touchEnd : null,
          onTouchCancel: t.state.dragging && V ? t.swipeEnd : null,
          onKeyDown: t.props.accessibility ? t.keyHandler : null,
        }; let
          q = {
            className: u,
            dir: 'ltr',
            style: t.props.style,
          };
        return t.props.unslick && (G = {
          className: 'slick-list',
        }, q = {
          className: u,
          style: t.props.style,
        }), /* @__PURE__ */ i.default.createElement('div', q, t.props.unslick ? '' : P, /* @__PURE__ */ i.default.createElement('div', H({
          ref: t.listRefHandler,
        }, G), /* @__PURE__ */ i.default.createElement(S.Track, H({
          ref: t.trackRefHandler,
        }, n), t.props.children)), t.props.unslick ? '' : j, t.props.unslick ? '' : T);
      }), t.list = null, t.track = null, t.state = x(x({}, a.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: i.default.Children.count(t.props.children),
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      const W = t.ssrInit();
      return t.state = x(x({}, t.state), W), t;
    }
    return Y(w, [{
      key: 'didPropsChange',
      value(t) {
        for (var W = !1, u = 0, e = Object.keys(this.props); u < e.length; u++) {
          const n = e[u];
          if (!t.hasOwnProperty(n)) {
            W = !0;
            break;
          }
          if (!(R(t[n]) === 'object' || typeof t[n] === 'function' || isNaN(t[n])) && t[n] !== this.props[n]) {
            W = !0;
            break;
          }
        }
        return W || i.default.Children.count(this.props.children) !== i.default.Children.count(t.children);
      },
    }]), w;
  }(i.default.Component)), ve;
}
let Ne; let
  Qe;
function Wt() {
  if (Qe) return Ne;
  Qe = 1;
  const i = function (a) {
    return a.replace(/[A-Z]/g, (g) => `-${g.toLowerCase()}`).toLowerCase();
  };
  return Ne = i, Ne;
}
let ze; let
  et;
function qt() {
  if (et) return ze;
  et = 1;
  const i = Wt(); const a = function (m) {
    const S = /[height|width]$/;
    return S.test(m);
  }; const g = function (m) {
    let S = '';
    const M = Object.keys(m);
    return M.forEach((L, D) => {
      let z = m[L];
      L = i(L), a(L) && typeof z === 'number' && (z += 'px'), z === !0 ? S += L : z === !1 ? S += `not ${L}` : S += `(${L}: ${z})`, D < M.length - 1 && (S += ' and ');
    }), S;
  }; const
    b = function (m) {
      let S = '';
      return typeof m === 'string' ? m : m instanceof Array ? (m.forEach((M, L) => {
        S += g(M), L < m.length - 1 && (S += ', ');
      }), S) : g(m);
    };
  return ze = b, ze;
}
let tt;
function Ut() {
  return tt || (tt = 1, (function (i) {
    Object.defineProperty(i, '__esModule', {
      value: !0,
    }), i.default = void 0;
    const a = M(fe); const g = Ht(); const b = M(qt()); const m = M(nt()); const
      S = Se();
    function M(p) {
      return p && p.__esModule ? p : { default: p };
    }
    function L(p) {
      '@babel/helpers - typeof';

      return L = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (l) {
        return typeof l;
      } : function (l) {
        return l && typeof Symbol === 'function' && l.constructor === Symbol && l !== Symbol.prototype ? 'symbol' : typeof l;
      }, L(p);
    }
    function D() {
      return D = Object.assign ? Object.assign.bind() : function (p) {
        for (let l = 1; l < arguments.length; l++) {
          const r = arguments[l];
          for (const h in r) ({}).hasOwnProperty.call(r, h) && (p[h] = r[h]);
        }
        return p;
      }, D.apply(null, arguments);
    }
    function z(p, l) {
      const r = Object.keys(p);
      if (Object.getOwnPropertySymbols) {
        let h = Object.getOwnPropertySymbols(p);
        l && (h = h.filter((v) => Object.getOwnPropertyDescriptor(p, v).enumerable)), r.push.apply(r, h);
      }
      return r;
    }
    function R(p) {
      for (let l = 1; l < arguments.length; l++) {
        var r = arguments[l] != null ? arguments[l] : {};
        l % 2 ? z(Object(r), !0).forEach((h) => {
          s(p, h, r[h]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(r)) : z(Object(r)).forEach((h) => {
          Object.defineProperty(p, h, Object.getOwnPropertyDescriptor(r, h));
        });
      }
      return p;
    }
    function H(p, l) {
      if (!(p instanceof l)) throw new TypeError('Cannot call a class as a function');
    }
    function N(p, l) {
      for (let r = 0; r < l.length; r++) {
        const h = l[r];
        h.enumerable = h.enumerable || !1, h.configurable = !0, 'value' in h && (h.writable = !0), Object.defineProperty(p, c(h.key), h);
      }
    }
    function Q(p, l, r) {
      return l && N(p.prototype, l), Object.defineProperty(p, 'prototype', { writable: !1 }), p;
    }
    function I(p, l) {
      if (typeof l !== 'function' && l !== null) throw new TypeError('Super expression must either be null or a function');
      p.prototype = Object.create(l && l.prototype, { constructor: { value: p, writable: !0, configurable: !0 } }), Object.defineProperty(p, 'prototype', { writable: !1 }), l && x(p, l);
    }
    function x(p, l) {
      return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (r, h) {
        return r.__proto__ = h, r;
      }, x(p, l);
    }
    function ee(p) {
      const l = J();
      return function () {
        let r; const
          h = X(p);
        if (l) {
          const v = X(this).constructor;
          r = Reflect.construct(h, arguments, v);
        } else r = h.apply(this, arguments);
        return U(this, r);
      };
    }
    function U(p, l) {
      if (l && (L(l) == 'object' || typeof l === 'function')) return l;
      if (l !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
      return Y(p);
    }
    function Y(p) {
      if (p === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return p;
    }
    function J() {
      try {
        var p = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {
        }));
      } catch {
      }
      return (J = function () {
        return !!p;
      })();
    }
    function X(p) {
      return X = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (l) {
        return l.__proto__ || Object.getPrototypeOf(l);
      }, X(p);
    }
    function s(p, l, r) {
      return (l = c(l)) in p ? Object.defineProperty(p, l, {
        value: r, enumerable: !0, configurable: !0, writable: !0,
      }) : p[l] = r, p;
    }
    function c(p) {
      const l = d(p, 'string');
      return L(l) == 'symbol' ? l : `${l}`;
    }
    function d(p, l) {
      if (L(p) != 'object' || !p) return p;
      const r = p[Symbol.toPrimitive];
      if (r !== void 0) {
        const h = r.call(p, l);
        if (L(h) != 'object') return h;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return (l === 'string' ? String : Number)(p);
    }
    i.default = /* @__PURE__ */ (function (p) {
      I(r, p);
      const l = ee(r);
      function r(h) {
        let v;
        return H(this, r), v = l.call(this, h), s(Y(v), 'innerSliderRefHandler', (o) => v.innerSlider = o), s(Y(v), 'slickPrev', () => v.innerSlider.slickPrev()), s(Y(v), 'slickNext', () => v.innerSlider.slickNext()), s(Y(v), 'slickGoTo', function (o) {
          const f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return v.innerSlider.slickGoTo(o, f);
        }), s(Y(v), 'slickPause', () => v.innerSlider.pause('paused')), s(Y(v), 'slickPlay', () => v.innerSlider.autoPlay('play')), v.state = {
          breakpoint: null,
        }, v._responsiveMediaHandlers = [], v;
      }
      return Q(r, [{
        key: 'media',
        value(v, o) {
          const f = window.matchMedia(v); const
            w = function (t) {
              const W = t.matches;
              W && o();
            };
          f.addListener(w), this._responsiveMediaHandlers.push({
            mql: f,
            query: v,
            listener: w,
          });
        },
        // handles responsive breakpoints
      }, {
        key: 'componentDidMount',
        value() {
          const v = this;
          if (this.props.responsive) {
            const o = this.props.responsive.map((w) => w.breakpoint);
            o.sort((w, k) => w - k), o.forEach((w, k) => {
              let t;
              k === 0 ? t = (0, b.default)({
                minWidth: 0,
                maxWidth: w,
              }) : t = (0, b.default)({
                minWidth: o[k - 1] + 1,
                maxWidth: w,
              }), (0, S.canUseDOM)() && v.media(t, () => {
                v.setState({
                  breakpoint: w,
                });
              });
            });
            const f = (0, b.default)({
              minWidth: o.slice(-1)[0],
            });
            (0, S.canUseDOM)() && this.media(f, () => {
              v.setState({
                breakpoint: null,
              });
            });
          }
        },
      }, {
        key: 'componentWillUnmount',
        value() {
          this._responsiveMediaHandlers.forEach((v) => {
            v.mql.removeListener(v.listener);
          });
        },
      }, {
        key: 'render',
        value() {
          const v = this; let o; let
            f;
          this.state.breakpoint ? (f = this.props.responsive.filter((O) => O.breakpoint === v.state.breakpoint), o = f[0].settings === 'unslick' ? 'unslick' : R(R(R({}, m.default), this.props), f[0].settings)) : o = R(R({}, m.default), this.props), o.centerMode && (o.slidesToScroll > 1 && process.env.NODE_ENV !== 'production' && console.warn('slidesToScroll should be equal to 1 in centerMode, you are using '.concat(o.slidesToScroll)), o.slidesToScroll = 1), o.fade && (o.slidesToShow > 1 && process.env.NODE_ENV !== 'production' && console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(o.slidesToShow)), o.slidesToScroll > 1 && process.env.NODE_ENV !== 'production' && console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(o.slidesToScroll)), o.slidesToShow = 1, o.slidesToScroll = 1);
          let w = a.default.Children.toArray(this.props.children);
          w = w.filter((O) => (typeof O === 'string' ? !!O.trim() : !!O)), o.variableWidth && (o.rows > 1 || o.slidesPerRow > 1) && (console.warn('variableWidth is not supported in case of rows > 1 or slidesPerRow > 1'), o.variableWidth = !1);
          for (var k = [], t = null, W = 0; W < w.length; W += o.rows * o.slidesPerRow) {
            for (var u = [], e = W; e < W + o.rows * o.slidesPerRow; e += o.slidesPerRow) {
              for (var n = [], y = e; y < e + o.slidesPerRow && (o.variableWidth && w[y].props.style && (t = w[y].props.style.width), !(y >= w.length)); y += 1) {
                n.push(/* @__PURE__ */ a.default.cloneElement(w[y], {
                  key: 100 * W + 10 * e + y,
                  tabIndex: -1,
                  style: {
                    width: ''.concat(100 / o.slidesPerRow, '%'),
                    display: 'inline-block',
                  },
                }));
              }
              u.push(/* @__PURE__ */ a.default.createElement('div', {
                key: 10 * W + e,
              }, n));
            }
            o.variableWidth ? k.push(/* @__PURE__ */ a.default.createElement('div', {
              key: W,
              style: {
                width: t,
              },
            }, u)) : k.push(/* @__PURE__ */ a.default.createElement('div', {
              key: W,
            }, u));
          }
          if (o === 'unslick') {
            const T = `regular slider ${this.props.className || ''}`;
            return /* @__PURE__ */ a.default.createElement('div', {
              className: T,
            }, w);
          } k.length <= o.slidesToShow && (o.unslick = !0);
          return /* @__PURE__ */ a.default.createElement(g.InnerSlider, D({
            style: this.props.style,
            ref: this.innerSliderRefHandler,
          }, (0, S.filterSettings)(o)), k);
        },
      }]), r;
    }(a.default.Component));
  }(je))), je;
}
let rt;
function $t() {
  return rt || (rt = 1, (function (i) {
    Object.defineProperty(i, '__esModule', {
      value: !0,
    }), i.default = void 0;
    const a = g(Ut());
    function g(b) {
      return b && b.__esModule ? b : { default: b };
    }
    i.default = a.default;
  }(Ce))), Ce;
}
const Ft = $t();
const De = /* @__PURE__ */ dt(Ft);
function Bt({
  title: i,
  titleId: a,
  ...g
}, b) {
  return /* @__PURE__ */ se.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': 'true',
    'data-slot': 'icon',
    ref: b,
    'aria-labelledby': a,
    ...g,
  }, i ? /* @__PURE__ */ se.createElement('title', {
    id: a,
  }, i) : null, /* @__PURE__ */ se.createElement('path', {
    fillRule: 'evenodd',
    d: 'M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z',
    clipRule: 'evenodd',
  }));
}
const Gt = /* @__PURE__ */ se.forwardRef(Bt);
function Xt({
  title: i,
  titleId: a,
  ...g
}, b) {
  return /* @__PURE__ */ se.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    strokeWidth: 1.5,
    stroke: 'currentColor',
    'aria-hidden': 'true',
    'data-slot': 'icon',
    ref: b,
    'aria-labelledby': a,
    ...g,
  }, i ? /* @__PURE__ */ se.createElement('title', {
    id: a,
  }, i) : null, /* @__PURE__ */ se.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z',
  }));
}
const Yt = /* @__PURE__ */ se.forwardRef(Xt);
function _e({ rating: i, textAlign: a = 'left' }) {
  if (!i || i < 1 || i > 5) return null;
  const g = a === 'center' ? 'flex justify-center' : a === 'right' ? 'flex justify-end' : 'flex justify-start';
  const b = [];
  for (let m = 1; m <= 5; m++) {
    m <= i ? b.push(
    /* @__PURE__ */ _(Gt, { className: 'w-24 h-24 text-grey-800' }, m),
    ) : b.push(
    /* @__PURE__ */ _(Yt, { className: 'w-24 h-24 text-grey-800' }, m),
    );
  }
  return /* @__PURE__ */ _('div', { className: `${g} gap-4`, children: b });
}
function me({
  /**
   * ************************************************************************
   * Important: `imagePlacement` will ONLY work if `textAlign` is 'center'
   * ************************************************************************
   */
  testimonial: i,
  author: a,
  authorTitle: g,
  authorImage: b,
  rating: m = null,
  // number | null (1-5)
  /**
   * !!! IGNORE IN COMPONENT. REMOVE THESE FROM REPEATER ITEM SETTINGS.
   * Below are (optional) props when used in a `Testimonial` component.
   *
   * The main component handles these to make sure items uniform.
   * But if you use this molecule as standalone, you can use the props below.
   */
  imageShape: S = 'rounded',
  // 'rounded' | 'none'
  textAlign: M = 'left',
  // 'left' | 'center' | 'right'
  imagePlacement: L = 'below-author',
  // 'above-author' | 'below-author' | 'above-testimonial'
  className: D = '',
  ...z
}) {
  const R = (d, p, l) => (p.includes(d) ? d : l);
  const H = R(S, ['rounded', 'none'], 'rounded');
  const N = R(M, ['left', 'center', 'right'], 'left');
  const Q = R(L, ['above-author', 'below-author', 'above-testimonial'], 'below-author');
  const I = m !== null && m >= 1 && m <= 5 ? Math.floor(m) : null;
  const x = () => {
    switch (N) {
      case 'center':
        return 'text-center';
      case 'right':
        return 'text-right';
      default:
        return 'text-left';
    }
  };
  const ee = ({
    authorImage: d, author: p, imageShape: l, textAlign: r,
  }) => {
    const h = l === 'rounded' ? 'rounded-full' : 'rounded-none';
    const v = r === 'center' ? `${h} w-auto h-auto max-h-[60px] mx-auto` : `${h} w-48 h-48 max-w-[48px]`;
    return /* @__PURE__ */ _('img', { src: d, alt: p, className: v });
  };
  const U = ({ author: d, authorTitle: p, textAlign: l }) => /* @__PURE__ */ ae('div', {
    className: l === 'center' ? 'flex flex-col items-center' : 'flex flex-col',
    children: [
    /* @__PURE__ */ _('p', { className: 'text-xs', children: d }),
      /* @__PURE__ */ _('p', { className: 'text-xs', children: p }),
    ],
  });
  const Y = ({ testimonial: d, textAlign: p }) => /* @__PURE__ */ _('div', { className: `text-body-default ${p === 'center' ? 'text-center' : p === 'right' ? 'text-right' : 'text-left'}`, children: d });
  const J = z.alignTop ? 'items-start' : 'items-center';
  const X = () => {
    switch (N) {
      case 'right':
        return 'items-end';
      case 'center':
        return 'items-center';
      default:
        return 'items-start';
    }
  };
  const s = () => /* @__PURE__ */ ae(He, {
    children: [
    /* @__PURE__ */ _(
        ee,
        {
          authorImage: b,
          author: a,
          imageShape: H,
          textAlign: N,
        },
      ),
      /* @__PURE__ */ _(
        U,
        {
          author: a,
          authorTitle: g,
          textAlign: N,
        },
      ),
    ],
  });
  const c = () => /* @__PURE__ */ ae(He, {
    children: [
      /* @__PURE__ */ _(
        U,
        {
          author: a,
          authorTitle: g,
          textAlign: N,
        },
      ),
      /* @__PURE__ */ _(
        ee,
        {
          authorImage: b,
          author: a,
          imageShape: H,
          textAlign: N,
        },
      ),
    ],
  });
  if (N !== 'center') {
    const d = () => {
      switch (N) {
        case 'right':
          return 'flex items-center justify-end gap-10';
        default:
          return 'flex items-center gap-10';
      }
    };
    return /* @__PURE__ */ _('div', {
      className: `relative flex self-stretch justify-center ${D} ${J} w-full`,
      children: /* @__PURE__ */ ae('div', {
        className: `flex flex-col gap-testimonial-spacing-y w-full text-grey-950 ${x()}`,
        children: [
          I && /* @__PURE__ */ _(_e, { rating: I, textAlign: N }),
          /* @__PURE__ */ _(
            Y,
            {
              testimonial: i,
              textAlign: N,
            },
          ),
          /* @__PURE__ */ _('div', { className: d(), children: N === 'right' ? /* @__PURE__ */ _(c, {}) : /* @__PURE__ */ _(s, {}) }),
        ],
      }),
    });
  }
  return Q === 'above-testimonial' ? /* @__PURE__ */ _('div', {
    className: `relative flex self-stretch justify-center ${D} ${J} w-full`,
    children: /* @__PURE__ */ ae('div', {
      className: `flex flex-col gap-10 w-full text-grey-950 ${x()}`,
      children: [
        /* @__PURE__ */ _(
          ee,
          {
            authorImage: b,
            author: a,
            imageShape: H,
            textAlign: N,
          },
        ),
        I && /* @__PURE__ */ _(_e, { rating: I, textAlign: N }),
        /* @__PURE__ */ _(
          Y,
          {
            testimonial: i,
            textAlign: N,
          },
        ),
        /* @__PURE__ */ _(
          U,
          {
            author: a,
            authorTitle: g,
            textAlign: N,
          },
        ),
      ],
    }),
  }) : Q === 'above-author' ? /* @__PURE__ */ _('div', {
    className: `relative flex self-stretch justify-center ${D} ${J} w-full`,
    children: /* @__PURE__ */ ae('div', {
      className: `flex flex-col gap-10 w-full text-grey-950 ${x()}`,
      children: [
        I && /* @__PURE__ */ _(_e, { rating: I, textAlign: N }),
        /* @__PURE__ */ _(
          Y,
          {
            testimonial: i,
            textAlign: N,
          },
        ),
        /* @__PURE__ */ _('div', { className: `flex flex-col ${X()} gap-testimonial-image--spacing-y`, children: /* @__PURE__ */ _(s, {}) }),
      ],
    }),
  }) : /* @__PURE__ */ _('div', {
    className: `relative flex self-stretch justify-center ${D} ${J} w-full`,
    children: /* @__PURE__ */ ae('div', {
      className: `flex flex-col gap-10 w-full ${x()}`,
      children: [
        I && /* @__PURE__ */ _(_e, { rating: I, textAlign: N }),
        /* @__PURE__ */ _(
          Y,
          {
            testimonial: i,
            textAlign: N,
          },
        ),
        /* @__PURE__ */ _('div', { className: `flex flex-col ${X()} gap-testimonial-image--spacing-y`, children: /* @__PURE__ */ _(c, {}) }),
      ],
    }),
  });
}
const be = ({
  media: i = 'image',
  // 'image' | 'video' | 'lottie' | 'iframe'
  aspect: a = 'default',
  // 'default' | 'rectangle' | 'square'
  imageUrl: g,
  videoUrl: b,
  lottieUrl: m,
  lottieData: S,
  iframeUrl: M,
  title: L,
  className: D = '',
}) => {
  let I;
  const R = `relative w-full h-full ${a === 'square' ? 'aspect-square' : a === 'rectangle' ? 'aspect-[4/3]' : i === 'video' ? 'aspect-video' : ''}`.trim(); const H = a === 'default' ? `w-full h-full ${D}`.trim() : `absolute inset-0 w-full h-full ${D}`.trim(); const N = 'w-full h-full'; const
    Q = a === 'default' ? `min-h-[220px] md:min-h-[360px] ${H}`.trim() : H;
  switch (i) {
    case 'image':
      if (g) {
        return /* @__PURE__ */ _('div', {
          className: R,
          children: /* @__PURE__ */ _(
            'img',
            {
              src: g,
              alt: L || 'Media image',
              className: `object-cover ${H}`.trim(),
              loading: 'lazy',
            },
          ),
        });
      }
      break;
    case 'video':
      if (b) {
        let x = b;
        return (b.includes('youtube.com/watch') || b.includes('youtu.be/')) && (x = `https://www.youtube.com/embed/${b.includes('youtu.be/') ? b.split('youtu.be/')[1].split('?')[0] : (I = b.split('v=')[1]) == null ? void 0 : I.split('&')[0]}`), /* @__PURE__ */ _('div', {
          className: R,
          children: /* @__PURE__ */ _(
            'iframe',
            {
              src: x,
              title: L || 'Video player',
              frameBorder: '0',
              allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
              allowFullScreen: !0,
              className: H,
            },
          ),
        });
      }
      break;
    case 'lottie':
      if (S) {
        return /* @__PURE__ */ _('div', {
          className: R,
          children: /* @__PURE__ */ _('div', {
            className: `${H} overflow-hidden`.trim(),
            children: /* @__PURE__ */ _(
              ft,
              {
                animationData: S,
                loop: !0,
                autoplay: !0,
                className: N,
                style: { width: '100%', height: '100%' },
                rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
              },
            ),
          }),
        });
      }
      if (m) return /* @__PURE__ */ _('div', { className: R, children: /* @__PURE__ */ _('div', { className: 'absolute inset-0 flex items-center justify-center text-grey-900 text-body-default text-center p-40', children: 'Loading Lottie animation...' }) });
      break;
    case 'iframe':
      if (M) {
        return /* @__PURE__ */ _('div', {
          className: R,
          children: /* @__PURE__ */ _(
            'iframe',
            {
              src: M,
              title: L || 'Iframe content',
              frameBorder: '0',
              className: Q,
            },
          ),
        });
      }
      break;
  }
  return /* @__PURE__ */ _('div', { className: R, children: /* @__PURE__ */ _('div', { className: `flex items-center justify-center text-grey-900 text-body-default text-center p-40 ${a === 'default' ? '' : 'absolute inset-0'}`.trim(), children: i ? `${i.charAt(0).toUpperCase() + i.slice(1)} placeholder` : 'Image/Video/Lottie/iframe' }) });
};
function Jt({
  /**
   * Variation type: 'media' | 'column' | 'stacked-media' | 'trust-strip'
   * - 'media': Two column layout with media and testimonial (order can be changed), one testimonial per page
   * - 'column': Grid of testimonials with slider (1-5 columns per page)
   * - 'stacked-media': Two column layout with one media and multiple testimonials stacked (order can be changed)
   * - 'trust-strip': Use iframe or image for trust strip
   */
  type: i = 'column',
  // 'column' | 'media' | 'stacked-media' | 'trust-strip'
  /**
   * Array of testimonial objects
   * Each testimonial can optionally have a 'media' property and 'rating' property:
   * - testimonial: string
   * - author: string
   * - authorTitle: string
   * - authorImage: string
   * - rating: number (optional, 1-5) - Displays star ratings when provided
   * - media: object (optional) - { type, imageUrl, videoUrl, lottieUrl, lottieData, iframeUrl, title }
   * For type='media': Each testimonial is one page/slide
   * For type='column': Testimonials are grouped into pages based on columns
   * For type='stacked-media': Multiple testimonials share one media (use top-level media prop)
   *
   * ******************************************************************************
   * For 'trust-strip': Provide a the trust strip media object for image or iframe
   * NOTE: Other props are ignored and this will only display iframe or image.
   * ******************************************************************************
   */
  testimonials: a = [],
  /**
   * ***************************************************************
   * NOTE: This prop is ONLY used when type='stacked-media'. ***
   * ***************************************************************
   *
   * For stacked-media: Provide a single media object shared by all testimonials.
   * - { type, imageUrl, videoUrl, lottieUrl, lottieData, iframeUrl, title }
   *
   * Ignored for types 'media' and 'column'.
   */
  media: g = null,
  // object | null
  /**
   * For type='media' | 'stacked-media': Order of media and testimonial ('media-first' | 'testimonial-first')
   */
  order: b = 'testimonial-first',
  // 'media-first' | 'testimonial-first'
  /**
   * For type='column': Number of columns per page (1-5)
   */
  columns: m = 1,
  // 1 | 2 | 3 | 4 | 5
  /**
   * General testimonial alignment for all slides ('left' | 'center' | 'right')
   */
  textAlign: S = 'left',
  // 'left' | 'center' | 'right'
  /**
   * General image placement for all slides ('above-author' | 'below-author' | 'above-testimonial')
   * Only applies when textAlign is 'center'
   */
  imagePlacement: M = 'below-author',
  // 'above-author' | 'below-author' | 'above-testimonial'
  /**
   * General image shape for all slides ('rounded' | 'none')
   */
  imageShape: L = 'rounded',
  // 'rounded' | 'none'
  /**
   * Enable or disable carousel/slider functionality
   * When disabled, all content is displayed without slider
   */
  enableCarousel: D = !0,
  // boolean
  id: z = '',
  className: R = '',
}) {
  const H = (h, v, o) => (v.includes(h) ? h : o);
  const N = H(i, ['media', 'column', 'stacked-media', 'trust-strip'], 'column');
  const Q = H(b, ['media-first', 'testimonial-first'], 'testimonial-first');
  const I = H(m, [1, 2, 3, 4, 5], 2);
  const x = H(S, ['left', 'center', 'right'], 'left');
  const ee = H(M, ['above-author', 'below-author', 'above-testimonial'], 'below-author');
  const U = H(L, ['rounded', 'none'], 'rounded');
  const Y = ['column', 'stacked-media'].includes(N);
  const J = ['trust-strip'].includes(N);
  const X = {
    textAlign: x,
    imagePlacement: ee,
    imageShape: U,
    alignTop: Y,
    // Use items-start for grid layouts, items-center for media layouts
  };
  const s = We(() => (!a || a.length === 0 ? 0 : N === 'media' ? a.length : Math.ceil(a.length / I)), [N, a, I]);
  const c = 'relative inline-block w-auto h-auto m-0 p-0 cursor-pointer';
  const d = 'text-[0] leading-[0] block w-[12px] h-[12px] p-0 cursor-pointer text-transparent border-0 outline-none bg-grey-700 rounded-full transition-opacity duration-300 ease-[ease]';
  const p = We(() => {
    if (!a || a.length === 0) return [];
    if (N === 'media') return a.map((v) => [v]);
    const h = [];
    for (let v = 0; v < a.length; v += I) h.push(a.slice(v, v + I));
    return h;
  }, [N, a, I]);
  const l = {
    className: 'w-full testimonial-slider',
    dots: s > 1,
    infinite: !1,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !1,
    arrows: !1,
    customPaging: (h) => /* @__PURE__ */ _(
      'button',
      {
        'aria-label': `Go to page ${h + 1}`,
      },
    ),
    appendDots: (h) => /* @__PURE__ */ _('div', {
      className: 'relative flex justify-center items-center w-auto m-0 p-0 z-10 mt-40',
      children: /* @__PURE__ */ _('ul', {
        className: 'flex p-10 items-center gap-10 rounded-full border border-grey-300 w-auto m-0 list-none text-center shadow-sm bg-grey-800 mt-40',
        children: ct.map(h, (v) => {
          let k; let t; let
            W;
          if (!qe(v)) return v;
          const o = (((k = v.props) == null ? void 0 : k.className) || '').includes('slick-active'); const f = (t = v.props) == null ? void 0 : t.children; const
            w = qe(f) ? Ue(f, {
              className: `${d} ${o ? 'opacity-100 bg-grey-800' : 'opacity-50'}`,
              style: {
                fontSize: '0',
                lineHeight: '0',
                display: 'block',
                width: '12px',
                height: '12px',
                padding: '0',
                cursor: 'pointer',
                color: 'transparent',
                border: '0',
                outline: 'none',
                background: o ? '#1f2937' : '#6b7280',
                borderRadius: '9999px',
                transition: 'opacity 300ms ease',
                opacity: o ? '1' : '0.5',
              },
            }) : f;
          return Ue(v, {
            className: `${c} ${((W = v.props) == null ? void 0 : W.className) || ''}`.trim(),
            children: w,
          });
        }),
      }),
    }),
  };
  const r = (h, v) => (v ? x === 'center' ? 'p-testimonial-padding xl:px-testimonial-padding' : h ? 'pt-testimonial-padding xl:pl-testimonial-padding' : 'pb-testimonial-padding xl:pb-0 xl:pr-testimonial-padding' : '');
  if (J) {
    return !a || a.length === 0 || !a.some((v) => {
      let o; let
        f;
      return ((o = v.media) == null ? void 0 : o.imageUrl) || ((f = v.media) == null ? void 0 : f.iframeUrl);
    }) ? null : /* @__PURE__ */ _('div', {
        className: R,
        id: z,
        children: /* @__PURE__ */ _(De, {
          ...l,
          children: a.map((v, o) => {
            const f = v.media; const
              w = (f == null ? void 0 : f.type) || 'image';
            return /* @__PURE__ */ _('div', {
              className: 'h-[220px]',
              children: /* @__PURE__ */ _(
                be,
                {
                  media: w,
                  aspect: 'default',
                  imageUrl: f == null ? void 0 : f.imageUrl,
                  iframeUrl: f == null ? void 0 : f.iframeUrl,
                  title: (f == null ? void 0 : f.title) || '',
                  className: 'w-full h-full object-cover',
                },
              ),
            }, o);
          }),
        }),
      });
  }
  if (N === 'media') {
    if (!a || a.length === 0) return null;
    const h = Q === 'media-first';
    const v = (o) => {
      const f = o.media; const w = !!f; const k = w ? 'xl:w-1/2' : 'w-full'; const
        t = r(h, w);
      return w ? /* @__PURE__ */ ae('div', {
        className: 'flex flex-col xl:flex-row items-stretch text-gray-950',
        children: [
          h && /* @__PURE__ */ _('div', {
            className: 'relative w-full xl:w-1/2 h-full min-h-[220px] overflow-hidden',
            children: /* @__PURE__ */ _('div', {
              className: 'absolute inset-0 w-full h-full',
              children: /* @__PURE__ */ _(
                be,
                {
                  media: f.type || 'image',
                  aspect: 'default',
                  imageUrl: f.imageUrl,
                  videoUrl: f.videoUrl,
                  lottieUrl: f.lottieUrl,
                  lottieData: f.lottieData,
                  iframeUrl: f.iframeUrl,
                  title: f.title || '',
                  className: 'w-full h-full object-cover',
                },
              ),
            }),
          }),
          /* @__PURE__ */ _('div', {
            className: `relative flex self-stretch justify-center items-center ${k} ${t}`,
            children: /* @__PURE__ */ _(
              me,
              {
                testimonial: o.testimonial,
                author: o.author,
                authorTitle: o.authorTitle,
                authorImage: o.authorImage,
                rating: o.rating,
                ...X,
              },
            ),
          }),
          !h && /* @__PURE__ */ _('div', {
            className: 'relative w-full xl:w-1/2 h-full min-h-[220px] overflow-hidden',
            children: /* @__PURE__ */ _('div', {
              className: 'absolute inset-0 w-full h-full',
              children: /* @__PURE__ */ _(
                be,
                {
                  media: f.type || 'image',
                  aspect: 'default',
                  imageUrl: f.imageUrl,
                  videoUrl: f.videoUrl,
                  lottieUrl: f.lottieUrl,
                  lottieData: f.lottieData,
                  iframeUrl: f.iframeUrl,
                  title: f.title || '',
                  className: 'w-full h-full object-cover',
                },
              ),
            }),
          }),
        ],
      }) : /* @__PURE__ */ _(
        me,
        {
          testimonial: o.testimonial,
          author: o.author,
          authorTitle: o.authorTitle,
          authorImage: o.authorImage,
          rating: o.rating,
          ...X,
        },
      );
    };
    return !D || s <= 1 ? /* @__PURE__ */ _('div', { className: `relative ${R}`, id: z, children: a.map((o, f) => /* @__PURE__ */ _('div', { className: f > 0 ? 'mt-40' : '', children: v(o) }, f)) }) : /* @__PURE__ */ _('div', { className: R, id: z, children: /* @__PURE__ */ _(De, { ...l, children: a.map((o, f) => /* @__PURE__ */ _('div', { children: v(o) }, f)) }) });
  }
  if (N === 'column') {
    if (!a || a.length === 0) return null;
    const h = () => {
      switch (I) {
        case 1:
          return 'grid grid-cols-1 gap-section-spacing-x';
        case 2:
          return 'grid grid-cols-1 xl:grid-cols-2 gap-section-spacing-x';
        case 3:
          return 'grid grid-cols-1 xl:grid-cols-3 gap-section-spacing-x';
        case 4:
          return 'grid grid-cols-1 xl:grid-cols-4 gap-section-spacing-x';
        case 5:
          return 'grid grid-cols-1 xl:grid-cols-5 gap-section-spacing-x';
        default:
          return 'grid grid-cols-1 gap-section-spacing-x';
      }
    };
    return !D || s <= 1 ? /* @__PURE__ */ _('div', {
      className: `relative ${R}`,
      id: z,
      children: /* @__PURE__ */ _('div', {
        className: h(),
        children: a.map((v, o) => /* @__PURE__ */ _(
          me,
          {
            testimonial: v.testimonial,
            author: v.author,
            authorTitle: v.authorTitle,
            authorImage: v.authorImage,
            rating: v.rating,
            ...X,
          },
          o,
        )),
      }),
    }) : /* @__PURE__ */ _('div', {
      className: R,
      id: z,
      children: /* @__PURE__ */ _(De, {
        ...l,
        children: p.map((v, o) => /* @__PURE__ */ _('div', {
          children: /* @__PURE__ */ _('div', {
            className: h(),
            children: v.map((f, w) => /* @__PURE__ */ _(
              me,
              {
                testimonial: f.testimonial,
                author: f.author,
                authorTitle: f.authorTitle,
                authorImage: f.authorImage,
                rating: f.rating,
                ...X,
              },
              w,
            )),
          }),
        }, o)),
      }),
    });
  }
  if (N === 'stacked-media') {
    if (!a || a.length === 0) return null;
    const h = Q === 'media-first';
    const v = !!g;
    const o = r(h, v);
    return /* @__PURE__ */ _('div', {
      className: `relative ${R}`,
      id: z,
      children: /* @__PURE__ */ ae('div', {
        className: 'flex flex-col xl:flex-row items-stretch',
        children: [
          h && v && /* @__PURE__ */ _('div', {
            className: 'relative w-full xl:w-1/2 min-h-[400px] xl:min-h-0 overflow-hidden',
            children: /* @__PURE__ */ _('div', {
              className: 'absolute inset-0 w-full h-full',
              children: /* @__PURE__ */ _(
                be,
                {
                  media: g.type || 'image',
                  aspect: 'default',
                  imageUrl: g.imageUrl,
                  videoUrl: g.videoUrl,
                  lottieUrl: g.lottieUrl,
                  lottieData: g.lottieData,
                  iframeUrl: g.iframeUrl,
                  title: g.title || '',
                  className: 'w-full h-full object-cover',
                },
              ),
            }),
          }),
          /* @__PURE__ */ _('div', {
            className: `relative flex flex-col justify-center gap-24 ${v ? 'w-full xl:w-1/2' : 'w-full'} ${o}`,
            children: a.map((f, w) => /* @__PURE__ */ _(
              me,
              {
                testimonial: f.testimonial,
                author: f.author,
                authorTitle: f.authorTitle,
                authorImage: f.authorImage,
                rating: f.rating,
                ...X,
              },
              w,
            )),
          }),
          !h && v && /* @__PURE__ */ _('div', {
            className: 'relative w-full xl:w-1/2 min-h-[400px] xl:min-h-0 overflow-hidden',
            children: /* @__PURE__ */ _('div', {
              className: 'absolute inset-0 w-full h-full',
              children: /* @__PURE__ */ _(
                be,
                {
                  media: g.type || 'image',
                  aspect: 'default',
                  imageUrl: g.imageUrl,
                  videoUrl: g.videoUrl,
                  lottieUrl: g.lottieUrl,
                  lottieData: g.lottieData,
                  iframeUrl: g.iframeUrl,
                  title: g.title || '',
                  className: 'w-full h-full object-cover',
                },
              ),
            }),
          }),
        ],
      }),
    });
  }
  return null;
}
export {
  Jt as default,
};
