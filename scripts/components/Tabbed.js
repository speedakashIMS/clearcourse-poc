import { jsx as A, jsxs as le } from "react/jsx-runtime";
import ce, { useState as ke, useRef as rt, useEffect as nt } from "react";
var me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function it(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function ot(i) {
  if (Object.prototype.hasOwnProperty.call(i, "__esModule")) return i;
  var f = i.default;
  if (typeof f == "function") {
    var v = function m() {
      return this instanceof m ? Reflect.construct(f, arguments, this.constructor) : f.apply(this, arguments);
    };
    v.prototype = f.prototype;
  } else v = {};
  return Object.defineProperty(v, "__esModule", { value: !0 }), Object.keys(i).forEach(function(m) {
    var h = Object.getOwnPropertyDescriptor(i, m);
    Object.defineProperty(v, m, h.get ? h : {
      enumerable: !0,
      get: function() {
        return i[m];
      }
    });
  }), v;
}
var Pe = {}, Te = {}, ve = {}, Ce = {}, De;
function at() {
  return De || (De = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
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
    i.default = f;
  })(Ce)), Ce;
}
var je, Ne;
function lt() {
  if (Ne) return je;
  Ne = 1;
  var i = "Expected a function", f = NaN, v = "[object Symbol]", m = /^\s+|\s+$/g, h = /^[-+]0x[0-9a-f]+$/i, g = /^0b[01]+$/i, x = /^0o[0-7]+$/i, L = parseInt, F = typeof me == "object" && me && me.Object === Object && me, N = typeof self == "object" && self && self.Object === Object && self, B = F || N || Function("return this")(), Q = Object.prototype, R = Q.toString, Y = Math.max, M = Math.min, w = function() {
    return B.Date.now();
  };
  function Z(a, s, c) {
    var T, l, r, y, b, u, d = 0, O = !1, k = !1, t = !0;
    if (typeof a != "function")
      throw new TypeError(i);
    s = W(s) || 0, X(c) && (O = !!c.leading, k = "maxWait" in c, r = k ? Y(W(c.maxWait) || 0, s) : r, t = "trailing" in c ? !!c.trailing : t);
    function K(j) {
      var I = T, H = l;
      return T = l = void 0, d = j, y = a.apply(H, I), y;
    }
    function o(j) {
      return d = j, b = setTimeout(p, s), O ? K(j) : y;
    }
    function e(j) {
      var I = j - u, H = j - d, q = s - I;
      return k ? M(q, r - H) : q;
    }
    function n(j) {
      var I = j - u, H = j - d;
      return u === void 0 || I >= s || I < 0 || k && H >= r;
    }
    function p() {
      var j = w();
      if (n(j))
        return _(j);
      b = setTimeout(p, e(j));
    }
    function _(j) {
      return b = void 0, t && T ? K(j) : (T = l = void 0, y);
    }
    function S() {
      b !== void 0 && clearTimeout(b), d = 0, T = u = l = b = void 0;
    }
    function C() {
      return b === void 0 ? y : _(w());
    }
    function P() {
      var j = w(), I = n(j);
      if (T = arguments, l = this, u = j, I) {
        if (b === void 0)
          return o(u);
        if (k)
          return b = setTimeout(p, s), K(u);
      }
      return b === void 0 && (b = setTimeout(p, s)), y;
    }
    return P.cancel = S, P.flush = C, P;
  }
  function X(a) {
    var s = typeof a;
    return !!a && (s == "object" || s == "function");
  }
  function te(a) {
    return !!a && typeof a == "object";
  }
  function G(a) {
    return typeof a == "symbol" || te(a) && R.call(a) == v;
  }
  function W(a) {
    if (typeof a == "number")
      return a;
    if (G(a))
      return f;
    if (X(a)) {
      var s = typeof a.valueOf == "function" ? a.valueOf() : a;
      a = X(s) ? s + "" : s;
    }
    if (typeof a != "string")
      return a === 0 ? a : +a;
    a = a.replace(m, "");
    var c = g.test(a);
    return c || x.test(a) ? L(a.slice(2), c ? 2 : 8) : h.test(a) ? f : +a;
  }
  return je = Z, je;
}
var Ee = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ie;
function Oe() {
  return Ie || (Ie = 1, (function(i) {
    (function() {
      var f = {}.hasOwnProperty;
      function v() {
        for (var g = "", x = 0; x < arguments.length; x++) {
          var L = arguments[x];
          L && (g = h(g, m(L)));
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
        var x = "";
        for (var L in g)
          f.call(g, L) && g[L] && (x = h(x, L));
        return x;
      }
      function h(g, x) {
        return x ? g ? g + " " + x : g + x : g;
      }
      i.exports ? (v.default = v, i.exports = v) : window.classNames = v;
    })();
  })(Ee)), Ee.exports;
}
var E = {}, xe = {}, He;
function Ue() {
  return He || (He = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var f = v(ce);
    function v(h) {
      return h && h.__esModule ? h : { default: h };
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
    i.default = m;
  })(xe)), xe;
}
var Ae;
function ge() {
  if (Ae) return E;
  Ae = 1, Object.defineProperty(E, "__esModule", {
    value: !0
  }), E.checkSpecKeys = E.checkNavigable = E.changeSlide = E.canUseDOM = E.canGoNext = void 0, E.clamp = N, E.extractObject = void 0, E.filterSettings = K, E.validSettings = E.swipeStart = E.swipeMove = E.swipeEnd = E.slidesOnRight = E.slidesOnLeft = E.slideHandler = E.siblingDirection = E.safePreventDefault = E.lazyStartIndex = E.lazySlidesOnRight = E.lazySlidesOnLeft = E.lazyEndIndex = E.keyHandler = E.initializedState = E.getWidth = E.getTrackLeft = E.getTrackCSS = E.getTrackAnimateCSS = E.getTotalSlides = E.getSwipeDirection = E.getSlideCount = E.getRequiredLazySlides = E.getPreClones = E.getPostClones = E.getOnDemandLazySlides = E.getNavigableIndexes = E.getHeight = void 0;
  var i = v(ce), f = v(Ue());
  function v(o) {
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
  function h(o, e) {
    var n = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(o);
      e && (p = p.filter(function(_) {
        return Object.getOwnPropertyDescriptor(o, _).enumerable;
      })), n.push.apply(n, p);
    }
    return n;
  }
  function g(o) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2 ? h(Object(n), !0).forEach(function(p) {
        x(o, p, n[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function(p) {
        Object.defineProperty(o, p, Object.getOwnPropertyDescriptor(n, p));
      });
    }
    return o;
  }
  function x(o, e, n) {
    return (e = L(e)) in o ? Object.defineProperty(o, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = n, o;
  }
  function L(o) {
    var e = F(o, "string");
    return m(e) == "symbol" ? e : e + "";
  }
  function F(o, e) {
    if (m(o) != "object" || !o) return o;
    var n = o[Symbol.toPrimitive];
    if (n !== void 0) {
      var p = n.call(o, e);
      if (m(p) != "object") return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(o);
  }
  function N(o, e, n) {
    return Math.max(e, Math.min(o, n));
  }
  var B = E.safePreventDefault = function(e) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(e._reactName) || e.preventDefault();
  }, Q = E.getOnDemandLazySlides = function(e) {
    for (var n = [], p = R(e), _ = Y(e), S = p; S < _; S++)
      e.lazyLoadedList.indexOf(S) < 0 && n.push(S);
    return n;
  };
  E.getRequiredLazySlides = function(e) {
    for (var n = [], p = R(e), _ = Y(e), S = p; S < _; S++)
      n.push(S);
    return n;
  };
  var R = E.lazyStartIndex = function(e) {
    return e.currentSlide - M(e);
  }, Y = E.lazyEndIndex = function(e) {
    return e.currentSlide + w(e);
  }, M = E.lazySlidesOnLeft = function(e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }, w = E.lazySlidesOnRight = function(e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }, Z = E.getWidth = function(e) {
    return e && e.offsetWidth || 0;
  }, X = E.getHeight = function(e) {
    return e && e.offsetHeight || 0;
  }, te = E.getSwipeDirection = function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, p, _, S, C;
    return p = e.startX - e.curX, _ = e.startY - e.curY, S = Math.atan2(_, p), C = Math.round(S * 180 / Math.PI), C < 0 && (C = 360 - Math.abs(C)), C <= 45 && C >= 0 || C <= 360 && C >= 315 ? "left" : C >= 135 && C <= 225 ? "right" : n === !0 ? C >= 35 && C <= 135 ? "up" : "down" : "vertical";
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
    var n = i.default.Children.count(e.children), p = e.listRef, _ = Math.ceil(Z(p)), S = e.trackRef && e.trackRef.node, C = Math.ceil(Z(S)), P;
    if (e.vertical)
      P = _;
    else {
      var j = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding == "string" && e.centerPadding.slice(-1) === "%" && (j *= _ / 100), P = Math.ceil((_ - j) / e.slidesToShow);
    }
    var I = p && X(p.querySelector('[data-index="0"]')), H = I * e.slidesToShow, q = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && (q = n - 1 - e.initialSlide);
    var J = e.lazyLoadedList || [], V = Q(g(g({}, e), {}, {
      currentSlide: q,
      lazyLoadedList: J
    }));
    J = J.concat(V);
    var $ = {
      slideCount: n,
      slideWidth: P,
      listWidth: _,
      trackWidth: C,
      currentSlide: q,
      slideHeight: I,
      listHeight: H,
      lazyLoadedList: J
    };
    return e.autoplaying === null && e.autoplay && ($.autoplaying = "playing"), $;
  }, E.slideHandler = function(e) {
    var n = e.waitForAnimate, p = e.animating, _ = e.fade, S = e.infinite, C = e.index, P = e.slideCount, j = e.lazyLoad, I = e.currentSlide, H = e.centerMode, q = e.slidesToScroll, J = e.slidesToShow, V = e.useCSS, $ = e.lazyLoadedList;
    if (n && p) return {};
    var D = C, U, re, z, ee = {}, ne = {}, ie = S ? C : N(C, 0, P - 1);
    if (_) {
      if (!S && (C < 0 || C >= P)) return {};
      C < 0 ? D = C + P : C >= P && (D = C - P), j && $.indexOf(D) < 0 && ($ = $.concat(D)), ee = {
        animating: !0,
        currentSlide: D,
        lazyLoadedList: $,
        targetSlide: D
      }, ne = {
        animating: !1,
        targetSlide: D
      };
    } else
      U = D, D < 0 ? (U = D + P, S ? P % q !== 0 && (U = P - P % q) : U = 0) : !G(e) && D > I ? D = U = I : H && D >= P ? (D = S ? P : P - 1, U = S ? 0 : P - 1) : D >= P && (U = D - P, S ? P % q !== 0 && (U = 0) : U = P - J), !S && D + J >= P && (U = P - J), re = r(g(g({}, e), {}, {
        slideIndex: D
      })), z = r(g(g({}, e), {}, {
        slideIndex: U
      })), S || (re === z && (D = U), re = z), j && ($ = $.concat(Q(g(g({}, e), {}, {
        currentSlide: D
      })))), V ? (ee = {
        animating: !0,
        currentSlide: U,
        trackStyle: l(g(g({}, e), {}, {
          left: re
        })),
        lazyLoadedList: $,
        targetSlide: ie
      }, ne = {
        animating: !1,
        currentSlide: U,
        trackStyle: T(g(g({}, e), {}, {
          left: z
        })),
        swipeLeft: null,
        targetSlide: ie
      }) : ee = {
        currentSlide: U,
        trackStyle: T(g(g({}, e), {}, {
          left: z
        })),
        lazyLoadedList: $,
        targetSlide: ie
      };
    return {
      state: ee,
      nextState: ne
    };
  }, E.changeSlide = function(e, n) {
    var p, _, S, C, P, j = e.slidesToScroll, I = e.slidesToShow, H = e.slideCount, q = e.currentSlide, J = e.targetSlide, V = e.lazyLoad, $ = e.infinite;
    if (C = H % j !== 0, p = C ? 0 : (H - q) % j, n.message === "previous")
      S = p === 0 ? j : I - p, P = q - S, V && !$ && (_ = q - S, P = _ === -1 ? H - 1 : _), $ || (P = J - j);
    else if (n.message === "next")
      S = p === 0 ? j : p, P = q + S, V && !$ && (P = (q + j) % H + p), $ || (P = J + j);
    else if (n.message === "dots")
      P = n.index * n.slidesToScroll;
    else if (n.message === "children") {
      if (P = n.index, $) {
        var D = d(g(g({}, e), {}, {
          targetSlide: P
        }));
        P > n.currentSlide && D === "left" ? P = P - H : P < n.currentSlide && D === "right" && (P = P + H);
      }
    } else n.message === "index" && (P = Number(n.index));
    return P;
  }, E.keyHandler = function(e, n, p) {
    return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n ? "" : e.keyCode === 37 ? p ? "next" : "previous" : e.keyCode === 39 ? p ? "previous" : "next" : "";
  }, E.swipeStart = function(e, n, p) {
    return e.target.tagName === "IMG" && B(e), !n || !p && e.type.indexOf("mouse") !== -1 ? "" : {
      dragging: !0,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY
      }
    };
  }, E.swipeMove = function(e, n) {
    var p = n.scrolling, _ = n.animating, S = n.vertical, C = n.swipeToSlide, P = n.verticalSwiping, j = n.rtl, I = n.currentSlide, H = n.edgeFriction, q = n.edgeDragged, J = n.onEdge, V = n.swiped, $ = n.swiping, D = n.slideCount, U = n.slidesToScroll, re = n.infinite, z = n.touchObject, ee = n.swipeEvent, ne = n.listHeight, ie = n.listWidth;
    if (!p) {
      if (_) return B(e);
      S && C && P && B(e);
      var oe, se = {}, be = r(n);
      z.curX = e.touches ? e.touches[0].pageX : e.clientX, z.curY = e.touches ? e.touches[0].pageY : e.clientY, z.swipeLength = Math.round(Math.sqrt(Math.pow(z.curX - z.startX, 2)));
      var ze = Math.round(Math.sqrt(Math.pow(z.curY - z.startY, 2)));
      if (!P && !$ && ze > 10)
        return {
          scrolling: !0
        };
      P && (z.swipeLength = ze);
      var de = (j ? -1 : 1) * (z.curX > z.startX ? 1 : -1);
      P && (de = z.curY > z.startY ? 1 : -1);
      var tt = Math.ceil(D / U), ae = te(n.touchObject, P), pe = z.swipeLength;
      return re || (I === 0 && (ae === "right" || ae === "down") || I + 1 >= tt && (ae === "left" || ae === "up") || !G(n) && (ae === "left" || ae === "up")) && (pe = z.swipeLength * H, q === !1 && J && (J(ae), se.edgeDragged = !0)), !V && ee && (ee(ae), se.swiped = !0), S ? oe = be + pe * (ne / ie) * de : j ? oe = be - pe * de : oe = be + pe * de, P && (oe = be + pe * de), se = g(g({}, se), {}, {
        touchObject: z,
        swipeLeft: oe,
        trackStyle: T(g(g({}, n), {}, {
          left: oe
        }))
      }), Math.abs(z.curX - z.startX) < Math.abs(z.curY - z.startY) * 0.8 || z.swipeLength > 10 && (se.swiping = !0, B(e)), se;
    }
  }, E.swipeEnd = function(e, n) {
    var p = n.dragging, _ = n.swipe, S = n.touchObject, C = n.listWidth, P = n.touchThreshold, j = n.verticalSwiping, I = n.listHeight, H = n.swipeToSlide, q = n.scrolling, J = n.onSwipe, V = n.targetSlide, $ = n.currentSlide, D = n.infinite;
    if (!p)
      return _ && B(e), {};
    var U = j ? I / P : C / P, re = te(S, j), z = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {}
    };
    if (q || !S.swipeLength)
      return z;
    if (S.swipeLength > U) {
      B(e), J && J(re);
      var ee, ne, ie = D ? $ : V;
      switch (re) {
        case "left":
        case "up":
          ne = ie + s(n), ee = H ? a(n, ne) : ne, z.currentDirection = 0;
          break;
        case "right":
        case "down":
          ne = ie - s(n), ee = H ? a(n, ne) : ne, z.currentDirection = 1;
          break;
        default:
          ee = ie;
      }
      z.triggerSlideHandler = ee;
    } else {
      var oe = r(n);
      z.trackStyle = l(g(g({}, n), {}, {
        left: oe
      }));
    }
    return z;
  };
  var W = E.getNavigableIndexes = function(e) {
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, p = e.infinite ? e.slidesToShow * -1 : 0, _ = e.infinite ? e.slidesToShow * -1 : 0, S = []; p < n; )
      S.push(p), p = _ + e.slidesToScroll, _ += Math.min(e.slidesToScroll, e.slidesToShow);
    return S;
  }, a = E.checkNavigable = function(e, n) {
    var p = W(e), _ = 0;
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
  }, s = E.getSlideCount = function(e) {
    var n = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      var p, _ = e.listRef, S = _.querySelectorAll && _.querySelectorAll(".slick-slide") || [];
      if (Array.from(S).every(function(j) {
        if (e.vertical) {
          if (j.offsetTop + X(j) / 2 > e.swipeLeft * -1)
            return p = j, !1;
        } else if (j.offsetLeft - n + Z(j) / 2 > e.swipeLeft * -1)
          return p = j, !1;
        return !0;
      }), !p)
        return 0;
      var C = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide, P = Math.abs(p.dataset.index - C) || 1;
      return P;
    } else
      return e.slidesToScroll;
  }, c = E.checkSpecKeys = function(e, n) {
    return n.reduce(function(p, _) {
      return p && e.hasOwnProperty(_);
    }, !0) ? null : console.error("Keys Missing:", e);
  }, T = E.getTrackCSS = function(e) {
    c(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
    var n, p;
    if (!e.vertical)
      n = u(e) * e.slideWidth;
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
      var C = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", P = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", j = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
      S = g(g({}, S), {}, {
        WebkitTransform: C,
        transform: P,
        msTransform: j
      });
    } else
      e.vertical ? S.top = e.left : S.left = e.left;
    return e.fade && (S = {
      opacity: 1
    }), n && (S.width = n), p && (S.height = p), window && !window.addEventListener && window.attachEvent && (e.vertical ? S.marginTop = e.left + "px" : S.marginLeft = e.left + "px"), S;
  }, l = E.getTrackAnimateCSS = function(e) {
    c(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var n = T(e);
    return e.useTransform ? (n.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, n.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? n.transition = "top " + e.speed + "ms " + e.cssEase : n.transition = "left " + e.speed + "ms " + e.cssEase, n;
  }, r = E.getTrackLeft = function(e) {
    if (e.unslick)
      return 0;
    c(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var n = e.slideIndex, p = e.trackRef, _ = e.infinite, S = e.centerMode, C = e.slideCount, P = e.slidesToShow, j = e.slidesToScroll, I = e.slideWidth, H = e.listWidth, q = e.variableWidth, J = e.slideHeight, V = e.fade, $ = e.vertical, D = 0, U, re, z = 0;
    if (V || e.slideCount === 1)
      return 0;
    var ee = 0;
    if (_ ? (ee = -y(e), C % j !== 0 && n + j > C && (ee = -(n > C ? P - (n - C) : C % j)), S && (ee += parseInt(P / 2))) : (C % j !== 0 && n + j > C && (ee = P - C % j), S && (ee = parseInt(P / 2))), D = ee * I, z = ee * J, $ ? U = n * J * -1 + z : U = n * I * -1 + D, q === !0) {
      var ne, ie = p && p.node;
      if (ne = n + y(e), re = ie && ie.childNodes[ne], U = re ? re.offsetLeft * -1 : 0, S === !0) {
        ne = _ ? n + y(e) : n, re = ie && ie.children[ne], U = 0;
        for (var oe = 0; oe < ne; oe++)
          U -= ie && ie.children[oe] && ie.children[oe].offsetWidth;
        U -= parseInt(e.centerPadding), U += re && (H - re.offsetWidth) / 2;
      }
    }
    return U;
  }, y = E.getPreClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, b = E.getPostClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, u = E.getTotalSlides = function(e) {
    return e.slideCount === 1 ? 1 : y(e) + e.slideCount + b(e);
  }, d = E.siblingDirection = function(e) {
    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + O(e) ? "left" : "right" : e.targetSlide < e.currentSlide - k(e) ? "right" : "left";
  }, O = E.slidesOnRight = function(e) {
    var n = e.slidesToShow, p = e.centerMode, _ = e.rtl, S = e.centerPadding;
    if (p) {
      var C = (n - 1) / 2 + 1;
      return parseInt(S) > 0 && (C += 1), _ && n % 2 === 0 && (C += 1), C;
    }
    return _ ? 0 : n - 1;
  }, k = E.slidesOnLeft = function(e) {
    var n = e.slidesToShow, p = e.centerMode, _ = e.rtl, S = e.centerPadding;
    if (p) {
      var C = (n - 1) / 2 + 1;
      return parseInt(S) > 0 && (C += 1), !_ && n % 2 === 0 && (C += 1), C;
    }
    return _ ? n - 1 : 0;
  };
  E.canUseDOM = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  };
  var t = E.validSettings = Object.keys(f.default);
  function K(o) {
    return t.reduce(function(e, n) {
      return o.hasOwnProperty(n) && (e[n] = o[n]), e;
    }, {});
  }
  return E;
}
var he = {}, We;
function st() {
  if (We) return he;
  We = 1, Object.defineProperty(he, "__esModule", {
    value: !0
  }), he.Track = void 0;
  var i = m(ce), f = m(Oe()), v = ge();
  function m(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function h(l) {
    "@babel/helpers - typeof";
    return h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, h(l);
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(l) {
      for (var r = 1; r < arguments.length; r++) {
        var y = arguments[r];
        for (var b in y)
          ({}).hasOwnProperty.call(y, b) && (l[b] = y[b]);
      }
      return l;
    }, g.apply(null, arguments);
  }
  function x(l, r) {
    if (!(l instanceof r)) throw new TypeError("Cannot call a class as a function");
  }
  function L(l, r) {
    for (var y = 0; y < r.length; y++) {
      var b = r[y];
      b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(l, G(b.key), b);
    }
  }
  function F(l, r, y) {
    return r && L(l.prototype, r), Object.defineProperty(l, "prototype", { writable: !1 }), l;
  }
  function N(l, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
    l.prototype = Object.create(r && r.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), Object.defineProperty(l, "prototype", { writable: !1 }), r && B(l, r);
  }
  function B(l, r) {
    return B = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(y, b) {
      return y.__proto__ = b, y;
    }, B(l, r);
  }
  function Q(l) {
    var r = M();
    return function() {
      var y, b = w(l);
      if (r) {
        var u = w(this).constructor;
        y = Reflect.construct(b, arguments, u);
      } else y = b.apply(this, arguments);
      return R(this, y);
    };
  }
  function R(l, r) {
    if (r && (h(r) == "object" || typeof r == "function")) return r;
    if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Y(l);
  }
  function Y(l) {
    if (l === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return l;
  }
  function M() {
    try {
      var l = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (M = function() {
      return !!l;
    })();
  }
  function w(l) {
    return w = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, w(l);
  }
  function Z(l, r) {
    var y = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      var b = Object.getOwnPropertySymbols(l);
      r && (b = b.filter(function(u) {
        return Object.getOwnPropertyDescriptor(l, u).enumerable;
      })), y.push.apply(y, b);
    }
    return y;
  }
  function X(l) {
    for (var r = 1; r < arguments.length; r++) {
      var y = arguments[r] != null ? arguments[r] : {};
      r % 2 ? Z(Object(y), !0).forEach(function(b) {
        te(l, b, y[b]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(y)) : Z(Object(y)).forEach(function(b) {
        Object.defineProperty(l, b, Object.getOwnPropertyDescriptor(y, b));
      });
    }
    return l;
  }
  function te(l, r, y) {
    return (r = G(r)) in l ? Object.defineProperty(l, r, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : l[r] = y, l;
  }
  function G(l) {
    var r = W(l, "string");
    return h(r) == "symbol" ? r : r + "";
  }
  function W(l, r) {
    if (h(l) != "object" || !l) return l;
    var y = l[Symbol.toPrimitive];
    if (y !== void 0) {
      var b = y.call(l, r);
      if (h(b) != "object") return b;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(l);
  }
  var a = function(r) {
    var y, b, u, d, O;
    r.rtl ? O = r.slideCount - 1 - r.index : O = r.index, u = O < 0 || O >= r.slideCount, r.centerMode ? (d = Math.floor(r.slidesToShow / 2), b = (O - r.currentSlide) % r.slideCount === 0, O > r.currentSlide - d - 1 && O <= r.currentSlide + d && (y = !0)) : y = r.currentSlide <= O && O < r.currentSlide + r.slidesToShow;
    var k;
    r.targetSlide < 0 ? k = r.targetSlide + r.slideCount : r.targetSlide >= r.slideCount ? k = r.targetSlide - r.slideCount : k = r.targetSlide;
    var t = O === k;
    return {
      "slick-slide": !0,
      "slick-active": y,
      "slick-center": b,
      "slick-cloned": u,
      "slick-current": t
      // dubious in case of RTL
    };
  }, s = function(r) {
    var y = {};
    return (r.variableWidth === void 0 || r.variableWidth === !1) && (y.width = r.slideWidth), r.fade && (y.position = "relative", r.vertical ? y.top = -r.index * parseInt(r.slideHeight) : y.left = -r.index * parseInt(r.slideWidth), y.opacity = r.currentSlide === r.index ? 1 : 0, y.zIndex = r.currentSlide === r.index ? 999 : 998, r.useCSS && (y.transition = "opacity " + r.speed + "ms " + r.cssEase + ", visibility " + r.speed + "ms " + r.cssEase)), y;
  }, c = function(r, y) {
    return r.key || y;
  }, T = function(r) {
    var y, b = [], u = [], d = [], O = i.default.Children.count(r.children), k = (0, v.lazyStartIndex)(r), t = (0, v.lazyEndIndex)(r);
    return i.default.Children.forEach(r.children, function(K, o) {
      var e, n = {
        message: "children",
        index: o,
        slidesToScroll: r.slidesToScroll,
        currentSlide: r.currentSlide
      };
      !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(o) >= 0 ? e = K : e = /* @__PURE__ */ i.default.createElement("div", null);
      var p = s(X(X({}, r), {}, {
        index: o
      })), _ = e.props.className || "", S = a(X(X({}, r), {}, {
        index: o
      }));
      if (b.push(/* @__PURE__ */ i.default.cloneElement(e, {
        key: "original" + c(e, o),
        "data-index": o,
        className: (0, f.default)(S, _),
        tabIndex: "-1",
        "aria-hidden": !S["slick-active"],
        style: X(X({
          outline: "none"
        }, e.props.style || {}), p),
        onClick: function(j) {
          e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
        }
      })), r.infinite && O > 1 && r.fade === !1 && !r.unslick) {
        var C = O - o;
        C <= (0, v.getPreClones)(r) && (y = -C, y >= k && (e = K), S = a(X(X({}, r), {}, {
          index: y
        })), u.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "precloned" + c(e, y),
          "data-index": y,
          tabIndex: "-1",
          className: (0, f.default)(S, _),
          "aria-hidden": !S["slick-active"],
          style: X(X({}, e.props.style || {}), p),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        }))), o < (0, v.getPostClones)(r) && (y = O + o, y < t && (e = K), S = a(X(X({}, r), {}, {
          index: y
        })), d.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "postcloned" + c(e, y),
          "data-index": y,
          tabIndex: "-1",
          className: (0, f.default)(S, _),
          "aria-hidden": !S["slick-active"],
          style: X(X({}, e.props.style || {}), p),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        })));
      }
    }), r.rtl ? u.concat(b, d).reverse() : u.concat(b, d);
  };
  return he.Track = /* @__PURE__ */ (function(l) {
    N(y, l);
    var r = Q(y);
    function y() {
      var b;
      x(this, y);
      for (var u = arguments.length, d = new Array(u), O = 0; O < u; O++)
        d[O] = arguments[O];
      return b = r.call.apply(r, [this].concat(d)), te(Y(b), "node", null), te(Y(b), "handleRef", function(k) {
        b.node = k;
      }), b;
    }
    return F(y, [{
      key: "render",
      value: function() {
        var u = T(this.props), d = this.props, O = d.onMouseEnter, k = d.onMouseOver, t = d.onMouseLeave, K = {
          onMouseEnter: O,
          onMouseOver: k,
          onMouseLeave: t
        };
        return /* @__PURE__ */ i.default.createElement("div", g({
          ref: this.handleRef,
          className: "slick-track",
          style: this.props.trackStyle
        }, K), u);
      }
    }]), y;
  })(i.default.PureComponent), he;
}
var ye = {}, qe;
function ut() {
  if (qe) return ye;
  qe = 1;
  function i(a) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, i(a);
  }
  Object.defineProperty(ye, "__esModule", {
    value: !0
  }), ye.Dots = void 0;
  var f = h(ce), v = h(Oe()), m = ge();
  function h(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function g(a, s) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var T = Object.getOwnPropertySymbols(a);
      s && (T = T.filter(function(l) {
        return Object.getOwnPropertyDescriptor(a, l).enumerable;
      })), c.push.apply(c, T);
    }
    return c;
  }
  function x(a) {
    for (var s = 1; s < arguments.length; s++) {
      var c = arguments[s] != null ? arguments[s] : {};
      s % 2 ? g(Object(c), !0).forEach(function(T) {
        L(a, T, c[T]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : g(Object(c)).forEach(function(T) {
        Object.defineProperty(a, T, Object.getOwnPropertyDescriptor(c, T));
      });
    }
    return a;
  }
  function L(a, s, c) {
    return (s = Q(s)) in a ? Object.defineProperty(a, s, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : a[s] = c, a;
  }
  function F(a, s) {
    if (!(a instanceof s)) throw new TypeError("Cannot call a class as a function");
  }
  function N(a, s) {
    for (var c = 0; c < s.length; c++) {
      var T = s[c];
      T.enumerable = T.enumerable || !1, T.configurable = !0, "value" in T && (T.writable = !0), Object.defineProperty(a, Q(T.key), T);
    }
  }
  function B(a, s, c) {
    return s && N(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function Q(a) {
    var s = R(a, "string");
    return i(s) == "symbol" ? s : s + "";
  }
  function R(a, s) {
    if (i(a) != "object" || !a) return a;
    var c = a[Symbol.toPrimitive];
    if (c !== void 0) {
      var T = c.call(a, s);
      if (i(T) != "object") return T;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  function Y(a, s) {
    if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(s && s.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), s && M(a, s);
  }
  function M(a, s) {
    return M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, T) {
      return c.__proto__ = T, c;
    }, M(a, s);
  }
  function w(a) {
    var s = te();
    return function() {
      var c, T = G(a);
      if (s) {
        var l = G(this).constructor;
        c = Reflect.construct(T, arguments, l);
      } else c = T.apply(this, arguments);
      return Z(this, c);
    };
  }
  function Z(a, s) {
    if (s && (i(s) == "object" || typeof s == "function")) return s;
    if (s !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return X(a);
  }
  function X(a) {
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
  function G(a) {
    return G = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, G(a);
  }
  var W = function(s) {
    var c;
    return s.infinite ? c = Math.ceil(s.slideCount / s.slidesToScroll) : c = Math.ceil((s.slideCount - s.slidesToShow) / s.slidesToScroll) + 1, c;
  };
  return ye.Dots = /* @__PURE__ */ (function(a) {
    Y(c, a);
    var s = w(c);
    function c() {
      return F(this, c), s.apply(this, arguments);
    }
    return B(c, [{
      key: "clickHandler",
      value: function(l, r) {
        r.preventDefault(), this.props.clickHandler(l);
      }
    }, {
      key: "render",
      value: function() {
        for (var l = this.props, r = l.onMouseEnter, y = l.onMouseOver, b = l.onMouseLeave, u = l.infinite, d = l.slidesToScroll, O = l.slidesToShow, k = l.slideCount, t = l.currentSlide, K = W({
          slideCount: k,
          slidesToScroll: d,
          slidesToShow: O,
          infinite: u
        }), o = {
          onMouseEnter: r,
          onMouseOver: y,
          onMouseLeave: b
        }, e = [], n = 0; n < K; n++) {
          var p = (n + 1) * d - 1, _ = u ? p : (0, m.clamp)(p, 0, k - 1), S = _ - (d - 1), C = u ? S : (0, m.clamp)(S, 0, k - 1), P = (0, v.default)({
            "slick-active": u ? t >= C && t <= _ : t === C
          }), j = {
            message: "dots",
            index: n,
            slidesToScroll: d,
            currentSlide: t
          }, I = this.clickHandler.bind(this, j);
          e = e.concat(/* @__PURE__ */ f.default.createElement("li", {
            key: n,
            className: P
          }, /* @__PURE__ */ f.default.cloneElement(this.props.customPaging(n), {
            onClick: I
          })));
        }
        return /* @__PURE__ */ f.default.cloneElement(this.props.appendDots(e), x({
          className: this.props.dotsClass
        }, o));
      }
    }]), c;
  })(f.default.PureComponent), ye;
}
var ue = {}, Fe;
function ct() {
  if (Fe) return ue;
  Fe = 1;
  function i(a) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, i(a);
  }
  Object.defineProperty(ue, "__esModule", {
    value: !0
  }), ue.PrevArrow = ue.NextArrow = void 0;
  var f = h(ce), v = h(Oe()), m = ge();
  function h(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(a) {
      for (var s = 1; s < arguments.length; s++) {
        var c = arguments[s];
        for (var T in c)
          ({}).hasOwnProperty.call(c, T) && (a[T] = c[T]);
      }
      return a;
    }, g.apply(null, arguments);
  }
  function x(a, s) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var T = Object.getOwnPropertySymbols(a);
      s && (T = T.filter(function(l) {
        return Object.getOwnPropertyDescriptor(a, l).enumerable;
      })), c.push.apply(c, T);
    }
    return c;
  }
  function L(a) {
    for (var s = 1; s < arguments.length; s++) {
      var c = arguments[s] != null ? arguments[s] : {};
      s % 2 ? x(Object(c), !0).forEach(function(T) {
        F(a, T, c[T]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : x(Object(c)).forEach(function(T) {
        Object.defineProperty(a, T, Object.getOwnPropertyDescriptor(c, T));
      });
    }
    return a;
  }
  function F(a, s, c) {
    return (s = R(s)) in a ? Object.defineProperty(a, s, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : a[s] = c, a;
  }
  function N(a, s) {
    if (!(a instanceof s)) throw new TypeError("Cannot call a class as a function");
  }
  function B(a, s) {
    for (var c = 0; c < s.length; c++) {
      var T = s[c];
      T.enumerable = T.enumerable || !1, T.configurable = !0, "value" in T && (T.writable = !0), Object.defineProperty(a, R(T.key), T);
    }
  }
  function Q(a, s, c) {
    return s && B(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function R(a) {
    var s = Y(a, "string");
    return i(s) == "symbol" ? s : s + "";
  }
  function Y(a, s) {
    if (i(a) != "object" || !a) return a;
    var c = a[Symbol.toPrimitive];
    if (c !== void 0) {
      var T = c.call(a, s);
      if (i(T) != "object") return T;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  function M(a, s) {
    if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(s && s.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), s && w(a, s);
  }
  function w(a, s) {
    return w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, T) {
      return c.__proto__ = T, c;
    }, w(a, s);
  }
  function Z(a) {
    var s = G();
    return function() {
      var c, T = W(a);
      if (s) {
        var l = W(this).constructor;
        c = Reflect.construct(T, arguments, l);
      } else c = T.apply(this, arguments);
      return X(this, c);
    };
  }
  function X(a, s) {
    if (s && (i(s) == "object" || typeof s == "function")) return s;
    if (s !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return te(a);
  }
  function te(a) {
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
  function W(a) {
    return W = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, W(a);
  }
  return ue.PrevArrow = /* @__PURE__ */ (function(a) {
    M(c, a);
    var s = Z(c);
    function c() {
      return N(this, c), s.apply(this, arguments);
    }
    return Q(c, [{
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
        var y = {
          key: "0",
          "data-role": "none",
          className: (0, v.default)(l),
          style: {
            display: "block"
          },
          onClick: r
        }, b = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, u;
        return this.props.prevArrow ? u = /* @__PURE__ */ f.default.cloneElement(this.props.prevArrow, L(L({}, y), b)) : u = /* @__PURE__ */ f.default.createElement("button", g({
          key: "0",
          type: "button"
        }, y), " ", "Previous"), u;
      }
    }]), c;
  })(f.default.PureComponent), ue.NextArrow = /* @__PURE__ */ (function(a) {
    M(c, a);
    var s = Z(c);
    function c() {
      return N(this, c), s.apply(this, arguments);
    }
    return Q(c, [{
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
        var y = {
          key: "1",
          "data-role": "none",
          className: (0, v.default)(l),
          style: {
            display: "block"
          },
          onClick: r
        }, b = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, u;
        return this.props.nextArrow ? u = /* @__PURE__ */ f.default.cloneElement(this.props.nextArrow, L(L({}, y), b)) : u = /* @__PURE__ */ f.default.createElement("button", g({
          key: "1",
          type: "button"
        }, y), " ", "Next"), u;
      }
    }]), c;
  })(f.default.PureComponent), ue;
}
var Ve = (function() {
  if (typeof Map < "u")
    return Map;
  function i(f, v) {
    var m = -1;
    return f.some(function(h, g) {
      return h[0] === v ? (m = g, !0) : !1;
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
        var m = i(this.__entries__, v), h = this.__entries__[m];
        return h && h[1];
      }, f.prototype.set = function(v, m) {
        var h = i(this.__entries__, v);
        ~h ? this.__entries__[h][1] = m : this.__entries__.push([v, m]);
      }, f.prototype.delete = function(v) {
        var m = this.__entries__, h = i(m, v);
        ~h && m.splice(h, 1);
      }, f.prototype.has = function(v) {
        return !!~i(this.__entries__, v);
      }, f.prototype.clear = function() {
        this.__entries__.splice(0);
      }, f.prototype.forEach = function(v, m) {
        m === void 0 && (m = null);
        for (var h = 0, g = this.__entries__; h < g.length; h++) {
          var x = g[h];
          v.call(m, x[1], x[0]);
        }
      }, f;
    })()
  );
})(), Re = typeof window < "u" && typeof document < "u" && window.document === document, Se = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), ft = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Se) : function(i) {
    return setTimeout(function() {
      return i(Date.now());
    }, 1e3 / 60);
  };
})(), dt = 2;
function pt(i, f) {
  var v = !1, m = !1, h = 0;
  function g() {
    v && (v = !1, i()), m && L();
  }
  function x() {
    ft(g);
  }
  function L() {
    var F = Date.now();
    if (v) {
      if (F - h < dt)
        return;
      m = !0;
    } else
      v = !0, m = !1, setTimeout(x, f);
    h = F;
  }
  return L;
}
var vt = 20, ht = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], yt = typeof MutationObserver < "u", gt = (
  /** @class */
  (function() {
    function i() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = pt(this.refresh.bind(this), vt);
    }
    return i.prototype.addObserver = function(f) {
      ~this.observers_.indexOf(f) || this.observers_.push(f), this.connected_ || this.connect_();
    }, i.prototype.removeObserver = function(f) {
      var v = this.observers_, m = v.indexOf(f);
      ~m && v.splice(m, 1), !v.length && this.connected_ && this.disconnect_();
    }, i.prototype.refresh = function() {
      var f = this.updateObservers_();
      f && this.refresh();
    }, i.prototype.updateObservers_ = function() {
      var f = this.observers_.filter(function(v) {
        return v.gatherActive(), v.hasActive();
      });
      return f.forEach(function(v) {
        return v.broadcastActive();
      }), f.length > 0;
    }, i.prototype.connect_ = function() {
      !Re || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), yt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, i.prototype.disconnect_ = function() {
      !Re || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, i.prototype.onTransitionEnd_ = function(f) {
      var v = f.propertyName, m = v === void 0 ? "" : v, h = ht.some(function(g) {
        return !!~m.indexOf(g);
      });
      h && this.refresh();
    }, i.getInstance = function() {
      return this.instance_ || (this.instance_ = new i()), this.instance_;
    }, i.instance_ = null, i;
  })()
), Je = (function(i, f) {
  for (var v = 0, m = Object.keys(f); v < m.length; v++) {
    var h = m[v];
    Object.defineProperty(i, h, {
      value: f[h],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return i;
}), fe = (function(i) {
  var f = i && i.ownerDocument && i.ownerDocument.defaultView;
  return f || Se;
}), Qe = _e(0, 0, 0, 0);
function we(i) {
  return parseFloat(i) || 0;
}
function Be(i) {
  for (var f = [], v = 1; v < arguments.length; v++)
    f[v - 1] = arguments[v];
  return f.reduce(function(m, h) {
    var g = i["border-" + h + "-width"];
    return m + we(g);
  }, 0);
}
function bt(i) {
  for (var f = ["top", "right", "bottom", "left"], v = {}, m = 0, h = f; m < h.length; m++) {
    var g = h[m], x = i["padding-" + g];
    v[g] = we(x);
  }
  return v;
}
function mt(i) {
  var f = i.getBBox();
  return _e(0, 0, f.width, f.height);
}
function St(i) {
  var f = i.clientWidth, v = i.clientHeight;
  if (!f && !v)
    return Qe;
  var m = fe(i).getComputedStyle(i), h = bt(m), g = h.left + h.right, x = h.top + h.bottom, L = we(m.width), F = we(m.height);
  if (m.boxSizing === "border-box" && (Math.round(L + g) !== f && (L -= Be(m, "left", "right") + g), Math.round(F + x) !== v && (F -= Be(m, "top", "bottom") + x)), !Ot(i)) {
    var N = Math.round(L + g) - f, B = Math.round(F + x) - v;
    Math.abs(N) !== 1 && (L -= N), Math.abs(B) !== 1 && (F -= B);
  }
  return _e(h.left, h.top, L, F);
}
var wt = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(i) {
    return i instanceof fe(i).SVGGraphicsElement;
  } : function(i) {
    return i instanceof fe(i).SVGElement && typeof i.getBBox == "function";
  };
})();
function Ot(i) {
  return i === fe(i).document.documentElement;
}
function _t(i) {
  return Re ? wt(i) ? mt(i) : St(i) : Qe;
}
function kt(i) {
  var f = i.x, v = i.y, m = i.width, h = i.height, g = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, x = Object.create(g.prototype);
  return Je(x, {
    x: f,
    y: v,
    width: m,
    height: h,
    top: v,
    right: f + m,
    bottom: h + v,
    left: f
  }), x;
}
function _e(i, f, v, m) {
  return { x: i, y: f, width: v, height: m };
}
var Pt = (
  /** @class */
  (function() {
    function i(f) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = _e(0, 0, 0, 0), this.target = f;
    }
    return i.prototype.isActive = function() {
      var f = _t(this.target);
      return this.contentRect_ = f, f.width !== this.broadcastWidth || f.height !== this.broadcastHeight;
    }, i.prototype.broadcastRect = function() {
      var f = this.contentRect_;
      return this.broadcastWidth = f.width, this.broadcastHeight = f.height, f;
    }, i;
  })()
), Tt = (
  /** @class */
  /* @__PURE__ */ (function() {
    function i(f, v) {
      var m = kt(v);
      Je(this, { target: f, contentRect: m });
    }
    return i;
  })()
), Ct = (
  /** @class */
  (function() {
    function i(f, v, m) {
      if (this.activeObservations_ = [], this.observations_ = new Ve(), typeof f != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = f, this.controller_ = v, this.callbackCtx_ = m;
    }
    return i.prototype.observe = function(f) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(f instanceof fe(f).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var v = this.observations_;
        v.has(f) || (v.set(f, new Pt(f)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, i.prototype.unobserve = function(f) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(f instanceof fe(f).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var v = this.observations_;
        v.has(f) && (v.delete(f), v.size || this.controller_.removeObserver(this));
      }
    }, i.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, i.prototype.gatherActive = function() {
      var f = this;
      this.clearActive(), this.observations_.forEach(function(v) {
        v.isActive() && f.activeObservations_.push(v);
      });
    }, i.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var f = this.callbackCtx_, v = this.activeObservations_.map(function(m) {
          return new Tt(m.target, m.broadcastRect());
        });
        this.callback_.call(f, v, f), this.clearActive();
      }
    }, i.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, i.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, i;
  })()
), Ze = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Ve(), et = (
  /** @class */
  /* @__PURE__ */ (function() {
    function i(f) {
      if (!(this instanceof i))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var v = gt.getInstance(), m = new Ct(f, v, this);
      Ze.set(this, m);
    }
    return i;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(i) {
  et.prototype[i] = function() {
    var f;
    return (f = Ze.get(this))[i].apply(f, arguments);
  };
});
var jt = (function() {
  return typeof Se.ResizeObserver < "u" ? Se.ResizeObserver : et;
})();
const Et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jt
}, Symbol.toStringTag, { value: "Module" })), xt = /* @__PURE__ */ ot(Et);
var Ge;
function Lt() {
  if (Ge) return ve;
  Ge = 1, Object.defineProperty(ve, "__esModule", {
    value: !0
  }), ve.InnerSlider = void 0;
  var i = N(ce), f = N(at()), v = N(lt()), m = N(Oe()), h = ge(), g = st(), x = ut(), L = ct(), F = N(xt);
  function N(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function B(u) {
    "@babel/helpers - typeof";
    return B = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
      return typeof d;
    } : function(d) {
      return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
    }, B(u);
  }
  function Q() {
    return Q = Object.assign ? Object.assign.bind() : function(u) {
      for (var d = 1; d < arguments.length; d++) {
        var O = arguments[d];
        for (var k in O)
          ({}).hasOwnProperty.call(O, k) && (u[k] = O[k]);
      }
      return u;
    }, Q.apply(null, arguments);
  }
  function R(u, d) {
    if (u == null) return {};
    var O, k, t = Y(u, d);
    if (Object.getOwnPropertySymbols) {
      var K = Object.getOwnPropertySymbols(u);
      for (k = 0; k < K.length; k++)
        O = K[k], d.includes(O) || {}.propertyIsEnumerable.call(u, O) && (t[O] = u[O]);
    }
    return t;
  }
  function Y(u, d) {
    if (u == null) return {};
    var O = {};
    for (var k in u)
      if ({}.hasOwnProperty.call(u, k)) {
        if (d.includes(k)) continue;
        O[k] = u[k];
      }
    return O;
  }
  function M(u, d) {
    var O = Object.keys(u);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(u);
      d && (k = k.filter(function(t) {
        return Object.getOwnPropertyDescriptor(u, t).enumerable;
      })), O.push.apply(O, k);
    }
    return O;
  }
  function w(u) {
    for (var d = 1; d < arguments.length; d++) {
      var O = arguments[d] != null ? arguments[d] : {};
      d % 2 ? M(Object(O), !0).forEach(function(k) {
        r(u, k, O[k]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(O)) : M(Object(O)).forEach(function(k) {
        Object.defineProperty(u, k, Object.getOwnPropertyDescriptor(O, k));
      });
    }
    return u;
  }
  function Z(u, d) {
    if (!(u instanceof d)) throw new TypeError("Cannot call a class as a function");
  }
  function X(u, d) {
    for (var O = 0; O < d.length; O++) {
      var k = d[O];
      k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(u, y(k.key), k);
    }
  }
  function te(u, d, O) {
    return d && X(u.prototype, d), Object.defineProperty(u, "prototype", { writable: !1 }), u;
  }
  function G(u, d) {
    if (typeof d != "function" && d !== null) throw new TypeError("Super expression must either be null or a function");
    u.prototype = Object.create(d && d.prototype, { constructor: { value: u, writable: !0, configurable: !0 } }), Object.defineProperty(u, "prototype", { writable: !1 }), d && W(u, d);
  }
  function W(u, d) {
    return W = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(O, k) {
      return O.__proto__ = k, O;
    }, W(u, d);
  }
  function a(u) {
    var d = T();
    return function() {
      var O, k = l(u);
      if (d) {
        var t = l(this).constructor;
        O = Reflect.construct(k, arguments, t);
      } else O = k.apply(this, arguments);
      return s(this, O);
    };
  }
  function s(u, d) {
    if (d && (B(d) == "object" || typeof d == "function")) return d;
    if (d !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return c(u);
  }
  function c(u) {
    if (u === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return u;
  }
  function T() {
    try {
      var u = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (T = function() {
      return !!u;
    })();
  }
  function l(u) {
    return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(d) {
      return d.__proto__ || Object.getPrototypeOf(d);
    }, l(u);
  }
  function r(u, d, O) {
    return (d = y(d)) in u ? Object.defineProperty(u, d, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : u[d] = O, u;
  }
  function y(u) {
    var d = b(u, "string");
    return B(d) == "symbol" ? d : d + "";
  }
  function b(u, d) {
    if (B(u) != "object" || !u) return u;
    var O = u[Symbol.toPrimitive];
    if (O !== void 0) {
      var k = O.call(u, d);
      if (B(k) != "object") return k;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (d === "string" ? String : Number)(u);
  }
  return ve.InnerSlider = /* @__PURE__ */ (function(u) {
    G(O, u);
    var d = a(O);
    function O(k) {
      var t;
      Z(this, O), t = d.call(this, k), r(c(t), "listRefHandler", function(o) {
        return t.list = o;
      }), r(c(t), "trackRefHandler", function(o) {
        return t.track = o;
      }), r(c(t), "adaptHeight", function() {
        if (t.props.adaptiveHeight && t.list) {
          var o = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
          t.list.style.height = (0, h.getHeight)(o) + "px";
        }
      }), r(c(t), "componentDidMount", function() {
        if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
          var o = (0, h.getOnDemandLazySlides)(w(w({}, t.props), t.state));
          o.length > 0 && (t.setState(function(n) {
            return {
              lazyLoadedList: n.lazyLoadedList.concat(o)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(o));
        }
        var e = w({
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
        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach(function(o) {
          return clearTimeout(o);
        }), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
      }), r(c(t), "componentDidUpdate", function(o) {
        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
          var e = (0, h.getOnDemandLazySlides)(w(w({}, t.props), t.state));
          e.length > 0 && (t.setState(function(_) {
            return {
              lazyLoadedList: _.lazyLoadedList.concat(e)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(e));
        }
        t.adaptHeight();
        var n = w(w({
          listRef: t.list,
          trackRef: t.track
        }, t.props), t.state), p = t.didPropsChange(o);
        p && t.updateState(n, p, function() {
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
          var n = w(w({
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
        var p = (0, h.initializedState)(o);
        o = w(w(w({}, o), p), {}, {
          slideIndex: p.currentSlide
        });
        var _ = (0, h.getTrackLeft)(o);
        o = w(w({}, o), {}, {
          left: _
        });
        var S = (0, h.getTrackCSS)(o);
        (e || i.default.Children.count(t.props.children) !== i.default.Children.count(o.children)) && (p.trackStyle = S), t.setState(p, n);
      }), r(c(t), "ssrInit", function() {
        if (t.props.variableWidth) {
          var o = 0, e = 0, n = [], p = (0, h.getPreClones)(w(w(w({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          })), _ = (0, h.getPostClones)(w(w(w({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          }));
          t.props.children.forEach(function(re) {
            n.push(re.props.style.width), o += re.props.style.width;
          });
          for (var S = 0; S < p; S++)
            e += n[n.length - 1 - S], o += n[n.length - 1 - S];
          for (var C = 0; C < _; C++)
            o += n[C];
          for (var P = 0; P < t.state.currentSlide; P++)
            e += n[P];
          var j = {
            width: o + "px",
            left: -e + "px"
          };
          if (t.props.centerMode) {
            var I = "".concat(n[t.state.currentSlide], "px");
            j.left = "calc(".concat(j.left, " + (100% - ").concat(I, ") / 2 ) ");
          }
          return {
            trackStyle: j
          };
        }
        var H = i.default.Children.count(t.props.children), q = w(w(w({}, t.props), t.state), {}, {
          slideCount: H
        }), J = (0, h.getPreClones)(q) + (0, h.getPostClones)(q) + H, V = 100 / t.props.slidesToShow * J, $ = 100 / J, D = -$ * ((0, h.getPreClones)(q) + t.state.currentSlide) * V / 100;
        t.props.centerMode && (D += (100 - $ * V / 100) / 2);
        var U = {
          width: V + "%",
          left: D + "%"
        };
        return {
          slideWidth: $ + "%",
          trackStyle: U
        };
      }), r(c(t), "checkImagesLoad", function() {
        var o = t.list && t.list.querySelectorAll && t.list.querySelectorAll(".slick-slide img") || [], e = o.length, n = 0;
        Array.prototype.forEach.call(o, function(p) {
          var _ = function() {
            return ++n && n >= e && t.onWindowResized();
          };
          if (!p.onclick)
            p.onclick = function() {
              return p.parentNode.focus();
            };
          else {
            var S = p.onclick;
            p.onclick = function(C) {
              S(C), p.parentNode.focus();
            };
          }
          p.onload || (t.props.lazyLoad ? p.onload = function() {
            t.adaptHeight(), t.callbackTimers.push(setTimeout(t.onWindowResized, t.props.speed));
          } : (p.onload = _, p.onerror = function() {
            _(), t.props.onLazyLoadError && t.props.onLazyLoadError();
          }));
        });
      }), r(c(t), "progressiveLazyLoad", function() {
        for (var o = [], e = w(w({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, h.getPostClones)(e); n++)
          if (t.state.lazyLoadedList.indexOf(n) < 0) {
            o.push(n);
            break;
          }
        for (var p = t.state.currentSlide - 1; p >= -(0, h.getPreClones)(e); p--)
          if (t.state.lazyLoadedList.indexOf(p) < 0) {
            o.push(p);
            break;
          }
        o.length > 0 ? (t.setState(function(_) {
          return {
            lazyLoadedList: _.lazyLoadedList.concat(o)
          };
        }), t.props.onLazyLoad && t.props.onLazyLoad(o)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
      }), r(c(t), "slideHandler", function(o) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = t.props, p = n.asNavFor, _ = n.beforeChange, S = n.onLazyLoad, C = n.speed, P = n.afterChange, j = t.state.currentSlide, I = (0, h.slideHandler)(w(w(w({
          index: o
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e
        })), H = I.state, q = I.nextState;
        if (H) {
          _ && _(j, H.currentSlide);
          var J = H.lazyLoadedList.filter(function(V) {
            return t.state.lazyLoadedList.indexOf(V) < 0;
          });
          S && J.length > 0 && S(J), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), P && P(j), delete t.animationEndCallback), t.setState(H, function() {
            p && t.asNavForIndex !== o && (t.asNavForIndex = o, p.innerSlider.slideHandler(o)), q && (t.animationEndCallback = setTimeout(function() {
              var V = q.animating, $ = R(q, ["animating"]);
              t.setState($, function() {
                t.callbackTimers.push(setTimeout(function() {
                  return t.setState({
                    animating: V
                  });
                }, 10)), P && P(H.currentSlide), delete t.animationEndCallback;
              });
            }, C));
          });
        }
      }), r(c(t), "changeSlide", function(o) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = w(w({}, t.props), t.state), p = (0, h.changeSlide)(n, o);
        if (!(p !== 0 && !p) && (e === !0 ? t.slideHandler(p, e) : t.slideHandler(p), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
          var _ = t.list.querySelectorAll(".slick-current");
          _[0] && _[0].focus();
        }
      }), r(c(t), "clickHandler", function(o) {
        t.clickable === !1 && (o.stopPropagation(), o.preventDefault()), t.clickable = !0;
      }), r(c(t), "keyHandler", function(o) {
        var e = (0, h.keyHandler)(o, t.props.accessibility, t.props.rtl);
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
        var e = (0, h.swipeStart)(o, t.props.swipe, t.props.draggable);
        e !== "" && t.setState(e);
      }), r(c(t), "swipeMove", function(o) {
        var e = (0, h.swipeMove)(o, w(w(w({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(c(t), "swipeEnd", function(o) {
        var e = (0, h.swipeEnd)(o, w(w(w({}, t.props), t.state), {}, {
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
        else if ((0, h.canGoNext)(w(w({}, t.props), t.state)))
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
        var o = (0, m.default)("slick-slider", t.props.className, {
          "slick-vertical": t.props.vertical,
          "slick-initialized": !0
        }), e = w(w({}, t.props), t.state), n = (0, h.extractObject)(e, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), p = t.props.pauseOnHover;
        n = w(w({}, n), {}, {
          onMouseEnter: p ? t.onTrackOver : null,
          onMouseLeave: p ? t.onTrackLeave : null,
          onMouseOver: p ? t.onTrackOver : null,
          focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
        });
        var _;
        if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
          var S = (0, h.extractObject)(e, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), C = t.props.pauseOnDotsHover;
          S = w(w({}, S), {}, {
            clickHandler: t.changeSlide,
            onMouseEnter: C ? t.onDotsLeave : null,
            onMouseOver: C ? t.onDotsOver : null,
            onMouseLeave: C ? t.onDotsLeave : null
          }), _ = /* @__PURE__ */ i.default.createElement(x.Dots, S);
        }
        var P, j, I = (0, h.extractObject)(e, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        I.clickHandler = t.changeSlide, t.props.arrows && (P = /* @__PURE__ */ i.default.createElement(L.PrevArrow, I), j = /* @__PURE__ */ i.default.createElement(L.NextArrow, I));
        var H = null;
        t.props.vertical && (H = {
          height: t.state.listHeight
        });
        var q = null;
        t.props.vertical === !1 ? t.props.centerMode === !0 && (q = {
          padding: "0px " + t.props.centerPadding
        }) : t.props.centerMode === !0 && (q = {
          padding: t.props.centerPadding + " 0px"
        });
        var J = w(w({}, H), q), V = t.props.touchMove, $ = {
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
        }, D = {
          className: o,
          dir: "ltr",
          style: t.props.style
        };
        return t.props.unslick && ($ = {
          className: "slick-list"
        }, D = {
          className: o,
          style: t.props.style
        }), /* @__PURE__ */ i.default.createElement("div", D, t.props.unslick ? "" : P, /* @__PURE__ */ i.default.createElement("div", Q({
          ref: t.listRefHandler
        }, $), /* @__PURE__ */ i.default.createElement(g.Track, Q({
          ref: t.trackRefHandler
        }, n), t.props.children)), t.props.unslick ? "" : j, t.props.unslick ? "" : _);
      }), t.list = null, t.track = null, t.state = w(w({}, f.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: i.default.Children.count(t.props.children)
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      var K = t.ssrInit();
      return t.state = w(w({}, t.state), K), t;
    }
    return te(O, [{
      key: "didPropsChange",
      value: function(t) {
        for (var K = !1, o = 0, e = Object.keys(this.props); o < e.length; o++) {
          var n = e[o];
          if (!t.hasOwnProperty(n)) {
            K = !0;
            break;
          }
          if (!(B(t[n]) === "object" || typeof t[n] == "function" || isNaN(t[n])) && t[n] !== this.props[n]) {
            K = !0;
            break;
          }
        }
        return K || i.default.Children.count(this.props.children) !== i.default.Children.count(t.children);
      }
    }]), O;
  })(i.default.Component), ve;
}
var Le, $e;
function Mt() {
  if ($e) return Le;
  $e = 1;
  var i = function(f) {
    return f.replace(/[A-Z]/g, function(v) {
      return "-" + v.toLowerCase();
    }).toLowerCase();
  };
  return Le = i, Le;
}
var Me, Xe;
function Rt() {
  if (Xe) return Me;
  Xe = 1;
  var i = Mt(), f = function(h) {
    var g = /[height|width]$/;
    return g.test(h);
  }, v = function(h) {
    var g = "", x = Object.keys(h);
    return x.forEach(function(L, F) {
      var N = h[L];
      L = i(L), f(L) && typeof N == "number" && (N = N + "px"), N === !0 ? g += L : N === !1 ? g += "not " + L : g += "(" + L + ": " + N + ")", F < x.length - 1 && (g += " and ");
    }), g;
  }, m = function(h) {
    var g = "";
    return typeof h == "string" ? h : h instanceof Array ? (h.forEach(function(x, L) {
      g += v(x), L < h.length - 1 && (g += ", ");
    }), g) : v(h);
  };
  return Me = m, Me;
}
var Ke;
function zt() {
  return Ke || (Ke = 1, (function(i) {
    var f = { NODE_ENV: "production" };
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var v = L(ce), m = Lt(), h = L(Rt()), g = L(Ue()), x = ge();
    function L(l) {
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
    function N() {
      return N = Object.assign ? Object.assign.bind() : function(l) {
        for (var r = 1; r < arguments.length; r++) {
          var y = arguments[r];
          for (var b in y)
            ({}).hasOwnProperty.call(y, b) && (l[b] = y[b]);
        }
        return l;
      }, N.apply(null, arguments);
    }
    function B(l, r) {
      var y = Object.keys(l);
      if (Object.getOwnPropertySymbols) {
        var b = Object.getOwnPropertySymbols(l);
        r && (b = b.filter(function(u) {
          return Object.getOwnPropertyDescriptor(l, u).enumerable;
        })), y.push.apply(y, b);
      }
      return y;
    }
    function Q(l) {
      for (var r = 1; r < arguments.length; r++) {
        var y = arguments[r] != null ? arguments[r] : {};
        r % 2 ? B(Object(y), !0).forEach(function(b) {
          s(l, b, y[b]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(y)) : B(Object(y)).forEach(function(b) {
          Object.defineProperty(l, b, Object.getOwnPropertyDescriptor(y, b));
        });
      }
      return l;
    }
    function R(l, r) {
      if (!(l instanceof r)) throw new TypeError("Cannot call a class as a function");
    }
    function Y(l, r) {
      for (var y = 0; y < r.length; y++) {
        var b = r[y];
        b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(l, c(b.key), b);
      }
    }
    function M(l, r, y) {
      return r && Y(l.prototype, r), Object.defineProperty(l, "prototype", { writable: !1 }), l;
    }
    function w(l, r) {
      if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
      l.prototype = Object.create(r && r.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), Object.defineProperty(l, "prototype", { writable: !1 }), r && Z(l, r);
    }
    function Z(l, r) {
      return Z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(y, b) {
        return y.__proto__ = b, y;
      }, Z(l, r);
    }
    function X(l) {
      var r = W();
      return function() {
        var y, b = a(l);
        if (r) {
          var u = a(this).constructor;
          y = Reflect.construct(b, arguments, u);
        } else y = b.apply(this, arguments);
        return te(this, y);
      };
    }
    function te(l, r) {
      if (r && (F(r) == "object" || typeof r == "function")) return r;
      if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return G(l);
    }
    function G(l) {
      if (l === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return l;
    }
    function W() {
      try {
        var l = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch {
      }
      return (W = function() {
        return !!l;
      })();
    }
    function a(l) {
      return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
      }, a(l);
    }
    function s(l, r, y) {
      return (r = c(r)) in l ? Object.defineProperty(l, r, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : l[r] = y, l;
    }
    function c(l) {
      var r = T(l, "string");
      return F(r) == "symbol" ? r : r + "";
    }
    function T(l, r) {
      if (F(l) != "object" || !l) return l;
      var y = l[Symbol.toPrimitive];
      if (y !== void 0) {
        var b = y.call(l, r);
        if (F(b) != "object") return b;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(l);
    }
    i.default = /* @__PURE__ */ (function(l) {
      w(y, l);
      var r = X(y);
      function y(b) {
        var u;
        return R(this, y), u = r.call(this, b), s(G(u), "innerSliderRefHandler", function(d) {
          return u.innerSlider = d;
        }), s(G(u), "slickPrev", function() {
          return u.innerSlider.slickPrev();
        }), s(G(u), "slickNext", function() {
          return u.innerSlider.slickNext();
        }), s(G(u), "slickGoTo", function(d) {
          var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return u.innerSlider.slickGoTo(d, O);
        }), s(G(u), "slickPause", function() {
          return u.innerSlider.pause("paused");
        }), s(G(u), "slickPlay", function() {
          return u.innerSlider.autoPlay("play");
        }), u.state = {
          breakpoint: null
        }, u._responsiveMediaHandlers = [], u;
      }
      return M(y, [{
        key: "media",
        value: function(u, d) {
          var O = window.matchMedia(u), k = function(K) {
            var o = K.matches;
            o && d();
          };
          O.addListener(k), this._responsiveMediaHandlers.push({
            mql: O,
            query: u,
            listener: k
          });
        }
        // handles responsive breakpoints
      }, {
        key: "componentDidMount",
        value: function() {
          var u = this;
          if (this.props.responsive) {
            var d = this.props.responsive.map(function(k) {
              return k.breakpoint;
            });
            d.sort(function(k, t) {
              return k - t;
            }), d.forEach(function(k, t) {
              var K;
              t === 0 ? K = (0, h.default)({
                minWidth: 0,
                maxWidth: k
              }) : K = (0, h.default)({
                minWidth: d[t - 1] + 1,
                maxWidth: k
              }), (0, x.canUseDOM)() && u.media(K, function() {
                u.setState({
                  breakpoint: k
                });
              });
            });
            var O = (0, h.default)({
              minWidth: d.slice(-1)[0]
            });
            (0, x.canUseDOM)() && this.media(O, function() {
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
          var u = this, d, O;
          this.state.breakpoint ? (O = this.props.responsive.filter(function(C) {
            return C.breakpoint === u.state.breakpoint;
          }), d = O[0].settings === "unslick" ? "unslick" : Q(Q(Q({}, g.default), this.props), O[0].settings)) : d = Q(Q({}, g.default), this.props), d.centerMode && (d.slidesToScroll > 1 && f.NODE_ENV, d.slidesToScroll = 1), d.fade && (d.slidesToShow > 1 && f.NODE_ENV, d.slidesToScroll > 1 && f.NODE_ENV, d.slidesToShow = 1, d.slidesToScroll = 1);
          var k = v.default.Children.toArray(this.props.children);
          k = k.filter(function(C) {
            return typeof C == "string" ? !!C.trim() : !!C;
          }), d.variableWidth && (d.rows > 1 || d.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), d.variableWidth = !1);
          for (var t = [], K = null, o = 0; o < k.length; o += d.rows * d.slidesPerRow) {
            for (var e = [], n = o; n < o + d.rows * d.slidesPerRow; n += d.slidesPerRow) {
              for (var p = [], _ = n; _ < n + d.slidesPerRow && (d.variableWidth && k[_].props.style && (K = k[_].props.style.width), !(_ >= k.length)); _ += 1)
                p.push(/* @__PURE__ */ v.default.cloneElement(k[_], {
                  key: 100 * o + 10 * n + _,
                  tabIndex: -1,
                  style: {
                    width: "".concat(100 / d.slidesPerRow, "%"),
                    display: "inline-block"
                  }
                }));
              e.push(/* @__PURE__ */ v.default.createElement("div", {
                key: 10 * o + n
              }, p));
            }
            d.variableWidth ? t.push(/* @__PURE__ */ v.default.createElement("div", {
              key: o,
              style: {
                width: K
              }
            }, e)) : t.push(/* @__PURE__ */ v.default.createElement("div", {
              key: o
            }, e));
          }
          if (d === "unslick") {
            var S = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ v.default.createElement("div", {
              className: S
            }, k);
          } else t.length <= d.slidesToShow && (d.unslick = !0);
          return /* @__PURE__ */ v.default.createElement(m.InnerSlider, N({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, (0, x.filterSettings)(d)), t);
        }
      }]), y;
    })(v.default.Component);
  })(Te)), Te;
}
var Ye;
function Dt() {
  return Ye || (Ye = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var f = v(zt());
    function v(m) {
      return m && m.__esModule ? m : { default: m };
    }
    i.default = f.default;
  })(Pe)), Pe;
}
var Nt = Dt();
const It = /* @__PURE__ */ it(Nt);
function Ht({
  tab: i = {},
  // { text: string, image: string, imageAlt: string }
  isActive: f = !1,
  onClick: v = () => {
  },
  index: m = 0,
  className: h = "",
  largeImage: g = !1
  // if true, set image size to 48x48 even to mobile
}) {
  return i ? /* @__PURE__ */ A("div", { className: h, children: /* @__PURE__ */ le(
    "button",
    {
      onClick: v,
      className: `inline-flex justify-center items-center gap-4 xl:gap-10 rounded-full border transition-all duration-300 p-tabbed-loz--padding cursor-pointer hover:bg-grey-600 hover:text-white focus-visible:bg-grey-600 focus-visible:text-white min-w-[110px] ${f ? "border-grey-600 bg-grey-600 text-white" : "border-grey-600 bg-grey-100 text-grey-950"}`,
      children: [
        i.image && /* @__PURE__ */ A(
          "img",
          {
            src: i.image,
            alt: i.imageAlt || "",
            className: `rounded-full object-cover ${g ? "w-48 h-48" : "w-24 h-24 xl:w-48 xl:h-48"}`
          }
        ),
        i.text && /* @__PURE__ */ A("span", { className: "text-body-default", children: i.text })
      ]
    }
  ) }, m) : null;
}
function At({
  /**
   * The tab object.
   * - text: string
   * - image: string
   * - imageAlt: string
   * - content: string
   */
  tab: i = {},
  /**
   * !!! IGNORE IN COMPONENT. REMOVE THESE FROM REPEATER ITEM SETTINGS.
   * Below are (optional) props when used in a `Tabbed` component. 
   * 
   * The main component handles these to make sure items uniform.
   * But if you use this molecule as standalone, you can use the props below.
   */
  isActive: f = !1,
  onClick: v = () => {
  },
  index: m = 0,
  className: h = "",
  hasBorder: g = !0
}) {
  return i ? /* @__PURE__ */ le(
    "button",
    {
      onClick: v,
      className: `relative flex flex-col items-center justify-center gap-10 p-20 min-h-[219px] min-w-[110px] xl:min-w-[120px] w-full transition-all duration-300 rounded-0 bg-white hover:bg-grey-50 focus-visible:bg-grey-50 cursor-pointer ${h} border-t border-grey-400 
      ${g ? "border" : ""}
      ${f ? "border-t-[11px] border-b-0" : ""}
      `,
      children: [
        i.image && /* @__PURE__ */ A(
          "img",
          {
            src: i.image,
            alt: i.imageAlt || "",
            className: "w-48 h-48 object-cover rounded-full"
          }
        ),
        i.text && /* @__PURE__ */ A("div", { className: "max-w-[200px]", children: typeof i.text == "string" ? /* @__PURE__ */ A("div", { dangerouslySetInnerHTML: { __html: i.text } }) : /* @__PURE__ */ A("div", { children: i.text }) })
      ]
    },
    m
  ) : null;
}
function Wt({
  tab: i = {},
  isActive: f = !1,
  onClick: v = () => {
  },
  index: m = 0,
  className: h = ""
}) {
  return i ? /* @__PURE__ */ A(
    "button",
    {
      onClick: v,
      className: `h-44px flex flex-row justify-start items-center gap-10 self-stretch border-b border-x transition-all duration-300  p-tabbed-row--padding cursor-pointer hover:bg-grey-300 focus-visible:bg-grey-300 ${f ? "border-grey-400 bg-grey-300" : "border-grey-400 bg-white"}
      ${m === 0 ? "border-t" : ""}
      ${h}`,
      children: i.text && /* @__PURE__ */ A("span", { className: "text-body-default", children: i.text })
    }
  ) : null;
}
function Bt({
  tabs: i = [],
  // @reference `TabBlocksMolecule` | `TabbedLozengesMolecule` | `TabbedRowMolecule`
  type: f = "lozenges",
  // 'lozenges' | 'blocks' | 'aside'
  defaultActiveIndex: v = 0,
  className: m = ""
}) {
  var Q;
  const [h, g] = ke(v), [x, L] = ke(!1), F = rt(null);
  if (nt(() => {
    const R = () => {
      typeof window < "u" && L(window.innerWidth < 768);
    };
    return R(), window.addEventListener("resize", R), () => {
      window.removeEventListener("resize", R);
    };
  }, []), !i || i.length === 0)
    return null;
  const N = (R) => {
    g(R);
  }, B = () => /* @__PURE__ */ A("div", { className: "mt-20 relative min-h-100", children: i.map((R, Y) => /* @__PURE__ */ A(
    "div",
    {
      className: `transition-opacity duration-300 wysiwyg ${h === Y ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`,
      children: typeof R.content == "string" ? /* @__PURE__ */ A("div", { dangerouslySetInnerHTML: { __html: R.content } }) : /* @__PURE__ */ A("div", { children: R.content })
    },
    R.key || Y
  )) });
  if (f === "lozenges")
    return /* @__PURE__ */ le("div", { className: `${m}`, children: [
      /* @__PURE__ */ A("div", { className: "flex flex-wrap justify-center gap-x-tabbed-lozs--spacing-x gap-y-tabbed-lozs--spacing-y", children: i.map((R, Y) => /* @__PURE__ */ A(
        Ht,
        {
          tab: R,
          isActive: h === Y,
          onClick: () => N(Y),
          index: Y
        },
        R.key || Y
      )) }),
      B()
    ] });
  if (f === "blocks") {
    const R = i.length, Y = R < 5, M = R > 5, w = R === 5, Z = (G, W) => G === W, X = (G, W) => G !== W, te = {
      infinite: !0,
      autoplay: !0,
      autoplaySpeed: 4e3,
      speed: 500,
      arrows: !1,
      dots: !1,
      centerMode: !x && M,
      // center active when we have more than 5 on desktop
      centerPadding: "0px",
      slidesToShow: Math.min(x ? 2 : 5, i.length),
      slidesToScroll: 1,
      beforeChange: (G, W) => {
        g(W);
      },
      className: `border-grey-400
        ${(Y || w) && !x ? "border-x" : "border-r"}
      `
    };
    return /* @__PURE__ */ le("div", { className: m, children: [
      /* @__PURE__ */ A("div", { className: `border-grey-400 
          ${Y ? "md:flex md:justify-center" : ""}
        `, children: /* @__PURE__ */ A(It, { ref: F, ...te, children: i.map((G, W) => /* @__PURE__ */ A("div", { className: `
                border-grey-400  transition-all duration-200
                ${X(W, 0) || (M || x) && Z(W, 0) ? " border-l" : ""}
                ${h !== W ? "border-b" : ""}
              `, children: /* @__PURE__ */ A(
        At,
        {
          tab: G,
          isActive: h === W,
          onClick: () => {
            F.current && F.current.slickGoTo(W);
          },
          index: W,
          hasBorder: !1
        }
      ) }, G.key || W)) }) }),
      B()
    ] });
  }
  if (f === "aside") {
    const [R, Y] = ke(!1);
    return /* @__PURE__ */ le("div", { className: m, children: [
      /* @__PURE__ */ le("div", { className: "hidden md:flex md:flex-row gap-64", children: [
        /* @__PURE__ */ A("div", { className: "flex flex-col min-w-[267px]", children: i.map((M, w) => /* @__PURE__ */ A(
          Wt,
          {
            tab: M,
            isActive: h === w,
            onClick: () => N(w),
            index: w
          },
          M.key || w
        )) }),
        /* @__PURE__ */ A("div", { className: "flex-1 relative min-h-[200px] wysiwyg", children: i.map((M, w) => /* @__PURE__ */ A(
          "div",
          {
            className: `transition-opacity duration-300 ${h === w ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`,
            children: typeof M.content == "string" ? /* @__PURE__ */ A("div", { dangerouslySetInnerHTML: { __html: M.content } }) : /* @__PURE__ */ A("div", { children: M.content })
          },
          M.key || w
        )) })
      ] }),
      /* @__PURE__ */ le("div", { className: "md:hidden relative", children: [
        /* @__PURE__ */ le(
          "button",
          {
            onClick: () => Y(!R),
            className: "w-full h-11 flex items-center justify-between px-3 rounded-lg border border-gray-900 bg-white",
            children: [
              /* @__PURE__ */ A("span", { className: "text-body-default", children: ((Q = i[h]) == null ? void 0 : Q.text) || "Select tab" }),
              /* @__PURE__ */ A(
                "svg",
                {
                  className: `w-5 h-5 transition-transform ${R ? "rotate-180" : ""}`,
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ A("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
                }
              )
            ]
          }
        ),
        R && /* @__PURE__ */ A("div", { className: "absolute top-[44px] left-0 right-0 mt-1 rounded-lg border border-gray-900 bg-white z-10 shadow-lg", children: i.map((M, w) => /* @__PURE__ */ A(
          "button",
          {
            onClick: () => {
              N(w), Y(!1);
            },
            className: `w-full text-left px-12 py-10 border-b border-grey-200 last:border-b-0 transition-colors ${h === w ? "bg-grey-100" : "hover:bg-grey-50 focus-visible:bg-grey-50"}`,
            children: /* @__PURE__ */ A("span", { className: "text-body-default", children: M.text })
          },
          M.key || w
        )) }),
        /* @__PURE__ */ A("div", { className: "mt-20 relative min-h-[200px] wysiwyg", children: i.map((M, w) => /* @__PURE__ */ A(
          "div",
          {
            className: `transition-opacity duration-300 ${h === w ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`,
            children: typeof M.content == "string" ? /* @__PURE__ */ A("div", { dangerouslySetInnerHTML: { __html: M.content } }) : /* @__PURE__ */ A("div", { children: M.content })
          },
          M.key || w
        )) })
      ] })
    ] });
  }
  return null;
}
export {
  Bt as default
};
