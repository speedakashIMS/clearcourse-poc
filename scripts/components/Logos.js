import { jsx as oe, jsxs as Re, Fragment as rt } from "react/jsx-runtime";
import ue, { useState as ze, useRef as nt, useEffect as it } from "react";
var be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ot(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
function at(a) {
  if (Object.prototype.hasOwnProperty.call(a, "__esModule")) return a;
  var d = a.default;
  if (typeof d == "function") {
    var h = function S() {
      return this instanceof S ? Reflect.construct(d, arguments, this.constructor) : d.apply(this, arguments);
    };
    h.prototype = d.prototype;
  } else h = {};
  return Object.defineProperty(h, "__esModule", { value: !0 }), Object.keys(a).forEach(function(S) {
    var y = Object.getOwnPropertyDescriptor(a, S);
    Object.defineProperty(h, S, y.get ? y : {
      enumerable: !0,
      get: function() {
        return a[S];
      }
    });
  }), h;
}
var _e = {}, Pe = {}, pe = {}, ke = {}, De;
function lt() {
  return De || (De = 1, (function(a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.default = void 0;
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
    a.default = d;
  })(ke)), ke;
}
var Te, Ne;
function st() {
  if (Ne) return Te;
  Ne = 1;
  var a = "Expected a function", d = NaN, h = "[object Symbol]", S = /^\s+|\s+$/g, y = /^[-+]0x[0-9a-f]+$/i, g = /^0b[01]+$/i, L = /^0o[0-7]+$/i, x = parseInt, F = typeof be == "object" && be && be.Object === Object && be, A = typeof self == "object" && self && self.Object === Object && self, W = F || A || Function("return this")(), Y = Object.prototype, $ = Y.toString, te = Math.max, J = Math.min, E = function() {
    return W.Date.now();
  };
  function Q(o, s, c) {
    var k, l, r, v, b, u, f = 0, w = !1, _ = !1, t = !0;
    if (typeof o != "function")
      throw new TypeError(a);
    s = V(s) || 0, M(c) && (w = !!c.leading, _ = "maxWait" in c, r = _ ? te(V(c.maxWait) || 0, s) : r, t = "trailing" in c ? !!c.trailing : t);
    function B(C) {
      var N = k, H = l;
      return k = l = void 0, f = C, v = o.apply(H, N), v;
    }
    function i(C) {
      return f = C, b = setTimeout(p, s), w ? B(C) : v;
    }
    function e(C) {
      var N = C - u, H = C - f, I = s - N;
      return _ ? J(I, r - H) : I;
    }
    function n(C) {
      var N = C - u, H = C - f;
      return u === void 0 || N >= s || N < 0 || _ && H >= r;
    }
    function p() {
      var C = E();
      if (n(C))
        return O(C);
      b = setTimeout(p, e(C));
    }
    function O(C) {
      return b = void 0, t && k ? B(C) : (k = l = void 0, v);
    }
    function m() {
      b !== void 0 && clearTimeout(b), f = 0, k = u = l = b = void 0;
    }
    function T() {
      return b === void 0 ? v : O(E());
    }
    function P() {
      var C = E(), N = n(C);
      if (k = arguments, l = this, u = C, N) {
        if (b === void 0)
          return i(u);
        if (_)
          return b = setTimeout(p, s), B(u);
      }
      return b === void 0 && (b = setTimeout(p, s)), v;
    }
    return P.cancel = m, P.flush = T, P;
  }
  function M(o) {
    var s = typeof o;
    return !!o && (s == "object" || s == "function");
  }
  function U(o) {
    return !!o && typeof o == "object";
  }
  function D(o) {
    return typeof o == "symbol" || U(o) && $.call(o) == h;
  }
  function V(o) {
    if (typeof o == "number")
      return o;
    if (D(o))
      return d;
    if (M(o)) {
      var s = typeof o.valueOf == "function" ? o.valueOf() : o;
      o = M(s) ? s + "" : s;
    }
    if (typeof o != "string")
      return o === 0 ? o : +o;
    o = o.replace(S, "");
    var c = g.test(o);
    return c || L.test(o) ? x(o.slice(2), c ? 2 : 8) : y.test(o) ? d : +o;
  }
  return Te = Q, Te;
}
var Ce = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var He;
function we() {
  return He || (He = 1, (function(a) {
    (function() {
      var d = {}.hasOwnProperty;
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
          d.call(g, x) && g[x] && (L = y(L, x));
        return L;
      }
      function y(g, L) {
        return L ? g ? g + " " + L : g + L : g;
      }
      a.exports ? (h.default = h, a.exports = h) : window.classNames = h;
    })();
  })(Ce)), Ce.exports;
}
var j = {}, je = {}, Ie;
function Ve() {
  return Ie || (Ie = 1, (function(a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.default = void 0;
    var d = h(ue);
    function h(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var S = {
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
    a.default = S;
  })(je)), je;
}
var Ae;
function ye() {
  if (Ae) return j;
  Ae = 1, Object.defineProperty(j, "__esModule", {
    value: !0
  }), j.checkSpecKeys = j.checkNavigable = j.changeSlide = j.canUseDOM = j.canGoNext = void 0, j.clamp = A, j.extractObject = void 0, j.filterSettings = B, j.validSettings = j.swipeStart = j.swipeMove = j.swipeEnd = j.slidesOnRight = j.slidesOnLeft = j.slideHandler = j.siblingDirection = j.safePreventDefault = j.lazyStartIndex = j.lazySlidesOnRight = j.lazySlidesOnLeft = j.lazyEndIndex = j.keyHandler = j.initializedState = j.getWidth = j.getTrackLeft = j.getTrackCSS = j.getTrackAnimateCSS = j.getTotalSlides = j.getSwipeDirection = j.getSlideCount = j.getRequiredLazySlides = j.getPreClones = j.getPostClones = j.getOnDemandLazySlides = j.getNavigableIndexes = j.getHeight = void 0;
  var a = h(ue), d = h(Ve());
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
    var e = F(i, "string");
    return S(e) == "symbol" ? e : e + "";
  }
  function F(i, e) {
    if (S(i) != "object" || !i) return i;
    var n = i[Symbol.toPrimitive];
    if (n !== void 0) {
      var p = n.call(i, e);
      if (S(p) != "object") return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(i);
  }
  function A(i, e, n) {
    return Math.max(e, Math.min(i, n));
  }
  var W = j.safePreventDefault = function(e) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(e._reactName) || e.preventDefault();
  }, Y = j.getOnDemandLazySlides = function(e) {
    for (var n = [], p = $(e), O = te(e), m = p; m < O; m++)
      e.lazyLoadedList.indexOf(m) < 0 && n.push(m);
    return n;
  };
  j.getRequiredLazySlides = function(e) {
    for (var n = [], p = $(e), O = te(e), m = p; m < O; m++)
      n.push(m);
    return n;
  };
  var $ = j.lazyStartIndex = function(e) {
    return e.currentSlide - J(e);
  }, te = j.lazyEndIndex = function(e) {
    return e.currentSlide + E(e);
  }, J = j.lazySlidesOnLeft = function(e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }, E = j.lazySlidesOnRight = function(e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }, Q = j.getWidth = function(e) {
    return e && e.offsetWidth || 0;
  }, M = j.getHeight = function(e) {
    return e && e.offsetHeight || 0;
  }, U = j.getSwipeDirection = function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, p, O, m, T;
    return p = e.startX - e.curX, O = e.startY - e.curY, m = Math.atan2(O, p), T = Math.round(m * 180 / Math.PI), T < 0 && (T = 360 - Math.abs(T)), T <= 45 && T >= 0 || T <= 360 && T >= 315 ? "left" : T >= 135 && T <= 225 ? "right" : n === !0 ? T >= 35 && T <= 135 ? "up" : "down" : "vertical";
  }, D = j.canGoNext = function(e) {
    var n = !0;
    return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (n = !1), n;
  };
  j.extractObject = function(e, n) {
    var p = {};
    return n.forEach(function(O) {
      return p[O] = e[O];
    }), p;
  }, j.initializedState = function(e) {
    var n = a.default.Children.count(e.children), p = e.listRef, O = Math.ceil(Q(p)), m = e.trackRef && e.trackRef.node, T = Math.ceil(Q(m)), P;
    if (e.vertical)
      P = O;
    else {
      var C = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding == "string" && e.centerPadding.slice(-1) === "%" && (C *= O / 100), P = Math.ceil((O - C) / e.slidesToShow);
    }
    var N = p && M(p.querySelector('[data-index="0"]')), H = N * e.slidesToShow, I = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && (I = n - 1 - e.initialSlide);
    var K = e.lazyLoadedList || [], X = Y(g(g({}, e), {}, {
      currentSlide: I,
      lazyLoadedList: K
    }));
    K = K.concat(X);
    var q = {
      slideCount: n,
      slideWidth: P,
      listWidth: O,
      trackWidth: T,
      currentSlide: I,
      slideHeight: N,
      listHeight: H,
      lazyLoadedList: K
    };
    return e.autoplaying === null && e.autoplay && (q.autoplaying = "playing"), q;
  }, j.slideHandler = function(e) {
    var n = e.waitForAnimate, p = e.animating, O = e.fade, m = e.infinite, T = e.index, P = e.slideCount, C = e.lazyLoad, N = e.currentSlide, H = e.centerMode, I = e.slidesToScroll, K = e.slidesToShow, X = e.useCSS, q = e.lazyLoadedList;
    if (n && p) return {};
    var z = T, G, ee, R, Z = {}, re = {}, ne = m ? T : A(T, 0, P - 1);
    if (O) {
      if (!m && (T < 0 || T >= P)) return {};
      T < 0 ? z = T + P : T >= P && (z = T - P), C && q.indexOf(z) < 0 && (q = q.concat(z)), Z = {
        animating: !0,
        currentSlide: z,
        lazyLoadedList: q,
        targetSlide: z
      }, re = {
        animating: !1,
        targetSlide: z
      };
    } else
      G = z, z < 0 ? (G = z + P, m ? P % I !== 0 && (G = P - P % I) : G = 0) : !D(e) && z > N ? z = G = N : H && z >= P ? (z = m ? P : P - 1, G = m ? 0 : P - 1) : z >= P && (G = z - P, m ? P % I !== 0 && (G = 0) : G = P - K), !m && z + K >= P && (G = P - K), ee = r(g(g({}, e), {}, {
        slideIndex: z
      })), R = r(g(g({}, e), {}, {
        slideIndex: G
      })), m || (ee === R && (z = G), ee = R), C && (q = q.concat(Y(g(g({}, e), {}, {
        currentSlide: z
      })))), X ? (Z = {
        animating: !0,
        currentSlide: G,
        trackStyle: l(g(g({}, e), {}, {
          left: ee
        })),
        lazyLoadedList: q,
        targetSlide: ne
      }, re = {
        animating: !1,
        currentSlide: G,
        trackStyle: k(g(g({}, e), {}, {
          left: R
        })),
        swipeLeft: null,
        targetSlide: ne
      }) : Z = {
        currentSlide: G,
        trackStyle: k(g(g({}, e), {}, {
          left: R
        })),
        lazyLoadedList: q,
        targetSlide: ne
      };
    return {
      state: Z,
      nextState: re
    };
  }, j.changeSlide = function(e, n) {
    var p, O, m, T, P, C = e.slidesToScroll, N = e.slidesToShow, H = e.slideCount, I = e.currentSlide, K = e.targetSlide, X = e.lazyLoad, q = e.infinite;
    if (T = H % C !== 0, p = T ? 0 : (H - I) % C, n.message === "previous")
      m = p === 0 ? C : N - p, P = I - m, X && !q && (O = I - m, P = O === -1 ? H - 1 : O), q || (P = K - C);
    else if (n.message === "next")
      m = p === 0 ? C : p, P = I + m, X && !q && (P = (I + C) % H + p), q || (P = K + C);
    else if (n.message === "dots")
      P = n.index * n.slidesToScroll;
    else if (n.message === "children") {
      if (P = n.index, q) {
        var z = f(g(g({}, e), {}, {
          targetSlide: P
        }));
        P > n.currentSlide && z === "left" ? P = P - H : P < n.currentSlide && z === "right" && (P = P + H);
      }
    } else n.message === "index" && (P = Number(n.index));
    return P;
  }, j.keyHandler = function(e, n, p) {
    return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n ? "" : e.keyCode === 37 ? p ? "next" : "previous" : e.keyCode === 39 ? p ? "previous" : "next" : "";
  }, j.swipeStart = function(e, n, p) {
    return e.target.tagName === "IMG" && W(e), !n || !p && e.type.indexOf("mouse") !== -1 ? "" : {
      dragging: !0,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY
      }
    };
  }, j.swipeMove = function(e, n) {
    var p = n.scrolling, O = n.animating, m = n.vertical, T = n.swipeToSlide, P = n.verticalSwiping, C = n.rtl, N = n.currentSlide, H = n.edgeFriction, I = n.edgeDragged, K = n.onEdge, X = n.swiped, q = n.swiping, z = n.slideCount, G = n.slidesToScroll, ee = n.infinite, R = n.touchObject, Z = n.swipeEvent, re = n.listHeight, ne = n.listWidth;
    if (!p) {
      if (O) return W(e);
      m && T && P && W(e);
      var ie, le = {}, ge = r(n);
      R.curX = e.touches ? e.touches[0].pageX : e.clientX, R.curY = e.touches ? e.touches[0].pageY : e.clientY, R.swipeLength = Math.round(Math.sqrt(Math.pow(R.curX - R.startX, 2)));
      var Me = Math.round(Math.sqrt(Math.pow(R.curY - R.startY, 2)));
      if (!P && !q && Me > 10)
        return {
          scrolling: !0
        };
      P && (R.swipeLength = Me);
      var fe = (C ? -1 : 1) * (R.curX > R.startX ? 1 : -1);
      P && (fe = R.curY > R.startY ? 1 : -1);
      var tt = Math.ceil(z / G), ae = U(n.touchObject, P), de = R.swipeLength;
      return ee || (N === 0 && (ae === "right" || ae === "down") || N + 1 >= tt && (ae === "left" || ae === "up") || !D(n) && (ae === "left" || ae === "up")) && (de = R.swipeLength * H, I === !1 && K && (K(ae), le.edgeDragged = !0)), !X && Z && (Z(ae), le.swiped = !0), m ? ie = ge + de * (re / ne) * fe : C ? ie = ge - de * fe : ie = ge + de * fe, P && (ie = ge + de * fe), le = g(g({}, le), {}, {
        touchObject: R,
        swipeLeft: ie,
        trackStyle: k(g(g({}, n), {}, {
          left: ie
        }))
      }), Math.abs(R.curX - R.startX) < Math.abs(R.curY - R.startY) * 0.8 || R.swipeLength > 10 && (le.swiping = !0, W(e)), le;
    }
  }, j.swipeEnd = function(e, n) {
    var p = n.dragging, O = n.swipe, m = n.touchObject, T = n.listWidth, P = n.touchThreshold, C = n.verticalSwiping, N = n.listHeight, H = n.swipeToSlide, I = n.scrolling, K = n.onSwipe, X = n.targetSlide, q = n.currentSlide, z = n.infinite;
    if (!p)
      return O && W(e), {};
    var G = C ? N / P : T / P, ee = U(m, C), R = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {}
    };
    if (I || !m.swipeLength)
      return R;
    if (m.swipeLength > G) {
      W(e), K && K(ee);
      var Z, re, ne = z ? q : X;
      switch (ee) {
        case "left":
        case "up":
          re = ne + s(n), Z = H ? o(n, re) : re, R.currentDirection = 0;
          break;
        case "right":
        case "down":
          re = ne - s(n), Z = H ? o(n, re) : re, R.currentDirection = 1;
          break;
        default:
          Z = ne;
      }
      R.triggerSlideHandler = Z;
    } else {
      var ie = r(n);
      R.trackStyle = l(g(g({}, n), {}, {
        left: ie
      }));
    }
    return R;
  };
  var V = j.getNavigableIndexes = function(e) {
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, p = e.infinite ? e.slidesToShow * -1 : 0, O = e.infinite ? e.slidesToShow * -1 : 0, m = []; p < n; )
      m.push(p), p = O + e.slidesToScroll, O += Math.min(e.slidesToScroll, e.slidesToShow);
    return m;
  }, o = j.checkNavigable = function(e, n) {
    var p = V(e), O = 0;
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
  }, s = j.getSlideCount = function(e) {
    var n = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      var p, O = e.listRef, m = O.querySelectorAll && O.querySelectorAll(".slick-slide") || [];
      if (Array.from(m).every(function(C) {
        if (e.vertical) {
          if (C.offsetTop + M(C) / 2 > e.swipeLeft * -1)
            return p = C, !1;
        } else if (C.offsetLeft - n + Q(C) / 2 > e.swipeLeft * -1)
          return p = C, !1;
        return !0;
      }), !p)
        return 0;
      var T = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide, P = Math.abs(p.dataset.index - T) || 1;
      return P;
    } else
      return e.slidesToScroll;
  }, c = j.checkSpecKeys = function(e, n) {
    return n.reduce(function(p, O) {
      return p && e.hasOwnProperty(O);
    }, !0) ? null : console.error("Keys Missing:", e);
  }, k = j.getTrackCSS = function(e) {
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
      var T = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", P = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", C = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
      m = g(g({}, m), {}, {
        WebkitTransform: T,
        transform: P,
        msTransform: C
      });
    } else
      e.vertical ? m.top = e.left : m.left = e.left;
    return e.fade && (m = {
      opacity: 1
    }), n && (m.width = n), p && (m.height = p), window && !window.addEventListener && window.attachEvent && (e.vertical ? m.marginTop = e.left + "px" : m.marginLeft = e.left + "px"), m;
  }, l = j.getTrackAnimateCSS = function(e) {
    c(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var n = k(e);
    return e.useTransform ? (n.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, n.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? n.transition = "top " + e.speed + "ms " + e.cssEase : n.transition = "left " + e.speed + "ms " + e.cssEase, n;
  }, r = j.getTrackLeft = function(e) {
    if (e.unslick)
      return 0;
    c(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var n = e.slideIndex, p = e.trackRef, O = e.infinite, m = e.centerMode, T = e.slideCount, P = e.slidesToShow, C = e.slidesToScroll, N = e.slideWidth, H = e.listWidth, I = e.variableWidth, K = e.slideHeight, X = e.fade, q = e.vertical, z = 0, G, ee, R = 0;
    if (X || e.slideCount === 1)
      return 0;
    var Z = 0;
    if (O ? (Z = -v(e), T % C !== 0 && n + C > T && (Z = -(n > T ? P - (n - T) : T % C)), m && (Z += parseInt(P / 2))) : (T % C !== 0 && n + C > T && (Z = P - T % C), m && (Z = parseInt(P / 2))), z = Z * N, R = Z * K, q ? G = n * K * -1 + R : G = n * N * -1 + z, I === !0) {
      var re, ne = p && p.node;
      if (re = n + v(e), ee = ne && ne.childNodes[re], G = ee ? ee.offsetLeft * -1 : 0, m === !0) {
        re = O ? n + v(e) : n, ee = ne && ne.children[re], G = 0;
        for (var ie = 0; ie < re; ie++)
          G -= ne && ne.children[ie] && ne.children[ie].offsetWidth;
        G -= parseInt(e.centerPadding), G += ee && (H - ee.offsetWidth) / 2;
      }
    }
    return G;
  }, v = j.getPreClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, b = j.getPostClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, u = j.getTotalSlides = function(e) {
    return e.slideCount === 1 ? 1 : v(e) + e.slideCount + b(e);
  }, f = j.siblingDirection = function(e) {
    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + w(e) ? "left" : "right" : e.targetSlide < e.currentSlide - _(e) ? "right" : "left";
  }, w = j.slidesOnRight = function(e) {
    var n = e.slidesToShow, p = e.centerMode, O = e.rtl, m = e.centerPadding;
    if (p) {
      var T = (n - 1) / 2 + 1;
      return parseInt(m) > 0 && (T += 1), O && n % 2 === 0 && (T += 1), T;
    }
    return O ? 0 : n - 1;
  }, _ = j.slidesOnLeft = function(e) {
    var n = e.slidesToShow, p = e.centerMode, O = e.rtl, m = e.centerPadding;
    if (p) {
      var T = (n - 1) / 2 + 1;
      return parseInt(m) > 0 && (T += 1), !O && n % 2 === 0 && (T += 1), T;
    }
    return O ? n - 1 : 0;
  };
  j.canUseDOM = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  };
  var t = j.validSettings = Object.keys(d.default);
  function B(i) {
    return t.reduce(function(e, n) {
      return i.hasOwnProperty(n) && (e[n] = i[n]), e;
    }, {});
  }
  return j;
}
var ve = {}, We;
function ut() {
  if (We) return ve;
  We = 1, Object.defineProperty(ve, "__esModule", {
    value: !0
  }), ve.Track = void 0;
  var a = S(ue), d = S(we()), h = ye();
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
      b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(l, D(b.key), b);
    }
  }
  function F(l, r, v) {
    return r && x(l.prototype, r), Object.defineProperty(l, "prototype", { writable: !1 }), l;
  }
  function A(l, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
    l.prototype = Object.create(r && r.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), Object.defineProperty(l, "prototype", { writable: !1 }), r && W(l, r);
  }
  function W(l, r) {
    return W = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(v, b) {
      return v.__proto__ = b, v;
    }, W(l, r);
  }
  function Y(l) {
    var r = J();
    return function() {
      var v, b = E(l);
      if (r) {
        var u = E(this).constructor;
        v = Reflect.construct(b, arguments, u);
      } else v = b.apply(this, arguments);
      return $(this, v);
    };
  }
  function $(l, r) {
    if (r && (y(r) == "object" || typeof r == "function")) return r;
    if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return te(l);
  }
  function te(l) {
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
  function E(l) {
    return E = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, E(l);
  }
  function Q(l, r) {
    var v = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      var b = Object.getOwnPropertySymbols(l);
      r && (b = b.filter(function(u) {
        return Object.getOwnPropertyDescriptor(l, u).enumerable;
      })), v.push.apply(v, b);
    }
    return v;
  }
  function M(l) {
    for (var r = 1; r < arguments.length; r++) {
      var v = arguments[r] != null ? arguments[r] : {};
      r % 2 ? Q(Object(v), !0).forEach(function(b) {
        U(l, b, v[b]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(v)) : Q(Object(v)).forEach(function(b) {
        Object.defineProperty(l, b, Object.getOwnPropertyDescriptor(v, b));
      });
    }
    return l;
  }
  function U(l, r, v) {
    return (r = D(r)) in l ? Object.defineProperty(l, r, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : l[r] = v, l;
  }
  function D(l) {
    var r = V(l, "string");
    return y(r) == "symbol" ? r : r + "";
  }
  function V(l, r) {
    if (y(l) != "object" || !l) return l;
    var v = l[Symbol.toPrimitive];
    if (v !== void 0) {
      var b = v.call(l, r);
      if (y(b) != "object") return b;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(l);
  }
  var o = function(r) {
    var v, b, u, f, w;
    r.rtl ? w = r.slideCount - 1 - r.index : w = r.index, u = w < 0 || w >= r.slideCount, r.centerMode ? (f = Math.floor(r.slidesToShow / 2), b = (w - r.currentSlide) % r.slideCount === 0, w > r.currentSlide - f - 1 && w <= r.currentSlide + f && (v = !0)) : v = r.currentSlide <= w && w < r.currentSlide + r.slidesToShow;
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
    var v, b = [], u = [], f = [], w = a.default.Children.count(r.children), _ = (0, h.lazyStartIndex)(r), t = (0, h.lazyEndIndex)(r);
    return a.default.Children.forEach(r.children, function(B, i) {
      var e, n = {
        message: "children",
        index: i,
        slidesToScroll: r.slidesToScroll,
        currentSlide: r.currentSlide
      };
      !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(i) >= 0 ? e = B : e = /* @__PURE__ */ a.default.createElement("div", null);
      var p = s(M(M({}, r), {}, {
        index: i
      })), O = e.props.className || "", m = o(M(M({}, r), {}, {
        index: i
      }));
      if (b.push(/* @__PURE__ */ a.default.cloneElement(e, {
        key: "original" + c(e, i),
        "data-index": i,
        className: (0, d.default)(m, O),
        tabIndex: "-1",
        "aria-hidden": !m["slick-active"],
        style: M(M({
          outline: "none"
        }, e.props.style || {}), p),
        onClick: function(C) {
          e.props && e.props.onClick && e.props.onClick(C), r.focusOnSelect && r.focusOnSelect(n);
        }
      })), r.infinite && w > 1 && r.fade === !1 && !r.unslick) {
        var T = w - i;
        T <= (0, h.getPreClones)(r) && (v = -T, v >= _ && (e = B), m = o(M(M({}, r), {}, {
          index: v
        })), u.push(/* @__PURE__ */ a.default.cloneElement(e, {
          key: "precloned" + c(e, v),
          "data-index": v,
          tabIndex: "-1",
          className: (0, d.default)(m, O),
          "aria-hidden": !m["slick-active"],
          style: M(M({}, e.props.style || {}), p),
          onClick: function(C) {
            e.props && e.props.onClick && e.props.onClick(C), r.focusOnSelect && r.focusOnSelect(n);
          }
        }))), i < (0, h.getPostClones)(r) && (v = w + i, v < t && (e = B), m = o(M(M({}, r), {}, {
          index: v
        })), f.push(/* @__PURE__ */ a.default.cloneElement(e, {
          key: "postcloned" + c(e, v),
          "data-index": v,
          tabIndex: "-1",
          className: (0, d.default)(m, O),
          "aria-hidden": !m["slick-active"],
          style: M(M({}, e.props.style || {}), p),
          onClick: function(C) {
            e.props && e.props.onClick && e.props.onClick(C), r.focusOnSelect && r.focusOnSelect(n);
          }
        })));
      }
    }), r.rtl ? u.concat(b, f).reverse() : u.concat(b, f);
  };
  return ve.Track = /* @__PURE__ */ (function(l) {
    A(v, l);
    var r = Y(v);
    function v() {
      var b;
      L(this, v);
      for (var u = arguments.length, f = new Array(u), w = 0; w < u; w++)
        f[w] = arguments[w];
      return b = r.call.apply(r, [this].concat(f)), U(te(b), "node", null), U(te(b), "handleRef", function(_) {
        b.node = _;
      }), b;
    }
    return F(v, [{
      key: "render",
      value: function() {
        var u = k(this.props), f = this.props, w = f.onMouseEnter, _ = f.onMouseOver, t = f.onMouseLeave, B = {
          onMouseEnter: w,
          onMouseOver: _,
          onMouseLeave: t
        };
        return /* @__PURE__ */ a.default.createElement("div", g({
          ref: this.handleRef,
          className: "slick-track",
          style: this.props.trackStyle
        }, B), u);
      }
    }]), v;
  })(a.default.PureComponent), ve;
}
var he = {}, qe;
function ct() {
  if (qe) return he;
  qe = 1;
  function a(o) {
    "@babel/helpers - typeof";
    return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, a(o);
  }
  Object.defineProperty(he, "__esModule", {
    value: !0
  }), he.Dots = void 0;
  var d = y(ue), h = y(we()), S = ye();
  function y(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function g(o, s) {
    var c = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(o);
      s && (k = k.filter(function(l) {
        return Object.getOwnPropertyDescriptor(o, l).enumerable;
      })), c.push.apply(c, k);
    }
    return c;
  }
  function L(o) {
    for (var s = 1; s < arguments.length; s++) {
      var c = arguments[s] != null ? arguments[s] : {};
      s % 2 ? g(Object(c), !0).forEach(function(k) {
        x(o, k, c[k]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c)) : g(Object(c)).forEach(function(k) {
        Object.defineProperty(o, k, Object.getOwnPropertyDescriptor(c, k));
      });
    }
    return o;
  }
  function x(o, s, c) {
    return (s = Y(s)) in o ? Object.defineProperty(o, s, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : o[s] = c, o;
  }
  function F(o, s) {
    if (!(o instanceof s)) throw new TypeError("Cannot call a class as a function");
  }
  function A(o, s) {
    for (var c = 0; c < s.length; c++) {
      var k = s[c];
      k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(o, Y(k.key), k);
    }
  }
  function W(o, s, c) {
    return s && A(o.prototype, s), Object.defineProperty(o, "prototype", { writable: !1 }), o;
  }
  function Y(o) {
    var s = $(o, "string");
    return a(s) == "symbol" ? s : s + "";
  }
  function $(o, s) {
    if (a(o) != "object" || !o) return o;
    var c = o[Symbol.toPrimitive];
    if (c !== void 0) {
      var k = c.call(o, s);
      if (a(k) != "object") return k;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(o);
  }
  function te(o, s) {
    if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
    o.prototype = Object.create(s && s.prototype, { constructor: { value: o, writable: !0, configurable: !0 } }), Object.defineProperty(o, "prototype", { writable: !1 }), s && J(o, s);
  }
  function J(o, s) {
    return J = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, k) {
      return c.__proto__ = k, c;
    }, J(o, s);
  }
  function E(o) {
    var s = U();
    return function() {
      var c, k = D(o);
      if (s) {
        var l = D(this).constructor;
        c = Reflect.construct(k, arguments, l);
      } else c = k.apply(this, arguments);
      return Q(this, c);
    };
  }
  function Q(o, s) {
    if (s && (a(s) == "object" || typeof s == "function")) return s;
    if (s !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return M(o);
  }
  function M(o) {
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
  function D(o) {
    return D = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, D(o);
  }
  var V = function(s) {
    var c;
    return s.infinite ? c = Math.ceil(s.slideCount / s.slidesToScroll) : c = Math.ceil((s.slideCount - s.slidesToShow) / s.slidesToScroll) + 1, c;
  };
  return he.Dots = /* @__PURE__ */ (function(o) {
    te(c, o);
    var s = E(c);
    function c() {
      return F(this, c), s.apply(this, arguments);
    }
    return W(c, [{
      key: "clickHandler",
      value: function(l, r) {
        r.preventDefault(), this.props.clickHandler(l);
      }
    }, {
      key: "render",
      value: function() {
        for (var l = this.props, r = l.onMouseEnter, v = l.onMouseOver, b = l.onMouseLeave, u = l.infinite, f = l.slidesToScroll, w = l.slidesToShow, _ = l.slideCount, t = l.currentSlide, B = V({
          slideCount: _,
          slidesToScroll: f,
          slidesToShow: w,
          infinite: u
        }), i = {
          onMouseEnter: r,
          onMouseOver: v,
          onMouseLeave: b
        }, e = [], n = 0; n < B; n++) {
          var p = (n + 1) * f - 1, O = u ? p : (0, S.clamp)(p, 0, _ - 1), m = O - (f - 1), T = u ? m : (0, S.clamp)(m, 0, _ - 1), P = (0, h.default)({
            "slick-active": u ? t >= T && t <= O : t === T
          }), C = {
            message: "dots",
            index: n,
            slidesToScroll: f,
            currentSlide: t
          }, N = this.clickHandler.bind(this, C);
          e = e.concat(/* @__PURE__ */ d.default.createElement("li", {
            key: n,
            className: P
          }, /* @__PURE__ */ d.default.cloneElement(this.props.customPaging(n), {
            onClick: N
          })));
        }
        return /* @__PURE__ */ d.default.cloneElement(this.props.appendDots(e), L({
          className: this.props.dotsClass
        }, i));
      }
    }]), c;
  })(d.default.PureComponent), he;
}
var se = {}, Fe;
function ft() {
  if (Fe) return se;
  Fe = 1;
  function a(o) {
    "@babel/helpers - typeof";
    return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, a(o);
  }
  Object.defineProperty(se, "__esModule", {
    value: !0
  }), se.PrevArrow = se.NextArrow = void 0;
  var d = y(ue), h = y(we()), S = ye();
  function y(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(o) {
      for (var s = 1; s < arguments.length; s++) {
        var c = arguments[s];
        for (var k in c)
          ({}).hasOwnProperty.call(c, k) && (o[k] = c[k]);
      }
      return o;
    }, g.apply(null, arguments);
  }
  function L(o, s) {
    var c = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(o);
      s && (k = k.filter(function(l) {
        return Object.getOwnPropertyDescriptor(o, l).enumerable;
      })), c.push.apply(c, k);
    }
    return c;
  }
  function x(o) {
    for (var s = 1; s < arguments.length; s++) {
      var c = arguments[s] != null ? arguments[s] : {};
      s % 2 ? L(Object(c), !0).forEach(function(k) {
        F(o, k, c[k]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c)) : L(Object(c)).forEach(function(k) {
        Object.defineProperty(o, k, Object.getOwnPropertyDescriptor(c, k));
      });
    }
    return o;
  }
  function F(o, s, c) {
    return (s = $(s)) in o ? Object.defineProperty(o, s, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : o[s] = c, o;
  }
  function A(o, s) {
    if (!(o instanceof s)) throw new TypeError("Cannot call a class as a function");
  }
  function W(o, s) {
    for (var c = 0; c < s.length; c++) {
      var k = s[c];
      k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(o, $(k.key), k);
    }
  }
  function Y(o, s, c) {
    return s && W(o.prototype, s), Object.defineProperty(o, "prototype", { writable: !1 }), o;
  }
  function $(o) {
    var s = te(o, "string");
    return a(s) == "symbol" ? s : s + "";
  }
  function te(o, s) {
    if (a(o) != "object" || !o) return o;
    var c = o[Symbol.toPrimitive];
    if (c !== void 0) {
      var k = c.call(o, s);
      if (a(k) != "object") return k;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(o);
  }
  function J(o, s) {
    if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
    o.prototype = Object.create(s && s.prototype, { constructor: { value: o, writable: !0, configurable: !0 } }), Object.defineProperty(o, "prototype", { writable: !1 }), s && E(o, s);
  }
  function E(o, s) {
    return E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, k) {
      return c.__proto__ = k, c;
    }, E(o, s);
  }
  function Q(o) {
    var s = D();
    return function() {
      var c, k = V(o);
      if (s) {
        var l = V(this).constructor;
        c = Reflect.construct(k, arguments, l);
      } else c = k.apply(this, arguments);
      return M(this, c);
    };
  }
  function M(o, s) {
    if (s && (a(s) == "object" || typeof s == "function")) return s;
    if (s !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return U(o);
  }
  function U(o) {
    if (o === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o;
  }
  function D() {
    try {
      var o = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (D = function() {
      return !!o;
    })();
  }
  function V(o) {
    return V = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, V(o);
  }
  return se.PrevArrow = /* @__PURE__ */ (function(o) {
    J(c, o);
    var s = Q(c);
    function c() {
      return A(this, c), s.apply(this, arguments);
    }
    return Y(c, [{
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
        return this.props.prevArrow ? u = /* @__PURE__ */ d.default.cloneElement(this.props.prevArrow, x(x({}, v), b)) : u = /* @__PURE__ */ d.default.createElement("button", g({
          key: "0",
          type: "button"
        }, v), " ", "Previous"), u;
      }
    }]), c;
  })(d.default.PureComponent), se.NextArrow = /* @__PURE__ */ (function(o) {
    J(c, o);
    var s = Q(c);
    function c() {
      return A(this, c), s.apply(this, arguments);
    }
    return Y(c, [{
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
        return this.props.nextArrow ? u = /* @__PURE__ */ d.default.cloneElement(this.props.nextArrow, x(x({}, v), b)) : u = /* @__PURE__ */ d.default.createElement("button", g({
          key: "1",
          type: "button"
        }, v), " ", "Next"), u;
      }
    }]), c;
  })(d.default.PureComponent), se;
}
var $e = (function() {
  if (typeof Map < "u")
    return Map;
  function a(d, h) {
    var S = -1;
    return d.some(function(y, g) {
      return y[0] === h ? (S = g, !0) : !1;
    }), S;
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
      }), d.prototype.get = function(h) {
        var S = a(this.__entries__, h), y = this.__entries__[S];
        return y && y[1];
      }, d.prototype.set = function(h, S) {
        var y = a(this.__entries__, h);
        ~y ? this.__entries__[y][1] = S : this.__entries__.push([h, S]);
      }, d.prototype.delete = function(h) {
        var S = this.__entries__, y = a(S, h);
        ~y && S.splice(y, 1);
      }, d.prototype.has = function(h) {
        return !!~a(this.__entries__, h);
      }, d.prototype.clear = function() {
        this.__entries__.splice(0);
      }, d.prototype.forEach = function(h, S) {
        S === void 0 && (S = null);
        for (var y = 0, g = this.__entries__; y < g.length; y++) {
          var L = g[y];
          h.call(S, L[1], L[0]);
        }
      }, d;
    })()
  );
})(), xe = typeof window < "u" && typeof document < "u" && window.document === document, me = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), dt = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(me) : function(a) {
    return setTimeout(function() {
      return a(Date.now());
    }, 1e3 / 60);
  };
})(), pt = 2;
function vt(a, d) {
  var h = !1, S = !1, y = 0;
  function g() {
    h && (h = !1, a()), S && x();
  }
  function L() {
    dt(g);
  }
  function x() {
    var F = Date.now();
    if (h) {
      if (F - y < pt)
        return;
      S = !0;
    } else
      h = !0, S = !1, setTimeout(L, d);
    y = F;
  }
  return x;
}
var ht = 20, yt = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], gt = typeof MutationObserver < "u", bt = (
  /** @class */
  (function() {
    function a() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = vt(this.refresh.bind(this), ht);
    }
    return a.prototype.addObserver = function(d) {
      ~this.observers_.indexOf(d) || this.observers_.push(d), this.connected_ || this.connect_();
    }, a.prototype.removeObserver = function(d) {
      var h = this.observers_, S = h.indexOf(d);
      ~S && h.splice(S, 1), !h.length && this.connected_ && this.disconnect_();
    }, a.prototype.refresh = function() {
      var d = this.updateObservers_();
      d && this.refresh();
    }, a.prototype.updateObservers_ = function() {
      var d = this.observers_.filter(function(h) {
        return h.gatherActive(), h.hasActive();
      });
      return d.forEach(function(h) {
        return h.broadcastActive();
      }), d.length > 0;
    }, a.prototype.connect_ = function() {
      !xe || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), gt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, a.prototype.disconnect_ = function() {
      !xe || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, a.prototype.onTransitionEnd_ = function(d) {
      var h = d.propertyName, S = h === void 0 ? "" : h, y = yt.some(function(g) {
        return !!~S.indexOf(g);
      });
      y && this.refresh();
    }, a.getInstance = function() {
      return this.instance_ || (this.instance_ = new a()), this.instance_;
    }, a.instance_ = null, a;
  })()
), Je = (function(a, d) {
  for (var h = 0, S = Object.keys(d); h < S.length; h++) {
    var y = S[h];
    Object.defineProperty(a, y, {
      value: d[y],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return a;
}), ce = (function(a) {
  var d = a && a.ownerDocument && a.ownerDocument.defaultView;
  return d || me;
}), Qe = Oe(0, 0, 0, 0);
function Se(a) {
  return parseFloat(a) || 0;
}
function Be(a) {
  for (var d = [], h = 1; h < arguments.length; h++)
    d[h - 1] = arguments[h];
  return d.reduce(function(S, y) {
    var g = a["border-" + y + "-width"];
    return S + Se(g);
  }, 0);
}
function mt(a) {
  for (var d = ["top", "right", "bottom", "left"], h = {}, S = 0, y = d; S < y.length; S++) {
    var g = y[S], L = a["padding-" + g];
    h[g] = Se(L);
  }
  return h;
}
function St(a) {
  var d = a.getBBox();
  return Oe(0, 0, d.width, d.height);
}
function wt(a) {
  var d = a.clientWidth, h = a.clientHeight;
  if (!d && !h)
    return Qe;
  var S = ce(a).getComputedStyle(a), y = mt(S), g = y.left + y.right, L = y.top + y.bottom, x = Se(S.width), F = Se(S.height);
  if (S.boxSizing === "border-box" && (Math.round(x + g) !== d && (x -= Be(S, "left", "right") + g), Math.round(F + L) !== h && (F -= Be(S, "top", "bottom") + L)), !_t(a)) {
    var A = Math.round(x + g) - d, W = Math.round(F + L) - h;
    Math.abs(A) !== 1 && (x -= A), Math.abs(W) !== 1 && (F -= W);
  }
  return Oe(y.left, y.top, x, F);
}
var Ot = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(a) {
    return a instanceof ce(a).SVGGraphicsElement;
  } : function(a) {
    return a instanceof ce(a).SVGElement && typeof a.getBBox == "function";
  };
})();
function _t(a) {
  return a === ce(a).document.documentElement;
}
function Pt(a) {
  return xe ? Ot(a) ? St(a) : wt(a) : Qe;
}
function kt(a) {
  var d = a.x, h = a.y, S = a.width, y = a.height, g = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, L = Object.create(g.prototype);
  return Je(L, {
    x: d,
    y: h,
    width: S,
    height: y,
    top: h,
    right: d + S,
    bottom: y + h,
    left: d
  }), L;
}
function Oe(a, d, h, S) {
  return { x: a, y: d, width: h, height: S };
}
var Tt = (
  /** @class */
  (function() {
    function a(d) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Oe(0, 0, 0, 0), this.target = d;
    }
    return a.prototype.isActive = function() {
      var d = Pt(this.target);
      return this.contentRect_ = d, d.width !== this.broadcastWidth || d.height !== this.broadcastHeight;
    }, a.prototype.broadcastRect = function() {
      var d = this.contentRect_;
      return this.broadcastWidth = d.width, this.broadcastHeight = d.height, d;
    }, a;
  })()
), Ct = (
  /** @class */
  /* @__PURE__ */ (function() {
    function a(d, h) {
      var S = kt(h);
      Je(this, { target: d, contentRect: S });
    }
    return a;
  })()
), jt = (
  /** @class */
  (function() {
    function a(d, h, S) {
      if (this.activeObservations_ = [], this.observations_ = new $e(), typeof d != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = d, this.controller_ = h, this.callbackCtx_ = S;
    }
    return a.prototype.observe = function(d) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(d instanceof ce(d).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var h = this.observations_;
        h.has(d) || (h.set(d, new Tt(d)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, a.prototype.unobserve = function(d) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(d instanceof ce(d).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var h = this.observations_;
        h.has(d) && (h.delete(d), h.size || this.controller_.removeObserver(this));
      }
    }, a.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, a.prototype.gatherActive = function() {
      var d = this;
      this.clearActive(), this.observations_.forEach(function(h) {
        h.isActive() && d.activeObservations_.push(h);
      });
    }, a.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var d = this.callbackCtx_, h = this.activeObservations_.map(function(S) {
          return new Ct(S.target, S.broadcastRect());
        });
        this.callback_.call(d, h, d), this.clearActive();
      }
    }, a.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, a.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, a;
  })()
), Ze = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new $e(), et = (
  /** @class */
  /* @__PURE__ */ (function() {
    function a(d) {
      if (!(this instanceof a))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var h = bt.getInstance(), S = new jt(d, h, this);
      Ze.set(this, S);
    }
    return a;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(a) {
  et.prototype[a] = function() {
    var d;
    return (d = Ze.get(this))[a].apply(d, arguments);
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
  var a = A(ue), d = A(lt()), h = A(st()), S = A(we()), y = ye(), g = ut(), L = ct(), x = ft(), F = A(xt);
  function A(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function W(u) {
    "@babel/helpers - typeof";
    return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
      return typeof f;
    } : function(f) {
      return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
    }, W(u);
  }
  function Y() {
    return Y = Object.assign ? Object.assign.bind() : function(u) {
      for (var f = 1; f < arguments.length; f++) {
        var w = arguments[f];
        for (var _ in w)
          ({}).hasOwnProperty.call(w, _) && (u[_] = w[_]);
      }
      return u;
    }, Y.apply(null, arguments);
  }
  function $(u, f) {
    if (u == null) return {};
    var w, _, t = te(u, f);
    if (Object.getOwnPropertySymbols) {
      var B = Object.getOwnPropertySymbols(u);
      for (_ = 0; _ < B.length; _++)
        w = B[_], f.includes(w) || {}.propertyIsEnumerable.call(u, w) && (t[w] = u[w]);
    }
    return t;
  }
  function te(u, f) {
    if (u == null) return {};
    var w = {};
    for (var _ in u)
      if ({}.hasOwnProperty.call(u, _)) {
        if (f.includes(_)) continue;
        w[_] = u[_];
      }
    return w;
  }
  function J(u, f) {
    var w = Object.keys(u);
    if (Object.getOwnPropertySymbols) {
      var _ = Object.getOwnPropertySymbols(u);
      f && (_ = _.filter(function(t) {
        return Object.getOwnPropertyDescriptor(u, t).enumerable;
      })), w.push.apply(w, _);
    }
    return w;
  }
  function E(u) {
    for (var f = 1; f < arguments.length; f++) {
      var w = arguments[f] != null ? arguments[f] : {};
      f % 2 ? J(Object(w), !0).forEach(function(_) {
        r(u, _, w[_]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(w)) : J(Object(w)).forEach(function(_) {
        Object.defineProperty(u, _, Object.getOwnPropertyDescriptor(w, _));
      });
    }
    return u;
  }
  function Q(u, f) {
    if (!(u instanceof f)) throw new TypeError("Cannot call a class as a function");
  }
  function M(u, f) {
    for (var w = 0; w < f.length; w++) {
      var _ = f[w];
      _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(u, v(_.key), _);
    }
  }
  function U(u, f, w) {
    return f && M(u.prototype, f), Object.defineProperty(u, "prototype", { writable: !1 }), u;
  }
  function D(u, f) {
    if (typeof f != "function" && f !== null) throw new TypeError("Super expression must either be null or a function");
    u.prototype = Object.create(f && f.prototype, { constructor: { value: u, writable: !0, configurable: !0 } }), Object.defineProperty(u, "prototype", { writable: !1 }), f && V(u, f);
  }
  function V(u, f) {
    return V = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(w, _) {
      return w.__proto__ = _, w;
    }, V(u, f);
  }
  function o(u) {
    var f = k();
    return function() {
      var w, _ = l(u);
      if (f) {
        var t = l(this).constructor;
        w = Reflect.construct(_, arguments, t);
      } else w = _.apply(this, arguments);
      return s(this, w);
    };
  }
  function s(u, f) {
    if (f && (W(f) == "object" || typeof f == "function")) return f;
    if (f !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
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
    return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(f) {
      return f.__proto__ || Object.getPrototypeOf(f);
    }, l(u);
  }
  function r(u, f, w) {
    return (f = v(f)) in u ? Object.defineProperty(u, f, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : u[f] = w, u;
  }
  function v(u) {
    var f = b(u, "string");
    return W(f) == "symbol" ? f : f + "";
  }
  function b(u, f) {
    if (W(u) != "object" || !u) return u;
    var w = u[Symbol.toPrimitive];
    if (w !== void 0) {
      var _ = w.call(u, f);
      if (W(_) != "object") return _;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (f === "string" ? String : Number)(u);
  }
  return pe.InnerSlider = /* @__PURE__ */ (function(u) {
    D(w, u);
    var f = o(w);
    function w(_) {
      var t;
      Q(this, w), t = f.call(this, _), r(c(t), "listRefHandler", function(i) {
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
          var i = (0, y.getOnDemandLazySlides)(E(E({}, t.props), t.state));
          i.length > 0 && (t.setState(function(n) {
            return {
              lazyLoadedList: n.lazyLoadedList.concat(i)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(i));
        }
        var e = E({
          listRef: t.list,
          trackRef: t.track
        }, t.props);
        t.updateState(e, !0, function() {
          t.adaptHeight(), t.props.autoplay && t.autoPlay("update");
        }), t.props.lazyLoad === "progressive" && (t.lazyLoadTimer = setInterval(t.progressiveLazyLoad, 1e3)), t.ro = new F.default(function() {
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
        }, t.props), t.state), p = t.didPropsChange(i);
        p && t.updateState(n, p, function() {
          t.state.currentSlide >= a.default.Children.count(t.props.children) && t.changeSlide({
            message: "index",
            index: a.default.Children.count(t.props.children) - t.props.slidesToShow,
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
          var n = E(E({
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
        i = E(E(E({}, i), p), {}, {
          slideIndex: p.currentSlide
        });
        var O = (0, y.getTrackLeft)(i);
        i = E(E({}, i), {}, {
          left: O
        });
        var m = (0, y.getTrackCSS)(i);
        (e || a.default.Children.count(t.props.children) !== a.default.Children.count(i.children)) && (p.trackStyle = m), t.setState(p, n);
      }), r(c(t), "ssrInit", function() {
        if (t.props.variableWidth) {
          var i = 0, e = 0, n = [], p = (0, y.getPreClones)(E(E(E({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          })), O = (0, y.getPostClones)(E(E(E({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          }));
          t.props.children.forEach(function(ee) {
            n.push(ee.props.style.width), i += ee.props.style.width;
          });
          for (var m = 0; m < p; m++)
            e += n[n.length - 1 - m], i += n[n.length - 1 - m];
          for (var T = 0; T < O; T++)
            i += n[T];
          for (var P = 0; P < t.state.currentSlide; P++)
            e += n[P];
          var C = {
            width: i + "px",
            left: -e + "px"
          };
          if (t.props.centerMode) {
            var N = "".concat(n[t.state.currentSlide], "px");
            C.left = "calc(".concat(C.left, " + (100% - ").concat(N, ") / 2 ) ");
          }
          return {
            trackStyle: C
          };
        }
        var H = a.default.Children.count(t.props.children), I = E(E(E({}, t.props), t.state), {}, {
          slideCount: H
        }), K = (0, y.getPreClones)(I) + (0, y.getPostClones)(I) + H, X = 100 / t.props.slidesToShow * K, q = 100 / K, z = -q * ((0, y.getPreClones)(I) + t.state.currentSlide) * X / 100;
        t.props.centerMode && (z += (100 - q * X / 100) / 2);
        var G = {
          width: X + "%",
          left: z + "%"
        };
        return {
          slideWidth: q + "%",
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
        for (var i = [], e = E(E({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, y.getPostClones)(e); n++)
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
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = t.props, p = n.asNavFor, O = n.beforeChange, m = n.onLazyLoad, T = n.speed, P = n.afterChange, C = t.state.currentSlide, N = (0, y.slideHandler)(E(E(E({
          index: i
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e
        })), H = N.state, I = N.nextState;
        if (H) {
          O && O(C, H.currentSlide);
          var K = H.lazyLoadedList.filter(function(X) {
            return t.state.lazyLoadedList.indexOf(X) < 0;
          });
          m && K.length > 0 && m(K), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), P && P(C), delete t.animationEndCallback), t.setState(H, function() {
            p && t.asNavForIndex !== i && (t.asNavForIndex = i, p.innerSlider.slideHandler(i)), I && (t.animationEndCallback = setTimeout(function() {
              var X = I.animating, q = $(I, ["animating"]);
              t.setState(q, function() {
                t.callbackTimers.push(setTimeout(function() {
                  return t.setState({
                    animating: X
                  });
                }, 10)), P && P(H.currentSlide), delete t.animationEndCallback;
              });
            }, T));
          });
        }
      }), r(c(t), "changeSlide", function(i) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = E(E({}, t.props), t.state), p = (0, y.changeSlide)(n, i);
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
        var e = (0, y.swipeMove)(i, E(E(E({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(c(t), "swipeEnd", function(i) {
        var e = (0, y.swipeEnd)(i, E(E(E({}, t.props), t.state), {}, {
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
        else if ((0, y.canGoNext)(E(E({}, t.props), t.state)))
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
        }), e = E(E({}, t.props), t.state), n = (0, y.extractObject)(e, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), p = t.props.pauseOnHover;
        n = E(E({}, n), {}, {
          onMouseEnter: p ? t.onTrackOver : null,
          onMouseLeave: p ? t.onTrackLeave : null,
          onMouseOver: p ? t.onTrackOver : null,
          focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
        });
        var O;
        if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
          var m = (0, y.extractObject)(e, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), T = t.props.pauseOnDotsHover;
          m = E(E({}, m), {}, {
            clickHandler: t.changeSlide,
            onMouseEnter: T ? t.onDotsLeave : null,
            onMouseOver: T ? t.onDotsOver : null,
            onMouseLeave: T ? t.onDotsLeave : null
          }), O = /* @__PURE__ */ a.default.createElement(L.Dots, m);
        }
        var P, C, N = (0, y.extractObject)(e, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        N.clickHandler = t.changeSlide, t.props.arrows && (P = /* @__PURE__ */ a.default.createElement(x.PrevArrow, N), C = /* @__PURE__ */ a.default.createElement(x.NextArrow, N));
        var H = null;
        t.props.vertical && (H = {
          height: t.state.listHeight
        });
        var I = null;
        t.props.vertical === !1 ? t.props.centerMode === !0 && (I = {
          padding: "0px " + t.props.centerPadding
        }) : t.props.centerMode === !0 && (I = {
          padding: t.props.centerPadding + " 0px"
        });
        var K = E(E({}, H), I), X = t.props.touchMove, q = {
          className: "slick-list",
          style: K,
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
        }, z = {
          className: i,
          dir: "ltr",
          style: t.props.style
        };
        return t.props.unslick && (q = {
          className: "slick-list"
        }, z = {
          className: i,
          style: t.props.style
        }), /* @__PURE__ */ a.default.createElement("div", z, t.props.unslick ? "" : P, /* @__PURE__ */ a.default.createElement("div", Y({
          ref: t.listRefHandler
        }, q), /* @__PURE__ */ a.default.createElement(g.Track, Y({
          ref: t.trackRefHandler
        }, n), t.props.children)), t.props.unslick ? "" : C, t.props.unslick ? "" : O);
      }), t.list = null, t.track = null, t.state = E(E({}, d.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: a.default.Children.count(t.props.children)
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      var B = t.ssrInit();
      return t.state = E(E({}, t.state), B), t;
    }
    return U(w, [{
      key: "didPropsChange",
      value: function(t) {
        for (var B = !1, i = 0, e = Object.keys(this.props); i < e.length; i++) {
          var n = e[i];
          if (!t.hasOwnProperty(n)) {
            B = !0;
            break;
          }
          if (!(W(t[n]) === "object" || typeof t[n] == "function" || isNaN(t[n])) && t[n] !== this.props[n]) {
            B = !0;
            break;
          }
        }
        return B || a.default.Children.count(this.props.children) !== a.default.Children.count(t.children);
      }
    }]), w;
  })(a.default.Component), pe;
}
var Ee, Xe;
function Rt() {
  if (Xe) return Ee;
  Xe = 1;
  var a = function(d) {
    return d.replace(/[A-Z]/g, function(h) {
      return "-" + h.toLowerCase();
    }).toLowerCase();
  };
  return Ee = a, Ee;
}
var Le, Ke;
function zt() {
  if (Ke) return Le;
  Ke = 1;
  var a = Rt(), d = function(y) {
    var g = /[height|width]$/;
    return g.test(y);
  }, h = function(y) {
    var g = "", L = Object.keys(y);
    return L.forEach(function(x, F) {
      var A = y[x];
      x = a(x), d(x) && typeof A == "number" && (A = A + "px"), A === !0 ? g += x : A === !1 ? g += "not " + x : g += "(" + x + ": " + A + ")", F < L.length - 1 && (g += " and ");
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
  return Ye || (Ye = 1, (function(a) {
    var d = { NODE_ENV: "production" };
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.default = void 0;
    var h = x(ue), S = Mt(), y = x(zt()), g = x(Ve()), L = ye();
    function x(l) {
      return l && l.__esModule ? l : { default: l };
    }
    function F(l) {
      "@babel/helpers - typeof";
      return F = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
        return typeof r;
      } : function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, F(l);
    }
    function A() {
      return A = Object.assign ? Object.assign.bind() : function(l) {
        for (var r = 1; r < arguments.length; r++) {
          var v = arguments[r];
          for (var b in v)
            ({}).hasOwnProperty.call(v, b) && (l[b] = v[b]);
        }
        return l;
      }, A.apply(null, arguments);
    }
    function W(l, r) {
      var v = Object.keys(l);
      if (Object.getOwnPropertySymbols) {
        var b = Object.getOwnPropertySymbols(l);
        r && (b = b.filter(function(u) {
          return Object.getOwnPropertyDescriptor(l, u).enumerable;
        })), v.push.apply(v, b);
      }
      return v;
    }
    function Y(l) {
      for (var r = 1; r < arguments.length; r++) {
        var v = arguments[r] != null ? arguments[r] : {};
        r % 2 ? W(Object(v), !0).forEach(function(b) {
          s(l, b, v[b]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(v)) : W(Object(v)).forEach(function(b) {
          Object.defineProperty(l, b, Object.getOwnPropertyDescriptor(v, b));
        });
      }
      return l;
    }
    function $(l, r) {
      if (!(l instanceof r)) throw new TypeError("Cannot call a class as a function");
    }
    function te(l, r) {
      for (var v = 0; v < r.length; v++) {
        var b = r[v];
        b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(l, c(b.key), b);
      }
    }
    function J(l, r, v) {
      return r && te(l.prototype, r), Object.defineProperty(l, "prototype", { writable: !1 }), l;
    }
    function E(l, r) {
      if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
      l.prototype = Object.create(r && r.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), Object.defineProperty(l, "prototype", { writable: !1 }), r && Q(l, r);
    }
    function Q(l, r) {
      return Q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(v, b) {
        return v.__proto__ = b, v;
      }, Q(l, r);
    }
    function M(l) {
      var r = V();
      return function() {
        var v, b = o(l);
        if (r) {
          var u = o(this).constructor;
          v = Reflect.construct(b, arguments, u);
        } else v = b.apply(this, arguments);
        return U(this, v);
      };
    }
    function U(l, r) {
      if (r && (F(r) == "object" || typeof r == "function")) return r;
      if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return D(l);
    }
    function D(l) {
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
    function o(l) {
      return o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
      }, o(l);
    }
    function s(l, r, v) {
      return (r = c(r)) in l ? Object.defineProperty(l, r, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : l[r] = v, l;
    }
    function c(l) {
      var r = k(l, "string");
      return F(r) == "symbol" ? r : r + "";
    }
    function k(l, r) {
      if (F(l) != "object" || !l) return l;
      var v = l[Symbol.toPrimitive];
      if (v !== void 0) {
        var b = v.call(l, r);
        if (F(b) != "object") return b;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(l);
    }
    a.default = /* @__PURE__ */ (function(l) {
      E(v, l);
      var r = M(v);
      function v(b) {
        var u;
        return $(this, v), u = r.call(this, b), s(D(u), "innerSliderRefHandler", function(f) {
          return u.innerSlider = f;
        }), s(D(u), "slickPrev", function() {
          return u.innerSlider.slickPrev();
        }), s(D(u), "slickNext", function() {
          return u.innerSlider.slickNext();
        }), s(D(u), "slickGoTo", function(f) {
          var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return u.innerSlider.slickGoTo(f, w);
        }), s(D(u), "slickPause", function() {
          return u.innerSlider.pause("paused");
        }), s(D(u), "slickPlay", function() {
          return u.innerSlider.autoPlay("play");
        }), u.state = {
          breakpoint: null
        }, u._responsiveMediaHandlers = [], u;
      }
      return J(v, [{
        key: "media",
        value: function(u, f) {
          var w = window.matchMedia(u), _ = function(B) {
            var i = B.matches;
            i && f();
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
            var f = this.props.responsive.map(function(_) {
              return _.breakpoint;
            });
            f.sort(function(_, t) {
              return _ - t;
            }), f.forEach(function(_, t) {
              var B;
              t === 0 ? B = (0, y.default)({
                minWidth: 0,
                maxWidth: _
              }) : B = (0, y.default)({
                minWidth: f[t - 1] + 1,
                maxWidth: _
              }), (0, L.canUseDOM)() && u.media(B, function() {
                u.setState({
                  breakpoint: _
                });
              });
            });
            var w = (0, y.default)({
              minWidth: f.slice(-1)[0]
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
          var u = this, f, w;
          this.state.breakpoint ? (w = this.props.responsive.filter(function(T) {
            return T.breakpoint === u.state.breakpoint;
          }), f = w[0].settings === "unslick" ? "unslick" : Y(Y(Y({}, g.default), this.props), w[0].settings)) : f = Y(Y({}, g.default), this.props), f.centerMode && (f.slidesToScroll > 1 && d.NODE_ENV, f.slidesToScroll = 1), f.fade && (f.slidesToShow > 1 && d.NODE_ENV, f.slidesToScroll > 1 && d.NODE_ENV, f.slidesToShow = 1, f.slidesToScroll = 1);
          var _ = h.default.Children.toArray(this.props.children);
          _ = _.filter(function(T) {
            return typeof T == "string" ? !!T.trim() : !!T;
          }), f.variableWidth && (f.rows > 1 || f.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), f.variableWidth = !1);
          for (var t = [], B = null, i = 0; i < _.length; i += f.rows * f.slidesPerRow) {
            for (var e = [], n = i; n < i + f.rows * f.slidesPerRow; n += f.slidesPerRow) {
              for (var p = [], O = n; O < n + f.slidesPerRow && (f.variableWidth && _[O].props.style && (B = _[O].props.style.width), !(O >= _.length)); O += 1)
                p.push(/* @__PURE__ */ h.default.cloneElement(_[O], {
                  key: 100 * i + 10 * n + O,
                  tabIndex: -1,
                  style: {
                    width: "".concat(100 / f.slidesPerRow, "%"),
                    display: "inline-block"
                  }
                }));
              e.push(/* @__PURE__ */ h.default.createElement("div", {
                key: 10 * i + n
              }, p));
            }
            f.variableWidth ? t.push(/* @__PURE__ */ h.default.createElement("div", {
              key: i,
              style: {
                width: B
              }
            }, e)) : t.push(/* @__PURE__ */ h.default.createElement("div", {
              key: i
            }, e));
          }
          if (f === "unslick") {
            var m = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ h.default.createElement("div", {
              className: m
            }, _);
          } else t.length <= f.slidesToShow && (f.unslick = !0);
          return /* @__PURE__ */ h.default.createElement(S.InnerSlider, A({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, (0, L.filterSettings)(f)), t);
        }
      }]), v;
    })(h.default.Component);
  })(Pe)), Pe;
}
var Ue;
function Nt() {
  return Ue || (Ue = 1, (function(a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.default = void 0;
    var d = h(Dt());
    function h(S) {
      return S && S.__esModule ? S : { default: S };
    }
    a.default = d.default;
  })(_e)), _e;
}
var Ht = Nt();
const It = /* @__PURE__ */ ot(Ht), qt = ({
  logos: a = [],
  // Array of { src, alt, href }
  carousel: d = !1,
  autoplay: h = !1,
  autoplaySpeed: S = 3e3,
  carouselLabel: y = "Logo carousel",
  className: g = "",
  ...L
}) => {
  const [x, F] = ze(0), [A, W] = ze(1), Y = nt(null), $ = d || h, te = "w-full flex flex-wrap justify-center gap-logos-spacing-x", J = "flex items-center justify-center basis-[160px] md:basis-[210px] xl:basis-[135px]", E = "flex items-center justify-center px-[calc(var(--spacing-logos-spacing-x)/2)]";
  it(() => {
    if (!$) return;
    const M = () => {
      const D = Y.current;
      if (!D) return;
      D.querySelectorAll(".slick-slide").forEach((o) => {
        o.getAttribute("aria-hidden") === "true" ? o.setAttribute("inert", "") : o.removeAttribute("inert");
      });
      const V = D.querySelectorAll('.slick-slide[aria-hidden="false"]:not(.slick-cloned)');
      W(Math.max(V.length, 1));
    }, U = window.requestAnimationFrame(M);
    return () => window.cancelAnimationFrame(U);
  }, [$, x, a.length]);
  const Q = {
    infinite: !0,
    arrows: !1,
    dots: !h,
    slidesToShow: 6,
    slidesToScroll: 3,
    centerPadding: "0",
    autoplay: h,
    autoplaySpeed: Number(S) || 3e3,
    pauseOnHover: !0,
    pauseOnFocus: !0,
    afterChange: F,
    customPaging: (M) => /* @__PURE__ */ oe(
      "button",
      {
        type: "button",
        "aria-label": `Go to carousel page ${M + 1}`
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
      ref: $ ? Y : null,
      className: `py-logos-padding-y ${g}`,
      ...$ ? {
        role: "region",
        "aria-roledescription": "carousel",
        "aria-label": y
      } : {},
      ...L,
      children: $ ? /* @__PURE__ */ Re(rt, { children: [
        /* @__PURE__ */ Re("div", { "aria-live": "polite", "aria-atomic": "true", className: "sr-only", children: [
          "Showing logos ",
          x + 1,
          " to ",
          Math.min(x + A, a.length),
          " of ",
          a.length
        ] }),
        /* @__PURE__ */ oe(It, { ...Q, className: "logos-carousel text-center", children: a.map((M, U) => {
          const D = /* @__PURE__ */ oe(
            "img",
            {
              src: M.src,
              alt: M.alt || "Logo",
              className: "w-full"
            }
          );
          return M.href ? /* @__PURE__ */ oe(
            "a",
            {
              href: M.href,
              className: E,
              ...M.attributes ?? {},
              children: D
            },
            U
          ) : /* @__PURE__ */ oe(
            "div",
            {
              className: E,
              ...M.attributes ?? {},
              children: D
            },
            U
          );
        }) })
      ] }) : /* @__PURE__ */ oe("div", { className: te, children: a.map((M, U) => {
        const D = /* @__PURE__ */ oe(
          "img",
          {
            src: M.src,
            alt: M.alt || "Logo",
            className: "w-full"
          }
        );
        return M.href ? /* @__PURE__ */ oe(
          "a",
          {
            href: M.href,
            className: J,
            ...M.attributes ?? {},
            children: D
          },
          U
        ) : /* @__PURE__ */ oe(
          "div",
          {
            className: J,
            ...M.attributes ?? {},
            children: D
          },
          U
        );
      }) })
    }
  );
};
export {
  qt as default
};
