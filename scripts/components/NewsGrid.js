import { jsxs as ce, jsx as ie, Fragment as nt } from "react/jsx-runtime";
import * as Se from "react";
import ue, { useId as it, useState as De, useRef as ot, useEffect as at } from "react";
var me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function lt(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function st(o) {
  if (Object.prototype.hasOwnProperty.call(o, "__esModule")) return o;
  var c = o.default;
  if (typeof c == "function") {
    var h = function b() {
      return this instanceof b ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    h.prototype = c.prototype;
  } else h = {};
  return Object.defineProperty(h, "__esModule", { value: !0 }), Object.keys(o).forEach(function(b) {
    var y = Object.getOwnPropertyDescriptor(o, b);
    Object.defineProperty(h, b, y.get ? y : {
      enumerable: !0,
      get: function() {
        return o[b];
      }
    });
  }), h;
}
var Pe = {}, Te = {}, ve = {}, Ce = {}, Ne;
function ut() {
  return Ne || (Ne = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
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
    o.default = c;
  })(Ce)), Ce;
}
var je, He;
function ct() {
  if (He) return je;
  He = 1;
  var o = "Expected a function", c = NaN, h = "[object Symbol]", b = /^\s+|\s+$/g, y = /^[-+]0x[0-9a-f]+$/i, g = /^0b[01]+$/i, x = /^0o[0-7]+$/i, L = parseInt, I = typeof me == "object" && me && me.Object === Object && me, z = typeof self == "object" && self && self.Object === Object && self, M = I || z || Function("return this")(), Y = Object.prototype, Q = Y.toString, $ = Math.max, V = Math.min, T = function() {
    return M.Date.now();
  };
  function ee(i, s, f) {
    var d, a, r, v, S, u, m = 0, O = !1, P = !1, t = !0;
    if (typeof i != "function")
      throw new TypeError(o);
    s = U(s) || 0, F(f) && (O = !!f.leading, P = "maxWait" in f, r = P ? $(U(f.maxWait) || 0, s) : r, t = "trailing" in f ? !!f.trailing : t);
    function W(j) {
      var N = d, H = a;
      return d = a = void 0, m = j, v = i.apply(H, N), v;
    }
    function l(j) {
      return m = j, S = setTimeout(p, s), O ? W(j) : v;
    }
    function e(j) {
      var N = j - u, H = j - m, A = s - N;
      return P ? V(A, r - H) : A;
    }
    function n(j) {
      var N = j - u, H = j - m;
      return u === void 0 || N >= s || N < 0 || P && H >= r;
    }
    function p() {
      var j = T();
      if (n(j))
        return k(j);
      S = setTimeout(p, e(j));
    }
    function k(j) {
      return S = void 0, t && d ? W(j) : (d = a = void 0, v);
    }
    function w() {
      S !== void 0 && clearTimeout(S), m = 0, d = u = a = S = void 0;
    }
    function C() {
      return S === void 0 ? v : k(T());
    }
    function _() {
      var j = T(), N = n(j);
      if (d = arguments, a = this, u = j, N) {
        if (S === void 0)
          return l(u);
        if (P)
          return S = setTimeout(p, s), W(u);
      }
      return S === void 0 && (S = setTimeout(p, s)), v;
    }
    return _.cancel = w, _.flush = C, _;
  }
  function F(i) {
    var s = typeof i;
    return !!i && (s == "object" || s == "function");
  }
  function K(i) {
    return !!i && typeof i == "object";
  }
  function J(i) {
    return typeof i == "symbol" || K(i) && Q.call(i) == h;
  }
  function U(i) {
    if (typeof i == "number")
      return i;
    if (J(i))
      return c;
    if (F(i)) {
      var s = typeof i.valueOf == "function" ? i.valueOf() : i;
      i = F(s) ? s + "" : s;
    }
    if (typeof i != "string")
      return i === 0 ? i : +i;
    i = i.replace(b, "");
    var f = g.test(i);
    return f || x.test(i) ? L(i.slice(2), f ? 2 : 8) : y.test(i) ? c : +i;
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
function _e() {
  return Ie || (Ie = 1, (function(o) {
    (function() {
      var c = {}.hasOwnProperty;
      function h() {
        for (var g = "", x = 0; x < arguments.length; x++) {
          var L = arguments[x];
          L && (g = y(g, b(L)));
        }
        return g;
      }
      function b(g) {
        if (typeof g == "string" || typeof g == "number")
          return g;
        if (typeof g != "object")
          return "";
        if (Array.isArray(g))
          return h.apply(null, g);
        if (g.toString !== Object.prototype.toString && !g.toString.toString().includes("[native code]"))
          return g.toString();
        var x = "";
        for (var L in g)
          c.call(g, L) && g[L] && (x = y(x, L));
        return x;
      }
      function y(g, x) {
        return x ? g ? g + " " + x : g + x : g;
      }
      o.exports ? (h.default = h, o.exports = h) : window.classNames = h;
    })();
  })(Ee)), Ee.exports;
}
var E = {}, Le = {}, Ae;
function Ve() {
  return Ae || (Ae = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
    var c = h(ue);
    function h(y) {
      return y && y.__esModule ? y : { default: y };
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
    o.default = b;
  })(Le)), Le;
}
var We;
function ge() {
  if (We) return E;
  We = 1, Object.defineProperty(E, "__esModule", {
    value: !0
  }), E.checkSpecKeys = E.checkNavigable = E.changeSlide = E.canUseDOM = E.canGoNext = void 0, E.clamp = z, E.extractObject = void 0, E.filterSettings = W, E.validSettings = E.swipeStart = E.swipeMove = E.swipeEnd = E.slidesOnRight = E.slidesOnLeft = E.slideHandler = E.siblingDirection = E.safePreventDefault = E.lazyStartIndex = E.lazySlidesOnRight = E.lazySlidesOnLeft = E.lazyEndIndex = E.keyHandler = E.initializedState = E.getWidth = E.getTrackLeft = E.getTrackCSS = E.getTrackAnimateCSS = E.getTotalSlides = E.getSwipeDirection = E.getSlideCount = E.getRequiredLazySlides = E.getPreClones = E.getPostClones = E.getOnDemandLazySlides = E.getNavigableIndexes = E.getHeight = void 0;
  var o = h(ue), c = h(Ve());
  function h(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function b(l) {
    "@babel/helpers - typeof";
    return b = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, b(l);
  }
  function y(l, e) {
    var n = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(l);
      e && (p = p.filter(function(k) {
        return Object.getOwnPropertyDescriptor(l, k).enumerable;
      })), n.push.apply(n, p);
    }
    return n;
  }
  function g(l) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2 ? y(Object(n), !0).forEach(function(p) {
        x(l, p, n[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(p) {
        Object.defineProperty(l, p, Object.getOwnPropertyDescriptor(n, p));
      });
    }
    return l;
  }
  function x(l, e, n) {
    return (e = L(e)) in l ? Object.defineProperty(l, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : l[e] = n, l;
  }
  function L(l) {
    var e = I(l, "string");
    return b(e) == "symbol" ? e : e + "";
  }
  function I(l, e) {
    if (b(l) != "object" || !l) return l;
    var n = l[Symbol.toPrimitive];
    if (n !== void 0) {
      var p = n.call(l, e);
      if (b(p) != "object") return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(l);
  }
  function z(l, e, n) {
    return Math.max(e, Math.min(l, n));
  }
  var M = E.safePreventDefault = function(e) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(e._reactName) || e.preventDefault();
  }, Y = E.getOnDemandLazySlides = function(e) {
    for (var n = [], p = Q(e), k = $(e), w = p; w < k; w++)
      e.lazyLoadedList.indexOf(w) < 0 && n.push(w);
    return n;
  };
  E.getRequiredLazySlides = function(e) {
    for (var n = [], p = Q(e), k = $(e), w = p; w < k; w++)
      n.push(w);
    return n;
  };
  var Q = E.lazyStartIndex = function(e) {
    return e.currentSlide - V(e);
  }, $ = E.lazyEndIndex = function(e) {
    return e.currentSlide + T(e);
  }, V = E.lazySlidesOnLeft = function(e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }, T = E.lazySlidesOnRight = function(e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }, ee = E.getWidth = function(e) {
    return e && e.offsetWidth || 0;
  }, F = E.getHeight = function(e) {
    return e && e.offsetHeight || 0;
  }, K = E.getSwipeDirection = function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, p, k, w, C;
    return p = e.startX - e.curX, k = e.startY - e.curY, w = Math.atan2(k, p), C = Math.round(w * 180 / Math.PI), C < 0 && (C = 360 - Math.abs(C)), C <= 45 && C >= 0 || C <= 360 && C >= 315 ? "left" : C >= 135 && C <= 225 ? "right" : n === !0 ? C >= 35 && C <= 135 ? "up" : "down" : "vertical";
  }, J = E.canGoNext = function(e) {
    var n = !0;
    return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (n = !1), n;
  };
  E.extractObject = function(e, n) {
    var p = {};
    return n.forEach(function(k) {
      return p[k] = e[k];
    }), p;
  }, E.initializedState = function(e) {
    var n = o.default.Children.count(e.children), p = e.listRef, k = Math.ceil(ee(p)), w = e.trackRef && e.trackRef.node, C = Math.ceil(ee(w)), _;
    if (e.vertical)
      _ = k;
    else {
      var j = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding == "string" && e.centerPadding.slice(-1) === "%" && (j *= k / 100), _ = Math.ceil((k - j) / e.slidesToShow);
    }
    var N = p && F(p.querySelector('[data-index="0"]')), H = N * e.slidesToShow, A = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && (A = n - 1 - e.initialSlide);
    var X = e.lazyLoadedList || [], B = Y(g(g({}, e), {}, {
      currentSlide: A,
      lazyLoadedList: X
    }));
    X = X.concat(B);
    var q = {
      slideCount: n,
      slideWidth: _,
      listWidth: k,
      trackWidth: C,
      currentSlide: A,
      slideHeight: N,
      listHeight: H,
      lazyLoadedList: X
    };
    return e.autoplaying === null && e.autoplay && (q.autoplaying = "playing"), q;
  }, E.slideHandler = function(e) {
    var n = e.waitForAnimate, p = e.animating, k = e.fade, w = e.infinite, C = e.index, _ = e.slideCount, j = e.lazyLoad, N = e.currentSlide, H = e.centerMode, A = e.slidesToScroll, X = e.slidesToShow, B = e.useCSS, q = e.lazyLoadedList;
    if (n && p) return {};
    var D = C, G, te, R, Z = {}, re = {}, ne = w ? C : z(C, 0, _ - 1);
    if (k) {
      if (!w && (C < 0 || C >= _)) return {};
      C < 0 ? D = C + _ : C >= _ && (D = C - _), j && q.indexOf(D) < 0 && (q = q.concat(D)), Z = {
        animating: !0,
        currentSlide: D,
        lazyLoadedList: q,
        targetSlide: D
      }, re = {
        animating: !1,
        targetSlide: D
      };
    } else
      G = D, D < 0 ? (G = D + _, w ? _ % A !== 0 && (G = _ - _ % A) : G = 0) : !J(e) && D > N ? D = G = N : H && D >= _ ? (D = w ? _ : _ - 1, G = w ? 0 : _ - 1) : D >= _ && (G = D - _, w ? _ % A !== 0 && (G = 0) : G = _ - X), !w && D + X >= _ && (G = _ - X), te = r(g(g({}, e), {}, {
        slideIndex: D
      })), R = r(g(g({}, e), {}, {
        slideIndex: G
      })), w || (te === R && (D = G), te = R), j && (q = q.concat(Y(g(g({}, e), {}, {
        currentSlide: D
      })))), B ? (Z = {
        animating: !0,
        currentSlide: G,
        trackStyle: a(g(g({}, e), {}, {
          left: te
        })),
        lazyLoadedList: q,
        targetSlide: ne
      }, re = {
        animating: !1,
        currentSlide: G,
        trackStyle: d(g(g({}, e), {}, {
          left: R
        })),
        swipeLeft: null,
        targetSlide: ne
      }) : Z = {
        currentSlide: G,
        trackStyle: d(g(g({}, e), {}, {
          left: R
        })),
        lazyLoadedList: q,
        targetSlide: ne
      };
    return {
      state: Z,
      nextState: re
    };
  }, E.changeSlide = function(e, n) {
    var p, k, w, C, _, j = e.slidesToScroll, N = e.slidesToShow, H = e.slideCount, A = e.currentSlide, X = e.targetSlide, B = e.lazyLoad, q = e.infinite;
    if (C = H % j !== 0, p = C ? 0 : (H - A) % j, n.message === "previous")
      w = p === 0 ? j : N - p, _ = A - w, B && !q && (k = A - w, _ = k === -1 ? H - 1 : k), q || (_ = X - j);
    else if (n.message === "next")
      w = p === 0 ? j : p, _ = A + w, B && !q && (_ = (A + j) % H + p), q || (_ = X + j);
    else if (n.message === "dots")
      _ = n.index * n.slidesToScroll;
    else if (n.message === "children") {
      if (_ = n.index, q) {
        var D = m(g(g({}, e), {}, {
          targetSlide: _
        }));
        _ > n.currentSlide && D === "left" ? _ = _ - H : _ < n.currentSlide && D === "right" && (_ = _ + H);
      }
    } else n.message === "index" && (_ = Number(n.index));
    return _;
  }, E.keyHandler = function(e, n, p) {
    return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n ? "" : e.keyCode === 37 ? p ? "next" : "previous" : e.keyCode === 39 ? p ? "previous" : "next" : "";
  }, E.swipeStart = function(e, n, p) {
    return e.target.tagName === "IMG" && M(e), !n || !p && e.type.indexOf("mouse") !== -1 ? "" : {
      dragging: !0,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY
      }
    };
  }, E.swipeMove = function(e, n) {
    var p = n.scrolling, k = n.animating, w = n.vertical, C = n.swipeToSlide, _ = n.verticalSwiping, j = n.rtl, N = n.currentSlide, H = n.edgeFriction, A = n.edgeDragged, X = n.onEdge, B = n.swiped, q = n.swiping, D = n.slideCount, G = n.slidesToScroll, te = n.infinite, R = n.touchObject, Z = n.swipeEvent, re = n.listHeight, ne = n.listWidth;
    if (!p) {
      if (k) return M(e);
      w && C && _ && M(e);
      var oe, le = {}, be = r(n);
      R.curX = e.touches ? e.touches[0].pageX : e.clientX, R.curY = e.touches ? e.touches[0].pageY : e.clientY, R.swipeLength = Math.round(Math.sqrt(Math.pow(R.curX - R.startX, 2)));
      var ze = Math.round(Math.sqrt(Math.pow(R.curY - R.startY, 2)));
      if (!_ && !q && ze > 10)
        return {
          scrolling: !0
        };
      _ && (R.swipeLength = ze);
      var de = (j ? -1 : 1) * (R.curX > R.startX ? 1 : -1);
      _ && (de = R.curY > R.startY ? 1 : -1);
      var rt = Math.ceil(D / G), ae = K(n.touchObject, _), pe = R.swipeLength;
      return te || (N === 0 && (ae === "right" || ae === "down") || N + 1 >= rt && (ae === "left" || ae === "up") || !J(n) && (ae === "left" || ae === "up")) && (pe = R.swipeLength * H, A === !1 && X && (X(ae), le.edgeDragged = !0)), !B && Z && (Z(ae), le.swiped = !0), w ? oe = be + pe * (re / ne) * de : j ? oe = be - pe * de : oe = be + pe * de, _ && (oe = be + pe * de), le = g(g({}, le), {}, {
        touchObject: R,
        swipeLeft: oe,
        trackStyle: d(g(g({}, n), {}, {
          left: oe
        }))
      }), Math.abs(R.curX - R.startX) < Math.abs(R.curY - R.startY) * 0.8 || R.swipeLength > 10 && (le.swiping = !0, M(e)), le;
    }
  }, E.swipeEnd = function(e, n) {
    var p = n.dragging, k = n.swipe, w = n.touchObject, C = n.listWidth, _ = n.touchThreshold, j = n.verticalSwiping, N = n.listHeight, H = n.swipeToSlide, A = n.scrolling, X = n.onSwipe, B = n.targetSlide, q = n.currentSlide, D = n.infinite;
    if (!p)
      return k && M(e), {};
    var G = j ? N / _ : C / _, te = K(w, j), R = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {}
    };
    if (A || !w.swipeLength)
      return R;
    if (w.swipeLength > G) {
      M(e), X && X(te);
      var Z, re, ne = D ? q : B;
      switch (te) {
        case "left":
        case "up":
          re = ne + s(n), Z = H ? i(n, re) : re, R.currentDirection = 0;
          break;
        case "right":
        case "down":
          re = ne - s(n), Z = H ? i(n, re) : re, R.currentDirection = 1;
          break;
        default:
          Z = ne;
      }
      R.triggerSlideHandler = Z;
    } else {
      var oe = r(n);
      R.trackStyle = a(g(g({}, n), {}, {
        left: oe
      }));
    }
    return R;
  };
  var U = E.getNavigableIndexes = function(e) {
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, p = e.infinite ? e.slidesToShow * -1 : 0, k = e.infinite ? e.slidesToShow * -1 : 0, w = []; p < n; )
      w.push(p), p = k + e.slidesToScroll, k += Math.min(e.slidesToScroll, e.slidesToShow);
    return w;
  }, i = E.checkNavigable = function(e, n) {
    var p = U(e), k = 0;
    if (n > p[p.length - 1])
      n = p[p.length - 1];
    else
      for (var w in p) {
        if (n < p[w]) {
          n = k;
          break;
        }
        k = p[w];
      }
    return n;
  }, s = E.getSlideCount = function(e) {
    var n = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      var p, k = e.listRef, w = k.querySelectorAll && k.querySelectorAll(".slick-slide") || [];
      if (Array.from(w).every(function(j) {
        if (e.vertical) {
          if (j.offsetTop + F(j) / 2 > e.swipeLeft * -1)
            return p = j, !1;
        } else if (j.offsetLeft - n + ee(j) / 2 > e.swipeLeft * -1)
          return p = j, !1;
        return !0;
      }), !p)
        return 0;
      var C = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide, _ = Math.abs(p.dataset.index - C) || 1;
      return _;
    } else
      return e.slidesToScroll;
  }, f = E.checkSpecKeys = function(e, n) {
    return n.reduce(function(p, k) {
      return p && e.hasOwnProperty(k);
    }, !0) ? null : console.error("Keys Missing:", e);
  }, d = E.getTrackCSS = function(e) {
    f(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
    var n, p;
    if (!e.vertical)
      n = u(e) * e.slideWidth;
    else {
      var k = e.unslick ? e.slideCount : e.slideCount + 2 * e.slidesToShow;
      p = k * e.slideHeight;
    }
    var w = {
      opacity: 1,
      transition: "",
      WebkitTransition: ""
    };
    if (e.useTransform) {
      var C = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", _ = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", j = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
      w = g(g({}, w), {}, {
        WebkitTransform: C,
        transform: _,
        msTransform: j
      });
    } else
      e.vertical ? w.top = e.left : w.left = e.left;
    return e.fade && (w = {
      opacity: 1
    }), n && (w.width = n), p && (w.height = p), window && !window.addEventListener && window.attachEvent && (e.vertical ? w.marginTop = e.left + "px" : w.marginLeft = e.left + "px"), w;
  }, a = E.getTrackAnimateCSS = function(e) {
    f(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var n = d(e);
    return e.useTransform ? (n.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, n.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? n.transition = "top " + e.speed + "ms " + e.cssEase : n.transition = "left " + e.speed + "ms " + e.cssEase, n;
  }, r = E.getTrackLeft = function(e) {
    if (e.unslick)
      return 0;
    f(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var n = e.slideIndex, p = e.trackRef, k = e.infinite, w = e.centerMode, C = e.slideCount, _ = e.slidesToShow, j = e.slidesToScroll, N = e.slideWidth, H = e.listWidth, A = e.variableWidth, X = e.slideHeight, B = e.fade, q = e.vertical, D = 0, G, te, R = 0;
    if (B || e.slideCount === 1)
      return 0;
    var Z = 0;
    if (k ? (Z = -v(e), C % j !== 0 && n + j > C && (Z = -(n > C ? _ - (n - C) : C % j)), w && (Z += parseInt(_ / 2))) : (C % j !== 0 && n + j > C && (Z = _ - C % j), w && (Z = parseInt(_ / 2))), D = Z * N, R = Z * X, q ? G = n * X * -1 + R : G = n * N * -1 + D, A === !0) {
      var re, ne = p && p.node;
      if (re = n + v(e), te = ne && ne.childNodes[re], G = te ? te.offsetLeft * -1 : 0, w === !0) {
        re = k ? n + v(e) : n, te = ne && ne.children[re], G = 0;
        for (var oe = 0; oe < re; oe++)
          G -= ne && ne.children[oe] && ne.children[oe].offsetWidth;
        G -= parseInt(e.centerPadding), G += te && (H - te.offsetWidth) / 2;
      }
    }
    return G;
  }, v = E.getPreClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, S = E.getPostClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, u = E.getTotalSlides = function(e) {
    return e.slideCount === 1 ? 1 : v(e) + e.slideCount + S(e);
  }, m = E.siblingDirection = function(e) {
    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + O(e) ? "left" : "right" : e.targetSlide < e.currentSlide - P(e) ? "right" : "left";
  }, O = E.slidesOnRight = function(e) {
    var n = e.slidesToShow, p = e.centerMode, k = e.rtl, w = e.centerPadding;
    if (p) {
      var C = (n - 1) / 2 + 1;
      return parseInt(w) > 0 && (C += 1), k && n % 2 === 0 && (C += 1), C;
    }
    return k ? 0 : n - 1;
  }, P = E.slidesOnLeft = function(e) {
    var n = e.slidesToShow, p = e.centerMode, k = e.rtl, w = e.centerPadding;
    if (p) {
      var C = (n - 1) / 2 + 1;
      return parseInt(w) > 0 && (C += 1), !k && n % 2 === 0 && (C += 1), C;
    }
    return k ? n - 1 : 0;
  };
  E.canUseDOM = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  };
  var t = E.validSettings = Object.keys(c.default);
  function W(l) {
    return t.reduce(function(e, n) {
      return l.hasOwnProperty(n) && (e[n] = l[n]), e;
    }, {});
  }
  return E;
}
var he = {}, qe;
function ft() {
  if (qe) return he;
  qe = 1, Object.defineProperty(he, "__esModule", {
    value: !0
  }), he.Track = void 0;
  var o = b(ue), c = b(_e()), h = ge();
  function b(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function y(a) {
    "@babel/helpers - typeof";
    return y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, y(a);
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(a) {
      for (var r = 1; r < arguments.length; r++) {
        var v = arguments[r];
        for (var S in v)
          ({}).hasOwnProperty.call(v, S) && (a[S] = v[S]);
      }
      return a;
    }, g.apply(null, arguments);
  }
  function x(a, r) {
    if (!(a instanceof r)) throw new TypeError("Cannot call a class as a function");
  }
  function L(a, r) {
    for (var v = 0; v < r.length; v++) {
      var S = r[v];
      S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(a, J(S.key), S);
    }
  }
  function I(a, r, v) {
    return r && L(a.prototype, r), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function z(a, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(r && r.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), r && M(a, r);
  }
  function M(a, r) {
    return M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(v, S) {
      return v.__proto__ = S, v;
    }, M(a, r);
  }
  function Y(a) {
    var r = V();
    return function() {
      var v, S = T(a);
      if (r) {
        var u = T(this).constructor;
        v = Reflect.construct(S, arguments, u);
      } else v = S.apply(this, arguments);
      return Q(this, v);
    };
  }
  function Q(a, r) {
    if (r && (y(r) == "object" || typeof r == "function")) return r;
    if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
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
  function T(a) {
    return T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, T(a);
  }
  function ee(a, r) {
    var v = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var S = Object.getOwnPropertySymbols(a);
      r && (S = S.filter(function(u) {
        return Object.getOwnPropertyDescriptor(a, u).enumerable;
      })), v.push.apply(v, S);
    }
    return v;
  }
  function F(a) {
    for (var r = 1; r < arguments.length; r++) {
      var v = arguments[r] != null ? arguments[r] : {};
      r % 2 ? ee(Object(v), !0).forEach(function(S) {
        K(a, S, v[S]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(v)) : ee(Object(v)).forEach(function(S) {
        Object.defineProperty(a, S, Object.getOwnPropertyDescriptor(v, S));
      });
    }
    return a;
  }
  function K(a, r, v) {
    return (r = J(r)) in a ? Object.defineProperty(a, r, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : a[r] = v, a;
  }
  function J(a) {
    var r = U(a, "string");
    return y(r) == "symbol" ? r : r + "";
  }
  function U(a, r) {
    if (y(a) != "object" || !a) return a;
    var v = a[Symbol.toPrimitive];
    if (v !== void 0) {
      var S = v.call(a, r);
      if (y(S) != "object") return S;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(a);
  }
  var i = function(r) {
    var v, S, u, m, O;
    r.rtl ? O = r.slideCount - 1 - r.index : O = r.index, u = O < 0 || O >= r.slideCount, r.centerMode ? (m = Math.floor(r.slidesToShow / 2), S = (O - r.currentSlide) % r.slideCount === 0, O > r.currentSlide - m - 1 && O <= r.currentSlide + m && (v = !0)) : v = r.currentSlide <= O && O < r.currentSlide + r.slidesToShow;
    var P;
    r.targetSlide < 0 ? P = r.targetSlide + r.slideCount : r.targetSlide >= r.slideCount ? P = r.targetSlide - r.slideCount : P = r.targetSlide;
    var t = O === P;
    return {
      "slick-slide": !0,
      "slick-active": v,
      "slick-center": S,
      "slick-cloned": u,
      "slick-current": t
      // dubious in case of RTL
    };
  }, s = function(r) {
    var v = {};
    return (r.variableWidth === void 0 || r.variableWidth === !1) && (v.width = r.slideWidth), r.fade && (v.position = "relative", r.vertical ? v.top = -r.index * parseInt(r.slideHeight) : v.left = -r.index * parseInt(r.slideWidth), v.opacity = r.currentSlide === r.index ? 1 : 0, v.zIndex = r.currentSlide === r.index ? 999 : 998, r.useCSS && (v.transition = "opacity " + r.speed + "ms " + r.cssEase + ", visibility " + r.speed + "ms " + r.cssEase)), v;
  }, f = function(r, v) {
    return r.key || v;
  }, d = function(r) {
    var v, S = [], u = [], m = [], O = o.default.Children.count(r.children), P = (0, h.lazyStartIndex)(r), t = (0, h.lazyEndIndex)(r);
    return o.default.Children.forEach(r.children, function(W, l) {
      var e, n = {
        message: "children",
        index: l,
        slidesToScroll: r.slidesToScroll,
        currentSlide: r.currentSlide
      };
      !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(l) >= 0 ? e = W : e = /* @__PURE__ */ o.default.createElement("div", null);
      var p = s(F(F({}, r), {}, {
        index: l
      })), k = e.props.className || "", w = i(F(F({}, r), {}, {
        index: l
      }));
      if (S.push(/* @__PURE__ */ o.default.cloneElement(e, {
        key: "original" + f(e, l),
        "data-index": l,
        className: (0, c.default)(w, k),
        tabIndex: "-1",
        "aria-hidden": !w["slick-active"],
        style: F(F({
          outline: "none"
        }, e.props.style || {}), p),
        onClick: function(j) {
          e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
        }
      })), r.infinite && O > 1 && r.fade === !1 && !r.unslick) {
        var C = O - l;
        C <= (0, h.getPreClones)(r) && (v = -C, v >= P && (e = W), w = i(F(F({}, r), {}, {
          index: v
        })), u.push(/* @__PURE__ */ o.default.cloneElement(e, {
          key: "precloned" + f(e, v),
          "data-index": v,
          tabIndex: "-1",
          className: (0, c.default)(w, k),
          "aria-hidden": !w["slick-active"],
          style: F(F({}, e.props.style || {}), p),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        }))), l < (0, h.getPostClones)(r) && (v = O + l, v < t && (e = W), w = i(F(F({}, r), {}, {
          index: v
        })), m.push(/* @__PURE__ */ o.default.cloneElement(e, {
          key: "postcloned" + f(e, v),
          "data-index": v,
          tabIndex: "-1",
          className: (0, c.default)(w, k),
          "aria-hidden": !w["slick-active"],
          style: F(F({}, e.props.style || {}), p),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        })));
      }
    }), r.rtl ? u.concat(S, m).reverse() : u.concat(S, m);
  };
  return he.Track = /* @__PURE__ */ (function(a) {
    z(v, a);
    var r = Y(v);
    function v() {
      var S;
      x(this, v);
      for (var u = arguments.length, m = new Array(u), O = 0; O < u; O++)
        m[O] = arguments[O];
      return S = r.call.apply(r, [this].concat(m)), K($(S), "node", null), K($(S), "handleRef", function(P) {
        S.node = P;
      }), S;
    }
    return I(v, [{
      key: "render",
      value: function() {
        var u = d(this.props), m = this.props, O = m.onMouseEnter, P = m.onMouseOver, t = m.onMouseLeave, W = {
          onMouseEnter: O,
          onMouseOver: P,
          onMouseLeave: t
        };
        return /* @__PURE__ */ o.default.createElement("div", g({
          ref: this.handleRef,
          className: "slick-track",
          style: this.props.trackStyle
        }, W), u);
      }
    }]), v;
  })(o.default.PureComponent), he;
}
var ye = {}, Fe;
function dt() {
  if (Fe) return ye;
  Fe = 1;
  function o(i) {
    "@babel/helpers - typeof";
    return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, o(i);
  }
  Object.defineProperty(ye, "__esModule", {
    value: !0
  }), ye.Dots = void 0;
  var c = y(ue), h = y(_e()), b = ge();
  function y(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function g(i, s) {
    var f = Object.keys(i);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(i);
      s && (d = d.filter(function(a) {
        return Object.getOwnPropertyDescriptor(i, a).enumerable;
      })), f.push.apply(f, d);
    }
    return f;
  }
  function x(i) {
    for (var s = 1; s < arguments.length; s++) {
      var f = arguments[s] != null ? arguments[s] : {};
      s % 2 ? g(Object(f), !0).forEach(function(d) {
        L(i, d, f[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(f)) : g(Object(f)).forEach(function(d) {
        Object.defineProperty(i, d, Object.getOwnPropertyDescriptor(f, d));
      });
    }
    return i;
  }
  function L(i, s, f) {
    return (s = Y(s)) in i ? Object.defineProperty(i, s, { value: f, enumerable: !0, configurable: !0, writable: !0 }) : i[s] = f, i;
  }
  function I(i, s) {
    if (!(i instanceof s)) throw new TypeError("Cannot call a class as a function");
  }
  function z(i, s) {
    for (var f = 0; f < s.length; f++) {
      var d = s[f];
      d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(i, Y(d.key), d);
    }
  }
  function M(i, s, f) {
    return s && z(i.prototype, s), Object.defineProperty(i, "prototype", { writable: !1 }), i;
  }
  function Y(i) {
    var s = Q(i, "string");
    return o(s) == "symbol" ? s : s + "";
  }
  function Q(i, s) {
    if (o(i) != "object" || !i) return i;
    var f = i[Symbol.toPrimitive];
    if (f !== void 0) {
      var d = f.call(i, s);
      if (o(d) != "object") return d;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(i);
  }
  function $(i, s) {
    if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
    i.prototype = Object.create(s && s.prototype, { constructor: { value: i, writable: !0, configurable: !0 } }), Object.defineProperty(i, "prototype", { writable: !1 }), s && V(i, s);
  }
  function V(i, s) {
    return V = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(f, d) {
      return f.__proto__ = d, f;
    }, V(i, s);
  }
  function T(i) {
    var s = K();
    return function() {
      var f, d = J(i);
      if (s) {
        var a = J(this).constructor;
        f = Reflect.construct(d, arguments, a);
      } else f = d.apply(this, arguments);
      return ee(this, f);
    };
  }
  function ee(i, s) {
    if (s && (o(s) == "object" || typeof s == "function")) return s;
    if (s !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return F(i);
  }
  function F(i) {
    if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return i;
  }
  function K() {
    try {
      var i = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (K = function() {
      return !!i;
    })();
  }
  function J(i) {
    return J = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, J(i);
  }
  var U = function(s) {
    var f;
    return s.infinite ? f = Math.ceil(s.slideCount / s.slidesToScroll) : f = Math.ceil((s.slideCount - s.slidesToShow) / s.slidesToScroll) + 1, f;
  };
  return ye.Dots = /* @__PURE__ */ (function(i) {
    $(f, i);
    var s = T(f);
    function f() {
      return I(this, f), s.apply(this, arguments);
    }
    return M(f, [{
      key: "clickHandler",
      value: function(a, r) {
        r.preventDefault(), this.props.clickHandler(a);
      }
    }, {
      key: "render",
      value: function() {
        for (var a = this.props, r = a.onMouseEnter, v = a.onMouseOver, S = a.onMouseLeave, u = a.infinite, m = a.slidesToScroll, O = a.slidesToShow, P = a.slideCount, t = a.currentSlide, W = U({
          slideCount: P,
          slidesToScroll: m,
          slidesToShow: O,
          infinite: u
        }), l = {
          onMouseEnter: r,
          onMouseOver: v,
          onMouseLeave: S
        }, e = [], n = 0; n < W; n++) {
          var p = (n + 1) * m - 1, k = u ? p : (0, b.clamp)(p, 0, P - 1), w = k - (m - 1), C = u ? w : (0, b.clamp)(w, 0, P - 1), _ = (0, h.default)({
            "slick-active": u ? t >= C && t <= k : t === C
          }), j = {
            message: "dots",
            index: n,
            slidesToScroll: m,
            currentSlide: t
          }, N = this.clickHandler.bind(this, j);
          e = e.concat(/* @__PURE__ */ c.default.createElement("li", {
            key: n,
            className: _
          }, /* @__PURE__ */ c.default.cloneElement(this.props.customPaging(n), {
            onClick: N
          })));
        }
        return /* @__PURE__ */ c.default.cloneElement(this.props.appendDots(e), x({
          className: this.props.dotsClass
        }, l));
      }
    }]), f;
  })(c.default.PureComponent), ye;
}
var se = {}, Ge;
function pt() {
  if (Ge) return se;
  Ge = 1;
  function o(i) {
    "@babel/helpers - typeof";
    return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, o(i);
  }
  Object.defineProperty(se, "__esModule", {
    value: !0
  }), se.PrevArrow = se.NextArrow = void 0;
  var c = y(ue), h = y(_e()), b = ge();
  function y(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(i) {
      for (var s = 1; s < arguments.length; s++) {
        var f = arguments[s];
        for (var d in f)
          ({}).hasOwnProperty.call(f, d) && (i[d] = f[d]);
      }
      return i;
    }, g.apply(null, arguments);
  }
  function x(i, s) {
    var f = Object.keys(i);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(i);
      s && (d = d.filter(function(a) {
        return Object.getOwnPropertyDescriptor(i, a).enumerable;
      })), f.push.apply(f, d);
    }
    return f;
  }
  function L(i) {
    for (var s = 1; s < arguments.length; s++) {
      var f = arguments[s] != null ? arguments[s] : {};
      s % 2 ? x(Object(f), !0).forEach(function(d) {
        I(i, d, f[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(f)) : x(Object(f)).forEach(function(d) {
        Object.defineProperty(i, d, Object.getOwnPropertyDescriptor(f, d));
      });
    }
    return i;
  }
  function I(i, s, f) {
    return (s = Q(s)) in i ? Object.defineProperty(i, s, { value: f, enumerable: !0, configurable: !0, writable: !0 }) : i[s] = f, i;
  }
  function z(i, s) {
    if (!(i instanceof s)) throw new TypeError("Cannot call a class as a function");
  }
  function M(i, s) {
    for (var f = 0; f < s.length; f++) {
      var d = s[f];
      d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(i, Q(d.key), d);
    }
  }
  function Y(i, s, f) {
    return s && M(i.prototype, s), Object.defineProperty(i, "prototype", { writable: !1 }), i;
  }
  function Q(i) {
    var s = $(i, "string");
    return o(s) == "symbol" ? s : s + "";
  }
  function $(i, s) {
    if (o(i) != "object" || !i) return i;
    var f = i[Symbol.toPrimitive];
    if (f !== void 0) {
      var d = f.call(i, s);
      if (o(d) != "object") return d;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(i);
  }
  function V(i, s) {
    if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
    i.prototype = Object.create(s && s.prototype, { constructor: { value: i, writable: !0, configurable: !0 } }), Object.defineProperty(i, "prototype", { writable: !1 }), s && T(i, s);
  }
  function T(i, s) {
    return T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(f, d) {
      return f.__proto__ = d, f;
    }, T(i, s);
  }
  function ee(i) {
    var s = J();
    return function() {
      var f, d = U(i);
      if (s) {
        var a = U(this).constructor;
        f = Reflect.construct(d, arguments, a);
      } else f = d.apply(this, arguments);
      return F(this, f);
    };
  }
  function F(i, s) {
    if (s && (o(s) == "object" || typeof s == "function")) return s;
    if (s !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return K(i);
  }
  function K(i) {
    if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return i;
  }
  function J() {
    try {
      var i = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (J = function() {
      return !!i;
    })();
  }
  function U(i) {
    return U = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, U(i);
  }
  return se.PrevArrow = /* @__PURE__ */ (function(i) {
    V(f, i);
    var s = ee(f);
    function f() {
      return z(this, f), s.apply(this, arguments);
    }
    return Y(f, [{
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
        var v = {
          key: "0",
          "data-role": "none",
          className: (0, h.default)(a),
          style: {
            display: "block"
          },
          onClick: r
        }, S = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, u;
        return this.props.prevArrow ? u = /* @__PURE__ */ c.default.cloneElement(this.props.prevArrow, L(L({}, v), S)) : u = /* @__PURE__ */ c.default.createElement("button", g({
          key: "0",
          type: "button"
        }, v), " ", "Previous"), u;
      }
    }]), f;
  })(c.default.PureComponent), se.NextArrow = /* @__PURE__ */ (function(i) {
    V(f, i);
    var s = ee(f);
    function f() {
      return z(this, f), s.apply(this, arguments);
    }
    return Y(f, [{
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
        (0, b.canGoNext)(this.props) || (a["slick-disabled"] = !0, r = null);
        var v = {
          key: "1",
          "data-role": "none",
          className: (0, h.default)(a),
          style: {
            display: "block"
          },
          onClick: r
        }, S = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, u;
        return this.props.nextArrow ? u = /* @__PURE__ */ c.default.cloneElement(this.props.nextArrow, L(L({}, v), S)) : u = /* @__PURE__ */ c.default.createElement("button", g({
          key: "1",
          type: "button"
        }, v), " ", "Next"), u;
      }
    }]), f;
  })(c.default.PureComponent), se;
}
var Je = (function() {
  if (typeof Map < "u")
    return Map;
  function o(c, h) {
    var b = -1;
    return c.some(function(y, g) {
      return y[0] === h ? (b = g, !0) : !1;
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
      }), c.prototype.get = function(h) {
        var b = o(this.__entries__, h), y = this.__entries__[b];
        return y && y[1];
      }, c.prototype.set = function(h, b) {
        var y = o(this.__entries__, h);
        ~y ? this.__entries__[y][1] = b : this.__entries__.push([h, b]);
      }, c.prototype.delete = function(h) {
        var b = this.__entries__, y = o(b, h);
        ~y && b.splice(y, 1);
      }, c.prototype.has = function(h) {
        return !!~o(this.__entries__, h);
      }, c.prototype.clear = function() {
        this.__entries__.splice(0);
      }, c.prototype.forEach = function(h, b) {
        b === void 0 && (b = null);
        for (var y = 0, g = this.__entries__; y < g.length; y++) {
          var x = g[y];
          h.call(b, x[1], x[0]);
        }
      }, c;
    })()
  );
})(), Re = typeof window < "u" && typeof document < "u" && window.document === document, we = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), vt = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(we) : function(o) {
    return setTimeout(function() {
      return o(Date.now());
    }, 1e3 / 60);
  };
})(), ht = 2;
function yt(o, c) {
  var h = !1, b = !1, y = 0;
  function g() {
    h && (h = !1, o()), b && L();
  }
  function x() {
    vt(g);
  }
  function L() {
    var I = Date.now();
    if (h) {
      if (I - y < ht)
        return;
      b = !0;
    } else
      h = !0, b = !1, setTimeout(x, c);
    y = I;
  }
  return L;
}
var gt = 20, bt = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], mt = typeof MutationObserver < "u", St = (
  /** @class */
  (function() {
    function o() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = yt(this.refresh.bind(this), gt);
    }
    return o.prototype.addObserver = function(c) {
      ~this.observers_.indexOf(c) || this.observers_.push(c), this.connected_ || this.connect_();
    }, o.prototype.removeObserver = function(c) {
      var h = this.observers_, b = h.indexOf(c);
      ~b && h.splice(b, 1), !h.length && this.connected_ && this.disconnect_();
    }, o.prototype.refresh = function() {
      var c = this.updateObservers_();
      c && this.refresh();
    }, o.prototype.updateObservers_ = function() {
      var c = this.observers_.filter(function(h) {
        return h.gatherActive(), h.hasActive();
      });
      return c.forEach(function(h) {
        return h.broadcastActive();
      }), c.length > 0;
    }, o.prototype.connect_ = function() {
      !Re || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), mt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, o.prototype.disconnect_ = function() {
      !Re || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, o.prototype.onTransitionEnd_ = function(c) {
      var h = c.propertyName, b = h === void 0 ? "" : h, y = bt.some(function(g) {
        return !!~b.indexOf(g);
      });
      y && this.refresh();
    }, o.getInstance = function() {
      return this.instance_ || (this.instance_ = new o()), this.instance_;
    }, o.instance_ = null, o;
  })()
), Qe = (function(o, c) {
  for (var h = 0, b = Object.keys(c); h < b.length; h++) {
    var y = b[h];
    Object.defineProperty(o, y, {
      value: c[y],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return o;
}), fe = (function(o) {
  var c = o && o.ownerDocument && o.ownerDocument.defaultView;
  return c || we;
}), Ze = ke(0, 0, 0, 0);
function Oe(o) {
  return parseFloat(o) || 0;
}
function Be(o) {
  for (var c = [], h = 1; h < arguments.length; h++)
    c[h - 1] = arguments[h];
  return c.reduce(function(b, y) {
    var g = o["border-" + y + "-width"];
    return b + Oe(g);
  }, 0);
}
function wt(o) {
  for (var c = ["top", "right", "bottom", "left"], h = {}, b = 0, y = c; b < y.length; b++) {
    var g = y[b], x = o["padding-" + g];
    h[g] = Oe(x);
  }
  return h;
}
function Ot(o) {
  var c = o.getBBox();
  return ke(0, 0, c.width, c.height);
}
function _t(o) {
  var c = o.clientWidth, h = o.clientHeight;
  if (!c && !h)
    return Ze;
  var b = fe(o).getComputedStyle(o), y = wt(b), g = y.left + y.right, x = y.top + y.bottom, L = Oe(b.width), I = Oe(b.height);
  if (b.boxSizing === "border-box" && (Math.round(L + g) !== c && (L -= Be(b, "left", "right") + g), Math.round(I + x) !== h && (I -= Be(b, "top", "bottom") + x)), !Pt(o)) {
    var z = Math.round(L + g) - c, M = Math.round(I + x) - h;
    Math.abs(z) !== 1 && (L -= z), Math.abs(M) !== 1 && (I -= M);
  }
  return ke(y.left, y.top, L, I);
}
var kt = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(o) {
    return o instanceof fe(o).SVGGraphicsElement;
  } : function(o) {
    return o instanceof fe(o).SVGElement && typeof o.getBBox == "function";
  };
})();
function Pt(o) {
  return o === fe(o).document.documentElement;
}
function Tt(o) {
  return Re ? kt(o) ? Ot(o) : _t(o) : Ze;
}
function Ct(o) {
  var c = o.x, h = o.y, b = o.width, y = o.height, g = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, x = Object.create(g.prototype);
  return Qe(x, {
    x: c,
    y: h,
    width: b,
    height: y,
    top: h,
    right: c + b,
    bottom: y + h,
    left: c
  }), x;
}
function ke(o, c, h, b) {
  return { x: o, y: c, width: h, height: b };
}
var jt = (
  /** @class */
  (function() {
    function o(c) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ke(0, 0, 0, 0), this.target = c;
    }
    return o.prototype.isActive = function() {
      var c = Tt(this.target);
      return this.contentRect_ = c, c.width !== this.broadcastWidth || c.height !== this.broadcastHeight;
    }, o.prototype.broadcastRect = function() {
      var c = this.contentRect_;
      return this.broadcastWidth = c.width, this.broadcastHeight = c.height, c;
    }, o;
  })()
), Et = (
  /** @class */
  /* @__PURE__ */ (function() {
    function o(c, h) {
      var b = Ct(h);
      Qe(this, { target: c, contentRect: b });
    }
    return o;
  })()
), Lt = (
  /** @class */
  (function() {
    function o(c, h, b) {
      if (this.activeObservations_ = [], this.observations_ = new Je(), typeof c != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = c, this.controller_ = h, this.callbackCtx_ = b;
    }
    return o.prototype.observe = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof fe(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var h = this.observations_;
        h.has(c) || (h.set(c, new jt(c)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, o.prototype.unobserve = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof fe(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var h = this.observations_;
        h.has(c) && (h.delete(c), h.size || this.controller_.removeObserver(this));
      }
    }, o.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, o.prototype.gatherActive = function() {
      var c = this;
      this.clearActive(), this.observations_.forEach(function(h) {
        h.isActive() && c.activeObservations_.push(h);
      });
    }, o.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var c = this.callbackCtx_, h = this.activeObservations_.map(function(b) {
          return new Et(b.target, b.broadcastRect());
        });
        this.callback_.call(c, h, c), this.clearActive();
      }
    }, o.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, o.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, o;
  })()
), et = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Je(), tt = (
  /** @class */
  /* @__PURE__ */ (function() {
    function o(c) {
      if (!(this instanceof o))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var h = St.getInstance(), b = new Lt(c, h, this);
      et.set(this, b);
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
    var c;
    return (c = et.get(this))[o].apply(c, arguments);
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
  var o = z(ue), c = z(ut()), h = z(ct()), b = z(_e()), y = ge(), g = ft(), x = dt(), L = pt(), I = z(Rt);
  function z(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function M(u) {
    "@babel/helpers - typeof";
    return M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
      return typeof m;
    } : function(m) {
      return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
    }, M(u);
  }
  function Y() {
    return Y = Object.assign ? Object.assign.bind() : function(u) {
      for (var m = 1; m < arguments.length; m++) {
        var O = arguments[m];
        for (var P in O)
          ({}).hasOwnProperty.call(O, P) && (u[P] = O[P]);
      }
      return u;
    }, Y.apply(null, arguments);
  }
  function Q(u, m) {
    if (u == null) return {};
    var O, P, t = $(u, m);
    if (Object.getOwnPropertySymbols) {
      var W = Object.getOwnPropertySymbols(u);
      for (P = 0; P < W.length; P++)
        O = W[P], m.includes(O) || {}.propertyIsEnumerable.call(u, O) && (t[O] = u[O]);
    }
    return t;
  }
  function $(u, m) {
    if (u == null) return {};
    var O = {};
    for (var P in u)
      if ({}.hasOwnProperty.call(u, P)) {
        if (m.includes(P)) continue;
        O[P] = u[P];
      }
    return O;
  }
  function V(u, m) {
    var O = Object.keys(u);
    if (Object.getOwnPropertySymbols) {
      var P = Object.getOwnPropertySymbols(u);
      m && (P = P.filter(function(t) {
        return Object.getOwnPropertyDescriptor(u, t).enumerable;
      })), O.push.apply(O, P);
    }
    return O;
  }
  function T(u) {
    for (var m = 1; m < arguments.length; m++) {
      var O = arguments[m] != null ? arguments[m] : {};
      m % 2 ? V(Object(O), !0).forEach(function(P) {
        r(u, P, O[P]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(O)) : V(Object(O)).forEach(function(P) {
        Object.defineProperty(u, P, Object.getOwnPropertyDescriptor(O, P));
      });
    }
    return u;
  }
  function ee(u, m) {
    if (!(u instanceof m)) throw new TypeError("Cannot call a class as a function");
  }
  function F(u, m) {
    for (var O = 0; O < m.length; O++) {
      var P = m[O];
      P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(u, v(P.key), P);
    }
  }
  function K(u, m, O) {
    return m && F(u.prototype, m), Object.defineProperty(u, "prototype", { writable: !1 }), u;
  }
  function J(u, m) {
    if (typeof m != "function" && m !== null) throw new TypeError("Super expression must either be null or a function");
    u.prototype = Object.create(m && m.prototype, { constructor: { value: u, writable: !0, configurable: !0 } }), Object.defineProperty(u, "prototype", { writable: !1 }), m && U(u, m);
  }
  function U(u, m) {
    return U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(O, P) {
      return O.__proto__ = P, O;
    }, U(u, m);
  }
  function i(u) {
    var m = d();
    return function() {
      var O, P = a(u);
      if (m) {
        var t = a(this).constructor;
        O = Reflect.construct(P, arguments, t);
      } else O = P.apply(this, arguments);
      return s(this, O);
    };
  }
  function s(u, m) {
    if (m && (M(m) == "object" || typeof m == "function")) return m;
    if (m !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
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
  function a(u) {
    return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(m) {
      return m.__proto__ || Object.getPrototypeOf(m);
    }, a(u);
  }
  function r(u, m, O) {
    return (m = v(m)) in u ? Object.defineProperty(u, m, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : u[m] = O, u;
  }
  function v(u) {
    var m = S(u, "string");
    return M(m) == "symbol" ? m : m + "";
  }
  function S(u, m) {
    if (M(u) != "object" || !u) return u;
    var O = u[Symbol.toPrimitive];
    if (O !== void 0) {
      var P = O.call(u, m);
      if (M(P) != "object") return P;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (m === "string" ? String : Number)(u);
  }
  return ve.InnerSlider = /* @__PURE__ */ (function(u) {
    J(O, u);
    var m = i(O);
    function O(P) {
      var t;
      ee(this, O), t = m.call(this, P), r(f(t), "listRefHandler", function(l) {
        return t.list = l;
      }), r(f(t), "trackRefHandler", function(l) {
        return t.track = l;
      }), r(f(t), "adaptHeight", function() {
        if (t.props.adaptiveHeight && t.list) {
          var l = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
          t.list.style.height = (0, y.getHeight)(l) + "px";
        }
      }), r(f(t), "componentDidMount", function() {
        if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
          var l = (0, y.getOnDemandLazySlides)(T(T({}, t.props), t.state));
          l.length > 0 && (t.setState(function(n) {
            return {
              lazyLoadedList: n.lazyLoadedList.concat(l)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(l));
        }
        var e = T({
          listRef: t.list,
          trackRef: t.track
        }, t.props);
        t.updateState(e, !0, function() {
          t.adaptHeight(), t.props.autoplay && t.autoPlay("update");
        }), t.props.lazyLoad === "progressive" && (t.lazyLoadTimer = setInterval(t.progressiveLazyLoad, 1e3)), t.ro = new I.default(function() {
          t.state.animating ? (t.onWindowResized(!1), t.callbackTimers.push(setTimeout(function() {
            return t.onWindowResized();
          }, t.props.speed))) : t.onWindowResized();
        }), t.ro.observe(t.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(n) {
          n.onfocus = t.props.pauseOnFocus ? t.onSlideFocus : null, n.onblur = t.props.pauseOnFocus ? t.onSlideBlur : null;
        }), window.addEventListener ? window.addEventListener("resize", t.onWindowResized) : window.attachEvent("onresize", t.onWindowResized);
      }), r(f(t), "componentWillUnmount", function() {
        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach(function(l) {
          return clearTimeout(l);
        }), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
      }), r(f(t), "componentDidUpdate", function(l) {
        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
          var e = (0, y.getOnDemandLazySlides)(T(T({}, t.props), t.state));
          e.length > 0 && (t.setState(function(k) {
            return {
              lazyLoadedList: k.lazyLoadedList.concat(e)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(e));
        }
        t.adaptHeight();
        var n = T(T({
          listRef: t.list,
          trackRef: t.track
        }, t.props), t.state), p = t.didPropsChange(l);
        p && t.updateState(n, p, function() {
          t.state.currentSlide >= o.default.Children.count(t.props.children) && t.changeSlide({
            message: "index",
            index: o.default.Children.count(t.props.children) - t.props.slidesToShow,
            currentSlide: t.state.currentSlide
          }), t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
        });
      }), r(f(t), "onWindowResized", function(l) {
        t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, h.default)(function() {
          return t.resizeWindow(l);
        }, 50), t.debouncedResize();
      }), r(f(t), "resizeWindow", function() {
        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = !!(t.track && t.track.node);
        if (e) {
          var n = T(T({
            listRef: t.list,
            trackRef: t.track
          }, t.props), t.state);
          t.updateState(n, l, function() {
            t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
          }), t.setState({
            animating: !1
          }), clearTimeout(t.animationEndCallback), delete t.animationEndCallback;
        }
      }), r(f(t), "updateState", function(l, e, n) {
        var p = (0, y.initializedState)(l);
        l = T(T(T({}, l), p), {}, {
          slideIndex: p.currentSlide
        });
        var k = (0, y.getTrackLeft)(l);
        l = T(T({}, l), {}, {
          left: k
        });
        var w = (0, y.getTrackCSS)(l);
        (e || o.default.Children.count(t.props.children) !== o.default.Children.count(l.children)) && (p.trackStyle = w), t.setState(p, n);
      }), r(f(t), "ssrInit", function() {
        if (t.props.variableWidth) {
          var l = 0, e = 0, n = [], p = (0, y.getPreClones)(T(T(T({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          })), k = (0, y.getPostClones)(T(T(T({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          }));
          t.props.children.forEach(function(te) {
            n.push(te.props.style.width), l += te.props.style.width;
          });
          for (var w = 0; w < p; w++)
            e += n[n.length - 1 - w], l += n[n.length - 1 - w];
          for (var C = 0; C < k; C++)
            l += n[C];
          for (var _ = 0; _ < t.state.currentSlide; _++)
            e += n[_];
          var j = {
            width: l + "px",
            left: -e + "px"
          };
          if (t.props.centerMode) {
            var N = "".concat(n[t.state.currentSlide], "px");
            j.left = "calc(".concat(j.left, " + (100% - ").concat(N, ") / 2 ) ");
          }
          return {
            trackStyle: j
          };
        }
        var H = o.default.Children.count(t.props.children), A = T(T(T({}, t.props), t.state), {}, {
          slideCount: H
        }), X = (0, y.getPreClones)(A) + (0, y.getPostClones)(A) + H, B = 100 / t.props.slidesToShow * X, q = 100 / X, D = -q * ((0, y.getPreClones)(A) + t.state.currentSlide) * B / 100;
        t.props.centerMode && (D += (100 - q * B / 100) / 2);
        var G = {
          width: B + "%",
          left: D + "%"
        };
        return {
          slideWidth: q + "%",
          trackStyle: G
        };
      }), r(f(t), "checkImagesLoad", function() {
        var l = t.list && t.list.querySelectorAll && t.list.querySelectorAll(".slick-slide img") || [], e = l.length, n = 0;
        Array.prototype.forEach.call(l, function(p) {
          var k = function() {
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
          } : (p.onload = k, p.onerror = function() {
            k(), t.props.onLazyLoadError && t.props.onLazyLoadError();
          }));
        });
      }), r(f(t), "progressiveLazyLoad", function() {
        for (var l = [], e = T(T({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, y.getPostClones)(e); n++)
          if (t.state.lazyLoadedList.indexOf(n) < 0) {
            l.push(n);
            break;
          }
        for (var p = t.state.currentSlide - 1; p >= -(0, y.getPreClones)(e); p--)
          if (t.state.lazyLoadedList.indexOf(p) < 0) {
            l.push(p);
            break;
          }
        l.length > 0 ? (t.setState(function(k) {
          return {
            lazyLoadedList: k.lazyLoadedList.concat(l)
          };
        }), t.props.onLazyLoad && t.props.onLazyLoad(l)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
      }), r(f(t), "slideHandler", function(l) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = t.props, p = n.asNavFor, k = n.beforeChange, w = n.onLazyLoad, C = n.speed, _ = n.afterChange, j = t.state.currentSlide, N = (0, y.slideHandler)(T(T(T({
          index: l
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e
        })), H = N.state, A = N.nextState;
        if (H) {
          k && k(j, H.currentSlide);
          var X = H.lazyLoadedList.filter(function(B) {
            return t.state.lazyLoadedList.indexOf(B) < 0;
          });
          w && X.length > 0 && w(X), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), _ && _(j), delete t.animationEndCallback), t.setState(H, function() {
            p && t.asNavForIndex !== l && (t.asNavForIndex = l, p.innerSlider.slideHandler(l)), A && (t.animationEndCallback = setTimeout(function() {
              var B = A.animating, q = Q(A, ["animating"]);
              t.setState(q, function() {
                t.callbackTimers.push(setTimeout(function() {
                  return t.setState({
                    animating: B
                  });
                }, 10)), _ && _(H.currentSlide), delete t.animationEndCallback;
              });
            }, C));
          });
        }
      }), r(f(t), "changeSlide", function(l) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = T(T({}, t.props), t.state), p = (0, y.changeSlide)(n, l);
        if (!(p !== 0 && !p) && (e === !0 ? t.slideHandler(p, e) : t.slideHandler(p), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
          var k = t.list.querySelectorAll(".slick-current");
          k[0] && k[0].focus();
        }
      }), r(f(t), "clickHandler", function(l) {
        t.clickable === !1 && (l.stopPropagation(), l.preventDefault()), t.clickable = !0;
      }), r(f(t), "keyHandler", function(l) {
        var e = (0, y.keyHandler)(l, t.props.accessibility, t.props.rtl);
        e !== "" && t.changeSlide({
          message: e
        });
      }), r(f(t), "selectHandler", function(l) {
        t.changeSlide(l);
      }), r(f(t), "disableBodyScroll", function() {
        var l = function(n) {
          n = n || window.event, n.preventDefault && n.preventDefault(), n.returnValue = !1;
        };
        window.ontouchmove = l;
      }), r(f(t), "enableBodyScroll", function() {
        window.ontouchmove = null;
      }), r(f(t), "swipeStart", function(l) {
        t.props.verticalSwiping && t.disableBodyScroll();
        var e = (0, y.swipeStart)(l, t.props.swipe, t.props.draggable);
        e !== "" && t.setState(e);
      }), r(f(t), "swipeMove", function(l) {
        var e = (0, y.swipeMove)(l, T(T(T({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(f(t), "swipeEnd", function(l) {
        var e = (0, y.swipeEnd)(l, T(T(T({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        if (e) {
          var n = e.triggerSlideHandler;
          delete e.triggerSlideHandler, t.setState(e), n !== void 0 && (t.slideHandler(n), t.props.verticalSwiping && t.enableBodyScroll());
        }
      }), r(f(t), "touchEnd", function(l) {
        t.swipeEnd(l), t.clickable = !0;
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
      }), r(f(t), "slickGoTo", function(l) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (l = Number(l), isNaN(l)) return "";
        t.callbackTimers.push(setTimeout(function() {
          return t.changeSlide({
            message: "index",
            index: l,
            currentSlide: t.state.currentSlide
          }, e);
        }, 0));
      }), r(f(t), "play", function() {
        var l;
        if (t.props.rtl)
          l = t.state.currentSlide - t.props.slidesToScroll;
        else if ((0, y.canGoNext)(T(T({}, t.props), t.state)))
          l = t.state.currentSlide + t.props.slidesToScroll;
        else
          return !1;
        t.slideHandler(l);
      }), r(f(t), "autoPlay", function(l) {
        t.autoplayTimer && clearInterval(t.autoplayTimer);
        var e = t.state.autoplaying;
        if (l === "update") {
          if (e === "hovered" || e === "focused" || e === "paused")
            return;
        } else if (l === "leave") {
          if (e === "paused" || e === "focused")
            return;
        } else if (l === "blur" && (e === "paused" || e === "hovered"))
          return;
        t.autoplayTimer = setInterval(t.play, t.props.autoplaySpeed + 50), t.setState({
          autoplaying: "playing"
        });
      }), r(f(t), "pause", function(l) {
        t.autoplayTimer && (clearInterval(t.autoplayTimer), t.autoplayTimer = null);
        var e = t.state.autoplaying;
        l === "paused" ? t.setState({
          autoplaying: "paused"
        }) : l === "focused" ? (e === "hovered" || e === "playing") && t.setState({
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
        var l = (0, b.default)("slick-slider", t.props.className, {
          "slick-vertical": t.props.vertical,
          "slick-initialized": !0
        }), e = T(T({}, t.props), t.state), n = (0, y.extractObject)(e, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), p = t.props.pauseOnHover;
        n = T(T({}, n), {}, {
          onMouseEnter: p ? t.onTrackOver : null,
          onMouseLeave: p ? t.onTrackLeave : null,
          onMouseOver: p ? t.onTrackOver : null,
          focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
        });
        var k;
        if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
          var w = (0, y.extractObject)(e, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), C = t.props.pauseOnDotsHover;
          w = T(T({}, w), {}, {
            clickHandler: t.changeSlide,
            onMouseEnter: C ? t.onDotsLeave : null,
            onMouseOver: C ? t.onDotsOver : null,
            onMouseLeave: C ? t.onDotsLeave : null
          }), k = /* @__PURE__ */ o.default.createElement(x.Dots, w);
        }
        var _, j, N = (0, y.extractObject)(e, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        N.clickHandler = t.changeSlide, t.props.arrows && (_ = /* @__PURE__ */ o.default.createElement(L.PrevArrow, N), j = /* @__PURE__ */ o.default.createElement(L.NextArrow, N));
        var H = null;
        t.props.vertical && (H = {
          height: t.state.listHeight
        });
        var A = null;
        t.props.vertical === !1 ? t.props.centerMode === !0 && (A = {
          padding: "0px " + t.props.centerPadding
        }) : t.props.centerMode === !0 && (A = {
          padding: t.props.centerPadding + " 0px"
        });
        var X = T(T({}, H), A), B = t.props.touchMove, q = {
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
        }, D = {
          className: l,
          dir: "ltr",
          style: t.props.style
        };
        return t.props.unslick && (q = {
          className: "slick-list"
        }, D = {
          className: l,
          style: t.props.style
        }), /* @__PURE__ */ o.default.createElement("div", D, t.props.unslick ? "" : _, /* @__PURE__ */ o.default.createElement("div", Y({
          ref: t.listRefHandler
        }, q), /* @__PURE__ */ o.default.createElement(g.Track, Y({
          ref: t.trackRefHandler
        }, n), t.props.children)), t.props.unslick ? "" : j, t.props.unslick ? "" : k);
      }), t.list = null, t.track = null, t.state = T(T({}, c.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: o.default.Children.count(t.props.children)
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      var W = t.ssrInit();
      return t.state = T(T({}, t.state), W), t;
    }
    return K(O, [{
      key: "didPropsChange",
      value: function(t) {
        for (var W = !1, l = 0, e = Object.keys(this.props); l < e.length; l++) {
          var n = e[l];
          if (!t.hasOwnProperty(n)) {
            W = !0;
            break;
          }
          if (!(M(t[n]) === "object" || typeof t[n] == "function" || isNaN(t[n])) && t[n] !== this.props[n]) {
            W = !0;
            break;
          }
        }
        return W || o.default.Children.count(this.props.children) !== o.default.Children.count(t.children);
      }
    }]), O;
  })(o.default.Component), ve;
}
var xe, Ke;
function Dt() {
  if (Ke) return xe;
  Ke = 1;
  var o = function(c) {
    return c.replace(/[A-Z]/g, function(h) {
      return "-" + h.toLowerCase();
    }).toLowerCase();
  };
  return xe = o, xe;
}
var Me, Ue;
function Nt() {
  if (Ue) return Me;
  Ue = 1;
  var o = Dt(), c = function(y) {
    var g = /[height|width]$/;
    return g.test(y);
  }, h = function(y) {
    var g = "", x = Object.keys(y);
    return x.forEach(function(L, I) {
      var z = y[L];
      L = o(L), c(L) && typeof z == "number" && (z = z + "px"), z === !0 ? g += L : z === !1 ? g += "not " + L : g += "(" + L + ": " + z + ")", I < x.length - 1 && (g += " and ");
    }), g;
  }, b = function(y) {
    var g = "";
    return typeof y == "string" ? y : y instanceof Array ? (y.forEach(function(x, L) {
      g += h(x), L < y.length - 1 && (g += ", ");
    }), g) : h(y);
  };
  return Me = b, Me;
}
var Ye;
function Ht() {
  return Ye || (Ye = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
    var c = x(ue), h = zt(), b = x(Nt()), y = x(Ve()), g = ge();
    function x(d) {
      return d && d.__esModule ? d : { default: d };
    }
    function L(d) {
      "@babel/helpers - typeof";
      return L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a;
      } : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, L(d);
    }
    function I() {
      return I = Object.assign ? Object.assign.bind() : function(d) {
        for (var a = 1; a < arguments.length; a++) {
          var r = arguments[a];
          for (var v in r)
            ({}).hasOwnProperty.call(r, v) && (d[v] = r[v]);
        }
        return d;
      }, I.apply(null, arguments);
    }
    function z(d, a) {
      var r = Object.keys(d);
      if (Object.getOwnPropertySymbols) {
        var v = Object.getOwnPropertySymbols(d);
        a && (v = v.filter(function(S) {
          return Object.getOwnPropertyDescriptor(d, S).enumerable;
        })), r.push.apply(r, v);
      }
      return r;
    }
    function M(d) {
      for (var a = 1; a < arguments.length; a++) {
        var r = arguments[a] != null ? arguments[a] : {};
        a % 2 ? z(Object(r), !0).forEach(function(v) {
          i(d, v, r[v]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(r)) : z(Object(r)).forEach(function(v) {
          Object.defineProperty(d, v, Object.getOwnPropertyDescriptor(r, v));
        });
      }
      return d;
    }
    function Y(d, a) {
      if (!(d instanceof a)) throw new TypeError("Cannot call a class as a function");
    }
    function Q(d, a) {
      for (var r = 0; r < a.length; r++) {
        var v = a[r];
        v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(d, s(v.key), v);
      }
    }
    function $(d, a, r) {
      return a && Q(d.prototype, a), Object.defineProperty(d, "prototype", { writable: !1 }), d;
    }
    function V(d, a) {
      if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function");
      d.prototype = Object.create(a && a.prototype, { constructor: { value: d, writable: !0, configurable: !0 } }), Object.defineProperty(d, "prototype", { writable: !1 }), a && T(d, a);
    }
    function T(d, a) {
      return T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, v) {
        return r.__proto__ = v, r;
      }, T(d, a);
    }
    function ee(d) {
      var a = J();
      return function() {
        var r, v = U(d);
        if (a) {
          var S = U(this).constructor;
          r = Reflect.construct(v, arguments, S);
        } else r = v.apply(this, arguments);
        return F(this, r);
      };
    }
    function F(d, a) {
      if (a && (L(a) == "object" || typeof a == "function")) return a;
      if (a !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return K(d);
    }
    function K(d) {
      if (d === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return d;
    }
    function J() {
      try {
        var d = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch {
      }
      return (J = function() {
        return !!d;
      })();
    }
    function U(d) {
      return U = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, U(d);
    }
    function i(d, a, r) {
      return (a = s(a)) in d ? Object.defineProperty(d, a, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : d[a] = r, d;
    }
    function s(d) {
      var a = f(d, "string");
      return L(a) == "symbol" ? a : a + "";
    }
    function f(d, a) {
      if (L(d) != "object" || !d) return d;
      var r = d[Symbol.toPrimitive];
      if (r !== void 0) {
        var v = r.call(d, a);
        if (L(v) != "object") return v;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (a === "string" ? String : Number)(d);
    }
    o.default = /* @__PURE__ */ (function(d) {
      V(r, d);
      var a = ee(r);
      function r(v) {
        var S;
        return Y(this, r), S = a.call(this, v), i(K(S), "innerSliderRefHandler", function(u) {
          return S.innerSlider = u;
        }), i(K(S), "slickPrev", function() {
          return S.innerSlider.slickPrev();
        }), i(K(S), "slickNext", function() {
          return S.innerSlider.slickNext();
        }), i(K(S), "slickGoTo", function(u) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return S.innerSlider.slickGoTo(u, m);
        }), i(K(S), "slickPause", function() {
          return S.innerSlider.pause("paused");
        }), i(K(S), "slickPlay", function() {
          return S.innerSlider.autoPlay("play");
        }), S.state = {
          breakpoint: null
        }, S._responsiveMediaHandlers = [], S;
      }
      return $(r, [{
        key: "media",
        value: function(S, u) {
          var m = window.matchMedia(S), O = function(t) {
            var W = t.matches;
            W && u();
          };
          m.addListener(O), this._responsiveMediaHandlers.push({
            mql: m,
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
            u.sort(function(O, P) {
              return O - P;
            }), u.forEach(function(O, P) {
              var t;
              P === 0 ? t = (0, b.default)({
                minWidth: 0,
                maxWidth: O
              }) : t = (0, b.default)({
                minWidth: u[P - 1] + 1,
                maxWidth: O
              }), (0, g.canUseDOM)() && S.media(t, function() {
                S.setState({
                  breakpoint: O
                });
              });
            });
            var m = (0, b.default)({
              minWidth: u.slice(-1)[0]
            });
            (0, g.canUseDOM)() && this.media(m, function() {
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
          var S = this, u, m;
          this.state.breakpoint ? (m = this.props.responsive.filter(function(w) {
            return w.breakpoint === S.state.breakpoint;
          }), u = m[0].settings === "unslick" ? "unslick" : M(M(M({}, y.default), this.props), m[0].settings)) : u = M(M({}, y.default), this.props), u.centerMode && (u.slidesToScroll > 1 && process.env.NODE_ENV !== "production" && console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(u.slidesToScroll)), u.slidesToScroll = 1), u.fade && (u.slidesToShow > 1 && process.env.NODE_ENV !== "production" && console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(u.slidesToShow)), u.slidesToScroll > 1 && process.env.NODE_ENV !== "production" && console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(u.slidesToScroll)), u.slidesToShow = 1, u.slidesToScroll = 1);
          var O = c.default.Children.toArray(this.props.children);
          O = O.filter(function(w) {
            return typeof w == "string" ? !!w.trim() : !!w;
          }), u.variableWidth && (u.rows > 1 || u.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), u.variableWidth = !1);
          for (var P = [], t = null, W = 0; W < O.length; W += u.rows * u.slidesPerRow) {
            for (var l = [], e = W; e < W + u.rows * u.slidesPerRow; e += u.slidesPerRow) {
              for (var n = [], p = e; p < e + u.slidesPerRow && (u.variableWidth && O[p].props.style && (t = O[p].props.style.width), !(p >= O.length)); p += 1)
                n.push(/* @__PURE__ */ c.default.cloneElement(O[p], {
                  key: 100 * W + 10 * e + p,
                  tabIndex: -1,
                  style: {
                    width: "".concat(100 / u.slidesPerRow, "%"),
                    display: "inline-block"
                  }
                }));
              l.push(/* @__PURE__ */ c.default.createElement("div", {
                key: 10 * W + e
              }, n));
            }
            u.variableWidth ? P.push(/* @__PURE__ */ c.default.createElement("div", {
              key: W,
              style: {
                width: t
              }
            }, l)) : P.push(/* @__PURE__ */ c.default.createElement("div", {
              key: W
            }, l));
          }
          if (u === "unslick") {
            var k = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ c.default.createElement("div", {
              className: k
            }, O);
          } else P.length <= u.slidesToShow && (u.unslick = !0);
          return /* @__PURE__ */ c.default.createElement(h.InnerSlider, I({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, (0, g.filterSettings)(u)), P);
        }
      }]), r;
    })(c.default.Component);
  })(Te)), Te;
}
var $e;
function It() {
  return $e || ($e = 1, (function(o) {
    Object.defineProperty(o, "__esModule", {
      value: !0
    }), o.default = void 0;
    var c = h(Ht());
    function h(b) {
      return b && b.__esModule ? b : { default: b };
    }
    o.default = c.default;
  })(Pe)), Pe;
}
var At = It();
const Wt = /* @__PURE__ */ lt(At);
function qt({
  title: o,
  titleId: c,
  ...h
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
    "aria-labelledby": c
  }, h), o ? /* @__PURE__ */ Se.createElement("title", {
    id: c
  }, o) : null, /* @__PURE__ */ Se.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const Ft = /* @__PURE__ */ Se.forwardRef(qt), Gt = ({
  text: o = "Link",
  href: c = "#",
  variant: h = "dark",
  // dark, light
  icon: b,
  className: y = "",
  ...g
}) => {
  const x = "text-link", L = (M) => {
    switch (M) {
      case "light":
        return "link-light";
      case "dark":
        return "link-dark";
      default:
        return "link-dark";
    }
  }, I = b || Ft, z = `${x} ${L(h)} ${y}`.trim();
  return /* @__PURE__ */ ce(
    "a",
    {
      href: c,
      className: z,
      ...g,
      children: [
        /* @__PURE__ */ ie("span", { children: o }),
        /* @__PURE__ */ ie(I, { className: "text-link-icon" })
      ]
    }
  );
}, Bt = ({
  stacked: o = !0,
  // true = vertical stack, false = horizontal on md+
  imageUrl: c,
  imageAlt: h = "News image",
  title: b,
  description: y,
  linkText: g = "Read more",
  linkHref: x = "#",
  linkVariant: L = "light",
  className: I = "",
  ...z
}) => {
  const M = it(), Y = `
    w-full
    flex
    bg-grey-500
    rounded-[var(--spacing-cards-br)]
    overflow-hidden
    flex-col
    text-left
    ${o ? "" : "md:flex-row"}
    ${I}
  `.trim().replace(/\s+/g, " "), Q = `
    w-full
    aspect-[441/269]
    bg-grey-200
    overflow-hidden
    ${o ? "rounded-t-[var(--spacing-cards-br)]" : "md:rounded-l-[var(--spacing-cards-br)]"}
    ${o ? "" : "md:w-1/2"}
  `.trim().replace(/\s+/g, " "), $ = `
    w-full
    ${o ? "" : "md:w-1/2"}
    p-resource-padding
    flex
    flex-col
    gap-resource-link--spacing-y
    flex-grow
    ${o ? "rounded-b-[var(--spacing-cards-br)]" : "md:rounded-r-[var(--spacing-cards-br)]"}
  `.trim().replace(/\s+/g, " ");
  return /* @__PURE__ */ ce(
    "article",
    {
      className: Y,
      ...b ? { "aria-labelledby": M } : { "aria-label": "News item" },
      ...z,
      children: [
        /* @__PURE__ */ ie("div", { className: Q, children: c && /* @__PURE__ */ ie(
          "img",
          {
            src: c,
            alt: h,
            className: "w-full h-full object-cover"
          }
        ) }),
        /* @__PURE__ */ ce("div", { className: $, children: [
          /* @__PURE__ */ ce("div", { className: "space-y-10", children: [
            b && /* @__PURE__ */ ie("h3", { id: M, className: "text-headings-h3 font-semibold text-white", children: b }),
            y && /* @__PURE__ */ ie("p", { className: "text-body-default text-white", children: y })
          ] }),
          /* @__PURE__ */ ie("div", { className: "mt-auto", children: /* @__PURE__ */ ie(Gt, { text: g, href: x, variant: L }) })
        ] })
      ]
    }
  );
}, Ut = ({
  variant: o = "stacked",
  // 'stacked' | 'row'
  columns: c = 3,
  // stacked: 2 | 3 | 4, row: 1 | 2
  carousel: h = !1,
  items: b = [],
  // Array of { imageUrl, imageAlt, title, description, linkText, linkHref, linkVariant }
  carouselLabel: y = "News carousel",
  className: g = "",
  infinite: x = !0,
  ...L
}) => {
  const [I, z] = De(0), [M, Y] = De(1), Q = ot(null), $ = o === "row", V = $ ? c === 2 ? 2 : 1 : [2, 3, 4].includes(c) ? c : 3, T = () => {
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
  }, ee = "px-12", F = "-mx-12", K = V;
  at(() => {
    if (!h) return;
    const i = () => {
      const f = Q.current;
      if (!f) return;
      f.querySelectorAll(".slick-slide").forEach((a) => {
        a.getAttribute("aria-hidden") === "true" ? a.setAttribute("inert", "") : a.removeAttribute("inert");
      });
      const d = f.querySelectorAll('.slick-slide[aria-hidden="false"]:not(.slick-cloned)');
      Y(Math.max(d.length, 1));
    }, s = window.requestAnimationFrame(i);
    return () => window.cancelAnimationFrame(s);
  }, [h, I, b.length]);
  const J = {
    infinite: x,
    arrows: !1,
    dots: !0,
    slidesToShow: K,
    slidesToScroll: K,
    centerPadding: "0",
    afterChange: z,
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
          slidesToShow: Math.min(K, 2),
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
  }, U = (i, s) => /* @__PURE__ */ ie(
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
      ref: h ? Q : null,
      className: `container ${g}`,
      ...h ? {
        role: "region",
        "aria-roledescription": "carousel",
        "aria-label": y
      } : {},
      ...L,
      children: h ? /* @__PURE__ */ ce(nt, { children: [
        /* @__PURE__ */ ce("div", { "aria-live": "polite", "aria-atomic": "true", className: "sr-only", children: [
          "Showing news items ",
          I + 1,
          " to ",
          Math.min(I + M, b.length),
          " of ",
          b.length
        ] }),
        /* @__PURE__ */ ie(Wt, { ...J, className: `news-carousel ${F}`.trim(), children: b.map((i, s) => /* @__PURE__ */ ie("div", { className: ee, children: U(i, s) }, s)) })
      ] }) : /* @__PURE__ */ ie("div", { className: T(), children: b.map((i, s) => U(i, s)) })
    }
  );
};
export {
  Ut as default
};
