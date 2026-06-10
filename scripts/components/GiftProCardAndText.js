import { jsx as E, jsxs as ce } from "react/jsx-runtime";
import ue, { lazy as ct, Suspense as ft, useState as ve, useRef as dt, useEffect as Ae, useCallback as He, forwardRef as pt } from "react";
import vt from "lottie-react";
var Se = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ht(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function yt(i) {
  if (Object.prototype.hasOwnProperty.call(i, "__esModule")) return i;
  var c = i.default;
  if (typeof c == "function") {
    var p = function b() {
      return this instanceof b ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    p.prototype = c.prototype;
  } else p = {};
  return Object.defineProperty(p, "__esModule", { value: !0 }), Object.keys(i).forEach(function(b) {
    var v = Object.getOwnPropertyDescriptor(i, b);
    Object.defineProperty(p, b, v.get ? v : {
      enumerable: !0,
      get: function() {
        return i[b];
      }
    });
  }), p;
}
var Ce = {}, Te = {}, he = {}, je = {}, We;
function gt() {
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
var xe, qe;
function bt() {
  if (qe) return xe;
  qe = 1;
  var i = "Expected a function", c = NaN, p = "[object Symbol]", b = /^\s+|\s+$/g, v = /^[-+]0x[0-9a-f]+$/i, g = /^0b[01]+$/i, L = /^0o[0-7]+$/i, M = parseInt, D = typeof Se == "object" && Se && Se.Object === Object && Se, R = typeof self == "object" && self && self.Object === Object && self, z = D || R || Function("return this")(), Y = Object.prototype, ee = Y.toString, N = Math.max, W = Math.min, P = function() {
    return z.Date.now();
  };
  function K(a, l, u) {
    var w, s, r, y, m, f, d = 0, O = !1, k = !1, t = !0;
    if (typeof a != "function")
      throw new TypeError(i);
    l = $(l) || 0, I(u) && (O = !!u.leading, k = "maxWait" in u, r = k ? N($(u.maxWait) || 0, l) : r, t = "trailing" in u ? !!u.trailing : t);
    function U(j) {
      var q = w, F = s;
      return w = s = void 0, d = j, y = a.apply(F, q), y;
    }
    function o(j) {
      return d = j, m = setTimeout(h, l), O ? U(j) : y;
    }
    function e(j) {
      var q = j - f, F = j - d, B = l - q;
      return k ? W(B, r - F) : B;
    }
    function n(j) {
      var q = j - f, F = j - d;
      return f === void 0 || q >= l || q < 0 || k && F >= r;
    }
    function h() {
      var j = P();
      if (n(j))
        return _(j);
      m = setTimeout(h, e(j));
    }
    function _(j) {
      return m = void 0, t && w ? U(j) : (w = s = void 0, y);
    }
    function S() {
      m !== void 0 && clearTimeout(m), d = 0, w = f = s = m = void 0;
    }
    function T() {
      return m === void 0 ? y : _(P());
    }
    function C() {
      var j = P(), q = n(j);
      if (w = arguments, s = this, f = j, q) {
        if (m === void 0)
          return o(f);
        if (k)
          return m = setTimeout(h, l), U(f);
      }
      return m === void 0 && (m = setTimeout(h, l)), y;
    }
    return C.cancel = S, C.flush = T, C;
  }
  function I(a) {
    var l = typeof a;
    return !!a && (l == "object" || l == "function");
  }
  function Q(a) {
    return !!a && typeof a == "object";
  }
  function V(a) {
    return typeof a == "symbol" || Q(a) && ee.call(a) == p;
  }
  function $(a) {
    if (typeof a == "number")
      return a;
    if (V(a))
      return c;
    if (I(a)) {
      var l = typeof a.valueOf == "function" ? a.valueOf() : a;
      a = I(l) ? l + "" : l;
    }
    if (typeof a != "string")
      return a === 0 ? a : +a;
    a = a.replace(b, "");
    var u = g.test(a);
    return u || L.test(a) ? M(a.slice(2), u ? 2 : 8) : v.test(a) ? c : +a;
  }
  return xe = K, xe;
}
var Ee = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Fe;
function ke() {
  return Fe || (Fe = 1, (function(i) {
    (function() {
      var c = {}.hasOwnProperty;
      function p() {
        for (var g = "", L = 0; L < arguments.length; L++) {
          var M = arguments[L];
          M && (g = v(g, b(M)));
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
        var L = "";
        for (var M in g)
          c.call(g, M) && g[M] && (L = v(L, M));
        return L;
      }
      function v(g, L) {
        return L ? g ? g + " " + L : g + L : g;
      }
      i.exports ? (p.default = p, i.exports = p) : window.classNames = p;
    })();
  })(Ee)), Ee.exports;
}
var x = {}, Le = {}, $e;
function rt() {
  return $e || ($e = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var c = p(ue);
    function p(v) {
      return v && v.__esModule ? v : { default: v };
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
  if (Be) return x;
  Be = 1, Object.defineProperty(x, "__esModule", {
    value: !0
  }), x.checkSpecKeys = x.checkNavigable = x.changeSlide = x.canUseDOM = x.canGoNext = void 0, x.clamp = R, x.extractObject = void 0, x.filterSettings = U, x.validSettings = x.swipeStart = x.swipeMove = x.swipeEnd = x.slidesOnRight = x.slidesOnLeft = x.slideHandler = x.siblingDirection = x.safePreventDefault = x.lazyStartIndex = x.lazySlidesOnRight = x.lazySlidesOnLeft = x.lazyEndIndex = x.keyHandler = x.initializedState = x.getWidth = x.getTrackLeft = x.getTrackCSS = x.getTrackAnimateCSS = x.getTotalSlides = x.getSwipeDirection = x.getSlideCount = x.getRequiredLazySlides = x.getPreClones = x.getPostClones = x.getOnDemandLazySlides = x.getNavigableIndexes = x.getHeight = void 0;
  var i = p(ue), c = p(rt());
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
  function v(o, e) {
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
      e % 2 ? v(Object(n), !0).forEach(function(h) {
        L(o, h, n[h]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach(function(h) {
        Object.defineProperty(o, h, Object.getOwnPropertyDescriptor(n, h));
      });
    }
    return o;
  }
  function L(o, e, n) {
    return (e = M(e)) in o ? Object.defineProperty(o, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = n, o;
  }
  function M(o) {
    var e = D(o, "string");
    return b(e) == "symbol" ? e : e + "";
  }
  function D(o, e) {
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
  var z = x.safePreventDefault = function(e) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(e._reactName) || e.preventDefault();
  }, Y = x.getOnDemandLazySlides = function(e) {
    for (var n = [], h = ee(e), _ = N(e), S = h; S < _; S++)
      e.lazyLoadedList.indexOf(S) < 0 && n.push(S);
    return n;
  };
  x.getRequiredLazySlides = function(e) {
    for (var n = [], h = ee(e), _ = N(e), S = h; S < _; S++)
      n.push(S);
    return n;
  };
  var ee = x.lazyStartIndex = function(e) {
    return e.currentSlide - W(e);
  }, N = x.lazyEndIndex = function(e) {
    return e.currentSlide + P(e);
  }, W = x.lazySlidesOnLeft = function(e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }, P = x.lazySlidesOnRight = function(e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }, K = x.getWidth = function(e) {
    return e && e.offsetWidth || 0;
  }, I = x.getHeight = function(e) {
    return e && e.offsetHeight || 0;
  }, Q = x.getSwipeDirection = function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h, _, S, T;
    return h = e.startX - e.curX, _ = e.startY - e.curY, S = Math.atan2(_, h), T = Math.round(S * 180 / Math.PI), T < 0 && (T = 360 - Math.abs(T)), T <= 45 && T >= 0 || T <= 360 && T >= 315 ? "left" : T >= 135 && T <= 225 ? "right" : n === !0 ? T >= 35 && T <= 135 ? "up" : "down" : "vertical";
  }, V = x.canGoNext = function(e) {
    var n = !0;
    return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (n = !1), n;
  };
  x.extractObject = function(e, n) {
    var h = {};
    return n.forEach(function(_) {
      return h[_] = e[_];
    }), h;
  }, x.initializedState = function(e) {
    var n = i.default.Children.count(e.children), h = e.listRef, _ = Math.ceil(K(h)), S = e.trackRef && e.trackRef.node, T = Math.ceil(K(S)), C;
    if (e.vertical)
      C = _;
    else {
      var j = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding == "string" && e.centerPadding.slice(-1) === "%" && (j *= _ / 100), C = Math.ceil((_ - j) / e.slidesToShow);
    }
    var q = h && I(h.querySelector('[data-index="0"]')), F = q * e.slidesToShow, B = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && (B = n - 1 - e.initialSlide);
    var Z = e.lazyLoadedList || [], J = Y(g(g({}, e), {}, {
      currentSlide: B,
      lazyLoadedList: Z
    }));
    Z = Z.concat(J);
    var G = {
      slideCount: n,
      slideWidth: C,
      listWidth: _,
      trackWidth: T,
      currentSlide: B,
      slideHeight: q,
      listHeight: F,
      lazyLoadedList: Z
    };
    return e.autoplaying === null && e.autoplay && (G.autoplaying = "playing"), G;
  }, x.slideHandler = function(e) {
    var n = e.waitForAnimate, h = e.animating, _ = e.fade, S = e.infinite, T = e.index, C = e.slideCount, j = e.lazyLoad, q = e.currentSlide, F = e.centerMode, B = e.slidesToScroll, Z = e.slidesToShow, J = e.useCSS, G = e.lazyLoadedList;
    if (n && h) return {};
    var H = T, X, re, A, te = {}, ne = {}, ie = S ? T : R(T, 0, C - 1);
    if (_) {
      if (!S && (T < 0 || T >= C)) return {};
      T < 0 ? H = T + C : T >= C && (H = T - C), j && G.indexOf(H) < 0 && (G = G.concat(H)), te = {
        animating: !0,
        currentSlide: H,
        lazyLoadedList: G,
        targetSlide: H
      }, ne = {
        animating: !1,
        targetSlide: H
      };
    } else
      X = H, H < 0 ? (X = H + C, S ? C % B !== 0 && (X = C - C % B) : X = 0) : !V(e) && H > q ? H = X = q : F && H >= C ? (H = S ? C : C - 1, X = S ? 0 : C - 1) : H >= C && (X = H - C, S ? C % B !== 0 && (X = 0) : X = C - Z), !S && H + Z >= C && (X = C - Z), re = r(g(g({}, e), {}, {
        slideIndex: H
      })), A = r(g(g({}, e), {}, {
        slideIndex: X
      })), S || (re === A && (H = X), re = A), j && (G = G.concat(Y(g(g({}, e), {}, {
        currentSlide: H
      })))), J ? (te = {
        animating: !0,
        currentSlide: X,
        trackStyle: s(g(g({}, e), {}, {
          left: re
        })),
        lazyLoadedList: G,
        targetSlide: ie
      }, ne = {
        animating: !1,
        currentSlide: X,
        trackStyle: w(g(g({}, e), {}, {
          left: A
        })),
        swipeLeft: null,
        targetSlide: ie
      }) : te = {
        currentSlide: X,
        trackStyle: w(g(g({}, e), {}, {
          left: A
        })),
        lazyLoadedList: G,
        targetSlide: ie
      };
    return {
      state: te,
      nextState: ne
    };
  }, x.changeSlide = function(e, n) {
    var h, _, S, T, C, j = e.slidesToScroll, q = e.slidesToShow, F = e.slideCount, B = e.currentSlide, Z = e.targetSlide, J = e.lazyLoad, G = e.infinite;
    if (T = F % j !== 0, h = T ? 0 : (F - B) % j, n.message === "previous")
      S = h === 0 ? j : q - h, C = B - S, J && !G && (_ = B - S, C = _ === -1 ? F - 1 : _), G || (C = Z - j);
    else if (n.message === "next")
      S = h === 0 ? j : h, C = B + S, J && !G && (C = (B + j) % F + h), G || (C = Z + j);
    else if (n.message === "dots")
      C = n.index * n.slidesToScroll;
    else if (n.message === "children") {
      if (C = n.index, G) {
        var H = d(g(g({}, e), {}, {
          targetSlide: C
        }));
        C > n.currentSlide && H === "left" ? C = C - F : C < n.currentSlide && H === "right" && (C = C + F);
      }
    } else n.message === "index" && (C = Number(n.index));
    return C;
  }, x.keyHandler = function(e, n, h) {
    return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n ? "" : e.keyCode === 37 ? h ? "next" : "previous" : e.keyCode === 39 ? h ? "previous" : "next" : "";
  }, x.swipeStart = function(e, n, h) {
    return e.target.tagName === "IMG" && z(e), !n || !h && e.type.indexOf("mouse") !== -1 ? "" : {
      dragging: !0,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY
      }
    };
  }, x.swipeMove = function(e, n) {
    var h = n.scrolling, _ = n.animating, S = n.vertical, T = n.swipeToSlide, C = n.verticalSwiping, j = n.rtl, q = n.currentSlide, F = n.edgeFriction, B = n.edgeDragged, Z = n.onEdge, J = n.swiped, G = n.swiping, H = n.slideCount, X = n.slidesToScroll, re = n.infinite, A = n.touchObject, te = n.swipeEvent, ne = n.listHeight, ie = n.listWidth;
    if (!h) {
      if (_) return z(e);
      S && T && C && z(e);
      var oe, le = {}, me = r(n);
      A.curX = e.touches ? e.touches[0].pageX : e.clientX, A.curY = e.touches ? e.touches[0].pageY : e.clientY, A.swipeLength = Math.round(Math.sqrt(Math.pow(A.curX - A.startX, 2)));
      var Ie = Math.round(Math.sqrt(Math.pow(A.curY - A.startY, 2)));
      if (!C && !G && Ie > 10)
        return {
          scrolling: !0
        };
      C && (A.swipeLength = Ie);
      var de = (j ? -1 : 1) * (A.curX > A.startX ? 1 : -1);
      C && (de = A.curY > A.startY ? 1 : -1);
      var ut = Math.ceil(H / X), ae = Q(n.touchObject, C), pe = A.swipeLength;
      return re || (q === 0 && (ae === "right" || ae === "down") || q + 1 >= ut && (ae === "left" || ae === "up") || !V(n) && (ae === "left" || ae === "up")) && (pe = A.swipeLength * F, B === !1 && Z && (Z(ae), le.edgeDragged = !0)), !J && te && (te(ae), le.swiped = !0), S ? oe = me + pe * (ne / ie) * de : j ? oe = me - pe * de : oe = me + pe * de, C && (oe = me + pe * de), le = g(g({}, le), {}, {
        touchObject: A,
        swipeLeft: oe,
        trackStyle: w(g(g({}, n), {}, {
          left: oe
        }))
      }), Math.abs(A.curX - A.startX) < Math.abs(A.curY - A.startY) * 0.8 || A.swipeLength > 10 && (le.swiping = !0, z(e)), le;
    }
  }, x.swipeEnd = function(e, n) {
    var h = n.dragging, _ = n.swipe, S = n.touchObject, T = n.listWidth, C = n.touchThreshold, j = n.verticalSwiping, q = n.listHeight, F = n.swipeToSlide, B = n.scrolling, Z = n.onSwipe, J = n.targetSlide, G = n.currentSlide, H = n.infinite;
    if (!h)
      return _ && z(e), {};
    var X = j ? q / C : T / C, re = Q(S, j), A = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {}
    };
    if (B || !S.swipeLength)
      return A;
    if (S.swipeLength > X) {
      z(e), Z && Z(re);
      var te, ne, ie = H ? G : J;
      switch (re) {
        case "left":
        case "up":
          ne = ie + l(n), te = F ? a(n, ne) : ne, A.currentDirection = 0;
          break;
        case "right":
        case "down":
          ne = ie - l(n), te = F ? a(n, ne) : ne, A.currentDirection = 1;
          break;
        default:
          te = ie;
      }
      A.triggerSlideHandler = te;
    } else {
      var oe = r(n);
      A.trackStyle = s(g(g({}, n), {}, {
        left: oe
      }));
    }
    return A;
  };
  var $ = x.getNavigableIndexes = function(e) {
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, h = e.infinite ? e.slidesToShow * -1 : 0, _ = e.infinite ? e.slidesToShow * -1 : 0, S = []; h < n; )
      S.push(h), h = _ + e.slidesToScroll, _ += Math.min(e.slidesToScroll, e.slidesToShow);
    return S;
  }, a = x.checkNavigable = function(e, n) {
    var h = $(e), _ = 0;
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
  }, l = x.getSlideCount = function(e) {
    var n = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      var h, _ = e.listRef, S = _.querySelectorAll && _.querySelectorAll(".slick-slide") || [];
      if (Array.from(S).every(function(j) {
        if (e.vertical) {
          if (j.offsetTop + I(j) / 2 > e.swipeLeft * -1)
            return h = j, !1;
        } else if (j.offsetLeft - n + K(j) / 2 > e.swipeLeft * -1)
          return h = j, !1;
        return !0;
      }), !h)
        return 0;
      var T = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide, C = Math.abs(h.dataset.index - T) || 1;
      return C;
    } else
      return e.slidesToScroll;
  }, u = x.checkSpecKeys = function(e, n) {
    return n.reduce(function(h, _) {
      return h && e.hasOwnProperty(_);
    }, !0) ? null : console.error("Keys Missing:", e);
  }, w = x.getTrackCSS = function(e) {
    u(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
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
    }), n && (S.width = n), h && (S.height = h), window && !window.addEventListener && window.attachEvent && (e.vertical ? S.marginTop = e.left + "px" : S.marginLeft = e.left + "px"), S;
  }, s = x.getTrackAnimateCSS = function(e) {
    u(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var n = w(e);
    return e.useTransform ? (n.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, n.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? n.transition = "top " + e.speed + "ms " + e.cssEase : n.transition = "left " + e.speed + "ms " + e.cssEase, n;
  }, r = x.getTrackLeft = function(e) {
    if (e.unslick)
      return 0;
    u(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var n = e.slideIndex, h = e.trackRef, _ = e.infinite, S = e.centerMode, T = e.slideCount, C = e.slidesToShow, j = e.slidesToScroll, q = e.slideWidth, F = e.listWidth, B = e.variableWidth, Z = e.slideHeight, J = e.fade, G = e.vertical, H = 0, X, re, A = 0;
    if (J || e.slideCount === 1)
      return 0;
    var te = 0;
    if (_ ? (te = -y(e), T % j !== 0 && n + j > T && (te = -(n > T ? C - (n - T) : T % j)), S && (te += parseInt(C / 2))) : (T % j !== 0 && n + j > T && (te = C - T % j), S && (te = parseInt(C / 2))), H = te * q, A = te * Z, G ? X = n * Z * -1 + A : X = n * q * -1 + H, B === !0) {
      var ne, ie = h && h.node;
      if (ne = n + y(e), re = ie && ie.childNodes[ne], X = re ? re.offsetLeft * -1 : 0, S === !0) {
        ne = _ ? n + y(e) : n, re = ie && ie.children[ne], X = 0;
        for (var oe = 0; oe < ne; oe++)
          X -= ie && ie.children[oe] && ie.children[oe].offsetWidth;
        X -= parseInt(e.centerPadding), X += re && (F - re.offsetWidth) / 2;
      }
    }
    return X;
  }, y = x.getPreClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, m = x.getPostClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, f = x.getTotalSlides = function(e) {
    return e.slideCount === 1 ? 1 : y(e) + e.slideCount + m(e);
  }, d = x.siblingDirection = function(e) {
    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + O(e) ? "left" : "right" : e.targetSlide < e.currentSlide - k(e) ? "right" : "left";
  }, O = x.slidesOnRight = function(e) {
    var n = e.slidesToShow, h = e.centerMode, _ = e.rtl, S = e.centerPadding;
    if (h) {
      var T = (n - 1) / 2 + 1;
      return parseInt(S) > 0 && (T += 1), _ && n % 2 === 0 && (T += 1), T;
    }
    return _ ? 0 : n - 1;
  }, k = x.slidesOnLeft = function(e) {
    var n = e.slidesToShow, h = e.centerMode, _ = e.rtl, S = e.centerPadding;
    if (h) {
      var T = (n - 1) / 2 + 1;
      return parseInt(S) > 0 && (T += 1), !_ && n % 2 === 0 && (T += 1), T;
    }
    return _ ? n - 1 : 0;
  };
  x.canUseDOM = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  };
  var t = x.validSettings = Object.keys(c.default);
  function U(o) {
    return t.reduce(function(e, n) {
      return o.hasOwnProperty(n) && (e[n] = o[n]), e;
    }, {});
  }
  return x;
}
var ye = {}, Ge;
function mt() {
  if (Ge) return ye;
  Ge = 1, Object.defineProperty(ye, "__esModule", {
    value: !0
  }), ye.Track = void 0;
  var i = b(ue), c = b(ke()), p = be();
  function b(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function v(s) {
    "@babel/helpers - typeof";
    return v = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, v(s);
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
  function L(s, r) {
    if (!(s instanceof r)) throw new TypeError("Cannot call a class as a function");
  }
  function M(s, r) {
    for (var y = 0; y < r.length; y++) {
      var m = r[y];
      m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(s, V(m.key), m);
    }
  }
  function D(s, r, y) {
    return r && M(s.prototype, r), Object.defineProperty(s, "prototype", { writable: !1 }), s;
  }
  function R(s, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
    s.prototype = Object.create(r && r.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, "prototype", { writable: !1 }), r && z(s, r);
  }
  function z(s, r) {
    return z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(y, m) {
      return y.__proto__ = m, y;
    }, z(s, r);
  }
  function Y(s) {
    var r = W();
    return function() {
      var y, m = P(s);
      if (r) {
        var f = P(this).constructor;
        y = Reflect.construct(m, arguments, f);
      } else y = m.apply(this, arguments);
      return ee(this, y);
    };
  }
  function ee(s, r) {
    if (r && (v(r) == "object" || typeof r == "function")) return r;
    if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return N(s);
  }
  function N(s) {
    if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s;
  }
  function W() {
    try {
      var s = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (W = function() {
      return !!s;
    })();
  }
  function P(s) {
    return P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, P(s);
  }
  function K(s, r) {
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
      r % 2 ? K(Object(y), !0).forEach(function(m) {
        Q(s, m, y[m]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(y)) : K(Object(y)).forEach(function(m) {
        Object.defineProperty(s, m, Object.getOwnPropertyDescriptor(y, m));
      });
    }
    return s;
  }
  function Q(s, r, y) {
    return (r = V(r)) in s ? Object.defineProperty(s, r, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : s[r] = y, s;
  }
  function V(s) {
    var r = $(s, "string");
    return v(r) == "symbol" ? r : r + "";
  }
  function $(s, r) {
    if (v(s) != "object" || !s) return s;
    var y = s[Symbol.toPrimitive];
    if (y !== void 0) {
      var m = y.call(s, r);
      if (v(m) != "object") return m;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(s);
  }
  var a = function(r) {
    var y, m, f, d, O;
    r.rtl ? O = r.slideCount - 1 - r.index : O = r.index, f = O < 0 || O >= r.slideCount, r.centerMode ? (d = Math.floor(r.slidesToShow / 2), m = (O - r.currentSlide) % r.slideCount === 0, O > r.currentSlide - d - 1 && O <= r.currentSlide + d && (y = !0)) : y = r.currentSlide <= O && O < r.currentSlide + r.slidesToShow;
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
  }, u = function(r, y) {
    return r.key || y;
  }, w = function(r) {
    var y, m = [], f = [], d = [], O = i.default.Children.count(r.children), k = (0, p.lazyStartIndex)(r), t = (0, p.lazyEndIndex)(r);
    return i.default.Children.forEach(r.children, function(U, o) {
      var e, n = {
        message: "children",
        index: o,
        slidesToScroll: r.slidesToScroll,
        currentSlide: r.currentSlide
      };
      !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(o) >= 0 ? e = U : e = /* @__PURE__ */ i.default.createElement("div", null);
      var h = l(I(I({}, r), {}, {
        index: o
      })), _ = e.props.className || "", S = a(I(I({}, r), {}, {
        index: o
      }));
      if (m.push(/* @__PURE__ */ i.default.cloneElement(e, {
        key: "original" + u(e, o),
        "data-index": o,
        className: (0, c.default)(S, _),
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
        T <= (0, p.getPreClones)(r) && (y = -T, y >= k && (e = U), S = a(I(I({}, r), {}, {
          index: y
        })), f.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "precloned" + u(e, y),
          "data-index": y,
          tabIndex: "-1",
          className: (0, c.default)(S, _),
          "aria-hidden": !S["slick-active"],
          style: I(I({}, e.props.style || {}), h),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        }))), o < (0, p.getPostClones)(r) && (y = O + o, y < t && (e = U), S = a(I(I({}, r), {}, {
          index: y
        })), d.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "postcloned" + u(e, y),
          "data-index": y,
          tabIndex: "-1",
          className: (0, c.default)(S, _),
          "aria-hidden": !S["slick-active"],
          style: I(I({}, e.props.style || {}), h),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        })));
      }
    }), r.rtl ? f.concat(m, d).reverse() : f.concat(m, d);
  };
  return ye.Track = /* @__PURE__ */ (function(s) {
    R(y, s);
    var r = Y(y);
    function y() {
      var m;
      L(this, y);
      for (var f = arguments.length, d = new Array(f), O = 0; O < f; O++)
        d[O] = arguments[O];
      return m = r.call.apply(r, [this].concat(d)), Q(N(m), "node", null), Q(N(m), "handleRef", function(k) {
        m.node = k;
      }), m;
    }
    return D(y, [{
      key: "render",
      value: function() {
        var f = w(this.props), d = this.props, O = d.onMouseEnter, k = d.onMouseOver, t = d.onMouseLeave, U = {
          onMouseEnter: O,
          onMouseOver: k,
          onMouseLeave: t
        };
        return /* @__PURE__ */ i.default.createElement("div", g({
          ref: this.handleRef,
          className: "slick-track",
          style: this.props.trackStyle
        }, U), f);
      }
    }]), y;
  })(i.default.PureComponent), ye;
}
var ge = {}, Ue;
function St() {
  if (Ue) return ge;
  Ue = 1;
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
  var c = v(ue), p = v(ke()), b = be();
  function v(a) {
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
  function L(a) {
    for (var l = 1; l < arguments.length; l++) {
      var u = arguments[l] != null ? arguments[l] : {};
      l % 2 ? g(Object(u), !0).forEach(function(w) {
        M(a, w, u[w]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u)) : g(Object(u)).forEach(function(w) {
        Object.defineProperty(a, w, Object.getOwnPropertyDescriptor(u, w));
      });
    }
    return a;
  }
  function M(a, l, u) {
    return (l = Y(l)) in a ? Object.defineProperty(a, l, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : a[l] = u, a;
  }
  function D(a, l) {
    if (!(a instanceof l)) throw new TypeError("Cannot call a class as a function");
  }
  function R(a, l) {
    for (var u = 0; u < l.length; u++) {
      var w = l[u];
      w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(a, Y(w.key), w);
    }
  }
  function z(a, l, u) {
    return l && R(a.prototype, l), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function Y(a) {
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
  function N(a, l) {
    if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(l && l.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), l && W(a, l);
  }
  function W(a, l) {
    return W = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, w) {
      return u.__proto__ = w, u;
    }, W(a, l);
  }
  function P(a) {
    var l = Q();
    return function() {
      var u, w = V(a);
      if (l) {
        var s = V(this).constructor;
        u = Reflect.construct(w, arguments, s);
      } else u = w.apply(this, arguments);
      return K(this, u);
    };
  }
  function K(a, l) {
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
  function V(a) {
    return V = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(l) {
      return l.__proto__ || Object.getPrototypeOf(l);
    }, V(a);
  }
  var $ = function(l) {
    var u;
    return l.infinite ? u = Math.ceil(l.slideCount / l.slidesToScroll) : u = Math.ceil((l.slideCount - l.slidesToShow) / l.slidesToScroll) + 1, u;
  };
  return ge.Dots = /* @__PURE__ */ (function(a) {
    N(u, a);
    var l = P(u);
    function u() {
      return D(this, u), l.apply(this, arguments);
    }
    return z(u, [{
      key: "clickHandler",
      value: function(s, r) {
        r.preventDefault(), this.props.clickHandler(s);
      }
    }, {
      key: "render",
      value: function() {
        for (var s = this.props, r = s.onMouseEnter, y = s.onMouseOver, m = s.onMouseLeave, f = s.infinite, d = s.slidesToScroll, O = s.slidesToShow, k = s.slideCount, t = s.currentSlide, U = $({
          slideCount: k,
          slidesToScroll: d,
          slidesToShow: O,
          infinite: f
        }), o = {
          onMouseEnter: r,
          onMouseOver: y,
          onMouseLeave: m
        }, e = [], n = 0; n < U; n++) {
          var h = (n + 1) * d - 1, _ = f ? h : (0, b.clamp)(h, 0, k - 1), S = _ - (d - 1), T = f ? S : (0, b.clamp)(S, 0, k - 1), C = (0, p.default)({
            "slick-active": f ? t >= T && t <= _ : t === T
          }), j = {
            message: "dots",
            index: n,
            slidesToScroll: d,
            currentSlide: t
          }, q = this.clickHandler.bind(this, j);
          e = e.concat(/* @__PURE__ */ c.default.createElement("li", {
            key: n,
            className: C
          }, /* @__PURE__ */ c.default.cloneElement(this.props.customPaging(n), {
            onClick: q
          })));
        }
        return /* @__PURE__ */ c.default.cloneElement(this.props.appendDots(e), L({
          className: this.props.dotsClass
        }, o));
      }
    }]), u;
  })(c.default.PureComponent), ge;
}
var se = {}, Ye;
function wt() {
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
  var c = v(ue), p = v(ke()), b = be();
  function v(a) {
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
  function L(a, l) {
    var u = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var w = Object.getOwnPropertySymbols(a);
      l && (w = w.filter(function(s) {
        return Object.getOwnPropertyDescriptor(a, s).enumerable;
      })), u.push.apply(u, w);
    }
    return u;
  }
  function M(a) {
    for (var l = 1; l < arguments.length; l++) {
      var u = arguments[l] != null ? arguments[l] : {};
      l % 2 ? L(Object(u), !0).forEach(function(w) {
        D(a, w, u[w]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u)) : L(Object(u)).forEach(function(w) {
        Object.defineProperty(a, w, Object.getOwnPropertyDescriptor(u, w));
      });
    }
    return a;
  }
  function D(a, l, u) {
    return (l = ee(l)) in a ? Object.defineProperty(a, l, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : a[l] = u, a;
  }
  function R(a, l) {
    if (!(a instanceof l)) throw new TypeError("Cannot call a class as a function");
  }
  function z(a, l) {
    for (var u = 0; u < l.length; u++) {
      var w = l[u];
      w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(a, ee(w.key), w);
    }
  }
  function Y(a, l, u) {
    return l && z(a.prototype, l), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function ee(a) {
    var l = N(a, "string");
    return i(l) == "symbol" ? l : l + "";
  }
  function N(a, l) {
    if (i(a) != "object" || !a) return a;
    var u = a[Symbol.toPrimitive];
    if (u !== void 0) {
      var w = u.call(a, l);
      if (i(w) != "object") return w;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  function W(a, l) {
    if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(l && l.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), l && P(a, l);
  }
  function P(a, l) {
    return P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, w) {
      return u.__proto__ = w, u;
    }, P(a, l);
  }
  function K(a) {
    var l = V();
    return function() {
      var u, w = $(a);
      if (l) {
        var s = $(this).constructor;
        u = Reflect.construct(w, arguments, s);
      } else u = w.apply(this, arguments);
      return I(this, u);
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
  function V() {
    try {
      var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (V = function() {
      return !!a;
    })();
  }
  function $(a) {
    return $ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(l) {
      return l.__proto__ || Object.getPrototypeOf(l);
    }, $(a);
  }
  return se.PrevArrow = /* @__PURE__ */ (function(a) {
    W(u, a);
    var l = K(u);
    function u() {
      return R(this, u), l.apply(this, arguments);
    }
    return Y(u, [{
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
        return this.props.prevArrow ? f = /* @__PURE__ */ c.default.cloneElement(this.props.prevArrow, M(M({}, y), m)) : f = /* @__PURE__ */ c.default.createElement("button", g({
          key: "0",
          type: "button"
        }, y), " ", "Previous"), f;
      }
    }]), u;
  })(c.default.PureComponent), se.NextArrow = /* @__PURE__ */ (function(a) {
    W(u, a);
    var l = K(u);
    function u() {
      return R(this, u), l.apply(this, arguments);
    }
    return Y(u, [{
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
        return this.props.nextArrow ? f = /* @__PURE__ */ c.default.cloneElement(this.props.nextArrow, M(M({}, y), m)) : f = /* @__PURE__ */ c.default.createElement("button", g({
          key: "1",
          type: "button"
        }, y), " ", "Next"), f;
      }
    }]), u;
  })(c.default.PureComponent), se;
}
var nt = (function() {
  if (typeof Map < "u")
    return Map;
  function i(c, p) {
    var b = -1;
    return c.some(function(v, g) {
      return v[0] === p ? (b = g, !0) : !1;
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
        var b = i(this.__entries__, p), v = this.__entries__[b];
        return v && v[1];
      }, c.prototype.set = function(p, b) {
        var v = i(this.__entries__, p);
        ~v ? this.__entries__[v][1] = b : this.__entries__.push([p, b]);
      }, c.prototype.delete = function(p) {
        var b = this.__entries__, v = i(b, p);
        ~v && b.splice(v, 1);
      }, c.prototype.has = function(p) {
        return !!~i(this.__entries__, p);
      }, c.prototype.clear = function() {
        this.__entries__.splice(0);
      }, c.prototype.forEach = function(p, b) {
        b === void 0 && (b = null);
        for (var v = 0, g = this.__entries__; v < g.length; v++) {
          var L = g[v];
          p.call(b, L[1], L[0]);
        }
      }, c;
    })()
  );
})(), Ne = typeof window < "u" && typeof document < "u" && window.document === document, Oe = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), Ot = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Oe) : function(i) {
    return setTimeout(function() {
      return i(Date.now());
    }, 1e3 / 60);
  };
})(), _t = 2;
function kt(i, c) {
  var p = !1, b = !1, v = 0;
  function g() {
    p && (p = !1, i()), b && M();
  }
  function L() {
    Ot(g);
  }
  function M() {
    var D = Date.now();
    if (p) {
      if (D - v < _t)
        return;
      b = !0;
    } else
      p = !0, b = !1, setTimeout(L, c);
    v = D;
  }
  return M;
}
var Pt = 20, Ct = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Tt = typeof MutationObserver < "u", jt = (
  /** @class */
  (function() {
    function i() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = kt(this.refresh.bind(this), Pt);
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
      !Ne || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Tt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, i.prototype.disconnect_ = function() {
      !Ne || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, i.prototype.onTransitionEnd_ = function(c) {
      var p = c.propertyName, b = p === void 0 ? "" : p, v = Ct.some(function(g) {
        return !!~b.indexOf(g);
      });
      v && this.refresh();
    }, i.getInstance = function() {
      return this.instance_ || (this.instance_ = new i()), this.instance_;
    }, i.instance_ = null, i;
  })()
), it = (function(i, c) {
  for (var p = 0, b = Object.keys(c); p < b.length; p++) {
    var v = b[p];
    Object.defineProperty(i, v, {
      value: c[v],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return i;
}), fe = (function(i) {
  var c = i && i.ownerDocument && i.ownerDocument.defaultView;
  return c || Oe;
}), ot = Pe(0, 0, 0, 0);
function _e(i) {
  return parseFloat(i) || 0;
}
function Xe(i) {
  for (var c = [], p = 1; p < arguments.length; p++)
    c[p - 1] = arguments[p];
  return c.reduce(function(b, v) {
    var g = i["border-" + v + "-width"];
    return b + _e(g);
  }, 0);
}
function xt(i) {
  for (var c = ["top", "right", "bottom", "left"], p = {}, b = 0, v = c; b < v.length; b++) {
    var g = v[b], L = i["padding-" + g];
    p[g] = _e(L);
  }
  return p;
}
function Et(i) {
  var c = i.getBBox();
  return Pe(0, 0, c.width, c.height);
}
function Lt(i) {
  var c = i.clientWidth, p = i.clientHeight;
  if (!c && !p)
    return ot;
  var b = fe(i).getComputedStyle(i), v = xt(b), g = v.left + v.right, L = v.top + v.bottom, M = _e(b.width), D = _e(b.height);
  if (b.boxSizing === "border-box" && (Math.round(M + g) !== c && (M -= Xe(b, "left", "right") + g), Math.round(D + L) !== p && (D -= Xe(b, "top", "bottom") + L)), !Rt(i)) {
    var R = Math.round(M + g) - c, z = Math.round(D + L) - p;
    Math.abs(R) !== 1 && (M -= R), Math.abs(z) !== 1 && (D -= z);
  }
  return Pe(v.left, v.top, M, D);
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
function Nt(i) {
  return Ne ? Mt(i) ? Et(i) : Lt(i) : ot;
}
function zt(i) {
  var c = i.x, p = i.y, b = i.width, v = i.height, g = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, L = Object.create(g.prototype);
  return it(L, {
    x: c,
    y: p,
    width: b,
    height: v,
    top: p,
    right: c + b,
    bottom: v + p,
    left: c
  }), L;
}
function Pe(i, c, p, b) {
  return { x: i, y: c, width: p, height: b };
}
var Dt = (
  /** @class */
  (function() {
    function i(c) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Pe(0, 0, 0, 0), this.target = c;
    }
    return i.prototype.isActive = function() {
      var c = Nt(this.target);
      return this.contentRect_ = c, c.width !== this.broadcastWidth || c.height !== this.broadcastHeight;
    }, i.prototype.broadcastRect = function() {
      var c = this.contentRect_;
      return this.broadcastWidth = c.width, this.broadcastHeight = c.height, c;
    }, i;
  })()
), It = (
  /** @class */
  /* @__PURE__ */ (function() {
    function i(c, p) {
      var b = zt(p);
      it(this, { target: c, contentRect: b });
    }
    return i;
  })()
), At = (
  /** @class */
  (function() {
    function i(c, p, b) {
      if (this.activeObservations_ = [], this.observations_ = new nt(), typeof c != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = c, this.controller_ = p, this.callbackCtx_ = b;
    }
    return i.prototype.observe = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof fe(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var p = this.observations_;
        p.has(c) || (p.set(c, new Dt(c)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, i.prototype.unobserve = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof fe(c).Element))
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
          return new It(b.target, b.broadcastRect());
        });
        this.callback_.call(c, p, c), this.clearActive();
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
    function i(c) {
      if (!(this instanceof i))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var p = jt.getInstance(), b = new At(c, p, this);
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
    var c;
    return (c = at.get(this))[i].apply(c, arguments);
  };
});
var Ht = (function() {
  return typeof Oe.ResizeObserver < "u" ? Oe.ResizeObserver : lt;
})();
const Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ht
}, Symbol.toStringTag, { value: "Module" })), qt = /* @__PURE__ */ yt(Wt);
var Ke;
function Ft() {
  if (Ke) return he;
  Ke = 1, Object.defineProperty(he, "__esModule", {
    value: !0
  }), he.InnerSlider = void 0;
  var i = R(ue), c = R(gt()), p = R(bt()), b = R(ke()), v = be(), g = mt(), L = St(), M = wt(), D = R(qt);
  function R(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function z(f) {
    "@babel/helpers - typeof";
    return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
      return typeof d;
    } : function(d) {
      return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
    }, z(f);
  }
  function Y() {
    return Y = Object.assign ? Object.assign.bind() : function(f) {
      for (var d = 1; d < arguments.length; d++) {
        var O = arguments[d];
        for (var k in O)
          ({}).hasOwnProperty.call(O, k) && (f[k] = O[k]);
      }
      return f;
    }, Y.apply(null, arguments);
  }
  function ee(f, d) {
    if (f == null) return {};
    var O, k, t = N(f, d);
    if (Object.getOwnPropertySymbols) {
      var U = Object.getOwnPropertySymbols(f);
      for (k = 0; k < U.length; k++)
        O = U[k], d.includes(O) || {}.propertyIsEnumerable.call(f, O) && (t[O] = f[O]);
    }
    return t;
  }
  function N(f, d) {
    if (f == null) return {};
    var O = {};
    for (var k in f)
      if ({}.hasOwnProperty.call(f, k)) {
        if (d.includes(k)) continue;
        O[k] = f[k];
      }
    return O;
  }
  function W(f, d) {
    var O = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(f);
      d && (k = k.filter(function(t) {
        return Object.getOwnPropertyDescriptor(f, t).enumerable;
      })), O.push.apply(O, k);
    }
    return O;
  }
  function P(f) {
    for (var d = 1; d < arguments.length; d++) {
      var O = arguments[d] != null ? arguments[d] : {};
      d % 2 ? W(Object(O), !0).forEach(function(k) {
        r(f, k, O[k]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(O)) : W(Object(O)).forEach(function(k) {
        Object.defineProperty(f, k, Object.getOwnPropertyDescriptor(O, k));
      });
    }
    return f;
  }
  function K(f, d) {
    if (!(f instanceof d)) throw new TypeError("Cannot call a class as a function");
  }
  function I(f, d) {
    for (var O = 0; O < d.length; O++) {
      var k = d[O];
      k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(f, y(k.key), k);
    }
  }
  function Q(f, d, O) {
    return d && I(f.prototype, d), Object.defineProperty(f, "prototype", { writable: !1 }), f;
  }
  function V(f, d) {
    if (typeof d != "function" && d !== null) throw new TypeError("Super expression must either be null or a function");
    f.prototype = Object.create(d && d.prototype, { constructor: { value: f, writable: !0, configurable: !0 } }), Object.defineProperty(f, "prototype", { writable: !1 }), d && $(f, d);
  }
  function $(f, d) {
    return $ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(O, k) {
      return O.__proto__ = k, O;
    }, $(f, d);
  }
  function a(f) {
    var d = w();
    return function() {
      var O, k = s(f);
      if (d) {
        var t = s(this).constructor;
        O = Reflect.construct(k, arguments, t);
      } else O = k.apply(this, arguments);
      return l(this, O);
    };
  }
  function l(f, d) {
    if (d && (z(d) == "object" || typeof d == "function")) return d;
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
    return z(d) == "symbol" ? d : d + "";
  }
  function m(f, d) {
    if (z(f) != "object" || !f) return f;
    var O = f[Symbol.toPrimitive];
    if (O !== void 0) {
      var k = O.call(f, d);
      if (z(k) != "object") return k;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (d === "string" ? String : Number)(f);
  }
  return he.InnerSlider = /* @__PURE__ */ (function(f) {
    V(O, f);
    var d = a(O);
    function O(k) {
      var t;
      K(this, O), t = d.call(this, k), r(u(t), "listRefHandler", function(o) {
        return t.list = o;
      }), r(u(t), "trackRefHandler", function(o) {
        return t.track = o;
      }), r(u(t), "adaptHeight", function() {
        if (t.props.adaptiveHeight && t.list) {
          var o = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
          t.list.style.height = (0, v.getHeight)(o) + "px";
        }
      }), r(u(t), "componentDidMount", function() {
        if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
          var o = (0, v.getOnDemandLazySlides)(P(P({}, t.props), t.state));
          o.length > 0 && (t.setState(function(n) {
            return {
              lazyLoadedList: n.lazyLoadedList.concat(o)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(o));
        }
        var e = P({
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
      }), r(u(t), "componentWillUnmount", function() {
        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach(function(o) {
          return clearTimeout(o);
        }), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
      }), r(u(t), "componentDidUpdate", function(o) {
        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
          var e = (0, v.getOnDemandLazySlides)(P(P({}, t.props), t.state));
          e.length > 0 && (t.setState(function(_) {
            return {
              lazyLoadedList: _.lazyLoadedList.concat(e)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(e));
        }
        t.adaptHeight();
        var n = P(P({
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
      }), r(u(t), "onWindowResized", function(o) {
        t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, p.default)(function() {
          return t.resizeWindow(o);
        }, 50), t.debouncedResize();
      }), r(u(t), "resizeWindow", function() {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = !!(t.track && t.track.node);
        if (e) {
          var n = P(P({
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
        var h = (0, v.initializedState)(o);
        o = P(P(P({}, o), h), {}, {
          slideIndex: h.currentSlide
        });
        var _ = (0, v.getTrackLeft)(o);
        o = P(P({}, o), {}, {
          left: _
        });
        var S = (0, v.getTrackCSS)(o);
        (e || i.default.Children.count(t.props.children) !== i.default.Children.count(o.children)) && (h.trackStyle = S), t.setState(h, n);
      }), r(u(t), "ssrInit", function() {
        if (t.props.variableWidth) {
          var o = 0, e = 0, n = [], h = (0, v.getPreClones)(P(P(P({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          })), _ = (0, v.getPostClones)(P(P(P({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          }));
          t.props.children.forEach(function(re) {
            n.push(re.props.style.width), o += re.props.style.width;
          });
          for (var S = 0; S < h; S++)
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
            var q = "".concat(n[t.state.currentSlide], "px");
            j.left = "calc(".concat(j.left, " + (100% - ").concat(q, ") / 2 ) ");
          }
          return {
            trackStyle: j
          };
        }
        var F = i.default.Children.count(t.props.children), B = P(P(P({}, t.props), t.state), {}, {
          slideCount: F
        }), Z = (0, v.getPreClones)(B) + (0, v.getPostClones)(B) + F, J = 100 / t.props.slidesToShow * Z, G = 100 / Z, H = -G * ((0, v.getPreClones)(B) + t.state.currentSlide) * J / 100;
        t.props.centerMode && (H += (100 - G * J / 100) / 2);
        var X = {
          width: J + "%",
          left: H + "%"
        };
        return {
          slideWidth: G + "%",
          trackStyle: X
        };
      }), r(u(t), "checkImagesLoad", function() {
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
      }), r(u(t), "progressiveLazyLoad", function() {
        for (var o = [], e = P(P({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, v.getPostClones)(e); n++)
          if (t.state.lazyLoadedList.indexOf(n) < 0) {
            o.push(n);
            break;
          }
        for (var h = t.state.currentSlide - 1; h >= -(0, v.getPreClones)(e); h--)
          if (t.state.lazyLoadedList.indexOf(h) < 0) {
            o.push(h);
            break;
          }
        o.length > 0 ? (t.setState(function(_) {
          return {
            lazyLoadedList: _.lazyLoadedList.concat(o)
          };
        }), t.props.onLazyLoad && t.props.onLazyLoad(o)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
      }), r(u(t), "slideHandler", function(o) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = t.props, h = n.asNavFor, _ = n.beforeChange, S = n.onLazyLoad, T = n.speed, C = n.afterChange, j = t.state.currentSlide, q = (0, v.slideHandler)(P(P(P({
          index: o
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e
        })), F = q.state, B = q.nextState;
        if (F) {
          _ && _(j, F.currentSlide);
          var Z = F.lazyLoadedList.filter(function(J) {
            return t.state.lazyLoadedList.indexOf(J) < 0;
          });
          S && Z.length > 0 && S(Z), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), C && C(j), delete t.animationEndCallback), t.setState(F, function() {
            h && t.asNavForIndex !== o && (t.asNavForIndex = o, h.innerSlider.slideHandler(o)), B && (t.animationEndCallback = setTimeout(function() {
              var J = B.animating, G = ee(B, ["animating"]);
              t.setState(G, function() {
                t.callbackTimers.push(setTimeout(function() {
                  return t.setState({
                    animating: J
                  });
                }, 10)), C && C(F.currentSlide), delete t.animationEndCallback;
              });
            }, T));
          });
        }
      }), r(u(t), "changeSlide", function(o) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = P(P({}, t.props), t.state), h = (0, v.changeSlide)(n, o);
        if (!(h !== 0 && !h) && (e === !0 ? t.slideHandler(h, e) : t.slideHandler(h), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
          var _ = t.list.querySelectorAll(".slick-current");
          _[0] && _[0].focus();
        }
      }), r(u(t), "clickHandler", function(o) {
        t.clickable === !1 && (o.stopPropagation(), o.preventDefault()), t.clickable = !0;
      }), r(u(t), "keyHandler", function(o) {
        var e = (0, v.keyHandler)(o, t.props.accessibility, t.props.rtl);
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
        var e = (0, v.swipeStart)(o, t.props.swipe, t.props.draggable);
        e !== "" && t.setState(e);
      }), r(u(t), "swipeMove", function(o) {
        var e = (0, v.swipeMove)(o, P(P(P({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(u(t), "swipeEnd", function(o) {
        var e = (0, v.swipeEnd)(o, P(P(P({}, t.props), t.state), {}, {
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
        else if ((0, v.canGoNext)(P(P({}, t.props), t.state)))
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
        }), e = P(P({}, t.props), t.state), n = (0, v.extractObject)(e, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), h = t.props.pauseOnHover;
        n = P(P({}, n), {}, {
          onMouseEnter: h ? t.onTrackOver : null,
          onMouseLeave: h ? t.onTrackLeave : null,
          onMouseOver: h ? t.onTrackOver : null,
          focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
        });
        var _;
        if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
          var S = (0, v.extractObject)(e, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), T = t.props.pauseOnDotsHover;
          S = P(P({}, S), {}, {
            clickHandler: t.changeSlide,
            onMouseEnter: T ? t.onDotsLeave : null,
            onMouseOver: T ? t.onDotsOver : null,
            onMouseLeave: T ? t.onDotsLeave : null
          }), _ = /* @__PURE__ */ i.default.createElement(L.Dots, S);
        }
        var C, j, q = (0, v.extractObject)(e, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        q.clickHandler = t.changeSlide, t.props.arrows && (C = /* @__PURE__ */ i.default.createElement(M.PrevArrow, q), j = /* @__PURE__ */ i.default.createElement(M.NextArrow, q));
        var F = null;
        t.props.vertical && (F = {
          height: t.state.listHeight
        });
        var B = null;
        t.props.vertical === !1 ? t.props.centerMode === !0 && (B = {
          padding: "0px " + t.props.centerPadding
        }) : t.props.centerMode === !0 && (B = {
          padding: t.props.centerPadding + " 0px"
        });
        var Z = P(P({}, F), B), J = t.props.touchMove, G = {
          className: "slick-list",
          style: Z,
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
        }, H = {
          className: o,
          dir: "ltr",
          style: t.props.style
        };
        return t.props.unslick && (G = {
          className: "slick-list"
        }, H = {
          className: o,
          style: t.props.style
        }), /* @__PURE__ */ i.default.createElement("div", H, t.props.unslick ? "" : C, /* @__PURE__ */ i.default.createElement("div", Y({
          ref: t.listRefHandler
        }, G), /* @__PURE__ */ i.default.createElement(g.Track, Y({
          ref: t.trackRefHandler
        }, n), t.props.children)), t.props.unslick ? "" : j, t.props.unslick ? "" : _);
      }), t.list = null, t.track = null, t.state = P(P({}, c.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: i.default.Children.count(t.props.children)
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      var U = t.ssrInit();
      return t.state = P(P({}, t.state), U), t;
    }
    return Q(O, [{
      key: "didPropsChange",
      value: function(t) {
        for (var U = !1, o = 0, e = Object.keys(this.props); o < e.length; o++) {
          var n = e[o];
          if (!t.hasOwnProperty(n)) {
            U = !0;
            break;
          }
          if (!(z(t[n]) === "object" || typeof t[n] == "function" || isNaN(t[n])) && t[n] !== this.props[n]) {
            U = !0;
            break;
          }
        }
        return U || i.default.Children.count(this.props.children) !== i.default.Children.count(t.children);
      }
    }]), O;
  })(i.default.Component), he;
}
var Me, Ve;
function $t() {
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
function Bt() {
  if (Je) return Re;
  Je = 1;
  var i = $t(), c = function(v) {
    var g = /[height|width]$/;
    return g.test(v);
  }, p = function(v) {
    var g = "", L = Object.keys(v);
    return L.forEach(function(M, D) {
      var R = v[M];
      M = i(M), c(M) && typeof R == "number" && (R = R + "px"), R === !0 ? g += M : R === !1 ? g += "not " + M : g += "(" + M + ": " + R + ")", D < L.length - 1 && (g += " and ");
    }), g;
  }, b = function(v) {
    var g = "";
    return typeof v == "string" ? v : v instanceof Array ? (v.forEach(function(L, M) {
      g += p(L), M < v.length - 1 && (g += ", ");
    }), g) : p(v);
  };
  return Re = b, Re;
}
var Ze;
function Gt() {
  return Ze || (Ze = 1, (function(i) {
    var c = { NODE_ENV: "production" };
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var p = M(ue), b = Ft(), v = M(Bt()), g = M(rt()), L = be();
    function M(s) {
      return s && s.__esModule ? s : { default: s };
    }
    function D(s) {
      "@babel/helpers - typeof";
      return D = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
        return typeof r;
      } : function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, D(s);
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
    function z(s, r) {
      var y = Object.keys(s);
      if (Object.getOwnPropertySymbols) {
        var m = Object.getOwnPropertySymbols(s);
        r && (m = m.filter(function(f) {
          return Object.getOwnPropertyDescriptor(s, f).enumerable;
        })), y.push.apply(y, m);
      }
      return y;
    }
    function Y(s) {
      for (var r = 1; r < arguments.length; r++) {
        var y = arguments[r] != null ? arguments[r] : {};
        r % 2 ? z(Object(y), !0).forEach(function(m) {
          l(s, m, y[m]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(y)) : z(Object(y)).forEach(function(m) {
          Object.defineProperty(s, m, Object.getOwnPropertyDescriptor(y, m));
        });
      }
      return s;
    }
    function ee(s, r) {
      if (!(s instanceof r)) throw new TypeError("Cannot call a class as a function");
    }
    function N(s, r) {
      for (var y = 0; y < r.length; y++) {
        var m = r[y];
        m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(s, u(m.key), m);
      }
    }
    function W(s, r, y) {
      return r && N(s.prototype, r), Object.defineProperty(s, "prototype", { writable: !1 }), s;
    }
    function P(s, r) {
      if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
      s.prototype = Object.create(r && r.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, "prototype", { writable: !1 }), r && K(s, r);
    }
    function K(s, r) {
      return K = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(y, m) {
        return y.__proto__ = m, y;
      }, K(s, r);
    }
    function I(s) {
      var r = $();
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
      if (r && (D(r) == "object" || typeof r == "function")) return r;
      if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return V(s);
    }
    function V(s) {
      if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return s;
    }
    function $() {
      try {
        var s = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch {
      }
      return ($ = function() {
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
      return D(r) == "symbol" ? r : r + "";
    }
    function w(s, r) {
      if (D(s) != "object" || !s) return s;
      var y = s[Symbol.toPrimitive];
      if (y !== void 0) {
        var m = y.call(s, r);
        if (D(m) != "object") return m;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(s);
    }
    i.default = /* @__PURE__ */ (function(s) {
      P(y, s);
      var r = I(y);
      function y(m) {
        var f;
        return ee(this, y), f = r.call(this, m), l(V(f), "innerSliderRefHandler", function(d) {
          return f.innerSlider = d;
        }), l(V(f), "slickPrev", function() {
          return f.innerSlider.slickPrev();
        }), l(V(f), "slickNext", function() {
          return f.innerSlider.slickNext();
        }), l(V(f), "slickGoTo", function(d) {
          var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return f.innerSlider.slickGoTo(d, O);
        }), l(V(f), "slickPause", function() {
          return f.innerSlider.pause("paused");
        }), l(V(f), "slickPlay", function() {
          return f.innerSlider.autoPlay("play");
        }), f.state = {
          breakpoint: null
        }, f._responsiveMediaHandlers = [], f;
      }
      return W(y, [{
        key: "media",
        value: function(f, d) {
          var O = window.matchMedia(f), k = function(U) {
            var o = U.matches;
            o && d();
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
            var d = this.props.responsive.map(function(k) {
              return k.breakpoint;
            });
            d.sort(function(k, t) {
              return k - t;
            }), d.forEach(function(k, t) {
              var U;
              t === 0 ? U = (0, v.default)({
                minWidth: 0,
                maxWidth: k
              }) : U = (0, v.default)({
                minWidth: d[t - 1] + 1,
                maxWidth: k
              }), (0, L.canUseDOM)() && f.media(U, function() {
                f.setState({
                  breakpoint: k
                });
              });
            });
            var O = (0, v.default)({
              minWidth: d.slice(-1)[0]
            });
            (0, L.canUseDOM)() && this.media(O, function() {
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
          }), d = O[0].settings === "unslick" ? "unslick" : Y(Y(Y({}, g.default), this.props), O[0].settings)) : d = Y(Y({}, g.default), this.props), d.centerMode && (d.slidesToScroll > 1 && c.NODE_ENV, d.slidesToScroll = 1), d.fade && (d.slidesToShow > 1 && c.NODE_ENV, d.slidesToScroll > 1 && c.NODE_ENV, d.slidesToShow = 1, d.slidesToScroll = 1);
          var k = p.default.Children.toArray(this.props.children);
          k = k.filter(function(T) {
            return typeof T == "string" ? !!T.trim() : !!T;
          }), d.variableWidth && (d.rows > 1 || d.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), d.variableWidth = !1);
          for (var t = [], U = null, o = 0; o < k.length; o += d.rows * d.slidesPerRow) {
            for (var e = [], n = o; n < o + d.rows * d.slidesPerRow; n += d.slidesPerRow) {
              for (var h = [], _ = n; _ < n + d.slidesPerRow && (d.variableWidth && k[_].props.style && (U = k[_].props.style.width), !(_ >= k.length)); _ += 1)
                h.push(/* @__PURE__ */ p.default.cloneElement(k[_], {
                  key: 100 * o + 10 * n + _,
                  tabIndex: -1,
                  style: {
                    width: "".concat(100 / d.slidesPerRow, "%"),
                    display: "inline-block"
                  }
                }));
              e.push(/* @__PURE__ */ p.default.createElement("div", {
                key: 10 * o + n
              }, h));
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
            }, k);
          } else t.length <= d.slidesToShow && (d.unslick = !0);
          return /* @__PURE__ */ p.default.createElement(b.InnerSlider, R({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, (0, L.filterSettings)(d)), t);
        }
      }]), y;
    })(p.default.Component);
  })(Te)), Te;
}
var Qe;
function Ut() {
  return Qe || (Qe = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var c = p(Gt());
    function p(b) {
      return b && b.__esModule ? b : { default: b };
    }
    i.default = c.default;
  })(Ce)), Ce;
}
var Yt = Ut();
const Xt = /* @__PURE__ */ ht(Yt);
function Kt({
  cardTitle: i,
  bodyLarge: c,
  bodyDefault: p,
  bodySmall: b,
  iconUrl: v,
  author: g,
  authorTitle: L,
  textColor: M = "text-primary",
  className: D = "",
  ...R
}) {
  const z = `w-full  ${D}`.trim();
  return /* @__PURE__ */ E("div", { className: z, ...R, ...R.attributes || {}, children: /* @__PURE__ */ ce("div", { className: `flex flex-col gap-textmedia-btn-text--spacing-y text-left items-start ${M}`, children: [
    /* @__PURE__ */ ce("div", { className: "flex flex-col gap-testimonial-spacing-y", children: [
      i && /* @__PURE__ */ E("p", { className: "text-body-88 font-semibold", children: i }),
      (c || p || b) && /* @__PURE__ */ ce("div", { className: "flex flex-col items-start", children: [
        c && /* @__PURE__ */ E("p", { className: "text-body-large", children: c }),
        p && /* @__PURE__ */ E("p", { className: "text-body-default", children: p }),
        b && /* @__PURE__ */ E("p", { className: "text-body-small", children: b })
      ] })
    ] }),
    v && /* @__PURE__ */ E("div", { className: "flex items-center justify-start", children: /* @__PURE__ */ E(
      "img",
      {
        src: v,
        alt: p || "Icon",
        className: "h-100 w-[129px]"
      }
    ) }),
    (g || L) && /* @__PURE__ */ ce("div", { className: "flex flex-col items-start gap-4 mt-4", children: [
      g && /* @__PURE__ */ E("p", { className: "text-body-default font-medium", children: g }),
      L && /* @__PURE__ */ E("p", { className: "text-body-small", children: L })
    ] })
  ] }) });
}
const Vt = ct(() => Promise.resolve().then(() => nr)), Jt = ({
  media: i = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: c = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: p = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: b,
  videoUrl: v,
  lottieUrl: g,
  lottieData: L,
  iframeUrl: M,
  flipbookUrl: D,
  title: R,
  className: z = ""
}) => {
  var l;
  const Y = typeof window < "u" && window.location.origin.indexOf("author") > -1, ee = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, W = `relative w-full h-full ${c === "square" ? "aspect-square" : c === "rectangle" ? "aspect-[4/3]" : i === "video" ? "aspect-video" : ""}`.trim(), P = c === "default" ? `w-full h-full ${z}`.trim() : `absolute inset-0 w-full h-full ${z}`.trim(), K = "w-full h-full", I = c === "default" ? `${P}`.trim() : P, Q = p === "contain" ? "object-contain" : "object-cover", V = p === "contain" ? "xMidYMid meet" : "xMidYMid slice", $ = `relative w-full ${z}`.trim(), a = "w-full min-h-[280px]";
  switch (i) {
    case "image":
      if (b)
        return /* @__PURE__ */ E("div", { className: W, children: /* @__PURE__ */ E(
          "img",
          {
            src: b,
            alt: R || "Media image",
            className: `${Q} ${P}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (v) {
        const u = v.includes("youtube.com/watch") || v.includes("youtu.be/");
        let w = v;
        u && (w = `https://www.youtube.com/embed/${v.includes("youtu.be/") ? v.split("youtu.be/")[1].split("?")[0] : (l = v.split("v=")[1]) == null ? void 0 : l.split("&")[0]}`);
        const s = (() => {
          if (!u) return w;
          try {
            const r = new URL(w);
            return r.searchParams.set("autoplay", "0"), r.searchParams.set("mute", "0"), r.searchParams.set("playsinline", "1"), r.searchParams.set("controls", "1"), r.searchParams.set("rel", "0"), r.toString();
          } catch {
            return w.includes("?") ? w.includes("autoplay=") ? w : `${w}&autoplay=0` : `${w}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ E("div", { className: W, children: u ? /* @__PURE__ */ E(
          "iframe",
          {
            src: s,
            title: R || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${P} ${Q}`.trim()
          }
        ) : /* @__PURE__ */ E(
          "video",
          {
            className: `${P} ${Q}`.trim(),
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
        return Y ? /* @__PURE__ */ E("div", { className: W, role: "img", "aria-label": R || "Animation", children: /* @__PURE__ */ E(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${P}`.trim(),
            children: /* @__PURE__ */ E("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ E(
          "div",
          {
            className: W,
            role: "img",
            "aria-label": R || "Animation",
            children: /* @__PURE__ */ E("div", { className: `${P} overflow-hidden`.trim(), children: /* @__PURE__ */ E(
              vt,
              {
                animationData: L,
                loop: !ee,
                autoplay: !ee,
                className: K,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: V }
              }
            ) })
          }
        );
      if (g)
        return /* @__PURE__ */ E("div", { className: W, children: /* @__PURE__ */ E("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (M)
        return /* @__PURE__ */ E("div", { className: W, children: /* @__PURE__ */ E(
          "iframe",
          {
            src: M,
            title: R || "Iframe content",
            frameBorder: "0",
            className: `${I} ${Q}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (D)
        return Y ? /* @__PURE__ */ E("div", { className: $, role: "img", "aria-label": R || "Flipbook", children: /* @__PURE__ */ E(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${a}`.trim(),
            children: /* @__PURE__ */ E("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ E("div", { className: $, children: /* @__PURE__ */ E("div", { className: a, children: /* @__PURE__ */ E(ft, { fallback: /* @__PURE__ */ E("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ E(Vt, { pdfUrl: D, title: R, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ E("div", { className: W, children: /* @__PURE__ */ E("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${c === "default" ? "" : "absolute inset-0"}`.trim(), children: i ? `${i.charAt(0).toUpperCase() + i.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function Zt({ className: i = "" }) {
  return /* @__PURE__ */ E("svg", { viewBox: "0 0 1000 1000", className: i, fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ E("path", { d: "M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" }) });
}
const et = {
  light: "btn-light",
  dark: "btn-dark",
  "light-outlined": "btn-light-outlined",
  "dark-outlined": "btn-dark-outlined",
  "light-no-outline": "btn-light-no-outline",
  "dark-no-outline": "btn-dark-no-outline"
};
function tt({ className: i, onClick: c, direction: p, variant: b = "dark-outlined" }) {
  const v = p === "next", g = et[b] || et["dark-outlined"], L = (i || "").split(" ").filter((M) => !["slick-arrow", "slick-next", "slick-prev"].includes(M)).join(" ");
  return /* @__PURE__ */ E(
    "button",
    {
      type: "button",
      "aria-label": v ? "Next slide" : "Previous slide",
      onClick: c,
      className: [
        L,
        "giftpro-slide-arrow btn",
        g,
        "!flex items-center justify-center",
        "!h-48 !w-48 min-w-[48px] !p-0 !rounded-full z-10 hover:opacity-80",
        v ? "!right-10" : "!left-10"
      ].join(" "),
      children: /* @__PURE__ */ E(Zt, { className: `h-16 w-16 ${v ? "" : "rotate-180"}` })
    }
  );
}
function lr({
  giftProCardAndTexts: i = [],
  media: c = null,
  align: p = "left",
  id: b = "",
  className: v = "",
  infinite: g = !1,
  textColor: L = "text-primary",
  arrowVariant: M = "dark-outlined"
}) {
  const D = (N) => ({
    cardTitle: N.cardTitle,
    bodyLarge: N.bodyLarge,
    bodyDefault: N.bodyDefault,
    bodySmall: N.bodySmall,
    imageUrl: N.imageUrl,
    iconUrl: N.iconUrl,
    align: N.align ?? p,
    textColor: N.textColor ?? L,
    author: N.author,
    authorTitle: N.authorTitle,
    attributes: N.attributes || {}
  }), R = (N, W = "") => N ? /* @__PURE__ */ E("div", { className: "relative w-full h-full min-h-0 size-full overflow-hidden", children: /* @__PURE__ */ E("div", { className: "absolute inset-0 w-full h-full", children: /* @__PURE__ */ E(
    Jt,
    {
      media: N.type || "image",
      aspect: "default",
      imageUrl: N.imageUrl,
      videoUrl: N.videoUrl,
      lottieUrl: N.lottieUrl,
      lottieData: N.lottieData,
      iframeUrl: N.iframeUrl,
      title: N.title || W,
      className: "w-full h-full object-cover"
    }
  ) }) }) : null, z = (N, W) => {
    const P = N.media || c, K = !!P, I = K ? "flex-1 min-w-0" : "w-full";
    return /* @__PURE__ */ ce("div", { className: "flex flex-col md:flex-row items-stretch text-gray-950", children: [
      K && /* @__PURE__ */ E("div", { className: "sm:p-48 md:px-0", children: /* @__PURE__ */ E("div", { className: "w-full md:w-[300px] h-[340px] shrink-0 overflow-hidden rounded-[var(--spacing-cards-image--br)]", children: R(P, N.bodyDefault || "") }) }),
      /* @__PURE__ */ E("div", { className: `flex items-center justify-center pt-40 sm:p-48 ${I}`, children: /* @__PURE__ */ E(Kt, { ...D(N) }) })
    ] }, W);
  }, Y = {
    className: "w-full giftpro-cardandtext-slider flex items-center gap-60",
    dots: !1,
    infinite: g,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !1,
    arrows: !0,
    hideOnSinglePage: !0,
    hideArrowsIfSinglePage: !0,
    hideDotsIfSinglePage: !0,
    hideArrowsOnMobile: !0,
    hideDotsOnMobile: !0,
    prevArrow: /* @__PURE__ */ E(tt, { direction: "prev", variant: M }),
    nextArrow: /* @__PURE__ */ E(tt, { direction: "next", variant: M })
  };
  if (!i || i.length === 0) return null;
  const ee = i.length > 1;
  return /* @__PURE__ */ E("div", { className: `container ${v}`, id: b, children: ee ? /* @__PURE__ */ E(Xt, { ...Y, children: i.map((N, W) => /* @__PURE__ */ E("div", { children: z(N, W) }, W)) }) : z(i[0], 0) });
}
let ze, st, De, we;
const Qt = async () => {
  if (!we) {
    const i = await import("react-pdf");
    we = i.pdfjs, st = i.Document, De = i.Page, we.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${we.version}/build/pdf.worker.min.mjs`;
  }
}, er = async () => {
  ze || (ze = (await import("react-pageflip")).default);
}, tr = pt(({ children: i }, c) => /* @__PURE__ */ E("div", { ref: c, className: "w-full h-full overflow-hidden", children: i })), rr = ({ pdfUrl: i, title: c, width: p = 280, height: b = 280, className: v = "" }) => {
  const [g, L] = ve(0), [M, D] = ve(null), [R, z] = ve(!0), [Y, ee] = ve(b / p), [N, W] = ve(0), P = dt(null);
  Ae(() => {
    Promise.all([Qt(), er()]).then(() => z(!1)).catch(() => {
      D("Failed to load flipbook");
    });
  }, []), Ae(() => {
    const $ = P.current;
    if (!$) return;
    const a = new ResizeObserver(([l]) => {
      const u = Math.floor(l.contentRect.width);
      u > 0 && W(u);
    });
    return a.observe($), () => a.disconnect();
  }, [R]);
  const K = N > 0 ? Math.floor(N / 2) : Math.floor(p / 2), I = Math.round(K * Y), Q = He(async ($) => {
    try {
      const l = (await $.getPage(1)).getViewport({ scale: 1 });
      l != null && l.width && (l != null && l.height) && ee(l.height / l.width);
    } catch {
    }
    L($.numPages || 0);
  }, []), V = He(($) => {
    D(($ == null ? void 0 : $.message) || "Failed to load PDF");
  }, []);
  return M ? /* @__PURE__ */ E("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : R ? /* @__PURE__ */ E("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ E("div", { ref: P, className: `w-full ${v}`.trim(), children: /* @__PURE__ */ ce(
    st,
    {
      file: i,
      onLoadSuccess: Q,
      onLoadError: V,
      loading: /* @__PURE__ */ E("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        g === 1 && /* @__PURE__ */ E(
          "div",
          {
            className: `w-full flex justify-center items-center ${v}`.trim(),
            style: { minHeight: `${I}px` },
            children: /* @__PURE__ */ E(De, { pageNumber: 1, width: p, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        g > 1 && /* @__PURE__ */ E(
          ze,
          {
            width: K,
            height: I,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": c || "Flipbook",
            children: Array.from({ length: g }, ($, a) => /* @__PURE__ */ E(tr, { children: /* @__PURE__ */ E(De, { pageNumber: a + 1, width: K, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, a))
          },
          `${K}-${I}`
        )
      ]
    }
  ) });
}, nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rr
}, Symbol.toStringTag, { value: "Module" }));
export {
  lr as default
};
