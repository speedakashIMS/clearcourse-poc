import { jsx as E, jsxs as le, Fragment as ft } from "react/jsx-runtime";
import * as se from "react";
import fe, { lazy as dt, Suspense as pt, useState as he, useRef as vt, useEffect as We, useCallback as qe, forwardRef as ht } from "react";
import yt from "lottie-react";
var we = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gt(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function mt(o) {
  if (Object.prototype.hasOwnProperty.call(o, "__esModule")) return o;
  var u = o.default;
  if (typeof u == "function") {
    var d = function m() {
      return this instanceof m ? Reflect.construct(u, arguments, this.constructor) : u.apply(this, arguments);
    };
    d.prototype = u.prototype;
  } else d = {};
  return Object.defineProperty(d, "__esModule", { value: !0 }), Object.keys(o).forEach(function(m) {
    var v = Object.getOwnPropertyDescriptor(o, m);
    Object.defineProperty(d, m, v.get ? v : {
      enumerable: !0,
      get: function() {
        return o[m];
      }
    });
  }), d;
}
var Te = {}, je = {}, ye = {}, xe = {}, $e;
function bt() {
  return $e || ($e = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
    var u = {
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
    o.default = u;
  })(xe)), xe;
}
var Ee, Fe;
function St() {
  if (Fe) return Ee;
  Fe = 1;
  var o = "Expected a function", u = NaN, d = "[object Symbol]", m = /^\s+|\s+$/g, v = /^[-+]0x[0-9a-f]+$/i, g = /^0b[01]+$/i, L = /^0o[0-7]+$/i, M = parseInt, D = typeof we == "object" && we && we.Object === Object && we, R = typeof self == "object" && self && self.Object === Object && self, N = D || R || Function("return this")(), G = Object.prototype, U = G.toString, ee = Math.max, Y = Math.min, O = function() {
    return N.Date.now();
  };
  function F(l, i, c) {
    var b, a, r, y, S, f, p = 0, _ = !1, k = !1, t = !0;
    if (typeof l != "function")
      throw new TypeError(o);
    i = A(i) || 0, z(c) && (_ = !!c.leading, k = "maxWait" in c, r = k ? ee(A(c.maxWait) || 0, i) : r, t = "trailing" in c ? !!c.trailing : t);
    function K(j) {
      var q = b, $ = a;
      return b = a = void 0, p = j, y = l.apply($, q), y;
    }
    function s(j) {
      return p = j, S = setTimeout(h, i), _ ? K(j) : y;
    }
    function e(j) {
      var q = j - f, $ = j - p, B = i - q;
      return k ? Y(B, r - $) : B;
    }
    function n(j) {
      var q = j - f, $ = j - p;
      return f === void 0 || q >= i || q < 0 || k && $ >= r;
    }
    function h() {
      var j = O();
      if (n(j))
        return P(j);
      S = setTimeout(h, e(j));
    }
    function P(j) {
      return S = void 0, t && b ? K(j) : (b = a = void 0, y);
    }
    function w() {
      S !== void 0 && clearTimeout(S), p = 0, b = f = a = S = void 0;
    }
    function T() {
      return S === void 0 ? y : P(O());
    }
    function C() {
      var j = O(), q = n(j);
      if (b = arguments, a = this, f = j, q) {
        if (S === void 0)
          return s(f);
        if (k)
          return S = setTimeout(h, i), K(f);
      }
      return S === void 0 && (S = setTimeout(h, i)), y;
    }
    return C.cancel = w, C.flush = T, C;
  }
  function z(l) {
    var i = typeof l;
    return !!l && (i == "object" || i == "function");
  }
  function Z(l) {
    return !!l && typeof l == "object";
  }
  function H(l) {
    return typeof l == "symbol" || Z(l) && U.call(l) == d;
  }
  function A(l) {
    if (typeof l == "number")
      return l;
    if (H(l))
      return u;
    if (z(l)) {
      var i = typeof l.valueOf == "function" ? l.valueOf() : l;
      l = z(i) ? i + "" : i;
    }
    if (typeof l != "string")
      return l === 0 ? l : +l;
    l = l.replace(m, "");
    var c = g.test(l);
    return c || L.test(l) ? M(l.slice(2), c ? 2 : 8) : v.test(l) ? u : +l;
  }
  return Ee = F, Ee;
}
var Le = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Be;
function ke() {
  return Be || (Be = 1, (function(o) {
    (function() {
      var u = {}.hasOwnProperty;
      function d() {
        for (var g = "", L = 0; L < arguments.length; L++) {
          var M = arguments[L];
          M && (g = v(g, m(M)));
        }
        return g;
      }
      function m(g) {
        if (typeof g == "string" || typeof g == "number")
          return g;
        if (typeof g != "object")
          return "";
        if (Array.isArray(g))
          return d.apply(null, g);
        if (g.toString !== Object.prototype.toString && !g.toString.toString().includes("[native code]"))
          return g.toString();
        var L = "";
        for (var M in g)
          u.call(g, M) && g[M] && (L = v(L, M));
        return L;
      }
      function v(g, L) {
        return L ? g ? g + " " + L : g + L : g;
      }
      o.exports ? (d.default = d, o.exports = d) : window.classNames = d;
    })();
  })(Le)), Le.exports;
}
var x = {}, Me = {}, Ge;
function nt() {
  return Ge || (Ge = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
    var u = d(fe);
    function d(v) {
      return v && v.__esModule ? v : { default: v };
    }
    var m = {
      accessibility: !0,
      adaptiveHeight: !1,
      afterChange: null,
      appendDots: function(g) {
        return /* @__PURE__ */ u.default.createElement("ul", {
          style: {
            display: "block"
          }
        }, g);
      },
      arrows: !0,
      autoplay: !1,
      autoplaySpeed: 3e3,
      beforeChange: null,
      centerMode: !1,
      centerPadding: "50px",
      className: "",
      cssEase: "ease",
      customPaging: function(g) {
        return /* @__PURE__ */ u.default.createElement("button", null, g + 1);
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
    o.default = m;
  })(Me)), Me;
}
var Ue;
function be() {
  if (Ue) return x;
  Ue = 1, Object.defineProperty(x, "__esModule", {
    value: !0
  }), x.checkSpecKeys = x.checkNavigable = x.changeSlide = x.canUseDOM = x.canGoNext = void 0, x.clamp = R, x.extractObject = void 0, x.filterSettings = K, x.validSettings = x.swipeStart = x.swipeMove = x.swipeEnd = x.slidesOnRight = x.slidesOnLeft = x.slideHandler = x.siblingDirection = x.safePreventDefault = x.lazyStartIndex = x.lazySlidesOnRight = x.lazySlidesOnLeft = x.lazyEndIndex = x.keyHandler = x.initializedState = x.getWidth = x.getTrackLeft = x.getTrackCSS = x.getTrackAnimateCSS = x.getTotalSlides = x.getSwipeDirection = x.getSlideCount = x.getRequiredLazySlides = x.getPreClones = x.getPostClones = x.getOnDemandLazySlides = x.getNavigableIndexes = x.getHeight = void 0;
  var o = d(fe), u = d(nt());
  function d(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function m(s) {
    "@babel/helpers - typeof";
    return m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, m(s);
  }
  function v(s, e) {
    var n = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(s);
      e && (h = h.filter(function(P) {
        return Object.getOwnPropertyDescriptor(s, P).enumerable;
      })), n.push.apply(n, h);
    }
    return n;
  }
  function g(s) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2 ? v(Object(n), !0).forEach(function(h) {
        L(s, h, n[h]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach(function(h) {
        Object.defineProperty(s, h, Object.getOwnPropertyDescriptor(n, h));
      });
    }
    return s;
  }
  function L(s, e, n) {
    return (e = M(e)) in s ? Object.defineProperty(s, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : s[e] = n, s;
  }
  function M(s) {
    var e = D(s, "string");
    return m(e) == "symbol" ? e : e + "";
  }
  function D(s, e) {
    if (m(s) != "object" || !s) return s;
    var n = s[Symbol.toPrimitive];
    if (n !== void 0) {
      var h = n.call(s, e);
      if (m(h) != "object") return h;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(s);
  }
  function R(s, e, n) {
    return Math.max(e, Math.min(s, n));
  }
  var N = x.safePreventDefault = function(e) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(e._reactName) || e.preventDefault();
  }, G = x.getOnDemandLazySlides = function(e) {
    for (var n = [], h = U(e), P = ee(e), w = h; w < P; w++)
      e.lazyLoadedList.indexOf(w) < 0 && n.push(w);
    return n;
  };
  x.getRequiredLazySlides = function(e) {
    for (var n = [], h = U(e), P = ee(e), w = h; w < P; w++)
      n.push(w);
    return n;
  };
  var U = x.lazyStartIndex = function(e) {
    return e.currentSlide - Y(e);
  }, ee = x.lazyEndIndex = function(e) {
    return e.currentSlide + O(e);
  }, Y = x.lazySlidesOnLeft = function(e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }, O = x.lazySlidesOnRight = function(e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }, F = x.getWidth = function(e) {
    return e && e.offsetWidth || 0;
  }, z = x.getHeight = function(e) {
    return e && e.offsetHeight || 0;
  }, Z = x.getSwipeDirection = function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h, P, w, T;
    return h = e.startX - e.curX, P = e.startY - e.curY, w = Math.atan2(P, h), T = Math.round(w * 180 / Math.PI), T < 0 && (T = 360 - Math.abs(T)), T <= 45 && T >= 0 || T <= 360 && T >= 315 ? "left" : T >= 135 && T <= 225 ? "right" : n === !0 ? T >= 35 && T <= 135 ? "up" : "down" : "vertical";
  }, H = x.canGoNext = function(e) {
    var n = !0;
    return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (n = !1), n;
  };
  x.extractObject = function(e, n) {
    var h = {};
    return n.forEach(function(P) {
      return h[P] = e[P];
    }), h;
  }, x.initializedState = function(e) {
    var n = o.default.Children.count(e.children), h = e.listRef, P = Math.ceil(F(h)), w = e.trackRef && e.trackRef.node, T = Math.ceil(F(w)), C;
    if (e.vertical)
      C = P;
    else {
      var j = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding == "string" && e.centerPadding.slice(-1) === "%" && (j *= P / 100), C = Math.ceil((P - j) / e.slidesToShow);
    }
    var q = h && z(h.querySelector('[data-index="0"]')), $ = q * e.slidesToShow, B = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && (B = n - 1 - e.initialSlide);
    var Q = e.lazyLoadedList || [], J = G(g(g({}, e), {}, {
      currentSlide: B,
      lazyLoadedList: Q
    }));
    Q = Q.concat(J);
    var X = {
      slideCount: n,
      slideWidth: C,
      listWidth: P,
      trackWidth: T,
      currentSlide: B,
      slideHeight: q,
      listHeight: $,
      lazyLoadedList: Q
    };
    return e.autoplaying === null && e.autoplay && (X.autoplaying = "playing"), X;
  }, x.slideHandler = function(e) {
    var n = e.waitForAnimate, h = e.animating, P = e.fade, w = e.infinite, T = e.index, C = e.slideCount, j = e.lazyLoad, q = e.currentSlide, $ = e.centerMode, B = e.slidesToScroll, Q = e.slidesToShow, J = e.useCSS, X = e.lazyLoadedList;
    if (n && h) return {};
    var W = T, V, re, I, te = {}, ne = {}, ie = w ? T : R(T, 0, C - 1);
    if (P) {
      if (!w && (T < 0 || T >= C)) return {};
      T < 0 ? W = T + C : T >= C && (W = T - C), j && X.indexOf(W) < 0 && (X = X.concat(W)), te = {
        animating: !0,
        currentSlide: W,
        lazyLoadedList: X,
        targetSlide: W
      }, ne = {
        animating: !1,
        targetSlide: W
      };
    } else
      V = W, W < 0 ? (V = W + C, w ? C % B !== 0 && (V = C - C % B) : V = 0) : !H(e) && W > q ? W = V = q : $ && W >= C ? (W = w ? C : C - 1, V = w ? 0 : C - 1) : W >= C && (V = W - C, w ? C % B !== 0 && (V = 0) : V = C - Q), !w && W + Q >= C && (V = C - Q), re = r(g(g({}, e), {}, {
        slideIndex: W
      })), I = r(g(g({}, e), {}, {
        slideIndex: V
      })), w || (re === I && (W = V), re = I), j && (X = X.concat(G(g(g({}, e), {}, {
        currentSlide: W
      })))), J ? (te = {
        animating: !0,
        currentSlide: V,
        trackStyle: a(g(g({}, e), {}, {
          left: re
        })),
        lazyLoadedList: X,
        targetSlide: ie
      }, ne = {
        animating: !1,
        currentSlide: V,
        trackStyle: b(g(g({}, e), {}, {
          left: I
        })),
        swipeLeft: null,
        targetSlide: ie
      }) : te = {
        currentSlide: V,
        trackStyle: b(g(g({}, e), {}, {
          left: I
        })),
        lazyLoadedList: X,
        targetSlide: ie
      };
    return {
      state: te,
      nextState: ne
    };
  }, x.changeSlide = function(e, n) {
    var h, P, w, T, C, j = e.slidesToScroll, q = e.slidesToShow, $ = e.slideCount, B = e.currentSlide, Q = e.targetSlide, J = e.lazyLoad, X = e.infinite;
    if (T = $ % j !== 0, h = T ? 0 : ($ - B) % j, n.message === "previous")
      w = h === 0 ? j : q - h, C = B - w, J && !X && (P = B - w, C = P === -1 ? $ - 1 : P), X || (C = Q - j);
    else if (n.message === "next")
      w = h === 0 ? j : h, C = B + w, J && !X && (C = (B + j) % $ + h), X || (C = Q + j);
    else if (n.message === "dots")
      C = n.index * n.slidesToScroll;
    else if (n.message === "children") {
      if (C = n.index, X) {
        var W = p(g(g({}, e), {}, {
          targetSlide: C
        }));
        C > n.currentSlide && W === "left" ? C = C - $ : C < n.currentSlide && W === "right" && (C = C + $);
      }
    } else n.message === "index" && (C = Number(n.index));
    return C;
  }, x.keyHandler = function(e, n, h) {
    return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n ? "" : e.keyCode === 37 ? h ? "next" : "previous" : e.keyCode === 39 ? h ? "previous" : "next" : "";
  }, x.swipeStart = function(e, n, h) {
    return e.target.tagName === "IMG" && N(e), !n || !h && e.type.indexOf("mouse") !== -1 ? "" : {
      dragging: !0,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY
      }
    };
  }, x.swipeMove = function(e, n) {
    var h = n.scrolling, P = n.animating, w = n.vertical, T = n.swipeToSlide, C = n.verticalSwiping, j = n.rtl, q = n.currentSlide, $ = n.edgeFriction, B = n.edgeDragged, Q = n.onEdge, J = n.swiped, X = n.swiping, W = n.slideCount, V = n.slidesToScroll, re = n.infinite, I = n.touchObject, te = n.swipeEvent, ne = n.listHeight, ie = n.listWidth;
    if (!h) {
      if (P) return N(e);
      w && T && C && N(e);
      var oe, ue = {}, Se = r(n);
      I.curX = e.touches ? e.touches[0].pageX : e.clientX, I.curY = e.touches ? e.touches[0].pageY : e.clientY, I.swipeLength = Math.round(Math.sqrt(Math.pow(I.curX - I.startX, 2)));
      var Ae = Math.round(Math.sqrt(Math.pow(I.curY - I.startY, 2)));
      if (!C && !X && Ae > 10)
        return {
          scrolling: !0
        };
      C && (I.swipeLength = Ae);
      var pe = (j ? -1 : 1) * (I.curX > I.startX ? 1 : -1);
      C && (pe = I.curY > I.startY ? 1 : -1);
      var ct = Math.ceil(W / V), ae = Z(n.touchObject, C), ve = I.swipeLength;
      return re || (q === 0 && (ae === "right" || ae === "down") || q + 1 >= ct && (ae === "left" || ae === "up") || !H(n) && (ae === "left" || ae === "up")) && (ve = I.swipeLength * $, B === !1 && Q && (Q(ae), ue.edgeDragged = !0)), !J && te && (te(ae), ue.swiped = !0), w ? oe = Se + ve * (ne / ie) * pe : j ? oe = Se - ve * pe : oe = Se + ve * pe, C && (oe = Se + ve * pe), ue = g(g({}, ue), {}, {
        touchObject: I,
        swipeLeft: oe,
        trackStyle: b(g(g({}, n), {}, {
          left: oe
        }))
      }), Math.abs(I.curX - I.startX) < Math.abs(I.curY - I.startY) * 0.8 || I.swipeLength > 10 && (ue.swiping = !0, N(e)), ue;
    }
  }, x.swipeEnd = function(e, n) {
    var h = n.dragging, P = n.swipe, w = n.touchObject, T = n.listWidth, C = n.touchThreshold, j = n.verticalSwiping, q = n.listHeight, $ = n.swipeToSlide, B = n.scrolling, Q = n.onSwipe, J = n.targetSlide, X = n.currentSlide, W = n.infinite;
    if (!h)
      return P && N(e), {};
    var V = j ? q / C : T / C, re = Z(w, j), I = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {}
    };
    if (B || !w.swipeLength)
      return I;
    if (w.swipeLength > V) {
      N(e), Q && Q(re);
      var te, ne, ie = W ? X : J;
      switch (re) {
        case "left":
        case "up":
          ne = ie + i(n), te = $ ? l(n, ne) : ne, I.currentDirection = 0;
          break;
        case "right":
        case "down":
          ne = ie - i(n), te = $ ? l(n, ne) : ne, I.currentDirection = 1;
          break;
        default:
          te = ie;
      }
      I.triggerSlideHandler = te;
    } else {
      var oe = r(n);
      I.trackStyle = a(g(g({}, n), {}, {
        left: oe
      }));
    }
    return I;
  };
  var A = x.getNavigableIndexes = function(e) {
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, h = e.infinite ? e.slidesToShow * -1 : 0, P = e.infinite ? e.slidesToShow * -1 : 0, w = []; h < n; )
      w.push(h), h = P + e.slidesToScroll, P += Math.min(e.slidesToScroll, e.slidesToShow);
    return w;
  }, l = x.checkNavigable = function(e, n) {
    var h = A(e), P = 0;
    if (n > h[h.length - 1])
      n = h[h.length - 1];
    else
      for (var w in h) {
        if (n < h[w]) {
          n = P;
          break;
        }
        P = h[w];
      }
    return n;
  }, i = x.getSlideCount = function(e) {
    var n = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      var h, P = e.listRef, w = P.querySelectorAll && P.querySelectorAll(".slick-slide") || [];
      if (Array.from(w).every(function(j) {
        if (e.vertical) {
          if (j.offsetTop + z(j) / 2 > e.swipeLeft * -1)
            return h = j, !1;
        } else if (j.offsetLeft - n + F(j) / 2 > e.swipeLeft * -1)
          return h = j, !1;
        return !0;
      }), !h)
        return 0;
      var T = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide, C = Math.abs(h.dataset.index - T) || 1;
      return C;
    } else
      return e.slidesToScroll;
  }, c = x.checkSpecKeys = function(e, n) {
    return n.reduce(function(h, P) {
      return h && e.hasOwnProperty(P);
    }, !0) ? null : console.error("Keys Missing:", e);
  }, b = x.getTrackCSS = function(e) {
    c(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
    var n, h;
    if (!e.vertical)
      n = f(e) * e.slideWidth;
    else {
      var P = e.unslick ? e.slideCount : e.slideCount + 2 * e.slidesToShow;
      h = P * e.slideHeight;
    }
    var w = {
      opacity: 1,
      transition: "",
      WebkitTransition: ""
    };
    if (e.useTransform) {
      var T = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", C = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", j = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
      w = g(g({}, w), {}, {
        WebkitTransform: T,
        transform: C,
        msTransform: j
      });
    } else
      e.vertical ? w.top = e.left : w.left = e.left;
    return e.fade && (w = {
      opacity: 1
    }), n && (w.width = n), h && (w.height = h), window && !window.addEventListener && window.attachEvent && (e.vertical ? w.marginTop = e.left + "px" : w.marginLeft = e.left + "px"), w;
  }, a = x.getTrackAnimateCSS = function(e) {
    c(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var n = b(e);
    return e.useTransform ? (n.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, n.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? n.transition = "top " + e.speed + "ms " + e.cssEase : n.transition = "left " + e.speed + "ms " + e.cssEase, n;
  }, r = x.getTrackLeft = function(e) {
    if (e.unslick)
      return 0;
    c(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var n = e.slideIndex, h = e.trackRef, P = e.infinite, w = e.centerMode, T = e.slideCount, C = e.slidesToShow, j = e.slidesToScroll, q = e.slideWidth, $ = e.listWidth, B = e.variableWidth, Q = e.slideHeight, J = e.fade, X = e.vertical, W = 0, V, re, I = 0;
    if (J || e.slideCount === 1)
      return 0;
    var te = 0;
    if (P ? (te = -y(e), T % j !== 0 && n + j > T && (te = -(n > T ? C - (n - T) : T % j)), w && (te += parseInt(C / 2))) : (T % j !== 0 && n + j > T && (te = C - T % j), w && (te = parseInt(C / 2))), W = te * q, I = te * Q, X ? V = n * Q * -1 + I : V = n * q * -1 + W, B === !0) {
      var ne, ie = h && h.node;
      if (ne = n + y(e), re = ie && ie.childNodes[ne], V = re ? re.offsetLeft * -1 : 0, w === !0) {
        ne = P ? n + y(e) : n, re = ie && ie.children[ne], V = 0;
        for (var oe = 0; oe < ne; oe++)
          V -= ie && ie.children[oe] && ie.children[oe].offsetWidth;
        V -= parseInt(e.centerPadding), V += re && ($ - re.offsetWidth) / 2;
      }
    }
    return V;
  }, y = x.getPreClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, S = x.getPostClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, f = x.getTotalSlides = function(e) {
    return e.slideCount === 1 ? 1 : y(e) + e.slideCount + S(e);
  }, p = x.siblingDirection = function(e) {
    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + _(e) ? "left" : "right" : e.targetSlide < e.currentSlide - k(e) ? "right" : "left";
  }, _ = x.slidesOnRight = function(e) {
    var n = e.slidesToShow, h = e.centerMode, P = e.rtl, w = e.centerPadding;
    if (h) {
      var T = (n - 1) / 2 + 1;
      return parseInt(w) > 0 && (T += 1), P && n % 2 === 0 && (T += 1), T;
    }
    return P ? 0 : n - 1;
  }, k = x.slidesOnLeft = function(e) {
    var n = e.slidesToShow, h = e.centerMode, P = e.rtl, w = e.centerPadding;
    if (h) {
      var T = (n - 1) / 2 + 1;
      return parseInt(w) > 0 && (T += 1), !P && n % 2 === 0 && (T += 1), T;
    }
    return P ? n - 1 : 0;
  };
  x.canUseDOM = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  };
  var t = x.validSettings = Object.keys(u.default);
  function K(s) {
    return t.reduce(function(e, n) {
      return s.hasOwnProperty(n) && (e[n] = s[n]), e;
    }, {});
  }
  return x;
}
var ge = {}, Ye;
function wt() {
  if (Ye) return ge;
  Ye = 1, Object.defineProperty(ge, "__esModule", {
    value: !0
  }), ge.Track = void 0;
  var o = m(fe), u = m(ke()), d = be();
  function m(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function v(a) {
    "@babel/helpers - typeof";
    return v = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, v(a);
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(a) {
      for (var r = 1; r < arguments.length; r++) {
        var y = arguments[r];
        for (var S in y)
          ({}).hasOwnProperty.call(y, S) && (a[S] = y[S]);
      }
      return a;
    }, g.apply(null, arguments);
  }
  function L(a, r) {
    if (!(a instanceof r)) throw new TypeError("Cannot call a class as a function");
  }
  function M(a, r) {
    for (var y = 0; y < r.length; y++) {
      var S = r[y];
      S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(a, H(S.key), S);
    }
  }
  function D(a, r, y) {
    return r && M(a.prototype, r), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function R(a, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(r && r.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), r && N(a, r);
  }
  function N(a, r) {
    return N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(y, S) {
      return y.__proto__ = S, y;
    }, N(a, r);
  }
  function G(a) {
    var r = Y();
    return function() {
      var y, S = O(a);
      if (r) {
        var f = O(this).constructor;
        y = Reflect.construct(S, arguments, f);
      } else y = S.apply(this, arguments);
      return U(this, y);
    };
  }
  function U(a, r) {
    if (r && (v(r) == "object" || typeof r == "function")) return r;
    if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return ee(a);
  }
  function ee(a) {
    if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a;
  }
  function Y() {
    try {
      var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (Y = function() {
      return !!a;
    })();
  }
  function O(a) {
    return O = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, O(a);
  }
  function F(a, r) {
    var y = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var S = Object.getOwnPropertySymbols(a);
      r && (S = S.filter(function(f) {
        return Object.getOwnPropertyDescriptor(a, f).enumerable;
      })), y.push.apply(y, S);
    }
    return y;
  }
  function z(a) {
    for (var r = 1; r < arguments.length; r++) {
      var y = arguments[r] != null ? arguments[r] : {};
      r % 2 ? F(Object(y), !0).forEach(function(S) {
        Z(a, S, y[S]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(y)) : F(Object(y)).forEach(function(S) {
        Object.defineProperty(a, S, Object.getOwnPropertyDescriptor(y, S));
      });
    }
    return a;
  }
  function Z(a, r, y) {
    return (r = H(r)) in a ? Object.defineProperty(a, r, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : a[r] = y, a;
  }
  function H(a) {
    var r = A(a, "string");
    return v(r) == "symbol" ? r : r + "";
  }
  function A(a, r) {
    if (v(a) != "object" || !a) return a;
    var y = a[Symbol.toPrimitive];
    if (y !== void 0) {
      var S = y.call(a, r);
      if (v(S) != "object") return S;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(a);
  }
  var l = function(r) {
    var y, S, f, p, _;
    r.rtl ? _ = r.slideCount - 1 - r.index : _ = r.index, f = _ < 0 || _ >= r.slideCount, r.centerMode ? (p = Math.floor(r.slidesToShow / 2), S = (_ - r.currentSlide) % r.slideCount === 0, _ > r.currentSlide - p - 1 && _ <= r.currentSlide + p && (y = !0)) : y = r.currentSlide <= _ && _ < r.currentSlide + r.slidesToShow;
    var k;
    r.targetSlide < 0 ? k = r.targetSlide + r.slideCount : r.targetSlide >= r.slideCount ? k = r.targetSlide - r.slideCount : k = r.targetSlide;
    var t = _ === k;
    return {
      "slick-slide": !0,
      "slick-active": y,
      "slick-center": S,
      "slick-cloned": f,
      "slick-current": t
      // dubious in case of RTL
    };
  }, i = function(r) {
    var y = {};
    return (r.variableWidth === void 0 || r.variableWidth === !1) && (y.width = r.slideWidth), r.fade && (y.position = "relative", r.vertical ? y.top = -r.index * parseInt(r.slideHeight) : y.left = -r.index * parseInt(r.slideWidth), y.opacity = r.currentSlide === r.index ? 1 : 0, y.zIndex = r.currentSlide === r.index ? 999 : 998, r.useCSS && (y.transition = "opacity " + r.speed + "ms " + r.cssEase + ", visibility " + r.speed + "ms " + r.cssEase)), y;
  }, c = function(r, y) {
    return r.key || y;
  }, b = function(r) {
    var y, S = [], f = [], p = [], _ = o.default.Children.count(r.children), k = (0, d.lazyStartIndex)(r), t = (0, d.lazyEndIndex)(r);
    return o.default.Children.forEach(r.children, function(K, s) {
      var e, n = {
        message: "children",
        index: s,
        slidesToScroll: r.slidesToScroll,
        currentSlide: r.currentSlide
      };
      !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(s) >= 0 ? e = K : e = /* @__PURE__ */ o.default.createElement("div", null);
      var h = i(z(z({}, r), {}, {
        index: s
      })), P = e.props.className || "", w = l(z(z({}, r), {}, {
        index: s
      }));
      if (S.push(/* @__PURE__ */ o.default.cloneElement(e, {
        key: "original" + c(e, s),
        "data-index": s,
        className: (0, u.default)(w, P),
        tabIndex: "-1",
        "aria-hidden": !w["slick-active"],
        style: z(z({
          outline: "none"
        }, e.props.style || {}), h),
        onClick: function(j) {
          e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
        }
      })), r.infinite && _ > 1 && r.fade === !1 && !r.unslick) {
        var T = _ - s;
        T <= (0, d.getPreClones)(r) && (y = -T, y >= k && (e = K), w = l(z(z({}, r), {}, {
          index: y
        })), f.push(/* @__PURE__ */ o.default.cloneElement(e, {
          key: "precloned" + c(e, y),
          "data-index": y,
          tabIndex: "-1",
          className: (0, u.default)(w, P),
          "aria-hidden": !w["slick-active"],
          style: z(z({}, e.props.style || {}), h),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        }))), s < (0, d.getPostClones)(r) && (y = _ + s, y < t && (e = K), w = l(z(z({}, r), {}, {
          index: y
        })), p.push(/* @__PURE__ */ o.default.cloneElement(e, {
          key: "postcloned" + c(e, y),
          "data-index": y,
          tabIndex: "-1",
          className: (0, u.default)(w, P),
          "aria-hidden": !w["slick-active"],
          style: z(z({}, e.props.style || {}), h),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        })));
      }
    }), r.rtl ? f.concat(S, p).reverse() : f.concat(S, p);
  };
  return ge.Track = /* @__PURE__ */ (function(a) {
    R(y, a);
    var r = G(y);
    function y() {
      var S;
      L(this, y);
      for (var f = arguments.length, p = new Array(f), _ = 0; _ < f; _++)
        p[_] = arguments[_];
      return S = r.call.apply(r, [this].concat(p)), Z(ee(S), "node", null), Z(ee(S), "handleRef", function(k) {
        S.node = k;
      }), S;
    }
    return D(y, [{
      key: "render",
      value: function() {
        var f = b(this.props), p = this.props, _ = p.onMouseEnter, k = p.onMouseOver, t = p.onMouseLeave, K = {
          onMouseEnter: _,
          onMouseOver: k,
          onMouseLeave: t
        };
        return /* @__PURE__ */ o.default.createElement("div", g({
          ref: this.handleRef,
          className: "slick-track",
          style: this.props.trackStyle
        }, K), f);
      }
    }]), y;
  })(o.default.PureComponent), ge;
}
var me = {}, Xe;
function Ot() {
  if (Xe) return me;
  Xe = 1;
  function o(l) {
    "@babel/helpers - typeof";
    return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
      return typeof i;
    } : function(i) {
      return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
    }, o(l);
  }
  Object.defineProperty(me, "__esModule", {
    value: !0
  }), me.Dots = void 0;
  var u = v(fe), d = v(ke()), m = be();
  function v(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function g(l, i) {
    var c = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      var b = Object.getOwnPropertySymbols(l);
      i && (b = b.filter(function(a) {
        return Object.getOwnPropertyDescriptor(l, a).enumerable;
      })), c.push.apply(c, b);
    }
    return c;
  }
  function L(l) {
    for (var i = 1; i < arguments.length; i++) {
      var c = arguments[i] != null ? arguments[i] : {};
      i % 2 ? g(Object(c), !0).forEach(function(b) {
        M(l, b, c[b]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(c)) : g(Object(c)).forEach(function(b) {
        Object.defineProperty(l, b, Object.getOwnPropertyDescriptor(c, b));
      });
    }
    return l;
  }
  function M(l, i, c) {
    return (i = G(i)) in l ? Object.defineProperty(l, i, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : l[i] = c, l;
  }
  function D(l, i) {
    if (!(l instanceof i)) throw new TypeError("Cannot call a class as a function");
  }
  function R(l, i) {
    for (var c = 0; c < i.length; c++) {
      var b = i[c];
      b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(l, G(b.key), b);
    }
  }
  function N(l, i, c) {
    return i && R(l.prototype, i), Object.defineProperty(l, "prototype", { writable: !1 }), l;
  }
  function G(l) {
    var i = U(l, "string");
    return o(i) == "symbol" ? i : i + "";
  }
  function U(l, i) {
    if (o(l) != "object" || !l) return l;
    var c = l[Symbol.toPrimitive];
    if (c !== void 0) {
      var b = c.call(l, i);
      if (o(b) != "object") return b;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(l);
  }
  function ee(l, i) {
    if (typeof i != "function" && i !== null) throw new TypeError("Super expression must either be null or a function");
    l.prototype = Object.create(i && i.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), Object.defineProperty(l, "prototype", { writable: !1 }), i && Y(l, i);
  }
  function Y(l, i) {
    return Y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, b) {
      return c.__proto__ = b, c;
    }, Y(l, i);
  }
  function O(l) {
    var i = Z();
    return function() {
      var c, b = H(l);
      if (i) {
        var a = H(this).constructor;
        c = Reflect.construct(b, arguments, a);
      } else c = b.apply(this, arguments);
      return F(this, c);
    };
  }
  function F(l, i) {
    if (i && (o(i) == "object" || typeof i == "function")) return i;
    if (i !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return z(l);
  }
  function z(l) {
    if (l === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return l;
  }
  function Z() {
    try {
      var l = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (Z = function() {
      return !!l;
    })();
  }
  function H(l) {
    return H = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
      return i.__proto__ || Object.getPrototypeOf(i);
    }, H(l);
  }
  var A = function(i) {
    var c;
    return i.infinite ? c = Math.ceil(i.slideCount / i.slidesToScroll) : c = Math.ceil((i.slideCount - i.slidesToShow) / i.slidesToScroll) + 1, c;
  };
  return me.Dots = /* @__PURE__ */ (function(l) {
    ee(c, l);
    var i = O(c);
    function c() {
      return D(this, c), i.apply(this, arguments);
    }
    return N(c, [{
      key: "clickHandler",
      value: function(a, r) {
        r.preventDefault(), this.props.clickHandler(a);
      }
    }, {
      key: "render",
      value: function() {
        for (var a = this.props, r = a.onMouseEnter, y = a.onMouseOver, S = a.onMouseLeave, f = a.infinite, p = a.slidesToScroll, _ = a.slidesToShow, k = a.slideCount, t = a.currentSlide, K = A({
          slideCount: k,
          slidesToScroll: p,
          slidesToShow: _,
          infinite: f
        }), s = {
          onMouseEnter: r,
          onMouseOver: y,
          onMouseLeave: S
        }, e = [], n = 0; n < K; n++) {
          var h = (n + 1) * p - 1, P = f ? h : (0, m.clamp)(h, 0, k - 1), w = P - (p - 1), T = f ? w : (0, m.clamp)(w, 0, k - 1), C = (0, d.default)({
            "slick-active": f ? t >= T && t <= P : t === T
          }), j = {
            message: "dots",
            index: n,
            slidesToScroll: p,
            currentSlide: t
          }, q = this.clickHandler.bind(this, j);
          e = e.concat(/* @__PURE__ */ u.default.createElement("li", {
            key: n,
            className: C
          }, /* @__PURE__ */ u.default.cloneElement(this.props.customPaging(n), {
            onClick: q
          })));
        }
        return /* @__PURE__ */ u.default.cloneElement(this.props.appendDots(e), L({
          className: this.props.dotsClass
        }, s));
      }
    }]), c;
  })(u.default.PureComponent), me;
}
var ce = {}, Ke;
function _t() {
  if (Ke) return ce;
  Ke = 1;
  function o(l) {
    "@babel/helpers - typeof";
    return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
      return typeof i;
    } : function(i) {
      return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
    }, o(l);
  }
  Object.defineProperty(ce, "__esModule", {
    value: !0
  }), ce.PrevArrow = ce.NextArrow = void 0;
  var u = v(fe), d = v(ke()), m = be();
  function v(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(l) {
      for (var i = 1; i < arguments.length; i++) {
        var c = arguments[i];
        for (var b in c)
          ({}).hasOwnProperty.call(c, b) && (l[b] = c[b]);
      }
      return l;
    }, g.apply(null, arguments);
  }
  function L(l, i) {
    var c = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      var b = Object.getOwnPropertySymbols(l);
      i && (b = b.filter(function(a) {
        return Object.getOwnPropertyDescriptor(l, a).enumerable;
      })), c.push.apply(c, b);
    }
    return c;
  }
  function M(l) {
    for (var i = 1; i < arguments.length; i++) {
      var c = arguments[i] != null ? arguments[i] : {};
      i % 2 ? L(Object(c), !0).forEach(function(b) {
        D(l, b, c[b]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(c)) : L(Object(c)).forEach(function(b) {
        Object.defineProperty(l, b, Object.getOwnPropertyDescriptor(c, b));
      });
    }
    return l;
  }
  function D(l, i, c) {
    return (i = U(i)) in l ? Object.defineProperty(l, i, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : l[i] = c, l;
  }
  function R(l, i) {
    if (!(l instanceof i)) throw new TypeError("Cannot call a class as a function");
  }
  function N(l, i) {
    for (var c = 0; c < i.length; c++) {
      var b = i[c];
      b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(l, U(b.key), b);
    }
  }
  function G(l, i, c) {
    return i && N(l.prototype, i), Object.defineProperty(l, "prototype", { writable: !1 }), l;
  }
  function U(l) {
    var i = ee(l, "string");
    return o(i) == "symbol" ? i : i + "";
  }
  function ee(l, i) {
    if (o(l) != "object" || !l) return l;
    var c = l[Symbol.toPrimitive];
    if (c !== void 0) {
      var b = c.call(l, i);
      if (o(b) != "object") return b;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(l);
  }
  function Y(l, i) {
    if (typeof i != "function" && i !== null) throw new TypeError("Super expression must either be null or a function");
    l.prototype = Object.create(i && i.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), Object.defineProperty(l, "prototype", { writable: !1 }), i && O(l, i);
  }
  function O(l, i) {
    return O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, b) {
      return c.__proto__ = b, c;
    }, O(l, i);
  }
  function F(l) {
    var i = H();
    return function() {
      var c, b = A(l);
      if (i) {
        var a = A(this).constructor;
        c = Reflect.construct(b, arguments, a);
      } else c = b.apply(this, arguments);
      return z(this, c);
    };
  }
  function z(l, i) {
    if (i && (o(i) == "object" || typeof i == "function")) return i;
    if (i !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Z(l);
  }
  function Z(l) {
    if (l === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return l;
  }
  function H() {
    try {
      var l = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (H = function() {
      return !!l;
    })();
  }
  function A(l) {
    return A = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
      return i.__proto__ || Object.getPrototypeOf(i);
    }, A(l);
  }
  return ce.PrevArrow = /* @__PURE__ */ (function(l) {
    Y(c, l);
    var i = F(c);
    function c() {
      return R(this, c), i.apply(this, arguments);
    }
    return G(c, [{
      key: "clickHandler",
      value: function(a, r) {
        r && r.preventDefault(), this.props.clickHandler(a, r);
      }
    }, {
      key: "render",
      value: function() {
        var a = {
          "slick-arrow": !0,
          "slick-prev": !0
        }, r = this.clickHandler.bind(this, {
          message: "previous"
        });
        !this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow) && (a["slick-disabled"] = !0, r = null);
        var y = {
          key: "0",
          "data-role": "none",
          className: (0, d.default)(a),
          style: {
            display: "block"
          },
          onClick: r
        }, S = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, f;
        return this.props.prevArrow ? f = /* @__PURE__ */ u.default.cloneElement(this.props.prevArrow, M(M({}, y), S)) : f = /* @__PURE__ */ u.default.createElement("button", g({
          key: "0",
          type: "button"
        }, y), " ", "Previous"), f;
      }
    }]), c;
  })(u.default.PureComponent), ce.NextArrow = /* @__PURE__ */ (function(l) {
    Y(c, l);
    var i = F(c);
    function c() {
      return R(this, c), i.apply(this, arguments);
    }
    return G(c, [{
      key: "clickHandler",
      value: function(a, r) {
        r && r.preventDefault(), this.props.clickHandler(a, r);
      }
    }, {
      key: "render",
      value: function() {
        var a = {
          "slick-arrow": !0,
          "slick-next": !0
        }, r = this.clickHandler.bind(this, {
          message: "next"
        });
        (0, m.canGoNext)(this.props) || (a["slick-disabled"] = !0, r = null);
        var y = {
          key: "1",
          "data-role": "none",
          className: (0, d.default)(a),
          style: {
            display: "block"
          },
          onClick: r
        }, S = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, f;
        return this.props.nextArrow ? f = /* @__PURE__ */ u.default.cloneElement(this.props.nextArrow, M(M({}, y), S)) : f = /* @__PURE__ */ u.default.createElement("button", g({
          key: "1",
          type: "button"
        }, y), " ", "Next"), f;
      }
    }]), c;
  })(u.default.PureComponent), ce;
}
var it = (function() {
  if (typeof Map < "u")
    return Map;
  function o(u, d) {
    var m = -1;
    return u.some(function(v, g) {
      return v[0] === d ? (m = g, !0) : !1;
    }), m;
  }
  return (
    /** @class */
    (function() {
      function u() {
        this.__entries__ = [];
      }
      return Object.defineProperty(u.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), u.prototype.get = function(d) {
        var m = o(this.__entries__, d), v = this.__entries__[m];
        return v && v[1];
      }, u.prototype.set = function(d, m) {
        var v = o(this.__entries__, d);
        ~v ? this.__entries__[v][1] = m : this.__entries__.push([d, m]);
      }, u.prototype.delete = function(d) {
        var m = this.__entries__, v = o(m, d);
        ~v && m.splice(v, 1);
      }, u.prototype.has = function(d) {
        return !!~o(this.__entries__, d);
      }, u.prototype.clear = function() {
        this.__entries__.splice(0);
      }, u.prototype.forEach = function(d, m) {
        m === void 0 && (m = null);
        for (var v = 0, g = this.__entries__; v < g.length; v++) {
          var L = g[v];
          d.call(m, L[1], L[0]);
        }
      }, u;
    })()
  );
})(), De = typeof window < "u" && typeof document < "u" && window.document === document, _e = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), Pt = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(_e) : function(o) {
    return setTimeout(function() {
      return o(Date.now());
    }, 1e3 / 60);
  };
})(), kt = 2;
function Ct(o, u) {
  var d = !1, m = !1, v = 0;
  function g() {
    d && (d = !1, o()), m && M();
  }
  function L() {
    Pt(g);
  }
  function M() {
    var D = Date.now();
    if (d) {
      if (D - v < kt)
        return;
      m = !0;
    } else
      d = !0, m = !1, setTimeout(L, u);
    v = D;
  }
  return M;
}
var Tt = 20, jt = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], xt = typeof MutationObserver < "u", Et = (
  /** @class */
  (function() {
    function o() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Ct(this.refresh.bind(this), Tt);
    }
    return o.prototype.addObserver = function(u) {
      ~this.observers_.indexOf(u) || this.observers_.push(u), this.connected_ || this.connect_();
    }, o.prototype.removeObserver = function(u) {
      var d = this.observers_, m = d.indexOf(u);
      ~m && d.splice(m, 1), !d.length && this.connected_ && this.disconnect_();
    }, o.prototype.refresh = function() {
      var u = this.updateObservers_();
      u && this.refresh();
    }, o.prototype.updateObservers_ = function() {
      var u = this.observers_.filter(function(d) {
        return d.gatherActive(), d.hasActive();
      });
      return u.forEach(function(d) {
        return d.broadcastActive();
      }), u.length > 0;
    }, o.prototype.connect_ = function() {
      !De || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), xt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, o.prototype.disconnect_ = function() {
      !De || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, o.prototype.onTransitionEnd_ = function(u) {
      var d = u.propertyName, m = d === void 0 ? "" : d, v = jt.some(function(g) {
        return !!~m.indexOf(g);
      });
      v && this.refresh();
    }, o.getInstance = function() {
      return this.instance_ || (this.instance_ = new o()), this.instance_;
    }, o.instance_ = null, o;
  })()
), ot = (function(o, u) {
  for (var d = 0, m = Object.keys(u); d < m.length; d++) {
    var v = m[d];
    Object.defineProperty(o, v, {
      value: u[v],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return o;
}), de = (function(o) {
  var u = o && o.ownerDocument && o.ownerDocument.defaultView;
  return u || _e;
}), at = Ce(0, 0, 0, 0);
function Pe(o) {
  return parseFloat(o) || 0;
}
function Ve(o) {
  for (var u = [], d = 1; d < arguments.length; d++)
    u[d - 1] = arguments[d];
  return u.reduce(function(m, v) {
    var g = o["border-" + v + "-width"];
    return m + Pe(g);
  }, 0);
}
function Lt(o) {
  for (var u = ["top", "right", "bottom", "left"], d = {}, m = 0, v = u; m < v.length; m++) {
    var g = v[m], L = o["padding-" + g];
    d[g] = Pe(L);
  }
  return d;
}
function Mt(o) {
  var u = o.getBBox();
  return Ce(0, 0, u.width, u.height);
}
function Rt(o) {
  var u = o.clientWidth, d = o.clientHeight;
  if (!u && !d)
    return at;
  var m = de(o).getComputedStyle(o), v = Lt(m), g = v.left + v.right, L = v.top + v.bottom, M = Pe(m.width), D = Pe(m.height);
  if (m.boxSizing === "border-box" && (Math.round(M + g) !== u && (M -= Ve(m, "left", "right") + g), Math.round(D + L) !== d && (D -= Ve(m, "top", "bottom") + L)), !zt(o)) {
    var R = Math.round(M + g) - u, N = Math.round(D + L) - d;
    Math.abs(R) !== 1 && (M -= R), Math.abs(N) !== 1 && (D -= N);
  }
  return Ce(v.left, v.top, M, D);
}
var Nt = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(o) {
    return o instanceof de(o).SVGGraphicsElement;
  } : function(o) {
    return o instanceof de(o).SVGElement && typeof o.getBBox == "function";
  };
})();
function zt(o) {
  return o === de(o).document.documentElement;
}
function Dt(o) {
  return De ? Nt(o) ? Mt(o) : Rt(o) : at;
}
function It(o) {
  var u = o.x, d = o.y, m = o.width, v = o.height, g = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, L = Object.create(g.prototype);
  return ot(L, {
    x: u,
    y: d,
    width: m,
    height: v,
    top: d,
    right: u + m,
    bottom: v + d,
    left: u
  }), L;
}
function Ce(o, u, d, m) {
  return { x: o, y: u, width: d, height: m };
}
var Ht = (
  /** @class */
  (function() {
    function o(u) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ce(0, 0, 0, 0), this.target = u;
    }
    return o.prototype.isActive = function() {
      var u = Dt(this.target);
      return this.contentRect_ = u, u.width !== this.broadcastWidth || u.height !== this.broadcastHeight;
    }, o.prototype.broadcastRect = function() {
      var u = this.contentRect_;
      return this.broadcastWidth = u.width, this.broadcastHeight = u.height, u;
    }, o;
  })()
), At = (
  /** @class */
  /* @__PURE__ */ (function() {
    function o(u, d) {
      var m = It(d);
      ot(this, { target: u, contentRect: m });
    }
    return o;
  })()
), Wt = (
  /** @class */
  (function() {
    function o(u, d, m) {
      if (this.activeObservations_ = [], this.observations_ = new it(), typeof u != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = u, this.controller_ = d, this.callbackCtx_ = m;
    }
    return o.prototype.observe = function(u) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(u instanceof de(u).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var d = this.observations_;
        d.has(u) || (d.set(u, new Ht(u)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, o.prototype.unobserve = function(u) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(u instanceof de(u).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var d = this.observations_;
        d.has(u) && (d.delete(u), d.size || this.controller_.removeObserver(this));
      }
    }, o.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, o.prototype.gatherActive = function() {
      var u = this;
      this.clearActive(), this.observations_.forEach(function(d) {
        d.isActive() && u.activeObservations_.push(d);
      });
    }, o.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var u = this.callbackCtx_, d = this.activeObservations_.map(function(m) {
          return new At(m.target, m.broadcastRect());
        });
        this.callback_.call(u, d, u), this.clearActive();
      }
    }, o.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, o.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, o;
  })()
), lt = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new it(), st = (
  /** @class */
  /* @__PURE__ */ (function() {
    function o(u) {
      if (!(this instanceof o))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var d = Et.getInstance(), m = new Wt(u, d, this);
      lt.set(this, m);
    }
    return o;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(o) {
  st.prototype[o] = function() {
    var u;
    return (u = lt.get(this))[o].apply(u, arguments);
  };
});
var qt = (function() {
  return typeof _e.ResizeObserver < "u" ? _e.ResizeObserver : st;
})();
const $t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qt
}, Symbol.toStringTag, { value: "Module" })), Ft = /* @__PURE__ */ mt($t);
var Je;
function Bt() {
  if (Je) return ye;
  Je = 1, Object.defineProperty(ye, "__esModule", {
    value: !0
  }), ye.InnerSlider = void 0;
  var o = R(fe), u = R(bt()), d = R(St()), m = R(ke()), v = be(), g = wt(), L = Ot(), M = _t(), D = R(Ft);
  function R(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function N(f) {
    "@babel/helpers - typeof";
    return N = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(p) {
      return typeof p;
    } : function(p) {
      return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
    }, N(f);
  }
  function G() {
    return G = Object.assign ? Object.assign.bind() : function(f) {
      for (var p = 1; p < arguments.length; p++) {
        var _ = arguments[p];
        for (var k in _)
          ({}).hasOwnProperty.call(_, k) && (f[k] = _[k]);
      }
      return f;
    }, G.apply(null, arguments);
  }
  function U(f, p) {
    if (f == null) return {};
    var _, k, t = ee(f, p);
    if (Object.getOwnPropertySymbols) {
      var K = Object.getOwnPropertySymbols(f);
      for (k = 0; k < K.length; k++)
        _ = K[k], p.includes(_) || {}.propertyIsEnumerable.call(f, _) && (t[_] = f[_]);
    }
    return t;
  }
  function ee(f, p) {
    if (f == null) return {};
    var _ = {};
    for (var k in f)
      if ({}.hasOwnProperty.call(f, k)) {
        if (p.includes(k)) continue;
        _[k] = f[k];
      }
    return _;
  }
  function Y(f, p) {
    var _ = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(f);
      p && (k = k.filter(function(t) {
        return Object.getOwnPropertyDescriptor(f, t).enumerable;
      })), _.push.apply(_, k);
    }
    return _;
  }
  function O(f) {
    for (var p = 1; p < arguments.length; p++) {
      var _ = arguments[p] != null ? arguments[p] : {};
      p % 2 ? Y(Object(_), !0).forEach(function(k) {
        r(f, k, _[k]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(_)) : Y(Object(_)).forEach(function(k) {
        Object.defineProperty(f, k, Object.getOwnPropertyDescriptor(_, k));
      });
    }
    return f;
  }
  function F(f, p) {
    if (!(f instanceof p)) throw new TypeError("Cannot call a class as a function");
  }
  function z(f, p) {
    for (var _ = 0; _ < p.length; _++) {
      var k = p[_];
      k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(f, y(k.key), k);
    }
  }
  function Z(f, p, _) {
    return p && z(f.prototype, p), Object.defineProperty(f, "prototype", { writable: !1 }), f;
  }
  function H(f, p) {
    if (typeof p != "function" && p !== null) throw new TypeError("Super expression must either be null or a function");
    f.prototype = Object.create(p && p.prototype, { constructor: { value: f, writable: !0, configurable: !0 } }), Object.defineProperty(f, "prototype", { writable: !1 }), p && A(f, p);
  }
  function A(f, p) {
    return A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(_, k) {
      return _.__proto__ = k, _;
    }, A(f, p);
  }
  function l(f) {
    var p = b();
    return function() {
      var _, k = a(f);
      if (p) {
        var t = a(this).constructor;
        _ = Reflect.construct(k, arguments, t);
      } else _ = k.apply(this, arguments);
      return i(this, _);
    };
  }
  function i(f, p) {
    if (p && (N(p) == "object" || typeof p == "function")) return p;
    if (p !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return c(f);
  }
  function c(f) {
    if (f === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return f;
  }
  function b() {
    try {
      var f = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (b = function() {
      return !!f;
    })();
  }
  function a(f) {
    return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(p) {
      return p.__proto__ || Object.getPrototypeOf(p);
    }, a(f);
  }
  function r(f, p, _) {
    return (p = y(p)) in f ? Object.defineProperty(f, p, { value: _, enumerable: !0, configurable: !0, writable: !0 }) : f[p] = _, f;
  }
  function y(f) {
    var p = S(f, "string");
    return N(p) == "symbol" ? p : p + "";
  }
  function S(f, p) {
    if (N(f) != "object" || !f) return f;
    var _ = f[Symbol.toPrimitive];
    if (_ !== void 0) {
      var k = _.call(f, p);
      if (N(k) != "object") return k;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (p === "string" ? String : Number)(f);
  }
  return ye.InnerSlider = /* @__PURE__ */ (function(f) {
    H(_, f);
    var p = l(_);
    function _(k) {
      var t;
      F(this, _), t = p.call(this, k), r(c(t), "listRefHandler", function(s) {
        return t.list = s;
      }), r(c(t), "trackRefHandler", function(s) {
        return t.track = s;
      }), r(c(t), "adaptHeight", function() {
        if (t.props.adaptiveHeight && t.list) {
          var s = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
          t.list.style.height = (0, v.getHeight)(s) + "px";
        }
      }), r(c(t), "componentDidMount", function() {
        if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
          var s = (0, v.getOnDemandLazySlides)(O(O({}, t.props), t.state));
          s.length > 0 && (t.setState(function(n) {
            return {
              lazyLoadedList: n.lazyLoadedList.concat(s)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(s));
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
        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach(function(s) {
          return clearTimeout(s);
        }), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
      }), r(c(t), "componentDidUpdate", function(s) {
        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
          var e = (0, v.getOnDemandLazySlides)(O(O({}, t.props), t.state));
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
        }, t.props), t.state), h = t.didPropsChange(s);
        h && t.updateState(n, h, function() {
          t.state.currentSlide >= o.default.Children.count(t.props.children) && t.changeSlide({
            message: "index",
            index: o.default.Children.count(t.props.children) - t.props.slidesToShow,
            currentSlide: t.state.currentSlide
          }), t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
        });
      }), r(c(t), "onWindowResized", function(s) {
        t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, d.default)(function() {
          return t.resizeWindow(s);
        }, 50), t.debouncedResize();
      }), r(c(t), "resizeWindow", function() {
        var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = !!(t.track && t.track.node);
        if (e) {
          var n = O(O({
            listRef: t.list,
            trackRef: t.track
          }, t.props), t.state);
          t.updateState(n, s, function() {
            t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
          }), t.setState({
            animating: !1
          }), clearTimeout(t.animationEndCallback), delete t.animationEndCallback;
        }
      }), r(c(t), "updateState", function(s, e, n) {
        var h = (0, v.initializedState)(s);
        s = O(O(O({}, s), h), {}, {
          slideIndex: h.currentSlide
        });
        var P = (0, v.getTrackLeft)(s);
        s = O(O({}, s), {}, {
          left: P
        });
        var w = (0, v.getTrackCSS)(s);
        (e || o.default.Children.count(t.props.children) !== o.default.Children.count(s.children)) && (h.trackStyle = w), t.setState(h, n);
      }), r(c(t), "ssrInit", function() {
        if (t.props.variableWidth) {
          var s = 0, e = 0, n = [], h = (0, v.getPreClones)(O(O(O({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          })), P = (0, v.getPostClones)(O(O(O({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          }));
          t.props.children.forEach(function(re) {
            n.push(re.props.style.width), s += re.props.style.width;
          });
          for (var w = 0; w < h; w++)
            e += n[n.length - 1 - w], s += n[n.length - 1 - w];
          for (var T = 0; T < P; T++)
            s += n[T];
          for (var C = 0; C < t.state.currentSlide; C++)
            e += n[C];
          var j = {
            width: s + "px",
            left: -e + "px"
          };
          if (t.props.centerMode) {
            var q = "".concat(n[t.state.currentSlide], "px");
            j.left = "calc(".concat(j.left, " + (100% - ").concat(q, ") / 2 ) ");
          }
          return {
            trackStyle: j
          };
        }
        var $ = o.default.Children.count(t.props.children), B = O(O(O({}, t.props), t.state), {}, {
          slideCount: $
        }), Q = (0, v.getPreClones)(B) + (0, v.getPostClones)(B) + $, J = 100 / t.props.slidesToShow * Q, X = 100 / Q, W = -X * ((0, v.getPreClones)(B) + t.state.currentSlide) * J / 100;
        t.props.centerMode && (W += (100 - X * J / 100) / 2);
        var V = {
          width: J + "%",
          left: W + "%"
        };
        return {
          slideWidth: X + "%",
          trackStyle: V
        };
      }), r(c(t), "checkImagesLoad", function() {
        var s = t.list && t.list.querySelectorAll && t.list.querySelectorAll(".slick-slide img") || [], e = s.length, n = 0;
        Array.prototype.forEach.call(s, function(h) {
          var P = function() {
            return ++n && n >= e && t.onWindowResized();
          };
          if (!h.onclick)
            h.onclick = function() {
              return h.parentNode.focus();
            };
          else {
            var w = h.onclick;
            h.onclick = function(T) {
              w(T), h.parentNode.focus();
            };
          }
          h.onload || (t.props.lazyLoad ? h.onload = function() {
            t.adaptHeight(), t.callbackTimers.push(setTimeout(t.onWindowResized, t.props.speed));
          } : (h.onload = P, h.onerror = function() {
            P(), t.props.onLazyLoadError && t.props.onLazyLoadError();
          }));
        });
      }), r(c(t), "progressiveLazyLoad", function() {
        for (var s = [], e = O(O({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, v.getPostClones)(e); n++)
          if (t.state.lazyLoadedList.indexOf(n) < 0) {
            s.push(n);
            break;
          }
        for (var h = t.state.currentSlide - 1; h >= -(0, v.getPreClones)(e); h--)
          if (t.state.lazyLoadedList.indexOf(h) < 0) {
            s.push(h);
            break;
          }
        s.length > 0 ? (t.setState(function(P) {
          return {
            lazyLoadedList: P.lazyLoadedList.concat(s)
          };
        }), t.props.onLazyLoad && t.props.onLazyLoad(s)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
      }), r(c(t), "slideHandler", function(s) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = t.props, h = n.asNavFor, P = n.beforeChange, w = n.onLazyLoad, T = n.speed, C = n.afterChange, j = t.state.currentSlide, q = (0, v.slideHandler)(O(O(O({
          index: s
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e
        })), $ = q.state, B = q.nextState;
        if ($) {
          P && P(j, $.currentSlide);
          var Q = $.lazyLoadedList.filter(function(J) {
            return t.state.lazyLoadedList.indexOf(J) < 0;
          });
          w && Q.length > 0 && w(Q), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), C && C(j), delete t.animationEndCallback), t.setState($, function() {
            h && t.asNavForIndex !== s && (t.asNavForIndex = s, h.innerSlider.slideHandler(s)), B && (t.animationEndCallback = setTimeout(function() {
              var J = B.animating, X = U(B, ["animating"]);
              t.setState(X, function() {
                t.callbackTimers.push(setTimeout(function() {
                  return t.setState({
                    animating: J
                  });
                }, 10)), C && C($.currentSlide), delete t.animationEndCallback;
              });
            }, T));
          });
        }
      }), r(c(t), "changeSlide", function(s) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = O(O({}, t.props), t.state), h = (0, v.changeSlide)(n, s);
        if (!(h !== 0 && !h) && (e === !0 ? t.slideHandler(h, e) : t.slideHandler(h), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
          var P = t.list.querySelectorAll(".slick-current");
          P[0] && P[0].focus();
        }
      }), r(c(t), "clickHandler", function(s) {
        t.clickable === !1 && (s.stopPropagation(), s.preventDefault()), t.clickable = !0;
      }), r(c(t), "keyHandler", function(s) {
        var e = (0, v.keyHandler)(s, t.props.accessibility, t.props.rtl);
        e !== "" && t.changeSlide({
          message: e
        });
      }), r(c(t), "selectHandler", function(s) {
        t.changeSlide(s);
      }), r(c(t), "disableBodyScroll", function() {
        var s = function(n) {
          n = n || window.event, n.preventDefault && n.preventDefault(), n.returnValue = !1;
        };
        window.ontouchmove = s;
      }), r(c(t), "enableBodyScroll", function() {
        window.ontouchmove = null;
      }), r(c(t), "swipeStart", function(s) {
        t.props.verticalSwiping && t.disableBodyScroll();
        var e = (0, v.swipeStart)(s, t.props.swipe, t.props.draggable);
        e !== "" && t.setState(e);
      }), r(c(t), "swipeMove", function(s) {
        var e = (0, v.swipeMove)(s, O(O(O({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(c(t), "swipeEnd", function(s) {
        var e = (0, v.swipeEnd)(s, O(O(O({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        if (e) {
          var n = e.triggerSlideHandler;
          delete e.triggerSlideHandler, t.setState(e), n !== void 0 && (t.slideHandler(n), t.props.verticalSwiping && t.enableBodyScroll());
        }
      }), r(c(t), "touchEnd", function(s) {
        t.swipeEnd(s), t.clickable = !0;
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
      }), r(c(t), "slickGoTo", function(s) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (s = Number(s), isNaN(s)) return "";
        t.callbackTimers.push(setTimeout(function() {
          return t.changeSlide({
            message: "index",
            index: s,
            currentSlide: t.state.currentSlide
          }, e);
        }, 0));
      }), r(c(t), "play", function() {
        var s;
        if (t.props.rtl)
          s = t.state.currentSlide - t.props.slidesToScroll;
        else if ((0, v.canGoNext)(O(O({}, t.props), t.state)))
          s = t.state.currentSlide + t.props.slidesToScroll;
        else
          return !1;
        t.slideHandler(s);
      }), r(c(t), "autoPlay", function(s) {
        t.autoplayTimer && clearInterval(t.autoplayTimer);
        var e = t.state.autoplaying;
        if (s === "update") {
          if (e === "hovered" || e === "focused" || e === "paused")
            return;
        } else if (s === "leave") {
          if (e === "paused" || e === "focused")
            return;
        } else if (s === "blur" && (e === "paused" || e === "hovered"))
          return;
        t.autoplayTimer = setInterval(t.play, t.props.autoplaySpeed + 50), t.setState({
          autoplaying: "playing"
        });
      }), r(c(t), "pause", function(s) {
        t.autoplayTimer && (clearInterval(t.autoplayTimer), t.autoplayTimer = null);
        var e = t.state.autoplaying;
        s === "paused" ? t.setState({
          autoplaying: "paused"
        }) : s === "focused" ? (e === "hovered" || e === "playing") && t.setState({
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
        var s = (0, m.default)("slick-slider", t.props.className, {
          "slick-vertical": t.props.vertical,
          "slick-initialized": !0
        }), e = O(O({}, t.props), t.state), n = (0, v.extractObject)(e, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), h = t.props.pauseOnHover;
        n = O(O({}, n), {}, {
          onMouseEnter: h ? t.onTrackOver : null,
          onMouseLeave: h ? t.onTrackLeave : null,
          onMouseOver: h ? t.onTrackOver : null,
          focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
        });
        var P;
        if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
          var w = (0, v.extractObject)(e, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), T = t.props.pauseOnDotsHover;
          w = O(O({}, w), {}, {
            clickHandler: t.changeSlide,
            onMouseEnter: T ? t.onDotsLeave : null,
            onMouseOver: T ? t.onDotsOver : null,
            onMouseLeave: T ? t.onDotsLeave : null
          }), P = /* @__PURE__ */ o.default.createElement(L.Dots, w);
        }
        var C, j, q = (0, v.extractObject)(e, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        q.clickHandler = t.changeSlide, t.props.arrows && (C = /* @__PURE__ */ o.default.createElement(M.PrevArrow, q), j = /* @__PURE__ */ o.default.createElement(M.NextArrow, q));
        var $ = null;
        t.props.vertical && ($ = {
          height: t.state.listHeight
        });
        var B = null;
        t.props.vertical === !1 ? t.props.centerMode === !0 && (B = {
          padding: "0px " + t.props.centerPadding
        }) : t.props.centerMode === !0 && (B = {
          padding: t.props.centerPadding + " 0px"
        });
        var Q = O(O({}, $), B), J = t.props.touchMove, X = {
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
        }, W = {
          className: s,
          dir: "ltr",
          style: t.props.style
        };
        return t.props.unslick && (X = {
          className: "slick-list"
        }, W = {
          className: s,
          style: t.props.style
        }), /* @__PURE__ */ o.default.createElement("div", W, t.props.unslick ? "" : C, /* @__PURE__ */ o.default.createElement("div", G({
          ref: t.listRefHandler
        }, X), /* @__PURE__ */ o.default.createElement(g.Track, G({
          ref: t.trackRefHandler
        }, n), t.props.children)), t.props.unslick ? "" : j, t.props.unslick ? "" : P);
      }), t.list = null, t.track = null, t.state = O(O({}, u.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: o.default.Children.count(t.props.children)
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      var K = t.ssrInit();
      return t.state = O(O({}, t.state), K), t;
    }
    return Z(_, [{
      key: "didPropsChange",
      value: function(t) {
        for (var K = !1, s = 0, e = Object.keys(this.props); s < e.length; s++) {
          var n = e[s];
          if (!t.hasOwnProperty(n)) {
            K = !0;
            break;
          }
          if (!(N(t[n]) === "object" || typeof t[n] == "function" || isNaN(t[n])) && t[n] !== this.props[n]) {
            K = !0;
            break;
          }
        }
        return K || o.default.Children.count(this.props.children) !== o.default.Children.count(t.children);
      }
    }]), _;
  })(o.default.Component), ye;
}
var Re, Ze;
function Gt() {
  if (Ze) return Re;
  Ze = 1;
  var o = function(u) {
    return u.replace(/[A-Z]/g, function(d) {
      return "-" + d.toLowerCase();
    }).toLowerCase();
  };
  return Re = o, Re;
}
var Ne, Qe;
function Ut() {
  if (Qe) return Ne;
  Qe = 1;
  var o = Gt(), u = function(v) {
    var g = /[height|width]$/;
    return g.test(v);
  }, d = function(v) {
    var g = "", L = Object.keys(v);
    return L.forEach(function(M, D) {
      var R = v[M];
      M = o(M), u(M) && typeof R == "number" && (R = R + "px"), R === !0 ? g += M : R === !1 ? g += "not " + M : g += "(" + M + ": " + R + ")", D < L.length - 1 && (g += " and ");
    }), g;
  }, m = function(v) {
    var g = "";
    return typeof v == "string" ? v : v instanceof Array ? (v.forEach(function(L, M) {
      g += d(L), M < v.length - 1 && (g += ", ");
    }), g) : d(v);
  };
  return Ne = m, Ne;
}
var et;
function Yt() {
  return et || (et = 1, (function(o) {
    var u = { NODE_ENV: "production" };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
    var d = M(fe), m = Bt(), v = M(Ut()), g = M(nt()), L = be();
    function M(a) {
      return a && a.__esModule ? a : { default: a };
    }
    function D(a) {
      "@babel/helpers - typeof";
      return D = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
        return typeof r;
      } : function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, D(a);
    }
    function R() {
      return R = Object.assign ? Object.assign.bind() : function(a) {
        for (var r = 1; r < arguments.length; r++) {
          var y = arguments[r];
          for (var S in y)
            ({}).hasOwnProperty.call(y, S) && (a[S] = y[S]);
        }
        return a;
      }, R.apply(null, arguments);
    }
    function N(a, r) {
      var y = Object.keys(a);
      if (Object.getOwnPropertySymbols) {
        var S = Object.getOwnPropertySymbols(a);
        r && (S = S.filter(function(f) {
          return Object.getOwnPropertyDescriptor(a, f).enumerable;
        })), y.push.apply(y, S);
      }
      return y;
    }
    function G(a) {
      for (var r = 1; r < arguments.length; r++) {
        var y = arguments[r] != null ? arguments[r] : {};
        r % 2 ? N(Object(y), !0).forEach(function(S) {
          i(a, S, y[S]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(y)) : N(Object(y)).forEach(function(S) {
          Object.defineProperty(a, S, Object.getOwnPropertyDescriptor(y, S));
        });
      }
      return a;
    }
    function U(a, r) {
      if (!(a instanceof r)) throw new TypeError("Cannot call a class as a function");
    }
    function ee(a, r) {
      for (var y = 0; y < r.length; y++) {
        var S = r[y];
        S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(a, c(S.key), S);
      }
    }
    function Y(a, r, y) {
      return r && ee(a.prototype, r), Object.defineProperty(a, "prototype", { writable: !1 }), a;
    }
    function O(a, r) {
      if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
      a.prototype = Object.create(r && r.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), r && F(a, r);
    }
    function F(a, r) {
      return F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(y, S) {
        return y.__proto__ = S, y;
      }, F(a, r);
    }
    function z(a) {
      var r = A();
      return function() {
        var y, S = l(a);
        if (r) {
          var f = l(this).constructor;
          y = Reflect.construct(S, arguments, f);
        } else y = S.apply(this, arguments);
        return Z(this, y);
      };
    }
    function Z(a, r) {
      if (r && (D(r) == "object" || typeof r == "function")) return r;
      if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return H(a);
    }
    function H(a) {
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
    function l(a) {
      return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
      }, l(a);
    }
    function i(a, r, y) {
      return (r = c(r)) in a ? Object.defineProperty(a, r, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : a[r] = y, a;
    }
    function c(a) {
      var r = b(a, "string");
      return D(r) == "symbol" ? r : r + "";
    }
    function b(a, r) {
      if (D(a) != "object" || !a) return a;
      var y = a[Symbol.toPrimitive];
      if (y !== void 0) {
        var S = y.call(a, r);
        if (D(S) != "object") return S;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(a);
    }
    o.default = /* @__PURE__ */ (function(a) {
      O(y, a);
      var r = z(y);
      function y(S) {
        var f;
        return U(this, y), f = r.call(this, S), i(H(f), "innerSliderRefHandler", function(p) {
          return f.innerSlider = p;
        }), i(H(f), "slickPrev", function() {
          return f.innerSlider.slickPrev();
        }), i(H(f), "slickNext", function() {
          return f.innerSlider.slickNext();
        }), i(H(f), "slickGoTo", function(p) {
          var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return f.innerSlider.slickGoTo(p, _);
        }), i(H(f), "slickPause", function() {
          return f.innerSlider.pause("paused");
        }), i(H(f), "slickPlay", function() {
          return f.innerSlider.autoPlay("play");
        }), f.state = {
          breakpoint: null
        }, f._responsiveMediaHandlers = [], f;
      }
      return Y(y, [{
        key: "media",
        value: function(f, p) {
          var _ = window.matchMedia(f), k = function(K) {
            var s = K.matches;
            s && p();
          };
          _.addListener(k), this._responsiveMediaHandlers.push({
            mql: _,
            query: f,
            listener: k
          });
        }
        // handles responsive breakpoints
      }, {
        key: "componentDidMount",
        value: function() {
          var f = this;
          if (this.props.responsive) {
            var p = this.props.responsive.map(function(k) {
              return k.breakpoint;
            });
            p.sort(function(k, t) {
              return k - t;
            }), p.forEach(function(k, t) {
              var K;
              t === 0 ? K = (0, v.default)({
                minWidth: 0,
                maxWidth: k
              }) : K = (0, v.default)({
                minWidth: p[t - 1] + 1,
                maxWidth: k
              }), (0, L.canUseDOM)() && f.media(K, function() {
                f.setState({
                  breakpoint: k
                });
              });
            });
            var _ = (0, v.default)({
              minWidth: p.slice(-1)[0]
            });
            (0, L.canUseDOM)() && this.media(_, function() {
              f.setState({
                breakpoint: null
              });
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this._responsiveMediaHandlers.forEach(function(f) {
            f.mql.removeListener(f.listener);
          });
        }
      }, {
        key: "render",
        value: function() {
          var f = this, p, _;
          this.state.breakpoint ? (_ = this.props.responsive.filter(function(T) {
            return T.breakpoint === f.state.breakpoint;
          }), p = _[0].settings === "unslick" ? "unslick" : G(G(G({}, g.default), this.props), _[0].settings)) : p = G(G({}, g.default), this.props), p.centerMode && (p.slidesToScroll > 1 && u.NODE_ENV, p.slidesToScroll = 1), p.fade && (p.slidesToShow > 1 && u.NODE_ENV, p.slidesToScroll > 1 && u.NODE_ENV, p.slidesToShow = 1, p.slidesToScroll = 1);
          var k = d.default.Children.toArray(this.props.children);
          k = k.filter(function(T) {
            return typeof T == "string" ? !!T.trim() : !!T;
          }), p.variableWidth && (p.rows > 1 || p.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), p.variableWidth = !1);
          for (var t = [], K = null, s = 0; s < k.length; s += p.rows * p.slidesPerRow) {
            for (var e = [], n = s; n < s + p.rows * p.slidesPerRow; n += p.slidesPerRow) {
              for (var h = [], P = n; P < n + p.slidesPerRow && (p.variableWidth && k[P].props.style && (K = k[P].props.style.width), !(P >= k.length)); P += 1)
                h.push(/* @__PURE__ */ d.default.cloneElement(k[P], {
                  key: 100 * s + 10 * n + P,
                  tabIndex: -1,
                  style: {
                    width: "".concat(100 / p.slidesPerRow, "%"),
                    display: "inline-block"
                  }
                }));
              e.push(/* @__PURE__ */ d.default.createElement("div", {
                key: 10 * s + n
              }, h));
            }
            p.variableWidth ? t.push(/* @__PURE__ */ d.default.createElement("div", {
              key: s,
              style: {
                width: K
              }
            }, e)) : t.push(/* @__PURE__ */ d.default.createElement("div", {
              key: s
            }, e));
          }
          if (p === "unslick") {
            var w = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ d.default.createElement("div", {
              className: w
            }, k);
          } else t.length <= p.slidesToShow && (p.unslick = !0);
          return /* @__PURE__ */ d.default.createElement(m.InnerSlider, R({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, (0, L.filterSettings)(p)), t);
        }
      }]), y;
    })(d.default.Component);
  })(je)), je;
}
var tt;
function Xt() {
  return tt || (tt = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
    var u = d(Yt());
    function d(m) {
      return m && m.__esModule ? m : { default: m };
    }
    o.default = u.default;
  })(Te)), Te;
}
var Kt = Xt();
const rt = /* @__PURE__ */ gt(Kt);
function Vt({
  title: o,
  titleId: u,
  ...d
}, m) {
  return /* @__PURE__ */ se.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: m,
    "aria-labelledby": u
  }, d), o ? /* @__PURE__ */ se.createElement("title", {
    id: u
  }, o) : null, /* @__PURE__ */ se.createElement("path", {
    fillRule: "evenodd",
    d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",
    clipRule: "evenodd"
  }));
}
const Jt = /* @__PURE__ */ se.forwardRef(Vt);
function Zt({
  title: o,
  titleId: u,
  ...d
}, m) {
  return /* @__PURE__ */ se.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: m,
    "aria-labelledby": u
  }, d), o ? /* @__PURE__ */ se.createElement("title", {
    id: u
  }, o) : null, /* @__PURE__ */ se.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
  }));
}
const Qt = /* @__PURE__ */ se.forwardRef(Zt);
function er({ rating: o, textAlign: u = "left" }) {
  if (!o || o < 1 || o > 5) return null;
  const d = u === "center" ? "flex justify-center" : u === "right" ? "flex justify-end" : "flex justify-start", m = [];
  for (let v = 1; v <= 5; v++)
    v <= o ? m.push(
      /* @__PURE__ */ E(Jt, { className: "w-24 h-24 text-grey-800", "aria-hidden": "true" }, v)
    ) : m.push(
      /* @__PURE__ */ E(Qt, { className: "w-24 h-24 text-grey-800", "aria-hidden": "true" }, v)
    );
  return /* @__PURE__ */ E("div", { className: `${d} gap-4`, role: "img", "aria-label": `Rating: ${o} out of 5 stars`, children: m });
}
function ze({
  testimonial: o,
  name: u,
  role: d,
  rating: m = null,
  // number | null (1-5)
  imageUrl: v,
  logoUrl: g,
  mediaPosition: L = "top",
  // 'top' | 'bottom' | 'with-name'
  align: M = "left",
  // 'left' | 'center'
  withPadding: D = !1,
  // boolean
  className: R = "",
  ...N
}) {
  const G = m !== null && m >= 1 && m <= 5 ? Math.floor(m) : null, U = M === "center", ee = `w-full ${D ? "p-testimonial-padding" : ""} ${R}`.trim(), Y = U ? "text-center items-center" : "text-left items-start", O = [
    g ? /* @__PURE__ */ E(
      "img",
      {
        src: g,
        alt: u || "Logo",
        className: "h-40 w-auto"
      },
      "logo"
    ) : null,
    v ? /* @__PURE__ */ E(
      "img",
      {
        src: v,
        alt: u || "Profile",
        className: "h-48 w-48 rounded-full object-cover"
      },
      "image"
    ) : null
  ].filter(Boolean), F = O.length > 0, z = F && L === "top", Z = F && L === "bottom", H = F && L === "with-name";
  return /* @__PURE__ */ E("figure", { className: ee, ...N, ...N.attributes || {}, children: /* @__PURE__ */ le("div", { className: `flex flex-col gap-testimonial-spacing-y ${Y}`, children: [
    z && /* @__PURE__ */ E("div", { className: `flex items-center gap-10 ${U ? "justify-center" : "justify-start"}`, children: O }),
    G && /* @__PURE__ */ E(er, { rating: G, textAlign: U ? "center" : "left" }),
    o && /* @__PURE__ */ E("blockquote", { className: "m-0", children: /* @__PURE__ */ E("p", { className: "text-body-default", children: o }) }),
    (u || d || H) && /* @__PURE__ */ le(
      "figcaption",
      {
        className: `flex flex-col gap-6 ${U ? "items-center" : "items-start"}`,
        children: [
          H && /* @__PURE__ */ le("div", { className: `flex items-center gap-10 ${U ? "justify-center" : "justify-start"}`, children: [
            O,
            /* @__PURE__ */ le("div", { className: `flex flex-col ${U ? "items-center" : "items-start"}`, children: [
              u && /* @__PURE__ */ E("cite", { className: "text-ui-label-small not-italic", children: u }),
              d && /* @__PURE__ */ E("p", { className: "text-ui-label-small", children: d })
            ] })
          ] }),
          !H && /* @__PURE__ */ le(ft, { children: [
            u && /* @__PURE__ */ E("cite", { className: "text-ui-label-small not-italic", children: u }),
            d && /* @__PURE__ */ E("p", { className: "text-ui-label-small", children: d })
          ] })
        ]
      }
    ),
    Z && /* @__PURE__ */ E("div", { className: `flex items-center gap-10 ${U ? "justify-center" : "justify-start"}`, children: O })
  ] }) });
}
const tr = dt(() => Promise.resolve().then(() => lr)), rr = ({
  media: o = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: u = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: d = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: m,
  videoUrl: v,
  lottieUrl: g,
  lottieData: L,
  iframeUrl: M,
  flipbookUrl: D,
  title: R,
  className: N = ""
}) => {
  var i;
  const G = typeof window < "u" && window.location.origin.indexOf("author") > -1, U = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Y = `relative w-full h-full ${u === "square" ? "aspect-square" : u === "rectangle" ? "aspect-[4/3]" : o === "video" ? "aspect-video" : ""}`.trim(), O = u === "default" ? `w-full h-full ${N}`.trim() : `absolute inset-0 w-full h-full ${N}`.trim(), F = "w-full h-full", z = u === "default" ? `${O}`.trim() : O, Z = d === "contain" ? "object-contain" : "object-cover", H = d === "contain" ? "xMidYMid meet" : "xMidYMid slice", A = `relative w-full ${N}`.trim(), l = "w-full min-h-[280px]";
  switch (o) {
    case "image":
      if (m)
        return /* @__PURE__ */ E("div", { className: Y, children: /* @__PURE__ */ E(
          "img",
          {
            src: m,
            alt: R || "Media image",
            className: `${Z} ${O}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (v) {
        const c = v.includes("youtube.com/watch") || v.includes("youtu.be/");
        let b = v;
        c && (b = `https://www.youtube.com/embed/${v.includes("youtu.be/") ? v.split("youtu.be/")[1].split("?")[0] : (i = v.split("v=")[1]) == null ? void 0 : i.split("&")[0]}`);
        const a = (() => {
          if (!c) return b;
          try {
            const r = new URL(b);
            return r.searchParams.set("autoplay", "0"), r.searchParams.set("mute", "0"), r.searchParams.set("playsinline", "1"), r.searchParams.set("controls", "1"), r.searchParams.set("rel", "0"), r.toString();
          } catch {
            return b.includes("?") ? b.includes("autoplay=") ? b : `${b}&autoplay=0` : `${b}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ E("div", { className: Y, children: c ? /* @__PURE__ */ E(
          "iframe",
          {
            src: a,
            title: R || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${O} ${Z}`.trim()
          }
        ) : /* @__PURE__ */ E(
          "video",
          {
            className: `${O} ${Z}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: R || "Video player",
            children: /* @__PURE__ */ E("source", { src: v })
          }
        ) });
      }
      break;
    case "lottie":
      if (L)
        return G ? /* @__PURE__ */ E("div", { className: Y, role: "img", "aria-label": R || "Animation", children: /* @__PURE__ */ E(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${O}`.trim(),
            children: /* @__PURE__ */ E("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ E(
          "div",
          {
            className: Y,
            role: "img",
            "aria-label": R || "Animation",
            children: /* @__PURE__ */ E("div", { className: `${O} overflow-hidden`.trim(), children: /* @__PURE__ */ E(
              yt,
              {
                animationData: L,
                loop: !U,
                autoplay: !U,
                className: F,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: H }
              }
            ) })
          }
        );
      if (g)
        return /* @__PURE__ */ E("div", { className: Y, children: /* @__PURE__ */ E("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (M)
        return /* @__PURE__ */ E("div", { className: Y, children: /* @__PURE__ */ E(
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
        return G ? /* @__PURE__ */ E("div", { className: A, role: "img", "aria-label": R || "Flipbook", children: /* @__PURE__ */ E(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${l}`.trim(),
            children: /* @__PURE__ */ E("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ E("div", { className: A, children: /* @__PURE__ */ E("div", { className: l, children: /* @__PURE__ */ E(pt, { fallback: /* @__PURE__ */ E("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ E(tr, { pdfUrl: D, title: R, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ E("div", { className: Y, children: /* @__PURE__ */ E("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${u === "default" ? "" : "absolute inset-0"}`.trim(), children: o ? `${o.charAt(0).toUpperCase() + o.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function fr({
  /**
   * Variants: 'media' | 'columns' | 'stacked-media'
   * - 'media': 1 testimonial + 1 media per slide (carousel, 1 per page)
   * - 'columns': testimonial grid (1-3 columns). If columns > 3, use carousel with 3 per page
   * - 'stacked-media': 2-column layout with media + stacked testimonials (order can change)
   */
  variant: o,
  testimonials: u = [],
  media: d = null,
  // media object for stacked-media and trust
  order: m = "testimonial-first",
  // 'media-first' | 'testimonial-first'
  columns: v = 1,
  // 1 | 2 | 3
  carousel: g = !1,
  // enable carousel for columns
  align: L = "left",
  // 'left' | 'center'
  withPadding: M = !1,
  // boolean
  mediaPosition: D = "top",
  // 'top' | 'bottom' | 'with-name'
  id: R = "",
  className: N = "",
  infinite: G = !1
}) {
  const U = o || "columns", ee = m === "media-first", Y = [1, 2, 3].includes(v) ? v : 3, O = U === "columns" && g, F = (i) => ({
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
  }), z = (i, c = "") => i ? /* @__PURE__ */ E("div", { className: "relative w-full h-full min-h-[220px] overflow-hidden", children: /* @__PURE__ */ E("div", { className: "absolute inset-0 w-full h-full", children: /* @__PURE__ */ E(
    rr,
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
    const b = i.media || d, a = !!b, r = a ? "xl:w-1/2" : "w-full";
    return /* @__PURE__ */ le("div", { className: "flex flex-col xl:flex-row items-stretch text-gray-950", children: [
      ee && a && /* @__PURE__ */ E("div", { className: "w-full xl:w-1/2", children: z(b, i.testimonial || "") }),
      /* @__PURE__ */ E("div", { className: `flex items-center justify-center ${r}`, children: /* @__PURE__ */ E(ze, { ...F(i) }) }),
      !ee && a && /* @__PURE__ */ E("div", { className: "w-full xl:w-1/2", children: z(b, i.testimonial || "") })
    ] }, c);
  }, H = (i) => {
    const c = (() => {
      switch (Y) {
        case 1:
          return "grid grid-cols-1 gap-section-spacing-x";
        case 2:
          return "grid grid-cols-1 xl:grid-cols-2 gap-section-spacing-x";
        case 3:
        default:
          return "grid grid-cols-1 xl:grid-cols-3 gap-section-spacing-x";
      }
    })();
    return /* @__PURE__ */ E("div", { className: c, children: i.map((b, a) => /* @__PURE__ */ E(ze, { ...F(b) }, a)) });
  }, A = (i, c) => {
    const b = [];
    for (let a = 0; a < i.length; a += c)
      b.push(i.slice(a, a + c));
    return b;
  }, l = (i) => ({
    className: "w-full testimonial-slider",
    dots: !0,
    infinite: G,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !1,
    arrows: !1
  });
  if (U === "media") {
    if (!u || u.length === 0) return null;
    const i = l(u.length);
    return /* @__PURE__ */ E("div", { className: `container ${N}`, id: R, children: /* @__PURE__ */ E(rt, { ...i, children: u.map((c, b) => /* @__PURE__ */ E("div", { children: Z(c, b) }, b)) }) });
  }
  if (U === "stacked-media") {
    if (!u || u.length === 0) return null;
    const i = !!d;
    return /* @__PURE__ */ E("div", { className: `container ${N}`, id: R, children: /* @__PURE__ */ le("div", { className: "flex flex-col xl:flex-row items-stretch gap-24", children: [
      ee && i && /* @__PURE__ */ E("div", { className: "w-full xl:w-1/2", children: z(d) }),
      /* @__PURE__ */ E("div", { className: `flex flex-col gap-24 ${i ? "w-full xl:w-1/2" : "w-full"}`, children: u.map((c, b) => /* @__PURE__ */ E(ze, { ...F(c) }, b)) }),
      !ee && i && /* @__PURE__ */ E("div", { className: "w-full xl:w-1/2", children: z(d) })
    ] }) });
  }
  if (U === "columns") {
    if (!u || u.length === 0) return null;
    if (!O)
      return /* @__PURE__ */ E("div", { className: `container ${N}`, id: R, children: H(u) });
    const i = A(u, Y), c = l();
    return /* @__PURE__ */ E("div", { className: `container ${N}`, id: R, children: /* @__PURE__ */ E(rt, { ...c, children: i.map((b, a) => /* @__PURE__ */ E("div", { children: H(b) }, a)) }) });
  }
  return null;
}
let Ie, ut, He, Oe;
const nr = async () => {
  if (!Oe) {
    const o = await import("react-pdf");
    Oe = o.pdfjs, ut = o.Document, He = o.Page, Oe.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${Oe.version}/build/pdf.worker.min.mjs`;
  }
}, ir = async () => {
  Ie || (Ie = (await import("react-pageflip")).default);
}, or = ht(({ children: o }, u) => /* @__PURE__ */ E("div", { ref: u, className: "w-full h-full overflow-hidden", children: o })), ar = ({ pdfUrl: o, title: u, width: d = 280, height: m = 280, className: v = "" }) => {
  const [g, L] = he(0), [M, D] = he(null), [R, N] = he(!0), [G, U] = he(m / d), [ee, Y] = he(0), O = vt(null);
  We(() => {
    Promise.all([nr(), ir()]).then(() => N(!1)).catch(() => {
      D("Failed to load flipbook");
    });
  }, []), We(() => {
    const A = O.current;
    if (!A) return;
    const l = new ResizeObserver(([i]) => {
      const c = Math.floor(i.contentRect.width);
      c > 0 && Y(c);
    });
    return l.observe(A), () => l.disconnect();
  }, [R]);
  const F = ee > 0 ? Math.floor(ee / 2) : Math.floor(d / 2), z = Math.round(F * G), Z = qe(async (A) => {
    try {
      const i = (await A.getPage(1)).getViewport({ scale: 1 });
      i != null && i.width && (i != null && i.height) && U(i.height / i.width);
    } catch {
    }
    L(A.numPages || 0);
  }, []), H = qe((A) => {
    D((A == null ? void 0 : A.message) || "Failed to load PDF");
  }, []);
  return M ? /* @__PURE__ */ E("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : R ? /* @__PURE__ */ E("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ E("div", { ref: O, className: `w-full ${v}`.trim(), children: /* @__PURE__ */ le(
    ut,
    {
      file: o,
      onLoadSuccess: Z,
      onLoadError: H,
      loading: /* @__PURE__ */ E("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        g === 1 && /* @__PURE__ */ E(
          "div",
          {
            className: `w-full flex justify-center items-center ${v}`.trim(),
            style: { minHeight: `${z}px` },
            children: /* @__PURE__ */ E(He, { pageNumber: 1, width: d, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        g > 1 && /* @__PURE__ */ E(
          Ie,
          {
            width: F,
            height: z,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": u || "Flipbook",
            children: Array.from({ length: g }, (A, l) => /* @__PURE__ */ E(or, { children: /* @__PURE__ */ E(He, { pageNumber: l + 1, width: F, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, l))
          },
          `${F}-${z}`
        )
      ]
    }
  ) });
}, lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ar
}, Symbol.toStringTag, { value: "Module" }));
export {
  fr as default
};
