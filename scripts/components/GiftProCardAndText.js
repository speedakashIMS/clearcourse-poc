import { jsx as E, jsxs as fe } from "react/jsx-runtime";
import ue, { lazy as ct, Suspense as ft, useState as ce, useRef as dt, useEffect as Ae, useCallback as He, forwardRef as pt } from "react";
import vt from "lottie-react";
var Se = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ht(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function yt(i) {
  if (Object.prototype.hasOwnProperty.call(i, "__esModule")) return i;
  var c = i.default;
  if (typeof c == "function") {
    var p = function m() {
      return this instanceof m ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    p.prototype = c.prototype;
  } else p = {};
  return Object.defineProperty(p, "__esModule", { value: !0 }), Object.keys(i).forEach(function(m) {
    var v = Object.getOwnPropertyDescriptor(i, m);
    Object.defineProperty(p, m, v.get ? v : {
      enumerable: !0,
      get: function() {
        return i[m];
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
  var i = "Expected a function", c = NaN, p = "[object Symbol]", m = /^\s+|\s+$/g, v = /^[-+]0x[0-9a-f]+$/i, g = /^0b[01]+$/i, L = /^0o[0-7]+$/i, M = parseInt, z = typeof Se == "object" && Se && Se.Object === Object && Se, R = typeof self == "object" && self && self.Object === Object && self, N = z || R || Function("return this")(), Y = Object.prototype, Q = Y.toString, ee = Math.max, X = Math.min, b = function() {
    return N.Date.now();
  };
  function $(a, l, u) {
    var O, s, r, y, S, f, d = 0, _ = !1, P = !1, t = !0;
    if (typeof a != "function")
      throw new TypeError(i);
    l = q(l) || 0, D(u) && (_ = !!u.leading, P = "maxWait" in u, r = P ? ee(q(u.maxWait) || 0, l) : r, t = "trailing" in u ? !!u.trailing : t);
    function U(j) {
      var H = O, W = s;
      return O = s = void 0, d = j, y = a.apply(W, H), y;
    }
    function o(j) {
      return d = j, S = setTimeout(h, l), _ ? U(j) : y;
    }
    function e(j) {
      var H = j - f, W = j - d, F = l - H;
      return P ? X(F, r - W) : F;
    }
    function n(j) {
      var H = j - f, W = j - d;
      return f === void 0 || H >= l || H < 0 || P && W >= r;
    }
    function h() {
      var j = b();
      if (n(j))
        return k(j);
      S = setTimeout(h, e(j));
    }
    function k(j) {
      return S = void 0, t && O ? U(j) : (O = s = void 0, y);
    }
    function w() {
      S !== void 0 && clearTimeout(S), d = 0, O = f = s = S = void 0;
    }
    function T() {
      return S === void 0 ? y : k(b());
    }
    function C() {
      var j = b(), H = n(j);
      if (O = arguments, s = this, f = j, H) {
        if (S === void 0)
          return o(f);
        if (P)
          return S = setTimeout(h, l), U(f);
      }
      return S === void 0 && (S = setTimeout(h, l)), y;
    }
    return C.cancel = w, C.flush = T, C;
  }
  function D(a) {
    var l = typeof a;
    return !!a && (l == "object" || l == "function");
  }
  function Z(a) {
    return !!a && typeof a == "object";
  }
  function G(a) {
    return typeof a == "symbol" || Z(a) && Q.call(a) == p;
  }
  function q(a) {
    if (typeof a == "number")
      return a;
    if (G(a))
      return c;
    if (D(a)) {
      var l = typeof a.valueOf == "function" ? a.valueOf() : a;
      a = D(l) ? l + "" : l;
    }
    if (typeof a != "string")
      return a === 0 ? a : +a;
    a = a.replace(m, "");
    var u = g.test(a);
    return u || L.test(a) ? M(a.slice(2), u ? 2 : 8) : v.test(a) ? c : +a;
  }
  return xe = $, xe;
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
    var m = {
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
    i.default = m;
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
  function m(o) {
    "@babel/helpers - typeof";
    return m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, m(o);
  }
  function v(o, e) {
    var n = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(o);
      e && (h = h.filter(function(k) {
        return Object.getOwnPropertyDescriptor(o, k).enumerable;
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
    var e = z(o, "string");
    return m(e) == "symbol" ? e : e + "";
  }
  function z(o, e) {
    if (m(o) != "object" || !o) return o;
    var n = o[Symbol.toPrimitive];
    if (n !== void 0) {
      var h = n.call(o, e);
      if (m(h) != "object") return h;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(o);
  }
  function R(o, e, n) {
    return Math.max(e, Math.min(o, n));
  }
  var N = x.safePreventDefault = function(e) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(e._reactName) || e.preventDefault();
  }, Y = x.getOnDemandLazySlides = function(e) {
    for (var n = [], h = Q(e), k = ee(e), w = h; w < k; w++)
      e.lazyLoadedList.indexOf(w) < 0 && n.push(w);
    return n;
  };
  x.getRequiredLazySlides = function(e) {
    for (var n = [], h = Q(e), k = ee(e), w = h; w < k; w++)
      n.push(w);
    return n;
  };
  var Q = x.lazyStartIndex = function(e) {
    return e.currentSlide - X(e);
  }, ee = x.lazyEndIndex = function(e) {
    return e.currentSlide + b(e);
  }, X = x.lazySlidesOnLeft = function(e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }, b = x.lazySlidesOnRight = function(e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }, $ = x.getWidth = function(e) {
    return e && e.offsetWidth || 0;
  }, D = x.getHeight = function(e) {
    return e && e.offsetHeight || 0;
  }, Z = x.getSwipeDirection = function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h, k, w, T;
    return h = e.startX - e.curX, k = e.startY - e.curY, w = Math.atan2(k, h), T = Math.round(w * 180 / Math.PI), T < 0 && (T = 360 - Math.abs(T)), T <= 45 && T >= 0 || T <= 360 && T >= 315 ? "left" : T >= 135 && T <= 225 ? "right" : n === !0 ? T >= 35 && T <= 135 ? "up" : "down" : "vertical";
  }, G = x.canGoNext = function(e) {
    var n = !0;
    return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (n = !1), n;
  };
  x.extractObject = function(e, n) {
    var h = {};
    return n.forEach(function(k) {
      return h[k] = e[k];
    }), h;
  }, x.initializedState = function(e) {
    var n = i.default.Children.count(e.children), h = e.listRef, k = Math.ceil($(h)), w = e.trackRef && e.trackRef.node, T = Math.ceil($(w)), C;
    if (e.vertical)
      C = k;
    else {
      var j = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding == "string" && e.centerPadding.slice(-1) === "%" && (j *= k / 100), C = Math.ceil((k - j) / e.slidesToShow);
    }
    var H = h && D(h.querySelector('[data-index="0"]')), W = H * e.slidesToShow, F = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && (F = n - 1 - e.initialSlide);
    var J = e.lazyLoadedList || [], V = Y(g(g({}, e), {}, {
      currentSlide: F,
      lazyLoadedList: J
    }));
    J = J.concat(V);
    var B = {
      slideCount: n,
      slideWidth: C,
      listWidth: k,
      trackWidth: T,
      currentSlide: F,
      slideHeight: H,
      listHeight: W,
      lazyLoadedList: J
    };
    return e.autoplaying === null && e.autoplay && (B.autoplaying = "playing"), B;
  }, x.slideHandler = function(e) {
    var n = e.waitForAnimate, h = e.animating, k = e.fade, w = e.infinite, T = e.index, C = e.slideCount, j = e.lazyLoad, H = e.currentSlide, W = e.centerMode, F = e.slidesToScroll, J = e.slidesToShow, V = e.useCSS, B = e.lazyLoadedList;
    if (n && h) return {};
    var A = T, K, re, I, te = {}, ne = {}, ie = w ? T : R(T, 0, C - 1);
    if (k) {
      if (!w && (T < 0 || T >= C)) return {};
      T < 0 ? A = T + C : T >= C && (A = T - C), j && B.indexOf(A) < 0 && (B = B.concat(A)), te = {
        animating: !0,
        currentSlide: A,
        lazyLoadedList: B,
        targetSlide: A
      }, ne = {
        animating: !1,
        targetSlide: A
      };
    } else
      K = A, A < 0 ? (K = A + C, w ? C % F !== 0 && (K = C - C % F) : K = 0) : !G(e) && A > H ? A = K = H : W && A >= C ? (A = w ? C : C - 1, K = w ? 0 : C - 1) : A >= C && (K = A - C, w ? C % F !== 0 && (K = 0) : K = C - J), !w && A + J >= C && (K = C - J), re = r(g(g({}, e), {}, {
        slideIndex: A
      })), I = r(g(g({}, e), {}, {
        slideIndex: K
      })), w || (re === I && (A = K), re = I), j && (B = B.concat(Y(g(g({}, e), {}, {
        currentSlide: A
      })))), V ? (te = {
        animating: !0,
        currentSlide: K,
        trackStyle: s(g(g({}, e), {}, {
          left: re
        })),
        lazyLoadedList: B,
        targetSlide: ie
      }, ne = {
        animating: !1,
        currentSlide: K,
        trackStyle: O(g(g({}, e), {}, {
          left: I
        })),
        swipeLeft: null,
        targetSlide: ie
      }) : te = {
        currentSlide: K,
        trackStyle: O(g(g({}, e), {}, {
          left: I
        })),
        lazyLoadedList: B,
        targetSlide: ie
      };
    return {
      state: te,
      nextState: ne
    };
  }, x.changeSlide = function(e, n) {
    var h, k, w, T, C, j = e.slidesToScroll, H = e.slidesToShow, W = e.slideCount, F = e.currentSlide, J = e.targetSlide, V = e.lazyLoad, B = e.infinite;
    if (T = W % j !== 0, h = T ? 0 : (W - F) % j, n.message === "previous")
      w = h === 0 ? j : H - h, C = F - w, V && !B && (k = F - w, C = k === -1 ? W - 1 : k), B || (C = J - j);
    else if (n.message === "next")
      w = h === 0 ? j : h, C = F + w, V && !B && (C = (F + j) % W + h), B || (C = J + j);
    else if (n.message === "dots")
      C = n.index * n.slidesToScroll;
    else if (n.message === "children") {
      if (C = n.index, B) {
        var A = d(g(g({}, e), {}, {
          targetSlide: C
        }));
        C > n.currentSlide && A === "left" ? C = C - W : C < n.currentSlide && A === "right" && (C = C + W);
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
    var h = n.scrolling, k = n.animating, w = n.vertical, T = n.swipeToSlide, C = n.verticalSwiping, j = n.rtl, H = n.currentSlide, W = n.edgeFriction, F = n.edgeDragged, J = n.onEdge, V = n.swiped, B = n.swiping, A = n.slideCount, K = n.slidesToScroll, re = n.infinite, I = n.touchObject, te = n.swipeEvent, ne = n.listHeight, ie = n.listWidth;
    if (!h) {
      if (k) return N(e);
      w && T && C && N(e);
      var oe, le = {}, me = r(n);
      I.curX = e.touches ? e.touches[0].pageX : e.clientX, I.curY = e.touches ? e.touches[0].pageY : e.clientY, I.swipeLength = Math.round(Math.sqrt(Math.pow(I.curX - I.startX, 2)));
      var Ie = Math.round(Math.sqrt(Math.pow(I.curY - I.startY, 2)));
      if (!C && !B && Ie > 10)
        return {
          scrolling: !0
        };
      C && (I.swipeLength = Ie);
      var pe = (j ? -1 : 1) * (I.curX > I.startX ? 1 : -1);
      C && (pe = I.curY > I.startY ? 1 : -1);
      var ut = Math.ceil(A / K), ae = Z(n.touchObject, C), ve = I.swipeLength;
      return re || (H === 0 && (ae === "right" || ae === "down") || H + 1 >= ut && (ae === "left" || ae === "up") || !G(n) && (ae === "left" || ae === "up")) && (ve = I.swipeLength * W, F === !1 && J && (J(ae), le.edgeDragged = !0)), !V && te && (te(ae), le.swiped = !0), w ? oe = me + ve * (ne / ie) * pe : j ? oe = me - ve * pe : oe = me + ve * pe, C && (oe = me + ve * pe), le = g(g({}, le), {}, {
        touchObject: I,
        swipeLeft: oe,
        trackStyle: O(g(g({}, n), {}, {
          left: oe
        }))
      }), Math.abs(I.curX - I.startX) < Math.abs(I.curY - I.startY) * 0.8 || I.swipeLength > 10 && (le.swiping = !0, N(e)), le;
    }
  }, x.swipeEnd = function(e, n) {
    var h = n.dragging, k = n.swipe, w = n.touchObject, T = n.listWidth, C = n.touchThreshold, j = n.verticalSwiping, H = n.listHeight, W = n.swipeToSlide, F = n.scrolling, J = n.onSwipe, V = n.targetSlide, B = n.currentSlide, A = n.infinite;
    if (!h)
      return k && N(e), {};
    var K = j ? H / C : T / C, re = Z(w, j), I = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {}
    };
    if (F || !w.swipeLength)
      return I;
    if (w.swipeLength > K) {
      N(e), J && J(re);
      var te, ne, ie = A ? B : V;
      switch (re) {
        case "left":
        case "up":
          ne = ie + l(n), te = W ? a(n, ne) : ne, I.currentDirection = 0;
          break;
        case "right":
        case "down":
          ne = ie - l(n), te = W ? a(n, ne) : ne, I.currentDirection = 1;
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
  var q = x.getNavigableIndexes = function(e) {
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, h = e.infinite ? e.slidesToShow * -1 : 0, k = e.infinite ? e.slidesToShow * -1 : 0, w = []; h < n; )
      w.push(h), h = k + e.slidesToScroll, k += Math.min(e.slidesToScroll, e.slidesToShow);
    return w;
  }, a = x.checkNavigable = function(e, n) {
    var h = q(e), k = 0;
    if (n > h[h.length - 1])
      n = h[h.length - 1];
    else
      for (var w in h) {
        if (n < h[w]) {
          n = k;
          break;
        }
        k = h[w];
      }
    return n;
  }, l = x.getSlideCount = function(e) {
    var n = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      var h, k = e.listRef, w = k.querySelectorAll && k.querySelectorAll(".slick-slide") || [];
      if (Array.from(w).every(function(j) {
        if (e.vertical) {
          if (j.offsetTop + D(j) / 2 > e.swipeLeft * -1)
            return h = j, !1;
        } else if (j.offsetLeft - n + $(j) / 2 > e.swipeLeft * -1)
          return h = j, !1;
        return !0;
      }), !h)
        return 0;
      var T = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide, C = Math.abs(h.dataset.index - T) || 1;
      return C;
    } else
      return e.slidesToScroll;
  }, u = x.checkSpecKeys = function(e, n) {
    return n.reduce(function(h, k) {
      return h && e.hasOwnProperty(k);
    }, !0) ? null : console.error("Keys Missing:", e);
  }, O = x.getTrackCSS = function(e) {
    u(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
    var n, h;
    if (!e.vertical)
      n = f(e) * e.slideWidth;
    else {
      var k = e.unslick ? e.slideCount : e.slideCount + 2 * e.slidesToShow;
      h = k * e.slideHeight;
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
  }, s = x.getTrackAnimateCSS = function(e) {
    u(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var n = O(e);
    return e.useTransform ? (n.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, n.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? n.transition = "top " + e.speed + "ms " + e.cssEase : n.transition = "left " + e.speed + "ms " + e.cssEase, n;
  }, r = x.getTrackLeft = function(e) {
    if (e.unslick)
      return 0;
    u(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var n = e.slideIndex, h = e.trackRef, k = e.infinite, w = e.centerMode, T = e.slideCount, C = e.slidesToShow, j = e.slidesToScroll, H = e.slideWidth, W = e.listWidth, F = e.variableWidth, J = e.slideHeight, V = e.fade, B = e.vertical, A = 0, K, re, I = 0;
    if (V || e.slideCount === 1)
      return 0;
    var te = 0;
    if (k ? (te = -y(e), T % j !== 0 && n + j > T && (te = -(n > T ? C - (n - T) : T % j)), w && (te += parseInt(C / 2))) : (T % j !== 0 && n + j > T && (te = C - T % j), w && (te = parseInt(C / 2))), A = te * H, I = te * J, B ? K = n * J * -1 + I : K = n * H * -1 + A, F === !0) {
      var ne, ie = h && h.node;
      if (ne = n + y(e), re = ie && ie.childNodes[ne], K = re ? re.offsetLeft * -1 : 0, w === !0) {
        ne = k ? n + y(e) : n, re = ie && ie.children[ne], K = 0;
        for (var oe = 0; oe < ne; oe++)
          K -= ie && ie.children[oe] && ie.children[oe].offsetWidth;
        K -= parseInt(e.centerPadding), K += re && (W - re.offsetWidth) / 2;
      }
    }
    return K;
  }, y = x.getPreClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, S = x.getPostClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, f = x.getTotalSlides = function(e) {
    return e.slideCount === 1 ? 1 : y(e) + e.slideCount + S(e);
  }, d = x.siblingDirection = function(e) {
    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + _(e) ? "left" : "right" : e.targetSlide < e.currentSlide - P(e) ? "right" : "left";
  }, _ = x.slidesOnRight = function(e) {
    var n = e.slidesToShow, h = e.centerMode, k = e.rtl, w = e.centerPadding;
    if (h) {
      var T = (n - 1) / 2 + 1;
      return parseInt(w) > 0 && (T += 1), k && n % 2 === 0 && (T += 1), T;
    }
    return k ? 0 : n - 1;
  }, P = x.slidesOnLeft = function(e) {
    var n = e.slidesToShow, h = e.centerMode, k = e.rtl, w = e.centerPadding;
    if (h) {
      var T = (n - 1) / 2 + 1;
      return parseInt(w) > 0 && (T += 1), !k && n % 2 === 0 && (T += 1), T;
    }
    return k ? n - 1 : 0;
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
  var i = m(ue), c = m(ke()), p = be();
  function m(s) {
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
        for (var S in y)
          ({}).hasOwnProperty.call(y, S) && (s[S] = y[S]);
      }
      return s;
    }, g.apply(null, arguments);
  }
  function L(s, r) {
    if (!(s instanceof r)) throw new TypeError("Cannot call a class as a function");
  }
  function M(s, r) {
    for (var y = 0; y < r.length; y++) {
      var S = r[y];
      S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(s, G(S.key), S);
    }
  }
  function z(s, r, y) {
    return r && M(s.prototype, r), Object.defineProperty(s, "prototype", { writable: !1 }), s;
  }
  function R(s, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
    s.prototype = Object.create(r && r.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, "prototype", { writable: !1 }), r && N(s, r);
  }
  function N(s, r) {
    return N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(y, S) {
      return y.__proto__ = S, y;
    }, N(s, r);
  }
  function Y(s) {
    var r = X();
    return function() {
      var y, S = b(s);
      if (r) {
        var f = b(this).constructor;
        y = Reflect.construct(S, arguments, f);
      } else y = S.apply(this, arguments);
      return Q(this, y);
    };
  }
  function Q(s, r) {
    if (r && (v(r) == "object" || typeof r == "function")) return r;
    if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return ee(s);
  }
  function ee(s) {
    if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s;
  }
  function X() {
    try {
      var s = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (X = function() {
      return !!s;
    })();
  }
  function b(s) {
    return b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, b(s);
  }
  function $(s, r) {
    var y = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
      var S = Object.getOwnPropertySymbols(s);
      r && (S = S.filter(function(f) {
        return Object.getOwnPropertyDescriptor(s, f).enumerable;
      })), y.push.apply(y, S);
    }
    return y;
  }
  function D(s) {
    for (var r = 1; r < arguments.length; r++) {
      var y = arguments[r] != null ? arguments[r] : {};
      r % 2 ? $(Object(y), !0).forEach(function(S) {
        Z(s, S, y[S]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(y)) : $(Object(y)).forEach(function(S) {
        Object.defineProperty(s, S, Object.getOwnPropertyDescriptor(y, S));
      });
    }
    return s;
  }
  function Z(s, r, y) {
    return (r = G(r)) in s ? Object.defineProperty(s, r, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : s[r] = y, s;
  }
  function G(s) {
    var r = q(s, "string");
    return v(r) == "symbol" ? r : r + "";
  }
  function q(s, r) {
    if (v(s) != "object" || !s) return s;
    var y = s[Symbol.toPrimitive];
    if (y !== void 0) {
      var S = y.call(s, r);
      if (v(S) != "object") return S;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(s);
  }
  var a = function(r) {
    var y, S, f, d, _;
    r.rtl ? _ = r.slideCount - 1 - r.index : _ = r.index, f = _ < 0 || _ >= r.slideCount, r.centerMode ? (d = Math.floor(r.slidesToShow / 2), S = (_ - r.currentSlide) % r.slideCount === 0, _ > r.currentSlide - d - 1 && _ <= r.currentSlide + d && (y = !0)) : y = r.currentSlide <= _ && _ < r.currentSlide + r.slidesToShow;
    var P;
    r.targetSlide < 0 ? P = r.targetSlide + r.slideCount : r.targetSlide >= r.slideCount ? P = r.targetSlide - r.slideCount : P = r.targetSlide;
    var t = _ === P;
    return {
      "slick-slide": !0,
      "slick-active": y,
      "slick-center": S,
      "slick-cloned": f,
      "slick-current": t
      // dubious in case of RTL
    };
  }, l = function(r) {
    var y = {};
    return (r.variableWidth === void 0 || r.variableWidth === !1) && (y.width = r.slideWidth), r.fade && (y.position = "relative", r.vertical ? y.top = -r.index * parseInt(r.slideHeight) : y.left = -r.index * parseInt(r.slideWidth), y.opacity = r.currentSlide === r.index ? 1 : 0, y.zIndex = r.currentSlide === r.index ? 999 : 998, r.useCSS && (y.transition = "opacity " + r.speed + "ms " + r.cssEase + ", visibility " + r.speed + "ms " + r.cssEase)), y;
  }, u = function(r, y) {
    return r.key || y;
  }, O = function(r) {
    var y, S = [], f = [], d = [], _ = i.default.Children.count(r.children), P = (0, p.lazyStartIndex)(r), t = (0, p.lazyEndIndex)(r);
    return i.default.Children.forEach(r.children, function(U, o) {
      var e, n = {
        message: "children",
        index: o,
        slidesToScroll: r.slidesToScroll,
        currentSlide: r.currentSlide
      };
      !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(o) >= 0 ? e = U : e = /* @__PURE__ */ i.default.createElement("div", null);
      var h = l(D(D({}, r), {}, {
        index: o
      })), k = e.props.className || "", w = a(D(D({}, r), {}, {
        index: o
      }));
      if (S.push(/* @__PURE__ */ i.default.cloneElement(e, {
        key: "original" + u(e, o),
        "data-index": o,
        className: (0, c.default)(w, k),
        tabIndex: "-1",
        "aria-hidden": !w["slick-active"],
        style: D(D({
          outline: "none"
        }, e.props.style || {}), h),
        onClick: function(j) {
          e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
        }
      })), r.infinite && _ > 1 && r.fade === !1 && !r.unslick) {
        var T = _ - o;
        T <= (0, p.getPreClones)(r) && (y = -T, y >= P && (e = U), w = a(D(D({}, r), {}, {
          index: y
        })), f.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "precloned" + u(e, y),
          "data-index": y,
          tabIndex: "-1",
          className: (0, c.default)(w, k),
          "aria-hidden": !w["slick-active"],
          style: D(D({}, e.props.style || {}), h),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        }))), o < (0, p.getPostClones)(r) && (y = _ + o, y < t && (e = U), w = a(D(D({}, r), {}, {
          index: y
        })), d.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "postcloned" + u(e, y),
          "data-index": y,
          tabIndex: "-1",
          className: (0, c.default)(w, k),
          "aria-hidden": !w["slick-active"],
          style: D(D({}, e.props.style || {}), h),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        })));
      }
    }), r.rtl ? f.concat(S, d).reverse() : f.concat(S, d);
  };
  return ye.Track = /* @__PURE__ */ (function(s) {
    R(y, s);
    var r = Y(y);
    function y() {
      var S;
      L(this, y);
      for (var f = arguments.length, d = new Array(f), _ = 0; _ < f; _++)
        d[_] = arguments[_];
      return S = r.call.apply(r, [this].concat(d)), Z(ee(S), "node", null), Z(ee(S), "handleRef", function(P) {
        S.node = P;
      }), S;
    }
    return z(y, [{
      key: "render",
      value: function() {
        var f = O(this.props), d = this.props, _ = d.onMouseEnter, P = d.onMouseOver, t = d.onMouseLeave, U = {
          onMouseEnter: _,
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
  var c = v(ue), p = v(ke()), m = be();
  function v(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function g(a, l) {
    var u = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var O = Object.getOwnPropertySymbols(a);
      l && (O = O.filter(function(s) {
        return Object.getOwnPropertyDescriptor(a, s).enumerable;
      })), u.push.apply(u, O);
    }
    return u;
  }
  function L(a) {
    for (var l = 1; l < arguments.length; l++) {
      var u = arguments[l] != null ? arguments[l] : {};
      l % 2 ? g(Object(u), !0).forEach(function(O) {
        M(a, O, u[O]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u)) : g(Object(u)).forEach(function(O) {
        Object.defineProperty(a, O, Object.getOwnPropertyDescriptor(u, O));
      });
    }
    return a;
  }
  function M(a, l, u) {
    return (l = Y(l)) in a ? Object.defineProperty(a, l, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : a[l] = u, a;
  }
  function z(a, l) {
    if (!(a instanceof l)) throw new TypeError("Cannot call a class as a function");
  }
  function R(a, l) {
    for (var u = 0; u < l.length; u++) {
      var O = l[u];
      O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(a, Y(O.key), O);
    }
  }
  function N(a, l, u) {
    return l && R(a.prototype, l), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function Y(a) {
    var l = Q(a, "string");
    return i(l) == "symbol" ? l : l + "";
  }
  function Q(a, l) {
    if (i(a) != "object" || !a) return a;
    var u = a[Symbol.toPrimitive];
    if (u !== void 0) {
      var O = u.call(a, l);
      if (i(O) != "object") return O;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  function ee(a, l) {
    if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(l && l.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), l && X(a, l);
  }
  function X(a, l) {
    return X = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, O) {
      return u.__proto__ = O, u;
    }, X(a, l);
  }
  function b(a) {
    var l = Z();
    return function() {
      var u, O = G(a);
      if (l) {
        var s = G(this).constructor;
        u = Reflect.construct(O, arguments, s);
      } else u = O.apply(this, arguments);
      return $(this, u);
    };
  }
  function $(a, l) {
    if (l && (i(l) == "object" || typeof l == "function")) return l;
    if (l !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return D(a);
  }
  function D(a) {
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
    return G = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(l) {
      return l.__proto__ || Object.getPrototypeOf(l);
    }, G(a);
  }
  var q = function(l) {
    var u;
    return l.infinite ? u = Math.ceil(l.slideCount / l.slidesToScroll) : u = Math.ceil((l.slideCount - l.slidesToShow) / l.slidesToScroll) + 1, u;
  };
  return ge.Dots = /* @__PURE__ */ (function(a) {
    ee(u, a);
    var l = b(u);
    function u() {
      return z(this, u), l.apply(this, arguments);
    }
    return N(u, [{
      key: "clickHandler",
      value: function(s, r) {
        r.preventDefault(), this.props.clickHandler(s);
      }
    }, {
      key: "render",
      value: function() {
        for (var s = this.props, r = s.onMouseEnter, y = s.onMouseOver, S = s.onMouseLeave, f = s.infinite, d = s.slidesToScroll, _ = s.slidesToShow, P = s.slideCount, t = s.currentSlide, U = q({
          slideCount: P,
          slidesToScroll: d,
          slidesToShow: _,
          infinite: f
        }), o = {
          onMouseEnter: r,
          onMouseOver: y,
          onMouseLeave: S
        }, e = [], n = 0; n < U; n++) {
          var h = (n + 1) * d - 1, k = f ? h : (0, m.clamp)(h, 0, P - 1), w = k - (d - 1), T = f ? w : (0, m.clamp)(w, 0, P - 1), C = (0, p.default)({
            "slick-active": f ? t >= T && t <= k : t === T
          }), j = {
            message: "dots",
            index: n,
            slidesToScroll: d,
            currentSlide: t
          }, H = this.clickHandler.bind(this, j);
          e = e.concat(/* @__PURE__ */ c.default.createElement("li", {
            key: n,
            className: C
          }, /* @__PURE__ */ c.default.cloneElement(this.props.customPaging(n), {
            onClick: H
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
  var c = v(ue), p = v(ke()), m = be();
  function v(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(a) {
      for (var l = 1; l < arguments.length; l++) {
        var u = arguments[l];
        for (var O in u)
          ({}).hasOwnProperty.call(u, O) && (a[O] = u[O]);
      }
      return a;
    }, g.apply(null, arguments);
  }
  function L(a, l) {
    var u = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var O = Object.getOwnPropertySymbols(a);
      l && (O = O.filter(function(s) {
        return Object.getOwnPropertyDescriptor(a, s).enumerable;
      })), u.push.apply(u, O);
    }
    return u;
  }
  function M(a) {
    for (var l = 1; l < arguments.length; l++) {
      var u = arguments[l] != null ? arguments[l] : {};
      l % 2 ? L(Object(u), !0).forEach(function(O) {
        z(a, O, u[O]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u)) : L(Object(u)).forEach(function(O) {
        Object.defineProperty(a, O, Object.getOwnPropertyDescriptor(u, O));
      });
    }
    return a;
  }
  function z(a, l, u) {
    return (l = Q(l)) in a ? Object.defineProperty(a, l, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : a[l] = u, a;
  }
  function R(a, l) {
    if (!(a instanceof l)) throw new TypeError("Cannot call a class as a function");
  }
  function N(a, l) {
    for (var u = 0; u < l.length; u++) {
      var O = l[u];
      O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(a, Q(O.key), O);
    }
  }
  function Y(a, l, u) {
    return l && N(a.prototype, l), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function Q(a) {
    var l = ee(a, "string");
    return i(l) == "symbol" ? l : l + "";
  }
  function ee(a, l) {
    if (i(a) != "object" || !a) return a;
    var u = a[Symbol.toPrimitive];
    if (u !== void 0) {
      var O = u.call(a, l);
      if (i(O) != "object") return O;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  function X(a, l) {
    if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(l && l.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), l && b(a, l);
  }
  function b(a, l) {
    return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, O) {
      return u.__proto__ = O, u;
    }, b(a, l);
  }
  function $(a) {
    var l = G();
    return function() {
      var u, O = q(a);
      if (l) {
        var s = q(this).constructor;
        u = Reflect.construct(O, arguments, s);
      } else u = O.apply(this, arguments);
      return D(this, u);
    };
  }
  function D(a, l) {
    if (l && (i(l) == "object" || typeof l == "function")) return l;
    if (l !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
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
  function q(a) {
    return q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(l) {
      return l.__proto__ || Object.getPrototypeOf(l);
    }, q(a);
  }
  return se.PrevArrow = /* @__PURE__ */ (function(a) {
    X(u, a);
    var l = $(u);
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
        }, S = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, f;
        return this.props.prevArrow ? f = /* @__PURE__ */ c.default.cloneElement(this.props.prevArrow, M(M({}, y), S)) : f = /* @__PURE__ */ c.default.createElement("button", g({
          key: "0",
          type: "button"
        }, y), " ", "Previous"), f;
      }
    }]), u;
  })(c.default.PureComponent), se.NextArrow = /* @__PURE__ */ (function(a) {
    X(u, a);
    var l = $(u);
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
        (0, m.canGoNext)(this.props) || (s["slick-disabled"] = !0, r = null);
        var y = {
          key: "1",
          "data-role": "none",
          className: (0, p.default)(s),
          style: {
            display: "block"
          },
          onClick: r
        }, S = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, f;
        return this.props.nextArrow ? f = /* @__PURE__ */ c.default.cloneElement(this.props.nextArrow, M(M({}, y), S)) : f = /* @__PURE__ */ c.default.createElement("button", g({
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
    var m = -1;
    return c.some(function(v, g) {
      return v[0] === p ? (m = g, !0) : !1;
    }), m;
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
        var m = i(this.__entries__, p), v = this.__entries__[m];
        return v && v[1];
      }, c.prototype.set = function(p, m) {
        var v = i(this.__entries__, p);
        ~v ? this.__entries__[v][1] = m : this.__entries__.push([p, m]);
      }, c.prototype.delete = function(p) {
        var m = this.__entries__, v = i(m, p);
        ~v && m.splice(v, 1);
      }, c.prototype.has = function(p) {
        return !!~i(this.__entries__, p);
      }, c.prototype.clear = function() {
        this.__entries__.splice(0);
      }, c.prototype.forEach = function(p, m) {
        m === void 0 && (m = null);
        for (var v = 0, g = this.__entries__; v < g.length; v++) {
          var L = g[v];
          p.call(m, L[1], L[0]);
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
  var p = !1, m = !1, v = 0;
  function g() {
    p && (p = !1, i()), m && M();
  }
  function L() {
    Ot(g);
  }
  function M() {
    var z = Date.now();
    if (p) {
      if (z - v < _t)
        return;
      m = !0;
    } else
      p = !0, m = !1, setTimeout(L, c);
    v = z;
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
      var p = this.observers_, m = p.indexOf(c);
      ~m && p.splice(m, 1), !p.length && this.connected_ && this.disconnect_();
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
      var p = c.propertyName, m = p === void 0 ? "" : p, v = Ct.some(function(g) {
        return !!~m.indexOf(g);
      });
      v && this.refresh();
    }, i.getInstance = function() {
      return this.instance_ || (this.instance_ = new i()), this.instance_;
    }, i.instance_ = null, i;
  })()
), it = (function(i, c) {
  for (var p = 0, m = Object.keys(c); p < m.length; p++) {
    var v = m[p];
    Object.defineProperty(i, v, {
      value: c[v],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return i;
}), de = (function(i) {
  var c = i && i.ownerDocument && i.ownerDocument.defaultView;
  return c || Oe;
}), ot = Pe(0, 0, 0, 0);
function _e(i) {
  return parseFloat(i) || 0;
}
function Xe(i) {
  for (var c = [], p = 1; p < arguments.length; p++)
    c[p - 1] = arguments[p];
  return c.reduce(function(m, v) {
    var g = i["border-" + v + "-width"];
    return m + _e(g);
  }, 0);
}
function xt(i) {
  for (var c = ["top", "right", "bottom", "left"], p = {}, m = 0, v = c; m < v.length; m++) {
    var g = v[m], L = i["padding-" + g];
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
  var m = de(i).getComputedStyle(i), v = xt(m), g = v.left + v.right, L = v.top + v.bottom, M = _e(m.width), z = _e(m.height);
  if (m.boxSizing === "border-box" && (Math.round(M + g) !== c && (M -= Xe(m, "left", "right") + g), Math.round(z + L) !== p && (z -= Xe(m, "top", "bottom") + L)), !Rt(i)) {
    var R = Math.round(M + g) - c, N = Math.round(z + L) - p;
    Math.abs(R) !== 1 && (M -= R), Math.abs(N) !== 1 && (z -= N);
  }
  return Pe(v.left, v.top, M, z);
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
  return Ne ? Mt(i) ? Et(i) : Lt(i) : ot;
}
function zt(i) {
  var c = i.x, p = i.y, m = i.width, v = i.height, g = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, L = Object.create(g.prototype);
  return it(L, {
    x: c,
    y: p,
    width: m,
    height: v,
    top: p,
    right: c + m,
    bottom: v + p,
    left: c
  }), L;
}
function Pe(i, c, p, m) {
  return { x: i, y: c, width: p, height: m };
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
      var m = zt(p);
      it(this, { target: c, contentRect: m });
    }
    return i;
  })()
), At = (
  /** @class */
  (function() {
    function i(c, p, m) {
      if (this.activeObservations_ = [], this.observations_ = new nt(), typeof c != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = c, this.controller_ = p, this.callbackCtx_ = m;
    }
    return i.prototype.observe = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof de(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var p = this.observations_;
        p.has(c) || (p.set(c, new Dt(c)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, i.prototype.unobserve = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof de(c).Element))
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
        var c = this.callbackCtx_, p = this.activeObservations_.map(function(m) {
          return new It(m.target, m.broadcastRect());
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
      var p = jt.getInstance(), m = new At(c, p, this);
      at.set(this, m);
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
  var i = R(ue), c = R(gt()), p = R(bt()), m = R(ke()), v = be(), g = mt(), L = St(), M = wt(), z = R(qt);
  function R(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function N(f) {
    "@babel/helpers - typeof";
    return N = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
      return typeof d;
    } : function(d) {
      return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
    }, N(f);
  }
  function Y() {
    return Y = Object.assign ? Object.assign.bind() : function(f) {
      for (var d = 1; d < arguments.length; d++) {
        var _ = arguments[d];
        for (var P in _)
          ({}).hasOwnProperty.call(_, P) && (f[P] = _[P]);
      }
      return f;
    }, Y.apply(null, arguments);
  }
  function Q(f, d) {
    if (f == null) return {};
    var _, P, t = ee(f, d);
    if (Object.getOwnPropertySymbols) {
      var U = Object.getOwnPropertySymbols(f);
      for (P = 0; P < U.length; P++)
        _ = U[P], d.includes(_) || {}.propertyIsEnumerable.call(f, _) && (t[_] = f[_]);
    }
    return t;
  }
  function ee(f, d) {
    if (f == null) return {};
    var _ = {};
    for (var P in f)
      if ({}.hasOwnProperty.call(f, P)) {
        if (d.includes(P)) continue;
        _[P] = f[P];
      }
    return _;
  }
  function X(f, d) {
    var _ = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var P = Object.getOwnPropertySymbols(f);
      d && (P = P.filter(function(t) {
        return Object.getOwnPropertyDescriptor(f, t).enumerable;
      })), _.push.apply(_, P);
    }
    return _;
  }
  function b(f) {
    for (var d = 1; d < arguments.length; d++) {
      var _ = arguments[d] != null ? arguments[d] : {};
      d % 2 ? X(Object(_), !0).forEach(function(P) {
        r(f, P, _[P]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(_)) : X(Object(_)).forEach(function(P) {
        Object.defineProperty(f, P, Object.getOwnPropertyDescriptor(_, P));
      });
    }
    return f;
  }
  function $(f, d) {
    if (!(f instanceof d)) throw new TypeError("Cannot call a class as a function");
  }
  function D(f, d) {
    for (var _ = 0; _ < d.length; _++) {
      var P = d[_];
      P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(f, y(P.key), P);
    }
  }
  function Z(f, d, _) {
    return d && D(f.prototype, d), Object.defineProperty(f, "prototype", { writable: !1 }), f;
  }
  function G(f, d) {
    if (typeof d != "function" && d !== null) throw new TypeError("Super expression must either be null or a function");
    f.prototype = Object.create(d && d.prototype, { constructor: { value: f, writable: !0, configurable: !0 } }), Object.defineProperty(f, "prototype", { writable: !1 }), d && q(f, d);
  }
  function q(f, d) {
    return q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(_, P) {
      return _.__proto__ = P, _;
    }, q(f, d);
  }
  function a(f) {
    var d = O();
    return function() {
      var _, P = s(f);
      if (d) {
        var t = s(this).constructor;
        _ = Reflect.construct(P, arguments, t);
      } else _ = P.apply(this, arguments);
      return l(this, _);
    };
  }
  function l(f, d) {
    if (d && (N(d) == "object" || typeof d == "function")) return d;
    if (d !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return u(f);
  }
  function u(f) {
    if (f === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return f;
  }
  function O() {
    try {
      var f = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (O = function() {
      return !!f;
    })();
  }
  function s(f) {
    return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(d) {
      return d.__proto__ || Object.getPrototypeOf(d);
    }, s(f);
  }
  function r(f, d, _) {
    return (d = y(d)) in f ? Object.defineProperty(f, d, { value: _, enumerable: !0, configurable: !0, writable: !0 }) : f[d] = _, f;
  }
  function y(f) {
    var d = S(f, "string");
    return N(d) == "symbol" ? d : d + "";
  }
  function S(f, d) {
    if (N(f) != "object" || !f) return f;
    var _ = f[Symbol.toPrimitive];
    if (_ !== void 0) {
      var P = _.call(f, d);
      if (N(P) != "object") return P;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (d === "string" ? String : Number)(f);
  }
  return he.InnerSlider = /* @__PURE__ */ (function(f) {
    G(_, f);
    var d = a(_);
    function _(P) {
      var t;
      $(this, _), t = d.call(this, P), r(u(t), "listRefHandler", function(o) {
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
          var o = (0, v.getOnDemandLazySlides)(b(b({}, t.props), t.state));
          o.length > 0 && (t.setState(function(n) {
            return {
              lazyLoadedList: n.lazyLoadedList.concat(o)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(o));
        }
        var e = b({
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
        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach(function(o) {
          return clearTimeout(o);
        }), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
      }), r(u(t), "componentDidUpdate", function(o) {
        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
          var e = (0, v.getOnDemandLazySlides)(b(b({}, t.props), t.state));
          e.length > 0 && (t.setState(function(k) {
            return {
              lazyLoadedList: k.lazyLoadedList.concat(e)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(e));
        }
        t.adaptHeight();
        var n = b(b({
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
          var n = b(b({
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
        o = b(b(b({}, o), h), {}, {
          slideIndex: h.currentSlide
        });
        var k = (0, v.getTrackLeft)(o);
        o = b(b({}, o), {}, {
          left: k
        });
        var w = (0, v.getTrackCSS)(o);
        (e || i.default.Children.count(t.props.children) !== i.default.Children.count(o.children)) && (h.trackStyle = w), t.setState(h, n);
      }), r(u(t), "ssrInit", function() {
        if (t.props.variableWidth) {
          var o = 0, e = 0, n = [], h = (0, v.getPreClones)(b(b(b({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          })), k = (0, v.getPostClones)(b(b(b({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          }));
          t.props.children.forEach(function(re) {
            n.push(re.props.style.width), o += re.props.style.width;
          });
          for (var w = 0; w < h; w++)
            e += n[n.length - 1 - w], o += n[n.length - 1 - w];
          for (var T = 0; T < k; T++)
            o += n[T];
          for (var C = 0; C < t.state.currentSlide; C++)
            e += n[C];
          var j = {
            width: o + "px",
            left: -e + "px"
          };
          if (t.props.centerMode) {
            var H = "".concat(n[t.state.currentSlide], "px");
            j.left = "calc(".concat(j.left, " + (100% - ").concat(H, ") / 2 ) ");
          }
          return {
            trackStyle: j
          };
        }
        var W = i.default.Children.count(t.props.children), F = b(b(b({}, t.props), t.state), {}, {
          slideCount: W
        }), J = (0, v.getPreClones)(F) + (0, v.getPostClones)(F) + W, V = 100 / t.props.slidesToShow * J, B = 100 / J, A = -B * ((0, v.getPreClones)(F) + t.state.currentSlide) * V / 100;
        t.props.centerMode && (A += (100 - B * V / 100) / 2);
        var K = {
          width: V + "%",
          left: A + "%"
        };
        return {
          slideWidth: B + "%",
          trackStyle: K
        };
      }), r(u(t), "checkImagesLoad", function() {
        var o = t.list && t.list.querySelectorAll && t.list.querySelectorAll(".slick-slide img") || [], e = o.length, n = 0;
        Array.prototype.forEach.call(o, function(h) {
          var k = function() {
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
          } : (h.onload = k, h.onerror = function() {
            k(), t.props.onLazyLoadError && t.props.onLazyLoadError();
          }));
        });
      }), r(u(t), "progressiveLazyLoad", function() {
        for (var o = [], e = b(b({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, v.getPostClones)(e); n++)
          if (t.state.lazyLoadedList.indexOf(n) < 0) {
            o.push(n);
            break;
          }
        for (var h = t.state.currentSlide - 1; h >= -(0, v.getPreClones)(e); h--)
          if (t.state.lazyLoadedList.indexOf(h) < 0) {
            o.push(h);
            break;
          }
        o.length > 0 ? (t.setState(function(k) {
          return {
            lazyLoadedList: k.lazyLoadedList.concat(o)
          };
        }), t.props.onLazyLoad && t.props.onLazyLoad(o)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
      }), r(u(t), "slideHandler", function(o) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = t.props, h = n.asNavFor, k = n.beforeChange, w = n.onLazyLoad, T = n.speed, C = n.afterChange, j = t.state.currentSlide, H = (0, v.slideHandler)(b(b(b({
          index: o
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e
        })), W = H.state, F = H.nextState;
        if (W) {
          k && k(j, W.currentSlide);
          var J = W.lazyLoadedList.filter(function(V) {
            return t.state.lazyLoadedList.indexOf(V) < 0;
          });
          w && J.length > 0 && w(J), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), C && C(j), delete t.animationEndCallback), t.setState(W, function() {
            h && t.asNavForIndex !== o && (t.asNavForIndex = o, h.innerSlider.slideHandler(o)), F && (t.animationEndCallback = setTimeout(function() {
              var V = F.animating, B = Q(F, ["animating"]);
              t.setState(B, function() {
                t.callbackTimers.push(setTimeout(function() {
                  return t.setState({
                    animating: V
                  });
                }, 10)), C && C(W.currentSlide), delete t.animationEndCallback;
              });
            }, T));
          });
        }
      }), r(u(t), "changeSlide", function(o) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = b(b({}, t.props), t.state), h = (0, v.changeSlide)(n, o);
        if (!(h !== 0 && !h) && (e === !0 ? t.slideHandler(h, e) : t.slideHandler(h), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
          var k = t.list.querySelectorAll(".slick-current");
          k[0] && k[0].focus();
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
        var e = (0, v.swipeMove)(o, b(b(b({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(u(t), "swipeEnd", function(o) {
        var e = (0, v.swipeEnd)(o, b(b(b({}, t.props), t.state), {}, {
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
        else if ((0, v.canGoNext)(b(b({}, t.props), t.state)))
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
        var o = (0, m.default)("slick-slider", t.props.className, {
          "slick-vertical": t.props.vertical,
          "slick-initialized": !0
        }), e = b(b({}, t.props), t.state), n = (0, v.extractObject)(e, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), h = t.props.pauseOnHover;
        n = b(b({}, n), {}, {
          onMouseEnter: h ? t.onTrackOver : null,
          onMouseLeave: h ? t.onTrackLeave : null,
          onMouseOver: h ? t.onTrackOver : null,
          focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
        });
        var k;
        if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
          var w = (0, v.extractObject)(e, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), T = t.props.pauseOnDotsHover;
          w = b(b({}, w), {}, {
            clickHandler: t.changeSlide,
            onMouseEnter: T ? t.onDotsLeave : null,
            onMouseOver: T ? t.onDotsOver : null,
            onMouseLeave: T ? t.onDotsLeave : null
          }), k = /* @__PURE__ */ i.default.createElement(L.Dots, w);
        }
        var C, j, H = (0, v.extractObject)(e, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        H.clickHandler = t.changeSlide, t.props.arrows && (C = /* @__PURE__ */ i.default.createElement(M.PrevArrow, H), j = /* @__PURE__ */ i.default.createElement(M.NextArrow, H));
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
        var J = b(b({}, W), F), V = t.props.touchMove, B = {
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
        }, A = {
          className: o,
          dir: "ltr",
          style: t.props.style
        };
        return t.props.unslick && (B = {
          className: "slick-list"
        }, A = {
          className: o,
          style: t.props.style
        }), /* @__PURE__ */ i.default.createElement("div", A, t.props.unslick ? "" : C, /* @__PURE__ */ i.default.createElement("div", Y({
          ref: t.listRefHandler
        }, B), /* @__PURE__ */ i.default.createElement(g.Track, Y({
          ref: t.trackRefHandler
        }, n), t.props.children)), t.props.unslick ? "" : j, t.props.unslick ? "" : k);
      }), t.list = null, t.track = null, t.state = b(b({}, c.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: i.default.Children.count(t.props.children)
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      var U = t.ssrInit();
      return t.state = b(b({}, t.state), U), t;
    }
    return Z(_, [{
      key: "didPropsChange",
      value: function(t) {
        for (var U = !1, o = 0, e = Object.keys(this.props); o < e.length; o++) {
          var n = e[o];
          if (!t.hasOwnProperty(n)) {
            U = !0;
            break;
          }
          if (!(N(t[n]) === "object" || typeof t[n] == "function" || isNaN(t[n])) && t[n] !== this.props[n]) {
            U = !0;
            break;
          }
        }
        return U || i.default.Children.count(this.props.children) !== i.default.Children.count(t.children);
      }
    }]), _;
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
    return L.forEach(function(M, z) {
      var R = v[M];
      M = i(M), c(M) && typeof R == "number" && (R = R + "px"), R === !0 ? g += M : R === !1 ? g += "not " + M : g += "(" + M + ": " + R + ")", z < L.length - 1 && (g += " and ");
    }), g;
  }, m = function(v) {
    var g = "";
    return typeof v == "string" ? v : v instanceof Array ? (v.forEach(function(L, M) {
      g += p(L), M < v.length - 1 && (g += ", ");
    }), g) : p(v);
  };
  return Re = m, Re;
}
var Ze;
function Gt() {
  return Ze || (Ze = 1, (function(i) {
    var c = { NODE_ENV: "production" };
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var p = M(ue), m = Ft(), v = M(Bt()), g = M(rt()), L = be();
    function M(s) {
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
          for (var S in y)
            ({}).hasOwnProperty.call(y, S) && (s[S] = y[S]);
        }
        return s;
      }, R.apply(null, arguments);
    }
    function N(s, r) {
      var y = Object.keys(s);
      if (Object.getOwnPropertySymbols) {
        var S = Object.getOwnPropertySymbols(s);
        r && (S = S.filter(function(f) {
          return Object.getOwnPropertyDescriptor(s, f).enumerable;
        })), y.push.apply(y, S);
      }
      return y;
    }
    function Y(s) {
      for (var r = 1; r < arguments.length; r++) {
        var y = arguments[r] != null ? arguments[r] : {};
        r % 2 ? N(Object(y), !0).forEach(function(S) {
          l(s, S, y[S]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(y)) : N(Object(y)).forEach(function(S) {
          Object.defineProperty(s, S, Object.getOwnPropertyDescriptor(y, S));
        });
      }
      return s;
    }
    function Q(s, r) {
      if (!(s instanceof r)) throw new TypeError("Cannot call a class as a function");
    }
    function ee(s, r) {
      for (var y = 0; y < r.length; y++) {
        var S = r[y];
        S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(s, u(S.key), S);
      }
    }
    function X(s, r, y) {
      return r && ee(s.prototype, r), Object.defineProperty(s, "prototype", { writable: !1 }), s;
    }
    function b(s, r) {
      if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
      s.prototype = Object.create(r && r.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, "prototype", { writable: !1 }), r && $(s, r);
    }
    function $(s, r) {
      return $ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(y, S) {
        return y.__proto__ = S, y;
      }, $(s, r);
    }
    function D(s) {
      var r = q();
      return function() {
        var y, S = a(s);
        if (r) {
          var f = a(this).constructor;
          y = Reflect.construct(S, arguments, f);
        } else y = S.apply(this, arguments);
        return Z(this, y);
      };
    }
    function Z(s, r) {
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
      return (r = u(r)) in s ? Object.defineProperty(s, r, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : s[r] = y, s;
    }
    function u(s) {
      var r = O(s, "string");
      return z(r) == "symbol" ? r : r + "";
    }
    function O(s, r) {
      if (z(s) != "object" || !s) return s;
      var y = s[Symbol.toPrimitive];
      if (y !== void 0) {
        var S = y.call(s, r);
        if (z(S) != "object") return S;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(s);
    }
    i.default = /* @__PURE__ */ (function(s) {
      b(y, s);
      var r = D(y);
      function y(S) {
        var f;
        return Q(this, y), f = r.call(this, S), l(G(f), "innerSliderRefHandler", function(d) {
          return f.innerSlider = d;
        }), l(G(f), "slickPrev", function() {
          return f.innerSlider.slickPrev();
        }), l(G(f), "slickNext", function() {
          return f.innerSlider.slickNext();
        }), l(G(f), "slickGoTo", function(d) {
          var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return f.innerSlider.slickGoTo(d, _);
        }), l(G(f), "slickPause", function() {
          return f.innerSlider.pause("paused");
        }), l(G(f), "slickPlay", function() {
          return f.innerSlider.autoPlay("play");
        }), f.state = {
          breakpoint: null
        }, f._responsiveMediaHandlers = [], f;
      }
      return X(y, [{
        key: "media",
        value: function(f, d) {
          var _ = window.matchMedia(f), P = function(U) {
            var o = U.matches;
            o && d();
          };
          _.addListener(P), this._responsiveMediaHandlers.push({
            mql: _,
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
              t === 0 ? U = (0, v.default)({
                minWidth: 0,
                maxWidth: P
              }) : U = (0, v.default)({
                minWidth: d[t - 1] + 1,
                maxWidth: P
              }), (0, L.canUseDOM)() && f.media(U, function() {
                f.setState({
                  breakpoint: P
                });
              });
            });
            var _ = (0, v.default)({
              minWidth: d.slice(-1)[0]
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
          var f = this, d, _;
          this.state.breakpoint ? (_ = this.props.responsive.filter(function(T) {
            return T.breakpoint === f.state.breakpoint;
          }), d = _[0].settings === "unslick" ? "unslick" : Y(Y(Y({}, g.default), this.props), _[0].settings)) : d = Y(Y({}, g.default), this.props), d.centerMode && (d.slidesToScroll > 1 && c.NODE_ENV, d.slidesToScroll = 1), d.fade && (d.slidesToShow > 1 && c.NODE_ENV, d.slidesToScroll > 1 && c.NODE_ENV, d.slidesToShow = 1, d.slidesToScroll = 1);
          var P = p.default.Children.toArray(this.props.children);
          P = P.filter(function(T) {
            return typeof T == "string" ? !!T.trim() : !!T;
          }), d.variableWidth && (d.rows > 1 || d.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), d.variableWidth = !1);
          for (var t = [], U = null, o = 0; o < P.length; o += d.rows * d.slidesPerRow) {
            for (var e = [], n = o; n < o + d.rows * d.slidesPerRow; n += d.slidesPerRow) {
              for (var h = [], k = n; k < n + d.slidesPerRow && (d.variableWidth && P[k].props.style && (U = P[k].props.style.width), !(k >= P.length)); k += 1)
                h.push(/* @__PURE__ */ p.default.cloneElement(P[k], {
                  key: 100 * o + 10 * n + k,
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
            var w = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ p.default.createElement("div", {
              className: w
            }, P);
          } else t.length <= d.slidesToShow && (d.unslick = !0);
          return /* @__PURE__ */ p.default.createElement(m.InnerSlider, R({
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
    function p(m) {
      return m && m.__esModule ? m : { default: m };
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
  bodySmall: m,
  iconUrl: v,
  author: g,
  authorTitle: L,
  textColor: M = "text-primary",
  className: z = "",
  ...R
}) {
  const N = `w-full  ${z}`.trim();
  return /* @__PURE__ */ E("div", { className: N, ...R, ...R.attributes || {}, children: /* @__PURE__ */ fe("div", { className: `flex flex-col gap-textmedia-btn-text--spacing-y text-left items-start ${M}`, children: [
    /* @__PURE__ */ fe("div", { className: "flex flex-col gap-testimonial-spacing-y", children: [
      i && /* @__PURE__ */ E("p", { className: "text-body-88 font-semibold", children: i }),
      (c || p || m) && /* @__PURE__ */ fe("div", { className: "flex flex-col items-start", children: [
        c && /* @__PURE__ */ E("p", { className: "text-body-large", children: c }),
        p && /* @__PURE__ */ E("p", { className: "text-body-default", children: p }),
        m && /* @__PURE__ */ E("p", { className: "text-body-small", children: m })
      ] })
    ] }),
    v && /* @__PURE__ */ E("div", { className: "flex items-center justify-start", children: /* @__PURE__ */ E(
      "img",
      {
        src: v,
        alt: p || "Icon",
        className: "w-[129px]"
      }
    ) }),
    (g || L) && /* @__PURE__ */ fe("div", { className: "flex flex-col items-start gap-4 mt-4", children: [
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
  imageUrl: m,
  videoUrl: v,
  lottieUrl: g,
  lottieData: L,
  iframeUrl: M,
  flipbookUrl: z,
  title: R,
  className: N = ""
}) => {
  var l;
  const Y = typeof window < "u" && window.location.origin.indexOf("author") > -1, Q = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, X = `relative w-full h-full ${c === "square" ? "aspect-square" : c === "rectangle" ? "aspect-[4/3]" : i === "video" ? "aspect-video" : ""}`.trim(), b = c === "default" ? `w-full h-full ${N}`.trim() : `absolute inset-0 w-full h-full ${N}`.trim(), $ = "w-full h-full", D = c === "default" ? `${b}`.trim() : b, Z = p === "contain" ? "object-contain" : "object-cover", G = p === "contain" ? "xMidYMid meet" : "xMidYMid slice", q = `relative w-full ${N}`.trim(), a = "w-full min-h-[280px]";
  switch (i) {
    case "image":
      if (m)
        return /* @__PURE__ */ E("div", { className: X, children: /* @__PURE__ */ E(
          "img",
          {
            src: m,
            alt: R || "Media image",
            className: `${Z} ${b}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (v) {
        const u = v.includes("youtube.com/watch") || v.includes("youtu.be/");
        let O = v;
        u && (O = `https://www.youtube.com/embed/${v.includes("youtu.be/") ? v.split("youtu.be/")[1].split("?")[0] : (l = v.split("v=")[1]) == null ? void 0 : l.split("&")[0]}`);
        const s = (() => {
          if (!u) return O;
          try {
            const r = new URL(O);
            return r.searchParams.set("autoplay", "0"), r.searchParams.set("mute", "0"), r.searchParams.set("playsinline", "1"), r.searchParams.set("controls", "1"), r.searchParams.set("rel", "0"), r.toString();
          } catch {
            return O.includes("?") ? O.includes("autoplay=") ? O : `${O}&autoplay=0` : `${O}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ E("div", { className: X, children: u ? /* @__PURE__ */ E(
          "iframe",
          {
            src: s,
            title: R || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${b} ${Z}`.trim()
          }
        ) : /* @__PURE__ */ E(
          "video",
          {
            className: `${b} ${Z}`.trim(),
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
        return Y ? /* @__PURE__ */ E("div", { className: X, role: "img", "aria-label": R || "Animation", children: /* @__PURE__ */ E(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${b}`.trim(),
            children: /* @__PURE__ */ E("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ E(
          "div",
          {
            className: X,
            role: "img",
            "aria-label": R || "Animation",
            children: /* @__PURE__ */ E("div", { className: `${b} overflow-hidden`.trim(), children: /* @__PURE__ */ E(
              vt,
              {
                animationData: L,
                loop: !Q,
                autoplay: !Q,
                className: $,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: G }
              }
            ) })
          }
        );
      if (g)
        return /* @__PURE__ */ E("div", { className: X, children: /* @__PURE__ */ E("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (M)
        return /* @__PURE__ */ E("div", { className: X, children: /* @__PURE__ */ E(
          "iframe",
          {
            src: M,
            title: R || "Iframe content",
            frameBorder: "0",
            className: `${D} ${Z}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (z)
        return Y ? /* @__PURE__ */ E("div", { className: q, role: "img", "aria-label": R || "Flipbook", children: /* @__PURE__ */ E(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${a}`.trim(),
            children: /* @__PURE__ */ E("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ E("div", { className: q, children: /* @__PURE__ */ E("div", { className: a, children: /* @__PURE__ */ E(ft, { fallback: /* @__PURE__ */ E("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ E(Vt, { pdfUrl: z, title: R, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ E("div", { className: X, children: /* @__PURE__ */ E("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${c === "default" ? "" : "absolute inset-0"}`.trim(), children: i ? `${i.charAt(0).toUpperCase() + i.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
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
function tt({ className: i, onClick: c, direction: p, variant: m = "dark-outlined" }) {
  const v = p === "next", g = et[m] || et["dark-outlined"], L = (i || "").split(" ").filter((M) => !["slick-arrow", "slick-next", "slick-prev"].includes(M)).join(" ");
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
  id: m = "",
  className: v = "",
  infinite: g = !1,
  textColor: L = "text-primary",
  arrowVariant: M = "dark-outlined"
}) {
  const [z, R] = ce(!1), N = (b) => ({
    cardTitle: b.cardTitle,
    bodyLarge: b.bodyLarge,
    bodyDefault: b.bodyDefault,
    bodySmall: b.bodySmall,
    imageUrl: b.imageUrl,
    iconUrl: b.iconUrl,
    align: b.align ?? p,
    textColor: b.textColor ?? L,
    author: b.author,
    authorTitle: b.authorTitle,
    attributes: b.attributes || {}
  }), Y = (b, $ = "") => b ? /* @__PURE__ */ E("div", { className: "relative w-full h-full min-h-0 size-full overflow-hidden", children: /* @__PURE__ */ E("div", { className: "absolute inset-0 w-full h-full", children: /* @__PURE__ */ E(
    Jt,
    {
      media: b.type || "image",
      aspect: "default",
      imageUrl: b.imageUrl,
      videoUrl: b.videoUrl,
      lottieUrl: b.lottieUrl,
      lottieData: b.lottieData,
      iframeUrl: b.iframeUrl,
      title: b.title || $,
      className: "w-full h-full object-cover"
    }
  ) }) }) : null, Q = (b, $) => {
    const D = b.media || c, Z = !!D, G = Z ? "flex-1 min-w-0" : "w-full";
    return /* @__PURE__ */ fe("div", { className: "flex flex-col md:flex-row items-stretch text-gray-950", children: [
      Z && /* @__PURE__ */ E("div", { className: "sm:p-48 md:px-0", children: /* @__PURE__ */ E("div", { className: "w-full md:w-[300px] h-[340px] shrink-0 overflow-hidden rounded-[var(--spacing-cards-image--br)]", children: Y(D, b.bodyDefault || "") }) }),
      /* @__PURE__ */ E("div", { className: `flex items-center justify-center pt-40 sm:p-48 ${G}`, children: /* @__PURE__ */ E(Kt, { ...N(b) }) })
    ] }, $);
  }, ee = {
    className: "giftpro-cardandtext-slider",
    onInit: () => R(!0),
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
  const X = i.length > 1;
  return /* @__PURE__ */ E("div", { className: `container ${v}`, id: m, children: X ? /* @__PURE__ */ E(Xt, { ...ee, children: i.map((b, $) => /* @__PURE__ */ E("div", { children: Q(b, $) }, $)) }) : Q(i[0], 0) });
}
let ze, st, De, we;
const Qt = async () => {
  if (!we) {
    const i = await import("react-pdf");
    we = i.pdfjs, st = i.Document, De = i.Page, we.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${we.version}/build/pdf.worker.min.mjs`;
  }
}, er = async () => {
  ze || (ze = (await import("react-pageflip")).default);
}, tr = pt(({ children: i }, c) => /* @__PURE__ */ E("div", { ref: c, className: "w-full h-full overflow-hidden", children: i })), rr = ({ pdfUrl: i, title: c, width: p = 280, height: m = 280, className: v = "" }) => {
  const [g, L] = ce(0), [M, z] = ce(null), [R, N] = ce(!0), [Y, Q] = ce(m / p), [ee, X] = ce(0), b = dt(null);
  Ae(() => {
    Promise.all([Qt(), er()]).then(() => N(!1)).catch(() => {
      z("Failed to load flipbook");
    });
  }, []), Ae(() => {
    const q = b.current;
    if (!q) return;
    const a = new ResizeObserver(([l]) => {
      const u = Math.floor(l.contentRect.width);
      u > 0 && X(u);
    });
    return a.observe(q), () => a.disconnect();
  }, [R]);
  const $ = ee > 0 ? Math.floor(ee / 2) : Math.floor(p / 2), D = Math.round($ * Y), Z = He(async (q) => {
    try {
      const l = (await q.getPage(1)).getViewport({ scale: 1 });
      l != null && l.width && (l != null && l.height) && Q(l.height / l.width);
    } catch {
    }
    L(q.numPages || 0);
  }, []), G = He((q) => {
    z((q == null ? void 0 : q.message) || "Failed to load PDF");
  }, []);
  return M ? /* @__PURE__ */ E("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : R ? /* @__PURE__ */ E("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ E("div", { ref: b, className: `w-full ${v}`.trim(), children: /* @__PURE__ */ fe(
    st,
    {
      file: i,
      onLoadSuccess: Z,
      onLoadError: G,
      loading: /* @__PURE__ */ E("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        g === 1 && /* @__PURE__ */ E(
          "div",
          {
            className: `w-full flex justify-center items-center ${v}`.trim(),
            style: { minHeight: `${D}px` },
            children: /* @__PURE__ */ E(De, { pageNumber: 1, width: p, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        g > 1 && /* @__PURE__ */ E(
          ze,
          {
            width: $,
            height: D,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": c || "Flipbook",
            children: Array.from({ length: g }, (q, a) => /* @__PURE__ */ E(tr, { children: /* @__PURE__ */ E(De, { pageNumber: a + 1, width: $, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, a))
          },
          `${$}-${D}`
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
