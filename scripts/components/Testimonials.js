import { jsx as x, jsxs as ae, Fragment as dt } from "react/jsx-runtime";
import * as se from "react";
import fe, { lazy as pt, Suspense as ht, useState as ve, useRef as vt, useEffect as qe, useCallback as $e, forwardRef as yt } from "react";
import gt from "lottie-react";
var we = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function mt(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function bt(o) {
  if (Object.prototype.hasOwnProperty.call(o, "__esModule")) return o;
  var s = o.default;
  if (typeof s == "function") {
    var f = function g() {
      return this instanceof g ? Reflect.construct(s, arguments, this.constructor) : s.apply(this, arguments);
    };
    f.prototype = s.prototype;
  } else f = {};
  return Object.defineProperty(f, "__esModule", { value: !0 }), Object.keys(o).forEach(function(g) {
    var p = Object.getOwnPropertyDescriptor(o, g);
    Object.defineProperty(f, g, p.get ? p : {
      enumerable: !0,
      get: function() {
        return o[g];
      }
    });
  }), f;
}
var Ce = {}, je = {}, ye = {}, Te = {}, Fe;
function St() {
  return Fe || (Fe = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
    var s = {
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
        curY: 0
      },
      trackStyle: {},
      trackWidth: 0,
      targetSlide: 0
    };
    o.default = s;
  })(Te)), Te;
}
var Ee, Be;
function wt() {
  if (Be) return Ee;
  Be = 1;
  var o = "Expected a function", s = NaN, f = "[object Symbol]", g = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, L = /^0o[0-7]+$/i, M = parseInt, D = typeof we == "object" && we && we.Object === Object && we, R = typeof self == "object" && self && self.Object === Object && self, N = D || R || Function("return this")(), Y = Object.prototype, B = Y.toString, ee = Math.max, X = Math.min, O = function() {
    return N.Date.now();
  };
  function H(a, i, c) {
    var b, l, r, y, S, d, h = 0, _ = !1, k = !1, t = !0;
    if (typeof a != "function")
      throw new TypeError(o);
    i = W(i) || 0, z(c) && (_ = !!c.leading, k = "maxWait" in c, r = k ? ee(W(c.maxWait) || 0, i) : r, t = "trailing" in c ? !!c.trailing : t);
    function U(T) {
      var $ = b, F = l;
      return b = l = void 0, h = T, y = a.apply(F, $), y;
    }
    function u(T) {
      return h = T, S = setTimeout(v, i), _ ? U(T) : y;
    }
    function e(T) {
      var $ = T - d, F = T - h, G = i - $;
      return k ? X(G, r - F) : G;
    }
    function n(T) {
      var $ = T - d, F = T - h;
      return d === void 0 || $ >= i || $ < 0 || k && F >= r;
    }
    function v() {
      var T = O();
      if (n(T))
        return P(T);
      S = setTimeout(v, e(T));
    }
    function P(T) {
      return S = void 0, t && b ? U(T) : (b = l = void 0, y);
    }
    function w() {
      S !== void 0 && clearTimeout(S), h = 0, b = d = l = S = void 0;
    }
    function j() {
      return S === void 0 ? y : P(O());
    }
    function C() {
      var T = O(), $ = n(T);
      if (b = arguments, l = this, d = T, $) {
        if (S === void 0)
          return u(d);
        if (k)
          return S = setTimeout(v, i), U(d);
      }
      return S === void 0 && (S = setTimeout(v, i)), y;
    }
    return C.cancel = w, C.flush = j, C;
  }
  function z(a) {
    var i = typeof a;
    return !!a && (i == "object" || i == "function");
  }
  function Z(a) {
    return !!a && typeof a == "object";
  }
  function A(a) {
    return typeof a == "symbol" || Z(a) && B.call(a) == f;
  }
  function W(a) {
    if (typeof a == "number")
      return a;
    if (A(a))
      return s;
    if (z(a)) {
      var i = typeof a.valueOf == "function" ? a.valueOf() : a;
      a = z(i) ? i + "" : i;
    }
    if (typeof a != "string")
      return a === 0 ? a : +a;
    a = a.replace(g, "");
    var c = m.test(a);
    return c || L.test(a) ? M(a.slice(2), c ? 2 : 8) : p.test(a) ? s : +a;
  }
  return Ee = H, Ee;
}
var Le = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ge;
function ke() {
  return Ge || (Ge = 1, (function(o) {
    (function() {
      var s = {}.hasOwnProperty;
      function f() {
        for (var m = "", L = 0; L < arguments.length; L++) {
          var M = arguments[L];
          M && (m = p(m, g(M)));
        }
        return m;
      }
      function g(m) {
        if (typeof m == "string" || typeof m == "number")
          return m;
        if (typeof m != "object")
          return "";
        if (Array.isArray(m))
          return f.apply(null, m);
        if (m.toString !== Object.prototype.toString && !m.toString.toString().includes("[native code]"))
          return m.toString();
        var L = "";
        for (var M in m)
          s.call(m, M) && m[M] && (L = p(L, M));
        return L;
      }
      function p(m, L) {
        return L ? m ? m + " " + L : m + L : m;
      }
      o.exports ? (f.default = f, o.exports = f) : window.classNames = f;
    })();
  })(Le)), Le.exports;
}
var E = {}, Me = {}, Ye;
function it() {
  return Ye || (Ye = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
    var s = f(fe);
    function f(p) {
      return p && p.__esModule ? p : { default: p };
    }
    var g = {
      accessibility: !0,
      adaptiveHeight: !1,
      afterChange: null,
      appendDots: function(m) {
        return /* @__PURE__ */ s.default.createElement("ul", {
          style: {
            display: "block"
          }
        }, m);
      },
      arrows: !0,
      autoplay: !1,
      autoplaySpeed: 3e3,
      beforeChange: null,
      centerMode: !1,
      centerPadding: "50px",
      className: "",
      cssEase: "ease",
      customPaging: function(m) {
        return /* @__PURE__ */ s.default.createElement("button", null, m + 1);
      },
      dots: !1,
      dotsClass: "slick-dots",
      draggable: !0,
      easing: "linear",
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
      slide: "div",
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
      unslick: !1
    };
    o.default = g;
  })(Me)), Me;
}
var Xe;
function be() {
  if (Xe) return E;
  Xe = 1, Object.defineProperty(E, "__esModule", {
    value: !0
  }), E.checkSpecKeys = E.checkNavigable = E.changeSlide = E.canUseDOM = E.canGoNext = void 0, E.clamp = R, E.extractObject = void 0, E.filterSettings = U, E.validSettings = E.swipeStart = E.swipeMove = E.swipeEnd = E.slidesOnRight = E.slidesOnLeft = E.slideHandler = E.siblingDirection = E.safePreventDefault = E.lazyStartIndex = E.lazySlidesOnRight = E.lazySlidesOnLeft = E.lazyEndIndex = E.keyHandler = E.initializedState = E.getWidth = E.getTrackLeft = E.getTrackCSS = E.getTrackAnimateCSS = E.getTotalSlides = E.getSwipeDirection = E.getSlideCount = E.getRequiredLazySlides = E.getPreClones = E.getPostClones = E.getOnDemandLazySlides = E.getNavigableIndexes = E.getHeight = void 0;
  var o = f(fe), s = f(it());
  function f(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function g(u) {
    "@babel/helpers - typeof";
    return g = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, g(u);
  }
  function p(u, e) {
    var n = Object.keys(u);
    if (Object.getOwnPropertySymbols) {
      var v = Object.getOwnPropertySymbols(u);
      e && (v = v.filter(function(P) {
        return Object.getOwnPropertyDescriptor(u, P).enumerable;
      })), n.push.apply(n, v);
    }
    return n;
  }
  function m(u) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2 ? p(Object(n), !0).forEach(function(v) {
        L(u, v, n[v]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(v) {
        Object.defineProperty(u, v, Object.getOwnPropertyDescriptor(n, v));
      });
    }
    return u;
  }
  function L(u, e, n) {
    return (e = M(e)) in u ? Object.defineProperty(u, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : u[e] = n, u;
  }
  function M(u) {
    var e = D(u, "string");
    return g(e) == "symbol" ? e : e + "";
  }
  function D(u, e) {
    if (g(u) != "object" || !u) return u;
    var n = u[Symbol.toPrimitive];
    if (n !== void 0) {
      var v = n.call(u, e);
      if (g(v) != "object") return v;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(u);
  }
  function R(u, e, n) {
    return Math.max(e, Math.min(u, n));
  }
  var N = E.safePreventDefault = function(e) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(e._reactName) || e.preventDefault();
  }, Y = E.getOnDemandLazySlides = function(e) {
    for (var n = [], v = B(e), P = ee(e), w = v; w < P; w++)
      e.lazyLoadedList.indexOf(w) < 0 && n.push(w);
    return n;
  };
  E.getRequiredLazySlides = function(e) {
    for (var n = [], v = B(e), P = ee(e), w = v; w < P; w++)
      n.push(w);
    return n;
  };
  var B = E.lazyStartIndex = function(e) {
    return e.currentSlide - X(e);
  }, ee = E.lazyEndIndex = function(e) {
    return e.currentSlide + O(e);
  }, X = E.lazySlidesOnLeft = function(e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }, O = E.lazySlidesOnRight = function(e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }, H = E.getWidth = function(e) {
    return e && e.offsetWidth || 0;
  }, z = E.getHeight = function(e) {
    return e && e.offsetHeight || 0;
  }, Z = E.getSwipeDirection = function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, v, P, w, j;
    return v = e.startX - e.curX, P = e.startY - e.curY, w = Math.atan2(P, v), j = Math.round(w * 180 / Math.PI), j < 0 && (j = 360 - Math.abs(j)), j <= 45 && j >= 0 || j <= 360 && j >= 315 ? "left" : j >= 135 && j <= 225 ? "right" : n === !0 ? j >= 35 && j <= 135 ? "up" : "down" : "vertical";
  }, A = E.canGoNext = function(e) {
    var n = !0;
    return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (n = !1), n;
  };
  E.extractObject = function(e, n) {
    var v = {};
    return n.forEach(function(P) {
      return v[P] = e[P];
    }), v;
  }, E.initializedState = function(e) {
    var n = o.default.Children.count(e.children), v = e.listRef, P = Math.ceil(H(v)), w = e.trackRef && e.trackRef.node, j = Math.ceil(H(w)), C;
    if (e.vertical)
      C = P;
    else {
      var T = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding == "string" && e.centerPadding.slice(-1) === "%" && (T *= P / 100), C = Math.ceil((P - T) / e.slidesToShow);
    }
    var $ = v && z(v.querySelector('[data-index="0"]')), F = $ * e.slidesToShow, G = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && (G = n - 1 - e.initialSlide);
    var Q = e.lazyLoadedList || [], J = Y(m(m({}, e), {}, {
      currentSlide: G,
      lazyLoadedList: Q
    }));
    Q = Q.concat(J);
    var K = {
      slideCount: n,
      slideWidth: C,
      listWidth: P,
      trackWidth: j,
      currentSlide: G,
      slideHeight: $,
      listHeight: F,
      lazyLoadedList: Q
    };
    return e.autoplaying === null && e.autoplay && (K.autoplaying = "playing"), K;
  }, E.slideHandler = function(e) {
    var n = e.waitForAnimate, v = e.animating, P = e.fade, w = e.infinite, j = e.index, C = e.slideCount, T = e.lazyLoad, $ = e.currentSlide, F = e.centerMode, G = e.slidesToScroll, Q = e.slidesToShow, J = e.useCSS, K = e.lazyLoadedList;
    if (n && v) return {};
    var q = j, V, re, I, te = {}, ne = {}, ie = w ? j : R(j, 0, C - 1);
    if (P) {
      if (!w && (j < 0 || j >= C)) return {};
      j < 0 ? q = j + C : j >= C && (q = j - C), T && K.indexOf(q) < 0 && (K = K.concat(q)), te = {
        animating: !0,
        currentSlide: q,
        lazyLoadedList: K,
        targetSlide: q
      }, ne = {
        animating: !1,
        targetSlide: q
      };
    } else
      V = q, q < 0 ? (V = q + C, w ? C % G !== 0 && (V = C - C % G) : V = 0) : !A(e) && q > $ ? q = V = $ : F && q >= C ? (q = w ? C : C - 1, V = w ? 0 : C - 1) : q >= C && (V = q - C, w ? C % G !== 0 && (V = 0) : V = C - Q), !w && q + Q >= C && (V = C - Q), re = r(m(m({}, e), {}, {
        slideIndex: q
      })), I = r(m(m({}, e), {}, {
        slideIndex: V
      })), w || (re === I && (q = V), re = I), T && (K = K.concat(Y(m(m({}, e), {}, {
        currentSlide: q
      })))), J ? (te = {
        animating: !0,
        currentSlide: V,
        trackStyle: l(m(m({}, e), {}, {
          left: re
        })),
        lazyLoadedList: K,
        targetSlide: ie
      }, ne = {
        animating: !1,
        currentSlide: V,
        trackStyle: b(m(m({}, e), {}, {
          left: I
        })),
        swipeLeft: null,
        targetSlide: ie
      }) : te = {
        currentSlide: V,
        trackStyle: b(m(m({}, e), {}, {
          left: I
        })),
        lazyLoadedList: K,
        targetSlide: ie
      };
    return {
      state: te,
      nextState: ne
    };
  }, E.changeSlide = function(e, n) {
    var v, P, w, j, C, T = e.slidesToScroll, $ = e.slidesToShow, F = e.slideCount, G = e.currentSlide, Q = e.targetSlide, J = e.lazyLoad, K = e.infinite;
    if (j = F % T !== 0, v = j ? 0 : (F - G) % T, n.message === "previous")
      w = v === 0 ? T : $ - v, C = G - w, J && !K && (P = G - w, C = P === -1 ? F - 1 : P), K || (C = Q - T);
    else if (n.message === "next")
      w = v === 0 ? T : v, C = G + w, J && !K && (C = (G + T) % F + v), K || (C = Q + T);
    else if (n.message === "dots")
      C = n.index * n.slidesToScroll;
    else if (n.message === "children") {
      if (C = n.index, K) {
        var q = h(m(m({}, e), {}, {
          targetSlide: C
        }));
        C > n.currentSlide && q === "left" ? C = C - F : C < n.currentSlide && q === "right" && (C = C + F);
      }
    } else n.message === "index" && (C = Number(n.index));
    return C;
  }, E.keyHandler = function(e, n, v) {
    return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n ? "" : e.keyCode === 37 ? v ? "next" : "previous" : e.keyCode === 39 ? v ? "previous" : "next" : "";
  }, E.swipeStart = function(e, n, v) {
    return e.target.tagName === "IMG" && N(e), !n || !v && e.type.indexOf("mouse") !== -1 ? "" : {
      dragging: !0,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY
      }
    };
  }, E.swipeMove = function(e, n) {
    var v = n.scrolling, P = n.animating, w = n.vertical, j = n.swipeToSlide, C = n.verticalSwiping, T = n.rtl, $ = n.currentSlide, F = n.edgeFriction, G = n.edgeDragged, Q = n.onEdge, J = n.swiped, K = n.swiping, q = n.slideCount, V = n.slidesToScroll, re = n.infinite, I = n.touchObject, te = n.swipeEvent, ne = n.listHeight, ie = n.listWidth;
    if (!v) {
      if (P) return N(e);
      w && j && C && N(e);
      var oe, ue = {}, Se = r(n);
      I.curX = e.touches ? e.touches[0].pageX : e.clientX, I.curY = e.touches ? e.touches[0].pageY : e.clientY, I.swipeLength = Math.round(Math.sqrt(Math.pow(I.curX - I.startX, 2)));
      var We = Math.round(Math.sqrt(Math.pow(I.curY - I.startY, 2)));
      if (!C && !K && We > 10)
        return {
          scrolling: !0
        };
      C && (I.swipeLength = We);
      var pe = (T ? -1 : 1) * (I.curX > I.startX ? 1 : -1);
      C && (pe = I.curY > I.startY ? 1 : -1);
      var ft = Math.ceil(q / V), le = Z(n.touchObject, C), he = I.swipeLength;
      return re || ($ === 0 && (le === "right" || le === "down") || $ + 1 >= ft && (le === "left" || le === "up") || !A(n) && (le === "left" || le === "up")) && (he = I.swipeLength * F, G === !1 && Q && (Q(le), ue.edgeDragged = !0)), !J && te && (te(le), ue.swiped = !0), w ? oe = Se + he * (ne / ie) * pe : T ? oe = Se - he * pe : oe = Se + he * pe, C && (oe = Se + he * pe), ue = m(m({}, ue), {}, {
        touchObject: I,
        swipeLeft: oe,
        trackStyle: b(m(m({}, n), {}, {
          left: oe
        }))
      }), Math.abs(I.curX - I.startX) < Math.abs(I.curY - I.startY) * 0.8 || I.swipeLength > 10 && (ue.swiping = !0, N(e)), ue;
    }
  }, E.swipeEnd = function(e, n) {
    var v = n.dragging, P = n.swipe, w = n.touchObject, j = n.listWidth, C = n.touchThreshold, T = n.verticalSwiping, $ = n.listHeight, F = n.swipeToSlide, G = n.scrolling, Q = n.onSwipe, J = n.targetSlide, K = n.currentSlide, q = n.infinite;
    if (!v)
      return P && N(e), {};
    var V = T ? $ / C : j / C, re = Z(w, T), I = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {}
    };
    if (G || !w.swipeLength)
      return I;
    if (w.swipeLength > V) {
      N(e), Q && Q(re);
      var te, ne, ie = q ? K : J;
      switch (re) {
        case "left":
        case "up":
          ne = ie + i(n), te = F ? a(n, ne) : ne, I.currentDirection = 0;
          break;
        case "right":
        case "down":
          ne = ie - i(n), te = F ? a(n, ne) : ne, I.currentDirection = 1;
          break;
        default:
          te = ie;
      }
      I.triggerSlideHandler = te;
    } else {
      var oe = r(n);
      I.trackStyle = l(m(m({}, n), {}, {
        left: oe
      }));
    }
    return I;
  };
  var W = E.getNavigableIndexes = function(e) {
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, v = e.infinite ? e.slidesToShow * -1 : 0, P = e.infinite ? e.slidesToShow * -1 : 0, w = []; v < n; )
      w.push(v), v = P + e.slidesToScroll, P += Math.min(e.slidesToScroll, e.slidesToShow);
    return w;
  }, a = E.checkNavigable = function(e, n) {
    var v = W(e), P = 0;
    if (n > v[v.length - 1])
      n = v[v.length - 1];
    else
      for (var w in v) {
        if (n < v[w]) {
          n = P;
          break;
        }
        P = v[w];
      }
    return n;
  }, i = E.getSlideCount = function(e) {
    var n = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      var v, P = e.listRef, w = P.querySelectorAll && P.querySelectorAll(".slick-slide") || [];
      if (Array.from(w).every(function(T) {
        if (e.vertical) {
          if (T.offsetTop + z(T) / 2 > e.swipeLeft * -1)
            return v = T, !1;
        } else if (T.offsetLeft - n + H(T) / 2 > e.swipeLeft * -1)
          return v = T, !1;
        return !0;
      }), !v)
        return 0;
      var j = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide, C = Math.abs(v.dataset.index - j) || 1;
      return C;
    } else
      return e.slidesToScroll;
  }, c = E.checkSpecKeys = function(e, n) {
    return n.reduce(function(v, P) {
      return v && e.hasOwnProperty(P);
    }, !0) ? null : console.error("Keys Missing:", e);
  }, b = E.getTrackCSS = function(e) {
    c(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
    var n, v;
    if (!e.vertical)
      n = d(e) * e.slideWidth;
    else {
      var P = e.unslick ? e.slideCount : e.slideCount + 2 * e.slidesToShow;
      v = P * e.slideHeight;
    }
    var w = {
      opacity: 1,
      transition: "",
      WebkitTransition: ""
    };
    if (e.useTransform) {
      var j = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", C = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", T = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
      w = m(m({}, w), {}, {
        WebkitTransform: j,
        transform: C,
        msTransform: T
      });
    } else
      e.vertical ? w.top = e.left : w.left = e.left;
    return e.fade && (w = {
      opacity: 1
    }), n && (w.width = n), v && (w.height = v), window && !window.addEventListener && window.attachEvent && (e.vertical ? w.marginTop = e.left + "px" : w.marginLeft = e.left + "px"), w;
  }, l = E.getTrackAnimateCSS = function(e) {
    c(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var n = b(e);
    return e.useTransform ? (n.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, n.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? n.transition = "top " + e.speed + "ms " + e.cssEase : n.transition = "left " + e.speed + "ms " + e.cssEase, n;
  }, r = E.getTrackLeft = function(e) {
    if (e.unslick)
      return 0;
    c(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var n = e.slideIndex, v = e.trackRef, P = e.infinite, w = e.centerMode, j = e.slideCount, C = e.slidesToShow, T = e.slidesToScroll, $ = e.slideWidth, F = e.listWidth, G = e.variableWidth, Q = e.slideHeight, J = e.fade, K = e.vertical, q = 0, V, re, I = 0;
    if (J || e.slideCount === 1)
      return 0;
    var te = 0;
    if (P ? (te = -y(e), j % T !== 0 && n + T > j && (te = -(n > j ? C - (n - j) : j % T)), w && (te += parseInt(C / 2))) : (j % T !== 0 && n + T > j && (te = C - j % T), w && (te = parseInt(C / 2))), q = te * $, I = te * Q, K ? V = n * Q * -1 + I : V = n * $ * -1 + q, G === !0) {
      var ne, ie = v && v.node;
      if (ne = n + y(e), re = ie && ie.childNodes[ne], V = re ? re.offsetLeft * -1 : 0, w === !0) {
        ne = P ? n + y(e) : n, re = ie && ie.children[ne], V = 0;
        for (var oe = 0; oe < ne; oe++)
          V -= ie && ie.children[oe] && ie.children[oe].offsetWidth;
        V -= parseInt(e.centerPadding), V += re && (F - re.offsetWidth) / 2;
      }
    }
    return V;
  }, y = E.getPreClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, S = E.getPostClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, d = E.getTotalSlides = function(e) {
    return e.slideCount === 1 ? 1 : y(e) + e.slideCount + S(e);
  }, h = E.siblingDirection = function(e) {
    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + _(e) ? "left" : "right" : e.targetSlide < e.currentSlide - k(e) ? "right" : "left";
  }, _ = E.slidesOnRight = function(e) {
    var n = e.slidesToShow, v = e.centerMode, P = e.rtl, w = e.centerPadding;
    if (v) {
      var j = (n - 1) / 2 + 1;
      return parseInt(w) > 0 && (j += 1), P && n % 2 === 0 && (j += 1), j;
    }
    return P ? 0 : n - 1;
  }, k = E.slidesOnLeft = function(e) {
    var n = e.slidesToShow, v = e.centerMode, P = e.rtl, w = e.centerPadding;
    if (v) {
      var j = (n - 1) / 2 + 1;
      return parseInt(w) > 0 && (j += 1), !P && n % 2 === 0 && (j += 1), j;
    }
    return P ? n - 1 : 0;
  };
  E.canUseDOM = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  };
  var t = E.validSettings = Object.keys(s.default);
  function U(u) {
    return t.reduce(function(e, n) {
      return u.hasOwnProperty(n) && (e[n] = u[n]), e;
    }, {});
  }
  return E;
}
var ge = {}, Ke;
function Ot() {
  if (Ke) return ge;
  Ke = 1, Object.defineProperty(ge, "__esModule", {
    value: !0
  }), ge.Track = void 0;
  var o = g(fe), s = g(ke()), f = be();
  function g(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function p(l) {
    "@babel/helpers - typeof";
    return p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, p(l);
  }
  function m() {
    return m = Object.assign ? Object.assign.bind() : function(l) {
      for (var r = 1; r < arguments.length; r++) {
        var y = arguments[r];
        for (var S in y)
          ({}).hasOwnProperty.call(y, S) && (l[S] = y[S]);
      }
      return l;
    }, m.apply(null, arguments);
  }
  function L(l, r) {
    if (!(l instanceof r)) throw new TypeError("Cannot call a class as a function");
  }
  function M(l, r) {
    for (var y = 0; y < r.length; y++) {
      var S = r[y];
      S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(l, A(S.key), S);
    }
  }
  function D(l, r, y) {
    return r && M(l.prototype, r), Object.defineProperty(l, "prototype", { writable: !1 }), l;
  }
  function R(l, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
    l.prototype = Object.create(r && r.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), Object.defineProperty(l, "prototype", { writable: !1 }), r && N(l, r);
  }
  function N(l, r) {
    return N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(y, S) {
      return y.__proto__ = S, y;
    }, N(l, r);
  }
  function Y(l) {
    var r = X();
    return function() {
      var y, S = O(l);
      if (r) {
        var d = O(this).constructor;
        y = Reflect.construct(S, arguments, d);
      } else y = S.apply(this, arguments);
      return B(this, y);
    };
  }
  function B(l, r) {
    if (r && (p(r) == "object" || typeof r == "function")) return r;
    if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return ee(l);
  }
  function ee(l) {
    if (l === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return l;
  }
  function X() {
    try {
      var l = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (X = function() {
      return !!l;
    })();
  }
  function O(l) {
    return O = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, O(l);
  }
  function H(l, r) {
    var y = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      var S = Object.getOwnPropertySymbols(l);
      r && (S = S.filter(function(d) {
        return Object.getOwnPropertyDescriptor(l, d).enumerable;
      })), y.push.apply(y, S);
    }
    return y;
  }
  function z(l) {
    for (var r = 1; r < arguments.length; r++) {
      var y = arguments[r] != null ? arguments[r] : {};
      r % 2 ? H(Object(y), !0).forEach(function(S) {
        Z(l, S, y[S]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(y)) : H(Object(y)).forEach(function(S) {
        Object.defineProperty(l, S, Object.getOwnPropertyDescriptor(y, S));
      });
    }
    return l;
  }
  function Z(l, r, y) {
    return (r = A(r)) in l ? Object.defineProperty(l, r, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : l[r] = y, l;
  }
  function A(l) {
    var r = W(l, "string");
    return p(r) == "symbol" ? r : r + "";
  }
  function W(l, r) {
    if (p(l) != "object" || !l) return l;
    var y = l[Symbol.toPrimitive];
    if (y !== void 0) {
      var S = y.call(l, r);
      if (p(S) != "object") return S;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(l);
  }
  var a = function(r) {
    var y, S, d, h, _;
    r.rtl ? _ = r.slideCount - 1 - r.index : _ = r.index, d = _ < 0 || _ >= r.slideCount, r.centerMode ? (h = Math.floor(r.slidesToShow / 2), S = (_ - r.currentSlide) % r.slideCount === 0, _ > r.currentSlide - h - 1 && _ <= r.currentSlide + h && (y = !0)) : y = r.currentSlide <= _ && _ < r.currentSlide + r.slidesToShow;
    var k;
    r.targetSlide < 0 ? k = r.targetSlide + r.slideCount : r.targetSlide >= r.slideCount ? k = r.targetSlide - r.slideCount : k = r.targetSlide;
    var t = _ === k;
    return {
      "slick-slide": !0,
      "slick-active": y,
      "slick-center": S,
      "slick-cloned": d,
      "slick-current": t
      // dubious in case of RTL
    };
  }, i = function(r) {
    var y = {};
    return (r.variableWidth === void 0 || r.variableWidth === !1) && (y.width = r.slideWidth), r.fade && (y.position = "relative", r.vertical ? y.top = -r.index * parseInt(r.slideHeight) : y.left = -r.index * parseInt(r.slideWidth), y.opacity = r.currentSlide === r.index ? 1 : 0, y.zIndex = r.currentSlide === r.index ? 999 : 998, r.useCSS && (y.transition = "opacity " + r.speed + "ms " + r.cssEase + ", visibility " + r.speed + "ms " + r.cssEase)), y;
  }, c = function(r, y) {
    return r.key || y;
  }, b = function(r) {
    var y, S = [], d = [], h = [], _ = o.default.Children.count(r.children), k = (0, f.lazyStartIndex)(r), t = (0, f.lazyEndIndex)(r);
    return o.default.Children.forEach(r.children, function(U, u) {
      var e, n = {
        message: "children",
        index: u,
        slidesToScroll: r.slidesToScroll,
        currentSlide: r.currentSlide
      };
      !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(u) >= 0 ? e = U : e = /* @__PURE__ */ o.default.createElement("div", null);
      var v = i(z(z({}, r), {}, {
        index: u
      })), P = e.props.className || "", w = a(z(z({}, r), {}, {
        index: u
      }));
      if (S.push(/* @__PURE__ */ o.default.cloneElement(e, {
        key: "original" + c(e, u),
        "data-index": u,
        className: (0, s.default)(w, P),
        tabIndex: "-1",
        "aria-hidden": !w["slick-active"],
        style: z(z({
          outline: "none"
        }, e.props.style || {}), v),
        onClick: function(T) {
          e.props && e.props.onClick && e.props.onClick(T), r.focusOnSelect && r.focusOnSelect(n);
        }
      })), r.infinite && _ > 1 && r.fade === !1 && !r.unslick) {
        var j = _ - u;
        j <= (0, f.getPreClones)(r) && (y = -j, y >= k && (e = U), w = a(z(z({}, r), {}, {
          index: y
        })), d.push(/* @__PURE__ */ o.default.cloneElement(e, {
          key: "precloned" + c(e, y),
          "data-index": y,
          tabIndex: "-1",
          className: (0, s.default)(w, P),
          "aria-hidden": !w["slick-active"],
          style: z(z({}, e.props.style || {}), v),
          onClick: function(T) {
            e.props && e.props.onClick && e.props.onClick(T), r.focusOnSelect && r.focusOnSelect(n);
          }
        }))), u < (0, f.getPostClones)(r) && (y = _ + u, y < t && (e = U), w = a(z(z({}, r), {}, {
          index: y
        })), h.push(/* @__PURE__ */ o.default.cloneElement(e, {
          key: "postcloned" + c(e, y),
          "data-index": y,
          tabIndex: "-1",
          className: (0, s.default)(w, P),
          "aria-hidden": !w["slick-active"],
          style: z(z({}, e.props.style || {}), v),
          onClick: function(T) {
            e.props && e.props.onClick && e.props.onClick(T), r.focusOnSelect && r.focusOnSelect(n);
          }
        })));
      }
    }), r.rtl ? d.concat(S, h).reverse() : d.concat(S, h);
  };
  return ge.Track = /* @__PURE__ */ (function(l) {
    R(y, l);
    var r = Y(y);
    function y() {
      var S;
      L(this, y);
      for (var d = arguments.length, h = new Array(d), _ = 0; _ < d; _++)
        h[_] = arguments[_];
      return S = r.call.apply(r, [this].concat(h)), Z(ee(S), "node", null), Z(ee(S), "handleRef", function(k) {
        S.node = k;
      }), S;
    }
    return D(y, [{
      key: "render",
      value: function() {
        var d = b(this.props), h = this.props, _ = h.onMouseEnter, k = h.onMouseOver, t = h.onMouseLeave, U = {
          onMouseEnter: _,
          onMouseOver: k,
          onMouseLeave: t
        };
        return /* @__PURE__ */ o.default.createElement("div", m({
          ref: this.handleRef,
          className: "slick-track",
          style: this.props.trackStyle
        }, U), d);
      }
    }]), y;
  })(o.default.PureComponent), ge;
}
var me = {}, Ue;
function _t() {
  if (Ue) return me;
  Ue = 1;
  function o(a) {
    "@babel/helpers - typeof";
    return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
      return typeof i;
    } : function(i) {
      return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
    }, o(a);
  }
  Object.defineProperty(me, "__esModule", {
    value: !0
  }), me.Dots = void 0;
  var s = p(fe), f = p(ke()), g = be();
  function p(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function m(a, i) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var b = Object.getOwnPropertySymbols(a);
      i && (b = b.filter(function(l) {
        return Object.getOwnPropertyDescriptor(a, l).enumerable;
      })), c.push.apply(c, b);
    }
    return c;
  }
  function L(a) {
    for (var i = 1; i < arguments.length; i++) {
      var c = arguments[i] != null ? arguments[i] : {};
      i % 2 ? m(Object(c), !0).forEach(function(b) {
        M(a, b, c[b]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : m(Object(c)).forEach(function(b) {
        Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
      });
    }
    return a;
  }
  function M(a, i, c) {
    return (i = Y(i)) in a ? Object.defineProperty(a, i, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : a[i] = c, a;
  }
  function D(a, i) {
    if (!(a instanceof i)) throw new TypeError("Cannot call a class as a function");
  }
  function R(a, i) {
    for (var c = 0; c < i.length; c++) {
      var b = i[c];
      b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(a, Y(b.key), b);
    }
  }
  function N(a, i, c) {
    return i && R(a.prototype, i), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function Y(a) {
    var i = B(a, "string");
    return o(i) == "symbol" ? i : i + "";
  }
  function B(a, i) {
    if (o(a) != "object" || !a) return a;
    var c = a[Symbol.toPrimitive];
    if (c !== void 0) {
      var b = c.call(a, i);
      if (o(b) != "object") return b;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  function ee(a, i) {
    if (typeof i != "function" && i !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(i && i.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), i && X(a, i);
  }
  function X(a, i) {
    return X = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, b) {
      return c.__proto__ = b, c;
    }, X(a, i);
  }
  function O(a) {
    var i = Z();
    return function() {
      var c, b = A(a);
      if (i) {
        var l = A(this).constructor;
        c = Reflect.construct(b, arguments, l);
      } else c = b.apply(this, arguments);
      return H(this, c);
    };
  }
  function H(a, i) {
    if (i && (o(i) == "object" || typeof i == "function")) return i;
    if (i !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return z(a);
  }
  function z(a) {
    if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a;
  }
  function Z() {
    try {
      var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (Z = function() {
      return !!a;
    })();
  }
  function A(a) {
    return A = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
      return i.__proto__ || Object.getPrototypeOf(i);
    }, A(a);
  }
  var W = function(i) {
    var c;
    return i.infinite ? c = Math.ceil(i.slideCount / i.slidesToScroll) : c = Math.ceil((i.slideCount - i.slidesToShow) / i.slidesToScroll) + 1, c;
  };
  return me.Dots = /* @__PURE__ */ (function(a) {
    ee(c, a);
    var i = O(c);
    function c() {
      return D(this, c), i.apply(this, arguments);
    }
    return N(c, [{
      key: "clickHandler",
      value: function(l, r) {
        r.preventDefault(), this.props.clickHandler(l);
      }
    }, {
      key: "render",
      value: function() {
        for (var l = this.props, r = l.onMouseEnter, y = l.onMouseOver, S = l.onMouseLeave, d = l.infinite, h = l.slidesToScroll, _ = l.slidesToShow, k = l.slideCount, t = l.currentSlide, U = W({
          slideCount: k,
          slidesToScroll: h,
          slidesToShow: _,
          infinite: d
        }), u = {
          onMouseEnter: r,
          onMouseOver: y,
          onMouseLeave: S
        }, e = [], n = 0; n < U; n++) {
          var v = (n + 1) * h - 1, P = d ? v : (0, g.clamp)(v, 0, k - 1), w = P - (h - 1), j = d ? w : (0, g.clamp)(w, 0, k - 1), C = (0, f.default)({
            "slick-active": d ? t >= j && t <= P : t === j
          }), T = {
            message: "dots",
            index: n,
            slidesToScroll: h,
            currentSlide: t
          }, $ = this.clickHandler.bind(this, T);
          e = e.concat(/* @__PURE__ */ s.default.createElement("li", {
            key: n,
            className: C
          }, /* @__PURE__ */ s.default.cloneElement(this.props.customPaging(n), {
            onClick: $
          })));
        }
        return /* @__PURE__ */ s.default.cloneElement(this.props.appendDots(e), L({
          className: this.props.dotsClass
        }, u));
      }
    }]), c;
  })(s.default.PureComponent), me;
}
var ce = {}, Ve;
function Pt() {
  if (Ve) return ce;
  Ve = 1;
  function o(a) {
    "@babel/helpers - typeof";
    return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
      return typeof i;
    } : function(i) {
      return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
    }, o(a);
  }
  Object.defineProperty(ce, "__esModule", {
    value: !0
  }), ce.PrevArrow = ce.NextArrow = void 0;
  var s = p(fe), f = p(ke()), g = be();
  function p(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function m() {
    return m = Object.assign ? Object.assign.bind() : function(a) {
      for (var i = 1; i < arguments.length; i++) {
        var c = arguments[i];
        for (var b in c)
          ({}).hasOwnProperty.call(c, b) && (a[b] = c[b]);
      }
      return a;
    }, m.apply(null, arguments);
  }
  function L(a, i) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var b = Object.getOwnPropertySymbols(a);
      i && (b = b.filter(function(l) {
        return Object.getOwnPropertyDescriptor(a, l).enumerable;
      })), c.push.apply(c, b);
    }
    return c;
  }
  function M(a) {
    for (var i = 1; i < arguments.length; i++) {
      var c = arguments[i] != null ? arguments[i] : {};
      i % 2 ? L(Object(c), !0).forEach(function(b) {
        D(a, b, c[b]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : L(Object(c)).forEach(function(b) {
        Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
      });
    }
    return a;
  }
  function D(a, i, c) {
    return (i = B(i)) in a ? Object.defineProperty(a, i, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : a[i] = c, a;
  }
  function R(a, i) {
    if (!(a instanceof i)) throw new TypeError("Cannot call a class as a function");
  }
  function N(a, i) {
    for (var c = 0; c < i.length; c++) {
      var b = i[c];
      b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(a, B(b.key), b);
    }
  }
  function Y(a, i, c) {
    return i && N(a.prototype, i), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function B(a) {
    var i = ee(a, "string");
    return o(i) == "symbol" ? i : i + "";
  }
  function ee(a, i) {
    if (o(a) != "object" || !a) return a;
    var c = a[Symbol.toPrimitive];
    if (c !== void 0) {
      var b = c.call(a, i);
      if (o(b) != "object") return b;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  function X(a, i) {
    if (typeof i != "function" && i !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(i && i.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), i && O(a, i);
  }
  function O(a, i) {
    return O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, b) {
      return c.__proto__ = b, c;
    }, O(a, i);
  }
  function H(a) {
    var i = A();
    return function() {
      var c, b = W(a);
      if (i) {
        var l = W(this).constructor;
        c = Reflect.construct(b, arguments, l);
      } else c = b.apply(this, arguments);
      return z(this, c);
    };
  }
  function z(a, i) {
    if (i && (o(i) == "object" || typeof i == "function")) return i;
    if (i !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Z(a);
  }
  function Z(a) {
    if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a;
  }
  function A() {
    try {
      var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (A = function() {
      return !!a;
    })();
  }
  function W(a) {
    return W = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
      return i.__proto__ || Object.getPrototypeOf(i);
    }, W(a);
  }
  return ce.PrevArrow = /* @__PURE__ */ (function(a) {
    X(c, a);
    var i = H(c);
    function c() {
      return R(this, c), i.apply(this, arguments);
    }
    return Y(c, [{
      key: "clickHandler",
      value: function(l, r) {
        r && r.preventDefault(), this.props.clickHandler(l, r);
      }
    }, {
      key: "render",
      value: function() {
        var l = {
          "slick-arrow": !0,
          "slick-prev": !0
        }, r = this.clickHandler.bind(this, {
          message: "previous"
        });
        !this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow) && (l["slick-disabled"] = !0, r = null);
        var y = {
          key: "0",
          "data-role": "none",
          className: (0, f.default)(l),
          style: {
            display: "block"
          },
          onClick: r
        }, S = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, d;
        return this.props.prevArrow ? d = /* @__PURE__ */ s.default.cloneElement(this.props.prevArrow, M(M({}, y), S)) : d = /* @__PURE__ */ s.default.createElement("button", m({
          key: "0",
          type: "button"
        }, y), " ", "Previous"), d;
      }
    }]), c;
  })(s.default.PureComponent), ce.NextArrow = /* @__PURE__ */ (function(a) {
    X(c, a);
    var i = H(c);
    function c() {
      return R(this, c), i.apply(this, arguments);
    }
    return Y(c, [{
      key: "clickHandler",
      value: function(l, r) {
        r && r.preventDefault(), this.props.clickHandler(l, r);
      }
    }, {
      key: "render",
      value: function() {
        var l = {
          "slick-arrow": !0,
          "slick-next": !0
        }, r = this.clickHandler.bind(this, {
          message: "next"
        });
        (0, g.canGoNext)(this.props) || (l["slick-disabled"] = !0, r = null);
        var y = {
          key: "1",
          "data-role": "none",
          className: (0, f.default)(l),
          style: {
            display: "block"
          },
          onClick: r
        }, S = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, d;
        return this.props.nextArrow ? d = /* @__PURE__ */ s.default.cloneElement(this.props.nextArrow, M(M({}, y), S)) : d = /* @__PURE__ */ s.default.createElement("button", m({
          key: "1",
          type: "button"
        }, y), " ", "Next"), d;
      }
    }]), c;
  })(s.default.PureComponent), ce;
}
var ot = (function() {
  if (typeof Map < "u")
    return Map;
  function o(s, f) {
    var g = -1;
    return s.some(function(p, m) {
      return p[0] === f ? (g = m, !0) : !1;
    }), g;
  }
  return (
    /** @class */
    (function() {
      function s() {
        this.__entries__ = [];
      }
      return Object.defineProperty(s.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), s.prototype.get = function(f) {
        var g = o(this.__entries__, f), p = this.__entries__[g];
        return p && p[1];
      }, s.prototype.set = function(f, g) {
        var p = o(this.__entries__, f);
        ~p ? this.__entries__[p][1] = g : this.__entries__.push([f, g]);
      }, s.prototype.delete = function(f) {
        var g = this.__entries__, p = o(g, f);
        ~p && g.splice(p, 1);
      }, s.prototype.has = function(f) {
        return !!~o(this.__entries__, f);
      }, s.prototype.clear = function() {
        this.__entries__.splice(0);
      }, s.prototype.forEach = function(f, g) {
        g === void 0 && (g = null);
        for (var p = 0, m = this.__entries__; p < m.length; p++) {
          var L = m[p];
          f.call(g, L[1], L[0]);
        }
      }, s;
    })()
  );
})(), Ie = typeof window < "u" && typeof document < "u" && window.document === document, _e = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), kt = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(_e) : function(o) {
    return setTimeout(function() {
      return o(Date.now());
    }, 1e3 / 60);
  };
})(), xt = 2;
function Ct(o, s) {
  var f = !1, g = !1, p = 0;
  function m() {
    f && (f = !1, o()), g && M();
  }
  function L() {
    kt(m);
  }
  function M() {
    var D = Date.now();
    if (f) {
      if (D - p < xt)
        return;
      g = !0;
    } else
      f = !0, g = !1, setTimeout(L, s);
    p = D;
  }
  return M;
}
var jt = 20, Tt = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Et = typeof MutationObserver < "u", Lt = (
  /** @class */
  (function() {
    function o() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Ct(this.refresh.bind(this), jt);
    }
    return o.prototype.addObserver = function(s) {
      ~this.observers_.indexOf(s) || this.observers_.push(s), this.connected_ || this.connect_();
    }, o.prototype.removeObserver = function(s) {
      var f = this.observers_, g = f.indexOf(s);
      ~g && f.splice(g, 1), !f.length && this.connected_ && this.disconnect_();
    }, o.prototype.refresh = function() {
      var s = this.updateObservers_();
      s && this.refresh();
    }, o.prototype.updateObservers_ = function() {
      var s = this.observers_.filter(function(f) {
        return f.gatherActive(), f.hasActive();
      });
      return s.forEach(function(f) {
        return f.broadcastActive();
      }), s.length > 0;
    }, o.prototype.connect_ = function() {
      !Ie || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Et ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, o.prototype.disconnect_ = function() {
      !Ie || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, o.prototype.onTransitionEnd_ = function(s) {
      var f = s.propertyName, g = f === void 0 ? "" : f, p = Tt.some(function(m) {
        return !!~g.indexOf(m);
      });
      p && this.refresh();
    }, o.getInstance = function() {
      return this.instance_ || (this.instance_ = new o()), this.instance_;
    }, o.instance_ = null, o;
  })()
), at = (function(o, s) {
  for (var f = 0, g = Object.keys(s); f < g.length; f++) {
    var p = g[f];
    Object.defineProperty(o, p, {
      value: s[p],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return o;
}), de = (function(o) {
  var s = o && o.ownerDocument && o.ownerDocument.defaultView;
  return s || _e;
}), lt = xe(0, 0, 0, 0);
function Pe(o) {
  return parseFloat(o) || 0;
}
function Je(o) {
  for (var s = [], f = 1; f < arguments.length; f++)
    s[f - 1] = arguments[f];
  return s.reduce(function(g, p) {
    var m = o["border-" + p + "-width"];
    return g + Pe(m);
  }, 0);
}
function Mt(o) {
  for (var s = ["top", "right", "bottom", "left"], f = {}, g = 0, p = s; g < p.length; g++) {
    var m = p[g], L = o["padding-" + m];
    f[m] = Pe(L);
  }
  return f;
}
function Rt(o) {
  var s = o.getBBox();
  return xe(0, 0, s.width, s.height);
}
function Nt(o) {
  var s = o.clientWidth, f = o.clientHeight;
  if (!s && !f)
    return lt;
  var g = de(o).getComputedStyle(o), p = Mt(g), m = p.left + p.right, L = p.top + p.bottom, M = Pe(g.width), D = Pe(g.height);
  if (g.boxSizing === "border-box" && (Math.round(M + m) !== s && (M -= Je(g, "left", "right") + m), Math.round(D + L) !== f && (D -= Je(g, "top", "bottom") + L)), !Dt(o)) {
    var R = Math.round(M + m) - s, N = Math.round(D + L) - f;
    Math.abs(R) !== 1 && (M -= R), Math.abs(N) !== 1 && (D -= N);
  }
  return xe(p.left, p.top, M, D);
}
var zt = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(o) {
    return o instanceof de(o).SVGGraphicsElement;
  } : function(o) {
    return o instanceof de(o).SVGElement && typeof o.getBBox == "function";
  };
})();
function Dt(o) {
  return o === de(o).document.documentElement;
}
function It(o) {
  return Ie ? zt(o) ? Rt(o) : Nt(o) : lt;
}
function Ht(o) {
  var s = o.x, f = o.y, g = o.width, p = o.height, m = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, L = Object.create(m.prototype);
  return at(L, {
    x: s,
    y: f,
    width: g,
    height: p,
    top: f,
    right: s + g,
    bottom: p + f,
    left: s
  }), L;
}
function xe(o, s, f, g) {
  return { x: o, y: s, width: f, height: g };
}
var At = (
  /** @class */
  (function() {
    function o(s) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = xe(0, 0, 0, 0), this.target = s;
    }
    return o.prototype.isActive = function() {
      var s = It(this.target);
      return this.contentRect_ = s, s.width !== this.broadcastWidth || s.height !== this.broadcastHeight;
    }, o.prototype.broadcastRect = function() {
      var s = this.contentRect_;
      return this.broadcastWidth = s.width, this.broadcastHeight = s.height, s;
    }, o;
  })()
), Wt = (
  /** @class */
  /* @__PURE__ */ (function() {
    function o(s, f) {
      var g = Ht(f);
      at(this, { target: s, contentRect: g });
    }
    return o;
  })()
), qt = (
  /** @class */
  (function() {
    function o(s, f, g) {
      if (this.activeObservations_ = [], this.observations_ = new ot(), typeof s != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = s, this.controller_ = f, this.callbackCtx_ = g;
    }
    return o.prototype.observe = function(s) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(s instanceof de(s).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var f = this.observations_;
        f.has(s) || (f.set(s, new At(s)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, o.prototype.unobserve = function(s) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(s instanceof de(s).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var f = this.observations_;
        f.has(s) && (f.delete(s), f.size || this.controller_.removeObserver(this));
      }
    }, o.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, o.prototype.gatherActive = function() {
      var s = this;
      this.clearActive(), this.observations_.forEach(function(f) {
        f.isActive() && s.activeObservations_.push(f);
      });
    }, o.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var s = this.callbackCtx_, f = this.activeObservations_.map(function(g) {
          return new Wt(g.target, g.broadcastRect());
        });
        this.callback_.call(s, f, s), this.clearActive();
      }
    }, o.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, o.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, o;
  })()
), st = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new ot(), ut = (
  /** @class */
  /* @__PURE__ */ (function() {
    function o(s) {
      if (!(this instanceof o))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var f = Lt.getInstance(), g = new qt(s, f, this);
      st.set(this, g);
    }
    return o;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(o) {
  ut.prototype[o] = function() {
    var s;
    return (s = st.get(this))[o].apply(s, arguments);
  };
});
var $t = (function() {
  return typeof _e.ResizeObserver < "u" ? _e.ResizeObserver : ut;
})();
const Ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $t
}, Symbol.toStringTag, { value: "Module" })), Bt = /* @__PURE__ */ bt(Ft);
var Ze;
function Gt() {
  if (Ze) return ye;
  Ze = 1, Object.defineProperty(ye, "__esModule", {
    value: !0
  }), ye.InnerSlider = void 0;
  var o = R(fe), s = R(St()), f = R(wt()), g = R(ke()), p = be(), m = Ot(), L = _t(), M = Pt(), D = R(Bt);
  function R(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function N(d) {
    "@babel/helpers - typeof";
    return N = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
      return typeof h;
    } : function(h) {
      return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
    }, N(d);
  }
  function Y() {
    return Y = Object.assign ? Object.assign.bind() : function(d) {
      for (var h = 1; h < arguments.length; h++) {
        var _ = arguments[h];
        for (var k in _)
          ({}).hasOwnProperty.call(_, k) && (d[k] = _[k]);
      }
      return d;
    }, Y.apply(null, arguments);
  }
  function B(d, h) {
    if (d == null) return {};
    var _, k, t = ee(d, h);
    if (Object.getOwnPropertySymbols) {
      var U = Object.getOwnPropertySymbols(d);
      for (k = 0; k < U.length; k++)
        _ = U[k], h.includes(_) || {}.propertyIsEnumerable.call(d, _) && (t[_] = d[_]);
    }
    return t;
  }
  function ee(d, h) {
    if (d == null) return {};
    var _ = {};
    for (var k in d)
      if ({}.hasOwnProperty.call(d, k)) {
        if (h.includes(k)) continue;
        _[k] = d[k];
      }
    return _;
  }
  function X(d, h) {
    var _ = Object.keys(d);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(d);
      h && (k = k.filter(function(t) {
        return Object.getOwnPropertyDescriptor(d, t).enumerable;
      })), _.push.apply(_, k);
    }
    return _;
  }
  function O(d) {
    for (var h = 1; h < arguments.length; h++) {
      var _ = arguments[h] != null ? arguments[h] : {};
      h % 2 ? X(Object(_), !0).forEach(function(k) {
        r(d, k, _[k]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(_)) : X(Object(_)).forEach(function(k) {
        Object.defineProperty(d, k, Object.getOwnPropertyDescriptor(_, k));
      });
    }
    return d;
  }
  function H(d, h) {
    if (!(d instanceof h)) throw new TypeError("Cannot call a class as a function");
  }
  function z(d, h) {
    for (var _ = 0; _ < h.length; _++) {
      var k = h[_];
      k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(d, y(k.key), k);
    }
  }
  function Z(d, h, _) {
    return h && z(d.prototype, h), Object.defineProperty(d, "prototype", { writable: !1 }), d;
  }
  function A(d, h) {
    if (typeof h != "function" && h !== null) throw new TypeError("Super expression must either be null or a function");
    d.prototype = Object.create(h && h.prototype, { constructor: { value: d, writable: !0, configurable: !0 } }), Object.defineProperty(d, "prototype", { writable: !1 }), h && W(d, h);
  }
  function W(d, h) {
    return W = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(_, k) {
      return _.__proto__ = k, _;
    }, W(d, h);
  }
  function a(d) {
    var h = b();
    return function() {
      var _, k = l(d);
      if (h) {
        var t = l(this).constructor;
        _ = Reflect.construct(k, arguments, t);
      } else _ = k.apply(this, arguments);
      return i(this, _);
    };
  }
  function i(d, h) {
    if (h && (N(h) == "object" || typeof h == "function")) return h;
    if (h !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return c(d);
  }
  function c(d) {
    if (d === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return d;
  }
  function b() {
    try {
      var d = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (b = function() {
      return !!d;
    })();
  }
  function l(d) {
    return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(h) {
      return h.__proto__ || Object.getPrototypeOf(h);
    }, l(d);
  }
  function r(d, h, _) {
    return (h = y(h)) in d ? Object.defineProperty(d, h, { value: _, enumerable: !0, configurable: !0, writable: !0 }) : d[h] = _, d;
  }
  function y(d) {
    var h = S(d, "string");
    return N(h) == "symbol" ? h : h + "";
  }
  function S(d, h) {
    if (N(d) != "object" || !d) return d;
    var _ = d[Symbol.toPrimitive];
    if (_ !== void 0) {
      var k = _.call(d, h);
      if (N(k) != "object") return k;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (h === "string" ? String : Number)(d);
  }
  return ye.InnerSlider = /* @__PURE__ */ (function(d) {
    A(_, d);
    var h = a(_);
    function _(k) {
      var t;
      H(this, _), t = h.call(this, k), r(c(t), "listRefHandler", function(u) {
        return t.list = u;
      }), r(c(t), "trackRefHandler", function(u) {
        return t.track = u;
      }), r(c(t), "adaptHeight", function() {
        if (t.props.adaptiveHeight && t.list) {
          var u = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
          t.list.style.height = (0, p.getHeight)(u) + "px";
        }
      }), r(c(t), "componentDidMount", function() {
        if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
          var u = (0, p.getOnDemandLazySlides)(O(O({}, t.props), t.state));
          u.length > 0 && (t.setState(function(n) {
            return {
              lazyLoadedList: n.lazyLoadedList.concat(u)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(u));
        }
        var e = O({
          listRef: t.list,
          trackRef: t.track
        }, t.props);
        t.updateState(e, !0, function() {
          t.adaptHeight(), t.props.autoplay && t.autoPlay("update");
        }), t.props.lazyLoad === "progressive" && (t.lazyLoadTimer = setInterval(t.progressiveLazyLoad, 1e3)), t.ro = new D.default(function() {
          t.state.animating ? (t.onWindowResized(!1), t.callbackTimers.push(setTimeout(function() {
            return t.onWindowResized();
          }, t.props.speed))) : t.onWindowResized();
        }), t.ro.observe(t.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(n) {
          n.onfocus = t.props.pauseOnFocus ? t.onSlideFocus : null, n.onblur = t.props.pauseOnFocus ? t.onSlideBlur : null;
        }), window.addEventListener ? window.addEventListener("resize", t.onWindowResized) : window.attachEvent("onresize", t.onWindowResized);
      }), r(c(t), "componentWillUnmount", function() {
        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach(function(u) {
          return clearTimeout(u);
        }), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
      }), r(c(t), "componentDidUpdate", function(u) {
        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
          var e = (0, p.getOnDemandLazySlides)(O(O({}, t.props), t.state));
          e.length > 0 && (t.setState(function(P) {
            return {
              lazyLoadedList: P.lazyLoadedList.concat(e)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(e));
        }
        t.adaptHeight();
        var n = O(O({
          listRef: t.list,
          trackRef: t.track
        }, t.props), t.state), v = t.didPropsChange(u);
        v && t.updateState(n, v, function() {
          t.state.currentSlide >= o.default.Children.count(t.props.children) && t.changeSlide({
            message: "index",
            index: o.default.Children.count(t.props.children) - t.props.slidesToShow,
            currentSlide: t.state.currentSlide
          }), t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
        });
      }), r(c(t), "onWindowResized", function(u) {
        t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, f.default)(function() {
          return t.resizeWindow(u);
        }, 50), t.debouncedResize();
      }), r(c(t), "resizeWindow", function() {
        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = !!(t.track && t.track.node);
        if (e) {
          var n = O(O({
            listRef: t.list,
            trackRef: t.track
          }, t.props), t.state);
          t.updateState(n, u, function() {
            t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
          }), t.setState({
            animating: !1
          }), clearTimeout(t.animationEndCallback), delete t.animationEndCallback;
        }
      }), r(c(t), "updateState", function(u, e, n) {
        var v = (0, p.initializedState)(u);
        u = O(O(O({}, u), v), {}, {
          slideIndex: v.currentSlide
        });
        var P = (0, p.getTrackLeft)(u);
        u = O(O({}, u), {}, {
          left: P
        });
        var w = (0, p.getTrackCSS)(u);
        (e || o.default.Children.count(t.props.children) !== o.default.Children.count(u.children)) && (v.trackStyle = w), t.setState(v, n);
      }), r(c(t), "ssrInit", function() {
        if (t.props.variableWidth) {
          var u = 0, e = 0, n = [], v = (0, p.getPreClones)(O(O(O({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          })), P = (0, p.getPostClones)(O(O(O({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          }));
          t.props.children.forEach(function(re) {
            n.push(re.props.style.width), u += re.props.style.width;
          });
          for (var w = 0; w < v; w++)
            e += n[n.length - 1 - w], u += n[n.length - 1 - w];
          for (var j = 0; j < P; j++)
            u += n[j];
          for (var C = 0; C < t.state.currentSlide; C++)
            e += n[C];
          var T = {
            width: u + "px",
            left: -e + "px"
          };
          if (t.props.centerMode) {
            var $ = "".concat(n[t.state.currentSlide], "px");
            T.left = "calc(".concat(T.left, " + (100% - ").concat($, ") / 2 ) ");
          }
          return {
            trackStyle: T
          };
        }
        var F = o.default.Children.count(t.props.children), G = O(O(O({}, t.props), t.state), {}, {
          slideCount: F
        }), Q = (0, p.getPreClones)(G) + (0, p.getPostClones)(G) + F, J = 100 / t.props.slidesToShow * Q, K = 100 / Q, q = -K * ((0, p.getPreClones)(G) + t.state.currentSlide) * J / 100;
        t.props.centerMode && (q += (100 - K * J / 100) / 2);
        var V = {
          width: J + "%",
          left: q + "%"
        };
        return {
          slideWidth: K + "%",
          trackStyle: V
        };
      }), r(c(t), "checkImagesLoad", function() {
        var u = t.list && t.list.querySelectorAll && t.list.querySelectorAll(".slick-slide img") || [], e = u.length, n = 0;
        Array.prototype.forEach.call(u, function(v) {
          var P = function() {
            return ++n && n >= e && t.onWindowResized();
          };
          if (!v.onclick)
            v.onclick = function() {
              return v.parentNode.focus();
            };
          else {
            var w = v.onclick;
            v.onclick = function(j) {
              w(j), v.parentNode.focus();
            };
          }
          v.onload || (t.props.lazyLoad ? v.onload = function() {
            t.adaptHeight(), t.callbackTimers.push(setTimeout(t.onWindowResized, t.props.speed));
          } : (v.onload = P, v.onerror = function() {
            P(), t.props.onLazyLoadError && t.props.onLazyLoadError();
          }));
        });
      }), r(c(t), "progressiveLazyLoad", function() {
        for (var u = [], e = O(O({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, p.getPostClones)(e); n++)
          if (t.state.lazyLoadedList.indexOf(n) < 0) {
            u.push(n);
            break;
          }
        for (var v = t.state.currentSlide - 1; v >= -(0, p.getPreClones)(e); v--)
          if (t.state.lazyLoadedList.indexOf(v) < 0) {
            u.push(v);
            break;
          }
        u.length > 0 ? (t.setState(function(P) {
          return {
            lazyLoadedList: P.lazyLoadedList.concat(u)
          };
        }), t.props.onLazyLoad && t.props.onLazyLoad(u)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
      }), r(c(t), "slideHandler", function(u) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = t.props, v = n.asNavFor, P = n.beforeChange, w = n.onLazyLoad, j = n.speed, C = n.afterChange, T = t.state.currentSlide, $ = (0, p.slideHandler)(O(O(O({
          index: u
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e
        })), F = $.state, G = $.nextState;
        if (F) {
          P && P(T, F.currentSlide);
          var Q = F.lazyLoadedList.filter(function(J) {
            return t.state.lazyLoadedList.indexOf(J) < 0;
          });
          w && Q.length > 0 && w(Q), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), C && C(T), delete t.animationEndCallback), t.setState(F, function() {
            v && t.asNavForIndex !== u && (t.asNavForIndex = u, v.innerSlider.slideHandler(u)), G && (t.animationEndCallback = setTimeout(function() {
              var J = G.animating, K = B(G, ["animating"]);
              t.setState(K, function() {
                t.callbackTimers.push(setTimeout(function() {
                  return t.setState({
                    animating: J
                  });
                }, 10)), C && C(F.currentSlide), delete t.animationEndCallback;
              });
            }, j));
          });
        }
      }), r(c(t), "changeSlide", function(u) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = O(O({}, t.props), t.state), v = (0, p.changeSlide)(n, u);
        if (!(v !== 0 && !v) && (e === !0 ? t.slideHandler(v, e) : t.slideHandler(v), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
          var P = t.list.querySelectorAll(".slick-current");
          P[0] && P[0].focus();
        }
      }), r(c(t), "clickHandler", function(u) {
        t.clickable === !1 && (u.stopPropagation(), u.preventDefault()), t.clickable = !0;
      }), r(c(t), "keyHandler", function(u) {
        var e = (0, p.keyHandler)(u, t.props.accessibility, t.props.rtl);
        e !== "" && t.changeSlide({
          message: e
        });
      }), r(c(t), "selectHandler", function(u) {
        t.changeSlide(u);
      }), r(c(t), "disableBodyScroll", function() {
        var u = function(n) {
          n = n || window.event, n.preventDefault && n.preventDefault(), n.returnValue = !1;
        };
        window.ontouchmove = u;
      }), r(c(t), "enableBodyScroll", function() {
        window.ontouchmove = null;
      }), r(c(t), "swipeStart", function(u) {
        t.props.verticalSwiping && t.disableBodyScroll();
        var e = (0, p.swipeStart)(u, t.props.swipe, t.props.draggable);
        e !== "" && t.setState(e);
      }), r(c(t), "swipeMove", function(u) {
        var e = (0, p.swipeMove)(u, O(O(O({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(c(t), "swipeEnd", function(u) {
        var e = (0, p.swipeEnd)(u, O(O(O({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        if (e) {
          var n = e.triggerSlideHandler;
          delete e.triggerSlideHandler, t.setState(e), n !== void 0 && (t.slideHandler(n), t.props.verticalSwiping && t.enableBodyScroll());
        }
      }), r(c(t), "touchEnd", function(u) {
        t.swipeEnd(u), t.clickable = !0;
      }), r(c(t), "slickPrev", function() {
        t.callbackTimers.push(setTimeout(function() {
          return t.changeSlide({
            message: "previous"
          });
        }, 0));
      }), r(c(t), "slickNext", function() {
        t.callbackTimers.push(setTimeout(function() {
          return t.changeSlide({
            message: "next"
          });
        }, 0));
      }), r(c(t), "slickGoTo", function(u) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (u = Number(u), isNaN(u)) return "";
        t.callbackTimers.push(setTimeout(function() {
          return t.changeSlide({
            message: "index",
            index: u,
            currentSlide: t.state.currentSlide
          }, e);
        }, 0));
      }), r(c(t), "play", function() {
        var u;
        if (t.props.rtl)
          u = t.state.currentSlide - t.props.slidesToScroll;
        else if ((0, p.canGoNext)(O(O({}, t.props), t.state)))
          u = t.state.currentSlide + t.props.slidesToScroll;
        else
          return !1;
        t.slideHandler(u);
      }), r(c(t), "autoPlay", function(u) {
        t.autoplayTimer && clearInterval(t.autoplayTimer);
        var e = t.state.autoplaying;
        if (u === "update") {
          if (e === "hovered" || e === "focused" || e === "paused")
            return;
        } else if (u === "leave") {
          if (e === "paused" || e === "focused")
            return;
        } else if (u === "blur" && (e === "paused" || e === "hovered"))
          return;
        t.autoplayTimer = setInterval(t.play, t.props.autoplaySpeed + 50), t.setState({
          autoplaying: "playing"
        });
      }), r(c(t), "pause", function(u) {
        t.autoplayTimer && (clearInterval(t.autoplayTimer), t.autoplayTimer = null);
        var e = t.state.autoplaying;
        u === "paused" ? t.setState({
          autoplaying: "paused"
        }) : u === "focused" ? (e === "hovered" || e === "playing") && t.setState({
          autoplaying: "focused"
        }) : e === "playing" && t.setState({
          autoplaying: "hovered"
        });
      }), r(c(t), "onDotsOver", function() {
        return t.props.autoplay && t.pause("hovered");
      }), r(c(t), "onDotsLeave", function() {
        return t.props.autoplay && t.state.autoplaying === "hovered" && t.autoPlay("leave");
      }), r(c(t), "onTrackOver", function() {
        return t.props.autoplay && t.pause("hovered");
      }), r(c(t), "onTrackLeave", function() {
        return t.props.autoplay && t.state.autoplaying === "hovered" && t.autoPlay("leave");
      }), r(c(t), "onSlideFocus", function() {
        return t.props.autoplay && t.pause("focused");
      }), r(c(t), "onSlideBlur", function() {
        return t.props.autoplay && t.state.autoplaying === "focused" && t.autoPlay("blur");
      }), r(c(t), "render", function() {
        var u = (0, g.default)("slick-slider", t.props.className, {
          "slick-vertical": t.props.vertical,
          "slick-initialized": !0
        }), e = O(O({}, t.props), t.state), n = (0, p.extractObject)(e, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), v = t.props.pauseOnHover;
        n = O(O({}, n), {}, {
          onMouseEnter: v ? t.onTrackOver : null,
          onMouseLeave: v ? t.onTrackLeave : null,
          onMouseOver: v ? t.onTrackOver : null,
          focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
        });
        var P;
        if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
          var w = (0, p.extractObject)(e, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), j = t.props.pauseOnDotsHover;
          w = O(O({}, w), {}, {
            clickHandler: t.changeSlide,
            onMouseEnter: j ? t.onDotsLeave : null,
            onMouseOver: j ? t.onDotsOver : null,
            onMouseLeave: j ? t.onDotsLeave : null
          }), P = /* @__PURE__ */ o.default.createElement(L.Dots, w);
        }
        var C, T, $ = (0, p.extractObject)(e, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        $.clickHandler = t.changeSlide, t.props.arrows && (C = /* @__PURE__ */ o.default.createElement(M.PrevArrow, $), T = /* @__PURE__ */ o.default.createElement(M.NextArrow, $));
        var F = null;
        t.props.vertical && (F = {
          height: t.state.listHeight
        });
        var G = null;
        t.props.vertical === !1 ? t.props.centerMode === !0 && (G = {
          padding: "0px " + t.props.centerPadding
        }) : t.props.centerMode === !0 && (G = {
          padding: t.props.centerPadding + " 0px"
        });
        var Q = O(O({}, F), G), J = t.props.touchMove, K = {
          className: "slick-list",
          style: Q,
          onClick: t.clickHandler,
          onMouseDown: J ? t.swipeStart : null,
          onMouseMove: t.state.dragging && J ? t.swipeMove : null,
          onMouseUp: J ? t.swipeEnd : null,
          onMouseLeave: t.state.dragging && J ? t.swipeEnd : null,
          onTouchStart: J ? t.swipeStart : null,
          onTouchMove: t.state.dragging && J ? t.swipeMove : null,
          onTouchEnd: J ? t.touchEnd : null,
          onTouchCancel: t.state.dragging && J ? t.swipeEnd : null,
          onKeyDown: t.props.accessibility ? t.keyHandler : null
        }, q = {
          className: u,
          dir: "ltr",
          style: t.props.style
        };
        return t.props.unslick && (K = {
          className: "slick-list"
        }, q = {
          className: u,
          style: t.props.style
        }), /* @__PURE__ */ o.default.createElement("div", q, t.props.unslick ? "" : C, /* @__PURE__ */ o.default.createElement("div", Y({
          ref: t.listRefHandler
        }, K), /* @__PURE__ */ o.default.createElement(m.Track, Y({
          ref: t.trackRefHandler
        }, n), t.props.children)), t.props.unslick ? "" : T, t.props.unslick ? "" : P);
      }), t.list = null, t.track = null, t.state = O(O({}, s.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: o.default.Children.count(t.props.children)
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      var U = t.ssrInit();
      return t.state = O(O({}, t.state), U), t;
    }
    return Z(_, [{
      key: "didPropsChange",
      value: function(t) {
        for (var U = !1, u = 0, e = Object.keys(this.props); u < e.length; u++) {
          var n = e[u];
          if (!t.hasOwnProperty(n)) {
            U = !0;
            break;
          }
          if (!(N(t[n]) === "object" || typeof t[n] == "function" || isNaN(t[n])) && t[n] !== this.props[n]) {
            U = !0;
            break;
          }
        }
        return U || o.default.Children.count(this.props.children) !== o.default.Children.count(t.children);
      }
    }]), _;
  })(o.default.Component), ye;
}
var Re, Qe;
function Yt() {
  if (Qe) return Re;
  Qe = 1;
  var o = function(s) {
    return s.replace(/[A-Z]/g, function(f) {
      return "-" + f.toLowerCase();
    }).toLowerCase();
  };
  return Re = o, Re;
}
var Ne, et;
function Xt() {
  if (et) return Ne;
  et = 1;
  var o = Yt(), s = function(p) {
    var m = /[height|width]$/;
    return m.test(p);
  }, f = function(p) {
    var m = "", L = Object.keys(p);
    return L.forEach(function(M, D) {
      var R = p[M];
      M = o(M), s(M) && typeof R == "number" && (R = R + "px"), R === !0 ? m += M : R === !1 ? m += "not " + M : m += "(" + M + ": " + R + ")", D < L.length - 1 && (m += " and ");
    }), m;
  }, g = function(p) {
    var m = "";
    return typeof p == "string" ? p : p instanceof Array ? (p.forEach(function(L, M) {
      m += f(L), M < p.length - 1 && (m += ", ");
    }), m) : f(p);
  };
  return Ne = g, Ne;
}
var tt;
function Kt() {
  return tt || (tt = 1, (function(o) {
    var s = { NODE_ENV: "production" };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
    var f = M(fe), g = Gt(), p = M(Xt()), m = M(it()), L = be();
    function M(l) {
      return l && l.__esModule ? l : { default: l };
    }
    function D(l) {
      "@babel/helpers - typeof";
      return D = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
        return typeof r;
      } : function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, D(l);
    }
    function R() {
      return R = Object.assign ? Object.assign.bind() : function(l) {
        for (var r = 1; r < arguments.length; r++) {
          var y = arguments[r];
          for (var S in y)
            ({}).hasOwnProperty.call(y, S) && (l[S] = y[S]);
        }
        return l;
      }, R.apply(null, arguments);
    }
    function N(l, r) {
      var y = Object.keys(l);
      if (Object.getOwnPropertySymbols) {
        var S = Object.getOwnPropertySymbols(l);
        r && (S = S.filter(function(d) {
          return Object.getOwnPropertyDescriptor(l, d).enumerable;
        })), y.push.apply(y, S);
      }
      return y;
    }
    function Y(l) {
      for (var r = 1; r < arguments.length; r++) {
        var y = arguments[r] != null ? arguments[r] : {};
        r % 2 ? N(Object(y), !0).forEach(function(S) {
          i(l, S, y[S]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(y)) : N(Object(y)).forEach(function(S) {
          Object.defineProperty(l, S, Object.getOwnPropertyDescriptor(y, S));
        });
      }
      return l;
    }
    function B(l, r) {
      if (!(l instanceof r)) throw new TypeError("Cannot call a class as a function");
    }
    function ee(l, r) {
      for (var y = 0; y < r.length; y++) {
        var S = r[y];
        S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(l, c(S.key), S);
      }
    }
    function X(l, r, y) {
      return r && ee(l.prototype, r), Object.defineProperty(l, "prototype", { writable: !1 }), l;
    }
    function O(l, r) {
      if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
      l.prototype = Object.create(r && r.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), Object.defineProperty(l, "prototype", { writable: !1 }), r && H(l, r);
    }
    function H(l, r) {
      return H = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(y, S) {
        return y.__proto__ = S, y;
      }, H(l, r);
    }
    function z(l) {
      var r = W();
      return function() {
        var y, S = a(l);
        if (r) {
          var d = a(this).constructor;
          y = Reflect.construct(S, arguments, d);
        } else y = S.apply(this, arguments);
        return Z(this, y);
      };
    }
    function Z(l, r) {
      if (r && (D(r) == "object" || typeof r == "function")) return r;
      if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return A(l);
    }
    function A(l) {
      if (l === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return l;
    }
    function W() {
      try {
        var l = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch {
      }
      return (W = function() {
        return !!l;
      })();
    }
    function a(l) {
      return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
      }, a(l);
    }
    function i(l, r, y) {
      return (r = c(r)) in l ? Object.defineProperty(l, r, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : l[r] = y, l;
    }
    function c(l) {
      var r = b(l, "string");
      return D(r) == "symbol" ? r : r + "";
    }
    function b(l, r) {
      if (D(l) != "object" || !l) return l;
      var y = l[Symbol.toPrimitive];
      if (y !== void 0) {
        var S = y.call(l, r);
        if (D(S) != "object") return S;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(l);
    }
    o.default = /* @__PURE__ */ (function(l) {
      O(y, l);
      var r = z(y);
      function y(S) {
        var d;
        return B(this, y), d = r.call(this, S), i(A(d), "innerSliderRefHandler", function(h) {
          return d.innerSlider = h;
        }), i(A(d), "slickPrev", function() {
          return d.innerSlider.slickPrev();
        }), i(A(d), "slickNext", function() {
          return d.innerSlider.slickNext();
        }), i(A(d), "slickGoTo", function(h) {
          var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return d.innerSlider.slickGoTo(h, _);
        }), i(A(d), "slickPause", function() {
          return d.innerSlider.pause("paused");
        }), i(A(d), "slickPlay", function() {
          return d.innerSlider.autoPlay("play");
        }), d.state = {
          breakpoint: null
        }, d._responsiveMediaHandlers = [], d;
      }
      return X(y, [{
        key: "media",
        value: function(d, h) {
          var _ = window.matchMedia(d), k = function(U) {
            var u = U.matches;
            u && h();
          };
          _.addListener(k), this._responsiveMediaHandlers.push({
            mql: _,
            query: d,
            listener: k
          });
        }
        // handles responsive breakpoints
      }, {
        key: "componentDidMount",
        value: function() {
          var d = this;
          if (this.props.responsive) {
            var h = this.props.responsive.map(function(k) {
              return k.breakpoint;
            });
            h.sort(function(k, t) {
              return k - t;
            }), h.forEach(function(k, t) {
              var U;
              t === 0 ? U = (0, p.default)({
                minWidth: 0,
                maxWidth: k
              }) : U = (0, p.default)({
                minWidth: h[t - 1] + 1,
                maxWidth: k
              }), (0, L.canUseDOM)() && d.media(U, function() {
                d.setState({
                  breakpoint: k
                });
              });
            });
            var _ = (0, p.default)({
              minWidth: h.slice(-1)[0]
            });
            (0, L.canUseDOM)() && this.media(_, function() {
              d.setState({
                breakpoint: null
              });
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this._responsiveMediaHandlers.forEach(function(d) {
            d.mql.removeListener(d.listener);
          });
        }
      }, {
        key: "render",
        value: function() {
          var d = this, h, _;
          this.state.breakpoint ? (_ = this.props.responsive.filter(function(j) {
            return j.breakpoint === d.state.breakpoint;
          }), h = _[0].settings === "unslick" ? "unslick" : Y(Y(Y({}, m.default), this.props), _[0].settings)) : h = Y(Y({}, m.default), this.props), h.centerMode && (h.slidesToScroll > 1 && s.NODE_ENV, h.slidesToScroll = 1), h.fade && (h.slidesToShow > 1 && s.NODE_ENV, h.slidesToScroll > 1 && s.NODE_ENV, h.slidesToShow = 1, h.slidesToScroll = 1);
          var k = f.default.Children.toArray(this.props.children);
          k = k.filter(function(j) {
            return typeof j == "string" ? !!j.trim() : !!j;
          }), h.variableWidth && (h.rows > 1 || h.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), h.variableWidth = !1);
          for (var t = [], U = null, u = 0; u < k.length; u += h.rows * h.slidesPerRow) {
            for (var e = [], n = u; n < u + h.rows * h.slidesPerRow; n += h.slidesPerRow) {
              for (var v = [], P = n; P < n + h.slidesPerRow && (h.variableWidth && k[P].props.style && (U = k[P].props.style.width), !(P >= k.length)); P += 1)
                v.push(/* @__PURE__ */ f.default.cloneElement(k[P], {
                  key: 100 * u + 10 * n + P,
                  tabIndex: -1,
                  style: {
                    width: "".concat(100 / h.slidesPerRow, "%"),
                    display: "inline-block"
                  }
                }));
              e.push(/* @__PURE__ */ f.default.createElement("div", {
                key: 10 * u + n
              }, v));
            }
            h.variableWidth ? t.push(/* @__PURE__ */ f.default.createElement("div", {
              key: u,
              style: {
                width: U
              }
            }, e)) : t.push(/* @__PURE__ */ f.default.createElement("div", {
              key: u
            }, e));
          }
          if (h === "unslick") {
            var w = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ f.default.createElement("div", {
              className: w
            }, k);
          } else t.length <= h.slidesToShow && (h.unslick = !0);
          return /* @__PURE__ */ f.default.createElement(g.InnerSlider, R({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, (0, L.filterSettings)(h)), t);
        }
      }]), y;
    })(f.default.Component);
  })(je)), je;
}
var rt;
function Ut() {
  return rt || (rt = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
    var s = f(Kt());
    function f(g) {
      return g && g.__esModule ? g : { default: g };
    }
    o.default = s.default;
  })(Ce)), Ce;
}
var Vt = Ut();
const ze = /* @__PURE__ */ mt(Vt);
function Jt({
  title: o,
  titleId: s,
  ...f
}, g) {
  return /* @__PURE__ */ se.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: g,
    "aria-labelledby": s
  }, f), o ? /* @__PURE__ */ se.createElement("title", {
    id: s
  }, o) : null, /* @__PURE__ */ se.createElement("path", {
    fillRule: "evenodd",
    d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",
    clipRule: "evenodd"
  }));
}
const Zt = /* @__PURE__ */ se.forwardRef(Jt);
function Qt({
  title: o,
  titleId: s,
  ...f
}, g) {
  return /* @__PURE__ */ se.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: g,
    "aria-labelledby": s
  }, f), o ? /* @__PURE__ */ se.createElement("title", {
    id: s
  }, o) : null, /* @__PURE__ */ se.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
  }));
}
const er = /* @__PURE__ */ se.forwardRef(Qt);
function tr({ rating: o, textAlign: s = "left" }) {
  if (!o || o < 1 || o > 5) return null;
  const f = s === "center" ? "flex justify-center" : s === "right" ? "flex justify-end" : "flex justify-start", g = [];
  for (let p = 1; p <= 5; p++)
    p <= o ? g.push(
      /* @__PURE__ */ x(Zt, { className: "w-24 h-24 text-grey-800", "aria-hidden": "true" }, p)
    ) : g.push(
      /* @__PURE__ */ x(er, { className: "w-24 h-24 text-grey-800", "aria-hidden": "true" }, p)
    );
  return /* @__PURE__ */ x("div", { className: `${f} gap-4`, role: "img", "aria-label": `Rating: ${o} out of 5 stars`, children: g });
}
function De({
  testimonial: o,
  name: s,
  role: f,
  rating: g = null,
  // number | null (1-5)
  imageUrl: p,
  logoUrl: m,
  mediaPosition: L = "top",
  // 'top' | 'bottom' | 'with-name'
  align: M = "left",
  // 'left' | 'center'
  withPadding: D = !1,
  // boolean
  className: R = "",
  ...N
}) {
  const Y = g !== null && g >= 1 && g <= 5 ? Math.floor(g) : null, B = M === "center", ee = `w-full ${D ? "p-testimonial-padding" : ""} ${R}`.trim(), X = B ? "text-center items-center" : "text-left items-start", O = [
    m ? /* @__PURE__ */ x(
      "img",
      {
        src: m,
        alt: s || "Logo",
        className: "h-40 w-auto"
      },
      "logo"
    ) : null,
    p ? /* @__PURE__ */ x(
      "img",
      {
        src: p,
        alt: s || "Profile",
        className: "h-48 w-48 rounded-full object-cover"
      },
      "image"
    ) : null
  ].filter(Boolean), H = O.length > 0, z = H && L === "top", Z = H && L === "bottom", A = H && L === "with-name";
  return /* @__PURE__ */ x("figure", { className: ee, ...N, ...N.attributes || {}, children: /* @__PURE__ */ ae("div", { className: `flex flex-col gap-testimonial-spacing-y ${X}`, children: [
    z && /* @__PURE__ */ x("div", { className: `flex items-center gap-10 ${B ? "justify-center" : "justify-start"}`, children: O }),
    Y && /* @__PURE__ */ x(tr, { rating: Y, textAlign: B ? "center" : "left" }),
    o && /* @__PURE__ */ x("blockquote", { className: "m-0", children: /* @__PURE__ */ x("p", { className: "text-body-default", children: o }) }),
    (s || f || A) && /* @__PURE__ */ ae(
      "figcaption",
      {
        className: `flex flex-col gap-6 ${B ? "items-center" : "items-start"}`,
        children: [
          A && /* @__PURE__ */ ae("div", { className: `flex items-center gap-10 ${B ? "justify-center" : "justify-start"}`, children: [
            O,
            /* @__PURE__ */ ae("div", { className: `flex flex-col ${B ? "items-center" : "items-start"}`, children: [
              s && /* @__PURE__ */ x("cite", { className: "text-ui-label-small not-italic", children: s }),
              f && /* @__PURE__ */ x("p", { className: "text-ui-label-small", children: f })
            ] })
          ] }),
          !A && /* @__PURE__ */ ae(dt, { children: [
            s && /* @__PURE__ */ x("cite", { className: "text-ui-label-small not-italic", children: s }),
            f && /* @__PURE__ */ x("p", { className: "text-ui-label-small", children: f })
          ] })
        ]
      }
    ),
    Z && /* @__PURE__ */ x("div", { className: `flex items-center gap-10 ${B ? "justify-center" : "justify-start"}`, children: O })
  ] }) });
}
function nt({
  testimonial: o,
  name: s,
  role: f,
  imageUrl: g,
  logoUrl: p,
  className: m = "",
  ...L
}) {
  const M = (o || "").replace(/^["“”]+|["“”]+$/g, "");
  return /* @__PURE__ */ ae("figure", { className: `flex flex-col items-center text-center ${m}`.trim(), ...L, children: [
    /* @__PURE__ */ ae("blockquote", { className: "relative m-0 max-w-[720px] px-30", children: [
      /* @__PURE__ */ x(
        "span",
        {
          "aria-hidden": "true",
          className: "absolute -left-6 -top-10 font-serif italic font-bold leading-none text-secondary text-[48px]",
          children: "“"
        }
      ),
      /* @__PURE__ */ ae("p", { className: "text-headings-h4 font-bold text-grey-950", children: [
        M,
        /* @__PURE__ */ x(
          "span",
          {
            "aria-hidden": "true",
            className: "ml-4 inline-block translate-y-12 font-serif italic font-bold leading-none text-secondary text-[48px]",
            children: "”"
          }
        )
      ] })
    ] }),
    (p || g || s || f) && /* @__PURE__ */ ae("figcaption", { className: "mt-32 flex items-center justify-center gap-20", children: [
      p && /* @__PURE__ */ x(
        "img",
        {
          src: p,
          alt: s ? `${s} logo` : "Logo",
          className: "h-56 w-auto object-contain"
        }
      ),
      g && /* @__PURE__ */ x(
        "img",
        {
          src: g,
          alt: s || "Profile",
          className: "h-56 w-56 rounded-full object-cover"
        }
      ),
      (s || f) && /* @__PURE__ */ ae("div", { className: "flex flex-col items-start text-left", children: [
        s && /* @__PURE__ */ x("cite", { className: "text-body-default not-italic font-bold text-grey-950", children: s }),
        f && /* @__PURE__ */ x("p", { className: "text-body-default text-grey-600", children: f })
      ] })
    ] })
  ] });
}
const rr = pt(() => Promise.resolve().then(() => sr)), nr = ({
  media: o = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: s = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: f = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: g,
  videoUrl: p,
  lottieUrl: m,
  lottieData: L,
  iframeUrl: M,
  flipbookUrl: D,
  title: R,
  className: N = ""
}) => {
  var i;
  const Y = typeof window < "u" && window.location.origin.indexOf("author") > -1, B = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, X = `relative w-full h-full ${s === "square" ? "aspect-square" : s === "rectangle" ? "aspect-[4/3]" : o === "video" ? "aspect-video" : ""}`.trim(), O = s === "default" ? `w-full h-full ${N}`.trim() : `absolute inset-0 w-full h-full ${N}`.trim(), H = "w-full h-full", z = s === "default" ? `${O}`.trim() : O, Z = f === "contain" ? "object-contain" : "object-cover", A = f === "contain" ? "xMidYMid meet" : "xMidYMid slice", W = `relative w-full ${N}`.trim(), a = "w-full min-h-[280px]";
  switch (o) {
    case "image":
      if (g)
        return /* @__PURE__ */ x("div", { className: X, children: /* @__PURE__ */ x(
          "img",
          {
            src: g,
            alt: R || "Media image",
            className: `${Z} ${O}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (p) {
        const c = p.includes("youtube.com/watch") || p.includes("youtu.be/");
        let b = p;
        c && (b = `https://www.youtube.com/embed/${p.includes("youtu.be/") ? p.split("youtu.be/")[1].split("?")[0] : (i = p.split("v=")[1]) == null ? void 0 : i.split("&")[0]}`);
        const l = (() => {
          if (!c) return b;
          try {
            const r = new URL(b);
            return r.searchParams.set("autoplay", "0"), r.searchParams.set("mute", "0"), r.searchParams.set("playsinline", "1"), r.searchParams.set("controls", "1"), r.searchParams.set("rel", "0"), r.toString();
          } catch {
            return b.includes("?") ? b.includes("autoplay=") ? b : `${b}&autoplay=0` : `${b}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ x("div", { className: X, children: c ? /* @__PURE__ */ x(
          "iframe",
          {
            src: l,
            title: R || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${O} ${Z}`.trim()
          }
        ) : /* @__PURE__ */ x(
          "video",
          {
            className: `${O} ${Z}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: R || "Video player",
            children: /* @__PURE__ */ x("source", { src: p })
          }
        ) });
      }
      break;
    case "lottie":
      if (L)
        return Y ? /* @__PURE__ */ x("div", { className: X, role: "img", "aria-label": R || "Animation", children: /* @__PURE__ */ x(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${O}`.trim(),
            children: /* @__PURE__ */ x("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ x(
          "div",
          {
            className: X,
            role: "img",
            "aria-label": R || "Animation",
            children: /* @__PURE__ */ x("div", { className: `${O} overflow-hidden`.trim(), children: /* @__PURE__ */ x(
              gt,
              {
                animationData: L,
                loop: !B,
                autoplay: !B,
                className: H,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: A }
              }
            ) })
          }
        );
      if (m)
        return /* @__PURE__ */ x("div", { className: X, children: /* @__PURE__ */ x("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (M)
        return /* @__PURE__ */ x("div", { className: X, children: /* @__PURE__ */ x(
          "iframe",
          {
            src: M,
            title: R || "Iframe content",
            frameBorder: "0",
            className: `${z} ${Z}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (D)
        return Y ? /* @__PURE__ */ x("div", { className: W, role: "img", "aria-label": R || "Flipbook", children: /* @__PURE__ */ x(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${a}`.trim(),
            children: /* @__PURE__ */ x("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ x("div", { className: W, children: /* @__PURE__ */ x("div", { className: a, children: /* @__PURE__ */ x(ht, { fallback: /* @__PURE__ */ x("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ x(rr, { pdfUrl: D, title: R, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ x("div", { className: X, children: /* @__PURE__ */ x("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${s === "default" ? "" : "absolute inset-0"}`.trim(), children: o ? `${o.charAt(0).toUpperCase() + o.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function dr({
  /**
   * Variants: 'media' | 'columns' | 'stacked-media' | 'giftpro-media'
   * - 'media': 1 testimonial + 1 media per slide (carousel, 1 per page)
   * - 'columns': testimonial grid (1-3 columns). If columns > 3, use carousel with 3 per page
   * - 'stacked-media': 2-column layout with media + stacked testimonials (order can change)
   * - 'giftpro-media': centered quote with large quote marks, brand logo + author avatar (carousel if >1)
   */
  variant: o,
  testimonials: s = [],
  media: f = null,
  // media object for stacked-media and trust
  order: g = "testimonial-first",
  // 'media-first' | 'testimonial-first'
  columns: p = 1,
  // 1 | 2 | 3
  carousel: m = !1,
  // enable carousel for columns
  align: L = "left",
  // 'left' | 'center'
  withPadding: M = !1,
  // boolean
  mediaPosition: D = "top",
  // 'top' | 'bottom' | 'with-name'
  id: R = "",
  className: N = "",
  infinite: Y = !1
}) {
  const B = o || "columns", ee = g === "media-first", X = [1, 2, 3].includes(p) ? p : 3, O = B === "columns" && m, H = (i) => ({
    testimonial: i.testimonial,
    name: i.name ?? i.author,
    role: i.role ?? i.authorTitle,
    imageUrl: i.imageUrl ?? i.authorImage,
    logoUrl: i.logoUrl,
    rating: i.rating,
    align: i.align ?? L,
    withPadding: i.withPadding ?? M,
    mediaPosition: i.mediaPosition ?? D,
    attributes: i.attributes || {}
  }), z = (i, c = "") => i ? /* @__PURE__ */ x("div", { className: "relative w-full h-full min-h-[220px] overflow-hidden", children: /* @__PURE__ */ x("div", { className: "absolute inset-0 w-full h-full", children: /* @__PURE__ */ x(
    nr,
    {
      media: i.type || "image",
      aspect: "default",
      imageUrl: i.imageUrl,
      videoUrl: i.videoUrl,
      lottieUrl: i.lottieUrl,
      lottieData: i.lottieData,
      iframeUrl: i.iframeUrl,
      title: i.title || c,
      className: "w-full h-full object-cover"
    }
  ) }) }) : null, Z = (i, c) => {
    const b = i.media || f, l = !!b, r = l ? "xl:w-1/2" : "w-full";
    return /* @__PURE__ */ ae("div", { className: "flex flex-col xl:flex-row items-stretch text-gray-950", children: [
      ee && l && /* @__PURE__ */ x("div", { className: "w-full xl:w-1/2", children: z(b, i.testimonial || "") }),
      /* @__PURE__ */ x("div", { className: `flex items-center justify-center ${r}`, children: /* @__PURE__ */ x(De, { ...H(i) }) }),
      !ee && l && /* @__PURE__ */ x("div", { className: "w-full xl:w-1/2", children: z(b, i.testimonial || "") })
    ] }, c);
  }, A = (i) => {
    const c = (() => {
      switch (X) {
        case 1:
          return "grid grid-cols-1 gap-section-spacing-x";
        case 2:
          return "grid grid-cols-1 xl:grid-cols-2 gap-section-spacing-x";
        case 3:
        default:
          return "grid grid-cols-1 xl:grid-cols-3 gap-section-spacing-x";
      }
    })();
    return /* @__PURE__ */ x("div", { className: c, children: i.map((b, l) => /* @__PURE__ */ x(De, { ...H(b) }, l)) });
  }, W = (i, c) => {
    const b = [];
    for (let l = 0; l < i.length; l += c)
      b.push(i.slice(l, l + c));
    return b;
  }, a = (i) => ({
    className: "w-full testimonial-slider",
    dots: !0,
    infinite: Y,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !1,
    arrows: !1
  });
  if (B === "media") {
    if (!s || s.length === 0) return null;
    const i = a(s.length);
    return /* @__PURE__ */ x("div", { className: `container ${N}`, id: R, children: /* @__PURE__ */ x(ze, { ...i, children: s.map((c, b) => /* @__PURE__ */ x("div", { children: Z(c, b) }, b)) }) });
  }
  if (B === "stacked-media") {
    if (!s || s.length === 0) return null;
    const i = !!f;
    return /* @__PURE__ */ x("div", { className: `container ${N}`, id: R, children: /* @__PURE__ */ ae("div", { className: "flex flex-col xl:flex-row items-stretch gap-24", children: [
      ee && i && /* @__PURE__ */ x("div", { className: "w-full xl:w-1/2", children: z(f) }),
      /* @__PURE__ */ x("div", { className: `flex flex-col gap-24 ${i ? "w-full xl:w-1/2" : "w-full"}`, children: s.map((c, b) => /* @__PURE__ */ x(De, { ...H(c) }, b)) }),
      !ee && i && /* @__PURE__ */ x("div", { className: "w-full xl:w-1/2", children: z(f) })
    ] }) });
  }
  if (B === "giftpro-media") {
    if (!s || s.length === 0) return null;
    if (s.length === 1)
      return /* @__PURE__ */ x("div", { className: `container ${N}`, id: R, children: /* @__PURE__ */ x(nt, { ...H(s[0]) }) });
    const i = a(s.length);
    return /* @__PURE__ */ x("div", { className: `container ${N}`, id: R, children: /* @__PURE__ */ x(ze, { ...i, children: s.map((c, b) => /* @__PURE__ */ x("div", { children: /* @__PURE__ */ x(nt, { ...H(c) }) }, b)) }) });
  }
  if (B === "columns") {
    if (!s || s.length === 0) return null;
    if (!O)
      return /* @__PURE__ */ x("div", { className: `container ${N}`, id: R, children: A(s) });
    const i = W(s, X), c = a();
    return /* @__PURE__ */ x("div", { className: `container ${N}`, id: R, children: /* @__PURE__ */ x(ze, { ...c, children: i.map((b, l) => /* @__PURE__ */ x("div", { children: A(b) }, l)) }) });
  }
  return null;
}
let He, ct, Ae, Oe;
const ir = async () => {
  if (!Oe) {
    const o = await import("react-pdf");
    Oe = o.pdfjs, ct = o.Document, Ae = o.Page, Oe.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${Oe.version}/build/pdf.worker.min.mjs`;
  }
}, or = async () => {
  He || (He = (await import("react-pageflip")).default);
}, ar = yt(({ children: o }, s) => /* @__PURE__ */ x("div", { ref: s, className: "w-full h-full overflow-hidden", children: o })), lr = ({ pdfUrl: o, title: s, width: f = 280, height: g = 280, className: p = "" }) => {
  const [m, L] = ve(0), [M, D] = ve(null), [R, N] = ve(!0), [Y, B] = ve(g / f), [ee, X] = ve(0), O = vt(null);
  qe(() => {
    Promise.all([ir(), or()]).then(() => N(!1)).catch(() => {
      D("Failed to load flipbook");
    });
  }, []), qe(() => {
    const W = O.current;
    if (!W) return;
    const a = new ResizeObserver(([i]) => {
      const c = Math.floor(i.contentRect.width);
      c > 0 && X(c);
    });
    return a.observe(W), () => a.disconnect();
  }, [R]);
  const H = ee > 0 ? Math.floor(ee / 2) : Math.floor(f / 2), z = Math.round(H * Y), Z = $e(async (W) => {
    try {
      const i = (await W.getPage(1)).getViewport({ scale: 1 });
      i != null && i.width && (i != null && i.height) && B(i.height / i.width);
    } catch {
    }
    L(W.numPages || 0);
  }, []), A = $e((W) => {
    D((W == null ? void 0 : W.message) || "Failed to load PDF");
  }, []);
  return M ? /* @__PURE__ */ x("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : R ? /* @__PURE__ */ x("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ x("div", { ref: O, className: `w-full ${p}`.trim(), children: /* @__PURE__ */ ae(
    ct,
    {
      file: o,
      onLoadSuccess: Z,
      onLoadError: A,
      loading: /* @__PURE__ */ x("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        m === 1 && /* @__PURE__ */ x(
          "div",
          {
            className: `w-full flex justify-center items-center ${p}`.trim(),
            style: { minHeight: `${z}px` },
            children: /* @__PURE__ */ x(Ae, { pageNumber: 1, width: f, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        m > 1 && /* @__PURE__ */ x(
          He,
          {
            width: H,
            height: z,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": s || "Flipbook",
            children: Array.from({ length: m }, (W, a) => /* @__PURE__ */ x(ar, { children: /* @__PURE__ */ x(Ae, { pageNumber: a + 1, width: H, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, a))
          },
          `${H}-${z}`
        )
      ]
    }
  ) });
}, sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lr
}, Symbol.toStringTag, { value: "Module" }));
export {
  dr as default
};
