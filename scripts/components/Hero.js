import { jsx as E, jsxs as le, Fragment as He } from "react/jsx-runtime";
import ce, { lazy as ft, Suspense as dt, useState as fe, useRef as rt, useEffect as Ne, useCallback as We, forwardRef as pt } from "react";
import vt from "lottie-react";
var Se = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ht(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function yt(i) {
  if (Object.prototype.hasOwnProperty.call(i, "__esModule")) return i;
  var f = i.default;
  if (typeof f == "function") {
    var h = function S() {
      return this instanceof S ? Reflect.construct(f, arguments, this.constructor) : f.apply(this, arguments);
    };
    h.prototype = f.prototype;
  } else h = {};
  return Object.defineProperty(h, "__esModule", { value: !0 }), Object.keys(i).forEach(function(S) {
    var y = Object.getOwnPropertyDescriptor(i, S);
    Object.defineProperty(h, S, y.get ? y : {
      enumerable: !0,
      get: function() {
        return i[S];
      }
    });
  }), h;
}
var Ce = {}, Te = {}, he = {}, je = {}, qe;
function gt() {
  return qe || (qe = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var f = {
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
    i.default = f;
  })(je)), je;
}
var xe, Fe;
function mt() {
  if (Fe) return xe;
  Fe = 1;
  var i = "Expected a function", f = NaN, h = "[object Symbol]", S = /^\s+|\s+$/g, y = /^[-+]0x[0-9a-f]+$/i, g = /^0b[01]+$/i, L = /^0o[0-7]+$/i, M = parseInt, z = typeof Se == "object" && Se && Se.Object === Object && Se, R = typeof self == "object" && self && self.Object === Object && self, D = z || R || Function("return this")(), H = Object.prototype, ee = H.toString, Q = Math.max, U = Math.min, P = function() {
    return D.Date.now();
  };
  function X(a, s, u) {
    var m, o, r, p, b, c, d = 0, O = !1, _ = !1, t = !0;
    if (typeof a != "function")
      throw new TypeError(i);
    s = A(s) || 0, N(u) && (O = !!u.leading, _ = "maxWait" in u, r = _ ? Q(A(u.maxWait) || 0, s) : r, t = "trailing" in u ? !!u.trailing : t);
    function B(j) {
      var q = m, F = o;
      return m = o = void 0, d = j, p = a.apply(F, q), p;
    }
    function l(j) {
      return d = j, b = setTimeout(v, s), O ? B(j) : p;
    }
    function e(j) {
      var q = j - c, F = j - d, $ = s - q;
      return _ ? U($, r - F) : $;
    }
    function n(j) {
      var q = j - c, F = j - d;
      return c === void 0 || q >= s || q < 0 || _ && F >= r;
    }
    function v() {
      var j = P();
      if (n(j))
        return k(j);
      b = setTimeout(v, e(j));
    }
    function k(j) {
      return b = void 0, t && m ? B(j) : (m = o = void 0, p);
    }
    function w() {
      b !== void 0 && clearTimeout(b), d = 0, m = c = o = b = void 0;
    }
    function T() {
      return b === void 0 ? p : k(P());
    }
    function C() {
      var j = P(), q = n(j);
      if (m = arguments, o = this, c = j, q) {
        if (b === void 0)
          return l(c);
        if (_)
          return b = setTimeout(v, s), B(c);
      }
      return b === void 0 && (b = setTimeout(v, s)), p;
    }
    return C.cancel = w, C.flush = T, C;
  }
  function N(a) {
    var s = typeof a;
    return !!a && (s == "object" || s == "function");
  }
  function Z(a) {
    return !!a && typeof a == "object";
  }
  function G(a) {
    return typeof a == "symbol" || Z(a) && ee.call(a) == h;
  }
  function A(a) {
    if (typeof a == "number")
      return a;
    if (G(a))
      return f;
    if (N(a)) {
      var s = typeof a.valueOf == "function" ? a.valueOf() : a;
      a = N(s) ? s + "" : s;
    }
    if (typeof a != "string")
      return a === 0 ? a : +a;
    a = a.replace(S, "");
    var u = g.test(a);
    return u || L.test(a) ? M(a.slice(2), u ? 2 : 8) : y.test(a) ? f : +a;
  }
  return xe = X, xe;
}
var Ee = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var $e;
function ke() {
  return $e || ($e = 1, (function(i) {
    (function() {
      var f = {}.hasOwnProperty;
      function h() {
        for (var g = "", L = 0; L < arguments.length; L++) {
          var M = arguments[L];
          M && (g = y(g, S(M)));
        }
        return g;
      }
      function S(g) {
        if (typeof g == "string" || typeof g == "number")
          return g;
        if (typeof g != "object")
          return "";
        if (Array.isArray(g))
          return h.apply(null, g);
        if (g.toString !== Object.prototype.toString && !g.toString.toString().includes("[native code]"))
          return g.toString();
        var L = "";
        for (var M in g)
          f.call(g, M) && g[M] && (L = y(L, M));
        return L;
      }
      function y(g, L) {
        return L ? g ? g + " " + L : g + L : g;
      }
      i.exports ? (h.default = h, i.exports = h) : window.classNames = h;
    })();
  })(Ee)), Ee.exports;
}
var x = {}, Le = {}, Be;
function nt() {
  return Be || (Be = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var f = h(ce);
    function h(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var S = {
      accessibility: !0,
      adaptiveHeight: !1,
      afterChange: null,
      appendDots: function(g) {
        return /* @__PURE__ */ f.default.createElement("ul", {
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
        return /* @__PURE__ */ f.default.createElement("button", null, g + 1);
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
    i.default = S;
  })(Le)), Le;
}
var Ye;
function me() {
  if (Ye) return x;
  Ye = 1, Object.defineProperty(x, "__esModule", {
    value: !0
  }), x.checkSpecKeys = x.checkNavigable = x.changeSlide = x.canUseDOM = x.canGoNext = void 0, x.clamp = R, x.extractObject = void 0, x.filterSettings = B, x.validSettings = x.swipeStart = x.swipeMove = x.swipeEnd = x.slidesOnRight = x.slidesOnLeft = x.slideHandler = x.siblingDirection = x.safePreventDefault = x.lazyStartIndex = x.lazySlidesOnRight = x.lazySlidesOnLeft = x.lazyEndIndex = x.keyHandler = x.initializedState = x.getWidth = x.getTrackLeft = x.getTrackCSS = x.getTrackAnimateCSS = x.getTotalSlides = x.getSwipeDirection = x.getSlideCount = x.getRequiredLazySlides = x.getPreClones = x.getPostClones = x.getOnDemandLazySlides = x.getNavigableIndexes = x.getHeight = void 0;
  var i = h(ce), f = h(nt());
  function h(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function S(l) {
    "@babel/helpers - typeof";
    return S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, S(l);
  }
  function y(l, e) {
    var n = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      var v = Object.getOwnPropertySymbols(l);
      e && (v = v.filter(function(k) {
        return Object.getOwnPropertyDescriptor(l, k).enumerable;
      })), n.push.apply(n, v);
    }
    return n;
  }
  function g(l) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2 ? y(Object(n), !0).forEach(function(v) {
        L(l, v, n[v]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(v) {
        Object.defineProperty(l, v, Object.getOwnPropertyDescriptor(n, v));
      });
    }
    return l;
  }
  function L(l, e, n) {
    return (e = M(e)) in l ? Object.defineProperty(l, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : l[e] = n, l;
  }
  function M(l) {
    var e = z(l, "string");
    return S(e) == "symbol" ? e : e + "";
  }
  function z(l, e) {
    if (S(l) != "object" || !l) return l;
    var n = l[Symbol.toPrimitive];
    if (n !== void 0) {
      var v = n.call(l, e);
      if (S(v) != "object") return v;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(l);
  }
  function R(l, e, n) {
    return Math.max(e, Math.min(l, n));
  }
  var D = x.safePreventDefault = function(e) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(e._reactName) || e.preventDefault();
  }, H = x.getOnDemandLazySlides = function(e) {
    for (var n = [], v = ee(e), k = Q(e), w = v; w < k; w++)
      e.lazyLoadedList.indexOf(w) < 0 && n.push(w);
    return n;
  };
  x.getRequiredLazySlides = function(e) {
    for (var n = [], v = ee(e), k = Q(e), w = v; w < k; w++)
      n.push(w);
    return n;
  };
  var ee = x.lazyStartIndex = function(e) {
    return e.currentSlide - U(e);
  }, Q = x.lazyEndIndex = function(e) {
    return e.currentSlide + P(e);
  }, U = x.lazySlidesOnLeft = function(e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }, P = x.lazySlidesOnRight = function(e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }, X = x.getWidth = function(e) {
    return e && e.offsetWidth || 0;
  }, N = x.getHeight = function(e) {
    return e && e.offsetHeight || 0;
  }, Z = x.getSwipeDirection = function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, v, k, w, T;
    return v = e.startX - e.curX, k = e.startY - e.curY, w = Math.atan2(k, v), T = Math.round(w * 180 / Math.PI), T < 0 && (T = 360 - Math.abs(T)), T <= 45 && T >= 0 || T <= 360 && T >= 315 ? "left" : T >= 135 && T <= 225 ? "right" : n === !0 ? T >= 35 && T <= 135 ? "up" : "down" : "vertical";
  }, G = x.canGoNext = function(e) {
    var n = !0;
    return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (n = !1), n;
  };
  x.extractObject = function(e, n) {
    var v = {};
    return n.forEach(function(k) {
      return v[k] = e[k];
    }), v;
  }, x.initializedState = function(e) {
    var n = i.default.Children.count(e.children), v = e.listRef, k = Math.ceil(X(v)), w = e.trackRef && e.trackRef.node, T = Math.ceil(X(w)), C;
    if (e.vertical)
      C = k;
    else {
      var j = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding == "string" && e.centerPadding.slice(-1) === "%" && (j *= k / 100), C = Math.ceil((k - j) / e.slidesToShow);
    }
    var q = v && N(v.querySelector('[data-index="0"]')), F = q * e.slidesToShow, $ = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && ($ = n - 1 - e.initialSlide);
    var J = e.lazyLoadedList || [], V = H(g(g({}, e), {}, {
      currentSlide: $,
      lazyLoadedList: J
    }));
    J = J.concat(V);
    var Y = {
      slideCount: n,
      slideWidth: C,
      listWidth: k,
      trackWidth: T,
      currentSlide: $,
      slideHeight: q,
      listHeight: F,
      lazyLoadedList: J
    };
    return e.autoplaying === null && e.autoplay && (Y.autoplaying = "playing"), Y;
  }, x.slideHandler = function(e) {
    var n = e.waitForAnimate, v = e.animating, k = e.fade, w = e.infinite, T = e.index, C = e.slideCount, j = e.lazyLoad, q = e.currentSlide, F = e.centerMode, $ = e.slidesToScroll, J = e.slidesToShow, V = e.useCSS, Y = e.lazyLoadedList;
    if (n && v) return {};
    var W = T, K, re, I, te = {}, ne = {}, ie = w ? T : R(T, 0, C - 1);
    if (k) {
      if (!w && (T < 0 || T >= C)) return {};
      T < 0 ? W = T + C : T >= C && (W = T - C), j && Y.indexOf(W) < 0 && (Y = Y.concat(W)), te = {
        animating: !0,
        currentSlide: W,
        lazyLoadedList: Y,
        targetSlide: W
      }, ne = {
        animating: !1,
        targetSlide: W
      };
    } else
      K = W, W < 0 ? (K = W + C, w ? C % $ !== 0 && (K = C - C % $) : K = 0) : !G(e) && W > q ? W = K = q : F && W >= C ? (W = w ? C : C - 1, K = w ? 0 : C - 1) : W >= C && (K = W - C, w ? C % $ !== 0 && (K = 0) : K = C - J), !w && W + J >= C && (K = C - J), re = r(g(g({}, e), {}, {
        slideIndex: W
      })), I = r(g(g({}, e), {}, {
        slideIndex: K
      })), w || (re === I && (W = K), re = I), j && (Y = Y.concat(H(g(g({}, e), {}, {
        currentSlide: W
      })))), V ? (te = {
        animating: !0,
        currentSlide: K,
        trackStyle: o(g(g({}, e), {}, {
          left: re
        })),
        lazyLoadedList: Y,
        targetSlide: ie
      }, ne = {
        animating: !1,
        currentSlide: K,
        trackStyle: m(g(g({}, e), {}, {
          left: I
        })),
        swipeLeft: null,
        targetSlide: ie
      }) : te = {
        currentSlide: K,
        trackStyle: m(g(g({}, e), {}, {
          left: I
        })),
        lazyLoadedList: Y,
        targetSlide: ie
      };
    return {
      state: te,
      nextState: ne
    };
  }, x.changeSlide = function(e, n) {
    var v, k, w, T, C, j = e.slidesToScroll, q = e.slidesToShow, F = e.slideCount, $ = e.currentSlide, J = e.targetSlide, V = e.lazyLoad, Y = e.infinite;
    if (T = F % j !== 0, v = T ? 0 : (F - $) % j, n.message === "previous")
      w = v === 0 ? j : q - v, C = $ - w, V && !Y && (k = $ - w, C = k === -1 ? F - 1 : k), Y || (C = J - j);
    else if (n.message === "next")
      w = v === 0 ? j : v, C = $ + w, V && !Y && (C = ($ + j) % F + v), Y || (C = J + j);
    else if (n.message === "dots")
      C = n.index * n.slidesToScroll;
    else if (n.message === "children") {
      if (C = n.index, Y) {
        var W = d(g(g({}, e), {}, {
          targetSlide: C
        }));
        C > n.currentSlide && W === "left" ? C = C - F : C < n.currentSlide && W === "right" && (C = C + F);
      }
    } else n.message === "index" && (C = Number(n.index));
    return C;
  }, x.keyHandler = function(e, n, v) {
    return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n ? "" : e.keyCode === 37 ? v ? "next" : "previous" : e.keyCode === 39 ? v ? "previous" : "next" : "";
  }, x.swipeStart = function(e, n, v) {
    return e.target.tagName === "IMG" && D(e), !n || !v && e.type.indexOf("mouse") !== -1 ? "" : {
      dragging: !0,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY
      }
    };
  }, x.swipeMove = function(e, n) {
    var v = n.scrolling, k = n.animating, w = n.vertical, T = n.swipeToSlide, C = n.verticalSwiping, j = n.rtl, q = n.currentSlide, F = n.edgeFriction, $ = n.edgeDragged, J = n.onEdge, V = n.swiped, Y = n.swiping, W = n.slideCount, K = n.slidesToScroll, re = n.infinite, I = n.touchObject, te = n.swipeEvent, ne = n.listHeight, ie = n.listWidth;
    if (!v) {
      if (k) return D(e);
      w && T && C && D(e);
      var oe, se = {}, be = r(n);
      I.curX = e.touches ? e.touches[0].pageX : e.clientX, I.curY = e.touches ? e.touches[0].pageY : e.clientY, I.swipeLength = Math.round(Math.sqrt(Math.pow(I.curX - I.startX, 2)));
      var Ie = Math.round(Math.sqrt(Math.pow(I.curY - I.startY, 2)));
      if (!C && !Y && Ie > 10)
        return {
          scrolling: !0
        };
      C && (I.swipeLength = Ie);
      var pe = (j ? -1 : 1) * (I.curX > I.startX ? 1 : -1);
      C && (pe = I.curY > I.startY ? 1 : -1);
      var ct = Math.ceil(W / K), ae = Z(n.touchObject, C), ve = I.swipeLength;
      return re || (q === 0 && (ae === "right" || ae === "down") || q + 1 >= ct && (ae === "left" || ae === "up") || !G(n) && (ae === "left" || ae === "up")) && (ve = I.swipeLength * F, $ === !1 && J && (J(ae), se.edgeDragged = !0)), !V && te && (te(ae), se.swiped = !0), w ? oe = be + ve * (ne / ie) * pe : j ? oe = be - ve * pe : oe = be + ve * pe, C && (oe = be + ve * pe), se = g(g({}, se), {}, {
        touchObject: I,
        swipeLeft: oe,
        trackStyle: m(g(g({}, n), {}, {
          left: oe
        }))
      }), Math.abs(I.curX - I.startX) < Math.abs(I.curY - I.startY) * 0.8 || I.swipeLength > 10 && (se.swiping = !0, D(e)), se;
    }
  }, x.swipeEnd = function(e, n) {
    var v = n.dragging, k = n.swipe, w = n.touchObject, T = n.listWidth, C = n.touchThreshold, j = n.verticalSwiping, q = n.listHeight, F = n.swipeToSlide, $ = n.scrolling, J = n.onSwipe, V = n.targetSlide, Y = n.currentSlide, W = n.infinite;
    if (!v)
      return k && D(e), {};
    var K = j ? q / C : T / C, re = Z(w, j), I = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {}
    };
    if ($ || !w.swipeLength)
      return I;
    if (w.swipeLength > K) {
      D(e), J && J(re);
      var te, ne, ie = W ? Y : V;
      switch (re) {
        case "left":
        case "up":
          ne = ie + s(n), te = F ? a(n, ne) : ne, I.currentDirection = 0;
          break;
        case "right":
        case "down":
          ne = ie - s(n), te = F ? a(n, ne) : ne, I.currentDirection = 1;
          break;
        default:
          te = ie;
      }
      I.triggerSlideHandler = te;
    } else {
      var oe = r(n);
      I.trackStyle = o(g(g({}, n), {}, {
        left: oe
      }));
    }
    return I;
  };
  var A = x.getNavigableIndexes = function(e) {
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, v = e.infinite ? e.slidesToShow * -1 : 0, k = e.infinite ? e.slidesToShow * -1 : 0, w = []; v < n; )
      w.push(v), v = k + e.slidesToScroll, k += Math.min(e.slidesToScroll, e.slidesToShow);
    return w;
  }, a = x.checkNavigable = function(e, n) {
    var v = A(e), k = 0;
    if (n > v[v.length - 1])
      n = v[v.length - 1];
    else
      for (var w in v) {
        if (n < v[w]) {
          n = k;
          break;
        }
        k = v[w];
      }
    return n;
  }, s = x.getSlideCount = function(e) {
    var n = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      var v, k = e.listRef, w = k.querySelectorAll && k.querySelectorAll(".slick-slide") || [];
      if (Array.from(w).every(function(j) {
        if (e.vertical) {
          if (j.offsetTop + N(j) / 2 > e.swipeLeft * -1)
            return v = j, !1;
        } else if (j.offsetLeft - n + X(j) / 2 > e.swipeLeft * -1)
          return v = j, !1;
        return !0;
      }), !v)
        return 0;
      var T = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide, C = Math.abs(v.dataset.index - T) || 1;
      return C;
    } else
      return e.slidesToScroll;
  }, u = x.checkSpecKeys = function(e, n) {
    return n.reduce(function(v, k) {
      return v && e.hasOwnProperty(k);
    }, !0) ? null : console.error("Keys Missing:", e);
  }, m = x.getTrackCSS = function(e) {
    u(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
    var n, v;
    if (!e.vertical)
      n = c(e) * e.slideWidth;
    else {
      var k = e.unslick ? e.slideCount : e.slideCount + 2 * e.slidesToShow;
      v = k * e.slideHeight;
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
    }), n && (w.width = n), v && (w.height = v), window && !window.addEventListener && window.attachEvent && (e.vertical ? w.marginTop = e.left + "px" : w.marginLeft = e.left + "px"), w;
  }, o = x.getTrackAnimateCSS = function(e) {
    u(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var n = m(e);
    return e.useTransform ? (n.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, n.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? n.transition = "top " + e.speed + "ms " + e.cssEase : n.transition = "left " + e.speed + "ms " + e.cssEase, n;
  }, r = x.getTrackLeft = function(e) {
    if (e.unslick)
      return 0;
    u(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var n = e.slideIndex, v = e.trackRef, k = e.infinite, w = e.centerMode, T = e.slideCount, C = e.slidesToShow, j = e.slidesToScroll, q = e.slideWidth, F = e.listWidth, $ = e.variableWidth, J = e.slideHeight, V = e.fade, Y = e.vertical, W = 0, K, re, I = 0;
    if (V || e.slideCount === 1)
      return 0;
    var te = 0;
    if (k ? (te = -p(e), T % j !== 0 && n + j > T && (te = -(n > T ? C - (n - T) : T % j)), w && (te += parseInt(C / 2))) : (T % j !== 0 && n + j > T && (te = C - T % j), w && (te = parseInt(C / 2))), W = te * q, I = te * J, Y ? K = n * J * -1 + I : K = n * q * -1 + W, $ === !0) {
      var ne, ie = v && v.node;
      if (ne = n + p(e), re = ie && ie.childNodes[ne], K = re ? re.offsetLeft * -1 : 0, w === !0) {
        ne = k ? n + p(e) : n, re = ie && ie.children[ne], K = 0;
        for (var oe = 0; oe < ne; oe++)
          K -= ie && ie.children[oe] && ie.children[oe].offsetWidth;
        K -= parseInt(e.centerPadding), K += re && (F - re.offsetWidth) / 2;
      }
    }
    return K;
  }, p = x.getPreClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, b = x.getPostClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, c = x.getTotalSlides = function(e) {
    return e.slideCount === 1 ? 1 : p(e) + e.slideCount + b(e);
  }, d = x.siblingDirection = function(e) {
    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + O(e) ? "left" : "right" : e.targetSlide < e.currentSlide - _(e) ? "right" : "left";
  }, O = x.slidesOnRight = function(e) {
    var n = e.slidesToShow, v = e.centerMode, k = e.rtl, w = e.centerPadding;
    if (v) {
      var T = (n - 1) / 2 + 1;
      return parseInt(w) > 0 && (T += 1), k && n % 2 === 0 && (T += 1), T;
    }
    return k ? 0 : n - 1;
  }, _ = x.slidesOnLeft = function(e) {
    var n = e.slidesToShow, v = e.centerMode, k = e.rtl, w = e.centerPadding;
    if (v) {
      var T = (n - 1) / 2 + 1;
      return parseInt(w) > 0 && (T += 1), !k && n % 2 === 0 && (T += 1), T;
    }
    return k ? n - 1 : 0;
  };
  x.canUseDOM = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  };
  var t = x.validSettings = Object.keys(f.default);
  function B(l) {
    return t.reduce(function(e, n) {
      return l.hasOwnProperty(n) && (e[n] = l[n]), e;
    }, {});
  }
  return x;
}
var ye = {}, Ge;
function bt() {
  if (Ge) return ye;
  Ge = 1, Object.defineProperty(ye, "__esModule", {
    value: !0
  }), ye.Track = void 0;
  var i = S(ce), f = S(ke()), h = me();
  function S(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function y(o) {
    "@babel/helpers - typeof";
    return y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, y(o);
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(o) {
      for (var r = 1; r < arguments.length; r++) {
        var p = arguments[r];
        for (var b in p)
          ({}).hasOwnProperty.call(p, b) && (o[b] = p[b]);
      }
      return o;
    }, g.apply(null, arguments);
  }
  function L(o, r) {
    if (!(o instanceof r)) throw new TypeError("Cannot call a class as a function");
  }
  function M(o, r) {
    for (var p = 0; p < r.length; p++) {
      var b = r[p];
      b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(o, G(b.key), b);
    }
  }
  function z(o, r, p) {
    return r && M(o.prototype, r), Object.defineProperty(o, "prototype", { writable: !1 }), o;
  }
  function R(o, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
    o.prototype = Object.create(r && r.prototype, { constructor: { value: o, writable: !0, configurable: !0 } }), Object.defineProperty(o, "prototype", { writable: !1 }), r && D(o, r);
  }
  function D(o, r) {
    return D = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p, b) {
      return p.__proto__ = b, p;
    }, D(o, r);
  }
  function H(o) {
    var r = U();
    return function() {
      var p, b = P(o);
      if (r) {
        var c = P(this).constructor;
        p = Reflect.construct(b, arguments, c);
      } else p = b.apply(this, arguments);
      return ee(this, p);
    };
  }
  function ee(o, r) {
    if (r && (y(r) == "object" || typeof r == "function")) return r;
    if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Q(o);
  }
  function Q(o) {
    if (o === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o;
  }
  function U() {
    try {
      var o = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (U = function() {
      return !!o;
    })();
  }
  function P(o) {
    return P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, P(o);
  }
  function X(o, r) {
    var p = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
      var b = Object.getOwnPropertySymbols(o);
      r && (b = b.filter(function(c) {
        return Object.getOwnPropertyDescriptor(o, c).enumerable;
      })), p.push.apply(p, b);
    }
    return p;
  }
  function N(o) {
    for (var r = 1; r < arguments.length; r++) {
      var p = arguments[r] != null ? arguments[r] : {};
      r % 2 ? X(Object(p), !0).forEach(function(b) {
        Z(o, b, p[b]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(p)) : X(Object(p)).forEach(function(b) {
        Object.defineProperty(o, b, Object.getOwnPropertyDescriptor(p, b));
      });
    }
    return o;
  }
  function Z(o, r, p) {
    return (r = G(r)) in o ? Object.defineProperty(o, r, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = p, o;
  }
  function G(o) {
    var r = A(o, "string");
    return y(r) == "symbol" ? r : r + "";
  }
  function A(o, r) {
    if (y(o) != "object" || !o) return o;
    var p = o[Symbol.toPrimitive];
    if (p !== void 0) {
      var b = p.call(o, r);
      if (y(b) != "object") return b;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(o);
  }
  var a = function(r) {
    var p, b, c, d, O;
    r.rtl ? O = r.slideCount - 1 - r.index : O = r.index, c = O < 0 || O >= r.slideCount, r.centerMode ? (d = Math.floor(r.slidesToShow / 2), b = (O - r.currentSlide) % r.slideCount === 0, O > r.currentSlide - d - 1 && O <= r.currentSlide + d && (p = !0)) : p = r.currentSlide <= O && O < r.currentSlide + r.slidesToShow;
    var _;
    r.targetSlide < 0 ? _ = r.targetSlide + r.slideCount : r.targetSlide >= r.slideCount ? _ = r.targetSlide - r.slideCount : _ = r.targetSlide;
    var t = O === _;
    return {
      "slick-slide": !0,
      "slick-active": p,
      "slick-center": b,
      "slick-cloned": c,
      "slick-current": t
      // dubious in case of RTL
    };
  }, s = function(r) {
    var p = {};
    return (r.variableWidth === void 0 || r.variableWidth === !1) && (p.width = r.slideWidth), r.fade && (p.position = "relative", r.vertical ? p.top = -r.index * parseInt(r.slideHeight) : p.left = -r.index * parseInt(r.slideWidth), p.opacity = r.currentSlide === r.index ? 1 : 0, p.zIndex = r.currentSlide === r.index ? 999 : 998, r.useCSS && (p.transition = "opacity " + r.speed + "ms " + r.cssEase + ", visibility " + r.speed + "ms " + r.cssEase)), p;
  }, u = function(r, p) {
    return r.key || p;
  }, m = function(r) {
    var p, b = [], c = [], d = [], O = i.default.Children.count(r.children), _ = (0, h.lazyStartIndex)(r), t = (0, h.lazyEndIndex)(r);
    return i.default.Children.forEach(r.children, function(B, l) {
      var e, n = {
        message: "children",
        index: l,
        slidesToScroll: r.slidesToScroll,
        currentSlide: r.currentSlide
      };
      !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(l) >= 0 ? e = B : e = /* @__PURE__ */ i.default.createElement("div", null);
      var v = s(N(N({}, r), {}, {
        index: l
      })), k = e.props.className || "", w = a(N(N({}, r), {}, {
        index: l
      }));
      if (b.push(/* @__PURE__ */ i.default.cloneElement(e, {
        key: "original" + u(e, l),
        "data-index": l,
        className: (0, f.default)(w, k),
        tabIndex: "-1",
        "aria-hidden": !w["slick-active"],
        style: N(N({
          outline: "none"
        }, e.props.style || {}), v),
        onClick: function(j) {
          e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
        }
      })), r.infinite && O > 1 && r.fade === !1 && !r.unslick) {
        var T = O - l;
        T <= (0, h.getPreClones)(r) && (p = -T, p >= _ && (e = B), w = a(N(N({}, r), {}, {
          index: p
        })), c.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "precloned" + u(e, p),
          "data-index": p,
          tabIndex: "-1",
          className: (0, f.default)(w, k),
          "aria-hidden": !w["slick-active"],
          style: N(N({}, e.props.style || {}), v),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        }))), l < (0, h.getPostClones)(r) && (p = O + l, p < t && (e = B), w = a(N(N({}, r), {}, {
          index: p
        })), d.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "postcloned" + u(e, p),
          "data-index": p,
          tabIndex: "-1",
          className: (0, f.default)(w, k),
          "aria-hidden": !w["slick-active"],
          style: N(N({}, e.props.style || {}), v),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        })));
      }
    }), r.rtl ? c.concat(b, d).reverse() : c.concat(b, d);
  };
  return ye.Track = /* @__PURE__ */ (function(o) {
    R(p, o);
    var r = H(p);
    function p() {
      var b;
      L(this, p);
      for (var c = arguments.length, d = new Array(c), O = 0; O < c; O++)
        d[O] = arguments[O];
      return b = r.call.apply(r, [this].concat(d)), Z(Q(b), "node", null), Z(Q(b), "handleRef", function(_) {
        b.node = _;
      }), b;
    }
    return z(p, [{
      key: "render",
      value: function() {
        var c = m(this.props), d = this.props, O = d.onMouseEnter, _ = d.onMouseOver, t = d.onMouseLeave, B = {
          onMouseEnter: O,
          onMouseOver: _,
          onMouseLeave: t
        };
        return /* @__PURE__ */ i.default.createElement("div", g({
          ref: this.handleRef,
          className: "slick-track",
          style: this.props.trackStyle
        }, B), c);
      }
    }]), p;
  })(i.default.PureComponent), ye;
}
var ge = {}, Ue;
function St() {
  if (Ue) return ge;
  Ue = 1;
  function i(a) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, i(a);
  }
  Object.defineProperty(ge, "__esModule", {
    value: !0
  }), ge.Dots = void 0;
  var f = y(ce), h = y(ke()), S = me();
  function y(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function g(a, s) {
    var u = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var m = Object.getOwnPropertySymbols(a);
      s && (m = m.filter(function(o) {
        return Object.getOwnPropertyDescriptor(a, o).enumerable;
      })), u.push.apply(u, m);
    }
    return u;
  }
  function L(a) {
    for (var s = 1; s < arguments.length; s++) {
      var u = arguments[s] != null ? arguments[s] : {};
      s % 2 ? g(Object(u), !0).forEach(function(m) {
        M(a, m, u[m]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u)) : g(Object(u)).forEach(function(m) {
        Object.defineProperty(a, m, Object.getOwnPropertyDescriptor(u, m));
      });
    }
    return a;
  }
  function M(a, s, u) {
    return (s = H(s)) in a ? Object.defineProperty(a, s, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : a[s] = u, a;
  }
  function z(a, s) {
    if (!(a instanceof s)) throw new TypeError("Cannot call a class as a function");
  }
  function R(a, s) {
    for (var u = 0; u < s.length; u++) {
      var m = s[u];
      m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(a, H(m.key), m);
    }
  }
  function D(a, s, u) {
    return s && R(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function H(a) {
    var s = ee(a, "string");
    return i(s) == "symbol" ? s : s + "";
  }
  function ee(a, s) {
    if (i(a) != "object" || !a) return a;
    var u = a[Symbol.toPrimitive];
    if (u !== void 0) {
      var m = u.call(a, s);
      if (i(m) != "object") return m;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  function Q(a, s) {
    if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(s && s.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), s && U(a, s);
  }
  function U(a, s) {
    return U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, m) {
      return u.__proto__ = m, u;
    }, U(a, s);
  }
  function P(a) {
    var s = Z();
    return function() {
      var u, m = G(a);
      if (s) {
        var o = G(this).constructor;
        u = Reflect.construct(m, arguments, o);
      } else u = m.apply(this, arguments);
      return X(this, u);
    };
  }
  function X(a, s) {
    if (s && (i(s) == "object" || typeof s == "function")) return s;
    if (s !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return N(a);
  }
  function N(a) {
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
  function G(a) {
    return G = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, G(a);
  }
  var A = function(s) {
    var u;
    return s.infinite ? u = Math.ceil(s.slideCount / s.slidesToScroll) : u = Math.ceil((s.slideCount - s.slidesToShow) / s.slidesToScroll) + 1, u;
  };
  return ge.Dots = /* @__PURE__ */ (function(a) {
    Q(u, a);
    var s = P(u);
    function u() {
      return z(this, u), s.apply(this, arguments);
    }
    return D(u, [{
      key: "clickHandler",
      value: function(o, r) {
        r.preventDefault(), this.props.clickHandler(o);
      }
    }, {
      key: "render",
      value: function() {
        for (var o = this.props, r = o.onMouseEnter, p = o.onMouseOver, b = o.onMouseLeave, c = o.infinite, d = o.slidesToScroll, O = o.slidesToShow, _ = o.slideCount, t = o.currentSlide, B = A({
          slideCount: _,
          slidesToScroll: d,
          slidesToShow: O,
          infinite: c
        }), l = {
          onMouseEnter: r,
          onMouseOver: p,
          onMouseLeave: b
        }, e = [], n = 0; n < B; n++) {
          var v = (n + 1) * d - 1, k = c ? v : (0, S.clamp)(v, 0, _ - 1), w = k - (d - 1), T = c ? w : (0, S.clamp)(w, 0, _ - 1), C = (0, h.default)({
            "slick-active": c ? t >= T && t <= k : t === T
          }), j = {
            message: "dots",
            index: n,
            slidesToScroll: d,
            currentSlide: t
          }, q = this.clickHandler.bind(this, j);
          e = e.concat(/* @__PURE__ */ f.default.createElement("li", {
            key: n,
            className: C
          }, /* @__PURE__ */ f.default.cloneElement(this.props.customPaging(n), {
            onClick: q
          })));
        }
        return /* @__PURE__ */ f.default.cloneElement(this.props.appendDots(e), L({
          className: this.props.dotsClass
        }, l));
      }
    }]), u;
  })(f.default.PureComponent), ge;
}
var ue = {}, Xe;
function wt() {
  if (Xe) return ue;
  Xe = 1;
  function i(a) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, i(a);
  }
  Object.defineProperty(ue, "__esModule", {
    value: !0
  }), ue.PrevArrow = ue.NextArrow = void 0;
  var f = y(ce), h = y(ke()), S = me();
  function y(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(a) {
      for (var s = 1; s < arguments.length; s++) {
        var u = arguments[s];
        for (var m in u)
          ({}).hasOwnProperty.call(u, m) && (a[m] = u[m]);
      }
      return a;
    }, g.apply(null, arguments);
  }
  function L(a, s) {
    var u = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var m = Object.getOwnPropertySymbols(a);
      s && (m = m.filter(function(o) {
        return Object.getOwnPropertyDescriptor(a, o).enumerable;
      })), u.push.apply(u, m);
    }
    return u;
  }
  function M(a) {
    for (var s = 1; s < arguments.length; s++) {
      var u = arguments[s] != null ? arguments[s] : {};
      s % 2 ? L(Object(u), !0).forEach(function(m) {
        z(a, m, u[m]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u)) : L(Object(u)).forEach(function(m) {
        Object.defineProperty(a, m, Object.getOwnPropertyDescriptor(u, m));
      });
    }
    return a;
  }
  function z(a, s, u) {
    return (s = ee(s)) in a ? Object.defineProperty(a, s, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : a[s] = u, a;
  }
  function R(a, s) {
    if (!(a instanceof s)) throw new TypeError("Cannot call a class as a function");
  }
  function D(a, s) {
    for (var u = 0; u < s.length; u++) {
      var m = s[u];
      m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(a, ee(m.key), m);
    }
  }
  function H(a, s, u) {
    return s && D(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function ee(a) {
    var s = Q(a, "string");
    return i(s) == "symbol" ? s : s + "";
  }
  function Q(a, s) {
    if (i(a) != "object" || !a) return a;
    var u = a[Symbol.toPrimitive];
    if (u !== void 0) {
      var m = u.call(a, s);
      if (i(m) != "object") return m;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  function U(a, s) {
    if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(s && s.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), s && P(a, s);
  }
  function P(a, s) {
    return P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, m) {
      return u.__proto__ = m, u;
    }, P(a, s);
  }
  function X(a) {
    var s = G();
    return function() {
      var u, m = A(a);
      if (s) {
        var o = A(this).constructor;
        u = Reflect.construct(m, arguments, o);
      } else u = m.apply(this, arguments);
      return N(this, u);
    };
  }
  function N(a, s) {
    if (s && (i(s) == "object" || typeof s == "function")) return s;
    if (s !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Z(a);
  }
  function Z(a) {
    if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a;
  }
  function G() {
    try {
      var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (G = function() {
      return !!a;
    })();
  }
  function A(a) {
    return A = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, A(a);
  }
  return ue.PrevArrow = /* @__PURE__ */ (function(a) {
    U(u, a);
    var s = X(u);
    function u() {
      return R(this, u), s.apply(this, arguments);
    }
    return H(u, [{
      key: "clickHandler",
      value: function(o, r) {
        r && r.preventDefault(), this.props.clickHandler(o, r);
      }
    }, {
      key: "render",
      value: function() {
        var o = {
          "slick-arrow": !0,
          "slick-prev": !0
        }, r = this.clickHandler.bind(this, {
          message: "previous"
        });
        !this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow) && (o["slick-disabled"] = !0, r = null);
        var p = {
          key: "0",
          "data-role": "none",
          className: (0, h.default)(o),
          style: {
            display: "block"
          },
          onClick: r
        }, b = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, c;
        return this.props.prevArrow ? c = /* @__PURE__ */ f.default.cloneElement(this.props.prevArrow, M(M({}, p), b)) : c = /* @__PURE__ */ f.default.createElement("button", g({
          key: "0",
          type: "button"
        }, p), " ", "Previous"), c;
      }
    }]), u;
  })(f.default.PureComponent), ue.NextArrow = /* @__PURE__ */ (function(a) {
    U(u, a);
    var s = X(u);
    function u() {
      return R(this, u), s.apply(this, arguments);
    }
    return H(u, [{
      key: "clickHandler",
      value: function(o, r) {
        r && r.preventDefault(), this.props.clickHandler(o, r);
      }
    }, {
      key: "render",
      value: function() {
        var o = {
          "slick-arrow": !0,
          "slick-next": !0
        }, r = this.clickHandler.bind(this, {
          message: "next"
        });
        (0, S.canGoNext)(this.props) || (o["slick-disabled"] = !0, r = null);
        var p = {
          key: "1",
          "data-role": "none",
          className: (0, h.default)(o),
          style: {
            display: "block"
          },
          onClick: r
        }, b = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, c;
        return this.props.nextArrow ? c = /* @__PURE__ */ f.default.cloneElement(this.props.nextArrow, M(M({}, p), b)) : c = /* @__PURE__ */ f.default.createElement("button", g({
          key: "1",
          type: "button"
        }, p), " ", "Next"), c;
      }
    }]), u;
  })(f.default.PureComponent), ue;
}
var it = (function() {
  if (typeof Map < "u")
    return Map;
  function i(f, h) {
    var S = -1;
    return f.some(function(y, g) {
      return y[0] === h ? (S = g, !0) : !1;
    }), S;
  }
  return (
    /** @class */
    (function() {
      function f() {
        this.__entries__ = [];
      }
      return Object.defineProperty(f.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), f.prototype.get = function(h) {
        var S = i(this.__entries__, h), y = this.__entries__[S];
        return y && y[1];
      }, f.prototype.set = function(h, S) {
        var y = i(this.__entries__, h);
        ~y ? this.__entries__[y][1] = S : this.__entries__.push([h, S]);
      }, f.prototype.delete = function(h) {
        var S = this.__entries__, y = i(S, h);
        ~y && S.splice(y, 1);
      }, f.prototype.has = function(h) {
        return !!~i(this.__entries__, h);
      }, f.prototype.clear = function() {
        this.__entries__.splice(0);
      }, f.prototype.forEach = function(h, S) {
        S === void 0 && (S = null);
        for (var y = 0, g = this.__entries__; y < g.length; y++) {
          var L = g[y];
          h.call(S, L[1], L[0]);
        }
      }, f;
    })()
  );
})(), ze = typeof window < "u" && typeof document < "u" && window.document === document, Oe = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), Ot = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Oe) : function(i) {
    return setTimeout(function() {
      return i(Date.now());
    }, 1e3 / 60);
  };
})(), _t = 2;
function kt(i, f) {
  var h = !1, S = !1, y = 0;
  function g() {
    h && (h = !1, i()), S && M();
  }
  function L() {
    Ot(g);
  }
  function M() {
    var z = Date.now();
    if (h) {
      if (z - y < _t)
        return;
      S = !0;
    } else
      h = !0, S = !1, setTimeout(L, f);
    y = z;
  }
  return M;
}
var Pt = 20, Ct = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Tt = typeof MutationObserver < "u", jt = (
  /** @class */
  (function() {
    function i() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = kt(this.refresh.bind(this), Pt);
    }
    return i.prototype.addObserver = function(f) {
      ~this.observers_.indexOf(f) || this.observers_.push(f), this.connected_ || this.connect_();
    }, i.prototype.removeObserver = function(f) {
      var h = this.observers_, S = h.indexOf(f);
      ~S && h.splice(S, 1), !h.length && this.connected_ && this.disconnect_();
    }, i.prototype.refresh = function() {
      var f = this.updateObservers_();
      f && this.refresh();
    }, i.prototype.updateObservers_ = function() {
      var f = this.observers_.filter(function(h) {
        return h.gatherActive(), h.hasActive();
      });
      return f.forEach(function(h) {
        return h.broadcastActive();
      }), f.length > 0;
    }, i.prototype.connect_ = function() {
      !ze || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Tt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, i.prototype.disconnect_ = function() {
      !ze || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, i.prototype.onTransitionEnd_ = function(f) {
      var h = f.propertyName, S = h === void 0 ? "" : h, y = Ct.some(function(g) {
        return !!~S.indexOf(g);
      });
      y && this.refresh();
    }, i.getInstance = function() {
      return this.instance_ || (this.instance_ = new i()), this.instance_;
    }, i.instance_ = null, i;
  })()
), ot = (function(i, f) {
  for (var h = 0, S = Object.keys(f); h < S.length; h++) {
    var y = S[h];
    Object.defineProperty(i, y, {
      value: f[y],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return i;
}), de = (function(i) {
  var f = i && i.ownerDocument && i.ownerDocument.defaultView;
  return f || Oe;
}), at = Pe(0, 0, 0, 0);
function _e(i) {
  return parseFloat(i) || 0;
}
function Ke(i) {
  for (var f = [], h = 1; h < arguments.length; h++)
    f[h - 1] = arguments[h];
  return f.reduce(function(S, y) {
    var g = i["border-" + y + "-width"];
    return S + _e(g);
  }, 0);
}
function xt(i) {
  for (var f = ["top", "right", "bottom", "left"], h = {}, S = 0, y = f; S < y.length; S++) {
    var g = y[S], L = i["padding-" + g];
    h[g] = _e(L);
  }
  return h;
}
function Et(i) {
  var f = i.getBBox();
  return Pe(0, 0, f.width, f.height);
}
function Lt(i) {
  var f = i.clientWidth, h = i.clientHeight;
  if (!f && !h)
    return at;
  var S = de(i).getComputedStyle(i), y = xt(S), g = y.left + y.right, L = y.top + y.bottom, M = _e(S.width), z = _e(S.height);
  if (S.boxSizing === "border-box" && (Math.round(M + g) !== f && (M -= Ke(S, "left", "right") + g), Math.round(z + L) !== h && (z -= Ke(S, "top", "bottom") + L)), !Rt(i)) {
    var R = Math.round(M + g) - f, D = Math.round(z + L) - h;
    Math.abs(R) !== 1 && (M -= R), Math.abs(D) !== 1 && (z -= D);
  }
  return Pe(y.left, y.top, M, z);
}
var Mt = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(i) {
    return i instanceof de(i).SVGGraphicsElement;
  } : function(i) {
    return i instanceof de(i).SVGElement && typeof i.getBBox == "function";
  };
})();
function Rt(i) {
  return i === de(i).document.documentElement;
}
function Nt(i) {
  return ze ? Mt(i) ? Et(i) : Lt(i) : at;
}
function zt(i) {
  var f = i.x, h = i.y, S = i.width, y = i.height, g = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, L = Object.create(g.prototype);
  return ot(L, {
    x: f,
    y: h,
    width: S,
    height: y,
    top: h,
    right: f + S,
    bottom: y + h,
    left: f
  }), L;
}
function Pe(i, f, h, S) {
  return { x: i, y: f, width: h, height: S };
}
var Dt = (
  /** @class */
  (function() {
    function i(f) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Pe(0, 0, 0, 0), this.target = f;
    }
    return i.prototype.isActive = function() {
      var f = Nt(this.target);
      return this.contentRect_ = f, f.width !== this.broadcastWidth || f.height !== this.broadcastHeight;
    }, i.prototype.broadcastRect = function() {
      var f = this.contentRect_;
      return this.broadcastWidth = f.width, this.broadcastHeight = f.height, f;
    }, i;
  })()
), At = (
  /** @class */
  /* @__PURE__ */ (function() {
    function i(f, h) {
      var S = zt(h);
      ot(this, { target: f, contentRect: S });
    }
    return i;
  })()
), It = (
  /** @class */
  (function() {
    function i(f, h, S) {
      if (this.activeObservations_ = [], this.observations_ = new it(), typeof f != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = f, this.controller_ = h, this.callbackCtx_ = S;
    }
    return i.prototype.observe = function(f) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(f instanceof de(f).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var h = this.observations_;
        h.has(f) || (h.set(f, new Dt(f)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, i.prototype.unobserve = function(f) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(f instanceof de(f).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var h = this.observations_;
        h.has(f) && (h.delete(f), h.size || this.controller_.removeObserver(this));
      }
    }, i.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, i.prototype.gatherActive = function() {
      var f = this;
      this.clearActive(), this.observations_.forEach(function(h) {
        h.isActive() && f.activeObservations_.push(h);
      });
    }, i.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var f = this.callbackCtx_, h = this.activeObservations_.map(function(S) {
          return new At(S.target, S.broadcastRect());
        });
        this.callback_.call(f, h, f), this.clearActive();
      }
    }, i.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, i.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, i;
  })()
), lt = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new it(), st = (
  /** @class */
  /* @__PURE__ */ (function() {
    function i(f) {
      if (!(this instanceof i))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var h = jt.getInstance(), S = new It(f, h, this);
      lt.set(this, S);
    }
    return i;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(i) {
  st.prototype[i] = function() {
    var f;
    return (f = lt.get(this))[i].apply(f, arguments);
  };
});
var Ht = (function() {
  return typeof Oe.ResizeObserver < "u" ? Oe.ResizeObserver : st;
})();
const Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ht
}, Symbol.toStringTag, { value: "Module" })), qt = /* @__PURE__ */ yt(Wt);
var Ve;
function Ft() {
  if (Ve) return he;
  Ve = 1, Object.defineProperty(he, "__esModule", {
    value: !0
  }), he.InnerSlider = void 0;
  var i = R(ce), f = R(gt()), h = R(mt()), S = R(ke()), y = me(), g = bt(), L = St(), M = wt(), z = R(qt);
  function R(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function D(c) {
    "@babel/helpers - typeof";
    return D = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
      return typeof d;
    } : function(d) {
      return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
    }, D(c);
  }
  function H() {
    return H = Object.assign ? Object.assign.bind() : function(c) {
      for (var d = 1; d < arguments.length; d++) {
        var O = arguments[d];
        for (var _ in O)
          ({}).hasOwnProperty.call(O, _) && (c[_] = O[_]);
      }
      return c;
    }, H.apply(null, arguments);
  }
  function ee(c, d) {
    if (c == null) return {};
    var O, _, t = Q(c, d);
    if (Object.getOwnPropertySymbols) {
      var B = Object.getOwnPropertySymbols(c);
      for (_ = 0; _ < B.length; _++)
        O = B[_], d.includes(O) || {}.propertyIsEnumerable.call(c, O) && (t[O] = c[O]);
    }
    return t;
  }
  function Q(c, d) {
    if (c == null) return {};
    var O = {};
    for (var _ in c)
      if ({}.hasOwnProperty.call(c, _)) {
        if (d.includes(_)) continue;
        O[_] = c[_];
      }
    return O;
  }
  function U(c, d) {
    var O = Object.keys(c);
    if (Object.getOwnPropertySymbols) {
      var _ = Object.getOwnPropertySymbols(c);
      d && (_ = _.filter(function(t) {
        return Object.getOwnPropertyDescriptor(c, t).enumerable;
      })), O.push.apply(O, _);
    }
    return O;
  }
  function P(c) {
    for (var d = 1; d < arguments.length; d++) {
      var O = arguments[d] != null ? arguments[d] : {};
      d % 2 ? U(Object(O), !0).forEach(function(_) {
        r(c, _, O[_]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(O)) : U(Object(O)).forEach(function(_) {
        Object.defineProperty(c, _, Object.getOwnPropertyDescriptor(O, _));
      });
    }
    return c;
  }
  function X(c, d) {
    if (!(c instanceof d)) throw new TypeError("Cannot call a class as a function");
  }
  function N(c, d) {
    for (var O = 0; O < d.length; O++) {
      var _ = d[O];
      _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(c, p(_.key), _);
    }
  }
  function Z(c, d, O) {
    return d && N(c.prototype, d), Object.defineProperty(c, "prototype", { writable: !1 }), c;
  }
  function G(c, d) {
    if (typeof d != "function" && d !== null) throw new TypeError("Super expression must either be null or a function");
    c.prototype = Object.create(d && d.prototype, { constructor: { value: c, writable: !0, configurable: !0 } }), Object.defineProperty(c, "prototype", { writable: !1 }), d && A(c, d);
  }
  function A(c, d) {
    return A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(O, _) {
      return O.__proto__ = _, O;
    }, A(c, d);
  }
  function a(c) {
    var d = m();
    return function() {
      var O, _ = o(c);
      if (d) {
        var t = o(this).constructor;
        O = Reflect.construct(_, arguments, t);
      } else O = _.apply(this, arguments);
      return s(this, O);
    };
  }
  function s(c, d) {
    if (d && (D(d) == "object" || typeof d == "function")) return d;
    if (d !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return u(c);
  }
  function u(c) {
    if (c === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return c;
  }
  function m() {
    try {
      var c = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (m = function() {
      return !!c;
    })();
  }
  function o(c) {
    return o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(d) {
      return d.__proto__ || Object.getPrototypeOf(d);
    }, o(c);
  }
  function r(c, d, O) {
    return (d = p(d)) in c ? Object.defineProperty(c, d, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : c[d] = O, c;
  }
  function p(c) {
    var d = b(c, "string");
    return D(d) == "symbol" ? d : d + "";
  }
  function b(c, d) {
    if (D(c) != "object" || !c) return c;
    var O = c[Symbol.toPrimitive];
    if (O !== void 0) {
      var _ = O.call(c, d);
      if (D(_) != "object") return _;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (d === "string" ? String : Number)(c);
  }
  return he.InnerSlider = /* @__PURE__ */ (function(c) {
    G(O, c);
    var d = a(O);
    function O(_) {
      var t;
      X(this, O), t = d.call(this, _), r(u(t), "listRefHandler", function(l) {
        return t.list = l;
      }), r(u(t), "trackRefHandler", function(l) {
        return t.track = l;
      }), r(u(t), "adaptHeight", function() {
        if (t.props.adaptiveHeight && t.list) {
          var l = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
          t.list.style.height = (0, y.getHeight)(l) + "px";
        }
      }), r(u(t), "componentDidMount", function() {
        if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
          var l = (0, y.getOnDemandLazySlides)(P(P({}, t.props), t.state));
          l.length > 0 && (t.setState(function(n) {
            return {
              lazyLoadedList: n.lazyLoadedList.concat(l)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(l));
        }
        var e = P({
          listRef: t.list,
          trackRef: t.track
        }, t.props);
        t.updateState(e, !0, function() {
          t.adaptHeight(), t.props.autoplay && t.autoPlay("update");
        }), t.props.lazyLoad === "progressive" && (t.lazyLoadTimer = setInterval(t.progressiveLazyLoad, 1e3)), t.ro = new z.default(function() {
          t.state.animating ? (t.onWindowResized(!1), t.callbackTimers.push(setTimeout(function() {
            return t.onWindowResized();
          }, t.props.speed))) : t.onWindowResized();
        }), t.ro.observe(t.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(n) {
          n.onfocus = t.props.pauseOnFocus ? t.onSlideFocus : null, n.onblur = t.props.pauseOnFocus ? t.onSlideBlur : null;
        }), window.addEventListener ? window.addEventListener("resize", t.onWindowResized) : window.attachEvent("onresize", t.onWindowResized);
      }), r(u(t), "componentWillUnmount", function() {
        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach(function(l) {
          return clearTimeout(l);
        }), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
      }), r(u(t), "componentDidUpdate", function(l) {
        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
          var e = (0, y.getOnDemandLazySlides)(P(P({}, t.props), t.state));
          e.length > 0 && (t.setState(function(k) {
            return {
              lazyLoadedList: k.lazyLoadedList.concat(e)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(e));
        }
        t.adaptHeight();
        var n = P(P({
          listRef: t.list,
          trackRef: t.track
        }, t.props), t.state), v = t.didPropsChange(l);
        v && t.updateState(n, v, function() {
          t.state.currentSlide >= i.default.Children.count(t.props.children) && t.changeSlide({
            message: "index",
            index: i.default.Children.count(t.props.children) - t.props.slidesToShow,
            currentSlide: t.state.currentSlide
          }), t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
        });
      }), r(u(t), "onWindowResized", function(l) {
        t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, h.default)(function() {
          return t.resizeWindow(l);
        }, 50), t.debouncedResize();
      }), r(u(t), "resizeWindow", function() {
        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = !!(t.track && t.track.node);
        if (e) {
          var n = P(P({
            listRef: t.list,
            trackRef: t.track
          }, t.props), t.state);
          t.updateState(n, l, function() {
            t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
          }), t.setState({
            animating: !1
          }), clearTimeout(t.animationEndCallback), delete t.animationEndCallback;
        }
      }), r(u(t), "updateState", function(l, e, n) {
        var v = (0, y.initializedState)(l);
        l = P(P(P({}, l), v), {}, {
          slideIndex: v.currentSlide
        });
        var k = (0, y.getTrackLeft)(l);
        l = P(P({}, l), {}, {
          left: k
        });
        var w = (0, y.getTrackCSS)(l);
        (e || i.default.Children.count(t.props.children) !== i.default.Children.count(l.children)) && (v.trackStyle = w), t.setState(v, n);
      }), r(u(t), "ssrInit", function() {
        if (t.props.variableWidth) {
          var l = 0, e = 0, n = [], v = (0, y.getPreClones)(P(P(P({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          })), k = (0, y.getPostClones)(P(P(P({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          }));
          t.props.children.forEach(function(re) {
            n.push(re.props.style.width), l += re.props.style.width;
          });
          for (var w = 0; w < v; w++)
            e += n[n.length - 1 - w], l += n[n.length - 1 - w];
          for (var T = 0; T < k; T++)
            l += n[T];
          for (var C = 0; C < t.state.currentSlide; C++)
            e += n[C];
          var j = {
            width: l + "px",
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
        var F = i.default.Children.count(t.props.children), $ = P(P(P({}, t.props), t.state), {}, {
          slideCount: F
        }), J = (0, y.getPreClones)($) + (0, y.getPostClones)($) + F, V = 100 / t.props.slidesToShow * J, Y = 100 / J, W = -Y * ((0, y.getPreClones)($) + t.state.currentSlide) * V / 100;
        t.props.centerMode && (W += (100 - Y * V / 100) / 2);
        var K = {
          width: V + "%",
          left: W + "%"
        };
        return {
          slideWidth: Y + "%",
          trackStyle: K
        };
      }), r(u(t), "checkImagesLoad", function() {
        var l = t.list && t.list.querySelectorAll && t.list.querySelectorAll(".slick-slide img") || [], e = l.length, n = 0;
        Array.prototype.forEach.call(l, function(v) {
          var k = function() {
            return ++n && n >= e && t.onWindowResized();
          };
          if (!v.onclick)
            v.onclick = function() {
              return v.parentNode.focus();
            };
          else {
            var w = v.onclick;
            v.onclick = function(T) {
              w(T), v.parentNode.focus();
            };
          }
          v.onload || (t.props.lazyLoad ? v.onload = function() {
            t.adaptHeight(), t.callbackTimers.push(setTimeout(t.onWindowResized, t.props.speed));
          } : (v.onload = k, v.onerror = function() {
            k(), t.props.onLazyLoadError && t.props.onLazyLoadError();
          }));
        });
      }), r(u(t), "progressiveLazyLoad", function() {
        for (var l = [], e = P(P({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, y.getPostClones)(e); n++)
          if (t.state.lazyLoadedList.indexOf(n) < 0) {
            l.push(n);
            break;
          }
        for (var v = t.state.currentSlide - 1; v >= -(0, y.getPreClones)(e); v--)
          if (t.state.lazyLoadedList.indexOf(v) < 0) {
            l.push(v);
            break;
          }
        l.length > 0 ? (t.setState(function(k) {
          return {
            lazyLoadedList: k.lazyLoadedList.concat(l)
          };
        }), t.props.onLazyLoad && t.props.onLazyLoad(l)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
      }), r(u(t), "slideHandler", function(l) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = t.props, v = n.asNavFor, k = n.beforeChange, w = n.onLazyLoad, T = n.speed, C = n.afterChange, j = t.state.currentSlide, q = (0, y.slideHandler)(P(P(P({
          index: l
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e
        })), F = q.state, $ = q.nextState;
        if (F) {
          k && k(j, F.currentSlide);
          var J = F.lazyLoadedList.filter(function(V) {
            return t.state.lazyLoadedList.indexOf(V) < 0;
          });
          w && J.length > 0 && w(J), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), C && C(j), delete t.animationEndCallback), t.setState(F, function() {
            v && t.asNavForIndex !== l && (t.asNavForIndex = l, v.innerSlider.slideHandler(l)), $ && (t.animationEndCallback = setTimeout(function() {
              var V = $.animating, Y = ee($, ["animating"]);
              t.setState(Y, function() {
                t.callbackTimers.push(setTimeout(function() {
                  return t.setState({
                    animating: V
                  });
                }, 10)), C && C(F.currentSlide), delete t.animationEndCallback;
              });
            }, T));
          });
        }
      }), r(u(t), "changeSlide", function(l) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = P(P({}, t.props), t.state), v = (0, y.changeSlide)(n, l);
        if (!(v !== 0 && !v) && (e === !0 ? t.slideHandler(v, e) : t.slideHandler(v), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
          var k = t.list.querySelectorAll(".slick-current");
          k[0] && k[0].focus();
        }
      }), r(u(t), "clickHandler", function(l) {
        t.clickable === !1 && (l.stopPropagation(), l.preventDefault()), t.clickable = !0;
      }), r(u(t), "keyHandler", function(l) {
        var e = (0, y.keyHandler)(l, t.props.accessibility, t.props.rtl);
        e !== "" && t.changeSlide({
          message: e
        });
      }), r(u(t), "selectHandler", function(l) {
        t.changeSlide(l);
      }), r(u(t), "disableBodyScroll", function() {
        var l = function(n) {
          n = n || window.event, n.preventDefault && n.preventDefault(), n.returnValue = !1;
        };
        window.ontouchmove = l;
      }), r(u(t), "enableBodyScroll", function() {
        window.ontouchmove = null;
      }), r(u(t), "swipeStart", function(l) {
        t.props.verticalSwiping && t.disableBodyScroll();
        var e = (0, y.swipeStart)(l, t.props.swipe, t.props.draggable);
        e !== "" && t.setState(e);
      }), r(u(t), "swipeMove", function(l) {
        var e = (0, y.swipeMove)(l, P(P(P({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(u(t), "swipeEnd", function(l) {
        var e = (0, y.swipeEnd)(l, P(P(P({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        if (e) {
          var n = e.triggerSlideHandler;
          delete e.triggerSlideHandler, t.setState(e), n !== void 0 && (t.slideHandler(n), t.props.verticalSwiping && t.enableBodyScroll());
        }
      }), r(u(t), "touchEnd", function(l) {
        t.swipeEnd(l), t.clickable = !0;
      }), r(u(t), "slickPrev", function() {
        t.callbackTimers.push(setTimeout(function() {
          return t.changeSlide({
            message: "previous"
          });
        }, 0));
      }), r(u(t), "slickNext", function() {
        t.callbackTimers.push(setTimeout(function() {
          return t.changeSlide({
            message: "next"
          });
        }, 0));
      }), r(u(t), "slickGoTo", function(l) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (l = Number(l), isNaN(l)) return "";
        t.callbackTimers.push(setTimeout(function() {
          return t.changeSlide({
            message: "index",
            index: l,
            currentSlide: t.state.currentSlide
          }, e);
        }, 0));
      }), r(u(t), "play", function() {
        var l;
        if (t.props.rtl)
          l = t.state.currentSlide - t.props.slidesToScroll;
        else if ((0, y.canGoNext)(P(P({}, t.props), t.state)))
          l = t.state.currentSlide + t.props.slidesToScroll;
        else
          return !1;
        t.slideHandler(l);
      }), r(u(t), "autoPlay", function(l) {
        t.autoplayTimer && clearInterval(t.autoplayTimer);
        var e = t.state.autoplaying;
        if (l === "update") {
          if (e === "hovered" || e === "focused" || e === "paused")
            return;
        } else if (l === "leave") {
          if (e === "paused" || e === "focused")
            return;
        } else if (l === "blur" && (e === "paused" || e === "hovered"))
          return;
        t.autoplayTimer = setInterval(t.play, t.props.autoplaySpeed + 50), t.setState({
          autoplaying: "playing"
        });
      }), r(u(t), "pause", function(l) {
        t.autoplayTimer && (clearInterval(t.autoplayTimer), t.autoplayTimer = null);
        var e = t.state.autoplaying;
        l === "paused" ? t.setState({
          autoplaying: "paused"
        }) : l === "focused" ? (e === "hovered" || e === "playing") && t.setState({
          autoplaying: "focused"
        }) : e === "playing" && t.setState({
          autoplaying: "hovered"
        });
      }), r(u(t), "onDotsOver", function() {
        return t.props.autoplay && t.pause("hovered");
      }), r(u(t), "onDotsLeave", function() {
        return t.props.autoplay && t.state.autoplaying === "hovered" && t.autoPlay("leave");
      }), r(u(t), "onTrackOver", function() {
        return t.props.autoplay && t.pause("hovered");
      }), r(u(t), "onTrackLeave", function() {
        return t.props.autoplay && t.state.autoplaying === "hovered" && t.autoPlay("leave");
      }), r(u(t), "onSlideFocus", function() {
        return t.props.autoplay && t.pause("focused");
      }), r(u(t), "onSlideBlur", function() {
        return t.props.autoplay && t.state.autoplaying === "focused" && t.autoPlay("blur");
      }), r(u(t), "render", function() {
        var l = (0, S.default)("slick-slider", t.props.className, {
          "slick-vertical": t.props.vertical,
          "slick-initialized": !0
        }), e = P(P({}, t.props), t.state), n = (0, y.extractObject)(e, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), v = t.props.pauseOnHover;
        n = P(P({}, n), {}, {
          onMouseEnter: v ? t.onTrackOver : null,
          onMouseLeave: v ? t.onTrackLeave : null,
          onMouseOver: v ? t.onTrackOver : null,
          focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
        });
        var k;
        if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
          var w = (0, y.extractObject)(e, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), T = t.props.pauseOnDotsHover;
          w = P(P({}, w), {}, {
            clickHandler: t.changeSlide,
            onMouseEnter: T ? t.onDotsLeave : null,
            onMouseOver: T ? t.onDotsOver : null,
            onMouseLeave: T ? t.onDotsLeave : null
          }), k = /* @__PURE__ */ i.default.createElement(L.Dots, w);
        }
        var C, j, q = (0, y.extractObject)(e, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        q.clickHandler = t.changeSlide, t.props.arrows && (C = /* @__PURE__ */ i.default.createElement(M.PrevArrow, q), j = /* @__PURE__ */ i.default.createElement(M.NextArrow, q));
        var F = null;
        t.props.vertical && (F = {
          height: t.state.listHeight
        });
        var $ = null;
        t.props.vertical === !1 ? t.props.centerMode === !0 && ($ = {
          padding: "0px " + t.props.centerPadding
        }) : t.props.centerMode === !0 && ($ = {
          padding: t.props.centerPadding + " 0px"
        });
        var J = P(P({}, F), $), V = t.props.touchMove, Y = {
          className: "slick-list",
          style: J,
          onClick: t.clickHandler,
          onMouseDown: V ? t.swipeStart : null,
          onMouseMove: t.state.dragging && V ? t.swipeMove : null,
          onMouseUp: V ? t.swipeEnd : null,
          onMouseLeave: t.state.dragging && V ? t.swipeEnd : null,
          onTouchStart: V ? t.swipeStart : null,
          onTouchMove: t.state.dragging && V ? t.swipeMove : null,
          onTouchEnd: V ? t.touchEnd : null,
          onTouchCancel: t.state.dragging && V ? t.swipeEnd : null,
          onKeyDown: t.props.accessibility ? t.keyHandler : null
        }, W = {
          className: l,
          dir: "ltr",
          style: t.props.style
        };
        return t.props.unslick && (Y = {
          className: "slick-list"
        }, W = {
          className: l,
          style: t.props.style
        }), /* @__PURE__ */ i.default.createElement("div", W, t.props.unslick ? "" : C, /* @__PURE__ */ i.default.createElement("div", H({
          ref: t.listRefHandler
        }, Y), /* @__PURE__ */ i.default.createElement(g.Track, H({
          ref: t.trackRefHandler
        }, n), t.props.children)), t.props.unslick ? "" : j, t.props.unslick ? "" : k);
      }), t.list = null, t.track = null, t.state = P(P({}, f.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: i.default.Children.count(t.props.children)
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      var B = t.ssrInit();
      return t.state = P(P({}, t.state), B), t;
    }
    return Z(O, [{
      key: "didPropsChange",
      value: function(t) {
        for (var B = !1, l = 0, e = Object.keys(this.props); l < e.length; l++) {
          var n = e[l];
          if (!t.hasOwnProperty(n)) {
            B = !0;
            break;
          }
          if (!(D(t[n]) === "object" || typeof t[n] == "function" || isNaN(t[n])) && t[n] !== this.props[n]) {
            B = !0;
            break;
          }
        }
        return B || i.default.Children.count(this.props.children) !== i.default.Children.count(t.children);
      }
    }]), O;
  })(i.default.Component), he;
}
var Me, Je;
function $t() {
  if (Je) return Me;
  Je = 1;
  var i = function(f) {
    return f.replace(/[A-Z]/g, function(h) {
      return "-" + h.toLowerCase();
    }).toLowerCase();
  };
  return Me = i, Me;
}
var Re, Qe;
function Bt() {
  if (Qe) return Re;
  Qe = 1;
  var i = $t(), f = function(y) {
    var g = /[height|width]$/;
    return g.test(y);
  }, h = function(y) {
    var g = "", L = Object.keys(y);
    return L.forEach(function(M, z) {
      var R = y[M];
      M = i(M), f(M) && typeof R == "number" && (R = R + "px"), R === !0 ? g += M : R === !1 ? g += "not " + M : g += "(" + M + ": " + R + ")", z < L.length - 1 && (g += " and ");
    }), g;
  }, S = function(y) {
    var g = "";
    return typeof y == "string" ? y : y instanceof Array ? (y.forEach(function(L, M) {
      g += h(L), M < y.length - 1 && (g += ", ");
    }), g) : h(y);
  };
  return Re = S, Re;
}
var Ze;
function Yt() {
  return Ze || (Ze = 1, (function(i) {
    var f = { NODE_ENV: "production" };
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var h = M(ce), S = Ft(), y = M(Bt()), g = M(nt()), L = me();
    function M(o) {
      return o && o.__esModule ? o : { default: o };
    }
    function z(o) {
      "@babel/helpers - typeof";
      return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
        return typeof r;
      } : function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, z(o);
    }
    function R() {
      return R = Object.assign ? Object.assign.bind() : function(o) {
        for (var r = 1; r < arguments.length; r++) {
          var p = arguments[r];
          for (var b in p)
            ({}).hasOwnProperty.call(p, b) && (o[b] = p[b]);
        }
        return o;
      }, R.apply(null, arguments);
    }
    function D(o, r) {
      var p = Object.keys(o);
      if (Object.getOwnPropertySymbols) {
        var b = Object.getOwnPropertySymbols(o);
        r && (b = b.filter(function(c) {
          return Object.getOwnPropertyDescriptor(o, c).enumerable;
        })), p.push.apply(p, b);
      }
      return p;
    }
    function H(o) {
      for (var r = 1; r < arguments.length; r++) {
        var p = arguments[r] != null ? arguments[r] : {};
        r % 2 ? D(Object(p), !0).forEach(function(b) {
          s(o, b, p[b]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(p)) : D(Object(p)).forEach(function(b) {
          Object.defineProperty(o, b, Object.getOwnPropertyDescriptor(p, b));
        });
      }
      return o;
    }
    function ee(o, r) {
      if (!(o instanceof r)) throw new TypeError("Cannot call a class as a function");
    }
    function Q(o, r) {
      for (var p = 0; p < r.length; p++) {
        var b = r[p];
        b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(o, u(b.key), b);
      }
    }
    function U(o, r, p) {
      return r && Q(o.prototype, r), Object.defineProperty(o, "prototype", { writable: !1 }), o;
    }
    function P(o, r) {
      if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
      o.prototype = Object.create(r && r.prototype, { constructor: { value: o, writable: !0, configurable: !0 } }), Object.defineProperty(o, "prototype", { writable: !1 }), r && X(o, r);
    }
    function X(o, r) {
      return X = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p, b) {
        return p.__proto__ = b, p;
      }, X(o, r);
    }
    function N(o) {
      var r = A();
      return function() {
        var p, b = a(o);
        if (r) {
          var c = a(this).constructor;
          p = Reflect.construct(b, arguments, c);
        } else p = b.apply(this, arguments);
        return Z(this, p);
      };
    }
    function Z(o, r) {
      if (r && (z(r) == "object" || typeof r == "function")) return r;
      if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return G(o);
    }
    function G(o) {
      if (o === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return o;
    }
    function A() {
      try {
        var o = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch {
      }
      return (A = function() {
        return !!o;
      })();
    }
    function a(o) {
      return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
      }, a(o);
    }
    function s(o, r, p) {
      return (r = u(r)) in o ? Object.defineProperty(o, r, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = p, o;
    }
    function u(o) {
      var r = m(o, "string");
      return z(r) == "symbol" ? r : r + "";
    }
    function m(o, r) {
      if (z(o) != "object" || !o) return o;
      var p = o[Symbol.toPrimitive];
      if (p !== void 0) {
        var b = p.call(o, r);
        if (z(b) != "object") return b;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(o);
    }
    i.default = /* @__PURE__ */ (function(o) {
      P(p, o);
      var r = N(p);
      function p(b) {
        var c;
        return ee(this, p), c = r.call(this, b), s(G(c), "innerSliderRefHandler", function(d) {
          return c.innerSlider = d;
        }), s(G(c), "slickPrev", function() {
          return c.innerSlider.slickPrev();
        }), s(G(c), "slickNext", function() {
          return c.innerSlider.slickNext();
        }), s(G(c), "slickGoTo", function(d) {
          var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return c.innerSlider.slickGoTo(d, O);
        }), s(G(c), "slickPause", function() {
          return c.innerSlider.pause("paused");
        }), s(G(c), "slickPlay", function() {
          return c.innerSlider.autoPlay("play");
        }), c.state = {
          breakpoint: null
        }, c._responsiveMediaHandlers = [], c;
      }
      return U(p, [{
        key: "media",
        value: function(c, d) {
          var O = window.matchMedia(c), _ = function(B) {
            var l = B.matches;
            l && d();
          };
          O.addListener(_), this._responsiveMediaHandlers.push({
            mql: O,
            query: c,
            listener: _
          });
        }
        // handles responsive breakpoints
      }, {
        key: "componentDidMount",
        value: function() {
          var c = this;
          if (this.props.responsive) {
            var d = this.props.responsive.map(function(_) {
              return _.breakpoint;
            });
            d.sort(function(_, t) {
              return _ - t;
            }), d.forEach(function(_, t) {
              var B;
              t === 0 ? B = (0, y.default)({
                minWidth: 0,
                maxWidth: _
              }) : B = (0, y.default)({
                minWidth: d[t - 1] + 1,
                maxWidth: _
              }), (0, L.canUseDOM)() && c.media(B, function() {
                c.setState({
                  breakpoint: _
                });
              });
            });
            var O = (0, y.default)({
              minWidth: d.slice(-1)[0]
            });
            (0, L.canUseDOM)() && this.media(O, function() {
              c.setState({
                breakpoint: null
              });
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this._responsiveMediaHandlers.forEach(function(c) {
            c.mql.removeListener(c.listener);
          });
        }
      }, {
        key: "render",
        value: function() {
          var c = this, d, O;
          this.state.breakpoint ? (O = this.props.responsive.filter(function(T) {
            return T.breakpoint === c.state.breakpoint;
          }), d = O[0].settings === "unslick" ? "unslick" : H(H(H({}, g.default), this.props), O[0].settings)) : d = H(H({}, g.default), this.props), d.centerMode && (d.slidesToScroll > 1 && f.NODE_ENV, d.slidesToScroll = 1), d.fade && (d.slidesToShow > 1 && f.NODE_ENV, d.slidesToScroll > 1 && f.NODE_ENV, d.slidesToShow = 1, d.slidesToScroll = 1);
          var _ = h.default.Children.toArray(this.props.children);
          _ = _.filter(function(T) {
            return typeof T == "string" ? !!T.trim() : !!T;
          }), d.variableWidth && (d.rows > 1 || d.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), d.variableWidth = !1);
          for (var t = [], B = null, l = 0; l < _.length; l += d.rows * d.slidesPerRow) {
            for (var e = [], n = l; n < l + d.rows * d.slidesPerRow; n += d.slidesPerRow) {
              for (var v = [], k = n; k < n + d.slidesPerRow && (d.variableWidth && _[k].props.style && (B = _[k].props.style.width), !(k >= _.length)); k += 1)
                v.push(/* @__PURE__ */ h.default.cloneElement(_[k], {
                  key: 100 * l + 10 * n + k,
                  tabIndex: -1,
                  style: {
                    width: "".concat(100 / d.slidesPerRow, "%"),
                    display: "inline-block"
                  }
                }));
              e.push(/* @__PURE__ */ h.default.createElement("div", {
                key: 10 * l + n
              }, v));
            }
            d.variableWidth ? t.push(/* @__PURE__ */ h.default.createElement("div", {
              key: l,
              style: {
                width: B
              }
            }, e)) : t.push(/* @__PURE__ */ h.default.createElement("div", {
              key: l
            }, e));
          }
          if (d === "unslick") {
            var w = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ h.default.createElement("div", {
              className: w
            }, _);
          } else t.length <= d.slidesToShow && (d.unslick = !0);
          return /* @__PURE__ */ h.default.createElement(S.InnerSlider, R({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, (0, L.filterSettings)(d)), t);
        }
      }]), p;
    })(h.default.Component);
  })(Te)), Te;
}
var et;
function Gt() {
  return et || (et = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var f = h(Yt());
    function h(S) {
      return S && S.__esModule ? S : { default: S };
    }
    i.default = f.default;
  })(Ce)), Ce;
}
var Ut = Gt();
const Xt = /* @__PURE__ */ ht(Ut), Kt = ({
  text: i = "Button",
  href: f = void 0,
  variant: h = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline, secondary
  size: S = "btn-md",
  // btn-sm , btn-md
  className: y = "",
  disabled: g = !1,
  onClick: L = void 0,
  attributes: M = {},
  ...z
}) => {
  const D = (Q) => {
    switch (Q) {
      case "light":
        return "btn-light";
      case "dark":
        return "btn-dark";
      case "light-outlined":
        return "btn-light-outlined";
      case "dark-outlined":
        return "btn-dark-outlined";
      case "light-no-outline":
        return "btn-light-no-outline";
      case "dark-no-outline":
        return "btn-dark-no-outline";
      case "secondary":
        return "btn-primary";
      default:
        return "btn-light";
    }
  }, H = (Q) => {
    switch (Q) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, ee = `btn ${D(h)} ${H(S)} ${y}`.trim();
  return f ? /* @__PURE__ */ E(
    "a",
    {
      href: f,
      className: ee,
      onClick: L,
      ...z,
      ...M ?? {},
      children: i
    }
  ) : /* @__PURE__ */ E(
    "button",
    {
      type: z.type || "button",
      className: ee,
      disabled: g,
      onClick: L,
      ...z,
      ...M ?? {},
      children: i
    }
  );
}, Vt = ft(() => Promise.resolve().then(() => or)), Jt = ({
  media: i = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: f = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: h = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: S,
  videoUrl: y,
  lottieUrl: g,
  lottieData: L,
  iframeUrl: M,
  flipbookUrl: z,
  title: R,
  className: D = ""
}) => {
  var s;
  const H = typeof window < "u" && window.location.origin.indexOf("author") > -1, ee = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, U = `relative w-full h-full ${f === "square" ? "aspect-square" : f === "rectangle" ? "aspect-[4/3]" : i === "video" ? "aspect-video" : ""}`.trim(), P = f === "default" ? `w-full h-full ${D}`.trim() : `absolute inset-0 w-full h-full ${D}`.trim(), X = "w-full h-full", N = f === "default" ? `${P}`.trim() : P, Z = h === "contain" ? "object-contain" : "object-cover", G = h === "contain" ? "xMidYMid meet" : "xMidYMid slice", A = `relative w-full ${D}`.trim(), a = "w-full min-h-[280px]";
  switch (i) {
    case "image":
      if (S)
        return /* @__PURE__ */ E("div", { className: U, children: /* @__PURE__ */ E(
          "img",
          {
            src: S,
            alt: R || "Media image",
            className: `${Z} ${P}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (y) {
        const u = y.includes("youtube.com/watch") || y.includes("youtu.be/");
        let m = y;
        u && (m = `https://www.youtube.com/embed/${y.includes("youtu.be/") ? y.split("youtu.be/")[1].split("?")[0] : (s = y.split("v=")[1]) == null ? void 0 : s.split("&")[0]}`);
        const o = (() => {
          if (!u) return m;
          try {
            const r = new URL(m);
            return r.searchParams.set("autoplay", "0"), r.searchParams.set("mute", "0"), r.searchParams.set("playsinline", "1"), r.searchParams.set("controls", "1"), r.searchParams.set("rel", "0"), r.toString();
          } catch {
            return m.includes("?") ? m.includes("autoplay=") ? m : `${m}&autoplay=0` : `${m}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ E("div", { className: U, children: u ? /* @__PURE__ */ E(
          "iframe",
          {
            src: o,
            title: R || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${P} ${Z}`.trim()
          }
        ) : /* @__PURE__ */ E(
          "video",
          {
            className: `${P} ${Z}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: R || "Video player",
            children: /* @__PURE__ */ E("source", { src: y })
          }
        ) });
      }
      break;
    case "lottie":
      if (L)
        return H ? /* @__PURE__ */ E("div", { className: U, role: "img", "aria-label": R || "Animation", children: /* @__PURE__ */ E(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${P}`.trim(),
            children: /* @__PURE__ */ E("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ E(
          "div",
          {
            className: U,
            role: "img",
            "aria-label": R || "Animation",
            children: /* @__PURE__ */ E("div", { className: `${P} overflow-hidden`.trim(), children: /* @__PURE__ */ E(
              vt,
              {
                animationData: L,
                loop: !ee,
                autoplay: !ee,
                className: X,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: G }
              }
            ) })
          }
        );
      if (g)
        return /* @__PURE__ */ E("div", { className: U, children: /* @__PURE__ */ E("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (M)
        return /* @__PURE__ */ E("div", { className: U, children: /* @__PURE__ */ E(
          "iframe",
          {
            src: M,
            title: R || "Iframe content",
            frameBorder: "0",
            className: `${N} ${Z}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (z)
        return H ? /* @__PURE__ */ E("div", { className: A, role: "img", "aria-label": R || "Flipbook", children: /* @__PURE__ */ E(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${a}`.trim(),
            children: /* @__PURE__ */ E("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ E("div", { className: A, children: /* @__PURE__ */ E("div", { className: a, children: /* @__PURE__ */ E(dt, { fallback: /* @__PURE__ */ E("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ E(Vt, { pdfUrl: z, title: R, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ E("div", { className: U, children: /* @__PURE__ */ E("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${f === "default" ? "" : "absolute inset-0"}`.trim(), children: i ? `${i.charAt(0).toUpperCase() + i.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
}, Qt = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  white: "text-white"
}, Zt = {
  primary: "from-primary",
  secondary: "from-secondary",
  tertiary: "from-tertiary",
  white: "from-white"
}, er = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  tertiary: "bg-tertiary",
  white: "bg-white"
}, tt = {
  verticalContentFirst: {
    primary: "bg-gradient-to-b from-primary to-transparent",
    secondary: "bg-gradient-to-b from-secondary to-transparent",
    tertiary: "bg-gradient-to-b from-tertiary to-transparent",
    white: "bg-gradient-to-b from-white to-transparent"
  },
  verticalMediaFirst: {
    primary: "bg-gradient-to-t from-primary to-transparent",
    secondary: "bg-gradient-to-t from-secondary to-transparent",
    tertiary: "bg-gradient-to-t from-tertiary to-transparent",
    white: "bg-gradient-to-t from-white to-transparent"
  }
};
function ur({
  slides: i = [],
  order: f = "content-first",
  mediaStyle: h = "flush",
  mobileOverlay: S = !1,
  overlayColor: y = "secondary",
  buttonSize: g = "btn-md",
  carouselLabel: L = "Hero content",
  className: M = "",
  id: z = "",
  infinite: R,
  ...D
}) {
  if (!(i != null && i.length)) return null;
  const [H, ee] = fe(0), Q = rt(null), U = typeof window < "u" && window.location.origin.indexOf("author") > -1, P = f === "content-first", X = h === "framed", N = i[H] ?? i[0], Z = (N == null ? void 0 : N.title) || (N == null ? void 0 : N.description) || "";
  Ne(() => {
    const m = () => {
      const r = Q.current;
      r && r.querySelectorAll(".slick-slide").forEach((p) => {
        p.getAttribute("aria-hidden") === "true" ? p.setAttribute("inert", "") : p.removeAttribute("inert");
      });
    }, o = window.requestAnimationFrame(m);
    return () => window.cancelAnimationFrame(o);
  }, [H, i.length]);
  const G = {
    dots: !0,
    infinite: R ?? i.length > 1,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !U,
    arrows: !1,
    pauseOnHover: !0,
    pauseOnFocus: !0,
    cssEase: "linear",
    afterChange: ee,
    customPaging: (m) => /* @__PURE__ */ E(
      "button",
      {
        type: "button",
        "aria-label": H === m ? `Current slide, slide ${m + 1} of ${i.length}` : `Go to slide ${m + 1} of ${i.length}`,
        "aria-current": H === m ? "true" : void 0
      }
    )
  };
  function A({ slide: m, slideIndex: o }) {
    const { titleAccent: r, titleAccentColor: p, title: b, description: c, buttons: d, logos: O, widget: _ } = m, t = i.length > 1 && o > 0 ? "h2" : "h1", l = ["font-accent font-normal m-0 text-display-xl leading-display-xl", Qt[p] || "text-white"].filter(Boolean).join(" "), e = S ? er[y] || "bg-secondary" : "bg-transparent";
    return /* @__PURE__ */ le("div", { className: `${e} flex flex-col justify-center gap-hero-spacing px-hero-padding-x py-hero-padding-y text-left`, children: [
      /* @__PURE__ */ le("div", { className: "spacing-y-hero-text--spacing-y", children: [
        r && /* @__PURE__ */ E("p", { className: l, children: r }),
        b && /* @__PURE__ */ E(t, { className: "text-white font-normal m-0 text-display-xl", children: b }),
        c && /* @__PURE__ */ E("p", { className: "m-0 text-body-large leading-body-large text-white", children: c })
      ] }),
      (d == null ? void 0 : d.length) > 0 && /* @__PURE__ */ E("div", { className: "flex flex-wrap gap-10", children: d.map((n, v) => /* @__PURE__ */ E(Kt, { text: n.text, href: n.href, variant: n.variant ?? "light", size: n.size ?? g, onClick: n.onClick, className: "flex-shrink-0 max-sm:w-full" }, v)) }),
      (O == null ? void 0 : O.length) > 0 && /* @__PURE__ */ E("div", { className: "flex items-center flex-wrap gap-8 max-sm:w-full", children: O.map((n, v) => /* @__PURE__ */ E("div", { className: "flex items-center justify-center max-w-[119px] h-[46px]", children: /* @__PURE__ */ E("img", { src: n.src, alt: n.alt ?? "", className: "w-full h-full object-contain rounded-10 max-w-full" }) }, v)) }),
      _ && /* @__PURE__ */ E("div", { className: "w-full", children: /* @__PURE__ */ E("div", { className: "w-full", dangerouslySetInnerHTML: { __html: _ } }) })
    ] });
  }
  function a({ slide: m }) {
    const o = m.media;
    if (o) {
      const r = Zt[y] ? y : "secondary", p = P ? tt.verticalContentFirst[r] : tt.verticalMediaFirst[r];
      return /* @__PURE__ */ E("div", { className: `relative flex items-center justify-center w-full ${X ? "p-hero-image--padding" : ""}`, children: /* @__PURE__ */ le("div", { className: `relative w-full aspect-[393/310] md:aspect-[834/500] lg:aspect-[756/598] overflow-hidden ${X ? "rounded-[var(--spacing-hero-image--br)]" : ""}`, children: [
        /* @__PURE__ */ E(
          Jt,
          {
            media: o.type ?? "image",
            aspect: "default",
            imageUrl: o.imageUrl,
            videoUrl: o.videoUrl,
            lottieUrl: o.lottieUrl,
            lottieData: o.lottieData,
            iframeUrl: o.iframeUrl,
            title: o.title ?? "",
            className: "w-full h-full object-cover"
          }
        ),
        S && /* @__PURE__ */ E("div", { "aria-hidden": !0, className: `absolute inset-0 pointer-events-none ${p} lg:hidden` })
      ] }) });
    } else return null;
  }
  const u = [
    "hero-slider relative w-full overflow-hidden",
    i.length > 1 && !X && "hero-slider--dots-absolute",
    M
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ le(
    "div",
    {
      ref: Q,
      className: u,
      id: z,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": L,
      ...D,
      children: [
        /* @__PURE__ */ le("div", { "aria-live": "polite", "aria-atomic": "true", className: "sr-only", children: [
          "Slide ",
          H + 1,
          " of ",
          i.length,
          Z ? `: ${Z}` : ""
        ] }),
        /* @__PURE__ */ E(Xt, { ...G, className: "w-full hero-slider-slick", children: i.map((m, o) => /* @__PURE__ */ E("div", { className: "outline-none", ...m.attributes || {}, children: /* @__PURE__ */ E("div", { className: "grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]", children: P ? /* @__PURE__ */ le(He, { children: [
          /* @__PURE__ */ E(A, { slide: m, slideIndex: o }),
          /* @__PURE__ */ E(a, { slide: m })
        ] }) : /* @__PURE__ */ le(He, { children: [
          /* @__PURE__ */ E(a, { slide: m }),
          /* @__PURE__ */ E(A, { slide: m, slideIndex: o })
        ] }) }) }, m.key ?? o)) })
      ]
    }
  );
}
let De, ut, Ae, we;
const tr = async () => {
  if (!we) {
    const i = await import("react-pdf");
    we = i.pdfjs, ut = i.Document, Ae = i.Page, we.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${we.version}/build/pdf.worker.min.mjs`;
  }
}, rr = async () => {
  De || (De = (await import("react-pageflip")).default);
}, nr = pt(({ children: i }, f) => /* @__PURE__ */ E("div", { ref: f, className: "w-full h-full overflow-hidden", children: i })), ir = ({ pdfUrl: i, title: f, width: h = 280, height: S = 280, className: y = "" }) => {
  const [g, L] = fe(0), [M, z] = fe(null), [R, D] = fe(!0), [H, ee] = fe(S / h), [Q, U] = fe(0), P = rt(null);
  Ne(() => {
    Promise.all([tr(), rr()]).then(() => D(!1)).catch(() => {
      z("Failed to load flipbook");
    });
  }, []), Ne(() => {
    const A = P.current;
    if (!A) return;
    const a = new ResizeObserver(([s]) => {
      const u = Math.floor(s.contentRect.width);
      u > 0 && U(u);
    });
    return a.observe(A), () => a.disconnect();
  }, [R]);
  const X = Q > 0 ? Math.floor(Q / 2) : Math.floor(h / 2), N = Math.round(X * H), Z = We(async (A) => {
    try {
      const s = (await A.getPage(1)).getViewport({ scale: 1 });
      s != null && s.width && (s != null && s.height) && ee(s.height / s.width);
    } catch {
    }
    L(A.numPages || 0);
  }, []), G = We((A) => {
    z((A == null ? void 0 : A.message) || "Failed to load PDF");
  }, []);
  return M ? /* @__PURE__ */ E("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : R ? /* @__PURE__ */ E("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ E("div", { ref: P, className: `w-full ${y}`.trim(), children: /* @__PURE__ */ le(
    ut,
    {
      file: i,
      onLoadSuccess: Z,
      onLoadError: G,
      loading: /* @__PURE__ */ E("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        g === 1 && /* @__PURE__ */ E(
          "div",
          {
            className: `w-full flex justify-center items-center ${y}`.trim(),
            style: { minHeight: `${N}px` },
            children: /* @__PURE__ */ E(Ae, { pageNumber: 1, width: h, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        g > 1 && /* @__PURE__ */ E(
          De,
          {
            width: X,
            height: N,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": f || "Flipbook",
            children: Array.from({ length: g }, (A, a) => /* @__PURE__ */ E(nr, { children: /* @__PURE__ */ E(Ae, { pageNumber: a + 1, width: X, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, a))
          },
          `${X}-${N}`
        )
      ]
    }
  ) });
}, or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ir
}, Symbol.toStringTag, { value: "Module" }));
export {
  ur as default
};
