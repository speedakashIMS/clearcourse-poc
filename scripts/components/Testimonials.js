var Cv = Object.defineProperty;
var jg = (h) => {
  throw TypeError(h);
};
var Tv = (h, t, e) => t in h ? Cv(h, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : h[t] = e;
var V = (h, t, e) => Tv(h, typeof t != "symbol" ? t + "" : t, e), Af = (h, t, e) => t.has(h) || jg("Cannot " + e);
var n = (h, t, e) => (Af(h, t, "read from private field"), e ? e.call(h) : t.get(h)), v = (h, t, e) => t.has(h) ? jg("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(h) : t.set(h, e), m = (h, t, e, i) => (Af(h, t, "write to private field"), i ? i.call(h, e) : t.set(h, e), e), x = (h, t, e) => (Af(h, t, "access private method"), e);
var de = (h, t, e, i) => ({
  set _(s) {
    m(h, t, s, e);
  },
  get _() {
    return n(h, t, i);
  }
});
import { jsx as q, jsxs as Mn, Fragment as Pv } from "react/jsx-runtime";
import * as Ir from "react";
import Gi, { lazy as kv, Suspense as Rv, useState as go, useRef as Pi, useEffect as jt, useCallback as zs, forwardRef as jm, createContext as zm, useReducer as Mv, useImperativeHandle as $m, useMemo as hs, useContext as Um, useLayoutEffect as Lv } from "react";
import Dv from "lottie-react";
var Hd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Wm(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
function Ov(h) {
  if (Object.prototype.hasOwnProperty.call(h, "__esModule")) return h;
  var t = h.default;
  if (typeof t == "function") {
    var e = function i() {
      return this instanceof i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(h).forEach(function(i) {
    var s = Object.getOwnPropertyDescriptor(h, i);
    Object.defineProperty(e, i, s.get ? s : {
      enumerable: !0,
      get: function() {
        return h[i];
      }
    });
  }), e;
}
var xf = {}, _f = {}, ch = {}, Ef = {}, zg;
function Iv() {
  return zg || (zg = 1, (function(h) {
    Object.defineProperty(h, "__esModule", {
      value: !0
    }), h.default = void 0;
    var t = {
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
    h.default = t;
  })(Ef)), Ef;
}
var Cf, $g;
function Fv() {
  if ($g) return Cf;
  $g = 1;
  var h = "Expected a function", t = NaN, e = "[object Symbol]", i = /^\s+|\s+$/g, s = /^[-+]0x[0-9a-f]+$/i, r = /^0b[01]+$/i, a = /^0o[0-7]+$/i, o = parseInt, l = typeof Hd == "object" && Hd && Hd.Object === Object && Hd, c = typeof self == "object" && self && self.Object === Object && self, d = l || c || Function("return this")(), u = Object.prototype, g = u.toString, b = Math.max, E = Math.min, w = function() {
    return d.Date.now();
  };
  function M(f, y, A) {
    var T, P, C, D, N, I, B = 0, j = !1, z = !1, S = !0;
    if (typeof f != "function")
      throw new TypeError(h);
    y = p(y) || 0, k(A) && (j = !!A.leading, z = "maxWait" in A, C = z ? b(p(A.maxWait) || 0, y) : C, S = "trailing" in A ? !!A.trailing : S);
    function K(W) {
      var ht = T, ct = P;
      return T = P = void 0, B = W, D = f.apply(ct, ht), D;
    }
    function F(W) {
      return B = W, N = setTimeout(H, y), j ? K(W) : D;
    }
    function _(W) {
      var ht = W - I, ct = W - B, dt = y - ht;
      return z ? E(dt, C - ct) : dt;
    }
    function O(W) {
      var ht = W - I, ct = W - B;
      return I === void 0 || ht >= y || ht < 0 || z && ct >= C;
    }
    function H() {
      var W = w();
      if (O(W))
        return U(W);
      N = setTimeout(H, _(W));
    }
    function U(W) {
      return N = void 0, S && T ? K(W) : (T = P = void 0, D);
    }
    function $() {
      N !== void 0 && clearTimeout(N), B = 0, T = I = P = N = void 0;
    }
    function X() {
      return N === void 0 ? D : U(w());
    }
    function G() {
      var W = w(), ht = O(W);
      if (T = arguments, P = this, I = W, ht) {
        if (N === void 0)
          return F(I);
        if (z)
          return N = setTimeout(H, y), K(I);
      }
      return N === void 0 && (N = setTimeout(H, y)), D;
    }
    return G.cancel = $, G.flush = X, G;
  }
  function k(f) {
    var y = typeof f;
    return !!f && (y == "object" || y == "function");
  }
  function L(f) {
    return !!f && typeof f == "object";
  }
  function R(f) {
    return typeof f == "symbol" || L(f) && g.call(f) == e;
  }
  function p(f) {
    if (typeof f == "number")
      return f;
    if (R(f))
      return t;
    if (k(f)) {
      var y = typeof f.valueOf == "function" ? f.valueOf() : f;
      f = k(y) ? y + "" : y;
    }
    if (typeof f != "string")
      return f === 0 ? f : +f;
    f = f.replace(i, "");
    var A = r.test(f);
    return A || a.test(f) ? o(f.slice(2), A ? 2 : 8) : s.test(f) ? t : +f;
  }
  return Cf = M, Cf;
}
var Tf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ug;
function hf() {
  return Ug || (Ug = 1, (function(h) {
    (function() {
      var t = {}.hasOwnProperty;
      function e() {
        for (var r = "", a = 0; a < arguments.length; a++) {
          var o = arguments[a];
          o && (r = s(r, i(o)));
        }
        return r;
      }
      function i(r) {
        if (typeof r == "string" || typeof r == "number")
          return r;
        if (typeof r != "object")
          return "";
        if (Array.isArray(r))
          return e.apply(null, r);
        if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]"))
          return r.toString();
        var a = "";
        for (var o in r)
          t.call(r, o) && r[o] && (a = s(a, o));
        return a;
      }
      function s(r, a) {
        return a ? r ? r + " " + a : r + a : r;
      }
      h.exports ? (e.default = e, h.exports = e) : window.classNames = e;
    })();
  })(Tf)), Tf.exports;
}
var J = {}, Pf = {}, Wg;
function Gm() {
  return Wg || (Wg = 1, (function(h) {
    Object.defineProperty(h, "__esModule", {
      value: !0
    }), h.default = void 0;
    var t = e(Gi);
    function e(s) {
      return s && s.__esModule ? s : { default: s };
    }
    var i = {
      accessibility: !0,
      adaptiveHeight: !1,
      afterChange: null,
      appendDots: function(r) {
        return /* @__PURE__ */ t.default.createElement("ul", {
          style: {
            display: "block"
          }
        }, r);
      },
      arrows: !0,
      autoplay: !1,
      autoplaySpeed: 3e3,
      beforeChange: null,
      centerMode: !1,
      centerPadding: "50px",
      className: "",
      cssEase: "ease",
      customPaging: function(r) {
        return /* @__PURE__ */ t.default.createElement("button", null, r + 1);
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
    h.default = i;
  })(Pf)), Pf;
}
var Gg;
function Pd() {
  if (Gg) return J;
  Gg = 1, Object.defineProperty(J, "__esModule", {
    value: !0
  }), J.checkSpecKeys = J.checkNavigable = J.changeSlide = J.canUseDOM = J.canGoNext = void 0, J.clamp = c, J.extractObject = void 0, J.filterSettings = K, J.validSettings = J.swipeStart = J.swipeMove = J.swipeEnd = J.slidesOnRight = J.slidesOnLeft = J.slideHandler = J.siblingDirection = J.safePreventDefault = J.lazyStartIndex = J.lazySlidesOnRight = J.lazySlidesOnLeft = J.lazyEndIndex = J.keyHandler = J.initializedState = J.getWidth = J.getTrackLeft = J.getTrackCSS = J.getTrackAnimateCSS = J.getTotalSlides = J.getSwipeDirection = J.getSlideCount = J.getRequiredLazySlides = J.getPreClones = J.getPostClones = J.getOnDemandLazySlides = J.getNavigableIndexes = J.getHeight = void 0;
  var h = e(Gi), t = e(Gm());
  function e(F) {
    return F && F.__esModule ? F : { default: F };
  }
  function i(F) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(_) {
      return typeof _;
    } : function(_) {
      return _ && typeof Symbol == "function" && _.constructor === Symbol && _ !== Symbol.prototype ? "symbol" : typeof _;
    }, i(F);
  }
  function s(F, _) {
    var O = Object.keys(F);
    if (Object.getOwnPropertySymbols) {
      var H = Object.getOwnPropertySymbols(F);
      _ && (H = H.filter(function(U) {
        return Object.getOwnPropertyDescriptor(F, U).enumerable;
      })), O.push.apply(O, H);
    }
    return O;
  }
  function r(F) {
    for (var _ = 1; _ < arguments.length; _++) {
      var O = arguments[_] != null ? arguments[_] : {};
      _ % 2 ? s(Object(O), !0).forEach(function(H) {
        a(F, H, O[H]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(F, Object.getOwnPropertyDescriptors(O)) : s(Object(O)).forEach(function(H) {
        Object.defineProperty(F, H, Object.getOwnPropertyDescriptor(O, H));
      });
    }
    return F;
  }
  function a(F, _, O) {
    return (_ = o(_)) in F ? Object.defineProperty(F, _, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : F[_] = O, F;
  }
  function o(F) {
    var _ = l(F, "string");
    return i(_) == "symbol" ? _ : _ + "";
  }
  function l(F, _) {
    if (i(F) != "object" || !F) return F;
    var O = F[Symbol.toPrimitive];
    if (O !== void 0) {
      var H = O.call(F, _);
      if (i(H) != "object") return H;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (_ === "string" ? String : Number)(F);
  }
  function c(F, _, O) {
    return Math.max(_, Math.min(F, O));
  }
  var d = J.safePreventDefault = function(_) {
    var O = ["onTouchStart", "onTouchMove", "onWheel"];
    O.includes(_._reactName) || _.preventDefault();
  }, u = J.getOnDemandLazySlides = function(_) {
    for (var O = [], H = g(_), U = b(_), $ = H; $ < U; $++)
      _.lazyLoadedList.indexOf($) < 0 && O.push($);
    return O;
  };
  J.getRequiredLazySlides = function(_) {
    for (var O = [], H = g(_), U = b(_), $ = H; $ < U; $++)
      O.push($);
    return O;
  };
  var g = J.lazyStartIndex = function(_) {
    return _.currentSlide - E(_);
  }, b = J.lazyEndIndex = function(_) {
    return _.currentSlide + w(_);
  }, E = J.lazySlidesOnLeft = function(_) {
    return _.centerMode ? Math.floor(_.slidesToShow / 2) + (parseInt(_.centerPadding) > 0 ? 1 : 0) : 0;
  }, w = J.lazySlidesOnRight = function(_) {
    return _.centerMode ? Math.floor((_.slidesToShow - 1) / 2) + 1 + (parseInt(_.centerPadding) > 0 ? 1 : 0) : _.slidesToShow;
  }, M = J.getWidth = function(_) {
    return _ && _.offsetWidth || 0;
  }, k = J.getHeight = function(_) {
    return _ && _.offsetHeight || 0;
  }, L = J.getSwipeDirection = function(_) {
    var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, H, U, $, X;
    return H = _.startX - _.curX, U = _.startY - _.curY, $ = Math.atan2(U, H), X = Math.round($ * 180 / Math.PI), X < 0 && (X = 360 - Math.abs(X)), X <= 45 && X >= 0 || X <= 360 && X >= 315 ? "left" : X >= 135 && X <= 225 ? "right" : O === !0 ? X >= 35 && X <= 135 ? "up" : "down" : "vertical";
  }, R = J.canGoNext = function(_) {
    var O = !0;
    return _.infinite || (_.centerMode && _.currentSlide >= _.slideCount - 1 || _.slideCount <= _.slidesToShow || _.currentSlide >= _.slideCount - _.slidesToShow) && (O = !1), O;
  };
  J.extractObject = function(_, O) {
    var H = {};
    return O.forEach(function(U) {
      return H[U] = _[U];
    }), H;
  }, J.initializedState = function(_) {
    var O = h.default.Children.count(_.children), H = _.listRef, U = Math.ceil(M(H)), $ = _.trackRef && _.trackRef.node, X = Math.ceil(M($)), G;
    if (_.vertical)
      G = U;
    else {
      var W = _.centerMode && parseInt(_.centerPadding) * 2;
      typeof _.centerPadding == "string" && _.centerPadding.slice(-1) === "%" && (W *= U / 100), G = Math.ceil((U - W) / _.slidesToShow);
    }
    var ht = H && k(H.querySelector('[data-index="0"]')), ct = ht * _.slidesToShow, dt = _.currentSlide === void 0 ? _.initialSlide : _.currentSlide;
    _.rtl && _.currentSlide === void 0 && (dt = O - 1 - _.initialSlide);
    var ut = _.lazyLoadedList || [], rt = u(r(r({}, _), {}, {
      currentSlide: dt,
      lazyLoadedList: ut
    }));
    ut = ut.concat(rt);
    var st = {
      slideCount: O,
      slideWidth: G,
      listWidth: U,
      trackWidth: X,
      currentSlide: dt,
      slideHeight: ht,
      listHeight: ct,
      lazyLoadedList: ut
    };
    return _.autoplaying === null && _.autoplay && (st.autoplaying = "playing"), st;
  }, J.slideHandler = function(_) {
    var O = _.waitForAnimate, H = _.animating, U = _.fade, $ = _.infinite, X = _.index, G = _.slideCount, W = _.lazyLoad, ht = _.currentSlide, ct = _.centerMode, dt = _.slidesToScroll, ut = _.slidesToShow, rt = _.useCSS, st = _.lazyLoadedList;
    if (O && H) return {};
    var nt = X, at, St, ot, Ct = {}, ae = {}, ce = $ ? X : c(X, 0, G - 1);
    if (U) {
      if (!$ && (X < 0 || X >= G)) return {};
      X < 0 ? nt = X + G : X >= G && (nt = X - G), W && st.indexOf(nt) < 0 && (st = st.concat(nt)), Ct = {
        animating: !0,
        currentSlide: nt,
        lazyLoadedList: st,
        targetSlide: nt
      }, ae = {
        animating: !1,
        targetSlide: nt
      };
    } else
      at = nt, nt < 0 ? (at = nt + G, $ ? G % dt !== 0 && (at = G - G % dt) : at = 0) : !R(_) && nt > ht ? nt = at = ht : ct && nt >= G ? (nt = $ ? G : G - 1, at = $ ? 0 : G - 1) : nt >= G && (at = nt - G, $ ? G % dt !== 0 && (at = 0) : at = G - ut), !$ && nt + ut >= G && (at = G - ut), St = C(r(r({}, _), {}, {
        slideIndex: nt
      })), ot = C(r(r({}, _), {}, {
        slideIndex: at
      })), $ || (St === ot && (nt = at), St = ot), W && (st = st.concat(u(r(r({}, _), {}, {
        currentSlide: nt
      })))), rt ? (Ct = {
        animating: !0,
        currentSlide: at,
        trackStyle: P(r(r({}, _), {}, {
          left: St
        })),
        lazyLoadedList: st,
        targetSlide: ce
      }, ae = {
        animating: !1,
        currentSlide: at,
        trackStyle: T(r(r({}, _), {}, {
          left: ot
        })),
        swipeLeft: null,
        targetSlide: ce
      }) : Ct = {
        currentSlide: at,
        trackStyle: T(r(r({}, _), {}, {
          left: ot
        })),
        lazyLoadedList: st,
        targetSlide: ce
      };
    return {
      state: Ct,
      nextState: ae
    };
  }, J.changeSlide = function(_, O) {
    var H, U, $, X, G, W = _.slidesToScroll, ht = _.slidesToShow, ct = _.slideCount, dt = _.currentSlide, ut = _.targetSlide, rt = _.lazyLoad, st = _.infinite;
    if (X = ct % W !== 0, H = X ? 0 : (ct - dt) % W, O.message === "previous")
      $ = H === 0 ? W : ht - H, G = dt - $, rt && !st && (U = dt - $, G = U === -1 ? ct - 1 : U), st || (G = ut - W);
    else if (O.message === "next")
      $ = H === 0 ? W : H, G = dt + $, rt && !st && (G = (dt + W) % ct + H), st || (G = ut + W);
    else if (O.message === "dots")
      G = O.index * O.slidesToScroll;
    else if (O.message === "children") {
      if (G = O.index, st) {
        var nt = B(r(r({}, _), {}, {
          targetSlide: G
        }));
        G > O.currentSlide && nt === "left" ? G = G - ct : G < O.currentSlide && nt === "right" && (G = G + ct);
      }
    } else O.message === "index" && (G = Number(O.index));
    return G;
  }, J.keyHandler = function(_, O, H) {
    return _.target.tagName.match("TEXTAREA|INPUT|SELECT") || !O ? "" : _.keyCode === 37 ? H ? "next" : "previous" : _.keyCode === 39 ? H ? "previous" : "next" : "";
  }, J.swipeStart = function(_, O, H) {
    return _.target.tagName === "IMG" && d(_), !O || !H && _.type.indexOf("mouse") !== -1 ? "" : {
      dragging: !0,
      touchObject: {
        startX: _.touches ? _.touches[0].pageX : _.clientX,
        startY: _.touches ? _.touches[0].pageY : _.clientY,
        curX: _.touches ? _.touches[0].pageX : _.clientX,
        curY: _.touches ? _.touches[0].pageY : _.clientY
      }
    };
  }, J.swipeMove = function(_, O) {
    var H = O.scrolling, U = O.animating, $ = O.vertical, X = O.swipeToSlide, G = O.verticalSwiping, W = O.rtl, ht = O.currentSlide, ct = O.edgeFriction, dt = O.edgeDragged, ut = O.onEdge, rt = O.swiped, st = O.swiping, nt = O.slideCount, at = O.slidesToScroll, St = O.infinite, ot = O.touchObject, Ct = O.swipeEvent, ae = O.listHeight, ce = O.listWidth;
    if (!H) {
      if (U) return d(_);
      $ && X && G && d(_);
      var _e, Us = {}, Ws = C(O);
      ot.curX = _.touches ? _.touches[0].pageX : _.clientX, ot.curY = _.touches ? _.touches[0].pageY : _.clientY, ot.swipeLength = Math.round(Math.sqrt(Math.pow(ot.curX - ot.startX, 2)));
      var Bd = Math.round(Math.sqrt(Math.pow(ot.curY - ot.startY, 2)));
      if (!G && !st && Bd > 10)
        return {
          scrolling: !0
        };
      G && (ot.swipeLength = Bd);
      var jr = (W ? -1 : 1) * (ot.curX > ot.startX ? 1 : -1);
      G && (jr = ot.curY > ot.startY ? 1 : -1);
      var wf = Math.ceil(nt / at), us = L(O.touchObject, G), zr = ot.swipeLength;
      return St || (ht === 0 && (us === "right" || us === "down") || ht + 1 >= wf && (us === "left" || us === "up") || !R(O) && (us === "left" || us === "up")) && (zr = ot.swipeLength * ct, dt === !1 && ut && (ut(us), Us.edgeDragged = !0)), !rt && Ct && (Ct(us), Us.swiped = !0), $ ? _e = Ws + zr * (ae / ce) * jr : W ? _e = Ws - zr * jr : _e = Ws + zr * jr, G && (_e = Ws + zr * jr), Us = r(r({}, Us), {}, {
        touchObject: ot,
        swipeLeft: _e,
        trackStyle: T(r(r({}, O), {}, {
          left: _e
        }))
      }), Math.abs(ot.curX - ot.startX) < Math.abs(ot.curY - ot.startY) * 0.8 || ot.swipeLength > 10 && (Us.swiping = !0, d(_)), Us;
    }
  }, J.swipeEnd = function(_, O) {
    var H = O.dragging, U = O.swipe, $ = O.touchObject, X = O.listWidth, G = O.touchThreshold, W = O.verticalSwiping, ht = O.listHeight, ct = O.swipeToSlide, dt = O.scrolling, ut = O.onSwipe, rt = O.targetSlide, st = O.currentSlide, nt = O.infinite;
    if (!H)
      return U && d(_), {};
    var at = W ? ht / G : X / G, St = L($, W), ot = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {}
    };
    if (dt || !$.swipeLength)
      return ot;
    if ($.swipeLength > at) {
      d(_), ut && ut(St);
      var Ct, ae, ce = nt ? st : rt;
      switch (St) {
        case "left":
        case "up":
          ae = ce + y(O), Ct = ct ? f(O, ae) : ae, ot.currentDirection = 0;
          break;
        case "right":
        case "down":
          ae = ce - y(O), Ct = ct ? f(O, ae) : ae, ot.currentDirection = 1;
          break;
        default:
          Ct = ce;
      }
      ot.triggerSlideHandler = Ct;
    } else {
      var _e = C(O);
      ot.trackStyle = P(r(r({}, O), {}, {
        left: _e
      }));
    }
    return ot;
  };
  var p = J.getNavigableIndexes = function(_) {
    for (var O = _.infinite ? _.slideCount * 2 : _.slideCount, H = _.infinite ? _.slidesToShow * -1 : 0, U = _.infinite ? _.slidesToShow * -1 : 0, $ = []; H < O; )
      $.push(H), H = U + _.slidesToScroll, U += Math.min(_.slidesToScroll, _.slidesToShow);
    return $;
  }, f = J.checkNavigable = function(_, O) {
    var H = p(_), U = 0;
    if (O > H[H.length - 1])
      O = H[H.length - 1];
    else
      for (var $ in H) {
        if (O < H[$]) {
          O = U;
          break;
        }
        U = H[$];
      }
    return O;
  }, y = J.getSlideCount = function(_) {
    var O = _.centerMode ? _.slideWidth * Math.floor(_.slidesToShow / 2) : 0;
    if (_.swipeToSlide) {
      var H, U = _.listRef, $ = U.querySelectorAll && U.querySelectorAll(".slick-slide") || [];
      if (Array.from($).every(function(W) {
        if (_.vertical) {
          if (W.offsetTop + k(W) / 2 > _.swipeLeft * -1)
            return H = W, !1;
        } else if (W.offsetLeft - O + M(W) / 2 > _.swipeLeft * -1)
          return H = W, !1;
        return !0;
      }), !H)
        return 0;
      var X = _.rtl === !0 ? _.slideCount - _.currentSlide : _.currentSlide, G = Math.abs(H.dataset.index - X) || 1;
      return G;
    } else
      return _.slidesToScroll;
  }, A = J.checkSpecKeys = function(_, O) {
    return O.reduce(function(H, U) {
      return H && _.hasOwnProperty(U);
    }, !0) ? null : console.error("Keys Missing:", _);
  }, T = J.getTrackCSS = function(_) {
    A(_, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
    var O, H;
    if (!_.vertical)
      O = I(_) * _.slideWidth;
    else {
      var U = _.unslick ? _.slideCount : _.slideCount + 2 * _.slidesToShow;
      H = U * _.slideHeight;
    }
    var $ = {
      opacity: 1,
      transition: "",
      WebkitTransition: ""
    };
    if (_.useTransform) {
      var X = _.vertical ? "translate3d(0px, " + _.left + "px, 0px)" : "translate3d(" + _.left + "px, 0px, 0px)", G = _.vertical ? "translate3d(0px, " + _.left + "px, 0px)" : "translate3d(" + _.left + "px, 0px, 0px)", W = _.vertical ? "translateY(" + _.left + "px)" : "translateX(" + _.left + "px)";
      $ = r(r({}, $), {}, {
        WebkitTransform: X,
        transform: G,
        msTransform: W
      });
    } else
      _.vertical ? $.top = _.left : $.left = _.left;
    return _.fade && ($ = {
      opacity: 1
    }), O && ($.width = O), H && ($.height = H), window && !window.addEventListener && window.attachEvent && (_.vertical ? $.marginTop = _.left + "px" : $.marginLeft = _.left + "px"), $;
  }, P = J.getTrackAnimateCSS = function(_) {
    A(_, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var O = T(_);
    return _.useTransform ? (O.WebkitTransition = "-webkit-transform " + _.speed + "ms " + _.cssEase, O.transition = "transform " + _.speed + "ms " + _.cssEase) : _.vertical ? O.transition = "top " + _.speed + "ms " + _.cssEase : O.transition = "left " + _.speed + "ms " + _.cssEase, O;
  }, C = J.getTrackLeft = function(_) {
    if (_.unslick)
      return 0;
    A(_, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var O = _.slideIndex, H = _.trackRef, U = _.infinite, $ = _.centerMode, X = _.slideCount, G = _.slidesToShow, W = _.slidesToScroll, ht = _.slideWidth, ct = _.listWidth, dt = _.variableWidth, ut = _.slideHeight, rt = _.fade, st = _.vertical, nt = 0, at, St, ot = 0;
    if (rt || _.slideCount === 1)
      return 0;
    var Ct = 0;
    if (U ? (Ct = -D(_), X % W !== 0 && O + W > X && (Ct = -(O > X ? G - (O - X) : X % W)), $ && (Ct += parseInt(G / 2))) : (X % W !== 0 && O + W > X && (Ct = G - X % W), $ && (Ct = parseInt(G / 2))), nt = Ct * ht, ot = Ct * ut, st ? at = O * ut * -1 + ot : at = O * ht * -1 + nt, dt === !0) {
      var ae, ce = H && H.node;
      if (ae = O + D(_), St = ce && ce.childNodes[ae], at = St ? St.offsetLeft * -1 : 0, $ === !0) {
        ae = U ? O + D(_) : O, St = ce && ce.children[ae], at = 0;
        for (var _e = 0; _e < ae; _e++)
          at -= ce && ce.children[_e] && ce.children[_e].offsetWidth;
        at -= parseInt(_.centerPadding), at += St && (ct - St.offsetWidth) / 2;
      }
    }
    return at;
  }, D = J.getPreClones = function(_) {
    return _.unslick || !_.infinite ? 0 : _.variableWidth ? _.slideCount : _.slidesToShow + (_.centerMode ? 1 : 0);
  }, N = J.getPostClones = function(_) {
    return _.unslick || !_.infinite ? 0 : _.variableWidth ? _.slideCount : _.slidesToShow + (_.centerMode ? 1 : 0);
  }, I = J.getTotalSlides = function(_) {
    return _.slideCount === 1 ? 1 : D(_) + _.slideCount + N(_);
  }, B = J.siblingDirection = function(_) {
    return _.targetSlide > _.currentSlide ? _.targetSlide > _.currentSlide + j(_) ? "left" : "right" : _.targetSlide < _.currentSlide - z(_) ? "right" : "left";
  }, j = J.slidesOnRight = function(_) {
    var O = _.slidesToShow, H = _.centerMode, U = _.rtl, $ = _.centerPadding;
    if (H) {
      var X = (O - 1) / 2 + 1;
      return parseInt($) > 0 && (X += 1), U && O % 2 === 0 && (X += 1), X;
    }
    return U ? 0 : O - 1;
  }, z = J.slidesOnLeft = function(_) {
    var O = _.slidesToShow, H = _.centerMode, U = _.rtl, $ = _.centerPadding;
    if (H) {
      var X = (O - 1) / 2 + 1;
      return parseInt($) > 0 && (X += 1), !U && O % 2 === 0 && (X += 1), X;
    }
    return U ? O - 1 : 0;
  };
  J.canUseDOM = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  };
  var S = J.validSettings = Object.keys(t.default);
  function K(F) {
    return S.reduce(function(_, O) {
      return F.hasOwnProperty(O) && (_[O] = F[O]), _;
    }, {});
  }
  return J;
}
var dh = {}, Vg;
function Nv() {
  if (Vg) return dh;
  Vg = 1, Object.defineProperty(dh, "__esModule", {
    value: !0
  }), dh.Track = void 0;
  var h = i(Gi), t = i(hf()), e = Pd();
  function i(P) {
    return P && P.__esModule ? P : { default: P };
  }
  function s(P) {
    "@babel/helpers - typeof";
    return s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(C) {
      return typeof C;
    } : function(C) {
      return C && typeof Symbol == "function" && C.constructor === Symbol && C !== Symbol.prototype ? "symbol" : typeof C;
    }, s(P);
  }
  function r() {
    return r = Object.assign ? Object.assign.bind() : function(P) {
      for (var C = 1; C < arguments.length; C++) {
        var D = arguments[C];
        for (var N in D)
          ({}).hasOwnProperty.call(D, N) && (P[N] = D[N]);
      }
      return P;
    }, r.apply(null, arguments);
  }
  function a(P, C) {
    if (!(P instanceof C)) throw new TypeError("Cannot call a class as a function");
  }
  function o(P, C) {
    for (var D = 0; D < C.length; D++) {
      var N = C[D];
      N.enumerable = N.enumerable || !1, N.configurable = !0, "value" in N && (N.writable = !0), Object.defineProperty(P, R(N.key), N);
    }
  }
  function l(P, C, D) {
    return C && o(P.prototype, C), Object.defineProperty(P, "prototype", { writable: !1 }), P;
  }
  function c(P, C) {
    if (typeof C != "function" && C !== null) throw new TypeError("Super expression must either be null or a function");
    P.prototype = Object.create(C && C.prototype, { constructor: { value: P, writable: !0, configurable: !0 } }), Object.defineProperty(P, "prototype", { writable: !1 }), C && d(P, C);
  }
  function d(P, C) {
    return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(D, N) {
      return D.__proto__ = N, D;
    }, d(P, C);
  }
  function u(P) {
    var C = E();
    return function() {
      var D, N = w(P);
      if (C) {
        var I = w(this).constructor;
        D = Reflect.construct(N, arguments, I);
      } else D = N.apply(this, arguments);
      return g(this, D);
    };
  }
  function g(P, C) {
    if (C && (s(C) == "object" || typeof C == "function")) return C;
    if (C !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return b(P);
  }
  function b(P) {
    if (P === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return P;
  }
  function E() {
    try {
      var P = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (E = function() {
      return !!P;
    })();
  }
  function w(P) {
    return w = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(C) {
      return C.__proto__ || Object.getPrototypeOf(C);
    }, w(P);
  }
  function M(P, C) {
    var D = Object.keys(P);
    if (Object.getOwnPropertySymbols) {
      var N = Object.getOwnPropertySymbols(P);
      C && (N = N.filter(function(I) {
        return Object.getOwnPropertyDescriptor(P, I).enumerable;
      })), D.push.apply(D, N);
    }
    return D;
  }
  function k(P) {
    for (var C = 1; C < arguments.length; C++) {
      var D = arguments[C] != null ? arguments[C] : {};
      C % 2 ? M(Object(D), !0).forEach(function(N) {
        L(P, N, D[N]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(D)) : M(Object(D)).forEach(function(N) {
        Object.defineProperty(P, N, Object.getOwnPropertyDescriptor(D, N));
      });
    }
    return P;
  }
  function L(P, C, D) {
    return (C = R(C)) in P ? Object.defineProperty(P, C, { value: D, enumerable: !0, configurable: !0, writable: !0 }) : P[C] = D, P;
  }
  function R(P) {
    var C = p(P, "string");
    return s(C) == "symbol" ? C : C + "";
  }
  function p(P, C) {
    if (s(P) != "object" || !P) return P;
    var D = P[Symbol.toPrimitive];
    if (D !== void 0) {
      var N = D.call(P, C);
      if (s(N) != "object") return N;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (C === "string" ? String : Number)(P);
  }
  var f = function(C) {
    var D, N, I, B, j;
    C.rtl ? j = C.slideCount - 1 - C.index : j = C.index, I = j < 0 || j >= C.slideCount, C.centerMode ? (B = Math.floor(C.slidesToShow / 2), N = (j - C.currentSlide) % C.slideCount === 0, j > C.currentSlide - B - 1 && j <= C.currentSlide + B && (D = !0)) : D = C.currentSlide <= j && j < C.currentSlide + C.slidesToShow;
    var z;
    C.targetSlide < 0 ? z = C.targetSlide + C.slideCount : C.targetSlide >= C.slideCount ? z = C.targetSlide - C.slideCount : z = C.targetSlide;
    var S = j === z;
    return {
      "slick-slide": !0,
      "slick-active": D,
      "slick-center": N,
      "slick-cloned": I,
      "slick-current": S
      // dubious in case of RTL
    };
  }, y = function(C) {
    var D = {};
    return (C.variableWidth === void 0 || C.variableWidth === !1) && (D.width = C.slideWidth), C.fade && (D.position = "relative", C.vertical ? D.top = -C.index * parseInt(C.slideHeight) : D.left = -C.index * parseInt(C.slideWidth), D.opacity = C.currentSlide === C.index ? 1 : 0, D.zIndex = C.currentSlide === C.index ? 999 : 998, C.useCSS && (D.transition = "opacity " + C.speed + "ms " + C.cssEase + ", visibility " + C.speed + "ms " + C.cssEase)), D;
  }, A = function(C, D) {
    return C.key || D;
  }, T = function(C) {
    var D, N = [], I = [], B = [], j = h.default.Children.count(C.children), z = (0, e.lazyStartIndex)(C), S = (0, e.lazyEndIndex)(C);
    return h.default.Children.forEach(C.children, function(K, F) {
      var _, O = {
        message: "children",
        index: F,
        slidesToScroll: C.slidesToScroll,
        currentSlide: C.currentSlide
      };
      !C.lazyLoad || C.lazyLoad && C.lazyLoadedList.indexOf(F) >= 0 ? _ = K : _ = /* @__PURE__ */ h.default.createElement("div", null);
      var H = y(k(k({}, C), {}, {
        index: F
      })), U = _.props.className || "", $ = f(k(k({}, C), {}, {
        index: F
      }));
      if (N.push(/* @__PURE__ */ h.default.cloneElement(_, {
        key: "original" + A(_, F),
        "data-index": F,
        className: (0, t.default)($, U),
        tabIndex: "-1",
        "aria-hidden": !$["slick-active"],
        style: k(k({
          outline: "none"
        }, _.props.style || {}), H),
        onClick: function(W) {
          _.props && _.props.onClick && _.props.onClick(W), C.focusOnSelect && C.focusOnSelect(O);
        }
      })), C.infinite && j > 1 && C.fade === !1 && !C.unslick) {
        var X = j - F;
        X <= (0, e.getPreClones)(C) && (D = -X, D >= z && (_ = K), $ = f(k(k({}, C), {}, {
          index: D
        })), I.push(/* @__PURE__ */ h.default.cloneElement(_, {
          key: "precloned" + A(_, D),
          "data-index": D,
          tabIndex: "-1",
          className: (0, t.default)($, U),
          "aria-hidden": !$["slick-active"],
          style: k(k({}, _.props.style || {}), H),
          onClick: function(W) {
            _.props && _.props.onClick && _.props.onClick(W), C.focusOnSelect && C.focusOnSelect(O);
          }
        }))), F < (0, e.getPostClones)(C) && (D = j + F, D < S && (_ = K), $ = f(k(k({}, C), {}, {
          index: D
        })), B.push(/* @__PURE__ */ h.default.cloneElement(_, {
          key: "postcloned" + A(_, D),
          "data-index": D,
          tabIndex: "-1",
          className: (0, t.default)($, U),
          "aria-hidden": !$["slick-active"],
          style: k(k({}, _.props.style || {}), H),
          onClick: function(W) {
            _.props && _.props.onClick && _.props.onClick(W), C.focusOnSelect && C.focusOnSelect(O);
          }
        })));
      }
    }), C.rtl ? I.concat(N, B).reverse() : I.concat(N, B);
  };
  return dh.Track = /* @__PURE__ */ (function(P) {
    c(D, P);
    var C = u(D);
    function D() {
      var N;
      a(this, D);
      for (var I = arguments.length, B = new Array(I), j = 0; j < I; j++)
        B[j] = arguments[j];
      return N = C.call.apply(C, [this].concat(B)), L(b(N), "node", null), L(b(N), "handleRef", function(z) {
        N.node = z;
      }), N;
    }
    return l(D, [{
      key: "render",
      value: function() {
        var I = T(this.props), B = this.props, j = B.onMouseEnter, z = B.onMouseOver, S = B.onMouseLeave, K = {
          onMouseEnter: j,
          onMouseOver: z,
          onMouseLeave: S
        };
        return /* @__PURE__ */ h.default.createElement("div", r({
          ref: this.handleRef,
          className: "slick-track",
          style: this.props.trackStyle
        }, K), I);
      }
    }]), D;
  })(h.default.PureComponent), dh;
}
var uh = {}, qg;
function Bv() {
  if (qg) return uh;
  qg = 1;
  function h(f) {
    "@babel/helpers - typeof";
    return h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
      return typeof y;
    } : function(y) {
      return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
    }, h(f);
  }
  Object.defineProperty(uh, "__esModule", {
    value: !0
  }), uh.Dots = void 0;
  var t = s(Gi), e = s(hf()), i = Pd();
  function s(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function r(f, y) {
    var A = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var T = Object.getOwnPropertySymbols(f);
      y && (T = T.filter(function(P) {
        return Object.getOwnPropertyDescriptor(f, P).enumerable;
      })), A.push.apply(A, T);
    }
    return A;
  }
  function a(f) {
    for (var y = 1; y < arguments.length; y++) {
      var A = arguments[y] != null ? arguments[y] : {};
      y % 2 ? r(Object(A), !0).forEach(function(T) {
        o(f, T, A[T]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(A)) : r(Object(A)).forEach(function(T) {
        Object.defineProperty(f, T, Object.getOwnPropertyDescriptor(A, T));
      });
    }
    return f;
  }
  function o(f, y, A) {
    return (y = u(y)) in f ? Object.defineProperty(f, y, { value: A, enumerable: !0, configurable: !0, writable: !0 }) : f[y] = A, f;
  }
  function l(f, y) {
    if (!(f instanceof y)) throw new TypeError("Cannot call a class as a function");
  }
  function c(f, y) {
    for (var A = 0; A < y.length; A++) {
      var T = y[A];
      T.enumerable = T.enumerable || !1, T.configurable = !0, "value" in T && (T.writable = !0), Object.defineProperty(f, u(T.key), T);
    }
  }
  function d(f, y, A) {
    return y && c(f.prototype, y), Object.defineProperty(f, "prototype", { writable: !1 }), f;
  }
  function u(f) {
    var y = g(f, "string");
    return h(y) == "symbol" ? y : y + "";
  }
  function g(f, y) {
    if (h(f) != "object" || !f) return f;
    var A = f[Symbol.toPrimitive];
    if (A !== void 0) {
      var T = A.call(f, y);
      if (h(T) != "object") return T;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(f);
  }
  function b(f, y) {
    if (typeof y != "function" && y !== null) throw new TypeError("Super expression must either be null or a function");
    f.prototype = Object.create(y && y.prototype, { constructor: { value: f, writable: !0, configurable: !0 } }), Object.defineProperty(f, "prototype", { writable: !1 }), y && E(f, y);
  }
  function E(f, y) {
    return E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(A, T) {
      return A.__proto__ = T, A;
    }, E(f, y);
  }
  function w(f) {
    var y = L();
    return function() {
      var A, T = R(f);
      if (y) {
        var P = R(this).constructor;
        A = Reflect.construct(T, arguments, P);
      } else A = T.apply(this, arguments);
      return M(this, A);
    };
  }
  function M(f, y) {
    if (y && (h(y) == "object" || typeof y == "function")) return y;
    if (y !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return k(f);
  }
  function k(f) {
    if (f === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return f;
  }
  function L() {
    try {
      var f = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (L = function() {
      return !!f;
    })();
  }
  function R(f) {
    return R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(y) {
      return y.__proto__ || Object.getPrototypeOf(y);
    }, R(f);
  }
  var p = function(y) {
    var A;
    return y.infinite ? A = Math.ceil(y.slideCount / y.slidesToScroll) : A = Math.ceil((y.slideCount - y.slidesToShow) / y.slidesToScroll) + 1, A;
  };
  return uh.Dots = /* @__PURE__ */ (function(f) {
    b(A, f);
    var y = w(A);
    function A() {
      return l(this, A), y.apply(this, arguments);
    }
    return d(A, [{
      key: "clickHandler",
      value: function(P, C) {
        C.preventDefault(), this.props.clickHandler(P);
      }
    }, {
      key: "render",
      value: function() {
        for (var P = this.props, C = P.onMouseEnter, D = P.onMouseOver, N = P.onMouseLeave, I = P.infinite, B = P.slidesToScroll, j = P.slidesToShow, z = P.slideCount, S = P.currentSlide, K = p({
          slideCount: z,
          slidesToScroll: B,
          slidesToShow: j,
          infinite: I
        }), F = {
          onMouseEnter: C,
          onMouseOver: D,
          onMouseLeave: N
        }, _ = [], O = 0; O < K; O++) {
          var H = (O + 1) * B - 1, U = I ? H : (0, i.clamp)(H, 0, z - 1), $ = U - (B - 1), X = I ? $ : (0, i.clamp)($, 0, z - 1), G = (0, e.default)({
            "slick-active": I ? S >= X && S <= U : S === X
          }), W = {
            message: "dots",
            index: O,
            slidesToScroll: B,
            currentSlide: S
          }, ht = this.clickHandler.bind(this, W);
          _ = _.concat(/* @__PURE__ */ t.default.createElement("li", {
            key: O,
            className: G
          }, /* @__PURE__ */ t.default.cloneElement(this.props.customPaging(O), {
            onClick: ht
          })));
        }
        return /* @__PURE__ */ t.default.cloneElement(this.props.appendDots(_), a({
          className: this.props.dotsClass
        }, F));
      }
    }]), A;
  })(t.default.PureComponent), uh;
}
var $r = {}, Xg;
function Hv() {
  if (Xg) return $r;
  Xg = 1;
  function h(f) {
    "@babel/helpers - typeof";
    return h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
      return typeof y;
    } : function(y) {
      return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
    }, h(f);
  }
  Object.defineProperty($r, "__esModule", {
    value: !0
  }), $r.PrevArrow = $r.NextArrow = void 0;
  var t = s(Gi), e = s(hf()), i = Pd();
  function s(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function r() {
    return r = Object.assign ? Object.assign.bind() : function(f) {
      for (var y = 1; y < arguments.length; y++) {
        var A = arguments[y];
        for (var T in A)
          ({}).hasOwnProperty.call(A, T) && (f[T] = A[T]);
      }
      return f;
    }, r.apply(null, arguments);
  }
  function a(f, y) {
    var A = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var T = Object.getOwnPropertySymbols(f);
      y && (T = T.filter(function(P) {
        return Object.getOwnPropertyDescriptor(f, P).enumerable;
      })), A.push.apply(A, T);
    }
    return A;
  }
  function o(f) {
    for (var y = 1; y < arguments.length; y++) {
      var A = arguments[y] != null ? arguments[y] : {};
      y % 2 ? a(Object(A), !0).forEach(function(T) {
        l(f, T, A[T]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(A)) : a(Object(A)).forEach(function(T) {
        Object.defineProperty(f, T, Object.getOwnPropertyDescriptor(A, T));
      });
    }
    return f;
  }
  function l(f, y, A) {
    return (y = g(y)) in f ? Object.defineProperty(f, y, { value: A, enumerable: !0, configurable: !0, writable: !0 }) : f[y] = A, f;
  }
  function c(f, y) {
    if (!(f instanceof y)) throw new TypeError("Cannot call a class as a function");
  }
  function d(f, y) {
    for (var A = 0; A < y.length; A++) {
      var T = y[A];
      T.enumerable = T.enumerable || !1, T.configurable = !0, "value" in T && (T.writable = !0), Object.defineProperty(f, g(T.key), T);
    }
  }
  function u(f, y, A) {
    return y && d(f.prototype, y), Object.defineProperty(f, "prototype", { writable: !1 }), f;
  }
  function g(f) {
    var y = b(f, "string");
    return h(y) == "symbol" ? y : y + "";
  }
  function b(f, y) {
    if (h(f) != "object" || !f) return f;
    var A = f[Symbol.toPrimitive];
    if (A !== void 0) {
      var T = A.call(f, y);
      if (h(T) != "object") return T;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(f);
  }
  function E(f, y) {
    if (typeof y != "function" && y !== null) throw new TypeError("Super expression must either be null or a function");
    f.prototype = Object.create(y && y.prototype, { constructor: { value: f, writable: !0, configurable: !0 } }), Object.defineProperty(f, "prototype", { writable: !1 }), y && w(f, y);
  }
  function w(f, y) {
    return w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(A, T) {
      return A.__proto__ = T, A;
    }, w(f, y);
  }
  function M(f) {
    var y = R();
    return function() {
      var A, T = p(f);
      if (y) {
        var P = p(this).constructor;
        A = Reflect.construct(T, arguments, P);
      } else A = T.apply(this, arguments);
      return k(this, A);
    };
  }
  function k(f, y) {
    if (y && (h(y) == "object" || typeof y == "function")) return y;
    if (y !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return L(f);
  }
  function L(f) {
    if (f === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return f;
  }
  function R() {
    try {
      var f = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (R = function() {
      return !!f;
    })();
  }
  function p(f) {
    return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(y) {
      return y.__proto__ || Object.getPrototypeOf(y);
    }, p(f);
  }
  return $r.PrevArrow = /* @__PURE__ */ (function(f) {
    E(A, f);
    var y = M(A);
    function A() {
      return c(this, A), y.apply(this, arguments);
    }
    return u(A, [{
      key: "clickHandler",
      value: function(P, C) {
        C && C.preventDefault(), this.props.clickHandler(P, C);
      }
    }, {
      key: "render",
      value: function() {
        var P = {
          "slick-arrow": !0,
          "slick-prev": !0
        }, C = this.clickHandler.bind(this, {
          message: "previous"
        });
        !this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow) && (P["slick-disabled"] = !0, C = null);
        var D = {
          key: "0",
          "data-role": "none",
          className: (0, e.default)(P),
          style: {
            display: "block"
          },
          onClick: C
        }, N = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, I;
        return this.props.prevArrow ? I = /* @__PURE__ */ t.default.cloneElement(this.props.prevArrow, o(o({}, D), N)) : I = /* @__PURE__ */ t.default.createElement("button", r({
          key: "0",
          type: "button"
        }, D), " ", "Previous"), I;
      }
    }]), A;
  })(t.default.PureComponent), $r.NextArrow = /* @__PURE__ */ (function(f) {
    E(A, f);
    var y = M(A);
    function A() {
      return c(this, A), y.apply(this, arguments);
    }
    return u(A, [{
      key: "clickHandler",
      value: function(P, C) {
        C && C.preventDefault(), this.props.clickHandler(P, C);
      }
    }, {
      key: "render",
      value: function() {
        var P = {
          "slick-arrow": !0,
          "slick-next": !0
        }, C = this.clickHandler.bind(this, {
          message: "next"
        });
        (0, i.canGoNext)(this.props) || (P["slick-disabled"] = !0, C = null);
        var D = {
          key: "1",
          "data-role": "none",
          className: (0, e.default)(P),
          style: {
            display: "block"
          },
          onClick: C
        }, N = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, I;
        return this.props.nextArrow ? I = /* @__PURE__ */ t.default.cloneElement(this.props.nextArrow, o(o({}, D), N)) : I = /* @__PURE__ */ t.default.createElement("button", r({
          key: "1",
          type: "button"
        }, D), " ", "Next"), I;
      }
    }]), A;
  })(t.default.PureComponent), $r;
}
var Vm = (function() {
  if (typeof Map < "u")
    return Map;
  function h(t, e) {
    var i = -1;
    return t.some(function(s, r) {
      return s[0] === e ? (i = r, !0) : !1;
    }), i;
  }
  return (
    /** @class */
    (function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(e) {
        var i = h(this.__entries__, e), s = this.__entries__[i];
        return s && s[1];
      }, t.prototype.set = function(e, i) {
        var s = h(this.__entries__, e);
        ~s ? this.__entries__[s][1] = i : this.__entries__.push([e, i]);
      }, t.prototype.delete = function(e) {
        var i = this.__entries__, s = h(i, e);
        ~s && i.splice(s, 1);
      }, t.prototype.has = function(e) {
        return !!~h(this.__entries__, e);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(e, i) {
        i === void 0 && (i = null);
        for (var s = 0, r = this.__entries__; s < r.length; s++) {
          var a = r[s];
          e.call(i, a[1], a[0]);
        }
      }, t;
    })()
  );
})(), $f = typeof window < "u" && typeof document < "u" && window.document === document, ku = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), jv = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(ku) : function(h) {
    return setTimeout(function() {
      return h(Date.now());
    }, 1e3 / 60);
  };
})(), zv = 2;
function $v(h, t) {
  var e = !1, i = !1, s = 0;
  function r() {
    e && (e = !1, h()), i && o();
  }
  function a() {
    jv(r);
  }
  function o() {
    var l = Date.now();
    if (e) {
      if (l - s < zv)
        return;
      i = !0;
    } else
      e = !0, i = !1, setTimeout(a, t);
    s = l;
  }
  return o;
}
var Uv = 20, Wv = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Gv = typeof MutationObserver < "u", Vv = (
  /** @class */
  (function() {
    function h() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = $v(this.refresh.bind(this), Uv);
    }
    return h.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, h.prototype.removeObserver = function(t) {
      var e = this.observers_, i = e.indexOf(t);
      ~i && e.splice(i, 1), !e.length && this.connected_ && this.disconnect_();
    }, h.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, h.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(e) {
        return e.gatherActive(), e.hasActive();
      });
      return t.forEach(function(e) {
        return e.broadcastActive();
      }), t.length > 0;
    }, h.prototype.connect_ = function() {
      !$f || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Gv ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, h.prototype.disconnect_ = function() {
      !$f || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, h.prototype.onTransitionEnd_ = function(t) {
      var e = t.propertyName, i = e === void 0 ? "" : e, s = Wv.some(function(r) {
        return !!~i.indexOf(r);
      });
      s && this.refresh();
    }, h.getInstance = function() {
      return this.instance_ || (this.instance_ = new h()), this.instance_;
    }, h.instance_ = null, h;
  })()
), qm = (function(h, t) {
  for (var e = 0, i = Object.keys(t); e < i.length; e++) {
    var s = i[e];
    Object.defineProperty(h, s, {
      value: t[s],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return h;
}), nh = (function(h) {
  var t = h && h.ownerDocument && h.ownerDocument.defaultView;
  return t || ku;
}), Xm = cf(0, 0, 0, 0);
function Ru(h) {
  return parseFloat(h) || 0;
}
function Yg(h) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return t.reduce(function(i, s) {
    var r = h["border-" + s + "-width"];
    return i + Ru(r);
  }, 0);
}
function qv(h) {
  for (var t = ["top", "right", "bottom", "left"], e = {}, i = 0, s = t; i < s.length; i++) {
    var r = s[i], a = h["padding-" + r];
    e[r] = Ru(a);
  }
  return e;
}
function Xv(h) {
  var t = h.getBBox();
  return cf(0, 0, t.width, t.height);
}
function Yv(h) {
  var t = h.clientWidth, e = h.clientHeight;
  if (!t && !e)
    return Xm;
  var i = nh(h).getComputedStyle(h), s = qv(i), r = s.left + s.right, a = s.top + s.bottom, o = Ru(i.width), l = Ru(i.height);
  if (i.boxSizing === "border-box" && (Math.round(o + r) !== t && (o -= Yg(i, "left", "right") + r), Math.round(l + a) !== e && (l -= Yg(i, "top", "bottom") + a)), !Jv(h)) {
    var c = Math.round(o + r) - t, d = Math.round(l + a) - e;
    Math.abs(c) !== 1 && (o -= c), Math.abs(d) !== 1 && (l -= d);
  }
  return cf(s.left, s.top, o, l);
}
var Kv = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(h) {
    return h instanceof nh(h).SVGGraphicsElement;
  } : function(h) {
    return h instanceof nh(h).SVGElement && typeof h.getBBox == "function";
  };
})();
function Jv(h) {
  return h === nh(h).document.documentElement;
}
function Qv(h) {
  return $f ? Kv(h) ? Xv(h) : Yv(h) : Xm;
}
function Zv(h) {
  var t = h.x, e = h.y, i = h.width, s = h.height, r = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(r.prototype);
  return qm(a, {
    x: t,
    y: e,
    width: i,
    height: s,
    top: e,
    right: t + i,
    bottom: s + e,
    left: t
  }), a;
}
function cf(h, t, e, i) {
  return { x: h, y: t, width: e, height: i };
}
var tw = (
  /** @class */
  (function() {
    function h(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = cf(0, 0, 0, 0), this.target = t;
    }
    return h.prototype.isActive = function() {
      var t = Qv(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, h.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, h;
  })()
), ew = (
  /** @class */
  /* @__PURE__ */ (function() {
    function h(t, e) {
      var i = Zv(e);
      qm(this, { target: t, contentRect: i });
    }
    return h;
  })()
), iw = (
  /** @class */
  (function() {
    function h(t, e, i) {
      if (this.activeObservations_ = [], this.observations_ = new Vm(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = e, this.callbackCtx_ = i;
    }
    return h.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof nh(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var e = this.observations_;
        e.has(t) || (e.set(t, new tw(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, h.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof nh(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var e = this.observations_;
        e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this));
      }
    }, h.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, h.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(e) {
        e.isActive() && t.activeObservations_.push(e);
      });
    }, h.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, e = this.activeObservations_.map(function(i) {
          return new ew(i.target, i.broadcastRect());
        });
        this.callback_.call(t, e, t), this.clearActive();
      }
    }, h.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, h.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, h;
  })()
), Ym = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Vm(), Km = (
  /** @class */
  /* @__PURE__ */ (function() {
    function h(t) {
      if (!(this instanceof h))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var e = Vv.getInstance(), i = new iw(t, e, this);
      Ym.set(this, i);
    }
    return h;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(h) {
  Km.prototype[h] = function() {
    var t;
    return (t = Ym.get(this))[h].apply(t, arguments);
  };
});
var sw = (function() {
  return typeof ku.ResizeObserver < "u" ? ku.ResizeObserver : Km;
})();
const nw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sw
}, Symbol.toStringTag, { value: "Module" })), rw = /* @__PURE__ */ Ov(nw);
var Kg;
function aw() {
  if (Kg) return ch;
  Kg = 1, Object.defineProperty(ch, "__esModule", {
    value: !0
  }), ch.InnerSlider = void 0;
  var h = c(Gi), t = c(Iv()), e = c(Fv()), i = c(hf()), s = Pd(), r = Nv(), a = Bv(), o = Hv(), l = c(rw);
  function c(I) {
    return I && I.__esModule ? I : { default: I };
  }
  function d(I) {
    "@babel/helpers - typeof";
    return d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(B) {
      return typeof B;
    } : function(B) {
      return B && typeof Symbol == "function" && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B;
    }, d(I);
  }
  function u() {
    return u = Object.assign ? Object.assign.bind() : function(I) {
      for (var B = 1; B < arguments.length; B++) {
        var j = arguments[B];
        for (var z in j)
          ({}).hasOwnProperty.call(j, z) && (I[z] = j[z]);
      }
      return I;
    }, u.apply(null, arguments);
  }
  function g(I, B) {
    if (I == null) return {};
    var j, z, S = b(I, B);
    if (Object.getOwnPropertySymbols) {
      var K = Object.getOwnPropertySymbols(I);
      for (z = 0; z < K.length; z++)
        j = K[z], B.includes(j) || {}.propertyIsEnumerable.call(I, j) && (S[j] = I[j]);
    }
    return S;
  }
  function b(I, B) {
    if (I == null) return {};
    var j = {};
    for (var z in I)
      if ({}.hasOwnProperty.call(I, z)) {
        if (B.includes(z)) continue;
        j[z] = I[z];
      }
    return j;
  }
  function E(I, B) {
    var j = Object.keys(I);
    if (Object.getOwnPropertySymbols) {
      var z = Object.getOwnPropertySymbols(I);
      B && (z = z.filter(function(S) {
        return Object.getOwnPropertyDescriptor(I, S).enumerable;
      })), j.push.apply(j, z);
    }
    return j;
  }
  function w(I) {
    for (var B = 1; B < arguments.length; B++) {
      var j = arguments[B] != null ? arguments[B] : {};
      B % 2 ? E(Object(j), !0).forEach(function(z) {
        C(I, z, j[z]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(I, Object.getOwnPropertyDescriptors(j)) : E(Object(j)).forEach(function(z) {
        Object.defineProperty(I, z, Object.getOwnPropertyDescriptor(j, z));
      });
    }
    return I;
  }
  function M(I, B) {
    if (!(I instanceof B)) throw new TypeError("Cannot call a class as a function");
  }
  function k(I, B) {
    for (var j = 0; j < B.length; j++) {
      var z = B[j];
      z.enumerable = z.enumerable || !1, z.configurable = !0, "value" in z && (z.writable = !0), Object.defineProperty(I, D(z.key), z);
    }
  }
  function L(I, B, j) {
    return B && k(I.prototype, B), Object.defineProperty(I, "prototype", { writable: !1 }), I;
  }
  function R(I, B) {
    if (typeof B != "function" && B !== null) throw new TypeError("Super expression must either be null or a function");
    I.prototype = Object.create(B && B.prototype, { constructor: { value: I, writable: !0, configurable: !0 } }), Object.defineProperty(I, "prototype", { writable: !1 }), B && p(I, B);
  }
  function p(I, B) {
    return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(j, z) {
      return j.__proto__ = z, j;
    }, p(I, B);
  }
  function f(I) {
    var B = T();
    return function() {
      var j, z = P(I);
      if (B) {
        var S = P(this).constructor;
        j = Reflect.construct(z, arguments, S);
      } else j = z.apply(this, arguments);
      return y(this, j);
    };
  }
  function y(I, B) {
    if (B && (d(B) == "object" || typeof B == "function")) return B;
    if (B !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return A(I);
  }
  function A(I) {
    if (I === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return I;
  }
  function T() {
    try {
      var I = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (T = function() {
      return !!I;
    })();
  }
  function P(I) {
    return P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(B) {
      return B.__proto__ || Object.getPrototypeOf(B);
    }, P(I);
  }
  function C(I, B, j) {
    return (B = D(B)) in I ? Object.defineProperty(I, B, { value: j, enumerable: !0, configurable: !0, writable: !0 }) : I[B] = j, I;
  }
  function D(I) {
    var B = N(I, "string");
    return d(B) == "symbol" ? B : B + "";
  }
  function N(I, B) {
    if (d(I) != "object" || !I) return I;
    var j = I[Symbol.toPrimitive];
    if (j !== void 0) {
      var z = j.call(I, B);
      if (d(z) != "object") return z;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (B === "string" ? String : Number)(I);
  }
  return ch.InnerSlider = /* @__PURE__ */ (function(I) {
    R(j, I);
    var B = f(j);
    function j(z) {
      var S;
      M(this, j), S = B.call(this, z), C(A(S), "listRefHandler", function(F) {
        return S.list = F;
      }), C(A(S), "trackRefHandler", function(F) {
        return S.track = F;
      }), C(A(S), "adaptHeight", function() {
        if (S.props.adaptiveHeight && S.list) {
          var F = S.list.querySelector('[data-index="'.concat(S.state.currentSlide, '"]'));
          S.list.style.height = (0, s.getHeight)(F) + "px";
        }
      }), C(A(S), "componentDidMount", function() {
        if (S.props.onInit && S.props.onInit(), S.props.lazyLoad) {
          var F = (0, s.getOnDemandLazySlides)(w(w({}, S.props), S.state));
          F.length > 0 && (S.setState(function(O) {
            return {
              lazyLoadedList: O.lazyLoadedList.concat(F)
            };
          }), S.props.onLazyLoad && S.props.onLazyLoad(F));
        }
        var _ = w({
          listRef: S.list,
          trackRef: S.track
        }, S.props);
        S.updateState(_, !0, function() {
          S.adaptHeight(), S.props.autoplay && S.autoPlay("update");
        }), S.props.lazyLoad === "progressive" && (S.lazyLoadTimer = setInterval(S.progressiveLazyLoad, 1e3)), S.ro = new l.default(function() {
          S.state.animating ? (S.onWindowResized(!1), S.callbackTimers.push(setTimeout(function() {
            return S.onWindowResized();
          }, S.props.speed))) : S.onWindowResized();
        }), S.ro.observe(S.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(O) {
          O.onfocus = S.props.pauseOnFocus ? S.onSlideFocus : null, O.onblur = S.props.pauseOnFocus ? S.onSlideBlur : null;
        }), window.addEventListener ? window.addEventListener("resize", S.onWindowResized) : window.attachEvent("onresize", S.onWindowResized);
      }), C(A(S), "componentWillUnmount", function() {
        S.animationEndCallback && clearTimeout(S.animationEndCallback), S.lazyLoadTimer && clearInterval(S.lazyLoadTimer), S.callbackTimers.length && (S.callbackTimers.forEach(function(F) {
          return clearTimeout(F);
        }), S.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", S.onWindowResized) : window.detachEvent("onresize", S.onWindowResized), S.autoplayTimer && clearInterval(S.autoplayTimer), S.ro.disconnect();
      }), C(A(S), "componentDidUpdate", function(F) {
        if (S.checkImagesLoad(), S.props.onReInit && S.props.onReInit(), S.props.lazyLoad) {
          var _ = (0, s.getOnDemandLazySlides)(w(w({}, S.props), S.state));
          _.length > 0 && (S.setState(function(U) {
            return {
              lazyLoadedList: U.lazyLoadedList.concat(_)
            };
          }), S.props.onLazyLoad && S.props.onLazyLoad(_));
        }
        S.adaptHeight();
        var O = w(w({
          listRef: S.list,
          trackRef: S.track
        }, S.props), S.state), H = S.didPropsChange(F);
        H && S.updateState(O, H, function() {
          S.state.currentSlide >= h.default.Children.count(S.props.children) && S.changeSlide({
            message: "index",
            index: h.default.Children.count(S.props.children) - S.props.slidesToShow,
            currentSlide: S.state.currentSlide
          }), S.props.autoplay ? S.autoPlay("update") : S.pause("paused");
        });
      }), C(A(S), "onWindowResized", function(F) {
        S.debouncedResize && S.debouncedResize.cancel(), S.debouncedResize = (0, e.default)(function() {
          return S.resizeWindow(F);
        }, 50), S.debouncedResize();
      }), C(A(S), "resizeWindow", function() {
        var F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, _ = !!(S.track && S.track.node);
        if (_) {
          var O = w(w({
            listRef: S.list,
            trackRef: S.track
          }, S.props), S.state);
          S.updateState(O, F, function() {
            S.props.autoplay ? S.autoPlay("update") : S.pause("paused");
          }), S.setState({
            animating: !1
          }), clearTimeout(S.animationEndCallback), delete S.animationEndCallback;
        }
      }), C(A(S), "updateState", function(F, _, O) {
        var H = (0, s.initializedState)(F);
        F = w(w(w({}, F), H), {}, {
          slideIndex: H.currentSlide
        });
        var U = (0, s.getTrackLeft)(F);
        F = w(w({}, F), {}, {
          left: U
        });
        var $ = (0, s.getTrackCSS)(F);
        (_ || h.default.Children.count(S.props.children) !== h.default.Children.count(F.children)) && (H.trackStyle = $), S.setState(H, O);
      }), C(A(S), "ssrInit", function() {
        if (S.props.variableWidth) {
          var F = 0, _ = 0, O = [], H = (0, s.getPreClones)(w(w(w({}, S.props), S.state), {}, {
            slideCount: S.props.children.length
          })), U = (0, s.getPostClones)(w(w(w({}, S.props), S.state), {}, {
            slideCount: S.props.children.length
          }));
          S.props.children.forEach(function(St) {
            O.push(St.props.style.width), F += St.props.style.width;
          });
          for (var $ = 0; $ < H; $++)
            _ += O[O.length - 1 - $], F += O[O.length - 1 - $];
          for (var X = 0; X < U; X++)
            F += O[X];
          for (var G = 0; G < S.state.currentSlide; G++)
            _ += O[G];
          var W = {
            width: F + "px",
            left: -_ + "px"
          };
          if (S.props.centerMode) {
            var ht = "".concat(O[S.state.currentSlide], "px");
            W.left = "calc(".concat(W.left, " + (100% - ").concat(ht, ") / 2 ) ");
          }
          return {
            trackStyle: W
          };
        }
        var ct = h.default.Children.count(S.props.children), dt = w(w(w({}, S.props), S.state), {}, {
          slideCount: ct
        }), ut = (0, s.getPreClones)(dt) + (0, s.getPostClones)(dt) + ct, rt = 100 / S.props.slidesToShow * ut, st = 100 / ut, nt = -st * ((0, s.getPreClones)(dt) + S.state.currentSlide) * rt / 100;
        S.props.centerMode && (nt += (100 - st * rt / 100) / 2);
        var at = {
          width: rt + "%",
          left: nt + "%"
        };
        return {
          slideWidth: st + "%",
          trackStyle: at
        };
      }), C(A(S), "checkImagesLoad", function() {
        var F = S.list && S.list.querySelectorAll && S.list.querySelectorAll(".slick-slide img") || [], _ = F.length, O = 0;
        Array.prototype.forEach.call(F, function(H) {
          var U = function() {
            return ++O && O >= _ && S.onWindowResized();
          };
          if (!H.onclick)
            H.onclick = function() {
              return H.parentNode.focus();
            };
          else {
            var $ = H.onclick;
            H.onclick = function(X) {
              $(X), H.parentNode.focus();
            };
          }
          H.onload || (S.props.lazyLoad ? H.onload = function() {
            S.adaptHeight(), S.callbackTimers.push(setTimeout(S.onWindowResized, S.props.speed));
          } : (H.onload = U, H.onerror = function() {
            U(), S.props.onLazyLoadError && S.props.onLazyLoadError();
          }));
        });
      }), C(A(S), "progressiveLazyLoad", function() {
        for (var F = [], _ = w(w({}, S.props), S.state), O = S.state.currentSlide; O < S.state.slideCount + (0, s.getPostClones)(_); O++)
          if (S.state.lazyLoadedList.indexOf(O) < 0) {
            F.push(O);
            break;
          }
        for (var H = S.state.currentSlide - 1; H >= -(0, s.getPreClones)(_); H--)
          if (S.state.lazyLoadedList.indexOf(H) < 0) {
            F.push(H);
            break;
          }
        F.length > 0 ? (S.setState(function(U) {
          return {
            lazyLoadedList: U.lazyLoadedList.concat(F)
          };
        }), S.props.onLazyLoad && S.props.onLazyLoad(F)) : S.lazyLoadTimer && (clearInterval(S.lazyLoadTimer), delete S.lazyLoadTimer);
      }), C(A(S), "slideHandler", function(F) {
        var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, O = S.props, H = O.asNavFor, U = O.beforeChange, $ = O.onLazyLoad, X = O.speed, G = O.afterChange, W = S.state.currentSlide, ht = (0, s.slideHandler)(w(w(w({
          index: F
        }, S.props), S.state), {}, {
          trackRef: S.track,
          useCSS: S.props.useCSS && !_
        })), ct = ht.state, dt = ht.nextState;
        if (ct) {
          U && U(W, ct.currentSlide);
          var ut = ct.lazyLoadedList.filter(function(rt) {
            return S.state.lazyLoadedList.indexOf(rt) < 0;
          });
          $ && ut.length > 0 && $(ut), !S.props.waitForAnimate && S.animationEndCallback && (clearTimeout(S.animationEndCallback), G && G(W), delete S.animationEndCallback), S.setState(ct, function() {
            H && S.asNavForIndex !== F && (S.asNavForIndex = F, H.innerSlider.slideHandler(F)), dt && (S.animationEndCallback = setTimeout(function() {
              var rt = dt.animating, st = g(dt, ["animating"]);
              S.setState(st, function() {
                S.callbackTimers.push(setTimeout(function() {
                  return S.setState({
                    animating: rt
                  });
                }, 10)), G && G(ct.currentSlide), delete S.animationEndCallback;
              });
            }, X));
          });
        }
      }), C(A(S), "changeSlide", function(F) {
        var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, O = w(w({}, S.props), S.state), H = (0, s.changeSlide)(O, F);
        if (!(H !== 0 && !H) && (_ === !0 ? S.slideHandler(H, _) : S.slideHandler(H), S.props.autoplay && S.autoPlay("update"), S.props.focusOnSelect)) {
          var U = S.list.querySelectorAll(".slick-current");
          U[0] && U[0].focus();
        }
      }), C(A(S), "clickHandler", function(F) {
        S.clickable === !1 && (F.stopPropagation(), F.preventDefault()), S.clickable = !0;
      }), C(A(S), "keyHandler", function(F) {
        var _ = (0, s.keyHandler)(F, S.props.accessibility, S.props.rtl);
        _ !== "" && S.changeSlide({
          message: _
        });
      }), C(A(S), "selectHandler", function(F) {
        S.changeSlide(F);
      }), C(A(S), "disableBodyScroll", function() {
        var F = function(O) {
          O = O || window.event, O.preventDefault && O.preventDefault(), O.returnValue = !1;
        };
        window.ontouchmove = F;
      }), C(A(S), "enableBodyScroll", function() {
        window.ontouchmove = null;
      }), C(A(S), "swipeStart", function(F) {
        S.props.verticalSwiping && S.disableBodyScroll();
        var _ = (0, s.swipeStart)(F, S.props.swipe, S.props.draggable);
        _ !== "" && S.setState(_);
      }), C(A(S), "swipeMove", function(F) {
        var _ = (0, s.swipeMove)(F, w(w(w({}, S.props), S.state), {}, {
          trackRef: S.track,
          listRef: S.list,
          slideIndex: S.state.currentSlide
        }));
        _ && (_.swiping && (S.clickable = !1), S.setState(_));
      }), C(A(S), "swipeEnd", function(F) {
        var _ = (0, s.swipeEnd)(F, w(w(w({}, S.props), S.state), {}, {
          trackRef: S.track,
          listRef: S.list,
          slideIndex: S.state.currentSlide
        }));
        if (_) {
          var O = _.triggerSlideHandler;
          delete _.triggerSlideHandler, S.setState(_), O !== void 0 && (S.slideHandler(O), S.props.verticalSwiping && S.enableBodyScroll());
        }
      }), C(A(S), "touchEnd", function(F) {
        S.swipeEnd(F), S.clickable = !0;
      }), C(A(S), "slickPrev", function() {
        S.callbackTimers.push(setTimeout(function() {
          return S.changeSlide({
            message: "previous"
          });
        }, 0));
      }), C(A(S), "slickNext", function() {
        S.callbackTimers.push(setTimeout(function() {
          return S.changeSlide({
            message: "next"
          });
        }, 0));
      }), C(A(S), "slickGoTo", function(F) {
        var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (F = Number(F), isNaN(F)) return "";
        S.callbackTimers.push(setTimeout(function() {
          return S.changeSlide({
            message: "index",
            index: F,
            currentSlide: S.state.currentSlide
          }, _);
        }, 0));
      }), C(A(S), "play", function() {
        var F;
        if (S.props.rtl)
          F = S.state.currentSlide - S.props.slidesToScroll;
        else if ((0, s.canGoNext)(w(w({}, S.props), S.state)))
          F = S.state.currentSlide + S.props.slidesToScroll;
        else
          return !1;
        S.slideHandler(F);
      }), C(A(S), "autoPlay", function(F) {
        S.autoplayTimer && clearInterval(S.autoplayTimer);
        var _ = S.state.autoplaying;
        if (F === "update") {
          if (_ === "hovered" || _ === "focused" || _ === "paused")
            return;
        } else if (F === "leave") {
          if (_ === "paused" || _ === "focused")
            return;
        } else if (F === "blur" && (_ === "paused" || _ === "hovered"))
          return;
        S.autoplayTimer = setInterval(S.play, S.props.autoplaySpeed + 50), S.setState({
          autoplaying: "playing"
        });
      }), C(A(S), "pause", function(F) {
        S.autoplayTimer && (clearInterval(S.autoplayTimer), S.autoplayTimer = null);
        var _ = S.state.autoplaying;
        F === "paused" ? S.setState({
          autoplaying: "paused"
        }) : F === "focused" ? (_ === "hovered" || _ === "playing") && S.setState({
          autoplaying: "focused"
        }) : _ === "playing" && S.setState({
          autoplaying: "hovered"
        });
      }), C(A(S), "onDotsOver", function() {
        return S.props.autoplay && S.pause("hovered");
      }), C(A(S), "onDotsLeave", function() {
        return S.props.autoplay && S.state.autoplaying === "hovered" && S.autoPlay("leave");
      }), C(A(S), "onTrackOver", function() {
        return S.props.autoplay && S.pause("hovered");
      }), C(A(S), "onTrackLeave", function() {
        return S.props.autoplay && S.state.autoplaying === "hovered" && S.autoPlay("leave");
      }), C(A(S), "onSlideFocus", function() {
        return S.props.autoplay && S.pause("focused");
      }), C(A(S), "onSlideBlur", function() {
        return S.props.autoplay && S.state.autoplaying === "focused" && S.autoPlay("blur");
      }), C(A(S), "render", function() {
        var F = (0, i.default)("slick-slider", S.props.className, {
          "slick-vertical": S.props.vertical,
          "slick-initialized": !0
        }), _ = w(w({}, S.props), S.state), O = (0, s.extractObject)(_, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), H = S.props.pauseOnHover;
        O = w(w({}, O), {}, {
          onMouseEnter: H ? S.onTrackOver : null,
          onMouseLeave: H ? S.onTrackLeave : null,
          onMouseOver: H ? S.onTrackOver : null,
          focusOnSelect: S.props.focusOnSelect && S.clickable ? S.selectHandler : null
        });
        var U;
        if (S.props.dots === !0 && S.state.slideCount >= S.props.slidesToShow) {
          var $ = (0, s.extractObject)(_, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), X = S.props.pauseOnDotsHover;
          $ = w(w({}, $), {}, {
            clickHandler: S.changeSlide,
            onMouseEnter: X ? S.onDotsLeave : null,
            onMouseOver: X ? S.onDotsOver : null,
            onMouseLeave: X ? S.onDotsLeave : null
          }), U = /* @__PURE__ */ h.default.createElement(a.Dots, $);
        }
        var G, W, ht = (0, s.extractObject)(_, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        ht.clickHandler = S.changeSlide, S.props.arrows && (G = /* @__PURE__ */ h.default.createElement(o.PrevArrow, ht), W = /* @__PURE__ */ h.default.createElement(o.NextArrow, ht));
        var ct = null;
        S.props.vertical && (ct = {
          height: S.state.listHeight
        });
        var dt = null;
        S.props.vertical === !1 ? S.props.centerMode === !0 && (dt = {
          padding: "0px " + S.props.centerPadding
        }) : S.props.centerMode === !0 && (dt = {
          padding: S.props.centerPadding + " 0px"
        });
        var ut = w(w({}, ct), dt), rt = S.props.touchMove, st = {
          className: "slick-list",
          style: ut,
          onClick: S.clickHandler,
          onMouseDown: rt ? S.swipeStart : null,
          onMouseMove: S.state.dragging && rt ? S.swipeMove : null,
          onMouseUp: rt ? S.swipeEnd : null,
          onMouseLeave: S.state.dragging && rt ? S.swipeEnd : null,
          onTouchStart: rt ? S.swipeStart : null,
          onTouchMove: S.state.dragging && rt ? S.swipeMove : null,
          onTouchEnd: rt ? S.touchEnd : null,
          onTouchCancel: S.state.dragging && rt ? S.swipeEnd : null,
          onKeyDown: S.props.accessibility ? S.keyHandler : null
        }, nt = {
          className: F,
          dir: "ltr",
          style: S.props.style
        };
        return S.props.unslick && (st = {
          className: "slick-list"
        }, nt = {
          className: F,
          style: S.props.style
        }), /* @__PURE__ */ h.default.createElement("div", nt, S.props.unslick ? "" : G, /* @__PURE__ */ h.default.createElement("div", u({
          ref: S.listRefHandler
        }, st), /* @__PURE__ */ h.default.createElement(r.Track, u({
          ref: S.trackRefHandler
        }, O), S.props.children)), S.props.unslick ? "" : W, S.props.unslick ? "" : U);
      }), S.list = null, S.track = null, S.state = w(w({}, t.default), {}, {
        currentSlide: S.props.initialSlide,
        targetSlide: S.props.initialSlide ? S.props.initialSlide : 0,
        slideCount: h.default.Children.count(S.props.children)
      }), S.callbackTimers = [], S.clickable = !0, S.debouncedResize = null;
      var K = S.ssrInit();
      return S.state = w(w({}, S.state), K), S;
    }
    return L(j, [{
      key: "didPropsChange",
      value: function(S) {
        for (var K = !1, F = 0, _ = Object.keys(this.props); F < _.length; F++) {
          var O = _[F];
          if (!S.hasOwnProperty(O)) {
            K = !0;
            break;
          }
          if (!(d(S[O]) === "object" || typeof S[O] == "function" || isNaN(S[O])) && S[O] !== this.props[O]) {
            K = !0;
            break;
          }
        }
        return K || h.default.Children.count(this.props.children) !== h.default.Children.count(S.children);
      }
    }]), j;
  })(h.default.Component), ch;
}
var kf, Jg;
function ow() {
  if (Jg) return kf;
  Jg = 1;
  var h = function(t) {
    return t.replace(/[A-Z]/g, function(e) {
      return "-" + e.toLowerCase();
    }).toLowerCase();
  };
  return kf = h, kf;
}
var Rf, Qg;
function lw() {
  if (Qg) return Rf;
  Qg = 1;
  var h = ow(), t = function(s) {
    var r = /[height|width]$/;
    return r.test(s);
  }, e = function(s) {
    var r = "", a = Object.keys(s);
    return a.forEach(function(o, l) {
      var c = s[o];
      o = h(o), t(o) && typeof c == "number" && (c = c + "px"), c === !0 ? r += o : c === !1 ? r += "not " + o : r += "(" + o + ": " + c + ")", l < a.length - 1 && (r += " and ");
    }), r;
  }, i = function(s) {
    var r = "";
    return typeof s == "string" ? s : s instanceof Array ? (s.forEach(function(a, o) {
      r += e(a), o < s.length - 1 && (r += ", ");
    }), r) : e(s);
  };
  return Rf = i, Rf;
}
var Zg;
function hw() {
  return Zg || (Zg = 1, (function(h) {
    Object.defineProperty(h, "__esModule", {
      value: !0
    }), h.default = void 0;
    var t = a(Gi), e = aw(), i = a(lw()), s = a(Gm()), r = Pd();
    function a(T) {
      return T && T.__esModule ? T : { default: T };
    }
    function o(T) {
      "@babel/helpers - typeof";
      return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(P) {
        return typeof P;
      } : function(P) {
        return P && typeof Symbol == "function" && P.constructor === Symbol && P !== Symbol.prototype ? "symbol" : typeof P;
      }, o(T);
    }
    function l() {
      return l = Object.assign ? Object.assign.bind() : function(T) {
        for (var P = 1; P < arguments.length; P++) {
          var C = arguments[P];
          for (var D in C)
            ({}).hasOwnProperty.call(C, D) && (T[D] = C[D]);
        }
        return T;
      }, l.apply(null, arguments);
    }
    function c(T, P) {
      var C = Object.keys(T);
      if (Object.getOwnPropertySymbols) {
        var D = Object.getOwnPropertySymbols(T);
        P && (D = D.filter(function(N) {
          return Object.getOwnPropertyDescriptor(T, N).enumerable;
        })), C.push.apply(C, D);
      }
      return C;
    }
    function d(T) {
      for (var P = 1; P < arguments.length; P++) {
        var C = arguments[P] != null ? arguments[P] : {};
        P % 2 ? c(Object(C), !0).forEach(function(D) {
          f(T, D, C[D]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(C)) : c(Object(C)).forEach(function(D) {
          Object.defineProperty(T, D, Object.getOwnPropertyDescriptor(C, D));
        });
      }
      return T;
    }
    function u(T, P) {
      if (!(T instanceof P)) throw new TypeError("Cannot call a class as a function");
    }
    function g(T, P) {
      for (var C = 0; C < P.length; C++) {
        var D = P[C];
        D.enumerable = D.enumerable || !1, D.configurable = !0, "value" in D && (D.writable = !0), Object.defineProperty(T, y(D.key), D);
      }
    }
    function b(T, P, C) {
      return P && g(T.prototype, P), Object.defineProperty(T, "prototype", { writable: !1 }), T;
    }
    function E(T, P) {
      if (typeof P != "function" && P !== null) throw new TypeError("Super expression must either be null or a function");
      T.prototype = Object.create(P && P.prototype, { constructor: { value: T, writable: !0, configurable: !0 } }), Object.defineProperty(T, "prototype", { writable: !1 }), P && w(T, P);
    }
    function w(T, P) {
      return w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(C, D) {
        return C.__proto__ = D, C;
      }, w(T, P);
    }
    function M(T) {
      var P = R();
      return function() {
        var C, D = p(T);
        if (P) {
          var N = p(this).constructor;
          C = Reflect.construct(D, arguments, N);
        } else C = D.apply(this, arguments);
        return k(this, C);
      };
    }
    function k(T, P) {
      if (P && (o(P) == "object" || typeof P == "function")) return P;
      if (P !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return L(T);
    }
    function L(T) {
      if (T === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return T;
    }
    function R() {
      try {
        var T = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch {
      }
      return (R = function() {
        return !!T;
      })();
    }
    function p(T) {
      return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(P) {
        return P.__proto__ || Object.getPrototypeOf(P);
      }, p(T);
    }
    function f(T, P, C) {
      return (P = y(P)) in T ? Object.defineProperty(T, P, { value: C, enumerable: !0, configurable: !0, writable: !0 }) : T[P] = C, T;
    }
    function y(T) {
      var P = A(T, "string");
      return o(P) == "symbol" ? P : P + "";
    }
    function A(T, P) {
      if (o(T) != "object" || !T) return T;
      var C = T[Symbol.toPrimitive];
      if (C !== void 0) {
        var D = C.call(T, P);
        if (o(D) != "object") return D;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (P === "string" ? String : Number)(T);
    }
    h.default = /* @__PURE__ */ (function(T) {
      E(C, T);
      var P = M(C);
      function C(D) {
        var N;
        return u(this, C), N = P.call(this, D), f(L(N), "innerSliderRefHandler", function(I) {
          return N.innerSlider = I;
        }), f(L(N), "slickPrev", function() {
          return N.innerSlider.slickPrev();
        }), f(L(N), "slickNext", function() {
          return N.innerSlider.slickNext();
        }), f(L(N), "slickGoTo", function(I) {
          var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return N.innerSlider.slickGoTo(I, B);
        }), f(L(N), "slickPause", function() {
          return N.innerSlider.pause("paused");
        }), f(L(N), "slickPlay", function() {
          return N.innerSlider.autoPlay("play");
        }), N.state = {
          breakpoint: null
        }, N._responsiveMediaHandlers = [], N;
      }
      return b(C, [{
        key: "media",
        value: function(N, I) {
          var B = window.matchMedia(N), j = function(S) {
            var K = S.matches;
            K && I();
          };
          B.addListener(j), this._responsiveMediaHandlers.push({
            mql: B,
            query: N,
            listener: j
          });
        }
        // handles responsive breakpoints
      }, {
        key: "componentDidMount",
        value: function() {
          var N = this;
          if (this.props.responsive) {
            var I = this.props.responsive.map(function(j) {
              return j.breakpoint;
            });
            I.sort(function(j, z) {
              return j - z;
            }), I.forEach(function(j, z) {
              var S;
              z === 0 ? S = (0, i.default)({
                minWidth: 0,
                maxWidth: j
              }) : S = (0, i.default)({
                minWidth: I[z - 1] + 1,
                maxWidth: j
              }), (0, r.canUseDOM)() && N.media(S, function() {
                N.setState({
                  breakpoint: j
                });
              });
            });
            var B = (0, i.default)({
              minWidth: I.slice(-1)[0]
            });
            (0, r.canUseDOM)() && this.media(B, function() {
              N.setState({
                breakpoint: null
              });
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this._responsiveMediaHandlers.forEach(function(N) {
            N.mql.removeListener(N.listener);
          });
        }
      }, {
        key: "render",
        value: function() {
          var N = this, I, B;
          this.state.breakpoint ? (B = this.props.responsive.filter(function($) {
            return $.breakpoint === N.state.breakpoint;
          }), I = B[0].settings === "unslick" ? "unslick" : d(d(d({}, s.default), this.props), B[0].settings)) : I = d(d({}, s.default), this.props), I.centerMode && (I.slidesToScroll > 1 && process.env.NODE_ENV !== "production" && console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(I.slidesToScroll)), I.slidesToScroll = 1), I.fade && (I.slidesToShow > 1 && process.env.NODE_ENV !== "production" && console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(I.slidesToShow)), I.slidesToScroll > 1 && process.env.NODE_ENV !== "production" && console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(I.slidesToScroll)), I.slidesToShow = 1, I.slidesToScroll = 1);
          var j = t.default.Children.toArray(this.props.children);
          j = j.filter(function($) {
            return typeof $ == "string" ? !!$.trim() : !!$;
          }), I.variableWidth && (I.rows > 1 || I.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), I.variableWidth = !1);
          for (var z = [], S = null, K = 0; K < j.length; K += I.rows * I.slidesPerRow) {
            for (var F = [], _ = K; _ < K + I.rows * I.slidesPerRow; _ += I.slidesPerRow) {
              for (var O = [], H = _; H < _ + I.slidesPerRow && (I.variableWidth && j[H].props.style && (S = j[H].props.style.width), !(H >= j.length)); H += 1)
                O.push(/* @__PURE__ */ t.default.cloneElement(j[H], {
                  key: 100 * K + 10 * _ + H,
                  tabIndex: -1,
                  style: {
                    width: "".concat(100 / I.slidesPerRow, "%"),
                    display: "inline-block"
                  }
                }));
              F.push(/* @__PURE__ */ t.default.createElement("div", {
                key: 10 * K + _
              }, O));
            }
            I.variableWidth ? z.push(/* @__PURE__ */ t.default.createElement("div", {
              key: K,
              style: {
                width: S
              }
            }, F)) : z.push(/* @__PURE__ */ t.default.createElement("div", {
              key: K
            }, F));
          }
          if (I === "unslick") {
            var U = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ t.default.createElement("div", {
              className: U
            }, j);
          } else z.length <= I.slidesToShow && (I.unslick = !0);
          return /* @__PURE__ */ t.default.createElement(e.InnerSlider, l({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, (0, r.filterSettings)(I)), z);
        }
      }]), C;
    })(t.default.Component);
  })(_f)), _f;
}
var tm;
function cw() {
  return tm || (tm = 1, (function(h) {
    Object.defineProperty(h, "__esModule", {
      value: !0
    }), h.default = void 0;
    var t = e(hw());
    function e(i) {
      return i && i.__esModule ? i : { default: i };
    }
    h.default = t.default;
  })(xf)), xf;
}
var dw = cw();
const em = /* @__PURE__ */ Wm(dw);
function uw({
  title: h,
  titleId: t,
  ...e
}, i) {
  return /* @__PURE__ */ Ir.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: i,
    "aria-labelledby": t
  }, e), h ? /* @__PURE__ */ Ir.createElement("title", {
    id: t
  }, h) : null, /* @__PURE__ */ Ir.createElement("path", {
    fillRule: "evenodd",
    d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",
    clipRule: "evenodd"
  }));
}
const fw = /* @__PURE__ */ Ir.forwardRef(uw);
function pw({
  title: h,
  titleId: t,
  ...e
}, i) {
  return /* @__PURE__ */ Ir.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: i,
    "aria-labelledby": t
  }, e), h ? /* @__PURE__ */ Ir.createElement("title", {
    id: t
  }, h) : null, /* @__PURE__ */ Ir.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
  }));
}
const gw = /* @__PURE__ */ Ir.forwardRef(pw);
function mw({ rating: h, textAlign: t = "left" }) {
  if (!h || h < 1 || h > 5) return null;
  const e = t === "center" ? "flex justify-center" : t === "right" ? "flex justify-end" : "flex justify-start", i = [];
  for (let s = 1; s <= 5; s++)
    s <= h ? i.push(
      /* @__PURE__ */ q(fw, { className: "w-24 h-24 text-grey-800", "aria-hidden": "true" }, s)
    ) : i.push(
      /* @__PURE__ */ q(gw, { className: "w-24 h-24 text-grey-800", "aria-hidden": "true" }, s)
    );
  return /* @__PURE__ */ q("div", { className: `${e} gap-4`, role: "img", "aria-label": `Rating: ${h} out of 5 stars`, children: i });
}
function Mf({
  testimonial: h,
  name: t,
  role: e,
  rating: i = null,
  // number | null (1-5)
  imageUrl: s,
  logoUrl: r,
  mediaPosition: a = "top",
  // 'top' | 'bottom' | 'with-name'
  align: o = "left",
  // 'left' | 'center'
  withPadding: l = !1,
  // boolean
  className: c = "",
  ...d
}) {
  const u = i !== null && i >= 1 && i <= 5 ? Math.floor(i) : null, g = o === "center", b = `w-full ${l ? "p-testimonial-padding" : ""} ${c}`.trim(), E = g ? "text-center items-center" : "text-left items-start", w = [
    r ? /* @__PURE__ */ q(
      "img",
      {
        src: r,
        alt: t || "Logo",
        className: "h-40 w-auto"
      },
      "logo"
    ) : null,
    s ? /* @__PURE__ */ q(
      "img",
      {
        src: s,
        alt: t || "Profile",
        className: "h-48 w-48 rounded-full object-cover"
      },
      "image"
    ) : null
  ].filter(Boolean), M = w.length > 0, k = M && a === "top", L = M && a === "bottom", R = M && a === "with-name";
  return /* @__PURE__ */ q("figure", { className: b, ...d, ...d.attributes || {}, children: /* @__PURE__ */ Mn("div", { className: `flex flex-col gap-testimonial-spacing-y ${E}`, children: [
    k && /* @__PURE__ */ q("div", { className: `flex items-center gap-10 ${g ? "justify-center" : "justify-start"}`, children: w }),
    u && /* @__PURE__ */ q(mw, { rating: u, textAlign: g ? "center" : "left" }),
    h && /* @__PURE__ */ q("blockquote", { className: "m-0", children: /* @__PURE__ */ q("p", { className: "text-body-default", children: h }) }),
    (t || e || R) && /* @__PURE__ */ Mn(
      "figcaption",
      {
        className: `flex flex-col gap-6 ${g ? "items-center" : "items-start"}`,
        children: [
          R && /* @__PURE__ */ Mn("div", { className: `flex items-center gap-10 ${g ? "justify-center" : "justify-start"}`, children: [
            w,
            /* @__PURE__ */ Mn("div", { className: `flex flex-col ${g ? "items-center" : "items-start"}`, children: [
              t && /* @__PURE__ */ q("cite", { className: "text-ui-label-small not-italic", children: t }),
              e && /* @__PURE__ */ q("p", { className: "text-ui-label-small", children: e })
            ] })
          ] }),
          !R && /* @__PURE__ */ Mn(Pv, { children: [
            t && /* @__PURE__ */ q("cite", { className: "text-ui-label-small not-italic", children: t }),
            e && /* @__PURE__ */ q("p", { className: "text-ui-label-small", children: e })
          ] })
        ]
      }
    ),
    L && /* @__PURE__ */ q("div", { className: `flex items-center gap-10 ${g ? "justify-center" : "justify-start"}`, children: w })
  ] }) });
}
const yw = kv(() => Promise.resolve().then(() => xw)), bw = ({
  media: h = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: t = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: e = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: i,
  videoUrl: s,
  lottieUrl: r,
  lottieData: a,
  iframeUrl: o,
  flipbookUrl: l,
  title: c,
  className: d = ""
}) => {
  var y;
  const u = typeof window < "u" && window.location.origin.indexOf("author") > -1, g = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, E = `relative w-full h-full ${t === "square" ? "aspect-square" : t === "rectangle" ? "aspect-[4/3]" : h === "video" ? "aspect-video" : ""}`.trim(), w = t === "default" ? `w-full h-full ${d}`.trim() : `absolute inset-0 w-full h-full ${d}`.trim(), M = "w-full h-full", k = t === "default" ? `${w}`.trim() : w, L = e === "contain" ? "object-contain" : "object-cover", R = e === "contain" ? "xMidYMid meet" : "xMidYMid slice", p = `relative w-full ${d}`.trim(), f = "w-full min-h-[280px]";
  switch (h) {
    case "image":
      if (i)
        return /* @__PURE__ */ q("div", { className: E, children: /* @__PURE__ */ q(
          "img",
          {
            src: i,
            alt: c || "Media image",
            className: `${L} ${w}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (s) {
        const A = s.includes("youtube.com/watch") || s.includes("youtu.be/");
        let T = s;
        A && (T = `https://www.youtube.com/embed/${s.includes("youtu.be/") ? s.split("youtu.be/")[1].split("?")[0] : (y = s.split("v=")[1]) == null ? void 0 : y.split("&")[0]}`);
        const P = (() => {
          if (!A) return T;
          try {
            const C = new URL(T);
            return C.searchParams.set("autoplay", "0"), C.searchParams.set("mute", "0"), C.searchParams.set("playsinline", "1"), C.searchParams.set("controls", "1"), C.searchParams.set("rel", "0"), C.toString();
          } catch {
            return T.includes("?") ? T.includes("autoplay=") ? T : `${T}&autoplay=0` : `${T}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ q("div", { className: E, children: A ? /* @__PURE__ */ q(
          "iframe",
          {
            src: P,
            title: c || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${w} ${L}`.trim()
          }
        ) : /* @__PURE__ */ q(
          "video",
          {
            className: `${w} ${L}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: c || "Video player",
            children: /* @__PURE__ */ q("source", { src: s })
          }
        ) });
      }
      break;
    case "lottie":
      if (a)
        return u ? /* @__PURE__ */ q("div", { className: E, role: "img", "aria-label": c || "Animation", children: /* @__PURE__ */ q(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${w}`.trim(),
            children: /* @__PURE__ */ q("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ q(
          "div",
          {
            className: E,
            role: "img",
            "aria-label": c || "Animation",
            children: /* @__PURE__ */ q("div", { className: `${w} overflow-hidden`.trim(), children: /* @__PURE__ */ q(
              Dv,
              {
                animationData: a,
                loop: !g,
                autoplay: !g,
                className: M,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: R }
              }
            ) })
          }
        );
      if (r)
        return /* @__PURE__ */ q("div", { className: E, children: /* @__PURE__ */ q("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (o)
        return /* @__PURE__ */ q("div", { className: E, children: /* @__PURE__ */ q(
          "iframe",
          {
            src: o,
            title: c || "Iframe content",
            frameBorder: "0",
            className: `${k} ${L}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (l)
        return u ? /* @__PURE__ */ q("div", { className: p, role: "img", "aria-label": c || "Flipbook", children: /* @__PURE__ */ q(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${f}`.trim(),
            children: /* @__PURE__ */ q("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ q("div", { className: p, children: /* @__PURE__ */ q("div", { className: f, children: /* @__PURE__ */ q(Rv, { fallback: /* @__PURE__ */ q("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ q(yw, { pdfUrl: l, title: c, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ q("div", { className: E, children: /* @__PURE__ */ q("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${t === "default" ? "" : "absolute inset-0"}`.trim(), children: h ? `${h.charAt(0).toUpperCase() + h.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function bA({
  /**
   * Variants: 'media' | 'columns' | 'stacked-media'
   * - 'media': 1 testimonial + 1 media per slide (carousel, 1 per page)
   * - 'columns': testimonial grid (1-3 columns). If columns > 3, use carousel with 3 per page
   * - 'stacked-media': 2-column layout with media + stacked testimonials (order can change)
   */
  variant: h,
  testimonials: t = [],
  media: e = null,
  // media object for stacked-media and trust
  order: i = "testimonial-first",
  // 'media-first' | 'testimonial-first'
  columns: s = 1,
  // 1 | 2 | 3
  carousel: r = !1,
  // enable carousel for columns
  align: a = "left",
  // 'left' | 'center'
  withPadding: o = !1,
  // boolean
  mediaPosition: l = "top",
  // 'top' | 'bottom' | 'with-name'
  id: c = "",
  className: d = "",
  infinite: u = !1
}) {
  const g = h || "columns", b = i === "media-first", E = [1, 2, 3].includes(s) ? s : 3, w = g === "columns" && r, M = (y) => ({
    testimonial: y.testimonial,
    name: y.name ?? y.author,
    role: y.role ?? y.authorTitle,
    imageUrl: y.imageUrl ?? y.authorImage,
    logoUrl: y.logoUrl,
    rating: y.rating,
    align: y.align ?? a,
    withPadding: y.withPadding ?? o,
    mediaPosition: y.mediaPosition ?? l,
    attributes: y.attributes || {}
  }), k = (y, A = "") => y ? /* @__PURE__ */ q("div", { className: "relative w-full h-full min-h-[220px] overflow-hidden", children: /* @__PURE__ */ q("div", { className: "absolute inset-0 w-full h-full", children: /* @__PURE__ */ q(
    bw,
    {
      media: y.type || "image",
      aspect: "default",
      imageUrl: y.imageUrl,
      videoUrl: y.videoUrl,
      lottieUrl: y.lottieUrl,
      lottieData: y.lottieData,
      iframeUrl: y.iframeUrl,
      title: y.title || A,
      className: "w-full h-full object-cover"
    }
  ) }) }) : null, L = (y, A) => {
    const T = y.media || e, P = !!T, C = P ? "xl:w-1/2" : "w-full";
    return /* @__PURE__ */ Mn("div", { className: "flex flex-col xl:flex-row items-stretch text-gray-950", children: [
      b && P && /* @__PURE__ */ q("div", { className: "w-full xl:w-1/2", children: k(T, y.testimonial || "") }),
      /* @__PURE__ */ q("div", { className: `flex items-center justify-center ${C}`, children: /* @__PURE__ */ q(Mf, { ...M(y) }) }),
      !b && P && /* @__PURE__ */ q("div", { className: "w-full xl:w-1/2", children: k(T, y.testimonial || "") })
    ] }, A);
  }, R = (y) => {
    const A = (() => {
      switch (E) {
        case 1:
          return "grid grid-cols-1 gap-section-spacing-x";
        case 2:
          return "grid grid-cols-1 xl:grid-cols-2 gap-section-spacing-x";
        case 3:
        default:
          return "grid grid-cols-1 xl:grid-cols-3 gap-section-spacing-x";
      }
    })();
    return /* @__PURE__ */ q("div", { className: A, children: y.map((T, P) => /* @__PURE__ */ q(Mf, { ...M(T) }, P)) });
  }, p = (y, A) => {
    const T = [];
    for (let P = 0; P < y.length; P += A)
      T.push(y.slice(P, P + A));
    return T;
  }, f = (y) => ({
    className: "w-full testimonial-slider",
    dots: !0,
    infinite: u,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !1,
    arrows: !1
  });
  if (g === "media") {
    if (!t || t.length === 0) return null;
    const y = f(t.length);
    return /* @__PURE__ */ q("div", { className: `container ${d}`, id: c, children: /* @__PURE__ */ q(em, { ...y, children: t.map((A, T) => /* @__PURE__ */ q("div", { children: L(A, T) }, T)) }) });
  }
  if (g === "stacked-media") {
    if (!t || t.length === 0) return null;
    const y = !!e;
    return /* @__PURE__ */ q("div", { className: `container ${d}`, id: c, children: /* @__PURE__ */ Mn("div", { className: "flex flex-col xl:flex-row items-stretch gap-24", children: [
      b && y && /* @__PURE__ */ q("div", { className: "w-full xl:w-1/2", children: k(e) }),
      /* @__PURE__ */ q("div", { className: `flex flex-col gap-24 ${y ? "w-full xl:w-1/2" : "w-full"}`, children: t.map((A, T) => /* @__PURE__ */ q(Mf, { ...M(A) }, T)) }),
      !b && y && /* @__PURE__ */ q("div", { className: "w-full xl:w-1/2", children: k(e) })
    ] }) });
  }
  if (g === "columns") {
    if (!t || t.length === 0) return null;
    if (!w)
      return /* @__PURE__ */ q("div", { className: `container ${d}`, id: c, children: R(t) });
    const y = p(t, E), A = f();
    return /* @__PURE__ */ q("div", { className: `container ${d}`, id: c, children: /* @__PURE__ */ q(em, { ...A, children: y.map((T, P) => /* @__PURE__ */ q("div", { children: R(T) }, P)) }) });
  }
  return null;
}
let Uf, Jm, Wf, jd;
const vw = async () => {
  if (!jd) {
    const h = await Promise.resolve().then(() => oA);
    jd = h.pdfjs, Jm = h.Document, Wf = h.Page, jd.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${jd.version}/build/pdf.worker.min.mjs`;
  }
}, ww = async () => {
  Uf || (Uf = (await Promise.resolve().then(() => fA)).default);
}, Sw = jm(({ children: h }, t) => /* @__PURE__ */ q("div", { ref: t, className: "w-full h-full overflow-hidden", children: h })), Aw = ({ pdfUrl: h, title: t, width: e = 280, height: i = 280, className: s = "" }) => {
  const [r, a] = go(0), [o, l] = go(null), [c, d] = go(!0), [u, g] = go(i / e), [b, E] = go(0), w = Pi(null);
  jt(() => {
    Promise.all([vw(), ww()]).then(() => d(!1)).catch(() => {
      l("Failed to load flipbook");
    });
  }, []), jt(() => {
    const p = w.current;
    if (!p) return;
    const f = new ResizeObserver(([y]) => {
      const A = Math.floor(y.contentRect.width);
      A > 0 && E(A);
    });
    return f.observe(p), () => f.disconnect();
  }, [c]);
  const M = b > 0 ? Math.floor(b / 2) : Math.floor(e / 2), k = Math.round(M * u), L = zs(async (p) => {
    try {
      const y = (await p.getPage(1)).getViewport({ scale: 1 });
      y != null && y.width && (y != null && y.height) && g(y.height / y.width);
    } catch {
    }
    a(p.numPages || 0);
  }, []), R = zs((p) => {
    l((p == null ? void 0 : p.message) || "Failed to load PDF");
  }, []);
  return o ? /* @__PURE__ */ q("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : c ? /* @__PURE__ */ q("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ q("div", { ref: w, className: `w-full ${s}`.trim(), children: /* @__PURE__ */ Mn(
    Jm,
    {
      file: h,
      onLoadSuccess: L,
      onLoadError: R,
      loading: /* @__PURE__ */ q("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        r === 1 && /* @__PURE__ */ q(
          "div",
          {
            className: `w-full flex justify-center items-center ${s}`.trim(),
            style: { minHeight: `${k}px` },
            children: /* @__PURE__ */ q(Wf, { pageNumber: 1, width: e, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        r > 1 && /* @__PURE__ */ q(
          Uf,
          {
            width: M,
            height: k,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": t || "Flipbook",
            children: Array.from({ length: r }, (p, f) => /* @__PURE__ */ q(Sw, { children: /* @__PURE__ */ q(Wf, { pageNumber: f + 1, width: M, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, f))
          },
          `${M}-${k}`
        )
      ]
    }
  ) });
}, xw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Aw
}, Symbol.toStringTag, { value: "Module" })), Xe = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), Gf = [1e-3, 0, 0, 1e-3, 0, 0], Lf = 1.35, Ei = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
}, Hs = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, jh = "pdfjs_internal_editor_", ft = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15,
  POPUP: 16,
  SIGNATURE: 101,
  COMMENT: 102
}, At = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_THICKNESS: 32,
  HIGHLIGHT_FREE: 33,
  HIGHLIGHT_SHOW_ALL: 34,
  DRAW_STEP: 41
}, Qm = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, Ee = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, Hh = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, se = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
}, mo = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, kd = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, rh = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93,
  rawFillPath: 94
}, zd = {
  moveTo: 0,
  lineTo: 1,
  curveTo: 2,
  closePath: 3
}, Zm = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let df = kd.WARNINGS;
function _w(h) {
  Number.isInteger(h) && (df = h);
}
function Ew() {
  return df;
}
function uf(h) {
  df >= kd.INFOS && console.info(`Info: ${h}`);
}
function pt(h) {
  df >= kd.WARNINGS && console.warn(`Warning: ${h}`);
}
function zt(h) {
  throw new Error(h);
}
function xt(h, t) {
  h || zt(t);
}
function Cw(h) {
  switch (h == null ? void 0 : h.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return !0;
    default:
      return !1;
  }
}
function bg(h, t = null, e = null) {
  if (!h)
    return null;
  if (e && typeof h == "string") {
    if (e.addDefaultProtocol && h.startsWith("www.")) {
      const s = h.match(/\./g);
      (s == null ? void 0 : s.length) >= 2 && (h = `http://${h}`);
    }
    if (e.tryConvertEncoding)
      try {
        h = Mw(h);
      } catch {
      }
  }
  const i = t ? URL.parse(h, t) : URL.parse(h);
  return Cw(i) ? i : null;
}
function vg(h, t, e = !1) {
  const i = URL.parse(h);
  return i ? (i.hash = t, i.href) : e && bg(h, "http://example.com") ? h.split("#", 1)[0] + `${t ? `#${t}` : ""}` : "";
}
function yt(h, t, e, i = !1) {
  return Object.defineProperty(h, t, {
    value: e,
    enumerable: !i,
    configurable: !0,
    writable: !1
  }), e;
}
const co = (function() {
  function t(e, i) {
    this.message = e, this.name = i;
  }
  return t.prototype = new Error(), t.constructor = t, t;
})();
class im extends co {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
}
class Df extends co {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
}
class Mu extends co {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class zh extends co {
  constructor(t, e, i) {
    super(t, "ResponseException"), this.status = e, this.missing = i;
  }
}
class Tw extends co {
  constructor(t) {
    super(t, "FormatError");
  }
}
class On extends co {
  constructor(t) {
    super(t, "AbortException");
  }
}
function ty(h) {
  (typeof h != "object" || (h == null ? void 0 : h.length) === void 0) && zt("Invalid argument for bytesToString");
  const t = h.length, e = 8192;
  if (t < e)
    return String.fromCharCode.apply(null, h);
  const i = [];
  for (let s = 0; s < t; s += e) {
    const r = Math.min(s + e, t), a = h.subarray(s, r);
    i.push(String.fromCharCode.apply(null, a));
  }
  return i.join("");
}
function Rd(h) {
  typeof h != "string" && zt("Invalid argument for stringToBytes");
  const t = h.length, e = new Uint8Array(t);
  for (let i = 0; i < t; ++i)
    e[i] = h.charCodeAt(i) & 255;
  return e;
}
function Pw(h) {
  return String.fromCharCode(h >> 24 & 255, h >> 16 & 255, h >> 8 & 255, h & 255);
}
function kw() {
  const h = new Uint8Array(4);
  return h[0] = 1, new Uint32Array(h.buffer, 0, 1)[0] === 1;
}
function Rw() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class xe {
  static get isLittleEndian() {
    return yt(this, "isLittleEndian", kw());
  }
  static get isEvalSupported() {
    return yt(this, "isEvalSupported", Rw());
  }
  static get isOffscreenCanvasSupported() {
    return yt(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get isImageDecoderSupported() {
    return yt(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
  }
  static get platform() {
    const {
      platform: t,
      userAgent: e
    } = navigator;
    return yt(this, "platform", {
      isAndroid: e.includes("Android"),
      isLinux: t.includes("Linux"),
      isMac: t.includes("Mac"),
      isWindows: t.includes("Win"),
      isFirefox: e.includes("Firefox")
    });
  }
  static get isCSSRoundSupported() {
    var t, e;
    return yt(this, "isCSSRoundSupported", (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, "width: round(1.5px, 1px)"));
  }
}
const Of = Array.from(Array(256).keys(), (h) => h.toString(16).padStart(2, "0"));
var Ln, Jd, Vf;
class tt {
  static makeHexColor(t, e, i) {
    return `#${Of[t]}${Of[e]}${Of[i]}`;
  }
  static domMatrixToTransform(t) {
    return [t.a, t.b, t.c, t.d, t.e, t.f];
  }
  static scaleMinMax(t, e) {
    let i;
    t[0] ? (t[0] < 0 && (i = e[0], e[0] = e[2], e[2] = i), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (i = e[1], e[1] = e[3], e[3] = i), e[1] *= t[3], e[3] *= t[3]) : (i = e[0], e[0] = e[1], e[1] = i, i = e[2], e[2] = e[3], e[3] = i, t[1] < 0 && (i = e[1], e[1] = e[3], e[3] = i), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (i = e[0], e[0] = e[2], e[2] = i), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5];
  }
  static transform(t, e) {
    return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
  }
  static multiplyByDOMMatrix(t, e) {
    return [t[0] * e.a + t[2] * e.b, t[1] * e.a + t[3] * e.b, t[0] * e.c + t[2] * e.d, t[1] * e.c + t[3] * e.d, t[0] * e.e + t[2] * e.f + t[4], t[1] * e.e + t[3] * e.f + t[5]];
  }
  static applyTransform(t, e, i = 0) {
    const s = t[i], r = t[i + 1];
    t[i] = s * e[0] + r * e[2] + e[4], t[i + 1] = s * e[1] + r * e[3] + e[5];
  }
  static applyTransformToBezier(t, e, i = 0) {
    const s = e[0], r = e[1], a = e[2], o = e[3], l = e[4], c = e[5];
    for (let d = 0; d < 6; d += 2) {
      const u = t[i + d], g = t[i + d + 1];
      t[i + d] = u * s + g * a + l, t[i + d + 1] = u * r + g * o + c;
    }
  }
  static applyInverseTransform(t, e) {
    const i = t[0], s = t[1], r = e[0] * e[3] - e[1] * e[2];
    t[0] = (i * e[3] - s * e[2] + e[2] * e[5] - e[4] * e[3]) / r, t[1] = (-i * e[1] + s * e[0] + e[4] * e[1] - e[5] * e[0]) / r;
  }
  static axialAlignedBoundingBox(t, e, i) {
    const s = e[0], r = e[1], a = e[2], o = e[3], l = e[4], c = e[5], d = t[0], u = t[1], g = t[2], b = t[3];
    let E = s * d + l, w = E, M = s * g + l, k = M, L = o * u + c, R = L, p = o * b + c, f = p;
    if (r !== 0 || a !== 0) {
      const y = r * d, A = r * g, T = a * u, P = a * b;
      E += T, k += T, M += P, w += P, L += y, f += y, p += A, R += A;
    }
    i[0] = Math.min(i[0], E, M, w, k), i[1] = Math.min(i[1], L, p, R, f), i[2] = Math.max(i[2], E, M, w, k), i[3] = Math.max(i[3], L, p, R, f);
  }
  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }
  static singularValueDecompose2dScale(t, e) {
    const i = t[0], s = t[1], r = t[2], a = t[3], o = i ** 2 + s ** 2, l = i * r + s * a, c = r ** 2 + a ** 2, d = (o + c) / 2, u = Math.sqrt(d ** 2 - (o * c - l ** 2));
    e[0] = Math.sqrt(d + u || 1), e[1] = Math.sqrt(d - u || 1);
  }
  static normalizeRect(t) {
    const e = t.slice(0);
    return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
  }
  static intersect(t, e) {
    const i = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), s = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (i > s)
      return null;
    const r = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    return r > a ? null : [i, r, s, a];
  }
  static pointBoundingBox(t, e, i) {
    i[0] = Math.min(i[0], t), i[1] = Math.min(i[1], e), i[2] = Math.max(i[2], t), i[3] = Math.max(i[3], e);
  }
  static rectBoundingBox(t, e, i, s, r) {
    r[0] = Math.min(r[0], t, i), r[1] = Math.min(r[1], e, s), r[2] = Math.max(r[2], t, i), r[3] = Math.max(r[3], e, s);
  }
  static bezierBoundingBox(t, e, i, s, r, a, o, l, c) {
    c[0] = Math.min(c[0], t, o), c[1] = Math.min(c[1], e, l), c[2] = Math.max(c[2], t, o), c[3] = Math.max(c[3], e, l), x(this, Ln, Vf).call(this, t, i, r, o, e, s, a, l, 3 * (-t + 3 * (i - r) + o), 6 * (t - 2 * i + r), 3 * (i - t), c), x(this, Ln, Vf).call(this, t, i, r, o, e, s, a, l, 3 * (-e + 3 * (s - a) + l), 6 * (e - 2 * s + a), 3 * (s - e), c);
  }
}
Ln = new WeakSet(), Jd = function(t, e, i, s, r, a, o, l, c, d) {
  if (c <= 0 || c >= 1)
    return;
  const u = 1 - c, g = c * c, b = g * c, E = u * (u * (u * t + 3 * c * e) + 3 * g * i) + b * s, w = u * (u * (u * r + 3 * c * a) + 3 * g * o) + b * l;
  d[0] = Math.min(d[0], E), d[1] = Math.min(d[1], w), d[2] = Math.max(d[2], E), d[3] = Math.max(d[3], w);
}, Vf = function(t, e, i, s, r, a, o, l, c, d, u, g) {
  if (Math.abs(c) < 1e-12) {
    Math.abs(d) >= 1e-12 && x(this, Ln, Jd).call(this, t, e, i, s, r, a, o, l, -u / d, g);
    return;
  }
  const b = d ** 2 - 4 * u * c;
  if (b < 0)
    return;
  const E = Math.sqrt(b), w = 2 * c;
  x(this, Ln, Jd).call(this, t, e, i, s, r, a, o, l, (-d + E) / w, g), x(this, Ln, Jd).call(this, t, e, i, s, r, a, o, l, (-d - E) / w, g);
}, v(tt, Ln);
function Mw(h) {
  return decodeURIComponent(escape(h));
}
let If = null, sm = null;
function ey(h) {
  return If || (If = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, sm = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), h.replaceAll(If, (t, e, i) => e ? e.normalize("NFKC") : sm.get(i));
}
function wg() {
  if (typeof crypto.randomUUID == "function")
    return crypto.randomUUID();
  const h = new Uint8Array(32);
  return crypto.getRandomValues(h), ty(h);
}
const Sg = "pdfjs_internal_id_";
function Lw(h, t, e) {
  if (!Array.isArray(e) || e.length < 2)
    return !1;
  const [i, s, ...r] = e;
  if (!h(i) && !Number.isInteger(i) || !t(s))
    return !1;
  const a = r.length;
  let o = !0;
  switch (s.name) {
    case "XYZ":
      if (a < 2 || a > 3)
        return !1;
      break;
    case "Fit":
    case "FitB":
      return a === 0;
    case "FitH":
    case "FitBH":
    case "FitV":
    case "FitBV":
      if (a > 1)
        return !1;
      break;
    case "FitR":
      if (a !== 4)
        return !1;
      o = !1;
      break;
    default:
      return !1;
  }
  for (const l of r)
    if (!(typeof l == "number" || o && l === null))
      return !1;
  return !0;
}
function ze(h, t, e) {
  return Math.min(Math.max(h, t), e);
}
function iy(h) {
  return Uint8Array.prototype.toBase64 ? h.toBase64() : btoa(ty(h));
}
function Dw(h) {
  return Uint8Array.fromBase64 ? Uint8Array.fromBase64(h) : Rd(atob(h));
}
typeof Promise.try != "function" && (Promise.try = function(h, ...t) {
  return new Promise((e) => {
    e(h(...t));
  });
});
typeof Math.sumPrecise != "function" && (Math.sumPrecise = function(h) {
  return h.reduce((t, e) => t + e, 0);
});
class $h {
  static textContent(t) {
    const e = [], i = {
      items: e,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function s(r) {
      var l;
      if (!r)
        return;
      let a = null;
      const o = r.name;
      if (o === "#text")
        a = r.value;
      else if ($h.shouldBuildText(o))
        (l = r == null ? void 0 : r.attributes) != null && l.textContent ? a = r.attributes.textContent : r.value && (a = r.value);
      else return;
      if (a !== null && e.push({
        str: a
      }), !!r.children)
        for (const c of r.children)
          s(c);
    }
    return s(t), i;
  }
  static shouldBuildText(t) {
    return !(t === "textarea" || t === "input" || t === "option" || t === "select");
  }
}
class Ag {
  static setupStorage(t, e, i, s, r) {
    const a = s.getValue(e, {
      value: null
    });
    switch (i.name) {
      case "textarea":
        if (a.value !== null && (t.textContent = a.value), r === "print")
          break;
        t.addEventListener("input", (o) => {
          s.setValue(e, {
            value: o.target.value
          });
        });
        break;
      case "input":
        if (i.attributes.type === "radio" || i.attributes.type === "checkbox") {
          if (a.value === i.attributes.xfaOn ? t.setAttribute("checked", !0) : a.value === i.attributes.xfaOff && t.removeAttribute("checked"), r === "print")
            break;
          t.addEventListener("change", (o) => {
            s.setValue(e, {
              value: o.target.checked ? o.target.getAttribute("xfaOn") : o.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (a.value !== null && t.setAttribute("value", a.value), r === "print")
            break;
          t.addEventListener("input", (o) => {
            s.setValue(e, {
              value: o.target.value
            });
          });
        }
        break;
      case "select":
        if (a.value !== null) {
          t.setAttribute("value", a.value);
          for (const o of i.children)
            o.attributes.value === a.value ? o.attributes.selected = !0 : o.attributes.hasOwnProperty("selected") && delete o.attributes.selected;
        }
        t.addEventListener("input", (o) => {
          const l = o.target.options, c = l.selectedIndex === -1 ? "" : l[l.selectedIndex].value;
          s.setValue(e, {
            value: c
          });
        });
        break;
    }
  }
  static setAttributes({
    html: t,
    element: e,
    storage: i = null,
    intent: s,
    linkService: r
  }) {
    const {
      attributes: a
    } = e, o = t instanceof HTMLAnchorElement;
    a.type === "radio" && (a.name = `${a.name}-${s}`);
    for (const [l, c] of Object.entries(a))
      if (c != null)
        switch (l) {
          case "class":
            c.length && t.setAttribute(l, c.join(" "));
            break;
          case "dataId":
            break;
          case "id":
            t.setAttribute("data-element-id", c);
            break;
          case "style":
            Object.assign(t.style, c);
            break;
          case "textContent":
            t.textContent = c;
            break;
          default:
            (!o || l !== "href" && l !== "newWindow") && t.setAttribute(l, c);
        }
    o && r.addLinkAttributes(t, a.href, a.newWindow), i && a.dataId && this.setupStorage(t, a.dataId, e, i);
  }
  static render(t) {
    var u, g;
    const e = t.annotationStorage, i = t.linkService, s = t.xfaHtml, r = t.intent || "display", a = document.createElement(s.name);
    s.attributes && this.setAttributes({
      html: a,
      element: s,
      intent: r,
      linkService: i
    });
    const o = r !== "richText", l = t.div;
    if (l.append(a), t.viewport) {
      const b = `matrix(${t.viewport.transform.join(",")})`;
      l.style.transform = b;
    }
    o && l.setAttribute("class", "xfaLayer xfaFont");
    const c = [];
    if (s.children.length === 0) {
      if (s.value) {
        const b = document.createTextNode(s.value);
        a.append(b), o && $h.shouldBuildText(s.name) && c.push(b);
      }
      return {
        textDivs: c
      };
    }
    const d = [[s, -1, a]];
    for (; d.length > 0; ) {
      const [b, E, w] = d.at(-1);
      if (E + 1 === b.children.length) {
        d.pop();
        continue;
      }
      const M = b.children[++d.at(-1)[1]];
      if (M === null)
        continue;
      const {
        name: k
      } = M;
      if (k === "#text") {
        const R = document.createTextNode(M.value);
        c.push(R), w.append(R);
        continue;
      }
      const L = (u = M == null ? void 0 : M.attributes) != null && u.xmlns ? document.createElementNS(M.attributes.xmlns, k) : document.createElement(k);
      if (w.append(L), M.attributes && this.setAttributes({
        html: L,
        element: M,
        storage: e,
        intent: r,
        linkService: i
      }), ((g = M.children) == null ? void 0 : g.length) > 0)
        d.push([M, -1, L]);
      else if (M.value) {
        const R = document.createTextNode(M.value);
        o && $h.shouldBuildText(k) && c.push(R), L.append(R);
      }
    }
    for (const b of l.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      b.setAttribute("readOnly", !0);
    return {
      textDivs: c
    };
  }
  static update(t) {
    const e = `matrix(${t.viewport.transform.join(",")})`;
    t.div.style.transform = e, t.div.hidden = !1;
  }
}
const Gs = "http://www.w3.org/2000/svg", qr = class qr {
};
V(qr, "CSS", 96), V(qr, "PDF", 72), V(qr, "PDF_TO_CSS_UNITS", qr.CSS / qr.PDF);
let In = qr;
async function lh(h, t = "text") {
  if (yh(h, document.baseURI)) {
    const e = await fetch(h);
    if (!e.ok)
      throw new Error(e.statusText);
    switch (t) {
      case "arraybuffer":
        return e.arrayBuffer();
      case "blob":
        return e.blob();
      case "json":
        return e.json();
    }
    return e.text();
  }
  return new Promise((e, i) => {
    const s = new XMLHttpRequest();
    s.open("GET", h, !0), s.responseType = t, s.onreadystatechange = () => {
      if (s.readyState === XMLHttpRequest.DONE) {
        if (s.status === 200 || s.status === 0) {
          switch (t) {
            case "arraybuffer":
            case "blob":
            case "json":
              e(s.response);
              return;
          }
          e(s.responseText);
          return;
        }
        i(new Error(s.statusText));
      }
    }, s.send(null);
  });
}
class Md {
  constructor({
    viewBox: t,
    userUnit: e,
    scale: i,
    rotation: s,
    offsetX: r = 0,
    offsetY: a = 0,
    dontFlip: o = !1
  }) {
    this.viewBox = t, this.userUnit = e, this.scale = i, this.rotation = s, this.offsetX = r, this.offsetY = a, i *= e;
    const l = (t[2] + t[0]) / 2, c = (t[3] + t[1]) / 2;
    let d, u, g, b;
    switch (s %= 360, s < 0 && (s += 360), s) {
      case 180:
        d = -1, u = 0, g = 0, b = 1;
        break;
      case 90:
        d = 0, u = 1, g = 1, b = 0;
        break;
      case 270:
        d = 0, u = -1, g = -1, b = 0;
        break;
      case 0:
        d = 1, u = 0, g = 0, b = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    o && (g = -g, b = -b);
    let E, w, M, k;
    d === 0 ? (E = Math.abs(c - t[1]) * i + r, w = Math.abs(l - t[0]) * i + a, M = (t[3] - t[1]) * i, k = (t[2] - t[0]) * i) : (E = Math.abs(l - t[0]) * i + r, w = Math.abs(c - t[1]) * i + a, M = (t[2] - t[0]) * i, k = (t[3] - t[1]) * i), this.transform = [d * i, u * i, g * i, b * i, E - d * i * l - g * i * c, w - u * i * l - b * i * c], this.width = M, this.height = k;
  }
  get rawDims() {
    const t = this.viewBox;
    return yt(this, "rawDims", {
      pageWidth: t[2] - t[0],
      pageHeight: t[3] - t[1],
      pageX: t[0],
      pageY: t[1]
    });
  }
  clone({
    scale: t = this.scale,
    rotation: e = this.rotation,
    offsetX: i = this.offsetX,
    offsetY: s = this.offsetY,
    dontFlip: r = !1
  } = {}) {
    return new Md({
      viewBox: this.viewBox.slice(),
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: i,
      offsetY: s,
      dontFlip: r
    });
  }
  convertToViewportPoint(t, e) {
    const i = [t, e];
    return tt.applyTransform(i, this.transform), i;
  }
  convertToViewportRectangle(t) {
    const e = [t[0], t[1]];
    tt.applyTransform(e, this.transform);
    const i = [t[2], t[3]];
    return tt.applyTransform(i, this.transform), [e[0], e[1], i[0], i[1]];
  }
  convertToPdfPoint(t, e) {
    const i = [t, e];
    return tt.applyInverseTransform(i, this.transform), i;
  }
}
class ff extends co {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
}
function Ld(h) {
  const t = h.length;
  let e = 0;
  for (; e < t && h[e].trim() === ""; )
    e++;
  return h.substring(e, e + 5).toLowerCase() === "data:";
}
function pf(h) {
  return typeof h == "string" && /\.pdf$/i.test(h);
}
function sy(h) {
  return [h] = h.split(/[#?]/, 1), h.substring(h.lastIndexOf("/") + 1);
}
function ny(h, t = "document.pdf") {
  if (typeof h != "string")
    return t;
  if (Ld(h))
    return pt('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const i = ((o) => {
    try {
      return new URL(o);
    } catch {
      try {
        return new URL(decodeURIComponent(o));
      } catch {
        try {
          return new URL(o, "https://foo.bar");
        } catch {
          try {
            return new URL(decodeURIComponent(o), "https://foo.bar");
          } catch {
            return null;
          }
        }
      }
    }
  })(h);
  if (!i)
    return t;
  const s = (o) => {
    try {
      let l = decodeURIComponent(o);
      return l.includes("/") ? (l = l.split("/").at(-1), l.test(/^\.pdf$/i) ? l : o) : l;
    } catch {
      return o;
    }
  }, r = /\.pdf$/i, a = i.pathname.split("/").at(-1);
  if (r.test(a))
    return s(a);
  if (i.searchParams.size > 0) {
    const o = Array.from(i.searchParams.values()).reverse();
    for (const c of o)
      if (r.test(c))
        return s(c);
    const l = Array.from(i.searchParams.keys()).reverse();
    for (const c of l)
      if (r.test(c))
        return s(c);
  }
  if (i.hash) {
    const l = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(i.hash);
    if (l)
      return s(l[0]);
  }
  return t;
}
class nm {
  constructor() {
    V(this, "started", /* @__PURE__ */ Object.create(null));
    V(this, "times", []);
  }
  time(t) {
    t in this.started && pt(`Timer is already running for ${t}`), this.started[t] = Date.now();
  }
  timeEnd(t) {
    t in this.started || pt(`Timer has not been started for ${t}`), this.times.push({
      name: t,
      start: this.started[t],
      end: Date.now()
    }), delete this.started[t];
  }
  toString() {
    const t = [];
    let e = 0;
    for (const {
      name: i
    } of this.times)
      e = Math.max(i.length, e);
    for (const {
      name: i,
      start: s,
      end: r
    } of this.times)
      t.push(`${i.padEnd(e)} ${r - s}ms
`);
    return t.join("");
  }
}
function yh(h, t) {
  const e = t ? URL.parse(h, t) : URL.parse(h);
  return (e == null ? void 0 : e.protocol) === "http:" || (e == null ? void 0 : e.protocol) === "https:";
}
function Ri(h) {
  h.preventDefault();
}
function Kt(h) {
  h.preventDefault(), h.stopPropagation();
}
function Ow(h) {
  console.log("Deprecated API usage: " + h);
}
var Xh;
class Uh {
  static toDateObject(t) {
    if (t instanceof Date)
      return t;
    if (!t || typeof t != "string")
      return null;
    n(this, Xh) || m(this, Xh, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = n(this, Xh).exec(t);
    if (!e)
      return null;
    const i = parseInt(e[1], 10);
    let s = parseInt(e[2], 10);
    s = s >= 1 && s <= 12 ? s - 1 : 0;
    let r = parseInt(e[3], 10);
    r = r >= 1 && r <= 31 ? r : 1;
    let a = parseInt(e[4], 10);
    a = a >= 0 && a <= 23 ? a : 0;
    let o = parseInt(e[5], 10);
    o = o >= 0 && o <= 59 ? o : 0;
    let l = parseInt(e[6], 10);
    l = l >= 0 && l <= 59 ? l : 0;
    const c = e[7] || "Z";
    let d = parseInt(e[8], 10);
    d = d >= 0 && d <= 23 ? d : 0;
    let u = parseInt(e[9], 10) || 0;
    return u = u >= 0 && u <= 59 ? u : 0, c === "-" ? (a += d, o += u) : c === "+" && (a -= d, o -= u), new Date(Date.UTC(i, s, r, a, o, l));
  }
}
Xh = new WeakMap(), v(Uh, Xh);
function ry(h, {
  scale: t = 1,
  rotation: e = 0
}) {
  const {
    width: i,
    height: s
  } = h.attributes.style, r = [0, 0, parseInt(i), parseInt(s)];
  return new Md({
    viewBox: r,
    userUnit: 1,
    scale: t,
    rotation: e
  });
}
function hh(h) {
  if (h.startsWith("#")) {
    const t = parseInt(h.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return h.startsWith("rgb(") ? h.slice(4, -1).split(",").map((t) => parseInt(t)) : h.startsWith("rgba(") ? h.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (pt(`Not a valid color format: "${h}"`), [0, 0, 0]);
}
function Iw(h) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", t.style.colorScheme = "only light", document.body.append(t);
  for (const e of h.keys()) {
    t.style.color = e;
    const i = window.getComputedStyle(t).color;
    h.set(e, hh(i));
  }
  t.remove();
}
function Yt(h) {
  const {
    a: t,
    b: e,
    c: i,
    d: s,
    e: r,
    f: a
  } = h.getTransform();
  return [t, e, i, s, r, a];
}
function fs(h) {
  const {
    a: t,
    b: e,
    c: i,
    d: s,
    e: r,
    f: a
  } = h.getTransform().invertSelf();
  return [t, e, i, s, r, a];
}
function Fr(h, t, e = !1, i = !0) {
  if (t instanceof Md) {
    const {
      pageWidth: s,
      pageHeight: r
    } = t.rawDims, {
      style: a
    } = h, o = xe.isCSSRoundSupported, l = `var(--total-scale-factor) * ${s}px`, c = `var(--total-scale-factor) * ${r}px`, d = o ? `round(down, ${l}, var(--scale-round-x))` : `calc(${l})`, u = o ? `round(down, ${c}, var(--scale-round-y))` : `calc(${c})`;
    !e || t.rotation % 180 === 0 ? (a.width = d, a.height = u) : (a.width = u, a.height = d);
  }
  i && h.setAttribute("data-main-rotation", t.rotation);
}
class cs {
  constructor() {
    const {
      pixelRatio: t
    } = cs;
    this.sx = t, this.sy = t;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
  limitCanvas(t, e, i, s, r = -1) {
    let a = 1 / 0, o = 1 / 0, l = 1 / 0;
    i = cs.capPixels(i, r), i > 0 && (a = Math.sqrt(i / (t * e))), s !== -1 && (o = s / t, l = s / e);
    const c = Math.min(a, o, l);
    return this.sx > c || this.sy > c ? (this.sx = c, this.sy = c, !0) : !1;
  }
  static get pixelRatio() {
    return globalThis.devicePixelRatio || 1;
  }
  static capPixels(t, e) {
    if (e >= 0) {
      const i = Math.ceil(window.screen.availWidth * window.screen.availHeight * this.pixelRatio ** 2 * (1 + e / 100));
      return t > 0 ? Math.min(t, i) : i;
    }
    return t;
  }
}
const Lu = ["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"];
class Fw {
  static get isDarkMode() {
    var t;
    return yt(this, "isDarkMode", !!((t = window == null ? void 0 : window.matchMedia) != null && t.call(window, "(prefers-color-scheme: dark)").matches));
  }
}
class ay {
  static get commentForegroundColor() {
    const t = document.createElement("span");
    t.classList.add("comment", "sidebar");
    const {
      style: e
    } = t;
    e.width = e.height = "0", e.display = "none", e.color = "var(--comment-fg-color)", document.body.append(t);
    const {
      color: i
    } = window.getComputedStyle(t);
    return t.remove(), yt(this, "commentForegroundColor", hh(i));
  }
}
function oy(h, t, e, i) {
  i = Math.min(Math.max(i ?? 1, 0), 1);
  const s = 255 * (1 - i);
  return h = Math.round(h * i + s), t = Math.round(t * i + s), e = Math.round(e * i + s), [h, t, e];
}
function rm(h, t) {
  const e = h[0] / 255, i = h[1] / 255, s = h[2] / 255, r = Math.max(e, i, s), a = Math.min(e, i, s), o = (r + a) / 2;
  if (r === a)
    t[0] = t[1] = 0;
  else {
    const l = r - a;
    switch (t[1] = o < 0.5 ? l / (r + a) : l / (2 - r - a), r) {
      case e:
        t[0] = ((i - s) / l + (i < s ? 6 : 0)) * 60;
        break;
      case i:
        t[0] = ((s - e) / l + 2) * 60;
        break;
      case s:
        t[0] = ((e - i) / l + 4) * 60;
        break;
    }
  }
  t[2] = o;
}
function qf(h, t) {
  const e = h[0], i = h[1], s = h[2], r = (1 - Math.abs(2 * s - 1)) * i, a = r * (1 - Math.abs(e / 60 % 2 - 1)), o = s - r / 2;
  switch (Math.floor(e / 60)) {
    case 0:
      t[0] = r + o, t[1] = a + o, t[2] = o;
      break;
    case 1:
      t[0] = a + o, t[1] = r + o, t[2] = o;
      break;
    case 2:
      t[0] = o, t[1] = r + o, t[2] = a + o;
      break;
    case 3:
      t[0] = o, t[1] = a + o, t[2] = r + o;
      break;
    case 4:
      t[0] = a + o, t[1] = o, t[2] = r + o;
      break;
    case 5:
    case 6:
      t[0] = r + o, t[1] = o, t[2] = a + o;
      break;
  }
}
function am(h) {
  return h <= 0.03928 ? h / 12.92 : ((h + 0.055) / 1.055) ** 2.4;
}
function om(h, t, e) {
  qf(h, e), e.map(am);
  const i = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  qf(t, e), e.map(am);
  const s = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  return i > s ? (i + 0.05) / (s + 0.05) : (s + 0.05) / (i + 0.05);
}
const lm = /* @__PURE__ */ new Map();
function ly(h, t) {
  const e = h[0] + h[1] * 256 + h[2] * 65536 + t[0] * 16777216 + t[1] * 4294967296 + t[2] * 1099511627776;
  let i = lm.get(e);
  if (i)
    return i;
  const s = new Float32Array(9), r = s.subarray(0, 3), a = s.subarray(3, 6);
  rm(h, a);
  const o = s.subarray(6, 9);
  rm(t, o);
  const l = o[2] < 0.5, c = l ? 12 : 4.5;
  if (a[2] = l ? Math.sqrt(a[2]) : 1 - Math.sqrt(1 - a[2]), om(a, o, r) < c) {
    let d, u;
    l ? (d = a[2], u = 1) : (d = 0, u = a[2]);
    const g = 5e-3;
    for (; u - d > g; ) {
      const b = a[2] = (d + u) / 2;
      l === om(a, o, r) < c ? d = b : u = b;
    }
    a[2] = l ? u : d;
  }
  return qf(a, r), i = tt.makeHexColor(Math.round(r[0] * 255), Math.round(r[1] * 255), Math.round(r[2] * 255)), lm.set(e, i), i;
}
function xg({
  html: h,
  dir: t,
  className: e
}, i) {
  const s = document.createDocumentFragment();
  if (typeof h == "string") {
    const r = document.createElement("p");
    r.dir = t || "auto";
    const a = h.split(/(?:\r\n?|\n)/);
    for (let o = 0, l = a.length; o < l; ++o) {
      const c = a[o];
      r.append(document.createTextNode(c)), o < l - 1 && r.append(document.createElement("br"));
    }
    s.append(r);
  } else
    Ag.render({
      xfaHtml: h,
      div: s,
      intent: "richText"
    });
  s.firstChild.classList.add("richText", e), i.append(s);
}
var zn, $n, Di, Oi, Yh, Un, Lo, Do, Kh, Uu, hy, De, cy, dy, yo, bh;
const Xs = class Xs {
  constructor(t) {
    v(this, De);
    v(this, zn, null);
    v(this, $n, null);
    v(this, Di);
    v(this, Oi, null);
    v(this, Yh, null);
    v(this, Un, null);
    v(this, Lo, null);
    v(this, Do, null);
    m(this, Di, t), n(Xs, Kh) || m(Xs, Kh, Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button",
      signature: "pdfjs-editor-remove-signature-button"
    }));
  }
  render() {
    const t = m(this, zn, document.createElement("div"));
    t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
    const e = n(this, Di)._uiManager._signal;
    e instanceof AbortSignal && !e.aborted && (t.addEventListener("contextmenu", Ri, {
      signal: e
    }), t.addEventListener("pointerdown", x(Xs, Uu, hy), {
      signal: e
    }));
    const i = m(this, Oi, document.createElement("div"));
    i.className = "buttons", t.append(i);
    const s = n(this, Di).toolbarPosition;
    if (s) {
      const {
        style: r
      } = t, a = n(this, Di)._uiManager.direction === "ltr" ? 1 - s[0] : s[0];
      r.insetInlineEnd = `${100 * a}%`, r.top = `calc(${100 * s[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return t;
  }
  get div() {
    return n(this, zn);
  }
  hide() {
    var t;
    n(this, zn).classList.add("hidden"), (t = n(this, $n)) == null || t.hideDropdown();
  }
  show() {
    var t, e;
    n(this, zn).classList.remove("hidden"), (t = n(this, Yh)) == null || t.shown(), (e = n(this, Un)) == null || e.shown();
  }
  addDeleteButton() {
    const {
      editorType: t,
      _uiManager: e
    } = n(this, Di), i = document.createElement("button");
    i.classList.add("basic", "deleteButton"), i.tabIndex = 0, i.setAttribute("data-l10n-id", n(Xs, Kh)[t]), x(this, De, yo).call(this, i) && i.addEventListener("click", (s) => {
      e.delete();
    }, {
      signal: e._signal
    }), n(this, Oi).append(i);
  }
  async addAltText(t) {
    const e = await t.render();
    x(this, De, yo).call(this, e), n(this, Oi).append(e, n(this, De, bh)), m(this, Yh, t);
  }
  addComment(t, e = null) {
    if (n(this, Un))
      return;
    const i = t.renderForToolbar();
    if (!i)
      return;
    x(this, De, yo).call(this, i);
    const s = m(this, Lo, n(this, De, bh));
    e ? (n(this, Oi).insertBefore(i, e), n(this, Oi).insertBefore(s, e)) : n(this, Oi).append(i, s), m(this, Un, t), t.toolbar = this;
  }
  addColorPicker(t) {
    if (n(this, $n))
      return;
    m(this, $n, t);
    const e = t.renderButton();
    x(this, De, yo).call(this, e), n(this, Oi).append(e, n(this, De, bh));
  }
  async addEditSignatureButton(t) {
    const e = m(this, Do, await t.renderEditButton(n(this, Di)));
    x(this, De, yo).call(this, e), n(this, Oi).append(e, n(this, De, bh));
  }
  removeButton(t) {
    var e, i;
    switch (t) {
      case "comment":
        (e = n(this, Un)) == null || e.removeToolbarCommentButton(), m(this, Un, null), (i = n(this, Lo)) == null || i.remove(), m(this, Lo, null);
        break;
    }
  }
  async addButton(t, e) {
    switch (t) {
      case "colorPicker":
        this.addColorPicker(e);
        break;
      case "altText":
        await this.addAltText(e);
        break;
      case "editSignature":
        await this.addEditSignatureButton(e);
        break;
      case "delete":
        this.addDeleteButton();
        break;
      case "comment":
        this.addComment(e);
        break;
    }
  }
  async addButtonBefore(t, e, i) {
    const s = n(this, Oi).querySelector(i);
    s && t === "comment" && this.addComment(e, s);
  }
  updateEditSignatureButton(t) {
    n(this, Do) && (n(this, Do).title = t);
  }
  remove() {
    var t;
    n(this, zn).remove(), (t = n(this, $n)) == null || t.destroy(), m(this, $n, null);
  }
};
zn = new WeakMap(), $n = new WeakMap(), Di = new WeakMap(), Oi = new WeakMap(), Yh = new WeakMap(), Un = new WeakMap(), Lo = new WeakMap(), Do = new WeakMap(), Kh = new WeakMap(), Uu = new WeakSet(), hy = function(t) {
  t.stopPropagation();
}, De = new WeakSet(), cy = function(t) {
  n(this, Di)._focusEventsAllowed = !1, Kt(t);
}, dy = function(t) {
  n(this, Di)._focusEventsAllowed = !0, Kt(t);
}, yo = function(t) {
  const e = n(this, Di)._uiManager._signal;
  return !(e instanceof AbortSignal) || e.aborted ? !1 : (t.addEventListener("focusin", x(this, De, cy).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("focusout", x(this, De, dy).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("contextmenu", Ri, {
    signal: e
  }), !0);
}, bh = function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, v(Xs, Uu), v(Xs, Kh, null);
let Xf = Xs;
var Jh, Kr, Ks, Fn, uy, fy, Yf;
class Nw {
  constructor(t) {
    v(this, Fn);
    v(this, Jh, null);
    v(this, Kr, null);
    v(this, Ks);
    m(this, Ks, t);
  }
  show(t, e, i) {
    const [s, r] = x(this, Fn, fy).call(this, e, i), {
      style: a
    } = n(this, Kr) || m(this, Kr, x(this, Fn, uy).call(this));
    t.append(n(this, Kr)), a.insetInlineEnd = `${100 * s}%`, a.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    n(this, Kr).remove();
  }
}
Jh = new WeakMap(), Kr = new WeakMap(), Ks = new WeakMap(), Fn = new WeakSet(), uy = function() {
  const t = m(this, Kr, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar");
  const e = n(this, Ks)._signal;
  e instanceof AbortSignal && !e.aborted && t.addEventListener("contextmenu", Ri, {
    signal: e
  });
  const i = m(this, Jh, document.createElement("div"));
  return i.className = "buttons", t.append(i), n(this, Ks).hasCommentManager() && x(this, Fn, Yf).call(this, "commentButton", "pdfjs-comment-floating-button", "pdfjs-comment-floating-button-label", () => {
    n(this, Ks).commentSelection("floating_button");
  }), x(this, Fn, Yf).call(this, "highlightButton", "pdfjs-highlight-floating-button1", "pdfjs-highlight-floating-button-label", () => {
    n(this, Ks).highlightSelection("floating_button");
  }), t;
}, fy = function(t, e) {
  let i = 0, s = 0;
  for (const r of t) {
    const a = r.y + r.height;
    if (a < i)
      continue;
    const o = r.x + (e ? r.width : 0);
    if (a > i) {
      s = o, i = a;
      continue;
    }
    e ? o > s && (s = o) : o < s && (s = o);
  }
  return [e ? 1 - s : s, i];
}, Yf = function(t, e, i, s) {
  const r = document.createElement("button");
  r.classList.add("basic", t), r.tabIndex = 0, r.setAttribute("data-l10n-id", e);
  const a = document.createElement("span");
  r.append(a), a.className = "visuallyHidden", a.setAttribute("data-l10n-id", i);
  const o = n(this, Ks)._signal;
  o instanceof AbortSignal && !o.aborted && (r.addEventListener("contextmenu", Ri, {
    signal: o
  }), r.addEventListener("click", s, {
    signal: o
  })), n(this, Jh).append(r);
};
function py(h, t, e) {
  for (const i of e)
    t.addEventListener(i, h[i].bind(h));
}
var Wu;
class Bw {
  constructor() {
    v(this, Wu, 0);
  }
  get id() {
    return `${jh}${de(this, Wu)._++}`;
  }
}
Wu = new WeakMap();
var Oo, Qh, Ie, Io, Qd;
const Ig = class Ig {
  constructor() {
    v(this, Io);
    v(this, Oo, wg());
    v(this, Qh, 0);
    v(this, Ie, null);
  }
  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', i = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), s = new Image();
    s.src = t;
    const r = s.decode().then(() => (i.drawImage(s, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(i.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return yt(this, "_isSVGFittingCanvas", r);
  }
  async getFromFile(t) {
    const {
      lastModified: e,
      name: i,
      size: s,
      type: r
    } = t;
    return x(this, Io, Qd).call(this, `${e}_${i}_${s}_${r}`, t);
  }
  async getFromUrl(t) {
    return x(this, Io, Qd).call(this, t, t);
  }
  async getFromBlob(t, e) {
    const i = await e;
    return x(this, Io, Qd).call(this, t, i);
  }
  async getFromId(t) {
    n(this, Ie) || m(this, Ie, /* @__PURE__ */ new Map());
    const e = n(this, Ie).get(t);
    if (!e)
      return null;
    if (e.bitmap)
      return e.refCounter += 1, e;
    if (e.file)
      return this.getFromFile(e.file);
    if (e.blobPromise) {
      const {
        blobPromise: i
      } = e;
      return delete e.blobPromise, this.getFromBlob(e.id, i);
    }
    return this.getFromUrl(e.url);
  }
  getFromCanvas(t, e) {
    n(this, Ie) || m(this, Ie, /* @__PURE__ */ new Map());
    let i = n(this, Ie).get(t);
    if (i != null && i.bitmap)
      return i.refCounter += 1, i;
    const s = new OffscreenCanvas(e.width, e.height);
    return s.getContext("2d").drawImage(e, 0, 0), i = {
      bitmap: s.transferToImageBitmap(),
      id: `image_${n(this, Oo)}_${de(this, Qh)._++}`,
      refCounter: 1,
      isSvg: !1
    }, n(this, Ie).set(t, i), n(this, Ie).set(i.id, i), i;
  }
  getSvgUrl(t) {
    const e = n(this, Ie).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    var s;
    n(this, Ie) || m(this, Ie, /* @__PURE__ */ new Map());
    const e = n(this, Ie).get(t);
    if (!e || (e.refCounter -= 1, e.refCounter !== 0))
      return;
    const {
      bitmap: i
    } = e;
    if (!e.url && !e.file) {
      const r = new OffscreenCanvas(i.width, i.height);
      r.getContext("bitmaprenderer").transferFromImageBitmap(i), e.blobPromise = r.convertToBlob();
    }
    (s = i.close) == null || s.call(i), e.bitmap = null;
  }
  isValidId(t) {
    return t.startsWith(`image_${n(this, Oo)}_`);
  }
};
Oo = new WeakMap(), Qh = new WeakMap(), Ie = new WeakMap(), Io = new WeakSet(), Qd = async function(t, e) {
  n(this, Ie) || m(this, Ie, /* @__PURE__ */ new Map());
  let i = n(this, Ie).get(t);
  if (i === null)
    return null;
  if (i != null && i.bitmap)
    return i.refCounter += 1, i;
  try {
    i || (i = {
      bitmap: null,
      id: `image_${n(this, Oo)}_${de(this, Qh)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let s;
    if (typeof e == "string" ? (i.url = e, s = await lh(e, "blob")) : e instanceof File ? s = i.file = e : e instanceof Blob && (s = e), s.type === "image/svg+xml") {
      const r = Ig._isSVGFittingCanvas, a = new FileReader(), o = new Image(), l = new Promise((c, d) => {
        o.onload = () => {
          i.bitmap = o, i.isSvg = !0, c();
        }, a.onload = async () => {
          const u = i.svgUrl = a.result;
          o.src = await r ? `${u}#svgView(preserveAspectRatio(none))` : u;
        }, o.onerror = a.onerror = d;
      });
      a.readAsDataURL(s), await l;
    } else
      i.bitmap = await createImageBitmap(s);
    i.refCounter = 1;
  } catch (s) {
    pt(s), i = null;
  }
  return n(this, Ie).set(t, i), i && n(this, Ie).set(i.id, i), i;
};
let Kf = Ig;
var ne, Wn, Zh, Xt;
class Hw {
  constructor(t = 128) {
    v(this, ne, []);
    v(this, Wn, !1);
    v(this, Zh);
    v(this, Xt, -1);
    m(this, Zh, t);
  }
  add({
    cmd: t,
    undo: e,
    post: i,
    mustExec: s,
    type: r = NaN,
    overwriteIfSameType: a = !1,
    keepUndo: o = !1
  }) {
    if (s && t(), n(this, Wn))
      return;
    const l = {
      cmd: t,
      undo: e,
      post: i,
      type: r
    };
    if (n(this, Xt) === -1) {
      n(this, ne).length > 0 && (n(this, ne).length = 0), m(this, Xt, 0), n(this, ne).push(l);
      return;
    }
    if (a && n(this, ne)[n(this, Xt)].type === r) {
      o && (l.undo = n(this, ne)[n(this, Xt)].undo), n(this, ne)[n(this, Xt)] = l;
      return;
    }
    const c = n(this, Xt) + 1;
    c === n(this, Zh) ? n(this, ne).splice(0, 1) : (m(this, Xt, c), c < n(this, ne).length && n(this, ne).splice(c)), n(this, ne).push(l);
  }
  undo() {
    if (n(this, Xt) === -1)
      return;
    m(this, Wn, !0);
    const {
      undo: t,
      post: e
    } = n(this, ne)[n(this, Xt)];
    t(), e == null || e(), m(this, Wn, !1), m(this, Xt, n(this, Xt) - 1);
  }
  redo() {
    if (n(this, Xt) < n(this, ne).length - 1) {
      m(this, Xt, n(this, Xt) + 1), m(this, Wn, !0);
      const {
        cmd: t,
        post: e
      } = n(this, ne)[n(this, Xt)];
      t(), e == null || e(), m(this, Wn, !1);
    }
  }
  hasSomethingToUndo() {
    return n(this, Xt) !== -1;
  }
  hasSomethingToRedo() {
    return n(this, Xt) < n(this, ne).length - 1;
  }
  cleanType(t) {
    if (n(this, Xt) !== -1) {
      for (let e = n(this, Xt); e >= 0; e--)
        if (n(this, ne)[e].type !== t) {
          n(this, ne).splice(e + 1, n(this, Xt) - e), m(this, Xt, e);
          return;
        }
      n(this, ne).length = 0, m(this, Xt, -1);
    }
  }
  destroy() {
    m(this, ne, null);
  }
}
ne = new WeakMap(), Wn = new WeakMap(), Zh = new WeakMap(), Xt = new WeakMap();
var Gu, gy;
class Dd {
  constructor(t) {
    v(this, Gu);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e
    } = xe.platform;
    for (const [i, s, r = {}] of t)
      for (const a of i) {
        const o = a.startsWith("mac+");
        e && o ? (this.callbacks.set(a.slice(4), {
          callback: s,
          options: r
        }), this.allKeys.add(a.split("+").at(-1))) : !e && !o && (this.callbacks.set(a, {
          callback: s,
          options: r
        }), this.allKeys.add(a.split("+").at(-1)));
      }
  }
  exec(t, e) {
    if (!this.allKeys.has(e.key))
      return;
    const i = this.callbacks.get(x(this, Gu, gy).call(this, e));
    if (!i)
      return;
    const {
      callback: s,
      options: {
        bubbles: r = !1,
        args: a = [],
        checker: o = null
      }
    } = i;
    o && !o(t, e) || (s.bind(t, ...a, e)(), r || Kt(e));
  }
}
Gu = new WeakSet(), gy = function(t) {
  t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
};
const Vu = class Vu {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return Iw(t), yt(this, "_colors", t);
  }
  convert(t) {
    const e = hh(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [i, s] of this._colors)
      if (s.every((r, a) => r === e[a]))
        return Vu._colorsMapping.get(i);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? tt.makeHexColor(...e) : t;
  }
};
V(Vu, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let Jf = Vu;
var Fo, li, No, Qt, fe, Bo, Ii, Ho, Fi, Fe, Gn, Vn, jo, qn, ms, Ni, Jr, tc, ec, zo, ic, ys, Xn, $o, Yn, bs, qu, Kn, Uo, sc, Jn, Qr, Wo, Qn, nc, le, kt, Js, Zn, tr, rc, Go, ac, er, vs, Qs, oc, lc, Bi, Y, Zd, Qf, my, yy, vh, by, vy, wy, Zf, Sy, tp, ep, Ay, Ue, Vs, xy, _y, ip, Ey, wh, sp;
const Eo = class Eo {
  constructor(t, e, i, s, r, a, o, l, c, d, u, g, b, E, w, M) {
    v(this, Y);
    v(this, Fo, new AbortController());
    v(this, li, null);
    v(this, No, null);
    v(this, Qt, /* @__PURE__ */ new Map());
    v(this, fe, /* @__PURE__ */ new Map());
    v(this, Bo, null);
    v(this, Ii, null);
    v(this, Ho, null);
    v(this, Fi, new Hw());
    v(this, Fe, null);
    v(this, Gn, null);
    v(this, Vn, null);
    v(this, jo, 0);
    v(this, qn, /* @__PURE__ */ new Set());
    v(this, ms, null);
    v(this, Ni, null);
    v(this, Jr, /* @__PURE__ */ new Set());
    V(this, "_editorUndoBar", null);
    v(this, tc, !1);
    v(this, ec, !1);
    v(this, zo, !1);
    v(this, ic, null);
    v(this, ys, null);
    v(this, Xn, null);
    v(this, $o, null);
    v(this, Yn, !1);
    v(this, bs, null);
    v(this, qu, new Bw());
    v(this, Kn, !1);
    v(this, Uo, !1);
    v(this, sc, !1);
    v(this, Jn, null);
    v(this, Qr, null);
    v(this, Wo, null);
    v(this, Qn, null);
    v(this, nc, null);
    v(this, le, ft.NONE);
    v(this, kt, /* @__PURE__ */ new Set());
    v(this, Js, null);
    v(this, Zn, null);
    v(this, tr, null);
    v(this, rc, null);
    v(this, Go, null);
    v(this, ac, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    v(this, er, [0, 0]);
    v(this, vs, null);
    v(this, Qs, null);
    v(this, oc, null);
    v(this, lc, null);
    v(this, Bi, null);
    const k = this._signal = n(this, Fo).signal;
    m(this, Qs, t), m(this, oc, e), m(this, lc, i), m(this, Bo, s), m(this, Fe, r), m(this, Zn, a), m(this, Go, l), this._eventBus = o, o._on("editingaction", this.onEditingAction.bind(this), {
      signal: k
    }), o._on("pagechanging", this.onPageChanging.bind(this), {
      signal: k
    }), o._on("scalechanging", this.onScaleChanging.bind(this), {
      signal: k
    }), o._on("rotationchanging", this.onRotationChanging.bind(this), {
      signal: k
    }), o._on("setpreference", this.onSetPreference.bind(this), {
      signal: k
    }), o._on("switchannotationeditorparams", (L) => this.updateParams(L.type, L.value), {
      signal: k
    }), window.addEventListener("pointerdown", () => {
      m(this, Uo, !0);
    }, {
      capture: !0,
      signal: k
    }), window.addEventListener("pointerup", () => {
      m(this, Uo, !1);
    }, {
      capture: !0,
      signal: k
    }), x(this, Y, by).call(this), x(this, Y, Ay).call(this), x(this, Y, Zf).call(this), m(this, Ii, l.annotationStorage), m(this, ic, l.filterFactory), m(this, tr, c), m(this, $o, d || null), m(this, tc, u), m(this, ec, g), m(this, zo, b), m(this, nc, E || null), this.viewParameters = {
      realScale: In.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1, this._editorUndoBar = w || null, this._supportsPinchToZoom = M !== !1, r == null || r.setSidebarUiManager(this);
  }
  static get _keyboardManager() {
    const t = Eo.prototype, e = (a) => n(a, Qs).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && a.hasSomethingToControl(), i = (a, {
      target: o
    }) => {
      if (o instanceof HTMLInputElement) {
        const {
          type: l
        } = o;
        return l !== "text" && l !== "number";
      }
      return !0;
    }, s = this.TRANSLATE_SMALL, r = this.TRANSLATE_BIG;
    return yt(this, "_keyboardManager", new Dd([[["ctrl+a", "mac+meta+a"], t.selectAll, {
      checker: i
    }], [["ctrl+z", "mac+meta+z"], t.undo, {
      checker: i
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo, {
      checker: i
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete, {
      checker: i
    }], [["Enter", "mac+Enter"], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && n(a, Qs).contains(o) && !a.isEnterHandled
    }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && n(a, Qs).contains(document.activeElement)
    }], [["Escape", "mac+Escape"], t.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, {
      args: [-s, 0],
      checker: e
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, {
      args: [-r, 0],
      checker: e
    }], [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, {
      args: [s, 0],
      checker: e
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, {
      args: [r, 0],
      checker: e
    }], [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -s],
      checker: e
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -r],
      checker: e
    }], [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, {
      args: [0, s],
      checker: e
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, {
      args: [0, r],
      checker: e
    }]]));
  }
  destroy() {
    var t, e, i, s, r, a, o, l, c;
    (t = n(this, Bi)) == null || t.resolve(), m(this, Bi, null), (e = n(this, Fo)) == null || e.abort(), m(this, Fo, null), this._signal = null;
    for (const d of n(this, fe).values())
      d.destroy();
    n(this, fe).clear(), n(this, Qt).clear(), n(this, Jr).clear(), (i = n(this, Qn)) == null || i.clear(), m(this, li, null), n(this, kt).clear(), n(this, Fi).destroy(), (s = n(this, Bo)) == null || s.destroy(), (r = n(this, Fe)) == null || r.destroy(), (a = n(this, Zn)) == null || a.destroy(), (o = n(this, bs)) == null || o.hide(), m(this, bs, null), (l = n(this, Wo)) == null || l.destroy(), m(this, Wo, null), m(this, No, null), n(this, ys) && (clearTimeout(n(this, ys)), m(this, ys, null)), n(this, vs) && (clearTimeout(n(this, vs)), m(this, vs, null)), (c = this._editorUndoBar) == null || c.destroy(), m(this, Go, null);
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return n(this, nc);
  }
  get useNewAltTextFlow() {
    return n(this, ec);
  }
  get useNewAltTextWhenAddingImage() {
    return n(this, zo);
  }
  get hcmFilter() {
    return yt(this, "hcmFilter", n(this, tr) ? n(this, ic).addHCMFilter(n(this, tr).foreground, n(this, tr).background) : "none");
  }
  get direction() {
    return yt(this, "direction", getComputedStyle(n(this, Qs)).direction);
  }
  get _highlightColors() {
    return yt(this, "_highlightColors", n(this, $o) ? new Map(n(this, $o).split(",").map((t) => (t = t.split("=").map((e) => e.trim()), t[1] = t[1].toUpperCase(), t))) : null);
  }
  get highlightColors() {
    const {
      _highlightColors: t
    } = this;
    if (!t)
      return yt(this, "highlightColors", null);
    const e = /* @__PURE__ */ new Map(), i = !!n(this, tr);
    for (const [s, r] of t) {
      const a = s.endsWith("_HCM");
      if (i && a) {
        e.set(s.replace("_HCM", ""), r);
        continue;
      }
      !i && !a && e.set(s, r);
    }
    return yt(this, "highlightColors", e);
  }
  get highlightColorNames() {
    return yt(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }
  getNonHCMColor(t) {
    if (!this._highlightColors)
      return t;
    const e = this.highlightColorNames.get(t);
    return this._highlightColors.get(e) || t;
  }
  getNonHCMColorName(t) {
    return this.highlightColorNames.get(t) || t;
  }
  setCurrentDrawingSession(t) {
    t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), m(this, Vn, t);
  }
  setMainHighlightColorPicker(t) {
    m(this, Wo, t);
  }
  editAltText(t, e = !1) {
    var i;
    (i = n(this, Bo)) == null || i.editAltText(this, t, e);
  }
  hasCommentManager() {
    return !!n(this, Fe);
  }
  editComment(t, e, i, s) {
    var r;
    (r = n(this, Fe)) == null || r.showDialog(this, t, e, i, s);
  }
  selectComment(t, e) {
    const i = n(this, fe).get(t), s = i == null ? void 0 : i.getEditorByUID(e);
    s == null || s.toggleComment(!0, !0);
  }
  updateComment(t) {
    var e;
    (e = n(this, Fe)) == null || e.updateComment(t.getData());
  }
  updatePopupColor(t) {
    var e;
    (e = n(this, Fe)) == null || e.updatePopupColor(t);
  }
  removeComment(t) {
    var e;
    (e = n(this, Fe)) == null || e.removeComments([t.uid]);
  }
  toggleComment(t, e, i = void 0) {
    var s;
    (s = n(this, Fe)) == null || s.toggleCommentPopup(t, e, i);
  }
  makeCommentColor(t, e) {
    var i;
    return t && ((i = n(this, Fe)) == null ? void 0 : i.makeCommentColor(t, e)) || null;
  }
  getCommentDialogElement() {
    var t;
    return ((t = n(this, Fe)) == null ? void 0 : t.dialogElement) || null;
  }
  async waitForEditorsRendered(t) {
    if (n(this, fe).has(t - 1))
      return;
    const {
      resolve: e,
      promise: i
    } = Promise.withResolvers(), s = (r) => {
      r.pageNumber === t && (this._eventBus._off("editorsrendered", s), e());
    };
    this._eventBus.on("editorsrendered", s), await i;
  }
  getSignature(t) {
    var e;
    (e = n(this, Zn)) == null || e.getSignature({
      uiManager: this,
      editor: t
    });
  }
  get signatureManager() {
    return n(this, Zn);
  }
  switchToMode(t, e) {
    this._eventBus.on("annotationeditormodechanged", e, {
      once: !0,
      signal: this._signal
    }), this._eventBus.dispatch("showannotationeditorui", {
      source: this,
      mode: t
    });
  }
  setPreference(t, e) {
    this._eventBus.dispatch("setpreference", {
      source: this,
      name: t,
      value: e
    });
  }
  onSetPreference({
    name: t,
    value: e
  }) {
    switch (t) {
      case "enableNewAltTextWhenAddingImage":
        m(this, zo, e);
        break;
    }
  }
  onPageChanging({
    pageNumber: t
  }) {
    m(this, jo, t - 1);
  }
  focusMainContainer() {
    n(this, Qs).focus();
  }
  findParent(t, e) {
    for (const i of n(this, fe).values()) {
      const {
        x: s,
        y: r,
        width: a,
        height: o
      } = i.div.getBoundingClientRect();
      if (t >= s && t <= s + a && e >= r && e <= r + o)
        return i;
    }
    return null;
  }
  disableUserSelect(t = !1) {
    n(this, oc).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    n(this, Jr).add(t);
  }
  removeShouldRescale(t) {
    n(this, Jr).delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    var e;
    this.commitOrRemove(), this.viewParameters.realScale = t * In.PDF_TO_CSS_UNITS;
    for (const i of n(this, Jr))
      i.onScaleChanging();
    (e = n(this, Vn)) == null || e.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: t
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = t;
  }
  highlightSelection(t = "", e = !1) {
    const i = document.getSelection();
    if (!i || i.isCollapsed)
      return;
    const {
      anchorNode: s,
      anchorOffset: r,
      focusNode: a,
      focusOffset: o
    } = i, l = i.toString(), d = x(this, Y, Zd).call(this, i).closest(".textLayer"), u = this.getSelectionBoxes(d);
    if (!u)
      return;
    i.empty();
    const g = x(this, Y, Qf).call(this, d), b = n(this, le) === ft.NONE, E = () => {
      const w = g == null ? void 0 : g.createAndAddNewEditor({
        x: 0,
        y: 0
      }, !1, {
        methodOfCreation: t,
        boxes: u,
        anchorNode: s,
        anchorOffset: r,
        focusNode: a,
        focusOffset: o,
        text: l
      });
      b && this.showAllEditors("highlight", !0, !0), e && (w == null || w.editComment());
    };
    if (b) {
      this.switchToMode(ft.HIGHLIGHT, E);
      return;
    }
    E();
  }
  commentSelection(t = "") {
    this.highlightSelection(t, !0);
  }
  getAndRemoveDataFromAnnotationStorage(t) {
    if (!n(this, Ii))
      return null;
    const e = `${jh}${t}`, i = n(this, Ii).getRawValue(e);
    return i && n(this, Ii).remove(e), i;
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && n(this, Ii) && !n(this, Ii).has(t.id) && n(this, Ii).setValue(t.id, t);
  }
  a11yAlert(t, e = null) {
    const i = n(this, lc);
    i && (i.setAttribute("data-l10n-id", t), e ? i.setAttribute("data-l10n-args", JSON.stringify(e)) : i.removeAttribute("data-l10n-args"));
  }
  blur() {
    if (this.isShiftKeyDown = !1, n(this, Yn) && (m(this, Yn, !1), x(this, Y, vh).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const e of n(this, kt))
      if (e.div.contains(t)) {
        m(this, Qr, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!n(this, Qr))
      return;
    const [t, e] = n(this, Qr);
    m(this, Qr, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), e.focus();
  }
  addEditListeners() {
    x(this, Y, Zf).call(this), x(this, Y, tp).call(this);
  }
  removeEditListeners() {
    x(this, Y, Sy).call(this), x(this, Y, ep).call(this);
  }
  dragOver(t) {
    for (const {
      type: e
    } of t.dataTransfer.items)
      for (const i of n(this, Ni))
        if (i.isHandlingMimeForPasting(e)) {
          t.dataTransfer.dropEffect = "copy", t.preventDefault();
          return;
        }
  }
  drop(t) {
    for (const e of t.dataTransfer.items)
      for (const i of n(this, Ni))
        if (i.isHandlingMimeForPasting(e.type)) {
          i.paste(e, this.currentLayer), t.preventDefault();
          return;
        }
  }
  copy(t) {
    var i;
    if (t.preventDefault(), (i = n(this, li)) == null || i.commitOrRemove(), !this.hasSelection)
      return;
    const e = [];
    for (const s of n(this, kt)) {
      const r = s.serialize(!0);
      r && e.push(r);
    }
    e.length !== 0 && t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
  }
  cut(t) {
    this.copy(t), this.delete();
  }
  async paste(t) {
    t.preventDefault();
    const {
      clipboardData: e
    } = t;
    for (const r of e.items)
      for (const a of n(this, Ni))
        if (a.isHandlingMimeForPasting(r.type)) {
          a.paste(r, this.currentLayer);
          return;
        }
    let i = e.getData("application/pdfjs");
    if (!i)
      return;
    try {
      i = JSON.parse(i);
    } catch (r) {
      pt(`paste: "${r.message}".`);
      return;
    }
    if (!Array.isArray(i))
      return;
    this.unselectAll();
    const s = this.currentLayer;
    try {
      const r = [];
      for (const l of i) {
        const c = await s.deserialize(l);
        if (!c)
          return;
        r.push(c);
      }
      const a = () => {
        for (const l of r)
          x(this, Y, ip).call(this, l);
        x(this, Y, sp).call(this, r);
      }, o = () => {
        for (const l of r)
          l.remove();
      };
      this.addCommands({
        cmd: a,
        undo: o,
        mustExec: !0
      });
    } catch (r) {
      pt(`paste: "${r.message}".`);
    }
  }
  keydown(t) {
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), n(this, le) !== ft.NONE && !this.isEditorHandlingKeyboard && Eo._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, n(this, Yn) && (m(this, Yn, !1), x(this, Y, vh).call(this, "main_toolbar")));
  }
  onEditingAction({
    name: t
  }) {
    switch (t) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[t]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
      case "commentSelection":
        this.commentSelection("context_menu");
        break;
    }
  }
  setEditingState(t) {
    t ? (x(this, Y, vy).call(this), x(this, Y, tp).call(this), x(this, Y, Ue).call(this, {
      isEditing: n(this, le) !== ft.NONE,
      isEmpty: x(this, Y, wh).call(this),
      hasSomethingToUndo: n(this, Fi).hasSomethingToUndo(),
      hasSomethingToRedo: n(this, Fi).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (x(this, Y, wy).call(this), x(this, Y, ep).call(this), x(this, Y, Ue).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!n(this, Ni)) {
      m(this, Ni, t);
      for (const e of n(this, Ni))
        x(this, Y, Vs).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return n(this, qu).id;
  }
  get currentLayer() {
    return n(this, fe).get(n(this, jo));
  }
  getLayer(t) {
    return n(this, fe).get(t);
  }
  get currentPageIndex() {
    return n(this, jo);
  }
  addLayer(t) {
    n(this, fe).set(t.pageIndex, t), n(this, Kn) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    n(this, fe).delete(t.pageIndex);
  }
  async updateMode(t, e = null, i = !1, s = !1, r = !1) {
    var a, o, l, c, d, u;
    if (n(this, le) !== t && !(n(this, Bi) && (await n(this, Bi).promise, !n(this, Bi)))) {
      if (m(this, Bi, Promise.withResolvers()), (a = n(this, Vn)) == null || a.commitOrRemove(), n(this, le) === ft.POPUP && ((o = n(this, Fe)) == null || o.hideSidebar()), (l = n(this, Fe)) == null || l.destroyPopup(), m(this, le, t), t === ft.NONE) {
        this.setEditingState(!1), x(this, Y, _y).call(this);
        for (const g of n(this, Qt).values())
          g.hideStandaloneCommentButton();
        (c = this._editorUndoBar) == null || c.hide(), this.toggleComment(null), n(this, Bi).resolve();
        return;
      }
      for (const g of n(this, Qt).values())
        g.addStandaloneCommentButton();
      t === ft.SIGNATURE && await ((d = n(this, Zn)) == null ? void 0 : d.loadSignatures()), this.setEditingState(!0), await x(this, Y, xy).call(this), this.unselectAll();
      for (const g of n(this, fe).values())
        g.updateMode(t);
      if (t === ft.POPUP) {
        n(this, No) || m(this, No, await n(this, Go).getAnnotationsByType(new Set(n(this, Ni).map((E) => E._editorType))));
        const g = /* @__PURE__ */ new Set(), b = [];
        for (const E of n(this, Qt).values()) {
          const {
            annotationElementId: w,
            hasComment: M,
            deleted: k
          } = E;
          w && g.add(w), M && !k && b.push(E.getData());
        }
        for (const E of n(this, No)) {
          const {
            id: w,
            popupRef: M,
            contentsObj: k
          } = E;
          M && (k != null && k.str) && !g.has(w) && !n(this, qn).has(w) && b.push(E);
        }
        (u = n(this, Fe)) == null || u.showSidebar(b);
      }
      if (!e) {
        i && this.addNewEditorFromKeyboard(), n(this, Bi).resolve();
        return;
      }
      for (const g of n(this, Qt).values())
        g.uid === e ? (this.setSelected(g), r ? g.editComment() : s ? g.enterInEditMode() : g.focus()) : g.unselect();
      n(this, Bi).resolve();
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t.mode !== n(this, le) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      ...t
    });
  }
  updateParams(t, e) {
    if (n(this, Ni)) {
      switch (t) {
        case At.CREATE:
          this.currentLayer.addNewEditor(e);
          return;
        case At.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (n(this, rc) || m(this, rc, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      if (this.hasSelection)
        for (const i of n(this, kt))
          i.updateParams(t, e);
      else
        for (const i of n(this, Ni))
          i.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, i = !1) {
    var r;
    for (const a of n(this, Qt).values())
      a.editorType === t && a.show(e);
    (((r = n(this, rc)) == null ? void 0 : r.get(At.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && x(this, Y, Vs).call(this, [[At.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (n(this, sc) !== t) {
      m(this, sc, t);
      for (const e of n(this, fe).values())
        t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
    }
  }
  *getEditors(t) {
    for (const e of n(this, Qt).values())
      e.pageIndex === t && (yield e);
  }
  getEditor(t) {
    return n(this, Qt).get(t);
  }
  addEditor(t) {
    n(this, Qt).set(t.id, t);
  }
  removeEditor(t) {
    var e, i;
    t.div.contains(document.activeElement) && (n(this, ys) && clearTimeout(n(this, ys)), m(this, ys, setTimeout(() => {
      this.focusMainContainer(), m(this, ys, null);
    }, 0))), n(this, Qt).delete(t.id), t.annotationElementId && ((e = n(this, Qn)) == null || e.delete(t.annotationElementId)), this.unselect(t), (!t.annotationElementId || !n(this, qn).has(t.annotationElementId)) && ((i = n(this, Ii)) == null || i.remove(t.id));
  }
  addDeletedAnnotationElement(t) {
    n(this, qn).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return n(this, qn).has(t);
  }
  removeDeletedAnnotationElement(t) {
    n(this, qn).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  setActiveEditor(t) {
    n(this, li) !== t && (m(this, li, t), t && x(this, Y, Vs).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    n(this, Y, Ey) === t && x(this, Y, Vs).call(this, t.propertiesToUpdate);
  }
  updateUIForDefaultProperties(t) {
    x(this, Y, Vs).call(this, t.defaultPropertiesToUpdate);
  }
  toggleSelected(t) {
    if (n(this, kt).has(t)) {
      n(this, kt).delete(t), t.unselect(), x(this, Y, Ue).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    n(this, kt).add(t), t.select(), x(this, Y, Vs).call(this, t.propertiesToUpdate), x(this, Y, Ue).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    var e;
    this.updateToolbar({
      mode: t.mode,
      editId: t.id
    }), (e = n(this, Vn)) == null || e.commitOrRemove();
    for (const i of n(this, kt))
      i !== t && i.unselect();
    n(this, kt).clear(), n(this, kt).add(t), t.select(), x(this, Y, Vs).call(this, t.propertiesToUpdate), x(this, Y, Ue).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(t) {
    return n(this, kt).has(t);
  }
  get firstSelectedEditor() {
    return n(this, kt).values().next().value;
  }
  unselect(t) {
    t.unselect(), n(this, kt).delete(t), x(this, Y, Ue).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return n(this, kt).size !== 0;
  }
  get isEnterHandled() {
    return n(this, kt).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    var t;
    n(this, Fi).undo(), x(this, Y, Ue).call(this, {
      hasSomethingToUndo: n(this, Fi).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: x(this, Y, wh).call(this)
    }), (t = this._editorUndoBar) == null || t.hide();
  }
  redo() {
    n(this, Fi).redo(), x(this, Y, Ue).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: n(this, Fi).hasSomethingToRedo(),
      isEmpty: x(this, Y, wh).call(this)
    });
  }
  addCommands(t) {
    n(this, Fi).add(t), x(this, Y, Ue).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: x(this, Y, wh).call(this)
    });
  }
  cleanUndoStack(t) {
    n(this, Fi).cleanType(t);
  }
  delete() {
    var r;
    this.commitOrRemove();
    const t = (r = this.currentLayer) == null ? void 0 : r.endDrawingSession(!0);
    if (!this.hasSelection && !t)
      return;
    const e = t ? [t] : [...n(this, kt)], i = () => {
      var a;
      (a = this._editorUndoBar) == null || a.show(s, e.length === 1 ? e[0].editorType : e.length);
      for (const o of e)
        o.remove();
    }, s = () => {
      for (const a of e)
        x(this, Y, ip).call(this, a);
    };
    this.addCommands({
      cmd: i,
      undo: s,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var t;
    (t = n(this, li)) == null || t.commitOrRemove();
  }
  hasSomethingToControl() {
    return n(this, li) || this.hasSelection;
  }
  selectAll() {
    for (const t of n(this, kt))
      t.commit();
    x(this, Y, sp).call(this, n(this, Qt).values());
  }
  unselectAll() {
    var t;
    if (!(n(this, li) && (n(this, li).commitOrRemove(), n(this, le) !== ft.NONE)) && !((t = n(this, Vn)) != null && t.commitOrRemove()) && this.hasSelection) {
      for (const e of n(this, kt))
        e.unselect();
      n(this, kt).clear(), x(this, Y, Ue).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, e, i = !1) {
    if (i || this.commitOrRemove(), !this.hasSelection)
      return;
    n(this, er)[0] += t, n(this, er)[1] += e;
    const [s, r] = n(this, er), a = [...n(this, kt)], o = 1e3;
    n(this, vs) && clearTimeout(n(this, vs)), m(this, vs, setTimeout(() => {
      m(this, vs, null), n(this, er)[0] = n(this, er)[1] = 0, this.addCommands({
        cmd: () => {
          for (const l of a)
            n(this, Qt).has(l.id) && (l.translateInPage(s, r), l.translationDone());
        },
        undo: () => {
          for (const l of a)
            n(this, Qt).has(l.id) && (l.translateInPage(-s, -r), l.translationDone());
        },
        mustExec: !1
      });
    }, o));
    for (const l of a)
      l.translateInPage(t, e), l.translationDone();
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), m(this, ms, /* @__PURE__ */ new Map());
      for (const t of n(this, kt))
        n(this, ms).set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
    }
  }
  endDragSession() {
    if (!n(this, ms))
      return !1;
    this.disableUserSelect(!1);
    const t = n(this, ms);
    m(this, ms, null);
    let e = !1;
    for (const [{
      x: s,
      y: r,
      pageIndex: a
    }, o] of t)
      o.newX = s, o.newY = r, o.newPageIndex = a, e || (e = s !== o.savedX || r !== o.savedY || a !== o.savedPageIndex);
    if (!e)
      return !1;
    const i = (s, r, a, o) => {
      if (n(this, Qt).has(s.id)) {
        const l = n(this, fe).get(o);
        l ? s._setParentAndPosition(l, r, a) : (s.pageIndex = o, s.x = r, s.y = a);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [s, {
          newX: r,
          newY: a,
          newPageIndex: o
        }] of t)
          i(s, r, a, o);
      },
      undo: () => {
        for (const [s, {
          savedX: r,
          savedY: a,
          savedPageIndex: o
        }] of t)
          i(s, r, a, o);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(t, e) {
    if (n(this, ms))
      for (const i of n(this, ms).keys())
        i.drag(t, e);
  }
  rebuild(t) {
    if (t.parent === null) {
      const e = this.getLayer(t.pageIndex);
      e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
    } else
      t.parent.addOrRebuild(t);
  }
  get isEditorHandlingKeyboard() {
    var t;
    return ((t = this.getActive()) == null ? void 0 : t.shouldGetKeyboardEvents()) || n(this, kt).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return n(this, li) === t;
  }
  getActive() {
    return n(this, li);
  }
  getMode() {
    return n(this, le);
  }
  isEditingMode() {
    return n(this, le) !== ft.NONE;
  }
  get imageManager() {
    return yt(this, "imageManager", new Kf());
  }
  getSelectionBoxes(t) {
    if (!t)
      return null;
    const e = document.getSelection();
    for (let c = 0, d = e.rangeCount; c < d; c++)
      if (!t.contains(e.getRangeAt(c).commonAncestorContainer))
        return null;
    const {
      x: i,
      y: s,
      width: r,
      height: a
    } = t.getBoundingClientRect();
    let o;
    switch (t.getAttribute("data-main-rotation")) {
      case "90":
        o = (c, d, u, g) => ({
          x: (d - s) / a,
          y: 1 - (c + u - i) / r,
          width: g / a,
          height: u / r
        });
        break;
      case "180":
        o = (c, d, u, g) => ({
          x: 1 - (c + u - i) / r,
          y: 1 - (d + g - s) / a,
          width: u / r,
          height: g / a
        });
        break;
      case "270":
        o = (c, d, u, g) => ({
          x: 1 - (d + g - s) / a,
          y: (c - i) / r,
          width: g / a,
          height: u / r
        });
        break;
      default:
        o = (c, d, u, g) => ({
          x: (c - i) / r,
          y: (d - s) / a,
          width: u / r,
          height: g / a
        });
        break;
    }
    const l = [];
    for (let c = 0, d = e.rangeCount; c < d; c++) {
      const u = e.getRangeAt(c);
      if (!u.collapsed)
        for (const {
          x: g,
          y: b,
          width: E,
          height: w
        } of u.getClientRects())
          E === 0 || w === 0 || l.push(o(g, b, E, w));
    }
    return l.length === 0 ? null : l;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e
  }) {
    (n(this, Ho) || m(this, Ho, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    var e;
    (e = n(this, Ho)) == null || e.delete(t);
  }
  renderAnnotationElement(t) {
    var s;
    const e = (s = n(this, Ho)) == null ? void 0 : s.get(t.data.id);
    if (!e)
      return;
    const i = n(this, Ii).getRawValue(e);
    i && (n(this, le) === ft.NONE && !i.hasBeenModified || i.renderAnnotationElement(t));
  }
  setMissingCanvas(t, e, i) {
    var r;
    const s = (r = n(this, Qn)) == null ? void 0 : r.get(t);
    s && (s.setCanvas(e, i), n(this, Qn).delete(t));
  }
  addMissingCanvas(t, e) {
    (n(this, Qn) || m(this, Qn, /* @__PURE__ */ new Map())).set(t, e);
  }
};
Fo = new WeakMap(), li = new WeakMap(), No = new WeakMap(), Qt = new WeakMap(), fe = new WeakMap(), Bo = new WeakMap(), Ii = new WeakMap(), Ho = new WeakMap(), Fi = new WeakMap(), Fe = new WeakMap(), Gn = new WeakMap(), Vn = new WeakMap(), jo = new WeakMap(), qn = new WeakMap(), ms = new WeakMap(), Ni = new WeakMap(), Jr = new WeakMap(), tc = new WeakMap(), ec = new WeakMap(), zo = new WeakMap(), ic = new WeakMap(), ys = new WeakMap(), Xn = new WeakMap(), $o = new WeakMap(), Yn = new WeakMap(), bs = new WeakMap(), qu = new WeakMap(), Kn = new WeakMap(), Uo = new WeakMap(), sc = new WeakMap(), Jn = new WeakMap(), Qr = new WeakMap(), Wo = new WeakMap(), Qn = new WeakMap(), nc = new WeakMap(), le = new WeakMap(), kt = new WeakMap(), Js = new WeakMap(), Zn = new WeakMap(), tr = new WeakMap(), rc = new WeakMap(), Go = new WeakMap(), ac = new WeakMap(), er = new WeakMap(), vs = new WeakMap(), Qs = new WeakMap(), oc = new WeakMap(), lc = new WeakMap(), Bi = new WeakMap(), Y = new WeakSet(), Zd = function({
  anchorNode: t
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, Qf = function(t) {
  const {
    currentLayer: e
  } = this;
  if (e.hasTextLayer(t))
    return e;
  for (const i of n(this, fe).values())
    if (i.hasTextLayer(t))
      return i;
  return null;
}, my = function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed)
    return;
  const i = x(this, Y, Zd).call(this, t).closest(".textLayer"), s = this.getSelectionBoxes(i);
  s && (n(this, bs) || m(this, bs, new Nw(this)), n(this, bs).show(i, s, this.direction === "ltr"));
}, yy = function() {
  var r, a, o;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    n(this, Js) && ((r = n(this, bs)) == null || r.hide(), m(this, Js, null), x(this, Y, Ue).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = t;
  if (e === n(this, Js))
    return;
  const s = x(this, Y, Zd).call(this, t).closest(".textLayer");
  if (!s) {
    n(this, Js) && ((a = n(this, bs)) == null || a.hide(), m(this, Js, null), x(this, Y, Ue).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((o = n(this, bs)) == null || o.hide(), m(this, Js, e), x(this, Y, Ue).call(this, {
    hasSelectedText: !0
  }), !(n(this, le) !== ft.HIGHLIGHT && n(this, le) !== ft.NONE) && (n(this, le) === ft.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), m(this, Yn, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const l = n(this, le) === ft.HIGHLIGHT ? x(this, Y, Qf).call(this, s) : null;
    if (l == null || l.toggleDrawing(), n(this, Uo)) {
      const c = new AbortController(), d = this.combinedSignal(c), u = (g) => {
        g.type === "pointerup" && g.button !== 0 || (c.abort(), l == null || l.toggleDrawing(!0), g.type === "pointerup" && x(this, Y, vh).call(this, "main_toolbar"));
      };
      window.addEventListener("pointerup", u, {
        signal: d
      }), window.addEventListener("blur", u, {
        signal: d
      });
    } else
      l == null || l.toggleDrawing(!0), x(this, Y, vh).call(this, "main_toolbar");
  }
}, vh = function(t = "") {
  n(this, le) === ft.HIGHLIGHT ? this.highlightSelection(t) : n(this, tc) && x(this, Y, my).call(this);
}, by = function() {
  document.addEventListener("selectionchange", x(this, Y, yy).bind(this), {
    signal: this._signal
  });
}, vy = function() {
  if (n(this, Xn))
    return;
  m(this, Xn, new AbortController());
  const t = this.combinedSignal(n(this, Xn));
  window.addEventListener("focus", this.focus.bind(this), {
    signal: t
  }), window.addEventListener("blur", this.blur.bind(this), {
    signal: t
  });
}, wy = function() {
  var t;
  (t = n(this, Xn)) == null || t.abort(), m(this, Xn, null);
}, Zf = function() {
  if (n(this, Jn))
    return;
  m(this, Jn, new AbortController());
  const t = this.combinedSignal(n(this, Jn));
  window.addEventListener("keydown", this.keydown.bind(this), {
    signal: t
  }), window.addEventListener("keyup", this.keyup.bind(this), {
    signal: t
  });
}, Sy = function() {
  var t;
  (t = n(this, Jn)) == null || t.abort(), m(this, Jn, null);
}, tp = function() {
  if (n(this, Gn))
    return;
  m(this, Gn, new AbortController());
  const t = this.combinedSignal(n(this, Gn));
  document.addEventListener("copy", this.copy.bind(this), {
    signal: t
  }), document.addEventListener("cut", this.cut.bind(this), {
    signal: t
  }), document.addEventListener("paste", this.paste.bind(this), {
    signal: t
  });
}, ep = function() {
  var t;
  (t = n(this, Gn)) == null || t.abort(), m(this, Gn, null);
}, Ay = function() {
  const t = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: t
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: t
  });
}, Ue = function(t) {
  Object.entries(t).some(([i, s]) => n(this, ac)[i] !== s) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(n(this, ac), t)
  }), n(this, le) === ft.HIGHLIGHT && t.hasSelectedEditor === !1 && x(this, Y, Vs).call(this, [[At.HIGHLIGHT_FREE, !0]]));
}, Vs = function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: t
  });
}, xy = async function() {
  if (!n(this, Kn)) {
    m(this, Kn, !0);
    const t = [];
    for (const e of n(this, fe).values())
      t.push(e.enable());
    await Promise.all(t);
    for (const e of n(this, Qt).values())
      e.enable();
  }
}, _y = function() {
  if (this.unselectAll(), n(this, Kn)) {
    m(this, Kn, !1);
    for (const t of n(this, fe).values())
      t.disable();
    for (const t of n(this, Qt).values())
      t.disable();
  }
}, ip = function(t) {
  const e = n(this, fe).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, Ey = function() {
  let t = null;
  for (t of n(this, kt))
    ;
  return t;
}, wh = function() {
  if (n(this, Qt).size === 0)
    return !0;
  if (n(this, Qt).size === 1)
    for (const t of n(this, Qt).values())
      return t.isEmpty();
  return !1;
}, sp = function(t) {
  for (const e of n(this, kt))
    e.unselect();
  n(this, kt).clear();
  for (const e of t)
    e.isEmpty() || (n(this, kt).add(e), e.select());
  x(this, Y, Ue).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, V(Eo, "TRANSLATE_SMALL", 1), V(Eo, "TRANSLATE_BIG", 10);
let Nr = Eo;
var me, ws, Yi, Vo, Ss, hi, qo, As, Ze, Zs, Zr, xs, ir, ls, Sh, tu;
const We = class We {
  constructor(t) {
    v(this, ls);
    v(this, me, null);
    v(this, ws, !1);
    v(this, Yi, null);
    v(this, Vo, null);
    v(this, Ss, null);
    v(this, hi, null);
    v(this, qo, !1);
    v(this, As, null);
    v(this, Ze, null);
    v(this, Zs, null);
    v(this, Zr, null);
    v(this, xs, !1);
    m(this, Ze, t), m(this, xs, t._uiManager.useNewAltTextFlow), n(We, ir) || m(We, ir, Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    }));
  }
  static initialize(t) {
    We._l10n ?? (We._l10n = t);
  }
  async render() {
    const t = m(this, Yi, document.createElement("button"));
    t.className = "altText", t.tabIndex = "0";
    const e = m(this, Vo, document.createElement("span"));
    t.append(e), n(this, xs) ? (t.classList.add("new"), t.setAttribute("data-l10n-id", n(We, ir).missing), e.setAttribute("data-l10n-id", n(We, ir)["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
    const i = n(this, Ze)._uiManager._signal;
    t.addEventListener("contextmenu", Ri, {
      signal: i
    }), t.addEventListener("pointerdown", (r) => r.stopPropagation(), {
      signal: i
    });
    const s = (r) => {
      r.preventDefault(), n(this, Ze)._uiManager.editAltText(n(this, Ze)), n(this, xs) && n(this, Ze)._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_clicked",
        data: {
          label: n(this, ls, Sh)
        }
      });
    };
    return t.addEventListener("click", s, {
      capture: !0,
      signal: i
    }), t.addEventListener("keydown", (r) => {
      r.target === t && r.key === "Enter" && (m(this, qo, !0), s(r));
    }, {
      signal: i
    }), await x(this, ls, tu).call(this), t;
  }
  finish() {
    n(this, Yi) && (n(this, Yi).focus({
      focusVisible: n(this, qo)
    }), m(this, qo, !1));
  }
  isEmpty() {
    return n(this, xs) ? n(this, me) === null : !n(this, me) && !n(this, ws);
  }
  hasData() {
    return n(this, xs) ? n(this, me) !== null || !!n(this, Zs) : this.isEmpty();
  }
  get guessedText() {
    return n(this, Zs);
  }
  async setGuessedText(t) {
    n(this, me) === null && (m(this, Zs, t), m(this, Zr, await We._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: t
    })), x(this, ls, tu).call(this));
  }
  toggleAltTextBadge(t = !1) {
    var e;
    if (!n(this, xs) || n(this, me)) {
      (e = n(this, As)) == null || e.remove(), m(this, As, null);
      return;
    }
    if (!n(this, As)) {
      const i = m(this, As, document.createElement("div"));
      i.className = "noAltTextBadge", n(this, Ze).div.append(i);
    }
    n(this, As).classList.toggle("hidden", !t);
  }
  serialize(t) {
    let e = n(this, me);
    return !t && n(this, Zs) === e && (e = n(this, Zr)), {
      altText: e,
      decorative: n(this, ws),
      guessedText: n(this, Zs),
      textWithDisclaimer: n(this, Zr)
    };
  }
  get data() {
    return {
      altText: n(this, me),
      decorative: n(this, ws)
    };
  }
  set data({
    altText: t,
    decorative: e,
    guessedText: i,
    textWithDisclaimer: s,
    cancel: r = !1
  }) {
    i && (m(this, Zs, i), m(this, Zr, s)), !(n(this, me) === t && n(this, ws) === e) && (r || (m(this, me, t), m(this, ws, e)), x(this, ls, tu).call(this));
  }
  toggle(t = !1) {
    n(this, Yi) && (!t && n(this, hi) && (clearTimeout(n(this, hi)), m(this, hi, null)), n(this, Yi).disabled = !t);
  }
  shown() {
    n(this, Ze)._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: n(this, ls, Sh)
      }
    });
  }
  destroy() {
    var t, e;
    (t = n(this, Yi)) == null || t.remove(), m(this, Yi, null), m(this, Vo, null), m(this, Ss, null), (e = n(this, As)) == null || e.remove(), m(this, As, null);
  }
};
me = new WeakMap(), ws = new WeakMap(), Yi = new WeakMap(), Vo = new WeakMap(), Ss = new WeakMap(), hi = new WeakMap(), qo = new WeakMap(), As = new WeakMap(), Ze = new WeakMap(), Zs = new WeakMap(), Zr = new WeakMap(), xs = new WeakMap(), ir = new WeakMap(), ls = new WeakSet(), Sh = function() {
  return n(this, me) && "added" || n(this, me) === null && this.guessedText && "review" || "missing";
}, tu = async function() {
  var s, r, a;
  const t = n(this, Yi);
  if (!t)
    return;
  if (n(this, xs)) {
    if (t.classList.toggle("done", !!n(this, me)), t.setAttribute("data-l10n-id", n(We, ir)[n(this, ls, Sh)]), (s = n(this, Vo)) == null || s.setAttribute("data-l10n-id", n(We, ir)[`${n(this, ls, Sh)}-label`]), !n(this, me)) {
      (r = n(this, Ss)) == null || r.remove();
      return;
    }
  } else {
    if (!n(this, me) && !n(this, ws)) {
      t.classList.remove("done"), (a = n(this, Ss)) == null || a.remove();
      return;
    }
    t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
  }
  let e = n(this, Ss);
  if (!e) {
    m(this, Ss, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${n(this, Ze).id}`;
    const o = 100, l = n(this, Ze)._uiManager._signal;
    l.addEventListener("abort", () => {
      clearTimeout(n(this, hi)), m(this, hi, null);
    }, {
      once: !0
    }), t.addEventListener("mouseenter", () => {
      m(this, hi, setTimeout(() => {
        m(this, hi, null), n(this, Ss).classList.add("show"), n(this, Ze)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, o));
    }, {
      signal: l
    }), t.addEventListener("mouseleave", () => {
      var c;
      n(this, hi) && (clearTimeout(n(this, hi)), m(this, hi, null)), (c = n(this, Ss)) == null || c.classList.remove("show");
    }, {
      signal: l
    });
  }
  n(this, ws) ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), e.textContent = n(this, me)), e.parentNode || t.append(e);
  const i = n(this, Ze).getElementForAltText();
  i == null || i.setAttribute("aria-describedby", e.id);
}, v(We, ir, null), V(We, "_l10n", null);
let Du = We;
var Ce, Hi, ta, $t, hc, ea, Ki, ia, sa, na, cc, np;
class $d {
  constructor(t) {
    v(this, cc);
    v(this, Ce, null);
    v(this, Hi, null);
    v(this, ta, !1);
    v(this, $t, null);
    v(this, hc, null);
    v(this, ea, null);
    v(this, Ki, null);
    v(this, ia, null);
    v(this, sa, !1);
    v(this, na, null);
    m(this, $t, t);
  }
  renderForToolbar() {
    const t = m(this, Hi, document.createElement("button"));
    return t.className = "comment", x(this, cc, np).call(this, t, !1);
  }
  renderForStandalone() {
    const t = m(this, Ce, document.createElement("button"));
    t.className = "annotationCommentButton";
    const e = n(this, $t).commentButtonPosition;
    if (e) {
      const {
        style: i
      } = t;
      i.insetInlineEnd = `calc(${100 * (n(this, $t)._uiManager.direction === "ltr" ? 1 - e[0] : e[0])}% - var(--comment-button-dim))`, i.top = `calc(${100 * e[1]}% - var(--comment-button-dim))`;
      const s = n(this, $t).commentButtonColor;
      s && (i.backgroundColor = s);
    }
    return x(this, cc, np).call(this, t, !0);
  }
  focusButton() {
    setTimeout(() => {
      var t;
      (t = n(this, Ce) ?? n(this, Hi)) == null || t.focus();
    }, 0);
  }
  onUpdatedColor() {
    if (!n(this, Ce))
      return;
    const t = n(this, $t).commentButtonColor;
    t && (n(this, Ce).style.backgroundColor = t), n(this, $t)._uiManager.updatePopupColor(n(this, $t));
  }
  get commentButtonWidth() {
    var t;
    return (((t = n(this, Ce)) == null ? void 0 : t.getBoundingClientRect().width) ?? 0) / n(this, $t).parent.boundingClientRect.width;
  }
  get commentPopupPositionInLayer() {
    if (n(this, na))
      return n(this, na);
    if (!n(this, Ce))
      return null;
    const {
      x: t,
      y: e,
      height: i
    } = n(this, Ce).getBoundingClientRect(), {
      x: s,
      y: r,
      width: a,
      height: o
    } = n(this, $t).parent.boundingClientRect;
    return [(t - s) / a, (e + i - r) / o];
  }
  set commentPopupPositionInLayer(t) {
    m(this, na, t);
  }
  hasDefaultPopupPosition() {
    return n(this, na) === null;
  }
  removeStandaloneCommentButton() {
    var t;
    (t = n(this, Ce)) == null || t.remove(), m(this, Ce, null);
  }
  removeToolbarCommentButton() {
    var t;
    (t = n(this, Hi)) == null || t.remove(), m(this, Hi, null);
  }
  setCommentButtonStates({
    selected: t,
    hasPopup: e
  }) {
    n(this, Ce) && (n(this, Ce).classList.toggle("selected", t), n(this, Ce).ariaExpanded = e);
  }
  edit(t) {
    const e = this.commentPopupPositionInLayer;
    let i, s;
    if (e)
      [i, s] = e;
    else {
      [i, s] = n(this, $t).commentButtonPosition;
      const {
        width: d,
        height: u,
        x: g,
        y: b
      } = n(this, $t);
      i = g + i * d, s = b + s * u;
    }
    const r = n(this, $t).parent.boundingClientRect, {
      x: a,
      y: o,
      width: l,
      height: c
    } = r;
    n(this, $t)._uiManager.editComment(n(this, $t), a + i * l, o + s * c, {
      ...t,
      parentDimensions: r
    });
  }
  finish() {
    n(this, Hi) && (n(this, Hi).focus({
      focusVisible: n(this, ta)
    }), m(this, ta, !1));
  }
  isDeleted() {
    return n(this, sa) || n(this, Ki) === "";
  }
  isEmpty() {
    return n(this, Ki) === null;
  }
  hasBeenEdited() {
    return this.isDeleted() || n(this, Ki) !== n(this, hc);
  }
  serialize() {
    return this.data;
  }
  get data() {
    return {
      text: n(this, Ki),
      richText: n(this, ea),
      date: n(this, ia),
      deleted: this.isDeleted()
    };
  }
  set data(t) {
    if (t !== n(this, Ki) && m(this, ea, null), t === null) {
      m(this, Ki, ""), m(this, sa, !0);
      return;
    }
    m(this, Ki, t), m(this, ia, /* @__PURE__ */ new Date()), m(this, sa, !1);
  }
  setInitialText(t, e = null) {
    m(this, hc, t), this.data = t, m(this, ia, null), m(this, ea, e);
  }
  shown() {
  }
  destroy() {
    var t, e;
    (t = n(this, Hi)) == null || t.remove(), m(this, Hi, null), (e = n(this, Ce)) == null || e.remove(), m(this, Ce, null), m(this, Ki, ""), m(this, ea, null), m(this, ia, null), m(this, $t, null), m(this, ta, !1), m(this, sa, !1);
  }
}
Ce = new WeakMap(), Hi = new WeakMap(), ta = new WeakMap(), $t = new WeakMap(), hc = new WeakMap(), ea = new WeakMap(), Ki = new WeakMap(), ia = new WeakMap(), sa = new WeakMap(), na = new WeakMap(), cc = new WeakSet(), np = function(t, e) {
  if (!n(this, $t)._uiManager.hasCommentManager())
    return null;
  t.tabIndex = "0", t.ariaHasPopup = "dialog", e ? (t.ariaControls = "commentPopup", t.setAttribute("data-l10n-id", "pdfjs-show-comment-button")) : (t.ariaControlsElements = [n(this, $t)._uiManager.getCommentDialogElement()], t.setAttribute("data-l10n-id", "pdfjs-editor-edit-comment-button"));
  const i = n(this, $t)._uiManager._signal;
  if (!(i instanceof AbortSignal) || i.aborted)
    return t;
  t.addEventListener("contextmenu", Ri, {
    signal: i
  }), e && (t.addEventListener("focusin", (r) => {
    n(this, $t)._focusEventsAllowed = !1, Kt(r);
  }, {
    capture: !0,
    signal: i
  }), t.addEventListener("focusout", (r) => {
    n(this, $t)._focusEventsAllowed = !0, Kt(r);
  }, {
    capture: !0,
    signal: i
  })), t.addEventListener("pointerdown", (r) => r.stopPropagation(), {
    signal: i
  });
  const s = (r) => {
    r.preventDefault(), t === n(this, Hi) ? this.edit() : n(this, $t).toggleComment(!0);
  };
  return t.addEventListener("click", s, {
    capture: !0,
    signal: i
  }), t.addEventListener("keydown", (r) => {
    r.target === t && r.key === "Enter" && (m(this, ta, !0), s(r));
  }, {
    signal: i
  }), t.addEventListener("pointerenter", () => {
    n(this, $t).toggleComment(!1, !0);
  }, {
    signal: i
  }), t.addEventListener("pointerleave", () => {
    n(this, $t).toggleComment(!1, !1);
  }, {
    signal: i
  }), t;
};
var Xo, ra, dc, uc, fc, pc, gc, tn, aa, en, oa, sn, Br, Cy, Ty, Py;
const Fg = class Fg {
  constructor({
    container: t,
    isPinchingDisabled: e = null,
    isPinchingStopped: i = null,
    onPinchStart: s = null,
    onPinching: r = null,
    onPinchEnd: a = null,
    signal: o
  }) {
    v(this, Br);
    v(this, Xo);
    v(this, ra, !1);
    v(this, dc, null);
    v(this, uc);
    v(this, fc);
    v(this, pc);
    v(this, gc);
    v(this, tn, null);
    v(this, aa);
    v(this, en, null);
    v(this, oa);
    v(this, sn, null);
    m(this, Xo, t), m(this, dc, i), m(this, uc, e), m(this, fc, s), m(this, pc, r), m(this, gc, a), m(this, oa, new AbortController()), m(this, aa, AbortSignal.any([o, n(this, oa).signal])), t.addEventListener("touchstart", x(this, Br, Cy).bind(this), {
      passive: !1,
      signal: n(this, aa)
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return 35 / cs.pixelRatio;
  }
  destroy() {
    var t, e;
    (t = n(this, oa)) == null || t.abort(), m(this, oa, null), (e = n(this, tn)) == null || e.abort(), m(this, tn, null);
  }
};
Xo = new WeakMap(), ra = new WeakMap(), dc = new WeakMap(), uc = new WeakMap(), fc = new WeakMap(), pc = new WeakMap(), gc = new WeakMap(), tn = new WeakMap(), aa = new WeakMap(), en = new WeakMap(), oa = new WeakMap(), sn = new WeakMap(), Br = new WeakSet(), Cy = function(t) {
  var s, r, a;
  if ((s = n(this, uc)) != null && s.call(this))
    return;
  if (t.touches.length === 1) {
    if (n(this, tn))
      return;
    const o = m(this, tn, new AbortController()), l = AbortSignal.any([n(this, aa), o.signal]), c = n(this, Xo), d = {
      capture: !0,
      signal: l,
      passive: !1
    }, u = (g) => {
      var b;
      g.pointerType === "touch" && ((b = n(this, tn)) == null || b.abort(), m(this, tn, null));
    };
    c.addEventListener("pointerdown", (g) => {
      g.pointerType === "touch" && (Kt(g), u(g));
    }, d), c.addEventListener("pointerup", u, d), c.addEventListener("pointercancel", u, d);
    return;
  }
  if (!n(this, sn)) {
    m(this, sn, new AbortController());
    const o = AbortSignal.any([n(this, aa), n(this, sn).signal]), l = n(this, Xo), c = {
      signal: o,
      capture: !1,
      passive: !1
    };
    l.addEventListener("touchmove", x(this, Br, Ty).bind(this), c);
    const d = x(this, Br, Py).bind(this);
    l.addEventListener("touchend", d, c), l.addEventListener("touchcancel", d, c), c.capture = !0, l.addEventListener("pointerdown", Kt, c), l.addEventListener("pointermove", Kt, c), l.addEventListener("pointercancel", Kt, c), l.addEventListener("pointerup", Kt, c), (r = n(this, fc)) == null || r.call(this);
  }
  if (Kt(t), t.touches.length !== 2 || (a = n(this, dc)) != null && a.call(this)) {
    m(this, en, null);
    return;
  }
  let [e, i] = t.touches;
  e.identifier > i.identifier && ([e, i] = [i, e]), m(this, en, {
    touch0X: e.screenX,
    touch0Y: e.screenY,
    touch1X: i.screenX,
    touch1Y: i.screenY
  });
}, Ty = function(t) {
  var p;
  if (!n(this, en) || t.touches.length !== 2)
    return;
  Kt(t);
  let [e, i] = t.touches;
  e.identifier > i.identifier && ([e, i] = [i, e]);
  const {
    screenX: s,
    screenY: r
  } = e, {
    screenX: a,
    screenY: o
  } = i, l = n(this, en), {
    touch0X: c,
    touch0Y: d,
    touch1X: u,
    touch1Y: g
  } = l, b = u - c, E = g - d, w = a - s, M = o - r, k = Math.hypot(w, M) || 1, L = Math.hypot(b, E) || 1;
  if (!n(this, ra) && Math.abs(L - k) <= Fg.MIN_TOUCH_DISTANCE_TO_PINCH)
    return;
  if (l.touch0X = s, l.touch0Y = r, l.touch1X = a, l.touch1Y = o, !n(this, ra)) {
    m(this, ra, !0);
    return;
  }
  const R = [(s + a) / 2, (r + o) / 2];
  (p = n(this, pc)) == null || p.call(this, R, L, k);
}, Py = function(t) {
  var e;
  t.touches.length >= 2 || (n(this, sn) && (n(this, sn).abort(), m(this, sn, null), (e = n(this, gc)) == null || e.call(this)), n(this, en) && (Kt(t), m(this, en, null), m(this, ra, !1)));
};
let Wh = Fg;
var la, Ji, Vt, Ft, nn, Yo, sr, mc, Te, ha, rn, _s, nr, yc, ca, ci, bc, da, an, Es, Ko, Jo, ji, ua, vc, Xu, lt, rp, wc, ap, eu, ky, Ry, op, iu, lp, My, Ly, Dy, hp, Oy, cp, Iy, Fy, Ny, dp, Ah;
const gt = class gt {
  constructor(t) {
    v(this, lt);
    v(this, la, null);
    v(this, Ji, null);
    v(this, Vt, null);
    v(this, Ft, null);
    v(this, nn, null);
    v(this, Yo, !1);
    v(this, sr, null);
    v(this, mc, "");
    v(this, Te, null);
    v(this, ha, null);
    v(this, rn, null);
    v(this, _s, null);
    v(this, nr, null);
    v(this, yc, "");
    v(this, ca, !1);
    v(this, ci, null);
    v(this, bc, !1);
    v(this, da, !1);
    v(this, an, !1);
    v(this, Es, null);
    v(this, Ko, 0);
    v(this, Jo, 0);
    v(this, ji, null);
    v(this, ua, null);
    V(this, "isSelected", !1);
    V(this, "_isCopy", !1);
    V(this, "_editToolbar", null);
    V(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    V(this, "_initialData", null);
    V(this, "_isVisible", !0);
    V(this, "_uiManager", null);
    V(this, "_focusEventsAllowed", !0);
    v(this, vc, !1);
    v(this, Xu, gt._zIndex++);
    this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null, this.annotationElementId = t.annotationElementId || null, this.creationDate = t.creationDate || /* @__PURE__ */ new Date(), this.modificationDate = t.modificationDate || null;
    const {
      rotation: e,
      rawDims: {
        pageWidth: i,
        pageHeight: s,
        pageX: r,
        pageY: a
      }
    } = this.parent.viewport;
    this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [i, s], this.pageTranslation = [r, a];
    const [o, l] = this.parentDimensions;
    this.x = t.x / o, this.y = t.y / l, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const t = gt.prototype._resizeWithKeyboard, e = Nr.TRANSLATE_SMALL, i = Nr.TRANSLATE_BIG;
    return yt(this, "_resizerKeyboardManager", new Dd([[["ArrowLeft", "mac+ArrowLeft"], t, {
      args: [-e, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, {
      args: [-i, 0]
    }], [["ArrowRight", "mac+ArrowRight"], t, {
      args: [e, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, {
      args: [i, 0]
    }], [["ArrowUp", "mac+ArrowUp"], t, {
      args: [0, -e]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, {
      args: [0, -i]
    }], [["ArrowDown", "mac+ArrowDown"], t, {
      args: [0, e]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, {
      args: [0, i]
    }], [["Escape", "mac+Escape"], gt.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  get mode() {
    return Object.getPrototypeOf(this).constructor._editorType;
  }
  static get isDrawer() {
    return !1;
  }
  static get _defaultLineColor() {
    return yt(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new jw({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e) {
    if (gt._l10n ?? (gt._l10n = t), gt._l10nResizer || (gt._l10nResizer = Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    })), gt._borderLineWidth !== -1)
      return;
    const i = getComputedStyle(document.documentElement);
    gt._borderLineWidth = parseFloat(i.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(t, e) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(t) {
    return !1;
  }
  static paste(t, e) {
    zt("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return n(this, vc);
  }
  set _isDraggable(t) {
    var e;
    m(this, vc, t), (e = this.div) == null || e.classList.toggle("draggable", t);
  }
  get uid() {
    return this.annotationElementId || this.id;
  }
  get isEnterHandled() {
    return !0;
  }
  center() {
    const [t, e] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * e / (t * 2), this.y += this.width * t / (e * 2);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * e / (t * 2), this.y -= this.width * t / (e * 2);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(t) {
    this._uiManager.addCommands(t);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = n(this, Xu);
  }
  setParent(t) {
    var e;
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : (x(this, lt, Ah).call(this), (e = n(this, _s)) == null || e.remove(), m(this, _s, null)), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (n(this, ca) ? m(this, ca, !1) : this.parent.setSelected(this));
  }
  focusout(t) {
    var i;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM)
      return;
    const e = t.relatedTarget;
    e != null && e.closest(`#${this.id}`) || (t.preventDefault(), (i = this.parent) != null && i.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.isInEditMode() && this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(t, e, i, s) {
    const [r, a] = this.parentDimensions;
    [i, s] = this.screenToPageTranslation(i, s), this.x = (t + i) / r, this.y = (e + s) / a, this.fixAndSetPosition();
  }
  _moveAfterPaste(t, e) {
    const [i, s] = this.parentDimensions;
    this.setAt(t * i, e * s, this.width * i, this.height * s), this._onTranslated();
  }
  translate(t, e) {
    x(this, lt, rp).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    n(this, ci) || m(this, ci, [this.x, this.y, this.width, this.height]), x(this, lt, rp).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  translationDone() {
    this._onTranslated(this.x, this.y);
  }
  drag(t, e) {
    n(this, ci) || m(this, ci, [this.x, this.y, this.width, this.height]);
    const {
      div: i,
      parentDimensions: [s, r]
    } = this;
    if (this.x += t / s, this.y += e / r, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: u,
        y: g
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, u, g) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: a,
      y: o
    } = this;
    const [l, c] = this.getBaseTranslation();
    a += l, o += c;
    const {
      style: d
    } = i;
    d.left = `${(100 * a).toFixed(2)}%`, d.top = `${(100 * o).toFixed(2)}%`, this._onTranslating(a, o), i.scrollIntoView({
      block: "nearest"
    });
  }
  _onTranslating(t, e) {
  }
  _onTranslated(t, e) {
  }
  get _hasBeenMoved() {
    return !!n(this, ci) && (n(this, ci)[0] !== this.x || n(this, ci)[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!n(this, ci) && (n(this, ci)[2] !== this.width || n(this, ci)[3] !== this.height);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions, {
      _borderLineWidth: i
    } = gt, s = i / t, r = i / e;
    switch (this.rotation) {
      case 90:
        return [-s, r];
      case 180:
        return [s, r];
      case 270:
        return [s, -r];
      default:
        return [-s, -r];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(t = this.rotation) {
    const {
      div: {
        style: e
      },
      pageDimensions: [i, s]
    } = this;
    let {
      x: r,
      y: a,
      width: o,
      height: l
    } = this;
    if (o *= i, l *= s, r *= i, a *= s, this._mustFixPosition)
      switch (t) {
        case 0:
          r = ze(r, 0, i - o), a = ze(a, 0, s - l);
          break;
        case 90:
          r = ze(r, 0, i - l), a = ze(a, o, s);
          break;
        case 180:
          r = ze(r, o, i), a = ze(a, l, s);
          break;
        case 270:
          r = ze(r, l, i), a = ze(a, 0, s - o);
          break;
      }
    this.x = r /= i, this.y = a /= s;
    const [c, d] = this.getBaseTranslation();
    r += c, a += d, e.left = `${(100 * r).toFixed(2)}%`, e.top = `${(100 * a).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(t, e) {
    var i;
    return x(i = gt, wc, ap).call(i, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var i;
    return x(i = gt, wc, ap).call(i, t, e, 360 - this.parentRotation);
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale: t,
      pageDimensions: [e, i]
    } = this;
    return [e * t, i * t];
  }
  setDims() {
    const {
      div: {
        style: t
      },
      width: e,
      height: i
    } = this;
    t.width = `${(100 * e).toFixed(2)}%`, t.height = `${(100 * i).toFixed(2)}%`;
  }
  getInitialTranslation() {
    return [0, 0];
  }
  _onResized() {
  }
  static _round(t) {
    return Math.round(t * 1e4) / 1e4;
  }
  _onResizing() {
  }
  altTextFinish() {
    var t;
    (t = n(this, Vt)) == null || t.finish();
  }
  get toolbarButtons() {
    return null;
  }
  async addEditToolbar() {
    if (this._editToolbar || n(this, da))
      return this._editToolbar;
    this._editToolbar = new Xf(this), this.div.append(this._editToolbar.render());
    const {
      toolbarButtons: t
    } = this;
    if (t)
      for (const [e, i] of t)
        await this._editToolbar.addButton(e, i);
    return this.hasComment || this._editToolbar.addButton("comment", this.addCommentButton()), this._editToolbar.addButton("delete"), this._editToolbar;
  }
  addCommentButtonInToolbar() {
    var t;
    (t = this._editToolbar) == null || t.addButtonBefore("comment", this.addCommentButton(), ".deleteButton");
  }
  removeCommentButtonFromToolbar() {
    var t;
    (t = this._editToolbar) == null || t.removeButton("comment");
  }
  removeEditToolbar() {
    var t, e;
    (t = this._editToolbar) == null || t.remove(), this._editToolbar = null, (e = n(this, Vt)) == null || e.destroy();
  }
  addContainer(t) {
    var i;
    const e = (i = this._editToolbar) == null ? void 0 : i.div;
    e ? e.before(t) : this.div.append(t);
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  createAltText() {
    return n(this, Vt) || (Du.initialize(gt._l10n), m(this, Vt, new Du(this)), n(this, la) && (n(this, Vt).data = n(this, la), m(this, la, null))), n(this, Vt);
  }
  get altTextData() {
    var t;
    return (t = n(this, Vt)) == null ? void 0 : t.data;
  }
  set altTextData(t) {
    n(this, Vt) && (n(this, Vt).data = t);
  }
  get guessedAltText() {
    var t;
    return (t = n(this, Vt)) == null ? void 0 : t.guessedText;
  }
  async setGuessedAltText(t) {
    var e;
    await ((e = n(this, Vt)) == null ? void 0 : e.setGuessedText(t));
  }
  serializeAltText(t) {
    var e;
    return (e = n(this, Vt)) == null ? void 0 : e.serialize(t);
  }
  hasAltText() {
    return !!n(this, Vt) && !n(this, Vt).isEmpty();
  }
  hasAltTextData() {
    var t;
    return ((t = n(this, Vt)) == null ? void 0 : t.hasData()) ?? !1;
  }
  focusCommentButton() {
    var t;
    (t = n(this, Ft)) == null || t.focusButton();
  }
  addCommentButton() {
    return n(this, Ft) || m(this, Ft, new $d(this));
  }
  addStandaloneCommentButton() {
    if (n(this, nn)) {
      this._uiManager.isEditingMode() && n(this, nn).classList.remove("hidden");
      return;
    }
    this.hasComment && (m(this, nn, n(this, Ft).renderForStandalone()), this.div.append(n(this, nn)));
  }
  removeStandaloneCommentButton() {
    n(this, Ft).removeStandaloneCommentButton(), m(this, nn, null);
  }
  hideStandaloneCommentButton() {
    var t;
    (t = n(this, nn)) == null || t.classList.add("hidden");
  }
  get comment() {
    const {
      data: {
        richText: t,
        text: e,
        date: i,
        deleted: s
      }
    } = n(this, Ft);
    return {
      text: e,
      richText: t,
      date: i,
      deleted: s,
      color: this.getNonHCMColor(),
      opacity: this.opacity ?? 1
    };
  }
  set comment(t) {
    n(this, Ft) || m(this, Ft, new $d(this)), n(this, Ft).data = t, this.hasComment ? (this.removeCommentButtonFromToolbar(), this.addStandaloneCommentButton(), this._uiManager.updateComment(this)) : (this.addCommentButtonInToolbar(), this.removeStandaloneCommentButton(), this._uiManager.removeComment(this));
  }
  setCommentData({
    comment: t,
    popupRef: e,
    richText: i
  }) {
    if (!e || (n(this, Ft) || m(this, Ft, new $d(this)), n(this, Ft).setInitialText(t, i), !this.annotationElementId))
      return;
    const s = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
    s && this.updateFromAnnotationLayer(s);
  }
  get hasEditedComment() {
    var t;
    return (t = n(this, Ft)) == null ? void 0 : t.hasBeenEdited();
  }
  get hasDeletedComment() {
    var t;
    return (t = n(this, Ft)) == null ? void 0 : t.isDeleted();
  }
  get hasComment() {
    return !!n(this, Ft) && !n(this, Ft).isEmpty() && !n(this, Ft).isDeleted();
  }
  async editComment(t) {
    n(this, Ft) || m(this, Ft, new $d(this)), n(this, Ft).edit(t);
  }
  toggleComment(t, e = void 0) {
    this.hasComment && this._uiManager.toggleComment(this, t, e);
  }
  setSelectedCommentButton(t) {
    n(this, Ft).setSelectedButton(t);
  }
  addComment(t) {
    if (this.hasEditedComment) {
      const [, , , s] = t.rect, [r] = this.pageDimensions, [a] = this.pageTranslation, o = a + r + 1, l = s - 100, c = o + 180;
      t.popup = {
        contents: this.comment.text,
        deleted: this.comment.deleted,
        rect: [o, l, c, s]
      };
    }
  }
  updateFromAnnotationLayer({
    popup: {
      contents: t,
      deleted: e
    }
  }) {
    n(this, Ft).data = e ? null : t;
  }
  get parentBoundingClientRect() {
    return this.parent.boundingClientRect;
  }
  render() {
    var a;
    const t = this.div = document.createElement("div");
    t.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), t.className = this.name, t.setAttribute("id", this.id), t.tabIndex = n(this, Yo) ? -1 : 0, t.setAttribute("role", "application"), this.defaultL10nId && t.setAttribute("data-l10n-id", this.defaultL10nId), this._isVisible || t.classList.add("hidden"), this.setInForeground(), x(this, lt, cp).call(this);
    const [e, i] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (t.style.maxWidth = `${(100 * i / e).toFixed(2)}%`, t.style.maxHeight = `${(100 * e / i).toFixed(2)}%`);
    const [s, r] = this.getInitialTranslation();
    return this.translate(s, r), py(this, t, ["keydown", "pointerdown", "dblclick"]), this.isResizable && this._uiManager._supportsPinchToZoom && (n(this, ua) || m(this, ua, new Wh({
      container: t,
      isPinchingDisabled: () => !this.isSelected,
      onPinchStart: x(this, lt, My).bind(this),
      onPinching: x(this, lt, Ly).bind(this),
      onPinchEnd: x(this, lt, Dy).bind(this),
      signal: this._uiManager._signal
    }))), this.addStandaloneCommentButton(), (a = this._uiManager._editorUndoBar) == null || a.hide(), t;
  }
  pointerdown(t) {
    const {
      isMac: e
    } = xe.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (m(this, ca, !0), this._isDraggable) {
      x(this, lt, Oy).call(this, t);
      return;
    }
    x(this, lt, hp).call(this, t);
  }
  _onStartDragging() {
  }
  _onStopDragging() {
  }
  moveInDOM() {
    n(this, Es) && clearTimeout(n(this, Es)), m(this, Es, setTimeout(() => {
      var t;
      m(this, Es, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(t, e, i) {
    t.changeParent(this), this.x = e, this.y = i, this.fixAndSetPosition(), this._onTranslated();
  }
  getRect(t, e, i = this.rotation) {
    const s = this.parentScale, [r, a] = this.pageDimensions, [o, l] = this.pageTranslation, c = t / s, d = e / s, u = this.x * r, g = this.y * a, b = this.width * r, E = this.height * a;
    switch (i) {
      case 0:
        return [u + c + o, a - g - d - E + l, u + c + b + o, a - g - d + l];
      case 90:
        return [u + d + o, a - g + c + l, u + d + E + o, a - g + c + b + l];
      case 180:
        return [u - c - b + o, a - g + d + l, u - c + o, a - g + d + E + l];
      case 270:
        return [u - d - E + o, a - g - c - b + l, u - d + o, a - g - c + l];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t, e) {
    const [i, s, r, a] = t, o = r - i, l = a - s;
    switch (this.rotation) {
      case 0:
        return [i, e - a, o, l];
      case 90:
        return [i, e - s, l, o];
      case 180:
        return [r, e - s, o, l];
      case 270:
        return [r, e - a, l, o];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getPDFRect() {
    return this.getRect(0, 0);
  }
  getNonHCMColor() {
    return this.color && gt._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
  }
  onUpdatedColor() {
    var t;
    (t = n(this, Ft)) == null || t.onUpdatedColor();
  }
  getData() {
    const {
      comment: {
        text: t,
        color: e,
        date: i,
        opacity: s,
        deleted: r,
        richText: a
      },
      uid: o,
      pageIndex: l,
      creationDate: c,
      modificationDate: d
    } = this;
    return {
      id: o,
      pageIndex: l,
      rect: this.getPDFRect(),
      richText: a,
      contentsObj: {
        str: t
      },
      creationDate: c,
      modificationDate: i || d,
      popupRef: !r,
      color: e,
      opacity: s
    };
  }
  onceAdded(t) {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    return this.isInEditMode() ? !1 : (this.parent.setEditingState(!1), m(this, da, !0), !0);
  }
  disableEditMode() {
    return this.isInEditMode() ? (this.parent.setEditingState(!0), m(this, da, !1), !0) : !1;
  }
  isInEditMode() {
    return n(this, da);
  }
  shouldGetKeyboardEvents() {
    return n(this, an);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  get isOnScreen() {
    const {
      top: t,
      left: e,
      bottom: i,
      right: s
    } = this.getClientDimensions(), {
      innerHeight: r,
      innerWidth: a
    } = window;
    return e < a && s > 0 && t < r && i > 0;
  }
  rebuild() {
    x(this, lt, cp).call(this);
  }
  rotate(t) {
  }
  resize() {
  }
  serializeDeleted() {
    var t;
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex,
      popupRef: ((t = this._initialData) == null ? void 0 : t.popupRef) || ""
    };
  }
  serialize(t = !1, e = null) {
    var i;
    return {
      annotationType: this.mode,
      pageIndex: this.pageIndex,
      rect: this.getPDFRect(),
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId,
      popupRef: ((i = this._initialData) == null ? void 0 : i.popupRef) || ""
    };
  }
  static async deserialize(t, e, i) {
    const s = new this.prototype.constructor({
      parent: e,
      id: e.getNextId(),
      uiManager: i,
      annotationElementId: t.annotationElementId,
      creationDate: t.creationDate,
      modificationDate: t.modificationDate
    });
    s.rotation = t.rotation, m(s, la, t.accessibilityData), s._isCopy = t.isCopy || !1;
    const [r, a] = s.pageDimensions, [o, l, c, d] = s.getRectInCurrentCoords(t.rect, a);
    return s.x = o / r, s.y = l / a, s.width = c / r, s.height = d / a, s;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    var t, e;
    if ((t = n(this, nr)) == null || t.abort(), m(this, nr, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), n(this, Es) && (clearTimeout(n(this, Es)), m(this, Es, null)), x(this, lt, Ah).call(this), this.removeEditToolbar(), n(this, ji)) {
      for (const i of n(this, ji).values())
        clearTimeout(i);
      m(this, ji, null);
    }
    this.parent = null, (e = n(this, ua)) == null || e.destroy(), m(this, ua, null);
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (x(this, lt, ky).call(this), n(this, Te).classList.remove("hidden"));
  }
  get toolbarPosition() {
    return null;
  }
  get commentButtonPosition() {
    return this._uiManager.direction === "ltr" ? [1, 0] : [0, 0];
  }
  get commentButtonPositionInPage() {
    const {
      commentButtonPosition: [t, e]
    } = this, [i, s, r, a] = this.getPDFRect();
    return [gt._round(i + (r - i) * t), gt._round(s + (a - s) * (1 - e))];
  }
  get commentButtonColor() {
    return this._uiManager.makeCommentColor(this.getNonHCMColor(), this.opacity);
  }
  get commentPopupPosition() {
    return n(this, Ft).commentPopupPositionInLayer;
  }
  set commentPopupPosition(t) {
    n(this, Ft).commentPopupPositionInLayer = t;
  }
  hasDefaultPopupPosition() {
    return n(this, Ft).hasDefaultPopupPosition();
  }
  get commentButtonWidth() {
    return n(this, Ft).commentButtonWidth;
  }
  get elementBeforePopup() {
    return this.div;
  }
  setCommentButtonStates(t) {
    n(this, Ft).setCommentButtonStates(t);
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), m(this, rn, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = n(this, Te).children;
    if (!n(this, Ji)) {
      m(this, Ji, Array.from(e));
      const a = x(this, lt, Iy).bind(this), o = x(this, lt, Fy).bind(this), l = this._uiManager._signal;
      for (const c of n(this, Ji)) {
        const d = c.getAttribute("data-resizer-name");
        c.setAttribute("role", "spinbutton"), c.addEventListener("keydown", a, {
          signal: l
        }), c.addEventListener("blur", o, {
          signal: l
        }), c.addEventListener("focus", x(this, lt, Ny).bind(this, d), {
          signal: l
        }), c.setAttribute("data-l10n-id", gt._l10nResizer[d]);
      }
    }
    const i = n(this, Ji)[0];
    let s = 0;
    for (const a of e) {
      if (a === i)
        break;
      s++;
    }
    const r = (360 - this.rotation + this.parentRotation) % 360 / 90 * (n(this, Ji).length / 4);
    if (r !== s) {
      if (r < s)
        for (let o = 0; o < s - r; o++)
          n(this, Te).append(n(this, Te).firstChild);
      else if (r > s)
        for (let o = 0; o < r - s; o++)
          n(this, Te).firstChild.before(n(this, Te).lastChild);
      let a = 0;
      for (const o of e) {
        const c = n(this, Ji)[a++].getAttribute("data-resizer-name");
        o.setAttribute("data-l10n-id", gt._l10nResizer[c]);
      }
    }
    x(this, lt, dp).call(this, 0), m(this, an, !0), n(this, Te).firstChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    n(this, an) && x(this, lt, lp).call(this, n(this, yc), {
      deltaX: t,
      deltaY: e,
      fromKeyboard: !0
    });
  }
  _stopResizingWithKeyboard() {
    x(this, lt, Ah).call(this), this.div.focus();
  }
  select() {
    var t, e, i;
    if (this.isSelected && this._editToolbar) {
      this._editToolbar.show();
      return;
    }
    if (this.isSelected = !0, this.makeResizable(), (t = this.div) == null || t.classList.add("selectedEditor"), !this._editToolbar) {
      this.addEditToolbar().then(() => {
        var s, r;
        (s = this.div) != null && s.classList.contains("selectedEditor") && ((r = this._editToolbar) == null || r.show());
      });
      return;
    }
    (e = this._editToolbar) == null || e.show(), (i = n(this, Vt)) == null || i.toggleAltTextBadge(!1);
  }
  focus() {
    this.div && !this.div.contains(document.activeElement) && setTimeout(() => {
      var t;
      return (t = this.div) == null ? void 0 : t.focus({
        preventScroll: !0
      });
    }, 0);
  }
  unselect() {
    var t, e, i, s, r;
    this.isSelected && (this.isSelected = !1, (t = n(this, Te)) == null || t.classList.add("hidden"), (e = this.div) == null || e.classList.remove("selectedEditor"), (i = this.div) != null && i.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (s = this._editToolbar) == null || s.hide(), (r = n(this, Vt)) == null || r.toggleAltTextBadge(!0), this.hasComment && this._uiManager.toggleComment(this, !1, !1));
  }
  updateParams(t, e) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  get canChangeContent() {
    return !1;
  }
  enterInEditMode() {
    this.canChangeContent && (this.enableEditMode(), this.div.focus());
  }
  dblclick(t) {
    t.target.nodeName !== "BUTTON" && (this.enterInEditMode(), this.parent.updateToolbar({
      mode: this.constructor._editorType,
      editId: this.id
    }));
  }
  getElementForAltText() {
    return this.div;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return n(this, bc);
  }
  set isEditing(t) {
    m(this, bc, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return !0;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(t, e = !1) {
    if (e) {
      n(this, ji) || m(this, ji, /* @__PURE__ */ new Map());
      const {
        action: i
      } = t;
      let s = n(this, ji).get(i);
      s && clearTimeout(s), s = setTimeout(() => {
        this._reportTelemetry(t), n(this, ji).delete(i), n(this, ji).size === 0 && m(this, ji, null);
      }, gt._telemetryTimeout), n(this, ji).set(i, s);
      return;
    }
    t.type || (t.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: t
      }
    });
  }
  show(t = this._isVisible) {
    this.div.classList.toggle("hidden", !t), this._isVisible = t;
  }
  enable() {
    this.div && (this.div.tabIndex = 0), m(this, Yo, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), m(this, Yo, !0);
  }
  updateFakeAnnotationElement(t) {
    if (!n(this, _s) && !this.deleted) {
      m(this, _s, t.addFakeAnnotation(this));
      return;
    }
    if (this.deleted) {
      n(this, _s).remove(), m(this, _s, null);
      return;
    }
    (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) && n(this, _s).updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    });
  }
  renderAnnotationElement(t) {
    if (this.deleted)
      return t.hide(), null;
    let e = t.container.querySelector(".annotationContent");
    if (!e)
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t.container.prepend(e);
    else if (e.nodeName === "CANVAS") {
      const i = e;
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), i.before(e);
    }
    return e;
  }
  resetAnnotationElement(t) {
    const {
      firstChild: e
    } = t.container;
    (e == null ? void 0 : e.nodeName) === "DIV" && e.classList.contains("annotationContent") && e.remove();
  }
};
la = new WeakMap(), Ji = new WeakMap(), Vt = new WeakMap(), Ft = new WeakMap(), nn = new WeakMap(), Yo = new WeakMap(), sr = new WeakMap(), mc = new WeakMap(), Te = new WeakMap(), ha = new WeakMap(), rn = new WeakMap(), _s = new WeakMap(), nr = new WeakMap(), yc = new WeakMap(), ca = new WeakMap(), ci = new WeakMap(), bc = new WeakMap(), da = new WeakMap(), an = new WeakMap(), Es = new WeakMap(), Ko = new WeakMap(), Jo = new WeakMap(), ji = new WeakMap(), ua = new WeakMap(), vc = new WeakMap(), Xu = new WeakMap(), lt = new WeakSet(), rp = function([t, e], i, s) {
  [i, s] = this.screenToPageTranslation(i, s), this.x += i / t, this.y += s / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
}, wc = new WeakSet(), ap = function(t, e, i) {
  switch (i) {
    case 90:
      return [e, -t];
    case 180:
      return [-t, -e];
    case 270:
      return [-e, t];
    default:
      return [t, e];
  }
}, eu = function(t) {
  switch (t) {
    case 90: {
      const [e, i] = this.pageDimensions;
      return [0, -e / i, i / e, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [e, i] = this.pageDimensions;
      return [0, e / i, -i / e, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, ky = function() {
  if (n(this, Te))
    return;
  m(this, Te, document.createElement("div")), n(this, Te).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e = this._uiManager._signal;
  for (const i of t) {
    const s = document.createElement("div");
    n(this, Te).append(s), s.classList.add("resizer", i), s.setAttribute("data-resizer-name", i), s.addEventListener("pointerdown", x(this, lt, Ry).bind(this, i), {
      signal: e
    }), s.addEventListener("contextmenu", Ri, {
      signal: e
    }), s.tabIndex = -1;
  }
  this.div.prepend(n(this, Te));
}, Ry = function(t, e) {
  var d;
  e.preventDefault();
  const {
    isMac: i
  } = xe.platform;
  if (e.button !== 0 || e.ctrlKey && i)
    return;
  (d = n(this, Vt)) == null || d.toggle(!1);
  const s = this._isDraggable;
  this._isDraggable = !1, m(this, ha, [e.screenX, e.screenY]);
  const r = new AbortController(), a = this._uiManager.combinedSignal(r);
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", x(this, lt, lp).bind(this, t), {
    passive: !0,
    capture: !0,
    signal: a
  }), window.addEventListener("touchmove", Kt, {
    passive: !1,
    signal: a
  }), window.addEventListener("contextmenu", Ri, {
    signal: a
  }), m(this, rn, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  });
  const o = this.parent.div.style.cursor, l = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const c = () => {
    var u;
    r.abort(), this.parent.togglePointerEvents(!0), (u = n(this, Vt)) == null || u.toggle(!0), this._isDraggable = s, this.parent.div.style.cursor = o, this.div.style.cursor = l, x(this, lt, iu).call(this);
  };
  window.addEventListener("pointerup", c, {
    signal: a
  }), window.addEventListener("blur", c, {
    signal: a
  });
}, op = function(t, e, i, s) {
  this.width = i, this.height = s, this.x = t, this.y = e, this.setDims(), this.fixAndSetPosition(), this._onResized();
}, iu = function() {
  if (!n(this, rn))
    return;
  const {
    savedX: t,
    savedY: e,
    savedWidth: i,
    savedHeight: s
  } = n(this, rn);
  m(this, rn, null);
  const r = this.x, a = this.y, o = this.width, l = this.height;
  r === t && a === e && o === i && l === s || this.addCommands({
    cmd: x(this, lt, op).bind(this, r, a, o, l),
    undo: x(this, lt, op).bind(this, t, e, i, s),
    mustExec: !0
  });
}, lp = function(t, e) {
  const [i, s] = this.parentDimensions, r = this.x, a = this.y, o = this.width, l = this.height, c = gt.MIN_SIZE / i, d = gt.MIN_SIZE / s, u = x(this, lt, eu).call(this, this.rotation), g = (z, S) => [u[0] * z + u[2] * S, u[1] * z + u[3] * S], b = x(this, lt, eu).call(this, 360 - this.rotation), E = (z, S) => [b[0] * z + b[2] * S, b[1] * z + b[3] * S];
  let w, M, k = !1, L = !1;
  switch (t) {
    case "topLeft":
      k = !0, w = (z, S) => [0, 0], M = (z, S) => [z, S];
      break;
    case "topMiddle":
      w = (z, S) => [z / 2, 0], M = (z, S) => [z / 2, S];
      break;
    case "topRight":
      k = !0, w = (z, S) => [z, 0], M = (z, S) => [0, S];
      break;
    case "middleRight":
      L = !0, w = (z, S) => [z, S / 2], M = (z, S) => [0, S / 2];
      break;
    case "bottomRight":
      k = !0, w = (z, S) => [z, S], M = (z, S) => [0, 0];
      break;
    case "bottomMiddle":
      w = (z, S) => [z / 2, S], M = (z, S) => [z / 2, 0];
      break;
    case "bottomLeft":
      k = !0, w = (z, S) => [0, S], M = (z, S) => [z, 0];
      break;
    case "middleLeft":
      L = !0, w = (z, S) => [0, S / 2], M = (z, S) => [z, S / 2];
      break;
  }
  const R = w(o, l), p = M(o, l);
  let f = g(...p);
  const y = gt._round(r + f[0]), A = gt._round(a + f[1]);
  let T = 1, P = 1, C, D;
  if (e.fromKeyboard)
    ({
      deltaX: C,
      deltaY: D
    } = e);
  else {
    const {
      screenX: z,
      screenY: S
    } = e, [K, F] = n(this, ha);
    [C, D] = this.screenToPageTranslation(z - K, S - F), n(this, ha)[0] = z, n(this, ha)[1] = S;
  }
  if ([C, D] = E(C / i, D / s), k) {
    const z = Math.hypot(o, l);
    T = P = Math.max(Math.min(Math.hypot(p[0] - R[0] - C, p[1] - R[1] - D) / z, 1 / o, 1 / l), c / o, d / l);
  } else L ? T = ze(Math.abs(p[0] - R[0] - C), c, 1) / o : P = ze(Math.abs(p[1] - R[1] - D), d, 1) / l;
  const N = gt._round(o * T), I = gt._round(l * P);
  f = g(...M(N, I));
  const B = y - f[0], j = A - f[1];
  n(this, ci) || m(this, ci, [this.x, this.y, this.width, this.height]), this.width = N, this.height = I, this.x = B, this.y = j, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, My = function() {
  var t;
  m(this, rn, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  }), (t = n(this, Vt)) == null || t.toggle(!1), this.parent.togglePointerEvents(!1);
}, Ly = function(t, e, i) {
  let r = 0.7 * (i / e) + 1 - 0.7;
  if (r === 1)
    return;
  const a = x(this, lt, eu).call(this, this.rotation), o = (y, A) => [a[0] * y + a[2] * A, a[1] * y + a[3] * A], [l, c] = this.parentDimensions, d = this.x, u = this.y, g = this.width, b = this.height, E = gt.MIN_SIZE / l, w = gt.MIN_SIZE / c;
  r = Math.max(Math.min(r, 1 / g, 1 / b), E / g, w / b);
  const M = gt._round(g * r), k = gt._round(b * r);
  if (M === g && k === b)
    return;
  n(this, ci) || m(this, ci, [d, u, g, b]);
  const L = o(g / 2, b / 2), R = gt._round(d + L[0]), p = gt._round(u + L[1]), f = o(M / 2, k / 2);
  this.x = R - f[0], this.y = p - f[1], this.width = M, this.height = k, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, Dy = function() {
  var t;
  (t = n(this, Vt)) == null || t.toggle(!0), this.parent.togglePointerEvents(!0), x(this, lt, iu).call(this);
}, hp = function(t) {
  const {
    isMac: e
  } = xe.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, Oy = function(t) {
  const {
    isSelected: e
  } = this;
  this._uiManager.setUpDragSession();
  let i = !1;
  const s = new AbortController(), r = this._uiManager.combinedSignal(s), a = {
    capture: !0,
    passive: !1,
    signal: r
  }, o = (c) => {
    s.abort(), m(this, sr, null), m(this, ca, !1), this._uiManager.endDragSession() || x(this, lt, hp).call(this, c), i && this._onStopDragging();
  };
  e && (m(this, Ko, t.clientX), m(this, Jo, t.clientY), m(this, sr, t.pointerId), m(this, mc, t.pointerType), window.addEventListener("pointermove", (c) => {
    i || (i = !0, this._uiManager.toggleComment(this, !0, !1), this._onStartDragging());
    const {
      clientX: d,
      clientY: u,
      pointerId: g
    } = c;
    if (g !== n(this, sr)) {
      Kt(c);
      return;
    }
    const [b, E] = this.screenToPageTranslation(d - n(this, Ko), u - n(this, Jo));
    m(this, Ko, d), m(this, Jo, u), this._uiManager.dragSelectedEditors(b, E);
  }, a), window.addEventListener("touchmove", Kt, a), window.addEventListener("pointerdown", (c) => {
    c.pointerType === n(this, mc) && (n(this, ua) || c.isPrimary) && o(c), Kt(c);
  }, a));
  const l = (c) => {
    if (!n(this, sr) || n(this, sr) === c.pointerId) {
      o(c);
      return;
    }
    Kt(c);
  };
  window.addEventListener("pointerup", l, {
    signal: r
  }), window.addEventListener("blur", l, {
    signal: r
  });
}, cp = function() {
  if (n(this, nr) || !this.div)
    return;
  m(this, nr, new AbortController());
  const t = this._uiManager.combinedSignal(n(this, nr));
  this.div.addEventListener("focusin", this.focusin.bind(this), {
    signal: t
  }), this.div.addEventListener("focusout", this.focusout.bind(this), {
    signal: t
  });
}, Iy = function(t) {
  gt._resizerKeyboardManager.exec(this, t);
}, Fy = function(t) {
  var e;
  n(this, an) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== n(this, Te) && x(this, lt, Ah).call(this);
}, Ny = function(t) {
  m(this, yc, n(this, an) ? t : "");
}, dp = function(t) {
  if (n(this, Ji))
    for (const e of n(this, Ji))
      e.tabIndex = t;
}, Ah = function() {
  m(this, an, !1), x(this, lt, dp).call(this, -1), x(this, lt, iu).call(this);
}, v(gt, wc), V(gt, "_l10n", null), V(gt, "_l10nResizer", null), V(gt, "_borderLineWidth", -1), V(gt, "_colorManager", new Jf()), V(gt, "_zIndex", 1), V(gt, "_telemetryTimeout", 1e3);
let Ut = gt;
class jw extends Ut {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return this.serializeDeleted();
  }
}
const hm = 3285377520, Mi = 4294901760, ps = 65535;
class By {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : hm, this.h2 = t ? t & 4294967295 : hm;
  }
  update(t) {
    let e, i;
    if (typeof t == "string") {
      e = new Uint8Array(t.length * 2), i = 0;
      for (let w = 0, M = t.length; w < M; w++) {
        const k = t.charCodeAt(w);
        k <= 255 ? e[i++] = k : (e[i++] = k >>> 8, e[i++] = k & 255);
      }
    } else if (ArrayBuffer.isView(t))
      e = t.slice(), i = e.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const s = i >> 2, r = i - s * 4, a = new Uint32Array(e.buffer, 0, s);
    let o = 0, l = 0, c = this.h1, d = this.h2;
    const u = 3432918353, g = 461845907, b = u & ps, E = g & ps;
    for (let w = 0; w < s; w++)
      w & 1 ? (o = a[w], o = o * u & Mi | o * b & ps, o = o << 15 | o >>> 17, o = o * g & Mi | o * E & ps, c ^= o, c = c << 13 | c >>> 19, c = c * 5 + 3864292196) : (l = a[w], l = l * u & Mi | l * b & ps, l = l << 15 | l >>> 17, l = l * g & Mi | l * E & ps, d ^= l, d = d << 13 | d >>> 19, d = d * 5 + 3864292196);
    switch (o = 0, r) {
      case 3:
        o ^= e[s * 4 + 2] << 16;
      case 2:
        o ^= e[s * 4 + 1] << 8;
      case 1:
        o ^= e[s * 4], o = o * u & Mi | o * b & ps, o = o << 15 | o >>> 17, o = o * g & Mi | o * E & ps, s & 1 ? c ^= o : d ^= o;
    }
    this.h1 = c, this.h2 = d;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & Mi | t * 36045 & ps, e = e * 4283543511 & Mi | ((e << 16 | t >>> 16) * 2950163797 & Mi) >>> 16, t ^= e >>> 1, t = t * 444984403 & Mi | t * 60499 & ps, e = e * 3301882366 & Mi | ((e << 16 | t >>> 16) * 3120437893 & Mi) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
}
const up = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var fa, pa, on, Pe, Yu, Hy;
class _g {
  constructor() {
    v(this, Yu);
    v(this, fa, !1);
    v(this, pa, null);
    v(this, on, null);
    v(this, Pe, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(t, e) {
    const i = n(this, Pe).get(t);
    return i === void 0 ? e : Object.assign(e, i);
  }
  getRawValue(t) {
    return n(this, Pe).get(t);
  }
  remove(t) {
    const e = n(this, Pe).get(t);
    if (e !== void 0 && (e instanceof Ut && n(this, on).delete(e.annotationElementId), n(this, Pe).delete(t), n(this, Pe).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function")) {
      for (const i of n(this, Pe).values())
        if (i instanceof Ut)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    const i = n(this, Pe).get(t);
    let s = !1;
    if (i !== void 0)
      for (const [r, a] of Object.entries(e))
        i[r] !== a && (s = !0, i[r] = a);
    else
      s = !0, n(this, Pe).set(t, e);
    s && x(this, Yu, Hy).call(this), e instanceof Ut && ((n(this, on) || m(this, on, /* @__PURE__ */ new Map())).set(e.annotationElementId, e), typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type));
  }
  has(t) {
    return n(this, Pe).has(t);
  }
  get size() {
    return n(this, Pe).size;
  }
  resetModified() {
    n(this, fa) && (m(this, fa, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new jy(this);
  }
  get serializable() {
    if (n(this, Pe).size === 0)
      return up;
    const t = /* @__PURE__ */ new Map(), e = new By(), i = [], s = /* @__PURE__ */ Object.create(null);
    let r = !1;
    for (const [a, o] of n(this, Pe)) {
      const l = o instanceof Ut ? o.serialize(!1, s) : o;
      l && (t.set(a, l), e.update(`${a}:${JSON.stringify(l)}`), r || (r = !!l.bitmap));
    }
    if (r)
      for (const a of t.values())
        a.bitmap && i.push(a.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: i
    } : up;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    let i = 0, s = 0;
    for (const r of n(this, Pe).values()) {
      if (!(r instanceof Ut)) {
        r.popup && (r.popup.deleted ? s += 1 : i += 1);
        continue;
      }
      r.isCommentDeleted ? s += 1 : r.hasEditedComment && (i += 1);
      const a = r.telemetryFinalData;
      if (!a)
        continue;
      const {
        type: o
      } = a;
      e.has(o) || e.set(o, Object.getPrototypeOf(r).constructor), t || (t = /* @__PURE__ */ Object.create(null));
      const l = t[o] || (t[o] = /* @__PURE__ */ new Map());
      for (const [c, d] of Object.entries(a)) {
        if (c === "type")
          continue;
        let u = l.get(c);
        u || (u = /* @__PURE__ */ new Map(), l.set(c, u));
        const g = u.get(d) ?? 0;
        u.set(d, g + 1);
      }
    }
    if ((s > 0 || i > 0) && (t || (t = /* @__PURE__ */ Object.create(null)), t.comments = {
      deleted: s,
      edited: i
    }), !t)
      return null;
    for (const [r, a] of e)
      t[r] = a.computeTelemetryFinalData(t[r]);
    return t;
  }
  resetModifiedIds() {
    m(this, pa, null);
  }
  updateEditor(t, e) {
    var s;
    const i = (s = n(this, on)) == null ? void 0 : s.get(t);
    return i ? (i.updateFromAnnotationLayer(e), !0) : !1;
  }
  getEditor(t) {
    var e;
    return ((e = n(this, on)) == null ? void 0 : e.get(t)) || null;
  }
  get modifiedIds() {
    if (n(this, pa))
      return n(this, pa);
    const t = [];
    if (n(this, on))
      for (const e of n(this, on).values())
        e.serialize() && t.push(e.annotationElementId);
    return m(this, pa, {
      ids: new Set(t),
      hash: t.join(",")
    });
  }
  [Symbol.iterator]() {
    return n(this, Pe).entries();
  }
}
fa = new WeakMap(), pa = new WeakMap(), on = new WeakMap(), Pe = new WeakMap(), Yu = new WeakSet(), Hy = function() {
  n(this, fa) || (m(this, fa, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var Sc;
class jy extends _g {
  constructor(e) {
    super();
    v(this, Sc);
    const {
      map: i,
      hash: s,
      transfer: r
    } = e.serializable, a = structuredClone(i, r ? {
      transfer: r
    } : null);
    m(this, Sc, {
      map: a,
      hash: s,
      transfer: r
    });
  }
  get print() {
    zt("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return n(this, Sc);
  }
  get modifiedIds() {
    return yt(this, "modifiedIds", {
      ids: /* @__PURE__ */ new Set(),
      hash: ""
    });
  }
}
Sc = new WeakMap();
var Qo;
class zw {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null
  }) {
    v(this, Qo, /* @__PURE__ */ new Set());
    this._document = t, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }
  addNativeFontFace(t) {
    this.nativeFontFaces.add(t), this._document.fonts.add(t);
  }
  removeNativeFontFace(t) {
    this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
  }
  insertRule(t) {
    this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
    const e = this.styleElement.sheet;
    e.insertRule(t, e.cssRules.length);
  }
  clear() {
    for (const t of this.nativeFontFaces)
      this._document.fonts.delete(t);
    this.nativeFontFaces.clear(), n(this, Qo).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    disableFontFace: e,
    _inspectFont: i
  }) {
    if (!(!t || n(this, Qo).has(t.loadedName))) {
      if (xt(!e, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: s,
          src: r,
          style: a
        } = t, o = new FontFace(s, r, a);
        this.addNativeFontFace(o);
        try {
          await o.load(), n(this, Qo).add(s), i == null || i(t);
        } catch {
          pt(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(o);
        }
        return;
      }
      zt("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(t) {
    if (t.attached || t.missingFile && !t.systemFontInfo)
      return;
    if (t.attached = !0, t.systemFontInfo) {
      await this.loadSystemFont(t);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const i = t.createNativeFontFace();
      if (i) {
        this.addNativeFontFace(i);
        try {
          await i.loaded;
        } catch (s) {
          throw pt(`Failed to load font '${i.family}': '${s}'.`), t.disableFontFace = !0, s;
        }
      }
      return;
    }
    const e = t.createFontFaceRule();
    if (e) {
      if (this.insertRule(e), this.isSyncFontLoadingSupported)
        return;
      await new Promise((i) => {
        const s = this._queueLoadingCallback(i);
        this._prepareFontLoadEvent(t, s);
      });
    }
  }
  get isFontLoadingAPISupported() {
    var e;
    const t = !!((e = this._document) != null && e.fonts);
    return yt(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    return yt(this, "isSyncFontLoadingSupported", Xe || xe.platform.isFirefox);
  }
  _queueLoadingCallback(t) {
    function e() {
      for (xt(!s.done, "completeRequest() cannot be called twice."), s.done = !0; i.length > 0 && i[0].done; ) {
        const r = i.shift();
        setTimeout(r.callback, 0);
      }
    }
    const {
      loadingRequests: i
    } = this, s = {
      done: !1,
      complete: e,
      callback: t
    };
    return i.push(s), s;
  }
  get _loadTestFont() {
    const t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return yt(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, e) {
    function i(p, f) {
      return p.charCodeAt(f) << 24 | p.charCodeAt(f + 1) << 16 | p.charCodeAt(f + 2) << 8 | p.charCodeAt(f + 3) & 255;
    }
    function s(p, f, y, A) {
      const T = p.substring(0, f), P = p.substring(f + y);
      return T + A + P;
    }
    let r, a;
    const o = this._document.createElement("canvas");
    o.width = 1, o.height = 1;
    const l = o.getContext("2d");
    let c = 0;
    function d(p, f) {
      if (++c > 30) {
        pt("Load test font never loaded."), f();
        return;
      }
      if (l.font = "30px " + p, l.fillText(".", 0, 20), l.getImageData(0, 0, 1, 1).data[3] > 0) {
        f();
        return;
      }
      setTimeout(d.bind(null, p, f));
    }
    const u = `lt${Date.now()}${this.loadTestFontId++}`;
    let g = this._loadTestFont;
    g = s(g, 976, u.length, u);
    const E = 16, w = 1482184792;
    let M = i(g, E);
    for (r = 0, a = u.length - 3; r < a; r += 4)
      M = M - w + i(u, r) | 0;
    r < u.length && (M = M - w + i(u + "XXX", r) | 0), g = s(g, E, 4, Pw(M));
    const k = `url(data:font/opentype;base64,${btoa(g)});`, L = `@font-face {font-family:"${u}";src:${k}}`;
    this.insertRule(L);
    const R = this._document.createElement("div");
    R.style.visibility = "hidden", R.style.width = R.style.height = "10px", R.style.position = "absolute", R.style.top = R.style.left = "0px";
    for (const p of [t.loadedName, u]) {
      const f = this._document.createElement("span");
      f.textContent = "Hi", f.style.fontFamily = p, R.append(f);
    }
    this._document.body.append(R), d(u, () => {
      R.remove(), e.complete();
    });
  }
}
Qo = new WeakMap();
var Mt;
class $w {
  constructor(t, e = null, i, s) {
    v(this, Mt);
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null), m(this, Mt, t), this._inspectFont = e, i && Object.assign(this, i), s && (this.charProcOperatorList = s);
  }
  createNativeFontFace() {
    var e;
    if (!this.data || this.disableFontFace)
      return null;
    let t;
    if (!this.cssFontInfo)
      t = new FontFace(this.loadedName, this.data, {});
    else {
      const i = {
        weight: this.cssFontInfo.fontWeight
      };
      this.cssFontInfo.italicAngle && (i.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(this.cssFontInfo.fontFamily, this.data, i);
    }
    return (e = this._inspectFont) == null || e.call(this, this), t;
  }
  createFontFaceRule() {
    var i;
    if (!this.data || this.disableFontFace)
      return null;
    const t = `url(data:${this.mimetype};base64,${iy(this.data)});`;
    let e;
    if (!this.cssFontInfo)
      e = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
    else {
      let s = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (s += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${s}src:${t}}`;
    }
    return (i = this._inspectFont) == null || i.call(this, this, t), e;
  }
  getPathGenerator(t, e) {
    if (this.compiledGlyphs[e] !== void 0)
      return this.compiledGlyphs[e];
    const i = this.loadedName + "_path_" + e;
    let s;
    try {
      s = t.get(i);
    } catch (a) {
      pt(`getPathGenerator - ignoring character: "${a}".`);
    }
    const r = new Path2D(s || "");
    return this.fontExtraProperties || t.delete(i), this.compiledGlyphs[e] = r;
  }
  get black() {
    return n(this, Mt).black;
  }
  get bold() {
    return n(this, Mt).bold;
  }
  get disableFontFace() {
    return n(this, Mt).disableFontFace ?? !1;
  }
  get fontExtraProperties() {
    return n(this, Mt).fontExtraProperties ?? !1;
  }
  get isInvalidPDFjsFont() {
    return n(this, Mt).isInvalidPDFjsFont;
  }
  get isType3Font() {
    return n(this, Mt).isType3Font;
  }
  get italic() {
    return n(this, Mt).italic;
  }
  get missingFile() {
    return n(this, Mt).missingFile;
  }
  get remeasure() {
    return n(this, Mt).remeasure;
  }
  get vertical() {
    return n(this, Mt).vertical;
  }
  get ascent() {
    return n(this, Mt).ascent;
  }
  get defaultWidth() {
    return n(this, Mt).defaultWidth;
  }
  get descent() {
    return n(this, Mt).descent;
  }
  get bbox() {
    return n(this, Mt).bbox;
  }
  get fontMatrix() {
    return n(this, Mt).fontMatrix;
  }
  get fallbackName() {
    return n(this, Mt).fallbackName;
  }
  get loadedName() {
    return n(this, Mt).loadedName;
  }
  get mimetype() {
    return n(this, Mt).mimetype;
  }
  get name() {
    return n(this, Mt).name;
  }
  get data() {
    return n(this, Mt).data;
  }
  clearData() {
    n(this, Mt).clearData();
  }
  get cssFontInfo() {
    return n(this, Mt).cssFontInfo;
  }
  get systemFontInfo() {
    return n(this, Mt).systemFontInfo;
  }
  get defaultVMetrics() {
    return n(this, Mt).defaultVMetrics;
  }
}
Mt = new WeakMap();
function Uw(h) {
  if (h instanceof URL)
    return h.href;
  if (typeof h == "string") {
    if (Xe)
      return h;
    const t = URL.parse(h, window.location);
    if (t)
      return t.href;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function Ww(h) {
  if (Xe && typeof Buffer < "u" && h instanceof Buffer)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (h instanceof Uint8Array && h.byteLength === h.buffer.byteLength)
    return h;
  if (typeof h == "string")
    return Rd(h);
  if (h instanceof ArrayBuffer || ArrayBuffer.isView(h) || typeof h == "object" && !isNaN(h == null ? void 0 : h.length))
    return new Uint8Array(h);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function Ud(h) {
  if (typeof h != "string")
    return null;
  if (h.endsWith("/"))
    return h;
  throw new Error(`Invalid factory url: "${h}" must include trailing slash.`);
}
const fp = (h) => typeof h == "object" && Number.isInteger(h == null ? void 0 : h.num) && h.num >= 0 && Number.isInteger(h == null ? void 0 : h.gen) && h.gen >= 0, Gw = (h) => typeof h == "object" && typeof (h == null ? void 0 : h.name) == "string", zy = Lw.bind(null, fp, Gw);
var ln, Ku;
class Vw {
  constructor() {
    v(this, ln, /* @__PURE__ */ new Map());
    v(this, Ku, Promise.resolve());
  }
  postMessage(t, e) {
    const i = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    n(this, Ku).then(() => {
      for (const [s] of n(this, ln))
        s.call(this, i);
    });
  }
  addEventListener(t, e, i = null) {
    let s = null;
    if ((i == null ? void 0 : i.signal) instanceof AbortSignal) {
      const {
        signal: r
      } = i;
      if (r.aborted) {
        pt("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const a = () => this.removeEventListener(t, e);
      s = () => r.removeEventListener("abort", a), r.addEventListener("abort", a);
    }
    n(this, ln).set(e, s);
  }
  removeEventListener(t, e) {
    const i = n(this, ln).get(e);
    i == null || i(), n(this, ln).delete(e);
  }
  terminate() {
    for (const [, t] of n(this, ln))
      t == null || t();
    n(this, ln).clear();
  }
}
ln = new WeakMap(), Ku = new WeakMap();
const Wd = {
  DATA: 1,
  ERROR: 2
}, oe = {
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function cm() {
}
function Je(h) {
  if (h instanceof On || h instanceof Mu || h instanceof im || h instanceof zh || h instanceof Df)
    return h;
  switch (h instanceof Error || typeof h == "object" && h !== null || zt('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), h.name) {
    case "AbortException":
      return new On(h.message);
    case "InvalidPDFException":
      return new Mu(h.message);
    case "PasswordException":
      return new im(h.message, h.code);
    case "ResponseException":
      return new zh(h.message, h.status, h.missing);
    case "UnknownErrorException":
      return new Df(h.message, h.details);
  }
  return new Df(h.message, h.toString());
}
var Zo, Vi, $y, Uy, Wy, su;
class xh {
  constructor(t, e, i) {
    v(this, Vi);
    v(this, Zo, new AbortController());
    this.sourceName = t, this.targetName = e, this.comObj = i, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), i.addEventListener("message", x(this, Vi, $y).bind(this), {
      signal: n(this, Zo).signal
    });
  }
  on(t, e) {
    const i = this.actionHandler;
    if (i[t])
      throw new Error(`There is already an actionName called "${t}"`);
    i[t] = e;
  }
  send(t, e, i) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: t,
      data: e
    }, i);
  }
  sendWithPromise(t, e, i) {
    const s = this.callbackId++, r = Promise.withResolvers();
    this.callbackCapabilities[s] = r;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        callbackId: s,
        data: e
      }, i);
    } catch (a) {
      r.reject(a);
    }
    return r.promise;
  }
  sendWithStream(t, e, i, s) {
    const r = this.streamId++, a = this.sourceName, o = this.targetName, l = this.comObj;
    return new ReadableStream({
      start: (c) => {
        const d = Promise.withResolvers();
        return this.streamControllers[r] = {
          controller: c,
          startCall: d,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, l.postMessage({
          sourceName: a,
          targetName: o,
          action: t,
          streamId: r,
          data: e,
          desiredSize: c.desiredSize
        }, s), d.promise;
      },
      pull: (c) => {
        const d = Promise.withResolvers();
        return this.streamControllers[r].pullCall = d, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: oe.PULL,
          streamId: r,
          desiredSize: c.desiredSize
        }), d.promise;
      },
      cancel: (c) => {
        xt(c instanceof Error, "cancel must have a valid reason");
        const d = Promise.withResolvers();
        return this.streamControllers[r].cancelCall = d, this.streamControllers[r].isClosed = !0, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: oe.CANCEL,
          streamId: r,
          reason: Je(c)
        }), d.promise;
      }
    }, i);
  }
  destroy() {
    var t;
    (t = n(this, Zo)) == null || t.abort(), m(this, Zo, null);
  }
}
Zo = new WeakMap(), Vi = new WeakSet(), $y = function({
  data: t
}) {
  if (t.targetName !== this.sourceName)
    return;
  if (t.stream) {
    x(this, Vi, Wy).call(this, t);
    return;
  }
  if (t.callback) {
    const i = t.callbackId, s = this.callbackCapabilities[i];
    if (!s)
      throw new Error(`Cannot resolve callback ${i}`);
    if (delete this.callbackCapabilities[i], t.callback === Wd.DATA)
      s.resolve(t.data);
    else if (t.callback === Wd.ERROR)
      s.reject(Je(t.reason));
    else
      throw new Error("Unexpected callback case");
    return;
  }
  const e = this.actionHandler[t.action];
  if (!e)
    throw new Error(`Unknown action from worker: ${t.action}`);
  if (t.callbackId) {
    const i = this.sourceName, s = t.sourceName, r = this.comObj;
    Promise.try(e, t.data).then(function(a) {
      r.postMessage({
        sourceName: i,
        targetName: s,
        callback: Wd.DATA,
        callbackId: t.callbackId,
        data: a
      });
    }, function(a) {
      r.postMessage({
        sourceName: i,
        targetName: s,
        callback: Wd.ERROR,
        callbackId: t.callbackId,
        reason: Je(a)
      });
    });
    return;
  }
  if (t.streamId) {
    x(this, Vi, Uy).call(this, t);
    return;
  }
  e(t.data);
}, Uy = function(t) {
  const e = t.streamId, i = this.sourceName, s = t.sourceName, r = this.comObj, a = this, o = this.actionHandler[t.action], l = {
    enqueue(c, d = 1, u) {
      if (this.isCancelled)
        return;
      const g = this.desiredSize;
      this.desiredSize -= d, g > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), r.postMessage({
        sourceName: i,
        targetName: s,
        stream: oe.ENQUEUE,
        streamId: e,
        chunk: c
      }, u);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, r.postMessage({
        sourceName: i,
        targetName: s,
        stream: oe.CLOSE,
        streamId: e
      }), delete a.streamSinks[e]);
    },
    error(c) {
      xt(c instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, r.postMessage({
        sourceName: i,
        targetName: s,
        stream: oe.ERROR,
        streamId: e,
        reason: Je(c)
      }));
    },
    sinkCapability: Promise.withResolvers(),
    onPull: null,
    onCancel: null,
    isCancelled: !1,
    desiredSize: t.desiredSize,
    ready: null
  };
  l.sinkCapability.resolve(), l.ready = l.sinkCapability.promise, this.streamSinks[e] = l, Promise.try(o, t.data, l).then(function() {
    r.postMessage({
      sourceName: i,
      targetName: s,
      stream: oe.START_COMPLETE,
      streamId: e,
      success: !0
    });
  }, function(c) {
    r.postMessage({
      sourceName: i,
      targetName: s,
      stream: oe.START_COMPLETE,
      streamId: e,
      reason: Je(c)
    });
  });
}, Wy = function(t) {
  const e = t.streamId, i = this.sourceName, s = t.sourceName, r = this.comObj, a = this.streamControllers[e], o = this.streamSinks[e];
  switch (t.stream) {
    case oe.START_COMPLETE:
      t.success ? a.startCall.resolve() : a.startCall.reject(Je(t.reason));
      break;
    case oe.PULL_COMPLETE:
      t.success ? a.pullCall.resolve() : a.pullCall.reject(Je(t.reason));
      break;
    case oe.PULL:
      if (!o) {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: oe.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
        break;
      }
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, Promise.try(o.onPull || cm).then(function() {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: oe.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(c) {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: oe.PULL_COMPLETE,
          streamId: e,
          reason: Je(c)
        });
      });
      break;
    case oe.ENQUEUE:
      if (xt(a, "enqueue should have stream controller"), a.isClosed)
        break;
      a.controller.enqueue(t.chunk);
      break;
    case oe.CLOSE:
      if (xt(a, "close should have stream controller"), a.isClosed)
        break;
      a.isClosed = !0, a.controller.close(), x(this, Vi, su).call(this, a, e);
      break;
    case oe.ERROR:
      xt(a, "error should have stream controller"), a.controller.error(Je(t.reason)), x(this, Vi, su).call(this, a, e);
      break;
    case oe.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(Je(t.reason)), x(this, Vi, su).call(this, a, e);
      break;
    case oe.CANCEL:
      if (!o)
        break;
      const l = Je(t.reason);
      Promise.try(o.onCancel || cm, l).then(function() {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: oe.CANCEL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(c) {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: oe.CANCEL_COMPLETE,
          streamId: e,
          reason: Je(c)
        });
      }), o.sinkCapability.reject(l), o.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, su = async function(t, e) {
  var i, s, r;
  await Promise.allSettled([(i = t.startCall) == null ? void 0 : i.promise, (s = t.pullCall) == null ? void 0 : s.promise, (r = t.cancelCall) == null ? void 0 : r.promise]), delete this.streamControllers[e];
};
var Ac;
class Gy {
  constructor({
    enableHWA: t = !1
  }) {
    v(this, Ac, !1);
    m(this, Ac, t);
  }
  create(t, e) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const i = this._createCanvas(t, e);
    return {
      canvas: i,
      context: i.getContext("2d", {
        willReadFrequently: !n(this, Ac)
      })
    };
  }
  reset(t, e, i) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    if (e <= 0 || i <= 0)
      throw new Error("Invalid canvas size");
    t.canvas.width = e, t.canvas.height = i;
  }
  destroy(t) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null;
  }
  _createCanvas(t, e) {
    zt("Abstract method `_createCanvas` called.");
  }
}
Ac = new WeakMap();
class qw extends Gy {
  constructor({
    ownerDocument: t = globalThis.document,
    enableHWA: e = !1
  }) {
    super({
      enableHWA: e
    }), this._document = t;
  }
  _createCanvas(t, e) {
    const i = this._document.createElement("canvas");
    return i.width = t, i.height = e, i;
  }
}
class Vy {
  constructor({
    baseUrl: t = null,
    isCompressed: e = !0
  }) {
    this.baseUrl = t, this.isCompressed = e;
  }
  async fetch({
    name: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
    if (!t)
      throw new Error("CMap name must be specified.");
    const e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : "");
    return this._fetch(e).then((i) => ({
      cMapData: i,
      isCompressed: this.isCompressed
    })).catch((i) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
    });
  }
  async _fetch(t) {
    zt("Abstract method `_fetch` called.");
  }
}
class dm extends Vy {
  async _fetch(t) {
    const e = await lh(t, this.isCompressed ? "arraybuffer" : "text");
    return e instanceof ArrayBuffer ? new Uint8Array(e) : Rd(e);
  }
}
class qy {
  addFilter(t) {
    return "none";
  }
  addHCMFilter(t, e) {
    return "none";
  }
  addAlphaFilter(t) {
    return "none";
  }
  addLuminosityFilter(t) {
    return "none";
  }
  addHighlightHCMFilter(t, e, i, s, r) {
    return "none";
  }
  destroy(t = !1) {
  }
}
var ga, tl, hn, cn, Ne, ma, ya, Q, Oe, _h, bo, nu, vo, Xy, pp, wo, Eh, Ch, gp, Th;
class Xw extends qy {
  constructor({
    docId: e,
    ownerDocument: i = globalThis.document
  }) {
    super();
    v(this, Q);
    v(this, ga);
    v(this, tl);
    v(this, hn);
    v(this, cn);
    v(this, Ne);
    v(this, ma);
    v(this, ya, 0);
    m(this, cn, e), m(this, Ne, i);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let i = n(this, Q, Oe).get(e);
    if (i)
      return i;
    const [s, r, a] = x(this, Q, nu).call(this, e), o = e.length === 1 ? s : `${s}${r}${a}`;
    if (i = n(this, Q, Oe).get(o), i)
      return n(this, Q, Oe).set(e, i), i;
    const l = `g_${n(this, cn)}_transfer_map_${de(this, ya)._++}`, c = x(this, Q, vo).call(this, l);
    n(this, Q, Oe).set(e, c), n(this, Q, Oe).set(o, c);
    const d = x(this, Q, wo).call(this, l);
    return x(this, Q, Ch).call(this, s, r, a, d), c;
  }
  addHCMFilter(e, i) {
    var E;
    const s = `${e}-${i}`, r = "base";
    let a = n(this, Q, _h).get(r);
    if ((a == null ? void 0 : a.key) === s || (a ? ((E = a.filter) == null || E.remove(), a.key = s, a.url = "none", a.filter = null) : (a = {
      key: s,
      url: "none",
      filter: null
    }, n(this, Q, _h).set(r, a)), !e || !i))
      return a.url;
    const o = x(this, Q, Th).call(this, e);
    e = tt.makeHexColor(...o);
    const l = x(this, Q, Th).call(this, i);
    if (i = tt.makeHexColor(...l), n(this, Q, bo).style.color = "", e === "#000000" && i === "#ffffff" || e === i)
      return a.url;
    const c = new Array(256);
    for (let w = 0; w <= 255; w++) {
      const M = w / 255;
      c[w] = M <= 0.03928 ? M / 12.92 : ((M + 0.055) / 1.055) ** 2.4;
    }
    const d = c.join(","), u = `g_${n(this, cn)}_hcm_filter`, g = a.filter = x(this, Q, wo).call(this, u);
    x(this, Q, Ch).call(this, d, d, d, g), x(this, Q, pp).call(this, g);
    const b = (w, M) => {
      const k = o[w] / 255, L = l[w] / 255, R = new Array(M + 1);
      for (let p = 0; p <= M; p++)
        R[p] = k + p / M * (L - k);
      return R.join(",");
    };
    return x(this, Q, Ch).call(this, b(0, 5), b(1, 5), b(2, 5), g), a.url = x(this, Q, vo).call(this, u), a.url;
  }
  addAlphaFilter(e) {
    let i = n(this, Q, Oe).get(e);
    if (i)
      return i;
    const [s] = x(this, Q, nu).call(this, [e]), r = `alpha_${s}`;
    if (i = n(this, Q, Oe).get(r), i)
      return n(this, Q, Oe).set(e, i), i;
    const a = `g_${n(this, cn)}_alpha_map_${de(this, ya)._++}`, o = x(this, Q, vo).call(this, a);
    n(this, Q, Oe).set(e, o), n(this, Q, Oe).set(r, o);
    const l = x(this, Q, wo).call(this, a);
    return x(this, Q, gp).call(this, s, l), o;
  }
  addLuminosityFilter(e) {
    let i = n(this, Q, Oe).get(e || "luminosity");
    if (i)
      return i;
    let s, r;
    if (e ? ([s] = x(this, Q, nu).call(this, [e]), r = `luminosity_${s}`) : r = "luminosity", i = n(this, Q, Oe).get(r), i)
      return n(this, Q, Oe).set(e, i), i;
    const a = `g_${n(this, cn)}_luminosity_map_${de(this, ya)._++}`, o = x(this, Q, vo).call(this, a);
    n(this, Q, Oe).set(e, o), n(this, Q, Oe).set(r, o);
    const l = x(this, Q, wo).call(this, a);
    return x(this, Q, Xy).call(this, l), e && x(this, Q, gp).call(this, s, l), o;
  }
  addHighlightHCMFilter(e, i, s, r, a) {
    var L;
    const o = `${i}-${s}-${r}-${a}`;
    let l = n(this, Q, _h).get(e);
    if ((l == null ? void 0 : l.key) === o || (l ? ((L = l.filter) == null || L.remove(), l.key = o, l.url = "none", l.filter = null) : (l = {
      key: o,
      url: "none",
      filter: null
    }, n(this, Q, _h).set(e, l)), !i || !s))
      return l.url;
    const [c, d] = [i, s].map(x(this, Q, Th).bind(this));
    let u = Math.round(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]), g = Math.round(0.2126 * d[0] + 0.7152 * d[1] + 0.0722 * d[2]), [b, E] = [r, a].map(x(this, Q, Th).bind(this));
    g < u && ([u, g, b, E] = [g, u, E, b]), n(this, Q, bo).style.color = "";
    const w = (R, p, f) => {
      const y = new Array(256), A = (g - u) / f, T = R / 255, P = (p - R) / (255 * f);
      let C = 0;
      for (let D = 0; D <= f; D++) {
        const N = Math.round(u + D * A), I = T + D * P;
        for (let B = C; B <= N; B++)
          y[B] = I;
        C = N + 1;
      }
      for (let D = C; D < 256; D++)
        y[D] = y[C - 1];
      return y.join(",");
    }, M = `g_${n(this, cn)}_hcm_${e}_filter`, k = l.filter = x(this, Q, wo).call(this, M);
    return x(this, Q, pp).call(this, k), x(this, Q, Ch).call(this, w(b[0], E[0], 5), w(b[1], E[1], 5), w(b[2], E[2], 5), k), l.url = x(this, Q, vo).call(this, M), l.url;
  }
  destroy(e = !1) {
    var i, s, r, a;
    e && ((i = n(this, ma)) != null && i.size) || ((s = n(this, hn)) == null || s.parentNode.parentNode.remove(), m(this, hn, null), (r = n(this, tl)) == null || r.clear(), m(this, tl, null), (a = n(this, ma)) == null || a.clear(), m(this, ma, null), m(this, ya, 0));
  }
}
ga = new WeakMap(), tl = new WeakMap(), hn = new WeakMap(), cn = new WeakMap(), Ne = new WeakMap(), ma = new WeakMap(), ya = new WeakMap(), Q = new WeakSet(), Oe = function() {
  return n(this, tl) || m(this, tl, /* @__PURE__ */ new Map());
}, _h = function() {
  return n(this, ma) || m(this, ma, /* @__PURE__ */ new Map());
}, bo = function() {
  if (!n(this, hn)) {
    const e = n(this, Ne).createElement("div"), {
      style: i
    } = e;
    i.visibility = "hidden", i.contain = "strict", i.width = i.height = 0, i.position = "absolute", i.top = i.left = 0, i.zIndex = -1;
    const s = n(this, Ne).createElementNS(Gs, "svg");
    s.setAttribute("width", 0), s.setAttribute("height", 0), m(this, hn, n(this, Ne).createElementNS(Gs, "defs")), e.append(s), s.append(n(this, hn)), n(this, Ne).body.append(e);
  }
  return n(this, hn);
}, nu = function(e) {
  if (e.length === 1) {
    const c = e[0], d = new Array(256);
    for (let g = 0; g < 256; g++)
      d[g] = c[g] / 255;
    const u = d.join(",");
    return [u, u, u];
  }
  const [i, s, r] = e, a = new Array(256), o = new Array(256), l = new Array(256);
  for (let c = 0; c < 256; c++)
    a[c] = i[c] / 255, o[c] = s[c] / 255, l[c] = r[c] / 255;
  return [a.join(","), o.join(","), l.join(",")];
}, vo = function(e) {
  if (n(this, ga) === void 0) {
    m(this, ga, "");
    const i = n(this, Ne).URL;
    i !== n(this, Ne).baseURI && (Ld(i) ? pt('#createUrl: ignore "data:"-URL for performance reasons.') : m(this, ga, vg(i, "")));
  }
  return `url(${n(this, ga)}#${e})`;
}, Xy = function(e) {
  const i = n(this, Ne).createElementNS(Gs, "feColorMatrix");
  i.setAttribute("type", "matrix"), i.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(i);
}, pp = function(e) {
  const i = n(this, Ne).createElementNS(Gs, "feColorMatrix");
  i.setAttribute("type", "matrix"), i.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(i);
}, wo = function(e) {
  const i = n(this, Ne).createElementNS(Gs, "filter");
  return i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("id", e), n(this, Q, bo).append(i), i;
}, Eh = function(e, i, s) {
  const r = n(this, Ne).createElementNS(Gs, i);
  r.setAttribute("type", "discrete"), r.setAttribute("tableValues", s), e.append(r);
}, Ch = function(e, i, s, r) {
  const a = n(this, Ne).createElementNS(Gs, "feComponentTransfer");
  r.append(a), x(this, Q, Eh).call(this, a, "feFuncR", e), x(this, Q, Eh).call(this, a, "feFuncG", i), x(this, Q, Eh).call(this, a, "feFuncB", s);
}, gp = function(e, i) {
  const s = n(this, Ne).createElementNS(Gs, "feComponentTransfer");
  i.append(s), x(this, Q, Eh).call(this, s, "feFuncA", e);
}, Th = function(e) {
  return n(this, Q, bo).style.color = e, hh(getComputedStyle(n(this, Q, bo)).getPropertyValue("color"));
};
class Yy {
  constructor({
    baseUrl: t = null
  }) {
    this.baseUrl = t;
  }
  async fetch({
    filename: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
    if (!t)
      throw new Error("Font filename must be specified.");
    const e = `${this.baseUrl}${t}`;
    return this._fetch(e).catch((i) => {
      throw new Error(`Unable to load font data at: ${e}`);
    });
  }
  async _fetch(t) {
    zt("Abstract method `_fetch` called.");
  }
}
class um extends Yy {
  async _fetch(t) {
    const e = await lh(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
class Ky {
  constructor({
    baseUrl: t = null
  }) {
    this.baseUrl = t;
  }
  async fetch({
    filename: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `wasmUrl` API parameter is provided.");
    if (!t)
      throw new Error("Wasm filename must be specified.");
    const e = `${this.baseUrl}${t}`;
    return this._fetch(e).catch((i) => {
      throw new Error(`Unable to load wasm data at: ${e}`);
    });
  }
  async _fetch(t) {
    zt("Abstract method `_fetch` called.");
  }
}
class fm extends Ky {
  async _fetch(t) {
    const e = await lh(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
Xe && pt("Please use the `legacy` build in Node.js environments.");
async function Eg(h) {
  const e = await process.getBuiltinModule("fs").promises.readFile(h);
  return new Uint8Array(e);
}
class Yw extends qy {
}
class Kw extends Gy {
  _createCanvas(t, e) {
    return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(t, e);
  }
}
class Jw extends Vy {
  async _fetch(t) {
    return Eg(t);
  }
}
class Qw extends Yy {
  async _fetch(t) {
    return Eg(t);
  }
}
class Zw extends Ky {
  async _fetch(t) {
    return Eg(t);
  }
}
const po = "__forcedDependency", {
  floor: pm,
  ceil: gm
} = Math;
function Gd(h, t, e, i, s, r) {
  h[t * 4 + 0] = Math.min(h[t * 4 + 0], e), h[t * 4 + 1] = Math.min(h[t * 4 + 1], i), h[t * 4 + 2] = Math.max(h[t * 4 + 2], s), h[t * 4 + 3] = Math.max(h[t * 4 + 3], r);
}
const mp = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0];
var el, rr;
class t0 {
  constructor(t, e) {
    v(this, el);
    v(this, rr);
    m(this, el, t), m(this, rr, e);
  }
  get length() {
    return n(this, el).length;
  }
  isEmpty(t) {
    return n(this, el)[t] === mp;
  }
  minX(t) {
    return n(this, rr)[t * 4 + 0] / 256;
  }
  minY(t) {
    return n(this, rr)[t * 4 + 1] / 256;
  }
  maxX(t) {
    return (n(this, rr)[t * 4 + 2] + 1) / 256;
  }
  maxY(t) {
    return (n(this, rr)[t * 4 + 3] + 1) / 256;
  }
}
el = new WeakMap(), rr = new WeakMap();
const Vd = (h, t) => {
  if (!h)
    return;
  let e = h.get(t);
  return e || (e = {
    dependencies: /* @__PURE__ */ new Set(),
    isRenderingOperation: !1
  }, h.set(t, e)), e;
};
var ti, ei, ba, Qi, va, dn, Rt, Lt, un, ii, xc, il, wa, Sa, fn, Be, Cs, _c, yp;
class e0 {
  constructor(t, e, i = !1) {
    v(this, _c);
    v(this, ti, {
      __proto__: null
    });
    v(this, ei, {
      __proto__: null,
      transform: [],
      moveText: [],
      sameLineText: [],
      [po]: []
    });
    v(this, ba, /* @__PURE__ */ new Map());
    v(this, Qi, []);
    v(this, va, []);
    v(this, dn, [[1, 0, 0, 1, 0, 0]]);
    v(this, Rt, [-1 / 0, -1 / 0, 1 / 0, 1 / 0]);
    v(this, Lt, new Float64Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
    v(this, un, -1);
    v(this, ii, /* @__PURE__ */ new Set());
    v(this, xc, /* @__PURE__ */ new Map());
    v(this, il, /* @__PURE__ */ new Map());
    v(this, wa);
    v(this, Sa);
    v(this, fn);
    v(this, Be);
    v(this, Cs);
    m(this, wa, t.width), m(this, Sa, t.height), x(this, _c, yp).call(this, e), i && m(this, Cs, /* @__PURE__ */ new Map());
  }
  growOperationsCount(t) {
    t >= n(this, Be).length && x(this, _c, yp).call(this, t, n(this, Be));
  }
  save(t) {
    return m(this, ti, {
      __proto__: n(this, ti)
    }), m(this, ei, {
      __proto__: n(this, ei),
      transform: {
        __proto__: n(this, ei).transform
      },
      moveText: {
        __proto__: n(this, ei).moveText
      },
      sameLineText: {
        __proto__: n(this, ei).sameLineText
      },
      [po]: {
        __proto__: n(this, ei)[po]
      }
    }), m(this, Rt, {
      __proto__: n(this, Rt)
    }), n(this, Qi).push(t), this;
  }
  restore(t) {
    var s;
    const e = Object.getPrototypeOf(n(this, ti));
    if (e === null)
      return this;
    m(this, ti, e), m(this, ei, Object.getPrototypeOf(n(this, ei))), m(this, Rt, Object.getPrototypeOf(n(this, Rt)));
    const i = n(this, Qi).pop();
    return i !== void 0 && ((s = Vd(n(this, Cs), t)) == null || s.dependencies.add(i), n(this, Be)[t] = n(this, Be)[i]), this;
  }
  recordOpenMarker(t) {
    return n(this, Qi).push(t), this;
  }
  getOpenMarker() {
    return n(this, Qi).length === 0 ? null : n(this, Qi).at(-1);
  }
  recordCloseMarker(t) {
    var i;
    const e = n(this, Qi).pop();
    return e !== void 0 && ((i = Vd(n(this, Cs), t)) == null || i.dependencies.add(e), n(this, Be)[t] = n(this, Be)[e]), this;
  }
  beginMarkedContent(t) {
    return n(this, va).push(t), this;
  }
  endMarkedContent(t) {
    var i;
    const e = n(this, va).pop();
    return e !== void 0 && ((i = Vd(n(this, Cs), t)) == null || i.dependencies.add(e), n(this, Be)[t] = n(this, Be)[e]), this;
  }
  pushBaseTransform(t) {
    return n(this, dn).push(tt.multiplyByDOMMatrix(n(this, dn).at(-1), t.getTransform())), this;
  }
  popBaseTransform() {
    return n(this, dn).length > 1 && n(this, dn).pop(), this;
  }
  recordSimpleData(t, e) {
    return n(this, ti)[t] = e, this;
  }
  recordIncrementalData(t, e) {
    return n(this, ei)[t].push(e), this;
  }
  resetIncrementalData(t, e) {
    return n(this, ei)[t].length = 0, this;
  }
  recordNamedData(t, e) {
    return n(this, ba).set(t, e), this;
  }
  recordSimpleDataFromNamed(t, e, i) {
    n(this, ti)[t] = n(this, ba).get(e) ?? i;
  }
  recordFutureForcedDependency(t, e) {
    return this.recordIncrementalData(po, e), this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    for (const e of t)
      e in n(this, ti) && this.recordFutureForcedDependency(e, n(this, ti)[e]);
    return this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    for (const t of n(this, ii))
      this.recordFutureForcedDependency(po, t);
    return this;
  }
  resetBBox(t) {
    return n(this, un) !== t && (m(this, un, t), n(this, Lt)[0] = 1 / 0, n(this, Lt)[1] = 1 / 0, n(this, Lt)[2] = -1 / 0, n(this, Lt)[3] = -1 / 0), this;
  }
  recordClipBox(t, e, i, s, r, a) {
    const o = tt.multiplyByDOMMatrix(n(this, dn).at(-1), e.getTransform()), l = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    tt.axialAlignedBoundingBox([i, r, s, a], o, l);
    const c = tt.intersect(n(this, Rt), l);
    return c ? (n(this, Rt)[0] = c[0], n(this, Rt)[1] = c[1], n(this, Rt)[2] = c[2], n(this, Rt)[3] = c[3]) : (n(this, Rt)[0] = n(this, Rt)[1] = 1 / 0, n(this, Rt)[2] = n(this, Rt)[3] = -1 / 0), this;
  }
  recordBBox(t, e, i, s, r, a) {
    const o = n(this, Rt);
    if (o[0] === 1 / 0)
      return this;
    const l = tt.multiplyByDOMMatrix(n(this, dn).at(-1), e.getTransform());
    if (o[0] === -1 / 0)
      return tt.axialAlignedBoundingBox([i, r, s, a], l, n(this, Lt)), this;
    const c = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    return tt.axialAlignedBoundingBox([i, r, s, a], l, c), n(this, Lt)[0] = Math.min(n(this, Lt)[0], Math.max(c[0], o[0])), n(this, Lt)[1] = Math.min(n(this, Lt)[1], Math.max(c[1], o[1])), n(this, Lt)[2] = Math.max(n(this, Lt)[2], Math.min(c[2], o[2])), n(this, Lt)[3] = Math.max(n(this, Lt)[3], Math.min(c[3], o[3])), this;
  }
  recordCharacterBBox(t, e, i, s = 1, r = 0, a = 0, o) {
    const l = i.bbox;
    let c, d;
    if (l && (c = l[2] !== l[0] && l[3] !== l[1] && n(this, il).get(i), c !== !1 && (d = [0, 0, 0, 0], tt.axialAlignedBoundingBox(l, i.fontMatrix, d), (s !== 1 || r !== 0 || a !== 0) && tt.scaleMinMax([s, 0, 0, -s, r, a], d), c)))
      return this.recordBBox(t, e, d[0], d[2], d[1], d[3]);
    if (!o)
      return this.recordFullPageBBox(t);
    const u = o();
    return l && d && c === void 0 && (c = d[0] <= r - u.actualBoundingBoxLeft && d[2] >= r + u.actualBoundingBoxRight && d[1] <= a - u.actualBoundingBoxAscent && d[3] >= a + u.actualBoundingBoxDescent, n(this, il).set(i, c), c) ? this.recordBBox(t, e, d[0], d[2], d[1], d[3]) : this.recordBBox(t, e, r - u.actualBoundingBoxLeft, r + u.actualBoundingBoxRight, a - u.actualBoundingBoxAscent, a + u.actualBoundingBoxDescent);
  }
  recordFullPageBBox(t) {
    return n(this, Lt)[0] = Math.max(0, n(this, Rt)[0]), n(this, Lt)[1] = Math.max(0, n(this, Rt)[1]), n(this, Lt)[2] = Math.min(n(this, wa), n(this, Rt)[2]), n(this, Lt)[3] = Math.min(n(this, Sa), n(this, Rt)[3]), this;
  }
  getSimpleIndex(t) {
    return n(this, ti)[t];
  }
  recordDependencies(t, e) {
    const i = n(this, ii), s = n(this, ti), r = n(this, ei);
    for (const a of e)
      a in n(this, ti) ? i.add(s[a]) : a in r && r[a].forEach(i.add, i);
    return this;
  }
  recordNamedDependency(t, e) {
    return n(this, ba).has(e) && n(this, ii).add(n(this, ba).get(e)), this;
  }
  recordOperation(t, e = !1) {
    if (this.recordDependencies(t, [po]), n(this, Cs)) {
      const i = Vd(n(this, Cs), t), {
        dependencies: s
      } = i;
      n(this, ii).forEach(s.add, s), n(this, Qi).forEach(s.add, s), n(this, va).forEach(s.add, s), s.delete(t), i.isRenderingOperation = !0;
    }
    if (n(this, un) === t) {
      const i = pm(n(this, Lt)[0] * 256 / n(this, wa)), s = pm(n(this, Lt)[1] * 256 / n(this, Sa)), r = gm(n(this, Lt)[2] * 256 / n(this, wa)), a = gm(n(this, Lt)[3] * 256 / n(this, Sa));
      Gd(n(this, fn), t, i, s, r, a);
      for (const o of n(this, ii))
        o !== t && Gd(n(this, fn), o, i, s, r, a);
      for (const o of n(this, Qi))
        o !== t && Gd(n(this, fn), o, i, s, r, a);
      for (const o of n(this, va))
        o !== t && Gd(n(this, fn), o, i, s, r, a);
      e || (n(this, ii).clear(), m(this, un, -1));
    }
    return this;
  }
  recordShowTextOperation(t, e = !1) {
    const i = Array.from(n(this, ii));
    this.recordOperation(t, e), this.recordIncrementalData("sameLineText", t);
    for (const s of i)
      this.recordIncrementalData("sameLineText", s);
    return this;
  }
  bboxToClipBoxDropOperation(t, e = !1) {
    return n(this, un) === t && (m(this, un, -1), n(this, Rt)[0] = Math.max(n(this, Rt)[0], n(this, Lt)[0]), n(this, Rt)[1] = Math.max(n(this, Rt)[1], n(this, Lt)[1]), n(this, Rt)[2] = Math.min(n(this, Rt)[2], n(this, Lt)[2]), n(this, Rt)[3] = Math.min(n(this, Rt)[3], n(this, Lt)[3]), e || n(this, ii).clear()), this;
  }
  _takePendingDependencies() {
    const t = n(this, ii);
    return m(this, ii, /* @__PURE__ */ new Set()), t;
  }
  _extractOperation(t) {
    const e = n(this, xc).get(t);
    return n(this, xc).delete(t), e;
  }
  _pushPendingDependencies(t) {
    for (const e of t)
      n(this, ii).add(e);
  }
  take() {
    return n(this, il).clear(), new t0(n(this, Be), n(this, fn));
  }
  takeDebugMetadata() {
    return n(this, Cs);
  }
}
ti = new WeakMap(), ei = new WeakMap(), ba = new WeakMap(), Qi = new WeakMap(), va = new WeakMap(), dn = new WeakMap(), Rt = new WeakMap(), Lt = new WeakMap(), un = new WeakMap(), ii = new WeakMap(), xc = new WeakMap(), il = new WeakMap(), wa = new WeakMap(), Sa = new WeakMap(), fn = new WeakMap(), Be = new WeakMap(), Cs = new WeakMap(), _c = new WeakSet(), yp = function(t, e) {
  const i = new ArrayBuffer(t * 4);
  m(this, fn, new Uint8ClampedArray(i)), m(this, Be, new Uint32Array(i)), e && e.length > 0 ? (n(this, Be).set(e), n(this, Be).fill(mp, e.length)) : n(this, Be).fill(mp);
};
var Nt, Zt, Zi, sl, nl;
const Ng = class Ng {
  constructor(t, e, i) {
    v(this, Nt);
    v(this, Zt);
    v(this, Zi);
    v(this, sl, 0);
    v(this, nl, 0);
    if (t instanceof Ng && n(t, Zi) === !!i)
      return t;
    m(this, Nt, t), m(this, Zt, e), m(this, Zi, !!i);
  }
  growOperationsCount() {
    throw new Error("Unreachable");
  }
  save(t) {
    return de(this, nl)._++, n(this, Nt).save(n(this, Zt)), this;
  }
  restore(t) {
    return n(this, nl) > 0 && (n(this, Nt).restore(n(this, Zt)), de(this, nl)._--), this;
  }
  recordOpenMarker(t) {
    return de(this, sl)._++, this;
  }
  getOpenMarker() {
    return n(this, sl) > 0 ? n(this, Zt) : n(this, Nt).getOpenMarker();
  }
  recordCloseMarker(t) {
    return de(this, sl)._--, this;
  }
  beginMarkedContent(t) {
    return this;
  }
  endMarkedContent(t) {
    return this;
  }
  pushBaseTransform(t) {
    return n(this, Nt).pushBaseTransform(t), this;
  }
  popBaseTransform() {
    return n(this, Nt).popBaseTransform(), this;
  }
  recordSimpleData(t, e) {
    return n(this, Nt).recordSimpleData(t, n(this, Zt)), this;
  }
  recordIncrementalData(t, e) {
    return n(this, Nt).recordIncrementalData(t, n(this, Zt)), this;
  }
  resetIncrementalData(t, e) {
    return n(this, Nt).resetIncrementalData(t, n(this, Zt)), this;
  }
  recordNamedData(t, e) {
    return this;
  }
  recordSimpleDataFromNamed(t, e, i) {
    return n(this, Nt).recordSimpleDataFromNamed(t, e, n(this, Zt)), this;
  }
  recordFutureForcedDependency(t, e) {
    return n(this, Nt).recordFutureForcedDependency(t, n(this, Zt)), this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    return n(this, Nt).inheritSimpleDataAsFutureForcedDependencies(t), this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    return n(this, Nt).inheritPendingDependenciesAsFutureForcedDependencies(), this;
  }
  resetBBox(t) {
    return n(this, Zi) || n(this, Nt).resetBBox(n(this, Zt)), this;
  }
  recordClipBox(t, e, i, s, r, a) {
    return n(this, Zi) || n(this, Nt).recordClipBox(n(this, Zt), e, i, s, r, a), this;
  }
  recordBBox(t, e, i, s, r, a) {
    return n(this, Zi) || n(this, Nt).recordBBox(n(this, Zt), e, i, s, r, a), this;
  }
  recordCharacterBBox(t, e, i, s, r, a, o) {
    return n(this, Zi) || n(this, Nt).recordCharacterBBox(n(this, Zt), e, i, s, r, a, o), this;
  }
  recordFullPageBBox(t) {
    return n(this, Zi) || n(this, Nt).recordFullPageBBox(n(this, Zt)), this;
  }
  getSimpleIndex(t) {
    return n(this, Nt).getSimpleIndex(t);
  }
  recordDependencies(t, e) {
    return n(this, Nt).recordDependencies(n(this, Zt), e), this;
  }
  recordNamedDependency(t, e) {
    return n(this, Nt).recordNamedDependency(n(this, Zt), e), this;
  }
  recordOperation(t) {
    return n(this, Nt).recordOperation(n(this, Zt), !0), this;
  }
  recordShowTextOperation(t) {
    return n(this, Nt).recordShowTextOperation(n(this, Zt), !0), this;
  }
  bboxToClipBoxDropOperation(t) {
    return n(this, Zi) || n(this, Nt).bboxToClipBoxDropOperation(n(this, Zt), !0), this;
  }
  take() {
    throw new Error("Unreachable");
  }
  takeDebugMetadata() {
    throw new Error("Unreachable");
  }
};
Nt = new WeakMap(), Zt = new WeakMap(), Zi = new WeakMap(), sl = new WeakMap(), nl = new WeakMap();
let Ou = Ng;
const Li = {
  stroke: ["path", "transform", "filter", "strokeColor", "strokeAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "dash"],
  fill: ["path", "transform", "filter", "fillColor", "fillAlpha", "globalCompositeOperation", "SMask"],
  imageXObject: ["transform", "SMask", "filter", "fillAlpha", "strokeAlpha", "globalCompositeOperation"],
  rawFillPath: ["filter", "fillColor", "fillAlpha"],
  showText: ["transform", "leading", "charSpacing", "wordSpacing", "hScale", "textRise", "moveText", "textMatrix", "font", "fontObj", "filter", "fillColor", "textRenderingMode", "SMask", "fillAlpha", "strokeAlpha", "globalCompositeOperation", "sameLineText"],
  transform: ["transform"],
  transformAndFill: ["transform", "fillColor"]
}, Me = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function bp(h, t) {
  if (!t)
    return;
  const e = t[2] - t[0], i = t[3] - t[1], s = new Path2D();
  s.rect(t[0], t[1], e, i), h.clip(s);
}
class Cg {
  isModifyingCurrentTransform() {
    return !1;
  }
  getPattern() {
    zt("Abstract method `getPattern` called.");
  }
}
class i0 extends Cg {
  constructor(t) {
    super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
  }
  _createGradient(t) {
    let e;
    this._type === "axial" ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const i of this._colorStops)
      e.addColorStop(i[0], i[1]);
    return e;
  }
  getPattern(t, e, i, s) {
    let r;
    if (s === Me.STROKE || s === Me.FILL) {
      const a = e.current.getClippedPathBoundingBox(s, Yt(t)) || [0, 0, 0, 0], o = Math.ceil(a[2] - a[0]) || 1, l = Math.ceil(a[3] - a[1]) || 1, c = e.cachedCanvases.getCanvas("pattern", o, l), d = c.context;
      d.clearRect(0, 0, d.canvas.width, d.canvas.height), d.beginPath(), d.rect(0, 0, d.canvas.width, d.canvas.height), d.translate(-a[0], -a[1]), i = tt.transform(i, [1, 0, 0, 1, a[0], a[1]]), d.transform(...e.baseTransform), this.matrix && d.transform(...this.matrix), bp(d, this._bbox), d.fillStyle = this._createGradient(d), d.fill(), r = t.createPattern(c.canvas, "no-repeat");
      const u = new DOMMatrix(i);
      r.setTransform(u);
    } else
      bp(t, this._bbox), r = this._createGradient(t);
    return r;
  }
}
function Ff(h, t, e, i, s, r, a, o) {
  const l = t.coords, c = t.colors, d = h.data, u = h.width * 4;
  let g;
  l[e + 1] > l[i + 1] && (g = e, e = i, i = g, g = r, r = a, a = g), l[i + 1] > l[s + 1] && (g = i, i = s, s = g, g = a, a = o, o = g), l[e + 1] > l[i + 1] && (g = e, e = i, i = g, g = r, r = a, a = g);
  const b = (l[e] + t.offsetX) * t.scaleX, E = (l[e + 1] + t.offsetY) * t.scaleY, w = (l[i] + t.offsetX) * t.scaleX, M = (l[i + 1] + t.offsetY) * t.scaleY, k = (l[s] + t.offsetX) * t.scaleX, L = (l[s + 1] + t.offsetY) * t.scaleY;
  if (E >= L)
    return;
  const R = c[r], p = c[r + 1], f = c[r + 2], y = c[a], A = c[a + 1], T = c[a + 2], P = c[o], C = c[o + 1], D = c[o + 2], N = Math.round(E), I = Math.round(L);
  let B, j, z, S, K, F, _, O;
  for (let H = N; H <= I; H++) {
    if (H < M) {
      const W = H < E ? 0 : (E - H) / (E - M);
      B = b - (b - w) * W, j = R - (R - y) * W, z = p - (p - A) * W, S = f - (f - T) * W;
    } else {
      let W;
      H > L ? W = 1 : M === L ? W = 0 : W = (M - H) / (M - L), B = w - (w - k) * W, j = y - (y - P) * W, z = A - (A - C) * W, S = T - (T - D) * W;
    }
    let U;
    H < E ? U = 0 : H > L ? U = 1 : U = (E - H) / (E - L), K = b - (b - k) * U, F = R - (R - P) * U, _ = p - (p - C) * U, O = f - (f - D) * U;
    const $ = Math.round(Math.min(B, K)), X = Math.round(Math.max(B, K));
    let G = u * H + $ * 4;
    for (let W = $; W <= X; W++)
      U = (B - W) / (B - K), U < 0 ? U = 0 : U > 1 && (U = 1), d[G++] = j - (j - F) * U | 0, d[G++] = z - (z - _) * U | 0, d[G++] = S - (S - O) * U | 0, d[G++] = 255;
  }
}
function s0(h, t, e) {
  const i = t.coords, s = t.colors;
  let r, a;
  switch (t.type) {
    case "lattice":
      const o = t.verticesPerRow, l = Math.floor(i.length / o) - 1, c = o - 1;
      for (r = 0; r < l; r++) {
        let d = r * o;
        for (let u = 0; u < c; u++, d++)
          Ff(h, e, i[d], i[d + 1], i[d + o], s[d], s[d + 1], s[d + o]), Ff(h, e, i[d + o + 1], i[d + 1], i[d + o], s[d + o + 1], s[d + 1], s[d + o]);
      }
      break;
    case "triangles":
      for (r = 0, a = i.length; r < a; r += 3)
        Ff(h, e, i[r], i[r + 1], i[r + 2], s[r], s[r + 1], s[r + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class n0 extends Cg {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[6], this._background = t[7], this.matrix = null;
  }
  _createMeshCanvas(t, e, i) {
    const o = Math.floor(this._bounds[0]), l = Math.floor(this._bounds[1]), c = Math.ceil(this._bounds[2]) - o, d = Math.ceil(this._bounds[3]) - l, u = Math.min(Math.ceil(Math.abs(c * t[0] * 1.1)), 3e3), g = Math.min(Math.ceil(Math.abs(d * t[1] * 1.1)), 3e3), b = c / u, E = d / g, w = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -o,
      offsetY: -l,
      scaleX: 1 / b,
      scaleY: 1 / E
    }, M = u + 4, k = g + 4, L = i.getCanvas("mesh", M, k), R = L.context, p = R.createImageData(u, g);
    if (e) {
      const y = p.data;
      for (let A = 0, T = y.length; A < T; A += 4)
        y[A] = e[0], y[A + 1] = e[1], y[A + 2] = e[2], y[A + 3] = 255;
    }
    for (const y of this._figures)
      s0(p, y, w);
    return R.putImageData(p, 2, 2), {
      canvas: L.canvas,
      offsetX: o - 2 * b,
      offsetY: l - 2 * E,
      scaleX: b,
      scaleY: E
    };
  }
  isModifyingCurrentTransform() {
    return !0;
  }
  getPattern(t, e, i, s) {
    bp(t, this._bbox);
    const r = new Float32Array(2);
    if (s === Me.SHADING)
      tt.singularValueDecompose2dScale(Yt(t), r);
    else if (this.matrix) {
      tt.singularValueDecompose2dScale(this.matrix, r);
      const [o, l] = r;
      tt.singularValueDecompose2dScale(e.baseTransform, r), r[0] *= o, r[1] *= l;
    } else
      tt.singularValueDecompose2dScale(e.baseTransform, r);
    const a = this._createMeshCanvas(r, s === Me.SHADING ? null : this._background, e.cachedCanvases);
    return s !== Me.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, "no-repeat");
  }
}
class r0 extends Cg {
  getPattern() {
    return "hotpink";
  }
}
function a0(h) {
  switch (h[0]) {
    case "RadialAxial":
      return new i0(h);
    case "Mesh":
      return new n0(h);
    case "Dummy":
      return new r0();
  }
  throw new Error(`Unknown IR type: ${h[0]}`);
}
const mm = {
  COLORED: 1,
  UNCOLORED: 2
}, Ju = class Ju {
  constructor(t, e, i, s) {
    this.color = t[1], this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.ctx = e, this.canvasGraphicsFactory = i, this.baseTransform = s;
  }
  createPatternCanvas(t, e) {
    var F, _;
    const {
      bbox: i,
      operatorList: s,
      paintType: r,
      tilingType: a,
      color: o,
      canvasGraphicsFactory: l
    } = this;
    let {
      xstep: c,
      ystep: d
    } = this;
    c = Math.abs(c), d = Math.abs(d), uf("TilingType: " + a);
    const u = i[0], g = i[1], b = i[2], E = i[3], w = b - u, M = E - g, k = new Float32Array(2);
    tt.singularValueDecompose2dScale(this.matrix, k);
    const [L, R] = k;
    tt.singularValueDecompose2dScale(this.baseTransform, k);
    const p = L * k[0], f = R * k[1];
    let y = w, A = M, T = !1, P = !1;
    const C = Math.ceil(c * p), D = Math.ceil(d * f), N = Math.ceil(w * p), I = Math.ceil(M * f);
    C >= N ? y = c : T = !0, D >= I ? A = d : P = !0;
    const B = this.getSizeAndScale(y, this.ctx.canvas.width, p), j = this.getSizeAndScale(A, this.ctx.canvas.height, f), z = t.cachedCanvases.getCanvas("pattern", B.size, j.size), S = z.context, K = l.createCanvasGraphics(S, e);
    if (K.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(K, r, o), S.translate(-B.scale * u, -j.scale * g), K.transform(0, B.scale, 0, 0, j.scale, 0, 0), S.save(), (F = K.dependencyTracker) == null || F.save(), this.clipBbox(K, u, g, b, E), K.baseTransform = Yt(K.ctx), K.executeOperatorList(s), K.endDrawing(), (_ = K.dependencyTracker) == null || _.restore(), S.restore(), T || P) {
      const O = z.canvas;
      T && (y = c), P && (A = d);
      const H = this.getSizeAndScale(y, this.ctx.canvas.width, p), U = this.getSizeAndScale(A, this.ctx.canvas.height, f), $ = H.size, X = U.size, G = t.cachedCanvases.getCanvas("pattern-workaround", $, X), W = G.context, ht = T ? Math.floor(w / c) : 0, ct = P ? Math.floor(M / d) : 0;
      for (let dt = 0; dt <= ht; dt++)
        for (let ut = 0; ut <= ct; ut++)
          W.drawImage(O, $ * dt, X * ut, $, X, 0, 0, $, X);
      return {
        canvas: G.canvas,
        scaleX: H.scale,
        scaleY: U.scale,
        offsetX: u,
        offsetY: g
      };
    }
    return {
      canvas: z.canvas,
      scaleX: B.scale,
      scaleY: j.scale,
      offsetX: u,
      offsetY: g
    };
  }
  getSizeAndScale(t, e, i) {
    const s = Math.max(Ju.MAX_PATTERN_SIZE, e);
    let r = Math.ceil(t * i);
    return r >= s ? r = s : i = r / t, {
      scale: i,
      size: r
    };
  }
  clipBbox(t, e, i, s, r) {
    const a = s - e, o = r - i;
    t.ctx.rect(e, i, a, o), tt.axialAlignedBoundingBox([e, i, s, r], Yt(t.ctx), t.current.minMax), t.clip(), t.endPath();
  }
  setFillAndStrokeStyleToContext(t, e, i) {
    const s = t.ctx, r = t.current;
    switch (e) {
      case mm.COLORED:
        const {
          fillStyle: a,
          strokeStyle: o
        } = this.ctx;
        s.fillStyle = r.fillColor = a, s.strokeStyle = r.strokeColor = o;
        break;
      case mm.UNCOLORED:
        s.fillStyle = s.strokeStyle = i, r.fillColor = r.strokeColor = i;
        break;
      default:
        throw new Tw(`Unsupported paint type: ${e}`);
    }
  }
  isModifyingCurrentTransform() {
    return !1;
  }
  getPattern(t, e, i, s, r) {
    let a = i;
    s !== Me.SHADING && (a = tt.transform(a, e.baseTransform), this.matrix && (a = tt.transform(a, this.matrix)));
    const o = this.createPatternCanvas(e, r);
    let l = new DOMMatrix(a);
    l = l.translate(o.offsetX, o.offsetY), l = l.scale(1 / o.scaleX, 1 / o.scaleY);
    const c = t.createPattern(o.canvas, "repeat");
    return c.setTransform(l), c;
  }
};
V(Ju, "MAX_PATTERN_SIZE", 3e3);
let vp = Ju;
function o0({
  src: h,
  srcPos: t = 0,
  dest: e,
  width: i,
  height: s,
  nonBlackColor: r = 4294967295,
  inverseDecode: a = !1
}) {
  const o = xe.isLittleEndian ? 4278190080 : 255, [l, c] = a ? [r, o] : [o, r], d = i >> 3, u = i & 7, g = h.length;
  e = new Uint32Array(e.buffer);
  let b = 0;
  for (let E = 0; E < s; E++) {
    for (const M = t + d; t < M; t++) {
      const k = t < g ? h[t] : 255;
      e[b++] = k & 128 ? c : l, e[b++] = k & 64 ? c : l, e[b++] = k & 32 ? c : l, e[b++] = k & 16 ? c : l, e[b++] = k & 8 ? c : l, e[b++] = k & 4 ? c : l, e[b++] = k & 2 ? c : l, e[b++] = k & 1 ? c : l;
    }
    if (u === 0)
      continue;
    const w = t < g ? h[t++] : 255;
    for (let M = 0; M < u; M++)
      e[b++] = w & 1 << 7 - M ? c : l;
  }
  return {
    srcPos: t,
    destPos: b
  };
}
const ym = 16, bm = 100, l0 = 15, vm = 10, ai = 16, Nf = new DOMMatrix(), Ci = new Float32Array(2), _o = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
function h0(h, t) {
  if (h._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  h.__originalSave = h.save, h.__originalRestore = h.restore, h.__originalRotate = h.rotate, h.__originalScale = h.scale, h.__originalTranslate = h.translate, h.__originalTransform = h.transform, h.__originalSetTransform = h.setTransform, h.__originalResetTransform = h.resetTransform, h.__originalClip = h.clip, h.__originalMoveTo = h.moveTo, h.__originalLineTo = h.lineTo, h.__originalBezierCurveTo = h.bezierCurveTo, h.__originalRect = h.rect, h.__originalClosePath = h.closePath, h.__originalBeginPath = h.beginPath, h._removeMirroring = () => {
    h.save = h.__originalSave, h.restore = h.__originalRestore, h.rotate = h.__originalRotate, h.scale = h.__originalScale, h.translate = h.__originalTranslate, h.transform = h.__originalTransform, h.setTransform = h.__originalSetTransform, h.resetTransform = h.__originalResetTransform, h.clip = h.__originalClip, h.moveTo = h.__originalMoveTo, h.lineTo = h.__originalLineTo, h.bezierCurveTo = h.__originalBezierCurveTo, h.rect = h.__originalRect, h.closePath = h.__originalClosePath, h.beginPath = h.__originalBeginPath, delete h._removeMirroring;
  }, h.save = function() {
    t.save(), this.__originalSave();
  }, h.restore = function() {
    t.restore(), this.__originalRestore();
  }, h.translate = function(e, i) {
    t.translate(e, i), this.__originalTranslate(e, i);
  }, h.scale = function(e, i) {
    t.scale(e, i), this.__originalScale(e, i);
  }, h.transform = function(e, i, s, r, a, o) {
    t.transform(e, i, s, r, a, o), this.__originalTransform(e, i, s, r, a, o);
  }, h.setTransform = function(e, i, s, r, a, o) {
    t.setTransform(e, i, s, r, a, o), this.__originalSetTransform(e, i, s, r, a, o);
  }, h.resetTransform = function() {
    t.resetTransform(), this.__originalResetTransform();
  }, h.rotate = function(e) {
    t.rotate(e), this.__originalRotate(e);
  }, h.clip = function(e) {
    t.clip(e), this.__originalClip(e);
  }, h.moveTo = function(e, i) {
    t.moveTo(e, i), this.__originalMoveTo(e, i);
  }, h.lineTo = function(e, i) {
    t.lineTo(e, i), this.__originalLineTo(e, i);
  }, h.bezierCurveTo = function(e, i, s, r, a, o) {
    t.bezierCurveTo(e, i, s, r, a, o), this.__originalBezierCurveTo(e, i, s, r, a, o);
  }, h.rect = function(e, i, s, r) {
    t.rect(e, i, s, r), this.__originalRect(e, i, s, r);
  }, h.closePath = function() {
    t.closePath(), this.__originalClosePath();
  }, h.beginPath = function() {
    t.beginPath(), this.__originalBeginPath();
  };
}
class c0 {
  constructor(t) {
    this.canvasFactory = t, this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(t, e, i) {
    let s;
    return this.cache[t] !== void 0 ? (s = this.cache[t], this.canvasFactory.reset(s, e, i)) : (s = this.canvasFactory.create(e, i), this.cache[t] = s), s;
  }
  delete(t) {
    delete this.cache[t];
  }
  clear() {
    for (const t in this.cache) {
      const e = this.cache[t];
      this.canvasFactory.destroy(e), delete this.cache[t];
    }
  }
}
function qd(h, t, e, i, s, r, a, o, l, c) {
  const [d, u, g, b, E, w] = Yt(h);
  if (u === 0 && g === 0) {
    const L = a * d + E, R = Math.round(L), p = o * b + w, f = Math.round(p), y = (a + l) * d + E, A = Math.abs(Math.round(y) - R) || 1, T = (o + c) * b + w, P = Math.abs(Math.round(T) - f) || 1;
    return h.setTransform(Math.sign(d), 0, 0, Math.sign(b), R, f), h.drawImage(t, e, i, s, r, 0, 0, A, P), h.setTransform(d, u, g, b, E, w), [A, P];
  }
  if (d === 0 && b === 0) {
    const L = o * g + E, R = Math.round(L), p = a * u + w, f = Math.round(p), y = (o + c) * g + E, A = Math.abs(Math.round(y) - R) || 1, T = (a + l) * u + w, P = Math.abs(Math.round(T) - f) || 1;
    return h.setTransform(0, Math.sign(u), Math.sign(g), 0, R, f), h.drawImage(t, e, i, s, r, 0, 0, P, A), h.setTransform(d, u, g, b, E, w), [P, A];
  }
  h.drawImage(t, e, i, s, r, a, o, l, c);
  const M = Math.hypot(d, u), k = Math.hypot(g, b);
  return [M * l, k * c];
}
class wm {
  constructor(t, e, i) {
    V(this, "alphaIsShape", !1);
    V(this, "fontSize", 0);
    V(this, "fontSizeScale", 1);
    V(this, "textMatrix", null);
    V(this, "textMatrixScale", 1);
    V(this, "fontMatrix", Gf);
    V(this, "leading", 0);
    V(this, "x", 0);
    V(this, "y", 0);
    V(this, "lineX", 0);
    V(this, "lineY", 0);
    V(this, "charSpacing", 0);
    V(this, "wordSpacing", 0);
    V(this, "textHScale", 1);
    V(this, "textRenderingMode", Ee.FILL);
    V(this, "textRise", 0);
    V(this, "fillColor", "#000000");
    V(this, "strokeColor", "#000000");
    V(this, "patternFill", !1);
    V(this, "patternStroke", !1);
    V(this, "fillAlpha", 1);
    V(this, "strokeAlpha", 1);
    V(this, "lineWidth", 1);
    V(this, "activeSMask", null);
    V(this, "transferMaps", "none");
    i == null || i(this), this.clipBox = new Float32Array([0, 0, t, e]), this.minMax = _o.slice();
  }
  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t.minMax = this.minMax.slice(), t;
  }
  getPathBoundingBox(t = Me.FILL, e = null) {
    const i = this.minMax.slice();
    if (t === Me.STROKE) {
      e || zt("Stroke bounding box must include transform."), tt.singularValueDecompose2dScale(e, Ci);
      const s = Ci[0] * this.lineWidth / 2, r = Ci[1] * this.lineWidth / 2;
      i[0] -= s, i[1] -= r, i[2] += s, i[3] += r;
    }
    return i;
  }
  updateClipFromPath() {
    const t = tt.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minMax[0] === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    this.clipBox.set(t, 0), this.minMax.set(_o, 0);
  }
  getClippedPathBoundingBox(t = Me.FILL, e = null) {
    return tt.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function Sm(h, t) {
  if (t instanceof ImageData) {
    h.putImageData(t, 0, 0);
    return;
  }
  const e = t.height, i = t.width, s = e % ai, r = (e - s) / ai, a = s === 0 ? r : r + 1, o = h.createImageData(i, ai);
  let l = 0, c;
  const d = t.data, u = o.data;
  let g, b, E, w;
  if (t.kind === Hh.GRAYSCALE_1BPP) {
    const M = d.byteLength, k = new Uint32Array(u.buffer, 0, u.byteLength >> 2), L = k.length, R = i + 7 >> 3, p = 4294967295, f = xe.isLittleEndian ? 4278190080 : 255;
    for (g = 0; g < a; g++) {
      for (E = g < r ? ai : s, c = 0, b = 0; b < E; b++) {
        const y = M - l;
        let A = 0;
        const T = y > R ? i : y * 8 - 7, P = T & -8;
        let C = 0, D = 0;
        for (; A < P; A += 8)
          D = d[l++], k[c++] = D & 128 ? p : f, k[c++] = D & 64 ? p : f, k[c++] = D & 32 ? p : f, k[c++] = D & 16 ? p : f, k[c++] = D & 8 ? p : f, k[c++] = D & 4 ? p : f, k[c++] = D & 2 ? p : f, k[c++] = D & 1 ? p : f;
        for (; A < T; A++)
          C === 0 && (D = d[l++], C = 128), k[c++] = D & C ? p : f, C >>= 1;
      }
      for (; c < L; )
        k[c++] = 0;
      h.putImageData(o, 0, g * ai);
    }
  } else if (t.kind === Hh.RGBA_32BPP) {
    for (b = 0, w = i * ai * 4, g = 0; g < r; g++)
      u.set(d.subarray(l, l + w)), l += w, h.putImageData(o, 0, b), b += ai;
    g < a && (w = i * s * 4, u.set(d.subarray(l, l + w)), h.putImageData(o, 0, b));
  } else if (t.kind === Hh.RGB_24BPP)
    for (E = ai, w = i * E, g = 0; g < a; g++) {
      for (g >= r && (E = s, w = i * E), c = 0, b = w; b--; )
        u[c++] = d[l++], u[c++] = d[l++], u[c++] = d[l++], u[c++] = 255;
      h.putImageData(o, 0, g * ai);
    }
  else
    throw new Error(`bad image kind: ${t.kind}`);
}
function Am(h, t) {
  if (t.bitmap) {
    h.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height, i = t.width, s = e % ai, r = (e - s) / ai, a = s === 0 ? r : r + 1, o = h.createImageData(i, ai);
  let l = 0;
  const c = t.data, d = o.data;
  for (let u = 0; u < a; u++) {
    const g = u < r ? ai : s;
    ({
      srcPos: l
    } = o0({
      src: c,
      srcPos: l,
      dest: d,
      width: i,
      height: g,
      nonBlackColor: 0
    })), h.putImageData(o, 0, u * ai);
  }
}
function fh(h, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const i of e)
    h[i] !== void 0 && (t[i] = h[i]);
  h.setLineDash !== void 0 && (t.setLineDash(h.getLineDash()), t.lineDashOffset = h.lineDashOffset);
}
function Xd(h) {
  h.strokeStyle = h.fillStyle = "#000000", h.fillRule = "nonzero", h.globalAlpha = 1, h.lineWidth = 1, h.lineCap = "butt", h.lineJoin = "miter", h.miterLimit = 10, h.globalCompositeOperation = "source-over", h.font = "10px sans-serif", h.setLineDash !== void 0 && (h.setLineDash([]), h.lineDashOffset = 0);
  const {
    filter: t
  } = h;
  t !== "none" && t !== "" && (h.filter = "none");
}
function xm(h, t) {
  if (t)
    return !0;
  tt.singularValueDecompose2dScale(h, Ci);
  const e = Math.fround(cs.pixelRatio * In.PDF_TO_CSS_UNITS);
  return Ci[0] <= e && Ci[1] <= e;
}
const d0 = ["butt", "round", "square"], u0 = ["miter", "round", "bevel"], f0 = {}, _m = {};
var ds, wp, Sp, Ap;
const Bg = class Bg {
  constructor(t, e, i, s, r, {
    optionalContentConfig: a,
    markedContentStack: o = null
  }, l, c, d) {
    v(this, ds);
    this.ctx = t, this.current = new wm(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = i, this.canvasFactory = s, this.filterFactory = r, this.groupStack = [], this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedCanvases = new c0(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = l, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = c, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map(), this.dependencyTracker = d ?? null;
  }
  getObject(t, e, i = null) {
    var s;
    return typeof e == "string" ? ((s = this.dependencyTracker) == null || s.recordNamedDependency(t, e), e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e)) : i;
  }
  beginDrawing({
    transform: t,
    viewport: e,
    transparency: i = !1,
    background: s = null
  }) {
    const r = this.ctx.canvas.width, a = this.ctx.canvas.height, o = this.ctx.fillStyle;
    if (this.ctx.fillStyle = s || "#ffffff", this.ctx.fillRect(0, 0, r, a), this.ctx.fillStyle = o, i) {
      const l = this.cachedCanvases.getCanvas("transparent", r, a);
      this.compositeCtx = this.ctx, this.transparentCanvas = l.canvas, this.ctx = l.context, this.ctx.save(), this.ctx.transform(...Yt(this.compositeCtx));
    }
    this.ctx.save(), Xd(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = Yt(this.ctx);
  }
  executeOperatorList(t, e, i, s, r) {
    var k;
    const a = t.argsArray, o = t.fnArray;
    let l = e || 0;
    const c = a.length;
    if (c === l)
      return l;
    const d = c - l > vm && typeof i == "function", u = d ? Date.now() + l0 : 0;
    let g = 0;
    const b = this.commonObjs, E = this.objs;
    let w, M;
    for (; ; ) {
      if (s !== void 0 && l === s.nextBreakPoint)
        return s.breakIt(l, i), l;
      if (!r || r(l))
        if (w = o[l], M = a[l] ?? null, w !== rh.dependency)
          M === null ? this[w](l) : this[w](l, ...M);
        else
          for (const L of M) {
            (k = this.dependencyTracker) == null || k.recordNamedData(L, l);
            const R = L.startsWith("g_") ? b : E;
            if (!R.has(L))
              return R.get(L, i), l;
          }
      if (l++, l === c)
        return l;
      if (d && ++g > vm) {
        if (Date.now() > u)
          return i(), l;
        g = 0;
      }
    }
  }
  endDrawing() {
    x(this, ds, wp).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), x(this, ds, Sp).call(this);
  }
  _scaleImage(t, e) {
    const i = t.width ?? t.displayWidth, s = t.height ?? t.displayHeight;
    let r = Math.max(Math.hypot(e[0], e[1]), 1), a = Math.max(Math.hypot(e[2], e[3]), 1), o = i, l = s, c = "prescale1", d, u;
    for (; r > 2 && o > 1 || a > 2 && l > 1; ) {
      let g = o, b = l;
      r > 2 && o > 1 && (g = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o / 2), r /= o / g), a > 2 && l > 1 && (b = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l) / 2, a /= l / b), d = this.cachedCanvases.getCanvas(c, g, b), u = d.context, u.clearRect(0, 0, g, b), u.drawImage(t, 0, 0, o, l, 0, 0, g, b), t = d.canvas, o = g, l = b, c = c === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img: t,
      paintWidth: o,
      paintHeight: l
    };
  }
  _createMaskCanvas(t, e) {
    var C, D;
    const i = this.ctx, {
      width: s,
      height: r
    } = e, a = this.current.fillColor, o = this.current.patternFill, l = Yt(i);
    let c, d, u, g;
    if ((e.bitmap || e.data) && e.count > 1) {
      const N = e.bitmap || e.data.buffer;
      d = JSON.stringify(o ? l : [l.slice(0, 4), a]), c = this._cachedBitmapsMap.get(N), c || (c = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(N, c));
      const I = c.get(d);
      if (I && !o) {
        const B = Math.round(Math.min(l[0], l[2]) + l[4]), j = Math.round(Math.min(l[1], l[3]) + l[5]);
        return (C = this.dependencyTracker) == null || C.recordDependencies(t, Li.transformAndFill), {
          canvas: I,
          offsetX: B,
          offsetY: j
        };
      }
      u = I;
    }
    u || (g = this.cachedCanvases.getCanvas("maskCanvas", s, r), Am(g.context, e));
    let b = tt.transform(l, [1 / s, 0, 0, -1 / r, 0, 0]);
    b = tt.transform(b, [1, 0, 0, 1, 0, -r]);
    const E = _o.slice();
    tt.axialAlignedBoundingBox([0, 0, s, r], b, E);
    const [w, M, k, L] = E, R = Math.round(k - w) || 1, p = Math.round(L - M) || 1, f = this.cachedCanvases.getCanvas("fillCanvas", R, p), y = f.context, A = w, T = M;
    y.translate(-A, -T), y.transform(...b), u || (u = this._scaleImage(g.canvas, fs(y)), u = u.img, c && o && c.set(d, u)), y.imageSmoothingEnabled = xm(Yt(y), e.interpolate), qd(y, u, 0, 0, u.width, u.height, 0, 0, s, r), y.globalCompositeOperation = "source-in";
    const P = tt.transform(fs(y), [1, 0, 0, 1, -A, -T]);
    return y.fillStyle = o ? a.getPattern(i, this, P, Me.FILL, t) : a, y.fillRect(0, 0, s, r), c && !o && (this.cachedCanvases.delete("fillCanvas"), c.set(d, f.canvas)), (D = this.dependencyTracker) == null || D.recordDependencies(t, Li.transformAndFill), {
      canvas: f.canvas,
      offsetX: Math.round(A),
      offsetY: Math.round(T)
    };
  }
  setLineWidth(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("lineWidth", t), e !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = e, this.ctx.lineWidth = e;
  }
  setLineCap(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("lineCap", t), this.ctx.lineCap = d0[e];
  }
  setLineJoin(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("lineJoin", t), this.ctx.lineJoin = u0[e];
  }
  setMiterLimit(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("miterLimit", t), this.ctx.miterLimit = e;
  }
  setDash(t, e, i) {
    var r;
    (r = this.dependencyTracker) == null || r.recordSimpleData("dash", t);
    const s = this.ctx;
    s.setLineDash !== void 0 && (s.setLineDash(e), s.lineDashOffset = i);
  }
  setRenderingIntent(t, e) {
  }
  setFlatness(t, e) {
  }
  setGState(t, e) {
    var i, s, r, a, o;
    for (const [l, c] of e)
      switch (l) {
        case "LW":
          this.setLineWidth(t, c);
          break;
        case "LC":
          this.setLineCap(t, c);
          break;
        case "LJ":
          this.setLineJoin(t, c);
          break;
        case "ML":
          this.setMiterLimit(t, c);
          break;
        case "D":
          this.setDash(t, c[0], c[1]);
          break;
        case "RI":
          this.setRenderingIntent(t, c);
          break;
        case "FL":
          this.setFlatness(t, c);
          break;
        case "Font":
          this.setFont(t, c[0], c[1]);
          break;
        case "CA":
          (i = this.dependencyTracker) == null || i.recordSimpleData("strokeAlpha", t), this.current.strokeAlpha = c;
          break;
        case "ca":
          (s = this.dependencyTracker) == null || s.recordSimpleData("fillAlpha", t), this.ctx.globalAlpha = this.current.fillAlpha = c;
          break;
        case "BM":
          (r = this.dependencyTracker) == null || r.recordSimpleData("globalCompositeOperation", t), this.ctx.globalCompositeOperation = c;
          break;
        case "SMask":
          (a = this.dependencyTracker) == null || a.recordSimpleData("SMask", t), this.current.activeSMask = c ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          (o = this.dependencyTracker) == null || o.recordSimpleData("filter", t), this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(c);
          break;
      }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const t = this.inSMaskMode;
    this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode();
  }
  beginSMaskMode(t) {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const e = this.ctx.canvas.width, i = this.ctx.canvas.height, s = "smaskGroupAt" + this.groupLevel, r = this.cachedCanvases.getCanvas(s, e, i);
    this.suspendedCtx = this.ctx;
    const a = this.ctx = r.context;
    a.setTransform(this.suspendedCtx.getTransform()), fh(this.suspendedCtx, a), h0(a, this.suspendedCtx), this.setGState(t, [["BM", "source-over"]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), fh(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(t) {
    if (!this.current.activeSMask)
      return;
    t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const e = this.current.activeSMask, i = this.suspendedCtx;
    this.composeSMask(i, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(t, e, i, s) {
    const r = s[0], a = s[1], o = s[2] - r, l = s[3] - a;
    o === 0 || l === 0 || (this.genericComposeSMask(e.context, i, o, l, e.subtype, e.backdrop, e.transferMap, r, a, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(i.canvas, 0, 0), t.restore());
  }
  genericComposeSMask(t, e, i, s, r, a, o, l, c, d, u) {
    let g = t.canvas, b = l - d, E = c - u;
    if (a)
      if (b < 0 || E < 0 || b + i > g.width || E + s > g.height) {
        const M = this.cachedCanvases.getCanvas("maskExtension", i, s), k = M.context;
        k.drawImage(g, -b, -E), k.globalCompositeOperation = "destination-atop", k.fillStyle = a, k.fillRect(0, 0, i, s), k.globalCompositeOperation = "source-over", g = M.canvas, b = E = 0;
      } else {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const M = new Path2D();
        M.rect(b, E, i, s), t.clip(M), t.globalCompositeOperation = "destination-atop", t.fillStyle = a, t.fillRect(b, E, i, s), t.restore();
      }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), r === "Alpha" && o ? e.filter = this.filterFactory.addAlphaFilter(o) : r === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(o));
    const w = new Path2D();
    w.rect(l, c, i, s), e.clip(w), e.globalCompositeOperation = "destination-in", e.drawImage(g, b, E, i, s, l, c, i, s), e.restore();
  }
  save(t) {
    var i;
    this.inSMaskMode && fh(this.ctx, this.suspendedCtx), this.ctx.save();
    const e = this.current;
    this.stateStack.push(e), this.current = e.clone(), (i = this.dependencyTracker) == null || i.save(t);
  }
  restore(t) {
    var e;
    if ((e = this.dependencyTracker) == null || e.restore(t), this.stateStack.length === 0) {
      this.inSMaskMode && this.endSMaskMode();
      return;
    }
    this.current = this.stateStack.pop(), this.ctx.restore(), this.inSMaskMode && fh(this.suspendedCtx, this.ctx), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  transform(t, e, i, s, r, a, o) {
    var l;
    (l = this.dependencyTracker) == null || l.recordIncrementalData("transform", t), this.ctx.transform(e, i, s, r, a, o), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, e, i, s) {
    let [r] = i;
    if (!s) {
      r || (r = i[0] = new Path2D()), this[e](t, r);
      return;
    }
    if (this.dependencyTracker !== null) {
      const a = e === rh.stroke ? this.current.lineWidth / 2 : 0;
      this.dependencyTracker.resetBBox(t).recordBBox(t, this.ctx, s[0] - a, s[2] + a, s[1] - a, s[3] + a).recordDependencies(t, ["transform"]);
    }
    if (!(r instanceof Path2D)) {
      const a = i[0] = new Path2D();
      for (let o = 0, l = r.length; o < l; )
        switch (r[o++]) {
          case zd.moveTo:
            a.moveTo(r[o++], r[o++]);
            break;
          case zd.lineTo:
            a.lineTo(r[o++], r[o++]);
            break;
          case zd.curveTo:
            a.bezierCurveTo(r[o++], r[o++], r[o++], r[o++], r[o++], r[o++]);
            break;
          case zd.closePath:
            a.closePath();
            break;
          default:
            pt(`Unrecognized drawing path operator: ${r[o - 1]}`);
            break;
        }
      r = a;
    }
    tt.axialAlignedBoundingBox(s, Yt(this.ctx), this.current.minMax), this[e](t, r), this._pathStartIdx = t;
  }
  closePath(t) {
    this.ctx.closePath();
  }
  stroke(t, e, i = !0) {
    var a;
    const s = this.ctx, r = this.current.strokeColor;
    if (s.globalAlpha = this.current.strokeAlpha, this.contentVisible)
      if (typeof r == "object" && (r != null && r.getPattern)) {
        const o = r.isModifyingCurrentTransform() ? s.getTransform() : null;
        if (s.save(), s.strokeStyle = r.getPattern(s, this, fs(s), Me.STROKE, t), o) {
          const l = new Path2D();
          l.addPath(e, s.getTransform().invertSelf().multiplySelf(o)), e = l;
        }
        this.rescaleAndStroke(e, !1), s.restore();
      } else
        this.rescaleAndStroke(e, !0);
    (a = this.dependencyTracker) == null || a.recordDependencies(t, Li.stroke), i && this.consumePath(t, e, this.current.getClippedPathBoundingBox(Me.STROKE, Yt(this.ctx))), s.globalAlpha = this.current.fillAlpha;
  }
  closeStroke(t, e) {
    this.stroke(t, e);
  }
  fill(t, e, i = !0) {
    var c, d, u;
    const s = this.ctx, r = this.current.fillColor, a = this.current.patternFill;
    let o = !1;
    if (a) {
      const g = r.isModifyingCurrentTransform() ? s.getTransform() : null;
      if ((c = this.dependencyTracker) == null || c.save(t), s.save(), s.fillStyle = r.getPattern(s, this, fs(s), Me.FILL, t), g) {
        const b = new Path2D();
        b.addPath(e, s.getTransform().invertSelf().multiplySelf(g)), e = b;
      }
      o = !0;
    }
    const l = this.current.getClippedPathBoundingBox();
    this.contentVisible && l !== null && (this.pendingEOFill ? (s.fill(e, "evenodd"), this.pendingEOFill = !1) : s.fill(e)), (d = this.dependencyTracker) == null || d.recordDependencies(t, Li.fill), o && (s.restore(), (u = this.dependencyTracker) == null || u.restore(t)), i && this.consumePath(t, e, l);
  }
  eoFill(t, e) {
    this.pendingEOFill = !0, this.fill(t, e);
  }
  fillStroke(t, e) {
    this.fill(t, e, !1), this.stroke(t, e, !1), this.consumePath(t, e);
  }
  eoFillStroke(t, e) {
    this.pendingEOFill = !0, this.fillStroke(t, e);
  }
  closeFillStroke(t, e) {
    this.fillStroke(t, e);
  }
  closeEOFillStroke(t, e) {
    this.pendingEOFill = !0, this.fillStroke(t, e);
  }
  endPath(t, e) {
    this.consumePath(t, e);
  }
  rawFillPath(t, e) {
    var i;
    this.ctx.fill(e), (i = this.dependencyTracker) == null || i.recordDependencies(t, Li.rawFillPath).recordOperation(t);
  }
  clip(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordFutureForcedDependency("clipMode", t), this.pendingClip = f0;
  }
  eoClip(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordFutureForcedDependency("clipMode", t), this.pendingClip = _m;
  }
  beginText(t) {
    var e;
    this.current.textMatrix = null, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, (e = this.dependencyTracker) == null || e.recordOpenMarker(t).resetIncrementalData("sameLineText").resetIncrementalData("moveText", t);
  }
  endText(t) {
    const e = this.pendingTextPaths, i = this.ctx;
    if (this.dependencyTracker) {
      const {
        dependencyTracker: s
      } = this;
      e !== void 0 && s.recordFutureForcedDependency("textClip", s.getOpenMarker()).recordFutureForcedDependency("textClip", t), s.recordCloseMarker(t);
    }
    if (e !== void 0) {
      const s = new Path2D(), r = i.getTransform().invertSelf();
      for (const {
        transform: a,
        x: o,
        y: l,
        fontSize: c,
        path: d
      } of e)
        d && s.addPath(d, new DOMMatrix(a).preMultiplySelf(r).translate(o, l).scale(c, -c));
      i.clip(s);
    }
    delete this.pendingTextPaths;
  }
  setCharSpacing(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("charSpacing", t), this.current.charSpacing = e;
  }
  setWordSpacing(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("wordSpacing", t), this.current.wordSpacing = e;
  }
  setHScale(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("hScale", t), this.current.textHScale = e / 100;
  }
  setLeading(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("leading", t), this.current.leading = -e;
  }
  setFont(t, e, i) {
    var u, g;
    (u = this.dependencyTracker) == null || u.recordSimpleData("font", t).recordSimpleDataFromNamed("fontObj", e, t);
    const s = this.commonObjs.get(e), r = this.current;
    if (!s)
      throw new Error(`Can't find font for ${e}`);
    if (r.fontMatrix = s.fontMatrix || Gf, (r.fontMatrix[0] === 0 || r.fontMatrix[3] === 0) && pt("Invalid font matrix for font " + e), i < 0 ? (i = -i, r.fontDirection = -1) : r.fontDirection = 1, this.current.font = s, this.current.fontSize = i, s.isType3Font)
      return;
    const a = s.loadedName || "sans-serif", o = ((g = s.systemFontInfo) == null ? void 0 : g.css) || `"${a}", ${s.fallbackName}`;
    let l = "normal";
    s.black ? l = "900" : s.bold && (l = "bold");
    const c = s.italic ? "italic" : "normal";
    let d = i;
    i < ym ? d = ym : i > bm && (d = bm), this.current.fontSizeScale = i / d, this.ctx.font = `${c} ${l} ${d}px ${o}`;
  }
  setTextRenderingMode(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("textRenderingMode", t), this.current.textRenderingMode = e;
  }
  setTextRise(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("textRise", t), this.current.textRise = e;
  }
  moveText(t, e, i) {
    var s;
    (s = this.dependencyTracker) == null || s.resetIncrementalData("sameLineText").recordIncrementalData("moveText", t), this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += i;
  }
  setLeadingMoveText(t, e, i) {
    this.setLeading(t, -i), this.moveText(t, e, i);
  }
  setTextMatrix(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("textMatrix", t);
    const {
      current: i
    } = this;
    i.textMatrix = e, i.textMatrixScale = Math.hypot(e[0], e[1]), i.x = i.lineX = 0, i.y = i.lineY = 0;
  }
  nextLine(t) {
    var e;
    this.moveText(t, 0, this.current.leading), (e = this.dependencyTracker) == null || e.recordIncrementalData("moveText", this.dependencyTracker.getSimpleIndex("leading") ?? t);
  }
  paintChar(t, e, i, s, r, a) {
    var k, L, R, p;
    const o = this.ctx, l = this.current, c = l.font, d = l.textRenderingMode, u = l.fontSize / l.fontSizeScale, g = d & Ee.FILL_STROKE_MASK, b = !!(d & Ee.ADD_TO_PATH_FLAG), E = l.patternFill && !c.missingFile, w = l.patternStroke && !c.missingFile;
    let M;
    if ((c.disableFontFace || b || E || w) && !c.missingFile && (M = c.getPathGenerator(this.commonObjs, e)), M && (c.disableFontFace || E || w)) {
      o.save(), o.translate(i, s), o.scale(u, -u), (k = this.dependencyTracker) == null || k.recordCharacterBBox(t, o, c);
      let f;
      if (g === Ee.FILL || g === Ee.FILL_STROKE)
        if (r) {
          f = o.getTransform(), o.setTransform(...r);
          const y = x(this, ds, Ap).call(this, M, f, r);
          o.fill(y);
        } else
          o.fill(M);
      if (g === Ee.STROKE || g === Ee.FILL_STROKE)
        if (a) {
          f || (f = o.getTransform()), o.setTransform(...a);
          const {
            a: y,
            b: A,
            c: T,
            d: P
          } = f, C = tt.inverseTransform(a), D = tt.transform([y, A, T, P, 0, 0], C);
          tt.singularValueDecompose2dScale(D, Ci), o.lineWidth *= Math.max(Ci[0], Ci[1]) / u, o.stroke(x(this, ds, Ap).call(this, M, f, a));
        } else
          o.lineWidth /= u, o.stroke(M);
      o.restore();
    } else
      (g === Ee.FILL || g === Ee.FILL_STROKE) && (o.fillText(e, i, s), (L = this.dependencyTracker) == null || L.recordCharacterBBox(t, o, c, u, i, s, () => o.measureText(e))), (g === Ee.STROKE || g === Ee.FILL_STROKE) && (this.dependencyTracker && ((R = this.dependencyTracker) == null || R.recordCharacterBBox(t, o, c, u, i, s, () => o.measureText(e)).recordDependencies(t, Li.stroke)), o.strokeText(e, i, s));
    b && ((this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: Yt(o),
      x: i,
      y: s,
      fontSize: u,
      path: M
    }), (p = this.dependencyTracker) == null || p.recordCharacterBBox(t, o, c, u, i, s));
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: t
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    t.scale(1.5, 1), t.fillText("I", 0, 10);
    const e = t.getImageData(0, 0, 10, 10).data;
    let i = !1;
    for (let s = 3; s < e.length; s += 4)
      if (e[s] > 0 && e[s] < 255) {
        i = !0;
        break;
      }
    return yt(this, "isFontSubpixelAAEnabled", i);
  }
  showText(t, e) {
    var T, P, C, D;
    this.dependencyTracker && (this.dependencyTracker.recordDependencies(t, Li.showText).resetBBox(t), this.current.textRenderingMode & Ee.ADD_TO_PATH_FLAG && this.dependencyTracker.recordFutureForcedDependency("textClip", t).inheritPendingDependenciesAsFutureForcedDependencies());
    const i = this.current, s = i.font;
    if (s.isType3Font) {
      this.showType3Text(t, e), (T = this.dependencyTracker) == null || T.recordShowTextOperation(t);
      return;
    }
    const r = i.fontSize;
    if (r === 0) {
      (P = this.dependencyTracker) == null || P.recordOperation(t);
      return;
    }
    const a = this.ctx, o = i.fontSizeScale, l = i.charSpacing, c = i.wordSpacing, d = i.fontDirection, u = i.textHScale * d, g = e.length, b = s.vertical, E = b ? 1 : -1, w = s.defaultVMetrics, M = r * i.fontMatrix[0], k = i.textRenderingMode === Ee.FILL && !s.disableFontFace && !i.patternFill;
    a.save(), i.textMatrix && a.transform(...i.textMatrix), a.translate(i.x, i.y + i.textRise), d > 0 ? a.scale(u, -1) : a.scale(u, 1);
    let L, R;
    if (i.patternFill) {
      a.save();
      const N = i.fillColor.getPattern(a, this, fs(a), Me.FILL, t);
      L = Yt(a), a.restore(), a.fillStyle = N;
    }
    if (i.patternStroke) {
      a.save();
      const N = i.strokeColor.getPattern(a, this, fs(a), Me.STROKE, t);
      R = Yt(a), a.restore(), a.strokeStyle = N;
    }
    let p = i.lineWidth;
    const f = i.textMatrixScale;
    if (f === 0 || p === 0) {
      const N = i.textRenderingMode & Ee.FILL_STROKE_MASK;
      (N === Ee.STROKE || N === Ee.FILL_STROKE) && (p = this.getSinglePixelWidth());
    } else
      p /= f;
    if (o !== 1 && (a.scale(o, o), p /= o), a.lineWidth = p, s.isInvalidPDFjsFont) {
      const N = [];
      let I = 0;
      for (const j of e)
        N.push(j.unicode), I += j.width;
      const B = N.join("");
      if (a.fillText(B, 0, 0), this.dependencyTracker !== null) {
        const j = a.measureText(B);
        this.dependencyTracker.recordBBox(t, this.ctx, -j.actualBoundingBoxLeft, j.actualBoundingBoxRight, -j.actualBoundingBoxAscent, j.actualBoundingBoxDescent).recordShowTextOperation(t);
      }
      i.x += I * M * u, a.restore(), this.compose();
      return;
    }
    let y = 0, A;
    for (A = 0; A < g; ++A) {
      const N = e[A];
      if (typeof N == "number") {
        y += E * N * r / 1e3;
        continue;
      }
      let I = !1;
      const B = (N.isSpace ? c : 0) + l, j = N.fontChar, z = N.accent;
      let S, K, F = N.width;
      if (b) {
        const H = N.vmetric || w, U = -(N.vmetric ? H[1] : F * 0.5) * M, $ = H[2] * M;
        F = H ? -H[0] : F, S = U / o, K = (y + $) / o;
      } else
        S = y / o, K = 0;
      let _;
      if (s.remeasure && F > 0) {
        _ = a.measureText(j);
        const H = _.width * 1e3 / r * o;
        if (F < H && this.isFontSubpixelAAEnabled) {
          const U = F / H;
          I = !0, a.save(), a.scale(U, 1), S /= U;
        } else F !== H && (S += (F - H) / 2e3 * r / o);
      }
      if (this.contentVisible && (N.isInFont || s.missingFile)) {
        if (k && !z)
          a.fillText(j, S, K), (C = this.dependencyTracker) == null || C.recordCharacterBBox(t, a, _ ? {
            bbox: null
          } : s, r / o, S, K, () => _ ?? a.measureText(j));
        else if (this.paintChar(t, j, S, K, L, R), z) {
          const H = S + r * z.offset.x / o, U = K - r * z.offset.y / o;
          this.paintChar(t, z.fontChar, H, U, L, R);
        }
      }
      const O = b ? F * M - B * d : F * M + B * d;
      y += O, I && a.restore();
    }
    b ? i.y -= y : i.x += y * u, a.restore(), this.compose(), (D = this.dependencyTracker) == null || D.recordShowTextOperation(t);
  }
  showType3Text(t, e) {
    const i = this.ctx, s = this.current, r = s.font, a = s.fontSize, o = s.fontDirection, l = r.vertical ? 1 : -1, c = s.charSpacing, d = s.wordSpacing, u = s.textHScale * o, g = s.fontMatrix || Gf, b = e.length, E = s.textRenderingMode === Ee.INVISIBLE;
    let w, M, k, L;
    if (E || a === 0)
      return;
    this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, i.save(), s.textMatrix && i.transform(...s.textMatrix), i.translate(s.x, s.y + s.textRise), i.scale(u, o);
    const R = this.dependencyTracker;
    for (this.dependencyTracker = R ? new Ou(R, t) : null, w = 0; w < b; ++w) {
      if (M = e[w], typeof M == "number") {
        L = l * M * a / 1e3, this.ctx.translate(L, 0), s.x += L * u;
        continue;
      }
      const p = (M.isSpace ? d : 0) + c, f = r.charProcOperatorList[M.operatorListId];
      f ? this.contentVisible && (this.save(), i.scale(a, a), i.transform(...g), this.executeOperatorList(f), this.restore()) : pt(`Type3 character "${M.operatorListId}" is not available.`);
      const y = [M.width, 0];
      tt.applyTransform(y, g), k = y[0] * a + p, i.translate(k, 0), s.x += k * u;
    }
    i.restore(), R && (this.dependencyTracker = R);
  }
  setCharWidth(t, e, i) {
  }
  setCharWidthAndBounds(t, e, i, s, r, a, o) {
    var c;
    const l = new Path2D();
    l.rect(s, r, a - s, o - r), this.ctx.clip(l), (c = this.dependencyTracker) == null || c.recordBBox(t, this.ctx, s, a, r, o).recordClipBox(t, this.ctx, s, a, r, o), this.endPath(t);
  }
  getColorN_Pattern(t, e) {
    let i;
    if (e[0] === "TilingPattern") {
      const s = this.baseTransform || Yt(this.ctx), r = {
        createCanvasGraphics: (a, o) => new Bg(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        }, void 0, void 0, this.dependencyTracker ? new Ou(this.dependencyTracker, o, !0) : null)
      };
      i = new vp(e, this.ctx, r, s);
    } else
      i = this._getPattern(t, e[1], e[2]);
    return i;
  }
  setStrokeColorN(t, ...e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("strokeColor", t), this.current.strokeColor = this.getColorN_Pattern(t, e), this.current.patternStroke = !0;
  }
  setFillColorN(t, ...e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("fillColor", t), this.current.fillColor = this.getColorN_Pattern(t, e), this.current.patternFill = !0;
  }
  setStrokeRGBColor(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("strokeColor", t), this.ctx.strokeStyle = this.current.strokeColor = e, this.current.patternStroke = !1;
  }
  setStrokeTransparent(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordSimpleData("strokeColor", t), this.ctx.strokeStyle = this.current.strokeColor = "transparent", this.current.patternStroke = !1;
  }
  setFillRGBColor(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("fillColor", t), this.ctx.fillStyle = this.current.fillColor = e, this.current.patternFill = !1;
  }
  setFillTransparent(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordSimpleData("fillColor", t), this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = !1;
  }
  _getPattern(t, e, i = null) {
    let s;
    return this.cachedPatterns.has(e) ? s = this.cachedPatterns.get(e) : (s = a0(this.getObject(t, e)), this.cachedPatterns.set(e, s)), i && (s.matrix = i), s;
  }
  shadingFill(t, e) {
    var a;
    if (!this.contentVisible)
      return;
    const i = this.ctx;
    this.save(t);
    const s = this._getPattern(t, e);
    i.fillStyle = s.getPattern(i, this, fs(i), Me.SHADING, t);
    const r = fs(i);
    if (r) {
      const {
        width: o,
        height: l
      } = i.canvas, c = _o.slice();
      tt.axialAlignedBoundingBox([0, 0, o, l], r, c);
      const [d, u, g, b] = c;
      this.ctx.fillRect(d, u, g - d, b - u);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    (a = this.dependencyTracker) == null || a.resetBBox(t).recordFullPageBBox(t).recordDependencies(t, Li.transform).recordDependencies(t, Li.fill).recordOperation(t), this.compose(this.current.getClippedPathBoundingBox()), this.restore(t);
  }
  beginInlineImage() {
    zt("Should not call beginInlineImage");
  }
  beginImageData() {
    zt("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e, i) {
    var s;
    if (this.contentVisible && (this.save(t), this.baseTransformStack.push(this.baseTransform), e && this.transform(t, ...e), this.baseTransform = Yt(this.ctx), i)) {
      tt.axialAlignedBoundingBox(i, this.baseTransform, this.current.minMax);
      const [r, a, o, l] = i, c = new Path2D();
      c.rect(r, a, o - r, l - a), this.ctx.clip(c), (s = this.dependencyTracker) == null || s.recordClipBox(t, this.ctx, r, o, a, l), this.endPath(t);
    }
  }
  paintFormXObjectEnd(t) {
    this.contentVisible && (this.restore(t), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(t, e) {
    var R;
    if (!this.contentVisible)
      return;
    this.save(t), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const i = this.ctx;
    e.isolated || uf("TODO: Support non-isolated groups."), e.knockout && pt("Knockout groups not supported.");
    const s = Yt(i);
    if (e.matrix && i.transform(...e.matrix), !e.bbox)
      throw new Error("Bounding box is required.");
    let r = _o.slice();
    tt.axialAlignedBoundingBox(e.bbox, Yt(i), r);
    const a = [0, 0, i.canvas.width, i.canvas.height];
    r = tt.intersect(r, a) || [0, 0, 0, 0];
    const o = Math.floor(r[0]), l = Math.floor(r[1]), c = Math.max(Math.ceil(r[2]) - o, 1), d = Math.max(Math.ceil(r[3]) - l, 1);
    this.current.startNewPathAndClipBox([0, 0, c, d]);
    let u = "groupAt" + this.groupLevel;
    e.smask && (u += "_smask_" + this.smaskCounter++ % 2);
    const g = this.cachedCanvases.getCanvas(u, c, d), b = g.context;
    b.translate(-o, -l), b.transform(...s);
    let E = new Path2D();
    const [w, M, k, L] = e.bbox;
    if (E.rect(w, M, k - w, L - M), e.matrix) {
      const p = new Path2D();
      p.addPath(E, new DOMMatrix(e.matrix)), E = p;
    }
    b.clip(E), e.smask && this.smaskStack.push({
      canvas: g.canvas,
      context: b,
      offsetX: o,
      offsetY: l,
      subtype: e.smask.subtype,
      backdrop: e.smask.backdrop,
      transferMap: e.smask.transferMap || null,
      startTransformInverse: null
    }), (!e.smask || this.dependencyTracker) && (i.setTransform(1, 0, 0, 1, 0, 0), i.translate(o, l), i.save()), fh(i, b), this.ctx = b, (R = this.dependencyTracker) == null || R.inheritSimpleDataAsFutureForcedDependencies(["fillAlpha", "strokeAlpha", "globalCompositeOperation"]).pushBaseTransform(i), this.setGState(t, [["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(i), this.groupLevel++;
  }
  endGroup(t, e) {
    var r;
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const i = this.ctx, s = this.groupStack.pop();
    if (this.ctx = s, this.ctx.imageSmoothingEnabled = !1, (r = this.dependencyTracker) == null || r.popBaseTransform(), e.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore(t), this.dependencyTracker && this.ctx.restore();
    else {
      this.ctx.restore();
      const a = Yt(this.ctx);
      this.restore(t), this.ctx.save(), this.ctx.setTransform(...a);
      const o = _o.slice();
      tt.axialAlignedBoundingBox([0, 0, i.canvas.width, i.canvas.height], a, o), this.ctx.drawImage(i.canvas, 0, 0), this.ctx.restore(), this.compose(o);
    }
  }
  beginAnnotation(t, e, i, s, r, a) {
    if (x(this, ds, wp).call(this), Xd(this.ctx), this.ctx.save(), this.save(t), this.baseTransform && this.ctx.setTransform(...this.baseTransform), i) {
      const o = i[2] - i[0], l = i[3] - i[1];
      if (a && this.annotationCanvasMap) {
        s = s.slice(), s[4] -= i[0], s[5] -= i[1], i = i.slice(), i[0] = i[1] = 0, i[2] = o, i[3] = l, tt.singularValueDecompose2dScale(Yt(this.ctx), Ci);
        const {
          viewportScale: c
        } = this, d = Math.ceil(o * this.outputScaleX * c), u = Math.ceil(l * this.outputScaleY * c);
        this.annotationCanvas = this.canvasFactory.create(d, u);
        const {
          canvas: g,
          context: b
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(e, g), this.annotationCanvas.savedCtx = this.ctx, this.ctx = b, this.ctx.save(), this.ctx.setTransform(Ci[0], 0, 0, -Ci[1], 0, l * Ci[1]), Xd(this.ctx);
      } else {
        Xd(this.ctx), this.endPath(t);
        const c = new Path2D();
        c.rect(i[0], i[1], o, l), this.ctx.clip(c);
      }
    }
    this.current = new wm(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(t, ...s), this.transform(t, ...r);
  }
  endAnnotation(t) {
    this.annotationCanvas && (this.ctx.restore(), x(this, ds, Sp).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(t, e) {
    var o;
    if (!this.contentVisible)
      return;
    const i = e.count;
    e = this.getObject(t, e.data, e), e.count = i;
    const s = this.ctx, r = this._createMaskCanvas(t, e), a = r.canvas;
    s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.drawImage(a, r.offsetX, r.offsetY), (o = this.dependencyTracker) == null || o.resetBBox(t).recordBBox(t, this.ctx, r.offsetX, r.offsetX + a.width, r.offsetY, r.offsetY + a.height).recordOperation(t), s.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(t, e, i, s = 0, r = 0, a, o) {
    var u, g, b;
    if (!this.contentVisible)
      return;
    e = this.getObject(t, e.data, e);
    const l = this.ctx;
    l.save();
    const c = Yt(l);
    l.transform(i, s, r, a, 0, 0);
    const d = this._createMaskCanvas(t, e);
    l.setTransform(1, 0, 0, 1, d.offsetX - c[4], d.offsetY - c[5]), (u = this.dependencyTracker) == null || u.resetBBox(t);
    for (let E = 0, w = o.length; E < w; E += 2) {
      const M = tt.transform(c, [i, s, r, a, o[E], o[E + 1]]);
      l.drawImage(d.canvas, M[4], M[5]), (g = this.dependencyTracker) == null || g.recordBBox(t, this.ctx, M[4], M[4] + d.canvas.width, M[5], M[5] + d.canvas.height);
    }
    l.restore(), this.compose(), (b = this.dependencyTracker) == null || b.recordOperation(t);
  }
  paintImageMaskXObjectGroup(t, e) {
    var a, o, l;
    if (!this.contentVisible)
      return;
    const i = this.ctx, s = this.current.fillColor, r = this.current.patternFill;
    (a = this.dependencyTracker) == null || a.resetBBox(t).recordDependencies(t, Li.transformAndFill);
    for (const c of e) {
      const {
        data: d,
        width: u,
        height: g,
        transform: b
      } = c, E = this.cachedCanvases.getCanvas("maskCanvas", u, g), w = E.context;
      w.save();
      const M = this.getObject(t, d, c);
      Am(w, M), w.globalCompositeOperation = "source-in", w.fillStyle = r ? s.getPattern(w, this, fs(i), Me.FILL, t) : s, w.fillRect(0, 0, u, g), w.restore(), i.save(), i.transform(...b), i.scale(1, -1), qd(i, E.canvas, 0, 0, u, g, 0, -1, 1, 1), (o = this.dependencyTracker) == null || o.recordBBox(t, i, 0, u, 0, g), i.restore();
    }
    this.compose(), (l = this.dependencyTracker) == null || l.recordOperation(t);
  }
  paintImageXObject(t, e) {
    if (!this.contentVisible)
      return;
    const i = this.getObject(t, e);
    if (!i) {
      pt("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(t, i);
  }
  paintImageXObjectRepeat(t, e, i, s, r) {
    if (!this.contentVisible)
      return;
    const a = this.getObject(t, e);
    if (!a) {
      pt("Dependent image isn't ready yet");
      return;
    }
    const o = a.width, l = a.height, c = [];
    for (let d = 0, u = r.length; d < u; d += 2)
      c.push({
        transform: [i, 0, 0, s, r[d], r[d + 1]],
        x: 0,
        y: 0,
        w: o,
        h: l
      });
    this.paintInlineImageXObjectGroup(t, a, c);
  }
  applyTransferMapsToCanvas(t) {
    return this.current.transferMaps !== "none" && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas;
  }
  applyTransferMapsToBitmap(t) {
    if (this.current.transferMaps === "none")
      return t.bitmap;
    const {
      bitmap: e,
      width: i,
      height: s
    } = t, r = this.cachedCanvases.getCanvas("inlineImage", i, s), a = r.context;
    return a.filter = this.current.transferMaps, a.drawImage(e, 0, 0), a.filter = "none", r.canvas;
  }
  paintInlineImageXObject(t, e) {
    var c;
    if (!this.contentVisible)
      return;
    const i = e.width, s = e.height, r = this.ctx;
    this.save(t);
    const {
      filter: a
    } = r;
    a !== "none" && a !== "" && (r.filter = "none"), r.scale(1 / i, -1 / s);
    let o;
    if (e.bitmap)
      o = this.applyTransferMapsToBitmap(e);
    else if (typeof HTMLElement == "function" && e instanceof HTMLElement || !e.data)
      o = e;
    else {
      const u = this.cachedCanvases.getCanvas("inlineImage", i, s).context;
      Sm(u, e), o = this.applyTransferMapsToCanvas(u);
    }
    const l = this._scaleImage(o, fs(r));
    r.imageSmoothingEnabled = xm(Yt(r), e.interpolate), (c = this.dependencyTracker) == null || c.resetBBox(t).recordBBox(t, r, 0, i, -s, 0).recordDependencies(t, Li.imageXObject).recordOperation(t), qd(r, l.img, 0, 0, l.paintWidth, l.paintHeight, 0, -s, i, s), this.compose(), this.restore(t);
  }
  paintInlineImageXObjectGroup(t, e, i) {
    var a, o, l;
    if (!this.contentVisible)
      return;
    const s = this.ctx;
    let r;
    if (e.bitmap)
      r = e.bitmap;
    else {
      const c = e.width, d = e.height, g = this.cachedCanvases.getCanvas("inlineImage", c, d).context;
      Sm(g, e), r = this.applyTransferMapsToCanvas(g);
    }
    (a = this.dependencyTracker) == null || a.resetBBox(t);
    for (const c of i)
      s.save(), s.transform(...c.transform), s.scale(1, -1), qd(s, r, c.x, c.y, c.w, c.h, 0, -1, 1, 1), (o = this.dependencyTracker) == null || o.recordBBox(t, s, 0, 1, -1, 0), s.restore();
    (l = this.dependencyTracker) == null || l.recordOperation(t), this.compose();
  }
  paintSolidColorImageMask(t) {
    var e;
    this.contentVisible && ((e = this.dependencyTracker) == null || e.resetBBox(t).recordBBox(t, this.ctx, 0, 1, 0, 1).recordDependencies(t, Li.fill).recordOperation(t), this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(t, e) {
  }
  markPointProps(t, e, i) {
  }
  beginMarkedContent(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.beginMarkedContent(t), this.markedContentStack.push({
      visible: !0
    });
  }
  beginMarkedContentProps(t, e, i) {
    var s;
    (s = this.dependencyTracker) == null || s.beginMarkedContent(t), e === "OC" ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(i)
    }) : this.markedContentStack.push({
      visible: !0
    }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent(t) {
    var e;
    (e = this.dependencyTracker) == null || e.endMarkedContent(t), this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat(t) {
  }
  endCompat(t) {
  }
  consumePath(t, e, i) {
    var a, o;
    const s = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(i);
    const r = this.ctx;
    this.pendingClip ? (s || (this.pendingClip === _m ? r.clip(e, "evenodd") : r.clip(e)), this.pendingClip = null, (a = this.dependencyTracker) == null || a.bboxToClipBoxDropOperation(t).recordFutureForcedDependency("clipPath", t)) : (o = this.dependencyTracker) == null || o.recordOperation(t), this.current.startNewPathAndClipBox(this.current.clipBox);
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = Yt(this.ctx);
      if (t[1] === 0 && t[2] === 0)
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      else {
        const e = Math.abs(t[0] * t[3] - t[2] * t[1]), i = Math.hypot(t[0], t[2]), s = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(i, s) / e;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth: t
      } = this.current, {
        a: e,
        b: i,
        c: s,
        d: r
      } = this.ctx.getTransform();
      let a, o;
      if (i === 0 && s === 0) {
        const l = Math.abs(e), c = Math.abs(r);
        if (l === c)
          if (t === 0)
            a = o = 1 / l;
          else {
            const d = l * t;
            a = o = d < 1 ? 1 / d : 1;
          }
        else if (t === 0)
          a = 1 / l, o = 1 / c;
        else {
          const d = l * t, u = c * t;
          a = d < 1 ? 1 / d : 1, o = u < 1 ? 1 / u : 1;
        }
      } else {
        const l = Math.abs(e * r - i * s), c = Math.hypot(e, i), d = Math.hypot(s, r);
        if (t === 0)
          a = d / l, o = c / l;
        else {
          const u = t * l;
          a = d > u ? d / u : 1, o = c > u ? c / u : 1;
        }
      }
      this._cachedScaleForStroking[0] = a, this._cachedScaleForStroking[1] = o;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(t, e) {
    const {
      ctx: i,
      current: {
        lineWidth: s
      }
    } = this, [r, a] = this.getScaleForStroking();
    if (r === a) {
      i.lineWidth = (s || 1) * r, i.stroke(t);
      return;
    }
    const o = i.getLineDash();
    e && i.save(), i.scale(r, a), Nf.a = 1 / r, Nf.d = 1 / a;
    const l = new Path2D();
    if (l.addPath(t, Nf), o.length > 0) {
      const c = Math.max(r, a);
      i.setLineDash(o.map((d) => d / c)), i.lineDashOffset /= c;
    }
    i.lineWidth = s || 1, i.stroke(l), e && i.restore();
  }
  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--)
      if (!this.markedContentStack[t].visible)
        return !1;
    return !0;
  }
};
ds = new WeakSet(), wp = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, Sp = function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
}, Ap = function(t, e, i) {
  const s = new Path2D();
  return s.addPath(t, new DOMMatrix(i).invertSelf().multiplySelf(e)), s;
};
let ko = Bg;
for (const h in rh)
  ko.prototype[h] !== void 0 && (ko.prototype[rh[h]] = ko.prototype[h]);
var rl, al, Ec, ol, ru;
const Co = class Co {
  constructor(t) {
    v(this, ol);
    v(this, rl);
    v(this, al);
    v(this, Ec);
    m(this, rl, t), m(this, al, new DataView(n(this, rl))), m(this, Ec, new TextDecoder());
  }
  static write(t) {
    const e = new TextEncoder(), i = {};
    let s = 0;
    for (const c of Co.strings) {
      const d = e.encode(t[c]);
      i[c] = d, s += 4 + d.length;
    }
    const r = new ArrayBuffer(s), a = new Uint8Array(r), o = new DataView(r);
    let l = 0;
    for (const c of Co.strings) {
      const d = i[c], u = d.length;
      o.setUint32(l, u), a.set(d, l + 4), l += 4 + u;
    }
    return xt(l === r.byteLength, "CssFontInfo.write: Buffer overflow"), r;
  }
  get fontFamily() {
    return x(this, ol, ru).call(this, 0);
  }
  get fontWeight() {
    return x(this, ol, ru).call(this, 1);
  }
  get italicAngle() {
    return x(this, ol, ru).call(this, 2);
  }
};
rl = new WeakMap(), al = new WeakMap(), Ec = new WeakMap(), ol = new WeakSet(), ru = function(t) {
  xt(t < Co.strings.length, "Invalid string index");
  let e = 0;
  for (let s = 0; s < t; s++)
    e += n(this, al).getUint32(e) + 4;
  const i = n(this, al).getUint32(e);
  return n(this, Ec).decode(new Uint8Array(n(this, rl), e + 4, i));
}, V(Co, "strings", ["fontFamily", "fontWeight", "italicAngle"]);
let Iu = Co;
var ar, Ts, Aa, xa, Ph;
const To = class To {
  constructor(t) {
    v(this, xa);
    v(this, ar);
    v(this, Ts);
    v(this, Aa);
    m(this, ar, t), m(this, Ts, new DataView(n(this, ar))), m(this, Aa, new TextDecoder());
  }
  static write(t) {
    const e = new TextEncoder(), i = {};
    let s = 0;
    for (const g of To.strings) {
      const b = e.encode(t[g]);
      i[g] = b, s += 4 + b.length;
    }
    s += 4;
    let r, a, o = 1 + s;
    t.style && (r = e.encode(t.style.style), a = e.encode(t.style.weight), o += 4 + r.length + 4 + a.length);
    const l = new ArrayBuffer(o), c = new Uint8Array(l), d = new DataView(l);
    let u = 0;
    d.setUint8(u++, t.guessFallback ? 1 : 0), d.setUint32(u, 0), u += 4, s = 0;
    for (const g of To.strings) {
      const b = i[g], E = b.length;
      s += 4 + E, d.setUint32(u, E), c.set(b, u + 4), u += 4 + E;
    }
    return d.setUint32(u - s - 4, s), t.style && (d.setUint32(u, r.length), c.set(r, u + 4), u += 4 + r.length, d.setUint32(u, a.length), c.set(a, u + 4), u += 4 + a.length), xt(u <= l.byteLength, "SubstitionInfo.write: Buffer overflow"), l.transferToFixedLength(u);
  }
  get guessFallback() {
    return n(this, Ts).getUint8(0) !== 0;
  }
  get css() {
    return x(this, xa, Ph).call(this, 0);
  }
  get loadedName() {
    return x(this, xa, Ph).call(this, 1);
  }
  get baseFontName() {
    return x(this, xa, Ph).call(this, 2);
  }
  get src() {
    return x(this, xa, Ph).call(this, 3);
  }
  get style() {
    let t = 1;
    t += 4 + n(this, Ts).getUint32(t);
    const e = n(this, Ts).getUint32(t), i = n(this, Aa).decode(new Uint8Array(n(this, ar), t + 4, e));
    t += 4 + e;
    const s = n(this, Ts).getUint32(t), r = n(this, Aa).decode(new Uint8Array(n(this, ar), t + 4, s));
    return {
      style: i,
      weight: r
    };
  }
};
ar = new WeakMap(), Ts = new WeakMap(), Aa = new WeakMap(), xa = new WeakSet(), Ph = function(t) {
  xt(t < To.strings.length, "Invalid string index");
  let e = 5;
  for (let s = 0; s < t; s++)
    e += n(this, Ts).getUint32(e) + 4;
  const i = n(this, Ts).getUint32(e);
  return n(this, Aa).decode(new Uint8Array(n(this, ar), e + 4, i));
}, V(To, "strings", ["css", "loadedName", "baseFontName", "src"]);
let Fu = To;
var ll, hl, cl, dl, di, Ps, Cc, Dt, ie, qi, au, kh;
const mt = class mt {
  constructor({
    data: t,
    extra: e
  }) {
    v(this, ie);
    v(this, Ps);
    v(this, Cc);
    v(this, Dt);
    m(this, Ps, t), m(this, Cc, new TextDecoder()), m(this, Dt, new DataView(n(this, Ps))), e && Object.assign(this, e);
  }
  get black() {
    return x(this, ie, qi).call(this, 0);
  }
  get bold() {
    return x(this, ie, qi).call(this, 1);
  }
  get disableFontFace() {
    return x(this, ie, qi).call(this, 2);
  }
  get fontExtraProperties() {
    return x(this, ie, qi).call(this, 3);
  }
  get isInvalidPDFjsFont() {
    return x(this, ie, qi).call(this, 4);
  }
  get isType3Font() {
    return x(this, ie, qi).call(this, 5);
  }
  get italic() {
    return x(this, ie, qi).call(this, 6);
  }
  get missingFile() {
    return x(this, ie, qi).call(this, 7);
  }
  get remeasure() {
    return x(this, ie, qi).call(this, 8);
  }
  get vertical() {
    return x(this, ie, qi).call(this, 9);
  }
  get ascent() {
    return x(this, ie, au).call(this, 0);
  }
  get defaultWidth() {
    return x(this, ie, au).call(this, 1);
  }
  get descent() {
    return x(this, ie, au).call(this, 2);
  }
  get bbox() {
    let t = n(mt, hl);
    if (n(this, Dt).getUint8(t) === 0)
      return;
    t += 1;
    const i = [];
    for (let s = 0; s < 4; s++)
      i.push(n(this, Dt).getInt16(t, !0)), t += 2;
    return i;
  }
  get fontMatrix() {
    let t = n(mt, cl);
    if (n(this, Dt).getUint8(t) === 0)
      return;
    t += 1;
    const i = [];
    for (let s = 0; s < 6; s++)
      i.push(n(this, Dt).getFloat64(t, !0)), t += 8;
    return i;
  }
  get defaultVMetrics() {
    let t = n(mt, dl);
    if (n(this, Dt).getUint8(t) === 0)
      return;
    t += 1;
    const i = [];
    for (let s = 0; s < 3; s++)
      i.push(n(this, Dt).getInt16(t, !0)), t += 2;
    return i;
  }
  get fallbackName() {
    return x(this, ie, kh).call(this, 0);
  }
  get loadedName() {
    return x(this, ie, kh).call(this, 1);
  }
  get mimetype() {
    return x(this, ie, kh).call(this, 2);
  }
  get name() {
    return x(this, ie, kh).call(this, 3);
  }
  get data() {
    let t = n(mt, di);
    const e = n(this, Dt).getUint32(t);
    t += 4 + e;
    const i = n(this, Dt).getUint32(t);
    t += 4 + i;
    const s = n(this, Dt).getUint32(t);
    t += 4 + s;
    const r = n(this, Dt).getUint32(t);
    if (r !== 0)
      return new Uint8Array(n(this, Ps), t + 4, r);
  }
  clearData() {
    let t = n(mt, di);
    const e = n(this, Dt).getUint32(t);
    t += 4 + e;
    const i = n(this, Dt).getUint32(t);
    t += 4 + i;
    const s = n(this, Dt).getUint32(t);
    t += 4 + s;
    const r = n(this, Dt).getUint32(t);
    new Uint8Array(n(this, Ps), t + 4, r).fill(0), n(this, Dt).setUint32(t, 0);
  }
  get cssFontInfo() {
    let t = n(mt, di);
    const e = n(this, Dt).getUint32(t);
    t += 4 + e;
    const i = n(this, Dt).getUint32(t);
    t += 4 + i;
    const s = n(this, Dt).getUint32(t);
    if (s === 0)
      return null;
    const r = new Uint8Array(s);
    return r.set(new Uint8Array(n(this, Ps), t + 4, s)), new Iu(r.buffer);
  }
  get systemFontInfo() {
    let t = n(mt, di);
    const e = n(this, Dt).getUint32(t);
    t += 4 + e;
    const i = n(this, Dt).getUint32(t);
    if (i === 0)
      return null;
    const s = new Uint8Array(i);
    return s.set(new Uint8Array(n(this, Ps), t + 4, i)), new Fu(s.buffer);
  }
  static write(t) {
    const e = t.systemFontInfo ? Fu.write(t.systemFontInfo) : null, i = t.cssFontInfo ? Iu.write(t.cssFontInfo) : null, s = new TextEncoder(), r = {};
    let a = 0;
    for (const w of mt.strings)
      r[w] = s.encode(t[w]), a += 4 + r[w].length;
    const o = n(mt, di) + 4 + a + 4 + (e ? e.byteLength : 0) + 4 + (i ? i.byteLength : 0) + 4 + (t.data ? t.data.length : 0), l = new ArrayBuffer(o), c = new Uint8Array(l), d = new DataView(l);
    let u = 0;
    const g = mt.bools.length;
    let b = 0, E = 0;
    for (let w = 0; w < g; w++) {
      const M = t[mt.bools[w]];
      b |= (M === void 0 ? 0 : M ? 2 : 1) << E, E += 2, (E === 8 || w === g - 1) && (d.setUint8(u++, b), b = 0, E = 0);
    }
    xt(u === n(mt, ll), "FontInfo.write: Boolean properties offset mismatch");
    for (const w of mt.numbers)
      d.setFloat64(u, t[w]), u += 8;
    if (xt(u === n(mt, hl), "FontInfo.write: Number properties offset mismatch"), t.bbox) {
      d.setUint8(u++, 4);
      for (const w of t.bbox)
        d.setInt16(u, w, !0), u += 2;
    } else
      d.setUint8(u++, 0), u += 8;
    if (xt(u === n(mt, cl), "FontInfo.write: BBox properties offset mismatch"), t.fontMatrix) {
      d.setUint8(u++, 6);
      for (const w of t.fontMatrix)
        d.setFloat64(u, w, !0), u += 8;
    } else
      d.setUint8(u++, 0), u += 48;
    if (xt(u === n(mt, dl), "FontInfo.write: FontMatrix properties offset mismatch"), t.defaultVMetrics) {
      d.setUint8(u++, 1);
      for (const w of t.defaultVMetrics)
        d.setInt16(u, w, !0), u += 2;
    } else
      d.setUint8(u++, 0), u += 6;
    xt(u === n(mt, di), "FontInfo.write: DefaultVMetrics properties offset mismatch"), d.setUint32(n(mt, di), 0), u += 4;
    for (const w of mt.strings) {
      const M = r[w], k = M.length;
      d.setUint32(u, k), c.set(M, u + 4), u += 4 + k;
    }
    if (d.setUint32(n(mt, di), u - n(mt, di) - 4), !e)
      d.setUint32(u, 0), u += 4;
    else {
      const w = e.byteLength;
      d.setUint32(u, w), xt(u + 4 + w <= l.byteLength, "FontInfo.write: Buffer overflow at systemFontInfo"), c.set(new Uint8Array(e), u + 4), u += 4 + w;
    }
    if (!i)
      d.setUint32(u, 0), u += 4;
    else {
      const w = i.byteLength;
      d.setUint32(u, w), xt(u + 4 + w <= l.byteLength, "FontInfo.write: Buffer overflow at cssFontInfo"), c.set(new Uint8Array(i), u + 4), u += 4 + w;
    }
    return t.data === void 0 ? (d.setUint32(u, 0), u += 4) : (d.setUint32(u, t.data.length), c.set(t.data, u + 4), u += 4 + t.data.length), xt(u <= l.byteLength, "FontInfo.write: Buffer overflow"), l.transferToFixedLength(u);
  }
};
ll = new WeakMap(), hl = new WeakMap(), cl = new WeakMap(), dl = new WeakMap(), di = new WeakMap(), Ps = new WeakMap(), Cc = new WeakMap(), Dt = new WeakMap(), ie = new WeakSet(), qi = function(t) {
  xt(t < mt.bools.length, "Invalid boolean index");
  const e = Math.floor(t / 4), i = t * 2 % 8, s = n(this, Dt).getUint8(e) >> i & 3;
  return s === 0 ? void 0 : s === 2;
}, au = function(t) {
  return xt(t < mt.numbers.length, "Invalid number index"), n(this, Dt).getFloat64(n(mt, ll) + t * 8);
}, kh = function(t) {
  xt(t < mt.strings.length, "Invalid string index");
  let e = n(mt, di) + 4;
  for (let r = 0; r < t; r++)
    e += n(this, Dt).getUint32(e) + 4;
  const i = n(this, Dt).getUint32(e), s = new Uint8Array(i);
  return s.set(new Uint8Array(n(this, Ps), e + 4, i)), n(this, Cc).decode(s);
}, V(mt, "bools", ["black", "bold", "disableFontFace", "fontExtraProperties", "isInvalidPDFjsFont", "isType3Font", "italic", "missingFile", "remeasure", "vertical"]), V(mt, "numbers", ["ascent", "defaultWidth", "descent"]), V(mt, "strings", ["fallbackName", "loadedName", "mimetype", "name"]), v(mt, ll, Math.ceil(mt.bools.length * 2 / 8)), v(mt, hl, n(mt, ll) + mt.numbers.length * 8), v(mt, cl, n(mt, hl) + 1 + 8), v(mt, dl, n(mt, cl) + 1 + 48), v(mt, di, n(mt, dl) + 1 + 6);
let xp = mt;
var Tc, Pc;
class os {
  static get workerPort() {
    return n(this, Tc);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    m(this, Tc, t);
  }
  static get workerSrc() {
    return n(this, Pc);
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    m(this, Pc, t);
  }
}
Tc = new WeakMap(), Pc = new WeakMap(), v(os, Tc, null), v(os, Pc, "");
var ul, kc;
class p0 {
  constructor({
    parsedData: t,
    rawData: e
  }) {
    v(this, ul);
    v(this, kc);
    m(this, ul, t), m(this, kc, e);
  }
  getRaw() {
    return n(this, kc);
  }
  get(t) {
    return n(this, ul).get(t) ?? null;
  }
  [Symbol.iterator]() {
    return n(this, ul).entries();
  }
}
ul = new WeakMap(), kc = new WeakMap();
const So = Symbol("INTERNAL");
var Rc, Mc, Lc, fl;
class g0 {
  constructor(t, {
    name: e,
    intent: i,
    usage: s,
    rbGroups: r
  }) {
    v(this, Rc, !1);
    v(this, Mc, !1);
    v(this, Lc, !1);
    v(this, fl, !0);
    m(this, Rc, !!(t & Ei.DISPLAY)), m(this, Mc, !!(t & Ei.PRINT)), this.name = e, this.intent = i, this.usage = s, this.rbGroups = r;
  }
  get visible() {
    if (n(this, Lc))
      return n(this, fl);
    if (!n(this, fl))
      return !1;
    const {
      print: t,
      view: e
    } = this.usage;
    return n(this, Rc) ? (e == null ? void 0 : e.viewState) !== "OFF" : n(this, Mc) ? (t == null ? void 0 : t.printState) !== "OFF" : !0;
  }
  _setVisible(t, e, i = !1) {
    t !== So && zt("Internal method `_setVisible` called."), m(this, Lc, i), m(this, fl, e);
  }
}
Rc = new WeakMap(), Mc = new WeakMap(), Lc = new WeakMap(), fl = new WeakMap();
var or, Ot, pl, gl, Dc, _p;
class m0 {
  constructor(t, e = Ei.DISPLAY) {
    v(this, Dc);
    v(this, or, null);
    v(this, Ot, /* @__PURE__ */ new Map());
    v(this, pl, null);
    v(this, gl, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, m(this, gl, t.order);
      for (const i of t.groups)
        n(this, Ot).set(i.id, new g0(e, i));
      if (t.baseState === "OFF")
        for (const i of n(this, Ot).values())
          i._setVisible(So, !1);
      for (const i of t.on)
        n(this, Ot).get(i)._setVisible(So, !0);
      for (const i of t.off)
        n(this, Ot).get(i)._setVisible(So, !1);
      m(this, pl, this.getHash());
    }
  }
  isVisible(t) {
    if (n(this, Ot).size === 0)
      return !0;
    if (!t)
      return uf("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return n(this, Ot).has(t.id) ? n(this, Ot).get(t.id).visible : (pt(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return x(this, Dc, _p).call(this, t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!n(this, Ot).has(e))
            return pt(`Optional content group not found: ${e}`), !0;
          if (n(this, Ot).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!n(this, Ot).has(e))
            return pt(`Optional content group not found: ${e}`), !0;
          if (!n(this, Ot).get(e).visible)
            return !1;
        }
        return !0;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!n(this, Ot).has(e))
            return pt(`Optional content group not found: ${e}`), !0;
          if (!n(this, Ot).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!n(this, Ot).has(e))
            return pt(`Optional content group not found: ${e}`), !0;
          if (n(this, Ot).get(e).visible)
            return !1;
        }
        return !0;
      }
      return pt(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return pt(`Unknown group type ${t.type}.`), !0;
  }
  setVisibility(t, e = !0, i = !0) {
    var r;
    const s = n(this, Ot).get(t);
    if (!s) {
      pt(`Optional content group not found: ${t}`);
      return;
    }
    if (i && e && s.rbGroups.length)
      for (const a of s.rbGroups)
        for (const o of a)
          o !== t && ((r = n(this, Ot).get(o)) == null || r._setVisible(So, !1, !0));
    s._setVisible(So, !!e, !0), m(this, or, null);
  }
  setOCGState({
    state: t,
    preserveRB: e
  }) {
    let i;
    for (const s of t) {
      switch (s) {
        case "ON":
        case "OFF":
        case "Toggle":
          i = s;
          continue;
      }
      const r = n(this, Ot).get(s);
      if (r)
        switch (i) {
          case "ON":
            this.setVisibility(s, !0, e);
            break;
          case "OFF":
            this.setVisibility(s, !1, e);
            break;
          case "Toggle":
            this.setVisibility(s, !r.visible, e);
            break;
        }
    }
    m(this, or, null);
  }
  get hasInitialVisibility() {
    return n(this, pl) === null || this.getHash() === n(this, pl);
  }
  getOrder() {
    return n(this, Ot).size ? n(this, gl) ? n(this, gl).slice() : [...n(this, Ot).keys()] : null;
  }
  getGroup(t) {
    return n(this, Ot).get(t) || null;
  }
  getHash() {
    if (n(this, or) !== null)
      return n(this, or);
    const t = new By();
    for (const [e, i] of n(this, Ot))
      t.update(`${e}:${i.visible}`);
    return m(this, or, t.hexdigest());
  }
  [Symbol.iterator]() {
    return n(this, Ot).entries();
  }
}
or = new WeakMap(), Ot = new WeakMap(), pl = new WeakMap(), gl = new WeakMap(), Dc = new WeakSet(), _p = function(t) {
  const e = t.length;
  if (e < 2)
    return !0;
  const i = t[0];
  for (let s = 1; s < e; s++) {
    const r = t[s];
    let a;
    if (Array.isArray(r))
      a = x(this, Dc, _p).call(this, r);
    else if (n(this, Ot).has(r))
      a = n(this, Ot).get(r).visible;
    else
      return pt(`Optional content group not found: ${r}`), !0;
    switch (i) {
      case "And":
        if (!a)
          return !1;
        break;
      case "Or":
        if (a)
          return !0;
        break;
      case "Not":
        return !a;
      default:
        return !0;
    }
  }
  return i === "And";
};
class y0 {
  constructor(t, {
    disableRange: e = !1,
    disableStream: i = !1
  }) {
    xt(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: s,
      initialData: r,
      progressiveDone: a,
      contentDispositionFilename: o
    } = t;
    if (this._queuedChunks = [], this._progressiveDone = a, this._contentDispositionFilename = o, (r == null ? void 0 : r.length) > 0) {
      const l = r instanceof Uint8Array && r.byteLength === r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
      this._queuedChunks.push(l);
    }
    this._pdfDataRangeTransport = t, this._isStreamingSupported = !i, this._isRangeSupported = !e, this._contentLength = s, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener((l, c) => {
      this._onReceiveData({
        begin: l,
        chunk: c
      });
    }), t.addProgressListener((l, c) => {
      this._onProgress({
        loaded: l,
        total: c
      });
    }), t.addProgressiveReadListener((l) => {
      this._onReceiveData({
        chunk: l
      });
    }), t.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), t.transportReady();
  }
  _onReceiveData({
    begin: t,
    chunk: e
  }) {
    const i = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
    if (t === void 0)
      this._fullRequestReader ? this._fullRequestReader._enqueue(i) : this._queuedChunks.push(i);
    else {
      const s = this._rangeReaders.some(function(r) {
        return r._begin !== t ? !1 : (r._enqueue(i), !0);
      });
      xt(s, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  _onProgress(t) {
    var e, i, s, r;
    t.total === void 0 ? (i = (e = this._rangeReaders[0]) == null ? void 0 : e.onProgress) == null || i.call(e, {
      loaded: t.loaded
    }) : (r = (s = this._fullRequestReader) == null ? void 0 : s.onProgress) == null || r.call(s, {
      loaded: t.loaded,
      total: t.total
    });
  }
  _onProgressiveDone() {
    var t;
    (t = this._fullRequestReader) == null || t.progressiveDone(), this._progressiveDone = !0;
  }
  _removeRangeReader(t) {
    const e = this._rangeReaders.indexOf(t);
    e >= 0 && this._rangeReaders.splice(e, 1);
  }
  getFullReader() {
    xt(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const t = this._queuedChunks;
    return this._queuedChunks = null, new b0(this, t, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const i = new v0(this, t, e);
    return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(i), i;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeReaders.slice(0))
      i.cancel(t);
    this._pdfDataRangeTransport.abort();
  }
}
class b0 {
  constructor(t, e, i = !1, s = null) {
    this._stream = t, this._done = i || !1, this._filename = pf(s) ? s : null, this._queuedChunks = e || [], this._loaded = 0;
    for (const r of this._queuedChunks)
      this._loaded += r.byteLength;
    this._requests = [], this._headersReady = Promise.resolve(), t._fullRequestReader = this, this.onProgress = null;
  }
  _enqueue(t) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t,
      done: !1
    }) : this._queuedChunks.push(t), this._loaded += t.byteLength);
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0)
      return {
        value: this._queuedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0;
  }
  progressiveDone() {
    this._done || (this._done = !0);
  }
}
class v0 {
  constructor(t, e, i) {
    this._stream = t, this._begin = e, this._end = i, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
  }
  _enqueue(t) {
    if (!this._done) {
      if (this._requests.length === 0)
        this._queuedChunk = t;
      else {
        this._requests.shift().resolve({
          value: t,
          done: !1
        });
        for (const i of this._requests)
          i.resolve({
            value: void 0,
            done: !0
          });
        this._requests.length = 0;
      }
      this._done = !0, this._stream._removeRangeReader(this);
    }
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._queuedChunk) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._stream._removeRangeReader(this);
  }
}
function w0(h) {
  let t = !0, e = i("filename\\*", "i").exec(h);
  if (e) {
    e = e[1];
    let d = o(e);
    return d = unescape(d), d = l(d), d = c(d), r(d);
  }
  if (e = a(h), e) {
    const d = c(e);
    return r(d);
  }
  if (e = i("filename", "i").exec(h), e) {
    e = e[1];
    let d = o(e);
    return d = c(d), r(d);
  }
  function i(d, u) {
    return new RegExp("(?:^|;)\\s*" + d + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', u);
  }
  function s(d, u) {
    if (d) {
      if (!/^[\x00-\xFF]+$/.test(u))
        return u;
      try {
        const g = new TextDecoder(d, {
          fatal: !0
        }), b = Rd(u);
        u = g.decode(b), t = !1;
      } catch {
      }
    }
    return u;
  }
  function r(d) {
    return t && /[\x80-\xff]/.test(d) && (d = s("utf-8", d), t && (d = s("iso-8859-1", d))), d;
  }
  function a(d) {
    const u = [];
    let g;
    const b = i("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (g = b.exec(d)) !== null; ) {
      let [, w, M, k] = g;
      if (w = parseInt(w, 10), w in u) {
        if (w === 0)
          break;
        continue;
      }
      u[w] = [M, k];
    }
    const E = [];
    for (let w = 0; w < u.length && w in u; ++w) {
      let [M, k] = u[w];
      k = o(k), M && (k = unescape(k), w === 0 && (k = l(k))), E.push(k);
    }
    return E.join("");
  }
  function o(d) {
    if (d.startsWith('"')) {
      const u = d.slice(1).split('\\"');
      for (let g = 0; g < u.length; ++g) {
        const b = u[g].indexOf('"');
        b !== -1 && (u[g] = u[g].slice(0, b), u.length = g + 1), u[g] = u[g].replaceAll(/\\(.)/g, "$1");
      }
      d = u.join('"');
    }
    return d;
  }
  function l(d) {
    const u = d.indexOf("'");
    if (u === -1)
      return d;
    const g = d.slice(0, u), E = d.slice(u + 1).replace(/^[^']*'/, "");
    return s(g, E);
  }
  function c(d) {
    return !d.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(d) ? d : d.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(u, g, b, E) {
      if (b === "q" || b === "Q")
        return E = E.replaceAll("_", " "), E = E.replaceAll(/=([0-9a-fA-F]{2})/g, function(w, M) {
          return String.fromCharCode(parseInt(M, 16));
        }), s(g, E);
      try {
        E = atob(E);
      } catch {
      }
      return s(g, E);
    });
  }
  return "";
}
function Jy(h, t) {
  const e = new Headers();
  if (!h || !t || typeof t != "object")
    return e;
  for (const i in t) {
    const s = t[i];
    s !== void 0 && e.append(i, s);
  }
  return e;
}
function gf(h) {
  var t;
  return ((t = URL.parse(h)) == null ? void 0 : t.origin) ?? null;
}
function Qy({
  responseHeaders: h,
  isHttp: t,
  rangeChunkSize: e,
  disableRange: i
}) {
  const s = {
    allowRangeRequests: !1,
    suggestedLength: void 0
  }, r = parseInt(h.get("Content-Length"), 10);
  return !Number.isInteger(r) || (s.suggestedLength = r, r <= 2 * e) || i || !t || h.get("Accept-Ranges") !== "bytes" || (h.get("Content-Encoding") || "identity") !== "identity" || (s.allowRangeRequests = !0), s;
}
function Zy(h) {
  const t = h.get("Content-Disposition");
  if (t) {
    let e = w0(t);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (pf(e))
      return e;
  }
  return null;
}
function Od(h, t) {
  return new zh(`Unexpected server response (${h}) while retrieving PDF "${t}".`, h, h === 404 || h === 0 && t.startsWith("file:"));
}
function tb(h) {
  return h === 200 || h === 206;
}
function eb(h, t, e) {
  return {
    method: "GET",
    headers: h,
    signal: e.signal,
    mode: "cors",
    credentials: t ? "include" : "same-origin",
    redirect: "follow"
  };
}
function ib(h) {
  return h instanceof Uint8Array ? h.buffer : h instanceof ArrayBuffer ? h : (pt(`getArrayBuffer - unexpected data format: ${h}`), new Uint8Array(h).buffer);
}
class S0 {
  constructor(t) {
    V(this, "_responseOrigin", null);
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = Jy(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return xt(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new A0(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const i = new x0(this, t, e);
    return this._rangeRequestReaders.push(i), i;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeRequestReaders.slice(0))
      i.cancel(t);
  }
}
class A0 {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
    const i = new Headers(t.headers), s = e.url;
    fetch(s, eb(i, this._withCredentials, this._abortController)).then((r) => {
      if (t._responseOrigin = gf(r.url), !tb(r.status))
        throw Od(r.status, s);
      this._reader = r.body.getReader(), this._headersCapability.resolve();
      const a = r.headers, {
        allowRangeRequests: o,
        suggestedLength: l
      } = Qy({
        responseHeaders: a,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = o, this._contentLength = l || this._contentLength, this._filename = Zy(a), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new On("Streaming is disabled."));
    }).catch(this._headersCapability.reject), this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var i;
    await this._headersCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (i = this.onProgress) == null || i.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: ib(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class x0 {
  constructor(t, e, i) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const s = t.source;
    this._withCredentials = s.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !s.disableStream, this._abortController = new AbortController();
    const r = new Headers(t.headers);
    r.append("Range", `bytes=${e}-${i - 1}`);
    const a = s.url;
    fetch(a, eb(r, this._withCredentials, this._abortController)).then((o) => {
      const l = gf(o.url);
      if (l !== t._responseOrigin)
        throw new Error(`Expected range response-origin "${l}" to match "${t._responseOrigin}".`);
      if (!tb(o.status))
        throw Od(o.status, a);
      this._readCapability.resolve(), this._reader = o.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var i;
    await this._readCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (i = this.onProgress) == null || i.call(this, {
      loaded: this._loaded
    }), {
      value: ib(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
const Bf = 200, Hf = 206;
function _0(h) {
  const t = h.response;
  return typeof t != "string" ? t : Rd(t).buffer;
}
class E0 {
  constructor({
    url: t,
    httpHeaders: e,
    withCredentials: i
  }) {
    V(this, "_responseOrigin", null);
    this.url = t, this.isHttp = /^https?:/i.test(t), this.headers = Jy(this.isHttp, e), this.withCredentials = i || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  request(t) {
    const e = new XMLHttpRequest(), i = this.currXhrId++, s = this.pendingRequests[i] = {
      xhr: e
    };
    e.open("GET", this.url), e.withCredentials = this.withCredentials;
    for (const [r, a] of this.headers)
      e.setRequestHeader(r, a);
    return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), s.expectedStatus = Hf) : s.expectedStatus = Bf, e.responseType = "arraybuffer", xt(t.onError, "Expected `onError` callback to be provided."), e.onerror = () => {
      t.onError(e.status);
    }, e.onreadystatechange = this.onStateChange.bind(this, i), e.onprogress = this.onProgress.bind(this, i), s.onHeadersReceived = t.onHeadersReceived, s.onDone = t.onDone, s.onError = t.onError, s.onProgress = t.onProgress, e.send(null), i;
  }
  onProgress(t, e) {
    var s;
    const i = this.pendingRequests[t];
    i && ((s = i.onProgress) == null || s.call(i, e));
  }
  onStateChange(t, e) {
    const i = this.pendingRequests[t];
    if (!i)
      return;
    const s = i.xhr;
    if (s.readyState >= 2 && i.onHeadersReceived && (i.onHeadersReceived(), delete i.onHeadersReceived), s.readyState !== 4 || !(t in this.pendingRequests))
      return;
    if (delete this.pendingRequests[t], s.status === 0 && this.isHttp) {
      i.onError(s.status);
      return;
    }
    const r = s.status || Bf;
    if (!(r === Bf && i.expectedStatus === Hf) && r !== i.expectedStatus) {
      i.onError(s.status);
      return;
    }
    const o = _0(s);
    if (r === Hf) {
      const l = s.getResponseHeader("Content-Range"), c = /bytes (\d+)-(\d+)\/(\d+)/.exec(l);
      c ? i.onDone({
        begin: parseInt(c[1], 10),
        chunk: o
      }) : (pt('Missing or invalid "Content-Range" header.'), i.onError(0));
    } else o ? i.onDone({
      begin: 0,
      chunk: o
    }) : i.onError(s.status);
  }
  getRequestXhr(t) {
    return this.pendingRequests[t].xhr;
  }
  isPendingRequest(t) {
    return t in this.pendingRequests;
  }
  abortRequest(t) {
    const e = this.pendingRequests[t].xhr;
    delete this.pendingRequests[t], e.abort();
  }
}
class C0 {
  constructor(t) {
    this._source = t, this._manager = new E0(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }
  getFullReader() {
    return xt(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new T0(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    const i = new P0(this._manager, t, e);
    return i.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(i), i;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeRequestReaders.slice(0))
      i.cancel(t);
  }
}
class T0 {
  constructor(t, e) {
    this._manager = t, this._url = e.url, this._fullRequestId = t.request({
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    }), this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }
  _onHeadersReceived() {
    const t = this._fullRequestId, e = this._manager.getRequestXhr(t);
    this._manager._responseOrigin = gf(e.responseURL);
    const i = e.getAllResponseHeaders(), s = new Headers(i ? i.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((o) => {
      const [l, ...c] = o.split(": ");
      return [l, c.join(": ")];
    }) : []), {
      allowRangeRequests: r,
      suggestedLength: a
    } = Qy({
      responseHeaders: s,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    r && (this._isRangeSupported = !0), this._contentLength = a || this._contentLength, this._filename = Zy(s), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
  }
  _onDone(t) {
    if (t && (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t.chunk,
      done: !1
    }) : this._cachedChunks.push(t.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
      for (const e of this._requests)
        e.resolve({
          value: void 0,
          done: !0
        });
      this._requests.length = 0;
    }
  }
  _onError(t) {
    this._storedError = Od(t, this._url), this._headersCapability.reject(this._storedError);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }
  _onProgress(t) {
    var e;
    (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded,
      total: t.lengthComputable ? t.total : this._contentLength
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  async read() {
    if (await this._headersCapability.promise, this._storedError)
      throw this._storedError;
    if (this._cachedChunks.length > 0)
      return {
        value: this._cachedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0, this._headersCapability.reject(t);
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
  }
}
class P0 {
  constructor(t, e, i) {
    this._manager = t, this._url = t.url, this._requestId = t.request({
      begin: e,
      end: i,
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    }), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }
  _onHeadersReceived() {
    var e;
    const t = gf((e = this._manager.getRequestXhr(this._requestId)) == null ? void 0 : e.responseURL);
    t !== this._manager._responseOrigin && (this._storedError = new Error(`Expected range response-origin "${t}" to match "${this._manager._responseOrigin}".`), this._onError(0));
  }
  _close() {
    var t;
    (t = this.onClosed) == null || t.call(this, this);
  }
  _onDone(t) {
    const e = t.chunk;
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: e,
      done: !1
    }) : this._queuedChunk = e, this._done = !0;
    for (const i of this._requests)
      i.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._close();
  }
  _onError(t) {
    this._storedError ?? (this._storedError = Od(t, this._url));
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }
  _onProgress(t) {
    var e;
    this.isStreamingSupported || (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded
    });
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._queuedChunk !== null) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
  }
}
const k0 = /^[a-z][a-z0-9\-+.]+:/i;
function R0(h) {
  if (k0.test(h))
    return new URL(h);
  const t = process.getBuiltinModule("url");
  return new URL(t.pathToFileURL(h));
}
class M0 {
  constructor(t) {
    this.source = t, this.url = R0(t.url), xt(this.url.protocol === "file:", "PDFNodeStream only supports file:// URLs."), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return xt(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = new L0(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const i = new D0(this, t, e);
    return this._rangeRequestReaders.push(i), i;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeRequestReaders.slice(0))
      i.cancel(t);
  }
}
class L0 {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
    const i = process.getBuiltinModule("fs");
    i.promises.lstat(this._url).then((s) => {
      this._contentLength = s.size, this._setReadableStream(i.createReadStream(this._url)), this._headersCapability.resolve();
    }, (s) => {
      s.code === "ENOENT" && (s = Od(0, this._url.href)), this._storedError = s, this._headersCapability.reject(s);
    });
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var i;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (i = this.onProgress) == null || i.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new On("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class D0 {
  constructor(t, e, i) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const s = t.source;
    this._isStreamingSupported = !s.disableStream;
    const r = process.getBuiltinModule("fs");
    this._setReadableStream(r.createReadStream(this._url, {
      start: e,
      end: i - 1
    }));
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var i;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (i = this.onProgress) == null || i.call(this, {
      loaded: this._loaded
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
const ph = Symbol("INITIAL_DATA");
var ui, Oc, Ep;
class sb {
  constructor() {
    v(this, Oc);
    v(this, ui, /* @__PURE__ */ Object.create(null));
  }
  get(t, e = null) {
    if (e) {
      const s = x(this, Oc, Ep).call(this, t);
      return s.promise.then(() => e(s.data)), null;
    }
    const i = n(this, ui)[t];
    if (!i || i.data === ph)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return i.data;
  }
  has(t) {
    const e = n(this, ui)[t];
    return !!e && e.data !== ph;
  }
  delete(t) {
    const e = n(this, ui)[t];
    return !e || e.data === ph ? !1 : (delete n(this, ui)[t], !0);
  }
  resolve(t, e = null) {
    const i = x(this, Oc, Ep).call(this, t);
    i.data = e, i.resolve();
  }
  clear() {
    var t;
    for (const e in n(this, ui)) {
      const {
        data: i
      } = n(this, ui)[e];
      (t = i == null ? void 0 : i.bitmap) == null || t.close();
    }
    m(this, ui, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const t in n(this, ui)) {
      const {
        data: e
      } = n(this, ui)[t];
      e !== ph && (yield [t, e]);
    }
  }
}
ui = new WeakMap(), Oc = new WeakSet(), Ep = function(t) {
  var e;
  return (e = n(this, ui))[t] || (e[t] = {
    ...Promise.withResolvers(),
    data: ph
  });
};
const O0 = 1e5, Em = 30;
var Bm, lr, si, Ic, Fc, _a, pn, Nc, Bc, Ea, ml, yl, hr, bl, Hc, vl, Ca, jc, zc, ee, wl, Ta, $c, cr, Sl, Nn, nb, rb, Cp, ki, ou, Tp, ab, ob;
let Gh = (ee = class {
  constructor({
    textContentSource: t,
    container: e,
    viewport: i
  }) {
    v(this, Nn);
    v(this, lr, Promise.withResolvers());
    v(this, si, null);
    v(this, Ic, !1);
    v(this, Fc, !!((Bm = globalThis.FontInspector) != null && Bm.enabled));
    v(this, _a, null);
    v(this, pn, null);
    v(this, Nc, 0);
    v(this, Bc, 0);
    v(this, Ea, null);
    v(this, ml, null);
    v(this, yl, 0);
    v(this, hr, 0);
    v(this, bl, /* @__PURE__ */ Object.create(null));
    v(this, Hc, []);
    v(this, vl, null);
    v(this, Ca, []);
    v(this, jc, /* @__PURE__ */ new WeakMap());
    v(this, zc, null);
    var l;
    if (t instanceof ReadableStream)
      m(this, vl, t);
    else if (typeof t == "object")
      m(this, vl, new ReadableStream({
        start(c) {
          c.enqueue(t), c.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    m(this, si, m(this, ml, e)), m(this, hr, i.scale * cs.pixelRatio), m(this, yl, i.rotation), m(this, pn, {
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: s,
      pageHeight: r,
      pageX: a,
      pageY: o
    } = i.rawDims;
    m(this, zc, [1, 0, 0, -1, -a, o + r]), m(this, Bc, s), m(this, Nc, r), x(l = ee, ki, ab).call(l), Fr(e, i), n(this, lr).promise.finally(() => {
      n(ee, Sl).delete(this), m(this, pn, null), m(this, bl, null);
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const {
      isWindows: t,
      isFirefox: e
    } = xe.platform;
    return yt(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", `${t && e ? "Calibri, " : ""}sans-serif`], ["monospace", `${t && e ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    const t = () => {
      n(this, Ea).read().then(({
        value: e,
        done: i
      }) => {
        if (i) {
          n(this, lr).resolve();
          return;
        }
        n(this, _a) ?? m(this, _a, e.lang), Object.assign(n(this, bl), e.styles), x(this, Nn, nb).call(this, e.items), t();
      }, n(this, lr).reject);
    };
    return m(this, Ea, n(this, vl).getReader()), n(ee, Sl).add(this), t(), n(this, lr).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }) {
    var r;
    const i = t.scale * cs.pixelRatio, s = t.rotation;
    if (s !== n(this, yl) && (e == null || e(), m(this, yl, s), Fr(n(this, ml), {
      rotation: s
    })), i !== n(this, hr)) {
      e == null || e(), m(this, hr, i);
      const a = {
        div: null,
        properties: null,
        ctx: x(r = ee, ki, ou).call(r, n(this, _a))
      };
      for (const o of n(this, Ca))
        a.properties = n(this, jc).get(o), a.div = o, x(this, Nn, Cp).call(this, a);
    }
  }
  cancel() {
    var e;
    const t = new On("TextLayer task cancelled.");
    (e = n(this, Ea)) == null || e.cancel(t).catch(() => {
    }), m(this, Ea, null), n(this, lr).reject(t);
  }
  get textDivs() {
    return n(this, Ca);
  }
  get textContentItemsStr() {
    return n(this, Hc);
  }
  static cleanup() {
    if (!(n(this, Sl).size > 0)) {
      n(this, wl).clear();
      for (const {
        canvas: t
      } of n(this, Ta).values())
        t.remove();
      n(this, Ta).clear();
    }
  }
}, lr = new WeakMap(), si = new WeakMap(), Ic = new WeakMap(), Fc = new WeakMap(), _a = new WeakMap(), pn = new WeakMap(), Nc = new WeakMap(), Bc = new WeakMap(), Ea = new WeakMap(), ml = new WeakMap(), yl = new WeakMap(), hr = new WeakMap(), bl = new WeakMap(), Hc = new WeakMap(), vl = new WeakMap(), Ca = new WeakMap(), jc = new WeakMap(), zc = new WeakMap(), wl = new WeakMap(), Ta = new WeakMap(), $c = new WeakMap(), cr = new WeakMap(), Sl = new WeakMap(), Nn = new WeakSet(), nb = function(t) {
  var s, r;
  if (n(this, Ic))
    return;
  (r = n(this, pn)).ctx ?? (r.ctx = x(s = ee, ki, ou).call(s, n(this, _a)));
  const e = n(this, Ca), i = n(this, Hc);
  for (const a of t) {
    if (e.length > O0) {
      pt("Ignoring additional textDivs for performance reasons."), m(this, Ic, !0);
      return;
    }
    if (a.str === void 0) {
      if (a.type === "beginMarkedContentProps" || a.type === "beginMarkedContent") {
        const o = n(this, si);
        m(this, si, document.createElement("span")), n(this, si).classList.add("markedContent"), a.id && n(this, si).setAttribute("id", `${a.id}`), o.append(n(this, si));
      } else a.type === "endMarkedContent" && m(this, si, n(this, si).parentNode);
      continue;
    }
    i.push(a.str), x(this, Nn, rb).call(this, a);
  }
}, rb = function(t) {
  var w;
  const e = document.createElement("span"), i = {
    angle: 0,
    canvasWidth: 0,
    hasText: t.str !== "",
    hasEOL: t.hasEOL,
    fontSize: 0
  };
  n(this, Ca).push(e);
  const s = tt.transform(n(this, zc), t.transform);
  let r = Math.atan2(s[1], s[0]);
  const a = n(this, bl)[t.fontName];
  a.vertical && (r += Math.PI / 2);
  let o = n(this, Fc) && a.fontSubstitution || a.fontFamily;
  o = ee.fontFamilyMap.get(o) || o;
  const l = Math.hypot(s[2], s[3]), c = l * x(w = ee, ki, ob).call(w, o, a, n(this, _a));
  let d, u;
  r === 0 ? (d = s[4], u = s[5] - c) : (d = s[4] + c * Math.sin(r), u = s[5] - c * Math.cos(r));
  const g = "calc(var(--total-scale-factor) *", b = e.style;
  n(this, si) === n(this, ml) ? (b.left = `${(100 * d / n(this, Bc)).toFixed(2)}%`, b.top = `${(100 * u / n(this, Nc)).toFixed(2)}%`) : (b.left = `${g}${d.toFixed(2)}px)`, b.top = `${g}${u.toFixed(2)}px)`), b.fontSize = `${g}${(n(ee, cr) * l).toFixed(2)}px)`, b.fontFamily = o, i.fontSize = l, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, n(this, Fc) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), r !== 0 && (i.angle = r * (180 / Math.PI));
  let E = !1;
  if (t.str.length > 1)
    E = !0;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const M = Math.abs(t.transform[0]), k = Math.abs(t.transform[3]);
    M !== k && Math.max(M, k) / Math.min(M, k) > 1.5 && (E = !0);
  }
  if (E && (i.canvasWidth = a.vertical ? t.height : t.width), n(this, jc).set(e, i), n(this, pn).div = e, n(this, pn).properties = i, x(this, Nn, Cp).call(this, n(this, pn)), i.hasText && n(this, si).append(e), i.hasEOL) {
    const M = document.createElement("br");
    M.setAttribute("role", "presentation"), n(this, si).append(M);
  }
}, Cp = function(t) {
  var o;
  const {
    div: e,
    properties: i,
    ctx: s
  } = t, {
    style: r
  } = e;
  let a = "";
  if (n(ee, cr) > 1 && (a = `scale(${1 / n(ee, cr)})`), i.canvasWidth !== 0 && i.hasText) {
    const {
      fontFamily: l
    } = r, {
      canvasWidth: c,
      fontSize: d
    } = i;
    x(o = ee, ki, Tp).call(o, s, d * n(this, hr), l);
    const {
      width: u
    } = s.measureText(e.textContent);
    u > 0 && (a = `scaleX(${c * n(this, hr) / u}) ${a}`);
  }
  i.angle !== 0 && (a = `rotate(${i.angle}deg) ${a}`), a.length > 0 && (r.transform = a);
}, ki = new WeakSet(), ou = function(t = null) {
  let e = n(this, Ta).get(t || (t = ""));
  if (!e) {
    const i = document.createElement("canvas");
    i.className = "hiddenCanvasElement", i.lang = t, document.body.append(i), e = i.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), n(this, Ta).set(t, e), n(this, $c).set(e, {
      size: 0,
      family: ""
    });
  }
  return e;
}, Tp = function(t, e, i) {
  const s = n(this, $c).get(t);
  e === s.size && i === s.family || (t.font = `${e}px ${i}`, s.size = e, s.family = i);
}, ab = function() {
  if (n(this, cr) !== null)
    return;
  const t = document.createElement("div");
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), m(this, cr, t.getBoundingClientRect().height), t.remove();
}, ob = function(t, e, i) {
  const s = n(this, wl).get(t);
  if (s)
    return s;
  const r = x(this, ki, ou).call(this, i);
  r.canvas.width = r.canvas.height = Em, x(this, ki, Tp).call(this, r, Em, t);
  const a = r.measureText(""), o = a.fontBoundingBoxAscent, l = Math.abs(a.fontBoundingBoxDescent);
  r.canvas.width = r.canvas.height = 0;
  let c = 0.8;
  return o ? c = o / (o + l) : (xe.platform.isFirefox && pt("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering."), e.ascent ? c = e.ascent : e.descent && (c = 1 + e.descent)), n(this, wl).set(t, c), c;
}, v(ee, ki), v(ee, wl, /* @__PURE__ */ new Map()), v(ee, Ta, /* @__PURE__ */ new Map()), v(ee, $c, /* @__PURE__ */ new WeakMap()), v(ee, cr, null), v(ee, Sl, /* @__PURE__ */ new Set()), ee);
const I0 = 100;
function Tg(h = {}) {
  typeof h == "string" || h instanceof URL ? h = {
    url: h
  } : (h instanceof ArrayBuffer || ArrayBuffer.isView(h)) && (h = {
    data: h
  });
  const t = new Pp(), {
    docId: e
  } = t, i = h.url ? Uw(h.url) : null, s = h.data ? Ww(h.data) : null, r = h.httpHeaders || null, a = h.withCredentials === !0, o = h.password ?? null, l = h.range instanceof Pg ? h.range : null, c = Number.isInteger(h.rangeChunkSize) && h.rangeChunkSize > 0 ? h.rangeChunkSize : 2 ** 16;
  let d = h.worker instanceof ah ? h.worker : null;
  const u = h.verbosity, g = typeof h.docBaseUrl == "string" && !Ld(h.docBaseUrl) ? h.docBaseUrl : null, b = Ud(h.cMapUrl), E = h.cMapPacked !== !1, w = h.CMapReaderFactory || (Xe ? Jw : dm), M = Ud(h.iccUrl), k = Ud(h.standardFontDataUrl), L = h.StandardFontDataFactory || (Xe ? Qw : um), R = Ud(h.wasmUrl), p = h.WasmFactory || (Xe ? Zw : fm), f = h.stopAtErrors !== !0, y = Number.isInteger(h.maxImageSize) && h.maxImageSize > -1 ? h.maxImageSize : -1, A = h.isEvalSupported !== !1, T = typeof h.isOffscreenCanvasSupported == "boolean" ? h.isOffscreenCanvasSupported : !Xe, P = typeof h.isImageDecoderSupported == "boolean" ? h.isImageDecoderSupported : !Xe && (xe.platform.isFirefox || !globalThis.chrome), C = Number.isInteger(h.canvasMaxAreaInBytes) ? h.canvasMaxAreaInBytes : -1, D = typeof h.disableFontFace == "boolean" ? h.disableFontFace : Xe, N = h.fontExtraProperties === !0, I = h.enableXfa === !0, B = h.ownerDocument || globalThis.document, j = h.disableRange === !0, z = h.disableStream === !0, S = h.disableAutoFetch === !0, K = h.pdfBug === !0, F = h.CanvasFactory || (Xe ? Kw : qw), _ = h.FilterFactory || (Xe ? Yw : Xw), O = h.enableHWA === !0, H = h.useWasm !== !1, U = l ? l.length : h.length ?? NaN, $ = typeof h.useSystemFonts == "boolean" ? h.useSystemFonts : !Xe && !D, X = typeof h.useWorkerFetch == "boolean" ? h.useWorkerFetch : !!(w === dm && L === um && p === fm && b && k && R && yh(b, document.baseURI) && yh(k, document.baseURI) && yh(R, document.baseURI)), G = null;
  _w(u);
  const W = {
    canvasFactory: new F({
      ownerDocument: B,
      enableHWA: O
    }),
    filterFactory: new _({
      docId: e,
      ownerDocument: B
    }),
    cMapReaderFactory: X ? null : new w({
      baseUrl: b,
      isCompressed: E
    }),
    standardFontDataFactory: X ? null : new L({
      baseUrl: k
    }),
    wasmFactory: X ? null : new p({
      baseUrl: R
    })
  };
  d || (d = ah.create({
    verbosity: u,
    port: os.workerPort
  }), t._worker = d);
  const ht = {
    docId: e,
    apiVersion: "5.4.296",
    data: s,
    password: o,
    disableAutoFetch: S,
    rangeChunkSize: c,
    length: U,
    docBaseUrl: g,
    enableXfa: I,
    evaluatorOptions: {
      maxImageSize: y,
      disableFontFace: D,
      ignoreErrors: f,
      isEvalSupported: A,
      isOffscreenCanvasSupported: T,
      isImageDecoderSupported: P,
      canvasMaxAreaInBytes: C,
      fontExtraProperties: N,
      useSystemFonts: $,
      useWasm: H,
      useWorkerFetch: X,
      cMapUrl: b,
      iccUrl: M,
      standardFontDataUrl: k,
      wasmUrl: R
    }
  }, ct = {
    ownerDocument: B,
    pdfBug: K,
    styleElement: G,
    loadingParams: {
      disableAutoFetch: S,
      enableXfa: I
    }
  };
  return d.promise.then(function() {
    if (t.destroyed)
      throw new Error("Loading aborted");
    if (d.destroyed)
      throw new Error("Worker was destroyed");
    const dt = d.messageHandler.sendWithPromise("GetDocRequest", ht, s ? [s.buffer] : null);
    let ut;
    if (l)
      ut = new y0(l, {
        disableRange: j,
        disableStream: z
      });
    else if (!s) {
      if (!i)
        throw new Error("getDocument - no `url` parameter provided.");
      const rt = yh(i) ? S0 : Xe ? M0 : C0;
      ut = new rt({
        url: i,
        length: U,
        httpHeaders: r,
        withCredentials: a,
        rangeChunkSize: c,
        disableRange: j,
        disableStream: z
      });
    }
    return dt.then((rt) => {
      if (t.destroyed)
        throw new Error("Loading aborted");
      if (d.destroyed)
        throw new Error("Worker was destroyed");
      const st = new xh(e, rt, d.port), nt = new B0(st, t, ut, ct, W, O);
      t._transport = nt, st.send("Ready", null);
    });
  }).catch(t._capability.reject), t;
}
var Qu;
const Zu = class Zu {
  constructor() {
    V(this, "_capability", Promise.withResolvers());
    V(this, "_transport", null);
    V(this, "_worker", null);
    V(this, "docId", `d${de(Zu, Qu)._++}`);
    V(this, "destroyed", !1);
    V(this, "onPassword", null);
    V(this, "onProgress", null);
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var t, e, i, s;
    this.destroyed = !0;
    try {
      (t = this._worker) != null && t.port && (this._worker._pendingDestroy = !0), await ((e = this._transport) == null ? void 0 : e.destroy());
    } catch (r) {
      throw (i = this._worker) != null && i.port && delete this._worker._pendingDestroy, r;
    }
    this._transport = null, (s = this._worker) == null || s.destroy(), this._worker = null;
  }
  async getData() {
    return this._transport.getData();
  }
};
Qu = new WeakMap(), v(Zu, Qu, 0);
let Pp = Zu;
var Pa, Uc, Wc, Gc, Vc, Hm;
let Pg = (Hm = class {
  constructor(t, e, i = !1, s = null) {
    v(this, Pa, Promise.withResolvers());
    v(this, Uc, []);
    v(this, Wc, []);
    v(this, Gc, []);
    v(this, Vc, []);
    this.length = t, this.initialData = e, this.progressiveDone = i, this.contentDispositionFilename = s;
  }
  addRangeListener(t) {
    n(this, Vc).push(t);
  }
  addProgressListener(t) {
    n(this, Gc).push(t);
  }
  addProgressiveReadListener(t) {
    n(this, Wc).push(t);
  }
  addProgressiveDoneListener(t) {
    n(this, Uc).push(t);
  }
  onDataRange(t, e) {
    for (const i of n(this, Vc))
      i(t, e);
  }
  onDataProgress(t, e) {
    n(this, Pa).promise.then(() => {
      for (const i of n(this, Gc))
        i(t, e);
    });
  }
  onDataProgressiveRead(t) {
    n(this, Pa).promise.then(() => {
      for (const e of n(this, Wc))
        e(t);
    });
  }
  onDataProgressiveDone() {
    n(this, Pa).promise.then(() => {
      for (const t of n(this, Uc))
        t();
    });
  }
  transportReady() {
    n(this, Pa).resolve();
  }
  requestDataRange(t, e) {
    zt("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
}, Pa = new WeakMap(), Uc = new WeakMap(), Wc = new WeakMap(), Gc = new WeakMap(), Vc = new WeakMap(), Hm);
class F0 {
  constructor(t, e) {
    this._pdfInfo = t, this._transport = e;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get canvasFactory() {
    return this._transport.canvasFactory;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return yt(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(t) {
    return this._transport.getPage(t);
  }
  getPageIndex(t) {
    return this._transport.getPageIndex(t);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(t) {
    return this._transport.getDestination(t);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getAnnotationsByType(t, e) {
    return this._transport.getAnnotationsByType(t, e);
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getOptionalContentConfig(e);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(t = !1) {
    return this._transport.startCleanup(t || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(t) {
    return this._transport.cachedPageNumber(t);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
var gn, ka, Rh;
class N0 {
  constructor(t, e, i, s = !1) {
    v(this, ka);
    v(this, gn, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = i, this._stats = s ? new nm() : null, this._pdfBug = s, this.commonObjs = i.commonObjs, this.objs = new sb(), this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1, this.recordedBBoxes = null;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale: t,
    rotation: e = this.rotate,
    offsetX: i = 0,
    offsetY: s = 0,
    dontFlip: r = !1
  } = {}) {
    return new Md({
      viewBox: this.view,
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: i,
      offsetY: s,
      dontFlip: r
    });
  }
  getAnnotations({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getAnnotations(this._pageIndex, e);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return yt(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var t;
    return ((t = this._transport._htmlForXfa) == null ? void 0 : t.children[this._pageIndex]) || null;
  }
  render({
    canvasContext: t,
    canvas: e = t.canvas,
    viewport: i,
    intent: s = "display",
    annotationMode: r = Hs.ENABLE,
    transform: a = null,
    background: o = null,
    optionalContentConfigPromise: l = null,
    annotationCanvasMap: c = null,
    pageColors: d = null,
    printAnnotationStorage: u = null,
    isEditing: g = !1,
    recordOperations: b = !1,
    operationsFilter: E = null
  }) {
    var P, C, D;
    (P = this._stats) == null || P.time("Overall");
    const w = this._transport.getRenderingIntent(s, r, u, g), {
      renderingIntent: M,
      cacheKey: k
    } = w;
    m(this, gn, !1), l || (l = this._transport.getOptionalContentConfig(M));
    let L = this._intentStates.get(k);
    L || (L = /* @__PURE__ */ Object.create(null), this._intentStates.set(k, L)), L.streamReaderCancelTimeout && (clearTimeout(L.streamReaderCancelTimeout), L.streamReaderCancelTimeout = null);
    const R = !!(M & Ei.PRINT);
    L.displayReadyCapability || (L.displayReadyCapability = Promise.withResolvers(), L.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (C = this._stats) == null || C.time("Page Request"), this._pumpOperatorList(w));
    const p = !!(this._pdfBug && ((D = globalThis.StepperManager) != null && D.enabled)), f = !this.recordedBBoxes && (b || p), y = (N) => {
      var I, B;
      if (L.renderTasks.delete(A), f) {
        const j = (I = A.gfx) == null ? void 0 : I.dependencyTracker.take();
        j && (A.stepper && A.stepper.setOperatorBBoxes(j, A.gfx.dependencyTracker.takeDebugMetadata()), b && (this.recordedBBoxes = j));
      }
      R && m(this, gn, !0), x(this, ka, Rh).call(this), N ? (A.capability.reject(N), this._abortOperatorList({
        intentState: L,
        reason: N instanceof Error ? N : new Error(N)
      })) : A.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (B = globalThis.Stats) != null && B.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, A = new kp({
      callback: y,
      params: {
        canvas: e,
        canvasContext: t,
        dependencyTracker: f ? new e0(e, L.operatorList.length, p) : null,
        viewport: i,
        transform: a,
        background: o
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: c,
      operatorList: L.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !R,
      pdfBug: this._pdfBug,
      pageColors: d,
      enableHWA: this._transport.enableHWA,
      operationsFilter: E
    });
    (L.renderTasks || (L.renderTasks = /* @__PURE__ */ new Set())).add(A);
    const T = A.task;
    return Promise.all([L.displayReadyCapability.promise, l]).then(([N, I]) => {
      var B;
      if (this.destroyed) {
        y();
        return;
      }
      if ((B = this._stats) == null || B.time("Rendering"), !(I.renderingIntent & M))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      A.initializeGraphics({
        transparency: N,
        optionalContentConfig: I
      }), A.operatorListChanged();
    }).catch(y), T;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = Hs.ENABLE,
    printAnnotationStorage: i = null,
    isEditing: s = !1
  } = {}) {
    var c;
    function r() {
      o.operatorList.lastChunk && (o.opListReadCapability.resolve(o.operatorList), o.renderTasks.delete(l));
    }
    const a = this._transport.getRenderingIntent(t, e, i, s, !0);
    let o = this._intentStates.get(a.cacheKey);
    o || (o = /* @__PURE__ */ Object.create(null), this._intentStates.set(a.cacheKey, o));
    let l;
    return o.opListReadCapability || (l = /* @__PURE__ */ Object.create(null), l.operatorListChanged = r, o.opListReadCapability = Promise.withResolvers(), (o.renderTasks || (o.renderTasks = /* @__PURE__ */ new Set())).add(l), o.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (c = this._stats) == null || c.time("Page Request"), this._pumpOperatorList(a)), o.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent: t = !1,
    disableNormalization: e = !1
  } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageIndex: this._pageIndex,
      includeMarkedContent: t === !0,
      disableNormalization: e === !0
    }, {
      highWaterMark: 100,
      size(s) {
        return s.items.length;
      }
    });
  }
  getTextContent(t = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((i) => $h.textContent(i));
    const e = this.streamTextContent(t);
    return new Promise(function(i, s) {
      function r() {
        a.read().then(function({
          value: l,
          done: c
        }) {
          if (c) {
            i(o);
            return;
          }
          o.lang ?? (o.lang = l.lang), Object.assign(o.styles, l.styles), o.items.push(...l.items), r();
        }, s);
      }
      const a = e.getReader(), o = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      r();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = !0;
    const t = [];
    for (const e of this._intentStates.values())
      if (this._abortOperatorList({
        intentState: e,
        reason: new Error("Page was destroyed."),
        force: !0
      }), !e.opListReadCapability)
        for (const i of e.renderTasks)
          t.push(i.completed), i.cancel();
    return this.objs.clear(), m(this, gn, !1), Promise.all(t);
  }
  cleanup(t = !1) {
    m(this, gn, !0);
    const e = x(this, ka, Rh).call(this);
    return t && e && this._stats && (this._stats = new nm()), e;
  }
  _startRenderPage(t, e) {
    var s, r;
    const i = this._intentStates.get(e);
    i && ((s = this._stats) == null || s.timeEnd("Page Request"), (r = i.displayReadyCapability) == null || r.resolve(t));
  }
  _renderPageChunk(t, e) {
    for (let i = 0, s = t.length; i < s; i++)
      e.operatorList.fnArray.push(t.fnArray[i]), e.operatorList.argsArray.push(t.argsArray[i]);
    e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
    for (const i of e.renderTasks)
      i.operatorListChanged();
    t.lastChunk && x(this, ka, Rh).call(this);
  }
  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: e,
    annotationStorageSerializable: i,
    modifiedIds: s
  }) {
    const {
      map: r,
      transfer: a
    } = i, l = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: t,
      cacheKey: e,
      annotationStorage: r,
      modifiedIds: s
    }, a).getReader(), c = this._intentStates.get(e);
    c.streamReader = l;
    const d = () => {
      l.read().then(({
        value: u,
        done: g
      }) => {
        if (g) {
          c.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(u, c), d());
      }, (u) => {
        if (c.streamReader = null, !this._transport.destroyed) {
          if (c.operatorList) {
            c.operatorList.lastChunk = !0;
            for (const g of c.renderTasks)
              g.operatorListChanged();
            x(this, ka, Rh).call(this);
          }
          if (c.displayReadyCapability)
            c.displayReadyCapability.reject(u);
          else if (c.opListReadCapability)
            c.opListReadCapability.reject(u);
          else
            throw u;
        }
      });
    };
    d();
  }
  _abortOperatorList({
    intentState: t,
    reason: e,
    force: i = !1
  }) {
    if (t.streamReader) {
      if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !i) {
        if (t.renderTasks.size > 0)
          return;
        if (e instanceof ff) {
          let s = I0;
          e.extraDelay > 0 && e.extraDelay < 1e3 && (s += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
            t.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: t,
              reason: e,
              force: !0
            });
          }, s);
          return;
        }
      }
      if (t.streamReader.cancel(new On(e.message)).catch(() => {
      }), t.streamReader = null, !this._transport.destroyed) {
        for (const [s, r] of this._intentStates)
          if (r === t) {
            this._intentStates.delete(s);
            break;
          }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
gn = new WeakMap(), ka = new WeakSet(), Rh = function() {
  if (!n(this, gn) || this.destroyed)
    return !1;
  for (const {
    renderTasks: t,
    operatorList: e
  } of this._intentStates.values())
    if (t.size > 0 || !e.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), m(this, gn, !1), !0;
};
var dr, ts, mn, Ra, tf, Ma, La, Ye, lu, lb, hb, Mh, Al, hu;
const Gt = class Gt {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: i = Ew()
  } = {}) {
    v(this, Ye);
    v(this, dr, Promise.withResolvers());
    v(this, ts, null);
    v(this, mn, null);
    v(this, Ra, null);
    if (this.name = t, this.destroyed = !1, this.verbosity = i, e) {
      if (n(Gt, La).has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      n(Gt, La).set(e, this), x(this, Ye, lb).call(this, e);
    } else
      x(this, Ye, hb).call(this);
  }
  get promise() {
    return n(this, dr).promise;
  }
  get port() {
    return n(this, mn);
  }
  get messageHandler() {
    return n(this, ts);
  }
  destroy() {
    var t, e;
    this.destroyed = !0, (t = n(this, Ra)) == null || t.terminate(), m(this, Ra, null), n(Gt, La).delete(n(this, mn)), m(this, mn, null), (e = n(this, ts)) == null || e.destroy(), m(this, ts, null);
  }
  static create(t) {
    const e = n(this, La).get(t == null ? void 0 : t.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new Gt(t);
  }
  static get workerSrc() {
    if (os.workerSrc)
      return os.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return yt(this, "_setupFakeWorkerGlobal", (async () => n(this, Al, hu) ? n(this, Al, hu) : (await import(
      /*webpackIgnore: true*/
      /*@vite-ignore*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
dr = new WeakMap(), ts = new WeakMap(), mn = new WeakMap(), Ra = new WeakMap(), tf = new WeakMap(), Ma = new WeakMap(), La = new WeakMap(), Ye = new WeakSet(), lu = function() {
  n(this, dr).resolve(), n(this, ts).send("configure", {
    verbosity: this.verbosity
  });
}, lb = function(t) {
  m(this, mn, t), m(this, ts, new xh("main", "worker", t)), n(this, ts).on("ready", () => {
  }), x(this, Ye, lu).call(this);
}, hb = function() {
  if (n(Gt, Ma) || n(Gt, Al, hu)) {
    x(this, Ye, Mh).call(this);
    return;
  }
  let {
    workerSrc: t
  } = Gt;
  try {
    Gt._isSameOrigin(window.location, t) || (t = Gt._createCDNWrapper(new URL(t, window.location).href));
    const e = new Worker(t, {
      type: "module"
    }), i = new xh("main", "worker", e), s = () => {
      r.abort(), i.destroy(), e.terminate(), this.destroyed ? n(this, dr).reject(new Error("Worker was destroyed")) : x(this, Ye, Mh).call(this);
    }, r = new AbortController();
    e.addEventListener("error", () => {
      n(this, Ra) || s();
    }, {
      signal: r.signal
    }), i.on("test", (o) => {
      if (r.abort(), this.destroyed || !o) {
        s();
        return;
      }
      m(this, ts, i), m(this, mn, e), m(this, Ra, e), x(this, Ye, lu).call(this);
    }), i.on("ready", (o) => {
      if (r.abort(), this.destroyed) {
        s();
        return;
      }
      try {
        a();
      } catch {
        x(this, Ye, Mh).call(this);
      }
    });
    const a = () => {
      const o = new Uint8Array();
      i.send("test", o, [o.buffer]);
    };
    a();
    return;
  } catch {
    uf("The worker has been disabled.");
  }
  x(this, Ye, Mh).call(this);
}, Mh = function() {
  n(Gt, Ma) || (pt("Setting up fake worker."), m(Gt, Ma, !0)), Gt._setupFakeWorkerGlobal.then((t) => {
    if (this.destroyed) {
      n(this, dr).reject(new Error("Worker was destroyed"));
      return;
    }
    const e = new Vw();
    m(this, mn, e);
    const i = `fake${de(Gt, tf)._++}`, s = new xh(i + "_worker", i, e);
    t.setup(s, e), m(this, ts, new xh(i, i + "_worker", e)), x(this, Ye, lu).call(this);
  }).catch((t) => {
    n(this, dr).reject(new Error(`Setting up fake worker failed: "${t.message}".`));
  });
}, Al = new WeakSet(), hu = function() {
  var t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, v(Gt, Al), v(Gt, tf, 0), v(Gt, Ma, !1), v(Gt, La, /* @__PURE__ */ new WeakMap()), Xe && (m(Gt, Ma, !0), os.workerSrc || (os.workerSrc = "./pdf.worker.mjs")), Gt._isSameOrigin = (t, e) => {
  const i = URL.parse(t);
  if (!(i != null && i.origin) || i.origin === "null")
    return !1;
  const s = new URL(e, i);
  return i.origin === s.origin;
}, Gt._createCDNWrapper = (t) => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], {
    type: "text/javascript"
  }));
}, Gt.fromPort = (t) => {
  if (Ow("`PDFWorker.fromPort` - please use `PDFWorker.create` instead."), !(t != null && t.port))
    throw new Error("PDFWorker.fromPort - invalid method signature.");
  return Gt.create(t);
};
let ah = Gt;
var yn, ks, xl, _l, bn, Da, Lh;
class B0 {
  constructor(t, e, i, s, r, a) {
    v(this, Da);
    v(this, yn, /* @__PURE__ */ new Map());
    v(this, ks, /* @__PURE__ */ new Map());
    v(this, xl, /* @__PURE__ */ new Map());
    v(this, _l, /* @__PURE__ */ new Map());
    v(this, bn, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new sb(), this.fontLoader = new zw({
      ownerDocument: s.ownerDocument,
      styleElement: s.styleElement
    }), this.loadingParams = s.loadingParams, this._params = s, this.canvasFactory = r.canvasFactory, this.filterFactory = r.filterFactory, this.cMapReaderFactory = r.cMapReaderFactory, this.standardFontDataFactory = r.standardFontDataFactory, this.wasmFactory = r.wasmFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = i, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.enableHWA = a, this.setupMessageHandler();
  }
  get annotationStorage() {
    return yt(this, "annotationStorage", new _g());
  }
  getRenderingIntent(t, e = Hs.ENABLE, i = null, s = !1, r = !1) {
    let a = Ei.DISPLAY, o = up;
    switch (t) {
      case "any":
        a = Ei.ANY;
        break;
      case "display":
        break;
      case "print":
        a = Ei.PRINT;
        break;
      default:
        pt(`getRenderingIntent - invalid intent: ${t}`);
    }
    const l = a & Ei.PRINT && i instanceof jy ? i : this.annotationStorage;
    switch (e) {
      case Hs.DISABLE:
        a += Ei.ANNOTATIONS_DISABLE;
        break;
      case Hs.ENABLE:
        break;
      case Hs.ENABLE_FORMS:
        a += Ei.ANNOTATIONS_FORMS;
        break;
      case Hs.ENABLE_STORAGE:
        a += Ei.ANNOTATIONS_STORAGE, o = l.serializable;
        break;
      default:
        pt(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    s && (a += Ei.IS_EDITING), r && (a += Ei.OPLIST);
    const {
      ids: c,
      hash: d
    } = l.modifiedIds, u = [a, o.hash, d];
    return {
      renderingIntent: a,
      cacheKey: u.join("_"),
      annotationStorageSerializable: o,
      modifiedIds: c
    };
  }
  destroy() {
    var i;
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (i = n(this, bn)) == null || i.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const s of n(this, ks).values())
      t.push(s._destroy());
    n(this, ks).clear(), n(this, xl).clear(), n(this, _l).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      var s, r;
      this.commonObjs.clear(), this.fontLoader.clear(), n(this, yn).clear(), this.filterFactory.destroy(), Gh.cleanup(), (s = this._networkStream) == null || s.cancelAllRequests(new On("Worker was terminated.")), (r = this.messageHandler) == null || r.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e
    } = this;
    t.on("GetReader", (i, s) => {
      xt(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (r) => {
        this._lastProgress = {
          loaded: r.loaded,
          total: r.total
        };
      }, s.onPull = () => {
        this._fullReader.read().then(function({
          value: r,
          done: a
        }) {
          if (a) {
            s.close();
            return;
          }
          xt(r instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), s.enqueue(new Uint8Array(r), 1, [r]);
        }).catch((r) => {
          s.error(r);
        });
      }, s.onCancel = (r) => {
        this._fullReader.cancel(r), s.ready.catch((a) => {
          if (!this.destroyed)
            throw a;
        });
      };
    }), t.on("ReaderHeadersReady", async (i) => {
      var o;
      await this._fullReader.headersReady;
      const {
        isStreamingSupported: s,
        isRangeSupported: r,
        contentLength: a
      } = this._fullReader;
      return (!s || !r) && (this._lastProgress && ((o = e.onProgress) == null || o.call(e, this._lastProgress)), this._fullReader.onProgress = (l) => {
        var c;
        (c = e.onProgress) == null || c.call(e, {
          loaded: l.loaded,
          total: l.total
        });
      }), {
        isStreamingSupported: s,
        isRangeSupported: r,
        contentLength: a
      };
    }), t.on("GetRangeReader", (i, s) => {
      xt(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const r = this._networkStream.getRangeReader(i.begin, i.end);
      if (!r) {
        s.close();
        return;
      }
      s.onPull = () => {
        r.read().then(function({
          value: a,
          done: o
        }) {
          if (o) {
            s.close();
            return;
          }
          xt(a instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), s.enqueue(new Uint8Array(a), 1, [a]);
        }).catch((a) => {
          s.error(a);
        });
      }, s.onCancel = (a) => {
        r.cancel(a), s.ready.catch((o) => {
          if (!this.destroyed)
            throw o;
        });
      };
    }), t.on("GetDoc", ({
      pdfInfo: i
    }) => {
      this._numPages = i.numPages, this._htmlForXfa = i.htmlForXfa, delete i.htmlForXfa, e._capability.resolve(new F0(i, this));
    }), t.on("DocException", (i) => {
      e._capability.reject(Je(i));
    }), t.on("PasswordRequest", (i) => {
      m(this, bn, Promise.withResolvers());
      try {
        if (!e.onPassword)
          throw Je(i);
        const s = (r) => {
          r instanceof Error ? n(this, bn).reject(r) : n(this, bn).resolve({
            password: r
          });
        };
        e.onPassword(s, i.code);
      } catch (s) {
        n(this, bn).reject(s);
      }
      return n(this, bn).promise;
    }), t.on("DataLoaded", (i) => {
      var s;
      (s = e.onProgress) == null || s.call(e, {
        loaded: i.length,
        total: i.length
      }), this.downloadInfoCapability.resolve(i);
    }), t.on("StartRenderPage", (i) => {
      if (this.destroyed)
        return;
      n(this, ks).get(i.pageIndex)._startRenderPage(i.transparency, i.cacheKey);
    }), t.on("commonobj", ([i, s, r]) => {
      var a;
      if (this.destroyed || this.commonObjs.has(i))
        return null;
      switch (s) {
        case "Font":
          if ("error" in r) {
            const u = r.error;
            pt(`Error during font loading: ${u}`), this.commonObjs.resolve(i, u);
            break;
          }
          const o = new xp(r), l = this._params.pdfBug && ((a = globalThis.FontInspector) != null && a.enabled) ? (u, g) => globalThis.FontInspector.fontAdded(u, g) : null, c = new $w(o, l, r.extra, r.charProcOperatorList);
          this.fontLoader.bind(c).catch(() => t.sendWithPromise("FontFallback", {
            id: i
          })).finally(() => {
            !c.fontExtraProperties && c.data && c.clearData(), this.commonObjs.resolve(i, c);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: d
          } = r;
          xt(d, "The imageRef must be defined.");
          for (const u of n(this, ks).values())
            for (const [, g] of u.objs)
              if ((g == null ? void 0 : g.ref) === d)
                return g.dataLen ? (this.commonObjs.resolve(i, structuredClone(g)), g.dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(i, r);
          break;
        default:
          throw new Error(`Got unknown common object type ${s}`);
      }
      return null;
    }), t.on("obj", ([i, s, r, a]) => {
      var l;
      if (this.destroyed)
        return;
      const o = n(this, ks).get(s);
      if (!o.objs.has(i)) {
        if (o._intentStates.size === 0) {
          (l = a == null ? void 0 : a.bitmap) == null || l.close();
          return;
        }
        switch (r) {
          case "Image":
          case "Pattern":
            o.objs.resolve(i, a);
            break;
          default:
            throw new Error(`Got unknown object type ${r}`);
        }
      }
    }), t.on("DocProgress", (i) => {
      var s;
      this.destroyed || (s = e.onProgress) == null || s.call(e, {
        loaded: i.loaded,
        total: i.total
      });
    }), t.on("FetchBinaryData", async (i) => {
      if (this.destroyed)
        throw new Error("Worker was destroyed.");
      const s = this[i.type];
      if (!s)
        throw new Error(`${i.type} not initialized, see the \`useWorkerFetch\` parameter.`);
      return s.fetch(i);
    });
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    var i;
    this.annotationStorage.size <= 0 && pt("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const {
      map: t,
      transfer: e
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: t,
      filename: ((i = this._fullReader) == null ? void 0 : i.filename) ?? null
    }, e).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this._numPages)
      return Promise.reject(new Error("Invalid page request."));
    const e = t - 1, i = n(this, xl).get(e);
    if (i)
      return i;
    const s = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: e
    }).then((r) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      r.refStr && n(this, _l).set(r.refStr, t);
      const a = new N0(e, r, this, this._params.pdfBug);
      return n(this, ks).set(e, a), a;
    });
    return n(this, xl).set(e, s), s;
  }
  getPageIndex(t) {
    return fp(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
      num: t.num,
      gen: t.gen
    }) : Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: t,
      intent: e
    });
  }
  getFieldObjects() {
    return x(this, Da, Lh).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return x(this, Da, Lh).call(this, "HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(t) {
    return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
      id: t
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getAnnotationsByType(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotationsByType", {
      types: t,
      pageIndexesToSkip: e
    });
  }
  getDocJSActions() {
    return x(this, Da, Lh).call(this, "GetDocJSActions");
  }
  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: t
    });
  }
  getStructTree(t) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: t
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(t) {
    return x(this, Da, Lh).call(this, "GetOptionalContentConfig").then((e) => new m0(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata", e = n(this, yn).get(t);
    if (e)
      return e;
    const i = this.messageHandler.sendWithPromise(t, null).then((s) => {
      var r, a;
      return {
        info: s[0],
        metadata: s[1] ? new p0(s[1]) : null,
        contentDispositionFilename: ((r = this._fullReader) == null ? void 0 : r.filename) ?? null,
        contentLength: ((a = this._fullReader) == null ? void 0 : a.contentLength) ?? null
      };
    });
    return n(this, yn).set(t, i), i;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of n(this, ks).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), n(this, yn).clear(), this.filterFactory.destroy(!0), Gh.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!fp(t))
      return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return n(this, _l).get(e) ?? null;
  }
}
yn = new WeakMap(), ks = new WeakMap(), xl = new WeakMap(), _l = new WeakMap(), bn = new WeakMap(), Da = new WeakSet(), Lh = function(t, e = null) {
  const i = n(this, yn).get(t);
  if (i)
    return i;
  const s = this.messageHandler.sendWithPromise(t, e);
  return n(this, yn).set(t, s), s;
};
var ur;
class H0 {
  constructor(t) {
    v(this, ur, null);
    V(this, "onContinue", null);
    V(this, "onError", null);
    m(this, ur, t);
  }
  get promise() {
    return n(this, ur).capability.promise;
  }
  cancel(t = 0) {
    n(this, ur).cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots: t
    } = n(this, ur).operatorList;
    if (!t)
      return !1;
    const {
      annotationCanvasMap: e
    } = n(this, ur);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
ur = new WeakMap();
var fr, Oa;
const Xr = class Xr {
  constructor({
    callback: t,
    params: e,
    objs: i,
    commonObjs: s,
    annotationCanvasMap: r,
    operatorList: a,
    pageIndex: o,
    canvasFactory: l,
    filterFactory: c,
    useRequestAnimationFrame: d = !1,
    pdfBug: u = !1,
    pageColors: g = null,
    enableHWA: b = !1,
    operationsFilter: E = null
  }) {
    v(this, fr, null);
    this.callback = t, this.params = e, this.objs = i, this.commonObjs = s, this.annotationCanvasMap = r, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = l, this.filterFactory = c, this._pdfBug = u, this.pageColors = g, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = d === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new H0(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvas, this._canvasContext = e.canvas ? null : e.canvasContext, this._enableHWA = b, this._dependencyTracker = e.dependencyTracker, this._operationsFilter = E;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency: t = !1,
    optionalContentConfig: e
  }) {
    var l, c;
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (n(Xr, Oa).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      n(Xr, Oa).add(this._canvas);
    }
    this._pdfBug && ((l = globalThis.StepperManager) != null && l.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      viewport: i,
      transform: s,
      background: r,
      dependencyTracker: a
    } = this.params, o = this._canvasContext || this._canvas.getContext("2d", {
      alpha: !1,
      willReadFrequently: !this._enableHWA
    });
    this.gfx = new ko(o, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e
    }, this.annotationCanvasMap, this.pageColors, a), this.gfx.beginDrawing({
      transform: s,
      viewport: i,
      transparency: t,
      background: r
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (c = this.graphicsReadyCallback) == null || c.call(this);
  }
  cancel(t = null, e = 0) {
    var i, s, r;
    this.running = !1, this.cancelled = !0, (i = this.gfx) == null || i.endDrawing(), n(this, fr) && (window.cancelAnimationFrame(n(this, fr)), m(this, fr, null)), n(Xr, Oa).delete(this._canvas), t || (t = new ff(`Rendering cancelled, page ${this._pageIndex + 1}`, e)), this.callback(t), (r = (s = this.task).onError) == null || r.call(s, t);
  }
  operatorListChanged() {
    var t, e;
    if (!this.graphicsReady) {
      this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
      return;
    }
    (t = this.gfx.dependencyTracker) == null || t.growOperationsCount(this.operatorList.fnArray.length), (e = this.stepper) == null || e.updateOperatorList(this.operatorList), !this.running && this._continue();
  }
  _continue() {
    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? m(this, fr, window.requestAnimationFrame(() => {
      m(this, fr, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._operationsFilter), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), n(Xr, Oa).delete(this._canvas), this.callback())));
  }
};
fr = new WeakMap(), Oa = new WeakMap(), v(Xr, Oa, /* @__PURE__ */ new WeakSet());
let kp = Xr;
const cb = "5.4.296", db = "f56dc8601";
var fi, Ia, El, pe, qc, Cl, vn, Xc, pr, es, Yc, It, Rp, Mp, Lp, Wr, ub, jn;
const Qe = class Qe {
  constructor({
    editor: t = null,
    uiManager: e = null
  }) {
    v(this, It);
    v(this, fi, null);
    v(this, Ia, null);
    v(this, El);
    v(this, pe, null);
    v(this, qc, !1);
    v(this, Cl, !1);
    v(this, vn, null);
    v(this, Xc);
    v(this, pr, null);
    v(this, es, null);
    var i, s;
    t ? (m(this, Cl, !1), m(this, vn, t)) : m(this, Cl, !0), m(this, es, (t == null ? void 0 : t._uiManager) || e), m(this, Xc, n(this, es)._eventBus), m(this, El, ((i = t == null ? void 0 : t.color) == null ? void 0 : i.toUpperCase()) || ((s = n(this, es)) == null ? void 0 : s.highlightColors.values().next().value) || "#FFFF98"), n(Qe, Yc) || m(Qe, Yc, Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    }));
  }
  static get _keyboardManager() {
    return yt(this, "_keyboardManager", new Dd([[["Escape", "mac+Escape"], Qe.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], Qe.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], Qe.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], Qe.prototype._moveToPrevious], [["Home", "mac+Home"], Qe.prototype._moveToBeginning], [["End", "mac+End"], Qe.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = m(this, fi, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.ariaHasPopup = "true", n(this, vn) && (t.ariaControls = `${n(this, vn).id}_colorpicker_dropdown`);
    const e = n(this, es)._signal;
    t.addEventListener("click", x(this, It, Wr).bind(this), {
      signal: e
    }), t.addEventListener("keydown", x(this, It, Lp).bind(this), {
      signal: e
    });
    const i = m(this, Ia, document.createElement("span"));
    return i.className = "swatch", i.ariaHidden = "true", i.style.backgroundColor = n(this, El), t.append(i), t;
  }
  renderMainDropdown() {
    const t = m(this, pe, x(this, It, Rp).call(this));
    return t.ariaOrientation = "horizontal", t.ariaLabelledBy = "highlightColorPickerLabel", t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === n(this, fi)) {
      x(this, It, Wr).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && x(this, It, Mp).call(this, e, t);
  }
  _moveToNext(t) {
    var e, i;
    if (!n(this, It, jn)) {
      x(this, It, Wr).call(this, t);
      return;
    }
    if (t.target === n(this, fi)) {
      (e = n(this, pe).firstChild) == null || e.focus();
      return;
    }
    (i = t.target.nextSibling) == null || i.focus();
  }
  _moveToPrevious(t) {
    var e, i;
    if (t.target === ((e = n(this, pe)) == null ? void 0 : e.firstChild) || t.target === n(this, fi)) {
      n(this, It, jn) && this._hideDropdownFromKeyboard();
      return;
    }
    n(this, It, jn) || x(this, It, Wr).call(this, t), (i = t.target.previousSibling) == null || i.focus();
  }
  _moveToBeginning(t) {
    var e;
    if (!n(this, It, jn)) {
      x(this, It, Wr).call(this, t);
      return;
    }
    (e = n(this, pe).firstChild) == null || e.focus();
  }
  _moveToEnd(t) {
    var e;
    if (!n(this, It, jn)) {
      x(this, It, Wr).call(this, t);
      return;
    }
    (e = n(this, pe).lastChild) == null || e.focus();
  }
  hideDropdown() {
    var t, e;
    (t = n(this, pe)) == null || t.classList.add("hidden"), n(this, fi).ariaExpanded = "false", (e = n(this, pr)) == null || e.abort(), m(this, pr, null);
  }
  _hideDropdownFromKeyboard() {
    var t;
    if (!n(this, Cl)) {
      if (!n(this, It, jn)) {
        (t = n(this, vn)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), n(this, fi).focus({
        preventScroll: !0,
        focusVisible: n(this, qc)
      });
    }
  }
  updateColor(t) {
    if (n(this, Ia) && (n(this, Ia).style.backgroundColor = t), !n(this, pe))
      return;
    const e = n(this, es).highlightColors.values();
    for (const i of n(this, pe).children)
      i.ariaSelected = e.next().value === t.toUpperCase();
  }
  destroy() {
    var t, e;
    (t = n(this, fi)) == null || t.remove(), m(this, fi, null), m(this, Ia, null), (e = n(this, pe)) == null || e.remove(), m(this, pe, null);
  }
};
fi = new WeakMap(), Ia = new WeakMap(), El = new WeakMap(), pe = new WeakMap(), qc = new WeakMap(), Cl = new WeakMap(), vn = new WeakMap(), Xc = new WeakMap(), pr = new WeakMap(), es = new WeakMap(), Yc = new WeakMap(), It = new WeakSet(), Rp = function() {
  const t = document.createElement("div"), e = n(this, es)._signal;
  t.addEventListener("contextmenu", Ri, {
    signal: e
  }), t.className = "dropdown", t.role = "listbox", t.ariaMultiSelectable = "false", t.ariaOrientation = "vertical", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown"), n(this, vn) && (t.id = `${n(this, vn).id}_colorpicker_dropdown`);
  for (const [i, s] of n(this, es).highlightColors) {
    const r = document.createElement("button");
    r.tabIndex = "0", r.role = "option", r.setAttribute("data-color", s), r.title = i, r.setAttribute("data-l10n-id", n(Qe, Yc)[i]);
    const a = document.createElement("span");
    r.append(a), a.className = "swatch", a.style.backgroundColor = s, r.ariaSelected = s === n(this, El), r.addEventListener("click", x(this, It, Mp).bind(this, s), {
      signal: e
    }), t.append(r);
  }
  return t.addEventListener("keydown", x(this, It, Lp).bind(this), {
    signal: e
  }), t;
}, Mp = function(t, e) {
  e.stopPropagation(), n(this, Xc).dispatch("switchannotationeditorparams", {
    source: this,
    type: At.HIGHLIGHT_COLOR,
    value: t
  }), this.updateColor(t);
}, Lp = function(t) {
  Qe._keyboardManager.exec(this, t);
}, Wr = function(t) {
  if (n(this, It, jn)) {
    this.hideDropdown();
    return;
  }
  if (m(this, qc, t.detail === 0), n(this, pr) || (m(this, pr, new AbortController()), window.addEventListener("pointerdown", x(this, It, ub).bind(this), {
    signal: n(this, es).combinedSignal(n(this, pr))
  })), n(this, fi).ariaExpanded = "true", n(this, pe)) {
    n(this, pe).classList.remove("hidden");
    return;
  }
  const e = m(this, pe, x(this, It, Rp).call(this));
  n(this, fi).append(e);
}, ub = function(t) {
  var e;
  (e = n(this, pe)) != null && e.contains(t.target) || this.hideDropdown();
}, jn = function() {
  return n(this, pe) && !n(this, pe).classList.contains("hidden");
}, v(Qe, Yc, null);
let Vh = Qe;
var Rs, Kc, Tl, Jc;
const Yr = class Yr {
  constructor(t) {
    v(this, Rs, null);
    v(this, Kc, null);
    v(this, Tl, null);
    m(this, Kc, t), m(this, Tl, t._uiManager), n(Yr, Jc) || m(Yr, Jc, Object.freeze({
      freetext: "pdfjs-editor-color-picker-free-text-input",
      ink: "pdfjs-editor-color-picker-ink-input"
    }));
  }
  renderButton() {
    if (n(this, Rs))
      return n(this, Rs);
    const {
      editorType: t,
      colorType: e,
      colorValue: i
    } = n(this, Kc), s = m(this, Rs, document.createElement("input"));
    return s.type = "color", s.value = i || "#000000", s.className = "basicColorPicker", s.tabIndex = 0, s.setAttribute("data-l10n-id", n(Yr, Jc)[t]), s.addEventListener("input", () => {
      n(this, Tl).updateParams(e, s.value);
    }, {
      signal: n(this, Tl)._signal
    }), s;
  }
  update(t) {
    n(this, Rs) && (n(this, Rs).value = t);
  }
  destroy() {
    var t;
    (t = n(this, Rs)) == null || t.remove(), m(this, Rs, null);
  }
  hideDropdown() {
  }
};
Rs = new WeakMap(), Kc = new WeakMap(), Tl = new WeakMap(), Jc = new WeakMap(), v(Yr, Jc, null);
let Nu = Yr;
function Cm(h) {
  return Math.floor(Math.max(0, Math.min(1, h)) * 255).toString(16).padStart(2, "0");
}
function gh(h) {
  return Math.max(0, Math.min(255, 255 * h));
}
class Tm {
  static CMYK_G([t, e, i, s]) {
    return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * i + 0.11 * e + s)];
  }
  static G_CMYK([t]) {
    return ["CMYK", 0, 0, 0, 1 - t];
  }
  static G_RGB([t]) {
    return ["RGB", t, t, t];
  }
  static G_rgb([t]) {
    return t = gh(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = Cm(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, i]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * i];
  }
  static RGB_rgb(t) {
    return t.map(gh);
  }
  static RGB_HTML(t) {
    return `#${t.map(Cm).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([t, e, i, s]) {
    return ["RGB", 1 - Math.min(1, t + s), 1 - Math.min(1, i + s), 1 - Math.min(1, e + s)];
  }
  static CMYK_rgb([t, e, i, s]) {
    return [gh(1 - Math.min(1, t + s)), gh(1 - Math.min(1, i + s)), gh(1 - Math.min(1, e + s))];
  }
  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }
  static RGB_CMYK([t, e, i]) {
    const s = 1 - t, r = 1 - e, a = 1 - i, o = Math.min(s, r, a);
    return ["CMYK", s, r, a, o];
  }
}
class j0 {
  create(t, e, i = !1) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid SVG dimensions");
    const s = this._createSVG("svg:svg");
    return s.setAttribute("version", "1.1"), i || (s.setAttribute("width", `${t}px`), s.setAttribute("height", `${e}px`)), s.setAttribute("preserveAspectRatio", "none"), s.setAttribute("viewBox", `0 0 ${t} ${e}`), s;
  }
  createElement(t) {
    if (typeof t != "string")
      throw new Error("Invalid SVG element type");
    return this._createSVG(t);
  }
  _createSVG(t) {
    zt("Abstract method `_createSVG` called.");
  }
}
class qh extends j0 {
  _createSVG(t) {
    return document.createElementNS(Gs, t);
  }
}
const z0 = 9, lo = /* @__PURE__ */ new WeakSet(), $0 = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3;
class Pm {
  static create(t) {
    switch (t.data.annotationType) {
      case se.LINK:
        return new kg(t);
      case se.TEXT:
        return new W0(t);
      case se.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new G0(t);
          case "Btn":
            return t.data.radioButton ? new gb(t) : t.data.checkBox ? new q0(t) : new X0(t);
          case "Ch":
            return new Y0(t);
          case "Sig":
            return new V0(t);
        }
        return new uo(t);
      case se.POPUP:
        return new Op(t);
      case se.FREETEXT:
        return new wb(t);
      case se.LINE:
        return new J0(t);
      case se.SQUARE:
        return new Q0(t);
      case se.CIRCLE:
        return new Z0(t);
      case se.POLYLINE:
        return new Sb(t);
      case se.CARET:
        return new eS(t);
      case se.INK:
        return new Rg(t);
      case se.POLYGON:
        return new tS(t);
      case se.HIGHLIGHT:
        return new Ab(t);
      case se.UNDERLINE:
        return new iS(t);
      case se.SQUIGGLY:
        return new sS(t);
      case se.STRIKEOUT:
        return new nS(t);
      case se.STAMP:
        return new xb(t);
      case se.FILEATTACHMENT:
        return new rS(t);
      default:
        return new Jt(t);
    }
  }
}
var Fa, Pl, zi, Qc, Dp;
const Hg = class Hg {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: i = !1,
    createQuadrilaterals: s = !1
  } = {}) {
    v(this, Qc);
    v(this, Fa, null);
    v(this, Pl, !1);
    v(this, zi, null);
    this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableComment = t.enableComment, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(i)), s && this._createQuadrilaterals();
  }
  static _hasPopupData({
    contentsObj: t,
    richText: e
  }) {
    return !!(t != null && t.str || e != null && e.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return Hg._hasPopupData(this.data) || this.enableComment && !!this.commentText;
  }
  get commentData() {
    var i;
    const {
      data: t
    } = this, e = (i = this.annotationStorage) == null ? void 0 : i.getEditor(t.id);
    return e ? e.getData() : t;
  }
  get hasCommentButton() {
    return this.enableComment && this.hasPopupElement;
  }
  get commentButtonPosition() {
    var o;
    const t = (o = this.annotationStorage) == null ? void 0 : o.getEditor(this.data.id);
    if (t)
      return t.commentButtonPositionInPage;
    const {
      quadPoints: e,
      inkLists: i,
      rect: s
    } = this.data;
    let r = -1 / 0, a = -1 / 0;
    if ((e == null ? void 0 : e.length) >= 8) {
      for (let l = 0; l < e.length; l += 8)
        e[l + 1] > a ? (a = e[l + 1], r = e[l + 2]) : e[l + 1] === a && (r = Math.max(r, e[l + 2]));
      return [r, a];
    }
    if ((i == null ? void 0 : i.length) >= 1) {
      for (const l of i)
        for (let c = 0, d = l.length; c < d; c += 2)
          l[c + 1] > a ? (a = l[c + 1], r = l[c]) : l[c + 1] === a && (r = Math.max(r, l[c]));
      if (r !== 1 / 0)
        return [r, a];
    }
    return s ? [s[2], s[3]] : null;
  }
  _normalizePoint(t) {
    const {
      page: {
        view: e
      },
      viewport: {
        rawDims: {
          pageWidth: i,
          pageHeight: s,
          pageX: r,
          pageY: a
        }
      }
    } = this.parent;
    return t[1] = e[3] - t[1] + e[1], t[0] = 100 * (t[0] - r) / i, t[1] = 100 * (t[1] - a) / s, t;
  }
  get commentText() {
    var e, i, s;
    const {
      data: t
    } = this;
    return ((i = (e = this.annotationStorage.getRawValue(`${jh}${t.id}`)) == null ? void 0 : e.popup) == null ? void 0 : i.contents) || ((s = t.contentsObj) == null ? void 0 : s.str) || "";
  }
  set commentText(t) {
    const {
      data: e
    } = this, i = {
      deleted: !t,
      contents: t || ""
    };
    this.annotationStorage.updateEditor(e.id, {
      popup: i
    }) || this.annotationStorage.setValue(`${jh}${e.id}`, {
      id: e.id,
      annotationType: e.annotationType,
      pageIndex: this.parent.page._pageIndex,
      popup: i,
      popupRef: e.popupRef,
      modificationDate: /* @__PURE__ */ new Date()
    }), t || this.removePopup();
  }
  removePopup() {
    var t, e;
    (e = ((t = n(this, zi)) == null ? void 0 : t.popup) || this.popup) == null || e.remove(), m(this, zi, this.popup = null);
  }
  updateEdited(t) {
    var r;
    if (!this.container)
      return;
    t.rect && (n(this, Fa) || m(this, Fa, {
      rect: this.data.rect.slice(0)
    }));
    const {
      rect: e,
      popup: i
    } = t;
    e && x(this, Qc, Dp).call(this, e);
    let s = ((r = n(this, zi)) == null ? void 0 : r.popup) || this.popup;
    !s && (i != null && i.text) && (this._createPopup(i), s = n(this, zi).popup), s && (s.updateEdited(t), i != null && i.deleted && (s.remove(), m(this, zi, null), this.popup = null));
  }
  resetEdited() {
    var t;
    n(this, Fa) && (x(this, Qc, Dp).call(this, n(this, Fa).rect), (t = n(this, zi)) == null || t.popup.resetEdited(), m(this, Fa, null));
  }
  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: i,
        viewport: s
      }
    } = this, r = document.createElement("section");
    r.setAttribute("data-annotation-id", e.id), !(this instanceof uo) && !(this instanceof kg) && (r.tabIndex = 0);
    const {
      style: a
    } = r;
    if (a.zIndex = this.parent.zIndex, this.parent.zIndex += 2, e.alternativeText && (r.title = e.alternativeText), e.noRotate && r.classList.add("norotate"), !e.rect || this instanceof Op) {
      const {
        rotation: w
      } = e;
      return !e.hasOwnCanvas && w !== 0 && this.setRotation(w, r), r;
    }
    const {
      width: o,
      height: l
    } = this;
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const w = e.borderStyle.horizontalCornerRadius, M = e.borderStyle.verticalCornerRadius;
      if (w > 0 || M > 0) {
        const L = `calc(${w}px * var(--total-scale-factor)) / calc(${M}px * var(--total-scale-factor))`;
        a.borderRadius = L;
      } else if (this instanceof gb) {
        const L = `calc(${o}px * var(--total-scale-factor)) / calc(${l}px * var(--total-scale-factor))`;
        a.borderRadius = L;
      }
      switch (e.borderStyle.style) {
        case mo.SOLID:
          a.borderStyle = "solid";
          break;
        case mo.DASHED:
          a.borderStyle = "dashed";
          break;
        case mo.BEVELED:
          pt("Unimplemented border style: beveled");
          break;
        case mo.INSET:
          pt("Unimplemented border style: inset");
          break;
        case mo.UNDERLINE:
          a.borderBottomStyle = "solid";
          break;
      }
      const k = e.borderColor || null;
      k ? (m(this, Pl, !0), a.borderColor = tt.makeHexColor(k[0] | 0, k[1] | 0, k[2] | 0)) : a.borderWidth = 0;
    }
    const c = tt.normalizeRect([e.rect[0], i.view[3] - e.rect[1] + i.view[1], e.rect[2], i.view[3] - e.rect[3] + i.view[1]]), {
      pageWidth: d,
      pageHeight: u,
      pageX: g,
      pageY: b
    } = s.rawDims;
    a.left = `${100 * (c[0] - g) / d}%`, a.top = `${100 * (c[1] - b) / u}%`;
    const {
      rotation: E
    } = e;
    return e.hasOwnCanvas || E === 0 ? (a.width = `${100 * o / d}%`, a.height = `${100 * l / u}%`) : this.setRotation(E, r), r;
  }
  setRotation(t, e = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: i,
      pageHeight: s
    } = this.parent.viewport.rawDims;
    let {
      width: r,
      height: a
    } = this;
    t % 180 !== 0 && ([r, a] = [a, r]), e.style.width = `${100 * r / i}%`, e.style.height = `${100 * a / s}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    const t = (e, i, s) => {
      const r = s.detail[e], a = r[0], o = r.slice(1);
      s.target.style[i] = Tm[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [i]: Tm[`${a}_rgb`](o)
      });
    };
    return yt(this, "_commonActions", {
      display: (e) => {
        const {
          display: i
        } = e.detail, s = i % 2 === 1;
        this.container.style.visibility = s ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noView: s,
          noPrint: i === 1 || i === 2
        });
      },
      print: (e) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !e.detail.print
        });
      },
      hidden: (e) => {
        const {
          hidden: i
        } = e.detail;
        this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noPrint: i,
          noView: i
        });
      },
      focus: (e) => {
        setTimeout(() => e.target.focus({
          preventScroll: !1
        }), 0);
      },
      userName: (e) => {
        e.target.title = e.detail.userName;
      },
      readonly: (e) => {
        e.target.disabled = e.detail.readonly;
      },
      required: (e) => {
        this._setRequired(e.target, e.detail.required);
      },
      bgColor: (e) => {
        t("bgColor", "backgroundColor", e);
      },
      fillColor: (e) => {
        t("fillColor", "backgroundColor", e);
      },
      fgColor: (e) => {
        t("fgColor", "color", e);
      },
      textColor: (e) => {
        t("textColor", "color", e);
      },
      borderColor: (e) => {
        t("borderColor", "borderColor", e);
      },
      strokeColor: (e) => {
        t("strokeColor", "borderColor", e);
      },
      rotation: (e) => {
        const i = e.detail.rotation;
        this.setRotation(i), this.annotationStorage.setValue(this.data.id, {
          rotation: i
        });
      }
    });
  }
  _dispatchEventFromSandbox(t, e) {
    const i = this._commonActions;
    for (const s of Object.keys(e.detail)) {
      const r = t[s] || i[s];
      r == null || r(e);
    }
  }
  _setDefaultPropertiesFromJS(t) {
    if (!this.enableScripting)
      return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e)
      return;
    const i = this._commonActions;
    for (const [s, r] of Object.entries(e)) {
      const a = i[s];
      if (a) {
        const o = {
          detail: {
            [s]: r
          },
          target: t
        };
        a(o), delete e[s];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container)
      return;
    const {
      quadPoints: t
    } = this.data;
    if (!t)
      return;
    const [e, i, s, r] = this.data.rect.map((w) => Math.fround(w));
    if (t.length === 8) {
      const [w, M, k, L] = t.subarray(2, 6);
      if (s === w && r === M && e === k && i === L)
        return;
    }
    const {
      style: a
    } = this.container;
    let o;
    if (n(this, Pl)) {
      const {
        borderColor: w,
        borderWidth: M
      } = a;
      a.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${w}" stroke-width="${M}">`], this.container.classList.add("hasBorder");
    }
    const l = s - e, c = r - i, {
      svgFactory: d
    } = this, u = d.createElement("svg");
    u.classList.add("quadrilateralsContainer"), u.setAttribute("width", 0), u.setAttribute("height", 0), u.role = "none";
    const g = d.createElement("defs");
    u.append(g);
    const b = d.createElement("clipPath"), E = `clippath_${this.data.id}`;
    b.setAttribute("id", E), b.setAttribute("clipPathUnits", "objectBoundingBox"), g.append(b);
    for (let w = 2, M = t.length; w < M; w += 8) {
      const k = t[w], L = t[w + 1], R = t[w + 2], p = t[w + 3], f = d.createElement("rect"), y = (R - e) / l, A = (r - L) / c, T = (k - R) / l, P = (L - p) / c;
      f.setAttribute("x", y), f.setAttribute("y", A), f.setAttribute("width", T), f.setAttribute("height", P), b.append(f), o == null || o.push(`<rect vector-effect="non-scaling-stroke" x="${y}" y="${A}" width="${T}" height="${P}"/>`);
    }
    n(this, Pl) && (o.push("</g></svg>')"), a.backgroundImage = o.join("")), this.container.append(u), this.container.style.clipPath = `url(#${E})`;
  }
  _createPopup(t = null) {
    const {
      data: e
    } = this;
    let i, s;
    t ? (i = {
      str: t.text
    }, s = t.date) : (i = e.contentsObj, s = e.modificationDate);
    const r = m(this, zi, new Op({
      data: {
        color: e.color,
        titleObj: e.titleObj,
        modificationDate: s,
        contentsObj: i,
        richText: e.richText,
        parentRect: e.rect,
        borderStyle: 0,
        id: `popup_${e.id}`,
        rotation: e.rotation,
        noRotate: !0
      },
      linkService: this.linkService,
      parent: this.parent,
      elements: [this]
    }));
    this.parent._commentManager || this.parent.div.append(r.render());
  }
  get hasPopupElement() {
    return !!(n(this, zi) || this.popup || this.data.popupRef);
  }
  get extraPopupElement() {
    return n(this, zi);
  }
  render() {
    zt("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t, e = null) {
    const i = [];
    if (this._fieldObjects) {
      const s = this._fieldObjects[t];
      if (s)
        for (const {
          page: r,
          id: a,
          exportValues: o
        } of s) {
          if (r === -1 || a === e)
            continue;
          const l = typeof o == "string" ? o : null, c = document.querySelector(`[data-element-id="${a}"]`);
          if (c && !lo.has(c)) {
            pt(`_getElementsByName - element not allowed: ${a}`);
            continue;
          }
          i.push({
            id: a,
            exportValue: l,
            domElement: c
          });
        }
      return i;
    }
    for (const s of document.getElementsByName(t)) {
      const {
        exportValue: r
      } = s, a = s.getAttribute("data-element-id");
      a !== e && lo.has(s) && i.push({
        id: a,
        exportValue: r,
        domElement: s
      });
    }
    return i;
  }
  show() {
    var t;
    this.container && (this.container.hidden = !1), (t = this.popup) == null || t.maybeShow();
  }
  hide() {
    var t;
    this.container && (this.container.hidden = !0), (t = this.popup) == null || t.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const t = this.getElementsToTriggerPopup();
    if (Array.isArray(t))
      for (const e of t)
        e.classList.add("highlightArea");
    else
      t.classList.add("highlightArea");
  }
  _editOnDoubleClick() {
    if (!this._isEditable)
      return;
    const {
      annotationEditorType: t,
      data: {
        id: e
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      var i;
      (i = this.linkService.eventBus) == null || i.dispatch("switchannotationeditormode", {
        source: this,
        mode: t,
        editId: e,
        mustEnterInEditMode: !0
      });
    });
  }
  get width() {
    return this.data.rect[2] - this.data.rect[0];
  }
  get height() {
    return this.data.rect[3] - this.data.rect[1];
  }
};
Fa = new WeakMap(), Pl = new WeakMap(), zi = new WeakMap(), Qc = new WeakSet(), Dp = function(t) {
  const {
    container: {
      style: e
    },
    data: {
      rect: i,
      rotation: s
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth: r,
          pageHeight: a,
          pageX: o,
          pageY: l
        }
      }
    }
  } = this;
  i == null || i.splice(0, 4, ...t), e.left = `${100 * (t[0] - o) / r}%`, e.top = `${100 * (a - t[3] + l) / a}%`, s === 0 ? (e.width = `${100 * (t[2] - t[0]) / r}%`, e.height = `${100 * (t[3] - t[1]) / a}%`) : this.setRotation(s);
};
let Jt = Hg;
class U0 extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.editor = t.editor;
  }
  render() {
    return this.container.className = "editorAnnotation", this.container;
  }
  createOrUpdatePopup() {
    const {
      editor: t
    } = this;
    t.hasComment && (this._createPopup(t.comment), this.extraPopupElement.popup.renderCommentButton());
  }
  get hasCommentButton() {
    return this.enableComment && this.editor.hasComment;
  }
  get commentButtonPosition() {
    return this.editor.commentButtonPositionInPage;
  }
  get commentText() {
    return this.editor.comment.text;
  }
  set commentText(t) {
    this.editor.comment = t, t || this.removePopup();
  }
  get commentData() {
    return this.editor.getData();
  }
  remove() {
    this.container.remove(), this.container = null, this.removePopup();
  }
}
var Ti, Gr, fb, pb;
class kg extends Jt {
  constructor(e, i = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(i != null && i.ignoreBorder),
      createQuadrilaterals: !0
    });
    v(this, Ti);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const {
      data: e,
      linkService: i
    } = this, s = document.createElement("a");
    s.setAttribute("data-element-id", e.id);
    let r = !1;
    return e.url ? (i.addLinkAttributes(s, e.url, e.newWindow), r = !0) : e.action ? (this._bindNamedAction(s, e.action, e.overlaidText), r = !0) : e.attachment ? (x(this, Ti, fb).call(this, s, e.attachment, e.overlaidText, e.attachmentDest), r = !0) : e.setOCGState ? (x(this, Ti, pb).call(this, s, e.setOCGState, e.overlaidText), r = !0) : e.dest ? (this._bindLink(s, e.dest, e.overlaidText), r = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(s, e), r = !0), e.resetForm ? (this._bindResetFormAction(s, e.resetForm), r = !0) : this.isTooltipOnly && !r && (this._bindLink(s, ""), r = !0)), this.container.classList.add("linkAnnotation"), r && this.container.append(s), this.container;
  }
  _bindLink(e, i, s = "") {
    e.href = this.linkService.getDestinationHash(i), e.onclick = () => (i && this.linkService.goToDestination(i), !1), (i || i === "") && x(this, Ti, Gr).call(this), s && (e.title = s);
  }
  _bindNamedAction(e, i, s = "") {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(i), !1), s && (e.title = s), x(this, Ti, Gr).call(this);
  }
  _bindJSAction(e, i) {
    e.href = this.linkService.getAnchorUrl("");
    const s = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const r of Object.keys(i.actions)) {
      const a = s.get(r);
      a && (e[a] = () => {
        var o;
        return (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: i.id,
            name: r
          }
        }), !1;
      });
    }
    i.overlaidText && (e.title = i.overlaidText), e.onclick || (e.onclick = () => !1), x(this, Ti, Gr).call(this);
  }
  _bindResetFormAction(e, i) {
    const s = e.onclick;
    if (s || (e.href = this.linkService.getAnchorUrl("")), x(this, Ti, Gr).call(this), !this._fieldObjects) {
      pt('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), s || (e.onclick = () => !1);
      return;
    }
    e.onclick = () => {
      var u;
      s == null || s();
      const {
        fields: r,
        refs: a,
        include: o
      } = i, l = [];
      if (r.length !== 0 || a.length !== 0) {
        const g = new Set(a);
        for (const b of r) {
          const E = this._fieldObjects[b] || [];
          for (const {
            id: w
          } of E)
            g.add(w);
        }
        for (const b of Object.values(this._fieldObjects))
          for (const E of b)
            g.has(E.id) === o && l.push(E);
      } else
        for (const g of Object.values(this._fieldObjects))
          l.push(...g);
      const c = this.annotationStorage, d = [];
      for (const g of l) {
        const {
          id: b
        } = g;
        switch (d.push(b), g.type) {
          case "text": {
            const w = g.defaultValue || "";
            c.setValue(b, {
              value: w
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const w = g.defaultValue === g.exportValues;
            c.setValue(b, {
              value: w
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const w = g.defaultValue || "";
            c.setValue(b, {
              value: w
            });
            break;
          }
          default:
            continue;
        }
        const E = document.querySelector(`[data-element-id="${b}"]`);
        if (E) {
          if (!lo.has(E)) {
            pt(`_bindResetFormAction - element not allowed: ${b}`);
            continue;
          }
        } else continue;
        E.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && ((u = this.linkService.eventBus) == null || u.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: "app",
          ids: d,
          name: "ResetForm"
        }
      })), !1;
    };
  }
}
Ti = new WeakSet(), Gr = function() {
  this.container.setAttribute("data-internal-link", "");
}, fb = function(e, i, s = "", r = null) {
  e.href = this.linkService.getAnchorUrl(""), i.description ? e.title = i.description : s && (e.title = s), e.onclick = () => {
    var a;
    return (a = this.downloadManager) == null || a.openOrDownloadData(i.content, i.filename, r), !1;
  }, x(this, Ti, Gr).call(this);
}, pb = function(e, i, s = "") {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(i), !1), s && (e.title = s), x(this, Ti, Gr).call(this);
};
class W0 extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const t = document.createElement("img");
    return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t), this.container;
  }
}
class uo extends Jt {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    var e;
    this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === "CANVAS" && (t.previousSibling.hidden = !0), t.hidden = !1);
  }
  _getKeyModifier(t) {
    return xe.platform.isMac ? t.metaKey : t.ctrlKey;
  }
  _setEventListener(t, e, i, s, r) {
    i.includes("mouse") ? t.addEventListener(i, (a) => {
      var o;
      (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: s,
          value: r(a),
          shift: a.shiftKey,
          modifier: this._getKeyModifier(a)
        }
      });
    }) : t.addEventListener(i, (a) => {
      var o;
      if (i === "blur") {
        if (!e.focused || !a.relatedTarget)
          return;
        e.focused = !1;
      } else if (i === "focus") {
        if (e.focused)
          return;
        e.focused = !0;
      }
      r && ((o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: s,
          value: r(a)
        }
      }));
    });
  }
  _setEventListeners(t, e, i, s) {
    var r, a, o;
    for (const [l, c] of i)
      (c === "Action" || (r = this.data.actions) != null && r[c]) && ((c === "Focus" || c === "Blur") && (e || (e = {
        focused: !1
      })), this._setEventListener(t, e, l, c, s), c === "Focus" && !((a = this.data.actions) != null && a.Blur) ? this._setEventListener(t, e, "blur", "Blur", null) : c === "Blur" && !((o = this.data.actions) != null && o.Focus) && this._setEventListener(t, e, "focus", "Focus", null));
  }
  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? "transparent" : tt.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"], {
      fontColor: i
    } = this.data.defaultAppearanceData, s = this.data.defaultAppearanceData.fontSize || z0, r = t.style;
    let a;
    const o = 2, l = (c) => Math.round(10 * c) / 10;
    if (this.data.multiLine) {
      const c = Math.abs(this.data.rect[3] - this.data.rect[1] - o), d = Math.round(c / (Lf * s)) || 1, u = c / d;
      a = Math.min(s, l(u / Lf));
    } else {
      const c = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      a = Math.min(s, l(c / Lf));
    }
    r.fontSize = `calc(${a}px * var(--total-scale-factor))`, r.color = tt.makeHexColor(i[0], i[1], i[2]), this.data.textAlignment !== null && (r.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
}
class G0 extends uo {
  constructor(t) {
    const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, {
      isRenderable: e
    });
  }
  setPropertyOnSiblings(t, e, i, s) {
    const r = this.annotationStorage;
    for (const a of this._getElementsByName(t.name, t.id))
      a.domElement && (a.domElement[e] = i), r.setValue(a.id, {
        [s]: i
      });
  }
  render() {
    var s, r;
    const t = this.annotationStorage, e = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let i = null;
    if (this.renderForms) {
      const a = t.getValue(e, {
        value: this.data.fieldValue
      });
      let o = a.value || "";
      const l = t.getValue(e, {
        charLimit: this.data.maxLen
      }).charLimit;
      l && o.length > l && (o = o.slice(0, l));
      let c = a.formattedValue || ((s = this.data.textContent) == null ? void 0 : s.join(`
`)) || null;
      c && this.data.comb && (c = c.replaceAll(/\s+/g, ""));
      const d = {
        userValue: o,
        formattedValue: c,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      this.data.multiLine ? (i = document.createElement("textarea"), i.textContent = c ?? o, this.data.doNotScroll && (i.style.overflowY = "hidden")) : (i = document.createElement("input"), i.type = this.data.password ? "password" : "text", i.setAttribute("value", c ?? o), this.data.doNotScroll && (i.style.overflowX = "hidden")), this.data.hasOwnCanvas && (i.hidden = !0), lo.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, i.name = this.data.fieldName, i.tabIndex = 0;
      const {
        datetimeFormat: u,
        datetimeType: g,
        timeStep: b
      } = this.data, E = !!g && this.enableScripting;
      u && (i.title = u), this._setRequired(i, this.data.required), l && (i.maxLength = l), i.addEventListener("input", (M) => {
        t.setValue(e, {
          value: M.target.value
        }), this.setPropertyOnSiblings(i, "value", M.target.value, "value"), d.formattedValue = null;
      }), i.addEventListener("resetform", (M) => {
        const k = this.data.defaultFieldValue ?? "";
        i.value = d.userValue = k, d.formattedValue = null;
      });
      let w = (M) => {
        const {
          formattedValue: k
        } = d;
        k != null && (M.target.value = k), M.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        i.addEventListener("focus", (k) => {
          var R;
          if (d.focused)
            return;
          const {
            target: L
          } = k;
          if (E && (L.type = g, b && (L.step = b)), d.userValue) {
            const p = d.userValue;
            if (E)
              if (g === "time") {
                const f = new Date(p), y = [f.getHours(), f.getMinutes(), f.getSeconds()];
                L.value = y.map((A) => A.toString().padStart(2, "0")).join(":");
              } else
                L.value = new Date(p - $0).toISOString().split(g === "date" ? "T" : ".", 1)[0];
            else
              L.value = p;
          }
          d.lastCommittedValue = L.value, d.commitKey = 1, (R = this.data.actions) != null && R.Focus || (d.focused = !0);
        }), i.addEventListener("updatefromsandbox", (k) => {
          this.showElementAndHideCanvas(k.target);
          const L = {
            value(R) {
              d.userValue = R.detail.value ?? "", E || t.setValue(e, {
                value: d.userValue.toString()
              }), R.target.value = d.userValue;
            },
            formattedValue(R) {
              const {
                formattedValue: p
              } = R.detail;
              d.formattedValue = p, p != null && R.target !== document.activeElement && (R.target.value = p);
              const f = {
                formattedValue: p
              };
              E && (f.value = p), t.setValue(e, f);
            },
            selRange(R) {
              R.target.setSelectionRange(...R.detail.selRange);
            },
            charLimit: (R) => {
              var A;
              const {
                charLimit: p
              } = R.detail, {
                target: f
              } = R;
              if (p === 0) {
                f.removeAttribute("maxLength");
                return;
              }
              f.setAttribute("maxLength", p);
              let y = d.userValue;
              !y || y.length <= p || (y = y.slice(0, p), f.value = d.userValue = y, t.setValue(e, {
                value: y
              }), (A = this.linkService.eventBus) == null || A.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: y,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: f.selectionStart,
                  selEnd: f.selectionEnd
                }
              }));
            }
          };
          this._dispatchEventFromSandbox(L, k);
        }), i.addEventListener("keydown", (k) => {
          var p;
          d.commitKey = 1;
          let L = -1;
          if (k.key === "Escape" ? L = 0 : k.key === "Enter" && !this.data.multiLine ? L = 2 : k.key === "Tab" && (d.commitKey = 3), L === -1)
            return;
          const {
            value: R
          } = k.target;
          d.lastCommittedValue !== R && (d.lastCommittedValue = R, d.userValue = R, (p = this.linkService.eventBus) == null || p.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: R,
              willCommit: !0,
              commitKey: L,
              selStart: k.target.selectionStart,
              selEnd: k.target.selectionEnd
            }
          }));
        });
        const M = w;
        w = null, i.addEventListener("blur", (k) => {
          var p, f;
          if (!d.focused || !k.relatedTarget)
            return;
          (p = this.data.actions) != null && p.Blur || (d.focused = !1);
          const {
            target: L
          } = k;
          let {
            value: R
          } = L;
          if (E) {
            if (R && g === "time") {
              const y = R.split(":").map((A) => parseInt(A, 10));
              R = new Date(2e3, 0, 1, y[0], y[1], y[2] || 0).valueOf(), L.step = "";
            } else
              R.includes("T") || (R = `${R}T00:00`), R = new Date(R).valueOf();
            L.type = "text";
          }
          d.userValue = R, d.lastCommittedValue !== R && ((f = this.linkService.eventBus) == null || f.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: R,
              willCommit: !0,
              commitKey: d.commitKey,
              selStart: k.target.selectionStart,
              selEnd: k.target.selectionEnd
            }
          })), M(k);
        }), (r = this.data.actions) != null && r.Keystroke && i.addEventListener("beforeinput", (k) => {
          var P;
          d.lastCommittedValue = null;
          const {
            data: L,
            target: R
          } = k, {
            value: p,
            selectionStart: f,
            selectionEnd: y
          } = R;
          let A = f, T = y;
          switch (k.inputType) {
            case "deleteWordBackward": {
              const C = p.substring(0, f).match(/\w*[^\w]*$/);
              C && (A -= C[0].length);
              break;
            }
            case "deleteWordForward": {
              const C = p.substring(f).match(/^[^\w]*\w*/);
              C && (T += C[0].length);
              break;
            }
            case "deleteContentBackward":
              f === y && (A -= 1);
              break;
            case "deleteContentForward":
              f === y && (T += 1);
              break;
          }
          k.preventDefault(), (P = this.linkService.eventBus) == null || P.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: p,
              change: L || "",
              willCommit: !1,
              selStart: A,
              selEnd: T
            }
          });
        }), this._setEventListeners(i, d, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (k) => k.target.value);
      }
      if (w && i.addEventListener("blur", w), this.data.comb) {
        const k = (this.data.rect[2] - this.data.rect[0]) / l;
        i.classList.add("comb"), i.style.letterSpacing = `calc(${k}px * var(--total-scale-factor) - 1ch)`;
      }
    } else
      i = document.createElement("div"), i.textContent = this.data.fieldValue, i.style.verticalAlign = "middle", i.style.display = "table-cell", this.data.hasOwnCanvas && (i.hidden = !0);
    return this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
  }
}
class V0 extends uo {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
}
class q0 extends uo {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    const t = this.annotationStorage, e = this.data, i = e.id;
    let s = t.getValue(i, {
      value: e.exportValue === e.fieldValue
    }).value;
    typeof s == "string" && (s = s !== "Off", t.setValue(i, {
      value: s
    })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const r = document.createElement("input");
    return lo.add(r), r.setAttribute("data-element-id", i), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "checkbox", r.name = e.fieldName, s && r.setAttribute("checked", !0), r.setAttribute("exportValue", e.exportValue), r.tabIndex = 0, r.addEventListener("change", (a) => {
      const {
        name: o,
        checked: l
      } = a.target;
      for (const c of this._getElementsByName(o, i)) {
        const d = l && c.exportValue === e.exportValue;
        c.domElement && (c.domElement.checked = d), t.setValue(c.id, {
          value: d
        });
      }
      t.setValue(i, {
        value: l
      });
    }), r.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue || "Off";
      a.target.checked = o === e.exportValue;
    }), this.enableScripting && this.hasJSActions && (r.addEventListener("updatefromsandbox", (a) => {
      const o = {
        value(l) {
          l.target.checked = l.detail.value !== "Off", t.setValue(i, {
            value: l.target.checked
          });
        }
      };
      this._dispatchEventFromSandbox(o, a);
    }), this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (a) => a.target.checked)), this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class gb extends uo {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const t = this.annotationStorage, e = this.data, i = e.id;
    let s = t.getValue(i, {
      value: e.fieldValue === e.buttonValue
    }).value;
    if (typeof s == "string" && (s = s !== e.buttonValue, t.setValue(i, {
      value: s
    })), s)
      for (const a of this._getElementsByName(e.fieldName, i))
        t.setValue(a.id, {
          value: !1
        });
    const r = document.createElement("input");
    if (lo.add(r), r.setAttribute("data-element-id", i), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "radio", r.name = e.fieldName, s && r.setAttribute("checked", !0), r.tabIndex = 0, r.addEventListener("change", (a) => {
      const {
        name: o,
        checked: l
      } = a.target;
      for (const c of this._getElementsByName(o, i))
        t.setValue(c.id, {
          value: !1
        });
      t.setValue(i, {
        value: l
      });
    }), r.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue;
      a.target.checked = o != null && o === e.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const a = e.buttonValue;
      r.addEventListener("updatefromsandbox", (o) => {
        const l = {
          value: (c) => {
            const d = a === c.detail.value;
            for (const u of this._getElementsByName(c.target.name)) {
              const g = d && u.id === i;
              u.domElement && (u.domElement.checked = g), t.setValue(u.id, {
                value: g
              });
            }
          }
        };
        this._dispatchEventFromSandbox(l, o);
      }), this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (o) => o.target.checked);
    }
    return this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class X0 extends kg {
  constructor(t) {
    super(t, {
      ignoreBorder: t.data.hasAppearance
    });
  }
  render() {
    const t = super.render();
    t.classList.add("buttonWidgetAnnotation", "pushButton");
    const e = t.lastChild;
    return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", (i) => {
      this._dispatchEventFromSandbox({}, i);
    })), t;
  }
}
class Y0 extends uo {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const t = this.annotationStorage, e = this.data.id, i = t.getValue(e, {
      value: this.data.fieldValue
    }), s = document.createElement("select");
    lo.add(s), s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, this._setRequired(s, this.data.required), s.name = this.data.fieldName, s.tabIndex = 0;
    let r = this.data.combo && this.data.options.length > 0;
    this.data.combo || (s.size = this.data.options.length, this.data.multiSelect && (s.multiple = !0)), s.addEventListener("resetform", (d) => {
      const u = this.data.defaultFieldValue;
      for (const g of s.options)
        g.selected = g.value === u;
    });
    for (const d of this.data.options) {
      const u = document.createElement("option");
      u.textContent = d.displayValue, u.value = d.exportValue, i.value.includes(d.exportValue) && (u.setAttribute("selected", !0), r = !1), s.append(u);
    }
    let a = null;
    if (r) {
      const d = document.createElement("option");
      d.value = " ", d.setAttribute("hidden", !0), d.setAttribute("selected", !0), s.prepend(d), a = () => {
        d.remove(), s.removeEventListener("input", a), a = null;
      }, s.addEventListener("input", a);
    }
    const o = (d) => {
      const u = d ? "value" : "textContent", {
        options: g,
        multiple: b
      } = s;
      return b ? Array.prototype.filter.call(g, (E) => E.selected).map((E) => E[u]) : g.selectedIndex === -1 ? null : g[g.selectedIndex][u];
    };
    let l = o(!1);
    const c = (d) => {
      const u = d.target.options;
      return Array.prototype.map.call(u, (g) => ({
        displayValue: g.textContent,
        exportValue: g.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (s.addEventListener("updatefromsandbox", (d) => {
      const u = {
        value(g) {
          a == null || a();
          const b = g.detail.value, E = new Set(Array.isArray(b) ? b : [b]);
          for (const w of s.options)
            w.selected = E.has(w.value);
          t.setValue(e, {
            value: o(!0)
          }), l = o(!1);
        },
        multipleSelection(g) {
          s.multiple = !0;
        },
        remove(g) {
          const b = s.options, E = g.detail.remove;
          b[E].selected = !1, s.remove(E), b.length > 0 && Array.prototype.findIndex.call(b, (M) => M.selected) === -1 && (b[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: c(g)
          }), l = o(!1);
        },
        clear(g) {
          for (; s.length !== 0; )
            s.remove(0);
          t.setValue(e, {
            value: null,
            items: []
          }), l = o(!1);
        },
        insert(g) {
          const {
            index: b,
            displayValue: E,
            exportValue: w
          } = g.detail.insert, M = s.children[b], k = document.createElement("option");
          k.textContent = E, k.value = w, M ? M.before(k) : s.append(k), t.setValue(e, {
            value: o(!0),
            items: c(g)
          }), l = o(!1);
        },
        items(g) {
          const {
            items: b
          } = g.detail;
          for (; s.length !== 0; )
            s.remove(0);
          for (const E of b) {
            const {
              displayValue: w,
              exportValue: M
            } = E, k = document.createElement("option");
            k.textContent = w, k.value = M, s.append(k);
          }
          s.options.length > 0 && (s.options[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: c(g)
          }), l = o(!1);
        },
        indices(g) {
          const b = new Set(g.detail.indices);
          for (const E of g.target.options)
            E.selected = b.has(E.index);
          t.setValue(e, {
            value: o(!0)
          }), l = o(!1);
        },
        editable(g) {
          g.target.disabled = !g.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(u, d);
    }), s.addEventListener("input", (d) => {
      var b;
      const u = o(!0), g = o(!1);
      t.setValue(e, {
        value: u
      }), d.preventDefault(), (b = this.linkService.eventBus) == null || b.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: e,
          name: "Keystroke",
          value: l,
          change: g,
          changeEx: u,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), this._setEventListeners(s, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (d) => d.target.value)) : s.addEventListener("input", function(d) {
      t.setValue(e, {
        value: o(!0)
      });
    }), this.data.combo && this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
var Zc, Ip;
class Op extends Jt {
  constructor(e) {
    const {
      data: i,
      elements: s,
      parent: r
    } = e, a = !!r._commentManager;
    super(e, {
      isRenderable: !a && Jt._hasPopupData(i)
    });
    v(this, Zc);
    if (this.elements = s, a && Jt._hasPopupData(i)) {
      const o = this.popup = x(this, Zc, Ip).call(this);
      for (const l of s)
        l.popup = o;
    } else
      this.popup = null;
  }
  render() {
    const {
      container: e
    } = this;
    e.classList.add("popupAnnotation"), e.role = "comment";
    const i = this.popup = x(this, Zc, Ip).call(this), s = [];
    for (const r of this.elements)
      r.popup = i, r.container.ariaHasPopup = "dialog", s.push(r.data.id), r.addHighlightArea();
    return this.container.setAttribute("aria-controls", s.map((r) => `${Sg}${r}`).join(",")), this.container;
  }
}
Zc = new WeakSet(), Ip = function() {
  return new K0({
    container: this.container,
    color: this.data.color,
    titleObj: this.data.titleObj,
    modificationDate: this.data.modificationDate || this.data.creationDate,
    contentsObj: this.data.contentsObj,
    richText: this.data.richText,
    rect: this.data.rect,
    parentRect: this.data.parentRect || null,
    parent: this.parent,
    elements: this.elements,
    open: this.data.open,
    commentManager: this.parent._commentManager
  });
};
var pi, gr, ef, sf, kl, Rl, te, Ms, mr, Na, Ml, Ll, Ls, gi, wn, Sn, ye, An, yr, td, xn, Dl, Ba, br, He, vr, vt, cu, Fp, Np, Bp, du, Hp, mb, yb, bb, vb, uu, fu, jp;
class K0 {
  constructor({
    container: t,
    color: e,
    elements: i,
    titleObj: s,
    modificationDate: r,
    contentsObj: a,
    richText: o,
    parent: l,
    rect: c,
    parentRect: d,
    open: u,
    commentManager: g = null
  }) {
    v(this, vt);
    v(this, pi, null);
    v(this, gr, x(this, vt, bb).bind(this));
    v(this, ef, x(this, vt, jp).bind(this));
    v(this, sf, x(this, vt, fu).bind(this));
    v(this, kl, x(this, vt, uu).bind(this));
    v(this, Rl, null);
    v(this, te, null);
    v(this, Ms, null);
    v(this, mr, null);
    v(this, Na, null);
    v(this, Ml, null);
    v(this, Ll, null);
    v(this, Ls, !1);
    v(this, gi, null);
    v(this, wn, null);
    v(this, Sn, null);
    v(this, ye, null);
    v(this, An, null);
    v(this, yr, null);
    v(this, td, null);
    v(this, xn, null);
    v(this, Dl, null);
    v(this, Ba, null);
    v(this, br, !1);
    v(this, He, null);
    v(this, vr, null);
    m(this, te, t), m(this, Dl, s), m(this, Ms, a), m(this, xn, o), m(this, Ml, l), m(this, Rl, e), m(this, td, c), m(this, Ll, d), m(this, Na, i), m(this, pi, g), m(this, He, i[0]), m(this, mr, Uh.toDateObject(r)), this.trigger = i.flatMap((b) => b.getElementsToTriggerPopup()), g ? this.renderCommentButton() : (x(this, vt, cu).call(this), n(this, te).hidden = !0, u && x(this, vt, uu).call(this));
  }
  renderCommentButton() {
    if (n(this, ye) || (n(this, An) || x(this, vt, Fp).call(this), !n(this, An)))
      return;
    const {
      signal: t
    } = m(this, wn, new AbortController()), e = !!n(this, He).extraPopupElement, i = () => {
      n(this, pi).toggleCommentPopup(this, !0, void 0, !e);
    }, s = () => {
      n(this, pi).toggleCommentPopup(this, !1, !0, !e);
    }, r = () => {
      n(this, pi).toggleCommentPopup(this, !1, !1);
    };
    if (e) {
      m(this, ye, n(this, He).container);
      for (const a of this.trigger)
        a.ariaHasPopup = "dialog", a.ariaControls = "commentPopup", a.addEventListener("keydown", n(this, gr), {
          signal: t
        }), a.addEventListener("click", i, {
          signal: t
        }), a.addEventListener("pointerenter", s, {
          signal: t
        }), a.addEventListener("pointerleave", r, {
          signal: t
        }), a.classList.add("popupTriggerArea");
    } else {
      const a = m(this, ye, document.createElement("button"));
      a.className = "annotationCommentButton";
      const o = n(this, He).container;
      a.style.zIndex = o.style.zIndex + 1, a.tabIndex = 0, a.ariaHasPopup = "dialog", a.ariaControls = "commentPopup", a.setAttribute("data-l10n-id", "pdfjs-show-comment-button"), x(this, vt, Bp).call(this), x(this, vt, Np).call(this), a.addEventListener("keydown", n(this, gr), {
        signal: t
      }), a.addEventListener("click", i, {
        signal: t
      }), a.addEventListener("pointerenter", s, {
        signal: t
      }), a.addEventListener("pointerleave", r, {
        signal: t
      }), o.after(a);
    }
  }
  get commentButtonColor() {
    const {
      color: t,
      opacity: e
    } = n(this, He).commentData;
    return t ? n(this, Ml)._commentManager.makeCommentColor(t, e) : null;
  }
  focusCommentButton() {
    setTimeout(() => {
      var t;
      (t = n(this, ye)) == null || t.focus();
    }, 0);
  }
  getData() {
    const {
      richText: t,
      color: e,
      opacity: i,
      creationDate: s,
      modificationDate: r
    } = n(this, He).commentData;
    return {
      contentsObj: {
        str: this.comment
      },
      richText: t,
      color: e,
      opacity: i,
      creationDate: s,
      modificationDate: r
    };
  }
  get elementBeforePopup() {
    return n(this, ye);
  }
  get comment() {
    return n(this, vr) || m(this, vr, n(this, He).commentText), n(this, vr);
  }
  set comment(t) {
    t !== this.comment && (n(this, He).commentText = m(this, vr, t));
  }
  get parentBoundingClientRect() {
    return n(this, He).layer.getBoundingClientRect();
  }
  setCommentButtonStates({
    selected: t,
    hasPopup: e
  }) {
    n(this, ye) && (n(this, ye).classList.toggle("selected", t), n(this, ye).ariaExpanded = e);
  }
  setSelectedCommentButton(t) {
    n(this, ye).classList.toggle("selected", t);
  }
  get commentPopupPosition() {
    if (n(this, yr))
      return n(this, yr);
    const {
      x: t,
      y: e,
      height: i
    } = n(this, ye).getBoundingClientRect(), {
      x: s,
      y: r,
      width: a,
      height: o
    } = n(this, He).layer.getBoundingClientRect();
    return [(t - s) / a, (e + i - r) / o];
  }
  set commentPopupPosition(t) {
    m(this, yr, t);
  }
  hasDefaultPopupPosition() {
    return n(this, yr) === null;
  }
  get commentButtonPosition() {
    return n(this, An);
  }
  get commentButtonWidth() {
    return n(this, ye).getBoundingClientRect().width / this.parentBoundingClientRect.width;
  }
  editComment(t) {
    const [e, i] = n(this, yr) || this.commentButtonPosition.map((c) => c / 100), s = this.parentBoundingClientRect, {
      x: r,
      y: a,
      width: o,
      height: l
    } = s;
    n(this, pi).showDialog(null, this, r + e * o, a + i * l, {
      ...t,
      parentDimensions: s
    });
  }
  render() {
    var i, s;
    if (n(this, gi))
      return;
    const t = m(this, gi, document.createElement("div"));
    if (t.className = "popup", n(this, Rl)) {
      const r = t.style.outlineColor = tt.makeHexColor(...n(this, Rl));
      t.style.backgroundColor = `color-mix(in srgb, ${r} 30%, white)`;
    }
    const e = document.createElement("span");
    if (e.className = "header", (i = n(this, Dl)) != null && i.str) {
      const r = document.createElement("span");
      r.className = "title", e.append(r), {
        dir: r.dir,
        str: r.textContent
      } = n(this, Dl);
    }
    if (t.append(e), n(this, mr)) {
      const r = document.createElement("time");
      r.className = "popupDate", r.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), r.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: n(this, mr).valueOf()
      })), r.dateTime = n(this, mr).toISOString(), e.append(r);
    }
    xg({
      html: n(this, vt, du) || n(this, Ms).str,
      dir: (s = n(this, Ms)) == null ? void 0 : s.dir,
      className: "popupContent"
    }, t), n(this, te).append(t);
  }
  updateEdited({
    rect: t,
    popup: e,
    deleted: i
  }) {
    var s;
    if (n(this, pi)) {
      i ? (this.remove(), m(this, vr, null)) : e && (e.deleted ? this.remove() : (x(this, vt, Bp).call(this), m(this, vr, e.text))), t && (m(this, An, null), x(this, vt, Fp).call(this), x(this, vt, Np).call(this));
      return;
    }
    if (i || e != null && e.deleted) {
      this.remove();
      return;
    }
    x(this, vt, cu).call(this), n(this, Ba) || m(this, Ba, {
      contentsObj: n(this, Ms),
      richText: n(this, xn)
    }), t && m(this, Sn, null), e && e.text && (m(this, xn, x(this, vt, yb).call(this, e.text)), m(this, mr, Uh.toDateObject(e.date)), m(this, Ms, null)), (s = n(this, gi)) == null || s.remove(), m(this, gi, null);
  }
  resetEdited() {
    var t;
    n(this, Ba) && ({
      contentsObj: de(this, Ms)._,
      richText: de(this, xn)._
    } = n(this, Ba), m(this, Ba, null), (t = n(this, gi)) == null || t.remove(), m(this, gi, null), m(this, Sn, null));
  }
  remove() {
    var t, e, i;
    if ((t = n(this, wn)) == null || t.abort(), m(this, wn, null), (e = n(this, gi)) == null || e.remove(), m(this, gi, null), m(this, br, !1), m(this, Ls, !1), (i = n(this, ye)) == null || i.remove(), m(this, ye, null), this.trigger)
      for (const s of this.trigger)
        s.classList.remove("popupTriggerArea");
  }
  forceHide() {
    m(this, br, this.isVisible), n(this, br) && (n(this, te).hidden = !0);
  }
  maybeShow() {
    n(this, pi) || (x(this, vt, cu).call(this), n(this, br) && (n(this, gi) || x(this, vt, fu).call(this), m(this, br, !1), n(this, te).hidden = !1));
  }
  get isVisible() {
    return n(this, pi) ? !1 : n(this, te).hidden === !1;
  }
}
pi = new WeakMap(), gr = new WeakMap(), ef = new WeakMap(), sf = new WeakMap(), kl = new WeakMap(), Rl = new WeakMap(), te = new WeakMap(), Ms = new WeakMap(), mr = new WeakMap(), Na = new WeakMap(), Ml = new WeakMap(), Ll = new WeakMap(), Ls = new WeakMap(), gi = new WeakMap(), wn = new WeakMap(), Sn = new WeakMap(), ye = new WeakMap(), An = new WeakMap(), yr = new WeakMap(), td = new WeakMap(), xn = new WeakMap(), Dl = new WeakMap(), Ba = new WeakMap(), br = new WeakMap(), He = new WeakMap(), vr = new WeakMap(), vt = new WeakSet(), cu = function() {
  var e;
  if (n(this, wn))
    return;
  m(this, wn, new AbortController());
  const {
    signal: t
  } = n(this, wn);
  for (const i of this.trigger)
    i.addEventListener("click", n(this, kl), {
      signal: t
    }), i.addEventListener("pointerenter", n(this, sf), {
      signal: t
    }), i.addEventListener("pointerleave", n(this, ef), {
      signal: t
    }), i.classList.add("popupTriggerArea");
  for (const i of n(this, Na))
    (e = i.container) == null || e.addEventListener("keydown", n(this, gr), {
      signal: t
    });
}, Fp = function() {
  const t = n(this, Na).find((e) => e.hasCommentButton);
  t && m(this, An, t._normalizePoint(t.commentButtonPosition));
}, Np = function() {
  if (n(this, He).extraPopupElement && !n(this, He).editor)
    return;
  this.renderCommentButton();
  const [t, e] = n(this, An), {
    style: i
  } = n(this, ye);
  i.left = `calc(${t}%)`, i.top = `calc(${e}% - var(--comment-button-dim))`;
}, Bp = function() {
  n(this, He).extraPopupElement || (this.renderCommentButton(), n(this, ye).style.backgroundColor = this.commentButtonColor || "");
}, du = function() {
  const t = n(this, xn), e = n(this, Ms);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && n(this, xn).html || null;
}, Hp = function() {
  var t, e, i;
  return ((i = (e = (t = n(this, vt, du)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : i.fontSize) || 0;
}, mb = function() {
  var t, e, i;
  return ((i = (e = (t = n(this, vt, du)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : i.color) || null;
}, yb = function(t) {
  const e = [], i = {
    str: t,
    html: {
      name: "div",
      attributes: {
        dir: "auto"
      },
      children: [{
        name: "p",
        children: e
      }]
    }
  }, s = {
    style: {
      color: n(this, vt, mb),
      fontSize: n(this, vt, Hp) ? `calc(${n(this, vt, Hp)}px * var(--total-scale-factor))` : ""
    }
  };
  for (const r of t.split(`
`))
    e.push({
      name: "span",
      value: r,
      attributes: s
    });
  return i;
}, bb = function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && n(this, Ls)) && x(this, vt, uu).call(this);
}, vb = function() {
  if (n(this, Sn) !== null)
    return;
  const {
    page: {
      view: t
    },
    viewport: {
      rawDims: {
        pageWidth: e,
        pageHeight: i,
        pageX: s,
        pageY: r
      }
    }
  } = n(this, Ml);
  let a = !!n(this, Ll), o = a ? n(this, Ll) : n(this, td);
  for (const E of n(this, Na))
    if (!o || tt.intersect(E.data.rect, o) !== null) {
      o = E.data.rect, a = !0;
      break;
    }
  const l = tt.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]), d = a ? o[2] - o[0] + 5 : 0, u = l[0] + d, g = l[1];
  m(this, Sn, [100 * (u - s) / e, 100 * (g - r) / i]);
  const {
    style: b
  } = n(this, te);
  b.left = `${n(this, Sn)[0]}%`, b.top = `${n(this, Sn)[1]}%`;
}, uu = function() {
  if (n(this, pi)) {
    n(this, pi).toggleCommentPopup(this, !1);
    return;
  }
  m(this, Ls, !n(this, Ls)), n(this, Ls) ? (x(this, vt, fu).call(this), n(this, te).addEventListener("click", n(this, kl)), n(this, te).addEventListener("keydown", n(this, gr))) : (x(this, vt, jp).call(this), n(this, te).removeEventListener("click", n(this, kl)), n(this, te).removeEventListener("keydown", n(this, gr)));
}, fu = function() {
  n(this, gi) || this.render(), this.isVisible ? n(this, Ls) && n(this, te).classList.add("focused") : (x(this, vt, vb).call(this), n(this, te).hidden = !1, n(this, te).style.zIndex = parseInt(n(this, te).style.zIndex) + 1e3);
}, jp = function() {
  n(this, te).classList.remove("focused"), !(n(this, Ls) || !this.isVisible) && (n(this, te).hidden = !0, n(this, te).style.zIndex = parseInt(n(this, te).style.zIndex) - 1e3);
};
class wb extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = ft.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const t = document.createElement("div");
      t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
      for (const e of this.textContent) {
        const i = document.createElement("span");
        i.textContent = e, t.append(i);
      }
      this.container.append(t);
    }
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var ed;
class J0 extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    v(this, ed, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const {
      data: e,
      width: i,
      height: s
    } = this, r = this.svgFactory.create(i, s, !0), a = m(this, ed, this.svgFactory.createElement("svg:line"));
    return a.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), a.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), a.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), a.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), a.setAttribute("stroke-width", e.borderStyle.width || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), r.append(a), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, ed);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
ed = new WeakMap();
var id;
class Q0 extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    v(this, id, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const {
      data: e,
      width: i,
      height: s
    } = this, r = this.svgFactory.create(i, s, !0), a = e.borderStyle.width, o = m(this, id, this.svgFactory.createElement("svg:rect"));
    return o.setAttribute("x", a / 2), o.setAttribute("y", a / 2), o.setAttribute("width", i - a), o.setAttribute("height", s - a), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, id);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
id = new WeakMap();
var sd;
class Z0 extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    v(this, sd, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const {
      data: e,
      width: i,
      height: s
    } = this, r = this.svgFactory.create(i, s, !0), a = e.borderStyle.width, o = m(this, sd, this.svgFactory.createElement("svg:ellipse"));
    return o.setAttribute("cx", i / 2), o.setAttribute("cy", s / 2), o.setAttribute("rx", i / 2 - a / 2), o.setAttribute("ry", s / 2 - a / 2), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, sd);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
sd = new WeakMap();
var nd;
class Sb extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    v(this, nd, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        vertices: i,
        borderStyle: s,
        popupRef: r
      },
      width: a,
      height: o
    } = this;
    if (!i)
      return this.container;
    const l = this.svgFactory.create(a, o, !0);
    let c = [];
    for (let u = 0, g = i.length; u < g; u += 2) {
      const b = i[u] - e[0], E = e[3] - i[u + 1];
      c.push(`${b},${E}`);
    }
    c = c.join(" ");
    const d = m(this, nd, this.svgFactory.createElement(this.svgElementName));
    return d.setAttribute("points", c), d.setAttribute("stroke-width", s.width || 1), d.setAttribute("stroke", "transparent"), d.setAttribute("fill", "transparent"), l.append(d), this.container.append(l), !r && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, nd);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
nd = new WeakMap();
class tS extends Sb {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class eS extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var rd, Ha, ad, zp;
class Rg extends Jt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    v(this, ad);
    v(this, rd, null);
    v(this, Ha, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? ft.HIGHLIGHT : ft.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        rotation: i,
        inkLists: s,
        borderStyle: r,
        popupRef: a
      }
    } = this, {
      transform: o,
      width: l,
      height: c
    } = x(this, ad, zp).call(this, i, e), d = this.svgFactory.create(l, c, !0), u = m(this, rd, this.svgFactory.createElement("svg:g"));
    d.append(u), u.setAttribute("stroke-width", r.width || 1), u.setAttribute("stroke-linecap", "round"), u.setAttribute("stroke-linejoin", "round"), u.setAttribute("stroke-miterlimit", 10), u.setAttribute("stroke", "transparent"), u.setAttribute("fill", "transparent"), u.setAttribute("transform", o);
    for (let g = 0, b = s.length; g < b; g++) {
      const E = this.svgFactory.createElement(this.svgElementName);
      n(this, Ha).push(E), E.setAttribute("points", s[g].join(",")), u.append(E);
    }
    return !a && this.hasPopupData && this._createPopup(), this.container.append(d), this._editOnDoubleClick(), this.container;
  }
  updateEdited(e) {
    super.updateEdited(e);
    const {
      thickness: i,
      points: s,
      rect: r
    } = e, a = n(this, rd);
    if (i >= 0 && a.setAttribute("stroke-width", i || 1), s)
      for (let o = 0, l = n(this, Ha).length; o < l; o++)
        n(this, Ha)[o].setAttribute("points", s[o].join(","));
    if (r) {
      const {
        transform: o,
        width: l,
        height: c
      } = x(this, ad, zp).call(this, this.data.rotation, r);
      a.parentElement.setAttribute("viewBox", `0 0 ${l} ${c}`), a.setAttribute("transform", o);
    }
  }
  getElementsToTriggerPopup() {
    return n(this, Ha);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
rd = new WeakMap(), Ha = new WeakMap(), ad = new WeakSet(), zp = function(e, i) {
  switch (e) {
    case 90:
      return {
        transform: `rotate(90) translate(${-i[0]},${i[1]}) scale(1,-1)`,
        width: i[3] - i[1],
        height: i[2] - i[0]
      };
    case 180:
      return {
        transform: `rotate(180) translate(${-i[2]},${i[1]}) scale(1,-1)`,
        width: i[2] - i[0],
        height: i[3] - i[1]
      };
    case 270:
      return {
        transform: `rotate(270) translate(${-i[2]},${i[3]}) scale(1,-1)`,
        width: i[3] - i[1],
        height: i[2] - i[0]
      };
    default:
      return {
        transform: `translate(${-i[0]},${i[3]}) scale(1,-1)`,
        width: i[2] - i[0],
        height: i[3] - i[1]
      };
  }
};
class Ab extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    }), this.annotationEditorType = ft.HIGHLIGHT;
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), t) {
      const i = document.createElement("mark");
      i.classList.add("overlaidText"), i.textContent = t, this.container.append(i);
    }
    return this.container;
  }
}
class iS extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), t) {
      const i = document.createElement("u");
      i.classList.add("overlaidText"), i.textContent = t, this.container.append(i);
    }
    return this.container;
  }
}
class sS extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), t) {
      const i = document.createElement("u");
      i.classList.add("overlaidText"), i.textContent = t, this.container.append(i);
    }
    return this.container;
  }
}
class nS extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), t) {
      const i = document.createElement("s");
      i.classList.add("overlaidText"), i.textContent = t, this.container.append(i);
    }
    return this.container;
  }
}
class xb extends Jt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.annotationEditorType = ft.STAMP;
  }
  render() {
    return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var od, ld, $p;
class rS extends Jt {
  constructor(e) {
    var s;
    super(e, {
      isRenderable: !0
    });
    v(this, ld);
    v(this, od, null);
    const {
      file: i
    } = this.data;
    this.filename = i.filename, this.content = i.content, (s = this.linkService.eventBus) == null || s.dispatch("fileattachmentannotation", {
      source: this,
      ...i
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container: e,
      data: i
    } = this;
    let s;
    i.hasAppearance || i.fillAlpha === 0 ? s = document.createElement("div") : (s = document.createElement("img"), s.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(i.name) ? "paperclip" : "pushpin"}.svg`, i.fillAlpha && i.fillAlpha < 1 && (s.style = `filter: opacity(${Math.round(i.fillAlpha * 100)}%);`)), s.addEventListener("dblclick", x(this, ld, $p).bind(this)), m(this, od, s);
    const {
      isMac: r
    } = xe.platform;
    return e.addEventListener("keydown", (a) => {
      a.key === "Enter" && (r ? a.metaKey : a.ctrlKey) && x(this, ld, $p).call(this);
    }), !i.popupRef && this.hasPopupData ? this._createPopup() : s.classList.add("popupTriggerArea"), e.append(s), e;
  }
  getElementsToTriggerPopup() {
    return n(this, od);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
od = new WeakMap(), ld = new WeakSet(), $p = function() {
  var e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
var Ol, ja, Il, wr, hd, za, Hr, Up, Wp, Fl;
let Mg = (Fl = class {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: i,
    annotationEditorUIManager: s,
    page: r,
    viewport: a,
    structTreeLayer: o,
    commentManager: l,
    linkService: c,
    annotationStorage: d
  }) {
    v(this, Hr);
    v(this, Ol, null);
    v(this, ja, null);
    v(this, Il, null);
    v(this, wr, /* @__PURE__ */ new Map());
    v(this, hd, null);
    v(this, za, null);
    this.div = t, m(this, Ol, e), m(this, ja, i), m(this, hd, o || null), m(this, za, c || null), m(this, Il, d || new _g()), this.page = r, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = s, this._commentManager = l || null;
  }
  hasEditableAnnotations() {
    return n(this, wr).size > 0;
  }
  async render(t) {
    var a, o, l;
    const {
      annotations: e
    } = t, i = this.div;
    Fr(i, this.viewport);
    const s = /* @__PURE__ */ new Map(), r = {
      data: null,
      layer: i,
      linkService: n(this, za),
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new qh(),
      annotationStorage: n(this, Il),
      enableComment: t.enableComment === !0,
      enableScripting: t.enableScripting === !0,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null
    };
    for (const c of e) {
      if (c.noHTML)
        continue;
      const d = c.annotationType === se.POPUP;
      if (d) {
        const b = s.get(c.id);
        if (!b)
          continue;
        r.elements = b;
      } else if (c.rect[2] === c.rect[0] || c.rect[3] === c.rect[1])
        continue;
      r.data = c;
      const u = Pm.create(r);
      if (!u.isRenderable)
        continue;
      if (!d && c.popupRef) {
        const b = s.get(c.popupRef);
        b ? b.push(u) : s.set(c.popupRef, [u]);
      }
      const g = u.render();
      c.hidden && (g.style.visibility = "hidden"), await x(this, Hr, Up).call(this, g, c.id, r.elements), (o = (a = u.extraPopupElement) == null ? void 0 : a.popup) == null || o.renderCommentButton(), u._isEditable && (n(this, wr).set(u.data.id, u), (l = this._annotationEditorUIManager) == null || l.renderAnnotationElement(u));
    }
    x(this, Hr, Wp).call(this);
  }
  async addLinkAnnotations(t) {
    const e = {
      data: null,
      layer: this.div,
      linkService: n(this, za),
      svgFactory: new qh(),
      parent: this
    };
    for (const i of t) {
      i.borderStyle || (i.borderStyle = Fl._defaultBorderStyle), e.data = i;
      const s = Pm.create(e);
      if (!s.isRenderable)
        continue;
      const r = s.render();
      await x(this, Hr, Up).call(this, r, i.id, null);
    }
  }
  update({
    viewport: t
  }) {
    const e = this.div;
    this.viewport = t, Fr(e, {
      rotation: t.rotation
    }), x(this, Hr, Wp).call(this), e.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(n(this, wr).values());
  }
  getEditableAnnotation(t) {
    return n(this, wr).get(t);
  }
  addFakeAnnotation(t) {
    var o;
    const {
      div: e
    } = this, {
      id: i,
      rotation: s
    } = t, r = new U0({
      data: {
        id: i,
        rect: t.getPDFRect(),
        rotation: s
      },
      editor: t,
      layer: e,
      parent: this,
      enableComment: !!this._commentManager,
      linkService: n(this, za),
      annotationStorage: n(this, Il)
    }), a = r.render();
    return e.append(a), (o = n(this, Ol)) == null || o.moveElementInDOM(e, a, a, !1), r.createOrUpdatePopup(), r;
  }
  static get _defaultBorderStyle() {
    return yt(this, "_defaultBorderStyle", Object.freeze({
      width: 1,
      rawWidth: 1,
      style: mo.SOLID,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0
    }));
  }
}, Ol = new WeakMap(), ja = new WeakMap(), Il = new WeakMap(), wr = new WeakMap(), hd = new WeakMap(), za = new WeakMap(), Hr = new WeakSet(), Up = async function(t, e, i) {
  var o, l;
  const s = t.firstChild || t, r = s.id = `${Sg}${e}`, a = await ((o = n(this, hd)) == null ? void 0 : o.getAriaAttributes(r));
  if (a)
    for (const [c, d] of a)
      s.setAttribute(c, d);
  i ? i.at(-1).container.after(t) : (this.div.append(t), (l = n(this, Ol)) == null || l.moveElementInDOM(this.div, t, s, !1));
}, Wp = function() {
  var e;
  if (!n(this, ja))
    return;
  const t = this.div;
  for (const [i, s] of n(this, ja)) {
    const r = t.querySelector(`[data-annotation-id="${i}"]`);
    if (!r)
      continue;
    s.className = "annotationContent";
    const {
      firstChild: a
    } = r;
    a ? a.nodeName === "CANVAS" ? a.replaceWith(s) : a.classList.contains("annotationContent") ? a.after(s) : a.before(s) : r.append(s);
    const o = n(this, wr).get(i);
    o && (o._hasNoCanvas ? ((e = this._annotationEditorUIManager) == null || e.setMissingCanvas(i, r.id, s), o._hasNoCanvas = !1) : o.canvas = s);
  }
  n(this, ja).clear();
}, Fl);
const Yd = /\r\n?|\n/g;
var mi, cd, $a, yi, he, _b, Eb, Cb, pu, Dn, gu, mu, Tb, Vp, Pb;
const Wt = class Wt extends Ut {
  constructor(e) {
    super({
      ...e,
      name: "freeTextEditor"
    });
    v(this, he);
    v(this, mi, "");
    v(this, cd, `${this.id}-editor`);
    v(this, $a, null);
    v(this, yi);
    V(this, "_colorPicker", null);
    this.color = e.color || Wt._defaultColor || Ut._defaultLineColor, m(this, yi, e.fontSize || Wt._defaultFontSize), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-freetext-added-alert");
  }
  static get _keyboardManager() {
    const e = Wt.prototype, i = (a) => a.isEmpty(), s = Nr.TRANSLATE_SMALL, r = Nr.TRANSLATE_BIG;
    return yt(this, "_keyboardManager", new Dd([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], e.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], e._translateEmpty, {
      args: [-s, 0],
      checker: i
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e._translateEmpty, {
      args: [-r, 0],
      checker: i
    }], [["ArrowRight", "mac+ArrowRight"], e._translateEmpty, {
      args: [s, 0],
      checker: i
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e._translateEmpty, {
      args: [r, 0],
      checker: i
    }], [["ArrowUp", "mac+ArrowUp"], e._translateEmpty, {
      args: [0, -s],
      checker: i
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e._translateEmpty, {
      args: [0, -r],
      checker: i
    }], [["ArrowDown", "mac+ArrowDown"], e._translateEmpty, {
      args: [0, s],
      checker: i
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e._translateEmpty, {
      args: [0, r],
      checker: i
    }]]));
  }
  static initialize(e, i) {
    Ut.initialize(e, i);
    const s = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(s.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(e, i) {
    switch (e) {
      case At.FREETEXT_SIZE:
        Wt._defaultFontSize = i;
        break;
      case At.FREETEXT_COLOR:
        Wt._defaultColor = i;
        break;
    }
  }
  updateParams(e, i) {
    switch (e) {
      case At.FREETEXT_SIZE:
        x(this, he, _b).call(this, i);
        break;
      case At.FREETEXT_COLOR:
        x(this, he, Eb).call(this, i);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[At.FREETEXT_SIZE, Wt._defaultFontSize], [At.FREETEXT_COLOR, Wt._defaultColor || Ut._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[At.FREETEXT_SIZE, n(this, yi)], [At.FREETEXT_COLOR, this.color]];
  }
  get toolbarButtons() {
    return this._colorPicker || (this._colorPicker = new Nu(this)), [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return At.FREETEXT_COLOR;
  }
  onUpdatedColor() {
    var e;
    this.editorDiv.style.color = this.color, (e = this._colorPicker) == null || e.update(this.color), super.onUpdatedColor();
  }
  _translateEmpty(e, i) {
    this._uiManager.translateSelectedEditors(e, i, !0);
  }
  getInitialTranslation() {
    const e = this.parentScale;
    return [-Wt._internalPadding * e, -(Wt._internalPadding + n(this, yi)) * e];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (!super.enableEditMode())
      return !1;
    this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), m(this, $a, new AbortController());
    const e = this._uiManager.combinedSignal(n(this, $a));
    return this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
      signal: e
    }), !0;
  }
  disableEditMode() {
    var e;
    return super.disableEditMode() ? (this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", n(this, cd)), this._isDraggable = !0, (e = n(this, $a)) == null || e.abort(), m(this, $a, null), this.div.focus({
      preventScroll: !0
    }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"), !0) : !1;
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), e.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded(e) {
    var i;
    this.width || (this.enableEditMode(), e && this.editorDiv.focus(), (i = this._initialOptions) != null && i.isCentered && this.center(), this._initialOptions = null);
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
  }
  commit() {
    if (!this.isInEditMode())
      return;
    super.commit(), this.disableEditMode();
    const e = n(this, mi), i = m(this, mi, x(this, he, Cb).call(this).trimEnd());
    if (e === i)
      return;
    const s = (r) => {
      if (m(this, mi, r), !r) {
        this.remove();
        return;
      }
      x(this, he, mu).call(this), this._uiManager.rebuild(this), x(this, he, pu).call(this);
    };
    this.addCommands({
      cmd: () => {
        s(i);
      },
      undo: () => {
        s(e);
      },
      mustExec: !1
    }), x(this, he, pu).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  keydown(e) {
    e.target === this.div && e.key === "Enter" && (this.enterInEditMode(), e.preventDefault());
  }
  editorDivKeydown(e) {
    Wt._keyboardManager.exec(this, e);
  }
  editorDivFocus(e) {
    this.isEditing = !0;
  }
  editorDivBlur(e) {
    this.isEditing = !1;
  }
  editorDivInput(e) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
  }
  get canChangeContent() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, i;
    (this._isCopy || this.annotationElementId) && (e = this.x, i = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", n(this, cd)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = !0;
    const {
      style: s
    } = this.editorDiv;
    if (s.fontSize = `calc(${n(this, yi)}px * var(--total-scale-factor))`, s.color = this.color, this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), this._isCopy || this.annotationElementId) {
      const [r, a] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: o
        } = this._initialData;
        let [l, c] = this.getInitialTranslation();
        [l, c] = this.pageTranslationToScreen(l, c);
        const [d, u] = this.pageDimensions, [g, b] = this.pageTranslation;
        let E, w;
        switch (this.rotation) {
          case 0:
            E = e + (o[0] - g) / d, w = i + this.height - (o[1] - b) / u;
            break;
          case 90:
            E = e + (o[0] - g) / d, w = i - (o[1] - b) / u, [l, c] = [c, -l];
            break;
          case 180:
            E = e - this.width + (o[0] - g) / d, w = i - (o[1] - b) / u, [l, c] = [-l, -c];
            break;
          case 270:
            E = e + (o[0] - g - this.height * u) / d, w = i + (o[1] - b - this.width * d) / u, [l, c] = [-c, l];
            break;
        }
        this.setAt(E * r, w * a, l, c);
      } else
        this._moveAfterPaste(e, i);
      x(this, he, mu).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(e) {
    var E, w, M;
    const i = e.clipboardData || window.clipboardData, {
      types: s
    } = i;
    if (s.length === 1 && s[0] === "text/plain")
      return;
    e.preventDefault();
    const r = x(E = Wt, Dn, Vp).call(E, i.getData("text") || "").replaceAll(Yd, `
`);
    if (!r)
      return;
    const a = window.getSelection();
    if (!a.rangeCount)
      return;
    this.editorDiv.normalize(), a.deleteFromDocument();
    const o = a.getRangeAt(0);
    if (!r.includes(`
`)) {
      o.insertNode(document.createTextNode(r)), this.editorDiv.normalize(), a.collapseToStart();
      return;
    }
    const {
      startContainer: l,
      startOffset: c
    } = o, d = [], u = [];
    if (l.nodeType === Node.TEXT_NODE) {
      const k = l.parentElement;
      if (u.push(l.nodeValue.slice(c).replaceAll(Yd, "")), k !== this.editorDiv) {
        let L = d;
        for (const R of this.editorDiv.childNodes) {
          if (R === k) {
            L = u;
            continue;
          }
          L.push(x(w = Wt, Dn, gu).call(w, R));
        }
      }
      d.push(l.nodeValue.slice(0, c).replaceAll(Yd, ""));
    } else if (l === this.editorDiv) {
      let k = d, L = 0;
      for (const R of this.editorDiv.childNodes)
        L++ === c && (k = u), k.push(x(M = Wt, Dn, gu).call(M, R));
    }
    m(this, mi, `${d.join(`
`)}${r}${u.join(`
`)}`), x(this, he, mu).call(this);
    const g = new Range();
    let b = Math.sumPrecise(d.map((k) => k.length));
    for (const {
      firstChild: k
    } of this.editorDiv.childNodes)
      if (k.nodeType === Node.TEXT_NODE) {
        const L = k.nodeValue.length;
        if (b <= L) {
          g.setStart(k, b), g.setEnd(k, b);
          break;
        }
        b -= L;
      }
    a.removeAllRanges(), a.addRange(g);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  getPDFRect() {
    const e = Wt._internalPadding * this.parentScale;
    return this.getRect(e, e);
  }
  static async deserialize(e, i, s) {
    var o;
    let r = null;
    if (e instanceof wb) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: l,
            fontColor: c
          },
          rect: d,
          rotation: u,
          id: g,
          popupRef: b,
          richText: E,
          contentsObj: w,
          creationDate: M,
          modificationDate: k
        },
        textContent: L,
        textPosition: R,
        parent: {
          page: {
            pageNumber: p
          }
        }
      } = e;
      if (!L || L.length === 0)
        return null;
      r = e = {
        annotationType: ft.FREETEXT,
        color: Array.from(c),
        fontSize: l,
        value: L.join(`
`),
        position: R,
        pageIndex: p - 1,
        rect: d.slice(0),
        rotation: u,
        annotationElementId: g,
        id: g,
        deleted: !1,
        popupRef: b,
        comment: (w == null ? void 0 : w.str) || null,
        richText: E,
        creationDate: M,
        modificationDate: k
      };
    }
    const a = await super.deserialize(e, i, s);
    return m(a, yi, e.fontSize), a.color = tt.makeHexColor(...e.color), m(a, mi, x(o = Wt, Dn, Vp).call(o, e.value)), a._initialData = r, e.comment && a.setCommentData(e), a;
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const i = Ut._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color), s = Object.assign(super.serialize(e), {
      color: i,
      fontSize: n(this, yi),
      value: x(this, he, Tb).call(this)
    });
    return this.addComment(s), e ? (s.isCopy = !0, s) : this.annotationElementId && !x(this, he, Pb).call(this, s) ? null : (s.id = this.annotationElementId, s);
  }
  renderAnnotationElement(e) {
    const i = super.renderAnnotationElement(e);
    if (!i)
      return null;
    const {
      style: s
    } = i;
    s.fontSize = `calc(${n(this, yi)}px * var(--total-scale-factor))`, s.color = this.color, i.replaceChildren();
    for (const r of n(this, mi).split(`
`)) {
      const a = document.createElement("div");
      a.append(r ? document.createTextNode(r) : document.createElement("br")), i.append(a);
    }
    return e.updateEdited({
      rect: this.getPDFRect(),
      popup: this._uiManager.hasCommentManager() || this.hasEditedComment ? this.comment : {
        text: n(this, mi)
      }
    }), i;
  }
  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
mi = new WeakMap(), cd = new WeakMap(), $a = new WeakMap(), yi = new WeakMap(), he = new WeakSet(), _b = function(e) {
  const i = (r) => {
    this.editorDiv.style.fontSize = `calc(${r}px * var(--total-scale-factor))`, this.translate(0, -(r - n(this, yi)) * this.parentScale), m(this, yi, r), x(this, he, pu).call(this);
  }, s = n(this, yi);
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: At.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Eb = function(e) {
  const i = (r) => {
    this.color = r, this.onUpdatedColor();
  }, s = this.color;
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: At.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Cb = function() {
  var s;
  const e = [];
  this.editorDiv.normalize();
  let i = null;
  for (const r of this.editorDiv.childNodes)
    (i == null ? void 0 : i.nodeType) === Node.TEXT_NODE && r.nodeName === "BR" || (e.push(x(s = Wt, Dn, gu).call(s, r)), i = r);
  return e.join(`
`);
}, pu = function() {
  const [e, i] = this.parentDimensions;
  let s;
  if (this.isAttachedToDOM)
    s = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: r,
      div: a
    } = this, o = a.style.display, l = a.classList.contains("hidden");
    a.classList.remove("hidden"), a.style.display = "hidden", r.div.append(this.div), s = a.getBoundingClientRect(), a.remove(), a.style.display = o, a.classList.toggle("hidden", l);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = s.width / e, this.height = s.height / i) : (this.width = s.height / e, this.height = s.width / i), this.fixAndSetPosition();
}, Dn = new WeakSet(), gu = function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(Yd, "");
}, mu = function() {
  if (this.editorDiv.replaceChildren(), !!n(this, mi))
    for (const e of n(this, mi).split(`
`)) {
      const i = document.createElement("div");
      i.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(i);
    }
}, Tb = function() {
  return n(this, mi).replaceAll(" ", " ");
}, Vp = function(e) {
  return e.replaceAll(" ", " ");
}, Pb = function(e) {
  const {
    value: i,
    fontSize: s,
    color: r,
    pageIndex: a
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || e.value !== i || e.fontSize !== s || e.color.some((o, l) => o !== r[l]) || e.pageIndex !== a;
}, v(Wt, Dn), V(Wt, "_freeTextDefaultContent", ""), V(Wt, "_internalPadding", 0), V(Wt, "_defaultColor", null), V(Wt, "_defaultFontSize", 10), V(Wt, "_type", "freetext"), V(Wt, "_editorType", ft.FREETEXT);
let Gp = Wt;
class Z {
  toSVGPath() {
    zt("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    zt("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    zt("Abstract method `serialize` must be implemented.");
  }
  static _rescale(t, e, i, s, r, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2)
      a[o] = e + t[o] * s, a[o + 1] = i + t[o + 1] * r;
    return a;
  }
  static _rescaleAndSwap(t, e, i, s, r, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2)
      a[o] = e + t[o + 1] * s, a[o + 1] = i + t[o] * r;
    return a;
  }
  static _translate(t, e, i, s) {
    s || (s = new Float32Array(t.length));
    for (let r = 0, a = t.length; r < a; r += 2)
      s[r] = e + t[r], s[r + 1] = i + t[r + 1];
    return s;
  }
  static svgRound(t) {
    return Math.round(t * 1e4);
  }
  static _normalizePoint(t, e, i, s, r) {
    switch (r) {
      case 90:
        return [1 - e / i, t / s];
      case 180:
        return [1 - t / i, 1 - e / s];
      case 270:
        return [e / i, 1 - t / s];
      default:
        return [t / i, e / s];
    }
  }
  static _normalizePagePoint(t, e, i) {
    switch (i) {
      case 90:
        return [1 - e, t];
      case 180:
        return [1 - t, 1 - e];
      case 270:
        return [e, 1 - t];
      default:
        return [t, e];
    }
  }
  static createBezierPoints(t, e, i, s, r, a) {
    return [(t + 5 * i) / 6, (e + 5 * s) / 6, (5 * i + r) / 6, (5 * s + a) / 6, (i + r) / 2, (s + a) / 2];
  }
}
V(Z, "PRECISION", 1e-4);
var bi, is, Nl, Bl, Ds, wt, Ua, Wa, dd, ud, Hl, jl, Sr, fd, nf, rf, ge, Dh, kb, Rb, Mb, Lb, Db, Ob;
const Ys = class Ys {
  constructor({
    x: t,
    y: e
  }, i, s, r, a, o = 0) {
    v(this, ge);
    v(this, bi);
    v(this, is, []);
    v(this, Nl);
    v(this, Bl);
    v(this, Ds, []);
    v(this, wt, new Float32Array(18));
    v(this, Ua);
    v(this, Wa);
    v(this, dd);
    v(this, ud);
    v(this, Hl);
    v(this, jl);
    v(this, Sr, []);
    m(this, bi, i), m(this, jl, r * s), m(this, Bl, a), n(this, wt).set([NaN, NaN, NaN, NaN, t, e], 6), m(this, Nl, o), m(this, ud, n(Ys, fd) * s), m(this, dd, n(Ys, rf) * s), m(this, Hl, s), n(this, Sr).push(t, e);
  }
  isEmpty() {
    return isNaN(n(this, wt)[8]);
  }
  add({
    x: t,
    y: e
  }) {
    var P;
    m(this, Ua, t), m(this, Wa, e);
    const [i, s, r, a] = n(this, bi);
    let [o, l, c, d] = n(this, wt).subarray(8, 12);
    const u = t - c, g = e - d, b = Math.hypot(u, g);
    if (b < n(this, dd))
      return !1;
    const E = b - n(this, ud), w = E / b, M = w * u, k = w * g;
    let L = o, R = l;
    o = c, l = d, c += M, d += k, (P = n(this, Sr)) == null || P.push(t, e);
    const p = -k / E, f = M / E, y = p * n(this, jl), A = f * n(this, jl);
    return n(this, wt).set(n(this, wt).subarray(2, 8), 0), n(this, wt).set([c + y, d + A], 4), n(this, wt).set(n(this, wt).subarray(14, 18), 12), n(this, wt).set([c - y, d - A], 16), isNaN(n(this, wt)[6]) ? (n(this, Ds).length === 0 && (n(this, wt).set([o + y, l + A], 2), n(this, Ds).push(NaN, NaN, NaN, NaN, (o + y - i) / r, (l + A - s) / a), n(this, wt).set([o - y, l - A], 14), n(this, is).push(NaN, NaN, NaN, NaN, (o - y - i) / r, (l - A - s) / a)), n(this, wt).set([L, R, o, l, c, d], 6), !this.isEmpty()) : (n(this, wt).set([L, R, o, l, c, d], 6), Math.abs(Math.atan2(R - l, L - o) - Math.atan2(k, M)) < Math.PI / 2 ? ([o, l, c, d] = n(this, wt).subarray(2, 6), n(this, Ds).push(NaN, NaN, NaN, NaN, ((o + c) / 2 - i) / r, ((l + d) / 2 - s) / a), [o, l, L, R] = n(this, wt).subarray(14, 18), n(this, is).push(NaN, NaN, NaN, NaN, ((L + o) / 2 - i) / r, ((R + l) / 2 - s) / a), !0) : ([L, R, o, l, c, d] = n(this, wt).subarray(0, 6), n(this, Ds).push(((L + 5 * o) / 6 - i) / r, ((R + 5 * l) / 6 - s) / a, ((5 * o + c) / 6 - i) / r, ((5 * l + d) / 6 - s) / a, ((o + c) / 2 - i) / r, ((l + d) / 2 - s) / a), [c, d, o, l, L, R] = n(this, wt).subarray(12, 18), n(this, is).push(((L + 5 * o) / 6 - i) / r, ((R + 5 * l) / 6 - s) / a, ((5 * o + c) / 6 - i) / r, ((5 * l + d) / 6 - s) / a, ((o + c) / 2 - i) / r, ((l + d) / 2 - s) / a), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = n(this, Ds), e = n(this, is);
    if (isNaN(n(this, wt)[6]) && !this.isEmpty())
      return x(this, ge, kb).call(this);
    const i = [];
    i.push(`M${t[4]} ${t[5]}`);
    for (let s = 6; s < t.length; s += 6)
      isNaN(t[s]) ? i.push(`L${t[s + 4]} ${t[s + 5]}`) : i.push(`C${t[s]} ${t[s + 1]} ${t[s + 2]} ${t[s + 3]} ${t[s + 4]} ${t[s + 5]}`);
    x(this, ge, Mb).call(this, i);
    for (let s = e.length - 6; s >= 6; s -= 6)
      isNaN(e[s]) ? i.push(`L${e[s + 4]} ${e[s + 5]}`) : i.push(`C${e[s]} ${e[s + 1]} ${e[s + 2]} ${e[s + 3]} ${e[s + 4]} ${e[s + 5]}`);
    return x(this, ge, Rb).call(this, i), i.join(" ");
  }
  newFreeDrawOutline(t, e, i, s, r, a) {
    return new Ib(t, e, i, s, r, a);
  }
  getOutlines() {
    var u;
    const t = n(this, Ds), e = n(this, is), i = n(this, wt), [s, r, a, o] = n(this, bi), l = new Float32Array((((u = n(this, Sr)) == null ? void 0 : u.length) ?? 0) + 2);
    for (let g = 0, b = l.length - 2; g < b; g += 2)
      l[g] = (n(this, Sr)[g] - s) / a, l[g + 1] = (n(this, Sr)[g + 1] - r) / o;
    if (l[l.length - 2] = (n(this, Ua) - s) / a, l[l.length - 1] = (n(this, Wa) - r) / o, isNaN(i[6]) && !this.isEmpty())
      return x(this, ge, Lb).call(this, l);
    const c = new Float32Array(n(this, Ds).length + 24 + n(this, is).length);
    let d = t.length;
    for (let g = 0; g < d; g += 2) {
      if (isNaN(t[g])) {
        c[g] = c[g + 1] = NaN;
        continue;
      }
      c[g] = t[g], c[g + 1] = t[g + 1];
    }
    d = x(this, ge, Ob).call(this, c, d);
    for (let g = e.length - 6; g >= 6; g -= 6)
      for (let b = 0; b < 6; b += 2) {
        if (isNaN(e[g + b])) {
          c[d] = c[d + 1] = NaN, d += 2;
          continue;
        }
        c[d] = e[g + b], c[d + 1] = e[g + b + 1], d += 2;
      }
    return x(this, ge, Db).call(this, c, d), this.newFreeDrawOutline(c, l, n(this, bi), n(this, Hl), n(this, Nl), n(this, Bl));
  }
};
bi = new WeakMap(), is = new WeakMap(), Nl = new WeakMap(), Bl = new WeakMap(), Ds = new WeakMap(), wt = new WeakMap(), Ua = new WeakMap(), Wa = new WeakMap(), dd = new WeakMap(), ud = new WeakMap(), Hl = new WeakMap(), jl = new WeakMap(), Sr = new WeakMap(), fd = new WeakMap(), nf = new WeakMap(), rf = new WeakMap(), ge = new WeakSet(), Dh = function() {
  const t = n(this, wt).subarray(4, 6), e = n(this, wt).subarray(16, 18), [i, s, r, a] = n(this, bi);
  return [(n(this, Ua) + (t[0] - e[0]) / 2 - i) / r, (n(this, Wa) + (t[1] - e[1]) / 2 - s) / a, (n(this, Ua) + (e[0] - t[0]) / 2 - i) / r, (n(this, Wa) + (e[1] - t[1]) / 2 - s) / a];
}, kb = function() {
  const [t, e, i, s] = n(this, bi), [r, a, o, l] = x(this, ge, Dh).call(this);
  return `M${(n(this, wt)[2] - t) / i} ${(n(this, wt)[3] - e) / s} L${(n(this, wt)[4] - t) / i} ${(n(this, wt)[5] - e) / s} L${r} ${a} L${o} ${l} L${(n(this, wt)[16] - t) / i} ${(n(this, wt)[17] - e) / s} L${(n(this, wt)[14] - t) / i} ${(n(this, wt)[15] - e) / s} Z`;
}, Rb = function(t) {
  const e = n(this, is);
  t.push(`L${e[4]} ${e[5]} Z`);
}, Mb = function(t) {
  const [e, i, s, r] = n(this, bi), a = n(this, wt).subarray(4, 6), o = n(this, wt).subarray(16, 18), [l, c, d, u] = x(this, ge, Dh).call(this);
  t.push(`L${(a[0] - e) / s} ${(a[1] - i) / r} L${l} ${c} L${d} ${u} L${(o[0] - e) / s} ${(o[1] - i) / r}`);
}, Lb = function(t) {
  const e = n(this, wt), [i, s, r, a] = n(this, bi), [o, l, c, d] = x(this, ge, Dh).call(this), u = new Float32Array(36);
  return u.set([NaN, NaN, NaN, NaN, (e[2] - i) / r, (e[3] - s) / a, NaN, NaN, NaN, NaN, (e[4] - i) / r, (e[5] - s) / a, NaN, NaN, NaN, NaN, o, l, NaN, NaN, NaN, NaN, c, d, NaN, NaN, NaN, NaN, (e[16] - i) / r, (e[17] - s) / a, NaN, NaN, NaN, NaN, (e[14] - i) / r, (e[15] - s) / a], 0), this.newFreeDrawOutline(u, t, n(this, bi), n(this, Hl), n(this, Nl), n(this, Bl));
}, Db = function(t, e) {
  const i = n(this, is);
  return t.set([NaN, NaN, NaN, NaN, i[4], i[5]], e), e += 6;
}, Ob = function(t, e) {
  const i = n(this, wt).subarray(4, 6), s = n(this, wt).subarray(16, 18), [r, a, o, l] = n(this, bi), [c, d, u, g] = x(this, ge, Dh).call(this);
  return t.set([NaN, NaN, NaN, NaN, (i[0] - r) / o, (i[1] - a) / l, NaN, NaN, NaN, NaN, c, d, NaN, NaN, NaN, NaN, u, g, NaN, NaN, NaN, NaN, (s[0] - r) / o, (s[1] - a) / l], e), e += 24;
}, v(Ys, fd, 8), v(Ys, nf, 2), v(Ys, rf, n(Ys, fd) + n(Ys, nf));
let Bu = Ys;
var zl, Ga, _n, pd, vi, gd, re, af, Fb;
class Ib extends Z {
  constructor(e, i, s, r, a, o) {
    super();
    v(this, af);
    v(this, zl);
    v(this, Ga, new Float32Array(4));
    v(this, _n);
    v(this, pd);
    v(this, vi);
    v(this, gd);
    v(this, re);
    m(this, re, e), m(this, vi, i), m(this, zl, s), m(this, gd, r), m(this, _n, a), m(this, pd, o), this.firstPoint = [NaN, NaN], this.lastPoint = [NaN, NaN], x(this, af, Fb).call(this, o);
    const [l, c, d, u] = n(this, Ga);
    for (let g = 0, b = e.length; g < b; g += 2)
      e[g] = (e[g] - l) / d, e[g + 1] = (e[g + 1] - c) / u;
    for (let g = 0, b = i.length; g < b; g += 2)
      i[g] = (i[g] - l) / d, i[g + 1] = (i[g + 1] - c) / u;
  }
  toSVGPath() {
    const e = [`M${n(this, re)[4]} ${n(this, re)[5]}`];
    for (let i = 6, s = n(this, re).length; i < s; i += 6) {
      if (isNaN(n(this, re)[i])) {
        e.push(`L${n(this, re)[i + 4]} ${n(this, re)[i + 5]}`);
        continue;
      }
      e.push(`C${n(this, re)[i]} ${n(this, re)[i + 1]} ${n(this, re)[i + 2]} ${n(this, re)[i + 3]} ${n(this, re)[i + 4]} ${n(this, re)[i + 5]}`);
    }
    return e.push("Z"), e.join(" ");
  }
  serialize([e, i, s, r], a) {
    const o = s - e, l = r - i;
    let c, d;
    switch (a) {
      case 0:
        c = Z._rescale(n(this, re), e, r, o, -l), d = Z._rescale(n(this, vi), e, r, o, -l);
        break;
      case 90:
        c = Z._rescaleAndSwap(n(this, re), e, i, o, l), d = Z._rescaleAndSwap(n(this, vi), e, i, o, l);
        break;
      case 180:
        c = Z._rescale(n(this, re), s, i, -o, l), d = Z._rescale(n(this, vi), s, i, -o, l);
        break;
      case 270:
        c = Z._rescaleAndSwap(n(this, re), s, r, -o, -l), d = Z._rescaleAndSwap(n(this, vi), s, r, -o, -l);
        break;
    }
    return {
      outline: Array.from(c),
      points: [Array.from(d)]
    };
  }
  get box() {
    return n(this, Ga);
  }
  newOutliner(e, i, s, r, a, o = 0) {
    return new Bu(e, i, s, r, a, o);
  }
  getNewOutline(e, i) {
    const [s, r, a, o] = n(this, Ga), [l, c, d, u] = n(this, zl), g = a * d, b = o * u, E = s * d + l, w = r * u + c, M = this.newOutliner({
      x: n(this, vi)[0] * g + E,
      y: n(this, vi)[1] * b + w
    }, n(this, zl), n(this, gd), e, n(this, pd), i ?? n(this, _n));
    for (let k = 2; k < n(this, vi).length; k += 2)
      M.add({
        x: n(this, vi)[k] * g + E,
        y: n(this, vi)[k + 1] * b + w
      });
    return M.getOutlines();
  }
}
zl = new WeakMap(), Ga = new WeakMap(), _n = new WeakMap(), pd = new WeakMap(), vi = new WeakMap(), gd = new WeakMap(), re = new WeakMap(), af = new WeakSet(), Fb = function(e) {
  const i = n(this, re);
  let s = i[4], r = i[5];
  const a = [s, r, s, r];
  let o = s, l = r, c = s, d = r;
  const u = e ? Math.max : Math.min, g = new Float32Array(4);
  for (let E = 6, w = i.length; E < w; E += 6) {
    const M = i[E + 4], k = i[E + 5];
    isNaN(i[E]) ? (tt.pointBoundingBox(M, k, a), l > k ? (o = M, l = k) : l === k && (o = u(o, M)), d < k ? (c = M, d = k) : d === k && (c = u(c, M))) : (g[0] = g[1] = 1 / 0, g[2] = g[3] = -1 / 0, tt.bezierBoundingBox(s, r, ...i.slice(E, E + 6), g), tt.rectBoundingBox(g[0], g[1], g[2], g[3], a), l > g[1] ? (o = g[0], l = g[1]) : l === g[1] && (o = u(o, g[0])), d < g[3] ? (c = g[2], d = g[3]) : d === g[3] && (c = u(c, g[2]))), s = M, r = k;
  }
  const b = n(this, Ga);
  b[0] = a[0] - n(this, _n), b[1] = a[1] - n(this, _n), b[2] = a[2] - a[0] + 2 * n(this, _n), b[3] = a[3] - a[1] + 2 * n(this, _n), this.firstPoint = [o, l], this.lastPoint = [c, d];
};
var md, yd, bd, Ar, ss, Ke, Nb, yu, Bb, Hb, Xp;
class qp {
  constructor(t, e = 0, i = 0, s = !0) {
    v(this, Ke);
    v(this, md);
    v(this, yd);
    v(this, bd);
    v(this, Ar, []);
    v(this, ss, []);
    const r = [1 / 0, 1 / 0, -1 / 0, -1 / 0], a = 10 ** -4;
    for (const {
      x: w,
      y: M,
      width: k,
      height: L
    } of t) {
      const R = Math.floor((w - e) / a) * a, p = Math.ceil((w + k + e) / a) * a, f = Math.floor((M - e) / a) * a, y = Math.ceil((M + L + e) / a) * a, A = [R, f, y, !0], T = [p, f, y, !1];
      n(this, Ar).push(A, T), tt.rectBoundingBox(R, f, p, y, r);
    }
    const o = r[2] - r[0] + 2 * i, l = r[3] - r[1] + 2 * i, c = r[0] - i, d = r[1] - i;
    let u = s ? -1 / 0 : 1 / 0, g = 1 / 0;
    const b = n(this, Ar).at(s ? -1 : -2), E = [b[0], b[2]];
    for (const w of n(this, Ar)) {
      const [M, k, L, R] = w;
      !R && s ? k < g ? (g = k, u = M) : k === g && (u = Math.max(u, M)) : R && !s && (k < g ? (g = k, u = M) : k === g && (u = Math.min(u, M))), w[0] = (M - c) / o, w[1] = (k - d) / l, w[2] = (L - d) / l;
    }
    m(this, md, new Float32Array([c, d, o, l])), m(this, yd, [u, g]), m(this, bd, E);
  }
  getOutlines() {
    n(this, Ar).sort((e, i) => e[0] - i[0] || e[1] - i[1] || e[2] - i[2]);
    const t = [];
    for (const e of n(this, Ar))
      e[3] ? (t.push(...x(this, Ke, Xp).call(this, e)), x(this, Ke, Bb).call(this, e)) : (x(this, Ke, Hb).call(this, e), t.push(...x(this, Ke, Xp).call(this, e)));
    return x(this, Ke, Nb).call(this, t);
  }
}
md = new WeakMap(), yd = new WeakMap(), bd = new WeakMap(), Ar = new WeakMap(), ss = new WeakMap(), Ke = new WeakSet(), Nb = function(t) {
  const e = [], i = /* @__PURE__ */ new Set();
  for (const a of t) {
    const [o, l, c] = a;
    e.push([o, l, a], [o, c, a]);
  }
  e.sort((a, o) => a[1] - o[1] || a[0] - o[0]);
  for (let a = 0, o = e.length; a < o; a += 2) {
    const l = e[a][2], c = e[a + 1][2];
    l.push(c), c.push(l), i.add(l), i.add(c);
  }
  const s = [];
  let r;
  for (; i.size > 0; ) {
    const a = i.values().next().value;
    let [o, l, c, d, u] = a;
    i.delete(a);
    let g = o, b = l;
    for (r = [o, c], s.push(r); ; ) {
      let E;
      if (i.has(d))
        E = d;
      else if (i.has(u))
        E = u;
      else
        break;
      i.delete(E), [o, l, c, d, u] = E, g !== o && (r.push(g, b, o, b === l ? l : c), g = o), b = b === l ? c : l;
    }
    r.push(g, b);
  }
  return new aS(s, n(this, md), n(this, yd), n(this, bd));
}, yu = function(t) {
  const e = n(this, ss);
  let i = 0, s = e.length - 1;
  for (; i <= s; ) {
    const r = i + s >> 1, a = e[r][0];
    if (a === t)
      return r;
    a < t ? i = r + 1 : s = r - 1;
  }
  return s + 1;
}, Bb = function([, t, e]) {
  const i = x(this, Ke, yu).call(this, t);
  n(this, ss).splice(i, 0, [t, e]);
}, Hb = function([, t, e]) {
  const i = x(this, Ke, yu).call(this, t);
  for (let s = i; s < n(this, ss).length; s++) {
    const [r, a] = n(this, ss)[s];
    if (r !== t)
      break;
    if (r === t && a === e) {
      n(this, ss).splice(s, 1);
      return;
    }
  }
  for (let s = i - 1; s >= 0; s--) {
    const [r, a] = n(this, ss)[s];
    if (r !== t)
      break;
    if (r === t && a === e) {
      n(this, ss).splice(s, 1);
      return;
    }
  }
}, Xp = function(t) {
  const [e, i, s] = t, r = [[e, i, s]], a = x(this, Ke, yu).call(this, s);
  for (let o = 0; o < a; o++) {
    const [l, c] = n(this, ss)[o];
    for (let d = 0, u = r.length; d < u; d++) {
      const [, g, b] = r[d];
      if (!(c <= g || b <= l)) {
        if (g >= l) {
          if (b > c)
            r[d][1] = c;
          else {
            if (u === 1)
              return [];
            r.splice(d, 1), d--, u--;
          }
          continue;
        }
        r[d][2] = l, b > c && r.push([e, c, b]);
      }
    }
  }
  return r;
};
var vd, $l;
class aS extends Z {
  constructor(e, i, s, r) {
    super();
    v(this, vd);
    v(this, $l);
    m(this, $l, e), m(this, vd, i), this.firstPoint = s, this.lastPoint = r;
  }
  toSVGPath() {
    const e = [];
    for (const i of n(this, $l)) {
      let [s, r] = i;
      e.push(`M${s} ${r}`);
      for (let a = 2; a < i.length; a += 2) {
        const o = i[a], l = i[a + 1];
        o === s ? (e.push(`V${l}`), r = l) : l === r && (e.push(`H${o}`), s = o);
      }
      e.push("Z");
    }
    return e.join(" ");
  }
  serialize([e, i, s, r], a) {
    const o = [], l = s - e, c = r - i;
    for (const d of n(this, $l)) {
      const u = new Array(d.length);
      for (let g = 0; g < d.length; g += 2)
        u[g] = e + d[g] * l, u[g + 1] = r - d[g + 1] * c;
      o.push(u);
    }
    return o;
  }
  get box() {
    return n(this, vd);
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
}
vd = new WeakMap(), $l = new WeakMap();
class Yp extends Bu {
  newFreeDrawOutline(t, e, i, s, r, a) {
    return new oS(t, e, i, s, r, a);
  }
}
class oS extends Ib {
  newOutliner(t, e, i, s, r, a = 0) {
    return new Yp(t, e, i, s, r, a);
  }
}
var Ul, wd, En, Va, Sd, ni, Ad, xd, qa, wi, Si, ke, Wl, Gl, je, Vl, $i, _d, bt, Kp, bu, jb, zb, $b, Jp, Vr, Wi, Ao, Ub, vu, wu, Wb, Gb, Vb, qb, Xb;
const Tt = class Tt extends Ut {
  constructor(e) {
    super({
      ...e,
      name: "highlightEditor"
    });
    v(this, bt);
    v(this, Ul, null);
    v(this, wd, 0);
    v(this, En);
    v(this, Va, null);
    v(this, Sd, null);
    v(this, ni, null);
    v(this, Ad, null);
    v(this, xd, 0);
    v(this, qa, null);
    v(this, wi, null);
    v(this, Si, null);
    v(this, ke, !1);
    v(this, Wl, null);
    v(this, Gl, null);
    v(this, je, null);
    v(this, Vl, "");
    v(this, $i);
    v(this, _d, "");
    this.color = e.color || Tt._defaultColor, m(this, $i, e.thickness || Tt._defaultThickness), this.opacity = e.opacity || Tt._defaultOpacity, m(this, En, e.boxes || null), m(this, _d, e.methodOfCreation || ""), m(this, Vl, e.text || ""), this._isDraggable = !1, this.defaultL10nId = "pdfjs-editor-highlight-editor", e.highlightId > -1 ? (m(this, ke, !0), x(this, bt, bu).call(this, e), x(this, bt, Vr).call(this)) : n(this, En) && (m(this, Ul, e.anchorNode), m(this, wd, e.anchorOffset), m(this, Ad, e.focusNode), m(this, xd, e.focusOffset), x(this, bt, Kp).call(this), x(this, bt, Vr).call(this), this.rotate(this.rotation)), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-highlight-added-alert");
  }
  static get _keyboardManager() {
    const e = Tt.prototype;
    return yt(this, "_keyboardManager", new Dd([[["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], e._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], e._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], e._moveCaret, {
      args: [3]
    }]]));
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: n(this, ke) ? "free_highlight" : "highlight",
      color: this._uiManager.getNonHCMColorName(this.color),
      thickness: n(this, $i),
      methodOfCreation: n(this, _d)
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.getNonHCMColorName(this.color)
    };
  }
  static computeTelemetryFinalData(e) {
    return {
      numberOfColors: e.get("color").size
    };
  }
  static initialize(e, i) {
    var s;
    Ut.initialize(e, i), Tt._defaultColor || (Tt._defaultColor = ((s = i.highlightColors) == null ? void 0 : s.values().next().value) || "#fff066");
  }
  static updateDefaultParams(e, i) {
    switch (e) {
      case At.HIGHLIGHT_COLOR:
        Tt._defaultColor = i;
        break;
      case At.HIGHLIGHT_THICKNESS:
        Tt._defaultThickness = i;
        break;
    }
  }
  translateInPage(e, i) {
  }
  get toolbarPosition() {
    return n(this, Gl);
  }
  get commentButtonPosition() {
    return n(this, Wl);
  }
  updateParams(e, i) {
    switch (e) {
      case At.HIGHLIGHT_COLOR:
        x(this, bt, jb).call(this, i);
        break;
      case At.HIGHLIGHT_THICKNESS:
        x(this, bt, zb).call(this, i);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[At.HIGHLIGHT_COLOR, Tt._defaultColor], [At.HIGHLIGHT_THICKNESS, Tt._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[At.HIGHLIGHT_COLOR, this.color || Tt._defaultColor], [At.HIGHLIGHT_THICKNESS, n(this, $i) || Tt._defaultThickness], [At.HIGHLIGHT_FREE, n(this, ke)]];
  }
  onUpdatedColor() {
    var e, i;
    (e = this.parent) == null || e.drawLayer.updateProperties(n(this, Si), {
      root: {
        fill: this.color,
        "fill-opacity": this.opacity
      }
    }), (i = n(this, Sd)) == null || i.updateColor(this.color), super.onUpdatedColor();
  }
  get toolbarButtons() {
    return this._uiManager.highlightColors ? [["colorPicker", m(this, Sd, new Vh({
      editor: this
    }))]] : super.toolbarButtons;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(x(this, bt, wu).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(e, i) {
    return super.getRect(e, i, x(this, bt, wu).call(this));
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), e && this.div.focus();
  }
  remove() {
    x(this, bt, Jp).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (x(this, bt, Vr).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var s;
    let i = !1;
    this.parent && !e ? x(this, bt, Jp).call(this) : e && (x(this, bt, Vr).call(this, e), i = !this.parent && ((s = this.div) == null ? void 0 : s.classList.contains("selectedEditor"))), super.setParent(e), this.show(this._isVisible), i && this.select();
  }
  rotate(e) {
    var r, a, o;
    const {
      drawLayer: i
    } = this.parent;
    let s;
    n(this, ke) ? (e = (e - this.rotation + 360) % 360, s = x(r = Tt, Wi, Ao).call(r, n(this, wi).box, e)) : s = x(a = Tt, Wi, Ao).call(a, [this.x, this.y, this.width, this.height], e), i.updateProperties(n(this, Si), {
      bbox: s,
      root: {
        "data-main-rotation": e
      }
    }), i.updateProperties(n(this, je), {
      bbox: x(o = Tt, Wi, Ao).call(o, n(this, ni).box, e),
      root: {
        "data-main-rotation": e
      }
    });
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    n(this, Vl) && (e.setAttribute("aria-label", n(this, Vl)), e.setAttribute("role", "mark")), n(this, ke) ? e.classList.add("free") : this.div.addEventListener("keydown", x(this, bt, Ub).bind(this), {
      signal: this._uiManager._signal
    });
    const i = m(this, qa, document.createElement("div"));
    return e.append(i), i.setAttribute("aria-hidden", "true"), i.className = "internal", i.style.clipPath = n(this, Va), this.setDims(this.width, this.height), py(this, n(this, qa), ["pointerover", "pointerleave"]), this.enableEditing(), e;
  }
  pointerover() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, je), {
      rootClass: {
        hovered: !0
      }
    });
  }
  pointerleave() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, je), {
      rootClass: {
        hovered: !1
      }
    });
  }
  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        x(this, bt, vu).call(this, !0);
        break;
      case 1:
      case 3:
        x(this, bt, vu).call(this, !1);
        break;
    }
  }
  select() {
    var e;
    super.select(), n(this, je) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, je), {
      rootClass: {
        hovered: !1,
        selected: !0
      }
    }));
  }
  unselect() {
    var e;
    super.unselect(), n(this, je) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, je), {
      rootClass: {
        selected: !1
      }
    }), n(this, ke) || x(this, bt, vu).call(this, !1));
  }
  get _mustFixPosition() {
    return !n(this, ke);
  }
  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.updateProperties(n(this, Si), {
      rootClass: {
        hidden: !e
      }
    }), this.parent.drawLayer.updateProperties(n(this, je), {
      rootClass: {
        hidden: !e
      }
    }));
  }
  static startHighlighting(e, i, {
    target: s,
    x: r,
    y: a
  }) {
    const {
      x: o,
      y: l,
      width: c,
      height: d
    } = s.getBoundingClientRect(), u = new AbortController(), g = e.combinedSignal(u), b = (E) => {
      u.abort(), x(this, Wi, qb).call(this, e, E);
    };
    window.addEventListener("blur", b, {
      signal: g
    }), window.addEventListener("pointerup", b, {
      signal: g
    }), window.addEventListener("pointerdown", Kt, {
      capture: !0,
      passive: !1,
      signal: g
    }), window.addEventListener("contextmenu", Ri, {
      signal: g
    }), s.addEventListener("pointermove", x(this, Wi, Vb).bind(this, e), {
      signal: g
    }), this._freeHighlight = new Yp({
      x: r,
      y: a
    }, [o, l, c, d], e.scale, this._defaultThickness / 2, i, 1e-3), {
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = e.drawLayer.draw({
      bbox: [0, 0, 1, 1],
      root: {
        viewBox: "0 0 1 1",
        fill: this._defaultColor,
        "fill-opacity": this._defaultOpacity
      },
      rootClass: {
        highlight: !0,
        free: !0
      },
      path: {
        d: this._freeHighlight.toSVGPath()
      }
    }, !0, !0);
  }
  static async deserialize(e, i, s) {
    var w, M, k, L;
    let r = null;
    if (e instanceof Ab) {
      const {
        data: {
          quadPoints: R,
          rect: p,
          rotation: f,
          id: y,
          color: A,
          opacity: T,
          popupRef: P,
          richText: C,
          contentsObj: D,
          creationDate: N,
          modificationDate: I
        },
        parent: {
          page: {
            pageNumber: B
          }
        }
      } = e;
      r = e = {
        annotationType: ft.HIGHLIGHT,
        color: Array.from(A),
        opacity: T,
        quadPoints: R,
        boxes: null,
        pageIndex: B - 1,
        rect: p.slice(0),
        rotation: f,
        annotationElementId: y,
        id: y,
        deleted: !1,
        popupRef: P,
        richText: C,
        comment: (D == null ? void 0 : D.str) || null,
        creationDate: N,
        modificationDate: I
      };
    } else if (e instanceof Rg) {
      const {
        data: {
          inkLists: R,
          rect: p,
          rotation: f,
          id: y,
          color: A,
          borderStyle: {
            rawWidth: T
          },
          popupRef: P,
          richText: C,
          contentsObj: D,
          creationDate: N,
          modificationDate: I
        },
        parent: {
          page: {
            pageNumber: B
          }
        }
      } = e;
      r = e = {
        annotationType: ft.HIGHLIGHT,
        color: Array.from(A),
        thickness: T,
        inkLists: R,
        boxes: null,
        pageIndex: B - 1,
        rect: p.slice(0),
        rotation: f,
        annotationElementId: y,
        id: y,
        deleted: !1,
        popupRef: P,
        richText: C,
        comment: (D == null ? void 0 : D.str) || null,
        creationDate: N,
        modificationDate: I
      };
    }
    const {
      color: a,
      quadPoints: o,
      inkLists: l,
      opacity: c
    } = e, d = await super.deserialize(e, i, s);
    d.color = tt.makeHexColor(...a), d.opacity = c || 1, l && m(d, $i, e.thickness), d._initialData = r, e.comment && d.setCommentData(e);
    const [u, g] = d.pageDimensions, [b, E] = d.pageTranslation;
    if (o) {
      const R = m(d, En, []);
      for (let p = 0; p < o.length; p += 8)
        R.push({
          x: (o[p] - b) / u,
          y: 1 - (o[p + 1] - E) / g,
          width: (o[p + 2] - o[p]) / u,
          height: (o[p + 1] - o[p + 5]) / g
        });
      x(w = d, bt, Kp).call(w), x(M = d, bt, Vr).call(M), d.rotate(d.rotation);
    } else if (l) {
      m(d, ke, !0);
      const R = l[0], p = {
        x: R[0] - b,
        y: g - (R[1] - E)
      }, f = new Yp(p, [0, 0, u, g], 1, n(d, $i) / 2, !0, 1e-3);
      for (let T = 0, P = R.length; T < P; T += 2)
        p.x = R[T] - b, p.y = g - (R[T + 1] - E), f.add(p);
      const {
        id: y,
        clipPathId: A
      } = i.drawLayer.draw({
        bbox: [0, 0, 1, 1],
        root: {
          viewBox: "0 0 1 1",
          fill: d.color,
          "fill-opacity": d._defaultOpacity
        },
        rootClass: {
          highlight: !0,
          free: !0
        },
        path: {
          d: f.toSVGPath()
        }
      }, !0, !0);
      x(k = d, bt, bu).call(k, {
        highlightOutlines: f.getOutlines(),
        highlightId: y,
        clipPathId: A
      }), x(L = d, bt, Vr).call(L), d.rotate(d.parentRotation);
    }
    return d;
  }
  serialize(e = !1) {
    if (this.isEmpty() || e)
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const i = Ut._colorManager.convert(this._uiManager.getNonHCMColor(this.color)), s = super.serialize(e);
    return Object.assign(s, {
      color: i,
      opacity: this.opacity,
      thickness: n(this, $i),
      quadPoints: x(this, bt, Wb).call(this),
      outlines: x(this, bt, Gb).call(this, s.rect)
    }), this.addComment(s), this.annotationElementId && !x(this, bt, Xb).call(this, s) ? null : (s.id = this.annotationElementId, s);
  }
  renderAnnotationElement(e) {
    return this.deleted ? (e.hide(), null) : (e.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    }), null);
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
Ul = new WeakMap(), wd = new WeakMap(), En = new WeakMap(), Va = new WeakMap(), Sd = new WeakMap(), ni = new WeakMap(), Ad = new WeakMap(), xd = new WeakMap(), qa = new WeakMap(), wi = new WeakMap(), Si = new WeakMap(), ke = new WeakMap(), Wl = new WeakMap(), Gl = new WeakMap(), je = new WeakMap(), Vl = new WeakMap(), $i = new WeakMap(), _d = new WeakMap(), bt = new WeakSet(), Kp = function() {
  const e = new qp(n(this, En), 1e-3);
  m(this, wi, e.getOutlines()), [this.x, this.y, this.width, this.height] = n(this, wi).box;
  const i = new qp(n(this, En), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  m(this, ni, i.getOutlines());
  const {
    firstPoint: s
  } = n(this, wi);
  m(this, Wl, [(s[0] - this.x) / this.width, (s[1] - this.y) / this.height]);
  const {
    lastPoint: r
  } = n(this, ni);
  m(this, Gl, [(r[0] - this.x) / this.width, (r[1] - this.y) / this.height]);
}, bu = function({
  highlightOutlines: e,
  highlightId: i,
  clipPathId: s
}) {
  var g, b;
  if (m(this, wi, e), m(this, ni, e.getNewOutline(n(this, $i) / 2 + 1.5, 25e-4)), i >= 0)
    m(this, Si, i), m(this, Va, s), this.parent.drawLayer.finalizeDraw(i, {
      bbox: e.box,
      path: {
        d: e.toSVGPath()
      }
    }), m(this, je, this.parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: !0,
        free: !0
      },
      bbox: n(this, ni).box,
      path: {
        d: n(this, ni).toSVGPath()
      }
    }, !0));
  else if (this.parent) {
    const E = this.parent.viewport.rotation;
    this.parent.drawLayer.updateProperties(n(this, Si), {
      bbox: x(g = Tt, Wi, Ao).call(g, n(this, wi).box, (E - this.rotation + 360) % 360),
      path: {
        d: e.toSVGPath()
      }
    }), this.parent.drawLayer.updateProperties(n(this, je), {
      bbox: x(b = Tt, Wi, Ao).call(b, n(this, ni).box, E),
      path: {
        d: n(this, ni).toSVGPath()
      }
    });
  }
  const [a, o, l, c] = e.box;
  switch (this.rotation) {
    case 0:
      this.x = a, this.y = o, this.width = l, this.height = c;
      break;
    case 90: {
      const [E, w] = this.parentDimensions;
      this.x = o, this.y = 1 - a, this.width = l * w / E, this.height = c * E / w;
      break;
    }
    case 180:
      this.x = 1 - a, this.y = 1 - o, this.width = l, this.height = c;
      break;
    case 270: {
      const [E, w] = this.parentDimensions;
      this.x = 1 - o, this.y = a, this.width = l * w / E, this.height = c * E / w;
      break;
    }
  }
  const {
    firstPoint: d
  } = e;
  m(this, Wl, [(d[0] - a) / l, (d[1] - o) / c]);
  const {
    lastPoint: u
  } = n(this, ni);
  m(this, Gl, [(u[0] - a) / l, (u[1] - o) / c]);
}, jb = function(e) {
  const i = (a, o) => {
    this.color = a, this.opacity = o, this.onUpdatedColor();
  }, s = this.color, r = this.opacity;
  this.addCommands({
    cmd: i.bind(this, e, Tt._defaultOpacity),
    undo: i.bind(this, s, r),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: At.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.getNonHCMColorName(e)
  }, !0);
}, zb = function(e) {
  const i = n(this, $i), s = (r) => {
    m(this, $i, r), x(this, bt, $b).call(this, r);
  };
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: At.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: e
  }, !0);
}, $b = function(e) {
  n(this, ke) && (x(this, bt, bu).call(this, {
    highlightOutlines: n(this, wi).getNewOutline(e / 2)
  }), this.fixAndSetPosition(), this.setDims(this.width, this.height));
}, Jp = function() {
  n(this, Si) === null || !this.parent || (this.parent.drawLayer.remove(n(this, Si)), m(this, Si, null), this.parent.drawLayer.remove(n(this, je)), m(this, je, null));
}, Vr = function(e = this.parent) {
  n(this, Si) === null && ({
    id: de(this, Si)._,
    clipPathId: de(this, Va)._
  } = e.drawLayer.draw({
    bbox: n(this, wi).box,
    root: {
      viewBox: "0 0 1 1",
      fill: this.color,
      "fill-opacity": this.opacity
    },
    rootClass: {
      highlight: !0,
      free: n(this, ke)
    },
    path: {
      d: n(this, wi).toSVGPath()
    }
  }, !1, !0), m(this, je, e.drawLayer.drawOutline({
    rootClass: {
      highlightOutline: !0,
      free: n(this, ke)
    },
    bbox: n(this, ni).box,
    path: {
      d: n(this, ni).toSVGPath()
    }
  }, n(this, ke))), n(this, qa) && (n(this, qa).style.clipPath = n(this, Va)));
}, Wi = new WeakSet(), Ao = function([e, i, s, r], a) {
  switch (a) {
    case 90:
      return [1 - i - r, e, r, s];
    case 180:
      return [1 - e - s, 1 - i - r, s, r];
    case 270:
      return [i, 1 - e - s, r, s];
  }
  return [e, i, s, r];
}, Ub = function(e) {
  Tt._keyboardManager.exec(this, e);
}, vu = function(e) {
  if (!n(this, Ul))
    return;
  const i = window.getSelection();
  e ? i.setPosition(n(this, Ul), n(this, wd)) : i.setPosition(n(this, Ad), n(this, xd));
}, wu = function() {
  return n(this, ke) ? this.rotation : 0;
}, Wb = function() {
  if (n(this, ke))
    return null;
  const [e, i] = this.pageDimensions, [s, r] = this.pageTranslation, a = n(this, En), o = new Float32Array(a.length * 8);
  let l = 0;
  for (const {
    x: c,
    y: d,
    width: u,
    height: g
  } of a) {
    const b = c * e + s, E = (1 - d) * i + r;
    o[l] = o[l + 4] = b, o[l + 1] = o[l + 3] = E, o[l + 2] = o[l + 6] = b + u * e, o[l + 5] = o[l + 7] = E - g * i, l += 8;
  }
  return o;
}, Gb = function(e) {
  return n(this, wi).serialize(e, x(this, bt, wu).call(this));
}, Vb = function(e, i) {
  this._freeHighlight.add(i) && e.drawLayer.updateProperties(this._freeHighlightId, {
    path: {
      d: this._freeHighlight.toSVGPath()
    }
  });
}, qb = function(e, i) {
  this._freeHighlight.isEmpty() ? e.drawLayer.remove(this._freeHighlightId) : e.createAndAddNewEditor(i, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, Xb = function(e) {
  const {
    color: i
  } = this._initialData;
  return this.hasEditedComment || e.color.some((s, r) => s !== i[r]);
}, v(Tt, Wi), V(Tt, "_defaultColor", null), V(Tt, "_defaultOpacity", 1), V(Tt, "_defaultThickness", 12), V(Tt, "_type", "highlight"), V(Tt, "_editorType", ft.HIGHLIGHT), V(Tt, "_freeHighlightId", -1), V(Tt, "_freeHighlight", null), V(Tt, "_freeHighlightClipId", "");
let Hu = Tt;
var Xa;
class Yb {
  constructor() {
    v(this, Xa, /* @__PURE__ */ Object.create(null));
  }
  updateProperty(t, e) {
    this[t] = e, this.updateSVGProperty(t, e);
  }
  updateProperties(t) {
    if (t)
      for (const [e, i] of Object.entries(t))
        e.startsWith("_") || this.updateProperty(e, i);
  }
  updateSVGProperty(t, e) {
    n(this, Xa)[t] = e;
  }
  toSVGProperties() {
    const t = n(this, Xa);
    return m(this, Xa, /* @__PURE__ */ Object.create(null)), {
      root: t
    };
  }
  reset() {
    m(this, Xa, /* @__PURE__ */ Object.create(null));
  }
  updateAll(t = this) {
    this.updateProperties(t);
  }
  clone() {
    zt("Not implemented");
  }
}
Xa = new WeakMap();
var Ai, ql, be, Ya, Ka, xr, _r, Er, Ja, _t, Qp, Zp, tg, Oh, Kb, Su, Ih, xo;
const et = class et extends Ut {
  constructor(e) {
    super(e);
    v(this, _t);
    v(this, Ai, null);
    v(this, ql);
    V(this, "_colorPicker", null);
    V(this, "_drawId", null);
    m(this, ql, e.mustBeCommitted || !1), this._addOutlines(e);
  }
  onUpdatedColor() {
    var e;
    (e = this._colorPicker) == null || e.update(this.color), super.onUpdatedColor();
  }
  _addOutlines(e) {
    e.drawOutlines && (x(this, _t, Qp).call(this, e), x(this, _t, Oh).call(this));
  }
  static _mergeSVGProperties(e, i) {
    const s = new Set(Object.keys(e));
    for (const [r, a] of Object.entries(i))
      s.has(r) ? Object.assign(e[r], a) : e[r] = a;
    return e;
  }
  static getDefaultDrawingOptions(e) {
    zt("Not implemented");
  }
  static get typesMap() {
    zt("Not implemented");
  }
  static get isDrawer() {
    return !0;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  static updateDefaultParams(e, i) {
    const s = this.typesMap.get(e);
    s && this._defaultDrawingOptions.updateProperty(s, i), this._currentParent && (n(et, be).updateProperty(s, i), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  updateParams(e, i) {
    const s = this.constructor.typesMap.get(e);
    s && this._updateProperty(e, s, i);
  }
  static get defaultPropertiesToUpdate() {
    const e = [], i = this._defaultDrawingOptions;
    for (const [s, r] of this.typesMap)
      e.push([s, i[r]]);
    return e;
  }
  get propertiesToUpdate() {
    const e = [], {
      _drawingOptions: i
    } = this;
    for (const [s, r] of this.constructor.typesMap)
      e.push([s, i[r]]);
    return e;
  }
  _updateProperty(e, i, s) {
    const r = this._drawingOptions, a = r[i], o = (l) => {
      var d;
      r.updateProperty(i, l);
      const c = n(this, Ai).updateProperty(i, l);
      c && x(this, _t, Ih).call(this, c), (d = this.parent) == null || d.drawLayer.updateProperties(this._drawId, r.toSVGProperties()), e === this.colorType && this.onUpdatedColor();
    };
    this.addCommands({
      cmd: o.bind(this, s),
      undo: o.bind(this, a),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: e,
      overwriteIfSameType: !0,
      keepUndo: !0
    });
  }
  _onResizing() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, et._mergeSVGProperties(n(this, Ai).getPathResizingSVGProperties(x(this, _t, Su).call(this)), {
      bbox: x(this, _t, xo).call(this)
    }));
  }
  _onResized() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, et._mergeSVGProperties(n(this, Ai).getPathResizedSVGProperties(x(this, _t, Su).call(this)), {
      bbox: x(this, _t, xo).call(this)
    }));
  }
  _onTranslating(e, i) {
    var s;
    (s = this.parent) == null || s.drawLayer.updateProperties(this._drawId, {
      bbox: x(this, _t, xo).call(this)
    });
  }
  _onTranslated() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, et._mergeSVGProperties(n(this, Ai).getPathTranslatedSVGProperties(x(this, _t, Su).call(this), this.parentDimensions), {
      bbox: x(this, _t, xo).call(this)
    }));
  }
  _onStartDragging() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !0
      }
    });
  }
  _onStopDragging() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !1
      }
    });
  }
  commit() {
    super.commit(), this.disableEditMode(), this.disableEditing();
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  getBaseTranslation() {
    return [0, 0];
  }
  get isResizable() {
    return !0;
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, n(this, ql) && (m(this, ql, !1), this.commit(), this.parent.setSelected(this), e && this.isOnScreen && this.div.focus());
  }
  remove() {
    x(this, _t, tg).call(this), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (x(this, _t, Oh).call(this), x(this, _t, Ih).call(this, n(this, Ai).box), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var s;
    let i = !1;
    this.parent && !e ? (this._uiManager.removeShouldRescale(this), x(this, _t, tg).call(this)) : e && (this._uiManager.addShouldRescale(this), x(this, _t, Oh).call(this, e), i = !this.parent && ((s = this.div) == null ? void 0 : s.classList.contains("selectedEditor"))), super.setParent(e), i && this.select();
  }
  rotate() {
    this.parent && this.parent.drawLayer.updateProperties(this._drawId, et._mergeSVGProperties({
      bbox: x(this, _t, xo).call(this)
    }, n(this, Ai).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }
  onScaleChanging() {
    this.parent && x(this, _t, Ih).call(this, n(this, Ai).updateParentDimensions(this.parentDimensions, this.parent.scale));
  }
  static onScaleChangingWhenDrawing() {
  }
  render() {
    if (this.div)
      return this.div;
    let e, i;
    this._isCopy && (e = this.x, i = this.y);
    const s = super.render();
    s.classList.add("draw");
    const r = document.createElement("div");
    return s.append(r), r.setAttribute("aria-hidden", "true"), r.className = "internal", this.setDims(), this._uiManager.addShouldRescale(this), this.disableEditing(), this._isCopy && this._moveAfterPaste(e, i), s;
  }
  static createDrawerInstance(e, i, s, r, a) {
    zt("Not implemented");
  }
  static startDrawing(e, i, s, r) {
    var M;
    const {
      target: a,
      offsetX: o,
      offsetY: l,
      pointerId: c,
      pointerType: d
    } = r;
    if (n(et, _r) && n(et, _r) !== d)
      return;
    const {
      viewport: {
        rotation: u
      }
    } = e, {
      width: g,
      height: b
    } = a.getBoundingClientRect(), E = m(et, Ya, new AbortController()), w = e.combinedSignal(E);
    if (n(et, xr) || m(et, xr, c), n(et, _r) ?? m(et, _r, d), window.addEventListener("pointerup", (k) => {
      var L;
      n(et, xr) === k.pointerId ? this._endDraw(k) : (L = n(et, Er)) == null || L.delete(k.pointerId);
    }, {
      signal: w
    }), window.addEventListener("pointercancel", (k) => {
      var L;
      n(et, xr) === k.pointerId ? this._currentParent.endDrawingSession() : (L = n(et, Er)) == null || L.delete(k.pointerId);
    }, {
      signal: w
    }), window.addEventListener("pointerdown", (k) => {
      n(et, _r) === k.pointerType && ((n(et, Er) || m(et, Er, /* @__PURE__ */ new Set())).add(k.pointerId), n(et, be).isCancellable() && (n(et, be).removeLastElement(), n(et, be).isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null)));
    }, {
      capture: !0,
      passive: !1,
      signal: w
    }), window.addEventListener("contextmenu", Ri, {
      signal: w
    }), a.addEventListener("pointermove", this._drawMove.bind(this), {
      signal: w
    }), a.addEventListener("touchmove", (k) => {
      k.timeStamp === n(et, Ja) && Kt(k);
    }, {
      signal: w
    }), e.toggleDrawing(), (M = i._editorUndoBar) == null || M.hide(), n(et, be)) {
      e.drawLayer.updateProperties(this._currentDrawId, n(et, be).startNew(o, l, g, b, u));
      return;
    }
    i.updateUIForDefaultProperties(this), m(et, be, this.createDrawerInstance(o, l, g, b, u)), m(et, Ka, this.getDefaultDrawingOptions()), this._currentParent = e, {
      id: this._currentDrawId
    } = e.drawLayer.draw(this._mergeSVGProperties(n(et, Ka).toSVGProperties(), n(et, be).defaultSVGProperties), !0, !1);
  }
  static _drawMove(e) {
    var a;
    if (m(et, Ja, -1), !n(et, be))
      return;
    const {
      offsetX: i,
      offsetY: s,
      pointerId: r
    } = e;
    if (n(et, xr) === r) {
      if (((a = n(et, Er)) == null ? void 0 : a.size) >= 1) {
        this._endDraw(e);
        return;
      }
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, n(et, be).add(i, s)), m(et, Ja, e.timeStamp), Kt(e);
    }
  }
  static _cleanup(e) {
    e && (this._currentDrawId = -1, this._currentParent = null, m(et, be, null), m(et, Ka, null), m(et, _r, null), m(et, Ja, NaN)), n(et, Ya) && (n(et, Ya).abort(), m(et, Ya, null), m(et, xr, NaN), m(et, Er, null));
  }
  static _endDraw(e) {
    const i = this._currentParent;
    if (i) {
      if (i.toggleDrawing(!0), this._cleanup(!1), (e == null ? void 0 : e.target) === i.div && i.drawLayer.updateProperties(this._currentDrawId, n(et, be).end(e.offsetX, e.offsetY)), this.supportMultipleDrawings) {
        const s = n(et, be), r = this._currentDrawId, a = s.getLastElement();
        i.addCommands({
          cmd: () => {
            i.drawLayer.updateProperties(r, s.setLastElement(a));
          },
          undo: () => {
            i.drawLayer.updateProperties(r, s.removeLastElement());
          },
          mustExec: !1,
          type: At.DRAW_STEP
        });
        return;
      }
      this.endDrawing(!1);
    }
  }
  static endDrawing(e) {
    const i = this._currentParent;
    if (!i)
      return null;
    if (i.toggleDrawing(!0), i.cleanUndoStack(At.DRAW_STEP), !n(et, be).isEmpty()) {
      const {
        pageDimensions: [s, r],
        scale: a
      } = i, o = i.createAndAddNewEditor({
        offsetX: 0,
        offsetY: 0
      }, !1, {
        drawId: this._currentDrawId,
        drawOutlines: n(et, be).getOutlines(s * a, r * a, a, this._INNER_MARGIN),
        drawingOptions: n(et, Ka),
        mustBeCommitted: !e
      });
      return this._cleanup(!0), o;
    }
    return i.drawLayer.remove(this._currentDrawId), this._cleanup(!0), null;
  }
  createDrawingOptions(e) {
  }
  static deserializeDraw(e, i, s, r, a, o) {
    zt("Not implemented");
  }
  static async deserialize(e, i, s) {
    var u, g;
    const {
      rawDims: {
        pageWidth: r,
        pageHeight: a,
        pageX: o,
        pageY: l
      }
    } = i.viewport, c = this.deserializeDraw(o, l, r, a, this._INNER_MARGIN, e), d = await super.deserialize(e, i, s);
    return d.createDrawingOptions(e), x(u = d, _t, Qp).call(u, {
      drawOutlines: c
    }), x(g = d, _t, Oh).call(g), d.onScaleChanging(), d.rotate(), d;
  }
  serializeDraw(e) {
    const [i, s] = this.pageTranslation, [r, a] = this.pageDimensions;
    return n(this, Ai).serialize([i, s, r, a], e);
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getPDFRect()
    }), null;
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
Ai = new WeakMap(), ql = new WeakMap(), be = new WeakMap(), Ya = new WeakMap(), Ka = new WeakMap(), xr = new WeakMap(), _r = new WeakMap(), Er = new WeakMap(), Ja = new WeakMap(), _t = new WeakSet(), Qp = function({
  drawOutlines: e,
  drawId: i,
  drawingOptions: s
}) {
  m(this, Ai, e), this._drawingOptions || (this._drawingOptions = s), this.annotationElementId || this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`), i >= 0 ? (this._drawId = i, this.parent.drawLayer.finalizeDraw(i, e.defaultProperties)) : this._drawId = x(this, _t, Zp).call(this, e, this.parent), x(this, _t, Ih).call(this, e.box);
}, Zp = function(e, i) {
  const {
    id: s
  } = i.drawLayer.draw(et._mergeSVGProperties(this._drawingOptions.toSVGProperties(), e.defaultSVGProperties), !1, !1);
  return s;
}, tg = function() {
  this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
}, Oh = function(e = this.parent) {
  if (!(this._drawId !== null && this.parent === e)) {
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, e.drawLayer);
      return;
    }
    this._drawingOptions.updateAll(), this._drawId = x(this, _t, Zp).call(this, n(this, Ai), e);
  }
}, Kb = function([e, i, s, r]) {
  const {
    parentDimensions: [a, o],
    rotation: l
  } = this;
  switch (l) {
    case 90:
      return [i, 1 - e, s * (o / a), r * (a / o)];
    case 180:
      return [1 - e, 1 - i, s, r];
    case 270:
      return [1 - i, e, s * (o / a), r * (a / o)];
    default:
      return [e, i, s, r];
  }
}, Su = function() {
  const {
    x: e,
    y: i,
    width: s,
    height: r,
    parentDimensions: [a, o],
    rotation: l
  } = this;
  switch (l) {
    case 90:
      return [1 - i, e, s * (a / o), r * (o / a)];
    case 180:
      return [1 - e, 1 - i, s, r];
    case 270:
      return [i, 1 - e, s * (a / o), r * (o / a)];
    default:
      return [e, i, s, r];
  }
}, Ih = function(e) {
  [this.x, this.y, this.width, this.height] = x(this, _t, Kb).call(this, e), this.div && (this.fixAndSetPosition(), this.setDims()), this._onResized();
}, xo = function() {
  const {
    x: e,
    y: i,
    width: s,
    height: r,
    rotation: a,
    parentRotation: o,
    parentDimensions: [l, c]
  } = this;
  switch ((a * 4 + o) / 90) {
    case 1:
      return [1 - i - r, e, r, s];
    case 2:
      return [1 - e - s, 1 - i - r, s, r];
    case 3:
      return [i, 1 - e - s, r, s];
    case 4:
      return [e, i - s * (l / c), r * (c / l), s * (l / c)];
    case 5:
      return [1 - i, e, s * (l / c), r * (c / l)];
    case 6:
      return [1 - e - r * (c / l), 1 - i, r * (c / l), s * (l / c)];
    case 7:
      return [i - s * (l / c), 1 - e - r * (c / l), s * (l / c), r * (c / l)];
    case 8:
      return [e - s, i - r, s, r];
    case 9:
      return [1 - i, e - s, r, s];
    case 10:
      return [1 - e, 1 - i, s, r];
    case 11:
      return [i - r, 1 - e, r, s];
    case 12:
      return [e - r * (c / l), i, r * (c / l), s * (l / c)];
    case 13:
      return [1 - i - s * (l / c), e - r * (c / l), s * (l / c), r * (c / l)];
    case 14:
      return [1 - e, 1 - i - s * (l / c), r * (c / l), s * (l / c)];
    case 15:
      return [i, 1 - e, s * (l / c), r * (c / l)];
    default:
      return [e, i, s, r];
  }
}, V(et, "_currentDrawId", -1), V(et, "_currentParent", null), v(et, be, null), v(et, Ya, null), v(et, Ka, null), v(et, xr, NaN), v(et, _r, null), v(et, Er, null), v(et, Ja, NaN), V(et, "_INNER_MARGIN", 3);
let ju = et;
var Os, ve, we, Qa, Xl, Ge, Re, Ui, Za, to, eo, Yl, Au;
class lS {
  constructor(t, e, i, s, r, a) {
    v(this, Yl);
    v(this, Os, new Float64Array(6));
    v(this, ve);
    v(this, we);
    v(this, Qa);
    v(this, Xl);
    v(this, Ge);
    v(this, Re, "");
    v(this, Ui, 0);
    v(this, Za, new Id());
    v(this, to);
    v(this, eo);
    m(this, to, i), m(this, eo, s), m(this, Qa, r), m(this, Xl, a), [t, e] = x(this, Yl, Au).call(this, t, e);
    const o = m(this, ve, [NaN, NaN, NaN, NaN, t, e]);
    m(this, Ge, [t, e]), m(this, we, [{
      line: o,
      points: n(this, Ge)
    }]), n(this, Os).set(o, 0);
  }
  updateProperty(t, e) {
    t === "stroke-width" && m(this, Xl, e);
  }
  isEmpty() {
    return !n(this, we) || n(this, we).length === 0;
  }
  isCancellable() {
    return n(this, Ge).length <= 10;
  }
  add(t, e) {
    [t, e] = x(this, Yl, Au).call(this, t, e);
    const [i, s, r, a] = n(this, Os).subarray(2, 6), o = t - r, l = e - a;
    return Math.hypot(n(this, to) * o, n(this, eo) * l) <= 2 ? null : (n(this, Ge).push(t, e), isNaN(i) ? (n(this, Os).set([r, a, t, e], 2), n(this, ve).push(NaN, NaN, NaN, NaN, t, e), {
      path: {
        d: this.toSVGPath()
      }
    }) : (isNaN(n(this, Os)[0]) && n(this, ve).splice(6, 6), n(this, Os).set([i, s, r, a, t, e], 0), n(this, ve).push(...Z.createBezierPoints(i, s, r, a, t, e)), {
      path: {
        d: this.toSVGPath()
      }
    }));
  }
  end(t, e) {
    const i = this.add(t, e);
    return i || (n(this, Ge).length === 2 ? {
      path: {
        d: this.toSVGPath()
      }
    } : null);
  }
  startNew(t, e, i, s, r) {
    m(this, to, i), m(this, eo, s), m(this, Qa, r), [t, e] = x(this, Yl, Au).call(this, t, e);
    const a = m(this, ve, [NaN, NaN, NaN, NaN, t, e]);
    m(this, Ge, [t, e]);
    const o = n(this, we).at(-1);
    return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), n(this, we).push({
      line: a,
      points: n(this, Ge)
    }), n(this, Os).set(a, 0), m(this, Ui, 0), this.toSVGPath(), null;
  }
  getLastElement() {
    return n(this, we).at(-1);
  }
  setLastElement(t) {
    return n(this, we) ? (n(this, we).push(t), m(this, ve, t.line), m(this, Ge, t.points), m(this, Ui, 0), {
      path: {
        d: this.toSVGPath()
      }
    }) : n(this, Za).setLastElement(t);
  }
  removeLastElement() {
    if (!n(this, we))
      return n(this, Za).removeLastElement();
    n(this, we).pop(), m(this, Re, "");
    for (let t = 0, e = n(this, we).length; t < e; t++) {
      const {
        line: i,
        points: s
      } = n(this, we)[t];
      m(this, ve, i), m(this, Ge, s), m(this, Ui, 0), this.toSVGPath();
    }
    return {
      path: {
        d: n(this, Re)
      }
    };
  }
  toSVGPath() {
    const t = Z.svgRound(n(this, ve)[4]), e = Z.svgRound(n(this, ve)[5]);
    if (n(this, Ge).length === 2)
      return m(this, Re, `${n(this, Re)} M ${t} ${e} Z`), n(this, Re);
    if (n(this, Ge).length <= 6) {
      const s = n(this, Re).lastIndexOf("M");
      m(this, Re, `${n(this, Re).slice(0, s)} M ${t} ${e}`), m(this, Ui, 6);
    }
    if (n(this, Ge).length === 4) {
      const s = Z.svgRound(n(this, ve)[10]), r = Z.svgRound(n(this, ve)[11]);
      return m(this, Re, `${n(this, Re)} L ${s} ${r}`), m(this, Ui, 12), n(this, Re);
    }
    const i = [];
    n(this, Ui) === 0 && (i.push(`M ${t} ${e}`), m(this, Ui, 6));
    for (let s = n(this, Ui), r = n(this, ve).length; s < r; s += 6) {
      const [a, o, l, c, d, u] = n(this, ve).slice(s, s + 6).map(Z.svgRound);
      i.push(`C${a} ${o} ${l} ${c} ${d} ${u}`);
    }
    return m(this, Re, n(this, Re) + i.join(" ")), m(this, Ui, n(this, ve).length), n(this, Re);
  }
  getOutlines(t, e, i, s) {
    const r = n(this, we).at(-1);
    return r.line = new Float32Array(r.line), r.points = new Float32Array(r.points), n(this, Za).build(n(this, we), t, e, i, n(this, Qa), n(this, Xl), s), m(this, Os, null), m(this, ve, null), m(this, we, null), m(this, Re, null), n(this, Za);
  }
  get defaultSVGProperties() {
    return {
      root: {
        viewBox: "0 0 10000 10000"
      },
      rootClass: {
        draw: !0
      },
      bbox: [0, 0, 1, 1]
    };
  }
}
Os = new WeakMap(), ve = new WeakMap(), we = new WeakMap(), Qa = new WeakMap(), Xl = new WeakMap(), Ge = new WeakMap(), Re = new WeakMap(), Ui = new WeakMap(), Za = new WeakMap(), to = new WeakMap(), eo = new WeakMap(), Yl = new WeakSet(), Au = function(t, e) {
  return Z._normalizePoint(t, e, n(this, to), n(this, eo), n(this, Qa));
};
var Ve, Ed, Cd, xi, Is, Fs, Kl, Jl, io, Le, qs, Jb, Qb, Zb;
class Id extends Z {
  constructor() {
    super(...arguments);
    v(this, Le);
    v(this, Ve);
    v(this, Ed, 0);
    v(this, Cd);
    v(this, xi);
    v(this, Is);
    v(this, Fs);
    v(this, Kl);
    v(this, Jl);
    v(this, io);
  }
  build(e, i, s, r, a, o, l) {
    m(this, Is, i), m(this, Fs, s), m(this, Kl, r), m(this, Jl, a), m(this, io, o), m(this, Cd, l ?? 0), m(this, xi, e), x(this, Le, Qb).call(this);
  }
  get thickness() {
    return n(this, io);
  }
  setLastElement(e) {
    return n(this, xi).push(e), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    return n(this, xi).pop(), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  toSVGPath() {
    const e = [];
    for (const {
      line: i
    } of n(this, xi)) {
      if (e.push(`M${Z.svgRound(i[4])} ${Z.svgRound(i[5])}`), i.length === 6) {
        e.push("Z");
        continue;
      }
      if (i.length === 12 && isNaN(i[6])) {
        e.push(`L${Z.svgRound(i[10])} ${Z.svgRound(i[11])}`);
        continue;
      }
      for (let s = 6, r = i.length; s < r; s += 6) {
        const [a, o, l, c, d, u] = i.subarray(s, s + 6).map(Z.svgRound);
        e.push(`C${a} ${o} ${l} ${c} ${d} ${u}`);
      }
    }
    return e.join("");
  }
  serialize([e, i, s, r], a) {
    const o = [], l = [], [c, d, u, g] = x(this, Le, Jb).call(this);
    let b, E, w, M, k, L, R, p, f;
    switch (n(this, Jl)) {
      case 0:
        f = Z._rescale, b = e, E = i + r, w = s, M = -r, k = e + c * s, L = i + (1 - d - g) * r, R = e + (c + u) * s, p = i + (1 - d) * r;
        break;
      case 90:
        f = Z._rescaleAndSwap, b = e, E = i, w = s, M = r, k = e + d * s, L = i + c * r, R = e + (d + g) * s, p = i + (c + u) * r;
        break;
      case 180:
        f = Z._rescale, b = e + s, E = i, w = -s, M = r, k = e + (1 - c - u) * s, L = i + d * r, R = e + (1 - c) * s, p = i + (d + g) * r;
        break;
      case 270:
        f = Z._rescaleAndSwap, b = e + s, E = i + r, w = -s, M = -r, k = e + (1 - d - g) * s, L = i + (1 - c - u) * r, R = e + (1 - d) * s, p = i + (1 - c) * r;
        break;
    }
    for (const {
      line: y,
      points: A
    } of n(this, xi))
      o.push(f(y, b, E, w, M, a ? new Array(y.length) : null)), l.push(f(A, b, E, w, M, a ? new Array(A.length) : null));
    return {
      lines: o,
      points: l,
      rect: [k, L, R, p]
    };
  }
  static deserialize(e, i, s, r, a, {
    paths: {
      lines: o,
      points: l
    },
    rotation: c,
    thickness: d
  }) {
    const u = [];
    let g, b, E, w, M;
    switch (c) {
      case 0:
        M = Z._rescale, g = -e / s, b = i / r + 1, E = 1 / s, w = -1 / r;
        break;
      case 90:
        M = Z._rescaleAndSwap, g = -i / r, b = -e / s, E = 1 / r, w = 1 / s;
        break;
      case 180:
        M = Z._rescale, g = e / s + 1, b = -i / r, E = -1 / s, w = 1 / r;
        break;
      case 270:
        M = Z._rescaleAndSwap, g = i / r + 1, b = e / s + 1, E = -1 / r, w = -1 / s;
        break;
    }
    if (!o) {
      o = [];
      for (const L of l) {
        const R = L.length;
        if (R === 2) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, L[0], L[1]]));
          continue;
        }
        if (R === 4) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, L[0], L[1], NaN, NaN, NaN, NaN, L[2], L[3]]));
          continue;
        }
        const p = new Float32Array(3 * (R - 2));
        o.push(p);
        let [f, y, A, T] = L.subarray(0, 4);
        p.set([NaN, NaN, NaN, NaN, f, y], 0);
        for (let P = 4; P < R; P += 2) {
          const C = L[P], D = L[P + 1];
          p.set(Z.createBezierPoints(f, y, A, T, C, D), (P - 2) * 3), [f, y, A, T] = [A, T, C, D];
        }
      }
    }
    for (let L = 0, R = o.length; L < R; L++)
      u.push({
        line: M(o[L].map((p) => p ?? NaN), g, b, E, w),
        points: M(l[L].map((p) => p ?? NaN), g, b, E, w)
      });
    const k = new this.prototype.constructor();
    return k.build(u, s, r, 1, c, d, a), k;
  }
  get box() {
    return n(this, Ve);
  }
  updateProperty(e, i) {
    return e === "stroke-width" ? x(this, Le, Zb).call(this, i) : null;
  }
  updateParentDimensions([e, i], s) {
    const [r, a] = x(this, Le, qs).call(this);
    m(this, Is, e), m(this, Fs, i), m(this, Kl, s);
    const [o, l] = x(this, Le, qs).call(this), c = o - r, d = l - a, u = n(this, Ve);
    return u[0] -= c, u[1] -= d, u[2] += 2 * c, u[3] += 2 * d, u;
  }
  updateRotation(e) {
    return m(this, Ed, e), {
      path: {
        transform: this.rotationTransform
      }
    };
  }
  get viewBox() {
    return n(this, Ve).map(Z.svgRound).join(" ");
  }
  get defaultProperties() {
    const [e, i] = n(this, Ve);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${Z.svgRound(e)} ${Z.svgRound(i)}`
      }
    };
  }
  get rotationTransform() {
    const [, , e, i] = n(this, Ve);
    let s = 0, r = 0, a = 0, o = 0, l = 0, c = 0;
    switch (n(this, Ed)) {
      case 90:
        r = i / e, a = -e / i, l = e;
        break;
      case 180:
        s = -1, o = -1, l = e, c = i;
        break;
      case 270:
        r = -i / e, a = e / i, c = i;
        break;
      default:
        return "";
    }
    return `matrix(${s} ${r} ${a} ${o} ${Z.svgRound(l)} ${Z.svgRound(c)})`;
  }
  getPathResizingSVGProperties([e, i, s, r]) {
    const [a, o] = x(this, Le, qs).call(this), [l, c, d, u] = n(this, Ve);
    if (Math.abs(d - a) <= Z.PRECISION || Math.abs(u - o) <= Z.PRECISION) {
      const M = e + s / 2 - (l + d / 2), k = i + r / 2 - (c + u / 2);
      return {
        path: {
          "transform-origin": `${Z.svgRound(e)} ${Z.svgRound(i)}`,
          transform: `${this.rotationTransform} translate(${M} ${k})`
        }
      };
    }
    const g = (s - 2 * a) / (d - 2 * a), b = (r - 2 * o) / (u - 2 * o), E = d / s, w = u / r;
    return {
      path: {
        "transform-origin": `${Z.svgRound(l)} ${Z.svgRound(c)}`,
        transform: `${this.rotationTransform} scale(${E} ${w}) translate(${Z.svgRound(a)} ${Z.svgRound(o)}) scale(${g} ${b}) translate(${Z.svgRound(-a)} ${Z.svgRound(-o)})`
      }
    };
  }
  getPathResizedSVGProperties([e, i, s, r]) {
    const [a, o] = x(this, Le, qs).call(this), l = n(this, Ve), [c, d, u, g] = l;
    if (l[0] = e, l[1] = i, l[2] = s, l[3] = r, Math.abs(u - a) <= Z.PRECISION || Math.abs(g - o) <= Z.PRECISION) {
      const k = e + s / 2 - (c + u / 2), L = i + r / 2 - (d + g / 2);
      for (const {
        line: R,
        points: p
      } of n(this, xi))
        Z._translate(R, k, L, R), Z._translate(p, k, L, p);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${Z.svgRound(e)} ${Z.svgRound(i)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    const b = (s - 2 * a) / (u - 2 * a), E = (r - 2 * o) / (g - 2 * o), w = -b * (c + a) + e + a, M = -E * (d + o) + i + o;
    if (b !== 1 || E !== 1 || w !== 0 || M !== 0)
      for (const {
        line: k,
        points: L
      } of n(this, xi))
        Z._rescale(k, w, M, b, E, k), Z._rescale(L, w, M, b, E, L);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${Z.svgRound(e)} ${Z.svgRound(i)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath()
      }
    };
  }
  getPathTranslatedSVGProperties([e, i], s) {
    const [r, a] = s, o = n(this, Ve), l = e - o[0], c = i - o[1];
    if (n(this, Is) === r && n(this, Fs) === a)
      for (const {
        line: d,
        points: u
      } of n(this, xi))
        Z._translate(d, l, c, d), Z._translate(u, l, c, u);
    else {
      const d = n(this, Is) / r, u = n(this, Fs) / a;
      m(this, Is, r), m(this, Fs, a);
      for (const {
        line: g,
        points: b
      } of n(this, xi))
        Z._rescale(g, l, c, d, u, g), Z._rescale(b, l, c, d, u, b);
      o[2] *= d, o[3] *= u;
    }
    return o[0] = e, o[1] = i, {
      root: {
        viewBox: this.viewBox
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${Z.svgRound(e)} ${Z.svgRound(i)}`
      }
    };
  }
  get defaultSVGProperties() {
    const e = n(this, Ve);
    return {
      root: {
        viewBox: this.viewBox
      },
      rootClass: {
        draw: !0
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${Z.svgRound(e[0])} ${Z.svgRound(e[1])}`,
        transform: this.rotationTransform || null
      },
      bbox: e
    };
  }
}
Ve = new WeakMap(), Ed = new WeakMap(), Cd = new WeakMap(), xi = new WeakMap(), Is = new WeakMap(), Fs = new WeakMap(), Kl = new WeakMap(), Jl = new WeakMap(), io = new WeakMap(), Le = new WeakSet(), qs = function(e = n(this, io)) {
  const i = n(this, Cd) + e / 2 * n(this, Kl);
  return n(this, Jl) % 180 === 0 ? [i / n(this, Is), i / n(this, Fs)] : [i / n(this, Fs), i / n(this, Is)];
}, Jb = function() {
  const [e, i, s, r] = n(this, Ve), [a, o] = x(this, Le, qs).call(this, 0);
  return [e + a, i + o, s - 2 * a, r - 2 * o];
}, Qb = function() {
  const e = m(this, Ve, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
  for (const {
    line: r
  } of n(this, xi)) {
    if (r.length <= 12) {
      for (let l = 4, c = r.length; l < c; l += 6)
        tt.pointBoundingBox(r[l], r[l + 1], e);
      continue;
    }
    let a = r[4], o = r[5];
    for (let l = 6, c = r.length; l < c; l += 6) {
      const [d, u, g, b, E, w] = r.subarray(l, l + 6);
      tt.bezierBoundingBox(a, o, d, u, g, b, E, w, e), a = E, o = w;
    }
  }
  const [i, s] = x(this, Le, qs).call(this);
  e[0] = ze(e[0] - i, 0, 1), e[1] = ze(e[1] - s, 0, 1), e[2] = ze(e[2] + i, 0, 1), e[3] = ze(e[3] + s, 0, 1), e[2] -= e[0], e[3] -= e[1];
}, Zb = function(e) {
  const [i, s] = x(this, Le, qs).call(this);
  m(this, io, e);
  const [r, a] = x(this, Le, qs).call(this), [o, l] = [r - i, a - s], c = n(this, Ve);
  return c[0] -= o, c[1] -= l, c[2] += 2 * o, c[3] += 2 * l, c;
};
class mf extends Yb {
  constructor(t) {
    super(), this._viewParameters = t, super.updateProperties({
      fill: "none",
      stroke: Ut._defaultLineColor,
      "stroke-opacity": 1,
      "stroke-width": 1,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": 10
    });
  }
  updateSVGProperty(t, e) {
    t === "stroke-width" && (e ?? (e = this["stroke-width"]), e *= this._viewParameters.realScale), super.updateSVGProperty(t, e);
  }
  clone() {
    const t = new mf(this._viewParameters);
    return t.updateAll(this), t;
  }
}
var of, tv;
const Po = class Po extends ju {
  constructor(e) {
    super({
      ...e,
      name: "inkEditor"
    });
    v(this, of);
    this._willKeepAspectRatio = !0, this.defaultL10nId = "pdfjs-editor-ink-editor";
  }
  static initialize(e, i) {
    Ut.initialize(e, i), this._defaultDrawingOptions = new mf(i.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const i = this._defaultDrawingOptions.clone();
    return i.updateProperties(e), i;
  }
  static get supportMultipleDrawings() {
    return !0;
  }
  static get typesMap() {
    return yt(this, "typesMap", /* @__PURE__ */ new Map([[At.INK_THICKNESS, "stroke-width"], [At.INK_COLOR, "stroke"], [At.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(e, i, s, r, a) {
    return new lS(e, i, s, r, a, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(e, i, s, r, a, o) {
    return Id.deserialize(e, i, s, r, a, o);
  }
  static async deserialize(e, i, s) {
    let r = null;
    if (e instanceof Rg) {
      const {
        data: {
          inkLists: o,
          rect: l,
          rotation: c,
          id: d,
          color: u,
          opacity: g,
          borderStyle: {
            rawWidth: b
          },
          popupRef: E,
          richText: w,
          contentsObj: M,
          creationDate: k,
          modificationDate: L
        },
        parent: {
          page: {
            pageNumber: R
          }
        }
      } = e;
      r = e = {
        annotationType: ft.INK,
        color: Array.from(u),
        thickness: b,
        opacity: g,
        paths: {
          points: o
        },
        boxes: null,
        pageIndex: R - 1,
        rect: l.slice(0),
        rotation: c,
        annotationElementId: d,
        id: d,
        deleted: !1,
        popupRef: E,
        richText: w,
        comment: (M == null ? void 0 : M.str) || null,
        creationDate: k,
        modificationDate: L
      };
    }
    const a = await super.deserialize(e, i, s);
    return a._initialData = r, e.comment && a.setCommentData(e), a;
  }
  get toolbarButtons() {
    return this._colorPicker || (this._colorPicker = new Nu(this)), [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return At.INK_COLOR;
  }
  get color() {
    return this._drawingOptions.stroke;
  }
  get opacity() {
    return this._drawingOptions["stroke-opacity"];
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    super.onScaleChanging();
    const {
      _drawId: e,
      _drawingOptions: i,
      parent: s
    } = this;
    i.updateSVGProperty("stroke-width"), s.drawLayer.updateProperties(e, i.toSVGProperties());
  }
  static onScaleChangingWhenDrawing() {
    const e = this._currentParent;
    e && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty("stroke-width"), e.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  createDrawingOptions({
    color: e,
    thickness: i,
    opacity: s
  }) {
    this._drawingOptions = Po.getDefaultDrawingOptions({
      stroke: tt.makeHexColor(...e),
      "stroke-width": i,
      "stroke-opacity": s
    });
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const {
      lines: i,
      points: s
    } = this.serializeDraw(e), {
      _drawingOptions: {
        stroke: r,
        "stroke-opacity": a,
        "stroke-width": o
      }
    } = this, l = Object.assign(super.serialize(e), {
      color: Ut._colorManager.convert(r),
      opacity: a,
      thickness: o,
      paths: {
        lines: i,
        points: s
      }
    });
    return this.addComment(l), e ? (l.isCopy = !0, l) : this.annotationElementId && !x(this, of, tv).call(this, l) ? null : (l.id = this.annotationElementId, l);
  }
  renderAnnotationElement(e) {
    if (this.deleted)
      return e.hide(), null;
    const {
      points: i,
      rect: s
    } = this.serializeDraw(!1);
    return e.updateEdited({
      rect: s,
      thickness: this._drawingOptions["stroke-width"],
      points: i,
      popup: this.comment
    }), null;
  }
};
of = new WeakSet(), tv = function(e) {
  const {
    color: i,
    thickness: s,
    opacity: r,
    pageIndex: a
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || e.color.some((o, l) => o !== i[l]) || e.thickness !== s || e.opacity !== r || e.pageIndex !== a;
}, V(Po, "_type", "ink"), V(Po, "_editorType", ft.INK), V(Po, "_defaultDrawingOptions", null);
let eg = Po;
class ig extends Id {
  toSVGPath() {
    let t = super.toSVGPath();
    return t.endsWith("Z") || (t += "Z"), t;
  }
}
const Kd = 8, mh = 3;
var so, Pt, sg, ns, ev, iv, ng, xu, sv, nv, rv, rg, ag, av;
class js {
  static extractContoursFromText(t, {
    fontFamily: e,
    fontStyle: i,
    fontWeight: s
  }, r, a, o, l) {
    let c = new OffscreenCanvas(1, 1), d = c.getContext("2d", {
      alpha: !1
    });
    const u = 200, g = d.font = `${i} ${s} ${u}px ${e}`, {
      actualBoundingBoxLeft: b,
      actualBoundingBoxRight: E,
      actualBoundingBoxAscent: w,
      actualBoundingBoxDescent: M,
      fontBoundingBoxAscent: k,
      fontBoundingBoxDescent: L,
      width: R
    } = d.measureText(t), p = 1.5, f = Math.ceil(Math.max(Math.abs(b) + Math.abs(E) || 0, R) * p), y = Math.ceil(Math.max(Math.abs(w) + Math.abs(M) || u, Math.abs(k) + Math.abs(L) || u) * p);
    c = new OffscreenCanvas(f, y), d = c.getContext("2d", {
      alpha: !0,
      willReadFrequently: !0
    }), d.font = g, d.filter = "grayscale(1)", d.fillStyle = "white", d.fillRect(0, 0, f, y), d.fillStyle = "black", d.fillText(t, f * (p - 1) / 2, y * (3 - p) / 2);
    const A = x(this, Pt, rg).call(this, d.getImageData(0, 0, f, y).data), T = x(this, Pt, rv).call(this, A), P = x(this, Pt, ag).call(this, T), C = x(this, Pt, ng).call(this, A, f, y, P);
    return this.processDrawnLines({
      lines: {
        curves: C,
        width: f,
        height: y
      },
      pageWidth: r,
      pageHeight: a,
      rotation: o,
      innerMargin: l,
      mustSmooth: !0,
      areContours: !0
    });
  }
  static process(t, e, i, s, r) {
    const [a, o, l] = x(this, Pt, av).call(this, t), [c, d] = x(this, Pt, nv).call(this, a, o, l, Math.hypot(o, l) * n(this, so).sigmaSFactor, n(this, so).sigmaR, n(this, so).kernelSize), u = x(this, Pt, ag).call(this, d), g = x(this, Pt, ng).call(this, c, o, l, u);
    return this.processDrawnLines({
      lines: {
        curves: g,
        width: o,
        height: l
      },
      pageWidth: e,
      pageHeight: i,
      rotation: s,
      innerMargin: r,
      mustSmooth: !0,
      areContours: !0
    });
  }
  static processDrawnLines({
    lines: t,
    pageWidth: e,
    pageHeight: i,
    rotation: s,
    innerMargin: r,
    mustSmooth: a,
    areContours: o
  }) {
    s % 180 !== 0 && ([e, i] = [i, e]);
    const {
      curves: l,
      width: c,
      height: d
    } = t, u = t.thickness ?? 0, g = [], b = Math.min(e / c, i / d), E = b / e, w = b / i, M = [];
    for (const {
      points: L
    } of l) {
      const R = a ? x(this, Pt, sv).call(this, L) : L;
      if (!R)
        continue;
      M.push(R);
      const p = R.length, f = new Float32Array(p), y = new Float32Array(3 * (p === 2 ? 2 : p - 2));
      if (g.push({
        line: y,
        points: f
      }), p === 2) {
        f[0] = R[0] * E, f[1] = R[1] * w, y.set([NaN, NaN, NaN, NaN, f[0], f[1]], 0);
        continue;
      }
      let [A, T, P, C] = R;
      A *= E, T *= w, P *= E, C *= w, f.set([A, T, P, C], 0), y.set([NaN, NaN, NaN, NaN, A, T], 0);
      for (let D = 4; D < p; D += 2) {
        const N = f[D] = R[D] * E, I = f[D + 1] = R[D + 1] * w;
        y.set(Z.createBezierPoints(A, T, P, C, N, I), (D - 2) * 3), [A, T, P, C] = [P, C, N, I];
      }
    }
    if (g.length === 0)
      return null;
    const k = o ? new ig() : new Id();
    return k.build(g, e, i, 1, s, o ? 0 : u, r), {
      outline: k,
      newCurves: M,
      areContours: o,
      thickness: u,
      width: c,
      height: d
    };
  }
  static async compressSignature({
    outlines: t,
    areContours: e,
    thickness: i,
    width: s,
    height: r
  }) {
    let a = 1 / 0, o = -1 / 0, l = 0;
    for (const R of t) {
      l += R.length;
      for (let p = 2, f = R.length; p < f; p++) {
        const y = R[p] - R[p - 2];
        a = Math.min(a, y), o = Math.max(o, y);
      }
    }
    let c;
    a >= -128 && o <= 127 ? c = Int8Array : a >= -32768 && o <= 32767 ? c = Int16Array : c = Int32Array;
    const d = t.length, u = Kd + mh * d, g = new Uint32Array(u);
    let b = 0;
    g[b++] = u * Uint32Array.BYTES_PER_ELEMENT + (l - 2 * d) * c.BYTES_PER_ELEMENT, g[b++] = 0, g[b++] = s, g[b++] = r, g[b++] = e ? 0 : 1, g[b++] = Math.max(0, Math.floor(i ?? 0)), g[b++] = d, g[b++] = c.BYTES_PER_ELEMENT;
    for (const R of t)
      g[b++] = R.length - 2, g[b++] = R[0], g[b++] = R[1];
    const E = new CompressionStream("deflate-raw"), w = E.writable.getWriter();
    await w.ready, w.write(g);
    const M = c.prototype.constructor;
    for (const R of t) {
      const p = new M(R.length - 2);
      for (let f = 2, y = R.length; f < y; f++)
        p[f - 2] = R[f] - R[f - 2];
      w.write(p);
    }
    w.close();
    const k = await new Response(E.readable).arrayBuffer(), L = new Uint8Array(k);
    return iy(L);
  }
  static async decompressSignature(t) {
    try {
      const e = Dw(t), {
        readable: i,
        writable: s
      } = new DecompressionStream("deflate-raw"), r = s.getWriter();
      await r.ready, r.write(e).then(async () => {
        await r.ready, await r.close();
      }).catch(() => {
      });
      let a = null, o = 0;
      for await (const R of i)
        a || (a = new Uint8Array(new Uint32Array(R.buffer, 0, 4)[0])), a.set(R, o), o += R.length;
      const l = new Uint32Array(a.buffer, 0, a.length >> 2), c = l[1];
      if (c !== 0)
        throw new Error(`Invalid version: ${c}`);
      const d = l[2], u = l[3], g = l[4] === 0, b = l[5], E = l[6], w = l[7], M = [], k = (Kd + mh * E) * Uint32Array.BYTES_PER_ELEMENT;
      let L;
      switch (w) {
        case Int8Array.BYTES_PER_ELEMENT:
          L = new Int8Array(a.buffer, k);
          break;
        case Int16Array.BYTES_PER_ELEMENT:
          L = new Int16Array(a.buffer, k);
          break;
        case Int32Array.BYTES_PER_ELEMENT:
          L = new Int32Array(a.buffer, k);
          break;
      }
      o = 0;
      for (let R = 0; R < E; R++) {
        const p = l[mh * R + Kd], f = new Float32Array(p + 2);
        M.push(f);
        for (let y = 0; y < mh - 1; y++)
          f[y] = l[mh * R + Kd + y + 1];
        for (let y = 0; y < p; y++)
          f[y + 2] = f[y] + L[o++];
      }
      return {
        areContours: g,
        thickness: b,
        outlines: M,
        width: d,
        height: u
      };
    } catch (e) {
      return pt(`decompressSignature: ${e}`), null;
    }
  }
}
so = new WeakMap(), Pt = new WeakSet(), sg = function(t, e, i, s) {
  return i -= t, s -= e, i === 0 ? s > 0 ? 0 : 4 : i === 1 ? s + 6 : 2 - s;
}, ns = new WeakMap(), ev = function(t, e, i, s, r, a, o) {
  const l = x(this, Pt, sg).call(this, i, s, r, a);
  for (let c = 0; c < 8; c++) {
    const d = (-c + l - o + 16) % 8, u = n(this, ns)[2 * d], g = n(this, ns)[2 * d + 1];
    if (t[(i + u) * e + (s + g)] !== 0)
      return d;
  }
  return -1;
}, iv = function(t, e, i, s, r, a, o) {
  const l = x(this, Pt, sg).call(this, i, s, r, a);
  for (let c = 0; c < 8; c++) {
    const d = (c + l + o + 16) % 8, u = n(this, ns)[2 * d], g = n(this, ns)[2 * d + 1];
    if (t[(i + u) * e + (s + g)] !== 0)
      return d;
  }
  return -1;
}, ng = function(t, e, i, s) {
  const r = t.length, a = new Int32Array(r);
  for (let d = 0; d < r; d++)
    a[d] = t[d] <= s ? 1 : 0;
  for (let d = 1; d < i - 1; d++)
    a[d * e] = a[d * e + e - 1] = 0;
  for (let d = 0; d < e; d++)
    a[d] = a[e * i - 1 - d] = 0;
  let o = 1, l;
  const c = [];
  for (let d = 1; d < i - 1; d++) {
    l = 1;
    for (let u = 1; u < e - 1; u++) {
      const g = d * e + u, b = a[g];
      if (b === 0)
        continue;
      let E = d, w = u;
      if (b === 1 && a[g - 1] === 0)
        o += 1, w -= 1;
      else if (b >= 1 && a[g + 1] === 0)
        o += 1, w += 1, b > 1 && (l = b);
      else {
        b !== 1 && (l = Math.abs(b));
        continue;
      }
      const M = [u, d], k = w === u + 1, L = {
        isHole: k,
        points: M,
        id: o,
        parent: 0
      };
      c.push(L);
      let R;
      for (const D of c)
        if (D.id === l) {
          R = D;
          break;
        }
      R ? R.isHole ? L.parent = k ? R.parent : l : L.parent = k ? l : R.parent : L.parent = k ? l : 0;
      const p = x(this, Pt, ev).call(this, a, e, d, u, E, w, 0);
      if (p === -1) {
        a[g] = -o, a[g] !== 1 && (l = Math.abs(a[g]));
        continue;
      }
      let f = n(this, ns)[2 * p], y = n(this, ns)[2 * p + 1];
      const A = d + f, T = u + y;
      E = A, w = T;
      let P = d, C = u;
      for (; ; ) {
        const D = x(this, Pt, iv).call(this, a, e, P, C, E, w, 1);
        f = n(this, ns)[2 * D], y = n(this, ns)[2 * D + 1];
        const N = P + f, I = C + y;
        M.push(I, N);
        const B = P * e + C;
        if (a[B + 1] === 0 ? a[B] = -o : a[B] === 1 && (a[B] = o), N === d && I === u && P === A && C === T) {
          a[g] !== 1 && (l = Math.abs(a[g]));
          break;
        } else
          E = P, w = C, P = N, C = I;
      }
    }
  }
  return c;
}, xu = function(t, e, i, s) {
  if (i - e <= 4) {
    for (let A = e; A < i - 2; A += 2)
      s.push(t[A], t[A + 1]);
    return;
  }
  const r = t[e], a = t[e + 1], o = t[i - 4] - r, l = t[i - 3] - a, c = Math.hypot(o, l), d = o / c, u = l / c, g = d * a - u * r, b = l / o, E = 1 / c, w = Math.atan(b), M = Math.cos(w), k = Math.sin(w), L = E * (Math.abs(M) + Math.abs(k)), R = E * (1 - L + L ** 2), p = Math.max(Math.atan(Math.abs(k + M) * R), Math.atan(Math.abs(k - M) * R));
  let f = 0, y = e;
  for (let A = e + 2; A < i - 2; A += 2) {
    const T = Math.abs(g - d * t[A + 1] + u * t[A]);
    T > f && (y = A, f = T);
  }
  f > (c * p) ** 2 ? (x(this, Pt, xu).call(this, t, e, y + 2, s), x(this, Pt, xu).call(this, t, y, i, s)) : s.push(r, a);
}, sv = function(t) {
  const e = [], i = t.length;
  return x(this, Pt, xu).call(this, t, 0, i, e), e.push(t[i - 2], t[i - 1]), e.length <= 4 ? null : e;
}, nv = function(t, e, i, s, r, a) {
  const o = new Float32Array(a ** 2), l = -2 * s ** 2, c = a >> 1;
  for (let w = 0; w < a; w++) {
    const M = (w - c) ** 2;
    for (let k = 0; k < a; k++)
      o[w * a + k] = Math.exp((M + (k - c) ** 2) / l);
  }
  const d = new Float32Array(256), u = -2 * r ** 2;
  for (let w = 0; w < 256; w++)
    d[w] = Math.exp(w ** 2 / u);
  const g = t.length, b = new Uint8Array(g), E = new Uint32Array(256);
  for (let w = 0; w < i; w++)
    for (let M = 0; M < e; M++) {
      const k = w * e + M, L = t[k];
      let R = 0, p = 0;
      for (let y = 0; y < a; y++) {
        const A = w + y - c;
        if (!(A < 0 || A >= i))
          for (let T = 0; T < a; T++) {
            const P = M + T - c;
            if (P < 0 || P >= e)
              continue;
            const C = t[A * e + P], D = o[y * a + T] * d[Math.abs(C - L)];
            R += C * D, p += D;
          }
      }
      const f = b[k] = Math.round(R / p);
      E[f]++;
    }
  return [b, E];
}, rv = function(t) {
  const e = new Uint32Array(256);
  for (const i of t)
    e[i]++;
  return e;
}, rg = function(t) {
  const e = t.length, i = new Uint8ClampedArray(e >> 2);
  let s = -1 / 0, r = 1 / 0;
  for (let o = 0, l = i.length; o < l; o++) {
    const c = i[o] = t[o << 2];
    s = Math.max(s, c), r = Math.min(r, c);
  }
  const a = 255 / (s - r);
  for (let o = 0, l = i.length; o < l; o++)
    i[o] = (i[o] - r) * a;
  return i;
}, ag = function(t) {
  let e, i = -1 / 0, s = -1 / 0;
  const r = t.findIndex((l) => l !== 0);
  let a = r, o = r;
  for (e = r; e < 256; e++) {
    const l = t[e];
    l > i && (e - a > s && (s = e - a, o = e - 1), i = l, a = e);
  }
  for (e = o - 1; e >= 0 && !(t[e] > t[e + 1]); e--)
    ;
  return e;
}, av = function(t) {
  const e = t, {
    width: i,
    height: s
  } = t, {
    maxDim: r
  } = n(this, so);
  let a = i, o = s;
  if (i > r || s > r) {
    let g = i, b = s, E = Math.log2(Math.max(i, s) / r);
    const w = Math.floor(E);
    E = E === w ? w - 1 : w;
    for (let k = 0; k < E; k++) {
      a = Math.ceil(g / 2), o = Math.ceil(b / 2);
      const L = new OffscreenCanvas(a, o);
      L.getContext("2d").drawImage(t, 0, 0, g, b, 0, 0, a, o), g = a, b = o, t !== e && t.close(), t = L.transferToImageBitmap();
    }
    const M = Math.min(r / a, r / o);
    a = Math.round(a * M), o = Math.round(o * M);
  }
  const c = new OffscreenCanvas(a, o).getContext("2d", {
    willReadFrequently: !0
  });
  c.fillStyle = "white", c.fillRect(0, 0, a, o), c.filter = "grayscale(1)", c.drawImage(t, 0, 0, t.width, t.height, 0, 0, a, o);
  const d = c.getImageData(0, 0, a, o).data;
  return [x(this, Pt, rg).call(this, d), a, o];
}, v(js, Pt), v(js, so, {
  maxDim: 512,
  sigmaSFactor: 0.02,
  sigmaR: 25,
  kernelSize: 16
}), v(js, ns, new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]));
class Lg extends Yb {
  constructor() {
    super(), super.updateProperties({
      fill: Ut._defaultLineColor,
      "stroke-width": 0
    });
  }
  clone() {
    const t = new Lg();
    return t.updateAll(this), t;
  }
}
class Dg extends mf {
  constructor(t) {
    super(t), super.updateProperties({
      stroke: Ut._defaultLineColor,
      "stroke-width": 1
    });
  }
  clone() {
    const t = new Dg(this._viewParameters);
    return t.updateAll(this), t;
  }
}
var Cr, Ns, Tr, no;
const oi = class oi extends ju {
  constructor(e) {
    super({
      ...e,
      mustBeCommitted: !0,
      name: "signatureEditor"
    });
    v(this, Cr, !1);
    v(this, Ns, null);
    v(this, Tr, null);
    v(this, no, null);
    this._willKeepAspectRatio = !0, m(this, Tr, e.signatureData || null), m(this, Ns, null), this.defaultL10nId = "pdfjs-editor-signature-editor1";
  }
  static initialize(e, i) {
    Ut.initialize(e, i), this._defaultDrawingOptions = new Lg(), this._defaultDrawnSignatureOptions = new Dg(i.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const i = this._defaultDrawingOptions.clone();
    return i.updateProperties(e), i;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  static get typesMap() {
    return yt(this, "typesMap", /* @__PURE__ */ new Map());
  }
  static get isDrawer() {
    return !1;
  }
  get telemetryFinalData() {
    return {
      type: "signature",
      hasDescription: !!n(this, Ns)
    };
  }
  static computeTelemetryFinalData(e) {
    const i = e.get("hasDescription");
    return {
      hasAltText: i.get(!0) ?? 0,
      hasNoAltText: i.get(!1) ?? 0
    };
  }
  get isResizable() {
    return !0;
  }
  onScaleChanging() {
    this._drawId !== null && super.onScaleChanging();
  }
  render() {
    if (this.div)
      return this.div;
    let e, i;
    const {
      _isCopy: s
    } = this;
    if (s && (this._isCopy = !1, e = this.x, i = this.y), super.render(), this._drawId === null)
      if (n(this, Tr)) {
        const {
          lines: r,
          mustSmooth: a,
          areContours: o,
          description: l,
          uuid: c,
          heightInPage: d
        } = n(this, Tr), {
          rawDims: {
            pageWidth: u,
            pageHeight: g
          },
          rotation: b
        } = this.parent.viewport, E = js.processDrawnLines({
          lines: r,
          pageWidth: u,
          pageHeight: g,
          rotation: b,
          innerMargin: oi._INNER_MARGIN,
          mustSmooth: a,
          areContours: o
        });
        this.addSignature(E, d, l, c);
      } else
        this.div.setAttribute("data-l10n-args", JSON.stringify({
          description: ""
        })), this.div.hidden = !0, this._uiManager.getSignature(this);
    else
      this.div.setAttribute("data-l10n-args", JSON.stringify({
        description: n(this, Ns) || ""
      }));
    return s && (this._isCopy = !0, this._moveAfterPaste(e, i)), this.div;
  }
  setUuid(e) {
    m(this, no, e), this.addEditToolbar();
  }
  getUuid() {
    return n(this, no);
  }
  get description() {
    return n(this, Ns);
  }
  set description(e) {
    m(this, Ns, e), this.div && (this.div.setAttribute("data-l10n-args", JSON.stringify({
      description: e
    })), super.addEditToolbar().then((i) => {
      i == null || i.updateEditSignatureButton(e);
    }));
  }
  getSignaturePreview() {
    const {
      newCurves: e,
      areContours: i,
      thickness: s,
      width: r,
      height: a
    } = n(this, Tr), o = Math.max(r, a), l = js.processDrawnLines({
      lines: {
        curves: e.map((c) => ({
          points: c
        })),
        thickness: s,
        width: r,
        height: a
      },
      pageWidth: o,
      pageHeight: o,
      rotation: 0,
      innerMargin: 0,
      mustSmooth: !1,
      areContours: i
    });
    return {
      areContours: i,
      outline: l.outline
    };
  }
  get toolbarButtons() {
    return this._uiManager.signatureManager ? [["editSignature", this._uiManager.signatureManager]] : super.toolbarButtons;
  }
  addSignature(e, i, s, r) {
    const {
      x: a,
      y: o
    } = this, {
      outline: l
    } = m(this, Tr, e);
    m(this, Cr, l instanceof ig), this.description = s;
    let c;
    n(this, Cr) ? c = oi.getDefaultDrawingOptions() : (c = oi._defaultDrawnSignatureOptions.clone(), c.updateProperties({
      "stroke-width": l.thickness
    })), this._addOutlines({
      drawOutlines: l,
      drawingOptions: c
    });
    const [, d] = this.pageDimensions;
    let u = i / d;
    u = u >= 1 ? 0.5 : u, this.width *= u / this.height, this.width >= 1 && (u *= 0.9 / this.width, this.width = 0.9), this.height = u, this.setDims(), this.x = a, this.y = o, this.center(), this._onResized(), this.onScaleChanging(), this.rotate(), this._uiManager.addToAnnotationStorage(this), this.setUuid(r), this._reportTelemetry({
      action: "pdfjs.signature.inserted",
      data: {
        hasBeenSaved: !!r,
        hasDescription: !!s
      }
    }), this.div.hidden = !1;
  }
  getFromImage(e) {
    const {
      rawDims: {
        pageWidth: i,
        pageHeight: s
      },
      rotation: r
    } = this.parent.viewport;
    return js.process(e, i, s, r, oi._INNER_MARGIN);
  }
  getFromText(e, i) {
    const {
      rawDims: {
        pageWidth: s,
        pageHeight: r
      },
      rotation: a
    } = this.parent.viewport;
    return js.extractContoursFromText(e, i, s, r, a, oi._INNER_MARGIN);
  }
  getDrawnSignature(e) {
    const {
      rawDims: {
        pageWidth: i,
        pageHeight: s
      },
      rotation: r
    } = this.parent.viewport;
    return js.processDrawnLines({
      lines: e,
      pageWidth: i,
      pageHeight: s,
      rotation: r,
      innerMargin: oi._INNER_MARGIN,
      mustSmooth: !1,
      areContours: !1
    });
  }
  createDrawingOptions({
    areContours: e,
    thickness: i
  }) {
    e ? this._drawingOptions = oi.getDefaultDrawingOptions() : (this._drawingOptions = oi._defaultDrawnSignatureOptions.clone(), this._drawingOptions.updateProperties({
      "stroke-width": i
    }));
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    const {
      lines: i,
      points: s
    } = this.serializeDraw(e), {
      _drawingOptions: {
        "stroke-width": r
      }
    } = this, a = Object.assign(super.serialize(e), {
      isSignature: !0,
      areContours: n(this, Cr),
      color: [0, 0, 0],
      thickness: n(this, Cr) ? 0 : r
    });
    return this.addComment(a), e ? (a.paths = {
      lines: i,
      points: s
    }, a.uuid = n(this, no), a.isCopy = !0) : a.lines = i, n(this, Ns) && (a.accessibilityData = {
      type: "Figure",
      alt: n(this, Ns)
    }), a;
  }
  static deserializeDraw(e, i, s, r, a, o) {
    return o.areContours ? ig.deserialize(e, i, s, r, a, o) : Id.deserialize(e, i, s, r, a, o);
  }
  static async deserialize(e, i, s) {
    var a;
    const r = await super.deserialize(e, i, s);
    return m(r, Cr, e.areContours), r.description = ((a = e.accessibilityData) == null ? void 0 : a.alt) || "", m(r, no, e.uuid), r;
  }
};
Cr = new WeakMap(), Ns = new WeakMap(), Tr = new WeakMap(), no = new WeakMap(), V(oi, "_type", "signature"), V(oi, "_editorType", ft.SIGNATURE), V(oi, "_defaultDrawingOptions", null);
let og = oi;
var qt, Se, Pr, Cn, kr, Ql, Tn, ro, Bs, _i, Zl, Et, Fh, Nh, _u, Eu, Cu, hg, Tu, ov;
class lg extends Ut {
  constructor(e) {
    super({
      ...e,
      name: "stampEditor"
    });
    v(this, Et);
    v(this, qt, null);
    v(this, Se, null);
    v(this, Pr, null);
    v(this, Cn, null);
    v(this, kr, null);
    v(this, Ql, "");
    v(this, Tn, null);
    v(this, ro, !1);
    v(this, Bs, null);
    v(this, _i, !1);
    v(this, Zl, !1);
    m(this, Cn, e.bitmapUrl), m(this, kr, e.bitmapFile), this.defaultL10nId = "pdfjs-editor-stamp-editor";
  }
  static initialize(e, i) {
    Ut.initialize(e, i);
  }
  static isHandlingMimeForPasting(e) {
    return Lu.includes(e);
  }
  static paste(e, i) {
    i.pasteEditor({
      mode: ft.STAMP
    }, {
      bitmapFile: e.getAsFile()
    });
  }
  altTextFinish() {
    this._uiManager.useNewAltTextFlow && (this.div.hidden = !1), super.altTextFinish();
  }
  get telemetryFinalData() {
    var e;
    return {
      type: "stamp",
      hasAltText: !!((e = this.altTextData) != null && e.altText)
    };
  }
  static computeTelemetryFinalData(e) {
    const i = e.get("hasAltText");
    return {
      hasAltText: i.get(!0) ?? 0,
      hasNoAltText: i.get(!1) ?? 0
    };
  }
  async mlGuessAltText(e = null, i = !0) {
    if (this.hasAltTextData())
      return null;
    const {
      mlManager: s
    } = this._uiManager;
    if (!s)
      throw new Error("No ML.");
    if (!await s.isEnabledFor("altText"))
      throw new Error("ML isn't enabled for alt text.");
    const {
      data: r,
      width: a,
      height: o
    } = e || this.copyCanvas(null, null, !0).imageData, l = await s.guess({
      name: "altText",
      request: {
        data: r,
        width: a,
        height: o,
        channels: r.length / (a * o)
      }
    });
    if (!l)
      throw new Error("No response from the AI service.");
    if (l.error)
      throw new Error("Error from the AI service.");
    if (l.cancel)
      return null;
    if (!l.output)
      throw new Error("No valid response from the AI service.");
    const c = l.output;
    return await this.setGuessedAltText(c), i && !this.hasAltTextData() && (this.altTextData = {
      alt: c,
      decorative: !1
    }), c;
  }
  remove() {
    var e;
    n(this, Se) && (m(this, qt, null), this._uiManager.imageManager.deleteId(n(this, Se)), (e = n(this, Tn)) == null || e.remove(), m(this, Tn, null), n(this, Bs) && (clearTimeout(n(this, Bs)), m(this, Bs, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      n(this, Se) && x(this, Et, _u).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (n(this, Se) && n(this, Tn) === null && x(this, Et, _u).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded(e) {
    this._isDraggable = !0, e && this.div.focus();
  }
  isEmpty() {
    return !(n(this, Pr) || n(this, qt) || n(this, Cn) || n(this, kr) || n(this, Se) || n(this, ro));
  }
  get toolbarButtons() {
    return [["altText", this.createAltText()]];
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, i;
    return this._isCopy && (e = this.x, i = this.y), super.render(), this.div.hidden = !0, this.createAltText(), n(this, ro) || (n(this, qt) ? x(this, Et, Eu).call(this) : x(this, Et, _u).call(this)), this._isCopy && this._moveAfterPaste(e, i), this._uiManager.addShouldRescale(this), this.div;
  }
  setCanvas(e, i) {
    const {
      id: s,
      bitmap: r
    } = this._uiManager.imageManager.getFromCanvas(e, i);
    i.remove(), s && this._uiManager.imageManager.isValidId(s) && (m(this, Se, s), r && m(this, qt, r), m(this, ro, !1), x(this, Et, Eu).call(this));
  }
  _onResized() {
    this.onScaleChanging();
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    n(this, Bs) !== null && clearTimeout(n(this, Bs)), m(this, Bs, setTimeout(() => {
      m(this, Bs, null), x(this, Et, hg).call(this);
    }, 200));
  }
  copyCanvas(e, i, s = !1) {
    e || (e = 224);
    const {
      width: r,
      height: a
    } = n(this, qt), o = new cs();
    let l = n(this, qt), c = r, d = a, u = null;
    if (i) {
      if (r > i || a > i) {
        const A = Math.min(i / r, i / a);
        c = Math.floor(r * A), d = Math.floor(a * A);
      }
      u = document.createElement("canvas");
      const b = u.width = Math.ceil(c * o.sx), E = u.height = Math.ceil(d * o.sy);
      n(this, _i) || (l = x(this, Et, Cu).call(this, b, E));
      const w = u.getContext("2d");
      w.filter = this._uiManager.hcmFilter;
      let M = "white", k = "#cfcfd8";
      this._uiManager.hcmFilter !== "none" ? k = "black" : Fw.isDarkMode && (M = "#8f8f9d", k = "#42414d");
      const L = 15, R = L * o.sx, p = L * o.sy, f = new OffscreenCanvas(R * 2, p * 2), y = f.getContext("2d");
      y.fillStyle = M, y.fillRect(0, 0, R * 2, p * 2), y.fillStyle = k, y.fillRect(0, 0, R, p), y.fillRect(R, p, R, p), w.fillStyle = w.createPattern(f, "repeat"), w.fillRect(0, 0, b, E), w.drawImage(l, 0, 0, l.width, l.height, 0, 0, b, E);
    }
    let g = null;
    if (s) {
      let b, E;
      if (o.symmetric && l.width < e && l.height < e)
        b = l.width, E = l.height;
      else if (l = n(this, qt), r > e || a > e) {
        const k = Math.min(e / r, e / a);
        b = Math.floor(r * k), E = Math.floor(a * k), n(this, _i) || (l = x(this, Et, Cu).call(this, b, E));
      }
      const M = new OffscreenCanvas(b, E).getContext("2d", {
        willReadFrequently: !0
      });
      M.drawImage(l, 0, 0, l.width, l.height, 0, 0, b, E), g = {
        width: b,
        height: E,
        data: M.getImageData(0, 0, b, E).data
      };
    }
    return {
      canvas: u,
      width: c,
      height: d,
      imageData: g
    };
  }
  static async deserialize(e, i, s) {
    var M;
    let r = null, a = !1;
    if (e instanceof xb) {
      const {
        data: {
          rect: k,
          rotation: L,
          id: R,
          structParent: p,
          popupRef: f,
          richText: y,
          contentsObj: A,
          creationDate: T,
          modificationDate: P
        },
        container: C,
        parent: {
          page: {
            pageNumber: D
          }
        },
        canvas: N
      } = e;
      let I, B;
      N ? (delete e.canvas, {
        id: I,
        bitmap: B
      } = s.imageManager.getFromCanvas(C.id, N), N.remove()) : (a = !0, e._hasNoCanvas = !0);
      const j = ((M = await i._structTree.getAriaAttributes(`${Sg}${R}`)) == null ? void 0 : M.get("aria-label")) || "";
      r = e = {
        annotationType: ft.STAMP,
        bitmapId: I,
        bitmap: B,
        pageIndex: D - 1,
        rect: k.slice(0),
        rotation: L,
        annotationElementId: R,
        id: R,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: j
        },
        isSvg: !1,
        structParent: p,
        popupRef: f,
        richText: y,
        comment: (A == null ? void 0 : A.str) || null,
        creationDate: T,
        modificationDate: P
      };
    }
    const o = await super.deserialize(e, i, s), {
      rect: l,
      bitmap: c,
      bitmapUrl: d,
      bitmapId: u,
      isSvg: g,
      accessibilityData: b
    } = e;
    a ? (s.addMissingCanvas(e.id, o), m(o, ro, !0)) : u && s.imageManager.isValidId(u) ? (m(o, Se, u), c && m(o, qt, c)) : m(o, Cn, d), m(o, _i, g);
    const [E, w] = o.pageDimensions;
    return o.width = (l[2] - l[0]) / E, o.height = (l[3] - l[1]) / w, b && (o.altTextData = b), o._initialData = r, e.comment && o.setCommentData(e), m(o, Zl, !!r), o;
  }
  serialize(e = !1, i = null) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = Object.assign(super.serialize(e), {
      bitmapId: n(this, Se),
      isSvg: n(this, _i)
    });
    if (this.addComment(s), e)
      return s.bitmapUrl = x(this, Et, Tu).call(this, !0), s.accessibilityData = this.serializeAltText(!0), s.isCopy = !0, s;
    const {
      decorative: r,
      altText: a
    } = this.serializeAltText(!1);
    if (!r && a && (s.accessibilityData = {
      type: "Figure",
      alt: a
    }), this.annotationElementId) {
      const l = x(this, Et, ov).call(this, s);
      return l.isSame ? null : (l.isSameAltText ? delete s.accessibilityData : s.accessibilityData.structParent = this._initialData.structParent ?? -1, s.id = this.annotationElementId, delete s.bitmapId, s);
    }
    if (i === null)
      return s;
    i.stamps || (i.stamps = /* @__PURE__ */ new Map());
    const o = n(this, _i) ? (s.rect[2] - s.rect[0]) * (s.rect[3] - s.rect[1]) : null;
    if (!i.stamps.has(n(this, Se)))
      i.stamps.set(n(this, Se), {
        area: o,
        serialized: s
      }), s.bitmap = x(this, Et, Tu).call(this, !1);
    else if (n(this, _i)) {
      const l = i.stamps.get(n(this, Se));
      o > l.area && (l.area = o, l.serialized.bitmap.close(), l.serialized.bitmap = x(this, Et, Tu).call(this, !1));
    }
    return s;
  }
  renderAnnotationElement(e) {
    return this.deleted ? (e.hide(), null) : (e.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    }), null);
  }
}
qt = new WeakMap(), Se = new WeakMap(), Pr = new WeakMap(), Cn = new WeakMap(), kr = new WeakMap(), Ql = new WeakMap(), Tn = new WeakMap(), ro = new WeakMap(), Bs = new WeakMap(), _i = new WeakMap(), Zl = new WeakMap(), Et = new WeakSet(), Fh = function(e, i = !1) {
  if (!e) {
    this.remove();
    return;
  }
  m(this, qt, e.bitmap), i || (m(this, Se, e.id), m(this, _i, e.isSvg)), e.file && m(this, Ql, e.file.name), x(this, Et, Eu).call(this);
}, Nh = function() {
  if (m(this, Pr, null), this._uiManager.enableWaiting(!1), !!n(this, Tn)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, qt)) {
      this.addEditToolbar().then(() => {
        this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
      });
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, qt)) {
      this._reportTelemetry({
        action: "pdfjs.image.image_added",
        data: {
          alt_text_modal: !1,
          alt_text_type: "empty"
        }
      });
      try {
        this.mlGuessAltText();
      } catch {
      }
    }
    this.div.focus();
  }
}, _u = function() {
  if (n(this, Se)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(n(this, Se)).then((s) => x(this, Et, Fh).call(this, s, !0)).finally(() => x(this, Et, Nh).call(this));
    return;
  }
  if (n(this, Cn)) {
    const s = n(this, Cn);
    m(this, Cn, null), this._uiManager.enableWaiting(!0), m(this, Pr, this._uiManager.imageManager.getFromUrl(s).then((r) => x(this, Et, Fh).call(this, r)).finally(() => x(this, Et, Nh).call(this)));
    return;
  }
  if (n(this, kr)) {
    const s = n(this, kr);
    m(this, kr, null), this._uiManager.enableWaiting(!0), m(this, Pr, this._uiManager.imageManager.getFromFile(s).then((r) => x(this, Et, Fh).call(this, r)).finally(() => x(this, Et, Nh).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = Lu.join(",");
  const i = this._uiManager._signal;
  m(this, Pr, new Promise((s) => {
    e.addEventListener("change", async () => {
      if (!e.files || e.files.length === 0)
        this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const r = await this._uiManager.imageManager.getFromFile(e.files[0]);
        this._reportTelemetry({
          action: "pdfjs.image.image_selected",
          data: {
            alt_text_modal: this._uiManager.useNewAltTextFlow
          }
        }), x(this, Et, Fh).call(this, r);
      }
      s();
    }, {
      signal: i
    }), e.addEventListener("cancel", () => {
      this.remove(), s();
    }, {
      signal: i
    });
  }).finally(() => x(this, Et, Nh).call(this))), e.click();
}, Eu = function() {
  var c;
  const {
    div: e
  } = this;
  let {
    width: i,
    height: s
  } = n(this, qt);
  const [r, a] = this.pageDimensions, o = 0.75;
  if (this.width)
    i = this.width * r, s = this.height * a;
  else if (i > o * r || s > o * a) {
    const d = Math.min(o * r / i, o * a / s);
    i *= d, s *= d;
  }
  this._uiManager.enableWaiting(!1);
  const l = m(this, Tn, document.createElement("canvas"));
  l.setAttribute("role", "img"), this.addContainer(l), this.width = i / r, this.height = s / a, this.setDims(), (c = this._initialOptions) != null && c.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1), x(this, Et, hg).call(this), n(this, Zl) || (this.parent.addUndoableEditor(this), m(this, Zl, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), n(this, Ql) && this.div.setAttribute("aria-description", n(this, Ql)), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-stamp-added-alert");
}, Cu = function(e, i) {
  const {
    width: s,
    height: r
  } = n(this, qt);
  let a = s, o = r, l = n(this, qt);
  for (; a > 2 * e || o > 2 * i; ) {
    const c = a, d = o;
    a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), o > 2 * i && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
    const u = new OffscreenCanvas(a, o);
    u.getContext("2d").drawImage(l, 0, 0, c, d, 0, 0, a, o), l = u.transferToImageBitmap();
  }
  return l;
}, hg = function() {
  const [e, i] = this.parentDimensions, {
    width: s,
    height: r
  } = this, a = new cs(), o = Math.ceil(s * e * a.sx), l = Math.ceil(r * i * a.sy), c = n(this, Tn);
  if (!c || c.width === o && c.height === l)
    return;
  c.width = o, c.height = l;
  const d = n(this, _i) ? n(this, qt) : x(this, Et, Cu).call(this, o, l), u = c.getContext("2d");
  u.filter = this._uiManager.hcmFilter, u.drawImage(d, 0, 0, d.width, d.height, 0, 0, o, l);
}, Tu = function(e) {
  if (e) {
    if (n(this, _i)) {
      const r = this._uiManager.imageManager.getSvgUrl(n(this, Se));
      if (r)
        return r;
    }
    const i = document.createElement("canvas");
    return {
      width: i.width,
      height: i.height
    } = n(this, qt), i.getContext("2d").drawImage(n(this, qt), 0, 0), i.toDataURL();
  }
  if (n(this, _i)) {
    const [i, s] = this.pageDimensions, r = Math.round(this.width * i * In.PDF_TO_CSS_UNITS), a = Math.round(this.height * s * In.PDF_TO_CSS_UNITS), o = new OffscreenCanvas(r, a);
    return o.getContext("2d").drawImage(n(this, qt), 0, 0, n(this, qt).width, n(this, qt).height, 0, 0, r, a), o.transferToImageBitmap();
  }
  return structuredClone(n(this, qt));
}, ov = function(e) {
  var o;
  const {
    pageIndex: i,
    accessibilityData: {
      altText: s
    }
  } = this._initialData, r = e.pageIndex === i, a = (((o = e.accessibilityData) == null ? void 0 : o.alt) || "") === s;
  return {
    isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && r && a,
    isSameAltText: a
  };
}, V(lg, "_type", "stamp"), V(lg, "_editorType", ft.STAMP);
var ao, th, Rr, Mr, Pn, ri, Lr, eh, ih, rs, kn, Ae, Rn, Dr, sh, it, Or, Ht, cg, lv, gs, dg, ug, Pu;
const Xi = class Xi {
  constructor({
    uiManager: t,
    pageIndex: e,
    div: i,
    structTreeLayer: s,
    accessibilityManager: r,
    annotationLayer: a,
    drawLayer: o,
    textLayer: l,
    viewport: c,
    l10n: d
  }) {
    v(this, Ht);
    v(this, ao);
    v(this, th, !1);
    v(this, Rr, null);
    v(this, Mr, null);
    v(this, Pn, null);
    v(this, ri, /* @__PURE__ */ new Map());
    v(this, Lr, !1);
    v(this, eh, !1);
    v(this, ih, !1);
    v(this, rs, null);
    v(this, kn, null);
    v(this, Ae, null);
    v(this, Rn, null);
    v(this, Dr, null);
    v(this, sh, -1);
    v(this, it);
    const u = [...n(Xi, Or).values()];
    if (!Xi._initialized) {
      Xi._initialized = !0;
      for (const g of u)
        g.initialize(d, t);
    }
    t.registerEditorTypes(u), m(this, it, t), this.pageIndex = e, this.div = i, m(this, ao, r), m(this, Rr, a), this.viewport = c, m(this, Ae, l), this.drawLayer = o, this._structTree = s, n(this, it).addLayer(this);
  }
  get isEmpty() {
    return n(this, ri).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && n(this, it).getMode() === ft.NONE;
  }
  updateToolbar(t) {
    n(this, it).updateToolbar(t);
  }
  updateMode(t = n(this, it).getMode()) {
    switch (x(this, Ht, Pu).call(this), t) {
      case ft.NONE:
        this.div.classList.toggle("nonEditing", !0), this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case ft.INK:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
        break;
      case ft.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: e
    } = this.div;
    if (e.toggle("nonEditing", !1), t === ft.POPUP)
      e.toggle("commentEditing", !0);
    else {
      e.toggle("commentEditing", !1);
      for (const i of n(Xi, Or).values())
        e.toggle(`${i._type}Editing`, t === i._editorType);
    }
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    var e;
    return t === ((e = n(this, Ae)) == null ? void 0 : e.div);
  }
  setEditingState(t) {
    n(this, it).setEditingState(t);
  }
  addCommands(t) {
    n(this, it).addCommands(t);
  }
  cleanUndoStack(t) {
    n(this, it).cleanUndoStack(t);
  }
  toggleDrawing(t = !1) {
    this.div.classList.toggle("drawing", !t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    var e;
    (e = n(this, Rr)) == null || e.div.classList.toggle("disabled", !t);
  }
  async enable() {
    var i;
    m(this, ih, !0), this.div.tabIndex = 0, this.togglePointerEvents(!0), this.div.classList.toggle("nonEditing", !1), (i = n(this, Dr)) == null || i.abort(), m(this, Dr, null);
    const t = /* @__PURE__ */ new Set();
    for (const s of n(this, Ht, cg))
      s.enableEditing(), s.show(!0), s.annotationElementId && (n(this, it).removeChangedExistingAnnotation(s), t.add(s.annotationElementId));
    const e = n(this, Rr);
    if (e)
      for (const s of e.getEditableAnnotations()) {
        if (s.hide(), n(this, it).isDeletedAnnotationElement(s.data.id) || t.has(s.data.id))
          continue;
        const r = await this.deserialize(s);
        r && (this.addOrRebuild(r), r.enableEditing());
      }
    m(this, ih, !1), n(this, it)._eventBus.dispatch("editorsrendered", {
      source: this,
      pageNumber: this.pageIndex + 1
    });
  }
  disable() {
    var i;
    if (m(this, eh, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1), this.div.classList.toggle("nonEditing", !0), n(this, Ae) && !n(this, Dr)) {
      m(this, Dr, new AbortController());
      const s = n(this, it).combinedSignal(n(this, Dr));
      n(this, Ae).div.addEventListener("pointerdown", (r) => {
        const {
          clientX: o,
          clientY: l,
          timeStamp: c
        } = r, d = n(this, sh);
        if (c - d > 500) {
          m(this, sh, c);
          return;
        }
        m(this, sh, -1);
        const {
          classList: u
        } = this.div;
        u.toggle("getElements", !0);
        const g = document.elementsFromPoint(o, l);
        if (u.toggle("getElements", !1), !this.div.contains(g[0]))
          return;
        let b;
        const E = new RegExp(`^${jh}[0-9]+$`);
        for (const M of g)
          if (E.test(M.id)) {
            b = M.id;
            break;
          }
        if (!b)
          return;
        const w = n(this, ri).get(b);
        (w == null ? void 0 : w.annotationElementId) === null && (r.stopPropagation(), r.preventDefault(), w.dblclick(r));
      }, {
        signal: s,
        capture: !0
      });
    }
    const t = n(this, Rr);
    if (t) {
      const s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
      for (const o of n(this, Ht, cg)) {
        if (o.disableEditing(), !o.annotationElementId) {
          o.updateFakeAnnotationElement(t);
          continue;
        }
        if (o.serialize() !== null) {
          s.set(o.annotationElementId, o);
          continue;
        } else
          r.set(o.annotationElementId, o);
        (i = this.getEditableAnnotation(o.annotationElementId)) == null || i.show(), o.remove();
      }
      const a = t.getEditableAnnotations();
      for (const o of a) {
        const {
          id: l
        } = o.data;
        if (n(this, it).isDeletedAnnotationElement(l)) {
          o.updateEdited({
            deleted: !0
          });
          continue;
        }
        let c = r.get(l);
        if (c) {
          c.resetAnnotationElement(o), c.show(!1), o.show();
          continue;
        }
        c = s.get(l), c && (n(this, it).addChangedExistingAnnotation(c), c.renderAnnotationElement(o) && c.show(!1)), o.show();
      }
    }
    x(this, Ht, Pu).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: e
    } = this.div;
    for (const s of n(Xi, Or).values())
      e.remove(`${s._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), m(this, eh, !1);
  }
  getEditableAnnotation(t) {
    var e;
    return ((e = n(this, Rr)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }
  setActiveEditor(t) {
    n(this, it).getActive() !== t && n(this, it).setActiveEditor(t);
  }
  enableTextSelection() {
    var t;
    if (this.div.tabIndex = -1, (t = n(this, Ae)) != null && t.div && !n(this, Rn)) {
      m(this, Rn, new AbortController());
      const e = n(this, it).combinedSignal(n(this, Rn));
      n(this, Ae).div.addEventListener("pointerdown", x(this, Ht, lv).bind(this), {
        signal: e
      }), n(this, Ae).div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    var t;
    this.div.tabIndex = 0, (t = n(this, Ae)) != null && t.div && n(this, Rn) && (n(this, Rn).abort(), m(this, Rn, null), n(this, Ae).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (n(this, Mr))
      return;
    m(this, Mr, new AbortController());
    const t = n(this, it).combinedSignal(n(this, Mr));
    this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
      signal: t
    });
    const e = this.pointerup.bind(this);
    this.div.addEventListener("pointerup", e, {
      signal: t
    }), this.div.addEventListener("pointercancel", e, {
      signal: t
    });
  }
  disableClick() {
    var t;
    (t = n(this, Mr)) == null || t.abort(), m(this, Mr, null);
  }
  attach(t) {
    n(this, ri).set(t.id, t);
    const {
      annotationElementId: e
    } = t;
    e && n(this, it).isDeletedAnnotationElement(e) && n(this, it).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    var e;
    n(this, ri).delete(t.id), (e = n(this, ao)) == null || e.removePointerInTextLayer(t.contentDiv), !n(this, eh) && t.annotationElementId && n(this, it).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), n(this, it).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1;
  }
  changeParent(t) {
    var e;
    t.parent !== this && (t.parent && t.annotationElementId && (n(this, it).addDeletedAnnotationElement(t.annotationElementId), Ut.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), n(this, it).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(!n(this, ih)), n(this, it).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    var i;
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: e
    } = document;
    t.div.contains(e) && !n(this, Pn) && (t._focusEventsAllowed = !1, m(this, Pn, setTimeout(() => {
      m(this, Pn, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: n(this, it)._signal
      }), e.focus());
    }, 0))), t._structTreeParentId = (i = n(this, ao)) == null ? void 0 : i.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
  }
  addOrRebuild(t) {
    t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t);
  }
  addUndoableEditor(t) {
    const e = () => t._uiManager.rebuild(t), i = () => {
      t.remove();
    };
    this.addCommands({
      cmd: e,
      undo: i,
      mustExec: !1
    });
  }
  getEditorByUID(t) {
    for (const e of n(this, ri).values())
      if (e.uid === t)
        return e;
    return null;
  }
  getNextId() {
    return n(this, it).getId();
  }
  combinedSignal(t) {
    return n(this, it).combinedSignal(t);
  }
  canCreateNewEmptyEditor() {
    var t;
    return (t = n(this, Ht, gs)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }
  async pasteEditor(t, e) {
    this.updateToolbar(t), await n(this, it).updateMode(t.mode);
    const {
      offsetX: i,
      offsetY: s
    } = x(this, Ht, ug).call(this), r = this.getNextId(), a = x(this, Ht, dg).call(this, {
      parent: this,
      id: r,
      x: i,
      y: s,
      uiManager: n(this, it),
      isCentered: !0,
      ...e
    });
    a && this.add(a);
  }
  async deserialize(t) {
    var e;
    return await ((e = n(Xi, Or).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, n(this, it))) || null;
  }
  createAndAddNewEditor(t, e, i = {}) {
    const s = this.getNextId(), r = x(this, Ht, dg).call(this, {
      parent: this,
      id: s,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: n(this, it),
      isCentered: e,
      ...i
    });
    return r && this.add(r), r;
  }
  get boundingClientRect() {
    return this.div.getBoundingClientRect();
  }
  addNewEditor(t = {}) {
    this.createAndAddNewEditor(x(this, Ht, ug).call(this), !0, t);
  }
  setSelected(t) {
    n(this, it).setSelected(t);
  }
  toggleSelected(t) {
    n(this, it).toggleSelected(t);
  }
  unselect(t) {
    n(this, it).unselect(t);
  }
  pointerup(t) {
    var s;
    const {
      isMac: e
    } = xe.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div || !n(this, Lr) || (m(this, Lr, !1), (s = n(this, Ht, gs)) != null && s.isDrawer && n(this, Ht, gs).supportMultipleDrawings))
      return;
    if (!n(this, th)) {
      m(this, th, !0);
      return;
    }
    const i = n(this, it).getMode();
    if (i === ft.STAMP || i === ft.SIGNATURE) {
      n(this, it).unselectAll();
      return;
    }
    this.createAndAddNewEditor(t, !1);
  }
  pointerdown(t) {
    var s;
    if (n(this, it).getMode() === ft.HIGHLIGHT && this.enableTextSelection(), n(this, Lr)) {
      m(this, Lr, !1);
      return;
    }
    const {
      isMac: e
    } = xe.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div)
      return;
    if (m(this, Lr, !0), (s = n(this, Ht, gs)) != null && s.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const i = n(this, it).getActive();
    m(this, th, !i || i.isEmpty());
  }
  startDrawingSession(t) {
    if (this.div.focus({
      preventScroll: !0
    }), n(this, rs)) {
      n(this, Ht, gs).startDrawing(this, n(this, it), !1, t);
      return;
    }
    n(this, it).setCurrentDrawingSession(this), m(this, rs, new AbortController());
    const e = n(this, it).combinedSignal(n(this, rs));
    this.div.addEventListener("blur", ({
      relatedTarget: i
    }) => {
      i && !this.div.contains(i) && (m(this, kn, null), this.commitOrRemove());
    }, {
      signal: e
    }), n(this, Ht, gs).startDrawing(this, n(this, it), !1, t);
  }
  pause(t) {
    if (t) {
      const {
        activeElement: e
      } = document;
      this.div.contains(e) && m(this, kn, e);
      return;
    }
    n(this, kn) && setTimeout(() => {
      var e;
      (e = n(this, kn)) == null || e.focus(), m(this, kn, null);
    }, 0);
  }
  endDrawingSession(t = !1) {
    return n(this, rs) ? (n(this, it).setCurrentDrawingSession(null), n(this, rs).abort(), m(this, rs, null), m(this, kn, null), n(this, Ht, gs).endDrawing(t)) : null;
  }
  findNewParent(t, e, i) {
    const s = n(this, it).findParent(e, i);
    return s === null || s === this ? !1 : (s.changeParent(t), !0);
  }
  commitOrRemove() {
    return n(this, rs) ? (this.endDrawingSession(), !0) : !1;
  }
  onScaleChanging() {
    n(this, rs) && n(this, Ht, gs).onScaleChangingWhenDrawing(this);
  }
  destroy() {
    var t, e;
    this.commitOrRemove(), ((t = n(this, it).getActive()) == null ? void 0 : t.parent) === this && (n(this, it).commitOrRemove(), n(this, it).setActiveEditor(null)), n(this, Pn) && (clearTimeout(n(this, Pn)), m(this, Pn, null));
    for (const i of n(this, ri).values())
      (e = n(this, ao)) == null || e.removePointerInTextLayer(i.contentDiv), i.setParent(null), i.isAttachedToDOM = !1, i.div.remove();
    this.div = null, n(this, ri).clear(), n(this, it).removeLayer(this);
  }
  render({
    viewport: t
  }) {
    this.viewport = t, Fr(this.div, t);
    for (const e of n(this, it).getEditors(this.pageIndex))
      this.add(e), e.rebuild();
    this.updateMode();
  }
  update({
    viewport: t
  }) {
    n(this, it).commitOrRemove(), x(this, Ht, Pu).call(this);
    const e = this.viewport.rotation, i = t.rotation;
    if (this.viewport = t, Fr(this.div, {
      rotation: i
    }), e !== i)
      for (const s of n(this, ri).values())
        s.rotate(i);
  }
  get pageDimensions() {
    const {
      pageWidth: t,
      pageHeight: e
    } = this.viewport.rawDims;
    return [t, e];
  }
  get scale() {
    return n(this, it).viewParameters.realScale;
  }
};
ao = new WeakMap(), th = new WeakMap(), Rr = new WeakMap(), Mr = new WeakMap(), Pn = new WeakMap(), ri = new WeakMap(), Lr = new WeakMap(), eh = new WeakMap(), ih = new WeakMap(), rs = new WeakMap(), kn = new WeakMap(), Ae = new WeakMap(), Rn = new WeakMap(), Dr = new WeakMap(), sh = new WeakMap(), it = new WeakMap(), Or = new WeakMap(), Ht = new WeakSet(), cg = function() {
  return n(this, ri).size !== 0 ? n(this, ri).values() : n(this, it).getEditors(this.pageIndex);
}, lv = function(t) {
  n(this, it).unselectAll();
  const {
    target: e
  } = t;
  if (e === n(this, Ae).div || (e.getAttribute("role") === "img" || e.classList.contains("endOfContent")) && n(this, Ae).div.contains(e)) {
    const {
      isMac: i
    } = xe.platform;
    if (t.button !== 0 || t.ctrlKey && i)
      return;
    n(this, it).showAllEditors("highlight", !0, !0), n(this, Ae).div.classList.add("free"), this.toggleDrawing(), Hu.startHighlighting(this, n(this, it).direction === "ltr", {
      target: n(this, Ae).div,
      x: t.x,
      y: t.y
    }), n(this, Ae).div.addEventListener("pointerup", () => {
      n(this, Ae).div.classList.remove("free"), this.toggleDrawing(!0);
    }, {
      once: !0,
      signal: n(this, it)._signal
    }), t.preventDefault();
  }
}, gs = function() {
  return n(Xi, Or).get(n(this, it).getMode());
}, dg = function(t) {
  const e = n(this, Ht, gs);
  return e ? new e.prototype.constructor(t) : null;
}, ug = function() {
  const {
    x: t,
    y: e,
    width: i,
    height: s
  } = this.boundingClientRect, r = Math.max(0, t), a = Math.max(0, e), o = Math.min(window.innerWidth, t + i), l = Math.min(window.innerHeight, e + s), c = (r + o) / 2 - t, d = (a + l) / 2 - e, [u, g] = this.viewport.rotation % 180 === 0 ? [c, d] : [d, c];
  return {
    offsetX: u,
    offsetY: g
  };
}, Pu = function() {
  for (const t of n(this, ri).values())
    t.isEmpty() && t.remove();
}, V(Xi, "_initialized", !1), v(Xi, Or, new Map([Gp, eg, lg, Hu, og].map((t) => [t._editorType, t])));
let zu = Xi;
var as, qe, oo, Td, lf, hv, $s, fg, cv, pg;
const ue = class ue {
  constructor({
    pageIndex: t
  }) {
    v(this, $s);
    v(this, as, null);
    v(this, qe, /* @__PURE__ */ new Map());
    v(this, oo, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }
  setParent(t) {
    if (!n(this, as)) {
      m(this, as, t);
      return;
    }
    if (n(this, as) !== t) {
      if (n(this, qe).size > 0)
        for (const e of n(this, qe).values())
          e.remove(), t.append(e);
      m(this, as, t);
    }
  }
  static get _svgFactory() {
    return yt(this, "_svgFactory", new qh());
  }
  draw(t, e = !1, i = !1) {
    const s = de(ue, Td)._++, r = x(this, $s, fg).call(this), a = ue._svgFactory.createElement("defs");
    r.append(a);
    const o = ue._svgFactory.createElement("path");
    a.append(o);
    const l = `path_p${this.pageIndex}_${s}`;
    o.setAttribute("id", l), o.setAttribute("vector-effect", "non-scaling-stroke"), e && n(this, oo).set(s, o);
    const c = i ? x(this, $s, cv).call(this, a, l) : null, d = ue._svgFactory.createElement("use");
    return r.append(d), d.setAttribute("href", `#${l}`), this.updateProperties(r, t), n(this, qe).set(s, r), {
      id: s,
      clipPathId: `url(#${c})`
    };
  }
  drawOutline(t, e) {
    const i = de(ue, Td)._++, s = x(this, $s, fg).call(this), r = ue._svgFactory.createElement("defs");
    s.append(r);
    const a = ue._svgFactory.createElement("path");
    r.append(a);
    const o = `path_p${this.pageIndex}_${i}`;
    a.setAttribute("id", o), a.setAttribute("vector-effect", "non-scaling-stroke");
    let l;
    if (e) {
      const u = ue._svgFactory.createElement("mask");
      r.append(u), l = `mask_p${this.pageIndex}_${i}`, u.setAttribute("id", l), u.setAttribute("maskUnits", "objectBoundingBox");
      const g = ue._svgFactory.createElement("rect");
      u.append(g), g.setAttribute("width", "1"), g.setAttribute("height", "1"), g.setAttribute("fill", "white");
      const b = ue._svgFactory.createElement("use");
      u.append(b), b.setAttribute("href", `#${o}`), b.setAttribute("stroke", "none"), b.setAttribute("fill", "black"), b.setAttribute("fill-rule", "nonzero"), b.classList.add("mask");
    }
    const c = ue._svgFactory.createElement("use");
    s.append(c), c.setAttribute("href", `#${o}`), l && c.setAttribute("mask", `url(#${l})`);
    const d = c.cloneNode();
    return s.append(d), c.classList.add("mainOutline"), d.classList.add("secondaryOutline"), this.updateProperties(s, t), n(this, qe).set(i, s), i;
  }
  finalizeDraw(t, e) {
    n(this, oo).delete(t), this.updateProperties(t, e);
  }
  updateProperties(t, e) {
    var l;
    if (!e)
      return;
    const {
      root: i,
      bbox: s,
      rootClass: r,
      path: a
    } = e, o = typeof t == "number" ? n(this, qe).get(t) : t;
    if (o) {
      if (i && x(this, $s, pg).call(this, o, i), s && x(l = ue, lf, hv).call(l, o, s), r) {
        const {
          classList: c
        } = o;
        for (const [d, u] of Object.entries(r))
          c.toggle(d, u);
      }
      if (a) {
        const d = o.firstChild.firstChild;
        x(this, $s, pg).call(this, d, a);
      }
    }
  }
  updateParent(t, e) {
    if (e === this)
      return;
    const i = n(this, qe).get(t);
    i && (n(e, as).append(i), n(this, qe).delete(t), n(e, qe).set(t, i));
  }
  remove(t) {
    n(this, oo).delete(t), n(this, as) !== null && (n(this, qe).get(t).remove(), n(this, qe).delete(t));
  }
  destroy() {
    m(this, as, null);
    for (const t of n(this, qe).values())
      t.remove();
    n(this, qe).clear(), n(this, oo).clear();
  }
};
as = new WeakMap(), qe = new WeakMap(), oo = new WeakMap(), Td = new WeakMap(), lf = new WeakSet(), hv = function(t, [e, i, s, r]) {
  const {
    style: a
  } = t;
  a.top = `${100 * i}%`, a.left = `${100 * e}%`, a.width = `${100 * s}%`, a.height = `${100 * r}%`;
}, $s = new WeakSet(), fg = function() {
  const t = ue._svgFactory.create(1, 1, !0);
  return n(this, as).append(t), t.setAttribute("aria-hidden", !0), t;
}, cv = function(t, e) {
  const i = ue._svgFactory.createElement("clipPath");
  t.append(i);
  const s = `clip_${e}`;
  i.setAttribute("id", s), i.setAttribute("clipPathUnits", "objectBoundingBox");
  const r = ue._svgFactory.createElement("use");
  return i.append(r), r.setAttribute("href", `#${e}`), r.classList.add("clip"), s;
}, pg = function(t, e) {
  for (const [i, s] of Object.entries(e))
    s === null ? t.removeAttribute(i) : t.setAttribute(i, s);
}, v(ue, lf), v(ue, Td, 0);
let $u = ue;
globalThis._pdfjsTestingUtils = {
  HighlightOutliner: qp
};
globalThis.pdfjsLib = {
  AbortException: On,
  AnnotationEditorLayer: zu,
  AnnotationEditorParamsType: At,
  AnnotationEditorType: ft,
  AnnotationEditorUIManager: Nr,
  AnnotationLayer: Mg,
  AnnotationMode: Hs,
  AnnotationType: se,
  applyOpacity: oy,
  build: db,
  ColorPicker: Vh,
  createValidAbsoluteUrl: bg,
  CSSConstants: ay,
  DOMSVGFactory: qh,
  DrawLayer: $u,
  FeatureTest: xe,
  fetchData: lh,
  findContrastColor: ly,
  getDocument: Tg,
  getFilenameFromUrl: sy,
  getPdfFilenameFromUrl: ny,
  getRGB: hh,
  getUuid: wg,
  getXfaPageViewport: ry,
  GlobalWorkerOptions: os,
  ImageKind: Hh,
  InvalidPDFException: Mu,
  isDataScheme: Ld,
  isPdfFile: pf,
  isValidExplicitDest: zy,
  MathClamp: ze,
  noContextMenu: Ri,
  normalizeUnicode: ey,
  OPS: rh,
  OutputScale: cs,
  PasswordResponses: Zm,
  PDFDataRangeTransport: Pg,
  PDFDateString: Uh,
  PDFWorker: ah,
  PermissionFlag: Qm,
  PixelsPerInch: In,
  RenderingCancelledException: ff,
  renderRichText: xg,
  ResponseException: zh,
  setLayerDimensions: Fr,
  shadow: yt,
  SignatureExtractor: js,
  stopEvent: Kt,
  SupportedImageMimeTypes: Lu,
  TextLayer: Gh,
  TouchManager: Wh,
  updateUrlHash: vg,
  Util: tt,
  VerbosityLevel: kd,
  version: cb,
  XfaLayer: Ag
};
const dv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbortException: On,
  AnnotationEditorLayer: zu,
  AnnotationEditorParamsType: At,
  AnnotationEditorType: ft,
  AnnotationEditorUIManager: Nr,
  AnnotationLayer: Mg,
  AnnotationMode: Hs,
  AnnotationType: se,
  CSSConstants: ay,
  ColorPicker: Vh,
  DOMSVGFactory: qh,
  DrawLayer: $u,
  FeatureTest: xe,
  GlobalWorkerOptions: os,
  ImageKind: Hh,
  InvalidPDFException: Mu,
  MathClamp: ze,
  OPS: rh,
  OutputScale: cs,
  PDFDataRangeTransport: Pg,
  PDFDateString: Uh,
  PDFWorker: ah,
  PasswordResponses: Zm,
  PermissionFlag: Qm,
  PixelsPerInch: In,
  RenderingCancelledException: ff,
  ResponseException: zh,
  SignatureExtractor: js,
  SupportedImageMimeTypes: Lu,
  TextLayer: Gh,
  TouchManager: Wh,
  Util: tt,
  VerbosityLevel: kd,
  XfaLayer: Ag,
  applyOpacity: oy,
  build: db,
  createValidAbsoluteUrl: bg,
  fetchData: lh,
  findContrastColor: ly,
  getDocument: Tg,
  getFilenameFromUrl: sy,
  getPdfFilenameFromUrl: ny,
  getRGB: hh,
  getUuid: wg,
  getXfaPageViewport: ry,
  isDataScheme: Ld,
  isPdfFile: pf,
  isValidExplicitDest: zy,
  noContextMenu: Ri,
  normalizeUnicode: ey,
  renderRichText: xg,
  setLayerDimensions: Fr,
  shadow: yt,
  stopEvent: Kt,
  updateUrlHash: vg,
  version: cb
}, Symbol.toStringTag, { value: "Module" }));
function uv(h) {
  var t, e, i = "";
  if (typeof h == "string" || typeof h == "number") i += h;
  else if (typeof h == "object") if (Array.isArray(h)) {
    var s = h.length;
    for (t = 0; t < s; t++) h[t] && (e = uv(h[t])) && (i && (i += " "), i += e);
  } else for (e in h) h[e] && (i && (i += " "), i += e);
  return i;
}
function yf() {
  for (var h, t, e = 0, i = "", s = arguments.length; e < s; e++) (h = arguments[e]) && (t = uv(h)) && (i && (i += " "), i += t);
  return i;
}
var km = Object.prototype.hasOwnProperty;
function Rm(h, t, e) {
  for (e of h.keys())
    if (Ro(e, t)) return e;
}
function Ro(h, t) {
  var e, i, s;
  if (h === t) return !0;
  if (h && t && (e = h.constructor) === t.constructor) {
    if (e === Date) return h.getTime() === t.getTime();
    if (e === RegExp) return h.toString() === t.toString();
    if (e === Array) {
      if ((i = h.length) === t.length)
        for (; i-- && Ro(h[i], t[i]); ) ;
      return i === -1;
    }
    if (e === Set) {
      if (h.size !== t.size)
        return !1;
      for (i of h)
        if (s = i, s && typeof s == "object" && (s = Rm(t, s), !s) || !t.has(s)) return !1;
      return !0;
    }
    if (e === Map) {
      if (h.size !== t.size)
        return !1;
      for (i of h)
        if (s = i[0], s && typeof s == "object" && (s = Rm(t, s), !s) || !Ro(i[1], t.get(s)))
          return !1;
      return !0;
    }
    if (e === ArrayBuffer)
      h = new Uint8Array(h), t = new Uint8Array(t);
    else if (e === DataView) {
      if ((i = h.byteLength) === t.byteLength)
        for (; i-- && h.getInt8(i) === t.getInt8(i); ) ;
      return i === -1;
    }
    if (ArrayBuffer.isView(h)) {
      if ((i = h.byteLength) === t.byteLength)
        for (; i-- && h[i] === t[i]; ) ;
      return i === -1;
    }
    if (!e || typeof h == "object") {
      i = 0;
      for (e in h)
        if (km.call(h, e) && ++i && !km.call(t, e) || !(e in t) || !Ro(h[e], t[e])) return !1;
      return Object.keys(t).length === i;
    }
  }
  return h !== h && t !== t;
}
function Fd(h) {
  let t = !1;
  return {
    promise: new Promise((i, s) => {
      h.then((r) => !t && i(r)).catch((r) => !t && s(r));
    }),
    cancel() {
      t = !0;
    }
  };
}
const hS = ["onCopy", "onCut", "onPaste"], cS = [
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate"
], dS = ["onFocus", "onBlur"], uS = ["onInput", "onInvalid", "onReset", "onSubmit"], fS = ["onLoad", "onError"], pS = ["onKeyDown", "onKeyPress", "onKeyUp"], gS = [
  "onAbort",
  "onCanPlay",
  "onCanPlayThrough",
  "onDurationChange",
  "onEmptied",
  "onEncrypted",
  "onEnded",
  "onError",
  "onLoadedData",
  "onLoadedMetadata",
  "onLoadStart",
  "onPause",
  "onPlay",
  "onPlaying",
  "onProgress",
  "onRateChange",
  "onSeeked",
  "onSeeking",
  "onStalled",
  "onSuspend",
  "onTimeUpdate",
  "onVolumeChange",
  "onWaiting"
], mS = [
  "onClick",
  "onContextMenu",
  "onDoubleClick",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp"
], yS = [
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop"
], bS = ["onSelect"], vS = ["onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart"], wS = [
  "onPointerDown",
  "onPointerMove",
  "onPointerUp",
  "onPointerCancel",
  "onGotPointerCapture",
  "onLostPointerCapture",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut"
], SS = ["onScroll"], AS = ["onWheel"], xS = [
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration"
], _S = ["onTransitionEnd"], ES = ["onToggle"], CS = ["onChange"], TS = [
  ...hS,
  ...cS,
  ...dS,
  ...uS,
  ...fS,
  ...pS,
  ...gS,
  ...mS,
  ...yS,
  ...bS,
  ...vS,
  ...wS,
  ...SS,
  ...AS,
  ...xS,
  ..._S,
  ...CS,
  ...ES
];
function fv(h, t) {
  const e = {};
  for (const i of TS) {
    const s = h[i];
    s && (t ? e[i] = ((r) => s(r, t(i))) : e[i] = s);
  }
  return e;
}
var PS = process.env.NODE_ENV === "production", jf = "Invariant failed";
function Bt(h, t) {
  if (!h) {
    if (PS)
      throw new Error(jf);
    var e = typeof t == "function" ? t() : t, i = e ? "".concat(jf, ": ").concat(e) : jf;
    throw new Error(i);
  }
}
var zf, Mm;
function kS() {
  if (Mm) return zf;
  Mm = 1;
  var h = process.env.NODE_ENV !== "production", t = function() {
  };
  if (h) {
    var e = function(s, r) {
      var a = arguments.length;
      r = new Array(a > 1 ? a - 1 : 0);
      for (var o = 1; o < a; o++)
        r[o - 1] = arguments[o];
      var l = 0, c = "Warning: " + s.replace(/%s/g, function() {
        return r[l++];
      });
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
    t = function(i, s, r) {
      var a = arguments.length;
      r = new Array(a > 2 ? a - 2 : 0);
      for (var o = 2; o < a; o++)
        r[o - 2] = arguments[o];
      if (s === void 0)
        throw new Error(
          "`warning(condition, format, ...args)` requires a warning message argument"
        );
      i || e.apply(null, [s].concat(r));
    };
  }
  return zf = t, zf;
}
var RS = kS();
const $e = /* @__PURE__ */ Wm(RS), pv = zm(null), MS = "noopener noreferrer nofollow";
class LS {
  constructor() {
    this.externalLinkEnabled = !0, this.externalLinkRel = void 0, this.externalLinkTarget = void 0, this.isInPresentationMode = !1, this.pdfDocument = void 0, this.pdfViewer = void 0;
  }
  setDocument(t) {
    this.pdfDocument = t;
  }
  setViewer(t) {
    this.pdfViewer = t;
  }
  setExternalLinkRel(t) {
    this.externalLinkRel = t;
  }
  setExternalLinkTarget(t) {
    this.externalLinkTarget = t;
  }
  setHash() {
  }
  setHistory() {
  }
  get pagesCount() {
    return this.pdfDocument ? this.pdfDocument.numPages : 0;
  }
  get page() {
    return Bt(this.pdfViewer, "PDF viewer is not initialized."), this.pdfViewer.currentPageNumber || 0;
  }
  set page(t) {
    Bt(this.pdfViewer, "PDF viewer is not initialized."), this.pdfViewer.currentPageNumber = t;
  }
  get rotation() {
    return 0;
  }
  set rotation(t) {
  }
  addLinkAttributes(t, e, i) {
    t.href = e, t.rel = this.externalLinkRel || MS, t.target = i ? "_blank" : this.externalLinkTarget || "";
  }
  goToDestination(t) {
    return new Promise((e) => {
      Bt(this.pdfDocument, "PDF document not loaded."), Bt(t, "Destination is not specified."), typeof t == "string" ? this.pdfDocument.getDestination(t).then(e) : Array.isArray(t) ? e(t) : t.then(e);
    }).then((e) => {
      Bt(Array.isArray(e), `"${e}" is not a valid destination array.`);
      const i = e[0];
      new Promise((s) => {
        Bt(this.pdfDocument, "PDF document not loaded."), i instanceof Object ? this.pdfDocument.getPageIndex(i).then((r) => {
          s(r);
        }).catch(() => {
          Bt(!1, `"${i}" is not a valid page reference.`);
        }) : typeof i == "number" ? s(i) : Bt(!1, `"${i}" is not a valid destination reference.`);
      }).then((s) => {
        const r = s + 1;
        Bt(this.pdfViewer, "PDF viewer is not initialized."), Bt(r >= 1 && r <= this.pagesCount, `"${r}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
          dest: e,
          pageIndex: s,
          pageNumber: r
        });
      });
    });
  }
  goToPage(t) {
    const e = t - 1;
    Bt(this.pdfViewer, "PDF viewer is not initialized."), Bt(t >= 1 && t <= this.pagesCount, `"${t}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
      pageIndex: e,
      pageNumber: t
    });
  }
  goToXY() {
  }
  cachePageRef() {
  }
  getDestinationHash() {
    return "#";
  }
  getAnchorUrl() {
    return "#";
  }
  executeNamedAction() {
  }
  executeSetOCGState() {
  }
  isPageVisible() {
    return !0;
  }
  isPageCached() {
    return !0;
  }
  navigateTo(t) {
    this.goToDestination(t);
  }
}
function Mo({ children: h, type: t }) {
  return q("div", { className: `react-pdf__message react-pdf__message--${t}`, children: h });
}
const gg = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
function DS(h, t) {
  switch (t.type) {
    case "RESOLVE":
      return { value: t.value, error: void 0 };
    case "REJECT":
      return { value: !1, error: t.error };
    case "RESET":
      return { value: void 0, error: void 0 };
    default:
      return h;
  }
}
function oh() {
  return Mv(DS, { value: void 0, error: void 0 });
}
const bf = typeof window < "u", gv = bf && window.location.protocol === "file:";
function OS(h) {
  return typeof h < "u";
}
function Ur(h) {
  return OS(h) && h !== null;
}
function IS(h) {
  return typeof h == "string";
}
function FS(h) {
  return h instanceof ArrayBuffer;
}
function NS(h) {
  return Bt(bf, "isBlob can only be used in a browser environment"), h instanceof Blob;
}
function mg(h) {
  return IS(h) && /^data:/.test(h);
}
function Lm(h) {
  Bt(mg(h), "Invalid data URI.");
  const [t = "", e = ""] = h.split(",");
  return t.split(";").indexOf("base64") !== -1 ? atob(e) : unescape(e);
}
function BS() {
  return bf && window.devicePixelRatio || 1;
}
const mv = "On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.";
function Dm() {
  $e(!gv, `Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ${mv}`);
}
function HS() {
  $e(!gv, `Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ${mv}`);
}
function ho(h) {
  h != null && h.cancel && h.cancel();
}
function yg(h, t) {
  return Object.defineProperty(h, "width", {
    get() {
      return this.getViewport({ scale: t }).width;
    },
    configurable: !0
  }), Object.defineProperty(h, "height", {
    get() {
      return this.getViewport({ scale: t }).height;
    },
    configurable: !0
  }), Object.defineProperty(h, "originalWidth", {
    get() {
      return this.getViewport({ scale: 1 }).width;
    },
    configurable: !0
  }), Object.defineProperty(h, "originalHeight", {
    get() {
      return this.getViewport({ scale: 1 }).height;
    },
    configurable: !0
  }), h;
}
function yv(h) {
  return h.name === "AbortException" || h.name === "RenderingCancelledException";
}
function jS(h) {
  return new Promise((t, e) => {
    const i = new FileReader();
    i.onload = () => {
      if (!i.result)
        return e(new Error("Error while reading a file."));
      t(i.result);
    }, i.onerror = (s) => {
      if (!s.target)
        return e(new Error("Error while reading a file."));
      const { error: r } = s.target;
      if (!r)
        return e(new Error("Error while reading a file."));
      switch (r.code) {
        case r.NOT_FOUND_ERR:
          return e(new Error("Error while reading a file: File not found."));
        case r.SECURITY_ERR:
          return e(new Error("Error while reading a file: Security error."));
        case r.ABORT_ERR:
          return e(new Error("Error while reading a file: Aborted."));
        default:
          return e(new Error("Error while reading a file."));
      }
    }, i.readAsArrayBuffer(h);
  });
}
const { PDFDataRangeTransport: zS } = dv, $S = (h, t) => {
  switch (t) {
    case gg.NEED_PASSWORD: {
      const e = prompt("Enter the password to open this PDF file.");
      h(e);
      break;
    }
    case gg.INCORRECT_PASSWORD: {
      const e = prompt("Invalid password. Please try again.");
      h(e);
      break;
    }
  }
};
function Om(h) {
  return typeof h == "object" && h !== null && ("data" in h || "range" in h || "url" in h);
}
const US = jm(function({ children: t, className: e, error: i = "Failed to load PDF file.", externalLinkRel: s, externalLinkTarget: r, file: a, inputRef: o, imageResourcesPath: l, loading: c = "Loading PDF…", noData: d = "No PDF file specified.", onItemClick: u, onLoadError: g, onLoadProgress: b, onLoadSuccess: E, onPassword: w = $S, onSourceError: M, onSourceSuccess: k, options: L, renderMode: R, rotate: p, scale: f, ...y }, A) {
  const [T, P] = oh(), { value: C, error: D } = T, [N, I] = oh(), { value: B, error: j } = N, z = Pi(new LS()), S = Pi([]), K = Pi(void 0), F = Pi(void 0);
  a && a !== K.current && Om(a) && ($e(!Ro(a, K.current), `File prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.`), K.current = a), L && L !== F.current && ($e(!Ro(L, F.current), `Options prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.`), F.current = L);
  const _ = Pi({
    // Handling jumping to internal links target
    scrollPageIntoView: (st) => {
      const { dest: nt, pageNumber: at, pageIndex: St = at - 1 } = st;
      if (u) {
        u({ dest: nt, pageIndex: St, pageNumber: at });
        return;
      }
      const ot = S.current[St];
      if (ot) {
        ot.scrollIntoView();
        return;
      }
      $e(!1, `An internal link leading to page ${at} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`);
    }
  });
  $m(A, () => ({
    linkService: z,
    pages: S,
    viewer: _
  }), []);
  function O() {
    k && k();
  }
  function H() {
    D && ($e(!1, D.toString()), M && M(D));
  }
  function U() {
    P({ type: "RESET" });
  }
  jt(U, [a, P]);
  const $ = zs(async () => {
    if (!a)
      return null;
    if (typeof a == "string")
      return mg(a) ? { data: Lm(a) } : (Dm(), { url: a });
    if (a instanceof zS)
      return { range: a };
    if (FS(a))
      return { data: a };
    if (bf && NS(a))
      return { data: await jS(a) };
    if (Bt(typeof a == "object", "Invalid parameter in file, need either Uint8Array, string or a parameter object"), Bt(Om(a), "Invalid parameter object: need either .data, .range or .url"), "url" in a && typeof a.url == "string") {
      if (mg(a.url)) {
        const { url: st, ...nt } = a;
        return { data: Lm(st), ...nt };
      }
      Dm();
    }
    return a;
  }, [a]);
  jt(() => {
    const st = Fd($());
    return st.promise.then((nt) => {
      P({ type: "RESOLVE", value: nt });
    }).catch((nt) => {
      P({ type: "REJECT", error: nt });
    }), () => {
      ho(st);
    };
  }, [$, P]), jt(() => {
    if (!(typeof C > "u")) {
      if (C === !1) {
        H();
        return;
      }
      O();
    }
  }, [C]);
  function X() {
    B && (E && E(B), S.current = new Array(B.numPages), z.current.setDocument(B));
  }
  function G() {
    j && ($e(!1, j.toString()), g && g(j));
  }
  jt(function() {
    I({ type: "RESET" });
  }, [I, C]), jt(function() {
    if (!C)
      return;
    const nt = L ? { ...C, ...L } : C, at = Tg(nt);
    b && (at.onProgress = b), w && (at.onPassword = w);
    const St = at;
    return St.promise.then((ot) => {
      St.destroyed || I({ type: "RESOLVE", value: ot });
    }).catch((ot) => {
      St.destroyed || I({ type: "REJECT", error: ot });
    }), () => {
      St.destroy();
    };
  }, [L, I, C]), jt(() => {
    if (!(typeof B > "u")) {
      if (B === !1) {
        G();
        return;
      }
      X();
    }
  }, [B]), jt(function() {
    z.current.setViewer(_.current), z.current.setExternalLinkRel(s), z.current.setExternalLinkTarget(r);
  }, [s, r]);
  const W = zs((st, nt) => {
    S.current[st] = nt;
  }, []), ht = zs((st) => {
    delete S.current[st];
  }, []), ct = hs(() => ({
    imageResourcesPath: l,
    linkService: z.current,
    onItemClick: u,
    pdf: B,
    registerPage: W,
    renderMode: R,
    rotate: p,
    scale: f,
    unregisterPage: ht
  }), [l, u, B, W, R, p, f, ht]), dt = hs(
    () => fv(y, () => B),
    // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
    [y, B]
  );
  function ut() {
    function st(at) {
      return !!(at != null && at.pdf);
    }
    if (!st(ct))
      throw new Error("pdf is undefined");
    const nt = typeof t == "function" ? t(ct) : t;
    return q(pv.Provider, { value: ct, children: nt });
  }
  function rt() {
    return a ? B == null ? q(Mo, { type: "loading", children: typeof c == "function" ? c() : c }) : B === !1 ? q(Mo, { type: "error", children: typeof i == "function" ? i() : i }) : ut() : q(Mo, { type: "no-data", children: typeof d == "function" ? d() : d });
  }
  return q("div", {
    className: yf("react-pdf__Document", e),
    // Assertion is needed for React 18 compatibility
    ref: o,
    ...dt,
    children: rt()
  });
});
function Og() {
  return Um(pv);
}
function bv() {
  for (var h = [], t = 0; t < arguments.length; t++)
    h[t] = arguments[t];
  var e = h.filter(Boolean);
  if (e.length <= 1) {
    var i = e[0];
    return i || null;
  }
  return function(r) {
    for (var a = 0, o = e; a < o.length; a++) {
      var l = o[a];
      typeof l == "function" ? l(r) : l && (l.current = r);
    }
  };
}
const vv = zm(null);
function Nd() {
  return Um(vv);
}
function WS() {
  const h = Og(), t = Nd();
  Bt(t, "Unable to find Page context.");
  const e = { ...h, ...t }, { filterAnnotations: i, imageResourcesPath: s, linkService: r, onGetAnnotationsError: a, onGetAnnotationsSuccess: o, onRenderAnnotationLayerError: l, onRenderAnnotationLayerSuccess: c, page: d, pdf: u, renderForms: g, rotate: b, scale: E = 1 } = e;
  Bt(u, "Attempted to load page annotations, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop."), Bt(d, "Attempted to load page annotations, but no page was specified."), Bt(r, "Attempted to load page annotations, but no linkService was specified.");
  const [w, M] = oh(), { value: k, error: L } = w, R = Pi(null);
  $e(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-annotation-layer"), 10) === 1, "AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations");
  function p() {
    k && o && o(k);
  }
  function f() {
    L && ($e(!1, L.toString()), a && a(L));
  }
  jt(function() {
    M({ type: "RESET" });
  }, [M, d]), jt(function() {
    if (!d)
      return;
    const C = Fd(d.getAnnotations()), D = C;
    return C.promise.then((N) => {
      M({ type: "RESOLVE", value: N });
    }).catch((N) => {
      M({ type: "REJECT", error: N });
    }), () => {
      ho(D);
    };
  }, [M, d]), jt(() => {
    if (k !== void 0) {
      if (k === !1) {
        f();
        return;
      }
      p();
    }
  }, [k]);
  function y() {
    c && c();
  }
  function A(P) {
    $e(!1, `${P}`), l && l(P);
  }
  const T = hs(() => d.getViewport({ scale: E, rotation: b }), [d, b, E]);
  return jt(function() {
    if (!u || !d || !r || !k)
      return;
    const { current: C } = R;
    if (!C)
      return;
    const D = T.clone({ dontFlip: !0 }), N = {
      accessibilityManager: null,
      // TODO: Implement this
      annotationCanvasMap: null,
      // TODO: Implement this
      annotationEditorUIManager: null,
      // TODO: Implement this
      annotationStorage: u.annotationStorage,
      commentManager: null,
      // TODO: Implement this
      div: C,
      l10n: null,
      // TODO: Implement this
      linkService: r,
      page: d,
      structTreeLayer: null,
      // TODO: Implement this
      viewport: D
    }, I = {
      annotations: i ? i({ annotations: k }) : k,
      annotationStorage: u.annotationStorage,
      div: C,
      imageResourcesPath: s,
      linkService: r,
      page: d,
      renderForms: g,
      viewport: D
    };
    C.innerHTML = "";
    try {
      new Mg(N).render(I), y();
    } catch (B) {
      A(B);
    }
    return () => {
    };
  }, [
    k,
    i,
    s,
    r,
    d,
    u,
    g,
    T
  ]), q("div", { className: yf("react-pdf__Page__annotations", "annotationLayer"), ref: R });
}
const wv = {
  // Document level structure types
  Document: null,
  // There's a "document" role, but it doesn't make sense here.
  DocumentFragment: null,
  // Grouping level structure types
  Part: "group",
  Sect: "group",
  // XXX: There's a "section" role, but it's abstract.
  Div: "group",
  Aside: "note",
  NonStruct: "none",
  // Block level structure types
  P: null,
  // H<n>,
  H: "heading",
  Title: null,
  FENote: "note",
  // Sub-block level structure type
  Sub: "group",
  // General inline level structure types
  Lbl: null,
  Span: null,
  Em: null,
  Strong: null,
  Link: "link",
  Annot: "note",
  Form: "form",
  // Ruby and Warichu structure types
  Ruby: null,
  RB: null,
  RT: null,
  RP: null,
  Warichu: null,
  WT: null,
  WP: null,
  // List standard structure types
  L: "list",
  LI: "listitem",
  LBody: null,
  // Table standard structure types
  Table: "table",
  TR: "row",
  TH: "columnheader",
  TD: "cell",
  THead: "columnheader",
  TBody: null,
  TFoot: null,
  // Standard structure type Caption
  Caption: null,
  // Standard structure type Figure
  Figure: "figure",
  // Standard structure type Formula
  Formula: null,
  // standard structure type Artifact
  Artifact: null
}, GS = /^H(\d+)$/;
function VS(h) {
  return h in wv;
}
function vf(h) {
  return "children" in h;
}
function Sv(h) {
  return vf(h) ? h.children.length === 1 && 0 in h.children && "id" in h.children[0] : !1;
}
function qS(h) {
  const t = {};
  if (vf(h)) {
    const { role: e } = h, i = e.match(GS);
    if (i)
      t.role = "heading", t["aria-level"] = Number(i[1]);
    else if (VS(e)) {
      const s = wv[e];
      s && (t.role = s);
    }
  }
  return t;
}
function Av(h) {
  const t = {};
  if (vf(h)) {
    if (h.alt !== void 0 && (t["aria-label"] = h.alt), h.lang !== void 0 && (t.lang = h.lang), Sv(h)) {
      const [e] = h.children;
      if (e) {
        const i = Av(e);
        return {
          ...t,
          ...i
        };
      }
    }
  } else "id" in h && (t["aria-owns"] = h.id);
  return t;
}
function XS(h) {
  return h ? {
    ...qS(h),
    ...Av(h)
  } : null;
}
function xv({ className: h, node: t }) {
  const e = hs(() => XS(t), [t]), i = hs(() => !vf(t) || Sv(t) ? null : t.children.map((s, r) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: index is stable here
    q(xv, { node: s }, r)
  )), [t]);
  return q("span", { className: h, ...e, children: i });
}
function YS() {
  const h = Nd();
  Bt(h, "Unable to find Page context.");
  const { onGetStructTreeError: t, onGetStructTreeSuccess: e } = h, [i, s] = oh(), { value: r, error: a } = i, { customTextRenderer: o, page: l } = h;
  function c() {
    r && e && e(r);
  }
  function d() {
    a && ($e(!1, a.toString()), t && t(a));
  }
  return jt(function() {
    s({ type: "RESET" });
  }, [s, l]), jt(function() {
    if (o || !l)
      return;
    const g = Fd(l.getStructTree()), b = g;
    return g.promise.then((E) => {
      s({ type: "RESOLVE", value: E });
    }).catch((E) => {
      s({ type: "REJECT", error: E });
    }), () => ho(b);
  }, [o, l, s]), jt(() => {
    if (r !== void 0) {
      if (r === !1) {
        d();
        return;
      }
      c();
    }
  }, [r]), r ? q(xv, { className: "react-pdf__Page__structTree structTree", node: r }) : null;
}
const Im = Hs;
function KS(h) {
  const t = Nd();
  Bt(t, "Unable to find Page context.");
  const e = { ...t, ...h }, { _className: i, canvasBackground: s, devicePixelRatio: r = BS(), onRenderError: a, onRenderSuccess: o, page: l, renderForms: c, renderTextLayer: d, pageColors: u, rotate: g, scale: b } = e, { canvasRef: E } = h;
  Bt(l, "Attempted to render page canvas, but no page was specified.");
  const w = Pi(null);
  function M() {
    l && o && o(yg(l, b));
  }
  function k(f) {
    yv(f) || ($e(!1, f.toString()), a && a(f));
  }
  const L = hs(() => l.getViewport({ scale: b * r, rotation: g }), [r, l, g, b]), R = hs(() => l.getViewport({ scale: b, rotation: g }), [l, g, b]);
  jt(function() {
    if (!l)
      return;
    l.cleanup();
    const { current: y } = w;
    if (!y)
      return;
    y.width = L.width, y.height = L.height, y.style.width = `${Math.floor(R.width)}px`, y.style.height = `${Math.floor(R.height)}px`, y.style.visibility = "hidden";
    const A = {
      annotationMode: c ? Im.ENABLE_FORMS : Im.ENABLE,
      canvas: y,
      canvasContext: y.getContext("2d", { alpha: !1 }),
      pageColors: u,
      viewport: L
    };
    s && (A.background = s);
    const T = l.render(A), P = T;
    return T.promise.then(() => {
      y.style.visibility = "", M();
    }).catch(k), () => ho(P);
  }, [s, l, u, c, L, R]);
  const p = zs(() => {
    const { current: f } = w;
    f && (f.width = 0, f.height = 0);
  }, []);
  return jt(() => p, [p]), q("canvas", { className: `${i}__canvas`, dir: "ltr", ref: bv(E, w), style: {
    display: "block",
    userSelect: "none"
  }, children: d ? q(YS, {}) : null });
}
function JS(h) {
  return "str" in h;
}
const QS = /* @__PURE__ */ new Set([
  "base",
  "embed",
  "iframe",
  "link",
  "meta",
  "object",
  "script",
  "style",
  "template"
]), ZS = /* @__PURE__ */ new Set(["action", "formaction", "href", "poster", "src", "xlink:href"]);
function tA(h) {
  let t = "";
  for (const e of h) {
    const i = e.charCodeAt(0);
    i <= 32 || i === 127 || (t += e.toLowerCase());
  }
  return t.startsWith("javascript:") || t.startsWith("vbscript:");
}
function eA(h) {
  return h.nodeType === Node.ELEMENT_NODE;
}
function _v(h) {
  return eA(h) && h instanceof HTMLElement;
}
function iA(h) {
  return _v(h) && QS.has(h.tagName.toLowerCase());
}
function sA(h) {
  const t = document.createElement(h.tagName.toLowerCase());
  return Array.from(h.attributes).forEach((e) => {
    const i = e.name.toLowerCase();
    i.startsWith("on") || i === "srcdoc" || ZS.has(i) && tA(e.value) || t.setAttribute(e.name, e.value);
  }), Array.from(h.childNodes).forEach((e) => {
    t.append(Ev(e));
  }), t;
}
function Ev(h) {
  var t;
  return _v(h) && !iA(h) ? sA(h) : document.createTextNode((t = h.textContent) !== null && t !== void 0 ? t : "");
}
function nA(h, t) {
  const e = document.createElement("template");
  e.innerHTML = t;
  const i = document.createDocumentFragment();
  Array.from(e.content.childNodes).forEach((s) => {
    i.append(Ev(s));
  }), h.replaceChildren(i);
}
function rA() {
  const h = Nd();
  Bt(h, "Unable to find Page context.");
  const { customTextRenderer: t, onGetTextError: e, onGetTextSuccess: i, onRenderTextLayerError: s, onRenderTextLayerSuccess: r, page: a, pageIndex: o, pageNumber: l, rotate: c, scale: d } = h;
  Bt(a, "Attempted to load page text content, but no page was specified.");
  const [u, g] = oh(), { value: b, error: E } = u, w = Pi(null);
  $e(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-text-layer"), 10) === 1, "TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer");
  function M() {
    b && i && i(b);
  }
  function k() {
    E && ($e(!1, E.toString()), e && e(E));
  }
  jt(function() {
    g({ type: "RESET" });
  }, [a, g]), jt(function() {
    if (!a)
      return;
    const T = Fd(a.getTextContent()), P = T;
    return T.promise.then((C) => {
      g({ type: "RESOLVE", value: C });
    }).catch((C) => {
      g({ type: "REJECT", error: C });
    }), () => ho(P);
  }, [a, g]), jt(() => {
    if (b !== void 0) {
      if (b === !1) {
        k();
        return;
      }
      M();
    }
  }, [b]);
  const L = zs(() => {
    r && r();
  }, [r]), R = zs((A) => {
    yv(A) || ($e(!1, A.toString()), s && s(A));
  }, [s]);
  function p() {
    const A = w.current;
    A && A.classList.add("selecting");
  }
  function f() {
    const A = w.current;
    A && A.classList.remove("selecting");
  }
  const y = hs(() => a.getViewport({ scale: d, rotation: c }), [a, c, d]);
  return Lv(function() {
    if (!a || !b)
      return;
    const { current: T } = w;
    if (!T)
      return;
    T.innerHTML = "";
    const P = a.streamTextContent({ includeMarkedContent: !0 }), C = {
      container: T,
      textContentSource: P,
      viewport: y
    }, D = new Gh(C), N = D;
    return D.render().then(() => {
      const I = document.createElement("div");
      I.className = "endOfContent", T.append(I);
      const B = T.querySelectorAll('[role="presentation"]');
      if (t) {
        let j = 0;
        b.items.forEach((z, S) => {
          if (!JS(z))
            return;
          const K = B[j];
          if (!K)
            return;
          const F = t({
            pageIndex: o,
            pageNumber: l,
            itemIndex: S,
            ...z
          });
          nA(K, F), j += z.str && z.hasEOL ? 2 : 1;
        });
      }
      L();
    }).catch(R), () => ho(N);
  }, [
    t,
    R,
    L,
    a,
    o,
    l,
    b,
    y
  ]), // biome-ignore lint/a11y/noStaticElementInteractions: False positive caused by non interactive wrapper listening for bubbling events
  q("div", { className: yf("react-pdf__Page__textContent", "textLayer"), onMouseUp: f, onMouseDown: p, ref: w });
}
const Fm = 1;
function aA(h) {
  const e = { ...Og(), ...h }, { _className: i = "react-pdf__Page", _enableRegisterUnregisterPage: s = !0, canvasBackground: r, canvasRef: a, children: o, className: l, customRenderer: c, customTextRenderer: d, devicePixelRatio: u, error: g = "Failed to load the page.", filterAnnotations: b, height: E, inputRef: w, loading: M = "Loading page…", noData: k = "No page specified.", onGetAnnotationsError: L, onGetAnnotationsSuccess: R, onGetStructTreeError: p, onGetStructTreeSuccess: f, onGetTextError: y, onGetTextSuccess: A, onLoadError: T, onLoadSuccess: P, onRenderAnnotationLayerError: C, onRenderAnnotationLayerSuccess: D, onRenderError: N, onRenderSuccess: I, onRenderTextLayerError: B, onRenderTextLayerSuccess: j, pageColors: z, pageIndex: S, pageNumber: K, pdf: F, registerPage: _, renderAnnotationLayer: O = !0, renderForms: H = !1, renderMode: U = "canvas", renderTextLayer: $ = !0, rotate: X, scale: G = Fm, unregisterPage: W, width: ht, ...ct } = e, [dt, ut] = oh(), { value: rt, error: st } = dt, nt = Pi(null);
  Bt(F, "Attempted to load a page, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.");
  const at = Ur(K) ? K - 1 : S ?? null, St = K ?? (Ur(S) ? S + 1 : null), ot = X ?? (rt ? rt.rotate : null), Ct = hs(() => {
    if (!rt)
      return null;
    let Bn = 1;
    const fo = G ?? Fm;
    if (ht || E) {
      const Hn = rt.getViewport({ scale: 1, rotation: ot });
      ht ? Bn = ht / Hn.width : E && (Bn = E / Hn.height);
    }
    return fo * Bn;
  }, [E, rt, ot, G, ht]);
  jt(function() {
    return () => {
      Ur(at) && s && W && W(at);
    };
  }, [s, F, at, W]);
  function ae() {
    if (P) {
      if (!rt || !Ct)
        return;
      P(yg(rt, Ct));
    }
    if (s && _) {
      if (!Ur(at) || !nt.current)
        return;
      _(at, nt.current);
    }
  }
  function ce() {
    st && ($e(!1, st.toString()), T && T(st));
  }
  jt(function() {
    ut({ type: "RESET" });
  }, [ut, F, at]), jt(function() {
    if (!F || !St)
      return;
    const fo = Fd(F.getPage(St)), Hn = fo;
    return fo.promise.then((Sf) => {
      ut({ type: "RESOLVE", value: Sf });
    }).catch((Sf) => {
      ut({ type: "REJECT", error: Sf });
    }), () => ho(Hn);
  }, [ut, F, St]), jt(() => {
    if (rt !== void 0) {
      if (rt === !1) {
        ce();
        return;
      }
      ae();
    }
  }, [rt, Ct]);
  const _e = hs(() => (
    // Technically there cannot be page without pageIndex, pageNumber, rotate and scale, but TypeScript doesn't know that
    Ur(at) && St && Ur(ot) && Ur(Ct) ? {
      _className: i,
      canvasBackground: r,
      customTextRenderer: d,
      devicePixelRatio: u,
      filterAnnotations: b,
      onGetAnnotationsError: L,
      onGetAnnotationsSuccess: R,
      onGetStructTreeError: p,
      onGetStructTreeSuccess: f,
      onGetTextError: y,
      onGetTextSuccess: A,
      onRenderAnnotationLayerError: C,
      onRenderAnnotationLayerSuccess: D,
      onRenderError: N,
      onRenderSuccess: I,
      onRenderTextLayerError: B,
      onRenderTextLayerSuccess: j,
      page: rt,
      pageColors: z,
      pageIndex: at,
      pageNumber: St,
      renderForms: H,
      renderTextLayer: $,
      rotate: ot,
      scale: Ct
    } : null
  ), [
    i,
    r,
    d,
    u,
    b,
    L,
    R,
    p,
    f,
    y,
    A,
    C,
    D,
    N,
    I,
    B,
    j,
    rt,
    z,
    at,
    St,
    H,
    $,
    ot,
    Ct
  ]), Us = hs(
    () => fv(ct, () => rt && (Ct ? yg(rt, Ct) : void 0)),
    // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
    [ct, rt, Ct]
  ), Ws = `${at}@${Ct}/${ot}`;
  function Bd() {
    switch (U) {
      case "custom":
        return Bt(c, 'renderMode was set to "custom", but no customRenderer was passed.'), q(c, {}, `${Ws}_custom`);
      case "none":
        return null;
      case "canvas":
      default:
        return q(KS, { canvasRef: a }, `${Ws}_canvas`);
    }
  }
  function jr() {
    return $ ? q(rA, {}, `${Ws}_text`) : null;
  }
  function wf() {
    return O ? q(WS, {}, `${Ws}_annotations`) : null;
  }
  function us() {
    function Bn(Hn) {
      return !!(Hn != null && Hn.page);
    }
    if (!Bn(_e))
      throw new Error("page is undefined");
    const fo = typeof o == "function" ? o(_e) : o;
    return Mn(vv.Provider, { value: _e, children: [Bd(), jr(), wf(), fo] });
  }
  function zr() {
    return St ? F === null || rt === void 0 || rt === null ? q(Mo, { type: "loading", children: typeof M == "function" ? M() : M }) : F === !1 || rt === !1 ? q(Mo, { type: "error", children: typeof g == "function" ? g() : g }) : us() : q(Mo, { type: "no-data", children: typeof k == "function" ? k() : k });
  }
  return q("div", {
    className: yf(i, l),
    "data-page-number": St,
    // Assertion is needed for React 18 compatibility
    ref: bv(w, nt),
    style: {
      "--scale-round-x": "1px",
      "--scale-round-y": "1px",
      "--scale-factor": "1",
      "--user-unit": `${Ct}`,
      "--total-scale-factor": "calc(var(--scale-factor) * var(--user-unit))",
      backgroundColor: r || "white",
      position: "relative",
      minWidth: "min-content",
      minHeight: "min-content"
    },
    ...Us,
    children: zr()
  });
}
HS();
os.workerSrc = "pdf.worker.mjs";
const oA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Document: US,
  Page: aA,
  PasswordResponses: gg,
  pdfjs: dv,
  useDocumentContext: Og,
  usePageContext: Nd
}, Symbol.toStringTag, { value: "Module" }));
var Bh = { exports: {} }, lA = Bh.exports, Nm;
function hA() {
  return Nm || (Nm = 1, (function(h, t) {
    (function(e, i) {
      i(t);
    })(lA, (function(e) {
      class i {
        constructor(p, f) {
          this.state = { angle: 0, area: [], position: { x: 0, y: 0 }, hardAngle: 0, hardDrawingAngle: 0 }, this.createdDensity = f, this.nowDrawingDensity = this.createdDensity, this.render = p;
        }
        setDensity(p) {
          this.createdDensity = p, this.nowDrawingDensity = p;
        }
        setDrawingDensity(p) {
          this.nowDrawingDensity = p;
        }
        setPosition(p) {
          this.state.position = p;
        }
        setAngle(p) {
          this.state.angle = p;
        }
        setArea(p) {
          this.state.area = p;
        }
        setHardDrawingAngle(p) {
          this.state.hardDrawingAngle = p;
        }
        setHardAngle(p) {
          this.state.hardAngle = p, this.state.hardDrawingAngle = p;
        }
        setOrientation(p) {
          this.orientation = p;
        }
        getDrawingDensity() {
          return this.nowDrawingDensity;
        }
        getDensity() {
          return this.createdDensity;
        }
        getHardAngle() {
          return this.state.hardAngle;
        }
      }
      class s extends i {
        constructor(p, f, y) {
          super(p, y), this.image = null, this.isLoad = !1, this.loadingAngle = 0, this.image = new Image(), this.image.src = f;
        }
        draw(p) {
          const f = this.render.getContext(), y = this.render.convertToGlobal(this.state.position), A = this.render.getRect().pageWidth, T = this.render.getRect().height;
          f.save(), f.translate(y.x, y.y), f.beginPath();
          for (let P of this.state.area) P !== null && (P = this.render.convertToGlobal(P), f.lineTo(P.x - y.x, P.y - y.y));
          f.rotate(this.state.angle), f.clip(), this.isLoad ? f.drawImage(this.image, 0, 0, A, T) : this.drawLoader(f, { x: 0, y: 0 }, A, T), f.restore();
        }
        simpleDraw(p) {
          const f = this.render.getRect(), y = this.render.getContext(), A = f.pageWidth, T = f.height, P = p === 1 ? f.left + f.pageWidth : f.left, C = f.top;
          this.isLoad ? y.drawImage(this.image, P, C, A, T) : this.drawLoader(y, { x: P, y: C }, A, T);
        }
        drawLoader(p, f, y, A) {
          p.beginPath(), p.strokeStyle = "rgb(200, 200, 200)", p.fillStyle = "rgb(255, 255, 255)", p.lineWidth = 1, p.rect(f.x + 1, f.y + 1, y - 1, A - 1), p.stroke(), p.fill();
          const T = { x: f.x + y / 2, y: f.y + A / 2 };
          p.beginPath(), p.lineWidth = 10, p.arc(T.x, T.y, 20, this.loadingAngle, 3 * Math.PI / 2 + this.loadingAngle), p.stroke(), p.closePath(), this.loadingAngle += 0.07, this.loadingAngle >= 2 * Math.PI && (this.loadingAngle = 0);
        }
        load() {
          this.isLoad || (this.image.onload = () => {
            this.isLoad = !0;
          });
        }
        newTemporaryCopy() {
          return this;
        }
        getTemporaryCopy() {
          return this;
        }
        hideTemporaryCopy() {
        }
      }
      class r {
        constructor(p, f) {
          this.pages = [], this.currentPageIndex = 0, this.currentSpreadIndex = 0, this.landscapeSpread = [], this.portraitSpread = [], this.render = f, this.app = p, this.currentPageIndex = 0, this.isShowCover = this.app.getSettings().showCover;
        }
        destroy() {
          this.pages = [];
        }
        createSpread() {
          this.landscapeSpread = [], this.portraitSpread = [];
          for (let f = 0; f < this.pages.length; f++) this.portraitSpread.push([f]);
          let p = 0;
          this.isShowCover && (this.pages[0].setDensity("hard"), this.landscapeSpread.push([p]), p++);
          for (let f = p; f < this.pages.length; f += 2) f < this.pages.length - 1 ? this.landscapeSpread.push([f, f + 1]) : (this.landscapeSpread.push([f]), this.pages[f].setDensity("hard"));
        }
        getSpread() {
          return this.render.getOrientation() === "landscape" ? this.landscapeSpread : this.portraitSpread;
        }
        getSpreadIndexByPage(p) {
          const f = this.getSpread();
          for (let y = 0; y < f.length; y++) if (p === f[y][0] || p === f[y][1]) return y;
          return null;
        }
        getPageCount() {
          return this.pages.length;
        }
        getPages() {
          return this.pages;
        }
        getPage(p) {
          if (p >= 0 && p < this.pages.length) return this.pages[p];
          throw new Error("Invalid page number");
        }
        nextBy(p) {
          const f = this.pages.indexOf(p);
          return f < this.pages.length - 1 ? this.pages[f + 1] : null;
        }
        prevBy(p) {
          const f = this.pages.indexOf(p);
          return f > 0 ? this.pages[f - 1] : null;
        }
        getFlippingPage(p) {
          const f = this.currentSpreadIndex;
          if (this.render.getOrientation() === "portrait") return p === 0 ? this.pages[f].newTemporaryCopy() : this.pages[f - 1];
          {
            const y = p === 0 ? this.getSpread()[f + 1] : this.getSpread()[f - 1];
            return y.length === 1 || p === 0 ? this.pages[y[0]] : this.pages[y[1]];
          }
        }
        getBottomPage(p) {
          const f = this.currentSpreadIndex;
          if (this.render.getOrientation() === "portrait") return p === 0 ? this.pages[f + 1] : this.pages[f - 1];
          {
            const y = p === 0 ? this.getSpread()[f + 1] : this.getSpread()[f - 1];
            return y.length === 1 ? this.pages[y[0]] : p === 0 ? this.pages[y[1]] : this.pages[y[0]];
          }
        }
        showNext() {
          this.currentSpreadIndex < this.getSpread().length && (this.currentSpreadIndex++, this.showSpread());
        }
        showPrev() {
          this.currentSpreadIndex > 0 && (this.currentSpreadIndex--, this.showSpread());
        }
        getCurrentPageIndex() {
          return this.currentPageIndex;
        }
        show(p = null) {
          if (p === null && (p = this.currentPageIndex), p < 0 || p >= this.pages.length) return;
          const f = this.getSpreadIndexByPage(p);
          f !== null && (this.currentSpreadIndex = f, this.showSpread());
        }
        getCurrentSpreadIndex() {
          return this.currentSpreadIndex;
        }
        setCurrentSpreadIndex(p) {
          if (!(p >= 0 && p < this.getSpread().length)) throw new Error("Invalid page");
          this.currentSpreadIndex = p;
        }
        showSpread() {
          const p = this.getSpread()[this.currentSpreadIndex];
          p.length === 2 ? (this.render.setLeftPage(this.pages[p[0]]), this.render.setRightPage(this.pages[p[1]])) : this.render.getOrientation() === "landscape" && p[0] === this.pages.length - 1 ? (this.render.setLeftPage(this.pages[p[0]]), this.render.setRightPage(null)) : (this.render.setLeftPage(null), this.render.setRightPage(this.pages[p[0]])), this.currentPageIndex = p[0], this.app.updatePageIndex(this.currentPageIndex);
        }
      }
      class a extends r {
        constructor(p, f, y) {
          super(p, f), this.imagesHref = y;
        }
        load() {
          for (const p of this.imagesHref) {
            const f = new s(this.render, p, "soft");
            f.load(), this.pages.push(f);
          }
          this.createSpread();
        }
      }
      class o {
        static GetDistanceBetweenTwoPoint(p, f) {
          return p === null || f === null ? 1 / 0 : Math.sqrt(Math.pow(f.x - p.x, 2) + Math.pow(f.y - p.y, 2));
        }
        static GetSegmentLength(p) {
          return o.GetDistanceBetweenTwoPoint(p[0], p[1]);
        }
        static GetAngleBetweenTwoLine(p, f) {
          const y = p[0].y - p[1].y, A = f[0].y - f[1].y, T = p[1].x - p[0].x, P = f[1].x - f[0].x;
          return Math.acos((y * A + T * P) / (Math.sqrt(y * y + T * T) * Math.sqrt(A * A + P * P)));
        }
        static PointInRect(p, f) {
          return f === null ? null : f.x >= p.left && f.x <= p.width + p.left && f.y >= p.top && f.y <= p.top + p.height ? f : null;
        }
        static GetRotatedPoint(p, f, y) {
          return { x: p.x * Math.cos(y) + p.y * Math.sin(y) + f.x, y: p.y * Math.cos(y) - p.x * Math.sin(y) + f.y };
        }
        static LimitPointToCircle(p, f, y) {
          if (o.GetDistanceBetweenTwoPoint(p, y) <= f) return y;
          const A = p.x, T = p.y, P = y.x, C = y.y;
          let D = Math.sqrt(Math.pow(f, 2) * Math.pow(A - P, 2) / (Math.pow(A - P, 2) + Math.pow(T - C, 2))) + A;
          y.x < 0 && (D *= -1);
          let N = (D - A) * (T - C) / (A - P) + T;
          return A - P + T === 0 && (N = f), { x: D, y: N };
        }
        static GetIntersectBetweenTwoSegment(p, f, y) {
          return o.PointInRect(p, o.GetIntersectBeetwenTwoLine(f, y));
        }
        static GetIntersectBeetwenTwoLine(p, f) {
          const y = p[0].y - p[1].y, A = f[0].y - f[1].y, T = p[1].x - p[0].x, P = f[1].x - f[0].x, C = p[0].x * p[1].y - p[1].x * p[0].y, D = f[0].x * f[1].y - f[1].x * f[0].y, N = y * D - A * C, I = T * D - P * C, B = -(C * P - D * T) / (y * P - A * T), j = -(y * D - A * C) / (y * P - A * T);
          if (isFinite(B) && isFinite(j)) return { x: B, y: j };
          if (Math.abs(N - I) < 0.1) throw new Error("Segment included");
          return null;
        }
        static GetCordsFromTwoPoint(p, f) {
          const y = Math.abs(p.x - f.x), A = Math.abs(p.y - f.y), T = Math.max(y, A), P = [p];
          function C(D, N, I, B, j) {
            return N > D ? D + j * (I / B) : N < D ? D - j * (I / B) : D;
          }
          for (let D = 1; D <= T; D += 1) P.push({ x: C(p.x, f.x, y, T, D), y: C(p.y, f.y, A, T, D) });
          return P;
        }
      }
      class l extends i {
        constructor(p, f, y) {
          super(p, y), this.copiedElement = null, this.temporaryCopy = null, this.isLoad = !1, this.element = f, this.element.classList.add("stf__item"), this.element.classList.add("--" + y);
        }
        newTemporaryCopy() {
          return this.nowDrawingDensity === "hard" ? this : (this.temporaryCopy === null && (this.copiedElement = this.element.cloneNode(!0), this.element.parentElement.appendChild(this.copiedElement), this.temporaryCopy = new l(this.render, this.copiedElement, this.nowDrawingDensity)), this.getTemporaryCopy());
        }
        getTemporaryCopy() {
          return this.temporaryCopy;
        }
        hideTemporaryCopy() {
          this.temporaryCopy !== null && (this.copiedElement.remove(), this.copiedElement = null, this.temporaryCopy = null);
        }
        draw(p) {
          const f = p || this.nowDrawingDensity, y = this.render.convertToGlobal(this.state.position), A = this.render.getRect().pageWidth, T = this.render.getRect().height;
          this.element.classList.remove("--simple");
          const P = `
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${A}px;
            height: ${T}px;
        `;
          f === "hard" ? this.drawHard(P) : this.drawSoft(y, P);
        }
        drawHard(p = "") {
          const f = this.render.getRect().left + this.render.getRect().width / 2, y = this.state.hardDrawingAngle, A = p + `
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                clip-path: none;
                -webkit-clip-path: none;
            ` + (this.orientation === 0 ? `transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${y}deg);` : `transform-origin: 0 0; 
                   transform: translate3d(${f}px, 0, 0) rotateY(${y}deg);`);
          this.element.style.cssText = A;
        }
        drawSoft(p, f = "") {
          let y = "polygon( ";
          for (const T of this.state.area) if (T !== null) {
            let P = this.render.getDirection() === 1 ? { x: -T.x + this.state.position.x, y: T.y - this.state.position.y } : { x: T.x - this.state.position.x, y: T.y - this.state.position.y };
            P = o.GetRotatedPoint(P, { x: 0, y: 0 }, this.state.angle), y += P.x + "px " + P.y + "px, ";
          }
          y = y.slice(0, -2), y += ")";
          const A = f + `transform-origin: 0 0; clip-path: ${y}; -webkit-clip-path: ${y};` + (this.render.isSafari() && this.state.angle === 0 ? `transform: translate(${p.x}px, ${p.y}px);` : `transform: translate3d(${p.x}px, ${p.y}px, 0) rotate(${this.state.angle}rad);`);
          this.element.style.cssText = A;
        }
        simpleDraw(p) {
          const f = this.render.getRect(), y = f.pageWidth, A = f.height, T = p === 1 ? f.left + f.pageWidth : f.left, P = f.top;
          this.element.classList.add("--simple"), this.element.style.cssText = `
            position: absolute; 
            display: block; 
            height: ${A}px; 
            left: ${T}px; 
            top: ${P}px; 
            width: ${y}px; 
            z-index: ${this.render.getSettings().startZIndex + 1};`;
        }
        getElement() {
          return this.element;
        }
        load() {
          this.isLoad = !0;
        }
        setOrientation(p) {
          super.setOrientation(p), this.element.classList.remove("--left", "--right"), this.element.classList.add(p === 1 ? "--right" : "--left");
        }
        setDrawingDensity(p) {
          this.element.classList.remove("--soft", "--hard"), this.element.classList.add("--" + p), super.setDrawingDensity(p);
        }
      }
      class c extends r {
        constructor(p, f, y, A) {
          super(p, f), this.element = y, this.pagesElement = A;
        }
        load() {
          for (const p of this.pagesElement) {
            const f = new l(this.render, p, p.dataset.density === "hard" ? "hard" : "soft");
            f.load(), this.pages.push(f);
          }
          this.createSpread();
        }
      }
      class d {
        constructor(p, f, y, A) {
          this.direction = p, this.corner = f, this.topIntersectPoint = null, this.sideIntersectPoint = null, this.bottomIntersectPoint = null, this.pageWidth = parseInt(y, 10), this.pageHeight = parseInt(A, 10);
        }
        calc(p) {
          try {
            return this.position = this.calcAngleAndPosition(p), this.calculateIntersectPoint(this.position), !0;
          } catch {
            return !1;
          }
        }
        getFlippingClipArea() {
          const p = [];
          let f = !1;
          return p.push(this.rect.topLeft), p.push(this.topIntersectPoint), this.sideIntersectPoint === null ? f = !0 : (p.push(this.sideIntersectPoint), this.bottomIntersectPoint === null && (f = !1)), p.push(this.bottomIntersectPoint), (f || this.corner === "bottom") && p.push(this.rect.bottomLeft), p;
        }
        getBottomClipArea() {
          const p = [];
          return p.push(this.topIntersectPoint), this.corner === "top" ? p.push({ x: this.pageWidth, y: 0 }) : (this.topIntersectPoint !== null && p.push({ x: this.pageWidth, y: 0 }), p.push({ x: this.pageWidth, y: this.pageHeight })), this.sideIntersectPoint !== null ? o.GetDistanceBetweenTwoPoint(this.sideIntersectPoint, this.topIntersectPoint) >= 10 && p.push(this.sideIntersectPoint) : this.corner === "top" && p.push({ x: this.pageWidth, y: this.pageHeight }), p.push(this.bottomIntersectPoint), p.push(this.topIntersectPoint), p;
        }
        getAngle() {
          return this.direction === 0 ? -this.angle : this.angle;
        }
        getRect() {
          return this.rect;
        }
        getPosition() {
          return this.position;
        }
        getActiveCorner() {
          return this.direction === 0 ? this.rect.topLeft : this.rect.topRight;
        }
        getDirection() {
          return this.direction;
        }
        getFlippingProgress() {
          return Math.abs((this.position.x - this.pageWidth) / (2 * this.pageWidth) * 100);
        }
        getCorner() {
          return this.corner;
        }
        getBottomPagePosition() {
          return this.direction === 1 ? { x: this.pageWidth, y: 0 } : { x: 0, y: 0 };
        }
        getShadowStartPoint() {
          return this.corner === "top" ? this.topIntersectPoint : this.sideIntersectPoint !== null ? this.sideIntersectPoint : this.topIntersectPoint;
        }
        getShadowAngle() {
          const p = o.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(), [{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }]);
          return this.direction === 0 ? p : Math.PI - p;
        }
        calcAngleAndPosition(p) {
          let f = p;
          if (this.updateAngleAndGeometry(f), f = this.corner === "top" ? this.checkPositionAtCenterLine(f, { x: 0, y: 0 }, { x: 0, y: this.pageHeight }) : this.checkPositionAtCenterLine(f, { x: 0, y: this.pageHeight }, { x: 0, y: 0 }), Math.abs(f.x - this.pageWidth) < 1 && Math.abs(f.y) < 1) throw new Error("Point is too small");
          return f;
        }
        updateAngleAndGeometry(p) {
          this.angle = this.calculateAngle(p), this.rect = this.getPageRect(p);
        }
        calculateAngle(p) {
          const f = this.pageWidth - p.x + 1, y = this.corner === "bottom" ? this.pageHeight - p.y : p.y;
          let A = 2 * Math.acos(f / Math.sqrt(y * y + f * f));
          y < 0 && (A = -A);
          const T = Math.PI - A;
          if (!isFinite(A) || T >= 0 && T < 3e-3) throw new Error("The G point is too small");
          return this.corner === "bottom" && (A = -A), A;
        }
        getPageRect(p) {
          return this.corner === "top" ? this.getRectFromBasePoint([{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }, { x: 0, y: this.pageHeight }, { x: this.pageWidth, y: this.pageHeight }], p) : this.getRectFromBasePoint([{ x: 0, y: -this.pageHeight }, { x: this.pageWidth, y: -this.pageHeight }, { x: 0, y: 0 }, { x: this.pageWidth, y: 0 }], p);
        }
        getRectFromBasePoint(p, f) {
          return { topLeft: this.getRotatedPoint(p[0], f), topRight: this.getRotatedPoint(p[1], f), bottomLeft: this.getRotatedPoint(p[2], f), bottomRight: this.getRotatedPoint(p[3], f) };
        }
        getRotatedPoint(p, f) {
          return { x: p.x * Math.cos(this.angle) + p.y * Math.sin(this.angle) + f.x, y: p.y * Math.cos(this.angle) - p.x * Math.sin(this.angle) + f.y };
        }
        calculateIntersectPoint(p) {
          const f = { left: -1, top: -1, width: this.pageWidth + 2, height: this.pageHeight + 2 };
          this.corner === "top" ? (this.topIntersectPoint = o.GetIntersectBetweenTwoSegment(f, [p, this.rect.topRight], [{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }]), this.sideIntersectPoint = o.GetIntersectBetweenTwoSegment(f, [p, this.rect.bottomLeft], [{ x: this.pageWidth, y: 0 }, { x: this.pageWidth, y: this.pageHeight }]), this.bottomIntersectPoint = o.GetIntersectBetweenTwoSegment(f, [this.rect.bottomLeft, this.rect.bottomRight], [{ x: 0, y: this.pageHeight }, { x: this.pageWidth, y: this.pageHeight }])) : (this.topIntersectPoint = o.GetIntersectBetweenTwoSegment(f, [this.rect.topLeft, this.rect.topRight], [{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }]), this.sideIntersectPoint = o.GetIntersectBetweenTwoSegment(f, [p, this.rect.topLeft], [{ x: this.pageWidth, y: 0 }, { x: this.pageWidth, y: this.pageHeight }]), this.bottomIntersectPoint = o.GetIntersectBetweenTwoSegment(f, [this.rect.bottomLeft, this.rect.bottomRight], [{ x: 0, y: this.pageHeight }, { x: this.pageWidth, y: this.pageHeight }]));
        }
        checkPositionAtCenterLine(p, f, y) {
          let A = p;
          const T = o.LimitPointToCircle(f, this.pageWidth, A);
          A !== T && (A = T, this.updateAngleAndGeometry(A));
          const P = Math.sqrt(Math.pow(this.pageWidth, 2) + Math.pow(this.pageHeight, 2));
          let C = this.rect.bottomRight, D = this.rect.topLeft;
          if (this.corner === "bottom" && (C = this.rect.topRight, D = this.rect.bottomLeft), C.x <= 0) {
            const N = o.LimitPointToCircle(y, P, D);
            N !== A && (A = N, this.updateAngleAndGeometry(A));
          }
          return A;
        }
        getSegmentToShadowLine() {
          const p = this.getShadowStartPoint();
          return [p, p !== this.sideIntersectPoint && this.sideIntersectPoint !== null ? this.sideIntersectPoint : this.bottomIntersectPoint];
        }
      }
      class u {
        constructor(p, f) {
          this.flippingPage = null, this.bottomPage = null, this.calc = null, this.state = "read", this.render = p, this.app = f;
        }
        fold(p) {
          this.setState("user_fold"), this.calc === null && this.start(p), this.do(this.render.convertToPage(p));
        }
        flip(p) {
          if (this.app.getSettings().disableFlipByClick && !this.isPointOnCorners(p) || (this.calc !== null && this.render.finishAnimation(), !this.start(p))) return;
          const f = this.getBoundsRect();
          this.setState("flipping");
          const y = f.height / 10, A = this.calc.getCorner() === "bottom" ? f.height - y : y, T = this.calc.getCorner() === "bottom" ? f.height : 0;
          this.calc.calc({ x: f.pageWidth - y, y: A }), this.animateFlippingTo({ x: f.pageWidth - y, y: A }, { x: -f.pageWidth, y: T }, !0);
        }
        start(p) {
          this.reset();
          const f = this.render.convertToBook(p), y = this.getBoundsRect(), A = this.getDirectionByPoint(f), T = f.y >= y.height / 2 ? "bottom" : "top";
          if (!this.checkDirection(A)) return !1;
          try {
            if (this.flippingPage = this.app.getPageCollection().getFlippingPage(A), this.bottomPage = this.app.getPageCollection().getBottomPage(A), this.render.getOrientation() === "landscape") if (A === 1) {
              const P = this.app.getPageCollection().nextBy(this.flippingPage);
              P !== null && this.flippingPage.getDensity() !== P.getDensity() && (this.flippingPage.setDrawingDensity("hard"), P.setDrawingDensity("hard"));
            } else {
              const P = this.app.getPageCollection().prevBy(this.flippingPage);
              P !== null && this.flippingPage.getDensity() !== P.getDensity() && (this.flippingPage.setDrawingDensity("hard"), P.setDrawingDensity("hard"));
            }
            return this.render.setDirection(A), this.calc = new d(A, T, y.pageWidth.toString(10), y.height.toString(10)), !0;
          } catch {
            return !1;
          }
        }
        do(p) {
          if (this.calc !== null && this.calc.calc(p)) {
            const f = this.calc.getFlippingProgress();
            this.bottomPage.setArea(this.calc.getBottomClipArea()), this.bottomPage.setPosition(this.calc.getBottomPagePosition()), this.bottomPage.setAngle(0), this.bottomPage.setHardAngle(0), this.flippingPage.setArea(this.calc.getFlippingClipArea()), this.flippingPage.setPosition(this.calc.getActiveCorner()), this.flippingPage.setAngle(this.calc.getAngle()), this.calc.getDirection() === 0 ? this.flippingPage.setHardAngle(90 * (200 - 2 * f) / 100) : this.flippingPage.setHardAngle(-90 * (200 - 2 * f) / 100), this.render.setPageRect(this.calc.getRect()), this.render.setBottomPage(this.bottomPage), this.render.setFlippingPage(this.flippingPage), this.render.setShadowData(this.calc.getShadowStartPoint(), this.calc.getShadowAngle(), f, this.calc.getDirection());
          }
        }
        flipToPage(p, f) {
          const y = this.app.getPageCollection().getCurrentSpreadIndex(), A = this.app.getPageCollection().getSpreadIndexByPage(p);
          try {
            A > y && (this.app.getPageCollection().setCurrentSpreadIndex(A - 1), this.flipNext(f)), A < y && (this.app.getPageCollection().setCurrentSpreadIndex(A + 1), this.flipPrev(f));
          } catch {
          }
        }
        flipNext(p) {
          this.flip({ x: this.render.getRect().left + 2 * this.render.getRect().pageWidth - 10, y: p === "top" ? 1 : this.render.getRect().height - 2 });
        }
        flipPrev(p) {
          this.flip({ x: 10, y: p === "top" ? 1 : this.render.getRect().height - 2 });
        }
        stopMove() {
          if (this.calc === null) return;
          const p = this.calc.getPosition(), f = this.getBoundsRect(), y = this.calc.getCorner() === "bottom" ? f.height : 0;
          p.x <= 0 ? this.animateFlippingTo(p, { x: -f.pageWidth, y }, !0) : this.animateFlippingTo(p, { x: f.pageWidth, y }, !1);
        }
        showCorner(p) {
          if (!this.checkState("read", "fold_corner")) return;
          const f = this.getBoundsRect(), y = f.pageWidth;
          if (this.isPointOnCorners(p)) if (this.calc === null) {
            if (!this.start(p)) return;
            this.setState("fold_corner"), this.calc.calc({ x: y - 1, y: 1 });
            const A = 50, T = this.calc.getCorner() === "bottom" ? f.height - 1 : 1, P = this.calc.getCorner() === "bottom" ? f.height - A : A;
            this.animateFlippingTo({ x: y - 1, y: T }, { x: y - A, y: P }, !1, !1);
          } else this.do(this.render.convertToPage(p));
          else this.setState("read"), this.render.finishAnimation(), this.stopMove();
        }
        animateFlippingTo(p, f, y, A = !0) {
          const T = o.GetCordsFromTwoPoint(p, f), P = [];
          for (const D of T) P.push(() => this.do(D));
          const C = this.getAnimationDuration(T.length);
          this.render.startAnimation(P, C, () => {
            this.calc && (y && (this.calc.getDirection() === 1 ? this.app.turnToPrevPage() : this.app.turnToNextPage()), A && (this.render.setBottomPage(null), this.render.setFlippingPage(null), this.render.clearShadow(), this.setState("read"), this.reset()));
          });
        }
        getCalculation() {
          return this.calc;
        }
        getState() {
          return this.state;
        }
        setState(p) {
          this.state !== p && (this.app.updateState(p), this.state = p);
        }
        getDirectionByPoint(p) {
          const f = this.getBoundsRect();
          if (this.render.getOrientation() === "portrait") {
            if (p.x - f.pageWidth <= f.width / 5) return 1;
          } else if (p.x < f.width / 2) return 1;
          return 0;
        }
        getAnimationDuration(p) {
          const f = this.app.getSettings().flippingTime;
          return p >= 1e3 ? f : p / 1e3 * f;
        }
        checkDirection(p) {
          return p === 0 ? this.app.getCurrentPageIndex() < this.app.getPageCount() - 1 : this.app.getCurrentPageIndex() >= 1;
        }
        reset() {
          this.calc = null, this.flippingPage = null, this.bottomPage = null;
        }
        getBoundsRect() {
          return this.render.getRect();
        }
        checkState(...p) {
          for (const f of p) if (this.state === f) return !0;
          return !1;
        }
        isPointOnCorners(p) {
          const f = this.getBoundsRect(), y = f.pageWidth, A = Math.sqrt(Math.pow(y, 2) + Math.pow(f.height, 2)) / 5, T = this.render.convertToBook(p);
          return T.x > 0 && T.y > 0 && T.x < f.width && T.y < f.height && (T.x < A || T.x > f.width - A) && (T.y < A || T.y > f.height - A);
        }
      }
      class g {
        constructor(p, f) {
          this.leftPage = null, this.rightPage = null, this.flippingPage = null, this.bottomPage = null, this.direction = null, this.orientation = null, this.shadow = null, this.animation = null, this.pageRect = null, this.boundsRect = null, this.timer = 0, this.safari = !1, this.setting = f, this.app = p;
          const y = new RegExp("Version\\/[\\d\\.]+.*Safari/");
          this.safari = y.exec(window.navigator.userAgent) !== null;
        }
        render(p) {
          if (this.animation !== null) {
            const f = Math.round((p - this.animation.startedAt) / this.animation.durationFrame);
            f < this.animation.frames.length ? this.animation.frames[f]() : (this.animation.onAnimateEnd(), this.animation = null);
          }
          this.timer = p, this.drawFrame();
        }
        start() {
          this.update();
          const p = (f) => {
            this.render(f), requestAnimationFrame(p);
          };
          requestAnimationFrame(p);
        }
        startAnimation(p, f, y) {
          this.finishAnimation(), this.animation = { frames: p, duration: f, durationFrame: f / p.length, onAnimateEnd: y, startedAt: this.timer };
        }
        finishAnimation() {
          this.animation !== null && (this.animation.frames[this.animation.frames.length - 1](), this.animation.onAnimateEnd !== null && this.animation.onAnimateEnd()), this.animation = null;
        }
        update() {
          this.boundsRect = null;
          const p = this.calculateBoundsRect();
          this.orientation !== p && (this.orientation = p, this.app.updateOrientation(p));
        }
        calculateBoundsRect() {
          let p = "landscape";
          const f = this.getBlockWidth(), y = f / 2, A = this.getBlockHeight() / 2, T = this.setting.width / this.setting.height;
          let P = this.setting.width, C = this.setting.height, D = y - P;
          return this.setting.size === "stretch" ? (f < 2 * this.setting.minWidth && this.app.getSettings().usePortrait && (p = "portrait"), P = p === "portrait" ? this.getBlockWidth() : this.getBlockWidth() / 2, P > this.setting.maxWidth && (P = this.setting.maxWidth), C = P / T, C > this.getBlockHeight() && (C = this.getBlockHeight(), P = C * T), D = p === "portrait" ? y - P / 2 - P : y - P) : f < 2 * P && this.app.getSettings().usePortrait && (p = "portrait", D = y - P / 2 - P), this.boundsRect = { left: D, top: A - C / 2, width: 2 * P, height: C, pageWidth: P }, p;
        }
        setShadowData(p, f, y, A) {
          if (!this.app.getSettings().drawShadow) return;
          const T = 100 * this.getSettings().maxShadowOpacity;
          this.shadow = { pos: p, angle: f, width: 3 * this.getRect().pageWidth / 4 * y / 100, opacity: (100 - y) * T / 100 / 100, direction: A, progress: 2 * y };
        }
        clearShadow() {
          this.shadow = null;
        }
        getBlockWidth() {
          return this.app.getUI().getDistElement().offsetWidth;
        }
        getBlockHeight() {
          return this.app.getUI().getDistElement().offsetHeight;
        }
        getDirection() {
          return this.direction;
        }
        getRect() {
          return this.boundsRect === null && this.calculateBoundsRect(), this.boundsRect;
        }
        getSettings() {
          return this.app.getSettings();
        }
        getOrientation() {
          return this.orientation;
        }
        setPageRect(p) {
          this.pageRect = p;
        }
        setDirection(p) {
          this.direction = p;
        }
        setRightPage(p) {
          p !== null && p.setOrientation(1), this.rightPage = p;
        }
        setLeftPage(p) {
          p !== null && p.setOrientation(0), this.leftPage = p;
        }
        setBottomPage(p) {
          p !== null && p.setOrientation(this.direction === 1 ? 0 : 1), this.bottomPage = p;
        }
        setFlippingPage(p) {
          p !== null && p.setOrientation(this.direction === 0 && this.orientation !== "portrait" ? 0 : 1), this.flippingPage = p;
        }
        convertToBook(p) {
          const f = this.getRect();
          return { x: p.x - f.left, y: p.y - f.top };
        }
        isSafari() {
          return this.safari;
        }
        convertToPage(p, f) {
          f || (f = this.direction);
          const y = this.getRect();
          return { x: f === 0 ? p.x - y.left - y.width / 2 : y.width / 2 - p.x + y.left, y: p.y - y.top };
        }
        convertToGlobal(p, f) {
          if (f || (f = this.direction), p == null) return null;
          const y = this.getRect();
          return { x: f === 0 ? p.x + y.left + y.width / 2 : y.width / 2 - p.x + y.left, y: p.y + y.top };
        }
        convertRectToGlobal(p, f) {
          return f || (f = this.direction), { topLeft: this.convertToGlobal(p.topLeft, f), topRight: this.convertToGlobal(p.topRight, f), bottomLeft: this.convertToGlobal(p.bottomLeft, f), bottomRight: this.convertToGlobal(p.bottomRight, f) };
        }
      }
      class b extends g {
        constructor(p, f, y) {
          super(p, f), this.canvas = y, this.ctx = y.getContext("2d");
        }
        getContext() {
          return this.ctx;
        }
        reload() {
        }
        drawFrame() {
          this.clear(), this.orientation !== "portrait" && this.leftPage != null && this.leftPage.simpleDraw(0), this.rightPage != null && this.rightPage.simpleDraw(1), this.bottomPage != null && this.bottomPage.draw(), this.drawBookShadow(), this.flippingPage != null && this.flippingPage.draw(), this.shadow != null && (this.drawOuterShadow(), this.drawInnerShadow());
          const p = this.getRect();
          this.orientation === "portrait" && (this.ctx.beginPath(), this.ctx.rect(p.left + p.pageWidth, p.top, p.width, p.height), this.ctx.clip());
        }
        drawBookShadow() {
          const p = this.getRect();
          this.ctx.save(), this.ctx.beginPath();
          const f = p.width / 20;
          this.ctx.rect(p.left, p.top, p.width, p.height);
          const y = { x: p.left + p.width / 2 - f / 2, y: 0 };
          this.ctx.translate(y.x, y.y);
          const A = this.ctx.createLinearGradient(0, 0, f, 0);
          A.addColorStop(0, "rgba(0, 0, 0, 0)"), A.addColorStop(0.4, "rgba(0, 0, 0, 0.2)"), A.addColorStop(0.49, "rgba(0, 0, 0, 0.1)"), A.addColorStop(0.5, "rgba(0, 0, 0, 0.5)"), A.addColorStop(0.51, "rgba(0, 0, 0, 0.4)"), A.addColorStop(1, "rgba(0, 0, 0, 0)"), this.ctx.clip(), this.ctx.fillStyle = A, this.ctx.fillRect(0, 0, f, 2 * p.height), this.ctx.restore();
        }
        drawOuterShadow() {
          const p = this.getRect();
          this.ctx.save(), this.ctx.beginPath(), this.ctx.rect(p.left, p.top, p.width, p.height);
          const f = this.convertToGlobal({ x: this.shadow.pos.x, y: this.shadow.pos.y });
          this.ctx.translate(f.x, f.y), this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
          const y = this.ctx.createLinearGradient(0, 0, this.shadow.width, 0);
          this.shadow.direction === 0 ? (this.ctx.translate(0, -100), y.addColorStop(0, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), y.addColorStop(1, "rgba(0, 0, 0, 0)")) : (this.ctx.translate(-this.shadow.width, -100), y.addColorStop(0, "rgba(0, 0, 0, 0)"), y.addColorStop(1, "rgba(0, 0, 0, " + this.shadow.opacity + ")")), this.ctx.clip(), this.ctx.fillStyle = y, this.ctx.fillRect(0, 0, this.shadow.width, 2 * p.height), this.ctx.restore();
        }
        drawInnerShadow() {
          const p = this.getRect();
          this.ctx.save(), this.ctx.beginPath();
          const f = this.convertToGlobal({ x: this.shadow.pos.x, y: this.shadow.pos.y }), y = this.convertRectToGlobal(this.pageRect);
          this.ctx.moveTo(y.topLeft.x, y.topLeft.y), this.ctx.lineTo(y.topRight.x, y.topRight.y), this.ctx.lineTo(y.bottomRight.x, y.bottomRight.y), this.ctx.lineTo(y.bottomLeft.x, y.bottomLeft.y), this.ctx.translate(f.x, f.y), this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
          const A = 3 * this.shadow.width / 4, T = this.ctx.createLinearGradient(0, 0, A, 0);
          this.shadow.direction === 0 ? (this.ctx.translate(-A, -100), T.addColorStop(1, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), T.addColorStop(0.9, "rgba(0, 0, 0, 0.05)"), T.addColorStop(0.7, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), T.addColorStop(0, "rgba(0, 0, 0, 0)")) : (this.ctx.translate(0, -100), T.addColorStop(0, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), T.addColorStop(0.1, "rgba(0, 0, 0, 0.05)"), T.addColorStop(0.3, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), T.addColorStop(1, "rgba(0, 0, 0, 0)")), this.ctx.clip(), this.ctx.fillStyle = T, this.ctx.fillRect(0, 0, A, 2 * p.height), this.ctx.restore();
        }
        clear() {
          this.ctx.fillStyle = "white", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
      }
      class E {
        constructor(p, f, y) {
          this.touchPoint = null, this.swipeTimeout = 250, this.onResize = () => {
            this.update();
          }, this.onMouseDown = (T) => {
            if (this.checkTarget(T.target)) {
              const P = this.getMousePos(T.clientX, T.clientY);
              this.app.startUserTouch(P), T.preventDefault();
            }
          }, this.onTouchStart = (T) => {
            if (this.checkTarget(T.target) && T.changedTouches.length > 0) {
              const P = T.changedTouches[0], C = this.getMousePos(P.clientX, P.clientY);
              this.touchPoint = { point: C, time: Date.now() }, setTimeout(() => {
                this.touchPoint !== null && this.app.startUserTouch(C);
              }, this.swipeTimeout), this.app.getSettings().mobileScrollSupport || T.preventDefault();
            }
          }, this.onMouseUp = (T) => {
            const P = this.getMousePos(T.clientX, T.clientY);
            this.app.userStop(P);
          }, this.onMouseMove = (T) => {
            const P = this.getMousePos(T.clientX, T.clientY);
            this.app.userMove(P, !1);
          }, this.onTouchMove = (T) => {
            if (T.changedTouches.length > 0) {
              const P = T.changedTouches[0], C = this.getMousePos(P.clientX, P.clientY);
              this.app.getSettings().mobileScrollSupport ? (this.touchPoint !== null && (Math.abs(this.touchPoint.point.x - C.x) > 10 || this.app.getState() !== "read") && T.cancelable && this.app.userMove(C, !0), this.app.getState() !== "read" && T.preventDefault()) : this.app.userMove(C, !0);
            }
          }, this.onTouchEnd = (T) => {
            if (T.changedTouches.length > 0) {
              const P = T.changedTouches[0], C = this.getMousePos(P.clientX, P.clientY);
              let D = !1;
              if (this.touchPoint !== null) {
                const N = C.x - this.touchPoint.point.x, I = Math.abs(C.y - this.touchPoint.point.y);
                Math.abs(N) > this.swipeDistance && I < 2 * this.swipeDistance && Date.now() - this.touchPoint.time < this.swipeTimeout && (N > 0 ? this.app.flipPrev(this.touchPoint.point.y < this.app.getRender().getRect().height / 2 ? "top" : "bottom") : this.app.flipNext(this.touchPoint.point.y < this.app.getRender().getRect().height / 2 ? "top" : "bottom"), D = !0), this.touchPoint = null;
              }
              this.app.userStop(C, D);
            }
          }, this.parentElement = p, p.classList.add("stf__parent"), p.insertAdjacentHTML("afterbegin", '<div class="stf__wrapper"></div>'), this.wrapper = p.querySelector(".stf__wrapper"), this.app = f;
          const A = this.app.getSettings().usePortrait ? 1 : 2;
          p.style.minWidth = y.minWidth * A + "px", p.style.minHeight = y.minHeight + "px", y.size === "fixed" && (p.style.minWidth = y.width * A + "px", p.style.minHeight = y.height + "px"), y.autoSize && (p.style.width = "100%", p.style.maxWidth = 2 * y.maxWidth + "px"), p.style.display = "block", window.addEventListener("resize", this.onResize, !1), this.swipeDistance = y.swipeDistance;
        }
        destroy() {
          this.app.getSettings().useMouseEvents && this.removeHandlers(), this.distElement.remove(), this.wrapper.remove();
        }
        getDistElement() {
          return this.distElement;
        }
        getWrapper() {
          return this.wrapper;
        }
        setOrientationStyle(p) {
          this.wrapper.classList.remove("--portrait", "--landscape"), p === "portrait" ? (this.app.getSettings().autoSize && (this.wrapper.style.paddingBottom = this.app.getSettings().height / this.app.getSettings().width * 100 + "%"), this.wrapper.classList.add("--portrait")) : (this.app.getSettings().autoSize && (this.wrapper.style.paddingBottom = this.app.getSettings().height / (2 * this.app.getSettings().width) * 100 + "%"), this.wrapper.classList.add("--landscape")), this.update();
        }
        removeHandlers() {
          window.removeEventListener("resize", this.onResize), this.distElement.removeEventListener("mousedown", this.onMouseDown), this.distElement.removeEventListener("touchstart", this.onTouchStart), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("touchend", this.onTouchEnd);
        }
        setHandlers() {
          window.addEventListener("resize", this.onResize, !1), this.app.getSettings().useMouseEvents && (this.distElement.addEventListener("mousedown", this.onMouseDown), this.distElement.addEventListener("touchstart", this.onTouchStart), window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("touchmove", this.onTouchMove, { passive: !this.app.getSettings().mobileScrollSupport }), window.addEventListener("mouseup", this.onMouseUp), window.addEventListener("touchend", this.onTouchEnd));
        }
        getMousePos(p, f) {
          const y = this.distElement.getBoundingClientRect();
          return { x: p - y.left, y: f - y.top };
        }
        checkTarget(p) {
          return !this.app.getSettings().clickEventForward || !["a", "button"].includes(p.tagName.toLowerCase());
        }
      }
      class w extends E {
        constructor(p, f, y, A) {
          super(p, f, y), this.wrapper.insertAdjacentHTML("afterbegin", '<div class="stf__block"></div>'), this.distElement = p.querySelector(".stf__block"), this.items = A;
          for (const T of A) this.distElement.appendChild(T);
          this.setHandlers();
        }
        clear() {
          for (const p of this.items) this.parentElement.appendChild(p);
        }
        updateItems(p) {
          this.removeHandlers(), this.distElement.innerHTML = "";
          for (const f of p) this.distElement.appendChild(f);
          this.items = p, this.setHandlers();
        }
        update() {
          this.app.getRender().update();
        }
      }
      class M extends E {
        constructor(p, f, y) {
          super(p, f, y), this.wrapper.innerHTML = '<canvas class="stf__canvas"></canvas>', this.canvas = p.querySelectorAll("canvas")[0], this.distElement = this.canvas, this.resizeCanvas(), this.setHandlers();
        }
        resizeCanvas() {
          const p = getComputedStyle(this.canvas), f = parseInt(p.getPropertyValue("width"), 10), y = parseInt(p.getPropertyValue("height"), 10);
          this.canvas.width = f, this.canvas.height = y;
        }
        getCanvas() {
          return this.canvas;
        }
        update() {
          this.resizeCanvas(), this.app.getRender().update();
        }
      }
      class k extends g {
        constructor(p, f, y) {
          super(p, f), this.outerShadow = null, this.innerShadow = null, this.hardShadow = null, this.hardInnerShadow = null, this.element = y, this.createShadows();
        }
        createShadows() {
          this.element.insertAdjacentHTML("beforeend", `<div class="stf__outerShadow"></div>
             <div class="stf__innerShadow"></div>
             <div class="stf__hardShadow"></div>
             <div class="stf__hardInnerShadow"></div>`), this.outerShadow = this.element.querySelector(".stf__outerShadow"), this.innerShadow = this.element.querySelector(".stf__innerShadow"), this.hardShadow = this.element.querySelector(".stf__hardShadow"), this.hardInnerShadow = this.element.querySelector(".stf__hardInnerShadow");
        }
        clearShadow() {
          super.clearShadow(), this.outerShadow.style.cssText = "display: none", this.innerShadow.style.cssText = "display: none", this.hardShadow.style.cssText = "display: none", this.hardInnerShadow.style.cssText = "display: none";
        }
        reload() {
          this.element.querySelector(".stf__outerShadow") || this.createShadows();
        }
        drawHardInnerShadow() {
          const p = this.getRect(), f = this.shadow.progress > 100 ? 200 - this.shadow.progress : this.shadow.progress;
          let y = (100 - f) * (2.5 * p.pageWidth) / 100 + 20;
          y > p.pageWidth && (y = p.pageWidth);
          let A = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 5).toString(10)};
            width: ${y}px;
            height: ${p.height}px;
            background: linear-gradient(to right,
                rgba(0, 0, 0, ${this.shadow.opacity * f / 100}) 5%,
                rgba(0, 0, 0, 0) 100%);
            left: ${p.left + p.width / 2}px;
            transform-origin: 0 0;
        `;
          A += this.getDirection() === 0 && this.shadow.progress > 100 || this.getDirection() === 1 && this.shadow.progress <= 100 ? "transform: translate3d(0, 0, 0);" : "transform: translate3d(0, 0, 0) rotateY(180deg);", this.hardInnerShadow.style.cssText = A;
        }
        drawHardOuterShadow() {
          const p = this.getRect();
          let f = (100 - (this.shadow.progress > 100 ? 200 - this.shadow.progress : this.shadow.progress)) * (2.5 * p.pageWidth) / 100 + 20;
          f > p.pageWidth && (f = p.pageWidth);
          let y = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 4).toString(10)};
            width: ${f}px;
            height: ${p.height}px;
            background: linear-gradient(to left, rgba(0, 0, 0, ${this.shadow.opacity}) 5%, rgba(0, 0, 0, 0) 100%);
            left: ${p.left + p.width / 2}px;
            transform-origin: 0 0;
        `;
          y += this.getDirection() === 0 && this.shadow.progress > 100 || this.getDirection() === 1 && this.shadow.progress <= 100 ? "transform: translate3d(0, 0, 0) rotateY(180deg);" : "transform: translate3d(0, 0, 0);", this.hardShadow.style.cssText = y;
        }
        drawInnerShadow() {
          const p = this.getRect(), f = 3 * this.shadow.width / 4, y = this.getDirection() === 0 ? f : 0, A = this.getDirection() === 0 ? "to left" : "to right", T = this.convertToGlobal(this.shadow.pos), P = this.shadow.angle + 3 * Math.PI / 2, C = [this.pageRect.topLeft, this.pageRect.topRight, this.pageRect.bottomRight, this.pageRect.bottomLeft];
          let D = "polygon( ";
          for (const I of C) {
            let B = this.getDirection() === 1 ? { x: -I.x + this.shadow.pos.x, y: I.y - this.shadow.pos.y } : { x: I.x - this.shadow.pos.x, y: I.y - this.shadow.pos.y };
            B = o.GetRotatedPoint(B, { x: y, y: 100 }, P), D += B.x + "px " + B.y + "px, ";
          }
          D = D.slice(0, -2), D += ")";
          const N = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 10).toString(10)};
            width: ${f}px;
            height: ${2 * p.height}px;
            background: linear-gradient(${A},
                rgba(0, 0, 0, ${this.shadow.opacity}) 5%,
                rgba(0, 0, 0, 0.05) 15%,
                rgba(0, 0, 0, ${this.shadow.opacity}) 35%,
                rgba(0, 0, 0, 0) 100%);
            transform-origin: ${y}px 100px;
            transform: translate3d(${T.x - y}px, ${T.y - 100}px, 0) rotate(${P}rad);
            clip-path: ${D};
            -webkit-clip-path: ${D};
        `;
          this.innerShadow.style.cssText = N;
        }
        drawOuterShadow() {
          const p = this.getRect(), f = this.convertToGlobal({ x: this.shadow.pos.x, y: this.shadow.pos.y }), y = this.shadow.angle + 3 * Math.PI / 2, A = this.getDirection() === 1 ? this.shadow.width : 0, T = this.getDirection() === 0 ? "to right" : "to left", P = [{ x: 0, y: 0 }, { x: p.pageWidth, y: 0 }, { x: p.pageWidth, y: p.height }, { x: 0, y: p.height }];
          let C = "polygon( ";
          for (const N of P) if (N !== null) {
            let I = this.getDirection() === 1 ? { x: -N.x + this.shadow.pos.x, y: N.y - this.shadow.pos.y } : { x: N.x - this.shadow.pos.x, y: N.y - this.shadow.pos.y };
            I = o.GetRotatedPoint(I, { x: A, y: 100 }, y), C += I.x + "px " + I.y + "px, ";
          }
          C = C.slice(0, -2), C += ")";
          const D = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2 * p.height}px;
            background: linear-gradient(${T}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${A}px 100px;
            transform: translate3d(${f.x - A}px, ${f.y - 100}px, 0) rotate(${y}rad);
            clip-path: ${C};
            -webkit-clip-path: ${C};
        `;
          this.outerShadow.style.cssText = D;
        }
        drawLeftPage() {
          this.orientation !== "portrait" && this.leftPage !== null && (this.direction === 1 && this.flippingPage !== null && this.flippingPage.getDrawingDensity() === "hard" ? (this.leftPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.leftPage.setHardDrawingAngle(180 + this.flippingPage.getHardAngle()), this.leftPage.draw(this.flippingPage.getDrawingDensity())) : this.leftPage.simpleDraw(0));
        }
        drawRightPage() {
          this.rightPage !== null && (this.direction === 0 && this.flippingPage !== null && this.flippingPage.getDrawingDensity() === "hard" ? (this.rightPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.rightPage.setHardDrawingAngle(180 + this.flippingPage.getHardAngle()), this.rightPage.draw(this.flippingPage.getDrawingDensity())) : this.rightPage.simpleDraw(1));
        }
        drawBottomPage() {
          if (this.bottomPage === null) return;
          const p = this.flippingPage != null ? this.flippingPage.getDrawingDensity() : null;
          this.orientation === "portrait" && this.direction === 1 || (this.bottomPage.getElement().style.zIndex = (this.getSettings().startZIndex + 3).toString(10), this.bottomPage.draw(p));
        }
        drawFrame() {
          this.clear(), this.drawLeftPage(), this.drawRightPage(), this.drawBottomPage(), this.flippingPage != null && (this.flippingPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.flippingPage.draw()), this.shadow != null && this.flippingPage !== null && (this.flippingPage.getDrawingDensity() === "soft" ? (this.drawOuterShadow(), this.drawInnerShadow()) : (this.drawHardOuterShadow(), this.drawHardInnerShadow()));
        }
        clear() {
          for (const p of this.app.getPageCollection().getPages()) p !== this.leftPage && p !== this.rightPage && p !== this.flippingPage && p !== this.bottomPage && (p.getElement().style.cssText = "display: none"), p.getTemporaryCopy() !== this.flippingPage && p.hideTemporaryCopy();
        }
        update() {
          super.update(), this.rightPage !== null && this.rightPage.setOrientation(1), this.leftPage !== null && this.leftPage.setOrientation(0);
        }
      }
      class L {
        constructor() {
          this._default = { startPage: 0, size: "fixed", width: 0, height: 0, minWidth: 0, maxWidth: 0, minHeight: 0, maxHeight: 0, drawShadow: !0, flippingTime: 1e3, usePortrait: !0, startZIndex: 0, autoSize: !0, maxShadowOpacity: 1, showCover: !1, mobileScrollSupport: !0, swipeDistance: 30, clickEventForward: !0, useMouseEvents: !0, showPageCorners: !0, disableFlipByClick: !1 };
        }
        getSettings(p) {
          const f = this._default;
          if (Object.assign(f, p), f.size !== "stretch" && f.size !== "fixed") throw new Error('Invalid size type. Available only "fixed" and "stretch" value');
          if (f.width <= 0 || f.height <= 0) throw new Error("Invalid width or height");
          if (f.flippingTime <= 0) throw new Error("Invalid flipping time");
          return f.size === "stretch" ? (f.minWidth <= 0 && (f.minWidth = 100), f.maxWidth < f.minWidth && (f.maxWidth = 2e3), f.minHeight <= 0 && (f.minHeight = 100), f.maxHeight < f.minHeight && (f.maxHeight = 2e3)) : (f.minWidth = f.width, f.maxWidth = f.width, f.minHeight = f.height, f.maxHeight = f.height), f;
        }
      }
      (function(R, p) {
        p === void 0 && (p = {});
        var f = p.insertAt;
        if (typeof document < "u") {
          var y = document.head || document.getElementsByTagName("head")[0], A = document.createElement("style");
          A.type = "text/css", f === "top" && y.firstChild ? y.insertBefore(A, y.firstChild) : y.appendChild(A), A.styleSheet ? A.styleSheet.cssText = R : A.appendChild(document.createTextNode(R));
        }
      })(`.stf__parent {
  position: relative;
  display: block;
  box-sizing: border-box;
  transform: translateZ(0);

  -ms-touch-action: pan-y;
  touch-action: pan-y;
}

.sft__wrapper {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.stf__parent canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.stf__block {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  perspective: 2000px;
}

.stf__item {
  display: none;
  position: absolute;
  transform-style: preserve-3d;
}

.stf__outerShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__innerShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__hardShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__hardInnerShadow {
  position: absolute;
  left: 0;
  top: 0;
}`), e.PageFlip = class extends class {
        constructor() {
          this.events = /* @__PURE__ */ new Map();
        }
        on(R, p) {
          return this.events.has(R) ? this.events.get(R).push(p) : this.events.set(R, [p]), this;
        }
        off(R) {
          this.events.delete(R);
        }
        trigger(R, p, f = null) {
          if (this.events.has(R)) for (const y of this.events.get(R)) y({ data: f, object: p });
        }
      } {
        constructor(R, p) {
          super(), this.isUserTouch = !1, this.isUserMove = !1, this.setting = null, this.pages = null, this.setting = new L().getSettings(p), this.block = R;
        }
        destroy() {
          this.ui.destroy(), this.block.remove();
        }
        update() {
          this.render.update(), this.pages.show();
        }
        loadFromImages(R) {
          this.ui = new M(this.block, this, this.setting);
          const p = this.ui.getCanvas();
          this.render = new b(this, this.setting, p), this.flipController = new u(this.render, this), this.pages = new a(this, this.render, R), this.pages.load(), this.render.start(), this.pages.show(this.setting.startPage), setTimeout(() => {
            this.ui.update(), this.trigger("init", this, { page: this.setting.startPage, mode: this.render.getOrientation() });
          }, 1);
        }
        loadFromHTML(R) {
          this.ui = new w(this.block, this, this.setting, R), this.render = new k(this, this.setting, this.ui.getDistElement()), this.flipController = new u(this.render, this), this.pages = new c(this, this.render, this.ui.getDistElement(), R), this.pages.load(), this.render.start(), this.pages.show(this.setting.startPage), setTimeout(() => {
            this.ui.update(), this.trigger("init", this, { page: this.setting.startPage, mode: this.render.getOrientation() });
          }, 1);
        }
        updateFromImages(R) {
          const p = this.pages.getCurrentPageIndex();
          this.pages.destroy(), this.pages = new a(this, this.render, R), this.pages.load(), this.pages.show(p), this.trigger("update", this, { page: p, mode: this.render.getOrientation() });
        }
        updateFromHtml(R) {
          const p = this.pages.getCurrentPageIndex();
          this.pages.destroy(), this.pages = new c(this, this.render, this.ui.getDistElement(), R), this.pages.load(), this.ui.updateItems(R), this.render.reload(), this.pages.show(p), this.trigger("update", this, { page: p, mode: this.render.getOrientation() });
        }
        clear() {
          this.pages.destroy(), this.ui.clear();
        }
        turnToPrevPage() {
          this.pages.showPrev();
        }
        turnToNextPage() {
          this.pages.showNext();
        }
        turnToPage(R) {
          this.pages.show(R);
        }
        flipNext(R = "top") {
          this.flipController.flipNext(R);
        }
        flipPrev(R = "top") {
          this.flipController.flipPrev(R);
        }
        flip(R, p = "top") {
          this.flipController.flipToPage(R, p);
        }
        updateState(R) {
          this.trigger("changeState", this, R);
        }
        updatePageIndex(R) {
          this.trigger("flip", this, R);
        }
        updateOrientation(R) {
          this.ui.setOrientationStyle(R), this.update(), this.trigger("changeOrientation", this, R);
        }
        getPageCount() {
          return this.pages.getPageCount();
        }
        getCurrentPageIndex() {
          return this.pages.getCurrentPageIndex();
        }
        getPage(R) {
          return this.pages.getPage(R);
        }
        getRender() {
          return this.render;
        }
        getFlipController() {
          return this.flipController;
        }
        getOrientation() {
          return this.render.getOrientation();
        }
        getBoundsRect() {
          return this.render.getRect();
        }
        getSettings() {
          return this.setting;
        }
        getUI() {
          return this.ui;
        }
        getState() {
          return this.flipController.getState();
        }
        getPageCollection() {
          return this.pages;
        }
        startUserTouch(R) {
          this.mousePosition = R, this.isUserTouch = !0, this.isUserMove = !1;
        }
        userMove(R, p) {
          this.isUserTouch || p || !this.setting.showPageCorners ? this.isUserTouch && o.GetDistanceBetweenTwoPoint(this.mousePosition, R) > 5 && (this.isUserMove = !0, this.flipController.fold(R)) : this.flipController.showCorner(R);
        }
        userStop(R, p = !1) {
          this.isUserTouch && (this.isUserTouch = !1, p || (this.isUserMove ? this.flipController.stopMove() : this.flipController.flip(R)));
        }
      }, Object.defineProperty(e, "__esModule", { value: !0 });
    }));
  })(Bh, Bh.exports)), Bh.exports;
}
var cA = hA();
const dA = Gi.forwardRef((h, t) => {
  const e = Pi(null), i = Pi([]), s = Pi(), [r, a] = go([]);
  $m(t, () => ({
    pageFlip: () => s.current
  }));
  const o = zs(() => {
    s.current && s.current.clear();
  }, []), l = zs(() => {
    const c = s.current;
    c && (c.off("flip"), c.off("changeOrientation"), c.off("changeState"), c.off("init"), c.off("update"));
  }, []);
  return jt(() => {
    if (i.current = [], h.children) {
      const c = Gi.Children.map(h.children, (d) => Gi.cloneElement(d, {
        ref: (u) => {
          u && i.current.push(u);
        }
      }));
      (!h.renderOnlyPageLengthChange || r.length !== c.length) && (c.length < r.length && o(), a(c));
    }
  }, [h.children]), jt(() => {
    const c = () => {
      const d = s.current;
      d && (h.onFlip && d.on("flip", (u) => h.onFlip(u)), h.onChangeOrientation && d.on("changeOrientation", (u) => h.onChangeOrientation(u)), h.onChangeState && d.on("changeState", (u) => h.onChangeState(u)), h.onInit && d.on("init", (u) => h.onInit(u)), h.onUpdate && d.on("update", (u) => h.onUpdate(u)));
    };
    r.length > 0 && i.current.length > 0 && (l(), e.current && !s.current && (s.current = new cA.PageFlip(e.current, h)), s.current.getFlipController() ? s.current.updateFromHtml(i.current) : s.current.loadFromHTML(i.current), c());
  }, [r]), Gi.createElement("div", { ref: e, className: h.className, style: h.style }, r);
}), uA = Gi.memo(dA), fA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: uA
}, Symbol.toStringTag, { value: "Module" }));
export {
  bA as default
};
