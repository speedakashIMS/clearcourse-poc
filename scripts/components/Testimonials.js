import { jsx as O, jsxs as ae, Fragment as pt } from "react/jsx-runtime";
import * as se from "react";
import fe, { lazy as ht, Suspense as vt, useState as ve, useRef as yt, useEffect as qe, useCallback as $e, forwardRef as gt } from "react";
import mt from "lottie-react";
var we = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bt(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function St(i) {
  if (Object.prototype.hasOwnProperty.call(i, "__esModule")) return i;
  var l = i.default;
  if (typeof l == "function") {
    var f = function g() {
      return this instanceof g ? Reflect.construct(l, arguments, this.constructor) : l.apply(this, arguments);
    };
    f.prototype = l.prototype;
  } else f = {};
  return Object.defineProperty(f, "__esModule", { value: !0 }), Object.keys(i).forEach(function(g) {
    var p = Object.getOwnPropertyDescriptor(i, g);
    Object.defineProperty(f, g, p.get ? p : {
      enumerable: !0,
      get: function() {
        return i[g];
      }
    });
  }), f;
}
var xe = {}, Te = {}, ye = {}, je = {}, Fe;
function wt() {
  return Fe || (Fe = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var l = {
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
    i.default = l;
  })(je)), je;
}
var Le, Be;
function Ot() {
  if (Be) return Le;
  Be = 1;
  var i = "Expected a function", l = NaN, f = "[object Symbol]", g = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, E = /^0o[0-7]+$/i, M = parseInt, D = typeof we == "object" && we && we.Object === Object && we, R = typeof self == "object" && self && self.Object === Object && self, N = D || R || Function("return this")(), G = Object.prototype, K = G.toString, J = Math.max, W = Math.min, _ = function() {
    return N.Date.now();
  };
  function Y(s, c, o) {
    var b, a, r, y, S, d, h = 0, P = !1, C = !1, t = !0;
    if (typeof s != "function")
      throw new TypeError(i);
    c = H(c) || 0, z(o) && (P = !!o.leading, C = "maxWait" in o, r = C ? J(H(o.maxWait) || 0, c) : r, t = "trailing" in o ? !!o.trailing : t);
    function V(j) {
      var $ = b, F = a;
      return b = a = void 0, h = j, y = s.apply(F, $), y;
    }
    function u(j) {
      return h = j, S = setTimeout(v, c), P ? V(j) : y;
    }
    function e(j) {
      var $ = j - d, F = j - h, B = c - $;
      return C ? W(B, r - F) : B;
    }
    function n(j) {
      var $ = j - d, F = j - h;
      return d === void 0 || $ >= c || $ < 0 || C && F >= r;
    }
    function v() {
      var j = _();
      if (n(j))
        return k(j);
      S = setTimeout(v, e(j));
    }
    function k(j) {
      return S = void 0, t && b ? V(j) : (b = a = void 0, y);
    }
    function w() {
      S !== void 0 && clearTimeout(S), h = 0, b = d = a = S = void 0;
    }
    function T() {
      return S === void 0 ? y : k(_());
    }
    function x() {
      var j = _(), $ = n(j);
      if (b = arguments, a = this, d = j, $) {
        if (S === void 0)
          return u(d);
        if (C)
          return S = setTimeout(v, c), V(d);
      }
      return S === void 0 && (S = setTimeout(v, c)), y;
    }
    return x.cancel = w, x.flush = T, x;
  }
  function z(s) {
    var c = typeof s;
    return !!s && (c == "object" || c == "function");
  }
  function U(s) {
    return !!s && typeof s == "object";
  }
  function q(s) {
    return typeof s == "symbol" || U(s) && K.call(s) == f;
  }
  function H(s) {
    if (typeof s == "number")
      return s;
    if (q(s))
      return l;
    if (z(s)) {
      var c = typeof s.valueOf == "function" ? s.valueOf() : s;
      s = z(c) ? c + "" : c;
    }
    if (typeof s != "string")
      return s === 0 ? s : +s;
    s = s.replace(g, "");
    var o = m.test(s);
    return o || E.test(s) ? M(s.slice(2), o ? 2 : 8) : p.test(s) ? l : +s;
  }
  return Le = Y, Le;
}
var Ee = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ge;
function ke() {
  return Ge || (Ge = 1, (function(i) {
    (function() {
      var l = {}.hasOwnProperty;
      function f() {
        for (var m = "", E = 0; E < arguments.length; E++) {
          var M = arguments[E];
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
        var E = "";
        for (var M in m)
          l.call(m, M) && m[M] && (E = p(E, M));
        return E;
      }
      function p(m, E) {
        return E ? m ? m + " " + E : m + E : m;
      }
      i.exports ? (f.default = f, i.exports = f) : window.classNames = f;
    })();
  })(Ee)), Ee.exports;
}
var L = {}, Me = {}, Ye;
function ot() {
  return Ye || (Ye = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var l = f(fe);
    function f(p) {
      return p && p.__esModule ? p : { default: p };
    }
    var g = {
      accessibility: !0,
      adaptiveHeight: !1,
      afterChange: null,
      appendDots: function(m) {
        return /* @__PURE__ */ l.default.createElement("ul", {
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
        return /* @__PURE__ */ l.default.createElement("button", null, m + 1);
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
    i.default = g;
  })(Me)), Me;
}
var Xe;
function be() {
  if (Xe) return L;
  Xe = 1, Object.defineProperty(L, "__esModule", {
    value: !0
  }), L.checkSpecKeys = L.checkNavigable = L.changeSlide = L.canUseDOM = L.canGoNext = void 0, L.clamp = R, L.extractObject = void 0, L.filterSettings = V, L.validSettings = L.swipeStart = L.swipeMove = L.swipeEnd = L.slidesOnRight = L.slidesOnLeft = L.slideHandler = L.siblingDirection = L.safePreventDefault = L.lazyStartIndex = L.lazySlidesOnRight = L.lazySlidesOnLeft = L.lazyEndIndex = L.keyHandler = L.initializedState = L.getWidth = L.getTrackLeft = L.getTrackCSS = L.getTrackAnimateCSS = L.getTotalSlides = L.getSwipeDirection = L.getSlideCount = L.getRequiredLazySlides = L.getPreClones = L.getPostClones = L.getOnDemandLazySlides = L.getNavigableIndexes = L.getHeight = void 0;
  var i = f(fe), l = f(ot());
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
      e && (v = v.filter(function(k) {
        return Object.getOwnPropertyDescriptor(u, k).enumerable;
      })), n.push.apply(n, v);
    }
    return n;
  }
  function m(u) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2 ? p(Object(n), !0).forEach(function(v) {
        E(u, v, n[v]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(v) {
        Object.defineProperty(u, v, Object.getOwnPropertyDescriptor(n, v));
      });
    }
    return u;
  }
  function E(u, e, n) {
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
  var N = L.safePreventDefault = function(e) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(e._reactName) || e.preventDefault();
  }, G = L.getOnDemandLazySlides = function(e) {
    for (var n = [], v = K(e), k = J(e), w = v; w < k; w++)
      e.lazyLoadedList.indexOf(w) < 0 && n.push(w);
    return n;
  };
  L.getRequiredLazySlides = function(e) {
    for (var n = [], v = K(e), k = J(e), w = v; w < k; w++)
      n.push(w);
    return n;
  };
  var K = L.lazyStartIndex = function(e) {
    return e.currentSlide - W(e);
  }, J = L.lazyEndIndex = function(e) {
    return e.currentSlide + _(e);
  }, W = L.lazySlidesOnLeft = function(e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }, _ = L.lazySlidesOnRight = function(e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }, Y = L.getWidth = function(e) {
    return e && e.offsetWidth || 0;
  }, z = L.getHeight = function(e) {
    return e && e.offsetHeight || 0;
  }, U = L.getSwipeDirection = function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, v, k, w, T;
    return v = e.startX - e.curX, k = e.startY - e.curY, w = Math.atan2(k, v), T = Math.round(w * 180 / Math.PI), T < 0 && (T = 360 - Math.abs(T)), T <= 45 && T >= 0 || T <= 360 && T >= 315 ? "left" : T >= 135 && T <= 225 ? "right" : n === !0 ? T >= 35 && T <= 135 ? "up" : "down" : "vertical";
  }, q = L.canGoNext = function(e) {
    var n = !0;
    return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (n = !1), n;
  };
  L.extractObject = function(e, n) {
    var v = {};
    return n.forEach(function(k) {
      return v[k] = e[k];
    }), v;
  }, L.initializedState = function(e) {
    var n = i.default.Children.count(e.children), v = e.listRef, k = Math.ceil(Y(v)), w = e.trackRef && e.trackRef.node, T = Math.ceil(Y(w)), x;
    if (e.vertical)
      x = k;
    else {
      var j = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding == "string" && e.centerPadding.slice(-1) === "%" && (j *= k / 100), x = Math.ceil((k - j) / e.slidesToShow);
    }
    var $ = v && z(v.querySelector('[data-index="0"]')), F = $ * e.slidesToShow, B = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && (B = n - 1 - e.initialSlide);
    var ee = e.lazyLoadedList || [], Q = G(m(m({}, e), {}, {
      currentSlide: B,
      lazyLoadedList: ee
    }));
    ee = ee.concat(Q);
    var X = {
      slideCount: n,
      slideWidth: x,
      listWidth: k,
      trackWidth: T,
      currentSlide: B,
      slideHeight: $,
      listHeight: F,
      lazyLoadedList: ee
    };
    return e.autoplaying === null && e.autoplay && (X.autoplaying = "playing"), X;
  }, L.slideHandler = function(e) {
    var n = e.waitForAnimate, v = e.animating, k = e.fade, w = e.infinite, T = e.index, x = e.slideCount, j = e.lazyLoad, $ = e.currentSlide, F = e.centerMode, B = e.slidesToScroll, ee = e.slidesToShow, Q = e.useCSS, X = e.lazyLoadedList;
    if (n && v) return {};
    var A = T, Z, re, I, te = {}, ne = {}, ie = w ? T : R(T, 0, x - 1);
    if (k) {
      if (!w && (T < 0 || T >= x)) return {};
      T < 0 ? A = T + x : T >= x && (A = T - x), j && X.indexOf(A) < 0 && (X = X.concat(A)), te = {
        animating: !0,
        currentSlide: A,
        lazyLoadedList: X,
        targetSlide: A
      }, ne = {
        animating: !1,
        targetSlide: A
      };
    } else
      Z = A, A < 0 ? (Z = A + x, w ? x % B !== 0 && (Z = x - x % B) : Z = 0) : !q(e) && A > $ ? A = Z = $ : F && A >= x ? (A = w ? x : x - 1, Z = w ? 0 : x - 1) : A >= x && (Z = A - x, w ? x % B !== 0 && (Z = 0) : Z = x - ee), !w && A + ee >= x && (Z = x - ee), re = r(m(m({}, e), {}, {
        slideIndex: A
      })), I = r(m(m({}, e), {}, {
        slideIndex: Z
      })), w || (re === I && (A = Z), re = I), j && (X = X.concat(G(m(m({}, e), {}, {
        currentSlide: A
      })))), Q ? (te = {
        animating: !0,
        currentSlide: Z,
        trackStyle: a(m(m({}, e), {}, {
          left: re
        })),
        lazyLoadedList: X,
        targetSlide: ie
      }, ne = {
        animating: !1,
        currentSlide: Z,
        trackStyle: b(m(m({}, e), {}, {
          left: I
        })),
        swipeLeft: null,
        targetSlide: ie
      }) : te = {
        currentSlide: Z,
        trackStyle: b(m(m({}, e), {}, {
          left: I
        })),
        lazyLoadedList: X,
        targetSlide: ie
      };
    return {
      state: te,
      nextState: ne
    };
  }, L.changeSlide = function(e, n) {
    var v, k, w, T, x, j = e.slidesToScroll, $ = e.slidesToShow, F = e.slideCount, B = e.currentSlide, ee = e.targetSlide, Q = e.lazyLoad, X = e.infinite;
    if (T = F % j !== 0, v = T ? 0 : (F - B) % j, n.message === "previous")
      w = v === 0 ? j : $ - v, x = B - w, Q && !X && (k = B - w, x = k === -1 ? F - 1 : k), X || (x = ee - j);
    else if (n.message === "next")
      w = v === 0 ? j : v, x = B + w, Q && !X && (x = (B + j) % F + v), X || (x = ee + j);
    else if (n.message === "dots")
      x = n.index * n.slidesToScroll;
    else if (n.message === "children") {
      if (x = n.index, X) {
        var A = h(m(m({}, e), {}, {
          targetSlide: x
        }));
        x > n.currentSlide && A === "left" ? x = x - F : x < n.currentSlide && A === "right" && (x = x + F);
      }
    } else n.message === "index" && (x = Number(n.index));
    return x;
  }, L.keyHandler = function(e, n, v) {
    return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n ? "" : e.keyCode === 37 ? v ? "next" : "previous" : e.keyCode === 39 ? v ? "previous" : "next" : "";
  }, L.swipeStart = function(e, n, v) {
    return e.target.tagName === "IMG" && N(e), !n || !v && e.type.indexOf("mouse") !== -1 ? "" : {
      dragging: !0,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY
      }
    };
  }, L.swipeMove = function(e, n) {
    var v = n.scrolling, k = n.animating, w = n.vertical, T = n.swipeToSlide, x = n.verticalSwiping, j = n.rtl, $ = n.currentSlide, F = n.edgeFriction, B = n.edgeDragged, ee = n.onEdge, Q = n.swiped, X = n.swiping, A = n.slideCount, Z = n.slidesToScroll, re = n.infinite, I = n.touchObject, te = n.swipeEvent, ne = n.listHeight, ie = n.listWidth;
    if (!v) {
      if (k) return N(e);
      w && T && x && N(e);
      var oe, ue = {}, Se = r(n);
      I.curX = e.touches ? e.touches[0].pageX : e.clientX, I.curY = e.touches ? e.touches[0].pageY : e.clientY, I.swipeLength = Math.round(Math.sqrt(Math.pow(I.curX - I.startX, 2)));
      var We = Math.round(Math.sqrt(Math.pow(I.curY - I.startY, 2)));
      if (!x && !X && We > 10)
        return {
          scrolling: !0
        };
      x && (I.swipeLength = We);
      var pe = (j ? -1 : 1) * (I.curX > I.startX ? 1 : -1);
      x && (pe = I.curY > I.startY ? 1 : -1);
      var dt = Math.ceil(A / Z), le = U(n.touchObject, x), he = I.swipeLength;
      return re || ($ === 0 && (le === "right" || le === "down") || $ + 1 >= dt && (le === "left" || le === "up") || !q(n) && (le === "left" || le === "up")) && (he = I.swipeLength * F, B === !1 && ee && (ee(le), ue.edgeDragged = !0)), !Q && te && (te(le), ue.swiped = !0), w ? oe = Se + he * (ne / ie) * pe : j ? oe = Se - he * pe : oe = Se + he * pe, x && (oe = Se + he * pe), ue = m(m({}, ue), {}, {
        touchObject: I,
        swipeLeft: oe,
        trackStyle: b(m(m({}, n), {}, {
          left: oe
        }))
      }), Math.abs(I.curX - I.startX) < Math.abs(I.curY - I.startY) * 0.8 || I.swipeLength > 10 && (ue.swiping = !0, N(e)), ue;
    }
  }, L.swipeEnd = function(e, n) {
    var v = n.dragging, k = n.swipe, w = n.touchObject, T = n.listWidth, x = n.touchThreshold, j = n.verticalSwiping, $ = n.listHeight, F = n.swipeToSlide, B = n.scrolling, ee = n.onSwipe, Q = n.targetSlide, X = n.currentSlide, A = n.infinite;
    if (!v)
      return k && N(e), {};
    var Z = j ? $ / x : T / x, re = U(w, j), I = {
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
    if (w.swipeLength > Z) {
      N(e), ee && ee(re);
      var te, ne, ie = A ? X : Q;
      switch (re) {
        case "left":
        case "up":
          ne = ie + c(n), te = F ? s(n, ne) : ne, I.currentDirection = 0;
          break;
        case "right":
        case "down":
          ne = ie - c(n), te = F ? s(n, ne) : ne, I.currentDirection = 1;
          break;
        default:
          te = ie;
      }
      I.triggerSlideHandler = te;
    } else {
      var oe = r(n);
      I.trackStyle = a(m(m({}, n), {}, {
        left: oe
      }));
    }
    return I;
  };
  var H = L.getNavigableIndexes = function(e) {
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, v = e.infinite ? e.slidesToShow * -1 : 0, k = e.infinite ? e.slidesToShow * -1 : 0, w = []; v < n; )
      w.push(v), v = k + e.slidesToScroll, k += Math.min(e.slidesToScroll, e.slidesToShow);
    return w;
  }, s = L.checkNavigable = function(e, n) {
    var v = H(e), k = 0;
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
  }, c = L.getSlideCount = function(e) {
    var n = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      var v, k = e.listRef, w = k.querySelectorAll && k.querySelectorAll(".slick-slide") || [];
      if (Array.from(w).every(function(j) {
        if (e.vertical) {
          if (j.offsetTop + z(j) / 2 > e.swipeLeft * -1)
            return v = j, !1;
        } else if (j.offsetLeft - n + Y(j) / 2 > e.swipeLeft * -1)
          return v = j, !1;
        return !0;
      }), !v)
        return 0;
      var T = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide, x = Math.abs(v.dataset.index - T) || 1;
      return x;
    } else
      return e.slidesToScroll;
  }, o = L.checkSpecKeys = function(e, n) {
    return n.reduce(function(v, k) {
      return v && e.hasOwnProperty(k);
    }, !0) ? null : console.error("Keys Missing:", e);
  }, b = L.getTrackCSS = function(e) {
    o(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
    var n, v;
    if (!e.vertical)
      n = d(e) * e.slideWidth;
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
      var T = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", x = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", j = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
      w = m(m({}, w), {}, {
        WebkitTransform: T,
        transform: x,
        msTransform: j
      });
    } else
      e.vertical ? w.top = e.left : w.left = e.left;
    return e.fade && (w = {
      opacity: 1
    }), n && (w.width = n), v && (w.height = v), window && !window.addEventListener && window.attachEvent && (e.vertical ? w.marginTop = e.left + "px" : w.marginLeft = e.left + "px"), w;
  }, a = L.getTrackAnimateCSS = function(e) {
    o(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var n = b(e);
    return e.useTransform ? (n.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, n.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? n.transition = "top " + e.speed + "ms " + e.cssEase : n.transition = "left " + e.speed + "ms " + e.cssEase, n;
  }, r = L.getTrackLeft = function(e) {
    if (e.unslick)
      return 0;
    o(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var n = e.slideIndex, v = e.trackRef, k = e.infinite, w = e.centerMode, T = e.slideCount, x = e.slidesToShow, j = e.slidesToScroll, $ = e.slideWidth, F = e.listWidth, B = e.variableWidth, ee = e.slideHeight, Q = e.fade, X = e.vertical, A = 0, Z, re, I = 0;
    if (Q || e.slideCount === 1)
      return 0;
    var te = 0;
    if (k ? (te = -y(e), T % j !== 0 && n + j > T && (te = -(n > T ? x - (n - T) : T % j)), w && (te += parseInt(x / 2))) : (T % j !== 0 && n + j > T && (te = x - T % j), w && (te = parseInt(x / 2))), A = te * $, I = te * ee, X ? Z = n * ee * -1 + I : Z = n * $ * -1 + A, B === !0) {
      var ne, ie = v && v.node;
      if (ne = n + y(e), re = ie && ie.childNodes[ne], Z = re ? re.offsetLeft * -1 : 0, w === !0) {
        ne = k ? n + y(e) : n, re = ie && ie.children[ne], Z = 0;
        for (var oe = 0; oe < ne; oe++)
          Z -= ie && ie.children[oe] && ie.children[oe].offsetWidth;
        Z -= parseInt(e.centerPadding), Z += re && (F - re.offsetWidth) / 2;
      }
    }
    return Z;
  }, y = L.getPreClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, S = L.getPostClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, d = L.getTotalSlides = function(e) {
    return e.slideCount === 1 ? 1 : y(e) + e.slideCount + S(e);
  }, h = L.siblingDirection = function(e) {
    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + P(e) ? "left" : "right" : e.targetSlide < e.currentSlide - C(e) ? "right" : "left";
  }, P = L.slidesOnRight = function(e) {
    var n = e.slidesToShow, v = e.centerMode, k = e.rtl, w = e.centerPadding;
    if (v) {
      var T = (n - 1) / 2 + 1;
      return parseInt(w) > 0 && (T += 1), k && n % 2 === 0 && (T += 1), T;
    }
    return k ? 0 : n - 1;
  }, C = L.slidesOnLeft = function(e) {
    var n = e.slidesToShow, v = e.centerMode, k = e.rtl, w = e.centerPadding;
    if (v) {
      var T = (n - 1) / 2 + 1;
      return parseInt(w) > 0 && (T += 1), !k && n % 2 === 0 && (T += 1), T;
    }
    return k ? n - 1 : 0;
  };
  L.canUseDOM = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  };
  var t = L.validSettings = Object.keys(l.default);
  function V(u) {
    return t.reduce(function(e, n) {
      return u.hasOwnProperty(n) && (e[n] = u[n]), e;
    }, {});
  }
  return L;
}
var ge = {}, Ke;
function _t() {
  if (Ke) return ge;
  Ke = 1, Object.defineProperty(ge, "__esModule", {
    value: !0
  }), ge.Track = void 0;
  var i = g(fe), l = g(ke()), f = be();
  function g(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function p(a) {
    "@babel/helpers - typeof";
    return p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, p(a);
  }
  function m() {
    return m = Object.assign ? Object.assign.bind() : function(a) {
      for (var r = 1; r < arguments.length; r++) {
        var y = arguments[r];
        for (var S in y)
          ({}).hasOwnProperty.call(y, S) && (a[S] = y[S]);
      }
      return a;
    }, m.apply(null, arguments);
  }
  function E(a, r) {
    if (!(a instanceof r)) throw new TypeError("Cannot call a class as a function");
  }
  function M(a, r) {
    for (var y = 0; y < r.length; y++) {
      var S = r[y];
      S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(a, q(S.key), S);
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
    var r = W();
    return function() {
      var y, S = _(a);
      if (r) {
        var d = _(this).constructor;
        y = Reflect.construct(S, arguments, d);
      } else y = S.apply(this, arguments);
      return K(this, y);
    };
  }
  function K(a, r) {
    if (r && (p(r) == "object" || typeof r == "function")) return r;
    if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return J(a);
  }
  function J(a) {
    if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a;
  }
  function W() {
    try {
      var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (W = function() {
      return !!a;
    })();
  }
  function _(a) {
    return _ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, _(a);
  }
  function Y(a, r) {
    var y = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var S = Object.getOwnPropertySymbols(a);
      r && (S = S.filter(function(d) {
        return Object.getOwnPropertyDescriptor(a, d).enumerable;
      })), y.push.apply(y, S);
    }
    return y;
  }
  function z(a) {
    for (var r = 1; r < arguments.length; r++) {
      var y = arguments[r] != null ? arguments[r] : {};
      r % 2 ? Y(Object(y), !0).forEach(function(S) {
        U(a, S, y[S]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(y)) : Y(Object(y)).forEach(function(S) {
        Object.defineProperty(a, S, Object.getOwnPropertyDescriptor(y, S));
      });
    }
    return a;
  }
  function U(a, r, y) {
    return (r = q(r)) in a ? Object.defineProperty(a, r, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : a[r] = y, a;
  }
  function q(a) {
    var r = H(a, "string");
    return p(r) == "symbol" ? r : r + "";
  }
  function H(a, r) {
    if (p(a) != "object" || !a) return a;
    var y = a[Symbol.toPrimitive];
    if (y !== void 0) {
      var S = y.call(a, r);
      if (p(S) != "object") return S;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(a);
  }
  var s = function(r) {
    var y, S, d, h, P;
    r.rtl ? P = r.slideCount - 1 - r.index : P = r.index, d = P < 0 || P >= r.slideCount, r.centerMode ? (h = Math.floor(r.slidesToShow / 2), S = (P - r.currentSlide) % r.slideCount === 0, P > r.currentSlide - h - 1 && P <= r.currentSlide + h && (y = !0)) : y = r.currentSlide <= P && P < r.currentSlide + r.slidesToShow;
    var C;
    r.targetSlide < 0 ? C = r.targetSlide + r.slideCount : r.targetSlide >= r.slideCount ? C = r.targetSlide - r.slideCount : C = r.targetSlide;
    var t = P === C;
    return {
      "slick-slide": !0,
      "slick-active": y,
      "slick-center": S,
      "slick-cloned": d,
      "slick-current": t
      // dubious in case of RTL
    };
  }, c = function(r) {
    var y = {};
    return (r.variableWidth === void 0 || r.variableWidth === !1) && (y.width = r.slideWidth), r.fade && (y.position = "relative", r.vertical ? y.top = -r.index * parseInt(r.slideHeight) : y.left = -r.index * parseInt(r.slideWidth), y.opacity = r.currentSlide === r.index ? 1 : 0, y.zIndex = r.currentSlide === r.index ? 999 : 998, r.useCSS && (y.transition = "opacity " + r.speed + "ms " + r.cssEase + ", visibility " + r.speed + "ms " + r.cssEase)), y;
  }, o = function(r, y) {
    return r.key || y;
  }, b = function(r) {
    var y, S = [], d = [], h = [], P = i.default.Children.count(r.children), C = (0, f.lazyStartIndex)(r), t = (0, f.lazyEndIndex)(r);
    return i.default.Children.forEach(r.children, function(V, u) {
      var e, n = {
        message: "children",
        index: u,
        slidesToScroll: r.slidesToScroll,
        currentSlide: r.currentSlide
      };
      !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(u) >= 0 ? e = V : e = /* @__PURE__ */ i.default.createElement("div", null);
      var v = c(z(z({}, r), {}, {
        index: u
      })), k = e.props.className || "", w = s(z(z({}, r), {}, {
        index: u
      }));
      if (S.push(/* @__PURE__ */ i.default.cloneElement(e, {
        key: "original" + o(e, u),
        "data-index": u,
        className: (0, l.default)(w, k),
        tabIndex: "-1",
        "aria-hidden": !w["slick-active"],
        style: z(z({
          outline: "none"
        }, e.props.style || {}), v),
        onClick: function(j) {
          e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
        }
      })), r.infinite && P > 1 && r.fade === !1 && !r.unslick) {
        var T = P - u;
        T <= (0, f.getPreClones)(r) && (y = -T, y >= C && (e = V), w = s(z(z({}, r), {}, {
          index: y
        })), d.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "precloned" + o(e, y),
          "data-index": y,
          tabIndex: "-1",
          className: (0, l.default)(w, k),
          "aria-hidden": !w["slick-active"],
          style: z(z({}, e.props.style || {}), v),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        }))), u < (0, f.getPostClones)(r) && (y = P + u, y < t && (e = V), w = s(z(z({}, r), {}, {
          index: y
        })), h.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "postcloned" + o(e, y),
          "data-index": y,
          tabIndex: "-1",
          className: (0, l.default)(w, k),
          "aria-hidden": !w["slick-active"],
          style: z(z({}, e.props.style || {}), v),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        })));
      }
    }), r.rtl ? d.concat(S, h).reverse() : d.concat(S, h);
  };
  return ge.Track = /* @__PURE__ */ (function(a) {
    R(y, a);
    var r = G(y);
    function y() {
      var S;
      E(this, y);
      for (var d = arguments.length, h = new Array(d), P = 0; P < d; P++)
        h[P] = arguments[P];
      return S = r.call.apply(r, [this].concat(h)), U(J(S), "node", null), U(J(S), "handleRef", function(C) {
        S.node = C;
      }), S;
    }
    return D(y, [{
      key: "render",
      value: function() {
        var d = b(this.props), h = this.props, P = h.onMouseEnter, C = h.onMouseOver, t = h.onMouseLeave, V = {
          onMouseEnter: P,
          onMouseOver: C,
          onMouseLeave: t
        };
        return /* @__PURE__ */ i.default.createElement("div", m({
          ref: this.handleRef,
          className: "slick-track",
          style: this.props.trackStyle
        }, V), d);
      }
    }]), y;
  })(i.default.PureComponent), ge;
}
var me = {}, Ue;
function Pt() {
  if (Ue) return me;
  Ue = 1;
  function i(s) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(c) {
      return typeof c;
    } : function(c) {
      return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
    }, i(s);
  }
  Object.defineProperty(me, "__esModule", {
    value: !0
  }), me.Dots = void 0;
  var l = p(fe), f = p(ke()), g = be();
  function p(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function m(s, c) {
    var o = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
      var b = Object.getOwnPropertySymbols(s);
      c && (b = b.filter(function(a) {
        return Object.getOwnPropertyDescriptor(s, a).enumerable;
      })), o.push.apply(o, b);
    }
    return o;
  }
  function E(s) {
    for (var c = 1; c < arguments.length; c++) {
      var o = arguments[c] != null ? arguments[c] : {};
      c % 2 ? m(Object(o), !0).forEach(function(b) {
        M(s, b, o[b]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o)) : m(Object(o)).forEach(function(b) {
        Object.defineProperty(s, b, Object.getOwnPropertyDescriptor(o, b));
      });
    }
    return s;
  }
  function M(s, c, o) {
    return (c = G(c)) in s ? Object.defineProperty(s, c, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : s[c] = o, s;
  }
  function D(s, c) {
    if (!(s instanceof c)) throw new TypeError("Cannot call a class as a function");
  }
  function R(s, c) {
    for (var o = 0; o < c.length; o++) {
      var b = c[o];
      b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(s, G(b.key), b);
    }
  }
  function N(s, c, o) {
    return c && R(s.prototype, c), Object.defineProperty(s, "prototype", { writable: !1 }), s;
  }
  function G(s) {
    var c = K(s, "string");
    return i(c) == "symbol" ? c : c + "";
  }
  function K(s, c) {
    if (i(s) != "object" || !s) return s;
    var o = s[Symbol.toPrimitive];
    if (o !== void 0) {
      var b = o.call(s, c);
      if (i(b) != "object") return b;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(s);
  }
  function J(s, c) {
    if (typeof c != "function" && c !== null) throw new TypeError("Super expression must either be null or a function");
    s.prototype = Object.create(c && c.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, "prototype", { writable: !1 }), c && W(s, c);
  }
  function W(s, c) {
    return W = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, b) {
      return o.__proto__ = b, o;
    }, W(s, c);
  }
  function _(s) {
    var c = U();
    return function() {
      var o, b = q(s);
      if (c) {
        var a = q(this).constructor;
        o = Reflect.construct(b, arguments, a);
      } else o = b.apply(this, arguments);
      return Y(this, o);
    };
  }
  function Y(s, c) {
    if (c && (i(c) == "object" || typeof c == "function")) return c;
    if (c !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return z(s);
  }
  function z(s) {
    if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s;
  }
  function U() {
    try {
      var s = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (U = function() {
      return !!s;
    })();
  }
  function q(s) {
    return q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(c) {
      return c.__proto__ || Object.getPrototypeOf(c);
    }, q(s);
  }
  var H = function(c) {
    var o;
    return c.infinite ? o = Math.ceil(c.slideCount / c.slidesToScroll) : o = Math.ceil((c.slideCount - c.slidesToShow) / c.slidesToScroll) + 1, o;
  };
  return me.Dots = /* @__PURE__ */ (function(s) {
    J(o, s);
    var c = _(o);
    function o() {
      return D(this, o), c.apply(this, arguments);
    }
    return N(o, [{
      key: "clickHandler",
      value: function(a, r) {
        r.preventDefault(), this.props.clickHandler(a);
      }
    }, {
      key: "render",
      value: function() {
        for (var a = this.props, r = a.onMouseEnter, y = a.onMouseOver, S = a.onMouseLeave, d = a.infinite, h = a.slidesToScroll, P = a.slidesToShow, C = a.slideCount, t = a.currentSlide, V = H({
          slideCount: C,
          slidesToScroll: h,
          slidesToShow: P,
          infinite: d
        }), u = {
          onMouseEnter: r,
          onMouseOver: y,
          onMouseLeave: S
        }, e = [], n = 0; n < V; n++) {
          var v = (n + 1) * h - 1, k = d ? v : (0, g.clamp)(v, 0, C - 1), w = k - (h - 1), T = d ? w : (0, g.clamp)(w, 0, C - 1), x = (0, f.default)({
            "slick-active": d ? t >= T && t <= k : t === T
          }), j = {
            message: "dots",
            index: n,
            slidesToScroll: h,
            currentSlide: t
          }, $ = this.clickHandler.bind(this, j);
          e = e.concat(/* @__PURE__ */ l.default.createElement("li", {
            key: n,
            className: x
          }, /* @__PURE__ */ l.default.cloneElement(this.props.customPaging(n), {
            onClick: $
          })));
        }
        return /* @__PURE__ */ l.default.cloneElement(this.props.appendDots(e), E({
          className: this.props.dotsClass
        }, u));
      }
    }]), o;
  })(l.default.PureComponent), me;
}
var ce = {}, Ve;
function kt() {
  if (Ve) return ce;
  Ve = 1;
  function i(s) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(c) {
      return typeof c;
    } : function(c) {
      return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
    }, i(s);
  }
  Object.defineProperty(ce, "__esModule", {
    value: !0
  }), ce.PrevArrow = ce.NextArrow = void 0;
  var l = p(fe), f = p(ke()), g = be();
  function p(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function m() {
    return m = Object.assign ? Object.assign.bind() : function(s) {
      for (var c = 1; c < arguments.length; c++) {
        var o = arguments[c];
        for (var b in o)
          ({}).hasOwnProperty.call(o, b) && (s[b] = o[b]);
      }
      return s;
    }, m.apply(null, arguments);
  }
  function E(s, c) {
    var o = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
      var b = Object.getOwnPropertySymbols(s);
      c && (b = b.filter(function(a) {
        return Object.getOwnPropertyDescriptor(s, a).enumerable;
      })), o.push.apply(o, b);
    }
    return o;
  }
  function M(s) {
    for (var c = 1; c < arguments.length; c++) {
      var o = arguments[c] != null ? arguments[c] : {};
      c % 2 ? E(Object(o), !0).forEach(function(b) {
        D(s, b, o[b]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o)) : E(Object(o)).forEach(function(b) {
        Object.defineProperty(s, b, Object.getOwnPropertyDescriptor(o, b));
      });
    }
    return s;
  }
  function D(s, c, o) {
    return (c = K(c)) in s ? Object.defineProperty(s, c, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : s[c] = o, s;
  }
  function R(s, c) {
    if (!(s instanceof c)) throw new TypeError("Cannot call a class as a function");
  }
  function N(s, c) {
    for (var o = 0; o < c.length; o++) {
      var b = c[o];
      b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(s, K(b.key), b);
    }
  }
  function G(s, c, o) {
    return c && N(s.prototype, c), Object.defineProperty(s, "prototype", { writable: !1 }), s;
  }
  function K(s) {
    var c = J(s, "string");
    return i(c) == "symbol" ? c : c + "";
  }
  function J(s, c) {
    if (i(s) != "object" || !s) return s;
    var o = s[Symbol.toPrimitive];
    if (o !== void 0) {
      var b = o.call(s, c);
      if (i(b) != "object") return b;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(s);
  }
  function W(s, c) {
    if (typeof c != "function" && c !== null) throw new TypeError("Super expression must either be null or a function");
    s.prototype = Object.create(c && c.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, "prototype", { writable: !1 }), c && _(s, c);
  }
  function _(s, c) {
    return _ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, b) {
      return o.__proto__ = b, o;
    }, _(s, c);
  }
  function Y(s) {
    var c = q();
    return function() {
      var o, b = H(s);
      if (c) {
        var a = H(this).constructor;
        o = Reflect.construct(b, arguments, a);
      } else o = b.apply(this, arguments);
      return z(this, o);
    };
  }
  function z(s, c) {
    if (c && (i(c) == "object" || typeof c == "function")) return c;
    if (c !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return U(s);
  }
  function U(s) {
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
  function H(s) {
    return H = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(c) {
      return c.__proto__ || Object.getPrototypeOf(c);
    }, H(s);
  }
  return ce.PrevArrow = /* @__PURE__ */ (function(s) {
    W(o, s);
    var c = Y(o);
    function o() {
      return R(this, o), c.apply(this, arguments);
    }
    return G(o, [{
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
          className: (0, f.default)(a),
          style: {
            display: "block"
          },
          onClick: r
        }, S = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, d;
        return this.props.prevArrow ? d = /* @__PURE__ */ l.default.cloneElement(this.props.prevArrow, M(M({}, y), S)) : d = /* @__PURE__ */ l.default.createElement("button", m({
          key: "0",
          type: "button"
        }, y), " ", "Previous"), d;
      }
    }]), o;
  })(l.default.PureComponent), ce.NextArrow = /* @__PURE__ */ (function(s) {
    W(o, s);
    var c = Y(o);
    function o() {
      return R(this, o), c.apply(this, arguments);
    }
    return G(o, [{
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
        (0, g.canGoNext)(this.props) || (a["slick-disabled"] = !0, r = null);
        var y = {
          key: "1",
          "data-role": "none",
          className: (0, f.default)(a),
          style: {
            display: "block"
          },
          onClick: r
        }, S = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, d;
        return this.props.nextArrow ? d = /* @__PURE__ */ l.default.cloneElement(this.props.nextArrow, M(M({}, y), S)) : d = /* @__PURE__ */ l.default.createElement("button", m({
          key: "1",
          type: "button"
        }, y), " ", "Next"), d;
      }
    }]), o;
  })(l.default.PureComponent), ce;
}
var at = (function() {
  if (typeof Map < "u")
    return Map;
  function i(l, f) {
    var g = -1;
    return l.some(function(p, m) {
      return p[0] === f ? (g = m, !0) : !1;
    }), g;
  }
  return (
    /** @class */
    (function() {
      function l() {
        this.__entries__ = [];
      }
      return Object.defineProperty(l.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), l.prototype.get = function(f) {
        var g = i(this.__entries__, f), p = this.__entries__[g];
        return p && p[1];
      }, l.prototype.set = function(f, g) {
        var p = i(this.__entries__, f);
        ~p ? this.__entries__[p][1] = g : this.__entries__.push([f, g]);
      }, l.prototype.delete = function(f) {
        var g = this.__entries__, p = i(g, f);
        ~p && g.splice(p, 1);
      }, l.prototype.has = function(f) {
        return !!~i(this.__entries__, f);
      }, l.prototype.clear = function() {
        this.__entries__.splice(0);
      }, l.prototype.forEach = function(f, g) {
        g === void 0 && (g = null);
        for (var p = 0, m = this.__entries__; p < m.length; p++) {
          var E = m[p];
          f.call(g, E[1], E[0]);
        }
      }, l;
    })()
  );
})(), He = typeof window < "u" && typeof document < "u" && window.document === document, _e = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), Ct = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(_e) : function(i) {
    return setTimeout(function() {
      return i(Date.now());
    }, 1e3 / 60);
  };
})(), xt = 2;
function Tt(i, l) {
  var f = !1, g = !1, p = 0;
  function m() {
    f && (f = !1, i()), g && M();
  }
  function E() {
    Ct(m);
  }
  function M() {
    var D = Date.now();
    if (f) {
      if (D - p < xt)
        return;
      g = !0;
    } else
      f = !0, g = !1, setTimeout(E, l);
    p = D;
  }
  return M;
}
var jt = 20, Lt = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Et = typeof MutationObserver < "u", Mt = (
  /** @class */
  (function() {
    function i() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Tt(this.refresh.bind(this), jt);
    }
    return i.prototype.addObserver = function(l) {
      ~this.observers_.indexOf(l) || this.observers_.push(l), this.connected_ || this.connect_();
    }, i.prototype.removeObserver = function(l) {
      var f = this.observers_, g = f.indexOf(l);
      ~g && f.splice(g, 1), !f.length && this.connected_ && this.disconnect_();
    }, i.prototype.refresh = function() {
      var l = this.updateObservers_();
      l && this.refresh();
    }, i.prototype.updateObservers_ = function() {
      var l = this.observers_.filter(function(f) {
        return f.gatherActive(), f.hasActive();
      });
      return l.forEach(function(f) {
        return f.broadcastActive();
      }), l.length > 0;
    }, i.prototype.connect_ = function() {
      !He || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Et ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, i.prototype.disconnect_ = function() {
      !He || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, i.prototype.onTransitionEnd_ = function(l) {
      var f = l.propertyName, g = f === void 0 ? "" : f, p = Lt.some(function(m) {
        return !!~g.indexOf(m);
      });
      p && this.refresh();
    }, i.getInstance = function() {
      return this.instance_ || (this.instance_ = new i()), this.instance_;
    }, i.instance_ = null, i;
  })()
), lt = (function(i, l) {
  for (var f = 0, g = Object.keys(l); f < g.length; f++) {
    var p = g[f];
    Object.defineProperty(i, p, {
      value: l[p],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return i;
}), de = (function(i) {
  var l = i && i.ownerDocument && i.ownerDocument.defaultView;
  return l || _e;
}), st = Ce(0, 0, 0, 0);
function Pe(i) {
  return parseFloat(i) || 0;
}
function Ze(i) {
  for (var l = [], f = 1; f < arguments.length; f++)
    l[f - 1] = arguments[f];
  return l.reduce(function(g, p) {
    var m = i["border-" + p + "-width"];
    return g + Pe(m);
  }, 0);
}
function Rt(i) {
  for (var l = ["top", "right", "bottom", "left"], f = {}, g = 0, p = l; g < p.length; g++) {
    var m = p[g], E = i["padding-" + m];
    f[m] = Pe(E);
  }
  return f;
}
function Nt(i) {
  var l = i.getBBox();
  return Ce(0, 0, l.width, l.height);
}
function zt(i) {
  var l = i.clientWidth, f = i.clientHeight;
  if (!l && !f)
    return st;
  var g = de(i).getComputedStyle(i), p = Rt(g), m = p.left + p.right, E = p.top + p.bottom, M = Pe(g.width), D = Pe(g.height);
  if (g.boxSizing === "border-box" && (Math.round(M + m) !== l && (M -= Ze(g, "left", "right") + m), Math.round(D + E) !== f && (D -= Ze(g, "top", "bottom") + E)), !Ht(i)) {
    var R = Math.round(M + m) - l, N = Math.round(D + E) - f;
    Math.abs(R) !== 1 && (M -= R), Math.abs(N) !== 1 && (D -= N);
  }
  return Ce(p.left, p.top, M, D);
}
var Dt = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(i) {
    return i instanceof de(i).SVGGraphicsElement;
  } : function(i) {
    return i instanceof de(i).SVGElement && typeof i.getBBox == "function";
  };
})();
function Ht(i) {
  return i === de(i).document.documentElement;
}
function It(i) {
  return He ? Dt(i) ? Nt(i) : zt(i) : st;
}
function At(i) {
  var l = i.x, f = i.y, g = i.width, p = i.height, m = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, E = Object.create(m.prototype);
  return lt(E, {
    x: l,
    y: f,
    width: g,
    height: p,
    top: f,
    right: l + g,
    bottom: p + f,
    left: l
  }), E;
}
function Ce(i, l, f, g) {
  return { x: i, y: l, width: f, height: g };
}
var Wt = (
  /** @class */
  (function() {
    function i(l) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ce(0, 0, 0, 0), this.target = l;
    }
    return i.prototype.isActive = function() {
      var l = It(this.target);
      return this.contentRect_ = l, l.width !== this.broadcastWidth || l.height !== this.broadcastHeight;
    }, i.prototype.broadcastRect = function() {
      var l = this.contentRect_;
      return this.broadcastWidth = l.width, this.broadcastHeight = l.height, l;
    }, i;
  })()
), qt = (
  /** @class */
  /* @__PURE__ */ (function() {
    function i(l, f) {
      var g = At(f);
      lt(this, { target: l, contentRect: g });
    }
    return i;
  })()
), $t = (
  /** @class */
  (function() {
    function i(l, f, g) {
      if (this.activeObservations_ = [], this.observations_ = new at(), typeof l != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = l, this.controller_ = f, this.callbackCtx_ = g;
    }
    return i.prototype.observe = function(l) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(l instanceof de(l).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var f = this.observations_;
        f.has(l) || (f.set(l, new Wt(l)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, i.prototype.unobserve = function(l) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(l instanceof de(l).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var f = this.observations_;
        f.has(l) && (f.delete(l), f.size || this.controller_.removeObserver(this));
      }
    }, i.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, i.prototype.gatherActive = function() {
      var l = this;
      this.clearActive(), this.observations_.forEach(function(f) {
        f.isActive() && l.activeObservations_.push(f);
      });
    }, i.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var l = this.callbackCtx_, f = this.activeObservations_.map(function(g) {
          return new qt(g.target, g.broadcastRect());
        });
        this.callback_.call(l, f, l), this.clearActive();
      }
    }, i.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, i.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, i;
  })()
), ut = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new at(), ct = (
  /** @class */
  /* @__PURE__ */ (function() {
    function i(l) {
      if (!(this instanceof i))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var f = Mt.getInstance(), g = new $t(l, f, this);
      ut.set(this, g);
    }
    return i;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(i) {
  ct.prototype[i] = function() {
    var l;
    return (l = ut.get(this))[i].apply(l, arguments);
  };
});
var Ft = (function() {
  return typeof _e.ResizeObserver < "u" ? _e.ResizeObserver : ct;
})();
const Bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ft
}, Symbol.toStringTag, { value: "Module" })), Gt = /* @__PURE__ */ St(Bt);
var Qe;
function Yt() {
  if (Qe) return ye;
  Qe = 1, Object.defineProperty(ye, "__esModule", {
    value: !0
  }), ye.InnerSlider = void 0;
  var i = R(fe), l = R(wt()), f = R(Ot()), g = R(ke()), p = be(), m = _t(), E = Pt(), M = kt(), D = R(Gt);
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
  function G() {
    return G = Object.assign ? Object.assign.bind() : function(d) {
      for (var h = 1; h < arguments.length; h++) {
        var P = arguments[h];
        for (var C in P)
          ({}).hasOwnProperty.call(P, C) && (d[C] = P[C]);
      }
      return d;
    }, G.apply(null, arguments);
  }
  function K(d, h) {
    if (d == null) return {};
    var P, C, t = J(d, h);
    if (Object.getOwnPropertySymbols) {
      var V = Object.getOwnPropertySymbols(d);
      for (C = 0; C < V.length; C++)
        P = V[C], h.includes(P) || {}.propertyIsEnumerable.call(d, P) && (t[P] = d[P]);
    }
    return t;
  }
  function J(d, h) {
    if (d == null) return {};
    var P = {};
    for (var C in d)
      if ({}.hasOwnProperty.call(d, C)) {
        if (h.includes(C)) continue;
        P[C] = d[C];
      }
    return P;
  }
  function W(d, h) {
    var P = Object.keys(d);
    if (Object.getOwnPropertySymbols) {
      var C = Object.getOwnPropertySymbols(d);
      h && (C = C.filter(function(t) {
        return Object.getOwnPropertyDescriptor(d, t).enumerable;
      })), P.push.apply(P, C);
    }
    return P;
  }
  function _(d) {
    for (var h = 1; h < arguments.length; h++) {
      var P = arguments[h] != null ? arguments[h] : {};
      h % 2 ? W(Object(P), !0).forEach(function(C) {
        r(d, C, P[C]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(P)) : W(Object(P)).forEach(function(C) {
        Object.defineProperty(d, C, Object.getOwnPropertyDescriptor(P, C));
      });
    }
    return d;
  }
  function Y(d, h) {
    if (!(d instanceof h)) throw new TypeError("Cannot call a class as a function");
  }
  function z(d, h) {
    for (var P = 0; P < h.length; P++) {
      var C = h[P];
      C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(d, y(C.key), C);
    }
  }
  function U(d, h, P) {
    return h && z(d.prototype, h), Object.defineProperty(d, "prototype", { writable: !1 }), d;
  }
  function q(d, h) {
    if (typeof h != "function" && h !== null) throw new TypeError("Super expression must either be null or a function");
    d.prototype = Object.create(h && h.prototype, { constructor: { value: d, writable: !0, configurable: !0 } }), Object.defineProperty(d, "prototype", { writable: !1 }), h && H(d, h);
  }
  function H(d, h) {
    return H = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(P, C) {
      return P.__proto__ = C, P;
    }, H(d, h);
  }
  function s(d) {
    var h = b();
    return function() {
      var P, C = a(d);
      if (h) {
        var t = a(this).constructor;
        P = Reflect.construct(C, arguments, t);
      } else P = C.apply(this, arguments);
      return c(this, P);
    };
  }
  function c(d, h) {
    if (h && (N(h) == "object" || typeof h == "function")) return h;
    if (h !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return o(d);
  }
  function o(d) {
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
  function a(d) {
    return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(h) {
      return h.__proto__ || Object.getPrototypeOf(h);
    }, a(d);
  }
  function r(d, h, P) {
    return (h = y(h)) in d ? Object.defineProperty(d, h, { value: P, enumerable: !0, configurable: !0, writable: !0 }) : d[h] = P, d;
  }
  function y(d) {
    var h = S(d, "string");
    return N(h) == "symbol" ? h : h + "";
  }
  function S(d, h) {
    if (N(d) != "object" || !d) return d;
    var P = d[Symbol.toPrimitive];
    if (P !== void 0) {
      var C = P.call(d, h);
      if (N(C) != "object") return C;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (h === "string" ? String : Number)(d);
  }
  return ye.InnerSlider = /* @__PURE__ */ (function(d) {
    q(P, d);
    var h = s(P);
    function P(C) {
      var t;
      Y(this, P), t = h.call(this, C), r(o(t), "listRefHandler", function(u) {
        return t.list = u;
      }), r(o(t), "trackRefHandler", function(u) {
        return t.track = u;
      }), r(o(t), "adaptHeight", function() {
        if (t.props.adaptiveHeight && t.list) {
          var u = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
          t.list.style.height = (0, p.getHeight)(u) + "px";
        }
      }), r(o(t), "componentDidMount", function() {
        if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
          var u = (0, p.getOnDemandLazySlides)(_(_({}, t.props), t.state));
          u.length > 0 && (t.setState(function(n) {
            return {
              lazyLoadedList: n.lazyLoadedList.concat(u)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(u));
        }
        var e = _({
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
      }), r(o(t), "componentWillUnmount", function() {
        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach(function(u) {
          return clearTimeout(u);
        }), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
      }), r(o(t), "componentDidUpdate", function(u) {
        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
          var e = (0, p.getOnDemandLazySlides)(_(_({}, t.props), t.state));
          e.length > 0 && (t.setState(function(k) {
            return {
              lazyLoadedList: k.lazyLoadedList.concat(e)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(e));
        }
        t.adaptHeight();
        var n = _(_({
          listRef: t.list,
          trackRef: t.track
        }, t.props), t.state), v = t.didPropsChange(u);
        v && t.updateState(n, v, function() {
          t.state.currentSlide >= i.default.Children.count(t.props.children) && t.changeSlide({
            message: "index",
            index: i.default.Children.count(t.props.children) - t.props.slidesToShow,
            currentSlide: t.state.currentSlide
          }), t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
        });
      }), r(o(t), "onWindowResized", function(u) {
        t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, f.default)(function() {
          return t.resizeWindow(u);
        }, 50), t.debouncedResize();
      }), r(o(t), "resizeWindow", function() {
        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = !!(t.track && t.track.node);
        if (e) {
          var n = _(_({
            listRef: t.list,
            trackRef: t.track
          }, t.props), t.state);
          t.updateState(n, u, function() {
            t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
          }), t.setState({
            animating: !1
          }), clearTimeout(t.animationEndCallback), delete t.animationEndCallback;
        }
      }), r(o(t), "updateState", function(u, e, n) {
        var v = (0, p.initializedState)(u);
        u = _(_(_({}, u), v), {}, {
          slideIndex: v.currentSlide
        });
        var k = (0, p.getTrackLeft)(u);
        u = _(_({}, u), {}, {
          left: k
        });
        var w = (0, p.getTrackCSS)(u);
        (e || i.default.Children.count(t.props.children) !== i.default.Children.count(u.children)) && (v.trackStyle = w), t.setState(v, n);
      }), r(o(t), "ssrInit", function() {
        if (t.props.variableWidth) {
          var u = 0, e = 0, n = [], v = (0, p.getPreClones)(_(_(_({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          })), k = (0, p.getPostClones)(_(_(_({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          }));
          t.props.children.forEach(function(re) {
            n.push(re.props.style.width), u += re.props.style.width;
          });
          for (var w = 0; w < v; w++)
            e += n[n.length - 1 - w], u += n[n.length - 1 - w];
          for (var T = 0; T < k; T++)
            u += n[T];
          for (var x = 0; x < t.state.currentSlide; x++)
            e += n[x];
          var j = {
            width: u + "px",
            left: -e + "px"
          };
          if (t.props.centerMode) {
            var $ = "".concat(n[t.state.currentSlide], "px");
            j.left = "calc(".concat(j.left, " + (100% - ").concat($, ") / 2 ) ");
          }
          return {
            trackStyle: j
          };
        }
        var F = i.default.Children.count(t.props.children), B = _(_(_({}, t.props), t.state), {}, {
          slideCount: F
        }), ee = (0, p.getPreClones)(B) + (0, p.getPostClones)(B) + F, Q = 100 / t.props.slidesToShow * ee, X = 100 / ee, A = -X * ((0, p.getPreClones)(B) + t.state.currentSlide) * Q / 100;
        t.props.centerMode && (A += (100 - X * Q / 100) / 2);
        var Z = {
          width: Q + "%",
          left: A + "%"
        };
        return {
          slideWidth: X + "%",
          trackStyle: Z
        };
      }), r(o(t), "checkImagesLoad", function() {
        var u = t.list && t.list.querySelectorAll && t.list.querySelectorAll(".slick-slide img") || [], e = u.length, n = 0;
        Array.prototype.forEach.call(u, function(v) {
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
      }), r(o(t), "progressiveLazyLoad", function() {
        for (var u = [], e = _(_({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, p.getPostClones)(e); n++)
          if (t.state.lazyLoadedList.indexOf(n) < 0) {
            u.push(n);
            break;
          }
        for (var v = t.state.currentSlide - 1; v >= -(0, p.getPreClones)(e); v--)
          if (t.state.lazyLoadedList.indexOf(v) < 0) {
            u.push(v);
            break;
          }
        u.length > 0 ? (t.setState(function(k) {
          return {
            lazyLoadedList: k.lazyLoadedList.concat(u)
          };
        }), t.props.onLazyLoad && t.props.onLazyLoad(u)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
      }), r(o(t), "slideHandler", function(u) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = t.props, v = n.asNavFor, k = n.beforeChange, w = n.onLazyLoad, T = n.speed, x = n.afterChange, j = t.state.currentSlide, $ = (0, p.slideHandler)(_(_(_({
          index: u
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e
        })), F = $.state, B = $.nextState;
        if (F) {
          k && k(j, F.currentSlide);
          var ee = F.lazyLoadedList.filter(function(Q) {
            return t.state.lazyLoadedList.indexOf(Q) < 0;
          });
          w && ee.length > 0 && w(ee), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), x && x(j), delete t.animationEndCallback), t.setState(F, function() {
            v && t.asNavForIndex !== u && (t.asNavForIndex = u, v.innerSlider.slideHandler(u)), B && (t.animationEndCallback = setTimeout(function() {
              var Q = B.animating, X = K(B, ["animating"]);
              t.setState(X, function() {
                t.callbackTimers.push(setTimeout(function() {
                  return t.setState({
                    animating: Q
                  });
                }, 10)), x && x(F.currentSlide), delete t.animationEndCallback;
              });
            }, T));
          });
        }
      }), r(o(t), "changeSlide", function(u) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = _(_({}, t.props), t.state), v = (0, p.changeSlide)(n, u);
        if (!(v !== 0 && !v) && (e === !0 ? t.slideHandler(v, e) : t.slideHandler(v), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
          var k = t.list.querySelectorAll(".slick-current");
          k[0] && k[0].focus();
        }
      }), r(o(t), "clickHandler", function(u) {
        t.clickable === !1 && (u.stopPropagation(), u.preventDefault()), t.clickable = !0;
      }), r(o(t), "keyHandler", function(u) {
        var e = (0, p.keyHandler)(u, t.props.accessibility, t.props.rtl);
        e !== "" && t.changeSlide({
          message: e
        });
      }), r(o(t), "selectHandler", function(u) {
        t.changeSlide(u);
      }), r(o(t), "disableBodyScroll", function() {
        var u = function(n) {
          n = n || window.event, n.preventDefault && n.preventDefault(), n.returnValue = !1;
        };
        window.ontouchmove = u;
      }), r(o(t), "enableBodyScroll", function() {
        window.ontouchmove = null;
      }), r(o(t), "swipeStart", function(u) {
        t.props.verticalSwiping && t.disableBodyScroll();
        var e = (0, p.swipeStart)(u, t.props.swipe, t.props.draggable);
        e !== "" && t.setState(e);
      }), r(o(t), "swipeMove", function(u) {
        var e = (0, p.swipeMove)(u, _(_(_({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(o(t), "swipeEnd", function(u) {
        var e = (0, p.swipeEnd)(u, _(_(_({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        if (e) {
          var n = e.triggerSlideHandler;
          delete e.triggerSlideHandler, t.setState(e), n !== void 0 && (t.slideHandler(n), t.props.verticalSwiping && t.enableBodyScroll());
        }
      }), r(o(t), "touchEnd", function(u) {
        t.swipeEnd(u), t.clickable = !0;
      }), r(o(t), "slickPrev", function() {
        t.callbackTimers.push(setTimeout(function() {
          return t.changeSlide({
            message: "previous"
          });
        }, 0));
      }), r(o(t), "slickNext", function() {
        t.callbackTimers.push(setTimeout(function() {
          return t.changeSlide({
            message: "next"
          });
        }, 0));
      }), r(o(t), "slickGoTo", function(u) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (u = Number(u), isNaN(u)) return "";
        t.callbackTimers.push(setTimeout(function() {
          return t.changeSlide({
            message: "index",
            index: u,
            currentSlide: t.state.currentSlide
          }, e);
        }, 0));
      }), r(o(t), "play", function() {
        var u;
        if (t.props.rtl)
          u = t.state.currentSlide - t.props.slidesToScroll;
        else if ((0, p.canGoNext)(_(_({}, t.props), t.state)))
          u = t.state.currentSlide + t.props.slidesToScroll;
        else
          return !1;
        t.slideHandler(u);
      }), r(o(t), "autoPlay", function(u) {
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
      }), r(o(t), "pause", function(u) {
        t.autoplayTimer && (clearInterval(t.autoplayTimer), t.autoplayTimer = null);
        var e = t.state.autoplaying;
        u === "paused" ? t.setState({
          autoplaying: "paused"
        }) : u === "focused" ? (e === "hovered" || e === "playing") && t.setState({
          autoplaying: "focused"
        }) : e === "playing" && t.setState({
          autoplaying: "hovered"
        });
      }), r(o(t), "onDotsOver", function() {
        return t.props.autoplay && t.pause("hovered");
      }), r(o(t), "onDotsLeave", function() {
        return t.props.autoplay && t.state.autoplaying === "hovered" && t.autoPlay("leave");
      }), r(o(t), "onTrackOver", function() {
        return t.props.autoplay && t.pause("hovered");
      }), r(o(t), "onTrackLeave", function() {
        return t.props.autoplay && t.state.autoplaying === "hovered" && t.autoPlay("leave");
      }), r(o(t), "onSlideFocus", function() {
        return t.props.autoplay && t.pause("focused");
      }), r(o(t), "onSlideBlur", function() {
        return t.props.autoplay && t.state.autoplaying === "focused" && t.autoPlay("blur");
      }), r(o(t), "render", function() {
        var u = (0, g.default)("slick-slider", t.props.className, {
          "slick-vertical": t.props.vertical,
          "slick-initialized": !0
        }), e = _(_({}, t.props), t.state), n = (0, p.extractObject)(e, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), v = t.props.pauseOnHover;
        n = _(_({}, n), {}, {
          onMouseEnter: v ? t.onTrackOver : null,
          onMouseLeave: v ? t.onTrackLeave : null,
          onMouseOver: v ? t.onTrackOver : null,
          focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
        });
        var k;
        if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
          var w = (0, p.extractObject)(e, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), T = t.props.pauseOnDotsHover;
          w = _(_({}, w), {}, {
            clickHandler: t.changeSlide,
            onMouseEnter: T ? t.onDotsLeave : null,
            onMouseOver: T ? t.onDotsOver : null,
            onMouseLeave: T ? t.onDotsLeave : null
          }), k = /* @__PURE__ */ i.default.createElement(E.Dots, w);
        }
        var x, j, $ = (0, p.extractObject)(e, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        $.clickHandler = t.changeSlide, t.props.arrows && (x = /* @__PURE__ */ i.default.createElement(M.PrevArrow, $), j = /* @__PURE__ */ i.default.createElement(M.NextArrow, $));
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
        var ee = _(_({}, F), B), Q = t.props.touchMove, X = {
          className: "slick-list",
          style: ee,
          onClick: t.clickHandler,
          onMouseDown: Q ? t.swipeStart : null,
          onMouseMove: t.state.dragging && Q ? t.swipeMove : null,
          onMouseUp: Q ? t.swipeEnd : null,
          onMouseLeave: t.state.dragging && Q ? t.swipeEnd : null,
          onTouchStart: Q ? t.swipeStart : null,
          onTouchMove: t.state.dragging && Q ? t.swipeMove : null,
          onTouchEnd: Q ? t.touchEnd : null,
          onTouchCancel: t.state.dragging && Q ? t.swipeEnd : null,
          onKeyDown: t.props.accessibility ? t.keyHandler : null
        }, A = {
          className: u,
          dir: "ltr",
          style: t.props.style
        };
        return t.props.unslick && (X = {
          className: "slick-list"
        }, A = {
          className: u,
          style: t.props.style
        }), /* @__PURE__ */ i.default.createElement("div", A, t.props.unslick ? "" : x, /* @__PURE__ */ i.default.createElement("div", G({
          ref: t.listRefHandler
        }, X), /* @__PURE__ */ i.default.createElement(m.Track, G({
          ref: t.trackRefHandler
        }, n), t.props.children)), t.props.unslick ? "" : j, t.props.unslick ? "" : k);
      }), t.list = null, t.track = null, t.state = _(_({}, l.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: i.default.Children.count(t.props.children)
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      var V = t.ssrInit();
      return t.state = _(_({}, t.state), V), t;
    }
    return U(P, [{
      key: "didPropsChange",
      value: function(t) {
        for (var V = !1, u = 0, e = Object.keys(this.props); u < e.length; u++) {
          var n = e[u];
          if (!t.hasOwnProperty(n)) {
            V = !0;
            break;
          }
          if (!(N(t[n]) === "object" || typeof t[n] == "function" || isNaN(t[n])) && t[n] !== this.props[n]) {
            V = !0;
            break;
          }
        }
        return V || i.default.Children.count(this.props.children) !== i.default.Children.count(t.children);
      }
    }]), P;
  })(i.default.Component), ye;
}
var Re, Je;
function Xt() {
  if (Je) return Re;
  Je = 1;
  var i = function(l) {
    return l.replace(/[A-Z]/g, function(f) {
      return "-" + f.toLowerCase();
    }).toLowerCase();
  };
  return Re = i, Re;
}
var Ne, et;
function Kt() {
  if (et) return Ne;
  et = 1;
  var i = Xt(), l = function(p) {
    var m = /[height|width]$/;
    return m.test(p);
  }, f = function(p) {
    var m = "", E = Object.keys(p);
    return E.forEach(function(M, D) {
      var R = p[M];
      M = i(M), l(M) && typeof R == "number" && (R = R + "px"), R === !0 ? m += M : R === !1 ? m += "not " + M : m += "(" + M + ": " + R + ")", D < E.length - 1 && (m += " and ");
    }), m;
  }, g = function(p) {
    var m = "";
    return typeof p == "string" ? p : p instanceof Array ? (p.forEach(function(E, M) {
      m += f(E), M < p.length - 1 && (m += ", ");
    }), m) : f(p);
  };
  return Ne = g, Ne;
}
var tt;
function Ut() {
  return tt || (tt = 1, (function(i) {
    var l = { NODE_ENV: "production" };
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var f = M(fe), g = Yt(), p = M(Kt()), m = M(ot()), E = be();
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
        r && (S = S.filter(function(d) {
          return Object.getOwnPropertyDescriptor(a, d).enumerable;
        })), y.push.apply(y, S);
      }
      return y;
    }
    function G(a) {
      for (var r = 1; r < arguments.length; r++) {
        var y = arguments[r] != null ? arguments[r] : {};
        r % 2 ? N(Object(y), !0).forEach(function(S) {
          c(a, S, y[S]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(y)) : N(Object(y)).forEach(function(S) {
          Object.defineProperty(a, S, Object.getOwnPropertyDescriptor(y, S));
        });
      }
      return a;
    }
    function K(a, r) {
      if (!(a instanceof r)) throw new TypeError("Cannot call a class as a function");
    }
    function J(a, r) {
      for (var y = 0; y < r.length; y++) {
        var S = r[y];
        S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(a, o(S.key), S);
      }
    }
    function W(a, r, y) {
      return r && J(a.prototype, r), Object.defineProperty(a, "prototype", { writable: !1 }), a;
    }
    function _(a, r) {
      if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
      a.prototype = Object.create(r && r.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), r && Y(a, r);
    }
    function Y(a, r) {
      return Y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(y, S) {
        return y.__proto__ = S, y;
      }, Y(a, r);
    }
    function z(a) {
      var r = H();
      return function() {
        var y, S = s(a);
        if (r) {
          var d = s(this).constructor;
          y = Reflect.construct(S, arguments, d);
        } else y = S.apply(this, arguments);
        return U(this, y);
      };
    }
    function U(a, r) {
      if (r && (D(r) == "object" || typeof r == "function")) return r;
      if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return q(a);
    }
    function q(a) {
      if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return a;
    }
    function H() {
      try {
        var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch {
      }
      return (H = function() {
        return !!a;
      })();
    }
    function s(a) {
      return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
      }, s(a);
    }
    function c(a, r, y) {
      return (r = o(r)) in a ? Object.defineProperty(a, r, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : a[r] = y, a;
    }
    function o(a) {
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
    i.default = /* @__PURE__ */ (function(a) {
      _(y, a);
      var r = z(y);
      function y(S) {
        var d;
        return K(this, y), d = r.call(this, S), c(q(d), "innerSliderRefHandler", function(h) {
          return d.innerSlider = h;
        }), c(q(d), "slickPrev", function() {
          return d.innerSlider.slickPrev();
        }), c(q(d), "slickNext", function() {
          return d.innerSlider.slickNext();
        }), c(q(d), "slickGoTo", function(h) {
          var P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return d.innerSlider.slickGoTo(h, P);
        }), c(q(d), "slickPause", function() {
          return d.innerSlider.pause("paused");
        }), c(q(d), "slickPlay", function() {
          return d.innerSlider.autoPlay("play");
        }), d.state = {
          breakpoint: null
        }, d._responsiveMediaHandlers = [], d;
      }
      return W(y, [{
        key: "media",
        value: function(d, h) {
          var P = window.matchMedia(d), C = function(V) {
            var u = V.matches;
            u && h();
          };
          P.addListener(C), this._responsiveMediaHandlers.push({
            mql: P,
            query: d,
            listener: C
          });
        }
        // handles responsive breakpoints
      }, {
        key: "componentDidMount",
        value: function() {
          var d = this;
          if (this.props.responsive) {
            var h = this.props.responsive.map(function(C) {
              return C.breakpoint;
            });
            h.sort(function(C, t) {
              return C - t;
            }), h.forEach(function(C, t) {
              var V;
              t === 0 ? V = (0, p.default)({
                minWidth: 0,
                maxWidth: C
              }) : V = (0, p.default)({
                minWidth: h[t - 1] + 1,
                maxWidth: C
              }), (0, E.canUseDOM)() && d.media(V, function() {
                d.setState({
                  breakpoint: C
                });
              });
            });
            var P = (0, p.default)({
              minWidth: h.slice(-1)[0]
            });
            (0, E.canUseDOM)() && this.media(P, function() {
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
          var d = this, h, P;
          this.state.breakpoint ? (P = this.props.responsive.filter(function(T) {
            return T.breakpoint === d.state.breakpoint;
          }), h = P[0].settings === "unslick" ? "unslick" : G(G(G({}, m.default), this.props), P[0].settings)) : h = G(G({}, m.default), this.props), h.centerMode && (h.slidesToScroll > 1 && l.NODE_ENV, h.slidesToScroll = 1), h.fade && (h.slidesToShow > 1 && l.NODE_ENV, h.slidesToScroll > 1 && l.NODE_ENV, h.slidesToShow = 1, h.slidesToScroll = 1);
          var C = f.default.Children.toArray(this.props.children);
          C = C.filter(function(T) {
            return typeof T == "string" ? !!T.trim() : !!T;
          }), h.variableWidth && (h.rows > 1 || h.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), h.variableWidth = !1);
          for (var t = [], V = null, u = 0; u < C.length; u += h.rows * h.slidesPerRow) {
            for (var e = [], n = u; n < u + h.rows * h.slidesPerRow; n += h.slidesPerRow) {
              for (var v = [], k = n; k < n + h.slidesPerRow && (h.variableWidth && C[k].props.style && (V = C[k].props.style.width), !(k >= C.length)); k += 1)
                v.push(/* @__PURE__ */ f.default.cloneElement(C[k], {
                  key: 100 * u + 10 * n + k,
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
                width: V
              }
            }, e)) : t.push(/* @__PURE__ */ f.default.createElement("div", {
              key: u
            }, e));
          }
          if (h === "unslick") {
            var w = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ f.default.createElement("div", {
              className: w
            }, C);
          } else t.length <= h.slidesToShow && (h.unslick = !0);
          return /* @__PURE__ */ f.default.createElement(g.InnerSlider, R({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, (0, E.filterSettings)(h)), t);
        }
      }]), y;
    })(f.default.Component);
  })(Te)), Te;
}
var rt;
function Vt() {
  return rt || (rt = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var l = f(Ut());
    function f(g) {
      return g && g.__esModule ? g : { default: g };
    }
    i.default = l.default;
  })(xe)), xe;
}
var Zt = Vt();
const ze = /* @__PURE__ */ bt(Zt);
function Qt({
  title: i,
  titleId: l,
  ...f
}, g) {
  return /* @__PURE__ */ se.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: g,
    "aria-labelledby": l
  }, f), i ? /* @__PURE__ */ se.createElement("title", {
    id: l
  }, i) : null, /* @__PURE__ */ se.createElement("path", {
    fillRule: "evenodd",
    d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",
    clipRule: "evenodd"
  }));
}
const Jt = /* @__PURE__ */ se.forwardRef(Qt);
function er({
  title: i,
  titleId: l,
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
    "aria-labelledby": l
  }, f), i ? /* @__PURE__ */ se.createElement("title", {
    id: l
  }, i) : null, /* @__PURE__ */ se.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
  }));
}
const tr = /* @__PURE__ */ se.forwardRef(er);
function rr({ rating: i, textAlign: l = "left" }) {
  if (!i || i < 1 || i > 5) return null;
  const f = l === "center" ? "flex justify-center" : l === "right" ? "flex justify-end" : "flex justify-start", g = [];
  for (let p = 1; p <= 5; p++)
    p <= i ? g.push(
      /* @__PURE__ */ O(Jt, { className: "w-24 h-24 text-grey-800", "aria-hidden": "true" }, p)
    ) : g.push(
      /* @__PURE__ */ O(tr, { className: "w-24 h-24 text-grey-800", "aria-hidden": "true" }, p)
    );
  return /* @__PURE__ */ O("div", { className: `${f} gap-4`, role: "img", "aria-label": `Rating: ${i} out of 5 stars`, children: g });
}
function De({
  testimonial: i,
  name: l,
  role: f,
  rating: g = null,
  // number | null (1-5)
  imageUrl: p,
  logoUrl: m,
  mediaPosition: E = "top",
  // 'top' | 'bottom' | 'with-name'
  align: M = "left",
  // 'left' | 'center'
  withPadding: D = !1,
  // boolean
  className: R = "",
  ...N
}) {
  const G = g !== null && g >= 1 && g <= 5 ? Math.floor(g) : null, K = M === "center", J = `w-full ${D ? "p-testimonial-padding" : ""} ${R}`.trim(), W = K ? "text-center items-center" : "text-left items-start", _ = [
    m ? /* @__PURE__ */ O(
      "img",
      {
        src: m,
        alt: l || "Logo",
        className: "h-40 w-auto"
      },
      "logo"
    ) : null,
    p ? /* @__PURE__ */ O(
      "img",
      {
        src: p,
        alt: l || "Profile",
        className: "h-48 w-48 rounded-full object-cover"
      },
      "image"
    ) : null
  ].filter(Boolean), Y = _.length > 0, z = Y && E === "top", U = Y && E === "bottom", q = Y && E === "with-name";
  return /* @__PURE__ */ O("figure", { className: J, ...N, ...N.attributes || {}, children: /* @__PURE__ */ ae("div", { className: `flex flex-col gap-testimonial-spacing-y ${W}`, children: [
    z && /* @__PURE__ */ O("div", { className: `flex items-center gap-10 ${K ? "justify-center" : "justify-start"}`, children: _ }),
    G && /* @__PURE__ */ O(rr, { rating: G, textAlign: K ? "center" : "left" }),
    i && /* @__PURE__ */ O("blockquote", { className: "m-0", children: /* @__PURE__ */ O("p", { className: "text-body-default", dangerouslySetInnerHTML: { __html: i } }) }),
    (l || f || q) && /* @__PURE__ */ ae(
      "figcaption",
      {
        className: `flex flex-col gap-6 ${K ? "items-center" : "items-start"}`,
        children: [
          q && /* @__PURE__ */ ae("div", { className: `flex items-center gap-10 ${K ? "justify-center" : "justify-start"}`, children: [
            _,
            /* @__PURE__ */ ae("div", { className: `flex flex-col ${K ? "items-center" : "items-start"}`, children: [
              l && /* @__PURE__ */ O("cite", { className: "text-ui-label-small not-italic", children: l }),
              f && /* @__PURE__ */ O("p", { className: "text-ui-label-small", children: f })
            ] })
          ] }),
          !q && /* @__PURE__ */ ae(pt, { children: [
            l && /* @__PURE__ */ O("cite", { className: "text-ui-label-small not-italic", children: l }),
            f && /* @__PURE__ */ O("p", { className: "text-ui-label-small", children: f })
          ] })
        ]
      }
    ),
    U && /* @__PURE__ */ O("div", { className: `flex items-center gap-10 ${K ? "justify-center" : "justify-start"}`, children: _ })
  ] }) });
}
const nt = {
  secondary: "text-secondary",
  primary: "text-primary",
  tertiary: "text-brand-tertiary"
};
function nr({ className: i = "" }) {
  return /* @__PURE__ */ O(
    "svg",
    {
      className: i,
      width: "25",
      height: "16",
      viewBox: "0 0 25 16",
      fill: "none",
      "aria-hidden": "true",
      children: /* @__PURE__ */ O(
        "path",
        {
          d: "M20.8959 16H13.1974L19.7961 0H25L20.8959 16ZM7.6985 16H0L6.59871 0H11.8294L7.6985 16Z",
          fill: "currentColor"
        }
      )
    }
  );
}
function ir({ className: i = "" }) {
  return /* @__PURE__ */ O(
    "svg",
    {
      className: i,
      width: "25",
      height: "16",
      viewBox: "0 0 25 16",
      fill: "none",
      "aria-hidden": "true",
      children: /* @__PURE__ */ O(
        "path",
        {
          d: "M4.10408 0H11.8026L5.20386 16H0L4.10408 0ZM17.3015 0H25L18.4013 16H13.1706L17.3015 0Z",
          fill: "currentColor"
        }
      )
    }
  );
}
function it({
  testimonial: i,
  name: l,
  role: f,
  imageUrl: g,
  logoUrl: p,
  quoteColor: m = "secondary",
  // 'secondary' | 'primary' | 'tertiary'
  className: E = "",
  ...M
}) {
  const D = (i || "").replace(/^["“”]+|["“”]+$/g, ""), R = nt[m] || nt.secondary;
  return /* @__PURE__ */ ae("figure", { className: `flex flex-col items-center text-center ${E}`.trim(), ...M, ...M.attributes || {}, children: [
    /* @__PURE__ */ ae("blockquote", { className: "relative m-0 max-w-[720px] flex flex-row items-start text-center gap-20", children: [
      /* @__PURE__ */ O(nr, { className: `w-[30px] h-auto ${R}` }),
      /* @__PURE__ */ O("p", { className: "text-headings-h4 font-bold text-grey-950", children: D }),
      /* @__PURE__ */ O(ir, { className: `w-[30px] h-auto ${R}` })
    ] }),
    (p || g || l || f) && /* @__PURE__ */ ae("figcaption", { className: "mt-32 flex items-center justify-center gap-20", children: [
      p && /* @__PURE__ */ O(
        "img",
        {
          src: p,
          alt: l ? `${l} logo` : "Logo",
          className: "h-56 w-auto object-contain"
        }
      ),
      g && /* @__PURE__ */ O(
        "img",
        {
          src: g,
          alt: l || "Profile",
          className: "h-56 w-56 rounded-full object-cover"
        }
      ),
      (l || f) && /* @__PURE__ */ ae("div", { className: "flex flex-col items-start text-left", children: [
        l && /* @__PURE__ */ O("cite", { className: "text-body-default not-italic font-bold text-grey-950", children: l }),
        f && /* @__PURE__ */ O("p", { className: "text-body-default text-grey-600", children: f })
      ] })
    ] })
  ] });
}
const or = ht(() => Promise.resolve().then(() => fr)), ar = ({
  media: i = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: l = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: f = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: g,
  videoUrl: p,
  lottieUrl: m,
  lottieData: E,
  iframeUrl: M,
  flipbookUrl: D,
  title: R,
  className: N = ""
}) => {
  var c;
  const G = typeof window < "u" && window.location.origin.indexOf("author") > -1, K = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, W = `relative w-full h-full ${l === "square" ? "aspect-square" : l === "rectangle" ? "aspect-[4/3]" : i === "video" ? "aspect-video" : ""}`.trim(), _ = l === "default" ? `w-full h-full ${N}`.trim() : `absolute inset-0 w-full h-full ${N}`.trim(), Y = "w-full h-full", z = l === "default" ? `${_}`.trim() : _, U = f === "contain" ? "object-contain" : "object-cover", q = f === "contain" ? "xMidYMid meet" : "xMidYMid slice", H = `relative w-full ${N}`.trim(), s = "w-full min-h-[280px]";
  switch (i) {
    case "image":
      if (g)
        return /* @__PURE__ */ O("div", { className: W, children: /* @__PURE__ */ O(
          "img",
          {
            src: g,
            alt: R || "Media image",
            className: `${U} ${_}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (p) {
        const o = p.includes("youtube.com/watch") || p.includes("youtu.be/");
        let b = p;
        o && (b = `https://www.youtube.com/embed/${p.includes("youtu.be/") ? p.split("youtu.be/")[1].split("?")[0] : (c = p.split("v=")[1]) == null ? void 0 : c.split("&")[0]}`);
        const a = (() => {
          if (!o) return b;
          try {
            const r = new URL(b);
            return r.searchParams.set("autoplay", "0"), r.searchParams.set("mute", "0"), r.searchParams.set("playsinline", "1"), r.searchParams.set("controls", "1"), r.searchParams.set("rel", "0"), r.toString();
          } catch {
            return b.includes("?") ? b.includes("autoplay=") ? b : `${b}&autoplay=0` : `${b}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ O("div", { className: W, children: o ? /* @__PURE__ */ O(
          "iframe",
          {
            src: a,
            title: R || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${_} ${U}`.trim()
          }
        ) : /* @__PURE__ */ O(
          "video",
          {
            className: `${_} ${U}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: R || "Video player",
            children: /* @__PURE__ */ O("source", { src: p })
          }
        ) });
      }
      break;
    case "lottie":
      if (E)
        return G ? /* @__PURE__ */ O("div", { className: W, role: "img", "aria-label": R || "Animation", children: /* @__PURE__ */ O(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${_}`.trim(),
            children: /* @__PURE__ */ O("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ O(
          "div",
          {
            className: W,
            role: "img",
            "aria-label": R || "Animation",
            children: /* @__PURE__ */ O("div", { className: `${_} overflow-hidden`.trim(), children: /* @__PURE__ */ O(
              mt,
              {
                animationData: E,
                loop: !K,
                autoplay: !K,
                className: Y,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: q }
              }
            ) })
          }
        );
      if (m)
        return /* @__PURE__ */ O("div", { className: W, children: /* @__PURE__ */ O("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (M)
        return /* @__PURE__ */ O("div", { className: W, children: /* @__PURE__ */ O(
          "iframe",
          {
            src: M,
            title: R || "Iframe content",
            frameBorder: "0",
            className: `${z} ${U}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (D)
        return G ? /* @__PURE__ */ O("div", { className: H, role: "img", "aria-label": R || "Flipbook", children: /* @__PURE__ */ O(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${s}`.trim(),
            children: /* @__PURE__ */ O("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ O("div", { className: H, children: /* @__PURE__ */ O("div", { className: s, children: /* @__PURE__ */ O(vt, { fallback: /* @__PURE__ */ O("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ O(or, { pdfUrl: D, title: R, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ O("div", { className: W, children: /* @__PURE__ */ O("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${l === "default" ? "" : "absolute inset-0"}`.trim(), children: i ? `${i.charAt(0).toUpperCase() + i.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function vr({
  /**
   * Variants: 'media' | 'columns' | 'stacked-media' | 'giftpro-media'
   * - 'media': 1 testimonial + 1 media per slide (carousel, 1 per page)
   * - 'columns': testimonial grid (1-3 columns). If columns > 3, use carousel with 3 per page
   * - 'stacked-media': 2-column layout with media + stacked testimonials (order can change)
   * - 'giftpro-media': centered quote with large quote marks, brand logo + author avatar (carousel if >1)
   */
  variant: i,
  testimonials: l = [],
  media: f = null,
  // media object for stacked-media and trust
  order: g = "testimonial-first",
  // 'media-first' | 'testimonial-first'
  columns: p = 1,
  // 1 | 2 | 3
  carousel: m = !1,
  // enable carousel for columns
  align: E = "left",
  // 'left' | 'center'
  withPadding: M = !1,
  // boolean
  mediaPosition: D = "top",
  // 'top' | 'bottom' | 'with-name'
  id: R = "",
  className: N = "",
  infinite: G = !1,
  quoteColor: K = "secondary"
  // giftpro-media quote mark color: 'secondary' | 'primary' | 'tertiary'
}) {
  const J = i || "columns", W = g === "media-first", _ = [1, 2, 3].includes(p) ? p : 3, Y = J === "columns" && m, z = (o) => ({
    testimonial: o.testimonial,
    name: o.name ?? o.author,
    role: o.role ?? o.authorTitle,
    imageUrl: o.imageUrl ?? o.authorImage,
    logoUrl: o.logoUrl,
    rating: o.rating,
    align: o.align ?? E,
    withPadding: o.withPadding ?? M,
    mediaPosition: o.mediaPosition ?? D,
    attributes: o.attributes || {}
  }), U = (o, b = "") => o ? /* @__PURE__ */ O("div", { className: "relative w-full h-full min-h-[220px] overflow-hidden", children: /* @__PURE__ */ O("div", { className: "absolute inset-0 w-full h-full", children: /* @__PURE__ */ O(
    ar,
    {
      media: o.type || "image",
      aspect: "default",
      imageUrl: o.imageUrl,
      videoUrl: o.videoUrl,
      lottieUrl: o.lottieUrl,
      lottieData: o.lottieData,
      iframeUrl: o.iframeUrl,
      title: o.title || b,
      className: "w-full h-full object-cover"
    }
  ) }) }) : null, q = (o, b) => {
    const a = o.media || f, r = !!a, y = r ? "xl:w-1/2" : "w-full";
    return /* @__PURE__ */ ae("div", { className: "flex flex-col xl:flex-row items-stretch text-gray-950", children: [
      W && r && /* @__PURE__ */ O("div", { className: "w-full xl:w-1/2", children: U(a, o.testimonial || "") }),
      /* @__PURE__ */ O("div", { className: `flex items-center justify-center ${y}`, children: /* @__PURE__ */ O(De, { ...z(o) }) }),
      !W && r && /* @__PURE__ */ O("div", { className: "w-full xl:w-1/2", children: U(a, o.testimonial || "") })
    ] }, b);
  }, H = (o) => {
    const b = (() => {
      switch (_) {
        case 1:
          return "grid grid-cols-1 gap-section-spacing-x";
        case 2:
          return "grid grid-cols-1 xl:grid-cols-2 gap-section-spacing-x";
        case 3:
        default:
          return "grid grid-cols-1 xl:grid-cols-3 gap-section-spacing-x";
      }
    })();
    return /* @__PURE__ */ O("div", { className: b, children: o.map((a, r) => /* @__PURE__ */ O(De, { ...z(a) }, r)) });
  }, s = (o, b) => {
    const a = [];
    for (let r = 0; r < o.length; r += b)
      a.push(o.slice(r, r + b));
    return a;
  }, c = (o) => ({
    className: "w-full testimonial-slider",
    dots: !0,
    infinite: G,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !1,
    arrows: !1
  });
  if (J === "media") {
    if (!l || l.length === 0) return null;
    const o = c(l.length);
    return /* @__PURE__ */ O("div", { className: `container ${N}`, id: R, children: /* @__PURE__ */ O(ze, { ...o, children: l.map((b, a) => /* @__PURE__ */ O("div", { children: q(b, a) }, a)) }) });
  }
  if (J === "stacked-media") {
    if (!l || l.length === 0) return null;
    const o = !!f;
    return /* @__PURE__ */ O("div", { className: `container ${N}`, id: R, children: /* @__PURE__ */ ae("div", { className: "flex flex-col xl:flex-row items-stretch gap-24", children: [
      W && o && /* @__PURE__ */ O("div", { className: "w-full xl:w-1/2", children: U(f) }),
      /* @__PURE__ */ O("div", { className: `flex flex-col gap-24 ${o ? "w-full xl:w-1/2" : "w-full"}`, children: l.map((b, a) => /* @__PURE__ */ O(De, { ...z(b) }, a)) }),
      !W && o && /* @__PURE__ */ O("div", { className: "w-full xl:w-1/2", children: U(f) })
    ] }) });
  }
  if (J === "giftpro-media") {
    if (!l || l.length === 0) return null;
    if (l.length === 1)
      return /* @__PURE__ */ O("div", { className: `container ${N}`, id: R, children: /* @__PURE__ */ O(it, { ...z(l[0]), quoteColor: K }) });
    const o = c(l.length);
    return /* @__PURE__ */ O("div", { className: `container ${N}`, id: R, children: /* @__PURE__ */ O(ze, { ...o, children: l.map((b, a) => /* @__PURE__ */ O("div", { children: /* @__PURE__ */ O(it, { ...z(b), quoteColor: K }) }, a)) }) });
  }
  if (J === "columns") {
    if (!l || l.length === 0) return null;
    if (!Y)
      return /* @__PURE__ */ O("div", { className: `container ${N}`, id: R, children: H(l) });
    const o = s(l, _), b = c();
    return /* @__PURE__ */ O("div", { className: `container ${N}`, id: R, children: /* @__PURE__ */ O(ze, { ...b, children: o.map((a, r) => /* @__PURE__ */ O("div", { children: H(a) }, r)) }) });
  }
  return null;
}
let Ie, ft, Ae, Oe;
const lr = async () => {
  if (!Oe) {
    const i = await import("react-pdf");
    Oe = i.pdfjs, ft = i.Document, Ae = i.Page, Oe.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${Oe.version}/build/pdf.worker.min.mjs`;
  }
}, sr = async () => {
  Ie || (Ie = (await import("react-pageflip")).default);
}, ur = gt(({ children: i }, l) => /* @__PURE__ */ O("div", { ref: l, className: "w-full h-full overflow-hidden", children: i })), cr = ({ pdfUrl: i, title: l, width: f = 280, height: g = 280, className: p = "" }) => {
  const [m, E] = ve(0), [M, D] = ve(null), [R, N] = ve(!0), [G, K] = ve(g / f), [J, W] = ve(0), _ = yt(null);
  qe(() => {
    Promise.all([lr(), sr()]).then(() => N(!1)).catch(() => {
      D("Failed to load flipbook");
    });
  }, []), qe(() => {
    const H = _.current;
    if (!H) return;
    const s = new ResizeObserver(([c]) => {
      const o = Math.floor(c.contentRect.width);
      o > 0 && W(o);
    });
    return s.observe(H), () => s.disconnect();
  }, [R]);
  const Y = J > 0 ? Math.floor(J / 2) : Math.floor(f / 2), z = Math.round(Y * G), U = $e(async (H) => {
    try {
      const c = (await H.getPage(1)).getViewport({ scale: 1 });
      c != null && c.width && (c != null && c.height) && K(c.height / c.width);
    } catch {
    }
    E(H.numPages || 0);
  }, []), q = $e((H) => {
    D((H == null ? void 0 : H.message) || "Failed to load PDF");
  }, []);
  return M ? /* @__PURE__ */ O("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : R ? /* @__PURE__ */ O("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ O("div", { ref: _, className: `w-full ${p}`.trim(), children: /* @__PURE__ */ ae(
    ft,
    {
      file: i,
      onLoadSuccess: U,
      onLoadError: q,
      loading: /* @__PURE__ */ O("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        m === 1 && /* @__PURE__ */ O(
          "div",
          {
            className: `w-full flex justify-center items-center ${p}`.trim(),
            style: { minHeight: `${z}px` },
            children: /* @__PURE__ */ O(Ae, { pageNumber: 1, width: f, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        m > 1 && /* @__PURE__ */ O(
          Ie,
          {
            width: Y,
            height: z,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": l || "Flipbook",
            children: Array.from({ length: m }, (H, s) => /* @__PURE__ */ O(ur, { children: /* @__PURE__ */ O(Ae, { pageNumber: s + 1, width: Y, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, s))
          },
          `${Y}-${z}`
        )
      ]
    }
  ) });
}, fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cr
}, Symbol.toStringTag, { value: "Module" }));
export {
  vr as default
};
