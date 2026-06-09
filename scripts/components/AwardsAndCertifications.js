import { jsx as A, jsxs as ye } from "react/jsx-runtime";
import * as Se from "react";
import ue from "react";
import nt from "lottie-react";
var me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function it(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function ot(i) {
  if (Object.prototype.hasOwnProperty.call(i, "__esModule")) return i;
  var c = i.default;
  if (typeof c == "function") {
    var v = function b() {
      return this instanceof b ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    v.prototype = c.prototype;
  } else v = {};
  return Object.defineProperty(v, "__esModule", { value: !0 }), Object.keys(i).forEach(function(b) {
    var y = Object.getOwnPropertyDescriptor(i, b);
    Object.defineProperty(v, b, y.get ? y : {
      enumerable: !0,
      get: function() {
        return i[b];
      }
    });
  }), v;
}
var Pe = {}, Te = {}, pe = {}, Ce = {}, De;
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
  var i = "Expected a function", c = NaN, v = "[object Symbol]", b = /^\s+|\s+$/g, y = /^[-+]0x[0-9a-f]+$/i, g = /^0b[01]+$/i, x = /^0o[0-7]+$/i, L = parseInt, M = typeof me == "object" && me && me.Object === Object && me, R = typeof self == "object" && self && self.Object === Object && self, z = M || R || Function("return this")(), K = Object.prototype, ne = K.toString, ee = Math.max, U = Math.min, T = function() {
    return z.Date.now();
  };
  function te(a, s, f) {
    var d, l, r, h, S, u, m = 0, O = !1, P = !1, t = !0;
    if (typeof a != "function")
      throw new TypeError(i);
    s = V(s) || 0, G(f) && (O = !!f.leading, P = "maxWait" in f, r = P ? ee(V(f.maxWait) || 0, s) : r, t = "trailing" in f ? !!f.trailing : t);
    function q(j) {
      var H = d, I = l;
      return d = l = void 0, m = j, h = a.apply(I, H), h;
    }
    function o(j) {
      return m = j, S = setTimeout(p, s), O ? q(j) : h;
    }
    function e(j) {
      var H = j - u, I = j - m, W = s - H;
      return P ? U(W, r - I) : W;
    }
    function n(j) {
      var H = j - u, I = j - m;
      return u === void 0 || H >= s || H < 0 || P && I >= r;
    }
    function p() {
      var j = T();
      if (n(j))
        return k(j);
      S = setTimeout(p, e(j));
    }
    function k(j) {
      return S = void 0, t && d ? q(j) : (d = l = void 0, h);
    }
    function w() {
      S !== void 0 && clearTimeout(S), m = 0, d = u = l = S = void 0;
    }
    function C() {
      return S === void 0 ? h : k(T());
    }
    function _() {
      var j = T(), H = n(j);
      if (d = arguments, l = this, u = j, H) {
        if (S === void 0)
          return o(u);
        if (P)
          return S = setTimeout(p, s), q(u);
      }
      return S === void 0 && (S = setTimeout(p, s)), h;
    }
    return _.cancel = w, _.flush = C, _;
  }
  function G(a) {
    var s = typeof a;
    return !!a && (s == "object" || s == "function");
  }
  function $(a) {
    return !!a && typeof a == "object";
  }
  function J(a) {
    return typeof a == "symbol" || $(a) && ne.call(a) == v;
  }
  function V(a) {
    if (typeof a == "number")
      return a;
    if (J(a))
      return c;
    if (G(a)) {
      var s = typeof a.valueOf == "function" ? a.valueOf() : a;
      a = G(s) ? s + "" : s;
    }
    if (typeof a != "string")
      return a === 0 ? a : +a;
    a = a.replace(b, "");
    var f = g.test(a);
    return f || x.test(a) ? L(a.slice(2), f ? 2 : 8) : y.test(a) ? c : +a;
  }
  return je = te, je;
}
var Ee = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var He;
function _e() {
  return He || (He = 1, (function(i) {
    (function() {
      var c = {}.hasOwnProperty;
      function v() {
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
          return v.apply(null, g);
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
      i.exports ? (v.default = v, i.exports = v) : window.classNames = v;
    })();
  })(Ee)), Ee.exports;
}
var E = {}, Le = {}, Ie;
function Ue() {
  return Ie || (Ie = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var c = v(ue);
    function v(y) {
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
    i.default = b;
  })(Le)), Le;
}
var Ae;
function ge() {
  if (Ae) return E;
  Ae = 1, Object.defineProperty(E, "__esModule", {
    value: !0
  }), E.checkSpecKeys = E.checkNavigable = E.changeSlide = E.canUseDOM = E.canGoNext = void 0, E.clamp = R, E.extractObject = void 0, E.filterSettings = q, E.validSettings = E.swipeStart = E.swipeMove = E.swipeEnd = E.slidesOnRight = E.slidesOnLeft = E.slideHandler = E.siblingDirection = E.safePreventDefault = E.lazyStartIndex = E.lazySlidesOnRight = E.lazySlidesOnLeft = E.lazyEndIndex = E.keyHandler = E.initializedState = E.getWidth = E.getTrackLeft = E.getTrackCSS = E.getTrackAnimateCSS = E.getTotalSlides = E.getSwipeDirection = E.getSlideCount = E.getRequiredLazySlides = E.getPreClones = E.getPostClones = E.getOnDemandLazySlides = E.getNavigableIndexes = E.getHeight = void 0;
  var i = v(ue), c = v(Ue());
  function v(o) {
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
      var p = Object.getOwnPropertySymbols(o);
      e && (p = p.filter(function(k) {
        return Object.getOwnPropertyDescriptor(o, k).enumerable;
      })), n.push.apply(n, p);
    }
    return n;
  }
  function g(o) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2 ? y(Object(n), !0).forEach(function(p) {
        x(o, p, n[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(p) {
        Object.defineProperty(o, p, Object.getOwnPropertyDescriptor(n, p));
      });
    }
    return o;
  }
  function x(o, e, n) {
    return (e = L(e)) in o ? Object.defineProperty(o, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = n, o;
  }
  function L(o) {
    var e = M(o, "string");
    return b(e) == "symbol" ? e : e + "";
  }
  function M(o, e) {
    if (b(o) != "object" || !o) return o;
    var n = o[Symbol.toPrimitive];
    if (n !== void 0) {
      var p = n.call(o, e);
      if (b(p) != "object") return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(o);
  }
  function R(o, e, n) {
    return Math.max(e, Math.min(o, n));
  }
  var z = E.safePreventDefault = function(e) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(e._reactName) || e.preventDefault();
  }, K = E.getOnDemandLazySlides = function(e) {
    for (var n = [], p = ne(e), k = ee(e), w = p; w < k; w++)
      e.lazyLoadedList.indexOf(w) < 0 && n.push(w);
    return n;
  };
  E.getRequiredLazySlides = function(e) {
    for (var n = [], p = ne(e), k = ee(e), w = p; w < k; w++)
      n.push(w);
    return n;
  };
  var ne = E.lazyStartIndex = function(e) {
    return e.currentSlide - U(e);
  }, ee = E.lazyEndIndex = function(e) {
    return e.currentSlide + T(e);
  }, U = E.lazySlidesOnLeft = function(e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }, T = E.lazySlidesOnRight = function(e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }, te = E.getWidth = function(e) {
    return e && e.offsetWidth || 0;
  }, G = E.getHeight = function(e) {
    return e && e.offsetHeight || 0;
  }, $ = E.getSwipeDirection = function(e) {
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
    var n = i.default.Children.count(e.children), p = e.listRef, k = Math.ceil(te(p)), w = e.trackRef && e.trackRef.node, C = Math.ceil(te(w)), _;
    if (e.vertical)
      _ = k;
    else {
      var j = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding == "string" && e.centerPadding.slice(-1) === "%" && (j *= k / 100), _ = Math.ceil((k - j) / e.slidesToShow);
    }
    var H = p && G(p.querySelector('[data-index="0"]')), I = H * e.slidesToShow, W = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && (W = n - 1 - e.initialSlide);
    var Y = e.lazyLoadedList || [], X = K(g(g({}, e), {}, {
      currentSlide: W,
      lazyLoadedList: Y
    }));
    Y = Y.concat(X);
    var F = {
      slideCount: n,
      slideWidth: _,
      listWidth: k,
      trackWidth: C,
      currentSlide: W,
      slideHeight: H,
      listHeight: I,
      lazyLoadedList: Y
    };
    return e.autoplaying === null && e.autoplay && (F.autoplaying = "playing"), F;
  }, E.slideHandler = function(e) {
    var n = e.waitForAnimate, p = e.animating, k = e.fade, w = e.infinite, C = e.index, _ = e.slideCount, j = e.lazyLoad, H = e.currentSlide, I = e.centerMode, W = e.slidesToScroll, Y = e.slidesToShow, X = e.useCSS, F = e.lazyLoadedList;
    if (n && p) return {};
    var N = C, B, Z, D, Q = {}, re = {}, ie = w ? C : R(C, 0, _ - 1);
    if (k) {
      if (!w && (C < 0 || C >= _)) return {};
      C < 0 ? N = C + _ : C >= _ && (N = C - _), j && F.indexOf(N) < 0 && (F = F.concat(N)), Q = {
        animating: !0,
        currentSlide: N,
        lazyLoadedList: F,
        targetSlide: N
      }, re = {
        animating: !1,
        targetSlide: N
      };
    } else
      B = N, N < 0 ? (B = N + _, w ? _ % W !== 0 && (B = _ - _ % W) : B = 0) : !J(e) && N > H ? N = B = H : I && N >= _ ? (N = w ? _ : _ - 1, B = w ? 0 : _ - 1) : N >= _ && (B = N - _, w ? _ % W !== 0 && (B = 0) : B = _ - Y), !w && N + Y >= _ && (B = _ - Y), Z = r(g(g({}, e), {}, {
        slideIndex: N
      })), D = r(g(g({}, e), {}, {
        slideIndex: B
      })), w || (Z === D && (N = B), Z = D), j && (F = F.concat(K(g(g({}, e), {}, {
        currentSlide: N
      })))), X ? (Q = {
        animating: !0,
        currentSlide: B,
        trackStyle: l(g(g({}, e), {}, {
          left: Z
        })),
        lazyLoadedList: F,
        targetSlide: ie
      }, re = {
        animating: !1,
        currentSlide: B,
        trackStyle: d(g(g({}, e), {}, {
          left: D
        })),
        swipeLeft: null,
        targetSlide: ie
      }) : Q = {
        currentSlide: B,
        trackStyle: d(g(g({}, e), {}, {
          left: D
        })),
        lazyLoadedList: F,
        targetSlide: ie
      };
    return {
      state: Q,
      nextState: re
    };
  }, E.changeSlide = function(e, n) {
    var p, k, w, C, _, j = e.slidesToScroll, H = e.slidesToShow, I = e.slideCount, W = e.currentSlide, Y = e.targetSlide, X = e.lazyLoad, F = e.infinite;
    if (C = I % j !== 0, p = C ? 0 : (I - W) % j, n.message === "previous")
      w = p === 0 ? j : H - p, _ = W - w, X && !F && (k = W - w, _ = k === -1 ? I - 1 : k), F || (_ = Y - j);
    else if (n.message === "next")
      w = p === 0 ? j : p, _ = W + w, X && !F && (_ = (W + j) % I + p), F || (_ = Y + j);
    else if (n.message === "dots")
      _ = n.index * n.slidesToScroll;
    else if (n.message === "children") {
      if (_ = n.index, F) {
        var N = m(g(g({}, e), {}, {
          targetSlide: _
        }));
        _ > n.currentSlide && N === "left" ? _ = _ - I : _ < n.currentSlide && N === "right" && (_ = _ + I);
      }
    } else n.message === "index" && (_ = Number(n.index));
    return _;
  }, E.keyHandler = function(e, n, p) {
    return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n ? "" : e.keyCode === 37 ? p ? "next" : "previous" : e.keyCode === 39 ? p ? "previous" : "next" : "";
  }, E.swipeStart = function(e, n, p) {
    return e.target.tagName === "IMG" && z(e), !n || !p && e.type.indexOf("mouse") !== -1 ? "" : {
      dragging: !0,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY
      }
    };
  }, E.swipeMove = function(e, n) {
    var p = n.scrolling, k = n.animating, w = n.vertical, C = n.swipeToSlide, _ = n.verticalSwiping, j = n.rtl, H = n.currentSlide, I = n.edgeFriction, W = n.edgeDragged, Y = n.onEdge, X = n.swiped, F = n.swiping, N = n.slideCount, B = n.slidesToScroll, Z = n.infinite, D = n.touchObject, Q = n.swipeEvent, re = n.listHeight, ie = n.listWidth;
    if (!p) {
      if (k) return z(e);
      w && C && _ && z(e);
      var oe, le = {}, be = r(n);
      D.curX = e.touches ? e.touches[0].pageX : e.clientX, D.curY = e.touches ? e.touches[0].pageY : e.clientY, D.swipeLength = Math.round(Math.sqrt(Math.pow(D.curX - D.startX, 2)));
      var ze = Math.round(Math.sqrt(Math.pow(D.curY - D.startY, 2)));
      if (!_ && !F && ze > 10)
        return {
          scrolling: !0
        };
      _ && (D.swipeLength = ze);
      var fe = (j ? -1 : 1) * (D.curX > D.startX ? 1 : -1);
      _ && (fe = D.curY > D.startY ? 1 : -1);
      var rt = Math.ceil(N / B), ae = $(n.touchObject, _), de = D.swipeLength;
      return Z || (H === 0 && (ae === "right" || ae === "down") || H + 1 >= rt && (ae === "left" || ae === "up") || !J(n) && (ae === "left" || ae === "up")) && (de = D.swipeLength * I, W === !1 && Y && (Y(ae), le.edgeDragged = !0)), !X && Q && (Q(ae), le.swiped = !0), w ? oe = be + de * (re / ie) * fe : j ? oe = be - de * fe : oe = be + de * fe, _ && (oe = be + de * fe), le = g(g({}, le), {}, {
        touchObject: D,
        swipeLeft: oe,
        trackStyle: d(g(g({}, n), {}, {
          left: oe
        }))
      }), Math.abs(D.curX - D.startX) < Math.abs(D.curY - D.startY) * 0.8 || D.swipeLength > 10 && (le.swiping = !0, z(e)), le;
    }
  }, E.swipeEnd = function(e, n) {
    var p = n.dragging, k = n.swipe, w = n.touchObject, C = n.listWidth, _ = n.touchThreshold, j = n.verticalSwiping, H = n.listHeight, I = n.swipeToSlide, W = n.scrolling, Y = n.onSwipe, X = n.targetSlide, F = n.currentSlide, N = n.infinite;
    if (!p)
      return k && z(e), {};
    var B = j ? H / _ : C / _, Z = $(w, j), D = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {}
    };
    if (W || !w.swipeLength)
      return D;
    if (w.swipeLength > B) {
      z(e), Y && Y(Z);
      var Q, re, ie = N ? F : X;
      switch (Z) {
        case "left":
        case "up":
          re = ie + s(n), Q = I ? a(n, re) : re, D.currentDirection = 0;
          break;
        case "right":
        case "down":
          re = ie - s(n), Q = I ? a(n, re) : re, D.currentDirection = 1;
          break;
        default:
          Q = ie;
      }
      D.triggerSlideHandler = Q;
    } else {
      var oe = r(n);
      D.trackStyle = l(g(g({}, n), {}, {
        left: oe
      }));
    }
    return D;
  };
  var V = E.getNavigableIndexes = function(e) {
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, p = e.infinite ? e.slidesToShow * -1 : 0, k = e.infinite ? e.slidesToShow * -1 : 0, w = []; p < n; )
      w.push(p), p = k + e.slidesToScroll, k += Math.min(e.slidesToScroll, e.slidesToShow);
    return w;
  }, a = E.checkNavigable = function(e, n) {
    var p = V(e), k = 0;
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
          if (j.offsetTop + G(j) / 2 > e.swipeLeft * -1)
            return p = j, !1;
        } else if (j.offsetLeft - n + te(j) / 2 > e.swipeLeft * -1)
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
  }, l = E.getTrackAnimateCSS = function(e) {
    f(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var n = d(e);
    return e.useTransform ? (n.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, n.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? n.transition = "top " + e.speed + "ms " + e.cssEase : n.transition = "left " + e.speed + "ms " + e.cssEase, n;
  }, r = E.getTrackLeft = function(e) {
    if (e.unslick)
      return 0;
    f(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var n = e.slideIndex, p = e.trackRef, k = e.infinite, w = e.centerMode, C = e.slideCount, _ = e.slidesToShow, j = e.slidesToScroll, H = e.slideWidth, I = e.listWidth, W = e.variableWidth, Y = e.slideHeight, X = e.fade, F = e.vertical, N = 0, B, Z, D = 0;
    if (X || e.slideCount === 1)
      return 0;
    var Q = 0;
    if (k ? (Q = -h(e), C % j !== 0 && n + j > C && (Q = -(n > C ? _ - (n - C) : C % j)), w && (Q += parseInt(_ / 2))) : (C % j !== 0 && n + j > C && (Q = _ - C % j), w && (Q = parseInt(_ / 2))), N = Q * H, D = Q * Y, F ? B = n * Y * -1 + D : B = n * H * -1 + N, W === !0) {
      var re, ie = p && p.node;
      if (re = n + h(e), Z = ie && ie.childNodes[re], B = Z ? Z.offsetLeft * -1 : 0, w === !0) {
        re = k ? n + h(e) : n, Z = ie && ie.children[re], B = 0;
        for (var oe = 0; oe < re; oe++)
          B -= ie && ie.children[oe] && ie.children[oe].offsetWidth;
        B -= parseInt(e.centerPadding), B += Z && (I - Z.offsetWidth) / 2;
      }
    }
    return B;
  }, h = E.getPreClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, S = E.getPostClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, u = E.getTotalSlides = function(e) {
    return e.slideCount === 1 ? 1 : h(e) + e.slideCount + S(e);
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
  function q(o) {
    return t.reduce(function(e, n) {
      return o.hasOwnProperty(n) && (e[n] = o[n]), e;
    }, {});
  }
  return E;
}
var ve = {}, We;
function st() {
  if (We) return ve;
  We = 1, Object.defineProperty(ve, "__esModule", {
    value: !0
  }), ve.Track = void 0;
  var i = b(ue), c = b(_e()), v = ge();
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
      S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(l, J(S.key), S);
    }
  }
  function M(l, r, h) {
    return r && L(l.prototype, r), Object.defineProperty(l, "prototype", { writable: !1 }), l;
  }
  function R(l, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
    l.prototype = Object.create(r && r.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), Object.defineProperty(l, "prototype", { writable: !1 }), r && z(l, r);
  }
  function z(l, r) {
    return z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(h, S) {
      return h.__proto__ = S, h;
    }, z(l, r);
  }
  function K(l) {
    var r = U();
    return function() {
      var h, S = T(l);
      if (r) {
        var u = T(this).constructor;
        h = Reflect.construct(S, arguments, u);
      } else h = S.apply(this, arguments);
      return ne(this, h);
    };
  }
  function ne(l, r) {
    if (r && (y(r) == "object" || typeof r == "function")) return r;
    if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return ee(l);
  }
  function ee(l) {
    if (l === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return l;
  }
  function U() {
    try {
      var l = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (U = function() {
      return !!l;
    })();
  }
  function T(l) {
    return T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, T(l);
  }
  function te(l, r) {
    var h = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      var S = Object.getOwnPropertySymbols(l);
      r && (S = S.filter(function(u) {
        return Object.getOwnPropertyDescriptor(l, u).enumerable;
      })), h.push.apply(h, S);
    }
    return h;
  }
  function G(l) {
    for (var r = 1; r < arguments.length; r++) {
      var h = arguments[r] != null ? arguments[r] : {};
      r % 2 ? te(Object(h), !0).forEach(function(S) {
        $(l, S, h[S]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(h)) : te(Object(h)).forEach(function(S) {
        Object.defineProperty(l, S, Object.getOwnPropertyDescriptor(h, S));
      });
    }
    return l;
  }
  function $(l, r, h) {
    return (r = J(r)) in l ? Object.defineProperty(l, r, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : l[r] = h, l;
  }
  function J(l) {
    var r = V(l, "string");
    return y(r) == "symbol" ? r : r + "";
  }
  function V(l, r) {
    if (y(l) != "object" || !l) return l;
    var h = l[Symbol.toPrimitive];
    if (h !== void 0) {
      var S = h.call(l, r);
      if (y(S) != "object") return S;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(l);
  }
  var a = function(r) {
    var h, S, u, m, O;
    r.rtl ? O = r.slideCount - 1 - r.index : O = r.index, u = O < 0 || O >= r.slideCount, r.centerMode ? (m = Math.floor(r.slidesToShow / 2), S = (O - r.currentSlide) % r.slideCount === 0, O > r.currentSlide - m - 1 && O <= r.currentSlide + m && (h = !0)) : h = r.currentSlide <= O && O < r.currentSlide + r.slidesToShow;
    var P;
    r.targetSlide < 0 ? P = r.targetSlide + r.slideCount : r.targetSlide >= r.slideCount ? P = r.targetSlide - r.slideCount : P = r.targetSlide;
    var t = O === P;
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
    var h, S = [], u = [], m = [], O = i.default.Children.count(r.children), P = (0, v.lazyStartIndex)(r), t = (0, v.lazyEndIndex)(r);
    return i.default.Children.forEach(r.children, function(q, o) {
      var e, n = {
        message: "children",
        index: o,
        slidesToScroll: r.slidesToScroll,
        currentSlide: r.currentSlide
      };
      !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(o) >= 0 ? e = q : e = /* @__PURE__ */ i.default.createElement("div", null);
      var p = s(G(G({}, r), {}, {
        index: o
      })), k = e.props.className || "", w = a(G(G({}, r), {}, {
        index: o
      }));
      if (S.push(/* @__PURE__ */ i.default.cloneElement(e, {
        key: "original" + f(e, o),
        "data-index": o,
        className: (0, c.default)(w, k),
        tabIndex: "-1",
        "aria-hidden": !w["slick-active"],
        style: G(G({
          outline: "none"
        }, e.props.style || {}), p),
        onClick: function(j) {
          e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
        }
      })), r.infinite && O > 1 && r.fade === !1 && !r.unslick) {
        var C = O - o;
        C <= (0, v.getPreClones)(r) && (h = -C, h >= P && (e = q), w = a(G(G({}, r), {}, {
          index: h
        })), u.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "precloned" + f(e, h),
          "data-index": h,
          tabIndex: "-1",
          className: (0, c.default)(w, k),
          "aria-hidden": !w["slick-active"],
          style: G(G({}, e.props.style || {}), p),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        }))), o < (0, v.getPostClones)(r) && (h = O + o, h < t && (e = q), w = a(G(G({}, r), {}, {
          index: h
        })), m.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "postcloned" + f(e, h),
          "data-index": h,
          tabIndex: "-1",
          className: (0, c.default)(w, k),
          "aria-hidden": !w["slick-active"],
          style: G(G({}, e.props.style || {}), p),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        })));
      }
    }), r.rtl ? u.concat(S, m).reverse() : u.concat(S, m);
  };
  return ve.Track = /* @__PURE__ */ (function(l) {
    R(h, l);
    var r = K(h);
    function h() {
      var S;
      x(this, h);
      for (var u = arguments.length, m = new Array(u), O = 0; O < u; O++)
        m[O] = arguments[O];
      return S = r.call.apply(r, [this].concat(m)), $(ee(S), "node", null), $(ee(S), "handleRef", function(P) {
        S.node = P;
      }), S;
    }
    return M(h, [{
      key: "render",
      value: function() {
        var u = d(this.props), m = this.props, O = m.onMouseEnter, P = m.onMouseOver, t = m.onMouseLeave, q = {
          onMouseEnter: O,
          onMouseOver: P,
          onMouseLeave: t
        };
        return /* @__PURE__ */ i.default.createElement("div", g({
          ref: this.handleRef,
          className: "slick-track",
          style: this.props.trackStyle
        }, q), u);
      }
    }]), h;
  })(i.default.PureComponent), ve;
}
var he = {}, qe;
function ut() {
  if (qe) return he;
  qe = 1;
  function i(a) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, i(a);
  }
  Object.defineProperty(he, "__esModule", {
    value: !0
  }), he.Dots = void 0;
  var c = y(ue), v = y(_e()), b = ge();
  function y(a) {
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
    return (s = K(s)) in a ? Object.defineProperty(a, s, { value: f, enumerable: !0, configurable: !0, writable: !0 }) : a[s] = f, a;
  }
  function M(a, s) {
    if (!(a instanceof s)) throw new TypeError("Cannot call a class as a function");
  }
  function R(a, s) {
    for (var f = 0; f < s.length; f++) {
      var d = s[f];
      d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, K(d.key), d);
    }
  }
  function z(a, s, f) {
    return s && R(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function K(a) {
    var s = ne(a, "string");
    return i(s) == "symbol" ? s : s + "";
  }
  function ne(a, s) {
    if (i(a) != "object" || !a) return a;
    var f = a[Symbol.toPrimitive];
    if (f !== void 0) {
      var d = f.call(a, s);
      if (i(d) != "object") return d;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  function ee(a, s) {
    if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(s && s.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), s && U(a, s);
  }
  function U(a, s) {
    return U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(f, d) {
      return f.__proto__ = d, f;
    }, U(a, s);
  }
  function T(a) {
    var s = $();
    return function() {
      var f, d = J(a);
      if (s) {
        var l = J(this).constructor;
        f = Reflect.construct(d, arguments, l);
      } else f = d.apply(this, arguments);
      return te(this, f);
    };
  }
  function te(a, s) {
    if (s && (i(s) == "object" || typeof s == "function")) return s;
    if (s !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return G(a);
  }
  function G(a) {
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
  function J(a) {
    return J = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, J(a);
  }
  var V = function(s) {
    var f;
    return s.infinite ? f = Math.ceil(s.slideCount / s.slidesToScroll) : f = Math.ceil((s.slideCount - s.slidesToShow) / s.slidesToScroll) + 1, f;
  };
  return he.Dots = /* @__PURE__ */ (function(a) {
    ee(f, a);
    var s = T(f);
    function f() {
      return M(this, f), s.apply(this, arguments);
    }
    return z(f, [{
      key: "clickHandler",
      value: function(l, r) {
        r.preventDefault(), this.props.clickHandler(l);
      }
    }, {
      key: "render",
      value: function() {
        for (var l = this.props, r = l.onMouseEnter, h = l.onMouseOver, S = l.onMouseLeave, u = l.infinite, m = l.slidesToScroll, O = l.slidesToShow, P = l.slideCount, t = l.currentSlide, q = V({
          slideCount: P,
          slidesToScroll: m,
          slidesToShow: O,
          infinite: u
        }), o = {
          onMouseEnter: r,
          onMouseOver: h,
          onMouseLeave: S
        }, e = [], n = 0; n < q; n++) {
          var p = (n + 1) * m - 1, k = u ? p : (0, b.clamp)(p, 0, P - 1), w = k - (m - 1), C = u ? w : (0, b.clamp)(w, 0, P - 1), _ = (0, v.default)({
            "slick-active": u ? t >= C && t <= k : t === C
          }), j = {
            message: "dots",
            index: n,
            slidesToScroll: m,
            currentSlide: t
          }, H = this.clickHandler.bind(this, j);
          e = e.concat(/* @__PURE__ */ c.default.createElement("li", {
            key: n,
            className: _
          }, /* @__PURE__ */ c.default.cloneElement(this.props.customPaging(n), {
            onClick: H
          })));
        }
        return /* @__PURE__ */ c.default.cloneElement(this.props.appendDots(e), x({
          className: this.props.dotsClass
        }, o));
      }
    }]), f;
  })(c.default.PureComponent), he;
}
var se = {}, Fe;
function ct() {
  if (Fe) return se;
  Fe = 1;
  function i(a) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, i(a);
  }
  Object.defineProperty(se, "__esModule", {
    value: !0
  }), se.PrevArrow = se.NextArrow = void 0;
  var c = y(ue), v = y(_e()), b = ge();
  function y(a) {
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
        M(a, d, f[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(f)) : x(Object(f)).forEach(function(d) {
        Object.defineProperty(a, d, Object.getOwnPropertyDescriptor(f, d));
      });
    }
    return a;
  }
  function M(a, s, f) {
    return (s = ne(s)) in a ? Object.defineProperty(a, s, { value: f, enumerable: !0, configurable: !0, writable: !0 }) : a[s] = f, a;
  }
  function R(a, s) {
    if (!(a instanceof s)) throw new TypeError("Cannot call a class as a function");
  }
  function z(a, s) {
    for (var f = 0; f < s.length; f++) {
      var d = s[f];
      d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, ne(d.key), d);
    }
  }
  function K(a, s, f) {
    return s && z(a.prototype, s), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function ne(a) {
    var s = ee(a, "string");
    return i(s) == "symbol" ? s : s + "";
  }
  function ee(a, s) {
    if (i(a) != "object" || !a) return a;
    var f = a[Symbol.toPrimitive];
    if (f !== void 0) {
      var d = f.call(a, s);
      if (i(d) != "object") return d;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(a);
  }
  function U(a, s) {
    if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(s && s.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), s && T(a, s);
  }
  function T(a, s) {
    return T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(f, d) {
      return f.__proto__ = d, f;
    }, T(a, s);
  }
  function te(a) {
    var s = J();
    return function() {
      var f, d = V(a);
      if (s) {
        var l = V(this).constructor;
        f = Reflect.construct(d, arguments, l);
      } else f = d.apply(this, arguments);
      return G(this, f);
    };
  }
  function G(a, s) {
    if (s && (i(s) == "object" || typeof s == "function")) return s;
    if (s !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $(a);
  }
  function $(a) {
    if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a;
  }
  function J() {
    try {
      var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (J = function() {
      return !!a;
    })();
  }
  function V(a) {
    return V = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, V(a);
  }
  return se.PrevArrow = /* @__PURE__ */ (function(a) {
    U(f, a);
    var s = te(f);
    function f() {
      return R(this, f), s.apply(this, arguments);
    }
    return K(f, [{
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
          className: (0, v.default)(l),
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
  })(c.default.PureComponent), se.NextArrow = /* @__PURE__ */ (function(a) {
    U(f, a);
    var s = te(f);
    function f() {
      return R(this, f), s.apply(this, arguments);
    }
    return K(f, [{
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
          className: (0, v.default)(l),
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
  })(c.default.PureComponent), se;
}
var Je = (function() {
  if (typeof Map < "u")
    return Map;
  function i(c, v) {
    var b = -1;
    return c.some(function(y, g) {
      return y[0] === v ? (b = g, !0) : !1;
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
      }), c.prototype.get = function(v) {
        var b = i(this.__entries__, v), y = this.__entries__[b];
        return y && y[1];
      }, c.prototype.set = function(v, b) {
        var y = i(this.__entries__, v);
        ~y ? this.__entries__[y][1] = b : this.__entries__.push([v, b]);
      }, c.prototype.delete = function(v) {
        var b = this.__entries__, y = i(b, v);
        ~y && b.splice(y, 1);
      }, c.prototype.has = function(v) {
        return !!~i(this.__entries__, v);
      }, c.prototype.clear = function() {
        this.__entries__.splice(0);
      }, c.prototype.forEach = function(v, b) {
        b === void 0 && (b = null);
        for (var y = 0, g = this.__entries__; y < g.length; y++) {
          var x = g[y];
          v.call(b, x[1], x[0]);
        }
      }, c;
    })()
  );
})(), Re = typeof window < "u" && typeof document < "u" && window.document === document, we = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), ft = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(we) : function(i) {
    return setTimeout(function() {
      return i(Date.now());
    }, 1e3 / 60);
  };
})(), dt = 2;
function pt(i, c) {
  var v = !1, b = !1, y = 0;
  function g() {
    v && (v = !1, i()), b && L();
  }
  function x() {
    ft(g);
  }
  function L() {
    var M = Date.now();
    if (v) {
      if (M - y < dt)
        return;
      b = !0;
    } else
      v = !0, b = !1, setTimeout(x, c);
    y = M;
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
      var v = this.observers_, b = v.indexOf(c);
      ~b && v.splice(b, 1), !v.length && this.connected_ && this.disconnect_();
    }, i.prototype.refresh = function() {
      var c = this.updateObservers_();
      c && this.refresh();
    }, i.prototype.updateObservers_ = function() {
      var c = this.observers_.filter(function(v) {
        return v.gatherActive(), v.hasActive();
      });
      return c.forEach(function(v) {
        return v.broadcastActive();
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
      var v = c.propertyName, b = v === void 0 ? "" : v, y = ht.some(function(g) {
        return !!~b.indexOf(g);
      });
      y && this.refresh();
    }, i.getInstance = function() {
      return this.instance_ || (this.instance_ = new i()), this.instance_;
    }, i.instance_ = null, i;
  })()
), Qe = (function(i, c) {
  for (var v = 0, b = Object.keys(c); v < b.length; v++) {
    var y = b[v];
    Object.defineProperty(i, y, {
      value: c[y],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return i;
}), ce = (function(i) {
  var c = i && i.ownerDocument && i.ownerDocument.defaultView;
  return c || we;
}), Ze = ke(0, 0, 0, 0);
function Oe(i) {
  return parseFloat(i) || 0;
}
function Be(i) {
  for (var c = [], v = 1; v < arguments.length; v++)
    c[v - 1] = arguments[v];
  return c.reduce(function(b, y) {
    var g = i["border-" + y + "-width"];
    return b + Oe(g);
  }, 0);
}
function bt(i) {
  for (var c = ["top", "right", "bottom", "left"], v = {}, b = 0, y = c; b < y.length; b++) {
    var g = y[b], x = i["padding-" + g];
    v[g] = Oe(x);
  }
  return v;
}
function mt(i) {
  var c = i.getBBox();
  return ke(0, 0, c.width, c.height);
}
function St(i) {
  var c = i.clientWidth, v = i.clientHeight;
  if (!c && !v)
    return Ze;
  var b = ce(i).getComputedStyle(i), y = bt(b), g = y.left + y.right, x = y.top + y.bottom, L = Oe(b.width), M = Oe(b.height);
  if (b.boxSizing === "border-box" && (Math.round(L + g) !== c && (L -= Be(b, "left", "right") + g), Math.round(M + x) !== v && (M -= Be(b, "top", "bottom") + x)), !Ot(i)) {
    var R = Math.round(L + g) - c, z = Math.round(M + x) - v;
    Math.abs(R) !== 1 && (L -= R), Math.abs(z) !== 1 && (M -= z);
  }
  return ke(y.left, y.top, L, M);
}
var wt = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(i) {
    return i instanceof ce(i).SVGGraphicsElement;
  } : function(i) {
    return i instanceof ce(i).SVGElement && typeof i.getBBox == "function";
  };
})();
function Ot(i) {
  return i === ce(i).document.documentElement;
}
function _t(i) {
  return Re ? wt(i) ? mt(i) : St(i) : Ze;
}
function kt(i) {
  var c = i.x, v = i.y, b = i.width, y = i.height, g = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, x = Object.create(g.prototype);
  return Qe(x, {
    x: c,
    y: v,
    width: b,
    height: y,
    top: v,
    right: c + b,
    bottom: y + v,
    left: c
  }), x;
}
function ke(i, c, v, b) {
  return { x: i, y: c, width: v, height: b };
}
var Pt = (
  /** @class */
  (function() {
    function i(c) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ke(0, 0, 0, 0), this.target = c;
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
    function i(c, v) {
      var b = kt(v);
      Qe(this, { target: c, contentRect: b });
    }
    return i;
  })()
), Ct = (
  /** @class */
  (function() {
    function i(c, v, b) {
      if (this.activeObservations_ = [], this.observations_ = new Je(), typeof c != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = c, this.controller_ = v, this.callbackCtx_ = b;
    }
    return i.prototype.observe = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof ce(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var v = this.observations_;
        v.has(c) || (v.set(c, new Pt(c)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, i.prototype.unobserve = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof ce(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var v = this.observations_;
        v.has(c) && (v.delete(c), v.size || this.controller_.removeObserver(this));
      }
    }, i.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, i.prototype.gatherActive = function() {
      var c = this;
      this.clearActive(), this.observations_.forEach(function(v) {
        v.isActive() && c.activeObservations_.push(v);
      });
    }, i.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var c = this.callbackCtx_, v = this.activeObservations_.map(function(b) {
          return new Tt(b.target, b.broadcastRect());
        });
        this.callback_.call(c, v, c), this.clearActive();
      }
    }, i.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, i.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, i;
  })()
), et = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Je(), tt = (
  /** @class */
  /* @__PURE__ */ (function() {
    function i(c) {
      if (!(this instanceof i))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var v = gt.getInstance(), b = new Ct(c, v, this);
      et.set(this, b);
    }
    return i;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(i) {
  tt.prototype[i] = function() {
    var c;
    return (c = et.get(this))[i].apply(c, arguments);
  };
});
var jt = (function() {
  return typeof we.ResizeObserver < "u" ? we.ResizeObserver : tt;
})();
const Et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jt
}, Symbol.toStringTag, { value: "Module" })), Lt = /* @__PURE__ */ ot(Et);
var Ge;
function xt() {
  if (Ge) return pe;
  Ge = 1, Object.defineProperty(pe, "__esModule", {
    value: !0
  }), pe.InnerSlider = void 0;
  var i = R(ue), c = R(at()), v = R(lt()), b = R(_e()), y = ge(), g = st(), x = ut(), L = ct(), M = R(Lt);
  function R(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function z(u) {
    "@babel/helpers - typeof";
    return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
      return typeof m;
    } : function(m) {
      return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
    }, z(u);
  }
  function K() {
    return K = Object.assign ? Object.assign.bind() : function(u) {
      for (var m = 1; m < arguments.length; m++) {
        var O = arguments[m];
        for (var P in O)
          ({}).hasOwnProperty.call(O, P) && (u[P] = O[P]);
      }
      return u;
    }, K.apply(null, arguments);
  }
  function ne(u, m) {
    if (u == null) return {};
    var O, P, t = ee(u, m);
    if (Object.getOwnPropertySymbols) {
      var q = Object.getOwnPropertySymbols(u);
      for (P = 0; P < q.length; P++)
        O = q[P], m.includes(O) || {}.propertyIsEnumerable.call(u, O) && (t[O] = u[O]);
    }
    return t;
  }
  function ee(u, m) {
    if (u == null) return {};
    var O = {};
    for (var P in u)
      if ({}.hasOwnProperty.call(u, P)) {
        if (m.includes(P)) continue;
        O[P] = u[P];
      }
    return O;
  }
  function U(u, m) {
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
      m % 2 ? U(Object(O), !0).forEach(function(P) {
        r(u, P, O[P]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(O)) : U(Object(O)).forEach(function(P) {
        Object.defineProperty(u, P, Object.getOwnPropertyDescriptor(O, P));
      });
    }
    return u;
  }
  function te(u, m) {
    if (!(u instanceof m)) throw new TypeError("Cannot call a class as a function");
  }
  function G(u, m) {
    for (var O = 0; O < m.length; O++) {
      var P = m[O];
      P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(u, h(P.key), P);
    }
  }
  function $(u, m, O) {
    return m && G(u.prototype, m), Object.defineProperty(u, "prototype", { writable: !1 }), u;
  }
  function J(u, m) {
    if (typeof m != "function" && m !== null) throw new TypeError("Super expression must either be null or a function");
    u.prototype = Object.create(m && m.prototype, { constructor: { value: u, writable: !0, configurable: !0 } }), Object.defineProperty(u, "prototype", { writable: !1 }), m && V(u, m);
  }
  function V(u, m) {
    return V = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(O, P) {
      return O.__proto__ = P, O;
    }, V(u, m);
  }
  function a(u) {
    var m = d();
    return function() {
      var O, P = l(u);
      if (m) {
        var t = l(this).constructor;
        O = Reflect.construct(P, arguments, t);
      } else O = P.apply(this, arguments);
      return s(this, O);
    };
  }
  function s(u, m) {
    if (m && (z(m) == "object" || typeof m == "function")) return m;
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
  function l(u) {
    return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(m) {
      return m.__proto__ || Object.getPrototypeOf(m);
    }, l(u);
  }
  function r(u, m, O) {
    return (m = h(m)) in u ? Object.defineProperty(u, m, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : u[m] = O, u;
  }
  function h(u) {
    var m = S(u, "string");
    return z(m) == "symbol" ? m : m + "";
  }
  function S(u, m) {
    if (z(u) != "object" || !u) return u;
    var O = u[Symbol.toPrimitive];
    if (O !== void 0) {
      var P = O.call(u, m);
      if (z(P) != "object") return P;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (m === "string" ? String : Number)(u);
  }
  return pe.InnerSlider = /* @__PURE__ */ (function(u) {
    J(O, u);
    var m = a(O);
    function O(P) {
      var t;
      te(this, O), t = m.call(this, P), r(f(t), "listRefHandler", function(o) {
        return t.list = o;
      }), r(f(t), "trackRefHandler", function(o) {
        return t.track = o;
      }), r(f(t), "adaptHeight", function() {
        if (t.props.adaptiveHeight && t.list) {
          var o = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
          t.list.style.height = (0, y.getHeight)(o) + "px";
        }
      }), r(f(t), "componentDidMount", function() {
        if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
          var o = (0, y.getOnDemandLazySlides)(T(T({}, t.props), t.state));
          o.length > 0 && (t.setState(function(n) {
            return {
              lazyLoadedList: n.lazyLoadedList.concat(o)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(o));
        }
        var e = T({
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
      }), r(f(t), "componentWillUnmount", function() {
        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach(function(o) {
          return clearTimeout(o);
        }), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
      }), r(f(t), "componentDidUpdate", function(o) {
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
        }, t.props), t.state), p = t.didPropsChange(o);
        p && t.updateState(n, p, function() {
          t.state.currentSlide >= i.default.Children.count(t.props.children) && t.changeSlide({
            message: "index",
            index: i.default.Children.count(t.props.children) - t.props.slidesToShow,
            currentSlide: t.state.currentSlide
          }), t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
        });
      }), r(f(t), "onWindowResized", function(o) {
        t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, v.default)(function() {
          return t.resizeWindow(o);
        }, 50), t.debouncedResize();
      }), r(f(t), "resizeWindow", function() {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = !!(t.track && t.track.node);
        if (e) {
          var n = T(T({
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
        var p = (0, y.initializedState)(o);
        o = T(T(T({}, o), p), {}, {
          slideIndex: p.currentSlide
        });
        var k = (0, y.getTrackLeft)(o);
        o = T(T({}, o), {}, {
          left: k
        });
        var w = (0, y.getTrackCSS)(o);
        (e || i.default.Children.count(t.props.children) !== i.default.Children.count(o.children)) && (p.trackStyle = w), t.setState(p, n);
      }), r(f(t), "ssrInit", function() {
        if (t.props.variableWidth) {
          var o = 0, e = 0, n = [], p = (0, y.getPreClones)(T(T(T({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          })), k = (0, y.getPostClones)(T(T(T({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          }));
          t.props.children.forEach(function(Z) {
            n.push(Z.props.style.width), o += Z.props.style.width;
          });
          for (var w = 0; w < p; w++)
            e += n[n.length - 1 - w], o += n[n.length - 1 - w];
          for (var C = 0; C < k; C++)
            o += n[C];
          for (var _ = 0; _ < t.state.currentSlide; _++)
            e += n[_];
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
        var I = i.default.Children.count(t.props.children), W = T(T(T({}, t.props), t.state), {}, {
          slideCount: I
        }), Y = (0, y.getPreClones)(W) + (0, y.getPostClones)(W) + I, X = 100 / t.props.slidesToShow * Y, F = 100 / Y, N = -F * ((0, y.getPreClones)(W) + t.state.currentSlide) * X / 100;
        t.props.centerMode && (N += (100 - F * X / 100) / 2);
        var B = {
          width: X + "%",
          left: N + "%"
        };
        return {
          slideWidth: F + "%",
          trackStyle: B
        };
      }), r(f(t), "checkImagesLoad", function() {
        var o = t.list && t.list.querySelectorAll && t.list.querySelectorAll(".slick-slide img") || [], e = o.length, n = 0;
        Array.prototype.forEach.call(o, function(p) {
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
        for (var o = [], e = T(T({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, y.getPostClones)(e); n++)
          if (t.state.lazyLoadedList.indexOf(n) < 0) {
            o.push(n);
            break;
          }
        for (var p = t.state.currentSlide - 1; p >= -(0, y.getPreClones)(e); p--)
          if (t.state.lazyLoadedList.indexOf(p) < 0) {
            o.push(p);
            break;
          }
        o.length > 0 ? (t.setState(function(k) {
          return {
            lazyLoadedList: k.lazyLoadedList.concat(o)
          };
        }), t.props.onLazyLoad && t.props.onLazyLoad(o)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
      }), r(f(t), "slideHandler", function(o) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = t.props, p = n.asNavFor, k = n.beforeChange, w = n.onLazyLoad, C = n.speed, _ = n.afterChange, j = t.state.currentSlide, H = (0, y.slideHandler)(T(T(T({
          index: o
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e
        })), I = H.state, W = H.nextState;
        if (I) {
          k && k(j, I.currentSlide);
          var Y = I.lazyLoadedList.filter(function(X) {
            return t.state.lazyLoadedList.indexOf(X) < 0;
          });
          w && Y.length > 0 && w(Y), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), _ && _(j), delete t.animationEndCallback), t.setState(I, function() {
            p && t.asNavForIndex !== o && (t.asNavForIndex = o, p.innerSlider.slideHandler(o)), W && (t.animationEndCallback = setTimeout(function() {
              var X = W.animating, F = ne(W, ["animating"]);
              t.setState(F, function() {
                t.callbackTimers.push(setTimeout(function() {
                  return t.setState({
                    animating: X
                  });
                }, 10)), _ && _(I.currentSlide), delete t.animationEndCallback;
              });
            }, C));
          });
        }
      }), r(f(t), "changeSlide", function(o) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = T(T({}, t.props), t.state), p = (0, y.changeSlide)(n, o);
        if (!(p !== 0 && !p) && (e === !0 ? t.slideHandler(p, e) : t.slideHandler(p), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
          var k = t.list.querySelectorAll(".slick-current");
          k[0] && k[0].focus();
        }
      }), r(f(t), "clickHandler", function(o) {
        t.clickable === !1 && (o.stopPropagation(), o.preventDefault()), t.clickable = !0;
      }), r(f(t), "keyHandler", function(o) {
        var e = (0, y.keyHandler)(o, t.props.accessibility, t.props.rtl);
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
        var e = (0, y.swipeStart)(o, t.props.swipe, t.props.draggable);
        e !== "" && t.setState(e);
      }), r(f(t), "swipeMove", function(o) {
        var e = (0, y.swipeMove)(o, T(T(T({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(f(t), "swipeEnd", function(o) {
        var e = (0, y.swipeEnd)(o, T(T(T({}, t.props), t.state), {}, {
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
        else if ((0, y.canGoNext)(T(T({}, t.props), t.state)))
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
        var o = (0, b.default)("slick-slider", t.props.className, {
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
          }), k = /* @__PURE__ */ i.default.createElement(x.Dots, w);
        }
        var _, j, H = (0, y.extractObject)(e, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        H.clickHandler = t.changeSlide, t.props.arrows && (_ = /* @__PURE__ */ i.default.createElement(L.PrevArrow, H), j = /* @__PURE__ */ i.default.createElement(L.NextArrow, H));
        var I = null;
        t.props.vertical && (I = {
          height: t.state.listHeight
        });
        var W = null;
        t.props.vertical === !1 ? t.props.centerMode === !0 && (W = {
          padding: "0px " + t.props.centerPadding
        }) : t.props.centerMode === !0 && (W = {
          padding: t.props.centerPadding + " 0px"
        });
        var Y = T(T({}, I), W), X = t.props.touchMove, F = {
          className: "slick-list",
          style: Y,
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
        }, N = {
          className: o,
          dir: "ltr",
          style: t.props.style
        };
        return t.props.unslick && (F = {
          className: "slick-list"
        }, N = {
          className: o,
          style: t.props.style
        }), /* @__PURE__ */ i.default.createElement("div", N, t.props.unslick ? "" : _, /* @__PURE__ */ i.default.createElement("div", K({
          ref: t.listRefHandler
        }, F), /* @__PURE__ */ i.default.createElement(g.Track, K({
          ref: t.trackRefHandler
        }, n), t.props.children)), t.props.unslick ? "" : j, t.props.unslick ? "" : k);
      }), t.list = null, t.track = null, t.state = T(T({}, c.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: i.default.Children.count(t.props.children)
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      var q = t.ssrInit();
      return t.state = T(T({}, t.state), q), t;
    }
    return $(O, [{
      key: "didPropsChange",
      value: function(t) {
        for (var q = !1, o = 0, e = Object.keys(this.props); o < e.length; o++) {
          var n = e[o];
          if (!t.hasOwnProperty(n)) {
            q = !0;
            break;
          }
          if (!(z(t[n]) === "object" || typeof t[n] == "function" || isNaN(t[n])) && t[n] !== this.props[n]) {
            q = !0;
            break;
          }
        }
        return q || i.default.Children.count(this.props.children) !== i.default.Children.count(t.children);
      }
    }]), O;
  })(i.default.Component), pe;
}
var xe, Xe;
function Mt() {
  if (Xe) return xe;
  Xe = 1;
  var i = function(c) {
    return c.replace(/[A-Z]/g, function(v) {
      return "-" + v.toLowerCase();
    }).toLowerCase();
  };
  return xe = i, xe;
}
var Me, Ye;
function Rt() {
  if (Ye) return Me;
  Ye = 1;
  var i = Mt(), c = function(y) {
    var g = /[height|width]$/;
    return g.test(y);
  }, v = function(y) {
    var g = "", x = Object.keys(y);
    return x.forEach(function(L, M) {
      var R = y[L];
      L = i(L), c(L) && typeof R == "number" && (R = R + "px"), R === !0 ? g += L : R === !1 ? g += "not " + L : g += "(" + L + ": " + R + ")", M < x.length - 1 && (g += " and ");
    }), g;
  }, b = function(y) {
    var g = "";
    return typeof y == "string" ? y : y instanceof Array ? (y.forEach(function(x, L) {
      g += v(x), L < y.length - 1 && (g += ", ");
    }), g) : v(y);
  };
  return Me = b, Me;
}
var Ke;
function zt() {
  return Ke || (Ke = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var c = x(ue), v = xt(), b = x(Rt()), y = x(Ue()), g = ge();
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
    function M() {
      return M = Object.assign ? Object.assign.bind() : function(d) {
        for (var l = 1; l < arguments.length; l++) {
          var r = arguments[l];
          for (var h in r)
            ({}).hasOwnProperty.call(r, h) && (d[h] = r[h]);
        }
        return d;
      }, M.apply(null, arguments);
    }
    function R(d, l) {
      var r = Object.keys(d);
      if (Object.getOwnPropertySymbols) {
        var h = Object.getOwnPropertySymbols(d);
        l && (h = h.filter(function(S) {
          return Object.getOwnPropertyDescriptor(d, S).enumerable;
        })), r.push.apply(r, h);
      }
      return r;
    }
    function z(d) {
      for (var l = 1; l < arguments.length; l++) {
        var r = arguments[l] != null ? arguments[l] : {};
        l % 2 ? R(Object(r), !0).forEach(function(h) {
          a(d, h, r[h]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(r)) : R(Object(r)).forEach(function(h) {
          Object.defineProperty(d, h, Object.getOwnPropertyDescriptor(r, h));
        });
      }
      return d;
    }
    function K(d, l) {
      if (!(d instanceof l)) throw new TypeError("Cannot call a class as a function");
    }
    function ne(d, l) {
      for (var r = 0; r < l.length; r++) {
        var h = l[r];
        h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(d, s(h.key), h);
      }
    }
    function ee(d, l, r) {
      return l && ne(d.prototype, l), Object.defineProperty(d, "prototype", { writable: !1 }), d;
    }
    function U(d, l) {
      if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function");
      d.prototype = Object.create(l && l.prototype, { constructor: { value: d, writable: !0, configurable: !0 } }), Object.defineProperty(d, "prototype", { writable: !1 }), l && T(d, l);
    }
    function T(d, l) {
      return T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, h) {
        return r.__proto__ = h, r;
      }, T(d, l);
    }
    function te(d) {
      var l = J();
      return function() {
        var r, h = V(d);
        if (l) {
          var S = V(this).constructor;
          r = Reflect.construct(h, arguments, S);
        } else r = h.apply(this, arguments);
        return G(this, r);
      };
    }
    function G(d, l) {
      if (l && (L(l) == "object" || typeof l == "function")) return l;
      if (l !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return $(d);
    }
    function $(d) {
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
    function V(d) {
      return V = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(l) {
        return l.__proto__ || Object.getPrototypeOf(l);
      }, V(d);
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
      U(r, d);
      var l = te(r);
      function r(h) {
        var S;
        return K(this, r), S = l.call(this, h), a($(S), "innerSliderRefHandler", function(u) {
          return S.innerSlider = u;
        }), a($(S), "slickPrev", function() {
          return S.innerSlider.slickPrev();
        }), a($(S), "slickNext", function() {
          return S.innerSlider.slickNext();
        }), a($(S), "slickGoTo", function(u) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return S.innerSlider.slickGoTo(u, m);
        }), a($(S), "slickPause", function() {
          return S.innerSlider.pause("paused");
        }), a($(S), "slickPlay", function() {
          return S.innerSlider.autoPlay("play");
        }), S.state = {
          breakpoint: null
        }, S._responsiveMediaHandlers = [], S;
      }
      return ee(r, [{
        key: "media",
        value: function(S, u) {
          var m = window.matchMedia(S), O = function(t) {
            var q = t.matches;
            q && u();
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
          }), u = m[0].settings === "unslick" ? "unslick" : z(z(z({}, y.default), this.props), m[0].settings)) : u = z(z({}, y.default), this.props), u.centerMode && (u.slidesToScroll > 1 && process.env.NODE_ENV !== "production" && console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(u.slidesToScroll)), u.slidesToScroll = 1), u.fade && (u.slidesToShow > 1 && process.env.NODE_ENV !== "production" && console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(u.slidesToShow)), u.slidesToScroll > 1 && process.env.NODE_ENV !== "production" && console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(u.slidesToScroll)), u.slidesToShow = 1, u.slidesToScroll = 1);
          var O = c.default.Children.toArray(this.props.children);
          O = O.filter(function(w) {
            return typeof w == "string" ? !!w.trim() : !!w;
          }), u.variableWidth && (u.rows > 1 || u.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), u.variableWidth = !1);
          for (var P = [], t = null, q = 0; q < O.length; q += u.rows * u.slidesPerRow) {
            for (var o = [], e = q; e < q + u.rows * u.slidesPerRow; e += u.slidesPerRow) {
              for (var n = [], p = e; p < e + u.slidesPerRow && (u.variableWidth && O[p].props.style && (t = O[p].props.style.width), !(p >= O.length)); p += 1)
                n.push(/* @__PURE__ */ c.default.cloneElement(O[p], {
                  key: 100 * q + 10 * e + p,
                  tabIndex: -1,
                  style: {
                    width: "".concat(100 / u.slidesPerRow, "%"),
                    display: "inline-block"
                  }
                }));
              o.push(/* @__PURE__ */ c.default.createElement("div", {
                key: 10 * q + e
              }, n));
            }
            u.variableWidth ? P.push(/* @__PURE__ */ c.default.createElement("div", {
              key: q,
              style: {
                width: t
              }
            }, o)) : P.push(/* @__PURE__ */ c.default.createElement("div", {
              key: q
            }, o));
          }
          if (u === "unslick") {
            var k = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ c.default.createElement("div", {
              className: k
            }, O);
          } else P.length <= u.slidesToShow && (u.unslick = !0);
          return /* @__PURE__ */ c.default.createElement(v.InnerSlider, M({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, (0, g.filterSettings)(u)), P);
        }
      }]), r;
    })(c.default.Component);
  })(Te)), Te;
}
var $e;
function Dt() {
  return $e || ($e = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var c = v(zt());
    function v(b) {
      return b && b.__esModule ? b : { default: b };
    }
    i.default = c.default;
  })(Pe)), Pe;
}
var Nt = Dt();
const Ht = /* @__PURE__ */ it(Nt), Ve = ({
  media: i = "image",
  // 'image' | 'video' | 'lottie' | 'iframe'
  aspect: c = "default",
  // 'default' | 'rectangle' | 'square'
  imageUrl: v,
  videoUrl: b,
  lottieUrl: y,
  lottieData: g,
  iframeUrl: x,
  title: L,
  className: M = ""
}) => {
  var U;
  const z = `relative w-full h-full ${c === "square" ? "aspect-square" : c === "rectangle" ? "aspect-[4/3]" : i === "video" ? "aspect-video" : ""}`.trim(), K = c === "default" ? `w-full h-full ${M}`.trim() : `absolute inset-0 w-full h-full ${M}`.trim(), ne = "w-full h-full", ee = c === "default" ? `min-h-[220px] md:min-h-[360px] ${K}`.trim() : K;
  switch (i) {
    case "image":
      if (v)
        return /* @__PURE__ */ A("div", { className: z, children: /* @__PURE__ */ A(
          "img",
          {
            src: v,
            alt: L || "Media image",
            className: `object-cover ${K}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (b) {
        let T = b;
        return (b.includes("youtube.com/watch") || b.includes("youtu.be/")) && (T = `https://www.youtube.com/embed/${b.includes("youtu.be/") ? b.split("youtu.be/")[1].split("?")[0] : (U = b.split("v=")[1]) == null ? void 0 : U.split("&")[0]}`), /* @__PURE__ */ A("div", { className: z, children: /* @__PURE__ */ A(
          "iframe",
          {
            src: T,
            title: L || "Video player",
            frameBorder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: K
          }
        ) });
      }
      break;
    case "lottie":
      if (g)
        return /* @__PURE__ */ A("div", { className: z, children: /* @__PURE__ */ A("div", { className: `${K} overflow-hidden`.trim(), children: /* @__PURE__ */ A(
          nt,
          {
            animationData: g,
            loop: !0,
            autoplay: !0,
            className: ne,
            style: { width: "100%", height: "100%" },
            rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
          }
        ) }) });
      if (y)
        return /* @__PURE__ */ A("div", { className: z, children: /* @__PURE__ */ A("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (x)
        return /* @__PURE__ */ A("div", { className: z, children: /* @__PURE__ */ A(
          "iframe",
          {
            src: x,
            title: L || "Iframe content",
            frameBorder: "0",
            className: ee
          }
        ) });
      break;
  }
  return /* @__PURE__ */ A("div", { className: z, children: /* @__PURE__ */ A("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${c === "default" ? "" : "absolute inset-0"}`.trim(), children: i ? `${i.charAt(0).toUpperCase() + i.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function It({
  title: i,
  titleId: c,
  ...v
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
  }, v), i ? /* @__PURE__ */ Se.createElement("title", {
    id: c
  }, i) : null, /* @__PURE__ */ Se.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const At = /* @__PURE__ */ Se.forwardRef(It), Wt = ({
  text: i = "Link",
  href: c = "#",
  variant: v = "dark",
  // dark, light
  icon: b,
  className: y = "",
  ...g
}) => {
  const x = "text-link", L = (z) => {
    switch (z) {
      case "light":
        return "link-light";
      case "dark":
        return "link-dark";
      default:
        return "link-dark";
    }
  }, M = b || At, R = `${x} ${L(v)} ${y}`.trim();
  return /* @__PURE__ */ ye(
    "a",
    {
      href: c,
      className: R,
      ...g,
      children: [
        /* @__PURE__ */ A("span", { children: i }),
        /* @__PURE__ */ A(M, { className: "text-link-icon" })
      ]
    }
  );
}, qt = ({
  type: i = "award",
  // 'award' | 'media'
  title: c,
  subtitle: v,
  linkText: b = "Link",
  linkHref: y = "#",
  linkVariant: g = "light",
  mediaProps: x = {},
  // props for Media molecule
  className: L = "",
  attributes: M = {},
  ...R
}) => i === "media" ? /* @__PURE__ */ A("div", { className: L, ...R, children: /* @__PURE__ */ A(Ve, { ...x }) }) : /* @__PURE__ */ ye(
  "div",
  {
    className: `bg-grey-500 p-awards-padding flex flex-col items-center text-center space-y-36 ${L}`.trim(),
    ...R,
    ...M ?? {},
    children: [
      /* @__PURE__ */ ye("div", { className: "space-y-awards-spacing-y w-full", children: [
        /* @__PURE__ */ A("div", { className: "w-full max-w-[230px] mx-auto", children: /* @__PURE__ */ A(Ve, { ...x }) }),
        /* @__PURE__ */ ye("div", { className: "space-y-awards-text--spacing-y", children: [
          v && /* @__PURE__ */ A("div", { className: "text-body-default text-white", children: v }),
          c && /* @__PURE__ */ A("h3", { className: "text-headings-h3 font-semibold text-white", children: c })
        ] })
      ] }),
      /* @__PURE__ */ A("div", { children: /* @__PURE__ */ A(Wt, { text: b, href: y, variant: g }) })
    ]
  }
), Xt = ({
  items: i = [],
  // [{ title, subtitle, linkText, linkHref, linkVariant, mediaProps }]
  variant: c = "award",
  // 'award' | 'media'
  className: v = "",
  ...b
}) => {
  const y = c === "media", g = c === "award", x = (L, M) => /* @__PURE__ */ A(
    qt,
    {
      type: c,
      title: L.title,
      subtitle: L.subtitle,
      linkText: L.linkText,
      linkHref: L.linkHref,
      linkVariant: L.linkVariant,
      mediaProps: L.mediaProps
    },
    M
  );
  if (y)
    return /* @__PURE__ */ A("div", { className: `container ${v}`, ...b, children: /* @__PURE__ */ A("div", { className: "flex flex-wrap justify-center gap-section-spacing-x", children: i.map((L, M) => /* @__PURE__ */ A(
      "div",
      {
        className: "basis-[160px] lg:basis-[180px] xl:basis-[200px]",
        ...L.attributes,
        children: x(L, M)
      },
      M
    )) }) });
  if (g) {
    const L = {
      infinite: !0,
      arrows: !1,
      dots: !0,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: !0,
      centerPadding: "40px",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: !0,
            centerPadding: "40px"
          }
        }
      ]
    };
    return /* @__PURE__ */ ye("div", { className: `container ${v}`, ...b, children: [
      /* @__PURE__ */ A("div", { className: "hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-24", children: i.map((M, R) => /* @__PURE__ */ A("div", { ...M.attributes, children: x(M, R) }, R)) }),
      /* @__PURE__ */ A("div", { className: "md:hidden -mx-20", children: /* @__PURE__ */ A(Ht, { ...L, className: "awards-carousel", children: i.map((M, R) => /* @__PURE__ */ A("div", { className: "px-20", children: x(M, R) }, R)) }) })
    ] });
  }
  return /* @__PURE__ */ A("div", { className: `container ${v}`, ...b, children: /* @__PURE__ */ A("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24", children: i.map((L, M) => /* @__PURE__ */ A("div", { ...L.attributes, children: x(L, M) }, M)) }) });
};
export {
  Xt as default
};
