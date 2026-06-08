import { jsx as W, jsxs as le } from "react/jsx-runtime";
import ce, { useState as ke, useRef as rt, useEffect as nt } from "react";
var me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function it(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function ot(i) {
  if (Object.prototype.hasOwnProperty.call(i, "__esModule")) return i;
  var c = i.default;
  if (typeof c == "function") {
    var y = function m() {
      return this instanceof m ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    y.prototype = c.prototype;
  } else y = {};
  return Object.defineProperty(y, "__esModule", { value: !0 }), Object.keys(i).forEach(function(m) {
    var v = Object.getOwnPropertyDescriptor(i, m);
    Object.defineProperty(y, m, v.get ? v : {
      enumerable: !0,
      get: function() {
        return i[m];
      }
    });
  }), y;
}
var Pe = {}, Te = {}, ve = {}, Ce = {}, De;
function at() {
  return De || (De = 1, (function(i) {
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
  })(Ce)), Ce;
}
var je, Ne;
function lt() {
  if (Ne) return je;
  Ne = 1;
  var i = "Expected a function", c = NaN, y = "[object Symbol]", m = /^\s+|\s+$/g, v = /^[-+]0x[0-9a-f]+$/i, g = /^0b[01]+$/i, x = /^0o[0-7]+$/i, L = parseInt, X = typeof me == "object" && me && me.Object === Object && me, q = typeof self == "object" && self && self.Object === Object && self, D = X || q || Function("return this")(), Z = Object.prototype, R = Z.toString, K = Math.max, M = Math.min, _ = function() {
    return D.Date.now();
  };
  function ee(a, s, f) {
    var d, l, r, h, S, u, b = 0, O = !1, T = !1, t = !0;
    if (typeof a != "function")
      throw new TypeError(i);
    s = N(s) || 0, $(f) && (O = !!f.leading, T = "maxWait" in f, r = T ? K(N(f.maxWait) || 0, s) : r, t = "trailing" in f ? !!f.trailing : t);
    function B(j) {
      var H = d, A = l;
      return d = l = void 0, b = j, h = a.apply(A, H), h;
    }
    function o(j) {
      return b = j, S = setTimeout(p, s), O ? B(j) : h;
    }
    function e(j) {
      var H = j - u, A = j - b, F = s - H;
      return T ? M(F, r - A) : F;
    }
    function n(j) {
      var H = j - u, A = j - b;
      return u === void 0 || H >= s || H < 0 || T && A >= r;
    }
    function p() {
      var j = _();
      if (n(j))
        return P(j);
      S = setTimeout(p, e(j));
    }
    function P(j) {
      return S = void 0, t && d ? B(j) : (d = l = void 0, h);
    }
    function w() {
      S !== void 0 && clearTimeout(S), b = 0, d = u = l = S = void 0;
    }
    function C() {
      return S === void 0 ? h : P(_());
    }
    function k() {
      var j = _(), H = n(j);
      if (d = arguments, l = this, u = j, H) {
        if (S === void 0)
          return o(u);
        if (T)
          return S = setTimeout(p, s), B(u);
      }
      return S === void 0 && (S = setTimeout(p, s)), h;
    }
    return k.cancel = w, k.flush = C, k;
  }
  function $(a) {
    var s = typeof a;
    return !!a && (s == "object" || s == "function");
  }
  function Q(a) {
    return !!a && typeof a == "object";
  }
  function V(a) {
    return typeof a == "symbol" || Q(a) && R.call(a) == y;
  }
  function N(a) {
    if (typeof a == "number")
      return a;
    if (V(a))
      return c;
    if ($(a)) {
      var s = typeof a.valueOf == "function" ? a.valueOf() : a;
      a = $(s) ? s + "" : s;
    }
    if (typeof a != "string")
      return a === 0 ? a : +a;
    a = a.replace(m, "");
    var f = g.test(a);
    return f || x.test(a) ? L(a.slice(2), f ? 2 : 8) : v.test(a) ? c : +a;
  }
  return je = ee, je;
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
      var c = {}.hasOwnProperty;
      function y() {
        for (var g = "", x = 0; x < arguments.length; x++) {
          var L = arguments[x];
          L && (g = v(g, m(L)));
        }
        return g;
      }
      function m(g) {
        if (typeof g == "string" || typeof g == "number")
          return g;
        if (typeof g != "object")
          return "";
        if (Array.isArray(g))
          return y.apply(null, g);
        if (g.toString !== Object.prototype.toString && !g.toString.toString().includes("[native code]"))
          return g.toString();
        var x = "";
        for (var L in g)
          c.call(g, L) && g[L] && (x = v(x, L));
        return x;
      }
      function v(g, x) {
        return x ? g ? g + " " + x : g + x : g;
      }
      i.exports ? (y.default = y, i.exports = y) : window.classNames = y;
    })();
  })(Ee)), Ee.exports;
}
var E = {}, xe = {}, He;
function Ue() {
  return He || (He = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var c = y(ce);
    function y(v) {
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
  })(xe)), xe;
}
var Ae;
function ge() {
  if (Ae) return E;
  Ae = 1, Object.defineProperty(E, "__esModule", {
    value: !0
  }), E.checkSpecKeys = E.checkNavigable = E.changeSlide = E.canUseDOM = E.canGoNext = void 0, E.clamp = q, E.extractObject = void 0, E.filterSettings = B, E.validSettings = E.swipeStart = E.swipeMove = E.swipeEnd = E.slidesOnRight = E.slidesOnLeft = E.slideHandler = E.siblingDirection = E.safePreventDefault = E.lazyStartIndex = E.lazySlidesOnRight = E.lazySlidesOnLeft = E.lazyEndIndex = E.keyHandler = E.initializedState = E.getWidth = E.getTrackLeft = E.getTrackCSS = E.getTrackAnimateCSS = E.getTotalSlides = E.getSwipeDirection = E.getSlideCount = E.getRequiredLazySlides = E.getPreClones = E.getPostClones = E.getOnDemandLazySlides = E.getNavigableIndexes = E.getHeight = void 0;
  var i = y(ce), c = y(Ue());
  function y(o) {
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
      var p = Object.getOwnPropertySymbols(o);
      e && (p = p.filter(function(P) {
        return Object.getOwnPropertyDescriptor(o, P).enumerable;
      })), n.push.apply(n, p);
    }
    return n;
  }
  function g(o) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2 ? v(Object(n), !0).forEach(function(p) {
        x(o, p, n[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach(function(p) {
        Object.defineProperty(o, p, Object.getOwnPropertyDescriptor(n, p));
      });
    }
    return o;
  }
  function x(o, e, n) {
    return (e = L(e)) in o ? Object.defineProperty(o, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = n, o;
  }
  function L(o) {
    var e = X(o, "string");
    return m(e) == "symbol" ? e : e + "";
  }
  function X(o, e) {
    if (m(o) != "object" || !o) return o;
    var n = o[Symbol.toPrimitive];
    if (n !== void 0) {
      var p = n.call(o, e);
      if (m(p) != "object") return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(o);
  }
  function q(o, e, n) {
    return Math.max(e, Math.min(o, n));
  }
  var D = E.safePreventDefault = function(e) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(e._reactName) || e.preventDefault();
  }, Z = E.getOnDemandLazySlides = function(e) {
    for (var n = [], p = R(e), P = K(e), w = p; w < P; w++)
      e.lazyLoadedList.indexOf(w) < 0 && n.push(w);
    return n;
  };
  E.getRequiredLazySlides = function(e) {
    for (var n = [], p = R(e), P = K(e), w = p; w < P; w++)
      n.push(w);
    return n;
  };
  var R = E.lazyStartIndex = function(e) {
    return e.currentSlide - M(e);
  }, K = E.lazyEndIndex = function(e) {
    return e.currentSlide + _(e);
  }, M = E.lazySlidesOnLeft = function(e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }, _ = E.lazySlidesOnRight = function(e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }, ee = E.getWidth = function(e) {
    return e && e.offsetWidth || 0;
  }, $ = E.getHeight = function(e) {
    return e && e.offsetHeight || 0;
  }, Q = E.getSwipeDirection = function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, p, P, w, C;
    return p = e.startX - e.curX, P = e.startY - e.curY, w = Math.atan2(P, p), C = Math.round(w * 180 / Math.PI), C < 0 && (C = 360 - Math.abs(C)), C <= 45 && C >= 0 || C <= 360 && C >= 315 ? "left" : C >= 135 && C <= 225 ? "right" : n === !0 ? C >= 35 && C <= 135 ? "up" : "down" : "vertical";
  }, V = E.canGoNext = function(e) {
    var n = !0;
    return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (n = !1), n;
  };
  E.extractObject = function(e, n) {
    var p = {};
    return n.forEach(function(P) {
      return p[P] = e[P];
    }), p;
  }, E.initializedState = function(e) {
    var n = i.default.Children.count(e.children), p = e.listRef, P = Math.ceil(ee(p)), w = e.trackRef && e.trackRef.node, C = Math.ceil(ee(w)), k;
    if (e.vertical)
      k = P;
    else {
      var j = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding == "string" && e.centerPadding.slice(-1) === "%" && (j *= P / 100), k = Math.ceil((P - j) / e.slidesToShow);
    }
    var H = p && $(p.querySelector('[data-index="0"]')), A = H * e.slidesToShow, F = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && (F = n - 1 - e.initialSlide);
    var J = e.lazyLoadedList || [], U = Z(g(g({}, e), {}, {
      currentSlide: F,
      lazyLoadedList: J
    }));
    J = J.concat(U);
    var G = {
      slideCount: n,
      slideWidth: k,
      listWidth: P,
      trackWidth: C,
      currentSlide: F,
      slideHeight: H,
      listHeight: A,
      lazyLoadedList: J
    };
    return e.autoplaying === null && e.autoplay && (G.autoplaying = "playing"), G;
  }, E.slideHandler = function(e) {
    var n = e.waitForAnimate, p = e.animating, P = e.fade, w = e.infinite, C = e.index, k = e.slideCount, j = e.lazyLoad, H = e.currentSlide, A = e.centerMode, F = e.slidesToScroll, J = e.slidesToShow, U = e.useCSS, G = e.lazyLoadedList;
    if (n && p) return {};
    var I = C, Y, re, z, te = {}, ne = {}, ie = w ? C : q(C, 0, k - 1);
    if (P) {
      if (!w && (C < 0 || C >= k)) return {};
      C < 0 ? I = C + k : C >= k && (I = C - k), j && G.indexOf(I) < 0 && (G = G.concat(I)), te = {
        animating: !0,
        currentSlide: I,
        lazyLoadedList: G,
        targetSlide: I
      }, ne = {
        animating: !1,
        targetSlide: I
      };
    } else
      Y = I, I < 0 ? (Y = I + k, w ? k % F !== 0 && (Y = k - k % F) : Y = 0) : !V(e) && I > H ? I = Y = H : A && I >= k ? (I = w ? k : k - 1, Y = w ? 0 : k - 1) : I >= k && (Y = I - k, w ? k % F !== 0 && (Y = 0) : Y = k - J), !w && I + J >= k && (Y = k - J), re = r(g(g({}, e), {}, {
        slideIndex: I
      })), z = r(g(g({}, e), {}, {
        slideIndex: Y
      })), w || (re === z && (I = Y), re = z), j && (G = G.concat(Z(g(g({}, e), {}, {
        currentSlide: I
      })))), U ? (te = {
        animating: !0,
        currentSlide: Y,
        trackStyle: l(g(g({}, e), {}, {
          left: re
        })),
        lazyLoadedList: G,
        targetSlide: ie
      }, ne = {
        animating: !1,
        currentSlide: Y,
        trackStyle: d(g(g({}, e), {}, {
          left: z
        })),
        swipeLeft: null,
        targetSlide: ie
      }) : te = {
        currentSlide: Y,
        trackStyle: d(g(g({}, e), {}, {
          left: z
        })),
        lazyLoadedList: G,
        targetSlide: ie
      };
    return {
      state: te,
      nextState: ne
    };
  }, E.changeSlide = function(e, n) {
    var p, P, w, C, k, j = e.slidesToScroll, H = e.slidesToShow, A = e.slideCount, F = e.currentSlide, J = e.targetSlide, U = e.lazyLoad, G = e.infinite;
    if (C = A % j !== 0, p = C ? 0 : (A - F) % j, n.message === "previous")
      w = p === 0 ? j : H - p, k = F - w, U && !G && (P = F - w, k = P === -1 ? A - 1 : P), G || (k = J - j);
    else if (n.message === "next")
      w = p === 0 ? j : p, k = F + w, U && !G && (k = (F + j) % A + p), G || (k = J + j);
    else if (n.message === "dots")
      k = n.index * n.slidesToScroll;
    else if (n.message === "children") {
      if (k = n.index, G) {
        var I = b(g(g({}, e), {}, {
          targetSlide: k
        }));
        k > n.currentSlide && I === "left" ? k = k - A : k < n.currentSlide && I === "right" && (k = k + A);
      }
    } else n.message === "index" && (k = Number(n.index));
    return k;
  }, E.keyHandler = function(e, n, p) {
    return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n ? "" : e.keyCode === 37 ? p ? "next" : "previous" : e.keyCode === 39 ? p ? "previous" : "next" : "";
  }, E.swipeStart = function(e, n, p) {
    return e.target.tagName === "IMG" && D(e), !n || !p && e.type.indexOf("mouse") !== -1 ? "" : {
      dragging: !0,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY
      }
    };
  }, E.swipeMove = function(e, n) {
    var p = n.scrolling, P = n.animating, w = n.vertical, C = n.swipeToSlide, k = n.verticalSwiping, j = n.rtl, H = n.currentSlide, A = n.edgeFriction, F = n.edgeDragged, J = n.onEdge, U = n.swiped, G = n.swiping, I = n.slideCount, Y = n.slidesToScroll, re = n.infinite, z = n.touchObject, te = n.swipeEvent, ne = n.listHeight, ie = n.listWidth;
    if (!p) {
      if (P) return D(e);
      w && C && k && D(e);
      var oe, se = {}, be = r(n);
      z.curX = e.touches ? e.touches[0].pageX : e.clientX, z.curY = e.touches ? e.touches[0].pageY : e.clientY, z.swipeLength = Math.round(Math.sqrt(Math.pow(z.curX - z.startX, 2)));
      var ze = Math.round(Math.sqrt(Math.pow(z.curY - z.startY, 2)));
      if (!k && !G && ze > 10)
        return {
          scrolling: !0
        };
      k && (z.swipeLength = ze);
      var de = (j ? -1 : 1) * (z.curX > z.startX ? 1 : -1);
      k && (de = z.curY > z.startY ? 1 : -1);
      var tt = Math.ceil(I / Y), ae = Q(n.touchObject, k), pe = z.swipeLength;
      return re || (H === 0 && (ae === "right" || ae === "down") || H + 1 >= tt && (ae === "left" || ae === "up") || !V(n) && (ae === "left" || ae === "up")) && (pe = z.swipeLength * A, F === !1 && J && (J(ae), se.edgeDragged = !0)), !U && te && (te(ae), se.swiped = !0), w ? oe = be + pe * (ne / ie) * de : j ? oe = be - pe * de : oe = be + pe * de, k && (oe = be + pe * de), se = g(g({}, se), {}, {
        touchObject: z,
        swipeLeft: oe,
        trackStyle: d(g(g({}, n), {}, {
          left: oe
        }))
      }), Math.abs(z.curX - z.startX) < Math.abs(z.curY - z.startY) * 0.8 || z.swipeLength > 10 && (se.swiping = !0, D(e)), se;
    }
  }, E.swipeEnd = function(e, n) {
    var p = n.dragging, P = n.swipe, w = n.touchObject, C = n.listWidth, k = n.touchThreshold, j = n.verticalSwiping, H = n.listHeight, A = n.swipeToSlide, F = n.scrolling, J = n.onSwipe, U = n.targetSlide, G = n.currentSlide, I = n.infinite;
    if (!p)
      return P && D(e), {};
    var Y = j ? H / k : C / k, re = Q(w, j), z = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {}
    };
    if (F || !w.swipeLength)
      return z;
    if (w.swipeLength > Y) {
      D(e), J && J(re);
      var te, ne, ie = I ? G : U;
      switch (re) {
        case "left":
        case "up":
          ne = ie + s(n), te = A ? a(n, ne) : ne, z.currentDirection = 0;
          break;
        case "right":
        case "down":
          ne = ie - s(n), te = A ? a(n, ne) : ne, z.currentDirection = 1;
          break;
        default:
          te = ie;
      }
      z.triggerSlideHandler = te;
    } else {
      var oe = r(n);
      z.trackStyle = l(g(g({}, n), {}, {
        left: oe
      }));
    }
    return z;
  };
  var N = E.getNavigableIndexes = function(e) {
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, p = e.infinite ? e.slidesToShow * -1 : 0, P = e.infinite ? e.slidesToShow * -1 : 0, w = []; p < n; )
      w.push(p), p = P + e.slidesToScroll, P += Math.min(e.slidesToScroll, e.slidesToShow);
    return w;
  }, a = E.checkNavigable = function(e, n) {
    var p = N(e), P = 0;
    if (n > p[p.length - 1])
      n = p[p.length - 1];
    else
      for (var w in p) {
        if (n < p[w]) {
          n = P;
          break;
        }
        P = p[w];
      }
    return n;
  }, s = E.getSlideCount = function(e) {
    var n = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      var p, P = e.listRef, w = P.querySelectorAll && P.querySelectorAll(".slick-slide") || [];
      if (Array.from(w).every(function(j) {
        if (e.vertical) {
          if (j.offsetTop + $(j) / 2 > e.swipeLeft * -1)
            return p = j, !1;
        } else if (j.offsetLeft - n + ee(j) / 2 > e.swipeLeft * -1)
          return p = j, !1;
        return !0;
      }), !p)
        return 0;
      var C = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide, k = Math.abs(p.dataset.index - C) || 1;
      return k;
    } else
      return e.slidesToScroll;
  }, f = E.checkSpecKeys = function(e, n) {
    return n.reduce(function(p, P) {
      return p && e.hasOwnProperty(P);
    }, !0) ? null : console.error("Keys Missing:", e);
  }, d = E.getTrackCSS = function(e) {
    f(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
    var n, p;
    if (!e.vertical)
      n = u(e) * e.slideWidth;
    else {
      var P = e.unslick ? e.slideCount : e.slideCount + 2 * e.slidesToShow;
      p = P * e.slideHeight;
    }
    var w = {
      opacity: 1,
      transition: "",
      WebkitTransition: ""
    };
    if (e.useTransform) {
      var C = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", k = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", j = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
      w = g(g({}, w), {}, {
        WebkitTransform: C,
        transform: k,
        msTransform: j
      });
    } else
      e.vertical ? w.top = e.left : w.left = e.left;
    return e.fade && (w = {
      opacity: 1
    }), n && (w.width = n), p && (w.height = p), window && !window.addEventListener && window.attachEvent && (e.vertical ? w.marginTop = e.left + "px" : w.marginLeft = e.left + "px"), w;
  }, l = E.getTrackAnimateCSS = function(e) {
    f(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var n = d(e);
    return e.useTransform ? (n.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, n.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? n.transition = "top " + e.speed + "ms " + e.cssEase : n.transition = "left " + e.speed + "ms " + e.cssEase, n;
  }, r = E.getTrackLeft = function(e) {
    if (e.unslick)
      return 0;
    f(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var n = e.slideIndex, p = e.trackRef, P = e.infinite, w = e.centerMode, C = e.slideCount, k = e.slidesToShow, j = e.slidesToScroll, H = e.slideWidth, A = e.listWidth, F = e.variableWidth, J = e.slideHeight, U = e.fade, G = e.vertical, I = 0, Y, re, z = 0;
    if (U || e.slideCount === 1)
      return 0;
    var te = 0;
    if (P ? (te = -h(e), C % j !== 0 && n + j > C && (te = -(n > C ? k - (n - C) : C % j)), w && (te += parseInt(k / 2))) : (C % j !== 0 && n + j > C && (te = k - C % j), w && (te = parseInt(k / 2))), I = te * H, z = te * J, G ? Y = n * J * -1 + z : Y = n * H * -1 + I, F === !0) {
      var ne, ie = p && p.node;
      if (ne = n + h(e), re = ie && ie.childNodes[ne], Y = re ? re.offsetLeft * -1 : 0, w === !0) {
        ne = P ? n + h(e) : n, re = ie && ie.children[ne], Y = 0;
        for (var oe = 0; oe < ne; oe++)
          Y -= ie && ie.children[oe] && ie.children[oe].offsetWidth;
        Y -= parseInt(e.centerPadding), Y += re && (A - re.offsetWidth) / 2;
      }
    }
    return Y;
  }, h = E.getPreClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, S = E.getPostClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, u = E.getTotalSlides = function(e) {
    return e.slideCount === 1 ? 1 : h(e) + e.slideCount + S(e);
  }, b = E.siblingDirection = function(e) {
    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + O(e) ? "left" : "right" : e.targetSlide < e.currentSlide - T(e) ? "right" : "left";
  }, O = E.slidesOnRight = function(e) {
    var n = e.slidesToShow, p = e.centerMode, P = e.rtl, w = e.centerPadding;
    if (p) {
      var C = (n - 1) / 2 + 1;
      return parseInt(w) > 0 && (C += 1), P && n % 2 === 0 && (C += 1), C;
    }
    return P ? 0 : n - 1;
  }, T = E.slidesOnLeft = function(e) {
    var n = e.slidesToShow, p = e.centerMode, P = e.rtl, w = e.centerPadding;
    if (p) {
      var C = (n - 1) / 2 + 1;
      return parseInt(w) > 0 && (C += 1), !P && n % 2 === 0 && (C += 1), C;
    }
    return P ? n - 1 : 0;
  };
  E.canUseDOM = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  };
  var t = E.validSettings = Object.keys(c.default);
  function B(o) {
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
  var i = m(ce), c = m(Oe()), y = ge();
  function m(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function v(l) {
    "@babel/helpers - typeof";
    return v = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, v(l);
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
  function x(l, r) {
    if (!(l instanceof r)) throw new TypeError("Cannot call a class as a function");
  }
  function L(l, r) {
    for (var h = 0; h < r.length; h++) {
      var S = r[h];
      S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(l, V(S.key), S);
    }
  }
  function X(l, r, h) {
    return r && L(l.prototype, r), Object.defineProperty(l, "prototype", { writable: !1 }), l;
  }
  function q(l, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
    l.prototype = Object.create(r && r.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), Object.defineProperty(l, "prototype", { writable: !1 }), r && D(l, r);
  }
  function D(l, r) {
    return D = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(h, S) {
      return h.__proto__ = S, h;
    }, D(l, r);
  }
  function Z(l) {
    var r = M();
    return function() {
      var h, S = _(l);
      if (r) {
        var u = _(this).constructor;
        h = Reflect.construct(S, arguments, u);
      } else h = S.apply(this, arguments);
      return R(this, h);
    };
  }
  function R(l, r) {
    if (r && (v(r) == "object" || typeof r == "function")) return r;
    if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return K(l);
  }
  function K(l) {
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
  function _(l) {
    return _ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, _(l);
  }
  function ee(l, r) {
    var h = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      var S = Object.getOwnPropertySymbols(l);
      r && (S = S.filter(function(u) {
        return Object.getOwnPropertyDescriptor(l, u).enumerable;
      })), h.push.apply(h, S);
    }
    return h;
  }
  function $(l) {
    for (var r = 1; r < arguments.length; r++) {
      var h = arguments[r] != null ? arguments[r] : {};
      r % 2 ? ee(Object(h), !0).forEach(function(S) {
        Q(l, S, h[S]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(h)) : ee(Object(h)).forEach(function(S) {
        Object.defineProperty(l, S, Object.getOwnPropertyDescriptor(h, S));
      });
    }
    return l;
  }
  function Q(l, r, h) {
    return (r = V(r)) in l ? Object.defineProperty(l, r, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : l[r] = h, l;
  }
  function V(l) {
    var r = N(l, "string");
    return v(r) == "symbol" ? r : r + "";
  }
  function N(l, r) {
    if (v(l) != "object" || !l) return l;
    var h = l[Symbol.toPrimitive];
    if (h !== void 0) {
      var S = h.call(l, r);
      if (v(S) != "object") return S;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(l);
  }
  var a = function(r) {
    var h, S, u, b, O;
    r.rtl ? O = r.slideCount - 1 - r.index : O = r.index, u = O < 0 || O >= r.slideCount, r.centerMode ? (b = Math.floor(r.slidesToShow / 2), S = (O - r.currentSlide) % r.slideCount === 0, O > r.currentSlide - b - 1 && O <= r.currentSlide + b && (h = !0)) : h = r.currentSlide <= O && O < r.currentSlide + r.slidesToShow;
    var T;
    r.targetSlide < 0 ? T = r.targetSlide + r.slideCount : r.targetSlide >= r.slideCount ? T = r.targetSlide - r.slideCount : T = r.targetSlide;
    var t = O === T;
    return {
      "slick-slide": !0,
      "slick-active": h,
      "slick-center": S,
      "slick-cloned": u,
      "slick-current": t
      // dubious in case of RTL
    };
  }, s = function(r) {
    var h = {};
    return (r.variableWidth === void 0 || r.variableWidth === !1) && (h.width = r.slideWidth), r.fade && (h.position = "relative", r.vertical ? h.top = -r.index * parseInt(r.slideHeight) : h.left = -r.index * parseInt(r.slideWidth), h.opacity = r.currentSlide === r.index ? 1 : 0, h.zIndex = r.currentSlide === r.index ? 999 : 998, r.useCSS && (h.transition = "opacity " + r.speed + "ms " + r.cssEase + ", visibility " + r.speed + "ms " + r.cssEase)), h;
  }, f = function(r, h) {
    return r.key || h;
  }, d = function(r) {
    var h, S = [], u = [], b = [], O = i.default.Children.count(r.children), T = (0, y.lazyStartIndex)(r), t = (0, y.lazyEndIndex)(r);
    return i.default.Children.forEach(r.children, function(B, o) {
      var e, n = {
        message: "children",
        index: o,
        slidesToScroll: r.slidesToScroll,
        currentSlide: r.currentSlide
      };
      !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(o) >= 0 ? e = B : e = /* @__PURE__ */ i.default.createElement("div", null);
      var p = s($($({}, r), {}, {
        index: o
      })), P = e.props.className || "", w = a($($({}, r), {}, {
        index: o
      }));
      if (S.push(/* @__PURE__ */ i.default.cloneElement(e, {
        key: "original" + f(e, o),
        "data-index": o,
        className: (0, c.default)(w, P),
        tabIndex: "-1",
        "aria-hidden": !w["slick-active"],
        style: $($({
          outline: "none"
        }, e.props.style || {}), p),
        onClick: function(j) {
          e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
        }
      })), r.infinite && O > 1 && r.fade === !1 && !r.unslick) {
        var C = O - o;
        C <= (0, y.getPreClones)(r) && (h = -C, h >= T && (e = B), w = a($($({}, r), {}, {
          index: h
        })), u.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "precloned" + f(e, h),
          "data-index": h,
          tabIndex: "-1",
          className: (0, c.default)(w, P),
          "aria-hidden": !w["slick-active"],
          style: $($({}, e.props.style || {}), p),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        }))), o < (0, y.getPostClones)(r) && (h = O + o, h < t && (e = B), w = a($($({}, r), {}, {
          index: h
        })), b.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "postcloned" + f(e, h),
          "data-index": h,
          tabIndex: "-1",
          className: (0, c.default)(w, P),
          "aria-hidden": !w["slick-active"],
          style: $($({}, e.props.style || {}), p),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        })));
      }
    }), r.rtl ? u.concat(S, b).reverse() : u.concat(S, b);
  };
  return he.Track = /* @__PURE__ */ (function(l) {
    q(h, l);
    var r = Z(h);
    function h() {
      var S;
      x(this, h);
      for (var u = arguments.length, b = new Array(u), O = 0; O < u; O++)
        b[O] = arguments[O];
      return S = r.call.apply(r, [this].concat(b)), Q(K(S), "node", null), Q(K(S), "handleRef", function(T) {
        S.node = T;
      }), S;
    }
    return X(h, [{
      key: "render",
      value: function() {
        var u = d(this.props), b = this.props, O = b.onMouseEnter, T = b.onMouseOver, t = b.onMouseLeave, B = {
          onMouseEnter: O,
          onMouseOver: T,
          onMouseLeave: t
        };
        return /* @__PURE__ */ i.default.createElement("div", g({
          ref: this.handleRef,
          className: "slick-track",
          style: this.props.trackStyle
        }, B), u);
      }
    }]), h;
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
  var c = v(ce), y = v(Oe()), m = ge();
  function v(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function g(a, s) {
    var f = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      s && (d = d.filter(function(l) {
        return Object.getOwnPropertyDescriptor(a, l).enumerable;
      })), f.push.apply(f, d);
    }
    return f;
  }
  function x(a) {
    for (var s = 1; s < arguments.length; s++) {
      var f = arguments[s] != null ? arguments[s] : {};
      s % 2 ? g(Object(f), !0).forEach(function(d) {
        L(a, d, f[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(f)) : g(Object(f)).forEach(function(d) {
        Object.defineProperty(a, d, Object.getOwnPropertyDescriptor(f, d));
      });
    }
    return a;
  }
  function L(a, s, f) {
    return (s = Z(s)) in a ? Object.defineProperty(a, s, { value: f, enumerable: !0, configurable: !0, writable: !0 }) : a[s] = f, a;
  }
  function X(a, s) {
    if (!(a instanceof s)) throw new TypeError("Cannot call a class as a function");
  }
  function q(a, s) {
    for (var f = 0; f < s.length; f++) {
      var d = s[f];
      d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, Z(d.key), d);
    }
  }
  function D(a, s, f) {
    return s && q(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function Z(a) {
    var s = R(a, "string");
    return i(s) == "symbol" ? s : s + "";
  }
  function R(a, s) {
    if (i(a) != "object" || !a) return a;
    var f = a[Symbol.toPrimitive];
    if (f !== void 0) {
      var d = f.call(a, s);
      if (i(d) != "object") return d;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  function K(a, s) {
    if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(s && s.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), s && M(a, s);
  }
  function M(a, s) {
    return M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(f, d) {
      return f.__proto__ = d, f;
    }, M(a, s);
  }
  function _(a) {
    var s = Q();
    return function() {
      var f, d = V(a);
      if (s) {
        var l = V(this).constructor;
        f = Reflect.construct(d, arguments, l);
      } else f = d.apply(this, arguments);
      return ee(this, f);
    };
  }
  function ee(a, s) {
    if (s && (i(s) == "object" || typeof s == "function")) return s;
    if (s !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $(a);
  }
  function $(a) {
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
    return V = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, V(a);
  }
  var N = function(s) {
    var f;
    return s.infinite ? f = Math.ceil(s.slideCount / s.slidesToScroll) : f = Math.ceil((s.slideCount - s.slidesToShow) / s.slidesToScroll) + 1, f;
  };
  return ye.Dots = /* @__PURE__ */ (function(a) {
    K(f, a);
    var s = _(f);
    function f() {
      return X(this, f), s.apply(this, arguments);
    }
    return D(f, [{
      key: "clickHandler",
      value: function(l, r) {
        r.preventDefault(), this.props.clickHandler(l);
      }
    }, {
      key: "render",
      value: function() {
        for (var l = this.props, r = l.onMouseEnter, h = l.onMouseOver, S = l.onMouseLeave, u = l.infinite, b = l.slidesToScroll, O = l.slidesToShow, T = l.slideCount, t = l.currentSlide, B = N({
          slideCount: T,
          slidesToScroll: b,
          slidesToShow: O,
          infinite: u
        }), o = {
          onMouseEnter: r,
          onMouseOver: h,
          onMouseLeave: S
        }, e = [], n = 0; n < B; n++) {
          var p = (n + 1) * b - 1, P = u ? p : (0, m.clamp)(p, 0, T - 1), w = P - (b - 1), C = u ? w : (0, m.clamp)(w, 0, T - 1), k = (0, y.default)({
            "slick-active": u ? t >= C && t <= P : t === C
          }), j = {
            message: "dots",
            index: n,
            slidesToScroll: b,
            currentSlide: t
          }, H = this.clickHandler.bind(this, j);
          e = e.concat(/* @__PURE__ */ c.default.createElement("li", {
            key: n,
            className: k
          }, /* @__PURE__ */ c.default.cloneElement(this.props.customPaging(n), {
            onClick: H
          })));
        }
        return /* @__PURE__ */ c.default.cloneElement(this.props.appendDots(e), x({
          className: this.props.dotsClass
        }, o));
      }
    }]), f;
  })(c.default.PureComponent), ye;
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
  var c = v(ce), y = v(Oe()), m = ge();
  function v(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(a) {
      for (var s = 1; s < arguments.length; s++) {
        var f = arguments[s];
        for (var d in f)
          ({}).hasOwnProperty.call(f, d) && (a[d] = f[d]);
      }
      return a;
    }, g.apply(null, arguments);
  }
  function x(a, s) {
    var f = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      s && (d = d.filter(function(l) {
        return Object.getOwnPropertyDescriptor(a, l).enumerable;
      })), f.push.apply(f, d);
    }
    return f;
  }
  function L(a) {
    for (var s = 1; s < arguments.length; s++) {
      var f = arguments[s] != null ? arguments[s] : {};
      s % 2 ? x(Object(f), !0).forEach(function(d) {
        X(a, d, f[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(f)) : x(Object(f)).forEach(function(d) {
        Object.defineProperty(a, d, Object.getOwnPropertyDescriptor(f, d));
      });
    }
    return a;
  }
  function X(a, s, f) {
    return (s = R(s)) in a ? Object.defineProperty(a, s, { value: f, enumerable: !0, configurable: !0, writable: !0 }) : a[s] = f, a;
  }
  function q(a, s) {
    if (!(a instanceof s)) throw new TypeError("Cannot call a class as a function");
  }
  function D(a, s) {
    for (var f = 0; f < s.length; f++) {
      var d = s[f];
      d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, R(d.key), d);
    }
  }
  function Z(a, s, f) {
    return s && D(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function R(a) {
    var s = K(a, "string");
    return i(s) == "symbol" ? s : s + "";
  }
  function K(a, s) {
    if (i(a) != "object" || !a) return a;
    var f = a[Symbol.toPrimitive];
    if (f !== void 0) {
      var d = f.call(a, s);
      if (i(d) != "object") return d;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  function M(a, s) {
    if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(s && s.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), s && _(a, s);
  }
  function _(a, s) {
    return _ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(f, d) {
      return f.__proto__ = d, f;
    }, _(a, s);
  }
  function ee(a) {
    var s = V();
    return function() {
      var f, d = N(a);
      if (s) {
        var l = N(this).constructor;
        f = Reflect.construct(d, arguments, l);
      } else f = d.apply(this, arguments);
      return $(this, f);
    };
  }
  function $(a, s) {
    if (s && (i(s) == "object" || typeof s == "function")) return s;
    if (s !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
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
  function N(a) {
    return N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, N(a);
  }
  return ue.PrevArrow = /* @__PURE__ */ (function(a) {
    M(f, a);
    var s = ee(f);
    function f() {
      return q(this, f), s.apply(this, arguments);
    }
    return Z(f, [{
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
          className: (0, y.default)(l),
          style: {
            display: "block"
          },
          onClick: r
        }, S = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, u;
        return this.props.prevArrow ? u = /* @__PURE__ */ c.default.cloneElement(this.props.prevArrow, L(L({}, h), S)) : u = /* @__PURE__ */ c.default.createElement("button", g({
          key: "0",
          type: "button"
        }, h), " ", "Previous"), u;
      }
    }]), f;
  })(c.default.PureComponent), ue.NextArrow = /* @__PURE__ */ (function(a) {
    M(f, a);
    var s = ee(f);
    function f() {
      return q(this, f), s.apply(this, arguments);
    }
    return Z(f, [{
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
          className: (0, y.default)(l),
          style: {
            display: "block"
          },
          onClick: r
        }, S = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, u;
        return this.props.nextArrow ? u = /* @__PURE__ */ c.default.cloneElement(this.props.nextArrow, L(L({}, h), S)) : u = /* @__PURE__ */ c.default.createElement("button", g({
          key: "1",
          type: "button"
        }, h), " ", "Next"), u;
      }
    }]), f;
  })(c.default.PureComponent), ue;
}
var Ve = (function() {
  if (typeof Map < "u")
    return Map;
  function i(c, y) {
    var m = -1;
    return c.some(function(v, g) {
      return v[0] === y ? (m = g, !0) : !1;
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
      }), c.prototype.get = function(y) {
        var m = i(this.__entries__, y), v = this.__entries__[m];
        return v && v[1];
      }, c.prototype.set = function(y, m) {
        var v = i(this.__entries__, y);
        ~v ? this.__entries__[v][1] = m : this.__entries__.push([y, m]);
      }, c.prototype.delete = function(y) {
        var m = this.__entries__, v = i(m, y);
        ~v && m.splice(v, 1);
      }, c.prototype.has = function(y) {
        return !!~i(this.__entries__, y);
      }, c.prototype.clear = function() {
        this.__entries__.splice(0);
      }, c.prototype.forEach = function(y, m) {
        m === void 0 && (m = null);
        for (var v = 0, g = this.__entries__; v < g.length; v++) {
          var x = g[v];
          y.call(m, x[1], x[0]);
        }
      }, c;
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
function pt(i, c) {
  var y = !1, m = !1, v = 0;
  function g() {
    y && (y = !1, i()), m && L();
  }
  function x() {
    ft(g);
  }
  function L() {
    var X = Date.now();
    if (y) {
      if (X - v < dt)
        return;
      m = !0;
    } else
      y = !0, m = !1, setTimeout(x, c);
    v = X;
  }
  return L;
}
var vt = 20, ht = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], yt = typeof MutationObserver < "u", gt = (
  /** @class */
  (function() {
    function i() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = pt(this.refresh.bind(this), vt);
    }
    return i.prototype.addObserver = function(c) {
      ~this.observers_.indexOf(c) || this.observers_.push(c), this.connected_ || this.connect_();
    }, i.prototype.removeObserver = function(c) {
      var y = this.observers_, m = y.indexOf(c);
      ~m && y.splice(m, 1), !y.length && this.connected_ && this.disconnect_();
    }, i.prototype.refresh = function() {
      var c = this.updateObservers_();
      c && this.refresh();
    }, i.prototype.updateObservers_ = function() {
      var c = this.observers_.filter(function(y) {
        return y.gatherActive(), y.hasActive();
      });
      return c.forEach(function(y) {
        return y.broadcastActive();
      }), c.length > 0;
    }, i.prototype.connect_ = function() {
      !Re || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), yt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, i.prototype.disconnect_ = function() {
      !Re || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, i.prototype.onTransitionEnd_ = function(c) {
      var y = c.propertyName, m = y === void 0 ? "" : y, v = ht.some(function(g) {
        return !!~m.indexOf(g);
      });
      v && this.refresh();
    }, i.getInstance = function() {
      return this.instance_ || (this.instance_ = new i()), this.instance_;
    }, i.instance_ = null, i;
  })()
), Je = (function(i, c) {
  for (var y = 0, m = Object.keys(c); y < m.length; y++) {
    var v = m[y];
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
  return c || Se;
}), Qe = _e(0, 0, 0, 0);
function we(i) {
  return parseFloat(i) || 0;
}
function Be(i) {
  for (var c = [], y = 1; y < arguments.length; y++)
    c[y - 1] = arguments[y];
  return c.reduce(function(m, v) {
    var g = i["border-" + v + "-width"];
    return m + we(g);
  }, 0);
}
function bt(i) {
  for (var c = ["top", "right", "bottom", "left"], y = {}, m = 0, v = c; m < v.length; m++) {
    var g = v[m], x = i["padding-" + g];
    y[g] = we(x);
  }
  return y;
}
function mt(i) {
  var c = i.getBBox();
  return _e(0, 0, c.width, c.height);
}
function St(i) {
  var c = i.clientWidth, y = i.clientHeight;
  if (!c && !y)
    return Qe;
  var m = fe(i).getComputedStyle(i), v = bt(m), g = v.left + v.right, x = v.top + v.bottom, L = we(m.width), X = we(m.height);
  if (m.boxSizing === "border-box" && (Math.round(L + g) !== c && (L -= Be(m, "left", "right") + g), Math.round(X + x) !== y && (X -= Be(m, "top", "bottom") + x)), !Ot(i)) {
    var q = Math.round(L + g) - c, D = Math.round(X + x) - y;
    Math.abs(q) !== 1 && (L -= q), Math.abs(D) !== 1 && (X -= D);
  }
  return _e(v.left, v.top, L, X);
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
  var c = i.x, y = i.y, m = i.width, v = i.height, g = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, x = Object.create(g.prototype);
  return Je(x, {
    x: c,
    y,
    width: m,
    height: v,
    top: y,
    right: c + m,
    bottom: v + y,
    left: c
  }), x;
}
function _e(i, c, y, m) {
  return { x: i, y: c, width: y, height: m };
}
var Pt = (
  /** @class */
  (function() {
    function i(c) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = _e(0, 0, 0, 0), this.target = c;
    }
    return i.prototype.isActive = function() {
      var c = _t(this.target);
      return this.contentRect_ = c, c.width !== this.broadcastWidth || c.height !== this.broadcastHeight;
    }, i.prototype.broadcastRect = function() {
      var c = this.contentRect_;
      return this.broadcastWidth = c.width, this.broadcastHeight = c.height, c;
    }, i;
  })()
), Tt = (
  /** @class */
  /* @__PURE__ */ (function() {
    function i(c, y) {
      var m = kt(y);
      Je(this, { target: c, contentRect: m });
    }
    return i;
  })()
), Ct = (
  /** @class */
  (function() {
    function i(c, y, m) {
      if (this.activeObservations_ = [], this.observations_ = new Ve(), typeof c != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = c, this.controller_ = y, this.callbackCtx_ = m;
    }
    return i.prototype.observe = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof fe(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var y = this.observations_;
        y.has(c) || (y.set(c, new Pt(c)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, i.prototype.unobserve = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof fe(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var y = this.observations_;
        y.has(c) && (y.delete(c), y.size || this.controller_.removeObserver(this));
      }
    }, i.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, i.prototype.gatherActive = function() {
      var c = this;
      this.clearActive(), this.observations_.forEach(function(y) {
        y.isActive() && c.activeObservations_.push(y);
      });
    }, i.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var c = this.callbackCtx_, y = this.activeObservations_.map(function(m) {
          return new Tt(m.target, m.broadcastRect());
        });
        this.callback_.call(c, y, c), this.clearActive();
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
    function i(c) {
      if (!(this instanceof i))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var y = gt.getInstance(), m = new Ct(c, y, this);
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
    var c;
    return (c = Ze.get(this))[i].apply(c, arguments);
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
  var i = q(ce), c = q(at()), y = q(lt()), m = q(Oe()), v = ge(), g = st(), x = ut(), L = ct(), X = q(xt);
  function q(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function D(u) {
    "@babel/helpers - typeof";
    return D = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(b) {
      return typeof b;
    } : function(b) {
      return b && typeof Symbol == "function" && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b;
    }, D(u);
  }
  function Z() {
    return Z = Object.assign ? Object.assign.bind() : function(u) {
      for (var b = 1; b < arguments.length; b++) {
        var O = arguments[b];
        for (var T in O)
          ({}).hasOwnProperty.call(O, T) && (u[T] = O[T]);
      }
      return u;
    }, Z.apply(null, arguments);
  }
  function R(u, b) {
    if (u == null) return {};
    var O, T, t = K(u, b);
    if (Object.getOwnPropertySymbols) {
      var B = Object.getOwnPropertySymbols(u);
      for (T = 0; T < B.length; T++)
        O = B[T], b.includes(O) || {}.propertyIsEnumerable.call(u, O) && (t[O] = u[O]);
    }
    return t;
  }
  function K(u, b) {
    if (u == null) return {};
    var O = {};
    for (var T in u)
      if ({}.hasOwnProperty.call(u, T)) {
        if (b.includes(T)) continue;
        O[T] = u[T];
      }
    return O;
  }
  function M(u, b) {
    var O = Object.keys(u);
    if (Object.getOwnPropertySymbols) {
      var T = Object.getOwnPropertySymbols(u);
      b && (T = T.filter(function(t) {
        return Object.getOwnPropertyDescriptor(u, t).enumerable;
      })), O.push.apply(O, T);
    }
    return O;
  }
  function _(u) {
    for (var b = 1; b < arguments.length; b++) {
      var O = arguments[b] != null ? arguments[b] : {};
      b % 2 ? M(Object(O), !0).forEach(function(T) {
        r(u, T, O[T]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(O)) : M(Object(O)).forEach(function(T) {
        Object.defineProperty(u, T, Object.getOwnPropertyDescriptor(O, T));
      });
    }
    return u;
  }
  function ee(u, b) {
    if (!(u instanceof b)) throw new TypeError("Cannot call a class as a function");
  }
  function $(u, b) {
    for (var O = 0; O < b.length; O++) {
      var T = b[O];
      T.enumerable = T.enumerable || !1, T.configurable = !0, "value" in T && (T.writable = !0), Object.defineProperty(u, h(T.key), T);
    }
  }
  function Q(u, b, O) {
    return b && $(u.prototype, b), Object.defineProperty(u, "prototype", { writable: !1 }), u;
  }
  function V(u, b) {
    if (typeof b != "function" && b !== null) throw new TypeError("Super expression must either be null or a function");
    u.prototype = Object.create(b && b.prototype, { constructor: { value: u, writable: !0, configurable: !0 } }), Object.defineProperty(u, "prototype", { writable: !1 }), b && N(u, b);
  }
  function N(u, b) {
    return N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(O, T) {
      return O.__proto__ = T, O;
    }, N(u, b);
  }
  function a(u) {
    var b = d();
    return function() {
      var O, T = l(u);
      if (b) {
        var t = l(this).constructor;
        O = Reflect.construct(T, arguments, t);
      } else O = T.apply(this, arguments);
      return s(this, O);
    };
  }
  function s(u, b) {
    if (b && (D(b) == "object" || typeof b == "function")) return b;
    if (b !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return f(u);
  }
  function f(u) {
    if (u === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return u;
  }
  function d() {
    try {
      var u = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (d = function() {
      return !!u;
    })();
  }
  function l(u) {
    return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(b) {
      return b.__proto__ || Object.getPrototypeOf(b);
    }, l(u);
  }
  function r(u, b, O) {
    return (b = h(b)) in u ? Object.defineProperty(u, b, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : u[b] = O, u;
  }
  function h(u) {
    var b = S(u, "string");
    return D(b) == "symbol" ? b : b + "";
  }
  function S(u, b) {
    if (D(u) != "object" || !u) return u;
    var O = u[Symbol.toPrimitive];
    if (O !== void 0) {
      var T = O.call(u, b);
      if (D(T) != "object") return T;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (b === "string" ? String : Number)(u);
  }
  return ve.InnerSlider = /* @__PURE__ */ (function(u) {
    V(O, u);
    var b = a(O);
    function O(T) {
      var t;
      ee(this, O), t = b.call(this, T), r(f(t), "listRefHandler", function(o) {
        return t.list = o;
      }), r(f(t), "trackRefHandler", function(o) {
        return t.track = o;
      }), r(f(t), "adaptHeight", function() {
        if (t.props.adaptiveHeight && t.list) {
          var o = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
          t.list.style.height = (0, v.getHeight)(o) + "px";
        }
      }), r(f(t), "componentDidMount", function() {
        if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
          var o = (0, v.getOnDemandLazySlides)(_(_({}, t.props), t.state));
          o.length > 0 && (t.setState(function(n) {
            return {
              lazyLoadedList: n.lazyLoadedList.concat(o)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(o));
        }
        var e = _({
          listRef: t.list,
          trackRef: t.track
        }, t.props);
        t.updateState(e, !0, function() {
          t.adaptHeight(), t.props.autoplay && t.autoPlay("update");
        }), t.props.lazyLoad === "progressive" && (t.lazyLoadTimer = setInterval(t.progressiveLazyLoad, 1e3)), t.ro = new X.default(function() {
          t.state.animating ? (t.onWindowResized(!1), t.callbackTimers.push(setTimeout(function() {
            return t.onWindowResized();
          }, t.props.speed))) : t.onWindowResized();
        }), t.ro.observe(t.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(n) {
          n.onfocus = t.props.pauseOnFocus ? t.onSlideFocus : null, n.onblur = t.props.pauseOnFocus ? t.onSlideBlur : null;
        }), window.addEventListener ? window.addEventListener("resize", t.onWindowResized) : window.attachEvent("onresize", t.onWindowResized);
      }), r(f(t), "componentWillUnmount", function() {
        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach(function(o) {
          return clearTimeout(o);
        }), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
      }), r(f(t), "componentDidUpdate", function(o) {
        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
          var e = (0, v.getOnDemandLazySlides)(_(_({}, t.props), t.state));
          e.length > 0 && (t.setState(function(P) {
            return {
              lazyLoadedList: P.lazyLoadedList.concat(e)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(e));
        }
        t.adaptHeight();
        var n = _(_({
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
      }), r(f(t), "onWindowResized", function(o) {
        t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, y.default)(function() {
          return t.resizeWindow(o);
        }, 50), t.debouncedResize();
      }), r(f(t), "resizeWindow", function() {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = !!(t.track && t.track.node);
        if (e) {
          var n = _(_({
            listRef: t.list,
            trackRef: t.track
          }, t.props), t.state);
          t.updateState(n, o, function() {
            t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
          }), t.setState({
            animating: !1
          }), clearTimeout(t.animationEndCallback), delete t.animationEndCallback;
        }
      }), r(f(t), "updateState", function(o, e, n) {
        var p = (0, v.initializedState)(o);
        o = _(_(_({}, o), p), {}, {
          slideIndex: p.currentSlide
        });
        var P = (0, v.getTrackLeft)(o);
        o = _(_({}, o), {}, {
          left: P
        });
        var w = (0, v.getTrackCSS)(o);
        (e || i.default.Children.count(t.props.children) !== i.default.Children.count(o.children)) && (p.trackStyle = w), t.setState(p, n);
      }), r(f(t), "ssrInit", function() {
        if (t.props.variableWidth) {
          var o = 0, e = 0, n = [], p = (0, v.getPreClones)(_(_(_({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          })), P = (0, v.getPostClones)(_(_(_({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          }));
          t.props.children.forEach(function(re) {
            n.push(re.props.style.width), o += re.props.style.width;
          });
          for (var w = 0; w < p; w++)
            e += n[n.length - 1 - w], o += n[n.length - 1 - w];
          for (var C = 0; C < P; C++)
            o += n[C];
          for (var k = 0; k < t.state.currentSlide; k++)
            e += n[k];
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
        var A = i.default.Children.count(t.props.children), F = _(_(_({}, t.props), t.state), {}, {
          slideCount: A
        }), J = (0, v.getPreClones)(F) + (0, v.getPostClones)(F) + A, U = 100 / t.props.slidesToShow * J, G = 100 / J, I = -G * ((0, v.getPreClones)(F) + t.state.currentSlide) * U / 100;
        t.props.centerMode && (I += (100 - G * U / 100) / 2);
        var Y = {
          width: U + "%",
          left: I + "%"
        };
        return {
          slideWidth: G + "%",
          trackStyle: Y
        };
      }), r(f(t), "checkImagesLoad", function() {
        var o = t.list && t.list.querySelectorAll && t.list.querySelectorAll(".slick-slide img") || [], e = o.length, n = 0;
        Array.prototype.forEach.call(o, function(p) {
          var P = function() {
            return ++n && n >= e && t.onWindowResized();
          };
          if (!p.onclick)
            p.onclick = function() {
              return p.parentNode.focus();
            };
          else {
            var w = p.onclick;
            p.onclick = function(C) {
              w(C), p.parentNode.focus();
            };
          }
          p.onload || (t.props.lazyLoad ? p.onload = function() {
            t.adaptHeight(), t.callbackTimers.push(setTimeout(t.onWindowResized, t.props.speed));
          } : (p.onload = P, p.onerror = function() {
            P(), t.props.onLazyLoadError && t.props.onLazyLoadError();
          }));
        });
      }), r(f(t), "progressiveLazyLoad", function() {
        for (var o = [], e = _(_({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, v.getPostClones)(e); n++)
          if (t.state.lazyLoadedList.indexOf(n) < 0) {
            o.push(n);
            break;
          }
        for (var p = t.state.currentSlide - 1; p >= -(0, v.getPreClones)(e); p--)
          if (t.state.lazyLoadedList.indexOf(p) < 0) {
            o.push(p);
            break;
          }
        o.length > 0 ? (t.setState(function(P) {
          return {
            lazyLoadedList: P.lazyLoadedList.concat(o)
          };
        }), t.props.onLazyLoad && t.props.onLazyLoad(o)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
      }), r(f(t), "slideHandler", function(o) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = t.props, p = n.asNavFor, P = n.beforeChange, w = n.onLazyLoad, C = n.speed, k = n.afterChange, j = t.state.currentSlide, H = (0, v.slideHandler)(_(_(_({
          index: o
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e
        })), A = H.state, F = H.nextState;
        if (A) {
          P && P(j, A.currentSlide);
          var J = A.lazyLoadedList.filter(function(U) {
            return t.state.lazyLoadedList.indexOf(U) < 0;
          });
          w && J.length > 0 && w(J), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), k && k(j), delete t.animationEndCallback), t.setState(A, function() {
            p && t.asNavForIndex !== o && (t.asNavForIndex = o, p.innerSlider.slideHandler(o)), F && (t.animationEndCallback = setTimeout(function() {
              var U = F.animating, G = R(F, ["animating"]);
              t.setState(G, function() {
                t.callbackTimers.push(setTimeout(function() {
                  return t.setState({
                    animating: U
                  });
                }, 10)), k && k(A.currentSlide), delete t.animationEndCallback;
              });
            }, C));
          });
        }
      }), r(f(t), "changeSlide", function(o) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = _(_({}, t.props), t.state), p = (0, v.changeSlide)(n, o);
        if (!(p !== 0 && !p) && (e === !0 ? t.slideHandler(p, e) : t.slideHandler(p), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
          var P = t.list.querySelectorAll(".slick-current");
          P[0] && P[0].focus();
        }
      }), r(f(t), "clickHandler", function(o) {
        t.clickable === !1 && (o.stopPropagation(), o.preventDefault()), t.clickable = !0;
      }), r(f(t), "keyHandler", function(o) {
        var e = (0, v.keyHandler)(o, t.props.accessibility, t.props.rtl);
        e !== "" && t.changeSlide({
          message: e
        });
      }), r(f(t), "selectHandler", function(o) {
        t.changeSlide(o);
      }), r(f(t), "disableBodyScroll", function() {
        var o = function(n) {
          n = n || window.event, n.preventDefault && n.preventDefault(), n.returnValue = !1;
        };
        window.ontouchmove = o;
      }), r(f(t), "enableBodyScroll", function() {
        window.ontouchmove = null;
      }), r(f(t), "swipeStart", function(o) {
        t.props.verticalSwiping && t.disableBodyScroll();
        var e = (0, v.swipeStart)(o, t.props.swipe, t.props.draggable);
        e !== "" && t.setState(e);
      }), r(f(t), "swipeMove", function(o) {
        var e = (0, v.swipeMove)(o, _(_(_({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(f(t), "swipeEnd", function(o) {
        var e = (0, v.swipeEnd)(o, _(_(_({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        if (e) {
          var n = e.triggerSlideHandler;
          delete e.triggerSlideHandler, t.setState(e), n !== void 0 && (t.slideHandler(n), t.props.verticalSwiping && t.enableBodyScroll());
        }
      }), r(f(t), "touchEnd", function(o) {
        t.swipeEnd(o), t.clickable = !0;
      }), r(f(t), "slickPrev", function() {
        t.callbackTimers.push(setTimeout(function() {
          return t.changeSlide({
            message: "previous"
          });
        }, 0));
      }), r(f(t), "slickNext", function() {
        t.callbackTimers.push(setTimeout(function() {
          return t.changeSlide({
            message: "next"
          });
        }, 0));
      }), r(f(t), "slickGoTo", function(o) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (o = Number(o), isNaN(o)) return "";
        t.callbackTimers.push(setTimeout(function() {
          return t.changeSlide({
            message: "index",
            index: o,
            currentSlide: t.state.currentSlide
          }, e);
        }, 0));
      }), r(f(t), "play", function() {
        var o;
        if (t.props.rtl)
          o = t.state.currentSlide - t.props.slidesToScroll;
        else if ((0, v.canGoNext)(_(_({}, t.props), t.state)))
          o = t.state.currentSlide + t.props.slidesToScroll;
        else
          return !1;
        t.slideHandler(o);
      }), r(f(t), "autoPlay", function(o) {
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
      }), r(f(t), "pause", function(o) {
        t.autoplayTimer && (clearInterval(t.autoplayTimer), t.autoplayTimer = null);
        var e = t.state.autoplaying;
        o === "paused" ? t.setState({
          autoplaying: "paused"
        }) : o === "focused" ? (e === "hovered" || e === "playing") && t.setState({
          autoplaying: "focused"
        }) : e === "playing" && t.setState({
          autoplaying: "hovered"
        });
      }), r(f(t), "onDotsOver", function() {
        return t.props.autoplay && t.pause("hovered");
      }), r(f(t), "onDotsLeave", function() {
        return t.props.autoplay && t.state.autoplaying === "hovered" && t.autoPlay("leave");
      }), r(f(t), "onTrackOver", function() {
        return t.props.autoplay && t.pause("hovered");
      }), r(f(t), "onTrackLeave", function() {
        return t.props.autoplay && t.state.autoplaying === "hovered" && t.autoPlay("leave");
      }), r(f(t), "onSlideFocus", function() {
        return t.props.autoplay && t.pause("focused");
      }), r(f(t), "onSlideBlur", function() {
        return t.props.autoplay && t.state.autoplaying === "focused" && t.autoPlay("blur");
      }), r(f(t), "render", function() {
        var o = (0, m.default)("slick-slider", t.props.className, {
          "slick-vertical": t.props.vertical,
          "slick-initialized": !0
        }), e = _(_({}, t.props), t.state), n = (0, v.extractObject)(e, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), p = t.props.pauseOnHover;
        n = _(_({}, n), {}, {
          onMouseEnter: p ? t.onTrackOver : null,
          onMouseLeave: p ? t.onTrackLeave : null,
          onMouseOver: p ? t.onTrackOver : null,
          focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
        });
        var P;
        if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
          var w = (0, v.extractObject)(e, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), C = t.props.pauseOnDotsHover;
          w = _(_({}, w), {}, {
            clickHandler: t.changeSlide,
            onMouseEnter: C ? t.onDotsLeave : null,
            onMouseOver: C ? t.onDotsOver : null,
            onMouseLeave: C ? t.onDotsLeave : null
          }), P = /* @__PURE__ */ i.default.createElement(x.Dots, w);
        }
        var k, j, H = (0, v.extractObject)(e, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        H.clickHandler = t.changeSlide, t.props.arrows && (k = /* @__PURE__ */ i.default.createElement(L.PrevArrow, H), j = /* @__PURE__ */ i.default.createElement(L.NextArrow, H));
        var A = null;
        t.props.vertical && (A = {
          height: t.state.listHeight
        });
        var F = null;
        t.props.vertical === !1 ? t.props.centerMode === !0 && (F = {
          padding: "0px " + t.props.centerPadding
        }) : t.props.centerMode === !0 && (F = {
          padding: t.props.centerPadding + " 0px"
        });
        var J = _(_({}, A), F), U = t.props.touchMove, G = {
          className: "slick-list",
          style: J,
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
          className: o,
          dir: "ltr",
          style: t.props.style
        };
        return t.props.unslick && (G = {
          className: "slick-list"
        }, I = {
          className: o,
          style: t.props.style
        }), /* @__PURE__ */ i.default.createElement("div", I, t.props.unslick ? "" : k, /* @__PURE__ */ i.default.createElement("div", Z({
          ref: t.listRefHandler
        }, G), /* @__PURE__ */ i.default.createElement(g.Track, Z({
          ref: t.trackRefHandler
        }, n), t.props.children)), t.props.unslick ? "" : j, t.props.unslick ? "" : P);
      }), t.list = null, t.track = null, t.state = _(_({}, c.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: i.default.Children.count(t.props.children)
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      var B = t.ssrInit();
      return t.state = _(_({}, t.state), B), t;
    }
    return Q(O, [{
      key: "didPropsChange",
      value: function(t) {
        for (var B = !1, o = 0, e = Object.keys(this.props); o < e.length; o++) {
          var n = e[o];
          if (!t.hasOwnProperty(n)) {
            B = !0;
            break;
          }
          if (!(D(t[n]) === "object" || typeof t[n] == "function" || isNaN(t[n])) && t[n] !== this.props[n]) {
            B = !0;
            break;
          }
        }
        return B || i.default.Children.count(this.props.children) !== i.default.Children.count(t.children);
      }
    }]), O;
  })(i.default.Component), ve;
}
var Le, $e;
function Mt() {
  if ($e) return Le;
  $e = 1;
  var i = function(c) {
    return c.replace(/[A-Z]/g, function(y) {
      return "-" + y.toLowerCase();
    }).toLowerCase();
  };
  return Le = i, Le;
}
var Me, Xe;
function Rt() {
  if (Xe) return Me;
  Xe = 1;
  var i = Mt(), c = function(v) {
    var g = /[height|width]$/;
    return g.test(v);
  }, y = function(v) {
    var g = "", x = Object.keys(v);
    return x.forEach(function(L, X) {
      var q = v[L];
      L = i(L), c(L) && typeof q == "number" && (q = q + "px"), q === !0 ? g += L : q === !1 ? g += "not " + L : g += "(" + L + ": " + q + ")", X < x.length - 1 && (g += " and ");
    }), g;
  }, m = function(v) {
    var g = "";
    return typeof v == "string" ? v : v instanceof Array ? (v.forEach(function(x, L) {
      g += y(x), L < v.length - 1 && (g += ", ");
    }), g) : y(v);
  };
  return Me = m, Me;
}
var Ke;
function zt() {
  return Ke || (Ke = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var c = x(ce), y = Lt(), m = x(Rt()), v = x(Ue()), g = ge();
    function x(d) {
      return d && d.__esModule ? d : { default: d };
    }
    function L(d) {
      "@babel/helpers - typeof";
      return L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
        return typeof l;
      } : function(l) {
        return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
      }, L(d);
    }
    function X() {
      return X = Object.assign ? Object.assign.bind() : function(d) {
        for (var l = 1; l < arguments.length; l++) {
          var r = arguments[l];
          for (var h in r)
            ({}).hasOwnProperty.call(r, h) && (d[h] = r[h]);
        }
        return d;
      }, X.apply(null, arguments);
    }
    function q(d, l) {
      var r = Object.keys(d);
      if (Object.getOwnPropertySymbols) {
        var h = Object.getOwnPropertySymbols(d);
        l && (h = h.filter(function(S) {
          return Object.getOwnPropertyDescriptor(d, S).enumerable;
        })), r.push.apply(r, h);
      }
      return r;
    }
    function D(d) {
      for (var l = 1; l < arguments.length; l++) {
        var r = arguments[l] != null ? arguments[l] : {};
        l % 2 ? q(Object(r), !0).forEach(function(h) {
          a(d, h, r[h]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(r)) : q(Object(r)).forEach(function(h) {
          Object.defineProperty(d, h, Object.getOwnPropertyDescriptor(r, h));
        });
      }
      return d;
    }
    function Z(d, l) {
      if (!(d instanceof l)) throw new TypeError("Cannot call a class as a function");
    }
    function R(d, l) {
      for (var r = 0; r < l.length; r++) {
        var h = l[r];
        h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(d, s(h.key), h);
      }
    }
    function K(d, l, r) {
      return l && R(d.prototype, l), Object.defineProperty(d, "prototype", { writable: !1 }), d;
    }
    function M(d, l) {
      if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function");
      d.prototype = Object.create(l && l.prototype, { constructor: { value: d, writable: !0, configurable: !0 } }), Object.defineProperty(d, "prototype", { writable: !1 }), l && _(d, l);
    }
    function _(d, l) {
      return _ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, h) {
        return r.__proto__ = h, r;
      }, _(d, l);
    }
    function ee(d) {
      var l = V();
      return function() {
        var r, h = N(d);
        if (l) {
          var S = N(this).constructor;
          r = Reflect.construct(h, arguments, S);
        } else r = h.apply(this, arguments);
        return $(this, r);
      };
    }
    function $(d, l) {
      if (l && (L(l) == "object" || typeof l == "function")) return l;
      if (l !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return Q(d);
    }
    function Q(d) {
      if (d === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return d;
    }
    function V() {
      try {
        var d = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch {
      }
      return (V = function() {
        return !!d;
      })();
    }
    function N(d) {
      return N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(l) {
        return l.__proto__ || Object.getPrototypeOf(l);
      }, N(d);
    }
    function a(d, l, r) {
      return (l = s(l)) in d ? Object.defineProperty(d, l, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : d[l] = r, d;
    }
    function s(d) {
      var l = f(d, "string");
      return L(l) == "symbol" ? l : l + "";
    }
    function f(d, l) {
      if (L(d) != "object" || !d) return d;
      var r = d[Symbol.toPrimitive];
      if (r !== void 0) {
        var h = r.call(d, l);
        if (L(h) != "object") return h;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (l === "string" ? String : Number)(d);
    }
    i.default = /* @__PURE__ */ (function(d) {
      M(r, d);
      var l = ee(r);
      function r(h) {
        var S;
        return Z(this, r), S = l.call(this, h), a(Q(S), "innerSliderRefHandler", function(u) {
          return S.innerSlider = u;
        }), a(Q(S), "slickPrev", function() {
          return S.innerSlider.slickPrev();
        }), a(Q(S), "slickNext", function() {
          return S.innerSlider.slickNext();
        }), a(Q(S), "slickGoTo", function(u) {
          var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return S.innerSlider.slickGoTo(u, b);
        }), a(Q(S), "slickPause", function() {
          return S.innerSlider.pause("paused");
        }), a(Q(S), "slickPlay", function() {
          return S.innerSlider.autoPlay("play");
        }), S.state = {
          breakpoint: null
        }, S._responsiveMediaHandlers = [], S;
      }
      return K(r, [{
        key: "media",
        value: function(S, u) {
          var b = window.matchMedia(S), O = function(t) {
            var B = t.matches;
            B && u();
          };
          b.addListener(O), this._responsiveMediaHandlers.push({
            mql: b,
            query: S,
            listener: O
          });
        }
        // handles responsive breakpoints
      }, {
        key: "componentDidMount",
        value: function() {
          var S = this;
          if (this.props.responsive) {
            var u = this.props.responsive.map(function(O) {
              return O.breakpoint;
            });
            u.sort(function(O, T) {
              return O - T;
            }), u.forEach(function(O, T) {
              var t;
              T === 0 ? t = (0, m.default)({
                minWidth: 0,
                maxWidth: O
              }) : t = (0, m.default)({
                minWidth: u[T - 1] + 1,
                maxWidth: O
              }), (0, g.canUseDOM)() && S.media(t, function() {
                S.setState({
                  breakpoint: O
                });
              });
            });
            var b = (0, m.default)({
              minWidth: u.slice(-1)[0]
            });
            (0, g.canUseDOM)() && this.media(b, function() {
              S.setState({
                breakpoint: null
              });
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this._responsiveMediaHandlers.forEach(function(S) {
            S.mql.removeListener(S.listener);
          });
        }
      }, {
        key: "render",
        value: function() {
          var S = this, u, b;
          this.state.breakpoint ? (b = this.props.responsive.filter(function(w) {
            return w.breakpoint === S.state.breakpoint;
          }), u = b[0].settings === "unslick" ? "unslick" : D(D(D({}, v.default), this.props), b[0].settings)) : u = D(D({}, v.default), this.props), u.centerMode && (u.slidesToScroll > 1 && process.env.NODE_ENV !== "production" && console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(u.slidesToScroll)), u.slidesToScroll = 1), u.fade && (u.slidesToShow > 1 && process.env.NODE_ENV !== "production" && console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(u.slidesToShow)), u.slidesToScroll > 1 && process.env.NODE_ENV !== "production" && console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(u.slidesToScroll)), u.slidesToShow = 1, u.slidesToScroll = 1);
          var O = c.default.Children.toArray(this.props.children);
          O = O.filter(function(w) {
            return typeof w == "string" ? !!w.trim() : !!w;
          }), u.variableWidth && (u.rows > 1 || u.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), u.variableWidth = !1);
          for (var T = [], t = null, B = 0; B < O.length; B += u.rows * u.slidesPerRow) {
            for (var o = [], e = B; e < B + u.rows * u.slidesPerRow; e += u.slidesPerRow) {
              for (var n = [], p = e; p < e + u.slidesPerRow && (u.variableWidth && O[p].props.style && (t = O[p].props.style.width), !(p >= O.length)); p += 1)
                n.push(/* @__PURE__ */ c.default.cloneElement(O[p], {
                  key: 100 * B + 10 * e + p,
                  tabIndex: -1,
                  style: {
                    width: "".concat(100 / u.slidesPerRow, "%"),
                    display: "inline-block"
                  }
                }));
              o.push(/* @__PURE__ */ c.default.createElement("div", {
                key: 10 * B + e
              }, n));
            }
            u.variableWidth ? T.push(/* @__PURE__ */ c.default.createElement("div", {
              key: B,
              style: {
                width: t
              }
            }, o)) : T.push(/* @__PURE__ */ c.default.createElement("div", {
              key: B
            }, o));
          }
          if (u === "unslick") {
            var P = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ c.default.createElement("div", {
              className: P
            }, O);
          } else T.length <= u.slidesToShow && (u.unslick = !0);
          return /* @__PURE__ */ c.default.createElement(y.InnerSlider, X({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, (0, g.filterSettings)(u)), T);
        }
      }]), r;
    })(c.default.Component);
  })(Te)), Te;
}
var Ye;
function Dt() {
  return Ye || (Ye = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var c = y(zt());
    function y(m) {
      return m && m.__esModule ? m : { default: m };
    }
    i.default = c.default;
  })(Pe)), Pe;
}
var Nt = Dt();
const It = /* @__PURE__ */ it(Nt);
function Ht({
  tab: i = {},
  // { text: string, image: string, imageAlt: string }
  isActive: c = !1,
  onClick: y = () => {
  },
  index: m = 0,
  className: v = "",
  largeImage: g = !1
  // if true, set image size to 48x48 even to mobile
}) {
  return i ? /* @__PURE__ */ W("div", { className: v, children: /* @__PURE__ */ le(
    "button",
    {
      onClick: y,
      className: `inline-flex justify-center items-center gap-4 xl:gap-10 rounded-full border transition-all duration-300 p-tabbed-loz--padding cursor-pointer hover:bg-grey-600 hover:text-white focus-visible:bg-grey-600 focus-visible:text-white min-w-[110px] ${c ? "border-grey-600 bg-grey-600 text-white" : "border-grey-600 bg-grey-100 text-grey-950"}`,
      children: [
        i.image && /* @__PURE__ */ W(
          "img",
          {
            src: i.image,
            alt: i.imageAlt || "",
            className: `rounded-full object-cover ${g ? "w-48 h-48" : "w-24 h-24 xl:w-48 xl:h-48"}`
          }
        ),
        i.text && /* @__PURE__ */ W("span", { className: "text-body-default", children: i.text })
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
  isActive: c = !1,
  onClick: y = () => {
  },
  index: m = 0,
  className: v = "",
  hasBorder: g = !0
}) {
  return i ? /* @__PURE__ */ le(
    "button",
    {
      onClick: y,
      className: `relative flex flex-col items-center justify-center gap-10 p-20 min-h-[219px] min-w-[110px] xl:min-w-[120px] w-full transition-all duration-300 rounded-0 bg-white hover:bg-grey-50 focus-visible:bg-grey-50 cursor-pointer ${v} border-t border-grey-400 
      ${g ? "border" : ""}
      ${c ? "border-t-[11px] border-b-0" : ""}
      `,
      children: [
        i.image && /* @__PURE__ */ W(
          "img",
          {
            src: i.image,
            alt: i.imageAlt || "",
            className: "w-48 h-48 object-cover rounded-full"
          }
        ),
        i.text && /* @__PURE__ */ W("div", { className: "max-w-[200px]", children: typeof i.text == "string" ? /* @__PURE__ */ W("div", { dangerouslySetInnerHTML: { __html: i.text } }) : /* @__PURE__ */ W("div", { children: i.text }) })
      ]
    },
    m
  ) : null;
}
function Wt({
  tab: i = {},
  isActive: c = !1,
  onClick: y = () => {
  },
  index: m = 0,
  className: v = ""
}) {
  return i ? /* @__PURE__ */ W(
    "button",
    {
      onClick: y,
      className: `h-44px flex flex-row justify-start items-center gap-10 self-stretch border-b border-x transition-all duration-300  p-tabbed-row--padding cursor-pointer hover:bg-grey-300 focus-visible:bg-grey-300 ${c ? "border-grey-400 bg-grey-300" : "border-grey-400 bg-white"}
      ${m === 0 ? "border-t" : ""}
      ${v}`,
      children: i.text && /* @__PURE__ */ W("span", { className: "text-body-default", children: i.text })
    }
  ) : null;
}
function Bt({
  tabs: i = [],
  // @reference `TabBlocksMolecule` | `TabbedLozengesMolecule` | `TabbedRowMolecule`
  type: c = "lozenges",
  // 'lozenges' | 'blocks' | 'aside'
  defaultActiveIndex: y = 0,
  className: m = ""
}) {
  var Z;
  const [v, g] = ke(y), [x, L] = ke(!1), X = rt(null);
  if (nt(() => {
    const R = () => {
      typeof window < "u" && L(window.innerWidth < 768);
    };
    return R(), window.addEventListener("resize", R), () => {
      window.removeEventListener("resize", R);
    };
  }, []), !i || i.length === 0)
    return null;
  const q = (R) => {
    g(R);
  }, D = () => /* @__PURE__ */ W("div", { className: "mt-20 relative min-h-100", children: i.map((R, K) => /* @__PURE__ */ W(
    "div",
    {
      className: `transition-opacity duration-300 wysiwyg ${v === K ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`,
      children: typeof R.content == "string" ? /* @__PURE__ */ W("div", { dangerouslySetInnerHTML: { __html: R.content } }) : /* @__PURE__ */ W("div", { children: R.content })
    },
    R.key || K
  )) });
  if (c === "lozenges")
    return /* @__PURE__ */ le("div", { className: `${m}`, children: [
      /* @__PURE__ */ W("div", { className: "flex flex-wrap justify-center gap-x-tabbed-lozs--spacing-x gap-y-tabbed-lozs--spacing-y", children: i.map((R, K) => /* @__PURE__ */ W(
        Ht,
        {
          tab: R,
          isActive: v === K,
          onClick: () => q(K),
          index: K
        },
        R.key || K
      )) }),
      D()
    ] });
  if (c === "blocks") {
    const R = i.length, K = R < 5, M = R > 5, _ = R === 5, ee = (V, N) => V === N, $ = (V, N) => V !== N, Q = {
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
      beforeChange: (V, N) => {
        g(N);
      },
      className: `border-grey-400
        ${(K || _) && !x ? "border-x" : "border-r"}
      `
    };
    return /* @__PURE__ */ le("div", { className: m, children: [
      /* @__PURE__ */ W("div", { className: `border-grey-400 
          ${K ? "md:flex md:justify-center" : ""}
        `, children: /* @__PURE__ */ W(It, { ref: X, ...Q, children: i.map((V, N) => /* @__PURE__ */ W("div", { className: `
                border-grey-400  transition-all duration-200
                ${$(N, 0) || (M || x) && ee(N, 0) ? " border-l" : ""}
                ${v !== N ? "border-b" : ""}
              `, children: /* @__PURE__ */ W(
        At,
        {
          tab: V,
          isActive: v === N,
          onClick: () => {
            X.current && X.current.slickGoTo(N);
          },
          index: N,
          hasBorder: !1
        }
      ) }, V.key || N)) }) }),
      D()
    ] });
  }
  if (c === "aside") {
    const [R, K] = ke(!1);
    return /* @__PURE__ */ le("div", { className: m, children: [
      /* @__PURE__ */ le("div", { className: "hidden md:flex md:flex-row gap-64", children: [
        /* @__PURE__ */ W("div", { className: "flex flex-col min-w-[267px]", children: i.map((M, _) => /* @__PURE__ */ W(
          Wt,
          {
            tab: M,
            isActive: v === _,
            onClick: () => q(_),
            index: _
          },
          M.key || _
        )) }),
        /* @__PURE__ */ W("div", { className: "flex-1 relative min-h-[200px] wysiwyg", children: i.map((M, _) => /* @__PURE__ */ W(
          "div",
          {
            className: `transition-opacity duration-300 ${v === _ ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`,
            children: typeof M.content == "string" ? /* @__PURE__ */ W("div", { dangerouslySetInnerHTML: { __html: M.content } }) : /* @__PURE__ */ W("div", { children: M.content })
          },
          M.key || _
        )) })
      ] }),
      /* @__PURE__ */ le("div", { className: "md:hidden relative", children: [
        /* @__PURE__ */ le(
          "button",
          {
            onClick: () => K(!R),
            className: "w-full h-11 flex items-center justify-between px-3 rounded-lg border border-gray-900 bg-white",
            children: [
              /* @__PURE__ */ W("span", { className: "text-body-default", children: ((Z = i[v]) == null ? void 0 : Z.text) || "Select tab" }),
              /* @__PURE__ */ W(
                "svg",
                {
                  className: `w-5 h-5 transition-transform ${R ? "rotate-180" : ""}`,
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ W("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
                }
              )
            ]
          }
        ),
        R && /* @__PURE__ */ W("div", { className: "absolute top-[44px] left-0 right-0 mt-1 rounded-lg border border-gray-900 bg-white z-10 shadow-lg", children: i.map((M, _) => /* @__PURE__ */ W(
          "button",
          {
            onClick: () => {
              q(_), K(!1);
            },
            className: `w-full text-left px-12 py-10 border-b border-grey-200 last:border-b-0 transition-colors ${v === _ ? "bg-grey-100" : "hover:bg-grey-50 focus-visible:bg-grey-50"}`,
            children: /* @__PURE__ */ W("span", { className: "text-body-default", children: M.text })
          },
          M.key || _
        )) }),
        /* @__PURE__ */ W("div", { className: "mt-20 relative min-h-[200px] wysiwyg", children: i.map((M, _) => /* @__PURE__ */ W(
          "div",
          {
            className: `transition-opacity duration-300 ${v === _ ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`,
            children: typeof M.content == "string" ? /* @__PURE__ */ W("div", { dangerouslySetInnerHTML: { __html: M.content } }) : /* @__PURE__ */ W("div", { children: M.content })
          },
          M.key || _
        )) })
      ] })
    ] });
  }
  return null;
}
export {
  Bt as default
};
