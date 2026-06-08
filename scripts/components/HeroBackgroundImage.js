import { jsx as te, jsxs as pe } from "react/jsx-runtime";
import ue, { useState as ot, useRef as at, useEffect as Ne } from "react";
function lt(i, d) {
  for (var h = 0; h < d.length; h++) {
    const S = d[h];
    if (typeof S != "string" && !Array.isArray(S)) {
      for (const y in S)
        if (y !== "default" && !(y in i)) {
          const g = Object.getOwnPropertyDescriptor(S, y);
          g && Object.defineProperty(i, y, g.get ? g : {
            enumerable: !0,
            get: () => S[y]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
const st = ({
  text: i = "Button",
  href: d = void 0,
  variant: h = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline
  size: S = "btn-md",
  // btn-sm , btn-md
  className: y = "",
  disabled: g = !1,
  onClick: L = void 0,
  attributes: E = {},
  ...D
}) => {
  const M = (V) => {
    switch (V) {
      case "light":
        return "btn-light";
      case "dark":
        return "btn-dark";
      case "light-outlined":
        return "btn-light-outlined";
      case "dark-outlined":
        return "btn-dark-outlined";
      case "light-no-outline":
        return "btn-light-no-outline";
      case "dark-no-outline":
        return "btn-dark-no-outline";
      default:
        return "btn-light";
    }
  }, X = (V) => {
    switch (V) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, $ = `btn ${M(h)} ${X(S)} ${y}`.trim();
  return d ? /* @__PURE__ */ te(
    "a",
    {
      href: d,
      className: $,
      onClick: L,
      ...D,
      ...E ?? {},
      children: i
    }
  ) : /* @__PURE__ */ te(
    "button",
    {
      type: D.type || "button",
      className: $,
      disabled: g,
      onClick: L,
      ...D,
      ...E ?? {},
      children: i
    }
  );
};
let me;
const Pe = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  white: "text-white"
};
function Kt({
  slides: i = [],
  size: d = "default",
  // 'default' | 'bigger'
  height: h = "normal",
  // 'normal' | 'small'
  buttonSize: S = "btn-md",
  carouselLabel: y = "Hero content",
  className: g = "",
  id: L = "",
  ...E
}) {
  if (!(i != null && i.length)) return null;
  const [D, W] = ot(0), M = at(null), X = d === "bigger", $ = h === "small", V = typeof window < "u" && window.location.origin.indexOf("author") > -1, Q = (o) => ["center", "right", "left"].includes(o) ? o : "left", P = i[D] ?? i[0], Z = (P == null ? void 0 : P.title) || (P == null ? void 0 : P.description) || "";
  Ne(() => {
    i.length > 1 && !me && Promise.all([
      Promise.resolve().then(() => $t).then((o) => {
        me = o.default;
      }),
      Promise.resolve().then(() => Ft),
      Promise.resolve().then(() => Bt)
    ]).catch((o) => console.error("Failed to load slick:", o));
  }, [i.length]), Ne(() => {
    const o = () => {
      const f = M.current;
      f && f.querySelectorAll(".slick-slide").forEach((a) => {
        a.getAttribute("aria-hidden") === "true" ? a.setAttribute("inert", "") : a.removeAttribute("inert");
      });
    };
    if (i.length > 1) {
      const f = window.requestAnimationFrame(o);
      return () => window.cancelAnimationFrame(f);
    }
  }, [D, i.length]);
  const F = {
    dots: !0,
    infinite: !0,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !V,
    autoplaySpeed: 5e3,
    arrows: !1,
    pauseOnHover: !0,
    pauseOnFocus: !0,
    cssEase: "linear",
    afterChange: W,
    customPaging: (o) => /* @__PURE__ */ te(
      "button",
      {
        type: "button",
        "aria-label": D === o ? `Current slide, slide ${o + 1} of ${i.length}` : `Go to slide ${o + 1} of ${i.length}`,
        "aria-current": D === o ? "true" : void 0
      }
    )
  }, Y = [
    "hero-background-img relative w-full overflow-hidden",
    $ && "hero-background-img--height-small",
    $ ? "min-h-[240px]" : X ? "min-h-[900px] max-sm:min-h-[100vh]" : "min-h-[700px] max-sm:min-h-[100vh]",
    g
  ].filter(Boolean).join(" "), J = [
    "relative flex w-full z-20",
    $ ? "min-h-[240px] items-center" : X ? "min-h-[900px] items-start" : "min-h-[700px] items-center"
  ].filter(Boolean).join(" ");
  function U({ slide: o, slideIndex: f }) {
    var p, _;
    const a = Q(o.textAlignment), r = o.titleSize === "big" ? "big" : "normal", v = i.length > 1 && f > 0 ? "div" : "h1", w = a === "center" ? "items-center text-center mx-auto" : a === "right" ? "items-start text-left lg:ml-auto" : "items-start text-left", c = $ ? "pb-hero-padding-y" : i.length > 1 ? "pb-[calc(var(--spacing-hero-padding-y)+var(--spacing-80))] lg:pb-hero-padding-y" : "pb-hero-padding-y", b = Pe[o.titleAccentColor] || "", O = Pe[o.titleColor] || Pe.white, t = ["font-accent font-normal m-0", $ ? "text-display-s" : X ? "text-display-m leading-display-m" : "text-display-xl leading-display-xl", b].filter(Boolean).join(" "), R = $ ? "mb-4" : "mb-10", l = $ ? `${O} font-bold m-0 ${R} text-display-m leading-display-m` : r === "big" ? `${O} font-bold m-0 ${R} text-display-l leading-display-l` : X ? `${O} font-normal m-0 ${R} text-display-m leading-display-m` : `${O} font-normal m-0 ${R} text-display-xl leading-display-xl max-lg:text-display-l max-lg:leading-display-l max-md:text-display-m max-md:leading-display-m`, e = X ? "w-full lg:max-w-[530px]" : "w-full lg:max-w-1/2", n = $ ? `pt-hero-padding-y ${c}` : X ? `pt-80 ${c}` : `pt-hero-padding-y ${c}`;
    return /* @__PURE__ */ pe("div", { className: `${e} flex flex-col ${$ ? "gap-8" : "gap-hero-spacing"} px-hero-padding-x ${n} text-white ${w}`, children: [
      /* @__PURE__ */ pe("div", { className: $ ? "space-y-4" : "spacing-y-hero-text--spacing-y", children: [
        o.titleAccent && /* @__PURE__ */ te("p", { className: t, children: o.titleAccent }),
        o.title && /* @__PURE__ */ te(v, { className: l, children: o.title }),
        o.description && /* @__PURE__ */ te("p", { className: `m-0 ${$ ? "text-body-default" : "text-body-large leading-body-large"}`, children: o.description })
      ] }),
      ((p = o.buttons) == null ? void 0 : p.length) > 0 && /* @__PURE__ */ te("div", { className: "flex flex-wrap gap-10 max-sm:flex-col max-sm:gap-12 max-sm:w-full", children: o.buttons.map((m, T) => /* @__PURE__ */ te(
        st,
        {
          text: m.text,
          href: m.href,
          variant: m.variant ?? "light",
          size: m.size ?? S,
          onClick: m.onClick,
          className: "flex-shrink-0 max-sm:w-full"
        },
        T
      )) }),
      ((_ = o.logos) == null ? void 0 : _.length) > 0 && /* @__PURE__ */ te("div", { className: "flex items-center gap-8 max-sm:w-full", children: o.logos.map((m, T) => /* @__PURE__ */ te("div", { className: "flex items-center justify-center max-w-120 h-auto", children: /* @__PURE__ */ te("img", { src: m.src, alt: m.alt ?? "", className: "w-full h-auto object-contain rounded-10 max-w-full" }) }, T)) }),
      o.trustpilotWidget && /* @__PURE__ */ te("div", { className: "mt-8 flex flex-row w-full sm:max-w-[219px]", children: typeof o.trustpilotWidget == "string" ? /* @__PURE__ */ te("div", { className: "w-full", dangerouslySetInnerHTML: { __html: o.trustpilotWidget } }) : o.trustpilotWidget })
    ] });
  }
  const s = (o, f) => /* @__PURE__ */ pe(
    "div",
    {
      className: `relative w-full outline-none${$ ? " min-h-[240px]" : ""}`.trim(),
      ...o.attributes || {},
      children: [
        o.backgroundImage && (typeof o.backgroundImage == "string" && o.backgroundImage.includes("<") ? /* @__PURE__ */ te(
          "div",
          {
            className: "absolute inset-0 z-0 [&_picture]:w-full [&_picture]:h-full [&_img]:w-full [&_img]:h-full [&_img]:object-cover [&_img]:object-center [&_img]:block",
            dangerouslySetInnerHTML: { __html: o.backgroundImage }
          }
        ) : /* @__PURE__ */ te(
          "img",
          {
            src: o.backgroundImage,
            alt: "",
            className: "absolute inset-0 z-0 w-full h-full object-cover object-center",
            fetchPriority: "high"
          }
        )),
        /* @__PURE__ */ te("div", { className: "absolute inset-0 z-10 bg-grey-950/30", "aria-hidden": !0 }),
        /* @__PURE__ */ te("div", { className: J, children: /* @__PURE__ */ te(U, { slide: o, slideIndex: f }) })
      ]
    },
    o.key ?? f
  ), u = i.length === 1;
  return /* @__PURE__ */ pe(
    "div",
    {
      ref: M,
      className: Y,
      id: L,
      role: "region",
      "aria-roledescription": u ? void 0 : "carousel",
      "aria-label": u ? void 0 : y,
      ...E,
      children: [
        !u && /* @__PURE__ */ pe("div", { "aria-live": "polite", "aria-atomic": "true", className: "sr-only", children: [
          "Slide ",
          D + 1,
          " of ",
          i.length,
          Z ? `: ${Z}` : ""
        ] }),
        u || !me ? /* @__PURE__ */ te("div", { className: "w-full", children: i.map((o, f) => s(o, f)) }) : /* @__PURE__ */ te(me, { ...F, className: "w-full hero-background-img-slick", children: i.map((o, f) => s(o, f)) })
      ]
    }
  );
}
var Se = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ut(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function ct(i) {
  if (Object.prototype.hasOwnProperty.call(i, "__esModule")) return i;
  var d = i.default;
  if (typeof d == "function") {
    var h = function S() {
      return this instanceof S ? Reflect.construct(d, arguments, this.constructor) : d.apply(this, arguments);
    };
    h.prototype = d.prototype;
  } else h = {};
  return Object.defineProperty(h, "__esModule", { value: !0 }), Object.keys(i).forEach(function(S) {
    var y = Object.getOwnPropertyDescriptor(i, S);
    Object.defineProperty(h, S, y.get ? y : {
      enumerable: !0,
      get: function() {
        return i[S];
      }
    });
  }), h;
}
var Ce = {}, Te = {}, ve = {}, je = {}, Ie;
function ft() {
  return Ie || (Ie = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
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
    i.default = d;
  })(je)), je;
}
var xe, He;
function dt() {
  if (He) return xe;
  He = 1;
  var i = "Expected a function", d = NaN, h = "[object Symbol]", S = /^\s+|\s+$/g, y = /^[-+]0x[0-9a-f]+$/i, g = /^0b[01]+$/i, L = /^0o[0-7]+$/i, E = parseInt, D = typeof Se == "object" && Se && Se.Object === Object && Se, W = typeof self == "object" && self && self.Object === Object && self, M = D || W || Function("return this")(), X = Object.prototype, $ = X.toString, V = Math.max, Q = Math.min, P = function() {
    return M.Date.now();
  };
  function Z(s, u, o) {
    var f, a, r, v, w, c, b = 0, O = !1, C = !1, t = !0;
    if (typeof s != "function")
      throw new TypeError(i);
    u = U(u) || 0, F(o) && (O = !!o.leading, C = "maxWait" in o, r = C ? V(U(o.maxWait) || 0, u) : r, t = "trailing" in o ? !!o.trailing : t);
    function R(j) {
      var I = f, H = a;
      return f = a = void 0, b = j, v = s.apply(H, I), v;
    }
    function l(j) {
      return b = j, w = setTimeout(p, u), O ? R(j) : v;
    }
    function e(j) {
      var I = j - c, H = j - b, A = u - I;
      return C ? Q(A, r - H) : A;
    }
    function n(j) {
      var I = j - c, H = j - b;
      return c === void 0 || I >= u || I < 0 || C && H >= r;
    }
    function p() {
      var j = P();
      if (n(j))
        return _(j);
      w = setTimeout(p, e(j));
    }
    function _(j) {
      return w = void 0, t && f ? R(j) : (f = a = void 0, v);
    }
    function m() {
      w !== void 0 && clearTimeout(w), b = 0, f = c = a = w = void 0;
    }
    function T() {
      return w === void 0 ? v : _(P());
    }
    function k() {
      var j = P(), I = n(j);
      if (f = arguments, a = this, c = j, I) {
        if (w === void 0)
          return l(c);
        if (C)
          return w = setTimeout(p, u), R(c);
      }
      return w === void 0 && (w = setTimeout(p, u)), v;
    }
    return k.cancel = m, k.flush = T, k;
  }
  function F(s) {
    var u = typeof s;
    return !!s && (u == "object" || u == "function");
  }
  function Y(s) {
    return !!s && typeof s == "object";
  }
  function J(s) {
    return typeof s == "symbol" || Y(s) && $.call(s) == h;
  }
  function U(s) {
    if (typeof s == "number")
      return s;
    if (J(s))
      return d;
    if (F(s)) {
      var u = typeof s.valueOf == "function" ? s.valueOf() : s;
      s = F(u) ? u + "" : u;
    }
    if (typeof s != "string")
      return s === 0 ? s : +s;
    s = s.replace(S, "");
    var o = g.test(s);
    return o || L.test(s) ? E(s.slice(2), o ? 2 : 8) : y.test(s) ? d : +s;
  }
  return xe = Z, xe;
}
var Ee = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ae;
function _e() {
  return Ae || (Ae = 1, (function(i) {
    (function() {
      var d = {}.hasOwnProperty;
      function h() {
        for (var g = "", L = 0; L < arguments.length; L++) {
          var E = arguments[L];
          E && (g = y(g, S(E)));
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
        for (var E in g)
          d.call(g, E) && g[E] && (L = y(L, E));
        return L;
      }
      function y(g, L) {
        return L ? g ? g + " " + L : g + L : g;
      }
      i.exports ? (h.default = h, i.exports = h) : window.classNames = h;
    })();
  })(Ee)), Ee.exports;
}
var x = {}, Le = {}, We;
function Je() {
  return We || (We = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
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
    i.default = S;
  })(Le)), Le;
}
var qe;
function ge() {
  if (qe) return x;
  qe = 1, Object.defineProperty(x, "__esModule", {
    value: !0
  }), x.checkSpecKeys = x.checkNavigable = x.changeSlide = x.canUseDOM = x.canGoNext = void 0, x.clamp = W, x.extractObject = void 0, x.filterSettings = R, x.validSettings = x.swipeStart = x.swipeMove = x.swipeEnd = x.slidesOnRight = x.slidesOnLeft = x.slideHandler = x.siblingDirection = x.safePreventDefault = x.lazyStartIndex = x.lazySlidesOnRight = x.lazySlidesOnLeft = x.lazyEndIndex = x.keyHandler = x.initializedState = x.getWidth = x.getTrackLeft = x.getTrackCSS = x.getTrackAnimateCSS = x.getTotalSlides = x.getSwipeDirection = x.getSlideCount = x.getRequiredLazySlides = x.getPreClones = x.getPostClones = x.getOnDemandLazySlides = x.getNavigableIndexes = x.getHeight = void 0;
  var i = h(ue), d = h(Je());
  function h(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function S(l) {
    "@babel/helpers - typeof";
    return S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, S(l);
  }
  function y(l, e) {
    var n = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(l);
      e && (p = p.filter(function(_) {
        return Object.getOwnPropertyDescriptor(l, _).enumerable;
      })), n.push.apply(n, p);
    }
    return n;
  }
  function g(l) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2 ? y(Object(n), !0).forEach(function(p) {
        L(l, p, n[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(p) {
        Object.defineProperty(l, p, Object.getOwnPropertyDescriptor(n, p));
      });
    }
    return l;
  }
  function L(l, e, n) {
    return (e = E(e)) in l ? Object.defineProperty(l, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : l[e] = n, l;
  }
  function E(l) {
    var e = D(l, "string");
    return S(e) == "symbol" ? e : e + "";
  }
  function D(l, e) {
    if (S(l) != "object" || !l) return l;
    var n = l[Symbol.toPrimitive];
    if (n !== void 0) {
      var p = n.call(l, e);
      if (S(p) != "object") return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(l);
  }
  function W(l, e, n) {
    return Math.max(e, Math.min(l, n));
  }
  var M = x.safePreventDefault = function(e) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(e._reactName) || e.preventDefault();
  }, X = x.getOnDemandLazySlides = function(e) {
    for (var n = [], p = $(e), _ = V(e), m = p; m < _; m++)
      e.lazyLoadedList.indexOf(m) < 0 && n.push(m);
    return n;
  };
  x.getRequiredLazySlides = function(e) {
    for (var n = [], p = $(e), _ = V(e), m = p; m < _; m++)
      n.push(m);
    return n;
  };
  var $ = x.lazyStartIndex = function(e) {
    return e.currentSlide - Q(e);
  }, V = x.lazyEndIndex = function(e) {
    return e.currentSlide + P(e);
  }, Q = x.lazySlidesOnLeft = function(e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }, P = x.lazySlidesOnRight = function(e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }, Z = x.getWidth = function(e) {
    return e && e.offsetWidth || 0;
  }, F = x.getHeight = function(e) {
    return e && e.offsetHeight || 0;
  }, Y = x.getSwipeDirection = function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, p, _, m, T;
    return p = e.startX - e.curX, _ = e.startY - e.curY, m = Math.atan2(_, p), T = Math.round(m * 180 / Math.PI), T < 0 && (T = 360 - Math.abs(T)), T <= 45 && T >= 0 || T <= 360 && T >= 315 ? "left" : T >= 135 && T <= 225 ? "right" : n === !0 ? T >= 35 && T <= 135 ? "up" : "down" : "vertical";
  }, J = x.canGoNext = function(e) {
    var n = !0;
    return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (n = !1), n;
  };
  x.extractObject = function(e, n) {
    var p = {};
    return n.forEach(function(_) {
      return p[_] = e[_];
    }), p;
  }, x.initializedState = function(e) {
    var n = i.default.Children.count(e.children), p = e.listRef, _ = Math.ceil(Z(p)), m = e.trackRef && e.trackRef.node, T = Math.ceil(Z(m)), k;
    if (e.vertical)
      k = _;
    else {
      var j = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding == "string" && e.centerPadding.slice(-1) === "%" && (j *= _ / 100), k = Math.ceil((_ - j) / e.slidesToShow);
    }
    var I = p && F(p.querySelector('[data-index="0"]')), H = I * e.slidesToShow, A = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && (A = n - 1 - e.initialSlide);
    var K = e.lazyLoadedList || [], G = X(g(g({}, e), {}, {
      currentSlide: A,
      lazyLoadedList: K
    }));
    K = K.concat(G);
    var q = {
      slideCount: n,
      slideWidth: k,
      listWidth: _,
      trackWidth: T,
      currentSlide: A,
      slideHeight: I,
      listHeight: H,
      lazyLoadedList: K
    };
    return e.autoplaying === null && e.autoplay && (q.autoplaying = "playing"), q;
  }, x.slideHandler = function(e) {
    var n = e.waitForAnimate, p = e.animating, _ = e.fade, m = e.infinite, T = e.index, k = e.slideCount, j = e.lazyLoad, I = e.currentSlide, H = e.centerMode, A = e.slidesToScroll, K = e.slidesToShow, G = e.useCSS, q = e.lazyLoadedList;
    if (n && p) return {};
    var N = T, B, re, z, ee = {}, ne = {}, ie = m ? T : W(T, 0, k - 1);
    if (_) {
      if (!m && (T < 0 || T >= k)) return {};
      T < 0 ? N = T + k : T >= k && (N = T - k), j && q.indexOf(N) < 0 && (q = q.concat(N)), ee = {
        animating: !0,
        currentSlide: N,
        lazyLoadedList: q,
        targetSlide: N
      }, ne = {
        animating: !1,
        targetSlide: N
      };
    } else
      B = N, N < 0 ? (B = N + k, m ? k % A !== 0 && (B = k - k % A) : B = 0) : !J(e) && N > I ? N = B = I : H && N >= k ? (N = m ? k : k - 1, B = m ? 0 : k - 1) : N >= k && (B = N - k, m ? k % A !== 0 && (B = 0) : B = k - K), !m && N + K >= k && (B = k - K), re = r(g(g({}, e), {}, {
        slideIndex: N
      })), z = r(g(g({}, e), {}, {
        slideIndex: B
      })), m || (re === z && (N = B), re = z), j && (q = q.concat(X(g(g({}, e), {}, {
        currentSlide: N
      })))), G ? (ee = {
        animating: !0,
        currentSlide: B,
        trackStyle: a(g(g({}, e), {}, {
          left: re
        })),
        lazyLoadedList: q,
        targetSlide: ie
      }, ne = {
        animating: !1,
        currentSlide: B,
        trackStyle: f(g(g({}, e), {}, {
          left: z
        })),
        swipeLeft: null,
        targetSlide: ie
      }) : ee = {
        currentSlide: B,
        trackStyle: f(g(g({}, e), {}, {
          left: z
        })),
        lazyLoadedList: q,
        targetSlide: ie
      };
    return {
      state: ee,
      nextState: ne
    };
  }, x.changeSlide = function(e, n) {
    var p, _, m, T, k, j = e.slidesToScroll, I = e.slidesToShow, H = e.slideCount, A = e.currentSlide, K = e.targetSlide, G = e.lazyLoad, q = e.infinite;
    if (T = H % j !== 0, p = T ? 0 : (H - A) % j, n.message === "previous")
      m = p === 0 ? j : I - p, k = A - m, G && !q && (_ = A - m, k = _ === -1 ? H - 1 : _), q || (k = K - j);
    else if (n.message === "next")
      m = p === 0 ? j : p, k = A + m, G && !q && (k = (A + j) % H + p), q || (k = K + j);
    else if (n.message === "dots")
      k = n.index * n.slidesToScroll;
    else if (n.message === "children") {
      if (k = n.index, q) {
        var N = b(g(g({}, e), {}, {
          targetSlide: k
        }));
        k > n.currentSlide && N === "left" ? k = k - H : k < n.currentSlide && N === "right" && (k = k + H);
      }
    } else n.message === "index" && (k = Number(n.index));
    return k;
  }, x.keyHandler = function(e, n, p) {
    return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n ? "" : e.keyCode === 37 ? p ? "next" : "previous" : e.keyCode === 39 ? p ? "previous" : "next" : "";
  }, x.swipeStart = function(e, n, p) {
    return e.target.tagName === "IMG" && M(e), !n || !p && e.type.indexOf("mouse") !== -1 ? "" : {
      dragging: !0,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY
      }
    };
  }, x.swipeMove = function(e, n) {
    var p = n.scrolling, _ = n.animating, m = n.vertical, T = n.swipeToSlide, k = n.verticalSwiping, j = n.rtl, I = n.currentSlide, H = n.edgeFriction, A = n.edgeDragged, K = n.onEdge, G = n.swiped, q = n.swiping, N = n.slideCount, B = n.slidesToScroll, re = n.infinite, z = n.touchObject, ee = n.swipeEvent, ne = n.listHeight, ie = n.listWidth;
    if (!p) {
      if (_) return M(e);
      m && T && k && M(e);
      var oe, le = {}, be = r(n);
      z.curX = e.touches ? e.touches[0].pageX : e.clientX, z.curY = e.touches ? e.touches[0].pageY : e.clientY, z.swipeLength = Math.round(Math.sqrt(Math.pow(z.curX - z.startX, 2)));
      var De = Math.round(Math.sqrt(Math.pow(z.curY - z.startY, 2)));
      if (!k && !q && De > 10)
        return {
          scrolling: !0
        };
      k && (z.swipeLength = De);
      var fe = (j ? -1 : 1) * (z.curX > z.startX ? 1 : -1);
      k && (fe = z.curY > z.startY ? 1 : -1);
      var it = Math.ceil(N / B), ae = Y(n.touchObject, k), de = z.swipeLength;
      return re || (I === 0 && (ae === "right" || ae === "down") || I + 1 >= it && (ae === "left" || ae === "up") || !J(n) && (ae === "left" || ae === "up")) && (de = z.swipeLength * H, A === !1 && K && (K(ae), le.edgeDragged = !0)), !G && ee && (ee(ae), le.swiped = !0), m ? oe = be + de * (ne / ie) * fe : j ? oe = be - de * fe : oe = be + de * fe, k && (oe = be + de * fe), le = g(g({}, le), {}, {
        touchObject: z,
        swipeLeft: oe,
        trackStyle: f(g(g({}, n), {}, {
          left: oe
        }))
      }), Math.abs(z.curX - z.startX) < Math.abs(z.curY - z.startY) * 0.8 || z.swipeLength > 10 && (le.swiping = !0, M(e)), le;
    }
  }, x.swipeEnd = function(e, n) {
    var p = n.dragging, _ = n.swipe, m = n.touchObject, T = n.listWidth, k = n.touchThreshold, j = n.verticalSwiping, I = n.listHeight, H = n.swipeToSlide, A = n.scrolling, K = n.onSwipe, G = n.targetSlide, q = n.currentSlide, N = n.infinite;
    if (!p)
      return _ && M(e), {};
    var B = j ? I / k : T / k, re = Y(m, j), z = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {}
    };
    if (A || !m.swipeLength)
      return z;
    if (m.swipeLength > B) {
      M(e), K && K(re);
      var ee, ne, ie = N ? q : G;
      switch (re) {
        case "left":
        case "up":
          ne = ie + u(n), ee = H ? s(n, ne) : ne, z.currentDirection = 0;
          break;
        case "right":
        case "down":
          ne = ie - u(n), ee = H ? s(n, ne) : ne, z.currentDirection = 1;
          break;
        default:
          ee = ie;
      }
      z.triggerSlideHandler = ee;
    } else {
      var oe = r(n);
      z.trackStyle = a(g(g({}, n), {}, {
        left: oe
      }));
    }
    return z;
  };
  var U = x.getNavigableIndexes = function(e) {
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, p = e.infinite ? e.slidesToShow * -1 : 0, _ = e.infinite ? e.slidesToShow * -1 : 0, m = []; p < n; )
      m.push(p), p = _ + e.slidesToScroll, _ += Math.min(e.slidesToScroll, e.slidesToShow);
    return m;
  }, s = x.checkNavigable = function(e, n) {
    var p = U(e), _ = 0;
    if (n > p[p.length - 1])
      n = p[p.length - 1];
    else
      for (var m in p) {
        if (n < p[m]) {
          n = _;
          break;
        }
        _ = p[m];
      }
    return n;
  }, u = x.getSlideCount = function(e) {
    var n = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      var p, _ = e.listRef, m = _.querySelectorAll && _.querySelectorAll(".slick-slide") || [];
      if (Array.from(m).every(function(j) {
        if (e.vertical) {
          if (j.offsetTop + F(j) / 2 > e.swipeLeft * -1)
            return p = j, !1;
        } else if (j.offsetLeft - n + Z(j) / 2 > e.swipeLeft * -1)
          return p = j, !1;
        return !0;
      }), !p)
        return 0;
      var T = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide, k = Math.abs(p.dataset.index - T) || 1;
      return k;
    } else
      return e.slidesToScroll;
  }, o = x.checkSpecKeys = function(e, n) {
    return n.reduce(function(p, _) {
      return p && e.hasOwnProperty(_);
    }, !0) ? null : console.error("Keys Missing:", e);
  }, f = x.getTrackCSS = function(e) {
    o(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
    var n, p;
    if (!e.vertical)
      n = c(e) * e.slideWidth;
    else {
      var _ = e.unslick ? e.slideCount : e.slideCount + 2 * e.slidesToShow;
      p = _ * e.slideHeight;
    }
    var m = {
      opacity: 1,
      transition: "",
      WebkitTransition: ""
    };
    if (e.useTransform) {
      var T = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", k = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", j = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
      m = g(g({}, m), {}, {
        WebkitTransform: T,
        transform: k,
        msTransform: j
      });
    } else
      e.vertical ? m.top = e.left : m.left = e.left;
    return e.fade && (m = {
      opacity: 1
    }), n && (m.width = n), p && (m.height = p), window && !window.addEventListener && window.attachEvent && (e.vertical ? m.marginTop = e.left + "px" : m.marginLeft = e.left + "px"), m;
  }, a = x.getTrackAnimateCSS = function(e) {
    o(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var n = f(e);
    return e.useTransform ? (n.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, n.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? n.transition = "top " + e.speed + "ms " + e.cssEase : n.transition = "left " + e.speed + "ms " + e.cssEase, n;
  }, r = x.getTrackLeft = function(e) {
    if (e.unslick)
      return 0;
    o(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var n = e.slideIndex, p = e.trackRef, _ = e.infinite, m = e.centerMode, T = e.slideCount, k = e.slidesToShow, j = e.slidesToScroll, I = e.slideWidth, H = e.listWidth, A = e.variableWidth, K = e.slideHeight, G = e.fade, q = e.vertical, N = 0, B, re, z = 0;
    if (G || e.slideCount === 1)
      return 0;
    var ee = 0;
    if (_ ? (ee = -v(e), T % j !== 0 && n + j > T && (ee = -(n > T ? k - (n - T) : T % j)), m && (ee += parseInt(k / 2))) : (T % j !== 0 && n + j > T && (ee = k - T % j), m && (ee = parseInt(k / 2))), N = ee * I, z = ee * K, q ? B = n * K * -1 + z : B = n * I * -1 + N, A === !0) {
      var ne, ie = p && p.node;
      if (ne = n + v(e), re = ie && ie.childNodes[ne], B = re ? re.offsetLeft * -1 : 0, m === !0) {
        ne = _ ? n + v(e) : n, re = ie && ie.children[ne], B = 0;
        for (var oe = 0; oe < ne; oe++)
          B -= ie && ie.children[oe] && ie.children[oe].offsetWidth;
        B -= parseInt(e.centerPadding), B += re && (H - re.offsetWidth) / 2;
      }
    }
    return B;
  }, v = x.getPreClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, w = x.getPostClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, c = x.getTotalSlides = function(e) {
    return e.slideCount === 1 ? 1 : v(e) + e.slideCount + w(e);
  }, b = x.siblingDirection = function(e) {
    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + O(e) ? "left" : "right" : e.targetSlide < e.currentSlide - C(e) ? "right" : "left";
  }, O = x.slidesOnRight = function(e) {
    var n = e.slidesToShow, p = e.centerMode, _ = e.rtl, m = e.centerPadding;
    if (p) {
      var T = (n - 1) / 2 + 1;
      return parseInt(m) > 0 && (T += 1), _ && n % 2 === 0 && (T += 1), T;
    }
    return _ ? 0 : n - 1;
  }, C = x.slidesOnLeft = function(e) {
    var n = e.slidesToShow, p = e.centerMode, _ = e.rtl, m = e.centerPadding;
    if (p) {
      var T = (n - 1) / 2 + 1;
      return parseInt(m) > 0 && (T += 1), !_ && n % 2 === 0 && (T += 1), T;
    }
    return _ ? n - 1 : 0;
  };
  x.canUseDOM = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  };
  var t = x.validSettings = Object.keys(d.default);
  function R(l) {
    return t.reduce(function(e, n) {
      return l.hasOwnProperty(n) && (e[n] = l[n]), e;
    }, {});
  }
  return x;
}
var he = {}, $e;
function pt() {
  if ($e) return he;
  $e = 1, Object.defineProperty(he, "__esModule", {
    value: !0
  }), he.Track = void 0;
  var i = S(ue), d = S(_e()), h = ge();
  function S(a) {
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
        for (var w in v)
          ({}).hasOwnProperty.call(v, w) && (a[w] = v[w]);
      }
      return a;
    }, g.apply(null, arguments);
  }
  function L(a, r) {
    if (!(a instanceof r)) throw new TypeError("Cannot call a class as a function");
  }
  function E(a, r) {
    for (var v = 0; v < r.length; v++) {
      var w = r[v];
      w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(a, J(w.key), w);
    }
  }
  function D(a, r, v) {
    return r && E(a.prototype, r), Object.defineProperty(a, "prototype", { writable: !1 }), a;
  }
  function W(a, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(r && r.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), r && M(a, r);
  }
  function M(a, r) {
    return M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(v, w) {
      return v.__proto__ = w, v;
    }, M(a, r);
  }
  function X(a) {
    var r = Q();
    return function() {
      var v, w = P(a);
      if (r) {
        var c = P(this).constructor;
        v = Reflect.construct(w, arguments, c);
      } else v = w.apply(this, arguments);
      return $(this, v);
    };
  }
  function $(a, r) {
    if (r && (y(r) == "object" || typeof r == "function")) return r;
    if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return V(a);
  }
  function V(a) {
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
  function P(a) {
    return P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, P(a);
  }
  function Z(a, r) {
    var v = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var w = Object.getOwnPropertySymbols(a);
      r && (w = w.filter(function(c) {
        return Object.getOwnPropertyDescriptor(a, c).enumerable;
      })), v.push.apply(v, w);
    }
    return v;
  }
  function F(a) {
    for (var r = 1; r < arguments.length; r++) {
      var v = arguments[r] != null ? arguments[r] : {};
      r % 2 ? Z(Object(v), !0).forEach(function(w) {
        Y(a, w, v[w]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(v)) : Z(Object(v)).forEach(function(w) {
        Object.defineProperty(a, w, Object.getOwnPropertyDescriptor(v, w));
      });
    }
    return a;
  }
  function Y(a, r, v) {
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
      var w = v.call(a, r);
      if (y(w) != "object") return w;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(a);
  }
  var s = function(r) {
    var v, w, c, b, O;
    r.rtl ? O = r.slideCount - 1 - r.index : O = r.index, c = O < 0 || O >= r.slideCount, r.centerMode ? (b = Math.floor(r.slidesToShow / 2), w = (O - r.currentSlide) % r.slideCount === 0, O > r.currentSlide - b - 1 && O <= r.currentSlide + b && (v = !0)) : v = r.currentSlide <= O && O < r.currentSlide + r.slidesToShow;
    var C;
    r.targetSlide < 0 ? C = r.targetSlide + r.slideCount : r.targetSlide >= r.slideCount ? C = r.targetSlide - r.slideCount : C = r.targetSlide;
    var t = O === C;
    return {
      "slick-slide": !0,
      "slick-active": v,
      "slick-center": w,
      "slick-cloned": c,
      "slick-current": t
      // dubious in case of RTL
    };
  }, u = function(r) {
    var v = {};
    return (r.variableWidth === void 0 || r.variableWidth === !1) && (v.width = r.slideWidth), r.fade && (v.position = "relative", r.vertical ? v.top = -r.index * parseInt(r.slideHeight) : v.left = -r.index * parseInt(r.slideWidth), v.opacity = r.currentSlide === r.index ? 1 : 0, v.zIndex = r.currentSlide === r.index ? 999 : 998, r.useCSS && (v.transition = "opacity " + r.speed + "ms " + r.cssEase + ", visibility " + r.speed + "ms " + r.cssEase)), v;
  }, o = function(r, v) {
    return r.key || v;
  }, f = function(r) {
    var v, w = [], c = [], b = [], O = i.default.Children.count(r.children), C = (0, h.lazyStartIndex)(r), t = (0, h.lazyEndIndex)(r);
    return i.default.Children.forEach(r.children, function(R, l) {
      var e, n = {
        message: "children",
        index: l,
        slidesToScroll: r.slidesToScroll,
        currentSlide: r.currentSlide
      };
      !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(l) >= 0 ? e = R : e = /* @__PURE__ */ i.default.createElement("div", null);
      var p = u(F(F({}, r), {}, {
        index: l
      })), _ = e.props.className || "", m = s(F(F({}, r), {}, {
        index: l
      }));
      if (w.push(/* @__PURE__ */ i.default.cloneElement(e, {
        key: "original" + o(e, l),
        "data-index": l,
        className: (0, d.default)(m, _),
        tabIndex: "-1",
        "aria-hidden": !m["slick-active"],
        style: F(F({
          outline: "none"
        }, e.props.style || {}), p),
        onClick: function(j) {
          e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
        }
      })), r.infinite && O > 1 && r.fade === !1 && !r.unslick) {
        var T = O - l;
        T <= (0, h.getPreClones)(r) && (v = -T, v >= C && (e = R), m = s(F(F({}, r), {}, {
          index: v
        })), c.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "precloned" + o(e, v),
          "data-index": v,
          tabIndex: "-1",
          className: (0, d.default)(m, _),
          "aria-hidden": !m["slick-active"],
          style: F(F({}, e.props.style || {}), p),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        }))), l < (0, h.getPostClones)(r) && (v = O + l, v < t && (e = R), m = s(F(F({}, r), {}, {
          index: v
        })), b.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "postcloned" + o(e, v),
          "data-index": v,
          tabIndex: "-1",
          className: (0, d.default)(m, _),
          "aria-hidden": !m["slick-active"],
          style: F(F({}, e.props.style || {}), p),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        })));
      }
    }), r.rtl ? c.concat(w, b).reverse() : c.concat(w, b);
  };
  return he.Track = /* @__PURE__ */ (function(a) {
    W(v, a);
    var r = X(v);
    function v() {
      var w;
      L(this, v);
      for (var c = arguments.length, b = new Array(c), O = 0; O < c; O++)
        b[O] = arguments[O];
      return w = r.call.apply(r, [this].concat(b)), Y(V(w), "node", null), Y(V(w), "handleRef", function(C) {
        w.node = C;
      }), w;
    }
    return D(v, [{
      key: "render",
      value: function() {
        var c = f(this.props), b = this.props, O = b.onMouseEnter, C = b.onMouseOver, t = b.onMouseLeave, R = {
          onMouseEnter: O,
          onMouseOver: C,
          onMouseLeave: t
        };
        return /* @__PURE__ */ i.default.createElement("div", g({
          ref: this.handleRef,
          className: "slick-track",
          style: this.props.trackStyle
        }, R), c);
      }
    }]), v;
  })(i.default.PureComponent), he;
}
var ye = {}, Fe;
function vt() {
  if (Fe) return ye;
  Fe = 1;
  function i(s) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
      return typeof u;
    } : function(u) {
      return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
    }, i(s);
  }
  Object.defineProperty(ye, "__esModule", {
    value: !0
  }), ye.Dots = void 0;
  var d = y(ue), h = y(_e()), S = ge();
  function y(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function g(s, u) {
    var o = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(s);
      u && (f = f.filter(function(a) {
        return Object.getOwnPropertyDescriptor(s, a).enumerable;
      })), o.push.apply(o, f);
    }
    return o;
  }
  function L(s) {
    for (var u = 1; u < arguments.length; u++) {
      var o = arguments[u] != null ? arguments[u] : {};
      u % 2 ? g(Object(o), !0).forEach(function(f) {
        E(s, f, o[f]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o)) : g(Object(o)).forEach(function(f) {
        Object.defineProperty(s, f, Object.getOwnPropertyDescriptor(o, f));
      });
    }
    return s;
  }
  function E(s, u, o) {
    return (u = X(u)) in s ? Object.defineProperty(s, u, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : s[u] = o, s;
  }
  function D(s, u) {
    if (!(s instanceof u)) throw new TypeError("Cannot call a class as a function");
  }
  function W(s, u) {
    for (var o = 0; o < u.length; o++) {
      var f = u[o];
      f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(s, X(f.key), f);
    }
  }
  function M(s, u, o) {
    return u && W(s.prototype, u), Object.defineProperty(s, "prototype", { writable: !1 }), s;
  }
  function X(s) {
    var u = $(s, "string");
    return i(u) == "symbol" ? u : u + "";
  }
  function $(s, u) {
    if (i(s) != "object" || !s) return s;
    var o = s[Symbol.toPrimitive];
    if (o !== void 0) {
      var f = o.call(s, u);
      if (i(f) != "object") return f;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(s);
  }
  function V(s, u) {
    if (typeof u != "function" && u !== null) throw new TypeError("Super expression must either be null or a function");
    s.prototype = Object.create(u && u.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, "prototype", { writable: !1 }), u && Q(s, u);
  }
  function Q(s, u) {
    return Q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, f) {
      return o.__proto__ = f, o;
    }, Q(s, u);
  }
  function P(s) {
    var u = Y();
    return function() {
      var o, f = J(s);
      if (u) {
        var a = J(this).constructor;
        o = Reflect.construct(f, arguments, a);
      } else o = f.apply(this, arguments);
      return Z(this, o);
    };
  }
  function Z(s, u) {
    if (u && (i(u) == "object" || typeof u == "function")) return u;
    if (u !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return F(s);
  }
  function F(s) {
    if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s;
  }
  function Y() {
    try {
      var s = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (Y = function() {
      return !!s;
    })();
  }
  function J(s) {
    return J = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(u) {
      return u.__proto__ || Object.getPrototypeOf(u);
    }, J(s);
  }
  var U = function(u) {
    var o;
    return u.infinite ? o = Math.ceil(u.slideCount / u.slidesToScroll) : o = Math.ceil((u.slideCount - u.slidesToShow) / u.slidesToScroll) + 1, o;
  };
  return ye.Dots = /* @__PURE__ */ (function(s) {
    V(o, s);
    var u = P(o);
    function o() {
      return D(this, o), u.apply(this, arguments);
    }
    return M(o, [{
      key: "clickHandler",
      value: function(a, r) {
        r.preventDefault(), this.props.clickHandler(a);
      }
    }, {
      key: "render",
      value: function() {
        for (var a = this.props, r = a.onMouseEnter, v = a.onMouseOver, w = a.onMouseLeave, c = a.infinite, b = a.slidesToScroll, O = a.slidesToShow, C = a.slideCount, t = a.currentSlide, R = U({
          slideCount: C,
          slidesToScroll: b,
          slidesToShow: O,
          infinite: c
        }), l = {
          onMouseEnter: r,
          onMouseOver: v,
          onMouseLeave: w
        }, e = [], n = 0; n < R; n++) {
          var p = (n + 1) * b - 1, _ = c ? p : (0, S.clamp)(p, 0, C - 1), m = _ - (b - 1), T = c ? m : (0, S.clamp)(m, 0, C - 1), k = (0, h.default)({
            "slick-active": c ? t >= T && t <= _ : t === T
          }), j = {
            message: "dots",
            index: n,
            slidesToScroll: b,
            currentSlide: t
          }, I = this.clickHandler.bind(this, j);
          e = e.concat(/* @__PURE__ */ d.default.createElement("li", {
            key: n,
            className: k
          }, /* @__PURE__ */ d.default.cloneElement(this.props.customPaging(n), {
            onClick: I
          })));
        }
        return /* @__PURE__ */ d.default.cloneElement(this.props.appendDots(e), L({
          className: this.props.dotsClass
        }, l));
      }
    }]), o;
  })(d.default.PureComponent), ye;
}
var se = {}, Be;
function ht() {
  if (Be) return se;
  Be = 1;
  function i(s) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
      return typeof u;
    } : function(u) {
      return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
    }, i(s);
  }
  Object.defineProperty(se, "__esModule", {
    value: !0
  }), se.PrevArrow = se.NextArrow = void 0;
  var d = y(ue), h = y(_e()), S = ge();
  function y(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(s) {
      for (var u = 1; u < arguments.length; u++) {
        var o = arguments[u];
        for (var f in o)
          ({}).hasOwnProperty.call(o, f) && (s[f] = o[f]);
      }
      return s;
    }, g.apply(null, arguments);
  }
  function L(s, u) {
    var o = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(s);
      u && (f = f.filter(function(a) {
        return Object.getOwnPropertyDescriptor(s, a).enumerable;
      })), o.push.apply(o, f);
    }
    return o;
  }
  function E(s) {
    for (var u = 1; u < arguments.length; u++) {
      var o = arguments[u] != null ? arguments[u] : {};
      u % 2 ? L(Object(o), !0).forEach(function(f) {
        D(s, f, o[f]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o)) : L(Object(o)).forEach(function(f) {
        Object.defineProperty(s, f, Object.getOwnPropertyDescriptor(o, f));
      });
    }
    return s;
  }
  function D(s, u, o) {
    return (u = $(u)) in s ? Object.defineProperty(s, u, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : s[u] = o, s;
  }
  function W(s, u) {
    if (!(s instanceof u)) throw new TypeError("Cannot call a class as a function");
  }
  function M(s, u) {
    for (var o = 0; o < u.length; o++) {
      var f = u[o];
      f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(s, $(f.key), f);
    }
  }
  function X(s, u, o) {
    return u && M(s.prototype, u), Object.defineProperty(s, "prototype", { writable: !1 }), s;
  }
  function $(s) {
    var u = V(s, "string");
    return i(u) == "symbol" ? u : u + "";
  }
  function V(s, u) {
    if (i(s) != "object" || !s) return s;
    var o = s[Symbol.toPrimitive];
    if (o !== void 0) {
      var f = o.call(s, u);
      if (i(f) != "object") return f;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(s);
  }
  function Q(s, u) {
    if (typeof u != "function" && u !== null) throw new TypeError("Super expression must either be null or a function");
    s.prototype = Object.create(u && u.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, "prototype", { writable: !1 }), u && P(s, u);
  }
  function P(s, u) {
    return P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, f) {
      return o.__proto__ = f, o;
    }, P(s, u);
  }
  function Z(s) {
    var u = J();
    return function() {
      var o, f = U(s);
      if (u) {
        var a = U(this).constructor;
        o = Reflect.construct(f, arguments, a);
      } else o = f.apply(this, arguments);
      return F(this, o);
    };
  }
  function F(s, u) {
    if (u && (i(u) == "object" || typeof u == "function")) return u;
    if (u !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Y(s);
  }
  function Y(s) {
    if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s;
  }
  function J() {
    try {
      var s = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (J = function() {
      return !!s;
    })();
  }
  function U(s) {
    return U = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(u) {
      return u.__proto__ || Object.getPrototypeOf(u);
    }, U(s);
  }
  return se.PrevArrow = /* @__PURE__ */ (function(s) {
    Q(o, s);
    var u = Z(o);
    function o() {
      return W(this, o), u.apply(this, arguments);
    }
    return X(o, [{
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
        }, w = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, c;
        return this.props.prevArrow ? c = /* @__PURE__ */ d.default.cloneElement(this.props.prevArrow, E(E({}, v), w)) : c = /* @__PURE__ */ d.default.createElement("button", g({
          key: "0",
          type: "button"
        }, v), " ", "Previous"), c;
      }
    }]), o;
  })(d.default.PureComponent), se.NextArrow = /* @__PURE__ */ (function(s) {
    Q(o, s);
    var u = Z(o);
    function o() {
      return W(this, o), u.apply(this, arguments);
    }
    return X(o, [{
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
        (0, S.canGoNext)(this.props) || (a["slick-disabled"] = !0, r = null);
        var v = {
          key: "1",
          "data-role": "none",
          className: (0, h.default)(a),
          style: {
            display: "block"
          },
          onClick: r
        }, w = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        }, c;
        return this.props.nextArrow ? c = /* @__PURE__ */ d.default.cloneElement(this.props.nextArrow, E(E({}, v), w)) : c = /* @__PURE__ */ d.default.createElement("button", g({
          key: "1",
          type: "button"
        }, v), " ", "Next"), c;
      }
    }]), o;
  })(d.default.PureComponent), se;
}
var Qe = (function() {
  if (typeof Map < "u")
    return Map;
  function i(d, h) {
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
        var S = i(this.__entries__, h), y = this.__entries__[S];
        return y && y[1];
      }, d.prototype.set = function(h, S) {
        var y = i(this.__entries__, h);
        ~y ? this.__entries__[y][1] = S : this.__entries__.push([h, S]);
      }, d.prototype.delete = function(h) {
        var S = this.__entries__, y = i(S, h);
        ~y && S.splice(y, 1);
      }, d.prototype.has = function(h) {
        return !!~i(this.__entries__, h);
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
})(), ze = typeof window < "u" && typeof document < "u" && window.document === document, we = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), yt = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(we) : function(i) {
    return setTimeout(function() {
      return i(Date.now());
    }, 1e3 / 60);
  };
})(), gt = 2;
function bt(i, d) {
  var h = !1, S = !1, y = 0;
  function g() {
    h && (h = !1, i()), S && E();
  }
  function L() {
    yt(g);
  }
  function E() {
    var D = Date.now();
    if (h) {
      if (D - y < gt)
        return;
      S = !0;
    } else
      h = !0, S = !1, setTimeout(L, d);
    y = D;
  }
  return E;
}
var mt = 20, St = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], wt = typeof MutationObserver < "u", Ot = (
  /** @class */
  (function() {
    function i() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = bt(this.refresh.bind(this), mt);
    }
    return i.prototype.addObserver = function(d) {
      ~this.observers_.indexOf(d) || this.observers_.push(d), this.connected_ || this.connect_();
    }, i.prototype.removeObserver = function(d) {
      var h = this.observers_, S = h.indexOf(d);
      ~S && h.splice(S, 1), !h.length && this.connected_ && this.disconnect_();
    }, i.prototype.refresh = function() {
      var d = this.updateObservers_();
      d && this.refresh();
    }, i.prototype.updateObservers_ = function() {
      var d = this.observers_.filter(function(h) {
        return h.gatherActive(), h.hasActive();
      });
      return d.forEach(function(h) {
        return h.broadcastActive();
      }), d.length > 0;
    }, i.prototype.connect_ = function() {
      !ze || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), wt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, i.prototype.disconnect_ = function() {
      !ze || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, i.prototype.onTransitionEnd_ = function(d) {
      var h = d.propertyName, S = h === void 0 ? "" : h, y = St.some(function(g) {
        return !!~S.indexOf(g);
      });
      y && this.refresh();
    }, i.getInstance = function() {
      return this.instance_ || (this.instance_ = new i()), this.instance_;
    }, i.instance_ = null, i;
  })()
), Ze = (function(i, d) {
  for (var h = 0, S = Object.keys(d); h < S.length; h++) {
    var y = S[h];
    Object.defineProperty(i, y, {
      value: d[y],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return i;
}), ce = (function(i) {
  var d = i && i.ownerDocument && i.ownerDocument.defaultView;
  return d || we;
}), et = ke(0, 0, 0, 0);
function Oe(i) {
  return parseFloat(i) || 0;
}
function Ge(i) {
  for (var d = [], h = 1; h < arguments.length; h++)
    d[h - 1] = arguments[h];
  return d.reduce(function(S, y) {
    var g = i["border-" + y + "-width"];
    return S + Oe(g);
  }, 0);
}
function _t(i) {
  for (var d = ["top", "right", "bottom", "left"], h = {}, S = 0, y = d; S < y.length; S++) {
    var g = y[S], L = i["padding-" + g];
    h[g] = Oe(L);
  }
  return h;
}
function kt(i) {
  var d = i.getBBox();
  return ke(0, 0, d.width, d.height);
}
function Pt(i) {
  var d = i.clientWidth, h = i.clientHeight;
  if (!d && !h)
    return et;
  var S = ce(i).getComputedStyle(i), y = _t(S), g = y.left + y.right, L = y.top + y.bottom, E = Oe(S.width), D = Oe(S.height);
  if (S.boxSizing === "border-box" && (Math.round(E + g) !== d && (E -= Ge(S, "left", "right") + g), Math.round(D + L) !== h && (D -= Ge(S, "top", "bottom") + L)), !Tt(i)) {
    var W = Math.round(E + g) - d, M = Math.round(D + L) - h;
    Math.abs(W) !== 1 && (E -= W), Math.abs(M) !== 1 && (D -= M);
  }
  return ke(y.left, y.top, E, D);
}
var Ct = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(i) {
    return i instanceof ce(i).SVGGraphicsElement;
  } : function(i) {
    return i instanceof ce(i).SVGElement && typeof i.getBBox == "function";
  };
})();
function Tt(i) {
  return i === ce(i).document.documentElement;
}
function jt(i) {
  return ze ? Ct(i) ? kt(i) : Pt(i) : et;
}
function xt(i) {
  var d = i.x, h = i.y, S = i.width, y = i.height, g = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, L = Object.create(g.prototype);
  return Ze(L, {
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
function ke(i, d, h, S) {
  return { x: i, y: d, width: h, height: S };
}
var Et = (
  /** @class */
  (function() {
    function i(d) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ke(0, 0, 0, 0), this.target = d;
    }
    return i.prototype.isActive = function() {
      var d = jt(this.target);
      return this.contentRect_ = d, d.width !== this.broadcastWidth || d.height !== this.broadcastHeight;
    }, i.prototype.broadcastRect = function() {
      var d = this.contentRect_;
      return this.broadcastWidth = d.width, this.broadcastHeight = d.height, d;
    }, i;
  })()
), Lt = (
  /** @class */
  /* @__PURE__ */ (function() {
    function i(d, h) {
      var S = xt(h);
      Ze(this, { target: d, contentRect: S });
    }
    return i;
  })()
), Mt = (
  /** @class */
  (function() {
    function i(d, h, S) {
      if (this.activeObservations_ = [], this.observations_ = new Qe(), typeof d != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = d, this.controller_ = h, this.callbackCtx_ = S;
    }
    return i.prototype.observe = function(d) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(d instanceof ce(d).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var h = this.observations_;
        h.has(d) || (h.set(d, new Et(d)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, i.prototype.unobserve = function(d) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(d instanceof ce(d).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var h = this.observations_;
        h.has(d) && (h.delete(d), h.size || this.controller_.removeObserver(this));
      }
    }, i.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, i.prototype.gatherActive = function() {
      var d = this;
      this.clearActive(), this.observations_.forEach(function(h) {
        h.isActive() && d.activeObservations_.push(h);
      });
    }, i.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var d = this.callbackCtx_, h = this.activeObservations_.map(function(S) {
          return new Lt(S.target, S.broadcastRect());
        });
        this.callback_.call(d, h, d), this.clearActive();
      }
    }, i.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, i.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, i;
  })()
), tt = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Qe(), rt = (
  /** @class */
  /* @__PURE__ */ (function() {
    function i(d) {
      if (!(this instanceof i))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var h = Ot.getInstance(), S = new Mt(d, h, this);
      tt.set(this, S);
    }
    return i;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(i) {
  rt.prototype[i] = function() {
    var d;
    return (d = tt.get(this))[i].apply(d, arguments);
  };
});
var Rt = (function() {
  return typeof we.ResizeObserver < "u" ? we.ResizeObserver : rt;
})();
const zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rt
}, Symbol.toStringTag, { value: "Module" })), Dt = /* @__PURE__ */ ct(zt);
var Xe;
function Nt() {
  if (Xe) return ve;
  Xe = 1, Object.defineProperty(ve, "__esModule", {
    value: !0
  }), ve.InnerSlider = void 0;
  var i = W(ue), d = W(ft()), h = W(dt()), S = W(_e()), y = ge(), g = pt(), L = vt(), E = ht(), D = W(Dt);
  function W(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function M(c) {
    "@babel/helpers - typeof";
    return M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(b) {
      return typeof b;
    } : function(b) {
      return b && typeof Symbol == "function" && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b;
    }, M(c);
  }
  function X() {
    return X = Object.assign ? Object.assign.bind() : function(c) {
      for (var b = 1; b < arguments.length; b++) {
        var O = arguments[b];
        for (var C in O)
          ({}).hasOwnProperty.call(O, C) && (c[C] = O[C]);
      }
      return c;
    }, X.apply(null, arguments);
  }
  function $(c, b) {
    if (c == null) return {};
    var O, C, t = V(c, b);
    if (Object.getOwnPropertySymbols) {
      var R = Object.getOwnPropertySymbols(c);
      for (C = 0; C < R.length; C++)
        O = R[C], b.includes(O) || {}.propertyIsEnumerable.call(c, O) && (t[O] = c[O]);
    }
    return t;
  }
  function V(c, b) {
    if (c == null) return {};
    var O = {};
    for (var C in c)
      if ({}.hasOwnProperty.call(c, C)) {
        if (b.includes(C)) continue;
        O[C] = c[C];
      }
    return O;
  }
  function Q(c, b) {
    var O = Object.keys(c);
    if (Object.getOwnPropertySymbols) {
      var C = Object.getOwnPropertySymbols(c);
      b && (C = C.filter(function(t) {
        return Object.getOwnPropertyDescriptor(c, t).enumerable;
      })), O.push.apply(O, C);
    }
    return O;
  }
  function P(c) {
    for (var b = 1; b < arguments.length; b++) {
      var O = arguments[b] != null ? arguments[b] : {};
      b % 2 ? Q(Object(O), !0).forEach(function(C) {
        r(c, C, O[C]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(O)) : Q(Object(O)).forEach(function(C) {
        Object.defineProperty(c, C, Object.getOwnPropertyDescriptor(O, C));
      });
    }
    return c;
  }
  function Z(c, b) {
    if (!(c instanceof b)) throw new TypeError("Cannot call a class as a function");
  }
  function F(c, b) {
    for (var O = 0; O < b.length; O++) {
      var C = b[O];
      C.enumerable = C.enumerable || !1, C.configurable = !0, "value" in C && (C.writable = !0), Object.defineProperty(c, v(C.key), C);
    }
  }
  function Y(c, b, O) {
    return b && F(c.prototype, b), Object.defineProperty(c, "prototype", { writable: !1 }), c;
  }
  function J(c, b) {
    if (typeof b != "function" && b !== null) throw new TypeError("Super expression must either be null or a function");
    c.prototype = Object.create(b && b.prototype, { constructor: { value: c, writable: !0, configurable: !0 } }), Object.defineProperty(c, "prototype", { writable: !1 }), b && U(c, b);
  }
  function U(c, b) {
    return U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(O, C) {
      return O.__proto__ = C, O;
    }, U(c, b);
  }
  function s(c) {
    var b = f();
    return function() {
      var O, C = a(c);
      if (b) {
        var t = a(this).constructor;
        O = Reflect.construct(C, arguments, t);
      } else O = C.apply(this, arguments);
      return u(this, O);
    };
  }
  function u(c, b) {
    if (b && (M(b) == "object" || typeof b == "function")) return b;
    if (b !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return o(c);
  }
  function o(c) {
    if (c === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return c;
  }
  function f() {
    try {
      var c = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (f = function() {
      return !!c;
    })();
  }
  function a(c) {
    return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(b) {
      return b.__proto__ || Object.getPrototypeOf(b);
    }, a(c);
  }
  function r(c, b, O) {
    return (b = v(b)) in c ? Object.defineProperty(c, b, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : c[b] = O, c;
  }
  function v(c) {
    var b = w(c, "string");
    return M(b) == "symbol" ? b : b + "";
  }
  function w(c, b) {
    if (M(c) != "object" || !c) return c;
    var O = c[Symbol.toPrimitive];
    if (O !== void 0) {
      var C = O.call(c, b);
      if (M(C) != "object") return C;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (b === "string" ? String : Number)(c);
  }
  return ve.InnerSlider = /* @__PURE__ */ (function(c) {
    J(O, c);
    var b = s(O);
    function O(C) {
      var t;
      Z(this, O), t = b.call(this, C), r(o(t), "listRefHandler", function(l) {
        return t.list = l;
      }), r(o(t), "trackRefHandler", function(l) {
        return t.track = l;
      }), r(o(t), "adaptHeight", function() {
        if (t.props.adaptiveHeight && t.list) {
          var l = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
          t.list.style.height = (0, y.getHeight)(l) + "px";
        }
      }), r(o(t), "componentDidMount", function() {
        if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
          var l = (0, y.getOnDemandLazySlides)(P(P({}, t.props), t.state));
          l.length > 0 && (t.setState(function(n) {
            return {
              lazyLoadedList: n.lazyLoadedList.concat(l)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(l));
        }
        var e = P({
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
        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach(function(l) {
          return clearTimeout(l);
        }), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
      }), r(o(t), "componentDidUpdate", function(l) {
        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
          var e = (0, y.getOnDemandLazySlides)(P(P({}, t.props), t.state));
          e.length > 0 && (t.setState(function(_) {
            return {
              lazyLoadedList: _.lazyLoadedList.concat(e)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(e));
        }
        t.adaptHeight();
        var n = P(P({
          listRef: t.list,
          trackRef: t.track
        }, t.props), t.state), p = t.didPropsChange(l);
        p && t.updateState(n, p, function() {
          t.state.currentSlide >= i.default.Children.count(t.props.children) && t.changeSlide({
            message: "index",
            index: i.default.Children.count(t.props.children) - t.props.slidesToShow,
            currentSlide: t.state.currentSlide
          }), t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
        });
      }), r(o(t), "onWindowResized", function(l) {
        t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, h.default)(function() {
          return t.resizeWindow(l);
        }, 50), t.debouncedResize();
      }), r(o(t), "resizeWindow", function() {
        var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = !!(t.track && t.track.node);
        if (e) {
          var n = P(P({
            listRef: t.list,
            trackRef: t.track
          }, t.props), t.state);
          t.updateState(n, l, function() {
            t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
          }), t.setState({
            animating: !1
          }), clearTimeout(t.animationEndCallback), delete t.animationEndCallback;
        }
      }), r(o(t), "updateState", function(l, e, n) {
        var p = (0, y.initializedState)(l);
        l = P(P(P({}, l), p), {}, {
          slideIndex: p.currentSlide
        });
        var _ = (0, y.getTrackLeft)(l);
        l = P(P({}, l), {}, {
          left: _
        });
        var m = (0, y.getTrackCSS)(l);
        (e || i.default.Children.count(t.props.children) !== i.default.Children.count(l.children)) && (p.trackStyle = m), t.setState(p, n);
      }), r(o(t), "ssrInit", function() {
        if (t.props.variableWidth) {
          var l = 0, e = 0, n = [], p = (0, y.getPreClones)(P(P(P({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          })), _ = (0, y.getPostClones)(P(P(P({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          }));
          t.props.children.forEach(function(re) {
            n.push(re.props.style.width), l += re.props.style.width;
          });
          for (var m = 0; m < p; m++)
            e += n[n.length - 1 - m], l += n[n.length - 1 - m];
          for (var T = 0; T < _; T++)
            l += n[T];
          for (var k = 0; k < t.state.currentSlide; k++)
            e += n[k];
          var j = {
            width: l + "px",
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
        var H = i.default.Children.count(t.props.children), A = P(P(P({}, t.props), t.state), {}, {
          slideCount: H
        }), K = (0, y.getPreClones)(A) + (0, y.getPostClones)(A) + H, G = 100 / t.props.slidesToShow * K, q = 100 / K, N = -q * ((0, y.getPreClones)(A) + t.state.currentSlide) * G / 100;
        t.props.centerMode && (N += (100 - q * G / 100) / 2);
        var B = {
          width: G + "%",
          left: N + "%"
        };
        return {
          slideWidth: q + "%",
          trackStyle: B
        };
      }), r(o(t), "checkImagesLoad", function() {
        var l = t.list && t.list.querySelectorAll && t.list.querySelectorAll(".slick-slide img") || [], e = l.length, n = 0;
        Array.prototype.forEach.call(l, function(p) {
          var _ = function() {
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
          } : (p.onload = _, p.onerror = function() {
            _(), t.props.onLazyLoadError && t.props.onLazyLoadError();
          }));
        });
      }), r(o(t), "progressiveLazyLoad", function() {
        for (var l = [], e = P(P({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, y.getPostClones)(e); n++)
          if (t.state.lazyLoadedList.indexOf(n) < 0) {
            l.push(n);
            break;
          }
        for (var p = t.state.currentSlide - 1; p >= -(0, y.getPreClones)(e); p--)
          if (t.state.lazyLoadedList.indexOf(p) < 0) {
            l.push(p);
            break;
          }
        l.length > 0 ? (t.setState(function(_) {
          return {
            lazyLoadedList: _.lazyLoadedList.concat(l)
          };
        }), t.props.onLazyLoad && t.props.onLazyLoad(l)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
      }), r(o(t), "slideHandler", function(l) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = t.props, p = n.asNavFor, _ = n.beforeChange, m = n.onLazyLoad, T = n.speed, k = n.afterChange, j = t.state.currentSlide, I = (0, y.slideHandler)(P(P(P({
          index: l
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e
        })), H = I.state, A = I.nextState;
        if (H) {
          _ && _(j, H.currentSlide);
          var K = H.lazyLoadedList.filter(function(G) {
            return t.state.lazyLoadedList.indexOf(G) < 0;
          });
          m && K.length > 0 && m(K), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), k && k(j), delete t.animationEndCallback), t.setState(H, function() {
            p && t.asNavForIndex !== l && (t.asNavForIndex = l, p.innerSlider.slideHandler(l)), A && (t.animationEndCallback = setTimeout(function() {
              var G = A.animating, q = $(A, ["animating"]);
              t.setState(q, function() {
                t.callbackTimers.push(setTimeout(function() {
                  return t.setState({
                    animating: G
                  });
                }, 10)), k && k(H.currentSlide), delete t.animationEndCallback;
              });
            }, T));
          });
        }
      }), r(o(t), "changeSlide", function(l) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = P(P({}, t.props), t.state), p = (0, y.changeSlide)(n, l);
        if (!(p !== 0 && !p) && (e === !0 ? t.slideHandler(p, e) : t.slideHandler(p), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
          var _ = t.list.querySelectorAll(".slick-current");
          _[0] && _[0].focus();
        }
      }), r(o(t), "clickHandler", function(l) {
        t.clickable === !1 && (l.stopPropagation(), l.preventDefault()), t.clickable = !0;
      }), r(o(t), "keyHandler", function(l) {
        var e = (0, y.keyHandler)(l, t.props.accessibility, t.props.rtl);
        e !== "" && t.changeSlide({
          message: e
        });
      }), r(o(t), "selectHandler", function(l) {
        t.changeSlide(l);
      }), r(o(t), "disableBodyScroll", function() {
        var l = function(n) {
          n = n || window.event, n.preventDefault && n.preventDefault(), n.returnValue = !1;
        };
        window.ontouchmove = l;
      }), r(o(t), "enableBodyScroll", function() {
        window.ontouchmove = null;
      }), r(o(t), "swipeStart", function(l) {
        t.props.verticalSwiping && t.disableBodyScroll();
        var e = (0, y.swipeStart)(l, t.props.swipe, t.props.draggable);
        e !== "" && t.setState(e);
      }), r(o(t), "swipeMove", function(l) {
        var e = (0, y.swipeMove)(l, P(P(P({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(o(t), "swipeEnd", function(l) {
        var e = (0, y.swipeEnd)(l, P(P(P({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        if (e) {
          var n = e.triggerSlideHandler;
          delete e.triggerSlideHandler, t.setState(e), n !== void 0 && (t.slideHandler(n), t.props.verticalSwiping && t.enableBodyScroll());
        }
      }), r(o(t), "touchEnd", function(l) {
        t.swipeEnd(l), t.clickable = !0;
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
      }), r(o(t), "slickGoTo", function(l) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (l = Number(l), isNaN(l)) return "";
        t.callbackTimers.push(setTimeout(function() {
          return t.changeSlide({
            message: "index",
            index: l,
            currentSlide: t.state.currentSlide
          }, e);
        }, 0));
      }), r(o(t), "play", function() {
        var l;
        if (t.props.rtl)
          l = t.state.currentSlide - t.props.slidesToScroll;
        else if ((0, y.canGoNext)(P(P({}, t.props), t.state)))
          l = t.state.currentSlide + t.props.slidesToScroll;
        else
          return !1;
        t.slideHandler(l);
      }), r(o(t), "autoPlay", function(l) {
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
      }), r(o(t), "pause", function(l) {
        t.autoplayTimer && (clearInterval(t.autoplayTimer), t.autoplayTimer = null);
        var e = t.state.autoplaying;
        l === "paused" ? t.setState({
          autoplaying: "paused"
        }) : l === "focused" ? (e === "hovered" || e === "playing") && t.setState({
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
        var l = (0, S.default)("slick-slider", t.props.className, {
          "slick-vertical": t.props.vertical,
          "slick-initialized": !0
        }), e = P(P({}, t.props), t.state), n = (0, y.extractObject)(e, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), p = t.props.pauseOnHover;
        n = P(P({}, n), {}, {
          onMouseEnter: p ? t.onTrackOver : null,
          onMouseLeave: p ? t.onTrackLeave : null,
          onMouseOver: p ? t.onTrackOver : null,
          focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
        });
        var _;
        if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
          var m = (0, y.extractObject)(e, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), T = t.props.pauseOnDotsHover;
          m = P(P({}, m), {}, {
            clickHandler: t.changeSlide,
            onMouseEnter: T ? t.onDotsLeave : null,
            onMouseOver: T ? t.onDotsOver : null,
            onMouseLeave: T ? t.onDotsLeave : null
          }), _ = /* @__PURE__ */ i.default.createElement(L.Dots, m);
        }
        var k, j, I = (0, y.extractObject)(e, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        I.clickHandler = t.changeSlide, t.props.arrows && (k = /* @__PURE__ */ i.default.createElement(E.PrevArrow, I), j = /* @__PURE__ */ i.default.createElement(E.NextArrow, I));
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
        var K = P(P({}, H), A), G = t.props.touchMove, q = {
          className: "slick-list",
          style: K,
          onClick: t.clickHandler,
          onMouseDown: G ? t.swipeStart : null,
          onMouseMove: t.state.dragging && G ? t.swipeMove : null,
          onMouseUp: G ? t.swipeEnd : null,
          onMouseLeave: t.state.dragging && G ? t.swipeEnd : null,
          onTouchStart: G ? t.swipeStart : null,
          onTouchMove: t.state.dragging && G ? t.swipeMove : null,
          onTouchEnd: G ? t.touchEnd : null,
          onTouchCancel: t.state.dragging && G ? t.swipeEnd : null,
          onKeyDown: t.props.accessibility ? t.keyHandler : null
        }, N = {
          className: l,
          dir: "ltr",
          style: t.props.style
        };
        return t.props.unslick && (q = {
          className: "slick-list"
        }, N = {
          className: l,
          style: t.props.style
        }), /* @__PURE__ */ i.default.createElement("div", N, t.props.unslick ? "" : k, /* @__PURE__ */ i.default.createElement("div", X({
          ref: t.listRefHandler
        }, q), /* @__PURE__ */ i.default.createElement(g.Track, X({
          ref: t.trackRefHandler
        }, n), t.props.children)), t.props.unslick ? "" : j, t.props.unslick ? "" : _);
      }), t.list = null, t.track = null, t.state = P(P({}, d.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: i.default.Children.count(t.props.children)
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      var R = t.ssrInit();
      return t.state = P(P({}, t.state), R), t;
    }
    return Y(O, [{
      key: "didPropsChange",
      value: function(t) {
        for (var R = !1, l = 0, e = Object.keys(this.props); l < e.length; l++) {
          var n = e[l];
          if (!t.hasOwnProperty(n)) {
            R = !0;
            break;
          }
          if (!(M(t[n]) === "object" || typeof t[n] == "function" || isNaN(t[n])) && t[n] !== this.props[n]) {
            R = !0;
            break;
          }
        }
        return R || i.default.Children.count(this.props.children) !== i.default.Children.count(t.children);
      }
    }]), O;
  })(i.default.Component), ve;
}
var Me, Ke;
function It() {
  if (Ke) return Me;
  Ke = 1;
  var i = function(d) {
    return d.replace(/[A-Z]/g, function(h) {
      return "-" + h.toLowerCase();
    }).toLowerCase();
  };
  return Me = i, Me;
}
var Re, Ye;
function Ht() {
  if (Ye) return Re;
  Ye = 1;
  var i = It(), d = function(y) {
    var g = /[height|width]$/;
    return g.test(y);
  }, h = function(y) {
    var g = "", L = Object.keys(y);
    return L.forEach(function(E, D) {
      var W = y[E];
      E = i(E), d(E) && typeof W == "number" && (W = W + "px"), W === !0 ? g += E : W === !1 ? g += "not " + E : g += "(" + E + ": " + W + ")", D < L.length - 1 && (g += " and ");
    }), g;
  }, S = function(y) {
    var g = "";
    return typeof y == "string" ? y : y instanceof Array ? (y.forEach(function(L, E) {
      g += h(L), E < y.length - 1 && (g += ", ");
    }), g) : h(y);
  };
  return Re = S, Re;
}
var Ue;
function At() {
  return Ue || (Ue = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var d = L(ue), h = Nt(), S = L(Ht()), y = L(Je()), g = ge();
    function L(f) {
      return f && f.__esModule ? f : { default: f };
    }
    function E(f) {
      "@babel/helpers - typeof";
      return E = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a;
      } : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, E(f);
    }
    function D() {
      return D = Object.assign ? Object.assign.bind() : function(f) {
        for (var a = 1; a < arguments.length; a++) {
          var r = arguments[a];
          for (var v in r)
            ({}).hasOwnProperty.call(r, v) && (f[v] = r[v]);
        }
        return f;
      }, D.apply(null, arguments);
    }
    function W(f, a) {
      var r = Object.keys(f);
      if (Object.getOwnPropertySymbols) {
        var v = Object.getOwnPropertySymbols(f);
        a && (v = v.filter(function(w) {
          return Object.getOwnPropertyDescriptor(f, w).enumerable;
        })), r.push.apply(r, v);
      }
      return r;
    }
    function M(f) {
      for (var a = 1; a < arguments.length; a++) {
        var r = arguments[a] != null ? arguments[a] : {};
        a % 2 ? W(Object(r), !0).forEach(function(v) {
          s(f, v, r[v]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(r)) : W(Object(r)).forEach(function(v) {
          Object.defineProperty(f, v, Object.getOwnPropertyDescriptor(r, v));
        });
      }
      return f;
    }
    function X(f, a) {
      if (!(f instanceof a)) throw new TypeError("Cannot call a class as a function");
    }
    function $(f, a) {
      for (var r = 0; r < a.length; r++) {
        var v = a[r];
        v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(f, u(v.key), v);
      }
    }
    function V(f, a, r) {
      return a && $(f.prototype, a), Object.defineProperty(f, "prototype", { writable: !1 }), f;
    }
    function Q(f, a) {
      if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function");
      f.prototype = Object.create(a && a.prototype, { constructor: { value: f, writable: !0, configurable: !0 } }), Object.defineProperty(f, "prototype", { writable: !1 }), a && P(f, a);
    }
    function P(f, a) {
      return P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, v) {
        return r.__proto__ = v, r;
      }, P(f, a);
    }
    function Z(f) {
      var a = J();
      return function() {
        var r, v = U(f);
        if (a) {
          var w = U(this).constructor;
          r = Reflect.construct(v, arguments, w);
        } else r = v.apply(this, arguments);
        return F(this, r);
      };
    }
    function F(f, a) {
      if (a && (E(a) == "object" || typeof a == "function")) return a;
      if (a !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return Y(f);
    }
    function Y(f) {
      if (f === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return f;
    }
    function J() {
      try {
        var f = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch {
      }
      return (J = function() {
        return !!f;
      })();
    }
    function U(f) {
      return U = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, U(f);
    }
    function s(f, a, r) {
      return (a = u(a)) in f ? Object.defineProperty(f, a, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : f[a] = r, f;
    }
    function u(f) {
      var a = o(f, "string");
      return E(a) == "symbol" ? a : a + "";
    }
    function o(f, a) {
      if (E(f) != "object" || !f) return f;
      var r = f[Symbol.toPrimitive];
      if (r !== void 0) {
        var v = r.call(f, a);
        if (E(v) != "object") return v;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (a === "string" ? String : Number)(f);
    }
    i.default = /* @__PURE__ */ (function(f) {
      Q(r, f);
      var a = Z(r);
      function r(v) {
        var w;
        return X(this, r), w = a.call(this, v), s(Y(w), "innerSliderRefHandler", function(c) {
          return w.innerSlider = c;
        }), s(Y(w), "slickPrev", function() {
          return w.innerSlider.slickPrev();
        }), s(Y(w), "slickNext", function() {
          return w.innerSlider.slickNext();
        }), s(Y(w), "slickGoTo", function(c) {
          var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return w.innerSlider.slickGoTo(c, b);
        }), s(Y(w), "slickPause", function() {
          return w.innerSlider.pause("paused");
        }), s(Y(w), "slickPlay", function() {
          return w.innerSlider.autoPlay("play");
        }), w.state = {
          breakpoint: null
        }, w._responsiveMediaHandlers = [], w;
      }
      return V(r, [{
        key: "media",
        value: function(w, c) {
          var b = window.matchMedia(w), O = function(t) {
            var R = t.matches;
            R && c();
          };
          b.addListener(O), this._responsiveMediaHandlers.push({
            mql: b,
            query: w,
            listener: O
          });
        }
        // handles responsive breakpoints
      }, {
        key: "componentDidMount",
        value: function() {
          var w = this;
          if (this.props.responsive) {
            var c = this.props.responsive.map(function(O) {
              return O.breakpoint;
            });
            c.sort(function(O, C) {
              return O - C;
            }), c.forEach(function(O, C) {
              var t;
              C === 0 ? t = (0, S.default)({
                minWidth: 0,
                maxWidth: O
              }) : t = (0, S.default)({
                minWidth: c[C - 1] + 1,
                maxWidth: O
              }), (0, g.canUseDOM)() && w.media(t, function() {
                w.setState({
                  breakpoint: O
                });
              });
            });
            var b = (0, S.default)({
              minWidth: c.slice(-1)[0]
            });
            (0, g.canUseDOM)() && this.media(b, function() {
              w.setState({
                breakpoint: null
              });
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this._responsiveMediaHandlers.forEach(function(w) {
            w.mql.removeListener(w.listener);
          });
        }
      }, {
        key: "render",
        value: function() {
          var w = this, c, b;
          this.state.breakpoint ? (b = this.props.responsive.filter(function(m) {
            return m.breakpoint === w.state.breakpoint;
          }), c = b[0].settings === "unslick" ? "unslick" : M(M(M({}, y.default), this.props), b[0].settings)) : c = M(M({}, y.default), this.props), c.centerMode && (c.slidesToScroll > 1 && process.env.NODE_ENV !== "production" && console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(c.slidesToScroll)), c.slidesToScroll = 1), c.fade && (c.slidesToShow > 1 && process.env.NODE_ENV !== "production" && console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(c.slidesToShow)), c.slidesToScroll > 1 && process.env.NODE_ENV !== "production" && console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(c.slidesToScroll)), c.slidesToShow = 1, c.slidesToScroll = 1);
          var O = d.default.Children.toArray(this.props.children);
          O = O.filter(function(m) {
            return typeof m == "string" ? !!m.trim() : !!m;
          }), c.variableWidth && (c.rows > 1 || c.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), c.variableWidth = !1);
          for (var C = [], t = null, R = 0; R < O.length; R += c.rows * c.slidesPerRow) {
            for (var l = [], e = R; e < R + c.rows * c.slidesPerRow; e += c.slidesPerRow) {
              for (var n = [], p = e; p < e + c.slidesPerRow && (c.variableWidth && O[p].props.style && (t = O[p].props.style.width), !(p >= O.length)); p += 1)
                n.push(/* @__PURE__ */ d.default.cloneElement(O[p], {
                  key: 100 * R + 10 * e + p,
                  tabIndex: -1,
                  style: {
                    width: "".concat(100 / c.slidesPerRow, "%"),
                    display: "inline-block"
                  }
                }));
              l.push(/* @__PURE__ */ d.default.createElement("div", {
                key: 10 * R + e
              }, n));
            }
            c.variableWidth ? C.push(/* @__PURE__ */ d.default.createElement("div", {
              key: R,
              style: {
                width: t
              }
            }, l)) : C.push(/* @__PURE__ */ d.default.createElement("div", {
              key: R
            }, l));
          }
          if (c === "unslick") {
            var _ = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ d.default.createElement("div", {
              className: _
            }, O);
          } else C.length <= c.slidesToShow && (c.unslick = !0);
          return /* @__PURE__ */ d.default.createElement(h.InnerSlider, D({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, (0, g.filterSettings)(c)), C);
        }
      }]), r;
    })(d.default.Component);
  })(Te)), Te;
}
var Ve;
function Wt() {
  return Ve || (Ve = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var d = h(At());
    function h(S) {
      return S && S.__esModule ? S : { default: S };
    }
    i.default = d.default;
  })(Ce)), Ce;
}
var nt = Wt();
const qt = /* @__PURE__ */ ut(nt), $t = /* @__PURE__ */ lt({
  __proto__: null,
  default: qt
}, [nt]), Ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  Kt as default
};
