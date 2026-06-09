import { jsx as ee, jsxs as pe } from "react/jsx-runtime";
import ue, { useState as ot, useRef as at, useEffect as Ne } from "react";
function lt(i, f) {
  for (var h = 0; h < f.length; h++) {
    const S = f[h];
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
  href: f = void 0,
  variant: h = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline
  size: S = "btn-md",
  // btn-sm , btn-md
  className: y = "",
  disabled: g = !1,
  onClick: E = void 0,
  attributes: L = {},
  ...M
}) => {
  const N = (U) => {
    switch (U) {
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
  }, q = (U) => {
    switch (U) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, F = `btn ${N(h)} ${q(S)} ${y}`.trim();
  return f ? /* @__PURE__ */ ee(
    "a",
    {
      href: f,
      className: F,
      onClick: E,
      ...M,
      ...L ?? {},
      children: i
    }
  ) : /* @__PURE__ */ ee(
    "button",
    {
      type: M.type || "button",
      className: F,
      disabled: g,
      onClick: E,
      ...M,
      ...L ?? {},
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
  size: f = "default",
  // 'default' | 'bigger'
  height: h = "normal",
  // 'normal' | 'small'
  buttonSize: S = "btn-md",
  carouselLabel: y = "Hero content",
  className: g = "",
  id: E = "",
  ...L
}) {
  if (!(i != null && i.length)) return null;
  const [M, A] = ot(0), N = at(null), q = f === "bigger", F = h === "small", U = typeof window < "u" && window.location.origin.indexOf("author") > -1, Q = (o) => ["center", "right", "left"].includes(o) ? o : "left", T = i[M] ?? i[0], V = (T == null ? void 0 : T.title) || (T == null ? void 0 : T.description) || "";
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
      const w = N.current;
      w && w.querySelectorAll(".slick-slide").forEach((l) => {
        l.getAttribute("aria-hidden") === "true" ? l.setAttribute("inert", "") : l.removeAttribute("inert");
      });
    };
    if (i.length > 1) {
      const w = window.requestAnimationFrame(o);
      return () => window.cancelAnimationFrame(w);
    }
  }, [M, i.length]);
  const B = {
    dots: !0,
    infinite: !0,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !U,
    autoplaySpeed: 5e3,
    arrows: !1,
    pauseOnHover: !0,
    pauseOnFocus: !0,
    cssEase: "linear",
    afterChange: A,
    customPaging: (o) => /* @__PURE__ */ ee(
      "button",
      {
        type: "button",
        "aria-label": M === o ? `Current slide, slide ${o + 1} of ${i.length}` : `Go to slide ${o + 1} of ${i.length}`,
        "aria-current": M === o ? "true" : void 0
      }
    )
  }, te = [
    "hero-background-img relative w-full overflow-hidden",
    F && "hero-background-img--height-small",
    F ? "min-h-[240px]" : q ? "min-h-[900px] max-sm:min-h-[100vh]" : "min-h-[700px] max-sm:min-h-[100vh]",
    g
  ].filter(Boolean).join(" "), Y = [
    "relative flex w-full z-20",
    F ? "min-h-[240px] items-center" : q ? "min-h-[900px] items-start" : "min-h-[700px] items-center"
  ].filter(Boolean).join(" ");
  function J({ slide: o, slideIndex: w }) {
    var p, _;
    const l = Q(o.textAlignment), r = o.titleSize === "big" ? "big" : "normal", v = i.length > 1 && w > 0 ? "div" : "h1", b = l === "center" ? "items-center text-center mx-auto" : l === "right" ? "items-start text-left lg:ml-auto" : "items-start text-left", c = F ? "pb-hero-padding-y" : i.length > 1 ? "pb-[calc(var(--spacing-hero-padding-y)+var(--spacing-80))] lg:pb-hero-padding-y" : "pb-hero-padding-y", d = Pe[o.titleAccentColor] || "", O = Pe[o.titleColor] || Pe.white, t = ["font-accent font-normal m-0", F ? "text-display-s" : q ? "text-display-m leading-display-m" : "text-display-xl leading-display-xl", d].filter(Boolean).join(" "), z = F ? "mb-4" : "mb-10", a = F ? `${O} font-bold m-0 ${z} text-display-m leading-display-m` : r === "big" ? `${O} font-bold m-0 ${z} text-display-l leading-display-l` : q ? `${O} font-normal m-0 ${z} text-display-m leading-display-m` : `${O} font-normal m-0 ${z} text-display-xl leading-display-xl max-lg:text-display-l max-lg:leading-display-l max-md:text-display-m max-md:leading-display-m`, e = q ? "w-full lg:max-w-[530px]" : "w-full lg:max-w-1/2", n = F ? `pt-hero-padding-y ${c}` : q ? `pt-80 ${c}` : `pt-hero-padding-y ${c}`;
    return /* @__PURE__ */ pe("div", { className: `${e} flex flex-col ${F ? "gap-8" : "gap-hero-spacing"} px-hero-padding-x ${n} text-white ${b}`, children: [
      /* @__PURE__ */ pe("div", { className: F ? "space-y-4" : "spacing-y-hero-text--spacing-y", children: [
        o.titleAccent && /* @__PURE__ */ ee("p", { className: t, children: o.titleAccent }),
        o.title && /* @__PURE__ */ ee(v, { className: a, children: o.title }),
        o.description && /* @__PURE__ */ ee("p", { className: `m-0 ${F ? "text-body-default" : "text-body-large leading-body-large"}`, children: o.description })
      ] }),
      ((p = o.buttons) == null ? void 0 : p.length) > 0 && /* @__PURE__ */ ee("div", { className: "flex flex-wrap gap-10 max-sm:flex-col max-sm:gap-12 max-sm:w-full", children: o.buttons.map((m, P) => /* @__PURE__ */ ee(
        st,
        {
          text: m.text,
          href: m.href,
          variant: m.variant ?? "light",
          size: m.size ?? S,
          onClick: m.onClick,
          className: "flex-shrink-0 max-sm:w-full"
        },
        P
      )) }),
      ((_ = o.logos) == null ? void 0 : _.length) > 0 && /* @__PURE__ */ ee("div", { className: "flex items-center gap-8 max-sm:w-full", children: o.logos.map((m, P) => /* @__PURE__ */ ee("div", { className: "flex items-center justify-center max-w-120 h-auto", children: /* @__PURE__ */ ee("img", { src: m.src, alt: m.alt ?? "", className: "w-full h-auto object-contain rounded-10 max-w-full" }) }, P)) }),
      o.trustpilotWidget && /* @__PURE__ */ ee("div", { className: "mt-8 flex flex-row w-full sm:max-w-[219px]", children: typeof o.trustpilotWidget == "string" ? /* @__PURE__ */ ee("div", { className: "w-full", dangerouslySetInnerHTML: { __html: o.trustpilotWidget } }) : o.trustpilotWidget })
    ] });
  }
  const s = (o, w) => /* @__PURE__ */ pe(
    "div",
    {
      className: `relative w-full outline-none${F ? " min-h-[240px]" : ""}`.trim(),
      ...o.attributes || {},
      children: [
        o.backgroundImage && (typeof o.backgroundImage == "string" && o.backgroundImage.includes("<") ? /* @__PURE__ */ ee(
          "div",
          {
            className: "absolute inset-0 z-0 [&_picture]:w-full [&_picture]:h-full [&_img]:w-full [&_img]:h-full [&_img]:object-cover [&_img]:object-center [&_img]:block",
            dangerouslySetInnerHTML: { __html: o.backgroundImage }
          }
        ) : /* @__PURE__ */ ee(
          "img",
          {
            src: o.backgroundImage,
            alt: "",
            className: "absolute inset-0 z-0 w-full h-full object-cover object-center",
            fetchPriority: "high"
          }
        )),
        /* @__PURE__ */ ee("div", { className: "absolute inset-0 z-10 bg-grey-950/30", "aria-hidden": !0 }),
        /* @__PURE__ */ ee("div", { className: Y, children: /* @__PURE__ */ ee(J, { slide: o, slideIndex: w }) })
      ]
    },
    o.key ?? w
  ), u = i.length === 1;
  return /* @__PURE__ */ pe(
    "div",
    {
      ref: N,
      className: te,
      id: E,
      role: "region",
      "aria-roledescription": u ? void 0 : "carousel",
      "aria-label": u ? void 0 : y,
      ...L,
      children: [
        !u && /* @__PURE__ */ pe("div", { "aria-live": "polite", "aria-atomic": "true", className: "sr-only", children: [
          "Slide ",
          M + 1,
          " of ",
          i.length,
          V ? `: ${V}` : ""
        ] }),
        u || !me ? /* @__PURE__ */ ee("div", { className: "w-full", children: i.map((o, w) => s(o, w)) }) : /* @__PURE__ */ ee(me, { ...B, className: "w-full hero-background-img-slick", children: i.map((o, w) => s(o, w)) })
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
  var f = i.default;
  if (typeof f == "function") {
    var h = function S() {
      return this instanceof S ? Reflect.construct(f, arguments, this.constructor) : f.apply(this, arguments);
    };
    h.prototype = f.prototype;
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
  })(je)), je;
}
var xe, He;
function dt() {
  if (He) return xe;
  He = 1;
  var i = "Expected a function", f = NaN, h = "[object Symbol]", S = /^\s+|\s+$/g, y = /^[-+]0x[0-9a-f]+$/i, g = /^0b[01]+$/i, E = /^0o[0-7]+$/i, L = parseInt, M = typeof Se == "object" && Se && Se.Object === Object && Se, A = typeof self == "object" && self && self.Object === Object && self, N = M || A || Function("return this")(), q = Object.prototype, F = q.toString, U = Math.max, Q = Math.min, T = function() {
    return N.Date.now();
  };
  function V(s, u, o) {
    var w, l, r, v, b, c, d = 0, O = !1, k = !1, t = !0;
    if (typeof s != "function")
      throw new TypeError(i);
    u = J(u) || 0, B(o) && (O = !!o.leading, k = "maxWait" in o, r = k ? U(J(o.maxWait) || 0, u) : r, t = "trailing" in o ? !!o.trailing : t);
    function z(j) {
      var I = w, H = l;
      return w = l = void 0, d = j, v = s.apply(H, I), v;
    }
    function a(j) {
      return d = j, b = setTimeout(p, u), O ? z(j) : v;
    }
    function e(j) {
      var I = j - c, H = j - d, W = u - I;
      return k ? Q(W, r - H) : W;
    }
    function n(j) {
      var I = j - c, H = j - d;
      return c === void 0 || I >= u || I < 0 || k && H >= r;
    }
    function p() {
      var j = T();
      if (n(j))
        return _(j);
      b = setTimeout(p, e(j));
    }
    function _(j) {
      return b = void 0, t && w ? z(j) : (w = l = void 0, v);
    }
    function m() {
      b !== void 0 && clearTimeout(b), d = 0, w = c = l = b = void 0;
    }
    function P() {
      return b === void 0 ? v : _(T());
    }
    function C() {
      var j = T(), I = n(j);
      if (w = arguments, l = this, c = j, I) {
        if (b === void 0)
          return a(c);
        if (k)
          return b = setTimeout(p, u), z(c);
      }
      return b === void 0 && (b = setTimeout(p, u)), v;
    }
    return C.cancel = m, C.flush = P, C;
  }
  function B(s) {
    var u = typeof s;
    return !!s && (u == "object" || u == "function");
  }
  function te(s) {
    return !!s && typeof s == "object";
  }
  function Y(s) {
    return typeof s == "symbol" || te(s) && F.call(s) == h;
  }
  function J(s) {
    if (typeof s == "number")
      return s;
    if (Y(s))
      return f;
    if (B(s)) {
      var u = typeof s.valueOf == "function" ? s.valueOf() : s;
      s = B(u) ? u + "" : u;
    }
    if (typeof s != "string")
      return s === 0 ? s : +s;
    s = s.replace(S, "");
    var o = g.test(s);
    return o || E.test(s) ? L(s.slice(2), o ? 2 : 8) : y.test(s) ? f : +s;
  }
  return xe = V, xe;
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
      var f = {}.hasOwnProperty;
      function h() {
        for (var g = "", E = 0; E < arguments.length; E++) {
          var L = arguments[E];
          L && (g = y(g, S(L)));
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
        var E = "";
        for (var L in g)
          f.call(g, L) && g[L] && (E = y(E, L));
        return E;
      }
      function y(g, E) {
        return E ? g ? g + " " + E : g + E : g;
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
    i.default = S;
  })(Le)), Le;
}
var qe;
function ge() {
  if (qe) return x;
  qe = 1, Object.defineProperty(x, "__esModule", {
    value: !0
  }), x.checkSpecKeys = x.checkNavigable = x.changeSlide = x.canUseDOM = x.canGoNext = void 0, x.clamp = A, x.extractObject = void 0, x.filterSettings = z, x.validSettings = x.swipeStart = x.swipeMove = x.swipeEnd = x.slidesOnRight = x.slidesOnLeft = x.slideHandler = x.siblingDirection = x.safePreventDefault = x.lazyStartIndex = x.lazySlidesOnRight = x.lazySlidesOnLeft = x.lazyEndIndex = x.keyHandler = x.initializedState = x.getWidth = x.getTrackLeft = x.getTrackCSS = x.getTrackAnimateCSS = x.getTotalSlides = x.getSwipeDirection = x.getSlideCount = x.getRequiredLazySlides = x.getPreClones = x.getPostClones = x.getOnDemandLazySlides = x.getNavigableIndexes = x.getHeight = void 0;
  var i = h(ue), f = h(Je());
  function h(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function S(a) {
    "@babel/helpers - typeof";
    return S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, S(a);
  }
  function y(a, e) {
    var n = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(a);
      e && (p = p.filter(function(_) {
        return Object.getOwnPropertyDescriptor(a, _).enumerable;
      })), n.push.apply(n, p);
    }
    return n;
  }
  function g(a) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2 ? y(Object(n), !0).forEach(function(p) {
        E(a, p, n[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(p) {
        Object.defineProperty(a, p, Object.getOwnPropertyDescriptor(n, p));
      });
    }
    return a;
  }
  function E(a, e, n) {
    return (e = L(e)) in a ? Object.defineProperty(a, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : a[e] = n, a;
  }
  function L(a) {
    var e = M(a, "string");
    return S(e) == "symbol" ? e : e + "";
  }
  function M(a, e) {
    if (S(a) != "object" || !a) return a;
    var n = a[Symbol.toPrimitive];
    if (n !== void 0) {
      var p = n.call(a, e);
      if (S(p) != "object") return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(a);
  }
  function A(a, e, n) {
    return Math.max(e, Math.min(a, n));
  }
  var N = x.safePreventDefault = function(e) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(e._reactName) || e.preventDefault();
  }, q = x.getOnDemandLazySlides = function(e) {
    for (var n = [], p = F(e), _ = U(e), m = p; m < _; m++)
      e.lazyLoadedList.indexOf(m) < 0 && n.push(m);
    return n;
  };
  x.getRequiredLazySlides = function(e) {
    for (var n = [], p = F(e), _ = U(e), m = p; m < _; m++)
      n.push(m);
    return n;
  };
  var F = x.lazyStartIndex = function(e) {
    return e.currentSlide - Q(e);
  }, U = x.lazyEndIndex = function(e) {
    return e.currentSlide + T(e);
  }, Q = x.lazySlidesOnLeft = function(e) {
    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0;
  }, T = x.lazySlidesOnRight = function(e) {
    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow;
  }, V = x.getWidth = function(e) {
    return e && e.offsetWidth || 0;
  }, B = x.getHeight = function(e) {
    return e && e.offsetHeight || 0;
  }, te = x.getSwipeDirection = function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, p, _, m, P;
    return p = e.startX - e.curX, _ = e.startY - e.curY, m = Math.atan2(_, p), P = Math.round(m * 180 / Math.PI), P < 0 && (P = 360 - Math.abs(P)), P <= 45 && P >= 0 || P <= 360 && P >= 315 ? "left" : P >= 135 && P <= 225 ? "right" : n === !0 ? P >= 35 && P <= 135 ? "up" : "down" : "vertical";
  }, Y = x.canGoNext = function(e) {
    var n = !0;
    return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (n = !1), n;
  };
  x.extractObject = function(e, n) {
    var p = {};
    return n.forEach(function(_) {
      return p[_] = e[_];
    }), p;
  }, x.initializedState = function(e) {
    var n = i.default.Children.count(e.children), p = e.listRef, _ = Math.ceil(V(p)), m = e.trackRef && e.trackRef.node, P = Math.ceil(V(m)), C;
    if (e.vertical)
      C = _;
    else {
      var j = e.centerMode && parseInt(e.centerPadding) * 2;
      typeof e.centerPadding == "string" && e.centerPadding.slice(-1) === "%" && (j *= _ / 100), C = Math.ceil((_ - j) / e.slidesToShow);
    }
    var I = p && B(p.querySelector('[data-index="0"]')), H = I * e.slidesToShow, W = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
    e.rtl && e.currentSlide === void 0 && (W = n - 1 - e.initialSlide);
    var K = e.lazyLoadedList || [], X = q(g(g({}, e), {}, {
      currentSlide: W,
      lazyLoadedList: K
    }));
    K = K.concat(X);
    var $ = {
      slideCount: n,
      slideWidth: C,
      listWidth: _,
      trackWidth: P,
      currentSlide: W,
      slideHeight: I,
      listHeight: H,
      lazyLoadedList: K
    };
    return e.autoplaying === null && e.autoplay && ($.autoplaying = "playing"), $;
  }, x.slideHandler = function(e) {
    var n = e.waitForAnimate, p = e.animating, _ = e.fade, m = e.infinite, P = e.index, C = e.slideCount, j = e.lazyLoad, I = e.currentSlide, H = e.centerMode, W = e.slidesToScroll, K = e.slidesToShow, X = e.useCSS, $ = e.lazyLoadedList;
    if (n && p) return {};
    var D = P, G, re, R, Z = {}, ne = {}, ie = m ? P : A(P, 0, C - 1);
    if (_) {
      if (!m && (P < 0 || P >= C)) return {};
      P < 0 ? D = P + C : P >= C && (D = P - C), j && $.indexOf(D) < 0 && ($ = $.concat(D)), Z = {
        animating: !0,
        currentSlide: D,
        lazyLoadedList: $,
        targetSlide: D
      }, ne = {
        animating: !1,
        targetSlide: D
      };
    } else
      G = D, D < 0 ? (G = D + C, m ? C % W !== 0 && (G = C - C % W) : G = 0) : !Y(e) && D > I ? D = G = I : H && D >= C ? (D = m ? C : C - 1, G = m ? 0 : C - 1) : D >= C && (G = D - C, m ? C % W !== 0 && (G = 0) : G = C - K), !m && D + K >= C && (G = C - K), re = r(g(g({}, e), {}, {
        slideIndex: D
      })), R = r(g(g({}, e), {}, {
        slideIndex: G
      })), m || (re === R && (D = G), re = R), j && ($ = $.concat(q(g(g({}, e), {}, {
        currentSlide: D
      })))), X ? (Z = {
        animating: !0,
        currentSlide: G,
        trackStyle: l(g(g({}, e), {}, {
          left: re
        })),
        lazyLoadedList: $,
        targetSlide: ie
      }, ne = {
        animating: !1,
        currentSlide: G,
        trackStyle: w(g(g({}, e), {}, {
          left: R
        })),
        swipeLeft: null,
        targetSlide: ie
      }) : Z = {
        currentSlide: G,
        trackStyle: w(g(g({}, e), {}, {
          left: R
        })),
        lazyLoadedList: $,
        targetSlide: ie
      };
    return {
      state: Z,
      nextState: ne
    };
  }, x.changeSlide = function(e, n) {
    var p, _, m, P, C, j = e.slidesToScroll, I = e.slidesToShow, H = e.slideCount, W = e.currentSlide, K = e.targetSlide, X = e.lazyLoad, $ = e.infinite;
    if (P = H % j !== 0, p = P ? 0 : (H - W) % j, n.message === "previous")
      m = p === 0 ? j : I - p, C = W - m, X && !$ && (_ = W - m, C = _ === -1 ? H - 1 : _), $ || (C = K - j);
    else if (n.message === "next")
      m = p === 0 ? j : p, C = W + m, X && !$ && (C = (W + j) % H + p), $ || (C = K + j);
    else if (n.message === "dots")
      C = n.index * n.slidesToScroll;
    else if (n.message === "children") {
      if (C = n.index, $) {
        var D = d(g(g({}, e), {}, {
          targetSlide: C
        }));
        C > n.currentSlide && D === "left" ? C = C - H : C < n.currentSlide && D === "right" && (C = C + H);
      }
    } else n.message === "index" && (C = Number(n.index));
    return C;
  }, x.keyHandler = function(e, n, p) {
    return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n ? "" : e.keyCode === 37 ? p ? "next" : "previous" : e.keyCode === 39 ? p ? "previous" : "next" : "";
  }, x.swipeStart = function(e, n, p) {
    return e.target.tagName === "IMG" && N(e), !n || !p && e.type.indexOf("mouse") !== -1 ? "" : {
      dragging: !0,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY
      }
    };
  }, x.swipeMove = function(e, n) {
    var p = n.scrolling, _ = n.animating, m = n.vertical, P = n.swipeToSlide, C = n.verticalSwiping, j = n.rtl, I = n.currentSlide, H = n.edgeFriction, W = n.edgeDragged, K = n.onEdge, X = n.swiped, $ = n.swiping, D = n.slideCount, G = n.slidesToScroll, re = n.infinite, R = n.touchObject, Z = n.swipeEvent, ne = n.listHeight, ie = n.listWidth;
    if (!p) {
      if (_) return N(e);
      m && P && C && N(e);
      var oe, le = {}, be = r(n);
      R.curX = e.touches ? e.touches[0].pageX : e.clientX, R.curY = e.touches ? e.touches[0].pageY : e.clientY, R.swipeLength = Math.round(Math.sqrt(Math.pow(R.curX - R.startX, 2)));
      var De = Math.round(Math.sqrt(Math.pow(R.curY - R.startY, 2)));
      if (!C && !$ && De > 10)
        return {
          scrolling: !0
        };
      C && (R.swipeLength = De);
      var fe = (j ? -1 : 1) * (R.curX > R.startX ? 1 : -1);
      C && (fe = R.curY > R.startY ? 1 : -1);
      var it = Math.ceil(D / G), ae = te(n.touchObject, C), de = R.swipeLength;
      return re || (I === 0 && (ae === "right" || ae === "down") || I + 1 >= it && (ae === "left" || ae === "up") || !Y(n) && (ae === "left" || ae === "up")) && (de = R.swipeLength * H, W === !1 && K && (K(ae), le.edgeDragged = !0)), !X && Z && (Z(ae), le.swiped = !0), m ? oe = be + de * (ne / ie) * fe : j ? oe = be - de * fe : oe = be + de * fe, C && (oe = be + de * fe), le = g(g({}, le), {}, {
        touchObject: R,
        swipeLeft: oe,
        trackStyle: w(g(g({}, n), {}, {
          left: oe
        }))
      }), Math.abs(R.curX - R.startX) < Math.abs(R.curY - R.startY) * 0.8 || R.swipeLength > 10 && (le.swiping = !0, N(e)), le;
    }
  }, x.swipeEnd = function(e, n) {
    var p = n.dragging, _ = n.swipe, m = n.touchObject, P = n.listWidth, C = n.touchThreshold, j = n.verticalSwiping, I = n.listHeight, H = n.swipeToSlide, W = n.scrolling, K = n.onSwipe, X = n.targetSlide, $ = n.currentSlide, D = n.infinite;
    if (!p)
      return _ && N(e), {};
    var G = j ? I / C : P / C, re = te(m, j), R = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {}
    };
    if (W || !m.swipeLength)
      return R;
    if (m.swipeLength > G) {
      N(e), K && K(re);
      var Z, ne, ie = D ? $ : X;
      switch (re) {
        case "left":
        case "up":
          ne = ie + u(n), Z = H ? s(n, ne) : ne, R.currentDirection = 0;
          break;
        case "right":
        case "down":
          ne = ie - u(n), Z = H ? s(n, ne) : ne, R.currentDirection = 1;
          break;
        default:
          Z = ie;
      }
      R.triggerSlideHandler = Z;
    } else {
      var oe = r(n);
      R.trackStyle = l(g(g({}, n), {}, {
        left: oe
      }));
    }
    return R;
  };
  var J = x.getNavigableIndexes = function(e) {
    for (var n = e.infinite ? e.slideCount * 2 : e.slideCount, p = e.infinite ? e.slidesToShow * -1 : 0, _ = e.infinite ? e.slidesToShow * -1 : 0, m = []; p < n; )
      m.push(p), p = _ + e.slidesToScroll, _ += Math.min(e.slidesToScroll, e.slidesToShow);
    return m;
  }, s = x.checkNavigable = function(e, n) {
    var p = J(e), _ = 0;
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
          if (j.offsetTop + B(j) / 2 > e.swipeLeft * -1)
            return p = j, !1;
        } else if (j.offsetLeft - n + V(j) / 2 > e.swipeLeft * -1)
          return p = j, !1;
        return !0;
      }), !p)
        return 0;
      var P = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide, C = Math.abs(p.dataset.index - P) || 1;
      return C;
    } else
      return e.slidesToScroll;
  }, o = x.checkSpecKeys = function(e, n) {
    return n.reduce(function(p, _) {
      return p && e.hasOwnProperty(_);
    }, !0) ? null : console.error("Keys Missing:", e);
  }, w = x.getTrackCSS = function(e) {
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
      var P = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", C = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)", j = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
      m = g(g({}, m), {}, {
        WebkitTransform: P,
        transform: C,
        msTransform: j
      });
    } else
      e.vertical ? m.top = e.left : m.left = e.left;
    return e.fade && (m = {
      opacity: 1
    }), n && (m.width = n), p && (m.height = p), window && !window.addEventListener && window.attachEvent && (e.vertical ? m.marginTop = e.left + "px" : m.marginLeft = e.left + "px"), m;
  }, l = x.getTrackAnimateCSS = function(e) {
    o(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var n = w(e);
    return e.useTransform ? (n.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, n.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? n.transition = "top " + e.speed + "ms " + e.cssEase : n.transition = "left " + e.speed + "ms " + e.cssEase, n;
  }, r = x.getTrackLeft = function(e) {
    if (e.unslick)
      return 0;
    o(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var n = e.slideIndex, p = e.trackRef, _ = e.infinite, m = e.centerMode, P = e.slideCount, C = e.slidesToShow, j = e.slidesToScroll, I = e.slideWidth, H = e.listWidth, W = e.variableWidth, K = e.slideHeight, X = e.fade, $ = e.vertical, D = 0, G, re, R = 0;
    if (X || e.slideCount === 1)
      return 0;
    var Z = 0;
    if (_ ? (Z = -v(e), P % j !== 0 && n + j > P && (Z = -(n > P ? C - (n - P) : P % j)), m && (Z += parseInt(C / 2))) : (P % j !== 0 && n + j > P && (Z = C - P % j), m && (Z = parseInt(C / 2))), D = Z * I, R = Z * K, $ ? G = n * K * -1 + R : G = n * I * -1 + D, W === !0) {
      var ne, ie = p && p.node;
      if (ne = n + v(e), re = ie && ie.childNodes[ne], G = re ? re.offsetLeft * -1 : 0, m === !0) {
        ne = _ ? n + v(e) : n, re = ie && ie.children[ne], G = 0;
        for (var oe = 0; oe < ne; oe++)
          G -= ie && ie.children[oe] && ie.children[oe].offsetWidth;
        G -= parseInt(e.centerPadding), G += re && (H - re.offsetWidth) / 2;
      }
    }
    return G;
  }, v = x.getPreClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, b = x.getPostClones = function(e) {
    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0);
  }, c = x.getTotalSlides = function(e) {
    return e.slideCount === 1 ? 1 : v(e) + e.slideCount + b(e);
  }, d = x.siblingDirection = function(e) {
    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + O(e) ? "left" : "right" : e.targetSlide < e.currentSlide - k(e) ? "right" : "left";
  }, O = x.slidesOnRight = function(e) {
    var n = e.slidesToShow, p = e.centerMode, _ = e.rtl, m = e.centerPadding;
    if (p) {
      var P = (n - 1) / 2 + 1;
      return parseInt(m) > 0 && (P += 1), _ && n % 2 === 0 && (P += 1), P;
    }
    return _ ? 0 : n - 1;
  }, k = x.slidesOnLeft = function(e) {
    var n = e.slidesToShow, p = e.centerMode, _ = e.rtl, m = e.centerPadding;
    if (p) {
      var P = (n - 1) / 2 + 1;
      return parseInt(m) > 0 && (P += 1), !_ && n % 2 === 0 && (P += 1), P;
    }
    return _ ? n - 1 : 0;
  };
  x.canUseDOM = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  };
  var t = x.validSettings = Object.keys(f.default);
  function z(a) {
    return t.reduce(function(e, n) {
      return a.hasOwnProperty(n) && (e[n] = a[n]), e;
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
  var i = S(ue), f = S(_e()), h = ge();
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
  function E(l, r) {
    if (!(l instanceof r)) throw new TypeError("Cannot call a class as a function");
  }
  function L(l, r) {
    for (var v = 0; v < r.length; v++) {
      var b = r[v];
      b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(l, Y(b.key), b);
    }
  }
  function M(l, r, v) {
    return r && L(l.prototype, r), Object.defineProperty(l, "prototype", { writable: !1 }), l;
  }
  function A(l, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
    l.prototype = Object.create(r && r.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), Object.defineProperty(l, "prototype", { writable: !1 }), r && N(l, r);
  }
  function N(l, r) {
    return N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(v, b) {
      return v.__proto__ = b, v;
    }, N(l, r);
  }
  function q(l) {
    var r = Q();
    return function() {
      var v, b = T(l);
      if (r) {
        var c = T(this).constructor;
        v = Reflect.construct(b, arguments, c);
      } else v = b.apply(this, arguments);
      return F(this, v);
    };
  }
  function F(l, r) {
    if (r && (y(r) == "object" || typeof r == "function")) return r;
    if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return U(l);
  }
  function U(l) {
    if (l === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return l;
  }
  function Q() {
    try {
      var l = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (Q = function() {
      return !!l;
    })();
  }
  function T(l) {
    return T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, T(l);
  }
  function V(l, r) {
    var v = Object.keys(l);
    if (Object.getOwnPropertySymbols) {
      var b = Object.getOwnPropertySymbols(l);
      r && (b = b.filter(function(c) {
        return Object.getOwnPropertyDescriptor(l, c).enumerable;
      })), v.push.apply(v, b);
    }
    return v;
  }
  function B(l) {
    for (var r = 1; r < arguments.length; r++) {
      var v = arguments[r] != null ? arguments[r] : {};
      r % 2 ? V(Object(v), !0).forEach(function(b) {
        te(l, b, v[b]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(v)) : V(Object(v)).forEach(function(b) {
        Object.defineProperty(l, b, Object.getOwnPropertyDescriptor(v, b));
      });
    }
    return l;
  }
  function te(l, r, v) {
    return (r = Y(r)) in l ? Object.defineProperty(l, r, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : l[r] = v, l;
  }
  function Y(l) {
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
  var s = function(r) {
    var v, b, c, d, O;
    r.rtl ? O = r.slideCount - 1 - r.index : O = r.index, c = O < 0 || O >= r.slideCount, r.centerMode ? (d = Math.floor(r.slidesToShow / 2), b = (O - r.currentSlide) % r.slideCount === 0, O > r.currentSlide - d - 1 && O <= r.currentSlide + d && (v = !0)) : v = r.currentSlide <= O && O < r.currentSlide + r.slidesToShow;
    var k;
    r.targetSlide < 0 ? k = r.targetSlide + r.slideCount : r.targetSlide >= r.slideCount ? k = r.targetSlide - r.slideCount : k = r.targetSlide;
    var t = O === k;
    return {
      "slick-slide": !0,
      "slick-active": v,
      "slick-center": b,
      "slick-cloned": c,
      "slick-current": t
      // dubious in case of RTL
    };
  }, u = function(r) {
    var v = {};
    return (r.variableWidth === void 0 || r.variableWidth === !1) && (v.width = r.slideWidth), r.fade && (v.position = "relative", r.vertical ? v.top = -r.index * parseInt(r.slideHeight) : v.left = -r.index * parseInt(r.slideWidth), v.opacity = r.currentSlide === r.index ? 1 : 0, v.zIndex = r.currentSlide === r.index ? 999 : 998, r.useCSS && (v.transition = "opacity " + r.speed + "ms " + r.cssEase + ", visibility " + r.speed + "ms " + r.cssEase)), v;
  }, o = function(r, v) {
    return r.key || v;
  }, w = function(r) {
    var v, b = [], c = [], d = [], O = i.default.Children.count(r.children), k = (0, h.lazyStartIndex)(r), t = (0, h.lazyEndIndex)(r);
    return i.default.Children.forEach(r.children, function(z, a) {
      var e, n = {
        message: "children",
        index: a,
        slidesToScroll: r.slidesToScroll,
        currentSlide: r.currentSlide
      };
      !r.lazyLoad || r.lazyLoad && r.lazyLoadedList.indexOf(a) >= 0 ? e = z : e = /* @__PURE__ */ i.default.createElement("div", null);
      var p = u(B(B({}, r), {}, {
        index: a
      })), _ = e.props.className || "", m = s(B(B({}, r), {}, {
        index: a
      }));
      if (b.push(/* @__PURE__ */ i.default.cloneElement(e, {
        key: "original" + o(e, a),
        "data-index": a,
        className: (0, f.default)(m, _),
        tabIndex: "-1",
        "aria-hidden": !m["slick-active"],
        style: B(B({
          outline: "none"
        }, e.props.style || {}), p),
        onClick: function(j) {
          e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
        }
      })), r.infinite && O > 1 && r.fade === !1 && !r.unslick) {
        var P = O - a;
        P <= (0, h.getPreClones)(r) && (v = -P, v >= k && (e = z), m = s(B(B({}, r), {}, {
          index: v
        })), c.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "precloned" + o(e, v),
          "data-index": v,
          tabIndex: "-1",
          className: (0, f.default)(m, _),
          "aria-hidden": !m["slick-active"],
          style: B(B({}, e.props.style || {}), p),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        }))), a < (0, h.getPostClones)(r) && (v = O + a, v < t && (e = z), m = s(B(B({}, r), {}, {
          index: v
        })), d.push(/* @__PURE__ */ i.default.cloneElement(e, {
          key: "postcloned" + o(e, v),
          "data-index": v,
          tabIndex: "-1",
          className: (0, f.default)(m, _),
          "aria-hidden": !m["slick-active"],
          style: B(B({}, e.props.style || {}), p),
          onClick: function(j) {
            e.props && e.props.onClick && e.props.onClick(j), r.focusOnSelect && r.focusOnSelect(n);
          }
        })));
      }
    }), r.rtl ? c.concat(b, d).reverse() : c.concat(b, d);
  };
  return he.Track = /* @__PURE__ */ (function(l) {
    A(v, l);
    var r = q(v);
    function v() {
      var b;
      E(this, v);
      for (var c = arguments.length, d = new Array(c), O = 0; O < c; O++)
        d[O] = arguments[O];
      return b = r.call.apply(r, [this].concat(d)), te(U(b), "node", null), te(U(b), "handleRef", function(k) {
        b.node = k;
      }), b;
    }
    return M(v, [{
      key: "render",
      value: function() {
        var c = w(this.props), d = this.props, O = d.onMouseEnter, k = d.onMouseOver, t = d.onMouseLeave, z = {
          onMouseEnter: O,
          onMouseOver: k,
          onMouseLeave: t
        };
        return /* @__PURE__ */ i.default.createElement("div", g({
          ref: this.handleRef,
          className: "slick-track",
          style: this.props.trackStyle
        }, z), c);
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
  var f = y(ue), h = y(_e()), S = ge();
  function y(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function g(s, u) {
    var o = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
      var w = Object.getOwnPropertySymbols(s);
      u && (w = w.filter(function(l) {
        return Object.getOwnPropertyDescriptor(s, l).enumerable;
      })), o.push.apply(o, w);
    }
    return o;
  }
  function E(s) {
    for (var u = 1; u < arguments.length; u++) {
      var o = arguments[u] != null ? arguments[u] : {};
      u % 2 ? g(Object(o), !0).forEach(function(w) {
        L(s, w, o[w]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o)) : g(Object(o)).forEach(function(w) {
        Object.defineProperty(s, w, Object.getOwnPropertyDescriptor(o, w));
      });
    }
    return s;
  }
  function L(s, u, o) {
    return (u = q(u)) in s ? Object.defineProperty(s, u, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : s[u] = o, s;
  }
  function M(s, u) {
    if (!(s instanceof u)) throw new TypeError("Cannot call a class as a function");
  }
  function A(s, u) {
    for (var o = 0; o < u.length; o++) {
      var w = u[o];
      w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(s, q(w.key), w);
    }
  }
  function N(s, u, o) {
    return u && A(s.prototype, u), Object.defineProperty(s, "prototype", { writable: !1 }), s;
  }
  function q(s) {
    var u = F(s, "string");
    return i(u) == "symbol" ? u : u + "";
  }
  function F(s, u) {
    if (i(s) != "object" || !s) return s;
    var o = s[Symbol.toPrimitive];
    if (o !== void 0) {
      var w = o.call(s, u);
      if (i(w) != "object") return w;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(s);
  }
  function U(s, u) {
    if (typeof u != "function" && u !== null) throw new TypeError("Super expression must either be null or a function");
    s.prototype = Object.create(u && u.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, "prototype", { writable: !1 }), u && Q(s, u);
  }
  function Q(s, u) {
    return Q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, w) {
      return o.__proto__ = w, o;
    }, Q(s, u);
  }
  function T(s) {
    var u = te();
    return function() {
      var o, w = Y(s);
      if (u) {
        var l = Y(this).constructor;
        o = Reflect.construct(w, arguments, l);
      } else o = w.apply(this, arguments);
      return V(this, o);
    };
  }
  function V(s, u) {
    if (u && (i(u) == "object" || typeof u == "function")) return u;
    if (u !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return B(s);
  }
  function B(s) {
    if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s;
  }
  function te() {
    try {
      var s = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (te = function() {
      return !!s;
    })();
  }
  function Y(s) {
    return Y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(u) {
      return u.__proto__ || Object.getPrototypeOf(u);
    }, Y(s);
  }
  var J = function(u) {
    var o;
    return u.infinite ? o = Math.ceil(u.slideCount / u.slidesToScroll) : o = Math.ceil((u.slideCount - u.slidesToShow) / u.slidesToScroll) + 1, o;
  };
  return ye.Dots = /* @__PURE__ */ (function(s) {
    U(o, s);
    var u = T(o);
    function o() {
      return M(this, o), u.apply(this, arguments);
    }
    return N(o, [{
      key: "clickHandler",
      value: function(l, r) {
        r.preventDefault(), this.props.clickHandler(l);
      }
    }, {
      key: "render",
      value: function() {
        for (var l = this.props, r = l.onMouseEnter, v = l.onMouseOver, b = l.onMouseLeave, c = l.infinite, d = l.slidesToScroll, O = l.slidesToShow, k = l.slideCount, t = l.currentSlide, z = J({
          slideCount: k,
          slidesToScroll: d,
          slidesToShow: O,
          infinite: c
        }), a = {
          onMouseEnter: r,
          onMouseOver: v,
          onMouseLeave: b
        }, e = [], n = 0; n < z; n++) {
          var p = (n + 1) * d - 1, _ = c ? p : (0, S.clamp)(p, 0, k - 1), m = _ - (d - 1), P = c ? m : (0, S.clamp)(m, 0, k - 1), C = (0, h.default)({
            "slick-active": c ? t >= P && t <= _ : t === P
          }), j = {
            message: "dots",
            index: n,
            slidesToScroll: d,
            currentSlide: t
          }, I = this.clickHandler.bind(this, j);
          e = e.concat(/* @__PURE__ */ f.default.createElement("li", {
            key: n,
            className: C
          }, /* @__PURE__ */ f.default.cloneElement(this.props.customPaging(n), {
            onClick: I
          })));
        }
        return /* @__PURE__ */ f.default.cloneElement(this.props.appendDots(e), E({
          className: this.props.dotsClass
        }, a));
      }
    }]), o;
  })(f.default.PureComponent), ye;
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
  var f = y(ue), h = y(_e()), S = ge();
  function y(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(s) {
      for (var u = 1; u < arguments.length; u++) {
        var o = arguments[u];
        for (var w in o)
          ({}).hasOwnProperty.call(o, w) && (s[w] = o[w]);
      }
      return s;
    }, g.apply(null, arguments);
  }
  function E(s, u) {
    var o = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
      var w = Object.getOwnPropertySymbols(s);
      u && (w = w.filter(function(l) {
        return Object.getOwnPropertyDescriptor(s, l).enumerable;
      })), o.push.apply(o, w);
    }
    return o;
  }
  function L(s) {
    for (var u = 1; u < arguments.length; u++) {
      var o = arguments[u] != null ? arguments[u] : {};
      u % 2 ? E(Object(o), !0).forEach(function(w) {
        M(s, w, o[w]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o)) : E(Object(o)).forEach(function(w) {
        Object.defineProperty(s, w, Object.getOwnPropertyDescriptor(o, w));
      });
    }
    return s;
  }
  function M(s, u, o) {
    return (u = F(u)) in s ? Object.defineProperty(s, u, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : s[u] = o, s;
  }
  function A(s, u) {
    if (!(s instanceof u)) throw new TypeError("Cannot call a class as a function");
  }
  function N(s, u) {
    for (var o = 0; o < u.length; o++) {
      var w = u[o];
      w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(s, F(w.key), w);
    }
  }
  function q(s, u, o) {
    return u && N(s.prototype, u), Object.defineProperty(s, "prototype", { writable: !1 }), s;
  }
  function F(s) {
    var u = U(s, "string");
    return i(u) == "symbol" ? u : u + "";
  }
  function U(s, u) {
    if (i(s) != "object" || !s) return s;
    var o = s[Symbol.toPrimitive];
    if (o !== void 0) {
      var w = o.call(s, u);
      if (i(w) != "object") return w;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(s);
  }
  function Q(s, u) {
    if (typeof u != "function" && u !== null) throw new TypeError("Super expression must either be null or a function");
    s.prototype = Object.create(u && u.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), Object.defineProperty(s, "prototype", { writable: !1 }), u && T(s, u);
  }
  function T(s, u) {
    return T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, w) {
      return o.__proto__ = w, o;
    }, T(s, u);
  }
  function V(s) {
    var u = Y();
    return function() {
      var o, w = J(s);
      if (u) {
        var l = J(this).constructor;
        o = Reflect.construct(w, arguments, l);
      } else o = w.apply(this, arguments);
      return B(this, o);
    };
  }
  function B(s, u) {
    if (u && (i(u) == "object" || typeof u == "function")) return u;
    if (u !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return te(s);
  }
  function te(s) {
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
  return se.PrevArrow = /* @__PURE__ */ (function(s) {
    Q(o, s);
    var u = V(o);
    function o() {
      return A(this, o), u.apply(this, arguments);
    }
    return q(o, [{
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
        }, c;
        return this.props.prevArrow ? c = /* @__PURE__ */ f.default.cloneElement(this.props.prevArrow, L(L({}, v), b)) : c = /* @__PURE__ */ f.default.createElement("button", g({
          key: "0",
          type: "button"
        }, v), " ", "Previous"), c;
      }
    }]), o;
  })(f.default.PureComponent), se.NextArrow = /* @__PURE__ */ (function(s) {
    Q(o, s);
    var u = V(o);
    function o() {
      return A(this, o), u.apply(this, arguments);
    }
    return q(o, [{
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
        }, c;
        return this.props.nextArrow ? c = /* @__PURE__ */ f.default.cloneElement(this.props.nextArrow, L(L({}, v), b)) : c = /* @__PURE__ */ f.default.createElement("button", g({
          key: "1",
          type: "button"
        }, v), " ", "Next"), c;
      }
    }]), o;
  })(f.default.PureComponent), se;
}
var Qe = (function() {
  if (typeof Map < "u")
    return Map;
  function i(f, h) {
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
        var S = i(this.__entries__, h), y = this.__entries__[S];
        return y && y[1];
      }, f.prototype.set = function(h, S) {
        var y = i(this.__entries__, h);
        ~y ? this.__entries__[y][1] = S : this.__entries__.push([h, S]);
      }, f.prototype.delete = function(h) {
        var S = this.__entries__, y = i(S, h);
        ~y && S.splice(y, 1);
      }, f.prototype.has = function(h) {
        return !!~i(this.__entries__, h);
      }, f.prototype.clear = function() {
        this.__entries__.splice(0);
      }, f.prototype.forEach = function(h, S) {
        S === void 0 && (S = null);
        for (var y = 0, g = this.__entries__; y < g.length; y++) {
          var E = g[y];
          h.call(S, E[1], E[0]);
        }
      }, f;
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
function bt(i, f) {
  var h = !1, S = !1, y = 0;
  function g() {
    h && (h = !1, i()), S && L();
  }
  function E() {
    yt(g);
  }
  function L() {
    var M = Date.now();
    if (h) {
      if (M - y < gt)
        return;
      S = !0;
    } else
      h = !0, S = !1, setTimeout(E, f);
    y = M;
  }
  return L;
}
var mt = 20, St = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], wt = typeof MutationObserver < "u", Ot = (
  /** @class */
  (function() {
    function i() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = bt(this.refresh.bind(this), mt);
    }
    return i.prototype.addObserver = function(f) {
      ~this.observers_.indexOf(f) || this.observers_.push(f), this.connected_ || this.connect_();
    }, i.prototype.removeObserver = function(f) {
      var h = this.observers_, S = h.indexOf(f);
      ~S && h.splice(S, 1), !h.length && this.connected_ && this.disconnect_();
    }, i.prototype.refresh = function() {
      var f = this.updateObservers_();
      f && this.refresh();
    }, i.prototype.updateObservers_ = function() {
      var f = this.observers_.filter(function(h) {
        return h.gatherActive(), h.hasActive();
      });
      return f.forEach(function(h) {
        return h.broadcastActive();
      }), f.length > 0;
    }, i.prototype.connect_ = function() {
      !ze || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), wt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, i.prototype.disconnect_ = function() {
      !ze || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, i.prototype.onTransitionEnd_ = function(f) {
      var h = f.propertyName, S = h === void 0 ? "" : h, y = St.some(function(g) {
        return !!~S.indexOf(g);
      });
      y && this.refresh();
    }, i.getInstance = function() {
      return this.instance_ || (this.instance_ = new i()), this.instance_;
    }, i.instance_ = null, i;
  })()
), Ze = (function(i, f) {
  for (var h = 0, S = Object.keys(f); h < S.length; h++) {
    var y = S[h];
    Object.defineProperty(i, y, {
      value: f[y],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return i;
}), ce = (function(i) {
  var f = i && i.ownerDocument && i.ownerDocument.defaultView;
  return f || we;
}), et = ke(0, 0, 0, 0);
function Oe(i) {
  return parseFloat(i) || 0;
}
function Ge(i) {
  for (var f = [], h = 1; h < arguments.length; h++)
    f[h - 1] = arguments[h];
  return f.reduce(function(S, y) {
    var g = i["border-" + y + "-width"];
    return S + Oe(g);
  }, 0);
}
function _t(i) {
  for (var f = ["top", "right", "bottom", "left"], h = {}, S = 0, y = f; S < y.length; S++) {
    var g = y[S], E = i["padding-" + g];
    h[g] = Oe(E);
  }
  return h;
}
function kt(i) {
  var f = i.getBBox();
  return ke(0, 0, f.width, f.height);
}
function Pt(i) {
  var f = i.clientWidth, h = i.clientHeight;
  if (!f && !h)
    return et;
  var S = ce(i).getComputedStyle(i), y = _t(S), g = y.left + y.right, E = y.top + y.bottom, L = Oe(S.width), M = Oe(S.height);
  if (S.boxSizing === "border-box" && (Math.round(L + g) !== f && (L -= Ge(S, "left", "right") + g), Math.round(M + E) !== h && (M -= Ge(S, "top", "bottom") + E)), !Tt(i)) {
    var A = Math.round(L + g) - f, N = Math.round(M + E) - h;
    Math.abs(A) !== 1 && (L -= A), Math.abs(N) !== 1 && (M -= N);
  }
  return ke(y.left, y.top, L, M);
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
  var f = i.x, h = i.y, S = i.width, y = i.height, g = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, E = Object.create(g.prototype);
  return Ze(E, {
    x: f,
    y: h,
    width: S,
    height: y,
    top: h,
    right: f + S,
    bottom: y + h,
    left: f
  }), E;
}
function ke(i, f, h, S) {
  return { x: i, y: f, width: h, height: S };
}
var Et = (
  /** @class */
  (function() {
    function i(f) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ke(0, 0, 0, 0), this.target = f;
    }
    return i.prototype.isActive = function() {
      var f = jt(this.target);
      return this.contentRect_ = f, f.width !== this.broadcastWidth || f.height !== this.broadcastHeight;
    }, i.prototype.broadcastRect = function() {
      var f = this.contentRect_;
      return this.broadcastWidth = f.width, this.broadcastHeight = f.height, f;
    }, i;
  })()
), Lt = (
  /** @class */
  /* @__PURE__ */ (function() {
    function i(f, h) {
      var S = xt(h);
      Ze(this, { target: f, contentRect: S });
    }
    return i;
  })()
), Mt = (
  /** @class */
  (function() {
    function i(f, h, S) {
      if (this.activeObservations_ = [], this.observations_ = new Qe(), typeof f != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = f, this.controller_ = h, this.callbackCtx_ = S;
    }
    return i.prototype.observe = function(f) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(f instanceof ce(f).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var h = this.observations_;
        h.has(f) || (h.set(f, new Et(f)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, i.prototype.unobserve = function(f) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(f instanceof ce(f).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var h = this.observations_;
        h.has(f) && (h.delete(f), h.size || this.controller_.removeObserver(this));
      }
    }, i.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, i.prototype.gatherActive = function() {
      var f = this;
      this.clearActive(), this.observations_.forEach(function(h) {
        h.isActive() && f.activeObservations_.push(h);
      });
    }, i.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var f = this.callbackCtx_, h = this.activeObservations_.map(function(S) {
          return new Lt(S.target, S.broadcastRect());
        });
        this.callback_.call(f, h, f), this.clearActive();
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
    function i(f) {
      if (!(this instanceof i))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var h = Ot.getInstance(), S = new Mt(f, h, this);
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
    var f;
    return (f = tt.get(this))[i].apply(f, arguments);
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
  var i = A(ue), f = A(ft()), h = A(dt()), S = A(_e()), y = ge(), g = pt(), E = vt(), L = ht(), M = A(Dt);
  function A(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function N(c) {
    "@babel/helpers - typeof";
    return N = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
      return typeof d;
    } : function(d) {
      return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
    }, N(c);
  }
  function q() {
    return q = Object.assign ? Object.assign.bind() : function(c) {
      for (var d = 1; d < arguments.length; d++) {
        var O = arguments[d];
        for (var k in O)
          ({}).hasOwnProperty.call(O, k) && (c[k] = O[k]);
      }
      return c;
    }, q.apply(null, arguments);
  }
  function F(c, d) {
    if (c == null) return {};
    var O, k, t = U(c, d);
    if (Object.getOwnPropertySymbols) {
      var z = Object.getOwnPropertySymbols(c);
      for (k = 0; k < z.length; k++)
        O = z[k], d.includes(O) || {}.propertyIsEnumerable.call(c, O) && (t[O] = c[O]);
    }
    return t;
  }
  function U(c, d) {
    if (c == null) return {};
    var O = {};
    for (var k in c)
      if ({}.hasOwnProperty.call(c, k)) {
        if (d.includes(k)) continue;
        O[k] = c[k];
      }
    return O;
  }
  function Q(c, d) {
    var O = Object.keys(c);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(c);
      d && (k = k.filter(function(t) {
        return Object.getOwnPropertyDescriptor(c, t).enumerable;
      })), O.push.apply(O, k);
    }
    return O;
  }
  function T(c) {
    for (var d = 1; d < arguments.length; d++) {
      var O = arguments[d] != null ? arguments[d] : {};
      d % 2 ? Q(Object(O), !0).forEach(function(k) {
        r(c, k, O[k]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(O)) : Q(Object(O)).forEach(function(k) {
        Object.defineProperty(c, k, Object.getOwnPropertyDescriptor(O, k));
      });
    }
    return c;
  }
  function V(c, d) {
    if (!(c instanceof d)) throw new TypeError("Cannot call a class as a function");
  }
  function B(c, d) {
    for (var O = 0; O < d.length; O++) {
      var k = d[O];
      k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(c, v(k.key), k);
    }
  }
  function te(c, d, O) {
    return d && B(c.prototype, d), Object.defineProperty(c, "prototype", { writable: !1 }), c;
  }
  function Y(c, d) {
    if (typeof d != "function" && d !== null) throw new TypeError("Super expression must either be null or a function");
    c.prototype = Object.create(d && d.prototype, { constructor: { value: c, writable: !0, configurable: !0 } }), Object.defineProperty(c, "prototype", { writable: !1 }), d && J(c, d);
  }
  function J(c, d) {
    return J = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(O, k) {
      return O.__proto__ = k, O;
    }, J(c, d);
  }
  function s(c) {
    var d = w();
    return function() {
      var O, k = l(c);
      if (d) {
        var t = l(this).constructor;
        O = Reflect.construct(k, arguments, t);
      } else O = k.apply(this, arguments);
      return u(this, O);
    };
  }
  function u(c, d) {
    if (d && (N(d) == "object" || typeof d == "function")) return d;
    if (d !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return o(c);
  }
  function o(c) {
    if (c === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return c;
  }
  function w() {
    try {
      var c = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (w = function() {
      return !!c;
    })();
  }
  function l(c) {
    return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(d) {
      return d.__proto__ || Object.getPrototypeOf(d);
    }, l(c);
  }
  function r(c, d, O) {
    return (d = v(d)) in c ? Object.defineProperty(c, d, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : c[d] = O, c;
  }
  function v(c) {
    var d = b(c, "string");
    return N(d) == "symbol" ? d : d + "";
  }
  function b(c, d) {
    if (N(c) != "object" || !c) return c;
    var O = c[Symbol.toPrimitive];
    if (O !== void 0) {
      var k = O.call(c, d);
      if (N(k) != "object") return k;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (d === "string" ? String : Number)(c);
  }
  return ve.InnerSlider = /* @__PURE__ */ (function(c) {
    Y(O, c);
    var d = s(O);
    function O(k) {
      var t;
      V(this, O), t = d.call(this, k), r(o(t), "listRefHandler", function(a) {
        return t.list = a;
      }), r(o(t), "trackRefHandler", function(a) {
        return t.track = a;
      }), r(o(t), "adaptHeight", function() {
        if (t.props.adaptiveHeight && t.list) {
          var a = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
          t.list.style.height = (0, y.getHeight)(a) + "px";
        }
      }), r(o(t), "componentDidMount", function() {
        if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
          var a = (0, y.getOnDemandLazySlides)(T(T({}, t.props), t.state));
          a.length > 0 && (t.setState(function(n) {
            return {
              lazyLoadedList: n.lazyLoadedList.concat(a)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(a));
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
      }), r(o(t), "componentWillUnmount", function() {
        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach(function(a) {
          return clearTimeout(a);
        }), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect();
      }), r(o(t), "componentDidUpdate", function(a) {
        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
          var e = (0, y.getOnDemandLazySlides)(T(T({}, t.props), t.state));
          e.length > 0 && (t.setState(function(_) {
            return {
              lazyLoadedList: _.lazyLoadedList.concat(e)
            };
          }), t.props.onLazyLoad && t.props.onLazyLoad(e));
        }
        t.adaptHeight();
        var n = T(T({
          listRef: t.list,
          trackRef: t.track
        }, t.props), t.state), p = t.didPropsChange(a);
        p && t.updateState(n, p, function() {
          t.state.currentSlide >= i.default.Children.count(t.props.children) && t.changeSlide({
            message: "index",
            index: i.default.Children.count(t.props.children) - t.props.slidesToShow,
            currentSlide: t.state.currentSlide
          }), t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
        });
      }), r(o(t), "onWindowResized", function(a) {
        t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, h.default)(function() {
          return t.resizeWindow(a);
        }, 50), t.debouncedResize();
      }), r(o(t), "resizeWindow", function() {
        var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = !!(t.track && t.track.node);
        if (e) {
          var n = T(T({
            listRef: t.list,
            trackRef: t.track
          }, t.props), t.state);
          t.updateState(n, a, function() {
            t.props.autoplay ? t.autoPlay("update") : t.pause("paused");
          }), t.setState({
            animating: !1
          }), clearTimeout(t.animationEndCallback), delete t.animationEndCallback;
        }
      }), r(o(t), "updateState", function(a, e, n) {
        var p = (0, y.initializedState)(a);
        a = T(T(T({}, a), p), {}, {
          slideIndex: p.currentSlide
        });
        var _ = (0, y.getTrackLeft)(a);
        a = T(T({}, a), {}, {
          left: _
        });
        var m = (0, y.getTrackCSS)(a);
        (e || i.default.Children.count(t.props.children) !== i.default.Children.count(a.children)) && (p.trackStyle = m), t.setState(p, n);
      }), r(o(t), "ssrInit", function() {
        if (t.props.variableWidth) {
          var a = 0, e = 0, n = [], p = (0, y.getPreClones)(T(T(T({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          })), _ = (0, y.getPostClones)(T(T(T({}, t.props), t.state), {}, {
            slideCount: t.props.children.length
          }));
          t.props.children.forEach(function(re) {
            n.push(re.props.style.width), a += re.props.style.width;
          });
          for (var m = 0; m < p; m++)
            e += n[n.length - 1 - m], a += n[n.length - 1 - m];
          for (var P = 0; P < _; P++)
            a += n[P];
          for (var C = 0; C < t.state.currentSlide; C++)
            e += n[C];
          var j = {
            width: a + "px",
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
        var H = i.default.Children.count(t.props.children), W = T(T(T({}, t.props), t.state), {}, {
          slideCount: H
        }), K = (0, y.getPreClones)(W) + (0, y.getPostClones)(W) + H, X = 100 / t.props.slidesToShow * K, $ = 100 / K, D = -$ * ((0, y.getPreClones)(W) + t.state.currentSlide) * X / 100;
        t.props.centerMode && (D += (100 - $ * X / 100) / 2);
        var G = {
          width: X + "%",
          left: D + "%"
        };
        return {
          slideWidth: $ + "%",
          trackStyle: G
        };
      }), r(o(t), "checkImagesLoad", function() {
        var a = t.list && t.list.querySelectorAll && t.list.querySelectorAll(".slick-slide img") || [], e = a.length, n = 0;
        Array.prototype.forEach.call(a, function(p) {
          var _ = function() {
            return ++n && n >= e && t.onWindowResized();
          };
          if (!p.onclick)
            p.onclick = function() {
              return p.parentNode.focus();
            };
          else {
            var m = p.onclick;
            p.onclick = function(P) {
              m(P), p.parentNode.focus();
            };
          }
          p.onload || (t.props.lazyLoad ? p.onload = function() {
            t.adaptHeight(), t.callbackTimers.push(setTimeout(t.onWindowResized, t.props.speed));
          } : (p.onload = _, p.onerror = function() {
            _(), t.props.onLazyLoadError && t.props.onLazyLoadError();
          }));
        });
      }), r(o(t), "progressiveLazyLoad", function() {
        for (var a = [], e = T(T({}, t.props), t.state), n = t.state.currentSlide; n < t.state.slideCount + (0, y.getPostClones)(e); n++)
          if (t.state.lazyLoadedList.indexOf(n) < 0) {
            a.push(n);
            break;
          }
        for (var p = t.state.currentSlide - 1; p >= -(0, y.getPreClones)(e); p--)
          if (t.state.lazyLoadedList.indexOf(p) < 0) {
            a.push(p);
            break;
          }
        a.length > 0 ? (t.setState(function(_) {
          return {
            lazyLoadedList: _.lazyLoadedList.concat(a)
          };
        }), t.props.onLazyLoad && t.props.onLazyLoad(a)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer);
      }), r(o(t), "slideHandler", function(a) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = t.props, p = n.asNavFor, _ = n.beforeChange, m = n.onLazyLoad, P = n.speed, C = n.afterChange, j = t.state.currentSlide, I = (0, y.slideHandler)(T(T(T({
          index: a
        }, t.props), t.state), {}, {
          trackRef: t.track,
          useCSS: t.props.useCSS && !e
        })), H = I.state, W = I.nextState;
        if (H) {
          _ && _(j, H.currentSlide);
          var K = H.lazyLoadedList.filter(function(X) {
            return t.state.lazyLoadedList.indexOf(X) < 0;
          });
          m && K.length > 0 && m(K), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), C && C(j), delete t.animationEndCallback), t.setState(H, function() {
            p && t.asNavForIndex !== a && (t.asNavForIndex = a, p.innerSlider.slideHandler(a)), W && (t.animationEndCallback = setTimeout(function() {
              var X = W.animating, $ = F(W, ["animating"]);
              t.setState($, function() {
                t.callbackTimers.push(setTimeout(function() {
                  return t.setState({
                    animating: X
                  });
                }, 10)), C && C(H.currentSlide), delete t.animationEndCallback;
              });
            }, P));
          });
        }
      }), r(o(t), "changeSlide", function(a) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = T(T({}, t.props), t.state), p = (0, y.changeSlide)(n, a);
        if (!(p !== 0 && !p) && (e === !0 ? t.slideHandler(p, e) : t.slideHandler(p), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
          var _ = t.list.querySelectorAll(".slick-current");
          _[0] && _[0].focus();
        }
      }), r(o(t), "clickHandler", function(a) {
        t.clickable === !1 && (a.stopPropagation(), a.preventDefault()), t.clickable = !0;
      }), r(o(t), "keyHandler", function(a) {
        var e = (0, y.keyHandler)(a, t.props.accessibility, t.props.rtl);
        e !== "" && t.changeSlide({
          message: e
        });
      }), r(o(t), "selectHandler", function(a) {
        t.changeSlide(a);
      }), r(o(t), "disableBodyScroll", function() {
        var a = function(n) {
          n = n || window.event, n.preventDefault && n.preventDefault(), n.returnValue = !1;
        };
        window.ontouchmove = a;
      }), r(o(t), "enableBodyScroll", function() {
        window.ontouchmove = null;
      }), r(o(t), "swipeStart", function(a) {
        t.props.verticalSwiping && t.disableBodyScroll();
        var e = (0, y.swipeStart)(a, t.props.swipe, t.props.draggable);
        e !== "" && t.setState(e);
      }), r(o(t), "swipeMove", function(a) {
        var e = (0, y.swipeMove)(a, T(T(T({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        e && (e.swiping && (t.clickable = !1), t.setState(e));
      }), r(o(t), "swipeEnd", function(a) {
        var e = (0, y.swipeEnd)(a, T(T(T({}, t.props), t.state), {}, {
          trackRef: t.track,
          listRef: t.list,
          slideIndex: t.state.currentSlide
        }));
        if (e) {
          var n = e.triggerSlideHandler;
          delete e.triggerSlideHandler, t.setState(e), n !== void 0 && (t.slideHandler(n), t.props.verticalSwiping && t.enableBodyScroll());
        }
      }), r(o(t), "touchEnd", function(a) {
        t.swipeEnd(a), t.clickable = !0;
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
      }), r(o(t), "slickGoTo", function(a) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (a = Number(a), isNaN(a)) return "";
        t.callbackTimers.push(setTimeout(function() {
          return t.changeSlide({
            message: "index",
            index: a,
            currentSlide: t.state.currentSlide
          }, e);
        }, 0));
      }), r(o(t), "play", function() {
        var a;
        if (t.props.rtl)
          a = t.state.currentSlide - t.props.slidesToScroll;
        else if ((0, y.canGoNext)(T(T({}, t.props), t.state)))
          a = t.state.currentSlide + t.props.slidesToScroll;
        else
          return !1;
        t.slideHandler(a);
      }), r(o(t), "autoPlay", function(a) {
        t.autoplayTimer && clearInterval(t.autoplayTimer);
        var e = t.state.autoplaying;
        if (a === "update") {
          if (e === "hovered" || e === "focused" || e === "paused")
            return;
        } else if (a === "leave") {
          if (e === "paused" || e === "focused")
            return;
        } else if (a === "blur" && (e === "paused" || e === "hovered"))
          return;
        t.autoplayTimer = setInterval(t.play, t.props.autoplaySpeed + 50), t.setState({
          autoplaying: "playing"
        });
      }), r(o(t), "pause", function(a) {
        t.autoplayTimer && (clearInterval(t.autoplayTimer), t.autoplayTimer = null);
        var e = t.state.autoplaying;
        a === "paused" ? t.setState({
          autoplaying: "paused"
        }) : a === "focused" ? (e === "hovered" || e === "playing") && t.setState({
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
        var a = (0, S.default)("slick-slider", t.props.className, {
          "slick-vertical": t.props.vertical,
          "slick-initialized": !0
        }), e = T(T({}, t.props), t.state), n = (0, y.extractObject)(e, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]), p = t.props.pauseOnHover;
        n = T(T({}, n), {}, {
          onMouseEnter: p ? t.onTrackOver : null,
          onMouseLeave: p ? t.onTrackLeave : null,
          onMouseOver: p ? t.onTrackOver : null,
          focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
        });
        var _;
        if (t.props.dots === !0 && t.state.slideCount >= t.props.slidesToShow) {
          var m = (0, y.extractObject)(e, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]), P = t.props.pauseOnDotsHover;
          m = T(T({}, m), {}, {
            clickHandler: t.changeSlide,
            onMouseEnter: P ? t.onDotsLeave : null,
            onMouseOver: P ? t.onDotsOver : null,
            onMouseLeave: P ? t.onDotsLeave : null
          }), _ = /* @__PURE__ */ i.default.createElement(E.Dots, m);
        }
        var C, j, I = (0, y.extractObject)(e, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        I.clickHandler = t.changeSlide, t.props.arrows && (C = /* @__PURE__ */ i.default.createElement(L.PrevArrow, I), j = /* @__PURE__ */ i.default.createElement(L.NextArrow, I));
        var H = null;
        t.props.vertical && (H = {
          height: t.state.listHeight
        });
        var W = null;
        t.props.vertical === !1 ? t.props.centerMode === !0 && (W = {
          padding: "0px " + t.props.centerPadding
        }) : t.props.centerMode === !0 && (W = {
          padding: t.props.centerPadding + " 0px"
        });
        var K = T(T({}, H), W), X = t.props.touchMove, $ = {
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
        }, D = {
          className: a,
          dir: "ltr",
          style: t.props.style
        };
        return t.props.unslick && ($ = {
          className: "slick-list"
        }, D = {
          className: a,
          style: t.props.style
        }), /* @__PURE__ */ i.default.createElement("div", D, t.props.unslick ? "" : C, /* @__PURE__ */ i.default.createElement("div", q({
          ref: t.listRefHandler
        }, $), /* @__PURE__ */ i.default.createElement(g.Track, q({
          ref: t.trackRefHandler
        }, n), t.props.children)), t.props.unslick ? "" : j, t.props.unslick ? "" : _);
      }), t.list = null, t.track = null, t.state = T(T({}, f.default), {}, {
        currentSlide: t.props.initialSlide,
        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
        slideCount: i.default.Children.count(t.props.children)
      }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
      var z = t.ssrInit();
      return t.state = T(T({}, t.state), z), t;
    }
    return te(O, [{
      key: "didPropsChange",
      value: function(t) {
        for (var z = !1, a = 0, e = Object.keys(this.props); a < e.length; a++) {
          var n = e[a];
          if (!t.hasOwnProperty(n)) {
            z = !0;
            break;
          }
          if (!(N(t[n]) === "object" || typeof t[n] == "function" || isNaN(t[n])) && t[n] !== this.props[n]) {
            z = !0;
            break;
          }
        }
        return z || i.default.Children.count(this.props.children) !== i.default.Children.count(t.children);
      }
    }]), O;
  })(i.default.Component), ve;
}
var Me, Ke;
function It() {
  if (Ke) return Me;
  Ke = 1;
  var i = function(f) {
    return f.replace(/[A-Z]/g, function(h) {
      return "-" + h.toLowerCase();
    }).toLowerCase();
  };
  return Me = i, Me;
}
var Re, Ye;
function Ht() {
  if (Ye) return Re;
  Ye = 1;
  var i = It(), f = function(y) {
    var g = /[height|width]$/;
    return g.test(y);
  }, h = function(y) {
    var g = "", E = Object.keys(y);
    return E.forEach(function(L, M) {
      var A = y[L];
      L = i(L), f(L) && typeof A == "number" && (A = A + "px"), A === !0 ? g += L : A === !1 ? g += "not " + L : g += "(" + L + ": " + A + ")", M < E.length - 1 && (g += " and ");
    }), g;
  }, S = function(y) {
    var g = "";
    return typeof y == "string" ? y : y instanceof Array ? (y.forEach(function(E, L) {
      g += h(E), L < y.length - 1 && (g += ", ");
    }), g) : h(y);
  };
  return Re = S, Re;
}
var Ue;
function At() {
  return Ue || (Ue = 1, (function(i) {
    var f = { NODE_ENV: "production" };
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var h = L(ue), S = Nt(), y = L(Ht()), g = L(Je()), E = ge();
    function L(l) {
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
    function N(l, r) {
      var v = Object.keys(l);
      if (Object.getOwnPropertySymbols) {
        var b = Object.getOwnPropertySymbols(l);
        r && (b = b.filter(function(c) {
          return Object.getOwnPropertyDescriptor(l, c).enumerable;
        })), v.push.apply(v, b);
      }
      return v;
    }
    function q(l) {
      for (var r = 1; r < arguments.length; r++) {
        var v = arguments[r] != null ? arguments[r] : {};
        r % 2 ? N(Object(v), !0).forEach(function(b) {
          u(l, b, v[b]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(v)) : N(Object(v)).forEach(function(b) {
          Object.defineProperty(l, b, Object.getOwnPropertyDescriptor(v, b));
        });
      }
      return l;
    }
    function F(l, r) {
      if (!(l instanceof r)) throw new TypeError("Cannot call a class as a function");
    }
    function U(l, r) {
      for (var v = 0; v < r.length; v++) {
        var b = r[v];
        b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(l, o(b.key), b);
      }
    }
    function Q(l, r, v) {
      return r && U(l.prototype, r), Object.defineProperty(l, "prototype", { writable: !1 }), l;
    }
    function T(l, r) {
      if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
      l.prototype = Object.create(r && r.prototype, { constructor: { value: l, writable: !0, configurable: !0 } }), Object.defineProperty(l, "prototype", { writable: !1 }), r && V(l, r);
    }
    function V(l, r) {
      return V = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(v, b) {
        return v.__proto__ = b, v;
      }, V(l, r);
    }
    function B(l) {
      var r = J();
      return function() {
        var v, b = s(l);
        if (r) {
          var c = s(this).constructor;
          v = Reflect.construct(b, arguments, c);
        } else v = b.apply(this, arguments);
        return te(this, v);
      };
    }
    function te(l, r) {
      if (r && (M(r) == "object" || typeof r == "function")) return r;
      if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return Y(l);
    }
    function Y(l) {
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
    function s(l) {
      return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r);
      }, s(l);
    }
    function u(l, r, v) {
      return (r = o(r)) in l ? Object.defineProperty(l, r, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : l[r] = v, l;
    }
    function o(l) {
      var r = w(l, "string");
      return M(r) == "symbol" ? r : r + "";
    }
    function w(l, r) {
      if (M(l) != "object" || !l) return l;
      var v = l[Symbol.toPrimitive];
      if (v !== void 0) {
        var b = v.call(l, r);
        if (M(b) != "object") return b;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(l);
    }
    i.default = /* @__PURE__ */ (function(l) {
      T(v, l);
      var r = B(v);
      function v(b) {
        var c;
        return F(this, v), c = r.call(this, b), u(Y(c), "innerSliderRefHandler", function(d) {
          return c.innerSlider = d;
        }), u(Y(c), "slickPrev", function() {
          return c.innerSlider.slickPrev();
        }), u(Y(c), "slickNext", function() {
          return c.innerSlider.slickNext();
        }), u(Y(c), "slickGoTo", function(d) {
          var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return c.innerSlider.slickGoTo(d, O);
        }), u(Y(c), "slickPause", function() {
          return c.innerSlider.pause("paused");
        }), u(Y(c), "slickPlay", function() {
          return c.innerSlider.autoPlay("play");
        }), c.state = {
          breakpoint: null
        }, c._responsiveMediaHandlers = [], c;
      }
      return Q(v, [{
        key: "media",
        value: function(c, d) {
          var O = window.matchMedia(c), k = function(z) {
            var a = z.matches;
            a && d();
          };
          O.addListener(k), this._responsiveMediaHandlers.push({
            mql: O,
            query: c,
            listener: k
          });
        }
        // handles responsive breakpoints
      }, {
        key: "componentDidMount",
        value: function() {
          var c = this;
          if (this.props.responsive) {
            var d = this.props.responsive.map(function(k) {
              return k.breakpoint;
            });
            d.sort(function(k, t) {
              return k - t;
            }), d.forEach(function(k, t) {
              var z;
              t === 0 ? z = (0, y.default)({
                minWidth: 0,
                maxWidth: k
              }) : z = (0, y.default)({
                minWidth: d[t - 1] + 1,
                maxWidth: k
              }), (0, E.canUseDOM)() && c.media(z, function() {
                c.setState({
                  breakpoint: k
                });
              });
            });
            var O = (0, y.default)({
              minWidth: d.slice(-1)[0]
            });
            (0, E.canUseDOM)() && this.media(O, function() {
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
          var c = this, d, O;
          this.state.breakpoint ? (O = this.props.responsive.filter(function(P) {
            return P.breakpoint === c.state.breakpoint;
          }), d = O[0].settings === "unslick" ? "unslick" : q(q(q({}, g.default), this.props), O[0].settings)) : d = q(q({}, g.default), this.props), d.centerMode && (d.slidesToScroll > 1 && f.NODE_ENV, d.slidesToScroll = 1), d.fade && (d.slidesToShow > 1 && f.NODE_ENV, d.slidesToScroll > 1 && f.NODE_ENV, d.slidesToShow = 1, d.slidesToScroll = 1);
          var k = h.default.Children.toArray(this.props.children);
          k = k.filter(function(P) {
            return typeof P == "string" ? !!P.trim() : !!P;
          }), d.variableWidth && (d.rows > 1 || d.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), d.variableWidth = !1);
          for (var t = [], z = null, a = 0; a < k.length; a += d.rows * d.slidesPerRow) {
            for (var e = [], n = a; n < a + d.rows * d.slidesPerRow; n += d.slidesPerRow) {
              for (var p = [], _ = n; _ < n + d.slidesPerRow && (d.variableWidth && k[_].props.style && (z = k[_].props.style.width), !(_ >= k.length)); _ += 1)
                p.push(/* @__PURE__ */ h.default.cloneElement(k[_], {
                  key: 100 * a + 10 * n + _,
                  tabIndex: -1,
                  style: {
                    width: "".concat(100 / d.slidesPerRow, "%"),
                    display: "inline-block"
                  }
                }));
              e.push(/* @__PURE__ */ h.default.createElement("div", {
                key: 10 * a + n
              }, p));
            }
            d.variableWidth ? t.push(/* @__PURE__ */ h.default.createElement("div", {
              key: a,
              style: {
                width: z
              }
            }, e)) : t.push(/* @__PURE__ */ h.default.createElement("div", {
              key: a
            }, e));
          }
          if (d === "unslick") {
            var m = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ h.default.createElement("div", {
              className: m
            }, k);
          } else t.length <= d.slidesToShow && (d.unslick = !0);
          return /* @__PURE__ */ h.default.createElement(S.InnerSlider, A({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, (0, E.filterSettings)(d)), t);
        }
      }]), v;
    })(h.default.Component);
  })(Te)), Te;
}
var Ve;
function Wt() {
  return Ve || (Ve = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var f = h(At());
    function h(S) {
      return S && S.__esModule ? S : { default: S };
    }
    i.default = f.default;
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
