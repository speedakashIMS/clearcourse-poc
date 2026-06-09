import { jsx as z, jsxs as lt } from "react/jsx-runtime";
import ue, { lazy as st, Suspense as ut, useState as pe, useRef as ct, useEffect as Ie, useCallback as He, forwardRef as ft } from "react";
import dt from "lottie-react";
var me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pt(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
function vt(a) {
  if (Object.prototype.hasOwnProperty.call(a, "__esModule")) return a;
  var f = a.default;
  if (typeof f == "function") {
    var v = function m() {
      return this instanceof m ? Reflect.construct(f, arguments, this.constructor) : f.apply(this, arguments);
    };
    v.prototype = f.prototype;
  } else v = {};
  return Object.defineProperty(v, "__esModule", { value: !0 }), Object.keys(a).forEach(function(m) {
    var y = Object.getOwnPropertyDescriptor(a, m);
    Object.defineProperty(v, m, y.get ? y : {
      enumerable: !0,
      get: function() {
        return a[m];
      }
    });
  }), v;
}
var ke = {}, Ce = {}, ve = {}, Te = {}, Ae;
function ht() {
  return Ae || (Ae = 1, (function(a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.default = void 0;
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
    a.default = f;
  })(Te)), Te;
}
var je, We;
function yt() {
  if (We) return je;
  We = 1;
  var a = "Expected a function", f = NaN, v = "[object Symbol]", m = /^\s+|\s+$/g, y = /^[-+]0x[0-9a-f]+$/i, g = /^0b[01]+$/i, L = /^0o[0-7]+$/i, x = parseInt, M = typeof me == "object" && me && me.Object === Object && me, R = typeof self == "object" && self && self.Object === Object && self, N = M || R || Function("return this")(), X = Object.prototype, Z = X.toString, ee = Math.max, K = Math.min, C = function() {
    return N.Date.now();
  };
  function J(o, l, u) {
    var w, s, r, h, b, c, d = 0, O = !1, P = !1, t = !0;
    if (typeof o != "function")
      throw new TypeError(a);
    l = q(l) || 0, H(u) && (O = !!u.leading, P = "maxWait" in u, r = P ? ee(q(u.maxWait) || 0, l) : r, t = "trailing" in u ? !!u.trailing : t);
    function B(j) {
      var A = w, W = s;
      return w = s = void 0, d = j, h = o.apply(W, A), h;
    }
    function i(j) {
      return d = j, b = setTimeout(p, l), O ? B(j) : h;
    }
    function e(j) {
      var A = j - c, W = j - d, F = l - A;
      return P ? K(F, r - W) : F;
    }
    function n(j) {
      var A = j - c, W = j - d;
      return c === void 0 || A >= l || A < 0 || P && W >= r;
    }
    function p() {
      var j = C();
      if (n(j))
        return _(j);
      b = setTimeout(p, e(j));
    }
    function _(j) {
      return b = void 0, t && w ? B(j) : (w = s = void 0, h);
    }
    function S() {
      b !== void 0 && clearTimeout(b), d = 0, w = c = s = b = void 0;
    }
    function T() {
      return b === void 0 ? h : _(C());
    }
    function k() {
      var j = C(), A = n(j);
      if (w = arguments, s = this, c = j, A) {
        if (b === void 0)
          return i(c);
        if (P)
          return b = setTimeout(p, l), B(c);
      }
      return b === void 0 && (b = setTimeout(p, l)), h;
    }
    return k.cancel = S, k.flush = T, k;
  }
  function H(o) {
    var l = typeof o;
    return !!o && (l == "object" || l == "function");
  }
  function Q(o) {
    return !!o && typeof o == "object";
  }
  function G(o) {
    return typeof o == "symbol" || Q(o) && Z.call(o) == v;
  }
  function q(o) {
    if (typeof o == "number")
      return o;
    if (G(o))
      return f;
    if (H(o)) {
      var l = typeof o.valueOf == "function" ? o.valueOf() : o;
      o = H(l) ? l + "" : l;
    }
    if (typeof o != "string")
      return o === 0 ? o : +o;
    o = o.replace(m, "");
    var u = g.test(o);
    return u || L.test(o) ? x(o.slice(2), u ? 2 : 8) : y.test(o) ? f : +o;
  }
  return je = J, je;
}
var Ee = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var qe;
function _e() {
  return qe || (qe = 1, (function(a) {
    (function() {
      var f = {}.hasOwnProperty;
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
          f.call(g, x) && g[x] && (L = y(L, x));
        return L;
      }
      function y(g, L) {
        return L ? g ? g + " " + L : g + L : g;
      }
      a.exports ? (v.default = v, a.exports = v) : window.classNames = v;
    })();
  })(Ee)), Ee.exports;
}
var E = {}, Le = {}, Fe;
function Ze() {
  return Fe || (Fe = 1, (function(a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.default = void 0;
    var f = v(ue);
    function v(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var m = {
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
    a.default = m;
  })(Le)), Le;
}
var $e;
function ge() {
  if ($e) return E;
  $e = 1, Object.defineProperty(E, "__esModule", {
    value: !0
  }), E.checkSpecKeys = E.checkNavigable = E.changeSlide = E.canUseDOM = E.canGoNext = void 0, E.clamp = R, E.extractObject = void 0, E.filterSettings = B, E.validSettings = E.swipeStart = E.swipeMove = E.swipeEnd = E.slidesOnRight = E.slidesOnLeft = E.slideHandler = E.siblingDirection = E.safePreventDefault = E.lazyStartIndex = E.lazySlidesOnRight = E.lazySlidesOnLeft = E.lazyEndIndex = E.keyHandler = E.initializedState = E.getWidth = E.getTrackLeft = E.getTrackCSS = E.getTrackAnimateCSS = E.getTotalSlides = E.getSwipeDirection = E.getSlideCount = E.getRequiredLazySlides = E.getPreClones = E.getPostClones = E.getOnDemandLazySlides = E.getNavigableIndexes = E.getHeight = void 0;
  var a = v(ue), f = v(Ze());
  function v(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function m(i) {
    "@babel/helpers - typeof";
    return m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, m(i);
  }
  function y(i, e) {
    var n = Object.keys(i);
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(i);
      e && (p = p.filter(function(_) {
        return Object.getOwnPropertyDescriptor(i, _).enumerable;
      })), n.push.apply(n, p);
    }
    return n;
  }
  function g(i) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2 ? y(Object(n), !0).forEach(function(p) {
        L(i, p, n[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(p) {
        Object.defineProperty(i, p, Object.getOwnPropertyDescriptor(n, p));
      });
    }
    return i;
  }
  function L(i, e, n) {
    return (e = x(e)) in i ? Object.defineProperty(i, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : i[e] = n, i;
  }
  function x(i) {
    var e = M(i, "string");
    return m(e) == "symbol" ? e : e + "";
  }
  function M(i, e) {
    if (m(i) != "object" || !i) return i;
    var n = i[Symbol.toPrimitive];
    if (n !== void 0) {
      var p = n.call(i, e);
      if (m(p) != "object") return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(i);
  }
  function R(i, e, n) {
    return Math.max(e, Math.min(i, n));
  }
  var N = E.safePreventDefault = function(e) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(e._reactName) || e.preventDefault();
  }, X = E.getOnDemandLazySlides = function(e) {
    for (var n = [], p = Z(e), _ = ee(e), S = p; S < _; S++)
      e.lazyLoadedList.indexOf(S) < 0 && n.push(S);
    return n;
  };
  E.getRequiredLazySlides = function(e) {
    for (var n = [], p = Z(e), _ = ee(e), S = p; S < _; S++)
      n.push(S);
    return n;
  };
  var Z = E.lazyStartIndex = function(e) {
    return e.currentSlide - K(e);
  }, ee = E.lazyEndIndex = function(e) {
    return e.currentSlide + C(e);
  }, K = E.lazySlidesOnLeft = function(e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }, C = E.lazySlidesOnRight = function(e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }, J = E.getWidth = function(e) {
    return e && e.offsetWidth || 0;
  }, H = E.getHeight = function(e) {
    return e && e.offsetHeight || 0;
  }, Q = E.getSwipeDirection = function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, p, _, S, T;
    return p = e.startX - e.curX, _ = e.startY - e.curY, S = Math.atan2(_, p), T = Math.round(S * 180 / Math.PI), T < 0 && (T = 360 - Math.abs(T)), T <= 45 && T >= 0 || T <= 360 && T >= 315 ? "left" : T >= 135 && T <= 225 ? "right" : n === !0 ? T >= 35 && T <= 135 ? "up" : "down" : "vertical";
  }, G = E.canGoNext = function(e) {
    var n = !0;
    return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (n = !1), n;
  };
  E.extractObject = function(e, n) {
    var p = {};
    return n.forEach(function(_) {
      return p[_] = e[_];
    }), p;
  }, E.initializedState = function(e) {
    var n = a.default.Children.count(e.children), p = e.listRef, _ = Math.ceil(J(p)), S = e.trackRef && e.trackRef.node, T = Math.ceil(J(S)), k;
    if (e.vertical)
      k = _;
    else {
      var j = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding == "string" && e.centerPadding.slice(-1) === "%" && (j *= _ / 100), k = Math.ceil((_ - j) / e.slidesToShow);
    }
    var A = p && H(p.querySelector('[data-index="0"]')), W = A * e.slidesToShow, F = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && (F = n - 1 - e.initialSlide);
    var V = e.lazyLoadedList || [], U = X(g(g({}, e), {}, {
      currentSlide: F,
      lazyLoadedList: V
    }));
    V = V.concat(U);
    var $ = {
      slideCount: n,
      slideWidth: k,
      listWidth: _,
      trackWidth: T,
      currentSlide: F,
      slideHeight: A,
      listHeight: W,
      lazyLoadedList: V
    };
    return e.autoplaying === null && e.autoplay && ($.autoplaying = "playing"), $;
  }, E.slideHandler = function(e) {
    var n = e.waitForAnimate, p = e.animating, _ = e.fade, S = e.infinite, T = e.index, k = e.slideCount, j = e.lazyLoad, A = e.currentSlide, W = e.centerMode, F = e.slidesToScroll, V = e.slidesToShow, U = e.useCSS, $ = e.lazyLoadedList;
    if (n && p) return {};
    var I = T, Y, re, D, te = {}, ne = {}, ie = S ? T : R(T, 0, k - 1);
    if (_) {
      if (!S && (T < 0 || T >= k)) return {};
      T < 0 ? I = T + k : T >= k && (I = T - k), j && $.indexOf(I) < 0 && ($ = $.concat(I)), te = {
        animating: !0,
        currentSlide: I,
        lazyLoadedList: $,
        targetSlide: I
      }, ne = {
        animating: !1,
        targetSlide: I
      };
    } else
      Y = I, I < 0 ? (Y = I + k, S ? k % F !== 0 && (Y = k - k % F) : Y = 0) : !G(e) && I > A ? I = Y = A : W && I >= k ? (I = S ? k : k - 1, Y = S ? 0 : k - 1) : I >= k && (Y = I - k, S ? k % F !== 0 && (Y = 0) : Y = k - V), !S && I + V >= k && (Y = k - V), re = r(g(g({}, e), {}, {
        slideIndex: I
      })), D = r(g(g({}, e), {}, {
        slideIndex: Y
      })), S || (re === D && (I = Y), re = D), j && ($ = $.concat(X(g(g({}, e), {}, {
        currentSlide: I
      })))), U ? (te = {
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
    var p, _, S, T, k, j = e.slidesToScroll, A = e.slidesToShow, W = e.slideCount, F = e.currentSlide, V = e.targetSlide, U = e.lazyLoad, $ = e.infinite;
    if (T = W % j !== 0, p = T ? 0 : (W - F) % j, n.message === "previous")
      S = p === 0 ? j : A - p, k = F - S, U && !$ && (_ = F - S, k = _ === -1 ? W - 1 : _), $ || (k = V - j);
    else if (n.message === "next")
      S = p === 0 ? j : p, k = F + S, U && !$ && (k = (F + j) % W + p), $ || (k = V + j);
    else if (n.message === "dots")
      k = n.index * n.slidesToScroll;
    else if (n.message === "children") {
      if (k = n.index, $) {
        var I = d(g(g({}, e), {}, {
          targetSlide: k
        }));
        k > n.currentSlide && I === "left" ? k = k - W : k < n.currentSlide && I === "right" && (k = k + W);
      }
    } else n.message === "index" && (k = Number(n.index));
    return k;
  }, E.keyHandler = function(e, n, p) {
    return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n ? "" : e.keyCode === 37 ? p ? "next" : "previous" : e.keyCode === 39 ? p ? "previous" : "next" : "";
  }, E.swipeStart = function(e, n, p) {
    return e.target.tagName === "IMG" && N(e), !n || !p && e.type.indexOf("mouse") !== -1 ? "" : {
      dragging: !0,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY
      }
    };
  }, E.swipeMove = function(e, n) {
    var p = n.scrolling, _ = n.animating, S = n.vertical, T = n.swipeToSlide, k = n.verticalSwiping, j = n.rtl, A = n.currentSlide, W = n.edgeFriction, F = n.edgeDragged, V = n.onEdge, U = n.swiped, $ = n.swiping, I = n.slideCount, Y = n.slidesToScroll, re = n.infinite, D = n.touchObject, te = n.swipeEvent, ne = n.listHeight, ie = n.listWidth;
    if (!p) {
      if (_) return N(e);
      S && T && k && N(e);
      var oe, le = {}, be = r(n);
      D.curX = e.touches ? e.touches[0].pageX : e.clientX, D.curY = e.touches ? e.touches[0].pageY : e.clientY, D.swipeLength = Math.round(Math.sqrt(Math.pow(D.curX - D.startX, 2)));
      var Ne = Math.round(Math.sqrt(Math.pow(D.curY - D.startY, 2)));
      if (!k && !$ && Ne > 10)
        return {
          scrolling: !0
        };
      k && (D.swipeLength = Ne);
      var fe = (j ? -1 : 1) * (D.curX > D.startX ? 1 : -1);
      k && (fe = D.curY > D.startY ? 1 : -1);
      var at = Math.ceil(I / Y), ae = Q(n.touchObject, k), de = D.swipeLength;
      return re || (A === 0 && (ae === "right" || ae === "down") || A + 1 >= at && (ae === "left" || ae === "up") || !G(n) && (ae === "left" || ae === "up")) && (de = D.swipeLength * W, F === !1 && V && (V(ae), le.edgeDragged = !0)), !U && te && (te(ae), le.swiped = !0), S ? oe = be + de * (ne / ie) * fe : j ? oe = be - de * fe : oe = be + de * fe, k && (oe = be + de * fe), le = g(g({}, le), {}, {
        touchObject: D,
        swipeLeft: oe,
        trackStyle: w(g(g({}, n), {}, {
          left: oe
        }))
      }), Math.abs(D.curX - D.startX) < Math.abs(D.curY - D.startY) * 0.8 || D.swipeLength > 10 && (le.swiping = !0, N(e)), le;
    }
  }, E.swipeEnd = function(e, n) {
    var p = n.dragging, _ = n.swipe, S = n.touchObject, T = n.listWidth, k = n.touchThreshold, j = n.verticalSwiping, A = n.listHeight, W = n.swipeToSlide, F = n.scrolling, V = n.onSwipe, U = n.targetSlide, $ = n.currentSlide, I = n.infinite;
    if (!p)
      return _ && N(e), {};
    var Y = j ? A / k : T / k, re = Q(S, j), D = {
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
      N(e), V && V(re);
      var te, ne, ie = I ? $ : U;
      switch (re) {
        case "left":
        case "up":
          ne = ie + l(n), te = W ? o(n, ne) : ne, D.currentDirection = 0;
          break;
        case "right":
        case "down":
          ne = ie - l(n), te = W ? o(n, ne) : ne, D.currentDirection = 1;
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
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, p = e.infinite ? e.slidesToShow * -1 : 0, _ = e.infinite ? e.slidesToShow * -1 : 0, S = []; p < n; )
      S.push(p), p = _ + e.slidesToScroll, _ += Math.min(e.slidesToScroll, e.slidesToShow);
    return S;
  }, o = E.checkNavigable = function(e, n) {
    var p = q(e), _ = 0;
    if (n > p[p.length - 1])
      n = p[p.length - 1];
    else
      for (var S in p) {
        if (n < p[S]) {
          n = _;
          break;
        }
        _ = p[S];
      }
    return n;
  }, l = E.getSlideCount = function(e) {
    var n = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      var p, _ = e.listRef, S = _.querySelectorAll && _.querySelectorAll(".slick-slide") || [];
      if (Array.from(S).every(function(j) {
        if (e.vertical) {
          if (j.offsetTop + H(j) / 2 > e.swipeLeft * -1)
            return p = j, !1;
        } else if (j.offsetLeft - n + J(j) / 2 > e.swipeLeft * -1)
          return p = j, !1;
        return !0;
      }), !p)
        return 0;
      var T = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide, k = Math.abs(p.dataset.index - T) || 1;
      return k;
    } else
      return e.slidesToScroll;
  }, u = E.checkSpecKeys = function(e, n) {
    return n.reduce(function(p, _) {
      return p && e.hasOwnProperty(_);
    }, !0) ? null : console.error("Keys Missing:", e);
  }, w = E.getTrackCSS = function(e) {
    u(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
    var n, p;
    if (!e.vertical)
      n = c(e) * e.slideWidth;
    else {
      var _ = e.unslick ? e.slideCount : e.slideCount + 2 * e.slidesToShow;
      p = _ * e.slideHeight;
    }
    var S = {
      opacity: 1,
      transition: "",
      WebkitTransition: ""
    };
    if (e.useTransform) {
      var T = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", k = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", j = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
      S = g(g({}, S), {}, {
        WebkitTransform: T,
        transform: k,
        msTransform: j
      });
    } else
      e.vertical ? S.top = e.left : S.left = e.left;
    return e.fade && (S = {
      opacity: 1
    }), n && (S.width = n), p && (S.height = p), window && !window.addEventListener && window.attachEvent && (e.vertical ? S.marginTop = e.left + "px" : S.marginLeft = e.left + "px"), S;
  }, s = E.getTrackAnimateCSS = function(e) {
    u(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var n = w(e);
    return e.useTransform ? (n.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, n.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? n.transition = "top " + e.speed + "ms " + e.cssEase : n.transition = "left " + e.speed + "ms " + e.cssEase, n;
  }, r = E.getTrackLeft = function(e) {
    if (e.unslick)
      return 0;
    u(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var n = e.slideIndex, p = e.trackRef, _ = e.infinite, S = e.centerMode, T = e.slideCount, k = e.slidesToShow, j = e.slidesToScroll, A = e.slideWidth, W = e.listWidth, F = e.variableWidth, V = e.slideHeight, U = e.fade, $ = e.vertical, I = 0, Y, re, D = 0;
    if (U || e.slideCount === 1)
      return 0;
    var te = 0;
    if (_ ? (te = -h(e), T % j !== 0 && n + j > T && (te = -(n > T ? k - (n - T) : T % j)), S && (te += parseInt(k / 2))) : (T % j !== 0 && n + j > T && (te = k - T % j), S && (te = parseInt(k / 2))), I = te * A, D = te * V, $ ? Y = n * V * -1 + D : Y = n * A * -1 + I, F === !0) {
      var ne, ie = p && p.node;
      if (ne = n + h(e), re = ie && ie.childNodes[ne], Y = re ? re.offsetLeft * -1 : 0, S === !0) {
        ne = _ ? n + h(e) : n, re = ie && ie.children[ne], Y = 0;
        for (var oe = 0; oe < ne; oe++)
          Y -= ie && ie.children[oe] && ie.children[oe].offsetWidth;
        Y -= parseInt(e.centerPadding), Y += re && (W - re.offsetWidth) / 2;
      }
    }
    return Y;
  }, h = E.getPreClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, b = E.getPostClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, c = E.getTotalSlides = function(e) {
    return e.slideCount === 1 ? 1 : h(e) + e.slideCount + b(e);
  }, d = E.siblingDirection = function(e) {
    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + O(e) ? "left" : "right" : e.targetSlide < e.currentSlide - P(e) ? "right" : "left";
  }, O = E.slidesOnRight = function(e) {
    var n = e.slidesToShow, p = e.centerMode, _ = e.rtl, S = e.centerPadding;
    if (p) {
      var T = (n - 1) / 2 + 1;
      return parseInt(S) > 0 && (T += 1), _ && n % 2 === 0 && (T += 1), T;
    }
    return _ ? 0 : n - 1;
  }, P = E.slidesOnLeft = function(e) {
    var n = e.slidesToShow, p = e.centerMode, _ = e.rtl, S = e.centerPadding;
    if (p) {
      var T = (n - 1) / 2 + 1;
      return parseInt(S) > 0 && (T += 1), !_ && n % 2 === 0 && (T += 1), T;
    }
    return _ ? n - 1 : 0;
  };
  E.canUseDOM = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  };
  var t = E.validSettings = Object.keys(f.default);
  function B(i) {
    return t.reduce(function(e, n) {
      return i.hasOwnProperty(n) && (e[n] = i[n]), e;
    }, {});
  }
  return E;
}
var he = {}, Be;
function gt() {
  if (Be) return he;
  Be = 1, Object.defineProperty(he, "__esModule", {
    value: !0
  }), he.Track = void 0;
  var a = m(ue), f = m(_e()), v = ge();
  function m(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function y(s) {
    "@babel/helpers - typeof";
    return y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, y(s);
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(s) {
      for (var r = 1; r < arguments.length; r++) {
        var h = arguments[r];
        for (var b in h)
          ({}).hasOwnProperty.call(h, b) && (s[b] = h[b]);
      }
      return s;
    }, g.apply(null, arguments);
  }
  function L(s, r) {
    if (!(s instanceof r)) throw new TypeError("Cannot call a class as a function");
  }
  function x(s, r) {
    for (var h = 0; h < r.length; h++) {
      var b = r[h];
      b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(s, G(b.key), b);
    }
  }
  function M(s, r, h) {
    return r && x(s.prototype, r), Object.defineProperty(s, "prototype", { writable: !1 }), s;
  }
  function R(s, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
    s.prototype = Object.create(r && r.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, "prototype", { writable: !1 }), r && N(s, r);
  }
  function N(s, r) {
    return N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(h, b) {
      return h.__proto__ = b, h;
    }, N(s, r);
  }
  function X(s) {
    var r = K();
    return function() {
      var h, b = C(s);
      if (r) {
        var c = C(this).constructor;
        h = Reflect.construct(b, arguments, c);
      } else h = b.apply(this, arguments);
      return Z(this, h);
    };
  }
  function Z(s, r) {
    if (r && (y(r) == "object" || typeof r == "function")) return r;
    if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return ee(s);
  }
  function ee(s) {
    if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s;
  }
  function K() {
    try {
      var s = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (K = function() {
      return !!s;
    })();
  }
  function C(s) {
    return C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, C(s);
  }
  function J(s, r) {
    var h = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
      var b = Object.getOwnPropertySymbols(s);
      r && (b = b.filter(function(c) {
        return Object.getOwnPropertyDescriptor(s, c).enumerable;
      })), h.push.apply(h, b);
    }
    return h;
  }
  function H(s) {
    for (var r = 1; r < arguments.length; r++) {
      var h = arguments[r] != null ? arguments[r] : {};
      r % 2 ? J(Object(h), !0).forEach(function(b) {
        Q(s, b, h[b]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(h)) : J(Object(h)).forEach(function(b) {
        Object.defineProperty(s, b, Object.getOwnPropertyDescriptor(h, b));
      });
    }
    return s;
  }
  function Q(s, r, h) {
    return (r = G(r)) in s ? Object.defineProperty(s, r, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : s[r] = h, s;
  }
  function G(s) {
    var r = q(s, "string");
    return y(r) == "symbol" ? r : r + "";
  }
  function q(s, r) {
    if (y(s) != "object" || !s) return s;
    var h = s[Symbol.toPrimitive];
    if (h !== void 0) {
      var b = h.call(s, r);
      if (y(b) != "object") return b;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(s);
  }
  var o = function(r) {
    var h, b, c, d, O;
    r.rtl ? O = r.slideCount - 1 - r.index : O = r.index, c = O < 0 || O >= r.slideCount, r.centerMode ? (d = Math.floor(r.slidesToShow / 2), b = (O - r.currentSlide) % r.slideCount === 0, O > r.currentSlide - d - 1 && O <= r.currentSlide + d && (h = !0)) : h = r.currentSlide <= O && O < r.currentSlide + r.slidesToShow;
    var P;
    r.targetSlide < 0 ? P = r.targetSlide + r.slideCount : r.targetSlide >= r.slideCount ? P = r.targetSlide - r.slideCount : P = r.targetSlide;
    var t = O === P;
    return {
      "slick-slide": !0,
      "slick-active": h,
      "slick-center": b,
      "slick-cloned": c,
      "slick-current": t
      // dubious in case of RTL
    };
  }, l = function(r) {
    var h = {};
    return (r.variableWidth === void 0 || r.variableWidth === !1) && (h.width = r.slideWidth), r.fade && (h.position = "relative", r.vertical ? h.top = -r.index * parseInt(r.slideHeight) : h.left = -r.index * parseInt(r.slideWidth), h.opacity = r.currentSlide === r.index ? 1 : 0, h.zIndex = r.currentSlide === r.index ? 999 : 998, r.useCSS && (h.transition = "opacity " + r.speed + "ms " + r.cssEase + ", visibility " + r.speed + "ms " + r.cssEase)), h;
  }, u = function(r, h) {
    return r.key || h;
  }, w = function(r) {
    var h, b = [], c = [], d = [], O = a.default.Children.count(r.children), P = (0, v.lazyStartIndex)(r), t = (0, v.lazyEndIndex)(r);
    return a.default.Children.forEach(r.children, function(B, i) {
      var e, n = {
        message: "children",
        index: i,
        slidesToScroll: r.slidesToScroll,
        currentSlide: r.currentSlide
      };
      !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(i) >= 0 ? e = B : e = /* @__PURE__ */ a.default.createElement("div", null);
      var p = l(H(H({}, r), {}, {
        index: i
      })), _ = e.props.className || "", S = o(H(H({}, r), {}, {
        index: i
      }));
      if (b.push(/* @__PURE__ */ a.default.cloneElement(e, {
        key: "original" + u(e, i),
        "data-index": i,
        className: (0, f.default)(S, _),
        tabIndex: "-1",
        "aria-hidden": !S["slick-active"],
        style: H(H({
          outline: "none"
        }, e.props.style || {}), p),
        onClick: function(j) {
          e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
        }
      })), r.infinite && O > 1 && r.fade === !1 && !r.unslick) {
        var T = O - i;
        T <= (0, v.getPreClones)(r) && (h = -T, h >= P && (e = B), S = o(H(H({}, r), {}, {
          index: h
        })), c.push(/* @__PURE__ */ a.default.cloneElement(e, {
          key: "precloned" + u(e, h),
          "data-index": h,
          tabIndex: "-1",
          className: (0, f.default)(S, _),
          "aria-hidden": !S["slick-active"],
          style: H(H({}, e.props.style || {}), p),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        }))), i < (0, v.getPostClones)(r) && (h = O + i, h < t && (e = B), S = o(H(H({}, r), {}, {
          index: h
        })), d.push(/* @__PURE__ */ a.default.cloneElement(e, {
          key: "postcloned" + u(e, h),
          "data-index": h,
          tabIndex: "-1",
          className: (0, f.default)(S, _),
          "aria-hidden": !S["slick-active"],
          style: H(H({}, e.props.style || {}), p),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        })));
      }
    }), r.rtl ? c.concat(b, d).reverse() : c.concat(b, d);
  };
  return he.Track = /* @__PURE__ */ (function(s) {
    R(h, s);
    var r = X(h);
    function h() {
      var b;
      L(this, h);
      for (var c = arguments.length, d = new Array(c), O = 0; O < c; O++)
        d[O] = arguments[O];
      return b = r.call.apply(r, [this].concat(d)), Q(ee(b), "node", null), Q(ee(b), "handleRef", function(P) {
        b.node = P;
      }), b;
    }
    return M(h, [{
      key: "render",
      value: function() {
        var c = w(this.props), d = this.props, O = d.onMouseEnter, P = d.onMouseOver, t = d.onMouseLeave, B = {
          onMouseEnter: O,
          onMouseOver: P,
          onMouseLeave: t
        };
        return /* @__PURE__ */ a.default.createElement("div", g({
          ref: this.handleRef,
          className: "slick-track",
          style: this.props.trackStyle
        }, B), c);
      }
    }]), h;
  })(a.default.PureComponent), he;
}
var ye = {}, Ye;
function bt() {
  if (Ye) return ye;
  Ye = 1;
  function a(o) {
    "@babel/helpers - typeof";
    return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
      return typeof l;
    } : function(l) {
      return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
    }, a(o);
  }
  Object.defineProperty(ye, "__esModule", {
    value: !0
  }), ye.Dots = void 0;
  var f = y(ue), v = y(_e()), m = ge();
  function y(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function g(o, l) {
    var u = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
      var w = Object.getOwnPropertySymbols(o);
      l && (w = w.filter(function(s) {
        return Object.getOwnPropertyDescriptor(o, s).enumerable;
      })), u.push.apply(u, w);
    }
    return u;
  }
  function L(o) {
    for (var l = 1; l < arguments.length; l++) {
      var u = arguments[l] != null ? arguments[l] : {};
      l % 2 ? g(Object(u), !0).forEach(function(w) {
        x(o, w, u[w]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(u)) : g(Object(u)).forEach(function(w) {
        Object.defineProperty(o, w, Object.getOwnPropertyDescriptor(u, w));
      });
    }
    return o;
  }
  function x(o, l, u) {
    return (l = X(l)) in o ? Object.defineProperty(o, l, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : o[l] = u, o;
  }
  function M(o, l) {
    if (!(o instanceof l)) throw new TypeError("Cannot call a class as a function");
  }
  function R(o, l) {
    for (var u = 0; u < l.length; u++) {
      var w = l[u];
      w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(o, X(w.key), w);
    }
  }
  function N(o, l, u) {
    return l && R(o.prototype, l), Object.defineProperty(o, "prototype", { writable: !1 }), o;
  }
  function X(o) {
    var l = Z(o, "string");
    return a(l) == "symbol" ? l : l + "";
  }
  function Z(o, l) {
    if (a(o) != "object" || !o) return o;
    var u = o[Symbol.toPrimitive];
    if (u !== void 0) {
      var w = u.call(o, l);
      if (a(w) != "object") return w;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(o);
  }
  function ee(o, l) {
    if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function");
    o.prototype = Object.create(l && l.prototype, { constructor: { value: o, writable: !0, configurable: !0 } }), Object.defineProperty(o, "prototype", { writable: !1 }), l && K(o, l);
  }
  function K(o, l) {
    return K = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, w) {
      return u.__proto__ = w, u;
    }, K(o, l);
  }
  function C(o) {
    var l = Q();
    return function() {
      var u, w = G(o);
      if (l) {
        var s = G(this).constructor;
        u = Reflect.construct(w, arguments, s);
      } else u = w.apply(this, arguments);
      return J(this, u);
    };
  }
  function J(o, l) {
    if (l && (a(l) == "object" || typeof l == "function")) return l;
    if (l !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return H(o);
  }
  function H(o) {
    if (o === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o;
  }
  function Q() {
    try {
      var o = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (Q = function() {
      return !!o;
    })();
  }
  function G(o) {
    return G = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(l) {
      return l.__proto__ || Object.getPrototypeOf(l);
    }, G(o);
  }
  var q = function(l) {
    var u;
    return l.infinite ? u = Math.ceil(l.slideCount / l.slidesToScroll) : u = Math.ceil((l.slideCount - l.slidesToShow) / l.slidesToScroll) + 1, u;
  };
  return ye.Dots = /* @__PURE__ */ (function(o) {
    ee(u, o);
    var l = C(u);
    function u() {
      return M(this, u), l.apply(this, arguments);
    }
    return N(u, [{
      key: "clickHandler",
      value: function(s, r) {
        r.preventDefault(), this.props.clickHandler(s);
      }
    }, {
      key: "render",
      value: function() {
        for (var s = this.props, r = s.onMouseEnter, h = s.onMouseOver, b = s.onMouseLeave, c = s.infinite, d = s.slidesToScroll, O = s.slidesToShow, P = s.slideCount, t = s.currentSlide, B = q({
          slideCount: P,
          slidesToScroll: d,
          slidesToShow: O,
          infinite: c
        }), i = {
          onMouseEnter: r,
          onMouseOver: h,
          onMouseLeave: b
        }, e = [], n = 0; n < B; n++) {
          var p = (n + 1) * d - 1, _ = c ? p : (0, m.clamp)(p, 0, P - 1), S = _ - (d - 1), T = c ? S : (0, m.clamp)(S, 0, P - 1), k = (0, v.default)({
            "slick-active": c ? t >= T && t <= _ : t === T
          }), j = {
            message: "dots",
            index: n,
            slidesToScroll: d,
            currentSlide: t
          }, A = this.clickHandler.bind(this, j);
          e = e.concat(/* @__PURE__ */ f.default.createElement("li", {
            key: n,
            className: k
          }, /* @__PURE__ */ f.default.cloneElement(this.props.customPaging(n), {
            onClick: A
          })));
        }
        return /* @__PURE__ */ f.default.cloneElement(this.props.appendDots(e), L({
          className: this.props.dotsClass
        }, i));
      }
    }]), u;
  })(f.default.PureComponent), ye;
}
var se = {}, Ge;
function mt() {
  if (Ge) return se;
  Ge = 1;
  function a(o) {
    "@babel/helpers - typeof";
    return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
      return typeof l;
    } : function(l) {
      return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
    }, a(o);
  }
  Object.defineProperty(se, "__esModule", {
    value: !0
  }), se.PrevArrow = se.NextArrow = void 0;
  var f = y(ue), v = y(_e()), m = ge();
  function y(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(o) {
      for (var l = 1; l < arguments.length; l++) {
        var u = arguments[l];
        for (var w in u)
          ({}).hasOwnProperty.call(u, w) && (o[w] = u[w]);
      }
      return o;
    }, g.apply(null, arguments);
  }
  function L(o, l) {
    var u = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
      var w = Object.getOwnPropertySymbols(o);
      l && (w = w.filter(function(s) {
        return Object.getOwnPropertyDescriptor(o, s).enumerable;
      })), u.push.apply(u, w);
    }
    return u;
  }
  function x(o) {
    for (var l = 1; l < arguments.length; l++) {
      var u = arguments[l] != null ? arguments[l] : {};
      l % 2 ? L(Object(u), !0).forEach(function(w) {
        M(o, w, u[w]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(u)) : L(Object(u)).forEach(function(w) {
        Object.defineProperty(o, w, Object.getOwnPropertyDescriptor(u, w));
      });
    }
    return o;
  }
  function M(o, l, u) {
    return (l = Z(l)) in o ? Object.defineProperty(o, l, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : o[l] = u, o;
  }
  function R(o, l) {
    if (!(o instanceof l)) throw new TypeError("Cannot call a class as a function");
  }
  function N(o, l) {
    for (var u = 0; u < l.length; u++) {
      var w = l[u];
      w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(o, Z(w.key), w);
    }
  }
  function X(o, l, u) {
    return l && N(o.prototype, l), Object.defineProperty(o, "prototype", { writable: !1 }), o;
  }
  function Z(o) {
    var l = ee(o, "string");
    return a(l) == "symbol" ? l : l + "";
  }
  function ee(o, l) {
    if (a(o) != "object" || !o) return o;
    var u = o[Symbol.toPrimitive];
    if (u !== void 0) {
      var w = u.call(o, l);
      if (a(w) != "object") return w;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(o);
  }
  function K(o, l) {
    if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function");
    o.prototype = Object.create(l && l.prototype, { constructor: { value: o, writable: !0, configurable: !0 } }), Object.defineProperty(o, "prototype", { writable: !1 }), l && C(o, l);
  }
  function C(o, l) {
    return C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, w) {
      return u.__proto__ = w, u;
    }, C(o, l);
  }
  function J(o) {
    var l = G();
    return function() {
      var u, w = q(o);
      if (l) {
        var s = q(this).constructor;
        u = Reflect.construct(w, arguments, s);
      } else u = w.apply(this, arguments);
      return H(this, u);
    };
  }
  function H(o, l) {
    if (l && (a(l) == "object" || typeof l == "function")) return l;
    if (l !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Q(o);
  }
  function Q(o) {
    if (o === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o;
  }
  function G() {
    try {
      var o = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (G = function() {
      return !!o;
    })();
  }
  function q(o) {
    return q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(l) {
      return l.__proto__ || Object.getPrototypeOf(l);
    }, q(o);
  }
  return se.PrevArrow = /* @__PURE__ */ (function(o) {
    K(u, o);
    var l = J(u);
    function u() {
      return R(this, u), l.apply(this, arguments);
    }
    return X(u, [{
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
        var h = {
          key: "0",
          "data-role": "none",
          className: (0, v.default)(s),
          style: {
            display: "block"
          },
          onClick: r
        }, b = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, c;
        return this.props.prevArrow ? c = /* @__PURE__ */ f.default.cloneElement(this.props.prevArrow, x(x({}, h), b)) : c = /* @__PURE__ */ f.default.createElement("button", g({
          key: "0",
          type: "button"
        }, h), " ", "Previous"), c;
      }
    }]), u;
  })(f.default.PureComponent), se.NextArrow = /* @__PURE__ */ (function(o) {
    K(u, o);
    var l = J(u);
    function u() {
      return R(this, u), l.apply(this, arguments);
    }
    return X(u, [{
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
        (0, m.canGoNext)(this.props) || (s["slick-disabled"] = !0, r = null);
        var h = {
          key: "1",
          "data-role": "none",
          className: (0, v.default)(s),
          style: {
            display: "block"
          },
          onClick: r
        }, b = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, c;
        return this.props.nextArrow ? c = /* @__PURE__ */ f.default.cloneElement(this.props.nextArrow, x(x({}, h), b)) : c = /* @__PURE__ */ f.default.createElement("button", g({
          key: "1",
          type: "button"
        }, h), " ", "Next"), c;
      }
    }]), u;
  })(f.default.PureComponent), se;
}
var et = (function() {
  if (typeof Map < "u")
    return Map;
  function a(f, v) {
    var m = -1;
    return f.some(function(y, g) {
      return y[0] === v ? (m = g, !0) : !1;
    }), m;
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
      }), f.prototype.get = function(v) {
        var m = a(this.__entries__, v), y = this.__entries__[m];
        return y && y[1];
      }, f.prototype.set = function(v, m) {
        var y = a(this.__entries__, v);
        ~y ? this.__entries__[y][1] = m : this.__entries__.push([v, m]);
      }, f.prototype.delete = function(v) {
        var m = this.__entries__, y = a(m, v);
        ~y && m.splice(y, 1);
      }, f.prototype.has = function(v) {
        return !!~a(this.__entries__, v);
      }, f.prototype.clear = function() {
        this.__entries__.splice(0);
      }, f.prototype.forEach = function(v, m) {
        m === void 0 && (m = null);
        for (var y = 0, g = this.__entries__; y < g.length; y++) {
          var L = g[y];
          v.call(m, L[1], L[0]);
        }
      }, f;
    })()
  );
})(), Re = typeof window < "u" && typeof document < "u" && window.document === document, we = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), St = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(we) : function(a) {
    return setTimeout(function() {
      return a(Date.now());
    }, 1e3 / 60);
  };
})(), wt = 2;
function Ot(a, f) {
  var v = !1, m = !1, y = 0;
  function g() {
    v && (v = !1, a()), m && x();
  }
  function L() {
    St(g);
  }
  function x() {
    var M = Date.now();
    if (v) {
      if (M - y < wt)
        return;
      m = !0;
    } else
      v = !0, m = !1, setTimeout(L, f);
    y = M;
  }
  return x;
}
var _t = 20, Pt = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], kt = typeof MutationObserver < "u", Ct = (
  /** @class */
  (function() {
    function a() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Ot(this.refresh.bind(this), _t);
    }
    return a.prototype.addObserver = function(f) {
      ~this.observers_.indexOf(f) || this.observers_.push(f), this.connected_ || this.connect_();
    }, a.prototype.removeObserver = function(f) {
      var v = this.observers_, m = v.indexOf(f);
      ~m && v.splice(m, 1), !v.length && this.connected_ && this.disconnect_();
    }, a.prototype.refresh = function() {
      var f = this.updateObservers_();
      f && this.refresh();
    }, a.prototype.updateObservers_ = function() {
      var f = this.observers_.filter(function(v) {
        return v.gatherActive(), v.hasActive();
      });
      return f.forEach(function(v) {
        return v.broadcastActive();
      }), f.length > 0;
    }, a.prototype.connect_ = function() {
      !Re || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), kt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, a.prototype.disconnect_ = function() {
      !Re || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, a.prototype.onTransitionEnd_ = function(f) {
      var v = f.propertyName, m = v === void 0 ? "" : v, y = Pt.some(function(g) {
        return !!~m.indexOf(g);
      });
      y && this.refresh();
    }, a.getInstance = function() {
      return this.instance_ || (this.instance_ = new a()), this.instance_;
    }, a.instance_ = null, a;
  })()
), tt = (function(a, f) {
  for (var v = 0, m = Object.keys(f); v < m.length; v++) {
    var y = m[v];
    Object.defineProperty(a, y, {
      value: f[y],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return a;
}), ce = (function(a) {
  var f = a && a.ownerDocument && a.ownerDocument.defaultView;
  return f || we;
}), rt = Pe(0, 0, 0, 0);
function Oe(a) {
  return parseFloat(a) || 0;
}
function Ue(a) {
  for (var f = [], v = 1; v < arguments.length; v++)
    f[v - 1] = arguments[v];
  return f.reduce(function(m, y) {
    var g = a["border-" + y + "-width"];
    return m + Oe(g);
  }, 0);
}
function Tt(a) {
  for (var f = ["top", "right", "bottom", "left"], v = {}, m = 0, y = f; m < y.length; m++) {
    var g = y[m], L = a["padding-" + g];
    v[g] = Oe(L);
  }
  return v;
}
function jt(a) {
  var f = a.getBBox();
  return Pe(0, 0, f.width, f.height);
}
function Et(a) {
  var f = a.clientWidth, v = a.clientHeight;
  if (!f && !v)
    return rt;
  var m = ce(a).getComputedStyle(a), y = Tt(m), g = y.left + y.right, L = y.top + y.bottom, x = Oe(m.width), M = Oe(m.height);
  if (m.boxSizing === "border-box" && (Math.round(x + g) !== f && (x -= Ue(m, "left", "right") + g), Math.round(M + L) !== v && (M -= Ue(m, "top", "bottom") + L)), !xt(a)) {
    var R = Math.round(x + g) - f, N = Math.round(M + L) - v;
    Math.abs(R) !== 1 && (x -= R), Math.abs(N) !== 1 && (M -= N);
  }
  return Pe(y.left, y.top, x, M);
}
var Lt = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(a) {
    return a instanceof ce(a).SVGGraphicsElement;
  } : function(a) {
    return a instanceof ce(a).SVGElement && typeof a.getBBox == "function";
  };
})();
function xt(a) {
  return a === ce(a).document.documentElement;
}
function Mt(a) {
  return Re ? Lt(a) ? jt(a) : Et(a) : rt;
}
function Rt(a) {
  var f = a.x, v = a.y, m = a.width, y = a.height, g = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, L = Object.create(g.prototype);
  return tt(L, {
    x: f,
    y: v,
    width: m,
    height: y,
    top: v,
    right: f + m,
    bottom: y + v,
    left: f
  }), L;
}
function Pe(a, f, v, m) {
  return { x: a, y: f, width: v, height: m };
}
var zt = (
  /** @class */
  (function() {
    function a(f) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Pe(0, 0, 0, 0), this.target = f;
    }
    return a.prototype.isActive = function() {
      var f = Mt(this.target);
      return this.contentRect_ = f, f.width !== this.broadcastWidth || f.height !== this.broadcastHeight;
    }, a.prototype.broadcastRect = function() {
      var f = this.contentRect_;
      return this.broadcastWidth = f.width, this.broadcastHeight = f.height, f;
    }, a;
  })()
), Dt = (
  /** @class */
  /* @__PURE__ */ (function() {
    function a(f, v) {
      var m = Rt(v);
      tt(this, { target: f, contentRect: m });
    }
    return a;
  })()
), Nt = (
  /** @class */
  (function() {
    function a(f, v, m) {
      if (this.activeObservations_ = [], this.observations_ = new et(), typeof f != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = f, this.controller_ = v, this.callbackCtx_ = m;
    }
    return a.prototype.observe = function(f) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(f instanceof ce(f).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var v = this.observations_;
        v.has(f) || (v.set(f, new zt(f)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, a.prototype.unobserve = function(f) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(f instanceof ce(f).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var v = this.observations_;
        v.has(f) && (v.delete(f), v.size || this.controller_.removeObserver(this));
      }
    }, a.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, a.prototype.gatherActive = function() {
      var f = this;
      this.clearActive(), this.observations_.forEach(function(v) {
        v.isActive() && f.activeObservations_.push(v);
      });
    }, a.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var f = this.callbackCtx_, v = this.activeObservations_.map(function(m) {
          return new Dt(m.target, m.broadcastRect());
        });
        this.callback_.call(f, v, f), this.clearActive();
      }
    }, a.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, a.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, a;
  })()
), nt = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new et(), it = (
  /** @class */
  /* @__PURE__ */ (function() {
    function a(f) {
      if (!(this instanceof a))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var v = Ct.getInstance(), m = new Nt(f, v, this);
      nt.set(this, m);
    }
    return a;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(a) {
  it.prototype[a] = function() {
    var f;
    return (f = nt.get(this))[a].apply(f, arguments);
  };
});
var It = (function() {
  return typeof we.ResizeObserver < "u" ? we.ResizeObserver : it;
})();
const Ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: It
}, Symbol.toStringTag, { value: "Module" })), At = /* @__PURE__ */ vt(Ht);
var Xe;
function Wt() {
  if (Xe) return ve;
  Xe = 1, Object.defineProperty(ve, "__esModule", {
    value: !0
  }), ve.InnerSlider = void 0;
  var a = R(ue), f = R(ht()), v = R(yt()), m = R(_e()), y = ge(), g = gt(), L = bt(), x = mt(), M = R(At);
  function R(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function N(c) {
    "@babel/helpers - typeof";
    return N = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
      return typeof d;
    } : function(d) {
      return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
    }, N(c);
  }
  function X() {
    return X = Object.assign ? Object.assign.bind() : function(c) {
      for (var d = 1; d < arguments.length; d++) {
        var O = arguments[d];
        for (var P in O)
          ({}).hasOwnProperty.call(O, P) && (c[P] = O[P]);
      }
      return c;
    }, X.apply(null, arguments);
  }
  function Z(c, d) {
    if (c == null) return {};
    var O, P, t = ee(c, d);
    if (Object.getOwnPropertySymbols) {
      var B = Object.getOwnPropertySymbols(c);
      for (P = 0; P < B.length; P++)
        O = B[P], d.includes(O) || {}.propertyIsEnumerable.call(c, O) && (t[O] = c[O]);
    }
    return t;
  }
  function ee(c, d) {
    if (c == null) return {};
    var O = {};
    for (var P in c)
      if ({}.hasOwnProperty.call(c, P)) {
        if (d.includes(P)) continue;
        O[P] = c[P];
      }
    return O;
  }
  function K(c, d) {
    var O = Object.keys(c);
    if (Object.getOwnPropertySymbols) {
      var P = Object.getOwnPropertySymbols(c);
      d && (P = P.filter(function(t) {
        return Object.getOwnPropertyDescriptor(c, t).enumerable;
      })), O.push.apply(O, P);
    }
    return O;
  }
  function C(c) {
    for (var d = 1; d < arguments.length; d++) {
      var O = arguments[d] != null ? arguments[d] : {};
      d % 2 ? K(Object(O), !0).forEach(function(P) {
        r(c, P, O[P]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(O)) : K(Object(O)).forEach(function(P) {
        Object.defineProperty(c, P, Object.getOwnPropertyDescriptor(O, P));
      });
    }
    return c;
  }
  function J(c, d) {
    if (!(c instanceof d)) throw new TypeError("Cannot call a class as a function");
  }
  function H(c, d) {
    for (var O = 0; O < d.length; O++) {
      var P = d[O];
      P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(c, h(P.key), P);
    }
  }
  function Q(c, d, O) {
    return d && H(c.prototype, d), Object.defineProperty(c, "prototype", { writable: !1 }), c;
  }
  function G(c, d) {
    if (typeof d != "function" && d !== null) throw new TypeError("Super expression must either be null or a function");
    c.prototype = Object.create(d && d.prototype, { constructor: { value: c, writable: !0, configurable: !0 } }), Object.defineProperty(c, "prototype", { writable: !1 }), d && q(c, d);
  }
  function q(c, d) {
    return q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(O, P) {
      return O.__proto__ = P, O;
    }, q(c, d);
  }
  function o(c) {
    var d = w();
    return function() {
      var O, P = s(c);
      if (d) {
        var t = s(this).constructor;
        O = Reflect.construct(P, arguments, t);
      } else O = P.apply(this, arguments);
      return l(this, O);
    };
  }
  function l(c, d) {
    if (d && (N(d) == "object" || typeof d == "function")) return d;
    if (d !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return u(c);
  }
  function u(c) {
    if (c === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return c;
  }
  function w() {
    try {
      var c = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (w = function() {
      return !!c;
    })();
  }
  function s(c) {
    return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(d) {
      return d.__proto__ || Object.getPrototypeOf(d);
    }, s(c);
  }
  function r(c, d, O) {
    return (d = h(d)) in c ? Object.defineProperty(c, d, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : c[d] = O, c;
  }
  function h(c) {
    var d = b(c, "string");
    return N(d) == "symbol" ? d : d + "";
  }
  function b(c, d) {
    if (N(c) != "object" || !c) return c;
    var O = c[Symbol.toPrimitive];
    if (O !== void 0) {
      var P = O.call(c, d);
      if (N(P) != "object") return P;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (d === "string" ? String : Number)(c);
  }
  return ve.InnerSlider = /* @__PURE__ */ (function(c) {
    G(O, c);
    var d = o(O);
    function O(P) {
      var t;
      J(this, O), t = d.call(this, P), r(u(t), "listRefHandler", function(i) {
        return t.list = i;
      }), r(u(t), "trackRefHandler", function(i) {
        return t.track = i;
      }), r(u(t), "adaptHeight", function() {
        if (t.props.adaptiveHeight && t.list) {
          var i = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
          t.list.style.height = (0, y.getHeight)(i) + "px";
        }
      }), r(u(t), "componentDidMount", function() {
        if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
          var i = (0, y.getOnDemandLazySlides)(C(C({}, t.props), t.state));
          i.length > 0 && (t.setState(function(n) {
            return {
              lazyLoadedList: n.lazyLoadedList.concat(i)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(i));
        }
        var e = C({
          listRef: t.list,
          trackRef: t.track
        }, t.props);
        t.updateState(e, !0, function() {
          t.adaptHeight(), t.props.autoplay && t.autoPlay("update");
        }), t.props.lazyLoad === "progressive" && (t.lazyLoadTimer = setInterval(t.progressiveLazyLoad, 1e3)), t.ro = new M.default(function() {
          t.state.animating ? (t.onWindowResized(!1), t.callbackTimers.push(setTimeout(function() {
            return t.onWindowResized();
          }, t.props.speed))) : t.onWindowResized();
        }), t.ro.observe(t.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(n) {
          n.onfocus = t.props.pauseOnFocus ? t.onSlideFocus : null, n.onblur = t.props.pauseOnFocus ? t.onSlideBlur : null;
        }), window.addEventListener ? window.addEventListener("resize", t.onWindowResized) : window.attachEvent("onresize", t.onWindowResized);
      }), r(u(t), "componentWillUnmount", function() {
        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach(function(i) {
          return clearTimeout(i);
        }), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
      }), r(u(t), "componentDidUpdate", function(i) {
        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
          var e = (0, y.getOnDemandLazySlides)(C(C({}, t.props), t.state));
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
        }, t.props), t.state), p = t.didPropsChange(i);
        p && t.updateState(n, p, function() {
          t.state.currentSlide >= a.default.Children.count(t.props.children) && t.changeSlide({
            message: "index",
            index: a.default.Children.count(t.props.children) - t.props.slidesToShow,
            currentSlide: t.state.currentSlide
          }), t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
        });
      }), r(u(t), "onWindowResized", function(i) {
        t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, v.default)(function() {
          return t.resizeWindow(i);
        }, 50), t.debouncedResize();
      }), r(u(t), "resizeWindow", function() {
        var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = !!(t.track && t.track.node);
        if (e) {
          var n = C(C({
            listRef: t.list,
            trackRef: t.track
          }, t.props), t.state);
          t.updateState(n, i, function() {
            t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
          }), t.setState({
            animating: !1
          }), clearTimeout(t.animationEndCallback), delete t.animationEndCallback;
        }
      }), r(u(t), "updateState", function(i, e, n) {
        var p = (0, y.initializedState)(i);
        i = C(C(C({}, i), p), {}, {
          slideIndex: p.currentSlide
        });
        var _ = (0, y.getTrackLeft)(i);
        i = C(C({}, i), {}, {
          left: _
        });
        var S = (0, y.getTrackCSS)(i);
        (e || a.default.Children.count(t.props.children) !== a.default.Children.count(i.children)) && (p.trackStyle = S), t.setState(p, n);
      }), r(u(t), "ssrInit", function() {
        if (t.props.variableWidth) {
          var i = 0, e = 0, n = [], p = (0, y.getPreClones)(C(C(C({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          })), _ = (0, y.getPostClones)(C(C(C({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          }));
          t.props.children.forEach(function(re) {
            n.push(re.props.style.width), i += re.props.style.width;
          });
          for (var S = 0; S < p; S++)
            e += n[n.length - 1 - S], i += n[n.length - 1 - S];
          for (var T = 0; T < _; T++)
            i += n[T];
          for (var k = 0; k < t.state.currentSlide; k++)
            e += n[k];
          var j = {
            width: i + "px",
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
        var W = a.default.Children.count(t.props.children), F = C(C(C({}, t.props), t.state), {}, {
          slideCount: W
        }), V = (0, y.getPreClones)(F) + (0, y.getPostClones)(F) + W, U = 100 / t.props.slidesToShow * V, $ = 100 / V, I = -$ * ((0, y.getPreClones)(F) + t.state.currentSlide) * U / 100;
        t.props.centerMode && (I += (100 - $ * U / 100) / 2);
        var Y = {
          width: U + "%",
          left: I + "%"
        };
        return {
          slideWidth: $ + "%",
          trackStyle: Y
        };
      }), r(u(t), "checkImagesLoad", function() {
        var i = t.list && t.list.querySelectorAll && t.list.querySelectorAll(".slick-slide img") || [], e = i.length, n = 0;
        Array.prototype.forEach.call(i, function(p) {
          var _ = function() {
            return ++n && n >= e && t.onWindowResized();
          };
          if (!p.onclick)
            p.onclick = function() {
              return p.parentNode.focus();
            };
          else {
            var S = p.onclick;
            p.onclick = function(T) {
              S(T), p.parentNode.focus();
            };
          }
          p.onload || (t.props.lazyLoad ? p.onload = function() {
            t.adaptHeight(), t.callbackTimers.push(setTimeout(t.onWindowResized, t.props.speed));
          } : (p.onload = _, p.onerror = function() {
            _(), t.props.onLazyLoadError && t.props.onLazyLoadError();
          }));
        });
      }), r(u(t), "progressiveLazyLoad", function() {
        for (var i = [], e = C(C({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, y.getPostClones)(e); n++)
          if (t.state.lazyLoadedList.indexOf(n) < 0) {
            i.push(n);
            break;
          }
        for (var p = t.state.currentSlide - 1; p >= -(0, y.getPreClones)(e); p--)
          if (t.state.lazyLoadedList.indexOf(p) < 0) {
            i.push(p);
            break;
          }
        i.length > 0 ? (t.setState(function(_) {
          return {
            lazyLoadedList: _.lazyLoadedList.concat(i)
          };
        }), t.props.onLazyLoad && t.props.onLazyLoad(i)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
      }), r(u(t), "slideHandler", function(i) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = t.props, p = n.asNavFor, _ = n.beforeChange, S = n.onLazyLoad, T = n.speed, k = n.afterChange, j = t.state.currentSlide, A = (0, y.slideHandler)(C(C(C({
          index: i
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e
        })), W = A.state, F = A.nextState;
        if (W) {
          _ && _(j, W.currentSlide);
          var V = W.lazyLoadedList.filter(function(U) {
            return t.state.lazyLoadedList.indexOf(U) < 0;
          });
          S && V.length > 0 && S(V), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), k && k(j), delete t.animationEndCallback), t.setState(W, function() {
            p && t.asNavForIndex !== i && (t.asNavForIndex = i, p.innerSlider.slideHandler(i)), F && (t.animationEndCallback = setTimeout(function() {
              var U = F.animating, $ = Z(F, ["animating"]);
              t.setState($, function() {
                t.callbackTimers.push(setTimeout(function() {
                  return t.setState({
                    animating: U
                  });
                }, 10)), k && k(W.currentSlide), delete t.animationEndCallback;
              });
            }, T));
          });
        }
      }), r(u(t), "changeSlide", function(i) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = C(C({}, t.props), t.state), p = (0, y.changeSlide)(n, i);
        if (!(p !== 0 && !p) && (e === !0 ? t.slideHandler(p, e) : t.slideHandler(p), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
          var _ = t.list.querySelectorAll(".slick-current");
          _[0] && _[0].focus();
        }
      }), r(u(t), "clickHandler", function(i) {
        t.clickable === !1 && (i.stopPropagation(), i.preventDefault()), t.clickable = !0;
      }), r(u(t), "keyHandler", function(i) {
        var e = (0, y.keyHandler)(i, t.props.accessibility, t.props.rtl);
        e !== "" && t.changeSlide({
          message: e
        });
      }), r(u(t), "selectHandler", function(i) {
        t.changeSlide(i);
      }), r(u(t), "disableBodyScroll", function() {
        var i = function(n) {
          n = n || window.event, n.preventDefault && n.preventDefault(), n.returnValue = !1;
        };
        window.ontouchmove = i;
      }), r(u(t), "enableBodyScroll", function() {
        window.ontouchmove = null;
      }), r(u(t), "swipeStart", function(i) {
        t.props.verticalSwiping && t.disableBodyScroll();
        var e = (0, y.swipeStart)(i, t.props.swipe, t.props.draggable);
        e !== "" && t.setState(e);
      }), r(u(t), "swipeMove", function(i) {
        var e = (0, y.swipeMove)(i, C(C(C({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(u(t), "swipeEnd", function(i) {
        var e = (0, y.swipeEnd)(i, C(C(C({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        if (e) {
          var n = e.triggerSlideHandler;
          delete e.triggerSlideHandler, t.setState(e), n !== void 0 && (t.slideHandler(n), t.props.verticalSwiping && t.enableBodyScroll());
        }
      }), r(u(t), "touchEnd", function(i) {
        t.swipeEnd(i), t.clickable = !0;
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
      }), r(u(t), "slickGoTo", function(i) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (i = Number(i), isNaN(i)) return "";
        t.callbackTimers.push(setTimeout(function() {
          return t.changeSlide({
            message: "index",
            index: i,
            currentSlide: t.state.currentSlide
          }, e);
        }, 0));
      }), r(u(t), "play", function() {
        var i;
        if (t.props.rtl)
          i = t.state.currentSlide - t.props.slidesToScroll;
        else if ((0, y.canGoNext)(C(C({}, t.props), t.state)))
          i = t.state.currentSlide + t.props.slidesToScroll;
        else
          return !1;
        t.slideHandler(i);
      }), r(u(t), "autoPlay", function(i) {
        t.autoplayTimer && clearInterval(t.autoplayTimer);
        var e = t.state.autoplaying;
        if (i === "update") {
          if (e === "hovered" || e === "focused" || e === "paused")
            return;
        } else if (i === "leave") {
          if (e === "paused" || e === "focused")
            return;
        } else if (i === "blur" && (e === "paused" || e === "hovered"))
          return;
        t.autoplayTimer = setInterval(t.play, t.props.autoplaySpeed + 50), t.setState({
          autoplaying: "playing"
        });
      }), r(u(t), "pause", function(i) {
        t.autoplayTimer && (clearInterval(t.autoplayTimer), t.autoplayTimer = null);
        var e = t.state.autoplaying;
        i === "paused" ? t.setState({
          autoplaying: "paused"
        }) : i === "focused" ? (e === "hovered" || e === "playing") && t.setState({
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
        var i = (0, m.default)("slick-slider", t.props.className, {
          "slick-vertical": t.props.vertical,
          "slick-initialized": !0
        }), e = C(C({}, t.props), t.state), n = (0, y.extractObject)(e, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), p = t.props.pauseOnHover;
        n = C(C({}, n), {}, {
          onMouseEnter: p ? t.onTrackOver : null,
          onMouseLeave: p ? t.onTrackLeave : null,
          onMouseOver: p ? t.onTrackOver : null,
          focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
        });
        var _;
        if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
          var S = (0, y.extractObject)(e, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), T = t.props.pauseOnDotsHover;
          S = C(C({}, S), {}, {
            clickHandler: t.changeSlide,
            onMouseEnter: T ? t.onDotsLeave : null,
            onMouseOver: T ? t.onDotsOver : null,
            onMouseLeave: T ? t.onDotsLeave : null
          }), _ = /* @__PURE__ */ a.default.createElement(L.Dots, S);
        }
        var k, j, A = (0, y.extractObject)(e, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        A.clickHandler = t.changeSlide, t.props.arrows && (k = /* @__PURE__ */ a.default.createElement(x.PrevArrow, A), j = /* @__PURE__ */ a.default.createElement(x.NextArrow, A));
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
        var V = C(C({}, W), F), U = t.props.touchMove, $ = {
          className: "slick-list",
          style: V,
          onClick: t.clickHandler,
          onMouseDown: U ? t.swipeStart : null,
          onMouseMove: t.state.dragging && U ? t.swipeMove : null,
          onMouseUp: U ? t.swipeEnd : null,
          onMouseLeave: t.state.dragging && U ? t.swipeEnd : null,
          onTouchStart: U ? t.swipeStart : null,
          onTouchMove: t.state.dragging && U ? t.swipeMove : null,
          onTouchEnd: U ? t.touchEnd : null,
          onTouchCancel: t.state.dragging && U ? t.swipeEnd : null,
          onKeyDown: t.props.accessibility ? t.keyHandler : null
        }, I = {
          className: i,
          dir: "ltr",
          style: t.props.style
        };
        return t.props.unslick && ($ = {
          className: "slick-list"
        }, I = {
          className: i,
          style: t.props.style
        }), /* @__PURE__ */ a.default.createElement("div", I, t.props.unslick ? "" : k, /* @__PURE__ */ a.default.createElement("div", X({
          ref: t.listRefHandler
        }, $), /* @__PURE__ */ a.default.createElement(g.Track, X({
          ref: t.trackRefHandler
        }, n), t.props.children)), t.props.unslick ? "" : j, t.props.unslick ? "" : _);
      }), t.list = null, t.track = null, t.state = C(C({}, f.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: a.default.Children.count(t.props.children)
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      var B = t.ssrInit();
      return t.state = C(C({}, t.state), B), t;
    }
    return Q(O, [{
      key: "didPropsChange",
      value: function(t) {
        for (var B = !1, i = 0, e = Object.keys(this.props); i < e.length; i++) {
          var n = e[i];
          if (!t.hasOwnProperty(n)) {
            B = !0;
            break;
          }
          if (!(N(t[n]) === "object" || typeof t[n] == "function" || isNaN(t[n])) && t[n] !== this.props[n]) {
            B = !0;
            break;
          }
        }
        return B || a.default.Children.count(this.props.children) !== a.default.Children.count(t.children);
      }
    }]), O;
  })(a.default.Component), ve;
}
var xe, Ke;
function qt() {
  if (Ke) return xe;
  Ke = 1;
  var a = function(f) {
    return f.replace(/[A-Z]/g, function(v) {
      return "-" + v.toLowerCase();
    }).toLowerCase();
  };
  return xe = a, xe;
}
var Me, Ve;
function Ft() {
  if (Ve) return Me;
  Ve = 1;
  var a = qt(), f = function(y) {
    var g = /[height|width]$/;
    return g.test(y);
  }, v = function(y) {
    var g = "", L = Object.keys(y);
    return L.forEach(function(x, M) {
      var R = y[x];
      x = a(x), f(x) && typeof R == "number" && (R = R + "px"), R === !0 ? g += x : R === !1 ? g += "not " + x : g += "(" + x + ": " + R + ")", M < L.length - 1 && (g += " and ");
    }), g;
  }, m = function(y) {
    var g = "";
    return typeof y == "string" ? y : y instanceof Array ? (y.forEach(function(L, x) {
      g += v(L), x < y.length - 1 && (g += ", ");
    }), g) : v(y);
  };
  return Me = m, Me;
}
var Je;
function $t() {
  return Je || (Je = 1, (function(a) {
    var f = { NODE_ENV: "production" };
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.default = void 0;
    var v = x(ue), m = Wt(), y = x(Ft()), g = x(Ze()), L = ge();
    function x(s) {
      return s && s.__esModule ? s : { default: s };
    }
    function M(s) {
      "@babel/helpers - typeof";
      return M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
        return typeof r;
      } : function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, M(s);
    }
    function R() {
      return R = Object.assign ? Object.assign.bind() : function(s) {
        for (var r = 1; r < arguments.length; r++) {
          var h = arguments[r];
          for (var b in h)
            ({}).hasOwnProperty.call(h, b) && (s[b] = h[b]);
        }
        return s;
      }, R.apply(null, arguments);
    }
    function N(s, r) {
      var h = Object.keys(s);
      if (Object.getOwnPropertySymbols) {
        var b = Object.getOwnPropertySymbols(s);
        r && (b = b.filter(function(c) {
          return Object.getOwnPropertyDescriptor(s, c).enumerable;
        })), h.push.apply(h, b);
      }
      return h;
    }
    function X(s) {
      for (var r = 1; r < arguments.length; r++) {
        var h = arguments[r] != null ? arguments[r] : {};
        r % 2 ? N(Object(h), !0).forEach(function(b) {
          l(s, b, h[b]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(h)) : N(Object(h)).forEach(function(b) {
          Object.defineProperty(s, b, Object.getOwnPropertyDescriptor(h, b));
        });
      }
      return s;
    }
    function Z(s, r) {
      if (!(s instanceof r)) throw new TypeError("Cannot call a class as a function");
    }
    function ee(s, r) {
      for (var h = 0; h < r.length; h++) {
        var b = r[h];
        b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(s, u(b.key), b);
      }
    }
    function K(s, r, h) {
      return r && ee(s.prototype, r), Object.defineProperty(s, "prototype", { writable: !1 }), s;
    }
    function C(s, r) {
      if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
      s.prototype = Object.create(r && r.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, "prototype", { writable: !1 }), r && J(s, r);
    }
    function J(s, r) {
      return J = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(h, b) {
        return h.__proto__ = b, h;
      }, J(s, r);
    }
    function H(s) {
      var r = q();
      return function() {
        var h, b = o(s);
        if (r) {
          var c = o(this).constructor;
          h = Reflect.construct(b, arguments, c);
        } else h = b.apply(this, arguments);
        return Q(this, h);
      };
    }
    function Q(s, r) {
      if (r && (M(r) == "object" || typeof r == "function")) return r;
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
    function o(s) {
      return o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
      }, o(s);
    }
    function l(s, r, h) {
      return (r = u(r)) in s ? Object.defineProperty(s, r, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : s[r] = h, s;
    }
    function u(s) {
      var r = w(s, "string");
      return M(r) == "symbol" ? r : r + "";
    }
    function w(s, r) {
      if (M(s) != "object" || !s) return s;
      var h = s[Symbol.toPrimitive];
      if (h !== void 0) {
        var b = h.call(s, r);
        if (M(b) != "object") return b;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(s);
    }
    a.default = /* @__PURE__ */ (function(s) {
      C(h, s);
      var r = H(h);
      function h(b) {
        var c;
        return Z(this, h), c = r.call(this, b), l(G(c), "innerSliderRefHandler", function(d) {
          return c.innerSlider = d;
        }), l(G(c), "slickPrev", function() {
          return c.innerSlider.slickPrev();
        }), l(G(c), "slickNext", function() {
          return c.innerSlider.slickNext();
        }), l(G(c), "slickGoTo", function(d) {
          var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return c.innerSlider.slickGoTo(d, O);
        }), l(G(c), "slickPause", function() {
          return c.innerSlider.pause("paused");
        }), l(G(c), "slickPlay", function() {
          return c.innerSlider.autoPlay("play");
        }), c.state = {
          breakpoint: null
        }, c._responsiveMediaHandlers = [], c;
      }
      return K(h, [{
        key: "media",
        value: function(c, d) {
          var O = window.matchMedia(c), P = function(B) {
            var i = B.matches;
            i && d();
          };
          O.addListener(P), this._responsiveMediaHandlers.push({
            mql: O,
            query: c,
            listener: P
          });
        }
        // handles responsive breakpoints
      }, {
        key: "componentDidMount",
        value: function() {
          var c = this;
          if (this.props.responsive) {
            var d = this.props.responsive.map(function(P) {
              return P.breakpoint;
            });
            d.sort(function(P, t) {
              return P - t;
            }), d.forEach(function(P, t) {
              var B;
              t === 0 ? B = (0, y.default)({
                minWidth: 0,
                maxWidth: P
              }) : B = (0, y.default)({
                minWidth: d[t - 1] + 1,
                maxWidth: P
              }), (0, L.canUseDOM)() && c.media(B, function() {
                c.setState({
                  breakpoint: P
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
          }), d = O[0].settings === "unslick" ? "unslick" : X(X(X({}, g.default), this.props), O[0].settings)) : d = X(X({}, g.default), this.props), d.centerMode && (d.slidesToScroll > 1 && f.NODE_ENV, d.slidesToScroll = 1), d.fade && (d.slidesToShow > 1 && f.NODE_ENV, d.slidesToScroll > 1 && f.NODE_ENV, d.slidesToShow = 1, d.slidesToScroll = 1);
          var P = v.default.Children.toArray(this.props.children);
          P = P.filter(function(T) {
            return typeof T == "string" ? !!T.trim() : !!T;
          }), d.variableWidth && (d.rows > 1 || d.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), d.variableWidth = !1);
          for (var t = [], B = null, i = 0; i < P.length; i += d.rows * d.slidesPerRow) {
            for (var e = [], n = i; n < i + d.rows * d.slidesPerRow; n += d.slidesPerRow) {
              for (var p = [], _ = n; _ < n + d.slidesPerRow && (d.variableWidth && P[_].props.style && (B = P[_].props.style.width), !(_ >= P.length)); _ += 1)
                p.push(/* @__PURE__ */ v.default.cloneElement(P[_], {
                  key: 100 * i + 10 * n + _,
                  tabIndex: -1,
                  style: {
                    width: "".concat(100 / d.slidesPerRow, "%"),
                    display: "inline-block"
                  }
                }));
              e.push(/* @__PURE__ */ v.default.createElement("div", {
                key: 10 * i + n
              }, p));
            }
            d.variableWidth ? t.push(/* @__PURE__ */ v.default.createElement("div", {
              key: i,
              style: {
                width: B
              }
            }, e)) : t.push(/* @__PURE__ */ v.default.createElement("div", {
              key: i
            }, e));
          }
          if (d === "unslick") {
            var S = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ v.default.createElement("div", {
              className: S
            }, P);
          } else t.length <= d.slidesToShow && (d.unslick = !0);
          return /* @__PURE__ */ v.default.createElement(m.InnerSlider, R({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, (0, L.filterSettings)(d)), t);
        }
      }]), h;
    })(v.default.Component);
  })(Ce)), Ce;
}
var Qe;
function Bt() {
  return Qe || (Qe = 1, (function(a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.default = void 0;
    var f = v($t());
    function v(m) {
      return m && m.__esModule ? m : { default: m };
    }
    a.default = f.default;
  })(ke)), ke;
}
var Yt = Bt();
const Gt = /* @__PURE__ */ pt(Yt), Ut = st(() => Promise.resolve().then(() => Zt)), Xt = ({
  media: a = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: f = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: v = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: m,
  videoUrl: y,
  lottieUrl: g,
  lottieData: L,
  iframeUrl: x,
  flipbookUrl: M,
  title: R,
  className: N = ""
}) => {
  var l;
  const X = typeof window < "u" && window.location.origin.indexOf("author") > -1, Z = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, K = `relative w-full h-full ${f === "square" ? "aspect-square" : f === "rectangle" ? "aspect-[4/3]" : a === "video" ? "aspect-video" : ""}`.trim(), C = f === "default" ? `w-full h-full ${N}`.trim() : `absolute inset-0 w-full h-full ${N}`.trim(), J = "w-full h-full", H = f === "default" ? `${C}`.trim() : C, Q = v === "contain" ? "object-contain" : "object-cover", G = v === "contain" ? "xMidYMid meet" : "xMidYMid slice", q = `relative w-full ${N}`.trim(), o = "w-full min-h-[280px]";
  switch (a) {
    case "image":
      if (m)
        return /* @__PURE__ */ z("div", { className: K, children: /* @__PURE__ */ z(
          "img",
          {
            src: m,
            alt: R || "Media image",
            className: `${Q} ${C}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (y) {
        const u = y.includes("youtube.com/watch") || y.includes("youtu.be/");
        let w = y;
        u && (w = `https://www.youtube.com/embed/${y.includes("youtu.be/") ? y.split("youtu.be/")[1].split("?")[0] : (l = y.split("v=")[1]) == null ? void 0 : l.split("&")[0]}`);
        const s = (() => {
          if (!u) return w;
          try {
            const r = new URL(w);
            return r.searchParams.set("autoplay", "0"), r.searchParams.set("mute", "0"), r.searchParams.set("playsinline", "1"), r.searchParams.set("controls", "1"), r.searchParams.set("rel", "0"), r.toString();
          } catch {
            return w.includes("?") ? w.includes("autoplay=") ? w : `${w}&autoplay=0` : `${w}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ z("div", { className: K, children: u ? /* @__PURE__ */ z(
          "iframe",
          {
            src: s,
            title: R || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${C} ${Q}`.trim()
          }
        ) : /* @__PURE__ */ z(
          "video",
          {
            className: `${C} ${Q}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: R || "Video player",
            children: /* @__PURE__ */ z("source", { src: y })
          }
        ) });
      }
      break;
    case "lottie":
      if (L)
        return X ? /* @__PURE__ */ z("div", { className: K, role: "img", "aria-label": R || "Animation", children: /* @__PURE__ */ z(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${C}`.trim(),
            children: /* @__PURE__ */ z("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ z(
          "div",
          {
            className: K,
            role: "img",
            "aria-label": R || "Animation",
            children: /* @__PURE__ */ z("div", { className: `${C} overflow-hidden`.trim(), children: /* @__PURE__ */ z(
              dt,
              {
                animationData: L,
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
        return /* @__PURE__ */ z("div", { className: K, children: /* @__PURE__ */ z("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (x)
        return /* @__PURE__ */ z("div", { className: K, children: /* @__PURE__ */ z(
          "iframe",
          {
            src: x,
            title: R || "Iframe content",
            frameBorder: "0",
            className: `${H} ${Q}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (M)
        return X ? /* @__PURE__ */ z("div", { className: q, role: "img", "aria-label": R || "Flipbook", children: /* @__PURE__ */ z(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${o}`.trim(),
            children: /* @__PURE__ */ z("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ z("div", { className: q, children: /* @__PURE__ */ z("div", { className: o, children: /* @__PURE__ */ z(ut, { fallback: /* @__PURE__ */ z("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ z(Ut, { pdfUrl: M, title: R, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ z("div", { className: K, children: /* @__PURE__ */ z("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${f === "default" ? "" : "absolute inset-0"}`.trim(), children: a ? `${a.charAt(0).toUpperCase() + a.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function nr({
  items: a = [],
  // array of media objects or { media: { ... } }
  media: f = null,
  // single media object
  id: v = "",
  className: m = "",
  infinite: y = !1
}) {
  const g = a.map((M) => M.media || M), L = (M, R = "") => M ? /* @__PURE__ */ z("div", { className: "relative w-full h-full min-h-[220px] overflow-hidden", children: /* @__PURE__ */ z("div", { className: "absolute inset-0 w-full h-full", children: /* @__PURE__ */ z(
    Xt,
    {
      media: M.type || "image",
      aspect: "default",
      imageUrl: M.imageUrl,
      videoUrl: M.videoUrl,
      lottieUrl: M.lottieUrl,
      lottieData: M.lottieData,
      iframeUrl: M.iframeUrl,
      title: M.title || R,
      className: "w-full h-full object-cover"
    }
  ) }) }) : null, x = {
    className: "w-full trust-slider",
    dots: !0,
    infinite: y,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !1,
    arrows: !1
  };
  return g && g.length > 0 ? /* @__PURE__ */ z("div", { className: `container ${m}`, id: v, children: /* @__PURE__ */ z(Gt, { ...x, children: g.map((M, R) => /* @__PURE__ */ z("div", { ...M.attributes || {}, children: L(M) }, R)) }) }) : f ? /* @__PURE__ */ z("div", { className: `container ${m}`, id: v, children: L(f) }) : null;
}
let ze, ot, De, Se;
const Kt = async () => {
  if (!Se) {
    const a = await import("react-pdf");
    Se = a.pdfjs, ot = a.Document, De = a.Page, Se.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${Se.version}/build/pdf.worker.min.mjs`;
  }
}, Vt = async () => {
  ze || (ze = (await import("react-pageflip")).default);
}, Jt = ft(({ children: a }, f) => /* @__PURE__ */ z("div", { ref: f, className: "w-full h-full overflow-hidden", children: a })), Qt = ({ pdfUrl: a, title: f, width: v = 280, height: m = 280, className: y = "" }) => {
  const [g, L] = pe(0), [x, M] = pe(null), [R, N] = pe(!0), [X, Z] = pe(m / v), [ee, K] = pe(0), C = ct(null);
  Ie(() => {
    Promise.all([Kt(), Vt()]).then(() => N(!1)).catch(() => {
      M("Failed to load flipbook");
    });
  }, []), Ie(() => {
    const q = C.current;
    if (!q) return;
    const o = new ResizeObserver(([l]) => {
      const u = Math.floor(l.contentRect.width);
      u > 0 && K(u);
    });
    return o.observe(q), () => o.disconnect();
  }, [R]);
  const J = ee > 0 ? Math.floor(ee / 2) : Math.floor(v / 2), H = Math.round(J * X), Q = He(async (q) => {
    try {
      const l = (await q.getPage(1)).getViewport({ scale: 1 });
      l != null && l.width && (l != null && l.height) && Z(l.height / l.width);
    } catch {
    }
    L(q.numPages || 0);
  }, []), G = He((q) => {
    M((q == null ? void 0 : q.message) || "Failed to load PDF");
  }, []);
  return x ? /* @__PURE__ */ z("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : R ? /* @__PURE__ */ z("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ z("div", { ref: C, className: `w-full ${y}`.trim(), children: /* @__PURE__ */ lt(
    ot,
    {
      file: a,
      onLoadSuccess: Q,
      onLoadError: G,
      loading: /* @__PURE__ */ z("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        g === 1 && /* @__PURE__ */ z(
          "div",
          {
            className: `w-full flex justify-center items-center ${y}`.trim(),
            style: { minHeight: `${H}px` },
            children: /* @__PURE__ */ z(De, { pageNumber: 1, width: v, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        g > 1 && /* @__PURE__ */ z(
          ze,
          {
            width: J,
            height: H,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": f || "Flipbook",
            children: Array.from({ length: g }, (q, o) => /* @__PURE__ */ z(Jt, { children: /* @__PURE__ */ z(De, { pageNumber: o + 1, width: J, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, o))
          },
          `${J}-${H}`
        )
      ]
    }
  ) });
}, Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qt
}, Symbol.toStringTag, { value: "Module" }));
export {
  nr as default
};
