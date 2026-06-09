import { jsx as oe, jsxs as Re, Fragment as rt } from "react/jsx-runtime";
import ue, { useState as ze, useRef as nt, useEffect as it } from "react";
var be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ot(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function at(o) {
  if (Object.prototype.hasOwnProperty.call(o, "__esModule")) return o;
  var f = o.default;
  if (typeof f == "function") {
    var h = function S() {
      return this instanceof S ? Reflect.construct(f, arguments, this.constructor) : f.apply(this, arguments);
    };
    h.prototype = f.prototype;
  } else h = {};
  return Object.defineProperty(h, "__esModule", { value: !0 }), Object.keys(o).forEach(function(S) {
    var y = Object.getOwnPropertyDescriptor(o, S);
    Object.defineProperty(h, S, y.get ? y : {
      enumerable: !0,
      get: function() {
        return o[S];
      }
    });
  }), h;
}
var _e = {}, Pe = {}, pe = {}, ke = {}, De;
function lt() {
  return De || (De = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
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
    o.default = f;
  })(ke)), ke;
}
var Te, Ne;
function st() {
  if (Ne) return Te;
  Ne = 1;
  var o = "Expected a function", f = NaN, h = "[object Symbol]", S = /^\s+|\s+$/g, y = /^[-+]0x[0-9a-f]+$/i, g = /^0b[01]+$/i, L = /^0o[0-7]+$/i, x = parseInt, q = typeof be == "object" && be && be.Object === Object && be, H = typeof self == "object" && self && self.Object === Object && self, A = q || H || Function("return this")(), U = Object.prototype, ee = U.toString, te = Math.max, R = Math.min, C = function() {
    return A.Date.now();
  };
  function X(a, s, c) {
    var k, l, r, v, b, u, d = 0, w = !1, _ = !1, t = !0;
    if (typeof a != "function")
      throw new TypeError(o);
    s = J(s) || 0, F(c) && (w = !!c.leading, _ = "maxWait" in c, r = _ ? te(J(c.maxWait) || 0, s) : r, t = "trailing" in c ? !!c.trailing : t);
    function B(j) {
      var D = k, N = l;
      return k = l = void 0, d = j, v = a.apply(N, D), v;
    }
    function i(j) {
      return d = j, b = setTimeout(p, s), w ? B(j) : v;
    }
    function e(j) {
      var D = j - u, N = j - d, I = s - D;
      return _ ? R(I, r - N) : I;
    }
    function n(j) {
      var D = j - u, N = j - d;
      return u === void 0 || D >= s || D < 0 || _ && N >= r;
    }
    function p() {
      var j = C();
      if (n(j))
        return O(j);
      b = setTimeout(p, e(j));
    }
    function O(j) {
      return b = void 0, t && k ? B(j) : (k = l = void 0, v);
    }
    function m() {
      b !== void 0 && clearTimeout(b), d = 0, k = u = l = b = void 0;
    }
    function T() {
      return b === void 0 ? v : O(C());
    }
    function P() {
      var j = C(), D = n(j);
      if (k = arguments, l = this, u = j, D) {
        if (b === void 0)
          return i(u);
        if (_)
          return b = setTimeout(p, s), B(u);
      }
      return b === void 0 && (b = setTimeout(p, s)), v;
    }
    return P.cancel = m, P.flush = T, P;
  }
  function F(a) {
    var s = typeof a;
    return !!a && (s == "object" || s == "function");
  }
  function $(a) {
    return !!a && typeof a == "object";
  }
  function V(a) {
    return typeof a == "symbol" || $(a) && ee.call(a) == h;
  }
  function J(a) {
    if (typeof a == "number")
      return a;
    if (V(a))
      return f;
    if (F(a)) {
      var s = typeof a.valueOf == "function" ? a.valueOf() : a;
      a = F(s) ? s + "" : s;
    }
    if (typeof a != "string")
      return a === 0 ? a : +a;
    a = a.replace(S, "");
    var c = g.test(a);
    return c || L.test(a) ? x(a.slice(2), c ? 2 : 8) : y.test(a) ? f : +a;
  }
  return Te = X, Te;
}
var Ce = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var He;
function we() {
  return He || (He = 1, (function(o) {
    (function() {
      var f = {}.hasOwnProperty;
      function h() {
        for (var g = "", L = 0; L < arguments.length; L++) {
          var x = arguments[L];
          x && (g = y(g, S(x)));
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
        for (var x in g)
          f.call(g, x) && g[x] && (L = y(L, x));
        return L;
      }
      function y(g, L) {
        return L ? g ? g + " " + L : g + L : g;
      }
      o.exports ? (h.default = h, o.exports = h) : window.classNames = h;
    })();
  })(Ce)), Ce.exports;
}
var E = {}, je = {}, Ie;
function Ve() {
  return Ie || (Ie = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
    var f = h(ue);
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
    o.default = S;
  })(je)), je;
}
var Ae;
function ye() {
  if (Ae) return E;
  Ae = 1, Object.defineProperty(E, "__esModule", {
    value: !0
  }), E.checkSpecKeys = E.checkNavigable = E.changeSlide = E.canUseDOM = E.canGoNext = void 0, E.clamp = H, E.extractObject = void 0, E.filterSettings = B, E.validSettings = E.swipeStart = E.swipeMove = E.swipeEnd = E.slidesOnRight = E.slidesOnLeft = E.slideHandler = E.siblingDirection = E.safePreventDefault = E.lazyStartIndex = E.lazySlidesOnRight = E.lazySlidesOnLeft = E.lazyEndIndex = E.keyHandler = E.initializedState = E.getWidth = E.getTrackLeft = E.getTrackCSS = E.getTrackAnimateCSS = E.getTotalSlides = E.getSwipeDirection = E.getSlideCount = E.getRequiredLazySlides = E.getPreClones = E.getPostClones = E.getOnDemandLazySlides = E.getNavigableIndexes = E.getHeight = void 0;
  var o = h(ue), f = h(Ve());
  function h(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function S(i) {
    "@babel/helpers - typeof";
    return S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, S(i);
  }
  function y(i, e) {
    var n = Object.keys(i);
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(i);
      e && (p = p.filter(function(O) {
        return Object.getOwnPropertyDescriptor(i, O).enumerable;
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
    var e = q(i, "string");
    return S(e) == "symbol" ? e : e + "";
  }
  function q(i, e) {
    if (S(i) != "object" || !i) return i;
    var n = i[Symbol.toPrimitive];
    if (n !== void 0) {
      var p = n.call(i, e);
      if (S(p) != "object") return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(i);
  }
  function H(i, e, n) {
    return Math.max(e, Math.min(i, n));
  }
  var A = E.safePreventDefault = function(e) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(e._reactName) || e.preventDefault();
  }, U = E.getOnDemandLazySlides = function(e) {
    for (var n = [], p = ee(e), O = te(e), m = p; m < O; m++)
      e.lazyLoadedList.indexOf(m) < 0 && n.push(m);
    return n;
  };
  E.getRequiredLazySlides = function(e) {
    for (var n = [], p = ee(e), O = te(e), m = p; m < O; m++)
      n.push(m);
    return n;
  };
  var ee = E.lazyStartIndex = function(e) {
    return e.currentSlide - R(e);
  }, te = E.lazyEndIndex = function(e) {
    return e.currentSlide + C(e);
  }, R = E.lazySlidesOnLeft = function(e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }, C = E.lazySlidesOnRight = function(e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }, X = E.getWidth = function(e) {
    return e && e.offsetWidth || 0;
  }, F = E.getHeight = function(e) {
    return e && e.offsetHeight || 0;
  }, $ = E.getSwipeDirection = function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, p, O, m, T;
    return p = e.startX - e.curX, O = e.startY - e.curY, m = Math.atan2(O, p), T = Math.round(m * 180 / Math.PI), T < 0 && (T = 360 - Math.abs(T)), T <= 45 && T >= 0 || T <= 360 && T >= 315 ? "left" : T >= 135 && T <= 225 ? "right" : n === !0 ? T >= 35 && T <= 135 ? "up" : "down" : "vertical";
  }, V = E.canGoNext = function(e) {
    var n = !0;
    return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (n = !1), n;
  };
  E.extractObject = function(e, n) {
    var p = {};
    return n.forEach(function(O) {
      return p[O] = e[O];
    }), p;
  }, E.initializedState = function(e) {
    var n = o.default.Children.count(e.children), p = e.listRef, O = Math.ceil(X(p)), m = e.trackRef && e.trackRef.node, T = Math.ceil(X(m)), P;
    if (e.vertical)
      P = O;
    else {
      var j = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding == "string" && e.centerPadding.slice(-1) === "%" && (j *= O / 100), P = Math.ceil((O - j) / e.slidesToShow);
    }
    var D = p && F(p.querySelector('[data-index="0"]')), N = D * e.slidesToShow, I = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && (I = n - 1 - e.initialSlide);
    var Y = e.lazyLoadedList || [], K = U(g(g({}, e), {}, {
      currentSlide: I,
      lazyLoadedList: Y
    }));
    Y = Y.concat(K);
    var W = {
      slideCount: n,
      slideWidth: P,
      listWidth: O,
      trackWidth: T,
      currentSlide: I,
      slideHeight: D,
      listHeight: N,
      lazyLoadedList: Y
    };
    return e.autoplaying === null && e.autoplay && (W.autoplaying = "playing"), W;
  }, E.slideHandler = function(e) {
    var n = e.waitForAnimate, p = e.animating, O = e.fade, m = e.infinite, T = e.index, P = e.slideCount, j = e.lazyLoad, D = e.currentSlide, N = e.centerMode, I = e.slidesToScroll, Y = e.slidesToShow, K = e.useCSS, W = e.lazyLoadedList;
    if (n && p) return {};
    var z = T, G, Z, M, Q = {}, re = {}, ne = m ? T : H(T, 0, P - 1);
    if (O) {
      if (!m && (T < 0 || T >= P)) return {};
      T < 0 ? z = T + P : T >= P && (z = T - P), j && W.indexOf(z) < 0 && (W = W.concat(z)), Q = {
        animating: !0,
        currentSlide: z,
        lazyLoadedList: W,
        targetSlide: z
      }, re = {
        animating: !1,
        targetSlide: z
      };
    } else
      G = z, z < 0 ? (G = z + P, m ? P % I !== 0 && (G = P - P % I) : G = 0) : !V(e) && z > D ? z = G = D : N && z >= P ? (z = m ? P : P - 1, G = m ? 0 : P - 1) : z >= P && (G = z - P, m ? P % I !== 0 && (G = 0) : G = P - Y), !m && z + Y >= P && (G = P - Y), Z = r(g(g({}, e), {}, {
        slideIndex: z
      })), M = r(g(g({}, e), {}, {
        slideIndex: G
      })), m || (Z === M && (z = G), Z = M), j && (W = W.concat(U(g(g({}, e), {}, {
        currentSlide: z
      })))), K ? (Q = {
        animating: !0,
        currentSlide: G,
        trackStyle: l(g(g({}, e), {}, {
          left: Z
        })),
        lazyLoadedList: W,
        targetSlide: ne
      }, re = {
        animating: !1,
        currentSlide: G,
        trackStyle: k(g(g({}, e), {}, {
          left: M
        })),
        swipeLeft: null,
        targetSlide: ne
      }) : Q = {
        currentSlide: G,
        trackStyle: k(g(g({}, e), {}, {
          left: M
        })),
        lazyLoadedList: W,
        targetSlide: ne
      };
    return {
      state: Q,
      nextState: re
    };
  }, E.changeSlide = function(e, n) {
    var p, O, m, T, P, j = e.slidesToScroll, D = e.slidesToShow, N = e.slideCount, I = e.currentSlide, Y = e.targetSlide, K = e.lazyLoad, W = e.infinite;
    if (T = N % j !== 0, p = T ? 0 : (N - I) % j, n.message === "previous")
      m = p === 0 ? j : D - p, P = I - m, K && !W && (O = I - m, P = O === -1 ? N - 1 : O), W || (P = Y - j);
    else if (n.message === "next")
      m = p === 0 ? j : p, P = I + m, K && !W && (P = (I + j) % N + p), W || (P = Y + j);
    else if (n.message === "dots")
      P = n.index * n.slidesToScroll;
    else if (n.message === "children") {
      if (P = n.index, W) {
        var z = d(g(g({}, e), {}, {
          targetSlide: P
        }));
        P > n.currentSlide && z === "left" ? P = P - N : P < n.currentSlide && z === "right" && (P = P + N);
      }
    } else n.message === "index" && (P = Number(n.index));
    return P;
  }, E.keyHandler = function(e, n, p) {
    return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n ? "" : e.keyCode === 37 ? p ? "next" : "previous" : e.keyCode === 39 ? p ? "previous" : "next" : "";
  }, E.swipeStart = function(e, n, p) {
    return e.target.tagName === "IMG" && A(e), !n || !p && e.type.indexOf("mouse") !== -1 ? "" : {
      dragging: !0,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY
      }
    };
  }, E.swipeMove = function(e, n) {
    var p = n.scrolling, O = n.animating, m = n.vertical, T = n.swipeToSlide, P = n.verticalSwiping, j = n.rtl, D = n.currentSlide, N = n.edgeFriction, I = n.edgeDragged, Y = n.onEdge, K = n.swiped, W = n.swiping, z = n.slideCount, G = n.slidesToScroll, Z = n.infinite, M = n.touchObject, Q = n.swipeEvent, re = n.listHeight, ne = n.listWidth;
    if (!p) {
      if (O) return A(e);
      m && T && P && A(e);
      var ie, le = {}, ge = r(n);
      M.curX = e.touches ? e.touches[0].pageX : e.clientX, M.curY = e.touches ? e.touches[0].pageY : e.clientY, M.swipeLength = Math.round(Math.sqrt(Math.pow(M.curX - M.startX, 2)));
      var Me = Math.round(Math.sqrt(Math.pow(M.curY - M.startY, 2)));
      if (!P && !W && Me > 10)
        return {
          scrolling: !0
        };
      P && (M.swipeLength = Me);
      var fe = (j ? -1 : 1) * (M.curX > M.startX ? 1 : -1);
      P && (fe = M.curY > M.startY ? 1 : -1);
      var tt = Math.ceil(z / G), ae = $(n.touchObject, P), de = M.swipeLength;
      return Z || (D === 0 && (ae === "right" || ae === "down") || D + 1 >= tt && (ae === "left" || ae === "up") || !V(n) && (ae === "left" || ae === "up")) && (de = M.swipeLength * N, I === !1 && Y && (Y(ae), le.edgeDragged = !0)), !K && Q && (Q(ae), le.swiped = !0), m ? ie = ge + de * (re / ne) * fe : j ? ie = ge - de * fe : ie = ge + de * fe, P && (ie = ge + de * fe), le = g(g({}, le), {}, {
        touchObject: M,
        swipeLeft: ie,
        trackStyle: k(g(g({}, n), {}, {
          left: ie
        }))
      }), Math.abs(M.curX - M.startX) < Math.abs(M.curY - M.startY) * 0.8 || M.swipeLength > 10 && (le.swiping = !0, A(e)), le;
    }
  }, E.swipeEnd = function(e, n) {
    var p = n.dragging, O = n.swipe, m = n.touchObject, T = n.listWidth, P = n.touchThreshold, j = n.verticalSwiping, D = n.listHeight, N = n.swipeToSlide, I = n.scrolling, Y = n.onSwipe, K = n.targetSlide, W = n.currentSlide, z = n.infinite;
    if (!p)
      return O && A(e), {};
    var G = j ? D / P : T / P, Z = $(m, j), M = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {}
    };
    if (I || !m.swipeLength)
      return M;
    if (m.swipeLength > G) {
      A(e), Y && Y(Z);
      var Q, re, ne = z ? W : K;
      switch (Z) {
        case "left":
        case "up":
          re = ne + s(n), Q = N ? a(n, re) : re, M.currentDirection = 0;
          break;
        case "right":
        case "down":
          re = ne - s(n), Q = N ? a(n, re) : re, M.currentDirection = 1;
          break;
        default:
          Q = ne;
      }
      M.triggerSlideHandler = Q;
    } else {
      var ie = r(n);
      M.trackStyle = l(g(g({}, n), {}, {
        left: ie
      }));
    }
    return M;
  };
  var J = E.getNavigableIndexes = function(e) {
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, p = e.infinite ? e.slidesToShow * -1 : 0, O = e.infinite ? e.slidesToShow * -1 : 0, m = []; p < n; )
      m.push(p), p = O + e.slidesToScroll, O += Math.min(e.slidesToScroll, e.slidesToShow);
    return m;
  }, a = E.checkNavigable = function(e, n) {
    var p = J(e), O = 0;
    if (n > p[p.length - 1])
      n = p[p.length - 1];
    else
      for (var m in p) {
        if (n < p[m]) {
          n = O;
          break;
        }
        O = p[m];
      }
    return n;
  }, s = E.getSlideCount = function(e) {
    var n = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      var p, O = e.listRef, m = O.querySelectorAll && O.querySelectorAll(".slick-slide") || [];
      if (Array.from(m).every(function(j) {
        if (e.vertical) {
          if (j.offsetTop + F(j) / 2 > e.swipeLeft * -1)
            return p = j, !1;
        } else if (j.offsetLeft - n + X(j) / 2 > e.swipeLeft * -1)
          return p = j, !1;
        return !0;
      }), !p)
        return 0;
      var T = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide, P = Math.abs(p.dataset.index - T) || 1;
      return P;
    } else
      return e.slidesToScroll;
  }, c = E.checkSpecKeys = function(e, n) {
    return n.reduce(function(p, O) {
      return p && e.hasOwnProperty(O);
    }, !0) ? null : console.error("Keys Missing:", e);
  }, k = E.getTrackCSS = function(e) {
    c(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
    var n, p;
    if (!e.vertical)
      n = u(e) * e.slideWidth;
    else {
      var O = e.unslick ? e.slideCount : e.slideCount + 2 * e.slidesToShow;
      p = O * e.slideHeight;
    }
    var m = {
      opacity: 1,
      transition: "",
      WebkitTransition: ""
    };
    if (e.useTransform) {
      var T = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", P = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", j = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
      m = g(g({}, m), {}, {
        WebkitTransform: T,
        transform: P,
        msTransform: j
      });
    } else
      e.vertical ? m.top = e.left : m.left = e.left;
    return e.fade && (m = {
      opacity: 1
    }), n && (m.width = n), p && (m.height = p), window && !window.addEventListener && window.attachEvent && (e.vertical ? m.marginTop = e.left + "px" : m.marginLeft = e.left + "px"), m;
  }, l = E.getTrackAnimateCSS = function(e) {
    c(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var n = k(e);
    return e.useTransform ? (n.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, n.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? n.transition = "top " + e.speed + "ms " + e.cssEase : n.transition = "left " + e.speed + "ms " + e.cssEase, n;
  }, r = E.getTrackLeft = function(e) {
    if (e.unslick)
      return 0;
    c(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var n = e.slideIndex, p = e.trackRef, O = e.infinite, m = e.centerMode, T = e.slideCount, P = e.slidesToShow, j = e.slidesToScroll, D = e.slideWidth, N = e.listWidth, I = e.variableWidth, Y = e.slideHeight, K = e.fade, W = e.vertical, z = 0, G, Z, M = 0;
    if (K || e.slideCount === 1)
      return 0;
    var Q = 0;
    if (O ? (Q = -v(e), T % j !== 0 && n + j > T && (Q = -(n > T ? P - (n - T) : T % j)), m && (Q += parseInt(P / 2))) : (T % j !== 0 && n + j > T && (Q = P - T % j), m && (Q = parseInt(P / 2))), z = Q * D, M = Q * Y, W ? G = n * Y * -1 + M : G = n * D * -1 + z, I === !0) {
      var re, ne = p && p.node;
      if (re = n + v(e), Z = ne && ne.childNodes[re], G = Z ? Z.offsetLeft * -1 : 0, m === !0) {
        re = O ? n + v(e) : n, Z = ne && ne.children[re], G = 0;
        for (var ie = 0; ie < re; ie++)
          G -= ne && ne.children[ie] && ne.children[ie].offsetWidth;
        G -= parseInt(e.centerPadding), G += Z && (N - Z.offsetWidth) / 2;
      }
    }
    return G;
  }, v = E.getPreClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, b = E.getPostClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, u = E.getTotalSlides = function(e) {
    return e.slideCount === 1 ? 1 : v(e) + e.slideCount + b(e);
  }, d = E.siblingDirection = function(e) {
    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + w(e) ? "left" : "right" : e.targetSlide < e.currentSlide - _(e) ? "right" : "left";
  }, w = E.slidesOnRight = function(e) {
    var n = e.slidesToShow, p = e.centerMode, O = e.rtl, m = e.centerPadding;
    if (p) {
      var T = (n - 1) / 2 + 1;
      return parseInt(m) > 0 && (T += 1), O && n % 2 === 0 && (T += 1), T;
    }
    return O ? 0 : n - 1;
  }, _ = E.slidesOnLeft = function(e) {
    var n = e.slidesToShow, p = e.centerMode, O = e.rtl, m = e.centerPadding;
    if (p) {
      var T = (n - 1) / 2 + 1;
      return parseInt(m) > 0 && (T += 1), !O && n % 2 === 0 && (T += 1), T;
    }
    return O ? n - 1 : 0;
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
var ve = {}, We;
function ut() {
  if (We) return ve;
  We = 1, Object.defineProperty(ve, "__esModule", {
    value: !0
  }), ve.Track = void 0;
  var o = S(ue), f = S(we()), h = ye();
  function S(l) {
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
        var v = arguments[r];
        for (var b in v)
          ({}).hasOwnProperty.call(v, b) && (l[b] = v[b]);
      }
      return l;
    }, g.apply(null, arguments);
  }
  function L(l, r) {
    if (!(l instanceof r)) throw new TypeError("Cannot call a class as a function");
  }
  function x(l, r) {
    for (var v = 0; v < r.length; v++) {
      var b = r[v];
      b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(l, V(b.key), b);
    }
  }
  function q(l, r, v) {
    return r && x(l.prototype, r), Object.defineProperty(l, "prototype", { writable: !1 }), l;
  }
  function H(l, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
    l.prototype = Object.create(r && r.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), Object.defineProperty(l, "prototype", { writable: !1 }), r && A(l, r);
  }
  function A(l, r) {
    return A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(v, b) {
      return v.__proto__ = b, v;
    }, A(l, r);
  }
  function U(l) {
    var r = R();
    return function() {
      var v, b = C(l);
      if (r) {
        var u = C(this).constructor;
        v = Reflect.construct(b, arguments, u);
      } else v = b.apply(this, arguments);
      return ee(this, v);
    };
  }
  function ee(l, r) {
    if (r && (y(r) == "object" || typeof r == "function")) return r;
    if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return te(l);
  }
  function te(l) {
    if (l === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return l;
  }
  function R() {
    try {
      var l = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (R = function() {
      return !!l;
    })();
  }
  function C(l) {
    return C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, C(l);
  }
  function X(l, r) {
    var v = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      var b = Object.getOwnPropertySymbols(l);
      r && (b = b.filter(function(u) {
        return Object.getOwnPropertyDescriptor(l, u).enumerable;
      })), v.push.apply(v, b);
    }
    return v;
  }
  function F(l) {
    for (var r = 1; r < arguments.length; r++) {
      var v = arguments[r] != null ? arguments[r] : {};
      r % 2 ? X(Object(v), !0).forEach(function(b) {
        $(l, b, v[b]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(v)) : X(Object(v)).forEach(function(b) {
        Object.defineProperty(l, b, Object.getOwnPropertyDescriptor(v, b));
      });
    }
    return l;
  }
  function $(l, r, v) {
    return (r = V(r)) in l ? Object.defineProperty(l, r, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : l[r] = v, l;
  }
  function V(l) {
    var r = J(l, "string");
    return y(r) == "symbol" ? r : r + "";
  }
  function J(l, r) {
    if (y(l) != "object" || !l) return l;
    var v = l[Symbol.toPrimitive];
    if (v !== void 0) {
      var b = v.call(l, r);
      if (y(b) != "object") return b;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(l);
  }
  var a = function(r) {
    var v, b, u, d, w;
    r.rtl ? w = r.slideCount - 1 - r.index : w = r.index, u = w < 0 || w >= r.slideCount, r.centerMode ? (d = Math.floor(r.slidesToShow / 2), b = (w - r.currentSlide) % r.slideCount === 0, w > r.currentSlide - d - 1 && w <= r.currentSlide + d && (v = !0)) : v = r.currentSlide <= w && w < r.currentSlide + r.slidesToShow;
    var _;
    r.targetSlide < 0 ? _ = r.targetSlide + r.slideCount : r.targetSlide >= r.slideCount ? _ = r.targetSlide - r.slideCount : _ = r.targetSlide;
    var t = w === _;
    return {
      "slick-slide": !0,
      "slick-active": v,
      "slick-center": b,
      "slick-cloned": u,
      "slick-current": t
      // dubious in case of RTL
    };
  }, s = function(r) {
    var v = {};
    return (r.variableWidth === void 0 || r.variableWidth === !1) && (v.width = r.slideWidth), r.fade && (v.position = "relative", r.vertical ? v.top = -r.index * parseInt(r.slideHeight) : v.left = -r.index * parseInt(r.slideWidth), v.opacity = r.currentSlide === r.index ? 1 : 0, v.zIndex = r.currentSlide === r.index ? 999 : 998, r.useCSS && (v.transition = "opacity " + r.speed + "ms " + r.cssEase + ", visibility " + r.speed + "ms " + r.cssEase)), v;
  }, c = function(r, v) {
    return r.key || v;
  }, k = function(r) {
    var v, b = [], u = [], d = [], w = o.default.Children.count(r.children), _ = (0, h.lazyStartIndex)(r), t = (0, h.lazyEndIndex)(r);
    return o.default.Children.forEach(r.children, function(B, i) {
      var e, n = {
        message: "children",
        index: i,
        slidesToScroll: r.slidesToScroll,
        currentSlide: r.currentSlide
      };
      !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(i) >= 0 ? e = B : e = /* @__PURE__ */ o.default.createElement("div", null);
      var p = s(F(F({}, r), {}, {
        index: i
      })), O = e.props.className || "", m = a(F(F({}, r), {}, {
        index: i
      }));
      if (b.push(/* @__PURE__ */ o.default.cloneElement(e, {
        key: "original" + c(e, i),
        "data-index": i,
        className: (0, f.default)(m, O),
        tabIndex: "-1",
        "aria-hidden": !m["slick-active"],
        style: F(F({
          outline: "none"
        }, e.props.style || {}), p),
        onClick: function(j) {
          e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
        }
      })), r.infinite && w > 1 && r.fade === !1 && !r.unslick) {
        var T = w - i;
        T <= (0, h.getPreClones)(r) && (v = -T, v >= _ && (e = B), m = a(F(F({}, r), {}, {
          index: v
        })), u.push(/* @__PURE__ */ o.default.cloneElement(e, {
          key: "precloned" + c(e, v),
          "data-index": v,
          tabIndex: "-1",
          className: (0, f.default)(m, O),
          "aria-hidden": !m["slick-active"],
          style: F(F({}, e.props.style || {}), p),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        }))), i < (0, h.getPostClones)(r) && (v = w + i, v < t && (e = B), m = a(F(F({}, r), {}, {
          index: v
        })), d.push(/* @__PURE__ */ o.default.cloneElement(e, {
          key: "postcloned" + c(e, v),
          "data-index": v,
          tabIndex: "-1",
          className: (0, f.default)(m, O),
          "aria-hidden": !m["slick-active"],
          style: F(F({}, e.props.style || {}), p),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        })));
      }
    }), r.rtl ? u.concat(b, d).reverse() : u.concat(b, d);
  };
  return ve.Track = /* @__PURE__ */ (function(l) {
    H(v, l);
    var r = U(v);
    function v() {
      var b;
      L(this, v);
      for (var u = arguments.length, d = new Array(u), w = 0; w < u; w++)
        d[w] = arguments[w];
      return b = r.call.apply(r, [this].concat(d)), $(te(b), "node", null), $(te(b), "handleRef", function(_) {
        b.node = _;
      }), b;
    }
    return q(v, [{
      key: "render",
      value: function() {
        var u = k(this.props), d = this.props, w = d.onMouseEnter, _ = d.onMouseOver, t = d.onMouseLeave, B = {
          onMouseEnter: w,
          onMouseOver: _,
          onMouseLeave: t
        };
        return /* @__PURE__ */ o.default.createElement("div", g({
          ref: this.handleRef,
          className: "slick-track",
          style: this.props.trackStyle
        }, B), u);
      }
    }]), v;
  })(o.default.PureComponent), ve;
}
var he = {}, qe;
function ct() {
  if (qe) return he;
  qe = 1;
  function o(a) {
    "@babel/helpers - typeof";
    return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, o(a);
  }
  Object.defineProperty(he, "__esModule", {
    value: !0
  }), he.Dots = void 0;
  var f = y(ue), h = y(we()), S = ye();
  function y(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function g(a, s) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(a);
      s && (k = k.filter(function(l) {
        return Object.getOwnPropertyDescriptor(a, l).enumerable;
      })), c.push.apply(c, k);
    }
    return c;
  }
  function L(a) {
    for (var s = 1; s < arguments.length; s++) {
      var c = arguments[s] != null ? arguments[s] : {};
      s % 2 ? g(Object(c), !0).forEach(function(k) {
        x(a, k, c[k]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : g(Object(c)).forEach(function(k) {
        Object.defineProperty(a, k, Object.getOwnPropertyDescriptor(c, k));
      });
    }
    return a;
  }
  function x(a, s, c) {
    return (s = U(s)) in a ? Object.defineProperty(a, s, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : a[s] = c, a;
  }
  function q(a, s) {
    if (!(a instanceof s)) throw new TypeError("Cannot call a class as a function");
  }
  function H(a, s) {
    for (var c = 0; c < s.length; c++) {
      var k = s[c];
      k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(a, U(k.key), k);
    }
  }
  function A(a, s, c) {
    return s && H(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function U(a) {
    var s = ee(a, "string");
    return o(s) == "symbol" ? s : s + "";
  }
  function ee(a, s) {
    if (o(a) != "object" || !a) return a;
    var c = a[Symbol.toPrimitive];
    if (c !== void 0) {
      var k = c.call(a, s);
      if (o(k) != "object") return k;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  function te(a, s) {
    if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(s && s.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), s && R(a, s);
  }
  function R(a, s) {
    return R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, k) {
      return c.__proto__ = k, c;
    }, R(a, s);
  }
  function C(a) {
    var s = $();
    return function() {
      var c, k = V(a);
      if (s) {
        var l = V(this).constructor;
        c = Reflect.construct(k, arguments, l);
      } else c = k.apply(this, arguments);
      return X(this, c);
    };
  }
  function X(a, s) {
    if (s && (o(s) == "object" || typeof s == "function")) return s;
    if (s !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return F(a);
  }
  function F(a) {
    if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a;
  }
  function $() {
    try {
      var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return ($ = function() {
      return !!a;
    })();
  }
  function V(a) {
    return V = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, V(a);
  }
  var J = function(s) {
    var c;
    return s.infinite ? c = Math.ceil(s.slideCount / s.slidesToScroll) : c = Math.ceil((s.slideCount - s.slidesToShow) / s.slidesToScroll) + 1, c;
  };
  return he.Dots = /* @__PURE__ */ (function(a) {
    te(c, a);
    var s = C(c);
    function c() {
      return q(this, c), s.apply(this, arguments);
    }
    return A(c, [{
      key: "clickHandler",
      value: function(l, r) {
        r.preventDefault(), this.props.clickHandler(l);
      }
    }, {
      key: "render",
      value: function() {
        for (var l = this.props, r = l.onMouseEnter, v = l.onMouseOver, b = l.onMouseLeave, u = l.infinite, d = l.slidesToScroll, w = l.slidesToShow, _ = l.slideCount, t = l.currentSlide, B = J({
          slideCount: _,
          slidesToScroll: d,
          slidesToShow: w,
          infinite: u
        }), i = {
          onMouseEnter: r,
          onMouseOver: v,
          onMouseLeave: b
        }, e = [], n = 0; n < B; n++) {
          var p = (n + 1) * d - 1, O = u ? p : (0, S.clamp)(p, 0, _ - 1), m = O - (d - 1), T = u ? m : (0, S.clamp)(m, 0, _ - 1), P = (0, h.default)({
            "slick-active": u ? t >= T && t <= O : t === T
          }), j = {
            message: "dots",
            index: n,
            slidesToScroll: d,
            currentSlide: t
          }, D = this.clickHandler.bind(this, j);
          e = e.concat(/* @__PURE__ */ f.default.createElement("li", {
            key: n,
            className: P
          }, /* @__PURE__ */ f.default.cloneElement(this.props.customPaging(n), {
            onClick: D
          })));
        }
        return /* @__PURE__ */ f.default.cloneElement(this.props.appendDots(e), L({
          className: this.props.dotsClass
        }, i));
      }
    }]), c;
  })(f.default.PureComponent), he;
}
var se = {}, Fe;
function ft() {
  if (Fe) return se;
  Fe = 1;
  function o(a) {
    "@babel/helpers - typeof";
    return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, o(a);
  }
  Object.defineProperty(se, "__esModule", {
    value: !0
  }), se.PrevArrow = se.NextArrow = void 0;
  var f = y(ue), h = y(we()), S = ye();
  function y(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(a) {
      for (var s = 1; s < arguments.length; s++) {
        var c = arguments[s];
        for (var k in c)
          ({}).hasOwnProperty.call(c, k) && (a[k] = c[k]);
      }
      return a;
    }, g.apply(null, arguments);
  }
  function L(a, s) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(a);
      s && (k = k.filter(function(l) {
        return Object.getOwnPropertyDescriptor(a, l).enumerable;
      })), c.push.apply(c, k);
    }
    return c;
  }
  function x(a) {
    for (var s = 1; s < arguments.length; s++) {
      var c = arguments[s] != null ? arguments[s] : {};
      s % 2 ? L(Object(c), !0).forEach(function(k) {
        q(a, k, c[k]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : L(Object(c)).forEach(function(k) {
        Object.defineProperty(a, k, Object.getOwnPropertyDescriptor(c, k));
      });
    }
    return a;
  }
  function q(a, s, c) {
    return (s = ee(s)) in a ? Object.defineProperty(a, s, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : a[s] = c, a;
  }
  function H(a, s) {
    if (!(a instanceof s)) throw new TypeError("Cannot call a class as a function");
  }
  function A(a, s) {
    for (var c = 0; c < s.length; c++) {
      var k = s[c];
      k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(a, ee(k.key), k);
    }
  }
  function U(a, s, c) {
    return s && A(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function ee(a) {
    var s = te(a, "string");
    return o(s) == "symbol" ? s : s + "";
  }
  function te(a, s) {
    if (o(a) != "object" || !a) return a;
    var c = a[Symbol.toPrimitive];
    if (c !== void 0) {
      var k = c.call(a, s);
      if (o(k) != "object") return k;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  function R(a, s) {
    if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(s && s.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), s && C(a, s);
  }
  function C(a, s) {
    return C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, k) {
      return c.__proto__ = k, c;
    }, C(a, s);
  }
  function X(a) {
    var s = V();
    return function() {
      var c, k = J(a);
      if (s) {
        var l = J(this).constructor;
        c = Reflect.construct(k, arguments, l);
      } else c = k.apply(this, arguments);
      return F(this, c);
    };
  }
  function F(a, s) {
    if (s && (o(s) == "object" || typeof s == "function")) return s;
    if (s !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $(a);
  }
  function $(a) {
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
  function J(a) {
    return J = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, J(a);
  }
  return se.PrevArrow = /* @__PURE__ */ (function(a) {
    R(c, a);
    var s = X(c);
    function c() {
      return H(this, c), s.apply(this, arguments);
    }
    return U(c, [{
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
        var v = {
          key: "0",
          "data-role": "none",
          className: (0, h.default)(l),
          style: {
            display: "block"
          },
          onClick: r
        }, b = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, u;
        return this.props.prevArrow ? u = /* @__PURE__ */ f.default.cloneElement(this.props.prevArrow, x(x({}, v), b)) : u = /* @__PURE__ */ f.default.createElement("button", g({
          key: "0",
          type: "button"
        }, v), " ", "Previous"), u;
      }
    }]), c;
  })(f.default.PureComponent), se.NextArrow = /* @__PURE__ */ (function(a) {
    R(c, a);
    var s = X(c);
    function c() {
      return H(this, c), s.apply(this, arguments);
    }
    return U(c, [{
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
        (0, S.canGoNext)(this.props) || (l["slick-disabled"] = !0, r = null);
        var v = {
          key: "1",
          "data-role": "none",
          className: (0, h.default)(l),
          style: {
            display: "block"
          },
          onClick: r
        }, b = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, u;
        return this.props.nextArrow ? u = /* @__PURE__ */ f.default.cloneElement(this.props.nextArrow, x(x({}, v), b)) : u = /* @__PURE__ */ f.default.createElement("button", g({
          key: "1",
          type: "button"
        }, v), " ", "Next"), u;
      }
    }]), c;
  })(f.default.PureComponent), se;
}
var $e = (function() {
  if (typeof Map < "u")
    return Map;
  function o(f, h) {
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
        var S = o(this.__entries__, h), y = this.__entries__[S];
        return y && y[1];
      }, f.prototype.set = function(h, S) {
        var y = o(this.__entries__, h);
        ~y ? this.__entries__[y][1] = S : this.__entries__.push([h, S]);
      }, f.prototype.delete = function(h) {
        var S = this.__entries__, y = o(S, h);
        ~y && S.splice(y, 1);
      }, f.prototype.has = function(h) {
        return !!~o(this.__entries__, h);
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
})(), xe = typeof window < "u" && typeof document < "u" && window.document === document, me = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), dt = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(me) : function(o) {
    return setTimeout(function() {
      return o(Date.now());
    }, 1e3 / 60);
  };
})(), pt = 2;
function vt(o, f) {
  var h = !1, S = !1, y = 0;
  function g() {
    h && (h = !1, o()), S && x();
  }
  function L() {
    dt(g);
  }
  function x() {
    var q = Date.now();
    if (h) {
      if (q - y < pt)
        return;
      S = !0;
    } else
      h = !0, S = !1, setTimeout(L, f);
    y = q;
  }
  return x;
}
var ht = 20, yt = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], gt = typeof MutationObserver < "u", bt = (
  /** @class */
  (function() {
    function o() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = vt(this.refresh.bind(this), ht);
    }
    return o.prototype.addObserver = function(f) {
      ~this.observers_.indexOf(f) || this.observers_.push(f), this.connected_ || this.connect_();
    }, o.prototype.removeObserver = function(f) {
      var h = this.observers_, S = h.indexOf(f);
      ~S && h.splice(S, 1), !h.length && this.connected_ && this.disconnect_();
    }, o.prototype.refresh = function() {
      var f = this.updateObservers_();
      f && this.refresh();
    }, o.prototype.updateObservers_ = function() {
      var f = this.observers_.filter(function(h) {
        return h.gatherActive(), h.hasActive();
      });
      return f.forEach(function(h) {
        return h.broadcastActive();
      }), f.length > 0;
    }, o.prototype.connect_ = function() {
      !xe || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), gt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, o.prototype.disconnect_ = function() {
      !xe || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, o.prototype.onTransitionEnd_ = function(f) {
      var h = f.propertyName, S = h === void 0 ? "" : h, y = yt.some(function(g) {
        return !!~S.indexOf(g);
      });
      y && this.refresh();
    }, o.getInstance = function() {
      return this.instance_ || (this.instance_ = new o()), this.instance_;
    }, o.instance_ = null, o;
  })()
), Je = (function(o, f) {
  for (var h = 0, S = Object.keys(f); h < S.length; h++) {
    var y = S[h];
    Object.defineProperty(o, y, {
      value: f[y],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return o;
}), ce = (function(o) {
  var f = o && o.ownerDocument && o.ownerDocument.defaultView;
  return f || me;
}), Qe = Oe(0, 0, 0, 0);
function Se(o) {
  return parseFloat(o) || 0;
}
function Be(o) {
  for (var f = [], h = 1; h < arguments.length; h++)
    f[h - 1] = arguments[h];
  return f.reduce(function(S, y) {
    var g = o["border-" + y + "-width"];
    return S + Se(g);
  }, 0);
}
function mt(o) {
  for (var f = ["top", "right", "bottom", "left"], h = {}, S = 0, y = f; S < y.length; S++) {
    var g = y[S], L = o["padding-" + g];
    h[g] = Se(L);
  }
  return h;
}
function St(o) {
  var f = o.getBBox();
  return Oe(0, 0, f.width, f.height);
}
function wt(o) {
  var f = o.clientWidth, h = o.clientHeight;
  if (!f && !h)
    return Qe;
  var S = ce(o).getComputedStyle(o), y = mt(S), g = y.left + y.right, L = y.top + y.bottom, x = Se(S.width), q = Se(S.height);
  if (S.boxSizing === "border-box" && (Math.round(x + g) !== f && (x -= Be(S, "left", "right") + g), Math.round(q + L) !== h && (q -= Be(S, "top", "bottom") + L)), !_t(o)) {
    var H = Math.round(x + g) - f, A = Math.round(q + L) - h;
    Math.abs(H) !== 1 && (x -= H), Math.abs(A) !== 1 && (q -= A);
  }
  return Oe(y.left, y.top, x, q);
}
var Ot = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(o) {
    return o instanceof ce(o).SVGGraphicsElement;
  } : function(o) {
    return o instanceof ce(o).SVGElement && typeof o.getBBox == "function";
  };
})();
function _t(o) {
  return o === ce(o).document.documentElement;
}
function Pt(o) {
  return xe ? Ot(o) ? St(o) : wt(o) : Qe;
}
function kt(o) {
  var f = o.x, h = o.y, S = o.width, y = o.height, g = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, L = Object.create(g.prototype);
  return Je(L, {
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
function Oe(o, f, h, S) {
  return { x: o, y: f, width: h, height: S };
}
var Tt = (
  /** @class */
  (function() {
    function o(f) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Oe(0, 0, 0, 0), this.target = f;
    }
    return o.prototype.isActive = function() {
      var f = Pt(this.target);
      return this.contentRect_ = f, f.width !== this.broadcastWidth || f.height !== this.broadcastHeight;
    }, o.prototype.broadcastRect = function() {
      var f = this.contentRect_;
      return this.broadcastWidth = f.width, this.broadcastHeight = f.height, f;
    }, o;
  })()
), Ct = (
  /** @class */
  /* @__PURE__ */ (function() {
    function o(f, h) {
      var S = kt(h);
      Je(this, { target: f, contentRect: S });
    }
    return o;
  })()
), jt = (
  /** @class */
  (function() {
    function o(f, h, S) {
      if (this.activeObservations_ = [], this.observations_ = new $e(), typeof f != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = f, this.controller_ = h, this.callbackCtx_ = S;
    }
    return o.prototype.observe = function(f) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(f instanceof ce(f).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var h = this.observations_;
        h.has(f) || (h.set(f, new Tt(f)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, o.prototype.unobserve = function(f) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(f instanceof ce(f).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var h = this.observations_;
        h.has(f) && (h.delete(f), h.size || this.controller_.removeObserver(this));
      }
    }, o.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, o.prototype.gatherActive = function() {
      var f = this;
      this.clearActive(), this.observations_.forEach(function(h) {
        h.isActive() && f.activeObservations_.push(h);
      });
    }, o.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var f = this.callbackCtx_, h = this.activeObservations_.map(function(S) {
          return new Ct(S.target, S.broadcastRect());
        });
        this.callback_.call(f, h, f), this.clearActive();
      }
    }, o.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, o.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, o;
  })()
), Ze = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new $e(), et = (
  /** @class */
  /* @__PURE__ */ (function() {
    function o(f) {
      if (!(this instanceof o))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var h = bt.getInstance(), S = new jt(f, h, this);
      Ze.set(this, S);
    }
    return o;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(o) {
  et.prototype[o] = function() {
    var f;
    return (f = Ze.get(this))[o].apply(f, arguments);
  };
});
var Et = (function() {
  return typeof me.ResizeObserver < "u" ? me.ResizeObserver : et;
})();
const Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Et
}, Symbol.toStringTag, { value: "Module" })), xt = /* @__PURE__ */ at(Lt);
var Ge;
function Mt() {
  if (Ge) return pe;
  Ge = 1, Object.defineProperty(pe, "__esModule", {
    value: !0
  }), pe.InnerSlider = void 0;
  var o = H(ue), f = H(lt()), h = H(st()), S = H(we()), y = ye(), g = ut(), L = ct(), x = ft(), q = H(xt);
  function H(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function A(u) {
    "@babel/helpers - typeof";
    return A = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
      return typeof d;
    } : function(d) {
      return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
    }, A(u);
  }
  function U() {
    return U = Object.assign ? Object.assign.bind() : function(u) {
      for (var d = 1; d < arguments.length; d++) {
        var w = arguments[d];
        for (var _ in w)
          ({}).hasOwnProperty.call(w, _) && (u[_] = w[_]);
      }
      return u;
    }, U.apply(null, arguments);
  }
  function ee(u, d) {
    if (u == null) return {};
    var w, _, t = te(u, d);
    if (Object.getOwnPropertySymbols) {
      var B = Object.getOwnPropertySymbols(u);
      for (_ = 0; _ < B.length; _++)
        w = B[_], d.includes(w) || {}.propertyIsEnumerable.call(u, w) && (t[w] = u[w]);
    }
    return t;
  }
  function te(u, d) {
    if (u == null) return {};
    var w = {};
    for (var _ in u)
      if ({}.hasOwnProperty.call(u, _)) {
        if (d.includes(_)) continue;
        w[_] = u[_];
      }
    return w;
  }
  function R(u, d) {
    var w = Object.keys(u);
    if (Object.getOwnPropertySymbols) {
      var _ = Object.getOwnPropertySymbols(u);
      d && (_ = _.filter(function(t) {
        return Object.getOwnPropertyDescriptor(u, t).enumerable;
      })), w.push.apply(w, _);
    }
    return w;
  }
  function C(u) {
    for (var d = 1; d < arguments.length; d++) {
      var w = arguments[d] != null ? arguments[d] : {};
      d % 2 ? R(Object(w), !0).forEach(function(_) {
        r(u, _, w[_]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(w)) : R(Object(w)).forEach(function(_) {
        Object.defineProperty(u, _, Object.getOwnPropertyDescriptor(w, _));
      });
    }
    return u;
  }
  function X(u, d) {
    if (!(u instanceof d)) throw new TypeError("Cannot call a class as a function");
  }
  function F(u, d) {
    for (var w = 0; w < d.length; w++) {
      var _ = d[w];
      _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(u, v(_.key), _);
    }
  }
  function $(u, d, w) {
    return d && F(u.prototype, d), Object.defineProperty(u, "prototype", { writable: !1 }), u;
  }
  function V(u, d) {
    if (typeof d != "function" && d !== null) throw new TypeError("Super expression must either be null or a function");
    u.prototype = Object.create(d && d.prototype, { constructor: { value: u, writable: !0, configurable: !0 } }), Object.defineProperty(u, "prototype", { writable: !1 }), d && J(u, d);
  }
  function J(u, d) {
    return J = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(w, _) {
      return w.__proto__ = _, w;
    }, J(u, d);
  }
  function a(u) {
    var d = k();
    return function() {
      var w, _ = l(u);
      if (d) {
        var t = l(this).constructor;
        w = Reflect.construct(_, arguments, t);
      } else w = _.apply(this, arguments);
      return s(this, w);
    };
  }
  function s(u, d) {
    if (d && (A(d) == "object" || typeof d == "function")) return d;
    if (d !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return c(u);
  }
  function c(u) {
    if (u === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return u;
  }
  function k() {
    try {
      var u = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (k = function() {
      return !!u;
    })();
  }
  function l(u) {
    return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(d) {
      return d.__proto__ || Object.getPrototypeOf(d);
    }, l(u);
  }
  function r(u, d, w) {
    return (d = v(d)) in u ? Object.defineProperty(u, d, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : u[d] = w, u;
  }
  function v(u) {
    var d = b(u, "string");
    return A(d) == "symbol" ? d : d + "";
  }
  function b(u, d) {
    if (A(u) != "object" || !u) return u;
    var w = u[Symbol.toPrimitive];
    if (w !== void 0) {
      var _ = w.call(u, d);
      if (A(_) != "object") return _;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (d === "string" ? String : Number)(u);
  }
  return pe.InnerSlider = /* @__PURE__ */ (function(u) {
    V(w, u);
    var d = a(w);
    function w(_) {
      var t;
      X(this, w), t = d.call(this, _), r(c(t), "listRefHandler", function(i) {
        return t.list = i;
      }), r(c(t), "trackRefHandler", function(i) {
        return t.track = i;
      }), r(c(t), "adaptHeight", function() {
        if (t.props.adaptiveHeight && t.list) {
          var i = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
          t.list.style.height = (0, y.getHeight)(i) + "px";
        }
      }), r(c(t), "componentDidMount", function() {
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
        }), t.props.lazyLoad === "progressive" && (t.lazyLoadTimer = setInterval(t.progressiveLazyLoad, 1e3)), t.ro = new q.default(function() {
          t.state.animating ? (t.onWindowResized(!1), t.callbackTimers.push(setTimeout(function() {
            return t.onWindowResized();
          }, t.props.speed))) : t.onWindowResized();
        }), t.ro.observe(t.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(n) {
          n.onfocus = t.props.pauseOnFocus ? t.onSlideFocus : null, n.onblur = t.props.pauseOnFocus ? t.onSlideBlur : null;
        }), window.addEventListener ? window.addEventListener("resize", t.onWindowResized) : window.attachEvent("onresize", t.onWindowResized);
      }), r(c(t), "componentWillUnmount", function() {
        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach(function(i) {
          return clearTimeout(i);
        }), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
      }), r(c(t), "componentDidUpdate", function(i) {
        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
          var e = (0, y.getOnDemandLazySlides)(C(C({}, t.props), t.state));
          e.length > 0 && (t.setState(function(O) {
            return {
              lazyLoadedList: O.lazyLoadedList.concat(e)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(e));
        }
        t.adaptHeight();
        var n = C(C({
          listRef: t.list,
          trackRef: t.track
        }, t.props), t.state), p = t.didPropsChange(i);
        p && t.updateState(n, p, function() {
          t.state.currentSlide >= o.default.Children.count(t.props.children) && t.changeSlide({
            message: "index",
            index: o.default.Children.count(t.props.children) - t.props.slidesToShow,
            currentSlide: t.state.currentSlide
          }), t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
        });
      }), r(c(t), "onWindowResized", function(i) {
        t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, h.default)(function() {
          return t.resizeWindow(i);
        }, 50), t.debouncedResize();
      }), r(c(t), "resizeWindow", function() {
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
      }), r(c(t), "updateState", function(i, e, n) {
        var p = (0, y.initializedState)(i);
        i = C(C(C({}, i), p), {}, {
          slideIndex: p.currentSlide
        });
        var O = (0, y.getTrackLeft)(i);
        i = C(C({}, i), {}, {
          left: O
        });
        var m = (0, y.getTrackCSS)(i);
        (e || o.default.Children.count(t.props.children) !== o.default.Children.count(i.children)) && (p.trackStyle = m), t.setState(p, n);
      }), r(c(t), "ssrInit", function() {
        if (t.props.variableWidth) {
          var i = 0, e = 0, n = [], p = (0, y.getPreClones)(C(C(C({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          })), O = (0, y.getPostClones)(C(C(C({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          }));
          t.props.children.forEach(function(Z) {
            n.push(Z.props.style.width), i += Z.props.style.width;
          });
          for (var m = 0; m < p; m++)
            e += n[n.length - 1 - m], i += n[n.length - 1 - m];
          for (var T = 0; T < O; T++)
            i += n[T];
          for (var P = 0; P < t.state.currentSlide; P++)
            e += n[P];
          var j = {
            width: i + "px",
            left: -e + "px"
          };
          if (t.props.centerMode) {
            var D = "".concat(n[t.state.currentSlide], "px");
            j.left = "calc(".concat(j.left, " + (100% - ").concat(D, ") / 2 ) ");
          }
          return {
            trackStyle: j
          };
        }
        var N = o.default.Children.count(t.props.children), I = C(C(C({}, t.props), t.state), {}, {
          slideCount: N
        }), Y = (0, y.getPreClones)(I) + (0, y.getPostClones)(I) + N, K = 100 / t.props.slidesToShow * Y, W = 100 / Y, z = -W * ((0, y.getPreClones)(I) + t.state.currentSlide) * K / 100;
        t.props.centerMode && (z += (100 - W * K / 100) / 2);
        var G = {
          width: K + "%",
          left: z + "%"
        };
        return {
          slideWidth: W + "%",
          trackStyle: G
        };
      }), r(c(t), "checkImagesLoad", function() {
        var i = t.list && t.list.querySelectorAll && t.list.querySelectorAll(".slick-slide img") || [], e = i.length, n = 0;
        Array.prototype.forEach.call(i, function(p) {
          var O = function() {
            return ++n && n >= e && t.onWindowResized();
          };
          if (!p.onclick)
            p.onclick = function() {
              return p.parentNode.focus();
            };
          else {
            var m = p.onclick;
            p.onclick = function(T) {
              m(T), p.parentNode.focus();
            };
          }
          p.onload || (t.props.lazyLoad ? p.onload = function() {
            t.adaptHeight(), t.callbackTimers.push(setTimeout(t.onWindowResized, t.props.speed));
          } : (p.onload = O, p.onerror = function() {
            O(), t.props.onLazyLoadError && t.props.onLazyLoadError();
          }));
        });
      }), r(c(t), "progressiveLazyLoad", function() {
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
        i.length > 0 ? (t.setState(function(O) {
          return {
            lazyLoadedList: O.lazyLoadedList.concat(i)
          };
        }), t.props.onLazyLoad && t.props.onLazyLoad(i)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
      }), r(c(t), "slideHandler", function(i) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = t.props, p = n.asNavFor, O = n.beforeChange, m = n.onLazyLoad, T = n.speed, P = n.afterChange, j = t.state.currentSlide, D = (0, y.slideHandler)(C(C(C({
          index: i
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e
        })), N = D.state, I = D.nextState;
        if (N) {
          O && O(j, N.currentSlide);
          var Y = N.lazyLoadedList.filter(function(K) {
            return t.state.lazyLoadedList.indexOf(K) < 0;
          });
          m && Y.length > 0 && m(Y), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), P && P(j), delete t.animationEndCallback), t.setState(N, function() {
            p && t.asNavForIndex !== i && (t.asNavForIndex = i, p.innerSlider.slideHandler(i)), I && (t.animationEndCallback = setTimeout(function() {
              var K = I.animating, W = ee(I, ["animating"]);
              t.setState(W, function() {
                t.callbackTimers.push(setTimeout(function() {
                  return t.setState({
                    animating: K
                  });
                }, 10)), P && P(N.currentSlide), delete t.animationEndCallback;
              });
            }, T));
          });
        }
      }), r(c(t), "changeSlide", function(i) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = C(C({}, t.props), t.state), p = (0, y.changeSlide)(n, i);
        if (!(p !== 0 && !p) && (e === !0 ? t.slideHandler(p, e) : t.slideHandler(p), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
          var O = t.list.querySelectorAll(".slick-current");
          O[0] && O[0].focus();
        }
      }), r(c(t), "clickHandler", function(i) {
        t.clickable === !1 && (i.stopPropagation(), i.preventDefault()), t.clickable = !0;
      }), r(c(t), "keyHandler", function(i) {
        var e = (0, y.keyHandler)(i, t.props.accessibility, t.props.rtl);
        e !== "" && t.changeSlide({
          message: e
        });
      }), r(c(t), "selectHandler", function(i) {
        t.changeSlide(i);
      }), r(c(t), "disableBodyScroll", function() {
        var i = function(n) {
          n = n || window.event, n.preventDefault && n.preventDefault(), n.returnValue = !1;
        };
        window.ontouchmove = i;
      }), r(c(t), "enableBodyScroll", function() {
        window.ontouchmove = null;
      }), r(c(t), "swipeStart", function(i) {
        t.props.verticalSwiping && t.disableBodyScroll();
        var e = (0, y.swipeStart)(i, t.props.swipe, t.props.draggable);
        e !== "" && t.setState(e);
      }), r(c(t), "swipeMove", function(i) {
        var e = (0, y.swipeMove)(i, C(C(C({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(c(t), "swipeEnd", function(i) {
        var e = (0, y.swipeEnd)(i, C(C(C({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        if (e) {
          var n = e.triggerSlideHandler;
          delete e.triggerSlideHandler, t.setState(e), n !== void 0 && (t.slideHandler(n), t.props.verticalSwiping && t.enableBodyScroll());
        }
      }), r(c(t), "touchEnd", function(i) {
        t.swipeEnd(i), t.clickable = !0;
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
      }), r(c(t), "slickGoTo", function(i) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (i = Number(i), isNaN(i)) return "";
        t.callbackTimers.push(setTimeout(function() {
          return t.changeSlide({
            message: "index",
            index: i,
            currentSlide: t.state.currentSlide
          }, e);
        }, 0));
      }), r(c(t), "play", function() {
        var i;
        if (t.props.rtl)
          i = t.state.currentSlide - t.props.slidesToScroll;
        else if ((0, y.canGoNext)(C(C({}, t.props), t.state)))
          i = t.state.currentSlide + t.props.slidesToScroll;
        else
          return !1;
        t.slideHandler(i);
      }), r(c(t), "autoPlay", function(i) {
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
      }), r(c(t), "pause", function(i) {
        t.autoplayTimer && (clearInterval(t.autoplayTimer), t.autoplayTimer = null);
        var e = t.state.autoplaying;
        i === "paused" ? t.setState({
          autoplaying: "paused"
        }) : i === "focused" ? (e === "hovered" || e === "playing") && t.setState({
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
        var i = (0, S.default)("slick-slider", t.props.className, {
          "slick-vertical": t.props.vertical,
          "slick-initialized": !0
        }), e = C(C({}, t.props), t.state), n = (0, y.extractObject)(e, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), p = t.props.pauseOnHover;
        n = C(C({}, n), {}, {
          onMouseEnter: p ? t.onTrackOver : null,
          onMouseLeave: p ? t.onTrackLeave : null,
          onMouseOver: p ? t.onTrackOver : null,
          focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
        });
        var O;
        if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
          var m = (0, y.extractObject)(e, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), T = t.props.pauseOnDotsHover;
          m = C(C({}, m), {}, {
            clickHandler: t.changeSlide,
            onMouseEnter: T ? t.onDotsLeave : null,
            onMouseOver: T ? t.onDotsOver : null,
            onMouseLeave: T ? t.onDotsLeave : null
          }), O = /* @__PURE__ */ o.default.createElement(L.Dots, m);
        }
        var P, j, D = (0, y.extractObject)(e, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        D.clickHandler = t.changeSlide, t.props.arrows && (P = /* @__PURE__ */ o.default.createElement(x.PrevArrow, D), j = /* @__PURE__ */ o.default.createElement(x.NextArrow, D));
        var N = null;
        t.props.vertical && (N = {
          height: t.state.listHeight
        });
        var I = null;
        t.props.vertical === !1 ? t.props.centerMode === !0 && (I = {
          padding: "0px " + t.props.centerPadding
        }) : t.props.centerMode === !0 && (I = {
          padding: t.props.centerPadding + " 0px"
        });
        var Y = C(C({}, N), I), K = t.props.touchMove, W = {
          className: "slick-list",
          style: Y,
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
        }, z = {
          className: i,
          dir: "ltr",
          style: t.props.style
        };
        return t.props.unslick && (W = {
          className: "slick-list"
        }, z = {
          className: i,
          style: t.props.style
        }), /* @__PURE__ */ o.default.createElement("div", z, t.props.unslick ? "" : P, /* @__PURE__ */ o.default.createElement("div", U({
          ref: t.listRefHandler
        }, W), /* @__PURE__ */ o.default.createElement(g.Track, U({
          ref: t.trackRefHandler
        }, n), t.props.children)), t.props.unslick ? "" : j, t.props.unslick ? "" : O);
      }), t.list = null, t.track = null, t.state = C(C({}, f.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: o.default.Children.count(t.props.children)
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      var B = t.ssrInit();
      return t.state = C(C({}, t.state), B), t;
    }
    return $(w, [{
      key: "didPropsChange",
      value: function(t) {
        for (var B = !1, i = 0, e = Object.keys(this.props); i < e.length; i++) {
          var n = e[i];
          if (!t.hasOwnProperty(n)) {
            B = !0;
            break;
          }
          if (!(A(t[n]) === "object" || typeof t[n] == "function" || isNaN(t[n])) && t[n] !== this.props[n]) {
            B = !0;
            break;
          }
        }
        return B || o.default.Children.count(this.props.children) !== o.default.Children.count(t.children);
      }
    }]), w;
  })(o.default.Component), pe;
}
var Ee, Xe;
function Rt() {
  if (Xe) return Ee;
  Xe = 1;
  var o = function(f) {
    return f.replace(/[A-Z]/g, function(h) {
      return "-" + h.toLowerCase();
    }).toLowerCase();
  };
  return Ee = o, Ee;
}
var Le, Ke;
function zt() {
  if (Ke) return Le;
  Ke = 1;
  var o = Rt(), f = function(y) {
    var g = /[height|width]$/;
    return g.test(y);
  }, h = function(y) {
    var g = "", L = Object.keys(y);
    return L.forEach(function(x, q) {
      var H = y[x];
      x = o(x), f(x) && typeof H == "number" && (H = H + "px"), H === !0 ? g += x : H === !1 ? g += "not " + x : g += "(" + x + ": " + H + ")", q < L.length - 1 && (g += " and ");
    }), g;
  }, S = function(y) {
    var g = "";
    return typeof y == "string" ? y : y instanceof Array ? (y.forEach(function(L, x) {
      g += h(L), x < y.length - 1 && (g += ", ");
    }), g) : h(y);
  };
  return Le = S, Le;
}
var Ye;
function Dt() {
  return Ye || (Ye = 1, (function(o) {
    var f = { NODE_ENV: "production" };
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
    var h = x(ue), S = Mt(), y = x(zt()), g = x(Ve()), L = ye();
    function x(l) {
      return l && l.__esModule ? l : { default: l };
    }
    function q(l) {
      "@babel/helpers - typeof";
      return q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
        return typeof r;
      } : function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, q(l);
    }
    function H() {
      return H = Object.assign ? Object.assign.bind() : function(l) {
        for (var r = 1; r < arguments.length; r++) {
          var v = arguments[r];
          for (var b in v)
            ({}).hasOwnProperty.call(v, b) && (l[b] = v[b]);
        }
        return l;
      }, H.apply(null, arguments);
    }
    function A(l, r) {
      var v = Object.keys(l);
      if (Object.getOwnPropertySymbols) {
        var b = Object.getOwnPropertySymbols(l);
        r && (b = b.filter(function(u) {
          return Object.getOwnPropertyDescriptor(l, u).enumerable;
        })), v.push.apply(v, b);
      }
      return v;
    }
    function U(l) {
      for (var r = 1; r < arguments.length; r++) {
        var v = arguments[r] != null ? arguments[r] : {};
        r % 2 ? A(Object(v), !0).forEach(function(b) {
          s(l, b, v[b]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(v)) : A(Object(v)).forEach(function(b) {
          Object.defineProperty(l, b, Object.getOwnPropertyDescriptor(v, b));
        });
      }
      return l;
    }
    function ee(l, r) {
      if (!(l instanceof r)) throw new TypeError("Cannot call a class as a function");
    }
    function te(l, r) {
      for (var v = 0; v < r.length; v++) {
        var b = r[v];
        b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(l, c(b.key), b);
      }
    }
    function R(l, r, v) {
      return r && te(l.prototype, r), Object.defineProperty(l, "prototype", { writable: !1 }), l;
    }
    function C(l, r) {
      if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
      l.prototype = Object.create(r && r.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), Object.defineProperty(l, "prototype", { writable: !1 }), r && X(l, r);
    }
    function X(l, r) {
      return X = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(v, b) {
        return v.__proto__ = b, v;
      }, X(l, r);
    }
    function F(l) {
      var r = J();
      return function() {
        var v, b = a(l);
        if (r) {
          var u = a(this).constructor;
          v = Reflect.construct(b, arguments, u);
        } else v = b.apply(this, arguments);
        return $(this, v);
      };
    }
    function $(l, r) {
      if (r && (q(r) == "object" || typeof r == "function")) return r;
      if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return V(l);
    }
    function V(l) {
      if (l === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return l;
    }
    function J() {
      try {
        var l = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch {
      }
      return (J = function() {
        return !!l;
      })();
    }
    function a(l) {
      return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
      }, a(l);
    }
    function s(l, r, v) {
      return (r = c(r)) in l ? Object.defineProperty(l, r, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : l[r] = v, l;
    }
    function c(l) {
      var r = k(l, "string");
      return q(r) == "symbol" ? r : r + "";
    }
    function k(l, r) {
      if (q(l) != "object" || !l) return l;
      var v = l[Symbol.toPrimitive];
      if (v !== void 0) {
        var b = v.call(l, r);
        if (q(b) != "object") return b;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(l);
    }
    o.default = /* @__PURE__ */ (function(l) {
      C(v, l);
      var r = F(v);
      function v(b) {
        var u;
        return ee(this, v), u = r.call(this, b), s(V(u), "innerSliderRefHandler", function(d) {
          return u.innerSlider = d;
        }), s(V(u), "slickPrev", function() {
          return u.innerSlider.slickPrev();
        }), s(V(u), "slickNext", function() {
          return u.innerSlider.slickNext();
        }), s(V(u), "slickGoTo", function(d) {
          var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return u.innerSlider.slickGoTo(d, w);
        }), s(V(u), "slickPause", function() {
          return u.innerSlider.pause("paused");
        }), s(V(u), "slickPlay", function() {
          return u.innerSlider.autoPlay("play");
        }), u.state = {
          breakpoint: null
        }, u._responsiveMediaHandlers = [], u;
      }
      return R(v, [{
        key: "media",
        value: function(u, d) {
          var w = window.matchMedia(u), _ = function(B) {
            var i = B.matches;
            i && d();
          };
          w.addListener(_), this._responsiveMediaHandlers.push({
            mql: w,
            query: u,
            listener: _
          });
        }
        // handles responsive breakpoints
      }, {
        key: "componentDidMount",
        value: function() {
          var u = this;
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
              }), (0, L.canUseDOM)() && u.media(B, function() {
                u.setState({
                  breakpoint: _
                });
              });
            });
            var w = (0, y.default)({
              minWidth: d.slice(-1)[0]
            });
            (0, L.canUseDOM)() && this.media(w, function() {
              u.setState({
                breakpoint: null
              });
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this._responsiveMediaHandlers.forEach(function(u) {
            u.mql.removeListener(u.listener);
          });
        }
      }, {
        key: "render",
        value: function() {
          var u = this, d, w;
          this.state.breakpoint ? (w = this.props.responsive.filter(function(T) {
            return T.breakpoint === u.state.breakpoint;
          }), d = w[0].settings === "unslick" ? "unslick" : U(U(U({}, g.default), this.props), w[0].settings)) : d = U(U({}, g.default), this.props), d.centerMode && (d.slidesToScroll > 1 && f.NODE_ENV, d.slidesToScroll = 1), d.fade && (d.slidesToShow > 1 && f.NODE_ENV, d.slidesToScroll > 1 && f.NODE_ENV, d.slidesToShow = 1, d.slidesToScroll = 1);
          var _ = h.default.Children.toArray(this.props.children);
          _ = _.filter(function(T) {
            return typeof T == "string" ? !!T.trim() : !!T;
          }), d.variableWidth && (d.rows > 1 || d.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), d.variableWidth = !1);
          for (var t = [], B = null, i = 0; i < _.length; i += d.rows * d.slidesPerRow) {
            for (var e = [], n = i; n < i + d.rows * d.slidesPerRow; n += d.slidesPerRow) {
              for (var p = [], O = n; O < n + d.slidesPerRow && (d.variableWidth && _[O].props.style && (B = _[O].props.style.width), !(O >= _.length)); O += 1)
                p.push(/* @__PURE__ */ h.default.cloneElement(_[O], {
                  key: 100 * i + 10 * n + O,
                  tabIndex: -1,
                  style: {
                    width: "".concat(100 / d.slidesPerRow, "%"),
                    display: "inline-block"
                  }
                }));
              e.push(/* @__PURE__ */ h.default.createElement("div", {
                key: 10 * i + n
              }, p));
            }
            d.variableWidth ? t.push(/* @__PURE__ */ h.default.createElement("div", {
              key: i,
              style: {
                width: B
              }
            }, e)) : t.push(/* @__PURE__ */ h.default.createElement("div", {
              key: i
            }, e));
          }
          if (d === "unslick") {
            var m = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ h.default.createElement("div", {
              className: m
            }, _);
          } else t.length <= d.slidesToShow && (d.unslick = !0);
          return /* @__PURE__ */ h.default.createElement(S.InnerSlider, H({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, (0, L.filterSettings)(d)), t);
        }
      }]), v;
    })(h.default.Component);
  })(Pe)), Pe;
}
var Ue;
function Nt() {
  return Ue || (Ue = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
    var f = h(Dt());
    function h(S) {
      return S && S.__esModule ? S : { default: S };
    }
    o.default = f.default;
  })(_e)), _e;
}
var Ht = Nt();
const It = /* @__PURE__ */ ot(Ht), qt = ({
  logos: o = [],
  // Array of { src, alt, href }
  carousel: f = !1,
  carouselLabel: h = "Logo carousel",
  className: S = "",
  ...y
}) => {
  const [g, L] = ze(0), [x, q] = ze(1), H = nt(null), A = "w-full flex flex-wrap justify-center gap-logos-spacing-x", U = "flex items-center justify-center basis-[160px] md:basis-[210px] xl:basis-[135px]", ee = "flex items-center justify-center px-[calc(var(--spacing-logos-spacing-x)/2)]";
  it(() => {
    if (!f) return;
    const R = () => {
      const X = H.current;
      if (!X) return;
      X.querySelectorAll(".slick-slide").forEach(($) => {
        $.getAttribute("aria-hidden") === "true" ? $.setAttribute("inert", "") : $.removeAttribute("inert");
      });
      const F = X.querySelectorAll('.slick-slide[aria-hidden="false"]:not(.slick-cloned)');
      q(Math.max(F.length, 1));
    }, C = window.requestAnimationFrame(R);
    return () => window.cancelAnimationFrame(C);
  }, [f, g, o.length]);
  const te = {
    infinite: !0,
    arrows: !1,
    dots: !0,
    slidesToShow: 6,
    slidesToScroll: 3,
    centerPadding: "0",
    afterChange: L,
    customPaging: (R) => /* @__PURE__ */ oe(
      "button",
      {
        type: "button",
        "aria-label": `Go to carousel page ${R + 1}`
      }
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          centerPadding: "80px",
          centerMode: !0,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "80px",
          centerMode: !0,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return /* @__PURE__ */ oe(
    "div",
    {
      ref: f ? H : null,
      className: `py-logos-padding-y ${S}`,
      ...f ? {
        role: "region",
        "aria-roledescription": "carousel",
        "aria-label": h
      } : {},
      ...y,
      children: f ? /* @__PURE__ */ Re(rt, { children: [
        /* @__PURE__ */ Re("div", { "aria-live": "polite", "aria-atomic": "true", className: "sr-only", children: [
          "Showing logos ",
          g + 1,
          " to ",
          Math.min(g + x, o.length),
          " of ",
          o.length
        ] }),
        /* @__PURE__ */ oe(It, { ...te, className: "logos-carousel text-center", children: o.map((R, C) => {
          const X = /* @__PURE__ */ oe(
            "img",
            {
              src: R.src,
              alt: R.alt || "Logo",
              className: "w-full"
            }
          );
          return R.href ? /* @__PURE__ */ oe(
            "a",
            {
              href: R.href,
              className: ee,
              ...R.attributes ?? {},
              children: X
            },
            C
          ) : /* @__PURE__ */ oe(
            "div",
            {
              className: ee,
              ...R.attributes ?? {},
              children: X
            },
            C
          );
        }) })
      ] }) : /* @__PURE__ */ oe("div", { className: A, children: o.map((R, C) => {
        const X = /* @__PURE__ */ oe(
          "img",
          {
            src: R.src,
            alt: R.alt || "Logo",
            className: "w-full"
          }
        );
        return R.href ? /* @__PURE__ */ oe(
          "a",
          {
            href: R.href,
            className: U,
            ...R.attributes ?? {},
            children: X
          },
          C
        ) : /* @__PURE__ */ oe(
          "div",
          {
            className: U,
            ...R.attributes ?? {},
            children: X
          },
          C
        );
      }) })
    }
  );
};
export {
  qt as default
};
