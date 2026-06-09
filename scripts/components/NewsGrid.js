import { jsxs as ce, jsx as ie, Fragment as nt } from "react/jsx-runtime";
import * as Se from "react";
import ue, { useId as it, useState as De, useRef as ot, useEffect as at } from "react";
var me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function lt(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
function st(a) {
  if (Object.prototype.hasOwnProperty.call(a, "__esModule")) return a;
  var f = a.default;
  if (typeof f == "function") {
    var p = function b() {
      return this instanceof b ? Reflect.construct(f, arguments, this.constructor) : f.apply(this, arguments);
    };
    p.prototype = f.prototype;
  } else p = {};
  return Object.defineProperty(p, "__esModule", { value: !0 }), Object.keys(a).forEach(function(b) {
    var y = Object.getOwnPropertyDescriptor(a, b);
    Object.defineProperty(p, b, y.get ? y : {
      enumerable: !0,
      get: function() {
        return a[b];
      }
    });
  }), p;
}
var Pe = {}, Ce = {}, ve = {}, Te = {}, Ne;
function ut() {
  return Ne || (Ne = 1, (function(a) {
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
var je, He;
function ct() {
  if (He) return je;
  He = 1;
  var a = "Expected a function", f = NaN, p = "[object Symbol]", b = /^\s+|\s+$/g, y = /^[-+]0x[0-9a-f]+$/i, g = /^0b[01]+$/i, L = /^0o[0-7]+$/i, x = parseInt, M = typeof me == "object" && me && me.Object === Object && me, R = typeof self == "object" && self && self.Object === Object && self, z = M || R || Function("return this")(), K = Object.prototype, Z = K.toString, $ = Math.max, V = Math.min, E = function() {
    return z.Date.now();
  };
  function J(i, s, u) {
    var k, l, r, h, m, c, d = 0, w = !1, _ = !1, t = !0;
    if (typeof i != "function")
      throw new TypeError(a);
    s = Y(s) || 0, q(u) && (w = !!u.leading, _ = "maxWait" in u, r = _ ? $(Y(u.maxWait) || 0, s) : r, t = "trailing" in u ? !!u.trailing : t);
    function F(T) {
      var H = k, I = l;
      return k = l = void 0, d = T, h = i.apply(I, H), h;
    }
    function o(T) {
      return d = T, m = setTimeout(v, s), w ? F(T) : h;
    }
    function e(T) {
      var H = T - c, I = T - d, A = s - H;
      return _ ? V(A, r - I) : A;
    }
    function n(T) {
      var H = T - c, I = T - d;
      return c === void 0 || H >= s || H < 0 || _ && I >= r;
    }
    function v() {
      var T = E();
      if (n(T))
        return O(T);
      m = setTimeout(v, e(T));
    }
    function O(T) {
      return m = void 0, t && k ? F(T) : (k = l = void 0, h);
    }
    function S() {
      m !== void 0 && clearTimeout(m), d = 0, k = c = l = m = void 0;
    }
    function C() {
      return m === void 0 ? h : O(E());
    }
    function P() {
      var T = E(), H = n(T);
      if (k = arguments, l = this, c = T, H) {
        if (m === void 0)
          return o(c);
        if (_)
          return m = setTimeout(v, s), F(c);
      }
      return m === void 0 && (m = setTimeout(v, s)), h;
    }
    return P.cancel = S, P.flush = C, P;
  }
  function q(i) {
    var s = typeof i;
    return !!i && (s == "object" || s == "function");
  }
  function Q(i) {
    return !!i && typeof i == "object";
  }
  function U(i) {
    return typeof i == "symbol" || Q(i) && Z.call(i) == p;
  }
  function Y(i) {
    if (typeof i == "number")
      return i;
    if (U(i))
      return f;
    if (q(i)) {
      var s = typeof i.valueOf == "function" ? i.valueOf() : i;
      i = q(s) ? s + "" : s;
    }
    if (typeof i != "string")
      return i === 0 ? i : +i;
    i = i.replace(b, "");
    var u = g.test(i);
    return u || L.test(i) ? x(i.slice(2), u ? 2 : 8) : y.test(i) ? f : +i;
  }
  return je = J, je;
}
var Ee = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ie;
function _e() {
  return Ie || (Ie = 1, (function(a) {
    (function() {
      var f = {}.hasOwnProperty;
      function p() {
        for (var g = "", L = 0; L < arguments.length; L++) {
          var x = arguments[L];
          x && (g = y(g, b(x)));
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
        for (var x in g)
          f.call(g, x) && g[x] && (L = y(L, x));
        return L;
      }
      function y(g, L) {
        return L ? g ? g + " " + L : g + L : g;
      }
      a.exports ? (p.default = p, a.exports = p) : window.classNames = p;
    })();
  })(Ee)), Ee.exports;
}
var j = {}, Le = {}, Ae;
function Ve() {
  return Ae || (Ae = 1, (function(a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.default = void 0;
    var f = p(ue);
    function p(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var b = {
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
    a.default = b;
  })(Le)), Le;
}
var We;
function ge() {
  if (We) return j;
  We = 1, Object.defineProperty(j, "__esModule", {
    value: !0
  }), j.checkSpecKeys = j.checkNavigable = j.changeSlide = j.canUseDOM = j.canGoNext = void 0, j.clamp = R, j.extractObject = void 0, j.filterSettings = F, j.validSettings = j.swipeStart = j.swipeMove = j.swipeEnd = j.slidesOnRight = j.slidesOnLeft = j.slideHandler = j.siblingDirection = j.safePreventDefault = j.lazyStartIndex = j.lazySlidesOnRight = j.lazySlidesOnLeft = j.lazyEndIndex = j.keyHandler = j.initializedState = j.getWidth = j.getTrackLeft = j.getTrackCSS = j.getTrackAnimateCSS = j.getTotalSlides = j.getSwipeDirection = j.getSlideCount = j.getRequiredLazySlides = j.getPreClones = j.getPostClones = j.getOnDemandLazySlides = j.getNavigableIndexes = j.getHeight = void 0;
  var a = p(ue), f = p(Ve());
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
  function y(o, e) {
    var n = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
      var v = Object.getOwnPropertySymbols(o);
      e && (v = v.filter(function(O) {
        return Object.getOwnPropertyDescriptor(o, O).enumerable;
      })), n.push.apply(n, v);
    }
    return n;
  }
  function g(o) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2 ? y(Object(n), !0).forEach(function(v) {
        L(o, v, n[v]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(v) {
        Object.defineProperty(o, v, Object.getOwnPropertyDescriptor(n, v));
      });
    }
    return o;
  }
  function L(o, e, n) {
    return (e = x(e)) in o ? Object.defineProperty(o, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = n, o;
  }
  function x(o) {
    var e = M(o, "string");
    return b(e) == "symbol" ? e : e + "";
  }
  function M(o, e) {
    if (b(o) != "object" || !o) return o;
    var n = o[Symbol.toPrimitive];
    if (n !== void 0) {
      var v = n.call(o, e);
      if (b(v) != "object") return v;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(o);
  }
  function R(o, e, n) {
    return Math.max(e, Math.min(o, n));
  }
  var z = j.safePreventDefault = function(e) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(e._reactName) || e.preventDefault();
  }, K = j.getOnDemandLazySlides = function(e) {
    for (var n = [], v = Z(e), O = $(e), S = v; S < O; S++)
      e.lazyLoadedList.indexOf(S) < 0 && n.push(S);
    return n;
  };
  j.getRequiredLazySlides = function(e) {
    for (var n = [], v = Z(e), O = $(e), S = v; S < O; S++)
      n.push(S);
    return n;
  };
  var Z = j.lazyStartIndex = function(e) {
    return e.currentSlide - V(e);
  }, $ = j.lazyEndIndex = function(e) {
    return e.currentSlide + E(e);
  }, V = j.lazySlidesOnLeft = function(e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }, E = j.lazySlidesOnRight = function(e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }, J = j.getWidth = function(e) {
    return e && e.offsetWidth || 0;
  }, q = j.getHeight = function(e) {
    return e && e.offsetHeight || 0;
  }, Q = j.getSwipeDirection = function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, v, O, S, C;
    return v = e.startX - e.curX, O = e.startY - e.curY, S = Math.atan2(O, v), C = Math.round(S * 180 / Math.PI), C < 0 && (C = 360 - Math.abs(C)), C <= 45 && C >= 0 || C <= 360 && C >= 315 ? "left" : C >= 135 && C <= 225 ? "right" : n === !0 ? C >= 35 && C <= 135 ? "up" : "down" : "vertical";
  }, U = j.canGoNext = function(e) {
    var n = !0;
    return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (n = !1), n;
  };
  j.extractObject = function(e, n) {
    var v = {};
    return n.forEach(function(O) {
      return v[O] = e[O];
    }), v;
  }, j.initializedState = function(e) {
    var n = a.default.Children.count(e.children), v = e.listRef, O = Math.ceil(J(v)), S = e.trackRef && e.trackRef.node, C = Math.ceil(J(S)), P;
    if (e.vertical)
      P = O;
    else {
      var T = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding == "string" && e.centerPadding.slice(-1) === "%" && (T *= O / 100), P = Math.ceil((O - T) / e.slidesToShow);
    }
    var H = v && q(v.querySelector('[data-index="0"]')), I = H * e.slidesToShow, A = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && (A = n - 1 - e.initialSlide);
    var X = e.lazyLoadedList || [], B = K(g(g({}, e), {}, {
      currentSlide: A,
      lazyLoadedList: X
    }));
    X = X.concat(B);
    var W = {
      slideCount: n,
      slideWidth: P,
      listWidth: O,
      trackWidth: C,
      currentSlide: A,
      slideHeight: H,
      listHeight: I,
      lazyLoadedList: X
    };
    return e.autoplaying === null && e.autoplay && (W.autoplaying = "playing"), W;
  }, j.slideHandler = function(e) {
    var n = e.waitForAnimate, v = e.animating, O = e.fade, S = e.infinite, C = e.index, P = e.slideCount, T = e.lazyLoad, H = e.currentSlide, I = e.centerMode, A = e.slidesToScroll, X = e.slidesToShow, B = e.useCSS, W = e.lazyLoadedList;
    if (n && v) return {};
    var N = C, G, te, D, ee = {}, re = {}, ne = S ? C : R(C, 0, P - 1);
    if (O) {
      if (!S && (C < 0 || C >= P)) return {};
      C < 0 ? N = C + P : C >= P && (N = C - P), T && W.indexOf(N) < 0 && (W = W.concat(N)), ee = {
        animating: !0,
        currentSlide: N,
        lazyLoadedList: W,
        targetSlide: N
      }, re = {
        animating: !1,
        targetSlide: N
      };
    } else
      G = N, N < 0 ? (G = N + P, S ? P % A !== 0 && (G = P - P % A) : G = 0) : !U(e) && N > H ? N = G = H : I && N >= P ? (N = S ? P : P - 1, G = S ? 0 : P - 1) : N >= P && (G = N - P, S ? P % A !== 0 && (G = 0) : G = P - X), !S && N + X >= P && (G = P - X), te = r(g(g({}, e), {}, {
        slideIndex: N
      })), D = r(g(g({}, e), {}, {
        slideIndex: G
      })), S || (te === D && (N = G), te = D), T && (W = W.concat(K(g(g({}, e), {}, {
        currentSlide: N
      })))), B ? (ee = {
        animating: !0,
        currentSlide: G,
        trackStyle: l(g(g({}, e), {}, {
          left: te
        })),
        lazyLoadedList: W,
        targetSlide: ne
      }, re = {
        animating: !1,
        currentSlide: G,
        trackStyle: k(g(g({}, e), {}, {
          left: D
        })),
        swipeLeft: null,
        targetSlide: ne
      }) : ee = {
        currentSlide: G,
        trackStyle: k(g(g({}, e), {}, {
          left: D
        })),
        lazyLoadedList: W,
        targetSlide: ne
      };
    return {
      state: ee,
      nextState: re
    };
  }, j.changeSlide = function(e, n) {
    var v, O, S, C, P, T = e.slidesToScroll, H = e.slidesToShow, I = e.slideCount, A = e.currentSlide, X = e.targetSlide, B = e.lazyLoad, W = e.infinite;
    if (C = I % T !== 0, v = C ? 0 : (I - A) % T, n.message === "previous")
      S = v === 0 ? T : H - v, P = A - S, B && !W && (O = A - S, P = O === -1 ? I - 1 : O), W || (P = X - T);
    else if (n.message === "next")
      S = v === 0 ? T : v, P = A + S, B && !W && (P = (A + T) % I + v), W || (P = X + T);
    else if (n.message === "dots")
      P = n.index * n.slidesToScroll;
    else if (n.message === "children") {
      if (P = n.index, W) {
        var N = d(g(g({}, e), {}, {
          targetSlide: P
        }));
        P > n.currentSlide && N === "left" ? P = P - I : P < n.currentSlide && N === "right" && (P = P + I);
      }
    } else n.message === "index" && (P = Number(n.index));
    return P;
  }, j.keyHandler = function(e, n, v) {
    return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n ? "" : e.keyCode === 37 ? v ? "next" : "previous" : e.keyCode === 39 ? v ? "previous" : "next" : "";
  }, j.swipeStart = function(e, n, v) {
    return e.target.tagName === "IMG" && z(e), !n || !v && e.type.indexOf("mouse") !== -1 ? "" : {
      dragging: !0,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY
      }
    };
  }, j.swipeMove = function(e, n) {
    var v = n.scrolling, O = n.animating, S = n.vertical, C = n.swipeToSlide, P = n.verticalSwiping, T = n.rtl, H = n.currentSlide, I = n.edgeFriction, A = n.edgeDragged, X = n.onEdge, B = n.swiped, W = n.swiping, N = n.slideCount, G = n.slidesToScroll, te = n.infinite, D = n.touchObject, ee = n.swipeEvent, re = n.listHeight, ne = n.listWidth;
    if (!v) {
      if (O) return z(e);
      S && C && P && z(e);
      var oe, le = {}, be = r(n);
      D.curX = e.touches ? e.touches[0].pageX : e.clientX, D.curY = e.touches ? e.touches[0].pageY : e.clientY, D.swipeLength = Math.round(Math.sqrt(Math.pow(D.curX - D.startX, 2)));
      var ze = Math.round(Math.sqrt(Math.pow(D.curY - D.startY, 2)));
      if (!P && !W && ze > 10)
        return {
          scrolling: !0
        };
      P && (D.swipeLength = ze);
      var de = (T ? -1 : 1) * (D.curX > D.startX ? 1 : -1);
      P && (de = D.curY > D.startY ? 1 : -1);
      var rt = Math.ceil(N / G), ae = Q(n.touchObject, P), pe = D.swipeLength;
      return te || (H === 0 && (ae === "right" || ae === "down") || H + 1 >= rt && (ae === "left" || ae === "up") || !U(n) && (ae === "left" || ae === "up")) && (pe = D.swipeLength * I, A === !1 && X && (X(ae), le.edgeDragged = !0)), !B && ee && (ee(ae), le.swiped = !0), S ? oe = be + pe * (re / ne) * de : T ? oe = be - pe * de : oe = be + pe * de, P && (oe = be + pe * de), le = g(g({}, le), {}, {
        touchObject: D,
        swipeLeft: oe,
        trackStyle: k(g(g({}, n), {}, {
          left: oe
        }))
      }), Math.abs(D.curX - D.startX) < Math.abs(D.curY - D.startY) * 0.8 || D.swipeLength > 10 && (le.swiping = !0, z(e)), le;
    }
  }, j.swipeEnd = function(e, n) {
    var v = n.dragging, O = n.swipe, S = n.touchObject, C = n.listWidth, P = n.touchThreshold, T = n.verticalSwiping, H = n.listHeight, I = n.swipeToSlide, A = n.scrolling, X = n.onSwipe, B = n.targetSlide, W = n.currentSlide, N = n.infinite;
    if (!v)
      return O && z(e), {};
    var G = T ? H / P : C / P, te = Q(S, T), D = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {}
    };
    if (A || !S.swipeLength)
      return D;
    if (S.swipeLength > G) {
      z(e), X && X(te);
      var ee, re, ne = N ? W : B;
      switch (te) {
        case "left":
        case "up":
          re = ne + s(n), ee = I ? i(n, re) : re, D.currentDirection = 0;
          break;
        case "right":
        case "down":
          re = ne - s(n), ee = I ? i(n, re) : re, D.currentDirection = 1;
          break;
        default:
          ee = ne;
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
  var Y = j.getNavigableIndexes = function(e) {
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, v = e.infinite ? e.slidesToShow * -1 : 0, O = e.infinite ? e.slidesToShow * -1 : 0, S = []; v < n; )
      S.push(v), v = O + e.slidesToScroll, O += Math.min(e.slidesToScroll, e.slidesToShow);
    return S;
  }, i = j.checkNavigable = function(e, n) {
    var v = Y(e), O = 0;
    if (n > v[v.length - 1])
      n = v[v.length - 1];
    else
      for (var S in v) {
        if (n < v[S]) {
          n = O;
          break;
        }
        O = v[S];
      }
    return n;
  }, s = j.getSlideCount = function(e) {
    var n = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      var v, O = e.listRef, S = O.querySelectorAll && O.querySelectorAll(".slick-slide") || [];
      if (Array.from(S).every(function(T) {
        if (e.vertical) {
          if (T.offsetTop + q(T) / 2 > e.swipeLeft * -1)
            return v = T, !1;
        } else if (T.offsetLeft - n + J(T) / 2 > e.swipeLeft * -1)
          return v = T, !1;
        return !0;
      }), !v)
        return 0;
      var C = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide, P = Math.abs(v.dataset.index - C) || 1;
      return P;
    } else
      return e.slidesToScroll;
  }, u = j.checkSpecKeys = function(e, n) {
    return n.reduce(function(v, O) {
      return v && e.hasOwnProperty(O);
    }, !0) ? null : console.error("Keys Missing:", e);
  }, k = j.getTrackCSS = function(e) {
    u(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
    var n, v;
    if (!e.vertical)
      n = c(e) * e.slideWidth;
    else {
      var O = e.unslick ? e.slideCount : e.slideCount + 2 * e.slidesToShow;
      v = O * e.slideHeight;
    }
    var S = {
      opacity: 1,
      transition: "",
      WebkitTransition: ""
    };
    if (e.useTransform) {
      var C = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", P = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", T = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
      S = g(g({}, S), {}, {
        WebkitTransform: C,
        transform: P,
        msTransform: T
      });
    } else
      e.vertical ? S.top = e.left : S.left = e.left;
    return e.fade && (S = {
      opacity: 1
    }), n && (S.width = n), v && (S.height = v), window && !window.addEventListener && window.attachEvent && (e.vertical ? S.marginTop = e.left + "px" : S.marginLeft = e.left + "px"), S;
  }, l = j.getTrackAnimateCSS = function(e) {
    u(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var n = k(e);
    return e.useTransform ? (n.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, n.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? n.transition = "top " + e.speed + "ms " + e.cssEase : n.transition = "left " + e.speed + "ms " + e.cssEase, n;
  }, r = j.getTrackLeft = function(e) {
    if (e.unslick)
      return 0;
    u(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var n = e.slideIndex, v = e.trackRef, O = e.infinite, S = e.centerMode, C = e.slideCount, P = e.slidesToShow, T = e.slidesToScroll, H = e.slideWidth, I = e.listWidth, A = e.variableWidth, X = e.slideHeight, B = e.fade, W = e.vertical, N = 0, G, te, D = 0;
    if (B || e.slideCount === 1)
      return 0;
    var ee = 0;
    if (O ? (ee = -h(e), C % T !== 0 && n + T > C && (ee = -(n > C ? P - (n - C) : C % T)), S && (ee += parseInt(P / 2))) : (C % T !== 0 && n + T > C && (ee = P - C % T), S && (ee = parseInt(P / 2))), N = ee * H, D = ee * X, W ? G = n * X * -1 + D : G = n * H * -1 + N, A === !0) {
      var re, ne = v && v.node;
      if (re = n + h(e), te = ne && ne.childNodes[re], G = te ? te.offsetLeft * -1 : 0, S === !0) {
        re = O ? n + h(e) : n, te = ne && ne.children[re], G = 0;
        for (var oe = 0; oe < re; oe++)
          G -= ne && ne.children[oe] && ne.children[oe].offsetWidth;
        G -= parseInt(e.centerPadding), G += te && (I - te.offsetWidth) / 2;
      }
    }
    return G;
  }, h = j.getPreClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, m = j.getPostClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, c = j.getTotalSlides = function(e) {
    return e.slideCount === 1 ? 1 : h(e) + e.slideCount + m(e);
  }, d = j.siblingDirection = function(e) {
    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + w(e) ? "left" : "right" : e.targetSlide < e.currentSlide - _(e) ? "right" : "left";
  }, w = j.slidesOnRight = function(e) {
    var n = e.slidesToShow, v = e.centerMode, O = e.rtl, S = e.centerPadding;
    if (v) {
      var C = (n - 1) / 2 + 1;
      return parseInt(S) > 0 && (C += 1), O && n % 2 === 0 && (C += 1), C;
    }
    return O ? 0 : n - 1;
  }, _ = j.slidesOnLeft = function(e) {
    var n = e.slidesToShow, v = e.centerMode, O = e.rtl, S = e.centerPadding;
    if (v) {
      var C = (n - 1) / 2 + 1;
      return parseInt(S) > 0 && (C += 1), !O && n % 2 === 0 && (C += 1), C;
    }
    return O ? n - 1 : 0;
  };
  j.canUseDOM = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  };
  var t = j.validSettings = Object.keys(f.default);
  function F(o) {
    return t.reduce(function(e, n) {
      return o.hasOwnProperty(n) && (e[n] = o[n]), e;
    }, {});
  }
  return j;
}
var he = {}, qe;
function ft() {
  if (qe) return he;
  qe = 1, Object.defineProperty(he, "__esModule", {
    value: !0
  }), he.Track = void 0;
  var a = b(ue), f = b(_e()), p = ge();
  function b(l) {
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
        for (var m in h)
          ({}).hasOwnProperty.call(h, m) && (l[m] = h[m]);
      }
      return l;
    }, g.apply(null, arguments);
  }
  function L(l, r) {
    if (!(l instanceof r)) throw new TypeError("Cannot call a class as a function");
  }
  function x(l, r) {
    for (var h = 0; h < r.length; h++) {
      var m = r[h];
      m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(l, U(m.key), m);
    }
  }
  function M(l, r, h) {
    return r && x(l.prototype, r), Object.defineProperty(l, "prototype", { writable: !1 }), l;
  }
  function R(l, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
    l.prototype = Object.create(r && r.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), Object.defineProperty(l, "prototype", { writable: !1 }), r && z(l, r);
  }
  function z(l, r) {
    return z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(h, m) {
      return h.__proto__ = m, h;
    }, z(l, r);
  }
  function K(l) {
    var r = V();
    return function() {
      var h, m = E(l);
      if (r) {
        var c = E(this).constructor;
        h = Reflect.construct(m, arguments, c);
      } else h = m.apply(this, arguments);
      return Z(this, h);
    };
  }
  function Z(l, r) {
    if (r && (y(r) == "object" || typeof r == "function")) return r;
    if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $(l);
  }
  function $(l) {
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
  function E(l) {
    return E = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, E(l);
  }
  function J(l, r) {
    var h = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      var m = Object.getOwnPropertySymbols(l);
      r && (m = m.filter(function(c) {
        return Object.getOwnPropertyDescriptor(l, c).enumerable;
      })), h.push.apply(h, m);
    }
    return h;
  }
  function q(l) {
    for (var r = 1; r < arguments.length; r++) {
      var h = arguments[r] != null ? arguments[r] : {};
      r % 2 ? J(Object(h), !0).forEach(function(m) {
        Q(l, m, h[m]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(h)) : J(Object(h)).forEach(function(m) {
        Object.defineProperty(l, m, Object.getOwnPropertyDescriptor(h, m));
      });
    }
    return l;
  }
  function Q(l, r, h) {
    return (r = U(r)) in l ? Object.defineProperty(l, r, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : l[r] = h, l;
  }
  function U(l) {
    var r = Y(l, "string");
    return y(r) == "symbol" ? r : r + "";
  }
  function Y(l, r) {
    if (y(l) != "object" || !l) return l;
    var h = l[Symbol.toPrimitive];
    if (h !== void 0) {
      var m = h.call(l, r);
      if (y(m) != "object") return m;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(l);
  }
  var i = function(r) {
    var h, m, c, d, w;
    r.rtl ? w = r.slideCount - 1 - r.index : w = r.index, c = w < 0 || w >= r.slideCount, r.centerMode ? (d = Math.floor(r.slidesToShow / 2), m = (w - r.currentSlide) % r.slideCount === 0, w > r.currentSlide - d - 1 && w <= r.currentSlide + d && (h = !0)) : h = r.currentSlide <= w && w < r.currentSlide + r.slidesToShow;
    var _;
    r.targetSlide < 0 ? _ = r.targetSlide + r.slideCount : r.targetSlide >= r.slideCount ? _ = r.targetSlide - r.slideCount : _ = r.targetSlide;
    var t = w === _;
    return {
      "slick-slide": !0,
      "slick-active": h,
      "slick-center": m,
      "slick-cloned": c,
      "slick-current": t
      // dubious in case of RTL
    };
  }, s = function(r) {
    var h = {};
    return (r.variableWidth === void 0 || r.variableWidth === !1) && (h.width = r.slideWidth), r.fade && (h.position = "relative", r.vertical ? h.top = -r.index * parseInt(r.slideHeight) : h.left = -r.index * parseInt(r.slideWidth), h.opacity = r.currentSlide === r.index ? 1 : 0, h.zIndex = r.currentSlide === r.index ? 999 : 998, r.useCSS && (h.transition = "opacity " + r.speed + "ms " + r.cssEase + ", visibility " + r.speed + "ms " + r.cssEase)), h;
  }, u = function(r, h) {
    return r.key || h;
  }, k = function(r) {
    var h, m = [], c = [], d = [], w = a.default.Children.count(r.children), _ = (0, p.lazyStartIndex)(r), t = (0, p.lazyEndIndex)(r);
    return a.default.Children.forEach(r.children, function(F, o) {
      var e, n = {
        message: "children",
        index: o,
        slidesToScroll: r.slidesToScroll,
        currentSlide: r.currentSlide
      };
      !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(o) >= 0 ? e = F : e = /* @__PURE__ */ a.default.createElement("div", null);
      var v = s(q(q({}, r), {}, {
        index: o
      })), O = e.props.className || "", S = i(q(q({}, r), {}, {
        index: o
      }));
      if (m.push(/* @__PURE__ */ a.default.cloneElement(e, {
        key: "original" + u(e, o),
        "data-index": o,
        className: (0, f.default)(S, O),
        tabIndex: "-1",
        "aria-hidden": !S["slick-active"],
        style: q(q({
          outline: "none"
        }, e.props.style || {}), v),
        onClick: function(T) {
          e.props && e.props.onClick && e.props.onClick(T), r.focusOnSelect && r.focusOnSelect(n);
        }
      })), r.infinite && w > 1 && r.fade === !1 && !r.unslick) {
        var C = w - o;
        C <= (0, p.getPreClones)(r) && (h = -C, h >= _ && (e = F), S = i(q(q({}, r), {}, {
          index: h
        })), c.push(/* @__PURE__ */ a.default.cloneElement(e, {
          key: "precloned" + u(e, h),
          "data-index": h,
          tabIndex: "-1",
          className: (0, f.default)(S, O),
          "aria-hidden": !S["slick-active"],
          style: q(q({}, e.props.style || {}), v),
          onClick: function(T) {
            e.props && e.props.onClick && e.props.onClick(T), r.focusOnSelect && r.focusOnSelect(n);
          }
        }))), o < (0, p.getPostClones)(r) && (h = w + o, h < t && (e = F), S = i(q(q({}, r), {}, {
          index: h
        })), d.push(/* @__PURE__ */ a.default.cloneElement(e, {
          key: "postcloned" + u(e, h),
          "data-index": h,
          tabIndex: "-1",
          className: (0, f.default)(S, O),
          "aria-hidden": !S["slick-active"],
          style: q(q({}, e.props.style || {}), v),
          onClick: function(T) {
            e.props && e.props.onClick && e.props.onClick(T), r.focusOnSelect && r.focusOnSelect(n);
          }
        })));
      }
    }), r.rtl ? c.concat(m, d).reverse() : c.concat(m, d);
  };
  return he.Track = /* @__PURE__ */ (function(l) {
    R(h, l);
    var r = K(h);
    function h() {
      var m;
      L(this, h);
      for (var c = arguments.length, d = new Array(c), w = 0; w < c; w++)
        d[w] = arguments[w];
      return m = r.call.apply(r, [this].concat(d)), Q($(m), "node", null), Q($(m), "handleRef", function(_) {
        m.node = _;
      }), m;
    }
    return M(h, [{
      key: "render",
      value: function() {
        var c = k(this.props), d = this.props, w = d.onMouseEnter, _ = d.onMouseOver, t = d.onMouseLeave, F = {
          onMouseEnter: w,
          onMouseOver: _,
          onMouseLeave: t
        };
        return /* @__PURE__ */ a.default.createElement("div", g({
          ref: this.handleRef,
          className: "slick-track",
          style: this.props.trackStyle
        }, F), c);
      }
    }]), h;
  })(a.default.PureComponent), he;
}
var ye = {}, Fe;
function dt() {
  if (Fe) return ye;
  Fe = 1;
  function a(i) {
    "@babel/helpers - typeof";
    return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, a(i);
  }
  Object.defineProperty(ye, "__esModule", {
    value: !0
  }), ye.Dots = void 0;
  var f = y(ue), p = y(_e()), b = ge();
  function y(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function g(i, s) {
    var u = Object.keys(i);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(i);
      s && (k = k.filter(function(l) {
        return Object.getOwnPropertyDescriptor(i, l).enumerable;
      })), u.push.apply(u, k);
    }
    return u;
  }
  function L(i) {
    for (var s = 1; s < arguments.length; s++) {
      var u = arguments[s] != null ? arguments[s] : {};
      s % 2 ? g(Object(u), !0).forEach(function(k) {
        x(i, k, u[k]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(u)) : g(Object(u)).forEach(function(k) {
        Object.defineProperty(i, k, Object.getOwnPropertyDescriptor(u, k));
      });
    }
    return i;
  }
  function x(i, s, u) {
    return (s = K(s)) in i ? Object.defineProperty(i, s, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : i[s] = u, i;
  }
  function M(i, s) {
    if (!(i instanceof s)) throw new TypeError("Cannot call a class as a function");
  }
  function R(i, s) {
    for (var u = 0; u < s.length; u++) {
      var k = s[u];
      k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(i, K(k.key), k);
    }
  }
  function z(i, s, u) {
    return s && R(i.prototype, s), Object.defineProperty(i, "prototype", { writable: !1 }), i;
  }
  function K(i) {
    var s = Z(i, "string");
    return a(s) == "symbol" ? s : s + "";
  }
  function Z(i, s) {
    if (a(i) != "object" || !i) return i;
    var u = i[Symbol.toPrimitive];
    if (u !== void 0) {
      var k = u.call(i, s);
      if (a(k) != "object") return k;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(i);
  }
  function $(i, s) {
    if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
    i.prototype = Object.create(s && s.prototype, { constructor: { value: i, writable: !0, configurable: !0 } }), Object.defineProperty(i, "prototype", { writable: !1 }), s && V(i, s);
  }
  function V(i, s) {
    return V = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, k) {
      return u.__proto__ = k, u;
    }, V(i, s);
  }
  function E(i) {
    var s = Q();
    return function() {
      var u, k = U(i);
      if (s) {
        var l = U(this).constructor;
        u = Reflect.construct(k, arguments, l);
      } else u = k.apply(this, arguments);
      return J(this, u);
    };
  }
  function J(i, s) {
    if (s && (a(s) == "object" || typeof s == "function")) return s;
    if (s !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return q(i);
  }
  function q(i) {
    if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return i;
  }
  function Q() {
    try {
      var i = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (Q = function() {
      return !!i;
    })();
  }
  function U(i) {
    return U = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, U(i);
  }
  var Y = function(s) {
    var u;
    return s.infinite ? u = Math.ceil(s.slideCount / s.slidesToScroll) : u = Math.ceil((s.slideCount - s.slidesToShow) / s.slidesToScroll) + 1, u;
  };
  return ye.Dots = /* @__PURE__ */ (function(i) {
    $(u, i);
    var s = E(u);
    function u() {
      return M(this, u), s.apply(this, arguments);
    }
    return z(u, [{
      key: "clickHandler",
      value: function(l, r) {
        r.preventDefault(), this.props.clickHandler(l);
      }
    }, {
      key: "render",
      value: function() {
        for (var l = this.props, r = l.onMouseEnter, h = l.onMouseOver, m = l.onMouseLeave, c = l.infinite, d = l.slidesToScroll, w = l.slidesToShow, _ = l.slideCount, t = l.currentSlide, F = Y({
          slideCount: _,
          slidesToScroll: d,
          slidesToShow: w,
          infinite: c
        }), o = {
          onMouseEnter: r,
          onMouseOver: h,
          onMouseLeave: m
        }, e = [], n = 0; n < F; n++) {
          var v = (n + 1) * d - 1, O = c ? v : (0, b.clamp)(v, 0, _ - 1), S = O - (d - 1), C = c ? S : (0, b.clamp)(S, 0, _ - 1), P = (0, p.default)({
            "slick-active": c ? t >= C && t <= O : t === C
          }), T = {
            message: "dots",
            index: n,
            slidesToScroll: d,
            currentSlide: t
          }, H = this.clickHandler.bind(this, T);
          e = e.concat(/* @__PURE__ */ f.default.createElement("li", {
            key: n,
            className: P
          }, /* @__PURE__ */ f.default.cloneElement(this.props.customPaging(n), {
            onClick: H
          })));
        }
        return /* @__PURE__ */ f.default.cloneElement(this.props.appendDots(e), L({
          className: this.props.dotsClass
        }, o));
      }
    }]), u;
  })(f.default.PureComponent), ye;
}
var se = {}, Ge;
function pt() {
  if (Ge) return se;
  Ge = 1;
  function a(i) {
    "@babel/helpers - typeof";
    return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, a(i);
  }
  Object.defineProperty(se, "__esModule", {
    value: !0
  }), se.PrevArrow = se.NextArrow = void 0;
  var f = y(ue), p = y(_e()), b = ge();
  function y(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(i) {
      for (var s = 1; s < arguments.length; s++) {
        var u = arguments[s];
        for (var k in u)
          ({}).hasOwnProperty.call(u, k) && (i[k] = u[k]);
      }
      return i;
    }, g.apply(null, arguments);
  }
  function L(i, s) {
    var u = Object.keys(i);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(i);
      s && (k = k.filter(function(l) {
        return Object.getOwnPropertyDescriptor(i, l).enumerable;
      })), u.push.apply(u, k);
    }
    return u;
  }
  function x(i) {
    for (var s = 1; s < arguments.length; s++) {
      var u = arguments[s] != null ? arguments[s] : {};
      s % 2 ? L(Object(u), !0).forEach(function(k) {
        M(i, k, u[k]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(u)) : L(Object(u)).forEach(function(k) {
        Object.defineProperty(i, k, Object.getOwnPropertyDescriptor(u, k));
      });
    }
    return i;
  }
  function M(i, s, u) {
    return (s = Z(s)) in i ? Object.defineProperty(i, s, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : i[s] = u, i;
  }
  function R(i, s) {
    if (!(i instanceof s)) throw new TypeError("Cannot call a class as a function");
  }
  function z(i, s) {
    for (var u = 0; u < s.length; u++) {
      var k = s[u];
      k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(i, Z(k.key), k);
    }
  }
  function K(i, s, u) {
    return s && z(i.prototype, s), Object.defineProperty(i, "prototype", { writable: !1 }), i;
  }
  function Z(i) {
    var s = $(i, "string");
    return a(s) == "symbol" ? s : s + "";
  }
  function $(i, s) {
    if (a(i) != "object" || !i) return i;
    var u = i[Symbol.toPrimitive];
    if (u !== void 0) {
      var k = u.call(i, s);
      if (a(k) != "object") return k;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(i);
  }
  function V(i, s) {
    if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
    i.prototype = Object.create(s && s.prototype, { constructor: { value: i, writable: !0, configurable: !0 } }), Object.defineProperty(i, "prototype", { writable: !1 }), s && E(i, s);
  }
  function E(i, s) {
    return E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, k) {
      return u.__proto__ = k, u;
    }, E(i, s);
  }
  function J(i) {
    var s = U();
    return function() {
      var u, k = Y(i);
      if (s) {
        var l = Y(this).constructor;
        u = Reflect.construct(k, arguments, l);
      } else u = k.apply(this, arguments);
      return q(this, u);
    };
  }
  function q(i, s) {
    if (s && (a(s) == "object" || typeof s == "function")) return s;
    if (s !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Q(i);
  }
  function Q(i) {
    if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return i;
  }
  function U() {
    try {
      var i = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (U = function() {
      return !!i;
    })();
  }
  function Y(i) {
    return Y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, Y(i);
  }
  return se.PrevArrow = /* @__PURE__ */ (function(i) {
    V(u, i);
    var s = J(u);
    function u() {
      return R(this, u), s.apply(this, arguments);
    }
    return K(u, [{
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
          className: (0, p.default)(l),
          style: {
            display: "block"
          },
          onClick: r
        }, m = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, c;
        return this.props.prevArrow ? c = /* @__PURE__ */ f.default.cloneElement(this.props.prevArrow, x(x({}, h), m)) : c = /* @__PURE__ */ f.default.createElement("button", g({
          key: "0",
          type: "button"
        }, h), " ", "Previous"), c;
      }
    }]), u;
  })(f.default.PureComponent), se.NextArrow = /* @__PURE__ */ (function(i) {
    V(u, i);
    var s = J(u);
    function u() {
      return R(this, u), s.apply(this, arguments);
    }
    return K(u, [{
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
        (0, b.canGoNext)(this.props) || (l["slick-disabled"] = !0, r = null);
        var h = {
          key: "1",
          "data-role": "none",
          className: (0, p.default)(l),
          style: {
            display: "block"
          },
          onClick: r
        }, m = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, c;
        return this.props.nextArrow ? c = /* @__PURE__ */ f.default.cloneElement(this.props.nextArrow, x(x({}, h), m)) : c = /* @__PURE__ */ f.default.createElement("button", g({
          key: "1",
          type: "button"
        }, h), " ", "Next"), c;
      }
    }]), u;
  })(f.default.PureComponent), se;
}
var Je = (function() {
  if (typeof Map < "u")
    return Map;
  function a(f, p) {
    var b = -1;
    return f.some(function(y, g) {
      return y[0] === p ? (b = g, !0) : !1;
    }), b;
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
      }), f.prototype.get = function(p) {
        var b = a(this.__entries__, p), y = this.__entries__[b];
        return y && y[1];
      }, f.prototype.set = function(p, b) {
        var y = a(this.__entries__, p);
        ~y ? this.__entries__[y][1] = b : this.__entries__.push([p, b]);
      }, f.prototype.delete = function(p) {
        var b = this.__entries__, y = a(b, p);
        ~y && b.splice(y, 1);
      }, f.prototype.has = function(p) {
        return !!~a(this.__entries__, p);
      }, f.prototype.clear = function() {
        this.__entries__.splice(0);
      }, f.prototype.forEach = function(p, b) {
        b === void 0 && (b = null);
        for (var y = 0, g = this.__entries__; y < g.length; y++) {
          var L = g[y];
          p.call(b, L[1], L[0]);
        }
      }, f;
    })()
  );
})(), Re = typeof window < "u" && typeof document < "u" && window.document === document, we = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), vt = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(we) : function(a) {
    return setTimeout(function() {
      return a(Date.now());
    }, 1e3 / 60);
  };
})(), ht = 2;
function yt(a, f) {
  var p = !1, b = !1, y = 0;
  function g() {
    p && (p = !1, a()), b && x();
  }
  function L() {
    vt(g);
  }
  function x() {
    var M = Date.now();
    if (p) {
      if (M - y < ht)
        return;
      b = !0;
    } else
      p = !0, b = !1, setTimeout(L, f);
    y = M;
  }
  return x;
}
var gt = 20, bt = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], mt = typeof MutationObserver < "u", St = (
  /** @class */
  (function() {
    function a() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = yt(this.refresh.bind(this), gt);
    }
    return a.prototype.addObserver = function(f) {
      ~this.observers_.indexOf(f) || this.observers_.push(f), this.connected_ || this.connect_();
    }, a.prototype.removeObserver = function(f) {
      var p = this.observers_, b = p.indexOf(f);
      ~b && p.splice(b, 1), !p.length && this.connected_ && this.disconnect_();
    }, a.prototype.refresh = function() {
      var f = this.updateObservers_();
      f && this.refresh();
    }, a.prototype.updateObservers_ = function() {
      var f = this.observers_.filter(function(p) {
        return p.gatherActive(), p.hasActive();
      });
      return f.forEach(function(p) {
        return p.broadcastActive();
      }), f.length > 0;
    }, a.prototype.connect_ = function() {
      !Re || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), mt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, a.prototype.disconnect_ = function() {
      !Re || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, a.prototype.onTransitionEnd_ = function(f) {
      var p = f.propertyName, b = p === void 0 ? "" : p, y = bt.some(function(g) {
        return !!~b.indexOf(g);
      });
      y && this.refresh();
    }, a.getInstance = function() {
      return this.instance_ || (this.instance_ = new a()), this.instance_;
    }, a.instance_ = null, a;
  })()
), Qe = (function(a, f) {
  for (var p = 0, b = Object.keys(f); p < b.length; p++) {
    var y = b[p];
    Object.defineProperty(a, y, {
      value: f[y],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return a;
}), fe = (function(a) {
  var f = a && a.ownerDocument && a.ownerDocument.defaultView;
  return f || we;
}), Ze = ke(0, 0, 0, 0);
function Oe(a) {
  return parseFloat(a) || 0;
}
function Be(a) {
  for (var f = [], p = 1; p < arguments.length; p++)
    f[p - 1] = arguments[p];
  return f.reduce(function(b, y) {
    var g = a["border-" + y + "-width"];
    return b + Oe(g);
  }, 0);
}
function wt(a) {
  for (var f = ["top", "right", "bottom", "left"], p = {}, b = 0, y = f; b < y.length; b++) {
    var g = y[b], L = a["padding-" + g];
    p[g] = Oe(L);
  }
  return p;
}
function Ot(a) {
  var f = a.getBBox();
  return ke(0, 0, f.width, f.height);
}
function _t(a) {
  var f = a.clientWidth, p = a.clientHeight;
  if (!f && !p)
    return Ze;
  var b = fe(a).getComputedStyle(a), y = wt(b), g = y.left + y.right, L = y.top + y.bottom, x = Oe(b.width), M = Oe(b.height);
  if (b.boxSizing === "border-box" && (Math.round(x + g) !== f && (x -= Be(b, "left", "right") + g), Math.round(M + L) !== p && (M -= Be(b, "top", "bottom") + L)), !Pt(a)) {
    var R = Math.round(x + g) - f, z = Math.round(M + L) - p;
    Math.abs(R) !== 1 && (x -= R), Math.abs(z) !== 1 && (M -= z);
  }
  return ke(y.left, y.top, x, M);
}
var kt = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(a) {
    return a instanceof fe(a).SVGGraphicsElement;
  } : function(a) {
    return a instanceof fe(a).SVGElement && typeof a.getBBox == "function";
  };
})();
function Pt(a) {
  return a === fe(a).document.documentElement;
}
function Ct(a) {
  return Re ? kt(a) ? Ot(a) : _t(a) : Ze;
}
function Tt(a) {
  var f = a.x, p = a.y, b = a.width, y = a.height, g = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, L = Object.create(g.prototype);
  return Qe(L, {
    x: f,
    y: p,
    width: b,
    height: y,
    top: p,
    right: f + b,
    bottom: y + p,
    left: f
  }), L;
}
function ke(a, f, p, b) {
  return { x: a, y: f, width: p, height: b };
}
var jt = (
  /** @class */
  (function() {
    function a(f) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ke(0, 0, 0, 0), this.target = f;
    }
    return a.prototype.isActive = function() {
      var f = Ct(this.target);
      return this.contentRect_ = f, f.width !== this.broadcastWidth || f.height !== this.broadcastHeight;
    }, a.prototype.broadcastRect = function() {
      var f = this.contentRect_;
      return this.broadcastWidth = f.width, this.broadcastHeight = f.height, f;
    }, a;
  })()
), Et = (
  /** @class */
  /* @__PURE__ */ (function() {
    function a(f, p) {
      var b = Tt(p);
      Qe(this, { target: f, contentRect: b });
    }
    return a;
  })()
), Lt = (
  /** @class */
  (function() {
    function a(f, p, b) {
      if (this.activeObservations_ = [], this.observations_ = new Je(), typeof f != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = f, this.controller_ = p, this.callbackCtx_ = b;
    }
    return a.prototype.observe = function(f) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(f instanceof fe(f).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var p = this.observations_;
        p.has(f) || (p.set(f, new jt(f)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, a.prototype.unobserve = function(f) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(f instanceof fe(f).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var p = this.observations_;
        p.has(f) && (p.delete(f), p.size || this.controller_.removeObserver(this));
      }
    }, a.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, a.prototype.gatherActive = function() {
      var f = this;
      this.clearActive(), this.observations_.forEach(function(p) {
        p.isActive() && f.activeObservations_.push(p);
      });
    }, a.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var f = this.callbackCtx_, p = this.activeObservations_.map(function(b) {
          return new Et(b.target, b.broadcastRect());
        });
        this.callback_.call(f, p, f), this.clearActive();
      }
    }, a.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, a.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, a;
  })()
), et = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Je(), tt = (
  /** @class */
  /* @__PURE__ */ (function() {
    function a(f) {
      if (!(this instanceof a))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var p = St.getInstance(), b = new Lt(f, p, this);
      et.set(this, b);
    }
    return a;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(a) {
  tt.prototype[a] = function() {
    var f;
    return (f = et.get(this))[a].apply(f, arguments);
  };
});
var xt = (function() {
  return typeof we.ResizeObserver < "u" ? we.ResizeObserver : tt;
})();
const Mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xt
}, Symbol.toStringTag, { value: "Module" })), Rt = /* @__PURE__ */ st(Mt);
var Xe;
function zt() {
  if (Xe) return ve;
  Xe = 1, Object.defineProperty(ve, "__esModule", {
    value: !0
  }), ve.InnerSlider = void 0;
  var a = R(ue), f = R(ut()), p = R(ct()), b = R(_e()), y = ge(), g = ft(), L = dt(), x = pt(), M = R(Rt);
  function R(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function z(c) {
    "@babel/helpers - typeof";
    return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
      return typeof d;
    } : function(d) {
      return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
    }, z(c);
  }
  function K() {
    return K = Object.assign ? Object.assign.bind() : function(c) {
      for (var d = 1; d < arguments.length; d++) {
        var w = arguments[d];
        for (var _ in w)
          ({}).hasOwnProperty.call(w, _) && (c[_] = w[_]);
      }
      return c;
    }, K.apply(null, arguments);
  }
  function Z(c, d) {
    if (c == null) return {};
    var w, _, t = $(c, d);
    if (Object.getOwnPropertySymbols) {
      var F = Object.getOwnPropertySymbols(c);
      for (_ = 0; _ < F.length; _++)
        w = F[_], d.includes(w) || {}.propertyIsEnumerable.call(c, w) && (t[w] = c[w]);
    }
    return t;
  }
  function $(c, d) {
    if (c == null) return {};
    var w = {};
    for (var _ in c)
      if ({}.hasOwnProperty.call(c, _)) {
        if (d.includes(_)) continue;
        w[_] = c[_];
      }
    return w;
  }
  function V(c, d) {
    var w = Object.keys(c);
    if (Object.getOwnPropertySymbols) {
      var _ = Object.getOwnPropertySymbols(c);
      d && (_ = _.filter(function(t) {
        return Object.getOwnPropertyDescriptor(c, t).enumerable;
      })), w.push.apply(w, _);
    }
    return w;
  }
  function E(c) {
    for (var d = 1; d < arguments.length; d++) {
      var w = arguments[d] != null ? arguments[d] : {};
      d % 2 ? V(Object(w), !0).forEach(function(_) {
        r(c, _, w[_]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(w)) : V(Object(w)).forEach(function(_) {
        Object.defineProperty(c, _, Object.getOwnPropertyDescriptor(w, _));
      });
    }
    return c;
  }
  function J(c, d) {
    if (!(c instanceof d)) throw new TypeError("Cannot call a class as a function");
  }
  function q(c, d) {
    for (var w = 0; w < d.length; w++) {
      var _ = d[w];
      _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(c, h(_.key), _);
    }
  }
  function Q(c, d, w) {
    return d && q(c.prototype, d), Object.defineProperty(c, "prototype", { writable: !1 }), c;
  }
  function U(c, d) {
    if (typeof d != "function" && d !== null) throw new TypeError("Super expression must either be null or a function");
    c.prototype = Object.create(d && d.prototype, { constructor: { value: c, writable: !0, configurable: !0 } }), Object.defineProperty(c, "prototype", { writable: !1 }), d && Y(c, d);
  }
  function Y(c, d) {
    return Y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(w, _) {
      return w.__proto__ = _, w;
    }, Y(c, d);
  }
  function i(c) {
    var d = k();
    return function() {
      var w, _ = l(c);
      if (d) {
        var t = l(this).constructor;
        w = Reflect.construct(_, arguments, t);
      } else w = _.apply(this, arguments);
      return s(this, w);
    };
  }
  function s(c, d) {
    if (d && (z(d) == "object" || typeof d == "function")) return d;
    if (d !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return u(c);
  }
  function u(c) {
    if (c === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return c;
  }
  function k() {
    try {
      var c = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (k = function() {
      return !!c;
    })();
  }
  function l(c) {
    return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(d) {
      return d.__proto__ || Object.getPrototypeOf(d);
    }, l(c);
  }
  function r(c, d, w) {
    return (d = h(d)) in c ? Object.defineProperty(c, d, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : c[d] = w, c;
  }
  function h(c) {
    var d = m(c, "string");
    return z(d) == "symbol" ? d : d + "";
  }
  function m(c, d) {
    if (z(c) != "object" || !c) return c;
    var w = c[Symbol.toPrimitive];
    if (w !== void 0) {
      var _ = w.call(c, d);
      if (z(_) != "object") return _;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (d === "string" ? String : Number)(c);
  }
  return ve.InnerSlider = /* @__PURE__ */ (function(c) {
    U(w, c);
    var d = i(w);
    function w(_) {
      var t;
      J(this, w), t = d.call(this, _), r(u(t), "listRefHandler", function(o) {
        return t.list = o;
      }), r(u(t), "trackRefHandler", function(o) {
        return t.track = o;
      }), r(u(t), "adaptHeight", function() {
        if (t.props.adaptiveHeight && t.list) {
          var o = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
          t.list.style.height = (0, y.getHeight)(o) + "px";
        }
      }), r(u(t), "componentDidMount", function() {
        if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
          var o = (0, y.getOnDemandLazySlides)(E(E({}, t.props), t.state));
          o.length > 0 && (t.setState(function(n) {
            return {
              lazyLoadedList: n.lazyLoadedList.concat(o)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(o));
        }
        var e = E({
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
        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach(function(o) {
          return clearTimeout(o);
        }), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
      }), r(u(t), "componentDidUpdate", function(o) {
        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
          var e = (0, y.getOnDemandLazySlides)(E(E({}, t.props), t.state));
          e.length > 0 && (t.setState(function(O) {
            return {
              lazyLoadedList: O.lazyLoadedList.concat(e)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(e));
        }
        t.adaptHeight();
        var n = E(E({
          listRef: t.list,
          trackRef: t.track
        }, t.props), t.state), v = t.didPropsChange(o);
        v && t.updateState(n, v, function() {
          t.state.currentSlide >= a.default.Children.count(t.props.children) && t.changeSlide({
            message: "index",
            index: a.default.Children.count(t.props.children) - t.props.slidesToShow,
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
          var n = E(E({
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
        var v = (0, y.initializedState)(o);
        o = E(E(E({}, o), v), {}, {
          slideIndex: v.currentSlide
        });
        var O = (0, y.getTrackLeft)(o);
        o = E(E({}, o), {}, {
          left: O
        });
        var S = (0, y.getTrackCSS)(o);
        (e || a.default.Children.count(t.props.children) !== a.default.Children.count(o.children)) && (v.trackStyle = S), t.setState(v, n);
      }), r(u(t), "ssrInit", function() {
        if (t.props.variableWidth) {
          var o = 0, e = 0, n = [], v = (0, y.getPreClones)(E(E(E({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          })), O = (0, y.getPostClones)(E(E(E({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          }));
          t.props.children.forEach(function(te) {
            n.push(te.props.style.width), o += te.props.style.width;
          });
          for (var S = 0; S < v; S++)
            e += n[n.length - 1 - S], o += n[n.length - 1 - S];
          for (var C = 0; C < O; C++)
            o += n[C];
          for (var P = 0; P < t.state.currentSlide; P++)
            e += n[P];
          var T = {
            width: o + "px",
            left: -e + "px"
          };
          if (t.props.centerMode) {
            var H = "".concat(n[t.state.currentSlide], "px");
            T.left = "calc(".concat(T.left, " + (100% - ").concat(H, ") / 2 ) ");
          }
          return {
            trackStyle: T
          };
        }
        var I = a.default.Children.count(t.props.children), A = E(E(E({}, t.props), t.state), {}, {
          slideCount: I
        }), X = (0, y.getPreClones)(A) + (0, y.getPostClones)(A) + I, B = 100 / t.props.slidesToShow * X, W = 100 / X, N = -W * ((0, y.getPreClones)(A) + t.state.currentSlide) * B / 100;
        t.props.centerMode && (N += (100 - W * B / 100) / 2);
        var G = {
          width: B + "%",
          left: N + "%"
        };
        return {
          slideWidth: W + "%",
          trackStyle: G
        };
      }), r(u(t), "checkImagesLoad", function() {
        var o = t.list && t.list.querySelectorAll && t.list.querySelectorAll(".slick-slide img") || [], e = o.length, n = 0;
        Array.prototype.forEach.call(o, function(v) {
          var O = function() {
            return ++n && n >= e && t.onWindowResized();
          };
          if (!v.onclick)
            v.onclick = function() {
              return v.parentNode.focus();
            };
          else {
            var S = v.onclick;
            v.onclick = function(C) {
              S(C), v.parentNode.focus();
            };
          }
          v.onload || (t.props.lazyLoad ? v.onload = function() {
            t.adaptHeight(), t.callbackTimers.push(setTimeout(t.onWindowResized, t.props.speed));
          } : (v.onload = O, v.onerror = function() {
            O(), t.props.onLazyLoadError && t.props.onLazyLoadError();
          }));
        });
      }), r(u(t), "progressiveLazyLoad", function() {
        for (var o = [], e = E(E({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, y.getPostClones)(e); n++)
          if (t.state.lazyLoadedList.indexOf(n) < 0) {
            o.push(n);
            break;
          }
        for (var v = t.state.currentSlide - 1; v >= -(0, y.getPreClones)(e); v--)
          if (t.state.lazyLoadedList.indexOf(v) < 0) {
            o.push(v);
            break;
          }
        o.length > 0 ? (t.setState(function(O) {
          return {
            lazyLoadedList: O.lazyLoadedList.concat(o)
          };
        }), t.props.onLazyLoad && t.props.onLazyLoad(o)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
      }), r(u(t), "slideHandler", function(o) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = t.props, v = n.asNavFor, O = n.beforeChange, S = n.onLazyLoad, C = n.speed, P = n.afterChange, T = t.state.currentSlide, H = (0, y.slideHandler)(E(E(E({
          index: o
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e
        })), I = H.state, A = H.nextState;
        if (I) {
          O && O(T, I.currentSlide);
          var X = I.lazyLoadedList.filter(function(B) {
            return t.state.lazyLoadedList.indexOf(B) < 0;
          });
          S && X.length > 0 && S(X), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), P && P(T), delete t.animationEndCallback), t.setState(I, function() {
            v && t.asNavForIndex !== o && (t.asNavForIndex = o, v.innerSlider.slideHandler(o)), A && (t.animationEndCallback = setTimeout(function() {
              var B = A.animating, W = Z(A, ["animating"]);
              t.setState(W, function() {
                t.callbackTimers.push(setTimeout(function() {
                  return t.setState({
                    animating: B
                  });
                }, 10)), P && P(I.currentSlide), delete t.animationEndCallback;
              });
            }, C));
          });
        }
      }), r(u(t), "changeSlide", function(o) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = E(E({}, t.props), t.state), v = (0, y.changeSlide)(n, o);
        if (!(v !== 0 && !v) && (e === !0 ? t.slideHandler(v, e) : t.slideHandler(v), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
          var O = t.list.querySelectorAll(".slick-current");
          O[0] && O[0].focus();
        }
      }), r(u(t), "clickHandler", function(o) {
        t.clickable === !1 && (o.stopPropagation(), o.preventDefault()), t.clickable = !0;
      }), r(u(t), "keyHandler", function(o) {
        var e = (0, y.keyHandler)(o, t.props.accessibility, t.props.rtl);
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
        var e = (0, y.swipeStart)(o, t.props.swipe, t.props.draggable);
        e !== "" && t.setState(e);
      }), r(u(t), "swipeMove", function(o) {
        var e = (0, y.swipeMove)(o, E(E(E({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(u(t), "swipeEnd", function(o) {
        var e = (0, y.swipeEnd)(o, E(E(E({}, t.props), t.state), {}, {
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
        else if ((0, y.canGoNext)(E(E({}, t.props), t.state)))
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
        }), e = E(E({}, t.props), t.state), n = (0, y.extractObject)(e, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), v = t.props.pauseOnHover;
        n = E(E({}, n), {}, {
          onMouseEnter: v ? t.onTrackOver : null,
          onMouseLeave: v ? t.onTrackLeave : null,
          onMouseOver: v ? t.onTrackOver : null,
          focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
        });
        var O;
        if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
          var S = (0, y.extractObject)(e, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), C = t.props.pauseOnDotsHover;
          S = E(E({}, S), {}, {
            clickHandler: t.changeSlide,
            onMouseEnter: C ? t.onDotsLeave : null,
            onMouseOver: C ? t.onDotsOver : null,
            onMouseLeave: C ? t.onDotsLeave : null
          }), O = /* @__PURE__ */ a.default.createElement(L.Dots, S);
        }
        var P, T, H = (0, y.extractObject)(e, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        H.clickHandler = t.changeSlide, t.props.arrows && (P = /* @__PURE__ */ a.default.createElement(x.PrevArrow, H), T = /* @__PURE__ */ a.default.createElement(x.NextArrow, H));
        var I = null;
        t.props.vertical && (I = {
          height: t.state.listHeight
        });
        var A = null;
        t.props.vertical === !1 ? t.props.centerMode === !0 && (A = {
          padding: "0px " + t.props.centerPadding
        }) : t.props.centerMode === !0 && (A = {
          padding: t.props.centerPadding + " 0px"
        });
        var X = E(E({}, I), A), B = t.props.touchMove, W = {
          className: "slick-list",
          style: X,
          onClick: t.clickHandler,
          onMouseDown: B ? t.swipeStart : null,
          onMouseMove: t.state.dragging && B ? t.swipeMove : null,
          onMouseUp: B ? t.swipeEnd : null,
          onMouseLeave: t.state.dragging && B ? t.swipeEnd : null,
          onTouchStart: B ? t.swipeStart : null,
          onTouchMove: t.state.dragging && B ? t.swipeMove : null,
          onTouchEnd: B ? t.touchEnd : null,
          onTouchCancel: t.state.dragging && B ? t.swipeEnd : null,
          onKeyDown: t.props.accessibility ? t.keyHandler : null
        }, N = {
          className: o,
          dir: "ltr",
          style: t.props.style
        };
        return t.props.unslick && (W = {
          className: "slick-list"
        }, N = {
          className: o,
          style: t.props.style
        }), /* @__PURE__ */ a.default.createElement("div", N, t.props.unslick ? "" : P, /* @__PURE__ */ a.default.createElement("div", K({
          ref: t.listRefHandler
        }, W), /* @__PURE__ */ a.default.createElement(g.Track, K({
          ref: t.trackRefHandler
        }, n), t.props.children)), t.props.unslick ? "" : T, t.props.unslick ? "" : O);
      }), t.list = null, t.track = null, t.state = E(E({}, f.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: a.default.Children.count(t.props.children)
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      var F = t.ssrInit();
      return t.state = E(E({}, t.state), F), t;
    }
    return Q(w, [{
      key: "didPropsChange",
      value: function(t) {
        for (var F = !1, o = 0, e = Object.keys(this.props); o < e.length; o++) {
          var n = e[o];
          if (!t.hasOwnProperty(n)) {
            F = !0;
            break;
          }
          if (!(z(t[n]) === "object" || typeof t[n] == "function" || isNaN(t[n])) && t[n] !== this.props[n]) {
            F = !0;
            break;
          }
        }
        return F || a.default.Children.count(this.props.children) !== a.default.Children.count(t.children);
      }
    }]), w;
  })(a.default.Component), ve;
}
var xe, Ke;
function Dt() {
  if (Ke) return xe;
  Ke = 1;
  var a = function(f) {
    return f.replace(/[A-Z]/g, function(p) {
      return "-" + p.toLowerCase();
    }).toLowerCase();
  };
  return xe = a, xe;
}
var Me, Ue;
function Nt() {
  if (Ue) return Me;
  Ue = 1;
  var a = Dt(), f = function(y) {
    var g = /[height|width]$/;
    return g.test(y);
  }, p = function(y) {
    var g = "", L = Object.keys(y);
    return L.forEach(function(x, M) {
      var R = y[x];
      x = a(x), f(x) && typeof R == "number" && (R = R + "px"), R === !0 ? g += x : R === !1 ? g += "not " + x : g += "(" + x + ": " + R + ")", M < L.length - 1 && (g += " and ");
    }), g;
  }, b = function(y) {
    var g = "";
    return typeof y == "string" ? y : y instanceof Array ? (y.forEach(function(L, x) {
      g += p(L), x < y.length - 1 && (g += ", ");
    }), g) : p(y);
  };
  return Me = b, Me;
}
var Ye;
function Ht() {
  return Ye || (Ye = 1, (function(a) {
    var f = { NODE_ENV: "production" };
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.default = void 0;
    var p = x(ue), b = zt(), y = x(Nt()), g = x(Ve()), L = ge();
    function x(l) {
      return l && l.__esModule ? l : { default: l };
    }
    function M(l) {
      "@babel/helpers - typeof";
      return M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
        return typeof r;
      } : function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, M(l);
    }
    function R() {
      return R = Object.assign ? Object.assign.bind() : function(l) {
        for (var r = 1; r < arguments.length; r++) {
          var h = arguments[r];
          for (var m in h)
            ({}).hasOwnProperty.call(h, m) && (l[m] = h[m]);
        }
        return l;
      }, R.apply(null, arguments);
    }
    function z(l, r) {
      var h = Object.keys(l);
      if (Object.getOwnPropertySymbols) {
        var m = Object.getOwnPropertySymbols(l);
        r && (m = m.filter(function(c) {
          return Object.getOwnPropertyDescriptor(l, c).enumerable;
        })), h.push.apply(h, m);
      }
      return h;
    }
    function K(l) {
      for (var r = 1; r < arguments.length; r++) {
        var h = arguments[r] != null ? arguments[r] : {};
        r % 2 ? z(Object(h), !0).forEach(function(m) {
          s(l, m, h[m]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(h)) : z(Object(h)).forEach(function(m) {
          Object.defineProperty(l, m, Object.getOwnPropertyDescriptor(h, m));
        });
      }
      return l;
    }
    function Z(l, r) {
      if (!(l instanceof r)) throw new TypeError("Cannot call a class as a function");
    }
    function $(l, r) {
      for (var h = 0; h < r.length; h++) {
        var m = r[h];
        m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(l, u(m.key), m);
      }
    }
    function V(l, r, h) {
      return r && $(l.prototype, r), Object.defineProperty(l, "prototype", { writable: !1 }), l;
    }
    function E(l, r) {
      if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
      l.prototype = Object.create(r && r.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), Object.defineProperty(l, "prototype", { writable: !1 }), r && J(l, r);
    }
    function J(l, r) {
      return J = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(h, m) {
        return h.__proto__ = m, h;
      }, J(l, r);
    }
    function q(l) {
      var r = Y();
      return function() {
        var h, m = i(l);
        if (r) {
          var c = i(this).constructor;
          h = Reflect.construct(m, arguments, c);
        } else h = m.apply(this, arguments);
        return Q(this, h);
      };
    }
    function Q(l, r) {
      if (r && (M(r) == "object" || typeof r == "function")) return r;
      if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return U(l);
    }
    function U(l) {
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
    function i(l) {
      return i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
      }, i(l);
    }
    function s(l, r, h) {
      return (r = u(r)) in l ? Object.defineProperty(l, r, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : l[r] = h, l;
    }
    function u(l) {
      var r = k(l, "string");
      return M(r) == "symbol" ? r : r + "";
    }
    function k(l, r) {
      if (M(l) != "object" || !l) return l;
      var h = l[Symbol.toPrimitive];
      if (h !== void 0) {
        var m = h.call(l, r);
        if (M(m) != "object") return m;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(l);
    }
    a.default = /* @__PURE__ */ (function(l) {
      E(h, l);
      var r = q(h);
      function h(m) {
        var c;
        return Z(this, h), c = r.call(this, m), s(U(c), "innerSliderRefHandler", function(d) {
          return c.innerSlider = d;
        }), s(U(c), "slickPrev", function() {
          return c.innerSlider.slickPrev();
        }), s(U(c), "slickNext", function() {
          return c.innerSlider.slickNext();
        }), s(U(c), "slickGoTo", function(d) {
          var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return c.innerSlider.slickGoTo(d, w);
        }), s(U(c), "slickPause", function() {
          return c.innerSlider.pause("paused");
        }), s(U(c), "slickPlay", function() {
          return c.innerSlider.autoPlay("play");
        }), c.state = {
          breakpoint: null
        }, c._responsiveMediaHandlers = [], c;
      }
      return V(h, [{
        key: "media",
        value: function(c, d) {
          var w = window.matchMedia(c), _ = function(F) {
            var o = F.matches;
            o && d();
          };
          w.addListener(_), this._responsiveMediaHandlers.push({
            mql: w,
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
              var F;
              t === 0 ? F = (0, y.default)({
                minWidth: 0,
                maxWidth: _
              }) : F = (0, y.default)({
                minWidth: d[t - 1] + 1,
                maxWidth: _
              }), (0, L.canUseDOM)() && c.media(F, function() {
                c.setState({
                  breakpoint: _
                });
              });
            });
            var w = (0, y.default)({
              minWidth: d.slice(-1)[0]
            });
            (0, L.canUseDOM)() && this.media(w, function() {
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
          var c = this, d, w;
          this.state.breakpoint ? (w = this.props.responsive.filter(function(C) {
            return C.breakpoint === c.state.breakpoint;
          }), d = w[0].settings === "unslick" ? "unslick" : K(K(K({}, g.default), this.props), w[0].settings)) : d = K(K({}, g.default), this.props), d.centerMode && (d.slidesToScroll > 1 && f.NODE_ENV, d.slidesToScroll = 1), d.fade && (d.slidesToShow > 1 && f.NODE_ENV, d.slidesToScroll > 1 && f.NODE_ENV, d.slidesToShow = 1, d.slidesToScroll = 1);
          var _ = p.default.Children.toArray(this.props.children);
          _ = _.filter(function(C) {
            return typeof C == "string" ? !!C.trim() : !!C;
          }), d.variableWidth && (d.rows > 1 || d.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), d.variableWidth = !1);
          for (var t = [], F = null, o = 0; o < _.length; o += d.rows * d.slidesPerRow) {
            for (var e = [], n = o; n < o + d.rows * d.slidesPerRow; n += d.slidesPerRow) {
              for (var v = [], O = n; O < n + d.slidesPerRow && (d.variableWidth && _[O].props.style && (F = _[O].props.style.width), !(O >= _.length)); O += 1)
                v.push(/* @__PURE__ */ p.default.cloneElement(_[O], {
                  key: 100 * o + 10 * n + O,
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
                width: F
              }
            }, e)) : t.push(/* @__PURE__ */ p.default.createElement("div", {
              key: o
            }, e));
          }
          if (d === "unslick") {
            var S = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ p.default.createElement("div", {
              className: S
            }, _);
          } else t.length <= d.slidesToShow && (d.unslick = !0);
          return /* @__PURE__ */ p.default.createElement(b.InnerSlider, R({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, (0, L.filterSettings)(d)), t);
        }
      }]), h;
    })(p.default.Component);
  })(Ce)), Ce;
}
var $e;
function It() {
  return $e || ($e = 1, (function(a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.default = void 0;
    var f = p(Ht());
    function p(b) {
      return b && b.__esModule ? b : { default: b };
    }
    a.default = f.default;
  })(Pe)), Pe;
}
var At = It();
const Wt = /* @__PURE__ */ lt(At);
function qt({
  title: a,
  titleId: f,
  ...p
}, b) {
  return /* @__PURE__ */ Se.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: b,
    "aria-labelledby": f
  }, p), a ? /* @__PURE__ */ Se.createElement("title", {
    id: f
  }, a) : null, /* @__PURE__ */ Se.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const Ft = /* @__PURE__ */ Se.forwardRef(qt), Gt = ({
  text: a = "Link",
  href: f = "#",
  variant: p = "dark",
  // dark, light
  icon: b,
  className: y = "",
  ...g
}) => {
  const L = "text-link", x = (z) => {
    switch (z) {
      case "light":
        return "link-light";
      case "dark":
        return "link-dark";
      default:
        return "link-dark";
    }
  }, M = b || Ft, R = `${L} ${x(p)} ${y}`.trim();
  return /* @__PURE__ */ ce(
    "a",
    {
      href: f,
      className: R,
      ...g,
      children: [
        /* @__PURE__ */ ie("span", { children: a }),
        /* @__PURE__ */ ie(M, { className: "text-link-icon" })
      ]
    }
  );
}, Bt = ({
  stacked: a = !0,
  // true = vertical stack, false = horizontal on md+
  imageUrl: f,
  imageAlt: p = "News image",
  title: b,
  description: y,
  linkText: g = "Read more",
  linkHref: L = "#",
  linkVariant: x = "light",
  className: M = "",
  ...R
}) => {
  const z = it(), K = `
    w-full
    flex
    bg-grey-500
    rounded-[var(--spacing-cards-br)]
    overflow-hidden
    flex-col
    text-left
    ${a ? "" : "md:flex-row"}
    ${M}
  `.trim().replace(/\s+/g, " "), Z = `
    w-full
    aspect-[441/269]
    bg-grey-200
    overflow-hidden
    ${a ? "rounded-t-[var(--spacing-cards-br)]" : "md:rounded-l-[var(--spacing-cards-br)]"}
    ${a ? "" : "md:w-1/2"}
  `.trim().replace(/\s+/g, " "), $ = `
    w-full
    ${a ? "" : "md:w-1/2"}
    p-resource-padding
    flex
    flex-col
    gap-resource-link--spacing-y
    flex-grow
    ${a ? "rounded-b-[var(--spacing-cards-br)]" : "md:rounded-r-[var(--spacing-cards-br)]"}
  `.trim().replace(/\s+/g, " ");
  return /* @__PURE__ */ ce(
    "article",
    {
      className: K,
      ...b ? { "aria-labelledby": z } : { "aria-label": "News item" },
      ...R,
      children: [
        /* @__PURE__ */ ie("div", { className: Z, children: f && /* @__PURE__ */ ie(
          "img",
          {
            src: f,
            alt: p,
            className: "w-full h-full object-cover"
          }
        ) }),
        /* @__PURE__ */ ce("div", { className: $, children: [
          /* @__PURE__ */ ce("div", { className: "space-y-10", children: [
            b && /* @__PURE__ */ ie("h3", { id: z, className: "text-headings-h3 font-semibold text-white", children: b }),
            y && /* @__PURE__ */ ie("p", { className: "text-body-default text-white", children: y })
          ] }),
          /* @__PURE__ */ ie("div", { className: "mt-auto", children: /* @__PURE__ */ ie(Gt, { text: g, href: L, variant: x }) })
        ] })
      ]
    }
  );
}, Ut = ({
  variant: a = "stacked",
  // 'stacked' | 'row'
  columns: f = 3,
  // stacked: 2 | 3 | 4, row: 1 | 2
  carousel: p = !1,
  items: b = [],
  // Array of { imageUrl, imageAlt, title, description, linkText, linkHref, linkVariant }
  carouselLabel: y = "News carousel",
  className: g = "",
  infinite: L = !0,
  ...x
}) => {
  const [M, R] = De(0), [z, K] = De(1), Z = ot(null), $ = a === "row", V = $ ? f === 2 ? 2 : 1 : [2, 3, 4].includes(f) ? f : 3, E = () => {
    if ($)
      return V === 2 ? "grid grid-cols-1 md:grid-cols-2 gap-24" : "grid grid-cols-1 gap-24";
    switch (V) {
      case 2:
        return "grid grid-cols-1 md:grid-cols-2 gap-24";
      case 4:
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24";
      case 3:
      default:
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24";
    }
  }, J = "px-12", q = "-mx-12", Q = V;
  at(() => {
    if (!p) return;
    const i = () => {
      const u = Z.current;
      if (!u) return;
      u.querySelectorAll(".slick-slide").forEach((l) => {
        l.getAttribute("aria-hidden") === "true" ? l.setAttribute("inert", "") : l.removeAttribute("inert");
      });
      const k = u.querySelectorAll('.slick-slide[aria-hidden="false"]:not(.slick-cloned)');
      K(Math.max(k.length, 1));
    }, s = window.requestAnimationFrame(i);
    return () => window.cancelAnimationFrame(s);
  }, [p, M, b.length]);
  const U = {
    infinite: L,
    arrows: !1,
    dots: !0,
    slidesToShow: Q,
    slidesToScroll: Q,
    centerPadding: "0",
    afterChange: R,
    customPaging: (i) => /* @__PURE__ */ ie(
      "button",
      {
        type: "button",
        "aria-label": `Go to carousel page ${i + 1}`
      }
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(Q, 2),
          slidesToScroll: 1,
          centerPadding: "0"
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0"
        }
      }
    ]
  }, Y = (i, s) => /* @__PURE__ */ ie(
    Bt,
    {
      stacked: !$,
      imageUrl: i.imageUrl,
      imageAlt: i.imageAlt,
      title: i.title,
      description: i.description,
      linkText: i.linkText,
      linkHref: i.linkHref,
      ...i.attributes || {}
    },
    s
  );
  return /* @__PURE__ */ ie(
    "div",
    {
      ref: p ? Z : null,
      className: `container ${g}`,
      ...p ? {
        role: "region",
        "aria-roledescription": "carousel",
        "aria-label": y
      } : {},
      ...x,
      children: p ? /* @__PURE__ */ ce(nt, { children: [
        /* @__PURE__ */ ce("div", { "aria-live": "polite", "aria-atomic": "true", className: "sr-only", children: [
          "Showing news items ",
          M + 1,
          " to ",
          Math.min(M + z, b.length),
          " of ",
          b.length
        ] }),
        /* @__PURE__ */ ie(Wt, { ...U, className: `news-carousel ${q}`.trim(), children: b.map((i, s) => /* @__PURE__ */ ie("div", { className: J, children: Y(i, s) }, s)) })
      ] }) : /* @__PURE__ */ ie("div", { className: E(), children: b.map((i, s) => Y(i, s)) })
    }
  );
};
export {
  Ut as default
};
