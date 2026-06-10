import { jsx as M, jsxs as ge } from "react/jsx-runtime";
import ue, { lazy as st, Suspense as ut, useState as pe, useRef as ct, useEffect as He, useCallback as Ae, forwardRef as ft } from "react";
import dt from "lottie-react";
var Se = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pt(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function vt(i) {
  if (Object.prototype.hasOwnProperty.call(i, "__esModule")) return i;
  var c = i.default;
  if (typeof c == "function") {
    var p = function b() {
      return this instanceof b ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    p.prototype = c.prototype;
  } else p = {};
  return Object.defineProperty(p, "__esModule", { value: !0 }), Object.keys(i).forEach(function(b) {
    var h = Object.getOwnPropertyDescriptor(i, b);
    Object.defineProperty(p, b, h.get ? h : {
      enumerable: !0,
      get: function() {
        return i[b];
      }
    });
  }), p;
}
var Ce = {}, Te = {}, ve = {}, je = {}, We;
function ht() {
  return We || (We = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var c = {
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
    i.default = c;
  })(je)), je;
}
var Ee, qe;
function yt() {
  if (qe) return Ee;
  qe = 1;
  var i = "Expected a function", c = NaN, p = "[object Symbol]", b = /^\s+|\s+$/g, h = /^[-+]0x[0-9a-f]+$/i, g = /^0b[01]+$/i, x = /^0o[0-7]+$/i, L = parseInt, N = typeof Se == "object" && Se && Se.Object === Object && Se, z = typeof self == "object" && self && self.Object === Object && self, D = N || z || Function("return this")(), R = Object.prototype, J = R.toString, ee = Math.max, G = Math.min, k = function() {
    return D.Date.now();
  };
  function Q(a, l, u) {
    var w, s, r, y, m, f, d = 0, O = !1, P = !1, t = !0;
    if (typeof a != "function")
      throw new TypeError(i);
    l = F(l) || 0, A(u) && (O = !!u.leading, P = "maxWait" in u, r = P ? ee(F(u.maxWait) || 0, l) : r, t = "trailing" in u ? !!u.trailing : t);
    function U(j) {
      var W = w, q = s;
      return w = s = void 0, d = j, y = a.apply(q, W), y;
    }
    function o(j) {
      return d = j, m = setTimeout(v, l), O ? U(j) : y;
    }
    function e(j) {
      var W = j - f, q = j - d, $ = l - W;
      return P ? G($, r - q) : $;
    }
    function n(j) {
      var W = j - f, q = j - d;
      return f === void 0 || W >= l || W < 0 || P && q >= r;
    }
    function v() {
      var j = k();
      if (n(j))
        return _(j);
      m = setTimeout(v, e(j));
    }
    function _(j) {
      return m = void 0, t && w ? U(j) : (w = s = void 0, y);
    }
    function S() {
      m !== void 0 && clearTimeout(m), d = 0, w = f = s = m = void 0;
    }
    function T() {
      return m === void 0 ? y : _(k());
    }
    function C() {
      var j = k(), W = n(j);
      if (w = arguments, s = this, f = j, W) {
        if (m === void 0)
          return o(f);
        if (P)
          return m = setTimeout(v, l), U(f);
      }
      return m === void 0 && (m = setTimeout(v, l)), y;
    }
    return C.cancel = S, C.flush = T, C;
  }
  function A(a) {
    var l = typeof a;
    return !!a && (l == "object" || l == "function");
  }
  function Z(a) {
    return !!a && typeof a == "object";
  }
  function X(a) {
    return typeof a == "symbol" || Z(a) && J.call(a) == p;
  }
  function F(a) {
    if (typeof a == "number")
      return a;
    if (X(a))
      return c;
    if (A(a)) {
      var l = typeof a.valueOf == "function" ? a.valueOf() : a;
      a = A(l) ? l + "" : l;
    }
    if (typeof a != "string")
      return a === 0 ? a : +a;
    a = a.replace(b, "");
    var u = g.test(a);
    return u || x.test(a) ? L(a.slice(2), u ? 2 : 8) : h.test(a) ? c : +a;
  }
  return Ee = Q, Ee;
}
var xe = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Fe;
function Pe() {
  return Fe || (Fe = 1, (function(i) {
    (function() {
      var c = {}.hasOwnProperty;
      function p() {
        for (var g = "", x = 0; x < arguments.length; x++) {
          var L = arguments[x];
          L && (g = h(g, b(L)));
        }
        return g;
      }
      function b(g) {
        if (typeof g == "string" || typeof g == "number")
          return g;
        if (typeof g != "object")
          return "";
        if (Array.isArray(g))
          return p.apply(null, g);
        if (g.toString !== Object.prototype.toString && !g.toString.toString().includes("[native code]"))
          return g.toString();
        var x = "";
        for (var L in g)
          c.call(g, L) && g[L] && (x = h(x, L));
        return x;
      }
      function h(g, x) {
        return x ? g ? g + " " + x : g + x : g;
      }
      i.exports ? (p.default = p, i.exports = p) : window.classNames = p;
    })();
  })(xe)), xe.exports;
}
var E = {}, Le = {}, $e;
function et() {
  return $e || ($e = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var c = p(ue);
    function p(h) {
      return h && h.__esModule ? h : { default: h };
    }
    var b = {
      accessibility: !0,
      adaptiveHeight: !1,
      afterChange: null,
      appendDots: function(g) {
        return /* @__PURE__ */ c.default.createElement("ul", {
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
        return /* @__PURE__ */ c.default.createElement("button", null, g + 1);
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
  })(Le)), Le;
}
var Be;
function be() {
  if (Be) return E;
  Be = 1, Object.defineProperty(E, "__esModule", {
    value: !0
  }), E.checkSpecKeys = E.checkNavigable = E.changeSlide = E.canUseDOM = E.canGoNext = void 0, E.clamp = z, E.extractObject = void 0, E.filterSettings = U, E.validSettings = E.swipeStart = E.swipeMove = E.swipeEnd = E.slidesOnRight = E.slidesOnLeft = E.slideHandler = E.siblingDirection = E.safePreventDefault = E.lazyStartIndex = E.lazySlidesOnRight = E.lazySlidesOnLeft = E.lazyEndIndex = E.keyHandler = E.initializedState = E.getWidth = E.getTrackLeft = E.getTrackCSS = E.getTrackAnimateCSS = E.getTotalSlides = E.getSwipeDirection = E.getSlideCount = E.getRequiredLazySlides = E.getPreClones = E.getPostClones = E.getOnDemandLazySlides = E.getNavigableIndexes = E.getHeight = void 0;
  var i = p(ue), c = p(et());
  function p(o) {
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
  function h(o, e) {
    var n = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
      var v = Object.getOwnPropertySymbols(o);
      e && (v = v.filter(function(_) {
        return Object.getOwnPropertyDescriptor(o, _).enumerable;
      })), n.push.apply(n, v);
    }
    return n;
  }
  function g(o) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2 ? h(Object(n), !0).forEach(function(v) {
        x(o, v, n[v]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function(v) {
        Object.defineProperty(o, v, Object.getOwnPropertyDescriptor(n, v));
      });
    }
    return o;
  }
  function x(o, e, n) {
    return (e = L(e)) in o ? Object.defineProperty(o, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = n, o;
  }
  function L(o) {
    var e = N(o, "string");
    return b(e) == "symbol" ? e : e + "";
  }
  function N(o, e) {
    if (b(o) != "object" || !o) return o;
    var n = o[Symbol.toPrimitive];
    if (n !== void 0) {
      var v = n.call(o, e);
      if (b(v) != "object") return v;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(o);
  }
  function z(o, e, n) {
    return Math.max(e, Math.min(o, n));
  }
  var D = E.safePreventDefault = function(e) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(e._reactName) || e.preventDefault();
  }, R = E.getOnDemandLazySlides = function(e) {
    for (var n = [], v = J(e), _ = ee(e), S = v; S < _; S++)
      e.lazyLoadedList.indexOf(S) < 0 && n.push(S);
    return n;
  };
  E.getRequiredLazySlides = function(e) {
    for (var n = [], v = J(e), _ = ee(e), S = v; S < _; S++)
      n.push(S);
    return n;
  };
  var J = E.lazyStartIndex = function(e) {
    return e.currentSlide - G(e);
  }, ee = E.lazyEndIndex = function(e) {
    return e.currentSlide + k(e);
  }, G = E.lazySlidesOnLeft = function(e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }, k = E.lazySlidesOnRight = function(e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }, Q = E.getWidth = function(e) {
    return e && e.offsetWidth || 0;
  }, A = E.getHeight = function(e) {
    return e && e.offsetHeight || 0;
  }, Z = E.getSwipeDirection = function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, v, _, S, T;
    return v = e.startX - e.curX, _ = e.startY - e.curY, S = Math.atan2(_, v), T = Math.round(S * 180 / Math.PI), T < 0 && (T = 360 - Math.abs(T)), T <= 45 && T >= 0 || T <= 360 && T >= 315 ? "left" : T >= 135 && T <= 225 ? "right" : n === !0 ? T >= 35 && T <= 135 ? "up" : "down" : "vertical";
  }, X = E.canGoNext = function(e) {
    var n = !0;
    return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (n = !1), n;
  };
  E.extractObject = function(e, n) {
    var v = {};
    return n.forEach(function(_) {
      return v[_] = e[_];
    }), v;
  }, E.initializedState = function(e) {
    var n = i.default.Children.count(e.children), v = e.listRef, _ = Math.ceil(Q(v)), S = e.trackRef && e.trackRef.node, T = Math.ceil(Q(S)), C;
    if (e.vertical)
      C = _;
    else {
      var j = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding == "string" && e.centerPadding.slice(-1) === "%" && (j *= _ / 100), C = Math.ceil((_ - j) / e.slidesToShow);
    }
    var W = v && A(v.querySelector('[data-index="0"]')), q = W * e.slidesToShow, $ = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && ($ = n - 1 - e.initialSlide);
    var V = e.lazyLoadedList || [], K = R(g(g({}, e), {}, {
      currentSlide: $,
      lazyLoadedList: V
    }));
    V = V.concat(K);
    var B = {
      slideCount: n,
      slideWidth: C,
      listWidth: _,
      trackWidth: T,
      currentSlide: $,
      slideHeight: W,
      listHeight: q,
      lazyLoadedList: V
    };
    return e.autoplaying === null && e.autoplay && (B.autoplaying = "playing"), B;
  }, E.slideHandler = function(e) {
    var n = e.waitForAnimate, v = e.animating, _ = e.fade, S = e.infinite, T = e.index, C = e.slideCount, j = e.lazyLoad, W = e.currentSlide, q = e.centerMode, $ = e.slidesToScroll, V = e.slidesToShow, K = e.useCSS, B = e.lazyLoadedList;
    if (n && v) return {};
    var H = T, Y, re, I, te = {}, ne = {}, ie = S ? T : z(T, 0, C - 1);
    if (_) {
      if (!S && (T < 0 || T >= C)) return {};
      T < 0 ? H = T + C : T >= C && (H = T - C), j && B.indexOf(H) < 0 && (B = B.concat(H)), te = {
        animating: !0,
        currentSlide: H,
        lazyLoadedList: B,
        targetSlide: H
      }, ne = {
        animating: !1,
        targetSlide: H
      };
    } else
      Y = H, H < 0 ? (Y = H + C, S ? C % $ !== 0 && (Y = C - C % $) : Y = 0) : !X(e) && H > W ? H = Y = W : q && H >= C ? (H = S ? C : C - 1, Y = S ? 0 : C - 1) : H >= C && (Y = H - C, S ? C % $ !== 0 && (Y = 0) : Y = C - V), !S && H + V >= C && (Y = C - V), re = r(g(g({}, e), {}, {
        slideIndex: H
      })), I = r(g(g({}, e), {}, {
        slideIndex: Y
      })), S || (re === I && (H = Y), re = I), j && (B = B.concat(R(g(g({}, e), {}, {
        currentSlide: H
      })))), K ? (te = {
        animating: !0,
        currentSlide: Y,
        trackStyle: s(g(g({}, e), {}, {
          left: re
        })),
        lazyLoadedList: B,
        targetSlide: ie
      }, ne = {
        animating: !1,
        currentSlide: Y,
        trackStyle: w(g(g({}, e), {}, {
          left: I
        })),
        swipeLeft: null,
        targetSlide: ie
      }) : te = {
        currentSlide: Y,
        trackStyle: w(g(g({}, e), {}, {
          left: I
        })),
        lazyLoadedList: B,
        targetSlide: ie
      };
    return {
      state: te,
      nextState: ne
    };
  }, E.changeSlide = function(e, n) {
    var v, _, S, T, C, j = e.slidesToScroll, W = e.slidesToShow, q = e.slideCount, $ = e.currentSlide, V = e.targetSlide, K = e.lazyLoad, B = e.infinite;
    if (T = q % j !== 0, v = T ? 0 : (q - $) % j, n.message === "previous")
      S = v === 0 ? j : W - v, C = $ - S, K && !B && (_ = $ - S, C = _ === -1 ? q - 1 : _), B || (C = V - j);
    else if (n.message === "next")
      S = v === 0 ? j : v, C = $ + S, K && !B && (C = ($ + j) % q + v), B || (C = V + j);
    else if (n.message === "dots")
      C = n.index * n.slidesToScroll;
    else if (n.message === "children") {
      if (C = n.index, B) {
        var H = d(g(g({}, e), {}, {
          targetSlide: C
        }));
        C > n.currentSlide && H === "left" ? C = C - q : C < n.currentSlide && H === "right" && (C = C + q);
      }
    } else n.message === "index" && (C = Number(n.index));
    return C;
  }, E.keyHandler = function(e, n, v) {
    return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n ? "" : e.keyCode === 37 ? v ? "next" : "previous" : e.keyCode === 39 ? v ? "previous" : "next" : "";
  }, E.swipeStart = function(e, n, v) {
    return e.target.tagName === "IMG" && D(e), !n || !v && e.type.indexOf("mouse") !== -1 ? "" : {
      dragging: !0,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY
      }
    };
  }, E.swipeMove = function(e, n) {
    var v = n.scrolling, _ = n.animating, S = n.vertical, T = n.swipeToSlide, C = n.verticalSwiping, j = n.rtl, W = n.currentSlide, q = n.edgeFriction, $ = n.edgeDragged, V = n.onEdge, K = n.swiped, B = n.swiping, H = n.slideCount, Y = n.slidesToScroll, re = n.infinite, I = n.touchObject, te = n.swipeEvent, ne = n.listHeight, ie = n.listWidth;
    if (!v) {
      if (_) return D(e);
      S && T && C && D(e);
      var oe, le = {}, me = r(n);
      I.curX = e.touches ? e.touches[0].pageX : e.clientX, I.curY = e.touches ? e.touches[0].pageY : e.clientY, I.swipeLength = Math.round(Math.sqrt(Math.pow(I.curX - I.startX, 2)));
      var Ie = Math.round(Math.sqrt(Math.pow(I.curY - I.startY, 2)));
      if (!C && !B && Ie > 10)
        return {
          scrolling: !0
        };
      C && (I.swipeLength = Ie);
      var fe = (j ? -1 : 1) * (I.curX > I.startX ? 1 : -1);
      C && (fe = I.curY > I.startY ? 1 : -1);
      var lt = Math.ceil(H / Y), ae = Z(n.touchObject, C), de = I.swipeLength;
      return re || (W === 0 && (ae === "right" || ae === "down") || W + 1 >= lt && (ae === "left" || ae === "up") || !X(n) && (ae === "left" || ae === "up")) && (de = I.swipeLength * q, $ === !1 && V && (V(ae), le.edgeDragged = !0)), !K && te && (te(ae), le.swiped = !0), S ? oe = me + de * (ne / ie) * fe : j ? oe = me - de * fe : oe = me + de * fe, C && (oe = me + de * fe), le = g(g({}, le), {}, {
        touchObject: I,
        swipeLeft: oe,
        trackStyle: w(g(g({}, n), {}, {
          left: oe
        }))
      }), Math.abs(I.curX - I.startX) < Math.abs(I.curY - I.startY) * 0.8 || I.swipeLength > 10 && (le.swiping = !0, D(e)), le;
    }
  }, E.swipeEnd = function(e, n) {
    var v = n.dragging, _ = n.swipe, S = n.touchObject, T = n.listWidth, C = n.touchThreshold, j = n.verticalSwiping, W = n.listHeight, q = n.swipeToSlide, $ = n.scrolling, V = n.onSwipe, K = n.targetSlide, B = n.currentSlide, H = n.infinite;
    if (!v)
      return _ && D(e), {};
    var Y = j ? W / C : T / C, re = Z(S, j), I = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {}
    };
    if ($ || !S.swipeLength)
      return I;
    if (S.swipeLength > Y) {
      D(e), V && V(re);
      var te, ne, ie = H ? B : K;
      switch (re) {
        case "left":
        case "up":
          ne = ie + l(n), te = q ? a(n, ne) : ne, I.currentDirection = 0;
          break;
        case "right":
        case "down":
          ne = ie - l(n), te = q ? a(n, ne) : ne, I.currentDirection = 1;
          break;
        default:
          te = ie;
      }
      I.triggerSlideHandler = te;
    } else {
      var oe = r(n);
      I.trackStyle = s(g(g({}, n), {}, {
        left: oe
      }));
    }
    return I;
  };
  var F = E.getNavigableIndexes = function(e) {
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, v = e.infinite ? e.slidesToShow * -1 : 0, _ = e.infinite ? e.slidesToShow * -1 : 0, S = []; v < n; )
      S.push(v), v = _ + e.slidesToScroll, _ += Math.min(e.slidesToScroll, e.slidesToShow);
    return S;
  }, a = E.checkNavigable = function(e, n) {
    var v = F(e), _ = 0;
    if (n > v[v.length - 1])
      n = v[v.length - 1];
    else
      for (var S in v) {
        if (n < v[S]) {
          n = _;
          break;
        }
        _ = v[S];
      }
    return n;
  }, l = E.getSlideCount = function(e) {
    var n = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      var v, _ = e.listRef, S = _.querySelectorAll && _.querySelectorAll(".slick-slide") || [];
      if (Array.from(S).every(function(j) {
        if (e.vertical) {
          if (j.offsetTop + A(j) / 2 > e.swipeLeft * -1)
            return v = j, !1;
        } else if (j.offsetLeft - n + Q(j) / 2 > e.swipeLeft * -1)
          return v = j, !1;
        return !0;
      }), !v)
        return 0;
      var T = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide, C = Math.abs(v.dataset.index - T) || 1;
      return C;
    } else
      return e.slidesToScroll;
  }, u = E.checkSpecKeys = function(e, n) {
    return n.reduce(function(v, _) {
      return v && e.hasOwnProperty(_);
    }, !0) ? null : console.error("Keys Missing:", e);
  }, w = E.getTrackCSS = function(e) {
    u(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
    var n, v;
    if (!e.vertical)
      n = f(e) * e.slideWidth;
    else {
      var _ = e.unslick ? e.slideCount : e.slideCount + 2 * e.slidesToShow;
      v = _ * e.slideHeight;
    }
    var S = {
      opacity: 1,
      transition: "",
      WebkitTransition: ""
    };
    if (e.useTransform) {
      var T = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", C = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", j = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
      S = g(g({}, S), {}, {
        WebkitTransform: T,
        transform: C,
        msTransform: j
      });
    } else
      e.vertical ? S.top = e.left : S.left = e.left;
    return e.fade && (S = {
      opacity: 1
    }), n && (S.width = n), v && (S.height = v), window && !window.addEventListener && window.attachEvent && (e.vertical ? S.marginTop = e.left + "px" : S.marginLeft = e.left + "px"), S;
  }, s = E.getTrackAnimateCSS = function(e) {
    u(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var n = w(e);
    return e.useTransform ? (n.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, n.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? n.transition = "top " + e.speed + "ms " + e.cssEase : n.transition = "left " + e.speed + "ms " + e.cssEase, n;
  }, r = E.getTrackLeft = function(e) {
    if (e.unslick)
      return 0;
    u(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var n = e.slideIndex, v = e.trackRef, _ = e.infinite, S = e.centerMode, T = e.slideCount, C = e.slidesToShow, j = e.slidesToScroll, W = e.slideWidth, q = e.listWidth, $ = e.variableWidth, V = e.slideHeight, K = e.fade, B = e.vertical, H = 0, Y, re, I = 0;
    if (K || e.slideCount === 1)
      return 0;
    var te = 0;
    if (_ ? (te = -y(e), T % j !== 0 && n + j > T && (te = -(n > T ? C - (n - T) : T % j)), S && (te += parseInt(C / 2))) : (T % j !== 0 && n + j > T && (te = C - T % j), S && (te = parseInt(C / 2))), H = te * W, I = te * V, B ? Y = n * V * -1 + I : Y = n * W * -1 + H, $ === !0) {
      var ne, ie = v && v.node;
      if (ne = n + y(e), re = ie && ie.childNodes[ne], Y = re ? re.offsetLeft * -1 : 0, S === !0) {
        ne = _ ? n + y(e) : n, re = ie && ie.children[ne], Y = 0;
        for (var oe = 0; oe < ne; oe++)
          Y -= ie && ie.children[oe] && ie.children[oe].offsetWidth;
        Y -= parseInt(e.centerPadding), Y += re && (q - re.offsetWidth) / 2;
      }
    }
    return Y;
  }, y = E.getPreClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, m = E.getPostClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, f = E.getTotalSlides = function(e) {
    return e.slideCount === 1 ? 1 : y(e) + e.slideCount + m(e);
  }, d = E.siblingDirection = function(e) {
    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + O(e) ? "left" : "right" : e.targetSlide < e.currentSlide - P(e) ? "right" : "left";
  }, O = E.slidesOnRight = function(e) {
    var n = e.slidesToShow, v = e.centerMode, _ = e.rtl, S = e.centerPadding;
    if (v) {
      var T = (n - 1) / 2 + 1;
      return parseInt(S) > 0 && (T += 1), _ && n % 2 === 0 && (T += 1), T;
    }
    return _ ? 0 : n - 1;
  }, P = E.slidesOnLeft = function(e) {
    var n = e.slidesToShow, v = e.centerMode, _ = e.rtl, S = e.centerPadding;
    if (v) {
      var T = (n - 1) / 2 + 1;
      return parseInt(S) > 0 && (T += 1), !_ && n % 2 === 0 && (T += 1), T;
    }
    return _ ? n - 1 : 0;
  };
  E.canUseDOM = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  };
  var t = E.validSettings = Object.keys(c.default);
  function U(o) {
    return t.reduce(function(e, n) {
      return o.hasOwnProperty(n) && (e[n] = o[n]), e;
    }, {});
  }
  return E;
}
var he = {}, Ge;
function gt() {
  if (Ge) return he;
  Ge = 1, Object.defineProperty(he, "__esModule", {
    value: !0
  }), he.Track = void 0;
  var i = b(ue), c = b(Pe()), p = be();
  function b(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function h(s) {
    "@babel/helpers - typeof";
    return h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, h(s);
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
      m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(s, X(m.key), m);
    }
  }
  function N(s, r, y) {
    return r && L(s.prototype, r), Object.defineProperty(s, "prototype", { writable: !1 }), s;
  }
  function z(s, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
    s.prototype = Object.create(r && r.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, "prototype", { writable: !1 }), r && D(s, r);
  }
  function D(s, r) {
    return D = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(y, m) {
      return y.__proto__ = m, y;
    }, D(s, r);
  }
  function R(s) {
    var r = G();
    return function() {
      var y, m = k(s);
      if (r) {
        var f = k(this).constructor;
        y = Reflect.construct(m, arguments, f);
      } else y = m.apply(this, arguments);
      return J(this, y);
    };
  }
  function J(s, r) {
    if (r && (h(r) == "object" || typeof r == "function")) return r;
    if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return ee(s);
  }
  function ee(s) {
    if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s;
  }
  function G() {
    try {
      var s = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (G = function() {
      return !!s;
    })();
  }
  function k(s) {
    return k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, k(s);
  }
  function Q(s, r) {
    var y = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
      var m = Object.getOwnPropertySymbols(s);
      r && (m = m.filter(function(f) {
        return Object.getOwnPropertyDescriptor(s, f).enumerable;
      })), y.push.apply(y, m);
    }
    return y;
  }
  function A(s) {
    for (var r = 1; r < arguments.length; r++) {
      var y = arguments[r] != null ? arguments[r] : {};
      r % 2 ? Q(Object(y), !0).forEach(function(m) {
        Z(s, m, y[m]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(y)) : Q(Object(y)).forEach(function(m) {
        Object.defineProperty(s, m, Object.getOwnPropertyDescriptor(y, m));
      });
    }
    return s;
  }
  function Z(s, r, y) {
    return (r = X(r)) in s ? Object.defineProperty(s, r, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : s[r] = y, s;
  }
  function X(s) {
    var r = F(s, "string");
    return h(r) == "symbol" ? r : r + "";
  }
  function F(s, r) {
    if (h(s) != "object" || !s) return s;
    var y = s[Symbol.toPrimitive];
    if (y !== void 0) {
      var m = y.call(s, r);
      if (h(m) != "object") return m;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(s);
  }
  var a = function(r) {
    var y, m, f, d, O;
    r.rtl ? O = r.slideCount - 1 - r.index : O = r.index, f = O < 0 || O >= r.slideCount, r.centerMode ? (d = Math.floor(r.slidesToShow / 2), m = (O - r.currentSlide) % r.slideCount === 0, O > r.currentSlide - d - 1 && O <= r.currentSlide + d && (y = !0)) : y = r.currentSlide <= O && O < r.currentSlide + r.slidesToShow;
    var P;
    r.targetSlide < 0 ? P = r.targetSlide + r.slideCount : r.targetSlide >= r.slideCount ? P = r.targetSlide - r.slideCount : P = r.targetSlide;
    var t = O === P;
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
  }, u = function(r, y) {
    return r.key || y;
  }, w = function(r) {
    var y, m = [], f = [], d = [], O = i.default.Children.count(r.children), P = (0, p.lazyStartIndex)(r), t = (0, p.lazyEndIndex)(r);
    return i.default.Children.forEach(r.children, function(U, o) {
      var e, n = {
        message: "children",
        index: o,
        slidesToScroll: r.slidesToScroll,
        currentSlide: r.currentSlide
      };
      !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(o) >= 0 ? e = U : e = /* @__PURE__ */ i.default.createElement("div", null);
      var v = l(A(A({}, r), {}, {
        index: o
      })), _ = e.props.className || "", S = a(A(A({}, r), {}, {
        index: o
      }));
      if (m.push(/* @__PURE__ */ i.default.cloneElement(e, {
        key: "original" + u(e, o),
        "data-index": o,
        className: (0, c.default)(S, _),
        tabIndex: "-1",
        "aria-hidden": !S["slick-active"],
        style: A(A({
          outline: "none"
        }, e.props.style || {}), v),
        onClick: function(j) {
          e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
        }
      })), r.infinite && O > 1 && r.fade === !1 && !r.unslick) {
        var T = O - o;
        T <= (0, p.getPreClones)(r) && (y = -T, y >= P && (e = U), S = a(A(A({}, r), {}, {
          index: y
        })), f.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "precloned" + u(e, y),
          "data-index": y,
          tabIndex: "-1",
          className: (0, c.default)(S, _),
          "aria-hidden": !S["slick-active"],
          style: A(A({}, e.props.style || {}), v),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        }))), o < (0, p.getPostClones)(r) && (y = O + o, y < t && (e = U), S = a(A(A({}, r), {}, {
          index: y
        })), d.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "postcloned" + u(e, y),
          "data-index": y,
          tabIndex: "-1",
          className: (0, c.default)(S, _),
          "aria-hidden": !S["slick-active"],
          style: A(A({}, e.props.style || {}), v),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        })));
      }
    }), r.rtl ? f.concat(m, d).reverse() : f.concat(m, d);
  };
  return he.Track = /* @__PURE__ */ (function(s) {
    z(y, s);
    var r = R(y);
    function y() {
      var m;
      x(this, y);
      for (var f = arguments.length, d = new Array(f), O = 0; O < f; O++)
        d[O] = arguments[O];
      return m = r.call.apply(r, [this].concat(d)), Z(ee(m), "node", null), Z(ee(m), "handleRef", function(P) {
        m.node = P;
      }), m;
    }
    return N(y, [{
      key: "render",
      value: function() {
        var f = w(this.props), d = this.props, O = d.onMouseEnter, P = d.onMouseOver, t = d.onMouseLeave, U = {
          onMouseEnter: O,
          onMouseOver: P,
          onMouseLeave: t
        };
        return /* @__PURE__ */ i.default.createElement("div", g({
          ref: this.handleRef,
          className: "slick-track",
          style: this.props.trackStyle
        }, U), f);
      }
    }]), y;
  })(i.default.PureComponent), he;
}
var ye = {}, Ue;
function bt() {
  if (Ue) return ye;
  Ue = 1;
  function i(a) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
      return typeof l;
    } : function(l) {
      return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
    }, i(a);
  }
  Object.defineProperty(ye, "__esModule", {
    value: !0
  }), ye.Dots = void 0;
  var c = h(ue), p = h(Pe()), b = be();
  function h(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function g(a, l) {
    var u = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var w = Object.getOwnPropertySymbols(a);
      l && (w = w.filter(function(s) {
        return Object.getOwnPropertyDescriptor(a, s).enumerable;
      })), u.push.apply(u, w);
    }
    return u;
  }
  function x(a) {
    for (var l = 1; l < arguments.length; l++) {
      var u = arguments[l] != null ? arguments[l] : {};
      l % 2 ? g(Object(u), !0).forEach(function(w) {
        L(a, w, u[w]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u)) : g(Object(u)).forEach(function(w) {
        Object.defineProperty(a, w, Object.getOwnPropertyDescriptor(u, w));
      });
    }
    return a;
  }
  function L(a, l, u) {
    return (l = R(l)) in a ? Object.defineProperty(a, l, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : a[l] = u, a;
  }
  function N(a, l) {
    if (!(a instanceof l)) throw new TypeError("Cannot call a class as a function");
  }
  function z(a, l) {
    for (var u = 0; u < l.length; u++) {
      var w = l[u];
      w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(a, R(w.key), w);
    }
  }
  function D(a, l, u) {
    return l && z(a.prototype, l), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function R(a) {
    var l = J(a, "string");
    return i(l) == "symbol" ? l : l + "";
  }
  function J(a, l) {
    if (i(a) != "object" || !a) return a;
    var u = a[Symbol.toPrimitive];
    if (u !== void 0) {
      var w = u.call(a, l);
      if (i(w) != "object") return w;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  function ee(a, l) {
    if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(l && l.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), l && G(a, l);
  }
  function G(a, l) {
    return G = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, w) {
      return u.__proto__ = w, u;
    }, G(a, l);
  }
  function k(a) {
    var l = Z();
    return function() {
      var u, w = X(a);
      if (l) {
        var s = X(this).constructor;
        u = Reflect.construct(w, arguments, s);
      } else u = w.apply(this, arguments);
      return Q(this, u);
    };
  }
  function Q(a, l) {
    if (l && (i(l) == "object" || typeof l == "function")) return l;
    if (l !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return A(a);
  }
  function A(a) {
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
  function X(a) {
    return X = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(l) {
      return l.__proto__ || Object.getPrototypeOf(l);
    }, X(a);
  }
  var F = function(l) {
    var u;
    return l.infinite ? u = Math.ceil(l.slideCount / l.slidesToScroll) : u = Math.ceil((l.slideCount - l.slidesToShow) / l.slidesToScroll) + 1, u;
  };
  return ye.Dots = /* @__PURE__ */ (function(a) {
    ee(u, a);
    var l = k(u);
    function u() {
      return N(this, u), l.apply(this, arguments);
    }
    return D(u, [{
      key: "clickHandler",
      value: function(s, r) {
        r.preventDefault(), this.props.clickHandler(s);
      }
    }, {
      key: "render",
      value: function() {
        for (var s = this.props, r = s.onMouseEnter, y = s.onMouseOver, m = s.onMouseLeave, f = s.infinite, d = s.slidesToScroll, O = s.slidesToShow, P = s.slideCount, t = s.currentSlide, U = F({
          slideCount: P,
          slidesToScroll: d,
          slidesToShow: O,
          infinite: f
        }), o = {
          onMouseEnter: r,
          onMouseOver: y,
          onMouseLeave: m
        }, e = [], n = 0; n < U; n++) {
          var v = (n + 1) * d - 1, _ = f ? v : (0, b.clamp)(v, 0, P - 1), S = _ - (d - 1), T = f ? S : (0, b.clamp)(S, 0, P - 1), C = (0, p.default)({
            "slick-active": f ? t >= T && t <= _ : t === T
          }), j = {
            message: "dots",
            index: n,
            slidesToScroll: d,
            currentSlide: t
          }, W = this.clickHandler.bind(this, j);
          e = e.concat(/* @__PURE__ */ c.default.createElement("li", {
            key: n,
            className: C
          }, /* @__PURE__ */ c.default.cloneElement(this.props.customPaging(n), {
            onClick: W
          })));
        }
        return /* @__PURE__ */ c.default.cloneElement(this.props.appendDots(e), x({
          className: this.props.dotsClass
        }, o));
      }
    }]), u;
  })(c.default.PureComponent), ye;
}
var se = {}, Ye;
function mt() {
  if (Ye) return se;
  Ye = 1;
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
  var c = h(ue), p = h(Pe()), b = be();
  function h(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(a) {
      for (var l = 1; l < arguments.length; l++) {
        var u = arguments[l];
        for (var w in u)
          ({}).hasOwnProperty.call(u, w) && (a[w] = u[w]);
      }
      return a;
    }, g.apply(null, arguments);
  }
  function x(a, l) {
    var u = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var w = Object.getOwnPropertySymbols(a);
      l && (w = w.filter(function(s) {
        return Object.getOwnPropertyDescriptor(a, s).enumerable;
      })), u.push.apply(u, w);
    }
    return u;
  }
  function L(a) {
    for (var l = 1; l < arguments.length; l++) {
      var u = arguments[l] != null ? arguments[l] : {};
      l % 2 ? x(Object(u), !0).forEach(function(w) {
        N(a, w, u[w]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u)) : x(Object(u)).forEach(function(w) {
        Object.defineProperty(a, w, Object.getOwnPropertyDescriptor(u, w));
      });
    }
    return a;
  }
  function N(a, l, u) {
    return (l = J(l)) in a ? Object.defineProperty(a, l, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : a[l] = u, a;
  }
  function z(a, l) {
    if (!(a instanceof l)) throw new TypeError("Cannot call a class as a function");
  }
  function D(a, l) {
    for (var u = 0; u < l.length; u++) {
      var w = l[u];
      w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(a, J(w.key), w);
    }
  }
  function R(a, l, u) {
    return l && D(a.prototype, l), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function J(a) {
    var l = ee(a, "string");
    return i(l) == "symbol" ? l : l + "";
  }
  function ee(a, l) {
    if (i(a) != "object" || !a) return a;
    var u = a[Symbol.toPrimitive];
    if (u !== void 0) {
      var w = u.call(a, l);
      if (i(w) != "object") return w;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  function G(a, l) {
    if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(l && l.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), l && k(a, l);
  }
  function k(a, l) {
    return k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, w) {
      return u.__proto__ = w, u;
    }, k(a, l);
  }
  function Q(a) {
    var l = X();
    return function() {
      var u, w = F(a);
      if (l) {
        var s = F(this).constructor;
        u = Reflect.construct(w, arguments, s);
      } else u = w.apply(this, arguments);
      return A(this, u);
    };
  }
  function A(a, l) {
    if (l && (i(l) == "object" || typeof l == "function")) return l;
    if (l !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Z(a);
  }
  function Z(a) {
    if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a;
  }
  function X() {
    try {
      var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (X = function() {
      return !!a;
    })();
  }
  function F(a) {
    return F = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(l) {
      return l.__proto__ || Object.getPrototypeOf(l);
    }, F(a);
  }
  return se.PrevArrow = /* @__PURE__ */ (function(a) {
    G(u, a);
    var l = Q(u);
    function u() {
      return z(this, u), l.apply(this, arguments);
    }
    return R(u, [{
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
          className: (0, p.default)(s),
          style: {
            display: "block"
          },
          onClick: r
        }, m = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, f;
        return this.props.prevArrow ? f = /* @__PURE__ */ c.default.cloneElement(this.props.prevArrow, L(L({}, y), m)) : f = /* @__PURE__ */ c.default.createElement("button", g({
          key: "0",
          type: "button"
        }, y), " ", "Previous"), f;
      }
    }]), u;
  })(c.default.PureComponent), se.NextArrow = /* @__PURE__ */ (function(a) {
    G(u, a);
    var l = Q(u);
    function u() {
      return z(this, u), l.apply(this, arguments);
    }
    return R(u, [{
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
          className: (0, p.default)(s),
          style: {
            display: "block"
          },
          onClick: r
        }, m = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, f;
        return this.props.nextArrow ? f = /* @__PURE__ */ c.default.cloneElement(this.props.nextArrow, L(L({}, y), m)) : f = /* @__PURE__ */ c.default.createElement("button", g({
          key: "1",
          type: "button"
        }, y), " ", "Next"), f;
      }
    }]), u;
  })(c.default.PureComponent), se;
}
var tt = (function() {
  if (typeof Map < "u")
    return Map;
  function i(c, p) {
    var b = -1;
    return c.some(function(h, g) {
      return h[0] === p ? (b = g, !0) : !1;
    }), b;
  }
  return (
    /** @class */
    (function() {
      function c() {
        this.__entries__ = [];
      }
      return Object.defineProperty(c.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), c.prototype.get = function(p) {
        var b = i(this.__entries__, p), h = this.__entries__[b];
        return h && h[1];
      }, c.prototype.set = function(p, b) {
        var h = i(this.__entries__, p);
        ~h ? this.__entries__[h][1] = b : this.__entries__.push([p, b]);
      }, c.prototype.delete = function(p) {
        var b = this.__entries__, h = i(b, p);
        ~h && b.splice(h, 1);
      }, c.prototype.has = function(p) {
        return !!~i(this.__entries__, p);
      }, c.prototype.clear = function() {
        this.__entries__.splice(0);
      }, c.prototype.forEach = function(p, b) {
        b === void 0 && (b = null);
        for (var h = 0, g = this.__entries__; h < g.length; h++) {
          var x = g[h];
          p.call(b, x[1], x[0]);
        }
      }, c;
    })()
  );
})(), ze = typeof window < "u" && typeof document < "u" && window.document === document, Oe = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), St = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Oe) : function(i) {
    return setTimeout(function() {
      return i(Date.now());
    }, 1e3 / 60);
  };
})(), wt = 2;
function Ot(i, c) {
  var p = !1, b = !1, h = 0;
  function g() {
    p && (p = !1, i()), b && L();
  }
  function x() {
    St(g);
  }
  function L() {
    var N = Date.now();
    if (p) {
      if (N - h < wt)
        return;
      b = !0;
    } else
      p = !0, b = !1, setTimeout(x, c);
    h = N;
  }
  return L;
}
var _t = 20, Pt = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], kt = typeof MutationObserver < "u", Ct = (
  /** @class */
  (function() {
    function i() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Ot(this.refresh.bind(this), _t);
    }
    return i.prototype.addObserver = function(c) {
      ~this.observers_.indexOf(c) || this.observers_.push(c), this.connected_ || this.connect_();
    }, i.prototype.removeObserver = function(c) {
      var p = this.observers_, b = p.indexOf(c);
      ~b && p.splice(b, 1), !p.length && this.connected_ && this.disconnect_();
    }, i.prototype.refresh = function() {
      var c = this.updateObservers_();
      c && this.refresh();
    }, i.prototype.updateObservers_ = function() {
      var c = this.observers_.filter(function(p) {
        return p.gatherActive(), p.hasActive();
      });
      return c.forEach(function(p) {
        return p.broadcastActive();
      }), c.length > 0;
    }, i.prototype.connect_ = function() {
      !ze || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), kt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, i.prototype.disconnect_ = function() {
      !ze || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, i.prototype.onTransitionEnd_ = function(c) {
      var p = c.propertyName, b = p === void 0 ? "" : p, h = Pt.some(function(g) {
        return !!~b.indexOf(g);
      });
      h && this.refresh();
    }, i.getInstance = function() {
      return this.instance_ || (this.instance_ = new i()), this.instance_;
    }, i.instance_ = null, i;
  })()
), rt = (function(i, c) {
  for (var p = 0, b = Object.keys(c); p < b.length; p++) {
    var h = b[p];
    Object.defineProperty(i, h, {
      value: c[h],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return i;
}), ce = (function(i) {
  var c = i && i.ownerDocument && i.ownerDocument.defaultView;
  return c || Oe;
}), nt = ke(0, 0, 0, 0);
function _e(i) {
  return parseFloat(i) || 0;
}
function Xe(i) {
  for (var c = [], p = 1; p < arguments.length; p++)
    c[p - 1] = arguments[p];
  return c.reduce(function(b, h) {
    var g = i["border-" + h + "-width"];
    return b + _e(g);
  }, 0);
}
function Tt(i) {
  for (var c = ["top", "right", "bottom", "left"], p = {}, b = 0, h = c; b < h.length; b++) {
    var g = h[b], x = i["padding-" + g];
    p[g] = _e(x);
  }
  return p;
}
function jt(i) {
  var c = i.getBBox();
  return ke(0, 0, c.width, c.height);
}
function Et(i) {
  var c = i.clientWidth, p = i.clientHeight;
  if (!c && !p)
    return nt;
  var b = ce(i).getComputedStyle(i), h = Tt(b), g = h.left + h.right, x = h.top + h.bottom, L = _e(b.width), N = _e(b.height);
  if (b.boxSizing === "border-box" && (Math.round(L + g) !== c && (L -= Xe(b, "left", "right") + g), Math.round(N + x) !== p && (N -= Xe(b, "top", "bottom") + x)), !Lt(i)) {
    var z = Math.round(L + g) - c, D = Math.round(N + x) - p;
    Math.abs(z) !== 1 && (L -= z), Math.abs(D) !== 1 && (N -= D);
  }
  return ke(h.left, h.top, L, N);
}
var xt = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(i) {
    return i instanceof ce(i).SVGGraphicsElement;
  } : function(i) {
    return i instanceof ce(i).SVGElement && typeof i.getBBox == "function";
  };
})();
function Lt(i) {
  return i === ce(i).document.documentElement;
}
function Mt(i) {
  return ze ? xt(i) ? jt(i) : Et(i) : nt;
}
function Rt(i) {
  var c = i.x, p = i.y, b = i.width, h = i.height, g = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, x = Object.create(g.prototype);
  return rt(x, {
    x: c,
    y: p,
    width: b,
    height: h,
    top: p,
    right: c + b,
    bottom: h + p,
    left: c
  }), x;
}
function ke(i, c, p, b) {
  return { x: i, y: c, width: p, height: b };
}
var zt = (
  /** @class */
  (function() {
    function i(c) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ke(0, 0, 0, 0), this.target = c;
    }
    return i.prototype.isActive = function() {
      var c = Mt(this.target);
      return this.contentRect_ = c, c.width !== this.broadcastWidth || c.height !== this.broadcastHeight;
    }, i.prototype.broadcastRect = function() {
      var c = this.contentRect_;
      return this.broadcastWidth = c.width, this.broadcastHeight = c.height, c;
    }, i;
  })()
), Nt = (
  /** @class */
  /* @__PURE__ */ (function() {
    function i(c, p) {
      var b = Rt(p);
      rt(this, { target: c, contentRect: b });
    }
    return i;
  })()
), Dt = (
  /** @class */
  (function() {
    function i(c, p, b) {
      if (this.activeObservations_ = [], this.observations_ = new tt(), typeof c != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = c, this.controller_ = p, this.callbackCtx_ = b;
    }
    return i.prototype.observe = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof ce(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var p = this.observations_;
        p.has(c) || (p.set(c, new zt(c)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, i.prototype.unobserve = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof ce(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var p = this.observations_;
        p.has(c) && (p.delete(c), p.size || this.controller_.removeObserver(this));
      }
    }, i.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, i.prototype.gatherActive = function() {
      var c = this;
      this.clearActive(), this.observations_.forEach(function(p) {
        p.isActive() && c.activeObservations_.push(p);
      });
    }, i.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var c = this.callbackCtx_, p = this.activeObservations_.map(function(b) {
          return new Nt(b.target, b.broadcastRect());
        });
        this.callback_.call(c, p, c), this.clearActive();
      }
    }, i.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, i.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, i;
  })()
), it = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new tt(), ot = (
  /** @class */
  /* @__PURE__ */ (function() {
    function i(c) {
      if (!(this instanceof i))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var p = Ct.getInstance(), b = new Dt(c, p, this);
      it.set(this, b);
    }
    return i;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(i) {
  ot.prototype[i] = function() {
    var c;
    return (c = it.get(this))[i].apply(c, arguments);
  };
});
var It = (function() {
  return typeof Oe.ResizeObserver < "u" ? Oe.ResizeObserver : ot;
})();
const Ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: It
}, Symbol.toStringTag, { value: "Module" })), At = /* @__PURE__ */ vt(Ht);
var Ke;
function Wt() {
  if (Ke) return ve;
  Ke = 1, Object.defineProperty(ve, "__esModule", {
    value: !0
  }), ve.InnerSlider = void 0;
  var i = z(ue), c = z(ht()), p = z(yt()), b = z(Pe()), h = be(), g = gt(), x = bt(), L = mt(), N = z(At);
  function z(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function D(f) {
    "@babel/helpers - typeof";
    return D = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
      return typeof d;
    } : function(d) {
      return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
    }, D(f);
  }
  function R() {
    return R = Object.assign ? Object.assign.bind() : function(f) {
      for (var d = 1; d < arguments.length; d++) {
        var O = arguments[d];
        for (var P in O)
          ({}).hasOwnProperty.call(O, P) && (f[P] = O[P]);
      }
      return f;
    }, R.apply(null, arguments);
  }
  function J(f, d) {
    if (f == null) return {};
    var O, P, t = ee(f, d);
    if (Object.getOwnPropertySymbols) {
      var U = Object.getOwnPropertySymbols(f);
      for (P = 0; P < U.length; P++)
        O = U[P], d.includes(O) || {}.propertyIsEnumerable.call(f, O) && (t[O] = f[O]);
    }
    return t;
  }
  function ee(f, d) {
    if (f == null) return {};
    var O = {};
    for (var P in f)
      if ({}.hasOwnProperty.call(f, P)) {
        if (d.includes(P)) continue;
        O[P] = f[P];
      }
    return O;
  }
  function G(f, d) {
    var O = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var P = Object.getOwnPropertySymbols(f);
      d && (P = P.filter(function(t) {
        return Object.getOwnPropertyDescriptor(f, t).enumerable;
      })), O.push.apply(O, P);
    }
    return O;
  }
  function k(f) {
    for (var d = 1; d < arguments.length; d++) {
      var O = arguments[d] != null ? arguments[d] : {};
      d % 2 ? G(Object(O), !0).forEach(function(P) {
        r(f, P, O[P]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(O)) : G(Object(O)).forEach(function(P) {
        Object.defineProperty(f, P, Object.getOwnPropertyDescriptor(O, P));
      });
    }
    return f;
  }
  function Q(f, d) {
    if (!(f instanceof d)) throw new TypeError("Cannot call a class as a function");
  }
  function A(f, d) {
    for (var O = 0; O < d.length; O++) {
      var P = d[O];
      P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(f, y(P.key), P);
    }
  }
  function Z(f, d, O) {
    return d && A(f.prototype, d), Object.defineProperty(f, "prototype", { writable: !1 }), f;
  }
  function X(f, d) {
    if (typeof d != "function" && d !== null) throw new TypeError("Super expression must either be null or a function");
    f.prototype = Object.create(d && d.prototype, { constructor: { value: f, writable: !0, configurable: !0 } }), Object.defineProperty(f, "prototype", { writable: !1 }), d && F(f, d);
  }
  function F(f, d) {
    return F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(O, P) {
      return O.__proto__ = P, O;
    }, F(f, d);
  }
  function a(f) {
    var d = w();
    return function() {
      var O, P = s(f);
      if (d) {
        var t = s(this).constructor;
        O = Reflect.construct(P, arguments, t);
      } else O = P.apply(this, arguments);
      return l(this, O);
    };
  }
  function l(f, d) {
    if (d && (D(d) == "object" || typeof d == "function")) return d;
    if (d !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return u(f);
  }
  function u(f) {
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
    return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(d) {
      return d.__proto__ || Object.getPrototypeOf(d);
    }, s(f);
  }
  function r(f, d, O) {
    return (d = y(d)) in f ? Object.defineProperty(f, d, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : f[d] = O, f;
  }
  function y(f) {
    var d = m(f, "string");
    return D(d) == "symbol" ? d : d + "";
  }
  function m(f, d) {
    if (D(f) != "object" || !f) return f;
    var O = f[Symbol.toPrimitive];
    if (O !== void 0) {
      var P = O.call(f, d);
      if (D(P) != "object") return P;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (d === "string" ? String : Number)(f);
  }
  return ve.InnerSlider = /* @__PURE__ */ (function(f) {
    X(O, f);
    var d = a(O);
    function O(P) {
      var t;
      Q(this, O), t = d.call(this, P), r(u(t), "listRefHandler", function(o) {
        return t.list = o;
      }), r(u(t), "trackRefHandler", function(o) {
        return t.track = o;
      }), r(u(t), "adaptHeight", function() {
        if (t.props.adaptiveHeight && t.list) {
          var o = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
          t.list.style.height = (0, h.getHeight)(o) + "px";
        }
      }), r(u(t), "componentDidMount", function() {
        if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
          var o = (0, h.getOnDemandLazySlides)(k(k({}, t.props), t.state));
          o.length > 0 && (t.setState(function(n) {
            return {
              lazyLoadedList: n.lazyLoadedList.concat(o)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(o));
        }
        var e = k({
          listRef: t.list,
          trackRef: t.track
        }, t.props);
        t.updateState(e, !0, function() {
          t.adaptHeight(), t.props.autoplay && t.autoPlay("update");
        }), t.props.lazyLoad === "progressive" && (t.lazyLoadTimer = setInterval(t.progressiveLazyLoad, 1e3)), t.ro = new N.default(function() {
          t.state.animating ? (t.onWindowResized(!1), t.callbackTimers.push(setTimeout(function() {
            return t.onWindowResized();
          }, t.props.speed))) : t.onWindowResized();
        }), t.ro.observe(t.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(n) {
          n.onfocus = t.props.pauseOnFocus ? t.onSlideFocus : null, n.onblur = t.props.pauseOnFocus ? t.onSlideBlur : null;
        }), window.addEventListener ? window.addEventListener("resize", t.onWindowResized) : window.attachEvent("onresize", t.onWindowResized);
      }), r(u(t), "componentWillUnmount", function() {
        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach(function(o) {
          return clearTimeout(o);
        }), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
      }), r(u(t), "componentDidUpdate", function(o) {
        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
          var e = (0, h.getOnDemandLazySlides)(k(k({}, t.props), t.state));
          e.length > 0 && (t.setState(function(_) {
            return {
              lazyLoadedList: _.lazyLoadedList.concat(e)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(e));
        }
        t.adaptHeight();
        var n = k(k({
          listRef: t.list,
          trackRef: t.track
        }, t.props), t.state), v = t.didPropsChange(o);
        v && t.updateState(n, v, function() {
          t.state.currentSlide >= i.default.Children.count(t.props.children) && t.changeSlide({
            message: "index",
            index: i.default.Children.count(t.props.children) - t.props.slidesToShow,
            currentSlide: t.state.currentSlide
          }), t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
        });
      }), r(u(t), "onWindowResized", function(o) {
        t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, p.default)(function() {
          return t.resizeWindow(o);
        }, 50), t.debouncedResize();
      }), r(u(t), "resizeWindow", function() {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = !!(t.track && t.track.node);
        if (e) {
          var n = k(k({
            listRef: t.list,
            trackRef: t.track
          }, t.props), t.state);
          t.updateState(n, o, function() {
            t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
          }), t.setState({
            animating: !1
          }), clearTimeout(t.animationEndCallback), delete t.animationEndCallback;
        }
      }), r(u(t), "updateState", function(o, e, n) {
        var v = (0, h.initializedState)(o);
        o = k(k(k({}, o), v), {}, {
          slideIndex: v.currentSlide
        });
        var _ = (0, h.getTrackLeft)(o);
        o = k(k({}, o), {}, {
          left: _
        });
        var S = (0, h.getTrackCSS)(o);
        (e || i.default.Children.count(t.props.children) !== i.default.Children.count(o.children)) && (v.trackStyle = S), t.setState(v, n);
      }), r(u(t), "ssrInit", function() {
        if (t.props.variableWidth) {
          var o = 0, e = 0, n = [], v = (0, h.getPreClones)(k(k(k({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          })), _ = (0, h.getPostClones)(k(k(k({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          }));
          t.props.children.forEach(function(re) {
            n.push(re.props.style.width), o += re.props.style.width;
          });
          for (var S = 0; S < v; S++)
            e += n[n.length - 1 - S], o += n[n.length - 1 - S];
          for (var T = 0; T < _; T++)
            o += n[T];
          for (var C = 0; C < t.state.currentSlide; C++)
            e += n[C];
          var j = {
            width: o + "px",
            left: -e + "px"
          };
          if (t.props.centerMode) {
            var W = "".concat(n[t.state.currentSlide], "px");
            j.left = "calc(".concat(j.left, " + (100% - ").concat(W, ") / 2 ) ");
          }
          return {
            trackStyle: j
          };
        }
        var q = i.default.Children.count(t.props.children), $ = k(k(k({}, t.props), t.state), {}, {
          slideCount: q
        }), V = (0, h.getPreClones)($) + (0, h.getPostClones)($) + q, K = 100 / t.props.slidesToShow * V, B = 100 / V, H = -B * ((0, h.getPreClones)($) + t.state.currentSlide) * K / 100;
        t.props.centerMode && (H += (100 - B * K / 100) / 2);
        var Y = {
          width: K + "%",
          left: H + "%"
        };
        return {
          slideWidth: B + "%",
          trackStyle: Y
        };
      }), r(u(t), "checkImagesLoad", function() {
        var o = t.list && t.list.querySelectorAll && t.list.querySelectorAll(".slick-slide img") || [], e = o.length, n = 0;
        Array.prototype.forEach.call(o, function(v) {
          var _ = function() {
            return ++n && n >= e && t.onWindowResized();
          };
          if (!v.onclick)
            v.onclick = function() {
              return v.parentNode.focus();
            };
          else {
            var S = v.onclick;
            v.onclick = function(T) {
              S(T), v.parentNode.focus();
            };
          }
          v.onload || (t.props.lazyLoad ? v.onload = function() {
            t.adaptHeight(), t.callbackTimers.push(setTimeout(t.onWindowResized, t.props.speed));
          } : (v.onload = _, v.onerror = function() {
            _(), t.props.onLazyLoadError && t.props.onLazyLoadError();
          }));
        });
      }), r(u(t), "progressiveLazyLoad", function() {
        for (var o = [], e = k(k({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, h.getPostClones)(e); n++)
          if (t.state.lazyLoadedList.indexOf(n) < 0) {
            o.push(n);
            break;
          }
        for (var v = t.state.currentSlide - 1; v >= -(0, h.getPreClones)(e); v--)
          if (t.state.lazyLoadedList.indexOf(v) < 0) {
            o.push(v);
            break;
          }
        o.length > 0 ? (t.setState(function(_) {
          return {
            lazyLoadedList: _.lazyLoadedList.concat(o)
          };
        }), t.props.onLazyLoad && t.props.onLazyLoad(o)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
      }), r(u(t), "slideHandler", function(o) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = t.props, v = n.asNavFor, _ = n.beforeChange, S = n.onLazyLoad, T = n.speed, C = n.afterChange, j = t.state.currentSlide, W = (0, h.slideHandler)(k(k(k({
          index: o
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e
        })), q = W.state, $ = W.nextState;
        if (q) {
          _ && _(j, q.currentSlide);
          var V = q.lazyLoadedList.filter(function(K) {
            return t.state.lazyLoadedList.indexOf(K) < 0;
          });
          S && V.length > 0 && S(V), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), C && C(j), delete t.animationEndCallback), t.setState(q, function() {
            v && t.asNavForIndex !== o && (t.asNavForIndex = o, v.innerSlider.slideHandler(o)), $ && (t.animationEndCallback = setTimeout(function() {
              var K = $.animating, B = J($, ["animating"]);
              t.setState(B, function() {
                t.callbackTimers.push(setTimeout(function() {
                  return t.setState({
                    animating: K
                  });
                }, 10)), C && C(q.currentSlide), delete t.animationEndCallback;
              });
            }, T));
          });
        }
      }), r(u(t), "changeSlide", function(o) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = k(k({}, t.props), t.state), v = (0, h.changeSlide)(n, o);
        if (!(v !== 0 && !v) && (e === !0 ? t.slideHandler(v, e) : t.slideHandler(v), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
          var _ = t.list.querySelectorAll(".slick-current");
          _[0] && _[0].focus();
        }
      }), r(u(t), "clickHandler", function(o) {
        t.clickable === !1 && (o.stopPropagation(), o.preventDefault()), t.clickable = !0;
      }), r(u(t), "keyHandler", function(o) {
        var e = (0, h.keyHandler)(o, t.props.accessibility, t.props.rtl);
        e !== "" && t.changeSlide({
          message: e
        });
      }), r(u(t), "selectHandler", function(o) {
        t.changeSlide(o);
      }), r(u(t), "disableBodyScroll", function() {
        var o = function(n) {
          n = n || window.event, n.preventDefault && n.preventDefault(), n.returnValue = !1;
        };
        window.ontouchmove = o;
      }), r(u(t), "enableBodyScroll", function() {
        window.ontouchmove = null;
      }), r(u(t), "swipeStart", function(o) {
        t.props.verticalSwiping && t.disableBodyScroll();
        var e = (0, h.swipeStart)(o, t.props.swipe, t.props.draggable);
        e !== "" && t.setState(e);
      }), r(u(t), "swipeMove", function(o) {
        var e = (0, h.swipeMove)(o, k(k(k({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(u(t), "swipeEnd", function(o) {
        var e = (0, h.swipeEnd)(o, k(k(k({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        if (e) {
          var n = e.triggerSlideHandler;
          delete e.triggerSlideHandler, t.setState(e), n !== void 0 && (t.slideHandler(n), t.props.verticalSwiping && t.enableBodyScroll());
        }
      }), r(u(t), "touchEnd", function(o) {
        t.swipeEnd(o), t.clickable = !0;
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
      }), r(u(t), "slickGoTo", function(o) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (o = Number(o), isNaN(o)) return "";
        t.callbackTimers.push(setTimeout(function() {
          return t.changeSlide({
            message: "index",
            index: o,
            currentSlide: t.state.currentSlide
          }, e);
        }, 0));
      }), r(u(t), "play", function() {
        var o;
        if (t.props.rtl)
          o = t.state.currentSlide - t.props.slidesToScroll;
        else if ((0, h.canGoNext)(k(k({}, t.props), t.state)))
          o = t.state.currentSlide + t.props.slidesToScroll;
        else
          return !1;
        t.slideHandler(o);
      }), r(u(t), "autoPlay", function(o) {
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
      }), r(u(t), "pause", function(o) {
        t.autoplayTimer && (clearInterval(t.autoplayTimer), t.autoplayTimer = null);
        var e = t.state.autoplaying;
        o === "paused" ? t.setState({
          autoplaying: "paused"
        }) : o === "focused" ? (e === "hovered" || e === "playing") && t.setState({
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
        var o = (0, b.default)("slick-slider", t.props.className, {
          "slick-vertical": t.props.vertical,
          "slick-initialized": !0
        }), e = k(k({}, t.props), t.state), n = (0, h.extractObject)(e, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), v = t.props.pauseOnHover;
        n = k(k({}, n), {}, {
          onMouseEnter: v ? t.onTrackOver : null,
          onMouseLeave: v ? t.onTrackLeave : null,
          onMouseOver: v ? t.onTrackOver : null,
          focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
        });
        var _;
        if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
          var S = (0, h.extractObject)(e, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), T = t.props.pauseOnDotsHover;
          S = k(k({}, S), {}, {
            clickHandler: t.changeSlide,
            onMouseEnter: T ? t.onDotsLeave : null,
            onMouseOver: T ? t.onDotsOver : null,
            onMouseLeave: T ? t.onDotsLeave : null
          }), _ = /* @__PURE__ */ i.default.createElement(x.Dots, S);
        }
        var C, j, W = (0, h.extractObject)(e, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        W.clickHandler = t.changeSlide, t.props.arrows && (C = /* @__PURE__ */ i.default.createElement(L.PrevArrow, W), j = /* @__PURE__ */ i.default.createElement(L.NextArrow, W));
        var q = null;
        t.props.vertical && (q = {
          height: t.state.listHeight
        });
        var $ = null;
        t.props.vertical === !1 ? t.props.centerMode === !0 && ($ = {
          padding: "0px " + t.props.centerPadding
        }) : t.props.centerMode === !0 && ($ = {
          padding: t.props.centerPadding + " 0px"
        });
        var V = k(k({}, q), $), K = t.props.touchMove, B = {
          className: "slick-list",
          style: V,
          onClick: t.clickHandler,
          onMouseDown: K ? t.swipeStart : null,
          onMouseMove: t.state.dragging && K ? t.swipeMove : null,
          onMouseUp: K ? t.swipeEnd : null,
          onMouseLeave: t.state.dragging && K ? t.swipeEnd : null,
          onTouchStart: K ? t.swipeStart : null,
          onTouchMove: t.state.dragging && K ? t.swipeMove : null,
          onTouchEnd: K ? t.touchEnd : null,
          onTouchCancel: t.state.dragging && K ? t.swipeEnd : null,
          onKeyDown: t.props.accessibility ? t.keyHandler : null
        }, H = {
          className: o,
          dir: "ltr",
          style: t.props.style
        };
        return t.props.unslick && (B = {
          className: "slick-list"
        }, H = {
          className: o,
          style: t.props.style
        }), /* @__PURE__ */ i.default.createElement("div", H, t.props.unslick ? "" : C, /* @__PURE__ */ i.default.createElement("div", R({
          ref: t.listRefHandler
        }, B), /* @__PURE__ */ i.default.createElement(g.Track, R({
          ref: t.trackRefHandler
        }, n), t.props.children)), t.props.unslick ? "" : j, t.props.unslick ? "" : _);
      }), t.list = null, t.track = null, t.state = k(k({}, c.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: i.default.Children.count(t.props.children)
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      var U = t.ssrInit();
      return t.state = k(k({}, t.state), U), t;
    }
    return Z(O, [{
      key: "didPropsChange",
      value: function(t) {
        for (var U = !1, o = 0, e = Object.keys(this.props); o < e.length; o++) {
          var n = e[o];
          if (!t.hasOwnProperty(n)) {
            U = !0;
            break;
          }
          if (!(D(t[n]) === "object" || typeof t[n] == "function" || isNaN(t[n])) && t[n] !== this.props[n]) {
            U = !0;
            break;
          }
        }
        return U || i.default.Children.count(this.props.children) !== i.default.Children.count(t.children);
      }
    }]), O;
  })(i.default.Component), ve;
}
var Me, Ve;
function qt() {
  if (Ve) return Me;
  Ve = 1;
  var i = function(c) {
    return c.replace(/[A-Z]/g, function(p) {
      return "-" + p.toLowerCase();
    }).toLowerCase();
  };
  return Me = i, Me;
}
var Re, Je;
function Ft() {
  if (Je) return Re;
  Je = 1;
  var i = qt(), c = function(h) {
    var g = /[height|width]$/;
    return g.test(h);
  }, p = function(h) {
    var g = "", x = Object.keys(h);
    return x.forEach(function(L, N) {
      var z = h[L];
      L = i(L), c(L) && typeof z == "number" && (z = z + "px"), z === !0 ? g += L : z === !1 ? g += "not " + L : g += "(" + L + ": " + z + ")", N < x.length - 1 && (g += " and ");
    }), g;
  }, b = function(h) {
    var g = "";
    return typeof h == "string" ? h : h instanceof Array ? (h.forEach(function(x, L) {
      g += p(x), L < h.length - 1 && (g += ", ");
    }), g) : p(h);
  };
  return Re = b, Re;
}
var Qe;
function $t() {
  return Qe || (Qe = 1, (function(i) {
    var c = { NODE_ENV: "production" };
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var p = L(ue), b = Wt(), h = L(Ft()), g = L(et()), x = be();
    function L(s) {
      return s && s.__esModule ? s : { default: s };
    }
    function N(s) {
      "@babel/helpers - typeof";
      return N = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
        return typeof r;
      } : function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, N(s);
    }
    function z() {
      return z = Object.assign ? Object.assign.bind() : function(s) {
        for (var r = 1; r < arguments.length; r++) {
          var y = arguments[r];
          for (var m in y)
            ({}).hasOwnProperty.call(y, m) && (s[m] = y[m]);
        }
        return s;
      }, z.apply(null, arguments);
    }
    function D(s, r) {
      var y = Object.keys(s);
      if (Object.getOwnPropertySymbols) {
        var m = Object.getOwnPropertySymbols(s);
        r && (m = m.filter(function(f) {
          return Object.getOwnPropertyDescriptor(s, f).enumerable;
        })), y.push.apply(y, m);
      }
      return y;
    }
    function R(s) {
      for (var r = 1; r < arguments.length; r++) {
        var y = arguments[r] != null ? arguments[r] : {};
        r % 2 ? D(Object(y), !0).forEach(function(m) {
          l(s, m, y[m]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(y)) : D(Object(y)).forEach(function(m) {
          Object.defineProperty(s, m, Object.getOwnPropertyDescriptor(y, m));
        });
      }
      return s;
    }
    function J(s, r) {
      if (!(s instanceof r)) throw new TypeError("Cannot call a class as a function");
    }
    function ee(s, r) {
      for (var y = 0; y < r.length; y++) {
        var m = r[y];
        m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(s, u(m.key), m);
      }
    }
    function G(s, r, y) {
      return r && ee(s.prototype, r), Object.defineProperty(s, "prototype", { writable: !1 }), s;
    }
    function k(s, r) {
      if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
      s.prototype = Object.create(r && r.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, "prototype", { writable: !1 }), r && Q(s, r);
    }
    function Q(s, r) {
      return Q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(y, m) {
        return y.__proto__ = m, y;
      }, Q(s, r);
    }
    function A(s) {
      var r = F();
      return function() {
        var y, m = a(s);
        if (r) {
          var f = a(this).constructor;
          y = Reflect.construct(m, arguments, f);
        } else y = m.apply(this, arguments);
        return Z(this, y);
      };
    }
    function Z(s, r) {
      if (r && (N(r) == "object" || typeof r == "function")) return r;
      if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return X(s);
    }
    function X(s) {
      if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return s;
    }
    function F() {
      try {
        var s = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch {
      }
      return (F = function() {
        return !!s;
      })();
    }
    function a(s) {
      return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
      }, a(s);
    }
    function l(s, r, y) {
      return (r = u(r)) in s ? Object.defineProperty(s, r, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : s[r] = y, s;
    }
    function u(s) {
      var r = w(s, "string");
      return N(r) == "symbol" ? r : r + "";
    }
    function w(s, r) {
      if (N(s) != "object" || !s) return s;
      var y = s[Symbol.toPrimitive];
      if (y !== void 0) {
        var m = y.call(s, r);
        if (N(m) != "object") return m;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(s);
    }
    i.default = /* @__PURE__ */ (function(s) {
      k(y, s);
      var r = A(y);
      function y(m) {
        var f;
        return J(this, y), f = r.call(this, m), l(X(f), "innerSliderRefHandler", function(d) {
          return f.innerSlider = d;
        }), l(X(f), "slickPrev", function() {
          return f.innerSlider.slickPrev();
        }), l(X(f), "slickNext", function() {
          return f.innerSlider.slickNext();
        }), l(X(f), "slickGoTo", function(d) {
          var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return f.innerSlider.slickGoTo(d, O);
        }), l(X(f), "slickPause", function() {
          return f.innerSlider.pause("paused");
        }), l(X(f), "slickPlay", function() {
          return f.innerSlider.autoPlay("play");
        }), f.state = {
          breakpoint: null
        }, f._responsiveMediaHandlers = [], f;
      }
      return G(y, [{
        key: "media",
        value: function(f, d) {
          var O = window.matchMedia(f), P = function(U) {
            var o = U.matches;
            o && d();
          };
          O.addListener(P), this._responsiveMediaHandlers.push({
            mql: O,
            query: f,
            listener: P
          });
        }
        // handles responsive breakpoints
      }, {
        key: "componentDidMount",
        value: function() {
          var f = this;
          if (this.props.responsive) {
            var d = this.props.responsive.map(function(P) {
              return P.breakpoint;
            });
            d.sort(function(P, t) {
              return P - t;
            }), d.forEach(function(P, t) {
              var U;
              t === 0 ? U = (0, h.default)({
                minWidth: 0,
                maxWidth: P
              }) : U = (0, h.default)({
                minWidth: d[t - 1] + 1,
                maxWidth: P
              }), (0, x.canUseDOM)() && f.media(U, function() {
                f.setState({
                  breakpoint: P
                });
              });
            });
            var O = (0, h.default)({
              minWidth: d.slice(-1)[0]
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
          var f = this, d, O;
          this.state.breakpoint ? (O = this.props.responsive.filter(function(T) {
            return T.breakpoint === f.state.breakpoint;
          }), d = O[0].settings === "unslick" ? "unslick" : R(R(R({}, g.default), this.props), O[0].settings)) : d = R(R({}, g.default), this.props), d.centerMode && (d.slidesToScroll > 1 && c.NODE_ENV, d.slidesToScroll = 1), d.fade && (d.slidesToShow > 1 && c.NODE_ENV, d.slidesToScroll > 1 && c.NODE_ENV, d.slidesToShow = 1, d.slidesToScroll = 1);
          var P = p.default.Children.toArray(this.props.children);
          P = P.filter(function(T) {
            return typeof T == "string" ? !!T.trim() : !!T;
          }), d.variableWidth && (d.rows > 1 || d.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), d.variableWidth = !1);
          for (var t = [], U = null, o = 0; o < P.length; o += d.rows * d.slidesPerRow) {
            for (var e = [], n = o; n < o + d.rows * d.slidesPerRow; n += d.slidesPerRow) {
              for (var v = [], _ = n; _ < n + d.slidesPerRow && (d.variableWidth && P[_].props.style && (U = P[_].props.style.width), !(_ >= P.length)); _ += 1)
                v.push(/* @__PURE__ */ p.default.cloneElement(P[_], {
                  key: 100 * o + 10 * n + _,
                  tabIndex: -1,
                  style: {
                    width: "".concat(100 / d.slidesPerRow, "%"),
                    display: "inline-block"
                  }
                }));
              e.push(/* @__PURE__ */ p.default.createElement("div", {
                key: 10 * o + n
              }, v));
            }
            d.variableWidth ? t.push(/* @__PURE__ */ p.default.createElement("div", {
              key: o,
              style: {
                width: U
              }
            }, e)) : t.push(/* @__PURE__ */ p.default.createElement("div", {
              key: o
            }, e));
          }
          if (d === "unslick") {
            var S = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ p.default.createElement("div", {
              className: S
            }, P);
          } else t.length <= d.slidesToShow && (d.unslick = !0);
          return /* @__PURE__ */ p.default.createElement(b.InnerSlider, z({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, (0, x.filterSettings)(d)), t);
        }
      }]), y;
    })(p.default.Component);
  })(Te)), Te;
}
var Ze;
function Bt() {
  return Ze || (Ze = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var c = p($t());
    function p(b) {
      return b && b.__esModule ? b : { default: b };
    }
    i.default = c.default;
  })(Ce)), Ce;
}
var Gt = Bt();
const Ut = /* @__PURE__ */ pt(Gt);
function Yt({
  cardTitle: i,
  bodyLarge: c,
  bodyDefault: p,
  bodySmall: b,
  iconUrl: h,
  className: g = "",
  ...x
}) {
  const L = `w-full  ${g}`.trim();
  return /* @__PURE__ */ M("div", { className: L, ...x, ...x.attributes || {}, children: /* @__PURE__ */ ge("div", { className: "flex flex-col gap-textmedia-btn-text--spacing-y text-left items-start", children: [
    h && /* @__PURE__ */ M("div", { className: "flex items-center justify-start", children: /* @__PURE__ */ M(
      "img",
      {
        src: h,
        alt: p || "Icon",
        className: "h-100 w-[129px]"
      }
    ) }),
    /* @__PURE__ */ ge("div", { className: "flex flex-col gap-testimonial-spacing-y", children: [
      i && /* @__PURE__ */ M("p", { className: "text-headings-h3 font-semibold", children: i }),
      (c || p || b) && /* @__PURE__ */ ge("div", { className: "flex flex-col gap-testimonial-spacing-y items-start", children: [
        c && /* @__PURE__ */ M("p", { className: "text-body-large", children: c }),
        p && /* @__PURE__ */ M("p", { className: "text-body-default", children: p }),
        b && /* @__PURE__ */ M("p", { className: "text-body-small", children: b })
      ] })
    ] })
  ] }) });
}
const Xt = st(() => Promise.resolve().then(() => er)), Kt = ({
  media: i = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: c = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: p = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: b,
  videoUrl: h,
  lottieUrl: g,
  lottieData: x,
  iframeUrl: L,
  flipbookUrl: N,
  title: z,
  className: D = ""
}) => {
  var l;
  const R = typeof window < "u" && window.location.origin.indexOf("author") > -1, J = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, G = `relative w-full h-full ${c === "square" ? "aspect-square" : c === "rectangle" ? "aspect-[4/3]" : i === "video" ? "aspect-video" : ""}`.trim(), k = c === "default" ? `w-full h-full ${D}`.trim() : `absolute inset-0 w-full h-full ${D}`.trim(), Q = "w-full h-full", A = c === "default" ? `${k}`.trim() : k, Z = p === "contain" ? "object-contain" : "object-cover", X = p === "contain" ? "xMidYMid meet" : "xMidYMid slice", F = `relative w-full ${D}`.trim(), a = "w-full min-h-[280px]";
  switch (i) {
    case "image":
      if (b)
        return /* @__PURE__ */ M("div", { className: G, children: /* @__PURE__ */ M(
          "img",
          {
            src: b,
            alt: z || "Media image",
            className: `${Z} ${k}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (h) {
        const u = h.includes("youtube.com/watch") || h.includes("youtu.be/");
        let w = h;
        u && (w = `https://www.youtube.com/embed/${h.includes("youtu.be/") ? h.split("youtu.be/")[1].split("?")[0] : (l = h.split("v=")[1]) == null ? void 0 : l.split("&")[0]}`);
        const s = (() => {
          if (!u) return w;
          try {
            const r = new URL(w);
            return r.searchParams.set("autoplay", "0"), r.searchParams.set("mute", "0"), r.searchParams.set("playsinline", "1"), r.searchParams.set("controls", "1"), r.searchParams.set("rel", "0"), r.toString();
          } catch {
            return w.includes("?") ? w.includes("autoplay=") ? w : `${w}&autoplay=0` : `${w}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ M("div", { className: G, children: u ? /* @__PURE__ */ M(
          "iframe",
          {
            src: s,
            title: z || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${k} ${Z}`.trim()
          }
        ) : /* @__PURE__ */ M(
          "video",
          {
            className: `${k} ${Z}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: z || "Video player",
            children: /* @__PURE__ */ M("source", { src: h })
          }
        ) });
      }
      break;
    case "lottie":
      if (x)
        return R ? /* @__PURE__ */ M("div", { className: G, role: "img", "aria-label": z || "Animation", children: /* @__PURE__ */ M(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${k}`.trim(),
            children: /* @__PURE__ */ M("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ M(
          "div",
          {
            className: G,
            role: "img",
            "aria-label": z || "Animation",
            children: /* @__PURE__ */ M("div", { className: `${k} overflow-hidden`.trim(), children: /* @__PURE__ */ M(
              dt,
              {
                animationData: x,
                loop: !J,
                autoplay: !J,
                className: Q,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: X }
              }
            ) })
          }
        );
      if (g)
        return /* @__PURE__ */ M("div", { className: G, children: /* @__PURE__ */ M("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (L)
        return /* @__PURE__ */ M("div", { className: G, children: /* @__PURE__ */ M(
          "iframe",
          {
            src: L,
            title: z || "Iframe content",
            frameBorder: "0",
            className: `${A} ${Z}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (N)
        return R ? /* @__PURE__ */ M("div", { className: F, role: "img", "aria-label": z || "Flipbook", children: /* @__PURE__ */ M(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${a}`.trim(),
            children: /* @__PURE__ */ M("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ M("div", { className: F, children: /* @__PURE__ */ M("div", { className: a, children: /* @__PURE__ */ M(ut, { fallback: /* @__PURE__ */ M("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ M(Xt, { pdfUrl: N, title: z, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ M("div", { className: G, children: /* @__PURE__ */ M("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${c === "default" ? "" : "absolute inset-0"}`.trim(), children: i ? `${i.charAt(0).toUpperCase() + i.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function ir({
  giftProCardAndTexts: i = [],
  media: c = null,
  align: p = "left",
  id: b = "",
  className: h = "",
  infinite: g = !1
}) {
  const x = (R) => ({
    cardTitle: R.cardTitle,
    bodyLarge: R.bodyLarge,
    bodyDefault: R.bodyDefault,
    bodySmall: R.bodySmall,
    imageUrl: R.imageUrl,
    iconUrl: R.iconUrl,
    align: R.align ?? p,
    attributes: R.attributes || {}
  }), L = (R, J = "") => R ? /* @__PURE__ */ M("div", { className: "relative w-full h-full min-h-0 size-full overflow-hidden", children: /* @__PURE__ */ M("div", { className: "absolute inset-0 w-full h-full", children: /* @__PURE__ */ M(
    Kt,
    {
      media: R.type || "image",
      aspect: "default",
      imageUrl: R.imageUrl,
      videoUrl: R.videoUrl,
      lottieUrl: R.lottieUrl,
      lottieData: R.lottieData,
      iframeUrl: R.iframeUrl,
      title: R.title || J,
      className: "w-full h-full object-cover"
    }
  ) }) }) : null, N = (R, J) => {
    const ee = R.media || c, G = !!ee, k = G ? "flex-1 min-w-0" : "w-full";
    return /* @__PURE__ */ ge("div", { className: "flex flex-col md:flex-row items-stretch text-gray-950", children: [
      G && /* @__PURE__ */ M("div", { className: "sm:p-48 md:px-0", children: /* @__PURE__ */ M("div", { className: "w-full md:w-[300px] h-[340px] shrink-0 overflow-hidden rounded-[var(--spacing-cards-image--br)]", children: L(ee, R.bodyDefault || "") }) }),
      /* @__PURE__ */ M("div", { className: `flex items-center justify-center pt-40 sm:p-48 ${k}`, children: /* @__PURE__ */ M(Yt, { ...x(R) }) })
    ] }, J);
  }, z = {
    className: "w-full testimonial-slider",
    dots: !0,
    infinite: g,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !1,
    arrows: !1
  };
  if (!i || i.length === 0) return null;
  const D = i.length > 1;
  return /* @__PURE__ */ M("div", { className: `container ${h}`, id: b, children: D ? /* @__PURE__ */ M(Ut, { ...z, children: i.map((R, J) => /* @__PURE__ */ M("div", { children: N(R, J) }, J)) }) : N(i[0], 0) });
}
let Ne, at, De, we;
const Vt = async () => {
  if (!we) {
    const i = await import("react-pdf");
    we = i.pdfjs, at = i.Document, De = i.Page, we.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${we.version}/build/pdf.worker.min.mjs`;
  }
}, Jt = async () => {
  Ne || (Ne = (await import("react-pageflip")).default);
}, Qt = ft(({ children: i }, c) => /* @__PURE__ */ M("div", { ref: c, className: "w-full h-full overflow-hidden", children: i })), Zt = ({ pdfUrl: i, title: c, width: p = 280, height: b = 280, className: h = "" }) => {
  const [g, x] = pe(0), [L, N] = pe(null), [z, D] = pe(!0), [R, J] = pe(b / p), [ee, G] = pe(0), k = ct(null);
  He(() => {
    Promise.all([Vt(), Jt()]).then(() => D(!1)).catch(() => {
      N("Failed to load flipbook");
    });
  }, []), He(() => {
    const F = k.current;
    if (!F) return;
    const a = new ResizeObserver(([l]) => {
      const u = Math.floor(l.contentRect.width);
      u > 0 && G(u);
    });
    return a.observe(F), () => a.disconnect();
  }, [z]);
  const Q = ee > 0 ? Math.floor(ee / 2) : Math.floor(p / 2), A = Math.round(Q * R), Z = Ae(async (F) => {
    try {
      const l = (await F.getPage(1)).getViewport({ scale: 1 });
      l != null && l.width && (l != null && l.height) && J(l.height / l.width);
    } catch {
    }
    x(F.numPages || 0);
  }, []), X = Ae((F) => {
    N((F == null ? void 0 : F.message) || "Failed to load PDF");
  }, []);
  return L ? /* @__PURE__ */ M("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : z ? /* @__PURE__ */ M("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ M("div", { ref: k, className: `w-full ${h}`.trim(), children: /* @__PURE__ */ ge(
    at,
    {
      file: i,
      onLoadSuccess: Z,
      onLoadError: X,
      loading: /* @__PURE__ */ M("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        g === 1 && /* @__PURE__ */ M(
          "div",
          {
            className: `w-full flex justify-center items-center ${h}`.trim(),
            style: { minHeight: `${A}px` },
            children: /* @__PURE__ */ M(De, { pageNumber: 1, width: p, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        g > 1 && /* @__PURE__ */ M(
          Ne,
          {
            width: Q,
            height: A,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": c || "Flipbook",
            children: Array.from({ length: g }, (F, a) => /* @__PURE__ */ M(Qt, { children: /* @__PURE__ */ M(De, { pageNumber: a + 1, width: Q, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, a))
          },
          `${Q}-${A}`
        )
      ]
    }
  ) });
}, er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zt
}, Symbol.toStringTag, { value: "Module" }));
export {
  ir as default
};
