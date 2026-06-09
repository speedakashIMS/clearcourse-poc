import { jsx as M, jsxs as ce } from "react/jsx-runtime";
import * as Oe from "react";
import ue, { lazy as ct, Suspense as ft, useState as ve, useRef as dt, useEffect as Ae, useCallback as We, forwardRef as pt } from "react";
import vt from "lottie-react";
var Se = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ht(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function yt(i) {
  if (Object.prototype.hasOwnProperty.call(i, "__esModule")) return i;
  var u = i.default;
  if (typeof u == "function") {
    var v = function b() {
      return this instanceof b ? Reflect.construct(u, arguments, this.constructor) : u.apply(this, arguments);
    };
    v.prototype = u.prototype;
  } else v = {};
  return Object.defineProperty(v, "__esModule", { value: !0 }), Object.keys(i).forEach(function(b) {
    var d = Object.getOwnPropertyDescriptor(i, b);
    Object.defineProperty(v, b, d.get ? d : {
      enumerable: !0,
      get: function() {
        return i[b];
      }
    });
  }), v;
}
var Te = {}, je = {}, he = {}, Ee = {}, qe;
function gt() {
  return qe || (qe = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
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
    i.default = u;
  })(Ee)), Ee;
}
var xe, Fe;
function bt() {
  if (Fe) return xe;
  Fe = 1;
  var i = "Expected a function", u = NaN, v = "[object Symbol]", b = /^\s+|\s+$/g, d = /^[-+]0x[0-9a-f]+$/i, g = /^0b[01]+$/i, x = /^0o[0-7]+$/i, L = parseInt, z = typeof Se == "object" && Se && Se.Object === Object && Se, R = typeof self == "object" && self && self.Object === Object && self, N = z || R || Function("return this")(), K = Object.prototype, Z = K.toString, ee = Math.max, V = Math.min, C = function() {
    return N.Date.now();
  };
  function J(a, l, c) {
    var w, s, r, y, m, f, p = 0, O = !1, k = !1, t = !0;
    if (typeof a != "function")
      throw new TypeError(i);
    l = q(l) || 0, I(c) && (O = !!c.leading, k = "maxWait" in c, r = k ? ee(q(c.maxWait) || 0, l) : r, t = "trailing" in c ? !!c.trailing : t);
    function B(j) {
      var A = w, W = s;
      return w = s = void 0, p = j, y = a.apply(W, A), y;
    }
    function o(j) {
      return p = j, m = setTimeout(h, l), O ? B(j) : y;
    }
    function e(j) {
      var A = j - f, W = j - p, F = l - A;
      return k ? V(F, r - W) : F;
    }
    function n(j) {
      var A = j - f, W = j - p;
      return f === void 0 || A >= l || A < 0 || k && W >= r;
    }
    function h() {
      var j = C();
      if (n(j))
        return _(j);
      m = setTimeout(h, e(j));
    }
    function _(j) {
      return m = void 0, t && w ? B(j) : (w = s = void 0, y);
    }
    function S() {
      m !== void 0 && clearTimeout(m), p = 0, w = f = s = m = void 0;
    }
    function T() {
      return m === void 0 ? y : _(C());
    }
    function P() {
      var j = C(), A = n(j);
      if (w = arguments, s = this, f = j, A) {
        if (m === void 0)
          return o(f);
        if (k)
          return m = setTimeout(h, l), B(f);
      }
      return m === void 0 && (m = setTimeout(h, l)), y;
    }
    return P.cancel = S, P.flush = T, P;
  }
  function I(a) {
    var l = typeof a;
    return !!a && (l == "object" || l == "function");
  }
  function Q(a) {
    return !!a && typeof a == "object";
  }
  function G(a) {
    return typeof a == "symbol" || Q(a) && Z.call(a) == v;
  }
  function q(a) {
    if (typeof a == "number")
      return a;
    if (G(a))
      return u;
    if (I(a)) {
      var l = typeof a.valueOf == "function" ? a.valueOf() : a;
      a = I(l) ? l + "" : l;
    }
    if (typeof a != "string")
      return a === 0 ? a : +a;
    a = a.replace(b, "");
    var c = g.test(a);
    return c || x.test(a) ? L(a.slice(2), c ? 2 : 8) : d.test(a) ? u : +a;
  }
  return xe = J, xe;
}
var Le = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var $e;
function Pe() {
  return $e || ($e = 1, (function(i) {
    (function() {
      var u = {}.hasOwnProperty;
      function v() {
        for (var g = "", x = 0; x < arguments.length; x++) {
          var L = arguments[x];
          L && (g = d(g, b(L)));
        }
        return g;
      }
      function b(g) {
        if (typeof g == "string" || typeof g == "number")
          return g;
        if (typeof g != "object")
          return "";
        if (Array.isArray(g))
          return v.apply(null, g);
        if (g.toString !== Object.prototype.toString && !g.toString.toString().includes("[native code]"))
          return g.toString();
        var x = "";
        for (var L in g)
          u.call(g, L) && g[L] && (x = d(x, L));
        return x;
      }
      function d(g, x) {
        return x ? g ? g + " " + x : g + x : g;
      }
      i.exports ? (v.default = v, i.exports = v) : window.classNames = v;
    })();
  })(Le)), Le.exports;
}
var E = {}, Me = {}, Be;
function rt() {
  return Be || (Be = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var u = v(ue);
    function v(d) {
      return d && d.__esModule ? d : { default: d };
    }
    var b = {
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
    i.default = b;
  })(Me)), Me;
}
var Ye;
function be() {
  if (Ye) return E;
  Ye = 1, Object.defineProperty(E, "__esModule", {
    value: !0
  }), E.checkSpecKeys = E.checkNavigable = E.changeSlide = E.canUseDOM = E.canGoNext = void 0, E.clamp = R, E.extractObject = void 0, E.filterSettings = B, E.validSettings = E.swipeStart = E.swipeMove = E.swipeEnd = E.slidesOnRight = E.slidesOnLeft = E.slideHandler = E.siblingDirection = E.safePreventDefault = E.lazyStartIndex = E.lazySlidesOnRight = E.lazySlidesOnLeft = E.lazyEndIndex = E.keyHandler = E.initializedState = E.getWidth = E.getTrackLeft = E.getTrackCSS = E.getTrackAnimateCSS = E.getTotalSlides = E.getSwipeDirection = E.getSlideCount = E.getRequiredLazySlides = E.getPreClones = E.getPostClones = E.getOnDemandLazySlides = E.getNavigableIndexes = E.getHeight = void 0;
  var i = v(ue), u = v(rt());
  function v(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function b(o) {
    "@babel/helpers - typeof";
    return b = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, b(o);
  }
  function d(o, e) {
    var n = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(o);
      e && (h = h.filter(function(_) {
        return Object.getOwnPropertyDescriptor(o, _).enumerable;
      })), n.push.apply(n, h);
    }
    return n;
  }
  function g(o) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2 ? d(Object(n), !0).forEach(function(h) {
        x(o, h, n[h]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(h) {
        Object.defineProperty(o, h, Object.getOwnPropertyDescriptor(n, h));
      });
    }
    return o;
  }
  function x(o, e, n) {
    return (e = L(e)) in o ? Object.defineProperty(o, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = n, o;
  }
  function L(o) {
    var e = z(o, "string");
    return b(e) == "symbol" ? e : e + "";
  }
  function z(o, e) {
    if (b(o) != "object" || !o) return o;
    var n = o[Symbol.toPrimitive];
    if (n !== void 0) {
      var h = n.call(o, e);
      if (b(h) != "object") return h;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(o);
  }
  function R(o, e, n) {
    return Math.max(e, Math.min(o, n));
  }
  var N = E.safePreventDefault = function(e) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(e._reactName) || e.preventDefault();
  }, K = E.getOnDemandLazySlides = function(e) {
    for (var n = [], h = Z(e), _ = ee(e), S = h; S < _; S++)
      e.lazyLoadedList.indexOf(S) < 0 && n.push(S);
    return n;
  };
  E.getRequiredLazySlides = function(e) {
    for (var n = [], h = Z(e), _ = ee(e), S = h; S < _; S++)
      n.push(S);
    return n;
  };
  var Z = E.lazyStartIndex = function(e) {
    return e.currentSlide - V(e);
  }, ee = E.lazyEndIndex = function(e) {
    return e.currentSlide + C(e);
  }, V = E.lazySlidesOnLeft = function(e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }, C = E.lazySlidesOnRight = function(e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }, J = E.getWidth = function(e) {
    return e && e.offsetWidth || 0;
  }, I = E.getHeight = function(e) {
    return e && e.offsetHeight || 0;
  }, Q = E.getSwipeDirection = function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h, _, S, T;
    return h = e.startX - e.curX, _ = e.startY - e.curY, S = Math.atan2(_, h), T = Math.round(S * 180 / Math.PI), T < 0 && (T = 360 - Math.abs(T)), T <= 45 && T >= 0 || T <= 360 && T >= 315 ? "left" : T >= 135 && T <= 225 ? "right" : n === !0 ? T >= 35 && T <= 135 ? "up" : "down" : "vertical";
  }, G = E.canGoNext = function(e) {
    var n = !0;
    return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (n = !1), n;
  };
  E.extractObject = function(e, n) {
    var h = {};
    return n.forEach(function(_) {
      return h[_] = e[_];
    }), h;
  }, E.initializedState = function(e) {
    var n = i.default.Children.count(e.children), h = e.listRef, _ = Math.ceil(J(h)), S = e.trackRef && e.trackRef.node, T = Math.ceil(J(S)), P;
    if (e.vertical)
      P = _;
    else {
      var j = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding == "string" && e.centerPadding.slice(-1) === "%" && (j *= _ / 100), P = Math.ceil((_ - j) / e.slidesToShow);
    }
    var A = h && I(h.querySelector('[data-index="0"]')), W = A * e.slidesToShow, F = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && (F = n - 1 - e.initialSlide);
    var U = e.lazyLoadedList || [], X = K(g(g({}, e), {}, {
      currentSlide: F,
      lazyLoadedList: U
    }));
    U = U.concat(X);
    var $ = {
      slideCount: n,
      slideWidth: P,
      listWidth: _,
      trackWidth: T,
      currentSlide: F,
      slideHeight: A,
      listHeight: W,
      lazyLoadedList: U
    };
    return e.autoplaying === null && e.autoplay && ($.autoplaying = "playing"), $;
  }, E.slideHandler = function(e) {
    var n = e.waitForAnimate, h = e.animating, _ = e.fade, S = e.infinite, T = e.index, P = e.slideCount, j = e.lazyLoad, A = e.currentSlide, W = e.centerMode, F = e.slidesToScroll, U = e.slidesToShow, X = e.useCSS, $ = e.lazyLoadedList;
    if (n && h) return {};
    var H = T, Y, re, D, te = {}, ne = {}, ie = S ? T : R(T, 0, P - 1);
    if (_) {
      if (!S && (T < 0 || T >= P)) return {};
      T < 0 ? H = T + P : T >= P && (H = T - P), j && $.indexOf(H) < 0 && ($ = $.concat(H)), te = {
        animating: !0,
        currentSlide: H,
        lazyLoadedList: $,
        targetSlide: H
      }, ne = {
        animating: !1,
        targetSlide: H
      };
    } else
      Y = H, H < 0 ? (Y = H + P, S ? P % F !== 0 && (Y = P - P % F) : Y = 0) : !G(e) && H > A ? H = Y = A : W && H >= P ? (H = S ? P : P - 1, Y = S ? 0 : P - 1) : H >= P && (Y = H - P, S ? P % F !== 0 && (Y = 0) : Y = P - U), !S && H + U >= P && (Y = P - U), re = r(g(g({}, e), {}, {
        slideIndex: H
      })), D = r(g(g({}, e), {}, {
        slideIndex: Y
      })), S || (re === D && (H = Y), re = D), j && ($ = $.concat(K(g(g({}, e), {}, {
        currentSlide: H
      })))), X ? (te = {
        animating: !0,
        currentSlide: Y,
        trackStyle: s(g(g({}, e), {}, {
          left: re
        })),
        lazyLoadedList: $,
        targetSlide: ie
      }, ne = {
        animating: !1,
        currentSlide: Y,
        trackStyle: w(g(g({}, e), {}, {
          left: D
        })),
        swipeLeft: null,
        targetSlide: ie
      }) : te = {
        currentSlide: Y,
        trackStyle: w(g(g({}, e), {}, {
          left: D
        })),
        lazyLoadedList: $,
        targetSlide: ie
      };
    return {
      state: te,
      nextState: ne
    };
  }, E.changeSlide = function(e, n) {
    var h, _, S, T, P, j = e.slidesToScroll, A = e.slidesToShow, W = e.slideCount, F = e.currentSlide, U = e.targetSlide, X = e.lazyLoad, $ = e.infinite;
    if (T = W % j !== 0, h = T ? 0 : (W - F) % j, n.message === "previous")
      S = h === 0 ? j : A - h, P = F - S, X && !$ && (_ = F - S, P = _ === -1 ? W - 1 : _), $ || (P = U - j);
    else if (n.message === "next")
      S = h === 0 ? j : h, P = F + S, X && !$ && (P = (F + j) % W + h), $ || (P = U + j);
    else if (n.message === "dots")
      P = n.index * n.slidesToScroll;
    else if (n.message === "children") {
      if (P = n.index, $) {
        var H = p(g(g({}, e), {}, {
          targetSlide: P
        }));
        P > n.currentSlide && H === "left" ? P = P - W : P < n.currentSlide && H === "right" && (P = P + W);
      }
    } else n.message === "index" && (P = Number(n.index));
    return P;
  }, E.keyHandler = function(e, n, h) {
    return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n ? "" : e.keyCode === 37 ? h ? "next" : "previous" : e.keyCode === 39 ? h ? "previous" : "next" : "";
  }, E.swipeStart = function(e, n, h) {
    return e.target.tagName === "IMG" && N(e), !n || !h && e.type.indexOf("mouse") !== -1 ? "" : {
      dragging: !0,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY
      }
    };
  }, E.swipeMove = function(e, n) {
    var h = n.scrolling, _ = n.animating, S = n.vertical, T = n.swipeToSlide, P = n.verticalSwiping, j = n.rtl, A = n.currentSlide, W = n.edgeFriction, F = n.edgeDragged, U = n.onEdge, X = n.swiped, $ = n.swiping, H = n.slideCount, Y = n.slidesToScroll, re = n.infinite, D = n.touchObject, te = n.swipeEvent, ne = n.listHeight, ie = n.listWidth;
    if (!h) {
      if (_) return N(e);
      S && T && P && N(e);
      var oe, le = {}, me = r(n);
      D.curX = e.touches ? e.touches[0].pageX : e.clientX, D.curY = e.touches ? e.touches[0].pageY : e.clientY, D.swipeLength = Math.round(Math.sqrt(Math.pow(D.curX - D.startX, 2)));
      var Ie = Math.round(Math.sqrt(Math.pow(D.curY - D.startY, 2)));
      if (!P && !$ && Ie > 10)
        return {
          scrolling: !0
        };
      P && (D.swipeLength = Ie);
      var de = (j ? -1 : 1) * (D.curX > D.startX ? 1 : -1);
      P && (de = D.curY > D.startY ? 1 : -1);
      var ut = Math.ceil(H / Y), ae = Q(n.touchObject, P), pe = D.swipeLength;
      return re || (A === 0 && (ae === "right" || ae === "down") || A + 1 >= ut && (ae === "left" || ae === "up") || !G(n) && (ae === "left" || ae === "up")) && (pe = D.swipeLength * W, F === !1 && U && (U(ae), le.edgeDragged = !0)), !X && te && (te(ae), le.swiped = !0), S ? oe = me + pe * (ne / ie) * de : j ? oe = me - pe * de : oe = me + pe * de, P && (oe = me + pe * de), le = g(g({}, le), {}, {
        touchObject: D,
        swipeLeft: oe,
        trackStyle: w(g(g({}, n), {}, {
          left: oe
        }))
      }), Math.abs(D.curX - D.startX) < Math.abs(D.curY - D.startY) * 0.8 || D.swipeLength > 10 && (le.swiping = !0, N(e)), le;
    }
  }, E.swipeEnd = function(e, n) {
    var h = n.dragging, _ = n.swipe, S = n.touchObject, T = n.listWidth, P = n.touchThreshold, j = n.verticalSwiping, A = n.listHeight, W = n.swipeToSlide, F = n.scrolling, U = n.onSwipe, X = n.targetSlide, $ = n.currentSlide, H = n.infinite;
    if (!h)
      return _ && N(e), {};
    var Y = j ? A / P : T / P, re = Q(S, j), D = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {}
    };
    if (F || !S.swipeLength)
      return D;
    if (S.swipeLength > Y) {
      N(e), U && U(re);
      var te, ne, ie = H ? $ : X;
      switch (re) {
        case "left":
        case "up":
          ne = ie + l(n), te = W ? a(n, ne) : ne, D.currentDirection = 0;
          break;
        case "right":
        case "down":
          ne = ie - l(n), te = W ? a(n, ne) : ne, D.currentDirection = 1;
          break;
        default:
          te = ie;
      }
      D.triggerSlideHandler = te;
    } else {
      var oe = r(n);
      D.trackStyle = s(g(g({}, n), {}, {
        left: oe
      }));
    }
    return D;
  };
  var q = E.getNavigableIndexes = function(e) {
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, h = e.infinite ? e.slidesToShow * -1 : 0, _ = e.infinite ? e.slidesToShow * -1 : 0, S = []; h < n; )
      S.push(h), h = _ + e.slidesToScroll, _ += Math.min(e.slidesToScroll, e.slidesToShow);
    return S;
  }, a = E.checkNavigable = function(e, n) {
    var h = q(e), _ = 0;
    if (n > h[h.length - 1])
      n = h[h.length - 1];
    else
      for (var S in h) {
        if (n < h[S]) {
          n = _;
          break;
        }
        _ = h[S];
      }
    return n;
  }, l = E.getSlideCount = function(e) {
    var n = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      var h, _ = e.listRef, S = _.querySelectorAll && _.querySelectorAll(".slick-slide") || [];
      if (Array.from(S).every(function(j) {
        if (e.vertical) {
          if (j.offsetTop + I(j) / 2 > e.swipeLeft * -1)
            return h = j, !1;
        } else if (j.offsetLeft - n + J(j) / 2 > e.swipeLeft * -1)
          return h = j, !1;
        return !0;
      }), !h)
        return 0;
      var T = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide, P = Math.abs(h.dataset.index - T) || 1;
      return P;
    } else
      return e.slidesToScroll;
  }, c = E.checkSpecKeys = function(e, n) {
    return n.reduce(function(h, _) {
      return h && e.hasOwnProperty(_);
    }, !0) ? null : console.error("Keys Missing:", e);
  }, w = E.getTrackCSS = function(e) {
    c(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
    var n, h;
    if (!e.vertical)
      n = f(e) * e.slideWidth;
    else {
      var _ = e.unslick ? e.slideCount : e.slideCount + 2 * e.slidesToShow;
      h = _ * e.slideHeight;
    }
    var S = {
      opacity: 1,
      transition: "",
      WebkitTransition: ""
    };
    if (e.useTransform) {
      var T = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", P = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", j = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
      S = g(g({}, S), {}, {
        WebkitTransform: T,
        transform: P,
        msTransform: j
      });
    } else
      e.vertical ? S.top = e.left : S.left = e.left;
    return e.fade && (S = {
      opacity: 1
    }), n && (S.width = n), h && (S.height = h), window && !window.addEventListener && window.attachEvent && (e.vertical ? S.marginTop = e.left + "px" : S.marginLeft = e.left + "px"), S;
  }, s = E.getTrackAnimateCSS = function(e) {
    c(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var n = w(e);
    return e.useTransform ? (n.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, n.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? n.transition = "top " + e.speed + "ms " + e.cssEase : n.transition = "left " + e.speed + "ms " + e.cssEase, n;
  }, r = E.getTrackLeft = function(e) {
    if (e.unslick)
      return 0;
    c(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var n = e.slideIndex, h = e.trackRef, _ = e.infinite, S = e.centerMode, T = e.slideCount, P = e.slidesToShow, j = e.slidesToScroll, A = e.slideWidth, W = e.listWidth, F = e.variableWidth, U = e.slideHeight, X = e.fade, $ = e.vertical, H = 0, Y, re, D = 0;
    if (X || e.slideCount === 1)
      return 0;
    var te = 0;
    if (_ ? (te = -y(e), T % j !== 0 && n + j > T && (te = -(n > T ? P - (n - T) : T % j)), S && (te += parseInt(P / 2))) : (T % j !== 0 && n + j > T && (te = P - T % j), S && (te = parseInt(P / 2))), H = te * A, D = te * U, $ ? Y = n * U * -1 + D : Y = n * A * -1 + H, F === !0) {
      var ne, ie = h && h.node;
      if (ne = n + y(e), re = ie && ie.childNodes[ne], Y = re ? re.offsetLeft * -1 : 0, S === !0) {
        ne = _ ? n + y(e) : n, re = ie && ie.children[ne], Y = 0;
        for (var oe = 0; oe < ne; oe++)
          Y -= ie && ie.children[oe] && ie.children[oe].offsetWidth;
        Y -= parseInt(e.centerPadding), Y += re && (W - re.offsetWidth) / 2;
      }
    }
    return Y;
  }, y = E.getPreClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, m = E.getPostClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, f = E.getTotalSlides = function(e) {
    return e.slideCount === 1 ? 1 : y(e) + e.slideCount + m(e);
  }, p = E.siblingDirection = function(e) {
    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + O(e) ? "left" : "right" : e.targetSlide < e.currentSlide - k(e) ? "right" : "left";
  }, O = E.slidesOnRight = function(e) {
    var n = e.slidesToShow, h = e.centerMode, _ = e.rtl, S = e.centerPadding;
    if (h) {
      var T = (n - 1) / 2 + 1;
      return parseInt(S) > 0 && (T += 1), _ && n % 2 === 0 && (T += 1), T;
    }
    return _ ? 0 : n - 1;
  }, k = E.slidesOnLeft = function(e) {
    var n = e.slidesToShow, h = e.centerMode, _ = e.rtl, S = e.centerPadding;
    if (h) {
      var T = (n - 1) / 2 + 1;
      return parseInt(S) > 0 && (T += 1), !_ && n % 2 === 0 && (T += 1), T;
    }
    return _ ? n - 1 : 0;
  };
  E.canUseDOM = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  };
  var t = E.validSettings = Object.keys(u.default);
  function B(o) {
    return t.reduce(function(e, n) {
      return o.hasOwnProperty(n) && (e[n] = o[n]), e;
    }, {});
  }
  return E;
}
var ye = {}, Ge;
function mt() {
  if (Ge) return ye;
  Ge = 1, Object.defineProperty(ye, "__esModule", {
    value: !0
  }), ye.Track = void 0;
  var i = b(ue), u = b(Pe()), v = be();
  function b(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function d(s) {
    "@babel/helpers - typeof";
    return d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, d(s);
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(s) {
      for (var r = 1; r < arguments.length; r++) {
        var y = arguments[r];
        for (var m in y)
          ({}).hasOwnProperty.call(y, m) && (s[m] = y[m]);
      }
      return s;
    }, g.apply(null, arguments);
  }
  function x(s, r) {
    if (!(s instanceof r)) throw new TypeError("Cannot call a class as a function");
  }
  function L(s, r) {
    for (var y = 0; y < r.length; y++) {
      var m = r[y];
      m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(s, G(m.key), m);
    }
  }
  function z(s, r, y) {
    return r && L(s.prototype, r), Object.defineProperty(s, "prototype", { writable: !1 }), s;
  }
  function R(s, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
    s.prototype = Object.create(r && r.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, "prototype", { writable: !1 }), r && N(s, r);
  }
  function N(s, r) {
    return N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(y, m) {
      return y.__proto__ = m, y;
    }, N(s, r);
  }
  function K(s) {
    var r = V();
    return function() {
      var y, m = C(s);
      if (r) {
        var f = C(this).constructor;
        y = Reflect.construct(m, arguments, f);
      } else y = m.apply(this, arguments);
      return Z(this, y);
    };
  }
  function Z(s, r) {
    if (r && (d(r) == "object" || typeof r == "function")) return r;
    if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return ee(s);
  }
  function ee(s) {
    if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s;
  }
  function V() {
    try {
      var s = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (V = function() {
      return !!s;
    })();
  }
  function C(s) {
    return C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, C(s);
  }
  function J(s, r) {
    var y = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
      var m = Object.getOwnPropertySymbols(s);
      r && (m = m.filter(function(f) {
        return Object.getOwnPropertyDescriptor(s, f).enumerable;
      })), y.push.apply(y, m);
    }
    return y;
  }
  function I(s) {
    for (var r = 1; r < arguments.length; r++) {
      var y = arguments[r] != null ? arguments[r] : {};
      r % 2 ? J(Object(y), !0).forEach(function(m) {
        Q(s, m, y[m]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(y)) : J(Object(y)).forEach(function(m) {
        Object.defineProperty(s, m, Object.getOwnPropertyDescriptor(y, m));
      });
    }
    return s;
  }
  function Q(s, r, y) {
    return (r = G(r)) in s ? Object.defineProperty(s, r, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : s[r] = y, s;
  }
  function G(s) {
    var r = q(s, "string");
    return d(r) == "symbol" ? r : r + "";
  }
  function q(s, r) {
    if (d(s) != "object" || !s) return s;
    var y = s[Symbol.toPrimitive];
    if (y !== void 0) {
      var m = y.call(s, r);
      if (d(m) != "object") return m;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(s);
  }
  var a = function(r) {
    var y, m, f, p, O;
    r.rtl ? O = r.slideCount - 1 - r.index : O = r.index, f = O < 0 || O >= r.slideCount, r.centerMode ? (p = Math.floor(r.slidesToShow / 2), m = (O - r.currentSlide) % r.slideCount === 0, O > r.currentSlide - p - 1 && O <= r.currentSlide + p && (y = !0)) : y = r.currentSlide <= O && O < r.currentSlide + r.slidesToShow;
    var k;
    r.targetSlide < 0 ? k = r.targetSlide + r.slideCount : r.targetSlide >= r.slideCount ? k = r.targetSlide - r.slideCount : k = r.targetSlide;
    var t = O === k;
    return {
      "slick-slide": !0,
      "slick-active": y,
      "slick-center": m,
      "slick-cloned": f,
      "slick-current": t
      // dubious in case of RTL
    };
  }, l = function(r) {
    var y = {};
    return (r.variableWidth === void 0 || r.variableWidth === !1) && (y.width = r.slideWidth), r.fade && (y.position = "relative", r.vertical ? y.top = -r.index * parseInt(r.slideHeight) : y.left = -r.index * parseInt(r.slideWidth), y.opacity = r.currentSlide === r.index ? 1 : 0, y.zIndex = r.currentSlide === r.index ? 999 : 998, r.useCSS && (y.transition = "opacity " + r.speed + "ms " + r.cssEase + ", visibility " + r.speed + "ms " + r.cssEase)), y;
  }, c = function(r, y) {
    return r.key || y;
  }, w = function(r) {
    var y, m = [], f = [], p = [], O = i.default.Children.count(r.children), k = (0, v.lazyStartIndex)(r), t = (0, v.lazyEndIndex)(r);
    return i.default.Children.forEach(r.children, function(B, o) {
      var e, n = {
        message: "children",
        index: o,
        slidesToScroll: r.slidesToScroll,
        currentSlide: r.currentSlide
      };
      !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(o) >= 0 ? e = B : e = /* @__PURE__ */ i.default.createElement("div", null);
      var h = l(I(I({}, r), {}, {
        index: o
      })), _ = e.props.className || "", S = a(I(I({}, r), {}, {
        index: o
      }));
      if (m.push(/* @__PURE__ */ i.default.cloneElement(e, {
        key: "original" + c(e, o),
        "data-index": o,
        className: (0, u.default)(S, _),
        tabIndex: "-1",
        "aria-hidden": !S["slick-active"],
        style: I(I({
          outline: "none"
        }, e.props.style || {}), h),
        onClick: function(j) {
          e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
        }
      })), r.infinite && O > 1 && r.fade === !1 && !r.unslick) {
        var T = O - o;
        T <= (0, v.getPreClones)(r) && (y = -T, y >= k && (e = B), S = a(I(I({}, r), {}, {
          index: y
        })), f.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "precloned" + c(e, y),
          "data-index": y,
          tabIndex: "-1",
          className: (0, u.default)(S, _),
          "aria-hidden": !S["slick-active"],
          style: I(I({}, e.props.style || {}), h),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        }))), o < (0, v.getPostClones)(r) && (y = O + o, y < t && (e = B), S = a(I(I({}, r), {}, {
          index: y
        })), p.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "postcloned" + c(e, y),
          "data-index": y,
          tabIndex: "-1",
          className: (0, u.default)(S, _),
          "aria-hidden": !S["slick-active"],
          style: I(I({}, e.props.style || {}), h),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        })));
      }
    }), r.rtl ? f.concat(m, p).reverse() : f.concat(m, p);
  };
  return ye.Track = /* @__PURE__ */ (function(s) {
    R(y, s);
    var r = K(y);
    function y() {
      var m;
      x(this, y);
      for (var f = arguments.length, p = new Array(f), O = 0; O < f; O++)
        p[O] = arguments[O];
      return m = r.call.apply(r, [this].concat(p)), Q(ee(m), "node", null), Q(ee(m), "handleRef", function(k) {
        m.node = k;
      }), m;
    }
    return z(y, [{
      key: "render",
      value: function() {
        var f = w(this.props), p = this.props, O = p.onMouseEnter, k = p.onMouseOver, t = p.onMouseLeave, B = {
          onMouseEnter: O,
          onMouseOver: k,
          onMouseLeave: t
        };
        return /* @__PURE__ */ i.default.createElement("div", g({
          ref: this.handleRef,
          className: "slick-track",
          style: this.props.trackStyle
        }, B), f);
      }
    }]), y;
  })(i.default.PureComponent), ye;
}
var ge = {}, Xe;
function St() {
  if (Xe) return ge;
  Xe = 1;
  function i(a) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
      return typeof l;
    } : function(l) {
      return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
    }, i(a);
  }
  Object.defineProperty(ge, "__esModule", {
    value: !0
  }), ge.Dots = void 0;
  var u = d(ue), v = d(Pe()), b = be();
  function d(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function g(a, l) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var w = Object.getOwnPropertySymbols(a);
      l && (w = w.filter(function(s) {
        return Object.getOwnPropertyDescriptor(a, s).enumerable;
      })), c.push.apply(c, w);
    }
    return c;
  }
  function x(a) {
    for (var l = 1; l < arguments.length; l++) {
      var c = arguments[l] != null ? arguments[l] : {};
      l % 2 ? g(Object(c), !0).forEach(function(w) {
        L(a, w, c[w]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : g(Object(c)).forEach(function(w) {
        Object.defineProperty(a, w, Object.getOwnPropertyDescriptor(c, w));
      });
    }
    return a;
  }
  function L(a, l, c) {
    return (l = K(l)) in a ? Object.defineProperty(a, l, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : a[l] = c, a;
  }
  function z(a, l) {
    if (!(a instanceof l)) throw new TypeError("Cannot call a class as a function");
  }
  function R(a, l) {
    for (var c = 0; c < l.length; c++) {
      var w = l[c];
      w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(a, K(w.key), w);
    }
  }
  function N(a, l, c) {
    return l && R(a.prototype, l), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function K(a) {
    var l = Z(a, "string");
    return i(l) == "symbol" ? l : l + "";
  }
  function Z(a, l) {
    if (i(a) != "object" || !a) return a;
    var c = a[Symbol.toPrimitive];
    if (c !== void 0) {
      var w = c.call(a, l);
      if (i(w) != "object") return w;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  function ee(a, l) {
    if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(l && l.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), l && V(a, l);
  }
  function V(a, l) {
    return V = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, w) {
      return c.__proto__ = w, c;
    }, V(a, l);
  }
  function C(a) {
    var l = Q();
    return function() {
      var c, w = G(a);
      if (l) {
        var s = G(this).constructor;
        c = Reflect.construct(w, arguments, s);
      } else c = w.apply(this, arguments);
      return J(this, c);
    };
  }
  function J(a, l) {
    if (l && (i(l) == "object" || typeof l == "function")) return l;
    if (l !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return I(a);
  }
  function I(a) {
    if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a;
  }
  function Q() {
    try {
      var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (Q = function() {
      return !!a;
    })();
  }
  function G(a) {
    return G = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(l) {
      return l.__proto__ || Object.getPrototypeOf(l);
    }, G(a);
  }
  var q = function(l) {
    var c;
    return l.infinite ? c = Math.ceil(l.slideCount / l.slidesToScroll) : c = Math.ceil((l.slideCount - l.slidesToShow) / l.slidesToScroll) + 1, c;
  };
  return ge.Dots = /* @__PURE__ */ (function(a) {
    ee(c, a);
    var l = C(c);
    function c() {
      return z(this, c), l.apply(this, arguments);
    }
    return N(c, [{
      key: "clickHandler",
      value: function(s, r) {
        r.preventDefault(), this.props.clickHandler(s);
      }
    }, {
      key: "render",
      value: function() {
        for (var s = this.props, r = s.onMouseEnter, y = s.onMouseOver, m = s.onMouseLeave, f = s.infinite, p = s.slidesToScroll, O = s.slidesToShow, k = s.slideCount, t = s.currentSlide, B = q({
          slideCount: k,
          slidesToScroll: p,
          slidesToShow: O,
          infinite: f
        }), o = {
          onMouseEnter: r,
          onMouseOver: y,
          onMouseLeave: m
        }, e = [], n = 0; n < B; n++) {
          var h = (n + 1) * p - 1, _ = f ? h : (0, b.clamp)(h, 0, k - 1), S = _ - (p - 1), T = f ? S : (0, b.clamp)(S, 0, k - 1), P = (0, v.default)({
            "slick-active": f ? t >= T && t <= _ : t === T
          }), j = {
            message: "dots",
            index: n,
            slidesToScroll: p,
            currentSlide: t
          }, A = this.clickHandler.bind(this, j);
          e = e.concat(/* @__PURE__ */ u.default.createElement("li", {
            key: n,
            className: P
          }, /* @__PURE__ */ u.default.cloneElement(this.props.customPaging(n), {
            onClick: A
          })));
        }
        return /* @__PURE__ */ u.default.cloneElement(this.props.appendDots(e), x({
          className: this.props.dotsClass
        }, o));
      }
    }]), c;
  })(u.default.PureComponent), ge;
}
var se = {}, Ke;
function wt() {
  if (Ke) return se;
  Ke = 1;
  function i(a) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
      return typeof l;
    } : function(l) {
      return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
    }, i(a);
  }
  Object.defineProperty(se, "__esModule", {
    value: !0
  }), se.PrevArrow = se.NextArrow = void 0;
  var u = d(ue), v = d(Pe()), b = be();
  function d(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(a) {
      for (var l = 1; l < arguments.length; l++) {
        var c = arguments[l];
        for (var w in c)
          ({}).hasOwnProperty.call(c, w) && (a[w] = c[w]);
      }
      return a;
    }, g.apply(null, arguments);
  }
  function x(a, l) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var w = Object.getOwnPropertySymbols(a);
      l && (w = w.filter(function(s) {
        return Object.getOwnPropertyDescriptor(a, s).enumerable;
      })), c.push.apply(c, w);
    }
    return c;
  }
  function L(a) {
    for (var l = 1; l < arguments.length; l++) {
      var c = arguments[l] != null ? arguments[l] : {};
      l % 2 ? x(Object(c), !0).forEach(function(w) {
        z(a, w, c[w]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : x(Object(c)).forEach(function(w) {
        Object.defineProperty(a, w, Object.getOwnPropertyDescriptor(c, w));
      });
    }
    return a;
  }
  function z(a, l, c) {
    return (l = Z(l)) in a ? Object.defineProperty(a, l, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : a[l] = c, a;
  }
  function R(a, l) {
    if (!(a instanceof l)) throw new TypeError("Cannot call a class as a function");
  }
  function N(a, l) {
    for (var c = 0; c < l.length; c++) {
      var w = l[c];
      w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(a, Z(w.key), w);
    }
  }
  function K(a, l, c) {
    return l && N(a.prototype, l), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function Z(a) {
    var l = ee(a, "string");
    return i(l) == "symbol" ? l : l + "";
  }
  function ee(a, l) {
    if (i(a) != "object" || !a) return a;
    var c = a[Symbol.toPrimitive];
    if (c !== void 0) {
      var w = c.call(a, l);
      if (i(w) != "object") return w;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  function V(a, l) {
    if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(l && l.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), l && C(a, l);
  }
  function C(a, l) {
    return C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, w) {
      return c.__proto__ = w, c;
    }, C(a, l);
  }
  function J(a) {
    var l = G();
    return function() {
      var c, w = q(a);
      if (l) {
        var s = q(this).constructor;
        c = Reflect.construct(w, arguments, s);
      } else c = w.apply(this, arguments);
      return I(this, c);
    };
  }
  function I(a, l) {
    if (l && (i(l) == "object" || typeof l == "function")) return l;
    if (l !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Q(a);
  }
  function Q(a) {
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
  function q(a) {
    return q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(l) {
      return l.__proto__ || Object.getPrototypeOf(l);
    }, q(a);
  }
  return se.PrevArrow = /* @__PURE__ */ (function(a) {
    V(c, a);
    var l = J(c);
    function c() {
      return R(this, c), l.apply(this, arguments);
    }
    return K(c, [{
      key: "clickHandler",
      value: function(s, r) {
        r && r.preventDefault(), this.props.clickHandler(s, r);
      }
    }, {
      key: "render",
      value: function() {
        var s = {
          "slick-arrow": !0,
          "slick-prev": !0
        }, r = this.clickHandler.bind(this, {
          message: "previous"
        });
        !this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow) && (s["slick-disabled"] = !0, r = null);
        var y = {
          key: "0",
          "data-role": "none",
          className: (0, v.default)(s),
          style: {
            display: "block"
          },
          onClick: r
        }, m = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, f;
        return this.props.prevArrow ? f = /* @__PURE__ */ u.default.cloneElement(this.props.prevArrow, L(L({}, y), m)) : f = /* @__PURE__ */ u.default.createElement("button", g({
          key: "0",
          type: "button"
        }, y), " ", "Previous"), f;
      }
    }]), c;
  })(u.default.PureComponent), se.NextArrow = /* @__PURE__ */ (function(a) {
    V(c, a);
    var l = J(c);
    function c() {
      return R(this, c), l.apply(this, arguments);
    }
    return K(c, [{
      key: "clickHandler",
      value: function(s, r) {
        r && r.preventDefault(), this.props.clickHandler(s, r);
      }
    }, {
      key: "render",
      value: function() {
        var s = {
          "slick-arrow": !0,
          "slick-next": !0
        }, r = this.clickHandler.bind(this, {
          message: "next"
        });
        (0, b.canGoNext)(this.props) || (s["slick-disabled"] = !0, r = null);
        var y = {
          key: "1",
          "data-role": "none",
          className: (0, v.default)(s),
          style: {
            display: "block"
          },
          onClick: r
        }, m = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, f;
        return this.props.nextArrow ? f = /* @__PURE__ */ u.default.cloneElement(this.props.nextArrow, L(L({}, y), m)) : f = /* @__PURE__ */ u.default.createElement("button", g({
          key: "1",
          type: "button"
        }, y), " ", "Next"), f;
      }
    }]), c;
  })(u.default.PureComponent), se;
}
var nt = (function() {
  if (typeof Map < "u")
    return Map;
  function i(u, v) {
    var b = -1;
    return u.some(function(d, g) {
      return d[0] === v ? (b = g, !0) : !1;
    }), b;
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
      }), u.prototype.get = function(v) {
        var b = i(this.__entries__, v), d = this.__entries__[b];
        return d && d[1];
      }, u.prototype.set = function(v, b) {
        var d = i(this.__entries__, v);
        ~d ? this.__entries__[d][1] = b : this.__entries__.push([v, b]);
      }, u.prototype.delete = function(v) {
        var b = this.__entries__, d = i(b, v);
        ~d && b.splice(d, 1);
      }, u.prototype.has = function(v) {
        return !!~i(this.__entries__, v);
      }, u.prototype.clear = function() {
        this.__entries__.splice(0);
      }, u.prototype.forEach = function(v, b) {
        b === void 0 && (b = null);
        for (var d = 0, g = this.__entries__; d < g.length; d++) {
          var x = g[d];
          v.call(b, x[1], x[0]);
        }
      }, u;
    })()
  );
})(), Ne = typeof window < "u" && typeof document < "u" && window.document === document, _e = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), Ot = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(_e) : function(i) {
    return setTimeout(function() {
      return i(Date.now());
    }, 1e3 / 60);
  };
})(), _t = 2;
function kt(i, u) {
  var v = !1, b = !1, d = 0;
  function g() {
    v && (v = !1, i()), b && L();
  }
  function x() {
    Ot(g);
  }
  function L() {
    var z = Date.now();
    if (v) {
      if (z - d < _t)
        return;
      b = !0;
    } else
      v = !0, b = !1, setTimeout(x, u);
    d = z;
  }
  return L;
}
var Pt = 20, Ct = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Tt = typeof MutationObserver < "u", jt = (
  /** @class */
  (function() {
    function i() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = kt(this.refresh.bind(this), Pt);
    }
    return i.prototype.addObserver = function(u) {
      ~this.observers_.indexOf(u) || this.observers_.push(u), this.connected_ || this.connect_();
    }, i.prototype.removeObserver = function(u) {
      var v = this.observers_, b = v.indexOf(u);
      ~b && v.splice(b, 1), !v.length && this.connected_ && this.disconnect_();
    }, i.prototype.refresh = function() {
      var u = this.updateObservers_();
      u && this.refresh();
    }, i.prototype.updateObservers_ = function() {
      var u = this.observers_.filter(function(v) {
        return v.gatherActive(), v.hasActive();
      });
      return u.forEach(function(v) {
        return v.broadcastActive();
      }), u.length > 0;
    }, i.prototype.connect_ = function() {
      !Ne || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Tt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, i.prototype.disconnect_ = function() {
      !Ne || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, i.prototype.onTransitionEnd_ = function(u) {
      var v = u.propertyName, b = v === void 0 ? "" : v, d = Ct.some(function(g) {
        return !!~b.indexOf(g);
      });
      d && this.refresh();
    }, i.getInstance = function() {
      return this.instance_ || (this.instance_ = new i()), this.instance_;
    }, i.instance_ = null, i;
  })()
), it = (function(i, u) {
  for (var v = 0, b = Object.keys(u); v < b.length; v++) {
    var d = b[v];
    Object.defineProperty(i, d, {
      value: u[d],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return i;
}), fe = (function(i) {
  var u = i && i.ownerDocument && i.ownerDocument.defaultView;
  return u || _e;
}), ot = Ce(0, 0, 0, 0);
function ke(i) {
  return parseFloat(i) || 0;
}
function Ve(i) {
  for (var u = [], v = 1; v < arguments.length; v++)
    u[v - 1] = arguments[v];
  return u.reduce(function(b, d) {
    var g = i["border-" + d + "-width"];
    return b + ke(g);
  }, 0);
}
function Et(i) {
  for (var u = ["top", "right", "bottom", "left"], v = {}, b = 0, d = u; b < d.length; b++) {
    var g = d[b], x = i["padding-" + g];
    v[g] = ke(x);
  }
  return v;
}
function xt(i) {
  var u = i.getBBox();
  return Ce(0, 0, u.width, u.height);
}
function Lt(i) {
  var u = i.clientWidth, v = i.clientHeight;
  if (!u && !v)
    return ot;
  var b = fe(i).getComputedStyle(i), d = Et(b), g = d.left + d.right, x = d.top + d.bottom, L = ke(b.width), z = ke(b.height);
  if (b.boxSizing === "border-box" && (Math.round(L + g) !== u && (L -= Ve(b, "left", "right") + g), Math.round(z + x) !== v && (z -= Ve(b, "top", "bottom") + x)), !Rt(i)) {
    var R = Math.round(L + g) - u, N = Math.round(z + x) - v;
    Math.abs(R) !== 1 && (L -= R), Math.abs(N) !== 1 && (z -= N);
  }
  return Ce(d.left, d.top, L, z);
}
var Mt = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(i) {
    return i instanceof fe(i).SVGGraphicsElement;
  } : function(i) {
    return i instanceof fe(i).SVGElement && typeof i.getBBox == "function";
  };
})();
function Rt(i) {
  return i === fe(i).document.documentElement;
}
function zt(i) {
  return Ne ? Mt(i) ? xt(i) : Lt(i) : ot;
}
function Nt(i) {
  var u = i.x, v = i.y, b = i.width, d = i.height, g = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, x = Object.create(g.prototype);
  return it(x, {
    x: u,
    y: v,
    width: b,
    height: d,
    top: v,
    right: u + b,
    bottom: d + v,
    left: u
  }), x;
}
function Ce(i, u, v, b) {
  return { x: i, y: u, width: v, height: b };
}
var Dt = (
  /** @class */
  (function() {
    function i(u) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ce(0, 0, 0, 0), this.target = u;
    }
    return i.prototype.isActive = function() {
      var u = zt(this.target);
      return this.contentRect_ = u, u.width !== this.broadcastWidth || u.height !== this.broadcastHeight;
    }, i.prototype.broadcastRect = function() {
      var u = this.contentRect_;
      return this.broadcastWidth = u.width, this.broadcastHeight = u.height, u;
    }, i;
  })()
), Ht = (
  /** @class */
  /* @__PURE__ */ (function() {
    function i(u, v) {
      var b = Nt(v);
      it(this, { target: u, contentRect: b });
    }
    return i;
  })()
), It = (
  /** @class */
  (function() {
    function i(u, v, b) {
      if (this.activeObservations_ = [], this.observations_ = new nt(), typeof u != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = u, this.controller_ = v, this.callbackCtx_ = b;
    }
    return i.prototype.observe = function(u) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(u instanceof fe(u).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var v = this.observations_;
        v.has(u) || (v.set(u, new Dt(u)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, i.prototype.unobserve = function(u) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(u instanceof fe(u).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var v = this.observations_;
        v.has(u) && (v.delete(u), v.size || this.controller_.removeObserver(this));
      }
    }, i.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, i.prototype.gatherActive = function() {
      var u = this;
      this.clearActive(), this.observations_.forEach(function(v) {
        v.isActive() && u.activeObservations_.push(v);
      });
    }, i.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var u = this.callbackCtx_, v = this.activeObservations_.map(function(b) {
          return new Ht(b.target, b.broadcastRect());
        });
        this.callback_.call(u, v, u), this.clearActive();
      }
    }, i.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, i.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, i;
  })()
), at = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new nt(), lt = (
  /** @class */
  /* @__PURE__ */ (function() {
    function i(u) {
      if (!(this instanceof i))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var v = jt.getInstance(), b = new It(u, v, this);
      at.set(this, b);
    }
    return i;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(i) {
  lt.prototype[i] = function() {
    var u;
    return (u = at.get(this))[i].apply(u, arguments);
  };
});
var At = (function() {
  return typeof _e.ResizeObserver < "u" ? _e.ResizeObserver : lt;
})();
const Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: At
}, Symbol.toStringTag, { value: "Module" })), qt = /* @__PURE__ */ yt(Wt);
var Ue;
function Ft() {
  if (Ue) return he;
  Ue = 1, Object.defineProperty(he, "__esModule", {
    value: !0
  }), he.InnerSlider = void 0;
  var i = R(ue), u = R(gt()), v = R(bt()), b = R(Pe()), d = be(), g = mt(), x = St(), L = wt(), z = R(qt);
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
  function K() {
    return K = Object.assign ? Object.assign.bind() : function(f) {
      for (var p = 1; p < arguments.length; p++) {
        var O = arguments[p];
        for (var k in O)
          ({}).hasOwnProperty.call(O, k) && (f[k] = O[k]);
      }
      return f;
    }, K.apply(null, arguments);
  }
  function Z(f, p) {
    if (f == null) return {};
    var O, k, t = ee(f, p);
    if (Object.getOwnPropertySymbols) {
      var B = Object.getOwnPropertySymbols(f);
      for (k = 0; k < B.length; k++)
        O = B[k], p.includes(O) || {}.propertyIsEnumerable.call(f, O) && (t[O] = f[O]);
    }
    return t;
  }
  function ee(f, p) {
    if (f == null) return {};
    var O = {};
    for (var k in f)
      if ({}.hasOwnProperty.call(f, k)) {
        if (p.includes(k)) continue;
        O[k] = f[k];
      }
    return O;
  }
  function V(f, p) {
    var O = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(f);
      p && (k = k.filter(function(t) {
        return Object.getOwnPropertyDescriptor(f, t).enumerable;
      })), O.push.apply(O, k);
    }
    return O;
  }
  function C(f) {
    for (var p = 1; p < arguments.length; p++) {
      var O = arguments[p] != null ? arguments[p] : {};
      p % 2 ? V(Object(O), !0).forEach(function(k) {
        r(f, k, O[k]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(O)) : V(Object(O)).forEach(function(k) {
        Object.defineProperty(f, k, Object.getOwnPropertyDescriptor(O, k));
      });
    }
    return f;
  }
  function J(f, p) {
    if (!(f instanceof p)) throw new TypeError("Cannot call a class as a function");
  }
  function I(f, p) {
    for (var O = 0; O < p.length; O++) {
      var k = p[O];
      k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(f, y(k.key), k);
    }
  }
  function Q(f, p, O) {
    return p && I(f.prototype, p), Object.defineProperty(f, "prototype", { writable: !1 }), f;
  }
  function G(f, p) {
    if (typeof p != "function" && p !== null) throw new TypeError("Super expression must either be null or a function");
    f.prototype = Object.create(p && p.prototype, { constructor: { value: f, writable: !0, configurable: !0 } }), Object.defineProperty(f, "prototype", { writable: !1 }), p && q(f, p);
  }
  function q(f, p) {
    return q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(O, k) {
      return O.__proto__ = k, O;
    }, q(f, p);
  }
  function a(f) {
    var p = w();
    return function() {
      var O, k = s(f);
      if (p) {
        var t = s(this).constructor;
        O = Reflect.construct(k, arguments, t);
      } else O = k.apply(this, arguments);
      return l(this, O);
    };
  }
  function l(f, p) {
    if (p && (N(p) == "object" || typeof p == "function")) return p;
    if (p !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return c(f);
  }
  function c(f) {
    if (f === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return f;
  }
  function w() {
    try {
      var f = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (w = function() {
      return !!f;
    })();
  }
  function s(f) {
    return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(p) {
      return p.__proto__ || Object.getPrototypeOf(p);
    }, s(f);
  }
  function r(f, p, O) {
    return (p = y(p)) in f ? Object.defineProperty(f, p, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : f[p] = O, f;
  }
  function y(f) {
    var p = m(f, "string");
    return N(p) == "symbol" ? p : p + "";
  }
  function m(f, p) {
    if (N(f) != "object" || !f) return f;
    var O = f[Symbol.toPrimitive];
    if (O !== void 0) {
      var k = O.call(f, p);
      if (N(k) != "object") return k;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (p === "string" ? String : Number)(f);
  }
  return he.InnerSlider = /* @__PURE__ */ (function(f) {
    G(O, f);
    var p = a(O);
    function O(k) {
      var t;
      J(this, O), t = p.call(this, k), r(c(t), "listRefHandler", function(o) {
        return t.list = o;
      }), r(c(t), "trackRefHandler", function(o) {
        return t.track = o;
      }), r(c(t), "adaptHeight", function() {
        if (t.props.adaptiveHeight && t.list) {
          var o = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
          t.list.style.height = (0, d.getHeight)(o) + "px";
        }
      }), r(c(t), "componentDidMount", function() {
        if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
          var o = (0, d.getOnDemandLazySlides)(C(C({}, t.props), t.state));
          o.length > 0 && (t.setState(function(n) {
            return {
              lazyLoadedList: n.lazyLoadedList.concat(o)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(o));
        }
        var e = C({
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
      }), r(c(t), "componentWillUnmount", function() {
        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach(function(o) {
          return clearTimeout(o);
        }), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
      }), r(c(t), "componentDidUpdate", function(o) {
        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
          var e = (0, d.getOnDemandLazySlides)(C(C({}, t.props), t.state));
          e.length > 0 && (t.setState(function(_) {
            return {
              lazyLoadedList: _.lazyLoadedList.concat(e)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(e));
        }
        t.adaptHeight();
        var n = C(C({
          listRef: t.list,
          trackRef: t.track
        }, t.props), t.state), h = t.didPropsChange(o);
        h && t.updateState(n, h, function() {
          t.state.currentSlide >= i.default.Children.count(t.props.children) && t.changeSlide({
            message: "index",
            index: i.default.Children.count(t.props.children) - t.props.slidesToShow,
            currentSlide: t.state.currentSlide
          }), t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
        });
      }), r(c(t), "onWindowResized", function(o) {
        t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, v.default)(function() {
          return t.resizeWindow(o);
        }, 50), t.debouncedResize();
      }), r(c(t), "resizeWindow", function() {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = !!(t.track && t.track.node);
        if (e) {
          var n = C(C({
            listRef: t.list,
            trackRef: t.track
          }, t.props), t.state);
          t.updateState(n, o, function() {
            t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
          }), t.setState({
            animating: !1
          }), clearTimeout(t.animationEndCallback), delete t.animationEndCallback;
        }
      }), r(c(t), "updateState", function(o, e, n) {
        var h = (0, d.initializedState)(o);
        o = C(C(C({}, o), h), {}, {
          slideIndex: h.currentSlide
        });
        var _ = (0, d.getTrackLeft)(o);
        o = C(C({}, o), {}, {
          left: _
        });
        var S = (0, d.getTrackCSS)(o);
        (e || i.default.Children.count(t.props.children) !== i.default.Children.count(o.children)) && (h.trackStyle = S), t.setState(h, n);
      }), r(c(t), "ssrInit", function() {
        if (t.props.variableWidth) {
          var o = 0, e = 0, n = [], h = (0, d.getPreClones)(C(C(C({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          })), _ = (0, d.getPostClones)(C(C(C({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          }));
          t.props.children.forEach(function(re) {
            n.push(re.props.style.width), o += re.props.style.width;
          });
          for (var S = 0; S < h; S++)
            e += n[n.length - 1 - S], o += n[n.length - 1 - S];
          for (var T = 0; T < _; T++)
            o += n[T];
          for (var P = 0; P < t.state.currentSlide; P++)
            e += n[P];
          var j = {
            width: o + "px",
            left: -e + "px"
          };
          if (t.props.centerMode) {
            var A = "".concat(n[t.state.currentSlide], "px");
            j.left = "calc(".concat(j.left, " + (100% - ").concat(A, ") / 2 ) ");
          }
          return {
            trackStyle: j
          };
        }
        var W = i.default.Children.count(t.props.children), F = C(C(C({}, t.props), t.state), {}, {
          slideCount: W
        }), U = (0, d.getPreClones)(F) + (0, d.getPostClones)(F) + W, X = 100 / t.props.slidesToShow * U, $ = 100 / U, H = -$ * ((0, d.getPreClones)(F) + t.state.currentSlide) * X / 100;
        t.props.centerMode && (H += (100 - $ * X / 100) / 2);
        var Y = {
          width: X + "%",
          left: H + "%"
        };
        return {
          slideWidth: $ + "%",
          trackStyle: Y
        };
      }), r(c(t), "checkImagesLoad", function() {
        var o = t.list && t.list.querySelectorAll && t.list.querySelectorAll(".slick-slide img") || [], e = o.length, n = 0;
        Array.prototype.forEach.call(o, function(h) {
          var _ = function() {
            return ++n && n >= e && t.onWindowResized();
          };
          if (!h.onclick)
            h.onclick = function() {
              return h.parentNode.focus();
            };
          else {
            var S = h.onclick;
            h.onclick = function(T) {
              S(T), h.parentNode.focus();
            };
          }
          h.onload || (t.props.lazyLoad ? h.onload = function() {
            t.adaptHeight(), t.callbackTimers.push(setTimeout(t.onWindowResized, t.props.speed));
          } : (h.onload = _, h.onerror = function() {
            _(), t.props.onLazyLoadError && t.props.onLazyLoadError();
          }));
        });
      }), r(c(t), "progressiveLazyLoad", function() {
        for (var o = [], e = C(C({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, d.getPostClones)(e); n++)
          if (t.state.lazyLoadedList.indexOf(n) < 0) {
            o.push(n);
            break;
          }
        for (var h = t.state.currentSlide - 1; h >= -(0, d.getPreClones)(e); h--)
          if (t.state.lazyLoadedList.indexOf(h) < 0) {
            o.push(h);
            break;
          }
        o.length > 0 ? (t.setState(function(_) {
          return {
            lazyLoadedList: _.lazyLoadedList.concat(o)
          };
        }), t.props.onLazyLoad && t.props.onLazyLoad(o)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
      }), r(c(t), "slideHandler", function(o) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = t.props, h = n.asNavFor, _ = n.beforeChange, S = n.onLazyLoad, T = n.speed, P = n.afterChange, j = t.state.currentSlide, A = (0, d.slideHandler)(C(C(C({
          index: o
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e
        })), W = A.state, F = A.nextState;
        if (W) {
          _ && _(j, W.currentSlide);
          var U = W.lazyLoadedList.filter(function(X) {
            return t.state.lazyLoadedList.indexOf(X) < 0;
          });
          S && U.length > 0 && S(U), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), P && P(j), delete t.animationEndCallback), t.setState(W, function() {
            h && t.asNavForIndex !== o && (t.asNavForIndex = o, h.innerSlider.slideHandler(o)), F && (t.animationEndCallback = setTimeout(function() {
              var X = F.animating, $ = Z(F, ["animating"]);
              t.setState($, function() {
                t.callbackTimers.push(setTimeout(function() {
                  return t.setState({
                    animating: X
                  });
                }, 10)), P && P(W.currentSlide), delete t.animationEndCallback;
              });
            }, T));
          });
        }
      }), r(c(t), "changeSlide", function(o) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = C(C({}, t.props), t.state), h = (0, d.changeSlide)(n, o);
        if (!(h !== 0 && !h) && (e === !0 ? t.slideHandler(h, e) : t.slideHandler(h), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
          var _ = t.list.querySelectorAll(".slick-current");
          _[0] && _[0].focus();
        }
      }), r(c(t), "clickHandler", function(o) {
        t.clickable === !1 && (o.stopPropagation(), o.preventDefault()), t.clickable = !0;
      }), r(c(t), "keyHandler", function(o) {
        var e = (0, d.keyHandler)(o, t.props.accessibility, t.props.rtl);
        e !== "" && t.changeSlide({
          message: e
        });
      }), r(c(t), "selectHandler", function(o) {
        t.changeSlide(o);
      }), r(c(t), "disableBodyScroll", function() {
        var o = function(n) {
          n = n || window.event, n.preventDefault && n.preventDefault(), n.returnValue = !1;
        };
        window.ontouchmove = o;
      }), r(c(t), "enableBodyScroll", function() {
        window.ontouchmove = null;
      }), r(c(t), "swipeStart", function(o) {
        t.props.verticalSwiping && t.disableBodyScroll();
        var e = (0, d.swipeStart)(o, t.props.swipe, t.props.draggable);
        e !== "" && t.setState(e);
      }), r(c(t), "swipeMove", function(o) {
        var e = (0, d.swipeMove)(o, C(C(C({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(c(t), "swipeEnd", function(o) {
        var e = (0, d.swipeEnd)(o, C(C(C({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        if (e) {
          var n = e.triggerSlideHandler;
          delete e.triggerSlideHandler, t.setState(e), n !== void 0 && (t.slideHandler(n), t.props.verticalSwiping && t.enableBodyScroll());
        }
      }), r(c(t), "touchEnd", function(o) {
        t.swipeEnd(o), t.clickable = !0;
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
      }), r(c(t), "slickGoTo", function(o) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (o = Number(o), isNaN(o)) return "";
        t.callbackTimers.push(setTimeout(function() {
          return t.changeSlide({
            message: "index",
            index: o,
            currentSlide: t.state.currentSlide
          }, e);
        }, 0));
      }), r(c(t), "play", function() {
        var o;
        if (t.props.rtl)
          o = t.state.currentSlide - t.props.slidesToScroll;
        else if ((0, d.canGoNext)(C(C({}, t.props), t.state)))
          o = t.state.currentSlide + t.props.slidesToScroll;
        else
          return !1;
        t.slideHandler(o);
      }), r(c(t), "autoPlay", function(o) {
        t.autoplayTimer && clearInterval(t.autoplayTimer);
        var e = t.state.autoplaying;
        if (o === "update") {
          if (e === "hovered" || e === "focused" || e === "paused")
            return;
        } else if (o === "leave") {
          if (e === "paused" || e === "focused")
            return;
        } else if (o === "blur" && (e === "paused" || e === "hovered"))
          return;
        t.autoplayTimer = setInterval(t.play, t.props.autoplaySpeed + 50), t.setState({
          autoplaying: "playing"
        });
      }), r(c(t), "pause", function(o) {
        t.autoplayTimer && (clearInterval(t.autoplayTimer), t.autoplayTimer = null);
        var e = t.state.autoplaying;
        o === "paused" ? t.setState({
          autoplaying: "paused"
        }) : o === "focused" ? (e === "hovered" || e === "playing") && t.setState({
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
        var o = (0, b.default)("slick-slider", t.props.className, {
          "slick-vertical": t.props.vertical,
          "slick-initialized": !0
        }), e = C(C({}, t.props), t.state), n = (0, d.extractObject)(e, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), h = t.props.pauseOnHover;
        n = C(C({}, n), {}, {
          onMouseEnter: h ? t.onTrackOver : null,
          onMouseLeave: h ? t.onTrackLeave : null,
          onMouseOver: h ? t.onTrackOver : null,
          focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
        });
        var _;
        if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
          var S = (0, d.extractObject)(e, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), T = t.props.pauseOnDotsHover;
          S = C(C({}, S), {}, {
            clickHandler: t.changeSlide,
            onMouseEnter: T ? t.onDotsLeave : null,
            onMouseOver: T ? t.onDotsOver : null,
            onMouseLeave: T ? t.onDotsLeave : null
          }), _ = /* @__PURE__ */ i.default.createElement(x.Dots, S);
        }
        var P, j, A = (0, d.extractObject)(e, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        A.clickHandler = t.changeSlide, t.props.arrows && (P = /* @__PURE__ */ i.default.createElement(L.PrevArrow, A), j = /* @__PURE__ */ i.default.createElement(L.NextArrow, A));
        var W = null;
        t.props.vertical && (W = {
          height: t.state.listHeight
        });
        var F = null;
        t.props.vertical === !1 ? t.props.centerMode === !0 && (F = {
          padding: "0px " + t.props.centerPadding
        }) : t.props.centerMode === !0 && (F = {
          padding: t.props.centerPadding + " 0px"
        });
        var U = C(C({}, W), F), X = t.props.touchMove, $ = {
          className: "slick-list",
          style: U,
          onClick: t.clickHandler,
          onMouseDown: X ? t.swipeStart : null,
          onMouseMove: t.state.dragging && X ? t.swipeMove : null,
          onMouseUp: X ? t.swipeEnd : null,
          onMouseLeave: t.state.dragging && X ? t.swipeEnd : null,
          onTouchStart: X ? t.swipeStart : null,
          onTouchMove: t.state.dragging && X ? t.swipeMove : null,
          onTouchEnd: X ? t.touchEnd : null,
          onTouchCancel: t.state.dragging && X ? t.swipeEnd : null,
          onKeyDown: t.props.accessibility ? t.keyHandler : null
        }, H = {
          className: o,
          dir: "ltr",
          style: t.props.style
        };
        return t.props.unslick && ($ = {
          className: "slick-list"
        }, H = {
          className: o,
          style: t.props.style
        }), /* @__PURE__ */ i.default.createElement("div", H, t.props.unslick ? "" : P, /* @__PURE__ */ i.default.createElement("div", K({
          ref: t.listRefHandler
        }, $), /* @__PURE__ */ i.default.createElement(g.Track, K({
          ref: t.trackRefHandler
        }, n), t.props.children)), t.props.unslick ? "" : j, t.props.unslick ? "" : _);
      }), t.list = null, t.track = null, t.state = C(C({}, u.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: i.default.Children.count(t.props.children)
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      var B = t.ssrInit();
      return t.state = C(C({}, t.state), B), t;
    }
    return Q(O, [{
      key: "didPropsChange",
      value: function(t) {
        for (var B = !1, o = 0, e = Object.keys(this.props); o < e.length; o++) {
          var n = e[o];
          if (!t.hasOwnProperty(n)) {
            B = !0;
            break;
          }
          if (!(N(t[n]) === "object" || typeof t[n] == "function" || isNaN(t[n])) && t[n] !== this.props[n]) {
            B = !0;
            break;
          }
        }
        return B || i.default.Children.count(this.props.children) !== i.default.Children.count(t.children);
      }
    }]), O;
  })(i.default.Component), he;
}
var Re, Je;
function $t() {
  if (Je) return Re;
  Je = 1;
  var i = function(u) {
    return u.replace(/[A-Z]/g, function(v) {
      return "-" + v.toLowerCase();
    }).toLowerCase();
  };
  return Re = i, Re;
}
var ze, Qe;
function Bt() {
  if (Qe) return ze;
  Qe = 1;
  var i = $t(), u = function(d) {
    var g = /[height|width]$/;
    return g.test(d);
  }, v = function(d) {
    var g = "", x = Object.keys(d);
    return x.forEach(function(L, z) {
      var R = d[L];
      L = i(L), u(L) && typeof R == "number" && (R = R + "px"), R === !0 ? g += L : R === !1 ? g += "not " + L : g += "(" + L + ": " + R + ")", z < x.length - 1 && (g += " and ");
    }), g;
  }, b = function(d) {
    var g = "";
    return typeof d == "string" ? d : d instanceof Array ? (d.forEach(function(x, L) {
      g += v(x), L < d.length - 1 && (g += ", ");
    }), g) : v(d);
  };
  return ze = b, ze;
}
var Ze;
function Yt() {
  return Ze || (Ze = 1, (function(i) {
    var u = { NODE_ENV: "production" };
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var v = L(ue), b = Ft(), d = L(Bt()), g = L(rt()), x = be();
    function L(s) {
      return s && s.__esModule ? s : { default: s };
    }
    function z(s) {
      "@babel/helpers - typeof";
      return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
        return typeof r;
      } : function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, z(s);
    }
    function R() {
      return R = Object.assign ? Object.assign.bind() : function(s) {
        for (var r = 1; r < arguments.length; r++) {
          var y = arguments[r];
          for (var m in y)
            ({}).hasOwnProperty.call(y, m) && (s[m] = y[m]);
        }
        return s;
      }, R.apply(null, arguments);
    }
    function N(s, r) {
      var y = Object.keys(s);
      if (Object.getOwnPropertySymbols) {
        var m = Object.getOwnPropertySymbols(s);
        r && (m = m.filter(function(f) {
          return Object.getOwnPropertyDescriptor(s, f).enumerable;
        })), y.push.apply(y, m);
      }
      return y;
    }
    function K(s) {
      for (var r = 1; r < arguments.length; r++) {
        var y = arguments[r] != null ? arguments[r] : {};
        r % 2 ? N(Object(y), !0).forEach(function(m) {
          l(s, m, y[m]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(y)) : N(Object(y)).forEach(function(m) {
          Object.defineProperty(s, m, Object.getOwnPropertyDescriptor(y, m));
        });
      }
      return s;
    }
    function Z(s, r) {
      if (!(s instanceof r)) throw new TypeError("Cannot call a class as a function");
    }
    function ee(s, r) {
      for (var y = 0; y < r.length; y++) {
        var m = r[y];
        m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(s, c(m.key), m);
      }
    }
    function V(s, r, y) {
      return r && ee(s.prototype, r), Object.defineProperty(s, "prototype", { writable: !1 }), s;
    }
    function C(s, r) {
      if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
      s.prototype = Object.create(r && r.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, "prototype", { writable: !1 }), r && J(s, r);
    }
    function J(s, r) {
      return J = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(y, m) {
        return y.__proto__ = m, y;
      }, J(s, r);
    }
    function I(s) {
      var r = q();
      return function() {
        var y, m = a(s);
        if (r) {
          var f = a(this).constructor;
          y = Reflect.construct(m, arguments, f);
        } else y = m.apply(this, arguments);
        return Q(this, y);
      };
    }
    function Q(s, r) {
      if (r && (z(r) == "object" || typeof r == "function")) return r;
      if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return G(s);
    }
    function G(s) {
      if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return s;
    }
    function q() {
      try {
        var s = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch {
      }
      return (q = function() {
        return !!s;
      })();
    }
    function a(s) {
      return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
      }, a(s);
    }
    function l(s, r, y) {
      return (r = c(r)) in s ? Object.defineProperty(s, r, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : s[r] = y, s;
    }
    function c(s) {
      var r = w(s, "string");
      return z(r) == "symbol" ? r : r + "";
    }
    function w(s, r) {
      if (z(s) != "object" || !s) return s;
      var y = s[Symbol.toPrimitive];
      if (y !== void 0) {
        var m = y.call(s, r);
        if (z(m) != "object") return m;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(s);
    }
    i.default = /* @__PURE__ */ (function(s) {
      C(y, s);
      var r = I(y);
      function y(m) {
        var f;
        return Z(this, y), f = r.call(this, m), l(G(f), "innerSliderRefHandler", function(p) {
          return f.innerSlider = p;
        }), l(G(f), "slickPrev", function() {
          return f.innerSlider.slickPrev();
        }), l(G(f), "slickNext", function() {
          return f.innerSlider.slickNext();
        }), l(G(f), "slickGoTo", function(p) {
          var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return f.innerSlider.slickGoTo(p, O);
        }), l(G(f), "slickPause", function() {
          return f.innerSlider.pause("paused");
        }), l(G(f), "slickPlay", function() {
          return f.innerSlider.autoPlay("play");
        }), f.state = {
          breakpoint: null
        }, f._responsiveMediaHandlers = [], f;
      }
      return V(y, [{
        key: "media",
        value: function(f, p) {
          var O = window.matchMedia(f), k = function(B) {
            var o = B.matches;
            o && p();
          };
          O.addListener(k), this._responsiveMediaHandlers.push({
            mql: O,
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
              var B;
              t === 0 ? B = (0, d.default)({
                minWidth: 0,
                maxWidth: k
              }) : B = (0, d.default)({
                minWidth: p[t - 1] + 1,
                maxWidth: k
              }), (0, x.canUseDOM)() && f.media(B, function() {
                f.setState({
                  breakpoint: k
                });
              });
            });
            var O = (0, d.default)({
              minWidth: p.slice(-1)[0]
            });
            (0, x.canUseDOM)() && this.media(O, function() {
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
          var f = this, p, O;
          this.state.breakpoint ? (O = this.props.responsive.filter(function(T) {
            return T.breakpoint === f.state.breakpoint;
          }), p = O[0].settings === "unslick" ? "unslick" : K(K(K({}, g.default), this.props), O[0].settings)) : p = K(K({}, g.default), this.props), p.centerMode && (p.slidesToScroll > 1 && u.NODE_ENV, p.slidesToScroll = 1), p.fade && (p.slidesToShow > 1 && u.NODE_ENV, p.slidesToScroll > 1 && u.NODE_ENV, p.slidesToShow = 1, p.slidesToScroll = 1);
          var k = v.default.Children.toArray(this.props.children);
          k = k.filter(function(T) {
            return typeof T == "string" ? !!T.trim() : !!T;
          }), p.variableWidth && (p.rows > 1 || p.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), p.variableWidth = !1);
          for (var t = [], B = null, o = 0; o < k.length; o += p.rows * p.slidesPerRow) {
            for (var e = [], n = o; n < o + p.rows * p.slidesPerRow; n += p.slidesPerRow) {
              for (var h = [], _ = n; _ < n + p.slidesPerRow && (p.variableWidth && k[_].props.style && (B = k[_].props.style.width), !(_ >= k.length)); _ += 1)
                h.push(/* @__PURE__ */ v.default.cloneElement(k[_], {
                  key: 100 * o + 10 * n + _,
                  tabIndex: -1,
                  style: {
                    width: "".concat(100 / p.slidesPerRow, "%"),
                    display: "inline-block"
                  }
                }));
              e.push(/* @__PURE__ */ v.default.createElement("div", {
                key: 10 * o + n
              }, h));
            }
            p.variableWidth ? t.push(/* @__PURE__ */ v.default.createElement("div", {
              key: o,
              style: {
                width: B
              }
            }, e)) : t.push(/* @__PURE__ */ v.default.createElement("div", {
              key: o
            }, e));
          }
          if (p === "unslick") {
            var S = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ v.default.createElement("div", {
              className: S
            }, k);
          } else t.length <= p.slidesToShow && (p.unslick = !0);
          return /* @__PURE__ */ v.default.createElement(b.InnerSlider, R({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, (0, x.filterSettings)(p)), t);
        }
      }]), y;
    })(v.default.Component);
  })(je)), je;
}
var et;
function Gt() {
  return et || (et = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var u = v(Yt());
    function v(b) {
      return b && b.__esModule ? b : { default: b };
    }
    i.default = u.default;
  })(Te)), Te;
}
var Xt = Gt();
const Kt = /* @__PURE__ */ ht(Xt), Vt = ct(() => Promise.resolve().then(() => ir)), Ut = ({
  media: i = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: u = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: v = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: b,
  videoUrl: d,
  lottieUrl: g,
  lottieData: x,
  iframeUrl: L,
  flipbookUrl: z,
  title: R,
  className: N = ""
}) => {
  var l;
  const K = typeof window < "u" && window.location.origin.indexOf("author") > -1, Z = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, V = `relative w-full h-full ${u === "square" ? "aspect-square" : u === "rectangle" ? "aspect-[4/3]" : i === "video" ? "aspect-video" : ""}`.trim(), C = u === "default" ? `w-full h-full ${N}`.trim() : `absolute inset-0 w-full h-full ${N}`.trim(), J = "w-full h-full", I = u === "default" ? `${C}`.trim() : C, Q = v === "contain" ? "object-contain" : "object-cover", G = v === "contain" ? "xMidYMid meet" : "xMidYMid slice", q = `relative w-full ${N}`.trim(), a = "w-full min-h-[280px]";
  switch (i) {
    case "image":
      if (b)
        return /* @__PURE__ */ M("div", { className: V, children: /* @__PURE__ */ M(
          "img",
          {
            src: b,
            alt: R || "Media image",
            className: `${Q} ${C}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (d) {
        const c = d.includes("youtube.com/watch") || d.includes("youtu.be/");
        let w = d;
        c && (w = `https://www.youtube.com/embed/${d.includes("youtu.be/") ? d.split("youtu.be/")[1].split("?")[0] : (l = d.split("v=")[1]) == null ? void 0 : l.split("&")[0]}`);
        const s = (() => {
          if (!c) return w;
          try {
            const r = new URL(w);
            return r.searchParams.set("autoplay", "0"), r.searchParams.set("mute", "0"), r.searchParams.set("playsinline", "1"), r.searchParams.set("controls", "1"), r.searchParams.set("rel", "0"), r.toString();
          } catch {
            return w.includes("?") ? w.includes("autoplay=") ? w : `${w}&autoplay=0` : `${w}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ M("div", { className: V, children: c ? /* @__PURE__ */ M(
          "iframe",
          {
            src: s,
            title: R || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${C} ${Q}`.trim()
          }
        ) : /* @__PURE__ */ M(
          "video",
          {
            className: `${C} ${Q}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: R || "Video player",
            children: /* @__PURE__ */ M("source", { src: d })
          }
        ) });
      }
      break;
    case "lottie":
      if (x)
        return K ? /* @__PURE__ */ M("div", { className: V, role: "img", "aria-label": R || "Animation", children: /* @__PURE__ */ M(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${C}`.trim(),
            children: /* @__PURE__ */ M("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ M(
          "div",
          {
            className: V,
            role: "img",
            "aria-label": R || "Animation",
            children: /* @__PURE__ */ M("div", { className: `${C} overflow-hidden`.trim(), children: /* @__PURE__ */ M(
              vt,
              {
                animationData: x,
                loop: !Z,
                autoplay: !Z,
                className: J,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: G }
              }
            ) })
          }
        );
      if (g)
        return /* @__PURE__ */ M("div", { className: V, children: /* @__PURE__ */ M("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (L)
        return /* @__PURE__ */ M("div", { className: V, children: /* @__PURE__ */ M(
          "iframe",
          {
            src: L,
            title: R || "Iframe content",
            frameBorder: "0",
            className: `${I} ${Q}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (z)
        return K ? /* @__PURE__ */ M("div", { className: q, role: "img", "aria-label": R || "Flipbook", children: /* @__PURE__ */ M(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${a}`.trim(),
            children: /* @__PURE__ */ M("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ M("div", { className: q, children: /* @__PURE__ */ M("div", { className: a, children: /* @__PURE__ */ M(ft, { fallback: /* @__PURE__ */ M("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ M(Vt, { pdfUrl: z, title: R, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ M("div", { className: V, children: /* @__PURE__ */ M("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${u === "default" ? "" : "absolute inset-0"}`.trim(), children: i ? `${i.charAt(0).toUpperCase() + i.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function Jt({
  title: i,
  titleId: u,
  ...v
}, b) {
  return /* @__PURE__ */ Oe.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: b,
    "aria-labelledby": u
  }, v), i ? /* @__PURE__ */ Oe.createElement("title", {
    id: u
  }, i) : null, /* @__PURE__ */ Oe.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const Qt = /* @__PURE__ */ Oe.forwardRef(Jt), Zt = ({
  text: i = "Link",
  href: u = "#",
  variant: v = "dark",
  // dark, light
  icon: b,
  className: d = "",
  ...g
}) => {
  const x = "text-link", L = (N) => {
    switch (N) {
      case "light":
        return "link-light";
      case "dark":
        return "link-dark";
      default:
        return "link-dark";
    }
  }, z = b || Qt, R = `${x} ${L(v)} ${d}`.trim();
  return /* @__PURE__ */ ce(
    "a",
    {
      href: u,
      className: R,
      ...g,
      children: [
        /* @__PURE__ */ M("span", { children: i }),
        /* @__PURE__ */ M(z, { className: "text-link-icon" })
      ]
    }
  );
}, tt = ({
  title: i,
  subtitle: u,
  linkText: v,
  linkHref: b,
  linkVariant: d = "light",
  mediaProps: g = {},
  // props for Media molecule
  className: x = "",
  attributes: L = {},
  ...z
}) => /* @__PURE__ */ ce(
  "div",
  {
    className: `w-full bg-grey-500 p-awards-padding flex flex-col items-center text-center space-y-36 h-full ${x}`.trim(),
    ...z,
    ...L ?? {},
    children: [
      /* @__PURE__ */ ce("div", { className: "space-y-awards-spacing-y w-full", children: [
        /* @__PURE__ */ M("div", { className: "w-full max-w-[230px] mx-auto", children: /* @__PURE__ */ M(Ut, { ...g }) }),
        /* @__PURE__ */ ce("div", { className: "space-y-awards-text--spacing-y", children: [
          u && /* @__PURE__ */ M("div", { className: "text-body-default text-white", children: u }),
          i && /* @__PURE__ */ M("h3", { className: "text-headings-h3 font-semibold text-white", children: i })
        ] })
      ] }),
      v && b && /* @__PURE__ */ M("div", { className: "mt-auto", children: /* @__PURE__ */ M(Zt, { text: v, href: b, variant: d }) })
    ]
  }
), sr = ({
  items: i = [],
  // [{ title, subtitle, linkText, linkHref, linkVariant, mediaProps }]
  className: u = "",
  ...v
}) => {
  const b = {
    infinite: !0,
    arrows: !1,
    dots: !0,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: !0,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: !0,
          centerPadding: "40px"
        }
      }
    ]
  };
  return /* @__PURE__ */ ce("div", { className: `container ${u}`, ...v, children: [
    /* @__PURE__ */ M("div", { className: "hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-24", children: i.map((d, g) => /* @__PURE__ */ M("div", { className: "h-full", ...d.attributes, children: /* @__PURE__ */ M(
      tt,
      {
        title: d.title,
        subtitle: d.subtitle,
        linkText: d.linkText,
        linkHref: d.linkHref,
        linkVariant: d.linkVariant,
        mediaProps: d.mediaProps,
        className: "h-full"
      }
    ) }, d.key ?? g)) }),
    /* @__PURE__ */ M("div", { className: "md:hidden -mx-20", children: /* @__PURE__ */ M(Kt, { ...b, className: "awards-carousel", children: i.map((d, g) => /* @__PURE__ */ M("div", { className: "px-20 h-full", children: /* @__PURE__ */ M(
      tt,
      {
        title: d.title,
        subtitle: d.subtitle,
        linkText: d.linkText,
        linkHref: d.linkHref,
        linkVariant: d.linkVariant,
        mediaProps: d.mediaProps,
        className: "h-full"
      }
    ) }, d.key ?? g)) }) })
  ] });
};
let De, st, He, we;
const er = async () => {
  if (!we) {
    const i = await import("react-pdf");
    we = i.pdfjs, st = i.Document, He = i.Page, we.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${we.version}/build/pdf.worker.min.mjs`;
  }
}, tr = async () => {
  De || (De = (await import("react-pageflip")).default);
}, rr = pt(({ children: i }, u) => /* @__PURE__ */ M("div", { ref: u, className: "w-full h-full overflow-hidden", children: i })), nr = ({ pdfUrl: i, title: u, width: v = 280, height: b = 280, className: d = "" }) => {
  const [g, x] = ve(0), [L, z] = ve(null), [R, N] = ve(!0), [K, Z] = ve(b / v), [ee, V] = ve(0), C = dt(null);
  Ae(() => {
    Promise.all([er(), tr()]).then(() => N(!1)).catch(() => {
      z("Failed to load flipbook");
    });
  }, []), Ae(() => {
    const q = C.current;
    if (!q) return;
    const a = new ResizeObserver(([l]) => {
      const c = Math.floor(l.contentRect.width);
      c > 0 && V(c);
    });
    return a.observe(q), () => a.disconnect();
  }, [R]);
  const J = ee > 0 ? Math.floor(ee / 2) : Math.floor(v / 2), I = Math.round(J * K), Q = We(async (q) => {
    try {
      const l = (await q.getPage(1)).getViewport({ scale: 1 });
      l != null && l.width && (l != null && l.height) && Z(l.height / l.width);
    } catch {
    }
    x(q.numPages || 0);
  }, []), G = We((q) => {
    z((q == null ? void 0 : q.message) || "Failed to load PDF");
  }, []);
  return L ? /* @__PURE__ */ M("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : R ? /* @__PURE__ */ M("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ M("div", { ref: C, className: `w-full ${d}`.trim(), children: /* @__PURE__ */ ce(
    st,
    {
      file: i,
      onLoadSuccess: Q,
      onLoadError: G,
      loading: /* @__PURE__ */ M("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        g === 1 && /* @__PURE__ */ M(
          "div",
          {
            className: `w-full flex justify-center items-center ${d}`.trim(),
            style: { minHeight: `${I}px` },
            children: /* @__PURE__ */ M(He, { pageNumber: 1, width: v, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        g > 1 && /* @__PURE__ */ M(
          De,
          {
            width: J,
            height: I,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": u || "Flipbook",
            children: Array.from({ length: g }, (q, a) => /* @__PURE__ */ M(rr, { children: /* @__PURE__ */ M(He, { pageNumber: a + 1, width: J, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, a))
          },
          `${J}-${I}`
        )
      ]
    }
  ) });
}, ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nr
}, Symbol.toStringTag, { value: "Module" }));
export {
  sr as default
};
