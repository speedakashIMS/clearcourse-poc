import { jsx as M, jsxs as ae } from "react/jsx-runtime";
import * as Se from "react";
import ce, { useState as Ye, useEffect as nt } from "react";
var me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function it(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function ot(o) {
  if (Object.prototype.hasOwnProperty.call(o, "__esModule")) return o;
  var d = o.default;
  if (typeof d == "function") {
    var v = function m() {
      return this instanceof m ? Reflect.construct(d, arguments, this.constructor) : d.apply(this, arguments);
    };
    v.prototype = d.prototype;
  } else v = {};
  return Object.defineProperty(v, "__esModule", { value: !0 }), Object.keys(o).forEach(function(m) {
    var y = Object.getOwnPropertyDescriptor(o, m);
    Object.defineProperty(v, m, y.get ? y : {
      enumerable: !0,
      get: function() {
        return o[m];
      }
    });
  }), v;
}
var ke = {}, Ce = {}, ve = {}, Te = {}, De;
function at() {
  return De || (De = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
    var d = {
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
    o.default = d;
  })(Te)), Te;
}
var je, Ne;
function lt() {
  if (Ne) return je;
  Ne = 1;
  var o = "Expected a function", d = NaN, v = "[object Symbol]", m = /^\s+|\s+$/g, y = /^[-+]0x[0-9a-f]+$/i, g = /^0b[01]+$/i, L = /^0o[0-7]+$/i, x = parseInt, I = typeof me == "object" && me && me.Object === Object && me, R = typeof self == "object" && self && self.Object === Object && self, z = I || R || Function("return this")(), F = Object.prototype, Q = F.toString, Z = Math.max, V = Math.min, T = function() {
    return z.Date.now();
  };
  function J(a, s, f) {
    var P, l, r, h, S, c, u = 0, b = !1, w = !1, e = !0;
    if (typeof a != "function")
      throw new TypeError(o);
    s = Y(s) || 0, B(f) && (b = !!f.leading, w = "maxWait" in f, r = w ? Z(Y(f.maxWait) || 0, s) : r, e = "trailing" in f ? !!f.trailing : e);
    function N(j) {
      var W = P, A = l;
      return P = l = void 0, u = j, h = a.apply(A, W), h;
    }
    function i(j) {
      return u = j, S = setTimeout(p, s), b ? N(j) : h;
    }
    function t(j) {
      var W = j - c, A = j - u, q = s - W;
      return w ? V(q, r - A) : q;
    }
    function n(j) {
      var W = j - c, A = j - u;
      return c === void 0 || W >= s || W < 0 || w && A >= r;
    }
    function p() {
      var j = T();
      if (n(j))
        return _(j);
      S = setTimeout(p, t(j));
    }
    function _(j) {
      return S = void 0, e && P ? N(j) : (P = l = void 0, h);
    }
    function O() {
      S !== void 0 && clearTimeout(S), u = 0, P = c = l = S = void 0;
    }
    function C() {
      return S === void 0 ? h : _(T());
    }
    function k() {
      var j = T(), W = n(j);
      if (P = arguments, l = this, c = j, W) {
        if (S === void 0)
          return i(c);
        if (w)
          return S = setTimeout(p, s), N(c);
      }
      return S === void 0 && (S = setTimeout(p, s)), h;
    }
    return k.cancel = O, k.flush = C, k;
  }
  function B(a) {
    var s = typeof a;
    return !!a && (s == "object" || s == "function");
  }
  function te(a) {
    return !!a && typeof a == "object";
  }
  function K(a) {
    return typeof a == "symbol" || te(a) && Q.call(a) == v;
  }
  function Y(a) {
    if (typeof a == "number")
      return a;
    if (K(a))
      return d;
    if (B(a)) {
      var s = typeof a.valueOf == "function" ? a.valueOf() : a;
      a = B(s) ? s + "" : s;
    }
    if (typeof a != "string")
      return a === 0 ? a : +a;
    a = a.replace(m, "");
    var f = g.test(a);
    return f || L.test(a) ? x(a.slice(2), f ? 2 : 8) : y.test(a) ? d : +a;
  }
  return je = J, je;
}
var Ee = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var He;
function _e() {
  return He || (He = 1, (function(o) {
    (function() {
      var d = {}.hasOwnProperty;
      function v() {
        for (var g = "", L = 0; L < arguments.length; L++) {
          var x = arguments[L];
          x && (g = y(g, m(x)));
        }
        return g;
      }
      function m(g) {
        if (typeof g == "string" || typeof g == "number")
          return g;
        if (typeof g != "object")
          return "";
        if (Array.isArray(g))
          return v.apply(null, g);
        if (g.toString !== Object.prototype.toString && !g.toString.toString().includes("[native code]"))
          return g.toString();
        var L = "";
        for (var x in g)
          d.call(g, x) && g[x] && (L = y(L, x));
        return L;
      }
      function y(g, L) {
        return L ? g ? g + " " + L : g + L : g;
      }
      o.exports ? (v.default = v, o.exports = v) : window.classNames = v;
    })();
  })(Ee)), Ee.exports;
}
var E = {}, xe = {}, We;
function Ve() {
  return We || (We = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
    var d = v(ce);
    function v(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var m = {
      accessibility: !0,
      adaptiveHeight: !1,
      afterChange: null,
      appendDots: function(g) {
        return /* @__PURE__ */ d.default.createElement("ul", {
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
        return /* @__PURE__ */ d.default.createElement("button", null, g + 1);
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
  })(xe)), xe;
}
var Ae;
function be() {
  if (Ae) return E;
  Ae = 1, Object.defineProperty(E, "__esModule", {
    value: !0
  }), E.checkSpecKeys = E.checkNavigable = E.changeSlide = E.canUseDOM = E.canGoNext = void 0, E.clamp = R, E.extractObject = void 0, E.filterSettings = N, E.validSettings = E.swipeStart = E.swipeMove = E.swipeEnd = E.slidesOnRight = E.slidesOnLeft = E.slideHandler = E.siblingDirection = E.safePreventDefault = E.lazyStartIndex = E.lazySlidesOnRight = E.lazySlidesOnLeft = E.lazyEndIndex = E.keyHandler = E.initializedState = E.getWidth = E.getTrackLeft = E.getTrackCSS = E.getTrackAnimateCSS = E.getTotalSlides = E.getSwipeDirection = E.getSlideCount = E.getRequiredLazySlides = E.getPreClones = E.getPostClones = E.getOnDemandLazySlides = E.getNavigableIndexes = E.getHeight = void 0;
  var o = v(ce), d = v(Ve());
  function v(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function m(i) {
    "@babel/helpers - typeof";
    return m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, m(i);
  }
  function y(i, t) {
    var n = Object.keys(i);
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(i);
      t && (p = p.filter(function(_) {
        return Object.getOwnPropertyDescriptor(i, _).enumerable;
      })), n.push.apply(n, p);
    }
    return n;
  }
  function g(i) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2 ? y(Object(n), !0).forEach(function(p) {
        L(i, p, n[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(p) {
        Object.defineProperty(i, p, Object.getOwnPropertyDescriptor(n, p));
      });
    }
    return i;
  }
  function L(i, t, n) {
    return (t = x(t)) in i ? Object.defineProperty(i, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : i[t] = n, i;
  }
  function x(i) {
    var t = I(i, "string");
    return m(t) == "symbol" ? t : t + "";
  }
  function I(i, t) {
    if (m(i) != "object" || !i) return i;
    var n = i[Symbol.toPrimitive];
    if (n !== void 0) {
      var p = n.call(i, t);
      if (m(p) != "object") return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(i);
  }
  function R(i, t, n) {
    return Math.max(t, Math.min(i, n));
  }
  var z = E.safePreventDefault = function(t) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(t._reactName) || t.preventDefault();
  }, F = E.getOnDemandLazySlides = function(t) {
    for (var n = [], p = Q(t), _ = Z(t), O = p; O < _; O++)
      t.lazyLoadedList.indexOf(O) < 0 && n.push(O);
    return n;
  };
  E.getRequiredLazySlides = function(t) {
    for (var n = [], p = Q(t), _ = Z(t), O = p; O < _; O++)
      n.push(O);
    return n;
  };
  var Q = E.lazyStartIndex = function(t) {
    return t.currentSlide - V(t);
  }, Z = E.lazyEndIndex = function(t) {
    return t.currentSlide + T(t);
  }, V = E.lazySlidesOnLeft = function(t) {
    return t.centerMode ? Math.floor(t.slidesToShow / 2) + (parseInt(t.centerPadding) > 0 ? 1 : 0) : 0;
  }, T = E.lazySlidesOnRight = function(t) {
    return t.centerMode ? Math.floor((t.slidesToShow - 1) / 2) + 1 + (parseInt(t.centerPadding) > 0 ? 1 : 0) : t.slidesToShow;
  }, J = E.getWidth = function(t) {
    return t && t.offsetWidth || 0;
  }, B = E.getHeight = function(t) {
    return t && t.offsetHeight || 0;
  }, te = E.getSwipeDirection = function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, p, _, O, C;
    return p = t.startX - t.curX, _ = t.startY - t.curY, O = Math.atan2(_, p), C = Math.round(O * 180 / Math.PI), C < 0 && (C = 360 - Math.abs(C)), C <= 45 && C >= 0 || C <= 360 && C >= 315 ? "left" : C >= 135 && C <= 225 ? "right" : n === !0 ? C >= 35 && C <= 135 ? "up" : "down" : "vertical";
  }, K = E.canGoNext = function(t) {
    var n = !0;
    return t.infinite || (t.centerMode && t.currentSlide >= t.slideCount - 1 || t.slideCount <= t.slidesToShow || t.currentSlide >= t.slideCount - t.slidesToShow) && (n = !1), n;
  };
  E.extractObject = function(t, n) {
    var p = {};
    return n.forEach(function(_) {
      return p[_] = t[_];
    }), p;
  }, E.initializedState = function(t) {
    var n = o.default.Children.count(t.children), p = t.listRef, _ = Math.ceil(J(p)), O = t.trackRef && t.trackRef.node, C = Math.ceil(J(O)), k;
    if (t.vertical)
      k = _;
    else {
      var j = t.centerMode && parseInt(t.centerPadding) * 2;
      typeof t.centerPadding == "string" && t.centerPadding.slice(-1) === "%" && (j *= _ / 100), k = Math.ceil((_ - j) / t.slidesToShow);
    }
    var W = p && B(p.querySelector('[data-index="0"]')), A = W * t.slidesToShow, q = t.currentSlide === void 0 ? t.initialSlide : t.currentSlide;
    t.rtl && t.currentSlide === void 0 && (q = n - 1 - t.initialSlide);
    var U = t.lazyLoadedList || [], X = F(g(g({}, t), {}, {
      currentSlide: q,
      lazyLoadedList: U
    }));
    U = U.concat(X);
    var $ = {
      slideCount: n,
      slideWidth: k,
      listWidth: _,
      trackWidth: C,
      currentSlide: q,
      slideHeight: W,
      listHeight: A,
      lazyLoadedList: U
    };
    return t.autoplaying === null && t.autoplay && ($.autoplaying = "playing"), $;
  }, E.slideHandler = function(t) {
    var n = t.waitForAnimate, p = t.animating, _ = t.fade, O = t.infinite, C = t.index, k = t.slideCount, j = t.lazyLoad, W = t.currentSlide, A = t.centerMode, q = t.slidesToScroll, U = t.slidesToShow, X = t.useCSS, $ = t.lazyLoadedList;
    if (n && p) return {};
    var H = C, G, re, D, ee = {}, ne = {}, ie = O ? C : R(C, 0, k - 1);
    if (_) {
      if (!O && (C < 0 || C >= k)) return {};
      C < 0 ? H = C + k : C >= k && (H = C - k), j && $.indexOf(H) < 0 && ($ = $.concat(H)), ee = {
        animating: !0,
        currentSlide: H,
        lazyLoadedList: $,
        targetSlide: H
      }, ne = {
        animating: !1,
        targetSlide: H
      };
    } else
      G = H, H < 0 ? (G = H + k, O ? k % q !== 0 && (G = k - k % q) : G = 0) : !K(t) && H > W ? H = G = W : A && H >= k ? (H = O ? k : k - 1, G = O ? 0 : k - 1) : H >= k && (G = H - k, O ? k % q !== 0 && (G = 0) : G = k - U), !O && H + U >= k && (G = k - U), re = r(g(g({}, t), {}, {
        slideIndex: H
      })), D = r(g(g({}, t), {}, {
        slideIndex: G
      })), O || (re === D && (H = G), re = D), j && ($ = $.concat(F(g(g({}, t), {}, {
        currentSlide: H
      })))), X ? (ee = {
        animating: !0,
        currentSlide: G,
        trackStyle: l(g(g({}, t), {}, {
          left: re
        })),
        lazyLoadedList: $,
        targetSlide: ie
      }, ne = {
        animating: !1,
        currentSlide: G,
        trackStyle: P(g(g({}, t), {}, {
          left: D
        })),
        swipeLeft: null,
        targetSlide: ie
      }) : ee = {
        currentSlide: G,
        trackStyle: P(g(g({}, t), {}, {
          left: D
        })),
        lazyLoadedList: $,
        targetSlide: ie
      };
    return {
      state: ee,
      nextState: ne
    };
  }, E.changeSlide = function(t, n) {
    var p, _, O, C, k, j = t.slidesToScroll, W = t.slidesToShow, A = t.slideCount, q = t.currentSlide, U = t.targetSlide, X = t.lazyLoad, $ = t.infinite;
    if (C = A % j !== 0, p = C ? 0 : (A - q) % j, n.message === "previous")
      O = p === 0 ? j : W - p, k = q - O, X && !$ && (_ = q - O, k = _ === -1 ? A - 1 : _), $ || (k = U - j);
    else if (n.message === "next")
      O = p === 0 ? j : p, k = q + O, X && !$ && (k = (q + j) % A + p), $ || (k = U + j);
    else if (n.message === "dots")
      k = n.index * n.slidesToScroll;
    else if (n.message === "children") {
      if (k = n.index, $) {
        var H = u(g(g({}, t), {}, {
          targetSlide: k
        }));
        k > n.currentSlide && H === "left" ? k = k - A : k < n.currentSlide && H === "right" && (k = k + A);
      }
    } else n.message === "index" && (k = Number(n.index));
    return k;
  }, E.keyHandler = function(t, n, p) {
    return t.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n ? "" : t.keyCode === 37 ? p ? "next" : "previous" : t.keyCode === 39 ? p ? "previous" : "next" : "";
  }, E.swipeStart = function(t, n, p) {
    return t.target.tagName === "IMG" && z(t), !n || !p && t.type.indexOf("mouse") !== -1 ? "" : {
      dragging: !0,
      touchObject: {
        startX: t.touches ? t.touches[0].pageX : t.clientX,
        startY: t.touches ? t.touches[0].pageY : t.clientY,
        curX: t.touches ? t.touches[0].pageX : t.clientX,
        curY: t.touches ? t.touches[0].pageY : t.clientY
      }
    };
  }, E.swipeMove = function(t, n) {
    var p = n.scrolling, _ = n.animating, O = n.vertical, C = n.swipeToSlide, k = n.verticalSwiping, j = n.rtl, W = n.currentSlide, A = n.edgeFriction, q = n.edgeDragged, U = n.onEdge, X = n.swiped, $ = n.swiping, H = n.slideCount, G = n.slidesToScroll, re = n.infinite, D = n.touchObject, ee = n.swipeEvent, ne = n.listHeight, ie = n.listWidth;
    if (!p) {
      if (_) return z(t);
      O && C && k && z(t);
      var oe, se = {}, ge = r(n);
      D.curX = t.touches ? t.touches[0].pageX : t.clientX, D.curY = t.touches ? t.touches[0].pageY : t.clientY, D.swipeLength = Math.round(Math.sqrt(Math.pow(D.curX - D.startX, 2)));
      var ze = Math.round(Math.sqrt(Math.pow(D.curY - D.startY, 2)));
      if (!k && !$ && ze > 10)
        return {
          scrolling: !0
        };
      k && (D.swipeLength = ze);
      var de = (j ? -1 : 1) * (D.curX > D.startX ? 1 : -1);
      k && (de = D.curY > D.startY ? 1 : -1);
      var rt = Math.ceil(H / G), le = te(n.touchObject, k), pe = D.swipeLength;
      return re || (W === 0 && (le === "right" || le === "down") || W + 1 >= rt && (le === "left" || le === "up") || !K(n) && (le === "left" || le === "up")) && (pe = D.swipeLength * A, q === !1 && U && (U(le), se.edgeDragged = !0)), !X && ee && (ee(le), se.swiped = !0), O ? oe = ge + pe * (ne / ie) * de : j ? oe = ge - pe * de : oe = ge + pe * de, k && (oe = ge + pe * de), se = g(g({}, se), {}, {
        touchObject: D,
        swipeLeft: oe,
        trackStyle: P(g(g({}, n), {}, {
          left: oe
        }))
      }), Math.abs(D.curX - D.startX) < Math.abs(D.curY - D.startY) * 0.8 || D.swipeLength > 10 && (se.swiping = !0, z(t)), se;
    }
  }, E.swipeEnd = function(t, n) {
    var p = n.dragging, _ = n.swipe, O = n.touchObject, C = n.listWidth, k = n.touchThreshold, j = n.verticalSwiping, W = n.listHeight, A = n.swipeToSlide, q = n.scrolling, U = n.onSwipe, X = n.targetSlide, $ = n.currentSlide, H = n.infinite;
    if (!p)
      return _ && z(t), {};
    var G = j ? W / k : C / k, re = te(O, j), D = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {}
    };
    if (q || !O.swipeLength)
      return D;
    if (O.swipeLength > G) {
      z(t), U && U(re);
      var ee, ne, ie = H ? $ : X;
      switch (re) {
        case "left":
        case "up":
          ne = ie + s(n), ee = A ? a(n, ne) : ne, D.currentDirection = 0;
          break;
        case "right":
        case "down":
          ne = ie - s(n), ee = A ? a(n, ne) : ne, D.currentDirection = 1;
          break;
        default:
          ee = ie;
      }
      D.triggerSlideHandler = ee;
    } else {
      var oe = r(n);
      D.trackStyle = l(g(g({}, n), {}, {
        left: oe
      }));
    }
    return D;
  };
  var Y = E.getNavigableIndexes = function(t) {
    for (var n = t.infinite ? t.slideCount * 2 : t.slideCount, p = t.infinite ? t.slidesToShow * -1 : 0, _ = t.infinite ? t.slidesToShow * -1 : 0, O = []; p < n; )
      O.push(p), p = _ + t.slidesToScroll, _ += Math.min(t.slidesToScroll, t.slidesToShow);
    return O;
  }, a = E.checkNavigable = function(t, n) {
    var p = Y(t), _ = 0;
    if (n > p[p.length - 1])
      n = p[p.length - 1];
    else
      for (var O in p) {
        if (n < p[O]) {
          n = _;
          break;
        }
        _ = p[O];
      }
    return n;
  }, s = E.getSlideCount = function(t) {
    var n = t.centerMode ? t.slideWidth * Math.floor(t.slidesToShow / 2) : 0;
    if (t.swipeToSlide) {
      var p, _ = t.listRef, O = _.querySelectorAll && _.querySelectorAll(".slick-slide") || [];
      if (Array.from(O).every(function(j) {
        if (t.vertical) {
          if (j.offsetTop + B(j) / 2 > t.swipeLeft * -1)
            return p = j, !1;
        } else if (j.offsetLeft - n + J(j) / 2 > t.swipeLeft * -1)
          return p = j, !1;
        return !0;
      }), !p)
        return 0;
      var C = t.rtl === !0 ? t.slideCount - t.currentSlide : t.currentSlide, k = Math.abs(p.dataset.index - C) || 1;
      return k;
    } else
      return t.slidesToScroll;
  }, f = E.checkSpecKeys = function(t, n) {
    return n.reduce(function(p, _) {
      return p && t.hasOwnProperty(_);
    }, !0) ? null : console.error("Keys Missing:", t);
  }, P = E.getTrackCSS = function(t) {
    f(t, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
    var n, p;
    if (!t.vertical)
      n = c(t) * t.slideWidth;
    else {
      var _ = t.unslick ? t.slideCount : t.slideCount + 2 * t.slidesToShow;
      p = _ * t.slideHeight;
    }
    var O = {
      opacity: 1,
      transition: "",
      WebkitTransition: ""
    };
    if (t.useTransform) {
      var C = t.vertical ? "translate3d(0px, " + t.left + "px, 0px)" : "translate3d(" + t.left + "px, 0px, 0px)", k = t.vertical ? "translate3d(0px, " + t.left + "px, 0px)" : "translate3d(" + t.left + "px, 0px, 0px)", j = t.vertical ? "translateY(" + t.left + "px)" : "translateX(" + t.left + "px)";
      O = g(g({}, O), {}, {
        WebkitTransform: C,
        transform: k,
        msTransform: j
      });
    } else
      t.vertical ? O.top = t.left : O.left = t.left;
    return t.fade && (O = {
      opacity: 1
    }), n && (O.width = n), p && (O.height = p), window && !window.addEventListener && window.attachEvent && (t.vertical ? O.marginTop = t.left + "px" : O.marginLeft = t.left + "px"), O;
  }, l = E.getTrackAnimateCSS = function(t) {
    f(t, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var n = P(t);
    return t.useTransform ? (n.WebkitTransition = "-webkit-transform " + t.speed + "ms " + t.cssEase, n.transition = "transform " + t.speed + "ms " + t.cssEase) : t.vertical ? n.transition = "top " + t.speed + "ms " + t.cssEase : n.transition = "left " + t.speed + "ms " + t.cssEase, n;
  }, r = E.getTrackLeft = function(t) {
    if (t.unslick)
      return 0;
    f(t, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var n = t.slideIndex, p = t.trackRef, _ = t.infinite, O = t.centerMode, C = t.slideCount, k = t.slidesToShow, j = t.slidesToScroll, W = t.slideWidth, A = t.listWidth, q = t.variableWidth, U = t.slideHeight, X = t.fade, $ = t.vertical, H = 0, G, re, D = 0;
    if (X || t.slideCount === 1)
      return 0;
    var ee = 0;
    if (_ ? (ee = -h(t), C % j !== 0 && n + j > C && (ee = -(n > C ? k - (n - C) : C % j)), O && (ee += parseInt(k / 2))) : (C % j !== 0 && n + j > C && (ee = k - C % j), O && (ee = parseInt(k / 2))), H = ee * W, D = ee * U, $ ? G = n * U * -1 + D : G = n * W * -1 + H, q === !0) {
      var ne, ie = p && p.node;
      if (ne = n + h(t), re = ie && ie.childNodes[ne], G = re ? re.offsetLeft * -1 : 0, O === !0) {
        ne = _ ? n + h(t) : n, re = ie && ie.children[ne], G = 0;
        for (var oe = 0; oe < ne; oe++)
          G -= ie && ie.children[oe] && ie.children[oe].offsetWidth;
        G -= parseInt(t.centerPadding), G += re && (A - re.offsetWidth) / 2;
      }
    }
    return G;
  }, h = E.getPreClones = function(t) {
    return t.unslick || !t.infinite ? 0 : t.variableWidth ? t.slideCount : t.slidesToShow + (t.centerMode ? 1 : 0);
  }, S = E.getPostClones = function(t) {
    return t.unslick || !t.infinite ? 0 : t.variableWidth ? t.slideCount : t.slidesToShow + (t.centerMode ? 1 : 0);
  }, c = E.getTotalSlides = function(t) {
    return t.slideCount === 1 ? 1 : h(t) + t.slideCount + S(t);
  }, u = E.siblingDirection = function(t) {
    return t.targetSlide > t.currentSlide ? t.targetSlide > t.currentSlide + b(t) ? "left" : "right" : t.targetSlide < t.currentSlide - w(t) ? "right" : "left";
  }, b = E.slidesOnRight = function(t) {
    var n = t.slidesToShow, p = t.centerMode, _ = t.rtl, O = t.centerPadding;
    if (p) {
      var C = (n - 1) / 2 + 1;
      return parseInt(O) > 0 && (C += 1), _ && n % 2 === 0 && (C += 1), C;
    }
    return _ ? 0 : n - 1;
  }, w = E.slidesOnLeft = function(t) {
    var n = t.slidesToShow, p = t.centerMode, _ = t.rtl, O = t.centerPadding;
    if (p) {
      var C = (n - 1) / 2 + 1;
      return parseInt(O) > 0 && (C += 1), !_ && n % 2 === 0 && (C += 1), C;
    }
    return _ ? n - 1 : 0;
  };
  E.canUseDOM = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  };
  var e = E.validSettings = Object.keys(d.default);
  function N(i) {
    return e.reduce(function(t, n) {
      return i.hasOwnProperty(n) && (t[n] = i[n]), t;
    }, {});
  }
  return E;
}
var he = {}, Ie;
function st() {
  if (Ie) return he;
  Ie = 1, Object.defineProperty(he, "__esModule", {
    value: !0
  }), he.Track = void 0;
  var o = m(ce), d = m(_e()), v = be();
  function m(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function y(l) {
    "@babel/helpers - typeof";
    return y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, y(l);
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(l) {
      for (var r = 1; r < arguments.length; r++) {
        var h = arguments[r];
        for (var S in h)
          ({}).hasOwnProperty.call(h, S) && (l[S] = h[S]);
      }
      return l;
    }, g.apply(null, arguments);
  }
  function L(l, r) {
    if (!(l instanceof r)) throw new TypeError("Cannot call a class as a function");
  }
  function x(l, r) {
    for (var h = 0; h < r.length; h++) {
      var S = r[h];
      S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(l, K(S.key), S);
    }
  }
  function I(l, r, h) {
    return r && x(l.prototype, r), Object.defineProperty(l, "prototype", { writable: !1 }), l;
  }
  function R(l, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
    l.prototype = Object.create(r && r.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), Object.defineProperty(l, "prototype", { writable: !1 }), r && z(l, r);
  }
  function z(l, r) {
    return z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(h, S) {
      return h.__proto__ = S, h;
    }, z(l, r);
  }
  function F(l) {
    var r = V();
    return function() {
      var h, S = T(l);
      if (r) {
        var c = T(this).constructor;
        h = Reflect.construct(S, arguments, c);
      } else h = S.apply(this, arguments);
      return Q(this, h);
    };
  }
  function Q(l, r) {
    if (r && (y(r) == "object" || typeof r == "function")) return r;
    if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Z(l);
  }
  function Z(l) {
    if (l === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return l;
  }
  function V() {
    try {
      var l = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (V = function() {
      return !!l;
    })();
  }
  function T(l) {
    return T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, T(l);
  }
  function J(l, r) {
    var h = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      var S = Object.getOwnPropertySymbols(l);
      r && (S = S.filter(function(c) {
        return Object.getOwnPropertyDescriptor(l, c).enumerable;
      })), h.push.apply(h, S);
    }
    return h;
  }
  function B(l) {
    for (var r = 1; r < arguments.length; r++) {
      var h = arguments[r] != null ? arguments[r] : {};
      r % 2 ? J(Object(h), !0).forEach(function(S) {
        te(l, S, h[S]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(h)) : J(Object(h)).forEach(function(S) {
        Object.defineProperty(l, S, Object.getOwnPropertyDescriptor(h, S));
      });
    }
    return l;
  }
  function te(l, r, h) {
    return (r = K(r)) in l ? Object.defineProperty(l, r, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : l[r] = h, l;
  }
  function K(l) {
    var r = Y(l, "string");
    return y(r) == "symbol" ? r : r + "";
  }
  function Y(l, r) {
    if (y(l) != "object" || !l) return l;
    var h = l[Symbol.toPrimitive];
    if (h !== void 0) {
      var S = h.call(l, r);
      if (y(S) != "object") return S;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(l);
  }
  var a = function(r) {
    var h, S, c, u, b;
    r.rtl ? b = r.slideCount - 1 - r.index : b = r.index, c = b < 0 || b >= r.slideCount, r.centerMode ? (u = Math.floor(r.slidesToShow / 2), S = (b - r.currentSlide) % r.slideCount === 0, b > r.currentSlide - u - 1 && b <= r.currentSlide + u && (h = !0)) : h = r.currentSlide <= b && b < r.currentSlide + r.slidesToShow;
    var w;
    r.targetSlide < 0 ? w = r.targetSlide + r.slideCount : r.targetSlide >= r.slideCount ? w = r.targetSlide - r.slideCount : w = r.targetSlide;
    var e = b === w;
    return {
      "slick-slide": !0,
      "slick-active": h,
      "slick-center": S,
      "slick-cloned": c,
      "slick-current": e
      // dubious in case of RTL
    };
  }, s = function(r) {
    var h = {};
    return (r.variableWidth === void 0 || r.variableWidth === !1) && (h.width = r.slideWidth), r.fade && (h.position = "relative", r.vertical ? h.top = -r.index * parseInt(r.slideHeight) : h.left = -r.index * parseInt(r.slideWidth), h.opacity = r.currentSlide === r.index ? 1 : 0, h.zIndex = r.currentSlide === r.index ? 999 : 998, r.useCSS && (h.transition = "opacity " + r.speed + "ms " + r.cssEase + ", visibility " + r.speed + "ms " + r.cssEase)), h;
  }, f = function(r, h) {
    return r.key || h;
  }, P = function(r) {
    var h, S = [], c = [], u = [], b = o.default.Children.count(r.children), w = (0, v.lazyStartIndex)(r), e = (0, v.lazyEndIndex)(r);
    return o.default.Children.forEach(r.children, function(N, i) {
      var t, n = {
        message: "children",
        index: i,
        slidesToScroll: r.slidesToScroll,
        currentSlide: r.currentSlide
      };
      !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(i) >= 0 ? t = N : t = /* @__PURE__ */ o.default.createElement("div", null);
      var p = s(B(B({}, r), {}, {
        index: i
      })), _ = t.props.className || "", O = a(B(B({}, r), {}, {
        index: i
      }));
      if (S.push(/* @__PURE__ */ o.default.cloneElement(t, {
        key: "original" + f(t, i),
        "data-index": i,
        className: (0, d.default)(O, _),
        tabIndex: "-1",
        "aria-hidden": !O["slick-active"],
        style: B(B({
          outline: "none"
        }, t.props.style || {}), p),
        onClick: function(j) {
          t.props && t.props.onClick && t.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
        }
      })), r.infinite && b > 1 && r.fade === !1 && !r.unslick) {
        var C = b - i;
        C <= (0, v.getPreClones)(r) && (h = -C, h >= w && (t = N), O = a(B(B({}, r), {}, {
          index: h
        })), c.push(/* @__PURE__ */ o.default.cloneElement(t, {
          key: "precloned" + f(t, h),
          "data-index": h,
          tabIndex: "-1",
          className: (0, d.default)(O, _),
          "aria-hidden": !O["slick-active"],
          style: B(B({}, t.props.style || {}), p),
          onClick: function(j) {
            t.props && t.props.onClick && t.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        }))), i < (0, v.getPostClones)(r) && (h = b + i, h < e && (t = N), O = a(B(B({}, r), {}, {
          index: h
        })), u.push(/* @__PURE__ */ o.default.cloneElement(t, {
          key: "postcloned" + f(t, h),
          "data-index": h,
          tabIndex: "-1",
          className: (0, d.default)(O, _),
          "aria-hidden": !O["slick-active"],
          style: B(B({}, t.props.style || {}), p),
          onClick: function(j) {
            t.props && t.props.onClick && t.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        })));
      }
    }), r.rtl ? c.concat(S, u).reverse() : c.concat(S, u);
  };
  return he.Track = /* @__PURE__ */ (function(l) {
    R(h, l);
    var r = F(h);
    function h() {
      var S;
      L(this, h);
      for (var c = arguments.length, u = new Array(c), b = 0; b < c; b++)
        u[b] = arguments[b];
      return S = r.call.apply(r, [this].concat(u)), te(Z(S), "node", null), te(Z(S), "handleRef", function(w) {
        S.node = w;
      }), S;
    }
    return I(h, [{
      key: "render",
      value: function() {
        var c = P(this.props), u = this.props, b = u.onMouseEnter, w = u.onMouseOver, e = u.onMouseLeave, N = {
          onMouseEnter: b,
          onMouseOver: w,
          onMouseLeave: e
        };
        return /* @__PURE__ */ o.default.createElement("div", g({
          ref: this.handleRef,
          className: "slick-track",
          style: this.props.trackStyle
        }, N), c);
      }
    }]), h;
  })(o.default.PureComponent), he;
}
var ye = {}, qe;
function ut() {
  if (qe) return ye;
  qe = 1;
  function o(a) {
    "@babel/helpers - typeof";
    return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, o(a);
  }
  Object.defineProperty(ye, "__esModule", {
    value: !0
  }), ye.Dots = void 0;
  var d = y(ce), v = y(_e()), m = be();
  function y(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function g(a, s) {
    var f = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var P = Object.getOwnPropertySymbols(a);
      s && (P = P.filter(function(l) {
        return Object.getOwnPropertyDescriptor(a, l).enumerable;
      })), f.push.apply(f, P);
    }
    return f;
  }
  function L(a) {
    for (var s = 1; s < arguments.length; s++) {
      var f = arguments[s] != null ? arguments[s] : {};
      s % 2 ? g(Object(f), !0).forEach(function(P) {
        x(a, P, f[P]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(f)) : g(Object(f)).forEach(function(P) {
        Object.defineProperty(a, P, Object.getOwnPropertyDescriptor(f, P));
      });
    }
    return a;
  }
  function x(a, s, f) {
    return (s = F(s)) in a ? Object.defineProperty(a, s, { value: f, enumerable: !0, configurable: !0, writable: !0 }) : a[s] = f, a;
  }
  function I(a, s) {
    if (!(a instanceof s)) throw new TypeError("Cannot call a class as a function");
  }
  function R(a, s) {
    for (var f = 0; f < s.length; f++) {
      var P = s[f];
      P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(a, F(P.key), P);
    }
  }
  function z(a, s, f) {
    return s && R(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function F(a) {
    var s = Q(a, "string");
    return o(s) == "symbol" ? s : s + "";
  }
  function Q(a, s) {
    if (o(a) != "object" || !a) return a;
    var f = a[Symbol.toPrimitive];
    if (f !== void 0) {
      var P = f.call(a, s);
      if (o(P) != "object") return P;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  function Z(a, s) {
    if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(s && s.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), s && V(a, s);
  }
  function V(a, s) {
    return V = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(f, P) {
      return f.__proto__ = P, f;
    }, V(a, s);
  }
  function T(a) {
    var s = te();
    return function() {
      var f, P = K(a);
      if (s) {
        var l = K(this).constructor;
        f = Reflect.construct(P, arguments, l);
      } else f = P.apply(this, arguments);
      return J(this, f);
    };
  }
  function J(a, s) {
    if (s && (o(s) == "object" || typeof s == "function")) return s;
    if (s !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return B(a);
  }
  function B(a) {
    if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a;
  }
  function te() {
    try {
      var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (te = function() {
      return !!a;
    })();
  }
  function K(a) {
    return K = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, K(a);
  }
  var Y = function(s) {
    var f;
    return s.infinite ? f = Math.ceil(s.slideCount / s.slidesToScroll) : f = Math.ceil((s.slideCount - s.slidesToShow) / s.slidesToScroll) + 1, f;
  };
  return ye.Dots = /* @__PURE__ */ (function(a) {
    Z(f, a);
    var s = T(f);
    function f() {
      return I(this, f), s.apply(this, arguments);
    }
    return z(f, [{
      key: "clickHandler",
      value: function(l, r) {
        r.preventDefault(), this.props.clickHandler(l);
      }
    }, {
      key: "render",
      value: function() {
        for (var l = this.props, r = l.onMouseEnter, h = l.onMouseOver, S = l.onMouseLeave, c = l.infinite, u = l.slidesToScroll, b = l.slidesToShow, w = l.slideCount, e = l.currentSlide, N = Y({
          slideCount: w,
          slidesToScroll: u,
          slidesToShow: b,
          infinite: c
        }), i = {
          onMouseEnter: r,
          onMouseOver: h,
          onMouseLeave: S
        }, t = [], n = 0; n < N; n++) {
          var p = (n + 1) * u - 1, _ = c ? p : (0, m.clamp)(p, 0, w - 1), O = _ - (u - 1), C = c ? O : (0, m.clamp)(O, 0, w - 1), k = (0, v.default)({
            "slick-active": c ? e >= C && e <= _ : e === C
          }), j = {
            message: "dots",
            index: n,
            slidesToScroll: u,
            currentSlide: e
          }, W = this.clickHandler.bind(this, j);
          t = t.concat(/* @__PURE__ */ d.default.createElement("li", {
            key: n,
            className: k
          }, /* @__PURE__ */ d.default.cloneElement(this.props.customPaging(n), {
            onClick: W
          })));
        }
        return /* @__PURE__ */ d.default.cloneElement(this.props.appendDots(t), L({
          className: this.props.dotsClass
        }, i));
      }
    }]), f;
  })(d.default.PureComponent), ye;
}
var ue = {}, $e;
function ct() {
  if ($e) return ue;
  $e = 1;
  function o(a) {
    "@babel/helpers - typeof";
    return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, o(a);
  }
  Object.defineProperty(ue, "__esModule", {
    value: !0
  }), ue.PrevArrow = ue.NextArrow = void 0;
  var d = y(ce), v = y(_e()), m = be();
  function y(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(a) {
      for (var s = 1; s < arguments.length; s++) {
        var f = arguments[s];
        for (var P in f)
          ({}).hasOwnProperty.call(f, P) && (a[P] = f[P]);
      }
      return a;
    }, g.apply(null, arguments);
  }
  function L(a, s) {
    var f = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var P = Object.getOwnPropertySymbols(a);
      s && (P = P.filter(function(l) {
        return Object.getOwnPropertyDescriptor(a, l).enumerable;
      })), f.push.apply(f, P);
    }
    return f;
  }
  function x(a) {
    for (var s = 1; s < arguments.length; s++) {
      var f = arguments[s] != null ? arguments[s] : {};
      s % 2 ? L(Object(f), !0).forEach(function(P) {
        I(a, P, f[P]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(f)) : L(Object(f)).forEach(function(P) {
        Object.defineProperty(a, P, Object.getOwnPropertyDescriptor(f, P));
      });
    }
    return a;
  }
  function I(a, s, f) {
    return (s = Q(s)) in a ? Object.defineProperty(a, s, { value: f, enumerable: !0, configurable: !0, writable: !0 }) : a[s] = f, a;
  }
  function R(a, s) {
    if (!(a instanceof s)) throw new TypeError("Cannot call a class as a function");
  }
  function z(a, s) {
    for (var f = 0; f < s.length; f++) {
      var P = s[f];
      P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(a, Q(P.key), P);
    }
  }
  function F(a, s, f) {
    return s && z(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function Q(a) {
    var s = Z(a, "string");
    return o(s) == "symbol" ? s : s + "";
  }
  function Z(a, s) {
    if (o(a) != "object" || !a) return a;
    var f = a[Symbol.toPrimitive];
    if (f !== void 0) {
      var P = f.call(a, s);
      if (o(P) != "object") return P;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  function V(a, s) {
    if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(s && s.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), s && T(a, s);
  }
  function T(a, s) {
    return T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(f, P) {
      return f.__proto__ = P, f;
    }, T(a, s);
  }
  function J(a) {
    var s = K();
    return function() {
      var f, P = Y(a);
      if (s) {
        var l = Y(this).constructor;
        f = Reflect.construct(P, arguments, l);
      } else f = P.apply(this, arguments);
      return B(this, f);
    };
  }
  function B(a, s) {
    if (s && (o(s) == "object" || typeof s == "function")) return s;
    if (s !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return te(a);
  }
  function te(a) {
    if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a;
  }
  function K() {
    try {
      var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (K = function() {
      return !!a;
    })();
  }
  function Y(a) {
    return Y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, Y(a);
  }
  return ue.PrevArrow = /* @__PURE__ */ (function(a) {
    V(f, a);
    var s = J(f);
    function f() {
      return R(this, f), s.apply(this, arguments);
    }
    return F(f, [{
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
        var h = {
          key: "0",
          "data-role": "none",
          className: (0, v.default)(l),
          style: {
            display: "block"
          },
          onClick: r
        }, S = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, c;
        return this.props.prevArrow ? c = /* @__PURE__ */ d.default.cloneElement(this.props.prevArrow, x(x({}, h), S)) : c = /* @__PURE__ */ d.default.createElement("button", g({
          key: "0",
          type: "button"
        }, h), " ", "Previous"), c;
      }
    }]), f;
  })(d.default.PureComponent), ue.NextArrow = /* @__PURE__ */ (function(a) {
    V(f, a);
    var s = J(f);
    function f() {
      return R(this, f), s.apply(this, arguments);
    }
    return F(f, [{
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
        (0, m.canGoNext)(this.props) || (l["slick-disabled"] = !0, r = null);
        var h = {
          key: "1",
          "data-role": "none",
          className: (0, v.default)(l),
          style: {
            display: "block"
          },
          onClick: r
        }, S = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, c;
        return this.props.nextArrow ? c = /* @__PURE__ */ d.default.cloneElement(this.props.nextArrow, x(x({}, h), S)) : c = /* @__PURE__ */ d.default.createElement("button", g({
          key: "1",
          type: "button"
        }, h), " ", "Next"), c;
      }
    }]), f;
  })(d.default.PureComponent), ue;
}
var Ze = (function() {
  if (typeof Map < "u")
    return Map;
  function o(d, v) {
    var m = -1;
    return d.some(function(y, g) {
      return y[0] === v ? (m = g, !0) : !1;
    }), m;
  }
  return (
    /** @class */
    (function() {
      function d() {
        this.__entries__ = [];
      }
      return Object.defineProperty(d.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), d.prototype.get = function(v) {
        var m = o(this.__entries__, v), y = this.__entries__[m];
        return y && y[1];
      }, d.prototype.set = function(v, m) {
        var y = o(this.__entries__, v);
        ~y ? this.__entries__[y][1] = m : this.__entries__.push([v, m]);
      }, d.prototype.delete = function(v) {
        var m = this.__entries__, y = o(m, v);
        ~y && m.splice(y, 1);
      }, d.prototype.has = function(v) {
        return !!~o(this.__entries__, v);
      }, d.prototype.clear = function() {
        this.__entries__.splice(0);
      }, d.prototype.forEach = function(v, m) {
        m === void 0 && (m = null);
        for (var y = 0, g = this.__entries__; y < g.length; y++) {
          var L = g[y];
          v.call(m, L[1], L[0]);
        }
      }, d;
    })()
  );
})(), Re = typeof window < "u" && typeof document < "u" && window.document === document, we = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), ft = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(we) : function(o) {
    return setTimeout(function() {
      return o(Date.now());
    }, 1e3 / 60);
  };
})(), dt = 2;
function pt(o, d) {
  var v = !1, m = !1, y = 0;
  function g() {
    v && (v = !1, o()), m && x();
  }
  function L() {
    ft(g);
  }
  function x() {
    var I = Date.now();
    if (v) {
      if (I - y < dt)
        return;
      m = !0;
    } else
      v = !0, m = !1, setTimeout(L, d);
    y = I;
  }
  return x;
}
var vt = 20, ht = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], yt = typeof MutationObserver < "u", bt = (
  /** @class */
  (function() {
    function o() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = pt(this.refresh.bind(this), vt);
    }
    return o.prototype.addObserver = function(d) {
      ~this.observers_.indexOf(d) || this.observers_.push(d), this.connected_ || this.connect_();
    }, o.prototype.removeObserver = function(d) {
      var v = this.observers_, m = v.indexOf(d);
      ~m && v.splice(m, 1), !v.length && this.connected_ && this.disconnect_();
    }, o.prototype.refresh = function() {
      var d = this.updateObservers_();
      d && this.refresh();
    }, o.prototype.updateObservers_ = function() {
      var d = this.observers_.filter(function(v) {
        return v.gatherActive(), v.hasActive();
      });
      return d.forEach(function(v) {
        return v.broadcastActive();
      }), d.length > 0;
    }, o.prototype.connect_ = function() {
      !Re || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), yt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, o.prototype.disconnect_ = function() {
      !Re || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, o.prototype.onTransitionEnd_ = function(d) {
      var v = d.propertyName, m = v === void 0 ? "" : v, y = ht.some(function(g) {
        return !!~m.indexOf(g);
      });
      y && this.refresh();
    }, o.getInstance = function() {
      return this.instance_ || (this.instance_ = new o()), this.instance_;
    }, o.instance_ = null, o;
  })()
), Je = (function(o, d) {
  for (var v = 0, m = Object.keys(d); v < m.length; v++) {
    var y = m[v];
    Object.defineProperty(o, y, {
      value: d[y],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return o;
}), fe = (function(o) {
  var d = o && o.ownerDocument && o.ownerDocument.defaultView;
  return d || we;
}), Qe = Pe(0, 0, 0, 0);
function Oe(o) {
  return parseFloat(o) || 0;
}
function Fe(o) {
  for (var d = [], v = 1; v < arguments.length; v++)
    d[v - 1] = arguments[v];
  return d.reduce(function(m, y) {
    var g = o["border-" + y + "-width"];
    return m + Oe(g);
  }, 0);
}
function gt(o) {
  for (var d = ["top", "right", "bottom", "left"], v = {}, m = 0, y = d; m < y.length; m++) {
    var g = y[m], L = o["padding-" + g];
    v[g] = Oe(L);
  }
  return v;
}
function mt(o) {
  var d = o.getBBox();
  return Pe(0, 0, d.width, d.height);
}
function St(o) {
  var d = o.clientWidth, v = o.clientHeight;
  if (!d && !v)
    return Qe;
  var m = fe(o).getComputedStyle(o), y = gt(m), g = y.left + y.right, L = y.top + y.bottom, x = Oe(m.width), I = Oe(m.height);
  if (m.boxSizing === "border-box" && (Math.round(x + g) !== d && (x -= Fe(m, "left", "right") + g), Math.round(I + L) !== v && (I -= Fe(m, "top", "bottom") + L)), !Ot(o)) {
    var R = Math.round(x + g) - d, z = Math.round(I + L) - v;
    Math.abs(R) !== 1 && (x -= R), Math.abs(z) !== 1 && (I -= z);
  }
  return Pe(y.left, y.top, x, I);
}
var wt = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(o) {
    return o instanceof fe(o).SVGGraphicsElement;
  } : function(o) {
    return o instanceof fe(o).SVGElement && typeof o.getBBox == "function";
  };
})();
function Ot(o) {
  return o === fe(o).document.documentElement;
}
function _t(o) {
  return Re ? wt(o) ? mt(o) : St(o) : Qe;
}
function Pt(o) {
  var d = o.x, v = o.y, m = o.width, y = o.height, g = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, L = Object.create(g.prototype);
  return Je(L, {
    x: d,
    y: v,
    width: m,
    height: y,
    top: v,
    right: d + m,
    bottom: y + v,
    left: d
  }), L;
}
function Pe(o, d, v, m) {
  return { x: o, y: d, width: v, height: m };
}
var kt = (
  /** @class */
  (function() {
    function o(d) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Pe(0, 0, 0, 0), this.target = d;
    }
    return o.prototype.isActive = function() {
      var d = _t(this.target);
      return this.contentRect_ = d, d.width !== this.broadcastWidth || d.height !== this.broadcastHeight;
    }, o.prototype.broadcastRect = function() {
      var d = this.contentRect_;
      return this.broadcastWidth = d.width, this.broadcastHeight = d.height, d;
    }, o;
  })()
), Ct = (
  /** @class */
  /* @__PURE__ */ (function() {
    function o(d, v) {
      var m = Pt(v);
      Je(this, { target: d, contentRect: m });
    }
    return o;
  })()
), Tt = (
  /** @class */
  (function() {
    function o(d, v, m) {
      if (this.activeObservations_ = [], this.observations_ = new Ze(), typeof d != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = d, this.controller_ = v, this.callbackCtx_ = m;
    }
    return o.prototype.observe = function(d) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(d instanceof fe(d).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var v = this.observations_;
        v.has(d) || (v.set(d, new kt(d)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, o.prototype.unobserve = function(d) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(d instanceof fe(d).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var v = this.observations_;
        v.has(d) && (v.delete(d), v.size || this.controller_.removeObserver(this));
      }
    }, o.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, o.prototype.gatherActive = function() {
      var d = this;
      this.clearActive(), this.observations_.forEach(function(v) {
        v.isActive() && d.activeObservations_.push(v);
      });
    }, o.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var d = this.callbackCtx_, v = this.activeObservations_.map(function(m) {
          return new Ct(m.target, m.broadcastRect());
        });
        this.callback_.call(d, v, d), this.clearActive();
      }
    }, o.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, o.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, o;
  })()
), et = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Ze(), tt = (
  /** @class */
  /* @__PURE__ */ (function() {
    function o(d) {
      if (!(this instanceof o))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var v = bt.getInstance(), m = new Tt(d, v, this);
      et.set(this, m);
    }
    return o;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(o) {
  tt.prototype[o] = function() {
    var d;
    return (d = et.get(this))[o].apply(d, arguments);
  };
});
var jt = (function() {
  return typeof we.ResizeObserver < "u" ? we.ResizeObserver : tt;
})();
const Et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jt
}, Symbol.toStringTag, { value: "Module" })), xt = /* @__PURE__ */ ot(Et);
var Be;
function Lt() {
  if (Be) return ve;
  Be = 1, Object.defineProperty(ve, "__esModule", {
    value: !0
  }), ve.InnerSlider = void 0;
  var o = R(ce), d = R(at()), v = R(lt()), m = R(_e()), y = be(), g = st(), L = ut(), x = ct(), I = R(xt);
  function R(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function z(c) {
    "@babel/helpers - typeof";
    return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
      return typeof u;
    } : function(u) {
      return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
    }, z(c);
  }
  function F() {
    return F = Object.assign ? Object.assign.bind() : function(c) {
      for (var u = 1; u < arguments.length; u++) {
        var b = arguments[u];
        for (var w in b)
          ({}).hasOwnProperty.call(b, w) && (c[w] = b[w]);
      }
      return c;
    }, F.apply(null, arguments);
  }
  function Q(c, u) {
    if (c == null) return {};
    var b, w, e = Z(c, u);
    if (Object.getOwnPropertySymbols) {
      var N = Object.getOwnPropertySymbols(c);
      for (w = 0; w < N.length; w++)
        b = N[w], u.includes(b) || {}.propertyIsEnumerable.call(c, b) && (e[b] = c[b]);
    }
    return e;
  }
  function Z(c, u) {
    if (c == null) return {};
    var b = {};
    for (var w in c)
      if ({}.hasOwnProperty.call(c, w)) {
        if (u.includes(w)) continue;
        b[w] = c[w];
      }
    return b;
  }
  function V(c, u) {
    var b = Object.keys(c);
    if (Object.getOwnPropertySymbols) {
      var w = Object.getOwnPropertySymbols(c);
      u && (w = w.filter(function(e) {
        return Object.getOwnPropertyDescriptor(c, e).enumerable;
      })), b.push.apply(b, w);
    }
    return b;
  }
  function T(c) {
    for (var u = 1; u < arguments.length; u++) {
      var b = arguments[u] != null ? arguments[u] : {};
      u % 2 ? V(Object(b), !0).forEach(function(w) {
        r(c, w, b[w]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(b)) : V(Object(b)).forEach(function(w) {
        Object.defineProperty(c, w, Object.getOwnPropertyDescriptor(b, w));
      });
    }
    return c;
  }
  function J(c, u) {
    if (!(c instanceof u)) throw new TypeError("Cannot call a class as a function");
  }
  function B(c, u) {
    for (var b = 0; b < u.length; b++) {
      var w = u[b];
      w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(c, h(w.key), w);
    }
  }
  function te(c, u, b) {
    return u && B(c.prototype, u), Object.defineProperty(c, "prototype", { writable: !1 }), c;
  }
  function K(c, u) {
    if (typeof u != "function" && u !== null) throw new TypeError("Super expression must either be null or a function");
    c.prototype = Object.create(u && u.prototype, { constructor: { value: c, writable: !0, configurable: !0 } }), Object.defineProperty(c, "prototype", { writable: !1 }), u && Y(c, u);
  }
  function Y(c, u) {
    return Y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(b, w) {
      return b.__proto__ = w, b;
    }, Y(c, u);
  }
  function a(c) {
    var u = P();
    return function() {
      var b, w = l(c);
      if (u) {
        var e = l(this).constructor;
        b = Reflect.construct(w, arguments, e);
      } else b = w.apply(this, arguments);
      return s(this, b);
    };
  }
  function s(c, u) {
    if (u && (z(u) == "object" || typeof u == "function")) return u;
    if (u !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return f(c);
  }
  function f(c) {
    if (c === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return c;
  }
  function P() {
    try {
      var c = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (P = function() {
      return !!c;
    })();
  }
  function l(c) {
    return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(u) {
      return u.__proto__ || Object.getPrototypeOf(u);
    }, l(c);
  }
  function r(c, u, b) {
    return (u = h(u)) in c ? Object.defineProperty(c, u, { value: b, enumerable: !0, configurable: !0, writable: !0 }) : c[u] = b, c;
  }
  function h(c) {
    var u = S(c, "string");
    return z(u) == "symbol" ? u : u + "";
  }
  function S(c, u) {
    if (z(c) != "object" || !c) return c;
    var b = c[Symbol.toPrimitive];
    if (b !== void 0) {
      var w = b.call(c, u);
      if (z(w) != "object") return w;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (u === "string" ? String : Number)(c);
  }
  return ve.InnerSlider = /* @__PURE__ */ (function(c) {
    K(b, c);
    var u = a(b);
    function b(w) {
      var e;
      J(this, b), e = u.call(this, w), r(f(e), "listRefHandler", function(i) {
        return e.list = i;
      }), r(f(e), "trackRefHandler", function(i) {
        return e.track = i;
      }), r(f(e), "adaptHeight", function() {
        if (e.props.adaptiveHeight && e.list) {
          var i = e.list.querySelector('[data-index="'.concat(e.state.currentSlide, '"]'));
          e.list.style.height = (0, y.getHeight)(i) + "px";
        }
      }), r(f(e), "componentDidMount", function() {
        if (e.props.onInit && e.props.onInit(), e.props.lazyLoad) {
          var i = (0, y.getOnDemandLazySlides)(T(T({}, e.props), e.state));
          i.length > 0 && (e.setState(function(n) {
            return {
              lazyLoadedList: n.lazyLoadedList.concat(i)
            };
          }), e.props.onLazyLoad && e.props.onLazyLoad(i));
        }
        var t = T({
          listRef: e.list,
          trackRef: e.track
        }, e.props);
        e.updateState(t, !0, function() {
          e.adaptHeight(), e.props.autoplay && e.autoPlay("update");
        }), e.props.lazyLoad === "progressive" && (e.lazyLoadTimer = setInterval(e.progressiveLazyLoad, 1e3)), e.ro = new I.default(function() {
          e.state.animating ? (e.onWindowResized(!1), e.callbackTimers.push(setTimeout(function() {
            return e.onWindowResized();
          }, e.props.speed))) : e.onWindowResized();
        }), e.ro.observe(e.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(n) {
          n.onfocus = e.props.pauseOnFocus ? e.onSlideFocus : null, n.onblur = e.props.pauseOnFocus ? e.onSlideBlur : null;
        }), window.addEventListener ? window.addEventListener("resize", e.onWindowResized) : window.attachEvent("onresize", e.onWindowResized);
      }), r(f(e), "componentWillUnmount", function() {
        e.animationEndCallback && clearTimeout(e.animationEndCallback), e.lazyLoadTimer && clearInterval(e.lazyLoadTimer), e.callbackTimers.length && (e.callbackTimers.forEach(function(i) {
          return clearTimeout(i);
        }), e.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", e.onWindowResized) : window.detachEvent("onresize", e.onWindowResized), e.autoplayTimer && clearInterval(e.autoplayTimer), e.ro.disconnect();
      }), r(f(e), "componentDidUpdate", function(i) {
        if (e.checkImagesLoad(), e.props.onReInit && e.props.onReInit(), e.props.lazyLoad) {
          var t = (0, y.getOnDemandLazySlides)(T(T({}, e.props), e.state));
          t.length > 0 && (e.setState(function(_) {
            return {
              lazyLoadedList: _.lazyLoadedList.concat(t)
            };
          }), e.props.onLazyLoad && e.props.onLazyLoad(t));
        }
        e.adaptHeight();
        var n = T(T({
          listRef: e.list,
          trackRef: e.track
        }, e.props), e.state), p = e.didPropsChange(i);
        p && e.updateState(n, p, function() {
          e.state.currentSlide >= o.default.Children.count(e.props.children) && e.changeSlide({
            message: "index",
            index: o.default.Children.count(e.props.children) - e.props.slidesToShow,
            currentSlide: e.state.currentSlide
          }), e.props.autoplay ? e.autoPlay("update") : e.pause("paused");
        });
      }), r(f(e), "onWindowResized", function(i) {
        e.debouncedResize && e.debouncedResize.cancel(), e.debouncedResize = (0, v.default)(function() {
          return e.resizeWindow(i);
        }, 50), e.debouncedResize();
      }), r(f(e), "resizeWindow", function() {
        var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, t = !!(e.track && e.track.node);
        if (t) {
          var n = T(T({
            listRef: e.list,
            trackRef: e.track
          }, e.props), e.state);
          e.updateState(n, i, function() {
            e.props.autoplay ? e.autoPlay("update") : e.pause("paused");
          }), e.setState({
            animating: !1
          }), clearTimeout(e.animationEndCallback), delete e.animationEndCallback;
        }
      }), r(f(e), "updateState", function(i, t, n) {
        var p = (0, y.initializedState)(i);
        i = T(T(T({}, i), p), {}, {
          slideIndex: p.currentSlide
        });
        var _ = (0, y.getTrackLeft)(i);
        i = T(T({}, i), {}, {
          left: _
        });
        var O = (0, y.getTrackCSS)(i);
        (t || o.default.Children.count(e.props.children) !== o.default.Children.count(i.children)) && (p.trackStyle = O), e.setState(p, n);
      }), r(f(e), "ssrInit", function() {
        if (e.props.variableWidth) {
          var i = 0, t = 0, n = [], p = (0, y.getPreClones)(T(T(T({}, e.props), e.state), {}, {
            slideCount: e.props.children.length
          })), _ = (0, y.getPostClones)(T(T(T({}, e.props), e.state), {}, {
            slideCount: e.props.children.length
          }));
          e.props.children.forEach(function(re) {
            n.push(re.props.style.width), i += re.props.style.width;
          });
          for (var O = 0; O < p; O++)
            t += n[n.length - 1 - O], i += n[n.length - 1 - O];
          for (var C = 0; C < _; C++)
            i += n[C];
          for (var k = 0; k < e.state.currentSlide; k++)
            t += n[k];
          var j = {
            width: i + "px",
            left: -t + "px"
          };
          if (e.props.centerMode) {
            var W = "".concat(n[e.state.currentSlide], "px");
            j.left = "calc(".concat(j.left, " + (100% - ").concat(W, ") / 2 ) ");
          }
          return {
            trackStyle: j
          };
        }
        var A = o.default.Children.count(e.props.children), q = T(T(T({}, e.props), e.state), {}, {
          slideCount: A
        }), U = (0, y.getPreClones)(q) + (0, y.getPostClones)(q) + A, X = 100 / e.props.slidesToShow * U, $ = 100 / U, H = -$ * ((0, y.getPreClones)(q) + e.state.currentSlide) * X / 100;
        e.props.centerMode && (H += (100 - $ * X / 100) / 2);
        var G = {
          width: X + "%",
          left: H + "%"
        };
        return {
          slideWidth: $ + "%",
          trackStyle: G
        };
      }), r(f(e), "checkImagesLoad", function() {
        var i = e.list && e.list.querySelectorAll && e.list.querySelectorAll(".slick-slide img") || [], t = i.length, n = 0;
        Array.prototype.forEach.call(i, function(p) {
          var _ = function() {
            return ++n && n >= t && e.onWindowResized();
          };
          if (!p.onclick)
            p.onclick = function() {
              return p.parentNode.focus();
            };
          else {
            var O = p.onclick;
            p.onclick = function(C) {
              O(C), p.parentNode.focus();
            };
          }
          p.onload || (e.props.lazyLoad ? p.onload = function() {
            e.adaptHeight(), e.callbackTimers.push(setTimeout(e.onWindowResized, e.props.speed));
          } : (p.onload = _, p.onerror = function() {
            _(), e.props.onLazyLoadError && e.props.onLazyLoadError();
          }));
        });
      }), r(f(e), "progressiveLazyLoad", function() {
        for (var i = [], t = T(T({}, e.props), e.state), n = e.state.currentSlide; n < e.state.slideCount + (0, y.getPostClones)(t); n++)
          if (e.state.lazyLoadedList.indexOf(n) < 0) {
            i.push(n);
            break;
          }
        for (var p = e.state.currentSlide - 1; p >= -(0, y.getPreClones)(t); p--)
          if (e.state.lazyLoadedList.indexOf(p) < 0) {
            i.push(p);
            break;
          }
        i.length > 0 ? (e.setState(function(_) {
          return {
            lazyLoadedList: _.lazyLoadedList.concat(i)
          };
        }), e.props.onLazyLoad && e.props.onLazyLoad(i)) : e.lazyLoadTimer && (clearInterval(e.lazyLoadTimer), delete e.lazyLoadTimer);
      }), r(f(e), "slideHandler", function(i) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = e.props, p = n.asNavFor, _ = n.beforeChange, O = n.onLazyLoad, C = n.speed, k = n.afterChange, j = e.state.currentSlide, W = (0, y.slideHandler)(T(T(T({
          index: i
        }, e.props), e.state), {}, {
          trackRef: e.track,
          useCSS: e.props.useCSS && !t
        })), A = W.state, q = W.nextState;
        if (A) {
          _ && _(j, A.currentSlide);
          var U = A.lazyLoadedList.filter(function(X) {
            return e.state.lazyLoadedList.indexOf(X) < 0;
          });
          O && U.length > 0 && O(U), !e.props.waitForAnimate && e.animationEndCallback && (clearTimeout(e.animationEndCallback), k && k(j), delete e.animationEndCallback), e.setState(A, function() {
            p && e.asNavForIndex !== i && (e.asNavForIndex = i, p.innerSlider.slideHandler(i)), q && (e.animationEndCallback = setTimeout(function() {
              var X = q.animating, $ = Q(q, ["animating"]);
              e.setState($, function() {
                e.callbackTimers.push(setTimeout(function() {
                  return e.setState({
                    animating: X
                  });
                }, 10)), k && k(A.currentSlide), delete e.animationEndCallback;
              });
            }, C));
          });
        }
      }), r(f(e), "changeSlide", function(i) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = T(T({}, e.props), e.state), p = (0, y.changeSlide)(n, i);
        if (!(p !== 0 && !p) && (t === !0 ? e.slideHandler(p, t) : e.slideHandler(p), e.props.autoplay && e.autoPlay("update"), e.props.focusOnSelect)) {
          var _ = e.list.querySelectorAll(".slick-current");
          _[0] && _[0].focus();
        }
      }), r(f(e), "clickHandler", function(i) {
        e.clickable === !1 && (i.stopPropagation(), i.preventDefault()), e.clickable = !0;
      }), r(f(e), "keyHandler", function(i) {
        var t = (0, y.keyHandler)(i, e.props.accessibility, e.props.rtl);
        t !== "" && e.changeSlide({
          message: t
        });
      }), r(f(e), "selectHandler", function(i) {
        e.changeSlide(i);
      }), r(f(e), "disableBodyScroll", function() {
        var i = function(n) {
          n = n || window.event, n.preventDefault && n.preventDefault(), n.returnValue = !1;
        };
        window.ontouchmove = i;
      }), r(f(e), "enableBodyScroll", function() {
        window.ontouchmove = null;
      }), r(f(e), "swipeStart", function(i) {
        e.props.verticalSwiping && e.disableBodyScroll();
        var t = (0, y.swipeStart)(i, e.props.swipe, e.props.draggable);
        t !== "" && e.setState(t);
      }), r(f(e), "swipeMove", function(i) {
        var t = (0, y.swipeMove)(i, T(T(T({}, e.props), e.state), {}, {
          trackRef: e.track,
          listRef: e.list,
          slideIndex: e.state.currentSlide
        }));
        t && (t.swiping && (e.clickable = !1), e.setState(t));
      }), r(f(e), "swipeEnd", function(i) {
        var t = (0, y.swipeEnd)(i, T(T(T({}, e.props), e.state), {}, {
          trackRef: e.track,
          listRef: e.list,
          slideIndex: e.state.currentSlide
        }));
        if (t) {
          var n = t.triggerSlideHandler;
          delete t.triggerSlideHandler, e.setState(t), n !== void 0 && (e.slideHandler(n), e.props.verticalSwiping && e.enableBodyScroll());
        }
      }), r(f(e), "touchEnd", function(i) {
        e.swipeEnd(i), e.clickable = !0;
      }), r(f(e), "slickPrev", function() {
        e.callbackTimers.push(setTimeout(function() {
          return e.changeSlide({
            message: "previous"
          });
        }, 0));
      }), r(f(e), "slickNext", function() {
        e.callbackTimers.push(setTimeout(function() {
          return e.changeSlide({
            message: "next"
          });
        }, 0));
      }), r(f(e), "slickGoTo", function(i) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (i = Number(i), isNaN(i)) return "";
        e.callbackTimers.push(setTimeout(function() {
          return e.changeSlide({
            message: "index",
            index: i,
            currentSlide: e.state.currentSlide
          }, t);
        }, 0));
      }), r(f(e), "play", function() {
        var i;
        if (e.props.rtl)
          i = e.state.currentSlide - e.props.slidesToScroll;
        else if ((0, y.canGoNext)(T(T({}, e.props), e.state)))
          i = e.state.currentSlide + e.props.slidesToScroll;
        else
          return !1;
        e.slideHandler(i);
      }), r(f(e), "autoPlay", function(i) {
        e.autoplayTimer && clearInterval(e.autoplayTimer);
        var t = e.state.autoplaying;
        if (i === "update") {
          if (t === "hovered" || t === "focused" || t === "paused")
            return;
        } else if (i === "leave") {
          if (t === "paused" || t === "focused")
            return;
        } else if (i === "blur" && (t === "paused" || t === "hovered"))
          return;
        e.autoplayTimer = setInterval(e.play, e.props.autoplaySpeed + 50), e.setState({
          autoplaying: "playing"
        });
      }), r(f(e), "pause", function(i) {
        e.autoplayTimer && (clearInterval(e.autoplayTimer), e.autoplayTimer = null);
        var t = e.state.autoplaying;
        i === "paused" ? e.setState({
          autoplaying: "paused"
        }) : i === "focused" ? (t === "hovered" || t === "playing") && e.setState({
          autoplaying: "focused"
        }) : t === "playing" && e.setState({
          autoplaying: "hovered"
        });
      }), r(f(e), "onDotsOver", function() {
        return e.props.autoplay && e.pause("hovered");
      }), r(f(e), "onDotsLeave", function() {
        return e.props.autoplay && e.state.autoplaying === "hovered" && e.autoPlay("leave");
      }), r(f(e), "onTrackOver", function() {
        return e.props.autoplay && e.pause("hovered");
      }), r(f(e), "onTrackLeave", function() {
        return e.props.autoplay && e.state.autoplaying === "hovered" && e.autoPlay("leave");
      }), r(f(e), "onSlideFocus", function() {
        return e.props.autoplay && e.pause("focused");
      }), r(f(e), "onSlideBlur", function() {
        return e.props.autoplay && e.state.autoplaying === "focused" && e.autoPlay("blur");
      }), r(f(e), "render", function() {
        var i = (0, m.default)("slick-slider", e.props.className, {
          "slick-vertical": e.props.vertical,
          "slick-initialized": !0
        }), t = T(T({}, e.props), e.state), n = (0, y.extractObject)(t, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), p = e.props.pauseOnHover;
        n = T(T({}, n), {}, {
          onMouseEnter: p ? e.onTrackOver : null,
          onMouseLeave: p ? e.onTrackLeave : null,
          onMouseOver: p ? e.onTrackOver : null,
          focusOnSelect: e.props.focusOnSelect && e.clickable ? e.selectHandler : null
        });
        var _;
        if (e.props.dots === !0 && e.state.slideCount >= e.props.slidesToShow) {
          var O = (0, y.extractObject)(t, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), C = e.props.pauseOnDotsHover;
          O = T(T({}, O), {}, {
            clickHandler: e.changeSlide,
            onMouseEnter: C ? e.onDotsLeave : null,
            onMouseOver: C ? e.onDotsOver : null,
            onMouseLeave: C ? e.onDotsLeave : null
          }), _ = /* @__PURE__ */ o.default.createElement(L.Dots, O);
        }
        var k, j, W = (0, y.extractObject)(t, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        W.clickHandler = e.changeSlide, e.props.arrows && (k = /* @__PURE__ */ o.default.createElement(x.PrevArrow, W), j = /* @__PURE__ */ o.default.createElement(x.NextArrow, W));
        var A = null;
        e.props.vertical && (A = {
          height: e.state.listHeight
        });
        var q = null;
        e.props.vertical === !1 ? e.props.centerMode === !0 && (q = {
          padding: "0px " + e.props.centerPadding
        }) : e.props.centerMode === !0 && (q = {
          padding: e.props.centerPadding + " 0px"
        });
        var U = T(T({}, A), q), X = e.props.touchMove, $ = {
          className: "slick-list",
          style: U,
          onClick: e.clickHandler,
          onMouseDown: X ? e.swipeStart : null,
          onMouseMove: e.state.dragging && X ? e.swipeMove : null,
          onMouseUp: X ? e.swipeEnd : null,
          onMouseLeave: e.state.dragging && X ? e.swipeEnd : null,
          onTouchStart: X ? e.swipeStart : null,
          onTouchMove: e.state.dragging && X ? e.swipeMove : null,
          onTouchEnd: X ? e.touchEnd : null,
          onTouchCancel: e.state.dragging && X ? e.swipeEnd : null,
          onKeyDown: e.props.accessibility ? e.keyHandler : null
        }, H = {
          className: i,
          dir: "ltr",
          style: e.props.style
        };
        return e.props.unslick && ($ = {
          className: "slick-list"
        }, H = {
          className: i,
          style: e.props.style
        }), /* @__PURE__ */ o.default.createElement("div", H, e.props.unslick ? "" : k, /* @__PURE__ */ o.default.createElement("div", F({
          ref: e.listRefHandler
        }, $), /* @__PURE__ */ o.default.createElement(g.Track, F({
          ref: e.trackRefHandler
        }, n), e.props.children)), e.props.unslick ? "" : j, e.props.unslick ? "" : _);
      }), e.list = null, e.track = null, e.state = T(T({}, d.default), {}, {
        currentSlide: e.props.initialSlide,
        targetSlide: e.props.initialSlide ? e.props.initialSlide : 0,
        slideCount: o.default.Children.count(e.props.children)
      }), e.callbackTimers = [], e.clickable = !0, e.debouncedResize = null;
      var N = e.ssrInit();
      return e.state = T(T({}, e.state), N), e;
    }
    return te(b, [{
      key: "didPropsChange",
      value: function(e) {
        for (var N = !1, i = 0, t = Object.keys(this.props); i < t.length; i++) {
          var n = t[i];
          if (!e.hasOwnProperty(n)) {
            N = !0;
            break;
          }
          if (!(z(e[n]) === "object" || typeof e[n] == "function" || isNaN(e[n])) && e[n] !== this.props[n]) {
            N = !0;
            break;
          }
        }
        return N || o.default.Children.count(this.props.children) !== o.default.Children.count(e.children);
      }
    }]), b;
  })(o.default.Component), ve;
}
var Le, Ge;
function Mt() {
  if (Ge) return Le;
  Ge = 1;
  var o = function(d) {
    return d.replace(/[A-Z]/g, function(v) {
      return "-" + v.toLowerCase();
    }).toLowerCase();
  };
  return Le = o, Le;
}
var Me, Xe;
function Rt() {
  if (Xe) return Me;
  Xe = 1;
  var o = Mt(), d = function(y) {
    var g = /[height|width]$/;
    return g.test(y);
  }, v = function(y) {
    var g = "", L = Object.keys(y);
    return L.forEach(function(x, I) {
      var R = y[x];
      x = o(x), d(x) && typeof R == "number" && (R = R + "px"), R === !0 ? g += x : R === !1 ? g += "not " + x : g += "(" + x + ": " + R + ")", I < L.length - 1 && (g += " and ");
    }), g;
  }, m = function(y) {
    var g = "";
    return typeof y == "string" ? y : y instanceof Array ? (y.forEach(function(L, x) {
      g += v(L), x < y.length - 1 && (g += ", ");
    }), g) : v(y);
  };
  return Me = m, Me;
}
var Ke;
function zt() {
  return Ke || (Ke = 1, (function(o) {
    var d = { NODE_ENV: "production" };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
    var v = x(ce), m = Lt(), y = x(Rt()), g = x(Ve()), L = be();
    function x(l) {
      return l && l.__esModule ? l : { default: l };
    }
    function I(l) {
      "@babel/helpers - typeof";
      return I = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
        return typeof r;
      } : function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, I(l);
    }
    function R() {
      return R = Object.assign ? Object.assign.bind() : function(l) {
        for (var r = 1; r < arguments.length; r++) {
          var h = arguments[r];
          for (var S in h)
            ({}).hasOwnProperty.call(h, S) && (l[S] = h[S]);
        }
        return l;
      }, R.apply(null, arguments);
    }
    function z(l, r) {
      var h = Object.keys(l);
      if (Object.getOwnPropertySymbols) {
        var S = Object.getOwnPropertySymbols(l);
        r && (S = S.filter(function(c) {
          return Object.getOwnPropertyDescriptor(l, c).enumerable;
        })), h.push.apply(h, S);
      }
      return h;
    }
    function F(l) {
      for (var r = 1; r < arguments.length; r++) {
        var h = arguments[r] != null ? arguments[r] : {};
        r % 2 ? z(Object(h), !0).forEach(function(S) {
          s(l, S, h[S]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(h)) : z(Object(h)).forEach(function(S) {
          Object.defineProperty(l, S, Object.getOwnPropertyDescriptor(h, S));
        });
      }
      return l;
    }
    function Q(l, r) {
      if (!(l instanceof r)) throw new TypeError("Cannot call a class as a function");
    }
    function Z(l, r) {
      for (var h = 0; h < r.length; h++) {
        var S = r[h];
        S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(l, f(S.key), S);
      }
    }
    function V(l, r, h) {
      return r && Z(l.prototype, r), Object.defineProperty(l, "prototype", { writable: !1 }), l;
    }
    function T(l, r) {
      if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
      l.prototype = Object.create(r && r.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), Object.defineProperty(l, "prototype", { writable: !1 }), r && J(l, r);
    }
    function J(l, r) {
      return J = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(h, S) {
        return h.__proto__ = S, h;
      }, J(l, r);
    }
    function B(l) {
      var r = Y();
      return function() {
        var h, S = a(l);
        if (r) {
          var c = a(this).constructor;
          h = Reflect.construct(S, arguments, c);
        } else h = S.apply(this, arguments);
        return te(this, h);
      };
    }
    function te(l, r) {
      if (r && (I(r) == "object" || typeof r == "function")) return r;
      if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return K(l);
    }
    function K(l) {
      if (l === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return l;
    }
    function Y() {
      try {
        var l = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch {
      }
      return (Y = function() {
        return !!l;
      })();
    }
    function a(l) {
      return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
      }, a(l);
    }
    function s(l, r, h) {
      return (r = f(r)) in l ? Object.defineProperty(l, r, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : l[r] = h, l;
    }
    function f(l) {
      var r = P(l, "string");
      return I(r) == "symbol" ? r : r + "";
    }
    function P(l, r) {
      if (I(l) != "object" || !l) return l;
      var h = l[Symbol.toPrimitive];
      if (h !== void 0) {
        var S = h.call(l, r);
        if (I(S) != "object") return S;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(l);
    }
    o.default = /* @__PURE__ */ (function(l) {
      T(h, l);
      var r = B(h);
      function h(S) {
        var c;
        return Q(this, h), c = r.call(this, S), s(K(c), "innerSliderRefHandler", function(u) {
          return c.innerSlider = u;
        }), s(K(c), "slickPrev", function() {
          return c.innerSlider.slickPrev();
        }), s(K(c), "slickNext", function() {
          return c.innerSlider.slickNext();
        }), s(K(c), "slickGoTo", function(u) {
          var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return c.innerSlider.slickGoTo(u, b);
        }), s(K(c), "slickPause", function() {
          return c.innerSlider.pause("paused");
        }), s(K(c), "slickPlay", function() {
          return c.innerSlider.autoPlay("play");
        }), c.state = {
          breakpoint: null
        }, c._responsiveMediaHandlers = [], c;
      }
      return V(h, [{
        key: "media",
        value: function(c, u) {
          var b = window.matchMedia(c), w = function(N) {
            var i = N.matches;
            i && u();
          };
          b.addListener(w), this._responsiveMediaHandlers.push({
            mql: b,
            query: c,
            listener: w
          });
        }
        // handles responsive breakpoints
      }, {
        key: "componentDidMount",
        value: function() {
          var c = this;
          if (this.props.responsive) {
            var u = this.props.responsive.map(function(w) {
              return w.breakpoint;
            });
            u.sort(function(w, e) {
              return w - e;
            }), u.forEach(function(w, e) {
              var N;
              e === 0 ? N = (0, y.default)({
                minWidth: 0,
                maxWidth: w
              }) : N = (0, y.default)({
                minWidth: u[e - 1] + 1,
                maxWidth: w
              }), (0, L.canUseDOM)() && c.media(N, function() {
                c.setState({
                  breakpoint: w
                });
              });
            });
            var b = (0, y.default)({
              minWidth: u.slice(-1)[0]
            });
            (0, L.canUseDOM)() && this.media(b, function() {
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
          var c = this, u, b;
          this.state.breakpoint ? (b = this.props.responsive.filter(function(C) {
            return C.breakpoint === c.state.breakpoint;
          }), u = b[0].settings === "unslick" ? "unslick" : F(F(F({}, g.default), this.props), b[0].settings)) : u = F(F({}, g.default), this.props), u.centerMode && (u.slidesToScroll > 1 && d.NODE_ENV, u.slidesToScroll = 1), u.fade && (u.slidesToShow > 1 && d.NODE_ENV, u.slidesToScroll > 1 && d.NODE_ENV, u.slidesToShow = 1, u.slidesToScroll = 1);
          var w = v.default.Children.toArray(this.props.children);
          w = w.filter(function(C) {
            return typeof C == "string" ? !!C.trim() : !!C;
          }), u.variableWidth && (u.rows > 1 || u.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), u.variableWidth = !1);
          for (var e = [], N = null, i = 0; i < w.length; i += u.rows * u.slidesPerRow) {
            for (var t = [], n = i; n < i + u.rows * u.slidesPerRow; n += u.slidesPerRow) {
              for (var p = [], _ = n; _ < n + u.slidesPerRow && (u.variableWidth && w[_].props.style && (N = w[_].props.style.width), !(_ >= w.length)); _ += 1)
                p.push(/* @__PURE__ */ v.default.cloneElement(w[_], {
                  key: 100 * i + 10 * n + _,
                  tabIndex: -1,
                  style: {
                    width: "".concat(100 / u.slidesPerRow, "%"),
                    display: "inline-block"
                  }
                }));
              t.push(/* @__PURE__ */ v.default.createElement("div", {
                key: 10 * i + n
              }, p));
            }
            u.variableWidth ? e.push(/* @__PURE__ */ v.default.createElement("div", {
              key: i,
              style: {
                width: N
              }
            }, t)) : e.push(/* @__PURE__ */ v.default.createElement("div", {
              key: i
            }, t));
          }
          if (u === "unslick") {
            var O = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ v.default.createElement("div", {
              className: O
            }, w);
          } else e.length <= u.slidesToShow && (u.unslick = !0);
          return /* @__PURE__ */ v.default.createElement(m.InnerSlider, R({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, (0, L.filterSettings)(u)), e);
        }
      }]), h;
    })(v.default.Component);
  })(Ce)), Ce;
}
var Ue;
function Dt() {
  return Ue || (Ue = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
    var d = v(zt());
    function v(m) {
      return m && m.__esModule ? m : { default: m };
    }
    o.default = d.default;
  })(ke)), ke;
}
var Nt = Dt();
const Ht = /* @__PURE__ */ it(Nt);
function Wt({
  tab: o = {},
  // { text: string, image: string, imageAlt: string }
  isActive: d = !1,
  onClick: v = () => {
  },
  index: m = 0,
  className: y = "",
  largeImage: g = !1,
  // if true, set image size to 48x48 even to mobile
  attributes: L = {}
  // aue instrumentation, applied to root so item is editable in Universal Editor
}) {
  return o ? /* @__PURE__ */ M("div", { className: y, ...L, children: /* @__PURE__ */ ae(
    "button",
    {
      onClick: v,
      className: `inline-flex justify-center items-center gap-4 xl:gap-10 rounded-full border transition-all duration-300 p-tabbed-loz--padding cursor-pointer hover:bg-grey-600 hover:text-white focus-visible:bg-grey-600 focus-visible:text-white min-w-[110px] ${d ? "border-grey-600 bg-grey-600 text-white" : "border-grey-600 bg-grey-100 text-grey-950"}`,
      children: [
        o.image && /* @__PURE__ */ M(
          "img",
          {
            src: o.image,
            alt: o.imageAlt || "",
            className: `rounded-full object-cover ${g ? "w-48 h-48" : "w-24 h-24 xl:w-48 xl:h-48"}`
          }
        ),
        o.text && /* @__PURE__ */ M("span", { className: "text-body-default", children: o.text })
      ]
    }
  ) }, m) : null;
}
function At({
  title: o,
  titleId: d,
  ...v
}, m) {
  return /* @__PURE__ */ Se.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: m,
    "aria-labelledby": d
  }, v), o ? /* @__PURE__ */ Se.createElement("title", {
    id: d
  }, o) : null, /* @__PURE__ */ Se.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
    clipRule: "evenodd"
  }));
}
const It = /* @__PURE__ */ Se.forwardRef(At);
function qt(o) {
  const [d, v] = Ye(!1);
  return nt(() => {
    const m = window.matchMedia(o);
    v(m.matches);
    const y = () => v(m.matches);
    return m.addEventListener("change", y), () => m.removeEventListener("change", y);
  }, [o]), d;
}
function $t(o, d) {
  const v = (o == null ? void 0 : o.length) || 0, m = Math.max(v, ...(d || []).map((x) => (x || []).length), 0), y = (x, I) => {
    const R = [...x || []];
    for (; R.length < I; ) R.push("");
    return R;
  }, g = y(o || [], m), L = (d || []).map((x) => y(x, m));
  return { columns: g, data: L, columnCount: m };
}
function Gt({
  columns: o = [],
  data: d = [],
  tabImages: v = [],
  variant: m = "normal",
  // 'normal' | 'pricing' | 'comparison'
  className: y = "",
  id: g = "",
  fullWidth: L = !0,
  attributes: x = []
}) {
  const I = qt("(min-width: 768px)"), { columns: R, data: z, columnCount: F } = $t(o, d);
  if (!R.length || !z.length)
    return null;
  const Q = `overflow-x-auto ${y}`.trim(), Z = `border-collapse overflow-hidden w-full min-w-0 md:min-w-[300px] lg:min-w-[620px] ${L ? "w-full" : ""}`, V = "p-10 text-left border-r border-b border-grey-500 min-w-0 md:min-w-[180px] lg:min-w-[200px]", T = "p-10 border-r border-b border-grey-500 min-w-0", J = F * 140, B = "p-10 text-left border-r border-b border-grey-500 min-w-[140px] md:min-w-[180px] lg:min-w-[200px]", te = "p-10 border-r border-b border-grey-500 min-w-[140px]", K = () => /* @__PURE__ */ ae("div", { className: Q, id: g, children: [
    /* @__PURE__ */ M("style", { children: "@media (max-width:767px){.normal-table-mobile-scroll{min-width:var(--normal-table-mw);}}" }),
    /* @__PURE__ */ ae(
      "table",
      {
        className: `${Z} normal-table-mobile-scroll`,
        style: { "--normal-table-mw": `${J}px` },
        children: [
          /* @__PURE__ */ M("thead", { children: /* @__PURE__ */ M("tr", { children: R.map((u, b) => /* @__PURE__ */ M(
            "th",
            {
              className: `${B} ${b === F - 1 ? "border-r-0" : ""} font-semibold text-headings-h4`,
              children: u ?? ""
            },
            b
          )) }) }),
          /* @__PURE__ */ M("tbody", { children: z.map((u, b) => /* @__PURE__ */ M("tr", { ...x[b] || {}, children: u.map((w, e) => /* @__PURE__ */ M(
            "td",
            {
              className: `${te} ${e === F - 1 ? "border-r-0" : ""}`,
              children: w ?? ""
            },
            e
          )) }, b)) })
        ]
      }
    )
  ] }), Y = "font-normal text-display-s text-center!", a = (u) => u > 0 ? "text-center!" : "", s = () => /* @__PURE__ */ M("div", { className: Q, id: g, children: /* @__PURE__ */ ae("table", { className: Z, children: [
    /* @__PURE__ */ M("thead", { children: /* @__PURE__ */ M("tr", { children: R.map((u, b) => /* @__PURE__ */ M(
      "th",
      {
        className: `${V} ${b === F - 1 ? "border-r-0" : ""} ${b > 0 ? Y : "font-semibold text-headings-h4"}`,
        children: u ?? ""
      },
      b
    )) }) }),
    /* @__PURE__ */ M("tbody", { children: z.map((u, b) => /* @__PURE__ */ M("tr", { ...x[b] || {}, children: u.map((w, e) => /* @__PURE__ */ M(
      "td",
      {
        className: `${T} ${e === F - 1 ? "border-r-0" : ""} ${a(e)}`,
        children: w ?? ""
      },
      e
    )) }, b)) })
  ] }) }), f = () => {
    const [u, b] = Ye(0), w = R.slice(1);
    if (!w.length) return null;
    const e = u + 1, N = [R[0], R[e]], i = z.map((t) => [t[0], t[e]]);
    return /* @__PURE__ */ ae("div", { className: `max-md:block md:hidden ${y}`.trim(), id: g, children: [
      /* @__PURE__ */ M("div", { className: "flex flex-wrap justify-center gap-x-tabbed-lozs--spacing-x gap-y-tabbed-lozs--spacing-y my-section-spacing-y py-24", children: w.map((t, n) => /* @__PURE__ */ M(
        Wt,
        {
          tab: { text: t, image: v[n] },
          isActive: u === n,
          onClick: () => b(n),
          index: n,
          largeImage: !0
        },
        n
      )) }),
      /* @__PURE__ */ M("div", { className: Q, children: /* @__PURE__ */ ae("table", { className: Z, children: [
        /* @__PURE__ */ M("thead", { children: /* @__PURE__ */ M("tr", { children: N.map((t, n) => /* @__PURE__ */ M(
          "th",
          {
            className: `${V} border-r-0 ${n > 0 ? Y : "font-semibold text-headings-h4"}`,
            children: t ?? ""
          },
          n
        )) }) }),
        /* @__PURE__ */ M("tbody", { children: i.map((t, n) => /* @__PURE__ */ M("tr", { ...x[n] || {}, children: t.map((p, _) => /* @__PURE__ */ M(
          "td",
          {
            className: `${T} border-r-0 ${a(_)}`,
            children: p ?? ""
          },
          _
        )) }, n)) })
      ] }) })
    ] });
  }, P = "text-center! font-semibold text-headings-h4", l = (u, b) => b === 0 ? u ?? "" : u === !0 ? /* @__PURE__ */ M(It, { className: "w-24 h-24 mx-auto text-current" }) : "-", r = () => /* @__PURE__ */ M("div", { className: Q, id: g, children: /* @__PURE__ */ ae("table", { className: Z, children: [
    /* @__PURE__ */ M("thead", { children: /* @__PURE__ */ M("tr", { children: R.map((u, b) => /* @__PURE__ */ M(
      "th",
      {
        className: `${V} ${b === F - 1 ? "border-r-0" : ""} ${b > 0 ? P : "font-semibold text-headings-h4"}`,
        children: u ?? ""
      },
      b
    )) }) }),
    /* @__PURE__ */ M("tbody", { children: z.map((u, b) => /* @__PURE__ */ M("tr", { ...x[b] || {}, children: u.map((w, e) => /* @__PURE__ */ M(
      "td",
      {
        className: `${T} ${e === F - 1 ? "border-r-0" : ""} ${e > 0 ? "text-center!" : ""}`,
        children: l(w, e)
      },
      e
    )) }, b)) })
  ] }) }), h = {
    dots: !0,
    infinite: !1,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !1,
    arrows: !1
  }, S = () => {
    const u = R.slice(1);
    return /* @__PURE__ */ M("div", { className: `max-md:block md:hidden relative ${y}`.trim(), id: g, children: /* @__PURE__ */ M(Ht, { ...h, className: "w-full table-slider", style: { width: "100%" }, children: u.map((b, w) => {
      const e = w + 1;
      return /* @__PURE__ */ M("div", { className: "outline-none px-0", children: /* @__PURE__ */ ae("div", { className: "border-collapse overflow-hidden", children: [
        /* @__PURE__ */ M("div", { className: "p-10 text-center border-b border-grey-500", children: /* @__PURE__ */ M("div", { className: P, children: b ?? "" }) }),
        /* @__PURE__ */ M("div", { className: "flex flex-col", children: z.map((N, i) => {
          const t = N[0], n = N[e], p = l(n, e);
          return /* @__PURE__ */ ae("div", { className: "flex flex-col border-b border-grey-500", children: [
            /* @__PURE__ */ M("div", { className: "p-10 font-normal border-b border-grey-500 text-center", children: t ?? "" }),
            /* @__PURE__ */ M("div", { className: "p-10 text-center", children: p })
          ] }, i);
        }) })
      ] }) }, w);
    }) }) });
  };
  let c;
  return m === "normal" ? c = /* @__PURE__ */ M(K, {}) : m === "pricing" ? c = I ? /* @__PURE__ */ M(s, {}) : /* @__PURE__ */ M(f, {}) : m === "comparison" ? c = I ? /* @__PURE__ */ M(r, {}) : /* @__PURE__ */ M(S, {}) : c = /* @__PURE__ */ M(K, {}), /* @__PURE__ */ M("div", { className: "container", children: c });
}
export {
  Gt as default
};
